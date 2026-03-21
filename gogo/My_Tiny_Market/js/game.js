(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

function allSettled(arr) {
  var P = this;
  return new P(function(resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(
        new TypeError(
          typeof arr +
            ' ' +
            arr +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          then.call(
            val,
            function(val) {
              res(i, val);
            },
            function(e) {
              args[i] = { status: 'rejected', reason: e };
              if (--remaining === 0) {
                resolve(args);
              }
            }
          );
          return;
        }
      }
      args[i] = { status: 'fulfilled', value: val };
      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}

/**
 * @constructor
 */
function AggregateError(errors, message) {
  this.name = 'AggregateError', this.errors = errors;
  this.message = message || '';
}
AggregateError.prototype = Error.prototype;

function any(arr) {
  var P = this;
  return new P(function(resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(new TypeError('Promise.any accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return reject();

    var rejectionReasons = [];
    for (var i = 0; i < args.length; i++) {
      try {
        P.resolve(args[i])
          .then(resolve)
          .catch(function(error) {
            rejectionReasons.push(error);
            if (rejectionReasons.length === args.length) {
              reject(
                new AggregateError(
                  rejectionReasons,
                  'All promises were rejected'
                )
              );
            }
          });
      } catch (ex) {
        reject(ex);
      }
    }
  });
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = finallyConstructor;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.any = any;

Promise.allSettled = allSettled;

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

// Expose the polyfill if Promise is undefined or set to a
// non-function value. The latter can be due to a named HTMLElement
// being exposed by browsers for legacy reasons.
// https://github.com/taylorhakes/promise-polyfill/issues/114
if (typeof globalNS['Promise'] !== 'function') {
  globalNS['Promise'] = Promise;
} else {
  if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = finallyConstructor;
  }
  if (!globalNS.Promise.allSettled) {
    globalNS.Promise.allSettled = allSettled;
  }
  if (!globalNS.Promise.any) {
    globalNS.Promise.any = any;
  }
}

})));

/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.PointerEventsPolyfill = factory());
}(this, function () { 'use strict';

  /**
   * This is the constructor for new PointerEvents.
   *
   * New Pointer Events must be given a type, and an optional dictionary of
   * initialization properties.
   *
   * Due to certain platform requirements, events returned from the constructor
   * identify as MouseEvents.
   *
   * @constructor
   * @param {String} inType The type of the event to create.
   * @param {Object} [inDict] An optional dictionary of initial event properties.
   * @return {Event} A new PointerEvent of type `inType`, initialized with properties from `inDict`.
   */
  var MOUSE_PROPS = [
    'bubbles',
    'cancelable',
    'view',
    'detail',
    'screenX',
    'screenY',
    'clientX',
    'clientY',
    'ctrlKey',
    'altKey',
    'shiftKey',
    'metaKey',
    'button',
    'relatedTarget',
    'pageX',
    'pageY'
  ];

  var MOUSE_DEFAULTS = [
    false,
    false,
    null,
    null,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null,
    0,
    0
  ];

  function PointerEvent(inType, inDict) {
    inDict = inDict || Object.create(null);

    var e = document.createEvent('Event');
    e.initEvent(inType, inDict.bubbles || false, inDict.cancelable || false);

    // define inherited MouseEvent properties
    // skip bubbles and cancelable since they're set above in initEvent()
    for (var i = 2, p; i < MOUSE_PROPS.length; i++) {
      p = MOUSE_PROPS[i];
      e[p] = inDict[p] || MOUSE_DEFAULTS[i];
    }
    e.buttons = inDict.buttons || 0;

    // Spec requires that pointers without pressure specified use 0.5 for down
    // state and 0 for up state.
    var pressure = 0;

    if (inDict.pressure && e.buttons) {
      pressure = inDict.pressure;
    } else {
      pressure = e.buttons ? 0.5 : 0;
    }

    // add x/y properties aliased to clientX/Y
    e.x = e.clientX;
    e.y = e.clientY;

    // define the properties of the PointerEvent interface
    e.pointerId = inDict.pointerId || 0;
    e.width = inDict.width || 0;
    e.height = inDict.height || 0;
    e.pressure = pressure;
    e.tiltX = inDict.tiltX || 0;
    e.tiltY = inDict.tiltY || 0;
    e.twist = inDict.twist || 0;
    e.tangentialPressure = inDict.tangentialPressure || 0;
    e.pointerType = inDict.pointerType || '';
    e.hwTimestamp = inDict.hwTimestamp || 0;
    e.isPrimary = inDict.isPrimary || false;
    return e;
  }

  /**
   * This module implements a map of pointer states
   */
  var USE_MAP = window.Map && window.Map.prototype.forEach;
  var PointerMap = USE_MAP ? Map : SparseArrayMap;

  function SparseArrayMap() {
    this.array = [];
    this.size = 0;
  }

  SparseArrayMap.prototype = {
    set: function(k, v) {
      if (v === undefined) {
        return this.delete(k);
      }
      if (!this.has(k)) {
        this.size++;
      }
      this.array[k] = v;
    },
    has: function(k) {
      return this.array[k] !== undefined;
    },
    delete: function(k) {
      if (this.has(k)) {
        delete this.array[k];
        this.size--;
      }
    },
    get: function(k) {
      return this.array[k];
    },
    clear: function() {
      this.array.length = 0;
      this.size = 0;
    },

    // return value, key, map
    forEach: function(callback, thisArg) {
      return this.array.forEach(function(v, k) {
        callback.call(thisArg, v, k, this);
      }, this);
    }
  };

  var CLONE_PROPS = [

    // MouseEvent
    'bubbles',
    'cancelable',
    'view',
    'detail',
    'screenX',
    'screenY',
    'clientX',
    'clientY',
    'ctrlKey',
    'altKey',
    'shiftKey',
    'metaKey',
    'button',
    'relatedTarget',

    // DOM Level 3
    'buttons',

    // PointerEvent
    'pointerId',
    'width',
    'height',
    'pressure',
    'tiltX',
    'tiltY',
    'pointerType',
    'hwTimestamp',
    'isPrimary',

    // event instance
    'type',
    'target',
    'currentTarget',
    'which',
    'pageX',
    'pageY',
    'timeStamp'
  ];

  var CLONE_DEFAULTS = [

    // MouseEvent
    false,
    false,
    null,
    null,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null,

    // DOM Level 3
    0,

    // PointerEvent
    0,
    0,
    0,
    0,
    0,
    0,
    '',
    0,
    false,

    // event instance
    '',
    null,
    null,
    0,
    0,
    0,
    0
  ];

  var BOUNDARY_EVENTS = {
    'pointerover': 1,
    'pointerout': 1,
    'pointerenter': 1,
    'pointerleave': 1
  };

  var HAS_SVG_INSTANCE = (typeof SVGElementInstance !== 'undefined');

  /**
   * This module is for normalizing events. Mouse and Touch events will be
   * collected here, and fire PointerEvents that have the same semantics, no
   * matter the source.
   * Events fired:
   *   - pointerdown: a pointing is added
   *   - pointerup: a pointer is removed
   *   - pointermove: a pointer is moved
   *   - pointerover: a pointer crosses into an element
   *   - pointerout: a pointer leaves an element
   *   - pointercancel: a pointer will no longer generate events
   */
  var dispatcher = {
    pointermap: new PointerMap(),
    eventMap: Object.create(null),
    captureInfo: Object.create(null),

    // Scope objects for native events.
    // This exists for ease of testing.
    eventSources: Object.create(null),
    eventSourceList: [],
    /**
     * Add a new event source that will generate pointer events.
     *
     * `inSource` must contain an array of event names named `events`, and
     * functions with the names specified in the `events` array.
     * @param {string} name A name for the event source
     * @param {Object} source A new source of platform events.
     */
    registerSource: function(name, source) {
      var s = source;
      var newEvents = s.events;
      if (newEvents) {
        newEvents.forEach(function(e) {
          if (s[e]) {
            this.eventMap[e] = s[e].bind(s);
          }
        }, this);
        this.eventSources[name] = s;
        this.eventSourceList.push(s);
      }
    },
    register: function(element) {
      var l = this.eventSourceList.length;
      for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {

        // call eventsource register
        es.register.call(es, element);
      }
    },
    unregister: function(element) {
      var l = this.eventSourceList.length;
      for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {

        // call eventsource register
        es.unregister.call(es, element);
      }
    },
    contains: /*scope.external.contains || */function(container, contained) {
      try {
        return container.contains(contained);
      } catch (ex) {

        // most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
        return false;
      }
    },

    // EVENTS
    down: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerdown', inEvent);
    },
    move: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointermove', inEvent);
    },
    up: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerup', inEvent);
    },
    enter: function(inEvent) {
      inEvent.bubbles = false;
      this.fireEvent('pointerenter', inEvent);
    },
    leave: function(inEvent) {
      inEvent.bubbles = false;
      this.fireEvent('pointerleave', inEvent);
    },
    over: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerover', inEvent);
    },
    out: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerout', inEvent);
    },
    cancel: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointercancel', inEvent);
    },
    leaveOut: function(event) {
      this.out(event);
      this.propagate(event, this.leave, false);
    },
    enterOver: function(event) {
      this.over(event);
      this.propagate(event, this.enter, true);
    },

    // LISTENER LOGIC
    eventHandler: function(inEvent) {

      // This is used to prevent multiple dispatch of pointerevents from
      // platform events. This can happen when two elements in different scopes
      // are set up to create pointer events, which is relevant to Shadow DOM.
      if (inEvent._handledByPE) {
        return;
      }
      var type = inEvent.type;
      var fn = this.eventMap && this.eventMap[type];
      if (fn) {
        fn(inEvent);
      }
      inEvent._handledByPE = true;
    },

    // set up event listeners
    listen: function(target, events) {
      events.forEach(function(e) {
        this.addEvent(target, e);
      }, this);
    },

    // remove event listeners
    unlisten: function(target, events) {
      events.forEach(function(e) {
        this.removeEvent(target, e);
      }, this);
    },
    addEvent: /*scope.external.addEvent || */function(target, eventName) {
      target.addEventListener(eventName, this.boundHandler);
    },
    removeEvent: /*scope.external.removeEvent || */function(target, eventName) {
      target.removeEventListener(eventName, this.boundHandler);
    },

    // EVENT CREATION AND TRACKING
    /**
     * Creates a new Event of type `inType`, based on the information in
     * `inEvent`.
     *
     * @param {string} inType A string representing the type of event to create
     * @param {Event} inEvent A platform event with a target
     * @return {Event} A PointerEvent of type `inType`
     */
    makeEvent: function(inType, inEvent) {

      // relatedTarget must be null if pointer is captured
      if (this.captureInfo[inEvent.pointerId]) {
        inEvent.relatedTarget = null;
      }
      var e = new PointerEvent(inType, inEvent);
      if (inEvent.preventDefault) {
        e.preventDefault = inEvent.preventDefault;
      }
      e._target = e._target || inEvent.target;
      return e;
    },

    // make and dispatch an event in one call
    fireEvent: function(inType, inEvent) {
      var e = this.makeEvent(inType, inEvent);
      return this.dispatchEvent(e);
    },
    /**
     * Returns a snapshot of inEvent, with writable properties.
     *
     * @param {Event} inEvent An event that contains properties to copy.
     * @return {Object} An object containing shallow copies of `inEvent`'s
     *    properties.
     */
    cloneEvent: function(inEvent) {
      var eventCopy = Object.create(null);
      var p;
      for (var i = 0; i < CLONE_PROPS.length; i++) {
        p = CLONE_PROPS[i];
        eventCopy[p] = inEvent[p] || CLONE_DEFAULTS[i];

        // Work around SVGInstanceElement shadow tree
        // Return the <use> element that is represented by the instance for Safari, Chrome, IE.
        // This is the behavior implemented by Firefox.
        if (HAS_SVG_INSTANCE && (p === 'target' || p === 'relatedTarget')) {
          if (eventCopy[p] instanceof SVGElementInstance) {
            eventCopy[p] = eventCopy[p].correspondingUseElement;
          }
        }
      }

      // keep the semantics of preventDefault
      if (inEvent.preventDefault) {
        eventCopy.preventDefault = function() {
          inEvent.preventDefault();
        };
      }
      return eventCopy;
    },
    getTarget: function(inEvent) {
      var capture = this.captureInfo[inEvent.pointerId];
      if (!capture) {
        return inEvent._target;
      }
      if (inEvent._target === capture || !(inEvent.type in BOUNDARY_EVENTS)) {
        return capture;
      }
    },
    propagate: function(event, fn, propagateDown) {
      var target = event.target;
      var targets = [];

      // Order of conditions due to document.contains() missing in IE.
      while (target !== document && !target.contains(event.relatedTarget)) {
        targets.push(target);
        target = target.parentNode;

        // Touch: Do not propagate if node is detached.
        if (!target) {
          return;
        }
      }
      if (propagateDown) {
        targets.reverse();
      }
      targets.forEach(function(target) {
        event.target = target;
        fn.call(this, event);
      }, this);
    },
    setCapture: function(inPointerId, inTarget, skipDispatch) {
      if (this.captureInfo[inPointerId]) {
        this.releaseCapture(inPointerId, skipDispatch);
      }

      this.captureInfo[inPointerId] = inTarget;
      this.implicitRelease = this.releaseCapture.bind(this, inPointerId, skipDispatch);
      document.addEventListener('pointerup', this.implicitRelease);
      document.addEventListener('pointercancel', this.implicitRelease);

      var e = new PointerEvent('gotpointercapture');
      e.pointerId = inPointerId;
      e._target = inTarget;

      if (!skipDispatch) {
        this.asyncDispatchEvent(e);
      }
    },
    releaseCapture: function(inPointerId, skipDispatch) {
      var t = this.captureInfo[inPointerId];
      if (!t) {
        return;
      }

      this.captureInfo[inPointerId] = undefined;
      document.removeEventListener('pointerup', this.implicitRelease);
      document.removeEventListener('pointercancel', this.implicitRelease);

      var e = new PointerEvent('lostpointercapture');
      e.pointerId = inPointerId;
      e._target = t;

      if (!skipDispatch) {
        this.asyncDispatchEvent(e);
      }
    },
    /**
     * Dispatches the event to its target.
     *
     * @param {Event} inEvent The event to be dispatched.
     * @return {Boolean} True if an event handler returns true, false otherwise.
     */
    dispatchEvent: /*scope.external.dispatchEvent || */function(inEvent) {
      var t = this.getTarget(inEvent);
      if (t) {
        return t.dispatchEvent(inEvent);
      }
    },
    asyncDispatchEvent: function(inEvent) {
      requestAnimationFrame(this.dispatchEvent.bind(this, inEvent));
    }
  };
  dispatcher.boundHandler = dispatcher.eventHandler.bind(dispatcher);

  var targeting = {
    shadow: function(inEl) {
      if (inEl) {
        return inEl.shadowRoot || inEl.webkitShadowRoot;
      }
    },
    canTarget: function(shadow) {
      return shadow && Boolean(shadow.elementFromPoint);
    },
    targetingShadow: function(inEl) {
      var s = this.shadow(inEl);
      if (this.canTarget(s)) {
        return s;
      }
    },
    olderShadow: function(shadow) {
      var os = shadow.olderShadowRoot;
      if (!os) {
        var se = shadow.querySelector('shadow');
        if (se) {
          os = se.olderShadowRoot;
        }
      }
      return os;
    },
    allShadows: function(element) {
      var shadows = [];
      var s = this.shadow(element);
      while (s) {
        shadows.push(s);
        s = this.olderShadow(s);
      }
      return shadows;
    },
    searchRoot: function(inRoot, x, y) {
      if (inRoot) {
        var t = inRoot.elementFromPoint(x, y);
        var st, sr;

        // is element a shadow host?
        sr = this.targetingShadow(t);
        while (sr) {

          // find the the element inside the shadow root
          st = sr.elementFromPoint(x, y);
          if (!st) {

            // check for older shadows
            sr = this.olderShadow(sr);
          } else {

            // shadowed element may contain a shadow root
            var ssr = this.targetingShadow(st);
            return this.searchRoot(ssr, x, y) || st;
          }
        }

        // light dom element is the target
        return t;
      }
    },
    owner: function(element) {
      var s = element;

      // walk up until you hit the shadow root or document
      while (s.parentNode) {
        s = s.parentNode;
      }

      // the owner element is expected to be a Document or ShadowRoot
      if (s.nodeType !== Node.DOCUMENT_NODE && s.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        s = document;
      }
      return s;
    },
    findTarget: function(inEvent) {
      var x = inEvent.clientX;
      var y = inEvent.clientY;

      // if the listener is in the shadow root, it is much faster to start there
      var s = this.owner(inEvent.target);

      // if x, y is not in this root, fall back to document search
      if (!s.elementFromPoint(x, y)) {
        s = document;
      }
      return this.searchRoot(s, x, y);
    }
  };

  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
  var map = Array.prototype.map.call.bind(Array.prototype.map);
  var toArray = Array.prototype.slice.call.bind(Array.prototype.slice);
  var filter = Array.prototype.filter.call.bind(Array.prototype.filter);
  var MO = window.MutationObserver || window.WebKitMutationObserver;
  var SELECTOR = '[touch-action]';
  var OBSERVER_INIT = {
    subtree: true,
    childList: true,
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['touch-action']
  };

  function Installer(add, remove, changed, binder) {
    this.addCallback = add.bind(binder);
    this.removeCallback = remove.bind(binder);
    this.changedCallback = changed.bind(binder);
    if (MO) {
      this.observer = new MO(this.mutationWatcher.bind(this));
    }
  }

  Installer.prototype = {
    watchSubtree: function(target) {

      // Only watch scopes that can target find, as these are top-level.
      // Otherwise we can see duplicate additions and removals that add noise.
      //
      // TODO(dfreedman): For some instances with ShadowDOMPolyfill, we can see
      // a removal without an insertion when a node is redistributed among
      // shadows. Since it all ends up correct in the document, watching only
      // the document will yield the correct mutations to watch.
      if (this.observer && targeting.canTarget(target)) {
        this.observer.observe(target, OBSERVER_INIT);
      }
    },
    enableOnSubtree: function(target) {
      this.watchSubtree(target);
      if (target === document && document.readyState !== 'complete') {
        this.installOnLoad();
      } else {
        this.installNewSubtree(target);
      }
    },
    installNewSubtree: function(target) {
      forEach(this.findElements(target), this.addElement, this);
    },
    findElements: function(target) {
      if (target.querySelectorAll) {
        return target.querySelectorAll(SELECTOR);
      }
      return [];
    },
    removeElement: function(el) {
      this.removeCallback(el);
    },
    addElement: function(el) {
      this.addCallback(el);
    },
    elementChanged: function(el, oldValue) {
      this.changedCallback(el, oldValue);
    },
    concatLists: function(accum, list) {
      return accum.concat(toArray(list));
    },

    // register all touch-action = none nodes on document load
    installOnLoad: function() {
      document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
          this.installNewSubtree(document);
        }
      }.bind(this));
    },
    isElement: function(n) {
      return n.nodeType === Node.ELEMENT_NODE;
    },
    flattenMutationTree: function(inNodes) {

      // find children with touch-action
      var tree = map(inNodes, this.findElements, this);

      // make sure the added nodes are accounted for
      tree.push(filter(inNodes, this.isElement));

      // flatten the list
      return tree.reduce(this.concatLists, []);
    },
    mutationWatcher: function(mutations) {
      mutations.forEach(this.mutationHandler, this);
    },
    mutationHandler: function(m) {
      if (m.type === 'childList') {
        var added = this.flattenMutationTree(m.addedNodes);
        added.forEach(this.addElement, this);
        var removed = this.flattenMutationTree(m.removedNodes);
        removed.forEach(this.removeElement, this);
      } else if (m.type === 'attributes') {
        this.elementChanged(m.target, m.oldValue);
      }
    }
  };

  function shadowSelector(v) {
    return 'body /shadow-deep/ ' + selector(v);
  }
  function selector(v) {
    return '[touch-action="' + v + '"]';
  }
  function rule(v) {
    return '{ -ms-touch-action: ' + v + '; touch-action: ' + v + '; }';
  }
  var attrib2css = [
    'none',
    'auto',
    'pan-x',
    'pan-y',
    {
      rule: 'pan-x pan-y',
      selectors: [
        'pan-x pan-y',
        'pan-y pan-x'
      ]
    }
  ];
  var styles = '';

  // only install stylesheet if the browser has touch action support
  var hasNativePE = window.PointerEvent || window.MSPointerEvent;

  // only add shadow selectors if shadowdom is supported
  var hasShadowRoot = !window.ShadowDOMPolyfill && document.head.createShadowRoot;

  function applyAttributeStyles() {
    if (hasNativePE) {
      attrib2css.forEach(function(r) {
        if (String(r) === r) {
          styles += selector(r) + rule(r) + '\n';
          if (hasShadowRoot) {
            styles += shadowSelector(r) + rule(r) + '\n';
          }
        } else {
          styles += r.selectors.map(selector) + rule(r.rule) + '\n';
          if (hasShadowRoot) {
            styles += r.selectors.map(shadowSelector) + rule(r.rule) + '\n';
          }
        }
      });

      var el = document.createElement('style');
      el.textContent = styles;
      document.head.appendChild(el);
    }
  }

  var pointermap = dispatcher.pointermap;

  // radius around touchend that swallows mouse events
  var DEDUP_DIST = 25;

  // left, middle, right, back, forward
  var BUTTON_TO_BUTTONS = [1, 4, 2, 8, 16];

  var HAS_BUTTONS = false;
  try {
    HAS_BUTTONS = new MouseEvent('test', { buttons: 1 }).buttons === 1;
  } catch (e) {}

  // handler block for native mouse events
  var mouseEvents = {
    POINTER_ID: 1,
    POINTER_TYPE: 'mouse',
    events: [
      'mousedown',
      'mousemove',
      'mouseup',
      'mouseover',
      'mouseout'
    ],
    register: function(target) {
      dispatcher.listen(target, this.events);
    },
    unregister: function(target) {
      dispatcher.unlisten(target, this.events);
    },
    lastTouches: [],

    // collide with the global mouse listener
    isEventSimulatedFromTouch: function(inEvent) {
      var lts = this.lastTouches;
      var x = inEvent.clientX;
      var y = inEvent.clientY;
      for (var i = 0, l = lts.length, t; i < l && (t = lts[i]); i++) {

        // simulated mouse events will be swallowed near a primary touchend
        var dx = Math.abs(x - t.x);
        var dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DIST && dy <= DEDUP_DIST) {
          return true;
        }
      }
    },
    prepareEvent: function(inEvent) {
      var e = dispatcher.cloneEvent(inEvent);

      // forward mouse preventDefault
      var pd = e.preventDefault;
      e.preventDefault = function() {
        inEvent.preventDefault();
        pd();
      };
      e.pointerId = this.POINTER_ID;
      e.isPrimary = true;
      e.pointerType = this.POINTER_TYPE;
      return e;
    },
    prepareButtonsForMove: function(e, inEvent) {
      var p = pointermap.get(this.POINTER_ID);

      // Update buttons state after possible out-of-document mouseup.
      if (inEvent.which === 0 || !p) {
        e.buttons = 0;
      } else {
        e.buttons = p.buttons;
      }
      inEvent.buttons = e.buttons;
    },
    mousedown: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var p = pointermap.get(this.POINTER_ID);
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) {
          e.buttons = BUTTON_TO_BUTTONS[e.button];
          if (p) { e.buttons |= p.buttons; }
          inEvent.buttons = e.buttons;
        }
        pointermap.set(this.POINTER_ID, inEvent);
        if (!p || p.buttons === 0) {
          dispatcher.down(e);
        } else {
          dispatcher.move(e);
        }
      }
    },
    mousemove: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
        e.button = -1;
        pointermap.set(this.POINTER_ID, inEvent);
        dispatcher.move(e);
      }
    },
    mouseup: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var p = pointermap.get(this.POINTER_ID);
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) {
          var up = BUTTON_TO_BUTTONS[e.button];

          // Produces wrong state of buttons in Browsers without `buttons` support
          // when a mouse button that was pressed outside the document is released
          // inside and other buttons are still pressed down.
          e.buttons = p ? p.buttons & ~up : 0;
          inEvent.buttons = e.buttons;
        }
        pointermap.set(this.POINTER_ID, inEvent);

        // Support: Firefox <=44 only
        // FF Ubuntu includes the lifted button in the `buttons` property on
        // mouseup.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1223366
        e.buttons &= ~BUTTON_TO_BUTTONS[e.button];
        if (e.buttons === 0) {
          dispatcher.up(e);
        } else {
          dispatcher.move(e);
        }
      }
    },
    mouseover: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
        e.button = -1;
        pointermap.set(this.POINTER_ID, inEvent);
        dispatcher.enterOver(e);
      }
    },
    mouseout: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
        e.button = -1;
        dispatcher.leaveOut(e);
      }
    },
    cancel: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.cancel(e);
      this.deactivateMouse();
    },
    deactivateMouse: function() {
      pointermap.delete(this.POINTER_ID);
    }
  };

  var captureInfo = dispatcher.captureInfo;
  var findTarget = targeting.findTarget.bind(targeting);
  var allShadows = targeting.allShadows.bind(targeting);
  var pointermap$1 = dispatcher.pointermap;

  // This should be long enough to ignore compat mouse events made by touch
  var DEDUP_TIMEOUT = 2500;
  var CLICK_COUNT_TIMEOUT = 200;
  var ATTRIB = 'touch-action';
  var INSTALLER;

  // handler block for native touch events
  var touchEvents = {
    events: [
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel'
    ],
    register: function(target) {
      INSTALLER.enableOnSubtree(target);
    },
    unregister: function() {

      // TODO(dfreedman): is it worth it to disconnect the MO?
    },
    elementAdded: function(el) {
      var a = el.getAttribute(ATTRIB);
      var st = this.touchActionToScrollType(a);
      if (st) {
        el._scrollType = st;
        dispatcher.listen(el, this.events);

        // set touch-action on shadows as well
        allShadows(el).forEach(function(s) {
          s._scrollType = st;
          dispatcher.listen(s, this.events);
        }, this);
      }
    },
    elementRemoved: function(el) {
      el._scrollType = undefined;
      dispatcher.unlisten(el, this.events);

      // remove touch-action from shadow
      allShadows(el).forEach(function(s) {
        s._scrollType = undefined;
        dispatcher.unlisten(s, this.events);
      }, this);
    },
    elementChanged: function(el, oldValue) {
      var a = el.getAttribute(ATTRIB);
      var st = this.touchActionToScrollType(a);
      var oldSt = this.touchActionToScrollType(oldValue);

      // simply update scrollType if listeners are already established
      if (st && oldSt) {
        el._scrollType = st;
        allShadows(el).forEach(function(s) {
          s._scrollType = st;
        }, this);
      } else if (oldSt) {
        this.elementRemoved(el);
      } else if (st) {
        this.elementAdded(el);
      }
    },
    scrollTypes: {
      EMITTER: 'none',
      XSCROLLER: 'pan-x',
      YSCROLLER: 'pan-y',
      SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
    },
    touchActionToScrollType: function(touchAction) {
      var t = touchAction;
      var st = this.scrollTypes;
      if (t === 'none') {
        return 'none';
      } else if (t === st.XSCROLLER) {
        return 'X';
      } else if (t === st.YSCROLLER) {
        return 'Y';
      } else if (st.SCROLLER.exec(t)) {
        return 'XY';
      }
    },
    POINTER_TYPE: 'touch',
    firstTouch: null,
    isPrimaryTouch: function(inTouch) {
      return this.firstTouch === inTouch.identifier;
    },
    setPrimaryTouch: function(inTouch) {

      // set primary touch if there no pointers, or the only pointer is the mouse
      if (pointermap$1.size === 0 || (pointermap$1.size === 1 && pointermap$1.has(1))) {
        this.firstTouch = inTouch.identifier;
        this.firstXY = { X: inTouch.clientX, Y: inTouch.clientY };
        this.scrolling = false;
        this.cancelResetClickCount();
      }
    },
    removePrimaryPointer: function(inPointer) {
      if (inPointer.isPrimary) {
        this.firstTouch = null;
        this.firstXY = null;
        this.resetClickCount();
      }
    },
    clickCount: 0,
    resetId: null,
    resetClickCount: function() {
      var fn = function() {
        this.clickCount = 0;
        this.resetId = null;
      }.bind(this);
      this.resetId = setTimeout(fn, CLICK_COUNT_TIMEOUT);
    },
    cancelResetClickCount: function() {
      if (this.resetId) {
        clearTimeout(this.resetId);
      }
    },
    typeToButtons: function(type) {
      var ret = 0;
      if (type === 'touchstart' || type === 'touchmove') {
        ret = 1;
      }
      return ret;
    },
    touchToPointer: function(inTouch) {
      var cte = this.currentTouchEvent;
      var e = dispatcher.cloneEvent(inTouch);

      // We reserve pointerId 1 for Mouse.
      // Touch identifiers can start at 0.
      // Add 2 to the touch identifier for compatibility.
      var id = e.pointerId = inTouch.identifier + 2;
      e.target = captureInfo[id] || findTarget(e);
      e.bubbles = true;
      e.cancelable = true;
      e.detail = this.clickCount;
      e.button = 0;
      e.buttons = this.typeToButtons(cte.type);
      e.width = (inTouch.radiusX || inTouch.webkitRadiusX || 0) * 2;
      e.height = (inTouch.radiusY || inTouch.webkitRadiusY || 0) * 2;
      e.pressure = inTouch.force || inTouch.webkitForce || 0.5;
      e.isPrimary = this.isPrimaryTouch(inTouch);
      e.pointerType = this.POINTER_TYPE;

      // forward modifier keys
      e.altKey = cte.altKey;
      e.ctrlKey = cte.ctrlKey;
      e.metaKey = cte.metaKey;
      e.shiftKey = cte.shiftKey;

      // forward touch preventDefaults
      var self = this;
      e.preventDefault = function() {
        self.scrolling = false;
        self.firstXY = null;
        cte.preventDefault();
      };
      return e;
    },
    processTouches: function(inEvent, inFunction) {
      var tl = inEvent.changedTouches;
      this.currentTouchEvent = inEvent;
      for (var i = 0, t; i < tl.length; i++) {
        t = tl[i];
        inFunction.call(this, this.touchToPointer(t));
      }
    },

    // For single axis scrollers, determines whether the element should emit
    // pointer events or behave as a scroller
    shouldScroll: function(inEvent) {
      if (this.firstXY) {
        var ret;
        var scrollAxis = inEvent.currentTarget._scrollType;
        if (scrollAxis === 'none') {

          // this element is a touch-action: none, should never scroll
          ret = false;
        } else if (scrollAxis === 'XY') {

          // this element should always scroll
          ret = true;
        } else {
          var t = inEvent.changedTouches[0];

          // check the intended scroll axis, and other axis
          var a = scrollAxis;
          var oa = scrollAxis === 'Y' ? 'X' : 'Y';
          var da = Math.abs(t['client' + a] - this.firstXY[a]);
          var doa = Math.abs(t['client' + oa] - this.firstXY[oa]);

          // if delta in the scroll axis > delta other axis, scroll instead of
          // making events
          ret = da >= doa;
        }
        this.firstXY = null;
        return ret;
      }
    },
    findTouch: function(inTL, inId) {
      for (var i = 0, l = inTL.length, t; i < l && (t = inTL[i]); i++) {
        if (t.identifier === inId) {
          return true;
        }
      }
    },

    // In some instances, a touchstart can happen without a touchend. This
    // leaves the pointermap in a broken state.
    // Therefore, on every touchstart, we remove the touches that did not fire a
    // touchend event.
    // To keep state globally consistent, we fire a
    // pointercancel for this "abandoned" touch
    vacuumTouches: function(inEvent) {
      var tl = inEvent.touches;

      // pointermap.size should be < tl.length here, as the touchstart has not
      // been processed yet.
      if (pointermap$1.size >= tl.length) {
        var d = [];
        pointermap$1.forEach(function(value, key) {

          // Never remove pointerId == 1, which is mouse.
          // Touch identifiers are 2 smaller than their pointerId, which is the
          // index in pointermap.
          if (key !== 1 && !this.findTouch(tl, key - 2)) {
            var p = value.out;
            d.push(p);
          }
        }, this);
        d.forEach(this.cancelOut, this);
      }
    },
    touchstart: function(inEvent) {
      this.vacuumTouches(inEvent);
      this.setPrimaryTouch(inEvent.changedTouches[0]);
      this.dedupSynthMouse(inEvent);
      if (!this.scrolling) {
        this.clickCount++;
        this.processTouches(inEvent, this.overDown);
      }
    },
    overDown: function(inPointer) {
      pointermap$1.set(inPointer.pointerId, {
        target: inPointer.target,
        out: inPointer,
        outTarget: inPointer.target
      });
      dispatcher.enterOver(inPointer);
      dispatcher.down(inPointer);
    },
    touchmove: function(inEvent) {
      if (!this.scrolling) {
        if (this.shouldScroll(inEvent)) {
          this.scrolling = true;
          this.touchcancel(inEvent);
        } else {
          inEvent.preventDefault();
          this.processTouches(inEvent, this.moveOverOut);
        }
      }
    },
    moveOverOut: function(inPointer) {
      var event = inPointer;
      var pointer = pointermap$1.get(event.pointerId);

      // a finger drifted off the screen, ignore it
      if (!pointer) {
        return;
      }
      var outEvent = pointer.out;
      var outTarget = pointer.outTarget;
      dispatcher.move(event);
      if (outEvent && outTarget !== event.target) {
        outEvent.relatedTarget = event.target;
        event.relatedTarget = outTarget;

        // recover from retargeting by shadow
        outEvent.target = outTarget;
        if (event.target) {
          dispatcher.leaveOut(outEvent);
          dispatcher.enterOver(event);
        } else {

          // clean up case when finger leaves the screen
          event.target = outTarget;
          event.relatedTarget = null;
          this.cancelOut(event);
        }
      }
      pointer.out = event;
      pointer.outTarget = event.target;
    },
    touchend: function(inEvent) {
      this.dedupSynthMouse(inEvent);
      this.processTouches(inEvent, this.upOut);
    },
    upOut: function(inPointer) {
      if (!this.scrolling) {
        dispatcher.up(inPointer);
        dispatcher.leaveOut(inPointer);
      }
      this.cleanUpPointer(inPointer);
    },
    touchcancel: function(inEvent) {
      this.processTouches(inEvent, this.cancelOut);
    },
    cancelOut: function(inPointer) {
      dispatcher.cancel(inPointer);
      dispatcher.leaveOut(inPointer);
      this.cleanUpPointer(inPointer);
    },
    cleanUpPointer: function(inPointer) {
      pointermap$1.delete(inPointer.pointerId);
      this.removePrimaryPointer(inPointer);
    },

    // prevent synth mouse events from creating pointer events
    dedupSynthMouse: function(inEvent) {
      var lts = mouseEvents.lastTouches;
      var t = inEvent.changedTouches[0];

      // only the primary finger will synth mouse events
      if (this.isPrimaryTouch(t)) {

        // remember x/y of last touch
        var lt = { x: t.clientX, y: t.clientY };
        lts.push(lt);
        var fn = (function(lts, lt) {
          var i = lts.indexOf(lt);
          if (i > -1) {
            lts.splice(i, 1);
          }
        }).bind(null, lts, lt);
        setTimeout(fn, DEDUP_TIMEOUT);
      }
    }
  };

  INSTALLER = new Installer(touchEvents.elementAdded, touchEvents.elementRemoved,
    touchEvents.elementChanged, touchEvents);

  var pointermap$2 = dispatcher.pointermap;
  var HAS_BITMAP_TYPE = window.MSPointerEvent &&
    typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE === 'number';
  var msEvents = {
    events: [
      'MSPointerDown',
      'MSPointerMove',
      'MSPointerUp',
      'MSPointerOut',
      'MSPointerOver',
      'MSPointerCancel',
      'MSGotPointerCapture',
      'MSLostPointerCapture'
    ],
    register: function(target) {
      dispatcher.listen(target, this.events);
    },
    unregister: function(target) {
      dispatcher.unlisten(target, this.events);
    },
    POINTER_TYPES: [
      '',
      'unavailable',
      'touch',
      'pen',
      'mouse'
    ],
    prepareEvent: function(inEvent) {
      var e = inEvent;
      if (HAS_BITMAP_TYPE) {
        e = dispatcher.cloneEvent(inEvent);
        e.pointerType = this.POINTER_TYPES[inEvent.pointerType];
      }
      return e;
    },
    cleanup: function(id) {
      pointermap$2.delete(id);
    },
    MSPointerDown: function(inEvent) {
      pointermap$2.set(inEvent.pointerId, inEvent);
      var e = this.prepareEvent(inEvent);
      dispatcher.down(e);
    },
    MSPointerMove: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.move(e);
    },
    MSPointerUp: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.up(e);
      this.cleanup(inEvent.pointerId);
    },
    MSPointerOut: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.leaveOut(e);
    },
    MSPointerOver: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.enterOver(e);
    },
    MSPointerCancel: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.cancel(e);
      this.cleanup(inEvent.pointerId);
    },
    MSLostPointerCapture: function(inEvent) {
      var e = dispatcher.makeEvent('lostpointercapture', inEvent);
      dispatcher.dispatchEvent(e);
    },
    MSGotPointerCapture: function(inEvent) {
      var e = dispatcher.makeEvent('gotpointercapture', inEvent);
      dispatcher.dispatchEvent(e);
    }
  };

  function applyPolyfill() {

    // only activate if this platform does not have pointer events
    if (!window.PointerEvent) {
      window.PointerEvent = PointerEvent;

      if (window.navigator.msPointerEnabled) {
        var tp = window.navigator.msMaxTouchPoints;
        Object.defineProperty(window.navigator, 'maxTouchPoints', {
          value: tp,
          enumerable: true
        });
        dispatcher.registerSource('ms', msEvents);
      } else {
        Object.defineProperty(window.navigator, 'maxTouchPoints', {
          value: 0,
          enumerable: true
        });
        dispatcher.registerSource('mouse', mouseEvents);
        if (window.ontouchstart !== undefined) {
          dispatcher.registerSource('touch', touchEvents);
        }
      }

      dispatcher.register(document);
    }
  }

  var n = window.navigator;
  var s;
  var r;
  var h;
  function assertActive(id) {
    if (!dispatcher.pointermap.has(id)) {
      var error = new Error('InvalidPointerId');
      error.name = 'InvalidPointerId';
      throw error;
    }
  }
  function assertConnected(elem) {
    var parent = elem.parentNode;
    while (parent && parent !== elem.ownerDocument) {
      parent = parent.parentNode;
    }
    if (!parent) {
      var error = new Error('InvalidStateError');
      error.name = 'InvalidStateError';
      throw error;
    }
  }
  function inActiveButtonState(id) {
    var p = dispatcher.pointermap.get(id);
    return p.buttons !== 0;
  }
  if (n.msPointerEnabled) {
    s = function(pointerId) {
      assertActive(pointerId);
      assertConnected(this);
      if (inActiveButtonState(pointerId)) {
        dispatcher.setCapture(pointerId, this, true);
        this.msSetPointerCapture(pointerId);
      }
    };
    r = function(pointerId) {
      assertActive(pointerId);
      dispatcher.releaseCapture(pointerId, true);
      this.msReleasePointerCapture(pointerId);
    };
  } else {
    s = function setPointerCapture(pointerId) {
      assertActive(pointerId);
      assertConnected(this);
      if (inActiveButtonState(pointerId)) {
        dispatcher.setCapture(pointerId, this);
      }
    };
    r = function releasePointerCapture(pointerId) {
      assertActive(pointerId);
      dispatcher.releaseCapture(pointerId);
    };
  }
  h = function hasPointerCapture(pointerId) {
    return !!dispatcher.captureInfo[pointerId];
  };

  function applyPolyfill$1() {
    if (window.Element && !Element.prototype.setPointerCapture) {
      Object.defineProperties(Element.prototype, {
        'setPointerCapture': {
          value: s
        },
        'releasePointerCapture': {
          value: r
        },
        'hasPointerCapture': {
          value: h
        }
      });
    }
  }

  applyAttributeStyles();
  applyPolyfill();
  applyPolyfill$1();

  var pointerevents = {
    dispatcher: dispatcher,
    Installer: Installer,
    PointerEvent: PointerEvent,
    PointerMap: PointerMap,
    targetFinding: targeting
  };

  return pointerevents;

}));
/* Font Face Observer v2.3.0 - © Bram Stein. License: BSD-3-Clause */(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function p(a,c){document.addEventListener?a.addEventListener("scroll",c,!1):a.attachEvent("scroll",c)}function u(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b);a()}):document.attachEvent("onreadystatechange",function g(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",g),a()})};function w(a){this.g=document.createElement("div");this.g.setAttribute("aria-hidden","true");this.g.appendChild(document.createTextNode(a));this.h=document.createElement("span");this.i=document.createElement("span");this.m=document.createElement("span");this.j=document.createElement("span");this.l=-1;this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.h.appendChild(this.m);this.i.appendChild(this.j);this.g.appendChild(this.h);this.g.appendChild(this.i)}
function x(a,c){a.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+c+";"}function B(a){var c=a.g.offsetWidth,b=c+100;a.j.style.width=b+"px";a.i.scrollLeft=b;a.h.scrollLeft=a.h.scrollWidth+100;return a.l!==c?(a.l=c,!0):!1}function C(a,c){function b(){var e=g;B(e)&&null!==e.g.parentNode&&c(e.l)}var g=a;p(a.h,b);p(a.i,b);B(a)};function D(a,c,b){c=c||{};b=b||window;this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal";this.context=b}var E=null,F=null,G=null,H=null;function I(a){null===F&&(M(a)&&/Apple/.test(window.navigator.vendor)?(a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),F=!!a&&603>parseInt(a[1],10)):F=!1);return F}function M(a){null===H&&(H=!!a.document.fonts);return H}
function N(a,c){var b=a.style,g=a.weight;if(null===G){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(q){}G=""!==e.style.font}return[b,g,G?a.stretch:"","100px",c].join(" ")}
D.prototype.load=function(a,c){var b=this,g=a||"BESbswy",e=0,q=c||3E3,J=(new Date).getTime();return new Promise(function(K,L){if(M(b.context)&&!I(b.context)){var O=new Promise(function(r,t){function h(){(new Date).getTime()-J>=q?t(Error(""+q+"ms timeout exceeded")):b.context.document.fonts.load(N(b,'"'+b.family+'"'),g).then(function(n){1<=n.length?r():setTimeout(h,25)},t)}h()}),P=new Promise(function(r,t){e=setTimeout(function(){t(Error(""+q+"ms timeout exceeded"))},q)});Promise.race([P,O]).then(function(){clearTimeout(e);
K(b)},L)}else u(function(){function r(){var d;if(d=-1!=k&&-1!=l||-1!=k&&-1!=m||-1!=l&&-1!=m)(d=k!=l&&k!=m&&l!=m)||(null===E&&(d=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),E=!!d&&(536>parseInt(d[1],10)||536===parseInt(d[1],10)&&11>=parseInt(d[2],10))),d=E&&(k==y&&l==y&&m==y||k==z&&l==z&&m==z||k==A&&l==A&&m==A)),d=!d;d&&(null!==f.parentNode&&f.parentNode.removeChild(f),clearTimeout(e),K(b))}function t(){if((new Date).getTime()-J>=q)null!==f.parentNode&&f.parentNode.removeChild(f),
L(Error(""+q+"ms timeout exceeded"));else{var d=b.context.document.hidden;if(!0===d||void 0===d)k=h.g.offsetWidth,l=n.g.offsetWidth,m=v.g.offsetWidth,r();e=setTimeout(t,50)}}var h=new w(g),n=new w(g),v=new w(g),k=-1,l=-1,m=-1,y=-1,z=-1,A=-1,f=document.createElement("div");f.dir="ltr";x(h,N(b,"sans-serif"));x(n,N(b,"serif"));x(v,N(b,"monospace"));f.appendChild(h.g);f.appendChild(n.g);f.appendChild(v.g);b.context.document.body.appendChild(f);y=h.g.offsetWidth;z=n.g.offsetWidth;A=v.g.offsetWidth;t();
C(h,function(d){k=d;r()});x(h,N(b,'"'+b.family+'",sans-serif'));C(n,function(d){l=d;r()});x(n,N(b,'"'+b.family+'",serif'));C(v,function(d){m=d;r()});x(v,N(b,'"'+b.family+'",monospace'))})})};"object"===typeof module?module.exports=D:(window.FontFaceObserver=D,window.FontFaceObserver.prototype.load=D.prototype.load);}());

/* eslint-disable promise/prefer-await-to-then */

var methodMap = [
    [
        'requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror',
    ],
    // New WebKit
    [
        'webkitRequestFullscreen',
        'webkitExitFullscreen',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitfullscreenchange',
        'webkitfullscreenerror',

    ],
    // Old WebKit
    [
        'webkitRequestFullScreen',
        'webkitCancelFullScreen',
        'webkitCurrentFullScreenElement',
        'webkitCancelFullScreen',
        'webkitfullscreenchange',
        'webkitfullscreenerror',

    ],
    [
        'mozRequestFullScreen',
        'mozCancelFullScreen',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozfullscreenchange',
        'mozfullscreenerror',
    ],
    [
        'msRequestFullscreen',
        'msExitFullscreen',
        'msFullscreenElement',
        'msFullscreenEnabled',
        'MSFullscreenChange',
        'MSFullscreenError',
    ],
];

var nativeAPI = (function(){
    if (typeof document === 'undefined') {
        return false;
    }

    var unprefixedMethods = methodMap[0];
    var returnValue = {};

    for (var i = 0; i < methodMap.length; i++) {
        var methodList = methodMap[i];
        var exitFullscreenMethod = methodList ? methodList[1] : undefined;

        if (exitFullscreenMethod && exitFullscreenMethod in document) {
            for (var index = 0; index < methodList.length; index++) {
                var method = methodList[index];
                returnValue[unprefixedMethods[index]] = method;
            }
            return returnValue;
        }

    }

    return false;
}.bind(this))();

var eventNameMap = {
    change: nativeAPI.fullscreenchange,
    error: nativeAPI.fullscreenerror,
};

// eslint-disable-next-line import/no-mutable-exports
var screenfull = {
    // eslint-disable-next-line default-param-last
    request: function(element, options) {

        if(element === undefined)
            element = document.documentElement;

        return new Promise(function(resolve, reject) {
            var onFullScreenEntered = function() {
                screenfull.off('change', onFullScreenEntered);
                resolve();
            };

            screenfull.on('change', onFullScreenEntered);

            var returnPromise = element[nativeAPI.requestFullscreen](options);

            if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenEntered).catch(reject);
            }
        });
    },
    exit: function() {
        return new Promise( function(resolve, reject){
            if (!screenfull.isFullscreen) {
                resolve();
                return;
            }

            var onFullScreenExit = function() {
                screenfull.off('change', onFullScreenExit);
                resolve();
            };

            screenfull.on('change', onFullScreenExit);

            var returnPromise = document[nativeAPI.exitFullscreen]();

            if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenExit).catch(reject);
            }
        });
    },
    toggle: function(element, options) {
        return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
    },
    onchange: function(callback) {
        screenfull.on('change', callback);
    },
    onerror: function(callback) {
        screenfull.on('error', callback);
    },
    on: function(event, callback) {
        var eventName = eventNameMap[event];
        if (eventName) {
            document.addEventListener(eventName, callback, false);
        }
    },
    off: function(event, callback) {
        var eventName = eventNameMap[event];
        if (eventName) {
            document.removeEventListener(eventName, callback, false);
        }
    },
    raw: nativeAPI,
};

Object.defineProperties(screenfull, {
    isFullscreen: {
        get: function() { return Boolean(document[nativeAPI.fullscreenElement]) } ,
    },
    element: {
        enumerable: true,
        get: function() { return document[nativeAPI.fullscreenElement] } ,
    },
    isEnabled: {
        enumerable: true,
        // Coerce to boolean in case of old WebKit.
        get: function() { return Boolean(document[nativeAPI.fullscreenEnabled]) },
    },
});

if (!nativeAPI) {
    screenfull = {isEnabled: false};
}


// Based on https://gist.github.com/gre/1650294

// No easing, no acceleration
function linear( t )
{
	return t;
}

// Slight acceleration from zero to full speed
function easeInSine( t )
{
	return -1 * Math.cos( t * ( Math.PI / 2 ) ) + 1;
}

// Slight deceleration at the end
function easeOutSine( t )
{
	return Math.sin( t * ( Math.PI / 2 ) );
}

// Slight acceleration at beginning and slight deceleration at end
function easeInOutSine( t )
{
	return -0.5 * ( Math.cos( Math.PI * t ) - 1 );
}

// Accelerating from zero velocity
function easeInQuad( t )
{
	return t * t;
}

// Decelerating to zero velocity
function easeOutQuad( t )
{
	return t * ( 2 - t );
}

// Acceleration until halfway, then deceleration
function easeInOutQuad( t )
{
	return t < 0.5 ? 2 * t * t : - 1 + ( 4 - 2 * t ) * t;
}

// Accelerating from zero velocity
function easeInCubic( t )
{
	return t * t * t;
}

// Decelerating to zero velocity
function easeOutCubic( t )
{
	var t1 = t - 1;
	return t1 * t1 * t1 + 1;
}

// Acceleration until halfway, then deceleration
function easeInOutCubic( t )
{
	return t < 0.5 ? 4 * t * t * t : ( t - 1 ) * ( 2 * t - 2 ) * ( 2 * t - 2 ) + 1;
}

// Accelerating from zero velocity
function easeInQuart( t )
{
	return t * t * t * t;
}

// Decelerating to zero velocity
function easeOutQuart( t )
{
	var t1 = t - 1;
	return 1 - t1 * t1 * t1 * t1;
}

// Acceleration until halfway, then deceleration
function easeInOutQuart( t ) {
	var t1 = t - 1;
	return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
}

// Accelerating from zero velocity
function easeInQuint( t )
{
	return t * t * t * t * t;
}

// Decelerating to zero velocity
function easeOutQuint( t )
{
	var t1 = t - 1;
	return 1 + t1 * t1 * t1 * t1 * t1;
}

// Acceleration until halfway, then deceleration
function easeInOutQuint( t )
{
	var t1 = t - 1;
	return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
}

// Accelerate exponentially until finish
function easeInExpo( t )
{

	if( t === 0 ) {
		return 0;
	}

	return Math.pow( 2, 10 * ( t - 1 ) );

}

// Initial exponential acceleration slowing to stop
function easeOutExpo( t )
{

	if( t === 1 ) {
		return 1;
	}

	return ( -Math.pow( 2, -10 * t ) + 1 );

}

// Exponential acceleration and deceleration
function easeInOutExpo( t )
{

	if( t === 0 || t === 1 ) {
		return t;
	}

	var scaledTime = t * 2;
	var scaledTime1 = scaledTime - 1;

	if( scaledTime < 1 ) {
		return 0.5 * Math.pow( 2, 10 * ( scaledTime1 ) );
	}

	return 0.5 * ( -Math.pow( 2, -10 * scaledTime1 ) + 2 );

}

// Increasing velocity until stop
function easeInCirc( t )
{

	var scaledTime = t / 1;
	return -1 * ( Math.sqrt( 1 - scaledTime * t ) - 1 );

}

// Start fast, decreasing velocity until stop
function easeOutCirc( t )
{

	var t1 = t - 1;
	return Math.sqrt( 1 - t1 * t1 );
}

// Fast increase in velocity, fast decrease in velocity
function easeInOutCirc( t )
{

	var scaledTime = t * 2;
	var scaledTime1 = scaledTime - 2;

	if( scaledTime < 1 ) {
		return -0.5 * ( Math.sqrt( 1 - scaledTime * scaledTime ) - 1 );
	}

	return 0.5 * ( Math.sqrt( 1 - scaledTime1 * scaledTime1 ) + 1 );

}

// Slow movement backwards then fast snap to finish
function easeInBack( t, magnitude)
{

	if(magnitude === undefined)
		magnitude = 1.70158;

	return t * t * ( ( magnitude + 1 ) * t - magnitude );

}

// Fast snap to backwards point then slow resolve to finish
function easeOutBack( t, magnitude )
{

	if(magnitude === undefined)
		magnitude = 1.70158;

	var scaledTime = ( t / 1 ) - 1;

	return (
		scaledTime * scaledTime * ( ( magnitude + 1 ) * scaledTime + magnitude )
	) + 1;

}

// Slow movement backwards, fast snap to past finish, slow resolve to finish
function easeInOutBack( t, magnitude )
{
	if(magnitude === undefined)
		magnitude = 1.70158;

	var scaledTime = t * 2;
	var scaledTime2 = scaledTime - 2;

	var s = magnitude * 1.525;

	if( scaledTime < 1) {

		return 0.5 * scaledTime * scaledTime * (
			( ( s + 1 ) * scaledTime ) - s
		);

	}

	return 0.5 * (
		scaledTime2 * scaledTime2 * ( ( s + 1 ) * scaledTime2 + s ) + 2
	);

}
// Bounces slowly then quickly to finish
function easeInElastic( t, magnitude)
{
	if(magnitude === undefined)
		magnitude = 0.7;

	if( t === 0 || t === 1 ) {
		return t;
	}

	var scaledTime = t / 1;
	var scaledTime1 = scaledTime - 1;

	var p = 1 - magnitude;
	var s = p / ( 2 * Math.PI ) * Math.asin( 1 );

	return -(
		Math.pow( 2, 10 * scaledTime1 ) *
		Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
	);

}

// Fast acceleration, bounces to zero
function easeOutElastic( t, magnitude)
{
	if(magnitude === undefined)
		magnitude = 0.7;

	if( t === 0 || t === 1 ) {
		return t;
	}

	var p = 1 - magnitude;
	var scaledTime = t * 2;

	var s = p / ( 2 * Math.PI ) * Math.asin( 1 );
	return (
		Math.pow( 2, -10 * scaledTime ) *
		Math.sin( ( scaledTime - s ) * ( 2 * Math.PI ) / p )
	) + 1;

}

// Slow start and end, two bounces sandwich a fast motion
function easeInOutElastic( t, magnitude) {

	if(magnitude === undefined)
		magnitude = 0.65;

	if( t === 0 || t === 1 ) {
		return t;
	}

	var p = 1 - magnitude;
	var scaledTime = t * 2;
	var scaledTime1 = scaledTime - 1;

	var s = p / ( 2 * Math.PI ) * Math.asin( 1 );

	if( scaledTime < 1 ) {
		return -0.5 * (
			Math.pow( 2, 10 * scaledTime1 ) *
			Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
		);
	}

	return (
		Math.pow( 2, -10 * scaledTime1 ) *
		Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p ) * 0.5
	) + 1;

}

// Bounce to completion
function easeOutBounce( t )
{

	var scaledTime = t / 1;

	if( scaledTime < ( 1 / 2.75 ) ) {

		return 7.5625 * scaledTime * scaledTime;

	} else if( scaledTime < ( 2 / 2.75 ) ) {

		var scaledTime2 = scaledTime - ( 1.5 / 2.75 );
		return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.75;

	} else if( scaledTime < ( 2.5 / 2.75 ) ) {

		var scaledTime2 = scaledTime - ( 2.25 / 2.75 );
		return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.9375;

	} else {

		var scaledTime2 = scaledTime - ( 2.625 / 2.75 );
		return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.984375;

	}

}

// Bounce increasing in velocity until completion
function easeInBounce( t )
{
	return 1 - easeOutBounce( 1 - t );
}

// Bounce in and bounce out
function easeInOutBounce( t )
{

	if( t < 0.5 ) {

		return easeInBounce( t * 2 ) * 0.5;

	}

	return ( easeOutBounce( ( t * 2 ) - 1 ) * 0.5 ) + 0.5;
}
/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/

// The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
	? window : typeof self === 'object' && self.self === self
		? self : typeof global === 'object' && global.global === global
			? global
			: this

function bom (blob, opts) {
	if (typeof opts === 'undefined') opts = { autoBom: false }
	else if (typeof opts !== 'object') {
		console.warn('Deprecated: Expected third argument to be a object')
		opts = { autoBom: !opts }
	}

	// prepend BOM for UTF-8 XML and text/* types (including HTML)
	// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
	if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
		return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
	}
	return blob
}

function download (url, name, opts) {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', url)
	xhr.responseType = 'blob'
	xhr.onload = function () {
		saveAs(xhr.response, name, opts)
	}
	xhr.onerror = function () {
		console.error('could not download file')
	}
	xhr.send()
}

function corsEnabled (url) {
	var xhr = new XMLHttpRequest()
	// use sync to avoid popup blocker
	xhr.open('HEAD', url, false)
	try {
		xhr.send()
	} catch (e) {}
	return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click (node) {
	try {
		node.dispatchEvent(new MouseEvent('click'))
	} catch (e) {
		var evt = document.createEvent('MouseEvents')
		evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
			20, false, false, false, false, 0, null)
		node.dispatchEvent(evt)
	}
}

// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)

var saveAs = _global.saveAs || (
	// probably in some web worker
	(typeof window !== 'object' || window !== _global)
		? function saveAs () { /* noop */ }

		// Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
		: ('download' in HTMLAnchorElement.prototype && !isMacOSWebView)
			? function saveAs (blob, name, opts) {
				var URL = _global.URL || _global.webkitURL
				// Namespace is used to prevent conflict w/ Chrome Poper Blocker extension (Issue #561)
				var a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
				name = name || blob.name || 'download'

				a.download = name
				a.rel = 'noopener' // tabnabbing

				// TODO: detect chrome extensions & packaged apps
				// a.target = '_blank'

				if (typeof blob === 'string') {
					// Support regular links
					a.href = blob
					if (a.origin !== location.origin) {
						corsEnabled(a.href)
							? download(blob, name, opts)
							: click(a, a.target = '_blank')
					} else {
						click(a)
					}
				} else {
					// Support blobs
					a.href = URL.createObjectURL(blob)
					setTimeout(function () { URL.revokeObjectURL(a.href) }, 4E4) // 40s
					setTimeout(function () { click(a) }, 0)
				}
			}

			// Use msSaveOrOpenBlob as a second approach
			: 'msSaveOrOpenBlob' in navigator
				? function saveAs (blob, name, opts) {
					name = name || blob.name || 'download'

					if (typeof blob === 'string') {
						if (corsEnabled(blob)) {
							download(blob, name, opts)
						} else {
							var a = document.createElement('a')
							a.href = blob
							a.target = '_blank'
							setTimeout(function () { click(a) })
						}
					} else {
						navigator.msSaveOrOpenBlob(bom(blob, opts), name)
					}
				}

				// Fallback to using FileReader and a popup
				: function saveAs (blob, name, opts, popup) {
					// Open a popup immediately do go around popup blocker
					// Mostly only available on user interaction and the fileReader is async so...
					popup = popup || open('', '_blank')
					if (popup) {
						popup.document.title =
							popup.document.body.innerText = 'downloading...'
					}

					if (typeof blob === 'string') return download(blob, name, opts)

					var force = blob.type === 'application/octet-stream'
					var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari
					var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

					if ((isChromeIOS || (force && isSafari) || isMacOSWebView) && typeof FileReader !== 'undefined') {
						// Safari doesn't allow downloading of blob URLs
						var reader = new FileReader()
						reader.onloadend = function () {
							var url = reader.result
							url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
							if (popup) popup.location.href = url
							else location = url
							popup = null // reverse-tabnabbing #460
						}
						reader.readAsDataURL(blob)
					} else {
						var URL = _global.URL || _global.webkitURL
						var url = URL.createObjectURL(blob)
						if (popup) popup.location = url
						else location.href = url
						popup = null // reverse-tabnabbing #460
						setTimeout(function () { URL.revokeObjectURL(url) }, 4E4) // 40s
					}
				}
)

_global.saveAs = saveAs.saveAs = saveAs

if (typeof module !== 'undefined') {
	module.exports = saveAs;
}
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function(a,b){a(function(){"use strict";function a(a,b){return null!=a&&null!=b&&a.toLowerCase()===b.toLowerCase()}function c(a,b){var c,d,e=a.length;if(!e||!b)return!1;for(c=b.toLowerCase(),d=0;d<e;++d)if(c===a[d].toLowerCase())return!0;return!1}function d(a){for(var b in a)i.call(a,b)&&(a[b]=new RegExp(a[b],"i"))}function e(a){return(a||"").substr(0,500)}function f(a,b){this.ua=e(a),this._cache={},this.maxPhoneWidth=b||600}var g={};g.mobileDetectRules={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",Pixel:"; \\bPixel\\b",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",Dell:"Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",Samsung:"\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",Asus:"Asus.*Galaxy|PadFone.*Mobile",Xiaomi:"^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",NokiaLumia:"Lumia [0-9]{3,4}",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo (3DS|Switch)",Amoi:"Amoi",INQ:"INQ",OnePlus:"ONEPLUS",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",GoogleTablet:"Android.*Pixel C",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",NokiaLumiaTablet:"Lumia 2520",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z930|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android [0-9.]+; [a-z-]+; \\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9|TECNO DP8D",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",VerizonTablet:"QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MediacomTablet:"M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",KocasoTablet:"\\b(TB-1207)\\b",HisenseTablet:"\\b(F5281|E2371)\\b",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",iPadOS:"CPU OS 13",SailfishOS:"Sailfish",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",Skyfire:"Skyfire",Edge:"\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",WeChat:"\\bMicroMessenger\\b",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",PaleMoon:"Android.*PaleMoon|Mobile.*PaleMoon"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:["Firefox/[VER]","FxiOS/[VER]"],Fennec:"Fennec/[VER]",Edge:"Edge/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]",UCBrowser:["UCWEB[VER]","UC.*Browser/[VER]"],MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",SamsungBrowser:"SamsungBrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",PaleMoon:"PaleMoon/[VER]",SailfishBrowser:"SailfishBrowser/[VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",Goanna:"Goanna/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",Sailfish:"Sailfish [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},g.detectMobileBrowsers={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,tabletPattern:/android|ipad|playbook|silk/i};var h,i=Object.prototype.hasOwnProperty;return g.FALLBACK_PHONE="UnknownPhone",g.FALLBACK_TABLET="UnknownTablet",g.FALLBACK_MOBILE="UnknownMobile",h="isArray"in Array?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},function(){var a,b,c,e,f,j,k=g.mobileDetectRules;for(a in k.props)if(i.call(k.props,a)){for(b=k.props[a],h(b)||(b=[b]),f=b.length,e=0;e<f;++e)c=b[e],j=c.indexOf("[VER]"),j>=0&&(c=c.substring(0,j)+"([\\w._\\+]+)"+c.substring(j+5)),b[e]=new RegExp(c,"i");k.props[a]=b}d(k.oss),d(k.phones),d(k.tablets),d(k.uas),d(k.utils),k.oss0={WindowsPhoneOS:k.oss.WindowsPhoneOS,WindowsMobileOS:k.oss.WindowsMobileOS}}(),g.findMatch=function(a,b){for(var c in a)if(i.call(a,c)&&a[c].test(b))return c;return null},g.findMatches=function(a,b){var c=[];for(var d in a)i.call(a,d)&&a[d].test(b)&&c.push(d);return c},g.getVersionStr=function(a,b){var c,d,e,f,h=g.mobileDetectRules.props;if(i.call(h,a))for(c=h[a],e=c.length,d=0;d<e;++d)if(f=c[d].exec(b),null!==f)return f[1];return null},g.getVersion=function(a,b){var c=g.getVersionStr(a,b);return c?g.prepareVersionNo(c):NaN},g.prepareVersionNo=function(a){var b;return b=a.split(/[a-z._ \/\-]/i),1===b.length&&(a=b[0]),b.length>1&&(a=b[0]+".",b.shift(),a+=b.join("")),Number(a)},g.isMobileFallback=function(a){return g.detectMobileBrowsers.fullPattern.test(a)||g.detectMobileBrowsers.shortPattern.test(a.substr(0,4))},g.isTabletFallback=function(a){return g.detectMobileBrowsers.tabletPattern.test(a)},g.prepareDetectionCache=function(a,c,d){if(a.mobile===b){var e,h,i;return(h=g.findMatch(g.mobileDetectRules.tablets,c))?(a.mobile=a.tablet=h,void(a.phone=null)):(e=g.findMatch(g.mobileDetectRules.phones,c))?(a.mobile=a.phone=e,void(a.tablet=null)):void(g.isMobileFallback(c)?(i=f.isPhoneSized(d),i===b?(a.mobile=g.FALLBACK_MOBILE,a.tablet=a.phone=null):i?(a.mobile=a.phone=g.FALLBACK_PHONE,a.tablet=null):(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null)):g.isTabletFallback(c)?(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null):a.mobile=a.tablet=a.phone=null)}},g.mobileGrade=function(a){var b=null!==a.mobile();return a.os("iOS")&&a.version("iPad")>=4.3||a.os("iOS")&&a.version("iPhone")>=3.1||a.os("iOS")&&a.version("iPod")>=3.1||a.version("Android")>2.1&&a.is("Webkit")||a.version("Windows Phone OS")>=7||a.is("BlackBerry")&&a.version("BlackBerry")>=6||a.match("Playbook.*Tablet")||a.version("webOS")>=1.4&&a.match("Palm|Pre|Pixi")||a.match("hp.*TouchPad")||a.is("Firefox")&&a.version("Firefox")>=12||a.is("Chrome")&&a.is("AndroidOS")&&a.version("Android")>=4||a.is("Skyfire")&&a.version("Skyfire")>=4.1&&a.is("AndroidOS")&&a.version("Android")>=2.3||a.is("Opera")&&a.version("Opera Mobi")>11&&a.is("AndroidOS")||a.is("MeeGoOS")||a.is("Tizen")||a.is("Dolfin")&&a.version("Bada")>=2||(a.is("UC Browser")||a.is("Dolfin"))&&a.version("Android")>=2.3||a.match("Kindle Fire")||a.is("Kindle")&&a.version("Kindle")>=3||a.is("AndroidOS")&&a.is("NookTablet")||a.version("Chrome")>=11&&!b||a.version("Safari")>=5&&!b||a.version("Firefox")>=4&&!b||a.version("MSIE")>=7&&!b||a.version("Opera")>=10&&!b?"A":a.os("iOS")&&a.version("iPad")<4.3||a.os("iOS")&&a.version("iPhone")<3.1||a.os("iOS")&&a.version("iPod")<3.1||a.is("Blackberry")&&a.version("BlackBerry")>=5&&a.version("BlackBerry")<6||a.version("Opera Mini")>=5&&a.version("Opera Mini")<=6.5&&(a.version("Android")>=2.3||a.is("iOS"))||a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||a.version("Opera Mobi")>=11&&a.is("SymbianOS")?"B":(a.version("BlackBerry")<5||a.match("MSIEMobile|Windows CE.*Mobile")||a.version("Windows Mobile")<=5.2,"C")},g.detectOS=function(a){return g.findMatch(g.mobileDetectRules.oss0,a)||g.findMatch(g.mobileDetectRules.oss,a)},g.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height},f.prototype={constructor:f,mobile:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===b&&(this._cache.userAgent=g.findMatch(g.mobileDetectRules.uas,this.ua)),this._cache.userAgent},userAgents:function(){return this._cache.userAgents===b&&(this._cache.userAgents=g.findMatches(g.mobileDetectRules.uas,this.ua)),this._cache.userAgents},os:function(){return this._cache.os===b&&(this._cache.os=g.detectOS(this.ua)),this._cache.os},version:function(a){return g.getVersion(a,this.ua)},versionStr:function(a){return g.getVersionStr(a,this.ua)},is:function(b){return c(this.userAgents(),b)||a(b,this.os())||a(b,this.phone())||a(b,this.tablet())||c(g.findMatches(g.mobileDetectRules.utils,this.ua),b)},match:function(a){return a instanceof RegExp||(a=new RegExp(a,"i")),a.test(this.ua)},isPhoneSized:function(a){return f.isPhoneSized(a||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===b&&(this._cache.grade=g.mobileGrade(this)),this._cache.grade}},"undefined"!=typeof window&&window.screen?f.isPhoneSized=function(a){return a<0?b:g.getDeviceSmallerSide()<=a}:f.isPhoneSized=function(){},f._impl=g,f.version="1.4.5 2021-03-13",f})}(function(a){if("undefined"!=typeof module&&module.exports)return function(a){module.exports=a()};if("function"==typeof define&&define.amd)return define;if("undefined"!=typeof window)return function(a){window.MobileDetect=a()};throw new Error("unknown environment")}());
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.PF=t()}}(function(){return function t(e,r,i){function n(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return n(r?r:t)},l,l.exports,t,e,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e){e.exports=t("./lib/heap")},{"./lib/heap":2}],2:[function(t,e){!function(){var t,r,i,n,o,s,a,u,h,l,p,c,f,d,g;i=Math.floor,l=Math.min,r=function(t,e){return e>t?-1:t>e?1:0},h=function(t,e,n,o,s){var a;if(null==n&&(n=0),null==s&&(s=r),0>n)throw new Error("lo must be non-negative");for(null==o&&(o=t.length);o>n;)a=i((n+o)/2),s(e,t[a])<0?o=a:n=a+1;return[].splice.apply(t,[n,n-n].concat(e)),e},s=function(t,e,i){return null==i&&(i=r),t.push(e),d(t,0,t.length-1,i)},o=function(t,e){var i,n;return null==e&&(e=r),i=t.pop(),t.length?(n=t[0],t[0]=i,g(t,0,e)):n=i,n},u=function(t,e,i){var n;return null==i&&(i=r),n=t[0],t[0]=e,g(t,0,i),n},a=function(t,e,i){var n;return null==i&&(i=r),t.length&&i(t[0],e)<0&&(n=[t[0],e],e=n[0],t[0]=n[1],g(t,0,i)),e},n=function(t,e){var n,o,s,a,u,h;for(null==e&&(e=r),a=function(){h=[];for(var e=0,r=i(t.length/2);r>=0?r>e:e>r;r>=0?e++:e--)h.push(e);return h}.apply(this).reverse(),u=[],o=0,s=a.length;s>o;o++)n=a[o],u.push(g(t,n,e));return u},f=function(t,e,i){var n;return null==i&&(i=r),n=t.indexOf(e),-1!==n?(d(t,0,n,i),g(t,n,i)):void 0},p=function(t,e,i){var o,s,u,h,l;if(null==i&&(i=r),s=t.slice(0,e),!s.length)return s;for(n(s,i),l=t.slice(e),u=0,h=l.length;h>u;u++)o=l[u],a(s,o,i);return s.sort(i).reverse()},c=function(t,e,i){var s,a,u,p,c,f,d,g,y,b;if(null==i&&(i=r),10*e<=t.length){if(p=t.slice(0,e).sort(i),!p.length)return p;for(u=p[p.length-1],g=t.slice(e),c=0,d=g.length;d>c;c++)s=g[c],i(s,u)<0&&(h(p,s,0,null,i),p.pop(),u=p[p.length-1]);return p}for(n(t,i),b=[],a=f=0,y=l(e,t.length);y>=0?y>f:f>y;a=y>=0?++f:--f)b.push(o(t,i));return b},d=function(t,e,i,n){var o,s,a;for(null==n&&(n=r),o=t[i];i>e&&(a=i-1>>1,s=t[a],n(o,s)<0);)t[i]=s,i=a;return t[i]=o},g=function(t,e,i){var n,o,s,a,u;for(null==i&&(i=r),o=t.length,u=e,s=t[e],n=2*e+1;o>n;)a=n+1,o>a&&!(i(t[n],t[a])<0)&&(n=a),t[e]=t[n],e=n,n=2*e+1;return t[e]=s,d(t,u,e,i)},t=function(){function t(t){this.cmp=null!=t?t:r,this.nodes=[]}return t.push=s,t.pop=o,t.replace=u,t.pushpop=a,t.heapify=n,t.nlargest=p,t.nsmallest=c,t.prototype.push=function(t){return s(this.nodes,t,this.cmp)},t.prototype.pop=function(){return o(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return u(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return a(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return n(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return f(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return e=new t,e.nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.remove=t.prototype.pop,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=t:window.Heap=t}.call(this)},{}],3:[function(t,e){function r(t,e,r){this.width=t,this.height=e,this.nodes=this._buildNodes(t,e,r)}var i=t("./Node");r.prototype._buildNodes=function(t,e,r){var n,o,s=new Array(e);for(n=0;e>n;++n)for(s[n]=new Array(t),o=0;t>o;++o)s[n][o]=new i(o,n);if(void 0===r)return s;if(r.length!==e||r[0].length!==t)throw new Error("Matrix size does not fit");for(n=0;e>n;++n)for(o=0;t>o;++o)r[n][o]&&(s[n][o].walkable=!1);return s},r.prototype.getNodeAt=function(t,e){return this.nodes[e][t]},r.prototype.isWalkableAt=function(t,e){return this.isInside(t,e)&&this.nodes[e][t].walkable},r.prototype.isInside=function(t,e){return t>=0&&t<this.width&&e>=0&&e<this.height},r.prototype.setWalkableAt=function(t,e,r){this.nodes[e][t].walkable=r},r.prototype.getNeighbors=function(t,e,r){var i=t.x,n=t.y,o=[],s=!1,a=!1,u=!1,h=!1,l=!1,p=!1,c=!1,f=!1,d=this.nodes;return this.isWalkableAt(i,n-1)&&(o.push(d[n-1][i]),s=!0),this.isWalkableAt(i+1,n)&&(o.push(d[n][i+1]),u=!0),this.isWalkableAt(i,n+1)&&(o.push(d[n+1][i]),l=!0),this.isWalkableAt(i-1,n)&&(o.push(d[n][i-1]),c=!0),e?(r?(a=c&&s,h=s&&u,p=u&&l,f=l&&c):(a=c||s,h=s||u,p=u||l,f=l||c),a&&this.isWalkableAt(i-1,n-1)&&o.push(d[n-1][i-1]),h&&this.isWalkableAt(i+1,n-1)&&o.push(d[n-1][i+1]),p&&this.isWalkableAt(i+1,n+1)&&o.push(d[n+1][i+1]),f&&this.isWalkableAt(i-1,n+1)&&o.push(d[n+1][i-1]),o):o},r.prototype.clone=function(){var t,e,n=this.width,o=this.height,s=this.nodes,a=new r(n,o),u=new Array(o);for(t=0;o>t;++t)for(u[t]=new Array(n),e=0;n>e;++e)u[t][e]=new i(e,t,s[t][e].walkable);return a.nodes=u,a},e.exports=r},{"./Node":5}],4:[function(t,e){e.exports={manhattan:function(t,e){return t+e},euclidean:function(t,e){return Math.sqrt(t*t+e*e)},octile:function(t,e){var r=Math.SQRT2-1;return e>t?r*t+e:r*e+t},chebyshev:function(t,e){return Math.max(t,e)}}},{}],5:[function(t,e){function r(t,e,r){this.x=t,this.y=e,this.walkable=void 0===r?!0:r}e.exports=r},{}],6:[function(t,e,r){function i(t){for(var e=[[t.x,t.y]];t.parent;)t=t.parent,e.push([t.x,t.y]);return e.reverse()}function n(t,e){var r=i(t),n=i(e);return r.concat(n.reverse())}function o(t){var e,r,i,n,o,s=0;for(e=1;e<t.length;++e)r=t[e-1],i=t[e],n=r[0]-i[0],o=r[1]-i[1],s+=Math.sqrt(n*n+o*o);return s}function s(t,e,r,i){var n,o,s,a,u,h,l=Math.abs,p=[];for(s=l(r-t),a=l(i-e),n=r>t?1:-1,o=i>e?1:-1,u=s-a;;){if(p.push([t,e]),t===r&&e===i)break;h=2*u,h>-a&&(u-=a,t+=n),s>h&&(u+=s,e+=o)}return p}function a(t){var e,r,i,n,o,a,u=[],h=t.length;if(2>h)return u;for(o=0;h-1>o;++o)for(e=t[o],r=t[o+1],i=s(e[0],e[1],r[0],r[1]),n=i.length,a=0;n-1>a;++a)u.push(i[a]);return u.push(t[h-1]),u}function u(t,e){var r,i,n,o,a,u,h,l,p,c,f,d,g,y=e.length,b=e[0][0],A=e[0][1],k=e[y-1][0],m=e[y-1][1];for(r=b,i=A,a=e[1][0],u=e[1][1],h=[[r,i]],l=2;y>l;++l){for(c=e[l],n=c[0],o=c[1],f=s(r,i,n,o),g=!1,p=1;p<f.length;++p)if(d=f[p],!t.isWalkableAt(d[0],d[1])){g=!0,h.push([a,u]),r=a,i=u;break}g||(a=n,u=o)}return h.push([k,m]),h}function h(t){if(t.length<3)return t;var e,r,i,n,o,s,a=[],u=t[0][0],h=t[0][1],l=t[1][0],p=t[1][1],c=l-u,f=p-h;for(o=Math.sqrt(c*c+f*f),c/=o,f/=o,a.push([u,h]),s=2;s<t.length;s++)e=l,r=p,i=c,n=f,l=t[s][0],p=t[s][1],c=l-e,f=p-r,o=Math.sqrt(c*c+f*f),c/=o,f/=o,(c!==i||f!==n)&&a.push([e,r]);return a.push([l,p]),a}r.backtrace=i,r.biBacktrace=n,r.pathLength=o,r.interpolate=s,r.expandPath=a,r.smoothenPath=u,r.compressPath=h},{}],7:[function(t,e){function r(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.heuristic=t.heuristic||o.manhattan,this.weight=t.weight||1}var i=t("heap"),n=t("../core/Util"),o=t("../core/Heuristic");r.prototype.findPath=function(t,e,r,o,s){var a,u,h,l,p,c,f,d,g=new i(function(t,e){return t.f-e.f}),y=s.getNodeAt(t,e),b=s.getNodeAt(r,o),A=this.heuristic,k=this.allowDiagonal,m=this.dontCrossCorners,v=this.weight,w=Math.abs,x=Math.SQRT2;for(y.g=0,y.f=0,g.push(y),y.opened=!0;!g.empty();){if(a=g.pop(),a.closed=!0,a===b)return n.backtrace(b);for(u=s.getNeighbors(a,k,m),l=0,p=u.length;p>l;++l)h=u[l],h.closed||(c=h.x,f=h.y,d=a.g+(0===c-a.x||0===f-a.y?1:x),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||v*A(w(c-r),w(f-o)),h.f=h.g+h.h,h.parent=a,h.opened?g.updateItem(h):(g.push(h),h.opened=!0)))}return[]},e.exports=r},{"../core/Heuristic":4,"../core/Util":6,heap:1}],8:[function(t,e){function r(t){i.call(this,t);var e=this.heuristic;this.heuristic=function(t,r){return 1e6*e(t,r)}}var i=t("./AStarFinder");r.prototype=new i,r.prototype.constructor=r,e.exports=r},{"./AStarFinder":7}],9:[function(t,e){function r(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.heuristic=t.heuristic||o.manhattan,this.weight=t.weight||1}var i=t("heap"),n=t("../core/Util"),o=t("../core/Heuristic");r.prototype.findPath=function(t,e,r,o,s){var a,u,h,l,p,c,f,d,g=function(t,e){return t.f-e.f},y=new i(g),b=new i(g),A=s.getNodeAt(t,e),k=s.getNodeAt(r,o),m=this.heuristic,v=this.allowDiagonal,w=this.dontCrossCorners,x=this.weight,F=Math.abs,W=Math.SQRT2,N=1,C=2;for(A.g=0,A.f=0,y.push(A),A.opened=N,k.g=0,k.f=0,b.push(k),k.opened=C;!y.empty()&&!b.empty();){for(a=y.pop(),a.closed=!0,u=s.getNeighbors(a,v,w),l=0,p=u.length;p>l;++l)if(h=u[l],!h.closed){if(h.opened===C)return n.biBacktrace(a,h);c=h.x,f=h.y,d=a.g+(0===c-a.x||0===f-a.y?1:W),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||x*m(F(c-r),F(f-o)),h.f=h.g+h.h,h.parent=a,h.opened?y.updateItem(h):(y.push(h),h.opened=N))}for(a=b.pop(),a.closed=!0,u=s.getNeighbors(a,v,w),l=0,p=u.length;p>l;++l)if(h=u[l],!h.closed){if(h.opened===N)return n.biBacktrace(h,a);c=h.x,f=h.y,d=a.g+(0===c-a.x||0===f-a.y?1:W),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||x*m(F(c-t),F(f-e)),h.f=h.g+h.h,h.parent=a,h.opened?b.updateItem(h):(b.push(h),h.opened=C))}}return[]},e.exports=r},{"../core/Heuristic":4,"../core/Util":6,heap:1}],10:[function(t,e){function r(t){i.call(this,t);var e=this.heuristic;this.heuristic=function(t,r){return 1e6*e(t,r)}}var i=t("./BiAStarFinder");r.prototype=new i,r.prototype.constructor=r,e.exports=r},{"./BiAStarFinder":9}],11:[function(t,e){function r(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners}var i=t("../core/Util");r.prototype.findPath=function(t,e,r,n,o){var s,a,u,h,l,p=o.getNodeAt(t,e),c=o.getNodeAt(r,n),f=[],d=[],g=this.allowDiagonal,y=this.dontCrossCorners,b=0,A=1;for(f.push(p),p.opened=!0,p.by=b,d.push(c),c.opened=!0,c.by=A;f.length&&d.length;){for(u=f.shift(),u.closed=!0,s=o.getNeighbors(u,g,y),h=0,l=s.length;l>h;++h)if(a=s[h],!a.closed)if(a.opened){if(a.by===A)return i.biBacktrace(u,a)}else f.push(a),a.parent=u,a.opened=!0,a.by=b;for(u=d.shift(),u.closed=!0,s=o.getNeighbors(u,g,y),h=0,l=s.length;l>h;++h)if(a=s[h],!a.closed)if(a.opened){if(a.by===b)return i.biBacktrace(a,u)}else d.push(a),a.parent=u,a.opened=!0,a.by=A}return[]},e.exports=r},{"../core/Util":6}],12:[function(t,e){function r(t){i.call(this,t),this.heuristic=function(){return 0}}var i=t("./BiAStarFinder");r.prototype=new i,r.prototype.constructor=r,e.exports=r},{"./BiAStarFinder":9}],13:[function(t,e){function r(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners}var i=t("../core/Util");r.prototype.findPath=function(t,e,r,n,o){var s,a,u,h,l,p=[],c=this.allowDiagonal,f=this.dontCrossCorners,d=o.getNodeAt(t,e),g=o.getNodeAt(r,n);for(p.push(d),d.opened=!0;p.length;){if(u=p.shift(),u.closed=!0,u===g)return i.backtrace(g);for(s=o.getNeighbors(u,c,f),h=0,l=s.length;l>h;++h)a=s[h],a.closed||a.opened||(p.push(a),a.opened=!0,a.parent=u)}return[]},e.exports=r},{"../core/Util":6}],14:[function(t,e){function r(t){i.call(this,t),this.heuristic=function(){return 0}}var i=t("./AStarFinder");r.prototype=new i,r.prototype.constructor=r,e.exports=r},{"./AStarFinder":7}],15:[function(t,e){function r(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.heuristic=t.heuristic||i.manhattan,this.weight=t.weight||1,this.trackRecursion=t.trackRecursion||!1,this.timeLimit=t.timeLimit||1/0}t("../core/Util");var i=t("../core/Heuristic"),n=t("../core/Node");r.prototype.findPath=function(t,e,r,i,o){var s,a,u,h=0,l=(new Date).getTime(),p=function(t,e){return this.heuristic(Math.abs(e.x-t.x),Math.abs(e.y-t.y))}.bind(this),c=function(t,e){return t.x===e.x||t.y===e.y?1:Math.SQRT2},f=function(t,e,r,i,s){if(h++,this.timeLimit>0&&(new Date).getTime()-l>1e3*this.timeLimit)return 1/0;var a=e+p(t,g)*this.weight;if(a>r)return a;if(t==g)return i[s]=[t.x,t.y],t;var u,d,y,b,A=o.getNeighbors(t,this.allowDiagonal,this.dontCrossCorners);for(y=0,u=1/0;b=A[y];++y){if(this.trackRecursion&&(b.retainCount=b.retainCount+1||1,b.tested!==!0&&(b.tested=!0)),d=f(b,e+c(t,b),r,i,s+1),d instanceof n)return i[s]=[t.x,t.y],d;this.trackRecursion&&0===--b.retainCount&&(b.tested=!1),u>d&&(u=d)}return u}.bind(this),d=o.getNodeAt(t,e),g=o.getNodeAt(r,i),y=p(d,g);for(s=0;!0;++s){if(a=[],u=f(d,0,y,a,0),1/0===u)return[];if(u instanceof n)return a;y=u}return[]},e.exports=r},{"../core/Heuristic":4,"../core/Node":5,"../core/Util":6}],16:[function(t,e){function r(t){t=t||{},this.heuristic=t.heuristic||o.manhattan,this.trackJumpRecursion=t.trackJumpRecursion||!1}var i=t("heap"),n=t("../core/Util"),o=t("../core/Heuristic");r.prototype.findPath=function(t,e,r,o,s){var a,u=this.openList=new i(function(t,e){return t.f-e.f}),h=this.startNode=s.getNodeAt(t,e),l=this.endNode=s.getNodeAt(r,o);for(this.grid=s,h.g=0,h.f=0,u.push(h),h.opened=!0;!u.empty();){if(a=u.pop(),a.closed=!0,a===l)return n.expandPath(n.backtrace(l));this._identifySuccessors(a)}return[]},r.prototype._identifySuccessors=function(t){var e,r,i,n,s,a,u,h,l,p,c=this.grid,f=this.heuristic,d=this.openList,g=this.endNode.x,y=this.endNode.y,b=t.x,A=t.y,k=Math.abs;for(Math.max,e=this._findNeighbors(t),n=0,s=e.length;s>n;++n)if(r=e[n],i=this._jump(r[0],r[1],b,A)){if(a=i[0],u=i[1],p=c.getNodeAt(a,u),p.closed)continue;h=o.octile(k(a-b),k(u-A)),l=t.g+h,(!p.opened||l<p.g)&&(p.g=l,p.h=p.h||f(k(a-g),k(u-y)),p.f=p.g+p.h,p.parent=t,p.opened?d.updateItem(p):(d.push(p),p.opened=!0))}},r.prototype._jump=function(t,e,r,i){var n=this.grid,o=t-r,s=e-i;if(!n.isWalkableAt(t,e))return null;if(this.trackJumpRecursion===!0&&(n.getNodeAt(t,e).tested=!0),n.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o&&0!==s){if(n.isWalkableAt(t-o,e+s)&&!n.isWalkableAt(t-o,e)||n.isWalkableAt(t+o,e-s)&&!n.isWalkableAt(t,e-s))return[t,e]}else if(0!==o){if(n.isWalkableAt(t+o,e+1)&&!n.isWalkableAt(t,e+1)||n.isWalkableAt(t+o,e-1)&&!n.isWalkableAt(t,e-1))return[t,e]}else if(n.isWalkableAt(t+1,e+s)&&!n.isWalkableAt(t+1,e)||n.isWalkableAt(t-1,e+s)&&!n.isWalkableAt(t-1,e))return[t,e];return 0!==o&&0!==s&&(this._jump(t+o,e,t,e)||this._jump(t,e+s,t,e))?[t,e]:n.isWalkableAt(t+o,e)||n.isWalkableAt(t,e+s)?this._jump(t+o,e+s,t,e):null},r.prototype._findNeighbors=function(t){var e,r,i,n,o,s,a,u,h=t.parent,l=t.x,p=t.y,c=this.grid,f=[];if(h)e=h.x,r=h.y,i=(l-e)/Math.max(Math.abs(l-e),1),n=(p-r)/Math.max(Math.abs(p-r),1),0!==i&&0!==n?(c.isWalkableAt(l,p+n)&&f.push([l,p+n]),c.isWalkableAt(l+i,p)&&f.push([l+i,p]),(c.isWalkableAt(l,p+n)||c.isWalkableAt(l+i,p))&&f.push([l+i,p+n]),!c.isWalkableAt(l-i,p)&&c.isWalkableAt(l,p+n)&&f.push([l-i,p+n]),!c.isWalkableAt(l,p-n)&&c.isWalkableAt(l+i,p)&&f.push([l+i,p-n])):0===i?c.isWalkableAt(l,p+n)&&(f.push([l,p+n]),c.isWalkableAt(l+1,p)||f.push([l+1,p+n]),c.isWalkableAt(l-1,p)||f.push([l-1,p+n])):c.isWalkableAt(l+i,p)&&(f.push([l+i,p]),c.isWalkableAt(l,p+1)||f.push([l+i,p+1]),c.isWalkableAt(l,p-1)||f.push([l+i,p-1]));else for(o=c.getNeighbors(t,!0),a=0,u=o.length;u>a;++a)s=o[a],f.push([s.x,s.y]);return f},e.exports=r},{"../core/Heuristic":4,"../core/Util":6,heap:1}],17:[function(t,e){function r(t){n.call(this,t),t=t||{},this.heuristic=t.heuristic||i.manhattan}var i=t("../core/Heuristic"),n=t("./JumpPointFinder");r.prototype=new n,r.prototype.constructor=r,r.prototype._jump=function(t,e,r,i){var n=this.grid,o=t-r,s=e-i;if(!n.isWalkableAt(t,e))return null;if(this.trackJumpRecursion===!0&&(n.getNodeAt(t,e).tested=!0),n.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o){if(n.isWalkableAt(t,e-1)&&!n.isWalkableAt(t-o,e-1)||n.isWalkableAt(t,e+1)&&!n.isWalkableAt(t-o,e+1))return[t,e]}else{if(0===s)throw new Error("Only horizontal and vertical movements are allowed");if(n.isWalkableAt(t-1,e)&&!n.isWalkableAt(t-1,e-s)||n.isWalkableAt(t+1,e)&&!n.isWalkableAt(t+1,e-s))return[t,e];if(this._jump(t+1,e,t,e)||this._jump(t-1,e,t,e))return[t,e]}return this._jump(t+o,e+s,t,e)},r.prototype._findNeighbors=function(t){var e,r,i,n,o,s,a,u,h=t.parent,l=t.x,p=t.y,c=this.grid,f=[];if(h)e=h.x,r=h.y,i=(l-e)/Math.max(Math.abs(l-e),1),n=(p-r)/Math.max(Math.abs(p-r),1),0!==i?(c.isWalkableAt(l,p-1)&&f.push([l,p-1]),c.isWalkableAt(l,p+1)&&f.push([l,p+1]),c.isWalkableAt(l+i,p)&&f.push([l+i,p])):0!==n&&(c.isWalkableAt(l-1,p)&&f.push([l-1,p]),c.isWalkableAt(l+1,p)&&f.push([l+1,p]),c.isWalkableAt(l,p+n)&&f.push([l,p+n]));else for(o=c.getNeighbors(t,!1),a=0,u=o.length;u>a;++a)s=o[a],f.push([s.x,s.y]);return f},e.exports=r},{"../core/Heuristic":4,"./JumpPointFinder":16}],18:[function(t,e){function r(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.heuristic=t.heuristic||o.manhattan}var i=t("heap"),n=t("../core/Util"),o=t("../core/Heuristic");r.prototype.findPath=function(t,e,r,o,s){var a,u,h,l,p,c,f,d,g=new i(function(t,e){return t.f-e.f}),y=s.getNodeAt(t,e),b=s.getNodeAt(r,o),A=this.heuristic,k=this.allowDiagonal,m=this.dontCrossCorners,v=Math.abs,w=Math.SQRT2;for(y.g=0,y.f=0,g.push(y),y.opened=!0;!g.empty();){if(a=g.pop(),a.closed=!0,a===b)return n.backtrace(b);u=s.getNeighbors(a,k,m);var x=u.length;for(l=0,p=u.length;p>l;++l)h=u[l],h.closed||(c=h.x,f=h.y,d=a.g+(0===c-a.x||0===f-a.y?1:w),(!h.opened||d<h.g)&&(h.g=d*x/9,h.h=h.h||A(v(c-r),v(f-o)),h.f=h.g+h.h,h.parent=a,h.opened?g.updateItem(h):(g.push(h),h.opened=!0)))}return[]},e.exports=r},{"../core/Heuristic":4,"../core/Util":6,heap:1}],19:[function(t,e){e.exports={Heap:t("heap"),Node:t("./core/Node"),Grid:t("./core/Grid"),Util:t("./core/Util"),Heuristic:t("./core/Heuristic"),AStarFinder:t("./finders/AStarFinder"),BestFirstFinder:t("./finders/BestFirstFinder"),BreadthFirstFinder:t("./finders/BreadthFirstFinder"),DijkstraFinder:t("./finders/DijkstraFinder"),BiAStarFinder:t("./finders/BiAStarFinder"),BiBestFirstFinder:t("./finders/BiBestFirstFinder"),BiBreadthFirstFinder:t("./finders/BiBreadthFirstFinder"),BiDijkstraFinder:t("./finders/BiDijkstraFinder"),IDAStarFinder:t("./finders/IDAStarFinder"),JumpPointFinder:t("./finders/JumpPointFinder"),OrthogonalJumpPointFinder:t("./finders/OrthogonalJumpPointFinder"),TraceFinder:t("./finders/TraceFinder")}},{"./core/Grid":3,"./core/Heuristic":4,"./core/Node":5,"./core/Util":6,"./finders/AStarFinder":7,"./finders/BestFirstFinder":8,"./finders/BiAStarFinder":9,"./finders/BiBestFirstFinder":10,"./finders/BiBreadthFirstFinder":11,"./finders/BiDijkstraFinder":12,"./finders/BreadthFirstFinder":13,"./finders/DijkstraFinder":14,"./finders/IDAStarFinder":15,"./finders/JumpPointFinder":16,"./finders/OrthogonalJumpPointFinder":17,"./finders/TraceFinder":18,heap:1}]},{},[19])(19)});
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,e,h){if(b==Array.prototype||b==Object.prototype)return b;b[e]=h.value;return b};
$jscomp.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var e=0;e<b.length;++e){var h=b[e];if(h&&h.Math==Math)return h}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(b,e){var h=$jscomp.propertyToPolyfillSymbol[e];if(null==h)return b[e];h=b[h];return void 0!==h?h:b[e]};$jscomp.polyfill=function(b,e,h,f){e&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(b,e,h,f):$jscomp.polyfillUnisolated(b,e,h,f))};
$jscomp.polyfillUnisolated=function(b,e,h,f){h=$jscomp.global;b=b.split(".");for(f=0;f<b.length-1;f++){var k=b[f];if(!(k in h))return;h=h[k]}b=b[b.length-1];f=h[b];e=e(f);e!=f&&null!=e&&$jscomp.defineProperty(h,b,{configurable:!0,writable:!0,value:e})};
$jscomp.polyfillIsolated=function(b,e,h,f){var k=b.split(".");b=1===k.length;f=k[0];f=!b&&f in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var m=0;m<k.length-1;m++){var n=k[m];if(!(n in f))return;f=f[n]}k=k[k.length-1];h=$jscomp.IS_SYMBOL_NATIVE&&"es6"===h?f[k]:null;e=e(h);null!=e&&(b?$jscomp.defineProperty($jscomp.polyfills,k,{configurable:!0,writable:!0,value:e}):e!==h&&(void 0===$jscomp.propertyToPolyfillSymbol[k]&&(h=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[k]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(k):$jscomp.POLYFILL_PREFIX+h+"$"+k),$jscomp.defineProperty(f,$jscomp.propertyToPolyfillSymbol[k],{configurable:!0,writable:!0,value:e})))};$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(e,h){var f=this;f instanceof String&&(f=String(f));var k=f.length;h=h||0;for(0>h&&(h=Math.max(h+k,0));h<k;h++){var m=f[h];if(m===e||Object.is(m,e))return!0}return!1}},"es7","es3");
$jscomp.polyfill("String.prototype.replaceAll",function(b){return b?b:function(e,h){if(e instanceof RegExp&&!e.global)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");return e instanceof RegExp?this.replace(e,h):this.replace(new RegExp(String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),h)}},"es_2021","es3");inlHelper={VERSION:"1.0.13",ads:null,game:null,rewardAds:null,utilities:null};
const AD_TYPES={PREROLL:"preroll",GAME_LOADED:"gameloaded",GAME_START:"gamestart",GAME_OVER:"gameover",GAMEPLAY:"gameplay",GAMEPLAY_INTERRUPTING:"gameplay_interrupting",AFK:"afk",REWARDED:"rewarded"},GAMEPLAY_ADS_LEVELS={NONE:"none",NON_INTERRUPTING:"non_interrupting",ALL:"all"},adsConfig={enabled:!0,cooldownTimer:9E4,firstAdDelay:3E4,gameplayAdTimer:6E4,afkTimer:0,test:!1,autoAdSuccessful:!0,enableTriggerPoints:!0,gameplayAdsLevel:GAMEPLAY_ADS_LEVELS.ALL,regularCooldownGameplayAds:!0},gameConfig=
{removeGameInit:!1,fullscreenAllowed:!0,inlLogoAllowed:!0,cheatVersion:!1,debugVersion:!1},rewAdsConfig={active:!1,test:!1,cooldown:0};gameConfig.inlLogoAllowed=!1;function getUrlParams(){const b={},e=window.location.search.substring(1).split("&");for(const h of e)if(h){let [f,k]=h.split("=").map(decodeURIComponent);"true"===k?k=!0:"false"===k?k=!1:isNaN(k)||""===k.trim()||(k=Number(k));b[f]=k}return b}let urlParams=getUrlParams();null!=urlParams.cheats&&(gameConfig.cheatVersion=urlParams.cheats);
null!=urlParams.fullscreen_allowed&&(gameConfig.fullscreenAllowed=urlParams.fullscreen_allowed);null!=urlParams.marketing_allowed&&(gameConfig.inlLogoAllowed=urlParams.marketing_allowed);null!=urlParams.ads_enabled&&(adsConfig.enabled=urlParams.ads_enabled);null!=urlParams.rew_ads_enabled&&(rewAdsConfig.active=urlParams.rew_ads_enabled);null!=urlParams.ads_cooldown&&(adsConfig.cooldownTimer=1E3*urlParams.ads_cooldown);null!=urlParams.gameplay_cooldown&&(adsConfig.gameplayAdTimer=1E3*urlParams.gameplay_cooldown);
null!=urlParams.afk_cooldown&&(adsConfig.afkTimer=1E3*urlParams.afk_cooldown);null!=urlParams.start_cooldown&&(adsConfig.firstAdDelay=1E3*urlParams.start_cooldown);null!=urlParams.test_ads&&(adsConfig.test=urlParams.test_ads);null!=urlParams.test_ads_rewarded&&(rewAdsConfig.test=urlParams.test_ads_rewarded);null!=urlParams.debug_version&&(gameConfig.debugVersion=urlParams.debug_version);
class AdHelper{constructor(b){this.config=b;this.lastAdTime=null;this.enabled=b.enabled;this.enableTriggerPoints=b.enableTriggerPoints;this.onShowAdListeners=[];this.onShowAdSuccessfullListener=[];this.config.test&&showToast("TEST INTERSTITIAL ADS ALLOWED");0<this.config.afkTimer&&(3E4>this.config.afkTimer&&console.warn("Afk timer is probably very low"),this._initAfkAd());0<this.config.firstAdDelay&&this._enableFirstAdDelay()}setEnabled(b){this.enabled=b;this.config.enabled=b}setTriggerPointsEnabled(b){this.enableTriggerPoints=
b;this.config.enableTriggerPoints=b}_enableFirstAdDelay(b=this.config.firstAdDelay){this.startTime=Date.now();this.config.firstAdDelay=b}triggerAdPoint(b){0!=this.enableTriggerPoints&&(null==b&&(b={}),null==b.adType&&(b.adType="default"),inlogicLog("Trigger point. Type: "+b.adType),this._canAdBeShown(b)&&this._showAd(b))}triggerCustomAdPoint(b){null==b&&(b={});null==b.adType&&(b.adType="default");inlogicLog("Custom Trigger point. Type: "+b.adType);this._showAd(b)}_showAd(b){0!=this.config.enabled&&
(this.config.test&&this.showFakeAd(),this.onShowAdListeners.forEach(e=>{e.call(window,b)}),this.config.autoAdSuccessful&&this.adSuccessful(b))}adSuccessful(b){inlogicLog("Ad succesfuly watched");this.lastAdTime=Date.now();null!=b&&null!=b.customLastAdTime&&(this.lastAdTime=b.customLastAdTime);this.onShowAdSuccessfullListener.forEach(e=>{e.call(window,b)});inlHelper.utilities.isPhaser3()&&inlHelper.utilities.resetPhaserInput()}_canAdBeShown(b){if(!this.enabled)return!1;var e=Date.now();if(0<this.config.firstAdDelay){var h=
e-this.startTime;if(h<this.config.firstAdDelay)return e=((this.config.firstAdDelay-h)/1E3).toFixed(1),inlogicLog(`${e} seconds remaining to show first ad from start`),!1;if(b.adType==AD_TYPES.GAMEPLAY_INTERRUPTING&&h<this.config.gameplayAdTimer)return e=((this.config.gameplayAdTimer-h)/1E3).toFixed(1),inlogicLog(`${e} seconds remaining to show first gameplay interrupting ad `),!1}if(0<this.config.cooldownTimer)if(e-=this.lastAdTime,b=b.adType,h=this.config.gameplayAdsLevel,b===AD_TYPES.GAMEPLAY||
b===AD_TYPES.GAMEPLAY_INTERRUPTING){let f=this.config.gameplayAdTimer;b===AD_TYPES.GAMEPLAY&&!0===adsConfig.regularCooldownGameplayAds&&(f=this.config.cooldownTimer);if(h===GAMEPLAY_ADS_LEVELS.NONE)return inlogicLog("All gameplay ads are disabled (Level: NONE)"),!1;if(h===GAMEPLAY_ADS_LEVELS.NON_INTERRUPTING&&b===AD_TYPES.GAMEPLAY_INTERRUPTING)return inlogicLog("Interrupting gameplay ads are disabled (Level: NON_INTERRUPTING)"),!1;if(e<f)return e=((f-e)/1E3).toFixed(1),inlogicLog(`${e} seconds remaining from AD Gameplay Cooldown`),
!1}else if(e<this.config.cooldownTimer)return e=((this.config.cooldownTimer-e)/1E3).toFixed(1),inlogicLog(`${e} seconds remaining from AD Cooldown`),!1;return!0}_retryAfkAd(){inlogicLog("Attempting AFK ad...");"visible"==document.visibilityState&&this.triggerAdPoint({adType:AD_TYPES.AFK});this.afkTimer=setTimeout(()=>this._retryAfkAd(),5E3)}_resetAfkTimer(){clearTimeout(this.afkTimer);this.afkTimer=setTimeout(()=>this._retryAfkAd(),this.config.afkTimer)}_initAfkAd(){this.afkTimer=Date.now();this.boundResetAfkTimer=
this._resetAfkTimer.bind(this);document.addEventListener("keydown",this.boundResetAfkTimer);document.addEventListener("mousedown",this.boundResetAfkTimer);document.addEventListener("touchstart",this.boundResetAfkTimer);this._resetAfkTimer()}}const GAMEOVER_BY_WIN=1,GAMEOVER_BY_LOSE=0,GAMEOVER_BY_USER=-1;
class InlogicHelper{constructor(b){this.config=b;this.currentScore=this.currentLevel=0;this.setSoundVolume=this.setMusicVolume=this.isTutorialDone=this.setMute=this.setInput=this.resumeGame=this.pauseGame=this.gameInit=null;this.onSplashLoadedListeners=[];this.onGameLoadedListeners=[];this.onEnteredGameListeners=[];this.onGameStartListeners=[];this.onGameOverListeners=[];this.levelChangedListeners=[];this.scoreUpdatedListeners=[]}onGameOver(b){console.error("onGameOver",b);GameSnacks.game.gameOver();
inlogicLog("On Game Over",b);console.error("onGameOver",b);this.onGameOverListeners.forEach(e=>{e.call(window,b)});console.error("onGameOver",b)}getForcedLanguage(){var b={eng:"en",deu:"de",spa:"es",ita:"it",rus:"ru",por:"pt",fra:"fr"};let e=urlParams.lang;return null!=e?(null!=b[e]&&(e=b[e]),e):null}onGameStart(b){inlogicLog(b?"New game. Restart: YES!":"New game. Restart: NO!");this.onGameStartListeners.forEach(e=>{e.call(window,b)})}onSplashLoaded(){inlogicLog("Splash loaded!");this.onSplashLoadedListeners.forEach(b=>
{b.call(window)})}onGameLoaded(){inlogicLog("Game loaded!");this.onGameLoadedListeners.forEach(b=>{b.call(window)})}onEnteredGame(){inlogicLog("On entered game");this.onEnteredGameListeners.forEach(b=>{b.call(window)})}setPaused(b){b?this.pauseGame():this.resumeGame()}functionsTest(){const b="pauseGame resumeGame setMute setInput gameInit isTutorialDone".split(" ");for(let e=0;e<b.length;e++){let h=b[e];null!==this[h]&&"function"===typeof this[h]||console.error(`NO ${h.toUpperCase()} FUNCTION DEFINED`)}}setScore(b){this.currentScore=
b;this.scoreUpdatedListeners.forEach(e=>{e.call(window,b)})}setLevel(b){this.currentLevel=b;this.levelChangedListeners.forEach(e=>{e.call(window,b)})}setTitleName(b){b&&(window.location.href.startsWith("https://www.inlogic.sk/html5/test/")&&0==b.includes("AD")&&(b+=adsConfig.enabled?" (ADS)":" (NO_ADS)"),document.title=b)}}
class InlRewardAds{constructor(b){this.active=b.active;this.test=b.test;this.lastRewAdTime=null;this.onShowRewardAdListeners=[];this.test&&showToast("TEST REW ADS ALLOWED")}setActive(b){this.active=b;rewAdsConfig.active=b}rewAdTriggered(){this.lastRewAdTime=Date.now()}showRewardedAd(b,e,h){0==inlHelper.utilities.hasCooldownPassed(AD_TYPES.REWARDED)&&console.warn("Cooldown for REW ADS has not yet passed !!!");this.rewAdTriggered();if(this.test)this.showFakeRewAd(()=>{this._applyRewardedAdCooldownSmart();
"function"===typeof b&&b.call(h)},()=>{"function"===typeof e&&e.call(h)},h);else{var f=()=>{this._applyRewardedAdCooldownSmart();"function"===typeof b&&b.call(h);inlHelper.utilities.isPhaser3()&&inlHelper.utilities.resetPhaserInput()},k=()=>{"function"===typeof e&&e.call(h);inlHelper.utilities.isPhaser3()&&inlHelper.utilities.resetPhaserInput()};this.onShowRewardAdListeners.forEach(m=>{m.call(window,f,k,h)})}}_applyRewardedAdCooldownSmart(b=6E4){const e=adsConfig.cooldownTimer;b>e&&(b=e);if(!e||0>=
e)inlogicLog("Rewarded ad success \u2013 cooldownTimer is 0, skipping cooldown logic.");else{var h=Date.now(),f=e-(h-(inlHelper.ads.lastAdTime||0));f<b?(inlHelper.ads.adSuccessful({adType:AD_TYPES.REWARDED,customLastAdTime:h-(e-b)}),inlogicLog(`Rewarded ad success \u2013 cooldown adjusted. New cooldown remaining: ${b}ms`)):inlogicLog(`Rewarded ad success \u2013 no adjustment needed. Remaining cooldown: ${f}ms, which is >= ${b}ms`)}}}
class InlUtilities{constructor(){}hasCooldownPassed(b){if(null==b)throw Error("Choose AD_TYPE when checking cooldown!");var e=Date.now(),h=inlHelper.ads.config,f=e-inlHelper.ads.startTime,k=e-(inlHelper.ads.lastAdTime||0);if(b===AD_TYPES.REWARDED)return b=e-inlHelper.rewardAds.lastRewAdTime,b<=rewAdsConfig.cooldown?(b=((rewAdsConfig.cooldown-b)/1E3).toFixed(1),inlogicLog(`${b} s do dal\u0161ej rew ad`),!1):!0;e=h.firstAdDelay;if(0<e){if(f<e)return b=((e-f)/1E3).toFixed(1),inlogicLog(`${b} s do prvej reklamy od \u0161tartu`),
!1;e=h.gameplayAdTimer;if(b===AD_TYPES.GAMEPLAY_INTERRUPTING&&f<e)return b=((e-f)/1E3).toFixed(1),inlogicLog(`${b} s do prvej preru\u0161uj\u00facej gameplay reklamy`),!1}f=h.cooldownTimer;e=h.gameplayAdTimer;h=h.regularCooldownGameplayAds;b===AD_TYPES.GAMEPLAY_INTERRUPTING?f=e:b!==AD_TYPES.GAMEPLAY||h||(f=e);if(!f||0>=f)return inlogicLog(`\u017diadny cooldown pre "${b}", m\u00f4\u017ee\u0161 to hodi\u0165 hne\u010f`),!0;if(k<f)return k=((f-k)/1E3).toFixed(1),inlogicLog(`${k} s zost\u00e1va z ${b===
AD_TYPES.GAMEPLAY||b===AD_TYPES.GAMEPLAY_INTERRUPTING?"Gameplay CD":"Ad CD"}`),!1;inlogicLog(`Cooldown pre "${b}" vypr\u0161al, m\u00f4\u017ee\u0161 uk\u00e1za\u0165 reklamu`);return!0}isPhaser3(){if("undefined"!=typeof Phaser&&Phaser.VERSION.startsWith("3")){if("undefined"==typeof game){for(let b=0;5>b;b++)console.error("no 'GAME' object found");return!1}return!0}return!1}resetPhaserInput(){game.scene.scenes.forEach(b=>{(b=b.input&&b.input.manager)&&Array.isArray(b.pointers)&&b.pointers.forEach(e=>
{"function"===typeof e.reset?e.reset():(e.active=!1,e.isDown=!1,e.justDown=!1,e.justUp=!1)})})}}inlHelper.utilities=new InlUtilities;inlHelper.ads=new AdHelper(adsConfig);inlHelper.rewardAds=new InlRewardAds(rewAdsConfig);inlHelper.game=new InlogicHelper(gameConfig);inlHelper.game.setTitleName(document.title);function inlogicLog(...b){}function inlogicError(...b){console.error(">INL ERROR<",...b)}inlogicLog("Module initialized! v"+inlHelper.VERSION);
function showToast(b,e=3E3){let h=document.createElement("div");h.textContent=b;h.style.position="fixed";h.style.left="50%";h.style.transform="translateX(-50%)";h.style.backgroundColor="rgba(0, 0, 0, 0.8)";h.style.color="white";h.style.padding="10px 20px";h.style.borderRadius="5px";h.style.fontSize="20px";h.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)";h.style.zIndex="1000";h.style.opacity="0";h.style.transition="opacity 0.5s ease-in-out, bottom 0.5s ease-in-out";b=20+50*document.querySelectorAll(".toast-message").length;
h.style.bottom=`${b}px`;h.classList.add("toast-message");document.body.appendChild(h);setTimeout(()=>{h.style.opacity="1"},10);setTimeout(()=>{h.style.opacity="0";setTimeout(()=>{document.body.removeChild(h)},500)},e)}
inlHelper.ads.showFakeAd=function(b='"This is a test inlogic ad. Closing in 5 seconds..."'){const e=document.createElement("div");e.id="adOverlay";e.style.position="fixed";e.style.top="0";e.style.left="0";e.style.width="100vw";e.style.height="100vh";e.style.backgroundColor="rgba(0, 0, 0, 0.7)";e.style.display="flex";e.style.justifyContent="center";e.style.alignItems="center";e.style.zIndex="1000";const h=document.createElement("div");h.id="fakeAd";h.style.width="50vw";h.style.height="50vh";h.style.backgroundColor=
"#fff";h.style.borderRadius="10px";h.style.boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)";h.style.display="flex";h.style.flexDirection="column";h.style.justifyContent="center";h.style.alignItems="center";h.style.padding="20px";h.style.position="relative";const f=document.createElement("div");f.textContent="INLOGIC FAKE AD";f.style.fontSize="28px";f.style.fontWeight="600";f.style.color="#333";f.style.marginBottom="10px";const k=document.createElement("p");k.textContent=b;k.style.fontSize="20px";k.style.color=
"#555";k.style.textAlign="center";k.style.marginBottom="20px";b=document.createElement("button");b.textContent="Dismiss";b.style.backgroundColor="#e74c3c";b.style.color="#fff";b.style.border="none";b.style.borderRadius="5px";b.style.padding="10px 20px";b.style.fontSize="16px";b.style.cursor="pointer";inlHelper.game.pauseGame();inlHelper.game.setMute(!0);b.addEventListener("click",()=>{document.body.contains(e)&&(inlHelper.game.resumeGame(),inlHelper.game.setMute(!1),document.body.removeChild(e))});
h.appendChild(f);h.appendChild(k);h.appendChild(b);e.appendChild(h);document.body.appendChild(e);setTimeout(()=>{document.body.contains(e)&&(inlHelper.game.resumeGame(),inlHelper.game.setMute(!1),document.body.removeChild(e))},5E3)};
inlHelper.rewardAds.showFakeRewAd=function(b,e,h){const f=document.createElement("div");f.id="rewardAdOverlay";f.style.position="fixed";f.style.top="0";f.style.left="0";f.style.width="100vw";f.style.height="100vh";f.style.backgroundColor="rgba(0, 0, 0, 0.7)";f.style.display="flex";f.style.justifyContent="center";f.style.alignItems="center";f.style.zIndex="1000";const k=document.createElement("div");k.id="fakeRewardedAd";k.style.width="50vw";k.style.height="50vh";k.style.backgroundColor="#fff";k.style.borderRadius=
"10px";k.style.boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)";k.style.display="flex";k.style.flexDirection="column";k.style.justifyContent="center";k.style.alignItems="center";k.style.padding="20px";k.style.position="relative";const m=document.createElement("div");m.textContent="INLOGIC REWARDED AD";m.style.fontSize="28px";m.style.fontWeight="600";m.style.color="#333";m.style.marginBottom="10px";const n=document.createElement("p");n.textContent="Watch this ad to earn a reward!";n.style.fontSize="20px";
n.style.color="#555";n.style.textAlign="center";n.style.marginBottom="20px";const y=document.createElement("div");y.style.display="flex";y.style.gap="20px";const x=document.createElement("button");x.textContent="SUCCESSFUL";x.style.backgroundColor="#4CAF50";x.style.color="#fff";x.style.border="none";x.style.padding="10px 20px";x.style.fontSize="18px";x.style.cursor="pointer";x.style.borderRadius="5px";const w=document.createElement("button");w.textContent="FAILED";w.style.backgroundColor="#f44336";
w.style.color="#fff";w.style.border="none";w.style.padding="10px 20px";w.style.fontSize="18px";w.style.cursor="pointer";w.style.borderRadius="5px";y.appendChild(x);y.appendChild(w);k.appendChild(m);k.appendChild(n);k.appendChild(y);f.appendChild(k);document.body.appendChild(f);inlHelper.game.pauseGame();inlHelper.game.setMute(!0);x.addEventListener("click",()=>{"function"===typeof b&&(b.call(h),inlHelper.game.resumeGame(),inlHelper.game.setMute(!1));document.body.contains(f)&&document.body.removeChild(f)});
w.addEventListener("click",()=>{"function"===typeof e&&(e.call(h),inlHelper.game.resumeGame(),inlHelper.game.setMute(!1));document.body.contains(f)&&document.body.removeChild(f)})};var ANTIALIAS_ENABLED=!0,soundManager=null,screenSplash=null,screenTopPanel=null,screenGame=null,screenBackground=null,screenSettings=null,screenParticles=null,progressMap={},onProgress=function(b,e){progressMap[b]=+e;Object.keys(progressMap).reduce(function(h,f){return h+progressMap[f]},0);null!=screenSplash&&(screenSplash.txtContinue.text=e+"%")},runGame=function(){Buttons.enabled=!1;engine=new BABYLON.Engine(canvas,ANTIALIAS_ENABLED,{disableWebGL2Support:!1,audioEngine:!0},!1);engine.disableUniformBuffers=
!1;var b=new customLoadingScreen;engine.loadingScreen=b;engine.displayLoadingUI();activeScene=new SceneMain(engine);VisibilityHandler(activeScene);resizing=!1;onResizeFunc=function(e){var h=window.innerWidth,f=window.innerHeight;GLOBAL_SCALE_LEVEL=f/Resolution.HEIGHT;Resolution.CORRECTION_MUL=1;f>h&&(GLOBAL_SCALE_LEVEL=h/Resolution.WIDTH);1>GLOBAL_SCALE_LEVEL&&(Resolution.CORRECTION_MUL=GLOBAL_SCALE_LEVEL,GLOBAL_SCALE_LEVEL=1);engine.setHardwareScalingLevel(GLOBAL_SCALE_LEVEL);engine.resize();engineRenderWidth=
engine.getRenderWidth();engineRenderHeight=engine.getRenderHeight();2500<engineRenderWidth&&(Resolution.CORRECTION_MUL=GLOBAL_SCALE_LEVEL,GLOBAL_SCALE_LEVEL=h/2500,engine.setHardwareScalingLevel(GLOBAL_SCALE_LEVEL),engine.resize(),engineRenderWidth=engine.getRenderWidth(),engineRenderHeight=engine.getRenderHeight());activeScene.onResize(e)};onResize=function(e){resizing||(resizing=!0,setTimeout(function(){onResizeFunc(e);resizing=!1},100))};onResizeFunc();activeScene.scene.blockMaterialDirtyMechanism=
!0;assetLoader=new AssetLoader(activeScene.scene);assetLoader.loadFonts(function(){onResize()});loadLanguages=function(){languages=new Languages(assetLoader.loadedXMLs["m.isr"]);languages.language="en";var e=navigator.userLanguage||navigator.language;0==e.indexOf("fr")&&(Languages.instance.language="fr");0==e.indexOf("it")&&(Languages.instance.language="it");0==e.indexOf("de")&&(Languages.instance.language="de");0==e.indexOf("es")&&(Languages.instance.language="es");0==e.indexOf("pt")&&(Languages.instance.language=
"pt");0==e.indexOf("br")&&(Languages.instance.language="pt");0==e.indexOf("ru")&&(Languages.instance.language="ru");e=getUrlParameterByName("lang");null!==e&&("en"==e&&(Languages.instance.language="en"),"de"==e&&(Languages.instance.language="de"),"es"==e&&(Languages.instance.language="es"),"fr"==e&&(Languages.instance.language="fr"),"it"==e&&(Languages.instance.language="it"),"br"==e&&(Languages.instance.language="pt"),"pt"==e&&(Languages.instance.language="pt"),"ru"==e&&(Languages.instance.language=
"ru"));e=inlHelper.game.getForcedLanguage();null!=e&&(Languages.instance.language=e)};assetLoader.loadSplashAssets(function(){inlHelper.game.onSplashLoaded();adinplay_init();loadLanguages();activeScene.scene.blockMaterialDirtyMechanism=!1;activeScene.audioType="mp3";GameData.Load();screenSplash=new ScreenSplash(activeScene.scene);activeScene.addScreen(screenSplash);activeScene.scene.activeCameras=[screenSplash.camera];activeScene.scene.activeCamera=screenSplash.camera;activeScene.scene.cameraToUseForPointers=
screenSplash.camera;setGameResolutionByQuality();onResize();onResize();engine.runRenderLoop(function(){activeScene.beforeRender();activeScene.render();activeScene.afterRender()});window.addEventListener("resize",onResize);window.addEventListener("contextmenu",function(e){e.preventDefault()});document.documentElement.style.overflow="hidden";document.body.scroll="no"})};
function loadGameAssets(){assetLoader.loadGameAssets(function(){soundManager=new SoundManager(activeScene);screenBackground=new ScreenBackground(activeScene.scene);screenGame=new ScreenGame(activeScene.scene);screenSkins=new ScreenSkins(activeScene.scene);screenTimedOffers=new ScreenTimedOffers(activeScene.scene);screenOffer=new ScreenOffer(activeScene.scene);screenSoldProducts=new ScreenSoldProducts(activeScene.scene);screenGameWin=new ScreenGameWin(activeScene.scene);screenTopPanel=new ScreenTopPanel(activeScene.scene);
screenParticles=new ScreenParticles(activeScene.scene);screenSettings=new ScreenSettings(activeScene.scene);screenResetConfirmation=new ScreenResetConfirmation(activeScene.scene);activeScene.addScreen(screenBackground);activeScene.addScreen(screenGame);activeScene.addScreen(screenSkins);activeScene.addScreen(screenTimedOffers);activeScene.addScreen(screenOffer);activeScene.addScreen(screenSoldProducts);activeScene.addScreen(screenGameWin);activeScene.addScreen(screenTopPanel);activeScene.addScreen(screenParticles);
activeScene.addScreen(screenSettings);activeScene.addScreen(screenResetConfirmation);activeScene.updateTexts();activeScene.scene.activeCameras=[screenBackground.camera,screenGame.cameraPlayer];activeScene.scene.activeCamera=screenGame.cameraPlayer;activeScene.scene.cameraToUseForPointers=screenGame.cameraPlayer;onResize();onResize();screenSplash.allAssetsLoaded()})}
function IEdetection(){var b=window.navigator.userAgent;return 0<b.indexOf("MSIE ")||0<b.indexOf("Trident/")||0<b.indexOf("Edg/")?!0:!1}function babylonInit(){mobileDetect=new MobileDetect(window.navigator.userAgent);runningOnMobile=null!=mobileDetect.mobile();(runningOnIPHONE=mobileDetect.is("iPhone"))&&17.4<=mobileDetect.version("iOS")&&(TEXT_SHADOWS_ENABLED=!1);canvas=document.getElementById("renderCanvas");runGame()}
window.addEventListener("DOMContentLoaded",function(){inlHelper.game.gameInit=babylonInit;inlHelper.game.pauseGame=function(){activeScene.onGamePause()};inlHelper.game.resumeGame=function(){activeScene.onGameResume();canvas.focus()};inlHelper.game.setInput=function(b){activeScene.inputEnabled=b};inlHelper.game.setMute=function(b){BABYLON.Engine.audioEngine.setGlobalVolume(b?0:1)};inlHelper.game.setMusicVolume=function(b){MusicVolume=b;screenSettings.sldrMusicVolume.value=100*MusicVolume};inlHelper.game.setSoundVolume=
function(b){SoundVolume=b;screenSettings.sldrSoundsVolume.value=100*SoundVolume};inlHelper.game.isTutorialDone=function(){return 9<=OnboardingStep};inlHelper.ads.triggerAdPoint({adType:AD_TYPES.PREROLL})});function onStartGame(){console.warn("start game")}function onGameOver(b,e){console.warn("end game",b,e)}
document.addEventListener("DOMContentLoaded",function(){function b(){const e=document.createElement("button");e.className="game-button";e.id="audioButton";e.textContent="AUDIO: "+("true"===localStorage.getItem("soundState"));const h=document.createElement("button");h.className="game-button";h.id="pauseButton";h.textContent="PAUSE";const f=document.createElement("button");f.className="game-button";f.id="resumeButton";f.textContent="RESUME";const k=document.createElement("style");k.textContent="\n        .game-button {\n            position: fixed;\n            top: 10px;\n            right: 10px;\n            padding: 10px 20px;\n            background-color: #007bff;\n            color: white;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            z-index: 1000;\n        }\n        \n        #audioButton { top: 10px; }\n        #pauseButton { top: 60px; }\n        #resumeButton { top: 110px; }\n    ";
document.head.appendChild(k);document.body.appendChild(e);document.body.appendChild(h);document.body.appendChild(f);e.addEventListener("click",()=>{soundState=!soundState;localStorage.setItem("soundState",soundState);e.textContent="AUDIO: "+soundState;"function"===typeof soundStateCallback&&soundStateCallback(soundState)});h.addEventListener("click",()=>{"function"===typeof pauseCallback&&pauseCallback()});f.addEventListener("click",()=>{"function"===typeof resumeCallback&&resumeCallback()})}if("undefined"==
typeof GameSnacks||null==GameSnacks)soundState="true"===localStorage.getItem("soundState"),b(),console.warn("GameSnacks is undefined"),GameSnacks={audio:{subscribe:function(e){soundStateCallback=e},isEnabled:function(){return soundState}},game:{onPause:function(e){pauseCallback=e},onResume:function(e){resumeCallback=e},firstFrameReady:function(){},ready:function(){},gameOver:function(){},levelComplete:function(e){}},score:{update:function(e){}},ad:{break:function(e){"reward"===e.type&&(e.adViewed(),
e.afterAd(),e.adBreakDone("GS: Ad called, type: ",e.type))}},storage:{setItem:function(e,h){localStorage.setItem(e,h)},getItem:function(e){return localStorage.getItem(e)}}};GameSnacks.audio.subscribe(function(e){gamesnacksSoundToggle(e)});GameSnacks.game.onPause(()=>{pauseFunction()});GameSnacks.game.onResume(()=>{unpauseFunction()});babylonInit()});inlHelper.rewardAds.setActive(!0);inlHelper.rewardAds.onShowRewardAdListeners.push(showRewardedAd);
let pauseFunction=function(){try{Buttons.enabled=!1,BABYLON.Engine.audioEngine.setGlobalVolume(0),SceneMain.instance.onGamePause()}catch(b){console.error(b)}},unpauseFunction=function(){try{if(Buttons.enabled=!0,BABYLON.Engine.audioEngine.setGlobalVolume(1),SceneMain.instance.onGameResume(),ScreenSettings.instance.isVisible)ScreenSettings.instance.onClosePressed()}catch(b){console.error(b)}};
function gamesnacksSoundToggle(b){b?(screenSettings.sldrMusicVolume.value=SavedMusicVolume,screenSettings.sldrMusicVolume.isEnabled=!0,screenSettings.btnMusic.isEnabled=!0):(screenSettings.sldrMusicVolume.value=0,screenSettings.sldrMusicVolume.isEnabled=!1,screenSettings.btnMusic.isEnabled=!1);b?(screenSettings.sldrSoundsVolume.value=SavedSoundVolume,screenSettings.sldrSoundsVolume.isEnabled=!0,screenSettings.btnSounds.isEnabled=!0):(screenSettings.sldrSoundsVolume.value=0,screenSettings.sldrSoundsVolume.isEnabled=
!1,screenSettings.btnSounds.isEnabled=!1);GameData.Save();"undefined"!=typeof adBreak&&null!=adBreak&&adConfig({sound:b?"on":"off"})}
function showGoogleAd(b,e,h,f){switch(b){case AD_TYPES.PREROLL:b="preroll";break;case AD_TYPES.GAME_LOADED:b="loaded";break;case AD_TYPES.GAME_START:b="start";break;case AD_TYPES.GAME_OVER:b="next";break;default:b="browse"}GameSnacks.ad.break({type:b||"next",beforeAd:e||function(){pauseFunction()},afterAd:h||function(){unpauseFunction()},adBreakDone:f||function(k){"frequencyCapped"===k.breakStatus&&unpauseFunction()}})}inlHelper.ads.onShowAdListeners.push(b=>{showGoogleAd(b.type)});
function showRewardedAd(b,e,h){GameSnacks.ad.break({type:"reward",beforeReward:f=>{f()},beforeAd:()=>{pauseFunction()},adDismissed:()=>{e.call(h)},adViewed:()=>{b.call(h)},afterAd:()=>{unpauseFunction()},adBreakDone:f=>{"viewed"!==f.breakStatus&&"dismissed"!==f.breakStatus&&(unpauseFunction(),e.call(h))}})};var partnerName="google";window.partnerName=partnerName;const ENGINE_FREEZE_ACTIVE_MESHES=!1,ENGINE_USE_INSTANCES=!0,LAYER_SCREEN_BACKGROUND=4294967295,LAYER_SCREEN_PARTICLES=536870912,LAYER_SCREEN_GAME=4294967295,LAYER_SCREEN_MENU=2147483648,LAYER_SCREEN_RESULT=2147483648,LAYER_SCREEN_SETTINGS=2147483648;var SHOP_SHADOWS_ENABLED=!1,SHOP_SHADOW_RES=1024;const SHOP_USE_ADT_LABEL=!0,SHOP_OUTLINES_ENABLED=!1;var POPUP_TRANSITION_DURATION=400,SCENE_TRANSITION_DURATION=250;const DEBUG_COLLISIONS=!1,TIME_TO_SHOW_SOLD_PRODUCTS=2E5,TIME_TO_HELP=1E5,TIME_TO_OFFER=6E4,MAX_MONEY_ON_REGISTER=100,PLAYER_MOVE_THRESHOLD=.15,PLAYER_BAD_MOOD_TIME=45E3,TOMATO_TIME_TO_GROW=1E3,TOMATO_SELL_PRICE=1,CHICKEN_EAT_TIME=1500,EGG_SELL_PRICE=3,COW_EAT_TIME=3E3,MILK_SELL_PRICE=3,WHEAT_TIME_TO_GROW=200,WHEAT_SELL_PRICE=2,CARROT_TIME_TO_GROW=2E3,CARROT_SELL_PRICE=2,KETCHUP_PRODUCE_TIME=4E3,KETCHUP_SELL_PRICE=4,SAUCE_PRODUCE_TIME=4E3,SAUCE_SELL_PRICE=4,FLOUR_PRODUCE_TIME=4E3,FLOUR_SELL_PRICE=
4,BREAD_PRODUCE_TIME=4E3,BREAD_SELL_PRICE=5,MOZZARELLA_PRODUCE_TIME=8E3,MOZZARELLA_SELL_PRICE=10,PLAYER_UPGRADE_PRICES=[0,50,150,250,350,425,550,700,850,999];
function GetItemSellPrice(b){var e=b;b.hasOwnProperty("itemType")&&(e=b.itemType);return"tomato"==e?TOMATO_SELL_PRICE:"egg"==e?EGG_SELL_PRICE:"wheat"==e?WHEAT_SELL_PRICE:"carrot"==e?CARROT_SELL_PRICE:"ketchup"==e?KETCHUP_SELL_PRICE:"sauce"==e?SAUCE_SELL_PRICE:"milk"==e?MILK_SELL_PRICE:"flour"==e?FLOUR_SELL_PRICE:"bread"==e?BREAD_SELL_PRICE:"mozzarella"==e?MOZZARELLA_SELL_PRICE:1}
function GetItemsToBuy(b){var e=[{min:1,max:3},{min:1,max:3},{min:2,max:4},{min:2,max:4},{min:3,max:6},{min:4,max:7},{min:5,max:8},{min:6,max:9},{min:7,max:10},{min:8,max:11},{min:9,max:12}];if("number"!==typeof b||0>b||b>=e.length)b=0;b=e[b];e=b.min;e=Math.floor(Math.random()*(b.max-e+1))+e;b.items=Shop.instance.availableItemTypes.slice();var h=[],f;for(f=0;f<e;f+=1){var k=b.items[Math.floor(Math.random()*b.items.length)];if("bread"==k&&0<=h.indexOf(k)){do k=b.items[Math.floor(Math.random()*b.items.length)];
while("bread"==k)}h.push(k)}return h}const UNLOCK_LEVEL_START=0,UNLOCK_LEVEL_CHICKEN=1,UNLOCK_LEVEL_WHEAT=2,UNLOCK_LEVEL_CARROT=3,UNLOCK_LEVEL_COW=4,UNLOCK_LEVEL_KETCHUP=5,UNLOCK_LEVEL_FLOUR=6,UNLOCK_LEVEL_SAUCE=7,UNLOCK_LEVEL_BREAD=8,UNLOCK_LEVEL_MOZARELLA=9,UNLOCK_LEVEL_BUTTER=10;var TimedOffers={incomeX2:{icon:"ic_income",time:180,price:1.3,ads:!0,title:"INCOME",type:"income",dueTime:null},capacityX2:{icon:"ic_capacity",time:120,price:1.35,ads:!0,title:"CARRY_CAPACITY",type:"capacity",dueTime:null},speedX2:{icon:"ic_speed",time:120,price:1.4,ads:!0,title:"PLAYER_SPEED",type:"speed",dueTime:null},customersX2:{icon:"ic_customers",time:120,price:1.45,ads:!0,title:"CUSTOMERS",type:"customers",dueTime:null},machinesX2:{icon:"ic_machines",time:120,price:1.5,ads:!0,title:"MACHINES_SPEED",
type:"machines",level:5,dueTime:null}};function ResetTimedOffers(){for(var b in TimedOffers)TimedOffers[b].dueTime=null}var ActiveOfferTypes=[];function UpdateTimedOffer(b){if(null==b.dueTime)return-1;diff=b.dueTime-GlobalDate.getTime();b.perc=diff/1E3/b.time;0>diff&&(b.perc=0,b.dueTime=null);ActiveOfferTypes.push(b.type);return diff}
function GetUnlockLevelPrice(){var b=0;Shop.instance&&(b=Shop.instance.unlockLevel);return b==UNLOCK_LEVEL_CHICKEN?150:b==UNLOCK_LEVEL_WHEAT?185:b==UNLOCK_LEVEL_CARROT?265:b==UNLOCK_LEVEL_KETCHUP?375:b==UNLOCK_LEVEL_FLOUR?450:b==UNLOCK_LEVEL_SAUCE?525:b==UNLOCK_LEVEL_BREAD?600:b==UNLOCK_LEVEL_MOZARELLA?675:b==UNLOCK_LEVEL_BUTTER?750:75}
const OffersSpots=[{level:UNLOCK_LEVEL_CHICKEN,offer:"customers",x:9,y:5},{level:UNLOCK_LEVEL_CHICKEN,offer:"capacity",x:12,y:22},{item:"TomatoPlant2",offer:"income",x:21,y:10},{level:UNLOCK_LEVEL_WHEAT,offer:"speed",x:22,y:18},{level:UNLOCK_LEVEL_KETCHUP,offer:"machines",x:39,y:17},{level:UNLOCK_LEVEL_SAUCE,offer:"income",x:53,y:11},{level:UNLOCK_LEVEL_COW,offer:"speed",x:50,y:29},{level:UNLOCK_LEVEL_COW,offer:"capacity",x:54,y:44},{item:"Register3",offer:"customers",x:59,y:5}],HelpSpots=[{item:"TomatoPlant2",
offer:"help",x:8,y:9},{item:"TomatoShelf2",offer:"help",x:10,y:20},{item:"WheatShelf1",offer:"help",x:22,y:23},{level:UNLOCK_LEVEL_CARROT,offer:"help",x:31,y:23},{level:UNLOCK_LEVEL_COW,offer:"help",x:43,y:24},{item:"Register3",offer:"help",x:55,y:24}];var Languages=function(b){if(null!=Languages.instance)return Languages.instance;Languages.instance=this;Languages.instance.language="en";this.gameTextsParsed=null;this.xml=b;this.gameTextsLists=[];b=this.xml.getElementsByTagName("string");for(var e=0;e<b.length;e++){null==this.gameTextsLists[b.item(e).getAttribute("id")]&&(this.gameTextsLists[b.item(e).getAttribute("id")]=[]);for(var h=0;h<LANGUAGES.length;h++)0<b.item(e).getElementsByTagName(LANGUAGES[h]).length&&(this.gameTextsLists[b.item(e).getAttribute("id")][LANGUAGES[h]]=
b.item(e).getElementsByTagName(LANGUAGES[h])[0].textContent.replace(/\\n/g,"\n"))}},LANGUAGES="en de es fr it pt ru".split(" "),LANGUAGE_NAMES=[];LANGUAGE_NAMES.en="ENGLISH";LANGUAGE_NAMES.de="DEUTSCH";LANGUAGE_NAMES.es="ESPA\u00d1OL";LANGUAGE_NAMES.fr="FRAN\u00c7AIS";LANGUAGE_NAMES.it="ITALIANO";LANGUAGE_NAMES.pt="PORTUGU\u00caS";LANGUAGE_NAMES.ru="\u0420\u0423\u0421\u0421\u041a\u0418\u0419";Languages.instance=null;Languages.prototype={};
function Str(b){return void 0==Languages.instance.gameTextsLists[b]||void 0==Languages.instance.gameTextsLists[b][Languages.instance.language]?(console.warn("STR("+b+") MISSING!"),"NAN"):Languages.instance.gameTextsLists[b][Languages.instance.language].replaceAll("\\n","\n")}function STR(b){return Str(b).toUpperCase()}
function EXPORT_LANGS(){for(textId in Languages.instance.gameTextsLists){for(var b=textId,e=0;e<LANGUAGES.length;e++)b=b+";"+Languages.instance.gameTextsLists[textId][LANGUAGES[e]];LOG(b)}}function UpdateDocumentTitle(){var b=GameData.BuildTitle;"ru"==Languages.instance.language&&(b=GameData.BuildTitleRU);document.title=b};var runningOnMobile=!1,runningOnIPHONE=!1,Resolution={PLANED_HEIGHT:900,HEIGHT:500,WIDTH:600,CORRECTION_MUL:1,get SCALE(){return Resolution.WIDTH/Resolution.PLANED_HEIGHT*Resolution.CORRECTION_MUL},getResolutionSize:function(){var b=engine.getRenderWidth(),e=engine.getRenderHeight();return b>e?e:b}};
function setGameResolutionByQuality(){runningOnMobile?(0==GameQuality&&(Resolution.HEIGHT=Resolution.WIDTH=650),1==GameQuality&&(Resolution.HEIGHT=Resolution.WIDTH=400)):(0==GameQuality&&(Resolution.HEIGHT=Resolution.WIDTH=800),1==GameQuality&&(Resolution.HEIGHT=Resolution.WIDTH=600))};var GameData=function(){};GameData.BuildTitle="My Tiny Market";GameData.BuildTitleRU="\u041c\u043e\u044f \u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u041b\u0430\u0432\u043a\u0430";GameData.BuildVersion="1.0.0";GameData.BuildString="28.08.2025 17:19";GameData.Copyright="Inlogic Games 2025";GameData.ProfileName="inl-minmart-3d";
console.info("%c %c   "+GameData.Copyright+" | "+GameData.BuildTitle+" v"+GameData.BuildVersion+" | "+GameData.BuildString+"  %c ","background:#353AFB","background:#000080;color:#fff","background:#353AFB");var DataVersion=.205,PlayerCash=0,SkinInventory=[],PlayerSkin=1,SavedGame=null,SavedSoundVolume=100,SavedMusicVolume=100,GameQuality=0,OnboardingStep=0,SoundVolume=1,MusicVolume=.5,GameFinished=!1;const ONBOARDING_FINISHED=100;
GameData.Reset=function(){SelectedLanguage=null;PlayerCash=10;SkinInventory=["player_01"];PlayerSkin="player_01";SavedGame=null;OnboardingStep=GameQuality=0;GameFinished=!1};
GameData.Load=function(){GameData.Reset();var b=getUrlParameterByName("reset");null!=b&&"true"===b.toLowerCase()&&GameData.Save();b=null;try{b=JSON.parse(GameSnacks.storage.getItem(GameData.ProfileName))}catch(e){}try{b.DataVersion!=DataVersion?GameData.Save():(SelectedLanguage=b.SelectedLanguage,PlayerCash=b.PlayerCash,SkinInventory=b.SkinInventory,PlayerSkin=b.PlayerSkin,TimedOffers=b.TimedOffers,SavedGame=b.SavedGame,SavedSoundVolume=b.SavedSoundVolume,SavedMusicVolume=b.SavedMusicVolume,GameQuality=
b.GameQuality,OnboardingStep=b.OnboardingStep,SoundVolume=b.SoundVolume,MusicVolume=b.MusicVolume,GameFinished=b.GameFinished)}catch(e){GameData.Reset()}null!=SelectedLanguage&&(Languages.instance.language=SelectedLanguage,activeScene.updateTexts());OverrideLangFromURL();UpdateDocumentTitle();gameConfig.cheatVersion&&(PlayerCash=1E5)};
GameData.Save=function(){var b={};b.DataVersion=DataVersion;b.SelectedLanguage=SelectedLanguage;b.PlayerCash=PlayerCash;b.SkinInventory=SkinInventory;b.PlayerSkin=PlayerSkin;b.TimedOffers=TimedOffers;b.SavedGame=SavedGame;b.SavedSoundVolume=SavedSoundVolume;b.SavedMusicVolume=SavedMusicVolume;b.GameQuality=GameQuality;b.OnboardingStep=OnboardingStep;b.SoundVolume=SoundVolume;b.MusicVolume=MusicVolume;b.GameFinished=GameFinished;try{GameSnacks.storage.setItem(GameData.ProfileName,JSON.stringify(b))}catch(e){}};
function OverrideLangFromURL(){var b=getUrlParameterByName("lang");null!==b&&("en"==b&&(Languages.instance.language="en"),"de"==b&&(Languages.instance.language="de"),"es"==b&&(Languages.instance.language="es"),"fr"==b&&(Languages.instance.language="fr"),"it"==b&&(Languages.instance.language="it"),"br"==b&&(Languages.instance.language="pt"),"pt"==b&&(Languages.instance.language="pt"),"ru"==b&&(Languages.instance.language="ru"),activeScene.updateTexts())};function createShopBlueprint(){Shop.instance.createRegister(15,5,FACING_DOWN).name="CashRegister1";CreateShelves();CreateShopProducers()}
function CreateShelves(){var b=Shop.instance.createTomatoShelf(16,16,FACING_DOWN);b.name="TomatoShelf1";b=Shop.instance.createTomatoShelf(16,22,FACING_DOWN);b.name="TomatoShelf2";Shop.instance.createFlourShelf(38,3,FACING_DOWN);Shop.instance.createEggShelf(7,16,FACING_DOWN);Shop.instance.createEggShelf(7,22,FACING_DOWN);b=Shop.instance.createWheatShelf(26,22,FACING_DOWN);b.name="WheatShelf1";b=Shop.instance.createCarrotShelf(35,23,FACING_DOWN);b.name="CarrotShelf";b=Shop.instance.createMilkShelf(26,
3,FACING_DOWN);b.name="MilkFridge1";b=Shop.instance.createKetchupShelf(32,3,FACING_DOWN);b.name="KetchupShelf";b=Shop.instance.createSauceShelf(24,13,FACING_DOWN);b.name="SauceShelf";b=Shop.instance.createBreadShelf(44,3,FACING_DOWN);b.name="SauceShelf";b=Shop.instance.createMozzarellaShelf(64,7,FACING_DOWN);b.name="MozzarelaShelf";b=Shop.instance.createButterShelf(68,15,FACING_DOWN);b.name="ButterShelf"}function CreateShopProducers(){CreateTomatoFields();CreateWheatFields()}
function CreateTomatoFields(){var b=Shop.instance.createTomatoField(pos_tomato1[0]+0*gap_tomato[0]+2,pos_tomato1[1]+0*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant1";b=Shop.instance.createTomatoField(pos_tomato1[0]+0*gap_tomato[0]+2,pos_tomato1[1]+1*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant2";b=Shop.instance.createTomatoField(pos_tomato1[0]+1*gap_tomato[0]+2,pos_tomato1[1]+0*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant3";b=Shop.instance.createTomatoField(pos_tomato1[0]+1*gap_tomato[0]+2,pos_tomato1[1]+
1*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant4";b=Shop.instance.createTomatoField(pos_tomato1[0]+0*gap_tomato[0]+2,pos_tomato1[1]+2*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant5";b=Shop.instance.createTomatoField(pos_tomato1[0]+0*gap_tomato[0]+2,pos_tomato1[1]+3*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant6";b=Shop.instance.createTomatoField(pos_tomato1[0]+1*gap_tomato[0]+2,pos_tomato1[1]+2*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant7";b=Shop.instance.createTomatoField(pos_tomato1[0]+1*
gap_tomato[0]+2,pos_tomato1[1]+3*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant8";b=Shop.instance.createTomatoField(pos_tomato1[0]+0*gap_tomato[0]+2,pos_tomato1[1]+4*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant9";b=Shop.instance.createTomatoField(pos_tomato1[0]+0*gap_tomato[0]+2,pos_tomato1[1]+5*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant10";b=Shop.instance.createTomatoField(pos_tomato1[0]+1*gap_tomato[0]+2,pos_tomato1[1]+4*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant11";b=Shop.instance.createTomatoField(pos_tomato1[0]+
1*gap_tomato[0]+2,pos_tomato1[1]+5*gap_tomato[1],FACING_DOWN);b.name="TomatoPlant12"}function CreateWheatFields(){for(var b=0;3>b;b++)for(var e=0;4>e;e++){var h=e*b+1;Shop.instance.createWheatField(pos_wheat1[0]+gap_wheat[0]*b,pos_wheat1[1]+gap_wheat[1]*e,FACING_DOWN).name="WheatField"+h}};const SkinItems=[];SkinItems.push({icon:"player_01.png",skin:"player_01",price:0});SkinItems.push({icon:"player_02.png",skin:"player_02",price:100});SkinItems.push({icon:"player_03.png",skin:"player_03",price:150});SkinItems.push({icon:"player_04.png",skin:"player_04",price:200});SkinItems.push({icon:"player_05.png",skin:"player_05",price:250});SkinItems.push({icon:"player_06.png",skin:"player_06",price:300});SkinItems.push({icon:"player_07.png",skin:"player_07",price:350});
SkinItems.push({icon:"player_08.png",skin:"player_08",price:400});SkinItems.push({icon:"player_09.png",skin:"player_09",price:450});SkinItems.push({icon:"player_10.png",skin:"player_10",price:500});SkinItems.push({icon:"player_11.png",skin:"player_11",price:550});SkinItems.push({icon:"player_12.png",skin:"player_12",price:600});const SplashAssets=[{root:"assets/dat/",file:"m.isr",type:"xml"},{root:"assets/imgs/",file:"main_bg.jpg",type:"image"},{root:"assets/imgs/",file:"logo_big.png",type:"image"},{root:"assets/imgs/",file:"splashp.jpg",type:"image"},{root:"assets/imgs/",file:"splashl.jpg",type:"image"},{root:"assets/imgs/",file:"gametitle_en.png",type:"image"},{root:"assets/imgs/",file:"gametitle_ru.png",type:"image"}],GameAssets=[{root:"assets/imgs/",file:"pak1.json",type:"json"},{root:"assets/imgs/",file:"pak1.png",
type:"image"},{root:"assets/imgs/",file:"win_bg.jpg",type:"image"},{root:"assets/models/textures/",file:"navigation_arrow.png",type:"texture"},{root:"assets/models/textures/",file:"player_01.png",type:"texture"},{root:"assets/models/textures/",file:"player_02.png",type:"texture"},{root:"assets/models/textures/",file:"player_03.png",type:"texture"},{root:"assets/models/textures/",file:"player_04.png",type:"texture"},{root:"assets/models/textures/",file:"player_05.png",type:"texture"},{root:"assets/models/textures/",
file:"player_06.png",type:"texture"},{root:"assets/models/textures/",file:"player_07.png",type:"texture"},{root:"assets/models/textures/",file:"player_08.png",type:"texture"},{root:"assets/models/textures/",file:"player_09.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe01.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe02.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe03.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe04.png",
type:"texture"},{root:"assets/models/textures/",file:"playershoe05.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe06.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe07.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe08.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe09.png",type:"texture"},{root:"assets/models/textures/",file:"playercap01.png",type:"texture"},{root:"assets/models/textures/",file:"playercap02.png",
type:"texture"},{root:"assets/models/textures/",file:"playercap03.png",type:"texture"},{root:"assets/models/textures/",file:"playercap04.png",type:"texture"},{root:"assets/models/textures/",file:"playercap05.png",type:"texture"},{root:"assets/models/textures/",file:"playercap06.png",type:"texture"},{root:"assets/models/textures/",file:"playercap07.png",type:"texture"},{root:"assets/models/textures/",file:"playercap08.png",type:"texture"},{root:"assets/models/textures/",file:"playercap09.png",type:"texture"},
{root:"assets/models/textures/",file:"grass_01.png",type:"texture"},{root:"assets/models/textures/",file:"floor_01.png",type:"texture"},{root:"assets/models/textures/",file:"playercap01.png",type:"texture"},{root:"assets/models/textures/",file:"playercap02.png",type:"texture"},{root:"assets/models/textures/",file:"playercap03.png",type:"texture"},{root:"assets/models/textures/",file:"playercap04.png",type:"texture"},{root:"assets/models/textures/",file:"playercap05.png",type:"texture"},{root:"assets/models/textures/",
file:"playercap06.png",type:"texture"},{root:"assets/models/textures/",file:"playercap07.png",type:"texture"},{root:"assets/models/textures/",file:"playercap08.png",type:"texture"},{root:"assets/models/textures/",file:"playercap09.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe01.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe02.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe03.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe04.png",
type:"texture"},{root:"assets/models/textures/",file:"playershoe05.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe06.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe07.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe08.png",type:"texture"},{root:"assets/models/textures/",file:"playershoe09.png",type:"texture"},{root:"assets/models/textures/",file:"player_01.png",type:"texture"},{root:"assets/models/textures/",file:"player_02.png",type:"texture"},
{root:"assets/models/textures/",file:"player_03.png",type:"texture"},{root:"assets/models/textures/",file:"player_04.png",type:"texture"},{root:"assets/models/textures/",file:"player_05.png",type:"texture"},{root:"assets/models/textures/",file:"player_06.png",type:"texture"},{root:"assets/models/textures/",file:"player_07.png",type:"texture"},{root:"assets/models/textures/",file:"player_08.png",type:"texture"},{root:"assets/models/",file:"exterior.glb",type:"model"},{root:"assets/models/",file:"man.glb",
type:"model"},{root:"assets/models/",file:"man_skins.glb",type:"model"},{root:"assets/models/",file:"customer.glb",type:"model"},{root:"assets/models/",file:"spawns.glb",type:"model"},{root:"assets/models/",file:"entrance.glb",type:"model"},{root:"assets/models/",file:"wall.glb",type:"model"},{root:"assets/models/",file:"atm.glb",type:"model"},{root:"assets/models/",file:"products.glb",type:"model"},{root:"assets/models/",file:"shelves.glb",type:"model"},{root:"assets/models/",file:"machines.glb",
type:"model"},{root:"assets/models/",file:"machines_ic.glb",type:"model"},{root:"assets/models/",file:"animals.glb",type:"model"},{root:"assets/audio/",file:"pop.mp3",type:"audio"},{root:"assets/audio/",file:"completed_1.mp3",type:"audio"},{root:"assets/audio/",file:"completed_2.mp3",type:"audio"},{root:"assets/audio/",file:"completed_3.mp3",type:"audio"},{root:"assets/audio/",file:"button.mp3",type:"audio"},{root:"assets/audio/",file:"buy.mp3",type:"audio"},{root:"assets/audio/",file:"coin.mp3",
type:"audio"},{root:"assets/audio/",file:"unlocked.mp3",type:"audio"},{root:"assets/audio/",file:"music_ingame.mp3",type:"audio"},{root:"assets/audio/",file:"negative_buy.mp3",type:"audio"},{root:"assets/audio/",file:"spending.mp3",type:"audio"},{root:"assets/audio/",file:"farmer.mp3",type:"audio"},{root:"assets/audio/",file:"assistant.mp3",type:"audio"},{root:"assets/audio/",file:"cashier.mp3",type:"audio"},{root:"assets/audio/",file:"chef.mp3",type:"audio"},{root:"assets/audio/",file:"kaching.mp3",
type:"audio"},{root:"assets/audio/",file:"chicken.mp3",type:"audio"},{root:"assets/audio/",file:"cow.mp3",type:"audio"},{root:"assets/audio/",file:"furniture.mp3",type:"audio"},{root:"assets/audio/",file:"plant.mp3",type:"audio"},{root:"assets/audio/",file:"machine.mp3",type:"audio"},{root:"assets/audio/",file:"upgrade.mp3",type:"audio"},{root:"assets/audio/",file:"ending.mp3",type:"audio"},{root:"assets/audio/",file:"grab_item.mp3",type:"audio"},{root:"assets/audio/",file:"place_item.mp3",type:"audio"}];
function ModelMaterialHasAlpha(b){return"spawns.glb"==b};var ADS_MOBILE_WIDTH=480,ADS_MOBILE_HEIGHT=800,adinplay_onAdStarted=function(){},adinplay_onAdFinished=function(){};
function adinplay_init(){if(adsConfig.enabled&&"undefined"!==typeof aiptag){var b="mytinymarket_html_portal_sk",e=getJsonFromUrl();e.hasOwnProperty("partner_id")&&(b=e.partner_id);aiptag=aiptag||{};aiptag.cmd=aiptag.cmd||[];aiptag.cmd.display=aiptag.cmd.display||[];aiptag.cmd.player=aiptag.cmd.player||[];aiptag.subid=b;aiptag.consented=!0;aiptag.cmp={show:!0,position:"centered",button:!0,buttonText:"Privacy settings",buttonPosition:"bottom-left"};aiptag.cmd.player.push(function(){var h=engine.getRenderWidth(),
f=engine.getRenderHeight();runningOnMobile&&(h=ADS_MOBILE_WIDTH,f=ADS_MOBILE_HEIGHT);adplayer=new aipPlayer({AD_WIDTH:h,AD_HEIGHT:f,AD_FULLSCREEN:1,AD_CENTERPLAYER:0,AD_FADING:0,AD_DISPLAY:"fullscreen",LOADING_TEXT:"loading advertisement",PREROLL_ELEM:function(){return document.getElementById("ads")},AIP_COMPLETE:function(){inlHelper.game.setMute(!1);inlHelper.game.setInput(!0);adinplay_onAdStarted();inlHelper.game.resumeGame()},AIP_REMOVE:function(){adinplay_onAdFinished()},AIP_REWARDEDCOMPLETE:function(k){console.info("Rewarded Ad Completed: "+
k);inlHelper.game.setMute(!1);inlHelper.game.setInput(!0);adinplay_rew_callbacks[1].call(adinplay_rew_callbacks[2])},AIP_REWARDEDGRANTED:function(){console.info("Reward Granted");inlHelper.game.setMute(!1);inlHelper.game.setInput(!0);inlHelper.game.resumeGame();adinplay_rew_callbacks[0].call(adinplay_rew_callbacks[2])}})})}}
function adinplay_playVideoAd(){adsConfig.enabled?"undefined"===typeof aiptag?(adinplay_init(),inlHelper.game.setInput(!0),adinplay_onAdStarted()):"undefined"===typeof adplayer?(adinplay_init(),inlHelper.game.setInput(!0),adinplay_onAdStarted()):(inlHelper.game.setInput&&inlHelper.game.setInput(!1),inlHelper.game.setMute&&inlHelper.game.setMute(!0),setTimeout(function(){inlHelper.game.pauseGame&&inlHelper.game.pauseGame()},300),aiptag.cmd.player.push(function(){adplayer.startPreRoll()})):(inlHelper.game.setInput(!0),
adinplay_onAdStarted())}function getJsonFromUrl(){for(var b={},e=location.search.substr(1).split("&"),h=0;h<e.length;h++){var f=e[h].indexOf("=");f=[e[h].substring(0,f),e[h].substring(f+1)];b[f[0]]=decodeURIComponent(f[1])}return b}var adinplay_rew_callbacks=[];
function adinplay_playRewardedVideo(b,e,h){adinplay_rew_callbacks[0]=b;adinplay_rew_callbacks[1]=e;adinplay_rew_callbacks[2]=h;adsConfig.enabled?"undefined"===typeof aiptag?(adinplay_init(),inlHelper.game.setInput(!0),e.call(h)):"undefined"===typeof adplayer?(adinplay_init(),inlHelper.game.setInput(!0),e.call(h)):(inlHelper.game.setInput(!1),inlHelper.game.setMute(!0),inlHelper.game.pauseGame(),aiptag.cmd.player.push(function(){adplayer.startRewardedAd({preload:!1,showLoading:!0})})):(inlHelper.game.setInput(!0),
e.call(h))}function adinplay_rewardedPreload(){adsConfig.enabled&&("undefined"===typeof aiptag?adinplay_init():"undefined"===typeof adplayer?adinplay_init():(!0!==aipAPItag.rewardedSlotEventListener&&(aipAPItag.rewardedSlotEventListener=!0,aiptag.events.addEventListener("rewardedSlotReady",function(b){},!1)),aiptag.cmd.player.push(function(){adplayer.startRewardedAd({preload:!0,showLoading:!1})})))};function LOG(b){}function getRandomUInt(b){return Math.floor(Math.random()*b)}function getRandomUIntWithSeed(b,e){return Math.floor(randomWithSeed(e)*b)}function getRandomInt(b){return Math.floor(Math.random()*b)*(50<getRandomUInt(10)?-1:1)}function getRandomIntWithSeed(b,e){return getRandomUIntWithSeed(b,e)*(50<getRandomUIntWithSeed(100,Math.pow(e,2))?-1:1)}function getRandomUIntInRange(b,e){return Math.floor(Math.random()*(e-b+1))+b}
function getRandomUIntInRangeWithSeed(b,e,h){return Math.floor(randomWithSeed(h)*(e-b+1))+b}function getRandomIntInRange(b,e){if(!Number.isInteger(b)||!Number.isInteger(e)||e<=b)throw Error("Both min and max should be integers with max > min.");return getRandomInt(e-b)+b}function isNumber(b){return Number(b)===b}function lerp(b,e,h){return(1-h)*b+h*e}function RadToDeg(b){return 180/Math.PI*b}function DegToRad(b){return Math.PI/180*b}String.prototype.replaceAll=function(b,e){return this.split(b).join(e)};
Array.prototype.remove=function(b){return-1!=this.indexOf(b)?(this.splice(this.indexOf(b),1),!0):!1};function cloneObject(b){if(null==b||"object"!=typeof b)return b;var e=b.constructor(),h;for(h in b)b.hasOwnProperty(h)&&(e[h]=b[h]);return e}function isUpperCase(b){return b==b.toUpperCase()}function isLowerCase(b){return b==b.toLowerCase()}function shuffleArray(b){for(var e=b.length,h,f;0!==e;)f=Math.floor(Math.random()*e),--e,h=b[e],b[e]=b[f],b[f]=h;return b}
function shuffleArrayWithSeed(b,e){for(var h=b.length,f,k;h;)k=Math.floor(randomWithSeed(e)*h--),f=b[h],b[h]=b[k],b[k]=f,++e;return b}function randomWithSeed(b){b=1E4*Math.sin(b++);return b-Math.floor(b)}function findStringInArray(b,e){for(var h=0;h<e.length;h++)if(e[h].match(b))return h;return-1}function fetchFromObject(b,e){if("undefined"===typeof b)return!1;var h=e.indexOf(".");return-1<h?fetchFromObject(b[e.substring(0,h)],e.substr(h+1)):b[e]}
function SetImageFromSpritesheet(b,e,h,f){if(b.domImage==e&&b.frameName==f)return!0;h=GetFrameByName(h,f);if(null==h)return console.error("SetImageFromSpritesheet > frame not found ! [ "+f+" ]"),!1;b.domImage=e;b.sourceLeft=h.frame.x;b.sourceTop=h.frame.y;b.sourceWidth=h.frame.w;b.sourceHeight=h.frame.h;b.widthInPixels=h.frame.w;b.heightInPixels=h.frame.h;b.imageWidth=h.frame.w;b.imageHeight=h.frame.h;b.frameName=f;return!0}
function SetTextureFromSpritesheet(b,e,h){e=GetFrameByName(e,h);if(null==e)return console.error("SetTextureFromSpritesheet > frame not found ! [ "+h+" ]"),!1;h=b._texture.baseWidth;var f=b._texture.baseHeight;b.uOffset=e.frame.x/h;b.vOffset=1-e.frame.y/f;b.uScale=e.frame.w/h;b.vScale=-e.frame.h/f;return!0}
function createDialogImage(b,e,h,f,k,m,n,y,x,w){var v=new BABYLON.GUI.Image,r=getAssetImage(b);b=getAssetImageFrames(b);v.domImage=r;SetImageFromSpritesheet(v,r,b,e);v.widthInPixels=h;v.heightInPixels=f;v.sliceLeft=w;v.sliceTop=n;v.sliceBottom=m-x;v.sliceRight=k-y;v.stretch=BABYLON.GUI.Image.STRETCH_NINE_PATCH;return v}
function GetTextureFaceVectorFromSpritesheet(b,e,h){e=GetFrameByName(e,h);if(null==e)return console.error("GetTextureFaceVectorFromSpritesheet > frame not found ! [ "+h+" ]"),!1;h=b.width;b=b.height;return new BABYLON.Vector4(e.frame.x/h,1-(e.frame.y+e.frame.h)/b,(e.frame.x+e.frame.w)/h,1-e.frame.y/b)}
function autoResizeOrthographicCamera(b,e,h){Resolution.getResolutionSize();h=engine.getRenderHeight()/e;e=engine.getRenderWidth()/e;b.orthoBottom=-h;b.orthoTop=h;b.orthoLeft=-e;b.orthoRight=e;return{height:h,width:e}}function createDelayedFunction(b,e,h){h=new BABYLON.AdvancedTimer({contextObservable:activeScene.scene.onBeforeRenderObservable,userData:h});h.onTimerEndedObservable.add(e);h.start(b)}
function traverseFindChildNodeByName(b,e,h){void 0===h&&(h=null);if(b.name==e&&(null==h||h==b.getClassName()))return b;if(null!=b._children)for(var f=0;f<b._children.length;f++){var k=traverseFindChildNodeByName(b._children[f],e,h);if(null!=k)return k}return null}function getAllSumChildNodes(b,e,h){void 0===e&&(e=null);void 0===h&&(h=[]);null==e?h.push(b):e==b.getClassName()&&h.push(b);if(null!=b._children)for(var f=0;f<b._children.length;f++)getAllSumChildNodes(b._children[f],e,h);return h}
function getTextWidth(b,e,h,f){if(0<=e.indexOf("\n")){e=e.split("\n");for(var k=0,m=0;m<e.length;m++){var n=getTextWidth(b,e[m],h,f);k<n&&(k=n)}return k}b.font=f+"px "+h;return b.measureText(e).width}
function updateTextToWidth(b,e,h,f,k,m){void 0===k&&(k=Math.ceil(f/10));void 0===m&&(m=b.text);if(0<=m.indexOf("\n")){m=m.split("\n");for(var n=f,y=0;y<m.length;y++)updateTextToWidth(b,e,h,f,k,m[y]),n>b._fontSize._value&&(n=b._fontSize._value);b.fontSize=n+"px";return n}b.fontSize=f;e.font=f+"px "+b.fontFamily;for(n=e.measureText(m);n.width>h;)f-=k,e.font=f+"px "+b.fontFamily,n=e.measureText(m);return b.fontSize=f}
function updateTextToHeight(b,e,h,f,k,m){void 0===k&&(k=Math.ceil(f/10));void 0===m&&(m=b.text);var n=1;0<=m.indexOf("\n")&&(n=m.split("\n").length);b.fontSize=f;e.font=f+"px "+b.fontFamily;var y=e.measureText(m);for(y=(y.actualBoundingBoxAscent+y.actualBoundingBoxDescent)*n;y>h;)f-=k,e.font=f+"px "+b.fontFamily,y=e.measureText(m),y=(y.actualBoundingBoxAscent+y.actualBoundingBoxDescent)*n;b.fontSize=f}
function traverseSetAttrib(b,e,h){"Mesh"==b.getClassName()&&(b[e]=h);if(null!=b._children)for(var f=0;f<b._children.length;f++){var k=traverseSetAttrib(b._children[f],e,h);if(null!=k)return k}return null}function saveExternalFile(b,e){e=new Blob([e],{type:"text/plain;charset=utf-8"});saveAs(e,b)}function leadingZero(b,e){for(b=""+b;b.length<e;)b="0"+b;return b}
function calculatePixel(b,e,h){var f=new BABYLON.Vector3;h=h.getBoundingInfo().boundingBox.vectorsWorld;e=e.viewport.toGlobal(engine.getRenderWidth(),engine.getRenderHeight());for(var k=1E10,m=1E10,n=-1E10,y=-1E10,x=0;x<h.length;x++)BABYLON.Vector3.ProjectToRef(h[x],BABYLON.Matrix.IdentityReadOnly,b.getTransformMatrix(),e,f),k>f.x&&(k=f.x),n<f.x&&(n=f.x),m>f.y&&(m=f.y),y<f.y&&(y=f.y);return{x:n-k,y:y-m}}
function getUrlParameterByName(b,e){e=e||window.location.href;b=b.replace(/[\[\]]/g,"\\$&");return(b=(new RegExp("[?&]"+b+"(=([^&#]*)|&|#|$)")).exec(e))?b[2]?decodeURIComponent(b[2].replace(/\+/g," ")):"":null}
function spawnModel(b,e,h,f,k,m){e=e.toLowerCase();var n=AssetLoader.instance.instantiateModel(e+".glb",LAYER_SCREEN_GAME);n.rootNodes[0].model=e;void 0===h&&(h=null);void 0===f&&(f=null);void 0===k&&(k=null);void 0===m&&(m=null);null!==h&&(n.rootNodes[0].position=h.clone());null!==f&&(n.rootNodes[0].rotation=f.clone());null!==k&&(n.rootNodes[0].rotationQuaternion=k.clone());null!==m&&(n.rootNodes[0].scaling=m.clone());null!=b&&(n.rootNodes[0].parent=b);return n}
function spawnInstance(b,e,h){b=AssetLoader.instance.loadedContainers[b].rootNodes[0]._children[0].createInstance(e||b+"_"+BABYLON.RandomGUID());h&&b.position.copyFrom(h);return b}function lerpColor(b,e,h){var f=parseInt(b.replace(/#/g,""),16);b=f>>16;var k=f>>8&255;f&=255;e=parseInt(e.replace(/#/g,""),16);return"#"+(16777216+(b+h*((e>>16)-b)<<16)+(k+h*((e>>8&255)-k)<<8)+(f+h*((e&255)-f))|0).toString(16).slice(1)}
function EnableChildrenOutline(b,e,h,f){if(!SHOP_OUTLINES_ENABLED)return!1;b=traverseFindChildNodeByName(b,e);return null==b?(console.warn('EnableChildrenOutline cannot find child "'+e+'"'),!1):EnableMeshOutline(b,h,f)}function EnableMeshOutline(b,e,h){if(!SHOP_OUTLINES_ENABLED)return!1;void 0===e&&(e=.05);void 0===h&&(h=new BABYLON.Color3(0,0,0));b.renderOutline=!0;b.outlineWidth=e;b.outlineColor=h;return!0}
function EnableChildrenEdges(b,e,h,f){if(SHOP_OUTLINES_ENABLED){b=traverseFindChildNodeByName(b,e);if(null==b)return console.warn('EnableChildrenEdges cannot find child "'+e+'"'),!1;void 0===h&&(h=4);void 0===f&&(f=new BABYLON.Color4(0,0,0,1));b.edgesWidth=h;b.edgesColor=f;b.enableEdgesRendering(.2);return!0}}
function DrawStrokedTextOnContext(b,e,h,f,k){b.fillStyle="rgba(96, 108, 143, 0.01)";b.fillRect(0,0,128,64);b.font=e;b.strokeStyle="black";b.lineWidth=10;b.strokeText(k,h,f);b.fillStyle="white";b.fillText(k,h,f)}function SetUVMappingForPlane(b,e,h,f,k,m,n){const y=f/e,x=k/h;e=(f+m)/e;h=(k+n)/h;b.setVerticesData(BABYLON.VertexBuffer.UVKind,[y,h,e,h,e,x,y,x],!0)}
function DrawFrameToContext(b,e,h,f,k,m,n,y,x,w,v,r,z,K){n=void 0===n?null:n;y=void 0===y?null:y;x=void 0===x?null:x;w=void 0===w?null:w;v=void 0===v?null:v;r=void 0===r?null:r;z=void 0===z?null:z;K=void 0===K?null:K;const T=GetFrameByName(h,f);if(!T)return console.error("DrawFrameToDynamicTexture > frame not found ! [ "+f+" ]"),!1;f=T.frame.x;h=T.frame.y;let R;z=null!=(R=z)?R:T.frame.w;let L;K=null!=(L=K)?L:T.frame.h;let Q;n=null!=(Q=n)?Q:z;let U;y=null!=(U=y)?U:K;null!=v&&(f+=v);null!=r&&(h+=r);
null!=x&&(n=z*x);null!=w&&(y=K*w);b.drawImage(e,f,h,z,K,k,m,n,y);return!0}function DrawFrameToDynamicTexture(b,e,h,f,k,m,n,y,x,w,v,r,z,K){n=void 0===n?null:n;y=void 0===y?null:y;x=void 0===x?null:x;w=void 0===w?null:w;v=void 0===v?null:v;r=void 0===r?null:r;z=void 0===z?null:z;K=void 0===K?null:K;DrawFrameToContext(b.getContext(),e,h,f,k,m,n,y,x,w,v,r,z,K)}
function drawTextWithImage(b,e,h,f,k,m,n,y,x,w){x=void 0===x?10:x;w=void 0===w?"32px gamefont":w;const v=GetFrameByName(f,k);b.font=w;b.fontFamily="gamefont";b.strokeStyle="black";b.lineWidth=7;b.fillStyle="white";b.textBaseline="middle";const r=b.measureText(e).width;parseInt(w,10);n-=(r+x+v.frame.w*m)/2;DrawFrameToContext(b,h,f,k,n+r+x,y-v.frame.h*m/2,null,null,m,m);b.strokeText(e,n,y);b.fillText(e,n,y)};function arrayLineV(b,e,h,f){e=Math.round(e);h=Math.round(h);f=Math.round(f);var k=e<h?e:h;for(e=Math.abs(e-h);0<=e;e--)b.push([f,k+e])}function arrayLineH(b,e,h,f){e=Math.round(e);h=Math.round(h);f=Math.round(f);var k=e<h?e:h;for(e=Math.abs(e-h);0<=e;e--)b.push([k+e,f])}
function arrayLineDDA(b,e,h,f,k){e=Math.round(e);h=Math.round(h);f=Math.round(f);k=Math.round(k);var m=f-e,n=k-h,y;if(0===m)arrayLineV(b,h,k,e);else if(0===n)arrayLineH(b,e,f,h);else if(f=0>m?-1:1,k=0>n?-1:1,m=Math.abs(m),n=Math.abs(n),m>=n){var x=-m;b.push([e,h]);for(y=m;0<y;y--)e+=f,x+=2*n,0<=x&&(h+=k,x-=2*m),b.push([e,h])}else for(x=-n,b.push([e,h]),y=n;0<y;y--)h+=k,x+=2*m,0<=x&&(e+=f,x-=2*n),b.push([e,h])};var VisibilityHandler=function(b){};function customLoadingScreen(){LOG("customLoadingScreen creation")}customLoadingScreen.prototype.displayLoadingUI=function(){LOG("customLoadingScreen loading")};customLoadingScreen.prototype.hideLoadingUI=function(){LOG("customLoadingScreen loaded");window.document.getElementById("loadingScreen").style.display="none"};function createSliderControl(b,e,h,f,k,m){var n=new BABYLON.GUI.Rectangle("pnlSlider");n.transformCenterX=.5;n.transformCenterY=.5;n.isPointerBlocker=!0;n.isHitTestVisible=!0;n.clipContent=!1;n.clipChildren=!1;n.thickness=0;n.color="yellow";n.leftInPixels=e;n.topInPixels=h;n._value=0;n._minimum=0;n._maximum=100;n._sliding=!1;n._sliderGap=30;n.onValueChanged=function(y){};b.addControl(n);n.imgSliderBg=new BABYLON.GUI.Image("imgSliderBg");n.imgSliderBg.transformCenterX=.5;n.imgSliderBg.transformCenterY=
.5;n.imgSliderBg.isPointerBlocker=!1;n.imgSliderBg.isHitTestVisible=!1;n.addControl(n.imgSliderBg);SetImageFromSpritesheet(n.imgSliderBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),f);n.imgSliderFill=new BABYLON.GUI.Image("imgSliderFill");n.imgSliderFill.transformCenterX=0;n.imgSliderFill.transformCenterY=.5;n.imgSliderFill.isPointerBlocker=!1;n.imgSliderFill.isHitTestVisible=!1;n.imgSliderFill.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;n.addControl(n.imgSliderFill);SetImageFromSpritesheet(n.imgSliderFill,
getAssetImage("pak1"),getAssetImageFrames("pak1"),k);n.imgSliderFill.fullWidth=n.imgSliderFill.sourceWidth;n.imgSliderFill.leftInPixels=(n.imgSliderBg.sourceWidth-n.imgSliderFill.sourceWidth)/2+this._sliderGap;n.imgSlider=new BABYLON.GUI.Image("imgSlider");n.imgSlider.transformCenterX=1;n.imgSlider.transformCenterY=.5;n.imgSlider.isPointerBlocker=!1;n.imgSlider.isHitTestVisible=!1;n.imgSlider.alpha=1;n.imgSlider.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;n.addControl(n.imgSlider);
SetImageFromSpritesheet(n.imgSlider,getAssetImage("pak1"),getAssetImageFrames("pak1"),m);n.onPointerDownObservable.add(function(y,x){activeScene.inputEnabled&&(this._sliding=!0,x=x.currentTarget.transformedMeasure,this.value=this._minimum+(y.x-(x.left+this._sliderGap))/(x.width-2*this._sliderGap)*(this._maximum-this._minimum))}.bind(n));n.onPointerMoveObservable.add(function(y,x){activeScene.inputEnabled&&this._sliding&&(x=x.currentTarget.transformedMeasure,this.value=this._minimum+(y.x-(x.left+this._sliderGap))/
(x.width-2*this._sliderGap)*(this._maximum-this._minimum))}.bind(n));n.onPointerOutObservable.add(function(y,x){this._sliding&&(this._sliding=!1)}.bind(n));n.onPointerUpObservable.add(function(y,x){this._sliding&&(this._sliding=!1,GameData.Save())}.bind(n));n.widthInPixels=n.imgSliderBg.widthInPixels+2*n._sliderGap;n.heightInPixels=n.imgSliderBg.heightInPixels+2*n._sliderGap;Object.defineProperty(n,"value",{get:function(){return this._value},set:function(y){y<this._minimum&&(y=this._minimum);y>this._maximum&&
(y=this._maximum);this._value=y;var x=(this._value-this._minimum)/(this._maximum-this._minimum);this.imgSliderFill.sourceWidth=this.imgSliderFill.fullWidth*x;this.imgSliderFill.widthInPixels=this.imgSliderFill.fullWidth*x;this.imgSlider.leftInPixels=this.imgSliderFill.leftInPixels+this.imgSliderFill.widthInPixels-.5*this._sliderGap+this._sliderGap*x-this.imgSlider.widthInPixels*x;this.onValueChanged(y)},enumerable:!0,configurable:!0});Object.defineProperty(n,"sliderGap",{get:function(){return this._sliderGap},
set:function(y){this._sliderGap=y;this.widthInPixels=this.imgSliderBg.widthInPixels;this.heightInPixels=this.imgSliderBg.heightInPixels;this.imgSliderFill.leftInPixels=(this.imgSliderBg.sourceWidth-this.imgSliderFill.sourceWidth)/2},enumerable:!0,configurable:!0});return n};var FRAME_RATE=600,CommonAnimations={AnimateObjectProperty:function(b,e,h,f,k,m,n,y,x){void 0===k&&(k=null);void 0===m&&(m=1);void 0===n&&(n=!1);void 0===y&&(y=null);var w=new BABYLON.Animation("animateObjectProperty",e,FRAME_RATE,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);w.setKeys([{frame:0,value:fetchFromObject(b,e)},{frame:Math.floor(FRAME_RATE*f/1E3),value:h}]);if(null!=x){e=[];for(h=0;h<x.length;h++)e.push({frame:Math.floor(FRAME_RATE*f/1E3)*x[h][0],value:x[h][1]});
w.setKeys(e)}w.setEasingFunction(null);null!=k&&(k.hasOwnProperty("func")||(k={func:k}),k.hasOwnProperty("mode")||(k.mode=BABYLON.EasingFunction.EASINGMODE_EASEIN),e=x=null,k.hasOwnProperty("p1")&&(x=k.p1),k.hasOwnProperty("p2")&&(e=k.p2),x=new k.func(x,e),x.setEasingMode(k.mode),w.setEasingFunction(x));return activeScene.scene.beginDirectAnimation(b,[w],0,f,n,m,y)}};var Buttons={enabled:!0};function disableButton(b){b.isHitTestVisible=!1;b.isFocusInvisible=!0}function hideControl(b){b.isVisible=!1}function enableButton(b){b.isHitTestVisible=!0;b.isFocusInvisible=!1}function showControl(b){b.isVisible=!0}function GetFrameByName(b,e){for(var h=null,f=0;f<b.length;f++)b[f].filename==e&&(h=b[f],b[f].hasOwnProperty("usage")||(b[f].usage=0),b[f].usage++);return h}function ShowFramesUsage(b){for(var e=0;e<b.length;e++)b[e].hasOwnProperty("usage")}
function ResetGuiButtonAppearance(b,e,h){b.widthInPixels=e;b.heightInPixels=h;b.color="white";b.thickness=0;b.background="transparent"};function ContainerAssetTask(b,e,h,f){BABYLON.AbstractAssetTask.call(this,b);this.name=b;this.meshesNames=e;this.rootUrl=h;this.sceneFilename=f}ContainerAssetTask.prototype=Object.create(BABYLON.AbstractAssetTask.prototype);ContainerAssetTask.prototype.constructor=ContainerAssetTask;
ContainerAssetTask.prototype.runTask=function(b,e,h){var f=this;BABYLON.SceneLoader.LoadAssetContainer(this.rootUrl,this.sceneFilename,b,function(k){f.loadedContainer=k;f.loadedMeshes=k.meshes;f.loadedParticleSystems=k.particleSystems;f.loadedSkeletons=k.skeletons;f.loadedAnimationGroups=k.animationGroups;e()},null,function(k,m,n){h(m,n)})};BABYLON.AssetsManager.prototype.addContainerTask=function(b,e,h,f){b=new ContainerAssetTask(b,e,h,f);this._tasks.push(b);return b};
var AssetLoader=function(b){AssetLoader.instance=this;this.create(b)};AssetLoader.instance=null;
AssetLoader.prototype={create:function(b){this.callback={};this.onContainerLoaded=function(e){};this.assetsManager=new BABYLON.AssetsManager(b);this.assetsManager.useDefaultLoadingScreen=!1;this.assetsManager.autoHideLoadingUI=!1;this.assetsManager.addContainerTask=function(e,h,f,k){e=new ContainerAssetTask(e,h,f,k);this._tasks.push(e);return e};this.assetsManager.onProgress=function(e,h,f){onProgress(f.name,Math.round((h-e)/h*100))};this.loadedXMLs=[];this.loadedJSONs=[];this.loadedImages=[];this.loadedTextures=
[];this.loadedContainers=[];this.loadedSounds=[];ENGINE_USE_INSTANCES&&(this.modelsNode=new BABYLON.TransformNode("loadedModels"))},prepareAssetsTasks:function(b){for(var e=0;e<b.length;e++){var h=b[e].type;"xml"==h&&(this.assetsManager.addTextFileTask(b[e].file,b[e].root+b[e].file).onSuccess=function(f){var k=new DOMParser;this.loadedXMLs[f.name]=k.parseFromString(f.text,"application/xml")}.bind(this));"json"==h&&(this.assetsManager.addTextFileTask(b[e].file,b[e].root+b[e].file).onSuccess=function(f){this.loadedJSONs[f.name]=
JSON.parse(f.text)}.bind(this));"texture"==h&&(this.assetsManager.addTextureTask(b[e].file,b[e].root+b[e].file,!1,!1).onSuccess=function(f){this.loadedTextures[f.name]=f.texture}.bind(this));"image"==h&&(this.assetsManager.addImageTask(b[e].file,b[e].root+b[e].file).onSuccess=function(f){this.loadedImages[f.name]=f.image}.bind(this));"model"==h&&(this.assetsManager.addContainerTask(b[e].file,"",b[e].root,b[e].file).onSuccess=function(f){f.loadedContainer.rootNodes[0].name=f.name;this.loadedContainers[f.name]=
f.loadedContainer;this.loadedContainers[f.name.toLowerCase()]=f.loadedContainer;for(var k=0;k<f.loadedContainer.materials.length;k++)f.loadedContainer.materials[k]=updateMaterial(f.loadedContainer.materials[k],ModelMaterialHasAlpha(f.name))}.bind(this));"audio"==h&&(this.assetsManager.addBinaryFileTask(b[e].file,b[e].root+b[e].file).onSuccess=function(f){this.loadedSounds[f.name]=new BABYLON.Sound(f.name,f.data,activeScene.scene,function(){this.loadedSounds[f.name].stop()}.bind(this),{autoplay:!1})}.bind(this));
"skybox"==h&&(h=null,b[e].hasOwnProperty("extensions")&&(h=b[e].extensions),this.assetsManager.addCubeTextureTask(b[e].file,b[e].root+b[e].file,h).onSuccess=function(f){}.bind(this))}},loadFonts:function(b){void 0===b&&(b=null);var e=document.createElement("style");e.innerHTML="\n@font-face {\n    font-family: 'gamefont';\n    src: url('assets/fnt/gamefont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n"+document.head.appendChild(e);e=document.createElement("div");
e.innerHTML="<span style=\"font-family: 'gamefont', 'Arial Black', sans-serif, normal;\">PRELOAD</span>";document.body.appendChild(e);document.fonts.ready.then(function(){null!=b&&b()})},loadSplashAssets:function(b){this.callback=b;this.prepareAssetsTasks(SplashAssets);this.assetsManager.onFinish=function(e){this.assetsManager.reset();this.callback()}.bind(this);this.assetsManager.load()},loadGameAssets:function(b){this.callback=b;this.prepareAssetsTasks(GameAssets);this.assetsManager.onFinish=function(e){this.assetsManager.reset();
this.callback()}.bind(this);this.assetsManager.load()},instantiateModel:function(b,e){void 0===e&&(e=null);activeScene.unfreezeActiveMeshes();b=this.loadedContainers[b].instantiateModelsToScene(function(h){return h},!1,{doNotInstantiate:h=>!ENGINE_USE_INSTANCES});traverseSetAttrib(b.rootNodes[0],"isVisible",!0);traverseSetAttrib(b.rootNodes[0],"alwaysSelectAsActiveMesh",!0);traverseSetAttrib(b.rootNodes[0],"doNotSyncBoundingInfo",!0);null!=e&&traverseSetAttrib(b.rootNodes[0],"layerMask",e);activeScene.freezeActiveMeshes();
return b}};function updateMaterial(b,e){b.unfreeze();b.unlit=!0;b.emissiveColor=new BABYLON.Color3(0,0,0);b.backFaceCulling=!1;b.forceDepthWrite=!0;b.disableLighting=!0;e||(b.alphaMode=BABYLON.Engine.ALPHA_DISABLE,b.transparencyMode=BABYLON.Material.MATERIAL_OPAQUE,b.diffuseTexture&&(b.diffuseTexture.hasAlpha=!1));b.freeze();return b}
function getAssetImage(b){var e=b+".png";AssetLoader.instance.loadedImages.hasOwnProperty(e)||console.error("getAssetImage( "+b+") : image not found");return AssetLoader.instance.loadedImages[e]}function getAssetImageFrames(b){var e=b+".json";AssetLoader.instance.loadedJSONs.hasOwnProperty(e)||console.error("getAssetImageFrames( "+b+") : json not found");return AssetLoader.instance.loadedJSONs[e].frames};SoundManager=function(b){SoundManager.instance=this;this.scene=b;this.music=[];this.sounds=[];this.prevSoundPlayed=this.actualMusic=null;this.create()};SoundManager.instance=null;
SoundManager.prototype={constructor:SoundManager,create:function(){this.addSound("completed_1",.4);this.addSound("completed_2",.4);this.addSound("completed_3",.4);this.addSound("pop",.3);this.addSound("button",.1);this.addSound("buy",.6);this.addSound("coin",.7);this.addSound("unlocked",.5);this.addMusic("music_ingame",.5,!0);this.addSound("negative_buy",1);this.addSound("spending",.4);this.addSound("kaching",.4);this.addSound("farmer",.4);this.addSound("assistant",.4);this.addSound("cashier",.4);
this.addSound("chef",.4);this.addSound("chicken",.6);this.addSound("cow",.6);this.addSound("furniture",.6);this.addSound("plant",.6);this.addSound("machine",.6);this.addSound("upgrade",.6);this.addSound("ending",.6);this.addSound("grab_item",.2);this.addSound("place_item",.2)},addMusic:function(b,e,h){LOG("SoundManager.addMusic( "+b+" )");0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);void 0===h&&(h=!1);this.music[b]=AssetLoader.instance.loadedSounds[b];this.music[b].loop=h;this.music[b].VOLUME=
e;this.music[b].setVolume(this.music[b].VOLUME*MusicVolume)},addSound:function(b,e,h){LOG("SoundManager.addSound( "+b+" )");0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);void 0===h&&(h=!1);this.sounds[b]=AssetLoader.instance.loadedSounds[b];this.sounds[b].loop=h;this.sounds[b].VOLUME=e;this.sounds[b].setVolume(this.sounds[b].VOLUME*SoundVolume)},playMusic:function(b,e){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);void 0===e&&(e=!1);if(b!=this.actualMusic||
e)this.actualMusic=b;for(var h in this.music)if("contains"!=h&&"remove"!=h)if(h==this.actualMusic){if(this.music[h].isPlaying&&!e)break;this.music[h].play()}else this.music[h].stop()},playSound:function(b,e,h){LOG("playSound( "+b+" )");0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);void 0===e&&(e=null);void 0===h&&(h=null);try{this.sounds[b].setVolume(this.sounds[b].VOLUME*SoundVolume),null!=e&&this.sounds[b].setVolume(e*SoundVolume),null!=h&&this.sounds[b].setPlaybackRate(h),
this.sounds[b].play()}catch(f){console.error("[SoundManager] Failed to play sound : "+b)}},soundIsPlaying:function(b){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);return this.sounds[b].isPlaying},stopSound:function(b){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);try{this.sounds[b].stop()}catch(e){console.error("[SoundManager] Failed to stop sound : "+b)}},pauseMusic:function(b){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);try{this.music[b].isPlaying&&
this.music[b].pause()}catch(e){console.error("[SoundManager] Failed to pause music : "+b)}},pauseAllMusic:function(){for(var b in this.music)"contains"!=b&&"remove"!=b&&b==this.actualMusic&&this.pauseMusic(b)},resumeMusic:function(b){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);try{this.music[b].isPaused&&this.music[b].play()}catch(e){console.error("[SoundManager] Failed to resume music : "+b)}},resumeAllMusic:function(){for(var b in this.music)"contains"!=b&&"remove"!=b&&b==
this.actualMusic&&this.resumeMusic(b)},pauseSound:function(b){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);this.sounds[b].isPlaying&&this.sounds[b].pause()},pauseAllSounds:function(){for(var b in this.sounds)"contains"!=b&&"remove"!=b&&this.pauseSound(b)},resumeSound:function(b){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);this.sounds[b].isPaused&&this.sounds[b].play()},resumeAllSounds:function(){for(var b in this.sounds)"contains"!=b&&"remove"!=b&&this.resumeSound(b)},
stopMusic:function(b){0>b.indexOf(activeScene.audioType)&&(b+="."+activeScene.audioType);try{this.music[b].stop()}catch(e){console.error("[SoundManager] Failed to stop music : "+b)}},stopAllMusic:function(){for(var b in this.music)"contains"!=b&&"remove"!=b&&this.stopMusic(b)},setMusicVolume:function(b){MusicVolume=b;for(var e in this.music)"contains"!=e&&"remove"!=e&&this.music[e].setVolume(this.music[e].VOLUME*MusicVolume)},setSoundsVolume:function(b){SoundVolume=b;GameData.Save();for(var e in this.sounds)"contains"!=
e&&"remove"!=e&&this.sounds[e].setVolume(this.sounds[e].VOLUME*SoundVolume)}};var explosionSounds="single_hit_1 single_hit_2 single_hit_3 single_hit_4 single_hit_5 single_hit_6 single_hit_7 single_hit_8 single_hit_9 single_hit_10".split(" ");function playPinCollisionSound(){for(var b=[],e=0;e<explosionSounds.length;e++)SoundManager.instance.soundIsPlaying(explosionSounds[e])||b.push(explosionSounds[e]);0!=b.length&&(shuffleArray(b),SoundManager.instance.playSound(b[0]))};function fullscreenAvail(){return!1===gameConfig.fullscreenAllowed?!1:screenfull.isEnabled&&!1===IEdetection()}function fullscreenActive(){return screenfull.isFullscreen}function fullscreenToggle(){screenfull.toggle()};var __extends=this&&this.__extends||function(){var b=function(e,h){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,k){f.__proto__=k}||function(f,k){for(var m in k)k.hasOwnProperty(m)&&(f[m]=k[m])};return b(e,h)};return function(e,h){function f(){this.constructor=e}b(e,h);e.prototype=null===h?Object.create(h):(f.prototype=h.prototype,new f)}}();BABYLON.Effect.ShadersStore.guiTextureImageFragmentShader="\nprecision highp float;\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform sampler2D customTextureSampler;\n\n// Parameters\nuniform vec2 bottomLeft, topRight;\nuniform float width, height;\nuniform vec4 backgroundColor;\n\nvec3 mask = normalize(vec3(0.2, 0.4, 0.8));\n\nfloat insideBox(vec2 v) {\n    vec2 s = step(bottomLeft, v) - step(topRight, v);\n    return s.x * s.y;   \n}\n\nvoid main(void) \n{\n    float x = (vUV.x - bottomLeft.x) / width;\n    float y = (vUV.y - topRight.y) / height;\n\n    vec4 orgPixel = texture2D(textureSampler, vUV);\n    if(dot(normalize(orgPixel.xyz * insideBox(vUV)), mask) > 0.99){\n        vec4 pixel = texture2D(customTextureSampler, vec2(x, y));\n        gl_FragColor = pixel + backgroundColor * (1.0 - pixel.w);\n    } else {\n        gl_FragColor = orgPixel;\n    }\n}\n";
var TextureImage=function(b){function e(h){var f=b.call(this)||this;f.texture=h;f.mask="#3366CC";f.uniformsDirty=!1;f.onBeforeDrawObservable.addOnce(function(){f._scene=f.host.getScene();f.addPostProcess();f.onBeforeRenderObserver=f._scene.onBeforeRenderObservable.add(function(){f.uniformsDirty&&f.applyUniforms()});f.onDirtyObservable.add(function(){f.uniformsDirty=!0})});return f}__extends(e,b);e.prototype._draw=function(h){h.fillStyle=this.mask;h.fillRect(this._currentMeasure.left,this._currentMeasure.top,
this._currentMeasure.width,this._currentMeasure.height)};e.prototype.addPostProcess=function(){var h=this;this.postProcess=new BABYLON.PostProcess("guiTexturePostProcess","guiTextureImage","screenSize bottomLeft topRight width height backgroundColor".split(" "),["customTextureSampler"],1,this._scene.activeCamera);this.postProcess.onApply=function(f){h.applyUniforms()}};e.prototype.applyUniforms=function(){var h=this.postProcess.getEffect();if(h){var f=this.host.getSize(),k=f.width;f=f.height;h.setTexture("customTextureSampler",
this.texture);h.setFloat2("bottomLeft",this._currentMeasure.left/k,1-(this._currentMeasure.top+this._currentMeasure.height)/f);h.setFloat2("topRight",(this._currentMeasure.left+this._currentMeasure.width)/k,1-this._currentMeasure.top/f);h.setFloat("width",this.widthInPixels/k);h.setFloat("height",this.heightInPixels/f);h.setVector4("backgroundColor",e.ColorFromString(this.color))}};e.GetContext=function(){if(!e.CTX){var h=document.createElement("canvas");h.width=1;h.height=1;e.CTX=h.getContext("2d")}return e.CTX};
e.ColorFromString=function(h){var f=e.GetContext();f.fillStyle=h;f.fillRect(0,0,1,1);h=f.getImageData(0,0,1,1).data;return(new BABYLON.Vector4(h[0],h[1],h[2],h[3])).scale(1/255)};e.prototype.dispose=function(){this._scene.onBeforeRenderObservable.remove(this.onBeforeRenderObserver);b.prototype.dispose.call(this)};return e}(BABYLON.GUI.Control);BABYLON.GUI.TextureImage=TextureImage;__extends=this&&this.__extends||function(){var b=function(e,h){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,k){f.__proto__=k}||function(f,k){for(var m in k)Object.prototype.hasOwnProperty.call(k,m)&&(f[m]=k[m])};return b(e,h)};return function(e,h){function f(){this.constructor=e}b(e,h);e.prototype=null===h?Object.create(h):(f.prototype=h.prototype,new f)}}();
var MixedTextBlock=function(b){function e(){return null!==b&&b.apply(this,arguments)||this}__extends(e,b);Object.defineProperty(e.prototype,"multiTextArgs",{set:function(h){this._multiTextArgs=h},enumerable:!1,configurable:!0});e.prototype._drawText=function(h,f,k,m){var n=this._currentMeasure.width,y=0;switch(this._textHorizontalAlignment){case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT:y=10;break;case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT:y=n-f;break;case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER:y=
(n-f)/2}if(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)m.shadowColor=this.shadowColor,m.shadowBlur=this.shadowBlur,m.shadowOffsetX=this.shadowOffsetX,m.shadowOffsetY=this.shadowOffsetY;this.outlineWidth&&m.strokeText(h,this._currentMeasure.left+y,k);h=k-this._fontOffset.height;try{h+=parseInt(this._multiTextArgs[0].font.split(" ")[1].replace("px",""))}catch(x){h=this._fontOffset.height}this._fillMixedText(m,this._multiTextArgs,this._currentMeasure.left+y,h)};e.prototype._fillMixedText=
function(h,f,k,m){var n=h.fillStyle,y=h.font,x=this._fontOffset.height,w=k,v=this._currentMeasure.width-30;h.save();f.forEach(function(r){var z=r.fillStyle,K=r.font,T=r.text.split(" "),R=0;try{R=parseInt(r.font.split(" ")[1].replace("px",""))}catch(L){R=x}h.fillStyle=z||n;h.font=K||y;T.forEach(function(L){var Q=L.split("\n");if(1<Q.length)for(L=0;L<Q.length;L++)Q[L]=" "+Q[L],k-w+h.measureText(Q[L]).width>v&&(k=w,m+=R,Q[L]=Q[L].replace(" ","")),k==w&&(Q[L]=Q[L].replace(" ","")),h.fillText(Q[L],k,m),
k+=h.measureText(Q[L]).width,L!=Q.length-1&&(m+=R,k=w);else L=" "+L,k-w+h.measureText(L).width>v&&(k=w,m+=R,L=L.replace(" ","")),k==w&&(L=L.replace(" ","")),h.fillText(L,k,m),k+=h.measureText(L).width})});h.restore()};return e}(BABYLON.GUI.TextBlock);var pos_chicken=[5,28],gap_chicken=[0,5];
function PoingScaleIn(b,e,h,f,k){e=void 0===e?1:e;h=void 0===h?function(){}:h;f=void 0===f?!0:f;k=void 0===k?350:k;null!=b&&(Shop.instance.updateProgressPointsConditions(),b.hasOwnProperty("lock")&&PoingScaleIn(b.lock,1.2*e,h,f),b.hasOwnProperty("label3d")&&PoingScaleIn(b.label3d,e,h,f),b.hasOwnProperty("machine")&&PoingScaleIn(b.machine,e,h,f),b.hasOwnProperty("animal")&&PoingScaleIn(b.animal,e,h,f),b.hasOwnProperty("glass")&&PoingScaleIn(b.glass,e,h,f),b.hasOwnProperty("tray")&&PoingScaleIn(b.tray,
e,h,f),b.hasOwnProperty("conditionsMet")&&(b.tmpCallback=h,h=function(){b.tmpCallback();PulsingScale(b)}),b.ready=!1,b.scaling=v3(.01,.01,.01),setTimeout(function(){var m={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN},n=k+getRandomInt(Math.floor(k/35))*Math.floor(k/70),y=[[0,0],[.6,1.15*e],[.8,.9*e],[1,1*e]];CommonAnimations.AnimateObjectProperty(b.scaling,"x",1,n,m,1,!1,null,y);CommonAnimations.AnimateObjectProperty(b.scaling,"y",1,n,m,1,!1,null,y);CommonAnimations.AnimateObjectProperty(b.scaling,
"z",-1,n,m,1,!1,function(){b.ready=!0;h()}.bind(this),y)}.bind(this),30))}function PulsingScale(b,e){if(null!=b){e={func:BABYLON.QuadraticEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEINOUT};var h=[[0,1],[.5,1.15],[1,1]];CommonAnimations.AnimateObjectProperty(b.scaling,"x",1,1100,e,1,!0,null,h);CommonAnimations.AnimateObjectProperty(b.scaling,"y",1,1100,e,1,!0,null,h);CommonAnimations.AnimateObjectProperty(b.scaling,"z",-1,1100,e,1,!0,null,h)}}
function Create_CreatePlayerUpgrade(){var b=Shop.instance.getPlayerPlayer();return Shop.instance.createProgressPoint("Create_CreatePlayerUpgrade",2,8,{facing:FACING_DOWN,icon:"icon_player_upgrade.png",price:PLAYER_UPGRADE_PRICES[b.playerLevel+1],upgrade:!0},Callback_CreatePlayerUpgrade)}function Callback_CreatePlayerUpgrade(b){b=Shop.instance.getPlayerPlayer();b.increaseLevel();9<=b.playerLevel||(b=Create_CreatePlayerUpgrade(),PoingScaleIn(b))}
function Create_CashRegister1(){var b=Shop.instance.createProgressPoint("Create_CashRegister1",13,5,{facing:FACING_DOWN,icon:"icon_player_register.png",price:2},Callback_CashRegister1);PulsingScale(b);return b}function Callback_CashRegister1(b){soundManager.playSound("kaching");var e=Shop.instance.createRegister(this.options.x+2,this.options.y,this.options.facing);e.name="CashRegister1";PoingScaleIn(e,1,b);b=Create_TomatoPlant1();PoingScaleIn(b,1);screenGame.nextOnboardingStep()}
function Create_CashRegister2(){return Shop.instance.createProgressPoint("Create_CashRegister2",11,11,{facing:FACING_DOWN,icon:"icon_player_register.png",price:80},Callback_CashRegister2)}function Callback_CashRegister2(b){soundManager.playSound("kaching");var e=Shop.instance.createRegister(this.options.x+2,this.options.y,this.options.facing);e.name="CashRegister2";PoingScaleIn(e,1,b);b=Create_Cashier2();PoingScaleIn(b)}
function Create_CashRegister3(){return Shop.instance.createProgressPoint("Create_CashRegister3",54,10,{facing:FACING_DOWN,icon:"icon_player_register.png",price:250},Callback_CashRegister3)}function Callback_CashRegister3(b){soundManager.playSound("kaching");var e=Shop.instance.createRegister(this.options.x+2,this.options.y,this.options.facing);e.name="Register3";PoingScaleIn(e,1,b);b=Create_Cashier3();PoingScaleIn(b)}
function Create_ExpandGeneral1(){return Shop.instance.createProgressPoint("Create_ExpandGeneral1",35,10,{facing:FACING_DOWN,icon:"icon_player_expand2.png",expand:!0,price:120},Callback_ExpandGeneral1)}function Callback_ExpandGeneral1(b){b=Create_KetchupShelf();PoingScaleIn(b)}function Create_ExpandGeneral2(){return Shop.instance.createProgressPoint("Create_ExpandGeneral2",43,15,{facing:FACING_DOWN,icon:"icon_player_expand2.png",expand:!0,price:220},Callback_ExpandGeneral2)}
function Callback_ExpandGeneral2(b){b=Create_SauceShelf();PoingScaleIn(b);b=Create_LvlUpMachine("FlourMachine","icon_player_flour_machine.png",6,[0,400,440,480,550,625,750],-2,0);PoingScaleIn(b);b=Create_Chef2();PoingScaleIn(b);b=Create_GeneralShelver2();PoingScaleIn(b)}function Create_ExpandGeneral3(){return Shop.instance.createProgressPoint("Create_ExpandGeneral3",59,18,{facing:FACING_DOWN,icon:"icon_player_expand2.png",expand:!0,price:320},Callback_ExpandGeneral3)}
function Callback_ExpandGeneral3(b){b=Create_LvlUpMachine("BreadMachine","icon_player_bread_machine.png",6,[0,500,625,700,775,830,900],-2,0);PoingScaleIn(b);b=Create_LvlUpMachine("SauceMachine","icon_player_sauce_machine.png",6,[0,320,350,375,450,575,700],-2,0);PoingScaleIn(b);b=Create_Chef3();PoingScaleIn(b);b=Create_GeneralShelver3();PoingScaleIn(b);b=Create_MozzarellaShelf();PoingScaleIn(b);b=Create_CashRegister3();PoingScaleIn(b)}
function Create_ExpandProduce2(){return Shop.instance.createProgressPoint("Create_ExpandProduce2",25,21,{facing:FACING_DOWN,icon:"icon_player_expand.png",expand:!0,price:30},Callback_ExpandProduce2)}function Callback_ExpandProduce2(b){b=Create_LvlUpAnimal("Chicken1","icon_player_chicken.png",6,[0,25,40,50,65,80,100],-2,0);PoingScaleIn(b);b=Create_WheatShelf1();PoingScaleIn(b);b=Create_ProduceShelver2();PoingScaleIn(b);b=Create_TomatoPlant9();PoingScaleIn(b);b=Create_Chicken2();PoingScaleIn(b)}
function Create_ExpandProduce3(){return Shop.instance.createProgressPoint("Create_ExpandProduce3",35,15,{facing:FACING_DOWN,icon:"icon_player_expand.png",expand:!0,price:70},Callback_ExpandProduce3)}function Callback_ExpandProduce3(b){b=Create_ProduceFarmer2();PoingScaleIn(b);b=Create_Carrot5();PoingScaleIn(b);b=Create_MilkFridge1();PoingScaleIn(b);b=Create_EggShelf2();PoingScaleIn(b);b=Create_TomatoShelf2();PoingScaleIn(b);b=Create_ProduceShelver3();PoingScaleIn(b)}
function Create_ExpandProduce4(){return Shop.instance.createProgressPoint("Create_ExpandProduce4",45,30,{facing:FACING_DOWN,icon:"icon_player_expand.png",expand:!0,price:100},Callback_ExpandProduce4)}function Callback_ExpandProduce4(b){b=Create_CashRegister2();PoingScaleIn(b);b=Create_Carrot5();PoingScaleIn(b);b=Create_ProduceFarmer4();PoingScaleIn(b);b=Create_ProduceShelver4();PoingScaleIn(b)}
function Create_LvlUpAnimal(b,e,h,f,k,m,n,y){void 0===k&&(k=0);void 0===m&&(m=0);void 0===n&&(n=[]);void 0===y&&(y=Callback_LvlUpAnimal);var x=Shop.instance.getElementByName(b);if(null!=x){if(x.level>=h)return null;var w=0,v=Shop.instance.getProgressPointByName("Create_LvlUpAnimal#"+b);v&&v.alreadyPaid<v.options.price&&(w=v.alreadyPaid);Shop.instance.deleteProgressPointByName("Create_LvlUpAnimal#"+b);b=Shop.instance.createProgressPoint("Create_LvlUpAnimal#"+b,x.gridX+k,x.gridY+m,{animalName:b,facing:FACING_DOWN,
icon:e,price:f[x.level+1],upgrade:!0,conditions:n},y);b.options.dspX=k;b.options.dspY=m;b.options.maxLevel=h;b.options.prices=f;b.alreadyPaid=w;b.updateData();return b}}
function Callback_LvlUpAnimal(b){b=Shop.instance.getElementByName(this.options.animalName);var e=this.options.animalName.toLowerCase();0<=e.indexOf("chicken")&&soundManager.playSound("chicken");0<=e.indexOf("cow")&&soundManager.playSound("cow");soundManager.playSound("upgrade");b.increaseLevel();if(b.level>=this.options.maxLevel)return null;b=Create_LvlUpAnimal(this.options.animalName,this.options.icon,this.options.maxLevel,this.options.prices,this.options.dspX,this.options.dspY,this.options.conditions,
this.onProgress);PoingScaleIn(b)}
function Create_LvlUpMachine(b,e,h,f,k,m,n,y){void 0===k&&(k=0);void 0===m&&(m=0);void 0===n&&(n=[]);void 0===y&&(y=Callback_LvlUpMachine);var x=Shop.instance.getElementByName(b);if(x.level>=h)return null;var w=0,v=Shop.instance.getProgressPointByName("Create_LvlUpMachine#"+b);v&&v.alreadyPaid<v.options.price&&(w=v.alreadyPaid);Shop.instance.deleteProgressPointByName("Create_LvlUpMachine#"+b);b=Shop.instance.createProgressPoint("Create_LvlUpMachine#"+b,x.gridX+k,x.gridY+m,{machineName:b,facing:FACING_DOWN,
icon:e,price:f[x.level+1],upgrade:!0,dspX:k,dspY:m,conditions:n},y);b.options.maxLevel=h;b.options.prices=f;b.alreadyPaid=w;b.updateData();return b}
function Callback_LvlUpMachine(b){b=Shop.instance.getElementByName(this.options.machineName);soundManager.playSound("machine");soundManager.playSound("upgrade");b.increaseLevel();if(b.level>=this.options.maxLevel)return null;b=Create_LvlUpMachine(this.options.machineName,this.options.icon,this.options.maxLevel,this.options.prices,this.options.dspX,this.options.dspY,this.options.conditions,this.onProgress);PoingScaleIn(b)}var pos_tomato1=[13,30],gap_tomato=[6,4];
function Create_TomatoShelf1(){return Shop.instance.createProgressPoint("Create_TomatoShelf1",14,16,{facing:FACING_DOWN,icon:"icon_player_tomato_shelf.png",price:4},Callback_TomatoShelf1)}function Callback_TomatoShelf1(b){soundManager.playSound("furniture");var e=Shop.instance.createTomatoShelf(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoShelf1";PoingScaleIn(e,1,b);b=Create_Cashier1();PoingScaleIn(b);Shop.instance.spawnBuyer();screenGame.nextOnboardingStep()}
function Create_TomatoShelf2(){return Shop.instance.createProgressPoint("Create_TomatoShelf2",14,22,{facing:FACING_DOWN,icon:"icon_player_tomato_shelf.png",price:80},Callback_TomatoShelf2)}function Callback_TomatoShelf2(b){soundManager.playSound("furniture");var e=Shop.instance.createTomatoShelf(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoShelf2";PoingScaleIn(e,1,b)}
function Create_TomatoPlant1(){return Shop.instance.createProgressPoint("Create_TomatoPlant1",pos_tomato1[0]+0*gap_tomato[0],pos_tomato1[1]+0*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:3},Callback_TomatoPlant1)}function Callback_TomatoPlant1(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant1";PoingScaleIn(e,1,b);screenGame.nextOnboardingStep()}
function Create_TomatoPlant2(){return Shop.instance.createProgressPoint("Create_TomatoPlant2",pos_tomato1[0]+0*gap_tomato[0],pos_tomato1[1]+1*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:10},Callback_TomatoPlant2)}function Callback_TomatoPlant2(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant2";PoingScaleIn(e,1,b);b=Create_TomatoPlant3();PoingScaleIn(b)}
function Create_TomatoPlant3(){return Shop.instance.createProgressPoint("Create_TomatoPlant3",pos_tomato1[0]+1*gap_tomato[0],pos_tomato1[1]+0*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:15},Callback_TomatoPlant3)}function Callback_TomatoPlant3(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant3";PoingScaleIn(e,1,b);b=Create_TomatoPlant4();PoingScaleIn(b)}
function Create_TomatoPlant4(){return Shop.instance.createProgressPoint("Create_TomatoPlant4",pos_tomato1[0]+1*gap_tomato[0],pos_tomato1[1]+1*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:25},Callback_TomatoPlant4)}function Callback_TomatoPlant4(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant4";PoingScaleIn(e,1,b);b=Create_TomatoPlant5();PoingScaleIn(b)}
function Create_TomatoPlant5(){return Shop.instance.createProgressPoint("Create_TomatoPlant5",pos_tomato1[0]+0*gap_tomato[0],pos_tomato1[1]+2*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:45},Callback_TomatoPlant5)}function Callback_TomatoPlant5(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant5";PoingScaleIn(e,1,b);b=Create_TomatoPlant6();PoingScaleIn(b)}
function Create_TomatoPlant6(){return Shop.instance.createProgressPoint("Create_TomatoPlant6",pos_tomato1[0]+0*gap_tomato[0],pos_tomato1[1]+3*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:60},Callback_TomatoPlant6)}function Callback_TomatoPlant6(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant6";PoingScaleIn(e,1,b);b=Create_TomatoPlant7();PoingScaleIn(b)}
function Create_TomatoPlant7(){return Shop.instance.createProgressPoint("Create_TomatoPlant7",pos_tomato1[0]+1*gap_tomato[0],pos_tomato1[1]+2*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:80},Callback_TomatoPlant7)}function Callback_TomatoPlant7(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant7";PoingScaleIn(e,1,b);b=Create_TomatoPlant8();PoingScaleIn(b)}
function Create_TomatoPlant8(){return Shop.instance.createProgressPoint("Create_TomatoPlant8",pos_tomato1[0]+1*gap_tomato[0],pos_tomato1[1]+3*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:100},Callback_TomatoPlant8)}function Callback_TomatoPlant8(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant8";PoingScaleIn(e,1,b);b=Create_TomatoPlant9();PoingScaleIn(b)}
function Create_TomatoPlant9(){Shop.instance.deleteProgressPointByName("Create_TomatoPlant9");return Shop.instance.createProgressPoint("Create_TomatoPlant9",pos_tomato1[0]+0*gap_tomato[0],pos_tomato1[1]+4*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:130,conditions:[{name:"TomatoPlant8"},{name:"Create_WheatShelf1",lock:!0},{name:"WheatShelf1",lock:!0}]},Callback_TomatoPlant9)}
function Callback_TomatoPlant9(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant9";PoingScaleIn(e,1,b);b=Create_TomatoPlant10();PoingScaleIn(b)}function Create_TomatoPlant10(){return Shop.instance.createProgressPoint("Create_TomatoPlant10",pos_tomato1[0]+0*gap_tomato[0],pos_tomato1[1]+5*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:160},Callback_TomatoPlant10)}
function Callback_TomatoPlant10(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant10";PoingScaleIn(e,1,b);b=Create_TomatoPlant11();PoingScaleIn(b)}function Create_TomatoPlant11(){return Shop.instance.createProgressPoint("Create_TomatoPlant11",pos_tomato1[0]+1*gap_tomato[0],pos_tomato1[1]+4*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:190},Callback_TomatoPlant11)}
function Callback_TomatoPlant11(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant11";PoingScaleIn(e,1,b);b=Create_TomatoPlant12();PoingScaleIn(b)}function Create_TomatoPlant12(){return Shop.instance.createProgressPoint("Create_TomatoPlant12",pos_tomato1[0]+1*gap_tomato[0],pos_tomato1[1]+5*gap_tomato[1],{facing:FACING_DOWN,icon:"icon_player_tomato_plant.png",price:250},Callback_TomatoPlant12)}
function Callback_TomatoPlant12(b){soundManager.playSound("plant");var e=Shop.instance.createTomatoField(this.options.x+2,this.options.y,this.options.facing);e.name="TomatoPlant12";PoingScaleIn(e,1,b)}function Create_Cashier1(){return Shop.instance.createProgressPoint("Create_Cashier1",12,11,{facing:FACING_DOWN,icon:"icon_player_cashier.png",price:10},Callback_Cashier1)}
function Callback_Cashier1(b){var e=Shop.instance.entries[0].position.clone();Shop.instance.spawnCashier(e,b).name="Cashier1";b=Create_EggShelf1();PoingScaleIn(b)}function Create_Cashier2(){return Shop.instance.createProgressPoint("Create_Cashier2",10,11,{facing:FACING_DOWN,icon:"icon_player_cashier.png",price:150},Callback_Cashier2)}function Callback_Cashier2(b){var e=Shop.instance.entries[0].position.clone();Shop.instance.spawnCashier(e,b).name="Cashier2"}
function Create_Cashier3(){return Shop.instance.createProgressPoint("Create_Cashier3",54,10,{facing:FACING_DOWN,icon:"icon_player_cashier.png",price:225},Callback_Cashier3)}function Callback_Cashier3(b){var e=Shop.instance.entries[0].position.clone();Shop.instance.spawnCashier(e,b).name="Cashier3"}function Create_ProduceShelver1(){return Shop.instance.createProgressPoint("Create_ProduceShelver1",3,15,{facing:FACING_DOWN,icon:"icon_player_assistent.png",price:30},Callback_ProduceShelver1)}
function Callback_ProduceShelver1(b){Shop.instance.spawnAssistent(this.position).name="ProduceShelver1";b=Create_ProduceShelver2();PoingScaleIn(b);b=Create_ExpandProduce2();PoingScaleIn(b)}
function Create_ProduceShelver2(){if(!Shop.instance.getElementByName("ProduceShelver2"))return Shop.instance.deleteProgressPointByName("Create_ProduceShelver2"),Shop.instance.createProgressPoint("Create_ProduceShelver2",3,15,{facing:FACING_DOWN,icon:"icon_player_assistent.png",price:50,conditions:[{name:"ProduceShelver1"},{name:"Create_WheatShelf1",lock:!0},{name:"WheatShelf1",lock:!0}]},Callback_ProduceShelver2)}
function Callback_ProduceShelver2(b){Shop.instance.spawnAssistent(this.position).name="ProduceShelver2";b=Create_LvlUpWorker(PLAYER_TYPE_ASSISTENT,3,15,6,[0,40,75,125,250,400,600]);PoingScaleIn(b)}function Create_ProduceShelver3(){return Shop.instance.createProgressPoint("Create_ProduceShelver3",6,10,{facing:FACING_DOWN,icon:"icon_player_assistent.png",price:75},Callback_ProduceShelver3)}
function Callback_ProduceShelver3(b){Shop.instance.spawnAssistent(this.position).name="ProduceShelver3";b=Create_ProduceShelver4();PoingScaleIn(b)}
function Create_ProduceShelver4(){if(!Shop.instance.getElementByName("ProduceShelver4"))return Shop.instance.deleteProgressPointByName("Create_ProduceShelver4"),Shop.instance.createProgressPoint("Create_ProduceShelver4",45,24,{facing:FACING_DOWN,icon:"icon_player_assistent.png",price:100,conditions:[{name:"ProduceShelver3"},{name:"Create_CashRegister2",lock:!0},{name:"CashRegister2",lock:!0}]},Callback_ProduceShelver4)}
function Callback_ProduceShelver4(b){Shop.instance.spawnAssistent(this.position).name="ProduceShelver4"}var pos_general=[46,9];function Create_GeneralShelver1(){return Shop.instance.createProgressPoint("Create_GeneralShelver1",pos_general[0],pos_general[1],{facing:FACING_DOWN,icon:"icon_player_general.png",price:180},Callback_GeneralShelver1)}
function Callback_GeneralShelver1(b){this.options.position.clone().x+=1;Shop.instance.spawnGeneral(this.position).name="GeneralShelver1";b=Create_LvlUpWorker(PLAYER_TYPE_GENERAL,this.gridX,this.gridY,5,[0,210,300,375,500,650,750],[],Callback_LvlUpGeneralToLevel4);PoingScaleIn(b);b=Create_GeneralShelver2();PoingScaleIn(b)}
Callback_LvlUpGeneralToLevel4=function(){soundManager.playSound("assistant");soundManager.playSound("upgrade");Shop.instance.workerLevel[PLAYER_TYPE_GENERAL]++;PlayerLevelIncreased(PLAYER_TYPE_GENERAL,Shop.instance.workerLevel[PLAYER_TYPE_GENERAL],this.position);for(var b=0;b<Shop.instance.players.length;b++){var e=Shop.instance.players[b];e.playerType==PLAYER_TYPE_GENERAL&&e.increaseLevel(this.position)}b=[{name:"GeneralShelver2",lock:!0}];4>Shop.instance.workerLevel[PLAYER_TYPE_GENERAL]&&(b=[]);
if(Shop.instance.workerLevel[PLAYER_TYPE_GENERAL]>=this.options.maxLevel)return null;b=Create_LvlUpWorker(PLAYER_TYPE_GENERAL,this.gridX,this.gridY,5,[0,210,300,375,500,650,750],b,Callback_LvlUpGeneralToLevel4);PoingScaleIn(b)};
function Create_GeneralShelver2(){if(!Shop.instance.getElementByName("GeneralShelver2"))return Shop.instance.deleteProgressPointByName("Create_GeneralShelver2"),Shop.instance.createProgressPoint("Create_GeneralShelver2",pos_general[0]+3,pos_general[1],{facing:FACING_DOWN,icon:"icon_player_general.png",price:210,conditions:[{name:"Create_SauceShelf",lock:!0},{name:"SauceShelf",lock:!0}]},Callback_GeneralShelver2)}
function Callback_GeneralShelver2(b){this.options.position.clone().x+=1;Shop.instance.spawnGeneral(this.position).name="GeneralShelver2";b=Create_LvlUpWorker(PLAYER_TYPE_GENERAL,this.gridX,this.gridY,6,[0,210,300,375,500,650,750]);PoingScaleIn(b)}function Create_GeneralShelver3(){return Shop.instance.createProgressPoint("Create_GeneralShelver3",pos_general[0]+5,pos_general[1],{facing:FACING_DOWN,icon:"icon_player_general.png",price:240},Callback_GeneralShelver3)}
function Callback_GeneralShelver3(b){this.options.position.clone().x+=1;Shop.instance.spawnGeneral(this.position).name="GeneralShelver3";b=Create_GeneralShelver4();PoingScaleIn(b)}function Create_GeneralShelver4(){return Shop.instance.createProgressPoint("Create_GeneralShelver4",pos_general[0]+7,pos_general[1]-1,{facing:FACING_DOWN,icon:"icon_player_general.png",price:300},Callback_GeneralShelver4)}
function Callback_GeneralShelver4(b){this.options.position.clone().x+=1;Shop.instance.spawnGeneral(this.position).name="GeneralShelver4"}var pos_farmer0=[9,23];function Create_ProduceFarmer0(){return Shop.instance.createProgressPoint("Create_ProduceFarmer0",pos_farmer0[0],pos_farmer0[1],{facing:FACING_DOWN,icon:"icon_player_farmer.png",price:30},Callback_ProduceFarmer0)}
function Callback_ProduceFarmer0(b){this.options.position.clone().x+=1;Shop.instance.spawnFarmer(this.position).name="ProduceFarmer0"}var pos_farmer1=[31,25];function Create_ProduceFarmer1(){return Shop.instance.createProgressPoint("Create_ProduceFarmer1",pos_farmer1[0],pos_farmer1[1],{facing:FACING_DOWN,icon:"icon_player_farmer.png",price:50},Callback_ProduceFarmer1)}
function Callback_ProduceFarmer1(b){this.options.position.clone().x+=1;Shop.instance.spawnFarmer(this.position).name="ProduceFarmer1";b=Create_ProduceFarmer2();PoingScaleIn(b);b=Create_LvlUpWorker(PLAYER_TYPE_FARMER,pos_farmer1[0],pos_farmer1[1],6,[0,70,125,175,300,450,650]);PoingScaleIn(b)}var pos_farmer2=[40,25];
function Create_ProduceFarmer2(){if(!Shop.instance.getElementByName("ProduceFarmer2"))return Shop.instance.deleteProgressPointByName("Create_ProduceFarmer2"),Shop.instance.createProgressPoint("Create_ProduceFarmer2",pos_farmer2[0],pos_farmer2[1],{facing:FACING_DOWN,icon:"icon_player_farmer.png",price:100,conditions:[{name:"ProduceFarmer1"},{name:"MilkFridge1",lock:!0}]},Callback_ProduceFarmer2)}
function Callback_ProduceFarmer2(b){this.options.position.clone().x+=1;Shop.instance.spawnFarmer(this.position).name="ProduceFarmer2";b=Create_ProduceFarmer3();PoingScaleIn(b)}var pos_farmer3=[47,28];function Create_ProduceFarmer3(){return Shop.instance.createProgressPoint("Create_ProduceFarmer3",pos_farmer3[0],pos_farmer3[1],{facing:FACING_DOWN,icon:"icon_player_farmer.png",price:150},Callback_ProduceFarmer3)}
function Callback_ProduceFarmer3(b){this.options.position.clone().x+=1;Shop.instance.spawnFarmer(this.position).name="ProduceFarmer3";b=Create_ProduceFarmer4();PoingScaleIn(b)}var pos_farmer4=[53,28];
function Create_ProduceFarmer4(){if(!Shop.instance.getElementByName("ProduceFarmer4"))return Shop.instance.deleteProgressPointByName("Create_ProduceFarmer4"),Shop.instance.createProgressPoint("Create_ProduceFarmer4",pos_farmer4[0],pos_farmer4[1],{facing:FACING_DOWN,icon:"icon_player_farmer.png",price:200,conditions:[{name:"ProduceFarmer3"},{name:"Create_CashRegister2",lock:!0},{name:"CashRegister2",lock:!0}]},Callback_ProduceFarmer4)}
function Callback_ProduceFarmer4(b){this.options.position.clone().x+=1;Shop.instance.spawnFarmer(this.position).name="ProduceFarmer4"}var pos_chef=[38,7];function Create_Chef1(){return Shop.instance.createProgressPoint("Create_Chef1",pos_chef[0],pos_chef[1],{facing:FACING_DOWN,icon:"icon_player_chef.png",price:150},Callback_Chef1)}
function Callback_Chef1(b){this.options.position.clone().x+=1;Shop.instance.spawnChef(this.position).name="Chef1";b=Create_FlourShelf();PoingScaleIn(b);b=Create_Chef2();PoingScaleIn(b);b=Create_LvlUpWorker(PLAYER_TYPE_CHEF,pos_chef[0],pos_chef[1],5,[0,185,225,275,350,500,600],[],Callback_LvlUpChefToLevel4);PoingScaleIn(b)}
function Callback_LvlUpChefToLevel4(){soundManager.playSound("chef");soundManager.playSound("upgrade");Shop.instance.workerLevel[PLAYER_TYPE_CHEF]++;PlayerLevelIncreased(PLAYER_TYPE_CHEF,Shop.instance.workerLevel[PLAYER_TYPE_CHEF],this.position);for(var b=0;b<Shop.instance.players.length;b++){var e=Shop.instance.players[b];e.playerType==PLAYER_TYPE_CHEF&&e.increaseLevel(this.position)}b=[{name:"Chef2",lock:!0}];4>Shop.instance.workerLevel[PLAYER_TYPE_CHEF]&&(b=[]);if(Shop.instance.workerLevel[PLAYER_TYPE_CHEF]>=
this.options.maxLevel)return null;b=Create_LvlUpWorker(PLAYER_TYPE_CHEF,pos_chef[0],pos_chef[1],5,[0,185,225,275,350,500,600],b,Callback_LvlUpChefToLevel4);PoingScaleIn(b)}
function Create_Chef2(){if(!Shop.instance.getElementByName("Chef2"))return Shop.instance.deleteProgressPointByName("Create_Chef2"),Shop.instance.createProgressPoint("Create_Chef2",pos_chef[0]+3,pos_chef[1],{facing:FACING_DOWN,icon:"icon_player_chef.png",price:200,conditions:[{name:"Chef1"},{name:"Create_SauceShelf",lock:!0},{name:"SauceShelf",lock:!0}]},Callback_Chef2)}
function Callback_Chef2(b){this.options.position.clone().x+=1;Shop.instance.spawnChef(this.position).name="Chef2";b=Create_Chef3();PoingScaleIn(b);b=Create_LvlUpWorker(PLAYER_TYPE_CHEF,pos_chef[0],pos_chef[1],6,[0,185,225,275,350,500,600]);PoingScaleIn(b)}
function Create_Chef3(){if(!Shop.instance.getElementByName("Chef3"))return Shop.instance.deleteProgressPointByName("Create_Chef3"),Shop.instance.createProgressPoint("Create_Chef3",pos_chef[0]+5,pos_chef[1],{facing:FACING_DOWN,icon:"icon_player_chef.png",price:300,conditions:[{name:"Chef2"},{name:"Create_MozzarellaShelf",lock:!0},{name:"MozzarellaShelf",lock:!0}]},Callback_Chef3)}
function Callback_Chef3(b){this.options.position.clone().x+=1;Shop.instance.spawnChef(this.position).name="Chef3";b=Create_Chef4();PoingScaleIn(b)}function Create_Chef4(){return Shop.instance.createProgressPoint("Create_Chef4",pos_chef[0]+6,pos_chef[1],{facing:FACING_DOWN,icon:"icon_player_chef.png",price:450},Callback_Chef4)}function Callback_Chef4(b){this.options.position.clone().x+=1;Shop.instance.spawnChef(this.position).name="Chef4"}
function Create_LvlUpWorker(b,e,h,f,k,m,n){void 0===m&&(m=[]);void 0===n&&(n=function(){});var y="icon_player_upgrade.png";b==PLAYER_TYPE_ASSISTENT&&(y="icon_player_assistent.png");b==PLAYER_TYPE_GENERAL&&(y="icon_player_general.png");b==PLAYER_TYPE_FARMER&&(y="icon_player_farmer.png");b==PLAYER_TYPE_CHEF&&(y="icon_player_chef.png");var x=k[Shop.instance.workerLevel[b]+1];n=0;var w=Shop.instance.getProgressPointByName("Create_LvlUpWorker#"+b);w&&(w.alreadyPaid<w.options.price&&(n=w.alreadyPaid),e=
w.gridX,h=w.gridY);Shop.instance.deleteProgressPointByName("Create_LvlUpWorker#"+b);b=Shop.instance.createProgressPoint("Create_LvlUpWorker#"+b,e,h,{workerType:b,facing:FACING_DOWN,icon:y,price:x,upgrade:!0,conditions:m},Callback_LvlUpWorker);b.options.maxLevel=f;b.options.prices=k;b.alreadyPaid=n;b.updateData();return b}
function Callback_LvlUpWorker(b){this.options.workerType==PLAYER_TYPE_CHEF&&soundManager.playSound("chef");this.options.workerType==PLAYER_TYPE_FARMER&&soundManager.playSound("farmer");this.options.workerType==PLAYER_TYPE_GENERAL&&soundManager.playSound("assistant");this.options.workerType==PLAYER_TYPE_ASSISTENT&&soundManager.playSound("assistant");soundManager.playSound("upgrade");Shop.instance.workerLevel[this.options.workerType]++;PlayerLevelIncreased(this.options.workerType,Shop.instance.workerLevel[this.options.workerType],
this.position);for(b=0;b<Shop.instance.players.length;b++){var e=Shop.instance.players[b];e.playerType==this.options.workerType&&e.increaseLevel(this.position)}if(Shop.instance.workerLevel[this.options.workerType]>=this.options.maxLevel)return null;b=Create_LvlUpWorker(this.options.workerType,this.gridX,this.gridY,this.options.maxLevel,this.options.prices,this.options.conditions,this.onProgress);PoingScaleIn(b)}
function Create_FlourShelf(){return Shop.instance.createProgressPoint("Create_FlourShelf",36,3,{facing:FACING_DOWN,icon:"icon_player_flour_shelf.png",price:200},Callback_FlourShelf)}function Callback_FlourShelf(b){soundManager.playSound("furniture");var e=Shop.instance.createFlourShelf(this.options.x+2,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_GeneralShelver1();PoingScaleIn(b);b=Create_FlourMachine();PoingScaleIn(b)}
function Create_FlourMachine(){return Shop.instance.createProgressPoint("Create_FlourMachine",27,9,{facing:FACING_UP,icon:"icon_player_flour_machine.png",price:230},Callback_FlourMachine)}
function Callback_FlourMachine(b){soundManager.playSound("machine");var e=Shop.instance.createFlourMachine(this.options.x+2,this.options.y,this.options.facing);e.name="FlourMachine";PoingScaleIn(e,1,b);b=Create_ExpandGeneral2();PoingScaleIn(b);b=Create_LvlUpMachine("FlourMachine","icon_player_flour_machine.png",5,[0,400,440,480,550,625,750],-2,0,[],Callback_LvlUpMachineFlourMachineTolevel4);PoingScaleIn(b)}
function Callback_LvlUpMachineFlourMachineTolevel4(){var b=Shop.instance.getElementByName("FlourMachine");soundManager.playSound("machine");soundManager.playSound("upgrade");b.increaseLevel();if(b.level>=this.options.maxLevel)return null;var e=[{name:"Create_SauceShelf",lock:!0},{name:"SauceShelf",lock:!0}];4>b.level&&(e=[]);b=Create_LvlUpMachine("FlourMachine","icon_player_flour_machine.png",5,[0,400,440,480,550,625,750],-2,0,e,Callback_LvlUpMachineFlourMachineTolevel4);PoingScaleIn(b)}
function Create_EggShelf1(){return Shop.instance.createProgressPoint("Create_EggShelf1",5,16,{facing:FACING_DOWN,icon:"icon_player_eggs_shelf.png",price:10},Callback_EggShelf1)}function Callback_EggShelf1(b){soundManager.playSound("furniture");var e=Shop.instance.createEggShelf(this.options.x+2,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Chicken1();PoingScaleIn(b);b=Create_ProduceShelver1();PoingScaleIn(b)}
function Create_EggShelf2(){return Shop.instance.createProgressPoint("Create_EggShelf2",5,22,{facing:FACING_DOWN,icon:"icon_player_eggs_shelf.png",price:70},Callback_EggShelf2)}function Callback_EggShelf2(b){soundManager.playSound("furniture");var e=Shop.instance.createEggShelf(this.options.x+2,this.options.y,this.options.facing);PoingScaleIn(e,1,b)}
function Create_Chicken1(){return Shop.instance.createProgressPoint("Create_Chicken1",pos_chicken[0],pos_chicken[1]+0*gap_chicken[1],{facing:FACING_RIGHT,icon:"icon_player_chicken.png",price:15},Callback_Chicken1)}
function Callback_Chicken1(b){soundManager.playSound("chicken");var e=Shop.instance.createChicken(this.options.x,this.options.y,this.options.facing);e.name="Chicken1";PoingScaleIn(e,1,b);b=Create_TomatoPlant2();PoingScaleIn(b);b=Create_LvlUpAnimal("Chicken1","icon_player_chicken.png",3,[0,25,40,50,65,80,100],-2,0,[],Callback_LvlUpAnimalChicken1ToLevel2);PoingScaleIn(b);b=Create_ProduceFarmer0();PoingScaleIn(b);b=Create_CreatePlayerUpgrade();PoingScaleIn(b)}
function Callback_LvlUpAnimalChicken1ToLevel2(){var b=Shop.instance.getElementByName("Chicken1");soundManager.playSound("chicken");b.increaseLevel();if(b.level>=this.options.maxLevel)return null;var e=[{name:"Create_WheatShelf1",lock:!0}];2>b.level&&(e=[]);b=Create_LvlUpAnimal("Chicken1","icon_player_chicken.png",3,[0,25,40,50,65,80,100],-2,0,e,Callback_LvlUpAnimalChicken1ToLevel2);PoingScaleIn(b)}
function Create_Chicken2(){return Shop.instance.createProgressPoint("Create_Chicken2",pos_chicken[0],pos_chicken[1]+1*gap_chicken[1],{facing:FACING_RIGHT,icon:"icon_player_chicken.png",price:40},Callback_Chicken2)}
function Callback_Chicken2(b){soundManager.playSound("chicken");var e=Shop.instance.createChicken(this.options.x,this.options.y,this.options.facing);e.name="Chicken2";PoingScaleIn(e,1,b);b=Create_LvlUpAnimal("Chicken2","icon_player_chicken.png",6,[0,70,85,110,135,150,175],-2);PoingScaleIn(b);b=Create_Chicken3();PoingScaleIn(b);b=Create_Chicken4();PoingScaleIn(b)}
function Create_Chicken3(){return Shop.instance.createProgressPoint("Create_Chicken3",pos_chicken[0],pos_chicken[1]+2*gap_chicken[1],{facing:FACING_RIGHT,icon:"icon_player_chicken.png",price:60},Callback_Chicken3)}
function Callback_Chicken3(b){soundManager.playSound("chicken");var e=Shop.instance.createChicken(this.options.x,this.options.y,this.options.facing);e.name="Chicken3";PoingScaleIn(e,1,b);b=Create_LvlUpAnimal("Chicken3","icon_player_chicken.png",6,[0,100,125,150,180,210,250],-2);PoingScaleIn(b)}
function Create_Chicken4(){return Shop.instance.createProgressPoint("Create_Chicken4",pos_chicken[0],pos_chicken[1]+3*gap_chicken[1],{facing:FACING_RIGHT,icon:"icon_player_chicken.png",price:80},Callback_Chicken4)}
function Callback_Chicken4(b){soundManager.playSound("chicken");var e=Shop.instance.createChicken(this.options.x,this.options.y,this.options.facing);e.name="Chicken4";PoingScaleIn(e,1,b);b=Create_LvlUpAnimal("Chicken4","icon_player_chicken.png",6,[0,145,175,220,250,275,300],-2);PoingScaleIn(b)}var pos_wheat1=[26,30],gap_wheat=[2,4];
function Create_WheatShelf1(){return Shop.instance.createProgressPoint("Create_WheatShelf1",24,22,{facing:FACING_DOWN,icon:"icon_player_wheat_shelf.png",price:40},Callback_WheatShelf1)}function Callback_WheatShelf1(b){soundManager.playSound("furniture");var e=Shop.instance.createWheatShelf(this.options.x+2,this.options.y,this.options.facing);e.name="WheatShelf1";PoingScaleIn(e,1,b);b=Create_Wheat1();PoingScaleIn(b)}
function Create_Wheat1(){return Shop.instance.createProgressPoint("Create_Wheat1",pos_wheat1[0]+0*gap_wheat[0],pos_wheat1[1]+0*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:35},Callback_Wheat1)}function Callback_Wheat1(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat2();PoingScaleIn(e,1,b);e=Create_ProduceFarmer1();PoingScaleIn(e,1,b)}
function Create_Wheat2(){return Shop.instance.createProgressPoint("Create_Wheat2",pos_wheat1[0]+1*gap_wheat[0],pos_wheat1[1]+0*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:40},Callback_Wheat2)}function Callback_Wheat2(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_CarrotShelf1();PoingScaleIn(e);e=Create_Wheat3();PoingScaleIn(e,1,b)}
function Create_Wheat3(){return Shop.instance.createProgressPoint("Create_Wheat3",pos_wheat1[0]+2*gap_wheat[0],pos_wheat1[1]+0*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:45},Callback_Wheat3)}function Callback_Wheat3(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat4();PoingScaleIn(e,1,b)}
function Create_Wheat4(){return Shop.instance.createProgressPoint("Create_Wheat4",pos_wheat1[0]+0*gap_wheat[0],pos_wheat1[1]+1*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:60},Callback_Wheat4)}function Callback_Wheat4(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat5();PoingScaleIn(e,1,b)}
function Create_Wheat5(){return Shop.instance.createProgressPoint("Create_Wheat5",pos_wheat1[0]+1*gap_wheat[0],pos_wheat1[1]+1*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:75},Callback_Wheat5)}function Callback_Wheat5(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat6();PoingScaleIn(e,1,b)}
function Create_Wheat6(){return Shop.instance.createProgressPoint("Create_Wheat6",pos_wheat1[0]+2*gap_wheat[0],pos_wheat1[1]+1*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:90},Callback_Wheat6)}function Callback_Wheat6(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat7();PoingScaleIn(e,1,b)}
function Create_Wheat7(){return Shop.instance.createProgressPoint("Create_Wheat7",pos_wheat1[0]+0*gap_wheat[0],pos_wheat1[1]+2*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:110},Callback_Wheat7)}function Callback_Wheat7(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat8();PoingScaleIn(e,1,b)}
function Create_Wheat8(){return Shop.instance.createProgressPoint("Create_Wheat8",pos_wheat1[0]+1*gap_wheat[0],pos_wheat1[1]+2*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:135},Callback_Wheat8)}function Callback_Wheat8(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat9();PoingScaleIn(e,1,b)}
function Create_Wheat9(){return Shop.instance.createProgressPoint("Create_Wheat9",pos_wheat1[0]+2*gap_wheat[0],pos_wheat1[1]+2*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:150},Callback_Wheat9)}function Callback_Wheat9(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat10();PoingScaleIn(e,1,b)}
function Create_Wheat10(){return Shop.instance.createProgressPoint("Create_Wheat10",pos_wheat1[0]+0*gap_wheat[0],pos_wheat1[1]+3*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:175},Callback_Wheat10)}function Callback_Wheat10(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat11();PoingScaleIn(e,1,b)}
function Create_Wheat11(){return Shop.instance.createProgressPoint("Create_Wheat11",pos_wheat1[0]+1*gap_wheat[0],pos_wheat1[1]+3*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:200},Callback_Wheat11)}function Callback_Wheat11(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);e=Create_Wheat12();PoingScaleIn(e,1,b)}
function Create_Wheat12(){return Shop.instance.createProgressPoint("Create_Wheat12",pos_wheat1[0]+2*gap_wheat[0],pos_wheat1[1]+3*gap_wheat[1],{facing:FACING_DOWN,icon:"icon_player_wheat.png",price:250},Callback_Wheat12)}function Callback_Wheat12(b){soundManager.playSound("plant");var e=Shop.instance.createWheatField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b)}var pos_carrot1=[35,30],gap_carrot=[2,4];
function Create_CarrotShelf1(){return Shop.instance.createProgressPoint("Create_CarrotShelf1",33,23,{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:60},Callback_CarrotShelf1)}function Callback_CarrotShelf1(b){soundManager.playSound("furniture");var e=Shop.instance.createCarrotShelf(this.options.x+2,this.options.y,this.options.facing);e.name="CarrotShelf1";PoingScaleIn(e,1,b);b=Create_Carrot1();PoingScaleIn(b)}
function Create_Carrot1(){return Shop.instance.createProgressPoint("Create_Carrot1",pos_carrot1[0]+0*gap_carrot[0],pos_carrot1[1]+0*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:55},Callback_Carrot1)}
function Callback_Carrot1(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot2();PoingScaleIn(b);b=Create_ExpandGeneral1();PoingScaleIn(b);b=Create_ExpandProduce3();PoingScaleIn(b)}
function Create_Carrot2(){return Shop.instance.createProgressPoint("Create_Carrot2",pos_carrot1[0]+1*gap_carrot[0],pos_carrot1[1]+0*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:65},Callback_Carrot2)}function Callback_Carrot2(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot3();PoingScaleIn(b)}
function Create_Carrot3(){return Shop.instance.createProgressPoint("Create_Carrot3",pos_carrot1[0]+2*gap_carrot[0],pos_carrot1[1]+0*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:75},Callback_Carrot3)}function Callback_Carrot3(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot4();PoingScaleIn(b)}
function Create_Carrot4(){return Shop.instance.createProgressPoint("Create_Carrot4",pos_carrot1[0]+0*gap_carrot[0],pos_carrot1[1]+1*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:90},Callback_Carrot4)}function Callback_Carrot4(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);e.name="Carrot4";PoingScaleIn(e,1,b)}
function Create_Carrot5(){Shop.instance.deleteProgressPointByName("Create_Carrot5");return Shop.instance.createProgressPoint("Create_Carrot5",pos_carrot1[0]+1*gap_carrot[0],pos_carrot1[1]+1*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:115,conditions:[{name:"Carrot4"},{name:"Create_CashRegister2",lock:!0},{name:"CashRegister2",lock:!0}]},Callback_Carrot5)}
function Callback_Carrot5(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot6();PoingScaleIn(b)}function Create_Carrot6(){return Shop.instance.createProgressPoint("Create_Carrot6",pos_carrot1[0]+2*gap_carrot[0],pos_carrot1[1]+1*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:135},Callback_Carrot6)}
function Callback_Carrot6(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot7();PoingScaleIn(b)}function Create_Carrot7(){return Shop.instance.createProgressPoint("Create_Carrot7",pos_carrot1[0]+0*gap_carrot[0],pos_carrot1[1]+2*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:160},Callback_Carrot7)}
function Callback_Carrot7(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot8();PoingScaleIn(b)}function Create_Carrot8(){return Shop.instance.createProgressPoint("Create_Carrot8",pos_carrot1[0]+1*gap_carrot[0],pos_carrot1[1]+2*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:175},Callback_Carrot8)}
function Callback_Carrot8(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot9();PoingScaleIn(b)}function Create_Carrot9(){return Shop.instance.createProgressPoint("Create_Carrot9",pos_carrot1[0]+2*gap_carrot[0],pos_carrot1[1]+2*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:225},Callback_Carrot9)}
function Callback_Carrot9(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot10();PoingScaleIn(b)}function Create_Carrot10(){return Shop.instance.createProgressPoint("Create_Carrot10",pos_carrot1[0]+0*gap_carrot[0],pos_carrot1[1]+3*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:275},Callback_Carrot10)}
function Callback_Carrot10(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot11();PoingScaleIn(b)}function Create_Carrot11(){return Shop.instance.createProgressPoint("Create_Carrot11",pos_carrot1[0]+1*gap_carrot[0],pos_carrot1[1]+3*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:300},Callback_Carrot11)}
function Callback_Carrot11(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_Carrot12();PoingScaleIn(b)}function Create_Carrot12(){return Shop.instance.createProgressPoint("Create_Carrot12",pos_carrot1[0]+2*gap_carrot[0],pos_carrot1[1]+3*gap_carrot[1],{facing:FACING_DOWN,icon:"icon_player_carrot.png",price:350},Callback_Carrot12)}
function Callback_Carrot12(b){soundManager.playSound("plant");var e=Shop.instance.createCarrotField(this.options.x,this.options.y,this.options.facing);PoingScaleIn(e,1,b)}function Create_MilkFridge1(){return Shop.instance.createProgressPoint("Create_MilkFridge1",24,3,{facing:FACING_DOWN,icon:"icon_player_milk_shelf.png",price:80},Callback_MilkFridge1)}
function Callback_MilkFridge1(b){soundManager.playSound("furniture");var e=Shop.instance.createMilkShelf(this.options.x+2,this.options.y,this.options.facing);e.name="MilkFridge1";PoingScaleIn(e,1,b);b=Create_Cow1();PoingScaleIn(b);b=Create_ExpandProduce4();PoingScaleIn(b)}var pos_cow1=[45,37];function Create_Cow1(){return Shop.instance.createProgressPoint("Create_Cow1",pos_cow1[0],pos_cow1[1],{facing:FACING_RIGHT,icon:"icon_player_cow.png",price:25},Callback_Cow1)}
function Callback_Cow1(b){soundManager.playSound("cow");var e=Shop.instance.createCow(this.options.x+2,this.options.y,this.options.facing);e.name="Cow1";PoingScaleIn(e,1,b);b=Create_Cow2();PoingScaleIn(b);b=Create_LvlUpAnimal("Cow1","icon_player_cow.png",6,[0,110,130,160,190,225,265],1,5);PoingScaleIn(b)}var pos_cow2=[59,32];
function Create_Cow2(){return Shop.instance.createProgressPoint("Create_Cow2",pos_cow2[0],pos_cow2[1],{facing:FACING_LEFT,icon:"icon_player_cow.png",price:80},Callback_Cow2)}function Callback_Cow2(b){soundManager.playSound("cow");var e=Shop.instance.createCow(this.options.x+2,this.options.y,this.options.facing);e.name="Cow2";PoingScaleIn(e,1,b);b=Create_Cow3();PoingScaleIn(b);b=Create_LvlUpAnimal("Cow2","icon_player_cow.png",6,[0,145,175,220,260,290,320],1,5);PoingScaleIn(b)}var pos_cow3=[59,44];
function Create_Cow3(){return Shop.instance.createProgressPoint("Create_Cow3",pos_cow3[0],pos_cow3[1],{facing:FACING_LEFT,icon:"icon_player_cow.png",price:100},Callback_Cow3)}function Callback_Cow3(b){soundManager.playSound("cow");var e=Shop.instance.createCow(this.options.x+2,this.options.y,this.options.facing);e.name="Cow3";PoingScaleIn(e,1,b);b=Create_LvlUpAnimal("Cow3","icon_player_cow.png",6,[0,180,210,240,275,320,360],1,5);PoingScaleIn(b)}
function Create_KetchupShelf(){return Shop.instance.createProgressPoint("Create_KetchupShelf",30,3,{facing:FACING_DOWN,icon:"icon_player_ketchup_shelf.png",price:150},Callback_KetchupShelf)}function Callback_KetchupShelf(b){soundManager.playSound("furniture");var e=Shop.instance.createKetchupShelf(this.options.x+2,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_KetchupMachine();PoingScaleIn(b)}
function Create_KetchupMachine(){return Shop.instance.createProgressPoint("Create_KetchupMachine",29,15,{facing:FACING_UP,icon:"icon_player_ketchup_machine.png",price:325},Callback_KetchupMachine)}
function Callback_KetchupMachine(b){soundManager.playSound("machine");var e=Shop.instance.createKetchupMachine(this.options.x+2,this.options.y,this.options.facing);e.name="KetchupMachine";PoingScaleIn(e,1,b);b=Create_Chef1();PoingScaleIn(b);b=Create_LvlUpMachine("KetchupMachine","icon_player_ketchup_machine.png",6,[0,300,350,425,500,580,670],-2,0);PoingScaleIn(b)}
function Create_SauceShelf(){return Shop.instance.createProgressPoint("Create_SauceShelf",22,13,{facing:FACING_DOWN,icon:"icon_player_sauce_shelf.png",price:180},Callback_SauceShelf)}function Callback_SauceShelf(b){soundManager.playSound("furniture");var e=Shop.instance.createSauceShelf(this.options.x+2,this.options.y,this.options.facing);e.name="SauceShelf";PoingScaleIn(e,1,b);b=Create_SauceMachine();PoingScaleIn(b)}
function Create_SauceMachine(){return Shop.instance.createProgressPoint("Create_SauceMachine",38,12,{facing:FACING_UP,icon:"icon_player_sauce_machine.png",price:280},Callback_SauceMachine)}
function Callback_SauceMachine(b){soundManager.playSound("machine");var e=Shop.instance.createSauceMachine(this.options.x+2,this.options.y,this.options.facing);e.name="SauceMachine";PoingScaleIn(e,1,b);b=Create_BreadShelf();PoingScaleIn(b);b=Create_LvlUpMachine("SauceMachine","icon_player_sauce_machine.png",5,[0,320,350,375,450,575,700],-2,0,[],Create_LvlUpSauceMachineToLevel4);PoingScaleIn(b)}
Create_LvlUpSauceMachineToLevel4=function(){var b=Shop.instance.getElementByName("SauceMachine");soundManager.playSound("machine");soundManager.playSound("upgrade");b.increaseLevel();if(b.level>=this.options.maxLevel)return null;var e=[{name:"Create_Chef3",lock:!0}];4>b.level&&(e=[]);b=Create_LvlUpMachine("SauceMachine","icon_player_sauce_machine.png",5,[0,320,350,375,450,575,700],-2,0,e,Create_LvlUpSauceMachineToLevel4);PoingScaleIn(b)};
function Create_BreadShelf(){return Shop.instance.createProgressPoint("Create_BreadShelf",42,3,{facing:FACING_DOWN,icon:"icon_player_bread_shelf.png",price:300},Callback_BreadShelf)}function Callback_BreadShelf(b){soundManager.playSound("furniture");var e=Shop.instance.createBreadShelf(this.options.x+2,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_BreadMachine();PoingScaleIn(b)}
function Create_BreadMachine(){return Shop.instance.createProgressPoint("Create_BreadMachine",41,20,{facing:FACING_DOWN,icon:"icon_player_bread_machine.png",price:375},Callback_BreadMachine)}
function Callback_BreadMachine(b){soundManager.playSound("machine");var e=Shop.instance.createBreadMachine(this.options.x+2,this.options.y,this.options.facing);e.name="BreadMachine";PoingScaleIn(e,1,b);b=Create_ExpandGeneral3();PoingScaleIn(b);b=Create_LvlUpMachine("BreadMachine","icon_player_bread_machine.png",5,[0,500,625,700,775,830,900],-2,0,[],Create_LvlUpBreadMachineToLevel4);PoingScaleIn(b)}
Create_LvlUpBreadMachineToLevel4=function(){var b=Shop.instance.getElementByName("BreadMachine");soundManager.playSound("machine");soundManager.playSound("upgrade");b.increaseLevel();if(b.level>=this.options.maxLevel)return null;var e=[{name:"Create_Chef3",lock:!0}];4>b.level&&(e=[]);b=Create_LvlUpMachine("BreadMachine","icon_player_bread_machine.png",5,[0,500,625,700,775,830,900],-2,0,e,Create_LvlUpBreadMachineToLevel4);PoingScaleIn(b)};
function Create_MozzarellaShelf(){return Shop.instance.createProgressPoint("Create_MozzarellaShelf",62,7,{facing:FACING_DOWN,icon:"icon_player_mozzarella_shelf.png",price:350},Callback_MozzarellaShelf)}function Callback_MozzarellaShelf(b){soundManager.playSound("furniture");var e=Shop.instance.createMozzarellaShelf(this.options.x+2,this.options.y,this.options.facing);e.name="MozzarellaShelf";PoingScaleIn(e,1,b);b=Create_MozzarellaMachine();PoingScaleIn(b)}
function Create_MozzarellaMachine(){return Shop.instance.createProgressPoint("Create_MozzarellaMachine",52,17,{facing:FACING_UP,icon:"icon_player_mozzarella_machine.png",price:400},Callback_MozzarellaMachine)}
function Callback_MozzarellaMachine(b){soundManager.playSound("machine");var e=Shop.instance.createMozzarellaMachine(this.options.x+2,this.options.y,this.options.facing);e.name="MozzarellaMachine";PoingScaleIn(e,1,b);b=Create_ButterShelf();PoingScaleIn(b);b=Create_LvlUpMachine("MozzarellaMachine","icon_player_mozzarella_machine.png",6,[0,650,760,820,900,970,1E3],-2,0);PoingScaleIn(b)}
function Create_ButterShelf(){return Shop.instance.createProgressPoint("Create_ButterShelf",66,15,{facing:FACING_DOWN,icon:"icon_player_butter_shelf.png",price:350},Callback_ButterShelf)}function Callback_ButterShelf(b){soundManager.playSound("furniture");var e=Shop.instance.createButterShelf(this.options.x+2,this.options.y,this.options.facing);PoingScaleIn(e,1,b);b=Create_ButterMachine();PoingScaleIn(b)}
function Create_ButterMachine(){return Shop.instance.createProgressPoint("Create_ButterMachine",56,22,{facing:FACING_UP,icon:"icon_player_butter_machine.png",price:425},Callback_ButterMachine)}
function Callback_ButterMachine(b){soundManager.playSound("machine");var e=Shop.instance.createButterMachine(this.options.x+2,this.options.y,this.options.facing);e.name="ButterMachine";PoingScaleIn(e,1,b);b=Create_LvlUpMachine("ButterMachine","icon_player_butter_machine.png",6,[0,650,760,820,900,970,1E3],-2,0);PoingScaleIn(b)};function CompositeMesh(b,e,h,f,k,m){BABYLON.Mesh.call(this,b,e,h,f,k,m);this._meshList=[];this.isPickable=!1;this._indices=this._uvs=this._normals=this.__positions=null}CompositeMesh.prototype=Object.create(BABYLON.Mesh.prototype);CompositeMesh.prototype.constructor=CompositeMesh;
CompositeMesh.prototype.addMesh=function(b,e,h){"undefined"===typeof e&&(e=-1);"undefined"===typeof h&&(h=!0);b.setEnabled(!1);0>e&&b.hasThinInstances&&(e=b.hasThinInstances?b.thinInstanceCount:1);this._meshList.push({mesh:b,numMaxThinInstances:e,positions:b.getVerticesData("position"),normals:b.getVerticesData("normal"),uvs:b.getVerticesData("uv"),indices:b.getIndices()});h&&(this.rebuildGeometry(),this.update())};
CompositeMesh.prototype.removeMesh=function(b,e){"undefined"===typeof e&&(e=!0);for(var h=-1,f=0;f<this._meshList.length;f++)if(this._meshList[f].mesh===b){h=f;break}-1!==h&&(this._meshList[h].mesh.setEnabled(!0),this._meshList.splice(h,1),e&&(this.rebuildGeometry(),this.update()))};
CompositeMesh.prototype.rebuildGeometry=function(){for(var b=0,e=0,h=0,f=0,k=0;k<this._meshList.length;k++){var m=this._meshList[k],n=m.numMaxThinInstances||1;b+=m.positions.length*n;e+=m.normals.length*n;h+=m.uvs.length*n;f+=m.indices.length*n}this.__positions=new Float32Array(b);this._normals=new Float32Array(e);this._uvs=new Float32Array(h);this._indices=new Uint32Array(f);this.setVerticesData("position",this.__positions,!0);this.setVerticesData("normal",this._normals,!0);this.setVerticesData("uv",
this._uvs,!0);this.setIndices(this._indices,void 0,!0);this.update()};
CompositeMesh.prototype.update=function(){for(var b=0,e=0,h=0,f=0,k=new BABYLON.Vector3,m=new BABYLON.Matrix,n=new BABYLON.Vector3(Infinity,Infinity,Infinity),y=new BABYLON.Vector3(-Infinity,-Infinity,-Infinity),x=0;x<this._meshList.length;x++){var w=this._meshList[x],v=w.mesh,r=w.positions,z=w.normals,K=w.uvs,T=w.indices,R=w.numMaxThinInstances;w=v.computeWorldMatrix(!0);m.copyFrom(w);R=v.hasThinInstances?Math.min(v.thinInstanceCount,R):1;for(var L=v.thinInstanceGetWorldMatrices(),Q=0;Q<R;Q++){for(var U=
b/3,S=0;S<T.length;S++)this._indices[f++]=T[S]+U;v.hasThinInstances&&w.multiplyToRef(L[Q],m);for(S=0;S<r.length;S+=3)k.copyFromFloats(r[S],r[S+1],r[S+2]),BABYLON.Vector3.TransformCoordinatesToRef(k,m,k),this.__positions[b++]=k.x,this.__positions[b++]=k.y,this.__positions[b++]=k.z,n.minimizeInPlace(k),y.maximizeInPlace(k);for(S=0;S<z.length;S+=3)k.copyFromFloats(z[S],z[S+1],z[S+2]),BABYLON.Vector3.TransformNormalToRef(k,m,k),this._normals[e++]=k.x,this._normals[e++]=k.y,this._normals[e++]=k.z;this._uvs.set(K,
h);h+=K.length}}this.updateIndices(this._indices);this.getVertexBuffer("position").updateDirectly(this.__positions,0);this.getVertexBuffer("normal").updateDirectly(this._normals,0);this.getVertexBuffer("uv").updateDirectly(this._uvs,0);this.getBoundingInfo().reConstruct(n,y)};Particles=function(b){this.MAX_PARTICLES=100;this.objParticles=[];this._init(b);Particles.instance=this};Particles.instance=null;
Particles.prototype={constructor:Particles,_init:function(b){this.createRootPanel(b);b={tag:"",velX:0,velY:0,accX:0,accY:0,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"void.png"};for(var e=0;e<this.MAX_PARTICLES;e++)this.CreateParticle(0,0,b);for(e=0;e<this.MAX_PARTICLES;e++)this.objParticles[e].sprite.isVisible=!1},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("Particles.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=
!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipChildren=!1;this.pnlRoot.clipContent=!1;this.pnlRoot.isVisible=!0;this.pnlRoot.zIndex=1E3;b.addControl(this.pnlRoot);this.guiRoot=this.pnlRoot},CreateParticle:function(b,e,h){h.hasOwnProperty("tag")||(h.tag="");h.hasOwnProperty("frame")||(h.frame=0);h.hasOwnProperty("life")||(h.life=500+getRandomUInt(200));h.hasOwnProperty("callback")||
(h.callback=null);h.hasOwnProperty("velX")||(h.velX=0);h.hasOwnProperty("velY")||(h.velY=0);h.hasOwnProperty("accX")||(h.accX=0);h.hasOwnProperty("accY")||(h.accY=0);h.hasOwnProperty("rotation")||(h.rotation=0);h.hasOwnProperty("angle")||(h.angle=0);h.hasOwnProperty("scale")?(h.scale.hasOwnProperty("start")||(h.scale.start=1),h.scale.hasOwnProperty("end")||(h.scale.end=h.scale.start)):h.scale={start:1,end:1};h.scale.delta=h.scale.start-h.scale.end;h.hasOwnProperty("scaleX")&&(h.scaleX.hasOwnProperty("start")||
(h.scaleX.start=1),h.scaleX.hasOwnProperty("end")||(h.scaleX.end=h.scaleX.start),h.scaleX.delta=h.scaleX.start-h.scaleX.end);h.hasOwnProperty("scaleY")&&(h.scaleY.hasOwnProperty("start")||(h.scaleY.start=1),h.scaleY.hasOwnProperty("end")||(h.scaleY.end=h.scaleX.start),h.scaleY.delta=h.scaleY.start-h.scaleY.end);h.hasOwnProperty("alpha")?(h.alpha.hasOwnProperty("start")||(h.alpha.start=1),h.alpha.hasOwnProperty("end")||(h.alpha.end=h.alpha.start)):h.alpha={start:1,end:1};h.alpha.delta=h.alpha.start-
h.alpha.end;for(var f=null,k=0;k<this.objParticles.length&&null==f;k++)this.objParticles[k].sprite.isVisible||(f=this.objParticles[k],SetImageFromSpritesheet(this.objParticles[k].sprite,AssetLoader.instance.loadedImages[h.texturePackImage],AssetLoader.instance.loadedJSONs[h.texturePackData].frames,h.frameName));if(null===f){if(this.objParticles.length==this.MAX_PARTICLES)return null;f=this.objParticles[this.objParticles.length]={};f.sprite=new BABYLON.GUI.Image("Particles"+(this.objParticles.length-
1));f.sprite.transformCenterX=.5;f.sprite.transformCenterY=.5;this.guiRoot.addControl(f.sprite);SetImageFromSpritesheet(f.sprite,AssetLoader.instance.loadedImages[h.texturePackImage],AssetLoader.instance.loadedJSONs[h.texturePackData].frames,h.frameName)}f.sprite.isVisible=!0;f.sprite.alpha=h.alpha.start;f.sprite.rotation=h.angle;f.sprite.leftInPixels=b;f.sprite.topInPixels=e;f.sprite.scaleX=1;f.sprite.scaleY=1;f.data=h;f.data.lifeInit=h.life;f.sprite.scaleX=f.data.scale.start;f.sprite.scaleY=f.data.scale.start;
f.data.hasOwnProperty("scaleX")&&(f.sprite.scaleX=f.data.scaleX.start);f.data.hasOwnProperty("scaleY")&&(f.sprite.scaleY=f.data.scaleY.start);return f},Reset:function(){for(var b=0;b<this.objParticles.length;b++)this.objParticles[b].sprite.isVisible=!1},GetActiveCount:function(b){b=b||null;for(var e=0,h=0;h<this.objParticles.length;h++)(null==b||this.objParticles[h].data.tag==b)&&this.objParticles[h].sprite.isVisible&&0<this.objParticles[h].data.life&&e++;return e},Update:function(){for(var b=0;b<
this.objParticles.length;b++)if(this.objParticles[b].sprite.isVisible){var e=activeScene.deltaTime,h=e/16.6666;this.objParticles[b].data.life-=e;0>=this.objParticles[b].data.life?(this.objParticles[b].sprite.isVisible=!1,null!=this.objParticles[b].data.callback&&this.objParticles[b].data.callback(this.objParticles[b])):(this.objParticles[b].sprite.alpha=this.objParticles[b].data.alpha.start-this.objParticles[b].data.alpha.delta+this.objParticles[b].data.life/this.objParticles[b].data.lifeInit*this.objParticles[b].data.alpha.delta,
e=this.objParticles[b].data.scale.start-this.objParticles[b].data.scale.delta+this.objParticles[b].data.life/this.objParticles[b].data.lifeInit*this.objParticles[b].data.scale.delta,this.objParticles[b].sprite.scaleX=e,this.objParticles[b].sprite.scaleY=e,this.objParticles[b].data.hasOwnProperty("scaleX")&&(this.objParticles[b].sprite.scaleX=this.objParticles[b].data.scaleX.start-this.objParticles[b].data.scaleX.delta+this.objParticles[b].data.life/this.objParticles[b].data.lifeInit*this.objParticles[b].data.scaleX.delta),
this.objParticles[b].data.hasOwnProperty("scaleY")&&(this.objParticles[b].sprite.scaleY=this.objParticles[b].data.scaleY.start-this.objParticles[b].data.scaleY.delta+this.objParticles[b].data.life/this.objParticles[b].data.lifeInit*this.objParticles[b].data.scaleY.delta),this.objParticles[b].data.hasOwnProperty("frames"),this.objParticles[b].sprite.rotation+=this.objParticles[b].data.rotation*h,this.objParticles[b].sprite.leftInPixels+=this.objParticles[b].data.velX*h,this.objParticles[b].sprite.topInPixels+=
this.objParticles[b].data.velY*h,this.objParticles[b].data.velX+=this.objParticles[b].data.accX*h,this.objParticles[b].data.velY+=this.objParticles[b].data.accY*h)}},Destroy:function(){for(var b=0;b<this.objParticles.length;b++)this.objParticles[b].sprite.dispose(),this.objParticles[b].sprite=null,this.objParticles[b]=null;this.objParticles=null},CreateTwinkle:function(b,e,h){tmpX=getRandomIntInRange(-100,100)/3;tmpY=getRandomUIntInRange(50,100)/30;var f=.7*(1+(5+getRandomUInt(5))/10);getRandomUInt(5);
h={velX:0,velY:0,accX:0,accY:0>=tmpY?.01:-.01,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"particle_star.png",rotation:0>=tmpX?-.01:.01,scale:{start:f,end:0},alpha:{start:0,end:1},life:h};this.CreateParticle(b+3*getRandomIntInRange(-5,5),e+3*getRandomIntInRange(-5,5),h)},CreateSpawnStars:function(b,e,h,f){void 0===f&&(f=null);for(h=(h||10)-1;0<=h;h--){tmpX=getRandomIntInRange(-100,100)/70;tmpY=getRandomIntInRange(-100,100)/60;var k=getRandomUInt(50)/100,m=null;0==h&&(m=f);k=
{velX:tmpX,velY:tmpY,accX:0>=tmpX?.01:-.01,accY:0>=tmpY?.01:-.01,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"icon_swap_star.png",rotation:0>=tmpX?.04:-.04,scale:{start:.1*Resolution.SCALE,end:(1.2-k)*Resolution.SCALE},alpha:{start:.95,end:.1},life:650+30*getRandomUInt(10),callback:m};this.CreateParticle(b,e,k)}},CreateFallingCash:function(b,e,h){tmpX=getRandomIntInRange(-100,100)/3;tmpY=getRandomUIntInRange(50,100)/30;h=(2+getRandomInt(5)/10)/3.3;getRandomUInt(5);h={velX:0,
velY:tmpY,accX:0,accY:0,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"particle_fall_money.png",rotation:0>=tmpX?-.01:.01,scale:{start:h,end:h},alpha:{start:1,end:0},life:4500+10*getRandomIntInRange(-50,50)};this.CreateParticle(b+3*getRandomIntInRange(-5,5),e+3*getRandomIntInRange(-5,5),h)},CreateFinalStars:function(b,e,h,f){void 0===f&&(f=null);for(h=(h||10)-1;0<=h;h--){tmpX=getRandomIntInRange(-100,100)/40;tmpY=getRandomIntInRange(-100,100)/40;var k=getRandomUInt(50)/100,m=null;
0==h&&(m=f);k={velX:tmpX,velY:tmpY,accX:0>=tmpX?.01:-.01,accY:0>=tmpY?.01:-.01,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"particle_star.png",rotation:0>=tmpX?.04:-.04,scale:{start:.2*Resolution.SCALE,end:(2.5-k)*Resolution.SCALE},alpha:{start:.9,end:0},life:250+30*getRandomUInt(10),callback:m};this.CreateParticle(b,e,k)}},CreateMoneySpent:function(b,e,h,f){void 0===f&&(f=null);for(h=(h||10)-1;0<=h;h--){tmpX=getRandomIntInRange(-100,100)/70;tmpY=getRandomIntInRange(-100,-50)/
40;var k=getRandomUInt(50)/100,m=null;0==h&&(m=f);k={velX:tmpX,velY:tmpY,accX:0>=tmpX?.01:-.01,accY:.2,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"coin.png",rotation:0>=tmpX?.04:-.04,scale:{start:.8*Resolution.SCALE,end:(1-k)*Resolution.SCALE},alpha:{start:1,end:0},life:450+30*getRandomUInt(10),callback:m};this.CreateParticle(b,e,k)}},CreateMergeEffect:function(b,e,h,f,k){void 0===k&&(k=null);for(f=(f||10)-1;0<=f;f--){tmpX=getRandomIntInRange(-100,100)/70;tmpY=getRandomIntInRange(-100,
100)/70;var m=getRandomUInt(50)/500,n=null;0==f&&(n=k);m={velX:tmpX,velY:tmpY,accX:0>=tmpX?.04:-.04,accY:0>=tmpY?.04:-.04,texturePackImage:"objects.png",texturePackData:"objects.json",frameName:h,rotation:0>=tmpX?.02:-.02,scale:{start:.5*Resolution.SCALE,end:(.6-m)*Resolution.SCALE},alpha:{start:.9,end:0},life:250+30*getRandomUInt(10),callback:n};this.CreateParticle(b,e,m)}},CreateExplosionEffect:function(b,e,h,f,k){void 0===k&&(k=null);for(f=(f||10)-1;0<=f;f--){tmpX=getRandomIntInRange(-100,100)/
70;tmpY=getRandomIntInRange(-100,100)/70;var m=getRandomUInt(50)/500,n=null;0==f&&(n=k);m={velX:tmpX,velY:tmpY,accX:0>=tmpX?.04:-.04,accY:0>=tmpY?.04:-.04,texturePackImage:"objects.png",texturePackData:"objects.json",frameName:h,rotation:0>=tmpX?.02:-.02,scale:{start:1.2*Resolution.SCALE,end:(.6-m)*Resolution.SCALE},alpha:{start:.9,end:0},life:350+30*getRandomUInt(10),callback:n};this.CreateParticle(b,e,m)}},CreateVehicleSmoke:function(b,e,h,f){void 0===f&&(f=null);for(h=(h||1)-1;0<=h;h--){tmpX=getRandomIntInRange(-100,
100)/120;tmpY=getRandomIntInRange(-100,100)/120;getRandomUInt(50);var k=null;0==h&&(k=f);k={velX:0,velY:0,accX:0,accY:0,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"exhaust_particle_"+(getRandomUInt(6)+1)+".png",rotation:0>=tmpX?.03:-.03,scale:{start:.8*Resolution.SCALE,end:.3*Resolution.SCALE},alpha:{start:1,end:1},life:220+2*getRandomUInt(10),callback:k};var m=b+getRandomIntInRange(-3,3),n=e+getRandomIntInRange(-3,3);this.CreateParticle(m,n,k)}},CreateParticle1:function(b,
e,h,f,k,m){void 0===m&&(m=1);return this.CreateParticle(b,e,{velX:0,velY:-.5,accX:0,accY:.01,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:h,rotation:0,scale:{start:.9*Resolution.SCALE,end:.9*Resolution.SCALE},alpha:{start:1*m,end:.7*m},life:750})}};
function getAbsoluteGuiPositionLeft(b){var e=0;"root"!=b.parent.name&&(e=getAbsoluteGuiPositionLeft(b.parent));if(b.horizontalAlignment==BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER)return e+b.leftInPixels*b.parent.scaleX;if(b.horizontalAlignment==BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT)return e-b._cachedParentMeasure.width/2*b.parent.scaleX+b.leftInPixels*b.parent.scaleX;if(b.horizontalAlignment==BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT)return e+b._cachedParentMeasure.width/2*b.parent.scaleX+
b.leftInPixels*b.parent.scaleX}
function getAbsoluteGuiPositionTop(b){var e=0;"root"!=b.parent.name&&(e=getAbsoluteGuiPositionTop(b.parent));if(b.verticalAlignment==BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER)return e+b.topInPixels*b.parent.scaleY;if(b.verticalAlignment==BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP)return e-engine.getRenderHeight()/2+b.topInPixels*b.parent.scaleY;if(b.verticalAlignment==BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM)return e+engine.getRenderHeight()/2+b.topInPixels*b.parent.scaleY};TextParticles=function(b){this.MAX_PARTICLES=3;this.objTextParticles=[];this._init(b);TextParticles.instance=this};TextParticles.instance=null;
TextParticles.prototype={constructor:TextParticles,_init:function(b){this.createRootPanel(b);b={tag:"",velX:0,velY:0,accX:0,accY:0};for(var e=0;e<this.MAX_PARTICLES;e++)this.CreateTextParticle(0,0,"DUMMY",b);for(e=0;e<this.MAX_PARTICLES;e++)this.objTextParticles[e].sprite.isVisible=!1},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("TextParticles.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=
!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipChildren=!1;this.pnlRoot.clipContent=!1;this.pnlRoot.isVisible=!0;b.addControl(this.pnlRoot);this.guiRoot=this.pnlRoot},CreateTextParticle:function(b,e,h,f){f.hasOwnProperty("tag")||(f.tag="");f.hasOwnProperty("fontFamily")||(f.fontFamily="gamefont");f.hasOwnProperty("fontSize")||(f.fontSize=20);f.hasOwnProperty("shadowColor")||(f.shadowColor=TEXT_SHADOWS_ENABLED?"rgba(80,80,80,0.5)":
"rgba(80,80,80,0)");f.hasOwnProperty("outlineWidth")||(f.outlineWidth=0);f.hasOwnProperty("outlineColor")||(f.outlineColor="rgba(80,80,80,0)");f.hasOwnProperty("shadowOffsetX")||(f.shadowOffsetX=0);f.hasOwnProperty("shadowOffsetY")||(f.shadowOffsetY=0);f.hasOwnProperty("shadowBlur")||(f.shadowBlur=0);f.hasOwnProperty("life")||(f.life=500+getRandomUInt(200));f.hasOwnProperty("velX")||(f.velX=0);f.hasOwnProperty("velY")||(f.velY=0);f.hasOwnProperty("accX")||(f.accX=0);f.hasOwnProperty("accY")||(f.accY=
0);f.hasOwnProperty("rotation")||(f.rotation=0);f.hasOwnProperty("scale")||(f.scale={start:1,end:1});f.hasOwnProperty("horizontalAlignment")||(f.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER);f.hasOwnProperty("verticalAlignment")?(f.scale.hasOwnProperty("start")||(f.scale.start=1),f.scale.hasOwnProperty("end")||(f.scale.end=f.scale.start)):f.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.scale.delta=f.scale.start-f.scale.end;f.hasOwnProperty("alpha")?(f.alpha.hasOwnProperty("start")||
(f.alpha.start=1),f.alpha.hasOwnProperty("end")||(f.alpha.end=f.alpha.start)):f.alpha={start:1,end:1};f.alpha.delta=f.alpha.start-f.alpha.end;for(var k=null,m=0;m<this.objTextParticles.length&&null==k;m++)this.objTextParticles[m].sprite.isVisible||(k=this.objTextParticles[m],k.sprite.text=h,k.sprite.fontStyle=f.style);null===k&&(k=this.objTextParticles[this.objTextParticles.length]={},k.sprite=new BABYLON.GUI.TextBlock("textParticle"),k.sprite.transformCenterX=.5,k.sprite.transformCenterY=.5,k.sprite.textWrapping=
!1,k.sprite.leftInPixels=-1E4,k.sprite.topInPixels=-1E4,k.sprite.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,k.sprite.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER,k.sprite.isPointerBlocker=!1,k.sprite.isHitTestVisible=!1,this.guiRoot.addControl(k.sprite));m=k.sprite.parent;m.removeControl(k.sprite);m.addControl(k.sprite);k.sprite.outlineWidth=f.outlineWidth;k.sprite.outlineColor=f.outlineColor;k.sprite.shadowOffsetX=f.shadowOffsetX;k.sprite.shadowOffsetY=
f.shadowOffsetY;k.sprite.shadowColor=f.shadowColor;k.sprite.shadowBlur=f.shadowBlur;k.sprite.fontFamily=f.fontFamily;k.sprite.fontSize=f.fontSize;k.sprite.textHorizontalAlignment=f.horizontalAlignment;k.sprite.textVerticalAlignment=f.verticalAlignment;k.sprite.color=f.color;k.sprite.text=h;k.sprite.alpha=f.alpha.start;k.sprite.angle=0;k.sprite.leftInPixels=b;k.sprite.topInPixels=e;k.sprite.scaleX=k.sprite.scaleY=1;k.data=f;k.data.lifeInit=f.life;k.sprite.isVisible=!0;k.sprite._resetFontCache();0<
f.tag.length&&LOG("TILES : "+Particles.instance.GetActiveCount(f.tag));return k},Reset:function(){for(var b=0;b<this.objTextParticles.length;b++)this.objTextParticles[b].sprite.isVisible=!1},GetActiveCount:function(b){b=b||null;for(var e=0,h=0;h<this.objTextParticles.length;h++)(null==b||this.objTextParticles[h].data.tag==b)&&this.objTextParticles[h].sprite.isVisible&&0<this.objTextParticles[h].data.life&&e++;return e},Update:function(){for(var b=0;b<this.objTextParticles.length;b++)this.objTextParticles[b].sprite.isVisible&&
(this.objTextParticles[b].data.life-=activeScene.deltaTime,0>=this.objTextParticles[b].data.life?this.objTextParticles[b].sprite.isVisible=!1:(this.objTextParticles[b].sprite.alpha=this.objTextParticles[b].data.alpha.start-this.objTextParticles[b].data.alpha.delta+this.objTextParticles[b].data.life/this.objTextParticles[b].data.lifeInit*this.objTextParticles[b].data.alpha.delta,this.objTextParticles[b].sprite.scaleX=this.objTextParticles[b].sprite.scaleY=this.objTextParticles[b].data.scale.start-
this.objTextParticles[b].data.scale.delta+this.objTextParticles[b].data.life/this.objTextParticles[b].data.lifeInit*this.objTextParticles[b].data.scale.delta,this.objTextParticles[b].sprite.rotation+=this.objTextParticles[b].data.rotation,this.objTextParticles[b].sprite.leftInPixels+=this.objTextParticles[b].data.velX*activeScene.getCpuSpeedMul()*Resolution.SCALE,this.objTextParticles[b].sprite.topInPixels+=this.objTextParticles[b].data.velY*activeScene.getCpuSpeedMul()*Resolution.SCALE,this.objTextParticles[b].data.velX+=
this.objTextParticles[b].data.accX,this.objTextParticles[b].data.velY+=this.objTextParticles[b].data.accY))},Destroy:function(){for(var b=0;b<this.objTextParticles.length;b++)this.objTextParticles[b].sprite.dispose(),this.objTextParticles[b].sprite=null,this.objTextParticles[b]=null;this.objTextParticles=null},CreateTextParticle1:function(b,e,h,f,k,m){void 0===m&&(m=1);return this.CreateTextParticle(b,e,h,{velX:0,velY:-.5,accX:0,accY:.01,fontSize:f*Resolution.SCALE,color:k,outlineColor:"#000000",
outlineWidth:3.3*Resolution.SCALE,rotation:0,scale:{start:1,end:1},alpha:{start:1*m,end:.7*m},horizontalAlignment:BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,life:750})}};FlyingSprites=function(b){this.MAX_SPRITES=50;this.objSprites=[];this._init(b);FlyingSprites.instance=this};FlyingSprites.instance=null;
FlyingSprites.prototype={constructor:FlyingSprites,_init:function(b){this.createRootPanel(b);b={tag:"",destX:0,destY:0,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"void.png"};for(var e=0;e<this.MAX_SPRITES;e++)this.CreateFlyingSprite(0,0,b);for(e=0;e<this.MAX_SPRITES;e++)this.objSprites[e].sprite.isVisible=!1},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("FlyingSprites.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=
!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipChildren=!1;this.pnlRoot.clipContent=!1;this.pnlRoot.isVisible=!0;b.addControl(this.pnlRoot);this.guiRoot=this.pnlRoot},CreateFlyingSprite:function(b,e,h){h.startX=b;h.startY=e;h.deltaX=h.destX-h.startX;h.deltaY=h.destY-h.startY;h.hasOwnProperty("tag")||(h.tag="");h.hasOwnProperty("easingFunc")||(h.easingFunc=easeInSine);h.hasOwnProperty("callback")||
(h.callback=null);h.hasOwnProperty("frame")||(h.frame=0);h.hasOwnProperty("life")||(h.life=500+getRandomUInt(200));h.hasOwnProperty("rotation")||(h.rotation=0);h.hasOwnProperty("angle")||(h.angle=0);h.hasOwnProperty("scale")?(h.scale.hasOwnProperty("start")||(h.scale.start=1),h.scale.hasOwnProperty("end")||(h.scale.end=h.scale.start)):h.scale={start:1,end:1};h.scale.delta=h.scale.start-h.scale.end;h.hasOwnProperty("scaleX")&&(h.scaleX.hasOwnProperty("start")||(h.scaleX.start=1),h.scaleX.hasOwnProperty("end")||
(h.scaleX.end=h.scaleX.start),h.scaleX.delta=h.scaleX.start-h.scaleX.end);h.hasOwnProperty("scaleY")&&(h.scaleY.hasOwnProperty("start")||(h.scaleY.start=1),h.scaleY.hasOwnProperty("end")||(h.scaleY.end=h.scaleX.start),h.scaleY.delta=h.scaleY.start-h.scaleY.end);h.hasOwnProperty("alpha")?(h.alpha.hasOwnProperty("start")||(h.alpha.start=1),h.alpha.hasOwnProperty("end")||(h.alpha.end=h.alpha.start)):h.alpha={start:1,end:1};h.alpha.delta=h.alpha.start-h.alpha.end;for(var f=null,k=0;k<this.objSprites.length&&
null==f;k++)this.objSprites[k].sprite.isVisible||(f=this.objSprites[k],SetImageFromSpritesheet(this.objSprites[k].sprite,AssetLoader.instance.loadedImages[h.texturePackImage],AssetLoader.instance.loadedJSONs[h.texturePackData].frames,h.frameName));if(null===f){if(this.objSprites.length==this.MAX_SPRITES)return null;f=this.objSprites[this.objSprites.length]={};f.sprite=new BABYLON.GUI.Image("FlyingSprites"+(this.objSprites.length-1));f.sprite.transformCenterX=.5;f.sprite.transformCenterY=.5;this.guiRoot.addControl(f.sprite);
SetImageFromSpritesheet(f.sprite,AssetLoader.instance.loadedImages[h.texturePackImage],AssetLoader.instance.loadedJSONs[h.texturePackData].frames,h.frameName)}f.sprite.isVisible=!0;f.sprite.alpha=h.alpha.start;f.sprite.rotation=h.angle;f.sprite.leftInPixels=b;f.sprite.topInPixels=e;f.sprite.scaleX=1;f.sprite.scaleY=1;f.data=h;f.data.lifeInit=h.life;f.sprite.scaleX=f.data.scale.start;f.sprite.scaleY=f.data.scale.start;f.data.hasOwnProperty("scaleX")&&(f.sprite.scaleX=f.data.scaleX.start);f.data.hasOwnProperty("scaleY")&&
(f.sprite.scaleY=f.data.scaleY.start);return f},Reset:function(){for(var b=0;b<this.objSprites.length;b++)this.objSprites[b].sprite.isVisible=!1},GetActiveCount:function(b){b=b||null;for(var e=0,h=0;h<this.objSprites.length;h++)(null==b||this.objSprites[h].data.tag==b)&&this.objSprites[h].sprite.isVisible&&0<this.objSprites[h].data.life&&e++;return e},Update:function(){for(var b=0;b<this.objSprites.length;b++)if(this.objSprites[b].sprite.isVisible){var e=activeScene.deltaTime,h=e/16.6666;this.objSprites[b].data.life-=
e;if(0>=this.objSprites[b].data.life)this.objSprites[b].sprite.isVisible=!1,null!=this.objSprites[b].data.callback&&this.objSprites[b].data.callback(this.objSprites[b]);else{e=this.objSprites[b].data.life/this.objSprites[b].data.lifeInit;this.objSprites[b].sprite.alpha=this.objSprites[b].data.alpha.start-this.objSprites[b].data.alpha.delta+e*this.objSprites[b].data.alpha.delta;var f=this.objSprites[b].data.scale.start-this.objSprites[b].data.scale.delta+e*this.objSprites[b].data.scale.delta;this.objSprites[b].sprite.scaleX=
f;this.objSprites[b].sprite.scaleY=f;this.objSprites[b].data.hasOwnProperty("scaleX")&&(this.objSprites[b].sprite.scaleX=this.objSprites[b].data.scaleX.start-this.objSprites[b].data.scaleX.delta+e*this.objSprites[b].data.scaleX.delta);this.objSprites[b].data.hasOwnProperty("scaleY")&&(this.objSprites[b].sprite.scaleY=this.objSprites[b].data.scaleY.start-this.objSprites[b].data.scaleY.delta+e*this.objSprites[b].data.scaleY.delta);this.objSprites[b].data.hasOwnProperty("frames");this.objSprites[b].sprite.rotation+=
this.objSprites[b].data.rotation*h;this.objSprites[b].sprite.leftInPixels=this.objSprites[b].data.startX+this.objSprites[b].data.easingFunc(1-e)*this.objSprites[b].data.deltaX;this.objSprites[b].sprite.topInPixels=this.objSprites[b].data.startY+this.objSprites[b].data.easingFunc(1-e)*this.objSprites[b].data.deltaY}}},Destroy:function(){for(var b=0;b<this.objSprites.length;b++)this.objSprites[b].sprite.dispose(),this.objSprites[b].sprite=null,this.objSprites[b]=null;this.objSprites=null},CreateEarnedTrophy:function(b,
e,h,f){void 0===f&&(f=null);getRandomIntInRange(-100,100);h={destX:b,destY:e,texturePackImage:"pak2.png",texturePackData:"pak2.json",frameName:"icon_instructions_trophy_small.png",scale:{start:.9*Resolution.SCALE,end:.7*Resolution.SCALE},alpha:{start:1,end:.5},life:h+10*getRandomInt(20),callback:f};this.CreateFlyingSprite(b+10*getRandomInt(5),e+10*getRandomInt(5)+100,h)},CreateFlyingEarnedCoin:function(b,e,h,f,k,m,n,y){void 0===y&&(y=null);getRandomIntInRange(-100,100);h={destX:h,destY:f,texturePackImage:"pak1.png",
texturePackData:"pak1.json",frameName:"coin_button.png",rotation:.04,scale:{start:n*Resolution.SCALE,end:.7*Resolution.SCALE},alpha:{start:1,end:1},life:m+30*getRandomUInt(10),amount:k,callback:y};return this.CreateFlyingSprite(b,e,h)},CreateFlyingGift:function(b,e,h,f,k,m,n){void 0===n&&(n=null);getRandomIntInRange(-100,100);h={destX:h,destY:f,texturePackImage:"objects.png",texturePackData:"objects.json",frameName:EventColor+"_gift.png",rotation:.04,scale:{start:.5*Resolution.SCALE,end:.3*Resolution.SCALE},
alpha:{start:1,end:.7},life:m+30*getRandomUInt(10),amount:k,callback:n};return this.CreateFlyingSprite(b,e,h)},CreateFlyingBooster:function(b,e,h,f,k,m,n){void 0===n&&(n=null);getRandomIntInRange(-100,100);b={destX:f,destY:k,texturePackImage:"pak1.png",texturePackData:"pak1.json",frameName:"booster_"+b+".png",rotation:.04,scale:{start:.8*Resolution.SCALE,end:.3*Resolution.SCALE},alpha:{start:1,end:.7},life:m+30*getRandomUInt(10),booster:b,callback:n};return this.CreateFlyingSprite(e,h,b)}};const COLLISION_NONE=0,COLLISION_WALL=1;Collisions=function(b,e){this._init(b,e);Collisions.instance=this};Collisions.instance=null;
Collisions.prototype={constructor:Collisions,_init:function(b,e){this._textureSize=4096;this._sizeX=b;this._sizeY=e;this.resetGrid();this.pfGrid=new PF.Grid(this._sizeX,this._sizeY);this.pathFinder=new PF.AStarFinder({allowDiagonal:!0,dontCrossCorners:!0});this._createDebugObject()},resetGrid:function(){this.grid=[];for(let b=0;b<this._sizeY;b++){let e=[];for(let h=0;h<this._sizeX;h++)e.push(0);this.grid.push(e)}},_createDebugObject:function(){DEBUG_COLLISIONS&&(this.textureCollisionGround=new BABYLON.DynamicTexture("dynamic texture",
this._textureSize,activeScene.scene,!0),this.materialCollisionGround=new BABYLON.StandardMaterial("materialCollisionGround",activeScene.scene),this.materialCollisionGround.diffuseTexture=this.textureCollisionGround,this.materialCollisionGround.specularColor=new BABYLON.Color3(0,0,0),this.materialCollisionGround.backFaceCulling=!1,this.collisionGround=BABYLON.Mesh.CreateGround("Collisions.collisionGround",this._sizeX,this._sizeY,1,activeScene.scene),this.collisionGround.material=this.materialCollisionGround,
this.collisionGround.layerMask=LAYER_SCREEN_GAME,this._updateGroundTexture())},_updateGroundTexture:function(){if(DEBUG_COLLISIONS){var b=this.textureCollisionGround.getContext(),e=this.textureCollisionGround.getSize();b.fillStyle="#a1a1a1";b.fillRect(0,0,e.width,e.height);b.fillStyle="#7942ee";for(var h=Math.floor(e.height/this._sizeY),f=Math.floor(e.width/this._sizeX),k=0;k<this._sizeY;k++)for(var m=0;m<this._sizeX;m++){var n=this.getCellValue(m,k);0!=n&&(b.fillStyle="#7942ee",1<n&&(b.fillStyle=
"#fffb00"),b.fillRect(m*f,k*h,f,h))}b.strokeStyle="#939393";for(m=1;m<this._sizeX;m++)b.beginPath(),b.moveTo(m*f,0),b.lineTo(m*f,e.height),b.stroke();for(k=1;k<this._sizeY;k++)b.beginPath(),b.moveTo(0,k*h),b.lineTo(e.width,k*h),b.stroke();this.textureCollisionGround.update(!0)}},_isValidCell:function(b,e){return 0<=e&&e<this.grid.length&&0<=b&&b<this.grid[0].length},setCellValue:function(b,e,h){if(!this._isValidCell(b,e))return!1;this.grid[e][b]=h;h==COLLISION_NONE&&this.pfGrid.setWalkableAt(b,e,
!0);h==COLLISION_WALL&&this.pfGrid.setWalkableAt(b,e,!1);this._updateGroundTexture();return!0},getCellValue:function(b,e){return this._isValidCell(b,e)?this.grid[e][b]:-1},inCollision:function(b,e){return this._isValidCell(b,e)?this.grid[e][b]==COLLISION_WALL:!0},setCellValueAtPosition:function(b,e){var h=this._positionToGridX(b.x);b=this._positionToGridY(b.z);this.setCellValue(h,b,e)},getCellValueAtPosition:function(b){var e=this._positionToGridX(b.x);b=this._positionToGridY(b.z);return this.getCellValue(e,
b)},_positionToGridX:function(b){return Math.floor(b+this._sizeX/2)},_positionToGridY:function(b){return Math.floor(this._sizeY/2-b)},_gridToPositionX:function(b){return b-this._sizeX/2+.5},_gridToPositionY:function(b){return this._sizeY/2-b-.5},getGridPathFromA2B:function(b,e,h,f){var k=this.pfGrid.clone();b=this.pathFinder.findPath(b,e,h,f,k);0==b.length&&b.push([h,f]);return b},getPathFromA2B:function(b,e,h,f){b=this._positionToGridX(b);e=this._positionToGridY(e);h=this._positionToGridX(h);f=this._positionToGridY(f);
b=this.getGridPathFromA2B(b,e,h,f);for(e=0;e<b.length;e++)b[e][0]=this._gridToPositionX(b[e][0]),b[e][1]=this._gridToPositionY(b[e][1]);return b}};const DURATION_ITEM_PICKUP=100,DURATION_ITEM_STORE=100,PLAYER_TYPE_PLAYER=0,PLAYER_TYPE_BUYER=1,PLAYER_TYPE_CASHIER=2,PLAYER_TYPE_FARMER=3,PLAYER_TYPE_ASSISTENT=4,PLAYER_TYPE_GENERAL=5,PLAYER_TYPE_CHEF=6,PLAYER_STATE_IDLE=0,PLAYER_STATE_THROW_PRODUCT=1,PLAYER_STATE_PICKUP_PRODUCT=2,PLAYER_STATE_STORE_PRODUCT=3,PLAYER_STATE_PICKUP_FOOD=4,PLAYER_STATE_STORE_FOOD=5,PLAYER_STATE_CHECKING=6,PLAYER_STATE_LEAVING=7;var MAN_SCALE=.33,MAN_SPEED_MUL=.09;
const ITEM_TYPES_ASSISTENT=["tomato","egg","wheat","carrot","milk"],ITEM_TYPES_GENERAL="ketchup flour sauce bread mozzarela butter".split(" "),ITEM_TYPES_FARMER=["egg","milk"],ITEM_TYPES_CHEF="sauce ketchup flour butter bread mozzarella".split(" ");Player=function(b,e,h){this._init(b,e,h)};Player.labelTexture=null;
Player.prototype={constructor:Player,_init:function(b,e,h){this.pressedRight=this.pressedLeft=this.pressedDown=this.pressedUp=!1;this.items=[];this.itemsTypes=[];this.itemsToBuy=[];this.itemsToBuyTypes=[];this.moving=!1;this.playerLevel=0;this.baseSpeed=1;this.baseCapacity=3;this.ready=!0;this.playerType=h;this.playerState=PLAYER_STATE_IDLE;this.idleTimer=1;this.badMood=0;this.shopObjectPosIdx=this.customerType=-1;this.selectedShopObject=null;this.canBuyProducts=this.canProvideFood=this.canSellProducts=
this.canStoreProducts=this.markedForDelete=!1;this.playerType==PLAYER_TYPE_PLAYER?(this.canProvideFood=this.canSellProducts=this.canStoreProducts=!0,this.canBuyProducts=!1):this.playerType==PLAYER_TYPE_BUYER?(this.canProvideFood=this.canSellProducts=this.canStoreProducts=!1,this.canBuyProducts=!0):this.playerType==PLAYER_TYPE_ASSISTENT?(this.canStoreProducts=!0,this.canBuyProducts=this.canProvideFood=this.canSellProducts=!1):this.playerType==PLAYER_TYPE_FARMER?(this.canSellProducts=this.canStoreProducts=
!1,this.canProvideFood=!0,this.canBuyProducts=!1):this.playerType==PLAYER_TYPE_GENERAL?(this.canStoreProducts=!0,this.canSellProducts=!1,this.canProvideFood=!0,this.canBuyProducts=!1):this.playerType==PLAYER_TYPE_CHEF&&(this.canStoreProducts=!0,this.canSellProducts=!1,this.canProvideFood=!0,this.canBuyProducts=!1);Object.defineProperty(this,"position",{get:function(){return this.model_player.position},set:function(f){this.model_player.position=f},enumerable:!0,configurable:!0});Object.defineProperty(this,
"absolutePosition",{get:function(){return this.model_player.absolutePosition},set:function(f){this.model_player.setAbsolutePosition(f)},enumerable:!0,configurable:!0});Object.defineProperty(this,"playerSpeed",{get:function(){var f=this.baseSpeed;if(this.playerType==PLAYER_TYPE_PLAYER){for(var k=2;k<=this.playerLevel;k+=2)this.playerLevel>=k&&(f+=.2);0<=ActiveOfferTypes.indexOf("speed")&&(f*=2)}else 2<=this.playerLevel&&(f+=.2),4<=this.playerLevel&&(f+=.2),5<=this.playerLevel&&(f+=.2),6<=this.playerLevel&&
(f+=.2);return f},enumerable:!0,configurable:!0});Object.defineProperty(this,"playerCapacity",{get:function(){var f=this.baseCapacity;if(this.playerType==PLAYER_TYPE_PLAYER){for(var k=1;k<=this.playerLevel;k+=2)this.playerLevel>=k&&(f+=1);0<=ActiveOfferTypes.indexOf("capacity")&&(f*=2)}else 1<=this.playerLevel&&(f+=1),3<=this.playerLevel&&(f+=1);return f},enumerable:!0,configurable:!0});h==PLAYER_TYPE_BUYER?(this.model=spawnModel(this.rootNode,"customer"),this.model.layerMask=LAYER_SCREEN_GAME,this.animationGroups=
this.model.animationGroups,this.model_player=this.model.rootNodes[0],this.model_cart=traverseFindChildNodeByName(this.model.rootNodes[0],"customer_cart"),this.model_cart.isVisible=!0,this.model_cart.setEnabled(!0)):(this.model=spawnModel(this.rootNode,h==PLAYER_TYPE_PLAYER?"man_skins":"man"),this.model_player=this.model.rootNodes[0],this.model_player.layerMask=LAYER_SCREEN_GAME,this.model_player.isVisible=!0,this.model_player.scaling=v3(MAN_SCALE,MAN_SCALE,MAN_SCALE),this.animationGroups=this.model.animationGroups,
this.model_cart=null,traverseSetAttrib(this.model.rootNodes[0],"isVisible",!1),h==PLAYER_TYPE_PLAYER&&this.setPlayerSkin(PlayerSkin),h==PLAYER_TYPE_CHEF&&(this.playerFigure=traverseFindChildNodeByName(this.model.rootNodes[0],"chief","Mesh")),h==PLAYER_TYPE_ASSISTENT&&(this.playerFigure=traverseFindChildNodeByName(this.model.rootNodes[0],"documenter","Mesh")),h==PLAYER_TYPE_GENERAL&&(this.playerFigure=traverseFindChildNodeByName(this.model.rootNodes[0],"general_documenter","Mesh")),h==PLAYER_TYPE_CASHIER&&
(this.playerFigure=traverseFindChildNodeByName(this.model.rootNodes[0],"cashier","Mesh")),h==PLAYER_TYPE_FARMER&&(this.playerFigure=traverseFindChildNodeByName(this.model.rootNodes[0],"farmer","Mesh")),this.playerFigure.isVisible=!0,EnableMeshOutline(this.playerFigure,.2),this.model_player.layerMask=LAYER_SCREEN_GAME,this.model_player.isVisible=!0);this.model_player.scaling=v3(MAN_SCALE,MAN_SCALE,MAN_SCALE);for(h=0;h<this.model.animationGroups.length;h++)this.model.animationGroups[h].enableBlending=
!0,this.model.animationGroups[h].blendingSpeed=.1;this.currentAnim=null;SHOP_SHADOWS_ENABLED&&(this.playerFigure&&ScreenGame.instance.shadowGenerator.addShadowCaster(this.playerFigure,!0),this.model_cart&&ScreenGame.instance.shadowGenerator.addShadowCaster(this.model_cart,!0));this.model_player.position=e;this.shop=b;this.shop.addPlayer(this);this.label=null;setTimeout(function(){this.createLabel(this.model_player);this.updateData()}.bind(this),50*(Shop.instance.players.length+1));this.updateData();
this.onResize();this.playIdleAnimation();this.needToAdjustInitialPosition=!1},setVisible:function(b){},prepareDynamicLabels:function(){null==Player.labelTexture&&(Player.labelTexture=new BABYLON.DynamicTexture("labelTexture",{width:1024,height:1024},activeScene.scene,!1),Player.labelTexture.hasAlpha=!0,Player.labelTexture.wrapU=BABYLON.Texture.CLAMP_ADDRESSMODE,Player.labelTexture.wrapV=BABYLON.Texture.CLAMP_ADDRESSMODE,Player.labelMaterial=new BABYLON.CustomMaterial("Player.labelMaterial",activeScene.scene),
Player.labelMaterial.diffuseTexture=this.labelTexture,Player.labelMaterial.opacityTexture=this.labelMaterial.diffuseTexture,Player.labelMaterial.diffuseTexture.hasAlpha=!0,Player.labelMaterial.diffuseTexture.premulAlpha=!0,Player.labelMaterial.disableLighting=!0,Player.labelMaterial.emissiveColor=new BABYLON.Color3(1,1,1),Player.labelMaterial.alphaMode=BABYLON.Engine.ALPHA_COMBINE,Player.labelMaterial.transparencyMode=BABYLON.Material.MATERIAL_ALPHATEST,Player.labelMaterial.disableDepthWrites=!1,
Player.labelMaterial.AddAttribute("uvc"),Player.labelMaterial.AddAttribute("uvScale"),Player.labelMaterial.Vertex_Definitions("\n            attribute vec2 uvc;\n            attribute vec2 uvScale;\n        "),Player.labelMaterial.Vertex_Before_PositionUpdated("\n            uvUpdated = vec2(uv.x, 1.0 - uv.y);\n            uvUpdated = uvUpdated * uvScale + uvc;\n        "),Player.label3dbase=BABYLON.MeshBuilder.CreatePlane("label3dbase",{width:2,height:2.25},activeScene.scene),Player.label3dbase.material=
Player.labelMaterial,Player.label3dbase.setEnabled(!1),Player.label3dbase.registerInstancedBuffer("uvc",2),Player.label3dbase.registerInstancedBuffer("uvScale",2),PlayerDynamicLabelSlotManager.init(1024,1024,128,144),this.createLabelInstance=function(b,e,h){const f=Player.label3dbase.createInstance("playerLabel3d_"+BABYLON.RandomGUID());f.position.copyFrom(b);f.rotation.copyFrom(e);b=this.labelTexture.getSize();f.instancedBuffers.uvc=new BABYLON.Vector2(h.x/b.width,h.y/b.height);f.instancedBuffers.uvScale=
new BABYLON.Vector2(h.width/b.width,h.height/b.height);return f})},increaseLevel:function(b){void 0===b&&(b=this.position);null==b&&(b=this.position);this.playerLevel++;if(this.playerType==PLAYER_TYPE_PLAYER){var e="+ "+Str("SPEED").toLowerCase();1==this.playerLevel%2&&(e="+ "+Str("CAPACITY"));b=ScreenGame.instance.getObjectProjection2D(b);TextParticles.instance.CreateTextParticle1(b.x,b.y-ScreenGame.instance.activeViewportCenter.y-100*Resolution.SCALE,e,34,"rgba(255,255,255,1)")}},setLevel:function(b){this.playerLevel=
b},createLabel:function(b){this.label=null;if(SHOP_USE_ADT_LABEL&&(this.playerType==PLAYER_TYPE_PLAYER||this.playerType==PLAYER_TYPE_BUYER)){var e=BABYLON.RandomGUID();this.label3d=BABYLON.MeshBuilder.CreatePlane("label3d_"+e,{width:3.5,height:3.5},activeScene.scene);this.label3d.parent=b;this.label3d.position=v3(.2,7.7,0);this.label3d.billboardMode=BABYLON.Mesh.BILLBOARDMODE_ALL;this.label3d.layerMask=LAYER_SCREEN_GAME;this.label3d.renderingGroupId=1;this.label3d.material=new BABYLON.StandardMaterial("label3d_material_"+
e,activeScene.scene);this.label3d.material.diffuseTexture=new BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(this.label3d,60,60,!1,!1,!0,function(){},BABYLON.Texture.BILINEAR_SAMPLINGMODE);this.label3d.material.diffuseTexture.hasAlpha=!0;this.label3d.material.diffuseTexture.premulAlpha=!0;this.label3d.material.opacityTexture=this.label3d.material.diffuseTexture;this.label3d.material.unlit=!0;this.label3d.material.specularColor=new BABYLON.Color3(0,0,0);this.label3d.material.emissiveColor=new BABYLON.Color3(1,
1,1);this.label3d.material.transparencyMode=2;this.label3d.material.alphaMode=8}this.playerType==PLAYER_TYPE_PLAYER&&(this.label=new BABYLON.GUI.TextBlock,this.label.fontSize="18px",this.label.fontFamily="gamefont",this.label.color="#FFFFFF",this.label.outlineColor="rgb(0,0,0)",this.label.outlineWidth=5,this.label.text=STR("MAX"),this.label.isVisible=!1,SHOP_USE_ADT_LABEL?this.label3d.material.diffuseTexture.addControl(this.label):(ScreenGame.instance.guiTexture.addControl(this.label),this.label.text=
STR("MAX"),this.label.linkWithMesh(b),this.label.linkOffsetY=-85));this.playerType==PLAYER_TYPE_BUYER&&(this.label=new BABYLON.GUI.Rectangle("label"),this.label.isVisible=!0,this.label.transformCenterX=.5,this.label.transformCenterY=.5,this.label.thickness=0,this.label.clipContent=!1,this.label.clipChildren=!1,this.label.widthInPixels=50,this.label.heightInPixels=50,this.label.bubble=new BABYLON.GUI.Image,this.label.bubble.transformCenterX=.5,this.label.bubble.transformCenterY=.5,this.label.bubble.scaleX=
this.label.bubble.scaleY=.58,SetImageFromSpritesheet(this.label.bubble,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_player_bubble.png"),this.label.addControl(this.label.bubble),this.label.progress=new BABYLON.GUI.Ellipse,this.label.progress.width="50px",this.label.progress.height="50px",this.label.progress.top="0px",this.label.progress.color="#ff4d00",this.label.progress.thickness=7,this.label.progress.rotation=-DegToRad(90),this.label.progress.useBitmapCache=!0,this.label.addControl(this.label.progress),
this.updatePlayerMoodProgress(0),this.label.icon=new BABYLON.GUI.Image,this.label.icon.transformCenterX=.5,this.label.icon.transformCenterY=.5,this.label.icon.scaleX=this.label.icon.scaleY=.43,SetImageFromSpritesheet(this.label.icon,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_player_tomato.png"),this.label.addControl(this.label.icon),this.label.txtCount=new BABYLON.GUI.TextBlock,this.label.txtCount.text="0 / 2",this.label.txtCount.fontSize="18px",this.label.txtCount.fontFamily="gamefont",
this.label.txtCount.color="#FFFFFF",this.label.txtCount.outlineColor="rgb(0,0,0)",this.label.txtCount.outlineWidth=3,this.label.txtCount.topInPixels=17,this.label.addControl(this.label.txtCount),SHOP_USE_ADT_LABEL?this.label3d.material.diffuseTexture.addControl(this.label):(ScreenGame.instance.guiTexture.addControl(this.label),this.label.linkWithMesh(b),this.label.linkOffsetY=-90*Resolution.SCALE))},getAnimationGroupByName:function(b){for(var e=0;e<this.animationGroups.length;e++)if(this.animationGroups[e].name==
b)return this.animationGroups[e];return null},updatePlayerMoodProgress:function(b){this.label&&(b=Math.floor(150*b)/150,this.label.progress.isVisible=!0,1<b&&(b=1),this.label.progress.arc!=b&&(this.label.progress.arc=b))},updateTexts:function(){this.playerType==PLAYER_TYPE_PLAYER&&(this.label.text=STR("MAX"))},onResize:function(){SHOP_USE_ADT_LABEL||null==this.label||(this.label.linkOffsetY=-100*Resolution.SCALE,this.label.scaleX=this.label.scaleY=.92*Resolution.SCALE)},delete:function(){this.label&&
(this.label.parent=null,this.label.dispose());this.label3d&&(this.label3d.parent=null,this.label3d.material.diffuseTexture.dispose(),this.label3d.material.diffuseTexture=null,this.label3d.material.opacityTexture=null,this.label3d.material.dispose(),this.label3d.dispose());this.model_player.setEnabled(!1);this.model_player.dispose();this.model.dispose();this.itemsToBuyTypes=this.itemsToBuy=this.itemsTypes=this.items=null},update:function(b){this.markedForDelete||(this.updateLabelPosition(),this.playerType==
PLAYER_TYPE_PLAYER&&this.updatePlayerControls(),this.playerType==PLAYER_TYPE_ASSISTENT&&this.updatePlayerAssistent(b),this.playerType==PLAYER_TYPE_GENERAL&&this.updatePlayerGeneral(b),this.playerType==PLAYER_TYPE_FARMER&&this.updatePlayerFarmer(b),this.playerType==PLAYER_TYPE_CHEF&&this.updatePlayerChef(b),this.playerType==PLAYER_TYPE_CASHIER&&this.updatePlayerCashier(b),this.playerType==PLAYER_TYPE_BUYER&&this.updatePlayerBuyer(b))},setCustomerType:function(b){this.customerType=b;for(var e=1;7>=
e;e++){var h=traverseFindChildNodeByName(this.model.rootNodes[0],"customer_0"+e,"Mesh");if(null==h)return;h.isVisible=!1}this.playerFigure=traverseFindChildNodeByName(this.model.rootNodes[0],"customer_0"+b,"Mesh");SHOP_SHADOWS_ENABLED&&(this.playerFigure&&ScreenGame.instance.shadowGenerator.addShadowCaster(this.playerFigure,!0),this.model_cart&&ScreenGame.instance.shadowGenerator.addShadowCaster(this.model_cart,!0))},setColor:function(b){},setPlayerSkin:function(b){if(this.playerType==PLAYER_TYPE_PLAYER){for(var e=
1;12>=e;e++){var h=traverseFindChildNodeByName(this.model.rootNodes[0],"player_"+leadingZero(e,2),"Mesh");null!=h&&(h.isVisible=!1)}this.playerFigure=traverseFindChildNodeByName(this.model.rootNodes[0],b,"Mesh");this.playerFigure.isVisible=!0}},setPlayerCustomItems:function(){this.playerType==PLAYER_TYPE_PLAYER&&(this.setPlayerCustomItem("caps",PlayerCap),this.setPlayerCustomItem("clothes",PlayerClothes),this.setPlayerCustomItem("shoes",PlayerShoes))},setPlayerCustomItem:function(b,e){var h=null;
"caps"==b&&(h=Shop.instance.getPlayerPlayer().playerCap.material);"clothes"==b&&(h=Shop.instance.getPlayerPlayer().playerFigure.material);"shoes"==b&&(h=Shop.instance.getPlayerPlayer().playerShoes.material);b=AssetLoader.instance.loadedTextures[e];h.unfreeze();h.albedoTexture=b;h.emissiveTexture=b;h.markAsDirty();h.markDirty();h.freeze()},updateLabelPosition:function(){null!=this.label&&(this.label.zIndex=(Shop.instance.sizeY/2-this.position.z)/100)},updatePlayerControls:function(){if(!Shop.instance.instantProgress){var b;
(b=(b=this.updatePlayerKeyboardControls())||this.updatePlayerJoystickControls())||this.playIdleAnimation();b&&(0==OnboardingStep&&screenGame.nextOnboardingStep(),34<this.position.x&&(this.position.x=34),-37>this.position.x&&(this.position.x=-37),26<this.position.z&&(this.position.z=26),-27>this.position.z&&(this.position.z=-27));this.moving=!1}},updatePlayerAssistent:function(b){this.idleTimer-=b;if(!(0<this.idleTimer)){if(this.playerState==PLAYER_STATE_PICKUP_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&
0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerOutPosition();return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,this.playerSpeed,this.selectedShopObject.facing==FACING_DOWN||this.selectedShopObject.facing==FACING_LEFT);if(!this.canWeFinisheProductPicking(ITEM_TYPES_ASSISTENT))return;this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut();this.canStoreProducts&&(this.findShelfToStoreFood(this.itemsTypes)||
this.throwItemsToBin())}if(this.playerState==PLAYER_STATE_STORE_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerInPosition();return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);if(0<this.items.length&&this.selectedShopObject.getItemsCount()<this.selectedShopObject.capacity)return;
this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();if(0<this.items.length){if(this.findShelfToStoreFood(this.itemsTypes))return;this.throwItemsToBin();return}this.idleTimer=500;this.playerState=PLAYER_STATE_IDLE}if(this.playerState==PLAYER_STATE_THROW_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerInPosition();return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,
this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);if(0<this.items.length&&this.selectedShopObject.getItemsCount()<this.selectedShopObject.capacity)return;this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();this.idleTimer=500;this.playerState=PLAYER_STATE_IDLE}this.playerState==PLAYER_STATE_IDLE&&(this.playIdleAnimation(),this.tryToFindPathToShelfToRestock(ITEM_TYPES_ASSISTENT)||(this.idleTimer=500))}},refinePlayerOutPosition:function(){this.shopObjectPosIdx=
this.selectedShopObject.addPlayerOut(this);var b=this.selectedShopObject.getPositionOfPlayerOut(this.shopObjectPosIdx);this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z);this.pathToGoal[this.pathToGoal.length-1][1]-=.3;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1)},refinePlayerInPosition:function(){this.shopObjectPosIdx=this.selectedShopObject.addPlayerIn(this);var b=this.selectedShopObject.getPositionOfPlayerIn(this.shopObjectPosIdx);this.pathToGoal=
this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z);this.pathToGoal[this.pathToGoal.length-1][1]-=.3;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1)},canWeFinisheProductPicking:function(b){if(this.playerCapacity>this.items.length){if(this.shop.placeIsTransformer(this.selectedShopObject)&&0==this.selectedShopObject.getItemsCount(this.selectedShopObject.itemsIn)&&0==this.selectedShopObject.getItemsCount(this.selectedShopObject.itemsOut)){this.selectedShopObject.removePlayerOut(this);
this.selectedShopObject.shiftPlayersOut(this);if(0<this.items.length)return this.findTransformerToFeedWith(ITEM_TYPES_ASSISTENT,this.itemsTypes[0])||this.findShelfToStoreFood(this.itemsTypes[0])||this.throwItemsToBin(),!1;this.idleTimer=100;this.playerState=PLAYER_STATE_IDLE}return!1}return!0},updatePlayerGeneral:function(b){this.idleTimer-=b;if(!(0<this.idleTimer)){if(this.playerState==PLAYER_STATE_PICKUP_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&
this.refinePlayerOutPosition();return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,this.playerSpeed,this.selectedShopObject.facing==FACING_DOWN||this.selectedShopObject.facing==FACING_LEFT);if(this.playerCapacity>this.items.length){if(this.shop.placeIsTransformer(this.selectedShopObject)){if("flour"==this.selectedShopObject.options.itemTypeOut&&1<this.selectedShopObject.playersOut.length&&this.selectedShopObject.playersOut[1].playerType==
PLAYER_TYPE_CHEF&&2<=this.items.length){this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut(this);if(0<this.items.length){this.findShelfToStoreFood(this.itemsTypes[0])||this.throwItemsToBin();return}this.idleTimer=100;this.playerState=PLAYER_STATE_IDLE;return}if(!this.selectedShopObject.doWeHaveItemsIn()&&0==this.selectedShopObject.getItemsCount(this.selectedShopObject.itemsOut)){this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut(this);
if(0<this.items.length){this.findShelfToStoreFood(this.itemsTypes[0])||this.throwItemsToBin();return}this.idleTimer=100;this.playerState=PLAYER_STATE_IDLE}}return}this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut();this.canStoreProducts&&(this.findShelfToStoreFood(this.itemsTypes)||this.throwItemsToBin())}if(this.playerState==PLAYER_STATE_STORE_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerInPosition();
return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);if(0<this.items.length&&this.selectedShopObject.getItemsCount()<this.selectedShopObject.capacity)return;this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();if(0<this.items.length){if(this.findShelfToStoreFood(this.itemsTypes))return;this.throwItemsToBin();
return}this.idleTimer=500;this.playerState=PLAYER_STATE_IDLE}if(this.playerState==PLAYER_STATE_THROW_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerInPosition();return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);if(0<this.items.length&&this.selectedShopObject.getItemsCount()<
this.selectedShopObject.capacity)return;this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();this.idleTimer=500;this.playerState=PLAYER_STATE_IDLE}this.playerState==PLAYER_STATE_IDLE&&(this.playIdleAnimation(),this.tryToFindPathToShelfToRestockGeneral(ITEM_TYPES_GENERAL)||(this.idleTimer=500))}},updatePlayerFarmer:function(b){this.idleTimer-=b;if(!(0<this.idleTimer)){if(this.playerState==PLAYER_STATE_PICKUP_FOOD){if(null!=this.pathToGoal){this._followPathToGoal()&&
0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerOutPosition();return}this.playIdleAnimation();if(!this.ready||this.playerCapacity>this.items.length)return;this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut();if(!this.findTransformerToFeedWith(ITEM_TYPES_FARMER,this.itemsTypes)){this.idleTimer=500;return}}if(this.playerState==PLAYER_STATE_STORE_FOOD){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&
this.refinePlayerInPosition();return}this.playIdleAnimation();if(!this.ready)return;if(0<this.items.length){if(this.selectedShopObject.getItemsCount(this.selectedShopObject.itemsIn)<this.selectedShopObject.capacity)return;this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();if(this.findTransformerToFeedWith(this.selectedShopObject.options.itemTypeOut))return;this.throwItemsToBin();return}this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();
this.playerState=PLAYER_STATE_IDLE;this.idleTimer=1500}if(this.playerState==PLAYER_STATE_THROW_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerInPosition();return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);if(0<this.items.length&&this.selectedShopObject.getItemsCount()<
this.selectedShopObject.capacity)return;this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();this.idleTimer=500;this.playerState=PLAYER_STATE_IDLE}this.playerState==PLAYER_STATE_IDLE&&(this.playIdleAnimation(),this.tryToFindTransformerToFeedAndFeedIt(ITEM_TYPES_FARMER)||(this.idleTimer=500))}},updatePlayerChef:function(b){this.idleTimer-=b;if(!(0<this.idleTimer)){if(this.playerState==PLAYER_STATE_PICKUP_FOOD){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&
5>this.distanceToDestination&&this.refinePlayerOutPosition();return}this.playIdleAnimation();if(!this.ready)return;b=!0;this.selectedShopObject.hasOwnProperty("doWeHaveItemsIn")&&(b=this.selectedShopObject.doWeHaveItemsIn());if(this.playerCapacity>this.items.length&&b)return;this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut();this.findTransformerToFeedWith(ITEM_TYPES_CHEF,this.itemsTypes)}if(this.playerState==PLAYER_STATE_STORE_FOOD){if(null!=this.pathToGoal){this._followPathToGoal()&&
0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerInPosition();return}this.playIdleAnimation();if(!this.ready)return;if(0<this.items.length){if(this.selectedShopObject.getItemsCount(this.selectedShopObject.itemsIn)<this.selectedShopObject.capacity)return;this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();if(this.findTransformerToFeedWith([],this.itemsTypes[0]))return;this.throwItemsToBin();return}this.selectedShopObject.removePlayerIn(this);
this.selectedShopObject.shiftPlayersIn();this.playerState=PLAYER_STATE_IDLE;this.idleTimer=250}if(this.playerState==PLAYER_STATE_THROW_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerInPosition();return}this.playIdleAnimation();if(!this.ready)return;this.rotatePlayerTowardPos(this.selectedShopObject.position,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);
if(0<this.items.length&&this.selectedShopObject.getItemsCount()<this.selectedShopObject.capacity)return;this.selectedShopObject.removePlayerIn(this);this.selectedShopObject.shiftPlayersIn();this.idleTimer=100;this.playerState=PLAYER_STATE_IDLE}this.playerState==PLAYER_STATE_IDLE&&(this.playIdleAnimation(),this.tryToFindTransformerToFeedAndFeedIt(ITEM_TYPES_CHEF)||(this.idleTimer=250))}},updatePlayerCashier:function(b){this.idleTimer-=b;if(!(0<this.idleTimer)){if(this.playerState==PLAYER_STATE_CHECKING)if(null!=
this.pathToGoal){if(this._followPathToGoal())return}else{if(!this.ready)return;b=this.selectedShopObject.position.clone();b.y+=100;this.rotatePlayerTowardPos(b,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);this.playIdleAnimation()}this.playerState==PLAYER_STATE_IDLE&&this.goToOperateCashRegister(this.shop.getRegister(this.x,this.z,!1))&&(this.idleTimer=500)}},playIdleAnimation:function(){var b=this.getAnimationGroupByName(0<this.items.length||
this.model_cart?"idle_hold":"idle");null!=b&&(this.currentAnim&&this.currentAnim.name!=b.name&&this.currentAnim.stop(),b.speedRatio=1,b.start(!0,1,b.from,b.to,!1),this.currentAnim=b)},playWalkingAnimation:function(b){var e=this.getAnimationGroupByName(0<this.items.length||this.model_cart?"walk_hold":"walk");null!=e&&(this.currentAnim&&this.currentAnim.name!=e.name&&this.currentAnim.stop(),e.speedRatio=b,e.start(!0,1,e.from,e.to,!1),this.currentAnim=e)},pauseAnimation:function(){null!=this.currentAnim&&
this.currentAnim.pause()},resumeAnimation:function(){null!=this.currentAnim&&this.currentAnim.restart()},onPause:function(){this.pauseAnimation()},onResume:function(){this.resumeAnimation()},updatePlayerBuyer:function(b){if(this.playerState==PLAYER_STATE_PICKUP_PRODUCT){if(null!=this.pathToGoal){this._followPathToGoal()&&0>this.shopObjectPosIdx&&5>this.distanceToDestination&&this.refinePlayerOutPosition();return}if(!this.ready)return;this.playIdleAnimation();var e=this.selectedShopObject.position.clone();
e.x-=50;this.rotatePlayerTowardPos(e,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);if(this.itemsOfType(this.itemsToBuy,this.selectedShopObject.options.itemType)>this.itemsOfType(this.items,this.selectedShopObject.options.itemType)){this.increaseBadMood();return}this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut();if(!this.tryToBuyProducts(this.itemsToBuyTypes)){this.goToCashRegister();this.updateData();
return}}if(this.playerState==PLAYER_STATE_STORE_PRODUCT)if(null!=this.pathToGoal){if(this._followPathToGoal())return}else{this.playIdleAnimation();if(!this.ready)return;e=this.selectedShopObject.position.clone();e.x-=80;this.rotatePlayerTowardPos(e,this.playerSpeed,this.selectedShopObject.facing==FACING_UP||this.selectedShopObject.facing==FACING_RIGHT);var h=this.selectedShopObject;if(!h.cashierAvailable)return;if(null==h.box){b=this.shop.createRegisterBox(2.1,0);b.position.y=1.35;b.parent=h;b.register=
h;h.box=b;return}if(!h.box.ready||0<this.items.length&&h.getItemsCount()<h.capacity||0<h.items.length&&(this.payMoney(h,GetItemSellPrice(h.items[0])),Shop.instance.addSoldProduct(h.items[0].itemType,1),h.items[0].dispose(),h.items.splice(0,1),0<h.items.length))return;this.pickupItem(h.box,function(){h.box=null;h.removePlayer(this);h.shiftPlayers();this.label.isVisible=!1;this.leaveShop()}.bind(this));return}this.playerState==PLAYER_STATE_LEAVING?null!=this.pathToGoal?this._followPathToGoal():(this.playIdleAnimation(),
this.ready&&(this.markedForDelete=!0)):this.playerState==PLAYER_STATE_IDLE&&(this.playIdleAnimation(),this.hasOwnProperty("idleTimer")||(this.idleTimer=1500),this.idleTimer-=b,0<this.idleTimer||(this.idleTimer=1500,this.tryToBuyProducts(this.itemsToBuyTypes)||(this.idleTimer=2E3)))},increaseBadMood:function(){this.badMood+=activeScene.getDeltaTime();this.updatePlayerMoodProgress(this.badMood/PLAYER_BAD_MOOD_TIME);if(this.badMood>=PLAYER_BAD_MOOD_TIME){this.label&&(this.label.txtCount.isVisible=!1,
this.label.progress.isVisible=!1,SetImageFromSpritesheet(this.label.icon,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_player_angry.png"));if(0<this.itemsToBuy.length){this.selectedShopObject.removePlayerOut(this);this.selectedShopObject.shiftPlayersOut();this.removeItemsToBuys(this.selectedShopObject.options.itemType);if(this.tryToBuyProducts(this.itemsToBuyTypes))return!0;if(0<this.items.length&&this.goToCashRegister())return setTimeout(function(){this.updateData()}.bind(this),1500),!0}this.leaveShop();
return!0}return!1},updatePlayerKeyboardControls:function(){if(!(this.pressedDown||this.pressedUp||this.pressedLeft||this.pressedRight))return!1;var b=0;this.pressedUp&&(b=0);this.pressedDown&&(b=180);this.pressedRight&&(b=90,this.pressedUp&&(b-=45),this.pressedDown&&(b+=45));this.pressedLeft&&(b=-90,this.pressedUp&&(b+=45),this.pressedDown&&(b-=45));this.movePlayerAtAngle(DegToRad(b-90-10),this.playerSpeed);return!0},updatePlayerJoystickControls:function(){var b=VirtualJoystick.instance;if(0!=b.stickDeltaX||
0!=b.stickDeltaY){.4>b.stickPerc&&(b.stickPerc=.4);var e=this.playerSpeed*b.stickPerc;this.movePlayerAtAngle(b.stickAngle-DegToRad(10),e);return!0}},movePlayerAtAngle:function(b,e){this.playWalkingAnimation(e);e=e*MAN_SPEED_MUL*activeScene.getCpuSpeedMul();this.model_player.rotationQuaternion=null;this.model_player.rotation.y=b+DegToRad(90);new BABYLON.Vector2(0,0);e=new BABYLON.Vector2(e,0);e.rotateToRef(b,e);b=this.model_player.position.clone();var h=this.model_player.position.clone();Math.abs(e.x)>
Math.abs(e.y)?(b.x+=e.x,h.x=b.x,0<e.x&&(h.x+=.5),0>e.x&&(h.x-=.5),0!=!this.shop.getCollisionValueAtPosition(h)&&(this.model_player.position.x=b.x),b.z-=e.y,h.z=b.z,0<e.y&&(h.z-=.5),0>e.y&&(h.z+=.5),0!=!this.shop.getCollisionValueAtPosition(h)&&(this.model_player.position.z=b.z)):(b.z-=e.y,h.z=b.z,0<e.y&&(h.z-=.5),0>e.y&&(h.z+=.5),0!=!this.shop.getCollisionValueAtPosition(h)&&(this.model_player.position.z=b.z),b.x+=e.x,h.x=b.x,0<e.x&&(h.x+=.5),0>e.x&&(h.x-=.5),0!=!this.shop.getCollisionValueAtPosition(h)&&
(this.model_player.position.x=b.x))},movePlayerTowardsPosByStep:function(b,e){var h=this.position.clone(),f=new BABYLON.Vector2(b.x-h.x,b.y-h.z),k=f.length();this.distanceToDestination=k;if(k<=e)return this.playerType==PLAYER_TYPE_CHEF&&0==this.itemsTypes.indexOf("flour")&&(this.position.x=b.x),this.position.z=b.y,this.moving=!1,!0;f.normalize();f.scaleInPlace(e);h.x+=f.x;h.z+=f.y;this.position=h;this.moving=!0;return!1},movePlayerTowardPos:function(b,e){this.playWalkingAnimation(2*e);e=e*MAN_SPEED_MUL*
activeScene.getCpuSpeedMul();this.rotatePlayerTowardPos(b,this.playerSpeed,!0);var h=this.position.clone(),f=new BABYLON.Vector2(b.x-h.x,b.y-h.z),k=f.length();this.distanceToDestination=k;if(k<=e)return this.position.x=b.x,this.position.z=b.y,this.moving=!1,!0;f.normalize();f.scaleInPlace(e);h.x+=f.x;h.z+=f.y;this.position=h;this.moving=!0;return!1},updateRotationByStep:function(b,e,h){var f=RadToDeg(b.y-e.y);180<f&&(f-=360);-180>f&&(f+=360);.2<f&&(b.y-=DegToRad(h)*activeScene.getCpuSpeedMul(),f=
RadToDeg(b.y-e.y),180<f&&(f-=360),-180>f&&(f+=360),.2>f&&(b.y=e.y));-.2>f&&(b.y+=DegToRad(h)*activeScene.getCpuSpeedMul(),f=RadToDeg(b.y-e.y),180<f&&(f-=360),-180>f&&(f+=360),-.2<f&&(b.y=e.y))},rotatePlayerTowardPos:function(b,e,h){void 0===e&&(e=1);void 0===h&&(h=!1);e*=10;b=BABYLON.Angle.BetweenTwoPoints(new BABYLON.Vector2(b.x,b.y),new BABYLON.Vector2(this.position.x,this.position.z)).radians();this.model_player.rotationQuaternion=null;h=h?v3(0,-b-DegToRad(90),0):v3(0,b-DegToRad(90),0);this.updateRotationByStep(this.model_player.rotation,
h,e)},itemsOfType:function(b,e){for(var h=0,f=0;f<b.length;f++)b[f]==e&&h++;return h},_followPathToGoal:function(){var b=new BABYLON.Vector2(this.nextPathPos[0],this.nextPathPos[1]);if(this.movePlayerTowardPos(b,this.playerSpeed)){if(0==this.pathToGoal.length)return this.pathToGoal=null,this.moving=!1;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1)}return!0},getShelfOfType:function(b){for(var e=[],h=0;h<this.shop.shelves.length;h++){var f=this.shop.shelves[h];b==f.options.itemType&&
e.push(f)}return 0==e.length?null:e[getRandomUInt(e.length)]},getShelfToRestock:function(b){void 0===b&&(b=[]);for(var e=[],h=0;h<this.shop.shelves.length;h++){var f=this.shop.shelves[h];if(!(0<b.length&&0>b.indexOf(f.options.itemType)||f.getItemsCount()>=f.capacity||0<f.playersIn.length)){var k=Shop.instance.getProducerProducingItemType(f.options.itemType),m=Shop.instance.getTransformerProducingFoodType(f.options.itemType);!k&&!m||m&&!m.doWeHaveItemsIn()&&0===m.getItemsCount(m.itemsOut)||e.push({itemType:f.options.itemType,
shelf:f,players:m?m.playersOut.length:0,free:(f.capacity-f.getItemsCount())/f.capacity})}}if(0===e.length)return null;e.sort(function(n,y){return y.free!==n.free?y.free-n.free:n.players-y.players});b=e.filter(n=>n.free===e[0].free&&n.players===e[0].players);return b[getRandomUInt(b.length)].shelf},getShelfToRestockGeneral:function(b){void 0===b&&(b=[]);for(var e=[],h=0;h<this.shop.shelves.length;h++){var f=this.shop.shelves[h];if(!(0<b.length&&0>b.indexOf(f.options.itemType)||f.getItemsCount()>=f.capacity)){var k=
Shop.instance.getProducerProducingItemType(f.options.itemType),m=Shop.instance.getTransformerProducingFoodType(f.options.itemType);if(k||m){if(m){if(0<m.playersOut.length)continue;if(!m.doWeHaveItemsIn()&&0==m.getItemsCount(m.itemsOut))continue}f={itemType:f.options.itemType,shelf:f,players:m?m.playersOut.length:0,free:(f.capacity-f.getItemsCount())/f.capacity};e.push(f)}}}if(0===e.length)return null;e.sort(function(n,y){return y.free!==n.free?y.free-n.free:n.players-y.players});b=e.filter(n=>n.free===
e[0].free&&n.players===e[0].players);return b[getRandomUInt(b.length)].shelf},__getShelfToRestock:function(b){void 0===b&&(b=[]);for(var e=[],h=0;h<this.shop.shelves.length;h++){var f=this.shop.shelves[h];if(!(0<b.length&&0>b.indexOf(f.options.itemType)||f.getItemsCount()>=f.capacity||null==Shop.instance.getProducerProducingItemType(f.options.itemType)&&null==Shop.instance.getTransformerProducingFoodType(f.options.itemType))){var k=Shop.instance.getTransformerProducingFoodType(f.options.itemType);
(null==k||k.doWeHaveItemsIn()||0!=k.getItemsCount(k.itemsOut))&&e.push({itemType:f.options.itemType,shelf:f,players:k.playersOut.length,free:(f.capacity-f.getItemsCount())/f.capacity})}}if(0==e.length)return null;e.sort(function(m,n){return n.free-m.free});b=[e[0]];for(h=1;h<e.length;h++)e[h].free==e[0].free&&b.push(e[h]);return b[getRandomUInt(b.length)].shelf},tryToFindPathToShelfToRestock:function(b){void 0===b&&(b=[]);b=this.getShelfToRestock(b);return null!=b&&this.getPathToPlaceProducingItem(b.options.itemType)?
!0:!1},tryToFindPathToShelfToRestockGeneral:function(b){void 0===b&&(b=[]);b=this.getShelfToRestockGeneral(b);return null!=b&&this.getPathToPlaceProducingItem(b.options.itemType)?!0:!1},getPathToPlaceProducingItem:function(b){var e=this.shop.getProducerProducingItemType(b,this.position);null==e&&(e=this.shop.getTransformerProducingFoodType(b));if(null==e)return!1;this.playerState=PLAYER_STATE_PICKUP_PRODUCT;this.selectedShopObject=e;this.shopObjectPosIdx=-1;this.refinePlayerOutPosition();b=this.selectedShopObject.getPositionOfPlayerOut(this.shopObjectPosIdx);
this.getPathToPosition(b);return!0},getPathToPosition:function(b){this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z);this.pathToGoal[this.pathToGoal.length-1][0]=b.x;this.pathToGoal[this.pathToGoal.length-1][1]=b.z;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1)},getShelfToStore:function(b){void 0===b&&(b=[]);for(var e=[],h=0;h<this.shop.shelves.length;h++){var f=this.shop.shelves[h];0<b.length&&0>b.indexOf(f.options.itemType)||f.getItemsCount()>=f.capacity||
e.push({itemType:f.options.itemType,players:f.playersIn.length,shelf:f,free:(f.capacity-f.getItemsCount())/f.capacity})}if(0==e.length)return null;e.sort(function(k,m){return k.players!==m.players?k.players-m.players:m.free-k.free});b=[e[0]];for(h=1;h<e.length;h++)if(e[h].players==e[0].players)b.push(e[h]);else break;return b[getRandomUInt(b.length)].shelf},getTransformerToBeFed:function(b,e){void 0===b&&(b=[]);void 0===e&&(e=[]);for(var h=[],f=0;f<this.shop.transformers.length;f++){var k=this.shop.transformers[f],
m=k.options.itemTypeIn;Array.isArray(m)||(m=[m]);if(!(0<k.playersIn.length||0<b.length&&0>b.indexOf(k.options.itemTypeOut))){if(0<e.length){for(var n=!1,y=0;y<m.length;y++)n=n||0<=e.indexOf(m[y])&&k.getItemsCount(k.itemsIn,m[y])<k.capacity;if(!n)continue}for(n=0;n<m.length;n++){y=!1;if(this.playerType==PLAYER_TYPE_CHEF&&"bread"==k.options.itemTypeOut){var x=this.shop.getTransformerProducingFoodType(m[n],this.position);if(x)for(var w=0;w<x.playersOut.length;w++)x.playersOut[w].playerType==PLAYER_TYPE_CHEF&&
(y=!0)}!y&&k.getItemsCount(k.itemsIn,m[n])<k.capacity&&h.push({id:k.options.id,itemType:m[n],animal:k,free:(k.capacity-k.getItemsCount(k.itemsIn,m[n]))/k.capacity})}}}if(0==h.length)return null;h.sort(function(v,r){return r.free-v.free});b=[h[0]];for(f=1;f<h.length;f++)h[f].free==h[0].free&&b.push(h[f]);shuffleArray(b);b[0].animal.selectedItemTypeIn=b[0].itemType;return b[0].animal},tryToFindTransformerToFeedAndFeedIt:function(b){void 0===b&&(b=[]);b=this.getTransformerToBeFed(b);if(null==b)return!1;
this.playerState=PLAYER_STATE_PICKUP_FOOD;this.selectedShopObject=this.shop.getProducerProducingItemType(b.selectedItemTypeIn,this.position);null==this.selectedShopObject&&(this.selectedShopObject=this.shop.getTransformerProducingFoodType(b.selectedItemTypeIn,this.position));this.shopObjectPosIdx=-1;this.refinePlayerOutPosition();b=this.selectedShopObject.getPositionOfPlayerOut(this.shopObjectPosIdx);this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z);this.pathToGoal[this.pathToGoal.length-
1][0]=b.x;this.pathToGoal[this.pathToGoal.length-1][1]=b.z;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1);return!0},__tryToFindPathToShelfToRestock:function(b){void 0===b&&(b=[]);b=this.getShelfToRestock(b);if(null==b)return!1;if(this.shop.itemIsProducedByTransformer(b.options.itemType)&&this.shop.machineProducingItemNeedToBeFed(b.options.itemType))this.playerState=PLAYER_STATE_PICKUP_FOOD,this.selectedShopObject=b=this.shop.getTransformerProducingFoodType(b.options.itemType),this.selectedShopObject=
this.shop.getProducerProducingItemType(b.options.itemTypeIn),this.shopObjectPosIdx=-1,b=this.selectedShopObject.getPositionOfPlayerOut(0),this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z),this.pathToGoal[this.pathToGoal.length-1][1]-=.3,this.nextPathPos=this.pathToGoal[0],this.pathToGoal.splice(0,1);else return this.playerState=PLAYER_STATE_PICKUP_PRODUCT,this.selectedShopObject=this.shop.getProducerProducingItemType(b.options.itemType),null==this.selectedShopObject&&
(this.selectedShopObject=this.shop.getTransformerProducingFoodType(b.options.itemType)),this.shopObjectPosIdx=-1,b=this.selectedShopObject.getPositionOfPlayerOut(0),this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z),this.pathToGoal[this.pathToGoal.length-1][0]=b.x,this.pathToGoal[this.pathToGoal.length-1][1]=b.z,this.nextPathPos=this.pathToGoal[0],this.pathToGoal.splice(0,1),!0},findTransformerToFeedWith:function(b,e){void 0===b&&(b=null);b=this.getTransformerToBeFed(b,
e);if(null==b)return!1;this.playerState=PLAYER_STATE_STORE_FOOD;this.selectedShopObject=b;this.shopObjectPosIdx=-1;b=b.getPositionOfPlayerIn(0);this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z);this.pathToGoal[this.pathToGoal.length-1][0]=b.x;this.pathToGoal[this.pathToGoal.length-1][1]=b.z;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1);return!0},findShelfToStoreFood:function(b){void 0===b&&(b=[]);b=this.getShelfToStore(b);if(null==b)return!1;this.selectedShopObject=
b;this.shopObjectPosIdx=-1;this.refinePlayerInPosition();this.playerState=PLAYER_STATE_STORE_PRODUCT;return!0},filterItemsToBuy:function(){for(var b=0;b<this.itemsToBuy.length;b++)null==this.getShelfOfType(this.itemsToBuy[b])&&(this.itemsToBuy.splice(b,1),b--);this._updateItemsToBuyTypes()},removeItemsToBuys:function(b){for(var e=0;e<this.itemsToBuy.length;e++)this.itemsToBuy[e]==b&&(this.itemsToBuy.splice(e,1),e--);this._updateItemsToBuyTypes()},tryToBuyProducts:function(b){if(0==b.length)return!1;
var e=[];shuffleArray(b);for(var h=0;h<b.length;h++){itemType=b[h];var f=this.getShelfOfType(itemType);null!=f&&(4<=f.playersOut.length||e.push(f))}if(0==e.length)return!1;f=e[getRandomUInt(e.length)];this.badMood=0;this.updatePlayerMoodProgress(this.badMood/PLAYER_BAD_MOOD_TIME);this.selectedShopObject=f;this.shopObjectPosIdx=-1;this.playerState=PLAYER_STATE_PICKUP_PRODUCT;this.updateData();b=f.getPositionOfPlayerOut(0);this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,
b.z);this.pathToGoal[this.pathToGoal.length-1][0]=b.x;this.pathToGoal[this.pathToGoal.length-1][1]=b.z;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1);return!0},goToCashRegister:function(b){this.playerState=PLAYER_STATE_STORE_PRODUCT;void 0===b&&(b=this.getRegisterForBuyer(this.x,this.z));if(null==b)return this.leaveShop(),!1;this.selectedShopObject=b;this.shopObjectPosIdx=b.getPlayerIdx(this);0>this.shopObjectPosIdx&&(this.shopObjectPosIdx=b.addPlayer(this));b=b.getPositionOfPlayerIn(this.shopObjectPosIdx);
this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.x,b.z);this.pathToGoal[this.pathToGoal.length-1][0]=b.x;this.pathToGoal[this.pathToGoal.length-1][1]=b.z;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1);this.label&&(this.label.progress.isVisible=!1);return!0},getRegisterForBuyer:function(b,e){var h=[];b=new BABYLON.Vector2(b,e);for(e=0;e<Shop.instance.registers.length;e++){var f=Shop.instance.registers[e],k=BABYLON.Vector2.DistanceSquared(b,new BABYLON.Vector2(f.position.x,
f.position.z));h.push({register:f,distSq:k,money:f.money.length,players:f.playersIn.length})}h.sort(function(m,n){return m.money!==n.money?m.money-n.money:m.distSq!==n.distSq?m.distSq-n.distSq:m.players-n.players});return h[0].register},goToOperateCashRegister:function(b){if(!this.canSellProducts)return!1;this.playerState=PLAYER_STATE_CHECKING;void 0===b&&(b=this.shop.getRegister(this.x,this.z,!1));this.selectedShopObject=b;var e=b.getPositionOfCashier();b.occupied=!0;this.pathToGoal=this.shop.getPathFromA2B(this.position.x,
this.position.z,e.x,e.z);this.pathToGoal[this.pathToGoal.length-1][0]=e.x;this.pathToGoal[this.pathToGoal.length-1][1]=e.z;this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1);return!0},throwItemsToBin:function(b){this.playerState=PLAYER_STATE_THROW_PRODUCT;void 0===b&&(b=this.shop.getBin(this.position.x,this.position.z));this.selectedShopObject=b;this.shopObjectPosIdx=b.getPlayerInIdx(this);0>this.shopObjectPosIdx&&(this.shopObjectPosIdx=b.addPlayerIn(this));b=b.getPositionOfPlayerIn(this.shopObjectPosIdx);
this.getPathToPosition(b)},leaveShop:function(){var b=this.shop.getEntry(this.position.x,this.position.z);this.pathToGoal=this.shop.getPathFromA2B(this.position.x,this.position.z,b.position.x,b.position.z+1);this.nextPathPos=this.pathToGoal[0];this.pathToGoal.splice(0,1);var e=this.pathToGoal.length;e=[this.pathToGoal[e-1][0]+3*(0==getRandomUInt(1E3)%2?1:-1),this.pathToGoal[e-1][1]];this.pathToGoal.push(e);this.playerState=PLAYER_STATE_LEAVING;this.entry=b},pickupItem:function(b,e,h){void 0===e&&
(e=function(){});void 0===h&&(h={});h.hasOwnProperty("duration")||(h.duration=DURATION_ITEM_PICKUP);var f=b.absolutePosition.clone();b.unfreezeWorldMatrix();b.parent=this.model_player;b.setAbsolutePosition(f);b.scaling=v3(1/MAN_SCALE,1/MAN_SCALE,1/MAN_SCALE);this.ready=!1;b.ready=!1;f={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};h=h.duration;var k=this.getItemRotation(b);CommonAnimations.AnimateObjectProperty(b.rotation,"x",k.x,h,f,1,!1);CommonAnimations.AnimateObjectProperty(b.rotation,
"y",k.y,h,f,1,!1);CommonAnimations.AnimateObjectProperty(b.rotation,"z",k.z,h,f,1,!1);k=this.getItemScale(b);CommonAnimations.AnimateObjectProperty(b.scaling,"x",k.x,h,f,1,!1);CommonAnimations.AnimateObjectProperty(b.scaling,"y",k.y,h,f,1,!1);CommonAnimations.AnimateObjectProperty(b.scaling,"z",k.z,h,f,1,!1);CommonAnimations.AnimateObjectProperty(b.position,"x",this.getItemPosX(b),h,f,1,!1);CommonAnimations.AnimateObjectProperty(b.position,"y",this.getItemPosY(b),h,f,1,!1);CommonAnimations.AnimateObjectProperty(b.position,
"z",this.getItemPosZ(b),h,f,1,!1,function(){this.ready=b.ready=!0;"money"==b.itemType&&(ScreenTopPanel.instance.incCash(b.value),b.dispose());this._orderPlayerItems();this.updateData();e()}.bind(this));"money"!=b.itemType&&(this.playerType==PLAYER_TYPE_PLAYER&&soundManager.playSound("grab_item"),this.items.push(b),this._updateItemsTypes(),this.canBuyProducts&&(f=this.itemsToBuy.indexOf(b.itemType),0<=f&&(this.itemsToBuy.splice(f,1),this._updateItemsToBuyTypes()),this.updateData()))},storeItemOfType:function(b,
e){if(0==this.items.length)return!1;if(null==b||""==b)return this.storeItem(this.items[0],e),!0;Array.isArray(b)||(b=[b]);for(var h=0;h<this.items.length;h++)if(!(0>b.indexOf(this.items[h].itemType)))return this.storeItem(this.items[h],e),!0;return!1},storeItem:function(b,e){var h=e.storeItem(b);if(0>h)return!1;var f=b.absolutePosition.clone();b.parent=e;b.setAbsolutePosition(f);b.scaling=v3(1,1,1);f=e.getPositionOfItemToStore(h,b.itemType);var k=e.getRotationOfItemToStore(h,b.itemType);e=e.getScaleOfItemToStore(h,
b.itemType);this.ready=!1;b.ready=!1;b.rotationQuaternion=null;h={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};var m=DURATION_ITEM_STORE;CommonAnimations.AnimateObjectProperty(b.rotation,"x",k.x,m,h,1,!1);CommonAnimations.AnimateObjectProperty(b.rotation,"y",k.y,m,h,1,!1);CommonAnimations.AnimateObjectProperty(b.rotation,"z",k.z,m,h,1,!1);CommonAnimations.AnimateObjectProperty(b.scaling,"x",e.x,m,h,1,!1);CommonAnimations.AnimateObjectProperty(b.scaling,"y",e.y,m,h,1,!1);
CommonAnimations.AnimateObjectProperty(b.scaling,"z",e.z,m,h,1,!1);CommonAnimations.AnimateObjectProperty(b.position,"x",f.x,m,h,1,!1);CommonAnimations.AnimateObjectProperty(b.position,"y",f.y,m,h,1,!1);CommonAnimations.AnimateObjectProperty(b.position,"z",f.z,m,h,1,!1,function(){b.ready=!0;b.freezeWorldMatrix();this.ready=!0}.bind(this));this.playerType==PLAYER_TYPE_PLAYER&&soundManager.playSound("place_item");for(f=0;f<this.items.length;f++)if(this.items[f]==b){this.items.splice(f,1);this._orderPlayerItems();
this._updateItemsTypes();this.updateData();break}},payMoney:function(b,e,h,f){void 0===h&&(h=function(){});void 0===f&&(f={});f.hasOwnProperty("duration")||(f.duration=100);f.hasOwnProperty("skipObjectCreation")||(f.skipObjectCreation=!1);var k=null;f.skipObjectCreation||(k=this.shop.createMoney(this.model_player,e));var m=b.storeMoney(null==k?e:k);if(0>m)return!1;this.ready=!1;e=function(y){void 0===y&&(y=this);null!=k&&(k.ready=!0);y.ready=!0;h(k)};if(f.skipObjectCreation){if(0==f.duration)return e(this),
null;setTimeout(e,f.duration,this);return null}var n=k.parent.absolutePosition.clone();n.y=1.5;k.parent=b;k.setAbsolutePosition(n);k.scaling=v3(.5,.5,.5);b=b.getPositionOfMoneyToStore(m);k.ready=!1;m={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};f=f.duration;CommonAnimations.AnimateObjectProperty(k.scaling,"x",1,f,m,10,!1);CommonAnimations.AnimateObjectProperty(k.scaling,"y",1,f,m,10,!1);CommonAnimations.AnimateObjectProperty(k.scaling,"z",1,f,m,10,!1);CommonAnimations.AnimateObjectProperty(k.position,
"x",b.x,f,m,1,!1);CommonAnimations.AnimateObjectProperty(k.position,"y",b.y,f,m,1,!1);CommonAnimations.AnimateObjectProperty(k.position,"z",b.z,f,m,1,!1,e.bind(this));return k},ownsItemOfType:function(b){Array.isArray(b)||(b=[b]);for(var e=!1,h=0;h<b.length;h++)e=e||0<=this.itemsTypes.indexOf(b[h]);return e},_updateItemsTypes:function(){this.itemsTypes=this.getItemsTypes(this.items)},_updateItemsToBuyTypes:function(){this.itemsToBuyTypes=this.getItemsTypes(this.itemsToBuy)},updateData:function(){this.label&&
(this.playerType==PLAYER_TYPE_PLAYER&&this.items&&(this.label.isVisible=this.playerCapacity==this.items.length),this.playerType==PLAYER_TYPE_BUYER&&(this.label.txtCount.isVisible=0<this.itemsToBuy.length&&null!=this.selectedShopObject,this.label.txtCount.isVisible?(SetImageFromSpritesheet(this.label.icon,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_player_"+this.selectedShopObject.options.itemType+".png"),this.label.txtCount.text=this.itemsOfType(this.itemsToBuy,this.selectedShopObject.options.itemType)+
""):SetImageFromSpritesheet(this.label.icon,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_player_register.png")))},saveData:function(b){if(this.markedForDelete)return null;b.hasOwnProperty("players")||(b.players=[]);var e={};e.name=this.name;e.position={x:this.absolutePosition.x,y:this.absolutePosition.y,z:this.absolutePosition.z};e.items=[];for(var h=0;h<this.items.length;h++)e.items.push(this.items[h].itemType);e.itemsToBuy=[];for(h=0;h<this.itemsToBuy.length;h++)e.itemsToBuy.push(this.itemsToBuy[h]);
e.playerLevel=this.playerLevel;e.baseSpeed=this.baseSpeed;e.baseCapacity=this.baseCapacity;e.ready=this.ready;e.playerType=this.playerType;e.playerState=this.playerState;e.idleTimer=this.idleTimer;e.badMood=this.badMood;e.customerType=this.customerType;e.pathToGoal=this.pathToGoal;e.nextPathPos=this.nextPathPos;e.selectedShopObject=null;e.shopObjectPosIdx=this.shopObjectPosIdx;this.selectedShopObject&&(e.selectedShopObject=this.selectedShopObject.name);e.canSellProducts=this.canSellProducts;e.canStoreProducts=
this.canStoreProducts;e.canProvideFood=this.canProvideFood;e.canBuyProducts=this.canBuyProducts;e.markedForDelete=this.markedForDelete;b.players.push(e);return e},getItemsTypes:function(b){for(var e=[],h=0;h<b.length;h++){var f=b[h];f.hasOwnProperty("itemType")&&(f=f.itemType);0<=e.indexOf(f)||e.push(f)}return e},_orderPlayerItems:function(){var b=this.getItemStartPosY();if(null!=this.items){for(var e=0;e<this.items.length;e++)this.items[e].position.y=b,this.model_cart||(b+=this.items[e].itemHeight/
MAN_SCALE);3!=OnboardingStep&&6!=OnboardingStep||3!=this.items.length||screenGame.nextOnboardingStep();7==OnboardingStep&&0==Shop.instance.getPlayerPlayer().items.length&&screenGame.nextOnboardingStep()}},getItemPosX:function(b){if(b){if("carrot"==b.itemType)return 2;if("ketchup"==b.itemType)return 1;if("wheat"==b.itemType)return 1.1}return 0},getItemStartPosY:function(){return this.model_cart?1:3.3},getItemPosY:function(){if(this.model_cart)return 1;for(var b=this.getItemStartPosY(),e=0;e<this.items.length;e++)b+=
this.items[e].itemHeight/MAN_SCALE;return b},getItemPosZ:function(b){return this.model_cart?3:b&&"milk"==b.itemType?1:1.5},getItemRotation:function(b){return"carrot"==b.itemType?v3(DegToRad(0),DegToRad(0),DegToRad(90)):"milk"==b.itemType?v3(DegToRad(90),DegToRad(0),DegToRad(0)):"wheat"==b.itemType||"ketchup"==b.itemType?v3(DegToRad(90),DegToRad(0),DegToRad(90)):v3(0,0,0)},getItemScale:function(b){var e=1/MAN_SCALE;b&&"ketchup"==b.itemType&&(e*=.85);this.model_cart&&(e*=.5);return v3(e,e,e)}};
const PlayerDynamicLabelSlotManager={_atlasWidth:0,_atlasHeight:0,_slotWidth:0,_slotHeight:0,_columns:0,_rows:0,_totalSlots:0,_usedSlots:[],_objectToSlotIndex:[],init:function(b,e,h,f){this._atlasWidth=b;this._atlasHeight=e;this._slotWidth=h;this._slotHeight=f;this._columns=Math.floor(b/h);this._rows=Math.floor(e/f);this._totalSlots=this._columns*this._rows;this._usedSlots=[];this._objectToSlotIndex=[];for(b=0;b<this._totalSlots;b++)this._usedSlots.push(null)},getSlot:function(b){for(var e=0;e<this._objectToSlotIndex.length;e++)if(this._objectToSlotIndex[e].object===
b)return this._createSlotInfo(this._objectToSlotIndex[e].index);for(e=0;e<this._totalSlots;e++)if(null===this._usedSlots[e])return this._usedSlots[e]=b,this._objectToSlotIndex.push({object:b,index:e}),this._createSlotInfo(e);return null},free:function(b){for(var e=0;e<this._objectToSlotIndex.length;e++)if(this._objectToSlotIndex[e].object===b){this._usedSlots[this._objectToSlotIndex[e].index]=null;this._objectToSlotIndex.splice(e,1);break}},_createSlotInfo:function(b){var e=b%this._columns;b=Math.floor(b/
this._columns);var h=e*this._slotWidth/this._atlasWidth,f=b*this._slotHeight/this._atlasHeight,k=(e+1)*this._slotWidth/this._atlasWidth,m=(b+1)*this._slotHeight/this._atlasHeight;return{col:e,row:b,x:e*this._slotWidth,y:b*this._slotHeight,width:this._slotWidth,height:this._slotHeight,uv:[h,m,k,m,k,f,h,f]}}};
function PlayerLevelIncreased(b,e,h){var f="+ "+Str("SPEED").toLowerCase();1==e%2&&(f="+ "+Str("CAPACITY"));h=ScreenGame.instance.getObjectProjection2D(h);e=h.x-ScreenGame.instance.activeViewportCenter.x;h=h.y-ScreenGame.instance.activeViewportCenter.y-100*Resolution.SCALE;var k="icon_player_assistent.png";b==PLAYER_TYPE_GENERAL&&(k="icon_player_general.png");b==PLAYER_TYPE_FARMER&&(k="icon_player_farmer.png");b==PLAYER_TYPE_CHEF&&(k="icon_player_chef.png");Particles.instance.CreateParticle1(e+90*
Resolution.SCALE,h,k);TextParticles.instance.CreateTextParticle1(e+120*Resolution.SCALE+ScreenGame.instance.activeViewportCenter.x,h,f,34,"rgba(255,255,255,1)")};const FACING_DOWN=0,FACING_RIGHT=1,FACING_LEFT=2,FACING_UP=3;Shop=function(){this._init();Shop.instance=this};Shop.instance=null;
Shop.prototype={constructor:Shop,_init:function(){this._sizeX=80;this._sizeY=60;Object.defineProperty(this,"sizeX",{get:function(){return this._sizeX},enumerable:!0,configurable:!0});Object.defineProperty(this,"sizeY",{get:function(){return this._sizeY},enumerable:!0,configurable:!0});this.collisions=new Collisions(this._sizeX,this._sizeY);this.entries=[];this.walls=[];this.floors=[];this.producers=[];this.transformers=[];this.shelves=[];this.players=[];this.registers=[];this.bins=[];this.progress=
[];this.offers=[];this.nodeEntries=new BABYLON.TransformNode("entries");this.nodeWalls=new BABYLON.TransformNode("walls");this.nodeFloors=new BABYLON.TransformNode("floors");this.nodeMachines=new BABYLON.TransformNode("machines");this.nodeAnimals=new BABYLON.TransformNode("animals");this.nodeShelves=new BABYLON.TransformNode("shelves");this.nodePlayers=new BABYLON.TransformNode("players");this.nodeRegisters=new BABYLON.TransformNode("registers");this.nodeBins=new BABYLON.TransformNode("bins");this.nodeProducts=
new BABYLON.TransformNode("products");this.nodeProducers=new BABYLON.TransformNode("producers");this.nodeMoney=new BABYLON.TransformNode("nodeMoney");this.nodeLabels=new BABYLON.TransformNode("nodeLabels");this.nodeProgress=new BABYLON.TransformNode("progress");this.nodeOffers=new BABYLON.TransformNode("offers");this._createMaterials();InstanceManager.initFromContainer(assetLoader.loadedContainers["products.glb"],"products");InstanceManager.initFromContainer(assetLoader.loadedContainers["shelves.glb"],
"shelves");InstanceManager.initFromContainer(assetLoader.loadedContainers["machines.glb"],"machines");InstanceManager.initFromContainer(assetLoader.loadedContainers["machines_ic.glb"],"machines_ic");InstanceManager.initFromContainer(assetLoader.loadedContainers["animals.glb"],"animals");InstanceManager.initFromContainer(assetLoader.loadedContainers["spawns.glb"],"spawns",!0);this.instanceBases={};this.loadingData=!1;this.timeToShowSoldProducts=this.timeToHelp=this.timeToOffer=this.timeToSpawnBuyer=
-1;this.unlockLevel=UNLOCK_LEVEL_START;this.instantProgress=!1;this.elementsToProgress=null;this.isPaused=!1;this.soldProducts=[];this.workerLevel=[];this.workerLevel[PLAYER_TYPE_ASSISTENT]=0;this.workerLevel[PLAYER_TYPE_FARMER]=0;this.workerLevel[PLAYER_TYPE_CHEF]=0;this.workerLevel[PLAYER_TYPE_GENERAL]=0;this.updateAvailableItemTypes()},canInstantlyProgress:function(b){return Shop.instance.instantProgress?!0:!1},elementProgressed:function(b){SaveShop()},saveData:function(){var b={};b.timeToSpawnBuyer=
this.timeToSpawnBuyer;b.timeToOffer=this.timeToOffer;b.timeToShowSoldProducts=this.timeToShowSoldProducts;b.unlockLevel=this.unlockLevel;b.workerLevel=this.workerLevel;b.soldProducts=this.soldProducts;for(var e=0;e<this.registers.length;e++)this.registers[e].saveData(b);for(e=0;e<this.shelves.length;e++)this.shelves[e].saveData(b);for(e=0;e<this.producers.length;e++)this.producers[e].saveData(b);for(e=0;e<this.transformers.length;e++)this.transformers[e].saveData(b);for(e=0;e<this.progress.length;e++)this.progress[e].saveData(b);
for(e=0;e<this.offers.length;e++)this.offers[e].saveData(b);for(e=0;e<this.players.length;e++)this.players[e].saveData(b);return b},resetShop:function(){for(this.collisions.resetGrid();0<this.players.length;)this.removePlayer(this.players[0]);for(;0<this.registers.length;)this.registers[0].hasOwnProperty("machine")&&this.registers[0].machine.dispose(),this.registers[0].dispose(),this.registers.splice(0,1);for(;0<this.shelves.length;)this.shelves[0].hasOwnProperty("glass")&&this.shelves[0].glass.dispose(),
this.shelves[0].dispose(),this.shelves.splice(0,1);for(;0<this.producers.length;)this.producers[0].hasOwnProperty("model_plant")&&this.producers[0].model_plant.dispose(),this.producers[0].dispose(),this.producers.splice(0,1);for(;0<this.transformers.length;)this.transformers[0].hasOwnProperty("animal")&&this.transformers[0].animal.dispose(),this.transformers[0].hasOwnProperty("machine")&&this.transformers[0].machine.dispose(),this.transformers[0].hasOwnProperty("tray")&&this.transformers[0].tray.dispose(),
this.transformers[0].dispose(),this.transformers.splice(0,1);for(;0<this.progress.length;)this.progress[0].delete(),this.progress.splice(0,1);for(;0<this.offers.length;)this.offers[0].delete(),this.offers.splice(0,1);this.timeToShowSoldProducts=this.timeToOffer=this.timeToSpawnBuyer=-1;this.unlockLevel=UNLOCK_LEVEL_START;this.instantProgress=!1;this.soldProducts=[];this.workerLevel=[];this.workerLevel[PLAYER_TYPE_ASSISTENT]=0;this.workerLevel[PLAYER_TYPE_FARMER]=0;this.workerLevel[PLAYER_TYPE_CHEF]=
0;this.workerLevel[PLAYER_TYPE_GENERAL]=0;this.updateAvailableItemTypes()},buildNewShop:function(){this.createBin(52,3,FACING_DOWN,"bin_right");this.createBin(3,3,FACING_DOWN,"bin_left");DEBUG_COLLISIONS||(this.createFloor(1,1,74,26,{color:new BABYLON.Color3(1,229/255,146/255),texture:"floor_01.png",vScale:10}),this.createFloor(1,27,74,31,{color:new BABYLON.Color3(186/255,232/255,98/255),texture:"grass_01.png"}));this.createWall(2,2,4,1);this.createWall(1,2,1,56);this.createEntry(6,2);this.createWall(13,
2,3,1);this.createWall(16,2,40,1);this.createEntry(56,2);this.createWall(63,2,12,1);this.createWall(75,2,1,56)},loadData:function(b){this.loadingData=!0;this.resetShop();this.renewCollisions();this.loadData_registers(b);this.loadData_shelves(b);this.loadData_producers(b);this.loadData_transformers(b);this.loadData_players(b);this.loadData_progress(b);this.updateProgressPointsConditions();this.timeToSpawnBuyer=b.timeToSpawnBuyer;this.timeToOffer=5E3;this.timeToHelp=1E4;this.timeToShowSoldProducts=
b.timeToShowSoldProducts;this.unlockLevel=b.unlockLevel;this.instantProgress=!1;this.soldProducts=b.soldProducts;this.loadingData=!1},renewCollisions:function(){for(var b=0;b<this.walls.length;b++)this.walls[b].setCollisions();for(b=0;b<this.bins.length;b++)this.bins[b].setCollisions();for(b=0;b<this.entries.length;b++)this.entries[b].setCollisions()},updateProgressPointsConditions:function(){for(var b=0;b<this.progress.length;b++){var e=this.progress[b];e.setEnabled(e.conditionsMet());e.label3d&&
e.label3d.setEnabled(e.conditionsMet());e.locked=e.isLocked();e.updateData()}},loadData_players:function(b){if(!b.hasOwnProperty("players"))return!1;for(var e=0;e<b.players.length;e++){var h=b.players[e],f=this.spawnPlayerFromData(h);f.name=h.name;f.ready=!0}return!0},loadData_registers:function(b){if(!b.hasOwnProperty("registers"))return!1;for(var e=0;e<b.registers.length;e++){var h=b.registers[e],f=this.createRegister(h.gridX,h.gridY,h.facing);f.name=h.name;for(var k=0;k<h.money;k++){var m=this.createMoney(null,
1),n=f.storeMoney(m);0<=n?(m.parent=f,m.position=f.getPositionOfMoneyToStore(n)):m.dispose()}}return!0},loadData_shelves:function(b){if(!b.hasOwnProperty("shelves"))return!1;for(var e=0;e<b.shelves.length;e++)this.createShelfFromData(b.shelves[e]);return!0},loadData_producers:function(b){if(!b.hasOwnProperty("producers"))return!1;for(var e=0;e<b.producers.length;e++)this.createProducerFromData(b.producers[e]);return!0},loadData_transformers:function(b){if(!b.hasOwnProperty("transformers"))return!1;
for(var e=0;e<b.transformers.length;e++)this.createTransformerFromData(b.transformers[e]);return!0},loadData_progress:function(b){if(!b.hasOwnProperty("progress"))return!1;for(var e=0;e<b.progress.length;e++){var h=b.progress[e];var f=Shop.instance.createProgressPoint(h.name,h.gridX,h.gridY,h.options,window[h.onProgress]);f.alreadyPaid=h.alreadyPaid;PulsingScale(f)}return!0},getElementByName:function(b){for(var e=0;e<this.producers.length;e++)if(this.producers[e].name==b)return this.producers[e];
for(e=0;e<this.transformers.length;e++)if(this.transformers[e].name==b)return this.transformers[e];for(e=0;e<this.shelves.length;e++)if(this.shelves[e].name==b)return this.shelves[e];for(e=0;e<this.players.length;e++)if(this.players[e].name==b)return this.players[e];for(e=0;e<this.registers.length;e++)if(this.registers[e].name==b)return this.registers[e];for(e=0;e<this.bins.length;e++)if(this.bins[e].name==b)return this.bins[e];for(e=0;e<this.progress.length;e++)if(this.progress[e].name==b)return this.progress[e];
return null},elementExist:function(b,e){void 0===e&&(e=-1);for(var h=0;h<this.producers.length;h++)if(this.producers[h].name==b)return!0;for(h=0;h<this.transformers.length;h++)if(this.transformers[h].name==b&&this.transformers[h].level>=e)return!0;for(h=0;h<this.shelves.length;h++)if(this.shelves[h].name==b)return!0;for(h=0;h<this.players.length;h++)if(this.players[h].name==b&&this.workerLevel[this.players[h].playerType]>=e)return!0;for(h=0;h<this.registers.length;h++)if(this.registers[h].name==b)return!0;
for(h=0;h<this.bins.length;h++)if(this.bins[h].name==b)return!0;for(h=0;h<this.progress.length;h++)if(this.progress[h].name==b)return!0;for(h=0;h<this.offers.length;h++)if(this.offers[h].name==b)return!0;return!1},getPlayersByType:function(b){for(b=0;b<this.players.length;b++);},mergeMeshes:function(){for(var b=[],e=0;e<this.walls.length;e++)b=b.concat(this.walls[e].getChildMeshes());b=BABYLON.Mesh.MergeMeshes(b,!0);null!=b&&(b.name="merged_mesh_walls");b=[];for(e=0;e<this.entries.length;e++)b=b.concat(this.entries[e].getChildMeshes());
b=BABYLON.Mesh.MergeMeshes(b,!0);null!=b&&(b.name="merged_mesh_entries");b=[];for(e=0;e<this.producers.length;e++)b=b.concat(this.producers[e].getChildMeshes());b=BABYLON.Mesh.MergeMeshes(b,!0);null!=b&&(b.name="merged_mesh_producers");b=[];for(e=0;e<this.transformers.length;e++)b=b.concat(this.transformers[e].getChildMeshes());b=BABYLON.Mesh.MergeMeshes(b,!0);null!=b&&(b.name="merged_mesh_transformers");b=[];for(e=0;e<this.shelves.length;e++)b=b.concat(this.shelves[e].getChildMeshes());b=BABYLON.Mesh.MergeMeshes(b,
!0);null!=b&&(b.name="merged_mesh_shelves");b=[];for(e=0;e<this.registers.length;e++)b=b.concat(this.registers[e].getChildMeshes());b=BABYLON.Mesh.MergeMeshes(b,!0);null!=b&&(b.name="merged_mesh_registers");b=[];for(e=0;e<this.bins.length;e++)b=b.concat(this.bins[e].getChildMeshes());b=BABYLON.Mesh.MergeMeshes(b,!0);null!=b&&(b.name="merged_mesh_bins");b=[];for(e=0;e<this.progress.length;e++)b=b.concat(this.progress[e].getChildMeshes());b=BABYLON.Mesh.MergeMeshes(b,!0);null!=b&&(b.name="merged_mesh_progress")},
updateAvailableItemTypes:function(){this.availableItemTypes=[];for(var b=0;b<this.producers.length;b++)0<=this.availableItemTypes.indexOf(this.producers[b].options.itemTypeOut)||this.availableItemTypes.push(this.producers[b].options.itemTypeOut);for(b=0;b<this.transformers.length;b++)0<=this.availableItemTypes.indexOf(this.transformers[b].options.itemTypeOut)||this.availableItemTypes.push(this.transformers[b].options.itemTypeOut)},increaseUnlockLevel:function(b){var e=UNLOCK_LEVEL_START;"chicken"==
b&&(e=UNLOCK_LEVEL_CHICKEN);"wheat"==b&&(e=UNLOCK_LEVEL_WHEAT);"carrot"==b&&(e=UNLOCK_LEVEL_CARROT);"cow"==b&&(e=UNLOCK_LEVEL_COW);"ketchup"==b&&(e=UNLOCK_LEVEL_KETCHUP);"flour"==b&&(e=UNLOCK_LEVEL_FLOUR);"sauce"==b&&(e=UNLOCK_LEVEL_SAUCE);"bread"==b&&(e=UNLOCK_LEVEL_BREAD);"mozarella"==b&&(e=UNLOCK_LEVEL_MOZARELLA);"butter"==b&&(e=UNLOCK_LEVEL_BUTTER);if(e<=this.unlockLevel)return!1;this.unlockLevel=e;GameSnacks.game.levelComplete(this.unlockLevel);return!0},_createMaterials:function(){this.materialFloor=
new BABYLON.StandardMaterial("materialFloor",activeScene.scene);this.materialFloor.emissiveColor=new BABYLON.Color3(1,1,1);this.materialFloor.diffuseColor=new BABYLON.Color3(76/255,205/255,0);this.materialFloor.specularColor=new BABYLON.Color3(0,0,0);this.materialFloor.unlit=!0;this.materialFloor.alpha=1;this.materialFloor.freeze();this.materialBox=new BABYLON.StandardMaterial("materialBox",activeScene.scene);this.materialBox.diffuseColor=new BABYLON.Color3(1,178/255,127/255);this.materialBox.alpha=
1;this.materialBox.freeze();this.materialFloors=[]},getFloorMaterial:function(b,e){if(this.materialFloors.hasOwnProperty(b))return this.materialFloors[b];AssetLoader.instance.loadedTextures[b].uScale=5;AssetLoader.instance.loadedTextures[b].vScale=10;this.materialFloors[b]=new BABYLON.StandardMaterial("materialFloors_"+b,activeScene.scene);this.materialFloors[b].diffuseTexture=AssetLoader.instance.loadedTextures[b];this.materialFloors[b].diffuseTexture.uScale=e;this.materialFloors[b].diffuseTexture.vScale=
1.5*e;this.materialFloors[b].alpha=1;this.materialFloors[b].unlit=!0;this.materialFloors[b].specularColor=new BABYLON.Color3(0,0,0);this.materialFloors[b].emissiveColor=new BABYLON.Color3(1,1,1);return this.materialFloors[b]},addSoldProduct:function(b,e){for(var h=0;h<this.soldProducts.length;h++)if(this.soldProducts[h].product==b){this.soldProducts[h].count+=e;return}this.soldProducts.push({product:b,count:e})},addPlayer:function(b){this.players.push(b);b.model_player.parent=this.nodePlayers},removePlayer:function(b){for(var e=
0;e<this.players.length;e++)if(this.players[e]==b)return this.players.splice(e,1),b.delete(),!0;return!1},getPlayerPlayer:function(){for(var b=0;b<this.players.length;b++)if(this.players[b].playerType==PLAYER_TYPE_PLAYER)return this.players[b];return null},setCollision:function(b,e,h){this.collisions.setCellValue(b,e,h)},setCollisionValueAtPosition:function(b,e){this.collisions.setCellValueAtPosition(b,e)},getCollisionValueAtPosition:function(b){return this.collisions.getCellValueAtPosition(b)},getGridPathFromA2B:function(b,
e,h,f){return this.collisions.getGridPathFromA2B(b,e,h,f)},getPathFromA2B:function(b,e,h,f){return this.collisions.getPathFromA2B(b,e,h,f)},createProduct:function(b,e,h){return"tomato"==b?this.createTomato(e,h):"egg"==b?this.createEgg(e,h):"wheat"==b?this.createWheat(e,h):"carrot"==b?this.createCarrot(e,h):"ketchup"==b?this.createKetchup(e,h):"milk"==b?this.createMilk(e,h):"flour"==b?this.createFlour(e,h):"bread"==b?this.createBread(e,h):"sauce"==b?this.createSauce(e,h):"mozzarella"==b?this.createMozzarella(e,
h):"butter"==b?this.createButter(e,h):"registerBox"==b?this.createRegisterBox(e,h):null},getOrCreateBaseModel:function(b){if(!this.instanceBases[b]){const e=spawnModel(this.rootNode,b).rootNodes[0];e.setEnabled(!1);this.instanceBases[b]=e}return this.instanceBases[b]},createTomato:function(b,e){b=b-this.sizeX/2+.25;e=this.sizeY/2-e-.25;e=InstanceManager.createInstance("products","tomato_mod","tomato_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.25,e));EnableChildrenOutline(e.parent,"tomato_mod",.05);
e.parent=this.nodeProducts;e.layerMask=LAYER_SCREEN_GAME;e.itemHeight=.5;e.itemType="tomato";e.ready=!1;e.isPickable=!1;return e},createKetchup:function(b,e){b=b-this.sizeX/2+.25;e=this.sizeY/2-e-.25;var h=InstanceManager.createInstance("products","ketchup_mod","ketchup_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.15,e));EnableChildrenOutline(h.parent,"ketchup_mod",.05);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.15;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=.3;h.itemType=
"ketchup";h.ready=!1;return h},createEgg:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products","egg_mod","egg_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.325,e));EnableChildrenOutline(h.parent,"egg_mod",.04);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.325;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=.65;h.itemType="egg";h.ready=!1;return h},createCarrot:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products",
"carrot_mod","carrot_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.15,e));EnableChildrenOutline(h.parent,"carrot_mod",.05);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.15;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=.3;h.itemType="carrot";h.ready=!1;return h},createWheat:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products","wheat_mod","wheat_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.05,e));EnableChildrenOutline(h.parent,
"wheat_mod",.03);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.05;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=.1;h.itemType="wheat";h.ready=!1;return h},createMilk:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products","milk_mod","milk_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.15,e));EnableChildrenOutline(h.parent,"milk_mod",.05);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.15;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;
h.itemHeight=.3;h.itemType="milk";h.ready=!1;return h},createFlour:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products","flour_mod","flour_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.2,e));EnableChildrenOutline(h.parent,"flour_mod",.05);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.2;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=.4;h.itemType="flour";h.ready=!1;return h},createBread:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/
2-e-.2;var h=InstanceManager.createInstance("products","bread_mod","bread_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.325,e));EnableChildrenOutline(h.parent,"bread_mod",.1);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.325;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.scaling=v3(.45,.45,.45);h.itemHeight=.65;h.itemType="bread";h.ready=!1;return h},createSauce:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products","sauce_mod","sauce_"+BABYLON.RandomGUID(),
new BABYLON.Vector3(b,.325,e));EnableChildrenOutline(h.parent,"sauce_mod",.04);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.325;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=.65;h.itemType="sauce";h.ready=!1;return h},createMozzarella:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products","mozzarella_mod","mozzarella_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.15,e));EnableChildrenOutline(h.parent,"mozzarella_mod",.04);h.parent=
this.nodeProducts;h.position.x=b;h.position.y=.15;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=.3;h.itemType="mozzarella";h.ready=!1;return h},createButter:function(b,e){b=b-this.sizeX/2+.2;e=this.sizeY/2-e-.2;var h=InstanceManager.createInstance("products","butter_mod","butter_"+BABYLON.RandomGUID(),new BABYLON.Vector3(b,.15,e));EnableChildrenOutline(h.parent,"butter_mod",.04);h.parent=this.nodeProducts;h.position.x=b;h.position.y=.15;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.itemHeight=
.3;h.itemType="butter";h.ready=!1;return h},createMoney:function(b,e){var h=InstanceManager.createInstance("products","money_mod","money_"+BABYLON.RandomGUID(),new BABYLON.Vector3(0,0,0));EnableChildrenOutline(h.parent,"money_mod",.04);h.position.x=0;h.position.y=0;h.position.z=0;h.layerMask=LAYER_SCREEN_GAME;h.parent=this.nodeMoney;h.itemType="money";h.ready=!1;h.parent=b;h.value=e;return h},createWall:function(b,e,h,f){b=Math.floor(b+.5);e=Math.floor(e+.5);var k=b-this.sizeX/2+h/2,m=this.sizeY/
2-e-f/2;const n=InstanceManager.createInstance("machines","wall_mod","wall_ "+BABYLON.RandomGUID(),new BABYLON.Vector3(k,0,m));n.material.baseWeight=.3;n.material.emissiveColor=new BABYLON.Color3(.8,.8,.8);n.gridX=b;n.gridY=e;n.parent=this.nodeWalls;n.position.x=k;n.position.y=0;n.position.z=m;n.layerMask=LAYER_SCREEN_GAME;n.name="wall_ "+BABYLON.RandomGUID();n.depth=f;n.width=h;n.scaling=v3(h,1,f);f>h&&(n.rotationQuaternion=null,n.rotation.y=DegToRad(90),n.scaling=v3(f,1,h));n.receiveShadows=SHOP_SHADOWS_ENABLED;
n.setCollisions=function(){for(var y=0;y<this.width;y++)Shop.instance.setCollision(this.gridX+y,this.gridY,COLLISION_WALL);for(y=0;y<this.depth;y++)Shop.instance.setCollision(this.gridX,this.gridY+y,COLLISION_WALL)};this.walls.push(n);n.setCollisions();return n},createEntry:function(b,e){b=Math.floor(b+.5);e=Math.floor(e+.5);var h=b-this.sizeX/2+3.5,f=this.sizeY/2-e-.5;h=InstanceManager.createInstance("machines","entrance_main_mod","entry_ "+BABYLON.RandomGUID(),new BABYLON.Vector3(h,0,f));h.scaling=
v3(1,-1,1);h.gridX=b;h.gridY=e;h.width=7;h.depth=1;h.layerMask=LAYER_SCREEN_GAME;h.name="entry_ "+BABYLON.RandomGUID();h.parent=this.nodeEntries;h.setCollisions=function(){for(var k=0;k<this.width;k++)Shop.instance.setCollision(this.gridX+k,this.gridY,COLLISION_WALL);Shop.instance.setCollision(this.gridX+3,this.gridY,COLLISION_NONE)};h.setCollisions();this.entries.push(h);return h},createOfferPoint:function(b,e,h,f,k){e=Math.floor(e+.5);h=Math.floor(h+.5);f.x=e;f.y=h;f.price=5;f.hasOwnProperty("offerType")||
(console.warn("Shop.createOfferPoint() -> missing offerType tag"),f.offerType="income");f.icon="offer_"+f.offerType+"_g.png";"help"==f.offerType&&(f.icon="offer_income_g.png");k=e-this.sizeX/2+1;var m=this.sizeY/2-h-1,n=BABYLON.RandomGUID(),y=InstanceManager.createInstance("spawns","spawn_bottom",b,new BABYLON.Vector3(k,.15,m));y.guid=n;y.gridX=e;y.gridY=h;y.parent=this.nodeProgress;y.width=2;y.depth=2;y.facing=FACING_DOWN;y.layerMask=LAYER_SCREEN_GAME;y.options=f;y.alreadyPaid=0;y.markedForDelete=
!1;y.ready=!0;y.delay=0;f.position=y.position;y.setVisible=function(x){this.isVisible=x;this.label3d.isVisible=x};y.saveData=function(x){if(this.markedForDelete)return null;x.hasOwnProperty("offers")||(x.offers=[]);x.offers.push({gridX:this.gridX,gridY:this.gridY,name:this.name,options:this.options,alreadyPaid:this.alreadyPaid})};y.delete=function(){this.markedForDelete=!0;this.updateGui();this.label&&(this.label.parent=null,this.label.dispose());this.label3d&&(this.label3d.parent=null,this.label3d.material.diffuseTexture.dispose(),
this.label3d.material.diffuseTexture=null,this.label3d.material.opacityTexture=null,this.label3d.material.dispose(),this.label3d.dispose());this.dispose()};y.storeMoney=function(x){x=isNumber(x)?x:x.value;this.alreadyPaid+=x;this.alreadyPaid>this.options.price&&(this.alreadyPaid=this.options.price);this.updateData();return 0};y.onOfferTaken=function(x){void 0===x&&(x=function(){});"help"==this.options.offerType?(Shop.instance.timeToHelp=TIME_TO_HELP,Shop.instance.deleteOfferPointByOfferType("help"),
screenTopPanel.incCash(this.options.offerPrice),soundManager.playSound("kaching"),canvas.focus()):screenTimedOffers.activateOffer(TimedOffers[this.options.offerType+"X2"])};y.standingNear=function(x){return Math.abs(x.position.x-this.position.x)>.6*this.width||Math.abs(this.position.z-x.position.z)>.6*this.depth?!1:!0};y.createLabel=function(){if(SHOP_USE_ADT_LABEL){BABYLON.RandomGUID();this.label3d=BABYLON.MeshBuilder.CreatePlane("label3d # "+b,{width:1.7,height:1.7*1.125},activeScene.scene);this.label3d.parent=
Shop.instance.nodeLabels;this.label3d.position=this.position.clone();this.label3d.position.y+=1.5;this.label3d.billboardMode=BABYLON.Mesh.BILLBOARDMODE_ALL;this.label3d.layerMask=LAYER_SCREEN_GAME;this.label3d.renderingGroupId=1;var x={func:BABYLON.SineEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT},w=[[0,1.3],[.3,1.5],[.6,1.3],[1,1.3]];CommonAnimations.AnimateObjectProperty(this.label3d.position,"y",1,700,x,1,!0,null,w);this.label3d.material=new BABYLON.StandardMaterial("label3d_material # "+
b,activeScene.scene);this.label3d.material.diffuseTexture=new BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(this.label3d,128,144,!1,!1,!0,function(){},BABYLON.Texture.BILINEAR_SAMPLINGMODE);this.label3d.material.unlit=!0;this.label3d.material.diffuseTexture.hasAlpha=!0;this.label3d.material.diffuseTexture.premulAlpha=!0;this.label3d.material.opacityTexture=this.label3d.material.diffuseTexture;this.label3d.material.specularColor=new BABYLON.Color3(0,0,0);this.label3d.material.emissiveColor=new BABYLON.Color3(1,
1,1);this.label3d.material.transparencyMode=2;this.label3d.material.alphaMode=8}this.label=new BABYLON.GUI.Rectangle("label # "+b);this.label.isVisible=!0;this.label.transformCenterX=.5;this.label.transformCenterY=.5;this.label.thickness=0;this.label.clipContent=!0;this.label.clipChildren=!0;this.label.widthInPixels=128;this.label.heightInPixels=140;this.label.imgOfferBg=new BABYLON.GUI.Image;this.label.imgOfferBg.transformCenterX=.5;this.label.imgOfferBg.transformCenterY=.5;SetImageFromSpritesheet(this.label.imgOfferBg,
getAssetImage("pak1"),getAssetImageFrames("pak1"),"offer_table_gold_ground_gl.png");this.label.addControl(this.label.imgOfferBg);x={func:BABYLON.SineEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};w=[[0,.95],[.5,.98],[1,.95]];CommonAnimations.AnimateObjectProperty(this.label.imgOfferBg,"scaleX",1,300,x,1,!0,null,w);CommonAnimations.AnimateObjectProperty(this.label.imgOfferBg,"scaleY",1,300,x,1,!0,null,w);this.label.rectFill=new BABYLON.GUI.Rectangle("rectFill");this.label.rectFill.transformCenterX=
0;this.label.rectFill.transformCenterY=0;this.label.rectFill.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.label.rectFill.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.label.rectFill.isPointerBlocker=!1;this.label.rectFill.isHitTestVisible=!1;this.label.rectFill.leftInPixels=0;this.label.rectFill.cornerRadius=6;this.label.rectFill.topInPixels=0;this.label.rectFill.thickness=0;this.label.rectFill.color="cyan";this.label.rectFill.background="help"==
this.options.offerType?"#7136ff":"#44ff02";this.label.rectFill.widthInPixels=107;this.label.rectFill.heightInPixels=107;this.label.rectFill.highlightLineWidth=0;this.label.rectFill.clipChildren=!0;this.label.rectFill.clipContent=!0;this.label.rectFill.isVisible=!0;this.label.addControl(this.label.rectFill);this.label.imgIcon=new BABYLON.GUI.Image;this.label.imgIcon.transformCenterX=.5;this.label.imgIcon.transformCenterY=.5;SetImageFromSpritesheet(this.label.imgIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),
this.options.icon);this.label.addControl(this.label.imgIcon);"help"==this.options.offerType?(this.options.offerPrice=GetUnlockLevelPrice(),this.label.txtPrice=new BABYLON.GUI.TextBlock,this.label.txtPrice.text=""+this.options.offerPrice,this.label.txtPrice.fontSize="50px",this.label.txtPrice.fontFamily="gamefont",this.label.txtPrice.color="#FFFFFF",this.label.txtPrice.outlineColor="rgb(0,0,0)",this.label.txtPrice.outlineWidth=7,this.label.txtPrice.topInPixels=27,this.label.addControl(this.label.txtPrice),
updateTextToWidth(this.label.txtPrice,screenGame.guiTexture.getContext(),90,50,1),this.label.txtPrice.outlineWidth=getOutlineOffs(this.label.txtPrice._fontSize._value/50*7)):(this.label.imgOffer2x=new BABYLON.GUI.Image("imgOffer2x"),this.label.imgOffer2x.transformCenterX=.5,this.label.imgOffer2x.transformCenterY=.5,this.label.imgOffer2x.isPointerBlocker=!1,this.label.imgOffer2x.isHitTestVisible=!1,this.label.imgOffer2x.leftInPixels=0,this.label.imgOffer2x.topInPixels=35,this.label.imgOffer2x.horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,this.label.imgOffer2x.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER,SetImageFromSpritesheet(this.label.imgOffer2x,getAssetImage("pak1"),getAssetImageFrames("pak1"),"offer_2x_ground.png"),this.label.addControl(this.label.imgOffer2x));SHOP_USE_ADT_LABEL?this.label3d.material.diffuseTexture.addControl(this.label):(ScreenGame.instance.guiTexture.addControl(this.label),this.label.linkWithMesh(parent),this.label.linkOffsetY=-90*Resolution.SCALE)};
y.updateGui=function(){};y.updateData=function(){this.updateGui();this.alreadyPaid>=this.options.price&&("help"==this.options.offerType?screenGame.openHelpDialog(this):screenGame.openOfferDialog(this))};y.updatePlayer=function(x){x.markedForDelete||!x.ready||x.moving||x.playerType!=PLAYER_TYPE_PLAYER||!this.ready||this.markedForDelete||(this.standingNear(x)?x.payMoney(this,1,function(w){},{duration:30,skipObjectCreation:!0}):this.alreadyPaid=0)};y.update=function(x){0<y.delay?y.delay-=x:(x=Shop.instance.getPlayerPlayer(),
this.updatePlayer(x))};y.onResize=function(){};y.label=null;y.label3d=null;setTimeout(function(){y.createLabel();PoingScaleIn(y.label3d)}.bind(this),1*(Shop.instance.progress.length+1));y.onResize();y.updateData();this.offers.push(y);return y},deleteOfferPointByOfferType:function(b){for(var e=!1,h=0;h<this.offers.length;h++)this.offers[h].options.offerType==b&&(this.offers[h].delete(),this.offers.splice(h,1),h--,e=!0);return e},createProgressPoint:function(b,e,h,f,k){void 0===k&&(k=function(){});
e=Math.floor(e+.5);h=Math.floor(h+.5);f.x=e;f.y=h;f.hasOwnProperty("price")||(console.warn("Shop.createProgressPoint() -> missing price tag"),f.price=10);f.hasOwnProperty("icon")||(console.warn("Shop.createProgressPoint() -> missing icon tag"),f.icon="icon_player_milk.png");f.hasOwnProperty("upgrade")||(f.upgrade=!1);f.hasOwnProperty("expand")||(f.expand=!1);var m=e-this.sizeX/2+1,n=this.sizeY/2-h-1,y=BABYLON.RandomGUID(),x=InstanceManager.createInstance("spawns","spawn_bottom"+(f.expand?"_expand":
""),b,new BABYLON.Vector3(m,.15,n));x.guid=y;x.gridX=e;x.gridY=h;x.parent=this.nodeProgress;x.width=2;x.depth=2;x.facing=FACING_DOWN;x.layerMask=LAYER_SCREEN_GAME;x.options=f;x.alreadyPaid=0;x.markedForDelete=!1;x.onProgress=k;x.ready=!0;x.lock=InstanceManager.createInstance("spawns","spawn_lock_bottom","progressLock_ "+y,new BABYLON.Vector3(m,.15,n));x.lock.scaling=v3(1.2,1.2,1.2);x.lock.rotationQuaternion=null;x.lock.rotation.y=DegToRad(0);x.lock.parent=this.nodeProgress;f.position=x.position;x.setVisible=
function(w){this.isVisible=w&&!this.locked;this.label3d.isVisible=w&&!this.locked;this.lock.isVisible=w&&this.locked&&this.isEnabled()};x.saveData=function(w){if(this.markedForDelete)return null;w.hasOwnProperty("progress")||(w.progress=[]);w.progress.push({gridX:this.gridX,gridY:this.gridY,name:this.name,options:this.options,alreadyPaid:this.alreadyPaid,onProgress:this.onProgress.name})};x.conditionsMet=function(){if(!this.options.hasOwnProperty("conditions"))return!0;for(var w=0;w<this.options.conditions.length;w++)if(!this.options.conditions[w].hasOwnProperty("lock")||
!this.options.conditions[w].lock){var v=this.options.conditions[w].name,r=-1;this.options.conditions[w].hasOwnProperty("level")&&(r=this.options.conditions[w].level);if(!Shop.instance.elementExist(v,r))return!1}return!0};x.isLocked=function(){if(!this.options.hasOwnProperty("conditions"))return!1;for(var w=0,v=0;v<this.options.conditions.length;v++)this.options.conditions[v].hasOwnProperty("lock")&&this.options.conditions[v].lock&&w++;if(0==w)return!1;for(v=0;v<this.options.conditions.length;v++)if(this.options.conditions[v].hasOwnProperty("lock")&&
this.options.conditions[v].lock){w=this.options.conditions[v].name;var r=-1;this.options.conditions[v].hasOwnProperty("level")&&(r=this.options.conditions[v].level);if(Shop.instance.elementExist(w,r))return!1}return!0};x.delete=function(){this.markedForDelete=!0;this.updateGui();this.label&&(this.label.parent=null,this.label.dispose());this.label3d&&(this.label3d.parent=null,this.label3d.material.diffuseTexture.dispose(),this.label3d.material.diffuseTexture=null,this.label3d.material.opacityTexture=
null,this.label3d.material.dispose(),this.label3d.dispose());this.lock.dispose();this.dispose()};x.onProgressed=function(w){void 0===w&&(w=function(){});this.onProgress(w);this.onProgress=function(){};Shop.instance.elementProgressed(this)};x.standingNear=function(w){return Math.abs(w.position.x-this.position.x)>.6*this.width||Math.abs(this.position.z-w.position.z)>.6*this.depth?!1:!0};x.storeMoney=function(w){w=isNumber(w)?w:w.value;this.alreadyPaid+=w;this.alreadyPaid>this.options.price&&(this.alreadyPaid=
this.options.price);this.updateData();return 0};x.getPositionOfMoneyToStore=function(){var w=v3(-1,0,.8);w.x+=getRandomInt(10)/20;w.z+=getRandomInt(10)/20;return w};x.createLabel=function(){this.markedForDelete||(SHOP_USE_ADT_LABEL&&(BABYLON.RandomGUID(),this.label3d=BABYLON.MeshBuilder.CreatePlane("label3d # "+b,{width:1.7,height:1.7*1.125},activeScene.scene),this.label3d.parent=Shop.instance.nodeLabels,this.label3d.position=this.position.clone(),this.label3d.position.y+=1.5,this.label3d.billboardMode=
BABYLON.Mesh.BILLBOARDMODE_ALL,this.label3d.layerMask=LAYER_SCREEN_GAME,this.label3d.renderingGroupId=1,this.label3d.material=new BABYLON.StandardMaterial("label3d_material # "+b,activeScene.scene),this.label3d.material.diffuseTexture=new BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(this.label3d,128,144,!1,!1,!0,function(){},BABYLON.Texture.BILINEAR_SAMPLINGMODE),this.label3d.material.unlit=!0,this.label3d.material.diffuseTexture.hasAlpha=!0,this.label3d.material.diffuseTexture.premulAlpha=!0,
this.label3d.material.opacityTexture=this.label3d.material.diffuseTexture,this.label3d.material.specularColor=new BABYLON.Color3(0,0,0),this.label3d.material.emissiveColor=new BABYLON.Color3(1,1,1),this.label3d.material.transparencyMode=2,this.label3d.material.alphaMode=8),this.label=new BABYLON.GUI.Rectangle("label # "+b),this.label.isVisible=!0,this.label.transformCenterX=.5,this.label.transformCenterY=.5,this.label.thickness=0,this.label.clipContent=!0,this.label.clipChildren=!0,this.label.widthInPixels=
128,this.label.heightInPixels=140,this.label.scaleY=.85,this.label.imgProgressBg=new BABYLON.GUI.Image,this.label.imgProgressBg.transformCenterX=.5,this.label.imgProgressBg.transformCenterY=.5,SetImageFromSpritesheet(this.label.imgProgressBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),this.options.upgrade?"rect_green_bg.png":"rect_orange_bg.png"),this.label.addControl(this.label.imgProgressBg),this.label.imgProgressFill=new BABYLON.GUI.Image,this.label.imgProgressFill.transformCenterX=.5,this.label.imgProgressFill.transformCenterY=
.5,this.label.imgProgressFill.topInPixels=10,this.label.imgProgressFill.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,SetImageFromSpritesheet(this.label.imgProgressFill,getAssetImage("pak1"),getAssetImageFrames("pak1"),this.options.upgrade?"rect_green_fill.png":"rect_orange_fill.png"),this.label.addControl(this.label.imgProgressFill),this.label.imgProgressOutline=new BABYLON.GUI.Image,this.label.imgProgressOutline.transformCenterX=.5,this.label.imgProgressOutline.transformCenterY=
.5,SetImageFromSpritesheet(this.label.imgProgressOutline,getAssetImage("pak1"),getAssetImageFrames("pak1"),this.options.upgrade?"rect_outline_upgrade.png":"rect_outline.png"),this.label.addControl(this.label.imgProgressOutline),this.label.imgIcon=new BABYLON.GUI.Image,this.label.imgIcon.transformCenterX=.5,this.label.imgIcon.transformCenterY=.5,this.label.imgIcon.topInPixels=-15,SetImageFromSpritesheet(this.label.imgIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),this.options.icon),this.label.addControl(this.label.imgIcon),
this.label.imgCash=new BABYLON.GUI.Image,this.label.imgCash.transformCenterX=.5,this.label.imgCash.transformCenterY=.5,this.label.imgCash.topInPixels=47,this.label.imgCash.scaleX=this.label.imgCash.scaleY=.45,SetImageFromSpritesheet(this.label.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_table_coins.png"),this.label.addControl(this.label.imgCash),this.label.txtPrice=new BABYLON.GUI.TextBlock,this.label.txtPrice.text="100",this.label.txtPrice.fontSize="30px",this.label.txtPrice.fontFamily=
"gamefont",this.label.txtPrice.color="#FFFFFF",this.label.txtPrice.outlineColor="rgb(0,0,0)",this.label.txtPrice.outlineWidth=5,this.label.txtPrice.topInPixels=47,this.label.addControl(this.label.txtPrice),SHOP_USE_ADT_LABEL?this.label3d.material.diffuseTexture.addControl(this.label):(ScreenGame.instance.guiTexture.addControl(this.label),this.label.linkWithMesh(parent),this.label.linkOffsetY=-90*Resolution.SCALE))};x.setPrice=function(w){if(this.label){this.label.txtPrice.text=""+w;w=getTextWidth(screenGame.guiTexture.getContext(),
this.label.txtPrice.text,this.label.txtPrice.fontFamily,this.label.txtPrice._fontSize._value);var v=this.label.imgCash.widthInPixels*this.label.imgCash.scaleX;this.label.txtPrice.leftInPixels=-(w+v+-5)/2+w/2+5;this.label.imgCash.leftInPixels=this.label.txtPrice.leftInPixels+v/2+-5+w/2}};x.updateGui=function(){this.label&&(this.setPrice(this.options.price-this.alreadyPaid),this.label.imgProgressFill.heightInPixels=(.3+this.alreadyPaid/this.options.price*.73)*this.label.imgProgressBg.heightInPixels)};
x.updateData=function(){this.updateGui();this.isVisible=!this.locked;this.lock.isVisible=this.locked&&this.isEnabled();this.label3d&&(this.label3d.isVisible=!this.locked);this.alreadyPaid>=this.options.price&&(this.markedForDelete=!0)};x.updatePlayer=function(w){if(!w.markedForDelete&&w.ready&&!w.moving&&w.playerType==PLAYER_TYPE_PLAYER&&this.ready&&!this.markedForDelete&&this.standingNear(w)&&!(1>PlayerCash)){var v=this.options.price-this.alreadyPaid,r=v/100;1<r&&(r=1);var z=1;10<v&&(z=2);20<v&&
(z=5);50<v&&(z=10);100<v&&(z=25);200<v&&(z=50);for(400<v&&(z=100);z>PlayerCash;)z=Math.ceil(z/2);ScreenTopPanel.instance.purchaseForCash(z,!0);soundManager.playSound("coin");w.payMoney(this,z,function(K){null!=K&&(K.dispose(),SaveShop())},{duration:30-30*r,skipObjectCreation:!0})}};x.update=function(w){if(!this.isEnabled()){this.setEnabled(this.conditionsMet());if(!this.isEnabled())return;this.label3d.setEnabled(!0);PoingScaleIn(this);PoingScaleIn(this.label3d)}if(this.locked){if(this.locked=this.isLocked())return;
this.updateData();PoingScaleIn(this);PoingScaleIn(this.label3d)}void 0===this.options.price&&(a=10);w=Shop.instance.getPlayerPlayer();this.updatePlayer(w);Shop.instance.canInstantlyProgress(this)&&(this.alreadyPaid+=2,this.alreadyPaid>=this.options.price&&(this.alreadyPaid=this.options.price),this.updateData());void 0===this.options.price&&(a=20)};x.onResize=function(){};x.label=null;x.label3d=null;setTimeout(function(){x.markedForDelete||(x.createLabel(),x.label3d.setEnabled(x.conditionsMet()),Shop.instance.updateProgressPointsConditions())}.bind(this),
1*(Shop.instance.progress.length+1));x.setEnabled(x.conditionsMet());x.locked=x.isLocked();x.onResize();x.updateData();this.progress.push(x);this.updateProgressPointsConditions();return x},getProgressPointByName:function(b){b=b.toLowerCase();for(var e=0;e<this.progress.length;e++)if(this.progress[e].name.toLowerCase()==b)return this.progress[e];return null},deleteProgressPoint:function(b){for(var e=0;e<this.progress.length;e++)if(this.progress[e]==b)return this.progress[e].delete(),this.progress.splice(e,
1),!0;return!1},deleteProgressPointByName:function(b){b=this.getProgressPointByName(b);return null==b?!1:this.deleteProgressPoint(b)},createBin:function(b,e,h,f){b=Math.floor(b+.5);e=Math.floor(e+.5);const k=InstanceManager.createInstance("machines","trash_small_mod",f,new BABYLON.Vector3(b-this.sizeX/2+1,0,this.sizeY/2-e-1));k.name=f;k.gridX=b;k.gridY=e;k.rotationQuaternion=null;k.rotation.y=DegToRad(GetFacingRotation(h));k.scaling=v3(1.4,1.4,1.4);k.width=2;k.depth=2;k.facing=h;k.layerMask=LAYER_SCREEN_GAME;
k.options={itemType:"",capacity:1E5};EnableChildrenOutline(k.parent,"trash_small_mod",.06);k.parent=this.nodeBins;SHOP_SHADOWS_ENABLED&&ScreenGame.instance.shadowGenerator.addShadowCaster(k,!0);k.items=[];k.playersIn=[];k.getFreeItemIdx=function(){return this.items.length};k.getItemsCount=function(){return 0};k.getPositionOfItemToStore=function(m){return v3(0,0,0)};k.getRotationOfItemToStore=function(m){return v3(0,0,0)};k.getScaleOfItemToStore=function(m){return v3(.7,.7,.7)};k.storeItem=function(m,
n){if(void 0===n&&(n=this.getFreeItemIdx(),0>n))return-1;this.items[n]=m;return n};k.standingNear=function(m){return Math.abs(this.position.x-m.position.x)>.85*this.width||Math.abs(this.position.z-m.position.z)>.85*this.depth?!1:!0};k.canItemBeStored=function(m){return this.standingNear(m)};k.addPlayerIn=function(m){for(var n=0;n<this.playersIn.length;n++)if(null==this.playersIn[n])return this.playersIn[n]=m,n;this.playersIn.push(m);return this.playersIn.length-1};k.getPlayerInIdx=function(m){for(var n=
0;n<this.playersIn.length;n++)if(this.playersIn[n]==m)return n;return-1};k.getPositionOfPlayerIn=function(m){var n=this.position.clone();this.facing==FACING_DOWN&&(n.x+=.4*m-this.width/2,n.z+=-1);this.facing==FACING_UP&&(n.x+=.4*m-this.width/2,n.z+=1);this.facing==FACING_LEFT&&(n.x+=-1,n.z+=.4*m-this.width/2);this.facing==FACING_RIGHT&&(n.x+=1,n.z+=.4*m-this.width/2);return n};k.removePlayerIn=function(m){for(var n=0;n<this.playersIn.length;n++)if(this.playersIn[n]==m)return this.playersIn.splice(n,
1),!0;return!1};k.shiftPlayersIn=function(){for(var m=0;m<this.playersIn.length;m++){var n=this.playersIn[m];n.shopObjectPosIdx=this.getPlayerInIdx(n);0>n.shopObjectPosIdx&&(n.shopObjectPosIdx=this.addPlayerIn(n));var y=this.getPositionOfPlayerIn(n.shopObjectPosIdx);n.pathToGoal=n.shop.getPathFromA2B(n.position.x,n.position.z,y.x,y.z);n.pathToGoal[n.pathToGoal.length-1][0]=y.x;n.pathToGoal[n.pathToGoal.length-1][1]=y.z;n.nextPathPos=n.pathToGoal[0];n.pathToGoal.splice(0,1)}};k.updatePlayerStores=
function(m){null==m||m.markedForDelete||!m.ready||m.moving||m.playerType!=PLAYER_TYPE_PLAYER&&m.playerState!=PLAYER_STATE_THROW_PRODUCT||null==m.items||0==m.items.length||!this.canItemBeStored(m)||(m.storeItemOfType(this.options.itemType,this),4==OnboardingStep&&0==m.items.length&&(m=Create_TomatoShelf1(),PoingScaleIn(m),screenGame.nextOnboardingStep()))};k.update=function(m){m=Shop.instance.getPlayerPlayer();this.updatePlayerStores(m);for(m=0;m<this.playersIn.length;m++)this.updatePlayerStores(this.playersIn[m]);
0<this.items.length&&(m=this.items[0],m.ready&&(this.items.splice(0,1),m.dispose()))};k.setCollisions=function(){for(var m=0;m<this.depth;m++)for(var n=0;n<this.width;n++)Shop.instance.setCollision(this.gridX+n,this.gridY+m,COLLISION_WALL)};this.bins.push(k);k.setCollisions();return k},createRegister:function(b,e,h){var f=6,k=2;if(h==FACING_LEFT||h==FACING_RIGHT)f=2,k=6;var m=b-this.sizeX/2+f/2,n=this.sizeY/2-e-k/2,y=InstanceManager.createInstance("machines","table_cash_reg_mod","cashReg_"+BABYLON.RandomGUID(),
v3(m,0,n));y.rotationQuaternion=null;y.rotation.y=DegToRad(GetFacingRotation(h)-90);SHOP_SHADOWS_ENABLED&&ScreenGame.instance.shadowGenerator.addShadowCaster(y,!0);y.machine=InstanceManager.createInstance("machines","cash_reg_a_mod","cashRegComputer_"+BABYLON.RandomGUID(),v3(m,1,n));y.machine.rotationQuaternion=null;y.machine.rotation.y=DegToRad(GetFacingRotation(h)-90);y.gridX=b;y.gridY=e;y.width=f;y.depth=k;y.height=1;y.facing=h;y.layerMask=LAYER_SCREEN_GAME;y.name="register_ "+BABYLON.RandomGUID();
y.options={itemType:"",capacity:1E5};y.box=null;y.items=[];y.money=[];y.playersIn=[];y.cashierAvailable=!1;y.occupied=!1;Object.defineProperty(y,"capacity",{get:function(){return this.options.capacity},enumerable:!0,configurable:!0});y.setVisible=function(x){this.isVisible=x;for(var w=0;w<this.items.length;w++)null!=this.items[w]&&(this.items[w].isVisible=x);for(w=0;w<this.money.length;w++)null!=this.money[w]&&(this.money[w].isVisible=x)};y.saveData=function(x){x.hasOwnProperty("registers")||(x.registers=
[]);var w={gridX:this.gridX,gridY:this.gridY,facing:this.facing,name:this.name,money:this.getTotalMoneyValue()};x.registers.push(w)};y.getFreeItemIdx=function(){return this.items.length};y.getItemsCount=function(){return this.items.length};y.getPositionOfItemToStore=function(x){return v3(1.5,.8,0)};y.getRotationOfItemToStore=function(x){return v3(0,0,0)};y.getScaleOfItemToStore=function(x,w){return v3(1,1,1)};y.storeItem=function(x,w){if(void 0===w&&(w=this.getFreeItemIdx(),0>w))return-1;this.items[w]=
x;return w};y.getPositionOfMoneyToStore=function(x){var w=x%3,v=Math.floor(x/3);x=Math.floor(x/9);v-=3*x;if(this.facing==FACING_DOWN)return v3(.55*-f+.8*(w+.5),1.2+.2*x,-.5+.4*v);if(this.facing==FACING_UP)return v3(f/2-.8*(w+.5),1.2+.2*x,.5-.4*v);if(this.facing==FACING_LEFT)return v3(-k/2+.8*(w+.5),1.2+.2*x,.5-.4*v);if(this.facing==FACING_RIGHT)return v3(-k/2+.8*(w+.5),1.2+.2*x,-.5+.4*v)};y.storeMoney=function(x){0<=ActiveOfferTypes.indexOf("income")&&(x.value*=2);if(this.money.length>=MAX_MONEY_ON_REGISTER)return this.money[this.money.length-
1].value+=x.value,this.redistributeMoneyValue(),x.dispose(),-1;this.money[this.money.length]=x;return this.money.length-1};y.redistributeMoneyValue=function(){var x=this.getTotalMoneyValue(),w=Math.floor(x/this.money.length);x-=w*this.money.length;for(var v=0;v<this.money.length;v++)this.money[v].value=w;this.money[this.money.length-1].value+=x};y.removeMoney=function(){return 0==this.money.length?null:this.money.pop()};y.standingNear=function(x){return Math.abs(this.position.x-x.position.x)>.8*this.width||
Math.abs(this.position.z-x.position.z)>1.7*this.depth?!1:!0};y.canItemBeStored=function(x){return 0==this.getPlayerIdx(x)&&null!=this.box&&this.box.ready?this.standingNear(x):!1};y.addPlayer=function(x){this.playersIn.push(x);return this.playersIn.length-1};y.getPlayerIdx=function(x){for(var w=0;w<this.playersIn.length;w++)if(this.playersIn[w]==x)return w;return-1};y.getPositionOfCashier=function(){var x=this.position.clone();this.facing==FACING_DOWN&&(x.x+=0,x.z+=1.5);this.facing==FACING_UP&&(x.x+=
0,x.z+=-1);this.facing==FACING_LEFT&&(x.x+=1.3,x.z+=0);this.facing==FACING_RIGHT&&(x.x+=-1.3,x.z+=0);return x};y.getPositionOfPlayerIn=function(x){var w=this.position.clone();if(this.facing==FACING_DOWN){w.x+=.25*this.width;for(var v=1;v<=x;v++)this.playersIn[v-1]&&(w.x+=this.playersIn[v-1].model_cart?1.5:1);w.z+=-1.8}this.facing==FACING_UP&&(w.x+=.1*this.width+.9*x,w.z+=2);this.facing==FACING_LEFT&&(w.x+=-1.3,w.z+=.1*this.width+.9*x);this.facing==FACING_RIGHT&&(w.x+=1.3,w.z+=.1*-this.width+.9*x);
return w};y.removePlayer=function(x){for(var w=0;w<this.playersIn.length;w++)if(this.playersIn[w]==x)return this.playersIn.splice(w,1),!0;return!1};y.shiftPlayers=function(){for(var x=0;x<this.playersIn.length;x++)this.playersIn[x].goToCashRegister(this)};y.updateCashier=function(){this.cashierAvailable=!1;for(var x=0;x<Shop.instance.players.length;x++){var w=Shop.instance.players[x];if(w.ready&&!w.moving&&w.canSellProducts&&this.standingNear(w)){this.cashierAvailable=!0;break}}};y.updatePlayerStores=
function(x){x.markedForDelete||x.ready&&(x.moving||x.canBuyProducts&&x.playerState==PLAYER_STATE_STORE_PRODUCT&&0!=x.items.length&&this.canItemBeStored(x)&&x.storeItemOfType(x.itemsTypes[0],this))};y.updatePlayerPickups=function(x){if(!x.markedForDelete&&x.ready&&!x.moving&&x.playerType==PLAYER_TYPE_PLAYER&&0!=this.money.length&&this.standingNear(x)){var w=this.getTotalMoneyValue(),v=1;10<w&&(v=2);20<w&&(v=5);50<w&&(v=10);100<w&&(v=25);200<w&&(v=50);500<w&&(v=100);w=0;var r=null;do null!=r&&r.dispose(),
r=this.removeMoney(),w+=r.value;while(w<v&&0<this.money.length);soundManager.playSound("coin");null!=r&&(r.value=w,x.pickupItem(r,function(){},{duration:40}));8==OnboardingStep&&0==this.money.length&&1==this.playersIn.length&&screenGame.nextOnboardingStep()}};y.getTotalMoneyValue=function(){for(var x=0,w=0;w<this.money.length;w++)x+=this.money[w].value;return x};y.update=function(x){this.updateCashier();0<this.playersIn.length&&this.updatePlayerStores(this.playersIn[0]);x=Shop.instance.getPlayerPlayer();
this.updatePlayerPickups(x)};for(h=0;h<k;h++)for(m=0;m<f;m++)this.setCollision(b+m,e+h,COLLISION_WALL);this.registers.push(y);return y},createRegisterBox:function(b,e){b=BABYLON.MeshBuilder.CreateBox("box",{height:.4,width:.5,depth:.5});b.renderOutline=!0;b.outlineWidth=.1;b.outlineColor=new BABYLON.Color3(0,0,0);b.position.x=0;b.position.y=0;b.position.z=0;b.layerMask=LAYER_SCREEN_GAME;b.material=this.materialBox;b.itemType="registerBox";b.name="registerBox_ "+BABYLON.RandomGUID();b.ready=!1;b.scaling=
v3(0,0,0);e={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(b.scaling,"x",1,250,e,1,!1);CommonAnimations.AnimateObjectProperty(b.scaling,"y",1,250,e,1,!1);CommonAnimations.AnimateObjectProperty(b.scaling,"z",1,250,e,1,!1,function(){this.ready=!0}.bind(b));return b},createShelf:function(b,e,h,f,k,m,n){e=Math.floor(e+.5);h=Math.floor(h+.5);if(m==FACING_LEFT||m==FACING_RIGHT)f=2,k=4;var y=e-this.sizeX/2+f/2,x=this.sizeY/2-h-k/2;n.hasOwnProperty("outlineWidth")||
(n.outlineWidth=.06);var w=InstanceManager.createInstance("shelves",b,"shelf_"+BABYLON.RandomGUID(),v3(y,.1,x));w.rotationQuaternion=null;w.rotation.y=DegToRad(GetFacingRotation(m)+90);SHOP_SHADOWS_ENABLED&&ScreenGame.instance.shadowGenerator.addShadowCaster(w,!0);w.gridX=e;w.gridY=h;w.layerMask=LAYER_SCREEN_GAME;w.facing=m;w.width=f;w.depth=k;w.name="shelf_ "+BABYLON.RandomGUID();w.options=n;w.items=[];for(b=0;b<w.options.capacity;b++)w.items[b]=null;w.playersIn=[];w.playersOut=[];Object.defineProperty(w,
"capacity",{get:function(){return this.options.capacity},enumerable:!0,configurable:!0});w.setVisible=function(v){this.isVisible=v;for(var r=0;r<this.items.length;r++)null!=this.items[r]&&(this.items[r].isVisible=v)};w.saveData=function(v){v.hasOwnProperty("shelves")||(v.shelves=[]);for(var r={type:this.type,name:this.name,facing:this.facing,gridX:this.gridX,gridY:this.gridY,options:this.options,items:[]},z=0;z<this.items.length;z++)r.items[z]=this.items[z]?this.items[z].itemType:null;v.shelves.push(r)};
w.getItemsCount=function(){for(var v=0,r=0;r<this.items.length;r++)null!=this.items[r]&&v++;return v};w.getFreeItemIdx=function(){for(var v=0;v<this.items.length;v++)if(null==this.items[v])return v;return-1};w.storeItem=function(v,r){if(void 0===r&&(r=this.getFreeItemIdx(),0>r))return-1;this.items[r]=v;return r};w.removeItem=function(){for(var v=0;v<this.items.length;v++)if(null!=this.items[v]&&this.items[v].ready){var r=this.items[v];this.items[v]=null;return r}return null};w.getPositionOfItemToStore=
function(v){var r=v%4;v=Math.floor(v/4);if(this.facing==FACING_DOWN||this.facing==FACING_UP)return v3(f/2-1*(r+.5),.6,k/4-1*v);if(this.facing==FACING_RIGHT||this.facing==FACING_LEFT)return v3(f/2-(r-.5),.6,.5-1*v)};w.getRotationOfItemToStore=function(v){return v3(0,0,0)};w.getScaleOfItemToStore=function(v,r){return v3(1,1,1)};w.standingNear=function(v){return Math.abs(this.position.x-v.position.x)>this.width||Math.abs(this.position.z-v.position.z)>1.5*this.depth?!1:!0};w.canItemBeStored=function(v){return this.getItemsCount()!=
this.capacity&&v.ownsItemOfType(this.options.itemType)?this.standingNear(v):!1};w.addPlayerIn=function(v){for(var r=0;r<this.playersIn.length;r++)if(null==this.playersIn[r])return this.playersIn[r]=v,r;this.playersIn.push(v);return this.playersIn.length-1};w.getPlayerInIdx=function(v){for(var r=0;r<this.playersIn.length;r++)if(this.playersIn[r]==v)return r;return-1};w.getPositionOfPlayerIn=function(v){var r=this.position.clone();this.facing==FACING_DOWN&&(r.x+=.9*v-.5*this.width,r.z+=-1.5);this.facing==
FACING_UP&&(r.x+=.9*v-this.width/2,r.z+=1.5);this.facing==FACING_LEFT&&(r.x+=-1.1,r.z+=.9*v-this.width/2);this.facing==FACING_RIGHT&&(r.x+=1.1,r.z+=.9*v-this.width/2);return r};w.removePlayerIn=function(v){for(var r=0;r<this.playersIn.length;r++)if(this.playersIn[r]==v)return this.playersIn.splice(r,1),!0;return!1};w.shiftPlayersIn=function(){for(var v=0;v<this.playersIn.length;v++){var r=this.playersIn[v];r.shopObjectPosIdx=this.getPlayerInIdx(r);0>r.shopObjectPosIdx&&(r.shopObjectPosIdx=this.addPlayerIn(r));
var z=this.getPositionOfPlayerIn(r.shopObjectPosIdx);r.pathToGoal=r.shop.getPathFromA2B(r.position.x,r.position.z,z.x,z.z);r.pathToGoal[r.pathToGoal.length-1][0]=z.x;r.pathToGoal[r.pathToGoal.length-1][1]=z.z;r.nextPathPos=r.pathToGoal[0];r.pathToGoal.splice(0,1)}};w.addPlayerOut=function(v){for(var r=0;r<this.playersOut.length;r++)if(null==this.playersOut[r])return this.playersOut[r]=v,r;this.playersOut.push(v);return this.playersOut.length-1};w.getPlayerOutIdx=function(v){for(var r=0;r<this.playersOut.length;r++)if(this.playersOut[r]==
v)return r;return-1};w.getPositionOfPlayerOut=function(v){var r=this.position.clone();if(this.facing==FACING_DOWN){r.x-=.5*this.width;for(var z=1;z<=v;z++)this.playersOut[z-1]&&(r.x+=this.playersOut[z-1].model_cart?1.5:1);r.z+=-1.9}this.facing==FACING_UP&&(r.x+=.9*v-this.width/2,r.z+=1.4);this.facing==FACING_LEFT&&(r.x+=-1.35,r.z+=.9*v-this.width/2);this.facing==FACING_RIGHT&&(r.x+=1.35,r.z+=.9*v-this.width/2);return r};w.removePlayerOut=function(v){for(var r=0;r<this.playersOut.length;r++)if(this.playersOut[r]==
v)return this.playersOut.splice(r,1),!0;return!1};w.shiftPlayersOut=function(){for(var v=0;v<this.playersOut.length;v++){var r=this.playersOut[v];r.shopObjectPosIdx=this.getPlayerOutIdx(r);0>r.shopObjectPosIdx&&(r.shopObjectPosIdx=this.addPlayerOut(r));var z=this.getPositionOfPlayerOut(r.shopObjectPosIdx);r.pathToGoal=r.shop.getPathFromA2B(r.position.x,r.position.z,z.x,z.z);r.pathToGoal[r.pathToGoal.length-1][0]=z.x;r.pathToGoal[r.pathToGoal.length-1][1]=z.z;r.nextPathPos=r.pathToGoal[0];r.pathToGoal.splice(0,
1)}};w.updatePlayerPickups=function(v){if(v.markedForDelete||!v.ready||v.moving||!v.canBuyProducts||0==v.itemsToBuy.length||0>v.itemsToBuy.indexOf(this.options.itemType)||!this.standingNear(v))return!1;var r=w.removeItem();null!=r&&v.pickupItem(r);return!0};w.updatePlayerStores=function(v){if(v.markedForDelete||!v.ready||v.moving||!v.canStoreProducts||v.playerType!=PLAYER_TYPE_PLAYER&&v.playerState!=PLAYER_STATE_STORE_PRODUCT||0==v.items.length||!this.canItemBeStored(v))return!1;v.storeItemOfType(this.options.itemType,
this);return!0};w.updatePlayersPickups=function(){0<this.playersOut.length&&this.updatePlayerPickups(this.playersOut[0])};w.updatePlayersStores=function(){0<this.playersIn.length&&this.updatePlayerStores(this.playersIn[0])};w.update=function(v){v=Shop.instance.getPlayerPlayer();this.updatePlayerPickups(v);this.updatePlayerStores(v);this.updatePlayersPickups();this.updatePlayersStores()};for(m=0;m<k;m++)for(b=0;b<f;b++)this.setCollision(e+b,h+m,COLLISION_WALL);this.shelves.push(w);return w},createShelfFromData:function(b){var e=
null;"tomatoShelf"==b.type&&(e=this.createTomatoShelf(b.gridX,b.gridY,b.facing,b.options));"eggShelf"==b.type&&(e=this.createEggShelf(b.gridX,b.gridY,b.facing,b.options));"ketchupShelf"==b.type&&(e=this.createKetchupShelf(b.gridX,b.gridY,b.facing,b.options));"butterShelf"==b.type&&(e=this.createButterShelf(b.gridX,b.gridY,b.facing,b.options));"sauceShelf"==b.type&&(e=this.createSauceShelf(b.gridX,b.gridY,b.facing,b.options));"flourShelf"==b.type&&(e=this.createFlourShelf(b.gridX,b.gridY,b.facing,
b.options));"breadShelf"==b.type&&(e=this.createBreadShelf(b.gridX,b.gridY,b.facing,b.options));"wheatShelf"==b.type&&(e=this.createWheatShelf(b.gridX,b.gridY,b.facing,b.options));"carrotShelf"==b.type&&(e=this.createCarrotShelf(b.gridX,b.gridY,b.facing,b.options));"milkShelf"==b.type&&(e=this.createMilkShelf(b.gridX,b.gridY,b.facing,b.options));"mozzarellaShelf"==b.type&&(e=this.createMozzarellaShelf(b.gridX,b.gridY,b.facing,b.options));if(null==e)return null;for(var h=0;h<b.items.length;h++)if(null!=
b.items[h]){var f=this.createProduct(b.items[h],0,0);f.ready=!0;f.parent=e;f.position=e.getPositionOfItemToStore(h);f.rotation=e.getRotationOfItemToStore(h);f.scaling=e.getScaleOfItemToStore(h);e.items[h]=f}e.name=b.name;return e},createTomatoShelf:function(b,e,h,f){void 0===f&&(f={});f.itemType="tomato";f.capacity=8;b=this.createShelf("tomato_shelf_mod",b,e,4,2,h,f);b.name="tomatoShelf_ "+BABYLON.RandomGUID();b.type="tomatoShelf";return b},createEggShelf:function(b,e,h,f){void 0===f&&(f={});f.itemType=
"egg";f.capacity=9;b=this.createShelf("eggs_shelf_mod",b,e,2,2,h,f);b.name="eggShelf_ "+BABYLON.RandomGUID();b.type="eggShelf";b.getPositionOfItemToStore=function(k){var m=k%3;k=Math.floor(k/3);if(this.facing==FACING_DOWN||this.facing==FACING_UP)return v3(this.width/2-.65*(m+.5),.6,this.depth/3-.65*k);if(this.facing==FACING_RIGHT||this.facing==FACING_LEFT)return v3(this.width/2-.65*(m-.5),.6,.5-.65*k)};return b},createKetchupShelf:function(b,e,h,f){this.increaseUnlockLevel("ketchup");void 0===f&&
(f={});f.itemType="ketchup";f.capacity=12;b=this.createShelf("ketchup_shelf",b,e,4,2,h,f);b.name="ketchupShelf_ "+BABYLON.RandomGUID();b.type="ketchupShelf";b.getPositionOfItemToStore=function(k){var m=k%4;k=Math.floor(k/4);if(this.facing==FACING_DOWN)return v3(.45*this.width-.9*(m+.5),.22+1*k,.15*this.depth);console.error("ketchupShelf.getPositionOfItemToStore facing not defined");return null};b.getScaleOfItemToStore=function(k,m){return v3(.77,.77,.77)};return b},createButterShelf:function(b,e,
h,f){this.increaseUnlockLevel("butter");void 0===f&&(f={});f.itemType="butter";f.capacity=12;b=this.createShelf("butter_shelf_mod",b,e,4,2,h,f);b.name="butterShelf_ "+BABYLON.RandomGUID();b.type="butterShelf";b.getPositionOfItemToStore=function(k){var m=k%4;k=Math.floor(k/4);if(this.facing==FACING_DOWN)return v3(.3*this.width-.61*(m+.5),.5+.7*k,.13*this.depth);console.error("butterShelf.getPositionOfItemToStore facing not defined");return null};return b},createSauceShelf:function(b,e,h,f){this.increaseUnlockLevel("ketchup");
void 0===f&&(f={});f.itemType="sauce";f.capacity=12;b=this.createShelf("sauce_shelf_mod",b,e,4,2,h,f);b.name="sauceShelf_ "+BABYLON.RandomGUID();b.type="sauceShelf";b.getPositionOfItemToStore=function(k){var m=k%4;k=Math.floor(k/4);if(this.facing==FACING_DOWN)return v3(.37*this.width-.7*(m+.5),.2+1*k,this.depth/3);console.error("ketchupShelf.getPositionOfItemToStore facing not defined");return null};return b},createFlourShelf:function(b,e,h,f){this.increaseUnlockLevel("flour");void 0===f&&(f={});
f.itemType="flour";f.capacity=12;b=this.createShelf("flour_shelf_mod",b,e,4,2,h,f);b.name="flourShelf_ "+BABYLON.RandomGUID();b.type="flourShelf";b.getPositionOfItemToStore=function(k){var m=k%4;k=Math.floor(k/4);if(this.facing==FACING_DOWN)return v3(.37*this.width-.74*(m+.5),.2+1*k,.15*this.depth);console.error("flourShelf.getPositionOfItemToStore facing not defined");return null};return b},createBreadShelf:function(b,e,h,f){this.increaseUnlockLevel("bread");void 0===f&&(f={});f.itemType="bread";
f.capacity=12;b=this.createShelf("bread_shelf_mod",b,e,4,2,h,f);b.name="breadShelf_ "+BABYLON.RandomGUID();b.type="breadShelf";b.getPositionOfItemToStore=function(k){var m=k%4;k=Math.floor(k/4);if(this.facing==FACING_DOWN)return v3(.37*this.width-.74*(m+.5),.2+1*k,.1*this.depth);console.error("breadShelf.getPositionOfItemToStore facing not defined");return null};return b},createWheatShelf:function(b,e,h,f){this.increaseUnlockLevel("wheat");void 0===f&&(f={});f.itemType="wheat";f.capacity=15;f.outlineWidth=
.04;b=this.createShelf("wheat_shelf_mod",b,e,2,2,h,f);b.name="wheatShelf_ "+BABYLON.RandomGUID();b.type="wheatShelf";b.getPositionOfItemToStore=function(k){if(0==Math.floor(k/9)){var m=k%3,n=Math.floor(k/3),y=.65;if(this.facing==FACING_DOWN||this.facing==FACING_UP)return v3(this.width/2-(m+.5)*y,-.15,this.depth/3-n*y);if(this.facing==FACING_RIGHT||this.facing==FACING_LEFT)return v3(this.width/2-(m-.5)*y,-.15,.5-n*y)}k-=9;m=k%3;n=Math.floor(k/3);y=.65;if(this.facing==FACING_DOWN)return v3(this.width/
2-(m+.5)*y,1.3,this.depth/3-(n+1)*y);if(this.facing==FACING_UP)return v3(this.width/2-(m+.5)*y,1.3,this.depth/3-n*y);if(this.facing==FACING_RIGHT||this.facing==FACING_LEFT)return v3(this.width/2-(m-.5)*y,1.3,.5-n*y)};return b},createCarrotShelf:function(b,e,h,f){this.increaseUnlockLevel("carrot");void 0===f&&(f={});f.itemType="carrot";f.capacity=15;b=this.createShelf("carrot_shelf_mod",b,e,4,2,h,f);b.name="carrotShelf_ "+BABYLON.RandomGUID();b.type="carrotShelf";b.getPositionOfItemToStore=function(k){var m=
k%5;k=Math.floor(k/5);if(this.facing==FACING_DOWN)return v3(.3*this.width-.65*(m+.5),.6,this.depth/3-.65*k);if(this.facing==FACING_UP)return v3(this.width/2-.65*(m+.5),.6,this.depth/3-.65*k);if(this.facing==FACING_RIGHT||this.facing==FACING_LEFT)return v3(this.width/2-.65*(m-.5),.6,.5-.65*k)};b.getRotationOfItemToStore=function(k){return v3(0,0,-DegToRad(60))};return b},createMilkShelf:function(b,e,h,f){this.increaseUnlockLevel("cow");void 0===f&&(f={});f.itemType="milk";f.capacity=12;b=this.createShelf("milk_shelf_mod",
b,e,4,2,h,f);b.name="milkShelf_ "+BABYLON.RandomGUID();b.type="milkShelf";b.getPositionOfItemToStore=function(k){if(0==Math.floor(k/6)){var m=Math.floor(k/2);return this.facing==FACING_DOWN?v3(1.6-.75*(k%2+.5),.8+1*m,.25*this.depth):null}k-=6;m=Math.floor(k/2);return this.facing==FACING_DOWN?v3(-1.6+.75*(k%2+.5),.9+1*m,.25*this.depth):null};return b},createMozzarellaShelf:function(b,e,h,f){void 0===f&&(f={});f.itemType="mozzarella";f.capacity=8;b=this.createShelf("mozzarella_shelf_mod",b,e,4,2,h,
f);b.name="mozzarellaShelf_ "+BABYLON.RandomGUID();b.type="mozzarellaShelf";b.getPositionOfItemToStore=function(k){var m=Math.floor(k/4);if(this.facing==FACING_DOWN||this.facing==FACING_UP)return v3(.38*this.width-.76*(k%4+.5),.55,this.depth/4-1*m)};return b},createProducer:function(b,e,h,f,k,m,n){e=Math.floor(e+.5);h=Math.floor(h+.5);if(m==FACING_LEFT||m==FACING_RIGHT){var y=f;f=k;k=y}var x=e-this.sizeX/2+f/2,w=this.sizeY/2-h-k/2;b=InstanceManager.createInstance("products",b,"producer_"+BABYLON.RandomGUID(),
v3(x,.05,w));b.rotationQuaternion=null;b.rotation.y=DegToRad(GetFacingRotation(m));b.gridX=e;b.gridY=h;b.position.x=x;b.position.y=.05;b.position.z=w;b.width=f;b.depth=k;b.facing=m;b.options=n;b.parent=this.nodeProducers;b.itemsOut=[];for(m=0;m<b.options.capacity;m++)b.itemsOut[m]=null;b.playersOut=[];b.timeToGrow=b.options.timeToGrow;b.setVisible=function(v){this.isVisible=v;for(var r=0;r<this.itemsOut.length;r++)null!=this.itemsOut[r]&&(this.itemsOut[r].isVisible=v)};b.saveData=function(v){v.hasOwnProperty("producers")||
(v.producers=[]);for(var r={type:this.type,name:this.name,facing:this.facing,gridX:this.gridX,gridY:this.gridY,options:this.options,timeToGrow:this.timeToGrow,itemsOut:[]},z=0;z<this.itemsOut.length;z++)r.itemsOut[z]=this.itemsOut[z]?this.itemsOut[z].itemType:null;v.producers.push(r)};b.getItemsCount=function(){for(var v=0,r=0;r<this.itemsOut.length;r++)null!=this.itemsOut[r]&&v++;return v};b.getFreeProducerIdx=function(){for(var v=0;v<this.itemsOut.length;v++)if(null==this.itemsOut[v])return v;return-1};
b.removeItem=function(){for(var v=0;v<this.itemsOut.length;v++)if(null!=this.itemsOut[v]&&this.itemsOut[v].ready){var r=this.itemsOut[v];this.itemsOut[v]=null;return r}return null};b.growFruit=function(){var v=this.getFreeProducerIdx();if(0>v)return!1;var r=Shop.instance.createProduct(this.options.itemTypeOut,0,0);r.parent=this;r.position=this.getPositionOnProducer(v);r.rotation=this.getRotationOnProducer(v);r.scaling=v3(0,0,0);r.ready=!1;r.producer=this;var z={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};
CommonAnimations.AnimateObjectProperty(r.scaling,"x",1,550,z,1,!1);CommonAnimations.AnimateObjectProperty(r.scaling,"y",1,550,z,1,!1);CommonAnimations.AnimateObjectProperty(r.scaling,"z",1,550,z,1,!1,function(){this.ready=!0;this.freezeWorldMatrix()}.bind(r));this.itemsOut[v]=r;return!0};b.standingNear=function(v){return Math.abs(this.position.x-v.position.x)>.6*this.width||1.5<Math.abs(this.position.z-v.position.z)?!1:!0};b.getPositionOnProducer=function(v){var r=v%4;v=Math.floor(v/4);this.facing==
FACING_DOWN&&(y=v3(-f/2+1*(v+.5),.2,-1+1*r));this.facing==FACING_UP&&(y=v3(-f/2+1*(v+.5),.2,-1.5+1*r));this.facing==FACING_LEFT&&(y=v3(-f/2+1*(v+.5),.2,-1.5+1*r));this.facing==FACING_RIGHT&&(y=v3(-f/2+1*(v+.5),.2,-1.5+1*r));return y};b.getRotationOnProducer=function(v){return v3(0,0,0)};b.addPlayerOut=function(v){for(var r=0;r<this.playersOut.length;r++)if(null==this.playersOut[r])return this.playersOut[r]=v,r;this.playersOut.push(v);return this.playersOut.length-1};b.getPlayerOutIdx=function(v){for(var r=
0;r<this.playersOut.length;r++)if(this.playersOut[r]==v)return r;return-1};b.getPositionOfPlayerOut=function(v){var r=this.position.clone();this.facing==FACING_LEFT&&(r.x+=1.2,r.z+=.9*v-.65*this.depth);this.facing==FACING_RIGHT&&(r.x+=1.2,r.z+=.9*v-.65*this.depth);this.facing==FACING_DOWN&&(r.x+=.9*(v+1)-this.width/2,r.z+=-.6);this.facing==FACING_UP&&(r.x+=this.width/2-.9*(v+1),r.z+=.6);return r};b.removePlayerOut=function(v){for(var r=0;r<this.playersOut.length;r++)if(this.playersOut[r]==v)return this.playersOut.splice(r,
1),!0;return!1};b.shiftPlayersOut=function(){for(var v=0;v<this.playersOut.length;v++){var r=this.playersOut[v];r.shopObjectPosIdx=this.getPlayerOutIdx(r);0>r.shopObjectPosIdx&&(r.shopObjectPosIdx=this.addPlayerOut(r));var z=this.getPositionOfPlayerOut(r.shopObjectPosIdx);r.pathToGoal=r.shop.getPathFromA2B(r.position.x,r.position.z,z.x,z.z);r.pathToGoal[r.pathToGoal.length-1][0]=z.x;r.pathToGoal[r.pathToGoal.length-1][1]=z.z;r.nextPathPos=r.pathToGoal[0];r.pathToGoal.splice(0,1)}};b.updatePlayer=
function(v){if(!v.markedForDelete&&v.ready&&!v.moving&&(v.canStoreProducts||v.canBuyProducts||v.canProvideFood)&&!(v.playerType!=PLAYER_TYPE_PLAYER&&v.playerState!=PLAYER_STATE_PICKUP_PRODUCT&&v.playerState!=PLAYER_STATE_PICKUP_FOOD||(v.canStoreProducts||v.canProvideFood)&&v.playerCapacity<=v.items.length||!v.canStoreProducts&&!v.canProvideFood)&&this.standingNear(v)){var r=this.removeItem();null!=r&&v.pickupItem(r)}};b.update=function(v){var r=Shop.instance.getPlayerPlayer();this.updatePlayer(r);
0<this.playersOut.length&&this.updatePlayer(this.playersOut[0]);this.getItemsCount()!=this.options.capacity&&this.updateGrow(v)};b.updateGrow=function(v){this.timeToGrow-=v;0<this.timeToGrow||(this.timeToGrow=this.options.timeToGrow,this.growFruit())};for(n=0;n<k;n++)for(m=0;m<f;m++)this.setCollision(e+m,h+n,COLLISION_WALL);this.producers.push(b);this.updateAvailableItemTypes();return b},createProducerFromData:function(b){var e=null;"tomatoField"==b.type&&(e=this.createTomatoField(b.gridX,b.gridY,
b.facing,b.options));"wheatField"==b.type&&(e=this.createWheatField(b.gridX,b.gridY,b.facing,b.options));"carrotField"==b.type&&(e=this.createCarrotField(b.gridX,b.gridY,b.facing,b.options));if(null==e)return null;for(var h=0;h<b.itemsOut.length;h++)if(null!=b.itemsOut[h]){var f=this.createProduct(b.itemsOut[h],0,0);f.ready=!0;f.parent=e;f.position=e.getPositionOnProducer(h);f.rotation=e.getRotationOnProducer(h);e.itemsOut[h]=f}e.name=b.name;return e},createTomatoField:function(b,e,h,f){void 0===
f&&(f={});f.itemTypeOut="tomato";f.capacity=3;f.timeToGrow=TOMATO_TIME_TO_GROW;b=this.createProducer("tomato_plant_a_mod",b,e,4,1,h,f);b.rotation.y=DegToRad(GetFacingRotation(h)-180);b.name="tomatoField_"+BABYLON.RandomGUID();b.type="tomatoField";SHOP_SHADOWS_ENABLED&&ScreenGame.instance.shadowGenerator.addShadowCaster(b,!0);b.getPositionOnProducer=function(k){return 0==k?v3(-.3,.3,0):1==k?v3(.35,.7,.65):2==k?v3(0,1.2,-.25):v3(0,0,0)};return b},createWheatField:function(b,e,h,f){this.increaseUnlockLevel("wheat");
void 0===f&&(f={});f.itemTypeOut="wheat";f.capacity=1;f.timeToGrow=WHEAT_TIME_TO_GROW;h=this.createProducer("wheat_plant_b_mod",b,e,2,2,h,f);h.name="wheatField_"+BABYLON.RandomGUID();h.type="wheatField";h.renderOutline=!1;h.parent=this.nodeProducers;h.model_plant=InstanceManager.createInstance("products","wheat_plant_a_mod","wheat_plant_a_"+BABYLON.RandomGUID(),h.position.clone());h.model_plant.name="wheatPlant_"+BABYLON.RandomGUID();EnableChildrenOutline(h.model_plant.parent,"wheat_plant_a_mod",
.02);h.getPositionOfPlayerOut=function(m){var n=this.position.clone();this.facing==FACING_LEFT&&(n.x+=.5,n.z+=.9*m-.4*this.depth);this.facing==FACING_RIGHT&&(n.x+=1,n.z+=.9*m-.5*this.depth);this.facing==FACING_DOWN&&(n.x+=.9*(m+1)-this.width/2,n.z+=-.3);this.facing==FACING_UP&&(n.x+=this.width/2-.9*(m+1),n.z+=.3);return n};h.getPositionOnProducer=function(m){return v3(0,.2,0)};h.getRotationOnProducer=function(m){return v3(0,DegToRad(90),0)};h.updateGrow=function(m){this.timeToGrow-=m;0<this.timeToGrow||
(this.timeToGrow=this.options.timeToGrow,this.growFruit())};for(f=0;2>f;f++)for(var k=0;2>k;k++)this.setCollision(b+k,e+f,COLLISION_NONE);return h},createCarrotField:function(b,e,h,f){this.increaseUnlockLevel("carrot");void 0===f&&(f={});f.itemTypeOut="carrot";f.capacity=1;f.timeToGrow=CARROT_TIME_TO_GROW;h=this.createProducer("wheat_plant_b_mod",b,e,2,2,h,f);h.name="carrot_"+BABYLON.RandomGUID();h.type="carrotField";h.renderOutline=!1;h.model_plant=InstanceManager.createInstance("products","carrot_mod",
"carrot_"+BABYLON.RandomGUID(),h.position.clone());h.model_plant.name="carrotPlant_"+BABYLON.RandomGUID();EnableChildrenOutline(h.model_plant.parent,"carrot_mod",.04);h.model_plant.position.y=-1;h.model_plant.scaling=v3(1.5,1.5,1.5);h.getPositionOfPlayerOut=function(m){var n=this.position.clone();this.facing==FACING_LEFT&&(n.x+=.5,n.z+=.9*m-.4*this.depth);this.facing==FACING_RIGHT&&(n.x+=1,n.z+=.9*m-.5*this.depth);this.facing==FACING_DOWN&&(n.x+=.9*(m+1)-.45*this.width,n.z+=-.3);this.facing==FACING_UP&&
(n.x+=this.width/2-.9*(m+1),n.z+=.3);return n};h.getPositionOnProducer=function(m){return v3(0,-.85,0)};h.updateGrow=function(m){this.timeToGrow-=m;m=1.5*(1-this.timeToGrow/this.options.timeToGrow);this.model_plant.scaling=v3(m,m,m);0<this.timeToGrow||(this.timeToGrow=this.options.timeToGrow,this.growFruit())};for(f=0;2>f;f++)for(var k=0;2>k;k++)this.setCollision(b+k,e+f,COLLISION_NONE);return h},createFloor:function(b,e,h,f,k){b=Math.floor(b+.5);e=Math.floor(e+.5);b=b-this.sizeX/2+h/2;e=this.sizeY/
2-e-f/2;h=BABYLON.MeshBuilder.CreateBox("floor",{height:.002,width:h,depth:f});h.doNotSyncBoundingInfo=!0;h.alwaysSelectAsActiveMesh=!0;h.parent=this.nodeFloors;h.position.x=b;h.position.y=.001;h.position.z=e;h.layerMask=LAYER_SCREEN_GAME;h.material=this.materialFloor.clone();h.material.diffuseColor=k.color;h.receiveShadows=SHOP_SHADOWS_ENABLED;h.options=k;h.options.hasOwnProperty("texture")&&(h.options.hasOwnProperty("vScale")||(h.options.vScale=1),h.material=this.getFloorMaterial(h.options.texture,
h.options.vScale));k.hasOwnProperty("offsetY")&&(h.position.y+=k.offsetY);this.floors.push(h);return h},createTransformer:function(b,e,h,f,k,m,n){e=Math.floor(e+.5);h=Math.floor(h+.5);if(m==FACING_LEFT||m==FACING_RIGHT){var y=f;f=k;k=y}y=e-this.sizeX/2+f/2;var x=this.sizeY/2-h-k/2;n.hasOwnProperty("container")||(n.container="machines");n.hasOwnProperty("id")||(n.id="transformer");var w=InstanceManager.createInstance(n.container,b,n.id,v3(y,0,x));w.rotationQuaternion=null;w.rotation.y=DegToRad(GetFacingRotation(m)-
90);w.gridX=e;w.gridY=h;w.width=f;w.depth=k;w.facing=m;w.layerMask=LAYER_SCREEN_GAME;w.options=n;w.name="machine_"+BABYLON.RandomGUID();w.level=0;w.machineReady=!0;w.itemsIn=[];if(Array.isArray(w.options.itemTypeIn))for(b=0;b<w.options.capacity*w.options.itemTypeIn.length;b++)w.itemsIn[b]=null;else for(b=0;b<w.options.capacity;b++)w.itemsIn[b]=null;w.itemsOut=[];for(b=0;b<w.options.capacity;b++)w.itemsOut[b]=null;w.playersIn=[];w.playersOut=[];w._timeToTransform=w.timeToTransform;w.setVisible=function(v){this.isVisible=
v;for(var r=0;r<this.itemsOut.length;r++)null!=this.itemsOut[r]&&(this.itemsOut[r].isVisible=v);for(r=0;r<this.itemsIn.length;r++)null!=this.itemsIn[r]&&(this.itemsIn[r].isVisible=v)};Object.defineProperty(w,"capacity",{get:function(){var v=this.options.capacity-4;2<=this.level&&(v+=2);4<=this.level&&(v+=2);return v},enumerable:!0,configurable:!0});Object.defineProperty(w,"timeToTransform",{get:function(){var v=this.options.timeToTransform,r=.1*this.options.timeToTransform;1<=this.level&&(v-=r);3<=
this.level&&(v-=r);5<=this.level&&(v-=r);6<=this.level&&(v-=r);return v},enumerable:!0,configurable:!0});w.saveData=function(v){v.hasOwnProperty("transformers")||(v.transformers=[]);for(var r={type:this.type,name:this.name,facing:this.facing,gridX:this.gridX,gridY:this.gridY,options:this.options,level:this.level,timeToGrow:this.timeToGrow,itemsIn:[],itemsOut:[]},z=0;z<this.itemsIn.length;z++)r.itemsIn[z]=this.itemsIn[z]?this.itemsIn[z].itemType:null;for(z=0;z<this.itemsOut.length;z++)r.itemsOut[z]=
this.itemsOut[z]?this.itemsOut[z].itemType:null;v.transformers.push(r)};w.increaseLevel=function(){this.level++;this.updateItemsCapacity();var v="+ "+Str("SPEED").toLowerCase();if(2==this.level||4==this.level)v="+2 "+Str("CAPACITY");var r=ScreenGame.instance.getObjectProjection2D(this.position);TextParticles.instance.CreateTextParticle1(r.x,r.y-ScreenGame.instance.activeViewportCenter.y-100*Resolution.SCALE,v,35,"rgba(255,255,255,1)")};w.updateItemsCapacity=function(){var v=this.capacity,r=this.capacity;
for(Array.isArray(this.options.itemTypeIn)&&(v*=this.options.itemTypeIn.length);this.itemsIn.length<v;)this.itemsIn.push(null);for(;this.itemsOut.length<r;)this.itemsOut.push(null)};w.getItemsCount=function(v,r){void 0===r&&(r=null);for(var z=0,K=0;K<v.length;K++)null!=v[K]&&v[K].ready&&(null==r||v[K].itemType==r)&&z++;return z};w.getFreeItemIdx=function(v,r){void 0===r&&(r=0);for(var z=r*=this.capacity;z<r+this.capacity;z++)if(null==v[z])return z;return-1};w.removeItem=function(){for(var v=0;v<this.itemsOut.length;v++)if(null!=
this.itemsOut[v]&&this.itemsOut[v].ready){var r=this.itemsOut[v];this.itemsOut[v]=null;return r}return null};w.storeItem=function(v,r){if(void 0===r&&(r=0,Array.isArray(this.options.itemTypeIn)&&(r=this.options.itemTypeIn.indexOf(v.itemType)),r=this.getFreeItemIdx(this.itemsIn,r),0>r))return-1;this.itemsIn[r]=v;return r};w.standingNearInput=function(v){var r=v.position.x-w.position.x;v=w.position.z-v.position.z;if(this.facing==FACING_RIGHT){if(0>r||r>.7*w.width)return!1;v=Math.abs(v);if(v>.85*w.depth)return!1}if(this.facing==
FACING_LEFT){if(0<r||r<.7*-w.width)return!1;v=Math.abs(v);if(v>.85*w.depth)return!1}return this.facing==FACING_DOWN&&(r=Math.abs(r),r>.85*w.width||0>v||v>.9*w.depth)||this.facing==FACING_UP&&(r=Math.abs(r),r>.85*w.width||0<v||v<.7*-w.depth)?!1:!0};w.standingNearOutput=function(v){var r=v.position.x-w.position.x;v=w.position.z-v.position.z;if(this.facing==FACING_RIGHT){if(0<r||r<.7*-w.width)return!1;v=Math.abs(v);if(v>.85*w.depth)return!1}if(this.facing==FACING_LEFT){if(0>r||r>.7*w.width)return!1;
v=Math.abs(v);if(v>.85*w.depth)return!1}return this.facing==FACING_DOWN&&(r=Math.abs(r),r>.85*w.width||0<v||v<.7*-w.depth)||this.facing==FACING_UP&&(r=Math.abs(r),r>.85*w.width||0>v||v>.7*w.depth)?!1:!0};w.canItemBeTransformed=function(v){if(Array.isArray(this.options.itemTypeIn)){for(var r=0,z=0;z<this.options.itemTypeIn.length;z++)this.getItemsCount(this.itemsIn,this.options.itemTypeIn[z])<this.capacity&&v.ownsItemOfType(this.options.itemTypeIn[z])&&r++;if(0==r)return!1}else if(this.getItemsCount(this.itemsIn)==
this.capacity||!v.ownsItemOfType(this.options.itemTypeIn))return!1;return this.standingNearInput(v)};w.canItemBePicked=function(v){return 0==this.getItemsCount(this.itemsOut)?!1:this.standingNearOutput(v)};w.consumeItem=function(){var v=[];v=Array.isArray(this.options.itemTypeIn)?this.options.itemTypeIn.slice():[this.options.itemTypeIn];this.machineReady=0==v.length;this.itemsToRemove=[];for(var r=0;r<this.itemsIn.length;r++)if(null!=this.itemsIn[r]){var z=v.indexOf(this.itemsIn[r].itemType);if(!(0>
z)){var K=this.itemsIn[r];this.itemsToRemove.push(r);var T={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(K.scaling,"x",0,250,T,1,!1);CommonAnimations.AnimateObjectProperty(K.scaling,"y",0,250,T,1,!1);CommonAnimations.AnimateObjectProperty(K.scaling,"z",0,250,T,1,!1,function(R,L,Q){R=this.itemsToRemove[0];this.itemsIn[R].dispose();this.itemsIn[R]=null;this.itemsToRemove.splice(0,1);(this.machineReady=0==this.itemsToRemove.length)&&this.produceItem()}.bind(this));
v.splice(z,1);if(0==v.length)return!0}}return!1};w.produceItem=function(){var v=this.getFreeItemIdx(this.itemsOut);if(0>v)return!1;var r=Shop.instance.createProduct(this.options.itemTypeOut,0);r.parent=this;r.position=this.getPositionOfItemToPick(v);r.rotation=this.getRotationOfItemToPick(v);r.scaling=v3(0,0,0);r.ready=!1;r.transformer=this;var z=this.getScaleOfItemToPick(v),K={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(r.scaling,
"x",z.x,550,K,1,!1);CommonAnimations.AnimateObjectProperty(r.scaling,"y",z.y,550,K,1,!1);CommonAnimations.AnimateObjectProperty(r.scaling,"z",z.z,550,K,1,!1,function(){this.ready=!0}.bind(r));this.itemsOut[v]=r;return!0};w.getPositionOfItemToPick=function(v){if(0==Math.floor(v/4)){var r=.3;v=DegToRad(45+90*v);return v3(r*Math.sin(v),.2,.32*f-r*Math.cos(v))}r=.52;v=DegToRad(90*(v-4));return v3(r*Math.sin(v),.2,.32*f-r*Math.cos(v))};w.getRotationOfItemToPick=function(v){return v3(0,0,0)};w.getScaleOfItemToPick=
function(v){return v3(1,1,1)};w.getPositionOfItemToStore=function(v){if(0==Math.floor(v/4)){var r=.3;v=DegToRad(45+90*v);return v3(r*Math.sin(v),.2,.19*-f+r*Math.cos(v))}r=.52;v=DegToRad(90*(v-4));return v3(r*Math.sin(v),.2,.19*-f+r*Math.cos(v))};w.getRotationOfItemToStore=function(v){return v3(0,0,0)};w.getScaleOfItemToStore=function(v,r){return v3(1,1,1)};w.addPlayerIn=function(v){for(var r=0;r<this.playersIn.length;r++)if(null==this.playersIn[r])return this.playersIn[r]=v,r;this.playersIn.push(v);
return this.playersIn.length-1};w.getPlayerInIdx=function(v){for(var r=0;r<this.playersIn.length;r++)if(this.playersIn[r]==v)return r;return-1};w.getPositionOfPlayerIn=function(v){var r=this.position.clone();this.facing==FACING_DOWN&&(r.x+=.9*v-this.width/2,r.z+=.6*-this.depth);this.facing==FACING_UP&&(r.x+=.6*this.width-.9*v,r.z+=.6*this.depth);this.facing==FACING_LEFT&&(r.x+=-.2,r.z+=.9*v-this.width/2);this.facing==FACING_RIGHT&&(r.x+=.45*this.width,r.z+=.5-.9*v);return r};w.removePlayerIn=function(v){for(var r=
0;r<this.playersIn.length;r++)if(this.playersIn[r]==v)return this.playersIn.splice(r,1),!0;return!1};w.shiftPlayersIn=function(){for(var v=0;v<this.playersIn.length;v++){var r=this.playersIn[v];r.shopObjectPosIdx=this.getPlayerInIdx(r);0>r.shopObjectPosIdx&&(r.shopObjectPosIdx=this.addPlayerIn(r));var z=this.getPositionOfPlayerIn(r.shopObjectPosIdx);r.pathToGoal=r.shop.getPathFromA2B(r.position.x,r.position.z,z.x,z.z);r.pathToGoal[r.pathToGoal.length-1][0]=z.x;r.pathToGoal[r.pathToGoal.length-1][1]=
z.z;r.nextPathPos=r.pathToGoal[0];r.pathToGoal.splice(0,1)}};w.addPlayerOut=function(v){for(var r=0;r<this.playersOut.length;r++)if(null==this.playersOut[r])return this.playersOut[r]=v,r;this.playersOut.push(v);return this.playersOut.length-1};w.getPlayerOutIdx=function(v){for(var r=0;r<this.playersOut.length;r++)if(this.playersOut[r]==v)return r;return-1};w.getPositionOfPlayerOut=function(v){var r=this.position.clone();this.facing==FACING_DOWN&&(r.x+=this.width/2-.9*v,r.z+=.6*this.depth);this.facing==
FACING_UP&&(r.x+=.9*v-this.width/2,r.z-=.6*this.depth);this.facing==FACING_LEFT&&(r.x+=-1,r.z+=.9*v-this.width/2);this.facing==FACING_RIGHT&&(r.x-=.65*this.width,r.z-=.5-.9*v);return r};w.removePlayerOut=function(v){for(var r=0;r<this.playersOut.length;r++)if(this.playersOut[r]==v)return this.playersOut.splice(r,1),!0;return!1};w.shiftPlayersOut=function(){for(var v=0;v<this.playersOut.length;v++){var r=this.playersOut[v];r.shopObjectPosIdx=this.getPlayerOutIdx(r);0>r.shopObjectPosIdx&&(r.shopObjectPosIdx=
this.addPlayerOut(r));var z=this.getPositionOfPlayerOut(r.shopObjectPosIdx);r.pathToGoal=r.shop.getPathFromA2B(r.position.x,r.position.z,z.x,z.z);r.pathToGoal[r.pathToGoal.length-1][0]=z.x;r.pathToGoal[r.pathToGoal.length-1][1]=z.z;r.nextPathPos=r.pathToGoal[0];r.pathToGoal.splice(0,1)}};w.updatePlayerPickups=function(v){if(!v.markedForDelete&&v.ready&&!(v.moving||!v.canStoreProducts&&!v.canProvideFood||v.playerType!=PLAYER_TYPE_PLAYER&&v.playerState!=PLAYER_STATE_PICKUP_PRODUCT&&v.playerState!=PLAYER_STATE_PICKUP_FOOD||
v.playerCapacity<=v.items.length)&&this.standingNearOutput(v)){var r=w.removeItem();null!=r&&v.pickupItem(r)}};w.updatePlayerStores=function(v){v.ready&&(v.moving||v.canProvideFood&&(v.playerType==PLAYER_TYPE_PLAYER||v.playerState==PLAYER_STATE_STORE_FOOD)&&0!=v.items.length&&this.canItemBeTransformed(v)&&v.storeItemOfType(this.options.itemTypeIn,this))};w.updatePlayers=function(){var v=Shop.instance.getPlayerPlayer();this.updatePlayerStores(v);this.updatePlayerPickups(v);0<this.playersIn.length&&
this.updatePlayerStores(this.playersIn[0]);0<this.playersOut.length&&this.updatePlayerPickups(this.playersOut[0])};w.doWeHaveItemsIn=function(){if(Array.isArray(this.options.itemTypeIn))for(var v=0;v<this.options.itemTypeIn.length;v++){if(0==this.getItemsCount(this.itemsIn,this.options.itemTypeIn[v]))return!1}else if(0==this.getItemsCount(this.itemsIn))return!1;return!0};w.canWePlaceItemsOut=function(){return this.getItemsCount(this.itemsOut)==this.capacity?!1:!0};w.update=function(v){this.updatePlayers();
this.doWeHaveItemsIn()&&this.canWePlaceItemsOut()&&(this._timeToTransform-=v,0<this._timeToTransform||!this.machineReady||(this._timeToTransform=this.timeToTransform,this.consumeItem()))};this.transformers.push(w);this.updateAvailableItemTypes();return w},createTransformerFromData:function(b){var e=null;"chicken"==b.type&&(e=this.createChicken(b.gridX,b.gridY,b.facing,b.options));"cow"==b.type&&(e=this.createCow(b.gridX,b.gridY,b.facing,b.options));"ketchupMachine"==b.type&&(e=this.createKetchupMachine(b.gridX,
b.gridY,b.facing,b.options));"sauceMachine"==b.type&&(e=this.createSauceMachine(b.gridX,b.gridY,b.facing,b.options));"breadMachine"==b.type&&(e=this.createBreadMachine(b.gridX,b.gridY,b.facing,b.options));"flourMachine"==b.type&&(e=this.createFlourMachine(b.gridX,b.gridY,b.facing,b.options));"mozzarellaMachine"==b.type&&(e=this.createMozzarellaMachine(b.gridX,b.gridY,b.facing,b.options));"butterMachine"==b.type&&(e=this.createButterMachine(b.gridX,b.gridY,b.facing,b.options));e.level=b.level;e.updateItemsCapacity();
if(null==e)return null;for(var h=0;h<b.itemsIn.length;h++)if(null!=b.itemsIn[h]){var f=this.createProduct(b.itemsIn[h],0,0);f.ready=!0;f.parent=e;f.position=e.getPositionOfItemToStore(h,b.itemsIn[h]);f.rotation=e.getRotationOfItemToStore(h,b.itemsIn[h]);f.scaling=e.getScaleOfItemToStore(h,b.itemsIn[h]);e.itemsIn[h]=f}for(h=0;h<b.itemsOut.length;h++)null!=b.itemsOut[h]&&(f=this.createProduct(b.itemsOut[h],0,0),f.ready=!0,f.parent=e,f.position=e.getPositionOfItemToPick(h),f.rotation=e.getRotationOfItemToPick(h),
f.scaling=e.getScaleOfItemToPick(h),e.itemsOut[h]=f);e.name=b.name;return e},createChicken:function(b,e,h,f){this.increaseUnlockLevel("chicken");void 0===f&&(f={});f.id="chicken";f.itemTypeIn="tomato";f.itemTypeOut="egg";f.capacity=8;f.timeToTransform=CHICKEN_EAT_TIME;f.container="animals";var k=this.createTransformer("chicken_field",b,e,3,5,h,f);k.rotationQuaternion=null;k.rotation.y=DegToRad(GetFacingRotation(h)+90);k.name="chicken_"+BABYLON.RandomGUID();k.type="chicken";(k.receiveShadows=SHOP_SHADOWS_ENABLED)&&
ScreenGame.instance.shadowGenerator.addShadowCaster(k,!0);k.animal=InstanceManager.createInstance("animals","chicken_mod",f.id,k.position.clone());k.animal.rotationQuaternion=null;k.animal.rotation.y=DegToRad(GetFacingRotation(h)+90);k.animal.position.y=0;EnableChildrenOutline(k.animal.parent,"chicken_mod",.06);SHOP_SHADOWS_ENABLED&&ScreenGame.instance.shadowGenerator.addShadowCaster(k.animal,!0);k.parent=this.nodeAnimals;if(h==FACING_RIGHT||h==FACING_LEFT)for(h=0;h<k.depth;h++)this.setCollision(b,
e+h,COLLISION_WALL),this.setCollision(b+k.width-1,e+h,COLLISION_WALL);k.getScaleOfItemToPick=function(m,n){return v3(.78,.78,.78)};k.getPositionOfItemToPick=function(m){if(0==Math.floor(m/4)){var n=.28;m=DegToRad(90+90*m);return v3(n*Math.sin(m),.2,.22*this.width-n*Math.cos(m))}n=.49;m=DegToRad(45+90*(m-4));return v3(n*Math.sin(m),.2,.22*this.width-n*Math.cos(m))};k.getPositionOfItemToStore=function(m){if(0==Math.floor(m/4)){var n=.3;m=DegToRad(90+90*m);return v3(n*Math.sin(m),.2,.25*-this.width+
n*Math.cos(m))}n=.53;m=DegToRad(45+90*(m-4));return v3(n*Math.sin(m),.2,.25*-this.width+n*Math.cos(m))};k.getScaleOfItemToStore=function(m,n){return v3(.8,.8,.8)};k.consumeItem=function(){var m={func:BABYLON.CubicEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEINOUT};k.animal.rotationQuaternion=null;CommonAnimations.AnimateObjectProperty(k.animal.rotation,"x",0,400,m,1,!1,null,[[0,DegToRad(-10)],[.25,DegToRad(0)],[.5,DegToRad(-10)],[.75,DegToRad(5)],[1,DegToRad(0)]]);for(var n=0;n<this.itemsIn.length;n++)if(null!=
this.itemsIn[n]){var y=this.itemsIn[n];m={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(y.scaling,"x",0,250,m,1,!1);CommonAnimations.AnimateObjectProperty(y.scaling,"y",0,250,m,1,!1);CommonAnimations.AnimateObjectProperty(y.scaling,"z",0,250,m,1,!1,function(){y.dispose();this.itemsIn[n]=null;this.produceItem()}.bind(this));return!0}return!1};return k},createCow:function(b,e,h,f){this.increaseUnlockLevel("cow");void 0===f&&(f={});f.id=
"cow";f.itemTypeIn="wheat";f.itemTypeOut="milk";f.capacity=8;f.timeToTransform=COW_EAT_TIME;f.container="animals";var k=this.createTransformer("cow_field_mod",b,e,3,5,h,f);k.rotationQuaternion=null;k.rotation.y=DegToRad(GetFacingRotation(h)-90);k.name="cow_"+BABYLON.RandomGUID();k.type="cow";k.animal=InstanceManager.createInstance("animals","cow_mod",f.id,k.position.clone());k.animal.rotationQuaternion=null;k.animal.rotation.y=DegToRad(GetFacingRotation(h)-90);k.animal.position.y=0;EnableChildrenOutline(k.animal.parent,
"cow_mod",.06);k.tray=InstanceManager.createInstance("animals","cow_tray_mod",f.id,k.position.clone());k.tray.rotationQuaternion=null;k.tray.rotation.y=DegToRad(GetFacingRotation(h)-90);k.tray.position.x+=h==FACING_LEFT?3:-3;k.tray.position.y=.05;if(h==FACING_RIGHT||h==FACING_LEFT)for(h=0;h<k.depth;h++)this.setCollision(b,e+h,COLLISION_WALL),this.setCollision(b+k.width-1,e+h,COLLISION_WALL);k.standingNearInput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;if(this.facing==
FACING_RIGHT){if(0>n||n>.78*this.width)return!1;m=Math.abs(m);if(m>1*this.depth)return!1}if(this.facing==FACING_LEFT){if(0<n||n<.8*-this.width)return!1;m=Math.abs(m);if(m>1*this.depth)return!1}return this.facing==FACING_DOWN&&(n=Math.abs(n),n>.85*this.width||0>m||m>.9*this.depth)||this.facing==FACING_UP&&(n=Math.abs(n),n>.85*this.width||0<m||m<.7*-this.depth)?!1:!0};k.standingNearOutput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;if(this.facing==FACING_RIGHT){if(n>
.2*-this.width||n<1.2*-this.width)return!1;m=Math.abs(m);if(m>1*this.depth)return!1}if(this.facing==FACING_LEFT){if(n<.2*this.width||n>1.2*this.width)return!1;m=Math.abs(m);if(m>1*this.depth)return!1}return this.facing==FACING_DOWN&&(n=Math.abs(n),n>.9*this.width||0<m||m<-this.depth)||this.facing==FACING_UP&&(n=Math.abs(n),n>.9*this.width||0>m||m>1*this.depth)?!1:!0};k.getPositionOfItemToPick=function(m){return v3(.3-m%2*.75,.5,-2.1-.47*(Math.floor(m/2)+.5))};k.getPositionOfItemToStore=function(m){if(0==
Math.floor(m/4)){var n=.3;m=DegToRad(45+90*m);return v3(-n*Math.sin(m),.2,.45*this.width+n*Math.cos(m))}n=.52;m=DegToRad(90*(m-4));return v3(-n*Math.sin(m),.2,.45*this.width+n*Math.cos(m))};k.getRotationOfItemToStore=function(m){return this.facing==FACING_RIGHT||this.facing==FACING_LEFT?v3(0,DegToRad(90),0):v3(0,0,0)};k.consumeItem=function(){var m=[this.options.itemTypeIn],n={func:BABYLON.CubicEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEINOUT};k.animal.rotationQuaternion=null;CommonAnimations.AnimateObjectProperty(k.animal.rotation,
"x",0,400,n,1,!1,null,[[0,DegToRad(0)],[.25,DegToRad(10)],[.5,DegToRad(0)],[.75,DegToRad(12)],[1,DegToRad(-0)]]);this.machineReady=0==m.length;this.itemsToRemove=[];for(var y=0;y<this.itemsIn.length;y++)if(null!=this.itemsIn[y]){var x=m.indexOf(this.itemsIn[y].itemType);if(!(0>x)){var w=this.itemsIn[y];this.itemsToRemove.push(y);n={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(w.scaling,"x",0,250,n,1,!1);CommonAnimations.AnimateObjectProperty(w.scaling,
"y",0,250,n,1,!1);CommonAnimations.AnimateObjectProperty(w.scaling,"z",0,250,n,1,!1,function(){var v=this.itemsToRemove[0];this.itemsIn[v].dispose();this.itemsIn[v]=null;this.itemsToRemove.splice(0,1);this.machineReady=0==this.itemsToRemove.length;this.produceItem()}.bind(this));m.splice(x,1);if(0==m.length)return!0}}return!1};k.getPositionOfPlayerIn=function(m){var n=this.position.clone();this.facing==FACING_LEFT&&(n.x+=-1,n.z+=.9*m-.5);this.facing==FACING_RIGHT&&(n.x+=.45*this.width,n.z+=.5-.9*
m);return n};k.getPositionOfPlayerOut=function(m){var n=this.position.clone();this.facing==FACING_LEFT&&(n.x+=.45*this.width,n.z+=.5-.9*m);this.facing==FACING_RIGHT&&(n.x+=-1,n.z+=.9*m-this.width/2);return n};for(h=0;h<k.depth;h++)for(f=0;f<k.width;f++)this.setCollision(b+f,e+h,10);return k},createKetchupMachine:function(b,e,h,f){this.increaseUnlockLevel("ketchup");h=FACING_UP;void 0===f&&(f={});f.id="ketchupMachine";f.itemTypeIn="tomato";f.itemTypeOut="ketchup";f.capacity=9;f.timeToTransform=KETCHUP_PRODUCE_TIME;
var k=this.createTransformer("table_machine_s_mod",b,e,6,2,h,f);k.name="ketchupMachine_"+BABYLON.RandomGUID();k.type="ketchupMachine";k.machine=InstanceManager.createInstance("machines","tomao_machine_mod",f.id,k.position.clone());k.machine.rotationQuaternion=null;k.machine.position.y=1.02;k.machine.rotation.y=DegToRad(GetFacingRotation(h));k.tray=InstanceManager.createInstance("machines_ic","tomato_ic",f.id,k.position.clone());k.tray.rotationQuaternion=null;k.tray.position.x+=2.25;k.tray.position.y+=
1.07;k.tray.position.z+=.01;k.parent=this.nodeMachines;k.getPositionOfItemToStore=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(-3.12+.57*(n+.5),1.2,-.5+.5*m);console.error("ketchupMachine.getPositionOfItemToStore: facing not defined")};k.getPositionOfItemToPick=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(3.12-.58*(n+.5),1.22,-.5+.5*m);console.error("ketchupMachine.getPositionOfItemToPick: facing not defined")};k.getRotationOfItemToStore=
function(m){return v3(0,0,0)};k.standingNearInput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("ketchupMachine.standingNearInput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("ketchupMachine.standingNearInput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)?!1:!0};k.standingNearOutput=
function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("ketchupMachine.standingNearOutput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("ketchupMachine.standingNearOutput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)?!1:!0};k.consumeItem=function(){var m=[];m=Array.isArray(this.options.itemTypeIn)?
this.options.itemTypeIn.slice():[this.options.itemTypeIn];this.machineReady=0==m.length;this.itemsToRemove=[];for(var n=0;n<this.itemsIn.length;n++)if(null!=this.itemsIn[n]){var y=m.indexOf(this.itemsIn[n].itemType);if(!(0>y)){var x=this.itemsIn[n];this.itemsToRemove.push(n);var w={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(x.position,"x",1.1,450,w,1,!1,null,[[0,x.position.x],[.5,x.position.x/3+.5],[1,.5]]);CommonAnimations.AnimateObjectProperty(x.position,
"y",1.1,450,w,1,!1,null,[[0,x.position.y],[.4,2.8],[1,1]]);CommonAnimations.AnimateObjectProperty(x.position,"z",1.1,450,w,1,!1,null,[[0,x.position.z],[.5,x.position.z/2],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"x",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"y",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"z",.5,450,w,1,!1,function(v,r,z){v=this.itemsToRemove[0];this.itemsIn[v].dispose();
this.itemsIn[v]=null;this.itemsToRemove.splice(0,1);this.machineReady=0==this.itemsToRemove.length;this.produceItem()}.bind(this),[[0,1],[.5,1],[.6,0],[1,0]]);m.splice(y,1);if(0==m.length)return!0}}return!1};k.produceItem=function(){var m=this.getFreeItemIdx(this.itemsOut);if(0>m)return!1;var n=Shop.instance.createProduct(this.options.itemTypeOut,0);n.parent=this;n.destPos=this.getPositionOfItemToPick(m);n.position=v3(.05,1.1,.6);n.rotation=this.getRotationOfItemToPick(m);n.scaling=v3(0,0,0);n.ready=
!1;n.transformer=this;var y={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(n.scaling,"x",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"y",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"z",1,450,y,1,!1,function(){var x=this.destPos.x-this.position.x,w=this.destPos.z-this.position.z;CommonAnimations.AnimateObjectProperty(this.position,"x",1.1,450,y,1,!1,null,[[0,n.position.x],[.5,n.position.x+x/2],[1,
n.position.x+x]]);CommonAnimations.AnimateObjectProperty(this.position,"y",1.1,450,y,1,!1,null,[[0,n.position.y],[.4,1.6],[1,1.1]]);CommonAnimations.AnimateObjectProperty(this.position,"z",1.1,450,y,1,!1,function(){this.ready=!0}.bind(this),[[0,n.position.z],[.5,n.position.z+w/2],[1,n.position.z+w]])}.bind(n));this.itemsOut[m]=n;return!0};for(h=0;h<k.depth;h++)for(f=0;f<k.width;f++)this.setCollision(b+f,e+h,COLLISION_WALL);return k},createSauceMachine:function(b,e,h,f){this.increaseUnlockLevel("sauce");
void 0===f&&(f={});f.id="sauceMachine";f.itemTypeIn="tomato";f.itemTypeOut="sauce";f.capacity=8;f.timeToTransform=SAUCE_PRODUCE_TIME;var k=this.createTransformer("table_machine_s_mod",b,e,7,2,h,f);k.name="sauceMachine_"+BABYLON.RandomGUID();k.type="sauceMachine";k.machine=InstanceManager.createInstance("machines","sauce_machine_mod",f.id,k.position.clone());k.machine.rotationQuaternion=null;k.machine.position.y=1.02;k.machine.rotation.y=DegToRad(GetFacingRotation(h));k.tray=InstanceManager.createInstance("machines_ic",
"tomato_ic",f.id,k.position.clone());k.tray.rotationQuaternion=null;k.tray.position.x+=2.25;k.tray.position.y+=1.07;k.tray.position.z+=.01;k.parent=this.nodeMachines;k.getPositionOfItemToStore=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(-3.15+.57*(n+.5),1.2,-.5+.5*m);console.error("ketchupMachine.getPositionOfItemToStore: facing not defined")};k.getPositionOfItemToPick=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(3.15-.58*(n+.5),1.2,-.5+
.5*m);console.error("ketchupMachine.getPositionOfItemToPick: facing not defined")};k.getRotationOfItemToStore=function(m){return v3(0,0,0)};k.standingNearInput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("sauceMachine.standingNearInput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("sauceMachine.standingNearInput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0<n||n<.7*-this.width||Math.abs(m)>
1*this.depth)||this.facing==FACING_UP&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)?!1:!0};k.standingNearOutput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("sauceMachine.standingNearOutput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("sauceMachine.standingNearOutput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&
(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)?!1:!0};k.consumeItem=function(){var m=[];m=Array.isArray(this.options.itemTypeIn)?this.options.itemTypeIn.slice():[this.options.itemTypeIn];this.machineReady=0==m.length;this.itemsToRemove=[];for(var n=0;n<this.itemsIn.length;n++)if(null!=this.itemsIn[n]){var y=m.indexOf(this.itemsIn[n].itemType);if(!(0>y)){var x=this.itemsIn[n];this.itemsToRemove.push(n);var w={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(x.position,
"x",1.1,450,w,1,!1,null,[[0,x.position.x],[.5,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.position,"y",1.1,450,w,1,!1,null,[[0,x.position.y],[.4,3.8],[1,1]]);CommonAnimations.AnimateObjectProperty(x.position,"z",1.1,450,w,1,!1,null,[[0,x.position.z],[.5,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"x",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"y",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,
"z",.5,450,w,1,!1,function(v,r,z){v=this.itemsToRemove[0];this.itemsIn[v].dispose();this.itemsIn[v]=null;this.itemsToRemove.splice(0,1);this.machineReady=0==this.itemsToRemove.length;this.produceItem()}.bind(this),[[0,1],[.5,1],[.6,0],[1,0]]);m.splice(y,1);if(0==m.length)return!0}}return!1};k.produceItem=function(){var m=this.getFreeItemIdx(this.itemsOut);if(0>m)return!1;var n=Shop.instance.createProduct(this.options.itemTypeOut,0);n.parent=this;n.destPos=this.getPositionOfItemToPick(m);n.position=
v3(.05,1.1,.6);n.rotation=this.getRotationOfItemToPick(m);n.scaling=v3(0,0,0);n.ready=!1;n.transformer=this;var y={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(n.scaling,"x",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"y",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"z",1,450,y,1,!1);var x=n.destPos.z-n.position.z;CommonAnimations.AnimateObjectProperty(n.position,"x",1.1,450,y,1,!1,null,[[0,n.position.x],
[.5,n.position.x],[1,n.position.x+(n.destPos.x-n.position.x)]]);CommonAnimations.AnimateObjectProperty(n.position,"y",1.1,450,y,1,!1,null,[[0,n.position.y],[1,1.12]]);CommonAnimations.AnimateObjectProperty(n.position,"z",1.1,450,y,1,!1,function(){this.ready=!0}.bind(n),[[0,n.position.z],[.5,n.position.z+x/2],[1,n.position.z+x]]);this.itemsOut[m]=n;return!0};for(h=0;h<k.depth;h++)for(f=0;f<k.width;f++)this.setCollision(b+f,e+h,COLLISION_WALL);return k},createBreadMachine:function(b,e,h,f){this.increaseUnlockLevel("bread");
h=FACING_DOWN;void 0===f&&(f={});f.id="breadMachine";f.itemTypeIn=["flour","egg"];f.itemTypeOut="bread";f.capacity=9;f.timeToTransform=BREAD_PRODUCE_TIME;var k=this.createTransformer("table_machine_xl_mod",b,e,7,2,h,f);k.rotationQuaternion=null;k.rotation.y=DegToRad(GetFacingRotation(h)+90);k.name="breadMachine_"+BABYLON.RandomGUID();k.type="breadMachine";k.machine=InstanceManager.createInstance("machines","bread_machine_mod",f.id,k.position.clone());k.machine.rotationQuaternion=null;k.machine.position.y=
1.02;--k.machine.position.x;k.machine.rotation.y=DegToRad(GetFacingRotation(h)-90);k.tray=InstanceManager.createInstance("machines_ic","flour_milk_ic",f.id,k.position.clone());k.tray.rotationQuaternion=null;k.tray.position.x+=2.25;k.tray.position.y+=1.07;k.tray.position.z+=.01;k.parent=this.nodeMachines;k.getPositionOfItemToStore=function(m,n){m%=this.capacity;var y=m%3;m=Math.floor(m/3);if(this.facing==FACING_DOWN){if(n==this.options.itemTypeIn[0])return v3(.6*-this.width+.57*(y+.5),1.2,-.5+.5*m);
if(n==this.options.itemTypeIn[1])return v3(.3*-this.width+.57*(y+.5),1.2,-.5+.5*m)}console.error("breadMachine.getPositionOfItemToStore: facing not defined");return null};k.getRotationOfItemToStore=function(m){return v3(0,0,0)};k.getPositionOfItemToPick=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_DOWN)return v3(.32*this.width+.62*(n+.5),1.1,-.5+.45*m);console.error("breadMachine.getPositionOfItemToPick: facing not defined");return null};k.getRotationOfItemToPick=function(m){return v3(0,
DegToRad(90),0)};k.standingNearInput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("sauceMachine.standingNearOutput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("sauceMachine.standingNearOutput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)?!1:!0};k.standingNearOutput=function(m){var n=
m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("sauceMachine.standingNearInput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("sauceMachine.standingNearInput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)?!1:!0};k.getPositionOfPlayerIn=function(m){var n=this.position.clone();if(this.facing==
FACING_DOWN)return n.x+=.6*this.width-.9*m,n.z+=.6*this.depth,n;if(this.facing==FACING_UP)return n.x+=.9*m-this.width/2,n.z+=.6*-this.depth,n;console.error("breadMachine.getPositionOfPlayerIn facing not defined");return null};k.getPositionOfPlayerOut=function(m){var n=this.position.clone();this.facing==FACING_DOWN&&(n.x+=.9*m-this.width/2,n.z-=.6*this.depth);this.facing==FACING_UP&&(n.x+=this.width/2-.9*m,n.z+=.6*this.depth);return n};for(h=0;h<k.depth;h++)for(f=0;f<k.width;f++)this.setCollision(b+
f,e+h,COLLISION_WALL);return k},createFlourMachine:function(b,e,h,f){this.increaseUnlockLevel("flour");void 0===f&&(f={});f.id="flourMachine";f.itemTypeIn="wheat";f.itemTypeOut="flour";f.capacity=9;f.timeToTransform=FLOUR_PRODUCE_TIME;var k=this.createTransformer("table_machine_s_mod",b,e,7,2,h,f);k.name="flourMachine_"+BABYLON.RandomGUID();k.type="flourMachine";k.machine=InstanceManager.createInstance("machines","flour_machine_mod",f.id,k.position.clone());k.machine.rotationQuaternion=null;k.machine.position.y=
1.02;k.machine.rotation.y=DegToRad(GetFacingRotation(h));k.tray=InstanceManager.createInstance("machines_ic","wheat_ic",f.id,k.position.clone());k.tray.rotationQuaternion=null;k.tray.position.x+=2.25;k.tray.position.y+=1.07;k.tray.position.z+=.01;k.parent=this.nodeMachines;k.getPositionOfItemToStore=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(-7*.54+.57*(n+.5),1.2,-.5+.5*m);console.error("ketchupMachine.getPositionOfItemToStore: facing not defined")};k.getRotationOfItemToStore=
function(m){return v3(0,0,-DegToRad(80))};k.getPositionOfItemToPick=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(3.15-.7*(n+.5),1.25,-.5+.5*m);console.error("ketchupMachine.getPositionOfItemToPick: facing not defined")};k.standingNearInput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("ketchupMachine.standingNearInput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("ketchupMachine.standingNearInput FACING_LEFT not defined");
return this.facing==FACING_DOWN&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)?!1:!0};k.standingNearOutput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("ketchupMachine.standingNearOutput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("ketchupMachine.standingNearOutput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0>
n||n>.7*this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)?!1:!0};k.consumeItem=function(){var m=[];m=Array.isArray(this.options.itemTypeIn)?this.options.itemTypeIn.slice():[this.options.itemTypeIn];this.machineReady=0==m.length;this.itemsToRemove=[];for(var n=0;n<this.itemsIn.length;n++)if(null!=this.itemsIn[n]){var y=m.indexOf(this.itemsIn[n].itemType);if(!(0>y)){var x=this.itemsIn[n];this.itemsToRemove.push(n);var w={func:BABYLON.BounceEase,
mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(x.position,"x",1.1,450,w,1,!1,null,[[0,x.position.x],[.5,x.position.x/3+.5],[1,.5]]);CommonAnimations.AnimateObjectProperty(x.position,"y",1.1,450,w,1,!1,null,[[0,x.position.y],[.4,2.8],[1,1]]);CommonAnimations.AnimateObjectProperty(x.position,"z",1.1,450,w,1,!1,null,[[0,x.position.z],[.5,x.position.z/2],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"x",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);
CommonAnimations.AnimateObjectProperty(x.scaling,"y",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"z",.5,450,w,1,!1,function(v,r,z){v=this.itemsToRemove[0];this.itemsIn[v].dispose();this.itemsIn[v]=null;this.itemsToRemove.splice(0,1);this.machineReady=0==this.itemsToRemove.length;this.produceItem()}.bind(this),[[0,1],[.5,1],[.6,0],[1,0]]);m.splice(y,1);if(0==m.length)return!0}}return!1};k.produceItem=function(){var m=this.getFreeItemIdx(this.itemsOut);
if(0>m)return!1;var n=Shop.instance.createProduct(this.options.itemTypeOut,0);n.parent=this;n.destPos=this.getPositionOfItemToPick(m);n.position=v3(.05,1.1,.6);n.rotation=this.getRotationOfItemToPick(m);n.scaling=v3(0,0,0);n.ready=!1;n.transformer=this;var y={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(n.scaling,"x",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"y",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,
"z",1,450,y,1,!1,function(){var x=this.destPos.x-this.position.x,w=this.destPos.z-this.position.z;CommonAnimations.AnimateObjectProperty(this.position,"x",1.1,450,y,1,!1,null,[[0,n.position.x],[.5,n.position.x+x/2],[1,n.position.x+x]]);CommonAnimations.AnimateObjectProperty(this.position,"y",1.1,450,y,1,!1,null,[[0,n.position.y],[.4,1.6],[1,1.2]]);CommonAnimations.AnimateObjectProperty(this.position,"z",1.1,450,y,1,!1,function(){this.ready=!0}.bind(this),[[0,n.position.z],[.5,n.position.z+w/2],[1,
n.position.z+w]])}.bind(n));this.itemsOut[m]=n;return!0};for(h=0;h<k.depth;h++)for(f=0;f<k.width;f++)this.setCollision(b+f,e+h,COLLISION_WALL);return k},createMozzarellaMachine:function(b,e,h,f){this.increaseUnlockLevel("mozzarella");void 0===f&&(f={});f.id="mozzarellaMachine";f.itemTypeIn="milk";f.itemTypeOut="mozzarella";f.capacity=9;f.timeToTransform=FLOUR_PRODUCE_TIME;var k=this.createTransformer("table_machine_s_mod",b,e,7,2,h,f);k.name="mozzarellaMachine_"+BABYLON.RandomGUID();k.type="mozzarellaMachine";
k.machine=InstanceManager.createInstance("machines","mozzarella_machine_mod",f.id,k.position.clone());k.machine.rotationQuaternion=null;k.machine.position.y=1.02;k.machine.rotation.y=DegToRad(GetFacingRotation(h));k.tray=InstanceManager.createInstance("machines_ic","milk_ic",f.id,k.position.clone());k.tray.rotationQuaternion=null;k.tray.position.x+=2.25;k.tray.position.y+=1.07;k.tray.position.z+=.01;k.parent=this.nodeMachines;k.getPositionOfItemToStore=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==
FACING_UP)return v3(-3.08+.57*(n+.5),1.2,-.5+.5*m);console.error("mozzarellaMachine.getPositionOfItemToStore: facing not defined")};k.getPositionOfItemToPick=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(3.15-.6*(n+.5),1.25,-.5+.5*m);console.error("mozzarellaMachine.getPositionOfItemToPick: facing not defined")};k.getRotationOfItemToStore=function(m){return v3(0,0,0)};k.standingNearInput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==
FACING_RIGHT&&console.error("mozzarellaMachine.standingNearInput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("mozzarellaMachine.standingNearInput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)?!1:!0};k.standingNearOutput=function(m){var n=m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("mozzarellaMachine.standingNearOutput FACING_RIGHT not defined");
this.facing==FACING_LEFT&&console.error("mozzarellaMachine.standingNearOutput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)?!1:!0};k.consumeItem=function(){var m=[];m=Array.isArray(this.options.itemTypeIn)?this.options.itemTypeIn.slice():[this.options.itemTypeIn];this.machineReady=0==m.length;this.itemsToRemove=[];for(var n=0;n<this.itemsIn.length;n++)if(null!=this.itemsIn[n]){var y=
m.indexOf(this.itemsIn[n].itemType);if(!(0>y)){var x=this.itemsIn[n];this.itemsToRemove.push(n);var w={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(x.position,"x",1.1,450,w,1,!1,null,[[0,x.position.x],[.5,x.position.x/3+.5],[1,.5]]);CommonAnimations.AnimateObjectProperty(x.position,"y",1.1,450,w,1,!1,null,[[0,x.position.y],[.4,2.8],[1,1]]);CommonAnimations.AnimateObjectProperty(x.position,"z",1.1,450,w,1,!1,null,[[0,x.position.z],[.5,
x.position.z/2],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"x",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"y",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"z",.5,450,w,1,!1,function(v,r,z){v=this.itemsToRemove[0];this.itemsIn[v].dispose();this.itemsIn[v]=null;this.itemsToRemove.splice(0,1);this.machineReady=0==this.itemsToRemove.length;this.produceItem()}.bind(this),[[0,1],[.5,1],
[.6,0],[1,0]]);m.splice(y,1);if(0==m.length)return!0}}return!1};k.produceItem=function(){var m=this.getFreeItemIdx(this.itemsOut);if(0>m)return!1;var n=Shop.instance.createProduct(this.options.itemTypeOut,0);n.parent=this;n.destPos=this.getPositionOfItemToPick(m);n.position=v3(.05,1.1,.6);n.rotation=this.getRotationOfItemToPick(m);n.scaling=v3(0,0,0);n.ready=!1;n.transformer=this;var y={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(n.scaling,
"x",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"y",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"z",1,450,y,1,!1,function(){var x=this.destPos.x-this.position.x,w=this.destPos.z-this.position.z;CommonAnimations.AnimateObjectProperty(this.position,"x",1.1,450,y,1,!1,null,[[0,n.position.x],[.5,n.position.x+x/2],[1,n.position.x+x]]);CommonAnimations.AnimateObjectProperty(this.position,"y",1.1,450,y,1,!1,null,[[0,n.position.y],[.4,1.6],[1,1.2]]);CommonAnimations.AnimateObjectProperty(this.position,
"z",1.1,450,y,1,!1,function(){this.ready=!0}.bind(this),[[0,n.position.z],[.5,n.position.z+w/2],[1,n.position.z+w]])}.bind(n));this.itemsOut[m]=n;return!0};for(h=0;h<k.depth;h++)for(f=0;f<k.width;f++)this.setCollision(b+f,e+h,COLLISION_WALL);return k},createButterMachine:function(b,e,h,f){this.increaseUnlockLevel("butter");void 0===f&&(f={});f.id="butterMachine";f.itemTypeIn="milk";f.itemTypeOut="butter";f.capacity=9;f.timeToTransform=FLOUR_PRODUCE_TIME;var k=this.createTransformer("table_machine_s_mod",
b,e,7,2,h,f);k.name="butterMachine_"+BABYLON.RandomGUID();k.type="butterMachine";k.machine=InstanceManager.createInstance("machines","butter_machine_mod",f.id,k.position.clone());k.machine.rotationQuaternion=null;k.machine.position.y=1.02;k.machine.rotation.y=DegToRad(GetFacingRotation(h));k.tray=InstanceManager.createInstance("machines_ic","milk_ic",f.id,k.position.clone());k.tray.rotationQuaternion=null;k.tray.position.x+=2.25;k.tray.position.y+=1.07;k.tray.position.z+=.01;k.parent=this.nodeMachines;
k.getPositionOfItemToStore=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(-3.08+.57*(n+.5),1.2,-.5+.5*m);console.error("butterMachine.getPositionOfItemToStore: facing not defined")};k.getPositionOfItemToPick=function(m){var n=m%3;m=Math.floor(m/3);if(this.facing==FACING_UP)return v3(3.15-.65*(n+.5),1.25,-.5+.5*m);console.error("butterMachine.getPositionOfItemToPick: facing not defined")};k.getRotationOfItemToStore=function(m){return v3(0,0,0)};k.standingNearInput=function(m){var n=
m.position.x-this.position.x;m=this.position.z-m.position.z;this.facing==FACING_RIGHT&&console.error("butterMachine.standingNearInput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("butterMachine.standingNearInput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)?!1:!0};k.standingNearOutput=function(m){var n=m.position.x-this.position.x;m=this.position.z-
m.position.z;this.facing==FACING_RIGHT&&console.error("butterMachine.standingNearOutput FACING_RIGHT not defined");this.facing==FACING_LEFT&&console.error("butterMachine.standingNearOutput FACING_LEFT not defined");return this.facing==FACING_DOWN&&(0>n||n>.7*this.width||Math.abs(m)>1*this.depth)||this.facing==FACING_UP&&(0<n||n<.7*-this.width||Math.abs(m)>1*this.depth)?!1:!0};k.consumeItem=function(){var m=[];m=Array.isArray(this.options.itemTypeIn)?this.options.itemTypeIn.slice():[this.options.itemTypeIn];
this.machineReady=0==m.length;this.itemsToRemove=[];for(var n=0;n<this.itemsIn.length;n++)if(null!=this.itemsIn[n]){var y=m.indexOf(this.itemsIn[n].itemType);if(!(0>y)){var x=this.itemsIn[n];this.itemsToRemove.push(n);var w={func:BABYLON.BounceEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(x.position,"x",1.1,450,w,1,!1,null,[[0,x.position.x],[.5,x.position.x/3+.5],[1,.5]]);CommonAnimations.AnimateObjectProperty(x.position,"y",1.1,450,w,1,!1,null,[[0,x.position.y],
[.4,2.8],[1,1]]);CommonAnimations.AnimateObjectProperty(x.position,"z",1.1,450,w,1,!1,null,[[0,x.position.z],[.5,x.position.z/2],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"x",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"y",.5,450,w,1,!1,null,[[0,1],[.5,1],[.6,0],[1,0]]);CommonAnimations.AnimateObjectProperty(x.scaling,"z",.5,450,w,1,!1,function(v,r,z){v=this.itemsToRemove[0];this.itemsIn[v].dispose();this.itemsIn[v]=null;this.itemsToRemove.splice(0,
1);this.machineReady=0==this.itemsToRemove.length;this.produceItem()}.bind(this),[[0,1],[.5,1],[.6,0],[1,0]]);m.splice(y,1);if(0==m.length)return!0}}return!1};k.produceItem=function(){var m=this.getFreeItemIdx(this.itemsOut);if(0>m)return!1;var n=Shop.instance.createProduct(this.options.itemTypeOut,0);n.parent=this;n.destPos=this.getPositionOfItemToPick(m);n.position=v3(.05,1.1,.6);n.rotation=this.getRotationOfItemToPick(m);n.scaling=v3(0,0,0);n.ready=!1;n.transformer=this;var y={func:BABYLON.BounceEase,
mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(n.scaling,"x",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"y",1,450,y,1,!1);CommonAnimations.AnimateObjectProperty(n.scaling,"z",1,450,y,1,!1,function(){var x=this.destPos.x-this.position.x,w=this.destPos.z-this.position.z;CommonAnimations.AnimateObjectProperty(this.position,"x",1.1,450,y,1,!1,null,[[0,n.position.x],[.5,n.position.x+x/2],[1,n.position.x+x]]);CommonAnimations.AnimateObjectProperty(this.position,
"y",1.1,450,y,1,!1,null,[[0,n.position.y],[.4,1.6],[1,1.2]]);CommonAnimations.AnimateObjectProperty(this.position,"z",1.1,450,y,1,!1,function(){this.ready=!0}.bind(this),[[0,n.position.z],[.5,n.position.z+w/2],[1,n.position.z+w]])}.bind(n));this.itemsOut[m]=n;return!0};for(h=0;h<k.depth;h++)for(f=0;f<k.width;f++)this.setCollision(b+f,e+h,COLLISION_WALL);return k},spawnPlayerFromData:function(b){var e=new Player(this,v3(b.position.x,b.position.y,b.position.z),b.playerType);e.canSellProducts=b.canSellProducts;
e.canStoreProducts=b.canStoreProducts;e.canProvideFood=b.canProvideFood;e.canBuyProducts=b.canBuyProducts;e.playerState=b.playerState;e.idleTimer=b.idleTimer;e.badMood=b.badMood;e.baseSpeed=b.baseSpeed;e.baseCapacity=b.baseCapacity;e.ready=!0;e.pathToGoal=b.pathToGoal;e.nextPathPos=b.nextPathPos;if(null!=b.selectedShopObject){e.shopObjectPosIdx=b.shopObjectPosIdx;e.selectedShopObject=this.getElementByName(b.selectedShopObject);if(e.playerState==PLAYER_STATE_CHECKING){e.shopObjectPosIdx=0;var h=e.selectedShopObject.getPositionOfCashier();
e.getPathToPosition(h)}e.playerState==PLAYER_STATE_STORE_PRODUCT&&(e.selectedShopObject.playersIn[e.shopObjectPosIdx]=e,h=e.selectedShopObject.getPositionOfPlayerIn(e.shopObjectPosIdx),e.getPathToPosition(h));e.playerState==PLAYER_STATE_THROW_PRODUCT&&(e.selectedShopObject.playersIn[e.shopObjectPosIdx]=e,h=e.selectedShopObject.getPositionOfPlayerIn(e.shopObjectPosIdx),e.getPathToPosition(h));e.playerState==PLAYER_STATE_STORE_FOOD&&(e.selectedShopObject.playersIn[e.shopObjectPosIdx]=e,h=e.selectedShopObject.getPositionOfPlayerIn(e.shopObjectPosIdx),
e.getPathToPosition(h));e.playerState==PLAYER_STATE_PICKUP_PRODUCT&&(e.selectedShopObject.playersOut[e.shopObjectPosIdx]=e,h=e.selectedShopObject.getPositionOfPlayerOut(e.shopObjectPosIdx),e.getPathToPosition(h));e.playerState==PLAYER_STATE_PICKUP_FOOD&&(e.selectedShopObject.playersOut[e.shopObjectPosIdx]=e,h=e.selectedShopObject.getPositionOfPlayerOut(e.shopObjectPosIdx),e.getPathToPosition(h))}e.setLevel(b.playerLevel);switch(b.playerType){case PLAYER_TYPE_PLAYER:e.setColor(c3(.1,.1,.1));break;
case PLAYER_TYPE_BUYER:e.setCustomerType(b.customerType);break;case PLAYER_TYPE_CASHIER:e.setColor(new BABYLON.Color3(248/255,128/255,1));break;case PLAYER_TYPE_FARMER:e.setColor(new BABYLON.Color3(0,1,0));break;case PLAYER_TYPE_CHEF:e.setColor(new BABYLON.Color3(1,244/255,0));break;case PLAYER_TYPE_GENERAL:e.setColor(new BABYLON.Color3(0,0,1));break;case PLAYER_TYPE_ASSISTENT:e.setColor(new BABYLON.Color3(1,0,0))}for(h=0;h<b.items.length;h++){var f=this.createProduct(b.items[h],0,0);f.ready=!0;f.parent=
e.model.rootNodes[0];f.rotation=e.getItemRotation(f);f.scaling=e.getItemScale(f);f.position.x=e.getItemPosX(f);f.position.y=e.getItemPosY(f);f.position.z=e.getItemPosZ(f);e.items.push(f);e._updateItemsTypes()}e._orderPlayerItems();for(h=0;h<b.itemsToBuy.length;h++)e.itemsToBuy.push(b.itemsToBuy[h]);e._updateItemsToBuyTypes();e.updateData();e.ready=!0;return e},spawnPlayer:function(){var b=new Player(this,v3(-30,0,23),PLAYER_TYPE_PLAYER);b.setColor(c3(.1,.1,.1));b.baseSpeed=1.4;return b},spawnBuyer:function(){if(0==
this.availableItemTypes.length)return null;var b=[0];Shop.instance.unlockLevel>=UNLOCK_LEVEL_KETCHUP&&b.push(1);b=this.entries[b[getRandomUInt(b.length)]].position.clone();b.x+=3*(0==getRandomUInt(1E3)%2?1:-1);b.z+=1;b.y=0;b=new Player(this,b,PLAYER_TYPE_BUYER);b.playerSpeed=1;b.setColor(new BABYLON.Color3(1,1,1));b.itemsToBuy=GetItemsToBuy(this.unlockLevel);b.filterItemsToBuy();b._updateItemsToBuyTypes();b.needToAdjustInitialPosition=!0;b.setCustomerType(getRandomUInt(7));0>this.timeToSpawnBuyer&&
(this.timeToSpawnBuyer=5E3);SaveShop();return b},spawnCashier:function(b,e){void 0===e&&(e=function(){});b=b.clone();b.z-=2;b.y=0;var h=new Player(this,b,PLAYER_TYPE_CASHIER);h.canSellProducts=!0;h.canStoreProducts=!1;h.canProvideFood=!1;h.canBuyProducts=!1;h.playerSpeed=1;h.setColor(new BABYLON.Color3(248/255,128/255,1));h.idleTimer=500;h.ready=!1;b=screenGame.getObjectProjection2D(b);screenParticles.particles.CreateSpawnStars(b.x-engineRenderWidth/2,b.y-engineRenderHeight/2-40*Resolution.SCALE,
10,function(){});soundManager.playSound("cashier");PoingScaleIn(h.model_player,MAN_SCALE,function(){h.ready=!0;e()},!1,500);SaveShop();return h},spawnFarmer:function(b,e){void 0===e&&(e=function(){});b=b.clone();b.z-=2;b.y=0;var h=new Player(this,b,PLAYER_TYPE_FARMER);h.canSellProducts=!1;h.canStoreProducts=!1;h.canProvideFood=!0;h.playerSpeed=1;h.setLevel(this.workerLevel[PLAYER_TYPE_FARMER]);h.setColor(new BABYLON.Color3(0,1,0));h.idleTimer=500;h.ready=!1;b=screenGame.getObjectProjection2D(b);screenParticles.particles.CreateSpawnStars(b.x-
engineRenderWidth/2,b.y-engineRenderHeight/2-40*Resolution.SCALE,10,function(){});soundManager.playSound("farmer");PoingScaleIn(h.model_player,MAN_SCALE,function(){h.ready=!0;e()},!1,500);SaveShop();return h},spawnChef:function(b,e){void 0===e&&(e=function(){});b=b.clone();b.z-=2;b.y=0;var h=new Player(this,b,PLAYER_TYPE_CHEF);h.canSellProducts=!1;h.canStoreProducts=!1;h.canProvideFood=!0;h.playerSpeed=1;h.setLevel(this.workerLevel[PLAYER_TYPE_CHEF]);h.setColor(new BABYLON.Color3(1,244/255,0));h.idleTimer=
500;h.ready=!1;b=screenGame.getObjectProjection2D(b);screenParticles.particles.CreateSpawnStars(b.x-engineRenderWidth/2,b.y-engineRenderHeight/2-40*Resolution.SCALE,10,function(){});soundManager.playSound("chef");PoingScaleIn(h.model_player,MAN_SCALE,function(){h.ready=!0;e()},!1,500);SaveShop();return h},spawnGeneral:function(b,e){void 0===e&&(e=function(){});b=b.clone();b.z-=2;b.y=0;var h=new Player(this,b,PLAYER_TYPE_GENERAL);h.canSellProducts=!1;h.canStoreProducts=!0;h.canProvideFood=!1;h.playerSpeed=
1;h.setLevel(this.workerLevel[PLAYER_TYPE_GENERAL]);h.setColor(new BABYLON.Color3(0,0,1));h.idleTimer=500;h.ready=!1;b=screenGame.getObjectProjection2D(b);screenParticles.particles.CreateSpawnStars(b.x-engineRenderWidth/2,b.y-engineRenderHeight/2-40*Resolution.SCALE,10,function(){});soundManager.playSound("assistant");PoingScaleIn(h.model_player,MAN_SCALE,function(){h.ready=!0;e()},!1,500);SaveShop();return h},spawnAssistent:function(b,e){void 0===e&&(e=function(){});b=b.clone();b.z-=2;b.y=0;var h=
new Player(this,b,PLAYER_TYPE_ASSISTENT);h.canSellProducts=!1;h.canStoreProducts=!0;h.canProvideFood=!1;h.playerSpeed=1;h.setLevel(this.workerLevel[PLAYER_TYPE_ASSISTENT]);h.setColor(new BABYLON.Color3(1,0,0));h.idleTimer=500;h.ready=!1;b=screenGame.getObjectProjection2D(b);screenParticles.particles.CreateSpawnStars(b.x-engineRenderWidth/2,b.y-engineRenderHeight/2-40*Resolution.SCALE,10,function(){});soundManager.playSound("assistant");PoingScaleIn(h.model_player,MAN_SCALE,function(){h.ready=!0;e()},
!1,500);SaveShop();return h},getEntry:function(b,e){for(var h=[],f=0;f<this.entries.length;f++)this.entries[f].distSq=BABYLON.Vector2.DistanceSquared(new BABYLON.Vector2(b,e),new BABYLON.Vector2(this.entries[f].position.x,this.entries[f].position.z)),h.push(this.entries[f]);h.sort(function(k,m){return k.distSq>m.distSq?1:k.distSq<m.distSq?-1:0});return h[0]},getRegister:function(b,e,h){void 0===h&&(h=!0);for(var f=[],k=0;k<this.registers.length;k++)if(h||!this.registers[k].occupied)this.registers[k].distSq=
BABYLON.Vector2.DistanceSquared(new BABYLON.Vector2(b,e),new BABYLON.Vector2(this.registers[k].position.x,this.registers[k].position.z)),f.push(this.registers[k]);f.sort(function(m,n){return m.distSq>n.distSq?1:m.distSq<n.distSq?-1:0});return f[0]},getBin:function(b,e){var h=[];b=new BABYLON.Vector2(b,e);for(e=0;e<this.bins.length;e++)this.bins[e].distSq=BABYLON.Vector2.DistanceSquared(b,new BABYLON.Vector2(this.bins[e].position.x,this.bins[e].position.z)),h.push(this.bins[e]);h.sort(function(f,k){return f.distSq>
k.distSq?1:f.distSq<k.distSq?-1:0});return h[0]},itemIsProducedByTransformer:function(b){for(var e=0;e<this.transformers.length;e++)if(this.transformers[e].options.itemTypeOut==b)return!0;return!1},placeIsProducer:function(b){return b.hasOwnProperty("growFruit")},placeIsTransformer:function(b){return b.hasOwnProperty("consumeItem")&&b.hasOwnProperty("produceItem")},getTransformerProducingFoodType:function(b,e){Array.isArray(b)||(b=[b]);for(var h=null,f=null,k=0;k<this.transformers.length;k++){var m=
this.transformers[k];if(-1!==b.indexOf(m.options.itemTypeOut)){var n=0;e&&(n=BABYLON.Vector2.DistanceSquared(new BABYLON.Vector2(e.x,e.z),new BABYLON.Vector2(m.position.x,m.position.z)));var y=m.playersOut.length,x=m.getItemsCount(m.itemsIn);n={players:y,items:x,distSq:n};if(null===f||n.players<f.players||n.players===f.players&&n.items<f.items||n.players===f.players&&n.items===f.items&&n.distSq<f.distSq)h=m,f=n}}return h},__getTransformerProducingFoodType:function(b,e){void 0===e&&(e=null);Array.isArray(b)||
(b=[b]);for(var h=[],f=0;f<this.transformers.length;f++){var k=this.transformers[f];0>b.indexOf(k.options.itemTypeOut)||(null!=e&&(k.distSq=BABYLON.Vector2.DistanceSquared(new BABYLON.Vector2(e.x,e.z),new BABYLON.Vector2(k.position.x,k.position.z))),h.push(k))}if(0==h.length)return null;h.sort(function(m,n){return m.playersOut.length>n.playersOut.length||m.distSq>n.distSq?1:m.playersOut.length<n.playersOut.length||m.distSq<n.distSq?-1:0});return h[0]},canItemBePicked:function(b){for(var e=0;e<this.producers.length;e++)if(this.producers[e].options.itemTypeOut==
b)return!0;for(e=0;e<this.transformers.length;e++){var h=this.transformers[e];if(h.options.itemTypeOut==b&&(0!=h.getItemsCount(h.itemsOut)||0!=h.getItemsCount(h.itemsIn)))return!0}return!1},machineProducingItemNeedToBeFed:function(b){for(var e=0;e<this.transformers.length;e++){var h=this.transformers[e];if(h.options.itemTypeOut==b&&!(0<h.getItemsCount(h.itemsIn)))return!0}return!1},canItemBeStored:function(b){for(var e=0;e<this.shelves.length;e++){var h=this.shelves[e];if(h.options.itemType==b&&0!=
h.getItemsCount())return!0}return!1},getProducerProducingItemType:function(b,e){Array.isArray(b)||(b=[b]);for(var h=null,f=null,k=0;k<this.producers.length;k++){var m=this.producers[k];if(-1!==b.indexOf(m.options.itemTypeOut)){var n=0;e&&(n=BABYLON.Vector2.DistanceSquared(new BABYLON.Vector2(e.x,e.z),new BABYLON.Vector2(m.position.x,m.position.z)));var y=m.playersOut.length,x=m.getItemsCount();n={players:y,items:-x,distSq:n};if(null===f||n.players<f.players||n.players===f.players&&n.items<f.items||
n.players===f.players&&n.items===f.items&&n.distSq<f.distSq)h=m,f=n}}return h},update:function(b){if(!this.isPaused){for(var e=0;e<this.progress.length;e++)this.progress[e].update(b);for(e=0;e<this.offers.length;e++)this.offers[e].update(b);for(e=0;e<this.producers.length;e++)this.producers[e].update(b);for(e=0;e<this.shelves.length;e++)this.shelves[e].update(b);for(e=0;e<this.transformers.length;e++)this.transformers[e].update(b);for(e=0;e<this.bins.length;e++)this.bins[e].update(b);for(e=0;e<this.registers.length;e++)this.registers[e].update(b);
for(e=0;e<this.players.length;e++)this.players[e].update(b);for(e=0;e<this.players.length;e++)this.players[e].markedForDelete&&(this.removePlayer(this.players[e]),e--);for(e=0;e<this.progress.length;e++)if(this.progress[e].markedForDelete){var h=Shop.instance.getPlayerPlayer();h.ready=!1;this.progress[e].onProgressed(function(){h.ready=!0})}for(e=0;e<this.progress.length;e++)this.progress[e].markedForDelete&&null!=this.progress[e].label&&(this.progress[e].delete(),this.progress.splice(e,1),e--);for(e=
0;e<this.offers.length;e++)this.offers[e].markedForDelete&&(h=Shop.instance.getPlayerPlayer(),this.offers[e].onOfferTaken(function(){}));for(e=0;e<this.offers.length;e++)this.offers[e].markedForDelete&&(this.offers[e].delete(),this.offers.splice(e,1),e--);this.updateBuyersSpawning(b);this.updateOffersSpawning(b);this.updateHelpSpawning(b);this.updateSoldProducts(b);this.needToUpdateLabelTexture&&(Shop.instance.labelMaterial.unfreeze(),Shop.instance.labelTexture.update(!1,!0,!0),Shop.instance.labelMaterial.freeze())}},
updateBuyersSpawning:function(b){0>this.timeToSpawnBuyer||(this.timeToSpawnBuyer-=b,0>=this.timeToSpawnBuyer&&(this.timeToSpawnBuyer=4E3+1E3*getRandomUInt(3),b=this.getMaxBuyersCount(),0<=ActiveOfferTypes.indexOf("customers")&&(this.timeToSpawnBuyer/=2,b*=2),this.getBuyersCount()<b&&this.spawnBuyer()))},updateOffersSpawning:function(b){if(rewAdsConfig.active&&!(0>this.timeToOffer)&&(this.timeToOffer-=b,0>=this.timeToOffer)){this.timeToOffer=TIME_TO_OFFER;b=[];for(var e=0;e<OffersSpots.length;e++){var h=
OffersSpots[e];h.hasOwnProperty("level")&&Shop.instance.unlockLevel>=h.level&&0>ActiveOfferTypes.indexOf(h.offer)&&b.push(h);h.hasOwnProperty("item")&&Shop.instance.getElementByName(h.item)&&0>ActiveOfferTypes.indexOf(h.offer)&&b.push(h)}for(e=0;e<b.length;e++)h="offer"+b[e].x+"_"+b[e].y,Shop.instance.elementExist(h)||(h=Shop.instance.createOfferPoint(h,b[e].x,b[e].y,{offerType:b[e].offer},function(){}),PoingScaleIn(h))}},updateSoldProducts:function(b){0>this.timeToShowSoldProducts||(this.timeToShowSoldProducts-=
b,0<this.timeToShowSoldProducts||(0!=this.progress.length||GameFinished?screenGame.openSoldProductsDialog(this.soldProducts):(screenGame.openGameWinDialog(),GameFinished=!0),this.timeToShowSoldProducts=TIME_TO_SHOW_SOLD_PRODUCTS,this.soldProducts=[]))},updateHelpSpawning:function(b){if(rewAdsConfig.active&&!(0>this.timeToHelp)&&(this.timeToHelp-=b,0>=this.timeToHelp))if(this.timeToHelp=TIME_TO_HELP,this.deleteOfferPointByOfferType("help"))this.timeToHelp=TIME_TO_HELP;else{b=[];for(var e=0;e<HelpSpots.length;e++){var h=
HelpSpots[e];h.hasOwnProperty("level")&&Shop.instance.unlockLevel>=h.level&&0>ActiveOfferTypes.indexOf(h.offer)&&b.push(h);h.hasOwnProperty("item")&&Shop.instance.getElementByName(h.item)&&0>ActiveOfferTypes.indexOf(h.offer)&&b.push(h)}for(e=0;e<b.length;e++)h="help"+b[e].x+"_"+b[e].y,Shop.instance.elementExist(h)||(h=Shop.instance.createOfferPoint(h,b[e].x,b[e].y,{offerType:"help"},function(){}),PoingScaleIn(h))}},getBuyersCount:function(){for(var b=0,e=0;e<this.players.length;e++){var h=this.players[e];
h.markedForDelete||h.playerType==PLAYER_TYPE_BUYER&&b++}return b},getMaxBuyersCount:function(){return this.unlockLevel==UNLOCK_LEVEL_BUTTER||this.unlockLevel==UNLOCK_LEVEL_MOZARELLA?10:this.unlockLevel==UNLOCK_LEVEL_BREAD?9:this.unlockLevel==UNLOCK_LEVEL_SAUCE?8:this.unlockLevel==UNLOCK_LEVEL_FLOUR?7:this.unlockLevel==UNLOCK_LEVEL_KETCHUP?6:this.unlockLevel==UNLOCK_LEVEL_COW?5:this.unlockLevel==UNLOCK_LEVEL_CARROT?4:this.unlockLevel==UNLOCK_LEVEL_WHEAT||this.unlockLevel==UNLOCK_LEVEL_CHICKEN?3:2},
updateTexts:function(){for(var b=0;b<this.players.length;b++)this.players[b].updateTexts()},onResize:function(){for(var b=0;b<this.progress.length;b++)this.progress[b].onResize();for(b=0;b<this.players.length;b++)this.players[b].onResize()},onPause:function(){for(var b=0;b<this.players.length;b++)this.players[b].onPause();this.isPaused=!0},onResume:function(){for(var b=0;b<this.players.length;b++)this.players[b].onResume();this.isPaused=!1}};
const InstanceManager={_sources:{},_materials:{},_containers:{},initFromContainer(b,e,h=!1){const f=b.meshes.filter(m=>m instanceof BABYLON.Mesh);this._sources[e]||(this._sources[e]={});this._containers[e]=b;for(b=0;b<f.length;b++){var k=f[b];k.material&&(k.receiveShadows=SHOP_SHADOWS_ENABLED,k.setEnabled(!1),k.isVisible=!1,k.checkCollisions=!1,k.alwaysSelectAsActiveMesh=!1,this._sources[e][k.name]=k,this._materials[e]?k.material=this._materials[e]:(k=k.material,k.unfreeze(),k.unlit=!0,k.emissiveColor=
new BABYLON.Color3(0,0,0),k.backFaceCulling=!1,k.forceDepthWrite=!0,k.disableLighting=!0,h||(k.alphaMode=BABYLON.Engine.ALPHA_DISABLE,k.transparencyMode=BABYLON.Material.MATERIAL_OPAQUE,k.diffuseTexture&&(k.diffuseTexture.hasAlpha=!1)),k.freeze(),this._materials[e]=k))}},createInstance(b,e,h,f,k,m){if(!this._sources[b]||!this._sources[b][e])return console.warn("InstanceManager: mesh not found:",b+"/"+e),null;b=this._sources[b][e];b.scaling=v3(1,1,1);activeScene.unfreezeActiveMeshes();e=b.createInstance(h||
e+"_"+BABYLON.RandomGUID());e.parent.rotation=v3(0,0,0);e.parent.scaling=v3(1,1,1);f&&e.position.copyFrom(f);k&&e.rotation.copyFrom(k);m&&e.scaling.copyFrom(m);activeScene.freezeActiveMeshes();return e}};function GetFacingRotation(b){return b==FACING_DOWN?90:b==FACING_UP?-90:b==FACING_RIGHT?180:0}function SaveShop(){Shop.instance.loadingData||(SavedGame=Shop.instance.saveData(),GameData.Save())};VirtualJoystick=function(b,e,h){this._init(b,e,h);VirtualJoystick.instance=this};VirtualJoystick.instance=null;
VirtualJoystick.prototype={constructor:VirtualJoystick,_init:function(b,e,h){this.createRootPanel(b);this.createImages(e,h);this.radius=150},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("VirtualJoystick.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipChildren=
!0;this.pnlRoot.clipContent=!0;this.pnlRoot.isVisible=!0;b.addControl(this.pnlRoot);this.guiRoot=this.pnlRoot},createImages:function(b,e){this.imgStickBg=new BABYLON.GUI.Image("imgStickBg");this.imgStickBg.transformCenterX=.5;this.imgStickBg.transformCenterY=.5;this.imgStickBg.isPointerBlocker=!1;this.imgStickBg.isHitTestVisible=!1;this.imgStickBg.leftInPixels=0;this.imgStickBg.topInPixels=0;this.imgStickBg.isVisible=!1;this.imgStickBg.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
this.imgStickBg.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.guiRoot.addControl(this.imgStickBg);SetImageFromSpritesheet(this.imgStickBg,getAssetImage(b.pak),getAssetImageFrames(b.pak),b.frame);this.imgStick=new BABYLON.GUI.Image("imgStick");this.imgStick.transformCenterX=.5;this.imgStick.transformCenterY=.5;this.imgStick.isPointerBlocker=!1;this.imgStick.isHitTestVisible=!1;this.imgStick.leftInPixels=0;this.imgStick.topInPixels=0;this.imgStick.isVisible=!1;this.imgStick.horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgStick.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.guiRoot.addControl(this.imgStick);SetImageFromSpritesheet(this.imgStick,getAssetImage(e.pak),getAssetImageFrames(e.pak),e.frame);this.tmpVecR=new BABYLON.Vector2(0,0);this.tmpVecA=new BABYLON.Vector2(0,0);this.tmpVecB=new BABYLON.Vector2(0,0);this._percDeltaY=this._percDeltaX=this._deltaY=this._deltaX=this._angle=this._perc=0;Object.defineProperty(this,"stickPerc",{get:function(){return this._perc},
enumerable:!0,configurable:!0});Object.defineProperty(this,"stickAngle",{get:function(){return this._angle},enumerable:!0,configurable:!0});Object.defineProperty(this,"stickDeltaX",{get:function(){return this._deltaX},enumerable:!0,configurable:!0});Object.defineProperty(this,"stickDeltaY",{get:function(){return this._deltaY},enumerable:!0,configurable:!0});Object.defineProperty(this,"stickPercDeltaX",{get:function(){return this._percDeltaX},enumerable:!0,configurable:!0});Object.defineProperty(this,
"stickPercDeltaY",{get:function(){return this._percDeltaY},enumerable:!0,configurable:!0})},reset:function(){this._percDeltaY=this._percDeltaX=this._deltaY=this._deltaX=this._angle=0;this.imgStickBg.isVisible=!1;this.imgStick.isVisible=!1},onPointerObservable:function(b){var e=b.event.x/window.innerWidth*engineRenderWidth,h=b.event.y/window.innerHeight*engineRenderHeight;this._percDeltaY=this._percDeltaX=this._deltaY=this._deltaX=this._angle=0;switch(b.type){case BABYLON.PointerEventTypes.POINTERDOWN:this.imgStickBg.leftInPixels=
e-engine.getRenderWidth()/2;this.imgStickBg.topInPixels=h-engine.getRenderHeight()/2;this.imgStickBg.isVisible=!0;this.imgStick.leftInPixels=e-engine.getRenderWidth()/2;this.imgStick.topInPixels=h-engine.getRenderHeight()/2;this.imgStick.isVisible=!0;this.tmpVecA.x=this.imgStickBg.leftInPixels;this.tmpVecA.y=this.imgStickBg.topInPixels;break;case BABYLON.PointerEventTypes.POINTERMOVE:if(!this.imgStickBg.isVisible)break;this.imgStick.leftInPixels=e-engine.getRenderWidth()/2;this.imgStick.topInPixels=
h-engine.getRenderHeight()/2;this.tmpVecR.x=this.imgStick.leftInPixels-this.imgStickBg.leftInPixels;this.tmpVecR.y=this.imgStick.topInPixels-this.imgStickBg.topInPixels;this.tmpVecR.length()>this.radius&&(this.tmpVecR.normalize(),this.tmpVecR.scaleInPlace(this.radius),this.imgStick.leftInPixels=this.tmpVecR.x+this.imgStickBg.leftInPixels,this.imgStick.topInPixels=this.tmpVecR.y+this.imgStickBg.topInPixels);this._perc=this.tmpVecR.length()/this.radius;this._deltaX=this.tmpVecR.x;this._deltaY=this.tmpVecR.y;
this.tmpVecR.normalize();this.tmpVecR.scaleInPlace(this._perc);this._percDeltaX=this.tmpVecR.x;this._percDeltaY=this.tmpVecR.y;this.tmpVecB.x=this.imgStick.leftInPixels;this.tmpVecB.y=this.imgStick.topInPixels;this._angle=BABYLON.Angle.BetweenTwoPoints(this.tmpVecA,this.tmpVecB).radians();break;case BABYLON.PointerEventTypes.POINTERCANCEL:this.reset();break;case BABYLON.PointerEventTypes.POINTERUP:this.reset()}},onResize:function(){this.guiRoot.isVisible&&(this.radius=120*Resolution.SCALE,this.imgStickBg.scaleX=
this.imgStickBg.scaleY=.8*Resolution.SCALE,this.imgStick.scaleX=this.imgStick.scaleY=.8*Resolution.SCALE,this.pnlRoot.widthInPixels=engine.getRenderWidth(),this.pnlRoot.heightInPixels=engine.getRenderHeight())}};var SceneMain=function(b){SceneMain.instance=this;this.create(b)};SceneMain.instance=null;
SceneMain.prototype={create:function(b){this.debugingEnabledOnce=!1;this.scene=new BABYLON.Scene(b);this.scene.animationsEnabled=!0;this.scene.autoClear=!1;this.scene.autoClearDepthAndStencil=!0;this.scene.performancePriority=BABYLON.ScenePerformancePriority.Intermediate;this.scene.skipPointerDownPicking=!0;this.scene.skipPointerMovePicking=!0;this.scene.skipPointerUpPicking=!0;this.animationTimeScale=this.scene.animationTimeScale;this.gravityVector=new BABYLON.Vector3(0,-9.81,0);this.scene.onPointerObservable.add(function(e){if(this.inputEnabled)this.onPointerObservable(e)}.bind(this));
this.scene.onKeyboardObservable.add(function(e){if(this.inputEnabled||e.type===BABYLON.KeyboardEventTypes.KEYUP)this.onKeyboardObservable(e)}.bind(this));ENGINE_FREEZE_ACTIVE_MESHES&&(this.scene.autoEvaluateActiveMeshes=!1,this.scene.freezeActiveMeshes(!0,void 0,void 0,!0,!0));this.scene.useGeometryIdsMap=!0;this.scene.useMaterialMeshMap=!0;this.scene.useClonedMeshMap=!0;this.scene.blockMaterialDirtyMechanism=!0;this.scene.blockfreeActiveMeshesAndRenderingGroups=!0;this.scene.blockTransformUpdates=
!0;this.scene.skipFrustumClipping=!0;this.scene.freezeMaterials();this.editorEnabled=this.allPaused=this.gamePaused=this.gameRunning=!1;this.inputEnabled=!0;this.sceneFrozen=!1;this.framesToFreeze=-1;this.frameCounter=0;this.activeScreens=[];BABYLON.GUI.Control.AllowAlphaInheritance=!0},freezeActiveMeshes:function(){ENGINE_FREEZE_ACTIVE_MESHES&&!this.sceneFrozen&&(this.framesToFreeze=3)},unfreezeActiveMeshes:function(){ENGINE_FREEZE_ACTIVE_MESHES&&this.sceneFrozen&&(this.scene.unfreezeActiveMeshes(),
this.sceneFrozen=!1)},addSceneOptimizer:function(){var b=new BABYLON.SceneOptimizerOptions(60,500);b.addOptimization(new BABYLON.HardwareScalingOptimization(0,1));this.sceneOptimizer=new BABYLON.SceneOptimizer(this.scene,b);this.sceneOptimizer.onSuccessObservable.add(function(e){console.warn("SceneMain.sceneOptimizer : ");onResize()});this.sceneOptimizer.onNewOptimizationAppliedObservable.add(function(e){console.warn("SceneMain.sceneOptimizer.onNewOptimizationAppliedObservable : "+e.getDescription());
onResize()});this.sceneOptimizer.onFailureObservable.add(function(e){console.warn("SceneMain.sceneOptimizer.onFailureObservable : ")});this.sceneOptimizer.start()},addScreen:function(b){b.scene=this;this.activeScreens.push(b)},removeScreen:function(b){for(var e=0;e<this.activeScreens.length;e++)if(this.activeScreens[e]==b){this.activeScreens.splice(e,1);break}},getDeltaTime:function(){var b=this.scene.deltaTime;1>b&&(b=1);41.665<b&&(b=41.665);return b},getCpuSpeedMul:function(){return this.deltaTime/
16.6666},beforeRender:function(){this.frameCounter++;ENGINE_FREEZE_ACTIVE_MESHES&&0<this.framesToFreeze&&(this.framesToFreeze--,0>=this.framesToFreeze&&(this.scene.freezeActiveMeshes(!0,void 0,void 0,!0,!0),this.sceneFrozen=!0));if(!(this.allPaused||(GlobalDate=new Date,this.deltaTime=this.getDeltaTime(),void 0!==this.scene.deltaTime&&this._addTimeStep(Math.floor(this.deltaTime)/1E3),0>=this.deltaTime)))for(var b=0;b<this.activeScreens.length;b++)"function"===typeof this.activeScreens[b].beforeRender&&
this.activeScreens[b].beforeRender()},afterRender:function(){if(!this.allPaused)for(var b=0;b<this.activeScreens.length;b++)"function"===typeof this.activeScreens[b].afterRender&&this.activeScreens[b].afterRender()},_addTimeStep:function(b){this.hasOwnProperty("_timesteps")||(this._timesteps=[]);this._timesteps.push(b);10<this._timesteps.length&&this._timesteps.splice(0,1)},_getAvgTimeStep:function(){for(var b=0,e=0;e<this._timesteps.length;e++)b+=this._timesteps[e];b/=this._timesteps.length;.334<
b&&(b=.334);return b},render:function(){this.scene.render()},updateTexts:function(){for(var b=0;b<this.activeScreens.length;b++)"function"===typeof this.activeScreens[b].updateTexts&&this.activeScreens[b].updateTexts()},onPointerObservable:function(b){for(var e=0;e<this.activeScreens.length;e++)if("function"===typeof this.activeScreens[e].onPointerObservable)this.activeScreens[e].onPointerObservable(b)},onKeyboardObservable:function(b){for(var e=0;e<this.activeScreens.length;e++)if("function"===typeof this.activeScreens[e].onKeyboardObservable)this.activeScreens[e].onKeyboardObservable(b)},
onResize:function(b){for(var e=0;e<this.activeScreens.length;e++)if("function"===typeof this.activeScreens[e].onResize)this.activeScreens[e].onResize(b)},onGameVisible:function(b){this.onGameResume()},onGameFocus:function(b){this.onGameResume()},onGameHidden:function(b){this.onGamePause()},onGameBlur:function(b){this.onGamePause()},onGamePause:function(){if(!this.allPaused){LOG("SceneMain.onGamePause");for(var b=0;b<this.activeScreens.length;b++)if("function"===typeof this.activeScreens[b].onGamePause)this.activeScreens[b].onGamePause();
this.allPaused=!0;this.scene.prevAnimationTimeScale=this.scene.animationTimeScale;this.scene.animationTimeScale=0;setTimeout(()=>{null!=soundManager&&(soundManager.pauseAllMusic(),soundManager.pauseAllSounds())},500)}},onGameResume:function(){if(this.allPaused){LOG("SceneMain.onGameResume");setTimeout(()=>{BABYLON.AbstractEngine.audioEngine.audioContext.resume();null!=soundManager&&(soundManager.resumeAllMusic(),soundManager.resumeAllSounds())},500);this.scene.animationTimeScale=this.scene.prevAnimationTimeScale;
this.allPaused=!1;for(var b=0;b<this.activeScreens.length;b++)if("function"===typeof this.activeScreens[b].onGameResume)this.activeScreens[b].onGameResume();if(Shop.instance&&Shop.instance.players)for(b=0;b<Shop.instance.players.length;b++)Shop.instance.players[b].onResume()}},enableDebug:function(){this.debugingEnabledOnce=!0;screenTopPanel.disableControls();screenTopPanel.guiRoot.alpha=0;this.scene.activeCameras=[];this.scene.activeCamera=screenGame.cameraDebug;screenGame.cameraDebug.position=v3(screenGame.cameraPlayer.position.x,
screenGame.cameraPlayer.position.y,screenGame.cameraPlayer.position.z);screenGame.cameraDebug.rotation=v3(screenGame.cameraPlayer.rotation.x,screenGame.cameraPlayer.rotation.y,screenGame.cameraPlayer.rotation.z);screenGame.cameraDebug.attachControl(canvas,!0);screenGame.cameraDebug.layerMask=screenGame.cameraPlayer.layerMask;this.editorEnabled=!0;this.scene.debugLayer.show()},disableDebug:function(){screenTopPanel.enableControls();screenTopPanel.guiRoot.alpha=1;this.scene.activeCameras=[];this.scene.activeCamera=
screenGame.cameraPlayer;this.editorEnabled=!1;this.scene.debugLayer.hide()}};var ScreenSplash=function(b){ScreenSplash.instance=this;this.create(b)};ScreenSplash.instance=null;
ScreenSplash.prototype={create:function(b){this.scene=b;this.rootNode=new BABYLON.TransformNode("ScreenSplash");this.createCamera();this.createGui()},createCamera:function(){this.camera=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,0,-2),this.scene);this.camera.parent=this.rootNode;this.camera.setTarget(new BABYLON.Vector3(0,0,0));this.camera.mode=BABYLON.Camera.ORTHOGRAPHIC_CAMERA;this.camera.orthoTop=1;this.camera.orthoBottom=-1;this.camera.orthoLeft=-2;this.camera.orthoRight=2},createGui:function(){this.guiTexture=
BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ScreenSplash_GUI",!0,activeScene.scene);this.guiTexture.layer.layerMask=LAYER_SCREEN_BACKGROUND;this.guiTexture.rootContainer.highlightLineWidth=0;this.initGuiControls(this.guiTexture)},initGuiControls:function(b){this.pnlBackground=new BABYLON.GUI.Rectangle;this.pnlBackground.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.pnlBackground.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.pnlBackground.widthInPixels=
300;this.pnlBackground.heightInPixels=300;this.pnlBackground.background="#BB464B";this.pnlBackground.thickness=0;b.addControl(this.pnlBackground);this.imgSplash=new BABYLON.GUI.Image;this.imgSplash.transformCenterX=.5;this.imgSplash.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgSplash.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.imgSplash.isPointerBlocker=!1;this.imgSplash.isHitTestVisible=!1;this.imgSplash.topInPixels=0;this.imgSplash.domImage=
engineRenderHeight>engineRenderWidth?AssetLoader.instance.loadedImages["splashp.jpg"]:AssetLoader.instance.loadedImages["splashl.jpg"];b.addControl(this.imgSplash);this.imgLogo=new BABYLON.GUI.Image;this.imgLogo.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.imgLogo.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.imgLogo.isPointerBlocker=!1;this.imgLogo.isHitTestVisible=!1;this.imgLogo.topInPixels=0;this.imgLogo.domImage=AssetLoader.instance.loadedImages["gametitle_en.png"];
"ru"==Languages.instance.language&&(this.imgLogo.domImage=AssetLoader.instance.loadedImages["gametitle_ru.png"]);b.addControl(this.imgLogo);this.txtContinue=this.createContinueText();this.txtContinue.alpha=14;b.addControl(this.txtContinue);this.imgInlogicSplash=new BABYLON.GUI.Image;this.imgInlogicSplash.transformCenterX=.5;this.imgInlogicSplash.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgInlogicSplash.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
this.imgInlogicSplash.isPointerBlocker=!1;this.imgInlogicSplash.isHitTestVisible=!1;this.imgInlogicSplash.topInPixels=0;this.imgInlogicSplash.domImage=AssetLoader.instance.loadedImages["main_bg.jpg"];b.addControl(this.imgInlogicSplash);this.imgInlogicLogo=new BABYLON.GUI.Image;this.imgInlogicLogo.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.imgInlogicLogo.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.imgInlogicLogo.isPointerBlocker=!1;this.imgInlogicLogo.isHitTestVisible=
!1;this.imgInlogicLogo.topInPixels=0;this.imgInlogicLogo.alpha=0;this.imgInlogicLogo.domImage=AssetLoader.instance.loadedImages["logo_big.png"];b.addControl(this.imgInlogicLogo);this.guiRoot=this.imgSplash.parent;GameSnacks.game.firstFrameReady();if(!1===gameConfig.inlLogoAllowed)loadGameAssets(),this.imgInlogicSplash.isVisible=!1,this.imgInlogicLogo.isVisible=!1;else{var e=800;setTimeout(function(){CommonAnimations.AnimateObjectProperty(this.imgInlogicLogo,"alpha",1,e,null,1,!1,function(){setTimeout(function(){loadGameAssets();
e=400;CommonAnimations.AnimateObjectProperty(this.imgInlogicSplash,"alpha",0,e,null,1,!1);CommonAnimations.AnimateObjectProperty(this.imgInlogicLogo,"alpha",0,e,null,1,!1,function(){this.imgInlogicSplash.isVisible=!1;this.imgInlogicLogo.isVisible=!1}.bind(this))}.bind(this),100)}.bind(this))}.bind(this),150)}},allAssetsLoaded:function(){GameSnacks.game.ready();inlHelper.game.onGameLoaded();this.txtContinue.text=STR("TAP_TO_CONTINUE");CommonAnimations.AnimateObjectProperty(this.txtContinue,"alpha",
.8,800,null,1,!0,null,[[0,1],[.5,.9],[1,1]]);this.pnlBackground.onPointerClickObservable.add(function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,BABYLON.AbstractEngine.audioEngine.unlocked||BABYLON.AbstractEngine.audioEngine.unlock(),soundManager.playSound("button"),this.imgInlogicSplash.isVisible?Buttons.enabled=!0:(this.txtContinue.isVisible=!1,(new Promise((b,e)=>{setTimeout(function(){Buttons.enabled=!1;screenGame.resetGame();screenGame.updateData();screenGame.gameStep_start();
inlHelper.game.onEnteredGame();inlHelper.game.setLevel(1);inlHelper.game.onGameStart(!1);b()},10)})).then(function(b){screenSplash.hideScene(function(){setTimeout(function(){screenTopPanel.showScene();screenGame.rootNode.setEnabled(!0);screenGame.guiRoot.isVisible=!0;Buttons.enabled=!0;setTimeout(function(){soundManager.playMusic("music_ingame")},500)},20)})}),inlHelper.ads.triggerAdPoint({adType:AD_TYPES.GAME_LOADED})))}.bind(this));setTimeout(function(){Buttons.enabled=!0},500)},createContinueText:function(){var b=
new BABYLON.GUI.TextBlock;b.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;b.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;b.color="#ffffff";b.text=" ";b.fontSize="50px";b.fontFamily="gamefont";b.isPointerBlocker=!1;b.isHitTestVisible=!1;b.shadowOffsetX=0;b.shadowOffsetY=6;b.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";b.outlineColor="rgb(0,0,0)";b.outlineWidth=3;b.shadowBlur=6;return b},dispose:function(){this.camera.dispose();this.imgSplash.dispose();
this.imgLogo.dispose();this.txtContinue.dispose();this.guiTexture.dispose();this.guiTexture=null;this.rootNode.dispose()},hideScene:function(b){void 0===b&&(b=null);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,250,BABYLON.CubicEase,2,!1,function(){screenSplash.dispose();activeScene.removeScreen(screenSplash);null!=b&&b()})},onResize:function(){if(null!=screenSplash.guiTexture&&this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.imgInlogicLogo.heightInPixels=
.3*e;this.imgInlogicLogo.widthInPixels=this.imgInlogicLogo.heightInPixels/this.imgInlogicLogo.domImage.naturalHeight*this.imgInlogicLogo.domImage.naturalWidth;this.imgInlogicLogo.widthInPixels>.7*b&&(this.imgInlogicLogo.widthInPixels=.7*b,this.imgInlogicLogo.heightInPixels=this.imgInlogicLogo.widthInPixels/this.imgInlogicLogo.domImage.naturalWidth*this.imgInlogicLogo.domImage.naturalHeight);this.imgInlogicLogo.topInPixels=.5*e-this.imgInlogicLogo.heightInPixels/2;this.imgInlogicLogo.leftInPixels=
.5*b-this.imgInlogicLogo.widthInPixels/2;this.pnlBackground.widthInPixels=b;this.pnlBackground.heightInPixels=e;if(b>e){this.imgLogo.widthInPixels=.4*b;this.imgLogo.heightInPixels=this.imgLogo.widthInPixels/this.imgLogo.domImage.naturalWidth*this.imgLogo.domImage.naturalHeight;this.imgLogo.heightInPixels<.35*e&&(this.imgLogo.heightInPixels=.35*e,this.imgLogo.widthInPixels=this.imgLogo.heightInPixels/this.imgLogo.domImage.naturalHeight*this.imgLogo.domImage.naturalWidth);this.imgLogo.topInPixels=.8*
e-this.imgLogo.heightInPixels/2;for(this.imgLogo.leftInPixels=.63*b;this.imgLogo.leftInPixels+this.imgLogo.widthInPixels>b;)this.imgLogo.leftInPixels-=10;for(;this.imgLogo.topInPixels+this.imgLogo.heightInPixels>.9*e;)this.imgLogo.topInPixels-=10;updateTextToWidth(this.txtContinue,screenSplash.guiTexture.getContext(),.5*b,50,3);this.imgSplash.domImage=AssetLoader.instance.loadedImages["splashl.jpg"];this.imgSplash.heightInPixels=e;this.imgSplash.widthInPixels=this.imgSplash.heightInPixels/this.imgSplash.domImage.naturalHeight*
this.imgSplash.domImage.naturalWidth;this.imgSplash.widthInPixels<b&&(this.imgSplash.widthInPixels=b,this.imgSplash.heightInPixels=this.imgSplash.widthInPixels/this.imgSplash.domImage.naturalWidth*this.imgSplash.domImage.naturalHeight);this.imgInlogicSplash.widthInPixels=b;this.imgInlogicSplash.heightInPixels=this.imgInlogicSplash.widthInPixels/this.imgInlogicSplash.domImage.naturalWidth*this.imgInlogicSplash.domImage.naturalHeight;this.imgInlogicSplash.heightInPixels<e&&(this.imgInlogicSplash.heightInPixels=
e,this.imgInlogicSplash.widthInPixels=this.imgInlogicSplash.heightInPixels/this.imgInlogicSplash.domImage.naturalHeight*this.imgInlogicSplash.domImage.naturalWidth)}else{this.imgLogo.heightInPixels=.27*e;this.imgLogo.widthInPixels=this.imgLogo.heightInPixels/this.imgLogo.domImage.naturalHeight*this.imgLogo.domImage.naturalWidth;this.imgLogo.widthInPixels>b/1.08&&(this.imgLogo.widthInPixels=b/1.08,this.imgLogo.heightInPixels=this.imgLogo.widthInPixels/this.imgLogo.domImage.naturalWidth*this.imgLogo.domImage.naturalHeight);
this.imgLogo.widthInPixels<.65*b&&(this.imgLogo.widthInPixels=.65*b,this.imgLogo.heightInPixels=this.imgLogo.widthInPixels/this.imgLogo.domImage.naturalWidth*this.imgLogo.domImage.naturalHeight);this.imgLogo.topInPixels=.61*e;for(this.imgLogo.leftInPixels=.5*(b-this.imgLogo.widthInPixels);this.imgLogo.topInPixels+this.imgLogo.heightInPixels>.9*e;)this.imgLogo.topInPixels-=10;updateTextToWidth(this.txtContinue,screenSplash.guiTexture.getContext(),.95*b,50,3);this.imgSplash.domImage=AssetLoader.instance.loadedImages["splashp.jpg"];
this.imgSplash.widthInPixels=b;this.imgSplash.heightInPixels=this.imgSplash.widthInPixels/this.imgSplash.domImage.naturalWidth*this.imgSplash.domImage.naturalHeight;this.imgSplash.heightInPixels<e&&(this.imgSplash.heightInPixels=e,this.imgSplash.widthInPixels=this.imgSplash.heightInPixels/this.imgSplash.domImage.naturalHeight*this.imgSplash.domImage.naturalWidth);this.imgInlogicSplash.heightInPixels=e;this.imgInlogicSplash.widthInPixels=this.imgInlogicSplash.heightInPixels/this.imgInlogicSplash.domImage.naturalHeight*
this.imgInlogicSplash.domImage.naturalWidth;this.imgInlogicSplash.widthInPixels<b&&(this.imgInlogicSplash.widthInPixels=b,this.imgInlogicSplash.heightInPixels=this.imgInlogicSplash.widthInPixels/this.imgInlogicSplash.domImage.naturalWidth*this.imgInlogicSplash.domImage.naturalHeight)}this.txtContinue.topInPixels=.43*e;this.txtContinue.fontSize=50*Resolution.SCALE;this.resizeShadows()}},resizeShadows:function(){var b=this.txtContinue._fontSize._value/50;this.txtContinue.shadowOffsetX=getShadowOffs(0);
this.txtContinue.shadowOffsetY=getShadowOffs(3*b);this.txtContinue.outlineWidth=OUTLINE_WIDTH*b}};var MAX_FLYING_OBJECTS=6,ScreenBackground=function(b){ScreenBackground.instance=this;this.create(b)};ScreenBackground.instance=null;
ScreenBackground.prototype={create:function(b){this.scene=b;this.rootNode=new BABYLON.TransformNode("ScreenBackground");this.createCamera();this.createGui();this.guiRoot.isVisible=!1},createCamera:function(){this.camera=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,0,-10),this.scene);this.camera.setTarget(new BABYLON.Vector3(0,0,0));this.camera.mode=BABYLON.Camera.ORTHOGRAFIC_CAMERA;this.camera.orthoTop=1;this.camera.orthoBottom=-1;this.camera.orthoLeft=-2;this.camera.orthoRight=2;this.camera.layerMask=
LAYER_SCREEN_BACKGROUND;this.camera.parent=this.rootNode;this.camera.viewport=new BABYLON.Viewport(0,0,1,1)},createGui:function(){this.guiTexture=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ScreenBackground");this.guiTexture.layer.layerMask=LAYER_SCREEN_BACKGROUND;this.guiTexture.rootContainer.highlightLineWidth=0;this.initGuiControls(this.guiTexture)},initGuiControls:function(b){this.createRootPanel(b);this.createBackground(this.pnlRoot)},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenBackground.pnlRoot");
this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipChildren=!0;this.pnlRoot.clipContent=!0;this.pnlRoot.isVisible=!0;b.addControl(this.pnlRoot);this.guiRoot=this.pnlRoot},createBackground:function(b){this.imgBackground=new BABYLON.GUI.Rectangle("imgBackground");this.imgBackground.transformCenterX=
.5;this.imgBackground.transformCenterY=.5;this.imgBackground.isPointerBlocker=!1;this.imgBackground.isHitTestVisible=!1;this.imgBackground.clipContent=!1;this.imgBackground.clipChildren=!1;this.imgBackground.thickness=0;this.imgBackground.color="orange";this.imgBackground.background="rgb(118, 129, 151)";b.addControl(this.imgBackground);this.imgBackground.resize=function(e,h){this.widthInPixels=e+5;this.heightInPixels=h+5}},beforeRender:function(){},onResize:function(){var b=engine.getRenderWidth(),
e=engine.getRenderHeight();autoResizeOrthographicCamera(this.camera,1);this.imgBackground.resize(b,e)}};var ScreenTopPanel=function(b){ScreenTopPanel.instance=this;this.create(b)};ScreenTopPanel.instance=null;
ScreenTopPanel.prototype={create:function(b){this.scene=b;this.PANELS_THICKNESS=0;this.createGui();this.enableControls();this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createTopPanel(this.pnlRoot);this.createSettingsButton(this.pnlTop);this.createCoinsPanel(this.pnlTop,0,0);fullscreenAvail()&&this.createFullscreenButton(this.pnlTop);gameConfig.debugVersion&&(this.createVersionInfo(),
this.createDebugInfo())},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenTopPanel.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.zIndex=90;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;b.addControl(this.pnlRoot);return this.pnlRoot},createTopPanel:function(b){this.pnlTop=
new BABYLON.GUI.Rectangle("pnlTop");this.pnlTop.transformCenterX=.5;this.pnlTop.transformCenterY=.5;this.pnlTop.isPointerBlocker=!1;this.pnlTop.isHitTestVisible=!1;this.pnlTop.leftInPixels=0;this.pnlTop.topInPixels=0;this.pnlTop.thickness=0;this.pnlTop.highlightLineWidth=0;this.pnlTop.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.pnlTop.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.pnlTop.heightInPixels=120;b.addControl(this.pnlTop);this.pnlTop.resize=
function(e,h){var f=.09*h;h>e&&(f=.09*h);this.heightInPixels=f+10};return this.pnlTop},createSettingsButton:function(b){this.btnSettings=BABYLON.GUI.Button.CreateImageOnlyButton("btnSettings");this.btnSettings.children[0].transformCenterY=.5;this.btnSettings.children[0].transformCenterX=0;this.btnSettings.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnSettings.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnSettings.transformCenterX=
1;this.btnSettings.transformCenterY=0;this.btnSettings.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;this.btnSettings.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.btnSettings.topInPixels=14*Resolution.SCALE;this.btnSettings.leftInPixels=0;this.btnSettings.isHitTestVisible=!1;this.btnSettings.isFocusInvisible=!0;b.addControl(this.btnSettings);SetImageFromSpritesheet(this.btnSettings.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"settings_button.png");
ResetGuiButtonAppearance(this.btnSettings,this.btnSettings.children[0].sourceWidth,this.btnSettings.children[0].sourceHeight);this.btnSettings.onPointerClickObservable.add(this.onSettingsPressed);this.btnSettings.resize=function(e,h){this.scaleX=this.scaleY=ScreenTopPanel.instance.pnlTop.heightInPixels/140;this.topInPixels=10*this.scaleY;this.leftInPixels=-10*this.scaleX}},createFullscreenButton:function(b){this.btnFullscreen=BABYLON.GUI.Button.CreateImageOnlyButton("btnFullscreen");this.btnFullscreen.children[0].transformCenterY=
.5;this.btnFullscreen.children[0].transformCenterX=0;this.btnFullscreen.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnFullscreen.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_LEFT;this.btnFullscreen.transformCenterX=0;this.btnFullscreen.transformCenterY=0;this.btnFullscreen.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.btnFullscreen.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.btnFullscreen.topInPixels=
this.btnSettings.topInPixels;this.btnFullscreen.leftInPixels=0;this.btnFullscreen.isHitTestVisible=!1;this.btnFullscreen.isFocusInvisible=!0;b.addControl(this.btnFullscreen);SetImageFromSpritesheet(this.btnFullscreen.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"resize_1.png");ResetGuiButtonAppearance(this.btnFullscreen,this.btnFullscreen.children[0].sourceWidth,this.btnFullscreen.children[0].sourceHeight);this.btnFullscreen.onPointerClickObservable.add(this.onFullscreenPressed.bind(this));
this.btnFullscreen.resize=function(e,h){this.scaleX=this.scaleY=ScreenTopPanel.instance.btnSettings.scaleY;this.leftInPixels=-ScreenTopPanel.instance.btnSettings.leftInPixels;this.topInPixels=ScreenTopPanel.instance.btnSettings.topInPixels};this.btnFullscreen.updateIcon=function(){fullscreenActive()?SetImageFromSpritesheet(this.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"resize_2.png"):SetImageFromSpritesheet(this.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"resize_1.png")}},
createCoinsPanel:function(b,e,h){this.pnlCoins=new BABYLON.GUI.Rectangle("pnlCoins");this.pnlCoins.thickness=this.PANELS_THICKNESS;this.pnlCoins.color="yellow";this.pnlCoins.transformCenterY=0;this.pnlCoins.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.pnlCoins.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.pnlCoins.leftInPixels=e;this.pnlCoins.topInPixels=h;this.pnlCoins.thickness=0;this.pnlCoins.heightInPixels=100;this.pnlCoins.widthInPixels=350;this.pnlCoins.isPointerBlocker=
!1;this.pnlCoins.isHitTestVisible=!1;this.pnlCoins.clipContent=!1;this.pnlCoins.clipChildren=!1;b.addControl(this.pnlCoins);this.imgCoinsBG=new BABYLON.GUI.Image("imgCoinsBG");this.imgCoinsBG.transformCenterX=.5;this.imgCoinsBG.transformCenterY=.5;this.imgCoinsBG.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgCoinsBG.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.imgCoinsBG.isPointerBlocker=!1;this.imgCoinsBG.isHitTestVisible=!1;this.imgCoinsBG.leftInPixels=
0;this.imgCoinsBG.topInPixels=0;this.pnlCoins.addControl(this.imgCoinsBG);SetImageFromSpritesheet(this.imgCoinsBG,getAssetImage("pak1"),getAssetImageFrames("pak1"),"coins_table.png");this.imgCash=new BABYLON.GUI.Image("imgCash");this.imgCash.transformCenterX=.5;this.imgCash.transformCenterY=.5;this.imgCash.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgCash.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.imgCash.isPointerBlocker=!1;this.imgCash.isHitTestVisible=
!1;this.imgCash.leftInPixels=0;this.imgCash.topInPixels=0;this.pnlCoins.addControl(this.imgCash);SetImageFromSpritesheet(this.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_table_coins.png");this.txtCoinsVal=new BABYLON.GUI.TextBlock("txtCoinsVal");this.txtCoinsVal.textWrapping=!1;this.txtCoinsVal.shadowBlur=0;this.txtCoinsVal.transformCenterX=.5;this.txtCoinsVal.transformCenterY=.5;this.txtCoinsVal.leftInPixels=30;this.txtCoinsVal.topInPixels=0;this.txtCoinsVal.fontFamily="gamefont";
this.txtCoinsVal.fontSize=35;this.txtCoinsVal.color="white";this.txtCoinsVal.shadowOffsetX=0;this.txtCoinsVal.shadowOffsetY=2;this.txtCoinsVal.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(55,26,2)":"rgba(80,80,80,0)";this.txtCoinsVal.outlineColor="rgb(55,26,2)";this.txtCoinsVal.outlineWidth=5;this.txtCoinsVal.shadowBlur=0;this.txtCoinsVal.text="1523";this.txtCoinsVal.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtCoinsVal.isPointerBlocker=!1;this.txtCoinsVal.isHitTestVisible=
!1;this.pnlCoins.addControl(this.txtCoinsVal);this.pnlCoins.resize=function(f,k){this.scaleX=this.scaleY=.9*ScreenTopPanel.instance.btnSettings.scaleY;this.topInPixels=20*this.scaleY}},createVersionInfo:function(){this.txtVersion=new BABYLON.GUI.TextBlock;this.txtVersion.textWrapping=!0;this.txtVersion.leftInPixels=-5;this.txtVersion.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;this.txtVersion.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;this.txtVersion.textHorizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;this.txtVersion.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;this.txtVersion.color="white";this.txtVersion.text=" v"+GameData.BuildVersion+" [ "+GameData.BuildString+" ]";this.txtVersion.outlineWidth=3;this.txtVersion.outlineColor="#333333EE";this.txtVersion.fontSize="17px";this.txtVersion.isPointerBlocker=!1;this.txtVersion.isHitTestVisible=!1;this.pnlRoot.addControl(this.txtVersion)},createDebugInfo:function(){this.sceneInstrumentation=
new BABYLON.SceneInstrumentation(activeScene.scene);this.sceneInstrumentation.captureActiveMeshesEvaluationTime=!0;this.sceneInstrumentation.captureFrameTime=!0;this.sceneInstrumentation.captureParticlesRenderTime=!0;this.sceneInstrumentation.captureRenderTime=!0;this.sceneInstrumentation.captureCameraRenderTime=!0;this.sceneInstrumentation.captureRenderTargetsRenderTime=!0;this.sceneInstrumentation.captureInterFrameTime=!0;this.txtDebugInfo=new BABYLON.GUI.TextBlock;this.txtDebugInfo.horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.txtDebugInfo.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.txtDebugInfo.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.txtDebugInfo.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.txtDebugInfo.leftInPixels=5;this.txtDebugInfo.topInPixels=80*Resolution.SCALE;this.txtDebugInfo.text="Draw Calls: ";this.txtDebugInfo.heightInPixels=200;this.txtDebugInfo.widthInPixels=300;this.txtDebugInfo.color=
"white";this.txtDebugInfo.fontSize=12;this.txtDebugInfo.outlineWidth=3;this.txtDebugInfo.outlineColor="#333333EE";this.txtDebugInfo.textHorizontalAlignment=0;this.txtDebugInfo.thickness=1;this.pnlRoot.addControl(this.txtDebugInfo)},onSettingsPressed:function(){if(Buttons.enabled&&activeScene.inputEnabled){Buttons.enabled=!1;soundManager.playSound("button");screenGame.guiRoot.isVisible&&screenGame.disableControls();screenTopPanel.hideScene();var b=screenSettings;b.enableControls();b.wasPaused=activeScene.gamePaused;
activeScene.gamePaused=!0;b.showScene(function(){Buttons.enabled=!0})}},onFullscreenPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(soundManager.playSound("button"),fullscreenToggle(),this.btnFullscreen.updateIcon())},incCash:function(b){PlayerCash+=b;GameSnacks.score.update(PlayerCash);GameData.Save();this.pnlCoins.resize(engine.getRenderWidth(),engine.getRenderHeight());b=this.pnlCoins.scaleX;CommonAnimations.AnimateObjectProperty(this.pnlCoins,"scaleX",null,150,null,1,!1,null,[[0,
1*b],[.5,.97*b],[1,1*b]]);CommonAnimations.AnimateObjectProperty(this.pnlCoins,"scaleY",null,150,null,1,!1,null,[[0,1*b],[.5,.97*b],[1,1*b]]);this.updateData();screenGame.updateData()},purchaseForCash:function(b,e){void 0===e&&(e=!1);if(b>PlayerCash)return this.pnlCoins.resize(engine.getRenderWidth(),engine.getRenderHeight()),b=this.pnlCoins.scaleX,CommonAnimations.AnimateObjectProperty(this.pnlCoins,"scaleX",null,150,null,1,!1,null,[[0,1*b],[.5,.97*b],[1,1*b]]),CommonAnimations.AnimateObjectProperty(this.pnlCoins,
"scaleY",null,150,null,1,!1,null,[[0,1*b],[.5,.97*b],[1,1*b]]),soundManager.playSound("negative_buy"),!1;e||soundManager.playSound("buy");PlayerCash-=b;GameSnacks.score.update(PlayerCash);GameData.Save();this.updateData();return!0},animateEarnedCoins:function(b,e,h,f,k){void 0===k&&(k=450);var m=function(v){soundManager.playSound("coin");screenTopPanel.incCash(v.data.amount)},n=Math.floor(b/5);b=n+b%5;for(var y=0;5>y;y++){var x=this.imgCoinsBG.transformedMeasure,w=x.left+.1*x.width-engineRenderWidth/
2;x=x.top+x.height/2-engineRenderHeight/2;screenParticles.flyingSprites.CreateFlyingEarnedCoin(e+4*getRandomInt(10)*Resolution.SCALE,h+4*getRandomInt(10)*Resolution.SCALE,w,x,4>y?n:b,k,f,m)}},updateTexts:function(){},setPlayerCash:function(b){this.txtCoinsVal.text=""+b;updateTextToWidth(this.txtCoinsVal,screenGame.guiTexture.getContext(),250,45,1);b=this.imgCash.widthInPixels*this.imgCash.scaleX;var e=getTextWidth(screenGame.guiTexture.getContext(),this.txtCoinsVal.text,this.txtCoinsVal.fontFamily,
this.txtCoinsVal._fontSize._value);this.imgCash.leftInPixels=-(b+e+-5)/2+b/2-5;this.txtCoinsVal.leftInPixels=this.imgCash.leftInPixels+e/2+-5+b/2},updateData:function(){this.setPlayerCash(PlayerCash)},enableControls:function(){enableButton(this.btnSettings);fullscreenAvail()&&enableButton(this.btnFullscreen)},disableControls:function(){disableButton(this.btnSettings);fullscreenAvail()&&disableButton(this.btnFullscreen)},showButtons:function(b){void 0===b&&(b=null);fullscreenAvail()&&(this.btnFullscreen.isVisible=
!0,CommonAnimations.AnimateObjectProperty(this.btnFullscreen,"alpha",1,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1));this.btnSettings.isVisible=!0;CommonAnimations.AnimateObjectProperty(this.btnSettings,"alpha",1,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1,function(){null!=b&&b()})},hideButtons:function(b){void 0===b&&(b=null);fullscreenAvail()&&CommonAnimations.AnimateObjectProperty(this.btnFullscreen,"alpha",0,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1,function(){this.btnFullscreen.isVisible=
!1}.bind(this));this.btnSettings.isVisible=!0;CommonAnimations.AnimateObjectProperty(this.btnSettings,"alpha",0,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1,function(){this.btnSettings.isVisible=!1;null!=b&&b()}.bind(this))},showPlayerMoney:function(b){void 0===b&&(b=null);this.pnlCoins.isVisible=!0;CommonAnimations.AnimateObjectProperty(this.pnlCoins,"alpha",1,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1,function(){null!=b&&b()})},hidePlayerMoney:function(b){void 0===b&&(b=null);CommonAnimations.AnimateObjectProperty(this.pnlCoins,
"alpha",0,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1,function(){screenTopPanel.pnlCoins.isVisible=!1;null!=b&&b()})},hideScene:function(b){void 0===b&&(b=null);this.disableControls();CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1,function(){null!=b&&b()})},showScene:function(b){void 0===b&&(b=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.updateData();this.enableControls();this.onResize();CommonAnimations.AnimateObjectProperty(this.guiRoot,
"alpha",1,SCENE_TRANSITION_DURATION,BABYLON.CubicEase,2,!1,function(){null!=b&&b()})},beforeRender:function(){},afterRender:function(){if(this.guiRoot.isVisible&&!1!==gameConfig.debugVersion){var b="FPS: "+engine.getFps().toFixed()+" fps";b=b+"\nDraw Calls: "+this.sceneInstrumentation.drawCallsCounter.current;b=b+"\nMeshes: "+activeScene.scene.meshes.length;b=b+"\nMeshes: "+activeScene.scene.getActiveMeshes().length;b=b+"\nMaterials: "+activeScene.scene.materials.length;b=b+"\nTextures: "+activeScene.scene.textures.length;
b=b+"\nScene Frame Time: "+this.sceneInstrumentation.frameTimeCounter.lastSecAverage.toFixed(2);b=b+"\nScene Render Time: "+this.sceneInstrumentation.renderTimeCounter.current.toFixed();b=b+"\nActive Meshes Eval Time: "+this.sceneInstrumentation.activeMeshesEvaluationTimeCounter.lastSecAverage.toFixed(2);this.txtDebugInfo.text=b}},updateCoinPanelScale:function(){engine.getRenderWidth();var b=engine.getRenderHeight();this.pnlCoins.scaleX=.35*b/this.pnlCoins.widthInPixels;this.pnlCoins.scaleY=this.pnlCoins.scaleX},
onResize:function(){if(this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.pnlTop.resize(b,e);this.btnSettings.resize(b,e);this.pnlCoins.resize(b,e);fullscreenAvail()&&(this.btnFullscreen.resize(b,e),this.btnFullscreen.updateIcon());gameConfig.debugVersion&&(this.txtVersion.fontSize=20*this.btnSettings.scaleX,this.txtDebugInfo.fontSize=20*this.btnSettings.scaleX,this.txtDebugInfo.topInPixels=this.pnlTop.heightInPixels*this.pnlTop.scaleY);this.resizeShadows()}},resizeShadows:function(){var b=
this.txtCoinsVal._fontSize._value/35;this.txtCoinsVal.shadowOffsetX=getShadowOffs(0);this.txtCoinsVal.shadowOffsetY=getShadowOffs(4);this.txtCoinsVal.outlineWidth=getOutlineOffs(OUTLINE_WIDTH*b)}};var TEXT_SHADOWS_ENABLED=!0,OUTLINE_WIDTH=6;const GAME_OVER_DELAY=3500;var ONBOARDING_PHASE_DURATION=500;const GRAVITY=new BABYLON.Vector3(0,-9.81,0);var c3=function(b,e,h){return new BABYLON.Color3(b,e,h)},v3=function(b,e,h){return new BABYLON.Vector3(b,e,h)},v4=function(b,e,h,f){return new BABYLON.Vector4(b,e,h,f)},collidersVisible=!0,ScreenGame=function(b){ScreenGame.instance=this;this.create(b)};ScreenGame.instance=null;
ScreenGame.prototype={create:function(b){this.scene=b;this.rootNode=new BABYLON.TransformNode("ScreenGame");this.createCamera();this.createGui();this.initLevel();this.disableControls();this.keyboardSpacePressed=this.guiRoot.isVisible=!1;this.collectedGifts=0;this.rootNode.setEnabled(!1);this.doNotShowSettingsOnPause=!1},createGui:function(){BABYLON.GUI.AdvancedDynamicTexture.UseInvalidateRectOptimization=!0;this.guiTexture=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ScreenGame");this.guiTexture.layer.layerMask=
this.cameraPlayer.layerMask;this.guiTexture.rootContainer.highlightLineWidth=0;this.guiTexture.onControlPickedObservable.add(function(b){});this.initGuiControls(this.guiTexture)},initGuiControls:function(b){this.createRootPanel(b);this.createOffersPanel(this.pnlRoot);this.createLeftPanel(this.pnlRoot);this.createOnboardingJoystick(this.pnlRoot);this.createOnboardingKeyboard(this.pnlRoot);this.createOnboardingArrow(this.pnlRoot);this.createOverlay(this.pnlRoot)},createRootPanel:function(b){this.pnlRoot=
new BABYLON.GUI.Rectangle("ScreenGame.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipChildren=!1;this.pnlRoot.clipContent=!1;this.pnlRoot.zIndex=0;b.addControl(this.pnlRoot);this.guiRoot=this.pnlRoot},createOffersPanel:function(b){this.activeOffers=[];var e=["income","capacity",
"speed","customers","machines"];this.pnlOffers=new BABYLON.GUI.Rectangle("pnlOffers");this.pnlOffers.transformCenterX=.5;this.pnlOffers.transformCenterY=0;this.pnlOffers.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.pnlOffers.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;this.pnlOffers.isPointerBlocker=!1;this.pnlOffers.isHitTestVisible=!1;this.pnlOffers.leftInPixels=0;this.pnlOffers.topInPixels=0;this.pnlOffers.thickness=0;this.pnlOffers.color="yellow";this.pnlOffers.widthInPixels=
140*e.length;this.pnlOffers.heightInPixels=180;this.pnlOffers.highlightLineWidth=0;this.pnlOffers.clipChildren=!1;this.pnlOffers.clipContent=!1;this.pnlOffers.isVisible=!0;b.addControl(this.pnlOffers);this.pnlOffers.updateOffers=function(k){for(var m=0,n=0;n<screenGame.activeOffers.length;n++)screenGame.activeOffers[n].updateOffer(k),screenGame.activeOffers[n].isVisible&&m++;k=140*(screenGame.activeOffers.length-m)/2;for(n=0;n<screenGame.activeOffers.length;n++)screenGame.activeOffers[n].isVisible&&
(screenGame.activeOffers[n].leftInPixels=k,k+=140)};this.pnlOffers.scaleTo=function(k){this.scaleX=this.scaleY=k};for(var h=b=0;h<e.length;h++){var f=new BABYLON.GUI.Rectangle("activeOffer_"+e[h]);f.transformCenterX=0;f.transformCenterY=0;f.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;f.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.isPointerBlocker=!1;f.isHitTestVisible=!1;f.leftInPixels=b;f.topInPixels=0;f.thickness=0;f.color="green";f.widthInPixels=140;f.heightInPixels=
180;f.highlightLineWidth=0;f.clipChildren=!1;f.clipContent=!1;f.isVisible=!0;f.offerType=e[h];this.pnlOffers.addControl(f);b+=140;f.updateOffer=function(k){0<=ActiveOfferTypes.indexOf(this.offerType)?(this.isVisible=!0,this.redFill.arc=1-TimedOffers[this.offerType+"X2"].perc):this.isVisible=!1};f.imgOfferBg=new BABYLON.GUI.Image("activeOffer.imgOfferBg");f.imgOfferBg.transformCenterX=.5;f.imgOfferBg.transformCenterY=.5;f.imgOfferBg.isPointerBlocker=!1;f.imgOfferBg.isHitTestVisible=!1;f.imgOfferBg.leftInPixels=
0;f.imgOfferBg.topInPixels=0;f.imgOfferBg.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.imgOfferBg.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(f.imgOfferBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"offer_table.png");f.addControl(f.imgOfferBg);f.mask=new BABYLON.GUI.Rectangle("activeOffer.mask");f.mask.transformCenterX=0;f.mask.transformCenterY=0;f.mask.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.mask.verticalAlignment=
BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.mask.isPointerBlocker=!1;f.mask.isHitTestVisible=!1;f.mask.leftInPixels=0;f.mask.cornerRadius=6;f.mask.topInPixels=-17;f.mask.thickness=1;f.mask.color="cyan";f.mask.widthInPixels=107;f.mask.heightInPixels=107;f.mask.highlightLineWidth=0;f.mask.clipChildren=!0;f.mask.clipContent=!0;f.mask.isVisible=!0;f.addControl(f.mask);f.greenFill=new BABYLON.GUI.Rectangle("activeOffer.greenFill");f.greenFill.transformCenterX=0;f.greenFill.transformCenterY=0;f.greenFill.horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.greenFill.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.greenFill.isPointerBlocker=!1;f.greenFill.isHitTestVisible=!1;f.greenFill.leftInPixels=0;f.greenFill.topInPixels=0;f.greenFill.thickness=0;f.greenFill.background="#44ff02";f.greenFill.widthInPixels=109;f.greenFill.heightInPixels=107;f.greenFill.highlightLineWidth=0;f.greenFill.isVisible=!0;f.mask.addControl(f.greenFill);f.redFill=new BABYLON.GUI.Ellipse;f.redFill.widthInPixels=
145;f.redFill.heightInPixels=145;f.redFill.top="0px";f.redFill.color="#cc0224";f.redFill.thickness=70;f.redFill.rotation=-DegToRad(90);f.redFill.useBitmapCache=!0;f.redFill.arc=-.7;f.mask.addControl(f.redFill);f.imgOfferIcon=new BABYLON.GUI.Image("activeOffer.imgOfferIcon");f.imgOfferIcon.transformCenterX=.5;f.imgOfferIcon.transformCenterY=.5;f.imgOfferIcon.isPointerBlocker=!1;f.imgOfferIcon.isHitTestVisible=!1;f.imgOfferIcon.leftInPixels=0;f.imgOfferIcon.topInPixels=-17;f.imgOfferIcon.alpha=.95;
f.imgOfferIcon.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.imgOfferIcon.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(f.imgOfferIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),"offer_"+e[h]+"_g.png");f.addControl(f.imgOfferIcon);f.imgOffer2x=new BABYLON.GUI.Image("activeOffer.imgOffer2x");f.imgOffer2x.transformCenterX=.5;f.imgOffer2x.transformCenterY=.5;f.imgOffer2x.isPointerBlocker=!1;f.imgOffer2x.isHitTestVisible=!1;f.imgOffer2x.leftInPixels=
0;f.imgOffer2x.topInPixels=52;f.imgOffer2x.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.imgOffer2x.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(f.imgOffer2x,getAssetImage("pak1"),getAssetImageFrames("pak1"),"offer_2x.png");f.addControl(f.imgOffer2x);this.activeOffers[h]=f}},createLeftPanel:function(b){this.pnlLeft=new BABYLON.GUI.Rectangle("pnlLeft");this.pnlLeft.transformCenterX=0;this.pnlLeft.transformCenterY=0;this.pnlLeft.horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.pnlLeft.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.pnlLeft.isPointerBlocker=!1;this.pnlLeft.isHitTestVisible=!1;this.pnlLeft.leftInPixels=0;this.pnlLeft.topInPixels=0;this.pnlLeft.thickness=0;this.pnlLeft.color="green";this.pnlLeft.widthInPixels=90;this.pnlLeft.heightInPixels=175;this.pnlLeft.highlightLineWidth=0;this.pnlLeft.clipChildren=!1;this.pnlLeft.clipContent=!1;this.pnlLeft.isVisible=!0;b.addControl(this.pnlLeft);
this.pnlLeft.scaleTo=function(e){this.scaleX=this.scaleY=e};this.btnPlayerCustomisation=BABYLON.GUI.Button.CreateImageOnlyButton("btnPlayerCustomisation");this.btnPlayerCustomisation.children[0].transformCenterY=.5;this.btnPlayerCustomisation.children[0].transformCenterX=.5;this.btnPlayerCustomisation.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnPlayerCustomisation.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnPlayerCustomisation.transformCenterX=
.5;this.btnPlayerCustomisation.transformCenterY=.5;this.btnPlayerCustomisation.topInPixels=rewAdsConfig.active?-40:0;this.btnPlayerCustomisation.leftInPixels=0;this.pnlLeft.addControl(this.btnPlayerCustomisation);SetImageFromSpritesheet(this.btnPlayerCustomisation.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"button_custom.png");ResetGuiButtonAppearance(this.btnPlayerCustomisation,this.btnPlayerCustomisation.children[0].sourceWidth,this.btnPlayerCustomisation.children[0].sourceHeight);
this.btnPlayerCustomisation.onPointerClickObservable.add(this.onPlayerCustomisationPressed.bind(this));this.btnPlayerCustomisation.imgNotification=new BABYLON.GUI.Image("this.btnPlayerCustomisation.imgNotification");this.btnPlayerCustomisation.imgNotification.transformCenterX=.5;this.btnPlayerCustomisation.imgNotification.transformCenterY=.5;this.btnPlayerCustomisation.imgNotification.isPointerBlocker=!1;this.btnPlayerCustomisation.imgNotification.isHitTestVisible=!1;this.btnPlayerCustomisation.imgNotification.leftInPixels=
35;this.btnPlayerCustomisation.imgNotification.topInPixels=-35;this.btnPlayerCustomisation.imgNotification.scaleX=this.btnPlayerCustomisation.imgNotification.scaleY=.65;this.btnPlayerCustomisation.imgNotification.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnPlayerCustomisation.imgNotification.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(this.btnPlayerCustomisation.imgNotification,getAssetImage("pak1"),getAssetImageFrames("pak1"),
"icon_notification.png");this.btnPlayerCustomisation.addControl(this.btnPlayerCustomisation.imgNotification);b=[[0,0],[.05,-DegToRad(10)],[.1,0],[3*.05,DegToRad(10)],[.2,0],[1,0]];CommonAnimations.AnimateObjectProperty(this.btnPlayerCustomisation.imgNotification,"rotation",1,1500,null,1,!0,null,b);this.btnTimedOffers=BABYLON.GUI.Button.CreateImageOnlyButton("btnTimedOffers");this.btnTimedOffers.children[0].transformCenterY=.5;this.btnTimedOffers.children[0].transformCenterX=.5;this.btnTimedOffers.children[0].horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnTimedOffers.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnTimedOffers.transformCenterX=.5;this.btnTimedOffers.transformCenterY=.5;this.btnTimedOffers.topInPixels=55;this.btnTimedOffers.leftInPixels=0;this.btnTimedOffers.isVisible=rewAdsConfig.active;this.pnlLeft.addControl(this.btnTimedOffers);SetImageFromSpritesheet(this.btnTimedOffers.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"button_shop.png");
ResetGuiButtonAppearance(this.btnTimedOffers,this.btnTimedOffers.children[0].sourceWidth,this.btnTimedOffers.children[0].sourceHeight);this.btnTimedOffers.onPointerClickObservable.add(this.onTimedOffersPressed.bind(this));this.btnTimedOffers.imgNotification=new BABYLON.GUI.Image("this.btnTimedOffers.imgNotification");this.btnTimedOffers.imgNotification.transformCenterX=.5;this.btnTimedOffers.imgNotification.transformCenterY=.5;this.btnTimedOffers.imgNotification.isPointerBlocker=!1;this.btnTimedOffers.imgNotification.isHitTestVisible=
!1;this.btnTimedOffers.imgNotification.leftInPixels=35;this.btnTimedOffers.imgNotification.topInPixels=-35;this.btnTimedOffers.imgNotification.scaleX=this.btnTimedOffers.imgNotification.scaleY=.65;this.btnTimedOffers.imgNotification.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnTimedOffers.imgNotification.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(this.btnTimedOffers.imgNotification,getAssetImage("pak1"),getAssetImageFrames("pak1"),
"icon_notification.png");this.btnTimedOffers.addControl(this.btnTimedOffers.imgNotification);CommonAnimations.AnimateObjectProperty(this.btnTimedOffers.imgNotification,"rotation",1,1500,null,1,!0,null,b);this.btnPlayerCustomisation.widthInPixels=this.btnPlayerCustomisation.heightInPixels=102;this.btnTimedOffers.widthInPixels=this.btnTimedOffers.heightInPixels=102},onPlayerCustomisationPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),
screenGame.guiRoot.isVisible&&screenGame.disableControls(),screenTopPanel.hideButtons(),screenSkins.enableControls(),Shop.instance.onPause(),screenSkins.showScene(function(){Buttons.enabled=!0}))},onTimedOffersPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenGame.guiRoot.isVisible&&screenGame.disableControls(),screenTopPanel.hideButtons(),screenTimedOffers.enableControls(),screenTimedOffers.wasPaused=activeScene.gamePaused,activeScene.gamePaused=
!0,Shop.instance.onPause(),screenTimedOffers.showScene(function(){Buttons.enabled=!0}))},openOfferDialog:function(b){Buttons.enabled=!1;screenGame.guiRoot.isVisible&&screenGame.disableControls();screenTopPanel.hideButtons();screenOffer.enableControls();screenOffer.wasPaused=activeScene.gamePaused;activeScene.gamePaused=!0;screenOffer.titleStr="REWARD";screenOffer.offer=b;screenOffer.updateTexts();screenOffer.txtReward.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";screenOffer.txtReward.outlineColor=
"rgb(79,48,11)";SetImageFromSpritesheet(screenOffer.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_reward_gold_bg.png");SetImageFromSpritesheet(screenOffer.imgBodyIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),"ic_"+b.options.offerType+"_xxl.png");Shop.instance.onPause();soundManager.playSound("unlocked");screenOffer.showScene(function(){Buttons.enabled=!0})},openHelpDialog:function(b){Buttons.enabled=!1;screenGame.guiRoot.isVisible&&screenGame.disableControls();screenTopPanel.hideButtons();
screenOffer.enableControls();screenOffer.wasPaused=activeScene.gamePaused;activeScene.gamePaused=!0;screenOffer.titleStr="LITTLE_HELP";screenOffer.offer=b;screenOffer.updateTexts();screenOffer.txtReward.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(48,21,131)":"rgba(80,80,80,0)";screenOffer.txtReward.outlineColor="rgb(48,21,131)";SetImageFromSpritesheet(screenOffer.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_reward_bg.png");SetImageFromSpritesheet(screenOffer.imgBodyIcon,getAssetImage("pak1"),
getAssetImageFrames("pak1"),"ic_income_xxl.png");Shop.instance.onPause();soundManager.playSound("unlocked");screenOffer.showScene(function(){Buttons.enabled=!0})},openSoldProductsDialog:function(b){Buttons.enabled=!1;screenGame.guiRoot.isVisible&&screenGame.disableControls();screenTopPanel.hideButtons();screenSoldProducts.enableControls();screenSoldProducts.wasPaused=activeScene.gamePaused;activeScene.gamePaused=!0;Shop.instance.onPause();soundManager.playSound("kaching");screenSoldProducts.showScene(b,
function(){Buttons.enabled=!0})},openGameWinDialog:function(){Buttons.enabled=!1;screenGame.guiRoot.isVisible&&screenGame.disableControls();screenTopPanel.hideButtons();screenGameWin.enableControls();screenGameWin.wasPaused=activeScene.gamePaused;activeScene.gamePaused=!0;Shop.instance.onPause();inlHelper.game.onGameOver(GAMEOVER_BY_WIN);soundManager.playSound("ending");screenGameWin.showScene(function(){Buttons.enabled=!0})},createPlayerNavigationArrow:function(){this.playerNavigationArrow=BABYLON.MeshBuilder.CreatePlane("playerNavigationArrow # "+
name,{width:1.5,height:1.5},activeScene.scene);this.playerNavigationArrow.rotation.x=DegToRad(90);this.playerNavigationArrow.layerMask=LAYER_SCREEN_GAME;this.playerNavigationArrow.material=new BABYLON.StandardMaterial("playerNavigationArrow_material # "+name,activeScene.scene);this.playerNavigationArrow.material.diffuseTexture=AssetLoader.instance.loadedTextures["navigation_arrow.png"];this.playerNavigationArrow.material.unlit=!0;this.playerNavigationArrow.material.diffuseTexture.hasAlpha=!0;this.playerNavigationArrow.material.diffuseTexture.premulAlpha=
!0;this.playerNavigationArrow.material.opacityTexture=this.playerNavigationArrow.material.diffuseTexture;this.playerNavigationArrow.material.specularColor=new BABYLON.Color3(0,0,0);this.playerNavigationArrow.material.emissiveColor=new BABYLON.Color3(1,1,1);this.playerNavigationArrow.material.transparencyMode=2;this.playerNavigationArrow.material.alphaMode=8},updatePlayerNavigationArrow:function(){if(null==this.onboardingTarget)this.playerNavigationArrow.isVisible=!1;else{this.playerNavigationArrow.isVisible=
!0;var b=Shop.instance.getPlayerPlayer().position.clone(),e=BABYLON.Angle.BetweenTwoPoints(new BABYLON.Vector2(b.x,b.z),new BABYLON.Vector2(this.onboardingTarget.position.x,this.onboardingTarget.position.z)).radians();this.playerNavigationArrow.rotationQuaternion=null;this.playerNavigationArrow.rotation.y=-e-DegToRad(90);b.y+=.02;b.x-=.5*Math.sin(this.playerNavigationArrow.rotation.y);b.z-=.5*Math.cos(this.playerNavigationArrow.rotation.y);this.playerNavigationArrow.position=b}},createOnboardingKeyboard:function(b){this.pnlOnboardingKeyboard=
new BABYLON.GUI.Rectangle("pnlOnboardingKeyboard");this.pnlOnboardingKeyboard.transformCenterX=.5;this.pnlOnboardingKeyboard.transformCenterY=1;this.pnlOnboardingKeyboard.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.pnlOnboardingKeyboard.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;this.pnlOnboardingKeyboard.isPointerBlocker=!1;this.pnlOnboardingKeyboard.isHitTestVisible=!1;this.pnlOnboardingKeyboard.leftInPixels=300;this.pnlOnboardingKeyboard.topInPixels=
0;this.pnlOnboardingKeyboard.thickness=0;this.pnlOnboardingKeyboard.color="yellow";this.pnlOnboardingKeyboard.widthInPixels=250;this.pnlOnboardingKeyboard.heightInPixels=350;this.pnlOnboardingKeyboard.highlightLineWidth=0;this.pnlOnboardingKeyboard.clipChildren=!1;this.pnlOnboardingKeyboard.clipContent=!1;this.pnlOnboardingKeyboard.isVisible=!1;b.addControl(this.pnlOnboardingKeyboard);this.pnlOnboardingKeyboard.scaleTo=function(e){this.scaleX=this.scaleY=e};this.imgOnboardingControlsKeys=new BABYLON.GUI.Image("imgOnboardingControlsKeys");
this.imgOnboardingControlsKeys.transformCenterX=.5;this.imgOnboardingControlsKeys.transformCenterY=.5;this.imgOnboardingControlsKeys.isPointerBlocker=!1;this.imgOnboardingControlsKeys.isHitTestVisible=!1;this.imgOnboardingControlsKeys.leftInPixels=0;this.imgOnboardingControlsKeys.topInPixels=0;this.imgOnboardingControlsKeys.scaleX=this.imgOnboardingControlsKeys.scaleY=1;this.imgOnboardingControlsKeys.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgOnboardingControlsKeys.verticalAlignment=
BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(this.imgOnboardingControlsKeys,getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_controls_arrows.png");this.pnlOnboardingKeyboard.addControl(this.imgOnboardingControlsKeys);this.imgOnboardingControlsKeyboardHand=new BABYLON.GUI.Image("imgOnboardingControlsKeyboardHand");this.imgOnboardingControlsKeyboardHand.transformCenterX=0;this.imgOnboardingControlsKeyboardHand.transformCenterY=0;this.imgOnboardingControlsKeyboardHand.isPointerBlocker=
!1;this.imgOnboardingControlsKeyboardHand.isHitTestVisible=!1;this.imgOnboardingControlsKeyboardHand.leftInPixels=0;this.imgOnboardingControlsKeyboardHand.topInPixels=-50;this.imgOnboardingControlsKeyboardHand.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.imgOnboardingControlsKeyboardHand.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;SetImageFromSpritesheet(this.imgOnboardingControlsKeyboardHand,getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_hand.png");
this.pnlOnboardingKeyboard.addControl(this.imgOnboardingControlsKeyboardHand);this.imgOnboardingControlsKeyboardHand.alpha=0},createOnboardingJoystick:function(b){this.onboardingControlsPhase=1;this.onboardingControlsTime=ONBOARDING_PHASE_DURATION;this.pnlOnboardingJoystick=new BABYLON.GUI.Rectangle("pnlOnboardingJoystick");this.pnlOnboardingJoystick.transformCenterX=.5;this.pnlOnboardingJoystick.transformCenterY=1;this.pnlOnboardingJoystick.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
this.pnlOnboardingJoystick.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;this.pnlOnboardingJoystick.isPointerBlocker=!1;this.pnlOnboardingJoystick.isHitTestVisible=!1;this.pnlOnboardingJoystick.leftInPixels=-300;this.pnlOnboardingJoystick.topInPixels=0;this.pnlOnboardingJoystick.thickness=0;this.pnlOnboardingJoystick.color="green";this.pnlOnboardingJoystick.widthInPixels=250;this.pnlOnboardingJoystick.heightInPixels=350;this.pnlOnboardingJoystick.highlightLineWidth=0;this.pnlOnboardingJoystick.clipChildren=
!1;this.pnlOnboardingJoystick.clipContent=!1;this.pnlOnboardingJoystick.isVisible=!1;b.addControl(this.pnlOnboardingJoystick);this.pnlOnboardingJoystick.scaleTo=function(e){this.scaleX=this.scaleY=e};this.imgOnboardingControlsJoystickBg=new BABYLON.GUI.Image("imgOnboardingControlsJoystickBg");this.imgOnboardingControlsJoystickBg.transformCenterX=.5;this.imgOnboardingControlsJoystickBg.transformCenterY=.5;this.imgOnboardingControlsJoystickBg.isPointerBlocker=!1;this.imgOnboardingControlsJoystickBg.isHitTestVisible=
!1;this.imgOnboardingControlsJoystickBg.leftInPixels=0;this.imgOnboardingControlsJoystickBg.topInPixels=0;this.imgOnboardingControlsJoystickBg.scaleX=this.imgOnboardingControlsJoystickBg.scaleY=.6;this.imgOnboardingControlsJoystickBg.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgOnboardingControlsJoystickBg.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(this.imgOnboardingControlsJoystickBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),
"controller1.png");this.pnlOnboardingJoystick.addControl(this.imgOnboardingControlsJoystickBg);this.imgOnboardingControlsJoystick=new BABYLON.GUI.Image("imgOnboardingControlsJoystick");this.imgOnboardingControlsJoystick.transformCenterX=.5;this.imgOnboardingControlsJoystick.transformCenterY=.5;this.imgOnboardingControlsJoystick.isPointerBlocker=!1;this.imgOnboardingControlsJoystick.isHitTestVisible=!1;this.imgOnboardingControlsJoystick.leftInPixels=0;this.imgOnboardingControlsJoystick.topInPixels=
0;this.imgOnboardingControlsJoystick.scaleX=this.imgOnboardingControlsJoystick.scaleY=.6;this.imgOnboardingControlsJoystick.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgOnboardingControlsJoystick.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;SetImageFromSpritesheet(this.imgOnboardingControlsJoystick,getAssetImage("pak1"),getAssetImageFrames("pak1"),"controller2.png");this.pnlOnboardingJoystick.addControl(this.imgOnboardingControlsJoystick);this.imgOnboardingControlsJoystickHand=
new BABYLON.GUI.Image("imgOnboardingControlsJoystickHand");this.imgOnboardingControlsJoystickHand.transformCenterX=0;this.imgOnboardingControlsJoystickHand.transformCenterY=0;this.imgOnboardingControlsJoystickHand.isPointerBlocker=!1;this.imgOnboardingControlsJoystickHand.isHitTestVisible=!1;this.imgOnboardingControlsJoystickHand.leftInPixels=0;this.imgOnboardingControlsJoystickHand.topInPixels=0;this.imgOnboardingControlsJoystickHand.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
this.imgOnboardingControlsJoystickHand.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;SetImageFromSpritesheet(this.imgOnboardingControlsJoystickHand,getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_hand.png");this.pnlOnboardingJoystick.addControl(this.imgOnboardingControlsJoystickHand);this.imgOnboardingControlsJoystickHand.alpha=.85},createOnboardingArrow:function(b){this.imgOnboardingArrow=new BABYLON.GUI.Image("imgOnboardingArrow");this.imgOnboardingArrow.transformCenterX=
0;this.imgOnboardingArrow.transformCenterY=0;this.imgOnboardingArrow.isPointerBlocker=!1;this.imgOnboardingArrow.isHitTestVisible=!1;this.imgOnboardingArrow.leftInPixels=0;this.imgOnboardingArrow.topInPixels=0;this.imgOnboardingArrow.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;this.imgOnboardingArrow.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;SetImageFromSpritesheet(this.imgOnboardingArrow,getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_hand.png");
b.addControl(this.imgOnboardingArrow);this.imgOnboardingArrow.isVisible=!0;b={func:BABYLON.QuadraticEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEINOUT};var e=[[0,1],[.5,1.05],[1,1]];CommonAnimations.AnimateObjectProperty(this.imgOnboardingArrow,"scaleX",1,900,b,1,!0,null,e);CommonAnimations.AnimateObjectProperty(this.imgOnboardingArrow,"scaleY",1,900,b,1,!0,null,e)},createOverlay:function(b){this.pnlOverlay=new BABYLON.GUI.Rectangle("pnlOverlay");this.pnlOverlay.transformCenterX=.5;this.pnlOverlay.transformCenterY=
.5;this.pnlOverlay.isPointerBlocker=!1;this.pnlOverlay.isHitTestVisible=!1;this.pnlOverlay.leftInPixels=0;this.pnlOverlay.topInPixels=0;this.pnlOverlay.background="#33333388";this.pnlOverlay.widthInPixels=1024;this.pnlOverlay.heightInPixels=1024;this.pnlOverlay.thickness=0;this.pnlOverlay.isVisible=!1;this.pnlOverlay.highlightLineWidth=0;this.pnlOverlay.clipChildren=!1;this.pnlOverlay.clipContent=!1;b.addControl(this.pnlOverlay);this.pnlOverlay.resize=function(e,h){this.widthInPixels=e+2;this.heightInPixels=
h+2}},createCamera:function(){this.cameraPlayer=new BABYLON.FreeCamera("cameraPlayer",new BABYLON.Vector3(0,7,0),this.scene);this.cameraPlayer.rotation=new BABYLON.Vector3(DegToRad(27),DegToRad(-14),0);this.cameraPlayer.mode=BABYLON.Camera.ORTHOGRAPHIC_CAMERA;this.cameraPlayer.orthoTop=1;this.cameraPlayer.orthoBottom=-1;this.cameraPlayer.orthoLeft=-3;this.cameraPlayer.orthoRight=3;this.cameraPlayer.parent=this.rootNode;this.cameraPlayer.minZ=-100;this.cameraPlayer.maxZ=100;this.cameraPlayer.layerMask=
LAYER_SCREEN_GAME;this.cameraPlayer.rotationOffset=0;this.cameraPlayer.onViewMatrixChangedObservable.add(this.onViewMatrixChanged.bind(this));this.cameraPlayer.detachControl();gameConfig.debugVersion&&(this.cameraDebug=new BABYLON.UniversalCamera("cameraDebug",new BABYLON.Vector3(0,0,0),this.scene),this.cameraDebug.parent=this.rootNode,this.cameraDebug.minZ=.1,this.cameraDebug.rotation=new BABYLON.Vector3(DegToRad(140),DegToRad(180),0),this.cameraDebug.layerMask=LAYER_SCREEN_GAME,this.cameraDebug.inputs.addMouseWheel(),
this.cameraDebug.inputs.attached.mousewheel.wheelPrecisionY=.1)},initLevel:function(){this.highlightLayer=this.selectedObject=this.skybox=this.lightHemi=null;this.createLight()},createParticleSystem:function(){var b=new BABYLON.ParticleSystem("particles",100);b.renderingGroupId=1;b.particleTexture=AssetLoader.instance.loadedTextures["flare.png"];b.blendMode=BABYLON.BaseParticleSystem.BLENDMODE_ADD;b.emitter=BABYLON.Vector3.Zero();b.color1=new BABYLON.Color4(226/255,42/255,20/255,1);b.color2=new BABYLON.Color4(1,
132/255,.2,1);b.colorDead=new BABYLON.Color4(76/255,76/255,76/255,0);b.minSize=.1;b.maxSize=.3;b.minLifeTime=.5;b.maxLifeTime=1;b.emitRate=70;b.particleEmitterType=new BABYLON.CylinderDirectedParticleEmitter(.05,.05,.05,new BABYLON.Vector3(1,0,0),new BABYLON.Vector3(1,0,0));b.minEmitPower=1;b.maxEmitPower=2;b.updateSpeed=.03;b.savedAnimate=b.animate.bind(b);return b},createLight:function(){SHOP_SHADOWS_ENABLED&&(this.lightDirect1=new BABYLON.DirectionalLight("lightDirect1",v3(-1.4,-1.6,1.1),this.scene),
this.lightDirect1.position=v3(20,40,20),this.lightDirect1.intensity=.5,this.lightDirect1.parent=this.rootNode,this.lightDirect1.includeOnlyWithLayerMask=LAYER_SCREEN_GAME,SHOP_SHADOWS_ENABLED&&(runningOnMobile&&(SHOP_SHADOW_RES/=2),this.shadowGenerator=new BABYLON.ShadowGenerator(SHOP_SHADOW_RES,this.lightDirect1),this.shadowGenerator.usePoissonSampling=!0))},drawStrokedText:function(b,e,h,f,k){b.fillStyle="rgba(96, 108, 143, 0.01)";b.fillRect(0,0,128,64);b.font=e;b.strokeStyle="black";b.lineWidth=
10;b.strokeText(k,h,f);b.fillStyle="white";b.fillText(k,h,f)},incScore:function(b,e,h){TextParticles.instance.CreateTextParticle1(e.x-this.activeViewportCenter.x,e.y-this.activeViewportCenter.y,"+"+b,25,h)},raycast:function(b,e){b=new BABYLON.Ray(b,e,30);(new BABYLON.RayHelper(b)).show(activeScene.scene);return activeScene.scene.pickWithRay(b).pickedMesh},getObjectProjection2D:function(b){b=BABYLON.Vector3.Project(b,BABYLON.Matrix.Identity(),this.cameraPlayer.getTransformationMatrix(),this.cameraPlayer.viewport.toGlobal(engineRenderWidth,
engineRenderHeight));b.x*=this.guiTexture.renderScale;b.y*=this.guiTexture.renderScale;return b},TransformCoordinatesWithClipping:function(b,e){const h=e.m;e=b.x*h[0]+b.y*h[4]+b.z*h[8]+h[12];let f=b.x*h[1]+b.y*h[5]+b.z*h[9]+h[13],k=b.x*h[2]+b.y*h[6]+b.z*h[10]+h[14];b=b.x*h[3]+b.y*h[7]+b.z*h[11]+h[15];e<-b&&(e=-b);e>b&&(e=b);f<-b&&(f=-b);f>b&&(f=b);k<-b&&(k=-b);k>b&&(k=b);0>b&&(b=0);return new BABYLON.Vector3(e/b,f/b,k/b)},resetGame:function(){this.pnlOverlay.alpha=0;this.pnlOverlay.isVisible=!1;this.gameOverDelay=
GAME_OVER_DELAY;this.orthoZoom=1;this.createShop();this.onResize()},createShop:function(){this.shopExterior=spawnModel(null,"exterior");this.shopExterior.rootNodes[0].position=v3(-39,0,28);this.randomCarA=traverseFindChildNodeByName(this.shopExterior.rootNodes[0],"car_a");this.randomCarB=traverseFindChildNodeByName(this.shopExterior.rootNodes[0],"car_b");this.randomCarA.timeToSpawn=1E3;this.randomCarA.position.x=15;this.randomCarA.speed=.5;this.randomCarA.isVisible=!1;this.randomCarB.timeToSpawn=
3E3;this.randomCarB.position.x=20;this.randomCarB.speed=-.5;this.randomCarB.isVisible=!1;this.shop=new Shop;this.virtualJoystick=new VirtualJoystick(this.guiTexture,{pak:"pak1",frame:"controller1.png"},{pak:"pak1",frame:"controller2.png"});Shop.instance.resetShop();Shop.instance.renewCollisions();Shop.instance.buildNewShop();Shop.instance.spawnPlayer();null==SavedGame?Create_CashRegister1():Shop.instance.loadData(SavedGame);this.updateCameraFollowingPlayer(1,1);this.createPlayerNavigationArrow();
this.prepareOnboarding();inlHelper.ads.triggerAdPoint({adType:AD_TYPES.GAME_START});gamesnacksSoundToggle(GameSnacks.audio.isEnabled())},onKeyboardObservable:function(b){var e=Shop.instance.getPlayerPlayer();if(null!=e)switch(b.type){case BABYLON.KeyboardEventTypes.KEYDOWN:switch(b.event.key){case "ArrowRight":case "D":case "d":e.pressedLeft=!1;e.pressedRight=!0;break;case "ArrowLeft":case "A":case "a":e.pressedLeft=!0;e.pressedRight=!1;break;case "ArrowUp":case "W":case "w":e.pressedUp=!0;e.pressedDown=
!1;break;case "ArrowDown":case "S":case "s":e.pressedDown=!0,e.pressedUp=!1}break;case BABYLON.KeyboardEventTypes.KEYUP:switch(b.event.key){case "ArrowRight":case "D":case "d":e.pressedRight=!1;break;case "ArrowLeft":case "A":case "a":e.pressedLeft=!1;break;case "ArrowUp":case "W":case "w":e.pressedUp=!1;break;case "ArrowDown":case "S":case "s":e.pressedDown=!1}}},gameStep_start:function(){activeScene.gameRunning=!0;activeScene.gamePaused=!1;screenGame.enableControls()},vecToLocal:function(b,e){e=
e.getWorldMatrix();return BABYLON.Vector3.TransformCoordinates(b,e)},updateData:function(){this.btnPlayerCustomisation.imgNotification.isVisible=!1;this.btnTimedOffers.imgNotification.isVisible=!1;for(var b=0;b<SkinItems.length;b++){var e=SkinItems[b];!(0<=SkinInventory.indexOf(e.skin))&&e.price<=PlayerCash&&(this.btnPlayerCustomisation.imgNotification.isVisible=!0)}},enableControls:function(){enableButton(this.btnPlayerCustomisation);enableButton(this.btnTimedOffers)},disableControls:function(){disableButton(this.btnPlayerCustomisation);
disableButton(this.btnTimedOffers)},showControls:function(){showControl(this.btnMenu)},hideControls:function(){hideControl(this.btnMenu)},beforeRender:function(){if(activeScene.gameRunning&&!activeScene.gamePaused){var b=activeScene.getDeltaTime();this.shop.update(b);this.updatePlayerNavigationArrow();this.updateRandomCarMovement(this.randomCarA,b);this.updateRandomCarMovement(this.randomCarB,b);this.updateCameraFollowingPlayer(b);this.updateOnboardingControlsAnims(b);this.pnlOffers.updateOffers(b)}},
updateOnboardingControlsAnims:function(b){0<OnboardingStep||(1==this.onboardingControlsPhase?(this.onboardingControlsTime-=b,0>=this.onboardingControlsTime&&(this.onboardingControlsTime=0),this.imgOnboardingControlsJoystickHand.alpha=1-this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,this.imgOnboardingControlsJoystickHand.scaleX=this.imgOnboardingControlsJoystickHand.scaleY=1+.4*this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,0==this.onboardingControlsTime&&(this.onboardingControlsPhase=
2,this.onboardingControlsTime=ONBOARDING_PHASE_DURATION)):2==this.onboardingControlsPhase?(this.onboardingControlsTime-=b,0>=this.onboardingControlsTime&&(this.onboardingControlsTime=0),this.imgOnboardingControlsJoystick.topInPixels=-50*(1-this.onboardingControlsTime/ONBOARDING_PHASE_DURATION),this.imgOnboardingControlsKeyboardHand.leftInPixels=this.pnlOnboardingKeyboard.widthInPixels/2,this.imgOnboardingControlsKeyboardHand.topInPixels=-50+this.pnlOnboardingKeyboard.heightInPixels/2,this.imgOnboardingControlsKeyboardHand.alpha=
1-this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,this.imgOnboardingControlsKeyboardHand.scaleX=this.imgOnboardingControlsKeyboardHand.scaleY=1+.4*this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,0==this.onboardingControlsTime&&(this.onboardingControlsPhase=3,this.onboardingControlsTime=ONBOARDING_PHASE_DURATION)):3==this.onboardingControlsPhase?(this.onboardingControlsTime-=b,0>=this.onboardingControlsTime&&(this.onboardingControlsTime=0),this.imgOnboardingControlsJoystick.topInPixels=
this.onboardingControlsTime/ONBOARDING_PHASE_DURATION*-50,this.imgOnboardingControlsKeyboardHand.leftInPixels=this.pnlOnboardingKeyboard.widthInPixels/2,this.imgOnboardingControlsKeyboardHand.topInPixels=-50+this.pnlOnboardingKeyboard.heightInPixels/2,this.imgOnboardingControlsKeyboardHand.alpha=this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,this.imgOnboardingControlsKeyboardHand.scaleX=this.imgOnboardingControlsKeyboardHand.scaleY=1.4-.4*this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,
0==this.onboardingControlsTime&&(this.onboardingControlsPhase=4,this.onboardingControlsTime=ONBOARDING_PHASE_DURATION)):4==this.onboardingControlsPhase?(this.onboardingControlsTime-=b,0>=this.onboardingControlsTime&&(this.onboardingControlsTime=0),this.imgOnboardingControlsJoystick.topInPixels=50*(1-this.onboardingControlsTime/ONBOARDING_PHASE_DURATION),this.imgOnboardingControlsKeyboardHand.leftInPixels=this.pnlOnboardingKeyboard.widthInPixels/2,this.imgOnboardingControlsKeyboardHand.topInPixels=
50+this.pnlOnboardingKeyboard.heightInPixels/2,this.imgOnboardingControlsKeyboardHand.alpha=1-this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,this.imgOnboardingControlsKeyboardHand.scaleX=this.imgOnboardingControlsKeyboardHand.scaleY=1+.4*this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,0==this.onboardingControlsTime&&(this.onboardingControlsPhase=5,this.onboardingControlsTime=ONBOARDING_PHASE_DURATION)):5==this.onboardingControlsPhase?(this.onboardingControlsTime-=b,0>=this.onboardingControlsTime&&
(this.onboardingControlsTime=0),this.imgOnboardingControlsJoystick.topInPixels=this.onboardingControlsTime/ONBOARDING_PHASE_DURATION*50,this.imgOnboardingControlsKeyboardHand.leftInPixels=this.pnlOnboardingKeyboard.widthInPixels/2,this.imgOnboardingControlsKeyboardHand.topInPixels=50+this.pnlOnboardingKeyboard.heightInPixels/2,this.imgOnboardingControlsKeyboardHand.alpha=this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,this.imgOnboardingControlsKeyboardHand.scaleX=this.imgOnboardingControlsKeyboardHand.scaleY=
1.4-.4*this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,0==this.onboardingControlsTime&&(this.onboardingControlsPhase=6,this.onboardingControlsTime=ONBOARDING_PHASE_DURATION)):6==this.onboardingControlsPhase&&(this.onboardingControlsTime-=b,0>=this.onboardingControlsTime&&(this.onboardingControlsTime=0),this.imgOnboardingControlsJoystickHand.alpha=1*this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,this.imgOnboardingControlsJoystickHand.scaleX=this.imgOnboardingControlsJoystickHand.scaleY=
1.4-.4*this.onboardingControlsTime/ONBOARDING_PHASE_DURATION,0==this.onboardingControlsTime&&(this.onboardingControlsPhase=1,this.onboardingControlsTime=ONBOARDING_PHASE_DURATION,"onboarding_controls_arrows.png"==this.imgOnboardingControlsKeys.frameName?"ru"==Languages.instance.language?SetImageFromSpritesheet(this.imgOnboardingControlsKeys,getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_controls_wasd_ru.png"):SetImageFromSpritesheet(this.imgOnboardingControlsKeys,getAssetImage("pak1"),
getAssetImageFrames("pak1"),"onboarding_controls_wasd.png"):SetImageFromSpritesheet(this.imgOnboardingControlsKeys,getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_controls_arrows.png"))),this.imgOnboardingControlsJoystickHand.leftInPixels=this.imgOnboardingControlsJoystick.leftInPixels+this.pnlOnboardingJoystick.widthInPixels/2,this.imgOnboardingControlsJoystickHand.topInPixels=this.imgOnboardingControlsJoystick.topInPixels+this.pnlOnboardingJoystick.heightInPixels/2)},updateObjectsVisibility:function(){for(var b=
Shop.instance.getPlayerPlayer().position.x,e=0;e<Shop.instance.registers.length;e++){var h=Math.abs(Shop.instance.registers[e].position.x-b);Shop.instance.registers[e].setVisible(20>h)}for(e=0;e<Shop.instance.entries.length;e++)h=Math.abs(Shop.instance.entries[e].position.x-b),Shop.instance.entries[e].isVisible=20>h;for(e=0;e<Shop.instance.producers.length;e++)h=Math.abs(Shop.instance.producers[e].position.x-b),Shop.instance.producers[e].setVisible(20>h);for(e=0;e<Shop.instance.transformers.length;e++)h=
Math.abs(Shop.instance.transformers[e].position.x-b),Shop.instance.transformers[e].setVisible(20>h);for(e=0;e<Shop.instance.players.length;e++)h=Math.abs(Shop.instance.players[e].position.x-b),Shop.instance.players[e].setVisible(20>h);for(e=0;e<Shop.instance.shelves.length;e++)h=Math.abs(Shop.instance.shelves[e].position.x-b),Shop.instance.shelves[e].setVisible(20>h);for(e=0;e<Shop.instance.progress.length;e++)h=Math.abs(Shop.instance.progress[e].position.x-b),Shop.instance.progress[e].setVisible(20>
h)},updateRandomCarMovement:function(b,e){0<b.timeToSpawn?(b.timeToSpawn-=e,0>=b.timeToSpawn&&(b.position.z=20,b.speed=(5+getRandomUInt(5))/20*(0>b.speed?-1:1),b.position.z=0>b.speed?110:-30,b.isVisible=!0)):(b.position.z+=b.speed,-30>b.position.z&&(b.isVisible=!1,b.timeToSpawn=1E3+500*getRandomUInt(3)),110<b.position.z&&(b.isVisible=!1,b.timeToSpawn=1E3+500*getRandomUInt(3)))},afterRender:function(){},onViewMatrixChanged:function(){this.hasOwnProperty("shop")&&this.updateOnboardingArrow()},prepareOnboarding:function(){this.onboardingTarget=
null;this.pnlOnboardingJoystick.isVisible=0==OnboardingStep;this.pnlOnboardingKeyboard.isVisible=0==OnboardingStep;1==OnboardingStep&&(this.onboardingTarget=Shop.instance.getElementByName("Create_CashRegister1"));2==OnboardingStep&&(this.onboardingTarget=Shop.instance.getElementByName("Create_TomatoPlant1"));3==OnboardingStep&&(this.onboardingTarget=Shop.instance.getElementByName("TomatoPlant1"));4==OnboardingStep&&(this.onboardingTarget=Shop.instance.getElementByName("bin_left"));5==OnboardingStep&&
(this.onboardingTarget=Shop.instance.getElementByName("Create_TomatoShelf1"));6==OnboardingStep&&(this.onboardingTarget=Shop.instance.getElementByName("TomatoPlant1"));7==OnboardingStep&&(this.onboardingTarget=Shop.instance.getElementByName("TomatoShelf1"));8==OnboardingStep&&(this.onboardingTarget=Shop.instance.getElementByName("CashRegister1"));9==OnboardingStep&&(Shop.instance.timeToOffer=1E3,Shop.instance.timeToHelp=2E3,Shop.instance.timeToShowSoldProducts=TIME_TO_SHOW_SOLD_PRODUCTS);this.updateOnboardingArrow();
setTimeout(function(){this.updateOnboardingArrow()}.bind(this),10)},nextOnboardingStep:function(){OnboardingStep++;this.prepareOnboarding()},updateOnboardingArrow:function(){if(null==this.onboardingTarget)this.imgOnboardingArrow.isVisible=!1;else if(null!=Shop.instance.getPlayerPlayer()){this.imgOnboardingArrow.isVisible=!0;var b=this.onboardingTarget.position.clone();8==OnboardingStep&&(b.x-=3,b.z+=2);b=BABYLON.Vector3.Project(b,BABYLON.Matrix.Identity(),activeScene.scene.getTransformMatrix(),this.activeViewport);
this.imgOnboardingArrow.leftInPixels=b.x+20*Resolution.SCALE;this.imgOnboardingArrow.topInPixels=b.y+20*Resolution.SCALE;this.imgOnboardingArrow.rotation=-DegToRad(80)}},updateCameraFollowingPlayer:function(b,e){void 0===e&&(e=.007);var h=Shop.instance.getPlayerPlayer();if(null!=h){h=h.position.clone();var f=this.getOrthoSize();engineRenderWidth>engineRenderHeight?(h.x+=f/40*1.3,h.z-=f/10*1.3):(h.x+=f/40,h.z-=f/10);f=this.cameraPlayer.position;f.x+=(h.x-f.x)*e*b;f.z+=(h.z-f.z)*e*b}},onPointerObservable:function(b){if(Buttons.enabled&&
activeScene.inputEnabled&&activeScene.gameRunning&&!activeScene.gamePaused){this.virtualJoystick.onPointerObservable(b);var e=new BABYLON.Vector3(activeScene.scene.pointerX,activeScene.scene.pointerY,.99);BABYLON.Vector3.Unproject(e,engine.getRenderWidth(),engine.getRenderHeight(),BABYLON.Matrix.Identity(),activeScene.scene.getViewMatrix(),activeScene.scene.getProjectionMatrix());switch(b.type){case BABYLON.PointerEventTypes.POINTERDOWN:this.oldPointerX=b.event.x;this.oldPointerY=b.event.y;if(null==
b.pickInfo.pickedMesh)break;e=null;if("price3d"==b.pickInfo.pickedMesh.name){this.purchaseSpot(b.pickInfo.pickedMesh.parkingSpot);break}if("icon3d"==b.pickInfo.pickedMesh.name){this.purchaseSpot(b.pickInfo.pickedMesh.parkingSpot);break}if("stand"==b.pickInfo.pickedMesh.name){this.purchaseSpot(b.pickInfo.pickedMesh.parent.parent);break}b.pickInfo.pickedMesh.hasOwnProperty("busData")&&(e=b.pickInfo.pickedMesh);b.pickInfo.pickedMesh.hasOwnProperty("bus3d")&&(e=b.pickInfo.pickedMesh.bus3d);if(null==e)break;
if(this.pnlSelectCar.isVisible){this.helicopterPickupBus(e);this.restoreAllMaterials();CommonAnimations.AnimateObjectProperty(this.pnlSelectCar,"alpha",0,SCENE_TRANSITION_DURATION,{func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT},1,!1,function(){this.pnlSelectCar.isVisible=!1}.bind(this));break}this.tryToMoveBus(e);break;case BABYLON.PointerEventTypes.POINTERMOVE:this.hasOwnProperty("oldPointerX")||(this.oldPointerX=b.event.x),this.hasOwnProperty("oldPointerY")||(this.oldPointerY=
b.event.y),b.deltaX=b.event.x-this.oldPointerX,b.deltaY=b.event.y-this.oldPointerY,this.oldPointerX=b.event.x,this.oldPointerY=b.event.y}}},onGamePause:function(){if(activeScene.gameRunning&&!activeScene.gamePaused&&!Shop.instance.isPaused&&(Shop.instance.onPause(),!this.doNotShowSettingsOnPause))screenTopPanel.onSettingsPressed()},onGameResume:function(){this.doNotShowSettingsOnPause&&(this.doNotShowSettingsOnPause=!1,Shop.instance.onResume());if(Shop.instance)Shop.instance.onResume()},pauseGameSounds:function(){activeScene.gameRunning&&
soundManager.pauseSound("timer_5_sec")},resumeGameSounds:function(){activeScene.gameRunning&&soundManager.resumeSound("timer_5_sec")},stopGameSounds:function(){soundManager.stopSound("timer_5_sec")},updateTexts:function(){"onboarding_controls_arrows.png"!=this.imgOnboardingControlsKeys.frameName&&("ru"==Languages.instance.language?SetImageFromSpritesheet(this.imgOnboardingControlsKeys,getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_controls_wasd_ru.png"):SetImageFromSpritesheet(this.imgOnboardingControlsKeys,
getAssetImage("pak1"),getAssetImageFrames("pak1"),"onboarding_controls_wasd.png"));this.hasOwnProperty("shop")&&this.shop.updateTexts()},onResize:function(){if(this.hasOwnProperty("virtualJoystick"))this.virtualJoystick.onResize();var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.activeViewport={x:0,y:0,width:b,height:e};this.activeViewportCenter={x:.5*b,y:.5*e};autoResizeOrthographicCamera(this.cameraPlayer,this.getOrthoSize());this.pnlOverlay.resize(b,e);e>b?(this.pnlLeft.scaleTo(.2*
e/this.pnlLeft.heightInPixels*.9),this.pnlOffers.scaleTo(.2*e/this.pnlLeft.heightInPixels*.5),this.pnlOnboardingJoystick.scaleTo(.4*e/this.pnlOnboardingJoystick.heightInPixels*.9),this.pnlOnboardingJoystick.widthInPixels*this.pnlOnboardingJoystick.scaleX>.4*b&&this.pnlOnboardingJoystick.scaleTo(.4*b/this.pnlOnboardingJoystick.widthInPixels),this.pnlOnboardingKeyboard.scaleTo(this.pnlOnboardingJoystick.scaleX),this.pnlOnboardingJoystick.topInPixels=.05*-e):(this.pnlLeft.scaleTo(.2*e/this.pnlLeft.heightInPixels*
.9),this.pnlOffers.scaleTo(.2*e/this.pnlLeft.heightInPixels*.5),this.pnlOnboardingJoystick.scaleTo(.48*e/this.pnlOnboardingJoystick.heightInPixels*.9),this.pnlOnboardingJoystick.widthInPixels*this.pnlOnboardingJoystick.scaleX>.4*b&&this.pnlOnboardingJoystick.scaleTo(.4*b/this.pnlOnboardingJoystick.widthInPixels),this.pnlOnboardingKeyboard.scaleTo(this.pnlOnboardingJoystick.scaleX),this.pnlOnboardingJoystick.topInPixels=.1*-e);this.pnlOnboardingJoystick.leftInPixels=.25*-b;this.pnlOnboardingKeyboard.topInPixels=
this.pnlOnboardingJoystick.topInPixels;this.pnlOnboardingKeyboard.leftInPixels=-this.pnlOnboardingJoystick.leftInPixels;this.pnlLeft.leftInPixels=10*this.pnlLeft.scaleX;this.pnlOffers.topInPixels=85*this.pnlLeft.scaleX;if(this.hasOwnProperty("shop"))this.shop.onResize();screenTopPanel.onResize();this.resizeShadows()},getOrthoSize:function(){var b=120*Resolution.SCALE;runningOnMobile&&(b=160*Resolution.SCALE);return b},resizeShadows:function(){},restartAll:function(){GameData.Reset();ResetTimedOffers();
Shop.instance.resetShop();Shop.instance.renewCollisions();Shop.instance.spawnPlayer();Create_CashRegister1();this.prepareOnboarding();SaveShop();inlHelper.ads.triggerAdPoint({adType:AD_TYPES.GAME_START})}};function getShadowOffs(b){return Math.floor(TEXT_SHADOWS_ENABLED?b*Resolution.SCALE:0)}function getOutlineOffs(b){return Math.floor(b*Resolution.SCALE)};var ScreenSkins=function(b){ScreenSkins.instance=this;this.create(b)};ScreenSkins.instance=null;
ScreenSkins.prototype={create:function(b){this.scene=b;this.createGui();this.disableControls();this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createBackground(this.guiRoot);this.createSkinsPanel(this.pnlRoot);this.createBody(this.pnlSkins,0);this.createSkinItemsPanel(this.pnlSkins,40);this.createTitle(this.pnlSkins,-415)},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenSkins.pnlRoot");
this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;this.pnlRoot.zIndex=60;b.addControl(this.pnlRoot);return this.pnlRoot},createSkinsPanel:function(b){this.pnlSkins=new BABYLON.GUI.Rectangle("pnlSkins");this.pnlSkins.transformCenterX=.5;this.pnlSkins.transformCenterY=
.5;this.pnlSkins.isPointerBlocker=!1;this.pnlSkins.isHitTestVisible=!0;this.pnlSkins.clipContent=!1;this.pnlSkins.clipChildren=!1;this.pnlSkins.widthInPixels=530;this.pnlSkins.heightInPixels=850;this.pnlSkins.thickness=0;this.pnlSkins.color="yellow";b.addControl(this.pnlSkins);this.pnlSkins.scaleTo=function(e){this.scaleX=this.scaleY=e};return this.pnlSkins},createBackground:function(b){this.imgBackground=new BABYLON.GUI.Rectangle("imgBackground");this.imgBackground.transformCenterX=.5;this.imgBackground.transformCenterY=
.5;this.imgBackground.isPointerBlocker=!0;this.imgBackground.isHitTestVisible=!1;this.imgBackground.clipContent=!1;this.imgBackground.clipChildren=!1;this.imgBackground.thickness=0;this.imgBackground.color="orange";this.imgBackground.background="rgba(24,94,211, 0.8)";b.addControl(this.imgBackground);this.imgBackground.resize=function(e,h){h+=300*Resolution.SCALE;this.widthInPixels=e+5;this.heightInPixels=h}},createTitle:function(b,e){this.imgTitleBg=new BABYLON.GUI.Image("imgTitleBg");this.imgTitleBg.transformCenterX=
.5;this.imgTitleBg.transformCenterY=.5;this.imgTitleBg.isPointerBlocker=!1;this.imgTitleBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgTitleBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main_title.png");this.imgTitleBg.scaleX=this.imgTitleBg.scaleY=2;this.imgTitleBg.leftInPixels=0;this.imgTitleBg.topInPixels=e;b.addControl(this.imgTitleBg);this.txtTitle=new BABYLON.GUI.TextBlock("txtTitle");this.txtTitle.textWrapping=!0;this.txtTitle.leftInPixels=0;this.txtTitle.topInPixels=
e-5;this.txtTitle.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.color="#FFFFFF";this.txtTitle.text="Skins";this.txtTitle.fontSize="50px";this.txtTitle.fontFamily="gamefont";this.txtTitle.leftInPixels=0;this.txtTitle.isPointerBlocker=
!1;this.txtTitle.isHitTestVisible=!1;this.txtTitle.shadowOffsetX=0;this.txtTitle.shadowOffsetY=6;this.txtTitle.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";this.txtTitle.outlineColor="rgb(0,0,0)";this.txtTitle.outlineWidth=5;this.txtTitle.shadowBlur=0;b.addControl(this.txtTitle);this.btnClose=BABYLON.GUI.Button.CreateImageOnlyButton("btnClose");this.btnClose.children[0].transformCenterY=.5;this.btnClose.children[0].transformCenterX=.5;this.btnClose.children[0].horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnClose.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnClose.transformCenterX=.5;this.btnClose.transformCenterY=.5;this.btnClose.topInPixels=e-25;this.btnClose.leftInPixels=230;b.addControl(this.btnClose);SetImageFromSpritesheet(this.btnClose.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"button_close.png");ResetGuiButtonAppearance(this.btnClose,this.btnClose.children[0].sourceWidth,this.btnClose.children[0].sourceHeight);
this.btnClose.onPointerClickObservable.add(this.onClosePressed)},createBody:function(b,e){this.imgBodyBg=new BABYLON.GUI.Image("imgBodyBg");this.imgBodyBg.transformCenterX=.5;this.imgBodyBg.transformCenterY=.5;this.imgBodyBg.isPointerBlocker=!1;this.imgBodyBg.isHitTestVisible=!1;this.imgBodyBg.scaleX=this.imgBodyBg.scaleY=2;SetImageFromSpritesheet(this.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_skins.png");this.imgBodyBg.leftInPixels=0;this.imgBodyBg.topInPixels=e;b.addControl(this.imgBodyBg)},
createClothingPanel:function(b,e,h,f){var k=new BABYLON.GUI.Rectangle("imgBackground");k.transformCenterX=.5;k.transformCenterY=.5;k.isPointerBlocker=!1;k.isHitTestVisible=!0;k.clipContent=!1;k.clipChildren=!1;k.leftInPixels=h;k.topInPixels=f;k.thickness=0;k.color="orange";k.widthInPixels="165";k.heightInPixels="200";b.addControl(k);k.imgClothingPanelBg=new BABYLON.GUI.Image("imgClothingPanelBg");k.imgClothingPanelBg.transformCenterX=.5;k.imgClothingPanelBg.transformCenterY=.5;k.imgClothingPanelBg.isPointerBlocker=
!1;k.imgClothingPanelBg.isHitTestVisible=!1;SetImageFromSpritesheet(k.imgClothingPanelBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_item_blue.png");k.addControl(k.imgClothingPanelBg);k.imgClothingPanelItem=new BABYLON.GUI.Image("imgClothingPanelItem");k.imgClothingPanelItem.transformCenterX=.5;k.imgClothingPanelItem.transformCenterY=.5;k.imgClothingPanelItem.isPointerBlocker=!1;k.imgClothingPanelItem.isHitTestVisible=!1;k.imgClothingPanelItem.topInPixels=-20;k.imgClothingPanelItem.scaleX=
k.imgClothingPanelItem.scaleY=1.32;SetImageFromSpritesheet(k.imgClothingPanelItem,getAssetImage("pak1"),getAssetImageFrames("pak1"),e.icon);k.addControl(k.imgClothingPanelItem);k.imgClothingPanelCheck=new BABYLON.GUI.Image("imgClothingPanelCheck");k.imgClothingPanelCheck.transformCenterX=.5;k.imgClothingPanelCheck.transformCenterY=.5;k.imgClothingPanelCheck.isPointerBlocker=!1;k.imgClothingPanelCheck.isHitTestVisible=!1;k.imgClothingPanelCheck.topInPixels=50;SetImageFromSpritesheet(k.imgClothingPanelCheck,
getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_checkmark.png");k.addControl(k.imgClothingPanelCheck);k.imgCash=new BABYLON.GUI.Image;k.imgCash.transformCenterX=.5;k.imgCash.transformCenterY=.5;k.imgCash.topInPixels=72;k.imgCash.scaleX=k.imgCash.scaleY=.5;SetImageFromSpritesheet(k.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_table_coins.png");k.addControl(k.imgCash);k.txtPrice=new BABYLON.GUI.TextBlock;k.txtPrice.text="100";k.txtPrice.fontSize="25px";k.txtPrice.fontFamily=
"gamefont";k.txtPrice.color="#FFFFFF";k.txtPrice.outlineColor="rgb(0,0,0)";k.txtPrice.outlineWidth=5;k.txtPrice.topInPixels=k.imgCash.topInPixels;k.addControl(k.txtPrice);k.setPrice=function(m){this.txtPrice.text=""+m;m=this.imgCash.widthInPixels*this.imgCash.scaleX;var n=getTextWidth(screenGame.guiTexture.getContext(),this.txtPrice.text,this.txtPrice.fontFamily,this.txtPrice._fontSize._value);this.imgCash.leftInPixels=-(m+n+-5)/2+m/2-5;this.txtPrice.leftInPixels=this.imgCash.leftInPixels+n/2+-5+
m/2};k.updateData=function(){this.setPrice(this.data.price);var m=0<=SkinInventory.indexOf(this.data.skin),n=PlayerSkin==this.data.skin;m?SetImageFromSpritesheet(this.imgClothingPanelBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),n?"table_item_orange.png":"table_item_blue_purchased_2.png"):SetImageFromSpritesheet(this.imgClothingPanelBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_item_blue.png");this.imgClothingPanelCheck.isVisible=n;this.txtPrice.alpha=m?0:1;this.imgCash.alpha=
m?0:1;this.imgClothingPanelItem.topInPixels=m?0:-20;this.imgClothingPanelItem.scaleX=this.imgClothingPanelItem.scaleY=n?1.15:m?1:.8};k.data=e;k.updateData();k.onPointerClickObservable.add(this.onPlayerSkinSelected);return k},onPlayerSkinSelected:function(b,e){b=Shop.instance.getPlayerPlayer();e=e.currentTarget;if(0>SkinInventory.indexOf(e.data.skin)){if(!screenTopPanel.purchaseForCash(e.data.price))return;SkinInventory.push(e.data.skin);screenGame.updateData()}PlayerSkin=e.data.skin;b.setPlayerSkin(PlayerSkin);
screenSkins.pnlSkinItemsPanel.updateData()},createSkinItemsPanel:function(b,e){this.pnlSkinItemsPanel=new BABYLON.GUI.Rectangle("pnlSkinItemsPanel");this.pnlSkinItemsPanel.transformCenterX=.5;this.pnlSkinItemsPanel.transformCenterY=.5;this.pnlSkinItemsPanel.leftInPixels=0;this.pnlSkinItemsPanel.topInPixels=e;this.pnlSkinItemsPanel.heightInPixels=840;this.pnlSkinItemsPanel.widthInPixels=500;this.pnlSkinItemsPanel.thickness=0;this.pnlSkinItemsPanel.color="yellow";this.pnlSkinItemsPanel.isPointerBlocker=
!0;this.pnlSkinItemsPanel.isHitTestVisible=!0;b.addControl(this.pnlSkinItemsPanel);e=-307.5;this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[0],-165,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[1],0,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[2],165,e);e+=205;this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[3],-165,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[4],0,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[5],165,
e);e+=205;this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[6],-165,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[7],0,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[8],165,e);e+=205;this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[9],-165,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[10],0,e);this.createClothingPanel(this.pnlSkinItemsPanel,SkinItems[11],165,e);this.pnlSkinItemsPanel.updateData=function(){for(var h=0;h<this._children.length;h++)this._children[h].updateData()}},
updateTexts:function(){this.txtTitle.text=Str("CUSTOMIZATION");updateTextToWidth(this.txtTitle,screenGame.guiTexture.getContext(),350,50,1)},onClosePressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenSkins.hideScene(function(){activeScene.gamePaused=screenSkins.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0}))},enableControls:function(){enableButton(this.btnClose)},
disableControls:function(){disableButton(this.btnClose)},hideScene:function(b){void 0===b&&(b=null);this.disableControls();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",-50*Resolution.SCALE,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,SCENE_TRANSITION_DURATION,e,1,!1,function(){screenSkins.guiRoot.isVisible=!1;null!=b&&b()})},showScene:function(b){void 0===
b&&(b=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.guiRoot.topInPixels=50*Resolution.SCALE;this.enableControls();this.onResize();this.pnlSkinItemsPanel.updateData();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",0,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",1,SCENE_TRANSITION_DURATION,e,1,!1,function(){null!=b&&b()})},beforeRender:function(){},
onResize:function(){if(this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.imgBackground.resize(b,e);this.pnlRoot.heightInPixels=this.imgBackground.heightInPixels;this.pnlSkins.scaleTo(.85*e/880);this.pnlSkins.topInPixels=25;this.pnlSkins.widthInPixels*this.pnlSkins.scaleX>.98*b&&this.pnlSkins.scaleTo(.98*b/this.pnlSkins.widthInPixels);this.resizeShadows()}},resizeShadows:function(){var b=this.txtTitle._fontSize._value/50;this.txtTitle.shadowOffsetX=getShadowOffs(0);
this.txtTitle.shadowOffsetY=getShadowOffs(5*b);this.txtTitle.outlineWidth=getOutlineOffs(7*b)}};var ScreenTimedOffers=function(b){ScreenTimedOffers.instance=this;this.create(b)};ScreenTimedOffers.instance=null;
ScreenTimedOffers.prototype={create:function(b){this.scene=b;this.createGui();this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createBackground(this.guiRoot);this.createTimedOffersPanel(this.pnlRoot);this.createBody(this.pnlTimedOffers,0);this.createTitle(this.pnlTimedOffers,-270);this.createOffers(this.pnlTimedOffers,205)},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenTimedOffers.pnlRoot");
this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;this.pnlRoot.zIndex=60;b.addControl(this.pnlRoot);return this.pnlRoot},createTimedOffersPanel:function(b){this.pnlTimedOffers=new BABYLON.GUI.Rectangle("pnlTimedOffers");this.pnlTimedOffers.transformCenterX=
.5;this.pnlTimedOffers.transformCenterY=.5;this.pnlTimedOffers.isPointerBlocker=!1;this.pnlTimedOffers.isHitTestVisible=!0;this.pnlTimedOffers.clipContent=!1;this.pnlTimedOffers.clipChildren=!1;this.pnlTimedOffers.widthInPixels=530;this.pnlTimedOffers.heightInPixels=850;this.pnlTimedOffers.thickness=0;this.pnlTimedOffers.color="yellow";b.addControl(this.pnlTimedOffers);this.pnlTimedOffers.scaleTo=function(e){this.scaleX=this.scaleY=e};return this.pnlTimedOffers},createBackground:function(b){this.imgBackground=
new BABYLON.GUI.Rectangle("imgBackground");this.imgBackground.transformCenterX=.5;this.imgBackground.transformCenterY=.5;this.imgBackground.isPointerBlocker=!0;this.imgBackground.isHitTestVisible=!1;this.imgBackground.clipContent=!1;this.imgBackground.clipChildren=!1;this.imgBackground.thickness=0;this.imgBackground.color="orange";this.imgBackground.background="rgba(24,94,211, 0.8)";b.addControl(this.imgBackground);this.imgBackground.resize=function(e,h){h+=300*Resolution.SCALE;this.widthInPixels=
e+5;this.heightInPixels=h}},createTitle:function(b,e){this.imgTitleBg=new BABYLON.GUI.Image("imgTitleBg");this.imgTitleBg.transformCenterX=.5;this.imgTitleBg.transformCenterY=.5;this.imgTitleBg.isPointerBlocker=!1;this.imgTitleBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgTitleBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main_title.png");this.imgTitleBg.scaleX=this.imgTitleBg.scaleY=2;this.imgTitleBg.leftInPixels=0;this.imgTitleBg.topInPixels=e;b.addControl(this.imgTitleBg);
this.txtTitle=new BABYLON.GUI.TextBlock("txtTitle");this.txtTitle.textWrapping=!0;this.txtTitle.leftInPixels=0;this.txtTitle.topInPixels=e-5;this.txtTitle.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.color="#FFFFFF";this.txtTitle.text=
Str("TIMED_OFFERS");this.txtTitle.fontSize="50px";this.txtTitle.fontFamily="gamefont";this.txtTitle.leftInPixels=0;this.txtTitle.isPointerBlocker=!1;this.txtTitle.isHitTestVisible=!1;this.txtTitle.shadowOffsetX=0;this.txtTitle.shadowOffsetY=6;this.txtTitle.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";this.txtTitle.outlineColor="rgb(0,0,0)";this.txtTitle.outlineWidth=5;this.txtTitle.shadowBlur=0;b.addControl(this.txtTitle);this.btnClose=BABYLON.GUI.Button.CreateImageOnlyButton("btnClose");
this.btnClose.children[0].transformCenterY=.5;this.btnClose.children[0].transformCenterX=.5;this.btnClose.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnClose.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnClose.transformCenterX=.5;this.btnClose.transformCenterY=.5;this.btnClose.topInPixels=e-25;this.btnClose.leftInPixels=230;b.addControl(this.btnClose);SetImageFromSpritesheet(this.btnClose.children[0],getAssetImage("pak1"),
getAssetImageFrames("pak1"),"button_close.png");ResetGuiButtonAppearance(this.btnClose,this.btnClose.children[0].sourceWidth,this.btnClose.children[0].sourceHeight);this.btnClose.onPointerClickObservable.add(this.onClosePressed)},createBody:function(b,e){this.imgBodyBg=new BABYLON.GUI.Image("imgBodyBg");this.imgBodyBg.transformCenterX=.5;this.imgBodyBg.transformCenterY=.5;this.imgBodyBg.isPointerBlocker=!1;this.imgBodyBg.isHitTestVisible=!1;this.imgBodyBg.scaleX=this.imgBodyBg.scaleY=2;SetImageFromSpritesheet(this.imgBodyBg,
getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main.png");this.imgBodyBg.leftInPixels=0;this.imgBodyBg.topInPixels=e;b.addControl(this.imgBodyBg)},createOffers:function(b,e){this.offers=[];this.createLargeOffer(b,e,TimedOffers.incomeX2);e+=125;this.createOffer(b,e,TimedOffers.capacityX2);e+=91;this.createOffer(b,e,TimedOffers.speedX2);e+=91;this.createOffer(b,e,TimedOffers.customersX2);this.createOffer(b,e+91,TimedOffers.machinesX2)},createLargeOffer:function(b,e,h){var f=new BABYLON.GUI.Rectangle("largeOffer");
f.transformCenterX=.5;f.transformCenterY=0;f.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;f.isPointerBlocker=!0;f.isHitTestVisible=!1;f.clipContent=!0;f.clipChildren=!0;f.thickness=0;f.widthInPixels=500;f.heightInPixels=150;f.topInPixels=e;f.color="orange";f.offer=h;b.addControl(f);f.imgBackground=new BABYLON.GUI.Image("largeOffer.imgBackground");f.imgBackground.transformCenterX=.5;f.imgBackground.transformCenterY=
.5;f.imgBackground.isPointerBlocker=!1;f.imgBackground.isHitTestVisible=!1;f.imgBackground.scaleX=f.imgBackground.scaleY=1.65;SetImageFromSpritesheet(f.imgBackground,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_item_xl.png");f.imgBackground.leftInPixels=0;f.imgBackground.alpha=1;f.imgBackground.topInPixels=0;f.addControl(f.imgBackground);f.btnFree=BABYLON.GUI.Button.CreateImageWithCenterTextButton("largeOffer.btnFree","Free");f.btnFree.thickness=2;f.btnFree.children[0].transformCenterY=
.5;f.btnFree.children[0].transformCenterX=.5;f.btnFree.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnFree.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.btnFree.children[1].textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnFree.children[1].transformCenterY=0;f.btnFree.children[1].transformCenterX=0;f.btnFree.children[1].fontFamily="gamefont";f.btnFree.children[1].fontSize="50px";f.btnFree.children[1].topInPixels=
25;f.btnFree.children[1].leftInPixels=0;f.btnFree.children[1].color="rgba(255,255,255,1)";f.btnFree.children[1].shadowOffsetY=2;f.btnFree.children[1].shadowColor=TEXT_SHADOWS_ENABLED?"rgba(0,0,0,1)":"rgba(80,80,80,0)";f.btnFree.children[1].shadowBlur=0;f.btnFree.children[1].outlineColor="rgb(0,0,0)";f.btnFree.children[1].outlineWidth=5;f.btnFree.transformCenterX=.5;f.btnFree.transformCenterY=.5;f.btnFree.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnFree.verticalAlignment=
BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.btnFree.topInPixels=0;f.btnFree.leftInPixels=180;f.btnFree.isHitTestVisible=!0;f.btnFree.isFocusInvisible=!0;f.btnFree.children[0].domImage=getAssetImage("pak1");SetImageFromSpritesheet(f.btnFree.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_active_xl_orange.png");ResetGuiButtonAppearance(f.btnFree,f.btnFree.children[0].sourceWidth,f.btnFree.children[0].sourceHeight);f.btnFree.clipContent=!1;f.btnFree.clipChildren=!1;f.btnFree.onPointerClickObservable.add(function(k,
m){inlHelper.rewardAds.showRewardedAd(function(){screenTimedOffers.activateOffer(m.target.parent.offer)},function(){},this)});f.addControl(f.btnFree);f.btnPurchase=BABYLON.GUI.Button.CreateImageWithCenterTextButton("largeOffer.btnPurchase","123");f.btnPurchase.thickness=2;f.btnPurchase.children[0].transformCenterY=.5;f.btnPurchase.children[0].transformCenterX=.5;f.btnPurchase.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnPurchase.children[0].verticalAlignment=
BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.btnPurchase.children[1].textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnPurchase.children[1].transformCenterY=0;f.btnPurchase.children[1].transformCenterX=0;f.btnPurchase.children[1].fontFamily="gamefont";f.btnPurchase.children[1].fontSize="50px";f.btnPurchase.children[1].topInPixels=20;f.btnPurchase.children[1].leftInPixels=0;f.btnPurchase.children[1].color="rgba(255,255,255,1)";f.btnPurchase.children[1].shadowOffsetY=2;
f.btnPurchase.children[1].shadowColor=TEXT_SHADOWS_ENABLED?"rgb(2,46,103)":"rgba(80,80,80,0)";f.btnPurchase.children[1].shadowBlur=0;f.btnPurchase.children[1].outlineColor="rgb(2,46,103)";f.btnPurchase.children[1].outlineWidth=5;f.btnPurchase.transformCenterX=.5;f.btnPurchase.transformCenterY=.5;f.btnPurchase.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnPurchase.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.btnPurchase.topInPixels=0;f.btnPurchase.leftInPixels=
180;f.btnPurchase.isHitTestVisible=!0;f.btnPurchase.isFocusInvisible=!1;f.btnPurchase.children[0].domImage=getAssetImage("pak1");SetImageFromSpritesheet(f.btnPurchase.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_active_xl_blue.png");ResetGuiButtonAppearance(f.btnPurchase,f.btnPurchase.children[0].sourceWidth,f.btnPurchase.children[0].sourceHeight);f.btnPurchase.clipContent=!1;f.btnPurchase.clipChildren=!1;f.btnPurchase.onPointerClickObservable.add(function(k,m){k=m.target.parent.offer;
m=Math.ceil(GetUnlockLevelPrice()*(rewAdsConfig.active?1:k.price));screenTopPanel.purchaseForCash(m)&&screenTimedOffers.activateOffer(k)});f.addControl(f.btnPurchase);f.imgCash=new BABYLON.GUI.Image("largeOffer.imgCash");f.imgCash.transformCenterX=.5;f.imgCash.transformCenterY=.5;f.imgCash.isPointerBlocker=!1;f.imgCash.isHitTestVisible=!1;f.imgCash.scaleX=f.imgCash.scaleY=1.2;SetImageFromSpritesheet(f.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_table_coins.png");f.imgCash.leftInPixels=
0;f.imgCash.alpha=1;f.imgCash.topInPixels=-5;f.imgCash.leftInPixels=0;f.btnPurchase.addControl(f.imgCash);b=f.btnPurchase.children[1];f.btnPurchase.children[1]=f.btnPurchase.children[2];f.btnPurchase.children[2]=b;f.imgAdBig=new BABYLON.GUI.Image("largeOffer.imgAdBig");f.imgAdBig.transformCenterX=.5;f.imgAdBig.transformCenterY=.5;f.imgAdBig.isPointerBlocker=!1;f.imgAdBig.isHitTestVisible=!1;f.imgAdBig.scaleX=f.imgAdBig.scaleY=1;SetImageFromSpritesheet(f.imgAdBig,getAssetImage("pak1"),getAssetImageFrames("pak1"),
"icon_ad_xl.png");f.imgAdBig.leftInPixels=0;f.imgAdBig.alpha=1;f.imgAdBig.topInPixels=-25;f.btnFree.addControl(f.imgAdBig);f.imgIcon=new BABYLON.GUI.Image("largeOffer.mgIcon");f.imgIcon.transformCenterX=.5;f.imgIcon.transformCenterY=.5;f.imgIcon.isPointerBlocker=!1;f.imgIcon.isHitTestVisible=!1;f.imgIcon.scaleX=f.imgIcon.scaleY=1;SetImageFromSpritesheet(f.imgIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),f.offer.icon+"_xl.png");f.imgIcon.leftInPixels=-165;f.imgIcon.alpha=1;f.addControl(f.imgIcon);
f.txtX2=new BABYLON.GUI.TextBlock("largeOffer.txtX2");f.txtX2.textWrapping=!0;f.txtX2.leftInPixels=-165;f.txtX2.topInPixels=30;f.txtX2.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.txtX2.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtX2.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.txtX2.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtX2.color="#FFFFFF";f.txtX2.text="X2";f.txtX2.fontSize="40px";f.txtX2.fontFamily=
"gamefont";f.txtX2.isPointerBlocker=!1;f.txtX2.isHitTestVisible=!1;f.txtX2.shadowOffsetX=0;f.txtX2.shadowOffsetY=2;f.txtX2.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(32,2,102)":"rgba(80,80,80,0)";f.txtX2.outlineColor="rgb(32,2,102)";f.txtX2.outlineWidth=5;f.txtX2.shadowBlur=0;f.addControl(f.txtX2);f.txtName=new BABYLON.GUI.TextBlock("largeOffer.txtName");f.txtName.textWrapping=!0;f.txtName.leftInPixels=-10;f.txtName.topInPixels=-15;f.txtName.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
f.txtName.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtName.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.txtName.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtName.color="#FFFFFF";f.txtName.text=Str(f.offer.title);f.txtName.fontSize="45px";f.txtName.fontFamily="gamefont";f.txtName.isPointerBlocker=!1;f.txtName.isHitTestVisible=!1;f.txtName.shadowOffsetX=0;f.txtName.shadowOffsetY=2;f.txtName.shadowColor=TEXT_SHADOWS_ENABLED?
"rgb(0,0,0)":"rgba(80,80,80,0)";f.txtName.outlineColor="rgb(0, 0, 0)";f.txtName.outlineWidth=5;f.txtName.shadowBlur=0;f.addControl(f.txtName);f.txtForTime=new BABYLON.GUI.TextBlock("largeOffer.txtForTime");f.txtForTime.textWrapping=!0;f.txtForTime.leftInPixels=f.txtName.leftInPixels;f.txtForTime.topInPixels=22;f.txtForTime.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.txtForTime.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtForTime.textHorizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.txtForTime.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtForTime.color="#FFFFFF";f.txtForTime.text="For 10 minutes";f.txtForTime.fontSize="23px";f.txtForTime.fontFamily="gamefont";f.txtForTime.isPointerBlocker=!1;f.txtForTime.isHitTestVisible=!1;f.txtForTime.shadowOffsetX=0;f.txtForTime.shadowOffsetY=2;f.txtForTime.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";f.txtForTime.outlineColor="rgb(0, 0, 0)";f.txtForTime.outlineWidth=
5;f.txtForTime.shadowBlur=0;f.addControl(f.txtForTime);f.txtTimer=new BABYLON.GUI.TextBlock("largeOffer.txtTimer");f.txtTimer.textWrapping=!0;f.txtTimer.leftInPixels=20;f.txtTimer.topInPixels=0;f.txtTimer.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;f.txtTimer.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtTimer.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;f.txtTimer.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
f.txtTimer.color="#FFFFFF";f.txtTimer.text="05:24";f.txtTimer.fontSize="45px";f.txtTimer.fontFamily="gamefont";f.txtTimer.isPointerBlocker=!1;f.txtTimer.isHitTestVisible=!1;f.txtTimer.shadowOffsetX=0;f.txtTimer.shadowOffsetY=2;f.txtTimer.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";f.txtTimer.outlineColor="rgb(0, 0, 0)";f.txtTimer.outlineWidth=5;f.txtTimer.shadowBlur=0;f.addControl(f.txtTimer);f.updateData=function(){var k=!1;if(null!=this.offer.dueTime){diff=this.offer.dueTime-
GlobalDate.getTime();k=!0;var m=Math.ceil(diff/1E3);var n=Math.floor(m/60);m-=60*n;this.txtTimer.text=leadingZero(n,2)+":"+leadingZero(m,2)+"    ."}this.btnPurchase.children[2].text=""+Math.ceil(GetUnlockLevelPrice()*(rewAdsConfig.active?1:this.offer.price));updateTextToWidth(this.btnPurchase.children[2],screenGame.guiTexture.getContext(),130,50,2);this.txtName.topInPixels=k?0:-15;this.btnFree.isVisible=!k&&rewAdsConfig.active;this.btnPurchase.isVisible=!k&&!rewAdsConfig.active;this.txtForTime.isVisible=
!k;this.txtTimer.isVisible=k;SetImageFromSpritesheet(this.imgBackground,getAssetImage("pak1"),getAssetImageFrames("pak1"),k?"table_item_xl_active.png":"table_item_xl.png")};f.updateTexts=function(){this.txtName.text=" "+Str(this.offer.title);updateTextToWidth(this.txtName,screenGame.guiTexture.getContext(),200,45,1);this.btnFree.children[1].text=Str("FREE");updateTextToWidth(this.btnFree.children[1],screenGame.guiTexture.getContext(),130,50,2);this.txtForTime.text=" "+Str("FOR_X_MINUTES").replaceAll("[X]",
""+Math.floor(this.offer.time/60))};f.resizeShadows=function(){var k=this.btnFree.children[1]._fontSize._value/50;this.btnFree.children[1].shadowOffsetX=getShadowOffs(0);this.btnFree.children[1].shadowOffsetY=getShadowOffs(4*k);this.btnFree.children[1].outlineWidth=getOutlineOffs(7*k);k=this.txtX2._fontSize._value/40;this.txtX2.shadowOffsetX=getShadowOffs(0);this.txtX2.shadowOffsetY=getShadowOffs(2*k);this.txtX2.outlineWidth=getOutlineOffs(10*k);k=this.txtName._fontSize._value/45;this.txtName.shadowOffsetX=
getShadowOffs(0);this.txtName.shadowOffsetY=getShadowOffs(4*k);this.txtName.outlineWidth=getOutlineOffs(7*k);k=this.txtForTime._fontSize._value/22;this.txtForTime.shadowOffsetX=getShadowOffs(0);this.txtForTime.shadowOffsetY=getShadowOffs(2*k);this.txtForTime.outlineWidth=getOutlineOffs(6*k);k=this.txtTimer._fontSize._value/40;this.txtTimer.shadowOffsetX=getShadowOffs(0);this.txtTimer.shadowOffsetY=getShadowOffs(4*k);this.txtTimer.outlineWidth=getOutlineOffs(7*k)};this.offers.push(f);return f},createOffer:function(b,
e,h){var f=new BABYLON.GUI.Rectangle("offer");f.transformCenterX=.5;f.transformCenterY=0;f.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;f.isPointerBlocker=!0;f.isHitTestVisible=!1;f.clipContent=!0;f.clipChildren=!0;f.thickness=0;f.widthInPixels=500;f.heightInPixels=150;f.topInPixels=e;f.color="orange";f.offer=h;b.addControl(f);f.imgBackground=new BABYLON.GUI.Image("offer.imgBackground");f.imgBackground.transformCenterX=
.5;f.imgBackground.transformCenterY=.5;f.imgBackground.isPointerBlocker=!1;f.imgBackground.isHitTestVisible=!1;f.imgBackground.scaleX=f.imgBackground.scaleY=1.65;SetImageFromSpritesheet(f.imgBackground,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_item_s.png");f.imgBackground.leftInPixels=0;f.imgBackground.alpha=1;f.imgBackground.topInPixels=0;f.addControl(f.imgBackground);f.btnFree=BABYLON.GUI.Button.CreateImageWithCenterTextButton("offer.btnFree","Free");f.btnFree.thickness=2;f.btnFree.children[0].transformCenterY=
.5;f.btnFree.children[0].transformCenterX=.5;f.btnFree.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnFree.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.btnFree.children[1].textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnFree.children[1].transformCenterY=0;f.btnFree.children[1].transformCenterX=0;f.btnFree.children[1].fontFamily="gamefont";f.btnFree.children[1].fontSize="25px";f.btnFree.children[1].topInPixels=
5;f.btnFree.children[1].leftInPixels=0;f.btnFree.children[1].color="rgba(255,255,255,1)";f.btnFree.children[1].shadowOffsetY=2;f.btnFree.children[1].shadowColor=TEXT_SHADOWS_ENABLED?"rgba(0,0,0,1)":"rgba(80,80,80,0)";f.btnFree.children[1].shadowBlur=0;f.btnFree.children[1].outlineColor="rgb(0,0,0)";f.btnFree.children[1].outlineWidth=5;f.btnFree.transformCenterX=.5;f.btnFree.transformCenterY=.5;f.btnFree.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnFree.verticalAlignment=
BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.btnFree.topInPixels=0;f.btnFree.leftInPixels=195;f.btnFree.isHitTestVisible=!0;f.btnFree.isFocusInvisible=!0;f.btnFree.children[0].domImage=getAssetImage("pak1");SetImageFromSpritesheet(f.btnFree.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_s_orange.png");ResetGuiButtonAppearance(f.btnFree,f.btnFree.children[0].sourceWidth,f.btnFree.children[0].sourceHeight);f.btnFree.clipContent=!1;f.btnFree.clipChildren=!1;f.btnFree.onPointerClickObservable.add(function(k,
m){inlHelper.rewardAds.showRewardedAd(function(){screenTimedOffers.activateOffer(m.target.parent.offer)},function(){},this)});f.addControl(f.btnFree);f.imgAdSmall=new BABYLON.GUI.Image("offer.imgAdSmall");f.imgAdSmall.transformCenterX=.5;f.imgAdSmall.transformCenterY=.5;f.imgAdSmall.isPointerBlocker=!1;f.imgAdSmall.isHitTestVisible=!1;f.imgAdSmall.scaleX=f.imgAdSmall.scaleY=1;SetImageFromSpritesheet(f.imgAdSmall,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_ad_m.png");f.imgAdSmall.leftInPixels=
0;f.imgAdSmall.alpha=1;f.imgAdSmall.topInPixels=-26;f.imgAdSmall.leftInPixels=34;f.btnFree.addControl(f.imgAdSmall);f.btnPurchase=BABYLON.GUI.Button.CreateImageWithCenterTextButton("offer.btnPurchase","123");f.btnPurchase.thickness=2;f.btnPurchase.children[0].transformCenterY=.5;f.btnPurchase.children[0].transformCenterX=.5;f.btnPurchase.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnPurchase.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
f.btnPurchase.children[1].textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnPurchase.children[1].transformCenterY=0;f.btnPurchase.children[1].transformCenterX=0;f.btnPurchase.children[1].fontFamily="gamefont";f.btnPurchase.children[1].fontSize="24px";f.btnPurchase.children[1].topInPixels=10;f.btnPurchase.children[1].leftInPixels=0;f.btnPurchase.children[1].color="rgba(255,255,255,1)";f.btnPurchase.children[1].shadowOffsetY=2;f.btnPurchase.children[1].shadowColor=TEXT_SHADOWS_ENABLED?
"rgb(2,46,103)":"rgba(80,80,80,0)";f.btnPurchase.children[1].outlineColor="rgb(2,46,103)";f.btnPurchase.children[1].shadowBlur=0;f.btnPurchase.children[1].outlineWidth=5;f.btnPurchase.transformCenterX=.5;f.btnPurchase.transformCenterY=.5;f.btnPurchase.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.btnPurchase.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.btnPurchase.topInPixels=0;f.btnPurchase.leftInPixels=93;f.btnPurchase.isHitTestVisible=!0;f.btnPurchase.isFocusInvisible=
!1;f.btnPurchase.children[0].domImage=getAssetImage("pak1");SetImageFromSpritesheet(f.btnPurchase.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_s_blue.png");ResetGuiButtonAppearance(f.btnPurchase,f.btnPurchase.children[0].sourceWidth,f.btnPurchase.children[0].sourceHeight);f.btnPurchase.clipContent=!1;f.btnPurchase.clipChildren=!1;f.btnPurchase.onPointerClickObservable.add(function(k,m){k=m.target.parent.offer;m=Math.ceil(GetUnlockLevelPrice()*(rewAdsConfig.active?1:k.price));
screenTopPanel.purchaseForCash(m)&&screenTimedOffers.activateOffer(k)});f.addControl(f.btnPurchase);f.imgCash=new BABYLON.GUI.Image("offer.imgCash");f.imgCash.transformCenterX=.5;f.imgCash.transformCenterY=.5;f.imgCash.isPointerBlocker=!1;f.imgCash.isHitTestVisible=!1;f.imgCash.scaleX=f.imgCash.scaleY=1;SetImageFromSpritesheet(f.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_table_coins.png");f.imgCash.leftInPixels=0;f.imgCash.alpha=1;f.imgCash.topInPixels=-5;f.imgCash.leftInPixels=
0;f.btnPurchase.addControl(f.imgCash);b=f.btnPurchase.children[1];f.btnPurchase.children[1]=f.btnPurchase.children[2];f.btnPurchase.children[2]=b;f.imgIcon=new BABYLON.GUI.Image("offer.mgIcon");f.imgIcon.transformCenterX=.5;f.imgIcon.transformCenterY=.5;f.imgIcon.isPointerBlocker=!1;f.imgIcon.isHitTestVisible=!1;f.imgIcon.scaleX=f.imgIcon.scaleY=1;SetImageFromSpritesheet(f.imgIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),f.offer.icon+".png");f.imgIcon.leftInPixels=-195;f.imgIcon.alpha=1;
f.addControl(f.imgIcon);f.txtX2=new BABYLON.GUI.TextBlock("offer.txtX2");f.txtX2.textWrapping=!0;f.txtX2.leftInPixels=f.imgIcon.leftInPixels;f.txtX2.topInPixels=18;f.txtX2.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.txtX2.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtX2.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;f.txtX2.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtX2.color="#FFFFFF";f.txtX2.text=
"X2";f.txtX2.fontSize="25px";f.txtX2.fontFamily="gamefont";f.txtX2.isPointerBlocker=!1;f.txtX2.isHitTestVisible=!1;f.txtX2.shadowOffsetX=0;f.txtX2.shadowOffsetY=2;f.txtX2.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(32,2,102)":"rgba(80,80,80,0)";f.txtX2.outlineColor="rgb(32,2,102)";f.txtX2.outlineWidth=5;f.txtX2.shadowBlur=0;f.addControl(f.txtX2);f.txtName=new BABYLON.GUI.TextBlock("offer.txtName");f.txtName.textWrapping=!0;f.txtName.leftInPixels=90;f.txtName.topInPixels=-12;f.txtName.horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;f.txtName.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtName.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;f.txtName.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtName.color="#FFFFFF";f.txtName.text=Str(f.offer.title);f.txtName.fontSize="35px";f.txtName.fontFamily="gamefont";f.txtName.isPointerBlocker=!1;f.txtName.isHitTestVisible=!1;f.txtName.shadowOffsetX=0;f.txtName.shadowOffsetY=
2;f.txtName.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";f.txtName.outlineColor="rgb(0, 0, 0)";f.txtName.outlineWidth=5;f.txtName.shadowBlur=0;f.addControl(f.txtName);f.txtForTime=new BABYLON.GUI.TextBlock("offer.txtForTime");f.txtForTime.textWrapping=!0;f.txtForTime.leftInPixels=f.txtName.leftInPixels;f.txtForTime.topInPixels=14;f.txtForTime.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;f.txtForTime.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
f.txtForTime.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;f.txtForTime.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtForTime.color="#FFFFFF";f.txtForTime.text="For 10 minutes";f.txtForTime.fontSize="21px";f.txtForTime.fontFamily="gamefont";f.txtForTime.isPointerBlocker=!1;f.txtForTime.isHitTestVisible=!1;f.txtForTime.shadowOffsetX=0;f.txtForTime.shadowOffsetY=2;f.txtForTime.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";f.txtForTime.outlineColor=
"rgb(0, 0, 0)";f.txtForTime.outlineWidth=5;f.txtForTime.shadowBlur=0;f.addControl(f.txtForTime);f.txtTimer=new BABYLON.GUI.TextBlock("offer.txtTimer");f.txtTimer.textWrapping=!0;f.txtTimer.leftInPixels=17;f.txtTimer.topInPixels=0;f.txtTimer.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;f.txtTimer.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;f.txtTimer.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;f.txtTimer.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
f.txtTimer.color="#FFFFFF";f.txtTimer.text="05:24";f.txtTimer.fontSize="35px";f.txtTimer.fontFamily="gamefont";f.txtTimer.isPointerBlocker=!1;f.txtTimer.isHitTestVisible=!1;f.txtTimer.shadowOffsetX=0;f.txtTimer.shadowOffsetY=2;f.txtTimer.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";f.txtTimer.outlineColor="rgb(0, 0, 0)";f.txtTimer.outlineWidth=5;f.txtTimer.shadowBlur=0;f.addControl(f.txtTimer);rewAdsConfig.active||(f.btnPurchase.leftInPixels=f.btnFree.leftInPixels);f.updateData=
function(){var k=!0,m=!1;this.offer.hasOwnProperty("level")&&Shop.instance&&(k=Shop.instance.unlockLevel>=this.offer.level);if(null!=this.offer.dueTime){diff=this.offer.dueTime-GlobalDate.getTime();m=!0;var n=Math.ceil(diff/1E3);var y=Math.floor(n/60);n-=60*y;this.txtTimer.text=leadingZero(y,2)+":"+leadingZero(n,2)+"    ."}this.txtName.topInPixels=m?0:-15;this.btnFree.isVisible=!m&&rewAdsConfig.active;this.btnPurchase.isVisible=!m;this.txtForTime.isVisible=!m;this.txtTimer.isVisible=m;enableButton(this.btnPurchase);
enableButton(this.btnFree);this.btnPurchase.children[2].text=""+Math.ceil(GetUnlockLevelPrice()*(rewAdsConfig.active?1:this.offer.price));updateTextToWidth(this.btnPurchase.children[2],screenGame.guiTexture.getContext(),80,24,2);k?(this.txtX2.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(32,2,102)":"rgba(80,80,80,0)",this.txtX2.outlineColor="rgb(32,2,102)",this.btnPurchase.children[2].shadowColor=TEXT_SHADOWS_ENABLED?"rgb(2,46,103)":"rgba(80,80,80,0)",this.btnPurchase.children[2].outlineColor="rgb(2,46,103)",
SetImageFromSpritesheet(this.imgIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),f.offer.icon+".png"),SetImageFromSpritesheet(this.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_table_coins.png"),SetImageFromSpritesheet(this.btnFree.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_s_orange.png"),SetImageFromSpritesheet(this.btnPurchase.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_s_blue.png"),SetImageFromSpritesheet(this.imgBackground,
getAssetImage("pak1"),getAssetImageFrames("pak1"),m?"table_item_active.png":"table_item_s.png")):(disableButton(this.btnPurchase),disableButton(this.btnFree),this.txtX2.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(53,53,53)":"rgba(80,80,80,0)",this.txtX2.outlineColor="rgb(53,53,53)",this.btnPurchase.children[2].shadowColor=TEXT_SHADOWS_ENABLED?"rgb(53,53,53)":"rgba(80,80,80,0)",this.btnPurchase.children[2].outlineColor="rgb(53,53,53)",SetImageFromSpritesheet(this.imgIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),
this.offer.icon+"_gray.png"),SetImageFromSpritesheet(this.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_table_coins_gray.png"),SetImageFromSpritesheet(this.btnFree.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_s_gray.png"),SetImageFromSpritesheet(this.btnPurchase.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_s_gray.png"),SetImageFromSpritesheet(this.imgBackground,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_item_s_gray.png"))};
f.updateTexts=function(){this.txtName.text=" "+Str(this.offer.title);updateTextToWidth(this.txtName,screenGame.guiTexture.getContext(),190,35,1);this.btnFree.children[1].text=Str("FREE");updateTextToWidth(this.btnFree.children[1],screenGame.guiTexture.getContext(),80,25,2);this.txtForTime.text=" "+Str("FOR_X_MINUTES").replaceAll("[X]",""+Math.floor(this.offer.time/60))};f.resizeShadows=function(){var k=this.btnFree.children[1]._fontSize._value/25;this.btnFree.children[1].shadowOffsetX=getShadowOffs(0);
this.btnFree.children[1].shadowOffsetY=getShadowOffs(2*k);this.btnFree.children[1].outlineWidth=getOutlineOffs(6*k);k=this.btnPurchase.children[2]._fontSize._value/24;this.btnPurchase.children[2].shadowOffsetX=getShadowOffs(0);this.btnPurchase.children[2].shadowOffsetY=getShadowOffs(2*k);this.btnPurchase.children[2].outlineWidth=getOutlineOffs(6*k);k=this.txtX2._fontSize._value/25;this.txtX2.shadowOffsetX=getShadowOffs(0);this.txtX2.shadowOffsetY=getShadowOffs(2*k);this.txtX2.outlineWidth=getOutlineOffs(6*
k);k=this.txtName._fontSize._value/35;this.txtName.shadowOffsetX=getShadowOffs(0);this.txtName.shadowOffsetY=getShadowOffs(2*k);this.txtName.outlineWidth=getOutlineOffs(7*k);k=this.txtForTime._fontSize._value/22;this.txtForTime.shadowOffsetX=getShadowOffs(0);this.txtForTime.shadowOffsetY=getShadowOffs(2*k);this.txtForTime.outlineWidth=getOutlineOffs(4*k);k=this.txtTimer._fontSize._value/35;this.txtTimer.shadowOffsetX=getShadowOffs(0);this.txtTimer.shadowOffsetY=getShadowOffs(2*k);this.txtTimer.outlineWidth=
getOutlineOffs(7*k)};this.offers.push(f);return f},createSmallOffer:function(b,e,h,f){var k=new BABYLON.GUI.Rectangle("smallOffer");k.transformCenterX=.5;k.transformCenterY=0;k.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;k.isPointerBlocker=!0;k.isHitTestVisible=!1;k.clipContent=!1;k.clipChildren=!1;k.thickness=0;k.widthInPixels=500;k.heightInPixels=150;k.topInPixels=h;k.leftInPixels=e;k.color="orange";k.offer=f;
b.addControl(k);k.imgBackground=new BABYLON.GUI.Image("smallOffer.imgBackground");k.imgBackground.transformCenterX=.5;k.imgBackground.transformCenterY=.5;k.imgBackground.isPointerBlocker=!1;k.imgBackground.isHitTestVisible=!1;k.imgBackground.scaleX=k.imgBackground.scaleY=1;SetImageFromSpritesheet(k.imgBackground,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_down.png");k.imgBackground.leftInPixels=0;k.imgBackground.alpha=1;k.imgBackground.topInPixels=0;k.addControl(k.imgBackground);k.btnFree=
BABYLON.GUI.Button.CreateImageWithCenterTextButton("smallOffer.btnFree","Free");k.btnFree.thickness=2;k.btnFree.children[0].transformCenterY=.5;k.btnFree.children[0].transformCenterX=.5;k.btnFree.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.btnFree.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;k.btnFree.children[1].textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.btnFree.children[1].transformCenterY=0;k.btnFree.children[1].transformCenterX=
0;k.btnFree.children[1].fontFamily="gamefont";k.btnFree.children[1].fontSize="20px";k.btnFree.children[1].topInPixels=0;k.btnFree.children[1].leftInPixels=0;k.btnFree.children[1].color="rgba(255,255,255,1)";k.btnFree.children[1].shadowOffsetY=2;k.btnFree.children[1].shadowColor=TEXT_SHADOWS_ENABLED?"rgba(0,0,0,1)":"rgba(80,80,80,0)";k.btnFree.children[1].shadowBlur=0;k.btnFree.children[1].outlineColor="rgb(0,0,0)";k.btnFree.children[1].outlineWidth=5;k.btnFree.transformCenterX=.5;k.btnFree.transformCenterY=
.5;k.btnFree.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.btnFree.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;k.btnFree.topInPixels=38;k.btnFree.leftInPixels=0;k.btnFree.isHitTestVisible=!1;k.btnFree.isFocusInvisible=!0;k.btnFree.children[0].domImage=getAssetImage("pak1");SetImageFromSpritesheet(k.btnFree.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_down_orange.png");ResetGuiButtonAppearance(k.btnFree,k.btnFree.children[0].sourceWidth,
k.btnFree.children[0].sourceHeight);k.btnFree.clipContent=!1;k.btnFree.clipChildren=!1;k.addControl(k.btnFree);k.imgAdSmall=new BABYLON.GUI.Image("smallOffer.imgAdSmall");k.imgAdSmall.transformCenterX=.5;k.imgAdSmall.transformCenterY=.5;k.imgAdSmall.isPointerBlocker=!1;k.imgAdSmall.isHitTestVisible=!1;k.imgAdSmall.scaleX=k.imgAdSmall.scaleY=1;SetImageFromSpritesheet(k.imgAdSmall,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_ad_s.png");k.imgAdSmall.leftInPixels=0;k.imgAdSmall.alpha=1;k.imgAdSmall.topInPixels=
-10;k.imgAdSmall.leftInPixels=66;k.btnFree.addControl(k.imgAdSmall);k.btnPurchase=BABYLON.GUI.Button.CreateImageWithCenterTextButton("smallOffer.btnPurchase","123");k.btnPurchase.thickness=2;k.btnPurchase.children[0].transformCenterY=.5;k.btnPurchase.children[0].transformCenterX=.5;k.btnPurchase.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.btnPurchase.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;k.btnPurchase.children[1].textHorizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.btnPurchase.children[1].transformCenterY=0;k.btnPurchase.children[1].transformCenterX=0;k.btnPurchase.children[1].fontFamily="gamefont";k.btnPurchase.children[1].fontSize="22px";k.btnPurchase.children[1].topInPixels=0;k.btnPurchase.children[1].leftInPixels=0;k.btnPurchase.children[1].color="rgba(255,255,255,1)";k.btnPurchase.children[1].shadowOffsetY=2;k.btnPurchase.children[1].shadowColor=TEXT_SHADOWS_ENABLED?"rgb(2,46,103)":"rgba(80,80,80,0)";k.btnPurchase.children[1].shadowBlur=
0;k.btnPurchase.children[1].outlineColor="rgb(2,46,103)";k.btnPurchase.children[1].outlineWidth=5;k.btnPurchase.transformCenterX=.5;k.btnPurchase.transformCenterY=.5;k.btnPurchase.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.btnPurchase.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;k.btnPurchase.topInPixels=k.btnFree.topInPixels;k.btnPurchase.leftInPixels=0;k.btnPurchase.isHitTestVisible=!1;k.btnPurchase.isFocusInvisible=!0;k.btnPurchase.children[0].domImage=
getAssetImage("pak1");SetImageFromSpritesheet(k.btnPurchase.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_down_blue.png");ResetGuiButtonAppearance(k.btnPurchase,k.btnPurchase.children[0].sourceWidth,k.btnPurchase.children[0].sourceHeight);k.btnPurchase.clipContent=!1;k.btnPurchase.clipChildren=!1;k.addControl(k.btnPurchase);k.imgCash=new BABYLON.GUI.Image("smallOffer.imgCash");k.imgCash.transformCenterX=.5;k.imgCash.transformCenterY=.5;k.imgCash.isPointerBlocker=!1;k.imgCash.isHitTestVisible=
!1;k.imgCash.scaleX=k.imgCash.scaleY=1;SetImageFromSpritesheet(k.imgCash,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_money_down_blue.png");k.imgCash.leftInPixels=0;k.imgCash.alpha=1;k.imgCash.topInPixels=0;k.imgCash.leftInPixels=0;k.btnPurchase.addControl(k.imgCash);b=k.btnPurchase.children[1];k.btnPurchase.children[1]=k.btnPurchase.children[2];k.btnPurchase.children[2]=b;rewAdsConfig.active?(k.btnFree.isVisible=k.offer.ads,k.btnPurchase.isVisible=!k.btnFree.isVisible):(k.btnPurchase.isVisible=
!0,k.btnFree.isVisible=!1);k.imgIcon=new BABYLON.GUI.Image("smallOffer.mgIcon");k.imgIcon.transformCenterX=.5;k.imgIcon.transformCenterY=.5;k.imgIcon.isPointerBlocker=!1;k.imgIcon.isHitTestVisible=!1;k.imgIcon.scaleX=k.imgIcon.scaleY=1;SetImageFromSpritesheet(k.imgIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),k.offer.icon+".png");k.imgIcon.leftInPixels=0;k.imgIcon.topInPixels=2;k.imgIcon.alpha=1;k.addControl(k.imgIcon);k.txtPlus=new BABYLON.GUI.TextBlock("smallOffer.txtPlus");k.txtPlus.textWrapping=
!0;k.txtPlus.leftInPixels=k.imgIcon.leftInPixels;k.txtPlus.topInPixels=5;k.txtPlus.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.txtPlus.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;k.txtPlus.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;k.txtPlus.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;k.txtPlus.color="#FFFFFF";k.txtPlus.text="X2";k.txtPlus.fontSize="21px";k.txtPlus.fontFamily="gamefont";k.txtPlus.isPointerBlocker=
!1;k.txtPlus.isHitTestVisible=!1;k.txtPlus.shadowOffsetX=0;k.txtPlus.shadowOffsetY=2;k.txtPlus.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(32,2,102)":"rgba(80,80,80,0)";k.txtPlus.outlineColor="rgb(32,2,102)";k.txtPlus.outlineWidth=5;k.txtPlus.shadowBlur=0;k.addControl(k.txtPlus);k.updateData=function(){};k.updateTexts=function(){this.setPrice(this.offer.price);this.txtPlus.text="+"+this.offer.value;this.btnFree.children[1].text=Str("FREE");updateTextToWidth(this.btnFree.children[1],screenGame.guiTexture.getContext(),
110,25,2)};k.resizeShadows=function(){var m=this.btnFree.children[1]._fontSize._value/25;this.btnFree.children[1].shadowOffsetX=getShadowOffs(0);this.btnFree.children[1].shadowOffsetY=getShadowOffs(4*m);this.btnFree.children[1].outlineWidth=getOutlineOffs(4*m);m=this.btnPurchase.children[2]._fontSize._value/24;this.btnPurchase.children[2].shadowOffsetX=getShadowOffs(0);this.btnPurchase.children[2].shadowOffsetY=getShadowOffs(4*m);this.btnPurchase.children[2].outlineWidth=getOutlineOffs(4*m);m=this.txtPlus._fontSize._value/
25;this.txtPlus.shadowOffsetX=getShadowOffs(0);this.txtPlus.shadowOffsetY=getShadowOffs(2*m);this.txtPlus.outlineWidth=getOutlineOffs(6*m)};k.setPrice=function(m){this.btnPurchase.children[2].text=""+m;m=this.imgCash.widthInPixels*this.imgCash.scaleX;var n=getTextWidth(screenGame.guiTexture.getContext(),this.btnPurchase.children[2].text,this.btnPurchase.children[2].fontFamily,this.btnPurchase.children[2]._fontSize._value);this.imgCash.leftInPixels=-(m+n+-5)/2+m/2-5;this.btnPurchase.children[2].leftInPixels=
this.imgCash.leftInPixels+n/2+-5+m/2};this.offers.push(k);return k},activateOffer:function(b){soundManager.playSound("completed_1");Shop.instance.deleteOfferPointByOfferType(b.type);b.dueTime=GlobalDate.getTime()+1E3*b.time;Shop.instance.getPlayerPlayer().updateData();SaveShop();canvas.focus()},updateTexts:function(){this.txtTitle.text=Str("TIMED_OFFERS");updateTextToWidth(this.txtTitle,screenGame.guiTexture.getContext(),350,45,1);for(var b=0;b<this.offers.length;b++)this.offers[b].updateTexts()},
onClosePressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenTimedOffers.hideScene(function(){activeScene.gamePaused=screenTimedOffers.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0}))},enableControls:function(){enableButton(this.btnClose)},disableControls:function(){disableButton(this.btnClose)},hideScene:function(b){void 0===b&&(b=null);this.disableControls();var e=
{func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",-50*Resolution.SCALE,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,SCENE_TRANSITION_DURATION,e,1,!1,function(){screenTimedOffers.guiRoot.isVisible=!1;null!=b&&b()})},showScene:function(b){void 0===b&&(b=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.guiRoot.topInPixels=50*Resolution.SCALE;this.enableControls();
this.onResize();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",0,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",1,SCENE_TRANSITION_DURATION,e,1,!1,function(){null!=b&&b()})},beforeRender:function(){ActiveOfferTypes=[];for(var b=0;b<this.offers.length;b++)UpdateTimedOffer(this.offers[b].offer),this.offers[b].updateData()},onResize:function(){if(this.guiRoot.isVisible){var b=
engine.getRenderWidth(),e=engine.getRenderHeight();this.imgBackground.resize(b,e);this.pnlRoot.heightInPixels=this.imgBackground.heightInPixels;this.pnlTimedOffers.scaleTo(.85*e/900);this.pnlTimedOffers.topInPixels=25;this.pnlTimedOffers.widthInPixels*this.pnlTimedOffers.scaleX>.98*b&&this.pnlTimedOffers.scaleTo(.98*b/this.pnlTimedOffers.widthInPixels);this.resizeShadows()}},resizeShadows:function(){var b=this.txtTitle._fontSize._value/50;this.txtTitle.shadowOffsetX=getShadowOffs(0);this.txtTitle.shadowOffsetY=
getShadowOffs(3*b);this.txtTitle.outlineWidth=getOutlineOffs(OUTLINE_WIDTH*b);for(b=0;b<this.offers.length;b++)this.offers[b].resizeShadows()}};var ScreenOffer=function(b){ScreenOffer.instance=this;this.create(b)};ScreenOffer.instance=null;
ScreenOffer.prototype={create:function(b){this.scene=b;this.createGui();this.disableControls();this.titleStr=this.offer=null;this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createBackground(this.guiRoot);this.createOfferPanel(this.pnlRoot);this.createBody(this.pnlOffer,0);this.createTitle(this.pnlOffer,-210)},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenOffer.pnlRoot");
this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;this.pnlRoot.zIndex=60;b.addControl(this.pnlRoot);return this.pnlRoot},createOfferPanel:function(b){this.pnlOffer=new BABYLON.GUI.Rectangle("pnlOffer");this.pnlOffer.transformCenterX=.5;this.pnlOffer.transformCenterY=
.5;this.pnlOffer.isPointerBlocker=!1;this.pnlOffer.isHitTestVisible=!1;this.pnlOffer.clipContent=!1;this.pnlOffer.clipChildren=!1;this.pnlOffer.widthInPixels=580;this.pnlOffer.heightInPixels=960;this.pnlOffer.thickness=0;this.pnlOffer.color="yellow";b.addControl(this.pnlOffer);this.pnlOffer.scaleTo=function(e){this.scaleX=this.scaleY=e};return this.pnlOffer},createBackground:function(b){this.imgBackground=new BABYLON.GUI.Rectangle("imgBackground");this.imgBackground.transformCenterX=.5;this.imgBackground.transformCenterY=
.5;this.imgBackground.isPointerBlocker=!0;this.imgBackground.isHitTestVisible=!1;this.imgBackground.clipContent=!1;this.imgBackground.clipChildren=!1;this.imgBackground.thickness=2;this.imgBackground.color="orange";this.imgBackground.background="rgba(24,94,211, 0.8)";b.addControl(this.imgBackground);this.imgBackground.resize=function(e,h){h+=300*Resolution.SCALE;this.widthInPixels=e+5;this.heightInPixels=h}},createTitle:function(b,e){this.imgTitleBg=new BABYLON.GUI.Image("imgTitleBg");this.imgTitleBg.transformCenterX=
.5;this.imgTitleBg.transformCenterY=.5;this.imgTitleBg.isPointerBlocker=!1;this.imgTitleBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgTitleBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main_title.png");this.imgTitleBg.scaleX=this.imgTitleBg.scaleY=2;this.imgTitleBg.leftInPixels=0;this.imgTitleBg.topInPixels=e;b.addControl(this.imgTitleBg);this.txtTitle=new BABYLON.GUI.TextBlock("txtTitle");this.txtTitle.textWrapping=!0;this.txtTitle.leftInPixels=0;this.txtTitle.topInPixels=
e-5;this.txtTitle.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.color="#FFFFFF";this.txtTitle.text="Offer";this.txtTitle.fontSize="50px";this.txtTitle.fontFamily="gamefont";this.txtTitle.leftInPixels=0;this.txtTitle.isPointerBlocker=
!1;this.txtTitle.isHitTestVisible=!1;this.txtTitle.shadowOffsetX=0;this.txtTitle.shadowOffsetY=6;this.txtTitle.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";this.txtTitle.outlineColor="rgb(0,0,0)";this.txtTitle.outlineWidth=5;this.txtTitle.shadowBlur=0;b.addControl(this.txtTitle);this.btnClose=BABYLON.GUI.Button.CreateImageOnlyButton("btnClose");this.btnClose.children[0].transformCenterY=.5;this.btnClose.children[0].transformCenterX=.5;this.btnClose.children[0].horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnClose.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnClose.transformCenterX=.5;this.btnClose.transformCenterY=.5;this.btnClose.topInPixels=e-25;this.btnClose.leftInPixels=230;b.addControl(this.btnClose);SetImageFromSpritesheet(this.btnClose.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"button_close.png");ResetGuiButtonAppearance(this.btnClose,this.btnClose.children[0].sourceWidth,this.btnClose.children[0].sourceHeight);
this.btnClose.onPointerClickObservable.add(this.onClosePressed)},createBody:function(b,e){this.imgShine=new BABYLON.GUI.Image("imgShine");this.imgShine.transformCenterX=.5;this.imgShine.transformCenterY=.5;this.imgShine.isPointerBlocker=!1;this.imgShine.isHitTestVisible=!1;this.imgShine.scaleX=this.imgShine.scaleY=3;SetImageFromSpritesheet(this.imgShine,getAssetImage("pak1"),getAssetImageFrames("pak1"),"shine.png");this.imgShine.leftInPixels=0;this.imgShine.topInPixels=e;this.imgShine.scaleOffs=0;
b.addControl(this.imgShine);this.imgBodyBg=new BABYLON.GUI.Image("imgBodyBg");this.imgBodyBg.transformCenterX=.5;this.imgBodyBg.transformCenterY=.5;this.imgBodyBg.isPointerBlocker=!1;this.imgBodyBg.isHitTestVisible=!1;this.imgBodyBg.scaleX=this.imgBodyBg.scaleY=2;SetImageFromSpritesheet(this.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_reward_bg.png");this.imgBodyBg.leftInPixels=0;this.imgBodyBg.topInPixels=e;b.addControl(this.imgBodyBg);this.imgBodyIcon=new BABYLON.GUI.Image("imgBodyIcon");
this.imgBodyIcon.transformCenterX=.5;this.imgBodyIcon.transformCenterY=.5;this.imgBodyIcon.isPointerBlocker=!1;this.imgBodyIcon.isHitTestVisible=!1;this.imgBodyIcon.scaleX=this.imgBodyIcon.scaleY=1;SetImageFromSpritesheet(this.imgBodyIcon,getAssetImage("pak1"),getAssetImageFrames("pak1"),"ic_income_xxl.png");this.imgBodyIcon.leftInPixels=0;this.imgBodyIcon.topInPixels=e-30;b.addControl(this.imgBodyIcon);this.txtReward=new BABYLON.GUI.TextBlock("txtReward");this.txtReward.textWrapping=!0;this.txtReward.leftInPixels=
0;this.txtReward.topInPixels=e+57;this.txtReward.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtReward.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtReward.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtReward.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtReward.color="#FFFFFF";this.txtReward.text="";this.txtReward.fontSize="48px";this.txtReward.fontFamily="gamefont";this.txtReward.leftInPixels=
0;this.txtReward.isPointerBlocker=!1;this.txtReward.isHitTestVisible=!1;this.txtReward.shadowOffsetX=0;this.txtReward.shadowOffsetY=6;this.txtReward.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtReward.outlineColor="rgb(48,21,131)";this.txtReward.outlineWidth=5;this.txtReward.shadowBlur=0;b.addControl(this.txtReward);this.btnClaim=BABYLON.GUI.Button.CreateImageOnlyButton("btnClaim");this.btnClaim.children[0].transformCenterY=.5;this.btnClaim.children[0].transformCenterX=
.5;this.btnClaim.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnClaim.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnClaim.transformCenterX=.5;this.btnClaim.transformCenterY=.5;this.btnClaim.topInPixels=e+175;this.btnClaim.leftInPixels=0;this.btnClaim.scaleX=this.btnClaim.scaleY=2;this.btnClaim.clipChildren=!1;this.btnClaim.clipContent=!1;b.addControl(this.btnClaim);SetImageFromSpritesheet(this.btnClaim.children[0],getAssetImage("pak1"),
getAssetImageFrames("pak1"),"btn_free.png");ResetGuiButtonAppearance(this.btnClaim,this.btnClaim.children[0].sourceWidth,this.btnClaim.children[0].sourceHeight);this.btnClaim.heightInPixels=100;this.txtFree=new BABYLON.GUI.TextBlock("txtFree");this.txtFree.textWrapping=!0;this.txtFree.leftInPixels=0;this.txtFree.topInPixels=-5;this.txtFree.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtFree.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtFree.textHorizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtFree.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtFree.color="#FFFFFF";this.txtFree.text="Free";this.txtFree.fontSize="45px";this.txtFree.fontFamily="gamefont";this.txtFree.leftInPixels=0;this.txtFree.isPointerBlocker=!1;this.txtFree.isHitTestVisible=!1;this.txtFree.shadowOffsetX=0;this.txtFree.shadowOffsetY=6;this.txtFree.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtFree.outlineColor=
"rgb(79,48,11)";this.txtFree.outlineWidth=5;this.txtFree.shadowBlur=0;this.btnClaim.addControl(this.txtFree);this.imgIconXl=new BABYLON.GUI.Image("imgIconXl");this.imgIconXl.transformCenterX=.5;this.imgIconXl.transformCenterY=.5;this.imgIconXl.isPointerBlocker=!1;this.imgIconXl.isHitTestVisible=!1;this.imgIconXl.scaleX=this.imgIconXl.scaleY=.55;SetImageFromSpritesheet(this.imgIconXl,getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_ad_xl.png");this.imgIconXl.topInPixels=-30;this.imgIconXl.leftInPixels=
110;this.btnClaim.addControl(this.imgIconXl);this.btnClaim.onPointerClickObservable.add(this.onClaimPressed)},updateTexts:function(){this.offer&&("help"==this.offer.options.offerType?(this.txtReward.topInPixels=7,this.txtReward.fontSize="105px",this.txtReward.text=""+this.offer.options.offerPrice,updateTextToWidth(this.txtReward,screenGame.guiTexture.getContext(),480,105,1)):(this.txtReward.topInPixels=57,this.txtReward.fontSize="48px",this.txtReward.text=Str("X2_"+this.offer.options.offerType.toUpperCase()),
updateTextToWidth(this.txtReward,screenGame.guiTexture.getContext(),480,48,1)));this.titleStr&&(this.txtTitle.text=Str(this.titleStr))},onClosePressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenOffer.offer.alreadyPaid=0,screenOffer.offer.delay=1200,screenTopPanel.showScene(),screenOffer.hideScene(function(){activeScene.gamePaused=screenOffer.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();
Buttons.enabled=!0}))},onClaimPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(soundManager.playSound("button"),inlHelper.rewardAds.showRewardedAd(function(){Buttons.enabled=!1;screenOffer.offer.markedForDelete=!0;screenTopPanel.showScene();screenOffer.hideScene(function(){activeScene.gamePaused=screenOffer.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0})},function(){a=10},this))},enableControls:function(){enableButton(this.btnClose);
enableButton(this.btnClaim)},disableControls:function(){disableButton(this.btnClose);disableButton(this.btnClaim)},hideScene:function(b){void 0===b&&(b=null);this.disableControls();screenParticles.particles.Reset();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",-50*Resolution.SCALE,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,SCENE_TRANSITION_DURATION,
e,1,!1,function(){screenOffer.guiRoot.isVisible=!1;null!=b&&b()})},showScene:function(b){void 0===b&&(b=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.guiRoot.topInPixels=50*Resolution.SCALE;this.enableControls();this.onResize();VirtualJoystick.instance.reset();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",0,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,
"alpha",1,SCENE_TRANSITION_DURATION,e,1,!1,function(){null!=b&&b()})},beforeRender:function(){!this.guiRoot.isVisible||1>this.guiRoot.alpha||(this.imgShine.rotation+=.005*activeScene.getCpuSpeedMul(),this.imgShine.scaleOffs+=.1*activeScene.getCpuSpeedMul(),this.imgShine.scaleX=this.imgShine.scaleY=3+Math.abs(this.imgShine.scaleOffs%10-5)/5,0==activeScene.frameCounter%10&&screenParticles.particles.CreateTwinkle(getRandomIntInRange(-250,250)*Resolution.SCALE,-60+getRandomInt(60)*Resolution.SCALE,700))},
onResize:function(){if(this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.imgBackground.resize(b,e);b>e?this.pnlOffer.scaleTo(.8*Resolution.SCALE):(this.pnlOffer.scaleTo(1.2*Resolution.SCALE),1E3*this.pnlOffer.scaleY>e&&this.pnlOffer.scaleTo(e/1E3));this.resizeShadows()}},resizeShadows:function(){var b=this.txtTitle._fontSize._value/50;this.txtTitle.shadowOffsetX=getShadowOffs(0);this.txtTitle.shadowOffsetY=getShadowOffs(4*b);this.txtTitle.outlineWidth=getOutlineOffs(7*
b);b=this.txtReward._fontSize._value/48;this.txtReward.shadowOffsetX=getShadowOffs(0);this.txtReward.shadowOffsetY=getShadowOffs(4*b);this.txtReward.outlineWidth=getOutlineOffs(5*b);b=this.txtFree._fontSize._value/45;this.txtFree.shadowOffsetX=getShadowOffs(0);this.txtFree.shadowOffsetY=getShadowOffs(4*b);this.txtFree.outlineWidth=getOutlineOffs(5*b)}};var ScreenSoldProducts=function(b){ScreenSoldProducts.instance=this;this.create(b)};ScreenSoldProducts.instance=null;
ScreenSoldProducts.prototype={create:function(b){this.scene=b;this.createGui();this.disableControls();this.soldProducts=[];this.totalSoldProducts=0;this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createBackground(this.guiRoot);this.createSoldProductsPanel(this.pnlRoot);this.createBody(this.pnlSoldProducts,0);this.createTitle(this.pnlSoldProducts,-210)},createRootPanel:function(b){this.pnlRoot=
new BABYLON.GUI.Rectangle("ScreenSoldProducts.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;this.pnlRoot.zIndex=60;b.addControl(this.pnlRoot);return this.pnlRoot},createSoldProductsPanel:function(b){this.pnlSoldProducts=new BABYLON.GUI.Rectangle("pnlSoldProducts");
this.pnlSoldProducts.transformCenterX=.5;this.pnlSoldProducts.transformCenterY=.5;this.pnlSoldProducts.isPointerBlocker=!1;this.pnlSoldProducts.isHitTestVisible=!1;this.pnlSoldProducts.clipContent=!1;this.pnlSoldProducts.clipChildren=!1;this.pnlSoldProducts.widthInPixels=580;this.pnlSoldProducts.heightInPixels=960;this.pnlSoldProducts.thickness=0;this.pnlSoldProducts.color="yellow";b.addControl(this.pnlSoldProducts);this.pnlSoldProducts.scaleTo=function(e){this.scaleX=this.scaleY=e};return this.pnlSoldProducts},
createBackground:function(b){this.imgBackground=new BABYLON.GUI.Rectangle("imgBackground");this.imgBackground.transformCenterX=.5;this.imgBackground.transformCenterY=.5;this.imgBackground.isPointerBlocker=!0;this.imgBackground.isHitTestVisible=!1;this.imgBackground.clipContent=!1;this.imgBackground.clipChildren=!1;this.imgBackground.thickness=2;this.imgBackground.color="orange";this.imgBackground.background="rgba(27,147,27, 0.8)";b.addControl(this.imgBackground);this.imgBackground.resize=function(e,
h){h+=300*Resolution.SCALE;this.widthInPixels=e+5;this.heightInPixels=h}},createTitle:function(b,e){this.imgTitleBg=new BABYLON.GUI.Image("imgTitleBg");this.imgTitleBg.transformCenterX=.5;this.imgTitleBg.transformCenterY=.5;this.imgTitleBg.isPointerBlocker=!1;this.imgTitleBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgTitleBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main_title_green.png");this.imgTitleBg.scaleX=this.imgTitleBg.scaleY=2;this.imgTitleBg.leftInPixels=0;this.imgTitleBg.topInPixels=
e;b.addControl(this.imgTitleBg);this.txtTitle=new BABYLON.GUI.TextBlock("txtTitle");this.txtTitle.textWrapping=!0;this.txtTitle.leftInPixels=0;this.txtTitle.topInPixels=e-5;this.txtTitle.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
this.txtTitle.color="#FFFFFF";this.txtTitle.text="SoldProducts";this.txtTitle.fontSize="50px";this.txtTitle.fontFamily="gamefont";this.txtTitle.leftInPixels=0;this.txtTitle.isPointerBlocker=!1;this.txtTitle.isHitTestVisible=!1;this.txtTitle.shadowOffsetX=0;this.txtTitle.shadowOffsetY=6;this.txtTitle.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";this.txtTitle.outlineColor="rgb(0,0,0)";this.txtTitle.outlineWidth=5;this.txtTitle.shadowBlur=0;b.addControl(this.txtTitle)},createBody:function(b,
e){this.imgShine=new BABYLON.GUI.Image("imgShine");this.imgShine.transformCenterX=.5;this.imgShine.transformCenterY=.5;this.imgShine.isPointerBlocker=!1;this.imgShine.isHitTestVisible=!1;this.imgShine.scaleX=this.imgShine.scaleY=3;SetImageFromSpritesheet(this.imgShine,getAssetImage("pak1"),getAssetImageFrames("pak1"),"shine.png");this.imgShine.leftInPixels=0;this.imgShine.topInPixels=e;this.imgShine.scaleOffs=0;b.addControl(this.imgShine);this.imgBodyBg=new BABYLON.GUI.Image("imgBodyBg");this.imgBodyBg.transformCenterX=
.5;this.imgBodyBg.transformCenterY=.5;this.imgBodyBg.isPointerBlocker=!1;this.imgBodyBg.isHitTestVisible=!1;this.imgBodyBg.scaleX=this.imgBodyBg.scaleY=2;SetImageFromSpritesheet(this.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_reward_green_bg.png");this.imgBodyBg.leftInPixels=0;this.imgBodyBg.topInPixels=e;b.addControl(this.imgBodyBg);this.btnContinue=BABYLON.GUI.Button.CreateImageOnlyButton("btnContinue");this.btnContinue.children[0].transformCenterY=.5;this.btnContinue.children[0].transformCenterX=
.5;this.btnContinue.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnContinue.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnContinue.transformCenterX=.5;this.btnContinue.transformCenterY=.5;this.btnContinue.topInPixels=e+175;this.btnContinue.leftInPixels=0;this.btnContinue.scaleX=this.btnContinue.scaleY=2;this.btnContinue.clipChildren=!1;this.btnContinue.clipContent=!1;b.addControl(this.btnContinue);SetImageFromSpritesheet(this.btnContinue.children[0],
getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_free.png");ResetGuiButtonAppearance(this.btnContinue,this.btnContinue.children[0].sourceWidth,this.btnContinue.children[0].sourceHeight);this.btnContinue.heightInPixels=100;this.txtContinue=new BABYLON.GUI.TextBlock("txtContinue");this.txtContinue.textWrapping=!0;this.txtContinue.leftInPixels=0;this.txtContinue.topInPixels=-5;this.txtContinue.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtContinue.verticalAlignment=
BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtContinue.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtContinue.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtContinue.color="#FFFFFF";this.txtContinue.text="Free";this.txtContinue.fontSize="45px";this.txtContinue.fontFamily="gamefont";this.txtContinue.leftInPixels=0;this.txtContinue.isPointerBlocker=!1;this.txtContinue.isHitTestVisible=!1;this.txtContinue.shadowOffsetX=0;this.txtContinue.shadowOffsetY=
6;this.txtContinue.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtContinue.outlineColor="rgb(79,48,11)";this.txtContinue.outlineWidth=5;this.txtContinue.shadowBlur=0;this.btnContinue.addControl(this.txtContinue);this.btnContinue.onPointerClickObservable.add(this.onContinuePressed)},resetSoldProducts:function(){for(;0<this.soldProducts.length;)this.soldProducts[0].dispose(),this.soldProducts.splice(0,1);this.totalSoldProducts=0},createSoldProducts:function(b){this.resetSoldProducts();
for(var e=0;e<b.length;e++)"registerBox"==b[e].product&&(b.splice(e,1),e--);var h=90,f=100,k=1;e=1;var m=b.length;4<m&&(m=Math.ceil(b.length/2),e=2);4<m&&(k=.8,h=f=100*k);4>m&&2>e&&(k=1.3,h=f=100*k);var n=-(m*h)/2+h/2,y=-(e*f)/2+10*k;for(e=0;e<b.length;e++){this.totalSoldProducts+=b[e].count;var x=this.createSoldProduct(this.pnlSoldProducts,n,y,b[e].product,b[e].count);x.scaleX=x.scaleY=k;this.soldProducts.push(x);n+=h;e==m-1&&(n=-(m*h)/2+h/2,b.length-m<m&&(n+=h/2),y+=f)}},createSoldProduct:function(b,
e,h,f,k){var m=new BABYLON.GUI.Rectangle("pnlSoldProduct_"+f);m.transformCenterX=.5;m.transformCenterY=.5;m.isPointerBlocker=!1;m.isHitTestVisible=!1;m.clipContent=!1;m.clipChildren=!1;m.thickness=0;m.color="yellow";m.widthInPixels=100;m.heightInPixels=100;m.topInPixels=h;m.leftInPixels=e;b.addControl(m);m.imgProduct=new BABYLON.GUI.Image("imgBodyBg");m.imgProduct.transformCenterX=.5;m.imgProduct.transformCenterY=.5;m.imgProduct.isPointerBlocker=!1;m.imgProduct.isHitTestVisible=!1;SetImageFromSpritesheet(m.imgProduct,
getAssetImage("pak1"),getAssetImageFrames("pak1"),"icon_player_"+f+".png");m.imgProduct.leftInPixels=0;m.imgProduct.topInPixels=0;m.addControl(m.imgProduct);m.txtCount=new BABYLON.GUI.TextBlock("txtContinue");m.txtCount.textWrapping=!0;m.txtCount.leftInPixels=0;m.txtCount.topInPixels=30;m.txtCount.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;m.txtCount.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;m.txtCount.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
m.txtCount.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;m.txtCount.color="#FFFFFF";m.txtCount.text=""+k;m.txtCount.fontSize="45px";m.txtCount.fontFamily="gamefont";m.txtCount.leftInPixels=0;m.txtCount.isPointerBlocker=!1;m.txtCount.isHitTestVisible=!1;m.txtCount.shadowOffsetX=0;m.txtCount.shadowOffsetY=6;m.txtCount.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(14,71,2)":"rgba(80,80,80,0)";m.txtCount.outlineColor="rgb(14,71,2)";m.txtCount.outlineWidth=5;m.txtCount.shadowBlur=0;m.addControl(m.txtCount);
return m},updateTexts:function(){this.txtTitle.text=Str("SOLD_X_PRODUCTS").replaceAll("[X]",""+this.totalSoldProducts);updateTextToWidth(this.txtTitle,screenGame.guiTexture.getContext(),400,50,1);this.txtContinue.text=Str("CONTINUE");updateTextToWidth(this.txtContinue,screenGame.guiTexture.getContext(),300,35,1)},onContinuePressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenTopPanel.showScene(),screenSoldProducts.hideScene(function(){activeScene.gamePaused=
screenSoldProducts.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0;canvas.focus();setTimeout(function(){screenGame.doNotShowSettingsOnPause=!0},500);inlHelper.ads.triggerAdPoint({adType:AD_TYPES.GAME_OVER})}))},enableControls:function(){enableButton(this.btnContinue)},disableControls:function(){disableButton(this.btnContinue)},hideScene:function(b){void 0===b&&(b=null);this.disableControls();screenParticles.particles.Reset();var e={func:BABYLON.CircleEase,
mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",-50*Resolution.SCALE,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,SCENE_TRANSITION_DURATION,e,1,!1,function(){screenSoldProducts.guiRoot.isVisible=!1;null!=b&&b()})},showScene:function(b,e){void 0===e&&(e=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.guiRoot.topInPixels=50*Resolution.SCALE;this.createSoldProducts(b);this.enableControls();
this.onResize();this.updateTexts();b={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",0,SCENE_TRANSITION_DURATION,b,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",1,SCENE_TRANSITION_DURATION,b,1,!1,function(){null!=e&&e()})},beforeRender:function(){!this.guiRoot.isVisible||1>this.guiRoot.alpha||(this.imgShine.rotation+=.005*activeScene.getCpuSpeedMul(),this.imgShine.scaleOffs+=.1*activeScene.getCpuSpeedMul(),
this.imgShine.scaleX=this.imgShine.scaleY=3+Math.abs(this.imgShine.scaleOffs%10-5)/5,0==activeScene.frameCounter%10&&screenParticles.particles.CreateTwinkle(getRandomIntInRange(-250,250)*Resolution.SCALE,-60+getRandomInt(60)*Resolution.SCALE,700),0==activeScene.frameCounter%40&&screenParticles.particles.CreateFallingCash(getRandomIntInRange(-420,420)*Resolution.SCALE,.55*-engineRenderHeight))},onResize:function(){if(this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();
this.imgBackground.resize(b,e);b>e?this.pnlSoldProducts.scaleTo(.8*Resolution.SCALE):(this.pnlSoldProducts.scaleTo(1.2*Resolution.SCALE),1E3*this.pnlSoldProducts.scaleY>e&&this.pnlSoldProducts.scaleTo(e/1E3));this.resizeShadows()}},resizeShadows:function(){var b=this.txtTitle._fontSize._value/50;this.txtTitle.shadowOffsetX=getShadowOffs(0);this.txtTitle.shadowOffsetY=getShadowOffs(4*b);this.txtTitle.outlineWidth=getOutlineOffs(7*b);for(var e=0;e<this.soldProducts.length;e++)b=this.soldProducts[e].txtCount._fontSize._value/
45,this.soldProducts[e].txtCount.shadowOffsetX=getShadowOffs(0),this.soldProducts[e].txtCount.shadowOffsetY=getShadowOffs(4*b),this.soldProducts[e].txtCount.outlineWidth=getOutlineOffs(6*b);b=this.txtContinue._fontSize._value/45;this.txtContinue.shadowOffsetX=getShadowOffs(0);this.txtContinue.shadowOffsetY=getShadowOffs(4*b);this.txtContinue.outlineWidth=getOutlineOffs(5*b)}};var ScreenGameWin=function(b){ScreenGameWin.instance=this;this.create(b)};ScreenGameWin.instance=null;
ScreenGameWin.prototype={create:function(b){this.scene=b;this.createGui();this.disableControls();this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createBackground(this.guiRoot);this.createGameWinPanel(this.pnlRoot);this.createBody(this.pnlGameWin,0);this.createTitle(this.pnlGameWin,-260)},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenGameWin.pnlRoot");this.pnlRoot.transformCenterX=
.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;this.pnlRoot.zIndex=150;b.addControl(this.pnlRoot);return this.pnlRoot},createGameWinPanel:function(b){this.pnlGameWin=new BABYLON.GUI.Rectangle("pnlGameWin");this.pnlGameWin.transformCenterX=.5;this.pnlGameWin.transformCenterY=
.5;this.pnlGameWin.isPointerBlocker=!1;this.pnlGameWin.isHitTestVisible=!1;this.pnlGameWin.clipContent=!1;this.pnlGameWin.clipChildren=!1;this.pnlGameWin.widthInPixels=580;this.pnlGameWin.heightInPixels=960;this.pnlGameWin.thickness=0;this.pnlGameWin.color="yellow";b.addControl(this.pnlGameWin);this.pnlGameWin.scaleTo=function(e){this.scaleX=this.scaleY=e};return this.pnlGameWin},createBackground:function(b){this.imgBackground=new BABYLON.GUI.Image("imgBackground");this.imgBackground.transformCenterX=
.5;this.imgBackground.transformCenterY=.5;this.imgBackground.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.imgBackground.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.imgBackground.domImage=AssetLoader.instance.loadedImages["win_bg.jpg"];this.imgBackground.isPointerBlocker=!1;this.imgBackground.isHitTestVisible=!0;this.imgBackground.widthInPixels=1920;this.imgBackground.heightInPixels=1080;this.imgBackground.isVisible=!0;b.addControl(this.imgBackground);
this.imgBackground.resize=function(e,h){e>h?(this.scaleY=this.scaleX=(e+5)/this.widthInPixels,this.heightInPixels*this.scaleY<h&&(this.scaleX=this.scaleY=(h+5)/this.heightInPixels)):(this.scaleX=this.scaleY=(h+5)/this.heightInPixels,this.widthInPixels*this.scaleX<e&&(this.scaleY=this.scaleX=(e+5)/this.widthInPixels))}},createTitle:function(b,e){this.imgTitleBg=new BABYLON.GUI.Image("imgTitleBg");this.imgTitleBg.transformCenterX=.5;this.imgTitleBg.transformCenterY=.5;this.imgTitleBg.isPointerBlocker=
!1;this.imgTitleBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgTitleBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main_title_win.png");this.imgTitleBg.scaleX=this.imgTitleBg.scaleY=2;this.imgTitleBg.leftInPixels=0;this.imgTitleBg.topInPixels=e;b.addControl(this.imgTitleBg);this.txtTitle=new BABYLON.GUI.TextBlock("txtTitle");this.txtTitle.textWrapping=!0;this.txtTitle.leftInPixels=0;this.txtTitle.topInPixels=e-5;this.txtTitle.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
this.txtTitle.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.color="#FFFFFF";this.txtTitle.text="GameWin";this.txtTitle.fontSize="50px";this.txtTitle.fontFamily="gamefont";this.txtTitle.leftInPixels=0;this.txtTitle.isPointerBlocker=!1;this.txtTitle.isHitTestVisible=!1;this.txtTitle.shadowOffsetX=0;this.txtTitle.shadowOffsetY=
6;this.txtTitle.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtTitle.outlineColor="rgb(79,48,11)";this.txtTitle.outlineWidth=5;this.txtTitle.shadowBlur=0;b.addControl(this.txtTitle)},createBody:function(b,e){this.imgShine=new BABYLON.GUI.Image("imgShine");this.imgShine.transformCenterX=.5;this.imgShine.transformCenterY=.5;this.imgShine.isPointerBlocker=!1;this.imgShine.isHitTestVisible=!1;this.imgShine.scaleX=this.imgShine.scaleY=3;SetImageFromSpritesheet(this.imgShine,
getAssetImage("pak1"),getAssetImageFrames("pak1"),"win_rot_effect.png");this.imgShine.leftInPixels=0;this.imgShine.topInPixels=e;this.imgShine.scaleOffs=0;b.addControl(this.imgShine);this.imgBodyBg=new BABYLON.GUI.Image("imgBodyBg");this.imgBodyBg.transformCenterX=.5;this.imgBodyBg.transformCenterY=.5;this.imgBodyBg.isPointerBlocker=!1;this.imgBodyBg.isHitTestVisible=!1;this.imgBodyBg.scaleX=this.imgBodyBg.scaleY=2;SetImageFromSpritesheet(this.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),
"table_win_bg.png");this.imgBodyBg.leftInPixels=0;this.imgBodyBg.topInPixels=e;b.addControl(this.imgBodyBg);this.txtMessage=new BABYLON.GUI.TextBlock("txtMessage");this.txtMessage.textWrapping=!0;this.txtMessage.leftInPixels=0;this.txtMessage.topInPixels=-90;this.txtMessage.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtMessage.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtMessage.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
this.txtMessage.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtMessage.color="#FFFFFF";this.txtMessage.text="CONFIRM";this.txtMessage.fontSize="43px";this.txtMessage.fontFamily="gamefont";this.txtMessage.leftInPixels=0;this.txtMessage.isPointerBlocker=!1;this.txtMessage.isHitTestVisible=!1;this.txtMessage.shadowOffsetX=0;this.txtMessage.shadowOffsetY=6;this.txtMessage.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtMessage.outlineColor="rgb(79,48,11)";
this.txtMessage.outlineWidth=5;this.txtMessage.shadowBlur=0;this.txtMessage.thickness=1;this.txtMessage.lineSpacing=-12;this.txtMessage.widthInPixels=450;this.txtMessage.heightInPixels=200;b.addControl(this.txtMessage);this.txtInfo=new BABYLON.GUI.TextBlock("txtInfo");this.txtInfo.textWrapping=!0;this.txtInfo.leftInPixels=0;this.txtInfo.topInPixels=64;this.txtInfo.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtInfo.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
this.txtInfo.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtInfo.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtInfo.color="#FFFFFF";this.txtInfo.text="CONFIRM";this.txtInfo.fontSize="20px";this.txtInfo.fontFamily="gamefont";this.txtInfo.leftInPixels=0;this.txtInfo.isPointerBlocker=!1;this.txtInfo.isHitTestVisible=!1;this.txtInfo.shadowOffsetX=0;this.txtInfo.shadowOffsetY=6;this.txtInfo.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":
"rgba(80,80,80,0)";this.txtInfo.outlineColor="rgb(79,48,11)";this.txtInfo.outlineWidth=5;this.txtInfo.shadowBlur=0;this.txtInfo.thickness=1;this.txtInfo.lineSpacing=0;this.txtInfo.widthInPixels=450;this.txtInfo.heightInPixels=200;b.addControl(this.txtInfo);this.btnContinue=BABYLON.GUI.Button.CreateImageOnlyButton("btnContinue");this.btnContinue.children[0].transformCenterY=.5;this.btnContinue.children[0].transformCenterX=.5;this.btnContinue.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
this.btnContinue.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnContinue.transformCenterX=.5;this.btnContinue.transformCenterY=.5;this.btnContinue.topInPixels=e+195;this.btnContinue.leftInPixels=0;this.btnContinue.scaleX=this.btnContinue.scaleY=2;this.btnContinue.clipChildren=!1;this.btnContinue.clipContent=!1;b.addControl(this.btnContinue);SetImageFromSpritesheet(this.btnContinue.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_continue_win.png");
ResetGuiButtonAppearance(this.btnContinue,this.btnContinue.children[0].sourceWidth,this.btnContinue.children[0].sourceHeight);this.btnContinue.scaleX=2;this.btnContinue.scaleY=1.8;this.btnContinue.heightInPixels=100;this.txtContinue=new BABYLON.GUI.TextBlock("txtContinue");this.txtContinue.textWrapping=!0;this.txtContinue.leftInPixels=0;this.txtContinue.topInPixels=-2;this.txtContinue.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtContinue.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
this.txtContinue.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtContinue.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtContinue.color="#FFFFFF";this.txtContinue.text="Free";this.txtContinue.fontSize="45px";this.txtContinue.fontFamily="gamefont";this.txtContinue.leftInPixels=0;this.txtContinue.isPointerBlocker=!1;this.txtContinue.isHitTestVisible=!1;this.txtContinue.shadowOffsetX=0;this.txtContinue.shadowOffsetY=6;this.txtContinue.shadowColor=
TEXT_SHADOWS_ENABLED?"rgb(2,70,2)":"rgba(80,80,80,0)";this.txtContinue.outlineColor="rgb(2,70,2)";this.txtContinue.outlineWidth=5;this.txtContinue.shadowBlur=0;this.txtContinue.scaleY=1.11;this.btnContinue.addControl(this.txtContinue);this.btnContinue.onPointerClickObservable.add(this.onContinuePressed)},updateTexts:function(){this.txtTitle.text=Str("CONGRATULATIONS");updateTextToWidth(this.txtTitle,screenGame.guiTexture.getContext(),400,50,1);this.txtMessage.text=Str("GAME_WIN_MESSAGE");this.txtInfo.text=
STR("GAME_WIN_INFO");this.txtContinue.text=Str("CONTINUE");updateTextToWidth(this.txtContinue,screenGame.guiTexture.getContext(),300,35,1)},onContinuePressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenTopPanel.showScene(),screenGameWin.hideScene(function(){activeScene.gamePaused=screenGameWin.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0}))},enableControls:function(){enableButton(this.btnContinue)},
disableControls:function(){disableButton(this.btnContinue)},hideScene:function(b){void 0===b&&(b=null);this.disableControls();screenParticles.particles.Reset();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",-50*Resolution.SCALE,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,SCENE_TRANSITION_DURATION,e,1,!1,function(){screenGameWin.guiRoot.isVisible=!1;null!=
b&&b()})},showScene:function(b){void 0===b&&(b=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.guiRoot.topInPixels=50*Resolution.SCALE;this.enableControls();this.onResize();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",0,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",1,SCENE_TRANSITION_DURATION,e,1,!1,function(){null!=b&&b()})},beforeRender:function(){!this.guiRoot.isVisible||
1>this.guiRoot.alpha||(this.imgShine.rotation+=.005*activeScene.getCpuSpeedMul(),this.imgShine.scaleOffs+=.1*activeScene.getCpuSpeedMul(),this.imgShine.scaleX=this.imgShine.scaleY=3+Math.abs(this.imgShine.scaleOffs%10-5)/5,0==activeScene.frameCounter%10&&screenParticles.particles.CreateTwinkle(getRandomIntInRange(-250,250)*Resolution.SCALE,-60+getRandomInt(60)*Resolution.SCALE,700),0==activeScene.frameCounter%40&&screenParticles.particles.CreateFallingCash(getRandomIntInRange(-420,420)*Resolution.SCALE,
.55*-engineRenderHeight))},onResize:function(){if(this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.imgBackground.resize(b,e);b>e?this.pnlGameWin.scaleTo(.8*Resolution.SCALE):(this.pnlGameWin.scaleTo(1.2*Resolution.SCALE),1E3*this.pnlGameWin.scaleY>e&&this.pnlGameWin.scaleTo(e/1E3));this.resizeShadows()}},resizeShadows:function(){var b=this.txtTitle._fontSize._value/50;this.txtTitle.shadowOffsetX=getShadowOffs(0);this.txtTitle.shadowOffsetY=getShadowOffs(4*b);this.txtTitle.outlineWidth=
getOutlineOffs(7*b);b=this.txtMessage._fontSize._value/48;this.txtMessage.shadowOffsetX=getShadowOffs(0);this.txtMessage.shadowOffsetY=getShadowOffs(4*b);this.txtMessage.outlineWidth=getOutlineOffs(8*b);b=this.txtInfo._fontSize._value/20;this.txtInfo.shadowOffsetX=getShadowOffs(0);this.txtInfo.shadowOffsetY=getShadowOffs(3*b);this.txtInfo.outlineWidth=getOutlineOffs(5*b);b=this.txtContinue._fontSize._value/45;this.txtContinue.shadowOffsetX=getShadowOffs(0);this.txtContinue.shadowOffsetY=getShadowOffs(4*
b);this.txtContinue.outlineWidth=getOutlineOffs(5*b)}};var ScreenSettings=function(b){ScreenSettings.instance=this;this.create(b)};ScreenSettings.instance=null;
ScreenSettings.prototype={create:function(b){this.scene=b;this.createGui();this.disableControls();this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createBackground(this.guiRoot);this.createSettingsPanel(this.pnlRoot);this.createBody(this.pnlSettings,0);this.createTitle(this.pnlSettings,-350);this.createMusicAndSoundsSettings(this.pnlSettings,-230);this.createLanguageSettings(this.pnlSettings,
-35);this.createLogo(this.pnlSettings,120);this.createResetShopButton(this.pnlSettings,292)},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenSettings.pnlRoot");this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;this.pnlRoot.zIndex=
100;b.addControl(this.pnlRoot);return this.pnlRoot},createSettingsPanel:function(b){this.pnlSettings=new BABYLON.GUI.Rectangle("pnlSettings");this.pnlSettings.transformCenterX=.5;this.pnlSettings.transformCenterY=.5;this.pnlSettings.isPointerBlocker=!1;this.pnlSettings.isHitTestVisible=!1;this.pnlSettings.clipContent=!1;this.pnlSettings.clipChildren=!1;this.pnlSettings.widthInPixels=580;this.pnlSettings.heightInPixels=960;this.pnlSettings.thickness=0;this.pnlSettings.color="yellow";b.addControl(this.pnlSettings);
this.pnlSettings.scaleTo=function(e){this.scaleX=this.scaleY=e};return this.pnlSettings},createBackground:function(b){this.imgBackground=new BABYLON.GUI.Rectangle("imgBackground");this.imgBackground.transformCenterX=.5;this.imgBackground.transformCenterY=.5;this.imgBackground.isPointerBlocker=!0;this.imgBackground.isHitTestVisible=!1;this.imgBackground.clipContent=!1;this.imgBackground.clipChildren=!1;this.imgBackground.thickness=2;this.imgBackground.color="orange";this.imgBackground.background="rgba(24,94,211, 0.8)";
b.addControl(this.imgBackground);this.imgBackground.resize=function(e,h){h+=300*Resolution.SCALE;this.widthInPixels=e+5;this.heightInPixels=h}},createTitle:function(b,e){this.imgTitleBg=new BABYLON.GUI.Image("imgTitleBg");this.imgTitleBg.transformCenterX=.5;this.imgTitleBg.transformCenterY=.5;this.imgTitleBg.isPointerBlocker=!1;this.imgTitleBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgTitleBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main_title.png");this.imgTitleBg.scaleX=
this.imgTitleBg.scaleY=2;this.imgTitleBg.leftInPixels=0;this.imgTitleBg.topInPixels=e;b.addControl(this.imgTitleBg);this.txtTitle=new BABYLON.GUI.TextBlock("txtTitle");this.txtTitle.textWrapping=!0;this.txtTitle.leftInPixels=0;this.txtTitle.topInPixels=e-5;this.txtTitle.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
this.txtTitle.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.color="#FFFFFF";this.txtTitle.text="Settings";this.txtTitle.fontSize="50px";this.txtTitle.fontFamily="gamefont";this.txtTitle.leftInPixels=0;this.txtTitle.isPointerBlocker=!1;this.txtTitle.isHitTestVisible=!1;this.txtTitle.shadowOffsetX=0;this.txtTitle.shadowOffsetY=6;this.txtTitle.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";this.txtTitle.outlineColor="rgb(0,0,0)";this.txtTitle.outlineWidth=
5;this.txtTitle.shadowBlur=0;b.addControl(this.txtTitle);this.btnClose=BABYLON.GUI.Button.CreateImageOnlyButton("btnClose");this.btnClose.children[0].transformCenterY=.5;this.btnClose.children[0].transformCenterX=.5;this.btnClose.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnClose.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnClose.transformCenterX=.5;this.btnClose.transformCenterY=.5;this.btnClose.topInPixels=e-25;this.btnClose.leftInPixels=
230;b.addControl(this.btnClose);SetImageFromSpritesheet(this.btnClose.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"button_close.png");ResetGuiButtonAppearance(this.btnClose,this.btnClose.children[0].sourceWidth,this.btnClose.children[0].sourceHeight);this.btnClose.onPointerClickObservable.add(this.onClosePressed)},createBody:function(b,e){this.imgBodyBg=new BABYLON.GUI.Image("imgBodyBg");this.imgBodyBg.transformCenterX=.5;this.imgBodyBg.transformCenterY=.5;this.imgBodyBg.isPointerBlocker=
!1;this.imgBodyBg.isHitTestVisible=!1;this.imgBodyBg.scaleX=this.imgBodyBg.scaleY=2;SetImageFromSpritesheet(this.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_settings_bg.png");this.imgBodyBg.leftInPixels=0;this.imgBodyBg.topInPixels=e;b.addControl(this.imgBodyBg)},createLogo:function(b,e){this.imgLogoBg=new BABYLON.GUI.Image("imgLogoBg");this.imgLogoBg.transformCenterX=.5;this.imgLogoBg.transformCenterY=.5;this.imgLogoBg.isPointerBlocker=!1;this.imgLogoBg.isHitTestVisible=!1;
SetImageFromSpritesheet(this.imgLogoBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"settings_logo.png");this.imgLogoBg.leftInPixels=0;this.imgLogoBg.topInPixels=e;b.addControl(this.imgLogoBg);!1===gameConfig.inlLogoAllowed&&(SetImageFromSpritesheet(this.imgLogoBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"pose_base.png"),this.imgLogoBg.topInPixels-=20,this.imgLogoBg.scaleX=this.imgLogoBg.scaleY=1.25)},createMusicAndSoundsSettings:function(b,e){this.imgMusicBg=new BABYLON.GUI.Image("imgMusicBg");
this.imgMusicBg.transformCenterX=.5;this.imgMusicBg.transformCenterY=.5;this.imgMusicBg.isPointerBlocker=!1;this.imgMusicBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgMusicBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"settings_bar.png");this.imgMusicBg.leftInPixels=0;this.imgMusicBg.topInPixels=e-12;b.addControl(this.imgMusicBg);this.btnMusic=BABYLON.GUI.Button.CreateImageOnlyButton("btnMusic");this.btnMusic.leftInPixels=-183;this.btnMusic.topInPixels=e-14;b.addControl(this.btnMusic);
SetImageFromSpritesheet(this.btnMusic.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"music_button.png");ResetGuiButtonAppearance(this.btnMusic,this.btnMusic.children[0].sourceWidth,this.btnMusic.children[0].sourceHeight);this.btnMusic.onPointerClickObservable.add(this.onMusicPressed);this.sldrMusicVolume=createSliderControl(b,42,this.btnMusic.topInPixels,"volume_bar.png","volume_bar_fill.png","settings_bar_indicator.png");this.sldrMusicVolume.sliderGap=20;this.sldrMusicVolume.scaleX=
this.sldrMusicVolume.scaleY=1;this.sldrMusicVolume.onValueChanged=function(h){1.5>h&&(h=0);0<h&&(SavedMusicVolume=h);soundManager.setMusicVolume(h/100);0==h?SetImageFromSpritesheet(screenSettings.btnMusic.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"music_button_2.png"):SetImageFromSpritesheet(screenSettings.btnMusic.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"music_button.png")};this.imgSoundsBg=new BABYLON.GUI.Image("imgSoundsBg");this.imgSoundsBg.transformCenterX=
.5;this.imgSoundsBg.transformCenterY=.5;this.imgSoundsBg.isPointerBlocker=!1;this.imgSoundsBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgSoundsBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"settings_bar.png");this.imgSoundsBg.leftInPixels=0;this.imgSoundsBg.topInPixels=this.btnMusic.topInPixels+105;b.addControl(this.imgSoundsBg);this.btnSounds=BABYLON.GUI.Button.CreateImageOnlyButton("btnSounds");this.btnSounds.leftInPixels=this.btnMusic.leftInPixels;this.btnSounds.topInPixels=this.imgSoundsBg.topInPixels;
b.addControl(this.btnSounds);SetImageFromSpritesheet(this.btnSounds.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"volume_button.png");ResetGuiButtonAppearance(this.btnSounds,this.btnSounds.children[0].sourceWidth,this.btnSounds.children[0].sourceHeight);this.btnSounds.onPointerClickObservable.add(this.onSoundsPressed);this.sldrSoundsVolume=createSliderControl(b,this.sldrMusicVolume.leftInPixels,this.btnSounds.topInPixels,"volume_bar.png","volume_bar_fill.png","settings_bar_indicator.png");
this.sldrSoundsVolume.sliderGap=20;this.sldrSoundsVolume.scaleX=this.sldrSoundsVolume.scaleY=1;this.sldrSoundsVolume.scaleTo=function(h){};this.sldrSoundsVolume.onValueChanged=function(h){1.5>h&&(h=0);0<h&&(SavedSoundVolume=h);soundManager.setSoundsVolume(h/100);0==h?SetImageFromSpritesheet(screenSettings.btnSounds.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"volume_button_2.png"):SetImageFromSpritesheet(screenSettings.btnSounds.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),
"volume_button.png")}},createLanguageSettings:function(b,e){this.imgLangBg=new BABYLON.GUI.Image("imgLangBg");this.imgLangBg.transformCenterX=.5;this.imgLangBg.transformCenterY=.5;this.imgLangBg.isPointerBlocker=!1;this.imgLangBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgLangBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"lang_bg_panel.png");this.imgLangBg.leftInPixels=0;this.imgLangBg.topInPixels=e;b.addControl(this.imgLangBg);this.txtLanguage=new BABYLON.GUI.TextBlock("txtLanguage");
this.txtLanguage.textWrapping=!0;this.txtLanguage.leftInPixels=0;this.txtLanguage.topInPixels=e;this.txtLanguage.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtLanguage.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtLanguage.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtLanguage.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtLanguage.color="#FFFFFF";this.txtLanguage.text="English";
this.txtLanguage.fontSize="35px";this.txtLanguage.fontFamily="gamefont";this.txtLanguage.leftInPixels=0;this.txtLanguage.isPointerBlocker=!1;this.txtLanguage.isHitTestVisible=!1;this.txtLanguage.shadowOffsetX=0;this.txtLanguage.shadowOffsetY=6;this.txtLanguage.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0, 0.5)":"rgba(80,80,80,0)";this.txtLanguage.outlineColor="rgb(0,0,0)";this.txtLanguage.outlineWidth=5;this.txtLanguage.shadowBlur=0;b.addControl(this.txtLanguage);this.btnPrevLang=BABYLON.GUI.Button.CreateImageOnlyButton("btnPrevLang");
this.btnPrevLang.children[0].transformCenterY=.5;this.btnPrevLang.children[0].transformCenterX=.5;this.btnPrevLang.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnPrevLang.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnPrevLang.transformCenterX=.5;this.btnPrevLang.transformCenterY=.5;this.btnPrevLang.topInPixels=e;this.btnPrevLang.leftInPixels=-183;b.addControl(this.btnPrevLang);SetImageFromSpritesheet(this.btnPrevLang.children[0],
getAssetImage("pak1"),getAssetImageFrames("pak1"),"arrow_left.png");ResetGuiButtonAppearance(this.btnPrevLang,this.btnPrevLang.children[0].sourceWidth,this.btnPrevLang.children[0].sourceHeight);this.btnPrevLang.thickness=0;this.btnPrevLang.color="red";this.btnPrevLang.onPointerClickObservable.add(this.onPrevLangPressed);this.btnNextLang=BABYLON.GUI.Button.CreateImageOnlyButton("btnNextLang");this.btnNextLang.children[0].transformCenterY=.5;this.btnNextLang.children[0].transformCenterX=.5;this.btnNextLang.children[0].horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnNextLang.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnNextLang.transformCenterX=.5;this.btnNextLang.transformCenterY=.5;this.btnNextLang.topInPixels=e;this.btnNextLang.leftInPixels=-this.btnPrevLang.leftInPixels;b.addControl(this.btnNextLang);SetImageFromSpritesheet(this.btnNextLang.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"arrow_right.png");ResetGuiButtonAppearance(this.btnNextLang,
this.btnNextLang.children[0].sourceWidth,this.btnNextLang.children[0].sourceHeight);this.btnNextLang.thickness=0;this.btnNextLang.color="red";this.btnNextLang.onPointerClickObservable.add(this.onNextLangPressed)},createResetShopButton:function(b,e){this.btnResetShop=BABYLON.GUI.Button.CreateImageWithCenterTextButton("btnResetShop","ResetShop");this.btnResetShop.thickness=2;this.btnResetShop.children[0].transformCenterY=.5;this.btnResetShop.children[0].transformCenterX=.5;this.btnResetShop.children[0].horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnResetShop.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnResetShop.children[0].scaleX=2;this.btnResetShop.children[0].scaleY=2;this.btnResetShop.children[1].textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnResetShop.children[1].transformCenterY=0;this.btnResetShop.children[1].transformCenterX=0;this.btnResetShop.children[1].fontFamily="gamefont";this.btnResetShop.children[1].fontSize=
"50px";this.btnResetShop.children[1].topInPixels=-5;this.btnResetShop.children[1].leftInPixels=0;this.btnResetShop.children[1].color="rgba(255,255,255,1)";this.btnResetShop.children[1].shadowOffsetY=2;this.btnResetShop.children[1].shadowColor=TEXT_SHADOWS_ENABLED?"rgba(0,0,0,1)":"rgba(80,80,80,0)";this.btnResetShop.children[1].shadowBlur=0;this.btnResetShop.children[1].outlineColor="rgb(0,0,0)";this.btnResetShop.children[1].outlineWidth=5;this.btnResetShop.transformCenterX=.5;this.btnResetShop.transformCenterY=
.5;this.btnResetShop.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnResetShop.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnResetShop.topInPixels=e;this.btnResetShop.leftInPixels=0;this.btnResetShop.isHitTestVisible=!0;this.btnResetShop.isFocusInvisible=!0;this.btnResetShop.children[0].domImage=getAssetImage("pak1");SetImageFromSpritesheet(this.btnResetShop.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_reset.png");ResetGuiButtonAppearance(this.btnResetShop,
this.btnResetShop.children[0].sourceWidth*this.btnResetShop.children[0].scaleX,this.btnResetShop.children[0].sourceHeight*this.btnResetShop.children[0].scaleY);this.btnResetShop.clipContent=!1;this.btnResetShop.clipChildren=!1;this.btnResetShop.onPointerClickObservable.add(function(h,f){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenSettings.disableControls(),screenResetConfirmation.enableControls(),screenResetConfirmation.showScene(function(){Buttons.enabled=
!0}))});b.addControl(this.btnResetShop)},updateTexts:function(){this.txtTitle.text=Str("SETTINGS");this.txtLanguage.text=Str("LANG_NAME");this.btnResetShop.children[1].text=Str("RESET_MARKET");updateTextToWidth(this.btnResetShop.children[1],screenGame.guiTexture.getContext(),380,50,1)},onMusicPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(soundManager.playSound("button"),0<screenSettings.sldrMusicVolume.value?(SavedMusicVolume=screenSettings.sldrMusicVolume.value,screenSettings.sldrMusicVolume.value=
0):screenSettings.sldrMusicVolume.value=SavedMusicVolume)},onSoundsPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(soundManager.playSound("button"),0<screenSettings.sldrSoundsVolume.value?(SavedSoundVolume=screenSettings.sldrSoundsVolume.value,screenSettings.sldrSoundsVolume.value=0):screenSettings.sldrSoundsVolume.value=SavedSoundVolume)},onFullscreenPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),fullscreenToggle(),
Buttons.enabled=!0)},onQualityPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),GameQuality=0==GameQuality?1:0,GameData.Save(),setGameResolutionByQuality(),onResize(),onResize(),Buttons.enabled=!0)},onSurrenderPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenSettings.hideScene(),screenForfConfirm.showScene(function(){Buttons.enabled=!0}))},onClosePressed:function(){Buttons.enabled&&
activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenTopPanel.showScene(),screenSettings.hideScene(function(){activeScene.gamePaused=screenSettings.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0}))},onNextLangPressed:function(){if(Buttons.enabled&&activeScene.inputEnabled){Buttons.enabled=!1;soundManager.playSound("button");var b=LANGUAGES.indexOf(Languages.instance.language);b++;b>LANGUAGES.length-1&&
(b=0);Languages.instance.language=LANGUAGES[b];SelectedLanguage=Languages.instance.language;GameData.Save();activeScene.updateTexts();Buttons.enabled=!0}},onPrevLangPressed:function(){if(Buttons.enabled&&activeScene.inputEnabled){Buttons.enabled=!1;soundManager.playSound("button");var b=LANGUAGES.indexOf(Languages.instance.language);b--;0>b&&(b=LANGUAGES.length-1);Languages.instance.language=LANGUAGES[b];SelectedLanguage=Languages.instance.language;GameData.Save();activeScene.updateTexts();Buttons.enabled=
!0}},enableControls:function(){enableButton(this.btnSounds);enableButton(this.btnMusic);enableButton(this.btnNextLang);enableButton(this.btnPrevLang);this.sldrSoundsVolume.isEnabled=!0;this.sldrMusicVolume.isEnabled=!0;GameSnacks.audio.isEnabled()?(this.sldrSoundsVolume.isEnabled=!0,this.sldrMusicVolume.isEnabled=!0,enableButton(this.btnSounds),enableButton(this.btnMusic)):(this.sldrSoundsVolume.isEnabled=!1,this.sldrMusicVolume.isEnabled=!1,disableButton(this.btnSounds),disableButton(this.btnMusic))},
disableControls:function(){disableButton(this.btnSounds);disableButton(this.btnMusic);disableButton(this.btnNextLang);disableButton(this.btnPrevLang);this.sldrSoundsVolume.isEnabled=!1;this.sldrMusicVolume.isEnabled=!1},hideScene:function(b){void 0===b&&(b=null);this.disableControls();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",-50*Resolution.SCALE,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,
"alpha",0,SCENE_TRANSITION_DURATION,e,1,!1,function(){screenSettings.guiRoot.isVisible=!1;null!=b&&b()})},showScene:function(b){void 0===b&&(b=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.guiRoot.topInPixels=50*Resolution.SCALE;this.sldrMusicVolume.value=100*MusicVolume;this.sldrSoundsVolume.value=100*SoundVolume;this.enableControls();this.onResize();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",
0,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",1,SCENE_TRANSITION_DURATION,e,1,!1,function(){null!=b&&b()})},beforeRender:function(){},onResize:function(){if(this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.imgBackground.resize(b,e);b>e?this.pnlSettings.scaleTo(.8*Resolution.SCALE):(this.pnlSettings.scaleTo(1.2*Resolution.SCALE),1E3*this.pnlSettings.scaleY>e&&this.pnlSettings.scaleTo(e/1E3));this.resizeShadows()}},
resizeShadows:function(){var b=this.txtTitle._fontSize._value/50;this.txtTitle.shadowOffsetX=getShadowOffs(0);this.txtTitle.shadowOffsetY=getShadowOffs(4*b);this.txtTitle.outlineWidth=getOutlineOffs(7*b);b=this.txtLanguage._fontSize._value/35;this.txtLanguage.shadowOffsetX=getShadowOffs(0);this.txtLanguage.shadowOffsetY=getShadowOffs(4*b);this.txtLanguage.outlineWidth=getOutlineOffs(7*b)}};var ScreenResetConfirmation=function(b){ScreenResetConfirmation.instance=this;this.create(b)};ScreenResetConfirmation.instance=null;
ScreenResetConfirmation.prototype={create:function(b){this.scene=b;this.createGui();this.disableControls();this.titleStr=this.offer=null;this.guiRoot.isVisible=!1},createGui:function(){this.initGuiControls(screenGame.guiTexture)},initGuiControls:function(b){this.guiRoot=this.createRootPanel(b);this.createBackground(this.guiRoot);this.createResetConfirmationPanel(this.pnlRoot);this.createBody(this.pnlResetConfirmation,0)},createRootPanel:function(b){this.pnlRoot=new BABYLON.GUI.Rectangle("ScreenResetConfirmation.pnlRoot");
this.pnlRoot.transformCenterX=.5;this.pnlRoot.transformCenterY=.5;this.pnlRoot.isPointerBlocker=!1;this.pnlRoot.isHitTestVisible=!1;this.pnlRoot.leftInPixels=0;this.pnlRoot.topInPixels=0;this.pnlRoot.thickness=0;this.pnlRoot.highlightLineWidth=0;this.pnlRoot.clipContent=!1;this.pnlRoot.clipChildren=!1;this.pnlRoot.zIndex=150;b.addControl(this.pnlRoot);return this.pnlRoot},createResetConfirmationPanel:function(b){this.pnlResetConfirmation=new BABYLON.GUI.Rectangle("pnlResetConfirmation");this.pnlResetConfirmation.transformCenterX=
.5;this.pnlResetConfirmation.transformCenterY=.5;this.pnlResetConfirmation.isPointerBlocker=!1;this.pnlResetConfirmation.isHitTestVisible=!1;this.pnlResetConfirmation.clipContent=!1;this.pnlResetConfirmation.clipChildren=!1;this.pnlResetConfirmation.widthInPixels=580;this.pnlResetConfirmation.heightInPixels=960;this.pnlResetConfirmation.thickness=0;this.pnlResetConfirmation.color="yellow";b.addControl(this.pnlResetConfirmation);this.pnlResetConfirmation.scaleTo=function(e){this.scaleX=this.scaleY=
e};return this.pnlResetConfirmation},createBackground:function(b){this.imgBackground=new BABYLON.GUI.Rectangle("imgBackground");this.imgBackground.transformCenterX=.5;this.imgBackground.transformCenterY=.5;this.imgBackground.isPointerBlocker=!0;this.imgBackground.isHitTestVisible=!1;this.imgBackground.clipContent=!1;this.imgBackground.clipChildren=!1;this.imgBackground.thickness=2;this.imgBackground.color="orange";this.imgBackground.background="rgba(0,28,76,0.8)";b.addControl(this.imgBackground);
this.imgBackground.resize=function(e,h){h+=300*Resolution.SCALE;this.widthInPixels=e+5;this.heightInPixels=h}},createTitle:function(b,e){this.imgTitleBg=new BABYLON.GUI.Image("imgTitleBg");this.imgTitleBg.transformCenterX=.5;this.imgTitleBg.transformCenterY=.5;this.imgTitleBg.isPointerBlocker=!1;this.imgTitleBg.isHitTestVisible=!1;SetImageFromSpritesheet(this.imgTitleBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_main_title.png");this.imgTitleBg.scaleX=this.imgTitleBg.scaleY=2;this.imgTitleBg.leftInPixels=
0;this.imgTitleBg.topInPixels=e;b.addControl(this.imgTitleBg);this.txtTitle=new BABYLON.GUI.TextBlock("txtTitle");this.txtTitle.textWrapping=!0;this.txtTitle.leftInPixels=0;this.txtTitle.topInPixels=e-5;this.txtTitle.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtTitle.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtTitle.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
this.txtTitle.color="#FFFFFF";this.txtTitle.text="ResetConfirmation";this.txtTitle.fontSize="50px";this.txtTitle.fontFamily="gamefont";this.txtTitle.leftInPixels=0;this.txtTitle.isPointerBlocker=!1;this.txtTitle.isHitTestVisible=!1;this.txtTitle.shadowOffsetX=0;this.txtTitle.shadowOffsetY=6;this.txtTitle.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(0,0,0)":"rgba(80,80,80,0)";this.txtTitle.outlineColor="rgb(0,0,0)";this.txtTitle.outlineWidth=5;this.txtTitle.shadowBlur=0;b.addControl(this.txtTitle);this.btnClose=
BABYLON.GUI.Button.CreateImageOnlyButton("btnClose");this.btnClose.children[0].transformCenterY=.5;this.btnClose.children[0].transformCenterX=.5;this.btnClose.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnClose.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnClose.transformCenterX=.5;this.btnClose.transformCenterY=.5;this.btnClose.topInPixels=e-25;this.btnClose.leftInPixels=230;b.addControl(this.btnClose);SetImageFromSpritesheet(this.btnClose.children[0],
getAssetImage("pak1"),getAssetImageFrames("pak1"),"button_close.png");ResetGuiButtonAppearance(this.btnClose,this.btnClose.children[0].sourceWidth,this.btnClose.children[0].sourceHeight);this.btnClose.onPointerClickObservable.add(this.onClosePressed)},createBody:function(b,e){this.imgBodyBg=new BABYLON.GUI.Image("imgBodyBg");this.imgBodyBg.transformCenterX=.5;this.imgBodyBg.transformCenterY=.5;this.imgBodyBg.isPointerBlocker=!1;this.imgBodyBg.isHitTestVisible=!1;this.imgBodyBg.scaleX=this.imgBodyBg.scaleY=
2;SetImageFromSpritesheet(this.imgBodyBg,getAssetImage("pak1"),getAssetImageFrames("pak1"),"table_restart.png");this.imgBodyBg.leftInPixels=0;this.imgBodyBg.topInPixels=e;b.addControl(this.imgBodyBg);this.txtReward=new BABYLON.GUI.TextBlock("txtReward");this.txtReward.textWrapping=!0;this.txtReward.leftInPixels=0;this.txtReward.topInPixels=e+57;this.txtReward.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtReward.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
this.txtReward.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtReward.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtReward.color="#FFFFFF";this.txtReward.text="";this.txtReward.fontSize="48px";this.txtReward.fontFamily="gamefont";this.txtReward.leftInPixels=0;this.txtReward.isPointerBlocker=!1;this.txtReward.isHitTestVisible=!1;this.txtReward.shadowOffsetX=0;this.txtReward.shadowOffsetY=6;this.txtReward.shadowColor=TEXT_SHADOWS_ENABLED?
"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtReward.outlineColor="rgb(48,21,131)";this.txtReward.outlineWidth=5;this.txtReward.shadowBlur=0;b.addControl(this.txtReward);this.txtConfirmation=new BABYLON.GUI.TextBlock("txtConfirmation");this.txtConfirmation.textWrapping=!0;this.txtConfirmation.leftInPixels=0;this.txtConfirmation.topInPixels=-90;this.txtConfirmation.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtConfirmation.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
this.txtConfirmation.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtConfirmation.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtConfirmation.color="#FFFFFF";this.txtConfirmation.text="CONFIRM";this.txtConfirmation.fontSize="50px";this.txtConfirmation.fontFamily="gamefont";this.txtConfirmation.leftInPixels=0;this.txtConfirmation.isPointerBlocker=!1;this.txtConfirmation.isHitTestVisible=!1;this.txtConfirmation.shadowOffsetX=0;this.txtConfirmation.shadowOffsetY=
6;this.txtConfirmation.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtConfirmation.outlineColor="rgb(79,48,11)";this.txtConfirmation.outlineWidth=5;this.txtConfirmation.shadowBlur=0;this.txtConfirmation.thickness=1;this.txtConfirmation.lineSpacing=-15;this.txtConfirmation.widthInPixels=530;this.txtConfirmation.heightInPixels=200;b.addControl(this.txtConfirmation);this.txtWarning=new BABYLON.GUI.TextBlock("txtWarning");this.txtWarning.textWrapping=!0;this.txtWarning.leftInPixels=
0;this.txtWarning.topInPixels=30;this.txtWarning.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtWarning.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtWarning.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.txtWarning.textVerticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.txtWarning.color="#FFFFFF";this.txtWarning.text="CONFIRM";this.txtWarning.fontSize="20px";this.txtWarning.fontFamily="gamefont";
this.txtWarning.leftInPixels=0;this.txtWarning.isPointerBlocker=!1;this.txtWarning.isHitTestVisible=!1;this.txtWarning.shadowOffsetX=0;this.txtWarning.shadowOffsetY=6;this.txtWarning.shadowColor=TEXT_SHADOWS_ENABLED?"rgb(79,48,11)":"rgba(80,80,80,0)";this.txtWarning.outlineColor="rgb(79,48,11)";this.txtWarning.outlineWidth=5;this.txtWarning.shadowBlur=0;this.txtWarning.thickness=1;this.txtWarning.lineSpacing=0;this.txtWarning.widthInPixels=480;this.txtWarning.heightInPixels=200;b.addControl(this.txtWarning);
this.btnYes=BABYLON.GUI.Button.CreateImageOnlyButton("btnYes");this.btnYes.children[0].transformCenterY=.5;this.btnYes.children[0].transformCenterX=.5;this.btnYes.children[0].horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnYes.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnYes.transformCenterX=.5;this.btnYes.transformCenterY=.5;this.btnYes.topInPixels=e+130;this.btnYes.leftInPixels=-143;this.btnYes.scaleX=this.btnYes.scaleY=2;this.btnYes.clipChildren=
!1;this.btnYes.clipContent=!1;b.addControl(this.btnYes);SetImageFromSpritesheet(this.btnYes.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),"btn_red.png");ResetGuiButtonAppearance(this.btnYes,this.btnYes.children[0].sourceWidth,this.btnYes.children[0].sourceHeight);this.btnYes.heightInPixels=100;this.btnNo=BABYLON.GUI.Button.CreateImageOnlyButton("btnNo");this.btnNo.children[0].transformCenterY=.5;this.btnNo.children[0].transformCenterX=.5;this.btnNo.children[0].horizontalAlignment=
BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;this.btnNo.children[0].verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;this.btnNo.transformCenterX=.5;this.btnNo.transformCenterY=.5;this.btnNo.topInPixels=this.btnYes.topInPixels;this.btnNo.leftInPixels=-this.btnYes.leftInPixels;this.btnNo.scaleX=this.btnNo.scaleY=2;this.btnNo.clipChildren=!1;this.btnNo.clipContent=!1;b.addControl(this.btnNo);SetImageFromSpritesheet(this.btnNo.children[0],getAssetImage("pak1"),getAssetImageFrames("pak1"),
"btn_green.png");ResetGuiButtonAppearance(this.btnNo,this.btnNo.children[0].sourceWidth,this.btnNo.children[0].sourceHeight);this.btnYes.heightInPixels=100;this.btnYes.onPointerClickObservable.add(this.onYesPressed);this.btnNo.onPointerClickObservable.add(this.onNoPressed)},updateTexts:function(){this.txtConfirmation.text=Str("RESTART_CONFIRMATION");this.txtWarning.text=STR("RESTART_WARNING")},onClosePressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),
screenResetConfirmation.offer.alreadyPaid=0,screenResetConfirmation.offer.delay=1200,screenTopPanel.showScene(),screenResetConfirmation.hideScene(function(){activeScene.gamePaused=screenResetConfirmation.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0}))},onYesPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenGame.restartAll(),inlHelper.game.onGameStart(!0),GameSnacks.game.gameOver(),
screenTopPanel.showScene(),screenSettings.hideScene(),screenResetConfirmation.hideScene(function(){activeScene.gamePaused=screenResetConfirmation.wasPaused;Shop.instance.onResume();screenGame.enableControls();screenTopPanel.showButtons();Buttons.enabled=!0}))},onNoPressed:function(){Buttons.enabled&&activeScene.inputEnabled&&(Buttons.enabled=!1,soundManager.playSound("button"),screenResetConfirmation.hideScene(function(){screenSettings.enableControls();Buttons.enabled=!0}))},enableControls:function(){enableButton(this.btnYes);
enableButton(this.btnNo)},disableControls:function(){disableButton(this.btnYes);disableButton(this.btnNo)},hideScene:function(b){void 0===b&&(b=null);this.disableControls();screenParticles.particles.Reset();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEIN};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",-50*Resolution.SCALE,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",0,SCENE_TRANSITION_DURATION,e,1,!1,
function(){screenResetConfirmation.guiRoot.isVisible=!1;null!=b&&b()})},showScene:function(b){void 0===b&&(b=null);this.guiRoot.alpha=0;this.guiRoot.isVisible=!0;this.guiRoot.topInPixels=50*Resolution.SCALE;this.enableControls();this.onResize();var e={func:BABYLON.CircleEase,mode:BABYLON.EasingFunction.EASINGMODE_EASEOUT};CommonAnimations.AnimateObjectProperty(this.guiRoot,"topInPixels",0,SCENE_TRANSITION_DURATION,e,1,!1);CommonAnimations.AnimateObjectProperty(this.guiRoot,"alpha",1,SCENE_TRANSITION_DURATION,
e,1,!1,function(){null!=b&&b()})},beforeRender:function(){},onResize:function(){if(this.guiRoot.isVisible){var b=engine.getRenderWidth(),e=engine.getRenderHeight();this.imgBackground.resize(b,e);b>e?this.pnlResetConfirmation.scaleTo(.8*Resolution.SCALE):(this.pnlResetConfirmation.scaleTo(1.2*Resolution.SCALE),1E3*this.pnlResetConfirmation.scaleY>e&&this.pnlResetConfirmation.scaleTo(e/1E3));this.resizeShadows()}},resizeShadows:function(){var b=this.txtConfirmation._fontSize._value/48;this.txtConfirmation.shadowOffsetX=
getShadowOffs(0);this.txtConfirmation.shadowOffsetY=getShadowOffs(4*b);this.txtConfirmation.outlineWidth=getOutlineOffs(8*b);b=this.txtWarning._fontSize._value/20;this.txtWarning.shadowOffsetX=getShadowOffs(0);this.txtWarning.shadowOffsetY=getShadowOffs(3*b);this.txtWarning.outlineWidth=getOutlineOffs(5*b)}};var ScreenParticles=function(b){ScreenParticles.instance=this;this.create(b)};ScreenParticles.instance=null;
ScreenParticles.prototype={create:function(b){this.scene=b;this.rootNode=new BABYLON.TransformNode("ScreenParticles");this.createCamera();this.createGui()},createCamera:function(){this.camera=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,0,-2),this.scene);this.camera.parent=this.rootNode;this.camera.setTarget(new BABYLON.Vector3(0,0,0));this.camera.mode=BABYLON.Camera.ORTHOGRAPHIC_CAMERA;this.camera.orthoTop=1;this.camera.orthoBottom=-1;this.camera.orthoLeft=-2;this.camera.orthoRight=2;this.camera.layerMask=
LAYER_SCREEN_PARTICLES;this.scene.activeCameras.push(this.camera)},createGui:function(){this.guiTexture=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ScreenParticles",!0,activeScene.scene);this.guiTexture.layer.layerMask=this.camera.layerMask;this.guiTexture.rootContainer.highlightLineWidth=0;this.particles=new Particles(screenGame.guiTexture);this.textParticles=new TextParticles(screenGame.guiTexture);this.flyingSprites=new FlyingSprites(screenGame.guiTexture)},beforeRender:function(){this.particles.Update();
this.textParticles.Update();this.flyingSprites.Update()},onResize:function(){autoResizeOrthographicCamera(this.camera)}};

