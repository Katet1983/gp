webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(20);
var hide = __webpack_require__(12);
var redefine = __webpack_require__(13);
var ctx = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(55)('wks');
var uid = __webpack_require__(36);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(23);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(110);
var toPrimitive = __webpack_require__(25);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(35);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(12);
var has = __webpack_require__(15);
var SRC = __webpack_require__(36)('src');
var $toString = __webpack_require__(163);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(20).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(4);
var defined = __webpack_require__(26);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(56);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(57);
var createDesc = __webpack_require__(35);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(110);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(15);
var toObject = __webpack_require__(10);
var IE_PROTO = __webpack_require__(79)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleton = Symbol('singleton');

/**
 * This is the super class singleton. Inherit this class if you want to create a singleton
 * You can either use [SUBCLASS_NAME].instance or new [SUBCLASS_NAME], but [SUBCLASS_NAME].instance
 * is preferred, because no new instance is created.
 */

var Singleton = function () {
  _createClass(Singleton, null, [{
    key: 'instance',

    /**
     * Return the instance of the singleton.
     * @returns {*} Return the instance.
     */
    get: function get() {
      if (!this[singleton]) {
        this[singleton] = new this();
      }

      return this[singleton];
    }
  }]);

  function Singleton() {
    _classCallCheck(this, Singleton);

    var Class = this.constructor;

    if (!Class[singleton]) {
      Class[singleton] = this;
    }

    return Class[singleton];
  }

  return Singleton;
}();

exports.default = Singleton;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(11);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(4);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(20);
var fails = __webpack_require__(4);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21);
var IObject = __webpack_require__(56);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(7);
var asc = __webpack_require__(95);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(8)) {
  var LIBRARY = __webpack_require__(32);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(4);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(72);
  var $buffer = __webpack_require__(103);
  var ctx = __webpack_require__(21);
  var anInstance = __webpack_require__(42);
  var propertyDesc = __webpack_require__(35);
  var hide = __webpack_require__(12);
  var redefineAll = __webpack_require__(44);
  var toInteger = __webpack_require__(23);
  var toLength = __webpack_require__(7);
  var toIndex = __webpack_require__(138);
  var toAbsoluteIndex = __webpack_require__(38);
  var toPrimitive = __webpack_require__(25);
  var has = __webpack_require__(15);
  var classof = __webpack_require__(49);
  var isObject = __webpack_require__(5);
  var toObject = __webpack_require__(10);
  var isArrayIter = __webpack_require__(92);
  var create = __webpack_require__(39);
  var getPrototypeOf = __webpack_require__(18);
  var gOPN = __webpack_require__(40).f;
  var getIterFn = __webpack_require__(94);
  var uid = __webpack_require__(36);
  var wks = __webpack_require__(6);
  var createArrayMethod = __webpack_require__(28);
  var createArrayIncludes = __webpack_require__(62);
  var speciesConstructor = __webpack_require__(59);
  var ArrayIterators = __webpack_require__(97);
  var Iterators = __webpack_require__(51);
  var $iterDetect = __webpack_require__(67);
  var setSpecies = __webpack_require__(41);
  var arrayFill = __webpack_require__(96);
  var arrayCopyWithin = __webpack_require__(127);
  var $DP = __webpack_require__(9);
  var $GOPD = __webpack_require__(17);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(133);
var $export = __webpack_require__(0);
var shared = __webpack_require__(55)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(136))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _default = __webpack_require__(60);

var _default2 = _interopRequireDefault(_default);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _signalManager = __webpack_require__(61);

var _signalManager2 = _interopRequireDefault(_signalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Creates a text element.
 */
var Text = function (_Phaser$Text) {
  _inherits(Text, _Phaser$Text);

  function Text(_ref) {
    var _ref$text = _ref.text,
        text = _ref$text === undefined ? '' : _ref$text,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? new _phaser.Point(0, 0) : _ref$position,
        _ref$anchor = _ref.anchor,
        anchor = _ref$anchor === undefined ? new _phaser.Point(0.5, 0.5) : _ref$anchor,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === undefined ? 20 : _ref$fontSize,
        _ref$fontName = _ref.fontName,
        fontName = _ref$fontName === undefined ? _default2.default.text.font : _ref$fontName,
        _ref$fontWeight = _ref.fontWeight,
        fontWeight = _ref$fontWeight === undefined ? 'normal' : _ref$fontWeight,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? _default2.default.text.color : _ref$color,
        _ref$align = _ref.align,
        align = _ref$align === undefined ? _default2.default.text.align : _ref$align,
        _ref$boundsAlignH = _ref.boundsAlignH,
        boundsAlignH = _ref$boundsAlignH === undefined ? _default2.default.text.boundsAlignH : _ref$boundsAlignH,
        _ref$boundsAlignV = _ref.boundsAlignV,
        boundsAlignV = _ref$boundsAlignV === undefined ? _default2.default.text.boundsAlignV : _ref$boundsAlignV,
        _ref$stroke = _ref.stroke,
        stroke = _ref$stroke === undefined ? _default2.default.text.stroke : _ref$stroke,
        _ref$strokeThickness = _ref.strokeThickness,
        strokeThickness = _ref$strokeThickness === undefined ? _default2.default.text.strokeThickness : _ref$strokeThickness,
        _ref$inputEnabled = _ref.inputEnabled,
        inputEnabled = _ref$inputEnabled === undefined ? false : _ref$inputEnabled,
        _ref$localisationKey = _ref.localisationKey,
        localisationKey = _ref$localisationKey === undefined ? null : _ref$localisationKey,
        stringVariables = _ref.stringVariables,
        _ref$wordWrap = _ref.wordWrap,
        wordWrap = _ref$wordWrap === undefined ? false : _ref$wordWrap,
        _ref$wordWrapWidth = _ref.wordWrapWidth,
        wordWrapWidth = _ref$wordWrapWidth === undefined ? 100 : _ref$wordWrapWidth;

    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, game, position.x, position.y, text));

    _this.setStyle({
      font: fontWeight + ' ' + fontSize + 'pt ' + fontName,
      fill: color,
      align: align,
      boundsAlignH: boundsAlignH,
      boundsAlignV: boundsAlignV,
      stroke: stroke,
      strokeThickness: strokeThickness,
      wordWrap: wordWrap,
      wordWrapWidth: wordWrapWidth
    });

    _this.anchor.setTo(anchor.x, anchor.y);
    _this.inputEnabled = inputEnabled;
    _this.localisationKey = localisationKey;
    _this.stringVariables = stringVariables;

    if (_this.localisationKey !== null) {
      _this.setLocalisationText(_this.localisationKey, stringVariables);
    } else {
      _this.text = _this.localisationKey || text;
    }

    _signalManager2.default.instance.add('localisationManager:onLanguageChange', function () {
      _this.setLocalisationText(_this.localisationKey, _this.stringVariables);
    }, _this);
    return _this;
  }

  /**
   * Set the correct text based on the key. It will check the Localisation Manager if the key
   * exists. It will also insert variables.
   *
   * @param key Key of the text.
   * @param variables An array of variables.
   */


  _createClass(Text, [{
    key: 'setLocalisationText',
    value: function setLocalisationText(key, variables) {
      this.text = _singleton2.default.instance.getText(key, variables);
    }
  }]);

  return Text;
}(_phaser.Phaser.Text);

exports.default = Text;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(36)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(4)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(6)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(112);
var enumBugKeys = __webpack_require__(80);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(113);
var enumBugKeys = __webpack_require__(80);
var IE_PROTO = __webpack_require__(79)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(77)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(81).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(112);
var hiddenKeys = __webpack_require__(80).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(92);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(7);
var getIterFn = __webpack_require__(94);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(13);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Singleton2 = __webpack_require__(105);

var _Singleton3 = _interopRequireDefault(_Singleton2);

var _statistics = __webpack_require__(148);

var _statistics2 = _interopRequireDefault(_statistics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FamobiAPI = function (_Singleton) {
  _inherits(FamobiAPI, _Singleton);

  function FamobiAPI() {
    _classCallCheck(this, FamobiAPI);

    var _this = _possibleConstructorReturn(this, (FamobiAPI.__proto__ || Object.getPrototypeOf(FamobiAPI)).call(this));

    _this.init();
    return _this;
  }

  _createClass(FamobiAPI, [{
    key: 'init',
    value: function init() {
      window.famobi = window.famobi || {};

      window.famobi.localStorage = window.famobi.localStorage || window.localStorage;
      window.famobi.sessionStorage = window.famobi.sessionStorage || window.sessionStorage;
    }

    /**
     * Returns a relative path to the final branding button. For an absolute path use the parameter "true".
     * The size of the image ALWAYS has to be 600 x 253px. Therefore, you have to scale it using your engine/ framework only.
     * Please note: In some cases, the button is transparent or invisible; don't combine it with any GUI elements!
     *
     * @returns {string} Path of the image.
     */

  }, {
    key: 'getBrandingButtonImage',
    value: function getBrandingButtonImage(absolute) {
      return window.famobi.getBrandingButtonImage(absolute);
    }

    /**
     * Opens the branding placeholder URL.
     *
     * Important: It does NOT return a URL, so don't use it with window.open or location.href!
     */

  }, {
    key: 'openBrandingLink',
    value: function openBrandingLink() {
      window.famobi.openBrandingLink();
    }

    /**
     * Important: The game MUST NOT contain rewarded ad features!
     *
     * Regardless of the use of Famobi Analytics trackEvent calls, make sure to use this call
     * at typical breaks (e.g.: Pause, Retry, Continue, Menu...)
     * Important: Ads will only be shown in a given interval controlled by our API (usually every 60 to 90 seconds).
     *
     * @param {Function} callback - Callback called after watching an ad.
     * @param {*} context - Context of the callback.
     */

  }, {
    key: 'showInterstitialAd',
    value: function showInterstitialAd() {
      return window.famobi.showInterstitialAd();
    }
  }, {
    key: 'hasRewardedAd',
    value: function hasRewardedAd() {
      return window.famobi.hasRewardedAd();
    }
  }, {
    key: 'rewardedAd',
    value: function rewardedAd(callbackGranted, callbackDenied, context) {
      window.famobi.rewardedAd(function(result) {
        if(result.rewardGranted) {
          callbackGranted.call(context);
        } else {
          callbackDenied.call(context)
        }
      });
    }

    /**
     * Function that pauses/mutes the game
     *
     * @param {Function} onPauseFunction - Function that is executed before an ad.
     */

  }, {
    key: 'setOnPauseRequested',
    value: function setOnPauseRequested(onPauseFunction) {
      window.famobi_onPauseRequested = onPauseFunction;
    }

    /**
     * Function that unpauses/unmutes the game
     *
     * @param {Function} onResumeFunction - Function that is executed after an ad.
     */

  }, {
    key: 'setOnResumeRequested',
    value: function setOnResumeRequested(onResumeFunction) {
      window.famobi_onResumeRequested = onResumeFunction;
    }

    // endregion

    // region ------------------ LOCALISATION ------------------
    /**
     * Returns a corresponding value string associated with the famobi.json.
     * If there's no key either in the current language or in the "default" section, null is returned.
     *
     * @param {string} key - Unique key of the text.
     * @returns {string|null} Value of the key.
     */

  }, {
    key: 'get',
    value: function get(key) {
      return window.famobi.__(key) || key;
    }

    /**
     * Returns the current language code (two letters, lower-case).
     * Important: This function should be used as an exception only.
     * In 99% of the cases window.famobi.__(key) is sufficient.
     * The trick is just to limit your game to one language and use its texts as translation keys.
     *
     * @returns {string} Current language code (two letters, lower-case).
     */

  }, {
    key: 'getCurrentLanguage',
    value: function getCurrentLanguage() {
      return window.famobi.getCurrentLanguage();
    }

    /**
     * Set local storage item.
     *
     * @param {string} key - Key of the value.
     * @param {*} value - Value that needs to be saved.
     */

  }, {
    key: 'setLocalStorageItem',
    value: function setLocalStorageItem(key, value) {
      window.famobi.localStorage.setItem(key, value);
    }

    /**
     * Get local storage item.
     *
     * @param {string} key - Key of the value.
     */

  }, {
    key: 'getLocalStorageItem',
    value: function getLocalStorageItem(key) {
      var value = window.famobi.localStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    }

    /**
     * Remove the locale storage item.
     *
     * @param {string} key - Key of the value.
     */

  }, {
    key: 'removeLocalStorageItem',
    value: function removeLocalStorageItem(key) {
      window.famobi.localStorage.removeItem(key);
    }

    /**
     * Remove the whole locale storage.
     */

  }, {
    key: 'clearLocalStorage',
    value: function clearLocalStorage() {
      window.famobi.localStorage.clear();
    }

    /**
     * Set session storage item.
     *
     * @param {string} key - Key of the value.
     * @param {*} value - Value that needs to be saved.
     */

  }, {
    key: 'setSessionStorageItem',
    value: function setSessionStorageItem(key, value) {
      window.famobi.sessionStorage.setItem(key, value);
    }

    /**
     * Get session storage item.
     *
     * @param {string} key - Key of the value.
     */

  }, {
    key: 'getSessionStorageItem',
    value: function getSessionStorageItem(key) {
      window.famobi.sessionStorage.getItem(key);
    }

    /**
     * Remove the session storage item.
     *
     * @param {string} key - Key of the value.
     */

  }, {
    key: 'removeSessionStorageItemn',
    value: function removeSessionStorageItemn(key) {
      window.famobi.sessionStorage.removeItem(key);
    }

    /**
     * Remove the whole session storage.
     */

  }, {
    key: 'clearSessionStorage',
    value: function clearSessionStorage() {
      window.famobi.sessionStorage.clear();
    }

    /**
     * Get the current orientation.
     *
     * @returns {"landscape"|"portrait"|""} Orientation of the device.
     */

  }, {
    key: 'getOrientation',
    value: function getOrientation() {
      return window.famobi.getOrientation();
    }

    /**
     * Set the callback when orientation is changed.
     *
     * @param {Function} callback - Callback called when the orientation is changed.
     * @param {*} context - Context of the callback.
     */

  }, {
    key: 'setOnOrientationChange',
    value: function setOnOrientationChange(callback, context) {
      window.famobi.onOrientationChange(callback.bind(context));
    }
  }, {
    key: 'trackingLevelStart',
    value: function trackingLevelStart(level) {
      famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_START, {
        level: level
      });
    }
  }, {
    key: 'trackingLevelUpdate',
    value: function trackingLevelUpdate(game) {
      var _this2 = this;

      this._updateData = {
        movesLeft: game.ballsOnLevel - game.ballsKilled,
        score: game.score
      };

      if (this._queue) {
        return;
      }

      this._queue = setTimeout(function () {
        famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_UPDATE, _this2._updateData);
        _this2._queue = null;
      }, 50);
    }
  }, {
    key: 'trackingLevelEnd',
    value: function trackingLevelEnd(score, success) {
      famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_END, {
        score: score,
        success: success
      });
    }
  }, {
    key: 'onLevelStart',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(level) {
        var levelName, promises;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                levelName = this.getLevelName(level);
                promises = [];


                promises.push(this.trackEvent('EVENT_LEVELSTART', { levelName: levelName }));

                this.trackingLevelStart(level);

                _context.next = 6;
                return Promise.all(promises);

              case 6:
                return _context.abrupt('return', null);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLevelStart(_x) {
        return _ref.apply(this, arguments);
      }

      return onLevelStart;
    }()
  }, {
    key: 'onLevelSuccess',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(level, score, totalScore) {
        var levelName, promises;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                levelName = this.getLevelName(level);
                promises = [];


                promises.push(this.trackEvent('EVENT_LEVELSUCCESS', { levelName: levelName }));
                promises.push(this.showInterstitialAd());
                promises.push(this.trackEvent('EVENT_LEVELSCORE', { levelName: levelName, levelScore: score }));
                promises.push(this.trackEvent('EVENT_TOTALSCORE', { totalScore: totalScore }));

                this.trackingLevelEnd(score, true);

                _context2.next = 9;
                return Promise.all(promises);

              case 9:
                _statistics2.default.instance.set('levels_completed', level);
                return _context2.abrupt('return', null);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLevelSuccess(_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return onLevelSuccess;
    }()
  }, {
    key: 'onLevelFail',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(level, score, totalScore) {
        var levelName, promises;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                levelName = this.getLevelName(level);
                promises = [];


                promises.push(this.trackEvent('EVENT_LEVELFAIL', { levelName: levelName, reason: 'dead' }));
                promises.push(this.showInterstitialAd());
                promises.push(this.trackEvent('EVENT_LEVELSCORE', { levelName: levelName, levelScore: score }));
                promises.push(this.trackEvent('EVENT_TOTALSCORE', { totalScore: totalScore }));

                this.trackingLevelEnd(score, false);

                _context3.next = 9;
                return Promise.all(promises);

              case 9:
                return _context3.abrupt('return', null);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLevelFail(_x5, _x6, _x7) {
        return _ref3.apply(this, arguments);
      }

      return onLevelFail;
    }()
  }, {
    key: 'onLevelQuit',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(level) {
        var levelName, promises;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                levelName = this.getLevelName(level);
                promises = [];


                promises.push(this.trackEvent('EVENT_LEVELFAIL', { levelName: levelName, reason: 'quit' }));

                _context4.next = 5;
                return Promise.all(promises);

              case 5:
                return _context4.abrupt('return', null);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onLevelQuit(_x8) {
        return _ref4.apply(this, arguments);
      }

      return onLevelQuit;
    }()
  }, {
    key: 'onPause',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var promises;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                promises = [];


                promises.push(this.trackEvent('EVENT_PAUSE'));

                _context5.next = 4;
                return Promise.all(promises);

              case 4:
                return _context5.abrupt('return', null);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onPause() {
        return _ref5.apply(this, arguments);
      }

      return onPause;
    }()
  }, {
    key: 'onResume',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var promises;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                promises = [];


                promises.push(this.trackEvent('EVENT_RESUME'));

                _context6.next = 4;
                return Promise.all(promises);

              case 4:
                return _context6.abrupt('return', null);

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onResume() {
        return _ref6.apply(this, arguments);
      }

      return onResume;
    }()
  }, {
    key: 'onVolumeChange',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(bgmVolume, sfxVolume) {
        var promises;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                promises = [];


                promises.push(this.trackEvent('EVENT_VOLUMECHANGE', { bgmVolume: bgmVolume, sfxVolume: sfxVolume }));

                _context7.next = 4;
                return Promise.all(promises);

              case 4:
                return _context7.abrupt('return', null);

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onVolumeChange(_x9, _x10) {
        return _ref7.apply(this, arguments);
      }

      return onVolumeChange;
    }()
  }, {
    key: 'getLevelName',
    value: function getLevelName(number) {
      return 'level_' + number;
    }
  }, {
    key: 'trackEvent',
    value: function trackEvent(eventName, parameters) {
      switch (eventName) {
        case 'EVENT_LEVELSTART':
        case 'EVENT_LEVELRESTART':
          if (!parameters) {
            console.error('Parameters of ' + eventName + ' are invalid. Found', parameters);
            return;
          }

          if (typeof parameters.levelName !== 'string') {
            console.error('Parameters of ' + eventName + ' are invalid. levelName should have a string', parameters);
            return;
          }
          break;
        case 'EVENT_LEVELSUCCESS':
          if (!parameters) {
            console.error('Parameters of ' + eventName + ' are invalid. Found', parameters);
            return;
          }

          if (typeof parameters.levelName !== 'string') {
            console.error('Parameters of ' + eventName + ' are invalid. levelName should have a string', parameters);
            return;
          }
          break;
        case 'EVENT_LEVELFAIL':
          if (!parameters) {
            console.error('Parameters of ' + eventName + ' are invalid. Found', parameters);
            return;
          }

          if (typeof parameters.levelName !== 'string') {
            console.error('Parameters of ' + eventName + ' are invalid. levelName should have a string', parameters);
            return;
          }

          if (parameters.reason !== 'timeout' && parameters.reason !== 'dead' && parameters.reason !== 'wrong_answer' && parameters.reason !== 'draw' && parameters.reason !== 'quit') {
            console.error('Parameters of ' + eventName + ' are invalid. Reason should be either "timeout", "dead", "wrong_answer", "draw" or "quit". Found', parameters.reason);
            return;
          }

          break;
        case 'EVENT_LEVELSCORE':
          if (!parameters) {
            console.error('Parameters of ' + eventName + ' are invalid. Found', parameters);
            return;
          }

          if (typeof parameters.levelName !== 'string') {
            console.error('Parameters of ' + eventName + ' are invalid. levelName should have a string', parameters);
            return;
          }

          if (!Number.isFinite(parameters.levelScore)) {
            console.error('Parameters of ' + eventName + ' are invalid. levelScore should be a number', parameters);
            return;
          }
          break;
        case 'EVENT_TOTALSCORE':
          if (!parameters) {
            console.error('Parameters of ' + eventName + ' are invalid. Found', parameters);
            return;
          }

          if (!Number.isFinite(parameters.totalScore)) {
            console.error('Parameters of ' + eventName + ' are invalid. totalScore should be a number', parameters);
            return;
          }
          break;
        case 'EVENT_PAUSE':
        case 'EVENT_RESUME':
          break;
        case 'EVENT_VOLUMECHANGE':
          if (!parameters) {
            console.error('Parameters of ' + eventName + ' are invalid. Found', parameters);
            return;
          }

          if (!Number.isFinite(parameters.bgmVolume)) {
            console.error('Parameters of ' + eventName + ' are invalid. bgmVolume should be a number', parameters);
            return;
          }

          if (!Number.isFinite(parameters.sfxVolume)) {
            console.error('Parameters of ' + eventName + ' are invalid. sfxVolume should be a number', parameters);
            return;
          }
          break;
      }

      return window.famobi_analytics.trackEvent(eventName, parameters);
    }
  }]);

  return FamobiAPI;
}(_Singleton3.default);

exports.default = FamobiAPI;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the general Image class used for displaying images in game.
 * The settings of the images can easily be set using an object as the constructor.
 * It accepts the following keys:
 * key {string} The key of the texture*.
 * frame {string} If the texture is using an atlas, you can specify the frame of the texture atlas.
 * position Point Position of the image. Default value is { x: 0, y: 0 }.
 * anchor Point Anchor of the image. Default value is { x: 0.5, y: 0.5 }.
 * scale {[number [,number]]} The scale of the image. If the second index is undefined,
 * inputEnabled {bool} Set to true if click events are required for this image. Default is false;
 */
var _class = function (_Sprite) {
  _inherits(_class, _Sprite);

  function _class(_ref) {
    var key = _ref.key,
        frame = _ref.frame,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? new _phaser.Point(0, 0) : _ref$position,
        _ref$anchor = _ref.anchor,
        anchor = _ref$anchor === undefined ? new _phaser.Point(0.5, 0.5) : _ref$anchor,
        _ref$scale = _ref.scale,
        scale = _ref$scale === undefined ? new _phaser.Point(1, 1) : _ref$scale,
        _ref$inputEnabled = _ref.inputEnabled,
        inputEnabled = _ref$inputEnabled === undefined ? false : _ref$inputEnabled;

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, position.x || 0, position.y || 0, key, frame));

    _this.anchor.setTo(anchor.x, anchor.y);
    _this.scale.setTo(scale.x, scale.y);
    _this.inputEnabled = inputEnabled;

    if (inputEnabled) {
      _this.inputEnabled = inputEnabled;

      _this.events.onInputUp.add(function () {
        _this.doInputUp();
      });

      _this.events.onInputDown.add(function () {
        _this.doInputDown();
      });
    }
    return _this;
  }

  /**
   * When the image is clicked and the input is down this method is called.
   * Override this method.
   */


  _createClass(_class, [{
    key: "doInputDown",
    value: function doInputDown() {
      console.warn("This image doesn't have a input down function, please override this function");
    }

    /**
     * When the image is clicked and the input is up this method is called.
     * Override this method.
     */

  }, {
    key: "doInputUp",
    value: function doInputUp() {
      console.warn("This image doesn't have a input up function, please override this function");
    }
  }]);

  return _class;
}(_phaser.Sprite);

exports.default = _class;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(26);
var fails = __webpack_require__(4);
var spaces = __webpack_require__(83);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _utils = __webpack_require__(76);

var _facebook = __webpack_require__(146);

var _facebook2 = _interopRequireDefault(_facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @module test
 */
// region ******************************* PRIVATE FUNCTIONS *******************************
var doCallback = Symbol('_doCallback');
var entriesToFormattedObject = Symbol('entriesToFormattedObject');
var playersToFormattedObject = Symbol('playersToFormattedObject');
var getDefaultPlayerEntry = Symbol('getDefaultPlayerEntry');
var createEvent = Symbol('createEvent');
// endregion

/**
 * @class All Facebook Instant Games API are in this script. Some extra features, like
 * preloading, saving the reference etc. are added.
 */

var Facebook = function (_Singleton) {
  _inherits(Facebook, _Singleton);

  // region ******************************* CONSTRUCTOR *******************************

  function Facebook() {
    _classCallCheck(this, Facebook);

    var _this = _possibleConstructorReturn(this, (Facebook.__proto__ || Object.getPrototypeOf(Facebook)).call(this));

    var conditions = [':300'];
    _this.fbInstantExists = false; // __DEV__ || !conditions.some(el => window.location.href.includes(el));
    return _this;
  }
  // endregion

  // region ******************************* INITIAL FACEBOOK API *******************************
  /**
   * Initializes the SDK library. This should be called before any other SDK functions.
   * When ready, it will create a game.
   */


  _createClass(Facebook, [{
    key: 'initializeAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                _context.next = 4;
                return FBInstant.initializeAsync().catch(function (error) {
                  return console.error(error, 'INITIALIZE_ASYNC');
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initializeAsync() {
        return _ref.apply(this, arguments);
      }

      return initializeAsync;
    }()

    /**
     * Check if a certain api is supported.
     *
     * @param {string} api - API method.
     * @returns {boolean} If API is supported or not.
     */

  }, {
    key: 'isSupported',
    value: function isSupported(api) {
      if (!this.fBInstantExists) {
        return true;
      }

      return FBInstant.getSupportedAPIs().includes(api);
    }

    /**
     * Report the game's initial loading progress.
     *
     * @param {number} progress - The progress of downloading assets in percentage.
     */

  }, {
    key: 'setLoadingProgress',
    value: function setLoadingProgress(progress) {
      if (!this.fBInstantExists) {
        return;
      }

      FBInstant.setLoadingProgress(progress);
    }

    /**
     * This indicates that the game has finished initial loading and is ready to start.
     * Context information will be up-to-date when the returned promise resolves.
     * It will also check if a shortcut and subscribe bot can be created, and preloading ads.
     */

  }, {
    key: 'startGameAsync',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.next = 4;
                return FBInstant.startGameAsync().catch(function (error) {
                  return console.error(error);
                });

              case 4:
                if (!_facebook2.default.createShortcut) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 7;
                return this.canCreateShortcutAsync();

              case 7:
                if (!_facebook2.default.subscribeBot) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return this.canSubscribeBotAsync();

              case 10:

                // Load ads
                Object.values(_facebook2.default.interstitialAds).forEach(function (placementID) {
                  _this2.loadInterstitialAdAsync(placementID);
                });

                Object.values(_facebook2.default.rewardedVideos).forEach(function (placementID) {
                  _this2.loadRewardedVideoAsync(placementID);
                });

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function startGameAsync() {
        return _ref2.apply(this, arguments);
      }

      return startGameAsync;
    }()
    // endregion

    // region ******************************* PLAYER INFO *******************************
    /**
     * A url to the player's public profile photo.
     * The photo will always be a square, and with dimensions of at least 200x200.
     * When rendering it in the game, the exact dimensions should never be assumed to be constant.
     * It's recommended to always scale the image to a desired size before rendering.
     * The value will always be null until FBInstant.startGameAsync() resolves.
     * WARNING: Due to CORS, using these photos in the game canvas can cause it to be tainted,
     * which will prevent the canvas data from being extracted.
     * To prevent this, set the cross-origin attribute of the images you use to 'anonymous'.
     *
     * @returns {string} Url to the player's public profile photo.
     */

  }, {
    key: 'getPlayerPhoto',
    value: function getPlayerPhoto() {
      return this.fBInstantExists ? FBInstant.player.getPhoto() : null;
    }

    /**
     * A unique identifier for the player.
     * A Facebook user's player ID will remain constant, and is scoped to a specific game.
     * This means that different games will have different player IDs for the same user.
     * This function should not be called until FBInstant.initializeAsync() has resolved.
     *
     * @returns {string} A unique identifier for the player.
     */

  }, {
    key: 'getPlayerID',
    value: function getPlayerID() {
      return this.fBInstantExists ? FBInstant.player.getID() : null;
    }

    /**
     * The player's localized display name.
     * This function should not be called until FBInstant.startGameAsync() has resolved.
     *
     * @returns {string} The player's localized display name.
     */

  }, {
    key: 'getPlayerName',
    value: function getPlayerName() {
      return this.fBInstantExists ? FBInstant.player.getName() : null;
    }

    /**
     * Fetches an array of ConnectedPlayer objects containing information about active players
     * (people who played the game in the last 90 days) that are connected to the current player.
     *
     * @param {boolean} refresh - Get new set of connected players from the Facebook server.
     * @returns {ConnectedPlayer[]} A list of connected player objects. NOTE: This function
     * should not be called until FBInstant.startGameAsync() has resolved.
     */

  }, {
    key: 'getConnectedPlayersAsync',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var connectedPlayers;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', []);

              case 2:
                if (!(this._connectedPlayers && !refresh)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt('return', this._connectedPlayers);

              case 4:
                _context3.next = 6;
                return FBInstant.player.getConnectedPlayersAsync().catch(function (error) {
                  return console.error(error, 'GET_CONNECTED_PLAYERS_ASYNC');
                });

              case 6:
                connectedPlayers = _context3.sent;

                if (connectedPlayers) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt('return', this._connectedPlayers || []);

              case 9:

                this._connectedPlayers = this[playersToFormattedObject](connectedPlayers);

                return _context3.abrupt('return', this._connectedPlayers);

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getConnectedPlayersAsync() {
        return _ref3.apply(this, arguments);
      }

      return getConnectedPlayersAsync;
    }()
    // endregion

    // region ******************************* SESSION INFORMATION *******************************
    /**
     * The current locale.
     * See https://origincache.facebook.com/developers/resources/?id=FacebookLocales.xml for a complete list
     * of supported locale values. Use this to determine what languages the current game should be
     * localized with. The value will not be accurate until FBInstant.startGameAsync() resolves.
     *
     * @returns {string|null} The current locale.
     */

  }, {
    key: 'getLocale',
    value: function getLocale() {
      return this.fbInstantExists ? FBInstant.getLocale() : null;
    }

    /**
     * The platform on which the game is currently running.
     * The value will always be null until FBInstant.initializeAsync() resolves.
     *
     * @returns {string|null} The platform.
     */

  }, {
    key: 'getPlatform',
    value: function getPlatform() {
      return this.fbInstantExists ? FBInstant.getPlatform() : null;
    }

    /**
     * The string representation of this SDK version.
     *
     * @returns {string|null} The SDK version.
     */

  }, {
    key: 'getSDKVersion',
    value: function getSDKVersion() {
      return this.fbInstantExists ? FBInstant.getSDKVersion() : null;
    }

    /**
     * Returns any data object associated with the entry point that the game was launched from.
     * The contents of the object are developer-defined, and can occur from entry points on
     * different platforms. This will return null for older mobile clients, as well as when there
     * is no data associated with the particular entry point. This function should be called after
     * FBInstant.startGameAsync() resolves.
     *
     * @returns {object} Data associated with the current entry point.
     */

  }, {
    key: 'getEntryPointData',
    value: function getEntryPointData() {
      return this.fbInstantExists ? FBInstant.getEntryPointData() : null;
    }
    // endregion

    // region ******************************* DATA & STATS *******************************
    /**
     * Retrieve data from the designated cloud storage of the current player.
     *
     * @param {array<string>} keys - An array of unique keys to retrieve data for.
     * @param {boolean} refresh - Get new data from the Facebook server.
     * @returns {object} Object with the current key-value pairs for each key in keys, if they exist.
     */

  }, {
    key: 'getDataAsync',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(keys) {
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', {});

              case 2:
                if (!(this._data && !refresh)) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt('return', this._data);

              case 4:
                _context4.next = 6;
                return FBInstant.player.getDataAsync(keys).catch(function (error) {
                  return console.error(error, 'GET_DATA_ASYNC');
                });

              case 6:
                data = _context4.sent;

                if (data) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt('return', this._data || {});

              case 9:

                this._data = (0, _utils.parseJSON)(data);

                return _context4.abrupt('return', this._data);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDataAsync(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getDataAsync;
    }()

    /**
     * Set data to be saved to the designated cloud storage of the current player.
     * The game can store up to 1MB of data for each unique player.
     *
     * @param {object} data - An object containing a set of key-value pairs that should be
     * to cloud storage. The object must contain only serializable values - any non-serializable
     * values will cause the entire modification to be rejected.
     * @returns {object} The updated data object. NOTE: The promise resolving does not necessarily
     * mean that the input has already been persisted. Rather, it means that the data was
     * valid and has been scheduled to be saved. It also guarantees that all values that were set
     * are now available in player.getDataAsync.
     */

  }, {
    key: 'setDataAsync',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var newData;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', data);

              case 2:
                _context5.next = 4;
                return FBInstant.player.setDataAsync((0, _utils.stringifyJSON)(data)).then(function () {
                  return data;
                }).catch(function (error) {
                  console.error(error, 'SET_DATA_ASYNC');
                  return {};
                });

              case 4:
                newData = _context5.sent;


                Object.assign(this._data, newData);

                return _context5.abrupt('return', newData);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setDataAsync(_x4) {
        return _ref5.apply(this, arguments);
      }

      return setDataAsync;
    }()

    /**
     * Retrieve stats from the designated cloud storage of the current player.
     *
     * @param {Array<string>?} keys - An optional array of unique keys to retrieve stats for. If the
     * function is called without it, it will fetch all stats.
     * @param {boolean} refresh - Get new data from the Facebook server.
     * @returns {object} An object which contains the current key-value pairs for each key
     * specified in the input array, if they exist.
     */

  }, {
    key: 'getStatsAsync',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this3 = this;

        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt('return', {});

              case 2:
                if (!(!this._stats && !refresh)) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt('return', this._stats);

              case 4:
                _context6.next = 6;
                return FBInstant.player.getStatsAsync(keys).catch(function (error) {
                  console.error(error);
                  return _this3._stats || {};
                });

              case 6:
                this._stats = _context6.sent;
                return _context6.abrupt('return', this._stats);

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getStatsAsync() {
        return _ref6.apply(this, arguments);
      }

      return getStatsAsync;
    }()

    /**
     * Increment stats saved in the designated cloud storage of the current player.
     *
     * @param {object} increments - An object containing a set of key-value pairs indicating how
     * much to increment each stat in cloud storage. The object must contain only numerical values
     * - any non-numerical values will cause the entire modification to be rejected.
     * @returns {object} An object which contains the updated key-value pairs for each key
     * specified in the input dictionary. NOTE: The promise resolving does not necessarily mean
     * that the changes have already been persisted. Rather, it means that the increments were
     * valid and have been scheduled to be performed. It also guarantees that all values that were
     * incremented are now available in player.getStatsAsync
     */

  }, {
    key: 'incrementStatsAsync',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(increments) {
        var keys, i, stats;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context7.next = 4;
                  break;
                }

                keys = Object.keys(increments);


                for (i = 0; i < keys.length; i += 1) {
                  this._stats[keys[i]] += increments[keys[i]] || 0;
                }

                return _context7.abrupt('return', this._stats);

              case 4:
                _context7.next = 6;
                return FBInstant.player.incrementStatsAsync(increments);

              case 6:
                stats = _context7.sent;


                Object.assign(this._stats, stats);
                return _context7.abrupt('return', this._stats);

              case 9:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function incrementStatsAsync(_x7) {
        return _ref7.apply(this, arguments);
      }

      return incrementStatsAsync;
    }()
    // endregion

    // region ******************************* LEADERBOARD *******************************
    /**
     * Fetch a specific leaderboard belonging to this Instant Game.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @returns {Leaderboard} The matching leaderboard, rejecting if one is not found.
     */

  }, {
    key: 'getLeaderboardAsync',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(name) {
        var leaderboardName;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt('return', {});

              case 2:
                leaderboardName = '_leaderboard_' + name;

                if (!this[leaderboardName]) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt('return', this[leaderboardName]);

              case 5:
                _context8.next = 7;
                return FBInstant.getLeaderboardAsync(name).catch(function (error) {
                  console.error(error, 'GET_LEADERBOARD_ASYNC');
                  return {};
                });

              case 7:
                this[leaderboardName] = _context8.sent;
                return _context8.abrupt('return', this[leaderboardName]);

              case 9:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getLeaderboardAsync(_x8) {
        return _ref8.apply(this, arguments);
      }

      return getLeaderboardAsync;
    }()

    /**
     * Retrieves a set of leaderboard entries, ordered by score ranking in the leaderboard.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @param {number} count - The number of entries to attempt to fetch from the leaderboard.
     * Currently, up to a maximum of 100 entries may be fetched per query.
     * @param {number} offset - The number of entries to attempt to fetch from the leaderboard.
     * Defaults to 10 if not specified. Currently, up to a maximum of 100 entries may be fetched
     * per query.
     * @param {boolean} refresh - Get new entries from the leaderboard,
     * @returns {Array<LeaderboardEntry>} The leaderboard entries that match the query.
     */

  }, {
    key: 'getEntriesAsync',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(name) {
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var entriesName, leaderboard, entries;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt('return', []);

              case 2:
                entriesName = '_entries_' + name;

                if (!(this[entriesName] && !refresh)) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt('return', this[entriesName]);

              case 5:
                _context9.next = 7;
                return this.getLeaderboardAsync(name);

              case 7:
                leaderboard = _context9.sent;
                _context9.next = 10;
                return leaderboard.getEntriesAsync(count, offset).catch(function (error) {
                  return console.error(error, 'GET_ENTRIES_ASYNC');
                });

              case 10:
                entries = _context9.sent;

                if (entries) {
                  _context9.next = 13;
                  break;
                }

                return _context9.abrupt('return', this[entriesName] || []);

              case 13:

                this[entriesName] = this[entriesToFormattedObject](entries);

                return _context9.abrupt('return', this[entriesName]);

              case 15:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getEntriesAsync(_x12) {
        return _ref9.apply(this, arguments);
      }

      return getEntriesAsync;
    }()

    /**
     * Fetches an array of ConnectedPlayer objects containing information about active players
     * (people who played the game in the last 90 days) that are connected to the current player.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @param {boolean} refresh - Get a new batch of entries.
     * @returns {Array<ConnectedPlayer>} A list of connected player objects. NOTE: This function
     * should not be called until FBInstant.startGameAsync() has resolved.
     */

  }, {
    key: 'getConnectedEntriesAsync',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(name) {
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var leaderboard, entries, entriesName;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt('return', []);

              case 2:
                if (!(!refresh && this._connectedPlayerEntries)) {
                  _context10.next = 4;
                  break;
                }

                return _context10.abrupt('return', this._connectedPlayerEntries);

              case 4:
                _context10.next = 6;
                return this.getLeaderboardAsync(name);

              case 6:
                leaderboard = _context10.sent;
                _context10.next = 9;
                return leaderboard.getConnectedPlayerEntriesAsync().catch(function (error) {
                  return console.error(error, 'GET_CONNECTED_PLAYER_ENTRIES_ASYNC');
                });

              case 9:
                entries = _context10.sent;
                entriesName = 'connectedEntries_' + name;

                if (entries) {
                  _context10.next = 13;
                  break;
                }

                return _context10.abrupt('return', this[entriesName] || []);

              case 13:

                this._connectedPlayerEntries = this[entriesToFormattedObject](entries);

                return _context10.abrupt('return', this._connectedPlayerEntries);

              case 15:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getConnectedEntriesAsync(_x14) {
        return _ref10.apply(this, arguments);
      }

      return getConnectedEntriesAsync;
    }()

    /**
     * Retrieves the leaderboard's entry for the current player, or null if the player has not set
     * one yet.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @returns {Promise<*>}
     */

  }, {
    key: 'getPlayerEntryAsync',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(name) {
        var _this4 = this;

        var loadingName, eventName, leaderboard, playerEntry, playerEntryName;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt('return', {});

              case 2:
                loadingName = '_loadingPlayerEntryAsync_' + name;
                eventName = '_playerEntrySignal_' + name;

                // If it's already loading, wait for signal.

                if (!this[loadingName]) {
                  _context11.next = 7;
                  break;
                }

                this[createEvent](eventName);

                return _context11.abrupt('return', new Promise(function (resolve) {
                  _this4[eventName].addOnce(resolve);
                }));

              case 7:

                // Set loading to true
                this[loadingName] = true;

                // Get the leaderboard
                _context11.next = 10;
                return this.getLeaderboardAsync(name);

              case 10:
                leaderboard = _context11.sent;
                _context11.next = 13;
                return leaderboard.getPlayerEntryAsync().catch(function (error) {
                  return console.error(error);
                });

              case 13:
                playerEntry = _context11.sent;
                playerEntryName = '_playerEntry_' + name;

                // Set the correct entry.

                if (!playerEntry) {
                  this[playerEntryName] = this[playerEntryName] || this[getDefaultPlayerEntry]();
                } else {
                  this[playerEntryName] = this[entriesToFormattedObject](playerEntry);
                }

                // Set loading to false
                this[loadingName] = false;
                this[createEvent](eventName);
                // Dispatch so other also get the correct value
                this[eventName].dispatch(this[playerEntryName]);

                return _context11.abrupt('return', this[playerEntryName]);

              case 20:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getPlayerEntryAsync(_x15) {
        return _ref11.apply(this, arguments);
      }

      return getPlayerEntryAsync;
    }()

    /**
     * Updates the player's score. If the player has an existing score, the old score will only be
     * replaced if the new score is better than the old score. NOTE: If the leaderboard is associated with a
     * specific context, the game must be in that context to set a score for the player.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @param {number} score - The new score for the player. Must be a 64-bit integer number.
     * @param {string?} extraData - Metadata to associate with the stored score. Must be less than
     * 2KB in size.
     * @returns {LeaderboardEntry?} The current leaderboard entry for the player after the update.
     */

  }, {
    key: 'setScoreAsync',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(name, score) {
        var extraData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var leaderboard, entry;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt('return', null);

              case 2:
                _context12.next = 4;
                return this.getLeaderboardAsync(name);

              case 4:
                leaderboard = _context12.sent;
                _context12.next = 7;
                return leaderboard.setScoreAsync(score, extraData).catch(function (error) {
                  return console.error(error);
                });

              case 7:
                entry = _context12.sent;
                _context12.prev = 8;
                return _context12.abrupt('return', this[entriesToFormattedObject](entry));

              case 12:
                _context12.prev = 12;
                _context12.t0 = _context12['catch'](8);

                console.error(_context12.t0, 'SET_SCORE_ASYNC');
                return _context12.abrupt('return', null);

              case 16:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[8, 12]]);
      }));

      function setScoreAsync(_x17, _x18) {
        return _ref12.apply(this, arguments);
      }

      return setScoreAsync;
    }()
    // endregion

    // region ******************************* SHARING MESSAGES *******************************
    /**
     * Informs Facebook of an update that occurred in the game. This will temporarily yield
     * control to Facebook and Facebook will decide what to do based on what the update is. The
     * returned promise will resolve/reject when Facebook returns control to the game.
     *
     * @param {string} base64Picture - Data URL of a base64 encoded image.
     * @param {string|LocalizableContent} cta - Optional call-to-action button text. By default we
     * will use a
     * localized 'Play' as the button text. To provide localized versions of your own call to
     * action, pass an object with the default cta as the value of 'default' and another object
     * mapping locale keys to translations as the value of 'localizations'.
     * @param {string|LocalizableContent} text - A text message, or an object with the default
     * text as the value of 'default' and another object mapping locale keys to translations as
     * the value of 'localizations'.
     * @param {object?} data - A blob of data to attach to the update. All game sessions launched
     * from the update will be able to access this blob through FBInstant.getEntryPointData().
     * Must be less than or equal to 1000 characters when stringified.
     * @param {string} template ID of the template this custom update is using. Templates should be
     * predefined in fbapp-config.json. See the Bundle Config documentation for documentation
     * about fbapp-config.json.
     * @returns {boolean} Result of the promise.
     */

  }, {
    key: 'updateAsync',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(base64Picture, cta, text) {
        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'play_turn';
        var success;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context13.next = 2;
                  break;
                }

                return _context13.abrupt('return', true);

              case 2:
                _context13.next = 4;
                return FBInstant.updateAsync({
                  action: 'CUSTOM',
                  cta: cta,
                  image: base64Picture,
                  text: text,
                  template: template,
                  data: data,
                  strategy: 'IMMEDIATE',
                  notification: 'PUSH'
                }).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  return false;
                });

              case 4:
                success = _context13.sent;
                return _context13.abrupt('return', success);

              case 6:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function updateAsync(_x21, _x22, _x23) {
        return _ref13.apply(this, arguments);
      }

      return updateAsync;
    }()

    /**
     * This invokes a dialog to let the user share specified content, either as a message in
     * Messenger or as a post on the user's timeline. A blob of data can be attached to the share
     * which every game session launched from the share will be able to access from
     * FBInstant.getEntryPointData(). This data must be less than or equal to 1000 characters when
     * stringified. The user may choose to cancel the share action and close the dialog, and the
     * returned promise will resolve when the dialog is closed regardless if the user actually
     * shared the content or not.
     *
     * @param {string} image - A base64 encoded image to be shared.
     * @param {string} text - A text message to be shared.
     * @param {object?} data - A blob of data to attach to the share. All game sessions launched
     * from the share will be able to access this blob through FBInstant.getEntryPointData()
     * @param {"INVITE"|"REQUEST"|"CHALLENGE"|"SHARE"} intent - Indicates the intent of the
     * share.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'shareAsync',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(image, text) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var intent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'INVITE';
        var success;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context14.next = 2;
                  break;
                }

                return _context14.abrupt('return', true);

              case 2:
                _context14.next = 4;
                return FBInstant.shareAsync({ intent: intent, image: image, text: text, data: data }).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  return false;
                });

              case 4:
                success = _context14.sent;
                return _context14.abrupt('return', success);

              case 6:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function shareAsync(_x26, _x27) {
        return _ref14.apply(this, arguments);
      }

      return shareAsync;
    }()
    // endregion

    // region ******************************* CONTEXT *******************************
    /**
     * A unique identifier for the current game context. This represents a specific context that
     * the game is being played in (for example, a particular messenger conversation or facebook
     * post). The identifier will be null if game is being played in a solo context. This function
     * should not be called until FBInstant.startGameAsync has resolved.
     *
     * @returns {string|null} A unique identifier for the current game context.
     */

  }, {
    key: 'getContextID',
    value: function getContextID() {
      return this.fbInstantExists ? FBInstant.context.getID() : null;
    }

    /**
     * The type of the current game context. POST - A facebook post. THREAD - A messenger thread.
     * GROUP - A facebook group. SOLO - Default context, where the player is the only participant.
     *
     * @returns {"POST"|"THREAD"|"GROUP"|"SOLO"|null} Type of the current game context.
     */

  }, {
    key: 'getContextType',
    value: function getContextType() {
      return this.fbInstantExists ? FBInstant.context.getType() : null;
    }

    /**
     * This function determines whether the number of participants in the current game context is
     * between a given minimum and maximum, inclusive. If one of the bounds is null only the other
     * bound will be checked against. It will always return the original result for the first call
     * made in a context in a given game play session. Subsequent calls, regardless of arguments,
     * will return the answer to the original query until a context change occurs and the query
     * result is reset. This function should not be called until FBInstant.startGameAsync has
     * resolved.
     *
     * @param {number} minSize - The minimum bound of the context size query.
     * @param {number} maxSize - The maximum bound of the context size query.
     *
     * @returns {boolean} Context size response.
     */

  }, {
    key: 'isSizeBetween',
    value: function isSizeBetween(minSize, maxSize) {
      return this.fbInstantExists ? FBInstant.context.isSizeBetween(minSize, maxSize) : true;
    }

    /**
     * Request a switch into a specific context. If the player does not have permission to enter
     * that context, or if the player does not provide permission for the game to enter that
     * context, this will reject. Otherwise, the promise will resolve when the game has switched
     * into the specified context.
     *
     * @param {string} id ID of the desired context.
     */

  }, {
    key: 'switchAsync',
    value: function switchAsync(id) {
      if (!this.fbInstantExists) {
        return true;
      }

      var success = FBInstant.context.switchAsync(id).then(function () {
        return true;
      }).catch(function (error) {
        console.error(error, 'SWITCH_ASYNC');
        return false;
      });

      return success;
    }

    /**
     * Opens a context selection dialog for the player. If the player selects an available
     * context, the client will attempt to switch into that context, and resolve if successful.
     * Otherwise, if the player exits the menu or the client fails to switch into the new context,
     * this function will reject.
     *
     * @param {object?} options - An object specifying conditions on the contexts that should be
     * offered.
     * @param {Array<ContextFilter>?} options.filters - The set of filters to apply to the context
     * suggestions.
     * @param {number?} options.maxSize - The maximum number of participants that a suggested
     * context should ideally have.
     * @param {number?} options.minSize - The minimum number of participants that a suggested
     * context should ideally have.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'chooseAsync',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(options) {
        var success;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context15.next = 2;
                  break;
                }

                return _context15.abrupt('return', false);

              case 2:
                _context15.next = 4;
                return FBInstant.context.chooseAsync(options).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'CHOOSE_ASYNC');
                  return false;
                });

              case 4:
                success = _context15.sent;
                return _context15.abrupt('return', success);

              case 6:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function chooseAsync(_x28) {
        return _ref15.apply(this, arguments);
      }

      return chooseAsync;
    }()

    /**
     * Attempts to create or switch into a context between a specified player and the current
     * player. The returned promise will reject if the player listed is not a Connected Player of
     * the current player or if the player does not provide permission to enter the new context.
     * Otherwise, the promise will resolve when the game has switched into the new context.
     *
     * @param {string} id - ID of the player.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'createAsync',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(id) {
        var success;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context16.next = 2;
                  break;
                }

                return _context16.abrupt('return', true);

              case 2:
                _context16.next = 4;
                return FBInstant.context.createAsync(id).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'CREATE_ASYNC');
                  return false;
                });

              case 4:
                success = _context16.sent;
                return _context16.abrupt('return', success);

              case 6:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function createAsync(_x29) {
        return _ref16.apply(this, arguments);
      }

      return createAsync;
    }()

    /**
     * Gets an array of #contextplayer objects containing information about active players in the
     * current context (people who played the game in the current context in the last 90 days).
     * This may include the current player.
     *
     * @param {boolean} refresh - Get new batch of context players.
     * @returns {Array<object>} An array of formatted players.
     */

  }, {
    key: 'getPlayersAsync',
    value: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var contextPlayersName, contextPlayers;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt('return', []);

              case 2:
                contextPlayersName = '_context_players_' + this.getContextID();

                if (!(this[contextPlayersName] && !refresh)) {
                  _context17.next = 5;
                  break;
                }

                return _context17.abrupt('return', this[contextPlayersName]);

              case 5:
                contextPlayers = FBInstant.context.getPlayersAsync().catch(function (error) {
                  console.error(error, 'GET_PLAYER_ASYNC');
                  return [];
                });


                this[contextPlayersName] = this[playersToFormattedObject](contextPlayers);

                return _context17.abrupt('return', this[contextPlayersName]);

              case 8:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getPlayersAsync() {
        return _ref17.apply(this, arguments);
      }

      return getPlayersAsync;
    }()
    // endregion

    // region ******************************* ADS MONETIZATION *******************************
    /**
     * Load the interstitial ad and return it.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {{ad: AdInstance, error: object}} An object with the ad instance and error, if any.
     */

  }, {
    key: 'loadInterstitialAdAsync',
    value: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(placementID) {
        var _this5 = this;

        var id, interstitialName, loadingName, eventName, errorObject, interstitial;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context18.next = 2;
                  break;
                }

                return _context18.abrupt('return', { ad: {}, error: null });

              case 2:
                id = _facebook2.default.interstitialAds[placementID] || placementID;
                interstitialName = '_interstitial_' + id;

                // Return a preloaded interstitial.

                if (!this[interstitialName]) {
                  _context18.next = 6;
                  break;
                }

                return _context18.abrupt('return', this[interstitialName]);

              case 6:
                loadingName = '_loading_interstitial_' + id;
                eventName = '_interstitial_signal_' + id;

                this[createEvent](eventName);

                // If it's loading, wait for it to resolve.

                if (!this[loadingName]) {
                  _context18.next = 11;
                  break;
                }

                return _context18.abrupt('return', new Promise(function (resolve) {
                  _this5[eventName].addOnce(resolve);
                }));

              case 11:

                // Start loading
                this[loadingName] = true;

                errorObject = null;

                // Get interstitial

                _context18.next = 15;
                return FBInstant.getInterstitialAdAsync(id).catch(function (error) {
                  console.error(error, 'GET_INTERSTITIAL_AD_ASYNC');
                  errorObject = error;
                  return null;
                });

              case 15:
                interstitial = _context18.sent;

                if (!interstitial) {
                  _context18.next = 19;
                  break;
                }

                _context18.next = 19;
                return interstitial.loadAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  errorObject = error;
                  return false;
                });

              case 19:
                // Stop loading
                this[loadingName] = false;

                this[interstitialName] = { ad: this[interstitialName], error: errorObject };

                // Dispatch the interstitial.
                this[eventName].dispatch(this[interstitialName]);

                return _context18.abrupt('return', this[interstitialName]);

              case 23:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function loadInterstitialAdAsync(_x31) {
        return _ref18.apply(this, arguments);
      }

      return loadInterstitialAdAsync;
    }()

    /**
     * Show an interstitial ad. After watching it will preload a new interstitial.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {{success: boolean, error: object}} Object with success and/or error.
     */

  }, {
    key: 'showInterstitialAdAsync',
    value: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(placementID) {
        var id, interstitialObject, result;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context19.next = 2;
                  break;
                }

                return _context19.abrupt('return', true);

              case 2:
                id = _facebook2.default.interstitialAds[placementID] || placementID;
                _context19.next = 5;
                return this.loadInterstitialAdAsync(id);

              case 5:
                interstitialObject = _context19.sent;

                if (interstitialObject.ad) {
                  _context19.next = 8;
                  break;
                }

                return _context19.abrupt('return', { success: false, error: interstitialObject.error });

              case 8:
                _context19.next = 10;
                return interstitialObject.ad.showAsync().then(function () {
                  return { success: true, error: null };
                }).catch(function (error) {
                  console.error(error);
                  return { success: false, error: error };
                });

              case 10:
                result = _context19.sent;


                // Remove reference to the ad.
                interstitialObject.ad = null;
                this['_interstitial_' + id] = null;

                // Load a new interstitial ad
                this.loadInterstitialAdAsync(id);
                return _context19.abrupt('return', result);

              case 15:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function showInterstitialAdAsync(_x32) {
        return _ref19.apply(this, arguments);
      }

      return showInterstitialAdAsync;
    }()

    /**
     * Load the rewarded video and return it.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {AdInstance} An ad instance, or rejects with a api error if it couldn't be created.
     */

  }, {
    key: 'loadRewardedVideoAsync',
    value: function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(placementID) {
        var _this6 = this;

        var id, rewardedVideoName, loadingName, eventName, errorObject, rewardedVideo;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt('return', { ad: {}, error: null });

              case 2:
                id = _facebook2.default.rewardedVideos[placementID] || placementID;
                rewardedVideoName = '_rewardedVideo_' + id;

                // Return a preloaded rewarded video.

                if (!this[rewardedVideoName]) {
                  _context20.next = 6;
                  break;
                }

                return _context20.abrupt('return', this[rewardedVideoName]);

              case 6:
                loadingName = '_loading_rewarded_video_' + id;
                eventName = '_rewarded_video_signal_' + id;

                this[createEvent](eventName);

                // If it's loading, wait for it to resolve.

                if (!this[loadingName]) {
                  _context20.next = 11;
                  break;
                }

                return _context20.abrupt('return', new Promise(function (resolve) {
                  _this6[eventName].addOnce(resolve);
                }));

              case 11:

                // Start loading
                this[loadingName] = true;

                errorObject = null;

                // Get rewarded video

                _context20.next = 15;
                return FBInstant.getRewardedVideoAsync(id).catch(function (error) {
                  console.error(error, 'GET_INTERSTITIAL_AD_ASYNC');
                  errorObject = error;
                  return null;
                });

              case 15:
                rewardedVideo = _context20.sent;

                if (!rewardedVideo) {
                  _context20.next = 19;
                  break;
                }

                _context20.next = 19;
                return rewardedVideo.loadAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  errorObject = error;
                  return false;
                });

              case 19:

                // Set rewarded video as global
                this[rewardedVideoName] = { ad: rewardedVideo, error: errorObject };

                // Stop loading
                this[loadingName] = false;

                // Dispatch the rewarded video.
                this[eventName].dispatch(this[rewardedVideoName]);

                return _context20.abrupt('return', this[rewardedVideoName]);

              case 23:
              case 'end':
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function loadRewardedVideoAsync(_x33) {
        return _ref20.apply(this, arguments);
      }

      return loadRewardedVideoAsync;
    }()

    /**
     * Show a rewarded video. After watching it will preload a new rewarded video.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {{ success: boolean, error: object} Object with success and error keys.
     */

  }, {
    key: 'showRewardedVideoAsync',
    value: function () {
      var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(placementID) {
        var id, rewardedVideoObject, result;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context21.next = 2;
                  break;
                }

                return _context21.abrupt('return', true);

              case 2:
                id = _facebook2.default.rewardedVideos[placementID] || placementID;
                _context21.next = 5;
                return this.loadRewardedVideoAsync(id);

              case 5:
                rewardedVideoObject = _context21.sent;

                if (rewardedVideoObject.ad) {
                  _context21.next = 8;
                  break;
                }

                return _context21.abrupt('return', { success: false, error: rewardedVideoObject.error });

              case 8:
                _context21.next = 10;
                return rewardedVideoObject.ad.showAsync().then(function () {
                  return { success: true, error: null };
                }).catch(function (error) {
                  console.error(error);
                  return { success: false, error: error };
                });

              case 10:
                result = _context21.sent;


                // Remove reference to the ad.
                rewardedVideoObject.ad = null;
                this['_rewardedVideo_' + id] = null;

                // Load a new rewarded video
                this.loadRewardedVideoAsync(id);
                return _context21.abrupt('return', result);

              case 15:
              case 'end':
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function showRewardedVideoAsync(_x34) {
        return _ref21.apply(this, arguments);
      }

      return showRewardedVideoAsync;
    }()
    // endregion

    // region ******************************* IN APP PURCHASES *******************************
    /**
     * Sets a callback to be triggered when Payments operations are available.
     *
     * @param {function} callback - The callback function to be executed when Payments are available.
     * @param {object} context - The context of the callback.
     */

  }, {
    key: 'paymentsOnReady',
    value: function paymentsOnReady(callback, context) {
      var _this7 = this;

      if (!this.fBInstantExists) {
        this[doCallback](callback, context);
        return;
      }

      FBInstant.payments.onReady(function () {
        _this7[doCallback](callback, context);
      });
    }

    /**
     * Fetches the game's product catalog.
     *
     * @returns {Array<Product>} The set of products that are registered to the game.
     */

  }, {
    key: 'getCatalogAsync',
    value: function () {
      var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context22.next = 2;
                  break;
                }

                return _context22.abrupt('return', []);

              case 2:
                _context22.next = 4;
                return FBInstant.payments.getCatalogAsync().catch(function (error) {
                  console.error(error, 'GET_CATALOG_ASYNC');
                  return [];
                });

              case 4:
                this.catalog = _context22.sent;
                return _context22.abrupt('return', this.catalog);

              case 6:
              case 'end':
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getCatalogAsync() {
        return _ref22.apply(this, arguments);
      }

      return getCatalogAsync;
    }()

    /**
     * Begins the purchase flow for a specific product. Will immediately reject if called before
     * FBInstant.startGameAsync() has resolved.
     *
     * @param {string} productID - The identifier of the product to purchase.
     * @param {string?} developerPayload - An optional developer-specified payload, to be included
     * in the returned purchase's signed request.
     * @returns {Purchase|null} The product that is successfully purchased by the player. Otherwise,
     * it rejects and returns null.
     */

  }, {
    key: 'purchaseAsync',
    value: function () {
      var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(productID, developerPayload) {
        var purchase;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context23.next = 2;
                  break;
                }

                return _context23.abrupt('return', true);

              case 2:
                _context23.next = 4;
                return FBInstant.payments.purchaseAsync({ productID: productID, developerPayload: developerPayload }).catch(function (error) {
                  console.error(error, 'PURCHASE_ASYNC');
                  return null;
                });

              case 4:
                purchase = _context23.sent;
                return _context23.abrupt('return', purchase);

              case 6:
              case 'end':
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function purchaseAsync(_x35, _x36) {
        return _ref23.apply(this, arguments);
      }

      return purchaseAsync;
    }()

    /**
     * Fetches all of the player's unconsumed purchases. The game must fetch the current player's
     * purchases as soon as the client indicates that it is ready to perform payments-related
     * operations, i.e. at game start. The game can then process and consume any purchases that
     * are waiting to be consumed.
     *
     * @returns {Array<Purchase>} The set of purchases that the player has made for the game.
     */

  }, {
    key: 'getPurchasesAsync',
    value: function () {
      var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
        var purchases;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt('return', []);

              case 2:
                _context24.next = 4;
                return FBInstant.payments.getPurchasesAsync();

              case 4:
                purchases = _context24.sent;
                return _context24.abrupt('return', purchases);

              case 6:
              case 'end':
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function getPurchasesAsync() {
        return _ref24.apply(this, arguments);
      }

      return getPurchasesAsync;
    }()

    /**
     * Consumes a specific purchase belonging to the current player. Before provisioning a
     * product's effects to the player, the game should request the consumption of the purchased
     * product. Once the purchase is successfully consumed, the game should immediately provide
     * the player with the effects of their purchase.
     *
     * @param {string} purchaseToken - The purchase token of the purchase that should be consumed.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'consumePurchaseAsync',
    value: function () {
      var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(purchaseToken) {
        var success;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context25.next = 2;
                  break;
                }

                return _context25.abrupt('return', true);

              case 2:
                _context25.next = 4;
                return FBInstant.payments.consumePurchaseAsync(purchaseToken).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  return false;
                });

              case 4:
                success = _context25.sent;
                return _context25.abrupt('return', success);

              case 6:
              case 'end':
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function consumePurchaseAsync(_x37) {
        return _ref25.apply(this, arguments);
      }

      return consumePurchaseAsync;
    }()
    // endregion

    // region ******************************* SUBSCRIBE BOT *******************************

    /**
     * Returns a promise that resolves with whether the player can subscribe to the game bot or not.
     *
     * @returns {boolean} Whether a player can subscribe to the game bot or not. Developer can
     * only call subscribeBotAsync() after checking canSubscribeBotAsync(), and the player will
     * only see this bot subscription dialog once every 90 days for a given game.
     */

  }, {
    key: 'canSubscribeBotAsync',
    value: function () {
      var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt('return', true);

              case 2:
                _context26.next = 4;
                return FBInstant.player.canSubscribeBotAsync().catch(function (error) {
                  console.error(error, 'CAN_SUBSCRIBE_BOT_ASYNC');
                  return false;
                });

              case 4:
                this.canSubscribeBot = _context26.sent;
                return _context26.abrupt('return', this.canSubscribeBot);

              case 6:
              case 'end':
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function canSubscribeBotAsync() {
        return _ref26.apply(this, arguments);
      }

      return canSubscribeBotAsync;
    }()

    /**
     * Request that the player subscribe the bot associated to the game. The API will reject if
     * the subscription fails - else, the player will subscribe the game bot.
     *
     * @returns {boolean} If player successfully subscribed to the game bot, or rejects if request
     * failed or player chose to not subscribe.
     */

  }, {
    key: 'subscribeBotAsync',
    value: function () {
      var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
        var canSubscribe, success;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context27.next = 2;
                  break;
                }

                return _context27.abrupt('return', true);

              case 2:

                if (!_facebook2.default.subscribeBot) {
                  console.warn('Subscribe bot is turned off. Turn it on in the facebook.config.js');
                }

                if (!(this.canSubscribeBot === false)) {
                  _context27.next = 5;
                  break;
                }

                return _context27.abrupt('return', false);

              case 5:
                if (!(this.canSubscribeBot === undefined)) {
                  _context27.next = 11;
                  break;
                }

                _context27.next = 8;
                return this.canSubscribeBotAsync();

              case 8:
                canSubscribe = _context27.sent;

                if (canSubscribe) {
                  _context27.next = 11;
                  break;
                }

                return _context27.abrupt('return', false);

              case 11:
                success = FBInstant.player.subscribeBotAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'SUBSCRIBE_BOT');
                  return false;
                });
                return _context27.abrupt('return', success);

              case 13:
              case 'end':
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function subscribeBotAsync() {
        return _ref27.apply(this, arguments);
      }

      return subscribeBotAsync;
    }()
    // endregion

    // region ******************************* CREATE SHORTCUT *******************************
    /**
     * Returns whether or not the user is eligible to have shortcut creation requested. Will
     * return false if createShortcutAsync was already called this session or the user is
     * ineligible for shortcut creation.
     *
     * @returns {boolean} True if the game can request the player create a shortcut to the game,
     * and false otherwise
     */

  }, {
    key: 'canCreateShortcutAsync',
    value: function () {
      var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context28.next = 3;
                  break;
                }

                this.canCreateShortcut = true;
                return _context28.abrupt('return', this.canCreateShortcut);

              case 3:
                _context28.next = 5;
                return FBInstant.canCreateShortcutAsync().catch(function (error) {
                  console.error(error, 'CAN_CREATE_SHORTCUT_ASYNC');
                  return false;
                });

              case 5:
                this.canCreateShortcut = _context28.sent;
                return _context28.abrupt('return', this.canCreateShortcut);

              case 7:
              case 'end':
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function canCreateShortcutAsync() {
        return _ref28.apply(this, arguments);
      }

      return canCreateShortcutAsync;
    }()

    /**
     * Prompts the user to create a shortcut to the game if they are eligible to Can only be called
     * once per session. (see canCreateShortcutAsync)
     *
     * @returns {boolean} If player successfully create a shortcut, or rejects if
     * request failed or player chose to not create.
     */

  }, {
    key: 'createShortcutAsync',
    value: function () {
      var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
        var canCreateShortcut, success;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context29.next = 2;
                  break;
                }

                return _context29.abrupt('return', true);

              case 2:

                if (!_facebook2.default.createShortcut) {
                  console.warn('Create shortcut is turned off. Turn it on in the facebook.config.js');
                }

                if (!(this.canCreateShortcut === false)) {
                  _context29.next = 5;
                  break;
                }

                return _context29.abrupt('return', false);

              case 5:
                if (!(this.canCreateShortcut === undefined)) {
                  _context29.next = 11;
                  break;
                }

                _context29.next = 8;
                return this.canCreateShortcutAsync();

              case 8:
                canCreateShortcut = _context29.sent;

                if (canCreateShortcut) {
                  _context29.next = 11;
                  break;
                }

                return _context29.abrupt('return', false);

              case 11:
                success = FBInstant.player.createShortcutAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'CREATE_SHORTCUT');
                  return false;
                });
                return _context29.abrupt('return', success);

              case 13:
              case 'end':
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function createShortcutAsync() {
        return _ref29.apply(this, arguments);
      }

      return createShortcutAsync;
    }()
    // endregion

    // region ******************************* EVENTS *******************************
    /**
     * Sets the data associated with the individual gameplay session for the current context. This
     * function should be called whenever the game would like to update the current session data.
     * This session data may be used to populate a variety of payloads, such as game play webhooks.
     *
     * @param {object} sessionData - An arbitrary data object, which must be less than or equal to
     * 1000 characters when stringified.
     */

  }, {
    key: 'setSessionData',
    value: function setSessionData(sessionData) {
      if (!this.fBInstantExists) {
        return;
      }

      FBInstant.setSessionData(sessionData);
    }

    /**
     * Sends a custom event to the Facebook server. The events can be used to track user metrics.
     * @param {string} eventName - Name of the event. Must be 2 to 40 characters, and can only
     * contain '_', '-', ' ', and alphanumeric characters.
     * @param {number} valueToSum - An optional numeric value that FB Analytics can calculate a
     * sum with.
     * @param {object} parameters An optional object that can contain up to 25 key-value pairs to
     * be logged with the event Keys must be 2 to 40 characters, and can only contain '_', '-', '
     * ', and alphanumeric characters. Values must be less than 100 characters in length.
     */

  }, {
    key: 'logEvent',
    value: function logEvent(eventName, valueToSum, parameters) {
      if (!this.fBInstantExists) {
        return;
      }

      FBInstant.logEvent(eventName, valueToSum, parameters);
    }

    /**
     * A custom method to log specific error events. It uses both Facebook API and a custom
     * backend to log error logs.
     *
     * @param {string|object} err - An error object or string.
     * @param eventName
     */

  }, {
    key: 'logErrorEvent',
    value: function logErrorEvent(err) {
      var eventName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'UNKNOWN';

      try {
        if (err.code === 'USER_INPUT') {
          return;
        }

        if (err.code) {
          this.logEvent('ERROR_' + eventName, 1, { code: err.code, message: err.message });
          return;
        }

        var stringArray = void 0;
        var dataArray = (JSON.stringify(this.data) || ' ').match(/.{1,100}/g);
        var statsArray = (JSON.stringify(this.stats) || ' ').match(/.{1,100}/g);

        // TODO customize it to be able to send logs to our own backend.
        // FetchData.log({
        //   event_name: eventName,
        //   error: JSON.stringify(error.stack),
        //   data: JSON.stringify(DataManager.instance.facebookData),
        //   platform: Facebook.instance.getPlatform(),
        //   player_id: Facebook.instance.getPlayerID(),
        //   browser: getBrowser(),
        // });

        if (typeof err.stack === 'string') {
          stringArray = err.stack.match(/.{1,100}/g);
        } else if (typeof error === 'string') {
          stringArray = err.match(/.{1,100}/g);
        } else {
          stringArray = [' '];
        }

        var fusedArray = [].concat(_toConsumableArray(dataArray), _toConsumableArray(stringArray), _toConsumableArray(statsArray));
        var parameters = {};

        for (var i = 0, length = Math.min(fusedArray.length, 25); i < length; i += 1) {
          parameters['error' + i] = fusedArray[i];
        }

        this.logEvent('ERROR_' + eventName, 1, parameters);
      } catch (error) {
        if (eventName === 'PROXYWARNINGLOG') {
          return;
        }
        // FetchData.log({
        //   event_name: 'ERROR_INTERNAL_SERVER_ERROR',
        //   error: JSON.stringify(error),
        //   data: JSON.stringify(DataManager.instance.facebookData),
        //   platform: Facebook.instance.getPlatform(),
        //   player_id: Facebook.instance.getPlayerID(),
        //   browser: getBrowser(),
        // });

        var _stringArray = JSON.stringify(error).match(/.{1,100}/g);
        var _parameters = {};

        for (var _i = 0, _length = Math.min(_stringArray.length, 25); _i < _length; _i += 1) {
          _parameters['error' + _i] = _stringArray[_i];
        }

        this.logEvent('ERROR_INTERNAL_SERVER_ERROR', 1, _parameters);
      }
    }
    // endregion

    // region ******************************* NON-FACEBOOK API *******************************
    /**
     * Execute the callback.
     *
     * @param {function} callback - The callback that needs to be executed.
     * @param {object} context - The context of the callback.
     * @param {*} parameter - The parameters for the callback.
     */

  }, {
    key: doCallback,
    value: function value(callback, context) {
      if (typeof callback === 'function') {
        for (var _len = arguments.length, parameter = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          parameter[_key - 2] = arguments[_key];
        }

        callback.call.apply(callback, [context].concat(parameter));
      }
    }

    /**
     * Convert entries to a object with only key value pairs.
     *
     * @param {object|Array<object>} entries - Entries that needs to be converted.
     * @returns {object|Array<object>} Formatted entry or array of formatted entries.
     */

  }, {
    key: entriesToFormattedObject,
    value: function value(entries) {
      if (Array.isArray(entries)) {
        return entries.map(function (entry) {
          return {
            name: entry.getPlayer().getName(),
            id: entry.getPlayer().getID(),
            photoUrl: entry.getPlayer().getPhoto(),
            rank: entry.getRank(),
            score: entry.getScore(),
            data: (0, _utils.parseJSONSingle)(entry.getExtraData()),
            timestamp: entry.getTimestamp()
          };
        });
      }

      return {
        name: entries.getPlayer().getName(),
        id: entries.getPlayer().getID(),
        photoUrl: entries.getPlayer().getPhoto(),
        rank: entries.getRank(),
        score: entries.getScore(),
        data: (0, _utils.parseJSONSingle)(entries.getExtraData()),
        timestamp: entries.getTimestamp()
      };
    }

    /**
     * Convert players to a object with only key value pairs.
     *
     * @param {object|Array<object>} players - Players that needs to be converted.
     * @returns {object|Array<object>} Formatted player or array of formatted players.
     */

  }, {
    key: playersToFormattedObject,
    value: function value(players) {
      if (Array.isArray(players)) {
        return players.map(function (player) {
          return {
            name: player.getName(),
            id: player.getID(),
            photoUrl: player.getPhoto()
          };
        });
      }

      return {
        name: players.getName(),
        id: players.getID(),
        photoUrl: players.getPhoto()
      };
    }

    /**
     * Get a default player entry.
     *
     * @returns {{photoUrl: string, score: number, data: {}, name: string, rank: string, id: string}}
     */

  }, {
    key: getDefaultPlayerEntry,
    value: function value() {
      return {
        name: this.getPlayerName(),
        id: this.getPlayerID(),
        photoUrl: this.getPlayerPhoto(),
        score: 0,
        rank: '--',
        data: {}
      };
    }

    // TODO don't use phaser signals. Replace it with event listeners.

  }, {
    key: createEvent,
    value: function value(signalName) {
      if (!this[signalName]) {
        this[signalName] = new _phaser.Signal();
      }
    }
    // endregion

  }]);

  return Facebook;
}(_singleton2.default);

// module.exports = Facebook;


exports.default = Facebook;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the general Image class used for displaying images in game.
 * The settings of the images can easily be set using an object as the constructor.
 * It accepts the following keys:
 * key {string} The key of the texture*.
 * frame {string} If the texture is using an atlas, you can specify the frame of the texture atlas.
 * position Point Position of the image. Default value is { x: 0, y: 0 }.
 * anchor Point Anchor of the image. Default value is { x: 0.5, y: 0.5 }.
 * scale {[number [,number]]} The scale of the image. If the second index is undefined,
 * inputEnabled {bool} Set to true if click events are required for this image. Default is false;
 */
var _class = function (_Image) {
  _inherits(_class, _Image);

  function _class(_ref) {
    var key = _ref.key,
        frame = _ref.frame,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? new _phaser.Point(0, 0) : _ref$position,
        _ref$anchor = _ref.anchor,
        anchor = _ref$anchor === undefined ? new _phaser.Point(0.5, 0.5) : _ref$anchor,
        _ref$scale = _ref.scale,
        scale = _ref$scale === undefined ? new _phaser.Point(1, 1) : _ref$scale,
        _ref$inputEnabled = _ref.inputEnabled,
        inputEnabled = _ref$inputEnabled === undefined ? false : _ref$inputEnabled;

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, position.x || 0, position.y || 0, key, frame));

    _this.anchor.setTo(anchor.x, anchor.y);
    _this.scale.setTo(scale.x, scale.y);
    _this.inputEnabled = inputEnabled;

    if (inputEnabled) {
      _this.inputEnabled = inputEnabled;

      _this.events.onInputUp.add(function () {
        _this.doInputUp();
      });

      _this.events.onInputDown.add(function () {
        _this.doInputDown();
      });
    }
    return _this;
  }

  /**
   * When the image is clicked and the input is down this method is called.
   * Override this method.
   */


  _createClass(_class, [{
    key: "doInputDown",
    value: function doInputDown() {
      console.warn("This image doesn't have a input down function, please override this function");
    }

    /**
     * When the image is clicked and the input is up this method is called.
     * Override this method.
     */

  }, {
    key: "doInputUp",
    value: function doInputUp() {
      console.warn("This image doesn't have a input up function, please override this function");
    }
  }]);

  return _class;
}(_phaser.Image);

exports.default = _class;

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(20);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(32) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(11);
var SPECIES = __webpack_require__(6)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  buttonClickSFX: '',
  language: {
    path: 'assets/runtime/json/languages/',
    default: 'en_US',
    supported: ['en', 'us']
  },
  text: {
    font: 'Arial',
    color: '',
    align: 'center',
    boundsAlignH: 'center',
    boundsAlignV: 'middle',
    stroke: '#000000',
    strokeThickness: 0
  },

  // List of all signal names.
  signalNames: ['gameManager:updateScore', 'localisationManager:onLanguageChange']
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _default = __webpack_require__(60);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Private methods.
var checkValidNamespaceAndSignal = Symbol('checkValidNamespaceAndSignal');
var createSignal = Symbol('createSignal');
var getSignal = Symbol('getSignal');

var SignalManager = function (_Singleton) {
  _inherits(SignalManager, _Singleton);

  function SignalManager() {
    _classCallCheck(this, SignalManager);

    var _this = _possibleConstructorReturn(this, (SignalManager.__proto__ || Object.getPrototypeOf(SignalManager)).call(this));

    _this._signals = {};

    // Create all signals
    _default2.default.signalNames.forEach(function (name) {
      _this[createSignal](name);
    });
    return _this;
  }

  /**
   * Create a new signal. It will fail if the signalName is empty or isn't a string.
   *
   * @returns {*} The new created signal.
   * @param signalName Name of the signal.
   */


  _createClass(SignalManager, [{
    key: createSignal,
    value: function value(signalName) {
      if ((!signalName || signalName.length === 0) && typeof signalName !== 'string') {
        console.warn("This signal doesn't have a name!");
        return null;
      }

      if (this._signals[signalName]) {
        console.warn('_signals.' + signalName + ' already exists!');
        return this._signals[signalName];
      }

      this._signals[signalName] = new _phaser2.default.Signal();

      return this._signals[signalName];
    }

    /**
     * Return the signal
     *
     * @returns {Signal} Return the Phaser.Signal object.
     * @param signalName Name of the signal.
     */

  }, {
    key: getSignal,
    value: function value(signalName) {
      return this._signals[signalName];
    }

    /**
     * Dispatch the signal. If the signal doesn't exists, it will create the signal.
     *
     * @param signalName Name of the signal
     */

  }, {
    key: 'dispatch',
    value: function dispatch(signalName) {
      var signal = this[getSignal](signalName);

      if (!signal) {
        this[createSignal](signalName);

        console.warn('_signals.' + signalName + ' does not exists. It has been created, but add it to the default.js too!');
        return;
      }

      for (var _len = arguments.length, parameters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }

      signal.dispatch.apply(signal, parameters);
    }

    /**
     * Add an eventlistener to the signal.
     *
     * @param signalName Name of the signal
     * @param callback Callback is called with the signal is dispatched.
     * @param context Context of the callback
     */

  }, {
    key: 'add',
    value: function add(signalName, callback, context) {
      if (typeof callback !== 'function') {
        console.warn(signalName + ' does not have a valid callback. This method is ignored.');
        return;
      }

      var signal = this[getSignal](signalName);

      if (!signal) {
        this[createSignal](signalName);

        console.warn('_signals.' + signalName + ' does not exists. It has been created, but add it to the default.js too!');
        return;
      }

      signal.add(callback, context);
    }

    /**
     * Add an eventlistener to the signal.
     * This eventlistener will destroy it self after using it once.
     *
     * @param signalName Name of the signal
     * @param callback Callback is called with the signal is dispatched.
     * @param context Context of the callback
     */

  }, {
    key: 'addOnce',
    value: function addOnce(signalName, callback, context) {
      var signal = this[getSignal](signalName) || this[createSignal](signalName);

      signal.addOnce(callback, context);
    }

    /**
     * Checks if the signal exists
     * @returns {boolean} True if the signal exists, else false.
     * @param signalName Name of the signal.
     */

  }, {
    key: checkValidNamespaceAndSignal,
    value: function value(signalName) {
      return !!this._signals[signalName];
    }

    /**
     * Return an object with all signals in it.
     * @returns {{}} Object with all signals.
     */

  }, {
    key: 'getAllSignals',
    value: function getAllSignals() {
      // TODO find certain signal
      return this._signals;
    }
  }, {
    key: 'getSignal',
    value: function getSignal(name) {
      return this._signals[name];
    }

    /**
     * Remove listener of a signal.
     *
     * @param signalName {string} Name of the signal.
     * @param listener {function} Listener that needs to be removed.
     * @param [context] {*} Context of the listener.
     */

  }, {
    key: 'removeListener',
    value: function removeListener(signalName, listener, context) {
      var signal = this[getSignal](signalName);

      if (!signal) {
        console.warn(signalName, 'does not exists.');
        return;
      }

      signal.remove(listener, context);
    }

    /**
     * Remove all listeners of a signal.
     *
     * @param signalName {string} Name of the signal.
     * @param [context] {*} Context of the signal.
     */

  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners(signalName, context) {
      var signal = this[getSignal](signalName);

      if (!signal) {
        console.warn(signalName, 'does not exists.');
        return;
      }

      signal.removeAll(context);
    }
  }]);

  return SignalManager;
}(_singleton2.default);

exports.default = SignalManager;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(7);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5);
var cof = __webpack_require__(22);
var MATCH = __webpack_require__(6)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(49);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(129);
var redefine = __webpack_require__(13);
var hide = __webpack_require__(12);
var fails = __webpack_require__(4);
var defined = __webpack_require__(26);
var wks = __webpack_require__(6);
var regexpExec = __webpack_require__(98);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(13);
var redefineAll = __webpack_require__(44);
var meta = __webpack_require__(33);
var forOf = __webpack_require__(43);
var anInstance = __webpack_require__(42);
var isObject = __webpack_require__(5);
var fails = __webpack_require__(4);
var $iterDetect = __webpack_require__(67);
var setToStringTag = __webpack_require__(48);
var inheritIfRequired = __webpack_require__(84);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(12);
var uid = __webpack_require__(36);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(32) || !__webpack_require__(4)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(2)[K];
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(11);
var ctx = __webpack_require__(21);
var forOf = __webpack_require__(43);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var clamp = exports.clamp = function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.min(Math.max(value, min), max);
};

// Try to parse the stringified json.
var parseJSON = exports.parseJSON = function parseJSON(json) {
  var parsedJSON = {};

  Object.keys(json).forEach(function (key) {
    try {
      parsedJSON[key] = JSON.parse(json[key]);
    } catch (e) {
      parsedJSON[key] = json[key];
    }
  });

  return parsedJSON;
};

var parseJSONSingle = exports.parseJSONSingle = function parseJSONSingle(value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value || {};
  }
};

// Stringify the whole json.
var stringifyJSON = exports.stringifyJSON = function stringifyJSON(json) {
  var stringifiedJSON = {};

  Object.keys(json).forEach(function (key) {
    stringifiedJSON[key] = JSON.stringify(json[key]);
  });

  return stringifiedJSON;
};

var getBrowser = exports.getBrowser = function getBrowser() {
  if (game.device.chrome) return 'chrome';
  if (game.device.arora) return 'arora';
  if (game.device.edge) return 'edge';
  if (game.device.epiphany) return 'epiphany';
  if (game.device.firefox) return 'firefox';
  if (game.device.mobileSafari) return 'mobileSafari';
  if (game.device.ie) return 'ie';
  if (game.device.midori) return 'midori';
  if (game.device.safari) return 'safari';
  if (game.device.trident) return 'trident';
  if (game.device.silk) return 'silk';
  if (game.device.webApp) return 'webApp';
  return 'UNDEFINED';
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(20);
var LIBRARY = __webpack_require__(32);
var wksExt = __webpack_require__(111);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(55)('keys');
var uid = __webpack_require__(36);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(21)(Function.call, __webpack_require__(17).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var setPrototypeOf = __webpack_require__(82).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(23);
var defined = __webpack_require__(26);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(13);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(51);
var $iterCreate = __webpack_require__(89);
var setToStringTag = __webpack_require__(48);
var getPrototypeOf = __webpack_require__(18);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(35);
var setToStringTag = __webpack_require__(48);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(66);
var defined = __webpack_require__(26);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(6)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(51);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(9);
var createDesc = __webpack_require__(35);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(49);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(51);
module.exports = __webpack_require__(20).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(252);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(7);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(34);
var step = __webpack_require__(128);
var Iterators = __webpack_require__(51);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(88)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(58);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(65)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(118);
var html = __webpack_require__(81);
var cel = __webpack_require__(77);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(22)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(100).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(22)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(11);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(8);
var LIBRARY = __webpack_require__(32);
var $typed = __webpack_require__(72);
var hide = __webpack_require__(12);
var redefineAll = __webpack_require__(44);
var fails = __webpack_require__(4);
var anInstance = __webpack_require__(42);
var toInteger = __webpack_require__(23);
var toLength = __webpack_require__(7);
var toIndex = __webpack_require__(138);
var gOPN = __webpack_require__(40).f;
var dP = __webpack_require__(9).f;
var arrayFill = __webpack_require__(96);
var setToStringTag = __webpack_require__(48);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _famobiApi = __webpack_require__(46);

var _famobiApi2 = _interopRequireDefault(_famobiApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class controls what happens with the sound. Sounds will be added when it's loaded
 * and be accessed by any script using the correct key.
 */
var SoundManager = function (_Singleton) {
  _inherits(SoundManager, _Singleton);

  function SoundManager() {
    _classCallCheck(this, SoundManager);

    var _this = _possibleConstructorReturn(this, (SoundManager.__proto__ || Object.getPrototypeOf(SoundManager)).call(this));

    _this._soundList = [];

    _this._sfxVolume = _famobiApi2.default.instance.getLocalStorageItem('sound');
    _this._bgmVolume = _famobiApi2.default.instance.getLocalStorageItem('music');

    if(window.famobi.hasFeature("external_mute")) {
      _this._sfxVolume = window.famobi.getVolume() ? 1 : 0;
      _this._bgmVolume = window.famobi.getVolume() ? 1 : 0;
    }

    if (!Number.isFinite(_this._sfxVolume)) {
      _this._sfxVolume = 1;
    }

    if (!Number.isFinite(_this._bgmVolume)) {
      _this._bgmVolume = 1;
    }

    window.famobi.onRequest("changeVolume", function(vol) {
      vol ? _this._unmute() : _this._mute();
    });

    _famobiApi2.default.instance.setOnPauseRequested(_this._mute.bind(_this));
    _famobiApi2.default.instance.setOnResumeRequested(_this._unmute.bind(_this));
    return _this;
  }

  _createClass(SoundManager, [{
    key: '_mute',
    value: function _mute() {
      game.sound.mute = true;
      this._muted = true;

      if (Array.isArray(this._soundList)) {
        this._soundList.forEach(function (sound) {
          sound.volume = 0;
        });
      }
    }
  }, {
    key: '_unmute',
    value: function _unmute() {
      game.sound.mute = false;
      this._muted = false;
      if (Array.isArray(this._soundList)) {
        this._soundList.forEach(function (sound) {
          sound.volume = 1;
        });
      }
    }

    /**
     * Add a sound to the game.
     * @param key Key of the sound.
     * @param loop If true, the sound will loop when played.
     * @param allowMultiple This will allow you to have multiple instances of this
     * Sound playing at once.
     */

  }, {
    key: 'addSound',
    value: function addSound(key) {
      var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var allowMultiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var sound = new _phaser2.default.Sound(game, key, 1, loop);
      sound.allowMultiple = allowMultiple;
      this._soundList.push(sound);
    }

    /**
     * Return the sound.
     * @param key Key of the sound
     * @returns {*} Phaser.Sound
     */

  }, {
    key: 'getSound',
    value: function getSound(key) {
      if (!this._soundList) {
        return null;
      }

      return this._soundList.find(function (x) {
        return x.key === key;
      });
    }

    /**
     * Play a sound.
     * @param key Key of the sound that needs to be played.
     */

  }, {
    key: 'stopSound',
    value: function stopSound(key) {
      var sound = this.getSound(key);

      if (!sound) {
        console.log('no sound found');
        return;
      }

      sound.stop();
    }
  }, {
    key: 'playSound',
    value: function playSound(key) {
      var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var noise = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (key !== 'main_theme1' && !noise) return;
      var sound = this.getSound(key);

      if (!sound) {
        console.log('no sound found');
        return;
      }

      var masterVolume = key === 'main_theme1' ? this._bgmVolume : this._sfxVolume;

      if (sound.volume !== 0) {
        sound.volume = (volume > 1 ? 1 : volume) * masterVolume;
      }
      sound.loop = loop;
      sound.play();

      if (key === 'main_theme1' && !sound.isPlaying) {
        var interval = setInterval(function () {
          sound.play();

          if (sound.isPlaying) {
            clearInterval(interval);
          }
        }, 1000);
      }

      if (sound.usingWebAudio && sound.context.state !== 'running') {
        game.input.mouse.mouseUpCallback = function () {
          sound.context.resume();
          game.input.mouse.mouseUpCallback = null;
        };

        game.input.touch.touchEndCallback = function () {
          sound.context.resume();
          game.input.mouse.touchEndCallback = null;
        };
      }
    }
  }, {
    key: 'soundList',
    get: function get() {
      return this._soundList;
    }
  }, {
    key: 'sfxSetting',
    get: function get() {
      return this._sfxVolume;
    },
    set: function set(volume) {
      this._sfxVolume = volume;

      _famobiApi2.default.instance.setLocalStorageItem('sound', volume);
      _famobiApi2.default.instance.onVolumeChange(this._bgmVolume, this._sfxVolume);
    }
  }, {
    key: 'bgmSetting',
    get: function get() {
      return this._bgmVolume;
    },
    set: function set(volume) {
      this._bgmVolume = volume;

      _famobiApi2.default.instance.setLocalStorageItem('music', volume);
      _famobiApi2.default.instance.onVolumeChange(this._bgmVolume, this._sfxVolume);
    }
  }]);

  return SoundManager;
}(_singleton2.default);

exports.default = SoundManager;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleton = Symbol('singleton');

/**
 * This is the super class singleton. Inherit this class if you want to create a singleton
 * You can either use [SUBCLASS_NAME].instance or new [SUBCLASS_NAME], but [SUBCLASS_NAME].instance
 * is preferred, because no new instance is created.
 */

var Singleton = function () {
  _createClass(Singleton, null, [{
    key: 'instance',

    /**
     * Return the instance of the singleton.
     * @returns {*} Return the instance.
     */
    get: function get() {
      if (!this[singleton]) {
        this[singleton] = new this();
      }

      return this[singleton];
    }
  }]);

  function Singleton() {
    _classCallCheck(this, Singleton);

    var Class = this.constructor;

    if (!Class[singleton]) {
      Class[singleton] = this;
    }

    return Class[singleton];
  }

  return Singleton;
}();

exports.default = Singleton;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  BASE_GAME_HEIGHT: 1280,
  MAX_GAME_WIDTH: 3600,
  MIN_GAME_WIDTH: 500,
  MAX_ZOOM_IN: 0.6,
  GAME_WIDTH_START_ZOOM: 720
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _facebook = __webpack_require__(52);

var _facebook2 = _interopRequireDefault(_facebook);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _default = __webpack_require__(60);

var _default2 = _interopRequireDefault(_default);

var _downloadManager = __webpack_require__(149);

var _downloadManager2 = _interopRequireDefault(_downloadManager);

var _signalManager = __webpack_require__(61);

var _signalManager2 = _interopRequireDefault(_signalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Private methods.
var validateLocale = Symbol('validateLocale');

/**
 * A manager to control the localisation.
 * It downloads the correct language pack and translate a key to a text.
 */

var LocalisationManager = function (_Singleton) {
  _inherits(LocalisationManager, _Singleton);

  function LocalisationManager() {
    _classCallCheck(this, LocalisationManager);

    var _this = _possibleConstructorReturn(this, (LocalisationManager.__proto__ || Object.getPrototypeOf(LocalisationManager)).call(this));

    _this.locale = _facebook2.default.instance.getLocale();
    _this[validateLocale]();
    return _this;
  }

  /**
   * Download a new language and update all text in game.
   *
   * @param {string} newLanguage - Language that needs to be downloaded. The language needs to
   * have the same name of the json file.
   */


  _createClass(LocalisationManager, [{
    key: 'switch',
    value: function _switch(newLanguage) {
      var _this2 = this;

      this.loadLanguagePackage(function () {
        if (!game.cache.getJSON(newLanguage)) {
          return;
        }
        _this2.language = newLanguage;
        _signalManager2.default.instance.dispatch('localisationManager:onLanguageChange');
      }, this, newLanguage);
    }

    /**
     * Download the language pack
     *
     * @param callback {function}The callback is executed when it's done loading.
     * @param context {*} The context of the callback.
     */

  }, {
    key: 'loadLanguagePackage',
    value: function loadLanguagePackage(callback, context) {
      var _this3 = this;

      var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.language;

      _downloadManager2.default.instance.loadJSON(language, '' + _default2.default.language.path + language + '.json');

      game.load.onLoadComplete.addOnce(function () {
        _this3.languagePack = game.cache.getJSON(language);

        if (callback) {
          callback.call(context);
        }
      });
    }

    /**
     * Return the correct text.
     *
     * @param {string} key - Unique key name, which occurs in the language.json.
     * @param {...string} variables - Variables that needs to be inserted.
     * @returns {string} Return the text or the key.
     */

  }, {
    key: 'getText',
    value: function getText(key) {
      if (!this.languagePack) {
        console.warn('Language pack has not been downloaded!');
        return key;
      }

      if (!this.languagePack[key]) {
        console.info(key, ' doesnt exist');

        return key;
      }

      for (var _len = arguments.length, variables = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        variables[_key - 1] = arguments[_key];
      }

      return this.addVariables(this.languagePack[key], variables);
    }

    /**
     * Replace all placeholder with variables.
     *
     * @param text {string} Text that needs to be replaced.
     * @param variables {Array.<string>} List of variables.
     * @returns {string} Replaced string.
     */

  }, {
    key: 'addVariables',
    value: function addVariables(text, variables) {
      if (!variables) return text;

      for (var i = 0; i < variables.length; i += 1) {
        text.replace('{' + i + '}', variables[i]);
      }

      return text;
    }

    /**
     * Validate the local. It returns the correct language. If the language doesn't exists in the
     * Default class, it will return the default language.
     */

  }, {
    key: validateLocale,
    value: function value() {
      switch (this.locale) {
        case 'en_US':
          this.language = 'us';
          break;
        default:
          this.language = this.locale.substring(0, 2);
      }

      if (!_default2.default.language.supported.includes(this.language)) {
        this.language = _default2.default.language.default.substring(0, 2);
      }
    }
  }]);

  return LocalisationManager;
}(_singleton2.default);

exports.default = LocalisationManager;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _frame = __webpack_require__(109);

var _frame2 = _interopRequireDefault(_frame);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

var _sprite = __webpack_require__(47);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Frame button class

creates a button with a 9-sliced image as background. A drop shadow can also be set
on this background. Icons and text can be put onto the background and they will automatically
position them to fit them on the button.
*/

var FrameButton = function (_Frame) {
  _inherits(FrameButton, _Frame);

  function FrameButton(_ref) {
    var _ref$key = _ref.key,
        key = _ref$key === undefined ? 'bg-framed' : _ref$key,
        _ref$text = _ref.text,
        text = _ref$text === undefined ? '' : _ref$text,
        _ref$textX = _ref.textX,
        textX = _ref$textX === undefined ? 0 : _ref$textX,
        _ref$textY = _ref.textY,
        textY = _ref$textY === undefined ? 0 : _ref$textY,
        _ref$cornerRadius = _ref.cornerRadius,
        cornerRadius = _ref$cornerRadius === undefined ? 0.3 : _ref$cornerRadius,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === undefined ? 30 : _ref$fontSize,
        _ref$iconImage = _ref.iconImage,
        iconImage = _ref$iconImage === undefined ? '' : _ref$iconImage,
        _ref$iconSize = _ref.iconSize,
        iconSize = _ref$iconSize === undefined ? 1 : _ref$iconSize,
        _ref$useDropShadow = _ref.useDropShadow,
        useDropShadow = _ref$useDropShadow === undefined ? true : _ref$useDropShadow,
        _ref$dropShadowColor = _ref.dropShadowColor,
        dropShadowColor = _ref$dropShadowColor === undefined ? 0xcf1d0c : _ref$dropShadowColor,
        _ref$sfx = _ref.sfx,
        sfx = _ref$sfx === undefined ? 'button' : _ref$sfx,
        x = _ref.x,
        y = _ref.y,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 300 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 100 : _ref$height,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 0xff4800 : _ref$color,
        _ref$colorDisable = _ref.colorDisable,
        colorDisable = _ref$colorDisable === undefined ? color : _ref$colorDisable,
        _ref$colorDown = _ref.colorDown,
        colorDown = _ref$colorDown === undefined ? dropShadowColor : _ref$colorDown,
        _ref$inputEnabled = _ref.inputEnabled,
        inputEnabled = _ref$inputEnabled === undefined ? true : _ref$inputEnabled,
        _ref$anchorX = _ref.anchorX,
        anchorX = _ref$anchorX === undefined ? 0.5 : _ref$anchorX,
        _ref$anchorY = _ref.anchorY,
        anchorY = _ref$anchorY === undefined ? 0.5 : _ref$anchorY,
        _ref$dropShadowColorD = _ref.dropShadowColorDisable,
        dropShadowColorDisable = _ref$dropShadowColorD === undefined ? colorDisable : _ref$dropShadowColorD,
        _ref$textColor = _ref.textColor,
        textColor = _ref$textColor === undefined ? '#FFFFFF' : _ref$textColor,
        iconAnchorX = _ref.iconAnchorX,
        iconAnchorY = _ref.iconAnchorY,
        dropShadowDistance = _ref.dropShadowDistance;

    _classCallCheck(this, FrameButton);

    var _this = _possibleConstructorReturn(this, (FrameButton.__proto__ || Object.getPrototypeOf(FrameButton)).call(this, {
      x: x, y: y, key: key, width: width, height: height, cornerRadius: cornerRadius, color: color, useDropShadow: useDropShadow, dropShadowColor: dropShadowColor,
      anchorX: anchorX, anchorY: anchorY, dropShadowDistance: dropShadowDistance
    }));

    _this.width = width;
    _this.buildText(text, fontSize, textColor, textX, textY);
    if (iconImage !== '') {
      _this.buildIcon(iconImage, iconSize, iconAnchorX, iconAnchorY);
    }

    _this.colorList = { default: color, down: colorDown, disable: colorDisable };
    _this.dropShadowColorList = { default: dropShadowColor, down: dropShadowColor, disable: dropShadowColorDisable };
    _this.state = { default: 1, down: 2, disable: 3 };
    Object.freeze(_this.state);

    _this.currentState = _this.state.default;

    if (disabled) {
      _this.doDisable();
    }

    if (sfx !== 'button') {}
    // this.sfx = game.soundManager.getSound(sfx);

    //this.sfx = game.soundManager.getSound(sfx);

    _this.autoCull = false;
    // this.anchor.setTo(anchorX, anchorY);
    _this.inputEnabled = inputEnabled;
    _this.inputEnableChildren = inputEnabled;
    _this.smoothed = true;

    for (var i = 0; i < _this.frameGroup.children.length; i += 1) {
      _this.frameGroup.children[i].inputEnabled = true;
      _this.frameGroup.children[i].events.onInputUp.add(function () {
        _this.changeState('default');
        if (_this.sfx) {
          _this.sfx.play();
        }
        _this.checkIfClickAble();
      });

      _this.frameGroup.children[i].events.onInputDown.add(function () {
        _this.changeState('down');
        // this.sfx.play();
      });
    }
    _this.setAnchor(anchorX, anchorY);
    return _this;
  }

  _createClass(FrameButton, [{
    key: 'doDisable',
    value: function doDisable() {
      this.changeState('disable');
    }
  }, {
    key: 'doEnable',
    value: function doEnable() {
      this.currentState = this.state.default;
      this.frameGroup.setAll('tint', this.colorList.default);
      this.shadowGroup.setAll('tint', this.dropShadowColorList.default);
    }
  }, {
    key: 'changeState',
    value: function changeState(state) {
      if (this.currentState === this.state.disable) {
        return;
      }

      switch (state) {
        case 'default':
          this.currentState = this.state.default;
          this.frameGroup.setAll('tint', this.colorList.default);
          this.shadowGroup.setAll('tint', this.dropShadowColorList.default);
          break;
        case 'down':
          this.currentState = this.state.down;
          this.frameGroup.setAll('tint', this.colorList.down);
          this.shadowGroup.setAll('tint', this.dropShadowColorList.down);
          break;
        case 'disable':
          this.currentState = this.state.disable;
          this.frameGroup.setAll('tint', this.colorList.disable);
          this.shadowGroup.setAll('tint', this.dropShadowColorList.disable);
          break;
        default:
          this.currentState = this.state.default;
          this.frameGroup.setAll('tint', this.colorList.default);
          this.shadowGroup.setAll('tint', this.dropShadowColorList.default);
          break;
      }
    }

    // Empty shell. Override this methode

  }, {
    key: 'doOnClick',
    value: function doOnClick() {}
    // console.warn('doOnClick is empty!');


    // Empty shell. Override this methode

  }, {
    key: 'doOnClickDisabled',
    value: function doOnClickDisabled() {
      console.info('doOnClickDisabled is empty!');
    }
  }, {
    key: 'checkIfClickAble',
    value: function checkIfClickAble() {
      if (this.currentState !== this.state.disable) {
        this.doOnClick();
        return;
      }

      this.doOnClickDisabled();
    }
  }, {
    key: 'buildText',
    value: function buildText(text, fontSize, textColor, textX, textY) {
      this.buttonText = new _text2.default({
        text: text,
        x: textX,
        y: textY,
        color: textColor,
        anchorX: 0.5,
        anchorY: 0.5,
        fontSize: fontSize,
        wordWrap: true,
        wordWrapWidth: this.width
      });
      this.buttonText.lineSpacing = -5;
      this.add(this.buttonText);
    }
  }, {
    key: 'buildIcon',
    value: function buildIcon(frame, size) {
      var anchorX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
      var anchorY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;

      this.iconImage = new _sprite2.default({
        //      asset: 'uiAtlas',
        key: frame,
        x: 0,
        y: 0,
        anchorX: anchorX,
        anchorY: anchorY
      });
      this.iconImage.scale.setTo(size, size);
      this.add(this.iconImage);
      this.buttonText.wordWrapWidth -= this.iconImage.width;
    }
  }, {
    key: 'setAnchor',
    value: function setAnchor(x, y) {
      _get(FrameButton.prototype.__proto__ || Object.getPrototypeOf(FrameButton.prototype), 'setAnchor', this).call(this, x, y);
      if (this.iconImage) {
        this.iconImage.x = (0.5 - x) * this.totalWidth - (this.buttonText.width / 4 + (this.buttonText.text === '' ? 0 : 10));
        this.iconImage.y = (0.5 - y) * this.totalHeight;
      }
      if (this.buttonText) {
        // this.buttonText.x = (0.5 - x) * this.totalWidth;
        // this.buttonText.y = (0.5 - y) * this.totalHeight;
        // if (this.iconImage) {
        //   this.buttonText.x = (0.5 - x) * this.totalWidth + this.iconImage.width / 2;
        // }
      }
    }
  }]);

  return FrameButton;
}(_frame2.default);

exports.default = FrameButton;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _sprite = __webpack_require__(47);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Simple 9 sliced frame
 * @description makes a frame with rounded corners provided by the spritesheet given.
 * note when loading the spriteSheet set the tile width and height to the largest corner
 * rotation is not yet correctly pivoted.
 *
 * Added logic to add a dropshadow to the frame, the color and distance for this shadow can be set.
 * Added logic to set the anchor point of the frame.
 * */

var Frame = function (_Phaser$Group) {
  _inherits(Frame, _Phaser$Group);

  function Frame(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        _ref$cornerRadius = _ref.cornerRadius,
        cornerRadius = _ref$cornerRadius === undefined ? 1 : _ref$cornerRadius,
        _ref$alpha = _ref.alpha,
        alpha = _ref$alpha === undefined ? 1 : _ref$alpha,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 0xFFFFFF : _ref$color,
        _ref$key = _ref.key,
        key = _ref$key === undefined ? 'bg-framed' : _ref$key,
        _ref$useDropShadow = _ref.useDropShadow,
        useDropShadow = _ref$useDropShadow === undefined ? false : _ref$useDropShadow,
        _ref$dropShadowColor = _ref.dropShadowColor,
        dropShadowColor = _ref$dropShadowColor === undefined ? 0x000000 : _ref$dropShadowColor,
        _ref$dropShadowDistan = _ref.dropShadowDistance,
        dropShadowDistance = _ref$dropShadowDistan === undefined ? 10 : _ref$dropShadowDistan,
        _ref$anchorX = _ref.anchorX,
        anchorX = _ref$anchorX === undefined ? 0.5 : _ref$anchorX,
        _ref$anchorY = _ref.anchorY,
        anchorY = _ref$anchorY === undefined ? 0.5 : _ref$anchorY;

    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, game));

    _this.frameSize = game.cache.getImage(key, true).frameHeight;

    _this.x = x;
    _this.y = y;
    _this.totalWidth = width;
    _this.totalHeight = height;

    _this.useDropShadow = useDropShadow;
    _this.dropShadowColor = dropShadowColor;
    _this.dropShadowDistance = dropShadowDistance;

    var sizeX = 1;
    var sizeY = 1;

    if (width >= _this.frameSize * 2) {
      _this.frameWidth = width / _this.frameSize - 2 * cornerRadius;
    } else {
      _this.frameWidth = 2 - 2 * cornerRadius;
      sizeX = width / (_this.frameSize * 2);
    }
    if (height >= _this.frameSize * 2) {
      _this.frameHeight = height / _this.frameSize - 2 * cornerRadius;
    } else {
      _this.frameHeight = 2 - 2 * cornerRadius;
      sizeY = height / (_this.frameSize * 2);
    }
    _this.scale.setTo(sizeX, sizeY);

    _this.cornerRadius = cornerRadius;
    _this.alpha = alpha;
    _this.color = color;
    _this.key = key;

    if (useDropShadow) {
      _this.shadowGroup = new _phaser2.default.Group(game);
      _this.add(_this.shadowGroup);
    }
    _this.frameGroup = new _phaser2.default.Group(game);
    _this.add(_this.frameGroup);
    _this.setAnchor(anchorX, anchorY);

    _this.createFrame();
    _this.frameGroup.setAll('tint', _this.color);
    if (useDropShadow) {
      _this.shadowGroup.setAll('tint', dropShadowColor);
    }
    return _this;
  }

  _createClass(Frame, [{
    key: 'createFrame',
    value: function createFrame() {
      this.center = new _sprite2.default({
        asset: this.key,
        anchorX: 0.5,
        anchorY: 0.5,
        x: 0,
        y: 0,
        scaleX: this.frameWidth,
        scaleY: this.frameHeight,
        frame: 4
      });
      this.sideTop = new _sprite2.default({
        asset: this.key,
        scaleX: this.frameWidth,
        scaleY: this.cornerRadius,
        frame: 1
      });
      this.sideBottom = new _sprite2.default({
        asset: this.key,
        scaleX: this.frameWidth,
        scaleY: this.cornerRadius,
        frame: 7
      });
      this.sideLeft = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.frameHeight,
        frame: 3
      });
      this.sideRight = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.frameHeight,
        frame: 5
      });

      this.cornerTopLeft = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.cornerRadius,
        frame: 0
      });
      this.cornerTopRight = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.cornerRadius,
        frame: 2
      });
      this.cornerBottomLeft = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.cornerRadius,
        frame: 6
      });
      this.cornerBottomRight = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.cornerRadius,
        frame: 8
      });

      this.sideTop.alignTo(this.center, _phaser2.default.TOP_CENTER);
      this.sideBottom.alignTo(this.center, _phaser2.default.BOTTOM_CENTER);
      this.sideLeft.alignTo(this.center, _phaser2.default.LEFT_CENTER);
      this.sideRight.alignTo(this.center, _phaser2.default.RIGHT_CENTER);

      this.cornerTopLeft.alignTo(this.sideTop, _phaser2.default.LEFT_CENTER);
      this.cornerTopRight.alignTo(this.sideTop, _phaser2.default.RIGHT_CENTER);
      this.cornerBottomLeft.alignTo(this.sideBottom, _phaser2.default.LEFT_CENTER);
      this.cornerBottomRight.alignTo(this.sideBottom, _phaser2.default.RIGHT_CENTER);

      if (this.useDropShadow) {
        this.addDropShadow();
      }

      this.frameGroup.addMultiple([this.center, this.sideTop, this.sideBottom, this.sideLeft, this.sideRight, this.cornerTopRight, this.cornerTopLeft, this.cornerBottomLeft, this.cornerBottomRight]);
    }
  }, {
    key: 'addDropShadow',
    value: function addDropShadow() {
      this.dropShadowBottomLeft = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.cornerRadius,
        frame: 6,
        x: this.cornerBottomLeft.x,
        y: this.cornerBottomLeft.y + this.dropShadowDistance
      });
      this.dropShadowBottomCenter = new _sprite2.default({
        asset: this.key,
        scaleX: this.frameWidth,
        scaleY: this.cornerRadius,
        frame: 7,
        x: this.sideBottom.x,
        y: this.sideBottom.y + this.dropShadowDistance
      });
      this.dropShadowBottomRight = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.cornerRadius,
        frame: 8,
        x: this.cornerBottomRight.x,
        y: this.cornerBottomRight.y + this.dropShadowDistance
      });
      this.dropShadowLeft = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.frameHeight + this.dropShadowDistance / this.frameSize,
        frame: 3,
        x: this.sideLeft.x,
        y: this.sideLeft.y
      });
      this.dropShadowRight = new _sprite2.default({
        asset: this.key,
        scaleX: this.cornerRadius,
        scaleY: this.frameHeight + this.dropShadowDistance / this.frameSize,
        frame: 5,
        x: this.sideRight.x,
        y: this.sideRight.y
      });
      this.dropShadowCenter = new _sprite2.default({
        asset: this.key,
        anchorX: 0.5,
        anchorY: 0.5,
        x: 0,
        y: 0 + this.dropShadowDistance,
        scaleX: this.frameWidth,
        scaleY: this.frameHeight,
        frame: 4
      });

      this.shadowGroup.addMultiple([this.dropShadowLeft, this.dropShadowBottomLeft, this.dropShadowBottomCenter, this.dropShadowBottomRight, this.dropShadowRight, this.dropShadowCenter]);
    }
  }, {
    key: 'setAnchor',
    value: function setAnchor(x, y) {
      this.frameGroup.position.x = (0.5 - x) * this.totalWidth;
      this.frameGroup.position.y = (0.5 - y) * this.totalHeight;
      if (this.useDropShadow) {
        this.shadowGroup.x = (0.5 - x) * this.totalWidth;
        this.shadowGroup.y = (0.5 - y) * this.totalHeight;
      }
    }
  }, {
    key: 'enableShadow',
    value: function enableShadow(value) {
      this.shadowGroup.children.forEach(function (child) {
        child.visible = value;
      });
    }
  }, {
    key: 'setTint',
    value: function setTint(color) {
      this.frameGroup.setAll('tint', color);
    }
  }]);

  return Frame;
}(_phaser2.default.Group);

exports.default = Frame;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(77)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(62)(false);
var IE_PROTO = __webpack_require__(79)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(40).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(8);
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(63);
var pIE = __webpack_require__(57);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(56);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(11);
var isObject = __webpack_require__(5);
var invoke = __webpack_require__(118);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(50).trim;
var ws = __webpack_require__(83);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(50).trim;

module.exports = 1 / $parseFloat(__webpack_require__(83) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(22);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(5);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(86);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(11);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(56);
var toLength = __webpack_require__(7);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(7);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(98);
__webpack_require__(0)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(8) && /./g.flags != 'g') __webpack_require__(9).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(58)
});


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var isObject = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(102);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(134);
var validate = __webpack_require__(45);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(71)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(9).f;
var create = __webpack_require__(39);
var redefineAll = __webpack_require__(44);
var ctx = __webpack_require__(21);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var $iterDefine = __webpack_require__(88);
var step = __webpack_require__(128);
var setSpecies = __webpack_require__(41);
var DESCRIPTORS = __webpack_require__(8);
var fastKey = __webpack_require__(33).fastKey;
var validate = __webpack_require__(45);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(134);
var validate = __webpack_require__(45);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(71)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var each = __webpack_require__(28)(0);
var redefine = __webpack_require__(13);
var meta = __webpack_require__(33);
var assign = __webpack_require__(115);
var weak = __webpack_require__(137);
var isObject = __webpack_require__(5);
var validate = __webpack_require__(45);
var NATIVE_WEAK_MAP = __webpack_require__(45);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(71)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(44);
var getWeak = __webpack_require__(33).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(5);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var createArrayMethod = __webpack_require__(28);
var $has = __webpack_require__(15);
var validate = __webpack_require__(45);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(23);
var toLength = __webpack_require__(7);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(40);
var gOPS = __webpack_require__(63);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(64);
var isObject = __webpack_require__(5);
var toLength = __webpack_require__(7);
var ctx = __webpack_require__(21);
var IS_CONCAT_SPREADABLE = __webpack_require__(6)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(7);
var repeat = __webpack_require__(85);
var defined = __webpack_require__(26);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var getKeys = __webpack_require__(37);
var toIObject = __webpack_require__(16);
var isEnum = __webpack_require__(57).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(49);
var from = __webpack_require__(144);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(43);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rewardedVideos: {
    // cloud: '3298754'
  },
  interstitialAds: {
    // homescreen: '928357'
  },
  createShortcut: false,
  subscribeBot: false
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*!
 * phaser-nineslice - version 2.0.1
 * NineSlice plugin for Phaser.io!
 *
 * OrangeGames
 * Build at 03-07-2017
 * Released under MIT License
 */

var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var PhaserNineSlice;
(function (PhaserNineSlice) {
  var NineSlice = function (_super) {
    __extends(NineSlice, _super);
    function NineSlice(game, x, y, key, frame, width, height, data) {
      var _this = _super.call(this, game, x, y, key, frame) || this;
      _this.baseTexture = _this.texture.baseTexture;
      _this.baseFrame = _this.texture.frame;
      if (frame !== null && !data) {
        data = game.cache.getNineSlice(frame);
      } else if (!data) {
        data = game.cache.getNineSlice(key);
      }
      if (undefined === data) {
        return _this;
      }
      _this.topSize = data.top;
      if (!data.left) {
        _this.leftSize = _this.topSize;
      } else {
        _this.leftSize = data.left;
      }
      if (!data.right) {
        _this.rightSize = _this.leftSize;
      } else {
        _this.rightSize = data.right;
      }
      if (!data.bottom) {
        _this.bottomSize = _this.topSize;
      } else {
        _this.bottomSize = data.bottom;
      }
      _this.loadTexture(new Phaser.RenderTexture(_this.game, _this.localWidth, _this.localHeight));
      _this.resize(width, height);
      return _this;
    }
    NineSlice.prototype.renderTexture = function () {
      this.texture.resize(this.localWidth, this.localHeight, true);
      var textureXs = [0, this.leftSize, this.baseFrame.width - this.rightSize, this.baseFrame.width];
      var textureYs = [0, this.topSize, this.baseFrame.height - this.bottomSize, this.baseFrame.height];
      var finalXs = [0, this.leftSize, this.localWidth - this.rightSize, this.localWidth];
      var finalYs = [0, this.topSize, this.localHeight - this.bottomSize, this.localHeight];
      this.texture.clear();
      for (var yi = 0; yi < 3; yi++) {
        for (var xi = 0; xi < 3; xi++) {
          var s = this.createTexturePart(textureXs[xi], textureYs[yi], textureXs[xi + 1] - textureXs[xi], textureYs[yi + 1] - textureYs[yi]);
          s.width = finalXs[xi + 1] - finalXs[xi];
          s.height = finalYs[yi + 1] - finalYs[yi];
          this.texture.renderXY(s, finalXs[xi], finalYs[yi]);
        }
      }
    };
    NineSlice.prototype.resize = function (width, height) {
      this.localWidth = width;
      this.localHeight = height;
      this.renderTexture();
    };
    NineSlice.prototype.destroy = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      _super.prototype.destroy.call(this, args[0]);
      this.texture.destroy(true);
      this.texture = null;
      this.baseTexture = null;
      this.baseFrame = null;
    };
    NineSlice.prototype.createTexturePart = function (x, y, width, height) {
      var frame = new PIXI.Rectangle(this.baseFrame.x + this.texture.frame.x + x, this.baseFrame.y + this.texture.frame.y + y, Math.max(width, 1), Math.max(height, 1));
      return new Phaser.Sprite(this.game, 0, 0, new PIXI.Texture(this.baseTexture, frame));
    };
    return NineSlice;
  }(Phaser.Sprite);
  PhaserNineSlice.NineSlice = NineSlice;
})(PhaserNineSlice || (PhaserNineSlice = {}));
var PhaserNineSlice;
(function (PhaserNineSlice) {
  var Plugin = function (_super) {
    __extends(Plugin, _super);
    function Plugin(game, parent) {
      var _this = _super.call(this, game, parent) || this;
      _this.addNineSliceCache();
      _this.addNineSliceFactory();
      _this.addNineSliceLoader();
      return _this;
    }
    Plugin.prototype.addNineSliceLoader = function () {
      Phaser.Loader.prototype.nineSlice = function (key, url, top, left, right, bottom) {
        var cacheData = {
          top: top
        };
        if (left) {
          cacheData.left = left;
        }
        if (right) {
          cacheData.right = right;
        }
        if (bottom) {
          cacheData.bottom = bottom;
        }
        this.addToFileList('image', key, url);
        this.game.cache.addNineSlice(key, cacheData);
      };
    };
    Plugin.prototype.addNineSliceFactory = function () {
      Phaser.GameObjectFactory.prototype.nineSlice = function (x, y, key, frame, width, height, group) {
        if (group === undefined) {
          group = this.world;
        }
        var nineSliceObject = new PhaserNineSlice.NineSlice(this.game, x, y, key, frame, width, height);
        return group.add(nineSliceObject);
      };
      Phaser.GameObjectCreator.prototype.nineSlice = function (x, y, key, frame, width, height) {
        return new PhaserNineSlice.NineSlice(this.game, x, y, key, frame, width, height);
      };
    };
    Plugin.prototype.addNineSliceCache = function () {
      Phaser.Cache.prototype.nineSlice = {};
      Phaser.Cache.prototype.addNineSlice = function (key, data) {
        this.nineSlice[key] = data;
      };
      Phaser.Cache.prototype.getNineSlice = function (key) {
        var data = this.nineSlice[key];
        if (undefined === data) {
          console.warn('Phaser.Cache.getNineSlice: Key "' + key + '" not found in Cache.');
        }
        return data;
      };
    };
    return Plugin;
  }(Phaser.Plugin);
  PhaserNineSlice.Plugin = Plugin;
})(PhaserNineSlice || (PhaserNineSlice = {}));

exports.default = PhaserNineSlice;
// # sourceMappingURL=phaser-nineslice.js.map

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _famobiApi = __webpack_require__(46);

var _famobiApi2 = _interopRequireDefault(_famobiApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_Singleton) {
  _inherits(Statistics, _Singleton);

  function Statistics() {
    _classCallCheck(this, Statistics);

    var _this = _possibleConstructorReturn(this, (Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call(this));

    _this._prefix = 'Statistics';

    _this._statistics = {};

    // key must be an alphanumeric string but may contain underscores ([a-z_0-9]), maximum length: 42 characters
    _this.keys = ['rocks_destroyed', 'coins_spawned', 'coins_catched', 'diamonds_spawned', 'diamonds_catched', 'bullets_spawned', 'levels_completed', 'fire_damage', 'bullets_per_sec', 'coin_multiplier', 'powerup_shield', 'powerup_fire', 'powerup_helper', 'powerup_freeze', 'powerup_coinrain', 'backgrounds_bought', // Max 3
    'carts_bought'];

    // Share this list of keys with Famobi.

    for (var i = 0; i < _this.keys.length; i += 1) {
      var key = _this.keys[i];
      _this._statistics[key] = _famobiApi2.default.instance.getLocalStorageItem(_this._prefix + ':' + key) || 0;
    }
    return _this;
  }

  _createClass(Statistics, [{
    key: 'set',
    value: function set(key, value) {
      if (!this._checkIfKeyExists(key)) {
        return;
      }

      if (!this._checkIfValueIsAInteger(value)) {
        return;
      }

      this._statistics[key] = value;

      _famobiApi2.default.instance.setLocalStorageItem(this._prefix + ':' + key, this._statistics[key]);

      window.famobi_analytics.trackStats(key, this._statistics[key]);
    }
  }, {
    key: 'increment',
    value: function increment(key) {
      var _increment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (!this._checkIfKeyExists(key)) {
        return;
      }

      if (!this._checkIfValueIsAInteger(_increment)) {
        return;
      }

      this._statistics[key] += _increment;

      _famobiApi2.default.instance.setLocalStorageItem(this._prefix + ':' + key, this._statistics[key]);

      window.famobi_analytics.trackStats(key, this._statistics[key]);
    }
  }, {
    key: '_checkIfKeyExists',
    value: function _checkIfKeyExists(key) {
      var index = this.keys.indexOf(key);

      if (index === -1) {
        console.error('Key ' + key + ' doesn\'t exists');
      }

      return index !== -1;
    }
  }, {
    key: '_checkIfValueIsAInteger',
    value: function _checkIfValueIsAInteger(value) {
      var valid = Number.isInteger(value);

      if (!valid) {
        console.error('Value ' + value + ' is not valid. It should be an integer');
      }

      return valid;
    }
  }]);

  return Statistics;
}(_singleton2.default);

exports.default = Statistics;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _facebook = __webpack_require__(52);

var _facebook2 = _interopRequireDefault(_facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class download all assets runtime. Use load[TYPE] to set the assets in a queue.
 * Then execute start to start the downloading. Remember, in State.preload, you don't have to
 * have to execute start, as it will download automatically. If you need a callback in the preload,
 * use game.load.onLoadComplete.addOnce.
 */
var DownloadManager = function (_Singleton) {
  _inherits(DownloadManager, _Singleton);

  function DownloadManager() {
    _classCallCheck(this, DownloadManager);

    var _this = _possibleConstructorReturn(this, (DownloadManager.__proto__ || Object.getPrototypeOf(DownloadManager)).call(this));

    _this._profilePictureKey = 'profile-picture-';

    game.load.enableParallel = true;
    game.load.crossOrigin = 'Anonymous';
    return _this;
  }

  /**
   * Load a list of images.
   *
   * @param keys {Array.<string>} List of keys.
   * @param urls {Array.<string>} List of urls.
   */


  _createClass(DownloadManager, [{
    key: 'loadImages',
    value: function loadImages(keys, urls) {
      this.filterExistingKeys(keys, urls);

      game.load.images(keys, urls);
    }

    /**
     * Load a image file.
     *
     * @param key {string} Key of the json.
     * @param url [string} Url of the json.
     */

  }, {
    key: 'loadImage',
    value: function loadImage(key, url) {
      if (this.checkImageKeyExists(key)) {
        return;
      }

      game.load.image(key, url);
    }

    /**
     * Load a json file.
     *
     * @param key {string} Key of the json.
     * @param url [string} Url of the json.
     */

  }, {
    key: 'loadJSON',
    value: function loadJSON(key, url) {
      if (this.checkJSONKeyExists(key)) {
        return;
      }

      game.load.json(key, url);
    }

    /**
     * Load the player profile picture.
     */

  }, {
    key: 'loadPlayerProfilePicture',
    value: function loadPlayerProfilePicture() {
      this.loadImage(this._profilePictureKey + _facebook2.default.instance.getPlayerID(), _facebook2.default.instance.getPlayerPhoto());
    }
  }, {
    key: 'loadContextPlayersProfilePicture',
    value: function loadContextPlayersProfilePicture() {}
    // TODO get all context players and load all pictures.


    /**
     * Load any player profile picture.
     * @param player {ConnectedPlayer||ContextPlayer} Player object.
     */

  }, {
    key: 'loadProfilePicture',
    value: function loadProfilePicture(player) {
      this.loadImage(this._profilePictureKey + player.id, player.photoUrl);
    }

    /**
     * Start loading all assets in the queue.
     *
     * @param callback {function} Callback is executed when loading is completed.
     * @param context {*} Context of the callback.
     */

  }, {
    key: 'start',
    value: function start(callback, context) {
      if (game.load.totalQueuedFiles() === 0) {
        callback.call(context);
        return;
      }

      game.load.start();

      game.load.onLoadComplete.addOnce(function () {
        callback.call(context);
      });
    }

    /**
     * Filter the keys and urls if the key already exists in the cache.
     *
     * @param keys {Array.<string>} A list of keys.
     * @param urls {Array.<string>} A list of urls.
     */

  }, {
    key: 'filterExistingKeys',
    value: function filterExistingKeys(keys, urls) {
      for (var index = keys.length; index >= 0; index -= 1) {
        if (this.checkImageKeyExists(keys[index])) {
          keys.splice(index, 1);
          urls.splice(index, 1);
        }
      }
    }

    /**
     * Return a boolean if the image key already exists or not.
     *
     * @param key {string} Key of the image.
     * @returns {boolean} Key exists or not.
     */

  }, {
    key: 'checkImageKeyExists',
    value: function checkImageKeyExists(key) {
      return game.cache.checkImageKey(key);
    }

    /**
     * Return a boolean if the json key already exists or not.
     *
     * @param key {string} Key of the json.
     * @returns {boolean} Key exists or not.
     */

  }, {
    key: 'checkJSONKeyExists',
    value: function checkJSONKeyExists(key) {
      return game.cache.checkJSONKey(key);
    }
  }]);

  return DownloadManager;
}(_singleton2.default);

exports.default = DownloadManager;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*! deePool
    v2.2.0 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
    Source: https://github.com/getify/deePool
*/

(function UMD(name, context, definition) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else {
    context[name] = definition(name, context);
  }
})('deePool', undefined, function () {
  var EMPTY_SLOT = Object.freeze(Object.create(null));

  // ******************************

  // create a new pool
  function create() {
    var objectFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
      return {};
    };

    var objectPool = [];
    var nextFreeSlot = null; // pool location to look for a free object to use

    // ******************************

    function grow() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : objectPool.length;

      if (count > 0 && nextFreeSlot == null) {
        nextFreeSlot = 0;
      }

      if (count > 0) {
        var curLen = objectPool.length;
        objectPool.length += Number(count);

        for (var i = curLen; i < objectPool.length; i += 1) {
          // add new obj to pool
          objectPool[i] = objectFactory();
        }
      }

      return objectPool.length;
    }

    function use() {
      if (nextFreeSlot === null || nextFreeSlot === objectPool.length) {
        grow(objectPool.length || 5);
      }

      var objToUse = objectPool[nextFreeSlot];
      objectPool[nextFreeSlot] = EMPTY_SLOT;
      nextFreeSlot += 1;
      return objToUse;
    }

    function recycle(obj) {
      if (nextFreeSlot == null || nextFreeSlot === -1) {
        objectPool[objectPool.length] = obj;
      } else {
        objectPool[nextFreeSlot -= 1] = obj;
      }
    }

    function size() {
      return objectPool.length;
    }

    function getObjectPool() {
      return objectPool;
    }

    return {
      use: use,
      recycle: recycle,
      grow: grow,
      size: size,
      getObjectPool: getObjectPool
    };
  }

  return { create: create };
});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _screen = __webpack_require__(152);

var _screen2 = _interopRequireDefault(_screen);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _pauseScreen = __webpack_require__(374);

var _pauseScreen2 = _interopRequireDefault(_pauseScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import GameOverScreen from '../sprites/ui/GameOverScreen';


//import LeaderboardScreen from '../sprites/ui/Leaderboard/LeaderboardScreen';
//import NoAdScreen from '../sprites/ui/NoAdScreen';
//import ShopScreen from '../sprites/ui/Shop/ShopScreen';
//import ChatbotScreen from "../sprites/ui/ChatbotScreen";
//import AddToHomeScreen from '../sprites/ui/AddToHomeScreen';


/*
Screen manager class

This class makes sure that only one screen is opened at a time. Add screens made
with the screen class to the buildscreens method.
 */
var ScreenManager = function (_Singleton) {
  _inherits(ScreenManager, _Singleton);

  function ScreenManager(game) {
    _classCallCheck(this, ScreenManager);

    var _this = _possibleConstructorReturn(this, (ScreenManager.__proto__ || Object.getPrototypeOf(ScreenManager)).call(this, game));

    _this.screenList = [];
    _this.activeScreen = null;
    _this.previousScreen = null;
    return _this;
  }

  _createClass(ScreenManager, [{
    key: 'buildScreens',
    value: function buildScreens() {
      // this.shopScreen = new ShopScreen({});
      // this.screenList.push(this.shopScreen);
      // this.shopScreen.visible = false;

      // this.leaderboardScreen = new LeaderboardScreen({});
      // this.screenList.push(this.leaderboardScreen);
      // this.leaderboardScreen.visible = false;

      // this.gameOverScreen = new GameOverScreen({});
      // this.screenList.push(this.gameOverScreen);
      // this.gameOverScreen.visible = false;

      this.pauseScreen = new _pauseScreen2.default({});
      this.screenList.push(this.pauseScreen);
      this.pauseScreen.visible = false;

      // this.noAdScreen = new NoAdScreen({});
      // this.screenList.push(this.noAdScreen);
      // this.noAdScreen.visible = false;

      // this.chatbotScreen = new ChatbotScreen({});
      // this.screenList.push(this.chatbotScreen);
      // this.chatbotScreen.visible = false;

      // this.addToHomeScreen = new AddToHomeScreen({});
      // this.screenList.push(this.addToHomeScreen);
      // this.addToHomeScreen.visible = false;

      // game.world.removeChild(this.shopScreen);
      // game.world.removeChild(this.leaderboardScreen);
      // game.world.removeChild(this.gameOverScreen);
      game.world.removeChild(this.pauseScreen);
      // game.world.removeChild(this.noAdScreen);
      // game.world.removeChild(this.addToHomeScreen);
    }
  }, {
    key: 'openScreen',
    value: function openScreen(screen) {
      if (this.activeScreen == null) {
        this.activeScreen = screen;
      } else {
        this.previousScreen = this.activeScreen;
      }
      //game.ui.isScreenOpen = true;
      for (var i = 0; i < this.screenList.length; i += 1) {
        if (this.screenList[i].name === screen) {
          this.screenList[i].visible = true;
          game.world.addChild(this.screenList[i]);
          this.activeScreen = this.screenList[i];
          this.screenList[i].openScreenAnimation();
          //        game.ui.hideUI();
        } else {
          this.screenList[i].visible = false;
        }
      }
    }
  }, {
    key: 'openPreviousScreen',
    value: function openPreviousScreen() {
      this.openScreen(this.previousScreen.name);
    }
  }, {
    key: 'closeScreen',
    value: function closeScreen() {
      if (this.activeScreen) {
        this.activeScreen.visible = false;
        game.world.removeChild(this.activeScreen);
      } else {
        console.warn("no active screen");
      }

      this.activeScreen = null;
      //  game.ui.isScreenOpen = false;

      //  game.ui.showUI();
    }
  }]);

  return ScreenManager;
}(_singleton2.default);

exports.default = ScreenManager;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _sprite = __webpack_require__(47);

var _sprite2 = _interopRequireDefault(_sprite);

var _overlay = __webpack_require__(373);

var _overlay2 = _interopRequireDefault(_overlay);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

var _screenManager = __webpack_require__(151);

var _screenManager2 = _interopRequireDefault(_screenManager);

var _frame = __webpack_require__(109);

var _frame2 = _interopRequireDefault(_frame);

var _frameButton = __webpack_require__(108);

var _frameButton2 = _interopRequireDefault(_frameButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Screen class

This class makes a screen that uses a frame with the correct color as a background, and adds
a back button to the screen. Use a name so the screen can be opened via the screen manager.
onScreenOpen, onOpenAnimationDone and onCloseAnimationDone can be overwritten respectively.
The callback after the animations are done can also be set.
 */
var Screen = function (_Phaser$Group) {
  _inherits(Screen, _Phaser$Group);

  function Screen(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? '' : _ref$name,
        _ref$backgroundImage = _ref.backgroundImage,
        backgroundImage = _ref$backgroundImage === undefined ? 'bg-framed' : _ref$backgroundImage,
        _ref$backgroundColor = _ref.backgroundColor,
        backgroundColor = _ref$backgroundColor === undefined ? 0xFEFEFE : _ref$backgroundColor,
        _ref$dropShadowColor = _ref.dropShadowColor,
        dropShadowColor = _ref$dropShadowColor === undefined ? 0x32374a : _ref$dropShadowColor,
        _ref$closeButtonImage = _ref.closeButtonImage,
        closeButtonImage = _ref$closeButtonImage === undefined ? 'ui_back_icon.png' : _ref$closeButtonImage,
        _ref$titleText = _ref.titleText,
        titleText = _ref$titleText === undefined ? '' : _ref$titleText,
        _ref$screenHeight = _ref.screenHeight,
        screenHeight = _ref$screenHeight === undefined ? 820 : _ref$screenHeight;

    _classCallCheck(this, Screen);

    var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, game));

    _this.fixedToCamera = true;
    _this.contentGroup = new _phaser2.default.Group(game);
    _this.add(_this.contentGroup);

    if (name === '') {
      console.warn('The screen class needs a name for the screen manager to work.');
    }

    var title = titleText === '' ? name.toUpperCase() : titleText;
    _this.name = name;
    _this.overlay = new _overlay2.default({
      alpha: 0.5,
      height: 5000
    });
    _this.contentGroup.add(_this.overlay);
    _this.buildBackground(backgroundImage, backgroundColor, dropShadowColor, screenHeight);
    _this.buildCloseButton(closeButtonImage);
    _this.buildTitleText(title);
    _this.visible = false;
    return _this;
  }

  _createClass(Screen, [{
    key: 'buildBackground',
    value: function buildBackground(backgroundImage, backgroundColor, dropShadowColor, screenHeight) {
      this.backgroundImage = new _frame2.default({
        x: game.world.width / 2,
        y: game.world.height / 2 + 50,
        width: 600,
        height: screenHeight,
        key: 'bg-framed',
        cornerRadius: 0.4,
        dropShadowColor: dropShadowColor,
        color: backgroundColor,
        useDropShadow: true
      });
      this.contentGroup.add(this.backgroundImage);

      this.titleBackgroundImage = new _sprite2.default({
        key: 'dumpl',
        // asset: 'uiAtlas',
        // frame: 'ui_title_banner.png',
        x: game.world.width / 2,
        y: this.backgroundImage.y - this.backgroundImage.height / 2,
        anchorX: 0.5,
        anchorY: 0.5
      });
      this.titleBackgroundImage.setScaleMinMax(0.56, 0.56);
      this.contentGroup.add(this.titleBackgroundImage);
    }
  }, {
    key: 'buildCloseButton',
    value: function buildCloseButton(closeButtonImage) {
      var _this2 = this;

      this.closeButton = new _frameButton2.default({
        iconImage: closeButtonImage,
        x: 60,
        y: 60,
        inputEnabled: true,
        width: 80,
        height: 80,
        cornerRadius: 1,
        iconSize: 0.6
      });
      this.add(this.closeButton);

      this.closeButton.doOnClick = function () {
        _this2.closeScreenAnimation();
      };
    }
  }, {
    key: 'buildTitleText',
    value: function buildTitleText(text) {
      this.titleText = new _text2.default({
        text: text,
        x: this.game.world.width / 2,
        y: this.backgroundImage.y - this.backgroundImage.height / 2 - 26,
        color: '#ff4800',
        anchorX: 0.5,
        anchorY: 0.5,
        fontSize: 40,
        maxWidth: 1100
      });
      this.contentGroup.add(this.titleText);
    }
  }, {
    key: 'openScreenAnimation',
    value: function openScreenAnimation() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        _this3.onOpenAnimationDone();
      };
      var context = arguments[1];

      this.onScreenOpen();
      this.contentGroup.y = 0;
      var tOpen = this.game.add.tween(this.contentGroup).from({ y: -500 }, 200, _phaser2.default.Easing.Bounce.Out, false);
      tOpen.onComplete.add(function () {
        callback.call(context);
      });
      tOpen.start();
    }
  }, {
    key: 'closeScreenAnimation',
    value: function closeScreenAnimation() {
      var _this4 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        _this4.onCloseAnimationDone();
      };
      var context = arguments[1];

      var tClose = this.game.add.tween(this.contentGroup).to({ y: -1200 }, 100, _phaser2.default.Easing.Default, false);
      tClose.onComplete.add(function () {
        callback.call(context);
      });
      tClose.start();
    }
  }, {
    key: 'onCloseAnimationDone',
    value: function onCloseAnimationDone() {
      _screenManager2.default.instance.closeScreen();
    }
  }, {
    key: 'onOpenAnimationDone',
    value: function onOpenAnimationDone() {
      // This method can be overwritten for  things that need to be
      // activated when the screen is opened
    }
  }, {
    key: 'onScreenOpen',
    value: function onScreenOpen() {
      // This method can be overwritten for things that need to happen
      // before the animation starts.
    }
  }]);

  return Screen;
}(_phaser2.default.Group);

exports.default = Screen;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _phaser = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SquareMask = function (_Graphics) {
    _inherits(SquareMask, _Graphics);

    function SquareMask() {
        var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _phaser.Point(0, 0);
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _phaser.Point(100, 100);
        var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x555555;

        _classCallCheck(this, SquareMask);

        var _this = _possibleConstructorReturn(this, (SquareMask.__proto__ || Object.getPrototypeOf(SquareMask)).call(this, game, position.x, position.y));

        _this.clear();
        _this.beginFill(color);
        _this.drawRect(_this.x - size.x / 2, 0, size.x, size.y);
        _this.endFill();
        return _this;
    }

    return SquareMask;
}(_phaser.Graphics);

exports.default = SquareMask;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _vector = __webpack_require__(155);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// region ...Private methods declaration
var setScrollviewSettings = Symbol('setScrollviewSettings');
var onInputMove = Symbol('onInputMove');
var onInputDown = Symbol('onInputDown');
var onInputUp = Symbol('onInputUp');
var calculateNewBounds = Symbol('calculateNewBounds');
var checkIfVerticalOOB = Symbol('checkIfVerticalOOB');
var checkIfHorizontalOOB = Symbol('checkIfHorizontalOOB');
var bounceTween = Symbol('bounceTween');
var clamp = Symbol('clamp');
// endregion

/**
 * A scroll view where you can add a group and a mask.
 * With a few settings, the behaviour of the scroll view can be adjusted.
 * An example where this class can be used for is a leader board.
 *
 * @author Weikang Hu
 * @version 1.0
 * @since 2019-02-15
 */

var ScrollView = function (_Group) {
  _inherits(ScrollView, _Group);

  /**
     * Settings of the scroll view is defined at initialize.
     *
     * @param viewport Display/Graphics Object
     * @param position Phaser.Point Position of the scroll view
     * @param content Phaser.Group
     * @param scrollMode string
     * @param bounce number A value between 1 and 0;
     * @param friction number A value between 1 and 0
     * @param horizontal boolean Enable horizontal scroll
     * @param vertical boolean Enable vertical scroll
     * @param horizontalScrollbar Phaser.Group
     * @param verticalScrollbar Phaser.Group
     * @param padding vector4 Padding of the scroll view
     */
  function ScrollView(_ref) {
    var viewport = _ref.viewport,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? new _phaser.Point(0, 0) : _ref$position,
        content = _ref.content,
        _ref$scrollMode = _ref.scrollMode,
        scrollMode = _ref$scrollMode === undefined ? 'CLAMP' : _ref$scrollMode,
        _ref$bounce = _ref.bounce,
        bounce = _ref$bounce === undefined ? 0 : _ref$bounce,
        _ref$friction = _ref.friction,
        friction = _ref$friction === undefined ? 0 : _ref$friction,
        _ref$horizontal = _ref.horizontal,
        horizontal = _ref$horizontal === undefined ? true : _ref$horizontal,
        _ref$vertical = _ref.vertical,
        vertical = _ref$vertical === undefined ? true : _ref$vertical,
        _ref$horizontalScroll = _ref.horizontalScrollbar,
        horizontalScrollbar = _ref$horizontalScroll === undefined ? null : _ref$horizontalScroll,
        _ref$verticalScrollba = _ref.verticalScrollbar,
        verticalScrollbar = _ref$verticalScrollba === undefined ? null : _ref$verticalScrollba,
        _ref$padding = _ref.padding,
        padding = _ref$padding === undefined ? new _vector2.default(0, 0, 0, 0) : _ref$padding;

    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, game));

    _this.x = position.x;
    _this.y = position.y;

    _this.viewport = viewport;
    _this.content = content;

    _this.scrollModeEnum = {
      CLAMP: 0,
      BOUNCE: 1,
      INFINITY: 2
    };
    Object.freeze(_this.scrollModeEnum);

    _this.horizontalLimits = {
      min: 0,
      max: 0
    };

    _this.verticalLimits = {
      min: 0,
      max: 0
    };

    _this.selectedScrollMode = _this.scrollModeEnum[scrollMode.toUpperCase()] || _this.scrollModeEnum.CLAMP;

    _this.bounce = bounce;
    _this.friction = friction;
    _this.horizontal = horizontal;
    _this.vertical = vertical;
    _this.horizontalScrollbar = horizontalScrollbar;
    _this.verticalScrollbar = verticalScrollbar;
    _this.padding = padding;

    _this.pointerPosition = new _phaser.Point(0, 0);
    _this[setScrollviewSettings]();
    return _this;
  }

  /**
     * Set the scroll view settings.
     */


  _createClass(ScrollView, [{
    key: setScrollviewSettings,
    value: function value() {
      // Add the viewport and content to this group.
      this.add(this.viewport);
      this.add(this.content);

      // Save viewport width and height
      this.viewportWidth = this.viewport.width;
      this.viewportHeight = this.viewport.height;

      // Set the y position of the content
      this.content.x = 0;
      this.content.y = this.padding.y;

      // Set content mask
      this.content.mask = this.viewport;

      // Give reference of the scroll view to the content
      this.content.scrollview = this;

      // Set input for the viewport
      this.viewport.inputEnabled = true;
      this.viewport.events.onInputDown.add(this[onInputDown], this);
      this.viewport.events.onInputUp.add(this[onInputUp], this);
      game.input.addMoveCallback(this[onInputMove], this);

      // Calculate bounds
      this[calculateNewBounds]();
    }

    /* --------------------------
       * INPUT
       -------------------------- */
    // region

    /**
       * Callback when the scroll view is moved.
       *
       * @param pointer Phaser.Pointer Pointer object of the input
       * @param x number X coordinate of the pointer
       * @param y number Y coordinate of the pointer
       */

  }, {
    key: onInputMove,
    value: function value(pointer, x, y) {
      if (!this.clicked) return;

      if (this.horizontal) {
        this.content.x += x - this.pointerPosition.x;
      }

      if (this.vertical) {
        this.content.y += y - this.pointerPosition.y;
      }

      this.pointerPosition.setTo(x, y);

      this.moveContent();
    }

    /**
       * Callback when the input is pressed.
       *
       * @param object * The object which is selected
       * @param event Phaser.Pointer Pointer object of the input
       */

  }, {
    key: onInputDown,
    value: function value(object, event) {
      this.clicked = true;

      this.pointerPosition.setTo(event.x, event.y);

      if (this.bounceTween) {
        this.bounceTween.stop();
      }
    }

    /**
       * Callback when the input is released.
       */

  }, {
    key: onInputUp,
    value: function value() {
      this.clicked = false;

      this.moveContent();
    }
    // endregion

    /**
       * Calculate the four bounds of the scroll view.
       */

  }, {
    key: calculateNewBounds,
    value: function value() {
      this.horizontalLimits.min = Math.min(-(this.viewportWidth / 2 - this.content.width / 2) + this.padding.x, 0);
      this.horizontalLimits.max = Math.max(this.viewportWidth / 2 - this.content.width / 2 - this.padding.z, 0);

      this.verticalLimits.min = this.padding.y;
      this.verticalLimits.max = Math.max(this.content.height - this.viewportHeight + this.padding.y + this.padding.w, this.padding.y);

      console.log(this.content.bottom, this.content.right, this.content.top, this.content.left);
    }

    /**
       * Return the vertical limit if the limit is reached, else returns null.
       *
       * @returns number || null
       */

  }, {
    key: checkIfVerticalOOB,
    value: function value() {
      if (this.content.y > this.verticalLimits.min) {
        return this.verticalLimits.min;
      }if (this.content.y < -this.verticalLimits.max) {
        return -this.verticalLimits.max;
      }

      return null;
    }

    /**
       * Return the horizontal limit if the limit is reached, else returns null.
       *
       * @returns number || null
       */

  }, {
    key: checkIfHorizontalOOB,
    value: function value() {
      if (this.content.x < this.horizontalLimits.min) {
        return this.horizontalLimits.min;
      }if (this.content.x > this.horizontalLimits.max) {
        return this.horizontalLimits.max;
      }

      return null;
    }

    /**
       * Apply scroll mode if the limit is reached.
       */

  }, {
    key: 'moveContent',
    value: function moveContent() {
      var limitX = this[checkIfHorizontalOOB]();
      var limitY = this[checkIfVerticalOOB]();

      if (typeof limitX !== 'number' && typeof limitY !== 'number') {
        return;
      }

      switch (this.selectedScrollMode) {
        case this.scrollModeEnum.CLAMP:
          this[clamp](limitX, limitY);
          break;
        case this.scrollModeEnum.BOUNCE:
          if (this.clicked) break;

          this[bounceTween](limitX, limitY);
          break;
        case this.scrollModeEnum.INFINITY:
          break;
        default:
          console.warn(this.selectedScrollMode, 'is not a valid param!');
          break;
      }
    }

    /**
       * Apply bounce tween if the limit is reached.
       *
       * @param limitX number Horizontal limit.
       * @param limitY number Vertical limit.
       */

  }, {
    key: bounceTween,
    value: function value(limitX, limitY) {
      var newPosition = {};

      newPosition.x = typeof limitX === 'number' && this.horizontal ? limitX : this.content.x;
      newPosition.y = typeof limitY === 'number' && this.vertical ? limitY : this.content.y;

      this.bounceTween = game.make.tween(this.content).to(newPosition, 1000 * this.bounce || 1, _phaser.Phaser.Easing.Quadratic.Out, true);
    }
  }, {
    key: clamp,
    value: function value(limitX, limitY) {
      if (typeof limitX === 'number') {
        this.content.x = limitX;
      }

      if (typeof limitY === 'number') {
        this.content.y = limitY;
      }
    }
  }, {
    key: 'updateScrollbar',
    value: function updateScrollbar() {}
    // TODO change scroll bar


    /* --------------------------
       * PUBLIC METHODS
       -------------------------- */
    // region

    /**
       * Call this method when size of the content has been updated.
       * It will recalculate the boundaries.
       */

  }, {
    key: 'onGroupChange',
    value: function onGroupChange() {
      var resetPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (resetPosition) {
        this.content.x = 0;
        this.content.y = 0;
      }

      this[calculateNewBounds]();
    }
    // endregion

  }]);

  return ScrollView;
}(_phaser.Group);

exports.default = ScrollView;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector4 = function () {
    function Vector4(x, y, z, w) {
        _classCallCheck(this, Vector4);

        /**
         * The x component of this Vector.
         *
         * @name Phaser.Math.Vector4#x
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.x = 0;

        /**
         * The y component of this Vector.
         *
         * @name Phaser.Math.Vector4#y
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.y = 0;

        /**
         * The z component of this Vector.
         *
         * @name Phaser.Math.Vector4#z
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.z = 0;

        /**
         * The w component of this Vector.
         *
         * @name Phaser.Math.Vector4#w
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.w = 0;

        if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
            this.x = x.x || 0;
            this.y = x.y || 0;
            this.z = x.z || 0;
            this.w = x.w || 0;
        } else {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
            this.w = w || 0;
        }
    }

    /**
     * Make a clone of this Vector4.
     *
     * @method Phaser.Math.Vector4#clone
     * @since 3.0.0
     *
     * @return {Phaser.Math.Vector4} A clone of this Vector4.
     */


    _createClass(Vector4, [{
        key: 'clone',
        value: function clone() {
            return new Vector4(this.x, this.y, this.z, this.w);
        }

        /**
         * Copy the components of a given Vector into this Vector.
         *
         * @method Phaser.Math.Vector4#copy
         * @since 3.0.0
         *
         * @param {Phaser.Math.Vector4} src - The Vector to copy the components from.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'copy',
        value: function copy(src) {
            this.x = src.x;
            this.y = src.y;
            this.z = src.z || 0;
            this.w = src.w || 0;

            return this;
        }

        /**
         * Check whether this Vector is equal to a given Vector.
         *
         * Performs a strict quality check against each Vector's components.
         *
         * @method Phaser.Math.Vector4#equals
         * @since 3.0.0
         *
         * @param {Phaser.Math.Vector4} v - The vector to check equality with.
         *
         * @return {boolean} A boolean indicating whether the two Vectors are equal or not.
         */

    }, {
        key: 'equals',
        value: function equals(v) {
            return this.x === v.x && this.y === v.y && this.z === v.z && this.w === v.w;
        }

        /**
         * Set the `x`, `y`, `z` and `w` components of the this Vector to the given `x`, `y`, `z` and `w` values.
         *
         * @method Phaser.Math.Vector4#set
         * @since 3.0.0
         *
         * @param {(number|object)} x - The x value to set for this Vector, or an object containing x, y, z and w components.
         * @param {number} y - The y value to set for this Vector.
         * @param {number} z - The z value to set for this Vector.
         * @param {number} w - The z value to set for this Vector.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'set',
        value: function set(x, y, z, w) {
            if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
                this.x = x.x || 0;
                this.y = x.y || 0;
                this.z = x.z || 0;
                this.w = x.w || 0;
            } else {
                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
                this.w = w || 0;
            }

            return this;
        }

        /**
         * Add a given Vector to this Vector. Addition is component-wise.
         *
         * @method Phaser.Math.Vector4#add
         * @since 3.0.0
         *
         * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to add to this Vector.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'add',
        value: function add(v) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z || 0;
            this.w += v.w || 0;

            return this;
        }

        /**
         * Subtract the given Vector from this Vector. Subtraction is component-wise.
         *
         * @method Phaser.Math.Vector4#subtract
         * @since 3.0.0
         *
         * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to subtract from this Vector.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'subtract',
        value: function subtract(v) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z || 0;
            this.w -= v.w || 0;

            return this;
        }

        /**
         * Scale this Vector by the given value.
         *
         * @method Phaser.Math.Vector4#scale
         * @since 3.0.0
         *
         * @param {number} scale - The value to scale this Vector by.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'scale',
        value: function scale(_scale) {
            this.x *= _scale;
            this.y *= _scale;
            this.z *= _scale;
            this.w *= _scale;

            return this;
        }

        /**
         * Calculate the length (or magnitude) of this Vector.
         *
         * @method Phaser.Math.Vector4#length
         * @since 3.0.0
         *
         * @return {number} The length of this Vector.
         */

    }, {
        key: 'length',
        value: function length() {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;

            return Math.sqrt(x * x + y * y + z * z + w * w);
        }

        /**
         * Calculate the length of this Vector squared.
         *
         * @method Phaser.Math.Vector4#lengthSq
         * @since 3.0.0
         *
         * @return {number} The length of this Vector, squared.
         */

    }, {
        key: 'lengthSq',
        value: function lengthSq() {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;

            return x * x + y * y + z * z + w * w;
        }

        /**
         * Normalize this Vector.
         *
         * Makes the vector a unit length vector (magnitude of 1) in the same direction.
         *
         * @method Phaser.Math.Vector4#normalize
         * @since 3.0.0
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'normalize',
        value: function normalize() {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            var len = x * x + y * y + z * z + w * w;

            if (len > 0) {
                len = 1 / Math.sqrt(len);

                this.x = x * len;
                this.y = y * len;
                this.z = z * len;
                this.w = w * len;
            }

            return this;
        }

        /**
         * Calculate the dot product of this Vector and the given Vector.
         *
         * @method Phaser.Math.Vector4#dot
         * @since 3.0.0
         *
         * @param {Phaser.Math.Vector4} v - The Vector4 to dot product with this Vector4.
         *
         * @return {number} The dot product of this Vector and the given Vector.
         */

    }, {
        key: 'dot',
        value: function dot(v) {
            return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
        }

        /**
         * Linearly interpolate between this Vector and the given Vector.
         *
         * Interpolates this Vector towards the given Vector.
         *
         * @method Phaser.Math.Vector4#lerp
         * @since 3.0.0
         *
         * @param {Phaser.Math.Vector4} v - The Vector4 to interpolate towards.
         * @param {number} [t=0] - The interpolation percentage, between 0 and 1.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'lerp',
        value: function lerp(v, t) {
            if (t === undefined) {
                t = 0;
            }

            var ax = this.x;
            var ay = this.y;
            var az = this.z;
            var aw = this.w;

            this.x = ax + t * (v.x - ax);
            this.y = ay + t * (v.y - ay);
            this.z = az + t * (v.z - az);
            this.w = aw + t * (v.w - aw);

            return this;
        }

        /**
         * Perform a component-wise multiplication between this Vector and the given Vector.
         *
         * Multiplies this Vector by the given Vector.
         *
         * @method Phaser.Math.Vector4#multiply
         * @since 3.0.0
         *
         * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to multiply this Vector by.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'multiply',
        value: function multiply(v) {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z || 1;
            this.w *= v.w || 1;

            return this;
        }

        /**
         * Perform a component-wise division between this Vector and the given Vector.
         *
         * Divides this Vector by the given Vector.
         *
         * @method Phaser.Math.Vector4#divide
         * @since 3.0.0
         *
         * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to divide this Vector by.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'divide',
        value: function divide(v) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z || 1;
            this.w /= v.w || 1;

            return this;
        }

        /**
         * Calculate the distance between this Vector and the given Vector.
         *
         * @method Phaser.Math.Vector4#distance
         * @since 3.0.0
         *
         * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to calculate the distance to.
         *
         * @return {number} The distance from this Vector to the given Vector.
         */

    }, {
        key: 'distance',
        value: function distance(v) {
            var dx = v.x - this.x;
            var dy = v.y - this.y;
            var dz = v.z - this.z || 0;
            var dw = v.w - this.w || 0;

            return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
        }

        /**
         * Calculate the distance between this Vector and the given Vector, squared.
         *
         * @method Phaser.Math.Vector4#distanceSq
         * @since 3.0.0
         *
         * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to calculate the distance to.
         *
         * @return {number} The distance from this Vector to the given Vector, squared.
         */

    }, {
        key: 'distanceSq',
        value: function distanceSq(v) {
            var dx = v.x - this.x;
            var dy = v.y - this.y;
            var dz = v.z - this.z || 0;
            var dw = v.w - this.w || 0;

            return dx * dx + dy * dy + dz * dz + dw * dw;
        }

        /**
         * Negate the `x`, `y`, `z` and `w` components of this Vector.
         *
         * @method Phaser.Math.Vector4#negate
         * @since 3.0.0
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'negate',
        value: function negate() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.w = -this.w;

            return this;
        }

        /**
         * Transform this Vector with the given Matrix.
         *
         * @method Phaser.Math.Vector4#transformMat4
         * @since 3.0.0
         *
         * @param {Phaser.Math.Matrix4} mat - The Matrix4 to transform this Vector4 with.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'transformMat4',
        value: function transformMat4(mat) {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            var m = mat.val;

            this.x = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
            this.y = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
            this.z = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
            this.w = m[3] * x + m[7] * y + m[11] * z + m[15] * w;

            return this;
        }

        /**
         * Transform this Vector with the given Quaternion.
         *
         * @method Phaser.Math.Vector4#transformQuat
         * @since 3.0.0
         *
         * @param {Phaser.Math.Quaternion} q - The Quaternion to transform this Vector with.
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'transformQuat',
        value: function transformQuat(q) {
            // TODO: is this really the same as Vector3?
            // Also, what about this: http://molecularmusings.wordpress.com/2013/05/24/a-faster-quaternion-vector-multiplication/
            // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var qx = q.x;
            var qy = q.y;
            var qz = q.z;
            var qw = q.w;

            // calculate quat * vec
            var ix = qw * x + qy * z - qz * y;
            var iy = qw * y + qz * x - qx * z;
            var iz = qw * z + qx * y - qy * x;
            var iw = -qx * x - qy * y - qz * z;

            // calculate result * inverse quat
            this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
            this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
            this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

            return this;
        }

        /**
         * Make this Vector the zero vector (0, 0, 0, 0).
         *
         * @method Phaser.Math.Vector4#reset
         * @since 3.0.0
         *
         * @return {Phaser.Math.Vector4} This Vector4.
         */

    }, {
        key: 'reset',
        value: function reset() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;

            return this;
        }
    }]);

    return Vector4;
}();

exports.default = Vector4;
;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _default = __webpack_require__(60);

var _default2 = _interopRequireDefault(_default);

var _soundManager = __webpack_require__(104);

var _soundManager2 = _interopRequireDefault(_soundManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Private methods.
var changeTexture = Symbol('changeTexture');
var executeCorrectClick = Symbol('executeCorrectClick');

/**
 * A clickable sprite which changes texture when on click.
 * It has a three states: default, down and disable.
 *
 * The following methods are important for use.
 * doOnClick: IMPORTANT: Override the method doOnClick! This code will be executed when the state
 * is default (or down) and when the image is pressed.
 * doOnClickDisabled: Override the method doOnClickDisabled if you make use of the disable state.
 * changeState: Change the state to default, down or disable. This method can't be used when you
 * want to change the state from disable to enable.
 * doDisable: Use this method to change the state from disable to enable.
 */

var Button = function (_Phaser$Image) {
  _inherits(Button, _Phaser$Image);

  function Button(_ref) {
    var key = _ref.key,
        _ref$sfx = _ref.sfx,
        sfx = _ref$sfx === undefined ? _default2.default.buttonClickSFX : _ref$sfx,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? new _phaser.Point(0, 0) : _ref$position,
        frame = _ref.frame,
        _ref$frameDisable = _ref.frameDisable,
        frameDisable = _ref$frameDisable === undefined ? frame : _ref$frameDisable,
        _ref$frameDown = _ref.frameDown,
        frameDown = _ref$frameDown === undefined ? frame : _ref$frameDown,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        _ref$anchor = _ref.anchor,
        anchor = _ref$anchor === undefined ? new _phaser.Point(0.5, 0.5) : _ref$anchor,
        _ref$scale = _ref.scale,
        scale = _ref$scale === undefined ? new _phaser.Point(1, 1) : _ref$scale;

    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, game, position.x, position.y, key, frame));

    _this._textureList = { default: frame, down: frameDown, disable: frameDisable };
    _this._state = { default: 1, down: 2, disable: 3 };
    Object.freeze(_this._state);

    _this.currentState = _this._state.default;

    if (disabled) {
      _this.doDisable();
    }

    _this.sfx = sfx;

    _this.anchor.setTo(anchor.x, anchor.y);
    _this.scale.setTo(scale.x, scale.y);

    _this.inputEnabled = true;

    _this.events.onInputUp.add(function () {
      _this.pressed = false;
      _this.changeState('default');
      //      SoundManager2.instance.playSound('pressak', 1, false);
      _this[executeCorrectClick]();
    });

    _this.events.onInputDown.add(function () {
      _this.pressed = true;
      _this.changeState('down');
      // this.sfx.play();
    });

    game.world.add(_this);
    return _this;
  }

  /**
   * Change the state to disable.
   */


  _createClass(Button, [{
    key: 'doDisable',
    value: function doDisable() {
      this.changeState('disable');
    }

    /**
     * Change the state to enable. This is the only way to change the state from disable to enable.
     */

  }, {
    key: 'doEnable',
    value: function doEnable() {
      this.currentState = this._state.default;
      this[changeTexture](this._textureList.default);
    }

    /**
     * Change the state of the button.
     * @param state The new state of the button. Check this._state which are legit.
     */

  }, {
    key: 'changeState',
    value: function changeState(state) {
      if (this.currentState === this._state.disable) {
        return;
      }
      switch (state) {
        case 'default':
          this.pressed = false;
          this.currentState = this._state.default;
          this[changeTexture](this._textureList.default);
          break;
        case 'down':
          this.pressed = true;
          this.currentState = this._state.down;
          this[changeTexture](this._textureList.down);
          break;
        case 'disable':
          this.pressed = false;
          this.currentState = this._state.disable;
          this[changeTexture](this._textureList.disable);
          break;
        default:
          this.pressed = false;
          this.currentState = this._state.default;
          this[changeTexture](this._textureList.default);
          break;
      }
    }

    /**
     * Change the texture based on the state
     * @param key Key of the frame
     */

  }, {
    key: changeTexture,
    value: function value() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._textureList.default;

      if (key === undefined) {
        return;
      }

      this.loadTexture(key);
    }

    // Empty shell. Override this methode

  }, {
    key: 'doOnClick',
    value: function doOnClick() {
      console.warn('doOnClick is empty!');
    }

    // Empty shell. Override this methode

  }, {
    key: 'doOnClickDisabled',
    value: function doOnClickDisabled() {
      console.warn('doOnClickDisabled is empty!');
    }

    /**
     * Execute click based on the state of the button.
     */

  }, {
    key: executeCorrectClick,
    value: function value() {
      if (this.currentState !== this._state.disable) {
        this.doOnClick();
        return;
      }

      this.doOnClickDisabled();
    }

    /**
     * Add a gameObject to this. This can be text or image.
     *
     * @param object gameObject Add a gameObject as child to this.
     */

  }, {
    key: 'addObject',
    value: function addObject(object) {
      this.addChild(object);
    }
  }]);

  return Button;
}(_phaser.Phaser.Image);

exports.default = Button;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createStates = Symbol('createStates');
var setDefaultState = Symbol('setDefaultState');
var setCurrentState = Symbol('setCurrentState');
var onLeaveState = Symbol('onLeaveState');
var onEnterState = Symbol('onEnterState');

/**
 * StateManager is used to create different states and execute function on enter/leave
 *
 * @param owner Owner is kept for correct scope
 * @constructor StateManager acts as constructor for this prototype
 */

var StateManager = function () {
  function StateManager() {
    var owner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

    _classCallCheck(this, StateManager);

    this._owner = owner;

    this._states = {};

    this.defaultState = null;
    this.currentState = null;
    this.currentStateId = null;
    this.previousState = null;

    this.hasStarted = false;
  }

  /**
   * Function initializes the first state and adds states to states array
   *
   * @param states Array of states to be used
   * @param defaultState Default state
   */


  _createClass(StateManager, [{
    key: 'initialize',
    value: function initialize(states, defaultState) {
      this[setDefaultState](defaultState);
      this[createStates](states);
    }

    /**
     * Function creates states
     *
     * @param states Array of states given by initialize
     * @private
     */

  }, {
    key: createStates,
    value: function value(states) {
      var _this = this;

      // this._states = { ...states };states
      Object.keys(states).forEach(function (state) {
        _this._states[state] = states[state];
      });
    }

    /**
     * Function starts defaulted state
     *
     * @param defaultState First state to be executed
     */

  }, {
    key: 'startDefault',
    value: function startDefault() {
      var defaultState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultState;

      this.changeState(defaultState);
      this.hasStarted = true;
    }

    /**
     * Function changes state, use this to change state
     *
     * @param state State to change to
     * @param data Redefined functions on execute state call
     */

  }, {
    key: 'changeState',
    value: function changeState(state) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      // console.log('Change state to: ', state);
      if (data !== undefined) {
        this._states[state] = data;
      }

      this[setCurrentState](state);

      if (this.hasStarted === true) {
        this[onLeaveState](this.previousState);
      }

      this[onEnterState](this.currentState);
    }

    /**
     * Function call on Entering state
     *
     * @param state
     * @private
     */

  }, {
    key: onEnterState,
    value: function value(state) {
      if (state.enter !== undefined) {
        state.enter.call(this._owner);
      }
    }

    /**
     * Function call on Leaving state
     *
     * @param state
     * @private
     */

  }, {
    key: onLeaveState,
    value: function value(state) {
      if (state.leave !== undefined) {
        state.leave.call(this._owner);
      }
      this.hasStarted = false;
    }

    /**
     * Function sets current state
     * @param state State to be set
     * @private
     */

  }, {
    key: setCurrentState,
    value: function value(state) {
      if (this.hasStarted) {
        this.previousState = this.currentState;
      }
      this.currentStateId = state;
      this.currentState = this._states[state];
    }

    /**
     * Function returns current state
     * @returns the current state
     */

  }, {
    key: 'getCurrentState',
    value: function getCurrentState() {
      return this.currentStateId;
    }

    /**
     * Function returns default state
     * @returns default state
     */

  }, {
    key: 'getDefaultState',
    value: function getDefaultState() {
      return this.defaultState;
    }

    /**
     * Function sets default state
     * @param state State to be set
     * @private
     */

  }, {
    key: setDefaultState,
    value: function value(state) {
      this.defaultState = state;
    }
  }]);

  return StateManager;
}();

exports.default = StateManager;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phaser = __webpack_require__(3);

var _image = __webpack_require__(53);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Background image. The difference between a normal Image class is that
 * it will add itself to the world and send itself to the back.
 */
var Background = function (_Image) {
  _inherits(Background, _Image);

  function Background(_ref) {
    var key = _ref.key,
        frame = _ref.frame,
        stretch = _ref.stretch,
        position = _ref.position,
        _ref$anchor = _ref.anchor,
        anchor = _ref$anchor === undefined ? new _phaser.Point(0, 0) : _ref$anchor;

    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, { key: key, frame: frame, position: position, anchor: anchor }));

    if (stretch) {
      _this.width = game.width;
      _this.height = game.height;
    }

    game.add.existing(_this);
    game.world.sendToBack(_this);
    return _this;
  }

  return Background;
}(_image2.default);

exports.default = Background;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
module.exports = __webpack_require__(362);


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(161);

__webpack_require__(358);

__webpack_require__(359);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(162);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(97);
__webpack_require__(266);
__webpack_require__(129);
__webpack_require__(267);
__webpack_require__(130);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(133);
__webpack_require__(135);
__webpack_require__(136);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(328);
__webpack_require__(329);
__webpack_require__(330);
__webpack_require__(331);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(335);
__webpack_require__(336);
__webpack_require__(337);
__webpack_require__(338);
__webpack_require__(339);
__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(342);
__webpack_require__(343);
__webpack_require__(344);
__webpack_require__(345);
__webpack_require__(346);
__webpack_require__(347);
__webpack_require__(348);
__webpack_require__(349);
__webpack_require__(350);
__webpack_require__(351);
__webpack_require__(352);
__webpack_require__(353);
__webpack_require__(354);
__webpack_require__(355);
__webpack_require__(356);
__webpack_require__(357);
module.exports = __webpack_require__(20);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(13);
var META = __webpack_require__(33).KEY;
var $fails = __webpack_require__(4);
var shared = __webpack_require__(55);
var setToStringTag = __webpack_require__(48);
var uid = __webpack_require__(36);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(111);
var wksDefine = __webpack_require__(78);
var enumKeys = __webpack_require__(164);
var isArray = __webpack_require__(64);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(5);
var toObject = __webpack_require__(10);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(25);
var createDesc = __webpack_require__(35);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(114);
var $GOPD = __webpack_require__(17);
var $GOPS = __webpack_require__(63);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(37);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(57).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(32)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55)('native-function-to-string', Function.toString);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(63);
var pIE = __webpack_require__(57);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(39) });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperties: __webpack_require__(113) });


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(16);
var $getOwnPropertyDescriptor = __webpack_require__(17).f;

__webpack_require__(27)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(10);
var $getPrototypeOf = __webpack_require__(18);

__webpack_require__(27)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(10);
var $keys = __webpack_require__(37);

__webpack_require__(27)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(27)('getOwnPropertyNames', function () {
  return __webpack_require__(114).f;
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(5);
var meta = __webpack_require__(33).onFreeze;

__webpack_require__(27)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(5);
var meta = __webpack_require__(33).onFreeze;

__webpack_require__(27)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(5);
var meta = __webpack_require__(33).onFreeze;

__webpack_require__(27)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(5);

__webpack_require__(27)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(5);

__webpack_require__(27)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(5);

__webpack_require__(27)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(115) });


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(116) });


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(82).set });


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(49);
var test = {};
test[__webpack_require__(6)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(13)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(117) });


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(8) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(5);
var getPrototypeOf = __webpack_require__(18);
var HAS_INSTANCE = __webpack_require__(6)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(9).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(119);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(120);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(15);
var cof = __webpack_require__(22);
var inheritIfRequired = __webpack_require__(84);
var toPrimitive = __webpack_require__(25);
var fails = __webpack_require__(4);
var gOPN = __webpack_require__(40).f;
var gOPD = __webpack_require__(17).f;
var dP = __webpack_require__(9).f;
var $trim = __webpack_require__(50).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(39)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(8) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(13)(global, NUMBER, $Number);
}


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(23);
var aNumberValue = __webpack_require__(121);
var repeat = __webpack_require__(85);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(4)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(4);
var aNumberValue = __webpack_require__(121);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(122) });


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(122);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(120);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(119);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(123);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(86);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(87);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(124) });


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(4)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(123) });


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(86) });


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(87);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(4)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(87);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(38);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(7);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(50)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(65)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(88)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(65)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(7);
var context = __webpack_require__(90);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(91)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(90);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(91)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(85)
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(7);
var context = __webpack_require__(90);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(91)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(14)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(14)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(14)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(14)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(14)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(14)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(14)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(14)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(14)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(14)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(14)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(14)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(14)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(25);

$export($export.P + $export.F * __webpack_require__(4)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(241);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(4);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(13)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(6)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(12)(proto, TO_PRIMITIVE, __webpack_require__(244));


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(25);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(64) });


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(21);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(92);
var toLength = __webpack_require__(7);
var createProperty = __webpack_require__(93);
var getIterFn = __webpack_require__(94);

$export($export.S + $export.F * !__webpack_require__(67)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(93);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(4)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(16);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(56) != Object || !__webpack_require__(24)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(81);
var cof = __webpack_require__(22);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(7);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(4)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(11);
var toObject = __webpack_require__(10);
var fails = __webpack_require__(4);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(24)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(28)(0);
var STRICT = __webpack_require__(24)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var isArray = __webpack_require__(64);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(28)(1);

$export($export.P + $export.F * !__webpack_require__(24)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(28)(2);

$export($export.P + $export.F * !__webpack_require__(24)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(28)(3);

$export($export.P + $export.F * !__webpack_require__(24)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(28)(4);

$export($export.P + $export.F * !__webpack_require__(24)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(126);

$export($export.P + $export.F * !__webpack_require__(24)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(126);

$export($export.P + $export.F * !__webpack_require__(24)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(62)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(24)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(16);
var toInteger = __webpack_require__(23);
var toLength = __webpack_require__(7);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(24)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(127) });

__webpack_require__(34)('copyWithin');


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(96) });

__webpack_require__(34)('fill');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(28)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(34)(KEY);


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(28)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(34)(KEY);


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('Array');


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(84);
var dP = __webpack_require__(9).f;
var gOPN = __webpack_require__(40).f;
var isRegExp = __webpack_require__(66);
var $flags = __webpack_require__(58);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(8) && (!CORRECT_NEW || __webpack_require__(4)(function () {
  re2[__webpack_require__(6)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(13)(global, 'RegExp', $RegExp);
}

__webpack_require__(41)('RegExp');


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(130);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(58);
var DESCRIPTORS = __webpack_require__(8);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(13)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(4)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toLength = __webpack_require__(7);
var advanceStringIndex = __webpack_require__(99);
var regExpExec = __webpack_require__(68);

// @@match logic
__webpack_require__(69)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(7);
var toInteger = __webpack_require__(23);
var advanceStringIndex = __webpack_require__(99);
var regExpExec = __webpack_require__(68);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(69)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var sameValue = __webpack_require__(116);
var regExpExec = __webpack_require__(68);

// @@search logic
__webpack_require__(69)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(66);
var anObject = __webpack_require__(1);
var speciesConstructor = __webpack_require__(59);
var advanceStringIndex = __webpack_require__(99);
var toLength = __webpack_require__(7);
var callRegExpExec = __webpack_require__(68);
var regexpExec = __webpack_require__(98);
var fails = __webpack_require__(4);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(69)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var global = __webpack_require__(2);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(49);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(5);
var aFunction = __webpack_require__(11);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var speciesConstructor = __webpack_require__(59);
var task = __webpack_require__(100).set;
var microtask = __webpack_require__(101)();
var newPromiseCapabilityModule = __webpack_require__(102);
var perform = __webpack_require__(131);
var userAgent = __webpack_require__(70);
var promiseResolve = __webpack_require__(132);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(44)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(48)($Promise, PROMISE);
__webpack_require__(41)(PROMISE);
Wrapper = __webpack_require__(20)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(137);
var validate = __webpack_require__(45);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(71)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(72);
var buffer = __webpack_require__(103);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(7);
var isObject = __webpack_require__(5);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(59);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(4)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(41)(ARRAY_BUFFER);


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(72).ABV, {
  DataView: __webpack_require__(103).DataView
});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(11);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(4)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(39);
var aFunction = __webpack_require__(11);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(5);
var fails = __webpack_require__(4);
var bind = __webpack_require__(117);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(9);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(25);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(4)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(17).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(89)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(18);
var has = __webpack_require__(15);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(5);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(17);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(18);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(139) });


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(9);
var gOPD = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(18);
var has = __webpack_require__(15);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(35);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(5);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(82);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(62)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(34)('includes');


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(140);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(7);
var aFunction = __webpack_require__(11);
var arraySpeciesCreate = __webpack_require__(95);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(34)('flatMap');


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(140);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(7);
var toInteger = __webpack_require__(23);
var arraySpeciesCreate = __webpack_require__(95);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(34)('flatten');


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(65)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(141);
var userAgent = __webpack_require__(70);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(141);
var userAgent = __webpack_require__(70);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(50)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(50)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(26);
var toLength = __webpack_require__(7);
var isRegExp = __webpack_require__(66);
var getFlags = __webpack_require__(58);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(89)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78)('asyncIterator');


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78)('observable');


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(139);
var toIObject = __webpack_require__(16);
var gOPD = __webpack_require__(17);
var createProperty = __webpack_require__(93);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(142)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(142)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var aFunction = __webpack_require__(11);
var $defineProperty = __webpack_require__(9);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(8) && $export($export.P + __webpack_require__(73), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var aFunction = __webpack_require__(11);
var $defineProperty = __webpack_require__(9);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(8) && $export($export.P + __webpack_require__(73), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(18);
var getOwnPropertyDescriptor = __webpack_require__(17).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(8) && $export($export.P + __webpack_require__(73), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(18);
var getOwnPropertyDescriptor = __webpack_require__(17).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(8) && $export($export.P + __webpack_require__(73), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(143)('Map') });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(143)('Set') });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(74)('Map');


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(74)('Set');


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(74)('WeakMap');


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(74)('WeakSet');


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(75)('Map');


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(75)('Set');


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(75)('WeakMap');


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(75)('WeakSet');


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0);
var cof = __webpack_require__(22);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var scale = __webpack_require__(145);
var fround = __webpack_require__(124);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(145) });


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(20);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(59);
var promiseResolve = __webpack_require__(132);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(102);
var perform = __webpack_require__(131);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(18);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(135);
var from = __webpack_require__(144);
var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(18);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(18);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(11);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(0);
var microtask = __webpack_require__(101)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(22)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(20);
var microtask = __webpack_require__(101)();
var OBSERVABLE = __webpack_require__(6)('observable');
var aFunction = __webpack_require__(11);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(42);
var redefineAll = __webpack_require__(44);
var hide = __webpack_require__(12);
var forOf = __webpack_require__(43);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(41)('Observable');


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var userAgent = __webpack_require__(70);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $task = __webpack_require__(100);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(97);
var getKeys = __webpack_require__(37);
var redefine = __webpack_require__(13);
var global = __webpack_require__(2);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(51);
var wks = __webpack_require__(6);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(360);
module.exports = __webpack_require__(20).RegExp.escape;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0);
var $re = __webpack_require__(361)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _facebook = __webpack_require__(52);

var _facebook2 = _interopRequireDefault(_facebook);

var _load = __webpack_require__(365);

var _load2 = _interopRequireDefault(_load);

var _boot = __webpack_require__(367);

var _boot2 = _interopRequireDefault(_boot);

var _game = __webpack_require__(371);

var _game2 = _interopRequireDefault(_game);

var _home = __webpack_require__(385);

var _home2 = _interopRequireDefault(_home);

var _package = __webpack_require__(390);

var _config = __webpack_require__(391);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import 'p2';


var args = ['%c %c %c ' + _package.name + ' v' + _package.version + ' %c %c %c', 'background: #999dff', 'background: #757bff', 'color: #ffffff; background: #000cfc;', 'background: #757bff', 'background: #999dff', 'background: #ffffff'];

/**
 * The class of the game that needs to be created.
 */

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    var _console;

    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, _config2.default));

    _this.state.add('Load', _load2.default, false);
    _this.state.add('Boot', _boot2.default, false);
    _this.state.add('Game', _game2.default, false);
    _this.state.add('Home', _home2.default, false);

    (_console = console).log.apply(_console, args);

    if (!window.cordova) {
      _this.state.start('Load');
    }
    return _this;
  }

  return Game;
}(_phaser2.default.Game);

window.createGame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _facebook2.default.instance.initializeAsync();

        case 2:
          window.game = new Game();

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));

if (window.cordova) {
  var app = {
    initialize: function initialize() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    // deviceready Event Handler
    //
    onDeviceReady: function onDeviceReady() {
      this.receivedEvent('deviceready');

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot');
    },
    receivedEvent: function receivedEvent(id) {
      console.log('Received Event: ' + id);
    }
  };

  app.initialize();
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
      console.log('SW registered: ', registration);
    }).catch(function (registrationError) {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

/***/ }),
/* 363 */,
/* 364 */,
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _asset_list_runtime = __webpack_require__(366);

var _asset_list_runtime2 = _interopRequireDefault(_asset_list_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_State) {
  _inherits(_class, _State);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'preload',
    value: function preload() {
      var logoPath = _asset_list_runtime2.default.find(function (asset) {
        return asset.name === 'logo5';
      });

      this.game.load.image('logo5', logoPath.path);
    }
  }, {
    key: 'create',
    value: function create() {
      window.game.state.start('Boot', true, false);
    }
  }]);

  return _class;
}(_phaser.State);

exports.default = _class;

/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports = [{"path":"assets\\runtime\\images\\logo5.png","type":"image","name":"logo5"},{"path":"assets\\runtime\\json\\languages\\en.json","type":"json","name":"en"},{"path":"assets\\runtime\\json\\languages\\us.json","type":"json","name":"us"}]

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _nineSlice = __webpack_require__(147);

var _nineSlice2 = _interopRequireDefault(_nineSlice);

var _facebook = __webpack_require__(52);

var _facebook2 = _interopRequireDefault(_facebook);

var _soundManager = __webpack_require__(104);

var _soundManager2 = _interopRequireDefault(_soundManager);

var _asset_list_init = __webpack_require__(368);

var _asset_list_init2 = _interopRequireDefault(_asset_list_init);

var _viewportManager = __webpack_require__(369);

var _viewportManager2 = _interopRequireDefault(_viewportManager);

var _image = __webpack_require__(53);

var _image2 = _interopRequireDefault(_image);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

var _famobiTracking = __webpack_require__(370);

var _famobiTracking2 = _interopRequireDefault(_famobiTracking);

var _famobiApi = __webpack_require__(46);

var _famobiApi2 = _interopRequireDefault(_famobiApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Private methods.
var loadJSON = Symbol('loadJSON');
var loadImage = Symbol('loadImage');
var loadAudio = Symbol('loadAudio');
var loadAtlas = Symbol('loadAtlas');
var loadFonts = Symbol('loadFonts');
var loadBitmapFont = Symbol('loadBitmapFont');
var setTexturePriority = Symbol('setTexturePriority');
var loadFiles = Symbol('loadFiles');
var loadFileType = Symbol('loadFileType');
var fileComplete = Symbol('fileComplete');

/**
 * This class initialize the game. It preloads all assets and calls startGameAsync when it's ready.
 */

var Boot = function (_State) {
  _inherits(Boot, _State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: 'init',

    /**
       * init is the very first function called when your State starts up
       */
    value: function init() {
      game.stage.disableVisibilityChange = false;

      game.time.advancedTiming = true;
      game.time.desiredFps = 60;

      this._fonts = [];
      this._soundSettings = [];
      this._imageKeys = ['_default'];

      // physics system
      this.game.physics.startSystem(_phaser.Phaser.Physics.ARCADE);

      // console.log(this.physics.world.setFPS(15))
      // this.game.world.setFPS(15)

      _viewportManager2.default.instance.initialize();

      this.game.renderer.renderSession.roundPixels = true;

      this.createLoadingBar();
      game.onResizeChange.add(this._onResize, this);

      famobi_tracking.init(_famobiTracking2.default.game, _famobiTracking2.default.preferredUid, _famobiTracking2.default.clientVersion, _famobiTracking2.default.enableLog, _famobiTracking2.default.trackAds);
    }

    /**
     * Preload is called first. Normally you'd use this to load your game assets.
     */

  }, {
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      this.loadImages();
      game.assetList = _asset_list_init2.default;
      this[loadFiles](game.assetList);
      this.loadSpriteSheets();
      _viewportManager2.default.instance.resizeGame();

      game.plugins.add(_nineSlice2.default.Plugin);

      this.load.onFileComplete.add(this[fileComplete], this);

      this.load.onFileComplete.add(function (progress) {
        _this2.setLoadingProgress(progress);
      });

      game.load.image('brandingButtonImage', _famobiApi2.default.instance.getBrandingButtonImage(false));
    }
  }, {
    key: 'loadSpriteSheets',
    value: function loadSpriteSheets() {
      this.game.load.spritesheet('miner0idle', 'assets/init/images/miner0idle.png', 1204 / 4, 1223 / 5, 20);
      this.game.load.spritesheet('miner0throw', 'assets/init/images/miner0throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner0fast', 'assets/init/images/miner0fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner1idle', 'assets/init/images/miner1idle.png', 1204 / 4, 1223 / 5, 20);
      this.game.load.spritesheet('miner1throw', 'assets/init/images/miner1throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner1fast', 'assets/init/images/miner1fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner2idle', 'assets/init/images/miner2idle.png', 1204 / 4, 1223 / 5, 20);
      this.game.load.spritesheet('miner2throw', 'assets/init/images/miner2throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner2fast', 'assets/init/images/miner2fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner3idle', 'assets/init/images/miner3idle.png', 1204 / 4, 1223 / 5, 20);
      this.game.load.spritesheet('miner3throw', 'assets/init/images/miner3throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner3fast', 'assets/init/images/miner3fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner4idle', 'assets/init/images/miner4idle.png', 1204 / 4, 1223 / 5, 20);
      this.game.load.spritesheet('miner4throw', 'assets/init/images/miner4throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner4fast', 'assets/init/images/miner4fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner5idle', 'assets/init/images/miner5idle.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner5throw', 'assets/init/images/miner5throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner5fast', 'assets/init/images/miner5fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner6idle', 'assets/init/images/miner6idle.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner6throw', 'assets/init/images/miner6throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner6fast', 'assets/init/images/miner6fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner7idle', 'assets/init/images/miner7idle.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner7throw', 'assets/init/images/miner7throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner7fast', 'assets/init/images/miner7fast.png', 1608 / 4, 1443 / 5, 20);
      this.game.load.spritesheet('miner8idle', 'assets/init/images/miner8idle.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner8throw', 'assets/init/images/miner8throw.png', 1552 / 4, 1450 / 5, 20);
      this.game.load.spritesheet('miner8fast', 'assets/init/images/miner8fast.png', 1608 / 4, 1443 / 5, 20);
    }

    // eslint-disable-next-line

  }, {
    key: fileComplete,
    value: function value(progress) {
      _facebook2.default.instance.setLoadingProgress(progress);
      try{
        window.famobi.setPreloadProgress(progress);
      } catch(e) {}
    }

    /**
     * Function loads files all files in folders
     * @param assets Directory tree based of Assets folder
     */

  }, {
    key: loadFiles,
    value: function value(assets) {
      var _this3 = this;

      if (!assets) {
        console.warn('No list of assets could be found. Does the folder ./assets/init exists?');
        return;
      }
      assets.forEach(function (file) {
        _this3[loadFileType](file);
      });
    }

    /**
     * Load files based on their extensions (types)
     *
     * @param {object} file - Object with data of the asset.
     */

  }, {
    key: loadFileType,
    value: function value(file) {
      switch (file.type) {
        case 'image':
          this[loadImage](file);break;
        case 'json':
          this[loadJSON](file);break;
        case 'atlas':
          this[loadAtlas](file);break;
        case 'audio':
          this[loadAudio](file);break;
        case 'font':
          this._fonts.push(file);break;
        case 'bmfont':
          this[loadBitmapFont](file);break;
        default:
          console.warn(file.type, 'is not a recognized type');
      }
    }

    /**
     * Function loads file as json
     *
     * @param {object} file - Object with data of the asset.
     * @param {string} file.name - Name of the json.
     * @param {string} file.path - Path of the json.
     */

  }, {
    key: loadJSON,
    value: function value(file) {
      this.load.json(file.name, file.path);
    }

    /**
     * This method will automatically load all images with the correct settings and compression.
     *
     * @param {object} file - Object with data of the asset.
     * @param {string} file.name - Name of the image. Must be unique.
     * @param {string} file.path - Path of the image.
     */

  }, {
    key: loadImage,
    value: function value(file) {
      this.load.image(file.name, file.path);
      this._imageKeys.push(file.name);
    }

    /**
     * Loads all sound files in the soundList. It accepts three keys: key, dir and file.
     *
     * @param {object} file - Object with data of the asset.
     * @param {string} file.name - Name of the audio. Must be unique.
     * @param {string[]} file.path - Array of each extension.
     * @param {boolean} file.bgm - Defines whether the sound is a background music.
     */

  }, {
    key: loadAudio,
    value: function value(file) {
      this.load.audio(file.name, file.path);
      this._soundSettings.push({ name: file.name, loop: file.bgm, allowMultiple: !file.bgm });
    }

    /**
     * Load an atlas image.
     *
     * @param {object} file - Object with data of the asset.
     * @param {string} file.name - Name of the atlas. Must be unique.
     * @param {string} file.path - Path of the image file.
     * @param {string} file.pathJSON - Path of the json file.
     */

  }, {
    key: loadAtlas,
    value: function value(file) {
      this.load.atlas(file.name, file.path, file.pathJSON, _phaser.Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
      this._imageKeys.push(file.name);
    }
  }, {
    key: loadBitmapFont,
    value: function value(file) {
      this.load.bitmapFont(file.name, file.path, file.pathFnt);
      this._imageKeys.push(file.name);
    }

    /**
     * Load all fonts dynamically and put it in
     *
     * @returns {FontFace[]} A list of all fonts loaded.
     * @async
     * @private
     */

  }, {
    key: loadFonts,
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var promises, i, fontFace, _i;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                promises = [];

                for (i = 0; i < this._fonts.length; i += 1) {
                  try {
                    fontFace = new FontFace(this._fonts[i].name, this._fonts[i].path.replace(/\\/g, '/'));

                    promises.push(fontFace.load());
                  } catch (error) {
                    console.error(error);
                  }
                }

                _context.next = 4;
                return Promise.all(promises);

              case 4:
                this.values = _context.sent;


                for (_i = 0; _i < this.values.length; _i += 1) {
                  try {
                    document.fonts.add(this.values[_i]);
                    document.body.style.fontFamily = '"' + this.values[_i].family + '", Arial';
                  } catch (error) {
                    console.error(error);
                  }
                }

                return _context.abrupt('return', this.values);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function value() {
        return _ref.apply(this, arguments);
      }

      return value;
    }()
  }, {
    key: 'loadImages',
    value: function loadImages() {}

    /**
     * Set the final settings and create the state Game.
     */

  }, {
    key: '_onResize',
    value: function _onResize() {
      this.logo.x = game.width / 2;
      this.barBackground.x = game.width / 2 - this.barBackground.width / 2;
      this.bar.x = this.barBackground.x;
      this.percentage.x = game.width / 2;

      this.logo.scale.setTo(_viewportManager2.default.instance.zoomIn);
    }
  }, {
    key: 'createLoadingBar',
    value: function createLoadingBar() {
      // Variables
      this.barWidth = 330;
      this.height = 15;
      this.backgroundWidth = 330;
      this.backgroundHeight = 15;

      // Background
      this.barBackground = new _phaser.Phaser.Graphics(game);

      this.barBackground.beginFill(0x9c9c9c);
      this.barBackground.drawRect(0, 0, this.backgroundWidth, this.backgroundHeight);
      this.barBackground.endFill();
      this.barBackground.anchor.setTo(0.5, 0.5);

      this.barBackground.x = game.width / 2 - this.barBackground.width / 2;
      this.barBackground.y = game.height / 2 - this.backgroundHeight / 2 - 110;

      game.add.existing(this.barBackground);

      // Background
      this.bar = new _phaser.Phaser.Graphics(game);

      this.bar.beginFill(0xFFFFFF);

      this.bar.drawRect(0, 0, 1, this.height);
      this.bar.endFill();
      this.bar.anchor.setTo(0.5, 0.5);

      this.bar.position.setTo(this.barBackground.x, game.height / 2 - this.height / 2 - 110);

      game.add.existing(this.bar);

      // Percentage
      this.percentage = new _text2.default({
        position: new _phaser.Point(game.width / 2, game.height / 2 - 160),
        text: '0%',
        color: 'yellow'
      });

      game.add.existing(this.percentage);

      // Logo
      this.logo = new _image2.default({
        key: 'logo5',
        position: new _phaser.Point(game.width / 2, game.height / 4 + 50)
      });

      this.logo.alpha = 0.5;

      game.add.existing(this.logo);
    }
  }, {
    key: 'setLoadingProgress',
    value: function setLoadingProgress(progress) {
      this.bar.width = progress / 100 * this.barWidth;
      this.percentage.text = progress + '%';
    }
  }, {
    key: 'create',
    value: function create() {
      var _this4 = this;

      // Remove on file complete signal
      this.load.onFileComplete.removeAll();
      // Set texture priority
      // this[setTexturePriority]();

      this.game.clearBeforeRender = false;

      game.sound.setDecodedCallback(_soundManager2.default.instance.soundList, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var i, soundSetting;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _facebook2.default.instance.startGameAsync();

              case 2:

                game.onResizeChange.remove(_this4._onResize, _this4);

                for (i = 0; i < _this4._soundSettings.length; i++) {
                  soundSetting = _this4._soundSettings[i];

                  _soundManager2.default.instance.addSound(soundSetting.name, soundSetting.loop, soundSetting.allowMultiple);
                }

                window.game.state.start('Game', true, false);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4);
      })));
    }

    /**
     * All images will be added to the TexturePriority. This will lower the drawcalls. The keys in
     * the imageList will be used.
     */

  }, {
    key: setTexturePriority,
    value: function value() {
      this.game.renderer.setTexturePriority(this._imageKeys);
    }
  }]);

  return Boot;
}(_phaser.State);

exports.default = Boot;

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports = [{"path":"url(assets/init\\fonts\\blambot.ttf)","type":"font","name":"blambot"},{"path":"assets\\init\\images\\background0.png","type":"image","name":"background0"},{"path":"assets\\init\\images\\background1.png","type":"image","name":"background1"},{"path":"assets\\init\\images\\background2.png","type":"image","name":"background2"},{"path":"assets\\init\\images\\background3.png","type":"image","name":"background3"},{"path":"assets\\init\\images\\background_skin0.png","type":"image","name":"background_skin0"},{"path":"assets\\init\\images\\background_skin1.png","type":"image","name":"background_skin1"},{"path":"assets\\init\\images\\background_skin2.png","type":"image","name":"background_skin2"},{"path":"assets\\init\\images\\background_skin3.png","type":"image","name":"background_skin3"},{"path":"assets\\init\\images\\bg-framed.png","type":"image","name":"bg-framed"},{"path":"assets\\init\\images\\bluebutton.png","type":"image","name":"bluebutton"},{"path":"assets\\init\\images\\bound.png","type":"image","name":"bound"},{"path":"assets\\init\\images\\cart0.png","type":"image","name":"cart0"},{"path":"assets\\init\\images\\cart0b.png","type":"image","name":"cart0b"},{"path":"assets\\init\\images\\cart1.png","type":"image","name":"cart1"},{"path":"assets\\init\\images\\cart1b.png","type":"image","name":"cart1b"},{"path":"assets\\init\\images\\cart2.png","type":"image","name":"cart2"},{"path":"assets\\init\\images\\cart2b.png","type":"image","name":"cart2b"},{"path":"assets\\init\\images\\cart3.png","type":"image","name":"cart3"},{"path":"assets\\init\\images\\cart3b.png","type":"image","name":"cart3b"},{"path":"assets\\init\\images\\cart4.png","type":"image","name":"cart4"},{"path":"assets\\init\\images\\cart4b.png","type":"image","name":"cart4b"},{"path":"assets\\init\\images\\cart5.png","type":"image","name":"cart5"},{"path":"assets\\init\\images\\cart5b.png","type":"image","name":"cart5b"},{"path":"assets\\init\\images\\cart6.png","type":"image","name":"cart6"},{"path":"assets\\init\\images\\cart6b.png","type":"image","name":"cart6b"},{"path":"assets\\init\\images\\cart7.png","type":"image","name":"cart7"},{"path":"assets\\init\\images\\cart7b.png","type":"image","name":"cart7b"},{"path":"assets\\init\\images\\cart8.png","type":"image","name":"cart8"},{"path":"assets\\init\\images\\cart8b.png","type":"image","name":"cart8b"},{"path":"assets\\init\\images\\coin1.png","type":"image","name":"coin1"},{"path":"assets\\init\\images\\coinback.png","type":"image","name":"coinback"},{"path":"assets\\init\\images\\coinicon3.png","type":"image","name":"coinicon3"},{"path":"assets\\init\\images\\cup.png","type":"image","name":"cup"},{"path":"assets\\init\\images\\diamondback.png","type":"image","name":"diamondback"},{"path":"assets\\init\\images\\diamondicon3.png","type":"image","name":"diamondicon3"},{"path":"assets\\init\\images\\double_button.png","type":"image","name":"double_button"},{"path":"assets\\init\\images\\endcard3.png","type":"image","name":"endcard3"},{"path":"assets\\init\\images\\end_button.png","type":"image","name":"end_button"},{"path":"assets\\init\\images\\e_big_b.png","type":"image","name":"e_big_b"},{"path":"assets\\init\\images\\e_big_g.png","type":"image","name":"e_big_g"},{"path":"assets\\init\\images\\e_big_r.png","type":"image","name":"e_big_r"},{"path":"assets\\init\\images\\e_medium_b.png","type":"image","name":"e_medium_b"},{"path":"assets\\init\\images\\e_medium_g.png","type":"image","name":"e_medium_g"},{"path":"assets\\init\\images\\e_medium_r.png","type":"image","name":"e_medium_r"},{"path":"assets\\init\\images\\e_powerup_az.png","type":"image","name":"e_powerup_az"},{"path":"assets\\init\\images\\e_small_b.png","type":"image","name":"e_small_b"},{"path":"assets\\init\\images\\e_small_g.png","type":"image","name":"e_small_g"},{"path":"assets\\init\\images\\e_small_r.png","type":"image","name":"e_small_r"},{"path":"assets\\init\\images\\first_button.png","type":"image","name":"first_button"},{"path":"assets\\init\\images\\forlevel.png","type":"image","name":"forlevel"},{"path":"assets\\init\\images\\forlevel2.png","type":"image","name":"forlevel2"},{"path":"assets\\init\\images\\freeze.png","type":"image","name":"freeze"},{"path":"assets\\init\\images\\frontground0.png","type":"image","name":"frontground0"},{"path":"assets\\init\\images\\frontground1.png","type":"image","name":"frontground1"},{"path":"assets\\init\\images\\frontground2.png","type":"image","name":"frontground2"},{"path":"assets\\init\\images\\frontground3.png","type":"image","name":"frontground3"},{"path":"assets\\init\\images\\greenbutton.png","type":"image","name":"greenbutton"},{"path":"assets\\init\\images\\helper0.png","type":"image","name":"helper0"},{"path":"assets\\init\\images\\helper1.png","type":"image","name":"helper1"},{"path":"assets\\init\\images\\helper2.png","type":"image","name":"helper2"},{"path":"assets\\init\\images\\helper3.png","type":"image","name":"helper3"},{"path":"assets\\init\\images\\helper4.png","type":"image","name":"helper4"},{"path":"assets\\init\\images\\helper5.png","type":"image","name":"helper5"},{"path":"assets\\init\\images\\helper6.png","type":"image","name":"helper6"},{"path":"assets\\init\\images\\helper7.png","type":"image","name":"helper7"},{"path":"assets\\init\\images\\helper8.png","type":"image","name":"helper8"},{"path":"assets\\init\\images\\highlight_cart.png","type":"image","name":"highlight_cart"},{"path":"assets\\init\\images\\highlight_cave.png","type":"image","name":"highlight_cave"},{"path":"assets\\init\\images\\icon_ad.png","type":"image","name":"icon_ad"},{"path":"assets\\init\\images\\icon_arrow.png","type":"image","name":"icon_arrow"},{"path":"assets\\init\\images\\icon_backgrounds.png","type":"image","name":"icon_backgrounds"},{"path":"assets\\init\\images\\icon_carts.png","type":"image","name":"icon_carts"},{"path":"assets\\init\\images\\icon_coins.png","type":"image","name":"icon_coins"},{"path":"assets\\init\\images\\icon_damage.png","type":"image","name":"icon_damage"},{"path":"assets\\init\\images\\icon_firespeed.png","type":"image","name":"icon_firespeed"},{"path":"assets\\init\\images\\icon_restart.png","type":"image","name":"icon_restart"},{"path":"assets\\init\\images\\icon_vibration.png","type":"image","name":"icon_vibration"},{"path":"assets\\init\\images\\icon_vibration_off.png","type":"image","name":"icon_vibration_off"},{"path":"assets\\init\\images\\level.png","type":"image","name":"level"},{"path":"assets\\init\\images\\level2.png","type":"image","name":"level2"},{"path":"assets\\init\\images\\level3.png","type":"image","name":"level3"},{"path":"assets\\init\\images\\level_full.png","type":"image","name":"level_full"},{"path":"assets\\init\\images\\level_full2.png","type":"image","name":"level_full2"},{"path":"assets\\init\\images\\level_full3.png","type":"image","name":"level_full3"},{"path":"assets\\init\\images\\loader-bar.png","type":"image","name":"loader-bar"},{"path":"assets\\init\\images\\loader-bg.png","type":"image","name":"loader-bg"},{"path":"assets\\init\\images\\miner0fast.png","type":"image","name":"miner0fast"},{"path":"assets\\init\\images\\miner0idle.png","type":"image","name":"miner0idle"},{"path":"assets\\init\\images\\miner0throw.png","type":"image","name":"miner0throw"},{"path":"assets\\init\\images\\miner1fast.png","type":"image","name":"miner1fast"},{"path":"assets\\init\\images\\miner1idle.png","type":"image","name":"miner1idle"},{"path":"assets\\init\\images\\miner1throw.png","type":"image","name":"miner1throw"},{"path":"assets\\init\\images\\miner2fast.png","type":"image","name":"miner2fast"},{"path":"assets\\init\\images\\miner2idle.png","type":"image","name":"miner2idle"},{"path":"assets\\init\\images\\miner2throw.png","type":"image","name":"miner2throw"},{"path":"assets\\init\\images\\miner3fast.png","type":"image","name":"miner3fast"},{"path":"assets\\init\\images\\miner3idle.png","type":"image","name":"miner3idle"},{"path":"assets\\init\\images\\miner3throw.png","type":"image","name":"miner3throw"},{"path":"assets\\init\\images\\miner4fast.png","type":"image","name":"miner4fast"},{"path":"assets\\init\\images\\miner4idle.png","type":"image","name":"miner4idle"},{"path":"assets\\init\\images\\miner4throw.png","type":"image","name":"miner4throw"},{"path":"assets\\init\\images\\miner5fast.png","type":"image","name":"miner5fast"},{"path":"assets\\init\\images\\miner5idle.png","type":"image","name":"miner5idle"},{"path":"assets\\init\\images\\miner5throw.png","type":"image","name":"miner5throw"},{"path":"assets\\init\\images\\miner6fast.png","type":"image","name":"miner6fast"},{"path":"assets\\init\\images\\miner6idle.png","type":"image","name":"miner6idle"},{"path":"assets\\init\\images\\miner6throw.png","type":"image","name":"miner6throw"},{"path":"assets\\init\\images\\miner7fast.png","type":"image","name":"miner7fast"},{"path":"assets\\init\\images\\miner7idle.png","type":"image","name":"miner7idle"},{"path":"assets\\init\\images\\miner7throw.png","type":"image","name":"miner7throw"},{"path":"assets\\init\\images\\miner8fast.png","type":"image","name":"miner8fast"},{"path":"assets\\init\\images\\miner8idle.png","type":"image","name":"miner8idle"},{"path":"assets\\init\\images\\miner8throw.png","type":"image","name":"miner8throw"},{"path":"assets\\init\\images\\miner_happy.png","type":"image","name":"miner_happy"},{"path":"assets\\init\\images\\miner_sad.png","type":"image","name":"miner_sad"},{"path":"assets\\init\\images\\mushroom2.png","type":"image","name":"mushroom2"},{"path":"assets\\init\\images\\music_off.png","type":"image","name":"music_off"},{"path":"assets\\init\\images\\music_on.png","type":"image","name":"music_on"},{"path":"assets\\init\\images\\phaser-es6-webpack.jpg","type":"image","name":"phaser-es6-webpack"},{"path":"assets\\init\\images\\pickaxe0.png","type":"image","name":"pickaxe0"},{"path":"assets\\init\\images\\pickaxe1.png","type":"image","name":"pickaxe1"},{"path":"assets\\init\\images\\pickaxe2.png","type":"image","name":"pickaxe2"},{"path":"assets\\init\\images\\pickaxe3.png","type":"image","name":"pickaxe3"},{"path":"assets\\init\\images\\pickaxe4.png","type":"image","name":"pickaxe4"},{"path":"assets\\init\\images\\pickaxe5.png","type":"image","name":"pickaxe5"},{"path":"assets\\init\\images\\pickaxe6.png","type":"image","name":"pickaxe6"},{"path":"assets\\init\\images\\pickaxe7.png","type":"image","name":"pickaxe7"},{"path":"assets\\init\\images\\pickaxe8.png","type":"image","name":"pickaxe8"},{"path":"assets\\init\\images\\player_skin2.png","type":"image","name":"player_skin2"},{"path":"assets\\init\\images\\powerup_cracked.png","type":"image","name":"powerup_cracked"},{"path":"assets\\init\\images\\powerup_cracked2.png","type":"image","name":"powerup_cracked2"},{"path":"assets\\init\\images\\pt_blue.png","type":"image","name":"pt_blue"},{"path":"assets\\init\\images\\pt_green.png","type":"image","name":"pt_green"},{"path":"assets\\init\\images\\pt_powerup.png","type":"image","name":"pt_powerup"},{"path":"assets\\init\\images\\pt_red.png","type":"image","name":"pt_red"},{"path":"assets\\init\\images\\redbutton.png","type":"image","name":"redbutton"},{"path":"assets\\init\\images\\reset.png","type":"image","name":"reset"},{"path":"assets\\init\\images\\screen_setting.png","type":"image","name":"screen_setting"},{"path":"assets\\init\\images\\screen_setting2.png","type":"image","name":"screen_setting2"},{"path":"assets\\init\\images\\second_button.png","type":"image","name":"second_button"},{"path":"assets\\init\\images\\shield2.png","type":"image","name":"shield2"},{"path":"assets\\init\\images\\shop_coins.png","type":"image","name":"shop_coins"},{"path":"assets\\init\\images\\shop_coins_up.png","type":"image","name":"shop_coins_up"},{"path":"assets\\init\\images\\shop_speed.png","type":"image","name":"shop_speed"},{"path":"assets\\init\\images\\shop_speed_up.png","type":"image","name":"shop_speed_up"},{"path":"assets\\init\\images\\shop_stone.png","type":"image","name":"shop_stone"},{"path":"assets\\init\\images\\shop_strength.png","type":"image","name":"shop_strength"},{"path":"assets\\init\\images\\shop_strength_up2.png","type":"image","name":"shop_strength_up2"},{"path":"assets\\init\\images\\sides.png","type":"image","name":"sides"},{"path":"assets\\init\\images\\sides2.png","type":"image","name":"sides2"},{"path":"assets\\init\\images\\sound_of.png","type":"image","name":"sound_of"},{"path":"assets\\init\\images\\sound_on.png","type":"image","name":"sound_on"},{"path":"assets\\init\\images\\swipeha.png","type":"image","name":"swipeha"},{"path":"assets\\init\\images\\swipetxt.png","type":"image","name":"swipetxt"},{"path":"assets\\init\\images\\topground.png","type":"image","name":"topground"},{"path":"assets\\init\\images\\tuning.png","type":"image","name":"tuning"},{"path":"assets\\init\\images\\ui_background_shop_backgrounds22.png","type":"image","name":"ui_background_shop_backgrounds22"},{"path":"assets\\init\\images\\ui_background_shop_carts2.png","type":"image","name":"ui_background_shop_carts2"},{"path":"assets\\init\\images\\ui_back_icon.png","type":"image","name":"ui_back_icon"},{"path":"assets\\init\\images\\ui_icon_diamond.png","type":"image","name":"ui_icon_diamond"},{"path":"assets\\init\\images\\ui_pause_icon.png","type":"image","name":"ui_pause_icon"},{"path":"assets\\init\\images\\ui_strange.png","type":"image","name":"ui_strange"},{"path":"assets\\init\\images\\up_coin.png","type":"image","name":"up_coin"},{"path":"assets\\init\\images\\up_fire.png","type":"image","name":"up_fire"},{"path":"assets\\init\\images\\up_freeze.png","type":"image","name":"up_freeze"},{"path":"assets\\init\\images\\up_helper.png","type":"image","name":"up_helper"},{"path":"assets\\init\\images\\up_shield.png","type":"image","name":"up_shield"},{"path":"assets\\init\\images\\win_button.png","type":"image","name":"win_button"},{"path":["assets\\init\\sound\\10.m4a","assets\\init\\sound\\10.mp3","assets\\init\\sound\\10.ogg"],"type":"audio","name":"10","bgm":false},{"path":["assets\\init\\sound\\10.m4a","assets\\init\\sound\\10.mp3","assets\\init\\sound\\10.ogg"],"type":"audio","name":"10","bgm":false},{"path":["assets\\init\\sound\\10.m4a","assets\\init\\sound\\10.mp3","assets\\init\\sound\\10.ogg"],"type":"audio","name":"10","bgm":false},{"path":["assets\\init\\sound\\buy.m4a","assets\\init\\sound\\buy.mp3","assets\\init\\sound\\buy.ogg"],"type":"audio","name":"buy","bgm":false},{"path":["assets\\init\\sound\\buy.m4a","assets\\init\\sound\\buy.mp3","assets\\init\\sound\\buy.ogg"],"type":"audio","name":"buy","bgm":false},{"path":["assets\\init\\sound\\buy.m4a","assets\\init\\sound\\buy.mp3","assets\\init\\sound\\buy.ogg"],"type":"audio","name":"buy","bgm":false},{"path":["assets\\init\\sound\\collect_coin.m4a","assets\\init\\sound\\collect_coin.mp3","assets\\init\\sound\\collect_coin.ogg"],"type":"audio","name":"collect_coin","bgm":false},{"path":["assets\\init\\sound\\collect_coin.m4a","assets\\init\\sound\\collect_coin.mp3","assets\\init\\sound\\collect_coin.ogg"],"type":"audio","name":"collect_coin","bgm":false},{"path":["assets\\init\\sound\\collect_coin.m4a","assets\\init\\sound\\collect_coin.mp3","assets\\init\\sound\\collect_coin.ogg"],"type":"audio","name":"collect_coin","bgm":false},{"path":["assets\\init\\sound\\gameover.m4a","assets\\init\\sound\\gameover.mp3","assets\\init\\sound\\gameover.ogg"],"type":"audio","name":"gameover","bgm":false},{"path":["assets\\init\\sound\\gameover.m4a","assets\\init\\sound\\gameover.mp3","assets\\init\\sound\\gameover.ogg"],"type":"audio","name":"gameover","bgm":false},{"path":["assets\\init\\sound\\gameover.m4a","assets\\init\\sound\\gameover.mp3","assets\\init\\sound\\gameover.ogg"],"type":"audio","name":"gameover","bgm":false},{"path":["assets\\init\\sound\\level_complete.m4a","assets\\init\\sound\\level_complete.mp3","assets\\init\\sound\\level_complete.ogg"],"type":"audio","name":"level_complete","bgm":false},{"path":["assets\\init\\sound\\level_complete.m4a","assets\\init\\sound\\level_complete.mp3","assets\\init\\sound\\level_complete.ogg"],"type":"audio","name":"level_complete","bgm":false},{"path":["assets\\init\\sound\\level_complete.m4a","assets\\init\\sound\\level_complete.mp3","assets\\init\\sound\\level_complete.ogg"],"type":"audio","name":"level_complete","bgm":false},{"path":["assets\\init\\sound\\main_theme1.m4a","assets\\init\\sound\\main_theme1.mp3","assets\\init\\sound\\main_theme1.ogg"],"type":"audio","name":"main_theme1","bgm":false},{"path":["assets\\init\\sound\\main_theme1.m4a","assets\\init\\sound\\main_theme1.mp3","assets\\init\\sound\\main_theme1.ogg"],"type":"audio","name":"main_theme1","bgm":false},{"path":["assets\\init\\sound\\main_theme1.m4a","assets\\init\\sound\\main_theme1.mp3","assets\\init\\sound\\main_theme1.ogg"],"type":"audio","name":"main_theme1","bgm":false},{"path":["assets\\init\\sound\\pressak.m4a","assets\\init\\sound\\pressak.mp3","assets\\init\\sound\\pressak.ogg"],"type":"audio","name":"pressak","bgm":false},{"path":["assets\\init\\sound\\pressak.m4a","assets\\init\\sound\\pressak.mp3","assets\\init\\sound\\pressak.ogg"],"type":"audio","name":"pressak","bgm":false},{"path":["assets\\init\\sound\\pressak.m4a","assets\\init\\sound\\pressak.mp3","assets\\init\\sound\\pressak.ogg"],"type":"audio","name":"pressak","bgm":false},{"path":["assets\\init\\sound\\stone_bounce.m4a","assets\\init\\sound\\stone_bounce.mp3","assets\\init\\sound\\stone_bounce.ogg"],"type":"audio","name":"stone_bounce","bgm":false},{"path":["assets\\init\\sound\\stone_bounce.m4a","assets\\init\\sound\\stone_bounce.mp3","assets\\init\\sound\\stone_bounce.ogg"],"type":"audio","name":"stone_bounce","bgm":false},{"path":["assets\\init\\sound\\stone_bounce.m4a","assets\\init\\sound\\stone_bounce.mp3","assets\\init\\sound\\stone_bounce.ogg"],"type":"audio","name":"stone_bounce","bgm":false},{"path":["assets\\init\\sound\\throw.m4a","assets\\init\\sound\\throw.mp3","assets\\init\\sound\\throw.ogg"],"type":"audio","name":"throw","bgm":false},{"path":["assets\\init\\sound\\throw.m4a","assets\\init\\sound\\throw.mp3","assets\\init\\sound\\throw.ogg"],"type":"audio","name":"throw","bgm":false},{"path":["assets\\init\\sound\\throw.m4a","assets\\init\\sound\\throw.mp3","assets\\init\\sound\\throw.ogg"],"type":"audio","name":"throw","bgm":false},{"path":["assets\\init\\sound\\up_appear.m4a","assets\\init\\sound\\up_appear.mp3","assets\\init\\sound\\up_appear.ogg"],"type":"audio","name":"up_appear","bgm":false},{"path":["assets\\init\\sound\\up_appear.m4a","assets\\init\\sound\\up_appear.mp3","assets\\init\\sound\\up_appear.ogg"],"type":"audio","name":"up_appear","bgm":false},{"path":["assets\\init\\sound\\up_appear.m4a","assets\\init\\sound\\up_appear.mp3","assets\\init\\sound\\up_appear.ogg"],"type":"audio","name":"up_appear","bgm":false},{"path":["assets\\init\\sound\\up_collect.m4a","assets\\init\\sound\\up_collect.mp3","assets\\init\\sound\\up_collect.ogg"],"type":"audio","name":"up_collect","bgm":false},{"path":["assets\\init\\sound\\up_collect.m4a","assets\\init\\sound\\up_collect.mp3","assets\\init\\sound\\up_collect.ogg"],"type":"audio","name":"up_collect","bgm":false},{"path":["assets\\init\\sound\\up_collect.m4a","assets\\init\\sound\\up_collect.mp3","assets\\init\\sound\\up_collect.ogg"],"type":"audio","name":"up_collect","bgm":false}]

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Singleton2 = __webpack_require__(105);

var _Singleton3 = _interopRequireDefault(_Singleton2);

var _orientation = __webpack_require__(106);

var _orientation2 = _interopRequireDefault(_orientation);

var _utils = __webpack_require__(76);

var _famobiApi = __webpack_require__(46);

var _famobiApi2 = _interopRequireDefault(_famobiApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewportManager = function (_Singleton) {
  _inherits(ViewportManager, _Singleton);

  function ViewportManager() {
    _classCallCheck(this, ViewportManager);

    return _possibleConstructorReturn(this, (ViewportManager.__proto__ || Object.getPrototypeOf(ViewportManager)).apply(this, arguments));
  }

  _createClass(ViewportManager, [{
    key: 'initialize',
    value: function initialize() {
      // FamobiAPI.instance.setOnOrientationChange(() => {
      //   this.onSizeChange();
      // })
      this.zoomIn = 1;
      game.scale.setResizeCallback(this.onResize, this);

      game.onResizeChange = new Phaser.Signal();
    }
  }, {
    key: 'onSizeChange',
    value: function onSizeChange() {
      this.resizeGame();
      game.state.resize(this.gameWidth, this.gameHeight);
    }
  }, {
    key: 'resizeGame',
    value: function resizeGame() {
      var _window = window,
          innerWidth = _window.innerWidth;
      var _window2 = window,
          innerHeight = _window2.innerHeight;


      this.gameHeight = _orientation2.default.BASE_GAME_HEIGHT;
      var scale = innerWidth / innerHeight;
      this.prevWindowWidth = innerWidth;
      this.prevWindowHeight = innerHeight;
      this.gameWidth = (0, _utils.clamp)(this.gameHeight * scale, _orientation2.default.MIN_GAME_WIDTH, _orientation2.default.MAX_GAME_WIDTH);

      this.zoomIn = 1;

      if (this.gameWidth > _orientation2.default.GAME_WIDTH_START_ZOOM) {
        this.zoomIn = 1 - (this.gameWidth - _orientation2.default.GAME_WIDTH_START_ZOOM) / (_orientation2.default.MAX_GAME_WIDTH - _orientation2.default.GAME_WIDTH_START_ZOOM) * _orientation2.default.MAX_ZOOM_IN;
      }

      // this.zoomIn = 0.4;
      game.scale.setGameSize(this.gameWidth * this.zoomIn, this.gameHeight * this.zoomIn);
      game.onResizeChange.dispatch();

      if (game.player) {
        game.camera.reset();
        game.camera.bounds.setTo(-game.world.centerX, undefined, game.world.width);

        game.camera.follow(game.player.cameraFocusPoint, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
      }
      // console.log('высота='+this.gameHeight);
      // console.log('ширина='+this.gameWidth);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      var _window3 = window,
          innerWidth = _window3.innerWidth;
      var _window4 = window,
          innerHeight = _window4.innerHeight;

      this.prevWindowWidth === innerWidth && this.prevWindowHeight === innerHeight || this.onSizeChange();
      var _game = game,
          canvas = _game.canvas;

      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
    }
  }]);

  return ViewportManager;
}(_Singleton3.default);

exports.default = ViewportManager;

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports = {"game":"crazy-caves","preferredUid":null,"clientVersion":1,"enableLog":false,"trackAds":true}

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _facebook = __webpack_require__(52);

var _facebook2 = _interopRequireDefault(_facebook);

var _localisationManager = __webpack_require__(107);

var _localisationManager2 = _interopRequireDefault(_localisationManager);

var _signalManager = __webpack_require__(61);

var _signalManager2 = _interopRequireDefault(_signalManager);

var _objectPool = __webpack_require__(150);

var _objectPool2 = _interopRequireDefault(_objectPool);

var _game_ui = __webpack_require__(372);

var _game_ui2 = _interopRequireDefault(_game_ui);

var _image = __webpack_require__(53);

var _image2 = _interopRequireDefault(_image);

var _sprite = __webpack_require__(47);

var _sprite2 = _interopRequireDefault(_sprite);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

var _squareMask = __webpack_require__(153);

var _squareMask2 = _interopRequireDefault(_squareMask);

var _scrollView = __webpack_require__(154);

var _scrollView2 = _interopRequireDefault(_scrollView);

var _vector = __webpack_require__(155);

var _vector2 = _interopRequireDefault(_vector);

var _customImageGenerator = __webpack_require__(375);

var _customImageGenerator2 = _interopRequireDefault(_customImageGenerator);

var _button = __webpack_require__(156);

var _button2 = _interopRequireDefault(_button);

var _gameManager = __webpack_require__(377);

var _gameManager2 = _interopRequireDefault(_gameManager);

var _ball = __webpack_require__(379);

var _ball2 = _interopRequireDefault(_ball);

var _background = __webpack_require__(158);

var _background2 = _interopRequireDefault(_background);

var _stateManager = __webpack_require__(157);

var StateManager = _interopRequireWildcard(_stateManager);

var _sprite3 = __webpack_require__(381);

var _sprite4 = _interopRequireDefault(_sprite3);

var _orientation = __webpack_require__(106);

var _orientation2 = _interopRequireDefault(_orientation);

var _viewportManager = __webpack_require__(382);

var _viewportManager2 = _interopRequireDefault(_viewportManager);

var _Signals = __webpack_require__(383);

var _Signals2 = _interopRequireDefault(_Signals);

var _soundManager = __webpack_require__(104);

var _soundManager2 = _interopRequireDefault(_soundManager);

var _nineSlice = __webpack_require__(147);

var _nineSlice2 = _interopRequireDefault(_nineSlice);

var _vibroManager = __webpack_require__(384);

var _vibroManager2 = _interopRequireDefault(_vibroManager);

var _famobiApi = __webpack_require__(46);

var _famobiApi2 = _interopRequireDefault(_famobiApi);

var _statistics = __webpack_require__(148);

var _statistics2 = _interopRequireDefault(_statistics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onInputMove = Symbol('onInputMove');
var onInputDown = Symbol('onInputDown');
var onInputUp = Symbol('onInputUp');

var clamp = Symbol('clamp');

var _class = function (_State) {
  _inherits(_class, _State);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      this.game.input.maxPointers = 2;

      _soundManager2.default.instance.playSound('main_theme1', 1, true, this.noise);

      this.minScale = _orientation2.default.MIN_GAME_WIDTH / _orientation2.default.BASE_GAME_HEIGHT;
      this.maxScale = _orientation2.default.MAX_GAME_WIDTH / _orientation2.default.BASE_GAME_HEIGHT;

      this.prevWindowWidth = 0;
      this.prevWindowHeight = 0;

      this.game.renderer.renderSession.roundPixels = true;
    }
  }, {
    key: 'preload',
    value: function preload() {
      _Signals2.default.addSignals();
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      game.onPause.add(this.movka, this);
      game.onResume.add(this.movka2, this);
      game.onResizeChange.add(function () {
        _this2.resize();
      });

      game.time.slowMotion = 1.1;

      this.offsetForBallPhysics = 0;

      this.megaScale = 1;
      this.scaleEndcard = 1;

      this.scaleBallPhysicsRadius = 1;
      // Conditions of upgrade
      this.tutorialDown = false;
      this.kindOfBullet = 0;
      this.flyUp = false;
      this.fireUp = false;
      this.freezeNew = false;
      this.freeze = false;
      this.ballUnderFreeze = false;
      this.shield = false;
      this.coinRainVariable = false;
      this.helper = false;
      this.timeForUp = -1;
      this.upgradeIs = false;
      this.forEndBullet = 0;
      this.stop = true;
      this.forDeleteBalls = true;
      this.routingSuperStartButton = 'logo';
      this.tweenHelperYes = false;
      this.rowBullets = 0;
      this.levelComplete = false;
      this.matrixBullet = [];
      for (var j = 0; j < 20; j += 1) {
        this.matrixBullet[j] = 1;
      }
      this.coinProbabilityMatrix = [[], [0, 1], [0.2, 1], [0.1, 0.4, 1], [0.05, 0.25, 0.5, 1], [0.08, 0.2, 0.35, 0.55, 1]];

      this.valueCarts = [0, 50, 50, 75, 100, 100, 125, 125, 150];

      this.exclaimMatrix = window.famobi.__("exclaimMatrix");

      this.exclaimColor = ['aqua', 'fuchsia', 'lime', 'red', 'white', 'yellow'];

      this.slowMoTime = 0;
      this.shopPressed = 0;
      this.stopShops = false;

      this.poly = new _phaser.Polygon();

      this.poly.setTo([new _phaser.Point(200, 100), new _phaser.Point(350, 100), new _phaser.Point(375, 200), new _phaser.Point(150, 200)]);

      this.shopSkinMatrix = [[true, false, false, false, 0], [true, false, false, false, false, false, false, false, false, 0]];

      this.level = 1;
      this.bulletBornTime = 0.25; // the time for create new bullet

      if (_famobiApi2.default.instance.getLocalStorageItem('level')) {
        if (_famobiApi2.default.instance.getLocalStorageItem('tutorial') * 1 === 1) this.tutorialDown = true;
        this.vibro = false;
        if (_famobiApi2.default.instance.getLocalStorageItem('vibro') * 1 === 1) this.vibro = true;
        this.shopSkinMatrix[0][4] = _famobiApi2.default.instance.getLocalStorageItem('backIs') * 1;
        this.shopSkinMatrix[1][9] = _famobiApi2.default.instance.getLocalStorageItem('cart19') * 1;
        this.level = _famobiApi2.default.instance.getLocalStorageItem('level') * 1;
        this.kindOfBullet = _famobiApi2.default.instance.getLocalStorageItem('kindOfBullet') * 1;
        this.ballsOnLevel = this.level + 12;
        this.ballBornTime = 10 - this.level * 0.47;
        if (this.ballBornTime < 3) this.ballBornTime = 3;
        this.coinMulti = _famobiApi2.default.instance.getLocalStorageItem('coinMulti') * 1;
        this.coin_stone3TextValue = _famobiApi2.default.instance.getLocalStorageItem('coinMultiPrice') * 1;
        this.damage_stone2TextValue = _famobiApi2.default.instance.getLocalStorageItem('damagePrice') * 1;
        this.speed_stone1TextValue = _famobiApi2.default.instance.getLocalStorageItem('speedPrice') * 1;
        this.score = _famobiApi2.default.instance.getLocalStorageItem('score') * 1;
        this.coins = _famobiApi2.default.instance.getLocalStorageItem('coins') * 1;
        this.diamonds = _famobiApi2.default.instance.getLocalStorageItem('diamonds') * 1;
        this.maxLivesOnLevel = 10 + this.level * 2;
        this.damage = _famobiApi2.default.instance.getLocalStorageItem('damage') * 1;
        this.bulletsPerSec = _famobiApi2.default.instance.getLocalStorageItem('bulletsPerSec') * 1;
        this.createBulletMatrix(this.bulletsPerSec);
      } else {
        this.vibro = true;
        this.shopSkinMatrix[0][4] = 0;
        this.ballsOnLevel = 12;
        this.ballBornTime = 10; // the time for create new ball
        this.coinMulti = 1;
        this.score = 0;
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: this.score});
        this.coins = 0;
        this.diamonds = 0;
        this.maxLivesOnLevel = 10;
        this.damage = 1;
        this.bulletsPerSec = 4;
        this.coin_stone3TextValue = 100;
        this.damage_stone2TextValue = 50;
        this.speed_stone1TextValue = 3;
        this.createBulletMatrix(this.bulletsPerSec);
      }

      this.createBackground(this.shopSkinMatrix[0][4]);

      this.prevScore = this.score;
      this.prevCoins = this.coins;
      this.prevDiamonds = this.diamonds;

      this.timeFor = 0;

      this.noise = true;

      this.prevTimeBullet = 0; // service for watсhing bullet
      this.prevTimeBall = 0; // service for watching ball

      this.ballsOnLevelNow = 0;

      this.tempAll = false;

      this.isPlayerFire = false;

      this.ballsKilled = 0;

      this.createPlayer(_famobiApi2.default.instance.getLocalStorageItem('player_skin'));
      this.checkPlayerSkin();
      this.checkBackground();

      this.deleteGroup = this.game.add.group();
      this.groupBase = this.game.add.group();
      this.bounds = this.game.add.group();
      this.bounds2 = this.game.add.group();
      this.coinGroup = this.game.add.group();
      this.diamondGroup = this.game.add.group();
      this.group = this.game.add.group();
      this.groupBase2 = this.game.add.group();
      this.groupBase3 = this.game.add.group();
      this.bullets = this.game.add.group();
      this.balls = this.game.add.group();
      this.upgradeSmallGroup = this.game.add.group();
      this.group.add(this.bounds);
      this.group.add(this.coinGroup);
      this.group.add(this.diamondGroup);
      this.group.add(this.upgradeSmallGroup);
      this.specGroupForResizeCoin = this.game.add.group();
      this.specGroupForResizeDiamond = this.game.add.group();
      this.shopGroupForResize = this.game.add.group();
      this.confettiGroup = this.game.add.group();

      this.bottomBounds = new _sprite2.default({
        key: 'loader-bar',
        position: { x: 0, y: -20 },
        anchorX: 0.5,
        anchorY: 0,
        scale: { x: 20, y: 4 }
      }, this);
      this.game.physics.arcade.enableBody(this.bottomBounds);
      this.bottomBounds.body.bounce.set(0, 0);
      this.bottomBounds.alpha = 0;
      this.bounds.add(this.bottomBounds);

      this.groupBase.add(this.background);
      this.groupBase.add(this.frontground);

      this.group.add(this.player0);
      this.group.add(this.bullets);
      this.group.add(this.balls);
      this.groupBase3.add(this.topground);
      this.ui = new _game_ui2.default(this.game);

      this.createLevelBar();
      this.createLogoLevelBar();

      var leftKey = game.input.keyboard.addKey(Phaser.KeyCode.LEFT);
      var rightKey = game.input.keyboard.addKey(Phaser.KeyCode.RIGHT);
      var upKey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
      var spaceKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

      this.leftKeyPressed = 0;
      this.rightKeyPressed = 0;
      this.upKeyPressed = false;
      this.spaceKeyPressed = false;

      upKey.onDown.add(function () {
        _this2.upKeyPressed = true;
      });
      upKey.onUp.add(function () {
        _this2.upKeyPressed = false;
      });

      spaceKey.onDown.add(function () {
        _this2.spaceKeyPressed = true;
      });
      spaceKey.onUp.add(function () {
        _this2.spaceKeyPressed = false;
      });

      leftKey.onDown.add(function () {
        if (_this2.rightKeyPressed === 0) {
          _this2.leftKeyPressed = 1;
        } else {
          _this2.leftKeyPressed = 2;
        }
      });
      leftKey.onUp.add(function () {
        _this2.leftKeyPressed = 0;
        if (_this2.rightKeyPressed === 2) {
          _this2.rightKeyPressed = 1;
        }
      });

      rightKey.onDown.add(function () {
        if (_this2.leftKeyPressed === 0) {
          _this2.rightKeyPressed = 1;
        } else {
          _this2.rightKeyPressed = 2;
        }
      });
      rightKey.onUp.add(function () {
        _this2.rightKeyPressed = 0;
        if (_this2.leftKeyPressed === 2) {
          _this2.leftKeyPressed = 1;
        }
      });

      _signalManager2.default.instance.add('gameManager:updateScore', function (value) {
        // console.log('New score:', value);
      }, this);
      _gameManager2.default.instance.enable();
      _gameManager2.default.instance.addScore(10);
      _gameManager2.default.instance.addScore(10);

      this.groupBase2.add(this.background3);
      this.groupBase2.add(this.background4);
      this.groupBase3.add(this.bounds2);
      this.createSuperStartButton();
      this.createTuning();
      this.createShopUpgrades();
      this.createCoinbase();
      this.createDiamondbase();
      this.checkStoneAlpha();
      this.groupUpgrades.visible = true;

      this.firstLayer = game.add.group();
      this.secondLayer = game.add.group();
      this.thirdLayer = game.add.group();

      this.createSideBounds();
      this.createShopGroup();
      this.createFreezeOverlay();
      this.shopGroup.visible = true;
      this.resize();
      this.logoStart();
      window.famobi.gameReady();
    }
  }, {
    key: 'movka',
    value: function movka() {
      this.prevStop = this.stop;

      if (!this.stop) {
        this.onPauseButtonClick();
      }
      this.stop = true;
    }
  }, {
    key: 'movka2',
    value: function movka2() {
      // this.stop = this.prevStop;
    }
  }, {
    key: 'checkPlayerSkin',
    value: function checkPlayerSkin() {
      for (var i = 1; i < 9; i += 1) {
        if (_famobiApi2.default.instance.getLocalStorageItem('cart' + i) == '1') this.shopSkinMatrix[1][i] = true;
      }
    }
  }, {
    key: 'checkBackground',
    value: function checkBackground() {
      for (var i = 1; i < 4; i += 1) {
        if (_famobiApi2.default.instance.getLocalStorageItem('back' + i) == '1') this.shopSkinMatrix[0][i] = true;
      }
    }
  }, {
    key: 'createPlayer',
    value: function createPlayer() {
      var cart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cart0';

      if (!cart) cart = 'cart0';

      var number = cart[4] * 1;

      this.player0 = new _sprite2.default({
        key: 'cart' + number,
        position: { x: 0, y: 0 },
        anchor: { x: 0.5, y: 0.865 },
        anchorX: 0.5,
        anchorY: 1,
        scale: { x: 0.8, y: 0.8 }
      });
      this.player0.died = false;

      this.playerArray = [[-108, -80, -86, 0, -100, -152], [-120, -92, -98, 0, -85, -152], [-126, -94, -100, 0, -85, -172], [-92, -64, -71, 18, -96, -172], [-124, -95, -101, 5, -100, -170], [-128, -95, -101, -2, -90, -147], [-110, -78, -85, -16, -98, -170], [-128, -95, -101, 0, -100, -160], [-112, -80, -89, -2, -112, -160]];

      this.playerAdd = new _sprite2.default({
        key: 'helper' + number,
        position: { x: this.playerArray[number][4], y: this.playerArray[number][5] },
        anchor: { x: 1, y: 0 },
        anchorX: 0.5,
        anchorY: 0.5,
        scale: { x: 0.8, y: 0.8 }
      });
      this.playerAdd.visible = false;

      this.player = new _sprite2.default({
        key: 'miner' + cart[4] + 'idle',
        position: {
          x: this.playerArray[number][3],
          y: this.playerArray[number][0]
        },
        anchor: { x: 0.5, y: 1 },
        anchorX: 0.5,
        anchorY: 1,
        scale: { x: 1, y: 1 }
      });
      this.player.number = cart[4] * 1;
      this.player0.addChild(this.player);
      this.player0.addChild(this.playerAdd);

      this.player.animations.add('goon');

      this.player.play('goon', 10, true);
      this.game.physics.arcade.enableBody(this.player0);
      this.player0.body.setCircle(100 * 0.75 * 0.95);
      this.player0.body.bounce.set(1, 0);
    }
  }, {
    key: 'createBackground',
    value: function createBackground() {
      var numberTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.background = new _sprite2.default({
        key: 'background' + numberTheme,
        position: { x: game.width / 2, y: 0 },
        anchor: { x: 0.5, y: 0 },
        scale: { x: 1, y: 1 }
      });

      this.frontground = new _sprite2.default({
        key: 'frontground' + numberTheme,
        position: { x: game.width / 2, y: game.height },
        anchor: { x: 0.5, y: 1 },
        scale: { x: 1, y: 1 }
      });

      this.topground = new _sprite2.default({
        key: 'topground', // visible = false;
        position: { x: game.width / 2, y: 0 },
        anchor: { x: 0.5, y: 0 },
        scale: { x: 1, y: 1 }
      });

      this.background3 = new _sprite2.default({
        key: 'sides',
        anchor: { x: 0, y: 0.5 },
        scale: { x: -1, y: 1 }
      });

      this.background4 = new _sprite2.default({
        key: 'sides',
        anchor: { x: 0, y: 0.5 },
        scale: { x: 1, y: 1 }
      });
    }
  }, {
    key: 'logoStart',
    value: function logoStart() {
      this.forlevelBegin.visible = true;
      this.levelBar.visible = false;

      this.checkStoneAlpha();
      this.groupUpgrades.visible = true;

      this.pauseButton.visible = false;

      this.createLogo();

      this.repositionLogo();

      this.logoTweenFunction();

      if (!this.swipeHand) {
        this.swipeHand = new _sprite2.default({
          key: 'swipeha',
          position: { x: this.speedButtonHead.x, y: this.speedButtonHead.y },
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: 0.5, y: 0.5 }
        });
        this.swipeHand.visible = false;

        var swipeTwen = game.add.tween(this.swipeHand.scale).to({ x: 0.45, y: 0.45 }, 200).to({ x: 0.5, y: 0.5 }, 200).loop();

        swipeTwen.start();

        this.groupUpgrades.addChild(this.swipeHand);
      }
    }
  }, {
    key: 'createLogo',
    value: function createLogo() {
      if (!this.logo) {
        this.logo = new _sprite2.default({
          key: 'logo5',
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: 0, y: 0 }
        });

        this.logoScore = new _sprite2.default({
          key: 'cup',
          position: { x: -100, y: 150 },
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: 1, y: 1 }
        });

        this.logo.addChild(this.logoScore);

        this.logoScoreText = new _text2.default({
          text: this.rounder(this.score),
          position: { x: 130, y: -10 },
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: 1, y: 1 },
          fontSize: 60,
          fontName: 'blambot',
          color: '#FFFFFF'
        });

        this.logoScore.addChild(this.logoScoreText);

        this.firstLayer.addChild(this.logo);
        this.firstLayer.addChild(this.tuningGroup);
      }

      this.brandingButton = new _button2.default({
        key: 'brandingButtonImage',
        position: new _phaser.Point(0, 250),
        anchor: new _phaser.Point(0.5, 0.5),
        scale: new _phaser.Point(0.4, 0.4)
      });

      this.brandingButton.doOnClick = function () {
        _famobiApi2.default.instance.openBrandingLink();
      };

      this.logo.addChild(this.brandingButton);
    }
  }, {
    key: 'repositionLogo',
    value: function repositionLogo() {
      var begin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.scaleLogo = 0.7 * game.width / 1255 * 2.2;
      if (game.width > game.height) this.scaleLogo = 0.85 * this.group.scale.x * 2.2;

      if (this.logo) {
        this.logoScore.y = 150;
        this.logoScore.x = -100;
        this.logoScore.scale.x = 1;
        this.logoScore.scale.y = 1;
        if (game.height > game.width || game.device.desktop) {
          this.scaleLogo = 1.15 - 0.2 * (game.height - game.width) / game.height;
          if (game.height / game.width > 2.28) {
            this.scaleLogo = 1.15 - 0.4 * (game.height - game.width) / game.height;
          }
          this.logo.x = game.width / 2;
          this.logo.y = game.height * 0.2;
          if (game.device.desktop) this.scaleLogo *= 0.5;
          this.logo.scale.x = this.scaleLogo;
          this.logo.scale.y = this.scaleLogo;
        } else {
          this.scaleLogo = 1;
          this.logo.x = game.width / 2;
          this.logo.y = game.height * 0.2 + 0.5 * (game.width - game.height) / game.width;
          this.logo.scale.x = this.scaleLogo;
          this.logo.scale.y = this.scaleLogo;
          this.brandingButton.x = 0;
          this.brandingButton.y = 250;
          if (game.width / game.height > 1.4) {
            this.scaleLogo = 0.65 * this.background4.scale.x;
            this.logo.scale.x = this.scaleLogo;
            this.logo.scale.y = this.scaleLogo;
            this.logo.x = this.background3.x - this.logo.texture.width * this.scaleLogo / 2;
            this.logo.y = this.player0.y + this.group.y;

            this.brandingButton.x = 0;
            this.brandingButton.y = -200;

            if (game.width / game.height > 2.19) {
              this.logoScore.y = -170;
              this.brandingButton.y = -300;
            }
          }
        }
      }
    }
  }, {
    key: 'logoTweenFunction',
    value: function logoTweenFunction() {
      var _this3 = this;

      // создает твин на скейл лога
      game.tweens.removeFrom(this.logo.scale);

      var logoTween = game.add.tween(this.logo.scale).to({ x: this.scaleLogo, y: this.scaleLogo }, 300, Phaser.Easing.Quadratic.Out, false);

      logoTween.start();
      logoTween.onComplete.add(function () {
        _this3.tweenFinger();
        _this3.routingSuperStartButton = 'logo1';
      });
    }
  }, {
    key: 'tweenFinger',
    value: function tweenFinger() {
      this.touchForShut = new _sprite2.default({
        key: 'swipeha',
        position: { x: game.width / 2, y: game.height / 2 },
        anchor: { x: 0.5, y: 0 },
        scale: { x: 0.5, y: 0.5 }
      });

      this.firstLayer.addChild(this.touchForShut);

      var tutorial1 = game.add.tween(this.touchForShut.scale).to({ x: 0.4, y: 0.4 }, 50).to({ x: 0.5, y: 0.5 }, 50).to({ x: 0.4, y: 0.4 }, 50, Phaser.Easing.Quadratic.Out, false);

      var tutorial2 = game.add.tween(this.touchForShut).to({ x: game.width / 2 + 200 }, 1200, Phaser.Easing.Quadratic.Out, false);

      var tutorial3 = game.add.tween(this.touchForShut.scale).to({ x: 0.4, y: 0.4 }, 50).to({ x: 0.5, y: 0.5 }, 50).to({ x: 0.4, y: 0.4 }, 50, Phaser.Easing.Quadratic.Out, false);

      var tutorial4 = game.add.tween(this.touchForShut).to({ x: game.width / 2 - 200 }, 2400, Phaser.Easing.Quadratic.Out, false);

      tutorial1.onComplete.add(function () {
        tutorial2.start();
      });

      tutorial2.onComplete.add(function () {
        tutorial3.start();
      });

      tutorial3.onComplete.add(function () {
        tutorial4.start();
      });

      tutorial4.onComplete.add(function () {
        tutorial1.start();
      });

      tutorial1.start();
    }
  }, {
    key: 'tweenFingerOff',
    value: function tweenFingerOff() {
      if (!this.touchForShut) return;
      game.tweens.removeFrom(this.touchForShut);
      this.firstLayer.removeChild(this.touchForShut);
      this.touchForShut.kill();
    }
  }, {
    key: 'logoStop',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.forlevelBegin.visible = false;
                this.levelBar.visible = true;
                this.tuningButton.visible = false;
                this.screen_button.visible = false;
                this.pauseButton.visible = true;

                this.createBulletMatrix(this.bulletsPerSec);
                this.logo.visible = false;
                if (this.bulletsPerSec === 4 && this.damage === 1 && this.coinMulti === 1) {
                  if (this.coins > 2) {
                    this.swipeHand.visible = true;
                    this.groupUpgrades.add(this.swipeHand);
                    this.swipeHand.x = this.speedButtonHead.x;
                    this.swipeHand.y = this.speedButtonHead.y;
                    this.swipeHand.scale.x = 0.5;
                    this.swipeHand.scale.y = 0.5;
                  }
                } else {
                  this.groupUpgrades.removeChild(this.swipeHand);
                  this.swipeHand.kill();
                }

                this.routingSuperStartButton = 'within';
                this.pauseButton.visible = true;
                this.groupUpgrades.visible = false;
                this.shopGroup.visible = false;
                this.tweenFingerOff();

                _context.next = 15;
                return _famobiApi2.default.instance.onLevelStart(this.level);

              case 15:
                this.stop = false;
                // this.resize();

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logoStop() {
        return _ref.apply(this, arguments);
      }

      return logoStop;
    }()
  }, {
    key: 'createCoinbase',
    value: function createCoinbase() {
      this.coinBase = new _text2.default({
        text: Math.ceil(this.coins),
        position: { x: -100, y: 0 },
        anchor: { x: 1, y: 0.5 },
        scale: { x: 1, y: 1 },
        fontSize: 50,
        fontName: 'blambot',
        color: '#FFFFFF'
      });

      this.coinIcon = new _sprite2.default({
        //     key: 'coinicon3',
        key: 'coinback',
        anchor: { x: 1, y: 0.5 },
        scale: { x: 1, y: 1 }
      });

      this.coinIcon.addChild(this.coinBase);

      //    this.coinIcon.addChild(this.coinIcon);

      this.groupBase3.add(this.coinIcon);
    }
  }, {
    key: 'createDiamondbase',
    value: function createDiamondbase() {
      this.diamondBase = new _text2.default({
        text: this.diamonds,
        position: { x: -100, y: 0 },
        anchor: { x: 1, y: 0.5 },
        scale: { x: 1, y: 1 },
        fontSize: 50,
        fontName: 'blambot',
        color: '#FFFFFF'
      });

      this.diamondIcon = new _sprite2.default({
        //      key: 'diamondicon3',
        key: 'diamondback',
        anchor: { x: 1, y: 0.5 },
        scale: { x: 1, y: 1 }
      });

      this.diamondIcon.addChild(this.diamondBase);

      this.groupBase3.addChild(this.diamondIcon);
    }
  }, {
    key: 'createBall',
    value: function createBall(size, x, y, direction, maxLives) {
      var after = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      var _this4 = this;

      var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 50;
      var velocityY = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 200;

      if ((this.ballsOnLevel - this.ballsOnLevelNow === 0 || this.ballsOnLevel - this.ballsOnLevelNow < 0) && !after) return;

      if (size === 'big') {
        switch (Math.floor(Math.random() * 3) + 1) {
          case 1:
            size = 'big';
            fontSize = 78; // 50;
            break;
          case 2:
            size = 'medium';
            fontSize = 60; // 35;
            break;
          default:
            size = 'big';
            fontSize = 78; // 50;
        }
      }

      var lives = Math.ceil(Math.random() * maxLives);

      var letter = 'r';
      if (lives < 6) {
        letter = 'g';
      } else if (lives > 12) {
        letter = 'b';
      }

      if (!after) {
        if (this.ballsOnLevel - this.ballsOnLevelNow < 3) {
          size = 'small';
          fontSize = 45; // 20;
        } else if (this.ballsOnLevel - this.ballsOnLevelNow < 7) {
          size = 'medium';
          fontSize = 60; // 35;
        }
      }

      if (Math.random() < 0.15 && !after && !this.upgradeIs && !this.flyUp && this.ballsOnLevel - this.ballsOnLevelNow > 3) {
        size = 'powerup';
        letter = 'az';
        lives *= 3;
        this.flyUp = true;
        _soundManager2.default.instance.playSound('up_appear', 1, false, this.noise);
      }

      var colorBall = '#7B1414';
      if (letter === 'g') colorBall = '#095A1E';
      if (letter === 'b') colorBall = ' #0E418D';

      this.size = size;

      var ball = new _sprite2.default({
        key: 'e_' + this.size + '_' + letter
      });

      ball.grow = lives * 0.2;
      ball.addScale = 0.6 / lives;

      ball.prevX = -10000;

      if (this.freezeNew) {
        ball.freezed = true;
      } else {
        ball.freezed = false;
      }

      if (ball.size === 'powerup') {
        this.deleteGroup.add(powerup);
      } else {
        ball.shakeHit = game.add.tween(ball.scale).to({ x: 0.96, y: 0.96 }, 5).to({ x: 1, y: 1 }, 5).to({ x: 0.96, y: 0.96 }, 5).to({ x: 1, y: 1 }, 5);
      }
      this.balls.add(ball);

      ball.checkForFreeze = false;

      ball.lives = lives;

      this.physicsRadius = this.chooseRadius(this.size);

      this.speedCoeff = this.chooseCoeff(this.size);

      this.x = x;

      this.y = y;

      this.direction = direction;

      this.after = after;

      this.probabilityDesruption = 1;

      ball.size = this.size;

      var sca = this.scaleBallPhysicsRadius;

      var ballText = new _text2.default({
        text: ball.lives.toFixed(0),
        anchor: new _phaser.Point(0.5, 0.35),
        fontSize: fontSize,
        fontName: 'blambot',
        color: colorBall
      });

      ball.addChild(ballText);

      if (size === 'powerup') ballText.visible = false;

      if (!this.after) {
        // beginner-ball
        ball.tweened = false;

        var high = this.chooseHigh(size);

        switch (size) {
          case 'powerup':
            this.ballsOnLevelNow += 1;
            // high = -game.height * 0.75;
            // if (game.width > game.height) {
            //  high = -game.height / this.group.scale.y + 220 / this.group.scale.y;
            //   if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
            //   //high = -0.5 * (game.width / game.height) * game.height * 1.1;
            // }
            break;
          case 'big':
            this.ballsOnLevelNow += 7;
            // high = -game.height * 0.75;
            // if (game.width > game.height) {
            //  high = -game.height / this.group.scale.y + 100 / this.group.scale.y;
            //   if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
            //   // high = -0.5 * (game.width / game.height) * game.height * 1.1
            //   //   * Math.abs(1 - 0.7 * (game.width - game.height) / game.width);
            // }

            break;
          case 'medium':
            this.ballsOnLevelNow += 3;
            // high = -game.height * 0.65;
            // if (game.width > game.height) {
            //  high = -game.height / this.group.scale.y + 150 / this.group.scale.y;
            //   if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
            //   // high = -0.5 * (game.width / game.height) * game.height * 1.05
            //   //   * Math.abs(1 - 0.8 * (game.width - game.height) / game.width);
            // }

            break;
          default:
            this.ballsOnLevelNow += 1;
          // high = -game.height * 0.6;
          // if (game.width > game.height) {
          //   if (game.width / game.height > 1.8) high += game.width / game.height * 100 * this.group.scale.y;
          //   //if (game.width / game.height > 1.8) high += 200 * this.group.scale.y;
          //   // high = -0.5 * (game.width / game.height) * game.height;
          // }
        }

        if (!(this.ballsOnLevel - this.ballsOnLevelNow > 0)) this.exclaim(0, 0, true);

        //      if (game.height > game.width) high = high / 1.1;

        var dir = 1;
        var sideFromRight = true;
        ball.fromRight = true;
        if (Math.random() > 0.5) {
          dir = -1;
          sideFromRight = false;
          ball.fromRight = false;
        }

        ball.y = high;
        // /      ball.x = dir * (game.width / 2 - 200);
        if (dir === -1) {
          ball.x = this.leftBounds.x - this.group.x - ball.texture.width * this.group.scale.x;
        } else {
          ball.x = this.rightBounds.x - this.group.x + ball.texture.width * this.group.scale.x;
        }

        this.game.physics.arcade.enableBody(ball);

        ball.body.x = ball.x;
        ball.body.y = ball.y;

        if (game.width > game.height) {
          ball.body.offset.x = this.offsetForBallPhysics * this.physicsRadius / 150;
          ball.body.offset.y = this.offsetForBallPhysics * this.physicsRadius / 150;
        } else {
          ball.body.offset.x = this.offsetForBallPhysics * this.physicsRadius / 105;
          ball.body.offset.y = this.offsetForBallPhysics * this.physicsRadius / 105;
        }

        ball.body.setCircle(this.physicsRadius * sca); // физикрадиус умножается на скейлболлфизиксрадиус

        var sizeCoeff = void 0;
        switch (size) {
          case 'big':
            sizeCoeff = 0.5;
            break;
          case 'medium':
            sizeCoeff = 0.7;
            break;
          default:
            sizeCoeff = 1;
        }

        // if (!this.freezeNew) {
        if (dir === 1) {
          ball.firstMoveBall = game.add.tween(ball).to({ x: this.rightBounds.x - this.group.x - 1.2 * ball.texture.width * this.group.scale.x }, 100);
        } else {
          ball.firstMoveBall = game.add.tween(ball).to({ x: this.leftBounds.x - this.group.x + 1.2 * ball.texture.width * this.group.scale.x }, 100);
        }

        ball.rotateBall = game.add.tween(ball).to({ rotation: dir * 1000 }, 1000000, Phaser.Easing.Quadratic.Out, false);
        ball.rotateBall.start();

        ball.firstMoveBall.onComplete.add(function () {
          if (ball.body) {
            ball.body.collideWorldBounds = true;
            ball.body.velocity.x = -200 * dir * _this4.speedCoeff * sizeCoeff;
            ball.body.velocity.y = 0;
            ball.body.gravity.y = _this4.chooseGravity(size);
            ball.tweened = true;
          }
          // давай ему включим оффбол, если нужна заморозка
          if (_this4.freeze) {
            ball.rotateBall.stop();

            var flashBall1 = game.add.tween(ball).to({ alpha: 0 }, 50, Phaser.Easing.Quadratic.Out, false);

            var flashBall2 = game.add.tween(ball).to({ alpha: 1 }, 50, Phaser.Easing.Quadratic.Out, false);

            var flashBall0 = game.add.tween(ball).to({ alpha: 0.99 }, 1, Phaser.Easing.Quadratic.Out, false);

            flashBall1.chain(flashBall2.chain(flashBall1));

            flashBall0.onComplete.add(function () {
              flashBall0.stop();
              flashBall1.start();
            });

            if (_this4.timeForUp > 6.9) {
              flashBall0.start();
            } else {
              flashBall0.delay(7000 - _this4.timeForUp * 1000).start();
            }

            if (ball.body) ball.velocityX = ball.body.velocity.x;
            if (ball.body) ball.velocityY = ball.body.velocity.y;
            if (ball.body) ball.body.allowGravity = false;

            if (ball.body) ball.body.velocity.x = 0;
            if (ball.body) ball.body.velocity.y = 0;
          }
        });

        ball.body.bounce.set(1, 1);
        ball.tupse = 2;
        ball.firstMoveBall.start();
      } else {
        // ball after disruption
        ball.Xposition = this.x;
        ball.Yposition = this.y;

        ball.tweened = true;

        ball.x = this.x;
        ball.y = this.y;

        ball.after = true;

        this.game.physics.arcade.enableBody(ball);

        ball.body.position.y = ball.x;
        ball.body.position.x = ball.y;

        if (game.width > game.height) {
          ball.body.offset.x = this.offsetForBallPhysics * this.physicsRadius / 150;
          ball.body.offset.y = this.offsetForBallPhysics * this.physicsRadius / 150;
        } else {
          ball.body.offset.x = this.offsetForBallPhysics * this.physicsRadius / 105;
          ball.body.offset.y = this.offsetForBallPhysics * this.physicsRadius / 105;
        }

        ball.body.setCircle(this.physicsRadius * sca); // физикрадиус умножается на скейлболлфизиксрадиус

        ball.body.position.y = ball.x;
        ball.body.position.x = ball.y;

        if (ball.x > this.rightBounds.x - this.group.x - 0.6 * ball.texture.width * this.group.scale.x) {
          ball.x = this.rightBounds.x - this.group.x - 0.6 * ball.texture.width * this.group.scale.x;
        }
        if (ball.x < this.leftBounds.x - this.group.x + 0.6 * ball.texture.width * this.group.scale.x) {
          ball.x = this.leftBounds.x - this.group.x + 0.6 * ball.texture.width * this.group.scale.x;
        }

        ball.body.position.y = ball.x;
        ball.body.position.x = ball.y;

        if (direction === 'right') {
          ball.fromRight = false;
        } else {
          ball.fromRight = true;
        }

        ball.body.gravity.y = this.chooseGravity(ball.size);
        ball.body.velocity.y = velocityY;
        ball.body.position.y = ball.x;
        ball.body.position.x = ball.y;

        // if (!this.freeze) {
        //   ball.body.velocity.y = -190 * this.speedCoeff;
        //   ball.gravityY = false;
        // } else {
        //   ball.velocityY = -190 * this.speedCoeff;
        //   ball.gravityY = ball.body.gravity.y;
        //   ball.body.allowGravity = false;
        //   ball.rotateBall = false;
        //   const flashBall1 = game.add.tween(ball)
        //     .to({ alpha: 0 }, 50, Phaser.Easing.Quadratic.Out, false);

        //   const flashBall2 = game.add.tween(ball)
        //     .to({ alpha: 1 }, 50, Phaser.Easing.Quadratic.Out, false);

        //   const flashBall0 = game.add.tween(ball)
        //     .to({ alpha: 0.99 }, 1, Phaser.Easing.Quadratic.Out, false);

        //   flashBall1.chain(flashBall2.chain(flashBall1));

        //   flashBall0.onComplete.add(() => {
        //     flashBall0.stop();
        //     flashBall1.start();
        //   });
        //   ball.body.position.y = ball.x;
        //   ball.body.position.x = ball.y;


        //   if (this.timeForUp > 6.9) {
        //     flashBall0.start();
        //   } else {
        //     flashBall0.delay(7000 - this.timeForUp * 1000).start();
        //   }
        // }

        if (direction === 'right') {
          if (!this.freeze) {
            ball.rotateBall = game.add.tween(ball).to({ rotation: -1000 }, 1000000, Phaser.Easing.Quadratic.Out, false);
            ball.rotateBall.start();
            ball.body.velocity.x = 100 * this.speedCoeff;
          } else {
            ball.velocityX = 100 * this.speedCoeff;
          }
        } else if (!this.freeze) {
          ball.body.velocity.x = -100 * this.speedCoeff;
          ball.rotateBall = game.add.tween(ball).to({ rotation: 1000 }, 1000000, Phaser.Easing.Quadratic.Out, false);
          ball.rotateBall.start();
        } else {
          ball.velocityX = -100 * this.speedCoeff;
        }
        ball.body.position.y = ball.x;
        ball.body.position.x = ball.y;

        ball.tupse = 0;
        this.balls.add(ball);
        //      ball.body.collideWorldBounds = true;
        ball.body.bounce.set(1, 1);
        ball.body.position.y = ball.x;
        ball.body.position.x = ball.y;

        //      ball.body.collideWorldBounds = true;
      }
    }
  }, {
    key: 'createLogoLevelBar',
    value: function createLogoLevelBar() {
      this.forlevelBegin = new _sprite2.default({
        key: 'forlevel2',
        position: { x: game.width / 2, y: 0.5 * 66 * this.groupBase3.scale.y },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1, y: 1 }
      });

      this.levelBeginText = new _text2.default({
        text: this.level,
        anchor: new _phaser.Point(0.5, 0.5),
        color: '#943800',
        fontSize: 36,
        fontName: 'blambot',
        position: { x: 0, y: -4 }
      });
      this.forlevelBegin.addChild(this.levelBeginText);

      this.groupBase3.add(this.forlevelBegin);
    }
  }, {
    key: 'createLevelBar',
    value: function createLevelBar() {
      this.levelBar = new _sprite2.default({
        key: 'level3',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1, y: 1 }
      });

      this.forlevel1 = new _sprite2.default({
        key: 'forlevel2',
        position: { x: -87, y: 0 },
        anchor: { x: 0.896, y: 0.5 },
        scale: { x: 1, y: 1.3 }
      });

      this.forlevel2 = new _sprite2.default({
        key: 'forlevel2',
        position: { x: 87, y: 0 },
        anchor: { x: 0.114, y: 0.5 },
        scale: { x: 1, y: 1.3 }
      });

      this.levelBarFull = new _sprite2.default({
        key: 'level_full3',
        position: { x: -this.levelBar.texture.width / 2, y: 0 },
        anchor: { x: 0, y: 0.5 },
        scale: { x: 0, y: 1 }
      });

      this.levelText1 = new _text2.default({
        text: this.level,
        anchor: new _phaser.Point(0.5, 0.65),
        color: '#943800',
        fontSize: 36, // 50,
        fontName: 'blambot',
        // position: { x: -70, y: 7 },
        position: { x: -42, y: 2 }
      });
      this.forlevel1.addChild(this.levelText1);

      this.levelText2 = new _text2.default({
        text: this.level + 1,
        anchor: new _phaser.Point(0.5, 0.65),
        color: '#943800',
        fontSize: 36, // 50,
        fontName: 'blambot',
        // position: { x: 64, y: 7 },
        position: { x: 38, y: 2 }
      });
      this.forlevel2.addChild(this.levelText2);

      this.scoreText = new _text2.default({
        text: this.score,
        anchor: new _phaser.Point(0.5, 0.5),
        fontName: 'blambot',
        color: 'white',
        fontSize: 60 // 73,
      });
      // /    this.scoreText.y = -60;
      this.scoreText.y = 40;
      this.scoreText.x = 0;

      this.levelBar.addChild(this.levelBarFull);
      // this.levelBar.addChild(this.levelText);
      this.levelBar.addChild(this.forlevel1);
      this.levelBar.addChild(this.forlevel2);
      this.levelBar.addChild(this.scoreText);
      this.groupBase3.add(this.levelBar);
    }
  }, {
    key: 'chooseRadius',
    value: function chooseRadius(size) {
      switch (size) {
        case 'big':
          return 105;
        case 'powerup':
          return 70;
        case 'medium':
          return 75;
        case 'small':
          return 50;
        default:
          return 50;
      }
    }
  }, {
    key: 'chooseGravity',
    value: function chooseGravity(size) {
      var coeffFreeze = 1;
      if (this.freezeNew) coeffFreeze = 0.1;
      switch (size) {
        case 'big':
          return 450 * 1.3 * coeffFreeze;
          break;
        case 'powerup':
          return 700 * 1.3 * coeffFreeze;
          break;
        case 'medium':
          return 700 * 1.3 * coeffFreeze;
          break;
        case 'small':
          return 750 * 1.3 * coeffFreeze;
          break;
        default:
          return 120 * 1.3 * coeffFreeze;
      }
    }
  }, {
    key: 'chooseCoeff',
    value: function chooseCoeff(size) {
      var coeffFreeze = 1;
      if (this.freezeNew) coeffFreeze = 0.1;
      switch (size) {
        case 'big':
          return 1 * coeffFreeze;
          break;
        case 'powerup':
          return 1.2 * coeffFreeze;
          break;
        case 'medium':
          return 1.2 * coeffFreeze;
          break;
        case 'small':
          return 1.5 * coeffFreeze;
          break;
        default:
          return 1 * coeffFreeze;
      }
    }
  }, {
    key: 'chooseHigh',
    value: function chooseHigh(size) {
      var high = void 0;
      switch (size) {
        case 'powerup':
          high = -game.height * 0.75;
          if (game.width > game.height) {
            high = -0.9 * game.height; // + 220 * this.group.scale.y;
            //          if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
          }
          break;
        case 'big':
          high = -game.height * 0.75;
          if (game.width > game.height) {
            high = -0.9 * game.height; // + 100 * this.group.scale.y;
            //          if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
          }
          break;
        case 'medium':
          high = -game.height * 0.65;
          if (game.width > game.height) {
            high = -0.9 * game.height; // + 150 * this.group.scale.y;
            //          if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
          }
          break;
        default:
          high = -game.height * 0.6;
          if (game.width > game.height) {
            high = -0.85 * game.height; // + 100 * this.group.scale.y;
            //          if (game.width / game.height > 1.8) high += game.width / game.height * 100 * this.group.scale.y;
          }
      }
      if (game.height > game.width) high /= 1.1;
      return high;
    }
  }, {
    key: 'createPauseScreen',
    value: function createPauseScreen() {
      var _this5 = this;

      if (this.pauseBack) this.pauseBack.kill();
      this.pauseBack = new _phaser.Graphics(game);
      this.pauseBack.beginFill(0xfeb85d);
      this.pauseBack.lineStyle(10, '0xd17522', 1);
      this.pauseBack.drawRoundedRect(0.2 * game.width, 0.2 * game.height, 0.6 * game.width, 0.6 * game.height, 10);
      this.pauseBack.endFill();

      var scaleButton = 1;
      if (game.width / game.height > 2.3) scaleButton = 1 - (game.width - 2 * game.height) / game.width;
      var scaleButton2 = 1;
      if (game.height / game.width > 1.69) scaleButton2 = 1 - (game.height - 1.5 * game.width) / game.height;

      this.playButton = new _button2.default({
        key: 'first_button',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(game.width / 2, 0.7 * game.height),
        scale: new _phaser.Point(-0.7 * scaleButton, 0.7 * scaleButton)
      });
      var playButtonIcon = new _sprite2.default({
        key: 'ui_back_icon',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1 * scaleButton, y: 1 * scaleButton },
        position: { x: 0, y: -10 }
      });
      this.playButton.addChild(playButtonIcon);

      this.playButton.doOnClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _famobiApi2.default.instance.onResume();

              case 2:
                _this5.pauseButton.visible = true;
                _this5.routingSuperStartButton = _this5.prevRoutingValue;
                // this.pauseButton.pressed = false;
                if (!_this5.groupUpgrades.visible && !_this5.endcard) {
                  _this5.stop = false;
                }
                if (!_this5.freeze) {
                  _this5.onBallphysic2();
                }
                _this5.pauseBack.kill();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this5);
      }));

      this.pauseBack.addChild(this.playButton);

      this.restartButton = new _button2.default({
        key: 'first_button',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(game.width / 2, 0.6 * game.height - 25),
        scale: new _phaser.Point(-0.7 * scaleButton, 0.7 * scaleButton)
      });
      var restartButtonIcon = new _sprite2.default({
        key: 'icon_restart',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8 * scaleButton, y: 0.8 * scaleButton },
        position: { x: 0, y: -10 }
      });
      this.restartButton.addChild(restartButtonIcon);

      this.restartButton.doOnClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _famobiApi2.default.instance.onLevelQuit(_this5.level);

              case 2:
                _this5.stopShops = false;
                _this5.tuningButton.visible = true;
                _this5.screen_button.visible = true;
                _this5.pauseButton.visible = false;
                _this5.levelComplete = false;
                _this5.stop = true;
                _this5.tweenHelperYes = false;
                if (_this5.overlay) {
                  _this5.overlay.kill();
                  _this5.createFreezeOverlay();
                }
                if (_this5.timeForUp !== -1) {
                  _this5.offUp();
                }
                _this5.forEndBullet = 0;
                _this5.upgradeIs = false;
                _this5.leftKeyPressed = 0;
                _this5.rightKeyPressed = 0;
                _this5.upKeyPressed = false;
                _this5.timeFor = 0;
                _this5.ballsOnLevelNow = 0;
                _this5.prevTimeBall = 0;
                _this5.prevTimeBullet = 0;
                _this5.ballsKilled = 0;
                _this5.balls.removeAll();
                _this5.bullets.removeAll();
                _this5.coinGroup.removeAll();
                _this5.upgradeSmallGroup.removeAll();
                _this5.fireUp = false;
                _this5.createBulletMatrix(_this5.bulletsPerSec);
                _this5.freeze = false;
                _this5.freezeNew = false;
                _this5.tweenHelperYes = false;
                _this5.ballUnderFreeze = false;
                if (_this5.shield) {
                  _this5.offshield();
                }
                _this5.shield = false;
                _this5.coinRainVariable = false;
                _this5.helper = false;
                _this5.playerAdd.visible = false;
                _this5.offshield();
                _this5.player.animations.stop(0);
                _this5.diamonds = _this5.prevDiamonds;
                _this5.coins = _this5.prevCoins;
                _this5.score = _this5.prevScore;
                _this5.coinBase.text = _this5.coins;
                _this5.diamondBase.text = _this5.diamonds;
                _this5.scoreText.text = _this5.score;
                _this5.levelBar.visible = false;
                _this5.logo.visible = true;
                _this5.forlevelBegin.visible = true;
                _this5.pauseBack.kill();
                _this5.startBeginScreen();
                _this5.pauseBack.kill();
                _this5.newLevel(true);

              case 51:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this5);
      }));

      this.pauseBack.addChild(this.restartButton);

      this.musicButton = new _button2.default({
        key: 'second_button',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(game.width / 2 - 153 * this.pauseBack.scale.x * scaleButton2, 0.4 * game.height),
        scale: new _phaser.Point(0.7 * scaleButton, 0.7 * scaleButton)
      });
      var musicButtonIcon = new _sprite2.default({
        key: 'music_on',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8 * scaleButton, y: 0.8 * scaleButton },
        position: { x: 3, y: -4 }
      });
      this.musicButton.addChild(musicButtonIcon);

      this.musicButton.music_on = true;

      if (_soundManager2.default.instance.bgmSetting === 0) {
        _soundManager2.default.instance.stopSound('main_theme1');
        musicButtonIcon.loadTexture('music_off');
        this.musicButton.music_on = false;
      }

      this.musicButton.doOnClick = function () {
        if (_this5.shopPressed === 0) {
          if (_this5.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this5.musicButton.music_on) {
            _soundManager2.default.instance.stopSound('main_theme1');
            musicButtonIcon.loadTexture('music_off');
            _this5.musicButton.music_on = false;
            _soundManager2.default.instance.bgmSetting = 0;
          } else {
            _soundManager2.default.instance.bgmSetting = 1;
            _soundManager2.default.instance.playSound('main_theme1', 1, true);
            musicButtonIcon.loadTexture('music_on');
            _this5.musicButton.music_on = true;
          }
        }
      };

      if(window.famobi.hasFeature("external_mute")) {
        this.musicButton.visible = false;
      }
      this.pauseBack.addChild(this.musicButton);

      this.noiseButton = new _button2.default({
        key: 'second_button',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(game.width / 2, 0.4 * game.height),
        scale: new _phaser.Point(0.7 * scaleButton, 0.7 * scaleButton)
      });
      var noiseButtonIcon = new _sprite2.default({
        key: 'sound_on',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8 * scaleButton, y: 0.8 * scaleButton },
        position: { x: 6, y: -4 }
      });
      this.noiseButton.addChild(noiseButtonIcon);

      this.noiseButton.sound_on = true;

      if (_soundManager2.default.instance.sfxSetting === 0) {
        this.noise = false;
        noiseButtonIcon.loadTexture('sound_of');
        this.noiseButton.sound_on = false;
      }

      this.noiseButton.doOnClick = function () {
        if (_this5.shopPressed === 0) {
          if (_this5.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this5.noiseButton.sound_on) {
            _this5.noise = false;
            noiseButtonIcon.loadTexture('sound_of');
            _this5.noiseButton.sound_on = false;
            _soundManager2.default.instance.sfxSetting = 0;
          } else {
            _this5.noise = true;
            noiseButtonIcon.loadTexture('sound_on');
            _this5.noiseButton.sound_on = true;
            _soundManager2.default.instance.sfxSetting = 1;
          }
        }
      };

      if(window.famobi.hasFeature("external_mute")) {
        this.noiseButton.visible = false;
      }
      this.pauseBack.addChild(this.noiseButton);

      this.vibroButton = new _button2.default({
        key: 'second_button',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(window.famobi.hasFeature("external_mute") ? (game.width / 2) : (game.width / 2 + 153 * this.pauseBack.scale.x * scaleButton2), 0.4 * game.height),
        scale: new _phaser.Point(0.7 * scaleButton, 0.7 * scaleButton)
      });
      var vibroButtonIcon = new _sprite2.default({
        key: _this5.vibro ? 'icon_vibration' : 'icon_vibration_off',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8 * scaleButton, y: 0.8 * scaleButton },
        position: { x: 4, y: -4 }
      });
      this.vibroButton.addChild(vibroButtonIcon);

      this.vibroButton.doOnClick = function () {
        if (_this5.shopPressed === 0) {
          if (_this5.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this5.vibro) {
            _this5.vibro = false;
            vibroButtonIcon.loadTexture('icon_vibration_off');
            _famobiApi2.default.instance.setLocalStorageItem('vibro', '0');
          } else {
            _this5.vibro = true;
            vibroButtonIcon.loadTexture('icon_vibration');
            _famobiApi2.default.instance.setLocalStorageItem('vibro', '1');
          }
        }
      };

      this.pauseBack.addChild(this.vibroButton);

      this.firstLayer.addChild(this.pauseBack);
    }
  }, {
    key: 'createShops',
    value: function createShops() {
      var _this6 = this;

      var subject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'background';

      if (this.stopShops) return;

      if (this.logo) this.logo.alpha = 0;
      if (this.swipeHand) this.swipeHand.alpha = 0;
      if (this.touchForShut) this.touchForShut.alpha = 0;

      var scaleForIcons = 1;

      this.tuningButton.visible = false;
      this.screen_button.visible = false;
      this.levelBar.visible = false;

      this.firstLayer.add(this.shopGroupForResize);

      this.shopGroup.visible = false;

      if (this.shopPressed === 0) this.shopPressed = 1;
      if (this.shopPressed === 2) subject = 'player';

      var backgroundBase = new _sprite2.default({ // коричневый фон для темы
        key: 'ui_background_shop_backgrounds22',
        position: { x: 0, y: 0 },
        anchorX: 0.5,
        anchorY: 0.5,
        scale: { x: 1, y: 1 }
      }, this);

      backgroundBase.anchor = new _phaser.Point(0.5, 0.5);

      this.shopGroupForResize.add(backgroundBase);

      var skinButtonCave = new _button2.default({ // выбор пещеры - лежит в первой ячейке
        key: 'background_skin0',
        anchor: new _phaser.Point(0, 0),
        position: new _phaser.Point(-222, -217),
        scale: new _phaser.Point(1, 1)
      });
      skinButtonCave.bought = this.shopSkinMatrix[0][0];

      var diamondSkinButtonCave = new _sprite2.default({
        key: 'diamondicon3',
        position: { x: -10, y: 45 },
        anchor: { x: 0.5, y: 1 },
        scale: { x: 0.15, y: 0.15 }
      });

      var skinButtonCaveText = new _text2.default({
        text: 100,
        position: { x: 5, y: 55 },
        anchor: { x: 1, y: 1 },
        scale: { x: 1, y: 1 },
        fontSize: 15,
        fontName: 'blambot',
        color: 'red'
      });

      skinButtonCave.doOnClick = function () {
        if (_this6.shopPressed === 1) {
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          var scaleCart = skinButtonCave.scale.x;
          skinButtonCave.scale.x = 1;
          skinButtonCave.scale.y = 1;
          game.tweens.removeFrom(skinButtonCave.scale);
          var caveTween = game.add.tween(skinButtonCave.scale).to({ x: 1.2, y: 1.2 }, 70).to({ x: 1, y: 1 }, 70);
          caveTween.start();
          highlightCave.x = skinButtonCave.x - 12;
          highlightCave.y = skinButtonCave.y - 12;
          _this6.shopSkinMatrix[0][4] = 0;
          _famobiApi2.default.instance.setLocalStorageItem('backIs', 0);
        }
      };
      backgroundBase.addChild(skinButtonCave);

      var skinButtonJungle = new _button2.default({
        key: 'background_skin1',
        anchor: new _phaser.Point(0.5, 0),
        position: new _phaser.Point(124, -217),
        scale: new _phaser.Point(1, 1)
      });
      skinButtonJungle.bought = this.shopSkinMatrix[0][1];

      var diamondSkinButtonJungle = new _sprite2.default({
        key: 'diamondicon3',
        position: { x: 87, y: 200 },
        anchor: { x: 0.5, y: 1 },
        scale: { x: 0.5, y: 0.5 }
      });

      var skinButtonJungleText = new _text2.default({
        text: 100,
        position: { x: 70, y: 200 },
        anchor: { x: 1, y: 1 },
        scale: { x: 1, y: 1 },
        fontSize: 30,
        fontName: 'blambot',
        color: 'red'
      });

      skinButtonJungleText.scale.x = 1 / scaleForIcons;
      skinButtonJungleText.scale.y = 1 / scaleForIcons;

      if (!skinButtonJungle.bought) {
        skinButtonJungle.addChild(skinButtonJungleText);
        skinButtonJungle.addChild(diamondSkinButtonJungle);
      }

      skinButtonJungle.doOnClick = function (item) {
        if (_this6.diamonds < _this6.myToNumber(skinButtonJungleText.text) && !skinButtonJungle.bought) return;
        if (_this6.shopPressed === 1) {
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (!skinButtonJungle.bought) {
            _this6.diamonds -= _this6.myToNumber(skinButtonJungleText.text);
            _famobiApi2.default.instance.setLocalStorageItem('diamonds', _this6.diamonds);
            _this6.prevDiamonds = _this6.diamonds;
            _this6.diamondBase.text = _this6.diamonds;
            skinButtonJungle.removeChild(skinButtonJungleText);
            skinButtonJungle.removeChild(diamondSkinButtonJungle);
            skinButtonJungle.bought = true;
            _famobiApi2.default.instance.setLocalStorageItem('back1', true);
            var backgroundsBought = _famobiApi2.default.instance.getLocalStorageItem('background_bought' || 0) + 1;
            _famobiApi2.default.instance.setLocalStorageItem('background_bought', backgroundsBought);
            _statistics2.default.instance.set('backgrounds_bought', backgroundsBought);
            _this6.shopSkinMatrix[0][1] = true;
          }
          var scaleCart = skinButtonJungle.scale.x;
          game.tweens.removeFrom(skinButtonJungle.scale);
          skinButtonJungle.scale.x = 1;
          skinButtonJungle.scale.y = 1;
          var caveTween = game.add.tween(skinButtonJungle.scale).to({ x: 1.2, y: 1.2 }, 70).to({ x: 1, y: 1 }, 70);
          caveTween.start();
          highlightCave.x = skinButtonJungle.x - 115;
          highlightCave.y = skinButtonJungle.y - 12;
          _this6.shopSkinMatrix[0][4] = 1;
          _famobiApi2.default.instance.setLocalStorageItem('backIs', 1);
        }
      };
      backgroundBase.addChild(skinButtonJungle);

      var skinButton3 = new _button2.default({
        key: 'background_skin2',
        anchor: new _phaser.Point(0.5, 0),
        position: new _phaser.Point(-120, 28),
        scale: new _phaser.Point(1, 1)
      });
      skinButton3.bought = this.shopSkinMatrix[0][2];

      var diamondSkinButton3 = new _sprite2.default({
        key: 'diamondicon3',
        position: { x: 87, y: 200 },
        anchor: { x: 0.5, y: 1 },
        scale: { x: 0.5, y: 0.5 }
      });

      var skinButton3Text = new _text2.default({
        text: 100,
        position: { x: 70, y: 200 },
        anchor: { x: 1, y: 1 },
        scale: { x: 1, y: 1 },
        fontSize: 30,
        fontName: 'blambot',
        color: 'red'
      });

      skinButton3Text.scale.x = 1 / scaleForIcons;
      skinButton3Text.scale.y = 1 / scaleForIcons;

      if (!skinButton3.bought) {
        skinButton3.addChild(skinButton3Text);
        skinButton3.addChild(diamondSkinButton3);
      }

      skinButton3.doOnClick = function (item) {
        if (_this6.diamonds < _this6.myToNumber(skinButton3Text.text) && !skinButton3.bought) return;
        if (_this6.shopPressed === 1) {
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (!skinButton3.bought) {
            _this6.diamonds -= _this6.myToNumber(skinButton3Text.text);
            _famobiApi2.default.instance.setLocalStorageItem('diamonds', _this6.diamonds);
            _this6.prevDiamonds = _this6.diamonds;
            _this6.diamondBase.text = _this6.diamonds;
            skinButton3.removeChild(skinButton3Text);
            skinButton3.removeChild(diamondSkinButton3);
            skinButton3.bought = true;
            _this6.shopSkinMatrix[0][2] = true;
            _famobiApi2.default.instance.setLocalStorageItem('back2', true);
            var backgroundsBought = _famobiApi2.default.instance.getLocalStorageItem('background_bought' || 0) + 1;
            _famobiApi2.default.instance.setLocalStorageItem('background_bought', backgroundsBought);
            _statistics2.default.instance.set('backgrounds_bought', backgroundsBought);
          }
          var scaleCart = skinButton3.scale.x;
          game.tweens.removeFrom(skinButton3.scale);
          skinButton3.scale.x = 1;
          skinButton3.scale.y = 1;
          var caveTween = game.add.tween(skinButton3.scale).to({ x: 1.2, y: 1.2 }, 70).to({ x: 1, y: 1 }, 70);
          caveTween.start();
          highlightCave.x = skinButton3.x - 115;
          highlightCave.y = skinButton3.y - 12;
          _this6.shopSkinMatrix[0][4] = 2;
          _famobiApi2.default.instance.setLocalStorageItem('backIs', 2);
        }
      };
      backgroundBase.addChild(skinButton3);

      var skinButton4 = new _button2.default({
        key: 'background_skin3',
        anchor: new _phaser.Point(0.5, 0),
        position: new _phaser.Point(124, 28),
        scale: new _phaser.Point(1, 1)
      });
      skinButton4.bought = this.shopSkinMatrix[0][3];

      var diamondSkinButton4 = new _sprite2.default({
        key: 'diamondicon3',
        position: { x: 87, y: 200 },
        anchor: { x: 0.5, y: 1 },
        scale: { x: 0.5, y: 0.5 }
      });

      var skinButton4Text = new _text2.default({
        text: 100,
        position: { x: 70, y: 200 },
        anchor: { x: 1, y: 1 },
        scale: { x: 1, y: 1 },
        fontSize: 30,
        fontName: 'blambot',
        color: 'red'
      });

      skinButton4Text.scale.x = 1 / scaleForIcons;
      skinButton4Text.scale.y = 1 / scaleForIcons;

      if (!skinButton4.bought) {
        skinButton4.addChild(skinButton4Text);
        skinButton4.addChild(diamondSkinButton4);
      }

      skinButton4.doOnClick = function (item) {
        if (_this6.diamonds < _this6.myToNumber(skinButton4Text.text) && !skinButton4.bought) return;
        if (_this6.shopPressed === 1) {
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (!skinButton4.bought) {
            _this6.diamonds -= _this6.myToNumber(skinButton4Text.text);
            _famobiApi2.default.instance.setLocalStorageItem('diamonds', _this6.diamonds);
            _this6.prevDiamonds = _this6.diamonds;
            _this6.diamondBase.text = _this6.diamonds;
            skinButton4.removeChild(skinButton4Text);
            skinButton4.removeChild(diamondSkinButton4);
            skinButton4.bought = true;
            _this6.shopSkinMatrix[0][3] = true;
            _famobiApi2.default.instance.setLocalStorageItem('back3', true);
            var backgroundsBought = _famobiApi2.default.instance.getLocalStorageItem('background_bought' || 0) + 1;
            _famobiApi2.default.instance.setLocalStorageItem('background_bought', backgroundsBought);
            _statistics2.default.instance.set('backgrounds_bought', backgroundsBought);
          }
          var scaleCart = skinButton4.scale.x;
          game.tweens.removeFrom(skinButton4.scale);
          skinButton4.scale.x = 1;
          skinButton4.scale.y = 1;
          var caveTween = game.add.tween(skinButton4.scale).to({ x: 1.2, y: 1.2 }, 70).to({ x: 1, y: 1 }, 70);
          caveTween.start();
          highlightCave.x = skinButton4.x - 115;
          highlightCave.y = skinButton4.y - 12;
          _this6.shopSkinMatrix[0][4] = 3;
          _famobiApi2.default.instance.setLocalStorageItem('backIs', 3);
        }
      };
      backgroundBase.addChild(skinButton4);

      var highlightCave = new _sprite2.default({
        key: 'highlight_cave',
        position: { x: 0, y: 0 },
        anchor: { x: 0, y: 0 },
        scale: { x: 1, y: 1 }
      }, this);

      backgroundBase.addChild(highlightCave);

      switch (this.shopSkinMatrix[0][4]) {
        case 0:
          {
            highlightCave.x = skinButtonCave.x - 12;
            highlightCave.y = skinButtonCave.y - 12;
          }
          break;
        case 1:
          {
            highlightCave.x = skinButtonJungle.x - 115;
            highlightCave.y = skinButtonJungle.y - 12;
          }
          break;
        case 2:
          {
            highlightCave.x = skinButton3.x - 115;
            highlightCave.y = skinButton3.y - 12;
          }
          break;
        default:
          {
            highlightCave.x = skinButton4.x - 115;
            highlightCave.y = skinButton4.y - 12;
          }
      }

      var backgroundCart = new _sprite2.default({
        key: 'ui_background_shop_carts2',
        position: { x: 0, y: 0 },
        anchorX: 0.5,
        anchorY: 0.5,
        scale: { x: 1, y: 1 }
      }, this);

      backgroundCart.anchor = new _phaser.Point(0.5, 0.5);

      this.shopGroupForResize.add(backgroundCart);

      var _loop = function _loop(i) {
        var backgroundSkinButton = new _button2.default({
          key: 'cart' + i,
          anchor: new _phaser.Point(0.5, 0.5),
          position: new _phaser.Point(-160 + i * 160, -178),
          scale: new _phaser.Point(0.5, 0.5)
        });
        backgroundSkinButton.number = i;
        backgroundSkinButton.borderBack = new _phaser.Graphics(game);
        backgroundSkinButton.borderBack.alpha = 0;
        backgroundSkinButton.borderBack.beginFill(0xff0000);
        if (i < 5) {
          backgroundSkinButton.borderBack.drawRect(backgroundSkinButton.x - 0.455 * backgroundSkinButton.texture.width * 0.16 * scaleForIcons, backgroundSkinButton.y, 250 * 0.16 * scaleForIcons, 300 * 0.16 * scaleForIcons);
        }
        if (i > 4 && i < 9) {
          backgroundSkinButton.borderBack.drawRect(42 * scaleForIcons * (1.5 + 2 * (i - 5)) - 0.455 * backgroundSkinButton.texture.width * 0.16 * scaleForIcons, backgroundSkinButton.y + 42 * scaleForIcons * 2, 250 * 0.16 * scaleForIcons, 300 * 0.16 * scaleForIcons);
        }
        backgroundSkinButton.borderBack.endFill();
        backgroundSkinButton.borderBack.visible = false;

        if (i < 9 && i !== 0) {
          var diamondbackgroundSkinButton = new _sprite2.default({
            key: 'diamondicon3',
            position: { x: 110, y: 120 },
            anchor: { x: 0.5, y: 0.5 },
            scale: { x: 0.75, y: 0.75 }
          });

          var backgroundSkinButtonText = new _text2.default({
            text: _this6.valueCarts[i],
            position: { x: 14, y: 120 },
            anchor: { x: 0.5, y: 0.5 },
            scale: { x: 1, y: 1 },
            fontSize: 50,
            fontName: 'blambot',
            color: 'yellow'
          });

          backgroundSkinButton.bought = _this6.shopSkinMatrix[1][i];
          if (!backgroundSkinButton.bought) {
            backgroundSkinButton.addChild(backgroundSkinButtonText);
            backgroundSkinButton.addChild(diamondbackgroundSkinButton);
          }
        }

        if (i > 2) {
          backgroundSkinButton.y += 163;
          backgroundSkinButton.x -= 3 * 160;
        }
        if (i > 5) {
          backgroundSkinButton.y += 163;
          backgroundSkinButton.x -= 3 * 160;
        }

        backgroundSkinButton.doOnClick = function () {
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (i !== 0 && i < 9) {
            if (!backgroundSkinButton.bought && _this6.diamonds < backgroundSkinButton.children[0].text * 1) return;
          }
          if (_this6.shopPressed === 2) {
            if (backgroundSkinButton.number < 9) {
              if (!backgroundSkinButton.bought && backgroundSkinButton.number !== 0) {
                _this6.diamonds -= backgroundSkinButton.children[0].text * 1;
                _this6.prevDiamonds = _this6.diamonds;
                _famobiApi2.default.instance.setLocalStorageItem('diamonds', _this6.diamonds);
                _this6.diamondBase.text = _this6.diamonds;
                backgroundSkinButton.bought = true;
                _this6.shopSkinMatrix[1][backgroundSkinButton.number] = true;

                _famobiApi2.default.instance.setLocalStorageItem('background', 'background3');
                backgroundSkinButton.removeChild(backgroundSkinButton.children[0]);
                backgroundSkinButton.removeChild(backgroundSkinButton.children[0]);

                var cartsBought = (_famobiApi2.default.instance.getLocalStorageItem('carts_bought') || 0) + 1;
                _famobiApi2.default.instance.setLocalStorageItem('carts_bought', cartsBought);
                _statistics2.default.instance.set('carts_bought', cartsBought);
              }
              _famobiApi2.default.instance.setLocalStorageItem('kindOfBullet', backgroundSkinButton.number);
              _this6.kindOfBullet = backgroundSkinButton.number;
              _famobiApi2.default.instance.setLocalStorageItem('player_skin', 'cart' + backgroundSkinButton.number);
              _famobiApi2.default.instance.setLocalStorageItem('cart' + backgroundSkinButton.number, 1);
              _famobiApi2.default.instance.setLocalStorageItem('cart19', backgroundSkinButton.number);

              _this6.playerAdd.loadTexture('helper' + backgroundSkinButton.number);
              _this6.shopSkinMatrix[1][9] = backgroundSkinButton.number;
              var scaleCart = backgroundSkinButton.scale.x;
              backgroundSkinButton.scale.x = 0.5;
              backgroundSkinButton.scale.y = 0.5;
              var cartTween = game.add.tween(backgroundSkinButton.scale).to({ x: 0.7, y: 0.7 }, 70).to({ x: 0.5, y: 0.5 }, 70);
              cartTween.start();
              _this6.player0.loadTexture('cart' + backgroundSkinButton.number);
              _this6.player.loadTexture('miner' + backgroundSkinButton.number + 'idle');
              _this6.player.x = _this6.playerArray[backgroundSkinButton.number][3];
              _this6.player.y = _this6.playerArray[backgroundSkinButton.number][0];
              _this6.player.number = backgroundSkinButton.number;
              // /this.createShops();
              // //playerSkinButton.loadTexture(`cart${i}b`);
              _this6.shopSkinMatrix[1][9] = i;
              switch (_this6.shopSkinMatrix[1][9]) {
                case 0:
                  {
                    highlightCart.x = -247;
                    highlightCart.y = -260;
                  }
                  break;
                case 1:
                  {
                    highlightCart.x = -247 + 165;
                    highlightCart.y = -260;
                  }
                  break;
                case 2:
                  {
                    highlightCart.x = -247 + 2 * 165;
                    highlightCart.y = -260;
                  }
                  break;
                case 3:
                  {
                    highlightCart.x = -247;
                    highlightCart.y = -260 + 165;
                  }
                  break;
                case 4:
                  {
                    highlightCart.x = -247 + 165;
                    highlightCart.y = -260 + 165;
                  }
                  break;
                case 5:
                  {
                    highlightCart.x = -247 + 2 * 165;
                    highlightCart.y = -260 + 165;
                  }
                  break;
                case 6:
                  {
                    highlightCart.x = -247;
                    highlightCart.y = -260 + 2 * 165;
                  }
                  break;
                case 7:
                  {
                    highlightCart.x = -247 + 165;
                    highlightCart.y = -260 + 2 * 165;
                  }
                  break;
                default:
                  {
                    highlightCart.x = -247 + 2 * 165;
                    highlightCart.y = -260 + 2 * 165;
                  }
              }
            }
          }
        };

        if (i === _this6.player.number) backgroundSkinButton.borderBack.visible = true;
        backgroundCart.addChild(backgroundSkinButton.borderBack);
        backgroundCart.addChild(backgroundSkinButton);
      };

      for (var i = 0; i < 9; i += 1) {
        _loop(i);
      }

      var highlightCart = new _sprite2.default({
        key: 'highlight_cart',
        position: { x: 0, y: 0 },
        anchor: { x: 0, y: 0 },
        scale: { x: 1, y: 1 }
      }, this);

      backgroundCart.addChild(highlightCart);

      switch (this.shopSkinMatrix[1][9]) {
        case 0:
          {
            highlightCart.x = -247;
            highlightCart.y = -260;
          }
          break;
        case 1:
          {
            highlightCart.x = -247 + 165;
            highlightCart.y = -260;
          }
          break;
        case 2:
          {
            highlightCart.x = -247 + 2 * 165;
            highlightCart.y = -260;
          }
          break;
        case 3:
          {
            highlightCart.x = -247;
            highlightCart.y = -260 + 165;
          }
          break;
        case 4:
          {
            highlightCart.x = -247 + 165;
            highlightCart.y = -260 + 165;
          }
          break;
        case 5:
          {
            highlightCart.x = -247 + 2 * 165;
            highlightCart.y = -260 + 165;
          }
          break;
        case 6:
          {
            highlightCart.x = -247;
            highlightCart.y = -260 + 2 * 165;
          }
          break;
        case 7:
          {
            highlightCart.x = -247 + 165;
            highlightCart.y = -260 + 2 * 165;
          }
          break;
        default:
          {
            highlightCart.x = -247 + 2 * 165;
            highlightCart.y = -260 + 2 * 165;
          }
      }

      var caveSkinButton = new _button2.default({
        key: 'icon_backgrounds',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(-29, -332),
        scale: new _phaser.Point(0.8, 0.8)
      });
      caveSkinButton.tint = 0xD17522;

      caveSkinButton.doOnClick = function () {
        if (_this6.shopPressed === 2) {
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          _this6.shopGroupForResize.addChild(backgroundBase);
          _this6.shopGroupForResize.addChild(closeButton);
          _this6.shopPressed = 1;
        }
      };

      backgroundBase.addChild(caveSkinButton);

      var playerSkinButton = new _button2.default({
        key: 'icon_carts', // this.shopSkinMatrix[1][9],
        //      key: 'player_skin2',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(-160, -332),
        scale: new _phaser.Point(0.8, 0.8)
        //      scale: new Point(1, 1),
      });
      playerSkinButton.tint = 0x1A7BB7;
      // // //fcbd00

      // playerSkinButton.tint =  0x2d5a73

      playerSkinButton.doOnClick = function () {
        if (_this6.shopPressed === 1) {
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          backgroundCart.visible = true;
          _this6.shopGroupForResize.addChild(backgroundCart);
          _this6.shopGroupForResize.addChild(closeButton);
          _this6.shopPressed = 2;
        }
      };

      backgroundCart.addChild(playerSkinButton);

      var closeButton = new _button2.default({
        key: 'redbutton',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(-240, 310),
        scale: new _phaser.Point(0.5, 0.5)
      });

      var closeButtonIcon = new _sprite2.default({
        key: 'icon_restart',
        position: { x: 0, y: -3 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1, y: 1 }
      }, this);

      closeButton.addChild(closeButtonIcon);

      closeButton.doOnClick = function () {
        if (_this6.shopPressed !== 0) {
          _this6.routingSuperStartButton = 'begin';
          _this6.logo.alpha = 1;
          _this6.swipeHand.alpha = 1;
          _this6.touchForShut.alpha = 1;
          _this6.groupUpgrades.visible = true;
          _this6.tuningButton.visible = true;
          _this6.screen_button.visible = true;
          if (_this6.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          _this6.shopPressed = 0;
          backgroundBase.kill();
          backgroundCart.kill();
          _this6.shopGroupForResize.removeAll(true);
          _this6.shopGroupForResize.remove();
          _this6.changeTheme(_this6.shopSkinMatrix[0][4]);
          _this6.shopGroup.visible = true;
        }
      };

      if (subject === 'player') {
        this.shopGroupForResize.addChild(backgroundCart);
        this.shopGroupForResize.addChild(closeButton);
        backgroundCart.visible = true;
      } else {
        backgroundCart.visible = true;
        this.shopGroupForResize.addChild(backgroundBase);
        this.shopGroupForResize.addChild(closeButton);
      }
    }
  }, {
    key: 'createTuning',
    value: function createTuning() {
      var _this7 = this;

      this.tuningGroup = this.game.add.group();

      this.screen_button = new _sprite2.default({
        key: window.famobi.hasFeature("external_mute") ? 'screen_setting2' : 'screen_setting',
        position: { x: 63, y: 210 },
        anchor: { x: 0.5, y: 0 },
        scale: { x: 1.4, y: 0 }
      });
      this.tuningGroup.addChild(this.screen_button);

      this.pauseButton = new _button2.default({
        key: 'first_button',
        position: new _phaser.Point(63, 100),
        scale: new _phaser.Point(1, 1)
      });

      this.pauseButtonIcon = new _sprite2.default({
        key: 'ui_pause_icon',
        position: { x: 5, y: -4 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 }
      });
      this.pauseButton.pressed = false;

      this.pauseButton.doOnClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this7.onPauseButtonClick();

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this7);
      }));

      this.pauseButton.addChild(this.pauseButtonIcon);
      this.tuningGroup.addChild(this.pauseButton);

      this.tuningButton = new _button2.default({
        key: 'first_button',
        position: new _phaser.Point(63, 200),
        scale: new _phaser.Point(1.6, 1.6)
      });
      this.tuningButtonIcon = new _sprite2.default({
        key: 'tuning',
        position: { x: 5, y: -4 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 }
      });
      this.tuningButton.pressed2 = false;

      this.tuningButton.doOnClick = function () {
        if (_this7.shopPressed === 0) {
          if (_this7.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (!_this7.tuningButton.pressed2) {
            _this7.tuningButton.pressed2 = true;
            _this7.screen_button.visible = true;
            var tuningButtonTween = game.add.tween(_this7.screen_button.scale).to({ y: 2.4 }, 100, Phaser.Easing.Quadratic.Out, false);
            tuningButtonTween.start();
          } else {
            _this7.tuningButton.pressed2 = false;
            var _tuningButtonTween = game.add.tween(_this7.screen_button.scale).to({ y: 0 }, 100, Phaser.Easing.Quadratic.Out, false);
            _tuningButtonTween.start();
          }
        }
      };

      this.tuningButton.addChild(this.tuningButtonIcon);

      this.tuningGroup.addChild(this.tuningButton);

      this.noiseButtonS = new _button2.default({
        key: 'second_button',
        position: new _phaser.Point(0, 180),
        scale: new _phaser.Point(1, 0.7 * 10 / 12)
      });

      var noiseButtonIcon = new _sprite2.default({
        key: 'sound_on',
        position: { x: 5, y: -4 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 }
      });
      this.noiseButtonS.addChild(noiseButtonIcon);

      this.noiseButtonS.sound_on = true;

      if (_soundManager2.default.instance.sfxSetting === 0) {
        this.noise = false;
        noiseButtonIcon.loadTexture('sound_of');
        this.noiseButtonS.sound_on = false;
      }

      this.noiseButtonS.doOnClick = function () {
        if (_this7.shopPressed === 0) {
          if (_this7.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this7.noiseButtonS.sound_on) {
            _this7.noise = false;
            noiseButtonIcon.loadTexture('sound_of');
            _this7.noiseButtonS.sound_on = false;
            _soundManager2.default.instance.sfxSetting = 0;
          } else {
            _this7.noise = true;
            noiseButtonIcon.loadTexture('sound_on');
            _this7.noiseButtonS.sound_on = true;
            _soundManager2.default.instance.sfxSetting = 1;
          }
        }
      };

      if(window.famobi.hasFeature("external_mute")) {
        this.noiseButtonS.visible = false;
      }
      this.screen_button.addChild(this.noiseButtonS);

      this.musicButtonS = new _button2.default({
        key: 'second_button',
        position: new _phaser.Point(0, 85),
        scale: new _phaser.Point(1, 0.7 * 10 / 12)
      });

      var musicButtonIcon = new _sprite2.default({
        key: 'music_on',
        position: { x: 5, y: -4 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 }
      });
      this.musicButtonS.addChild(musicButtonIcon);

      this.musicButtonS.music_on = true;

      if (_soundManager2.default.instance.bgmSetting === 0) {
        _soundManager2.default.instance.stopSound('main_theme1');
        musicButtonIcon.loadTexture('music_off');
        this.musicButtonS.music_on = false;
      }

      this.musicButtonS.doOnClick = function () {
        if (_this7.shopPressed === 0) {
          if (_this7.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this7.musicButtonS.music_on) {
            _soundManager2.default.instance.stopSound('main_theme1');
            musicButtonIcon.loadTexture('music_off');
            _this7.musicButtonS.music_on = false;
            _soundManager2.default.instance.bgmSetting = 0;
          } else {
            _soundManager2.default.instance.bgmSetting = 1;
            _soundManager2.default.instance.playSound('main_theme1', 1, true);
            musicButtonIcon.loadTexture('music_on');
            _this7.musicButtonS.music_on = true;
          }
        }
      };

      if(window.famobi.hasFeature("external_mute")) {
        this.musicButtonS.visible = false;
      }
      this.screen_button.addChild(this.musicButtonS);

      this.vibroButtonS = new _button2.default({
        key: 'second_button',
        position: new _phaser.Point(0, window.famobi.hasFeature("external_mute") ? 85 : 275),
        scale: new _phaser.Point(1, 0.7 * 10 / 12)
      });

      var vibroButtonIcon = new _sprite2.default({
        key: _this7.vibro ? 'icon_vibration' : 'icon_vibration_off',
        position: { x: 5, y: -4 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 }
      });
      this.vibroButtonS.addChild(vibroButtonIcon);

      this.vibroButtonS.doOnClick = function () {
        if (_this7.shopPressed === 0) {
          if (_this7.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this7.vibro) {
            _this7.vibro = false;
            vibroButtonIcon.loadTexture('icon_vibration_off');
            _famobiApi2.default.instance.setLocalStorageItem('vibro', '0');
          } else {
            _this7.vibro = true;
            vibroButtonIcon.loadTexture('icon_vibration');
            _famobiApi2.default.instance.setLocalStorageItem('vibro', '1');
          }
        }
      };

      this.screen_button.addChild(this.vibroButtonS);
    }
  }, {
    key: 'onPauseButtonClick',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _famobiApi2.default.instance.onPause();

              case 2:
                if (!(this.routingSuperStartButton === 'logo' || this.routingSuperStartButton === 'logo1' || this.routingSuperStartButton === 'levelComplete')) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt('return');

              case 4:
                this.pauseButton.visible = false;
                this.player.animations.stop(0);
                if (this.shopPressed === 0) {
                  if (this.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
                  // if (this.pauseButton.pressed === false) {
                  // this.pauseButton.alpha = 0.4;
                  this.prevRoutingValue = this.routingSuperStartButton;
                  this.routingSuperStartButton = 'pause';
                  if (this.prevRoutingValue === 'within' && !this.freeze) {
                    this.offBallphysic2();
                  }
                  // /this.pauseButton.pressed = true;
                  this.stop = true;
                  // if (!this.pauseBack) {
                  this.createPauseScreen();
                  // } else {
                  // this.pauseBack.visible = true;
                  // }
                }

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onPauseButtonClick() {
        return _ref5.apply(this, arguments);
      }

      return onPauseButtonClick;
    }()
  }, {
    key: 'createShopGroup',
    value: function createShopGroup() {
      var _this8 = this;

      this.shopGroup = this.game.add.group();

      this.shopGroup.x = this.groupUpgrades.x + 720 * this.groupUpgrades.scale.x / 2 - 179 * 0.75 * this.shopGroup.scale.x;
      this.shopGroup.y = this.groupUpgrades.y - 251 * this.groupUpgrades.scale.y * 1.7;

      this.playerSkinButton = new _button2.default({
        key: 'greenbutton',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(0, 240),
        scale: new _phaser.Point(1.3, 1.3)
      });

      this.playerSkinButton.doOnClick = function () {
        // if (this.routingSuperStartButton === 'logo' || this.routingSuperStartButton === 'logo1') return;
        if (_this8.stopShops) {
          _this8.shopGroup.visible = false;
          return;
        }
        if (_this8.routingSuperStartButton !== 'pause' && _this8.shopPressed === 0) {
          if (_this8.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          _this8.groupUpgrades.visible = false;
          _this8.shopPressed = 2;
          _this8.createShops('player');
        }
      };
      this.shopGroup.addChild(this.playerSkinButton);
      var playerSkinButtonIcon = new _sprite2.default({
        key: 'icon_carts',
        position: { x: 7, y: -14 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1.1, y: 1.1 }
      });
      this.playerSkinButton.addChild(playerSkinButtonIcon);
    }
  }, {
    key: 'changeTheme',
    value: function changeTheme() {
      var numberTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.background.loadTexture('background' + numberTheme);
      this.frontground.loadTexture('frontground' + numberTheme);
      this.topground.visible = false; // true;
    }
  }, {
    key: 'createImage',
    value: function createImage() {
      this.group.add(new _squareMask2.default(new _phaser.Point(0, Math.random() * 10 * 102), new _phaser.Point(100, 100)));
      this.group.scrollview.onGroupChange();
    }
  }, {
    key: 'fireNew',
    value: function fireNew(bulletsPerSec) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1500;

      // // изменения огневого апгрейда помечены четырьмя палками
      if (!this.stop) {
        var numberOfBullets = 1;

        if (this.bulletsPerSec > 20) {
          this.rowBullets += 1;
          if (this.rowBullets > 20) this.rowBullets = 1;
        } else {
          this.rowBullets = 0;
        }
        if (this.rowBullets > 0) {
          numberOfBullets = this.matrixBullet[this.rowBullets - 1];
        } else {
          numberOfBullets = 1;
        }

        for (var i = 0; i < numberOfBullets; i += 1) {
          _soundManager2.default.instance.playSound('throw', 1, false, this.noise);
          var bullet = new _sprite2.default({
            key: 'pickaxe' + this.kindOfBullet,
            position: {
              x: this.player0.x + 60 * i - (numberOfBullets * (30 + 30) - 30) / 2 + 30 / 2,
              y: this.player0.y - 150
            },
            anchor: { x: 0.5, y: 0.5 },
            scale: { x: 0.6, y: 0.6 }
          });
          bullet.get = false;

          if (this.helper) {
            var bullet2 = new _sprite2.default({
              key: 'pickaxe' + this.kindOfBullet,
              position: { x: this.player0.x - Math.sign(this.player0.scale.x) * 120, y: -100 },
              anchor: { x: 0.5, y: 0.5 },
              scale: { x: 0.6, y: 0.6 }
            });
            bullet2.get = false;
            this.game.physics.arcade.enableBody(bullet2);
            bullet2.body.position.y = 3999;
            bullet2.body.position.x = -3999;
            bullet2.body.offset.x = this.bulletOffsetX;
            bullet2.body.offset.y = this.bulletOffsetY;
            bullet2.body.setCircle(this.scaleBulletRadius);
            bullet2.body.velocity.y = speed;
            _soundManager2.default.instance.playSound('throw', 1, false, this.noise);
            var rotateBullet2 = game.add.tween(bullet2).to({ rotation: 500 }, 100000, Phaser.Easing.Quadratic.Out, false);
            rotateBullet2.start();
            _statistics2.default.instance.increment('bullets_spawned');
            this.bullets.add(bullet2);
          }

          this.game.physics.arcade.enableBody(bullet);
          bullet.body.position.y = 3999;
          bullet.body.position.x = -3999;
          bullet.body.offset.x = this.bulletOffsetX;
          bullet.body.offset.y = this.bulletOffsetY;
          bullet.body.setCircle(this.scaleBulletRadius);
          bullet.body.velocity.y = speed;
          var rotateBullet = game.add.tween(bullet).to({ rotation: 500 }, 100000, Phaser.Easing.Quadratic.Out, false);
          rotateBullet.start();
          _statistics2.default.instance.increment('bullets_spawned');
          this.bullets.add(bullet);
        }
      }
    }
  }, {
    key: 'snake',
    value: function snake(bullet, ball) {
      if (ball.x < this.leftBounds.x - this.group.x - ball.texture.width / this.group.scale.x || ball.x > this.rightBounds.x - this.group.x + ball.texture.width / this.group.scale.x) {
        switch (ball.size) {
          case 'big':
            this.ballsOnLevelNow -= 7;
            break;
          case 'powerup':
            this.ballsOnLevelNow -= 1;
            this.flyUp = false;
            break;
          case 'medium':
            this.ballsOnLevelNow -= 3;
            break;
          default:
            this.ballsOnLevelNow -= 1;
        }
        ball.body.destroy();
        ball.kill();
        this.balls.removeChild(ball);
        return;
      }

      this.group.rotation = 0;
      var gradeOfShaking = 0.002;
      switch (ball.size) {
        case 'big':
          gradeOfShaking = 0.005;
          _soundManager2.default.instance.playSound('stone_bounce', 5, false, this.noise);
          break;
        case 'powerup':
          gradeOfShaking = 0.003;
          _soundManager2.default.instance.playSound('stone_bounce', 5, false, this.noise);
          break;
        case 'medium':
          gradeOfShaking = 0.003;
          _soundManager2.default.instance.playSound('stone_bounce', 3, false, this.noise);
          break;
        default:
          gradeOfShaking = 0.002;
          _soundManager2.default.instance.playSound('stone_bounce', 1, false, this.noise);
      }
      var shakeTween = game.add.tween(this.group).to({ rotation: gradeOfShaking }, 100).to({ rotation: -gradeOfShaking }, 100).to({ rotation: 0 }, 100, Phaser.Easing.Quadratic.Out, false);
      shakeTween.start();
      shakeTween.onComplete.add(function () {
        shakeTween.stop();
      });
      var shakeTween2 = game.add.tween(this.groupBase).to({ rotation: gradeOfShaking }, 100).to({ rotation: -gradeOfShaking }, 100).to({ rotation: 0 }, 100, Phaser.Easing.Quadratic.Out, false);
      shakeTween2.start();
      shakeTween2.onComplete.add(function () {
        shakeTween2.stop();
      });
      var shakeTween3 = game.add.tween(this.groupBase2).to({ rotation: gradeOfShaking }, 100).to({ rotation: -gradeOfShaking }, 100).to({ rotation: 0 }, 100, Phaser.Easing.Quadratic.Out, false);
      shakeTween3.start();
      shakeTween3.onComplete.add(function () {
        shakeTween3.stop();
      });

      var coeffJump = game.width / game.height;
      if (coeffJump < 1) coeffJump = -1;
      if (coeffJump > 1.5) coeffJump = -1.2;

      // if (ball.after) {
      //   ball.after = false;
      //   if (ball.size === 'small') ball.body.velocity.y = -Math.sqrt(1.2 * game.height * ball.body.gravity.y / 1.17);
      //   if (ball.size === 'medium') ball.body.velocity.y = -Math.sqrt(1.3 * game.height * ball.body.gravity.y / 1.1);
      //   if (game.width > game.height) {
      //     if (ball.size === 'small') ball.body.velocity.y = coeffJump
      //       * Math.sqrt(1.2 * game.height * ball.body.gravity.y / 1.17);
      //     if (ball.size === 'medium') ball.body.velocity.y = coeffJump
      //       * Math.sqrt(1.3 * game.height * ball.body.gravity.y / 1.25) * 0.95;
      //   }
      // }

      var velocityAdd = 0;
      switch (ball.size) {
        case 'big':
          velocityAdd = 10;
          break;
        case 'medium':
          velocityAdd = 15.1;
          break;
        case 'small':
          velocityAdd = 16.25;
          break;
        default:
          velocityAdd = 10;
      }

      if (ball.freezed) {
        if (!this.freezeNew) ball.freezed = false;
        ball.body.velocity.y = -1.3 * Math.sqrt(Math.abs(this.chooseHigh(ball.size)) * ball.body.gravity.y); // под вопросом вычисление гравити
        if (game.width > game.height) ball.body.velocity.y *= 0.9;
        // if (ball.size === 'small') ball.body.velocity.y = -Math.sqrt(1.2 * game.height * ball.body.gravity.y / 1.17);
        // if (ball.size === 'medium') ball.body.velocity.y = -Math.sqrt(1.3 * game.height * ball.body.gravity.y / 1.1);
        // if (ball.size === 'big') ball.body.velocity.y = -Math.sqrt(1.3 * game.height * ball.body.gravity.y / 1.1);
        // if (game.width > game.height) {
        //   if (ball.size === 'small') ball.body.velocity.y = coeffJump
        //     * Math.sqrt(1.2 * game.height * ball.body.gravity.y / 1.17);
        //   if (ball.size === 'medium') ball.body.velocity.y = coeffJump
        //     * Math.sqrt(1.3 * game.height * ball.body.gravity.y / 1.25);
        //   if (ball.size === 'big') ball.body.velocity.y = coeffJump
        //     * Math.sqrt(1.3 * game.height * ball.body.gravity.y / 1.1);
        // }
      }

      ball.body.velocity.y = -Math.abs(ball.body.velocity.y) - velocityAdd;
    }
  }, {
    key: 'snake3',
    value: function snake3(bound, ball) {
      if (!ball.tweened) return;
      if (bound.top === true) {
        ball.body.velocity.y = -Math.abs(ball.body.velocity.y);
      } else {
        if (bound === this.rightBounds) ball.body.velocity.x = -Math.abs(ball.body.velocity.x);
        if (bound === this.leftBounds) ball.body.velocity.x = Math.abs(ball.body.velocity.x);
      }
      // if (ball.fromRight && bound === this.leftBounds) {
      //   ball.fromRight = false;
      //   ball.body.velocity.x = -ball.body.velocity.x;
      // } else if (!ball.fromRight && bound === this.rightBounds) {
      //   ball.fromRight = true;
      //   ball.body.velocity.x = -ball.body.velocity.x;
      // }
    }
  }, {
    key: 'snake5',
    value: function snake5(bound, ball) {
      ball.body.velocity.x = -ball.body.velocity.x;
    }
  }, {
    key: 'snake4',
    value: function snake4(bound, upgrade) {
      upgrade.y -= 5;
      upgrade.body.velocity.y = 0;
      upgrade.body.gravity = 0;
    }
  }, {
    key: 'snake2',
    value: function snake2(bullet, ball) {
      // ball.body.velocity.y = 0;
      if (this.coinRain) {
        var coeff = 0.4;
      } else {
        var _coeff = 1;
      }
      ball.countfall += 1;
      if (ball.countfall < 4) {
        ball.body.velocity.x = 0;
        ball.body.velocity.y = -0.5 * Math.abs(ball.body.velocity.y);
      } else {
        ball.body.velocity.y = 0;
        ball.body.gravity.y = 0;
        ball.y = this.bottomBounds.y - 20;
        // if (this.bottomBounds) {
        //   ball.y = this.bottomBounds.y;
        // }
      }
    }
  }, {
    key: 'snake22',
    value: function snake22(bullet, ball) {
      if (ball.countfall === -1) return;
      // if (game.height > game.width) {
      //   if (ball.x < -game.width / 2 || ball.x > game.width / 2 || ball.y > bullet.y + 50) {
      //     this.coinGroup.remove(ball);
      //     if (ball.body) ball.body.destroy();
      //     ball.kill();
      //     return;
      //   }
      // }

      ball.countfall += 1;
      var coeff = 1;
      if (this.coinRain) {
        coeff = Math.random() * 0.8;
      }
      if (ball.countfall < 4) {
        ball.body.velocity.x = 0;
        ball.body.velocity.y = -0.5 * Math.abs(ball.body.velocity.y) * coeff;
      } else {
        ball.body.velocity.y = 0;
        ball.body.gravity.y = 0;
        //      ball.y = this.bottomBounds.y;
        ball.countfall = -1;
      }
    }
  }, {
    key: 'coinSpawn',
    value: function coinSpawn(x, y) {
      var _this9 = this;

      var coordX = x;
      var coordY = y;

      var whatCoinAwailable = Math.ceil(this.level / 2);
      if (whatCoinAwailable === 1) {
        whatCoinAwailable = 'coin1';
      } else {
        if (whatCoinAwailable > 5) whatCoinAwailable = 5;
        var probabilityCoin = Math.random();
        var coinKind = this.coinProbabilityMatrix[whatCoinAwailable].length;
        for (var i = 0; i < coinKind; i += 1) {
          if (probabilityCoin < this.coinProbabilityMatrix[whatCoinAwailable][i]) {
            coinKind = whatCoinAwailable - i;
            break;
          }
        }
        whatCoinAwailable = 'coin' + coinKind;
      }

      var numberOfCoin = void 0;
      switch (whatCoinAwailable) {
        case 'coin1':
          {
            numberOfCoin = 1;
            break;
          }
        case 'coin2':
          {
            numberOfCoin = 3;
            break;
          }
        case 'coin3':
          {
            numberOfCoin = 5;
            break;
          }
        case 'coin4':
          {
            numberOfCoin = 10;
            break;
          }
        case 'coin5':
          {
            numberOfCoin = 25;
            break;
          }
        default:
          {
            numberOfCoin = 100;
            break;
          }
      }

      var _loop2 = function _loop2(_i) {
        var coin = new _sprite2.default({
          key: 'coinicon3',
          position: { x: coordX, y: coordY },
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: 0.6, y: 0.6 }
        });

        coin.taken = false;

        coin.number = 1;

        coin.toBase = game.add.tween(coin).to({ alpha: 0 }, 50);

        coin.toBase.onComplete.add(function (item) {
          _this9.coins += Math.ceil(item.number * _this9.coinMulti);
          _this9.coinBase.text = _this9.rounder(_this9.coins);
          _this9.coinGroup.remove(item);
          if (item.body) item.body.destroy();
          if (item) item.kill();
          _statistics2.default.instance.increment('coins_catched');
        });

        _statistics2.default.instance.increment('coins_spawned');
        _this9.coinGroup.add(coin);

        coin.countfall = 0;
        _this9.game.physics.arcade.enableBody(coin);
        coin.body.x = coin.x;
        coin.body.y = coin.y;

        coin.body.gravity.y = 500;
        coin.body.velocity.x = Math.sign(Math.random() - 0.45) * 150 * Math.random();
        coin.body.velocity.y = Math.sign(Math.random() - 0.45) * 40 * Math.random();
        coin.body.bounce.set(1, 1);

        var coinFirstTween = game.add.tween(coin).to({ y: coordY - 1 }, 1);

        coinFirstTween.onComplete.add(function () {
          coin.body.collideWorldBounds = true;
        });

        coinFirstTween.start();

        var coinTween = game.add.tween(coin).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200);

        coinTween.delay(7000);

        coinTween.onComplete.add(function (item) {
          _this9.coinGroup.remove(item);
          if (item.body) item.body.destroy();
          item.kill();
        });
        coinTween.start();
      };

      for (var _i = 0; _i < numberOfCoin; _i += 1) {
        _loop2(_i);
      }
    }

    //   coinSpawn(x, y) { ///it is a variant with different color of the coin

    //     const coordX = x;
    //     const coordY = y;

    //     let whatCoinAwailable = Math.ceil(this.level / 2);
    //     if (whatCoinAwailable === 1) {
    //       whatCoinAwailable = 'coin1';
    //     } else {
    //       if (whatCoinAwailable > 5) whatCoinAwailable = 5;
    //       const probabilityCoin = Math.random();
    //       let coinKind = this.coinProbabilityMatrix[whatCoinAwailable].length;
    //       for (let i = 0; i < coinKind; i += 1) {
    //         if (probabilityCoin < this.coinProbabilityMatrix[whatCoinAwailable][i]) {
    //           coinKind = whatCoinAwailable - i;
    //           break;
    //         }
    //       }
    //       whatCoinAwailable = `coin${coinKind}`;

    //     }

    //     const coin = new Sprite({
    //       key: whatCoinAwailable,
    //       position: { x: coordX, y: coordY },
    //       anchor: { x: 0.5, y: 0.5 },
    //       scale: { x: 1, y: 1 },
    //     });

    //     coin.taken = false;

    //     coin.toBase = game.add.tween(coin)
    //       .to({ alpha: 0 }, 50);

    //     coin.toBase.onComplete.add((item) => {
    //       this.coins += Math.ceil(item.number * this.coinMulti);
    //       this.coinBase.text = this.rounder(this.coins);
    //       this.coinGroup.remove(item);
    //       if (item.body) item.body.destroy();
    //       if (item) item.kill();
    //     });

    //     switch (whatCoinAwailable) {
    //       case 'coin1': {
    //         coin.number = 1;
    //         break;
    //       }
    //       case 'coin2': {
    //         coin.number = 3;
    //         break;
    //       }
    //       case 'coin3': {
    //         coin.number = 5;
    //         break;
    //       }
    //       case 'coin4': {
    //         coin.number = 10;
    //         break;
    //       }
    //       case 'coin5': {
    //         coin.number = 25;
    //         break;
    //       }
    //       default: {
    //         coin.number = 100;
    //         break;
    //       }
    //     }

    //     this.coinGroup.add(coin);


    //     coin.countfall = 0;
    //     this.game.physics.arcade.enableBody(coin);
    //     coin.body.x = coin.x;
    //     coin.body.y = coin.y;

    //     coin.body.gravity.y = 500;
    //     coin.body.velocity.x = Math.sign(Math.random() - 0.45) * 150;
    //     coin.body.bounce.set(1, 1);
    // //    coin.body.collideWorldBounds = true;

    //     const coinFirstTween = game.add.tween(coin)
    //       .to({ y: coordY - 1 }, 1);

    //     coinFirstTween.onComplete.add(() => {
    //       coin.body.collideWorldBounds = true;
    //     });

    //     coinFirstTween.start();

    //     const coinTween = game.add.tween(coin)
    //       .to({ alpha: 0 }, 200)
    //       .to({ alpha: 1 }, 200)
    //       .to({ alpha: 0 }, 200)
    //       .to({ alpha: 1 }, 200)
    //       .to({ alpha: 0 }, 200)
    //       .to({ alpha: 0 }, 200)
    //       .to({ alpha: 1 }, 200)
    //       .to({ alpha: 0 }, 200)
    //       .to({ alpha: 1 }, 200)
    //       .to({ alpha: 0 }, 200);

    //     coinTween.delay(7000);

    //     coinTween.onComplete.add((item) => {
    //       this.coinGroup.remove(item);
    //       if (item.body) item.body.destroy();
    //       item.kill();
    //     });
    //     coinTween.start();
    //   }


  }, {
    key: 'diamondSpawn',
    value: function diamondSpawn(x, y) {
      var _this10 = this;

      var coordX = x;
      var coordY = y;

      var diamond = new _sprite2.default({
        key: 'diamondicon3',
        position: { x: x, y: y },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.65, y: 0.65 }
      });

      this.diamondGroup.addChild(diamond);

      diamond.number = 1;

      diamond.countfall = 0;
      this.game.physics.arcade.enableBody(diamond);
      diamond.body.gravity.y = 800;
      diamond.body.velocity.x = Math.sign(Math.random() - 0.45) * 200;
      diamond.body.bounce.set(1, 1);

      var diamondFirstTween = game.add.tween(diamond).to({ y: coordY - 1 }, 1);

      diamondFirstTween.onComplete.add(function () {
        diamond.body.collideWorldBounds = true;
      });

      diamondFirstTween.start();

      diamond.toBase = game.add.tween(diamond).to({ alpha: 0 }, 50);

      diamond.toBase.onComplete.add(function (item) {
        _this10.diamonds += item.number;
        _this10.diamondGroup.remove(item);
        if (item.body) item.body.destroy();
        if (item) item.kill();
        _this10.diamondBase.text = _this10.diamonds;
        _statistics2.default.instance.increment('diamonds_catched');
      });

      var diamondTween = game.add.tween(diamond).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200);

      diamondTween.delay(7000);

      _statistics2.default.instance.increment('diamonds_spawned');
      diamondTween.onComplete.add(function (item) {
        _this10.diamondGroup.remove(item);
        if (item.body) item.body.destroy();
        item.kill();
      });
      diamondTween.start();
    }
  }, {
    key: 'crash',
    value: function crash(x, y, colorOfPieces) {
      var _this11 = this;

      var scalePiece = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      var numberOfPieces = Math.round(Math.random() * 4) + 1;
      for (var i = 0; i < numberOfPieces; i += 1) {
        var crashPiece = new _sprite2.default({
          key: colorOfPieces,
          position: { x: x + 10 * Math.random(), y: y - 40 * Math.random() },
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: scalePiece * (0.14 + Math.random() / 8), y: scalePiece * (0.14 + Math.random() / 8) }
        });
        crashPiece.rotation = 2 * Math.PI * Math.random();
        this.group.addChild(crashPiece);
        var pieceTween = game.add.tween(crashPiece).to({
          x: x - 100 + Math.round(Math.random() * 200),
          y: y - Math.round(Math.random() * 150 - 30)
        }, 100 * Math.random()).to({ y: y }, 50 * Math.random(), Phaser.Easing.Quadratic.Out, false);
        pieceTween.onComplete.add(function (item) {
          game.tweens.removeFrom(item);
          _this11.group.removeChild(item);
          item.kill();
        });
        pieceTween.start();
      }
    }
  }, {
    key: 'hitting',
    value: function hitting(bullet, ball) {
      var shield = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!ball.tweened || ball.used) return;

      _soundManager2.default.instance.playSound('10', 3, false, this.noise);

      if (ball.size !== 'powerup') ball.shakeHit.start();

      if (!shield) {
        bullet.y = -2 * this.group.y; // it is for deletingbullet and destroy bullet.body
      }

      this.score += Math.ceil(this.damage);
      window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: this.score});

      _famobiApi2.default.instance.trackingLevelUpdate(this);

      this.scoreText.text = this.rounder(this.score);

      if (ball.size !== 'powerup') {
        if (ball.lives > 13) {
          this.crash(ball.x, ball.y, 'pt_blue');
        } else if (ball.lives > 6) {
          this.crash(ball.x, ball.y, 'pt_red');
        } else if (ball.lives <= 6) {
          this.crash(ball.x, ball.y, 'pt_green');
        }
      } else if (ball.grow === -1) {
        this.crash(ball.x, ball.y, 'pt_powerup', 1.4);
      } else {
        this.crash(ball.x, ball.y, 'pt_powerup');
      }

      ball.lives -= this.damage;
      ball.lives = Math.round(ball.lives);

      if (ball.lives < 0) {
        ball.lives = 0;
      }
      ball.children[0].text = ball.lives.toFixed(0);

      if (ball.size !== 'powerup') {
        if (ball.lives < 6 && ball.lives + this.damage > 5) {
          ball.loadTexture('e_' + ball.size + '_g');
          ball.children[0].style.fill = '#095A1E';
        } else if (ball.lives < 12 && ball.lives + this.damage > 11) {
          ball.loadTexture('e_' + ball.size + '_r');
          ball.children[0].style.fill = ' #7B1414';
        }
      } else if (ball.grow !== -1) {
        if (ball.lives < ball.grow && ball.grow !== -1) {
          ball.scale.x = 1.5;
          ball.scale.y = ball.scale.x;
          ball.rotation = 0;
          ball.loadTexture('powerup_cracked2');
          ball.scale.x = 1;
          ball.scale.y = ball.scale.x;
          if (game.width > game.height) {
            if (game.device.desktop) {
              ball.body.setCircle(this.chooseRadius('powerup') * 1.5);
            } else {
              ball.body.setCircle(this.chooseRadius('powerup') * 1.5);
            }
          } else {
            ball.body.setCircle(this.chooseRadius('powerup') * 2);
          }

          ball.grow = -1;
        } else {
          ball.scale.x = 1.5 - 0.625 * Math.abs(ball.lives - ball.grow) / (5 * ball.grow);
          ball.scale.y = ball.scale.x;
          if (game.width > game.height) {
            ball.body.setCircle(this.chooseRadius('powerup') * ball.scale.x * 0.6);
            // ball.body.offset.y -= 1.2;
            ball.body.offset.y = 0;
          } else {
            ball.body.setCircle(this.chooseRadius('powerup') * ball.scale.x);
            ball.body.offset.y -= 0.5;
          }
        }
      }

      if (ball.lives === 0) {
        _statistics2.default.instance.increment('rocks_destroyed');
        ball.used = true;
        if (Math.random() < 0.3) this.exclaim(ball.x, ball.y);
        if (ball.size === 'powerup' && !this.upgradeIs) {
          this.upgradeIs = true;
          this.flyUp = false;
          this.upHop(ball.x, ball.y);
        }

        this.ballsKilled += 1;
        this.levelBarFull.scale.x += 1 / this.ballsOnLevel;

        if (ball.size !== 'powerup') {
          if (Math.random() > 0.15) {
            this.coinSpawn(ball.x, ball.y);
          } else {
            this.diamondSpawn(ball.x, ball.y);
          }
          if (ball.size !== 'small') {
            ball.velocityY = ball.body.velocity.y;
            var tempX = ball.x + 50;
            var tempY = ball.y;
            if (ball.size === 'big') {
              this.createBall('medium', tempX, tempY, 'right', Math.round(Math.random() * this.maxLivesOnLevel + 1), true, 60, ball.body.velocity.y);
              this.createBall('medium', tempX - 100, tempY, 'left', Math.round(Math.random() * this.maxLivesOnLevel + 1), true, 60, ball.body.velocity.y);
            } else {
              this.createBall('small', tempX, tempY, 'right', Math.round(Math.random() * this.maxLivesOnLevel + 1), true, 40, ball.body.velocity.y);
              this.createBall('small', tempX - 100, tempY, 'left', Math.round(Math.random() * this.maxLivesOnLevel + 1), true, 40, ball.body.velocity.y);
            }
          }
        }
        if (ball) this.balls.remove(ball);
        if (ball.body) ball.body.destroy();
        if (ball) ball.kill();

        _famobiApi2.default.instance.trackingLevelUpdate(this);

        if (this.ballsKilled === this.ballsOnLevel) {
          this.levelComplete = true;
          this.takeLose();
        }
      }
    }
  }, {
    key: 'takeLose',
    value: function takeLose() {
      this.coinGroup.forEach(function (item) {
        item.toBase.start();
      }, this);

      this.diamondGroup.forEach(function (item) {
        item.toBase.start();
      }, this);

      this.tempAll = true;
    }
  }, {
    key: 'exclaim',
    value: function exclaim(x, y) {
      var last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      // const color =  this.exclaimColor[Math.floor(Math.random() * this.exclaimColor.length)];
      var color = 'white';
      var coefScale = 1;
      if (last) {
        x = game.width / 2 - this.group.x;
        y = game.height / 2 - this.group.y;
        coefScale = 2;
      }
      var exclaimText = new _text2.default({
        text: this.exclaimMatrix[Math.floor(Math.random() * this.exclaimMatrix.length)],
        position: { x: x, y: y },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0, y: 0 },
        fontSize: 42,
        fontName: 'blambot',
        color: color,
        stroke: '#000000'
      });

      this.exclaimText = exclaimText;

      if (last) {
        exclaimText.text = window.famobi.__('LAST BALL!!!');
        exclaimText.size = 50;
      }

      this.group.addChild(exclaimText);

      var scaleTween = game.add.tween(exclaimText.scale).to({ x: 1, y: 1 }, 100);

      var exclaimTween = void 0;
      var chooseExclaim = Math.floor(Math.random() * 3);
      // const chooseExclaim = 2

      switch (chooseExclaim) {
        case 0:
          exclaimTween = game.add.tween(exclaimText).to({ y: y - 5 }, 20).to({ rotation: Math.PI / 6 }, 10).to({ rotation: -Math.PI / 6 }, 20).to({ rotation: 0 }, 10);

          break;
        case 1:
          exclaimTween = game.add.tween(exclaimText).to({ x: x + 5, y: y - 5 }, 50).to({ rotation: 6 * Math.PI }, 250);

          break;
        default:
          exclaimTween = game.add.tween(exclaimText).to({ x: x - 5, y: y - 5 }, 50).to({ rotation: -6 * Math.PI }, 250);
      }
      var scaleEndTween = game.add.tween(this.exclaimText.scale).to({ x: 0, y: 0 }, 100, null, false, 400 + 700 * (coefScale - 1));

      scaleEndTween.onComplete.add(function () {
        exclaimText.destroy();
      });

      scaleTween.chain(exclaimTween);
      exclaimTween.chain(scaleEndTween);

      scaleTween.start();
    }
  }, {
    key: 'takeCoin',
    value: function takeCoin(player, coin) {
      if (coin.taken) return;
      _soundManager2.default.instance.playSound('collect_coin', 1, false, this.noise);
      coin.taken = true;
      coin.toBase.start();
    }
  }, {
    key: 'takeDiamond',
    value: function takeDiamond(player, diamond) {
      _soundManager2.default.instance.playSound('collect_coin', 1, false, this.noise);
      diamond.toBase.start();
    }
  }, {
    key: 'offUp',
    value: function offUp() {
      if (this.freezeNew) {
        this.freezeNew = false;
        if (this.overlay) {
          game.tweens.removeFrom(this.overlay);
          var disappear = game.add.tween(this.overlay).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
        }
        this.freezeBallOff();
      }

      if (this.freeze) {
        this.onBallphysic();
        this.ballUnderFreeze = false;
      }

      this.fireUp = false;
      this.createBulletMatrix(this.bulletsPerSec);
      this.player.animations.stop(0);
      this.player.loadTexture('miner' + this.player.number + 'throw');
      this.player.play('goon', this.bulletsPerSec * 10, true);
      this.player.y = this.playerArray[this.player.number][1];
      this.player.idle = false;

      this.freeze = false;
      this.ballUnderFreeze = false;
      if (this.shield) {
        this.offshield();
      }
      this.shield = false;
      if (this.coinRainVariable) {
        this.offCoin();
      }
      this.coinRainVariable = false;

      if (this.helper) {
        this.offHelper();
      }
      this.helper = false;
      this.playerAdd.visible = false;
      this.timeForUp = -1;
    }
  }, {
    key: 'offCoin',
    value: function offCoin() {
      this.coinGroup.removeAll(true);
    }
  }, {
    key: 'offHelper',
    value: function offHelper() {
      // this.helperPlayer.visible = false;
      this.helper = false;
      this.playerAdd.visible = false;
    }
  }, {
    key: 'createFreezeOverlay',
    value: function createFreezeOverlay() {
      this.overlay = new _sprite2.default({
        key: 'freeze',
        position: { x: game.width / 2, y: 0 },
        anchor: { x: 0.5, y: 0 },
        scale: {
          x: 1.01 * game.width / 473,
          y: game.height / 750
        }
      });
      if (game.width > game.height) {
        this.overlay.scale.x = Math.abs(this.rightBounds.x - this.leftBounds.x) / 473;
      }

      this.overlay.alpha = 0;

      this.groupBase3.add(this.overlay);
    }
  }, {
    key: 'takeUp',
    value: function takeUp(player, up) {
      _soundManager2.default.instance.playSound('up_collect', 3, false, this.noise);
      if (this.vibro) _vibroManager2.default.instance.vibrate();
      this.upgradeIs = true;
      this.timeForUp = 0;
      switch (up.kind) {
        case 1:
          {
            this.fireUp = true;
            this.createBulletMatrix(this.bulletsPerSec + 5);
            this.player.animations.stop(0);
            this.player.loadTexture('miner' + this.player.number + 'fast');
            this.player.y = this.playerArray[this.player.number][2];
            this.player.idle = false;
            this.player.play('goon', this.bulletsPerSec * 10, true);
            _statistics2.default.instance.increment('powerup_fire');
            break;
          }
        case 2:
          {
            // this.freeze = true;
            // this.offBallphysic();
            this.freezeNew = true;
            game.tweens.removeFrom(this.overlay);
            var appear = game.add.tween(this.overlay).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.freezeBall();
            _statistics2.default.instance.increment('powerup_freeze');

            break;
          }
        case 3:
          {
            this.shield = true;
            this.onShield();
            _statistics2.default.instance.increment('powerup_shield');

            break;
          }
        case 4:
          {
            this.createHelper();
            _statistics2.default.instance.increment('powerup_helper');

            break;
          }
        default:
          this.coinRain(this.player0.x, this.player0.y);
          _statistics2.default.instance.increment('powerup_coinrain');
      }

      if (up) this.upgradeSmallGroup.remove(up);
      if (up.body) up.body.destroy();
      if (up) up.kill();
      this.upgradeIs = true;
    }
  }, {
    key: 'createHelper',
    value: function createHelper() {
      // if (!this.helperPlayer) {
      //   this.helperPlayer = new Sprite({
      //     key: 'player2',
      //     position: { x: this.player0.x + 100, y: this.player0.y },
      //     anchor: { x: 0.5, y: 0.865 },
      //     anchorX: 0.5,
      //     anchorY: 1,
      //     scale: { x: 0.6, y: 0.6 },
      //   });
      //   this.helperPlayer.alpha = 0;
      //   this.helper = true;
      //   this.playerAdd.visible = true;
      //   this.group.add(this.helperPlayer);
      //   this.group.add(this.player0);
      // } else {
      //   this.helperPlayer.visible = true;
      //   this.helper = true;
      //   this.playerAdd.visible = true;
      //   this.helperPlayer.alpha = 0;
      // }
      this.helper = true;
      this.playerAdd.visible = true;
    }
  }, {
    key: 'onShield',
    value: function onShield() {
      if (!this.shieldSprite) {
        this.shieldSprite = new _sprite2.default({
          key: 'shield2',
          position: { x: this.player0.x, y: this.player0.y - 100 },
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: 3, y: 3 }
        });
        this.group.add(this.shieldSprite);
        var p = game.add.tween(this.shieldSprite).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true).loop();
        p.start();
      } else {
        this.shieldSprite.visible = true;
      }
    }
  }, {
    key: 'offshield',
    value: function offshield() {
      if (this.shieldSprite) {
        this.shieldSprite.visible = false;
      }
    }
  }, {
    key: 'coinRain',
    value: function coinRain() {
      var _this12 = this;

      // const emitter1 = game.add.emitter(game.world.centerX - 400, -1000, 50);
      // emitter1.makeParticles('e_mini_r');
      // emitter1.start(false, 0, 1, 0, false);
      // this.group.add(emitter1);
      // const emitter2 = game.add.emitter(game.world.centerX - 400, -1000, 50);
      // emitter2.makeParticles('e_mini_b');
      // emitter2.start(false, 0, 1, 0, false);
      // this.group.add(emitter2);
      // const emitter3 = game.add.emitter(game.world.centerX - 400, -1000, 50);
      // emitter3.makeParticles('e_mini_g');
      // emitter3.start(false, 0, 1, 0, false);
      // this.group.add(emitter3);

      this.coinRainVariable = true;

      var _loop3 = function _loop3(j) {
        var _loop4 = function _loop4(i) {
          var leftcorner = -game.width / 2;
          var rightcorner = game.width;
          if (game.width > game.height) {
            leftcorner = _this12.leftBounds.x - _this12.group.x + 5;
            rightcorner = _this12.rightBounds.x - _this12.leftBounds.x - 5;
          }
          var coin = new _sprite2.default({
            key: 'coinicon3',
            position: {
              x: leftcorner + Math.random() * rightcorner,
              y: _this12.player0.y - 1000 - j * 30 + Math.round(Math.random() * 100)
            },
            anchor: { x: 0.5, y: 0.5 },
            scale: { x: 0.6, y: 0.6 }
          });

          coin.toBase = game.add.tween(coin).to({ alpha: 0 }, 50);

          coin.toBase.onComplete.add(function (item) {
            _this12.coins += Math.ceil(item.number * _this12.coinMulti);
            _this12.coinGroup.remove(item);
            if (item.body) item.body.destroy();
            _this12.coinBase.text = _this12.rounder(_this12.coins);
            if (item) item.kill();
            _statistics2.default.instance.increment('coins_catched');
          });

          coin.countfall = 0;
          coin.number = 1;
          coin.taken = false;
          _this12.game.physics.arcade.enableBody(coin);
          coin.body.setCircle(10);
          coin.body.bounce.set(1, 1);
          coin.body.collideWorldBounds = true;

          coin.body.bounce.set(1, 1);
          coin.body.velocity.x = -200 + i * 30;
          coin.body.velocity.y = 2000 - Math.random() * 2000;
          coin.body.gravity.y = 1000;
          var coinTween = game.add.tween(coin).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200);

          var coinFirstTween = game.add.tween(coin).to({ y: coin.y - 1 }, 1);
          coinFirstTween.start();

          coinFirstTween.onComplete.add(function () {
            coin.x = leftcorner + Math.random() * rightcorner;
            coin.y = _this12.player0.y - 1000 - j * 30 + Math.round(Math.random() * 100);
          });

          coinTween.delay(7000);

          coinTween.onComplete.add(function (item) {
            _this12.coinGroup.remove(item);
            if (item.body) item.body.destroy();
            item.kill();
          });

          coinTween.start();

          _statistics2.default.instance.increment('coins_spawned');
          _this12.coinGroup.add(coin);
        };

        for (var i = 0; i < 9; i += 1) {
          _loop4(i);
        }
      };

      for (var j = 0; j < 9; j += 1) {
        _loop3(j);
      }
    }
  }, {
    key: 'freezeBall',
    value: function freezeBall() {
      this.balls.forEach(function (item) {
        item.body.velocity.x *= 0.1;
        item.body.velocity.y *= 0.1;
        item.body.gravity.y *= 0.1;
        item.freezed = true;
      }, this);
    }
  }, {
    key: 'freezeBallOff',
    value: function freezeBallOff() {
      this.freezeNew = false;
      this.balls.forEach(function (item) {
        var _this13 = this;

        var high = this.chooseHigh(item.size);
        if (game.width > game.height) high *= game.width / game.height * 0.4;
        // switch (item.size) {
        //   case 'powerup':
        //     high = -game.height * 0.75;
        //     if (game.width > game.height) {
        //       high = -game.height / this.group.scale.y + 220 / this.group.scale.y;
        //       if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
        //     }
        //     break;
        //   case 'big':
        //     high = -game.height * 0.75;
        //     if (game.width > game.height) {
        //       high = -game.height / this.group.scale.y + 100 / this.group.scale.y;
        //       if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
        //     }
        //     break;
        //   case 'medium':
        //     high = -game.height * 0.65;
        //     if (game.width > game.height) {
        //       high = -game.height / this.group.scale.y + 150 / this.group.scale.y;
        //       if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
        //     }

        //     break;
        //   default:
        //    high = -game.height * 0.6;
        //     if (game.width > game.height) {
        //       if (game.width / game.height > 1.8) high += game.width / game.height * 100 * this.group.scale.y;
        //     }
        // }
        var upBallTween = game.add.tween(item).to({ y: high }, 200);
        upBallTween.start();
        upBallTween.onComplete.add(function () {
          if (item.body) {
            item.body.gravity.y = _this13.chooseGravity(item.size);
            item.body.velocity.y = 0;
            item.body.velocity.x *= 10;
          }
        });
      }, this);
    }
  }, {
    key: 'offBallphysic',
    value: function offBallphysic() {
      var counterBottomBalls = 0;
      this.balls.children.forEach(function (item) {
        if (item.y > this.player0.y - 300 && this.routingSuperStartButton !== 'pause') {
          this.ballUnderFreeze = true;
          counterBottomBalls += 1;
        } else if (!item.checkForFreeze) {
          item.checkForFreeze = true;
          if (item.rotateBall) item.rotateBall.stop();

          var flashBall1 = game.add.tween(item).to({ alpha: 0 }, 50, Phaser.Easing.Quadratic.Out, false);

          var flashBall2 = game.add.tween(item).to({ alpha: 1 }, 50, Phaser.Easing.Quadratic.Out, false);

          var flashBall0 = game.add.tween(item).to({ alpha: 0.99 }, 1, Phaser.Easing.Quadratic.Out, false);

          flashBall1.chain(flashBall2.chain(flashBall1));

          flashBall0.onComplete.add(function () {
            flashBall0.stop();
            flashBall1.start();
          });

          flashBall0.delay(7000).start();

          item.velocityX = item.body.velocity.x;
          item.velocityY = item.body.velocity.y;
          item.body.allowGravity = false;

          item.body.velocity.x = 0;
          item.body.velocity.y = 0;
        }
      }, this);
      if (counterBottomBalls === 0) this.ballUnderFreeze = false;
    }
  }, {
    key: 'onBallphysic',
    value: function onBallphysic() {
      this.balls.children.forEach(function (item) {
        item.checkForFreeze = false;
        item.body.allowGravity = true;
        item.body.velocity.x = item.velocityX;
        item.body.velocity.y = item.velocityY;
        item.alpha = 1;
        game.tweens.removeFrom(item);
        item.rotateBall = game.add.tween(item).to({ rotation: 1000 }, 1000000, Phaser.Easing.Quadratic.Out, false);
        item.rotateBall.start();
      }, this);
    }
  }, {
    key: 'offBallphysic2',
    value: function offBallphysic2() {
      this.balls.children.forEach(function (item) {
        item.rotateBall.pause();
        if (item.firstMoveBall) item.firstMoveBall.pause();
        item.velocityX = item.body.velocity.x;
        item.velocityY = item.body.velocity.y;
        item.body.allowGravity = false;
        item.body.velocity.x = 0;
        item.body.velocity.y = 0;
      }, this);
      this.upgradeSmallGroup.children.forEach(function (item) {
        item.velocityX = item.body.velocity.x;
        item.velocityY = item.body.velocity.y;
        item.body.allowGravity = false;
        item.body.velocity.x = 0;
        item.body.velocity.y = 0;
      }, this);
    }
  }, {
    key: 'onBallphysic2',
    value: function onBallphysic2() {
      this.balls.children.forEach(function (item) {
        item.body.allowGravity = true;
        item.body.velocity.x = item.velocityX;
        item.body.velocity.y = item.velocityY;
        item.rotateBall.resume();
        if (item.firstMoveBall) item.firstMoveBall.resume();
      }, this);
      this.upgradeSmallGroup.children.forEach(function (item) {
        item.body.allowGravity = true;
        item.body.velocity.x = item.velocityX;
        item.body.velocity.y = item.velocityY;
      }, this);
    }
  }, {
    key: 'changeLevel0',
    value: function changeLevel0() {
      if (this.player0.died) return;
      this.player0.died = true;
      this.changeLevel();
    }
  }, {
    key: 'changeLevel',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(end) {
        var _this14 = this;

        var scoreText, cup, bestScoreText, procentScoreText, restarButton, restartButtonIcon, endTween;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.stop = true;
                this.levelComplete = false;
                this.stopShops = false;
                if (end !== false) end = true;
                this.tweenHelperYes = false;

                if (!end) {
                  _context6.next = 51;
                  break;
                }

                this.pauseButton.visible = false;

                _soundManager2.default.instance.playSound('gameover', 2, false, this.noise);
                if (this.vibro) _vibroManager2.default.instance.vibrate();

                this.routingSuperStartButton = 'within';

                this.scoreText.visible = false;
                this.endcard = new _sprite2.default({
                  key: 'endcard3',
                  position: { x: game.width / 2 - this.groupBase3.x, y: game.height / 2 - this.groupBase3.y + 50 },
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 0, y: 0 }
                });
                this.endcard.addChild(this.levelBar);
                this.coinIcon.visible = false;
                this.diamondIcon.visible = false;
                this.levelBar.x = 10;
                this.levelBar.y = 30;
                this.levelBar.scale.x = 500 / 459;
                this.levelBar.scale.y = 500 / 459;

                this.emotion = new _sprite2.default({
                  key: 'miner_sad',
                  position: { x: 0, y: -320 },
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 1, y: 1 }
                });
                this.endcard.addChild(this.emotion);

                scoreText = new _text2.default({
                  text: this.rounder(this.score),
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(10, -175),
                  fontSize: 110,
                  fontName: 'blambot',
                  color: '#ad5200'
                });

                this.endcard.addChild(scoreText);

                cup = new _sprite2.default({
                  key: 'cup',
                  position: { x: -75, y: -50 - 40 },
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 0.65, y: 0.65 }
                });

                cup.tint = 0xad5200;
                this.endcard.addChild(cup);

                bestScoreText = new _text2.default({
                  text: this.rounder(this.score),
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(40, -50 - 40),
                  fontSize: 54,
                  fontName: 'blambot',
                  color: '#ad5200'
                });

                this.endcard.addChild(bestScoreText);

                procentScoreText = new _text2.default({
                  text: (100 * this.ballsKilled / this.ballsOnLevel).toFixed(0) + '%',
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(20, 165 - 70),
                  fontSize: 100,
                  fontName: 'blambot',
                  color: '#FF0000'
                });

                this.endcard.addChild(procentScoreText);

                restarButton = new _button2.default({
                  key: 'end_button',
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(15, 200 + 40),
                  scale: new _phaser.Point(0.7, 0.7)
                });

                this.endcard.addChild(restarButton);

                restartButtonIcon = new _sprite2.default({
                  key: 'icon_restart',
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 0.8, y: 0.8 },
                  position: { x: 0, y: -10 }
                });

                restarButton.addChild(restartButtonIcon);

                restarButton.visible = false;

                restarButton.doOnClick = function () {
                  if (_this14.endcard === null || !restarButton.visible) return;
                  _this14.startBeginScreen();
                  _this14.stopShops = false;
                  _this14.groupBase3.removeChild(_this14.endcard);
                  restarButton.visible = false;
                  _this14.endcard = null;
                  _this14.player0.died = false;
                  _this14.newLevel(true);
                };

                this.scoreText.text = this.rounder(this.score);
                if (game.width > game.height) {
                  this.scaleEndcard = 0.5 * 1.3 * Math.abs(this.rightBounds.x - this.leftBounds.x) / 670;
                } else {
                  this.scaleEndcard = game.width * 0.7 / this.endcard.texture.width;
                }
                this.groupBase3.add(this.endcard);
                if (game.width > game.height) {
                  this.groupBase3.add(this.endcard);
                }

                endTween = game.add.tween(this.endcard.scale).to({ x: this.scaleEndcard, y: this.scaleEndcard }, 500, Phaser.Easing.Quadratic.Out, false);

                endTween.onComplete.add(function () {
                  if (_this14.superStartButton.currentState === 2) {
                    // this.routingSuperStartButton = 'endcardDoubleClick';
                    _this14.routingSuperStartButton = 'endcard';
                  } else {
                    _this14.routingSuperStartButton = 'endcard';
                  }
                });
                endTween.start();
                restarButton.visible = false;
                _context6.next = 46;
                return this.timeout(3000);

              case 46:
                _context6.next = 48;
                return _famobiApi2.default.instance.onLevelFail(this.level, this.score - this.prevScore, this.score);

              case 48:
                _context6.next = 50;
                return this.timeout(500);

              case 50:
                restarButton.visible = true;

              case 51:

                if (this.timeForUp !== -1) {
                  this.offUp();
                }
                this.forEndBullet = 0;
                this.upgradeIs = false;
                this.leftKeyPressed = 0;
                this.rightKeyPressed = 0;
                this.upKeyPressed = false;
                this.timeFor = 0;
                this.ballsOnLevelNow = 0;
                this.prevTimeBall = 0;
                this.prevTimeBullet = 0;
                this.ballsKilled = 0;
                this.balls.removeAll();
                this.bullets.removeAll();
                this.coinGroup.removeAll();
                this.upgradeSmallGroup.removeAll();
                this.fireUp = false;
                this.createBulletMatrix(this.bulletsPerSec);
                this.freeze = false;
                this.freezeNew = false;
                this.tweenHelperYes = false;
                this.ballUnderFreeze = false;
                if (this.shield) {
                  this.offshield();
                }
                this.shield = false;
                this.coinRainVariable = false;
                this.helper = false;
                this.playerAdd.visible = false;
                this.offshield();
                if (!end) {
                  _soundManager2.default.instance.playSound('level_complete', 1, false, this.noise);
                  this.checkStoneAlpha();
                  this.player.loadTexture('miner' + this.player.number + 'idle');
                  this.player.y = this.playerArray[this.player.number][0];
                  this.player.idle = true;
                  this.routingSuperStartButton = 'levelComplete';
                  this.levelCompleteFunction();
                }
                this.player.animations.stop(0);

              case 80:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function changeLevel(_x13) {
        return _ref6.apply(this, arguments);
      }

      return changeLevel;
    }()
  }, {
    key: 'levelCompleteFunction',
    value: function levelCompleteFunction() {
      var _this15 = this;

      this.specGroupForResizeDiamond.removeAll(true);
      this.specGroupForResizeCoin.removeAll(true);

      this.groupBase3.add(this.specGroupForResizeCoin);
      this.groupBase3.add(this.specGroupForResizeDiamond);

      this.endText = new _text2.default({
        text: window.famobi.__('Level Complete!!!'),
        anchor: new _phaser.Point(0.5, 0.5),
        color: '#FFFFFF',
        fontSize: 80,
        fontName: 'blambot',
        position: new _phaser.Point(game.width / 2, game.height / 2)
      });
      this.firstLayer.addChild(this.endText);

      if (this.coins - this.prevCoins < 1) {
        this.coins = this.prevCoins + 1;
      }

      if (game.width < game.height) this.endText.fontSize = 70;

      var endTextTween = game.add.tween(this.endText.scale).to({ x: 1, y: 1 }, 300);

      this.endText.scale.x = 0;
      this.endText.scale.y = 0;

      endTextTween.start();

      var coordix = game.width / 2 - this.player0.texture.width * this.group.scale.x / 6;
      var coordiy = this.player0.y - this.player0.texture.height * this.group.scale.y + this.group.y;

      var endCoinText = new _text2.default({
        text: '+ ' + (this.coins - this.prevCoins),
        anchor: new _phaser.Point(0.5, 0.5),
        color: 'yellow',
        fontSize: 40,
        fontName: 'blambot',
        position: new _phaser.Point(coordix, coordiy)
      });

      var endCoinTextTween = game.add.tween(endCoinText).to({ alpha: 0 }, 300).to({ alpha: 1 }, 300).loop();

      endCoinTextTween.start();

      var endDiamondText = void 0;
      if (this.diamonds > this.prevDiamonds) {
        endDiamondText = new _text2.default({
          text: '+ ' + (this.diamonds - this.prevDiamonds),
          anchor: new _phaser.Point(0.5, 0.5),
          color: 'red',
          fontSize: 40,
          fontName: 'blambot',
          position: new _phaser.Point(coordix, coordiy - 50)
        });

        var endDiamondTextTween = game.add.tween(endDiamondText).to({ alpha: 0 }, 300).to({ alpha: 1 }, 300).loop();

        endDiamondTextTween.start();

        this.specGroupForResizeDiamond.addChild(endDiamondText);
      }

      this.specGroupForResizeCoin.addChild(endCoinText);

      endTextTween.onComplete.add(function () {
        if (_this15.diamonds > _this15.prevDiamonds) {
          var diamondNumber = 10;
          if (_this15.diamonds - _this15.prevDiamonds < 10) diamondNumber = _this15.diamonds - _this15.prevDiamonds + 1;

          var _loop5 = function _loop5(i) {
            var coin = new _sprite2.default({
              key: 'diamondicon3',
              position: new _phaser.Point(coordix, coordiy - 50),
              anchor: { x: 0.5, y: 0.5 },
              scale: { x: 0.65 * _this15.group.scale.x, y: 0.65 * _this15.group.scale.y }
            });
            var coinEndTween = game.add.tween(coin).to({ x: coin.x + 100, y: coin.y - 100 }, 100, Phaser.Easing.Quadratic.Out).to({ x: _this15.diamondIcon.x - _this15.diamondIcon.texture.width / 4 + 10, y: _this15.diamondIcon.y - _this15.diamondIcon.texture.height / 6 - 30 }, 700, Phaser.Easing.Quadratic.Out).to({ x: _this15.diamondIcon.x - _this15.diamondIcon.texture.width / 4, y: _this15.diamondIcon.y - _this15.diamondIcon.texture.height / 6 }, 100, Phaser.Easing.Quadratic.Out, false);

            coinEndTween.delay(i * 100);

            coinEndTween.start();

            if (i === diamondNumber - 1) {
              coinEndTween.onComplete.add(function (item) {
                _this15.specGroupForResizeDiamond.removeChild(item);
                game.tweens.removeFrom(item);
                item.kill();
                game.tweens.removeFrom(endDiamondText);
                if (endDiamondText) endDiamondText.kill();
                game.tweens.removeFrom(_this15.diamondIcon.scale);
                _this15.specGroupForResizeDiamond.removeAll(true);
              });
            } else {
              coinEndTween.onComplete.add(function (item) {
                if (i === 0) {
                  var scaleT = _this15.diamondIcon.scale.x;
                  var tweenForCoinBase = game.add.tween(_this15.diamondIcon.scale).to({ x: scaleT * 1.1, y: scaleT * 1.1 }, 50).to({ x: scaleT * 1, y: scaleT * 1 }, 50).loop();
                  tweenForCoinBase.start();
                }
                _this15.specGroupForResizeDiamond.removeChild(item);
                game.tweens.removeFrom(item);
                item.kill();
              });
            }
            _this15.specGroupForResizeDiamond.addChild(coin);
          };

          for (var i = 0; i < diamondNumber; i += 1) {
            _loop5(i);
          }
        }

        var coinNumber = 10;
        if (_this15.coins - _this15.prevCoins < 10) coinNumber = _this15.coins - _this15.prevCoins + 1;

        var _loop6 = function _loop6(i) {
          var coin = new _sprite2.default({
            key: 'coinicon3',
            position: new _phaser.Point(coordix, coordiy),
            anchor: { x: 0.5, y: 0.5 },
            scale: { x: _this15.group.scale.x * 0.6, y: _this15.group.scale.y * 0.6 }
          });
          var coinEndTween = game.add.tween(coin).to({ x: coin.x + 100, y: coin.y - 100 }, 100, Phaser.Easing.Quadratic.Out).to({
            x: _this15.coinIcon.x - _this15.coinIcon.texture.width / 4 + 10,
            y: _this15.coinIcon.y - _this15.coinIcon.texture.height / 6 - 30
          }, 700, Phaser.Easing.Quadratic.Out).to({
            x: _this15.coinIcon.x - _this15.coinIcon.texture.width / 4,
            y: _this15.coinIcon.y - _this15.coinIcon.texture.height / 6
          }, 100, Phaser.Easing.Quadratic.Out, false);

          if (i === coinNumber - 2) {
            coinEndTween.onComplete.add(function (item) {
              game.tweens.removeFrom(endCoinText);
              game.tweens.removeFrom(_this15.coinIcon.scale);
              if (endCoinText) endCoinText.kill();
              if (endDiamondText) endDiamondText.kill();
              var addCoins = _this15.coins - _this15.prevCoins;
              var addDiamonds = _this15.diamonds - _this15.prevDiamonds;
              _this15.prevCoins = _this15.coins;
              _this15.prevDiamonds = _this15.diamonds;
              _this15.specGroupForResizeCoin.removeChild(item);
              if (item) item.kill();
              if (_this15.endText) _this15.endText.kill();
              _this15.player0.x = 0;
              _this15.specGroupForResizeCoin.removeAll(true);
              _this15.winScreen(addCoins, addDiamonds);
            });
          } else {
            coinEndTween.onComplete.add(function (item) {
              if (i === 0) {
                var scaleT = _this15.coinIcon.scale.x;
                var tweenForCoinBase2 = game.add.tween(_this15.coinIcon.scale).to({ x: scaleT * 1.1, y: scaleT * 1.1 }, 50).to({ x: scaleT * 1, y: scaleT * 1 }, 50).loop();
                tweenForCoinBase2.start();
              }
              _this15.specGroupForResizeCoin.removeChild(item);
              item.kill();
            });
          }

          coinEndTween.delay(i * 100);

          coinEndTween.start();

          _this15.specGroupForResizeCoin.addChild(coin);
        };

        for (var i = 0; i < coinNumber; i += 1) {
          _loop6(i);
        }
      });
    }
  }, {
    key: 'confetti',
    value: function confetti() {
      this.groupBase3.remove(this.confettiGroup);
      this.groupBase3.add(this.confettiGroup);
      for (var i = 0; i < 200; i += 1) {
        var kindOfSubj = 'coinicon3';
        if (Math.random() > 0.5) {
          kindOfSubj = 'diamondicon3';
        }

        var _coin = new _sprite2.default({
          key: kindOfSubj,
          anchor: { x: 0.5, y: 0.5 },
          scale: { x: 1, y: 1 }
        });

        _coin.x = Math.random() * game.width;
        _coin.y = -3 * game.height + 3 * Math.random() * game.height;
        var coinX = _coin.x;
        var coinY = _coin.y;
        var speed = (2 * game.height - coinY) * 1.7;

        _coin.tween = game.add.tween(_coin).to({ y: 2 * game.height }, speed).to({ x: coinX, y: coinY }, 1).loop().start();

        this.confettiGroup.add(_coin);
      }
    }
  }, {
    key: 'winScreen',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _this16 = this;

        var coins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var diamonds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var hasRewardedAd, scoreText, cup, bestScoreText, coinText, diamondText, coin3, coin4, restarButton, restartButtonIcon, doubleButton, doubleButtonIcon, coin1, coin2, doubleText, startNew;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                hasRewardedAd = _famobiApi2.default.instance.hasRewardedAd();


                this.pauseButton.visible = false;
                this.tuningButton.visible = true;
                this.wincard = new _sprite2.default({
                  key: 'endcard3',
                  anchor: { x: 0.5, y: 0.5 }
                });

                this.emotion2 = new _sprite2.default({
                  key: 'miner_happy',
                  position: { x: 0, y: -320 },
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 1, y: 1 }
                });
                this.wincard.addChild(this.emotion2);

                if (game.width > game.height) {
                  this.scaleEndcard = 0.5 * 1.3 * Math.abs(this.rightBounds.x - this.leftBounds.x) / 670;
                } else {
                  this.scaleEndcard = game.width * 0.7 / this.wincard.texture.width;
                }

                this.wincard.x = game.width / 2 - this.groupBase3.x;
                this.wincard.y = game.height / 2 - this.groupBase3.y + 60;
                this.wincard.scale.x = this.scaleEndcard;
                this.wincard.scale.y = this.scaleEndcard;

                scoreText = new _text2.default({
                  text: this.rounder(this.score),
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(10, -175),
                  fontSize: 110,
                  fontName: 'blambot',
                  color: '#ad5200'
                });

                this.wincard.addChild(scoreText);

                cup = new _sprite2.default({
                  key: 'cup',
                  position: { x: -75, y: -50 - 40 },
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 0.65, y: 0.65 }
                });

                cup.tint = 0xad5200;
                this.wincard.addChild(cup);

                bestScoreText = new _text2.default({
                  text: this.rounder(this.score),
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(40, -50 - 40),
                  fontSize: 54,
                  fontName: 'blambot',
                  color: '#ad5200'
                });

                this.wincard.addChild(bestScoreText);

                this.textGroup = this.game.add.group();

                coinText = new _text2.default({
                  text: '+' + coins,
                  anchor: new _phaser.Point(1, 1),
                  position: new _phaser.Point(0, 33),
                  fontSize: 60,
                  fontName: 'blambot',
                  color: '#ad5200'
                });
                diamondText = new _text2.default({
                  text: '+' + diamonds,
                  anchor: new _phaser.Point(1, 1),
                  position: new _phaser.Point(0, 33),
                  fontSize: 54,
                  fontName: 'blambot',
                  color: '#ad5200'
                });
                coin3 = new _sprite2.default({
                  key: 'coinicon3',
                  position: { x: 0, y: hasRewardedAd ? 3 : 70 },
                  anchor: { x: 0, y: 0.5 },
                  scale: { x: 0.68, y: 0.68 }
                });

                this.wincard.addChild(coin3);

                if (coins > 0) coin3.addChild(coinText);

                coin4 = new _sprite2.default({
                  key: 'ui_icon_diamond',
                  position: { x: 75, y: hasRewardedAd ? 3 : 70 },
                  anchor: { x: 0, y: 0.5 },
                  scale: { x: 0.78, y: 0.78 }
                });

                if (diamonds > 0) coin4.addChild(diamondText);
                if (diamonds / 10 < 0.9) coin4.x = 90;
                if (diamonds / 10 > 1) coin4.x = 114;
                if (diamonds > 0) this.wincard.addChild(coin4);
                if (diamonds === 0) {
                  coin3.x = 35;
                }

                restarButton = new _button2.default({
                  key: 'win_button',
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(15, 200 + 30),
                  scale: new _phaser.Point(0.85, 0.85)
                });

                this.wincard.addChild(restarButton);

                restartButtonIcon = new _sprite2.default({
                  key: 'icon_arrow',
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: -0.8, y: 0.8 },
                  position: { x: 0, y: -10 }
                });

                restarButton.addChild(restartButtonIcon);

                this.groupBase3.add(this.confettiGroup);
                this.confetti();
                this.groupBase3.add(this.wincard);

                doubleButton = new _button2.default({
                  key: 'double_button',
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(15, 80),
                  scale: new _phaser.Point(0.85, 0.85)
                });

                doubleButton.visible = false;
                doubleButton.alpha = 0;
                if (this.level > 0) {
                  this.wincard.addChild(doubleButton);
                  doubleButton.visible = true;
                  doubleButton.alpha = 1;
                }

                doubleButtonIcon = new _sprite2.default({
                  key: 'icon_ad',
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 0.7, y: 0.7 },
                  position: { x: -80, y: -5 }
                });

                doubleButton.addChild(doubleButtonIcon);

                coin1 = new _sprite2.default({
                  key: 'coinicon3',
                  position: { x: 0, y: -25 },
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 0.7, y: 0.7 }
                });

                doubleButton.addChild(coin1);

                coin2 = new _sprite2.default({
                  key: 'ui_icon_diamond',
                  position: { x: 0, y: 15 },
                  anchor: { x: 0.5, y: 0.5 },
                  scale: { x: 0.75, y: 0.75 }
                });

                doubleButton.addChild(coin2);

                doubleText = new _text2.default({
                  text: 'X2',
                  anchor: new _phaser.Point(0.5, 0.5),
                  position: new _phaser.Point(80, -15),
                  fontSize: 80,
                  fontName: 'blambot',
                  color: 'white'
                });

                doubleButton.addChild(doubleText);

                this.groupBase3.add(this.wincard);

                restarButton.visible = false;
                doubleButton.visible = false;
                _context7.next = 54;
                return this.timeout(1000);

              case 54:
                _context7.next = 56;
                return _famobiApi2.default.instance.onLevelSuccess(this.level, this.score - this.prevScore, this.score);

              case 56:
                _context7.next = 58;
                return this.timeout(500);

              case 58:
                restarButton.visible = true;
                doubleButton.visible = hasRewardedAd;

                restarButton.doOnClick = function () {
                  _this16.screen_button.scale.y = 0;
                  _this16.confettiGroup.forEach(function (item) {
                    item = null;
                  });
                  _this16.confettiGroup.removeAll(true);
                  startNew();
                };
                doubleButton.doOnClick = function () {

                  if(_famobiApi2.default.instance.hasRewardedAd()) {
                    doubleButton.visible = false;
                    _famobiApi2.default.instance.rewardedAd(function () {
                      _this16.screen_button.scale.y = 0;
                      _this16.confettiGroup.forEach(function (item) {
                        item = null;
                    });
                    _this16.confettiGroup.removeAll(true);
                    _this16.coins += coins;
                    _this16.diamonds += diamonds;
                    _this16.prevCoins = _this16.coins;
                    _this16.prevDiamonds = _this16.diamonds;
                      _this16.coinBase.text = _this16.rounder(_this16.coins);
                      _this16.diamondBase.text = _this16.diamonds;
                      startNew();
                    }, function() {
                      setTimeout(function() {
                        doubleButton.visible = _famobiApi2.default.instance.hasRewardedAd();
                      }, 750);
                    }, _this16);
                  } else {
                    _this16.screen_button.scale.y = 0;
                    _this16.confettiGroup.forEach(function (item) {
                      item = null;
                    });
                    _this16.confettiGroup.removeAll(true);
                    startNew();
                  }

                };

                startNew = function startNew() {
                  _this16.groupBase3.remove(_this16.wincard);
                  _this16.wincard = null;
                  restarButton.visible = false;
                  doubleButton.visible = false;
                  _this16.checkStoneAlpha();
                  _this16.groupUpgrades.visible = true;
                  if (!_this16.tutorialDown && _this16.swipeHand && _this16.coins > 2) {
                    _this16.swipeHand.visible = true;
                  }
                  _this16.shopGroup.visible = true;
                  _this16.routingSuperStartButton = 'begin';
                  _this16.newLevel(false);
                };

              case 63:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function winScreen() {
        return _ref7.apply(this, arguments);
      }

      return winScreen;
    }()
  }, {
    key: 'startBeginScreen',
    value: function startBeginScreen() {
      this.checkStoneAlpha();
      this.groupUpgrades.visible = true;
      this.pauseButton.visible = false;
      this.tuningButton.visible = true;
      this.screen_button.visible = true;
      if (!this.tutorialDown && this.swipeHand && this.coins > 2) {
        this.swipeHand.visible = true;
        this.swipeHand.x = this.speedButtonHead.x;
        this.swipeHand.y = this.speedButtonHead.y;
      }
      this.player.loadTexture('miner' + this.player.number + 'idle');
      this.player.y = this.playerArray[this.player.number][0];
      this.player.idle = true;
      this.shopGroup.visible = true;
      this.resize();
      this.routingSuperStartButton = 'begin';
    }
  }, {
    key: 'createSuperStartButton',
    value: function createSuperStartButton() {
      var _this17 = this;

      this.superStartButton = new _button2.default({
        key: 'loader-bar',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(0, 0),
        scale: new _phaser.Point(20, 300)
      });
      this.superStartButton.visible = true;
      this.superStartButton.alpha = 0;
      this.group.add(this.superStartButton);

      this.superStartButton2 = new _button2.default({
        key: 'loader-bar',
        anchor: new _phaser.Point(0.5, 0.5),
        position: new _phaser.Point(0, 0),
        scale: new _phaser.Point(20, 300)
      });
      this.superStartButton2.visible = true;
      this.superStartButton2.alpha = 0;
      this.group.add(this.superStartButton2);
      this.superStartButton2.station = 'start'; // 'playing', 'notWorking'

      this.superStartButton2.doOnClick = function () {

        //      if (this.superStartButton2.station === 'start') this.startuem();
      };

      // this.superStartButton.doOnClick = async () => {
      this.superStartButton.doOnClick = function () {
        return;
        if (_this17.logo && _this17.logo.alpha === 0) return;
        if (_this17.shopPressed !== 0) return;
        if (_this17.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
        if (_this17.routingSuperStartButton === 'within') {}
        if (_this17.routingSuperStartButton === 'endcardDoubleClick') {
          // return;
          _this17.routingSuperStartButton = 'endcard';
        }
        if (_this17.routingSuperStartButton === 'levelComplete') {}
        if (_this17.routingSuperStartButton === 'pause') {}
        if (_this17.routingSuperStartButton === 'newLevel') {
          _this17.startBeginScreen();
        }
        if (_this17.routingSuperStartButton === 'newLevelDoubleClick') {
          _this17.routingSuperStartButton = 'newLevel';
        }
        if (_this17.routingSuperStartButton === 'endcard') {
          _this17.startBeginScreen();
          _this17.newLevel(true);
        }
      };
    }
  }, {
    key: 'createShopUpgrades',
    value: function createShopUpgrades() {
      var _this18 = this;

      this.groupUpgrades = this.game.add.group();

      var coinForButton1 = new _sprite2.default({
        key: 'coinicon3',
        position: { x: -110, y: -10 }
      });
      var coinForButton2 = new _sprite2.default({
        key: 'coinicon3',
        position: { x: -110, y: -10 }
      });
      var coinForButton3 = new _sprite2.default({
        key: 'coinicon3',
        position: { x: -110, y: -10 }
      });

      this.speed_stone1 = new _button2.default({
        key: 'shop_stone',
        position: { x: 200, y: -80 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1, y: 1 }
      });
      this.speed_stone1.addChild(coinForButton1);

      this.damage_stone2 = new _button2.default({
        key: 'shop_stone',
        position: { x: 200, y: -80 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1, y: 1 }
      });
      this.damage_stone2.addChild(coinForButton2);

      this.coin_stone3 = new _button2.default({
        key: 'shop_stone',
        position: { x: 200, y: -80 },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1, y: 1 }
      });
      this.coin_stone3.addChild(coinForButton3);

      if (this.speed_stone1TextValue < 3) this.speed_stone1TextValue = 3;
      this.speed_stone1Text = new _text2.default({
        text: Math.round(this.speed_stone1TextValue),
        anchor: new _phaser.Point(0.5, 0.5),
        color: '#814000',
        fontSize: 57,
        fontName: 'blambot'
      });
      this.speed_stone1Text.y = -10;
      this.speed_stone1Text.x = 10;

      this.speed_stone1.addChild(this.speed_stone1Text);

      if (this.damage_stone2TextValue < 50) this.damage_stone2TextValue = 50;
      this.damage_stone2Text = new _text2.default({
        text: Math.round(this.damage_stone2TextValue),
        anchor: new _phaser.Point(0.5, 0.5),
        color: '#814000',
        fontSize: 57,
        fontName: 'blambot'
      });
      this.damage_stone2Text.y = -10;
      this.damage_stone2Text.x = 10;

      this.damage_stone2.addChild(this.damage_stone2Text);

      if (this.coin_stone3TextValue < 100) this.coin_stone3TextValue = 100;
      this.coin_stone3Text = new _text2.default({
        text: Math.round(this.coin_stone3TextValue),
        anchor: new _phaser.Point(0.5, 0.5),
        color: '#814000',
        fontSize: 57,
        fontName: 'blambot'
      });
      this.coin_stone3Text.y = -10;
      this.coin_stone3Text.x = 10;

      this.coin_stone3.addChild(this.coin_stone3Text);

      this.speedButton = new _button2.default({
        key: 'shop_speed',
        anchor: new _phaser.Point(0.5, 1),
        position: new _phaser.Point(0, 0),
        scale: new _phaser.Point(1, 1)
      });
      this.speedButton.visible = false;

      this.speedButtonHead = new _button2.default({
        key: 'shop_speed_up',
        anchor: { x: 1, y: 1 },
        position: new _phaser.Point(-166 + 4, -165),
        scale: new _phaser.Point(1, 1)
      });

      var iconForSpeed = new _sprite2.default({
        key: 'icon_firespeed',
        position: { x: -275, y: -40 },
        anchor: new _phaser.Point(0, 1),
        scale: new _phaser.Point(0.44, 0.44),
        color: '#6a0096'
      });

      this.speedButtonText = new _text2.default({
        text: 'X' + (this.bulletsPerSec + 1),
        anchor: new _phaser.Point(0, 1),
        color: '#6a0096',
        fontSize: 80,
        fontName: 'blambot'
      });
      this.speedButtonText.y = -40;
      this.speedButtonText.x = -180;

      this.speedButton.addChild(this.speedButtonText);
      this.speedButton.addChild(this.speed_stone1);
      this.speedButton.addChild(iconForSpeed);

      var speed_stone1Tween = game.add.tween(this.speed_stone1).to({ rotation: 0.3 }, 75);

      speed_stone1Tween.onComplete.add(function () {
        _this18.speed_stone1.rotation = 0;
      });

      this.speedButton.doOnClick = function () {
        if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
        if (_this18.shopPressed === 0) speed_stone1Tween.start();
      };
      this.speed_stone1.doOnClick = function () {
        if (_this18.shopPressed === 0) {
          if (_this18.noise) _soundManager2.default.instance.playSound('buy', 1, false);
          speed_stone1Tween.start();
          if (_this18.coins >= _this18.speed_stone1TextValue && _this18.routingSuperStartButton !== 'pause') {
            if (_this18.swipeHand && !_this18.tutorialDown) {
              _this18.swipeHand.kill();
              _this18.groupUpgrades.removeChild(_this18.swipeHand);
              _this18.tutorialDown = true;
              _famobiApi2.default.instance.setLocalStorageItem('tutorial', '1');
            }
            _this18.bulletsPerSec += 1;

            _statistics2.default.instance.set('bullets_per_sec', _this18.bulletsPerSec);

            if (_this18.bulletsPerSec > 20) {
              _this18.createBulletMatrix(_this18.bulletsPerSec);
            }
            _this18.coins -= _this18.speed_stone1TextValue;
            _this18.prevCoins = _this18.coins;
            _this18.speedButtonText.text = 'X' + (_this18.bulletsPerSec + 1);
            _this18.coinBase.text = _this18.rounder(_this18.coins);
            if (_this18.bulletsPerSec < 20) _this18.speed_stone1TextValue = Math.round(_this18.speed_stone1TextValue * 1.5);
            if (_this18.bulletsPerSec > 19 && _this18.bulletsPerSec < 30) _this18.speed_stone1TextValue = Math.round(_this18.speed_stone1TextValue * 1.2);
            if (_this18.bulletsPerSec === 30) _this18.speed_stone1TextValue = 11000;
            if (_this18.bulletsPerSec > 30) _this18.speed_stone1TextValue = _this18.speed_stone1TextValue + 2000;
            _famobiApi2.default.instance.setLocalStorageItem('bulletsPerSec', _this18.bulletsPerSec);
            _famobiApi2.default.instance.setLocalStorageItem('speedPrice', _this18.speed_stone1TextValue);
            _famobiApi2.default.instance.setLocalStorageItem('coins', _this18.coins);
            _this18.speed_stone1Text.text = _this18.rounder(_this18.speed_stone1TextValue);
            _this18.checkStoneAlpha();
          }
        }
      };
      this.speedButtonHead.doOnClick = function () {
        if (_this18.speedButton.visible !== true && _this18.routingSuperStartButton !== 'pause' && _this18.shopPressed === 0) {
          if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this18.swipeHand && _this18.swipeHand.visible) {
            _this18.swipeHand.x = _this18.speed_stone1.x + 40;
            _this18.swipeHand.y = _this18.speed_stone1.y + 30;
          }
          _this18.speedButtonHead.visible = false;
          _this18.strengthButtonHead.visible = true;
          _this18.coinButtonHead.visible = true;
          _this18.speedButton.visible = true;
          _this18.strengthButton.visible = false;
          _this18.coinButton.visible = false;
          _this18.speedButton.scale.x = 0;
          var speedButtonIncrease = game.add.tween(_this18.speedButton.scale).to({ x: 1 }, 50, Phaser.Easing.Quadratic.Out, false);
          speedButtonIncrease.start();
        }
      };

      this.strengthButton = new _button2.default({
        key: 'shop_strength',
        anchor: new _phaser.Point(0.5, 1),
        position: new _phaser.Point(0, 0),
        scale: new _phaser.Point(1, 1)
      });
      this.strengthButton.visible = false;

      this.strengthButtonHead = new _button2.default({
        key: 'shop_strength_up2',
        anchor: { x: 1, y: 1 },
        position: new _phaser.Point(-52 + 3, -165),
        scale: new _phaser.Point(1, 1)
      });

      var iconForStrength = new _sprite2.default({
        key: 'icon_damage',
        position: { x: -258, y: -37 },
        anchor: new _phaser.Point(0, 1),
        scale: new _phaser.Point(0.4, 0.4),
        color: '#6a0096'
      });

      this.strengthButtonText = new _text2.default({
        text: ' X' + (this.damage + 1),
        anchor: new _phaser.Point(0, 1),
        color: '#814000',
        fontSize: 80,
        fontName: 'blambot'
      });
      this.strengthButtonText.y = -40;
      this.strengthButtonText.x = -180;

      this.strengthButton.addChild(this.strengthButtonText);
      this.strengthButton.addChild(this.damage_stone2);
      this.strengthButton.addChild(iconForStrength);

      var damage_stone2Tween = game.add.tween(this.damage_stone2).to({ rotation: 0.3 }, 75);

      damage_stone2Tween.onComplete.add(function () {
        _this18.damage_stone2.rotation = 0;
      });

      this.strengthButton.doOnClick = function () {
        if (_this18.shopPressed === 0) damage_stone2Tween.start();
        if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
      };

      this.damage_stone2.doOnClick = function () {
        if (_this18.shopPressed === 0) {
          if (_this18.noise) _soundManager2.default.instance.playSound('buy', 1, false);
          damage_stone2Tween.start();
          if (_this18.coins >= _this18.damage_stone2TextValue && _this18.routingSuperStartButton !== 'pause') {
            if (_this18.swipeHand && !_this18.tutorialDown) {
              _this18.swipeHand.kill();
              _this18.groupUpgrades.removeChild(_this18.swipeHand);
              _this18.tutorialDown = true;
              _famobiApi2.default.instance.setLocalStorageItem('tutorial', '1');
            }
            _this18.damage += 1;

            _statistics2.default.instance.set('fire_damage', _this18.damage);

            _this18.coins -= _this18.damage_stone2TextValue;
            _this18.prevCoins = _this18.coins;

            _this18.coinBase.text = _this18.rounder(_this18.coins);
            _this18.damage_stone2TextValue = _this18.damage_stone2TextValue * 5;
            if (_this18.damage > 6) {
              switch (_this18.coinMulti) {
                case 7:
                  _this18.coin_stone3TextValue = 2000000;
                  break;
                case 8:
                  _this18.coin_stone3TextValue = 5000000;
                  break;
                case 9:
                  _this18.coin_stone3TextValue = 25000000;
                  break;
                default:
                  _this18.coin_stone3TextValue = 1000000000;
              }
            }
            _famobiApi2.default.instance.setLocalStorageItem('damage', _this18.damage);
            _famobiApi2.default.instance.setLocalStorageItem('damagePrice', _this18.damage_stone2TextValue);
            _famobiApi2.default.instance.setLocalStorageItem('coins', _this18.coins);
            _this18.damage_stone2Text.text = _this18.rounder(_this18.damage_stone2TextValue);
            _this18.strengthButtonText.text = ' X' + (_this18.damage + 1);
            _this18.checkStoneAlpha();
          }
        }
      };
      this.strengthButtonHead.doOnClick = function () {
        if (_this18.strengthButton.visible !== true && _this18.routingSuperStartButton !== 'pause' && _this18.shopPressed === 0) {
          if (_this18.swipeHand && _this18.swipeHand.visible) {
            _this18.swipeHand.x = _this18.speedButtonHead.x;
            _this18.swipeHand.y = _this18.speedButtonHead.y;
          }
          if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          _this18.speedButtonHead.visible = true;
          _this18.strengthButtonHead.visible = false;
          _this18.coinButtonHead.visible = true;
          _this18.speedButton.visible = false;
          _this18.strengthButton.visible = true;
          _this18.coinButton.visible = false;
          _this18.strengthButton.scale.x = 0;
          var strengthButtonIncrease = game.add.tween(_this18.strengthButton.scale).to({ x: 1 }, 50, Phaser.Easing.Quadratic.Out, false);
          strengthButtonIncrease.start();
        }
      };
      this.coinButton = new _button2.default({
        key: 'shop_coins',
        anchor: new _phaser.Point(0.5, 1),
        position: new _phaser.Point(0, 0),
        scale: new _phaser.Point(1, 1)
      });
      this.coinButtonHead = new _button2.default({
        key: 'shop_coins_up',
        anchor: { x: 1, y: 1 },
        position: new _phaser.Point(67 - 2, -166),
        scale: new _phaser.Point(1, 1)
      });
      this.coinButtonHead.visible = false;

      this.coinButtonHeadFalse = new _button2.default({
        key: 'shop_coins_up',
        anchor: { x: 0, y: 1 },
        position: new _phaser.Point(70, -167),
        scale: new _phaser.Point(10, 1)
      });
      this.coinButtonHeadFalse.alpha = 0;

      this.coinButtonHeadFalse.doOnClick = function () {
        if (_this18.routingSuperStartButton === 'logo' || _this18.routingSuperStartButton === 'logo1') {
          if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          return;
        }
        if (_this18.routingSuperStartButton !== 'pause' && _this18.shopPressed === 0) {
          if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          _this18.stop = false;
          _this18.tweenFingerOff();
          _this18.groupUpgrades.visible = false;
          _this18.shopGroup.visible = false;
          _this18.routingSuperStartButton = 'within';
          _this18.resize();
        }
      };

      this.coinButtonSpeedFalse = new _button2.default({
        key: 'shop_coins_up',
        anchor: { x: 1, y: 1 },
        position: new _phaser.Point(-285, -167),
        scale: new _phaser.Point(10, 1)
      });
      this.coinButtonSpeedFalse.alpha = 0;

      var coin_stone3Tween = game.add.tween(this.coin_stone3).to({ rotation: 0.3 }, 75);

      coin_stone3Tween.onComplete.add(function () {
        _this18.coin_stone3.rotation = 0;
      });

      this.coinButton.doOnClick = function () {
        if (_this18.shopPressed === 0) coin_stone3Tween.start();
        if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
      };

      this.coinButtonSpeedFalse.doOnClick = function () {
        if (_this18.routingSuperStartButton === 'logo' || _this18.routingSuperStartButton === 'logo1') {
          if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          return;
        }
        if (_this18.routingSuperStartButton !== 'pause' && _this18.shopPressed === 0) {
          if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          _this18.stop = false;
          _this18.tweenFingerOff();
          _this18.groupUpgrades.visible = false;
          _this18.shopGroup.visible = false;
          _this18.routingSuperStartButton = 'within';
          _this18.resize();
        }
      };

      var iconForCoin = new _sprite2.default({
        key: 'icon_coins',
        position: { x: -258, y: -35 },
        anchor: new _phaser.Point(0, 1),
        scale: new _phaser.Point(0.4, 0.4),
        color: '#6a0096'
      });

      this.coinButtonText = new _text2.default({
        text: 'X' + (this.coinMulti + 1),
        anchor: new _phaser.Point(0, 1),
        color: '#005196',
        fontSize: 80,
        fontName: 'blambot'
      });
      this.coinButtonText.y = -40;
      this.coinButtonText.x = -150;
      this.coinButton.addChild(this.coinButtonText);
      this.coinButton.addChild(this.coin_stone3);
      this.coinButton.addChild(iconForCoin);

      this.coin_stone3.doOnClick = function () {
        if (_this18.shopPressed === 0) {
          coin_stone3Tween.start();
          if (_this18.noise) _soundManager2.default.instance.playSound('buy', 1, false);
          if (_this18.coins >= _this18.coin_stone3TextValue && _this18.routingSuperStartButton !== 'pause') {
            if (_this18.swipeHand && !_this18.tutorialDown) {
              _this18.swipeHand.kill();
              _this18.groupUpgrades.removeChild(_this18.swipeHand);
              _this18.tutorialDown = true;
              _famobiApi2.default.instance.setLocalStorageItem('tutorial', '1');
            }
            _this18.coinMulti += 1;

            _statistics2.default.instance.set('coin_multiplier', _this18.coinMulti);

            _this18.coins -= Math.ceil(_this18.coin_stone3TextValue);
            _this18.prevCoins = _this18.coins;
            _this18.coinBase.text = _this18.rounder(_this18.coins);
            _this18.coin_stone3TextValue *= 2;
            if (_this18.coinMulti > 15) {
              switch (_this18.coinMulti) {
                case 16:
                  _this18.coin_stone3TextValue = 1600000;
                  break;
                case 17:
                  _this18.coin_stone3TextValue = 3500000;
                  break;
                case 18:
                  _this18.coin_stone3TextValue = 7000000;
                  break;
                default:
                  _this18.coin_stone3TextValue = 1000000000;
              }
            }
            _famobiApi2.default.instance.setLocalStorageItem('coinMulti', _this18.coinMulti);
            _famobiApi2.default.instance.setLocalStorageItem('coinMultiPrice', _this18.coin_stone3TextValue);
            _famobiApi2.default.instance.setLocalStorageItem('coins', _this18.coins);
            _this18.coin_stone3Text.text = _this18.rounder(_this18.coin_stone3TextValue);
            _this18.coinButtonText.text = 'X' + (_this18.coinMulti + 1);
          }
          _this18.checkStoneAlpha();
        }
      };

      this.coinButtonHead.doOnClick = function () {
        if (_this18.coinButton.visible !== true && _this18.routingSuperStartButton !== 'pause' && _this18.shopPressed === 0) {
          if (_this18.noise) _soundManager2.default.instance.playSound('pressak', 1, false);
          if (_this18.swipeHand && _this18.swipeHand.visible) {
            _this18.swipeHand.x = _this18.speedButtonHead.x;
            _this18.swipeHand.y = _this18.speedButtonHead.y;
          }
          _this18.speedButtonHead.visible = true;
          _this18.coinButtonHead.visible = false;
          _this18.strengthButtonHead.visible = true;

          _this18.speedButton.visible = false;
          _this18.strengthButton.visible = false;
          _this18.coinButton.visible = true;

          _this18.coinButton.scale.x = 0;

          var coinButtonIncrease = game.add.tween(_this18.coinButton.scale).to({ x: 1 }, 50, Phaser.Easing.Quadratic.Out, false);
          coinButtonIncrease.start();
        }
      };

      this.groupUpgrades.add(this.speedButton);
      this.groupUpgrades.add(this.strengthButton);
      this.groupUpgrades.add(this.coinButton);
      this.groupUpgrades.add(this.speedButtonHead);
      this.groupUpgrades.add(this.strengthButtonHead);
      this.groupUpgrades.add(this.coinButtonHead);
      this.groupUpgrades.add(this.coinButtonHeadFalse);
      this.groupUpgrades.add(this.coinButtonSpeedFalse);
      // this.tuningGroup.children[2].visible = true;
      // this.tuningGroup.children[3].visible = true;
      this.checkStoneAlpha();
    }
  }, {
    key: 'checkStoneAlpha',
    value: function checkStoneAlpha() {
      this.coin_stone3Text.alpha = 1;
      this.damage_stone2Text.alpha = 1;
      this.speed_stone1Text.alpha = 1;
      if (this.coins < this.coin_stone3TextValue) this.coin_stone3Text.alpha = 0.3;
      if (this.coins < this.damage_stone2TextValue) this.damage_stone2Text.alpha = 0.3;
      if (this.coins < this.speed_stone1TextValue) this.speed_stone1Text.alpha = 0.3;
    }
  }, {
    key: 'createBulletMatrix',
    value: function createBulletMatrix(bullets) {
      var bulletsGetting = 20;
      var k = 1;
      for (var j = 0; j < 20; j += 1) {
        this.matrixBullet[j] = 1;
      }
      while (bulletsGetting < bullets) {
        k *= -1;
        for (var i = 0; i < 20; i += 1) {
          if (k === 1) {
            if (i % 2 === 0) {
              this.matrixBullet[i] += 1;
              bulletsGetting += 1;
            }
          } else if (i % 2 !== 0) {
            this.matrixBullet[i] += 1;
            bulletsGetting += 1;
          }
          if (bulletsGetting === bullets) break;
        }
      }
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this.exclaimText = null;

      this.bullets.forEach(function (item) {
        item.body.destroy();
      });
      this.bullets.removeAll(true);
      this.balls.forEach(function (item) {
        item.body.destroy();
      });
      this.balls.removeAll(true);
      this.upgradeSmallGroup.forEach(function (item) {
        item.body.destroy();
      });
      this.upgradeSmallGroup.removeAll(true);
      this.coinGroup.forEach(function (item) {
        item.body.destroy();
      });
      this.coinGroup.removeAll(true);
      this.diamondGroup.forEach(function (item) {
        item.body.destroy();
      });
      this.diamondGroup.removeAll(true);

      this.specGroupForResizeCoin.forEach(function (item) {
        item.kill();
      });
      this.specGroupForResizeCoin.removeAll(true);

      this.specGroupForResizeDiamond.forEach(function (item) {
        item.kill();
      });
      this.specGroupForResizeDiamond.removeAll(true);

      game.tweens.removeAll();
      if (this.shieldSprite) {
        var p = game.add.tween(this.shieldSprite).to({ alpha: 1 }, 300).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true).loop();
        p.start();
      }
      if (this.swipeHand) {
        this.swipeHand.x = this.speedButtonHead.x;
        this.swipeHand.y = this.speedButtonHead.y;
        var swipeTwen = game.add.tween(this.swipeHand.scale).to({ x: 0.45, y: 0.45 }, 200).to({ x: 0.5, y: 0.5 }, 200).loop();
        swipeTwen.start();
      }
      if (this.touchForShut) {}
    }
  }, {
    key: 'newLevel',
    value: function newLevel() {
      var end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.clearAll();
      if (end) {
        _famobiApi2.default.instance.setLocalStorageItem('level', this.level);
      } else {
        _famobiApi2.default.instance.setLocalStorageItem('level', this.level + 1);
      }

      _famobiApi2.default.instance.setLocalStorageItem('score', this.score);
      _famobiApi2.default.instance.setLocalStorageItem('coins', this.coins);
      _famobiApi2.default.instance.setLocalStorageItem('diamonds', this.diamonds);
      _famobiApi2.default.instance.setLocalStorageItem('coinMulti', this.coinMulti);
      _famobiApi2.default.instance.setLocalStorageItem('coinMultiPrice', this.coin_stone3TextValue);
      _famobiApi2.default.instance.setLocalStorageItem('bulletsPerSec', this.bulletsPerSec);
      _famobiApi2.default.instance.setLocalStorageItem('damage', this.damage);
      this.flyUp = false;
      if (end) {
        this.coinGroup.removeAll(true);
        this.diamondGroup.removeAll(true);
        this.tempAll = false;
        if (this.endcard) this.endcard.kill();
        this.coinIcon.visible = true;
        this.diamondIcon.visible = true;
        this.endcard = false;
        this.scoreText.visible = true;
        this.groupBase3.add(this.levelBar);
        this.groupBase3.remove(this.coinIcon);
        this.groupBase3.add(this.coinIcon);
        this.levelBarFull.scale.x = 0;
        if (game.width > game.height) {
          this.levelBar.scale.x = this.topground.scale.x * game.height / game.width;
          this.levelBar.scale.y = this.topground.scale.y * game.height / game.width;
        } else {
          this.levelBar.scale.x = game.width / 720 * 0.7;
          this.levelBar.scale.y = this.levelBar.scale.x;
        }
        this.levelBar.x = this.group.x - this.groupBase3.x;
        this.levelBar.y = this.topground.texture.height * this.topground.scale.y / 4;
      }

      if (!end) {
        this.tempAll = false;

        this.level += 1;
        this.ballBornTime = 10 - this.level * 0.47; // the time for create new ball
        if (this.ballBornTime < 3) this.ballBornTime = 3;
        this.ballsOnLevel = this.level + 12;
        this.ballsOnLevelNow = 0;
        this.maxLivesOnLevel = 10 + this.level * 2;
      }

      this.levelBarFull.scale.x = 0;
      this.levelText1.text = this.level;
      this.levelText2.text = this.level + 1;
      this.stop = true;
      this.stop2 = false;
      this.prevScore = this.score;
    }
  }, {
    key: 'myToNumber',
    value: function myToNumber(string) {
      var number = string;
      if (!(string * 1)) {
        number = '';
        for (var i = 0; i < string.length - 1; i += 1) {
          number += string[i];
        }
      }
      if (string[string.length - 1] === 'K') number *= 1000;
      if (string[string.length - 1] === 'M') number *= 1000000;
      if (string[string.length - 1] === 'B') number *= 1000000000;
      number *= 1;
      return number;
    }
  }, {
    key: 'rounder',
    value: function rounder(number) {
      var number2 = number;

      if (typeof number === 'number') {
        if (number > 999999999) number2 = (number / 1000000000).toFixed(1) + 'B';
        if (number > 999999) number2 = (number / 1000000).toFixed(1) + 'M';
        if (number > 9999) number2 = (number / 1000).toFixed(1) + 'K';
      }

      return number2;
    }
  }, {
    key: 'upHop',
    value: function upHop(x, y) {
      var chooseUp = Math.floor(Math.random() * 5) + 1;
      // let chooseUp = 4;
      var kindOfUp = void 0;
      var scaleUp = 0.7;
      switch (chooseUp) {
        case 1:
          {
            kindOfUp = 'up_fire';
            break;
          }
        case 2:
          {
            kindOfUp = 'up_freeze';
            break;
          }
        case 3:
          {
            kindOfUp = 'up_shield';
            break;
          }
        case 4:
          {
            kindOfUp = 'up_helper';
            break;
          }
        default:
          kindOfUp = 'up_coin';
      }

      var upgradeSmall = new _sprite2.default({
        key: kindOfUp,
        position: { x: x, y: y },
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: scaleUp, y: scaleUp }
      });

      upgradeSmall.kind = chooseUp;
      this.game.physics.arcade.enableBody(upgradeSmall);
      upgradeSmall.body.setCircle(70 * scaleUp * this.group.scale.x);
      upgradeSmall.body.offset.x = 30;
      upgradeSmall.body.offset.y = 40;
      upgradeSmall.body.bounce.set(0, 1);
      upgradeSmall.body.velocity.y = -200;
      upgradeSmall.body.gravity.y = 700;

      this.upgradeSmallGroup.add(upgradeSmall);
    }
  }, {
    key: 'shieldReaction',
    value: function shieldReaction(player, ball) {
      ball.body.velocity.y = -Math.abs(ball.body.velocity.y);
    }
  }, {
    key: 'createSideBounds',
    value: function createSideBounds() {
      this.rightBounds = new _sprite2.default({
        key: 'bound',
        //      position: { x: game.width / 2 + this.topground.texture / 2 * this.topground.scale.x, y: 0 },
        anchor: { x: 0, y: 0 },
        scale: { x: 10, y: 3 }
      }, this);

      this.rightBounds.top = false;
      this.game.physics.arcade.enableBody(this.rightBounds);
      // this.rightBounds.body.bounce.set(0, 0);
      this.rightBounds.alpha = 0;
      this.rightBounds.immovable = true;

      this.bounds2.add(this.rightBounds);

      this.topBounds = new _sprite2.default({
        key: 'loader-bar',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 5, y: 2 }
      }, this);

      this.topBounds.top = true;
      this.game.physics.arcade.enableBody(this.topBounds);

      this.topBounds.body.bounce.set(0, 0);
      this.topBounds.alpha = 1;
      this.bounds2.add(this.topBounds);

      this.leftBounds = new _sprite2.default({
        key: 'bound',
        //    position: { x: -game.width / 2 - this.topground.texture / 2 * this.topground.scale.x, y: 0 },
        anchor: { x: 1, y: 0 },
        scale: { x: 10, y: 3 }
      }, this);

      // this.leftBounds.top = false;
      this.game.physics.arcade.enableBody(this.leftBounds);
      // this.leftBounds.body.bounce.set(0, 0);
      this.leftBounds.immovable = true;
      this.leftBounds.alpha = 0;
      this.bounds2.add(this.leftBounds);
    }
  }, {
    key: 'resize',
    value: function resize() {
      if (this.confettiGroup.length !== 0) {
        this.confettiGroup.forEach(function (item) {
          item = null;
        });
        this.confettiGroup.removeAll(true);
      }

      if (this.pauseBack && this.pauseBack.alive) {
        // подумать, может быть убрать алив...
        this.pauseBack.kill();
        this.createPauseScreen();
      }

      this.forlevelBegin.x = game.width / 2;
      this.forlevelBegin.y = 0.5 * 66 * this.groupBase3.scale.y;

      if (this.touchForShut && this.logo.visible && this.touchForShut.alpha !== 0) {
        this.tweenFingerOff();
        if (!this.tutorialDown) this.tweenFinger();
      }

      //    if (this.shopPressed !== 0) {
      this.shopGroupForResize.x = game.width / 2;
      this.shopGroupForResize.y = game.height / 2;

      if (game.width > game.height) {
        this.shopGroupForResize.scale.y = 0.8 * game.height / 760;
        this.shopGroupForResize.scale.x = this.shopGroupForResize.scale.y;
      } else {
        this.shopGroupForResize.scale.x = 0.8 * game.width / 601;
        this.shopGroupForResize.scale.y = this.shopGroupForResize.scale.x;
      }

      this.frontground.scale.x = game.height / 1280;
      this.frontground.scale.y = this.frontground.scale.x;
      this.background.scale.x = game.height / 1280;
      this.background.scale.y = this.background.scale.x;
      this.topground.scale.x = game.height / 1280;
      this.topground.scale.y = this.topground.scale.x;
      this.background.x = game.width / 2;
      this.topground.x = game.width / 2;
      this.topground.y = 0;
      this.frontground.x = game.width / 2;
      this.frontground.y = game.height;

      this.group.x = game.width / 2;
      this.levelBar.x = this.group.x - this.groupBase3.x;
      this.levelBar.y = this.topground.texture.height * this.topground.scale.y / 4;
      this.tuningGroup.x = 25 * this.tuningGroup.scale.x;
      this.tuningGroup.y = -2 * this.tuningGroup.scale.y * 15;
      this.groupUpgrades.x = game.width / 2;
      this.groupUpgrades.y = game.height;

      this.bullets.removeAll();

      this.player0.x = 0;
      this.player0.y = 0;
      this.player0.body.x = this.player0.x;
      this.player0.body.y = this.player0.y;

      this.group.scale.x = game.height / 1280;
      this.group.scale.y = game.height / 1280;
      this.group.y = game.height * 995 / 1280;

      this.bottomBounds.x = 0;
      this.megaScale = game.height / this.background.texture.height;

      this.scaleBallPhysicsRadius = 1;

      this.scaleBulletRadius = 23;
      this.bulletOffsetY = 25;
      this.bulletOffsetX = 20;

      if (game.height < game.width) {
        // LANDSCAPE
        this.bottomBounds.y = 256 * this.background.scale.y - 70 * game.height / game.width;
        if (game.width / game.height > 2) {
          this.bottomBounds.y += 20 * game.width / game.height;
          if (game.width / game.height > 2.48) this.bottomBounds.y += 5 * game.width / game.height;
        }
        this.background.y = 0;
        this.background.scale.y = game.height / this.background.texture.height;
        this.background.scale.x = this.background.scale.y;
        this.topground.visible = false;
        var oldscale = (game.width - 918 * this.topground.scale.x) / 2 / 390;
        var coeff = (game.height - 64 * this.background.scale.y) / (game.height - 64 * this.background.scale.y - 276 * this.background.scale.y);
        this.group.scale.x = game.height / 1280 * coeff;
        this.group.scale.y = this.group.scale.x;
        this.frontground.scale.x *= coeff * 1.01;
        this.frontground.scale.y *= coeff;
        this.frontground.y = game.height + 276 * this.frontground.scale.y;

        if (game.width / game.height > 1.3) {
          this.levelBar.x = this.group.x - this.groupBase3.x + game.width / 2 - 280 - 50 * (game.width - game.height) / game.height;
          this.levelBar.scale.x = 0.5 + 0.4 * (game.width - game.height) / game.width;
          this.levelBar.scale.y = this.levelBar.scale.x;
        }

        this.shopGroup.scale.x = 1 - (game.width - game.height) / game.width;
        this.shopGroup.scale.y = this.shopGroup.scale.x;

        if (game.width / game.height > 2.2) {
          this.shopGroup.y = 5 * 179 * this.shopGroup.scale.x;
        }

        this.groupBase2.visible = true;

        this.player0.scale.x = 0.75 * 0.8;
        this.player0.scale.y = 0.75 * 0.8;

        this.player0.body.setCircle(2 * this.player0.texture.height * this.player0.scale.y * 0.2 * this.group.scale.y * 0.85);

        this.player0.body.offset.y = 70 + 1.7 * 120 * 5 / 9 * ((game.width - game.height) / game.width);
        this.player0.body.offset.x = 90 + 0.5 * 60 * 5 / 9 * ((game.width - game.height) / game.height);

        this.scaleBallPhysicsRadius = this.group.scale.x;
        this.offsetForBallPhysics = 150 - 148 * this.group.scale.x;

        this.scaleBulletRadius = 6.42 + 15.6 * this.group.scale.x;
        this.bulletOffsetY = 48.6 - 15.6 * this.group.scale.x;
        this.bulletOffsetX = this.bulletOffsetY * 0.75;

        this.background3.y = game.height / 2;
        this.background4.y = this.background3.y;
        this.background3.scale.y = game.height / 720;
        this.background4.scale.y = this.background3.scale.y;

        this.background4.x = 0;
        this.background3.x = game.width;

        this.background4.scale.x = coeff * oldscale - (coeff - 1) / (2 * this.background4.texture.width) * game.width;
        this.background3.scale.x = -this.background4.scale.x;

        this.leftBounds.x = 390 * this.background4.scale.x - 20;
        this.rightBounds.x = this.background3.x + 390 * this.background3.scale.x;

        this.tuningGroup.scale.x = 0.5; // game.height / game.width;
        this.tuningGroup.scale.y = this.tuningGroup.scale.x;

        this.tuningGroup.x = 10 * this.tuningGroup.scale.x;
        this.tuningGroup.y = -2 * this.tuningGroup.scale.y;

        this.groupUpgrades.scale.x = 0.9 * (this.rightBounds.x - this.leftBounds.x) / this.speedButton.texture.width;
        this.groupUpgrades.scale.y = this.groupUpgrades.scale.x;

        this.coinIcon.scale.x = this.topground.scale.x * game.height / game.width * 1.1;
        this.coinIcon.scale.y = this.topground.scale.y * game.height / game.width * 1.1;
        this.diamondIcon.scale = this.coinIcon.scale;

        this.coinIcon.x = this.levelBar.x + (this.levelBar.texture.width / 2 + this.forlevel1.texture.width + 1.5 * this.coinIcon.texture.width) * this.levelBar.scale.x;

        if (5 * game.width < 6 * game.height) {
          this.coinIcon.x = this.levelBar.x + (this.levelBar.texture.width / 2 + this.forlevel1.texture.width + 1 * this.coinIcon.texture.width) * this.levelBar.scale.x;
        }

        if (game.width > 2 * game.height) {
          this.coinIcon.x = this.levelBar.x + (this.levelBar.texture.width / 2 + this.forlevel1.texture.width + 4 * this.coinIcon.texture.width) * this.levelBar.scale.x;
          this.coinIcon.scale.x = this.levelBar.scale.x * 2;
          this.coinIcon.scale.y = this.levelBar.scale.y * 2;
          this.diamondIcon.scale = this.coinIcon.scale;
        }

        if (this.overlay) {
          this.overlay.scale.x = Math.abs(this.rightBounds.x - this.leftBounds.x) / 473;
          this.overlay.scale.y = game.height / 750;
          this.overlay.x = game.width / 2;
          this.overlay.y = 0;
        }

        this.tuningButton.x = 1.5 * game.width / game.height * 0.8 * 179 * (1 - (game.width - game.height) / game.width);
        this.screen_button.x = this.tuningButton.x;
        this.pauseButton.x = this.tuningButton.x;

        this.shopGroup.x = this.groupUpgrades.x + 720 * this.groupUpgrades.scale.x / 2 - 179 * 0.75 * this.shopGroup.scale.x;
        this.shopGroup.y = this.groupUpgrades.y - 251 * this.groupUpgrades.scale.y * 1.7;

        this.coinIcon.y = this.levelBar.y;

        this.coinIcon.scale.x = this.levelBar.scale.x;
        this.coinIcon.scale.y = this.coinIcon.scale.y;

        this.diamondIcon.scale.x = this.coinIcon.scale.x;
        this.diamondIcon.scale.y = this.diamondIcon.scale.x;

        this.coinIcon.x = this.levelBar.x + (this.levelBar.texture.width / 2 + this.forlevel1.texture.width + 1 * this.coinIcon.texture.width) * this.levelBar.scale.x;

        this.shopGroup.x = game.width - 179 * this.shopGroup.scale.x;
        this.shopGroup.y = this.tuningGroup.y + 179 * this.shopGroup.scale.y;

        this.diamondIcon.x = this.coinIcon.x;
        this.diamondIcon.y = this.coinIcon.y + this.diamondIcon.texture.height * this.diamondIcon.scale.y;

        if (game.device.desktop) {
          this.shopGroup.x = this.groupUpgrades.x + 720 * 0.4 * this.groupUpgrades.scale.x;
          this.shopGroup.y = this.groupUpgrades.y - 251 * this.groupUpgrades.scale.y * 1.6;
          if (game.width > game.height) {
            this.shopGroup.x = game.width - 179 * this.shopGroup.scale.x;
            this.shopGroup.y = this.tuningGroup.y + 179 * this.shopGroup.scale.y;
          }

          this.coinIcon.x = this.shopGroup.x;
          this.diamondIcon.x = this.coinIcon.x;

          this.coinIcon.y = this.levelBar.y;

          this.levelBar.scale.x = 0.5 + 0.4 * (game.width - game.height) / game.width;
          this.levelBar.scale.y = this.levelBar.scale.x;

          this.coinIcon.scale.x = this.levelBar.scale.x;
          this.coinIcon.scale.y = this.coinIcon.scale.y;

          this.diamondIcon.scale.x = this.coinIcon.scale.x;
          this.diamondIcon.scale.y = this.diamondIcon.scale.x;

          this.diamondIcon.y = this.coinIcon.y + this.diamondIcon.texture.height * this.diamondIcon.scale.y;

          this.tuningGroup.x = this.background4.x + this.tuningButton.texture.width * this.tuningGroup.scale.x;
          this.tuningGroup.scale.x = 0.4;
          this.tuningGroup.scale.y = this.tuningGroup.scale.x;

          this.screen_button.x = this.tuningButton.x;
          this.pauseButton.x = this.screen_button.x;

          this.tuningButton.y = this.diamondIcon.y + 0.5 * this.tuningButton.texture.height * this.shopGroup.scale.y;
          this.screen_button.y = this.tuningButton.y + 10 * this.tuningGroup.scale.y;

          this.levelBar.x = this.group.x - this.groupBase3.x;
          this.levelBar.y = this.topground.texture.height * this.topground.scale.y / 4;
        }
      } else {
        // PORTRAIT
        this.bottomBounds.y = -20;
        this.frontground.y = game.height;
        this.topground.visible = false; // true; // возможно, что будет мешать для других шкур

        this.shopGroup.scale.x = 1 - 0.3 * (-game.width + game.height) / game.width;
        this.shopGroup.scale.y = this.shopGroup.scale.x;

        this.groupBase2.visible = false;
        this.megaScale = 1;

        if (game.width > 800) {
          // ipad
          this.scaleBulletRadius = 30;
          this.bulletOffsetY = 20;
          this.bulletOffsetX = 20;
        } else if (game.width < 620) {
          // iphoneX
          this.scaleBulletRadius = 23;
          this.bulletOffsetY = 31;
          this.bulletOffsetX = 20;
        }

        this.group.y = game.height * 995 / 1280;

        if (game.width / game.height > 0.7) {
          this.frontground.scale.x = game.width / 918;
          this.background.scale.x = game.width / 918;
          this.topground.scale.x = game.width / 918;
        }

        //      if (game.width / game.height < 0.6) {
        this.coinIcon.scale.x = this.topground.scale.x * game.width / game.height * 1.05;
        this.coinIcon.scale.y = this.topground.scale.x * game.width / game.height * 1.05;
        this.diamondIcon.scale = this.coinIcon.scale;
        //      }

        if (game.width / game.height < 0.42) {
          // для сильно узких, которые уже айфонХ даже... в общем, их не бывает :)
          this.scaleBulletRadius *= 0.9;
        }
        this.player0.scale.x = 0.75 * 0.8;
        this.player0.scale.y = 0.75 * 0.8;

        this.player0.body.setCircle(2 * this.player0.texture.height * 0.65 * 0.2 * this.group.scale.y * 0.85);

        this.player0.body.offset.y = 60 - 10 * ((-game.width + game.height) / game.width);
        this.player0.body.offset.x = 90 + (-game.width + game.height) / game.width;

        this.scaleBulletRadius = 25 - 3 * (game.height - game.width) / game.height;

        this.levelBar.scale.x = game.width / 720 * 0.7;
        this.levelBar.scale.y = this.levelBar.scale.x;
        this.tuningGroup.scale.x = 0.36;
        this.tuningGroup.scale.y = 0.36;
        this.groupUpgrades.scale.x = game.width / this.speedButton.texture.width;
        this.groupUpgrades.scale.y = this.groupUpgrades.scale.x;

        this.shopGroup.x = this.groupUpgrades.x + 720 * this.groupUpgrades.scale.x / 2 - 179 * 0.75 * this.shopGroup.scale.x;
        this.shopGroup.y = this.groupUpgrades.y - 251 * this.groupUpgrades.scale.y * 1.7 - 15;

        this.scaleBallPhysicsRadius = 0.7 * 1280 / game.height * (1 + 0.6 * (game.height - game.width) / game.height);

        if (game.height < 1.35 * game.width) {
          this.offsetForBallPhysics = 25 * (game.width / game.height);
        } else {
          this.offsetForBallPhysics = 0 * (game.width / game.height);
        }

        this.leftBounds.x = -this.leftBounds.texture.width;
        this.rightBounds.x = game.width + this.leftBounds.texture.width;

        if (this.overlay) {
          this.overlay.scale.x = 1.01 * game.width / 473;
          this.overlay.scale.y = game.height / 750;
          this.overlay.x = game.width / 2;
          this.overlay.y = 0;
        }

        this.tuningButton.x = 0.8 * 179 * (1 - 0.3 * (-game.width + game.height) / game.width) + 0.4 * this.tuningButton.texture.width;
        this.screen_button.x = this.tuningButton.x;
        this.pauseButton.x = this.screen_button.x;

        this.coinIcon.y = this.levelBar.y;

        this.coinIcon.scale.x = this.levelBar.scale.x;
        this.coinIcon.scale.y = this.coinIcon.scale.y;

        this.diamondIcon.scale.x = this.coinIcon.scale.x;
        this.diamondIcon.scale.y = this.diamondIcon.scale.x;

        this.coinIcon.x = this.levelBar.x + (this.levelBar.texture.width / 2 + this.forlevel1.texture.width + 1 * this.coinIcon.texture.width) * this.levelBar.scale.x;

        this.diamondIcon.x = this.coinIcon.x;
        this.diamondIcon.y = this.coinIcon.y + this.diamondIcon.texture.height * this.diamondIcon.scale.y;
      }

      if (this.endcard !== null && this.endcard) {
        // если создан эндкард
        if (game.width > game.height) {
          this.scaleEndcard = 0.5 * 1.3 * Math.abs(this.rightBounds.x - this.leftBounds.x) / 670;
        } else {
          this.scaleEndcard = game.width * 0.7 / this.endcard.texture.width;
        }
        this.endcard.x = game.width / 2 - this.groupBase3.x;
        this.endcard.y = game.height / 2 - this.groupBase3.y + 50;
        this.endcard.scale.x = this.scaleEndcard;
        this.endcard.scale.y = this.scaleEndcard;
        this.levelBar.x = 10;
        this.levelBar.y = 30;
        this.levelBar.scale.x = 500 / 459;
        this.levelBar.scale.y = 500 / 459;
        if (game.width > game.height) {
          this.groupBase3.add(this.endcard);
        } else {
          this.groupBase3.add(this.endcard);
        }
      }

      if (this.wincard !== null && this.wincard) {
        // если создан эндкард
        if (game.width > game.height) {
          this.scaleEndcard = 0.5 * 1.3 * Math.abs(this.rightBounds.x - this.leftBounds.x) / 670;
        } else {
          this.scaleEndcard = game.width * 0.7 / this.wincard.texture.width;
        }
        this.wincard.x = game.width / 2 - this.groupBase3.x;
        this.wincard.y = game.height / 2 - this.groupBase3.y + 60;
        this.wincard.scale.x = this.scaleEndcard;
        this.wincard.scale.y = this.scaleEndcard;
        if (game.width > game.height) {
          this.groupBase3.add(this.wincard);
        } else {
          this.groupBase3.add(this.wincard);
        }
      }

      if (this.logo) this.repositionLogo();

      this.thirdLayer.x = this.group.x;
      this.thirdLayer.y = this.group.y;

      if (this.balls.length !== 0) {
        this.repositionBalls();
      }

      this.topBounds.x = game.width / 2;
      this.topBounds.y = -300 * this.group.scale.x; // -this.topBounds.texture.width;

      this.pauseButton.x = this.tuningButton.x;
      this.pauseButton.y = this.tuningButton.y;
      this.pauseButton.scale.x = this.tuningButton.scale.x;
      this.pauseButton.scale.y = this.tuningButton.scale.y;
    }
  }, {
    key: 'repositionBalls',
    value: function repositionBalls() {
      this.balls.children.forEach(function (item, index) {
        if (!item.tweened) this.forDeleteBalls = false;

        var high = this.chooseHigh(item.size);
        var sizeCoeff = void 0;
        switch (item.size) {
          case 'big':
            // high = -game.height * 0.75;
            // if (game.width > game.height) {
            //   high = -game.height / this.group.scale.y + 100 / this.group.scale.y;
            //   if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
            // }
            sizeCoeff = 0.5;
            break;
          case 'medium':
            // high = -game.height * 0.65;
            // if (game.width > game.height) {
            //   high = -game.height / this.group.scale.y + 150 / this.group.scale.y;
            //   if (game.width / game.height > 1.8) high += game.width / game.height * 120 * this.group.scale.y;
            // }
            sizeCoeff = 0.7;
            break;
          default:
            // high = -game.height * 0.6;
            // if (game.width > game.height) {
            //   if (game.width / game.height > 1.8) high += game.width / game.height * 100 * this.group.scale.y;
            // }
            sizeCoeff = 1;
        }
        //      if (game.height > game.width) high = high / 1.1;

        var dir = 1;
        if (Math.random > 0.5) dir = -1;
        if (game.width > game.height) {
          item.fromRight = false;
          if (dir > 0) item.fromRight = true;
        }
        if (!this.freeze) {
          item.body.velocity.x = -200 * dir * this.speedCoeff * sizeCoeff;
          item.body.velocity.y = 0;
        }

        item.body.setCircle(this.scaleBallPhysicsRadius * this.chooseRadius(item.size));
        if (game.width > game.height) {
          item.body.offset.x = this.offsetForBallPhysics * this.physicsRadius / 150;
          item.body.offset.y = this.offsetForBallPhysics * this.physicsRadius / 150;
        } else {
          item.body.offset.x = this.offsetForBallPhysics * this.physicsRadius / 105;
          item.body.offset.y = this.offsetForBallPhysics * this.physicsRadius / 105;
          //        item.tupse = true;
        }

        item.y = high; // -game.height + 150;
        item.x = index * 20 * Math.sign(Math.random() - 0.45);
      }, this);

      while (!this.forDeleteBalls) {
        this.forDeleteBalls = true;
        this.balls.children.forEach(function (item) {
          if (!item.tweened) {
            this.balls.remove(item);
            switch (item.size) {
              case 'powerup':
                this.ballsOnLevelNow -= 1;
                this.flyUp = false;
                break;
              case 'big':
                this.ballsOnLevelNow -= 7;
                break;
              case 'medium':
                this.ballsOnLevelNow -= 3;
                break;
              default:
                this.ballsOnLevelNow -= 1;
            }
            item.kill();
            this.forDeleteBalls = false;
          }
        }, this);
        if (this.balls.children.length === 0) this.forDeleteBalls = true;
      }

      // if (this.helperPlayer) {
      //   this.helperPlayer.y = this.player0.y;
      // }
      this.coinGroup.children.forEach(function (item, index, array) {
        item.y = this.bottomBounds.y - 30;
      }, this);

      this.upgradeSmallGroup.children.forEach(function (item, index, array) {
        item.y = this.bottomBounds.y - 5;
        if (item.x > this.player0.x + 200) {
          item.x = this.player0.x + 200;
        }
        if (item.x < this.player0.x - 200) {
          item.x = this.player0.x - 200;
        }
      }, this);
    }
  }, {
    key: 'startPlay',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(this.playerSkinButton.pressed || this.coinButtonHead.pressed || this.coinButton.pressed || this.speedButton.pressed || this.speedButtonHead.pressed || this.strengthButton.pressed || this.strengthButtonHead.pressed || this.tuningButton.pressed || this.speed_stone1.pressed || this.damage_stone2.pressed || this.coin_stone3.pressed || this.noiseButtonS.pressed || this.musicButtonS.pressed || this.vibroButtonS.pressed || this.brandingButton.pressed)) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt('return');

              case 2:
                this.screen_button.scale.y = 0;
                this.player.idle = true;
                this.tweenFingerOff();
                _context8.next = 7;
                return _famobiApi2.default.instance.onLevelStart(this.level);

              case 7:
                this.stop = false;
                this.groupUpgrades.visible = false;
                this.shopGroup.visible = false;
                this.pauseButton.visible = true;
                this.tuningButton.visible = false;
                this.screen_button.visible = false;
                if (this.logo) this.logo.visible = false;
                this.forlevelBegin.visible = false;
                this.levelBar.visible = true;
                this.routingSuperStartButton = 'within';
                this.superStartButton2.station = 'playing';
                this.resize();

              case 19:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function startPlay() {
        return _ref8.apply(this, arguments);
      }

      return startPlay;
    }()

    // render() {
    //   this.game.debug.body(this.bottomBounds);
    //   this.game.debug.body(this.leftBounds);
    //   this.game.debug.body(this.rightBounds);
    //   this.game.debug.body(this.topBounds);
    // }

  }, {
    key: 'update',
    value: function update() {
      if (!this.player0.died && this.routingSuperStartButton !== 'levelComplete' && this.game.input.activePointer.isDown && this.shopPressed === 0 && (this.routingSuperStartButton === 'begin' || this.routingSuperStartButton === 'logo1')) {
        this.startPlay();
      }

      if (this.shopPressed !== 0) return;

      this.player0.body.velocity.x = 0;
      this.player0.body.velocity.y = 0;

      var dt = this.time.delta / 1000;

      if (!this.stop && !this.player0.died) {
        if (game.width > game.height) {
          this.player0.y = this.bottomBounds.y + 20;
        } else {
          this.player0.y = 0;
        }

        this.player0.body.velocity.x = 0;
        this.player0.body.velocity.y = 0;

        if (this.levelComplete) {
          if (this.tempAll && this.coinGroup.length === 0 && this.diamondGroup.length === 0) {
            this.changeLevel(false);
            this.tempAll = false;
          }
        }

        if (this.game.input.activePointer.isUp && !this.leftKeyPressed && !this.rightKeyPressed && !this.spaceKeyPressed) {
          if (this.slowMoTime === 0) {
            this.player.loadTexture('miner' + this.player.number + 'idle');
            this.player.y = this.playerArray[this.player.number][0];
            this.player.idle = true;
          }
          this.slowMoTime += dt;
          if (this.slowMoTime > 0) {
            game.time.slowMotion = 1.1;
          }
        } else {
          this.slowMoTime = 0;
          game.time.slowMotion = 1;
          if (this.player.idle && this.routingSuperStartButton !== 'levelComplete') {
            if (this.fireUp) {
              this.player.loadTexture('miner' + this.player.number + 'fast');
              this.player.y = this.playerArray[this.player.number][2];
              this.player.animations.stop();
              this.player.play('goon', this.bulletsPerSec * 10, true);
            } else {
              this.player.loadTexture('miner' + this.player.number + 'throw');
              this.player.y = this.playerArray[this.player.number][1];
              this.player.animations.stop();
              this.player.play('goon', this.bulletsPerSec * 10, true);
            }
            this.player.idle = false;
          }
        }

        if (this.timeForUp > 10) {
          // for definiton of upgrade life
          this.upgradeIs = false;
          this.offUp();
        }

        if (this.freeze && this.ballUnderFreeze) {
          // to fine-tune the balls to the desired point
          this.offBallphysic();
        }

        if (this.shieldSprite) {
          // position of shield
          this.shieldSprite.x = this.player0.x;
          this.shieldSprite.y = this.player0.y - 100;
        }

        this.timeFor += dt;

        if (this.timeForUp !== -1) {
          this.timeForUp += dt;
        }

        if (this.bullets) {
          this.bullets.children.forEach(function (item, index, array) {
            if (item.y < -2.5 * this.group.y) {
              array.splice(index, 1);
              item.body.destroy();
              item.kill();
              if (item) item = null;
            }
          }, this);
        }

        this.game.physics.arcade.overlap(this.bounds2, this.balls, this.snake3, null, this);
        this.game.physics.arcade.overlap(this.bottomBounds, this.balls, this.snake, null, this);
        this.game.physics.arcade.overlap(this.bottomBounds, this.coinGroup, this.snake22, null, this);
        this.game.physics.arcade.overlap(this.bottomBounds, this.diamondGroup, this.snake22, null, this);
        if (game.width > game.height) {
          this.game.physics.arcade.overlap(this.bounds2, this.coinGroup, this.snake5, null, this);
          this.game.physics.arcade.overlap(this.bounds2, this.diamondGroup, this.snake5, null, this);
        }
        this.game.physics.arcade.overlap(this.bottomBounds, this.upgradeSmallGroup, this.snake4, null, this);

        if (this.timeFor - this.prevTimeBall > this.ballBornTime && !this.freeze) {
          // периодическое рождение большого
          this.createBall('big', 0, 0, 'right', this.maxLivesOnLevel, false, 78);
          this.prevTimeBall = this.timeFor;
        }

        if (!this.fireUp) {
          if (this.bulletsPerSec > 20) {
            // если пуль больше чем одна, то запускать нужно каждый раз через 0.1
            if (this.timeFor - this.prevTimeBullet > 0.05 && (this.game.input.activePointer.isDown || this.spaceKeyPressed || this.upKeyPressed)) {
              this.fireNew(this.bulletsPerSec);
              this.prevTimeBullet = this.timeFor;
              if (this.isPlayerFire === false) {
                this.isPlayerFire = true;
              }
            }
          } else if (this.timeFor - this.prevTimeBullet > 1 / this.bulletsPerSec && (this.game.input.activePointer.isDown || this.spaceKeyPressed || this.upKeyPressed)) {
            this.fireNew(this.bulletsPerSec);
            this.prevTimeBullet = this.timeFor;
            if (this.isPlayerFire === false) {
              this.isPlayerFire = true;
            }
          }
        } else if (this.bulletsPerSec + 5 > 20) {
          // если пуль больше чем одна, то запускать нужно каждый раз через 0.1
          if (this.timeFor - this.prevTimeBullet > 0.05 && (this.game.input.activePointer.isDown || this.leftKeyPressed || this.rightKeyPressed || this.upKeyPressed)) {
            this.fireNew(this.bulletsPerSec + 5);
            this.prevTimeBullet = this.timeFor;
            if (this.isPlayerFire === false) {
              this.isPlayerFire = true;
            }
          }
        } else if (this.timeFor - this.prevTimeBullet > 1 / (this.bulletsPerSec + 5) && (this.game.input.activePointer.isDown || this.leftKeyPressed || this.rightKeyPressed || this.upKeyPressed)) {
          this.fireNew(this.bulletsPerSec + 5);
          this.prevTimeBullet = this.timeFor;
          if (this.isPlayerFire === false) {
            this.isPlayerFire = true;
          }
        }

        if (this.game.input.activePointer.isUp && !this.leftKeyPressed && !this.rightKeyPressed) {
          this.player.animations.stop(0);
          this.isPlayerFire = false;
        }

        if (this.balls.length === 0 && this.freeze) {
          this.freeze = false;
          this.ballUnderFreeze = false;
          if (this.timeFor - this.prevTimeBall > 0.2) {
            this.createBall('big', 0, 0, 'right', this.maxLivesOnLevel);
            this.prevTimeBall = this.timeFor;
          }
        }

        if (this.balls.length === 0 && !this.freeze) {
          if (this.timeFor - this.prevTimeBall > 0.2) {
            this.createBall('big', 0, 0, 'right', this.maxLivesOnLevel, false, 78);
            this.prevTimeBall = this.timeFor;
          }
        }

        this.game.physics.arcade.overlap(this.bullets, this.balls, this.hitting, null, this);
        if (!this.shield && !this.freeze) {
          this.game.physics.arcade.overlap(this.balls, this.player0, this.changeLevel0, null, this);
        } else {
          this.game.physics.arcade.overlap(this.balls, this.player0, this.shieldReaction, null, this);
        }
        this.game.physics.arcade.overlap(this.coinGroup, this.player0, this.takeCoin, null, this);
        this.game.physics.arcade.overlap(this.diamondGroup, this.player0, this.takeDiamond, null, this);
        if (!this.coinRainVariable) {
          this.game.physics.arcade.overlap(this.upgradeSmallGroup, this.player0, this.takeUp, null, this);
        }

        // the control of the player by mouse
        if (this.timeForAcceleration !== -1) {
          this.timeForAcceleration += dt;
        }

        if (this.player && this.game.input.activePointer.isDown) {
          if (this.player0.x < this.game.input.x - this.group.x) {
            if (this.helper) this.player0.scale.x = Math.abs(this.player0.scale.x);
            if (this.turnOfMoving !== 'right') {
              this.turnOfMoving = 'right';
              if (true) {
                this.timeForAcceleration = 0;
              }
            }
            if (this.timeForAcceleration === -1) {
              this.player0.x += 15;
            } else {
              this.player0.x += 15 + 750 * this.timeForAcceleration * this.timeForAcceleration;
            }
            if (this.player0.x > this.game.input.x - this.group.x) {
              this.player0.x = this.game.input.x - this.group.x;
              if (this.helper) this.player0.scale.x = Math.abs(this.player0.scale.x);
            }
          } else if (this.player0.x !== this.game.input.x - this.group.x) {
            if (this.helper) this.player0.scale.x = -Math.abs(this.player0.scale.x);
            if (this.turnOfMoving !== 'left') {
              this.turnOfMoving = 'left';
              if (true) {
                this.timeForAcceleration = 0;
              }
            }

            if (this.timeForAcceleration === -1) {
              this.player0.x -= 15;
            } else {
              this.player0.x -= 15 + 750 * this.timeForAcceleration * this.timeForAcceleration;
            }
            if (this.player0.x < this.game.input.x - this.group.x) {
              if (this.helper) this.player0.scale.x = -Math.abs(this.player0.scale.x);
              this.player0.x = this.game.input.x - this.group.x;
            }
          }

          if (game.height > game.width) {
            if (this.player0.x < -game.width / 2 / this.group.scale.x) {
              this.player0.x = -game.width / 2 / this.group.scale.x;
            }
            if (this.player0.x > game.width / 2 / this.group.scale.x) {
              this.player0.x = game.width / 2 / this.group.scale.x;
            }
          } else {
            if (this.player0.x < (this.leftBounds.x - this.group.x) / this.group.scale.x + this.player0.texture.width / 6 * this.group.scale.x) {
              this.player0.x = (this.leftBounds.x - this.group.x) / this.group.scale.x + this.player0.texture.width / 6 * this.group.scale.x;
            }
            if (this.player0.x > (this.rightBounds.x - this.group.x) / this.group.scale.x) {
              this.player0.x = (this.rightBounds.x - this.group.x) / this.group.scale.x;
            }
          }
        }
        if (this.player && this.game.input.activePointer.isUp) {
          this.turnOfMoving = 'stop';
          this.timeForAcceleration = -1;
        }

        if (this.player && this.leftKeyPressed === 1) {
          this.player0.x -= 15;
          if (this.helper) this.player0.scale.x = -Math.abs(this.player0.scale.x);
          if (game.height > game.width) {
            if (this.player0.x < -game.width / 2 / this.group.scale.x) {
              this.player0.x = -game.width / 2 / this.group.scale.x;
            }
            if (this.player0.x > game.width / 2 / this.group.scale.x) {
              this.player0.x = game.width / 2 / this.group.scale.x;
            }
          } else {
            if (this.player0.x < (this.leftBounds.x - this.group.x) / this.group.scale.x + this.player0.texture.width / 6 * this.group.scale.x) {
              this.player0.x = (this.leftBounds.x - this.group.x) / this.group.scale.x + this.player0.texture.width / 6 * this.group.scale.x;
            }
            if (this.player0.x > (this.rightBounds.x - this.group.x) / this.group.scale.x) {
              this.player0.x = (this.rightBounds.x - this.group.x) / this.group.scale.x;
            }
          }
        }
        if (this.player && this.rightKeyPressed === 1) {
          this.player0.x += 15;
          if (this.helper) this.player0.scale.x = Math.abs(this.player0.scale.x);
          if (game.height > game.width) {
            if (this.player0.x < -game.width / 2 / this.group.scale.x) {
              this.player0.x = -game.width / 2 / this.group.scale.x;
            }
            if (this.player0.x > game.width / 2 / this.group.scale.x) {
              this.player0.x = game.width / 2 / this.group.scale.x;
            }
          } else {
            if (this.player0.x < (this.leftBounds.x - this.group.x) / this.group.scale.x + this.player0.texture.width / 6 * this.group.scale.x) {
              this.player0.x = (this.leftBounds.x - this.group.x) / this.group.scale.x + this.player0.texture.width / 6 * this.group.scale.x;
            }
            if (this.player0.x > (this.rightBounds.x - this.group.x) / this.group.scale.x) {
              this.player0.x = (this.rightBounds.x - this.group.x) / this.group.scale.x;
            }
          }
        }

        // if (this.player0.body) {
        //   this.game.debug.body(this.player0, 'rgba(255,0,0,0.5)');
        // }
        // if (this.upgradeSmallGroup.children[0]) {
        //   this.game.debug.body(this.upgradeSmallGroup.children[0], 'rgba(255,0,0,0.5)');
        // }
        // if (this.upgradeSmallGroup.children[1]) {
        //   this.game.debug.body(this.upgradeSmallGroup.children[1], 'rgba(255,0,0,0.5)');
        // }
        // if (this.upgradeSmallGroup.children[2]) {
        //   this.game.debug.body(this.upgradeSmallGroup.children[2], 'rgba(255,0,0,0.5)');
        // }
        // if (this.upgradeSmallGroup.children[3]) {
        //   this.game.debug.body(this.upgradeSmallGroup.children[3], 'rgba(255,0,0,0.5)');
        // }

        // if (this.coinGroup.children[0]) {
        //   this.game.debug.body(this.coinGroup.children[0], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[0]) {
        //   this.game.debug.body(this.coinGroup.children[0], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[0]) {
        //   this.game.debug.body(this.coinGroup.children[0], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[1]) {
        //   this.game.debug.body(this.coinGroup.children[1], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[2]) {
        //   this.game.debug.body(this.coinGroup.children[2], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[3]) {
        //   this.game.debug.body(this.coinGroup.children[3], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[4]) {
        //   this.game.debug.body(this.coinGroup.children[4], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[5]) {
        //   this.game.debug.body(this.coinGroup.children[5], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[6]) {
        //   this.game.debug.body(this.coinGroup.children[6], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[7]) {
        //   this.game.debug.body(this.coinGroup.children[7], 'rgba(255,0,0,0.5)');
        // }
        // if (this.coinGroup.children[8]) {
        //   this.game.debug.body(this.coinGroup.children[8], 'rgba(255,0,0,0.5)');
        // }


        // if (this.bullets.children[0]) {
        //   this.game.debug.body(this.bullets.children[0], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[1]) {
        //   this.game.debug.body(this.bullets.children[1], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[2]) {
        //   this.game.debug.body(this.bullets.children[2], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[3]) {
        //   this.game.debug.body(this.bullets.children[3], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[4]) {
        //   this.game.debug.body(this.bullets.children[4], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[5]) {
        //   this.game.debug.body(this.bullets.children[5], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[6]) {
        //   this.game.debug.body(this.bullets.children[6], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[7]) {
        //   this.game.debug.body(this.bullets.children[7], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[8]) {
        //   this.game.debug.body(this.bullets.children[8], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[9]) {
        //   this.game.debug.body(this.bullets.children[9], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[10]) {
        //   this.game.debug.body(this.bullets.children[10], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[11]) {
        //   this.game.debug.body(this.bullets.children[11], 'rgba(255,0,0,0.5)');
        // }
        // if (this.bullets.children[12]) {
        //   this.game.debug.body(this.bullets.children[12], 'rgba(255,0,0,0.5)');
        // }

        // if (this.bottomBounds) {
        //   this.game.debug.body(this.bottomBounds, 'rgba(255,0,0,0.5)');
        // }
        // if (this.rightBounds) {
        //   this.game.debug.body(this.rightBounds, 'rgba(255,0,0,0.5)');
        // }
        // if (this.leftBounds) {
        //   this.game.debug.body(this.leftBounds, 'rgba(255,0,0,0.5)');
        // }
        // if (this.topBounds) {
        //   this.game.debug.body(this.topBounds, 'rgba(255,0,0,0.5)');
        // }

        // if (this.balls.children[0]) {
        //   //console.log(this.balls.children[0].x, this.balls.children[0].y);
        //   this.game.debug.body(this.balls.children[0], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[1]) {
        //   this.game.debug.body(this.balls.children[1], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[2]) {
        //   this.game.debug.body(this.balls.children[2], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[3]) {
        //   this.game.debug.body(this.balls.children[3], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[4]) {
        //   this.game.debug.body(this.balls.children[4], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[5]) {
        //   this.game.debug.body(this.balls.children[5], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[6]) {
        //   this.game.debug.body(this.balls.children[6], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[7]) {
        //   this.game.debug.body(this.balls.children[7], 'rgba(255,0,0,0.5)');
        // }
        // if (this.balls.children[8]) {
        //   this.game.debug.body(this.balls.children[8], 'rgba(255,0,0,0.5)');
        // }
      }
    }
  }, {
    key: 'timeout',
    value: function timeout(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }]);

  return _class;
}(_phaser.State);

exports.default = _class;

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

var _sprite = __webpack_require__(47);

var _sprite2 = _interopRequireDefault(_sprite);

var _frameButton = __webpack_require__(108);

var _frameButton2 = _interopRequireDefault(_frameButton);

var _screenManager = __webpack_require__(151);

var _screenManager2 = _interopRequireDefault(_screenManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Overlay from '../../services/Overlay';


//import Frame from '../../services/Frame';
//import CoinDisplay from './CoinDisplay';
//import NextToBeatPopUp from "../next-to-beat/next-to-beat-pop-up";
//import Score from "./score";
//import {BitmapText} from "phaser-ce/build/custom/phaser-no-physics";

var GameUI = function (_Phaser$Group) {
    _inherits(GameUI, _Phaser$Group);

    function GameUI(game) {
        _classCallCheck(this, GameUI);

        // this.clickGameOverlay = new Overlay({
        //   alpha: 0,
        // });
        // this.add(this.clickGameOverlay);
        // this.clickGameOverlay.events.onInputDown.add(() => {
        //   game.switchDirection.dispatch();
        // });

        // this.score = new Score(game.width / 2, 100, 'font', 128);
        // this.add(this.score);

        // this.score = new Text({
        //   text: '10000',
        //   x: this.game.width / 2,
        //   y: 30,
        //   fontSize: 45,
        //   color: '#FFFFFF',
        //   stroke: '#000000',
        //   strokeThickness: 3,
        // });
        // this.score.anchor.setTo(0.5, 0);
        // this.add(this.score);

        // this.scoreDescription = new Text({
        //   text: 'Score:',
        //   x: this.game.width / 2,
        //   y: 0,
        //   fontSize: 25,
        //   color: '#FFFFFF',
        //   stroke: '#000000',
        //   strokeThickness: 3,
        // });
        // this.scoreDescription.anchor.setTo(0.5, 0);
        // this.add(this.scoreDescription);

        // this.pauseButton = new Sprite({
        //   key: 'ui_pause_icon',
        //   position: { x: game.world.centerX - game.world.width / 2 + 150, y: game.world.centerY - game.world.height / 2 + 150 },
        //   anchorX: 0.5,
        //   anchorY: 0.5,
        //   scale: { x: 1, y: 1 },
        // });
        // this.pauseButton.inputEnabled = true;


        var _this = _possibleConstructorReturn(this, (GameUI.__proto__ || Object.getPrototypeOf(GameUI)).call(this, game));

        _this.pauseButton = new _frameButton2.default({
            iconImage: 'ui_pause_icon',
            x: game.world.centerX - game.world.width / 2 + 150,
            y: game.world.centerY - game.world.height / 2 + 150,
            inputEnabled: true,
            width: 70,
            height: 70,
            cornerRadius: 1,
            iconSize: 0.6,
            anchorX: 0,
            anchorY: 0
        });

        _this.pauseButton.doOnClick = function () {
            //ScreenManager.instance.openScreen('pause');
        };
        game.world.add(_this.pauseButton);

        // this.coinDisplay = new CoinDisplay(game.world.width - 160, game.world.height - 60);
        // this.add(this.coinDisplay);

        // this.nextToBeatPopUp = new NextToBeatPopUp({
        //   x: game.width - 120,
        //   y: 50,
        // });

        //    this.add(this.nextToBeatPopUp);

        // this.tutorialText = new BitmapText(game, game.world.width / 2, game.world.height / 2 + 300, 'font', 'Tap to turn', 42);
        // this.tutorialText.anchor.setTo(0.5);
        // this.tutorialText.visible = false;

        // this.add(this.tutorialText);
        // const textBobble = this.game.add.tween(this.tutorialText.scale)
        //   .to({ y: 0.8, x: 0.8 }, 800, Phaser.Easing.Sinusoidal.InOut, false)
        //   .to({ y: 1, x: 1 }, 800, Phaser.Easing.Sinusoidal.InOut, false)
        //   .loop(true);
        // textBobble.start();
        return _this;
    }

    // setScoreText(score) {
    //   // this.score.text = score;
    // }


    return GameUI;
}(_phaser2.default.Group);

exports.default = GameUI;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Places an overlay over the game screen, alpha and color can be set
var Overlay = function (_Phaser$Graphics) {
  _inherits(Overlay, _Phaser$Graphics);

  function Overlay(_ref) {
    var lineStyle = _ref.lineStyle,
        color = _ref.color,
        alpha = _ref.alpha,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? game.width : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? game.height : _ref$height,
        _ref$inputEnabled = _ref.inputEnabled,
        inputEnabled = _ref$inputEnabled === undefined ? true : _ref$inputEnabled,
        _ref$visible = _ref.visible,
        visible = _ref$visible === undefined ? true : _ref$visible;

    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, game));

    _this.x = x;
    _this.y = y;

    _this.lineStyle(lineStyle);
    _this.beginFill(color);
    _this.drawRect(0, 0, width, height);
    _this.endFill();

    _this.alpha = alpha;
    _this.inputEnabled = inputEnabled;
    _this.visible = visible;
    return _this;
  }

  return Overlay;
}(_phaser2.default.Graphics);

exports.default = Overlay;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _screen = __webpack_require__(152);

var _screen2 = _interopRequireDefault(_screen);

var _frame = __webpack_require__(109);

var _frame2 = _interopRequireDefault(_frame);

var _sprite = __webpack_require__(47);

var _sprite2 = _interopRequireDefault(_sprite);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

var _frameButton = __webpack_require__(108);

var _frameButton2 = _interopRequireDefault(_frameButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import NextToBeatManager from "../next-to-beat/next-to-beat-manager";

/*
Creates a pause screen, this screen is accessable through the pause button in the game.
 */
var PauseScreen = function (_Screen) {
  _inherits(PauseScreen, _Screen);

  function PauseScreen(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 'pause' : _ref$name,
        _ref$titleText = _ref.titleText,
        titleText = _ref$titleText === undefined ? 'Paused!' : _ref$titleText,
        _ref$screenHeight = _ref.screenHeight,
        screenHeight = _ref$screenHeight === undefined ? 410 : _ref$screenHeight;

    _classCallCheck(this, PauseScreen);

    // TODO get from settings

    //  this.buildSoundButtons();
    var _this = _possibleConstructorReturn(this, (PauseScreen.__proto__ || Object.getPrototypeOf(PauseScreen)).call(this, {
      name: name, titleText: titleText, screenHeight: screenHeight
    }));

    _this.buildButtons();
    // this.buildCurrencyDisplay();
    return _this;
  }

  _createClass(PauseScreen, [{
    key: 'buildButtons',
    value: function buildButtons() {
      var _this2 = this;

      this.quitButton = new _frameButton2.default({
        text: 'Quit',
        x: game.world.width / 2,
        y: game.world.height / 1.6,
        width: 300,
        height: 80
      });
      this.contentGroup.add(this.quitButton);
      this.quitButton.doOnClick = function () {
        _this2.closeScreenAnimation(function () {
          game.goToMain.dispatch();
          //        NextToBeatManager.instance.start();
          _this2.onCloseAnimationDone();
        });
      };

      this.resumeButton = new _frameButton2.default({
        text: 'Resume',
        x: game.world.width / 2,
        y: game.world.height / 1.85,
        width: 300,
        height: 80
      });
      this.contentGroup.add(this.resumeButton);
      this.resumeButton.doOnClick = function () {
        _this2.closeScreenAnimation(function () {
          _this2.onCloseAnimationDone();
          game.player.startAfterTimer();
        });
      };
    }
  }, {
    key: 'buildSoundButtons',
    value: function buildSoundButtons() {
      // this.soundButton = new FrameButton({
      //   iconImage: 'ui_sound_on_icon.png',
      //   width: 100,
      //   height: 100,
      //   cornerRadius: 1.2,
      //   iconSize: 0.4,
      //   x: game.world.width / 2 + 100,
      //   y: game.world.height / 2 - 80,
      // });
      // this.soundButton.doOnClick = (() => {
      //   const sound = game.soundManager.toggleSound();

      //   this.setSoundButton(sound);
      // });
      // this.contentGroup.add(this.soundButton);

      // this.musicButton = new FrameButton({
      //   iconImage: 'ui_music_on_icon.png',
      //   width: 100,
      //   height: 100,
      //   cornerRadius: 1.2,
      //   iconSize: 0.4,
      //   x: game.world.width / 2 - 100,
      //   y: game.world.height / 2 - 80,
      // });
      // this.musicButton.doOnClick = (() => {
      //   const music = game.soundManager.toggleMusic();

      //   this.setMusicButton(music);
      // });
      // this.contentGroup.add(this.musicButton);
    }
  }, {
    key: 'buildCloseButton',
    value: function buildCloseButton() {
      // This screen doesn't contain a back button
    }
  }, {
    key: 'onScreenOpen',
    value: function onScreenOpen() {
      game.pause();

      // this.setSoundButton();
      // this.setMusicButton();
    }
  }, {
    key: 'setSoundButton',
    value: function setSoundButton() {
      //    this.soundButton.iconImage.frameName = `ui_sound_${value ? 'on' : 'off'}_icon.png`

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : game.soundManager.sound;
    }
  }, {
    key: 'setMusicButton',
    value: function setMusicButton() {
      //   this.musicButton.iconImage.frameName = `ui_music_${value ? 'on' : 'off'}_icon.png`

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : game.soundManager.music;
    }
  }]);

  return PauseScreen;
}(_screen2.default);

exports.default = PauseScreen;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _bitmapData = __webpack_require__(376);

var _bitmapData2 = _interopRequireDefault(_bitmapData);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _downloadManager = __webpack_require__(149);

var _downloadManager2 = _interopRequireDefault(_downloadManager);

var _localisationManager = __webpack_require__(107);

var _localisationManager2 = _interopRequireDefault(_localisationManager);

var _default = __webpack_require__(60);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class creates custom images, like invite image. Adjust or add methods in this script.
 *
 */
var CustomImageGenerator = function (_Singleton) {
  _inherits(CustomImageGenerator, _Singleton);

  function CustomImageGenerator() {
    _classCallCheck(this, CustomImageGenerator);

    var _this = _possibleConstructorReturn(this, (CustomImageGenerator.__proto__ || Object.getPrototypeOf(CustomImageGenerator)).call(this));

    _this.createStyles();
    return _this;
  }

  /**
   * Definitions of styles.
   */


  _createClass(CustomImageGenerator, [{
    key: 'createStyles',
    value: function createStyles() {
      this.styles = {
        style1: {
          font: _default2.default.text.font,
          fontSize: 20,
          fill: '#ffffff',
          align: 'center',
          boundsAlignH: 'center',
          stroke: '#000000',
          strokeThickness: 6
        }
      };
    }

    /**
     * Create an invite image.
     *
     * @param callback {function} Callback is executed when the image is done.
     * @param context {*} Context of the callback.
     */

  }, {
    key: 'createInviteImage',
    value: function createInviteImage(callback, context) {
      var _this2 = this;

      _downloadManager2.default.instance.loadImages(['loaderBg'], ['./assets/images/loader-bg.png']);

      _downloadManager2.default.instance.start(function () {
        var customImage = new _bitmapData2.default('bmd-invite-image', 'loaderBg');

        customImage.addText({
          text: LocalizationManager.instance.getText('invite_image_text'),
          style: _this2.styles.style1,
          anchor: new _phaser.Point(0, 0)
        });

        var base64Texture = customImage.generateBase64Texture('invite-image');

        callback.call(context, base64Texture);
      }, this);
    }

    /**
     * Create a share image.
     *
     * @param callback {function} Callback is executed when the image is done.
     * @param context {*} Context of the callback.
     */

  }, {
    key: 'createShareImage',
    value: function createShareImage(callback, context) {
      var _this3 = this;

      _downloadManager2.default.instance.loadImages(['loaderBg'], ['./assets/images/loader-bg.png']);

      _downloadManager2.default.instance.start(function () {
        var customImage = new _bitmapData2.default('bmd-invite-image', 'loaderBg');

        customImage.addText({
          text: LocalizationManager.instance.getText('invite_image_text'),
          style: _this3.styles.style1,
          anchor: new _phaser.Point(0, 0)
        });

        var base64Texture = customImage.generateBase64Texture('invite-image');

        callback.call(context, base64Texture);
      }, this);
    }
  }]);

  return CustomImageGenerator;
}(_singleton2.default);

exports.default = CustomImageGenerator;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _image = __webpack_require__(53);

var _image2 = _interopRequireDefault(_image);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A BitmapData object contains a Canvas element to which you can draw anything you like via
 * normal Canvas context operations. A single BitmapData can be used as the texture for one or
 * many Images / Sprites. So if you need to dynamically create a Sprite texture then they are a
 * good choice.
 *
 * Important note: Every BitmapData creates its own Canvas element. Because BitmapData's are now
 * Game Objects themselves, and don't live on the display list, they are NOT automatically cleared
 * when you change State. Therefore you must call BitmapData.destroy in your State's shutdown method
 * if you wish to free-up the resources the BitmapData used, it will not happen for you.
 */

var BitmapData = function (_Phaser$BitmapData) {
  _inherits(BitmapData, _Phaser$BitmapData);

  function BitmapData(key, backgroundKey) {
    _classCallCheck(this, BitmapData);

    var background = game.cache.getImage(backgroundKey);

    var _this = _possibleConstructorReturn(this, (BitmapData.__proto__ || Object.getPrototypeOf(BitmapData)).call(this, game, key, background.width, background.height));

    _this.copy(backgroundKey, 0, 0, background.width, background.height);
    return _this;
  }

  /**
   * Add image to the bitmap.
   *
   * @param {string|Phaser.Image|Image} key - Key of the image or the image itself.
   * @param {string?} frame - If an atlas is used as key, set the frame name.
   * @param {number?} width - Width of the image.
   * @param {number?} height - Height of the image.
   * @param {Phaser.Point?} [position=Phaser.Point(0, 0)] - Position of the image.
   * @param {Phaser.Point?} [anchor=Phaser.Point(0.5, 0.5)] - Anchor point of the image.
   */


  _createClass(BitmapData, [{
    key: 'addImage',
    value: function addImage(key, frame, width, height) {
      var position = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _phaser.Point(0, 0);
      var anchor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new _phaser.Point(0.5, 0.5);

      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
        this.addDisplayObject(key, position.x || key.x, position.y || key.y, width, height);
      }

      var imageObject = new _image2.default({
        key: key,
        frame: frame,
        anchor: anchor
      });

      imageObject.anchor.setTo(anchor.x, anchor.y);

      this.addDisplayObject(imageObject, imageObject.x, imageObject.y, width, height);
    }

    /**
     * Add text to the bitmap.
     *
     * @param {string|Phaser.Text|Text} text -  Text that needs to be shown.
     * @param {object} style - Object with style settings.
     * @param {number} x - X coordinate.
     * @param {number} y - Y Coordinate.
     * @param {string} [color='rgba(0,0,0,0.5)'] - Color code of the text.
     * @param {number} [lineSpacing=-30] - Spacing between lines.
     * @param {number} [blur=10] - Blur of the shadow.
     * @param {Phaser.Point} [anchor=Phaser.Point(0.5, 0.5)] - Anchor of the text.
     */

  }, {
    key: 'addText',
    value: function addText(_ref) {
      var text = _ref.text,
          style = _ref.style,
          x = _ref.x,
          y = _ref.y,
          _ref$color = _ref.color,
          color = _ref$color === undefined ? 'rgba(0,0,0,0.5)' : _ref$color,
          _ref$lineSpacing = _ref.lineSpacing,
          lineSpacing = _ref$lineSpacing === undefined ? -30 : _ref$lineSpacing,
          _ref$blur = _ref.blur,
          blur = _ref$blur === undefined ? 10 : _ref$blur,
          _ref$anchor = _ref.anchor,
          anchor = _ref$anchor === undefined ? new _phaser.Point(0.5, 0.5) : _ref$anchor;

      if ((typeof text === 'undefined' ? 'undefined' : _typeof(text)) === 'object') {
        this.addDisplayObject(text, x || text.x, y || text.y);
        return;
      }

      var textObject = new _text2.default({
        text: text,
        anchor: anchor,
        color: color,
        style: style
      });

      textObject.anchor.setTo(anchor.x, anchor.y);
      textObject.lineSpacing = lineSpacing;
      textObject.setShadow(0, 10, color, blur);

      this.addDisplayObject(textObject, x || textObject.x, y || textObject.y);
    }

    /**
     * Draws the given Phaser.Sprite, Phaser.Image or Phaser.Text to this BitmapData at the
     * coordinates specified. You can use the optional width and height values to 'stretch' the
     * sprite as it is drawn. This uses drawImage stretching, not scaling.
     *
     * The children will be drawn at their `x` and `y` world space coordinates. If this is outside
     * the bounds of the BitmapData they won't be visible. When drawing it will take into account
     * the rotation, scale, scaleMode, alpha and tint values.
     *
     * Note: You should ensure that at least 1 full update has taken place before calling this,
     * otherwise the objects are likely to render incorrectly, if at all.
     * You can trigger an update yourself by calling `stage.updateTransform()` before calling `draw`.
     * @param {Phaser.Sprite|Phaser.Image|Phaser.Text|Phaser.RenderTexture|Image|Text} source - The
     * Sprite, Image or Text object to draw onto this BitmapData.
     * @param {number?} x - The x coordinate to translate to before drawing. If not specified it
     * will default to source.x.
     * @param {number?} y - The y coordinate to translate to before drawing. If not specified it
     * will default to source.y.
     * @param {number?} width - The new width of the Sprite being copied. If not specified it will
     * default to source.width.
     * @param {number?} height - The new height of the Sprite being copied. If not specified it
     */

  }, {
    key: 'addDisplayObject',
    value: function addDisplayObject(source, x, y, width, height) {
      this.draw(source, x, y, width, height);
    }

    /**
     * Generate a base64 texture. And destroy itself.
     *
     * @param {string?} key - If you want to save the image in the cache, fill in a unique key.
     */
    /**
     * Generate a base64 texture. And destroy itself.
     *
     * @param {string?} key - If you want to save the image in the cache, fill in a unique key.
     * @param {Function} callback- Callback that needs to be executed.
     * @param {*} context - Context of the callback.
     */

  }, {
    key: 'generateBase64Texture',
    value: function generateBase64Texture(key, callback, context) {
      var image = new Image();

      if (callback) {
        image.onload = function () {
          var obj = game.cache.addImage(key, '', image);
          var texture = new PIXI.Texture(obj.base);

          callback.call(context || null, image.src);

          image.onload = null;
        };
      }

      image.src = this.canvas.toDataURL('image/jpeg');

      this.destroy();

      if (!callback) {
        cache.addImage(key, '', image);
        return image.src;
      }
    }
  }]);

  return BitmapData;
}(_phaser.Phaser.BitmapData);

exports.default = BitmapData;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _customTimer = __webpack_require__(378);

var _customTimer2 = _interopRequireDefault(_customTimer);

var _stateManager = __webpack_require__(157);

var _stateManager2 = _interopRequireDefault(_stateManager);

var _signalManager = __webpack_require__(61);

var _signalManager2 = _interopRequireDefault(_signalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * GameManager controls the game flow.
 * It uses a state manager to define the current state of the game.
 * There are three states: pre-game, game and post-game.
 */
var GameManager = function (_Singleton) {
  _inherits(GameManager, _Singleton);

  function GameManager() {
    _classCallCheck(this, GameManager);

    var _this = _possibleConstructorReturn(this, (GameManager.__proto__ || Object.getPrototypeOf(GameManager)).call(this, game));

    _this.stateManager = new _stateManager2.default(_this);

    _this.states = {
      preGame: {
        enter: _this.startPreGame,
        leave: _this.endPreGame
      },
      game: {
        enter: _this.startGame,
        leave: _this.endGame
      },
      postGame: {
        enter: _this.startPostGame,
        leave: _this.endPostGame
      }
    };

    _this._score = 0;
    _this._clearedScore = 0;

    _this.customTimer = new _customTimer2.default();

    _this.stateManager.initialize(_this.states, 'preGame');
    return _this;
  }

  /**
   * This function resets the game state and starts the game flow.
   */


  _createClass(GameManager, [{
    key: 'enable',
    value: function enable() {
      this.resetGame();

      this.stateManager.startDefault();
    }

    /**
     * This function start the pre game. Here you can do stuff like disabling input,
     * start count down ect.
     */

  }, {
    key: 'startPreGame',
    value: function startPreGame() {
      // console.log('startPreGame');

      // TODO This is an example. Replace this with anything else.
      this.customTimer.createCountdown(3000, this.stateManager.changeState, this.stateManager, 'game');
    }

    /**
     * End of pre-game is called here. Here you can remove the countdown timer as an example.
     */

  }, {
    key: 'endPreGame',
    value: function endPreGame() {}
    // console.log('endPreGame');


    /**
     * Function to call after pre-game is finished. Here you can fill in the logic of starting the
     * game, like enabling input or movement. You can also add a listener when the game should end.
     *
     */

  }, {
    key: 'startGame',
    value: function startGame() {}
    // console.log('startGame');
    // TODO: add functions necessary for game start


    /**
     * When the game ends, this function is called.
     *
     */

  }, {
    key: 'endGame',
    value: function endGame() {}
    // console.log('endGame');
    // TODO: functions to call on game over


    /**
     * Here you can show the end card.
     */

  }, {
    key: 'startPostGame',
    value: function startPostGame() {}
    // console.log('startPostGame');


    /**
     * This function is called when post game ends.
     */

  }, {
    key: 'endPostGame',
    value: function endPostGame() {}
    // console.log('endPostGame');


    /**
     * Set game the settings to neutral.
     */

  }, {
    key: 'resetGame',
    value: function resetGame() {
      // this.stateManager.changeState(this.stateManager.getDefaultState());
      this.removeScore();
      //    console.log(this.stateManager.getCurrentState());
    }

    /**
     * This function adds a numerical amount to score
     *
     * @param amount is value added to score
     */

  }, {
    key: 'addScore',
    value: function addScore(amount) {
      if (isNaN(amount)) {
        console.warn(amount + ' is NaN, but ' + (typeof amount === 'undefined' ? 'undefined' : _typeof(amount)));
        return;
      }

      this.score += amount;
    }

    /**
     * Getter of `this._score`.
     *
     * @return {number} The players score
     */

  }, {
    key: 'removeScore',


    /**
     * This function resets score to standard set value
     */
    value: function removeScore() {
      this.score = this._clearedScore;
      window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: this.score});
    }
  }, {
    key: 'score',
    get: function get() {
      return this._score;
    }

    /**
     * Setter of `this._score`.
     *
     * @param value {number} New value
     */
    ,
    set: function set(value) {
      this._score = value;
      _signalManager2.default.instance.dispatch('gameManager:updateScore', this._score);
    }
  }]);

  return GameManager;
}(_singleton2.default);

exports.default = GameManager;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTimer = function (_Timer) {
  _inherits(CustomTimer, _Timer);

  function CustomTimer() {
    _classCallCheck(this, CustomTimer);

    return _possibleConstructorReturn(this, (CustomTimer.__proto__ || Object.getPrototypeOf(CustomTimer)).call(this, game));
  }

  /**
   * Createcountdown creates new countdown timer that executes callback on finish
   *
   * @param duration Amount of seconds to count down
   * @param callback Callback to call
   * @param context Context to call callback in
   */


  _createClass(CustomTimer, [{
    key: 'createCountdown',
    value: function createCountdown(duration, callback, context) {
      var _game$time$events;

      for (var _len = arguments.length, parameters = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        parameters[_key - 3] = arguments[_key];
      }

      var timer = (_game$time$events = game.time.events).add.apply(_game$time$events, [duration, callback, context].concat(parameters));
    }
  }]);

  return CustomTimer;
}(_phaser.Timer);

exports.default = CustomTimer;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _sprite = __webpack_require__(47);

var _sprite2 = _interopRequireDefault(_sprite);

var _Facebook = __webpack_require__(380);

var _Facebook2 = _interopRequireDefault(_Facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// The player and its movements
var Ball = function (_Group) {
  _inherits(Ball, _Group);

  function Ball(game) {
    _classCallCheck(this, Ball);

    return _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, game));
  }

  _createClass(Ball, [{
    key: 'createBallik',
    value: function createBallik(game, size, x, y, direction, maxLives) {
      var _this2 = this;

      var after = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;


      this.game = game;

      this.size = size; //это по сути разная одежда, то есть скинлист, может и не понадобится...

      this.physicsRadius = this.chooseRadius(this.size);

      this.speedCoeff = this.chooseCoeff(this.size);

      this.x = x; // положение рождения, думаю...

      this.y = y; // тоже положение, в принципе, можно новую точку, хотя фиг с ней...

      this.direction = direction; //направление движения

      this.after = after;

      this.lives = Math.ceil(Math.random() * maxLives); //количество жизней у шарика - не более, чем максливс

      this.probabilityDesruption = 0.3; //probability of ball desruption

      if (Math.random() > this.probabilityDesruption || this.lives < 5) {
        //define the number of disruption
        this.numberDisruption = 0;
      } else {
        this.numberDisruption = Math.random() * this.lives + 4;
        if (this.numberDisruption + 2 > this.lives) {
          this.numberDisruption = this.lives - 3;
        }
      }

      this.ball = new _sprite2.default({
        key: 'enemy_' + this.size
      });

      if (!this.after) {
        // if it is beginner-ball
        var sideFromRight = false;
        if (Math.random() > 0.5) {
          sideFromRight = true;
        }
        this.ball.position.y = 100;
        if (!sideFromRight) {
          // from that side is that ball?
          this.ball.x = this.game.world.centerX - game.world.width / 2 - 10;
          this.firstMoving = game.add.tween(this.ball).to({ x: game.world.centerX - game.world.width / 2 + 90 }, 1000, Phaser.Easing.Quadratic.Out, false);
        } else {
          this.ball.x = game.world.centerX + game.world.width / 2 + 20;
          this.firstMoving = game.add.tween(this.ball).to({ x: game.world.centerX + game.world.width / 2 - 80 }, 1000, Phaser.Easing.Quadratic.Out, false);
        }
        this.firstMoving.start();
        this.firstMoving.onComplete.add(function () {
          _this2.rotateBall = game.add.tween(_this2.ball).to({ rotation: -1000 }, 1000000, Phaser.Easing.Quadratic.Out, false);
          _this2.rotateBall.start();
          _this2.game.physics.arcade.enableBody(_this2.ball);
          _this2.ball.body.setCircle(_this2.radius);
          _this2.ball.body.gravity.y = 300;
          _this2.ball.body.bounce.set(1, 1);
          _this2.ball.body.collideWorldBounds = true;
          _this2.ball.body.velocity.y = 150 * _this2.speedCoeff;
          if (sideFromRight) {
            _this2.ball.body.velocity.x = 100 * _this2.speedCoeff;
          } else {
            _this2.ball.body.velocity.x = 100 * _this2.speedCoeff;
          }
        });
      } else {
        // it is ball after disruption
        this.game.physics.arcade.enableBody(this.ball);
        this.ball.body.setCircle(this.radius);
        this.ball.body.gravity.y = 300;
        this.ball.body.bounce.set(1, 1);
        this.ball.body.collideWorldBounds = true;
        this.ball.body.velocity.y = 150 * this.speedCoeff;
        if (direction === 'right') {
          this.ball.body.velocity.x = 100 * this.speedCoeff;
          this.rotateBall = game.add.tween(this.ball).to({ rotation: -1000 }, 1000000, Phaser.Easing.Quadratic.Out, false);
          this.rotateBall.start();
        } else {
          this.ball.body.velocity.x = -100 * this.speedCoeff;
          this.rotateBall = game.add.tween(this.ball).to({ rotation: 1000 }, 1000000, Phaser.Easing.Quadratic.Out, false);
          this.rotateBall.start();
        }

        this.ball.x = this.x;
        this.ball.y = this.y;
      }

      this.ballText = new Text({
        text: this.lives,
        anchor: new _phaser.Point(0.5, 0.5)
      });

      this.ball.addChild(this.ballText);

      return this.ball;
      //    this.balls.add(this.ball);
    }
  }, {
    key: 'chooseRadius',
    value: function chooseRadius(size) {
      switch (size) {
        case 'big':
          return 100;
        case 'medium':
          return 75;
        case 'small':
          return 50;
        default:
          return 50;
      }
    }
  }, {
    key: 'chooseCoeff',
    value: function chooseCoeff(size) {
      switch (size) {
        case 'big':
          return 1;
        case 'medium':
          return 1.2;
        case 'small':
          return 1.5;
        default:
          return 1;
      }
    }
  }]);

  return Ball;
}(_phaser.Group);

exports.default = Ball;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

var _utils = __webpack_require__(76);

var _facebook = __webpack_require__(146);

var _facebook2 = _interopRequireDefault(_facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @module test
 */
// region ******************************* PRIVATE FUNCTIONS *******************************
var doCallback = Symbol('_doCallback');
var entriesToFormattedObject = Symbol('entriesToFormattedObject');
var playersToFormattedObject = Symbol('playersToFormattedObject');
var getDefaultPlayerEntry = Symbol('getDefaultPlayerEntry');
var createEvent = Symbol('createEvent');
// endregion

/**
 * @class All Facebook Instant Games API are in this script. Some extra features, like
 * preloading, saving the reference etc. are added.
 */

var Facebook = function (_Singleton) {
  _inherits(Facebook, _Singleton);

  // region ******************************* CONSTRUCTOR *******************************

  function Facebook() {
    _classCallCheck(this, Facebook);

    var _this = _possibleConstructorReturn(this, (Facebook.__proto__ || Object.getPrototypeOf(Facebook)).call(this));

    var conditions = [':300'];
    _this.fbInstantExists = false; // __DEV__ || !conditions.some(el => window.location.href.includes(el));
    return _this;
  }
  // endregion

  // region ******************************* INITIAL FACEBOOK API *******************************
  /**
   * Initializes the SDK library. This should be called before any other SDK functions.
   * When ready, it will create a game.
   */


  _createClass(Facebook, [{
    key: 'initializeAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                _context.next = 4;
                return FBInstant.initializeAsync().catch(function (error) {
                  return console.error(error, 'INITIALIZE_ASYNC');
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initializeAsync() {
        return _ref.apply(this, arguments);
      }

      return initializeAsync;
    }()

    /**
     * Check if a certain api is supported.
     *
     * @param {string} api - API method.
     * @returns {boolean} If API is supported or not.
     */

  }, {
    key: 'isSupported',
    value: function isSupported(api) {
      if (!this.fBInstantExists) {
        return true;
      }

      return FBInstant.getSupportedAPIs().includes(api);
    }

    /**
     * Report the game's initial loading progress.
     *
     * @param {number} progress - The progress of downloading assets in percentage.
     */

  }, {
    key: 'setLoadingProgress',
    value: function setLoadingProgress(progress) {
      if (!this.fBInstantExists) {
        return;
      }

      FBInstant.setLoadingProgress(progress);
    }

    /**
     * This indicates that the game has finished initial loading and is ready to start.
     * Context information will be up-to-date when the returned promise resolves.
     * It will also check if a shortcut and subscribe bot can be created, and preloading ads.
     */

  }, {
    key: 'startGameAsync',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.next = 4;
                return FBInstant.startGameAsync().catch(function (error) {
                  return console.error(error);
                });

              case 4:
                if (!_facebook2.default.createShortcut) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 7;
                return this.canCreateShortcutAsync();

              case 7:
                if (!_facebook2.default.subscribeBot) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return this.canSubscribeBotAsync();

              case 10:

                // Load ads
                Object.values(_facebook2.default.interstitialAds).forEach(function (placementID) {
                  _this2.loadInterstitialAdAsync(placementID);
                });

                Object.values(_facebook2.default.rewardedVideos).forEach(function (placementID) {
                  _this2.loadRewardedVideoAsync(placementID);
                });

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function startGameAsync() {
        return _ref2.apply(this, arguments);
      }

      return startGameAsync;
    }()
    // endregion

    // region ******************************* PLAYER INFO *******************************
    /**
     * A url to the player's public profile photo.
     * The photo will always be a square, and with dimensions of at least 200x200.
     * When rendering it in the game, the exact dimensions should never be assumed to be constant.
     * It's recommended to always scale the image to a desired size before rendering.
     * The value will always be null until FBInstant.startGameAsync() resolves.
     * WARNING: Due to CORS, using these photos in the game canvas can cause it to be tainted,
     * which will prevent the canvas data from being extracted.
     * To prevent this, set the cross-origin attribute of the images you use to 'anonymous'.
     *
     * @returns {string} Url to the player's public profile photo.
     */

  }, {
    key: 'getPlayerPhoto',
    value: function getPlayerPhoto() {
      return this.fBInstantExists ? FBInstant.player.getPhoto() : null;
    }

    /**
     * A unique identifier for the player.
     * A Facebook user's player ID will remain constant, and is scoped to a specific game.
     * This means that different games will have different player IDs for the same user.
     * This function should not be called until FBInstant.initializeAsync() has resolved.
     *
     * @returns {string} A unique identifier for the player.
     */

  }, {
    key: 'getPlayerID',
    value: function getPlayerID() {
      return this.fBInstantExists ? FBInstant.player.getID() : null;
    }

    /**
     * The player's localized display name.
     * This function should not be called until FBInstant.startGameAsync() has resolved.
     *
     * @returns {string} The player's localized display name.
     */

  }, {
    key: 'getPlayerName',
    value: function getPlayerName() {
      return this.fBInstantExists ? FBInstant.player.getName() : null;
    }

    /**
     * Fetches an array of ConnectedPlayer objects containing information about active players
     * (people who played the game in the last 90 days) that are connected to the current player.
     *
     * @param {boolean} refresh - Get new set of connected players from the Facebook server.
     * @returns {ConnectedPlayer[]} A list of connected player objects. NOTE: This function
     * should not be called until FBInstant.startGameAsync() has resolved.
     */

  }, {
    key: 'getConnectedPlayersAsync',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var connectedPlayers;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', []);

              case 2:
                if (!(this._connectedPlayers && !refresh)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt('return', this._connectedPlayers);

              case 4:
                _context3.next = 6;
                return FBInstant.player.getConnectedPlayersAsync().catch(function (error) {
                  return console.error(error, 'GET_CONNECTED_PLAYERS_ASYNC');
                });

              case 6:
                connectedPlayers = _context3.sent;

                if (connectedPlayers) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt('return', this._connectedPlayers || []);

              case 9:

                this._connectedPlayers = this[playersToFormattedObject](connectedPlayers);

                return _context3.abrupt('return', this._connectedPlayers);

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getConnectedPlayersAsync() {
        return _ref3.apply(this, arguments);
      }

      return getConnectedPlayersAsync;
    }()
    // endregion

    // region ******************************* SESSION INFORMATION *******************************
    /**
     * The current locale.
     * See https://origincache.facebook.com/developers/resources/?id=FacebookLocales.xml for a complete list
     * of supported locale values. Use this to determine what languages the current game should be
     * localized with. The value will not be accurate until FBInstant.startGameAsync() resolves.
     *
     * @returns {string|null} The current locale.
     */

  }, {
    key: 'getLocale',
    value: function getLocale() {
      return this.fbInstantExists ? FBInstant.getLocale() : null;
    }

    /**
     * The platform on which the game is currently running.
     * The value will always be null until FBInstant.initializeAsync() resolves.
     *
     * @returns {string|null} The platform.
     */

  }, {
    key: 'getPlatform',
    value: function getPlatform() {
      return this.fbInstantExists ? FBInstant.getPlatform() : null;
    }

    /**
     * The string representation of this SDK version.
     *
     * @returns {string|null} The SDK version.
     */

  }, {
    key: 'getSDKVersion',
    value: function getSDKVersion() {
      return this.fbInstantExists ? FBInstant.getSDKVersion() : null;
    }

    /**
     * Returns any data object associated with the entry point that the game was launched from.
     * The contents of the object are developer-defined, and can occur from entry points on
     * different platforms. This will return null for older mobile clients, as well as when there
     * is no data associated with the particular entry point. This function should be called after
     * FBInstant.startGameAsync() resolves.
     *
     * @returns {object} Data associated with the current entry point.
     */

  }, {
    key: 'getEntryPointData',
    value: function getEntryPointData() {
      return this.fbInstantExists ? FBInstant.getEntryPointData() : null;
    }
    // endregion

    // region ******************************* DATA & STATS *******************************
    /**
     * Retrieve data from the designated cloud storage of the current player.
     *
     * @param {array<string>} keys - An array of unique keys to retrieve data for.
     * @param {boolean} refresh - Get new data from the Facebook server.
     * @returns {object} Object with the current key-value pairs for each key in keys, if they exist.
     */

  }, {
    key: 'getDataAsync',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(keys) {
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', {});

              case 2:
                if (!(this._data && !refresh)) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt('return', this._data);

              case 4:
                _context4.next = 6;
                return FBInstant.player.getDataAsync(keys).catch(function (error) {
                  return console.error(error, 'GET_DATA_ASYNC');
                });

              case 6:
                data = _context4.sent;

                if (data) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt('return', this._data || {});

              case 9:

                this._data = (0, _utils.parseJSON)(data);

                return _context4.abrupt('return', this._data);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDataAsync(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getDataAsync;
    }()

    /**
     * Set data to be saved to the designated cloud storage of the current player.
     * The game can store up to 1MB of data for each unique player.
     *
     * @param {object} data - An object containing a set of key-value pairs that should be
     * to cloud storage. The object must contain only serializable values - any non-serializable
     * values will cause the entire modification to be rejected.
     * @returns {object} The updated data object. NOTE: The promise resolving does not necessarily
     * mean that the input has already been persisted. Rather, it means that the data was
     * valid and has been scheduled to be saved. It also guarantees that all values that were set
     * are now available in player.getDataAsync.
     */

  }, {
    key: 'setDataAsync',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var newData;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', data);

              case 2:
                _context5.next = 4;
                return FBInstant.player.setDataAsync((0, _utils.stringifyJSON)(data)).then(function () {
                  return data;
                }).catch(function (error) {
                  console.error(error, 'SET_DATA_ASYNC');
                  return {};
                });

              case 4:
                newData = _context5.sent;


                Object.assign(this._data, newData);

                return _context5.abrupt('return', newData);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setDataAsync(_x4) {
        return _ref5.apply(this, arguments);
      }

      return setDataAsync;
    }()

    /**
     * Retrieve stats from the designated cloud storage of the current player.
     *
     * @param {Array<string>?} keys - An optional array of unique keys to retrieve stats for. If the
     * function is called without it, it will fetch all stats.
     * @param {boolean} refresh - Get new data from the Facebook server.
     * @returns {object} An object which contains the current key-value pairs for each key
     * specified in the input array, if they exist.
     */

  }, {
    key: 'getStatsAsync',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this3 = this;

        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt('return', {});

              case 2:
                if (!(!this._stats && !refresh)) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt('return', this._stats);

              case 4:
                _context6.next = 6;
                return FBInstant.player.getStatsAsync(keys).catch(function (error) {
                  console.error(error);
                  return _this3._stats || {};
                });

              case 6:
                this._stats = _context6.sent;
                return _context6.abrupt('return', this._stats);

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getStatsAsync() {
        return _ref6.apply(this, arguments);
      }

      return getStatsAsync;
    }()

    /**
     * Increment stats saved in the designated cloud storage of the current player.
     *
     * @param {object} increments - An object containing a set of key-value pairs indicating how
     * much to increment each stat in cloud storage. The object must contain only numerical values
     * - any non-numerical values will cause the entire modification to be rejected.
     * @returns {object} An object which contains the updated key-value pairs for each key
     * specified in the input dictionary. NOTE: The promise resolving does not necessarily mean
     * that the changes have already been persisted. Rather, it means that the increments were
     * valid and have been scheduled to be performed. It also guarantees that all values that were
     * incremented are now available in player.getStatsAsync
     */

  }, {
    key: 'incrementStatsAsync',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(increments) {
        var keys, i, stats;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context7.next = 4;
                  break;
                }

                keys = Object.keys(increments);


                for (i = 0; i < keys.length; i += 1) {
                  this._stats[keys[i]] += increments[keys[i]] || 0;
                }

                return _context7.abrupt('return', this._stats);

              case 4:
                _context7.next = 6;
                return FBInstant.player.incrementStatsAsync(increments);

              case 6:
                stats = _context7.sent;


                Object.assign(this._stats, stats);
                return _context7.abrupt('return', this._stats);

              case 9:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function incrementStatsAsync(_x7) {
        return _ref7.apply(this, arguments);
      }

      return incrementStatsAsync;
    }()
    // endregion

    // region ******************************* LEADERBOARD *******************************
    /**
     * Fetch a specific leaderboard belonging to this Instant Game.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @returns {Leaderboard} The matching leaderboard, rejecting if one is not found.
     */

  }, {
    key: 'getLeaderboardAsync',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(name) {
        var leaderboardName;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt('return', {});

              case 2:
                leaderboardName = '_leaderboard_' + name;

                if (!this[leaderboardName]) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt('return', this[leaderboardName]);

              case 5:
                _context8.next = 7;
                return FBInstant.getLeaderboardAsync(name).catch(function (error) {
                  console.error(error, 'GET_LEADERBOARD_ASYNC');
                  return {};
                });

              case 7:
                this[leaderboardName] = _context8.sent;
                return _context8.abrupt('return', this[leaderboardName]);

              case 9:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getLeaderboardAsync(_x8) {
        return _ref8.apply(this, arguments);
      }

      return getLeaderboardAsync;
    }()

    /**
     * Retrieves a set of leaderboard entries, ordered by score ranking in the leaderboard.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @param {number} count - The number of entries to attempt to fetch from the leaderboard.
     * Currently, up to a maximum of 100 entries may be fetched per query.
     * @param {number} offset - The number of entries to attempt to fetch from the leaderboard.
     * Defaults to 10 if not specified. Currently, up to a maximum of 100 entries may be fetched
     * per query.
     * @param {boolean} refresh - Get new entries from the leaderboard,
     * @returns {Array<LeaderboardEntry>} The leaderboard entries that match the query.
     */

  }, {
    key: 'getEntriesAsync',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(name) {
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var entriesName, leaderboard, entries;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt('return', []);

              case 2:
                entriesName = '_entries_' + name;

                if (!(this[entriesName] && !refresh)) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt('return', this[entriesName]);

              case 5:
                _context9.next = 7;
                return this.getLeaderboardAsync(name);

              case 7:
                leaderboard = _context9.sent;
                _context9.next = 10;
                return leaderboard.getEntriesAsync(count, offset).catch(function (error) {
                  return console.error(error, 'GET_ENTRIES_ASYNC');
                });

              case 10:
                entries = _context9.sent;

                if (entries) {
                  _context9.next = 13;
                  break;
                }

                return _context9.abrupt('return', this[entriesName] || []);

              case 13:

                this[entriesName] = this[entriesToFormattedObject](entries);

                return _context9.abrupt('return', this[entriesName]);

              case 15:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getEntriesAsync(_x12) {
        return _ref9.apply(this, arguments);
      }

      return getEntriesAsync;
    }()

    /**
     * Fetches an array of ConnectedPlayer objects containing information about active players
     * (people who played the game in the last 90 days) that are connected to the current player.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @param {boolean} refresh - Get a new batch of entries.
     * @returns {Array<ConnectedPlayer>} A list of connected player objects. NOTE: This function
     * should not be called until FBInstant.startGameAsync() has resolved.
     */

  }, {
    key: 'getConnectedEntriesAsync',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(name) {
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var leaderboard, entries, entriesName;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt('return', []);

              case 2:
                if (!(!refresh && this._connectedPlayerEntries)) {
                  _context10.next = 4;
                  break;
                }

                return _context10.abrupt('return', this._connectedPlayerEntries);

              case 4:
                _context10.next = 6;
                return this.getLeaderboardAsync(name);

              case 6:
                leaderboard = _context10.sent;
                _context10.next = 9;
                return leaderboard.getConnectedPlayerEntriesAsync().catch(function (error) {
                  return console.error(error, 'GET_CONNECTED_PLAYER_ENTRIES_ASYNC');
                });

              case 9:
                entries = _context10.sent;
                entriesName = 'connectedEntries_' + name;

                if (entries) {
                  _context10.next = 13;
                  break;
                }

                return _context10.abrupt('return', this[entriesName] || []);

              case 13:

                this._connectedPlayerEntries = this[entriesToFormattedObject](entries);

                return _context10.abrupt('return', this._connectedPlayerEntries);

              case 15:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getConnectedEntriesAsync(_x14) {
        return _ref10.apply(this, arguments);
      }

      return getConnectedEntriesAsync;
    }()

    /**
     * Retrieves the leaderboard's entry for the current player, or null if the player has not set
     * one yet.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @returns {Promise<*>}
     */

  }, {
    key: 'getPlayerEntryAsync',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(name) {
        var _this4 = this;

        var loadingName, eventName, leaderboard, playerEntry, playerEntryName;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt('return', {});

              case 2:
                loadingName = '_loadingPlayerEntryAsync_' + name;
                eventName = '_playerEntrySignal_' + name;

                // If it's already loading, wait for signal.

                if (!this[loadingName]) {
                  _context11.next = 7;
                  break;
                }

                this[createEvent](eventName);

                return _context11.abrupt('return', new Promise(function (resolve) {
                  _this4[eventName].addOnce(resolve);
                }));

              case 7:

                // Set loading to true
                this[loadingName] = true;

                // Get the leaderboard
                _context11.next = 10;
                return this.getLeaderboardAsync(name);

              case 10:
                leaderboard = _context11.sent;
                _context11.next = 13;
                return leaderboard.getPlayerEntryAsync().catch(function (error) {
                  return console.error(error);
                });

              case 13:
                playerEntry = _context11.sent;
                playerEntryName = '_playerEntry_' + name;

                // Set the correct entry.

                if (!playerEntry) {
                  this[playerEntryName] = this[playerEntryName] || this[getDefaultPlayerEntry]();
                } else {
                  this[playerEntryName] = this[entriesToFormattedObject](playerEntry);
                }

                // Set loading to false
                this[loadingName] = false;
                this[createEvent](eventName);
                // Dispatch so other also get the correct value
                this[eventName].dispatch(this[playerEntryName]);

                return _context11.abrupt('return', this[playerEntryName]);

              case 20:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getPlayerEntryAsync(_x15) {
        return _ref11.apply(this, arguments);
      }

      return getPlayerEntryAsync;
    }()

    /**
     * Updates the player's score. If the player has an existing score, the old score will only be
     * replaced if the new score is better than the old score. NOTE: If the leaderboard is associated with a
     * specific context, the game must be in that context to set a score for the player.
     *
     * @param {string} name - The name of the leaderboard. Each leaderboard for an Instant Game
     * must have its own distinct name.
     * @param {number} score - The new score for the player. Must be a 64-bit integer number.
     * @param {string?} extraData - Metadata to associate with the stored score. Must be less than
     * 2KB in size.
     * @returns {LeaderboardEntry?} The current leaderboard entry for the player after the update.
     */

  }, {
    key: 'setScoreAsync',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(name, score) {
        var extraData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var leaderboard, entry;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt('return', null);

              case 2:
                _context12.next = 4;
                return this.getLeaderboardAsync(name);

              case 4:
                leaderboard = _context12.sent;
                _context12.next = 7;
                return leaderboard.setScoreAsync(score, extraData).catch(function (error) {
                  return console.error(error);
                });

              case 7:
                entry = _context12.sent;
                _context12.prev = 8;
                return _context12.abrupt('return', this[entriesToFormattedObject](entry));

              case 12:
                _context12.prev = 12;
                _context12.t0 = _context12['catch'](8);

                console.error(_context12.t0, 'SET_SCORE_ASYNC');
                return _context12.abrupt('return', null);

              case 16:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[8, 12]]);
      }));

      function setScoreAsync(_x17, _x18) {
        return _ref12.apply(this, arguments);
      }

      return setScoreAsync;
    }()
    // endregion

    // region ******************************* SHARING MESSAGES *******************************
    /**
     * Informs Facebook of an update that occurred in the game. This will temporarily yield
     * control to Facebook and Facebook will decide what to do based on what the update is. The
     * returned promise will resolve/reject when Facebook returns control to the game.
     *
     * @param {string} base64Picture - Data URL of a base64 encoded image.
     * @param {string|LocalizableContent} cta - Optional call-to-action button text. By default we
     * will use a
     * localized 'Play' as the button text. To provide localized versions of your own call to
     * action, pass an object with the default cta as the value of 'default' and another object
     * mapping locale keys to translations as the value of 'localizations'.
     * @param {string|LocalizableContent} text - A text message, or an object with the default
     * text as the value of 'default' and another object mapping locale keys to translations as
     * the value of 'localizations'.
     * @param {object?} data - A blob of data to attach to the update. All game sessions launched
     * from the update will be able to access this blob through FBInstant.getEntryPointData().
     * Must be less than or equal to 1000 characters when stringified.
     * @param {string} template ID of the template this custom update is using. Templates should be
     * predefined in fbapp-config.json. See the Bundle Config documentation for documentation
     * about fbapp-config.json.
     * @returns {boolean} Result of the promise.
     */

  }, {
    key: 'updateAsync',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(base64Picture, cta, text) {
        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'play_turn';
        var success;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context13.next = 2;
                  break;
                }

                return _context13.abrupt('return', true);

              case 2:
                _context13.next = 4;
                return FBInstant.updateAsync({
                  action: 'CUSTOM',
                  cta: cta,
                  image: base64Picture,
                  text: text,
                  template: template,
                  data: data,
                  strategy: 'IMMEDIATE',
                  notification: 'PUSH'
                }).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  return false;
                });

              case 4:
                success = _context13.sent;
                return _context13.abrupt('return', success);

              case 6:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function updateAsync(_x21, _x22, _x23) {
        return _ref13.apply(this, arguments);
      }

      return updateAsync;
    }()

    /**
     * This invokes a dialog to let the user share specified content, either as a message in
     * Messenger or as a post on the user's timeline. A blob of data can be attached to the share
     * which every game session launched from the share will be able to access from
     * FBInstant.getEntryPointData(). This data must be less than or equal to 1000 characters when
     * stringified. The user may choose to cancel the share action and close the dialog, and the
     * returned promise will resolve when the dialog is closed regardless if the user actually
     * shared the content or not.
     *
     * @param {string} image - A base64 encoded image to be shared.
     * @param {string} text - A text message to be shared.
     * @param {object?} data - A blob of data to attach to the share. All game sessions launched
     * from the share will be able to access this blob through FBInstant.getEntryPointData()
     * @param {"INVITE"|"REQUEST"|"CHALLENGE"|"SHARE"} intent - Indicates the intent of the
     * share.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'shareAsync',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(image, text) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var intent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'INVITE';
        var success;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context14.next = 2;
                  break;
                }

                return _context14.abrupt('return', true);

              case 2:
                _context14.next = 4;
                return FBInstant.shareAsync({ intent: intent, image: image, text: text, data: data }).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  return false;
                });

              case 4:
                success = _context14.sent;
                return _context14.abrupt('return', success);

              case 6:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function shareAsync(_x26, _x27) {
        return _ref14.apply(this, arguments);
      }

      return shareAsync;
    }()
    // endregion

    // region ******************************* CONTEXT *******************************
    /**
     * A unique identifier for the current game context. This represents a specific context that
     * the game is being played in (for example, a particular messenger conversation or facebook
     * post). The identifier will be null if game is being played in a solo context. This function
     * should not be called until FBInstant.startGameAsync has resolved.
     *
     * @returns {string|null} A unique identifier for the current game context.
     */

  }, {
    key: 'getContextID',
    value: function getContextID() {
      return this.fbInstantExists ? FBInstant.context.getID() : null;
    }

    /**
     * The type of the current game context. POST - A facebook post. THREAD - A messenger thread.
     * GROUP - A facebook group. SOLO - Default context, where the player is the only participant.
     *
     * @returns {"POST"|"THREAD"|"GROUP"|"SOLO"|null} Type of the current game context.
     */

  }, {
    key: 'getContextType',
    value: function getContextType() {
      return this.fbInstantExists ? FBInstant.context.getType() : null;
    }

    /**
     * This function determines whether the number of participants in the current game context is
     * between a given minimum and maximum, inclusive. If one of the bounds is null only the other
     * bound will be checked against. It will always return the original result for the first call
     * made in a context in a given game play session. Subsequent calls, regardless of arguments,
     * will return the answer to the original query until a context change occurs and the query
     * result is reset. This function should not be called until FBInstant.startGameAsync has
     * resolved.
     *
     * @param {number} minSize - The minimum bound of the context size query.
     * @param {number} maxSize - The maximum bound of the context size query.
     *
     * @returns {boolean} Context size response.
     */

  }, {
    key: 'isSizeBetween',
    value: function isSizeBetween(minSize, maxSize) {
      return this.fbInstantExists ? FBInstant.context.isSizeBetween(minSize, maxSize) : true;
    }

    /**
     * Request a switch into a specific context. If the player does not have permission to enter
     * that context, or if the player does not provide permission for the game to enter that
     * context, this will reject. Otherwise, the promise will resolve when the game has switched
     * into the specified context.
     *
     * @param {string} id ID of the desired context.
     */

  }, {
    key: 'switchAsync',
    value: function switchAsync(id) {
      if (!this.fbInstantExists) {
        return true;
      }

      var success = FBInstant.context.switchAsync(id).then(function () {
        return true;
      }).catch(function (error) {
        console.error(error, 'SWITCH_ASYNC');
        return false;
      });

      return success;
    }

    /**
     * Opens a context selection dialog for the player. If the player selects an available
     * context, the client will attempt to switch into that context, and resolve if successful.
     * Otherwise, if the player exits the menu or the client fails to switch into the new context,
     * this function will reject.
     *
     * @param {object?} options - An object specifying conditions on the contexts that should be
     * offered.
     * @param {Array<ContextFilter>?} options.filters - The set of filters to apply to the context
     * suggestions.
     * @param {number?} options.maxSize - The maximum number of participants that a suggested
     * context should ideally have.
     * @param {number?} options.minSize - The minimum number of participants that a suggested
     * context should ideally have.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'chooseAsync',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(options) {
        var success;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context15.next = 2;
                  break;
                }

                return _context15.abrupt('return', false);

              case 2:
                _context15.next = 4;
                return FBInstant.context.chooseAsync(options).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'CHOOSE_ASYNC');
                  return false;
                });

              case 4:
                success = _context15.sent;
                return _context15.abrupt('return', success);

              case 6:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function chooseAsync(_x28) {
        return _ref15.apply(this, arguments);
      }

      return chooseAsync;
    }()

    /**
     * Attempts to create or switch into a context between a specified player and the current
     * player. The returned promise will reject if the player listed is not a Connected Player of
     * the current player or if the player does not provide permission to enter the new context.
     * Otherwise, the promise will resolve when the game has switched into the new context.
     *
     * @param {string} id - ID of the player.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'createAsync',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(id) {
        var success;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context16.next = 2;
                  break;
                }

                return _context16.abrupt('return', true);

              case 2:
                _context16.next = 4;
                return FBInstant.context.createAsync(id).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'CREATE_ASYNC');
                  return false;
                });

              case 4:
                success = _context16.sent;
                return _context16.abrupt('return', success);

              case 6:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function createAsync(_x29) {
        return _ref16.apply(this, arguments);
      }

      return createAsync;
    }()

    /**
     * Gets an array of #contextplayer objects containing information about active players in the
     * current context (people who played the game in the current context in the last 90 days).
     * This may include the current player.
     *
     * @param {boolean} refresh - Get new batch of context players.
     * @returns {Array<object>} An array of formatted players.
     */

  }, {
    key: 'getPlayersAsync',
    value: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var contextPlayersName, contextPlayers;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt('return', []);

              case 2:
                contextPlayersName = '_context_players_' + this.getContextID();

                if (!(this[contextPlayersName] && !refresh)) {
                  _context17.next = 5;
                  break;
                }

                return _context17.abrupt('return', this[contextPlayersName]);

              case 5:
                contextPlayers = FBInstant.context.getPlayersAsync().catch(function (error) {
                  console.error(error, 'GET_PLAYER_ASYNC');
                  return [];
                });


                this[contextPlayersName] = this[playersToFormattedObject](contextPlayers);

                return _context17.abrupt('return', this[contextPlayersName]);

              case 8:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getPlayersAsync() {
        return _ref17.apply(this, arguments);
      }

      return getPlayersAsync;
    }()
    // endregion

    // region ******************************* ADS MONETIZATION *******************************
    /**
     * Load the interstitial ad and return it.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {{ad: AdInstance, error: object}} An object with the ad instance and error, if any.
     */

  }, {
    key: 'loadInterstitialAdAsync',
    value: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(placementID) {
        var _this5 = this;

        var id, interstitialName, loadingName, eventName, errorObject, interstitial;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context18.next = 2;
                  break;
                }

                return _context18.abrupt('return', { ad: {}, error: null });

              case 2:
                id = _facebook2.default.interstitialAds[placementID] || placementID;
                interstitialName = '_interstitial_' + id;

                // Return a preloaded interstitial.

                if (!this[interstitialName]) {
                  _context18.next = 6;
                  break;
                }

                return _context18.abrupt('return', this[interstitialName]);

              case 6:
                loadingName = '_loading_interstitial_' + id;
                eventName = '_interstitial_signal_' + id;

                this[createEvent](eventName);

                // If it's loading, wait for it to resolve.

                if (!this[loadingName]) {
                  _context18.next = 11;
                  break;
                }

                return _context18.abrupt('return', new Promise(function (resolve) {
                  _this5[eventName].addOnce(resolve);
                }));

              case 11:

                // Start loading
                this[loadingName] = true;

                errorObject = null;

                // Get interstitial

                _context18.next = 15;
                return FBInstant.getInterstitialAdAsync(id).catch(function (error) {
                  console.error(error, 'GET_INTERSTITIAL_AD_ASYNC');
                  errorObject = error;
                  return null;
                });

              case 15:
                interstitial = _context18.sent;

                if (!interstitial) {
                  _context18.next = 19;
                  break;
                }

                _context18.next = 19;
                return interstitial.loadAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  errorObject = error;
                  return false;
                });

              case 19:
                // Stop loading
                this[loadingName] = false;

                this[interstitialName] = { ad: this[interstitialName], error: errorObject };

                // Dispatch the interstitial.
                this[eventName].dispatch(this[interstitialName]);

                return _context18.abrupt('return', this[interstitialName]);

              case 23:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function loadInterstitialAdAsync(_x31) {
        return _ref18.apply(this, arguments);
      }

      return loadInterstitialAdAsync;
    }()

    /**
     * Show an interstitial ad. After watching it will preload a new interstitial.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {{success: boolean, error: object}} Object with success and/or error.
     */

  }, {
    key: 'showInterstitialAdAsync',
    value: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(placementID) {
        var id, interstitialObject, result;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context19.next = 2;
                  break;
                }

                return _context19.abrupt('return', true);

              case 2:
                id = _facebook2.default.interstitialAds[placementID] || placementID;
                _context19.next = 5;
                return this.loadInterstitialAdAsync(id);

              case 5:
                interstitialObject = _context19.sent;

                if (interstitialObject.ad) {
                  _context19.next = 8;
                  break;
                }

                return _context19.abrupt('return', { success: false, error: interstitialObject.error });

              case 8:
                _context19.next = 10;
                return interstitialObject.ad.showAsync().then(function () {
                  return { success: true, error: null };
                }).catch(function (error) {
                  console.error(error);
                  return { success: false, error: error };
                });

              case 10:
                result = _context19.sent;


                // Remove reference to the ad.
                interstitialObject.ad = null;
                this['_interstitial_' + id] = null;

                // Load a new interstitial ad
                this.loadInterstitialAdAsync(id);
                return _context19.abrupt('return', result);

              case 15:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function showInterstitialAdAsync(_x32) {
        return _ref19.apply(this, arguments);
      }

      return showInterstitialAdAsync;
    }()

    /**
     * Load the rewarded video and return it.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {AdInstance} An ad instance, or rejects with a api error if it couldn't be created.
     */

  }, {
    key: 'loadRewardedVideoAsync',
    value: function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(placementID) {
        var _this6 = this;

        var id, rewardedVideoName, loadingName, eventName, errorObject, rewardedVideo;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt('return', { ad: {}, error: null });

              case 2:
                id = _facebook2.default.rewardedVideos[placementID] || placementID;
                rewardedVideoName = '_rewardedVideo_' + id;

                // Return a preloaded rewarded video.

                if (!this[rewardedVideoName]) {
                  _context20.next = 6;
                  break;
                }

                return _context20.abrupt('return', this[rewardedVideoName]);

              case 6:
                loadingName = '_loading_rewarded_video_' + id;
                eventName = '_rewarded_video_signal_' + id;

                this[createEvent](eventName);

                // If it's loading, wait for it to resolve.

                if (!this[loadingName]) {
                  _context20.next = 11;
                  break;
                }

                return _context20.abrupt('return', new Promise(function (resolve) {
                  _this6[eventName].addOnce(resolve);
                }));

              case 11:

                // Start loading
                this[loadingName] = true;

                errorObject = null;

                // Get rewarded video

                _context20.next = 15;
                return FBInstant.getRewardedVideoAsync(id).catch(function (error) {
                  console.error(error, 'GET_INTERSTITIAL_AD_ASYNC');
                  errorObject = error;
                  return null;
                });

              case 15:
                rewardedVideo = _context20.sent;

                if (!rewardedVideo) {
                  _context20.next = 19;
                  break;
                }

                _context20.next = 19;
                return rewardedVideo.loadAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  errorObject = error;
                  return false;
                });

              case 19:

                // Set rewarded video as global
                this[rewardedVideoName] = { ad: rewardedVideo, error: errorObject };

                // Stop loading
                this[loadingName] = false;

                // Dispatch the rewarded video.
                this[eventName].dispatch(this[rewardedVideoName]);

                return _context20.abrupt('return', this[rewardedVideoName]);

              case 23:
              case 'end':
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function loadRewardedVideoAsync(_x33) {
        return _ref20.apply(this, arguments);
      }

      return loadRewardedVideoAsync;
    }()

    /**
     * Show a rewarded video. After watching it will preload a new rewarded video.
     *
     * @param {string} placementID - The placement ID that's been setup in your Audience Network
     * settings. Instead of the placementID, you can also fill in the key, which is used in
     * facebook.config.js.
     * @returns {{ success: boolean, error: object} Object with success and error keys.
     */

  }, {
    key: 'showRewardedVideoAsync',
    value: function () {
      var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(placementID) {
        var id, rewardedVideoObject, result;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!this.fbInstantExists) {
                  _context21.next = 2;
                  break;
                }

                return _context21.abrupt('return', true);

              case 2:
                id = _facebook2.default.rewardedVideos[placementID] || placementID;
                _context21.next = 5;
                return this.loadRewardedVideoAsync(id);

              case 5:
                rewardedVideoObject = _context21.sent;

                if (rewardedVideoObject.ad) {
                  _context21.next = 8;
                  break;
                }

                return _context21.abrupt('return', { success: false, error: rewardedVideoObject.error });

              case 8:
                _context21.next = 10;
                return rewardedVideoObject.ad.showAsync().then(function () {
                  return { success: true, error: null };
                }).catch(function (error) {
                  console.error(error);
                  return { success: false, error: error };
                });

              case 10:
                result = _context21.sent;


                // Remove reference to the ad.
                rewardedVideoObject.ad = null;
                this['_rewardedVideo_' + id] = null;

                // Load a new rewarded video
                this.loadRewardedVideoAsync(id);
                return _context21.abrupt('return', result);

              case 15:
              case 'end':
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function showRewardedVideoAsync(_x34) {
        return _ref21.apply(this, arguments);
      }

      return showRewardedVideoAsync;
    }()
    // endregion

    // region ******************************* IN APP PURCHASES *******************************
    /**
     * Sets a callback to be triggered when Payments operations are available.
     *
     * @param {function} callback - The callback function to be executed when Payments are available.
     * @param {object} context - The context of the callback.
     */

  }, {
    key: 'paymentsOnReady',
    value: function paymentsOnReady(callback, context) {
      var _this7 = this;

      if (!this.fBInstantExists) {
        this[doCallback](callback, context);
        return;
      }

      FBInstant.payments.onReady(function () {
        _this7[doCallback](callback, context);
      });
    }

    /**
     * Fetches the game's product catalog.
     *
     * @returns {Array<Product>} The set of products that are registered to the game.
     */

  }, {
    key: 'getCatalogAsync',
    value: function () {
      var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context22.next = 2;
                  break;
                }

                return _context22.abrupt('return', []);

              case 2:
                _context22.next = 4;
                return FBInstant.payments.getCatalogAsync().catch(function (error) {
                  console.error(error, 'GET_CATALOG_ASYNC');
                  return [];
                });

              case 4:
                this.catalog = _context22.sent;
                return _context22.abrupt('return', this.catalog);

              case 6:
              case 'end':
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getCatalogAsync() {
        return _ref22.apply(this, arguments);
      }

      return getCatalogAsync;
    }()

    /**
     * Begins the purchase flow for a specific product. Will immediately reject if called before
     * FBInstant.startGameAsync() has resolved.
     *
     * @param {string} productID - The identifier of the product to purchase.
     * @param {string?} developerPayload - An optional developer-specified payload, to be included
     * in the returned purchase's signed request.
     * @returns {Purchase|null} The product that is successfully purchased by the player. Otherwise,
     * it rejects and returns null.
     */

  }, {
    key: 'purchaseAsync',
    value: function () {
      var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(productID, developerPayload) {
        var purchase;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context23.next = 2;
                  break;
                }

                return _context23.abrupt('return', true);

              case 2:
                _context23.next = 4;
                return FBInstant.payments.purchaseAsync({ productID: productID, developerPayload: developerPayload }).catch(function (error) {
                  console.error(error, 'PURCHASE_ASYNC');
                  return null;
                });

              case 4:
                purchase = _context23.sent;
                return _context23.abrupt('return', purchase);

              case 6:
              case 'end':
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function purchaseAsync(_x35, _x36) {
        return _ref23.apply(this, arguments);
      }

      return purchaseAsync;
    }()

    /**
     * Fetches all of the player's unconsumed purchases. The game must fetch the current player's
     * purchases as soon as the client indicates that it is ready to perform payments-related
     * operations, i.e. at game start. The game can then process and consume any purchases that
     * are waiting to be consumed.
     *
     * @returns {Array<Purchase>} The set of purchases that the player has made for the game.
     */

  }, {
    key: 'getPurchasesAsync',
    value: function () {
      var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
        var purchases;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt('return', []);

              case 2:
                _context24.next = 4;
                return FBInstant.payments.getPurchasesAsync();

              case 4:
                purchases = _context24.sent;
                return _context24.abrupt('return', purchases);

              case 6:
              case 'end':
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function getPurchasesAsync() {
        return _ref24.apply(this, arguments);
      }

      return getPurchasesAsync;
    }()

    /**
     * Consumes a specific purchase belonging to the current player. Before provisioning a
     * product's effects to the player, the game should request the consumption of the purchased
     * product. Once the purchase is successfully consumed, the game should immediately provide
     * the player with the effects of their purchase.
     *
     * @param {string} purchaseToken - The purchase token of the purchase that should be consumed.
     * @returns {boolean} Success or not.
     */

  }, {
    key: 'consumePurchaseAsync',
    value: function () {
      var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(purchaseToken) {
        var success;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (this.fBInstantExists) {
                  _context25.next = 2;
                  break;
                }

                return _context25.abrupt('return', true);

              case 2:
                _context25.next = 4;
                return FBInstant.payments.consumePurchaseAsync(purchaseToken).then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error);
                  return false;
                });

              case 4:
                success = _context25.sent;
                return _context25.abrupt('return', success);

              case 6:
              case 'end':
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function consumePurchaseAsync(_x37) {
        return _ref25.apply(this, arguments);
      }

      return consumePurchaseAsync;
    }()
    // endregion

    // region ******************************* SUBSCRIBE BOT *******************************

    /**
     * Returns a promise that resolves with whether the player can subscribe to the game bot or not.
     *
     * @returns {boolean} Whether a player can subscribe to the game bot or not. Developer can
     * only call subscribeBotAsync() after checking canSubscribeBotAsync(), and the player will
     * only see this bot subscription dialog once every 90 days for a given game.
     */

  }, {
    key: 'canSubscribeBotAsync',
    value: function () {
      var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt('return', true);

              case 2:
                _context26.next = 4;
                return FBInstant.player.canSubscribeBotAsync().catch(function (error) {
                  console.error(error, 'CAN_SUBSCRIBE_BOT_ASYNC');
                  return false;
                });

              case 4:
                this.canSubscribeBot = _context26.sent;
                return _context26.abrupt('return', this.canSubscribeBot);

              case 6:
              case 'end':
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function canSubscribeBotAsync() {
        return _ref26.apply(this, arguments);
      }

      return canSubscribeBotAsync;
    }()

    /**
     * Request that the player subscribe the bot associated to the game. The API will reject if
     * the subscription fails - else, the player will subscribe the game bot.
     *
     * @returns {boolean} If player successfully subscribed to the game bot, or rejects if request
     * failed or player chose to not subscribe.
     */

  }, {
    key: 'subscribeBotAsync',
    value: function () {
      var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
        var canSubscribe, success;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context27.next = 2;
                  break;
                }

                return _context27.abrupt('return', true);

              case 2:

                if (!_facebook2.default.subscribeBot) {
                  console.warn('Subscribe bot is turned off. Turn it on in the facebook.config.js');
                }

                if (!(this.canSubscribeBot === false)) {
                  _context27.next = 5;
                  break;
                }

                return _context27.abrupt('return', false);

              case 5:
                if (!(this.canSubscribeBot === undefined)) {
                  _context27.next = 11;
                  break;
                }

                _context27.next = 8;
                return this.canSubscribeBotAsync();

              case 8:
                canSubscribe = _context27.sent;

                if (canSubscribe) {
                  _context27.next = 11;
                  break;
                }

                return _context27.abrupt('return', false);

              case 11:
                success = FBInstant.player.subscribeBotAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'SUBSCRIBE_BOT');
                  return false;
                });
                return _context27.abrupt('return', success);

              case 13:
              case 'end':
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function subscribeBotAsync() {
        return _ref27.apply(this, arguments);
      }

      return subscribeBotAsync;
    }()
    // endregion

    // region ******************************* CREATE SHORTCUT *******************************
    /**
     * Returns whether or not the user is eligible to have shortcut creation requested. Will
     * return false if createShortcutAsync was already called this session or the user is
     * ineligible for shortcut creation.
     *
     * @returns {boolean} True if the game can request the player create a shortcut to the game,
     * and false otherwise
     */

  }, {
    key: 'canCreateShortcutAsync',
    value: function () {
      var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context28.next = 3;
                  break;
                }

                this.canCreateShortcut = true;
                return _context28.abrupt('return', this.canCreateShortcut);

              case 3:
                _context28.next = 5;
                return FBInstant.canCreateShortcutAsync().catch(function (error) {
                  console.error(error, 'CAN_CREATE_SHORTCUT_ASYNC');
                  return false;
                });

              case 5:
                this.canCreateShortcut = _context28.sent;
                return _context28.abrupt('return', this.canCreateShortcut);

              case 7:
              case 'end':
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function canCreateShortcutAsync() {
        return _ref28.apply(this, arguments);
      }

      return canCreateShortcutAsync;
    }()

    /**
     * Prompts the user to create a shortcut to the game if they are eligible to Can only be called
     * once per session. (see canCreateShortcutAsync)
     *
     * @returns {boolean} If player successfully create a shortcut, or rejects if
     * request failed or player chose to not create.
     */

  }, {
    key: 'createShortcutAsync',
    value: function () {
      var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
        var canCreateShortcut, success;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (this.fbInstantExists) {
                  _context29.next = 2;
                  break;
                }

                return _context29.abrupt('return', true);

              case 2:

                if (!_facebook2.default.createShortcut) {
                  console.warn('Create shortcut is turned off. Turn it on in the facebook.config.js');
                }

                if (!(this.canCreateShortcut === false)) {
                  _context29.next = 5;
                  break;
                }

                return _context29.abrupt('return', false);

              case 5:
                if (!(this.canCreateShortcut === undefined)) {
                  _context29.next = 11;
                  break;
                }

                _context29.next = 8;
                return this.canCreateShortcutAsync();

              case 8:
                canCreateShortcut = _context29.sent;

                if (canCreateShortcut) {
                  _context29.next = 11;
                  break;
                }

                return _context29.abrupt('return', false);

              case 11:
                success = FBInstant.player.createShortcutAsync().then(function () {
                  return true;
                }).catch(function (error) {
                  console.error(error, 'CREATE_SHORTCUT');
                  return false;
                });
                return _context29.abrupt('return', success);

              case 13:
              case 'end':
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function createShortcutAsync() {
        return _ref29.apply(this, arguments);
      }

      return createShortcutAsync;
    }()
    // endregion

    // region ******************************* EVENTS *******************************
    /**
     * Sets the data associated with the individual gameplay session for the current context. This
     * function should be called whenever the game would like to update the current session data.
     * This session data may be used to populate a variety of payloads, such as game play webhooks.
     *
     * @param {object} sessionData - An arbitrary data object, which must be less than or equal to
     * 1000 characters when stringified.
     */

  }, {
    key: 'setSessionData',
    value: function setSessionData(sessionData) {
      if (!this.fBInstantExists) {
        return;
      }

      FBInstant.setSessionData(sessionData);
    }

    /**
     * Sends a custom event to the Facebook server. The events can be used to track user metrics.
     * @param {string} eventName - Name of the event. Must be 2 to 40 characters, and can only
     * contain '_', '-', ' ', and alphanumeric characters.
     * @param {number} valueToSum - An optional numeric value that FB Analytics can calculate a
     * sum with.
     * @param {object} parameters An optional object that can contain up to 25 key-value pairs to
     * be logged with the event Keys must be 2 to 40 characters, and can only contain '_', '-', '
     * ', and alphanumeric characters. Values must be less than 100 characters in length.
     */

  }, {
    key: 'logEvent',
    value: function logEvent(eventName, valueToSum, parameters) {
      if (!this.fBInstantExists) {
        return;
      }

      FBInstant.logEvent(eventName, valueToSum, parameters);
    }

    /**
     * A custom method to log specific error events. It uses both Facebook API and a custom
     * backend to log error logs.
     *
     * @param {string|object} err - An error object or string.
     * @param eventName
     */

  }, {
    key: 'logErrorEvent',
    value: function logErrorEvent(err) {
      var eventName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'UNKNOWN';

      try {
        if (err.code === 'USER_INPUT') {
          return;
        }

        if (err.code) {
          this.logEvent('ERROR_' + eventName, 1, { code: err.code, message: err.message });
          return;
        }

        var stringArray = void 0;
        var dataArray = (JSON.stringify(this.data) || ' ').match(/.{1,100}/g);
        var statsArray = (JSON.stringify(this.stats) || ' ').match(/.{1,100}/g);

        // TODO customize it to be able to send logs to our own backend.
        // FetchData.log({
        //   event_name: eventName,
        //   error: JSON.stringify(error.stack),
        //   data: JSON.stringify(DataManager.instance.facebookData),
        //   platform: Facebook.instance.getPlatform(),
        //   player_id: Facebook.instance.getPlayerID(),
        //   browser: getBrowser(),
        // });

        if (typeof err.stack === 'string') {
          stringArray = err.stack.match(/.{1,100}/g);
        } else if (typeof error === 'string') {
          stringArray = err.match(/.{1,100}/g);
        } else {
          stringArray = [' '];
        }

        var fusedArray = [].concat(_toConsumableArray(dataArray), _toConsumableArray(stringArray), _toConsumableArray(statsArray));
        var parameters = {};

        for (var i = 0, length = Math.min(fusedArray.length, 25); i < length; i += 1) {
          parameters['error' + i] = fusedArray[i];
        }

        this.logEvent('ERROR_' + eventName, 1, parameters);
      } catch (error) {
        if (eventName === 'PROXYWARNINGLOG') {
          return;
        }
        // FetchData.log({
        //   event_name: 'ERROR_INTERNAL_SERVER_ERROR',
        //   error: JSON.stringify(error),
        //   data: JSON.stringify(DataManager.instance.facebookData),
        //   platform: Facebook.instance.getPlatform(),
        //   player_id: Facebook.instance.getPlayerID(),
        //   browser: getBrowser(),
        // });

        var _stringArray = JSON.stringify(error).match(/.{1,100}/g);
        var _parameters = {};

        for (var _i = 0, _length = Math.min(_stringArray.length, 25); _i < _length; _i += 1) {
          _parameters['error' + _i] = _stringArray[_i];
        }

        this.logEvent('ERROR_INTERNAL_SERVER_ERROR', 1, _parameters);
      }
    }
    // endregion

    // region ******************************* NON-FACEBOOK API *******************************
    /**
     * Execute the callback.
     *
     * @param {function} callback - The callback that needs to be executed.
     * @param {object} context - The context of the callback.
     * @param {*} parameter - The parameters for the callback.
     */

  }, {
    key: doCallback,
    value: function value(callback, context) {
      if (typeof callback === 'function') {
        for (var _len = arguments.length, parameter = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          parameter[_key - 2] = arguments[_key];
        }

        callback.call.apply(callback, [context].concat(parameter));
      }
    }

    /**
     * Convert entries to a object with only key value pairs.
     *
     * @param {object|Array<object>} entries - Entries that needs to be converted.
     * @returns {object|Array<object>} Formatted entry or array of formatted entries.
     */

  }, {
    key: entriesToFormattedObject,
    value: function value(entries) {
      if (Array.isArray(entries)) {
        return entries.map(function (entry) {
          return {
            name: entry.getPlayer().getName(),
            id: entry.getPlayer().getID(),
            photoUrl: entry.getPlayer().getPhoto(),
            rank: entry.getRank(),
            score: entry.getScore(),
            data: (0, _utils.parseJSONSingle)(entry.getExtraData()),
            timestamp: entry.getTimestamp()
          };
        });
      }

      return {
        name: entries.getPlayer().getName(),
        id: entries.getPlayer().getID(),
        photoUrl: entries.getPlayer().getPhoto(),
        rank: entries.getRank(),
        score: entries.getScore(),
        data: (0, _utils.parseJSONSingle)(entries.getExtraData()),
        timestamp: entries.getTimestamp()
      };
    }

    /**
     * Convert players to a object with only key value pairs.
     *
     * @param {object|Array<object>} players - Players that needs to be converted.
     * @returns {object|Array<object>} Formatted player or array of formatted players.
     */

  }, {
    key: playersToFormattedObject,
    value: function value(players) {
      if (Array.isArray(players)) {
        return players.map(function (player) {
          return {
            name: player.getName(),
            id: player.getID(),
            photoUrl: player.getPhoto()
          };
        });
      }

      return {
        name: players.getName(),
        id: players.getID(),
        photoUrl: players.getPhoto()
      };
    }

    /**
     * Get a default player entry.
     *
     * @returns {{photoUrl: string, score: number, data: {}, name: string, rank: string, id: string}}
     */

  }, {
    key: getDefaultPlayerEntry,
    value: function value() {
      return {
        name: this.getPlayerName(),
        id: this.getPlayerID(),
        photoUrl: this.getPlayerPhoto(),
        score: 0,
        rank: '--',
        data: {}
      };
    }

    // TODO don't use phaser signals. Replace it with event listeners.

  }, {
    key: createEvent,
    value: function value(signalName) {
      if (!this[signalName]) {
        this[signalName] = new _phaser.Signal();
      }
    }
    // endregion

  }]);

  return Facebook;
}(_singleton2.default);

// module.exports = Facebook;


exports.default = Facebook;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// extended script from phaser sprites, it sets some values automatically to the right settings
var Sprite = function (_Phaser$Image) {
  _inherits(Sprite, _Phaser$Image);

  function Sprite(_ref) {
    var _ref$asset = _ref.asset,
        asset = _ref$asset === undefined ? 'player_shoot' : _ref$asset,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        frame = _ref.frame,
        _ref$anchorX = _ref.anchorX,
        anchorX = _ref$anchorX === undefined ? 0 : _ref$anchorX,
        _ref$anchorY = _ref.anchorY,
        anchorY = _ref$anchorY === undefined ? 0 : _ref$anchorY,
        _ref$inputEnabled = _ref.inputEnabled,
        inputEnabled = _ref$inputEnabled === undefined ? false : _ref$inputEnabled,
        _ref$scaleX = _ref.scaleX,
        scaleX = _ref$scaleX === undefined ? 1 : _ref$scaleX,
        _ref$scaleY = _ref.scaleY,
        scaleY = _ref$scaleY === undefined ? 1 : _ref$scaleY,
        _ref$angle = _ref.angle,
        angle = _ref$angle === undefined ? 0 : _ref$angle;

    _classCallCheck(this, Sprite);

    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, game, x, y, asset, frame));

    _this.game = game;
    _this.anchor.setTo(anchorX, anchorY);
    _this.inputEnabled = inputEnabled;
    _this.smoothed = true;
    _this.scale.setTo(scaleX, scaleY);
    _this.angle = angle;
    _this.asset = asset;
    _this.frame = frame;
    return _this;
  }

  _createClass(Sprite, [{
    key: 'center',
    value: function center() {
      this.x += this.width / 2;
      this.y += this.height / 2;
    }
  }, {
    key: 'changeTexture',
    value: function changeTexture(frame) {
      var asset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.asset;

      this.loadTexture(asset, frame);
    }
  }]);

  return Sprite;
}(_phaser2.default.Image);

exports.default = Sprite;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Singleton2 = __webpack_require__(105);

var _Singleton3 = _interopRequireDefault(_Singleton2);

var _orientation = __webpack_require__(106);

var _orientation2 = _interopRequireDefault(_orientation);

var _utils = __webpack_require__(76);

var _famobiApi = __webpack_require__(46);

var _famobiApi2 = _interopRequireDefault(_famobiApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewportManager = function (_Singleton) {
  _inherits(ViewportManager, _Singleton);

  function ViewportManager() {
    _classCallCheck(this, ViewportManager);

    return _possibleConstructorReturn(this, (ViewportManager.__proto__ || Object.getPrototypeOf(ViewportManager)).apply(this, arguments));
  }

  _createClass(ViewportManager, [{
    key: "initialize",
    value: function initialize() {
      // FamobiAPI.instance.setOnOrientationChange(() => {
      //   this.onSizeChange();
      // })
      this.zoomIn = 1;
      game.scale.setResizeCallback(this.onResize, this);

      game.onResizeChange = new Phaser.Signal();
    }
  }, {
    key: "onSizeChange",
    value: function onSizeChange() {
      this.resizeGame();
      game.state.resize(this.gameWidth, this.gameHeight);
    }
  }, {
    key: "resizeGame",
    value: function resizeGame() {

      var innerWidth = window.innerWidth;
      var innerHeight = window.innerHeight;

      this.gameHeight = _orientation2.default.BASE_GAME_HEIGHT;
      var scale = innerWidth / innerHeight;
      this.prevWindowWidth = innerWidth;
      this.prevWindowHeight = innerHeight;
      //    this.gameWidth = clamp(this.gameHeight * scale, Orientation.MIN_GAME_WIDTH, Orientation.MAX_GAME_WIDTH);

      this.zoomIn = 1;

      if (scale > 1) {
        this.gameHeight = 1280 / scale;
        this.gameWidth = this.gameHeight * 720 / 1280;
      }

      // if (this.gameWidth > Orientation.GAME_WIDTH_START_ZOOM) {
      //   this.zoomIn = 1 - (((this.gameWidth - Orientation.GAME_WIDTH_START_ZOOM)
      //     / (Orientation.MAX_GAME_WIDTH - Orientation.GAME_WIDTH_START_ZOOM))
      //     * Orientation.MAX_ZOOM_IN);
      // }

      //this.zoomIn = 0.4;
      game.scale.setGameSize(this.gameWidth * this.zoomIn, this.gameHeight * this.zoomIn);

      game.onResizeChange.dispatch();

      if (game.player) {
        game.camera.reset();
        game.camera.bounds.setTo(-game.world.centerX, undefined, game.world.width);

        game.camera.follow(game.player.cameraFocusPoint, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
      }
      // console.log('высота='+this.gameHeight);
      // console.log('ширина='+this.gameWidth);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var innerWidth = window.innerWidth;
      var innerHeight = window.innerHeight;
      this.prevWindowWidth === innerWidth && this.prevWindowHeight === innerHeight || this.onSizeChange();
      var canvas = game.canvas;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
    }
  }]);

  return ViewportManager;
}(_Singleton3.default);

exports.default = ViewportManager;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Store all the signals in this class so the Game.js class doesn't get overflooded
var Signals = function () {
  function Signals() {
    _classCallCheck(this, Signals);
  }

  _createClass(Signals, null, [{
    key: 'addSignals',
    value: function addSignals() {
      // Player
      game.switchDirection = new _phaser2.default.Signal();
      game.addScore = new _phaser2.default.Signal();
      game.updateCoins = new _phaser2.default.Signal();
      game.revivePlayer = new _phaser2.default.Signal();
      game.pickRandomSkin = new _phaser2.default.Signal();
      game.totalScore = new _phaser2.default.Signal();
      // States
      game.goToGame = new _phaser2.default.Signal();
      game.goToMain = new _phaser2.default.Signal();
      game.goToRevive = new _phaser2.default.Signal();

      // UI
      game.setScore = new _phaser2.default.Signal();

      // Achievements
      game.achievementAttained = new _phaser2.default.Signal();
    }
  }]);

  return Signals;
}();

exports.default = Signals;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

var _famobiApi = __webpack_require__(46);

var _famobiApi2 = _interopRequireDefault(_famobiApi);

var _singleton = __webpack_require__(19);

var _singleton2 = _interopRequireDefault(_singleton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VibrationManager = function (_Singleton) {
  _inherits(VibrationManager, _Singleton);

  function VibrationManager() {
    _classCallCheck(this, VibrationManager);

    // TODO get vibration setting from local storage.
    var _this = _possibleConstructorReturn(this, (VibrationManager.__proto__ || Object.getPrototypeOf(VibrationManager)).call(this));

    _this._vibration = true;
    // enable vibration support
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    _this._isSupported = !!navigator.vibrate;
    _this._defaultVibration = [100, 10, 100];
    return _this;
  }
  /**
   * You can call this function like this: VibrationManager.instance.vibrate();
   * @param {number[]} parameters
   */


  _createClass(VibrationManager, [{
    key: 'vibrate',
    value: function vibrate(parameters) {
      if (!this.isVibrationSupported()) {
        return;
      }
      if (!this._vibration) {
        return;
      }
      navigator.vibrate(Array.isArray(parameters) ? parameters : this._defaultVibration);
    }
    /**
    * Return if the vibration is supported or not. Use this method to check if the vibration button needs to be visible.
    */

  }, {
    key: 'isVibrationSupported',
    value: function isVibrationSupported() {
      return this._isSupported && !game.device.desktop;
    }
  }]);

  return VibrationManager;
}(_singleton2.default);

exports.default = VibrationManager;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _facebook = __webpack_require__(52);

var _facebook2 = _interopRequireDefault(_facebook);

var _localisationManager = __webpack_require__(107);

var _localisationManager2 = _interopRequireDefault(_localisationManager);

var _signalManager = __webpack_require__(61);

var _signalManager2 = _interopRequireDefault(_signalManager);

var _background = __webpack_require__(158);

var _background2 = _interopRequireDefault(_background);

var _switchStateButton = __webpack_require__(386);

var _switchStateButton2 = _interopRequireDefault(_switchStateButton);

var _leaderboard = __webpack_require__(387);

var _leaderboard2 = _interopRequireDefault(_leaderboard);

var _leaderboardCard = __webpack_require__(388);

var _leaderboardCard2 = _interopRequireDefault(_leaderboardCard);

var _loadingScreen = __webpack_require__(389);

var _loadingScreen2 = _interopRequireDefault(_loadingScreen);

var _squareMask = __webpack_require__(153);

var _squareMask2 = _interopRequireDefault(_squareMask);

var _scrollView = __webpack_require__(154);

var _scrollView2 = _interopRequireDefault(_scrollView);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This state contains all the game logic. Keep this script as clean as possible.
 * No new methods should be added to this script.
 */
var _class = function (_State) {
  _inherits(_class, _State);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'init',

    /**
       * init is the very first function called when your State starts up.
       */
    value: function init() {
      this.background = new _background2.default({ key: 'loader-bg', stretch: true });
      this.loadingScreen = new _loadingScreen2.default({ key: 'loader-bar', stretch: true });
    }

    /**
       * preload is called first. Normally you'd use this to load your game assets.
       */

  }, {
    key: 'preload',
    value: function preload() {
      _localisationManager2.default.instance.loadLanguagePackage();
    }

    /**
       * create is called once preload has completed, this includes the loading of any
       * assets from the Loader.
       */

  }, {
    key: 'create',
    value: function create() {
      //this.loadingScreen.finish(1000);

      // this.startGameButton = new SwitchStateButton({
      //   key: 'loader-bar',
      //   position: new Point(500, 500),
      //   stateKey: 'Game',
      // })

      // const startGameText = new Text({
      //   text: 'Start',
      //   anchor: new Point(0.5, 0.5),
      // })

      // this.startGameButton.addObject(startGameText)

      // this.viewport = new SquareMask(new Point(0, 0), new Point(400, 300));

      // this.leaderboard = new Leaderboard(LeaderboardCard, new Point(game.width / 2, 100), 10);

      // this.leaderboard.createEntries([
      //   { name: 'test1', score: 1000, rank: 1 },
      //   { name: 'test2', score: 900, rank: 2 },
      //   { name: 'test3', score: 800, rank: 3 },
      //   { name: 'test4', score: 700, rank: 4 },
      // ]);

      // this.scrollView = new ScrollView({
      //   viewport: this.viewport,
      //   content: this.leaderboard,
      //   position: new Point(game.width / 2, 100),
      //   scrollMode: 'bounce',
      //   bounce: 0.5,
      //   horizontal: false,
      // });
      window.game.state.start('Game', true, false);
    }

    /**
       * Nearly all display objects in Phaser render automatically, you don't need to tell them to
       * render. However the render method is called AFTER the game renderer and plugins have
       * rendered, so you're able to do any final post-processing style effects here. Note that
       * this happens before plugins postRender takes place.
       */

  }, {
    key: 'render',
    value: function render() {
      if (false) {
        //      game.debug.pointer(game.input.activePointer);
      }
    }
  }]);

  return _class;
}(_phaser.State);

exports.default = _class;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(156);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchStateButton = function (_Button) {
  _inherits(SwitchStateButton, _Button);

  function SwitchStateButton(_ref) {
    var key = _ref.key,
        position = _ref.position,
        stateKey = _ref.stateKey;

    _classCallCheck(this, SwitchStateButton);

    var _this = _possibleConstructorReturn(this, (SwitchStateButton.__proto__ || Object.getPrototypeOf(SwitchStateButton)).call(this, {
      key: key,
      position: position
    }));

    _this.stateKey = stateKey;

    game.add.existing(_this);
    return _this;
  }

  _createClass(SwitchStateButton, [{
    key: 'doOnClick',
    value: function doOnClick() {
      console.log(this.stateKey);
      window.game.state.start(this.stateKey, true, false);
    }
  }]);

  return SwitchStateButton;
}(_button2.default);

exports.default = SwitchStateButton;

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _objectPool = __webpack_require__(150);

var _objectPool2 = _interopRequireDefault(_objectPool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leaderboard = function (_Group) {
  _inherits(Leaderboard, _Group);

  function Leaderboard(card, position) {
    var spacing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Leaderboard);

    var _this = _possibleConstructorReturn(this, (Leaderboard.__proto__ || Object.getPrototypeOf(Leaderboard)).call(this, game));

    _this.Card = card;
    _this.spacing = spacing;
    _this.position.setTo(position.x, position.y);

    _this.objectPool = _objectPool2.default.create(function () {
      return new _this.Card('loader-bar');
    });
    return _this;
  }

  _createClass(Leaderboard, [{
    key: 'createEntries',
    value: function createEntries(entries) {
      var y = 0;

      for (var i = 0; i < entries.length; i += 1) {
        var card = this.objectPool.use();
        card.visible = true;
        card.exists = false;
        card.setCardInfo(entries[i]);

        card.position.setTo(0, y);

        y += card.height / 2 + this.spacing;
        this.add(card);
      }
    }
  }]);

  return Leaderboard;
}(_phaser.Group);

exports.default = Leaderboard;

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _text = __webpack_require__(31);

var _text2 = _interopRequireDefault(_text);

var _image = __webpack_require__(53);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeaderboardCard = function (_Group) {
  _inherits(LeaderboardCard, _Group);

  function LeaderboardCard(backgroundKey) {
    _classCallCheck(this, LeaderboardCard);

    var _this = _possibleConstructorReturn(this, (LeaderboardCard.__proto__ || Object.getPrototypeOf(LeaderboardCard)).call(this, game));

    _this.backgroundKey = backgroundKey;

    _this.createCard();
    _this.visible = false;

    console.warn("testing");
    return _this;
  }

  _createClass(LeaderboardCard, [{
    key: 'createCard',
    value: function createCard() {
      this.background = new _image2.default({
        key: this.backgroundKey,
        anchor: new _phaser.Point(0.5, 0)
      });

      this.rank = new _text2.default({
        text: '1',
        position: new _phaser.Point(-100, this.background.height / 2)
      });

      this.name = new _text2.default({
        text: 'NAME',
        position: new _phaser.Point(0, this.background.height / 2)
      });

      this.score = new _text2.default({
        text: '1000',
        position: new _phaser.Point(100, this.background.height / 2)
      });

      this.add(this.background);
      this.add(this.rank);
      this.add(this.name);
      this.add(this.score);
    }
  }, {
    key: 'setCardInfo',
    value: function setCardInfo(info) {
      console.log("set info", info);
      this.name.text = String(info.name);
      this.rank.text = String(info.rank);
      this.score.text = String(info.score);
    }
  }]);

  return LeaderboardCard;
}(_phaser.Group);

exports.default = LeaderboardCard;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(3);

var _image = __webpack_require__(53);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The loading screen is an overlay over the game.
 * Make sure to call the method finish to remove the overlay when ready.
 */
var LoadingScreen = function (_Image) {
  _inherits(LoadingScreen, _Image);

  function LoadingScreen(_ref) {
    var key = _ref.key,
        frame = _ref.frame,
        stretch = _ref.stretch,
        position = _ref.position,
        _ref$anchor = _ref.anchor,
        anchor = _ref$anchor === undefined ? new _phaser.Point(0, 0) : _ref$anchor;

    _classCallCheck(this, LoadingScreen);

    var _this = _possibleConstructorReturn(this, (LoadingScreen.__proto__ || Object.getPrototypeOf(LoadingScreen)).call(this, { key: key, frame: frame, position: position, anchor: anchor }));

    if (stretch) {
      _this.width = game.width;
      _this.height = game.height;
    }

    _this.levelBar = new _phaser.Sprite({
      key: 'level',
      anchor: { x: 0.5, y: 0.5 },
      scale: { x: 1, y: 1 },
      position: { x: game.width / 2, y: game.height / 2 }
    });

    _this.levelBarFull = new _phaser.Sprite({
      key: 'level_full',
      position: { x: -_this.levelBar.texture.width / 2, y: 0 },
      anchor: { x: 0, y: 0.5 },
      scale: { x: 0, y: 1 }
    });

    _this.levelBar.addChild(_this.levelBarFull);

    _this.inputEnabled = true; // This prevent clicking through the loading screen.

    game.add.existing(_this); // Add to the world
    game.world.bringToTop(_this); // Bring to the world

    game.load.onFileComplete.add(_this.setLoadingProgress, _this);

    return _this;
  }

  /**
   * Keep the image at the top.
   */


  _createClass(LoadingScreen, [{
    key: 'update',
    value: function update() {
      game.world.bringToTop(this);
    }

    /**
     * Set the loading progress.
     *
     * @param progress number Progress in percentage.
     */

  }, {
    key: 'setLoadingProgress',
    value: function setLoadingProgress(progress) {
      console.log(progress);
      this.levelBarFull.scale.x += progress / 100;
    }

    /**
     * Destroy the loading screen.
     *
     * @param delay number A delay to destroy the loading screen. Default value is zero.
     */

  }, {
    key: 'finish',
    value: function finish() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.setLoadingProgress(100);

      game.load.onFileComplete.remove(this.setLoadingProgress, this);

      if (!delay) {
        this.destroy();

        return;
      }

      game.time.events.add(delay, this.destroy, this);
    }
  }]);

  return LoadingScreen;
}(_image2.default);

exports.default = LoadingScreen;

/***/ }),
/* 390 */
/***/ (function(module, exports) {

module.exports = {"name":"boilerplate-messenger-phaser","version":"1.0.1","description":"","author":"Weikang <weikang@cloudgames.com>","main":"index.js","scripts":{"update-assets":"webpack --config webpack.assets.config.js","dev":"webpack","deploy":"webpack --config webpack.production.config.js","facebook":"webpack --config webpack.facebook.config.js","cordova":"webpack --config webpack.cordova.config.js","test":"eslint './src/**/*.js'","famobi-dev":"webpack --config webpack.famobi.dev.config.js","famobi-qa":"webpack --config webpack.famobi.qa.config.js","famobi-prod":"webpack --config webpack.famobi.prod.config.js"},"license":"MIT","devDependencies":{"babel-core":"^6.26.0","babel-eslint":"^8.2.1","babel-loader":"^7.1.2","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","browser-sync":"^2.26.7","browser-sync-webpack-plugin":"^2.0.1","clean-webpack-plugin":"^0.1.18","copy-webpack-plugin":"^4.4.1","cordova":"^8.0.0","eslint":"^5.3.0","eslint-config-standard":"^10.2.1","eslint-plugin-import":"^2.11.0","eslint-plugin-node":"^6.0.0","eslint-plugin-promise":"^3.6.0","eslint-plugin-standard":"^3.0.1","expose-loader":"^0.7.4","html-webpack-plugin":"^2.30.1","string-replace-loader":"^2.3.0","webpack":"^3.11.0","webpack-shell-plugin":"^0.5.0","webpack-zip-files-plugin":"^1.0.0"},"dependencies":{"cordova-android":"^7.1.1","cordova-browser":"^5.0.3","cordova-ios":"^4.5.4","cordova-plugin-whitelist":"^1.3.3","eslint-config-airbnb-base":"^13.1.0","idiom.js":"^1.0.0","phaser":"^2.6.2","phaser-ce":"^2.11.0","webfontloader":"^1.6.28","msdf-bmfont-xml":"^2.4.3"},"cordova":{"platforms":["android","browser","ios"],"plugins":{"cordova-plugin-whitelist":{}}}}

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Values for initializing the game.
 */
exports.default = {
  width: 500,
  height: 1280,
  parent: 'gameWrapper',
  scaleMode: _phaser2.default.ScaleManager.SHOW_ALL,
  renderer: _phaser2.default.CANVAS,
  fullScreenScaleMode: _phaser2.default.ScaleManager.SHOW_ALL,
  multiTexture: true,
  transparent: false,
  antialias: true,
  enableDebug: true,
  preserveDrawingBuffer: true
};

/***/ })
],[159]);
