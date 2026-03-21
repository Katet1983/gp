function Ma(E) {
  var B = 0;
  return function () {
    return B < E.length ? { done: !1, value: E[B++] } : { done: !0 };
  };
}
function fc(E) {
  var B = "undefined" != typeof Symbol && Symbol.iterator && E[Symbol.iterator];
  return B ? B.call(E) : { next: Ma(E) };
}
function qc(E) {
  E = [
    "object" == typeof globalThis && globalThis,
    E,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var B = 0; B < E.length; ++B) {
    var Q = E[B];
    if (Q && Q.Math == Math) return Q;
  }
  throw Error("Cannot find global object");
}
var qg = qc(this),
  Ag =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (E, B, Q) {
          if (E == Array.prototype || E == Object.prototype) return E;
          E[B] = Q.value;
          return E;
        };
function Bg(E, B) {
  if (B)
    a: {
      var Q = qg;
      E = E.split(".");
      for (var V = 0; V < E.length - 1; V++) {
        var ia = E[V];
        if (!(ia in Q)) break a;
        Q = Q[ia];
      }
      E = E[E.length - 1];
      V = Q[E];
      B = B(V);
      B != V && null != B && Ag(Q, E, { configurable: !0, writable: !0, value: B });
    }
}
Bg("Promise", function (E) {
  function B(D) {
    this.Nh = 0;
    this.$i = void 0;
    this.nh = [];
    this.Xs = !1;
    var R = this.Xm();
    try {
      D(R.resolve, R.reject);
    } catch (ea) {
      R.reject(ea);
    }
  }
  function Q() {
    this.De = null;
  }
  function V(D) {
    return D instanceof B
      ? D
      : new B(function (R) {
          R(D);
        });
  }
  if (E) return E;
  Q.prototype.Nq = function (D) {
    if (null == this.De) {
      this.De = [];
      var R = this;
      this.Oq(function () {
        R.wy();
      });
    }
    this.De.push(D);
  };
  var ia = qg.setTimeout;
  Q.prototype.Oq = function (D) {
    ia(D, 0);
  };
  Q.prototype.wy = function () {
    for (; this.De && this.De.length; ) {
      var D = this.De;
      this.De = [];
      for (var R = 0; R < D.length; ++R) {
        var ea = D[R];
        D[R] = null;
        try {
          ea();
        } catch (Da) {
          this.lx(Da);
        }
      }
    }
    this.De = null;
  };
  Q.prototype.lx = function (D) {
    this.Oq(function () {
      throw D;
    });
  };
  B.prototype.Xm = function () {
    function D(Da) {
      return function (Ta) {
        ea || ((ea = !0), Da.call(R, Ta));
      };
    }
    var R = this,
      ea = !1;
    return { resolve: D(this.QB), reject: D(this.ep) };
  };
  B.prototype.QB = function (D) {
    if (D === this) this.ep(new TypeError("A Promise cannot resolve to itself"));
    else if (D instanceof B) this.FC(D);
    else {
      a: switch (typeof D) {
        case "object":
          var R = null != D;
          break a;
        case "function":
          R = !0;
          break a;
        default:
          R = !1;
      }
      R ? this.PB(D) : this.Wr(D);
    }
  };
  B.prototype.PB = function (D) {
    var R = void 0;
    try {
      R = D.then;
    } catch (ea) {
      this.ep(ea);
      return;
    }
    "function" == typeof R ? this.GC(R, D) : this.Wr(D);
  };
  B.prototype.ep = function (D) {
    this.Wu(2, D);
  };
  B.prototype.Wr = function (D) {
    this.Wu(1, D);
  };
  B.prototype.Wu = function (D, R) {
    if (0 != this.Nh) throw Error("Cannot settle(" + D + ", " + R + "): Promise already settled in state" + this.Nh);
    this.Nh = D;
    this.$i = R;
    2 === this.Nh && this.WB();
    this.xy();
  };
  B.prototype.WB = function () {
    var D = this;
    ia(function () {
      if (D.JA()) {
        var R = qg.console;
        "undefined" !== typeof R && R.error(D.$i);
      }
    }, 1);
  };
  B.prototype.JA = function () {
    if (this.Xs) return !1;
    var D = qg.CustomEvent,
      R = qg.Event,
      ea = qg.dispatchEvent;
    if ("undefined" === typeof ea) return !0;
    "function" === typeof D
      ? (D = new D("unhandledrejection", { cancelable: !0 }))
      : "function" === typeof R
      ? (D = new R("unhandledrejection", { cancelable: !0 }))
      : ((D = qg.document.createEvent("CustomEvent")), D.initCustomEvent("unhandledrejection", !1, !0, D));
    D.promise = this;
    D.reason = this.$i;
    return ea(D);
  };
  B.prototype.xy = function () {
    if (null != this.nh) {
      for (var D = 0; D < this.nh.length; ++D) Ja.Nq(this.nh[D]);
      this.nh = null;
    }
  };
  var Ja = new Q();
  B.prototype.FC = function (D) {
    var R = this.Xm();
    D.Qj(R.resolve, R.reject);
  };
  B.prototype.GC = function (D, R) {
    var ea = this.Xm();
    try {
      D.call(R, ea.resolve, ea.reject);
    } catch (Da) {
      ea.reject(Da);
    }
  };
  B.prototype.then = function (D, R) {
    function ea(fb, oa) {
      return "function" == typeof fb
        ? function (dc) {
            try {
              Da(fb(dc));
            } catch (rc) {
              Ta(rc);
            }
          }
        : oa;
    }
    var Da,
      Ta,
      ec = new B(function (fb, oa) {
        Da = fb;
        Ta = oa;
      });
    this.Qj(ea(D, Da), ea(R, Ta));
    return ec;
  };
  B.prototype.catch = function (D) {
    return this.then(void 0, D);
  };
  B.prototype.Qj = function (D, R) {
    function ea() {
      switch (Da.Nh) {
        case 1:
          D(Da.$i);
          break;
        case 2:
          R(Da.$i);
          break;
        default:
          throw Error("Unexpected state: " + Da.Nh);
      }
    }
    var Da = this;
    null == this.nh ? Ja.Nq(ea) : this.nh.push(ea);
    this.Xs = !0;
  };
  B.resolve = V;
  B.reject = function (D) {
    return new B(function (R, ea) {
      ea(D);
    });
  };
  B.race = function (D) {
    return new B(function (R, ea) {
      for (var Da = fc(D), Ta = Da.next(); !Ta.done; Ta = Da.next()) V(Ta.value).Qj(R, ea);
    });
  };
  B.all = function (D) {
    var R = fc(D),
      ea = R.next();
    return ea.done
      ? V([])
      : new B(function (Da, Ta) {
          function ec(dc) {
            return function (rc) {
              fb[dc] = rc;
              oa--;
              0 == oa && Da(fb);
            };
          }
          var fb = [],
            oa = 0;
          do fb.push(void 0), oa++, V(ea.value).Qj(ec(fb.length - 1), Ta), (ea = R.next());
          while (!ea.done);
        });
  };
  return B;
});
Bg("Array.prototype.find", function (E) {
  return E
    ? E
    : function (B, Q) {
        a: {
          var V = this;
          V instanceof String && (V = String(V));
          for (var ia = V.length, Ja = 0; Ja < ia; Ja++) {
            var D = V[Ja];
            if (B.call(Q, D, Ja, V)) {
              B = D;
              break a;
            }
          }
          B = void 0;
        }
        return B;
      };
});
Bg("String.fromCodePoint", function (E) {
  return E
    ? E
    : function (B) {
        for (var Q = "", V = 0; V < arguments.length; V++) {
          var ia = Number(arguments[V]);
          if (0 > ia || 1114111 < ia || ia !== Math.floor(ia)) throw new RangeError("invalid_code_point " + ia);
          65535 >= ia
            ? (Q += String.fromCharCode(ia))
            : ((ia -= 65536),
              (Q += String.fromCharCode(((ia >>> 10) & 1023) | 55296)),
              (Q += String.fromCharCode((ia & 1023) | 56320)));
        }
        return Q;
      };
});
Bg("Symbol", function (E) {
  function B(Ja) {
    if (this instanceof B) throw new TypeError("Symbol is not a constructor");
    return new Q(V + (Ja || "") + "_" + ia++, Ja);
  }
  function Q(Ja, D) {
    this.Mv = Ja;
    Ag(this, "description", { configurable: !0, writable: !0, value: D });
  }
  if (E) return E;
  Q.prototype.toString = function () {
    return this.Mv;
  };
  var V = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    ia = 0;
  return B;
});
Bg("Symbol.iterator", function (E) {
  if (E) return E;
  E = Symbol("Symbol.iterator");
  for (
    var B =
        "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
      Q = 0;
    Q < B.length;
    Q++
  ) {
    var V = qg[B[Q]];
    "function" === typeof V &&
      "function" != typeof V.prototype[E] &&
      Ag(V.prototype, E, {
        configurable: !0,
        writable: !0,
        value: function () {
          return Cg(Ma(this));
        },
      });
  }
  return E;
});
function Cg(E) {
  E = { next: E };
  E[Symbol.iterator] = function () {
    return this;
  };
  return E;
}
function Ig(E, B) {
  E instanceof String && (E += "");
  var Q = 0,
    V = !1,
    ia = {
      next: function () {
        if (!V && Q < E.length) {
          var Ja = Q++;
          return { value: B(Ja, E[Ja]), done: !1 };
        }
        V = !0;
        return { done: !0, value: void 0 };
      },
    };
  ia[Symbol.iterator] = function () {
    return ia;
  };
  return ia;
}
Bg("Array.prototype.keys", function (E) {
  return E
    ? E
    : function () {
        return Ig(this, function (B) {
          return B;
        });
      };
});
Bg("Array.prototype.fill", function (E) {
  return E
    ? E
    : function (B, Q, V) {
        var ia = this.length || 0;
        0 > Q && (Q = Math.max(0, ia + Q));
        if (null == V || V > ia) V = ia;
        V = Number(V);
        0 > V && (V = Math.max(0, ia + V));
        for (Q = Number(Q || 0); Q < V; Q++) this[Q] = B;
        return this;
      };
});
function Jg(E) {
  return E ? E : Array.prototype.fill;
}
Bg("Int8Array.prototype.fill", Jg);
Bg("Uint8Array.prototype.fill", Jg);
Bg("Uint8ClampedArray.prototype.fill", Jg);
Bg("Int16Array.prototype.fill", Jg);
Bg("Uint16Array.prototype.fill", Jg);
Bg("Int32Array.prototype.fill", Jg);
Bg("Uint32Array.prototype.fill", Jg);
Bg("Float32Array.prototype.fill", Jg);
Bg("Float64Array.prototype.fill", Jg);
Bg("String.prototype.repeat", function (E) {
  return E
    ? E
    : function (B) {
        if (null == this)
          throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");
        var Q = this + "";
        if (0 > B || 1342177279 < B) throw new RangeError("Invalid count value");
        B |= 0;
        for (var V = ""; B; ) if ((B & 1 && (V += Q), (B >>>= 1))) Q += Q;
        return V;
      };
});
Bg("Array.prototype.values", function (E) {
  return E
    ? E
    : function () {
        return Ig(this, function (B, Q) {
          return Q;
        });
      };
});
(function (E, B) {
  function Q(a) {
    this.json = a;
  }
  function V(a) {
    this.Zb = [];
    this.at = [];
    try {
      if (a instanceof xa) this.cB(a);
      else throw 29;
      this.Gg.lineHeight < this.info.size && (this.Gg.lineHeight = this.info.size);
    } catch (b) {
      throw (Ka.Jm(b), 30);
    }
  }
  function ia() {
    this.advance = 0;
    this.Pk = new Mc(1024);
    this.padding = Array(4);
    for (var a = 0; 4 > a; ) {
      var b = a++;
      this.padding[b] = 0;
    }
  }
  function Ja() {
    this.x = this.y = this.w = this.P = this.offsetX = this.offsetY = this.Fj = 0;
    this.code = -1;
  }
  function D(a) {
    this.src = a;
  }
  function R() {}
  function ea() {
    this.Rh = !1;
    var a = new y();
    this.hf = a;
    this.O = a = new y();
    this.La = a = new Nc();
  }
  function Da() {
    this.Wd = null;
    this.frames = [];
    this.scale = 1;
  }
  function Ta(a, b) {
    this.id = b.id;
    this.name = b.name;
    var c = b.La;
    a = c.x;
    var d = c.y,
      e = c.width;
    c = c.height;
    var f = new Nc();
    f.x = a;
    f.y = d;
    f.width = e;
    f.height = c;
    this.frame = f;
    (this.Rh = b.Rh)
      ? ((f = b.hf),
        (a = f.x),
        (d = f.y),
        (e = f = new y()),
        (e.x = a),
        (e.y = d),
        (this.hf = e),
        (f = b.O),
        (a = f.x),
        (d = f.y))
      : ((e = f = new y()), (e.x = 0), (e.y = 0), (this.hf = e), (a = b.La.width), (d = b.La.height));
    e = f = new y();
    e.x = a;
    e.y = d;
    this.O = e;
  }
  function ec(a, b) {
    this.ln = new Db();
    this.ua = a;
    this.Wd = b.Wd;
    this.dl = b.frames.length;
    this.md = new Z(this.dl);
    a = 0;
    for (var c = b.frames; a < c.length; ) {
      var d = c[a];
      ++a;
      this.md.add(d.id);
    }
    this.md.sort(function (e, f) {
      return e - f;
    }, !0);
    a = this.md;
    4096 < a.i[a.l - 1] && (this.Kf = new Vd(z.wo(this.dl)));
    a = this.md;
    a = z.min(4096, a.i[a.l - 1]) + 1;
    this.frames = new Z().U(a, null);
    a = 0;
    for (c = b.frames; a < c.length; )
      (b = c[a]),
        ++a,
        (d = new Ta(this, b)),
        4096 >= d.id && (this.frames.i[d.id] = d),
        null != this.Kf && this.Kf.set(d.id, d),
        (this.ln.P[b.name] = d);
  }
  function fb(a) {
    this.uh = 0;
    this.F = a;
  }
  function oa() {}
  function dc() {
    this.Sj = new Z(32);
    this.qf = new Z(32);
  }
  function rc() {
    this.ha = new ca();
    this.overflow = !1;
    this.ar = new Z(256);
    this.Sj = new Z(64);
  }
  function of() {
    this.Hx = !1;
    this.Pk = !0;
    this.mD = this.$q = 0;
    this.align = -1;
    this.width = this.height = 100;
    this.size = 10;
    this.scale = 1;
    this.text = "";
  }
  function Wd() {}
  function Xd(a) {
    this.Ek = 0;
    sc.call(this, a);
  }
  function La(a, b) {
    this.Wl = this.Jn = !1;
    this.Ec = !0;
    var c = new gb("SpriteText");
    c.flags |= 2048;
    pa.call(this, c, La.TYPE);
    this.Vl = new dc();
    this.sb = new of();
    this.ed = new rc();
    null != a && a.appendChild(this);
    null != b && (this.cf(b), (this.sb.size = this.$d.xu));
    La.count++;
  }
  function Sb(a) {
    this.repeat = -1;
    this.Ci = 0;
    this.controller = null;
    this.length = -1;
    this.F = a;
  }
  function tc() {
    Oc.call(this, tc.TYPE);
  }
  function ma(a, b, c) {
    this.fp = -1;
    pa.call(this, new gb(a), ma.TYPE);
    this.flags |= 1024;
    null != b && b.appendChild(this);
    if (null != c) for (a = 0; a < c.length; ) (b = c[a]), ++a, this.appendChild(b);
    ma.count++;
  }
  function pf(a) {
    this.F = a;
  }
  function W(a, b, c) {
    var d = new y();
    d.x = 0;
    d.y = 0;
    this.O = d;
    this.Jh = null;
    this.bi = -1;
    pa.call(this, (this.Gb = new sc()), W.TYPE);
    null != a && a.appendChild(this);
    null != b && this.cf(b);
    null != c && this.xc(c);
    W.count++;
  }
  function pa(a, b) {
    this.wg = this.qm = null;
    this.rm = !0;
    this.Ua = 1;
    this.Ib = this.Jb = this.nf = this.pf = this.jc = 0;
    this.Ja = this.Sb = 1;
    this.ra = this.ma = 0;
    this.flags = 96;
    this.node = a;
    this.node.client = this;
    this.type = b;
    pa.count++;
  }
  function Eb() {
    this.m = 15;
    var a = new y();
    this.scale = a;
    this.translate = a = new y();
    this.da = a = new vd();
    this.Oc();
  }
  function Yd() {}
  function Ua() {}
  function sc(a, b) {
    Fb.call(this, a, b);
    this.type = 1;
  }
  function Fb(a, b) {
    this.Mh = null;
    this.flags = 512;
    Ea.call(this, a, b);
    this.Pe = this.lr(b);
    this.Tp();
    this.Mh = Array(4);
    Fb.count++;
  }
  function qf() {
    this.data = [];
    this.count = 0;
  }
  function gb(a, b) {
    this.bh = 0;
    this.V = null;
    this.flags = 256;
    Ea.call(this, a, b);
    gb.count++;
  }
  function Ea(a, b) {
    this.client = null;
    this.I = new Eb();
    this.local = new Eb();
    Pc.call(this);
    this.name = a;
    this.flags |= 232;
    this.key = uc.next();
    this.ye = this.lr(b);
    Ea.count++;
  }
  function hb() {}
  function Zd(a) {
    this.state = a;
  }
  function rf(a) {
    this.yb = new Z();
    this.stack = new Tb();
    this.cu = 4;
    var b = new ca();
    this.ha = b;
    this.Xi = b = Array(4);
    this.th = b = Array(4);
    this.uj = new Z(1024);
    this.K = a;
    this.uj.Mc = !0;
    for (a = 0; 4 > a; ) {
      var c = a++;
      this.th[c] = new Qc();
      b = this.Xi;
      var d = new y();
      d.x = 0;
      d.y = 0;
      d.z = 0;
      b[c] = d;
    }
  }
  function $d() {
    this.Rm = new sf();
    Za.call(this, 1);
  }
  function sf() {
    var a = new Ub();
    a.r = 0;
    a.Fa = 0;
    a.b = 0;
    a.a = 0;
    this.offset = a;
    a = new Ub();
    a.r = 1;
    a.Fa = 1;
    a.b = 1;
    a.a = 1;
    this.rc = a;
  }
  function ae() {
    this.ha = null;
    Za.call(this, 3);
  }
  function be() {
    Gb.call(this, 1);
  }
  function lb() {
    this.Zz = U.Rb();
    this.Yn = U.Rb();
    this.Zn = U.Rb();
    this.FD = U.Rb();
    this.rB = U.Rb();
    var a = lb.mq,
      b = lb.lq,
      c = new y();
    c.x = a;
    c.y = b;
    this.size = c;
    this.Th = 1;
    this.ra = this.ma = this.jc = 0;
    this.m = 7;
    this.flipY = !0;
    this.Yp = !1;
    this.Ll(-lb.nq / 2, lb.nq / 2);
  }
  function ce() {
    var a = new ca();
    a.s = a.u = Infinity;
    a.A = a.B = -Infinity;
    this.box = a;
    Gb.call(this, 2);
  }
  function Gb(a) {
    this.type = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    a.z = 0;
    this.G = a;
    this.ca = 0;
  }
  function wd(a) {
    Za.call(this, 0);
    this.alpha = a;
  }
  function Hb(a) {
    Za.call(this, 2);
    this.ym = a;
    this.Tc |= (1 << a.pa) << 4;
    if (5 == a.pa) {
      var b = a.jy;
      this.Tc |= (1 << a.src.pa) << 12;
      this.Tc |= (1 << b.pa) << 20;
    }
  }
  function Za(a) {
    this.slot = this.type = a;
    this.Tc = 1 << this.slot;
  }
  function Rc(a, b, c, d) {
    this.zp = !1;
    this.qh = this.rh = this.bm = this.bq = this.am = this.aq = 0;
    this.rl = 1;
    Fa.call(this, Rc.TYPE);
    this.kv = a;
    this.Lp = b;
    this.ua = c;
    this.jb = d;
  }
  function ib(a) {
    this.frame = -1;
    this.gh = this.hh = 0;
    this.yh = this.zh = 1;
    var b = new Nc();
    this.La = b;
    this.flags = 0;
    Fa.call(this, ib.TYPE);
    if (null != a) {
      this.active = a.active;
      b = this.La;
      var c = a.La;
      b.x = c.x;
      b.y = c.y;
      b.width = c.width;
      b.height = c.height;
      this.frame = a.frame;
      this.flags = a.flags;
      this.ua = a.ua;
      this.yh = a.yh;
      this.zh = a.zh;
      this.gh = a.gh;
      this.hh = a.hh;
    }
  }
  function Vb(a) {
    Fa.call(this, Vb.TYPE);
    null != a && ((this.active = a.active), (this.color = a.color));
  }
  function tf(a, b) {
    this.x = a;
    this.y = b;
    this.jv = this.code = 0;
    this.xm = -1;
  }
  function Sc(a, b, c) {
    null == c && (c = -1);
    null == b && (b = -1);
    this.fillColor = 0;
    this.zp = !1;
    Fa.call(this, Sc.TYPE);
    this.ua = a;
    this.$d = a.jb.Wd;
    this.ia = new vc(0 > b ? 10 : b, 0 > c ? 10 : c);
    this.ia.forEach(function (d, e, f) {
      return new tf(e, f);
    });
  }
  function Fa(a) {
    this.Tc = 0;
    this.active = !0;
    Tc.call(this);
    this.Tc = this.type = a;
  }
  function Wb() {
    qa.call(this, Wb.TYPE);
  }
  function xd() {
    this.bt = new uf();
    this.lastIndex = 0;
    qa.call(this, xd.TYPE);
  }
  function uf() {
    this.alpha = 1;
    this.rotation = this.wv = this.xv = 0;
    this.Ah = this.Nc = 1;
  }
  function Oc(a) {
    this.Bl = this.$k = this.Mi = 0;
    qa.call(this, a);
  }
  function qa(a) {
    this.ze = !1;
    this.dc = 0;
    this.Gp = 1;
    this.Gc = this.Md = this.Se = 0;
    this.type = a;
    this.repeat = 1;
    qa.kq++;
  }
  function Pc() {
    this.Wx = !0;
    this.controllers = null;
  }
  function vf(a, b) {
    this.value = a;
    this.qb = b;
  }
  function wf(a, b) {
    this.name = a;
    this.frames = b;
    this.oj = 0;
    this.og = b.length;
    a = 0;
    this.Sm = b[a++].qb;
    for (var c = b[a++].qb; a < this.og; )
      if (b[a++].qb != c) {
        this.Sm = 0;
        break;
      }
    this.Sc = Array(this.og + 1);
    this.values = Array(this.og);
    for (a = 0; a < this.og; ) (c = b[a]), (this.Sc[a] = this.oj), (this.values[a] = c.value), (this.oj += c.qb), ++a;
    this.Sc[a] = this.oj;
  }
  function de() {
    this.Jq = 2;
    this.Gq = !0;
    this.size = this.Gx = this.Fs = null;
    this.Kc = 0;
  }
  function ee(a, b, c) {
    this.Hb = null;
    vb.call(this, a, b, c);
  }
  function Uc() {
    this.tr = null;
    this.zd = new Z();
    this.Rq = [0, 1, 774, 775, 770, 771, 772, 773];
    this.Xu = this.zr = -1;
    va.call(this, "webgl");
    this.ku = Array(Fa.R);
    this.Ql = !1;
    this.np();
  }
  function fe(a) {
    this.size = 0;
    this.da = new Float32Array(16);
    this.K = a;
    this.U();
  }
  function ge(a) {
    this.K = a;
    this.U();
  }
  function he(a) {
    this.da = new Float32Array(16);
    this.K = a;
    this.U();
  }
  function gc() {}
  function yd() {
    this.stencil = !0;
    this.preserveDrawingBuffer = !1;
    this.premultipliedAlpha = !0;
    this.powerPreference = "default";
    this.antialias = this.depth = this.failIfMajorPerformanceCaveat = !0;
    this.alpha = this.desynchronized = !1;
  }
  function ie(a) {
    this.size = 0;
    this.da = new Float32Array(16);
    this.K = a;
    this.U();
  }
  function Ib() {}
  function Vc(a, b) {
    this.fq = this.Jk = !1;
    this.lo = [];
    this.nn = !1;
    var c = this;
    Xb.call(this);
    this.XA = a;
    null == b && (b = new de());
    b.Gq || this.gy();
    this.Nn = !!navigator.platform && /iPad|iPhone/.test(navigator.platform);
    !this.Nn &&
      this.dA() &&
      this.addListener(window.document, "fullscreenchange", function () {
        c.nn = document.nn;
        c.Go(c.nn);
      });
    this.addListener(window.document, "visibilitychange", function () {
      c.nl(!window.document.hidden);
    });
    this.visible = !window.document.hidden;
    this.Nn
      ? this.addListener(window, "orientationchange", function () {
          c.jl(c.fs());
          setInterval(function () {
            window.scrollTo(0, 1);
          }, 1);
        })
      : typeof window.onorientationchange &&
        (window.onorientationchange = function () {
          c.jl(c.fs());
        });
    this.Kc = 0 == b.Kc ? window.devicePixelRatio : b.Kc;
    a = b.Gx;
    if (null != a) {
      var d = window.document.getElementById(a);
      if (null != d && "CANVAS" == d.nodeName) {
        this.canvas = d;
        this.canvas.style.touchAction = "none";
        this.canvas.style.userSelect = "none";
        this.canvas.style.setProperty("-webkit-user-select", "none");
        this.Pu(b.Fs);
        var e = null;
        e = function () {
          null != c.canvas &&
            ((c.canvas.clientWidth == c.width && c.canvas.clientHeight == c.height) ||
              c.Zi(c.canvas.clientWidth, c.canvas.clientHeight),
            window.requestAnimationFrame(e));
        };
        window.requestAnimationFrame(e);
      }
    }
    null == this.canvas &&
      ((window.document.body.style.margin = "0px"),
      (window.document.body.style.padding = "0px"),
      (this.canvas = window.document.createElement("canvas")),
      this.Pu(b.Fs),
      (this.canvas.id = null != a ? a : "win" + Vc.HA++),
      (this.canvas.style.touchAction = "none"),
      (this.canvas.style.position = "absolute"),
      (this.canvas.style.display = "block"),
      (this.canvas.style.userSelect = "none"),
      this.canvas.style.setProperty("-webkit-user-select", "none"),
      window.document.body.appendChild(this.canvas),
      this.canvas.focus(),
      null != b.size
        ? ((this.Iy = !0),
          setTimeout(function () {
            c.Zi(b.size.x | 0, b.size.y | 0);
          }, 0))
        : ((window.document.body.style.margin = "0"),
          (this.canvas.style.width = "100%"),
          (this.canvas.style.height = "100%"),
          setTimeout(L(this, this.iB), 0)));
  }
  function Xb() {
    this.visible = !0;
    this.Ht = function () {};
    this.jl = function () {};
    this.Go = function () {};
    this.nl = function () {};
    this.Mb = function () {};
    Yb.call(this);
  }
  function jb(a, b, c) {
    vb.call(this, a, b, c);
  }
  function vb(a, b, c) {
    this.xt = 0;
    this.jh = [];
    this.parent = null;
    this.children = [];
    this.scale = 1;
    this.hc = this.cc = 0;
    this.group = -1;
    Yb.call(this);
    this.K = a;
    this.flags = b;
    this.name = c;
  }
  function Yb() {
    var a = new Nc();
    this.Pd = a;
    a = new ca();
    a.s = 0;
    a.u = 0;
    a.A = 1;
    a.B = 1;
    this.viewport = a;
    this.Kc = 1;
    this.width = this.height = this.Mj = this.Yh = 0;
    a = new Ub();
    a.r = 1;
    a.Fa = 1;
    a.b = 1;
    a.a = 1;
    this.color = a;
  }
  function $a() {
    this.sr = new kb();
    this.ay = new kb();
    this.fh = new kb();
    this.kp = U.Rb();
    this.oD = "rgba(0,0,0,0)";
    this.Pl = 0;
    this.dD = new Z(32);
    this.cD = new Z(32);
    this.Ox = ["none", "source-over", "multiply", "lighter", "screen", null];
    this.$m = null;
    this.ho = -1;
    this.ak = $a.Aj;
    this.io = null;
    this.Ap = !1;
    va.call(this, "canvas");
    this.Ql = !0;
    this.ai = window.document.createElement("canvas").getContext("2d", null);
    this.np();
  }
  function va(a) {
    this.Bt = 1e3;
    this.mg = new kb();
    this.Ql = !1;
    this.wr = 0;
    this.Im = !0;
    this.Jy = this.Kh = !1;
    this.lj = this.Zm = !0;
    this.Mo = function () {};
    this.Ig = null;
    this.ee = 1;
    this.$j = null;
    var b = U.Rb();
    U.Oc(b);
    this.xf = b;
    b = U.Rb();
    U.Oc(b);
    this.ck = b;
    b = U.Rb();
    U.Oc(b);
    this.ur = b;
    b = U.Rb();
    U.Oc(b);
    this.Fd = b;
    this.Nb = null;
    this.name = a;
    this.Ym = new rf(this);
    this.zg = 15;
    this.cC(new lb());
  }
  function Ha(a) {
    this.lC = function (b, c) {
      c = H.T(c, "pivot");
      null != c && (0 < (c.f & 1) && b.vp(H.T(c, "x")), 0 < (c.f & 2) && b.Nl(H.T(c, "y")));
    };
    this.WC = new Db();
    this.root = new ma();
    this.Rk = a;
  }
  function xf() {}
  function je(a) {
    this.name = a;
    this.storage = rg.dz();
  }
  function ke() {}
  function le(a) {
    this.Qe = a;
  }
  function sg() {}
  function ab() {
    this.bu = [];
    this.loaded = !1;
    this.Nd = function () {};
    this.Eo = function () {};
  }
  function Jb(a) {
    this.state = 0;
    x.call(this);
    this.qj = a;
    this.F = new W(a.ac(), ya, "sparkle");
    this.F.ab();
    this.F.Qa();
    this.F.vz().add();
    this.F.N(!1);
    this.F.aa(0);
    this.offset = bb.instance.re(0, 3);
  }
  function yf(a, b) {
    this.group = new ma();
    this.data = [];
    this.Ob = [];
    this.a = a;
    this.b = b;
    if (!ta.instance.Jf(7)) {
      var c = window.document.createElement("canvas");
      c.width = 128;
      c.height = 128;
      var d = c.getContext("2d", null),
        e = d.createLinearGradient(0, 0, 0, 128);
      e.addColorStop(0, "#570096");
      e.addColorStop(1, "#FFFFFF");
      d.fillStyle = e;
      d.fillRect(0, 0, 128, 128);
      d.fill();
      p.setData(7, c);
      a.eb().createTexture(7);
    }
    ta.instance.Je.appendChild(this.group.node);
    this.size = a.eb().si();
    a.eb().createTexture(ya);
    this.zf = new W(this.group, 7);
    this.zf.DC(this.size.x);
    this.zf.BC(this.size.y);
    this.zf.aa(0);
    b.canvas.aa(0);
    for (a = 0; 40 > a; )
      a++,
        (b = new W(this.group, ya, "bubbles/air")),
        b.ab(),
        b.Qa(),
        b.ea(Math.random() * this.size.x),
        b.fa(this.size.y + Math.random() * this.size.y),
        this.Ob.push(b),
        (c = Math.min(this.size.x, this.size.y) / b.O.x / 4),
        (d = Math.random()),
        0.33 > d ? (c *= 0.33) : 0.66 > d && (c *= 0.66),
        this.data.push(b.ra),
        this.data.push(b.ma),
        b.na(c),
        this.data.push(Math.random());
    C.play(C.qw);
  }
  function Wc() {
    this.state = 0;
    this.Nc = 8;
    this.offset = 0;
    x.call(this);
    Wc.instance = this;
    if (A.Wg() || A.yp()) this.hidden = !0;
    else {
      if (!ta.instance.Jf(4)) {
        for (
          var a = window.document.createElement("canvas"),
            b = (a.width = M.jr),
            c = (a.height = M.vf),
            d = a.getContext("2d", null),
            e = ["#20BDFF", "#5433FF", "#A5FECB"],
            f = e.slice(),
            g = e.length - 2;
          -1 < g;

        )
          f.push(e[g--]);
        e = d.createLinearGradient(0, 0, 0, c);
        for (var h = 0, k = f.length; h < k; ) (g = h++), e.addColorStop(g / (f.length - 1), f[g]);
        d.fillStyle = e;
        d.fillRect(0, 0, b, c);
        d.fill();
        p.setData(4, a);
        ta.instance.createTexture(4);
        this.offset = -Math.random() * M.vf * this.Nc;
      }
      this.group = new ma();
      this.a = new W(null, 4);
      this.b = new W(null, 4);
      this.b.fa(M.vf * this.Nc);
      this.a.Pc(this.Nc);
      this.b.Pc(this.Nc);
      this.group.appendChild(this.a);
      this.group.appendChild(this.b);
      ta.instance.Ad.appendChild(this.group.node);
      this.show();
      this.Kb();
    }
  }
  function zd() {
    var a = "PauseOverlay";
    A.In() && (a = "PauseNoAudioOverlay");
    S.call(this, a);
  }
  function Ad() {
    S.call(this);
  }
  function me() {
    mb.call(this);
  }
  function mb() {
    this.loaded = !1;
    za.call(this);
  }
  function zf() {
    this.vm = this.Gj = 0;
    this.Du = this.ip = 1;
    this.xb = new W(null, ya);
    this.Eb = new W(null, ya);
  }
  function nb(a) {
    function b(g, h) {
      g.xc("bubbles/bubble" + h);
      g.ab();
      g.Qa();
      f.group.appendChild(g);
    }
    this.stop = this.$t = this.progress = this.yl = 0;
    for (var c = [], d = 0; 3 > d; ) {
      var e = d++;
      c.push(new zf());
    }
    this.fc = c;
    this.state = 1;
    this.sh = 0;
    var f = this;
    x.call(this);
    this.group = new ma();
    c = [];
    for (d = 1; 7 > d; ) (e = d++), c.push(e);
    d = c;
    Bd.av(d);
    for (c = 0; 3 > c; ) (e = c++), b(this.fc[e].xb, 7), b(this.fc[e].Eb, d[e]), this.fc[e].Eb.aa(0);
    c = 1.2 * this.fc[0].xb.O.x;
    this.fc[0].xb.ea(-c);
    this.fc[0].Eb.ea(-c);
    this.fc[2].xb.ea(c);
    this.fc[2].Eb.ea(c);
    if (a) {
      a = this.group.mc();
      this.qe = new ma();
      for (c = 0; 10 > c; )
        (e = c++),
          (d = new W(this.qe, ya, "bubbles/bubble7")),
          d.ea(d.mc() * e),
          d.ea(d.ra - (5 * d.mc() - d.mc() / 2)),
          d.ab(),
          d.Qa(),
          d.na(0.8),
          d.aa(0.25);
      this.qe.fa(this.fc[0].xb.Xc());
      this.group.appendChild(this.qe);
      this.qe.na(a / this.qe.mc());
    }
  }
  function Xc() {
    S.call(this, "HomeScreen");
  }
  function Yc() {
    S.call(this);
  }
  function ne() {
    this.color = 1;
    this.x = this.eq = 0;
    x.call(this);
  }
  function oe(a) {
    x.call(this);
    this.xb = new W(null, ya, "bubbles/bubble" + a);
    this.Eb = new W(null, ya, "bubbles/air");
    this.Eb.ab();
    this.Eb.Qa();
    this.scale = 0.1 + 0.4 * Math.random();
    var b = ta.instance.window;
    a = b.width * Math.random();
    b = b.height + this.xb.Xc();
    var c = new y();
    c.x = a;
    c.y = b;
    this.Na = c;
    this.x = this.Na.x;
    this.xb.aa(2 * this.scale);
    this.xb.N(!1);
    this.xb.ab();
    this.xb.Qa();
    this.xb.na(this.scale);
    this.Eb.na(this.scale + 0.1);
    this.Eb.N(!1);
  }
  function Zc() {
    this.wait = 1;
    S.call(this, "GameOverScreen");
  }
  function S(a) {
    za.call(this);
    this.Rk = a;
  }
  function za() {
    this.kg = 0;
    this.Xe = Ba.Rb();
    this.Qh = this.xd = this.au = 0;
    x.call(this);
    this.bb(0);
  }
  function pe(a, b, c) {
    var d = new y();
    this.yb = d;
    this.alpha = this.Jg = 0;
    this.ul = d = new y();
    this.pe = d = new y();
    this.state = 0;
    this.Al = !1;
    x.call(this);
    this.cm = a;
    this.dm = b;
    this.y = c;
    this.Up(this.pe);
    this.Up(this.ul);
    this.F = new W(this.H().zb(6), ya, "warning");
    this.F.ab();
    this.F.Qa();
    this.F.N(!1);
  }
  function qe() {
    this.Qf = new Z();
    x.call(this);
  }
  function re() {
    x.call(this);
  }
  function $c(a) {
    this.Kr = tg();
    this.dh = this.Dj = this.animation = 0;
    var b = new y();
    this.Lm = b;
    this.group = new ma();
    x.call(this);
    this.length = a;
    a = [];
    var c = 0;
    for (b = this.length; c < b; ) c++, a.push([new W(this.group, ug, "0"), new W(this.group, wc, "0")]);
    this.Zb = a;
    a = 0;
    for (c = this.length; a < c; ) {
      var d = a++;
      b = this.Zb[d][0].O;
      b = b.x;
      var e = this.Zb[d];
      e[0].ea(b * d);
      e[1].ea(b * d);
      e[1].aa(0);
      e[1].N(!1);
      e[0].Qa();
      e[1].Qa();
    }
    b = this.Zb[0][0].O;
    a = b.x;
    c = b.y;
    b = new y();
    b.x = a;
    b.y = c;
    this.Lm = b;
  }
  function se() {
    this.visible = !1;
    this.alpha = this.offset = 0;
    x.call(this);
  }
  function Cd() {
    this.gi = !0;
    x.call(this);
    var a = new ma("sound", this.H().zb(5));
    new W(a, ya, "sound");
    a = new Qa(a);
    a.animate = !1;
    this.button = new ob(a, "sound");
    this.button.df(!1);
    this.button.N(!1);
    this.button.sp(da.zc);
    this.Z(null, this.button);
  }
  function te() {
    this.nd = hc.nd();
    x.call(this);
  }
  function ue() {
    this.wp = !1;
    x.call(this);
  }
  function ve() {
    this.Gm = this.Ee = this.Lj = 0;
    x.call(this);
  }
  function we() {
    x.call(this);
  }
  function xe() {
    this.Ob = [];
    x.call(this);
  }
  function ye() {
    this.state = 0;
    x.call(this);
  }
  function ze() {
    this.sh = this.ratio = this.we = 0;
    x.call(this);
  }
  function Dd() {
    this.gi = !0;
    x.call(this);
    var a = new ma("pause", this.H().zb(5));
    new W(a, ya, "pause");
    a = new Qa(a);
    a.animate = !1;
    this.button = new ob(a, "pause");
    this.button.df(!1);
    this.button.N(!1);
    this.button.ue.dd.aa(0);
    this.Z(null, this.button);
  }
  function Ae() {
    x.call(this);
  }
  function Be() {
    this.state = 0;
    x.call(this);
  }
  function Ce() {
    this.sl = !1;
    this.nd = hc.nd();
    x.call(this);
    ua.ob().Ka(L(this, this.sc));
  }
  function De(a, b, c) {
    wb.call(this, a, b, c);
  }
  function Ee(a, b, c) {
    wb.call(this, a, b, c);
  }
  function wb(a, b, c) {
    x.call(this);
    this.G = a;
    this.ca = b;
    this.value = c;
    xc.count++;
  }
  function xc() {
    x.call(this);
  }
  function Fe() {
    x.call(this);
  }
  function Ge() {
    this.state = 0;
    yc.call(this, "speed");
  }
  function yc(a) {
    x.call(this);
    this.frame = a;
  }
  function He() {
    this.wait = !1;
    x.call(this);
  }
  function Ie() {
    this.zs = !1;
    this.state = 0;
    x.call(this);
  }
  function Je() {
    this.visible = !1;
    this.nd = hc.nd();
    this.Jg = this.jn = this.alpha = 0;
    var a = new y();
    a.x = -100;
    a.y = -100;
    this.Tb = a;
    x.call(this);
  }
  function Af(a, b) {
    this.ja = a;
    this.depth = b;
  }
  function Bf() {
    this.list = new Z();
    this.filter = function () {
      return !0;
    };
  }
  function Cf() {
    this.Kh = !1;
  }
  function ad() {
    this.Xl = new Zb();
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.Kp = a;
    K.call(this, ad.TYPE);
  }
  function Ed() {
    K.call(this, Ed.TYPE);
  }
  function Kb() {
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.anchor = a;
    K.call(this, Kb.TYPE);
  }
  function bd() {
    K.call(this, bd.TYPE);
  }
  function cb() {
    this.scale = 1;
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.ae = a;
    K.call(this, cb.TYPE);
  }
  function Lb() {
    K.call(this, Lb.TYPE);
  }
  function ja() {}
  function Df(a) {
    this.zoom = 0;
    var b = new y();
    b.x = 0;
    b.y = 0;
    this.mk = b;
    b = new y();
    b.x = 0;
    b.y = 0;
    b = new y();
    b.x = 0;
    b.y = 0;
    this.Xd = b;
    b = new ca();
    b.s = 0;
    b.u = 0;
    b.A = 640;
    b.B = 480;
    this.ha = b;
    this.I = a;
    this.Hl(0.5, 0.5);
  }
  function X() {}
  function Ef(a) {
    this.fv = new Ff();
    this.hv = new Gf();
    this.No = [];
    this.oh = new Z();
    var b = new y();
    b.x = 0;
    b.y = 0;
    this.pl = b;
    b = new y();
    b.x = 0;
    b.y = 0;
    this.ql = b;
    this.ag = null;
    this.Ks = !1;
    this.Tn = !0;
    this.Is = 1;
    this.Sg = new Zb();
    this.I = a;
    this.oh.Mc = !0;
  }
  function Hf(a) {
    this.yi = new If();
    var b = new ca();
    this.zl = b;
    b = new cd();
    b.G.x = 0;
    b.G.y = 0;
    b.ca = 1;
    this.bD = b;
    this.Xl = new Zb();
    this.Kp = b = new y();
    this.Vb = 0;
    this.I = a;
    this.result = new Jf();
    this.result.hi = new Z();
    this.result.fi = null;
    this.result.Dg = new Z();
    b = new y();
    b.x = 0;
    b.y = 0;
    this.result.Uo = b;
    b = new y();
    b.x = 0;
    b.y = 0;
    this.result.To = b;
    this.result.So = -1;
    this.test = new Ef(a);
  }
  function Jf() {}
  function vg() {}
  function Kf(a) {
    this.Ss = new Lf();
    this.Te = new Z(4);
    this.tc = new Z(4);
    this.cx = 15;
    var b = this;
    this.I = a;
    this.tc.U(4, null);
    var c = this.tc,
      d = c.i,
      e = 0;
    for (c = c.l; e < c; ) {
      var f = e++;
      d[f] = new Qc();
    }
    c = this.tc;
    d = new Qc();
    e = 1;
    f = 0;
    var g = new y(),
      h = g;
    h.x = e;
    h.y = f;
    f = e = 0;
    g = new y();
    g.x = e;
    g.y = f;
    d = d.bf(h, g);
    c.i[3] = d;
    c = this.tc;
    d = new Qc();
    e = -1;
    f = 0;
    h = g = new y();
    h.x = e;
    h.y = f;
    e = a.zk();
    f = 0;
    g = new y();
    g.x = e;
    g.y = f;
    d = d.bf(h, g);
    c.i[1] = d;
    this.tc.Mc = !0;
    this.Te.U(4, null);
    this.Te.i[3] = function (k) {
      var l = 1,
        m = 0,
        n = new y(),
        q = n;
      q.x = l;
      q.y = m;
      m = l = 0;
      n = new y();
      n.x = l;
      n.y = m;
      k.bf(q, n);
    };
    this.Te.i[1] = function (k) {
      var l = -1,
        m = 0,
        n = new y(),
        q = n;
      q.x = l;
      q.y = m;
      l = a.zk();
      m = 0;
      n = new y();
      n.x = l;
      n.y = m;
      k.bf(q, n);
    };
    this.Te.i[0] = function () {
      var k = a.viewport,
        l = k.ha,
        m = a.En();
      a.Ok() || (m = k.Np(l.u));
      k = b.tc.i[0];
      l = 0;
      var n = 1,
        q = new y(),
        r = q;
      r.x = l;
      r.y = n;
      l = 0;
      n = m;
      m = q = new y();
      m.x = l;
      m.y = n;
      k.bf(r, m);
    };
    this.Te.i[2] = function () {
      var k = a.viewport,
        l = k.Np(k.ha.B);
      k = b.tc.i[2];
      var m = 0,
        n = -1,
        q = new y(),
        r = q;
      r.x = m;
      r.y = n;
      m = 0;
      n = l;
      l = q = new y();
      l.x = m;
      l.y = n;
      k.bf(r, l);
    };
  }
  function Ke(a) {
    this.Xp = this.size = 0;
    this.Qd = new Z(32);
    this.Or = a;
    this.Qd.Mc = !0;
  }
  function Mf(a) {
    this.I = a;
    this.vi = new Ke(function () {
      var b = new Z(32);
      b.Mc = !0;
      return b;
    });
    this.ui = new Ke(function () {
      var b = new Z(4);
      b.Mc = !0;
      return b;
    });
    this.set = new Mc(64, 64);
  }
  function Na(a, b, c, d) {
    null == d && (d = 1);
    null == c && (c = 1);
    this.timeStamp = 1;
    this.ia = new vc(a, b);
    this.ia.Ju(0);
    this.gg = c;
    this.td = d;
    this.marks = new vc(a, b);
    this.marks.Ju(0);
    this.Qx();
  }
  function Gf() {
    this.Re = NaN;
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.bg = a;
    this.Hk = 3.4e38;
    this.Qn = NaN;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Pn = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Nf = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Of = a;
  }
  function If() {
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.bg = a;
    this.Gz = a = Array(256);
    this.Hk = 3.4e38;
    this.Hs = a = new ca();
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Nf = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Of = a;
    for (var b = 0; 256 > b; ) {
      var c = b++;
      a = this.Gz;
      var d = new ca();
      a[c] = d;
    }
  }
  function Lf() {
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.tl = a;
    this.t = Infinity;
  }
  function Nf(a, b, c) {
    this.ia = a;
    this.cols = b;
    this.list = Array(6);
    this.TB = c;
  }
  function Of(a) {
    this.map = new kb();
    this.I = a;
  }
  function Pf(a) {
    this.vy = !1;
    this.I = a;
  }
  function dd() {}
  function Ff() {
    this.Sn = this.Re = NaN;
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.Rn = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Gk = a;
    this.Js = NaN;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Ik = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Fk = a;
  }
  function Qf() {
    this.Cg = this.loaded = !1;
    this.$h = !0;
    this.yc = this.connected = this.Ln = this.de = this.Hc = this.jd = this.fixed = !1;
  }
  function xb(a) {
    this.Iq = this.rotation = 0;
    this.ny = this.Kk = 1;
    this.Uc = this.ef = this.Qg = 0;
    this.scale = new Fd(1);
    this.ca = 1;
    var b = new y();
    b.x = 0;
    b.y = 0;
    this.force = b;
    b = new y();
    b.x = 0;
    b.y = 0;
    this.Ga = b;
    b = new y();
    b.x = 0;
    b.y = 0;
    this.G = b;
    this.ya = null;
    this.f = new Qf();
    this.mb = this.Ta = -1;
    this.code = 0;
    this.I = a;
    xb.count++;
    this.key = uc.next();
    this.ca = 1 - X.zx / 2;
    this.actions = new Z(4);
    this.actions.Mc = !0;
    this.Ya(new bd());
  }
  function Le() {
    this.Vj = !0;
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.Ch = a;
    this.Ip = new Z();
    this.Jp = new Z();
    this.la = new Zb();
    this.aD = 0;
    this.ss = new Cf();
    this.On = new Bf();
    this.If = new Z(1024);
    this.Ba = new ed();
    this.qc = this.pc = 0;
    this.cols = -1;
    this.sf = new Z(4);
    this.Yf = 0;
    this.proxy = a = new ca();
    this.time = 0;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.la.origin = a;
    a = new y();
    a.x = 0;
    a.y = -1;
    this.la.direction = a;
    this.Bb = new Kf(this);
    this.viewport = new Df(this);
    this.Bb.ve();
    this.Ki = new Mf(this);
    this.Ye = new Hf(this);
    this.Qi = new Pf(this);
  }
  function Me() {
    x.call(this);
  }
  function yb(a) {
    this.jo = [];
    this.node = new gb();
    yb.instance = this;
    $b.call(this);
    this.Gu = a;
    this.xe = a.eb().si();
  }
  function Ne() {}
  function C() {}
  function Rf() {
    this.target = null;
    this.Ir = !1;
    this.Oi = 0;
    this.yf = new Z();
    this.We = new Z();
    this.kA = [];
  }
  function Gd() {
    this.Ws = function (a) {
      return 1 <= a.code ? 7 >= a.code : !1;
    };
    this.nt = function (a, b) {
      return a.code != b.code || a.f.de ? !1 : !b.f.de;
    };
    this.Yk = new Z(256);
    x.call(this);
  }
  function da() {}
  function Oe() {
    this.Oj = 0;
    this.Sf = -1;
    x.call(this);
    for (var a = [], b = 0, c = M.zo + 1; b < c; ) b++, a.push(-1);
    this.Qk = a;
  }
  function Sf() {
    this.Td = { type: "r", vt: 0, rt: 0, ut: 0, pt: 0 };
  }
  function zc(a) {
    this.bd = new Hd(a);
    this.Di = this.xB();
    zc.bw = this.Di[this.Di.length - 1].Xf;
    zc.cw = this.Di[this.Di.length - 1].level;
    a = [];
    for (var b = 0, c = M.zo; b < c; ) {
      var d = b++;
      a.push(d + 1);
    }
    this.jf = a;
    0.5 > this.bd.Cf() ? Y.remove(this.jf, 1) : Y.remove(this.jf, 5);
    d = this.jf;
    a = [];
    b = 0;
    for (c = this.jf.length; b < c; ) b++, a.push(this.bd.Cf());
    Bd.av(d, a);
    this.jf.unshift(7);
    -1 != ka.xl && Y.remove(this.jf, ka.xl) && this.jf.push(ka.xl);
    this.Fg = [];
  }
  function Tf() {}
  function Pe() {
    this.kc = [];
    this.ha = [];
    this.mode = this.Nj = 0;
    x.call(this);
    for (var a = 0, b = 5; a < b; ) {
      var c = a++,
        d = this.ha,
        e = new ca();
      e.s = 0;
      e.u = 0;
      e.A = 0;
      e.B = 0;
      d[c] = e;
    }
    a = 0;
    for (b = 5; a < b; ) (c = a++), (d = this.kc), (e = new y()), (e.x = 0), (e.y = 0), (d[c] = e);
  }
  function Uf(a, b) {
    var c = a.s,
      d = a.u,
      e = a.A,
      f = a.B;
    a = new ca();
    a.s = c;
    a.u = d;
    a.A = e;
    a.B = f;
    this.ha = a;
    c = b.x;
    b = b.y;
    d = a = new y();
    d.x = c;
    d.y = b;
    this.align = d;
  }
  function Qe(a) {
    this.dv = NaN;
    this.$o = this.Dt = this.cl = this.Oo = 0;
    this.Wn = !1;
    this.dk = 0;
    this.Tr = ka.level;
    this.bn = this.Dm = this.Ul = !1;
    this.ci = 0;
    this.an = !0;
    this.level = null;
    this.state = 0;
    x.call(this);
    this.jg = ka.jg;
    this.Ro = new Oe();
    this.bd = new Hd(a);
    Id.rC(((Mb = this.bd), L(Mb, Mb.Cf)));
    this.PC = new Gd();
    this.Z(null, this.PC);
    this.rk = new zc(a);
    this.H().Ka(this);
  }
  function ka() {}
  function M() {}
  function Qa(a) {
    this.Yb = this.y = this.frame = this.state = 0;
    this.animate = !0;
    x.call(this);
    this.dd = a;
    if (null == Qa.Bi) {
      Qa.Bi = new Db();
      for (var b = [], c = new pb(qb.decode(Qa.IDLE, !1)), d = 0, e = c.gf; d < e; ) b.push(c.pu() / 100), ++d;
      Qa.Bi.P.idle = b;
      b = [];
      c = new pb(qb.decode(Qa.iw, !1));
      d = 0;
      for (e = c.gf; d < e; ) b.push(c.uc() / 100), (d += 2);
      Qa.Bi.P.pop = b;
    }
    this.data = Qa.Bi.P.idle;
    this.ja = new W(a, ya, "bubbles/air");
    this.ja.Qa();
    this.icon = a.node.V.client;
    this.icon.Qa();
    this.icon.ab();
    b = this.ja.O.x / 2;
    c = this.ja.O.y / 2;
    d = new y();
    d.x = b;
    d.y = c;
    this.Dk = d;
    this.icon.ea(this.Dk.x);
    this.icon.fa(this.Dk.y);
    this.Lf = 0.75;
    this.icon.te(this.Lf);
    this.icon.Pc(this.Lf);
    a.Qa();
  }
  function ob(a, b) {
    this.flags = 0;
    this.mj = this.hx = !1;
    this.lg = 0;
    x.call(this);
    this.name = b;
    this.ue = a;
    this.Z(null, a);
    this.flags |= 8;
    ua.ob().Ka(L(this, this.sc));
  }
  function Ac() {
    this.xp = !1;
    Ia.call(this);
  }
  function Ia() {
    this.du = 1;
    x.call(this);
  }
  function Bc(a) {
    this.visible = !0;
    this.vb = this.Cd = 0;
    this.alpha = 1;
    this.scale = new Fd(1);
    this.Eh = new Fd(1);
    var b = new y();
    b.x = 0;
    b.y = 0;
    this.Dh = b;
    b = new y();
    b.x = 0;
    b.y = 0;
    this.vc = b;
    x.call(this);
    this.ja = a;
    this.ja.client = this;
    this.ja.ns(this.vc);
    b = this.Dh;
    a = this.vc;
    b.x = a.x;
    b.y = a.y;
  }
  function Re() {}
  function t() {
    x.call(this);
  }
  function rb() {
    this.scale = 1;
    this.Sl = this.ff = 0;
    this.alpha = 1;
    this.jk = 0.1;
    K.call(this, rb.TYPE);
  }
  function Cc() {
    K.call(this, Cc.TYPE);
  }
  function Nb() {
    var a = new y();
    a.x = 0;
    a.y = 0;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Wa = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.uo = a;
    this.Cm = 0;
    K.call(this, Nb.TYPE);
  }
  function Se(a) {
    x.call(this);
    this.F = new W(null, ya, "bubble" + a);
  }
  function sb() {
    this.state = 0;
    this.ly = Ob(2);
    this.ky = ac(0.1);
    var a = new y();
    a.x = 0;
    a.y = 0;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.Wa = a;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.uo = a;
    K.call(this, sb.TYPE);
  }
  function ic(a) {
    this.state = 0;
    K.call(this, ic.TYPE);
    this.qb = a;
  }
  function fd() {
    this.state = 0;
    this.Uq = !1;
    K.call(this, fd.TYPE);
  }
  function gd() {
    this.state = 0;
    K.call(this, gd.TYPE);
  }
  function hd() {
    this.state = 0;
    K.call(this, hd.TYPE);
  }
  function bc() {
    this.state = 0;
    K.call(this, bc.TYPE);
  }
  function Jd(a, b) {
    this.interval = 0;
    K.call(this, Jd.TYPE);
    this.zt = a;
    this.qb = b;
  }
  function Kd(a) {
    this.interval = 0;
    this.easing = Ob(2);
    K.call(this, Kd.TYPE);
    this.qb = a;
  }
  function id(a) {
    this.interval = 0;
    this.scale = 0.01;
    this.easing = Ob(2);
    K.call(this, id.TYPE);
    this.ff = a;
  }
  function zb() {
    this.easing = Ob(2);
    K.call(this, zb.TYPE);
    zb.count++;
  }
  function aa(a) {
    K.call(this, a);
  }
  function K(a) {
    this.time = 0;
    this.enabled = !0;
    this.type = a;
    this.Se = this.wb();
  }
  function bb() {
    this.fj(0);
  }
  function Hd(a) {
    null == a && (a = 1);
    this.fj(a);
  }
  function Dc(a) {
    this.fj(a);
  }
  function Ld() {}
  function wg() {}
  function y() {}
  function Nc() {}
  function Vf() {}
  function Zb() {
    var a = new y();
    this.direction = a;
    this.origin = a = new y();
  }
  function Qc() {
    this.Wa = new y();
  }
  function Wf() {}
  function vd() {}
  function z() {}
  function Fd(a) {
    this.a = this.b = a;
  }
  function Ub() {}
  function cd() {
    this.G = new y();
  }
  function ca() {}
  function xg() {}
  function rg() {}
  function na() {}
  function Xf(a) {
    this.gB = a;
  }
  function Oa() {
    this.IA = 0;
    this.md = [];
    this.touches = {};
    this.first = null;
    this.enabled = !1;
    this.Vc = 0;
    var a = new y();
    a.x = 0;
    a.y = 0;
    this.anchor = a;
    this.Pj = 0;
    a = new y();
    a.x = 0;
    a.y = 0;
    this.position = a;
    this.Zf = 0;
    this.maxTouchPoints = 1;
    this.passive = this.cv();
    this.Pj |= 14;
    window.document.body.style.setProperty("touch-action", "none");
    window.document.body.style.setProperty("-ms-touch-action", "none");
    window.document.body.addEventListener(
      "touchmove",
      function (b) {
        b.preventDefault();
      },
      this.passive && { passive: !1 }
    );
    this.event = new Xf(this);
    this.enable();
  }
  function Yf(a, b, c) {
    this.keyboard = a;
    this.code = b;
    this.Vc = c;
  }
  function Va() {
    this.enabled = !1;
    this.time = 0;
    var a = Array(255);
    this.Eq = a;
    this.hb = new ed();
    this.keys = a = Array(255);
    for (a = this.location = 0; 255 > a; ) {
      var b = a++;
      this.Eq[b] = 0;
    }
    a = [];
    for (b = 0; 256 > b; ) b++, a.push(0);
    var c = (this.flags = a);
    for (a = 37; 41 > a; ) (b = a++), (c[b] |= 1);
    for (a = 48; 58 > a; ) (b = a++), (c[b] |= 2);
    for (a = 65; 91 > a; ) (b = a++), (c[b] |= 4);
    this.enable();
  }
  function ua() {}
  function wa() {}
  function Md(a) {
    this.current = 0;
    this.Lq = a;
  }
  function Ab() {}
  function pb(a, b, c) {
    null == b && (b = 0);
    null == c && (c = a.length - b);
    if (0 > b || 0 > c || b + c > a.length) throw 14;
    this.b = a.b;
    this.Na = b;
    this.gf = this.od = c;
  }
  function Te() {}
  function Zf() {
    this.size = this.Na = 0;
  }
  function Ue(a, b, c) {
    null == a && (a = "Not implemented");
    jd.call(this, a, b, c);
  }
  function jd(a, b, c) {
    Ka.call(this, a, b);
    this.vl = null == c ? { fileName: "(unknown)", lineNumber: 0, className: "(unknown)", methodName: "(unknown)" } : c;
  }
  function Db() {
    this.P = Object.create(null);
  }
  function Ve(a) {
    for (var b = a.length, c = 1; b > 1 << c; ) ++c;
    if (8 < c || b != 1 << c) throw 10;
    this.Bg = a;
    this.yt = c;
  }
  function qb() {}
  function xa(a) {
    this.length = a.byteLength;
    this.b = new Uint8Array(a);
    this.b.KD = a;
    a.Cz = this;
    a.LD = this.b;
  }
  function We(a, b, c) {
    Ka.call(this, String(a), b, c);
    this.value = a;
  }
  function kd(a) {
    var b = this;
    this.id = setInterval(function () {
      b.ud();
    }, a);
  }
  function jc() {}
  function Id() {}
  function ba() {}
  function kc() {}
  function $f() {}
  function Bd() {}
  function Nd(a) {
    this.gb = a;
    this.reset();
  }
  function Xe(a, b, c) {
    null == b && (b = !1);
    null == a && (a = 1);
    this.Ia = null;
    this.l = 0;
    this.Mc = !1;
    this.bc = -2;
    this.Oe = 1 > a ? 1 : a;
    this.J = a;
    this.ke = b;
    null != c && ((a = this.l = c.length), (b = this.J), (this.J = a > b ? a : b));
    this.i = Array(this.J + 1);
    this.i[0] = null;
    if (null != c) {
      a = this.i;
      b = 1;
      for (var d = this.l + 1; b < d; ) {
        var e = b++;
        a[e] = c[e - 1];
      }
      this.HB();
    }
  }
  function Mc(a, b) {
    null == b && (b = -1);
    this.Ab = this.l = 0;
    this.bc = -3;
    -1 == b && (b = a);
    this.J = b;
    this.NC = a;
    this.Hi = a - 1;
    this.Ne = ba.U(Array(a), -1);
    this.i = Array(3 * this.J);
    this.Lb = Array(this.J);
    var c = 2;
    a = this.i;
    b = 0;
    for (var d = this.J; b < d; ) b++, (a[c - 1] = -2147483648), (a[c] = -1), (c += 3);
    a = this.Lb;
    b = 0;
    for (d = this.J - 1; b < d; ) (c = b++), (a[c] = c + 1);
    a[this.J - 1] = -1;
  }
  function Vd(a, b) {
    null == b && (b = -1);
    this.Ia = null;
    this.Ab = this.l = 0;
    -1 == b && (b = a);
    2 > b && (b = 2);
    this.J = b;
    this.sa = new Mc(a, this.J);
    this.$g = Array(this.J);
    this.Lb = Array(this.J);
    this.Gi = ba.U(Array(this.J), -2147483648, 0, this.J);
    a = this.Lb;
    b = 0;
    for (var c = this.J - 1; b < c; ) {
      var d = b++;
      a[d] = d + 1;
    }
    a[this.J - 1] = -1;
  }
  function Ye() {}
  function Tc() {
    this.key = uc.next();
  }
  function uc() {}
  function Ze(a) {
    this.gb = a;
    this.Sk = this.gb.va;
  }
  function ld(a) {
    this.Me = null;
    this.xo = 0;
    this.visible = !0;
    this.oa = a;
    this.va = null;
    this.ta = !1;
  }
  function Od(a, b) {
    this.node = a;
    this.Wd = b;
    this.Cb = this.next = null;
  }
  function $e() {
    this.Tk = this.Ii = 16;
    this.Ia = null;
    this.l = 0;
    this.nc = null;
    this.wm = !1;
    this.Zg = Array(this.Tk);
    this.oc = Array(this.Ii);
  }
  function Tb(a, b, c) {
    null == a && (a = 16);
    this.Ia = null;
    this.Ma = 0;
    this.bc = -2;
    this.J = this.Oe = 1 > a ? 1 : a;
    if (null != b) {
      a = this.Ma = b.length;
      var d = this.J;
      this.J = a > d ? a : d;
    }
    this.i = Array(this.J);
    if (null != b) {
      a = this.i;
      d = 0;
      for (var e = this.Ma; d < e; ) {
        var f = d++;
        a[f] = b[f];
      }
    }
    c && (this.bc = 0);
  }
  function ag() {}
  function ed(a, b, c) {
    null == a && (a = 16);
    this.l = this.Sa = 0;
    this.bc = -2;
    this.J = this.Oe = 1 > a ? 1 : a;
    if (null != b) {
      a = this.l = b.length;
      var d = this.J;
      this.J = a > d ? a : d;
    }
    this.i = Array(this.J);
    if (null != b) {
      a = this.i;
      d = 0;
      for (var e = this.l; d < e; ) {
        var f = d++;
        a[f] = b[f];
      }
    }
    c && (this.bc = 0);
  }
  function af() {}
  function Pd(a) {
    this.gb = a;
    this.i = this.gb.i;
    this.Va = this.gb.l;
    this.wa = 0;
  }
  function md(a, b) {
    null == b && (b = 0);
    null == a && (a = 0);
    this.x = a;
    this.y = b;
  }
  function Qd(a) {
    this.gb = a;
    this.i = this.gb.i;
    a = this.gb;
    this.Va = a.ga * a.sa;
    this.wa = 0;
  }
  function Ec() {}
  function vc(a, b, c) {
    this.Ia = null;
    this.Mc = !1;
    if (null != c) {
      this.ga = a;
      this.sa = b;
      a = this.i = Array(this.ga * this.sa);
      b = 0;
      for (var d = this.ga * this.sa; b < d; ) {
        var e = b++;
        a[e] = c[e];
      }
    } else (this.ga = a), (this.sa = b), (this.i = Array(this.ga * this.sa));
  }
  function bg() {
    Wa.call(this, N.context.createStereoPanner(), 1);
  }
  function Fc() {
    Wa.call(this, N.context.createGain(), 2);
  }
  function bf() {
    Wa.call(this, N.context.createBufferSource(), 0);
  }
  function cf() {
    Wa.call(this, N.context.destination, 7);
  }
  function Wa(a, b) {
    this.inputs = [];
    this.n = a;
    this.type = b;
  }
  function Gc(a, b) {
    this.po = null;
    Pb.call(this, a, b);
    this.data = b.data;
  }
  function df() {
    Ga.call(this);
  }
  function Rd(a, b, c, d) {
    this.stopped = !1;
    Pb.call(this, a, b);
    this.loop = d;
    this.Yc = !0;
    this.node = b.data.cloneNode();
    null != c
      ? ((a = a.Ob[c]),
        (this.min = a.min / 1e3),
        (this.max = a.max / 1e3),
        this.node.addEventListener("timeupdate", L(this, this.Vt), !1),
        this.node.addEventListener("loadedmetadata", L(this, this.Lo), !1))
      : ((this.min = 0), (this.max = b.data.duration), (this.node.onended = L(this, this.stop)), (this.node.loop = d));
    this.tp(this.Pg());
    this.node.play();
  }
  function nd() {
    this.Ob = [];
    Ga.call(this);
  }
  function N() {}
  function Pb(a, b) {
    this.volume = 1;
    this.offset = 0;
    this.loop = !1;
    this.eg = a;
    this.Ce = b;
  }
  function Hc() {}
  function cg(a, b, c, d) {
    this.name = a;
    this.id = b;
    this.min = c;
    this.max = d;
  }
  function Ga() {
    this.Dc = Array(4096);
    this.Qc = new Z();
    this.At = 1e4;
    this.no = this.uA = this.vA = 1;
    this.Be = this.ot = 0;
    this.BA = 16;
    this.st = 2;
    this.enabled = !0;
    this.ZC = 0.05;
  }
  function od(a, b, c) {
    this.dt = -1;
    this.id = a;
    this.data = b;
    this.je = c;
  }
  function Aa() {}
  function pd(a, b) {
    this.progress = 0;
    this.url = a;
    this.$l = b;
  }
  function lc() {}
  function dg(a, b) {
    this.id = a;
    this.ii = b;
  }
  function p() {}
  function kb() {
    this.P = {};
  }
  function eg() {}
  function ef(a, b) {
    this.Vd = new pd(a, b.$l);
    this.pd = b;
  }
  function ff() {}
  function gf(a, b, c) {
    null == a && (a = 2);
    this.wt = this.tt = 0;
    this.Tf = [];
    this.hb = new Xe();
    this.Et = this.yo = 0;
    this.CA = a;
    this.Eo = b;
    this.$l = c;
  }
  function fg(a, b, c, d) {
    this.url = a;
    this.data = b;
    this.Vf = c;
    this.Wd = d;
  }
  function qd(a, b) {
    this.f = 128;
    x.call(this);
    this.ii = a;
    this.delay = b;
  }
  function Ic() {}
  function hf() {
    this.ud = function () {};
    this.Jd = (this.window = "undefined" !== typeof window) ? -1 : null;
  }
  function Bb() {}
  function yg() {}
  function rd(a) {
    ra.call(this, a);
  }
  function gg(a, b, c) {
    Ka.call(this, a, b, c);
  }
  function Ka(a, b, c) {
    this.message = a;
    this.yq = null != c ? c : this;
  }
  function jf() {}
  function H() {}
  function hc() {}
  function hg(a) {
    this.type = a;
    this.list = new Z();
  }
  function $b() {
    this.ro = this.el = 0;
    this.buffer = new Z();
    this.$c = new Z();
    x.call(this);
  }
  function tb() {}
  function Pa() {}
  function Ra() {}
  function Z(a, b, c) {
    null == a && (a = 2);
    this.Ia = null;
    this.l = 0;
    this.Mc = !1;
    this.bc = -2;
    this.Oe = 2 > a ? 2 : a;
    null != b && 0 < b.length
      ? ((this.l = b.length), (this.i = b.slice(0, b.length)), (this.J = this.l))
      : ((this.J = this.Oe), (this.i = Array(this.J)));
    c && (this.bc = 0);
  }
  function ig() {}
  function mc() {}
  function Jc() {}
  function jg(a) {
    this.top = 0;
    this.stack = [];
    this.push(a);
  }
  function db(a, b, c) {
    this.flags = 0;
    this.sender = a;
    this.type = b;
    this.lk = c;
  }
  function kg(a, b, c) {
    null == c && (c = -1);
    this.Fi = 16;
    this.size = 0;
    this.bc = -1;
    this.lt = a;
    this.sA = null == b ? function () {} : b;
    this.AA = c;
    this.Uf = Array(this.Fi);
  }
  function ub() {}
  function Y() {}
  function lg() {
    this.ry = !0;
    this.sg = new de();
    this.hn = !1;
    this.fn = !0;
    this.Lr = !1;
    this.gn = this.Mr = !0;
    this.dg = 1;
    this.cj = 0;
    this.Fl = 1;
    this.language = "en";
    this.title = "?";
  }
  function ra(a) {
    this.Ck = null;
    this.Ci = this.pk = this.Ae = 0;
    this.Qb = new hf();
    this.qt = -1;
    ra.instance = this;
    this.tb = a;
    B.console.log("" + a.title + " v1.2.7 2021-12-14 23:31:27 Generated by Haxe 4.2.4 polygonal");
    ta.call(this);
    this.zm();
  }
  function sd(a) {
    this.Xa = a;
    var b = new fa(
      "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
      ""
    );
    if (b.match(a)) la.parseInt(b.rb(1)), la.parseInt(b.rb(2)), la.parseInt(b.rb(3)), b.rb(4), b.rb(5);
    else throw 3;
  }
  function la() {}
  function ta() {
    this.Xo = [];
    this.Vq = !1;
    this.Je = new gb("fg");
    this.canvas = new gb("canvas");
    this.Ad = new gb("bg");
    this.root = new gb("stage");
    ta.instance = this;
    x.call(this);
    this.name = "Stage";
    this.root.appendChild(this.Ad);
    this.root.appendChild(this.canvas);
    this.root.appendChild(this.Je);
  }
  function x() {
    this.time = this.Se = 0;
    this.uid = x.next++;
    void 0 === this.f && (this.f = 0);
    this.type = this.R();
    this.f |= 3;
    0 == (this.f & 128) && Pa.register(this);
  }
  function mg() {
    this.Bo = {};
  }
  function Cb() {}
  function kf(a) {
    this.storage = null;
    this.name = a;
    this.storage = window.famobi.localStorage;
  }
  function td(a) {
    this.name = a;
  }
  function T() {}
  function A() {}
  function fa(a, b) {
    this.r = new RegExp(a, b.split("u").join(""));
  }
  function eb() {}
  function Kc() {}
  function sa() {
    return na.Sh(this, "");
  }
  function u(a, b) {
    a = Object.create(a);
    for (var c in b) a[c] = b[c];
    b.toString !== Object.prototype.toString && (a.toString = b.toString);
    return a;
  }
  function Dg(a, b) {
    qd.root.Z(null, new qd(a, b));
  }
  function Kg() {
    return function (a) {
      return a;
    };
  }
  function Eg(a) {
    var b = z.Jx(a) / 100;
    return function (c) {
      return 0 == b ? c : 0 > b ? c * (c * -b + 1 + b) : c * ((2 - c) * b + (1 - b));
    };
  }
  function lf(a) {
    return function (b) {
      return Math.pow(b, a);
    };
  }
  function Lg(a) {
    return function (b) {
      return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a));
    };
  }
  function Ob(a) {
    return function (b) {
      return 1 - Math.pow(1 - b, a);
    };
  }
  function ac(a) {
    null == a && (a = 0.1);
    var b = z.Wb(0, 17.0158, a);
    return function (c) {
      --c;
      return c * c * ((b + 1) * c + b) + 1;
    };
  }
  function tg(a, b) {
    null == b && (b = 0.3);
    null == a && (a = 0);
    if (1 > a) {
      var c = 1;
      var d = 0.25 * b;
    } else (c = a), (d = (b / 6.283185307179586) * Math.asin(1 / c));
    return function (e) {
      return c * Math.pow(2, -10 * e) * Math.sin((6.283185307179586 * (e - d)) / b) + 1;
    };
  }
  function Mg(a) {
    function b() {
      function n(G) {
        return 0 < (q & G) ? c.$() : c.uc();
      }
      var q = c.$(),
        r = {},
        w = {};
      r.frame = w;
      w.x = n(1);
      w.y = n(2);
      w.w = n(4);
      w.h = n(8);
      w = {};
      r.sourceSize = w;
      w.w = n(16);
      w.h = n(32);
      w = {};
      r.spriteSourceSize = w;
      w.x = n(64);
      w.y = n(128);
      r.trimmed = 1 == c.$();
      return r;
    }
    var c = new pb(a);
    c.$();
    c.$();
    c.$();
    a = [];
    var d = {},
      e = {};
    d.size = e;
    e.w = c.uc();
    e.h = c.uc();
    d.scale = c.vB();
    e = {};
    e.frames = a;
    e.meta = d;
    for (var f, g = c.uc(), h = 0; h < g; ) (f = c.vh(c.uc())), (d = b()), (d.filename = f), a.push(d), ++h;
    var k, l;
    g = c.uc();
    for (h = 0; h < g; ) {
      var m = c.uc();
      f = c.vh(c.uc());
      for (l = 0; l < m; ) {
        d = b();
        for (k = "" + (l + 1); 4 > k.length; ) k = "0" + k;
        d.filename = f + k;
        a.push(d);
        ++l;
      }
      ++h;
    }
    return JSON.stringify(e);
  }
  function ng(a) {
    return a instanceof Array ? new Md(a) : a.iterator();
  }
  function L(a, b) {
    if (null == b) return null;
    null == b.om && (b.om = B.hq++);
    var c;
    null == a.Mn ? (a.Mn = {}) : (c = a.Mn[b.om]);
    null == c && ((c = b.bind(a)), (a.Mn[b.om] = c));
    return c;
  }
  E.SmartyBubbles2 = E.SmartyBubbles2 || {};
  var cc = cc || {},
    Mb;
  Kc.g = !0;
  Kc.U = function () {
    if (false) {
      var a = window.document.createElement("script");
      a.type = "text/javascript";
      a.src = "https://d2wy8f7a9ursnm.cloudfront.net/v7/bugsnag.min.js";
      a.onload = function () {
        Kc.U();
      };
      window.document.body.append(a);
    } else {
      a = { apiKey: "d17c72fc8ee65492fd997b5e67597826" };
      a.appVersion = ra.VERSION.Xa;
      a.releaseStage = "production";
      a.onError = function (b) {
        var c = Kc.vn();
        b.addMetadata("meta", c);
        return !0;
      };
      a.collectUserIp = !1;
      a.logger = null;
      try {
        window.Bugsnag.start(a), (Kc.Jk = !0);
      } catch (b) {}
    }
  };
  eb.g = !0;
  eb.show = function () {
    var a = window.document;
    a.body.style.backgroundColor = "white";
    var b = a.createElement("div");
    b.id = "crashdialog";
    var c = b.style;
    c.textAlign = "center";
    c.margin = "10vmin";
    a.body.appendChild(b);
    null != eb.image &&
      ((c = a.createElement("img")), (c.style.maxWidth = "50%"), (c.src = eb.image), b.appendChild(c));
    a = a.createElement("p");
    c = a.style;
    c.fontFamily = "system-ui";
    c.fontSize = "2em";
    a.innerHTML = (null == eb.image ? "\ud83d\ude47<br>" : "") + eb.xs;
    b.appendChild(a);
    a = a.cloneNode();
    c = a.style;
    c.fontSize = "1em";
    a.innerText = eb.body;
    b.appendChild(a);
    a = a.cloneNode();
    c = a.style;
    c.fontSize = "0.8em";
    c.fontFamily = "monospace";
    a.innerText = eb.info;
    b.appendChild(a);
  };
  fa.g = !0;
  fa.prototype = {
    match: function (a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.qd = this.r.exec(a);
      this.r.Bu = a;
      return null != this.r.qd;
    },
    rb: function (a) {
      if (null != this.r.qd && 0 <= a && a < this.r.qd.length) return this.r.qd[a];
      throw 0;
    },
    yA: function () {
      if (null == this.r.qd) throw 1;
      return { Na: this.r.qd.index, od: this.r.qd[0].length };
    },
    xA: function (a, b, c) {
      null == c && (c = -1);
      if (this.r.global) {
        if (
          ((this.r.lastIndex = b),
          (this.r.qd = this.r.exec(0 > c ? a : Y.substr(a, 0, b + c))),
          (c = null != this.r.qd))
        )
          this.r.Bu = a;
      } else if ((c = this.match(0 > c ? Y.substr(a, b, null) : Y.substr(a, b, c))))
        (this.r.Bu = a), (this.r.qd.index += b);
      return c;
    },
    map: function (a, b) {
      for (var c = 0, d = ""; !(c >= a.length); ) {
        if (!this.xA(a, c)) {
          d += la.Xa(Y.substr(a, c, null));
          break;
        }
        var e = this.yA();
        d += la.Xa(Y.substr(a, c, e.Na - c));
        d += la.Xa(b(this));
        0 == e.od ? ((d += la.Xa(Y.substr(a, e.Na, 1))), (c = e.Na + 1)) : (c = e.Na + e.od);
        if (!this.r.global) break;
      }
      !this.r.global && 0 < c && c < a.length && (d += la.Xa(Y.substr(a, c, null)));
      return d;
    },
    j: fa,
  };
  A.g = !0;
  A.hasFeature = function (a) {
    a = A.gd("hasFeature", [a]);
    A.tf && (a = !1);
    return a;
  };
  A.Wg = function () {
    return A.hasFeature("forced_mode");
  };
  A.Xy = function () {
    var a = A.gd("getFeatureProperties", ["forced_mode"]);
    A.tf && (a = {});
    return a;
  };
  A.Su = function (a) {
    A.gd("setPreloadProgress", [a]);
  };
  A.zz = function () {
    return A.hasFeature("external_pause");
  };
  A.TA = function (a) {
    A.mh("pauseGameplay", function () {
      A.Nr = !0;
      a(!0);
    });
    A.mh("resumeGameplay", function () {
      A.Nr = !1;
      a(!1);
    });
  };
  A.In = function () {
    return A.hasFeature("external_mute");
  };
  A.UA = function (a) {
    A.mh("enableAudio", function () {
      a(!0);
    });
    A.mh("disableAudio", function () {
      a(!1);
    });
  };
  A.VA = function (a) {
    A.mh("changeVolume", a);
  };
  A.Wy = function () {
    var a = A.gd("getVolume");
    A.tf && (a = 1);
    return a;
  };
  A.yp = function () {
    return A.hasFeature("skip_title");
  };
  A.Az = function () {
    return A.hasFeature("external_start");
  };
  A.oC = function () {
    A.gd("playerReady");
  };
  A.Ou = function (a) {
    A.on
      ? a()
      : A.Az()
      ? (A.mh("startGame", function () {
          A.on = !0;
          a();
        }),
        A.gd("gameReady"))
      : (A.gd("gameReady"), (A.on = !0), a());
  };
  A.mh = function (a, b) {
    A.gd("onRequest", [a, b]);
  };
  A.Zu = function () {
    A.Ej = !0;
    var a = A.gd("showInterstitialAd");
    return A.tf
      ? ((A.Ej = !1),
        new Promise(function (b) {
          b(null);
        }))
      : a.then(
          function () {
            A.Ej = !1;
          },
          function () {
            A.Ej = !1;
          }
        );
  };
  A.qA = function (a) {
    var b = A.gd("getBrandingButtonImage", [!0]);
    A.tf && (b = "more_games_graphic.png");
    var c = window.document.createElement("img");
    c.crossOrigin = "Anonymous";
    c.onload = function () {
      a(c);
    };
    c.src = b;
  };
  A.NA = function () {
    A.gd("openBrandingLink");
  };
  A.Tz = function () {
    T.tv = A.hasFeature("trackstats");
  };
  A.gd = function (a, b) {
    A.tf = !1;
    try {
      var c = window.famobi[a];
      if (null == c) throw 2;
      return c.apply(window.famobi, b);
    } catch (d) {
      return (A.tf = !0), null;
    }
  };
  T.g = !0;
  T.lA = function (a) {
    return T.ft("quit", a);
  };
  T.ft = function (a, b) {
    null == b && (b = "");
    var c = {};
    c.levelName = b;
    c.reason = a;
    return T.send("EVENT_LEVELFAIL", c);
  };
  T.oA = function (a) {
    null == a && (a = "");
    var b = {};
    b.levelName = a;
    return T.send("EVENT_LEVELSUCCESS", b);
  };
  T.mA = function (a) {
    null == a && (a = "");
    var b = {};
    b.levelName = a;
    return T.send("EVENT_LEVELRESTART", b);
  };
  T.nA = function (a) {
    null == a && (a = "");
    var b = {};
    b.levelName = a;
    return T.send("EVENT_LEVELSTART", b);
  };
  T.pause = function () {
    return T.send("EVENT_PAUSE");
  };
  T.resume = function () {
    return T.send("EVENT_RESUME");
  };
  T.gt = function (a) {
    try {
      var b = {};
      b.liveScore = a;
      T.send("EVENT_LIVESCORE", b);
    } catch (c) {}
  };
  T.qv = function (a) {
    var b = {};
    b.totalScore = a;
    return T.send("EVENT_TOTALSCORE", b);
  };
  T.cq = function (a) {
    var b = { bgmVolume: 0 };
    b.sfxVolume = a;
    T.send("EVENT_VOLUMECHANGE", b);
  };
  T.pg = function (a, b, c) {
    null == b && (b = 1);
    if (T.tv)
      try {
        window.famobi_analytics.trackStats(a, c, b);
      } catch (d) {}
  };
  T.rv = function (a, b, c) {
    var d = { eventName: "LEVELEND" };
    d.result = a;
    d.score = b;
    T.send("EVENT_CUSTOM", d).then(
      function () {
        c();
      },
      function () {}
    );
  };
  T.send = function (a, b) {
    try {
      return null != b ? window.famobi_analytics.trackEvent(a, b) : window.famobi_analytics.trackEvent(a);
    } catch (c) {
      return new Promise(function (d) {
        d(null);
      });
    }
  };
  td.g = !0;
  td.prototype = { j: td };
  kf.g = !0;
  kf.D = td;
  kf.prototype = u(td.prototype, {
    get: function () {
      return this.storage.getItem(this.name);
    },
    set: function (a) {
      this.storage.setItem(this.name, a);
    },
    j: kf,
  });
  Cb.g = !0;
  Cb.U = function (a, b, c) {
    null == c && (c = !1);
    try {
      famobi_tracking.init(a, null, b, c);
    } catch (d) {}
  };
  Cb.lD = function (a) {
    try {
      famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_START, a.Bo);
    } catch (b) {}
  };
  Cb.sv = function (a) {
    try {
      famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_END, a.Bo);
    } catch (b) {}
  };
  Cb.za = function () {
    return new mg();
  };
  mg.g = !0;
  mg.prototype = {
    iC: function (a) {
      return this.set("level", a);
    },
    uC: function (a) {
      return this.set("score", a);
    },
    Tu: function (a) {
      return this.set("success", a);
    },
    setData: function (a) {
      return this.set("data", a);
    },
    set: function (a, b) {
      this.Bo[a] = b;
      return this;
    },
    j: mg,
  };
  x.g = !0;
  x.prototype = {
    R: function () {
      return 0;
    },
    o: function () {
      if (!(0 < (this.f & 8))) {
        this.f |= 8;
        for (var a = this.V, b; null != a; ) (b = a.L), a.o(), (a = b);
        this.remove();
        0 == (this.f & 128) && Pa.unregister(this);
      }
    },
    remove: function () {
      null != this.parent && (0 == (this.f & 8) && tb.mp(this, 32), tb.removeChild(this));
    },
    iterator: function () {
      return new jg(this);
    },
    is: function (a) {
      return this instanceof a;
    },
    Z: function (a, b) {
      null != a && (b = Ic.Yj(a));
      tb.Z(this, b);
      return b;
    },
    find: function (a, b, c) {
      null == c && (c = !0);
      if (c)
        for (c = this.parent; null != c; ) {
          if ((null == a || c instanceof a) && (null == b || b(c))) return c;
          c = c.parent;
        }
      else if ((null == a || this instanceof a) && (null == b || b(this))) return this;
      for (c = this.V; null != c; ) {
        var d = c.find(a, b, !1);
        if (null != d) return d;
        c = c.L;
      }
      return null;
    },
    rf: function (a, b) {
      a = db.create(this, a, b);
      for (b = this.parent; null != b; ) {
        b.Y(a);
        if (0 < a.flags) break;
        b = b.parent;
      }
      db.wh(a);
    },
    Ub: function (a, b) {
      a = db.create(this, a, b);
      this.lu(a, !0);
      db.wh(a);
    },
    Jv: function () {
      tb.mp(this, 20);
    },
    M: function (a) {
      if (!(0 < (this.f & 40)))
        for (var b = this.V, c; null != b; )
          (b.f |= 64), (c = b.L), 1 == (b.f & 25) ? ((b.f |= 4), b.M(a), (b.time += a)) : (b.f &= -65), (b = c);
    },
    Ca: function (a) {
      if (!(0 < (this.f & 40)))
        for (var b = this.V, c; null != b; )
          (b.f |= 64), (c = b.L), 6 == (b.f & 14) ? ((b.f &= -17), b.Ca(a)) : (b.f &= -65), (b = c);
    },
    Y: function () {},
    ba: function () {},
    lu: function (a, b) {
      if (!b && (this.Y(a), 0 < (a.flags & 1))) {
        a.flags &= -2;
        return;
      }
      b = this.V;
      for (var c; null != b; ) {
        c = b.L;
        if (0 < (a.flags & 2)) break;
        b.lu(a, !1);
        b = c;
      }
    },
    et: function (a) {
      return Math.min(1, this.time / a);
    },
    toString: function () {
      return "{" + this.name + "}" + (0 != this.Se ? "[" + this.Se + "]" : "");
    },
    j: x,
  };
  ta.g = !0;
  ta.D = x;
  ta.prototype = u(x.prototype, {
    si: function () {
      var a = this.window,
        b = a.width;
      a = a.height;
      var c = new y();
      c.x = b;
      c.y = a;
      return c;
    },
    o: function () {
      this.root.o();
      this.Je = this.canvas = this.Ad = this.root = null;
      this.window.o();
      this.window = null;
      this.K.o();
      this.K = null;
      x.prototype.o.call(this);
    },
    Uz: function (a) {
      var b = this;
      this.sg = a;
      this.window = new Vc(L(this, this.Ti), a);
      this.window.Mb = function () {
        b.Mb();
      };
      this.window.nl = function (c) {
        b.kh(c);
      };
      this.window.jl = function () {};
      this.window.Go = function (c) {
        b.Do(c);
      };
    },
    Nz: function (a) {
      var b = 2;
      null != this.sg && (b = this.sg.Jq);
      switch (b) {
        case 1:
          this.window.Rs(a);
          null != this.window.getContext() ? (this.K = new Uc()) : (this.window.Ls(a), (this.K = new $a()));
          break;
        case 2:
          this.window.Ls(a);
          this.K = new $a();
          break;
        case 3:
          this.window.Rs(a), (this.K = new Uc());
      }
      this.K.Mo(function () {});
      this.K.np();
      this.K.ej(this.window);
      this.Si();
    },
    AD: function (a) {
      oa.update(this.root, a);
      Ua.Sp(this.root, a);
    },
    GB: function () {
      if (null != this.K) {
        var a = this.K.Zm;
        oa.Pb(this.root);
        this.Vq ? (this.root.qg(!0, a), this.root.tj()) : (Ua.qg(this.root, a), Ua.tj(this.root));
        this.K.clear();
        this.K.iy(this.root);
      }
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      this.AD(a);
    },
    Ca: function (a) {
      x.prototype.Ca.call(this, a);
      this.GB();
      for (var b = 0, c = this.Xo.length; b < c; ) this.Xo[b++](a);
      for (; 0 < b--; ) this.Xo.pop();
    },
    Ti: function () {
      this.Nz(new yd());
    },
    Si: function () {},
    Mb: function () {
      for (var a = 0, b = this.An(); a < b.length; ) {
        var c = b[a];
        ++a;
        switch (c.Bh) {
          case 0:
          case 7:
            break;
          default:
            c.Mb();
        }
      }
    },
    kh: function (a) {
      for (var b = 0, c = this.An(); b < c.length; ) {
        var d = c[b];
        ++b;
        d.kh(a);
      }
    },
    Do: function (a) {
      for (var b = 0, c = this.An(); b < c.length; ) {
        var d = c[b];
        ++b;
        d.Do(a);
      }
    },
    aE: function () {},
    Pz: function (a, b) {
      a = Ic.Yj(a);
      a.caller = null;
      a.xi = b;
      a.bo = !0;
      this.Z(null, a);
    },
    createTexture: function (a, b) {
      function c(r) {
        return e.K.createTexture(a, p.getData(a), r, null, p.ni(a));
      }
      function d(r) {
        var w = r.b[0],
          G = String.fromCodePoint(w);
        w = r.b[1];
        G += String.fromCodePoint(w);
        w = r.b[2];
        G += String.fromCodePoint(w);
        switch (G) {
          case "BMF":
            return new D(r);
          case "TPJ":
            return new Q(Mg(r));
          default:
            return new Q(p.Xq(r));
        }
      }
      var e = this;
      if (null != this.K.Id(a)) return this.K.Id(a);
      var f = [],
        g = [];
      if (null == b) {
        if (((b = p.gz(a)), null != b)) {
          var h = new pb(xa.$f(b));
          b = 0;
          for (var k = h.$(); b < k; ) {
            var l = b++;
            l = h.$();
            var m = h.$(),
              n = null,
              q = h.$a();
            0 < q && (n = h.vh(q, Sd.nm));
            g.push(n);
            0 == l ? ((l = h.$a()), (m = new xa(new ArrayBuffer(l))), h.cp(m, 0, l), f.push(d(m))) : f.push(f[m]);
          }
        }
      } else (b = p.getData(b)), "string" == typeof b ? f.push(new Q(b)) : d(xa.$f(b));
      h = null;
      k = !1;
      for (b = 0; b < g.length; )
        if (((l = g[b]), ++b, null != l)) {
          k = !0;
          break;
        }
      if (k) for (b = 0, k = f.length; b < k; ) (l = b++), 0 == l ? (h = c(f[0])) : e.K.rr(a, g[l], f[l]);
      else if (0 == f.length) h = c(null);
      else if (1 == f.length) h = c(f[0]);
      else for (h = c(null), b = 0; b < f.length; ) (l = f[b]), ++b, e.K.rr(a, null, l);
      p.vs(a) && (h.scale = 1 / p.kz());
      return h;
    },
    Jf: function (a) {
      return null != this.K.Id(a);
    },
    Id: function (a) {
      return this.K.Id(a);
    },
    gp: function (a, b) {
      this.K.gp(this.Id(a), this.Id(b));
    },
    An: function () {
      for (var a = [], b = this.iterator(); b.ka(); ) {
        var c = b.next();
        c instanceof za && a.push(c);
      }
      return a;
    },
    R: function () {
      return 1;
    },
    j: ta,
  });
  la.g = !0;
  la.Xa = function (a) {
    return na.Sh(a, "");
  };
  la.parseInt = function (a) {
    if (null != a)
      for (var b = 0, c = a.length; b < c; ) {
        var d = b++,
          e = a.charCodeAt(d);
        if (8 >= e || (14 <= e && 32 != e && 45 != e))
          if (((b = a.charCodeAt(d + 1)), (a = parseInt(a, 120 == b || 88 == b ? 16 : 10)), isNaN(a))) break;
          else return a;
      }
    return null;
  };
  sd.g = !0;
  sd.prototype = {
    toString: function () {
      return this.Xa;
    },
    j: sd,
  };
  ra.g = !0;
  ra.D = ta;
  ra.prototype = u(ta.prototype, {
    update: function (a) {
      this.Nm(this, 96);
      this.f |= 64;
      this.M(a);
      this.time += a;
    },
    FB: function (a) {
      this.Nm(this, 96);
      this.f |= 64;
      this.Ca(a);
    },
    Nm: function (a, b) {
      a.f &= ~b;
      for (a = a.V; null != a; ) this.Nm(a, b), (a = a.L);
    },
    o: function () {
      this.Qb.stop();
      this.Qb.ud = null;
      Aa.Bf();
      wa.Bf();
      window.removeEventListener("error", this.Ck);
      p.U();
      Oa.Bf();
      Va.Bf();
      ra.instance = null;
      ta.prototype.o.call(this);
      B.console.log("" + this.tb.title + " \ud83d\udc4b");
    },
    Ti: function () {
      ta.prototype.Ti.call(this);
      this.tb.hn || (this.window.nl = function () {});
    },
    Si: function () {
      ta.prototype.Si.call(this);
      this.Am();
      this.info = window.document.createElement("div");
      window.document.body.appendChild(this.info);
      this.info.innerText = ra.VERSION.Xa + " " + (this.K instanceof Uc ? "HW" : "SW");
      var a = this.info.style;
      a.fontFamily = "monospace";
      a.fontSize = "0.8em";
      a.color = "#fff";
      a.position = "absolute";
      a.bottom = "0";
      a.textShadow = "1px 1px 1px #000";
      a.padding = "2px";
      a.userSelect = "none";
      a.setProperty("-webkit-user-select", "none");
    },
    M: function (a) {
      ta.prototype.M.call(this, a);
      null != this.info && 5 < this.time && (this.info.remove(), (this.info = null));
    },
    kh: function (a) {
      this.tb.hn &&
        (ta.prototype.kh.call(this, a),
        a ? (this.Qb.start(), ua.ob().enable(), Aa.he().vd(1)) : (this.Qb.stop(), ua.ob().disable(), Aa.he().vd(0)));
    },
    setTime: function (a) {
      a /= 1e3;
      this.time += a;
      if (!(0 < this.qt && this.time < this.Ci + 1 / this.qt)) {
        this.Ci = this.time;
        this.pk += a;
        1 <= this.pk && --this.pk;
        var b = Bb.cy;
        this.Ae += a * Bb.Gp;
        this.Ae > 10 * b && (this.Ae = 10 * b);
        for (; this.Ae > b; ) (this.Ae -= b), Bb.$C++, this.update(b), (Bb.Ur += b);
        this.FB(this.Ae / b);
      }
    },
    kl: function () {},
    aB: function (a) {
      this.tb.Mr && ((eb.info = a), eb.show());
    },
    zm: function () {
      qd.root = this;
      this.Oz();
      p.mC(this.tb.dg);
      this.Mz();
      this.Kz();
      this.Un();
      this.Jz();
      this.Uz(this.tb.sg);
    },
    Am: function () {
      this.start();
      this.preload();
    },
    Mz: function () {
      var a = this;
      this.tb.gn &&
        ((this.Ck = function (b) {
          window.removeEventListener("error", a.Ck);
          var c = b.error.toString();
          null != b.error.stack && (c += "\n" + la.Xa(b.error.stack));
          null != a.Qb && a.Qb.stop();
          a.window.o();
          B.console.log("" + a.tb.title + " CRASHED \u26b0\ufe0f");
          B.console.log(c);
          if (a.tb.gn)
            try {
              a.aB(c);
            } catch (d) {}
        }),
        window.addEventListener("error", this.Ck));
    },
    Kz: function () {
      var a = this;
      this.tb.Lr &&
        (Kc.U(),
        (Kc.vn = function () {
          var b = {};
          null != a.Sd && (b.save = a.Sd.stringify());
          for (var c = {}, d = hc.sz().P, e = Object.keys(d), f = e.length, g = 0; g < f; ) {
            var h = e[g++];
            c[h] = d[h];
          }
          b.v = c;
          return b;
        }));
    },
    Oz: function () {
      this.Sd = this.pr();
      this.Fl = this.tb.Fl;
    },
    ZD: function () {},
    $D: function () {},
    Un: function () {
      var a = this;
      p.qp(this.tb.language);
      var b = og.qk(p.bz());
      wa.qp(b);
      B.console.log(b);
      b = jc.sk("strings");
      if (null != b) wa.Gs(b, this.tb.yz);
      else {
        b = [];
        for (var c = 0, d = p.gs(); c < d.length; ) {
          var e = d[c];
          ++c;
          new fa("lang", "").match(e) && b.push(e);
        }
        1 == b.length &&
          ((b = p.Hd(b[0])),
          p.fl(b, function (f) {
            wa.Gs(p.getData(f), a.tb.yz);
          }));
      }
    },
    Jz: function () {
      if (Aa.Ts())
        if (this.tb.fn) {
          Aa.enabled = !0;
          var a = Aa.Df();
          if (null == a) Aa.enabled = !1;
          else if (
            ub.ge(["ogg", "aac"], function (h) {
              return h == a;
            })
          ) {
            p.bC(a);
            for (var b = [], c = 0, d = p.gs(); c < d.length; ) {
              var e = d[c];
              ++c;
              new fa("audio", "").match(e) && b.push(e);
            }
            c = b;
            if (0 != c.length) {
              Aa.start();
              var f = Ga.instance(),
                g = f instanceof nd;
              d = function (h, k, l) {
                Hc.us(k)
                  ? ((h = Hc.Oy(k)), (k = Hc.EB(k)), g && (k = new Blob([k], { type: "audio/wav" })), f.Yi(h, k, l))
                  : (g && (k = new Blob([k], { type: "audio/wav" })), f.xh(h, k, p.je(h), l));
              };
              for (b = 0; b < c.length; ) (e = c[b]), ++b, p.AB(p.Hd(e), d);
            }
          } else Aa.enabled = !1;
        } else Aa.enabled = !1;
    },
    yB: function () {
      try {
        if (null == this.ms()()) {
          this.Sd.reset();
          this.yd();
          return;
        }
        this.Sd.parse(this.ms()());
      } catch (c) {
        Ka.Jm(c);
        this.Sd.reset();
        this.yd();
        return;
      }
      if (this.Sd.rev > this.Fl) throw 4;
      for (var a = !1, b = this.Sd.rev; b < this.Fl; ) this.Sd.upgrade(), (b = this.Sd.rev), (a = !0);
      a && this.yd();
    },
    yd: function () {
      this.oz()(this.Sd.stringify());
    },
    start: function () {
      this.Qb = new hf();
      this.Qb.ud = L(this, this.setTime);
      this.Qb.start();
    },
    preload: function () {
      var a = this,
        b = p.lz(),
        c = b.length;
      if (0 == c) this.kl();
      else {
        var d = new gf(
          4,
          function (g) {
            p.setData(p.Hd(g.url), g.data, g.Vf);
          },
          "v=" + sd.VERSION.Xa
        );
        d.tag = "load";
        for (var e = 0; e < b.length; ) {
          var f = b[e];
          ++e;
          p.fl(f, function () {
            0 == --c && setTimeout(L(a, a.kl), 0);
          });
        }
        for (e = 0; e < b.length; ) (f = b[e]), ++e, d.load(p.ni(f));
      }
    },
    pr: function () {
      return null;
    },
    ms: function () {
      var a = this;
      return function () {
        return a.Vm(a.tb.title).get();
      };
    },
    oz: function () {
      var a = this;
      return function (b) {
        a.Vm(a.tb.title).set(b);
      };
    },
    Vm: function (a) {
      return new je(a);
    },
    R: function () {
      return 2;
    },
    j: ra,
  });
  lg.g = !0;
  lg.prototype = { j: lg };
  Y.g = !0;
  Y.Km = function (a, b) {
    a = a.charCodeAt(b);
    if (a == a) return a;
  };
  Y.substr = function (a, b, c) {
    if (null == c) c = a.length;
    else if (0 > c)
      if (0 == b) c = a.length + c;
      else return "";
    return a.substr(b, c);
  };
  Y.remove = function (a, b) {
    b = a.indexOf(b);
    if (-1 == b) return !1;
    a.splice(b, 1);
    return !0;
  };
  Y.now = function () {
    return Date.now();
  };
  ub.g = !0;
  ub.ge = function (a, b) {
    for (a = ng(a); a.ka(); ) {
      var c = a.next();
      if (b(c)) return !0;
    }
    return !1;
  };
  ub.count = function (a, b) {
    var c = 0;
    if (null == b) for (b = ng(a); b.ka(); ) b.next(), ++c;
    else
      for (a = ng(a); a.ka(); ) {
        var d = a.next();
        b(d) && ++c;
      }
    return c;
  };
  ub.find = function (a, b) {
    for (a = ng(a); a.ka(); ) {
      var c = a.next();
      if (b(c)) return c;
    }
    return null;
  };
  Math.g = !0;
  kg.g = !0;
  kg.prototype = {
    mB: function (a) {
      this.size = this.Fi = a;
      ba.Zc(this.Uf);
      this.Uf = Array(this.size);
      for (var b = 0; b < a; ) {
        var c = b++;
        this.Uf[c] = this.lt();
      }
      return this;
    },
    put: function (a) {
      this.size == this.AA ? this.sA(a) : (this.size == this.Fi && this.resize(), (this.Uf[this.size++] = a));
    },
    resize: function () {
      var a = kc.hd(this.bc, this.Fi),
        b = Array(a);
      this.Fi = a;
      ba.kb(this.Uf, 0, b, 0, this.size);
      this.Uf = b;
    },
    j: kg,
  };
  db.g = !0;
  db.create = function (a, b, c) {
    var d = db.Qd;
    d = 0 < d.size ? d.Uf[--d.size] : d.lt();
    d.flags = 0;
    d.sender = a;
    d.type = b;
    d.lk = c;
    return d;
  };
  db.wh = function (a) {
    a.sender = null;
    a.lk = null;
    db.Qd.put(a);
  };
  db.prototype = {
    get: function (a) {
      return null != this.lk ? Ba.get(this.lk, a) : null;
    },
    j: db,
  };
  jg.g = !0;
  jg.prototype = {
    ka: function () {
      return 0 < this.top;
    },
    next: function () {
      var a = this.stack[--this.top];
      this.push(a);
      return a;
    },
    push: function (a) {
      for (a = a.V; null != a; ) (this.stack[this.top++] = a), (a = a.L);
    },
    j: jg,
  };
  Jc.g = !0;
  Jc.Xb = !0;
  mc.g = !0;
  mc.Xb = !0;
  mc.Da = [Jc];
  ig.g = !0;
  ig.Xb = !0;
  ig.Da = [mc];
  Z.g = !0;
  Z.Da = [ig];
  Z.prototype = {
    add: function (a) {
      this.Oa(a);
    },
    Oa: function (a) {
      this.l == this.J && this.grow();
      this.i[this.l++] = a;
      return this.l;
    },
    DB: function (a) {
      for (var b = this.i, c = b[a], d = --this.l; a < d; ) b[a++] = b[a];
      return c;
    },
    qx: function (a) {
      for (var b = this.i, c = 0, d, e = this.l, f = e - 1, g; c < f; ) {
        g = b[c];
        for (d = c + 1; d < e; ) a(g, b[d]), ++d;
        ++c;
      }
      return this;
    },
    indexOf: function (a) {
      if (0 == this.l) return -1;
      for (var b = 0, c = -1, d = this.l - 1, e = this.i; ; ) {
        if (e[b] == a) {
          c = b;
          break;
        }
        if (!(b++ < d)) break;
      }
      return c;
    },
    sort: function (a, b, c, d) {
      null == d && (d = -1);
      null == c && (c = 0);
      null == b && (b = !1);
      1 < this.l &&
        (-1 == d && (d = this.l - c),
        null == a ? (b ? this.Xz(c, d) : this.bp(c, d)) : b ? this.Wz(a, c, d) : this.ap(c, d, a));
      return this;
    },
    Wz: function (a, b, c) {
      for (var d, e, f = this.i, g = b + 1, h = b + c; g < h; ) {
        d = g++;
        for (c = f[d]; d > b; )
          if (((e = f[d - 1]), 0 < a(e, c))) (f[d] = e), --d;
          else break;
        f[d] = c;
      }
      return this;
    },
    ap: function (a, b, c) {
      var d = a + b - 1,
        e = a,
        f = d,
        g = this.i;
      if (1 < b) {
        var h = a + (b >> 1);
        b = a + b - 1;
        var k = g[a];
        var l = g[h];
        var m = g[b];
        var n = c(k, m);
        h =
          0 > n && 0 > c(k, l)
            ? 0 > c(l, m)
              ? h
              : b
            : 0 > c(l, k) && 0 > c(l, m)
            ? 0 > n
              ? a
              : b
            : 0 > c(m, k)
            ? h
            : a;
        b = g[h];
        for (g[h] = g[a]; e < f; ) {
          for (; 0 > c(b, g[f]) && e < f; ) --f;
          f != e && ((g[e] = g[f]), ++e);
          for (; 0 < c(b, g[e]) && e < f; ) ++e;
          f != e && ((g[f] = g[e]), --f);
        }
        g[e] = b;
        this.ap(a, e - a, c);
        this.ap(e + 1, d - e, c);
      }
    },
    bp: function (a, b) {
      var c = this.i,
        d = a + b - 1,
        e = a,
        f = d;
      if (1 < b) {
        var g = a + (b >> 1);
        b = a + b - 1;
        var h = c[a];
        var k = c[g];
        var l = c[b];
        var m = h.compare(l);
        g =
          0 > m && 0 > h.compare(k)
            ? 0 > k.compare(l)
              ? g
              : b
            : 0 > k.compare(h) && 0 > k.compare(l)
            ? 0 > m
              ? a
              : b
            : 0 > l.compare(h)
            ? g
            : a;
        b = c[g];
        for (c[g] = c[a]; e < f; ) {
          for (; 0 > b.compare(c[f]) && e < f; ) --f;
          f != e && ((c[e] = c[f]), ++e);
          for (; 0 < b.compare(c[e]) && e < f; ) ++e;
          f != e && ((c[f] = c[e]), --f);
        }
        c[e] = b;
        this.bp(a, e - a);
        this.bp(e + 1, d - e);
      }
    },
    Xz: function (a, b) {
      for (var c = this.i, d, e, f, g, h = a + 1, k = a + b; h < k; ) {
        d = h++;
        for (f = b = c[d]; d > a; )
          if (((g = e = c[d - 1]), 0 < f.compare(g))) (c[d] = e), --d;
          else break;
        c[d] = b;
      }
    },
    ec: function (a) {
      a > this.J && ((this.J = a), this.se(a));
      return this;
    },
    resize: function (a) {
      a < this.l
        ? ((this.J = this.l = a), this.J < this.Oe && (this.J = this.Oe), this.se(this.J))
        : (this.ec(a), (this.l = a));
      return this;
    },
    U: function (a, b) {
      this.ec(a);
      this.l = a;
      for (var c = this.i, d = 0; d < a; ) {
        var e = d++;
        c[e] = b;
      }
      return this;
    },
    of: function (a) {
      this.l = 0;
      this.ec(a.l);
      ba.kb(a.i, 0, this.i, 0, a.l);
      this.l = a.l;
      return this;
    },
    grow: function () {
      this.J = kc.hd(this.bc, this.J);
      this.se(this.J);
    },
    se: function (a) {
      a = Array(a);
      ba.kb(this.i, 0, a, 0, this.l);
      this.i = a;
    },
    S: function () {
      ba.Zc(this.i);
      this.i = null;
      null != this.Ia && (this.Ia.S(), (this.Ia = null));
    },
    contains: function (a) {
      for (var b = this.i, c = 0, d = this.l; c < d; ) {
        var e = c++;
        if (b[e] == a) return !0;
      }
      return !1;
    },
    remove: function (a) {
      if (this.Vg()) return !1;
      for (var b = 0, c, d, e = this.l, f = this.i; b < e; )
        if (f[b] == a) {
          for (c = b + 1; c < e; )
            if (f[c] == a) ++c;
            else break;
          d = c - b;
          e -= d;
          for (d = b; d < e; ) (f[d] = f[c++]), ++d;
        } else ++b;
      a = 0 != this.l - e;
      this.l = e;
      return a;
    },
    iterator: function () {
      if (this.Mc) {
        if (null == this.Ia) this.Ia = new Pd(this);
        else {
          var a = this.Ia;
          a.i = a.gb.i;
          a.Va = a.gb.l;
          a.wa = 0;
        }
        return this.Ia;
      }
      return new Pd(this);
    },
    Vg: function () {
      return 0 == this.l;
    },
    nj: function () {
      return ba.nj(this.i, 0, this.l, []);
    },
    j: Z,
  };
  Ra.g = !0;
  Ra.prototype = {
    Ka: function (a) {
      if (null == this.list) return (this.list = new le(a)), Ra.count++, !0;
      for (var b = this.list; null != b; ) {
        if (b.Qe == a) return !1;
        b = b.next;
      }
      a = new le(a);
      a.next = this.list;
      this.list = a;
      Ra.count++;
      return !0;
    },
    detach: function (a) {
      if (null == a && null != this.current) return this.detach(this.current), (this.current = null), !0;
      var b = this.list;
      if (null == b) return !1;
      if (b.Qe == a)
        return (
          this.next == b && (this.next = b.next), (b.Qe = null), (this.list = b.next), (b.next = null), Ra.count--, !0
        );
      var c = b;
      for (b = b.next; null != b; ) {
        if (b.Qe == a)
          return (
            (b.Qe = null), (c.next = b.next), (b.next = null), this.next == b && (this.next = c.next), Ra.count--, !0
          );
        c = b;
        b = b.next;
      }
      return !1;
    },
    Tj: function () {
      for (var a = this.list; null != a; )
        (this.next = a.next), (a.Qe = null), (a.next = null), (a = this.next), Ra.count--;
      this.list = this.next = null;
    },
    notify: function (a) {
      for (var b = this.list; null != b; ) (this.next = b.next), (this.current = b.Qe), a(b.Qe), (b = this.next);
      this.current = this.next = null;
    },
    j: Ra,
  };
  Pa.g = !0;
  Pa.register = function (a) {
    Pa.Xn.Oa(a);
    Pa.total++;
    Pa.eh.notify(function (b) {
      b.cE(a);
    });
  };
  Pa.unregister = function (a) {
    var b = Pa.Xn,
      c = b.i;
    c[Pa.Xn.indexOf(a)] = c[--b.l];
    Pa.total--;
    Pa.eh.notify(function (d) {
      d.dE(a);
    });
  };
  Pa.Qt = function (a) {
    Pa.eh.notify(function (b) {
      b.Qt(a);
    });
  };
  tb.g = !0;
  tb.Z = function (a, b) {
    b.parent = a;
    if (null != a.V) {
      for (var c = a.V; null != c.L; ) c = c.L;
      c.L = b;
    } else a.V = b;
    for (a = a.parent; null != a; ) a = a.parent;
    b.ba();
    Pa.Qt(b);
  };
  tb.removeChild = function (a) {
    if (null == a || null == a.parent) return !1;
    var b = a.parent;
    if (a == b.V) b.V = a.L;
    else
      for (b = b.V; null != b; ) {
        if (b.L == a) {
          b.L = a.L;
          break;
        }
        b = b.L;
      }
    a.parent = a.L = null;
    return !0;
  };
  tb.Vz = function (a, b) {
    var c = a.L;
    a.L = b;
    b.L = c;
    b.parent = a.parent;
    b.ba();
  };
  tb.Xx = function (a) {
    var b = 0;
    for (a = a.V; null != a; ) ++b, (a = a.L);
    return b;
  };
  tb.mp = function (a, b) {
    a.f |= b;
    for (a = a.V; null != a; ) tb.mp(a, b), (a = a.L);
  };
  $b.g = !0;
  $b.D = x;
  $b.prototype = u(x.prototype, {
    o: function () {
      x.prototype.o.call(this);
      this.$c.S();
      this.$c = null;
      this.buffer.S();
      this.buffer = null;
      this.el = 0;
    },
    Ka: function (a, b, c) {
      if (null != b) for (var d = 0; d < b.length; ) (c = b[d]), ++d, this.Ka(a, null, c);
      else
        (c = null == c ? 0 : c + 1),
          c > this.ro && (this.ro = c),
          this.$c.resize(this.ro + 1),
          (b = this.$c.i[c]),
          null == b && ((b = new hg(c)), (this.$c.i[c] = b)),
          b.add(a) && this.el++;
    },
    detach: function (a, b) {
      b = null == b ? 0 : b + 1;
      if (0 <= b && b < this.$c.l) {
        var c = this.$c.i[b];
        null != c && c.remove(a) && (this.el--, c.list.Vg() && (c.S(), (this.$c.i[b] = null)));
      }
    },
    notify: function (a, b) {
      this.buffer.l = 0;
      this.buffer.ec(2 * this.el);
      var c = this.buffer.i,
        d = 0;
      if (0 < this.$c.l) {
        var e = this.$c.i[0];
        if (null != e) {
          var f = e.list.i;
          var g = 0;
          for (e = e.list.l; g < e; ) (c[g + d] = f[g]), ++g;
          d += e;
        }
      }
      g = null == a ? 0 : a + 1;
      if (0 <= g && g < this.$c.l && ((e = this.$c.i[g]), null != e)) {
        f = e.list.i;
        g = 0;
        for (e = e.list.l; g < e; ) (c[g + d] = f[g]), ++g;
        d += e;
      }
      a = db.create(this, a, b);
      g = 0;
      for (e = d; g < e; ) c[g].Y(a), ++g;
      db.wh(a);
    },
    R: function () {
      return 18;
    },
    j: $b,
  });
  hg.g = !0;
  hg.prototype = {
    add: function (a) {
      if (this.list.contains(a)) return !1;
      this.list.Oa(a);
      return !0;
    },
    remove: function (a) {
      return this.list.remove(a);
    },
    S: function () {
      this.list.S();
      this.list = null;
    },
    j: hg,
  };
  hc.g = !0;
  hc.nd = function () {
    return "undefined" !== typeof window.orientation;
  };
  hc.sz = function () {
    var a = new Db();
    new fa("[?&]+([^=&]+)=([^&]*)", "gi").map(window.location.href, function (b) {
      var c = b.rb(1);
      b = b.rb(2);
      a.P[c] = b;
      return null;
    });
    return a;
  };
  var Ba = {
    Fc: function (a) {
      var b = Ba.Rb();
      if (1 == a.length) Ba.set(b, a[0]);
      else for (var c = a.length, d = 0; d < c; ) Ba.set(b, a[d], a[d + 1]), (d += 2);
      return b;
    },
    Rb: function (a, b) {
      var c = {};
      null != a && Ba.set(c, a, b);
      return c;
    },
    get: function (a, b, c) {
      a = H.T(a, b);
      null == a && (a = c);
      return a;
    },
    set: function (a, b, c) {
      a[b] = null == c ? !0 : c;
      return a;
    },
    cn: function (a, b) {
      return H.T(a, b);
    },
    dn: function (a, b, c) {
      a[b] = c;
    },
  };
  H.g = !0;
  H.T = function (a, b) {
    try {
      return a[b];
    } catch (c) {
      return null;
    }
  };
  jf.g = !0;
  jf.Xb = !0;
  jf.prototype = { j: jf };
  Ka.g = !0;
  Ka.Jm = function (a) {
    a instanceof Ka || (a instanceof Error ? new Ka(a.message, null, a) : new We(a, null, a));
  };
  Ka.D = Error;
  Ka.prototype = u(Error.prototype, {
    uD: function () {
      return this.yq;
    },
    toString: function () {
      return this.message;
    },
    WD: function () {
      return this.message;
    },
    XD: function () {
      return this.yq;
    },
    j: Ka,
  });
  gg.g = !0;
  gg.D = Ka;
  gg.prototype = u(Ka.prototype, { j: gg });
  rd.g = !0;
  rd.U = E.SmartyBubbles2.init = function (a) {
    var b = new lg();
    b.title = "SmartyBubbles2";
    b.language = a;
    b.dg = 2;
    b.cj = (16777215 * Math.random()) | 0;
    b.Lr = !0;
    b.gn = !0;
    b.hn = !0;
    b.fn = !0;
    b.sg.$B(!1);
    b.sg.aC(1);
    b.ry = !0;
    a = 1;
    2 < window.devicePixelRatio && hc.nd() && (a = 2);
    b.sg.nC(a);
    rd.instance = new rd(b);
  };
  rd.D = ra;
  rd.prototype = u(ra.prototype, {
    zm: function () {
      ra.prototype.zm.call(this);
    },
    o: function () {
      ra.prototype.o.call(this);
    },
    Am: function () {
      var a = this;
      ra.prototype.Am.call(this);
      A.Tz();
      Cb.U("smarty-bubbles-2", 1, !1, !0);
      A.TA(function (b) {
        b ? (a.Qb.stop(), ua.ob().disable(), ua.ri().disable()) : (a.Qb.start(), ua.ob().enable(), ua.ri().enable());
      });
      A.UA(function (b) {
        da.zc = b;
        a.yd();
      });
      A.VA(function (b) {
        Ga.instance().vd(b);
      });
      Ga.instance().vd(A.Wy());
    },
    Si: function () {
      this.Vq = this.K.Zm = !1;
      this.K.Ql = !0;
      this.K.wr = 24;
      ra.prototype.Si.call(this);
    },
    kh: function (a) {
      a
        ? (A.Nr || (this.Qb.start(), ua.ob().enable()), A.Ej || Aa.he().vd(1))
        : (this.Qb.stop(), Aa.he().vd(0), ua.ob().disable());
    },
    Ti: function () {
      ra.prototype.Ti.call(this);
      this.window.color = Fg.Ly(-11075434);
    },
    kl: function () {
      ra.prototype.kl.call(this);
      this.Pz(Ad);
    },
    Mb: function () {
      var a = this.K.Fe;
      a.Yp = !0;
      a.reset();
      this.window.LB();
      ra.prototype.Mb.call(this);
      this.Ub(1);
    },
    Ca: function (a) {
      ra.prototype.Ca.call(this, a);
    },
    Un: function () {
      ra.prototype.Un.call(this);
      this.tb.Mr && ((eb.xs = wa.translate(Td.iq)), (eb.body = wa.translate(Td.uq)));
    },
    pr: function () {
      return new da();
    },
    yd: function () {
      A.Wg() || ra.prototype.yd.call(this);
    },
    Vm: function (a) {
      return new kf(a);
    },
    R: function () {
      return 3;
    },
    j: rd,
  });
  yg.g = !0;
  yg.Bz = function (a) {
    for (var b = ""; (b = "0123456789ABCDEF".charAt(a & 15) + b), (a >>>= 4), 0 < a; );
    for (; 6 > b.length; ) b = "0" + b;
    return b;
  };
  Bb.g = !0;
  hf.g = !0;
  hf.prototype = {
    start: function () {
      var a = this;
      this.stop();
      var b = null;
      this.window && "undefined" !== typeof window.requestAnimationFrame
        ? ((b = function (c) {
            a.Jd = window.requestAnimationFrame(b);
            a.update(c);
          }),
          (this.now = 0),
          (this.Jd = window.requestAnimationFrame(b)))
        : ((b = function () {
            a.Jd = setTimeout(b, 16);
            var c = Date.now();
            a.update(c);
          }),
          (this.now = Date.now()),
          (this.Jd = setTimeout(b, 16)));
    },
    stop: function () {
      this.window
        ? 0 > this.Jd || (window.cancelAnimationFrame(this.Jd), (this.Jd = -1))
        : null != this.Jd && (clearInterval(this.Jd), (this.Jd = null));
    },
    update: function (a) {
      Bb.time = a / 1e3;
      var b = a - this.now;
      this.now = a;
      null != this.ud && this.ud(b);
    },
    j: hf,
  };
  Ic.g = !0;
  Ic.Yj = function (a) {
    return new (Function.prototype.bind.apply(a, [null].concat([])))();
  };
  Ic.uy = function (a) {
    var b = cc[a.Aa].Cc[a.pa].Bj;
    if (null != b) {
      for (var c = [], d = 0; d < b.length; ) {
        var e = b[d];
        ++d;
        c.push(a[e]);
      }
      return c;
    }
    return [];
  };
  var pg = {
    Yl: function (a) {
      return 0 > a ? 4294967296 + a : a + 0;
    },
  };
  qd.g = !0;
  qd.D = x;
  qd.prototype = u(x.prototype, {
    M: function (a) {
      this.delay -= a;
      0 < this.delay || (this.ii(), (this.ii = null), this.o());
    },
    R: function () {
      return 7;
    },
    j: qd,
  });
  fg.g = !0;
  fg.prototype = { j: fg };
  gf.g = !0;
  gf.prototype = {
    load: function (a, b) {
      if (this.zi(a) || this.ao(a) || this.Mk(a)) return !1;
      this.yo++;
      a = new ef(a, this);
      a.Wd = b;
      a.priority = this.wt--;
      if (this.Tf.length == this.CA) return this.hb.enqueue(a), !0;
      this.Tf.push(a);
      a.load();
      return !0;
    },
    stop: function () {
      this.hb.clear();
    },
    qB: function (a) {
      if (!this.zi(a) || this.ao(a) || this.Mk(a)) return !1;
      var b = ub.find(this.hb, function (c) {
        return -1 < c.Vd.url.indexOf(a);
      });
      if (null == b) return !1;
      this.hb.IB(b, ++this.tt);
      return !0;
    },
    xk: function (a) {
      if (null == this.hb || 0 == this.yo) return 1;
      if (null == a) return this.Et / this.yo;
      for (var b = 0, c = 0, d = 0, e = this.Tf; d < e.length; ) {
        var f = e[d];
        ++d;
        if (null == a || -1 < a.indexOf(f.Vd.url)) ++b, (c += f.Ak());
      }
      for (f = this.hb.iterator(); f.ka(); ) if (((d = f.next()), null == a || -1 < a.indexOf(d.Vd.url))) ++b, (c += 0);
      for (d = 0; d < a.length; ) (f = a[d]), ++d, this.ao(f) && (++b, ++c);
      return 0 == b ? 0 : c / b;
    },
    zi: function (a) {
      function b(c) {
        return -1 < c.Vd.url.indexOf(a);
      }
      return null == this.hb ? !1 : 0 < ub.count(this.hb, b) + ub.count(this.Tf, b);
    },
    ZA: function (a) {
      this.Eo(new fg(a.Vd.url, a.Vd.data, a.Vd.Vf, a.Wd));
      null != a.lh && (a.lh(a), (a.lh = null));
      Y.remove(this.Tf, a);
      this.Et++;
      0 < this.hb.l
        ? ((a = this.hb.di()), this.Tf.push(a), a.load())
        : 0 == this.Tf.length && ((this.wt = this.tt = 0), null != this.Nd && this.Nd());
    },
    YA: function () {
      this.stop();
    },
    ao: function (a) {
      return p.Hn(p.Hd(a));
    },
    Mk: function (a) {
      return p.Mk(p.Hd(a));
    },
    j: gf,
  };
  ff.g = !0;
  ff.Xb = !0;
  ff.prototype = { j: ff };
  ef.g = !0;
  ef.Da = [ff];
  ef.prototype = {
    Ak: function () {
      return this.Vd.progress;
    },
    load: function () {
      var a = this;
      this.Vd.load(
        function () {
          a.pd.ZA(a);
          a.S();
        },
        function () {
          a.pd.YA();
          a.S();
        }
      );
    },
    S: function () {
      this.pd = null;
      this.Vd.S();
    },
    j: ef,
  };
  eg.g = !0;
  eg.Xb = !0;
  kb.g = !0;
  kb.Da = [eg];
  kb.prototype = {
    remove: function (a) {
      if (!this.P.hasOwnProperty(a)) return !1;
      delete this.P[a];
      return !0;
    },
    keys: function () {
      var a = [],
        b;
      for (b in this.P) this.P.hasOwnProperty(b) && a.push(+b);
      return new Md(a);
    },
    iterator: function () {
      return {
        zB: this.P,
        $s: this.keys(),
        ka: function () {
          return this.$s.ka();
        },
        next: function () {
          var a = this.$s.next();
          return this.zB[a];
        },
      };
    },
    j: kb,
  };
  p.g = !0;
  p.U = function () {
    p.Pq = "res";
    p.Ei = new kb();
    p.Vf = new kb();
    p.Yq = [];
    p.dg = 0;
    p.language = null;
    p.Ij = null;
    p.cg = new kb();
    p.XC = "txt csv xml json yaml properties js".split(" ");
    p.Ez = ["png", "jpg"];
    p.bj = new Db();
    p.ek = new kb();
    p.locked = new kb();
  };
  p.kz = function () {
    return p.dg;
  };
  p.mC = function (a) {
    p.dg = a;
    p.Hm(p.vs);
  };
  p.bz = function () {
    return p.language;
  };
  p.qp = function (a) {
    if (null != a && !new fa("^[a-z]{2}$", "").match(a)) throw 5;
    p.language = a;
    a = [];
    0 < a.length &&
      !ub.ge(a, function (b) {
        return b == p.language;
      }) &&
      (p.language = "en");
    p.Hm(p.fA);
  };
  p.Df = function () {
    return p.Ij;
  };
  p.bC = function (a) {
    if (!new fa("^[a-z3]{3}$", "").match(a)) throw 6;
    p.Ij = a;
    p.Hm(p.Lk);
  };
  p.qz = function () {
    return p.XC.slice();
  };
  p.$y = function () {
    return p.Ez.slice();
  };
  p.ni = function (a) {
    if (p.cg.P.hasOwnProperty(a)) return p.cg.P[a];
    if (1e3 < a && Object.prototype.hasOwnProperty.call(p.bj.P, null == a ? "null" : "" + a)) {
      var b = p.bj.P[null == a ? "null" : "" + a];
      return (p.cg.P[a] = b);
    }
    b = p.vg[a];
    if (null == b) return null;
    var c = new fa("{(?:language|audio|x)}", "");
    if (c.match(b)) {
      c = new fa("{language}", "");
      if (c.match(b)) {
        if (null == p.language) return null;
        b = b.replace(c.r, la.Xa(p.language));
      }
      c = new fa("{audio}", "g");
      if (c.match(b)) {
        if (null == p.Ij) return null;
        b = b.replace(c.r, p.Ij);
      }
      c = new fa("{x}", "g");
      if (c.match(b)) {
        if (null == p.dg) return null;
        b = b.replace(c.r, "x" + p.dg);
      }
    }
    p.cg.P[a] = "" + p.Pq + "/" + b;
    return p.cg.P[a];
  };
  p.gs = function () {
    var a;
    null == a && (a = p.ds());
    for (var b = [], c = 0; c < a.length; ) {
      var d = a[c];
      ++c;
      d = p.ni(d);
      null != d && b.push(d);
    }
    return b;
  };
  p.ds = function () {
    for (var a = [], b = 0; 2 > b; ) {
      var c = b++;
      a.push(c);
    }
    return a;
  };
  p.lz = function () {
    for (var a = [], b = 0, c = p.nB; b < c.length; ) {
      var d = c[b];
      ++b;
      p.gv(d) && a.push(d);
    }
    return a;
  };
  p.ks = function () {
    for (var a = [], b = 0, c = p.JB; b < c.length; ) {
      var d = c[b];
      ++b;
      p.gv(d) && a.push(d);
    }
    return a;
  };
  p.Hd = function (a) {
    function b(d, e) {
      d.match(a) && (a = a.replace(d.r, e));
    }
    if (Object.prototype.hasOwnProperty.call(p.bj.P, a)) return la.parseInt(p.bj.P[a]);
    b(new fa("^(" + p.Pq + "/)(.*)", ""), "$2");
    var c = [];
    0 < c.length && b(new fa("([/_])(" + c.join("|") + ")(/|(\\.\\S{3,4}$))", ""), "$1{language}$3");
    b(new fa("([/_])(x[1-4])(/|(\\.\\S{3,4}$))", ""), "$1{x}$3");
    c = ["ogg", "aac"];
    0 < c.length &&
      (b(new fa("(.*?)\\.(" + c.join("|") + ")$", ""), "$1.{audio}"),
      b(new fa("((" + c.join("|") + ")\\/)", ""), "{audio}/"));
    return p.vg.indexOf(a);
  };
  p.Og = function (a) {
    return p.Xq(p.getData(a));
  };
  p.gv = function (a) {
    if (p.Lk(a)) {
      var b = p.Df();
      return null == b
        ? !1
        : ub.ge(["ogg", "aac"], function (c) {
            return c == b;
          });
    }
    return !0;
  };
  p.getData = function (a) {
    return p.Ei.P[a];
  };
  p.setData = function (a, b, c) {
    var d = p.Ei.P.hasOwnProperty(a);
    if (p.ek.P.hasOwnProperty(a))
      (p.locked.P[a] = !0),
        (d = p.ek.P[a]),
        p.ek.remove(a),
        d(a, b, function (f) {
          p.locked.remove(a);
          p.setData(a, f, c);
        });
    else if ((null != c && (p.Vf.P[a] = c), (p.Ei.P[a] = b), !d))
      for (b = p.Yq, d = b.length; -1 < --d; )
        if (b[d].id == a) {
          var e = b[d];
          b[d] = b[b.length - 1];
          b.pop();
          e.oy();
        }
  };
  p.Hn = function (a) {
    return null != p.Ei.P[a];
  };
  p.gz = function (a) {
    return p.Vf.P[a];
  };
  p.Gd = function (a) {
    var b = p.getData(a);
    if (null != b)
      try {
        b instanceof HTMLImageElement
          ? (b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
          : b instanceof HTMLCanvasElement
          ? ((b.width = 1), (b.height = 1))
          : b instanceof ImageBitmap && b.close();
      } catch (c) {}
    return p.Ei.remove(a);
  };
  p.fA = function (a) {
    return new fa("{language}", "").match(p.vg[a]);
  };
  p.Lk = function (a) {
    return 1e3 < a
      ? ((a = p.bj.P[null == a ? "null" : "" + a]), new fa("(ogg|aac|mp3)$", "").match(a))
      : new fa("{audio}", "").match(p.vg[a]);
  };
  p.je = function (a) {
    return new fa("music", "").match(p.vg[a]);
  };
  p.Mk = function (a) {
    return p.locked.P.hasOwnProperty(a);
  };
  p.vs = function (a) {
    return 1e3 < a || (0 > a && 2 <= a) ? !1 : new fa("{x}", "").match(p.vg[a]);
  };
  p.fl = function (a, b) {
    null != p.ni(a) && (p.Hn(a) ? b(a) : p.Yq.push(new dg(a, b)));
  };
  p.AB = function (a, b) {
    p.ek.P[a] = b;
  };
  p.Xq = function (a) {
    if (a instanceof ArrayBuffer) {
      if ("TextDecoder" in window) return (a = new DataView(a)), new TextDecoder("utf-8").decode(a);
      a = xa.$f(a);
      return a.Og(0, a.length);
    }
    return la.Xa(a);
  };
  p.Hm = function (a) {
    for (var b = 0, c = [], d = 0, e = p.ds(); d < e.length; ) {
      var f = e[d];
      ++d;
      a(f) && p.cg.P.hasOwnProperty(f) && c.push(f);
    }
    for (d = c; b < d.length; ) (a = d[b]), ++b, p.cg.remove(a);
  };
  dg.g = !0;
  dg.prototype = {
    oy: function () {
      this.ii(this.id);
      this.ii = null;
    },
    j: dg,
  };
  lc.g = !0;
  lc.encode = function (a) {
    for (
      var b = a.length, c = [1732584193, -271733879, -1732584194, 271733878], d = 64, e = a.length, f = [];
      d <= e;

    ) {
      for (var g = a.substring(d - 64, d), h = 0; 64 > h; )
        (f[h >> 2] =
          g.charCodeAt(h) + (g.charCodeAt(h + 1) << 8) + (g.charCodeAt(h + 2) << 16) + (g.charCodeAt(h + 3) << 24)),
          (h += 4);
      lc.so(c, f);
      d += 64;
    }
    a = a.substring(d - 64);
    f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    d = 0;
    for (e = a.length; d < e; ) (f[d >> 2] |= a.charCodeAt(d) << (d % 4 << 3)), ++d;
    f[d >> 2] |= 128 << (d % 4 << 3);
    if (55 < d) for (lc.so(c, f), d = 0; 16 > d; ) (f[d] = 0), ++d;
    f[14] = 8 * b;
    lc.so(c, f);
    f = lc.aw;
    g = "";
    d = 0;
    for (e = c.length; d < e; )
      for (a = 0, b = c[d++]; 4 > a; ) (g += f[(b >> ((a << 3) + 4)) & 15] + f[(b >> (a << 3)) & 15]), ++a;
    return g;
  };
  lc.so = function (a, b) {
    var c = a[0],
      d = a[1],
      e = a[2],
      f = a[3],
      g = (((c + ((d & e) | (~d & f))) & -1) + ((b[0] + -680876936) & -1)) & -1;
    c = (((g << 7) | (g >>> 25)) + d) & -1;
    g = (((f + ((c & d) | (~c & e))) & -1) + ((b[1] + -389564586) & -1)) & -1;
    f = (((g << 12) | (g >>> 20)) + c) & -1;
    g = (((e + ((f & c) | (~f & d))) & -1) + ((b[2] + 606105819) & -1)) & -1;
    e = (((g << 17) | (g >>> 15)) + f) & -1;
    g = (((d + ((e & f) | (~e & c))) & -1) + ((b[3] + -1044525330) & -1)) & -1;
    d = (((g << 22) | (g >>> 10)) + e) & -1;
    g = (((c + ((d & e) | (~d & f))) & -1) + ((b[4] + -176418897) & -1)) & -1;
    c = (((g << 7) | (g >>> 25)) + d) & -1;
    g = (((f + ((c & d) | (~c & e))) & -1) + ((b[5] + 1200080426) & -1)) & -1;
    f = (((g << 12) | (g >>> 20)) + c) & -1;
    g = (((e + ((f & c) | (~f & d))) & -1) + ((b[6] + -1473231341) & -1)) & -1;
    e = (((g << 17) | (g >>> 15)) + f) & -1;
    g = (((d + ((e & f) | (~e & c))) & -1) + ((b[7] + -45705983) & -1)) & -1;
    d = (((g << 22) | (g >>> 10)) + e) & -1;
    g = (((c + ((d & e) | (~d & f))) & -1) + ((b[8] + 1770035416) & -1)) & -1;
    c = (((g << 7) | (g >>> 25)) + d) & -1;
    g = (((f + ((c & d) | (~c & e))) & -1) + ((b[9] + -1958414417) & -1)) & -1;
    f = (((g << 12) | (g >>> 20)) + c) & -1;
    g = (((e + ((f & c) | (~f & d))) & -1) + ((b[10] + -42063) & -1)) & -1;
    e = (((g << 17) | (g >>> 15)) + f) & -1;
    g = (((d + ((e & f) | (~e & c))) & -1) + ((b[11] + -1990404162) & -1)) & -1;
    d = (((g << 22) | (g >>> 10)) + e) & -1;
    g = (((c + ((d & e) | (~d & f))) & -1) + ((b[12] + 1804603682) & -1)) & -1;
    c = (((g << 7) | (g >>> 25)) + d) & -1;
    g = (((f + ((c & d) | (~c & e))) & -1) + ((b[13] + -40341101) & -1)) & -1;
    f = (((g << 12) | (g >>> 20)) + c) & -1;
    g = (((e + ((f & c) | (~f & d))) & -1) + ((b[14] + -1502002290) & -1)) & -1;
    e = (((g << 17) | (g >>> 15)) + f) & -1;
    g = (((d + ((e & f) | (~e & c))) & -1) + ((b[15] + 1236535329) & -1)) & -1;
    d = (((g << 22) | (g >>> 10)) + e) & -1;
    g = (((c + ((d & f) | (e & ~f))) & -1) + ((b[1] + -165796510) & -1)) & -1;
    c = (((g << 5) | (g >>> 27)) + d) & -1;
    g = (((f + ((c & e) | (d & ~e))) & -1) + ((b[6] + -1069501632) & -1)) & -1;
    f = (((g << 9) | (g >>> 23)) + c) & -1;
    g = (((e + ((f & d) | (c & ~d))) & -1) + ((b[11] + 643717713) & -1)) & -1;
    e = (((g << 14) | (g >>> 18)) + f) & -1;
    g = (((d + ((e & c) | (f & ~c))) & -1) + ((b[0] + -373897302) & -1)) & -1;
    d = (((g << 20) | (g >>> 12)) + e) & -1;
    g = (((c + ((d & f) | (e & ~f))) & -1) + ((b[5] + -701558691) & -1)) & -1;
    c = (((g << 5) | (g >>> 27)) + d) & -1;
    g = (((f + ((c & e) | (d & ~e))) & -1) + ((b[10] + 38016083) & -1)) & -1;
    f = (((g << 9) | (g >>> 23)) + c) & -1;
    g = (((e + ((f & d) | (c & ~d))) & -1) + ((b[15] + -660478335) & -1)) & -1;
    e = (((g << 14) | (g >>> 18)) + f) & -1;
    g = (((d + ((e & c) | (f & ~c))) & -1) + ((b[4] + -405537848) & -1)) & -1;
    d = (((g << 20) | (g >>> 12)) + e) & -1;
    g = (((c + ((d & f) | (e & ~f))) & -1) + ((b[9] + 568446438) & -1)) & -1;
    c = (((g << 5) | (g >>> 27)) + d) & -1;
    g = (((f + ((c & e) | (d & ~e))) & -1) + ((b[14] + -1019803690) & -1)) & -1;
    f = (((g << 9) | (g >>> 23)) + c) & -1;
    g = (((e + ((f & d) | (c & ~d))) & -1) + ((b[3] + -187363961) & -1)) & -1;
    e = (((g << 14) | (g >>> 18)) + f) & -1;
    g = (((d + ((e & c) | (f & ~c))) & -1) + ((b[8] + 1163531501) & -1)) & -1;
    d = (((g << 20) | (g >>> 12)) + e) & -1;
    g = (((c + ((d & f) | (e & ~f))) & -1) + ((b[13] + -1444681467) & -1)) & -1;
    c = (((g << 5) | (g >>> 27)) + d) & -1;
    g = (((f + ((c & e) | (d & ~e))) & -1) + ((b[2] + -51403784) & -1)) & -1;
    f = (((g << 9) | (g >>> 23)) + c) & -1;
    g = (((e + ((f & d) | (c & ~d))) & -1) + ((b[7] + 1735328473) & -1)) & -1;
    e = (((g << 14) | (g >>> 18)) + f) & -1;
    g = (((d + ((e & c) | (f & ~c))) & -1) + ((b[12] + -1926607734) & -1)) & -1;
    d = (((g << 20) | (g >>> 12)) + e) & -1;
    g = (((c + (d ^ e ^ f)) & -1) + ((b[5] + -378558) & -1)) & -1;
    c = (((g << 4) | (g >>> 28)) + d) & -1;
    g = (((f + (c ^ d ^ e)) & -1) + ((b[8] + -2022574463) & -1)) & -1;
    f = (((g << 11) | (g >>> 21)) + c) & -1;
    g = (((e + (f ^ c ^ d)) & -1) + ((b[11] + 1839030562) & -1)) & -1;
    e = (((g << 16) | (g >>> 16)) + f) & -1;
    g = (((d + (e ^ f ^ c)) & -1) + ((b[14] + -35309556) & -1)) & -1;
    d = (((g << 23) | (g >>> 9)) + e) & -1;
    g = (((c + (d ^ e ^ f)) & -1) + ((b[1] + -1530992060) & -1)) & -1;
    c = (((g << 4) | (g >>> 28)) + d) & -1;
    g = (((f + (c ^ d ^ e)) & -1) + ((b[4] + 1272893353) & -1)) & -1;
    f = (((g << 11) | (g >>> 21)) + c) & -1;
    g = (((e + (f ^ c ^ d)) & -1) + ((b[7] + -155497632) & -1)) & -1;
    e = (((g << 16) | (g >>> 16)) + f) & -1;
    g = (((d + (e ^ f ^ c)) & -1) + ((b[10] + -1094730640) & -1)) & -1;
    d = (((g << 23) | (g >>> 9)) + e) & -1;
    g = (((c + (d ^ e ^ f)) & -1) + ((b[13] + 681279174) & -1)) & -1;
    c = (((g << 4) | (g >>> 28)) + d) & -1;
    g = (((f + (c ^ d ^ e)) & -1) + ((b[0] + -358537222) & -1)) & -1;
    f = (((g << 11) | (g >>> 21)) + c) & -1;
    g = (((e + (f ^ c ^ d)) & -1) + ((b[3] + -722521979) & -1)) & -1;
    e = (((g << 16) | (g >>> 16)) + f) & -1;
    g = (((d + (e ^ f ^ c)) & -1) + ((b[6] + 76029189) & -1)) & -1;
    d = (((g << 23) | (g >>> 9)) + e) & -1;
    g = (((c + (d ^ e ^ f)) & -1) + ((b[9] + -640364487) & -1)) & -1;
    c = (((g << 4) | (g >>> 28)) + d) & -1;
    g = (((f + (c ^ d ^ e)) & -1) + ((b[12] + -421815835) & -1)) & -1;
    f = (((g << 11) | (g >>> 21)) + c) & -1;
    g = (((e + (f ^ c ^ d)) & -1) + ((b[15] + 530742520) & -1)) & -1;
    e = (((g << 16) | (g >>> 16)) + f) & -1;
    g = (((d + (e ^ f ^ c)) & -1) + ((b[2] + -995338651) & -1)) & -1;
    d = (((g << 23) | (g >>> 9)) + e) & -1;
    g = (((c + (e ^ (d | ~f))) & -1) + ((b[0] + -198630844) & -1)) & -1;
    c = (((g << 6) | (g >>> 26)) + d) & -1;
    g = (((f + (d ^ (c | ~e))) & -1) + ((b[7] + 1126891415) & -1)) & -1;
    f = (((g << 10) | (g >>> 22)) + c) & -1;
    g = (((e + (c ^ (f | ~d))) & -1) + ((b[14] + -1416354905) & -1)) & -1;
    e = (((g << 15) | (g >>> 17)) + f) & -1;
    g = (((d + (f ^ (e | ~c))) & -1) + ((b[5] + -57434055) & -1)) & -1;
    d = (((g << 21) | (g >>> 11)) + e) & -1;
    g = (((c + (e ^ (d | ~f))) & -1) + ((b[12] + 1700485571) & -1)) & -1;
    c = (((g << 6) | (g >>> 26)) + d) & -1;
    g = (((f + (d ^ (c | ~e))) & -1) + ((b[3] + -1894986606) & -1)) & -1;
    f = (((g << 10) | (g >>> 22)) + c) & -1;
    g = (((e + (c ^ (f | ~d))) & -1) + ((b[10] + -1051523) & -1)) & -1;
    e = (((g << 15) | (g >>> 17)) + f) & -1;
    g = (((d + (f ^ (e | ~c))) & -1) + ((b[1] + -2054922799) & -1)) & -1;
    d = (((g << 21) | (g >>> 11)) + e) & -1;
    g = (((c + (e ^ (d | ~f))) & -1) + ((b[8] + 1873313359) & -1)) & -1;
    c = (((g << 6) | (g >>> 26)) + d) & -1;
    g = (((f + (d ^ (c | ~e))) & -1) + ((b[15] + -30611744) & -1)) & -1;
    f = (((g << 10) | (g >>> 22)) + c) & -1;
    g = (((e + (c ^ (f | ~d))) & -1) + ((b[6] + -1560198380) & -1)) & -1;
    e = (((g << 15) | (g >>> 17)) + f) & -1;
    g = (((d + (f ^ (e | ~c))) & -1) + ((b[13] + 1309151649) & -1)) & -1;
    d = (((g << 21) | (g >>> 11)) + e) & -1;
    g = (((c + (e ^ (d | ~f))) & -1) + ((b[4] + -145523070) & -1)) & -1;
    c = (((g << 6) | (g >>> 26)) + d) & -1;
    g = (((f + (d ^ (c | ~e))) & -1) + ((b[11] + -1120210379) & -1)) & -1;
    f = (((g << 10) | (g >>> 22)) + c) & -1;
    g = (((e + (c ^ (f | ~d))) & -1) + ((b[2] + 718787259) & -1)) & -1;
    e = (((g << 15) | (g >>> 17)) + f) & -1;
    g = (((d + (f ^ (e | ~c))) & -1) + ((b[9] + -343485551) & -1)) & -1;
    a[0] = (c + a[0]) & -1;
    a[1] = (((((g << 21) | (g >>> 11)) + e) & -1) + a[1]) & -1;
    a[2] = (e + a[2]) & -1;
    a[3] = (f + a[3]) & -1;
  };
  pd.g = !0;
  pd.prototype = {
    S: function () {
      this.image = this.Ri = this.lh = this.data = null;
    },
    load: function (a, b) {
      function c(f) {
        return 0 < f.length ? new fa("(?:" + f.join("|") + ")", "i").match(e) : !1;
      }
      var d = this;
      this.lh = a;
      this.Ri = b;
      var e = "";
      pd.state.P[this.url] = 1;
      a = new fa("\\.(\\w+)$", "g");
      a.match(this.url) && (e = a.rb(1));
      c(["ogg", "aac"])
        ? this.gq(this.url, "arraybuffer", null, function (f) {
            d.Nd(f);
          })
        : c(p.$y())
        ? ((this.image = window.document.createElement("img")),
          (this.image.onload = function () {
            d.image.onload = null;
            d.image.onerror = null;
            d.Nd(d.image);
          }),
          (this.image.onerror = function () {}),
          this.gq(this.url, "blob", "jpg" == e ? "image/jpeg" : "image/png", function (f) {
            var g = new FileReader();
            g.onload = function (h) {
              d.Vf = d.vn(h.target.result);
              d.image.src = URL.createObjectURL(f);
              g.onload = null;
              g.onerror = null;
            };
            g.onerror = function () {};
            g.readAsArrayBuffer(f);
          }))
        : ((a = "arraybuffer"),
          c(p.qz()) && (a = "text"),
          this.gq(this.url, a, null, function (f) {
            d.Nd(f);
          }));
    },
    Nd: function (a) {
      this.data = a;
      pd.state.P[this.url] = 2;
      this.lh();
      this.lh = null;
    },
    gq: function (a, b, c, d) {
      var e = this,
        f = new XMLHttpRequest();
      f.onerror = function () {
        null != e.Ri && e.Ri();
        f.onerror = f.onload = f.onprogress = null;
      };
      f.onload = function () {
        e.progress = 1;
        if (404 == f.status) null != e.Ri && e.Ri();
        else {
          var g = f.response;
          f.onerror = f.onload = f.onprogress = null;
          d(g);
        }
      };
      f.onprogress = function (g) {
        0 < g.total && (e.progress = g.loaded / g.total);
      };
      try {
        f.open("GET", null != this.$l ? "" + a + "?" + this.$l : a, !0),
          null != c && f.setRequestHeader("Content-Type", c),
          (f.responseType = b),
          f.send();
      } catch (g) {}
      return f;
    },
    vn: function (a) {
      var b = new Uint8Array(a),
        c = b.byteLength;
      if (69 == b[c - 1]) {
        var d = b[c - 3];
        b = b[c - 6] | (b[c - 5] << 8) | (b[c - 4] << 16);
        c = a.slice(c - (b + 6), c - 6);
        if (0 < (d & 1)) {
          b = xa.$f(a.slice(0, a.byteLength - (b + 6)));
          b = qb.encode(b);
          b = lc.encode(b);
          a = [];
          for (d = 0; 32 > d; ) {
            var e = d++;
            a.push(Y.Km(b, e));
          }
          var f = a;
          b = new Uint8Array(c);
          a = 0;
          for (d = c.byteLength; a < d; ) (e = a++), (b[e] ^= f[e & 31]);
        }
        return c;
      }
      return null;
    },
    j: pd,
  };
  Aa.g = !0;
  Aa.Bf = function () {
    null != Ga.ib && (Ga.ib.o(), N.close());
  };
  Aa.start = function () {
    var a = N.create();
    return (Aa.enabled = a);
  };
  Aa.Ts = function () {
    return N.Ys();
  };
  Aa.Df = function () {
    return N.Df();
  };
  Aa.he = function () {
    return Ga.instance();
  };
  od.g = !0;
  od.prototype = { j: od };
  Ga.g = !0;
  Ga.instance = function () {
    if (null != Ga.ib) return Ga.ib;
    var a = Aa.Ts();
    return (Ga.ib = a ? new df() : new Ga());
  };
  Ga.prototype = {
    o: function () {
      Ga.ib = null;
      for (var a = this.Qc.iterator(); a.ka(); ) a.next().o();
      this.Qc.S();
      this.Qc = null;
      for (var b = 0; 4096 > b; ) {
        a = b++;
        var c = this.Dc[a];
        null != c && (c.data = null);
        this.Dc[a] = null;
      }
      this.Dc = null;
    },
    xh: function () {},
    Yi: function () {},
    play: function () {
      return -1;
    },
    Yc: function (a) {
      return 0 > a
        ? !1
        : 1e4 > a
        ? ub.ge(this.Qc, function (b) {
            return b.Ce.id == a;
          })
        : ub.ge(this.Qc, function (b) {
            return b.id == a;
          });
    },
    Hd: function (a) {
      var b = ub.find(this.Qc, function (c) {
        return c.Ce.id == a;
      });
      return null != b ? b.id : -1;
    },
    hA: function (a) {
      return null != this.Dc[a];
    },
    vd: function (a) {
      this.no = z.ce(a);
      this.Dv();
      this.Gv();
    },
    zu: function (a, b, c) {
      if (!this.enabled || !this.hA(a)) return -1;
      if (b && this.Yc(a)) return this.Hd(a);
      b && (c = !0);
      if (!c && this.YC(a)) return -1;
      a = this.iz(this.Dc[a].je, c);
      return 0 > a ? -1 : a;
    },
    Ut: function (a) {
      this.Qc.add(a);
      this.Qc.l > this.ot && (this.ot = this.Qc.l);
    },
    Tt: function (a) {
      this.Be &= ~(1 << a.channel);
      this.Qc.remove(a);
      null != a.Nd && (a.Nd(), (a.Nd = null));
    },
    YC: function (a) {
      a = this.Dc[a];
      if (a.je) return !1;
      var b = Y.now() / 1e3;
      if (b - a.dt < this.ZC) return !0;
      a.dt = b;
      return !1;
    },
    iz: function (a, b) {
      if (a) {
        for (var c = 0; c < this.st; ) {
          if (0 == (this.Be & (1 << c))) return (this.Be |= 1 << c), c;
          ++c;
        }
        return -1;
      }
      c = -1;
      var d = this.st;
      for (a = d + this.BA; d < a; ) {
        if (0 == (this.Be & (1 << d))) {
          this.Be |= 1 << d;
          c = d;
          break;
        }
        ++d;
      }
      if (b && 0 > c) {
        b = null;
        a = 0;
        for (c = this.Qc.iterator(); c.ka(); )
          (d = c.next()), !d.Ce.je && !d.loop && d.xk() > a && ((a = d.xk()), (b = d));
        if (null == b) return -1;
        c = b.channel;
        b.stop();
      }
      return c;
    },
    Dv: function () {
      var a = this.Qc,
        b = a.i,
        c = 0;
      for (a = a.l; c < a; ) {
        var d = c++;
        d = b[d];
        d.Ce.je && d.tp(d.Pg());
      }
    },
    Gv: function () {
      var a = this.Qc,
        b = a.i,
        c = 0;
      for (a = a.l; c < a; ) {
        var d = c++;
        d = b[d];
        d.Ce.je || d.tp(d.Pg());
      }
    },
    j: Ga,
  };
  cg.g = !0;
  cg.prototype = { j: cg };
  Hc.g = !0;
  Hc.us = function (a) {
    a = xa.$f(a);
    return 83 == a.b[0] && 80 == a.b[1] ? 82 == a.b[2] : !1;
  };
  Hc.EB = function (a) {
    var b = new pb(xa.$f(a), 3);
    return a.slice(5 + b.$a());
  };
  Hc.Oy = function (a) {
    if (!Hc.us(a)) throw 7;
    a = new pb(xa.$f(a), 5);
    for (var b = [], c = 0, d = a.$a(); c < d; ) {
      c++;
      for (var e = "", f = 0, g = a.$a(); f < g; ) {
        f++;
        var h = a.$();
        e += String.fromCodePoint(h);
      }
      f = a.$a();
      g = a.qu();
      h = a.qu();
      b.push(new cg(e, f, g, h));
    }
    return b;
  };
  Pb.g = !0;
  Pb.prototype = {
    o: function () {
      this.eg = this.Ce = null;
      this.Ug = !0;
    },
    Pg: function () {
      return this.Ug ? NaN : this.volume;
    },
    tp: function (a) {
      this.Ug || ((this.volume = a), this.Hv());
    },
    xk: function () {
      return this.Ug ? NaN : this.js() / this.uk();
    },
    j: Pb,
  };
  N.g = !0;
  N.aA = function () {
    return N.active;
  };
  N.Nk = function () {
    return null != N.vj && N.vj ? "suspended" == N.context.state : !1;
  };
  N.resume = function () {
    if (null != N.context && N.Nk())
      try {
        "suspended" == N.context.state &&
          N.context.resume().then(function () {
            N.active = !0;
            N.eh.notify(function (a) {
              a();
            });
            N.eh.Tj();
          });
      } catch (a) {}
  };
  N.Ys = function () {
    if (null != N.vj) return N.vj;
    try {
      N.vj = !(!window.AudioContext && !window.webkitAudioContext);
    } catch (a) {
      N.vj = !1;
    }
    return N.Ys();
  };
  N.Df = function () {
    var a = N.Hj;
    if ("undefined" !== typeof a) return a;
    if (-1 != B.navigator.userAgent.indexOf("EdgA/")) return (N.Hj = "ogg");
    var b = null;
    try {
      b = "undefined" !== typeof Audio ? new Audio() : null;
    } catch (h) {
      return null;
    }
    if (!b || "function" !== typeof b.canPlayType) return null;
    var c = { probably: 2, maybe: 1, "": 0 },
      d = null;
    d = function (h) {
      if (h instanceof Array) {
        for (var k = 0, l = 0; l < h.length; ) {
          var m = h[l];
          ++l;
          m = d(m);
          m > k && (k = m);
        }
        return k;
      }
      return H.T(c, b.canPlayType(h).replace(/^no$/, ""));
    };
    a = {};
    a.mp3 = d("audio/mp3;");
    a.ogg = d('audio/ogg; codecs="vorbis"');
    a.aac = d("audio/aac;");
    var e = B.navigator.userAgent;
    if (-1 < e.indexOf("OPR") || -1 < e.indexOf("YaBrowser")) a.aac = 0;
    e = 0;
    for (var f = ["aac", "ogg", "mp3"]; e < f.length; ) {
      var g = f[e];
      ++e;
      if (0 < H.T(a, g)) return (N.Hj = g);
    }
    return (N.Hj = null);
  };
  N.create = function () {
    if (null != N.context) return !0;
    try {
      if (
        ("undefined" !== typeof AudioContext
          ? (N.context = new AudioContext())
          : "undefined" !== typeof webkitAudioContext && (N.context = new webkitAudioContext()),
        (N.context.onstatechange = function () {
          N.active = !N.Nk();
        }),
        (N.active = !N.Nk()),
        !N.active)
      ) {
        var a = null;
        a = function (b) {
          "touchend" == b.type && b.preventDefault();
          N.Nk() ? N.resume() : (window.removeEventListener("mouseup", a), window.removeEventListener("touchend", a));
        };
        window.addEventListener("mouseup", a);
        window.addEventListener("touchend", a);
      }
    } catch (b) {
      N.context = null;
    }
    return null != N.context;
  };
  N.close = function () {
    try {
      N.context.close();
    } catch (a) {}
  };
  nd.g = !0;
  nd.D = Ga;
  nd.prototype = u(Ga.prototype, {
    xh: function (a, b, c, d, e) {
      null == c && (c = !1);
      var f = this;
      Ga.prototype.xh.call(this, a, b, c, d, e);
      var g = !1,
        h = new Audio(),
        k = null;
      k = function () {
        h.removeEventListener("canplaythrough", k);
        g = !0;
      };
      h.addEventListener("canplaythrough", k, !1);
      h.src = URL.createObjectURL(b);
      h.preload = "auto";
      var l = new kd(100);
      l.ud = function () {
        if (g && 4 == h.readyState) {
          var m = f.Dc,
            n = new od(a, h, c);
          m[a] = n;
          d(h);
          l.stop();
        }
      };
    },
    Yi: function (a, b, c) {
      for (var d = this, e = 0; e < a.length; ) {
        var f = a[e];
        ++e;
        this.Ob[f.id] = f;
      }
      Ga.prototype.Yi.call(this, a, b, c);
      this.xh(++nd.Vw, b, !1, function (g) {
        for (var h = 0, k = a.length; h < k; ) {
          var l = h++;
          l = a[l].id;
          d.Dc[l] = new od(l, g, !1);
        }
        c(g);
      });
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = !1);
      null == b && (b = !1);
      c = this.zu(a, b, c);
      if (0 > c) return -1;
      a = 1001 <= a ? new Rd(this, this.Dc[a], a, !1) : new Rd(this, this.Dc[a], null, b);
      a.id = this.At++;
      a.channel = c;
      a.loop = b;
      a.offset = d;
      this.Ut(a);
      return a.id;
    },
    j: nd,
  });
  Rd.g = !0;
  Rd.D = Pb;
  Rd.prototype = u(Pb.prototype, {
    o: function () {
      this.node.pause();
      this.node.removeEventListener("timeupdate", L(this, this.Vt));
      this.node.removeEventListener("loadedmetadata", L(this, this.Lo));
      this.node = this.node.onended = null;
      this.eg.Tt(this);
      this.Yc = !1;
      null != this.Qb && (this.Qb.stop(), (this.Qb = this.Qb.ud = null));
      Pb.prototype.o.call(this);
    },
    js: function () {
      return (this.node.currentTime - this.min) % this.uk();
    },
    uk: function () {
      return this.max - this.min;
    },
    stop: function (a) {
      null == a && (a = 0);
      this.Yc && !this.stopped && ((this.stopped = !0), 0 < a ? kd.delay(L(this, this.o), (1e3 * a) | 0) : this.o());
    },
    Vt: function () {
      this.node.currentTime > this.max && this.stop();
    },
    Lo: function () {
      this.node.currentTime = this.min;
      this.node.removeEventListener("loadedmetadata", L(this, this.Lo));
    },
    Hv: function () {
      var a = (this.Ce.je ? this.eg.uA : this.eg.vA) * this.eg.no,
        b = this.Pg();
      this.node.volume = a * b;
    },
    j: Rd,
  });
  df.g = !0;
  df.D = Ga;
  df.prototype = u(Ga.prototype, {
    xh: function (a, b, c, d, e) {
      null == c && (c = !1);
      var f = this;
      Ga.prototype.xh.call(this, a, b, c, d, e);
      this.decode(b, function (g) {
        if (null == g) d(null);
        else {
          var h = f.Dc,
            k = new od(a, g, c);
          h[a] = k;
          d(g);
        }
      });
    },
    Yi: function (a, b, c) {
      var d = this;
      Ga.prototype.Yi.call(this, a, b, c);
      this.decode(b, function (e) {
        if (null == e) c(null);
        else
          try {
            for (var f = d.split(e, a), g = 0, h = a.length; g < h; ) {
              var k = g++,
                l = a[k].id;
              d.Dc[l] = new od(l, f[k], !1);
            }
            c(e);
          } catch (m) {}
      });
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = !1);
      null == b && (b = !1);
      if (!Aa.enabled || null == N.context || !N.aA()) return -1;
      c = this.zu(a, b, c);
      if (0 > c) return -1;
      a = new Gc(this, this.Dc[a]);
      a.id = this.At++;
      a.channel = c;
      a.loop = b;
      a.offset = d;
      a.play();
      this.Ut(a);
      return a.id;
    },
    vd: function (a) {
      null != N.context && ((this.no = z.ce(a)), this.un().Nu(a));
    },
    Dv: function () {},
    Gv: function () {},
    decode: function (a, b) {
      new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(2, 1323e4, 44100).decodeAudioData(
        a,
        function (c) {
          b(c);
        },
        function () {
          b(null);
        }
      );
    },
    un: function () {
      null == this.Vk && ((this.Vk = new Fc()), (this.Vk.type = 5), this.Vk.connect(new cf()));
      return this.Vk;
    },
    fz: function () {
      null == this.Xk && ((this.Xk = new Fc()), (this.Xk.type = 3), this.Xk.connect(this.un()));
      return this.Xk;
    },
    ez: function () {
      null == this.Wk && ((this.Wk = new Fc()), (this.Wk.type = 4), this.Wk.connect(this.un()));
      return this.Wk;
    },
    $x: function (a) {
      var b = window.OfflineAudioContext;
      null == b && (b = window.webkitOfflineAudioContext);
      return new b(2, 44100 * a, 44100);
    },
    split: function (a, b) {
      var c = this.$x(Math.ceil((2 * b[b.length - 1].max) / 1e3)),
        d = a.sampleRate,
        e = [],
        f = 0,
        g = b.length;
      if (1 == a.numberOfChannels)
        for (var h = a.getChannelData(0); f < g; ) {
          a = b[f++];
          var k = ((d / 1e3) * a.min) | 0,
            l = ((d / 1e3) * a.max) | 0;
          a = c.createBuffer(1, l - k, d);
          k = h.subarray(k, l);
          try {
            a.copyToChannel(k, 0);
          } catch (q) {
            a.getChannelData(0).set(k);
          }
          e.push(a);
        }
      else {
        h = a.getChannelData(0);
        for (var m = a.getChannelData(1); f < g; ) {
          a = b[f++];
          k = ((d / 1e3) * a.min) | 0;
          l = ((d / 1e3) * a.max) | 0;
          a = c.createBuffer(2, l - k, d);
          var n = h.subarray(k, l);
          k = m.subarray(k, l);
          try {
            a.copyToChannel(n, 0), a.copyToChannel(k, 1);
          } catch (q) {
            a.getChannelData(0).set(n), a.getChannelData(1).set(k);
          }
          e.push(a);
        }
      }
      return e;
    },
    j: df,
  });
  Gc.g = !0;
  Gc.D = Pb;
  Gc.prototype = u(Pb.prototype, {
    o: function () {
      if (!this.Ug) {
        var a = this.fd;
        a: for (; null != a; ) {
          var b = a.ph;
          switch (a.type) {
            case 0:
              this.Yc && ((this.Yc = !1), this.fd.stop(0));
              break;
            case 1:
            case 2:
              break;
            default:
              break a;
          }
          Y.remove(a.ph.inputs, a);
          a.n.disconnect();
          a.o();
          a = b;
        }
        this.fd = this.data = null;
        a = this.eg;
        Pb.prototype.o.call(this);
        a.Tt(this);
      }
    },
    play: function () {
      if (!this.Ug) {
        this.Yc = !0;
        this.fd = new bf();
        var a = this.eg;
        this.fd.connect(this.Ce.je ? a.ez() : a.fz());
        this.startTime = N.context.currentTime;
        this.fd.play(this.data, this.loop, this.offset, L(this, this.onended));
      }
    },
    stop: function (a) {
      null == a && (a = 0);
      this.Ug || !this.Yc || this.stopped || ((this.stopped = !0), this.fd.stop(N.context.currentTime + a));
    },
    js: function () {
      return (this.offset + (N.context.currentTime - this.startTime)) % this.uk();
    },
    uk: function () {
      return this.data.duration;
    },
    Pg: function () {
      if (null != this.po) {
        if (N.context.currentTime < this.po) return this.fd.get(2).n.gain.value;
        this.po = null;
      }
      return this.volume;
    },
    Hv: function () {
      var a = this.Zy();
      null != a && a.Nu(this.Pg());
    },
    onended: function () {
      this.Yc && ((this.Yc = !1), this.o());
    },
    Zy: function () {
      if (!Gc.Xr || null == this.fd) return null;
      try {
        var a = this.fd.get(2);
        if (null == a) {
          a = new Fc();
          var b = this.fd.get(1);
          null == b ? this.fd.append(a) : b.append(a);
        }
        return a;
      } catch (c) {
        return (Gc.Xr = !1), null;
      }
    },
    j: Gc,
  });
  Wa.g = !0;
  Wa.prototype = {
    get: function (a) {
      for (var b = this; null != b; ) {
        if (b.type == a) return b;
        b = b.ph;
      }
      return null;
    },
    o: function () {
      this.n = this.ph = this.inputs = null;
    },
    connect: function (a) {
      this.ph = a;
      a.inputs.push(this);
      this.n.disconnect();
      this.n.connect(a.n);
    },
    append: function (a) {
      Y.remove(this.ph.inputs, this);
      a.connect(this.ph);
      this.connect(a);
    },
    j: Wa,
  };
  cf.g = !0;
  cf.D = Wa;
  cf.prototype = u(Wa.prototype, { j: cf });
  bf.g = !0;
  bf.D = Wa;
  bf.prototype = u(Wa.prototype, {
    o: function () {
      this.n.onended = null;
      Wa.prototype.o.call(this);
    },
    play: function (a, b, c, d) {
      var e = this.n;
      e.buffer = a;
      e.loop = b;
      e.start(0, c);
      e.onended = d;
    },
    stop: function (a) {
      null == a && (a = 0);
      this.n.stop(a);
    },
    j: bf,
  });
  Fc.g = !0;
  Fc.D = Wa;
  Fc.prototype = u(Wa.prototype, {
    QD: function () {
      return this.n.gain.value;
    },
    Nu: function (a) {
      this.n.gain.value = a;
    },
    j: Fc,
  });
  bg.g = !0;
  bg.D = Wa;
  bg.prototype = u(Wa.prototype, { j: bg });
  vc.g = !0;
  vc.Da = [mc];
  vc.prototype = {
    Ju: function (a) {
      for (var b = this.i, c = 0, d = this.ga * this.sa; c < d; ) {
        var e = c++;
        b[e] = a;
      }
      return this;
    },
    inRange: function (a, b) {
      return 0 <= a && a < this.ga && 0 <= b ? b < this.sa : !1;
    },
    nz: function (a, b) {
      a *= this.ga;
      for (var c = this.i, d = 0, e = this.ga; d < e; ) {
        var f = d++;
        b[f] = c[a + f];
      }
      return b;
    },
    forEach: function (a) {
      for (var b = this.i, c = this.ga, d = 0, e = this.ga * this.sa; d < e; ) {
        var f = d++;
        b[f] = a(b[f], f % c, (f / c) | 0);
      }
      return this;
    },
    eo: function (a) {
      for (var b = this.i, c = 0, d = this.ga * this.sa; c < d; ) {
        var e = c++;
        a(b[e]);
      }
      return this;
    },
    jx: function (a) {
      var b = Array((this.ga + 1) * this.sa);
      ba.kb(this.i, 0, b, 0, this.ga * this.sa);
      this.i = b;
      b = this.ga * this.sa + this.sa;
      for (var c = this.sa - 1, d = this.sa, e = this.ga, f = this.i; 0 < b--; )
        ++e > this.ga ? ((e = 0), --d, (f[b] = a[c--])) : (f[b] = f[b - d]);
      this.ga++;
      return this;
    },
    pB: function (a) {
      var b = Array((this.ga + 1) * this.sa);
      ba.kb(this.i, 0, b, 0, this.ga * this.sa);
      this.i = b;
      b = this.ga * this.sa + this.sa;
      for (var c = this.sa - 1, d = this.sa, e = 0, f = this.i; 0 < b--; )
        ++e > this.ga ? ((e = 0), --d, (f[b] = a[c--])) : (f[b] = f[b - d]);
      this.ga++;
      return this;
    },
    iterator: function () {
      if (this.Mc) {
        if (null == this.Ia) this.Ia = new Qd(this);
        else {
          var a = this.Ia;
          a.i = a.gb.i;
          var b = a.gb;
          a.Va = b.ga * b.sa;
          a.wa = 0;
        }
        return this.Ia;
      }
      return new Qd(this);
    },
    j: vc,
  };
  Ec.g = !0;
  Ec.Xb = !0;
  Ec.prototype = { j: Ec };
  Qd.g = !0;
  Qd.Da = [Ec];
  Qd.prototype = {
    ka: function () {
      return this.wa < this.Va;
    },
    next: function () {
      return this.i[this.wa++];
    },
    j: Qd,
  };
  md.g = !0;
  md.prototype = { j: md };
  Pd.g = !0;
  Pd.Da = [Ec];
  Pd.prototype = {
    S: function () {
      this.i = this.gb = null;
    },
    ka: function () {
      return this.wa < this.Va;
    },
    next: function () {
      return this.i[this.wa++];
    },
    remove: function () {
      this.gb.DB(--this.wa);
      this.Va--;
    },
    j: Pd,
  };
  af.g = !0;
  af.Xb = !0;
  af.Da = [mc];
  ed.g = !0;
  ed.Da = [af];
  ed.prototype = {
    enqueue: function (a) {
      this.J == this.l && this.grow();
      this.i[(this.l++ + this.Sa) % this.J] = a;
    },
    di: function () {
      var a = this.i[this.Sa++];
      this.Sa == this.J && (this.Sa = 0);
      this.l--;
      return a;
    },
    clear: function (a) {
      null == a && (a = !1);
      a && ba.Zc(this.i);
      this.Sa = this.l = 0;
    },
    nj: function () {
      if (0 == this.l) return [];
      for (var a = this.i, b = Array(this.l), c = 0, d = this.l; c < d; ) {
        var e = c++;
        b[e] = a[(e + this.Sa) % this.J];
      }
      return b;
    },
    grow: function () {
      var a = this.J;
      this.J = kc.hd(this.bc, this.J);
      this.se(a, this.J);
    },
    se: function (a, b) {
      var c = Array(b);
      a < b
        ? this.Sa + this.l > a
          ? ((b = a - this.Sa), (a -= b), ba.kb(this.i, this.Sa, c, 0, b), ba.kb(this.i, 0, c, b, a))
          : ba.kb(this.i, this.Sa, c, 0, this.l)
        : this.Sa + this.l > a
        ? ((b = a - this.Sa), (a = this.l - this.Sa), ba.kb(this.i, this.Sa, c, 0, b), ba.kb(this.i, 0, c, this.Sa, a))
        : ba.kb(this.i, this.Sa, c, 0, this.l);
      this.i = c;
      this.Sa = 0;
    },
    j: ed,
  };
  ag.g = !0;
  ag.Xb = !0;
  ag.Da = [mc];
  Tb.g = !0;
  Tb.Da = [ag];
  Tb.prototype = {
    top: function () {
      return this.i[this.Ma - 1];
    },
    push: function (a) {
      this.Ma == this.J && this.grow();
      this.i[this.Ma++] = a;
    },
    S: function () {
      ba.Zc(this.i);
      this.i = null;
      null != this.Ia && (this.Ia.S(), (this.Ia = null));
    },
    clear: function (a) {
      null == a && (a = !1);
      a && ba.Zc(this.i);
      this.Ma = 0;
    },
    grow: function () {
      this.J = kc.hd(this.bc, this.J);
      this.se(this.J);
    },
    se: function (a) {
      a = Array(a);
      ba.kb(this.i, 0, a, 0, this.Ma);
      this.i = a;
    },
    j: Tb,
  };
  $e.g = !0;
  $e.Da = [mc];
  $e.prototype = {
    tm: function (a) {
      if (null != a.Me) return a;
      this.l++;
      a.next = this.nc;
      null != a.next && (a.next.Cb = a);
      this.nc = a;
      a.Me = this;
      return a;
    },
    removeNode: function (a) {
      if (0 == this.l || null == a.Me) return this;
      this.sD(a);
      null != a.Cb && (a.Cb.next = a.next);
      null != a.next && (a.next.Cb = a.Cb);
      this.nc == a && (this.nc = a.next);
      this.l--;
      a.Me = null;
      a.next = a.Cb = null;
      return this;
    },
    Cq: function (a, b) {
      for (var c = this.nc; null != c; ) {
        if (c == a) {
          a = c;
          for (c = this.nc; null != c; ) {
            if (c == b) {
              a.Aq(c);
              c.Aq(a);
              break;
            }
            c = c.next;
          }
          break;
        }
        c = c.next;
      }
      return this;
    },
    sD: function (a) {
      if (null == a.Me) return a;
      for (var b = a.va; null != b; ) {
        for (var c = b.node, d = c.va; null != d; ) {
          var e = d.next;
          d.node == a &&
            (null != d.Cb && (d.Cb.next = e),
            null != e && (e.Cb = d.Cb),
            c.va == d && (c.va = e),
            d.S(),
            c.xo--,
            null != this.aj && this.aj(d));
          d = e;
        }
        c = b.next;
        null != b.Cb && (b.Cb.next = c);
        null != c && (c.Cb = b.Cb);
        a.va == b && (a.va = c);
        b.S();
        a.xo--;
        null != this.aj && this.aj(b);
        b = c;
      }
      a.va = null;
      return a;
    },
    clearMarks: function () {
      for (var a = this.nc; null != a; ) (a.ta = !1), (a = a.next);
      return this;
    },
    Lx: function () {
      for (var a = this.nc; null != a; ) (a.parent = null), (a = a.next);
      return this;
    },
    fk: function (a, b, c, d, e) {
      null == e && (e = !1);
      null == a && (a = !1);
      if (0 == this.l) return this;
      this.wm && this.clearMarks();
      var f = 1;
      null == b && (b = this.nc);
      var g = this.Tk,
        h = this.Zg;
      h[0] = b;
      b.parent = b;
      b.depth = 0;
      if (a)
        if (null == c)
          if (e) (c = b.oa), c.Bc(!0, d) && this.hk(b, !0, d);
          else {
            b = h[0];
            c = b.oa;
            if (!c.Bc(!0, d)) return this;
            for (; 0 < f; )
              if (((b = h[--f]), !b.ta && b.visible)) {
                b.ta = !0;
                c = b.oa;
                if (!c.Bc(!1, d)) break;
                for (a = b.va; null != a; )
                  a.node.visible &&
                    ((c = b.oa),
                    (a.node.parent = b),
                    (a.node.depth = b.depth + 1),
                    c.Bc(!0, d) && ((e = a.node), f == g && (h = this.Dl((g *= 2))), (h[f++] = e))),
                    (a = a.next);
              }
          }
        else if (e) c(b, !0, d) && this.gk(b, c, !0, d);
        else {
          b = h[0];
          if (!c(b, !0, d)) return this;
          for (; 0 < f; )
            if (((b = h[--f]), !b.ta && b.visible)) {
              b.ta = !0;
              if (!c(b, !1, d)) break;
              for (a = b.va; null != a; )
                a.node.visible &&
                  ((a.node.parent = b),
                  (a.node.depth = b.depth + 1),
                  c(a.node, !0, d) && ((e = a.node), f == g && (h = this.Dl((g *= 2))), (h[f++] = e))),
                  (a = a.next);
            }
        }
      else if (null == c)
        if (e) this.hk(b, !1, d);
        else
          for (; 0 < f; ) {
            if (((b = h[--f]), !b.ta && b.visible)) {
              b.ta = !0;
              c = b.oa;
              if (!c.Bc(!1, d)) break;
              for (a = b.va; null != a; )
                a.node.visible &&
                  ((e = a.node),
                  f == g && (h = this.Dl((g *= 2))),
                  (h[f++] = e),
                  (a.node.parent = b),
                  (a.node.depth = b.depth + 1)),
                  (a = a.next);
            }
          }
      else if (e) this.gk(b, c, !1, d);
      else
        for (; 0 < f; )
          if (((b = h[--f]), !b.ta && b.visible)) {
            b.ta = !0;
            if (!c(b, !1, d)) break;
            for (a = b.va; null != a; )
              a.node.visible &&
                ((e = a.node),
                f == g && (h = this.Dl((g *= 2))),
                (h[f++] = e),
                (a.node.parent = b),
                (a.node.depth = b.depth + 1)),
                (a = a.next);
          }
      return this;
    },
    mx: function (a, b, c, d) {
      null == a && (a = !1);
      if (0 == this.l) return this;
      this.wm && this.clearMarks();
      var e = 0,
        f = 1,
        g = this.oc,
        h = this.Ii;
      null == b && (b = this.nc);
      g[0] = b;
      b.ta = !0;
      b.parent = b;
      b.depth = 0;
      if (a)
        if (null == c) {
          a = g[e];
          c = a.oa;
          if (!c.Bc(!0, d)) return this;
          for (; 0 < f; ) {
            a = g[e];
            c = a.oa;
            if (!c.Bc(!1, d)) break;
            for (b = a.va; null != b; ) {
              var k = b.node;
              if (
                !k.ta &&
                k.visible &&
                ((k.ta = !0), (k.parent = a), (k.depth = a.depth + 1), (c = k.oa), c.Bc(!0, d))
              ) {
                var l = f++ + e;
                l == h && (this.Ze((h *= 2)), (g = this.oc));
                g[l] = k;
              }
              b = b.next;
            }
            ++e;
            --f;
          }
        } else {
          a = g[e];
          if (!c(a, !0, d)) return this;
          for (; 0 < f; ) {
            a = g[e];
            if (!c(a, !1, d)) break;
            for (b = a.va; null != b; )
              (k = b.node),
                !k.ta &&
                  k.visible &&
                  ((k.ta = !0),
                  (k.parent = a),
                  (k.depth = a.depth + 1),
                  c(k, !0, d) && ((l = f++ + e), l == h && (this.Ze((h *= 2)), (g = this.oc)), (g[l] = k))),
                (b = b.next);
            ++e;
            --f;
          }
        }
      else if (null == c)
        for (; 0 < f; ) {
          a = g[e];
          c = a.oa;
          if (!c.Bc(!1, d)) break;
          for (b = a.va; null != b; )
            (k = b.node),
              !k.ta &&
                k.visible &&
                ((k.ta = !0),
                (k.parent = a),
                (k.depth = a.depth + 1),
                (l = f++ + e),
                l == h && (this.Ze((h *= 2)), (g = this.oc)),
                (g[l] = k)),
              (b = b.next);
          ++e;
          --f;
        }
      else
        for (; 0 < f; ) {
          a = g[e];
          if (!c(a, !1, d)) break;
          for (b = a.va; null != b; )
            (k = b.node),
              !k.ta &&
                k.visible &&
                ((k.ta = !0),
                (k.parent = a),
                (k.depth = a.depth + 1),
                (l = f++ + e),
                l == h && (this.Ze((h *= 2)), (g = this.oc)),
                (g[l] = k)),
              (b = b.next);
          ++e;
          --f;
        }
      return this;
    },
    Cr: function (a, b, c, d, e) {
      null == b && (b = !1);
      if (0 == this.l) return this;
      this.wm && this.clearMarks();
      var f = 0,
        g = 1,
        h = this.oc,
        k = this.Ii;
      null == c && (c = this.nc);
      for (var l = this.nc; null != l; ) (l.depth = 0), (l = l.next);
      c.ta = !0;
      c.parent = c;
      h[0] = c;
      if (b)
        if (null == d) {
          b = h[f];
          d = b.oa;
          if (!d.Bc(!0, e)) return this;
          for (; 0 < g; ) {
            b = h[f];
            d = b.oa;
            if (!d.Bc(!1, e)) break;
            for (c = b.va; null != c; ) {
              l = c.node;
              if (
                !l.ta &&
                l.visible &&
                ((l.ta = !0), (l.parent = b), (l.depth = b.depth + 1), l.depth <= a && ((d = l.oa), d.Bc(!0, e)))
              ) {
                var m = g++ + f;
                m == k && (this.Ze((k *= 2)), (h = this.oc));
                h[m] = l;
              }
              c = c.next;
            }
            ++f;
            --g;
          }
        } else {
          b = h[f];
          if (!d(b, !0, e)) return this;
          for (; 0 < g; ) {
            b = h[f];
            if (!d(b, !1, e)) break;
            for (c = b.va; null != c; )
              (l = c.node),
                !l.ta &&
                  l.visible &&
                  ((l.ta = !0),
                  (l.parent = b),
                  (l.depth = b.depth + 1),
                  l.depth <= a &&
                    d(l, !0, e) &&
                    ((m = g++ + f), m == k && (this.Ze((k *= 2)), (h = this.oc)), (h[m] = l))),
                (c = c.next);
            ++f;
            --g;
          }
        }
      else if (null == d)
        for (; 0 < g; ) {
          b = h[f];
          d = b.oa;
          if (!d.Bc(!1, e)) break;
          for (c = b.va; null != c; )
            (l = c.node),
              !l.ta &&
                l.visible &&
                ((l.ta = !0),
                (l.depth = b.depth + 1),
                (l.parent = b),
                l.depth <= a && ((m = g++ + f), m == k && (this.Ze((k *= 2)), (h = this.oc)), (h[m] = l))),
              (c = c.next);
          ++f;
          --g;
        }
      else
        for (; 0 < g; )
          if (((b = h[f]), b.depth > a)) --g, ++f;
          else {
            if (!d(b, !1, e)) break;
            for (c = b.va; null != c; )
              (l = c.node),
                !l.ta &&
                  l.visible &&
                  ((l.ta = !0),
                  (l.depth = b.depth + 1),
                  (l.parent = b),
                  l.depth <= a && ((m = g++ + f), m == k && (this.Ze((k *= 2)), (h = this.oc)), (h[m] = l))),
                (c = c.next);
            ++f;
            --g;
          }
      return this;
    },
    S: function () {
      for (var a = this.nc; null != a; ) {
        for (var b = a.next, c = a.va; null != c; ) {
          var d = c.next;
          c.next = c.Cb = null;
          c.node = null;
          c = d;
        }
        a.S();
        a = b;
      }
      this.nc = null;
      ba.Zc(this.Zg);
      this.Zg = null;
      ba.Zc(this.oc);
      this.oc = null;
      null != this.Ia && (this.Ia.S(), (this.Ia = null));
      this.aj = this.Bm = null;
    },
    hk: function (a, b, c) {
      a.ta = !0;
      var d = a.oa;
      if (!d.Bc(!1, c)) return !1;
      for (var e = a.va; null != e; ) {
        var f = e.node;
        if (!f.ta && f.visible)
          if (((e.node.parent = a), (e.node.depth = a.depth + 1), b)) {
            if (((d = f.oa), d.Bc(!0, c) && !this.hk(f, !0, c))) return !1;
          } else if (!this.hk(f, !1, c)) return !1;
        e = e.next;
      }
      return !0;
    },
    gk: function (a, b, c, d) {
      a.ta = !0;
      if (!b(a, !1, d)) return !1;
      for (var e = a.va; null != e; ) {
        var f = e.node;
        if (!f.ta && f.visible)
          if (((e.node.parent = a), (e.node.depth = a.depth + 1), c)) {
            if (b(f, !0, d) && !this.gk(f, b, !0, d)) return !1;
          } else if (!this.gk(f, b, !1, d)) return !1;
        e = e.next;
      }
      return !0;
    },
    Dl: function (a) {
      var b = Array(a);
      ba.kb(this.Zg, 0, b, 0, this.Tk);
      this.Zg = b;
      this.Tk = a;
      return this.Zg;
    },
    Ze: function (a) {
      var b = Array(a);
      ba.kb(this.oc, 0, b, 0, this.Ii);
      this.oc = b;
      this.Ii = a;
    },
    j: $e,
  };
  Od.g = !0;
  Od.Da = [Jc];
  Od.prototype = {
    S: function () {
      this.next = this.Cb = this.node = null;
    },
    j: Od,
  };
  ld.g = !0;
  ld.Da = [Jc];
  ld.prototype = {
    S: function () {
      this.Me = this.va = this.next = this.Cb = this.oa = null;
    },
    iterator: function () {
      return new Ze(this);
    },
    gA: function (a) {
      return null != this.Yr(a) ? null != a.Yr(this) : !1;
    },
    Yr: function (a) {
      for (var b = !1, c = this.va; null != c; ) {
        if (c.node == a) {
          b = !0;
          break;
        }
        c = c.next;
      }
      return b ? c : null;
    },
    Aq: function (a, b) {
      null == b && (b = 1);
      a = null != this.Me.Bm ? this.Me.Bm(a, b) : new Od(a, b);
      a.next = this.va;
      null != this.va && (this.va.Cb = a);
      this.va = a;
      this.xo++;
      return this;
    },
    j: ld,
  };
  Ze.g = !0;
  Ze.Da = [Ec];
  Ze.prototype = {
    ka: function () {
      return null != this.Sk;
    },
    next: function () {
      var a = this.Sk.node.oa;
      this.Sk = this.Sk.next;
      return a;
    },
    j: Ze,
  };
  uc.g = !0;
  uc.next = function () {
    null == uc.zq && (uc.zq = 0);
    return uc.zq++;
  };
  Tc.g = !0;
  Tc.Da = [Jc];
  Tc.prototype = { j: Tc };
  Ye.g = !0;
  Ye.Xb = !0;
  Ye.Da = [mc];
  Vd.g = !0;
  Vd.Da = [Ye];
  Vd.prototype = {
    get: function (a) {
      var b = this.sa,
        c = b.Ne[(73856093 * a) & b.Hi];
      if (-1 == c) a = -2147483648;
      else if (((b = b.i), b[c] == a)) a = b[c + 1];
      else {
        var d = -2147483648;
        for (c = b[c + 2]; -1 != c; ) {
          if (b[c] == a) {
            d = b[c + 1];
            break;
          }
          c = b[c + 2];
        }
        a = d;
      }
      return -2147483648 == a ? null : this.$g[a];
    },
    set: function (a, b) {
      this.l == this.J && this.grow();
      var c = this.Ab,
        d = this.sa;
      d.l == d.J && d.grow();
      var e = d.i,
        f = d.Ne,
        g = 3 * d.Ab;
      d.Ab = d.Lb[d.Ab];
      e[g] = a;
      e[g + 1] = c;
      var h = (73856093 * a) & d.Hi,
        k = f[h];
      if (-1 == k) (f[h] = g), d.l++, (d = !0);
      else {
        f = e[k] != a;
        for (h = e[k + 2]; -1 != h; ) e[h] == a && (f = !1), (k = h), (h = e[h + 2]);
        e[k + 2] = g;
        d.l++;
        d = f;
      }
      this.$g[c] = b;
      this.Gi[c] = a;
      this.Ab = this.Lb[c];
      this.l++;
      return d;
    },
    grow: function () {
      var a = this.J;
      this.J = kc.hd(this.sa.bc, this.J);
      var b = Array(this.J);
      ba.kb(this.Lb, 0, b, 0, a);
      this.Lb = b;
      b = Array(this.J);
      ba.kb(this.Gi, 0, b, 0, a);
      b = this.Gi = b;
      for (var c = a, d = this.J; c < d; ) {
        var e = c++;
        b[e] = -2147483648;
      }
      b = this.Lb;
      c = a - 1;
      for (d = this.J - 1; c < d; ) (e = c++), (b[e] = e + 1);
      b[this.J - 1] = -1;
      this.Ab = a;
      b = Array(this.J);
      ba.kb(this.$g, 0, b, 0, a);
      this.$g = b;
    },
    S: function () {
      ba.Zc(this.$g);
      this.Lb = this.Gi = this.$g = null;
      this.sa.S();
      this.sa = null;
      null != this.Ia && (this.Ia.S(), (this.Ia = null));
    },
    j: Vd,
  };
  Mc.g = !0;
  Mc.Da = [Ye];
  Mc.prototype = {
    grow: function () {
      var a = this.J;
      this.J = kc.hd(this.bc, this.J);
      var b = Array(this.J);
      ba.kb(this.Lb, 0, b, 0, a);
      this.Lb = b;
      b = Array(3 * this.J);
      ba.kb(this.i, 0, b, 0, 3 * a);
      this.i = b;
      b = this.Lb;
      for (var c = a - 1, d = this.J - 1; c < d; ) {
        var e = c++;
        b[e] = e + 1;
      }
      b[this.J - 1] = -1;
      this.Ab = a;
      e = 3 * a + 2;
      b = this.i;
      c = 0;
      for (d = this.J - a; c < d; ) c++, (b[e - 1] = -2147483648), (b[e] = -1), (e += 3);
    },
    S: function () {
      this.Lb = this.i = this.Ne = null;
      null != this.Ia && (this.Ia.S(), (this.Ia = null));
    },
    clear: function () {
      for (var a = this.Ne, b = 0, c = this.NC; b < c; ) {
        var d = b++;
        a[d] = -1;
      }
      d = 2;
      a = this.i;
      b = 0;
      for (c = this.J; b < c; ) b++, (a[d - 1] = -2147483648), (a[d] = -1), (d += 3);
      a = this.Lb;
      b = 0;
      for (c = this.J - 1; b < c; ) (d = b++), (a[d] = d + 1);
      a[this.J - 1] = -1;
      this.l = this.Ab = 0;
    },
    j: Mc,
  };
  Xe.g = !0;
  Xe.Da = [af];
  Xe.prototype = {
    enqueue: function (a) {
      this.l == this.J && this.grow();
      this.i[++this.l] = a;
      a = a.position = this.l;
      var b = this.i,
        c = a >> 1,
        d = b[a],
        e = d.priority;
      if (this.ke)
        for (; 0 < c; ) {
          var f = b[c];
          if (0 > e - f.priority) (b[a] = f), (f.position = a), (a = c), (c >>= 1);
          else break;
        }
      else
        for (; 0 < c; )
          if (((f = b[c]), 0 < e - f.priority)) (b[a] = f), (f.position = a), (a = c), (c >>= 1);
          else break;
      b[a] = d;
      d.position = a;
    },
    di: function () {
      var a = this.i,
        b = a[1];
      b.position = -1;
      a[1] = a[this.l];
      var c = 1;
      a = this.i;
      var d = c << 1,
        e = a[c],
        f = e.priority;
      if (this.ke)
        for (; d < this.l; ) {
          d < this.l - 1 && 0 < a[d].priority - a[d + 1].priority && ++d;
          var g = a[d];
          if (0 < f - g.priority) (a[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
          else break;
        }
      else
        for (; d < this.l; )
          if ((d < this.l - 1 && 0 > a[d].priority - a[d + 1].priority && ++d, (g = a[d]), 0 > f - g.priority))
            (a[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
          else break;
      a[c] = e;
      e.position = c;
      this.l--;
      return b;
    },
    IB: function (a, b) {
      var c = a.priority;
      if (c == b) return this;
      a.priority = b;
      a = a.position;
      if (this.ke)
        if (b < c) {
          b = a;
          c = this.i;
          var d = b >> 1;
          a = c[b];
          var e = a.priority;
          if (this.ke)
            for (; 0 < d; ) {
              var f = c[d];
              if (0 > e - f.priority) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
            }
          else
            for (; 0 < d; )
              if (((f = c[d]), 0 < e - f.priority)) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
        } else {
          b = a;
          c = this.i;
          d = b << 1;
          a = c[b];
          e = a.priority;
          if (this.ke)
            for (; d < this.l; )
              if ((d < this.l - 1 && 0 < c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 < e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          else
            for (; d < this.l; )
              if ((d < this.l - 1 && 0 > c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 > e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          c[b] = a;
          a.position = b;
          b = this.l;
          c = this.i;
          d = b >> 1;
          a = c[b];
          e = a.priority;
          if (this.ke)
            for (; 0 < d; )
              if (((f = c[d]), 0 > e - f.priority)) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
          else
            for (; 0 < d; )
              if (((f = c[d]), 0 < e - f.priority)) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
        }
      else {
        if (b > c) b = a;
        else {
          b = a;
          c = this.i;
          d = b << 1;
          a = c[b];
          e = a.priority;
          if (this.ke)
            for (; d < this.l; )
              if ((d < this.l - 1 && 0 < c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 < e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          else
            for (; d < this.l; )
              if ((d < this.l - 1 && 0 > c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 > e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          c[b] = a;
          a.position = b;
          b = this.l;
        }
        c = this.i;
        d = b >> 1;
        a = c[b];
        e = a.priority;
        if (this.ke)
          for (; 0 < d; )
            if (((f = c[d]), 0 > e - f.priority)) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
            else break;
        else
          for (; 0 < d; )
            if (((f = c[d]), 0 < e - f.priority)) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
            else break;
      }
      c[b] = a;
      a.position = b;
      return this;
    },
    clear: function (a) {
      null == a && (a = !1);
      a && ba.Zc(this.i);
      this.l = 0;
    },
    iterator: function () {
      if (this.Mc) {
        if (null == this.Ia) return new Nd(this);
        this.Ia.reset();
        return this.Ia;
      }
      return new Nd(this);
    },
    HB: function () {
      for (var a = this.l >> 1; 1 <= a; ) this.ys(a, this.l), --a;
    },
    ys: function (a, b) {
      var c = this.i,
        d = a << 1,
        e = d + 1,
        f = a;
      this.ke
        ? (d <= b && 0 > c[d].priority - c[f].priority && (f = d),
          d + 1 <= b && 0 > c[d + 1].priority - c[f].priority && (f = e))
        : (d <= b && 0 < c[d].priority - c[f].priority && (f = d),
          d + 1 <= b && 0 < c[d + 1].priority - c[f].priority && (f = e));
      f != a &&
        ((d = c[f]),
        (e = c[a]),
        (c[f] = e),
        (c[a] = d),
        (a = d.position),
        (d.position = e.position),
        (e.position = a),
        this.ys(f, b));
    },
    grow: function () {
      this.J = kc.hd(this.bc, this.J);
      this.se(this.J);
    },
    se: function (a) {
      a = Array(a + 1);
      ba.kb(this.i, 0, a, 0, this.l + 1);
      this.i = a;
    },
    j: Xe,
  };
  Nd.g = !0;
  Nd.Da = [Ec];
  Nd.prototype = {
    reset: function () {
      this.wa = 0;
      this.Va = this.gb.l;
      this.i = Array(this.Va);
      ba.kb(this.gb.i, 1, this.i, 0, this.Va);
      return this;
    },
    ka: function () {
      return this.wa < this.Va;
    },
    next: function () {
      return this.i[this.wa++];
    },
    j: Nd,
  };
  Bd.g = !0;
  Bd.U = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    for (d = 0 >= d ? a.length : c + d; c < d; ) a[c++] = b;
    return a;
  };
  Bd.av = function (a, b) {
    var c = a.length;
    if (null == b)
      for (; 1 < --c; ) {
        var d = (Id.f() * c) | 0,
          e = a[c];
        a[c] = a[d];
        a[d] = e;
      }
    else for (var f = 0; 1 < --c; ) (d = (b[f++] * c) | 0), (e = a[c]), (a[c] = a[d]), (a[d] = e);
  };
  $f.g = !0;
  kc.g = !0;
  kc.hd = function (a, b) {
    if (0 < a) b += a;
    else
      switch (a) {
        case -3:
          b <<= 1;
          break;
        case -2:
          b = ((3 * b) >> 1) + 1;
          break;
        case -1:
          a = b + 1;
          b = (a >> 3) + (9 > a ? 3 : 6) + a;
          break;
        case 0:
          throw 8;
      }
    return b;
  };
  ba.g = !0;
  ba.nj = function (a, b, c) {
    if (0 == c) return [];
    var d = Array(c);
    if (0 == b)
      for (var e = 0; e < c; ) {
        var f = e++;
        d[f] = a[f];
      }
    else for (e = b, c = b + c; e < c; ) (f = e++), (d[f - b] = a[f]);
    return d;
  };
  ba.kb = function (a, b, c, d, e) {
    if (0 < e)
      if (a == c)
        if (b < d) {
          var f = b + e;
          b = d + e;
          for (var g = 0; g < e; ) g++, --f, --b, (a[b] = a[f]);
        } else {
          if (b > d) for (f = b, b = d, g = 0; g < e; ) g++, (a[b] = a[f]), ++f, ++b;
        }
      else if (0 == b && 0 == d) for (g = 0; g < e; ) (f = g++), (c[f] = a[f]);
      else if (0 == b) for (g = 0; g < e; ) (f = g++), (c[d + f] = a[f]);
      else if (0 == d) for (g = 0; g < e; ) (f = g++), (c[f] = a[b + f]);
      else for (g = 0; g < e; ) (f = g++), (c[d + f] = a[b + f]);
  };
  ba.U = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    for (d = 0 >= d ? a.length : c + d; c < d; ) a[c++] = b;
    return a;
  };
  ba.Zc = function (a) {
    var b, c;
    null == c && (c = 0);
    null == b && (b = 0);
    for (c = 0 >= c ? a.length : b + c; b < c; ) a[b++] = null;
  };
  ba.nx = function (a, b, c) {
    for (var d = 0, e, f = c + 1; d < f; ) (e = d + ((f - d) >> 1)), a[e] < b ? (d = e + 1) : (f = e);
    return d <= c && a[d] == b ? d : ~d;
  };
  Id.g = !0;
  Id.f = function () {
    return Math.random();
  };
  Id.rC = function (a) {
    Id.f = a;
  };
  jc.g = !0;
  jc.Og = function (a) {
    for (var b = 0, c = jc.content; b < c.length; ) {
      var d = c[b];
      ++b;
      if (d.name == a) return null != d.Ep ? d.Ep : qb.decode(d.data).toString();
    }
    return null;
  };
  jc.sk = function (a) {
    for (var b = 0, c = jc.content; b < c.length; ) {
      var d = c[b];
      ++b;
      if (d.name == a) return null != d.Ep ? xa.Co(d.Ep) : qb.decode(d.data);
    }
    return null;
  };
  kd.g = !0;
  kd.delay = function (a, b) {
    var c = new kd(b);
    c.ud = function () {
      c.stop();
      a();
    };
    return c;
  };
  kd.prototype = {
    stop: function () {
      null != this.id && (clearInterval(this.id), (this.id = null));
    },
    ud: function () {},
    j: kd,
  };
  We.g = !0;
  We.D = Ka;
  We.prototype = u(Ka.prototype, {
    uD: function () {
      return this.value;
    },
    j: We,
  });
  xa.g = !0;
  xa.Co = function (a) {
    if (void 0 == Sd.vq) {
      for (var b = new Uint8Array(a.length << 1), c = 0, d = a.length; c < d; ) {
        var e = c++,
          f = a.charCodeAt(e);
        b[e << 1] = f & 255;
        b[(e << 1) | 1] = f >> 8;
      }
      return new xa(b.buffer);
    }
    b = [];
    for (e = 0; e < a.length; )
      (f = a.charCodeAt(e++)),
        55296 <= f && 56319 >= f && (f = ((f - 55232) << 10) | (a.charCodeAt(e++) & 1023)),
        127 >= f
          ? b.push(f)
          : (2047 >= f
              ? b.push(192 | (f >> 6))
              : (65535 >= f ? b.push(224 | (f >> 12)) : (b.push(240 | (f >> 18)), b.push(128 | ((f >> 12) & 63))),
                b.push(128 | ((f >> 6) & 63))),
            b.push(128 | (f & 63)));
    return new xa(new Uint8Array(b).buffer);
  };
  xa.$f = function (a) {
    var b = a.Cz;
    return null != b ? b : new xa(a);
  };
  xa.prototype = {
    Og: function (a, b, c) {
      if (0 > a || 0 > b || a + b > this.length) throw 9;
      null == c && (c = Sd.nm);
      var d = "",
        e = this.b,
        f = a;
      a += b;
      switch (c.pa) {
        case 0:
          for (; f < a; )
            if (((c = e[f++]), 128 > c)) {
              if (0 == c) break;
              d += String.fromCodePoint(c);
            } else if (224 > c) (c = ((c & 63) << 6) | (e[f++] & 127)), (d += String.fromCodePoint(c));
            else if (240 > c)
              (b = e[f++]), (c = ((c & 31) << 12) | ((b & 127) << 6) | (e[f++] & 127)), (d += String.fromCodePoint(c));
            else {
              b = e[f++];
              var g = e[f++];
              c = ((c & 15) << 18) | ((b & 127) << 12) | ((g & 127) << 6) | (e[f++] & 127);
              d += String.fromCodePoint(c);
            }
          break;
        case 1:
          for (; f < a; ) (c = e[f++] | (e[f++] << 8)), (d += String.fromCodePoint(c));
      }
      return d;
    },
    toString: function () {
      return this.Og(0, this.length);
    },
    j: xa,
  };
  var Sd = (cc.e0 = {
    mf: !0,
    Cc: null,
    nm: { Ha: "e00", pa: 0, Aa: "e0", toString: sa },
    vq: { Ha: "e01", pa: 1, Aa: "e0", toString: sa },
  });
  Sd.Cc = [Sd.nm, Sd.vq];
  qb.g = !0;
  qb.encode = function (a, b) {
    null == b && (b = !0);
    var c = new Ve(qb.jq).sy(a).toString();
    if (b)
      switch (a.length % 3) {
        case 1:
          c += "==";
          break;
        case 2:
          c += "=";
      }
    return c;
  };
  qb.decode = function (a, b) {
    null == b && (b = !0);
    if (b) for (; 61 == Y.Km(a, a.length - 1); ) a = Y.substr(a, 0, -1);
    return new Ve(qb.jq).by(xa.Co(a));
  };
  Ve.g = !0;
  Ve.prototype = {
    sy: function (a) {
      for (
        var b = this.yt,
          c = this.Bg,
          d = ((8 * a.length) / b) | 0,
          e = new xa(new ArrayBuffer(d + (0 == (8 * a.length) % b ? 0 : 1))),
          f = 0,
          g = 0,
          h = (1 << b) - 1,
          k = 0,
          l = 0;
        l < d;

      ) {
        for (; g < b; ) (g += 8), (f <<= 8), (f |= a.b[k++]);
        g -= b;
        e.b[l++] = c.b[(f >> g) & h];
      }
      0 < g && (e.b[l++] = c.b[(f << (b - g)) & h]);
      return e;
    },
    Rz: function () {
      for (var a = [], b = 0; 256 > b; ) {
        var c = b++;
        a[c] = -1;
      }
      b = 0;
      for (var d = this.Bg.length; b < d; ) (c = b++), (a[this.Bg.b[c]] = c);
      this.ev = a;
    },
    by: function (a) {
      var b = this.yt;
      null == this.ev && this.Rz();
      for (
        var c = this.ev, d = (a.length * b) >> 3, e = new xa(new ArrayBuffer(d)), f = 0, g = 0, h = 0, k = 0;
        k < d;

      ) {
        for (; 8 > g; ) {
          g += b;
          f <<= b;
          var l = c[a.b[h++]];
          if (-1 == l) throw 11;
          f |= l;
        }
        g -= 8;
        e.b[k++] = (f >> g) & 255;
      }
      return e;
    },
    j: Ve,
  };
  Db.g = !0;
  Db.Da = [eg];
  Db.prototype = { j: Db };
  jd.g = !0;
  jd.D = Ka;
  jd.prototype = u(Ka.prototype, {
    toString: function () {
      return (
        "" +
        Ka.prototype.toString.call(this) +
        " in " +
        this.vl.className +
        "." +
        this.vl.methodName +
        " at " +
        this.vl.fileName +
        ":" +
        this.vl.lineNumber
      );
    },
    j: jd,
  });
  Ue.g = !0;
  Ue.D = jd;
  Ue.prototype = u(jd.prototype, { j: Ue });
  Zf.g = !0;
  Zf.prototype = {
    dx: function (a) {
      this.Na == this.size && this.grow(1);
      this.view.setUint8(this.Na++, a);
    },
    grow: function (a) {
      var b = this.Na + a;
      for (a = 0 == this.size ? 16 : this.size; a < b; ) a = (3 * a) >> 1;
      b = new ArrayBuffer(a);
      var c = new Uint8Array(b);
      0 < this.size && c.set(this.pD);
      this.size = a;
      this.buffer = b;
      this.pD = c;
      this.view = new DataView(this.buffer);
    },
    sk: function () {
      if (0 == this.size) return new xa(new ArrayBuffer(0));
      var a = new xa(this.buffer);
      a.length = this.Na;
      return a;
    },
    j: Zf,
  };
  Te.g = !0;
  Te.prototype = {
    $: function () {
      throw new Ue(null, null, {
        fileName: "haxe/io/Input.hx",
        lineNumber: 53,
        className: "haxe.io.Input",
        methodName: "readByte",
      });
    },
    cp: function (a, b, c) {
      var d = c,
        e = a.b;
      if (0 > b || 0 > c || b + c > a.length) throw 12;
      try {
        for (; 0 < d; ) (e[b] = this.$()), ++b, --d;
      } catch (f) {
        throw (Ka.Jm(f), f);
      }
      return c - d;
    },
    wB: function (a, b, c) {
      for (; 0 < c; ) {
        var d = this.cp(a, b, c);
        if (0 == d) throw 13;
        b += d;
        c -= d;
      }
    },
    ru: function (a) {
      for (var b = new Zf(), c; ; ) {
        c = this.$();
        if (c == a) break;
        b.dx(c);
      }
      return b.sk().toString();
    },
    Rd: function () {
      return Ab.Dz(this.ad());
    },
    vB: function () {
      var a = this.ad(),
        b = this.ad();
      return this.Kj ? Ab.Ds(b, a) : Ab.Ds(a, b);
    },
    pu: function () {
      var a = this.$();
      return 128 <= a ? a - 256 : a;
    },
    uc: function () {
      var a = this.$(),
        b = this.$();
      a = this.Kj ? b | (a << 8) : a | (b << 8);
      return 0 != (a & 32768) ? a - 65536 : a;
    },
    $a: function () {
      var a = this.$(),
        b = this.$();
      return this.Kj ? b | (a << 8) : a | (b << 8);
    },
    qu: function () {
      var a = this.$(),
        b = this.$(),
        c = this.$();
      return this.Kj ? c | (b << 8) | (a << 16) : a | (b << 8) | (c << 16);
    },
    ad: function () {
      var a = this.$(),
        b = this.$(),
        c = this.$(),
        d = this.$();
      return this.Kj ? d | (c << 8) | (b << 16) | (a << 24) : a | (b << 8) | (c << 16) | (d << 24);
    },
    vh: function (a, b) {
      var c = new xa(new ArrayBuffer(a));
      this.wB(c, 0, a);
      return c.Og(0, a, b);
    },
    j: Te,
  };
  pb.g = !0;
  pb.D = Te;
  pb.prototype = u(Te.prototype, {
    CC: function (a) {
      0 > a ? (a = 0) : a > this.gf && (a = this.gf);
      this.od = this.gf - a;
      return (this.Na = a);
    },
    $: function () {
      if (0 == this.od) throw 15;
      this.od--;
      return this.b[this.Na++];
    },
    cp: function (a, b, c) {
      if (0 > b || 0 > c || b + c > a.length) throw 16;
      if (0 == this.od && 0 < c) throw 17;
      this.od < c && (c = this.od);
      var d = this.b;
      a = a.b;
      for (var e = 0, f = c; e < f; ) {
        var g = e++;
        a[b + g] = d[this.Na + g];
      }
      this.Na += c;
      this.od -= c;
      return c;
    },
    j: pb,
  });
  var mf = (cc.e1 = {
    mf: !0,
    Cc: null,
    Nv: { Ha: "e10", pa: 0, Aa: "e1", toString: sa },
    ew: { Ha: "e11", pa: 1, Aa: "e1", toString: sa },
    dw: { Ha: "e12", pa: 2, Aa: "e1", toString: sa },
    Pv:
      ((Mb = function (a) {
        return { pa: 3, e: a, Aa: "e1", toString: sa };
      }),
      (Mb.Ha = "Custom"),
      (Mb.Bj = ["e"]),
      Mb),
  });
  mf.Cc = [mf.Nv, mf.ew, mf.dw, mf.Pv];
  Ab.g = !0;
  Ab.Dz = function (a) {
    Ab.wi.setInt32(0, a, !0);
    return Ab.wi.getFloat32(0, !0);
  };
  Ab.Ds = function (a, b) {
    Ab.wi.setInt32(0, a, !0);
    Ab.wi.setInt32(4, b, !0);
    return Ab.wi.getFloat64(0, !0);
  };
  Md.g = !0;
  Md.prototype = {
    ka: function () {
      return this.current < this.Lq.length;
    },
    next: function () {
      return this.Lq[this.current++];
    },
    j: Md,
  };
  var og = {
      qk: function (a) {
        var b = new fa("^([a-z]{2})", "i");
        if (!b.match(a)) return null;
        a = b.rb(1);
        return new fa("^(en|de|fr|it|es|pt|tr|pl|ru|nl)", "").match(a) ? a : null;
      },
    },
    Td = (cc.e2 = {
      mf: !0,
      Cc: null,
      Uw: { Ha: "e20", pa: 0, Aa: "e2", toString: sa },
      uq: { Ha: "e21", pa: 1, Aa: "e2", toString: sa },
      iq: { Ha: "e22", pa: 2, Aa: "e2", toString: sa },
    });
  Td.Cc = [Td.Uw, Td.uq, Td.iq];
  wa.g = !0;
  wa.Bf = function () {
    wa.fo = "en";
    wa.Oh = null;
    wa.za = null;
  };
  wa.qp = function (a) {
    null == a && (a = wa.fy());
    wa.fo = a;
  };
  wa.Gs = function (a, b) {
    if (a instanceof xa) {
      for (var c = !1, d = new pb(a), e = d.$(), f = d.$a(), g = 0; g < e; ) {
        g++;
        var h = d.$();
        h = String.fromCodePoint(h);
        var k = d.$();
        h = (h + String.fromCodePoint(k)).toLowerCase();
        k = d.$a();
        if (og.qk(h) == wa.fo) {
          g = "";
          for (e = 0; e < f; ) e++, (g += la.Xa(d.vh(d.$a()))), (g += "\n");
          a = g;
          c = !0;
          break;
        } else d.CC(d.Na + k);
      }
      if (!c) return;
    }
    c = /\r/g;
    a = a.replace(c, "");
    f = a.split("\n");
    e = f.length;
    g = Array(e);
    wa.Oh = g;
    g = Array(e);
    wa.za = g;
    for (g = 0; g < e; )
      (d = g++),
        (a = f[d]),
        (c = /\\n/g),
        (a = a.replace(c, "\n")),
        (wa.Oh[d] = a),
        (wa.za[d] = new fa("::(\\w+)::", "").match(f[d]));
    if (null != b) {
      g = [];
      e = Object.keys(b.P);
      f = e.length;
      for (a = 0; a < f; ) (d = e[a++]), g.push(d);
      f = new fa(g.join("|"), "");
      g = 0;
      for (e = wa.Oh.length; g < e; )
        for (d = g++, a = wa.Oh[d]; f.match(a); ) (d = f.rb(0)), (a = a.replace(f.r, b.P[d]));
    }
  };
  wa.translate = function (a, b) {
    if (null == wa.Oh) return null != b ? b : "NO STRINGS IMPORTED";
    var c = a.pa;
    b = wa.Oh[c];
    if (!wa.za[c]) return b;
    a = Ic.uy(a);
    if (0 == a.length) return b;
    for (c = 0; c < a.length; ) {
      var d = a[c];
      ++c;
      b = b.replace(/::(\w+)::/, la.Xa(d));
    }
    return b;
  };
  wa.fy = function () {
    var a = null;
    try {
      var b = new fa("lang=(\\w\\w(?:-\\w\\w)?)", "");
      b.match(window.location.href) && (a = og.qk(b.rb(1)));
    } catch (c) {}
    try {
      null == a && (a = og.qk(B.navigator.language));
    } catch (c) {}
    null == a && (a = "en");
    return a;
  };
  ua.g = !0;
  ua.ob = function () {
    return Oa.instance();
  };
  ua.ri = function () {
    return Va.instance();
  };
  Va.g = !0;
  Va.Bf = function () {
    null != Va.ib && (Va.ib.Tj(), Va.ib.disable(), (Va.ib = null));
  };
  Va.instance = function () {
    null == Va.ib && (Va.ib = new Va());
    return Va.ib;
  };
  Va.D = Ra;
  Va.prototype = u(Ra.prototype, {
    enable: function () {
      this.enabled ||
        ((this.enabled = !0),
        window.addEventListener("keydown", L(this, this.Lt), !0),
        window.addEventListener("keyup", L(this, this.Mt), !0));
    },
    disable: function () {
      this.enabled &&
        ((this.enabled = !1),
        window.removeEventListener("keydown", L(this, this.Lt), !0),
        window.removeEventListener("keyup", L(this, this.Mt), !0));
    },
    Lt: function (a) {
      var b = a.keyCode;
      if (!this.keys[b]) {
        switch (a.location) {
          case 1:
            var c = 1;
            break;
          case 2:
            c = 2;
            break;
          case 3:
            c = 3;
            break;
          default:
            c = 0;
        }
        this.location = c;
        this.event = a;
        this.Ic(!0, b);
        this.event = null;
      }
    },
    Mt: function (a) {
      var b = a.keyCode;
      switch (a.location) {
        case 1:
          a = 1;
          break;
        case 2:
          a = 2;
          break;
        case 3:
          a = 3;
          break;
        default:
          a = 0;
      }
      this.location = a;
      this.Ic(!1, b);
    },
    Ic: function (a, b) {
      if (a) (this.keys[b] = !0), (this.Eq[b] = this.time++);
      else {
        this.keys[b] = !1;
        for (var c = 0, d = this.hb.l; c < d; ) {
          var e = this.hb;
          if (e.i[(c + e.Sa) % e.J] == b) {
            e = this.hb;
            e.i[(c + e.Sa) % e.J] = -1;
            break;
          }
          ++c;
        }
        for (c = 0; 100 >= ++c && 0 != this.hb.l; )
          if (((e = this.hb), (e = e.i[e.Sa]), 0 > e || e == b)) this.hb.di();
          else break;
      }
      var f = new Yf(this, b, a);
      this.notify(function (g) {
        f.f = g;
        g(f);
      });
    },
    j: Va,
  });
  Yf.g = !0;
  Yf.prototype = { j: Yf };
  Oa.g = !0;
  Oa.Bf = function () {
    if (null != Oa.ib) {
      Oa.ib.Tj();
      Oa.ib.disable();
      var a = Oa.ib.event;
      a.gB = null;
      a.f = null;
      Oa.ib.event = null;
      Oa.ib = null;
    }
  };
  Oa.instance = function () {
    null == Oa.ib && (Oa.ib = new Oa());
    return Oa.ib;
  };
  Oa.D = Ra;
  Oa.prototype = u(Ra.prototype, {
    enable: function () {
      if (!this.enabled) {
        this.enabled = !0;
        var a = this.cv() && { passive: !1 };
        window.addEventListener("mousedown", L(this, this.Nt));
        window.addEventListener("mouseup", L(this, this.Pt));
        window.addEventListener("mousemove", L(this, this.Ot));
        window.addEventListener("touchstart", L(this, this.Xt), a);
        window.addEventListener("touchend", L(this, this.ll));
        window.addEventListener("touchcancel", L(this, this.ll));
        window.addEventListener("touchmove", L(this, this.Wt));
        window.addEventListener("mousewheel", L(this, this.il), a);
        window.addEventListener("DOMMouseScroll", L(this, this.il), a);
      }
    },
    disable: function () {
      this.enabled &&
        ((this.enabled = !1),
        window.removeEventListener("mousedown", L(this, this.Nt)),
        window.removeEventListener("mouseup", L(this, this.Pt)),
        window.removeEventListener("mousemove", L(this, this.Ot)),
        window.removeEventListener("touchstart", L(this, this.Xt)),
        window.removeEventListener("touchend", L(this, this.ll)),
        window.removeEventListener("touchcancel", L(this, this.ll)),
        window.removeEventListener("touchmove", L(this, this.Wt)),
        window.removeEventListener("mousewheel", L(this, this.il)),
        window.removeEventListener("DOMMouseScroll", L(this, this.il)));
    },
    Nt: function (a) {
      var b = a.which;
      this.Vc = (this.Vc & ~(1 << b)) | (1 << b);
      0 != (this.Pj & (1 << a.which)) && this.Ic(a.clientX, a.clientY, 0, a.which);
    },
    Pt: function (a) {
      var b = a.which;
      this.Vc = (this.Vc & ~(1 << b)) | (0 << b);
      0 != (this.Pj & (1 << a.which)) && this.Ic(a.clientX, a.clientY, 1, a.which);
    },
    Ot: function (a) {
      0 < this.Zf || this.Ic(a.clientX, a.clientY, 2, 0);
    },
    Xt: function (a) {
      this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (!(null != this.first || 1 < a.length)) {
          this.first = a[0];
          var b = 1;
          this.Vc = (this.Vc & ~(1 << b)) | (1 << b);
          this.Zf = 1;
          this.Ic(this.first.clientX, this.first.clientY, 0, 4);
        }
      } else
        for (var c = 0; c < a.length; ) {
          b = a[c];
          ++c;
          var d = this.Zf < this.maxTouchPoints,
            e = d ? (0 < this.md.length ? this.md.pop() : this.IA++) : null;
          this.touches["" + b.identifier] = e;
          d && (this.Ic(b.clientX, b.clientY, 0, 4 + e), this.Zf++);
        }
    },
    ll: function (a) {
      "touchend" == a.type && this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (null != this.first)
          for (var b = 0; b < a.length; ) {
            var c = a[b];
            ++b;
            if (c.identifier == this.first.identifier) {
              this.Zf = 0;
              this.Vc = (this.Vc & -3) | 0;
              this.first = null;
              this.Ic(c.clientX, c.clientY, 1, 4);
              break;
            }
          }
      } else
        for (b = 0; b < a.length; ) {
          c = a[b];
          ++b;
          var d = "" + c.identifier,
            e = this.touches[d];
          delete this.touches[d];
          null != e && (this.Zf--, this.md.push(e), this.Ic(c.clientX, c.clientY, 1, 4 + e));
        }
    },
    Wt: function (a) {
      this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (null != this.first)
          for (var b = 0; b < a.length; ) {
            var c = a[b];
            ++b;
            if (c.identifier == this.first.identifier) {
              this.Ic(c.clientX, c.clientY, 2, 4);
              break;
            }
          }
      } else
        for (b = 0; b < a.length; ) {
          c = a[b];
          ++b;
          var d = this.touches["" + c.identifier];
          null != d && this.Ic(c.clientX, c.clientY, 2, 4 + d);
        }
    },
    il: function (a) {
      this.Ic(Math.max(-1, Math.min(1, a.wheelDelta || -a.detail)), 0, 3, 0);
    },
    Ic: function (a, b, c, d) {
      var e = this.event;
      if (3 == c) e.scroll = a;
      else {
        var f = window.devicePixelRatio;
        a = (a * f) | 0;
        b = (b * f) | 0;
        0 > a && (a = 0);
        0 > b && (b = 0);
        0 == c
          ? ((f = this.anchor), (f.x = a), (f.y = b))
          : 2 == c && 0 == this.Vc && ((f = this.anchor), (f.x = a), (f.y = b));
        f = this.position;
        f.x = a;
        f.y = b;
        e.x = this.position.x;
        e.y = this.position.y;
      }
      e.type = c;
      e.id = d;
      this.OD || null == this.buffer
        ? this.notify(function (g) {
            e.f = g;
            g(e);
          })
        : ((f = this.buffer),
          f.ec(f.l + 5),
          (f.i[f.l++] = a | 0),
          (f.i[f.l++] = b | 0),
          (f.i[f.l++] = c),
          (f.i[f.l++] = d));
    },
    cancel: function (a) {
      a.preventDefault();
    },
    cv: function () {
      var a = !1;
      try {
        var b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        window.addEventListener("test", null, b);
        window.removeEventListener("test", null, b);
      } catch (c) {}
      return a;
    },
    j: Oa,
  });
  Xf.g = !0;
  Xf.prototype = { j: Xf };
  na.g = !0;
  na.Ty = function (a) {
    if (null == a) return null;
    if (a instanceof Array) return Array;
    var b = a.j;
    if (null != b) return b;
    a = na.xq(a);
    return null != a ? na.$w(a) : null;
  };
  na.Sh = function (a, b) {
    if (null == a) return "null";
    if (5 <= b.length) return "<...>";
    var c = typeof a;
    "function" == c && (a.g || a.mf) && (c = "object");
    switch (c) {
      case "function":
        return "<function>";
      case "object":
        if (a.Aa) {
          var d = cc[a.Aa].Cc[a.pa];
          c = d.Ha;
          if (d.Bj) {
            b += "\t";
            var e = [],
              f = 0;
            for (d = d.Bj; f < d.length; ) {
              var g = d[f];
              f += 1;
              e.push(na.Sh(a[g], b));
            }
            return c + "(" + e.join(",") + ")";
          }
          return c;
        }
        if (a instanceof Array) {
          c = "[";
          b += "\t";
          e = 0;
          for (f = a.length; e < f; ) (d = e++), (c += (0 < d ? "," : "") + na.Sh(a[d], b));
          return c + "]";
        }
        try {
          e = a.toString;
        } catch (h) {
          return "???";
        }
        if (null != e && e != Object.toString && "function" == typeof e && ((c = a.toString()), "[object Object]" != c))
          return c;
        c = "{\n";
        b += "\t";
        e = null != a.hasOwnProperty;
        f = null;
        for (f in a)
          (e && !a.hasOwnProperty(f)) ||
            "prototype" == f ||
            "__class__" == f ||
            "__super__" == f ||
            "__interfaces__" == f ||
            "__properties__" == f ||
            (2 != c.length && (c += ", \n"), (c += b + f + " : " + na.Sh(a[f], b)));
        b = b.substring(1);
        return c + ("\n" + b + "}");
      case "string":
        return a;
      default:
        return String(a);
    }
  };
  na.pm = function (a, b) {
    if (null == a) return !1;
    if (a == b) return !0;
    var c = a.Da;
    if (null != c)
      for (var d = 0, e = c.length; d < e; ) {
        var f = d++;
        f = c[f];
        if (f == b || na.pm(f, b)) return !0;
      }
    return na.pm(a.D, b);
  };
  na.Yw = function (a, b) {
    if (null == b) return !1;
    switch (b) {
      case Array:
        return a instanceof Array;
      case Ng:
        return "boolean" == typeof a;
      case Og:
        return null != a;
      case Pg:
        return "number" == typeof a;
      case Qg:
        return "number" == typeof a ? (a | 0) === a : !1;
      case String:
        return "string" == typeof a;
      default:
        if (null != a)
          if ("function" == typeof b) {
            if (na.Xw(a, b)) return !0;
          } else {
            if ("object" == typeof b && na.Zw(b) && a instanceof b) return !0;
          }
        else return !1;
        return (b == Rg && null != a.g) || (b == Sg && null != a.mf) ? !0 : null != a.Aa ? cc[a.Aa] == b : !1;
    }
  };
  na.Xw = function (a, b) {
    return a instanceof b ? !0 : b.Xb ? na.pm(na.Ty(a), b) : !1;
  };
  na.ug = function (a, b) {
    if (null == a || na.Yw(a, b)) return a;
    throw 18;
  };
  na.xq = function (a) {
    a = na.ax.call(a).slice(8, -1);
    return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a;
  };
  na.Zw = function (a) {
    return null != na.xq(a);
  };
  na.$w = function (a) {
    return B[a];
  };
  rg.g = !0;
  rg.dz = function () {
    try {
      var a = window.localStorage;
      a.getItem("");
      if (0 == a.length) {
        var b = "_hx_" + Math.random();
        a.setItem(b, b);
        a.removeItem(b);
      }
      return a;
    } catch (c) {
      return null;
    }
  };
  xg.g = !0;
  xg.LC = function (a, b) {
    a = new Uint8Array(this, a, null == b ? null : b - a);
    b = new Uint8Array(a.byteLength);
    b.set(a);
    return b.buffer;
  };
  var Qb = {
    offset: function (a, b, c) {
      a.s -= b;
      a.u -= c;
      a.A += b;
      a.B += c;
      return a;
    },
    Ah: function (a, b, c) {
      if (c) {
        c = (a.A - a.s) / 2;
        var d = a.s + c;
        a.s = d - c * b;
        a.A = d + c * b;
      } else (a.s *= b), (a.A *= b);
    },
    Nc: function (a, b, c) {
      if (c) {
        c = (a.B - a.u) / 2;
        var d = a.u + c;
        a.u = d - c * b;
        a.B = d + c * b;
      } else (a.u *= b), (a.B *= b);
    },
  };
  ca.g = !0;
  ca.prototype = { j: ca };
  cd.g = !0;
  cd.prototype = { j: cd };
  var Fg = {
    Ly: function (a) {
      var b = 0.00392156862745098 * pg.Yl(a & 255),
        c = 0.00392156862745098 * pg.Yl((a >>> 8) & 255),
        d = 0.00392156862745098 * pg.Yl((a >>> 16) & 255);
      a = 0.00392156862745098 * pg.Yl(a >>> 24);
      var e = new Ub();
      e.r = d;
      e.Fa = c;
      e.b = b;
      e.a = a;
      return e;
    },
    hD: function (a) {
      return (
        "rgba(" +
        (Math.round(255 * a.r) & 255) +
        "," +
        (Math.round(255 * a.Fa) & 255) +
        "," +
        (Math.round(255 * a.b) & 255) +
        "," +
        a.a.toFixed(2) +
        ")"
      );
    },
  };
  Ub.g = !0;
  Ub.prototype = { j: Ub };
  var Tg = {
    gD: function (a) {
      var b = new Ub();
      b.r = (a & 255) / 255;
      b.Fa = ((a >> 8) & 255) / 255;
      b.b = ((a >> 16) & 255) / 255;
      b.a = (a >>> 24) / 255;
      return b;
    },
  };
  Fd.g = !0;
  Fd.prototype = { j: Fd };
  z.g = !0;
  z.min = function (a, b) {
    return a < b ? a : b;
  };
  z.max = function (a, b) {
    return a > b ? a : b;
  };
  z.abs = function (a) {
    return 0 > a ? -a : a;
  };
  z.Ix = function (a, b, c) {
    return a < b ? b : a > c ? c : a;
  };
  z.ce = function (a) {
    return 0 > a ? 0 : 1 < a ? 1 : a;
  };
  z.Jx = function (a) {
    return -100 > a ? -100 : 100 < a ? 100 : a;
  };
  z.wj = function (a) {
    a %= 360;
    0 > a && (a += 360);
    return a;
  };
  z.cr = function (a) {
    return 0 < a ? 0.01 > a : 0.01 > -a;
  };
  z.Ai = function (a) {
    return 0 != a ? 0 == (a & (a - 1)) : !1;
  };
  z.wo = function (a) {
    --a;
    a |= a >> 1;
    a |= a >> 2;
    a |= a >> 4;
    a |= a >> 8;
    a |= a >> 16;
    return ++a;
  };
  z.map = function (a, b, c, d, e) {
    return d + ((a - b) / (c - b)) * (e - d);
  };
  z.Wb = function (a, b, c) {
    return a + (b - a) * c;
  };
  var ud = {
    Oc: function (a) {
      a.m11 = 1;
      a.m12 = 0;
      a.m13 = 0;
      a.m21 = 0;
      a.m22 = 1;
      a.m23 = 0;
      a.m31 = 0;
      a.m32 = 0;
      a.m33 = 1;
      return a;
    },
    Sc: function (a, b, c) {
      var d = b.m11,
        e = b.m12,
        f = b.m13,
        g = b.m21,
        h = b.m22,
        k = b.m23,
        l = b.m31,
        m = b.m32;
      b = b.m33;
      var n = a.m11,
        q = a.m12,
        r = a.m13;
      c.m11 = n * d + q * g + r * l;
      c.m12 = n * e + q * h + r * m;
      c.m13 = n * f + q * k + r * b;
      n = a.m21;
      q = a.m22;
      r = a.m23;
      c.m21 = n * d + q * g + r * l;
      c.m22 = n * e + q * h + r * m;
      c.m23 = n * f + q * k + r * b;
      n = a.m31;
      q = a.m32;
      r = a.m33;
      c.m31 = n * d + q * g + r * l;
      c.m32 = n * e + q * h + r * m;
      c.m33 = n * f + q * k + r * b;
      return c;
    },
    ng: function (a, b, c) {
      var d = b.x,
        e = b.y;
      b = b.z;
      c.x = a.m11 * d + a.m12 * e + a.m13 * b;
      c.y = a.m21 * d + a.m22 * e + a.m23 * b;
      c.z = a.m31 * d + a.m32 * e + a.m33 * b;
      return c;
    },
    lv: function (a, b, c) {
      var d = b.x;
      c.m11 = a.m11 * d;
      c.m21 = a.m21 * d;
      c.m31 = a.m31 * d;
      d = b.y;
      c.m12 = a.m12 * d;
      c.m22 = a.m22 * d;
      c.m32 = a.m32 * d;
      d = b.z;
      c.m13 = a.m13 * d;
      c.m23 = a.m23 * d;
      c.m33 = a.m33 * d;
      return a;
    },
  };
  vd.g = !0;
  vd.prototype = { j: vd };
  var U = {
    Rb: function () {
      return new Wf();
    },
    Oc: function (a) {
      a.m11 = 1;
      a.m12 = 0;
      a.m13 = 0;
      a.m14 = 0;
      a.m21 = 0;
      a.m22 = 1;
      a.m23 = 0;
      a.m24 = 0;
      a.m31 = 0;
      a.m32 = 0;
      a.m33 = 1;
      a.m34 = 0;
      a.m41 = 0;
      a.m42 = 0;
      a.m43 = 0;
      a.m44 = 1;
      return a;
    },
    Ll: function (a, b, c, d, e, f, g) {
      a.m11 = 2 / (c - b);
      a.m12 = 0;
      a.m13 = 0;
      a.m14 = (b + c) / (b - c);
      a.m21 = 0;
      a.m22 = 2 / (e - d);
      a.m23 = 0;
      a.m24 = (d + e) / (d - e);
      a.m31 = 0;
      a.m32 = 0;
      a.m33 = 2 / (f - g);
      a.m34 = (f + g) / (f - g);
      a.m41 = 0;
      a.m42 = 0;
      a.m43 = 0;
      a.m44 = 1;
      return a;
    },
    kC: function (a, b, c, d, e) {
      b = 1 / Math.tan(b / 2);
      a.m11 = b / c;
      a.m12 = 0;
      a.m13 = 0;
      a.m14 = 0;
      a.m21 = 0;
      a.m22 = b;
      a.m23 = 0;
      a.m24 = 0;
      a.m31 = 0;
      a.m32 = 0;
      a.m33 = (d + e) / (d - e);
      a.m34 = (2 * d * e) / (d - e);
      a.m41 = 0;
      a.m42 = 0;
      a.m43 = -1;
      a.m44 = 0;
      return a;
    },
    wC: function (a, b, c, d, e) {
      a.m11 = d / 2;
      a.m12 = 0;
      a.m13 = 0;
      a.m14 = d / 2 + b;
      a.m21 = 0;
      a.m22 = -e / 2;
      a.m23 = 0;
      a.m24 = e / 2 + c;
      a.m31 = 0;
      a.m32 = 0;
      a.m33 = 0.5;
      a.m34 = 0.5;
      a.m41 = 0;
      a.m42 = 0;
      a.m43 = 1;
      a.m44 = 1;
      return a;
    },
    SB: function (a, b) {
      var c = Math.sin(b);
      b = Math.cos(b);
      var d = a.m11,
        e = a.m21;
      a.m11 = b * d - c * e;
      a.m21 = c * d + b * e;
      d = a.m12;
      e = a.m22;
      a.m12 = b * d - c * e;
      a.m22 = c * d + b * e;
      d = a.m13;
      e = a.m23;
      a.m13 = b * d - c * e;
      a.m23 = c * d + b * e;
      d = a.m14;
      e = a.m24;
      a.m14 = b * d - c * e;
      a.m24 = c * d + b * e;
      return a;
    },
    translate: function (a, b, c, d) {
      a.m14 += b;
      a.m24 += c;
      a.m34 += d;
      return a;
    },
    scale: function (a, b, c, d) {
      a.m11 *= b;
      a.m12 *= b;
      a.m13 *= b;
      a.m14 *= b;
      a.m21 *= c;
      a.m22 *= c;
      a.m23 *= c;
      a.m24 *= c;
      a.m31 *= d;
      a.m32 *= d;
      a.m33 *= d;
      a.m34 *= d;
      return a;
    },
    Sc: function (a, b, c) {
      var d = b.m11,
        e = b.m12,
        f = b.m13,
        g = b.m14,
        h = b.m21,
        k = b.m22,
        l = b.m23,
        m = b.m24,
        n = b.m31,
        q = b.m32,
        r = b.m33,
        w = b.m34,
        G = b.m41,
        v = b.m42,
        P = b.m43;
      b = b.m44;
      var I = a.m11,
        J = a.m12,
        O = a.m13,
        F = a.m14;
      c.m11 = I * d + J * h + O * n + F * G;
      c.m12 = I * e + J * k + O * q + F * v;
      c.m13 = I * f + J * l + O * r + F * P;
      c.m14 = I * g + J * m + O * w + F * b;
      I = a.m21;
      J = a.m22;
      O = a.m23;
      F = a.m24;
      c.m21 = I * d + J * h + O * n + F * G;
      c.m22 = I * e + J * k + O * q + F * v;
      c.m23 = I * f + J * l + O * r + F * P;
      c.m24 = I * g + J * m + O * w + F * b;
      I = a.m31;
      J = a.m32;
      O = a.m33;
      F = a.m34;
      c.m31 = I * d + J * h + O * n + F * G;
      c.m32 = I * e + J * k + O * q + F * v;
      c.m33 = I * f + J * l + O * r + F * P;
      c.m34 = I * g + J * m + O * w + F * b;
      I = a.m41;
      J = a.m42;
      O = a.m43;
      F = a.m44;
      c.m41 = I * d + J * h + O * n + F * G;
      c.m42 = I * e + J * k + O * q + F * v;
      c.m43 = I * f + J * l + O * r + F * P;
      c.m44 = I * g + J * m + O * w + F * b;
      return c;
    },
    Hp: function (a, b, c) {
      var d = b.m11,
        e = b.m12,
        f = b.m14,
        g = b.m21,
        h = b.m22;
      b = b.m24;
      var k = a.m11,
        l = a.m12;
      c.m11 = k * d + l * g;
      c.m12 = k * e + l * h;
      c.m14 = k * f + l * b + a.m14;
      k = a.m21;
      l = a.m22;
      c.m21 = k * d + l * g;
      c.m22 = k * e + l * h;
      c.m24 = k * f + l * b + a.m24;
      return c;
    },
    ng: function (a, b, c) {
      var d = b.x,
        e = b.y;
      b = b.z;
      c.x = a.m11 * d + a.m12 * e + a.m13 * b + 1 * a.m14;
      c.y = a.m21 * d + a.m22 * e + a.m23 * b + 1 * a.m24;
      c.z = a.m31 * d + a.m32 * e + a.m33 * b + 1 * a.m34;
      return c;
    },
    inverse: function (a, b) {
      var c = a.m11,
        d = a.m12,
        e = a.m13,
        f = a.m14,
        g = a.m21,
        h = a.m22,
        k = a.m23,
        l = a.m24,
        m = a.m31,
        n = a.m32,
        q = a.m33,
        r = a.m34,
        w = a.m41,
        G = a.m42,
        v = a.m43;
      a = a.m44;
      var P = c * h - d * g,
        I = c * k - e * g,
        J = c * l - f * g,
        O = d * k - e * h,
        F = d * l - f * h,
        ha = e * l - f * k,
        Ca = m * G - n * w,
        Xa = m * v - q * w,
        Rb = m * a - r * w,
        Sa = n * v - q * G,
        Lc = n * a - r * G,
        nf = q * a - r * v,
        Ya = 1 / (P * nf - I * Lc + J * Sa + O * Rb - F * Xa + ha * Ca);
      b.m11 = (h * nf - k * Lc + l * Sa) * Ya;
      b.m12 = (-d * nf + e * Lc - f * Sa) * Ya;
      b.m13 = (G * ha - v * F + a * O) * Ya;
      b.m14 = (-n * ha + q * F - r * O) * Ya;
      b.m21 = (-g * nf + k * Rb - l * Xa) * Ya;
      b.m22 = (c * nf - e * Rb + f * Xa) * Ya;
      b.m23 = (-w * ha + v * J - a * I) * Ya;
      b.m24 = (m * ha - q * J + r * I) * Ya;
      b.m31 = (g * Lc - h * Rb + l * Ca) * Ya;
      b.m32 = (-c * Lc + d * Rb - f * Ca) * Ya;
      b.m33 = (w * F - G * J + a * P) * Ya;
      b.m34 = (-m * F + n * J - r * P) * Ya;
      b.m41 = (-g * Sa + h * Xa - k * Ca) * Ya;
      b.m42 = (c * Sa - d * Xa + e * Ca) * Ya;
      b.m43 = (-w * O + G * I - v * P) * Ya;
      b.m44 = (m * O - n * I + q * P) * Ya;
      return b;
    },
    sn: function (a, b, c, d) {
      0 >= c
        ? (d
            ? ((b[0] = a.m11),
              (b[4] = a.m12),
              (b[8] = a.m13),
              (b[12] = a.m14),
              (b[1] = a.m21),
              (b[5] = a.m22),
              (b[9] = a.m23),
              (b[13] = a.m24),
              (b[2] = a.m31),
              (b[6] = a.m32),
              (b[10] = a.m33),
              (b[14] = a.m34),
              (b[3] = a.m41),
              (b[7] = a.m42),
              (b[11] = a.m43))
            : ((b[0] = a.m11),
              (b[1] = a.m12),
              (b[2] = a.m13),
              (b[3] = a.m14),
              (b[4] = a.m21),
              (b[5] = a.m22),
              (b[6] = a.m23),
              (b[7] = a.m24),
              (b[8] = a.m31),
              (b[9] = a.m32),
              (b[10] = a.m33),
              (b[11] = a.m34),
              (b[12] = a.m41),
              (b[13] = a.m42),
              (b[14] = a.m43)),
          (b[15] = a.m44))
        : (d
            ? ((b[c] = a.m11),
              (b[c + 4] = a.m12),
              (b[c + 8] = a.m13),
              (b[c + 12] = a.m14),
              (b[c + 1] = a.m21),
              (b[c + 5] = a.m22),
              (b[c + 9] = a.m23),
              (b[c + 13] = a.m24),
              (b[c + 2] = a.m31),
              (b[c + 6] = a.m32),
              (b[c + 10] = a.m33),
              (b[c + 14] = a.m34),
              (b[c + 3] = a.m41),
              (b[c + 7] = a.m42),
              (b[c + 11] = a.m43))
            : ((b[c] = a.m11),
              (b[c + 1] = a.m12),
              (b[c + 2] = a.m13),
              (b[c + 3] = a.m14),
              (b[c + 4] = a.m21),
              (b[c + 5] = a.m22),
              (b[c + 6] = a.m23),
              (b[c + 7] = a.m24),
              (b[c + 8] = a.m31),
              (b[c + 9] = a.m32),
              (b[c + 10] = a.m33),
              (b[c + 11] = a.m34),
              (b[c + 12] = a.m41),
              (b[c + 13] = a.m42),
              (b[c + 14] = a.m43)),
          (b[c + 15] = a.m44));
      return b;
    },
    set: function (a, b) {
      a.m11 = b.m11;
      a.m12 = b.m12;
      a.m13 = b.m13;
      a.m14 = b.m14;
      a.m21 = b.m21;
      a.m22 = b.m22;
      a.m23 = b.m23;
      a.m24 = b.m24;
      a.m31 = b.m31;
      a.m32 = b.m32;
      a.m33 = b.m33;
      a.m34 = b.m34;
      a.m41 = b.m41;
      a.m42 = b.m42;
      a.m43 = b.m43;
      a.m44 = b.m44;
      return a;
    },
  };
  Wf.g = !0;
  Wf.prototype = { j: Wf };
  Qc.g = !0;
  Qc.prototype = {
    bf: function (a, b) {
      var c = a.x;
      a = a.y;
      var d = new y();
      d.x = c;
      d.y = a;
      this.Wa = d;
      Ud.normalize(this.Wa);
      d = this.Wa;
      this.lc = d.x * b.x + d.y * b.y;
      return this;
    },
    Il: function (a, b) {
      var c = b.x - a.x;
      b = b.y - a.y;
      var d = new y();
      d.x = c;
      d.y = b;
      d = this.Wa = d;
      c = d.y;
      d.y = d.x;
      d.x = -c;
      Ud.normalize(this.Wa);
      d = this.Wa;
      this.lc = d.x * a.x + d.y * a.y;
      return this;
    },
    Br: function (a) {
      return a.x * this.Wa.x + a.y * this.Wa.y - this.lc;
    },
    j: Qc,
  };
  Zb.g = !0;
  Zb.mo = function (a, b) {
    var c = new Zb(),
      d = c.origin;
    d.x = a.x;
    d.y = a.y;
    d = c.direction;
    d.x = b.x;
    d.y = b.y;
    return c;
  };
  Zb.prototype = {
    normalize: function () {
      var a = this.direction.x * this.direction.x + this.direction.y * this.direction.y;
      0 < a && ((a = Math.sqrt(a)), (this.direction.x /= a), (this.direction.y /= a));
      return a;
    },
    clone: function () {
      return Zb.mo(this.origin, this.direction);
    },
    j: Zb,
  };
  Vf.g = !0;
  Vf.prototype = { j: Vf };
  Nc.g = !0;
  Nc.prototype = { j: Nc };
  var Ud = {
    su: function (a, b) {
      var c = a.x,
        d = a.y,
        e = 2 * (c * b.x + d * b.y);
      a.x = c - e * b.x;
      a.y = d - e * b.y;
    },
    xz: function (a) {
      return Math.sqrt(a.x * a.x + a.y * a.y);
    },
    normalize: function (a) {
      var b = Math.sqrt(a.x * a.x + a.y * a.y);
      1e-6 < b && ((a.x /= b), (a.y /= b));
      return b;
    },
  };
  y.g = !0;
  y.prototype = { j: y };
  wg.g = !0;
  wg.zy = function (a, b, c, d, e) {
    return Math.max(0, a * c + b * d - e);
  };
  Ld.g = !0;
  Ld.Ph = function (a, b, c, d, e) {
    return 0 > a * c + b * d - e;
  };
  Dc.g = !0;
  Dc.prototype = {
    fj: function (a) {
      this.cj = a;
    },
    Cf: function () {
      throw 19;
    },
    re: function (a, b) {
      a -= 0.4999;
      return Math.round(a + (b + 0.4999 - a) * this.Cf());
    },
    Ke: function (a, b) {
      return a + (b - a) * this.Cf();
    },
    Ky: function (a) {
      return this.Ke(-a, a);
    },
    j: Dc,
  };
  Hd.g = !0;
  Hd.D = Dc;
  Hd.prototype = u(Dc.prototype, {
    fj: function (a) {
      Dc.prototype.fj.call(this, a);
    },
    Cf: function () {
      return (this.cj = (16807 * this.cj) % 2147483647) / 2147483647;
    },
    j: Hd,
  });
  bb.g = !0;
  bb.D = Dc;
  bb.prototype = u(Dc.prototype, {
    Cf: function () {
      return Math.random();
    },
    j: bb,
  });
  K.g = !0;
  K.Ea = function () {
    return ++K.R;
  };
  K.prototype = {
    update: function () {},
    et: function (a) {
      return Math.min(1, this.time / a);
    },
    U: function () {},
    wb: function () {
      return ja.gw;
    },
    j: K,
  };
  aa.g = !0;
  aa.D = K;
  aa.prototype = u(K.prototype, {
    U: function (a) {
      K.prototype.U.call(this, a);
      this.ja = a;
    },
    o: function () {
      this.ja.o();
      this.ja = null;
    },
    remove: function () {
      this.ja.Lc(this);
      this.ja = null;
    },
    j: aa,
  });
  zb.g = !0;
  zb.D = aa;
  zb.prototype = u(aa.prototype, {
    wb: function () {
      return ja.tg;
    },
    U: function (a) {
      aa.prototype.U.call(this, a);
      var b = a.Le(cb.TYPE),
        c = b.ae,
        d = c.x,
        e = c.y;
      c = new y();
      c.x = d;
      c.y = e;
      this.offset = c;
      this.scale = b.scale;
      this.align = a.client.H().fb.Nj;
    },
    update: function (a) {
      var b = this.time / M.uu;
      b = this.easing(b);
      b = z.min(b, 1);
      var c = 0,
        d = 0,
        e = M.Fu;
      switch (a.I.Qy(a)) {
        case 0:
          0 == this.align ? (d = -this.offset.y) : (c = -this.offset.x);
          e = 1;
          break;
        case 1:
          e = M.Eu;
          c = -1 * M.Zh;
          break;
        default:
          c = -1 * M.Zh;
      }
      a = a.Le(cb.TYPE);
      a.ae.x = z.map(b, 0, 1, this.offset.x, this.offset.x + c);
      a.ae.y = z.map(b, 0, 1, this.offset.y, this.offset.y + d);
      a.scale = z.map(b, 0, 1, this.scale, e);
      1 == b && (this.remove(), zb.count--);
    },
    j: zb,
  });
  id.g = !0;
  id.D = aa;
  id.prototype = u(aa.prototype, {
    wb: function () {
      return ja.tg;
    },
    U: function (a) {
      aa.prototype.U.call(this, a);
      var b = a.Le(cb.TYPE);
      b.scale = this.scale;
      b.update(a);
    },
    update: function (a) {
      this.interval += a.nb;
      var b = this.easing(z.min(1, this.interval / M.uu));
      a.Le(cb.TYPE).scale = z.map(b, 0, 1, 0, this.ff);
      1 == b && this.remove();
    },
    j: id,
  });
  Kd.g = !0;
  Kd.D = aa;
  Kd.prototype = u(aa.prototype, {
    wb: function () {
      return ja.zj;
    },
    U: function (a) {
      aa.prototype.U.call(this, a);
      a = a.scale;
      a.a = a.b = 0;
    },
    update: function (a) {
      this.qb -= a.nb;
      if (!(0 < this.qb)) {
        this.interval += a.nb;
        var b = z.min(1, this.interval / 0.2);
        a = a.scale;
        var c = z.map(this.easing(b), 0, 1, 0, 1);
        a.a = a.b;
        a.b = c;
        1 == b && this.remove();
      }
    },
    j: Kd,
  });
  Jd.g = !0;
  Jd.D = aa;
  Jd.prototype = u(aa.prototype, {
    wb: function () {
      return ja.zj;
    },
    U: function (a) {
      aa.prototype.U.call(this, a);
      this.Zt = a.client.Z(null, new Se(this.zt));
    },
    update: function (a) {
      this.qb -= a.nb;
      if (!(0 < this.qb)) {
        var b = a.client;
        this.interval += a.nb;
        var c = z.min(1, this.interval);
        this.Zt.F.aa(c);
        b = b.scale;
        var d = z.Wb(0.5, 1, tg()(c));
        b.a = b.b;
        b.b = d;
        1 == c && (a.Zq(this.zt), this.Zt.o(), this.remove());
      }
    },
    j: Jd,
  });
  bc.g = !0;
  bc.D = aa;
  bc.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      bc.count++;
      this.me = a.client;
      a.Lc(null, rb.TYPE);
      this.alpha = this.me.alpha;
      this.scale = this.me.scale.b;
    },
    update: function (a) {
      var b = a.client;
      switch (this.state) {
        case 0:
          if (this.time < b.vb) break;
          b.W().xg(b.W().ji(b.Cd));
          b.Ub(53);
          b.H().notify(26, Ba.Fc(["bubble", a]));
          this.state = 1;
          this.time = 0;
          break;
        case 1:
        case 2:
          if (0.2 < this.time && 1 == this.state) {
            var c = b.Cd;
            b.ja.f.Cg && (c = -1);
            b.H().notify(7, Ba.Fc(["bubble", a, "burstIndex", c]));
            this.state = 2;
          }
          c = this.time / 0.25;
          1 < c && (c = 1);
          var d = b.scale;
          d.a = d.b;
          d.b = this.scale * (1 - c);
          b.alpha = this.alpha * (1 - c);
          if (1 == c && 2 == this.state) {
            bc.count--;
            if (100 == a.code) {
              b = b.W().level.data.yn();
              var e = [];
              for (c = 0; c < b.length; ) {
                var f = b[c];
                ++c;
                1 <= f && 7 > f && e.push(f);
              }
              b = e;
              for (c = 0; 6 > c; ) {
                f = c++;
                d = b[f % b.length];
                var g = bb.instance.Ke(5, 8);
                e = Math.sin(1.0471975511965976 * f) * g;
                f = Math.cos(1.0471975511965976 * f) * g;
                g = a.I.Wj(d);
                d = g.scale;
                d.a = d.b = bb.instance.Ke(0.25, 0.5);
                d = g.G;
                var h = a.G;
                d.x = h.x;
                d.y = h.y;
                g.Ga.x = e;
                g.Ga.y = f;
                g.Ya(new Nb());
              }
            } else
              0.25 > Math.random() &&
                200 != a.code &&
                ((g = a.I.Wj(300)),
                (g.Uc = 0),
                (d = g.scale),
                (d.a = d.b = bb.instance.Ke(0.15, 0.5)),
                (d = g.G),
                (h = a.G),
                (d.x = h.x),
                (d.y = h.y),
                (g.Ga.x = 0),
                (g.Ga.y = -10 * (1 + (0.4 - g.scale.b))),
                g.Ya(new Lb()),
                g.Ya(new Cc()),
                (g.Qg = -2),
                (g.f.$h = !1));
            this.o();
          }
      }
    },
    wb: function () {
      return ja.tg;
    },
    j: bc,
  });
  hd.g = !0;
  hd.D = aa;
  hd.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      this.me = a.client;
      a.Lc(null, rb.TYPE);
      this.me.Ub(53);
      this.me.H().notify(26, Ba.Fc(["bubble", a]));
      this.me.H().notify(7, Ba.Fc(["bubble", a, "burstIndex", -1]));
    },
    update: function () {
      this.o();
    },
    wb: function () {
      return ja.tg;
    },
    j: hd,
  });
  gd.g = !0;
  gd.D = aa;
  gd.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      this.me = a.client;
      a.Lc(null, rb.TYPE);
      this.alpha = this.me.alpha;
      this.scale = this.me.scale.b;
    },
    update: function (a) {
      var b = a.client;
      switch (this.state) {
        case 0:
          b.W().xg(b.W().ji(b.Cd));
          b.Ub(53);
          b.H().notify(26, Ba.Fc(["bubble", a]));
          this.state = 1;
          this.time = 0;
          break;
        case 1:
          var c = this.time / 0.2,
            d = b.scale,
            e = 1 + 0.3 * lf(2)(c);
          d.a = d.b;
          d.b = e;
          if (!(1 > c)) {
            b.H().notify(7, Ba.Fc(["bubble", a]));
            b = b.W().level.data.yn();
            e = [];
            for (c = 0; c < b.length; ) (d = b[c]), ++c, 1 <= d && 7 > d && e.push(d);
            b = e;
            for (c = 0; 6 > c; ) {
              d = c++;
              var f = b[d % b.length],
                g = bb.instance.Ke(5, 8);
              e = Math.sin(1.0471975511965976 * d) * g;
              g *= Math.cos(1.0471975511965976 * d);
              f = a.I.Wj(f);
              d = f.scale;
              d.a = d.b = bb.instance.Ke(0.25, 0.5);
              d = f.G;
              var h = a.G;
              d.x = h.x;
              d.y = h.y;
              f.Ga.x = e;
              f.Ga.y = g;
              f.Ya(new Nb());
            }
            this.o();
          }
      }
    },
    wb: function () {
      return ja.tg;
    },
    j: gd,
  });
  fd.g = !0;
  fd.D = aa;
  fd.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      this.object = a.client;
      a.Lc(null, rb.TYPE);
      a.f.de && (this.object.vb = 0);
      this.object.H().notify(31);
      a.Lc(null, Kb.TYPE);
      a.Ya(new Lb());
      this.state = 1;
      this.object.vb = 0;
      a.Ga.x = this.object.C().cols / 2 - a.mb;
    },
    update: function (a) {
      switch (this.state) {
        case 1:
          this.object.alpha = 1;
          var b = this.object.scale;
          b.a = b.b = 1;
          var c = a.Ga,
            d = (b = new y());
          d.x = c.x * a.nb;
          d.y = c.y * a.nb;
          c = a.client;
          var e = a.G.x,
            f = a.G.y,
            g = a.ca;
          b = new cd();
          b.G.x = e;
          b.G.y = f;
          b.ca = g;
          e = a.I.Bb;
          b = e.Uj(b, d, Infinity);
          if (0 >= b || 1 < b) break;
          2 == e.Dd && ((this.Uq = !0), c.H().notify(32));
          a.G.x += b * d.x;
          a.G.y += b * d.y;
          a.nb = 0;
          b = e.Eg;
          c.Om(b.Wa, 0.7);
          a.lp(b);
          this.Uq && this.state++;
          break;
        case 2:
          0 <= a.Ga.y && (this.state = 3);
          break;
        case 3:
          if (((this.object.vb -= a.nb), !(0 < this.object.vb))) {
            this.object.Ub(54);
            this.object.H().notify(27);
            this.state = 4;
            for (d = this.time = 0; 5 > d; )
              d++,
                (c = a.I.Wj(300)),
                (c.Uc = 0),
                (b = c.scale),
                (b.a = b.b = bb.instance.Ke(0.15, 0.5)),
                (b = c.G),
                (e = a.G),
                (b.x = e.x),
                (b.y = e.y),
                (c.Ga.x = 0),
                (c.Ga.y = -10 * (1 + (0.4 - c.scale.b))),
                c.Ya(new Lb()),
                c.Ya(new Cc()),
                (c.Qg = -2),
                (c.f.$h = !1);
            this.o();
          }
      }
    },
    wb: function () {
      return ja.yj;
    },
    j: fd,
  });
  ic.g = !0;
  ic.D = aa;
  ic.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      ic.count++;
    },
    update: function (a) {
      a = a.client;
      switch (this.state) {
        case 0:
          if (this.time < this.qb) break;
          a.visible = !0;
          a.alpha = 1;
          this.state++;
          break;
        case 1:
          (a.alpha -= 0.05), 0 > a.alpha && (ic.count--, this.o());
      }
    },
    wb: function () {
      return ja.tg;
    },
    j: ic,
  });
  sb.g = !0;
  sb.D = aa;
  sb.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      this.object = a.client;
      a.Lc(null, rb.TYPE);
      sb.count++;
      sb.yb.push(this);
    },
    o: function () {
      aa.prototype.o.call(this);
      sb.count--;
      Y.remove(sb.yb, this);
    },
    update: function (a) {
      switch (this.state) {
        case 0:
          if (this.time < this.object.vb) break;
          a.Lc(null, Kb.TYPE);
          a.Ya(new Lb());
          var b = bb.instance.Ky(3);
          a.Ga.x = b;
          this.object.H().notify(31);
          this.object.W().xg(this.object.W().ji(this.object.Cd));
          this.state = 1;
          this.time = 0;
          break;
        case 1:
          var c = z.min(1, this.time / 0.5);
          b = a.scale;
          c = z.map(this.ky(c), 0, 1, 1, 0.5);
          b.a = b.b;
          b.b = c;
          c = a.Ga;
          b = this.uo;
          b.x = c.x * a.nb;
          b.y = c.y * a.nb;
          c = a.I.Bb;
          var d = a.G.x,
            e = a.G.y,
            f = a.ca,
            g = new cd();
          g.G.x = d;
          g.G.y = e;
          g.ca = f;
          d = c.Uj(g, b, Infinity);
          if (this.object.C().viewport.Ac(g.G.y + g.ca) > this.object.H().xe.y) {
            this.o();
            break;
          }
          if (0 >= d || 1 < d) break;
          g = c.Eg;
          c = c.Dd;
          if (0 == c) break;
          2 == c && ((this.state = 2), (this.time = 0), this.object.H().notify(32));
          a.G.x += d * b.x;
          a.G.y += d * b.y;
          a.nb = 0;
          this.object.Om(g.Wa, 0.7);
          a.lp(g);
          break;
        case 2:
          (c = z.min(1, this.time)),
            (a = this.ly(c)),
            (this.object.alpha = 1 - a),
            (b = this.object.scale),
            (b.a = b.b),
            (b.b = 0.001 + this.object.alpha),
            0.01 > this.object.alpha && this.o();
      }
    },
    wb: function () {
      return ja.yj;
    },
    j: sb,
  });
  Se.g = !0;
  Se.D = x;
  Se.prototype = u(x.prototype, {
    ba: function () {
      x.prototype.ba.call(this);
      this.parent.H().zb(3).appendChild(this.F);
      this.F.ab();
      this.F.Qa();
      this.F.aa(0);
    },
    o: function () {
      x.prototype.o.call(this);
      this.F.o();
      this.F = null;
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      this.F.update(a);
    },
    Ca: function (a) {
      x.prototype.Ca.call(this, a);
      var b = this.parent;
      this.F.ea(b.vc.x * a + b.Dh.x * (1 - a));
      this.F.fa(b.vc.y * a + b.Dh.y * (1 - a));
      var c = b.Eh,
        d = b.scale;
      b = b.ja.scale;
      this.F.na(
        ((2 * (c.b * a + c.a * (1 - a))) / this.F.O.x) * 0.95 * (d.b * a + d.a * (1 - a)) * (b.b * a + b.a * (1 - a))
      );
    },
    R: function () {
      return 25;
    },
    j: Se,
  });
  Nb.g = !0;
  Nb.D = aa;
  Nb.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      a.Ya(new Lb());
      Nb.count++;
    },
    update: function (a) {
      var b = a.G,
        c = a.Ga,
        d = this.uo;
      d.x = c.x * a.nb;
      d.y = c.y * a.nb;
      var e = a.I.Bb;
      c = a.client;
      if (b.y - 2 * a.ca > -e.tc.i[2].lc) Nb.count--, this.o();
      else if (1 != this.Cm) {
        b = a.G.x;
        var f = a.G.y,
          g = a.ca,
          h = new cd();
        h.G.x = b;
        h.G.y = f;
        h.ca = g;
        b = e.Uj(h, d, Infinity);
        if (!(0 >= b || 1 < b) && ((f = e.Eg), (e = e.Dd), 0 != e)) {
          if (2 == e && (this.Cm++, 1 < this.Cm)) return;
          a.G.x += b * d.x;
          a.G.y += b * d.y;
          a.nb = 0;
          c.Om(f.Wa, 0.7);
          a.lp(f);
        }
      }
    },
    wb: function () {
      return ja.yj;
    },
    j: Nb,
  });
  Cc.g = !0;
  Cc.D = aa;
  Cc.prototype = u(aa.prototype, {
    U: function (a) {
      aa.prototype.U.call(this, a);
      this.x = a.G.x;
      this.time = Math.random();
    },
    update: function (a) {
      aa.prototype.update.call(this, a);
      a.G.x = this.x + 0.5 * Math.sin(5 * this.time);
      a.f.de && this.o();
    },
    j: Cc,
  });
  var zg = {
    wn: function (a) {
      switch (a) {
        case 1:
          return "blue";
        case 2:
          return "green";
        case 3:
          return "yellow";
        case 4:
          return "aqua";
        case 5:
          return "purple";
        case 6:
          return "red";
        case 7:
          return "white";
        default:
          return null;
      }
    },
  };
  rb.g = !0;
  rb.D = K;
  rb.prototype = u(K.prototype, {
    wb: function () {
      return ja.hw;
    },
    U: function (a) {
      K.prototype.U.call(this, a);
      this.easing = Ob(2);
    },
    update: function (a) {
      var b = a.client,
        c = a.I.viewport;
      if (a.I.Ok(10)) {
        if (200 > a.code) {
          b.alpha = 1;
          return;
        }
        a = (a.I.pc - a.Ta + 1) / M.MA;
        a = z.ce(a);
        this.jk = 0.1;
        this.Sl = a;
      } else
        (a = z.map(c.Ac(a.G.y), 0, (0.4 >= b.H().fb.Mq ? 3 : 1) * c.zoom * 2, 0, 1)),
          (a = z.ce(a)),
          (this.Sl = z.max(this.Sl, a)),
          (this.ff = z.max(this.ff, a)),
          (this.jk = 0.9);
      this.alpha += (this.Sl - this.alpha) * this.jk;
      this.scale += (this.ff - this.scale) * this.jk;
      b.alpha = lf(3)(this.alpha);
      b = b.scale;
      a = Ob(3)(this.alpha);
      b.a = b.b;
      b.b = a;
    },
    j: rb,
  });
  t.g = !0;
  t.D = x;
  t.prototype = u(x.prototype, {
    H: function () {
      return yb.instance;
    },
    C: function () {
      return this.H().Wh;
    },
    W: function () {
      return this.H().model;
    },
    o: function () {
      null != this.H() && this.H().detach(this);
      x.prototype.o.call(this);
    },
    R: function () {
      return 20;
    },
    j: t,
  });
  Re.g = !0;
  Re.Xb = !0;
  Re.prototype = { j: Re };
  Bc.g = !0;
  Bc.Da = [Re];
  Bc.D = t;
  Bc.prototype = u(t.prototype, {
    UD: function () {
      return this.ja.code;
    },
    pop: function () {
      100 == this.ja.code ? (this.W().Zj ? this.ja.Ya(new fd()) : this.ja.Ya(new gd())) : this.ja.Ya(new bc());
    },
    jB: function () {
      this.ja.Ya(new hd());
    },
    ei: function () {
      this.ja.Ya(new sb());
    },
    Fm: function () {
      this.o();
    },
    vx: function () {
      this.Ub(52);
    },
    Om: function (a, b, c) {
      null == c && (c = 0);
      null == b && (b = 1);
      var d = Math.min(this.ja.ny, b);
      b = this.ja.Ga;
      var e = b.x * a.x + b.y * a.y;
      b = -(1 + d) * e * a.x * this.ja.Kk;
      a = -(1 + d) * e * a.y * this.ja.Kk;
      0 < c && ((d = Math.sqrt(b * b + a * a)), d < c && ((b = (b / d) * c), (a = (a / d) * c)));
      this.ja.Ga.x += b;
      this.ja.Ga.y += a;
    },
    o: function () {
      t.prototype.o.call(this);
      this.ja = null;
    },
    M: function (a) {
      var b = this.Dh,
        c = this.vc;
      b.x = c.x;
      b.y = c.y;
      this.ja.ns(this.vc);
      b = this.Eh;
      c = this.ja.ca * this.ja.I.viewport.zoom;
      b.a = b.b;
      b.b = c;
      this.visible = !this.ja.f.de;
      t.prototype.M.call(this, a);
    },
    R: function () {
      return 24;
    },
    j: Bc,
  });
  Ia.g = !0;
  Ia.D = x;
  Ia.prototype = u(x.prototype, {
    ba: function () {
      x.prototype.ba.call(this);
      var a = this.parent,
        b = a.H(),
        c = 3;
      300 == a.ja.code && (c = 0);
      this.F = new W(b.zb(c));
      this.F.N(!1);
      this.F.cf(ya, this.tn());
      this.F.ab();
      this.F.Qa();
      if (null == Ia.Wi)
        for (Ia.Wi = [], a = 1; 7 >= a; )
          (b = Sb.qr("bubbles/pop/" + a + "/", 20)), (Ia.Wi[a] = Sb.xr("pop_" + a, b)), ++a;
      Ia.count++;
    },
    o: function () {
      x.prototype.o.call(this);
      this.F.o();
      this.F = null;
      Ia.count--;
    },
    Y: function (a) {
      var b = this;
      x.prototype.Y.call(this, a);
      switch (a.type) {
        case 52:
          this.F.xc(this.tn());
          break;
        case 53:
          a = this.parent;
          if (7 < a.ja.code) break;
          var c = a.vc,
            d = c.x,
            e = c.y;
          c = new y();
          c.x = d;
          c.y = e;
          this.Ue = c;
          a = a.ja.code;
          this.pop = new W(this.F.ac(), ya, "bubbles/pop/" + a + "/0001");
          this.pop.ab();
          this.pop.Qa();
          this.pop.Bk().play(Ia.Wi[a], !0, 0, function () {
            b.pop.o();
            b.pop = null;
          });
          a = this.pop.Ih(360 * Math.random());
          this.pop.ea(this.Ue.x);
          this.pop.fa(this.Ue.y);
          this.Ve = c = new y();
          this.Ve.x = 10 * Math.sin(0.0174532925199432 * a);
          this.Ve.y = 10 * Math.cos(0.0174532925199432 * a);
          this.time = 0;
          break;
        case 54:
          (a = this.parent),
            (c = a.vc),
            (d = c.x),
            (e = c.y),
            (c = new y()),
            (c.x = d),
            (c.y = e),
            (this.Ue = c),
            (this.pop = new W(this.F.ac(), ya, "bubbles/pop/0/0001")),
            this.pop.ab(),
            this.pop.Qa(),
            this.pop.Bk().play(Ia.Wi[0], !0, 0, function () {
              b.pop.o();
              b.pop = null;
            }),
            this.pop.ea(this.Ue.x),
            this.pop.fa(this.Ue.y),
            (c = new y()),
            (c.x = 0),
            (c.y = 0),
            (this.Ve = c),
            (this.time = 0);
      }
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      this.F.update(a);
      null != this.pop && ((this.Ve.y += 100 * a), (this.du = this.et(0.5)));
    },
    Ca: function (a) {
      x.prototype.Ca.call(this, a);
      var b = this.parent;
      this.F.ea(b.vc.x * a + b.Dh.x * (1 - a));
      this.F.fa(b.vc.y * a + b.Dh.y * (1 - a));
      var c = b.Eh,
        d = b.scale,
        e = b.ja.scale;
      this.F.na(((2 * (c.b * a + c.a * (1 - a))) / this.F.O.x) * 0.9 * (d.b * a + d.a * (1 - a)) * (e.b + 0 * e.a));
      this.F.N(b.visible);
      this.F.aa(b.alpha);
      null != this.pop &&
        (this.pop.ea(this.F.ra + this.Ve.x),
        this.pop.fa(this.F.ma + this.Ve.y),
        this.pop.aa(1 - this.du),
        (c = b.Eh),
        this.pop.na((2 * (c.b * a + c.a * (1 - a))) / this.F.O.x));
    },
    tn: function () {
      var a = this.parent.ja.code;
      if (0 < a && 10 > a) return "bubbles/bubble" + a;
      switch (a) {
        case 200:
          return "bubbles/clear";
        case 300:
          return "bubbles/air";
        default:
          throw 20;
      }
    },
    R: function () {
      return 54;
    },
    j: Ia,
  });
  Ac.g = !0;
  Ac.D = Ia;
  Ac.prototype = u(Ia.prototype, {
    ba: function () {
      Ia.prototype.ba.call(this);
      if (null == Ac.Yu) {
        var a = Sb.qr("bubbles/shiny/", 28);
        Ac.Yu = Sb.xr("shiny", a);
      }
      this.cd = new W(this.F.ac(), ya, "bubbles/shiny/0001");
      this.cd.ab();
      this.cd.Qa();
      this.cd.N(!1);
      this.Ct = 4;
    },
    o: function () {
      this.cd.o();
      Ia.prototype.o.call(this);
    },
    Y: function (a) {
      var b = this;
      if (54 == a.type) {
        var c = this.parent.vc;
        a = c.x;
        var d = c.y;
        c = new y();
        c.x = a;
        c.y = d;
        this.Ue = c;
        this.pop = new W(this.F.ac(), ya, "bubbles/pop/7/0001");
        this.pop.ab();
        this.pop.Qa();
        this.pop.Bk().play(Ia.Wi[7], !0, 0, function () {
          b.pop.o();
          b.pop = null;
        });
        this.pop.ea(this.Ue.x);
        this.pop.fa(this.Ue.y);
        c = new y();
        c.x = 0;
        c.y = 0;
        this.Ve = c;
        this.time = 0;
      }
    },
    M: function (a) {
      Ia.prototype.M.call(this, a);
      null == this.pop &&
        this.time > this.Ct &&
        (this.cd.Bk().play(Ac.Yu, !0, null, L(this, this.$A)),
        this.cd.N(!0),
        (this.time = 0),
        (this.Ct = bb.instance.Ke(2, 5)),
        (this.xp = !0));
    },
    Ca: function (a) {
      Ia.prototype.Ca.call(this, a);
      this.xp &&
        ((a = this.parent),
        this.cd.ea(this.F.ra),
        this.cd.fa(this.F.ma),
        this.cd.na(this.F.Ja),
        this.cd.N(a.visible),
        this.cd.aa(a.alpha));
    },
    tn: function () {
      return "bubbles/bubble_target";
    },
    $A: function () {
      this.xp = !1;
      this.cd.N(!1);
    },
    R: function () {
      return 55;
    },
    j: Ac,
  });
  ob.g = !0;
  ob.D = x;
  ob.prototype = u(x.prototype, {
    o: function () {
      ua.ob().detach(L(this, this.sc));
      this.St = this.Rt = null;
      x.prototype.o.call(this);
    },
    Zs: function () {
      return 0 != (this.flags & 32);
    },
    sp: function (a) {
      this.flags = (this.flags & -33) | 32;
      this.flags = (this.flags & -65) | ((a ? 1 : 0) << 6);
      this.mj = !1;
      this.Ub(a ? 50 : 51);
    },
    co: function () {
      return 0 != (this.flags & 64);
    },
    ub: function (a) {
      return this.ue.ub(a);
    },
    af: function (a) {
      this.ue.af(a);
    },
    N: function (a) {
      this.ue.dd.N(a);
      this.flags = (this.flags & -9) | ((a ? 1 : 0) << 3);
      return a;
    },
    df: function (a) {
      this.flags = a ? this.flags | 1 : this.flags & -8;
      return a;
    },
    sc: function (a) {
      if (0 == (this.flags & 20) && 9 == (this.flags & 9)) {
        this.mj = !0;
        switch (a.type) {
          case 0:
            if (0 != (this.flags & 6)) return;
            var b = this.ue,
              c = a.x;
            a = a.y;
            var d = new y();
            d.x = c;
            d.y = a;
            if (!b.ub(d)) return;
            this.flags |= 2;
            this.Ub(48);
            null != this.Rt && this.Rt();
            break;
          case 1:
            if (0 == (this.flags & 2) || 0 != (this.flags & 4)) return;
            this.hx ? ((c = a.x), (a = a.y), (d = new y()), (d.x = c), (d.y = a), (b = !this.ub(d))) : (b = !1);
            if (b) {
              this.flags &= -3;
              this.Ub(49);
              return;
            }
            if (0 != (this.flags & 32)) {
              this.flags ^= 64;
              (b = 0 != (this.flags & 64))
                ? (this.rf(46), this.rf(47), this.Ub(b ? 50 : 51))
                : (this.Ub(b ? 50 : 51), this.rf(46), this.rf(47));
              this.flags &= -3;
              return;
            }
            this.Ub(47);
            this.rf(46);
            this.flags |= 4;
            this.flags &= -3;
            this.mn = this.time = 0;
            this.flags = (this.flags & -17) | 16;
            0 == this.lg && this.It();
        }
        this.mj = !1;
      }
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      if (0 < this.lg && 0 != (this.flags & 4)) {
        if (this.time < this.lg) return;
        this.flags = (this.flags & -5) | 0;
        this.It();
      }
      0 != (this.flags & 16) && ((this.mn += a), this.mn > this.lg && (this.flags &= -21));
    },
    It: function () {
      null != this.St && this.St();
      this.rf(47, Ba.Fc(["name", this.name]));
    },
    R: function () {
      return 10;
    },
    j: ob,
  });
  Qa.g = !0;
  Qa.D = x;
  Qa.prototype = u(x.prototype, {
    af: function (a) {
      this.dd.Hy(a, 0, 0, 0);
    },
    ub: function (a) {
      return 0 < this.dd.ub(a);
    },
    o: function () {
      x.prototype.o.call(this);
      this.dd.o();
      this.dd = null;
    },
    Y: function (a) {
      x.prototype.Y.call(this, a);
      switch (a.type) {
        case 47:
          if (na.ug(this.parent, ob).Zs()) break;
          this.animate && this.dd.ti().yv(1, 0.5, tg(0, 0.25));
          if (!this.animate) {
            C.play(C.mm);
            this.ja.N(!1);
            this.state = 2;
            break;
          }
          C.play(C.rw, !1, !0);
          this.frame = 0;
          this.state = 1;
          this.data = Qa.Bi.P.pop;
          this.time = 0;
          break;
        case 48:
          if (na.ug(this.parent, ob).Zs()) break;
          this.animate && this.dd.ti().yv(1.2, 0.5, ac(0.2));
          break;
        case 50:
          this.dd.aa(1);
          na.ug(this.parent, ob).mj && C.play(C.mm);
          break;
        case 51:
          this.dd.aa(0.25), na.ug(this.parent, ob).mj && C.play(C.vw);
      }
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      switch (this.state) {
        case 0:
          this.animate && this.frame++;
          55 == this.frame && (this.time = this.Yb = this.frame = 0);
          switch (this.Yb) {
            case 0:
              a = z.min(this.time / 0.45, 1);
              a = Eg(20)(a);
              this.y = z.Wb(0, this.animate ? -10 : -2, a);
              if (1 > a) return;
              this.Yb = 1;
              this.time = 0;
              break;
            case 1:
              (a = z.min(this.time / 0.45, 1)),
                (a = Eg(-20)(a)),
                (this.y = z.Wb(this.animate ? -10 : -2, 0, a)),
                1 > a || (this.time = this.Yb = 0);
          }
          break;
        case 1:
          (a = z.min(this.time / 1, 1)),
            this.ja.aa(1 - lf(2)(a)),
            this.icon.na(z.Wb(0.75, 1.1, ac(2)(a)) * this.Lf),
            (a = this.icon),
            a.aa(0.8 * a.Ua),
            this.frame++,
            70 == this.frame && (this.state = 2);
      }
    },
    Ca: function (a) {
      x.prototype.Ca.call(this, a);
      switch (this.state) {
        case 0:
          this.setTransform(this.ja);
          this.setTransform(this.icon);
          a = this.icon;
          a.ea(a.ra + this.Dk.x);
          a = this.icon;
          a.fa(a.ma + this.Dk.y);
          a = this.icon;
          a.te(a.Ja * this.Lf);
          a = this.icon;
          a.Pc(a.Sb * this.Lf);
          break;
        case 1:
          this.setTransform(this.ja);
      }
    },
    setTransform: function (a) {
      var b = this.frame << 2;
      a.ea(this.data[b]);
      a.fa(this.data[b + 1] + this.y);
      a.te(this.data[b + 2]);
      a.Pc(this.data[b + 3]);
    },
    R: function () {
      return 11;
    },
    j: Qa,
  });
  M.g = !0;
  ka.g = !0;
  Qe.g = !0;
  Qe.D = t;
  Qe.prototype = u(t.prototype, {
    U: function () {
      var a = this;
      this.Ms();
      A.Ou(function () {
        a.bb(1);
      });
    },
    TD: function () {
      return this.Db;
    },
    xg: function (a) {
      this.Es ||
        this.Zj ||
        0 == a ||
        ((this.Db += a), 9999999 < this.Db && (this.Db = 9999999), this.H().notify(12), T.gt(this.Db));
    },
    DD: function () {
      this.Fp = this.C().viewport.jj(null == this.level ? this.rk.mi(1).Xf : this.level.za.Xf);
      this.C().Bb.ve();
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.BD(a);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 10:
          var b = a.get("bubble");
          a = a.get("bubbleHit");
          b.client.Dq = !0;
          this.Xh[b.code]++;
          b = this.Bp(b);
          this.zD();
          M.ou &&
            200 != a.code &&
            (0 == b.Oi
              ? (this.$o++, (a = ka.Oa / 3), (this.speed -= (5 * this.level.za.speed * a) / this.$o))
              : (this.$o = 0));
          null != b.target &&
            ((a = b.target.client.vc.y / this.H().xe.y), 0 < a && ((a = Ob(2)(a)), (this.speed -= M.pA * a)));
          this.H().notify(23, Ba.Fc(["result", b]));
          this.bb(5);
          break;
        case 13:
          this.Dm = !0;
          break;
        case 19:
          this.iA() && this.HC();
          break;
        case 33:
          this.bb(3);
          break;
        case 37:
          this.Sq = !0;
      }
    },
    cz: function () {
      return 1e3 * this.level.za.level + 2e3 * (this.level.za.level - 1);
    },
    ps: function () {
      return this.W().Py() * this.W().zn();
    },
    Py: function () {
      return this.level.za.level * M.ox;
    },
    zn: function () {
      return z.max(0, (this.Op - this.kd) | 0);
    },
    hs: function () {
      return 5e3 + 1e3 * (this.level.za.level - 1);
    },
    ki: function () {
      return this.cl / this.Dt;
    },
    ji: function (a) {
      var b = M.hB;
      a = a < b.length ? b[a] : b[b.length - 1];
      return a + (this.level.za.level - 1) * a;
    },
    $r: function () {
      return 100 * (this.Ge - 1);
    },
    Uy: function () {
      return 1e3 * (this.level.za.level + 1);
    },
    Tx: function () {
      for (var a = 0, b = 1; b <= zc.cw; ) {
        var c = this.rk.mi(b);
        a += c.lc + 2 * this.C().hr(c.Ft) + 2;
        ++b;
      }
      return a;
    },
    Ms: function () {
      var a = this,
        b = null == this.level,
        c = b ? this.Tr : this.level.za.level + 1;
      Cb.lD(Cb.za().iC(c));
      this.level = this.rk.mo(c);
      var d = this.level.data;
      this.Po = this.level.data.yn();
      this.Xh = this.level.data.kr();
      var e = this.level.za.Xf;
      c = c == this.Tr;
      c = d.ia;
      b && (this.Db = this.pj = 0);
      this.speed = 0;
      this.Tl = !1;
      this.cl = 0;
      this.Dt = d.Yx();
      this.KA = c.sa;
      this.bl = 0;
      this.ct = -1;
      this.zA = this.level.za.lc + 2 * this.C().hr(this.KA) + 2;
      this.Es = !1;
      this.kd = 0;
      this.Op = this.zA / this.level.za.speed;
      this.an = !0;
      this.Ge = 0;
      this.$e = (zc.bw - e) >> 1;
      var f = this.bd.re(0, e - 1),
        g = c.i[0 * c.ga + f];
      c.i[0 * c.ga + f] = 100;
      this.Xh[g]--;
      g = [];
      for (var h = 0, k = c.sa; h < k; ) (f = h++), g.push(0);
      k = g;
      g = 0;
      for (h = this.$e; g < h; ) (f = g++), c.pB(k);
      g = 0;
      for (h = this.$e; g < h; ) (f = g++), c.jx(k);
      g = [];
      h = 0;
      for (k = e; h < k; ) (f = h++), g.push(200);
      this.Ee = g;
      g = 0;
      for (h = this.$e; g < h; ) (f = g++), this.Ee.unshift(0);
      g = 0;
      for (h = this.$e; g < h; ) (f = g++), this.Ee.push(0);
      this.C().Bb.Uu(3, function (l) {
        var m = 2 * a.$e,
          n = new y();
        n.x = m;
        n.y = 0;
        m = n;
        n = new y();
        n.x = 1;
        n.y = 0;
        l.bf(n, m);
      });
      this.C().Bb.Uu(1, function (l) {
        var m = a.C().zk() - 2 * (a.$e + (e & 1)),
          n = new y();
        n.x = m;
        n.y = 0;
        m = n;
        n = new y();
        n.x = -1;
        n.y = 0;
        l.bf(n, m);
      });
      this.Ul = !0;
      if (b) {
        this.C().jC(d);
        b = M.LA + 1;
        g = [];
        h = 0;
        for (k = b; h < k; ) (f = h++), g.push(this.Ro.next());
        this.Ba = g;
        g = 0;
        for (h = b; g < h; ) (f = g++), this.C().ht(this.Ba[f]);
        this.zoom = this.Fp = this.C().viewport.jj(e);
        this.C().Ku(this.level.za.lc);
        c = this.C().viewport.Ac(this.C().ie());
        b = this.C().viewport.ha;
        this.Pf = (c / (b.B - b.u)) * 3;
        1 > this.Pf && (this.Pf = 1);
        this.hu();
        this.C().update(0);
      } else {
        b = 0;
        for (f = this.C().ia.iterator(); f.ka(); ) f.next(), ++b;
        c = this.level.data.ia;
        for (b = c.sa; -1 < --b; ) this.C().iu(c.nz(b, []));
        this.zoom = this.C().viewport.zoom;
        this.Fp = this.C().viewport.jj(e);
        this.C().Ku(this.level.za.lc);
        1.5 > this.C().viewport.Ac(this.C().ie()) / (2 * this.C().viewport.zoom) && (this.Ul = !1);
        c = this.C().viewport.Ac(this.C().ie());
        b = this.C().viewport.ha;
        this.Pf = (c / (b.B - b.u)) * 3;
        1 > this.Pf && (this.Pf = 1);
        this.hu();
        this.C().viewport.Vu(this.zoom);
      }
      this.C().zC();
      this.C().Bb.ve();
      this.al = this.C().qc;
      this.Os = this.C().la.origin.y;
      this.Ns = this.C().ie() + this.H().model.level.za.lc;
      this.Ul || (this.Ns = this.Os);
      c = this.C();
      d = this.C().proxy.s;
      b = this.C().proxy;
      d += (b.A - b.s) / 2;
      b = this.C().la.origin;
      c.Fh(d, b.y);
      this.H().notify(34);
    },
    Mx: function () {
      for (var a = 0.25, b = a / (this.C().pc - this.C().qc + 1), c = 0, d = this.C().qc, e = this.C().pc; d <= e; ) {
        this.H().notify(25);
        for (var f = 0, g = this.C().cols; f < g; ) {
          var h = f++;
          h = this.C().ia.get(h, d);
          null != h &&
            (200 != h.code
              ? ((h = h.client), h.ja.disconnect(), h.ei())
              : h.f.de
              ? h.o()
              : (h.Lc(null, rb.TYPE), (h = h.client), h.ja.disconnect(), (h.vb = c), h.pop()));
        }
        c += a;
        a -= b;
        0.01 > a && (a = 0.01);
        ++d;
      }
    },
    Um: function () {
      if (this.Tl) return 0;
      for (var a = 0, b = 0, c = this.Xh; b < c.length; ) {
        var d = c[b];
        ++b;
        a += d;
      }
      return a;
    },
    iA: function () {
      return 3 == this.state && 0 < this.C().Yf && this.C().Dx() ? 0 != this.jg : !1;
    },
    HC: function () {
      this.Dm = !1;
      T.pg("projectile_shot", null, { bubble_color: zg.wn(this.C().Ng(0).code) });
      this.C().IC();
      this.bb(4);
      this.H().notify(20);
      -1 != this.jg && this.jg--;
      this.reload();
    },
    reload: function () {
      for (var a = 0, b = this.C().Ba.l; a < b; ) {
        var c = a++;
        this.C().Ng(c).Ya(new zb());
      }
      this.Ba.shift();
      a = this.Ro.next();
      this.Ba.push(a);
      this.C().ht(this.Ba[this.Ba.length - 1]);
    },
    clearColor: function (a) {
      0 == --this.Xh[a] && ((this.ct = a), this.Po.splice(this.Po.indexOf(a), 1));
    },
    Bp: function (a) {
      var b = new Gd().Bp(a);
      if (b.Ir) {
        this.clearColor(a.code);
        var c = a.client;
        c.jB();
        return b;
      }
      if (this.C().qc > this.al)
        for (a = 0; this.al < this.C().qc; ) this.H().notify(21, Ba.Fc(["r", this.al, "t", a])), this.al++, (a += 0.1);
      a = b.We.l + b.yf.l;
      this.cl += b.Oi;
      for (var d = this.Dm ? "bouncing_shot" : "straight_shot", e = b.We.iterator(); e.ka(); ) {
        c = e.next();
        var f = c.code;
        T.pg("bubbles_destroyed", null, { bubble_color: zg.wn(f), destruction_type: "popped", shot_type: d });
        this.clearColor(c.code);
        c = c.client;
        c.pop();
      }
      for (e = b.yf.iterator(); e.ka(); )
        (c = e.next()),
          (f = c.code),
          T.pg("bubbles_destroyed", null, { bubble_color: zg.wn(f), destruction_type: "detached", shot_type: d }),
          this.clearColor(c.code),
          (c = c.client),
          c.ei();
      0 < a
        ? 1 < ++this.Ge &&
          (this.xg(this.$r()),
          this.H().notify(24, Ba.Fc(["combo", this.Ge, "total", a])),
          T.pg("combo_achieved", null, { combo_value: this.Ge - 1 }))
        : (this.Ge = 0);
      null != b.target && (this.H().notify(28), b.target.client.pop(), (this.Tl = !0));
      if (0 < this.Um())
        for (a = 0, d = this.Ba.length; a < d; )
          (e = a++), 0 == this.Xh[this.Ba[e]] && ((c = this.Ba[e] = this.Ro.next()), this.C().Ng(e).Zq(c));
      return b;
    },
    hu: function () {
      var a = this.C().En();
      a = this.C().viewport.Ac(a);
      if (!(0 >= a)) {
        var b = Math.ceil(this.C().Rx(a / this.C().viewport.zoom));
        b > M.Zk && (b = M.Zk);
        this.bl = b;
        for (a = 0; a < b; ) {
          var c = a++;
          this.fu(c);
        }
      }
    },
    gu: function () {
      if (!(this.bl >= M.Zk)) for (; this.C().Ok() && this.bl < M.Zk; ) this.fu(this.bl++);
    },
    fu: function (a) {
      var b = this.level.za.Xf,
        c = this.Ee;
      if (0 < a && 10 <= b) {
        c = this.Ee.slice();
        for (var d = 0, e = c.length; d < e; ) {
          var f = d++;
          (f & 1) == (a & 1) && (c[f] = 0);
        }
        c[this.$e] = 0;
        c[this.$e + b - 1] = 0;
      }
      this.C().iu(c);
    },
    my: function () {
      if (0 == this.Pf) return 1;
      var a = this.time / this.Pf;
      1 < a && (a = 1);
      var b = z.Wb(this.zoom, this.Fp, Ob(2)(a));
      this.C().viewport.Vu(b);
      b = z.Wb(this.Os, this.Ns, ac(0.025)(a));
      this.C().Fh(this.C().la.origin.x, b);
      return a;
    },
    BD: function (a) {
      var b = this;
      switch (this.state) {
        case 1:
          switch (this.Ud) {
            case 0:
              this.Ud = 1;
              T.nA("level" + this.level.za.level).then(
                function () {
                  b.Ud++;
                },
                function () {
                  b.Ud++;
                }
              );
              break;
            case 2:
              1 <= this.my() && (this.H().notify(29), this.bb(2));
          }
          break;
        case 2:
          1 < this.time && (this.H().notify(30), A.oC(), this.bb(3));
          break;
        case 3:
          this.kd += a;
          this.to(a);
          this.gu();
          if (this.Tl && 0 == this.Um()) {
            this.pj += this.kd;
            a = Math.round(100 * this.ki());
            Cb.sv(
              Cb.za()
                .Tu(!0)
                .setData('{"percentCleared": ' + a + "}")
            );
            var c = this.cz(),
              d = this.zn();
            T.pg("level_complete", this.level.za.level, {
              completion_percentage: a,
              remaining_seconds: d,
              bonus_points: c,
            });
            this.H().notify(22);
            this.bb(6);
            break;
          }
          this.C().ie() > this.C().la.origin.y &&
            ((this.pj += this.kd),
            (this.Zj = !0),
            Cb.sv(
              Cb.za()
                .Tu(!1)
                .uC(this.Db)
                .setData('{"duration": ' + (this.pj | 0) + "}")
            ),
            this.H().notify(8),
            this.bb(8));
          break;
        case 4:
          this.kd += a;
          this.to(a);
          this.gu();
          break;
        case 5:
          this.kd += a;
          this.to(a);
          if (null != this.C().Ng(0).Le(zb.TYPE)) break;
          if (0 == this.jg) {
            this.bb(0);
            this.H().notify(9);
            break;
          }
          this.bb(3);
          break;
        case 6:
          this.speed *= 0.95;
          z.cr(this.speed) && (this.speed = 0);
          this.C().vv(0, -this.speed * a);
          this.ci = 0;
          switch (this.Ud) {
            case 0:
              0 == this.Tm() && (this.Ud = 1);
              break;
            case 1:
              this.Sq = !1;
              this.H().notify(36);
              this.Ud = 2;
              break;
            case 2:
              if (!this.Sq) return;
              this.Ud++;
              this.Es = !0;
              this.Mx();
              break;
            case 3:
              0 == this.Tm() &&
                ((a = function () {
                  b.bb(7);
                  var e = T.oA("level" + b.level.za.level),
                    f = T.qv(b.Db),
                    g = A.Zu();
                  Promise.all([e, f, g]).then(L(b, b.Qs), L(b, b.Qs));
                }),
                A.Wg() ? T.rv("success", this.Db, a) : a());
          }
          break;
        case 8:
          switch (this.Ud) {
            case 0:
              this.Kx();
              this.Ud++;
              break;
            case 1:
              0 == this.Tm() && (this.bb(0), this.H().notify(9), this.H().rf(9));
          }
      }
    },
    Tm: function () {
      for (var a = 0, b = this.C().lb, c = b.i, d = 0, e = b.l; d < e; ) {
        var f = d++;
        b = c[f].actions;
        f = b.i;
        var g = 0;
        for (b = b.l; g < b; ) {
          var h = g++;
          f[h] instanceof aa && ++a;
        }
      }
      return a;
    },
    Qs: function () {
      this.Ms();
      this.bb(1);
    },
    bb: function (a) {
      this.state = a;
      this.Ud = this.time = 0;
      this.H().notify(5);
    },
    Kx: function () {
      for (var a = !0, b = 0.1, c = this.C().qc, d = null, e; c <= this.C().pc; ) {
        var f = [],
          g = 0;
        for (e = this.C().cols; g < e; ) {
          var h = g++;
          f.push(this.C().ia.get(h, c));
        }
        (a = !a) && f.reverse();
        for (g = 0; g < f.length; )
          (h = f[g]),
            ++g,
            null != h &&
              ((e = h.client),
              h.f.de && 100 != h.code
                ? h.o()
                : ((e.vb = b), 200 == h.code ? e.pop() : 100 == h.code ? (d = h) : e.ei(), (b += 0.01)));
        ++c;
      }
      a = this.C().Ba.l;
      f = 0;
      for (g = a; f < g; ) (h = f++), (e = this.C().Ng(h).client), (e.vb = b), e.pop(), (b += 0.1);
      e = d.client;
      e.vb = 1 + b;
      e.pop();
    },
    to: function (a) {
      this.xD(a);
      this.C().vv(0, -(this.speed * a));
    },
    zD: function () {
      this.le = this.C().la.origin.y - (this.C().xn().G.y + 1);
      this.ci = 1 - z.min(1, this.le / M.vr);
    },
    xD: function (a) {
      this.le = this.C().la.origin.y - (this.C().xn().G.y + 1);
      var b = this.H().model.level.za.lc,
        c = this.level.za.speed;
      -1 != ka.qo && (c = ka.qo);
      this.Oo = this.dv = (this.le - b) / b;
      b = M.vr;
      this.Wn
        ? ((this.ci = 1 - z.min(1, this.le / b)),
          (c *= 0.5),
          this.le > b && ((this.dk += a), 0.1 < this.dk && ((this.Wn = !1), this.H().notify(15))),
          this.bn
            ? 2 < this.le && ((this.bn = !1), this.H().notify(18))
            : 2 >= this.le && ((this.bn = !0), this.H().notify(17)))
        : this.le < b &&
          ((this.dk = this.ci = 0), (this.Wn = !0), this.H().notify(14), (this.an = !1), T.pg("proximity_warning"));
      0 < this.Oo && (c *= 1 + this.Oo);
      this.speed += 0.1 * (c - this.speed);
    },
    R: function () {
      return 21;
    },
    j: Qe,
  });
  Uf.g = !0;
  Uf.prototype = { j: Uf };
  Pe.g = !0;
  Pe.D = t;
  Pe.prototype = u(t.prototype, {
    Ef: function (a) {
      return new Uf(this.ha[a], this.kc[a]);
    },
    resize: function () {
      var a = this.H().xe,
        b = a.x,
        c = a.y,
        d = new ca(),
        e = d;
      e.s = 0;
      e.u = 0;
      e.A = b;
      e.B = c;
      e = d = this.ic = e;
      c = this.Mq = (d.A - d.s) / (e.B - e.u);
      if (0.7 < c) {
        c = 0.7;
        e = d = this.ic;
        e = 0.7 * (e.B - e.u);
        d.A = d.s + e;
        d = this.ic;
        e = a.x / 2;
        var f = 0.5 * (d.A - d.s);
        d.s = e - f;
        d.A = e + f;
      }
      this.C().vC(this.ic);
      d = 0.4 > c ? z.map(c, 0.1, 0.4, 0.6, 0.82) : 0.5 > c ? z.map(c, 0.4, 0.5, 0.82, 0.87) : 0.92;
      this.C().Hl(0.5, d);
      this.W().DD();
      if (1 > this.Mq) {
        this.mode = 0;
        d = this.ic;
        var g = 0.1 * (d.A - d.s);
        d = 0.25 * g + z.max(0, z.map(c, 0.1, 0.7, 0.75 * g, 0));
        0 > d && (d = 0);
        b = d;
        var h = a.x,
          k = d + g;
        d = this.ic;
        g = 0.05 * (d.A - d.s);
        e = d = new ca();
        e.s = 0;
        e.u = b;
        e.A = h;
        e.B = k;
        d = e;
        Qb.Nc(d, 0.75, !0);
        var l = (this.ha[0] = d);
        this.kc[0].x = 0;
        this.kc[0].y = -1;
        e = d = new ca();
        e.s = 0;
        e.u = b;
        e.A = h;
        e.B = k;
        d = e;
        Qb.Ah(d, 0.25, !1);
        Qb.Nc(d, 0.6, !0);
        e = this.ic.s + g;
        f = d.A - d.s;
        d.s = e;
        d.A = e + f;
        this.ha[1] = d;
        this.kc[1].x = -1;
        this.kc[1].y = -1;
        e = d = new ca();
        e.s = 0;
        e.u = b;
        e.A = h;
        e.B = k;
        d = e;
        Qb.Ah(d, 0.25, !1);
        Qb.Nc(d, 0.6, !0);
        e = h - g;
        f = d.A - d.s;
        d.A = e;
        d.s = e - f;
        this.ha[2] = d;
        this.kc[2].x = 1;
        this.kc[2].y = -1;
        e = d = new ca();
        e.s = 0;
        e.u = b;
        e.A = h;
        e.B = k;
        d = e;
        d.u = 0;
        d.B = z.min(l.u - 2, (l.B - l.u) / 4);
        this.ha[4] = d;
      } else
        (this.mode = 2),
          (d = this.ic),
          (g = 0.05 * (d.B - d.u)),
          (b = this.ic.s),
          (e = d = new ca()),
          (e.s = 0),
          (e.u = g),
          (e.A = b),
          (e.B = 2 * g),
          (d = e),
          Qb.offset(d, -g / 4, 0),
          (h = this.ha[1] = d),
          (this.kc[1].x = 1),
          (this.kc[1].y = -1),
          (e = d = new ca()),
          (e.s = 0),
          (e.u = 0),
          (e.A = b),
          (e.B = g),
          (d = e),
          Qb.offset(d, -g / 4, 0),
          (e = h.B + g),
          (f = d.B - d.u),
          (d.u = e),
          (d.B = e + f),
          (this.ha[0] = d),
          (this.kc[0].x = 1),
          (this.kc[0].y = -1),
          (h = this.ic.A),
          (b = this.ic.A + b),
          (e = d = new ca()),
          (e.s = h),
          (e.u = g),
          (e.A = b),
          (e.B = 2 * g),
          (d = e),
          Qb.offset(d, -g / 4, 0),
          (this.ha[2] = d),
          (this.kc[2].x = -1),
          (this.kc[2].y = -1),
          (d = this.ic),
          (g = 0.01 * (d.B - d.u)),
          (b = a.x),
          (e = d = new ca()),
          (e.s = 0),
          (e.u = 0),
          (e.A = b),
          (e.B = g),
          (this.ha[4] = e);
      this.Nj = 0.5 > c ? 0 : 1;
      b = this.ic.A;
      c = this.C().viewport.zoom * (hc.nd() ? 2 : 1.6);
      e = d = new ca();
      e.s = 0;
      e.u = 0;
      e.A = c;
      e.B = c;
      d = e;
      2 == this.mode
        ? ((g = 0.03 * a.y), (e = b + g), (f = d.A - d.s), (d.s = e), (d.A = e + f))
        : ((g = 0.03 * a.x), (e = b - g), (f = d.A - d.s), (d.A = e), (d.s = e - f));
      e = a.y - g;
      f = d.B - d.u;
      d.B = e;
      d.u = e - f;
      this.ha[3] = d;
      this.H().Ub(2);
      this.H().Ub(3);
    },
    R: function () {
      return 26;
    },
    j: Pe,
  });
  Tf.g = !0;
  Tf.prototype = { j: Tf };
  zc.g = !0;
  zc.prototype = {
    mi: function (a) {
      return this.Di[a];
    },
    mo: function (a) {
      var b = this.mi(a);
      -1 != ka.Pm && (b.Pi = ka.Pm);
      for (; this.Fg.length < b.Pi; ) this.Fg.push(this.jf.pop());
      var c = new Tf();
      c.data = this.Wo(a, b.Td);
      c.ND = this.Fg.slice();
      c.za = b;
      return c;
    },
    Wo: function (a, b) {
      a = this.mi(a);
      var c = new Na(a.Xf, a.Ft);
      switch (b.type) {
        case "p":
          this.My(c, a);
          break;
        case "r":
          this.Ny(c, a);
      }
      return c;
    },
    Ny: function (a, b) {
      function c() {
        return d.Fg[d.bd.re(0, b.Pi - 1)];
      }
      var d = this,
        e = 0,
        f = 0,
        g = 0,
        h = b.Td.ut,
        k = b.Td.pt;
      a.ia.forEach(function () {
        var l = c();
        if (0 == g) {
          if (l == e) {
            if ((f += 1) == k) {
              for (var m = 0, n = c(); l == n && 100 > m++; ) n = c();
              l = n;
              f = 0;
            }
          } else f = 0;
          e = l;
          0 < h && (g += 1);
        } else g < h && ((g += 1), (l = e));
        g == h && (g = 0);
        return l;
      });
    },
    My: function (a, b) {
      for (var c = new md(), d = a.ia, e = d.i, f = e.length, g = 0, h = [], k = [], l = f; 0 < l; ) {
        for (var m = !1; g < f; ) {
          if (0 == e[g]) {
            c.y = (g / d.ga) | 0;
            c.x = g % d.ga;
            m = !0;
            break;
          }
          ++g;
        }
        if (!m) break;
        m = this.bd.re(b.Td.vt, b.Td.rt);
        m = this.uB(a, c, m, 65535, h);
        var n = this.Fg[this.bd.re(0, b.Pi - 1)],
          q = a.By(c.x, c.y, k);
        if (0 < q)
          for (var r, w = 0; ; ) {
            r = !1;
            for (var G = 0, v = q; G < v; ) {
              var P = G++;
              if (k[P] == n) {
                n = this.Fg[this.bd.re(0, b.Pi - 1)];
                r = !0;
                break;
              }
            }
            if (!(r && 100 > w++)) break;
          }
        for (q = 0; q < m; ) (d.i[h[q + 1] * d.ga + h[q]] = n), (q += 2);
        l -= m >> 1;
      }
    },
    tB: function (a, b, c) {
      for (var d = 0, e = b; d < e; ) {
        var f = d++;
        c[f] = f;
      }
      d = 0;
      for (e = b; d < e; ) {
        f = d++;
        var g = a.re(f, b - 1),
          h = c[g];
        c[g] = c[f];
        c[f] = h;
      }
      return c;
    },
    uB: function (a, b, c, d, e) {
      var f = a.ia,
        g = b.x;
      b = b.y;
      var h = [],
        k = [],
        l = 0;
      e[l++] = g;
      e[l++] = b;
      for (f.i[b * f.ga + g] = d; l >> 1 < c; ) {
        var m = a.pn(g, b, h);
        var n = m >> 1;
        this.tB(this.bd, n, k);
        m = !1;
        for (var q = 0; q < n; ) {
          var r = q++;
          var w = k[r];
          r = h[w << 1];
          w = h[(w << 1) + 1];
          if (!(0 < f.i[w * f.ga + r])) {
            g = r;
            b = w;
            e[l++] = g;
            e[l++] = b;
            f.i[b * f.ga + g] = d;
            m = !0;
            break;
          }
        }
        if (!m) break;
      }
      return l;
    },
    xB: function () {
      var a = [],
        b = jc.Og("levels");
      b = -1 != b.indexOf("\r\n") ? b.split("\r\n") : b.split("\n");
      var c = b.shift(),
        d = new fa("version\\s*,\\s*(\\d+)", "g");
      d.match(c);
      la.parseInt(d.rb(1));
      for (b.shift(); ke.jA(b[b.length - 1]); ) b.pop();
      d = new fa(
        "(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*([\\d\\.]+)\\s*,\\s*(\\d+)\\s*,\\s*([rp]:?([?:\\d-]+)?)",
        ""
      );
      for (c = 0; c < b.length; ) {
        var e = b[c];
        ++c;
        d.match(e);
        var f = la.parseInt(d.rb(1));
        e = new Sf();
        e.level = f;
        e.Pi = la.parseInt(d.rb(2));
        e.Ft = la.parseInt(d.rb(3));
        e.Xf = la.parseInt(d.rb(4));
        e.speed = parseFloat(d.rb(5));
        e.lc = la.parseInt(d.rb(6));
        f = d.rb(7).split(":");
        e.Td.type = f[0];
        var g = new fa("(\\d)-(\\d)", "");
        if (g.match(f[1])) {
          var h = la.parseInt(g.rb(1));
          g = la.parseInt(g.rb(2));
          "r" == f[0] ? ((e.Td.ut = h), (e.Td.pt = g)) : "p" == f[0] && ((e.Td.vt = h), (e.Td.rt = g));
        }
        a[e.level] = e;
      }
      c = 2;
      for (b = a.length - 1; c < b; ) c++;
      return a;
    },
    j: zc,
  };
  Sf.g = !0;
  Sf.prototype = { j: Sf };
  Oe.g = !0;
  Oe.D = t;
  Oe.prototype = u(t.prototype, {
    next: function () {
      var a = this.W().Po,
        b = a.length;
      if (0 == b) return this.W().ct;
      if (1 == b) return a[0];
      for (var c = 1, d, e = a.length; c <= M.zo; ) {
        d = 0;
        for (var f = !1; d < e; )
          if (a[d++] == c) {
            f = !0;
            break;
          }
        f && this.Qk[c]++;
        ++c;
      }
      e = a.length;
      e = 1 == e ? a[0] : a[this.W().bd.re(0, e - 1)];
      if (0 > this.Sf) return (this.Sf = e), (this.Oj = 0), (this.Qk[e] = 0), e;
      d = null;
      f = !1;
      for (c = 0; c < b; ) {
        var g = this.Qk[a[c]];
        g >= M.DA && ((e = a[c]), null == d && (d = []), 0 < g && (d.push(a[c]), (f = !0)));
        ++c;
      }
      f && (e = d.pop());
      e == this.Sf && this.Oj++;
      if (this.Oj == M.EA) {
        for (b = !1; !b && f && 0 < d.length; ) (e = d.pop()), e != this.Sf && (b = !0);
        for (c = 0; !b && 100 > c; )
          (e = a.length), (e = 1 == e ? a[0] : a[this.W().bd.re(0, e - 1)]), e != this.Sf && (b = !0);
      }
      e != this.Sf && (this.Oj = 0);
      this.Sf = e;
      this.Qk[e] = 0;
      return e;
    },
    R: function () {
      return 22;
    },
    j: Oe,
  });
  da.g = !0;
  da.Da = [jf];
  da.prototype = {
    upgrade: function () {},
    stringify: function () {
      var a = {};
      a.version = this.rev;
      a.sound = da.zc;
      a.highscore = da.Ld;
      a.level = da.level;
      return JSON.stringify(a);
    },
    parse: function (a) {
      a = JSON.parse(a);
      this.rev = H.T(a, "version");
      da.zc = H.T(a, "sound");
      da.Ld = H.T(a, "highscore");
      if(typeof da.Ld === "undefined" || da.Ld === null) {
      	da.Ld = 0;
      }
      da.level = H.T(a, "level");
    },
    reset: function () {
      this.rev = 1;
      da.Ld = 0;
      da.zc = !0;
      da.level = 0;
    },
    j: da,
  };
  Gd.g = !0;
  Gd.D = t;
  Gd.prototype = u(t.prototype, {
    Bp: function (a) {
      this.result = new Rf();
      var b = this.C().Ki;
      this.Yk.l = 0;
      if (99 == a.code) return this.result.yf.add(a), this.result;
      var c = this.VC(a),
        d = null;
      if (null != c) {
        d = [];
        for (var e = c.ya.iterator(); e.ka(); ) {
          var f = e.next();
          this.Ws(f) && (this.Yk.add(f), d.push(f));
        }
        c.disconnect();
        this.result.Oi++;
      } else if (1 == this.W().Um()) return (this.result.Ir = !0), this.result;
      f = b.Xj();
      b.wA(a, this.nt, f, !0);
      if (3 <= f.l) {
        e = b.mr();
        e.add(f);
        for (f = e.iterator(); f.ka(); ) (c = f.next()), b.Gy(c, this.Yk, this.Ws);
        this.pop(a, e);
      } else null != c && (a.disconnect(), (a.f.yc = !0), this.result.yf.Oa(a));
      if (null != d)
        for (a = 0; a < d.length; ) (e = d[a]), ++a, e.f.yc || ((e.f.yc = !0), (e.client.vb = 0), this.result.We.Oa(e));
      this.ei(this.Yk);
      b.complete();
      this.C().trim();
      this.C().sj();
      b = 1;
      d = this.result.We.l + this.result.yf.l;
      5 < d && ((b = z.map(d, 5, 40, 1, 0.5)), 0.5 > b && (b = 0.5));
      for (e = this.result.We.iterator(); e.ka(); )
        (f = e.next()), (d = f.client), (d.vb *= b), d.Dq || this.result.Oi++, f.disconnect();
      for (e = this.result.yf.iterator(); e.ka(); )
        (f = e.next()), (d = f.client), (d.vb *= b), d.Dq || this.result.Oi++, f.disconnect();
      return this.result;
    },
    ei: function (a) {
      var b = [];
      for (a = this.C().Ki.Fy(a, this.nt).iterator(); a.ka(); ) {
        for (var c = a.next(), d = [], e = 0, f = 0, g = c.iterator(); g.ka(); ) {
          var h = g.next();
          if (!h.f.yc) {
            var k = h.client;
            k.vb > f && (f = k.vb);
            h.depth > e && (e = h.depth);
          }
        }
        for (c = c.iterator(); c.ka(); )
          (e = c.next()), e.f.yc || (this.rp(e, e.client.Cd, f), this.result.yf.Oa(e), d.push(e));
        b.push(d);
      }
      this.result.kA = b;
    },
    pop: function (a, b) {
      function c(m) {
        for (var n = null, q = 0, r = m.l; q < r; ) {
          var w = q++;
          w = m.i[w];
          w.ya.ta = !1;
          for (w = w.ya.va; null != w; ) (w.node.ta = !1), null == n && w.node.oa == a && (n = w.node.oa), (w = w.next);
        }
        return n;
      }
      for (var d = this, e = this.C().pb, f = b.iterator(); f.ka(); ) {
        var g = f.next();
        for (g = g.iterator(); g.ka(); ) {
          var h = g.next();
          h.f.yc = !0;
        }
      }
      this.KB();
      for (f = b.iterator(); f.ka(); ) {
        g = f.next();
        var k = c(g);
        var l = 1;
        e.mx(
          !0,
          k.ya,
          (function (m, n) {
            return function (q, r) {
              q = q.oa;
              if (r) return q.f.yc;
              l += 1;
              d.rp(q, l - 1, n[0]);
              m[0] *= 0.9;
              n[0] += m[0];
              return !0;
            };
          })([0.1], [0])
        );
      }
      k = new ed();
      e.clearMarks();
      for (f = b.iterator(); f.ka(); )
        for (g = f.next(), g = g.iterator(); g.ka(); )
          (h = g.next()), h.f.yc && (k.enqueue(h), (h.ya.ta = !0), (h.depth = 0));
      for (e = 0; 0 < k.l; ) {
        if (1e4 < e++) throw 21;
        g = k.di();
        f = na.ug(g.client, Bc);
        for (h = g.ya.va; null != h; )
          !h.node.oa.f.yc &&
            200 != h.node.oa.code &&
            h.node.oa.client.Cd < f.Cd &&
            (this.rp(h.node.oa, f.Cd, f.vb),
            0 == h.node.oa.depth && (h.node.oa.depth = g.depth + 1),
            k.enqueue(h.node.oa)),
            (h = h.next);
      }
      this.result.We.l = 0;
      for (f = b.iterator(); f.ka(); )
        for (g = f.next(), g = g.iterator(); g.ka(); ) (h = g.next()), (h.ya.visible = !1), this.result.We.Oa(h);
    },
    VC: function (a) {
      for (a = a.ya.va; null != a; ) {
        var b = a.node.oa;
        if (100 == b.code) return (this.result.target = b);
        a = a.next;
      }
      return null;
    },
    rp: function (a, b, c) {
      a = a.client;
      a.Cd = b;
      a.vb = c;
    },
    KB: function () {
      var a = this.C().lb,
        b = a.i,
        c = 0;
      for (a = a.l; c < a; ) {
        var d = c++;
        d = b[d];
        d.client.Cd = 0;
        d.depth = 0;
      }
    },
    R: function () {
      return 23;
    },
    j: Gd,
  });
  Rf.g = !0;
  Rf.prototype = { j: Rf };
  C.g = !0;
  C.play = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = !1);
    null == b && (b = !1);
    return da.zc ? Aa.he().play(a, b, c, d) : -1;
  };
  Ne.g = !0;
  Ne.Xb = !0;
  Ne.prototype = { j: Ne };
  yb.g = !0;
  yb.Da = [Ne];
  yb.D = $b;
  yb.prototype = u($b.prototype, {
    Mb: function () {
      this.xe = this.Gu.eb().si();
      this.fb.resize();
    },
    o: function () {
      $b.prototype.o.call(this);
      this.node.o();
      this.Gu = yb.instance = null;
      this.Wh.o();
    },
    ba: function () {
      $b.prototype.ba.call(this);
      for (var a = 0; 7 > a; ) {
        var b = a++;
        this.jo[b] = new ma("layer_" + b);
        this.node.appendChild(this.jo[b].node);
      }
      this.bubbles = this.Z(null, new Me());
      this.Z(x);
      this.cb = this.Z(x);
      this.Wh = new Le();
      this.Wh.Ka(this);
      this.Wh.On.filter = function () {
        return !0;
      };
      this.fb = this.Z(Pe);
      this.model = new Qe(ra.instance.tb.cj);
      this.Z(null, this.model);
      this.cb.Z(Ce);
      ra.instance.tb.fn && this.cb.Z(ve);
      ka.Kn && this.zb(4).N(!1);
      this.cb.Z(Je);
      ka.Kn || this.cb.Z(te);
      this.cb.Z(Fe);
      ka.Bs || this.cb.Z(xc);
      this.cb.Z(se);
      this.cb.Z(Ae);
      ka.Cs || this.cb.Z(we);
      this.cb.Z(ze);
      this.cb.Z(qe);
      this.cb.Z(Ie);
      this.cb.Z(xe);
      this.cb.Z(ue);
      this.cb.Z(He);
      this.cb.Z(re);
      A.zz() ? A.In() || this.cb.Z(Cd) : this.cb.Z(Dd);
      this.cb.Z(ye);
      this.cb.Z(Be);
      this.fb.resize();
      this.model.U();
      this.fb.resize();
    },
    M: function (a) {
      this.Wh.update(a);
      $b.prototype.M.call(this, a);
    },
    Qo: function () {
      var a = this.cb.find(Dd);
      if (null != a && a.ub(ua.ob().position)) return !0;
      a = this.cb.find(Cd);
      return null != a && a.ub(ua.ob().position) ? !0 : !1;
    },
    pause: function () {
      this.model.paused = !0;
      this.f = (this.f & -2) | 0;
      this.f = (this.f & -3) | 0;
    },
    resume: function () {
      this.model.paused &&
        ((this.model.paused = !1), (this.f = (this.f & -2) | 1), (this.f = (this.f & -3) | 2), this.Ub(4));
    },
    zb: function (a) {
      return this.jo[a];
    },
    Em: function (a) {
      var b = new Bc(a);
      200 == a.code && (a.Uc = 0.1);
      a.Ya(new rb());
      100 == a.code ? b.Z(Ac) : b.Z(Ia);
      this.bubbles.Z(null, b);
    },
    Fm: function () {},
    wx: function (a, b) {
      var c = new Bc(a);
      c.Z(null, new Ia());
      this.bubbles.Z(null, c);
      if (0 < b) {
        c = a.Le(cb.TYPE);
        var d = (b - 1) * M.Zh,
          e = 0;
        0 == this.fb.Nj ? (e = 2) : (d += 2);
        c.ae.x = d;
        c.ae.y = e;
        b = c.scale = 1 == b ? M.Eu : M.Fu;
        c.update(a);
        c = new id(b);
        a.Ya(c);
      }
    },
    JD: function () {},
    ux: function (a, b) {
      a = Ba.Fc(["bubble", a, "bubbleHit", b]);
      null != b && 200 == b.code && this.notify(6, a);
      this.notify(10, a);
    },
    rx: function () {
      this.notify(13);
    },
    sx: function () {
      this.notify(33);
    },
    R: function () {
      return 19;
    },
    j: yb,
  });
  Me.g = !0;
  Me.D = x;
  Me.prototype = u(x.prototype, {
    Y: function (a) {
      x.prototype.Y.call(this, a);
      a.flags |= 1;
    },
    R: function () {
      return 17;
    },
    j: Me,
  });
  Le.g = !0;
  Le.D = Ra;
  Le.prototype = u(Ra.prototype, {
    o: function () {
      this.Tj();
      this.viewport.S();
      for (var a = this.lb.iterator(); a.ka(); ) a.next().o();
      this.ia.S();
      this.pb.S();
      this.Ye.S();
      this.Ki.S();
      this.Bb.S();
      this.sf.S();
      for (a = this.If.iterator(); a.ka(); ) a.next().S();
      this.If.S();
      this.Jp.S();
      this.Ip.S();
      this.Qi =
        this.Ch =
        this.Ip =
        this.Jp =
        this.Yg =
        this.la =
        this.ss =
        this.If =
        this.Ba =
        this.sf =
        this.td =
        this.gg =
        this.Bb =
        this.proxy =
        this.Ki =
        this.Ye =
        this.pb =
        this.ia =
        this.lb =
        this.viewport =
          null;
    },
    update: function (a) {
      this.time += a;
      this.wD(a);
      var b = this.lb;
      a = b.i;
      var c = 0;
      for (b = b.l; c < b; ) {
        var d = c++;
        d = a[d];
        d.f.de = !this.viewport.Us(d.G, d.ca);
      }
      0 <= X.Rj && dd.UC(this);
      this.Vj && ((this.Vj = !1), this.Qi.update());
      this.trim();
      this.sj();
    },
    hr: function (a) {
      if (0 == a) return 0;
      0 > a && (a = -a);
      return 2 * a - 0.26794919249999993 * (a - 1);
    },
    Rx: function (a) {
      return a / 1.7320508075;
    },
    jp: function (a) {
      this.viewport.iD(a);
    },
    Lv: function (a) {
      this.viewport.pv(a, a);
    },
    vC: function (a) {
      this.viewport.af(a);
      this.Bb.ve();
    },
    Hl: function (a, b) {
      this.viewport.Hl(a, b);
      this.Bb.ve();
    },
    jC: function (a) {
      var b = this;
      if (null != this.ia) {
        for (var c = 0, d = this.lb.nj(); c < d.length; ) {
          var e = d[c];
          ++c;
          e.o();
        }
        this.lb.S();
        this.ia.S();
        this.Ki.S();
      }
      c = a.ia;
      this.lb = new Z(c.ga * c.sa);
      this.lb.Mc = !0;
      this.gg = a.gg;
      this.td = a.td;
      this.cols = a.ia.ga;
      this.ia = new Of(this);
      this.viewport.jj();
      this.pb = new $e();
      this.pb.Bm = function (f, g) {
        if (b.If.Vg()) return new Od(f, g);
        g = b.If;
        g = g.i[--g.l];
        g.node = f;
        return g;
      };
      this.pb.aj = function (f) {
        1024 > b.If.l && b.If.Oa(f);
      };
      this.Yf = 0;
      this.eB(a.ia);
      this.proxy = new ca();
      this.sj();
      this.la.origin.x = this.zk() / 2;
      this.la.origin.y = 0;
      this.la.direction.x = 0;
      this.la.direction.y = -1;
      this.Bb.ve();
    },
    zC: function () {
      this.sj();
      this.la.origin.y = 0;
      var a = this.viewport.Np(this.viewport.ha.u);
      a -= this.proxy.B;
      this.Fh(this.la.origin.x, -a);
    },
    Ok: function (a) {
      null == a && (a = 0);
      return this.viewport.Ac(this.En()) - a >= this.viewport.ha.u;
    },
    Ng: function (a) {
      null == a && (a = 0);
      if (0 == this.Ba.l) return null;
      var b = this.Ba;
      return b.i[(a + b.Sa) % b.J];
    },
    RD: function () {
      return this.Ba.l;
    },
    ht: function (a) {
      var b = new xb(this);
      b.code = a;
      b.f.Cg = !0;
      b.f.loaded = !0;
      b.f.connected = !1;
      a = b.G;
      var c = this.la.origin;
      a.x = c.x;
      a.y = c.y;
      this.lb.add(b);
      b.Ya(new cb());
      var d = this.Ba.l;
      this.Ba.enqueue(b);
      this.notify(function (e) {
        e.wx(b, d);
      });
      return b;
    },
    Wj: function (a) {
      var b = new xb(this);
      b.code = a;
      this.lb.add(b);
      this.notify(function (c) {
        c.Em(b);
      });
      return b;
    },
    Ar: function (a) {
      a.f.connected &&
        ((a.f.connected = !1), this.Yf--, null != a.ya && this.pb.removeNode(a.ya), this.ia.vu(a), (this.Vj = !0));
    },
    be: function (a, b, c) {
      c.x = 1;
      c.x += 2 * a;
      (b & 1) == this.td && (c.x += 1);
      c.y = 1 + 1.7320508075 * b;
      c.y = -c.y;
    },
    lB: function (a, b) {
      b.y = -((a.y / 1.7320508075) | 0) - (0 < a.y ? 1 : 0);
      if ((b.y & 1) == this.td) {
        if (1 > a.x) return !1;
        b.x = ((a.x - 1) / 2) | 0;
      } else {
        if (0 > a.x) return !1;
        b.x = (a.x / 2) | 0;
      }
      return b.x >= this.cols ? !1 : !0;
    },
    Dx: function () {
      if (0 == this.Ba.l || (0 > X.Rj && !this.sf.Vg()) || this.time - this.aD < X.Rj) return !1;
      if (0 <= X.Rj) {
        var a = !1,
          b = this.Ba,
          c = b.i[b.Sa];
        b = this.sf;
        var d = b.i,
          e = 0;
        for (b = b.l; e < b; ) {
          var f = e++;
          d[f].Yz(c) && (a = !0);
        }
        if (a) return !1;
      }
      return !0;
    },
    IC: function () {
      if (0 == this.Ba.l) return !1;
      var a = this.Ba;
      a = a.i[a.Sa];
      this.dy();
      a.f.Cg = !0;
      a.Ya(new ad());
      this.sf.add(a);
      return !0;
    },
    dy: function () {
      if (0 == this.Ba.l) return !1;
      var a = this.Ba.di();
      a.f.Cg = !1;
      a.f.loaded = !1;
      a.Lc(null, cb.TYPE);
      return !0;
    },
    wD: function (a) {
      var b = 8 * this.lb.l,
        c = b * ja.xj,
        d = this.Jp,
        e = this.Ip;
      d.l < c && (d.U(c, null), e.U(c, null));
      c = ja.counter;
      for (var f = 0, g = ja.xj; f < g; ) {
        var h = f++;
        c[h] = 0;
      }
      var k = this.lb,
        l = k.i;
      f = 0;
      for (g = k.l; f < g; ) {
        var m = f++;
        m = l[m];
        m.nb = a;
        k = m.actions;
        for (var n = k.i, q = 0, r = k.l; q < r; ) {
          k = q++;
          k = n[k];
          var w = (h = k.Se);
          var G = c[w];
          c[w] = G + 1;
          w = G;
          h = h * b + w;
          e.i[h] = k;
          d.i[h] = m;
        }
      }
      for (h = 0; h < ja.xj; ) {
        w = c[h];
        f = b * h;
        for (g = f + w; f < g; )
          (m = d.i[f]), null != m.I && ((k = e.i[f]), (k.time += a), k.enabled && k.update(m)), ++f;
        ++h;
      }
    },
    PA: function (a, b) {
      this.notify(function () {});
      X.ts && this.ss.apply(a, b);
    },
    RA: function (a, b) {
      null != this.Yg && this.Yg.f.connected && !this.Yg.f.yc && this.Yg.Lh();
      this.Yg = a;
      this.sf.remove(a);
      this.Yf++;
      a.f.Cg = !1;
      if (null == b) {
        var c = a.Ga;
        c.x = 0;
        c.y = 0;
        c = a.force;
        c.x = 0;
        c.y = 0;
      }
      c = a.G;
      var d = c.x,
        e = c.y;
      c = new y();
      c.x = d;
      c.y = e;
      var f = c;
      this.Vx(a, b);
      a.ef = X.Bd.ef;
      a.Uc = X.Bd.Uc;
      a.Ya(new Kb());
      c = a.force;
      c.x = 0;
      c.y = 0;
      c = a.Ga;
      d = c.x;
      e = c.y;
      c = new y();
      c.x = d;
      c.y = e;
      d = c;
      Ud.normalize(d);
      c = a.Ga;
      c.x = 0;
      c.y = 0;
      X.Bd.enabled && this.On.oB(a);
      this.notify(function (g) {
        g.ux(a, b);
      });
      X.Bd.enabled && this.On.apply(a, f, d);
    },
    QA: function (a, b) {
      var c = null;
      0 == b ? (c = X.Bx) : 2 == b && (c = X.Ax);
      if (null == c || "destroy" == c) this.sf.remove(a), a.o();
      else {
        a.Ga.x = 0;
        a.Ga.y = 0;
        a.force.x = 0;
        a.force.y = 0;
        c = a.G;
        var d = this.la.origin;
        c.x = d.x;
        c.y = d.y;
        a.Ya(new cb());
        c = this.Ba.nj();
        this.Ba.clear();
        this.Ba.enqueue(a);
        for (d = 0; d < c.length; ) {
          var e = c[d];
          ++d;
          this.Ba.enqueue(e);
        }
      }
      this.notify(function (f) {
        f.sx(a, b);
      });
    },
    OA: function (a, b) {
      this.notify(function (c) {
        c.rx(a, b);
      });
    },
    En: function () {
      this.be(0, this.pc, this.Ch);
      return this.Ch.y - 1;
    },
    zk: function () {
      return 2 * this.cols + 1 * this.gg;
    },
    ie: function () {
      this.trim();
      this.be(0, this.qc, this.Ch);
      return this.Ch.y + 1;
    },
    Ku: function (a, b) {
      null == b && (b = !1);
      b
        ? ((b = new y()),
          (b.x = 0),
          (b.y = 0),
          this.be(0, this.qc - (a | 0), b),
          (b.y += 0.26794919249999993),
          this.Fh(this.la.origin.x, b.y))
        : (this.trim(), this.Fh(this.la.origin.x, this.ie() + a));
    },
    Fh: function (a, b) {
      this.la.origin.x = a;
      this.la.origin.y = b;
      this.Bb.ve();
    },
    Sy: function () {
      return 57.29577951308232 * Math.atan2(this.la.direction.y, this.la.direction.x) + 90;
    },
    vv: function (a, b) {
      this.Fh(this.la.origin.x + a, this.la.origin.y + b);
    },
    uz: function (a) {
      var b = 0,
        c = this.lb,
        d = c.i,
        e = 0;
      for (c = c.l; e < c; ) {
        var f = e++;
        f = d[f];
        this.viewport.Us(f.G, f.ca) && (a[b++] = f);
      }
      return b;
    },
    sj: function () {
      var a = this.proxy;
      a.s = a.u = Infinity;
      a.A = a.B = -Infinity;
      if (0 == this.Yf) (a = this.proxy), (a.s = 0), (a.u = 0), (a.A = 0), (a.B = 0);
      else {
        var b = this.lb,
          c = b.i,
          d = 0;
        for (b = b.l; d < b; ) {
          a = d++;
          var e = c[a];
          if (e.f.connected) {
            a = this.proxy;
            e = e.G;
            var f = e.x;
            f < a.s && (a.s = f);
            f > a.A && (a.A = f);
            e = e.y;
            e < a.u && (a.u = e);
            e > a.B && (a.B = e);
          }
        }
        Qb.offset(this.proxy, 1, 1);
      }
    },
    Qy: function (a) {
      for (var b = 0, c = this.Ba.l; b < c; ) {
        var d = b++,
          e = this.Ba;
        if (e.i[(d + e.Sa) % e.J] == a) return d;
      }
      return -1;
    },
    xn: function () {
      for (var a = this.qc, b; a <= this.pc; ) {
        for (var c = 0, d = this.cols; c < d; )
          if (((b = c++), (b = this.ia.get(b, a)), null != b && !b.f.yc)) return b;
        ++a;
      }
      return null;
    },
    trim: function () {
      for (var a, b = this.qc; b <= this.pc; ) {
        for (var c = 0, d = this.cols; c < d; )
          if (((a = c++), (a = this.ia.get(a, b)), null != a && !a.f.yc)) {
            this.qc = a.Ta;
            return;
          }
        ++b;
      }
    },
    iu: function (a) {
      var b = a.length;
      b > this.cols && (b = this.cols);
      this.pc++;
      b = [];
      for (var c = 0, d = a.length; c < d; ) {
        var e = c++,
          f = a[e];
        if (0 != f) {
          var g = new xb(this);
          g.code = f;
          b.push(g);
          g.Ta = this.pc;
          g.mb = e;
          g.Lh();
          this.ia.sm(g);
          this.lb.add(g);
          g.ya = new ld(g);
          this.pb.tm(g.ya);
          this.ir(g);
          this.Mu(g);
          this.Yf++;
        }
      }
      this.Qi.update();
      for (c = 0; c < b.length; )
        (g = [b[c]]),
          ++c,
          this.notify(
            (function (h) {
              return function (k) {
                k.Em(h[0]);
              };
            })(g)
          );
      this.Bb.ve();
      this.sj();
      return b;
    },
    eB: function (a) {
      var b = this;
      this.qc = 0;
      this.pc = a.sa - 1;
      0 == (a.sa & 1) && (this.td = (this.td + 1) & 1);
      a.forEach(function (g, h, k) {
        if (0 == g || (0 == b.gg && (k & 1) == b.td && h > a.ga - 1)) return g;
        b.Yf++;
        var l = new xb(b);
        l.code = g;
        l.mb = h;
        l.Ta = b.pc - k;
        l.Lh();
        b.ia.sm(l);
        b.lb.add(l);
        l.ya = new ld(l);
        b.pb.tm(l.ya);
        b.Mu(l);
        return g;
      });
      var c = this.lb,
        d = c.i,
        e = 0;
      for (c = c.l; e < c; ) {
        var f = e++;
        b.ir(d[f]);
      }
      this.Qi.update();
      for (d = this.ia.iterator(); d.ka(); )
        (e = [d.next()]),
          this.notify(
            (function (g) {
              return function (h) {
                h.Em(g[0]);
              };
            })(e)
          );
    },
    ir: function (a) {
      if (null != a && 0 != a.code) {
        a.f.connected = !0;
        var b = this.Wm(a);
        for (a = a.ya; b.cursor < b.size; ) {
          var c = b.list[b.cursor++];
          null != c && 0 != c.code && ((c = c.ya), a.gA(c) || this.pb.Cq(a, c));
        }
      }
    },
    Mu: function (a) {
      a.Ya(new Kb());
      a.ef = X.Bd.ef;
      a.Uc = X.Bd.Uc;
    },
    xC: function (a) {
      var b = this.la,
        c = b.direction.x,
        d = b.direction.y,
        e = this.Ch;
      e.x = a.x;
      e.y = a.y;
      this.jp(e);
      b.direction.x = e.x - this.la.origin.x;
      b.direction.y = e.y - this.la.origin.y;
      0.25 > b.normalize()
        ? ((b.direction.x = c), (b.direction.y = d))
        : ((a = X.FA),
          (c = 57.29577951308232 * Math.atan2(b.direction.y, b.direction.x)),
          (d = 1),
          X.MC
            ? 0 <= c
              ? ((d = -1), c < 90 - a ? (c = 90 - a) : c > 180 - (90 - a) && (c = 180 - (90 - a)))
              : c > -90 + a
              ? (c = -90 + a)
              : c < -90 - a && (c = -90 - a)
            : 0 > c
            ? c > -90 + a
              ? (c = -90 + a)
              : c < -90 - a && (c = -90 - a)
            : 90 > c
            ? (c = -90 + a)
            : 270 > c && (c = -90 - a),
          (b.direction.x = Math.cos(0.0174532925199432 * c) * d),
          (b.direction.y = Math.sin(0.0174532925199432 * c) * d));
    },
    dB: function (a, b, c, d) {
      if (0 > a || a >= this.Ba.l || 0 == this.Ba.l) return !1;
      var e = this.Ba;
      a = e.i[(a + e.Sa) % e.J];
      e = new y();
      e.x = b;
      e.y = c;
      this.jp(e);
      return vg.Ph(e.x, e.y, a.G.x, a.G.y, a.ca * d);
    },
    Wm: function (a) {
      var b = new Nf(this.ia, this.cols, this.td);
      null != a && b.U(a.mb, a.Ta);
      return b;
    },
    Vx: function (a, b) {
      a.f.connected = !0;
      if (null == b) {
        b = new md();
        this.lB(a.G, b);
        a.mb = b.x;
        a.Ta = b.y;
        var c = new y();
        this.be(b.x, b.y, c);
        if (null != this.ia.get(a.mb, a.Ta))
          if (a.G.x < c.x) {
            if (0 == a.mb) throw 22;
            a.mb--;
          } else if (a.G.x > c.x) {
            if (a.mb == this.cols - 1) throw 23;
            a.mb++;
          }
        this.be(a.mb, a.Ta, a.G);
      } else {
        b.Lh();
        c = b.ya.va;
        for (var d; null != c; ) (d = c.node.oa), d.Lh(), (c = c.next);
        b = new md(b.mb, b.Ta);
        b = this.Ey(b, a.G);
        a.mb = b.x;
        a.Ta = b.y;
        a.Lh();
        b.y < this.qc && (this.qc = b.y);
      }
      this.ia.sm(a);
      a.ya = new ld(a);
      this.pb.tm(a.ya);
      for (b = this.Wm(a); b.cursor < b.size; ) (c = b.list[b.cursor++]), this.pb.Cq(a.ya, c.ya);
      this.Vj = !0;
    },
    Ey: function (a, b) {
      var c = 20,
        d = new md(-1, -1),
        e = new y();
      e.x = 0;
      e.y = 0;
      var f = this.Wm();
      for (f.U(a.x, a.y, !0); f.cursor < f.size; ) {
        var g = f.list[f.cursor++];
        if (0 == g.code) {
          a = g.mb;
          g = g.Ta;
          this.be(a, g, e);
          var h = e.x - b.x,
            k = e.y - b.y;
          h = h * h + k * k;
          h < c && ((c = h), (d.x = a), (d.y = g));
        }
      }
      return d;
    },
    j: Le,
  });
  xb.g = !0;
  xb.Da = [Jc];
  xb.prototype = {
    o: function () {
      var a = this;
      if (!this.f.jd) {
        xb.count--;
        if (this.f.connected) {
          for (var b = this.ya.va; null != b; ) this.I.Qi.zv(b.node.oa), (b = b.next);
          this.I.Ar(this);
        }
        this.I.ia.vu(this);
        this.I.lb.remove(this);
        this.actions.S();
        null != this.client && this.client.Fm(this);
        this.I.notify(function (c) {
          c.Fm(a);
        });
        this.f.jd = !0;
        this.actions = this.Ex = this.force = this.Ga = this.G = this.ya = this.client = this.I = null;
      }
    },
    Ya: function (a) {
      a.U(this);
      a.enabled = !0;
      this.actions.Oa(a);
    },
    Lc: function (a, b) {
      null == b && (b = -1);
      -1 < b && (a = this.Le(b));
      if (null == a) return !1;
      a.enabled = !1;
      return this.actions.remove(a);
    },
    Le: function (a) {
      for (var b = this.actions.i, c = 0, d = this.actions.l; c < d; ) {
        var e = c++;
        if (b[e].type == a) return b[e];
      }
      return null;
    },
    py: function (a) {
      for (var b = this.actions.i, c = 0, d = this.actions.l; c < d; ) {
        var e = c++;
        b[e].type == a && (b[e].enabled = !0);
      }
    },
    Zr: function (a) {
      this.I.be(this.mb, this.Ta, a);
    },
    Lh: function () {
      this.Zr(this.G);
    },
    Zq: function (a) {
      this.code = a;
      null != this.client && this.client.vx(this, a, this.code);
    },
    disconnect: function () {
      this.I.Ar(this);
    },
    ns: function (a) {
      this.I.viewport.pv(this.G, a);
    },
    Yz: function (a) {
      var b = this.G,
        c = a.G,
        d = c.x - b.x;
      b = c.y - b.y;
      a = this.ca + a.ca;
      return d * d + b * b < a * a;
    },
    Hu: function (a, b, c) {
      null == c && (c = -1);
      null == b && (b = -1);
      if (null == a || a.f.jd || this.f.jd) return !1;
      b = -1 == b ? this.Kk : b;
      c = -1 == c ? a.Kk : c;
      var d = this.G,
        e = a.G,
        f = d.x - e.x,
        g = d.y - e.y,
        h = f * f + g * g;
      a = this.ca + a.ca;
      return h < a * a
        ? ((h = Math.sqrt(h)),
          (f /= h),
          (g /= h),
          (a = a - h + 0.01),
          (h = 1 / (b + c)),
          (d.x += f * a * b * h),
          (d.y += g * a * b * h),
          (e.x -= f * a * c * h),
          (e.y -= g * a * c * h),
          !0)
        : !1;
    },
    lp: function (a) {
      if (!this.f.jd) {
        var b = a.Br(this.G);
        b <= this.ca && ((b = this.ca - b + 0.01), (this.G.x += b * a.Wa.x), (this.G.y += b * a.Wa.y));
      }
    },
    j: xb,
  };
  Qf.g = !0;
  Qf.prototype = { j: Qf };
  Ff.g = !0;
  Ff.prototype = {
    test: function () {
      var a = this.Gk.x - this.Fk.x,
        b = this.Gk.y - this.Fk.y,
        c = this.Rn.x - this.Ik.x,
        d = this.Rn.y - this.Ik.y,
        e = this.Js + this.Sn,
        f = a * a + b * b - e * e;
      if (0 > f) return (this.Re = 0), !0;
      e = c * c + d * d;
      if (1e-6 > e) return !1;
      a = c * a + d * b;
      if (0 <= a) return !1;
      b = a * a - e * f;
      if (0 > b) return !1;
      this.Re = (-a - Math.sqrt(b)) / e;
      return !0;
    },
    j: Ff,
  };
  dd.g = !0;
  dd.UC = function (a) {
    var b = dd.yb;
    b.l = 0;
    b = a.lb;
    a = b.i;
    var c = 0;
    for (b = b.l; c < b; ) {
      var d = c++;
      d = a[d];
      !d.f.Cg || d.f.loaded || d.f.yc || dd.yb.Oa(d);
    }
    dd.yb.qx(function () {});
  };
  Pf.g = !0;
  Pf.prototype = {
    update: function () {
      for (var a = this.I.lb.iterator(); a.ka(); ) {
        var b = a.next();
        b.f.connected && this.zv(b);
      }
    },
    zv: function (a) {
      a.f.Hc = !1;
      if (null != a.ya) {
        for (var b = 0, c = a.ya.va; null != c; ) ++b, (c = c.next);
        if (6 == b) a.f.Hc = !0;
        else {
          c = a.mb;
          var d = a.Ta,
            e = d == this.I.pc;
          if (this.vy)
            if (e && 4 == b) a.f.Hc = !0;
            else {
              var f = 1 == this.I.td ? 0 : 1,
                g = this.I.cols - 1;
              if (0 == this.I.gg) {
                if (0 == c || c == g - ((d + 1) & 1))
                  e
                    ? b == 2 + f && (a.f.Hc = !0)
                    : 1 == (d & 1)
                    ? b == 5 - 2 * f && (a.f.Hc = !0)
                    : b == 3 + 2 * f && (a.f.Hc = !0);
              } else
                0 == c
                  ? e
                    ? b == 2 + f && (a.f.Hc = !0)
                    : 1 == (d & 1)
                    ? b == 5 - 2 * f && (a.f.Hc = !0)
                    : b == 3 + 2 * f && (a.f.Hc = !0)
                  : c == g &&
                    (e
                      ? b == 3 - f && (a.f.Hc = !0)
                      : 1 == (d & 1)
                      ? b == 3 + 2 * f && (a.f.Hc = !0)
                      : b == 5 - 2 * f && (a.f.Hc = !0));
            }
        }
      }
    },
    j: Pf,
  };
  Of.g = !0;
  Of.prototype = {
    S: function () {
      for (var a = this.map.keys(); a.ka(); ) {
        var b = a.next();
        this.map.remove(b);
      }
      this.map = null;
    },
    ge: function (a, b) {
      return -1 != a ? this.map.P.hasOwnProperty(((b + 16777215) << 6) | a) : !1;
    },
    get: function (a, b) {
      return this.map.P[((b + 16777215) << 6) | a];
    },
    set: function (a, b, c) {
      this.map.P[((b + 16777215) << 6) | a] = c;
    },
    sm: function (a) {
      this.set(a.mb, a.Ta, a);
    },
    vu: function (a) {
      this.ge(a.mb, a.Ta) && this.get(a.mb, a.Ta) == a && this.map.remove(((a.Ta + 16777215) << 6) | a.mb);
    },
    iterator: function () {
      for (var a = [], b = this.map.keys(); b.ka(); ) {
        var c = b.next();
        a.push(this.map.P[c]);
      }
      return new Md(a);
    },
    j: Of,
  };
  Nf.g = !0;
  Nf.prototype = {
    ka: function () {
      return this.cursor < this.size;
    },
    next: function () {
      return this.list[this.cursor++];
    },
    U: function (a, b, c) {
      null == c && (c = !1);
      this.cursor = this.size = 0;
      var d = this.cols,
        e = (b & 1) == this.TB ? 1 : 0,
        f = a + 1;
      if (0 <= f && f < d) {
        var g = this.ia.get(f, b);
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Hg(f, b));
      }
      f = a + e;
      var h = b + 1;
      0 <= f &&
        f < d &&
        ((g = this.ia.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Hg(f, h)));
      f = a - 1 + e;
      h = b + 1;
      0 <= f &&
        f < d &&
        ((g = this.ia.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Hg(f, h)));
      f = a - 1;
      0 <= f &&
        f < d &&
        ((g = this.ia.get(f, b)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Hg(f, b)));
      f = a - 1 + e;
      h = b - 1;
      0 <= f &&
        f < d &&
        ((g = this.ia.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Hg(f, h)));
      f = a + e;
      h = b - 1;
      0 <= f &&
        f < d &&
        ((g = this.ia.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Hg(f, h)));
      return this;
    },
    Hg: function (a, b) {
      var c = Object.create(xb.prototype);
      c.code = 0;
      c.mb = a;
      c.Ta = b;
      return c;
    },
    j: Nf,
  };
  Lf.g = !0;
  Lf.prototype = {
    Ay: function (a, b, c, d, e, f, g, h) {
      h = f * a + g * b - h;
      if (z.abs(h) <= c) return (this.tl.x = a - f * h), (this.tl.y = b - g * h), (this.t = 0), !0;
      var k = f * d + g * e;
      if (0 <= k * h) return (this.t = -1), !1;
      c = 0 < h ? c : -c;
      this.t = (c - h) / k;
      this.tl.x = a + this.t * d - c * f;
      this.tl.y = b + this.t * e - c * g;
      return !0;
    },
    j: Lf,
  };
  If.g = !0;
  If.prototype = {
    test: function () {
      var a = 0,
        b = this.Hk,
        c = this.Hs,
        d = this.Of,
        e = this.Nf;
      if (1e-6 > Math.abs(e.x)) {
        if (d.x < c.s || d.x > c.A) return !1;
      } else {
        var f = (c.s - d.x) / e.x;
        var g = (c.A - d.x) / e.x;
        if (f > g) {
          var h = f;
          f = g;
          g = h;
        }
        f > a && (a = f);
        g < b && (b = g);
        if (a > b) return !1;
      }
      if (1e-6 > Math.abs(e.y)) {
        if (d.y < c.u || d.y > c.B) return !1;
      } else if (
        ((f = (c.u - d.y) / e.y),
        (g = (c.B - d.y) / e.y),
        f > g && ((h = f), (f = g), (g = h)),
        f > a && (a = f),
        g < b && (b = g),
        a > b)
      )
        return !1;
      this.Re = a;
      this.bg.x = d.x + e.x * a;
      this.bg.y = d.y + e.y * a;
      return !0;
    },
    j: If,
  };
  Gf.g = !0;
  Gf.prototype = {
    test: function () {
      var a = this.Of.x,
        b = this.Of.y,
        c = this.Nf.x,
        d = this.Nf.y,
        e = a - this.Pn.x,
        f = b - this.Pn.y,
        g = e * c + f * d;
      e = e * e + f * f - this.Qn * this.Qn;
      if (0 < e && 0 < g) return !1;
      e = g * g - e;
      if (0 > e) return !1;
      g = -g - Math.sqrt(e);
      if (g > this.Hk) return !1;
      0 > g
        ? ((this.bg.x = a), (this.bg.y = b), (this.Re = 0))
        : ((this.bg.x = a + g * c), (this.bg.y = b + g * d), (this.Re = g));
      return !0;
    },
    j: Gf,
  };
  Na.g = !0;
  Na.prototype = {
    yn: function () {
      for (var a = this.kr(), b = [], c = 1; c < a.length; ) 0 < a[c] && b.push(c), ++c;
      return b;
    },
    kr: function () {
      var a = 0;
      this.ia.eo(function (c) {
        a = z.max(c, a);
      });
      a += 1;
      var b = Array(a);
      Bd.U(b, 0, 0, a);
      this.ia.eo(function (c) {
        b[c]++;
      });
      return b;
    },
    Yx: function () {
      for (var a = 0, b = this.ia.iterator(); b.ka(); ) 0 < b.next() && ++a;
      return a;
    },
    Qx: function () {
      function a(l, m) {
        var n = e + l,
          q = f + m;
        0 <= n && n < b && 0 <= q && q < c && ((h = (h |= (l + 1) << k) | ((m + 1) << (k + 2))), (k += 4));
      }
      var b = this.ia.ga,
        c = this.ia.sa,
        d = (this.GA = new vc(b, c)),
        e = 0,
        f = 0;
      for (f = 0; f < c; ) {
        var g = (f & 1) == this.td ? 1 : 0;
        for (e = 0; e < b; ) {
          var h = 0;
          var k = 3;
          a(1, 0);
          a(g, 1);
          a(-1 + g, 1);
          a(-1, 0);
          a(-1 + g, -1);
          a(g, -1);
          h |= (k - 3) >> 2;
          d.i[f * d.ga + e] = h;
          e += 1;
        }
        f += 1;
      }
      return d;
    },
    By: function (a, b, c) {
      var d = [];
      a = this.jz(a, b, d);
      b = this.ia;
      var e = 0;
      b.eo(function (l) {
        e = z.max(l, e);
      });
      e += 1;
      for (var f = [], g = 0, h = e; g < h; ) {
        var k = g++;
        f.push(0);
      }
      for (k = 0; k < a; ) f[b.i[d[k + 1] * b.ga + d[k]]]++, (k += 2);
      for (a = 0; 0 < --e; ) 0 < f[e] && (c[a++] = e);
      return a;
    },
    pn: function (a, b, c) {
      var d = this.GA;
      d = d.i[b * d.ga + a];
      var e = d & 7;
      d >>= 3;
      for (var f = 0, g = 0; f < e; ) (c[g++] = a + ((d & 3) - 1)), (c[g++] = b + (((d >> 2) & 3) - 1)), (d >>= 4), ++f;
      return g;
    },
    Dy: function (a, b, c) {
      var d = 0,
        e = ++this.timeStamp,
        f = this.marks;
      var g = this.ia;
      var h = g.i[b * g.ga + a],
        k = 0;
      Na.stack[k++] = a;
      Na.stack[k++] = b;
      for (f.i[b * f.ga + a] = e; 0 < k; )
        for (b = Na.stack[--k], g = Na.stack[--k], c[d++] = g, c[d++] = b, a = 0, b = this.pn(g, b, Na.yg); a < b; ) {
          var l = Na.yg[a++];
          var m = Na.yg[a++];
          f.i[m * f.ga + l] != e &&
            ((f.i[m * f.ga + l] = e),
            (g = this.ia),
            g.i[m * g.ga + l] == h && ((Na.stack[k++] = l), (Na.stack[k++] = m)));
        }
      return d;
    },
    jz: function (a, b, c, d) {
      var e = ++this.timeStamp,
        f = this.marks,
        g = [],
        h = 0,
        k,
        l = 0;
      for (b = this.Dy(a, b, g); l < b; ) {
        var m = g[l++];
        var n = g[l++];
        f.i[n * f.ga + m] = e;
      }
      for (l = 0; l < b; )
        for (m = g[l++], n = g[l++], a = 0, k = this.pn(m, n, Na.yg); a < k; )
          (m = Na.yg[a++]),
            (n = Na.yg[a++]),
            f.i[n * f.ga + m] == e || (null != d && !d(m, n)) || ((f.i[n * f.ga + m] = e), (c[h++] = m), (c[h++] = n));
      return h;
    },
    j: Na,
  };
  Mf.g = !0;
  Mf.prototype = {
    S: function () {
      this.vi.S();
      this.vi = null;
      this.ui.S();
      this.I = this.ui = null;
      this.set.S();
      this.set = null;
    },
    Xj: function () {
      return this.vi.next();
    },
    mr: function () {
      return this.ui.next();
    },
    Fy: function (a, b) {
      var c = new Z();
      a = this.Rr(a, b);
      if (a.Vg()) return c;
      for (var d = a.iterator(); d.wa < d.Va; )
        (a = d.i[d.wa++]), this.cA(a) ? d.remove() : this.eA(a) && (d.remove(), c.add(a));
      d.i = d.gb.i;
      d.Va = d.gb.l;
      for (d.wa = 0; d.wa < d.Va; ) (a = d.i[d.wa++]), this.bA(a) && d.remove();
      var e = this.Xj();
      this.clearMarks();
      d.i = d.gb.i;
      d.Va = d.gb.l;
      for (d.wa = 0; d.wa < d.Va; )
        (a = d.i[d.wa++]),
          this.I.pb.fk(!1, a.i[0].ya, function (f) {
            e.add(f.oa);
            return !0;
          });
      for (a = this.Rr(e, b).iterator(); a.ka(); ) (b = a.next()), c.add(b);
      return c;
    },
    cA: function (a) {
      for (a = a.iterator(); a.wa < a.Va; ) {
        var b = a.i[a.wa++];
        if (b.Ta == b.I.pc) return !0;
      }
      return !1;
    },
    bA: function (a) {
      this.clearMarks();
      var b = !1;
      this.I.pb.fk(!1, a.i[0].ya, function (c) {
        c = c.oa;
        return c.Ta == c.I.pc ? ((b = !0), !1) : !0;
      });
      return b;
    },
    eA: function (a) {
      for (a = a.iterator(); a.ka(); )
        for (var b = a.next().ya.va; null != b; ) {
          if (b.node.visible) return !1;
          b = b.next;
        }
      return !0;
    },
    wA: function (a, b, c, d) {
      d && this.clearMarks();
      this.I.pb.fk(!0, a.ya, function (e, f) {
        if (f) return b(e.oa, a);
        c.add(e.oa);
        return !0;
      });
      return c;
    },
    Rr: function (a, b) {
      var c = this.mr(),
        d = this.Xj();
      d.ec(a.l);
      this.clearMarks();
      for (a = a.iterator(); a.wa < a.Va; ) {
        var e = [a.i[a.wa++]];
        e[0].f.connected &&
          !e[0].ya.ta &&
          ((d.l = 0),
          this.I.pb.fk(
            !0,
            e[0].ya,
            (function (f) {
              return function (g, h) {
                g = g.oa;
                if (h) return null == b ? g.code == f[0].code : b(g, f[0]);
                d.Oa(g);
                return !0;
              };
            })(e)
          ),
          0 < d.l && ((e = this.Xj().of(d)), c.add(e)));
      }
      return c;
    },
    Gy: function (a, b, c) {
      this.clearMarks();
      this.tA(a);
      var d = a.iterator();
      for (a = d; a.wa < a.Va; ) {
        var e = a.i[a.wa++];
        e.ya.ta = !0;
      }
      this.set.clear();
      d.i = d.gb.i;
      d.Va = d.gb.l;
      d.wa = 0;
      for (a = d; a.wa < a.Va; )
        for (e = a.i[a.wa++], d = e.ya.va; null != d; ) {
          e = d.node;
          if (!e.ta) {
            if (null != c ? c(e.oa) : 1) {
              var f = this.set;
              var g = e.oa.key,
                h = (73856093 * g) & f.Hi,
                k = f.i,
                l = f.Ne[h];
              if (-1 == l)
                f.l == f.J && (f.grow(), (k = f.i)),
                  (l = 3 * f.Ab),
                  (f.Ab = f.Lb[f.Ab]),
                  (f.Ne[h] = l),
                  (k[l] = g),
                  (k[l + 1] = 1),
                  f.l++,
                  (f = !0);
              else if (k[l] == g) f = !1;
              else {
                for (h = k[l + 2]; -1 != h; ) {
                  if (k[h] == g) {
                    l = -1;
                    break;
                  }
                  l = h;
                  h = k[l + 2];
                }
                -1 == l
                  ? (f = !1)
                  : (f.l == f.J && (f.grow(), (k = f.i)),
                    (h = 3 * f.Ab),
                    (f.Ab = f.Lb[f.Ab]),
                    (k[l + 2] = h),
                    (k[h] = g),
                    (k[h + 1] = 1),
                    f.l++,
                    (f = !0));
              }
            } else f = !1;
            f && b.add(e.oa);
            e.ta = !0;
          }
          d = d.next;
        }
    },
    complete: function () {
      this.vi.wh();
      for (var a = this.vi.iterator(); a.wa < a.Va; ) {
        var b = a.i[a.wa++],
          c = !0;
        null == c && (c = !1);
        c && ba.Zc(b.i);
        b.l = 0;
      }
      this.ui.wh();
      for (a = this.ui.iterator(); a.wa < a.Va; )
        (b = a.i[a.wa++]), (c = !0), null == c && (c = !1), c && ba.Zc(b.i), (b.l = 0);
    },
    tA: function (a) {
      var b = a.i,
        c = 0;
      for (a = a.l; c < a; ) {
        var d = c++;
        b[d].ya.ta = !0;
      }
    },
    clearMarks: function () {
      this.I.pb.clearMarks();
    },
    j: Mf,
  };
  Ke.g = !0;
  Ke.prototype = {
    S: function () {
      this.Qd.S();
      this.Or = this.Qd = null;
    },
    iterator: function () {
      return this.Qd.iterator();
    },
    next: function () {
      if (this.Xp < this.size) return this.Qd.i[this.Xp++];
      var a = this.Or();
      this.Qd.add(a);
      return a;
    },
    wh: function () {
      this.Xp = 0;
      this.size = this.Qd.l;
    },
    j: Ke,
  };
  Kf.g = !0;
  Kf.prototype = {
    S: function () {
      this.tc.S();
      this.I = this.Ss = this.Te = this.tc = this.Eg = null;
    },
    Uu: function (a, b) {
      this.Te.i[a] = b;
    },
    Uj: function (a, b, c) {
      var d = this.Ss;
      this.Dd = -1;
      this.Eg = null;
      for (var e = 0, f = this.tc.iterator(); f.wa < f.Va; ) {
        var g = f.i[f.wa++];
        0 != (this.cx & (1 << e)) &&
          d.Ay(a.G.x, a.G.y, a.ca, b.x, b.y, g.Wa.x, g.Wa.y, g.lc) &&
          0 < d.t &&
          d.t < c &&
          ((c = d.t), (this.Eg = g), (this.Dd = e));
        ++e;
      }
      return c;
    },
    ve: function () {
      for (var a = 0; 4 > a; ) {
        var b = a++;
        this.Te.i[b](this.tc.i[b]);
      }
    },
    j: Kf,
  };
  vg.g = !0;
  vg.Ph = function (a, b, c, d, e) {
    a -= c;
    b -= d;
    return a * a + b * b < e * e;
  };
  Jf.g = !0;
  Jf.prototype = {
    S: function () {
      this.hi.S();
      this.Dg.S();
      this.Dg = this.To = this.Uo = this.fi = this.hi = null;
    },
    reset: function () {
      var a = this.hi;
      a.l = 0;
      a = this.Dg;
      a.l = 0;
    },
    j: Jf,
  };
  Hf.g = !0;
  Hf.prototype = {
    S: function () {
      this.result.S();
      this.test.S();
      this.I = this.yi = this.zl = this.Xl = this.Kp = this.test = this.result = null;
    },
    eu: function (a, b, c) {
      this.result.Uo = null;
      this.result.To = null;
      this.result.fi = null;
      this.result.So = -1;
      var d = this.Xl,
        e = d.origin,
        f = a.origin;
      e.x = f.x;
      e.y = f.y;
      e = d.direction;
      f = a.direction;
      e.x = f.x;
      e.y = f.y;
      a = this.bD;
      a.G.x = d.origin.x;
      a.G.y = d.origin.y;
      a.ca = b;
      this.test.Sg = d;
      this.test.Is = b;
      var g = this.result.hi;
      g.l = 0;
      g.Oa(d.origin.x);
      g.Oa(d.origin.y);
      var h = this.I.Bb,
        k,
        l = 0;
      if (0 < (this.Vb & 8)) {
        var m = this.I.lb;
        e = m.i;
        f = 0;
        for (k = m.l; f < k; ) (m = f++), (e[m].f.Ln = !1);
      }
      e = this.zl;
      f = this.I.proxy;
      e.s = f.s;
      e.u = f.u;
      e.A = f.A;
      e.B = f.B;
      Qb.offset(this.zl, b, b);
      for (b = 0; b++ < c + 1; ) {
        e = this.Kp;
        e.x = d.direction.x;
        e.y = d.direction.y;
        f = h.Uj(a, e, Infinity);
        k = Infinity;
        m = this.yi.Of;
        m.x = d.origin.x;
        m.y = d.origin.y;
        m = this.yi.Nf;
        m.x = e.x;
        m.y = e.y;
        this.yi.Hs = this.zl;
        if (
          this.yi.test() &&
          ((m = this.result.Dg),
          (m.l = 0),
          this.test.reset(),
          (this.test.Tn = 0 < (this.Vb & 8) && 1 == b),
          (this.test.Ks = 0 < (this.Vb & 16)),
          this.test.ud(),
          (k = this.test.ol),
          this.test.Tn)
        )
          for (m = this.test.oh.iterator(); m.ka(); ) {
            var n = m.next();
            this.result.Dg.Oa(n);
          }
        l += Math.min(f, k);
        if (f < k) {
          this.result.So = h.Dd;
          d.origin.x += d.direction.x * f;
          d.origin.y += d.direction.y * f;
          g.Oa(d.origin.x);
          g.Oa(d.origin.y);
          if (2 == h.Dd && 0 == (this.Vb & 2)) break;
          if (0 == h.Dd && 0 == (this.Vb & 1)) break;
          a.G = d.origin;
          Ud.su(e, h.Eg.Wa);
          d.direction.x = e.x;
          d.direction.y = e.y;
        } else
          return (
            (this.result.Uo = this.test.ql),
            (this.result.To = this.test.pl),
            (this.result.fi = this.test.ag),
            (d.origin.x += e.x * k),
            (d.origin.y += e.y * k),
            g.Oa(d.origin.x),
            g.Oa(d.origin.y),
            k
          );
      }
      return l;
    },
    j: Hf,
  };
  Ef.g = !0;
  Ef.prototype = {
    S: function () {
      this.oh.S();
      this.fv = this.hv = this.No = this.I = this.oh = this.pl = this.ql = this.ag = this.Sg = null;
    },
    reset: function () {},
    ud: function () {
      this.ol = this.Yt = Infinity;
      this.ag = null;
      this.oh.l = 0;
      var a = this.Sg.origin.x,
        b = this.Sg.origin.y,
        c = this.Sg.direction.x,
        d = this.Sg.direction.y,
        e = this.fv;
      e.Fk.x = a;
      e.Fk.y = b;
      e.Ik.x = c;
      e.Ik.y = d;
      var f = e.Rn;
      f.x = 0;
      f.y = 0;
      var g = this.hv;
      g.Of.x = a;
      g.Of.y = b;
      g.Nf.x = c;
      g.Nf.y = d;
      g.Hk = 1;
      for (var h = 0, k = this.I.uz(this.No); h < k; ) {
        var l = h++;
        l = this.No[l];
        if (null != l && (this.Ks || !l.f.Hc) && l.f.connected && l.f.$h && !l.f.yc) {
          if (this.Tn && !l.f.Ln) {
            f = g.Pn;
            var m = l.G;
            f.x = m.x;
            f.y = m.y;
            g.Qn = 2 * l.ca;
            g.test() && ((l.f.Ln = !0), this.oh.Oa(l));
          }
          e.Js = this.Is * X.yx;
          f = e.Gk;
          m = l.G;
          f.x = m.x;
          f.y = m.y;
          e.Sn = l.ca;
          e.test() &&
            ((f = e.Re),
            f >= this.Yt || ((this.Yt = f), (this.ag = l), (this.ql.x = a + c * f), (this.ql.y = b + d * f)));
        }
      }
      null != this.ag &&
        ((f = e.Gk),
        (m = this.ag.G),
        (f.x = m.x),
        (f.y = m.y),
        (e.Sn = this.ag.ca),
        e.test(),
        (this.ol = e.Re),
        (this.pl.x = a + c * this.ol),
        (this.pl.y = b + d * this.ol));
    },
    j: Ef,
  };
  X.g = !0;
  Df.g = !0;
  Df.prototype = {
    S: function () {
      this.I = this.mk = this.Xd = null;
    },
    $b: function () {
      var a = this.ha,
        b = a.s,
        c = a.u,
        d = a.A,
        e = a.B;
      a = new ca();
      a.s = b;
      a.u = c;
      a.A = d;
      a.B = e;
      return a;
    },
    af: function (a) {
      var b = a.s,
        c = a.u,
        d = a.A;
      a = a.B;
      var e = new ca();
      e.s = b;
      e.u = c;
      e.A = d;
      e.B = a;
      this.ha = e;
      this.Bv();
      this.jj();
    },
    Hl: function (a, b) {
      var c = this.mk;
      c.x = a;
      c.y = b;
      this.Bv();
    },
    Vu: function (a) {
      this.zoom != a && ((this.zoom = a), this.I.Bb.ve());
      return this.zoom;
    },
    jj: function (a) {
      null == a && (a = this.I.cols);
      var b = this.ha;
      return (this.zoom = (b.A - b.s) / (2 * (a + (1 == this.I.gg ? 0.5 : 0))));
    },
    pv: function (a, b) {
      b.x = this.Xd.x + (a.x - this.I.la.origin.x) * this.zoom;
      b.y = this.Xd.y + (a.y - this.I.la.origin.y) * this.zoom;
    },
    Mp: function (a) {
      return this.Xd.x + (a - this.I.la.origin.x) * this.zoom;
    },
    Ac: function (a) {
      return this.Xd.y + (a - this.I.la.origin.y) * this.zoom;
    },
    Np: function (a) {
      return (a - this.Xd.y) / this.zoom + this.I.la.origin.y;
    },
    iD: function (a) {
      a.x = (a.x - this.Xd.x) / this.zoom + this.I.la.origin.x;
      a.y = (a.y - this.Xd.y) / this.zoom + this.I.la.origin.y;
    },
    Us: function (a, b) {
      var c = this.Mp(a.x);
      a = this.Ac(a.y);
      b *= this.zoom;
      var d = this.ha;
      return 0 == (c + b < d.s || c - b > d.A || a + b < d.u || a - b > d.B);
    },
    Bv: function () {
      var a = this.ha;
      this.Xd.x = this.ha.s + this.mk.x * (a.A - a.s);
      a = this.ha;
      this.Xd.y = this.ha.u + this.mk.y * (a.B - a.u);
    },
    j: Df,
  };
  ja.g = !0;
  Lb.g = !0;
  Lb.D = K;
  Lb.prototype = u(K.prototype, {
    wb: function () {
      return ja.sq;
    },
    U: function (a) {
      K.prototype.U.call(this, a);
      a.Qg = X.Qg;
      a.Uc = 0;
    },
    update: function (a) {
      a.force.y += a.Qg;
    },
    j: Lb,
  });
  cb.g = !0;
  cb.D = K;
  cb.prototype = u(K.prototype, {
    U: function (a) {
      this.Ru(a);
    },
    update: function (a) {
      this.Ru(a);
    },
    wb: function () {
      return ja.zj;
    },
    Ru: function (a) {
      var b = a.G,
        c = a.I.la.origin,
        d = c.y;
      b.x = c.x;
      b.y = d;
      a.G.x += this.ae.x;
      a.G.y += this.ae.y;
      a = a.scale;
      a.a = a.b = this.scale;
    },
    j: cb,
  });
  bd.g = !0;
  bd.D = K;
  bd.prototype = u(K.prototype, {
    wb: function () {
      return ja.fw;
    },
    update: function (a) {
      var b = a.nb,
        c = a.Ga;
      c.x += a.force.x * b;
      c.y += a.force.y * b;
      0 < a.Uc && ((c.x *= 1 - a.Uc), (c.y *= 1 - a.Uc));
      a.G.x += c.x * b;
      a.G.y += c.y * b;
      c = a.force;
      c.x = 0;
      c.y = 0;
      if (!a.f.connected && a.f.fixed && ((c = a.Ex), null != c)) {
        var d = a.I.la.origin.x,
          e = a.I.la.origin.y;
        a.G.x += d - c.x;
        a.G.y += e - c.y;
        c.x = d;
        c.y = e;
      }
      0 != a.Iq && (a.rotation += a.Iq * b);
    },
    j: bd,
  });
  Kb.g = !0;
  Kb.D = K;
  Kb.prototype = u(K.prototype, {
    wb: function () {
      return ja.sq;
    },
    U: function (a) {
      a.Zr(this.anchor);
    },
    update: function (a) {
      if (0 != a.ef) {
        var b = a.G.x - this.anchor.x,
          c = a.G.y - this.anchor.y;
        1e-12 > b * b + c * c
          ? ((a.G.x = this.anchor.x), (a.G.y = this.anchor.y))
          : ((a.force.x += -a.ef * b), (a.force.y += -a.ef * c));
      }
    },
    j: Kb,
  });
  Ed.g = !0;
  Ed.D = K;
  Ed.prototype = u(K.prototype, {
    wb: function () {
      return ja.zj;
    },
    update: function (a) {
      a.rotation = 90 + 57.29577951308232 * Math.atan2(a.Ga.y, a.Ga.x);
    },
    j: Ed,
  });
  ad.g = !0;
  ad.D = K;
  ad.prototype = u(K.prototype, {
    U: function (a) {
      K.prototype.U.call(this, a);
      var b = a.I.la.clone(),
        c = a.G,
        d = b.origin;
      c.x = d.x;
      c.y = d.y;
      a.Ga.x = b.direction.x * X.Wq;
      a.Ga.y = b.direction.y * X.Wq;
      c = a.force;
      c.x = 0;
      c.y = 0;
      a.f.connected = !1;
    },
    update: function (a) {
      var b = a.I,
        c = b.Ye,
        d = b.Bb,
        e = a.G,
        f = a.Ga;
      if (a.f.de) this.SA(a, 0 > d.tc.i[0].Br(e) ? 0 : 2);
      else {
        var g = this.Xl,
          h = g.origin;
        h.x = e.x;
        h.y = e.y;
        g.direction.x = f.x * a.nb;
        g.direction.y = f.y * a.nb;
        c.Vb = 0;
        var k = a.I.Ok() ? X.jD : X.kD;
        "bounce" == k && (c.Vb |= 1);
        var l = X.px;
        "bounce" == l && (c.Vb |= 2);
        if (X.Cx || X.ts) c.Vb |= 8;
        a.f.$h || (c.Vb |= 16);
        h = c.eu(g, a.ca, 0);
        if (0 < (c.Vb & 8)) {
          var m = c.result.Dg;
          if (0 < m.l) {
            var n = m.i,
              q = 0;
            for (m = m.l; q < m; ) {
              var r = q++;
              r = n[r];
              a.f.jd || null == r || r.f.jd || b.PA(a, r);
            }
          }
        }
        if (-1 != c.result.So) {
          if (!(1 <= h)) {
            e.x += h * g.direction.x;
            e.y += h * g.direction.y;
            switch (d.Dd) {
              case 0:
                switch (k) {
                  case "none":
                    return;
                  case "stick":
                    this.Kt(a, null);
                    a.nb = 0;
                    return;
                }
                break;
              case 2:
                if ("none" == l) return;
            }
            Ud.su(f, d.tc.i[d.Dd].Wa);
            b.OA(a, d.Dd);
            a.nb = 0;
          }
        } else
          a.f.$h &&
            null != c.result.fi &&
            ((b = c.result.fi),
            1 > h && ((e.x += h * g.direction.x), (e.y += h * g.direction.y), (a.nb = 0), this.Kt(a, b)));
      }
    },
    Kt: function (a, b) {
      a.Lc(this);
      a.I.Ye.result.reset();
      a.I.RA(a, b);
    },
    SA: function (a, b) {
      a.Lc(this);
      a.I.Ye.result.reset();
      a.I.QA(a, b);
    },
    wb: function () {
      return ja.yj;
    },
    j: ad,
  });
  Cf.g = !0;
  Cf.prototype = {
    apply: function (a, b) {
      this.Kh ? (this.Kh = !1) : a.Hu(b, 0, 1) && this.YB(b);
    },
    YB: function (a) {
      if (null != a && a.f.connected) {
        var b = a.I;
        b.pb.clearMarks();
        b.pb.Lx();
        b.pb.Cr(3, !1, a.ya, L(this, this.process));
      }
    },
    process: function (a) {
      if (a.parent == a) return !0;
      var b = a.parent.oa;
      a = a.oa;
      null != b && null != a && b.Hu(a, 0, 1);
      return !0;
    },
    j: Cf,
  };
  Bf.g = !0;
  Bf.prototype = {
    oB: function (a) {
      this.list.l = 0;
      a.I.pb.clearMarks();
      a.I.pb.Cr(X.Bd.ca, !1, a.ya, L(this, this.process), a);
    },
    apply: function (a, b, c) {
      if (this.Kh) (a = this.list), (a.l = 0), (this.Kh = !1);
      else {
        this.bv = X.Bd.OC;
        this.bv || a.f.jd || ((a = a.G), (a.x = b.x), (a.y = b.y));
        this.direction = c;
        a = this.list;
        b = a.i;
        c = 0;
        for (a = a.l; c < a; ) {
          var d = c++,
            e = b[d];
          e.ja.f.jd ||
            (e.ja.py(Kb.TYPE),
            (d = (X.Bd.ca + 1 - e.depth) * X.Bd.Ji),
            (e = e.ja.Ga),
            (e.x += this.direction.x * d),
            (e.y += this.direction.y * d));
        }
        a = this.list;
        a.l = 0;
      }
    },
    process: function (a, b, c) {
      if ((this.bv && a.oa == c) || (null != this.filter && !this.filter(c, a.oa))) return !0;
      this.list.Oa(new Af(a.oa, a.depth));
      return !0;
    },
    j: Bf,
  };
  Af.g = !0;
  Af.prototype = { j: Af };
  Je.g = !0;
  Je.D = t;
  Je.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.Ed = new W(this.H().zb(4), ya, "crosshair");
      this.Ed.aa(0);
      ua.ob().Ka(L(this, this.sc));
      this.H().Ka(this);
    },
    o: function () {
      ua.ob().detach(L(this, this.sc));
      t.prototype.o.call(this);
    },
    Y: function (a) {
      9 == a.type && this.o();
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.alpha += this.jn / 20;
      1 < this.alpha && (this.alpha = 1);
      0 > this.alpha && (this.alpha = 0);
      switch (this.H().model.state) {
        case 0:
        case 1:
        case 2:
        case 6:
        case 8:
          this.visible = !1;
          break;
        default:
          this.visible = !0;
      }
      this.Jg *= 0.9;
      this.C().Ye.Vb = 0;
      this.C().Ye.eu(this.C().la.clone(), 1, 1);
      var b = this.C().Ye.result.hi;
      a = 0 < ua.ob().Zf ? 1 : 0;
      var c = b.i[2] - b.i[0];
      b = b.i[3] - b.i[1];
      var d = Math.sqrt(c * c + b * b);
      0 < d && ((c /= d), (b /= d));
      d = this.Tb;
      var e = ua.ob().position;
      d.x = e.x;
      d.y = e.y;
      this.C().jp(this.Tb);
      this.Tb.x += 2 * c * a;
      this.Tb.y += 2 * b * a;
      this.Tb.x = this.C().viewport.Mp(this.Tb.x);
      this.Tb.y = this.C().viewport.Ac(this.Tb.y);
      a = this.C().viewport.ha;
      this.Tb.x = Math.max(a.s, this.Tb.x);
      this.Tb.x = Math.min(a.A, this.Tb.x);
    },
    Ca: function (a) {
      t.prototype.Ca.call(this, a);
      if (this.W().paused) this.Ed.aa(0);
      else if (this.W().Uh || !this.nd)
        this.Ed.ea(this.Tb.x),
          this.Ed.fa(this.Tb.y),
          this.Ed.aa(this.alpha),
          this.Ed.na(this.Sx()),
          this.Ed.Qa(),
          this.Ed.ab(),
          this.Ed.N(this.visible);
    },
    sc: function (a) {
      if (!this.W().paused)
        switch (a.type) {
          case 0:
            if (this.H().Qo()) break;
            this.Jg = this.jn = 1;
            break;
          case 1:
            this.jn = -1;
        }
    },
    Sx: function () {
      var a = (2 * this.C().viewport.zoom) / this.Ed.O.x,
        b = this.W().level.za.Xf;
      10 > b && ((b = z.map(10 - b, 4, 1, 0.6, 0.9)), (a *= b));
      return (a += this.Jg);
    },
    R: function () {
      return 29;
    },
    j: Je,
  });
  Ie.g = !0;
  Ie.D = t;
  Ie.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
      this.text = new La(this.H().zb(6), wc);
      this.text.N(!1);
    },
    o: function () {
      t.prototype.o.call(this);
      this.text.o();
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 29:
          this.JC(la.Xa(this.W().level.za.level));
          break;
        case 30:
          this.Kd();
          break;
        case 35:
          this.Kd();
      }
    },
    JC: function (a) {
      this.text.N(!0);
      var b = this.H().xe,
        c = this.C().viewport.zoom;
      this.text.ij((3 * c) | 0);
      this.text.hj(0.8 * b.x, 4 * c);
      this.text.wc(a);
      this.text.$u();
      this.text.ea(b.x / 2 - this.text.mc() / 2);
      this.text.aa(0);
      this.time = 0;
      this.state = 1;
    },
    Kd: function () {
      this.state = 2;
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.zs && ((this.qb -= a), 0 >= this.qb && (this.Kd(), (this.zs = !1)));
      switch (this.state) {
        case 1:
          this.text.fa(this.C().viewport.Ac(this.C().ie()));
          a = this.text;
          a.aa(a.Ua + 0.1);
          break;
        case 2:
          this.text.fa(this.C().viewport.Ac(this.C().ie())),
            (a = this.text),
            a.aa(0.85 * a.Ua),
            0.01 > this.text.Ua && (this.text.N(!1), (this.state = 0));
      }
    },
    R: function () {
      return 43;
    },
    j: Ie,
  });
  He.g = !0;
  He.D = t;
  He.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      36 == a.type && (0 < this.W().zn() && this.Z(Ge), (this.wait = !0));
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.wait && null == this.V && (this.H().notify(37), (this.wait = !1));
    },
    R: function () {
      return 48;
    },
    j: He,
  });
  yc.g = !0;
  yc.D = t;
  yc.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.group = new ma(null, this.H().zb(6));
      this.group.N(!1);
      var a = this.C().viewport,
        b = a.zoom;
      a = a.$b();
      Qb.Ah(a, 0.5, !0);
      a.B = a.u + 3 * b;
      b = this.H().fb.Ef(0).ha.B;
      var c = a.B - a.u;
      a.u = b;
      a.B = b + c;
      this.icon = new W(this.group, ya, this.frame);
      this.icon.Qa();
      this.icon.ab();
      this.icon.ea(a.s + 0.5 * (a.A - a.s) - (a.A - a.s) / 4);
      this.icon.fa(a.u + 0.5 * (a.B - a.u));
      this.icon.na((a.B - a.u) / this.icon.O.y / 2);
      this.Lf = this.icon.Ja;
      b = "" + this.W().ps();
      this.text = new La(this.group, wc);
      this.text.hj((a.A - a.s) / 2, (a.B - a.u) / 2);
      this.text.wc(b);
      this.text.ij(((a.B - a.u) / 2) | 0);
      b = a.s;
      c = a.u;
      var d = a.A,
        e = a.B,
        f = new ca();
      f.s = b;
      f.u = c;
      f.A = d;
      f.B = e;
      f.s = a.s + 0.5 * (a.A - a.s);
      this.text.Vh(f, 0, 0);
    },
    o: function () {
      t.prototype.o.call(this);
      this.group.o();
    },
    R: function () {
      return 46;
    },
    j: yc,
  });
  Ge.g = !0;
  Ge.D = yc;
  Ge.prototype = u(yc.prototype, {
    M: function (a) {
      yc.prototype.M.call(this, a);
      switch (this.state) {
        case 0:
          if (this != this.parent.V) break;
          this.group.N(!0);
          this.time = 0;
          this.Db = this.W().Db;
          this.state++;
          this.H().notify(39);
          break;
        case 1:
          a = z.min(this.time / 1.4, 1);
          this.H().notify(40, Ba.Fc(["t", a]));
          this.icon.na(ac(0.1)(z.min(this.time / 0.4, 1)) * this.Lf);
          var b = this.W().ps();
          this.text.wc("" + Math.round(b - a * b));
          this.W().Db = this.Db + Math.round(a * b);
          this.H().notify(12);
          1 == a &&
            (this.state++,
            (this.time = 0),
            (this.W().Db = this.Db),
            this.W().xg(b),
            T.gt(this.Db),
            this.H().notify(41));
          break;
        case 2:
          if (0.5 > this.time) break;
          this.state++;
          this.time = 0;
          break;
        case 3:
          (a = z.min(this.time / 0.2, 1)), this.group.aa(1 - Ob(2)(a)), 1 == a && this.o();
      }
    },
    R: function () {
      return 47;
    },
    j: Ge,
  });
  Fe.g = !0;
  Fe.D = t;
  Fe.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      2 == a.type && this.fx();
    },
    fx: function () {
      for (var a = this.H().fb.Nj, b = 1, c = this.C().Ba.l; b < c; ) {
        var d = b++,
          e = this.C().Ng(d),
          f = e.Le(cb.TYPE);
        if (0 == a) {
          d = (d - 1) * M.Zh;
          var g = 2;
        } else (d = 2 + (d - 1) * M.Zh), (g = 0);
        f.ae.x = d;
        f.ae.y = g;
        e.Lc(null, zb.TYPE);
      }
    },
    R: function () {
      return 31;
    },
    j: Fe,
  });
  xc.g = !0;
  xc.D = t;
  xc.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 7:
          var b = a.get("bubble"),
            c = b.client,
            d = c.vc;
          c = c.Eh.b;
          if (200 == b.code) break;
          if (100 == b.code) {
            this.Z(null, new Ee(d, c, this.W().Uy()));
            break;
          }
          a = a.get("burstIndex");
          a = this.W().ji(a);
          0 < a && this.Z(null, new wb(d, c, a));
          break;
        case 24:
          (a = this.W().$r()), (c = this.C().Yg.client), (d = c.vc), (c = c.Eh.b), this.Z(null, new De(d, c, a));
      }
    },
    R: function () {
      return 35;
    },
    j: xc,
  });
  wb.g = !0;
  wb.D = t;
  wb.prototype = u(t.prototype, {
    o: function () {
      this.F.o();
      t.prototype.o.call(this);
      xc.count--;
    },
    ba: function () {
      t.prototype.ba.call(this);
      40 > this.ca && (this.ca = 40);
      var a = this.G.x - this.ca,
        b = this.G.y - this.ca,
        c = this.G.x + this.ca,
        d = this.G.y + this.ca;
      this.F = new La(this.H().zb(6), this.Cn());
      var e = (1.5 * this.ca * this.Bn()) | 0;
      this.F.hj(2 * e, e);
      this.F.wc("" + this.value);
      this.F.ij(e >> 1);
      e = this.F;
      var f = new ca();
      f.s = a;
      f.u = b;
      f.A = c;
      f.B = d;
      e.Vh(f, 0, 0);
      a = 0.25 * this.C().viewport.zoom;
      0 > this.F.ra
        ? this.F.ea(a)
        : ((b = this.F.mc()), (c = this.H().xe.x), this.F.ra + b > c && this.F.ea(c - b - a));
      this.em = this.Yd = this.F.ma;
      this.alpha = 1;
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.em = this.Yd;
      this.Yd -= 0.5;
      this.time > (1e3 > this.value ? 0.5 : 1) && ((this.alpha -= 0.1), 0.005 >= this.alpha && this.o());
    },
    Ca: function (a) {
      t.prototype.Ca.call(this, a);
      this.F.fa(this.Yd * a + this.em * (1 - a));
      this.F.aa(this.alpha);
    },
    Cn: function () {
      return 1e3 <= this.value ? wc : ug;
    },
    Bn: function () {
      return 1;
    },
    R: function () {
      return 32;
    },
    j: wb,
  });
  Ee.g = !0;
  Ee.D = wb;
  Ee.prototype = u(wb.prototype, {
    M: function (a) {
      this.time += a;
      this.em = this.Yd;
      this.Yd -= 0.25;
      2 < this.time && ((this.alpha -= 0.1), 0.005 >= this.alpha && this.o());
    },
    Cn: function () {
      return wc;
    },
    Bn: function () {
      return 2;
    },
    R: function () {
      return 34;
    },
    j: Ee,
  });
  De.g = !0;
  De.D = wb;
  De.prototype = u(wb.prototype, {
    ba: function () {
      wb.prototype.ba.call(this);
      this.F.Qa();
      this.Ge = this.W().Ge;
    },
    M: function (a) {
      this.time += a;
      a = z.min(this.time / 0.25, 1);
      this.F.na(ac(0.1 + 0.02 * this.Ge)(a));
      this.em = this.Yd;
      this.Yd -= 0.25;
      1 < this.time && ((this.alpha -= 0.1), 0.005 >= this.alpha && this.o());
    },
    Cn: function () {
      return wc;
    },
    Bn: function () {
      return 2;
    },
    R: function () {
      return 33;
    },
    j: De,
  });
  Ce.g = !0;
  Ce.D = t;
  Ce.prototype = u(t.prototype, {
    o: function () {
      t.prototype.o.call(this);
      ua.ob().detach(L(this, this.sc));
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      (!this.W().Uh && this.nd) || this.C().xC(ua.ob().position);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      4 == a.type && ((this.sl = !1), (this.W().Uh = !0));
    },
    sc: function (a) {
      if (2 != a.type && !this.W().paused && !this.W().Zj && 3 != a.id)
        switch (a.type) {
          case 0:
            if (this.H().Qo()) {
              this.sl = !0;
              this.W().Uh = !1;
              break;
            }
            this.W().Uh = !0;
            break;
          case 1:
            if (this.sl || this.H().Qo()) this.sl = this.W().Uh = !1;
            else {
              var b = a.x | 0;
              a = a.y | 0;
              (2 <= this.W().le && this.C().dB(0, b, a, M.Fx)) || this.H().notify(19);
            }
        }
    },
    R: function () {
      return 27;
    },
    j: Ce,
  });
  Be.g = !0;
  Be.D = t;
  Be.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      if (!ta.instance.Jf(5)) {
        for (
          var a = window.document.createElement("canvas"),
            b = (a.width = 256),
            c = (a.height = 1024),
            d = a.getContext("2d", null),
            e = ["#ffffff", "#0099a3", "#0078ff", "#01409e", "#570096"],
            f = d.createLinearGradient(0, 0, 0, c),
            g = 0,
            h = e.length;
          g < h;

        ) {
          var k = g++;
          f.addColorStop(k / (e.length - 1), e[k]);
        }
        d.fillStyle = f;
        d.fillRect(0, 0, b, c);
        d.fill();
        p.setData(5, a);
        ta.instance.createTexture(5);
      }
      this.group = new ma();
      ta.instance.Ad.appendChild(this.group.node);
      this.F = new W(this.group, 5);
      this.H().Ka(this);
      this.F.aa(0);
      this.state = 1;
    },
    o: function () {
      t.prototype.o.call(this);
      this.group.o();
      this.F = this.group = null;
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 2:
          this.resize();
          this.move();
          break;
        case 9:
          this.state = 2;
      }
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      switch (this.state) {
        case 0:
          this.move();
          break;
        case 1:
          a = this.F;
          a.aa(a.Ua + 0.05);
          1 == this.F.Ua && (this.state = 0);
          break;
        case 2:
          (a = this.F), a.aa(a.Ua - 0.05), 0 == this.F.Ua && (this.state = 0);
      }
    },
    move: function () {
      var a = -(this.C().la.origin.y - this.Lz) / this.maxDistance;
      this.F.fa(-this.F.Xc());
      var b = this.F;
      b.fa(b.ma + 2 * this.H().xe.y);
      a *= this.F.Xc();
      b = this.F;
      b.fa(b.ma + a);
    },
    resize: function () {
      this.Lz = this.W().rk.mi(1).lc;
      this.maxDistance = this.W().Tx();
      this.F.Pc((this.maxDistance / 1024) * this.C().viewport.zoom);
      this.F.te(this.H().xe.x / this.F.O.x);
    },
    R: function () {
      return 53;
    },
    j: Be,
  });
  Ae.g = !0;
  Ae.D = t;
  Ae.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.Sz(2);
      this.text.set(la.Xa(ka.level));
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 2:
          a = this.H().fb.Ef(1);
          this.text.Kb(a);
          break;
        case 9:
          this.H().detach(this);
          break;
        case 29:
          (a = la.Xa(this.H().model.level.za.level)), a != this.text.text && (this.text.set(a), this.text.pop());
      }
    },
    Sz: function (a) {
      null != this.text && this.text.o();
      this.text = new $c(a);
      this.H().zb(5).appendChild(this.text.group);
      this.Z(null, this.text);
    },
    R: function () {
      return 37;
    },
    j: Ae,
  });
  Dd.g = !0;
  Dd.D = t;
  Dd.prototype = u(t.prototype, {
    ub: function (a) {
      return this.button.ub(a);
    },
    o: function () {
      this.button.o();
      t.prototype.o.call(this);
    },
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 2:
          this.Kb();
          break;
        case 4:
          this.button.ue.dd.na(1);
          this.button.ue.ja.N(!0);
          this.button.ue.state = 0;
          this.Kb();
          this.button.df(!0);
          break;
        case 5:
          3 == this.W().state &&
            this.gi &&
            ((this.gi = !1), this.button.df(!0), this.button.N(!0), this.button.ue.dd.ti().alpha(1, 0.25));
          break;
        case 8:
          this.button.df(!1);
          this.button.N(!1);
          break;
        case 47:
          this.H().pause();
      }
    },
    Kb: function () {
      this.button.af(this.H().fb.Ef(3).ha);
    },
    R: function () {
      return 50;
    },
    j: Dd,
  });
  ze.g = !0;
  ze.D = t;
  ze.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.text = new $c(3);
      this.text.set("0%");
      this.H().zb(5).appendChild(this.text.group);
      this.Z(null, this.text);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 2:
          a = this.H().fb.Ef(2);
          this.text.Kb(a);
          break;
        case 9:
          this.H().detach(this);
          break;
        case 12:
          this.we = this.H().model.ki();
          break;
        case 22:
          1 == this.W().ki() && this.text.Tq();
          break;
        case 34:
          this.text.set("0%"), (this.sh = this.ratio = this.we = 0);
      }
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.ratio += 0.1 * (this.we - this.ratio);
      a = Math.round(100 * this.ratio);
      if (a != this.sh) {
        var b = !1;
        10 <= a && 10 > this.sh && (b = !0);
        this.sh = a;
        var c = (null == a ? "null" : "" + a) + "%";
        100 == a && (c = "100");
        this.text.set(c);
        b && this.text.align();
      }
    },
    R: function () {
      return 40;
    },
    j: ze,
  });
  ye.g = !0;
  ye.D = t;
  ye.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      22 == a.type && 1 == this.W().ki() && (this.state = 1);
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      a = this.C().viewport;
      if (null != this.icon) {
        var b = this.icon;
        b.fa(b.ma - 0.01 * this.C().viewport.zoom);
      }
      null != this.text && ((b = this.text), b.fa(b.ma - 0.01 * this.C().viewport.zoom));
      switch (this.state) {
        case 1:
          this.icon = new W(this.H().zb(6), ya, "perfect");
          b = a.ha;
          this.icon.ea(b.s + 0.5 * (b.A - b.s));
          this.icon.fa(a.Ac(this.C().ie() + 2));
          this.icon.na(0.1);
          this.icon.aa(0);
          this.icon.ab();
          this.icon.Qa();
          this.state++;
          this.time = 0;
          break;
        case 2:
          a = z.min(this.time / 0.5, 1);
          this.icon.na(ac(0.2)(a) * this.os());
          this.icon.aa(Ob(2)(a));
          1 == a && (this.state++, (this.time = 0));
          break;
        case 3:
          if (1 > this.time) break;
          this.state++;
          this.time = 0;
          this.KC();
          this.W().xg(this.W().hs());
          this.H().notify(38);
          break;
        case 4:
          a = z.min(this.time / 0.5, 1);
          this.icon.na((1 - Ob(2)(a)) * this.os());
          this.icon.aa(1 - a);
          this.text.na(ac(0.2)(a));
          1 == a && (this.icon.o(), this.state++);
          break;
        case 5:
          if (0.5 > this.time) break;
          this.state++;
          this.time = 0;
          break;
        case 6:
          (a = z.min(this.time / 1, 1)), this.text.aa(1 - a), 1 == a && (this.text.o(), (this.state = 0));
      }
    },
    KC: function () {
      this.text = new La(this.icon.ac(), wc);
      var a = this.C().viewport.zoom;
      this.text.hj(8 * a, 4 * a);
      this.text.wc(la.Xa(this.W().hs()));
      this.text.ij((2 * a) | 0);
      var b = this.text,
        c = this.icon.ra - a,
        d = this.icon.ma - a,
        e = this.icon.ra + a;
      a = this.icon.ma + a;
      var f = new ca();
      f.s = c;
      f.u = d;
      f.A = e;
      f.B = a;
      b.Vh(f, 0, 0);
      this.text.Qa();
      this.text.na(0.1);
    },
    os: function () {
      return ((2 * this.C().viewport.zoom) / this.icon.O.x) * 1.25;
    },
    R: function () {
      return 52;
    },
    j: ye,
  });
  xe.g = !0;
  xe.D = t;
  xe.prototype = u(t.prototype, {
    o: function () {
      for (var a = 0, b = this.Ob; a < b.length; ) {
        var c = b[a];
        ++a;
        c.o();
      }
      t.prototype.o.call(this);
    },
    ba: function () {
      t.prototype.ba.call(this);
      this.Ob = [];
      if (!ta.instance.Jf(6)) {
        var a = window.document.createElement("canvas"),
          b = a.getContext("2d", null);
        b.lineWidth = 1;
        b.strokeStyle = "rgba(255,255,255,0.5)";
        b.beginPath();
        b.moveTo(1, 0);
        b.lineTo(1, 128);
        b.closePath();
        b.stroke();
        p.setData(6, a);
        ta.instance.createTexture(6);
      }
      a = this.H().zb(0);
      this.Ob.push(new W(a, 6));
      this.Ob.push(new W(a, 6));
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      if (2 == a.type) {
        a = this.C().viewport.ha;
        var b = 10 < a.s,
          c = this.H().xe.y;
        this.Ob[0].ea(a.s);
        this.Ob[0].Pc(c / 100);
        this.Ob[0].N(b);
        this.Ob[1].Pc(c / 100);
        this.Ob[1].ea(a.A);
        this.Ob[1].N(b);
      }
    },
    R: function () {
      return 44;
    },
    j: xe,
  });
  we.g = !0;
  we.D = t;
  we.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      var a = this.H().zb(5);
      this.text = new $c(M.Ao);
      this.text.set(ke.repeat("0", M.Ao));
      this.Z(null, this.text);
      a.appendChild(this.text.group);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 2:
          a = this.H().fb.Ef(0);
          this.text.Kb(a);
          break;
        case 3:
          (2 != this.H().fb.mode && 1 != this.H().fb.mode) || this.H().Ub(56, Ba.Fc(["scale", this.text.group.Ja]));
          break;
        case 9:
          this.H().detach(this);
          break;
        case 12:
          a = la.Xa(this.H().model.Db);
          for (var b = M.Ao - a.length; 0 < b--; ) a = "0" + a;
          this.text.set(a);
          break;
        case 24:
        case 38:
        case 41:
          this.text.Tq();
      }
    },
    R: function () {
      return 39;
    },
    j: we,
  });
  ve.g = !0;
  ve.D = t;
  ve.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 5:
          1 == this.W().state && this.W().Ul && this.play(C.Ow, !0);
          break;
        case 6:
          this.play(C.mw);
          break;
        case 7:
          var b = a.get("burstIndex");
          if (-1 == b) break;
          a = a.get("bubble");
          if (100 == a.code) {
            this.play(C.Pw, !0);
            break;
          }
          1e3 <= this.W().ji(b) && 0 == this.Gm ? (this.play(C.nw), this.Gm++) : this.play(C.ow);
          break;
        case 8:
          this.play(C.Dw);
          break;
        case 10:
          this.play(C.tw, !0);
          break;
        case 13:
          this.play(C.sw, !0);
          break;
        case 14:
          this.W().an && this.play(C.xw);
          break;
        case 16:
          this.play(C.lw);
          break;
        case 20:
          this.play(C.uw, !0);
          this.Gm = 0;
          break;
        case 22:
          1 == this.W().ki() ? this.play(C.Cw, !0) : this.play(C.Bw, !0);
          break;
        case 23:
          8 <= a.get("result").We.l && this.play(C.Fw, !0);
          break;
        case 24:
          b = a.get("combo");
          b -= 2;
          3 < b && (b = 3);
          this.play([1041, 1042, 1043, 1044][b], !0);
          break;
        case 26:
          a = a.get("bubble");
          if (200 == a.code)
            (b = a.Ta),
              b > this.Ee &&
                ((this.Ee = b),
                8 < this.Lj
                  ? this.play(C.wq)
                  : this.play([1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011][this.Lj]),
                this.Lj++);
          else
            switch (a.code) {
              case 1:
                this.play(C.Gw);
                break;
              case 2:
                this.play(C.Hw);
                break;
              case 3:
                this.play(C.Iw);
                break;
              case 4:
                this.play(C.Jw);
                break;
              case 5:
                this.play(C.Kw);
                break;
              case 6:
                this.play(C.Lw);
            }
          break;
        case 27:
          this.play(C.Aw);
          break;
        case 28:
          this.play(C.wq, !0);
          break;
        case 29:
          this.play(C.yw);
          this.play(C.Rw);
          break;
        case 31:
          0.25 < Math.random() ? this.play(C.Mw) : this.play(C.Nw);
          break;
        case 32:
          this.play(C.pw);
          break;
        case 33:
          this.play(C.zw);
          break;
        case 34:
          this.Lj = this.Ee = 0;
          break;
        case 38:
          this.play(C.Ew);
          break;
        case 39:
          this.play(C.Qw);
      }
    },
    play: function (a, b) {
      null == b && (b = !1);
      return C.play(a, !1, b);
    },
    R: function () {
      return 28;
    },
    j: ve,
  });
  ue.g = !0;
  ue.D = t;
  ue.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.wp && ((this.Ji *= 0.97), 0.5 > this.Ji && (this.wp = !1));
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 7:
          100 == a.get("bubble").code && this.Kq();
          break;
        case 27:
          this.Kq();
      }
    },
    Kq: function () {
      this.wp = !0;
      this.Ji = 4 + this.W().level.za.level / 10;
      this.time = 0;
    },
    gE: function () {},
    R: function () {
      return 45;
    },
    j: ue,
  });
  te.g = !0;
  te.D = t;
  te.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.F = new W(null, ya, "shooting_arm");
      this.H().zb(2).appendChild(this.F);
      this.F.ab();
      this.F.Qa();
      this.F.Hh(this.F.O.y);
      this.F.Nl(this.F.O.y);
      this.H().Ka(this);
    },
    o: function () {
      t.prototype.o.call(this);
      this.F.o();
    },
    Ca: function (a) {
      t.prototype.Ca.call(this, a);
      switch (this.H().model.state) {
        case 0:
        case 1:
        case 2:
        case 6:
        case 8:
          this.F.N(!1);
          break;
        default:
          this.F.N(!0);
      }
      var b = this.C().la.origin,
        c = b.x,
        d = b.y;
      b = new y();
      b.x = c;
      b.y = d;
      a = b;
      this.C().Lv(a);
      var e = ua.ob().position;
      c = e.x - a.x;
      d = e.y - a.y;
      b = new y();
      b.x = c;
      b.y = d;
      c = b;
      this.F.Ih(this.C().Sy());
      b = this.C().la.origin;
      d = b.x;
      var f = b.y;
      b = new y();
      b.x = d;
      b.y = f;
      this.C().Lv(b);
      this.F.ea(b.x);
      this.F.fa(b.y);
      b = this.C().viewport.zoom;
      d = (2 * b) / this.F.O.x;
      1 < d && (d = 1);
      c = Ud.xz(c);
      this.nd && (c /= 2);
      c /= this.F.O.y;
      c > d && (c = d);
      0.25 > c && (c = 0.25);
      this.F.na(c);
      c = 1;
      0 == this.H().fb.mode && ((a = e.y - a.y), a > b && ((c = 1 - (a - b) / b), 0 > c && (c = 0)));
      this.F.aa(c);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      9 == a.type && this.o();
    },
    R: function () {
      return 30;
    },
    j: te,
  });
  Cd.g = !0;
  Cd.D = t;
  Cd.prototype = u(t.prototype, {
    ub: function (a) {
      return this.button.ub(a);
    },
    o: function () {
      this.button.o();
      t.prototype.o.call(this);
    },
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 2:
          this.button.af(this.H().fb.Ef(3).ha);
          break;
        case 5:
          3 == this.W().state && this.gi && ((this.gi = !1), this.button.df(!0), this.button.N(!0));
          break;
        case 9:
          this.button.df(!1);
          this.button.N(!1);
          break;
        case 46:
          a.flags |= 3;
          break;
        case 47:
          (da.zc = this.button.co()), ra.instance.yd(), T.cq(da.zc ? 1 : 0), da.zc && C.play(C.mm, !1, !0);
      }
    },
    R: function () {
      return 51;
    },
    j: Cd,
  });
  se.g = !0;
  se.D = t;
  se.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.Rc = new ma(null, this.H().zb(1));
      this.a = new W(this.Rc, ya, "tape1");
      this.b = new W(this.Rc, ya, "tape1");
      var a = this.a.O;
      this.b.ea(a.x);
      a = this.b.O;
      var b = a.x,
        c = a.y;
      a = new y();
      a.x = b;
      a.y = c;
      this.Rl = a;
      this.Rc.aa(0);
      this.Rc.N(!1);
      this.H().Ka(this);
    },
    o: function () {
      t.prototype.o.call(this);
      this.Rc.o();
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 9:
          this.o();
          break;
        case 14:
          this.visible = !0;
          break;
        case 15:
          this.visible = !1;
          break;
        case 17:
          this.a.xc("tape2");
          this.b.xc("tape2");
          break;
        case 18:
          this.a.xc("tape1");
          this.b.xc("tape1");
          break;
        case 22:
          (this.visible = !1), this.a.xc("tape1"), this.b.xc("tape1");
      }
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.visible
        ? ((this.alpha += 0.05),
          1 < this.alpha && (this.alpha = 1),
          (this.offset -= 3),
          -this.offset > this.Rl.x &&
            ((a = this.a), a.ea(a.ra - this.offset), (a = this.a), (this.a = this.b), (this.b = a), (this.offset = 0)))
        : 0 != this.alpha && ((this.alpha *= 0.9), z.cr(this.alpha) && (this.alpha = 0));
    },
    Ca: function (a) {
      t.prototype.Ca.call(this, a);
      if (this.visible) {
        this.a.ea(this.offset);
        this.b.ea(this.Rl.x + this.offset);
        this.Rc.aa(this.alpha);
        this.Rc.N(!0);
        var b = this.C().viewport.ha;
        a = (b.A - b.s) / this.Rl.x;
        this.Rc.na(a);
        a *= this.Rl.y;
        this.Rc.ea(b.s);
        var c = this.C().la.origin,
          d = c.y - 1;
        d = this.C().viewport.Ac(d);
        d -= a;
        this.Rc.fa(d);
        var e = this.Rc,
          f = b.s;
        b = b.A;
        c = new ca();
        c.s = f;
        c.u = d;
        c.A = b;
        c.B = d + a;
        e.AC(c);
      } else this.Rc.aa(this.alpha), 0 == this.alpha && this.Rc.N(!1);
    },
    R: function () {
      return 36;
    },
    j: se,
  });
  $c.g = !0;
  $c.D = t;
  $c.prototype = u(t.prototype, {
    Kb: function (a) {
      if (null != this.text) {
        this.info = a;
        var b = a.ha;
        this.group.na(1);
        a = (b.A - b.s) / this.rs();
        b = (b.B - b.u) / this.Lm.y;
        a < b ? this.group.na(a) : this.group.na(b);
        this.align();
      }
    },
    set: function (a) {
      this.text = a;
      this.dh = a.length;
      for (var b = 0; b < this.dh; ) {
        var c = this.Zb[b],
          d = a.charAt(b);
        c[0].xc(d);
        c[0].aa(1);
        c[0].N(!0);
        c[1].xc(d);
        c[1].aa(1);
        c[1].N(!0);
        ++b;
      }
      for (; b < this.length; ) (c = this.Zb[b]), c[0].N(!1), c[1].N(!1), ++b;
    },
    Tq: function () {
      1 != this.animation && ((this.Dj = 0), (this.animation = 1));
    },
    pop: function () {
      if (2 != this.animation) {
        this.Dj = 0;
        this.animation = 2;
        for (var a = (this.time = 0), b = this.dh; a < b; ) {
          var c = a++;
          this.Zb[c][0].na(0.5);
          this.Zb[c][1].na(0.5);
        }
      }
    },
    o: function () {
      t.prototype.o.call(this);
      this.group.o();
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      a = 0;
      for (var b = this.dh; a < b; ) {
        var c = a++;
        c = this.Zb[c][1];
        c.aa(0.97 * c.Ua);
        0.01 > c.Ua && c.N(!1);
      }
      switch (this.animation) {
        case 1:
          0.05 < this.time &&
            ((this.time = 0),
            (a = this.Zb[this.Dj++]),
            (b = a[0]),
            b.fa(b.ma - 20),
            a[0].ti().y(0, 1, this.Kr),
            (b = a[1]),
            b.fa(b.ma - 20),
            a[1].ti().y(0, 1, this.Kr),
            this.Dj == this.dh && (this.animation = 0));
          break;
        case 2:
          var d = z.min(this.time / 0.5, 1),
            e = ac(0.5)(d) / 2;
          a = 0;
          for (b = this.dh; a < b; ) (c = a++), this.Zb[c][0].na(0.5 + e), this.Zb[c][1].na(0.5 + e);
          1 == d && (this.animation = 0);
      }
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      56 == a.type && null != this.text && (this.group.na(a.get("scale")), this.align());
    },
    align: function () {
      var a = this.rs(),
        b = this.Lm.x,
        c = this.info.ha,
        d = this.info.align,
        e = this.group.Ja;
      0 > d.x
        ? this.group.ea(c.s)
        : 0 == d.x
        ? this.group.ea(c.s + 0.5 * (c.A - c.s) - (a * e) / 2)
        : 0 < d.x && this.group.ea(c.A - a * e);
      0 > d.y
        ? this.group.fa(c.u)
        : 0 == d.y
        ? this.group.fa(c.u + 0.5 * (c.B - c.u) - (b * e) / 2)
        : 0 < d.y && this.group.fa(c.B - b * e);
    },
    rs: function () {
      for (var a = 0, b = 0, c = this.text.length; b < c; ) {
        var d = b++;
        a += this.Zb[d][0].O.x;
      }
      return a;
    },
    R: function () {
      return 38;
    },
    j: $c,
  });
  re.g = !0;
  re.D = t;
  re.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.Ag = new W(this.H().zb(5));
      this.H().Ka(this);
      this.ratio = 0;
      var a = new Ub();
      a.r = 1;
      a.Fa = 1;
      a.b = 1;
      a.a = 1;
      this.color = a;
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 2:
          this.ha = this.H().fb.Ef(4).ha;
          break;
        case 34:
          this.we = 1;
          this.state = 0;
          this.Ag.N(!0);
          break;
        case 39:
          this.state = 1;
          break;
        case 40:
          if (2 == this.state) break;
          a = a.get("t");
          this.we = 1 - this.W().kd / this.W().Op;
          this.we *= 1 - a;
          break;
        case 41:
          this.state = 2;
      }
    },
    Ca: function (a) {
      t.prototype.Ca.call(this, a);
      0 == this.state && (this.we = 1 - this.W().kd / this.W().Op);
      this.ratio += 0.3 * (this.we - this.ratio);
      var b = this.ha;
      a = Math.ceil((b.A - b.s) * this.ratio);
      1 >= a
        ? this.Ag.N(!1)
        : ((this.color.r = 1),
          (this.color.Fa = 1),
          (this.color.b = 1),
          (this.color.a = 0.75),
          0 < this.state &&
            ((this.color.Fa = 0.9294117647058824), (this.color.b = 0.2196078431372549), (this.color.a = 1)),
          0.1 > this.ratio && (this.color.a = z.map(this.ratio, 0, 0.1, 0, 1)),
          this.Ag.N(!0),
          (b = this.ha),
          (b = (2 * (b.B - b.u)) | 0),
          this.Ag.ea(this.ha.s),
          this.Ag.fa(this.ha.u - (b >> 1)),
          this.Ag.eC(this.color, a, b));
    },
    R: function () {
      return 49;
    },
    j: re,
  });
  qe.g = !0;
  qe.D = t;
  qe.prototype = u(t.prototype, {
    ba: function () {
      t.prototype.ba.call(this);
      this.H().Ka(this);
    },
    Y: function (a) {
      t.prototype.Y.call(this, a);
      switch (a.type) {
        case 8:
        case 22:
          this.As();
      }
    },
    As: function () {
      for (var a = this.V; null != a; ) {
        var b = a;
        b.Al || b.Kd();
        a = a.L;
      }
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      if (!this.W().Tl && !this.W().Zj)
        if (0.25 > this.W().ci) this.As(), (this.time = 0);
        else if (!(1 > this.time)) {
          var b = this.C().xn();
          if (null != b && !(1 > this.C().la.origin.y - 1 - b.G.y)) {
            this.Px(b);
            for (var c = this.V; null != c; ) (a = c), (b.Ta != a.y || a.$z()) && a.Kd(), (c = c.L);
            for (var d = !1, e = 0, f = this.Qf.l; e < f; ) {
              var g = this.Qf.i[e++],
                h = this.Qf.i[e++],
                k = !1;
              for (c = this.V; null != c; )
                (a = c), !a.Al && a.bB(g, h) && ((a.cm = g), (a.dm = h), (k = !0)), (c = c.L);
              k || ((a = new pe(g, h, b.Ta)), (a.y = b.Ta), this.Z(null, a), (d = !0));
            }
            d && this.H().notify(16);
          }
        }
    },
    Px: function (a) {
      var b = (this.Qf.l = 0);
      a = a.Ta;
      for (var c = this.C().cols, d = !0; b < c; )
        this.C().ia.ge(b, a) ? d && (this.Qf.Oa(b), (d = !1)) : d || (this.Qf.Oa(b - 1), (d = !0)), ++b;
      d || this.Qf.Oa(c - 1);
    },
    R: function () {
      return 42;
    },
    j: qe,
  });
  pe.g = !0;
  pe.D = t;
  pe.prototype = u(t.prototype, {
    $z: function () {
      for (var a = this.cm; a <= this.dm; ) {
        if (this.C().ia.ge(a, this.y)) return !1;
        ++a;
      }
      return !0;
    },
    bB: function (a, b) {
      return a <= this.dm ? this.cm <= b : !1;
    },
    Kd: function () {
      this.Al || ((this.time = 0), (this.state = 2), (this.alpha = 1), (this.Al = !0));
    },
    o: function () {
      t.prototype.o.call(this);
      this.F.o();
    },
    M: function (a) {
      t.prototype.M.call(this, a);
      this.Up(this.ul);
      this.pe.x += 0.7 * (this.ul.x - this.pe.x);
      this.pe.y += 0.7 * (this.ul.y - this.pe.y);
      this.scale = (1.5 * this.C().viewport.zoom) / this.F.O.x;
      0 == this.state
        ? ((a = z.min(1, this.time / 0.5)), (this.scale *= ac(0.2)(a)), (this.alpha = a), 1 == a && (this.state = 1))
        : 2 == this.state && ((a = z.min(1, this.time / 0.25)), (this.alpha = 1 - a), 1 == a && this.o());
    },
    Ca: function (a) {
      t.prototype.Ca.call(this, a);
      this.F.ea(this.pe.x);
      this.F.fa(this.pe.y);
      this.F.na(this.scale + this.Jg);
      this.F.aa(this.alpha);
      this.F.N(!0);
    },
    Up: function (a) {
      this.C().be(this.cm, this.y, this.yb);
      var b = this.yb.x;
      this.C().be(this.dm, this.y, this.yb);
      var c = this.C().viewport;
      a.x = c.Mp(b + (this.yb.x - b) / 2);
      a.y = c.Ac(this.yb.y + 1);
    },
    R: function () {
      return 41;
    },
    j: pe,
  });
  za.g = !0;
  za.D = x;
  za.prototype = u(x.prototype, {
    eb: function () {
      for (var a = this.parent; null != a; ) {
        if (a instanceof ta) return a;
        a = a.parent;
      }
      return null;
    },
    Wf: function (a) {
      a = Ic.Yj(a);
      a.caller = this;
      a.xi = this.Xe;
      a.bo = !0;
      var b = this.eb().find(za, null, !1);
      null == b ? this.eb().Z(null, a) : tb.Vz(b, a);
    },
    ex: function (a) {
      a = Ic.Yj(a);
      a.caller = this;
      a.xi = this.Xe;
      a.Vs = !0;
      a.caller = this;
      this.Z(null, a);
    },
    o: function () {
      ua.ob().detach(L(this, this.sc));
      ua.ri().detach(L(this, this.Jo));
      this.bb(7);
      x.prototype.o.call(this);
      null != this.node && this.node.o();
      this.node = null;
    },
    M: function (a) {
      this.f |= 3;
      0 < this.kg && ((this.kg -= a), 0 >= this.kg && ((this.kg = 0), this.start(), this.El()));
      this.Zl();
      x.prototype.M.call(this, a);
    },
    ba: function () {
      if (this.bo) {
        var a = this.eb().find(za, null, !1);
        if (this == a) (this.caller = null), (this.xd = 0);
        else {
          for (a = a.pi(); 0 < a.length; ) {
            var b = a.pop();
            3 == b.Bh && b.pause();
          }
          this.xd = 2;
        }
      } else this.Vs && ((this.caller = this.parent), this.caller.pause(), (this.xd = 0), (this.Vs = !1));
      a = this.hz();
      0 < a.length
        ? ((b = this.nr()), (b.Iz = this), (b.Hz = a), this.parent.Z(null, b), (this.zi = !0))
        : ((this.bo = this.zi = !1), this.create(), 0 == this.kg && (this.start(), this.El()));
    },
    finish: function () {
      for (var a = this.pi(), b = !1; 0 < a.length; ) {
        var c = a.pop();
        3 == c.Bh && c.pause();
        c.Xg() && (b = !0);
      }
      a = this.parent;
      null != a && ((a.caller = this), (a.xi = this.Xe), b && a instanceof za && (a.RB(), a.start()));
      this.xd = 1;
      this.El();
    },
    create: function () {
      this.bb(1);
      this.node = new ma("node{" + this.name + "}");
      this.Ad = new ma("bg", this.node);
      this.Ad.N(!1);
      this.canvas = new ma("canvas", this.node);
      this.canvas.N(!1);
      this.Je = new ma("fg", this.node);
      this.Je.N(!1);
      this.rd();
    },
    start: function () {
      this.bb(2);
      null == this.node.node.parent &&
        (this.parent instanceof ta
          ? this.eb().canvas.appendChild(this.node.node)
          : this.parent.node.appendChild(this.node));
      this.canvas.N(this.Ad.N(this.Je.N(!0)));
      this.ne();
    },
    RB: function () {
      this.bb(4);
    },
    resume: function () {
      this.bb(3);
      ua.ob().Ka(L(this, this.sc));
      ua.ri().Ka(L(this, this.Jo));
      this.Jc();
    },
    pause: function () {
      this.bb(5);
      ua.ob().detach(L(this, this.sc));
      ua.ri().detach(L(this, this.Jo));
      this.Ui();
    },
    stop: function () {
      this.bb(6);
      var a = this.find(mb, null, !1);
      null != a && a.Xg()
        ? this.canvas.N(this.Ad.N(this.Je.N(!1)))
        : ((a = this.pi().pop()),
          a == this && (a = null),
          null != a && a.Xg() ? this.canvas.N(this.Ad.N(this.Je.N(!1))) : this.node.remove());
    },
    rd: function () {},
    ne: function () {},
    eE: function () {},
    Jc: function () {},
    Ui: function () {},
    fE: function () {},
    sc: function () {},
    Jo: function () {},
    ml: function () {},
    Mb: function () {},
    kh: function () {},
    Do: function () {},
    Hf: function () {
      return 0;
    },
    Xg: function () {
      return !0;
    },
    nr: function () {
      return new mb();
    },
    yk: function () {
      return [];
    },
    Zl: function () {
      var a = this;
      switch (this.Qh) {
        case 1:
          var b = this.eb().find(null, function (e) {
            return e instanceof za ? e != a : !1;
          });
          2 != this.xd && (b = this.parent);
          this.ml(0, this.xd, b);
          this.time = 0;
          this.Qh = 2;
          this.Jv();
          break;
        case 2:
          if (0 == this.time) break;
          b = null;
          switch (this.xd) {
            case 0:
            case 1:
              b = this.parent;
              break;
            case 2:
              b = this.eb().find(za, null, !1);
          }
          var c = Math.min(this.time / this.Hf(), 1);
          0.5 < c && 0.5 > this.au && this.ml(0.5, this.xd, b);
          this.ml(c, this.xd, b);
          this.au = c;
          1 == c && ((this.Qh = 3), this.Jv());
          break;
        case 3:
          switch (((this.Qh = 0), this.xd)) {
            case 0:
              if (this.Xg())
                for (c = this.parent; null != c && !(c instanceof ta); ) 5 == c.Bh && c.stop(), (c = c.parent);
              this.resume();
              break;
            case 1:
              c = this.parent;
              b = this.pi();
              for (var d = b.length; 0 < d; ) 6 != b[--d].Bh && b[d].stop();
              for (d = b.length; 0 < d; ) b[--d].o();
              c instanceof za && c.resume();
              break;
            case 2:
              for (b = this.eb().find(za, null, !1).pi(); 0 < b.length; ) (c = b.pop()), 5 == c.Bh && c.stop(), c.o();
              this.resume();
          }
      }
    },
    El: function () {
      this.Qh = 0 < this.Hf() && Ug ? 1 : 3;
      this.Zl();
    },
    bb: function (a) {
      this.Bh = a;
    },
    hz: function () {
      for (var a = [], b = 0, c = this.yk(); b < c.length; ) {
        var d = c[b];
        ++b;
        (p.Lk(d) && null == p.Df()) || p.Hn(d) || a.push(d);
      }
      return a;
    },
    SD: function () {
      return this.parent;
    },
    pi: function () {
      for (var a = [this], b = this.V; null != b; ) b instanceof za ? (a.push(b), (b = b.V)) : (b = b.L);
      return a;
    },
    toString: function () {
      return "{Scene " + this.name + "}";
    },
    R: function () {
      return 4;
    },
    j: za,
  });
  S.g = !0;
  S.D = za;
  S.prototype = u(za.prototype, {
    Y: function (a) {
      za.prototype.Y.call(this, a);
      switch (a.type) {
        case 46:
          this.fe(!1);
          a.flags |= 3;
          break;
        case 47:
          this.ih(a.sender), (a.flags |= 3);
      }
    },
    Mb: function () {
      this.Kb();
      za.prototype.Mb.call(this);
    },
    Hf: function () {
      return this.caller instanceof zd ? 0 : 1;
    },
    ml: function (a, b, c) {
      switch (b) {
        case 0:
          this.node.aa(a);
          break;
        case 1:
          this.node.aa(1 - a);
          break;
        case 2:
          0 == a
            ? ((this.transition = new yf(this, c)), this.transition.update(a))
            : (this.transition.update(a), 1 == a && (this.transition.o(), (this.transition = null)));
      }
    },
    rd: function () {
      za.prototype.rd.call(this);
      null == S.fg && (S.fg = this.eb().Z(Wc));
      this.gx();
      this.hC();
      this.Kb();
    },
    Ui: function () {
      za.prototype.Ui.call(this);
      this.fe(!1);
    },
    Jc: function () {
      za.prototype.Jc.call(this);
      this.fe(!0);
    },
    yk: function () {
      return p.ks();
    },
    nr: function () {
      return new me();
    },
    yu: function () {
      var a = this;
      p.fl(0, function () {
        a.eb().Jf(0) || (a.eb().createTexture(0), a.eb().gp(0, ya));
      });
      new ab().load([0]);
    },
    it: function () {
      new ab().load(p.ks());
    },
    fe: function (a) {
      for (var b = this.iterator(); b.ka(); ) {
        var c = b.next();
        c instanceof ob && c.df(a);
      }
    },
    ih: function () {},
    gx: function () {
      if (!this.eb().Jf(ya))
        for (var a = 0, b = this.eb().createTexture(ya).pz(); a < b.length; ) {
          var c = b[a];
          ++a;
          var d = c.id;
          switch (c.name) {
            case "digits_a":
              ug = d;
              break;
            case "digits_b":
              wc = d;
              break;
            case "text_1":
              Gg = d;
              break;
            case "text_2":
              Hg = d;
          }
        }
    },
    hC: function () {
      var a = this;
      if (null != this.Rk) {
        Ha.setData(jc.sk("layout"));
        Ha.mt("RobotoSlab-Black@#FFFFFF", Gg);
        Ha.mt("RobotoSlab-Black@#FFED38", Hg);
        this.Pa = new Ha(this.Rk);
        this.Pa.Wo();
        this.canvas.appendChild(this.Pa.root);
        var b = new fa("(\\w+)_button$", "");
        this.Pa.root.Vr(null, function (c) {
          null != c.node.name && b.match(c.node.name) && a.wf(c.node.name, c);
        });
      }
    },
    hd: function () {
      var a = this.eb().si(),
        b = a.x,
        c = a.y,
        d = b - 0,
        e = c - 0,
        f = M.jr / M.vf,
        g = d / f,
        h = e / 1,
        k = new ca();
      a = k;
      a.s = 0;
      a.u = 0;
      if (g <= h)
        return (
          (a.A = a.s + d),
          (a.B = a.u + g),
          (k = (e - (a.B - a.u)) / 2),
          (d = a.B - a.u),
          (a.u = k),
          (a.B = k + d),
          (d = a.s),
          (e = a.u),
          (f = a.A),
          (g = a.B),
          (k = new ca()),
          (k.s = d),
          (k.u = e),
          (k.A = f),
          (k.B = g),
          (b = k),
          (b.u = 0),
          (b.B = a.u),
          (d = a.s),
          (e = a.u),
          (f = a.A),
          (g = a.B),
          (k = new ca()),
          (k.s = d),
          (k.u = e),
          (k.A = f),
          (k.B = g),
          (k.u = a.B),
          (k.B = c),
          [b, a, k]
        );
      a.A = a.s + f * h;
      a.B = a.u + e;
      k = (d - (a.A - a.s)) / 2;
      d = a.A - a.s;
      a.s = k;
      a.A = k + d;
      d = a.s;
      e = a.u;
      f = a.A;
      g = a.B;
      k = new ca();
      k.s = d;
      k.u = e;
      k.A = f;
      k.B = g;
      c = k;
      c.s = 0;
      d = c.A = a.s;
      e = a.u;
      f = a.A;
      g = a.B;
      k = new ca();
      k.s = d;
      k.u = e;
      k.A = f;
      k.B = g;
      k.s = a.A;
      k.A = b;
      return [c, a, k];
    },
    Kb: function () {
      this.ko = this.hd();
      var a = this.ko[1];
      null != this.Pa && (this.Pa.root.ea(a.s), this.Pa.root.fa(a.u), this.Pa.root.na((a.B - a.u) / M.vf));
    },
    wf: function (a, b) {
      b = new Qa(b);
      a = new ob(b, a);
      this.Z(null, a);
      return a;
    },
    Rg: function (a) {
      return sg.Rg(a, " ");
    },
    R: function () {
      return 8;
    },
    j: S,
  });
  Zc.g = !0;
  Zc.D = S;
  Zc.prototype = u(S.prototype, {
    rd: function () {
      S.prototype.rd.call(this);
      var a = this.caller.Xe;
      var b = Ba.cn(a, "score");
      a = Ba.cn(a, "level");
      this.Ni = 0 < b && (0 == da.Ld || b > da.Ld);
      a > da.level && (da.level = a);
      this.Ni && (da.Ld = b);
      ra.instance.yd();
      this.Pa.wc("level", a);
      a = this.Pa.Ff("trophy1");
      var c = this.Pa.Ff("trophy2");
      a.N(this.Ni);
      c.N(this.Ni);
      this.Ni
        ? (this.Pa.Gf("highscore").N(!1),
          this.Pa.Gf("score1").N(!1),
          this.Pa.wc("score2", this.Rg(b)),
          this.Pa.Ff("trophy3").N(!1),
          this.Z(null, new Jb(a)),
          this.Z(null, new Jb(c)),
          this.Z(ne))
        : (this.Pa.wc("score1", this.Rg(b)),
          this.Pa.Gf("score2").N(!1),
          this.Pa.wc("highscore", this.Rg(da.Ld)),
          this.Pa.Gf("level").N(!1),
          0 == da.Ld && (this.Pa.Ff("highscore").N(!1), this.Pa.Ff("trophy3").N(!1)));
    },
    ne: function () {
      S.prototype.ne.call(this);
      null != S.fg && S.fg.show();
    },
    M: function (a) {
      S.prototype.M.call(this, a);
      -1 != this.wait && ((this.wait -= a), 0 < this.wait || ((this.wait = -1), this.Ni && C.play(C.ww)));
    },
    wf: function (a, b) {
      b = S.prototype.wf.call(this, a, b);
      "next_button" == a && (b.lg = 1);
      return b;
    },
    ih: function (a) {
      "next_button" == a.name && ((this.wait = -1), A.yp() ? this.Wf(Yc) : this.Wf(Xc));
    },
    R: function () {
      return 58;
    },
    j: Zc,
  });
  oe.g = !0;
  oe.D = x;
  oe.prototype = u(x.prototype, {
    ba: function () {
      x.prototype.ba.call(this);
      var a = this.find(Zc).Ad;
      a.appendChild(this.xb);
      a.appendChild(this.Eb);
    },
    o: function () {
      x.prototype.o.call(this);
      this.xb.o();
      this.Eb.o();
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      this.Na.x = this.x + this.parent.x + Math.sin(10 * this.time) * this.scale * 2;
      (this.Na.y += 10 * -this.scale) < -this.Eb.Xc() && this.o();
    },
    Ca: function (a) {
      x.prototype.Ca.call(this, a);
      this.xb.ea(this.Na.x);
      this.xb.fa(this.Na.y);
      this.xb.N(!0);
      this.Eb.ea(this.Na.x);
      this.Eb.fa(this.Na.y);
      this.Eb.N(!0);
    },
    R: function () {
      return 57;
    },
    j: oe,
  });
  ne.g = !0;
  ne.D = x;
  ne.prototype = u(x.prototype, {
    M: function (a) {
      this.B = ta.instance.window.height;
      this.x = 20 * Math.sin(this.eq);
      this.eq += a;
      x.prototype.M.call(this, a);
      a = tb.Xx(this);
      0.25 < this.time &&
        30 > a &&
        ((this.time = 0), this.Z(null, new oe(this.color)), this.color++, 8 == this.color && (this.color = 1));
    },
    R: function () {
      return 56;
    },
    j: ne,
  });
  Yc.g = !0;
  Yc.D = S;
  Yc.prototype = u(S.prototype, {
    Mb: function () {
      S.prototype.Mb.call(this);
      null != this.I && this.I.Mb();
    },
    ih: function (a) {
      "pause" == a.name && (this.I.pause(), this.ex(zd));
    },
    ne: function () {
      S.prototype.ne.call(this);
      null != S.fg && S.fg.Kd();
    },
    Jc: function () {
      S.prototype.Jc.call(this);
      Ba.cn(this.xi, "restart") && (this.I.o(), (this.I = null));
      null == this.I && this.Zx();
      null != this.I && this.I.resume();
      this.yu();
      this.it();
    },
    Y: function (a) {
      S.prototype.Y.call(this, a);
      9 == a.type && this.WA();
    },
    WA: function () {
      var a = this,
        b = this.I.model.Db,
        c = this.I.model.level.za.level;
      Ba.dn(this.Xe, "score", b);
      Ba.dn(this.Xe, "level", c);
      ra.instance.yd();
      if (A.Wg()) {
        b > da.Ld && T.pg("new_highscore", null, { new_highscore: b }),
          T.rv("fail", b, function () {
            a.Wf(Zc);
          });
      } else {
        Aa.he().vd(0);
        var d = function () {
          Aa.he().vd(1);
          a.Wf(Zc);
        };
        c = T.ft("dead", "level" + c);
        b = T.qv(b);
        var e = A.Zu();
        Promise.all([c, b, e]).then(d, d);
      }
    },
    Zx: function () {
      this.I = new yb(this);
      this.canvas.node.appendChild(this.I.node);
      this.Z(null, this.I);
      this.I.M(0.016666666666666666);
      this.I.Ca(1);
    },
    R: function () {
      return 16;
    },
    j: Yc,
  });
  Xc.g = !0;
  Xc.D = S;
  Xc.prototype = u(S.prototype, {
    Hf: function () {
      return this.caller instanceof Ad ? 0 : S.prototype.Hf.call(this);
    },
    rd: function () {
      var a = this;
      S.prototype.rd.call(this);
      var b = 0 < da.Ld,
        c = this.Pa.Ff("trophy1");
      c.N(b);
      var d = this.Pa.Ff("trophy2");
      d.N(b);
      this.Pa.Gf("highscore_value").N(b);
      b
        ? (this.Z(null, new Jb(c)),
          this.Z(null, new Jb(d)),
          this.Pa.wc("highscore_value", this.Rg(da.Ld)),
          this.Pa.wc("level_value", da.level))
        : (this.Pa.Gf("highscore_value").N(!1), this.Pa.Gf("level_value").N(!1));
      this.eb().Jf(3)
        ? this.Ps()
        : A.qA(function (e) {
            a.eb().K.createTexture(3, e);
            a.Ps();
          });
      A.In() &&
        this.find(ob, function (e) {
          return "sound_button" == e.name;
        }).N(!1);
      this.yu();
      this.it();
    },
    ne: function () {
      S.prototype.ne.call(this);
      null != S.fg && S.fg.show();
    },
    Jc: function () {
      var a = this;
      S.prototype.Jc.call(this);
      A.Ou(function () {
        a.fe(!0);
      });
    },
    ih: function (a) {
      switch (a.name) {
        case "play_button":
          this.fe(!1);
          this.Wf(Yc);
          break;
        case "sound_button":
          (da.zc = a.co()), ra.instance.yd(), this.Pp();
      }
    },
    wf: function (a, b) {
      b = S.prototype.wf.call(this, a, b);
      "play_button" == a && (b.lg = 1);
      "sound_button" == a && b.sp(da.zc);
      return b;
    },
    Pp: function () {
      var a = L(this, this.fe);
      Dg(function () {
        a(!0);
      }, 0.25);
      T.cq(da.zc ? 1 : 0);
    },
    sc: function (a) {
      S.prototype.sc.call(this, a);
      if (1 == a.type && null != this.ah) {
        var b = this.ah.Mg(0),
          c = a.x;
        a = a.y;
        var d = new y();
        d.x = c;
        d.y = a;
        b.ub(d) && A.NA();
      }
    },
    Ps: function () {
      this.ah = this.Pa.root.tk("more_games");
      this.ah.appendChild(new W(null, 3));
      this.Fq();
    },
    Fq: function () {
      if (null != this.ah && (this.ah.Mg(0).fa(0), 0 < this.ko[2].u)) {
        var a = this.ko[2];
        this.ah.Mg(0).fa((a.B - a.u) / this.Pa.root.Ja / 2);
      }
    },
    Kb: function () {
      S.prototype.Kb.call(this);
      this.Fq();
    },
    R: function () {
      return 60;
    },
    j: Xc,
  });
  nb.g = !0;
  nb.D = x;
  nb.prototype = u(x.prototype, {
    Kd: function () {
      this.stop = 1;
    },
    o: function () {
      x.prototype.o.call(this);
      this.group.o();
    },
    M: function (a) {
      var b;
      x.prototype.M.call(this, a);
      if (null != this.qe) {
        this.yl += a;
        0.1 < this.yl && ((this.yl = 0), this.progress < ((this.sh / 10) | 0) && this.progress++);
        var c = 0;
        for (b = this.progress; c < b; ) {
          var d = c++,
            e = this.qe.Mg(d);
          d = e.Ua;
          d += 0.05;
          1 < d && (d = 1);
          e.aa(d);
        }
        2 == this.stop && ((c = this.qe), c.aa(0.8 * c.Ua));
      }
      switch (this.state) {
        case 0:
          for (c = e = 0; 3 > c; )
            if (((d = c++), (b = this.fc[d]), 0 > b.time)) ++e;
            else if (((b.qb -= a), !(0 < b.qb))) {
              b.time += a;
              var f = b.time / nb.Tw,
                g;
              2 == this.stop
                ? ((d = g = lf(2)(1 - f)), 1 < f && ((b.time = -1), (g = d = 0)))
                : (1 < f ? ((b.time = -1), (g = 1)) : (g = 1 + Math.sin(Lg(2)(f) * Math.PI) * nb.kw),
                  (d = Math.sin(f * Math.PI)));
              b.Du = b.ip;
              b.ip = g;
              b.vm = b.Gj;
              b.Gj = d;
            }
          3 == e && (this.$t++, (this.state = 2 == this.stop ? 3 : 1));
          break;
        case 1:
          for (c = 0; 3 > c; ) (d = c++), (b = this.fc[d]), (b.qb = d * nb.Rv), (b.time = 0);
          this.state = 2;
          this.time = 0;
          break;
        case 2:
          if (
            this.time > nb.Ww &&
            ((this.state = 0), 1 == this.stop && 0 < this.$t && (null != this.qe ? 10 == this.progress : 1))
          ) {
            for (c = 0; 3 > c; )
              for (d = c++, this.fc[d].Eb.N(!1), b = 0; 3 > b; ) (a = b++), (this.fc[a].vm = 1), (this.fc[a].Gj = 1);
            this.stop = 2;
          }
      }
    },
    Ca: function (a) {
      x.prototype.Ca.call(this, a);
      for (var b = 0; 3 > b; ) {
        var c = b++;
        c = this.fc[c];
        var d = z.Wb(c.Du, c.ip, a);
        c.xb.na(c.Eb.na(d));
        d = z.Wb(c.vm, c.Gj, a);
        2 == this.stop ? c.xb.aa(d) : c.Eb.aa(d);
      }
      3 == this.state && this.o();
    },
    R: function () {
      return 14;
    },
    j: nb,
  });
  zf.g = !0;
  zf.prototype = { j: zf };
  mb.g = !0;
  mb.D = za;
  mb.prototype = u(za.prototype, {
    ba: function () {
      this.create();
      0 == this.kg && (this.start(), this.El());
    },
    Jc: function () {
      za.prototype.Jc.call(this);
      this.RC();
    },
    Zl: function () {
      3 == this.Qh && 1 == this.xd ? (this.stop(), this.o(), this.Iz.ba()) : za.prototype.Zl.call(this);
    },
    M: function (a) {
      za.prototype.M.call(this, a);
      this.loaded || null == this.pd || (this.pd.Ak(), this.pd.loaded && ((this.loaded = !0), this.Sr()));
    },
    Xg: function () {
      return !1;
    },
    Sr: function () {
      this.finish();
    },
    RC: function () {
      this.pd = new ab();
      this.pd.load(this.Hz);
    },
    R: function () {
      return 5;
    },
    j: mb,
  });
  me.g = !0;
  me.D = mb;
  me.prototype = u(mb.prototype, {
    rd: function () {
      mb.prototype.rd.call(this);
      this.animation = new nb(!1);
      this.Z(null, this.animation);
      this.canvas.appendChild(this.animation.group);
      this.Kb();
    },
    M: function (a) {
      mb.prototype.M.call(this, a);
      this.loaded && null != this.animation && 0 < (this.animation.f & 8) && mb.prototype.finish.call(this);
    },
    Mb: function () {
      mb.prototype.Mb.call(this);
      this.Kb();
    },
    Sr: function () {
      this.animation.Kd();
    },
    Kb: function () {
      var a = this.animation.group,
        b = this.eb().si();
      a.ea(b.x / 2);
      var c = (b.x / a.mc()) * 0.2;
      a.na(c);
      a.fa(b.y - 3 * a.Xc());
    },
    R: function () {
      return 13;
    },
    j: me,
  });
  Ad.g = !0;
  Ad.D = S;
  Ad.prototype = u(S.prototype, {
    Hf: function () {
      return 0;
    },
    yk: function () {
      return [];
    },
    Jc: function () {
      S.prototype.Jc.call(this);
      ra.instance.yB();
      try {
        if (A.Wg()) {
          var a = A.Xy(),
            b = H.T(H.T(a, "state"), "level");
          null != b && (ka.level = b);
          var c = H.T(a, "override");
          if (Object.prototype.hasOwnProperty.call(c, "shots")) {
            var d = H.T(c, "shots");
            null != d && 0 < d && (ka.jg = d);
          }
          if (Object.prototype.hasOwnProperty.call(c, "hide_ui")) {
            var e = H.T(c, "hide_ui");
            for (a = 0; a < e.length; ) {
              var f = e[a];
              ++a;
              switch (f) {
                case "aiming_aid":
                  ka.Kn = !0;
                  break;
                case "floating_points":
                  ka.Bs = !0;
                  break;
                case "score":
                  ka.Cs = !0;
              }
            }
          }
          if (Object.prototype.hasOwnProperty.call(c, "prioritize_color")) {
            switch (H.T(c, "prioritize_color")) {
              case "aqua":
                var g = 4;
                break;
              case "blue":
                g = 1;
                break;
              case "green":
                g = 2;
                break;
              case "purple":
                g = 5;
                break;
              case "red":
                g = 6;
                break;
              case "white":
                g = 7;
                break;
              case "yellow":
                g = 3;
                break;
              default:
                g = -1;
            }
            ka.xl = g;
          }
          if (Object.prototype.hasOwnProperty.call(c, "bubble_color_number")) {
            var h = H.T(c, "bubble_color_number");
            null != h && (3 > h && (h = 3), 6 < h && (h = 6), (ka.Pm = h));
          }
          Object.prototype.hasOwnProperty.call(c, "bubble_approach_speed") &&
            ((h = H.T(c, "bubble_approach_speed")),
            null != h && (1 > h && (h = 1), 10 < h && (h = 1), (ka.qo = z.map(h, 1, 10, 1, 3))));
          Object.prototype.hasOwnProperty.call(c, "push_back") &&
            ((h = H.T(c, "push_back")),
            null != h && (0 == h ? (M.ou = !1) : 1 < h && (10 < h && (h = 10), (ka.Oa = h))));
        }
      } catch (k) {}
      this.br = A.yp() || A.Wg() ? Yc : Xc;
      this.pd = new ab().rA(this.br);
    },
    M: function (a) {
      S.prototype.M.call(this, a);
      0 == this.Se &&
        ((a = this.pd.Ak()), A.Su(z.min(99, a)), this.pd.loaded && (A.Su(100), this.Wf(this.br), this.Se++));
    },
    R: function () {
      return 9;
    },
    j: Ad,
  });
  zd.g = !0;
  zd.D = S;
  zd.prototype = u(S.prototype, {
    rd: function () {
      S.prototype.rd.call(this);
    },
    ne: function () {
      S.prototype.ne.call(this);
      this.parent.canvas.aa(0.25);
    },
    Jc: function () {
      function a() {
        b.fe(!0);
      }
      var b = this;
      S.prototype.Jc.call(this);
      Aa.he().vd(0.25);
      this.fe(!1);
      T.pause().then(a, a);
    },
    Y: function (a) {
      46 == a.type && "sound_button" == a.sender.name ? (a.flags |= 3) : S.prototype.Y.call(this, a);
    },
    Ui: function () {
      S.prototype.Ui.call(this);
      this.parent.canvas.aa(1);
    },
    o: function () {
      S.prototype.o.call(this);
      Aa.he().vd(1);
    },
    ih: function (a) {
      var b = this;
      S.prototype.ih.call(this, a);
      switch (a.name) {
        case "home_button":
          a = function () {
            yb.instance.o();
            b.Wf(Xc);
          };
          var c = yb.instance.model.level.za.level;
          T.lA("level" + c).then(a, a);
          break;
        case "play_button":
          a = function () {
            b.finish();
          };
          T.resume().then(a);
          break;
        case "restart_button":
          a = function () {
            Ba.dn(b.Xe, "restart", !0);
            b.finish();
          };
          c = yb.instance.model.level.za.level;
          T.mA("level" + c).then(a, a);
          break;
        case "resume_button":
          a = function () {
            b.finish();
          };
          T.resume().then(a);
          break;
        case "sound_button":
          (da.zc = a.co()), ra.instance.yd(), this.Pp();
      }
    },
    Xg: function () {
      return !1;
    },
    wf: function (a, b) {
      b = S.prototype.wf.call(this, a, b);
      switch (a) {
        case "home_button":
        case "play_button":
        case "restart_button":
        case "resume_button":
          b.lg = 1;
          break;
        case "sound_button":
          b.sp(da.zc);
      }
      return b;
    },
    Hf: function () {
      return 0.1;
    },
    Pp: function () {
      var a = L(this, this.fe);
      Dg(function () {
        a(!0);
      }, 0.25);
      T.cq(da.zc ? 1 : 0);
    },
    R: function () {
      return 15;
    },
    j: zd,
  });
  Wc.g = !0;
  Wc.D = x;
  Wc.prototype = u(x.prototype, {
    show: function () {
      if (!this.hidden && 3 != this.state) {
        this.state = 1;
        var a = 0 < ((this.f = (this.f & -3) | 2) & 2) ? 1 : 0;
        this.group.N(0 < ((this.f = (this.f & -2) | a) & 1));
        this.group.aa(0);
        this.group.XB();
      }
    },
    Kd: function () {
      this.hidden || ((this.state = 2), this.group.aa(1));
    },
    o: function () {
      x.prototype.o.call(this);
      this.hidden && this.group.o();
      Wc.instance = null;
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      if (!this.hidden)
        switch (this.state) {
          case 1:
            a = this.group;
            a.aa(a.Ua + 0.05);
            1 <= this.group.Ua && (this.group.aa(1), (this.state = 3));
            break;
          case 2:
            a = this.group;
            a.aa(a.Ua - 0.05);
            0 == this.group.Ua &&
              ((a = 0 < ((this.f = (this.f & -3) | 0) & 2) ? 1 : 0),
              this.group.N(0 < ((this.f = (this.f & -2) | a) & 1)),
              (this.state = 0));
            break;
          case 3:
            (this.offset -= 5),
              -this.offset > M.vf * this.Nc &&
                ((a = this.a),
                a.fa(a.ma - this.offset),
                (a = this.a),
                (this.a = this.b),
                (this.b = a),
                (this.offset = 0));
        }
    },
    Ca: function (a) {
      x.prototype.Ca.call(this, a);
      this.hidden || ((a = M.vf * this.Nc), this.a.fa(this.offset), this.b.fa(a + this.offset));
    },
    Y: function (a) {
      x.prototype.Y.call(this, a);
      1 == a.type && (this.hidden || this.Kb());
    },
    Kb: function () {
      this.group.na(ta.instance.window.width / this.a.O.x);
    },
    R: function () {
      return 12;
    },
    j: Wc,
  });
  yf.g = !0;
  yf.prototype = {
    o: function () {
      this.group = this.zf = this.a = this.b = null;
    },
    update: function (a) {
      0.5 > a ? this.zf.aa(2 * a) : this.zf.aa(1 - 2 * (a - 0.5));
      var b = this.zf;
      b.aa(0.5 * b.Ua);
      this.b.canvas.aa(lf(2)(1 - a));
      this.a.canvas.aa(a);
      b = 0;
      for (var c = this.Ob.length; b < c; ) {
        var d = this.Ob[b],
          e = 3 * b;
        d.ea(this.data[e] + 10 * Math.sin(this.data[e + 2]));
        d.fa(this.data[e + 1] - this.size.y * a * 2.5);
        this.data[e + 2] += 0.2;
        ++b;
      }
    },
    j: yf,
  };
  Jb.g = !0;
  Jb.D = x;
  Jb.prototype = u(x.prototype, {
    o: function () {
      x.prototype.o.call(this);
      this.F.o();
      this.qj = null;
    },
    M: function (a) {
      x.prototype.M.call(this, a);
      switch (this.state) {
        case 0:
          this.offset++;
          4 == this.offset && (this.offset = 0);
          this.ff = 0.2 + 0.5 * Math.random();
          this.TC = 60 + 100 * Math.random() * (1 - this.ff);
          this.duration = 1 + Math.random();
          this.wait = 1 + 2 * Math.random();
          this.time = 0;
          this.F.N(!0);
          this.state = 1;
          break;
        case 1:
          this.wait -= a;
          if (0 < this.wait) return;
          this.time = 0;
          this.state = 2;
          break;
        case 2:
          (a = z.min(this.time / this.duration, 1)),
            this.F.na(Math.sin(a * Math.PI) * this.ff),
            this.F.Ih(a * this.TC),
            this.F.aa(Math.sin(a * Math.PI)),
            1 == a && ((this.state = 0), this.F.N(!1));
      }
      this.F.ea(this.qj.ra + Jb.Gt[this.offset << 1] * this.qj.Ja);
      this.F.fa(this.qj.ma + Jb.Gt[(this.offset << 1) + 1] * this.qj.Ja);
    },
    R: function () {
      return 59;
    },
    j: Jb,
  });
  ab.g = !0;
  ab.es = function () {
    if (null != ab.hb) return ab.hb;
    ab.hb = new gf(
      4,
      function (a) {
        var b = p.Hd(a.url);
        0 > b || p.setData(b, a.data, a.Vf);
      },
      "v=" + la.Xa(ra.VERSION)
    );
    ab.hb.tag = "scene";
    return ab.hb;
  };
  ab.prototype = {
    Ak: function () {
      return this.loaded ? 100 : Math.round(100 * ab.es().xk(this.bu));
    },
    rA: function (a, b) {
      this.loaded = !1;
      a = Object.create(a.prototype);
      a.caller = a;
      a.xi = a.Xe = null == b ? Ba.Rb() : b;
      this.load(a.yk());
      return this;
    },
    load: function (a) {
      for (var b = this, c = ab.es(), d = 0, e = 0; e < a.length; ) {
        var f = a[e];
        ++e;
        if (!p.Lk(f) || null != p.Df()) {
          var g = p.ni(f);
          if (c.zi(g) || c.load(g))
            c.qB(g),
              (d += 1),
              this.bu.push(g),
              p.fl(f, function () {
                b.Eo();
                0 == --d && ((b.loaded = !0), b.Nd());
              });
        }
      }
      0 == d && (this.loaded = !0);
      return d;
    },
    j: ab,
  };
  sg.g = !0;
  sg.Rg = function (a, b) {
    null == b && (b = ".");
    var c = a + "";
    if (1e6 > a) {
      if (1e3 > a) return c;
      if (1e4 > a) return Y.substr(c, 0, 1) + b + Y.substr(c, 1, null);
      if (1e5 > a) return Y.substr(c, 0, 2) + b + Y.substr(c, 2, null);
      if (1e6 > a) return Y.substr(c, 0, 3) + b + Y.substr(c, 3, null);
    } else {
      if (1e7 > a) return Y.substr(c, 0, 1) + b + Y.substr(c, 1, 3) + b + Y.substr(c, 4, null);
      if (1e8 > a) return Y.substr(c, 0, 2) + b + Y.substr(c, 2, 3) + b + Y.substr(c, 5, null);
      if (1e9 > a) return Y.substr(c, 0, 3) + b + Y.substr(c, 3, 3) + b + Y.substr(c, 6, null);
    }
    return 1e10 > a
      ? Y.substr(c, 0, 1) + b + Y.substr(c, 1, 3) + b + Y.substr(c, 4, 3) + b + Y.substr(c, 7, null)
      : null;
  };
  le.g = !0;
  le.prototype = { j: le };
  ke.g = !0;
  ke.jA = function (a) {
    return !new fa("\\S", "").match(a);
  };
  ke.repeat = function (a, b) {
    for (var c = "", d = 0; d < b; ) d++, (c += null == a ? "null" : "" + a);
    return c;
  };
  je.g = !0;
  je.D = td;
  je.prototype = u(td.prototype, {
    get: function () {
      return this.storage.getItem(this.name);
    },
    set: function (a) {
      this.storage.setItem(this.name, a);
    },
    j: je,
  });
  xf.g = !0;
  xf.prototype = {
    ey: function (a) {
      function b() {
        var k = {},
          l = d.$();
        k.f = l;
        0 < (l & 1) && (k.tx = d.Rd());
        0 < (l & 2) && (k.ty = d.Rd());
        0 < (l & 4) && (k.a = d.Rd());
        0 < (l & 8) && (k.b = d.Rd());
        0 < (l & 16) && (k.c = d.Rd());
        0 < (l & 32) && (k.d = d.Rd());
        return k;
      }
      function c() {
        return d.vh(d.$a());
      }
      var d = new pb(a);
      a = {};
      var e = d.$a(),
        f = d.$a(),
        g = {};
      g.width = e;
      g.height = f;
      a.Stage = g;
      var h = null;
      for (
        h = function (k) {
          var l = {};
          k.push(l);
          k = d.$();
          var m = d.$();
          switch (k) {
            case 0:
              l.texture = c();
              0 < (m & 1) && (l.frame = c());
              0 < (m & 2) && (l.matrix = b());
              l.type = "bitmap";
              break;
            case 1:
              l.name = c();
              l.type = "symbol";
              0 < (m & 1) && (l.matrix = b());
              0 < (m & 2) &&
                ((k = {}),
                (m = d.$()),
                (k.f = m),
                0 < (m & 1) && (k.x = d.Rd()),
                0 < (m & 2) && (k.y = d.Rd()),
                (l.pivot = k));
              k = [];
              l.children = k;
              l = 0;
              for (m = d.$(); l < m; ) l++, h(k);
              break;
            case 2:
              (l.name = c()),
                (l.face = c()),
                (l.size = d.$()),
                (l.matrix = b()),
                (l.w = d.Rd()),
                (l.h = d.Rd()),
                (l.fillColor = "#" + yg.Bz(d.ad())),
                (l.align = d.pu()),
                (l.type = "text");
          }
        };
        d.Na < d.gf;

      )
        for (f = c(), e = [], a[f] = e, f = 0, g = d.$a(); f < g; ) f++, h(e);
      return a;
    },
    j: xf,
  };
  Ha.g = !0;
  Ha.setData = function (a) {
    null == Ha.data &&
      (a instanceof xa ? (Ha.data = new xf().ey(a)) : "string" == typeof a && (Ha.data = JSON.parse(a)),
      (a = H.T(Ha.data, "Stage")),
      (Ha.width = H.T(a, "width")),
      (Ha.height = H.T(a, "height")));
  };
  Ha.mt = function (a, b) {
    Ha.map.P["face_" + a] = b;
  };
  Ha.prototype = {
    Wo: function () {
      this.create(this.root, H.T(Ha.data, this.Rk));
    },
    create: function (a, b) {
      for (var c = -1, d = b.length; ++c < d; ) {
        var e = b[c];
        switch (H.T(e, "type")) {
          case "bitmap":
            var f = H.T(e, "texture");
            Object.prototype.hasOwnProperty.call(Ha.map.P, f) && (f = Ha.map.P[f]);
            var g = p.Hd("" + f + ".png");
            0 > g && (g = p.Hd("" + f + ".jpg"));
            f = new W(a, g, H.T(e, "frame"));
            f.node.name = H.T(e, "name");
            e = H.T(e, "matrix");
            null != e && this.setTransform(f, e);
            break;
          case "symbol":
            f = new ma(null, a);
            f.node.name = H.T(e, "name");
            g = H.T(e, "matrix");
            null != g && this.setTransform(f, g);
            this.lC(f, e);
            e = H.T(e, "children");
            null != e && this.create(f, e);
            break;
          case "text":
            (f = Ha.map.P["face_" + la.Xa(H.T(e, "face")) + "@" + la.Xa(H.T(e, "fillColor"))]),
              (f = new La(a, f)),
              (f.node.name = H.T(e, "name")),
              (g = H.T(e, "matrix")),
              null != g && this.setTransform(f, g),
              f.hj(H.T(e, "w") - 2, H.T(e, "h") - 2),
              f.ij(Math.round(1.3333333333333333 * H.T(e, "size"))),
              f.wc(f.node.name),
              f.ZB(Object.prototype.hasOwnProperty.call(e, "align") ? H.T(e, "align") : -1);
        }
      }
    },
    Ff: function (a) {
      return this.root.tk(a);
    },
    Gf: function (a) {
      return na.ug(this.root.li(a), La);
    },
    wc: function (a, b) {
      var c = this.root.li(a);
      null != c && (c.wc(la.Xa(b)), c.$u(), (this.WC.P[a] = c));
      return c;
    },
    setTransform: function (a, b) {
      if (a.type == W.TYPE) {
        var c = a.O.x,
          d = a.O.y,
          e = 0 < (b.f & 4) ? H.T(b, "a") : 1,
          f = 0 < (b.f & 32) ? H.T(b, "d") : 1,
          g = 0 < (b.f & 1) ? H.T(b, "tx") : 0;
        b = 0 < (b.f & 2) ? H.T(b, "ty") : 0;
        a.ab();
        a.Qa();
        e == f ? a.na(e) : (a.te(e), a.Pc(f));
        a.ea((c / 2) * e + g);
        a.fa((d / 2) * f + b);
      } else
        a.type == ma.TYPE
          ? ((f = 0 < (b.f & 32) ? H.T(b, "d") : 1),
            (g = 0 < (b.f & 1) ? H.T(b, "tx") : 0),
            (b = 0 < (b.f & 2) ? H.T(b, "ty") : 0),
            a.na(f),
            a.ea(g),
            a.fa(b))
          : a.type == La.TYPE &&
            ((g = 0 < (b.f & 1) ? H.T(b, "tx") : 0), (b = 0 < (b.f & 2) ? H.T(b, "ty") : 0), a.ea(g), a.fa(b));
    },
    j: Ha,
  };
  va.g = !0;
  va.prototype = {
    o: function () {
      for (var a = this.mg.iterator(); a.ka(); ) a.next().Gd();
      this.mg = null;
      this == va.current && (va.current = null);
      this.Nb = this.Fe = this.Mo = null;
      this.Ym.o();
      this.Ym = null;
    },
    ej: function (a) {
      null != this.Nb && this.Nb.Rp();
      this.Nb = a;
      this.Nb.bind();
    },
    cC: function (a) {
      this.Fe = a;
      a.sC(this);
    },
    np: function () {
      va.current = this;
    },
    iy: function (a) {
      if (!this.Kh && null != this.Nb && this.Nb.valid()) {
        var b = this.Nb.viewport,
          c = b.u,
          d = b.A,
          e = b.B;
        this.ws = 0 == (0 == b.s && 0 == c && 1 == d && 1 == e);
        this.ee = 1;
        this.Gl((this.$j = Hb.tq.ym));
        this.Vp();
        this.Jj();
        a = this.Ym.Ux(a, 0 == this.Zm);
        0 < a.l && this.en(a);
        null != this.Ig && this.dj(null);
        this.Im = !1;
        this.kk();
      }
    },
    clear: function () {},
    en: function (a) {
      var b = a.i,
        c = 0;
      for (a = a.l; c < a; ) {
        var d = c++;
        this.Hr(b[d]);
      }
    },
    Hr: function (a) {
      var b = a.effect;
      b.active && ((this.Ie = a), this.ig(a), 0 != this.ee && b.Wc(this));
    },
    Vp: function () {
      U.set(this.ur, this.Fe.Dn());
      U.set(this.ck, this.Fe.mz());
      U.Sc(this.ck, this.ur, this.xf);
    },
    Id: function (a) {
      return this.mg.P[a];
    },
    createTexture: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == a && (a = -32768);
      d |= this.wr;
      if (this.Jy || !this.Ql) d |= 2;
      d = this.Vn(d, e);
      -32768 == a && (a = this.Bt++);
      this.tu(d, a);
      d.fC(b, c);
      return d;
    },
    rr: function (a, b, c) {
      a = this.Id(a).um(b, c);
      this.tu(a, this.Bt++);
      return a;
    },
    gp: function (a, b) {
      function c() {
        b.pp(a);
        a.flags &= -2049;
      }
      0 < (a.flags & 1024) ? c() : (a.Io = c);
    },
    hy: function (a) {
      if (this.mg.P.hasOwnProperty(a)) {
        var b = this.mg.P[a];
        this.mg.remove(a);
        b.Gd();
      }
    },
    tu: function (a, b) {
      this.mg.P[b] = a;
      a.id = b;
      a.group = null == a.parent ? b : a.parent.group;
    },
    Jj: function () {},
    kk: function () {},
    ig: function (a) {
      if (0 != this.zg) {
        var b = this.zg;
        a = a.Mh;
        if (0 < (b & 1)) {
          var c = a[0];
          c = null != c ? c.alpha : 1;
          c != this.ee && (this.ee = c);
        }
        0 < (b & 2) && ((c = a[1]), null != c ? this.Lu(c.Rm) : null != this.He && this.Lu(null));
        0 < (b & 4) &&
          ((c = a[2]), (c = null != c ? c.ym : Hb.tq.ym), c != this.$j && ((this.$j = c), this.Gl(this.$j)));
        0 < (b & 8) &&
          ((c = a[3]),
          null != c
            ? null != c.$p && c.$p != this.Ig && this.dj(c.$p, null != c.ha)
            : null != this.Ig && this.dj(null));
      }
    },
    Gl: function () {},
    dj: function (a) {
      this.Ig = a;
    },
    Lu: function (a) {
      this.He = a;
    },
    Gh: function (a) {
      0 < (a.m & 1) ? U.set(this.Fd, this.xf) : U.Hp(this.xf, a.wk(), this.Fd);
      return this.Fd;
    },
    j: va,
  };
  $a.g = !0;
  $a.D = va;
  $a.prototype = u(va.prototype, {
    ej: function (a) {
      va.prototype.ej.call(this, a);
      this.context = a.getContext();
    },
    createTexture: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == a && (a = -32768);
      return va.prototype.createTexture.call(this, a, b, c, d, e);
    },
    o: function () {
      va.prototype.o.call(this);
      this.ai = this.context = null;
      for (var a = this.fh.keys(); a.ka(); ) {
        var b = a.next(),
          c = this.fh.P[b].canvas;
        c.width = 1;
        c.height = 1;
        this.fh.P[b] = null;
      }
      this.fh = null;
    },
    clear: function () {
      var a = this.Nb;
      if (null != a && a.valid()) {
        this.Au();
        var b = this.context,
          c = a.Pd,
          d = c.x,
          e = c.y,
          f = c.width;
        c = c.height;
        b.clearRect(d, e, f, c);
        0 < a.color.a && ((b.fillStyle = this.Qm(a.color)), b.fillRect(d, e, f, c));
      }
    },
    Jj: function () {
      va.prototype.Jj.call(this);
      this.Au();
      this.hp();
      this.nu();
      var a = this.Nb;
      if (this.ws) {
        var b = a.Pd;
        a = b.x;
        var c = b.y,
          d = b.width;
        b = b.height;
        var e = new Path2D();
        e.rect(a, c, d, b);
        this.context.clip(e);
      }
    },
    kk: function () {
      for (va.prototype.kk.call(this); 0 < this.Pl; ) this.Vo();
    },
    Au: function () {
      var a = this.Nb;
      null != a &&
        a.valid() &&
        (this.hp(),
        (a = this.context),
        (a.globalAlpha = 1),
        (a.globalCompositeOperation = $a.Aj),
        (this.ho = -1),
        (this.$m = this.io = null),
        this.gj(a, this.lj));
    },
    Vn: function (a, b) {
      return new jb(this, a, b);
    },
    Er: function (a) {
      var b = this.context;
      this.gj(b, this.lj);
      this.Kl(b);
      this.Jl(b);
      this.setTransform(this.Ie.I);
      if (null != this.He) {
        var c = this.He.rc;
        var d = this.He.offset,
          e = a.color;
        a = e.r;
        var f = e.Fa,
          g = e.b;
        e = e.a;
        var h = new Ub();
        h.r = a;
        h.Fa = f;
        h.b = g;
        h.a = e;
        h.r = z.ce(h.r * c.r + d.r);
        h.Fa = z.ce(h.Fa * c.Fa + d.Fa);
        h.b = z.ce(h.b * c.b + d.b);
        h.a = z.ce(h.a * c.a + d.a);
        c = h;
      } else c = a.color;
      b.fillStyle = this.Qm(c);
      b.fillRect(0, 0, 1, 1);
    },
    Fr: function (a) {
      var b = this.context;
      this.gj(b, this.lj);
      this.Kl(b);
      this.Jl(b);
      var c = a.ua;
      if (!(0 < (c.flags & 4096))) {
        c = c.image;
        this.setTransform(this.Ie.I);
        var d = a.La,
          e = d.x,
          f = d.y,
          g = d.width,
          h = d.height;
        null != this.He && ((c = this.kx(a)), (f = e = 0));
        var k = a.flags;
        if (0 == (k & 12)) b.drawImage(c, e, f, g, h, 0, 0, 1, 1);
        else if (4 == (k & 12)) {
          d = a.gh % 1;
          k = a.hh % 1;
          0 > d && (d = 1 + d);
          0 > k && (k = 1 + k);
          var l = 0;
          0 != d && (l |= 1);
          0 != k && (l |= 2);
          switch (l) {
            case 0:
              b.drawImage(c, e, f, g, h, 0, 0, 1, 1);
              break;
            case 1:
              b.drawImage(c, e + d * g, f, g, h, 0, 0, 1, 1);
              b.drawImage(c, e, f, g * d, h, 1 - d, 0, 1 * d, 1);
              break;
            case 2:
              b.drawImage(c, e, f + k * h, g, h, 0, 0, 1, 1);
              b.drawImage(c, e, f, g, h * k, 0, 1 - k, 1, 1 * k);
              break;
            case 3:
              b.drawImage(c, e + d * g, f + k * h, g, h, 0, 0, 1, 1),
                b.drawImage(c, e, f + h * k, g * d, h * (1 - k), 1 - d, 0, 1 * d, 1 - k),
                b.drawImage(c, e + d * g, f, g * (1 - d), h * k, 0, 1 - k, 1 - d, 1 * k),
                b.drawImage(c, e, f, g * d, h * k, 1 - d, 1 - k, 1 * d, 1 * k);
          }
        } else if (8 == (k & 12)) {
          k = a.yh;
          l = a.zh;
          var m = 1 / k,
            n = 1 / l,
            q = k | 0,
            r = l | 0,
            w,
            G = 0,
            v = 0;
          for (a = r; v < a; ) {
            v++;
            for (var P = (w = 0), I = q; P < I; ) P++, b.drawImage(c, e, f, g, h, w, G, m, n), (w += m);
            G += n;
          }
          w = h = g = 0;
          if (0 < k % 1)
            for (++w, e = 1 - q * m, g = (1 / k) * q, v = h = 0, a = r; v < a; )
              v++, b.drawImage(c, d.x, d.y, (e / m) * d.width, d.height, g, h, e, 1 / l), (h += 1 / l);
          if (0 < l % 1)
            for (++w, f = 1 - r * n, g = 0, h = (1 / l) * r, v = 0, a = q; v < a; )
              v++, b.drawImage(c, d.x, d.y, d.width, (f / n) * d.height, g, h, 1 / k, f), (g += 1 / k);
          2 == w &&
            ((e = 1 - q * m),
            (f = 1 - r * n),
            b.drawImage(c, d.x, d.y, (e / m) * d.width, (f / n) * d.height, g, h, e, f));
        } else if (12 == (k & 12)) {
          k = 1 / a.yh;
          l = 1 / a.zh;
          P = (1 / k) | 0;
          w = (1 / l) | 0;
          I = 1 - P * k;
          G = 1 - w * l;
          m = this.cD;
          m.ec(3 * P + 12);
          m.l = 0;
          n = this.dD;
          n.ec(18 * w + 6);
          r = q = n.l = 0;
          v = a.gh % 1;
          0 > v && (v = 1 + v);
          var J = v;
          for (d = 0; d < P; ) {
            v = J;
            var O = J + k;
            1 < O
              ? ((m.i[m.l++] = v),
                (m.i[m.l++] = 1 - v),
                (m.i[m.l++] = 1),
                (m.i[m.l++] = 0),
                (m.i[m.l++] = O - 1),
                (m.i[m.l++] = 0),
                (q += 6))
              : ((m.i[m.l++] = v), (m.i[m.l++] = k), (m.i[m.l++] = 0), (q += 3));
            ++d;
            J += k;
            J %= 1;
          }
          0 < I &&
            ((v = J),
            (O = J + I),
            1 < O
              ? ((m.i[m.l++] = v),
                (m.i[m.l++] = 1 - v),
                (m.i[m.l++] = 1),
                (m.i[m.l++] = 0),
                (m.i[m.l++] = O - 1),
                (m.i[m.l++] = 0),
                (q += 6))
              : ((m.i[m.l++] = v), (m.i[m.l++] = I), (m.i[m.l++] = 0), (q += 3)));
          a = a.hh % 1;
          0 > a && (a = 1 + a);
          J = a;
          for (d = 0; d < w; )
            (v = J),
              (O = J + l),
              1 < O
                ? ((n.i[n.l++] = v),
                  (n.i[n.l++] = 1 - v),
                  (n.i[n.l++] = 1),
                  (n.i[n.l++] = 0),
                  (n.i[n.l++] = O - 1),
                  (n.i[n.l++] = 0),
                  (r += 6))
                : ((n.i[n.l++] = v), (n.i[n.l++] = l), (n.i[n.l++] = 0), (r += 3)),
              ++d,
              (J += l),
              (J %= 1);
          0 < G &&
            ((v = J),
            (O = J + G),
            1 < O
              ? ((n.i[n.l++] = v),
                (n.i[n.l++] = 1 - v),
                (n.i[n.l++] = 1),
                (n.i[n.l++] = 0),
                (n.i[n.l++] = O - 1),
                (n.i[n.l++] = 0),
                (r += 6))
              : ((n.i[n.l++] = v), (n.i[n.l++] = G), (n.i[n.l++] = 0), (r += 3)));
          d = a = 0;
          for (var F; d < r; ) {
            J = n.i[d++];
            var ha = n.i[d++];
            var Ca = n.i[d++];
            G = ha / l;
            for (F = v = 0; F < q; )
              (P = m.i[F++]),
                (I = m.i[F++]),
                (O = m.i[F++]),
                (w = I / k),
                b.drawImage(c, e + v, f + a, g * w, h * G, 1 * P, 1 * J, 1 * I, 1 * ha),
                (v = g * w * O);
            a = h * G * Ca;
          }
        }
      }
    },
    Gr: function (a) {
      var b = a.Lp,
        c = a.ua.image,
        d = a.jb,
        e = this.context;
      this.gj(e, this.lj);
      this.Kl(e);
      this.Jl(e);
      this.setTransform(this.Ie.I);
      for (var f = a.qh, g = a.rh, h, k, l = a.aq, m, n, q, r = a.kv, w = a.bq; w <= l; ) {
        h = a.bm;
        for (k = a.am; h <= k; )
          (m = h * b + f),
            (n = w * b + g),
            (q = -1),
            r.inRange(h, w) && (q = r.i[w * r.ga + h]),
            0 < q && ((q = d.vk(q).frame), e.drawImage(c, q.x, q.y, q.width, q.height, m, n, b, b)),
            ++h;
        ++w;
      }
    },
    Dr: function (a) {
      var b = this.fh.P[a.key];
      null == b &&
        ((b = window.document.createElement("canvas").getContext("2d", { alpha: !0 })), (this.fh.P[a.key] = b));
      var c = a.$d,
        d = a.ia,
        e = c.lineHeight,
        f = c.Mm,
        g = c.advance;
      c = d.ga * g;
      var h = d.sa * e;
      if (b.canvas.width < c || b.canvas.height < h) (b.canvas.width = c), (b.canvas.height = h);
      var k = a.ua.image,
        l = this.ay,
        m = null,
        n = d.i,
        q = d.ga,
        r = 0;
      for (d = d.ga * d.sa; r < d; ) {
        var w = r++,
          G = n[w],
          v = G.code,
          P = G.jv,
          I = G.xm,
          J = (w % q) * g,
          O = ((w / q) | 0) * e;
        b.clearRect(J, O, g, e);
        var F = null;
        if (-1 != I && ((F = l.P[I]), null == F)) {
          var ha = (I >> 16) & 255;
          var Ca = (I >> 8) & 255;
          var Xa = I & 255;
          F = "rgb(" + ha + "," + Ca + "," + Xa + ")";
          l.P[I] = F;
        }
        I = l.P[P];
        null == I &&
          ((ha = (P >> 16) & 255),
          (Ca = (P >> 8) & 255),
          (Xa = P & 255),
          (I = "rgb(" + ha + "," + Ca + "," + Xa + ")"),
          (l.P[P] = I));
        32 < v
          ? ((v = f[v]),
            null == v && (v = f[63]),
            (P = $a.Aj),
            m != P && (m = b.globalCompositeOperation = P),
            (P = O + v.offsetY),
            (ha = v.w),
            (Ca = v.P),
            b.drawImage(k, v.x, v.y, v.w, v.P, J, P, ha, Ca),
            null != I &&
              ((b.fillStyle = I),
              (I = $a.Sw),
              m != I && (m = b.globalCompositeOperation = I),
              b.fillRect(J, P, ha, Ca)),
            null != F &&
              ((b.fillStyle = F), (F = $a.Sv), m != F && (m = b.globalCompositeOperation = F), b.fillRect(J, O, g, e)))
          : null != F &&
            ((b.fillStyle = F), (F = $a.Aj), m != F && (m = b.globalCompositeOperation = F), b.fillRect(J, O, g, e));
        n[w] = G;
      }
      this.setTransform(this.Ie.I);
      e = b.canvas;
      b = this.context;
      this.gj(b, this.lj);
      this.Kl(b);
      this.Jl(b);
      0 < a.fillColor >>> 24 && ((b.fillStyle = this.Qm(Tg.gD(a.fillColor))), b.fillRect(0, 0, c, h));
      b.drawImage(e, 0, 0, c, h, 0, 0, c, h);
    },
    Vp: function () {
      va.prototype.Vp.call(this);
      var a = this.Nb.Pd,
        b = a.x,
        c = a.y,
        d = a.width,
        e = a.height;
      this.Ap = !1;
      if (this.Fe.Yp && !this.ws) {
        a = this.Fe.size;
        var f = a.y;
        if (a.x == d && f == e) {
          this.Ap = !0;
          U.Oc(this.kp);
          return;
        }
      }
      U.wC(this.kp, b, c, d, e);
      U.Sc(this.kp, this.xf, this.xf);
    },
    Gh: function (a) {
      if (this.Ap) return U.set(this.Fd, a.wk()), this.Fd;
      if (0 < (a.m & 1)) U.set(this.Fd, this.xf);
      else {
        var b = a.Gn;
        if (0 < (a.m & 64))
          if (((a.m &= -65), null == b && ((b = a.Gn = U.Rb()), U.Oc(b)), 0 < (a.m & 1)))
            (b.m11 = 1), (b.m12 = 0), (b.m14 = 0), (b.m21 = 0), (b.m22 = 1), (b.m24 = 0);
          else {
            var c = a.da,
              d = a.scale.x,
              e = a.scale.y;
            0 < (a.m & 2)
              ? ((b.m11 = c.m11 * d), (b.m12 = c.m12 * e), (b.m21 = c.m21 * d), (b.m22 = c.m22 * e))
              : ((b.m11 = c.m11), (b.m21 = c.m21), (b.m12 = c.m12), (b.m22 = c.m22));
            b.m14 = a.translate.x;
            b.m24 = a.translate.y;
          }
        var f = b;
        a = this.xf;
        b = this.Fd;
        c = f.m11;
        d = f.m12;
        e = f.m14;
        var g = f.m21,
          h = f.m22;
        f = f.m24;
        var k = a.m11,
          l = a.m12;
        b.m11 = k * c + l * g;
        b.m12 = k * d + l * h;
        b.m14 = k * e + l * f + a.m14;
        k = a.m21;
        l = a.m22;
        b.m21 = k * c + l * g;
        b.m22 = k * d + l * h;
        b.m24 = k * e + l * f + a.m24;
      }
      return this.Fd;
    },
    Gl: function (a) {
      this.ak = this.Ox[a.pa];
    },
    dj: function (a, b) {
      null == b && (b = !1);
      var c = this.Ig;
      va.prototype.dj.call(this, a);
      var d = this.context;
      if (null == a) 0 != this.Pl && this.Vo();
      else {
        a != c && null != c && this.Vo();
        this.nu();
        this.hp();
        a = this.Ig;
        c = 1 / this.Nb.Kc;
        if (b)
          try {
            var e = new Path2D();
            e.rect(a[0].x * c, a[0].y * c, (a[2].x - a[1].x) * c, (a[2].y - a[3].y) * c);
            d.clip(e);
            return;
          } catch (f) {}
        d.strokeStyle = this.oD;
        d.lineWidth = 1;
        d.beginPath();
        d.moveTo(a[0].x * c, a[0].y * c);
        b = a.length;
        for (e = 0; ++e < b; ) d.lineTo(a[e].x * c, a[e].y * c);
        d.closePath();
        d.stroke();
        d.clip();
      }
    },
    Kl: function (a) {
      this.ak != this.io && ((this.io = this.ak), (a.globalCompositeOperation = this.ak));
    },
    Jl: function (a) {
      this.ee != this.ho && ((this.ho = this.ee), (a.globalAlpha = this.ee));
    },
    gj: function (a, b) {
      b != this.$m && ((this.$m = b), (a.imageSmoothingEnabled = b));
    },
    setTransform: function (a) {
      a = this.Gh(a);
      this.context.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24);
    },
    kx: function (a) {
      var b = a.La,
        c = b.x | 0,
        d = b.y | 0,
        e = b.width | 0,
        f = b.height | 0;
      b = this.ai.canvas;
      if (b.width < e || b.height < f) (b.width = e), (b.height = f);
      this.ai.drawImage(a.ua.image, c, d, e, f, 0, 0, e, f);
      a = this.ai.getImageData(0, 0, e, f);
      c = a.data;
      d = 0;
      e = c.length;
      var g = this.He,
        h = g.rc;
      f = h.r;
      var k = h.Fa,
        l = h.b;
      h = h.a;
      var m = g.offset;
      g = 255 * m.r;
      var n = 255 * m.Fa,
        q = 255 * m.b;
      for (m = 255 * m.a; d < e; )
        (c[d] = c[d] * f + g),
          (c[d + 1] = c[d + 1] * k + n),
          (c[d + 2] = c[d + 2] * l + q),
          (c[d + 3] = c[d + 3] * h + m),
          (d += 4);
      this.ai.putImageData(a, 0, 0);
      return b;
    },
    Qm: function (a) {
      var b = (((255 * a.a) | 0) << 24) | (((255 * a.r) | 0) << 16) | (((255 * a.Fa) | 0) << 8) | (255 * a.b) | 0,
        c = this.sr.P[b];
      null == c && ((c = Fg.hD(a)), (this.sr.P[b] = c));
      return c;
    },
    hp: function () {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
    },
    nu: function () {
      this.context.save();
      this.Pl++;
    },
    Vo: function () {
      this.context.restore();
      this.Pl--;
    },
    j: $a,
  });
  Yb.g = !0;
  Yb.prototype = {
    o: function () {},
    valid: function () {
      return null != this.getContext() && 0 < this.Mj ? 0 < this.Yh : !1;
    },
    LB: function () {
      var a = this.viewport;
      a.s = 0;
      a.u = 0;
      a.A = 1;
      a.B = 1;
      this.Ev();
    },
    Ev: function () {
      this.Pd.x = (this.viewport.s * this.Mj) | 0;
      this.Pd.y = (this.viewport.u * this.Yh) | 0;
      var a = this.viewport;
      this.Pd.width = ((a.A - a.s) * this.Mj) | 0;
      a = this.viewport;
      this.Pd.height = ((a.B - a.u) * this.Yh) | 0;
    },
    MB: function (a, b) {
      this.Mj = a;
      this.Yh = b;
      this.Ev();
    },
    bind: function () {},
    Rp: function () {},
    j: Yb,
  };
  vb.g = !0;
  vb.D = Yb;
  vb.prototype = u(Yb.prototype, {
    pz: function () {
      return this.children.slice();
    },
    um: function (a, b) {
      var c = this.K.Vn(this.flags, a);
      this.children.push(c);
      c.parent = this;
      c.group = this.group;
      c.width = this.width;
      c.hc = this.hc;
      c.height = this.height;
      c.cc = this.cc;
      c.scale = this.scale;
      b = b.qn();
      if (null != a) {
        a = this.jb.bs(a);
        for (var d = a.frame.x | 0, e = a.frame.y | 0, f = 0, g = b.frames; f < g.length; )
          (a = g[f]), ++f, (a.La.x += d), (a.La.y += e);
      }
      c.jb = new ec(c, b);
      0 < (this.flags & 1024) && (c.image = this.image);
      return c;
    },
    fC: function (a, b) {
      var c = this;
      this.image = a;
      this.hc = this.width = a.width | 0;
      this.cc = this.height = a.height | 0;
      this.Cl() && ((this.hc = z.wo(this.width)), (this.cc = z.wo(this.height)));
      null != b && (this.jb = new ec(this, b.qn()));
      vb.kt++;
      var d = this.image;
      this.ju(function () {
        0 < (c.flags & 4096) ||
          (0 < (c.flags & 2048) && c.K.Mo(d), (c.flags |= 1024), vb.kt--, c.Ho(), null != c.Io && c.Io());
      });
    },
    pp: function (a) {
      this.xt++;
      0 < (this.flags & 2048) && this.ik();
      null != this.jb && this.jb.S();
      this.image = a.image;
      this.jb = a.jb;
      this.flags = a.flags;
      this.scale = a.scale;
      this.width = a.width;
      this.hc = a.hc;
      this.height = a.height;
      this.cc = a.cc;
      for (var b = 0, c = this.jh; b < c.length; ) {
        var d = c[b];
        ++b;
        d();
      }
      b = 0;
      for (c = this.children.length; b < c; ) {
        var e = b++;
        d = this.children[e];
        d.xt++;
        e = a.children[e];
        d.image = e.image;
        d.jb = e.jb;
        d.flags = this.flags;
        d.scale = this.scale;
        d.width = this.width;
        d.hc = this.hc;
        d.height = this.height;
        d.cc = this.cc;
        e = 0;
        for (var f = d.jh; e < f.length; ) (d = f[e]), ++e, d();
      }
    },
    Gd: function () {
      if (!(0 < (this.flags & 4096))) {
        this.flags |= 4096;
        null == this.parent && (0 < (this.flags & 2048) && this.ik(), null != this.jb && this.jb.S());
        for (var a = 0, b = this.children; a < b.length; ) {
          var c = b[a];
          ++a;
          c.Gd();
        }
        this.jh = this.children = this.parent = this.Io = this.jb = this.image = null;
      }
    },
    BB: function (a) {
      -1 == this.jh.indexOf(a) && this.jh.push(a);
    },
    tD: function (a) {
      Y.remove(this.jh, a);
    },
    ju: function () {},
    Ho: function () {
      for (var a = 0, b = this.children; a < b.length; ) {
        var c = b[a];
        ++a;
        c.image = this.image;
        c.flags |= 1024;
      }
    },
    Ai: function () {
      return z.Ai(this.width) ? z.Ai(this.height) : !1;
    },
    Cl: function () {
      return 0 < (this.flags & 2) ? !this.Ai() : !1;
    },
    ik: function () {},
    j: vb,
  });
  jb.g = !0;
  jb.D = vb;
  jb.prototype = u(vb.prototype, {
    getContext: function () {
      return this.image.getContext("2d", null);
    },
    ju: function (a) {
      var b = 0 == (this.flags & 1);
      if (this.Cl() || !b || 0 < (this.flags & 512)) {
        this.flags |= 2048;
        var c = window.document.createElement("canvas");
        c.width = this.hc;
        c.height = this.cc;
        c = c.getContext("2d", null);
        b || ((c.fillStyle = "rgb(0,0,0)"), c.fillRect(0, 0, this.hc, this.cc));
        c.drawImage(this.image, 0, 0);
        0 < (this.flags & 512) && this.yy(c);
        this.image = c.canvas;
      }
      switch (gc.Fz) {
        case 0:
          a();
          break;
        case 1:
          this.ov(this.image, a);
          break;
        case 2:
          this.fD(this.image, a);
          break;
        case 3:
          this.eD(this.image, a);
      }
    },
    ik: function () {
      vb.prototype.ik.call(this);
      try {
        this.image instanceof HTMLImageElement
          ? (this.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
          : this.image instanceof HTMLCanvasElement
          ? ((this.image.width = 1), (this.image.height = 1))
          : this.image instanceof ImageBitmap && this.image.close();
      } catch (a) {}
    },
    yy: function (a) {
      function b(v, P, I, J) {
        f = P * e + (v << 2);
        g = J * e + (I << 2);
        d[g] = d[f];
        d[g + 1] = d[f + 1];
        d[g + 2] = d[f + 2];
        d[g + 3] = d[f + 3];
      }
      for (
        var c = a.getImageData(0, 0, this.width, this.height),
          d = c.data,
          e = c.width << 2,
          f,
          g,
          h,
          k,
          l = this.jb.Yy(),
          m = this.jb.dl,
          n = 0;
        n < m;

      ) {
        h = l[n].frame;
        var q = h.x,
          r = h.y,
          w = q + h.width,
          G = r + h.height;
        for (k = r; k < G; ) b(q, k, q - 1, k), b(w - 1, k, w, k), ++k;
        h = q;
        for (k = r - 1; h < w; ) b(h, r, h, r - 1), b(h, G - 1, h, G), ++h;
        b(q, r, q - 1, r - 1);
        b(w - 1, r, w, r - 1);
        b(q, G - 1, q - 1, G);
        b(w - 1, G - 1, w, G);
        ++n;
      }
      a.putImageData(c, 0, 0);
    },
    eD: function (a, b) {
      var c = this;
      null == window.createImageBitmap
        ? a instanceof HTMLImageElement
          ? b()
          : this.ov(a, b)
        : a instanceof ImageBitmap
        ? b()
        : window
            .createImageBitmap(a, 0, 0, this.width, this.height, { premultiplyAlpha: "premultiply" })
            .then(function (d) {
              a = d;
              c.flags |= 2048;
              b();
            });
    },
    ov: function (a, b) {
      var c = this;
      if (a instanceof HTMLImageElement) b();
      else {
        var d = window.document.createElement("img");
        d.onload = function () {
          a = d;
          c.flags |= 2048;
          b();
        };
        d.src = a.toDataURL();
      }
    },
    fD: function (a, b) {
      if (!(a instanceof HTMLCanvasElement)) {
        var c = window.document.createElement("canvas");
        c.width = a.width;
        c.height = a.height;
        c.getContext("2d", null).drawImage(a, 0, 0);
        this.flags |= 2048;
      }
      b();
    },
    j: jb,
  });
  Xb.g = !0;
  Xb.D = Yb;
  Xb.prototype = u(Yb.prototype, {
    o: function () {
      Yb.prototype.o.call(this);
      this.Ht = this.jl = this.Go = this.nl = this.Mb = null;
    },
    Zi: function (a, b) {
      this.width = a;
      this.height = b;
    },
    j: Xb,
  });
  Vc.g = !0;
  Vc.D = Xb;
  Vc.prototype = u(Xb.prototype, {
    Ls: function (a) {
      null == a && (a = new yd());
      var b = {};
      b.alpha = a.alpha;
      b.desynchronized = a.desynchronized;
      this.context = this.canvas.getContext("2d", b);
    },
    Rs: function (a) {
      function b() {
        try {
          e.Ht();
        } catch (g) {}
      }
      function c(g) {
        g.preventDefault();
      }
      function d(g) {
        console.log(g.statusMessage || "Unknown error");
      }
      var e = this;
      null == a && (a = new yd());
      var f = {};
      f.alpha = a.alpha;
      f.desynchronized = a.desynchronized;
      f.alpha = a.alpha;
      f.desynchronized = a.desynchronized;
      f.antialias = a.antialias;
      f.depth = a.depth;
      f.failIfMajorPerformanceCaveat = a.failIfMajorPerformanceCaveat;
      f.powerPreference = a.powerPreference;
      f.premultipliedAlpha = a.premultipliedAlpha;
      f.preserveDrawingBuffer = a.preserveDrawingBuffer;
      f.stencil = a.stencil;
      this.addListener(this.canvas, "webglcontextcreationerror", d);
      this.addListener(this.canvas, "webglcontextlost", c);
      this.addListener(this.canvas, "webglcontextrestored", b);
      this.fq = !1;
      try {
        if ((this.context = this.canvas.getContext("webgl", f)) && this.context instanceof WebGLRenderingContext) {
          this.fq = !0;
          return;
        }
      } catch (g) {
        this.context = null;
      }
      this.canvas.removeEventListener("webglcontextcreationerror", d);
      this.canvas.removeEventListener("webglcontextlost", c);
      this.canvas.removeEventListener("webglcontextrestored", b);
    },
    valid: function () {
      if (this.fq) {
        var a = this.getContext();
        if (null != a && 37442 == a.getError()) return !1;
      }
      return Xb.prototype.valid.call(this);
    },
    fs: function () {
      if (this.Nn) return 0 == window.orientation ? 0 : 1;
      try {
        switch (window.screen.orientation.type) {
          case "landscape-primary":
          case "landscape-secondary":
            return 1;
          case "portrait-primary":
          case "portrait-secondary":
            return 0;
          default:
            return null;
        }
      } catch (a) {
        return null;
      }
    },
    o: function () {
      Xb.prototype.o.call(this);
      this.canvas.remove();
      this.context = this.canvas = null;
      for (var a = 0, b = this.lo; a < b.length; ) {
        var c = b[a];
        ++a;
        H.T(c, "target").removeEventListener(H.T(c, "type"), H.T(c, "listener"));
      }
      this.lo = null;
      window.onresize = null;
      window.oncontextmenu = null;
      window.onorientationchange = null;
      null != this.NB && this.NB.disconnect();
    },
    getContext: function () {
      return this.context;
    },
    gy: function () {
      this.addListener(window, "contextmenu", function (a) {
        a.preventDefault();
      });
      window.oncontextmenu = function () {
        return !1;
      };
    },
    dA: function () {
      try {
        return document.fullscreenEnabled;
      } catch (a) {
        return !1;
      }
    },
    Zi: function (a, b) {
      Xb.prototype.Zi.call(this, a, b);
      if (this.Iy) {
        this.canvas.width = a / this.Kc;
        this.canvas.height = b / this.Kc;
        var c = window.devicePixelRatio;
        this.canvas.style.width = a / c + "px";
        this.canvas.style.height = b / c + "px";
      } else
        1 <= this.Kc
          ? ((this.canvas.width = a / this.Kc), (this.canvas.height = b / this.Kc))
          : ((this.canvas.width = this.canvas.clientWidth), (this.canvas.height = this.canvas.clientHeight));
      this.MB(this.canvas.width, this.canvas.height);
      this.Jk || ((this.Jk = !0), this.XA());
      this.Mb();
    },
    iB: function () {
      var a = this,
        b = null;
      b = function () {
        if (null != a.canvas) {
          var c = window.devicePixelRatio,
            d = (a.canvas.clientWidth * c) | 0;
          c = (a.canvas.clientHeight * c) | 0;
          (a.width == d && a.height == c) || a.Zi(d, c);
          window.requestAnimationFrame(b);
        }
      };
      b(0);
    },
    Pu: function (a) {
      if (null != a)
        switch (a) {
          case "crisp-edges":
          case "pixelated":
            this.canvas.style.setProperty("image-rendering", "pixelated");
            this.canvas.style.setProperty("image-rendering", "-moz-crisp-edges");
            break;
          case "auto":
          case "high-quality":
          case "smooth":
            this.canvas.style.removeProperty("image-rendering");
        }
    },
    addListener: function (a, b, c) {
      var d = {};
      d.target = a;
      d.type = b;
      d.listener = c;
      this.lo.push(d);
      a.addEventListener(b, c);
    },
    j: Vc,
  });
  Ib.g = !0;
  Ib.prototype = { setActive: function () {}, j: Ib };
  ie.g = !0;
  ie.D = Ib;
  ie.prototype = u(Ib.prototype, {
    U: function () {
      var a = this.K.X;
      this.xa = this.K.createProgram(
        "\n\t\t\tattribute vec4 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\tattribute vec4 a_Color;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\t\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\tuniform mat4 u_Matrix;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = u_Matrix * a_Position;\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t\tv_Color = a_Color.bgra;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D u_Image;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\tuniform bool u_Fill;\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tif (u_Fill)\n\t\t\t\t\tgl_FragColor = v_Color;\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\tvec4 color = texture2D(u_Image, v_TexCoord);\n\t\t\t\t\tgl_FragColor = color + v_Color * color.w;\n\t\t\t\t}\n\t\t\t}\n\t\t"
      );
      this.Li = a.getUniformLocation(this.xa, "u_Matrix");
      this.Rf = a.getUniformLocation(this.xa, "u_InvTextureSize");
      this.sd = a.getAttribLocation(this.xa, "a_Position");
      this.wd = a.getAttribLocation(this.xa, "a_TexCoord");
      this.uf = a.getAttribLocation(this.xa, "a_Color");
      this.Mf = a.getUniformLocation(this.xa, "u_Image");
      this.Qr = a.getUniformLocation(this.xa, "u_Fill");
      this.lf = a.createBuffer();
      this.Tg = a.createBuffer();
    },
    setActive: function () {
      var a = this.K.X;
      a.useProgram(this.xa);
      a.bindBuffer(34962, this.lf);
      a.bindBuffer(34963, this.Tg);
      a.enableVertexAttribArray(this.sd);
      a.vertexAttribPointer(this.sd, 2, 5123, !1, 16, 0);
      a.enableVertexAttribArray(this.wd);
      a.vertexAttribPointer(this.wd, 2, 5123, !1, 16, 4);
      a.enableVertexAttribArray(this.uf);
      a.vertexAttribPointer(this.uf, 4, 5121, !0, 16, 8);
    },
    Wc: function (a) {
      var b = a.effect,
        c = b.ia,
        d = b.ua.hc,
        e = b.ua.cc,
        f = this.K.X,
        g = b.ua;
      f.uniform1i(this.Mf, 0);
      f.bindTexture(3553, g.Hb);
      a = b.zp ? U.Hp(this.K.ck, a.I.wk(), this.K.Fd) : this.K.Gh(a.I);
      U.sn(a, this.da, 0, !0);
      f.uniformMatrix4fv(this.Li, !1, this.da);
      f.uniform2f(this.Rf, 1 / d, 1 / e);
      f.uniform1i(this.Qr, 1);
      d = b.ia.ga * b.ia.sa;
      if (d > this.size) {
        this.size = d;
        this.Fb = new ArrayBuffer(64 * d);
        this.Zp = new Uint16Array(this.Fb);
        this.Iv = new Uint32Array(this.Fb);
        this.Za = new Uint16Array(6 * d);
        for (a = e = 0; e < d; )
          (g = 4 * e),
            (this.Za[a++] = g),
            (this.Za[a++] = g + 1),
            (this.Za[a++] = g + 2),
            (this.Za[a++] = g),
            (this.Za[a++] = g + 2),
            (this.Za[a++] = g + 3),
            ++e;
        f.bufferData(34963, this.Za, 35044);
      }
      e = b.$d;
      f = e.lineHeight;
      a = e.advance;
      var h = e.Mm,
        k = 0,
        l = c.i,
        m = this.Zp,
        n = this.Iv,
        q = (e = 0),
        r = b.fillColor;
      if (0 != r) {
        c = b.ia.ga * a;
        var w = b.ia.sa * f;
        g = q >> 1;
        m[g] = 0;
        m[g + 1] = w;
        m[g + 8] = 0;
        m[g + 9] = 0;
        m[g + 16] = c;
        m[g + 17] = 0;
        m[g + 24] = c;
        m[g + 25] = w;
        g = (q + 8) >> 2;
        n[g] = r;
        n[g + 4] = r;
        n[g + 8] = r;
        n[g + 12] = r;
        q += 64;
        ++k;
      }
      for (; e < d; )
        if (((g = l[e++]), !(0 > g.xm))) {
          var G = g.x * a;
          var v = g.y * f;
          c = a;
          w = f;
          r = -16777216 | g.xm;
          g = q >> 1;
          m[g] = G;
          m[g + 1] = v + w;
          m[g + 8] = G;
          m[g + 9] = v;
          m[g + 16] = G + c;
          m[g + 17] = v;
          m[g + 24] = G + c;
          m[g + 25] = v + w;
          g = (q + 8) >> 2;
          n[g] = r;
          n[g + 4] = r;
          n[g + 8] = r;
          n[g + 12] = r;
          q += 64;
          ++k;
        }
      this.drawElements(1, k);
      for (q = e = k = 0; e < d; )
        if (((g = l[e++]), !(32 >= g.code))) {
          var P = h[g.code];
          null == P && (P = h[63]);
          G = g.x * a;
          v = g.y * f + P.offsetY;
          c = P.w;
          w = P.P;
          b = P.x;
          P = P.y;
          var I = b + c;
          var J = P + w;
          r = g.jv;
          g = q >> 1;
          m[g] = G;
          m[g + 1] = v + w;
          m[g + 2] = b;
          m[g + 3] = J;
          m[g + 8] = G;
          m[g + 9] = v;
          m[g + 10] = b;
          m[g + 11] = P;
          m[g + 16] = G + c;
          m[g + 17] = v;
          m[g + 18] = I;
          m[g + 19] = P;
          m[g + 24] = G + c;
          m[g + 25] = v + w;
          m[g + 26] = I;
          m[g + 27] = J;
          g = (q + 8) >> 2;
          n[g] = r;
          n[g + 4] = r;
          n[g + 8] = r;
          n[g + 12] = r;
          q += 64;
          ++k;
        }
      this.drawElements(0, k);
    },
    drawElements: function (a, b) {
      if (0 != b) {
        var c = this.K.X;
        c.uniform1i(this.Qr, a);
        c.bufferData(34962, this.Fb, 35048);
        c.drawElements(4, 6 * b, 5123, 0);
      }
    },
    Af: function () {},
    j: ie,
  });
  yd.g = !0;
  yd.prototype = { j: yd };
  gc.g = !0;
  he.g = !0;
  he.D = Ib;
  he.prototype = u(Ib.prototype, {
    U: function () {
      var a = this.K.X;
      this.xa = this.K.createProgram(
        "\n\t\t\tattribute vec4 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\tattribute vec4 a_Color;\n\t\t\t\n\t\t\tuniform mat4 u_Matrix;\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = u_Matrix * a_Position;\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t\tv_Color = a_Color;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\t\n\t\t\tuniform sampler2D u_Image;\n\t\t\tuniform float u_Alpha;\n\t\t\tuniform vec4 u_ColorMultiplier;\n\t\t\tuniform vec4 u_ColorOffset;\n\t\t\t\n\t\t\tuniform bool u_sampleTexture;\n\t\t\tuniform bool u_transformColors;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tvec4 color;\n\t\t\t\n\t\t\t\tif (u_sampleTexture)\n\t\t\t\t\tcolor = texture2D(u_Image, v_TexCoord);\n\t\t\t\telse\n\t\t\t\t\tcolor = v_Color;\n\t\t\t\t\n\t\t\t\tif (u_transformColors)\n\t\t\t\t\tcolor = color * u_ColorMultiplier + u_ColorOffset;\n\t\t\t\t\n\t\t\t\tgl_FragColor = color * u_Alpha;\n\t\t\t}\n\t\t"
      );
      this.Li = a.getUniformLocation(this.xa, "u_Matrix");
      this.Mf = a.getUniformLocation(this.xa, "u_Image");
      this.ix = a.getUniformLocation(this.xa, "u_Alpha");
      this.er = a.getUniformLocation(this.xa, "u_ColorMultiplier");
      this.gr = a.getUniformLocation(this.xa, "u_ColorOffset");
      this.Cu = a.getUniformLocation(this.xa, "u_sampleTexture");
      this.uv = a.getUniformLocation(this.xa, "u_transformColors");
      this.Rf = a.getUniformLocation(this.xa, "u_InvTextureSize");
      this.Fb = new ArrayBuffer(128);
      this.nk = new Float32Array(this.Fb);
      for (
        var b = [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          c = 0,
          d = b.length;
        c < d;

      ) {
        var e = c++;
        this.nk[e] = b[e];
      }
      this.lf = a.createBuffer();
      a.bindBuffer(34962, this.lf);
      a.bufferData(34962, this.Fb, 35048);
    },
    setActive: function () {
      var a = this.K.X;
      a.useProgram(this.xa);
      a.bindBuffer(34962, this.lf);
      a.bindBuffer(34963, null);
      this.sd = a.getAttribLocation(this.xa, "a_Position");
      a.enableVertexAttribArray(this.sd);
      a.vertexAttribPointer(this.sd, 2, 5126, !1, 32, 0);
      this.wd = a.getAttribLocation(this.xa, "a_TexCoord");
      a.enableVertexAttribArray(this.wd);
      a.vertexAttribPointer(this.wd, 2, 5126, !1, 32, 8);
      this.uf = a.getAttribLocation(this.xa, "a_Color");
      a.enableVertexAttribArray(this.uf);
      a.vertexAttribPointer(this.uf, 4, 5126, !1, 32, 16);
    },
    Wc: function (a) {
      var b = this.K.X,
        c = this.nk,
        d = a.effect;
      if (d.type == ib.TYPE) {
        var e = d.ua,
          f = e.hc,
          g = e.cc,
          h = d.La,
          k = d.gh * f + h.x,
          l = d.hh * g + h.y,
          m = k + d.yh * h.width;
        d = l + d.zh * h.height;
        c[2] = k;
        c[3] = d;
        c[10] = m;
        c[11] = d;
        c[18] = k;
        c[19] = l;
        c[26] = m;
        c[27] = l;
        b.uniform1i(this.Mf, 0);
        b.bindTexture(3553, e.Hb);
        b.uniform1i(this.Cu, 1);
        b.uniform2f(this.Rf, 1 / f, 1 / g);
      } else
        d.type == Vb.TYPE &&
          ((k = d.color),
          (e = k.a),
          (f = k.r * e),
          (g = k.Fa * e),
          (k = k.b * e),
          (c[4] = f),
          (c[5] = g),
          (c[6] = k),
          (c[7] = e),
          (c[12] = f),
          (c[13] = g),
          (c[14] = k),
          (c[15] = e),
          (c[20] = f),
          (c[21] = g),
          (c[22] = k),
          (c[23] = e),
          (c[28] = f),
          (c[29] = g),
          (c[30] = k),
          (c[31] = e),
          b.uniform1i(this.Cu, 0));
      b.bufferData(34962, this.Fb, 35048);
      a = this.K.Gh(a.I);
      U.sn(a, this.da, 0, !0);
      b.uniformMatrix4fv(this.Li, !1, this.da);
      b.uniform1f(this.ix, this.K.ee);
      c = this.K.He;
      null != c
        ? (b.uniform1i(this.uv, 1),
          (a = c.rc),
          (c = c.offset),
          b.uniform4f(this.er, a.r, a.Fa, a.b, a.a),
          b.uniform4f(this.gr, c.r, c.Fa, c.b, c.a))
        : (b.uniform1i(this.uv, 0), b.uniform4f(this.er, 1, 1, 1, 1), b.uniform4f(this.gr, 0, 0, 0, 0));
      b.drawArrays(5, 0, 4);
    },
    Af: function () {},
    j: he,
  });
  ge.g = !0;
  ge.D = Ib;
  ge.prototype = u(Ib.prototype, {
    U: function () {
      var a = this.K.X;
      this.xa = this.K.createProgram(
        "\n\t\t\tattribute vec2 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\tattribute float a_Alpha;\n\t\t\t\n\t\t\tattribute vec4 a_ColorMultiplier;\n\t\t\tattribute vec4 a_ColorOffset;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying float v_Alpha;\n\t\t\tvarying vec4 v_ColorMultiplier;\n\t\t\tvarying vec4 v_ColorOffset;\n\t\t\t\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = vec4(a_Position, 1, 1);\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t\tv_Alpha = a_Alpha;\n\t\t\t\tv_ColorMultiplier = a_ColorMultiplier;\n\t\t\t\tv_ColorOffset = a_ColorOffset;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D u_Image;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying float v_Alpha;\n\t\t\tvarying vec4 v_ColorMultiplier;\n\t\t\tvarying vec4 v_ColorOffset;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tvec4 color;\n\t\t\t\tcolor = texture2D(u_Image, v_TexCoord) * v_Alpha;\n\t\t\t\tcolor = color * v_ColorMultiplier + v_ColorOffset;\n\t\t\t\tgl_FragColor = color;\n\t\t\t}\n\t\t"
      );
      this.sd = a.getAttribLocation(this.xa, "a_Position");
      this.wd = a.getAttribLocation(this.xa, "a_TexCoord");
      this.Hq = a.getAttribLocation(this.xa, "a_Alpha");
      this.dr = a.getAttribLocation(this.xa, "a_ColorMultiplier");
      this.fr = a.getAttribLocation(this.xa, "a_ColorOffset");
      this.Rf = a.getUniformLocation(this.xa, "u_InvTextureSize");
      this.Mf = a.getUniformLocation(this.xa, "u_Image");
      this.lf = a.createBuffer();
      this.Fb = new ArrayBuffer(131072);
      this.nk = new Float32Array(this.Fb);
      new Uint8Array(this.Fb);
      this.qD = new Uint16Array(this.Fb);
      this.rD = new Uint32Array(this.Fb);
      this.Tg = a.createBuffer();
      this.Za = new Uint16Array(6144);
      for (var b = 0, c = 0; 1024 > b; ) {
        var d = 4 * b;
        this.Za[c++] = d;
        this.Za[c++] = d + 1;
        this.Za[c++] = d + 2;
        this.Za[c++] = d;
        this.Za[c++] = d + 2;
        this.Za[c++] = d + 3;
        ++b;
      }
      a.bindBuffer(34963, this.Tg);
      a.bufferData(34963, this.Za, 35044);
    },
    setActive: function () {
      var a = this.K.X;
      a.useProgram(this.xa);
      a.bindBuffer(34962, this.lf);
      a.bindBuffer(34963, this.Tg);
      a.enableVertexAttribArray(this.sd);
      a.vertexAttribPointer(this.sd, 2, 5126, !1, 32, 0);
      a.enableVertexAttribArray(this.wd);
      a.vertexAttribPointer(this.wd, 2, 5123, !1, 32, 8);
      a.enableVertexAttribArray(this.Hq);
      a.vertexAttribPointer(this.Hq, 1, 5126, !1, 32, 12);
      a.enableVertexAttribArray(this.dr);
      a.vertexAttribPointer(this.dr, 4, 5121, !0, 32, 16);
      a.enableVertexAttribArray(this.fr);
      a.vertexAttribPointer(this.fr, 4, 5121, !0, 32, 20);
    },
    Wc: function () {},
    Af: function (a) {
      var b = a.l,
        c = this.K.X,
        d = a.i[0].effect;
      if (d.type == ib.TYPE) {
        if (((d = d.ua), 0 != (d.flags & 1024))) {
          c.uniform1i(this.Mf, 0);
          c.bindTexture(3553, d.Hb);
          c.uniform2f(this.Rf, 1 / d.hc, 1 / d.cc);
          d = 1024;
          0 < gc.oo && 1024 > gc.oo && (d = gc.oo);
          c = this.K.zg;
          this.K.zg = 12;
          this.K.ig(a.i[0]);
          this.K.zg = 3;
          for (var e = (b / d) | 0, f = 0; f < e; ) this.Qq(a, f * d, d), ++f;
          d *= e;
          b -= d;
          0 < b && this.Qq(a, d, b);
          this.K.zg = c;
        }
      } else debugger;
    },
    Qq: function (a, b, c) {
      this.CD(a, b, c);
      a = this.K.X;
      a.bufferData(34962, this.Fb, 35048);
      a.drawElements(4, 6 * c, 5123, 0);
    },
    CD: function (a, b, c) {
      var d = this.K,
        e = 0,
        f = 0,
        g = null,
        h = null,
        k = this.qD,
        l = this.rD,
        m = this.nk,
        n = 0,
        q = b;
      for (b += c; q < b; ) {
        var r = a.i[q++];
        this.K.ig(r);
        c = this.K.ee;
        var w = this.K.He;
        null != w && ((g = w.rc), (h = w.offset));
        var G = r.effect;
        0 == e && ((f = G.ua), (e = f.hc), (f = f.cc));
        var v = G.La;
        var P = G.gh * e + v.x;
        var I = G.hh * f + v.y;
        var J = P + G.yh * v.width;
        G = I + G.zh * v.height;
        r = d.Gh(r.I);
        var O = r.m11;
        var F = r.m21;
        var ha = r.m24;
        var Ca = r.m14;
        var Xa = r.m12 + Ca;
        var Rb = r.m22 + ha;
        r = 32 * n;
        v = r >> 2;
        m[v] = Ca;
        m[v + 1] = ha;
        m[v + 8] = Xa;
        m[v + 9] = Rb;
        m[v + 16] = O + Xa;
        m[v + 17] = F + Rb;
        m[v + 24] = O + Ca;
        m[v + 25] = F + ha;
        v = (r >> 1) + 4;
        k[v] = P;
        k[v + 1] = I;
        k[v + 16] = P;
        k[v + 17] = G;
        k[v + 32] = J;
        k[v + 33] = G;
        k[v + 48] = J;
        k[v + 49] = I;
        v = (r >> 2) + 3;
        m[v] = c;
        m[v + 8] = c;
        m[v + 16] = c;
        m[v + 24] = c;
        null != w
          ? ((c = ((255 * g.a) << 24) | ((255 * g.r) << 16) | ((255 * g.Fa) << 8) | (255 * g.b)),
            (w = ((255 * h.a) << 24) | ((255 * h.r) << 16) | ((255 * h.Fa) << 8) | (255 * h.b)),
            (v = (r >> 2) + 4),
            (l[v] = c),
            (l[v + 1] = w),
            (l[v + 8] = c),
            (l[v + 9] = w),
            (l[v + 16] = c),
            (l[v + 17] = w),
            (l[v + 24] = c),
            (l[v + 25] = w))
          : ((v = (r >> 2) + 4),
            (l[v] = -1),
            (l[v + 1] = 0),
            (l[v + 8] = -1),
            (l[v + 9] = 0),
            (l[v + 16] = -1),
            (l[v + 17] = 0),
            (l[v + 24] = -1),
            (l[v + 25] = 0));
        n += 4;
      }
    },
    j: ge,
  });
  fe.g = !0;
  fe.D = Ib;
  fe.prototype = u(Ib.prototype, {
    U: function () {
      var a = this.K.X;
      this.xa = this.K.createProgram(
        "\n\t\t\tattribute vec4 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\t\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\tuniform mat4 u_Matrix;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = u_Matrix * a_Position;\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D u_Image;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tvec4 color = texture2D(u_Image, v_TexCoord);\n\t\t\t\tgl_FragColor = color + v_Color * color.w;\n\t\t\t}\n\t\t"
      );
      this.Li = a.getUniformLocation(this.xa, "u_Matrix");
      this.Rf = a.getUniformLocation(this.xa, "u_InvTextureSize");
      this.sd = a.getAttribLocation(this.xa, "a_Position");
      this.wd = a.getAttribLocation(this.xa, "a_TexCoord");
      this.Mf = a.getUniformLocation(this.xa, "u_Image");
      this.lf = a.createBuffer();
      this.Tg = a.createBuffer();
    },
    setActive: function () {
      var a = this.K.X;
      a.useProgram(this.xa);
      a.bindBuffer(34962, this.lf);
      a.bindBuffer(34963, this.Tg);
      a.enableVertexAttribArray(this.sd);
      a.vertexAttribPointer(this.sd, 2, 5123, !1, 16, 0);
      a.enableVertexAttribArray(this.wd);
      a.vertexAttribPointer(this.wd, 2, 5123, !1, 16, 4);
      a.enableVertexAttribArray(this.uf);
      a.vertexAttribPointer(this.uf, 4, 5121, !0, 16, 8);
    },
    Wc: function (a) {
      var b = a.effect,
        c = b.ua.hc,
        d = b.ua.cc,
        e = this.K.X,
        f = b.ua;
      e.uniform1i(this.Mf, 0);
      e.bindTexture(3553, f.Hb);
      a = b.zp ? U.Hp(this.K.ck, a.I.wk(), this.K.Fd) : this.K.Gh(a.I);
      U.sn(a, this.da, 0, !0);
      e.uniformMatrix4fv(this.Li, !1, this.da);
      e.uniform2f(this.Rf, 1 / c, 1 / d);
      c = b.qh;
      d = b.rh;
      var g = b.bm,
        h = b.am,
        k = b.bq;
      a = b.aq;
      var l;
      f = b.kv;
      debugger;
      h = (h - g) * (a - k);
      if (h > this.size) {
        this.size = h;
        this.Fb = new ArrayBuffer(64 * h);
        this.Zp = new Uint16Array(this.Fb);
        this.Iv = new Uint32Array(this.Fb);
        this.ED = new Float32Array(this.Fb);
        this.Za = new Uint16Array(6 * h);
        for (var m = 0, n = 0; m < h; )
          (g = 4 * m),
            (this.Za[n++] = g),
            (this.Za[n++] = g + 1),
            (this.Za[n++] = g + 2),
            (this.Za[n++] = g),
            (this.Za[n++] = g + 2),
            (this.Za[n++] = g + 3),
            ++m;
        e.bufferData(34963, this.Za, 35044);
      }
      m = b.Lp;
      n = b.jb;
      for (var q = this.ED, r = this.Zp, w = 0, G = 0; k <= a; ) {
        g = b.bm;
        h = b.am;
        for (l = g; l <= h; ) {
          var v = l * m + c;
          var P = k * m + d;
          g = -1;
          f.inRange(l, k) && (g = f.i[k * f.ga + l]);
          if (!(0 >= g)) {
            var I = n.vk(g).frame;
            g = w >> 2;
            var J = I.x,
              O = I.y,
              F = J + I.width;
            I = O + I.height;
            q[g] = v;
            q[g + 1] = P + m;
            q[g + 4] = v;
            q[g + 4 + 1] = P;
            q[g + 8] = v + m;
            q[g + 8 + 1] = P;
            q[g + 12] = v + m;
            q[g + 12 + 1] = P + m;
            g = (w + 8) >> 1;
            r[g] = J;
            r[g + 1] = I;
            r[g + 8] = J;
            r[g + 9] = O;
            r[g + 16] = F;
            r[g + 17] = O;
            r[g + 24] = F;
            r[g + 25] = I;
            w += 64;
            ++G;
          }
          ++l;
        }
        ++k;
      }
      e.bufferData(34962, this.Fb, 35048);
      e.drawElements(4, 6 * G, 5123, 0);
    },
    Af: function () {},
    j: fe,
  });
  Uc.g = !0;
  Uc.D = va;
  Uc.prototype = u(va.prototype, {
    o: function () {
      va.prototype.o.call(this);
    },
    ej: function (a) {
      va.prototype.ej.call(this, a);
      this.X = a.getContext();
    },
    createTexture: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == a && (a = -32768);
      return va.prototype.createTexture.call(this, a, b, c, d, e);
    },
    clear: function () {
      var a = this.Nb;
      if (null != a && a.valid() && null != this.X) {
        var b = a.Pd,
          c = b.height,
          d = b.x,
          e = a.Yh - b.y - c,
          f = b.width;
        this.X.viewport(d, e, f, c);
        b = a.viewport;
        var g = b.u,
          h = b.A,
          k = b.B;
        0 == (0 == b.s && 0 == g && 1 == h && 1 == k)
          ? (this.X.enable(3089), this.X.scissor(d, e, f, c))
          : this.X.disable(3089);
        a = a.color;
        this.X.clearColor(a.r, a.Fa, a.b, a.a);
        this.X.clear(16640);
      }
    },
    en: function (a) {
      if (gc.qy) {
        var b = a.iterator(),
          c = b.i[b.wa++];
        this.zd.ec(a.l);
        var d = this.zd;
        d.l = 0;
        d = this.zd;
        d.i[d.l++] = c;
        var e = c.Dp;
        for (a = c.effect; b.wa < b.Va; )
          (c = b.i[b.wa++]),
            a.Tc == c.effect.Tc && (e & 12) == (c.Dp & 12)
              ? ((d = this.zd), (d.i[d.l++] = c))
              : (this.Af(), (this.zd.l = 0), (a = this.zd), (a.i[a.l++] = c), (e = c.Dp), (a = c.effect));
        0 < this.zd.l && this.Af();
      } else va.prototype.en.call(this, a);
    },
    Jj: function () {},
    kk: function () {},
    Vn: function (a, b) {
      return new ee(this, a, b);
    },
    Af: function () {
      var a = this.zd.i[0].effect;
      if (a.type == ib.TYPE) this.oi(a, !0).Af(this.zd);
      else {
        var b = this.zd;
        a = b.i;
        var c = 0;
        for (b = b.l; c < b; ) {
          var d = c++;
          this.Hr(a[d]);
        }
      }
    },
    Fr: function (a) {
      this.oi(a, !1).Wc(this.Ie);
    },
    Er: function (a) {
      this.oi(a, !1).Wc(this.Ie);
    },
    Gr: function (a) {
      this.oi(a, !1).Wc(this.Ie);
    },
    Dr: function (a) {
      this.oi(a, !1).Wc(this.Ie);
    },
    oi: function (a, b) {
      var c = 0;
      switch (a.type) {
        case Rc.TYPE:
          c = 4;
          break;
        case Sc.TYPE:
          c = 3;
          break;
        case ib.TYPE:
        case Vb.TYPE:
          c = b ? 2 : 1;
      }
      a = this.ku[c];
      if (null == a) {
        switch (c) {
          case 1:
            a = new he(this);
            break;
          case 2:
            a = new ge(this);
            break;
          case 3:
            a = new ie(this);
            break;
          case 4:
            a = new fe(this);
            break;
          default:
            a = null;
        }
        this.ku[c] = a;
      }
      this.tr != a && ((this.tr = a), a.setActive());
      return a;
    },
    Gl: function (a) {
      var b = 0,
        c = 0;
      switch (a.pa) {
        case 0:
          b = 1;
          c = 0;
          break;
        case 1:
          b = 1;
          c = 771;
          break;
        case 2:
          b = 774;
          c = 771;
          break;
        case 3:
          b = 770;
          c = 772;
          break;
        case 4:
          b = 1;
          c = 769;
          break;
        case 5:
          (c = a.jy), (b = this.Rq[a.src.pa]), (c = this.Rq[c.pa]);
      }
      if (this.Xu != b || this.zr != c) this.X.enable(3042), this.X.blendFunc(b, c), (this.Xu = b), (this.zr = c);
    },
    createProgram: function (a, b) {
      a = this.jt(35633, a);
      b = this.jt(35632, b);
      var c = this.X.createProgram();
      this.X.attachShader(c, a);
      this.X.attachShader(c, b);
      this.X.linkProgram(c);
      this.X.getProgramParameter(c, 35714) ||
        this.X.isContextLost() ||
        (this.X.deleteProgram(c), this.X.deleteShader(b), this.X.deleteShader(a), (c = null));
      this.X.detachShader(c, a);
      this.X.deleteShader(a);
      this.X.detachShader(c, b);
      this.X.deleteShader(b);
      return c;
    },
    jt: function (a, b) {
      a = this.X.createShader(a);
      this.X.shaderSource(a, b);
      this.X.compileShader(a);
      return this.X.getShaderParameter(a, 35713) || this.X.isContextLost() ? a : (this.X.deleteShader(a), null);
    },
    j: Uc,
  });
  ee.g = !0;
  ee.D = jb;
  ee.prototype = u(jb.prototype, {
    getContext: function () {
      return this.X;
    },
    pp: function (a) {
      jb.prototype.pp.call(this, a);
      this.Hb = a.Hb;
      a = 0;
      for (var b = this.children; a < b.length; ) {
        var c = b[a];
        ++a;
        c.Hb = this.Hb;
      }
    },
    um: function (a, b) {
      a = jb.prototype.um.call(this, a, b);
      0 < (this.flags & 1024) && (a.Hb = this.Hb);
      return a;
    },
    Ho: function () {
      this.X = this.K.X;
      this.Hb = this.X.createTexture();
      this.X.bindTexture(3553, this.Hb);
      try {
        var a = this.image instanceof ImageBitmap;
      } catch (d) {
        a = !1;
      }
      a || this.X.pixelStorei(37441, !0);
      a = 0 < (this.flags & 4) ? 10497 : 33071;
      var b = 0 < (this.flags & 8) ? 9729 : 9728,
        c = 0 < (this.flags & 16) ? 9729 : 9728;
      this.X.texParameteri(3553, 10242, a);
      this.X.texParameteri(3553, 10243, a);
      this.X.texParameteri(3553, 10241, b);
      this.X.texParameteri(3553, 10240, c);
      a = 0 < (this.flags & 1) ? 6407 : 6408;
      this.X.texImage2D(3553, 0, a, a, 5121, this.image);
      0 < (this.flags & 480) &&
        ((a = 9984),
        0 < (this.flags & 64) && (a = 9985),
        0 < (this.flags & 128) && (a = 9986),
        0 < (this.flags & 256) && (a = 9987),
        this.X.texParameteri(3553, 10241, a),
        this.X.generateMipmap(3553));
      a = 0;
      for (b = this.children; a < b.length; ) (c = b[a]), ++a, (c.Hb = this.Hb);
      jb.prototype.Ho.call(this);
    },
    Gd: function () {
      null == this.parent && this.K.X.deleteTexture(this.Hb);
      this.Hb = null;
      jb.prototype.Gd.call(this);
    },
    Cl: function () {
      return jb.prototype.Cl.call(this) ? !0 : 0 < (this.flags & 484) ? !this.Ai() : !1;
    },
    bind: function () {
      jb.prototype.bind.call(this);
      null == this.Pr && (this.Pr = this.X.createFramebuffer());
      this.X.bindTexture(3553, this.Hb);
      this.X.bindFramebuffer(36160, this.Pr);
      this.X.framebufferTexture2D(36160, 36064, 3553, this.Hb, 0);
    },
    Rp: function () {
      jb.prototype.Rp.call(this);
      this.X.bindFramebuffer(36160, null);
    },
    j: ee,
  });
  de.g = !0;
  de.prototype = {
    nC: function (a) {
      this.Kc = a;
      return this;
    },
    $B: function (a) {
      this.Gq = a;
      return this;
    },
    aC: function (a) {
      this.Jq = a;
    },
    j: de,
  };
  wf.g = !0;
  wf.prototype = { j: wf };
  vf.g = !0;
  vf.prototype = { j: vf };
  Pc.g = !0;
  Pc.prototype = {
    o: function () {
      for (var a = this.controllers, b; null != a; ) (b = a.next), a.o(), (a = b);
    },
    Ka: function (a) {
      null != this.controllers && (a.next = this.controllers);
      this.controllers = a;
      a.object = this;
    },
    detach: function (a) {
      if (this.controllers == a) this.controllers = this.controllers.next;
      else {
        for (var b = this.controllers; b.next != a; ) b = b.next;
        b.next = a.next;
      }
      a.next = null;
      a.object = null;
    },
    Cy: function (a) {
      for (var b = this.controllers; null != b; ) {
        if (b.type == a) return b;
        b = b.next;
      }
      return null;
    },
    Sp: function (a) {
      if (null == this.controllers || !this.Wx) return !1;
      for (var b = !1, c = this.controllers, d; null != c; ) (d = c.next), c.update(a) && (b = !0), (c = d);
      return b;
    },
    j: Pc,
  };
  qa.g = !0;
  qa.Ea = function () {
    return ++qa.R;
  };
  qa.prototype = {
    o: function () {
      null != this.object && (this.object.detach(this), (this.object = null));
      this.repeat = null;
      this.jd = !0;
      qa.kq--;
    },
    Uk: function () {
      this.Gd = !0;
      0 != this.ze && qa.fm--;
      this.ze = !1;
      this.dc = 0;
      this.Md = qa.oq;
    },
    update: function (a) {
      return this.ze
        ? ((this.dc += a * this.Gp), null == this.object ? !1 : this.M(this.dc))
        : this.Gd
        ? ((this.dc += a), this.dc > qa.oq && this.o(), !0)
        : !1;
    },
    rn: function () {
      var a = this.dc + this.Se;
      if (0 == this.repeat) return z.Ix(a, this.Gc, this.Md);
      var b = this.Md - this.Gc;
      if (0 < b) {
        var c = (a - this.Gc) / b;
        a = Math.floor(c);
        c -= a;
        return 1 == this.repeat ? this.Gc + c * b : 0 == (a & 1) ? this.Gc + c * b : this.Md - c * b;
      }
      return this.Gc;
    },
    j: qa,
  };
  Oc.g = !0;
  Oc.D = qa;
  Oc.prototype = u(qa.prototype, {
    o: function () {
      this.hl = this.gl = this.Yb = null;
      qa.prototype.o.call(this);
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = -1);
      null == b && (b = 0);
      this.Yb = a;
      this.$k = b;
      this.Mi = 0 > c ? a.frames.length - 1 : c;
      this.Gc = this.Yb.Sc[b];
      this.Md = this.Yb.Sc[this.Mi + 1];
      this.dc = this.Gc;
      this.dc += d;
      1 != this.ze && qa.fm++;
      this.ze = !0;
      this.Gd = !1;
      this.index = -1;
      this.lastIndex = b;
      this.M(this.dc);
    },
    M: function () {
      var a = this.rn(),
        b = this.Yb.og;
      if (1 == b) var c = (this.lastIndex = 0);
      else if (a >= this.Yb.oj) c = this.lastIndex = b - 1;
      else {
        if (0 < this.Yb.Sm) c = (a / this.Yb.Sm) | 0;
        else {
          c = 0;
          var d = this.Yb.Sc,
            e = d[this.lastIndex + 1];
          if (a >= d[this.lastIndex] && a <= e) c = this.lastIndex;
          else if (16 > b)
            for (e = 0; e <= b; ) {
              if (d[e] >= a) {
                c = e - 1;
                break;
              }
              ++e;
            }
          else (c = ba.nx(d, a, b - 1)), 0 > c && ((c = ~c), --c);
        }
        this.lastIndex = c;
      }
      c < this.$k ? (c = this.$k) : c > this.Mi && (c = this.Mi);
      c != this.index &&
        ((this.index = c),
        this.hl(this.Yb.values[c], c, a),
        c >= this.Mi &&
          (this.gl(),
          0 == this.repeat &&
            (0 < this.Bl--
              ? ((this.dc = this.Gc), (this.index = -1), (this.lastIndex = this.$k), this.M(this.dc))
              : (this.Uk(), (this.Yb = null)))));
      return !0;
    },
    j: Oc,
  });
  uf.g = !0;
  uf.prototype = { j: uf };
  xd.g = !0;
  xd.D = qa;
  xd.prototype = u(qa.prototype, {
    o: function () {
      this.Fo = null;
      qa.prototype.o.call(this);
    },
    M: function (a) {
      var b = this.rn(),
        c = this.data.Sc,
        d;
      if (b <= c[0]) var e = (d = this.lastIndex = b = 0);
      else if (b >= c[this.data.og - 1]) (b = 0), (e = d = this.lastIndex = this.data.og - 1);
      else if (b > c[this.lastIndex]) {
        for (d = this.lastIndex + 1; b >= c[d]; ) (this.lastIndex = d), ++d;
        e = this.lastIndex;
        b = (b - c[e]) / (c[d] - c[e]);
      } else if (b < c[this.lastIndex]) {
        for (d = this.lastIndex - 1; b <= c[d]; ) (this.lastIndex = d), --d;
        e = d;
        d = this.lastIndex;
        b = (b - c[e]) / (c[d] - c[e]);
      } else (b = 0), (e = d = this.lastIndex);
      this.gC(e, d, b);
      this.bE(this.bt);
      return a > this.Md && 0 == this.repeat ? (null != this.Fo && (this.Fo(), (this.Fo = null)), this.Uk(), !1) : !0;
    },
    gC: function (a, b, c) {
      var d = this.data.parameters,
        e = this.bt;
      if (a != b) {
        c = this.data.easing[a](c);
        var f = this.data.MD[a];
        if (0 < (f & 1)) {
          var g = 0;
          e.Ah = z.Wb(d[6 * a + g], d[6 * b + g], c);
        }
        0 < (f & 2) && ((g = 1), (e.Nc = z.Wb(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 4) && ((g = 2), (e.rotation = z.Wb(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 8) && ((g = 3), (e.wv = z.Wb(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 16) && ((g = 4), (e.xv = z.Wb(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 32) && ((g = 5), (e.alpha = z.Wb(d[6 * a + g], d[6 * b + g], c)));
      } else
        (e.Ah = d[6 * b]),
          (e.Nc = d[6 * b + 1]),
          (e.rotation = d[6 * b + 2]),
          (e.wv = d[6 * b + 3]),
          (e.xv = d[6 * b + 4]),
          (e.alpha = d[6 * b + 5]);
    },
    j: xd,
  });
  Wb.g = !0;
  Wb.D = qa;
  Wb.prototype = u(qa.prototype, {
    o: function () {
      this.oe = this.Od = this.easing = null;
      qa.prototype.o.call(this);
    },
    rj: function (a, b, c, d, e) {
      this.key = a;
      this.QC = b;
      this.Jr = c;
      this.easing = e;
      this.Gc = this.dc = 0;
      this.Md = d;
      1 != this.ze && qa.fm++;
      this.ze = !0;
      this.Gd = !1;
    },
    stop: function () {
      this.Od = this.oe = null;
      this.Uk();
    },
    M: function (a) {
      if (a >= this.Md && 0 == this.repeat) return this.Uk(), this.Od(this.key, this.Jr), this.oe(this.key), !1;
      a = z.Wb(this.QC, this.Jr, this.easing((this.rn() - this.Gc) / (this.Md - this.Gc)));
      this.Od(this.key, a);
      return !0;
    },
    j: Wb,
  });
  Fa.g = !0;
  Fa.Ea = function () {
    return ++Fa.R;
  };
  Fa.D = Tc;
  Fa.prototype = u(Tc.prototype, { o: function () {}, j: Fa });
  Sc.g = !0;
  Sc.D = Fa;
  Sc.prototype = u(Fa.prototype, {
    VD: function () {
      return this.ia.ga;
    },
    YD: function () {
      return this.ia.sa;
    },
    Wc: function (a) {
      a.Dr(this);
    },
    j: Sc,
  });
  tf.g = !0;
  tf.prototype = { j: tf };
  Vb.g = !0;
  Vb.D = Fa;
  Vb.prototype = u(Fa.prototype, {
    Wc: function (a) {
      a.Er(this);
    },
    j: Vb,
  });
  ib.g = !0;
  ib.D = Fa;
  ib.prototype = u(Fa.prototype, {
    cf: function (a) {
      this.ua = a;
      this.La.x = 0;
      this.La.y = 0;
      this.La.width = a.width;
      this.La.height = a.height;
      this.frame = -1;
      this.flags = 0;
      this.Tc = (a.group << 4) | this.type;
      a.BB(L(this, this.refresh));
      return this;
    },
    op: function (a) {
      if (this.frame != a) {
        this.frame = a;
        var b = this.La;
        a = this.ua.jb.vk(a).frame;
        b.x = a.x;
        b.y = a.y;
        b.width = a.width;
        b.height = a.height;
      }
    },
    o: function () {
      Fa.prototype.o.call(this);
      null != this.ua && 0 == (this.ua.flags & 4096) && this.ua.tD(L(this, this.refresh));
      this.ua = this.La = null;
    },
    Wc: function (a) {
      if (null != this.ua) {
        var b = this.ua.flags;
        0 == (b & 1024) || 0 < (b & 4096) || a.Fr(this);
      }
    },
    refresh: function () {
      if (null != this.ua)
        if (0 > this.frame) this.cf(this.ua);
        else {
          var a = this.frame;
          this.frame = -1;
          this.op(a);
        }
    },
    j: ib,
  });
  Rc.g = !0;
  Rc.D = Fa;
  Rc.prototype = u(Fa.prototype, {
    Wc: function (a) {
      var b = a.Fe,
        c = a.Nb.Pd,
        d = c.height;
      var e = c.width;
      e /= b.Th;
      d /= b.Th;
      c = new y();
      c.x = e / 2;
      c.y = d / 2;
      if (0 != b.jc) {
        d = 0.0174532925199432 * b.jc;
        e = Math.cos(d);
        var f = Math.sin(d),
          g = e * c.x,
          h = f * c.y;
        d = z.max(-3.4e38, -g - h);
        d = z.max(d, g - h);
        d = z.max(d, -g + h);
        d = z.max(d, g + h);
        g = -f * c.x;
        h = e * c.y;
        e = z.max(-3.4e38, -g - h);
        e = z.max(e, g - h);
        e = z.max(e, -g + h);
        e = z.max(e, g + h);
        c.x = d;
        c.y = e;
      }
      this.rh = this.qh = 0;
      1 != this.rl && 0 < this.rl && ((this.qh = b.ra * this.rl), (this.rh = b.ma * this.rl));
      e = 1 / this.Lp;
      this.bm = (((b.ra - c.x - this.qh) * e) | 0) - 1;
      this.bq = (((b.ma - c.y - this.rh) * e) | 0) - 1;
      this.am = (((b.ra + c.x - this.qh) * e) | 0) + 1;
      this.aq = (((b.ma + c.y - this.rh) * e) | 0) + 1;
      a.Gr(this);
    },
    j: Rc,
  });
  var nc = (cc.e3 = {
    mf: !0,
    Cc: null,
    Vv: { Ha: "e30", pa: 0, Aa: "e3", toString: sa },
    qq: { Ha: "e31", pa: 1, Aa: "e3", toString: sa },
    Uv: { Ha: "e32", pa: 2, Aa: "e3", toString: sa },
    pq: { Ha: "e33", pa: 3, Aa: "e3", toString: sa },
    Yv: { Ha: "e34", pa: 4, Aa: "e3", toString: sa },
    $v:
      ((Mb = function (a, b) {
        return { pa: 5, src: a, dst: b, Aa: "e3", toString: sa };
      }),
      (Mb.Ha = "EUser"),
      (Mb.Bj = ["src", "dst"]),
      Mb),
  });
  nc.Cc = [nc.Vv, nc.qq, nc.Uv, nc.pq, nc.Yv, nc.$v];
  var oc = (cc.e4 = {
    mf: !0,
    Cc: null,
    lm: { Ha: "e40", pa: 0, Aa: "e4", toString: sa },
    hm: { Ha: "e41", pa: 1, Aa: "e4", toString: sa },
    Tv: { Ha: "e42", pa: 2, Aa: "e4", toString: sa },
    Wv: { Ha: "e43", pa: 3, Aa: "e4", toString: sa },
    km: { Ha: "e44", pa: 4, Aa: "e4", toString: sa },
    jm: { Ha: "e45", pa: 5, Aa: "e4", toString: sa },
    gm: { Ha: "e46", pa: 6, Aa: "e4", toString: sa },
    im: { Ha: "e47", pa: 7, Aa: "e4", toString: sa },
  });
  oc.Cc = [oc.lm, oc.hm, oc.Tv, oc.Wv, oc.km, oc.jm, oc.gm, oc.im];
  var pc = (cc.e5 = {
    mf: !0,
    Cc: null,
    lm: { Ha: "e50", pa: 0, Aa: "e5", toString: sa },
    hm: { Ha: "e51", pa: 1, Aa: "e5", toString: sa },
    Zv: { Ha: "e52", pa: 2, Aa: "e5", toString: sa },
    Xv: { Ha: "e53", pa: 3, Aa: "e5", toString: sa },
    km: { Ha: "e54", pa: 4, Aa: "e5", toString: sa },
    jm: { Ha: "e55", pa: 5, Aa: "e5", toString: sa },
    gm: { Ha: "e56", pa: 6, Aa: "e5", toString: sa },
    im: { Ha: "e57", pa: 7, Aa: "e5", toString: sa },
  });
  pc.Cc = [pc.lm, pc.hm, pc.Zv, pc.Xv, pc.km, pc.jm, pc.gm, pc.im];
  Za.g = !0;
  Za.prototype = {
    collapse: function () {
      throw 24;
    },
    j: Za,
  };
  Hb.g = !0;
  Hb.D = Za;
  Hb.prototype = u(Za.prototype, {
    collapse: function () {
      return this;
    },
    j: Hb,
  });
  wd.g = !0;
  wd.D = Za;
  wd.prototype = u(Za.prototype, {
    collapse: function (a) {
      for (var b = 1, c, d = 0, e = a.Ma; d < e; ) (c = d++), (c = a.i[c]), (b *= c.alpha);
      null == this.collapsed && (this.collapsed = new wd(this.alpha));
      this.collapsed.alpha = b;
      return this.collapsed;
    },
    j: wd,
  });
  Gb.g = !0;
  Gb.prototype = {
    o: function () {
      this.G = null;
    },
    Fn: function () {},
    from: function () {},
    Qp: function (a, b) {
      var c = this.G,
        d = b.G;
      if (0 < (a.m & 1)) (d.x = c.x), (d.y = c.y);
      else {
        if (0 < (a.m & 2)) {
          var e = c.x * a.scale.x;
          c = c.y * a.scale.y;
          if (0 >= (a.m & 16)) {
            var f = e,
              g = a.da;
            e = g.m11 * e + g.m12 * c;
            c = g.m21 * f + g.m22 * c;
          }
        } else (e = c.x), (c = c.y), (f = e), (g = a.da), (e = g.m11 * e + g.m12 * c), (c = g.m21 * f + g.m22 * c);
        d.x = e + a.translate.x;
        d.y = c + a.translate.y;
      }
      g = Math;
      b.ca =
        (0 < (a.m & 2)
          ? Math.max(g.abs(a.scale.x), g.abs(a.scale.y))
          : Math.max(g.abs(a.da.m11) + g.abs(a.da.m12), g.abs(a.da.m21) + g.abs(a.da.m22))) * this.ca;
    },
    j: Gb,
  };
  ce.g = !0;
  ce.D = Gb;
  ce.prototype = u(Gb.prototype, {
    o: function () {
      this.box = null;
      Gb.prototype.o.call(this);
    },
    contains: function (a) {
      var b = this.box,
        c = a.x;
      a = a.y;
      return c > b.s && c < b.A && a > b.u ? a < b.B : !1;
    },
    Fn: function (a) {
      switch (a.type) {
        case 1:
          var b = a.G;
          a = a.ca;
          var c = this.box,
            d = b.x - a,
            e = b.y - a;
          d < c.s && (c.s = d);
          d > c.A && (c.A = d);
          e < c.u && (c.u = e);
          e > c.B && (c.B = e);
          c = this.box;
          d = b.x + a;
          e = b.y + a;
          d < c.s && (c.s = d);
          d > c.A && (c.A = d);
          e < c.u && (c.u = e);
          e > c.B && (c.B = e);
          break;
        case 2:
          (c = this.box),
            (b = a.box),
            b.s < c.s && (c.s = b.s),
            b.A > c.A && (c.A = b.A),
            b.u < c.u && (c.u = b.u),
            b.B > c.B && (c.B = b.B);
      }
      c = this.box;
      b = 0.5 * (c.A - c.s);
      c = this.box;
      c = 0.5 * (c.B - c.u);
      this.G.x = this.box.s + b;
      this.G.y = this.box.u + c;
      this.ca = Math.sqrt(b * b + c * c);
    },
    from: function (a) {
      var b = a.G,
        c = a.ca;
      switch (a.type) {
        case 1:
          this.box.s = b.x - c;
          this.box.u = b.y - c;
          this.box.A = b.x + c;
          this.box.B = b.y + c;
          break;
        case 2:
          var d = this.box;
          a = a.box;
          d.s = a.s;
          d.u = a.u;
          d.A = a.A;
          d.B = a.B;
      }
      d = this.G;
      d.x = b.x;
      d.y = b.y;
      d.z = b.z;
      this.ca = c;
    },
    Kv: function (a) {
      var b = a.Wa.x,
        c = a.Wa.y;
      a = a.lc;
      var d = this.box.s,
        e = this.box.u,
        f = this.box.A,
        g = this.box.B;
      if (1 == b) return f < a ? -1 : d > a ? 1 : 0;
      if (-1 == b) return d > -a ? -1 : f < -a ? 1 : 0;
      if (1 == c) return g < a ? -1 : e > a ? 1 : 0;
      if (-1 == b) return e > -a ? -1 : g < -a ? 1 : 0;
      var h = 0 | Ld.Ph(d, e, b, c, a);
      h |= Ld.Ph(f, e, b, c, a) << 1;
      h |= Ld.Ph(d, g, b, c, a) << 2;
      h |= Ld.Ph(f, g, b, c, a) << 3;
      return h == $f.rq[4] ? -1 : 0 == h ? 1 : 0;
    },
    Qp: function (a, b) {
      Gb.prototype.Qp.call(this, a, b);
      b = b.box;
      var c = new y(),
        d = c;
      c = this.box;
      d.x = c.s + 0.5 * (c.A - c.s);
      c = this.box;
      d.y = c.u + 0.5 * (c.B - c.u);
      a.Ra(d, d);
      b.s = d.x;
      b.u = d.y;
      b.A = d.x;
      b.B = d.y;
      if (0 < (a.m & 2))
        (d = a.da),
          (c = a.scale),
          (a = 0.5 * c.x),
          (c = 0.5 * c.y),
          0 < d.m11 ? ((b.s -= d.m11 * a), (b.A += d.m11 * a)) : ((b.s += d.m11 * a), (b.A -= d.m11 * a)),
          0 < d.m12 ? ((b.s -= d.m12 * c), (b.A += d.m12 * c)) : ((b.s += d.m12 * c), (b.A -= d.m12 * c)),
          0 < d.m21 ? ((b.u -= d.m21 * a), (b.B += d.m21 * a)) : ((b.u += d.m21 * a), (b.B -= d.m21 * a)),
          0 < d.m22 ? ((b.u -= d.m22 * c), (b.B += d.m22 * c)) : ((b.u += d.m22 * c), (b.B -= d.m22 * c));
      else {
        d = a.da;
        var e = d.m11,
          f = d.m12;
        a = Math.sqrt(e * e + f * f);
        d = (e * d.m22 - f * d.m21) / a;
        a *= 0.5;
        c = 0.5 * d;
        e = Math.atan2(f, e);
        d = Math.cos(e);
        e = Math.sin(e);
        0 < d ? ((b.s -= d * a), (b.A += d * a)) : ((b.s += d * a), (b.A -= d * a));
        0 < e ? ((b.s -= e * c), (b.A += e * c)) : ((b.s += e * c), (b.A -= e * c));
        0 < -e ? ((b.u -= -e * a), (b.B += -e * a)) : ((b.u += -e * a), (b.B -= -e * a));
        0 < d ? ((b.u -= d * c), (b.B += d * c)) : ((b.u += d * c), (b.B -= d * c));
      }
    },
    j: ce,
  });
  lb.g = !0;
  lb.prototype = {
    Ll: function (a, b) {
      this.m |= 3;
      this.vo = a;
      this.kn = b;
      this.hg();
    },
    ea: function (a) {
      if (a == this.ra) return a;
      this.m |= 4;
      this.hg();
      return (this.ra = a);
    },
    fa: function (a) {
      if (a == this.ma) return a;
      this.m |= 4;
      this.hg();
      return (this.ma = a);
    },
    EC: function (a) {
      0.001 > a && (a = 0.001);
      this.m |= 4;
      this.hg();
      return (this.Th = a);
    },
    Ih: function (a) {
      if (a == this.jc) return a;
      this.m |= 4;
      this.hg();
      return (this.jc = a);
    },
    sC: function (a) {
      this.K = a;
      this.hg();
    },
    reset: function () {
      if (null == this.K || null == this.K.Nb) {
        var a = this.size;
        a.x = lb.mq;
        a.y = lb.lq;
      } else {
        var b = this.K.Nb;
        a = b.Pd;
        var c = a.width,
          d = a.height;
        a = this.size;
        a.x = c * b.Kc;
        a.y = d * b.Kc;
      }
      this.ea(this.fa(this.Ih(0)));
      this.EC(1);
      this.m |= 6;
      this.hg();
    },
    mz: function () {
      var a = this.rB;
      if (0 == (this.m & 2)) return a;
      this.m &= -3;
      if (0 < (this.m & 1)) {
        this.flipY
          ? U.Ll(a, 0, this.size.x, this.size.y, 0, this.vo, this.kn)
          : U.Ll(a, 0, this.size.x, 0, this.size.y, this.vo, this.kn);
        var b = this.Yn;
        U.Oc(b);
        b.m11 = 1 / a.m11;
        b.m22 = 1 / a.m22;
        b.m33 = 1 / a.m33;
        b.m14 = -a.m14 * b.m11;
        b.m24 = -a.m24 * b.m22;
        b.m34 = -a.m34 * b.m33;
      } else U.kC(a, 1.221730476396024, this.size.x / this.size.y, this.vo, this.kn), U.inverse(a, this.Yn);
      this.Fv();
      return a;
    },
    Dn: function () {
      var a = this.FD;
      if (0 == (this.m & 4)) return a;
      this.m &= -5;
      if (0 < (this.m & 1)) {
        U.Oc(a);
        this.m |= 8;
        if (!this.Yp) {
          this.m &= -9;
          U.translate(a, -this.ra, -this.ma, 0);
          U.scale(a, this.Th, this.Th, 1);
          U.SB(a, 0.0174532925199432 * this.jc);
          U.translate(a, this.ra, this.ma, 0);
          var b = this.size;
          U.translate(a, b.x / 2 - this.ra, b.y / 2 - this.ma, 0);
        }
        U.inverse(a, this.Zn);
        this.Fv();
      }
      return a;
    },
    az: function () {
      0 < (this.m & 4) && this.Dn();
      this.Dn();
      return this.Zn;
    },
    hg: function () {
      null != this.K && (this.K.Im = !0);
    },
    Fv: function () {
      U.Sc(this.Zn, this.Yn, this.Zz);
    },
    j: lb,
  };
  be.g = !0;
  be.D = Gb;
  be.prototype = u(Gb.prototype, {
    contains: function (a) {
      var b = a.x - this.G.x;
      a = a.y - this.G.y;
      return b * b + a * a <= this.ca * this.ca;
    },
    Fn: function (a) {
      var b = a.G.x - this.G.x,
        c = a.G.y - this.G.y,
        d = a.ca - this.ca,
        e = b * b + c * c;
      d * d >= e
        ? 0 <= d && this.from(a)
        : ((d = Math.sqrt(e)),
          (e = (d + a.ca - this.ca) / (2 * d)),
          (this.G.x += e * b),
          (this.G.y += e * c),
          (this.ca = (d + this.ca + a.ca) / 2));
    },
    from: function (a) {
      this.G.x = a.G.x;
      this.G.y = a.G.y;
      this.ca = a.ca;
    },
    Kv: function (a) {
      a = wg.zy(this.G.x, this.G.y, a.Wa.x, a.Wa.y, a.lc);
      return a <= -this.ca ? -1 : a >= this.ca ? 1 : 0;
    },
    j: be,
  });
  ae.g = !0;
  ae.D = Za;
  ae.prototype = u(Za.prototype, {
    af: function (a) {
      var b = a.s,
        c = a.u,
        d = a.A,
        e = a.B,
        f = new ca();
      f.s = b;
      f.u = c;
      f.A = d;
      f.B = e;
      this.ha = f;
      b = a.s;
      c = a.u;
      d = f = new y();
      d.x = b;
      d.y = c;
      b = a.s;
      c = a.B;
      e = f = new y();
      e.x = b;
      e.y = c;
      b = a.A;
      c = a.B;
      var g = (f = new y());
      g.x = b;
      g.y = c;
      b = a.A;
      c = a.u;
      a = f = new y();
      a.x = b;
      a.y = c;
      this.$p = [d, e, g, a];
    },
    collapse: function () {
      return this;
    },
    j: ae,
  });
  sf.g = !0;
  sf.prototype = { j: sf };
  $d.g = !0;
  $d.D = Za;
  $d.prototype = u(Za.prototype, {
    collapse: function (a) {
      null == this.collapsed && (this.collapsed = new $d());
      var b = this.collapsed.Rm,
        c = b.rc;
      c.r = 1;
      c.Fa = 1;
      c.b = 1;
      c.a = 1;
      c = b.offset;
      c.r = 0;
      c.Fa = 0;
      c.b = 0;
      c.a = 0;
      for (c = a.Ma; -1 < --c; ) {
        var d = a.i[c].Rm,
          e = d.rc;
        d = d.offset;
        b.rc.r *= e.r;
        b.rc.Fa *= e.Fa;
        b.rc.b *= e.b;
        b.rc.a *= e.a;
        b.offset.r = e.r * b.offset.r + d.r;
        b.offset.Fa = e.Fa * b.offset.Fa + d.Fa;
        b.offset.b = e.b * b.offset.b + d.b;
        b.offset.a = e.a * b.offset.a + d.a;
      }
      return this.collapsed;
    },
    j: $d,
  });
  rf.g = !0;
  rf.prototype = {
    o: function () {
      this.uj.S();
      this.yb.S();
      this.stack.S();
      this.K = this.stack = this.yb = this.uj = null;
    },
    Ux: function (a, b) {
      var c = this.uj;
      c.l = 0;
      c.ec(Ea.count);
      this.Vi = $f.rq[this.cu];
      this.K.Im && this.yD();
      this.wl = 0;
      if (b)
        for (this.yb.ec(Ea.count), this.stack.clear(), this.stack.push(a); 0 < this.stack.Ma; ) {
          if (((a = this.stack), (a = a.i[--a.Ma]), (a.wl = this.wl++), 1 != a.wz()))
            if (0 < (a.flags & 512)) null != a.effect && (c.i[c.l++] = a);
            else if (0 < (a.flags & 256)) {
              this.yb.l = 0;
              for (b = a.V; null != b; ) {
                var d = this.yb;
                d.i[d.l++] = b;
                b = b.L;
              }
              for (a = a.bh; -1 < --a; ) (b = this.yb), this.stack.push(b.i[--b.l]);
            }
        }
      else a.Jt(this, b);
      return c;
    },
    isVisible: function (a) {
      if (!isFinite(a.ca)) return !0;
      for (var b = 0, c = this.cu; b < c; ) {
        var d = b++,
          e = 1 << d;
        if (0 != (this.Vi & e)) {
          d = a.Kv(this.th[d]);
          if (0 > d) return !1;
          0 < d && (this.Vi &= ~e);
        }
      }
      return !0;
    },
    yD: function () {
      var a = this.K.Fe,
        b = a.size,
        c = b.x,
        d = b.y;
      b = this.Xi[0];
      b.x = 0;
      b.y = 0;
      var e = this.Xi[1];
      e.x = c;
      e.y = 0;
      var f = this.Xi[2];
      f.x = 0;
      f.y = d;
      var g = this.Xi[3];
      g.x = c;
      g.y = d;
      null != a && ((a = a.az()), U.ng(a, b, b), U.ng(a, e, e), U.ng(a, f, f), U.ng(a, g, g));
      this.th[0].Il(b, e);
      this.th[1].Il(g, f);
      this.th[2].Il(f, b);
      this.th[3].Il(e, g);
      this.ha.s = b.x;
      this.ha.u = b.y;
      this.ha.A = g.x;
      this.ha.B = g.y;
    },
    j: rf,
  };
  Zd.g = !0;
  Zd.prototype = { j: Zd };
  hb.g = !0;
  hb.Nx = function () {
    for (var a = 0; 4 > a; ) {
      var b = a++;
      hb.Cj.i[b].clear();
    }
  };
  hb.sB = function (a) {
    null == hb.Cj && hb.Qz();
    var b = hb.Cj,
      c = hb.bx,
      d = a;
    for (c.clear(); null != d.parent; ) c.push(d.parent), (d = d.parent);
    d = 0;
    for (var e = c.Ma; d < e; ) d++, c.i[--c.Ma].Zo(b);
    a.Zo(b);
    c.clear(!0);
    return b;
  };
  hb.Qz = function () {
    hb.Cj = new Z(4);
    for (var a = 0; 4 > a; ) a++, hb.Cj.Oa(new Tb());
    hb.bx = new Tb(16);
  };
  Ea.g = !0;
  Ea.Da = [Jc];
  Ea.D = Pc;
  Ea.prototype = u(Pc.prototype, {
    o: function () {
      0 < (this.flags & 1024) ||
        (Pc.prototype.o.call(this),
        null != this.parent && this.parent.removeChild(this),
        (this.ye = this.I = this.local = null),
        this.CB(),
        null != this.effect && this.effect.o(),
        (this.client = this.effect = null),
        (this.flags = 1024),
        Ea.count--);
    },
    wz: function () {
      return 0 < (this.flags & 1) ? 1 : 0 < (this.flags & 2) ? 2 : 0;
    },
    up: function (a) {
      switch (a) {
        case 0:
          this.flags &= -4;
          break;
        case 1:
          this.flags &= -3;
          this.flags |= 1;
          break;
        case 2:
          (this.flags |= 2), (this.flags &= -2);
      }
      return a;
    },
    Jt: function (a, b) {
      this.wl = a.wl++;
      if (!(0 < (this.flags & 1))) {
        0 < (this.flags & 2) && (b = !0);
        var c = a.Vi;
        (b || a.isVisible(this.ye)) && this.qs(a, b);
        a.Vi = c;
      }
    },
    ls: function () {
      for (var a = this; null != a.parent; ) a = a.parent;
      return a;
    },
    qg: function (a, b) {
      null == b && (b = !0);
      null == a && (a = !0);
      this.Wp(b, !0);
      b && (this.kf(), a && this.Yo());
    },
    Av: function (a, b) {
      null == b && (b = !0);
      null == a && (a = !0);
      if (a && 0 < (this.flags & 256)) for (var c = this.V; null != c; ) c.Av(a, !1), (c = c.L);
      this.kf();
      b && this.Yo();
    },
    Wp: function () {
      0 < (this.flags & 4) ||
        ((this.flags &= -9),
        (this.flags |= 32),
        null != this.parent
          ? 0 < (this.flags & 4096)
            ? this.I.pC(this.parent.I, this.local)
            : this.I.qC(this.parent.I, this.local)
          : this.I.set(this.local));
    },
    kf: function () {
      null != this.parent && (this.parent.flags |= 32);
    },
    Yo: function () {
      null != this.parent && (this.parent.kf(), this.parent.Yo());
    },
    tj: function (a) {
      var b = null == a;
      b ? (a = hb.sB(this)) : this.Zo(a);
      this.mu(a);
      b ? hb.Nx() : this.kB(a);
      this.flags &= -129;
    },
    cs: function (a) {
      for (var b = this.ld; null != b; ) {
        if (b.state.type == a) return b.state;
        b = b.next;
      }
      return null;
    },
    ig: function (a) {
      this.flags |= 128;
      if (null == this.ld) this.ld = new Zd(a);
      else {
        for (var b = this.ld, c = a.type; null != b; ) {
          if (b.state.type == c) {
            b.state = a;
            return;
          }
          b = b.next;
        }
        b = new Zd(a);
        b.next = this.ld;
        this.ld = b;
      }
    },
    wu: function (a) {
      this.flags |= 128;
      for (var b = this.ld, c = null; null != b; ) {
        if (b.state.type == a) {
          null != c ? (c.next = b.next) : (this.ld = b.next);
          b.next = null;
          break;
        }
        c = b;
        b = b.next;
      }
    },
    CB: function () {
      this.flags |= 128;
      for (var a = this.ld, b; null != a; ) (b = a.next), (a.next = null), (a = b);
      this.ld = null;
    },
    Zo: function (a) {
      for (var b = this.ld, c; null != b; ) (c = b.state), a.i[c.slot].push(c), (b = b.next);
    },
    kB: function (a) {
      for (var b = this.ld; null != b; ) --a.i[b.state.slot].Ma, (b = b.next);
    },
    lr: function (a) {
      null == a && (a = this.Ry());
      if (null == a) throw 25;
      switch (a) {
        case 1:
          return new be();
        case 2:
          return new ce();
        default:
          throw 26;
      }
    },
    Ry: function () {
      return null != Ea.OB ? Ea.OB(this) : Ea.Qv;
    },
    j: Ea,
  });
  gb.g = !0;
  gb.D = Ea;
  gb.prototype = u(Ea.prototype, {
    o: function () {
      if (!(0 < (this.flags & 1024))) {
        for (var a = this.V; null != a; ) {
          var b = a.L;
          a.o();
          a = b;
        }
        Ea.prototype.o.call(this);
        gb.count--;
      }
    },
    qs: function (a, b) {
      for (var c = this.V; null != c; ) c.Jt(a, b), (c = c.L);
    },
    Lg: function (a, b) {
      return Ua.Lg(this, a, b);
    },
    ub: function (a, b) {
      var c = 0;
      if (this.ye.contains(a)) for (var d = this.V; null != d; ) (c += d.ub(a, b)), (d = d.L);
      return c;
    },
    appendChild: function (a) {
      if (null == this.V) (this.V = a), (a.L = null);
      else {
        for (var b = this.V; null != b.L; ) b = b.L;
        b.L = a;
      }
      a.parent = this;
      this.bh++;
      return this;
    },
    Bq: function (a, b) {
      if (0 == b) (a.L = this.V), (this.V = a);
      else {
        var c = this.V,
          d = 0;
        for (--b; d < b; ) d++, (c = c.L);
        a.L = c.L;
        c.L = a;
      }
      a.parent = this;
      this.bh++;
      return this;
    },
    removeChild: function (a) {
      if (this.V == a) this.V = a.L;
      else {
        for (var b = this.V; b.L != a; ) b = b.L;
        b.L = a.L;
      }
      a.L = null;
      a.parent = null;
      this.bh--;
      return this;
    },
    Mg: function (a) {
      for (var b = this.V, c = 0; c <= a; ) {
        if (c == a) return b;
        b = b.L;
        ++c;
      }
      return null;
    },
    dC: function (a, b) {
      this.removeChild(a);
      this.Bq(a, b);
      return this;
    },
    tk: function (a) {
      for (var b = this.V; null != b; ) {
        if (b.name == a) return b;
        b = b.L;
      }
      return null;
    },
    li: function (a) {
      for (var b = this.V, c; null != b; ) {
        if (b.name == a) return b;
        if (0 < (b.flags & 256) && ((c = b.li(a)), null != c)) return c;
        b = b.L;
      }
      return null;
    },
    Qu: function (a) {
      if (null == a.L) return this;
      var b = this.V;
      if (b == a) {
        for (; null != b.L; ) b = b.L;
        b.L = a;
        this.V = a.L;
      } else {
        for (; b.L != a; ) b = b.L;
        for (b = b.L = a.L; null != b.L; ) b = b.L;
        b.L = a;
      }
      a.L = null;
      return this;
    },
    Wp: function (a, b) {
      Ea.prototype.Wp.call(this, a, b);
      if (b) for (b = this.V; null != b; ) b.qg(!1, a), (b = b.L);
    },
    kf: function () {
      if (!(0 < (this.flags & 16)) && null != this.V) {
        var a = this.V;
        this.ye.from(a.ye);
        for (a = a.L; null != a; ) (0 < (a.flags & 256) && 0 == a.bh) || this.ye.Fn(a.ye), (a = a.L);
        this.flags &= -33;
        Ea.prototype.kf.call(this);
      }
    },
    mu: function (a) {
      for (var b = this.V; null != b; ) b.tj(a), (b = b.L);
    },
    j: gb,
  });
  qf.g = !0;
  qf.prototype = { j: qf };
  Fb.g = !0;
  Fb.D = Ea;
  Fb.prototype = u(Ea.prototype, {
    o: function () {
      0 < (this.flags & 1024) ||
        (this.Pe.o(), (this.Pe = null), ba.Zc(this.Mh), (this.Mh = null), Ea.prototype.o.call(this), Fb.count--);
    },
    Tp: function () {
      this.flags |= 64;
    },
    ub: function () {
      return 0;
    },
    Lg: function (a, b) {
      return b;
    },
    kf: function () {
      0 < (this.flags & 16) ||
        0 == (this.flags & 96) ||
        (this.Pe.Qp(this.I, this.ye), (this.flags &= -97), Ea.prototype.kf.call(this));
    },
    qs: function (a) {
      null != this.effect && ((a = a.uj), (a.i[a.l++] = this));
    },
    mu: function (a) {
      for (var b = 0, c, d = 0, e = a.l; d < e; ) {
        var f = d++;
        c = a.i[f];
        0 == c.Ma ? (this.Mh[f] = null) : ((c = c.top().collapse(c)), (this.Mh[f] = c), (b |= c.Tc));
      }
      this.Dp = b;
    },
    j: Fb,
  });
  sc.g = !0;
  sc.D = Fb;
  sc.prototype = u(Fb.prototype, {
    ub: function (a, b) {
      if (!this.ye.contains(a)) return 0;
      var c = a.x,
        d = a.y;
      this.I.Zd(a, a);
      var e = a.x,
        f = a.y;
      (e = 0 < e && 1 > e && 0 < f && 1 > f) && null != b && (b.data[b.count++] = this);
      a.x = c;
      a.y = d;
      return e ? 1 : 0;
    },
    Lg: function (a, b) {
      var c = new y(),
        d = 3.4e38,
        e = 3.4e38,
        f = -3.4e38,
        g = -3.4e38;
      if (a == this) (e = d = 0), (g = f = 1);
      else {
        if (a == this.parent) {
          var h = this.local;
          c.x = 0;
          c.y = 0;
          h.Ra(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = 1;
          c.y = 0;
          h.Ra(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = 1;
          c.y = 1;
          h.Ra(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = 0;
          c.y = 1;
          h.Ra(c, c);
        } else
          null == a.parent
            ? ((h = this.I),
              (c.x = 0),
              (c.y = 0),
              h.Ra(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 1),
              (c.y = 0),
              h.Ra(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 1),
              (c.y = 1),
              h.Ra(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = 1),
              h.Ra(c, c))
            : ((h = this.I),
              (a = a.I),
              (c.x = 0),
              (c.y = 0),
              h.Ra(c, c),
              a.Zd(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 1),
              (c.y = 0),
              h.Ra(c, c),
              a.Zd(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 1),
              (c.y = 1),
              h.Ra(c, c),
              a.Zd(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = 1),
              h.Ra(c, c),
              a.Zd(c, c));
        c.x < d && (d = c.x);
        c.x > f && (f = c.x);
        c.y < e && (e = c.y);
        c.y > g && (g = c.y);
      }
      b.s = d;
      b.u = e;
      b.A = f;
      b.B = g;
      return b;
    },
    Tp: function () {
      Fb.prototype.Tp.call(this);
      this.Pe.G.x = 0.5;
      this.Pe.G.y = 0.5;
      this.Pe.ca = Math.sqrt(0.5);
      switch (this.Pe.type) {
        case 2:
          var a = this.Pe.box;
          a.s = 0;
          a.u = 0;
          a.A = 1;
          a.B = 1;
      }
    },
    j: sc,
  });
  Ua.g = !0;
  Ua.qg = function (a, b) {
    null == b && (b = !0);
    var c = Ua.Ol;
    c.clear();
    c.push(a);
    a = 8;
    for (b && (a |= 32); 0 < c.Ma; ) {
      var d = c.i[--c.Ma];
      if (0 < (d.flags & a)) d.qg(!0, b);
      else if (0 < (d.flags & 256)) for (d = d.V; null != d; ) c.push(d), (d = d.L);
    }
  };
  Ua.tj = function (a) {
    var b = Ua.Ol;
    b.clear();
    for (b.push(a); 0 < b.Ma; )
      if (((a = b.i[--b.Ma]), 0 < (a.flags & 128))) a.tj();
      else if (0 < (a.flags & 256)) for (a = a.V; null != a; ) b.push(a), (a = a.L);
  };
  Ua.Sp = function (a, b) {
    var c = Ua.Ol;
    c.clear();
    for (c.push(a); 0 < c.Ma; )
      if (((a = c.i[--c.Ma]), null != a.controllers && a.Sp(b), 0 < (a.flags & 256)))
        for (a = a.V; null != a; ) c.push(a), (a = a.L);
  };
  Ua.Lg = function (a, b, c) {
    var d = 3.4e38,
      e = 3.4e38,
      f = -3.4e38,
      g = -3.4e38,
      h = Ua.Ol;
    h.clear();
    for (h.push(a); 0 < h.Ma; )
      if (((a = h.i[--h.Ma]), 0 < (a.flags & 512)))
        a.Lg(b, c), c.s < d && (d = c.s), c.u < e && (e = c.u), c.A > f && (f = c.A), c.B > g && (g = c.B);
      else if (0 < (a.flags & 256)) for (a = a.V; null != a; ) h.push(a), (a = a.L);
    c.s = d;
    c.u = e;
    c.A = f;
    c.B = g;
    return c;
  };
  Ua.nD = function (a, b, c) {
    if (null == e) {
      var d = new ca();
      var e = d;
    }
    var f = c.s,
      g = c.u,
      h = c.A,
      k = c.B,
      l = 3.4e38,
      m = 3.4e38,
      n = -3.4e38,
      q = -3.4e38;
    d = new y();
    b == a
      ? ((l = c.s), (m = c.u), (n = c.A), (q = c.B))
      : (b == a.parent
          ? ((a = a.local),
            (d.x = f),
            (d.y = g),
            a.Ra(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = h),
            (d.y = g),
            a.Ra(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = h),
            (d.y = k),
            a.Ra(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = f),
            (d.y = k),
            a.Ra(d, d))
          : null == b.parent
          ? ((a = a.I),
            (d.x = f),
            (d.y = g),
            a.Ra(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = h),
            (d.y = g),
            a.Ra(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = h),
            (d.y = k),
            a.Ra(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = f),
            (d.y = k),
            a.Ra(d, d))
          : ((a = a.I),
            (b = b.I),
            (d.x = f),
            (d.y = g),
            a.Ra(d, d),
            b.Zd(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = h),
            (d.y = g),
            a.Ra(d, d),
            b.Zd(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = h),
            (d.y = k),
            a.Ra(d, d),
            b.Zd(d, d),
            d.x < l && (l = d.x),
            d.x > n && (n = d.x),
            d.y < m && (m = d.y),
            d.y > q && (q = d.y),
            (d.x = f),
            (d.y = k),
            a.Ra(d, d),
            b.Zd(d, d)),
        d.x < l && (l = d.x),
        d.x > n && (n = d.x),
        d.y < m && (m = d.y),
        d.y > q && (q = d.y));
    e.s = l;
    e.u = m;
    e.A = n;
    e.B = q;
    return e;
  };
  Yd.g = !0;
  Yd.Xb = !0;
  Yd.prototype = { j: Yd };
  Eb.g = !0;
  Eb.prototype = {
    Ml: function (a) {
      if (this.da != a) {
        var b = this.da;
        b.m11 = a.m11;
        b.m12 = a.m12;
        b.m13 = a.m13;
        b.m21 = a.m21;
        b.m22 = a.m22;
        b.m23 = a.m23;
        b.m31 = a.m31;
        b.m32 = a.m32;
        b.m33 = a.m33;
      }
      this.m &= -18;
      this.m |= 226;
      return this;
    },
    set: function (a) {
      var b = this.translate,
        c = a.translate;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b = this.scale;
      c = a.scale;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b = this.da;
      c = a.da;
      b.m11 = c.m11;
      b.m12 = c.m12;
      b.m13 = c.m13;
      b.m21 = c.m21;
      b.m22 = c.m22;
      b.m23 = c.m23;
      b.m31 = c.m31;
      b.m32 = c.m32;
      b.m33 = c.m33;
      this.m = a.m | 224;
      return this;
    },
    Iu: function (a) {
      this.translate.x = a.translate.x;
      this.translate.y = a.translate.y;
      this.scale.x = a.scale.x;
      this.scale.y = a.scale.y;
      var b = this.da,
        c = a.da;
      b.m11 = c.m11;
      b.m12 = c.m12;
      b.m21 = c.m21;
      b.m22 = c.m22;
      this.m = a.m | 224;
      return this;
    },
    Oc: function () {
      ud.Oc(this.da);
      var a = this.translate;
      a.x = 0;
      a.y = 0;
      a.z = 0;
      a = this.scale;
      a.x = 1;
      a.y = 1;
      a.z = 1;
      this.m |= 255;
      return this;
    },
    pC: function (a, b) {
      if (0 < (a.m & 1)) return this.set(b), this;
      if (0 < (b.m & 1)) return this.set(a), this;
      this.m = 235;
      if (0 < (a.m & 2) && 0 < (b.m & 2) && 0 < (a.m & 8)) {
        if (0 < (a.m & 16)) {
          var c = this.da,
            d = b.da;
          c.m11 = d.m11;
          c.m12 = d.m12;
          c.m13 = d.m13;
          c.m21 = d.m21;
          c.m22 = d.m22;
          c.m23 = d.m23;
          c.m31 = d.m31;
          c.m32 = d.m32;
          c.m33 = d.m33;
        } else
          0 < (b.m & 16)
            ? ((c = this.da),
              (d = a.da),
              (c.m11 = d.m11),
              (c.m12 = d.m12),
              (c.m13 = d.m13),
              (c.m21 = d.m21),
              (c.m22 = d.m22),
              (c.m23 = d.m23),
              (c.m31 = d.m31),
              (c.m32 = d.m32),
              (c.m33 = d.m33))
            : ud.Sc(a.da, b.da, this.da);
        c = this.translate;
        var e = a.translate;
        0 < (a.m & 16) ? ((d = b.translate), (c.x = d.x), (c.y = d.y), (c.z = d.z)) : ud.ng(a.da, b.translate, c);
        a = a.scale.x;
        c.x = c.x * a + e.x;
        c.y = c.y * a + e.y;
        c.z = c.z * a + e.z;
        0 < (b.m & 8)
          ? ((this.scale.x = this.scale.y = this.scale.z = a * b.scale.x), (this.m &= -6), (this.m |= 232))
          : ((b = b.scale),
            (this.scale.x = a * b.x),
            (this.scale.y = a * b.y),
            (this.scale.z = a * b.z),
            (this.m &= -14),
            (this.m |= 224));
        return this;
      }
      d = 0 < (a.m & 2) ? ud.lv(a.da, a.scale, Eb.mv) : a.da;
      c = 0 < (b.m & 2) ? ud.lv(b.da, b.scale, Eb.nv) : b.da;
      ud.Sc(d, c, this.da);
      c = this.translate;
      ud.ng(d, b.translate, c);
      e = a.translate;
      c.x += e.x;
      c.y += e.y;
      c.z += e.z;
      this.m &= -12;
      return this;
    },
    qC: function (a, b) {
      if (0 < (a.m & 1)) return this.Iu(b), this;
      if (0 < (b.m & 1)) return this.Iu(a), this;
      this.m = 235;
      if (0 < (a.m & 2) && 0 < (b.m & 2) && 0 < (a.m & 8)) {
        var c = this.da;
        if (0 < (a.m & 16)) {
          var d = b.da;
          c.m11 = d.m11;
          c.m12 = d.m12;
          c.m21 = d.m21;
          c.m22 = d.m22;
          0 < (b.m & 16) && (this.m |= 16);
        } else {
          if (0 < (b.m & 16)) {
            var e = a.da;
            c.m11 = e.m11;
            c.m12 = e.m12;
            c.m21 = e.m21;
            c.m22 = e.m22;
          } else {
            e = a.da;
            d = b.da;
            var f = d.m11;
            var g = d.m12;
            var h = d.m21;
            var k = d.m22;
            d = e.m11;
            var l = e.m12;
            c.m11 = d * f + l * h;
            c.m12 = d * g + l * k;
            d = e.m21;
            l = e.m22;
            c.m21 = d * f + l * h;
            c.m22 = d * g + l * k;
          }
          this.Ml(c);
        }
        h = this.translate;
        e = a.translate;
        0 < (a.m & 16)
          ? ((h.x = b.translate.x), (h.y = b.translate.y))
          : ((f = b.translate.x),
            (g = b.translate.y),
            (c = a.da),
            (h.x = c.m11 * f + c.m12 * g),
            (h.y = c.m21 * f + c.m22 * g));
        a = a.scale.x;
        h.x = h.x * a + e.x;
        h.y = h.y * a + e.y;
        0 < (b.m & 8)
          ? ((this.scale.x = this.scale.y = a * b.scale.x), (this.m &= -6), (this.m |= 232))
          : ((b = b.scale), (this.scale.x = a * b.x), (this.scale.y = a * b.y), (this.m &= -14), (this.m |= 224));
        return this;
      }
      e = a.da;
      0 < (a.m & 2) &&
        ((e = Eb.mv),
        (f = a.scale.x),
        (g = a.scale.y),
        (c = a.da),
        (e.m11 = c.m11 * f),
        (e.m12 = c.m12 * g),
        (e.m21 = c.m21 * f),
        (e.m22 = c.m22 * g));
      d = b.da;
      0 < (b.m & 2) &&
        ((e = Eb.nv),
        (f = b.scale.x),
        (g = b.scale.y),
        (c = b.da),
        (d.m11 = c.m11 * f),
        (d.m12 = c.m12 * g),
        (d.m21 = c.m21 * f),
        (d.m22 = c.m22 * g));
      c = this.da;
      f = d.m11;
      g = d.m12;
      h = d.m21;
      k = d.m22;
      d = e.m11;
      l = e.m12;
      c.m11 = d * f + l * h;
      c.m12 = d * g + l * k;
      d = e.m21;
      l = e.m22;
      c.m21 = d * f + l * h;
      c.m22 = d * g + l * k;
      h = this.translate;
      f = b.translate.x;
      g = b.translate.y;
      h.x = e.m11 * f + e.m12 * g;
      h.y = e.m21 * f + e.m22 * g;
      e = a.translate;
      h.x += e.x;
      h.y += e.y;
      this.m &= -12;
      this.m |= 224;
      return this;
    },
    Ra: function (a, b) {
      if (0 < (this.m & 1)) (b.x = a.x), (b.y = a.y);
      else {
        if (0 < (this.m & 2)) {
          var c = a.x * this.scale.x;
          a = a.y * this.scale.y;
          if (0 >= (this.m & 16)) {
            var d = c,
              e = this.da;
            c = e.m11 * c + e.m12 * a;
            a = e.m21 * d + e.m22 * a;
          }
        } else (c = a.x), (a = a.y), (d = c), (e = this.da), (c = e.m11 * c + e.m12 * a), (a = e.m21 * d + e.m22 * a);
        b.x = c + this.translate.x;
        b.y = a + this.translate.y;
      }
      return b;
    },
    Zd: function (a, b) {
      if (0 < (this.m & 1)) (b.x = a.x), (b.y = a.y);
      else {
        var c = a.x - this.translate.x;
        a = a.y - this.translate.y;
        if (0 < (this.m & 2)) {
          if (0 >= (this.m & 16)) {
            var d = c,
              e = this.da;
            c = c * e.m11 + a * e.m21;
            a = d * e.m12 + a * e.m22;
          }
          b.x = c / this.scale.x;
          b.y = a / this.scale.y;
        } else
          (e = this.da),
            (d = 1 / (e.m11 * e.m22 - e.m12 * e.m21)),
            (b.x = e.m22 * d * c - e.m12 * d * a),
            (b.y = -(e.m21 * d) * c + e.m11 * d * a);
      }
      return b;
    },
    wk: function () {
      var a = this.Gn;
      if (0 < (this.m & 64))
        if (((this.m &= -65), null == a && ((a = this.Gn = U.Rb()), U.Oc(a)), 0 < (this.m & 1)))
          (a.m11 = 1), (a.m12 = 0), (a.m14 = 0), (a.m21 = 0), (a.m22 = 1), (a.m24 = 0);
        else {
          var b = this.da,
            c = this.scale.x,
            d = this.scale.y;
          0 < (this.m & 2)
            ? ((a.m11 = b.m11 * c), (a.m12 = b.m12 * d), (a.m21 = b.m21 * c), (a.m22 = b.m22 * d))
            : ((a.m11 = b.m11), (a.m21 = b.m21), (a.m12 = b.m12), (a.m22 = b.m22));
          a.m14 = this.translate.x;
          a.m24 = this.translate.y;
        }
      return a;
    },
    j: Eb,
  };
  pa.g = !0;
  pa.Da = [Yd];
  pa.Ea = function () {
    return ++pa.R;
  };
  pa.prototype = {
    o: function () {
      this.remove();
      null != this.wg && (this.wg.o(), (this.wg = null));
      null != this.qm && (this.qm.o(), (this.qm = null));
      this.node.o();
      pa.count--;
    },
    remove: function () {
      null != this.node.parent && this.node.parent.removeChild(this.node);
    },
    ac: function () {
      var a = this.node.parent;
      return null != a && ((a = a.client), null != a && a.type == ma.TYPE) ? a : null;
    },
    aa: function (a) {
      this.Ua != a && ((this.Ua = z.ce(a)), (this.flags |= 2));
      return this.Ua;
    },
    N: function (a) {
      this.rm != a && ((this.rm = a), (this.flags |= 4));
      return a;
    },
    ea: function (a) {
      this.ra != a && ((this.ra = a), (this.flags |= 1));
      return a;
    },
    fa: function (a) {
      this.ma != a && ((this.ma = a), (this.flags |= 1));
      return a;
    },
    Ih: function (a) {
      this.jc != a && ((this.jc = a), (this.flags |= 9));
      return a;
    },
    na: function (a) {
      if (this.Ja != a || this.Sb != a) (this.Ja = this.Sb = a), (this.flags |= 49), (this.flags &= -65);
      return a;
    },
    te: function (a) {
      this.Ja != a && ((this.Ja = a), (this.flags &= -97), (this.flags |= 17));
      return a;
    },
    Pc: function (a) {
      this.Sb != a && ((this.Sb = a), (this.flags &= -97), (this.flags |= 17));
      return a;
    },
    mc: function () {
      return 0;
    },
    Xc: function () {
      return 0;
    },
    kj: function (a) {
      this.Ib != a && ((this.Ib = a), (this.flags |= 1));
      return a;
    },
    Hh: function (a) {
      this.Jb != a && ((this.Jb = a), (this.flags |= 1));
      return a;
    },
    vp: function (a) {
      this.nf != a && ((this.nf = a), (this.flags |= 1));
      return a;
    },
    Nl: function (a) {
      this.pf != a && ((this.pf = a), (this.flags |= 1));
      return a;
    },
    ab: function () {
      this.kj(this.mc() / 2);
      this.Hh(this.Xc() / 2);
      this.flags |= 1;
    },
    Qa: function () {},
    Vh: function (a, b, c) {
      this.Pb();
      var d = this.$b(this.ac()),
        e = this.ra - d.s,
        f = this.ma - d.u;
      switch (b) {
        case -1:
          this.ea(a.s + e);
          break;
        case 0:
          this.ea(a.s + 0.5 * (a.A - a.s) + e - (d.A - d.s) / 2);
          break;
        case 1:
          this.ea(a.A + e - (d.A - d.s));
      }
      switch (c) {
        case -1:
          this.fa(a.u + f);
          break;
        case 0:
          this.fa(a.u + 0.5 * (a.B - a.u) + f - (d.B - d.u) / 2);
          break;
        case 1:
          this.fa(a.B + f - (d.B - d.u));
      }
    },
    Hy: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = 0);
      null == b && (b = 0);
      this.na(1);
      var e = (a.A - a.s) / this.mc(),
        f = (a.B - a.u) / this.Xc();
      2 == b ? (this.te(e), this.Pc(f)) : 0 == b ? this.na(Math.min(e, f)) : this.na(Math.max(e, f));
      this.ea(a.s);
      this.fa(a.u);
      f = this.$b(this.ac());
      e = a.s - f.s;
      f = a.u - f.u;
      2 != b && (this.ea(z.map(c, -1, 1, a.s, a.A - this.mc())), this.fa(z.map(d, -1, 1, a.u, a.B - this.Xc())));
      this.ea(this.ra + e);
      this.fa(this.ma + f);
    },
    update: function () {},
    ti: function () {
      null == this.wg && (this.wg = new fb(this));
      return this.wg;
    },
    vz: function () {
      return new pf(this);
    },
    AC: function (a) {
      var b = this.node.cs(3);
      if (null == b) {
        if (null == a) return a;
        b = new ae();
        this.node.ig(b);
      }
      if (null == a) return this.node.wu(3), a;
      b.af(a);
      return a;
    },
    Pb: function () {
      if (0 == (this.flags & 7)) return this;
      0 < (this.flags & 1) && this.Cv();
      0 < (this.flags & 4) && (this.node.up(this.rm ? 0 : 1), (this.flags &= -5));
      if (0 < (this.flags & 2)) {
        if (1 > this.Ua) {
          var a = this.node.cs(0);
          null == a ? this.node.ig(new wd(this.Ua)) : (a.alpha = this.Ua);
        } else this.node.wu(0);
        this.flags &= -3;
        this.node.flags |= 128;
      }
      return this;
    },
    Cv: function () {
      this.flags &= -2;
      this.node.flags |= 8;
      var a = this.node.local,
        b = this.nf,
        c = this.pf,
        d = this.flags & 120;
      if (0 < (d & 8)) {
        var e = 0.0174532925199432 * z.wj(this.jc),
          f = Math.sin(e);
        e = Math.cos(e);
        var g = a.da;
        g.m11 = e;
        g.m12 = -f;
        g.m21 = f;
        g.m22 = e;
        a.Ml(g);
        if (0 < (d & 64))
          (a.translate.x = -(b * e) + c * f + b + this.ra - this.Ib),
            (a.translate.y = -(b * f) - c * e + c + this.ma - this.Jb);
        else {
          if (0 < (d & 32)) {
            d = this.Ja;
            var h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d;
            d = h * b;
            g = h * c;
            a.scale.x = a.scale.y = h;
            a.m &= -6;
            a.m |= 232;
          } else {
            d = this.Ja;
            h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d;
            d = this.Sb;
            var k = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d;
            d = h * b;
            g = k * c;
            a.scale.x = h;
            a.scale.y = k;
            a.m &= -14;
            a.m |= 224;
          }
          a.translate.x = -(d * e) + g * f + b + this.ra - this.Ib;
          a.translate.y = -(d * f) - g * e + c + this.ma - this.Jb;
        }
      } else
        0 < (d & 64)
          ? ((a.translate.x = this.ra - this.Ib), (a.translate.y = this.ma - this.Jb))
          : 0 < (d & 32)
          ? ((d = this.Ja),
            (h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d),
            (a.scale.x = a.scale.y = h),
            (a.m &= -6),
            (a.m |= 232),
            (a.translate.x = -(h * b) + b + this.ra - this.Ib),
            (a.translate.y = -(h * c) + c + this.ma - this.Jb))
          : ((d = this.Ja),
            (h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d),
            (d = this.Sb),
            (k = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d),
            (a.scale.x = h),
            (a.scale.y = k),
            (a.m &= -14),
            (a.m |= 224),
            (a.translate.x = -(h * b) + b + this.ra - this.Ib),
            (a.translate.y = -(k * c) + c + this.ma - this.Jb));
      a.m &= -2;
      a.m |= 224;
    },
    j: pa,
  };
  W.g = !0;
  W.D = pa;
  W.prototype = u(pa.prototype, {
    o: function () {
      null != this.node &&
        (null != this.Jh && (this.Jh.o(), (this.Jh = null)),
        (this.qa = this.Gb = null),
        (this.bi = -1),
        (this.bk = null),
        pa.prototype.o.call(this),
        W.count--);
    },
    mc: function () {
      var a = Math;
      if (0 == (this.flags & 8)) return this.O.x * a.abs(this.Ja);
      var b = this.O.x * a.abs(this.Ja) * 0.5,
        c = this.O.y * a.abs(this.Sb) * 0.5,
        d = 0.0174532925199432 * z.wj(this.jc),
        e = -a.sin(d);
      a = a.cos(d);
      var f = (d = 0);
      0 < a ? ((d -= a * b), (f += a * b)) : ((d += a * b), (f -= a * b));
      0 < e ? ((d -= e * c), (f += e * c)) : ((d += e * c), (f -= e * c));
      return f - d;
    },
    DC: function (a) {
      this.Ja = a / this.O.x;
      this.flags &= -97;
      this.flags |= 17;
      return a;
    },
    Xc: function () {
      var a = Math;
      if (0 == (this.flags & 8)) return this.O.y * a.abs(this.Sb);
      var b = (this.O.x * a.abs(this.Ja)) / 2,
        c = (this.O.y * a.abs(this.Sb)) / 2,
        d = 0.0174532925199432 * z.wj(this.jc),
        e = a.sin(d);
      a = a.cos(d);
      var f = (d = 0);
      0 < e ? ((d -= e * b), (f += e * b)) : ((d += e * b), (f -= e * b));
      0 < a ? ((d -= a * c), (f += a * c)) : ((d += a * c), (f -= a * c));
      return f - d;
    },
    BC: function (a) {
      this.Sb = a / this.O.y;
      this.flags &= -97;
      this.flags |= 17;
      return a;
    },
    ab: function () {
      this.kj(this.O.x / 2);
      this.Hh(this.O.y / 2);
      this.flags |= 1;
    },
    Qa: function () {
      this.nf = this.O.x / 2;
      this.pf = this.O.y / 2;
      this.flags |= 1;
    },
    cf: function (a, b) {
      if (this.bi == a && this.K == va.current) return null != b && this.xc(b), this;
      this.K = va.current;
      this.bi = a;
      this.bk = null;
      if (-1 == a)
        return null != this.Gb.effect && this.Gb.effect.o(), (this.Gb.effect = null), (this.flags &= -641), this;
      if (null == this.Gb.effect) {
        var c = new ib();
        this.Gb.effect = c;
      } else
        this.Gb.effect.type == ib.TYPE
          ? (c = this.Gb.effect)
          : (this.Gb.effect.o(), (c = new ib()), (this.Gb.effect = c));
      a = va.current.Id(a);
      c.cf(a);
      c = this.O;
      c.x = a.width;
      c.y = a.height;
      null == b && ((c = this.O), (a = a.scale), (c.x *= a), (c.y *= a));
      this.flags = this.O.x == this.O.y ? this.flags | 256 : this.flags & -257;
      this.flags &= -513;
      this.flags |= 129;
      null != b && this.xc(b);
      return this;
    },
    xc: function (a) {
      if (this.bk == a) return a;
      this.bk = a;
      this.yC(this.Gb.effect.ua.jb.bs(a).id);
      return a;
    },
    Bk: function () {
      null == this.Jh && (this.Jh = new Sb(this));
      return this.Jh;
    },
    eC: function (a, b, c) {
      this.O.x = b;
      this.O.y = c;
      this.flags = this.O.x == this.O.y ? this.flags | 256 : this.flags & -257;
      this.flags &= -513;
      this.flags |= 129;
      0 > this.bi
        ? null == this.Gb.effect && (this.Gb.effect = new Vb())
        : ((this.bi = -1), (this.bk = null), this.Gb.effect.o(), (this.Gb.effect = new Vb()));
      this.Gb.effect.color = a;
      return this;
    },
    ub: function (a) {
      oa.rg(this);
      0 < (this.node.flags & 32) && this.node.kf();
      return 1 == this.Gb.ub(a, null);
    },
    $b: function (a) {
      var b = new ca();
      if (a == this) return (b.s = 0), (b.u = 0), (b.A = this.O.x), (b.B = this.O.y), b;
      if (0 == (this.flags & 128)) return (b.s = 0), (b.u = 0), (b.A = 0), (b.B = 0), b;
      var c = 512 == (this.flags & 8704);
      c && ((this.flags &= -513), (this.flags |= 1));
      0 == (this.flags & 16384) && (oa.rg(this), null == a || oa.$n(this, a) || oa.rg(a));
      this.node.Lg(null == a ? this.node.ls() : a.node, b);
      c && (this.flags |= 513);
      this.flags &= -24577;
      return b;
    },
    Pb: function () {
      return 0 == (this.flags & 128) ? this : pa.prototype.Pb.call(this);
    },
    Cv: function () {
      this.flags &= -2;
      this.node.flags |= 8;
      var a = this.node.local;
      if (0 < (this.flags & 512)) {
        var b = this.nf - this.qa.x,
          c = this.pf - this.qa.y,
          d = this.flags & 376;
        if (0 < (d & 8)) {
          var e = 0.0174532925199432 * z.wj(this.jc),
            f = Math.sin(e);
          e = Math.cos(e);
          var g = a.da;
          g.m11 = e;
          g.m12 = -f;
          g.m21 = f;
          g.m22 = e;
          a.Ml(g);
          if (0 < (d & 64))
            0 < (d & 256)
              ? ((a.scale.x = a.scale.y = this.qa.width), (a.m &= -6), (a.m |= 232))
              : ((a.scale.x = this.qa.width), (a.scale.y = this.qa.height), (a.m &= -14), (a.m |= 224)),
              (a.translate.x = -(b * e) + c * f + b + this.ra - this.Ib + this.qa.x),
              (a.translate.y = -(b * f) - c * e + c + this.ma - this.Jb + this.qa.y);
          else {
            if (0 < (d & 32)) {
              g = this.Ja;
              var h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g;
              g = h * b;
              var k = h * c;
              0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.qa.width * h), (a.m &= -6), (a.m |= 232))
                : ((a.scale.x = this.qa.width * h), (a.scale.y = this.qa.height * h), (a.m &= -14), (a.m |= 224));
            } else
              (g = this.Ja),
                (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                (g = this.Sb),
                (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                (g = d * b),
                (k = h * c),
                (a.scale.x = this.qa.width * d),
                (a.scale.y = this.qa.height * h),
                (a.m &= -14),
                (a.m |= 224);
            a.translate.x = -(g * e) + k * f + b + this.ra - this.Ib + this.qa.x;
            a.translate.y = -(g * f) - k * e + c + this.ma - this.Jb + this.qa.y;
          }
        } else
          0 < (d & 64)
            ? (0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.qa.width), (a.m &= -6), (a.m |= 232))
                : ((a.scale.x = this.qa.width), (a.scale.y = this.qa.height), (a.m &= -14), (a.m |= 224)),
              (a.translate.x = this.ra - this.Ib + this.qa.x),
              (a.translate.y = this.ma - this.Jb + this.qa.y))
            : 0 < (d & 32)
            ? ((g = this.Ja),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.qa.width * h), (a.m &= -6), (a.m |= 232))
                : ((a.scale.x = this.qa.width * h), (a.scale.y = this.qa.height * h), (a.m &= -14), (a.m |= 224)),
              (a.translate.x = -(h * b) + b + this.ra - this.Ib + this.qa.x),
              (a.translate.y = -(h * c) + c + this.ma - this.Jb + this.qa.y))
            : ((g = this.Ja),
              (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (g = this.Sb),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (a.scale.x = this.qa.width * d),
              (a.scale.y = this.qa.height * h),
              (a.m &= -14),
              (a.m |= 224),
              (a.translate.x = -(d * b) + b + this.ra - this.Ib + this.qa.x),
              (a.translate.y = -(h * c) + c + this.ma - this.Jb + this.qa.y));
      } else
        (b = this.nf),
          (c = this.pf),
          (d = this.flags & 376),
          0 < (d & 8)
            ? ((e = 0.0174532925199432 * z.wj(this.jc)),
              (f = Math.sin(e)),
              (e = Math.cos(e)),
              (g = a.da),
              (g.m11 = e),
              (g.m12 = -f),
              (g.m21 = f),
              (g.m22 = e),
              a.Ml(g),
              0 < (d & 64)
                ? (0 < (d & 256)
                    ? ((a.scale.x = a.scale.y = this.O.x), (a.m &= -6), (a.m |= 232))
                    : ((a.scale.x = this.O.x), (a.scale.y = this.O.y), (a.m &= -14), (a.m |= 224)),
                  (a.translate.x = -(b * e) + c * f + b + this.ra - this.Ib),
                  (a.translate.y = -(b * f) - c * e + c + this.ma - this.Jb))
                : (0 < (d & 32)
                    ? ((g = this.Ja),
                      (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                      (g = h * b),
                      (k = h * c),
                      0 < (d & 256)
                        ? ((a.scale.x = a.scale.y = this.O.x * h), (a.m &= -6), (a.m |= 232))
                        : ((a.scale.x = this.O.x * h), (a.scale.y = this.O.y * h), (a.m &= -14), (a.m |= 224)))
                    : ((g = this.Ja),
                      (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                      (g = this.Sb),
                      (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                      (g = d * b),
                      (k = h * c),
                      (a.scale.x = this.O.x * d),
                      (a.scale.y = this.O.y * h),
                      (a.m &= -14),
                      (a.m |= 224)),
                  (a.translate.x = -(g * e) + k * f + b + this.ra - this.Ib),
                  (a.translate.y = -(g * f) - k * e + c + this.ma - this.Jb)))
            : 0 < (d & 64)
            ? (0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.O.x), (a.m &= -6), (a.m |= 232))
                : ((a.scale.x = this.O.x), (a.scale.y = this.O.y), (a.m &= -14), (a.m |= 224)),
              (a.translate.x = this.ra - this.Ib),
              (a.translate.y = this.ma - this.Jb))
            : 0 < (d & 32)
            ? ((g = this.Ja),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.O.x * h), (a.m &= -6), (a.m |= 232))
                : ((a.scale.x = this.O.x * h), (a.scale.y = this.O.y * h), (a.m &= -14), (a.m |= 224)),
              (a.translate.x = -(h * b) + b + this.ra - this.Ib),
              (a.translate.y = -(h * c) + c + this.ma - this.Jb))
            : ((g = this.Ja),
              (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (g = this.Sb),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (a.scale.x = this.O.x * d),
              (a.scale.y = this.O.y * h),
              (a.m &= -14),
              (a.m |= 224),
              (a.translate.x = -(d * b) + b + this.ra - this.Ib),
              (a.translate.y = -(h * c) + c + this.ma - this.Jb));
      a.m &= -2;
      a.m |= 224;
    },
    yC: function (a) {
      var b = this.Gb.effect;
      b.op(a);
      a = b.ua.jb.vk(a);
      var c = this.O,
        d = a.O;
      c.x = d.x;
      c.y = d.y;
      if (a.Rh) {
        this.flags |= 512;
        c = a.hf;
        d = a.frame;
        if (null == this.qa) {
          var e = c.x,
            f = c.y,
            g = d.width,
            h = d.height;
          c = new Vf();
          c.x = e;
          c.y = f;
          c.width = g;
          c.height = h;
          this.qa = c;
        } else (this.qa.x = c.x), (this.qa.y = c.y), (this.qa.width = d.width), (this.qa.height = d.height);
        this.flags = d.width == d.height ? this.flags | 256 : this.flags & -257;
      } else (this.flags &= -513), (this.flags = this.O.x == this.O.y ? this.flags | 256 : this.flags & -257);
      b = b.ua.scale;
      1 != b &&
        ((c = this.O),
        (c.x *= b),
        (c.y *= b),
        a.Rh && ((this.qa.x *= b), (this.qa.y *= b), (this.qa.width *= b), (this.qa.height *= b)));
      this.flags |= 1;
    },
    j: W,
  });
  pf.g = !0;
  pf.prototype = {
    add: function () {
      this.F.node.ig(Hb.jw);
      return this.F;
    },
    j: pf,
  };
  ma.g = !0;
  ma.D = pa;
  ma.prototype = u(pa.prototype, {
    Pb: function () {
      pa.prototype.Pb.call(this);
      for (var a = this.node.V, b; null != a; ) {
        if (null != a.client)
          switch (a.client.type) {
            case ma.TYPE:
            case W.TYPE:
            case La.TYPE:
              (b = a.client), b.Pb();
          }
        a = a.L;
      }
      return this;
    },
    o: function () {
      null != this.node &&
        (oa.yr(this), -1 != this.fp && (va.current.hy(this.fp), (this.fp = -1)), pa.prototype.o.call(this), ma.count--);
    },
    appendChild: function (a) {
      this.node.appendChild(a.node);
      return this;
    },
    PD: function () {
      return this.node.V.client;
    },
    Mg: function (a) {
      return this.node.Mg(a).client;
    },
    tk: function (a) {
      a = this.node.tk(a);
      return null == a ? null : a.client;
    },
    li: function (a) {
      a = this.node.li(a);
      return null == a ? null : a.client;
    },
    XB: function (a) {
      if (null == a) return null != this.ac() && this.node.parent.Qu(this.node), this;
      this.node.Qu(a.node);
      return this;
    },
    Vr: function (a, b) {
      null == a && (a = this);
      for (a = a.node.V; null != a; ) {
        var c = a.client;
        null != c && (c instanceof pa && b(c), c.type == ma.TYPE && this.Vr(c, b));
        a = a.L;
      }
    },
    ub: function (a, b) {
      0 < (this.flags & 1) && this.Pb();
      var c = this.node.flags;
      0 < (c & 8) ? this.node.qg(!1, !0) : 0 < (c & 32) && this.node.Av(!0, !1);
      null == this.result && (this.result = new qf());
      this.result.count = 0;
      a = this.node.ub(a, this.result);
      if (null != b)
        for (c = 0; c < a; ) {
          var d = c++;
          b[d] = this.result.data[d].client;
        }
      return a;
    },
    update: function (a) {
      pa.prototype.update.call(this, a);
      var b = this.node;
      if (null != b && 0 != (this.flags & 1024))
        for (var c = b.V; null != c; ) (b = c.L), (c = c.client), null != c && c.update(a), (c = b);
    },
    $b: function (a) {
      var b = new ca();
      b.s = b.u = Infinity;
      b.A = b.B = -Infinity;
      if (0 == this.node.bh) return b;
      var c = new Z(32),
        d = new Tb(32);
      d.push(this.node);
      for (var e, f; 0 < d.Ma; ) {
        e = d.i[--d.Ma];
        if (256 == (e.flags & 2304)) for (f = e, f = f.V; null != f; ) d.push(f), (f = f.L);
        if (null != e.client)
          switch (e.client.type) {
            case La.TYPE:
              c.Oa(e.client);
              break;
            case W.TYPE:
              (e = e.client), c.Oa(e), 0 < (e.flags & 512) && ((e.flags &= -513), (e.flags |= 1), (e.flags |= 2048));
          }
      }
      oa.rg(this);
      null == a || oa.$n(this, a) || oa.rg(a);
      b.s = 3.4e38;
      b.u = 3.4e38;
      b.A = -3.4e38;
      b.B = -3.4e38;
      d = c.i;
      e = 0;
      for (f = c.l; e < f; ) {
        var g = e++;
        g = d[g];
        g.flags |= 24576;
        g = g.$b(a);
        g.s < b.s && (b.s = g.s);
        g.u < b.u && (b.u = g.u);
        g.A > b.A && (b.A = g.A);
        g.B > b.B && (b.B = g.B);
      }
      d = c.i;
      e = 0;
      for (f = c.l; e < f; ) (g = e++), (g = d[g]), 0 < (g.flags & 2048) && ((g.flags |= 513), (g.flags &= -2049));
      return b;
    },
    mc: function () {
      var a = this.$b(this.ac());
      return a.A - a.s;
    },
    Xc: function () {
      var a = this.$b(this.ac());
      return a.B - a.u;
    },
    te: function (a) {
      return a;
    },
    Pc: function (a) {
      return a;
    },
    Qa: function () {
      var a = this.$b(this);
      this.nf = (a.A - a.s) / 2;
      this.pf = (a.B - a.u) / 2;
      this.flags |= 1;
    },
    ab: function () {
      var a = this.$b(this);
      this.kj((a.A - a.s) / 2);
      this.Hh((a.B - a.u) / 2);
      this.flags |= 1;
    },
    j: ma,
  });
  tc.g = !0;
  tc.D = Oc;
  tc.prototype = u(Oc.prototype, { j: tc });
  Sb.g = !0;
  Sb.qr = function (a, b) {
    function c(f) {
      d.push(a + (10 > f ? "000" : 100 > f ? "00" : "0") + f);
    }
    var d = [],
      e = 1;
    if (1 > b) for (; e >= b; ) c(e--);
    else for (; e <= b; ) c(e++);
    return d;
  };
  Sb.xr = function (a, b) {
    for (var c = [], d = 0, e = b.length; d < e; ) {
      var f = d++;
      c.push(new vf(b[f], 0.03333333333333333));
    }
    return new wf(a, c);
  };
  Sb.prototype = {
    o: function () {
      null != this.controller && (this.controller.o(), (this.controller = null));
      this.F = this.Ko = null;
    },
    play: function (a, b, c, d) {
      null == b && (b = !0);
      null != c && this.tC(c);
      return this.fB(a, 0, -1, b, d);
    },
    fB: function (a, b, c, d, e) {
      null == d && (d = !0);
      this.Yc = !0;
      var f = this.Vy();
      -2 == this.repeat
        ? ((f.repeat = 2), (f.Bl = -1))
        : -1 == this.repeat
        ? ((f.repeat = 1), (f.Bl = -1))
        : ((f.repeat = 0), (f.Bl = this.repeat));
      f.play(a, b, c, d ? 0 : this.Ci);
      this.length = f.Md - f.Gc;
      this.Ko = e;
      return this;
    },
    tC: function (a) {
      this.repeat = a;
      return this;
    },
    Vy: function () {
      if (null == this.controller || this.controller.jd) {
        var a = this.F.node,
          b = a.Cy(tc.TYPE);
        null == b && ((b = new tc()), a.Ka(b));
        b.hl = L(this, this.hl);
        b.gl = L(this, this.gl);
        this.controller = b;
      }
      return this.controller;
    },
    hl: function (a, b, c) {
      this.Ci = c;
      this.F.xc(a);
    },
    gl: function () {
      null != this.Ko && this.Ko();
      null != this.controller && 1 != this.controller.repeat && ((this.Yc = !1), (this.length = -1));
    },
    j: Sb,
  };
  La.g = !0;
  La.D = pa;
  La.prototype = u(pa.prototype, {
    o: function () {
      if (null != this.node) {
        for (var a = this.node.V; null != a; ) {
          var b = a.L;
          a.o();
          a = b;
        }
        this.ed = this.sb = this.$d = this.ua = null;
        pa.prototype.o.call(this);
        La.count--;
      }
    },
    cf: function (a) {
      this.ua = va.current.Id(a);
      this.$d = this.ua.jb.Wd;
      this.Wl = !0;
      this.sb.scale = this.ua.scale;
    },
    wc: function (a) {
      this.Ec = this.Ec || this.sb.text != a;
      this.sb.text = a;
      return this;
    },
    ij: function (a) {
      this.Ec = this.Ec || this.sb.size != a;
      this.sb.size = a;
      return this;
    },
    hj: function (a, b) {
      this.Ec = (this.Ec = this.Ec || this.sb.width != a) || this.sb.height != b;
      this.sb.width = a;
      this.sb.height = b;
      return this;
    },
    ZB: function (a) {
      this.Ec = this.Ec || this.sb.align != a;
      this.sb.align = a;
      return this;
    },
    $u: function (a) {
      null == a && (a = 4);
      this.Vl.fb(this.$d, this.sb, this.ed);
      if (this.ed.overflow) {
        var b = this.sb.size;
        b < a || ((this.sb.size = this.xx(a, b - 1)), (this.Ec = !0), this.Vl.fb(this.$d, this.sb, this.ed));
      }
    },
    $b: function (a) {
      this.Pb();
      var b = this.ed.ha,
        c = b.s,
        d = b.u,
        e = b.A,
        f = b.B;
      b = new ca();
      b.s = c;
      b.u = d;
      b.A = e;
      b.B = f;
      if (b.s >= b.A || b.u >= b.B) return (b.s = 0), (b.u = 0), (b.A = 0), (b.B = 0), b;
      if (a == this) return b;
      0 == (this.flags & 16384) && (oa.rg(this), null != a && 0 == oa.$n(this, a) && oa.rg(a));
      return Ua.nD(this.node, null == a ? this.node.ls() : a.node, b);
    },
    Vh: function (a, b, c) {
      this.Pb();
      if (!this.ed.overflow) {
        var d = this.ed.ha;
        d.s >= d.A || d.u >= d.B || pa.prototype.Vh.call(this, a, b, c);
      }
    },
    update: function (a) {
      pa.prototype.update.call(this, a);
      if (this.Jn) {
        for (var b = 0, c = this.node, d = c.V, e; null != d; ) {
          if (0 < (d.flags & 1))
            if (((e = d), (e.Ek += a), 10 < e.Ek)) {
              e = d.L;
              c.removeChild(d);
              d.o();
              d = e;
              continue;
            } else ++b;
          d = d.L;
        }
        this.Jn = 0 < b;
      }
    },
    Pb: function () {
      pa.prototype.Pb.call(this);
      if (null == this.ua || null == this.sb.text || (!this.Ec && !this.Wl)) return this;
      this.Ec = !1;
      var a = this.node;
      if (this.Wl) {
        this.Wl = !1;
        for (var b = a.V, c; null != b; ) (c = b.L), a.removeChild(b), b.o(), (b = c);
      }
      this.Vl.fb(this.$d, this.sb, this.ed);
      c = this.ed.Sj;
      for (var d = this.ed.ar, e = a.V, f = 0, g, h, k, l, m, n, q = 0, r = c.l; q < r; )
        (l = q++),
          (b = c.i[l]),
          (g = l << 2),
          (h = d.i[g]),
          (k = d.i[g + 1]),
          (l = d.i[g + 2]),
          (m = d.i[g + 3]),
          (n = String.fromCodePoint(b)),
          null != e
            ? ((g = e), (g.name = n), g.up(0), a.dC(g, f++), (e = e.L))
            : ((g = new Xd(n)), (n = new ib().cf(this.ua)), (g.effect = n), a.Bq(g, f++)),
          (n = g.local),
          (n.translate.x = h),
          (n.translate.y = k),
          (n.m &= -2),
          (n.m |= 224),
          (h = g.local),
          (h.scale.x = l),
          (h.scale.y = m),
          (h.m &= -14),
          (h.m |= 224),
          (n = g.effect),
          n.op(b);
      a.flags |= 8;
      for (b = 0; null != e; )
        100 > b++
          ? ((this.Jn = !0), (g = e), (g.Ek = 0), e.up(1), (e = e.L))
          : ((c = e.L), a.removeChild(e), e.o(), (e = c));
      return this;
    },
    Qa: function () {
      var a = this.$b(this);
      a.s >= a.A || a.u >= a.B
        ? this.vp(this.Nl(0))
        : (this.vp(a.s + 0.5 * (a.A - a.s)), this.Nl(a.u + 0.5 * (a.B - a.u)));
    },
    ab: function () {
      var a = this.$b(this);
      a.s >= a.A || a.u >= a.B ? this.kj(this.Hh(0)) : (this.kj(a.s + (a.A - a.s) / 2), this.Hh(a.u + (a.B - a.u) / 2));
    },
    mc: function () {
      var a = this.$b(this.ac());
      return a.A - a.s;
    },
    Xc: function () {
      var a = this.$b(this.ac());
      return a.B - a.u;
    },
    te: function () {
      throw 27;
    },
    Pc: function () {
      throw 28;
    },
    xx: function (a, b) {
      for (
        var c = a, d = -1, e = c + ((b - c) >> 1);
        (this.sb.size = e),
          this.Vl.fb(this.$d, this.sb, this.ed),
          this.ed.overflow ? (b = e) : (c = d = e),
          (e = c + ((b - c) >> 1)),
          e != c;

      );
      return 0 > d ? a : d;
    },
    j: La,
  });
  Xd.g = !0;
  Xd.D = sc;
  Xd.prototype = u(sc.prototype, { j: Xd });
  Wd.g = !0;
  Wd.Xb = !0;
  Wd.prototype = { j: Wd };
  of.g = !0;
  of.prototype = { j: of };
  rc.g = !0;
  rc.prototype = { j: rc };
  dc.g = !0;
  dc.Da = [Wd];
  dc.prototype = {
    fb: function (a, b, c) {
      try {
        this.hd(a, b, c);
      } catch (d) {}
    },
    hd: function (a, b, c) {
      c.overflow = !1;
      var d = c.ha;
      d.s = d.u = Infinity;
      d.A = d.B = -Infinity;
      var e = b.text,
        f = e.length;
      if (0 != f) {
        var g = c.Sj;
        g.ec(f);
        g.l = 0;
        var h = c.ar;
        h.ec(4 * f);
        h.l = 0;
        var k = a.Mm,
          l = this.Sj;
        l.l = 0;
        l.ec(f);
        for (var m = 0, n = f; m < n; ) (f = m++), (f = Y.Km(e, f)), (l.i[l.l++] = f);
        f = this.qf;
        f.l = 0;
        this.qf.ec(l.l);
        m = 0;
        for (n = l.l; m < n; ) (f = m++), (e = l.i[f]), null != k[e] && ((f = this.qf), (e = k[e]), (f.i[f.l++] = e));
        if (!this.qf.Vg()) {
          n = b.width;
          k = b.Pk;
          m = b.align;
          l = a.Pk;
          e = (b.size / a.xu) * b.scale;
          var q = b.mD * e;
          if (1 > b.height / (a.lineHeight * e)) c.overflow = !0;
          else {
            var r = this.qf.i[0],
              w = -(r.offsetX * e);
            f = a.padding;
            var G = f[0] * e,
              v = f[1] * e,
              P = f[2] * e,
              I = f[3] * e;
            f = 0;
            a = this.qf.l;
            for (var J = 0, O, F = 0; f < a; ) {
              r = this.qf.i[f++];
              var ha = w + r.offsetX * e;
              var Ca = r.offsetY * e;
              var Xa = r.w * e;
              var Rb = r.P * e;
              O = ha + Xa - v;
              if (k) {
                J |= r.code << 16;
                F = l.Ne[(73856093 * J) & l.Hi];
                if (-1 == F) F = -2147483648;
                else {
                  var Sa = l.i;
                  if (Sa[F] == J) F = Sa[F + 1];
                  else {
                    var Lc = -2147483648;
                    for (F = Sa[F + 2]; -1 != F; ) {
                      if (Sa[F] == J) {
                        Lc = Sa[F + 1];
                        break;
                      }
                      F = Sa[F + 2];
                    }
                    F = Lc;
                  }
                }
                -2147483648 == F && (F = 0);
                F *= e;
                J = r.code;
                O += F;
              }
              if (O > n) {
                c.overflow = !0;
                return;
              }
              ha += F;
              g.i[g.l++] = r.code;
              h.i[h.l++] = ha;
              h.i[h.l++] = Ca;
              h.i[h.l++] = Xa;
              h.i[h.l++] = Rb;
              32 < r.code &&
                ((O = Ca + G),
                (Sa = ha + I),
                Sa < d.s && (d.s = Sa),
                Sa > d.A && (d.A = Sa),
                O < d.u && (d.u = O),
                O > d.B && (d.B = O),
                (Ca = Ca + Rb - P),
                (ha = ha + Xa - v),
                ha < d.s && (d.s = ha),
                ha > d.A && (d.A = ha),
                (ha = Ca),
                ha < d.u && (d.u = ha),
                ha > d.B && (d.B = ha));
              r = r.Fj;
              0 < b.$q && (r = b.$q);
              w += r * e + F + q;
            }
            if (-1 != m) {
              c = n - d.A;
              0 == m && (c /= 2);
              m = 0;
              for (n = a; m < n; ) (f = m++), (g = f << 2), (h.i[g] += c);
              c = d.s + c;
              Ca = d.A - d.s;
              d.s = c;
              d.A = c + Ca;
            }
            if (b.Hx) for (m = 0, n = a; m < n; ) (f = m++), (g = f << 2), (h.i[g + 1] /= 2);
          }
        }
      }
    },
    j: dc,
  };
  oa.g = !0;
  oa.update = function (a, b) {
    var c = oa.Cp;
    c.clear();
    for (c.push(a); 0 < c.Ma; )
      if (((a = c.i[--c.Ma]), null == a.client)) {
        if (0 == (a.flags & 1024)) for (a = a.V; null != a; ) c.push(a), (a = a.L);
      } else
        switch (a.client.type) {
          case W.TYPE:
          case La.TYPE:
            var d = a.client;
            d.update(b);
            break;
          case ma.TYPE:
            d = a.client;
            var e = d.flags & 1024;
            d.flags &= -1025;
            d.update(b);
            d.flags |= e;
            if (0 < (d.flags & 1024)) for (a = a.V; null != a; ) c.push(a), (a = a.L);
        }
  };
  oa.Pb = function (a) {
    var b = oa.Cp,
      c = null,
      d = null;
    b.clear();
    for (b.push(a); 0 < b.Ma; ) {
      var e = b.i[--b.Ma];
      if ((a = 0 < (e.flags & 256))) (c = e), (d = c.V);
      e = e.client;
      if (null != e)
        switch (e.type) {
          case W.TYPE:
          case La.TYPE:
            e.Pb();
            break;
          case ma.TYPE:
            (c.V = null), e.Pb(), (c.V = d);
        }
      if (a && !(0 < (c.flags & 2048))) for (; null != d; ) b.push(d), (d = d.L);
    }
  };
  oa.yr = function (a, b) {
    null == b && (b = !0);
    if (a.type == ma.TYPE)
      for (a = a.node.V; null != a; ) (b = a.L), null != a.client ? oa.yr(a.client, !1) : a.o(), (a = b);
    else b || a.o();
  };
  oa.$n = function (a, b) {
    for (a = a.ac(); null != a; ) {
      if (a == b) return !0;
      a = a.ac();
    }
    return !1;
  };
  oa.rg = function (a) {
    var b = a.node,
      c = oa.Cp,
      d = a.node;
    for (c.clear(); null != d; ) {
      0 < (d.flags & 8) && (b = d);
      if (null != d.client) {
        var e = d.client;
        0 < (e.flags & 1) && (e.Pb(), (b = d));
      }
      c.push(d);
      d = d.parent;
    }
    a.Pb();
    b.qg(!0, !1);
  };
  fb.g = !0;
  fb.prototype = {
    o: function () {
      this.SC();
      this.Kg = this.F = null;
    },
    y: function (a, b, c, d, e) {
      this.rj(1, a, b, c, d, e);
      return this;
    },
    yv: function (a, b, c, d, e) {
      this.rj(4, a, b, c, d, e);
      return this;
    },
    alpha: function (a, b, c, d, e) {
      this.rj(6, a, b, c, d, e);
      return this;
    },
    SC: function () {
      for (var a = this.F.node.controllers; null != a; ) {
        var b = a.next;
        a.type == Wb.TYPE && a.stop();
        a = b;
      }
      this.uh = 0;
    },
    rj: function (a, b, c, d, e, f) {
      switch (a) {
        case 0:
          var g = this.F.ra;
          break;
        case 1:
          g = this.F.ma;
          break;
        case 2:
          g = this.F.Ja;
          break;
        case 3:
          g = this.F.Sb;
          break;
        case 4:
          g = this.F.Ja;
          break;
        case 5:
          g = this.F.jc;
          break;
        case 6:
          g = this.F.Ua;
      }
      var h = this.rz(a, c);
      h.rj(a, g, b, c, null == d ? Kg() : d);
      h.repeat = null == e ? 0 : e;
      null == this.Kg && (this.Kg = []);
      this.Kg[a] = f;
      this.uh |= 1 << a;
      return h;
    },
    rz: function (a) {
      var b = this.F.node.controllers;
      if (null != b)
        if (0 < (this.uh & (1 << a)))
          for (; null != b; ) {
            if (b.type == Wb.TYPE) {
              var c = b;
              if (c.key == a) return (c.oe = L(this, this.oe)), (c.Od = L(this, this.Od)), c;
            }
            b = b.next;
          }
        else
          for (; null != b; ) {
            if (b.type == Wb.TYPE && !b.ze) return (c = b), (c.oe = L(this, this.oe)), (c.Od = L(this, this.Od)), c;
            b = b.next;
          }
      c = new Wb();
      c.oe = L(this, this.oe);
      c.Od = L(this, this.Od);
      this.F.node.Ka(c);
      return c;
    },
    Od: function (a, b) {
      var c = this.F;
      switch (a) {
        case 0:
          c.ea(b);
          break;
        case 1:
          c.fa(b);
          break;
        case 2:
          c.te(b);
          break;
        case 3:
          c.Pc(b);
          break;
        case 4:
          c.na(b);
          break;
        case 5:
          c.Ih(b);
          break;
        case 6:
          c.aa(b);
      }
    },
    oe: function (a) {
      this.uh &= ~(1 << a);
      if (null != this.Kg[a]) {
        var b = this.Kg[a];
        this.Kg[a] = null;
        b();
      }
    },
    j: fb,
  };
  ec.g = !0;
  ec.prototype = {
    S: function () {
      null != this.ua &&
        ((this.Wd = this.ua = null),
        this.md.S(),
        (this.md = null),
        this.frames.S(),
        (this.frames = null),
        null != this.Kf && (this.Kf.S(), (this.Kf = null)),
        (this.ln = null));
    },
    Yy: function () {
      var a = Array(this.dl),
        b = 0,
        c = this.md,
        d = c.i,
        e = 0;
      for (c = c.l; e < c; ) {
        var f = e++;
        f = d[f];
        a[b++] = 4096 > f ? this.frames.i[f] : this.Kf.get(f);
      }
      return a;
    },
    vk: function (a) {
      return 4096 >= a ? this.frames.i[a] : this.Kf.get(a);
    },
    bs: function (a) {
      return this.ln.P[a];
    },
    j: ec,
  };
  Ta.g = !0;
  Ta.prototype = { j: Ta };
  Da.g = !0;
  Da.prototype = { j: Da };
  ea.g = !0;
  ea.prototype = { j: ea };
  R.g = !0;
  R.Xb = !0;
  R.prototype = { j: R };
  D.g = !0;
  D.Da = [R];
  D.prototype = {
    qn: function () {
      var a = new Da(),
        b = new V(this.src),
        c = new ia();
      c.xu = b.info.size;
      c.lineHeight = b.Gg.lineHeight;
      c.Bg = b.Gg.Bg;
      c.iE = b.Gg.VB;
      c.hE = b.Gg.UB;
      c.padding[0] = b.info.padding.vD;
      c.padding[1] = b.info.padding.right;
      c.padding[2] = b.info.padding.Vc;
      c.padding[3] = b.info.padding.left;
      a.Wd = c;
      for (var d = [], e = 0, f = 0, g = b.Zb; f < g.length; ) {
        var h = g[f];
        ++f;
        var k = h.id,
          l = new Ja();
        l.code = k;
        l.x = h.x;
        l.y = h.y;
        l.offsetX = h.HD;
        l.offsetY = h.ID;
        l.Fj = h.GD;
        l.w = h.width;
        l.P = h.height;
        0 < l.Fj && (c.advance = l.Fj);
        d.push(l);
        k > e && (e = k);
        h = new ea();
        a.frames.push(h);
        h.id = k;
        h.name = String.fromCodePoint(k);
        h.La.x = l.x;
        h.La.y = l.y;
        h.La.width = l.w;
        h.La.height = l.P;
        h.O.x = l.w;
        h.O.y = l.P;
      }
      k = c.Mm = Array(e);
      f = 0;
      for (g = e; f < g; ) (e = f++), (k[e] = null);
      for (f = 0; f < d.length; ) (e = d[f]), ++f, (k[e.code] = e);
      f = 0;
      for (g = b.at; f < g.length; ) {
        e = g[f];
        ++f;
        b = c.Pk;
        l = (e.second << 16) | e.first;
        h = e.amount;
        b.l == b.J && b.grow();
        d = b.i;
        k = b.Ne;
        e = 3 * b.Ab;
        b.Ab = b.Lb[b.Ab];
        d[e] = l;
        d[e + 1] = h;
        h = (73856093 * l) & b.Hi;
        l = k[h];
        if (-1 == l) k[h] = e;
        else {
          for (k = d[l + 2]; -1 != k; ) (l = k), (k = d[k + 2]);
          d[l + 2] = e;
        }
        b.l++;
      }
      return a;
    },
    j: D,
  };
  Ja.g = !0;
  Ja.prototype = { j: Ja };
  ia.g = !0;
  ia.prototype = { j: ia };
  V.g = !0;
  V.prototype = {
    cB: function (a) {
      a = new pb(a);
      var b = a.$(),
        c = a.$(),
        d = a.$();
      if (66 != b || 77 != c || 70 != d) throw 31;
      if (3 != a.$()) throw 32;
      a.$();
      c = a.ad();
      b = a.uc();
      a.$();
      a.$();
      a.$a();
      a.$();
      d = a.$();
      var e = a.$(),
        f = a.$(),
        g = a.$();
      a.$();
      a.$();
      a.$();
      a.vh(c - 14);
      this.info = { size: z.abs(b), padding: { vD: d, right: e, Vc: f, left: g } };
      a.$();
      a.ad();
      b = a.$a();
      c = a.$a();
      d = a.$a();
      e = a.$a();
      a.$a();
      a.$();
      a.$();
      a.$();
      a.$();
      a.$();
      this.Gg = { lineHeight: b, Bg: c, VB: d, UB: e };
      a.$();
      c = a.ad();
      d = a.Na;
      a.ru(0);
      b = a.Na;
      b -= d;
      for (c -= b; 0 < c; ) a.ru(0), (c -= b);
      a.$();
      c = a.ad();
      b = 0;
      for (c = (c / 20) | 0; b < c; ) {
        b++;
        d = a.ad();
        e = a.$a();
        f = a.$a();
        g = a.$a();
        var h = a.$a(),
          k = a.uc(),
          l = a.uc(),
          m = a.uc();
        a.$();
        a.$();
        this.Zb.push({ id: d, x: e, y: f, width: g, height: h, HD: k, ID: l, GD: m });
      }
      if (a.Na != a.gf)
        for (a.$(), a.ad(); a.Na < a.gf; )
          (b = a.ad()), (c = a.ad()), (d = a.uc()), this.at.push({ first: b, second: c, amount: d });
    },
    j: V,
  };
  Q.g = !0;
  Q.Da = [R];
  Q.prototype = {
    qn: function () {
      var a = new Da(),
        b = JSON.parse(this.json),
        c = H.T(b, "meta");
      null != c && (a.scale = H.T(c, "scale"));
      c = 0;
      b = H.T(b, "frames");
      for (var d = 0; d < b.length; ) {
        var e = b[d];
        ++d;
        var f = new ea();
        a.frames.push(f);
        f.id = c++;
        f.name = H.T(e, "filename");
        var g = H.T(e, "frame");
        f.La.x = H.T(g, "x");
        f.La.y = H.T(g, "y");
        f.La.width = H.T(g, "w");
        f.La.height = H.T(g, "h");
        Object.prototype.hasOwnProperty.call(e, "trimmed") && (f.Rh = H.T(e, "trimmed"));
        Object.prototype.hasOwnProperty.call(e, "rotated");
        Object.prototype.hasOwnProperty.call(e, "sourceSize")
          ? ((g = H.T(e, "sourceSize")), (f.O.x = H.T(g, "w")), (f.O.y = H.T(g, "h")))
          : ((f.O.x = f.La.width), (f.O.y = f.La.height));
        Object.prototype.hasOwnProperty.call(e, "spriteSourceSize")
          ? ((g = H.T(e, "spriteSourceSize")), (f.hf.x = H.T(g, "x")), (f.hf.y = H.T(g, "y")))
          : ((f.hf.x = 0), (f.hf.y = 0));
      }
      return a;
    },
    j: Q,
  };
  B.hq |= 0;
  null == String.fromCodePoint &&
    (String.fromCodePoint = function (a) {
      return 65536 > a
        ? String.fromCharCode(a)
        : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320);
    });
  String.prototype.j = String;
  String.g = !0;
  Array.g = !0;
  var Qg = {},
    Og = {},
    Pg = Number,
    Ng = Boolean,
    Rg = {},
    Sg = {};
  "undefined" != typeof performance &&
    "function" == typeof performance.now &&
    (Y.now = performance.now.bind(performance));
  jc.content = [
    {
      name: "layout",
      data: "0AIABQ4AR2FtZU92ZXJTY3JlZW4JAAEBBwB0cm9waHkzJ2amlkMAgAFEAAAWPwAAFj8BAAEHAHNwcml0ZXMGAHRyb3BoeQEBCwBuZXh0X2J1dHRvbgMAAJZDAIB3RAEAAQcAc3ByaXRlcwQAbmV4dAEBBwB0cm9waHkxJwAAIEKauTBEAABAPwAAQD8BAAEHAHNwcml0ZXMGAHRyb3BoeQEDBwB0cm9waHkyJwCABESauTBEAABAPwAAQD8BzcxMPQEAAQcAc3ByaXRlcwYAdHJvcGh5AAMHAHNwcml0ZXMEAGxvZ28DAADQQgAAcEICAAkAaGlnaHNjb3JlEABSb2JvdG9TbGFiLUJsYWNrPAMAACBBAAAaRAAAL0Rm5qlCOO3/AAACAAYAc2NvcmUxEABSb2JvdG9TbGFiLUJsYWNrUAMAACBBAIA1RAAAL0QAAOBC////AAACAAYAc2NvcmUyEABSb2JvdG9TbGFiLUJsYWNrUAMAACBBAIA1RAAAL0QAAOBCOO3/AAACAAUAbGV2ZWwQAFJvYm90b1NsYWItQmxhY2s8AwAAcEIAwCdEAAAWRAAAyEI47f8AABMAUGF1c2VOb0F1ZGlvT3ZlcmxheQMAAQELAHBsYXlfYnV0dG9uAwAAlkMAwKBDAQABBwBzcHJpdGVzBABwbGF5AQELAGhvbWVfYnV0dG9uAwAAQ0MAQD1EAQABBwBzcHJpdGVzBABob21lAQEOAHJlc3RhcnRfYnV0dG9uAwCAykMAQD1EAQABBwBzcHJpdGVzBwByZXN0YXJ0DABQYXVzZU92ZXJsYXkEAAEBDABzb3VuZF9idXR0b24DAAD/QwBAPUQBAAEHAHNwcml0ZXMFAHNvdW5kAQELAGhvbWVfYnV0dG9uAwAAtEIAQD1EAQABBwBzcHJpdGVzBABob21lAQEOAHJlc3RhcnRfYnV0dG9uAwAAlkMAQD1EAQABBwBzcHJpdGVzBwByZXN0YXJ0AQELAHBsYXlfYnV0dG9uAwAAlkMAwKBDAQABBwBzcHJpdGVzBABwbGF5CgBIb21lU2NyZWVuCAACAA8AaGlnaHNjb3JlX3ZhbHVlEABSb2JvdG9TbGFiLUJsYWNrUAMAAHBCAEBiRAAAFkQAAOBC////AAACAAsAbGV2ZWxfdmFsdWUQAFJvYm90b1NsYWItQmxhY2s8AwAAcEIAgFBEAAAWRAAAyEL///8AAAEBCwBwbGF5X2J1dHRvbgMAAJZDAAD/QwEAAQcAc3ByaXRlcwQAcGxheQADBwBzcHJpdGVzBABsb2dvAwAA0EIAAKBBAQEHAHRyb3BoeTEnAABwQpq5WEQAAEA/AABAPwEAAQcAc3ByaXRlcwYAdHJvcGh5AQMHAHRyb3BoeTInAAD/Q5q5WEQAAEA/AABAPwHNzEw9AQABBwBzcHJpdGVzBgB0cm9waHkBAQoAbW9yZV9nYW1lcycAAAdDZv6CRAAAQD8AAEA/AAEBDABzb3VuZF9idXR0b24DAACWQwAAKkQBAAEHAHNwcml0ZXMFAHNvdW5k",
    },
    {
      name: "levels",
      data: "dmVyc2lvbiAsMSAgICAgICwwICAgICwwICAgICwwICAgICAsMCAgICAgICAgLCAwCmxldmVsICAgLGNvbG9ycyAscm93cyAsY29scyAsc3BlZWQgLGRpc3RhbmNlICwgc3RyYXRlZ3kKMSAgICAgICAsMiAgICAgICw0ICAgICw4ICAgICwxLjQgICAsMTYgICAgICAgLCByOjItMAoyICAgICAgICwzICAgICAgLDEwICAgLDggICAgLDEuNSAgICwxNSAgICAgICAsIHIKMyAgICAgICAsMyAgICAgICwxNCAgICw4ICAgICwxLjYgICAsMTQgICAgICAgLCBwOjMtNAo0ICAgICAgICw0ICAgICAgLDE2ICAgLDggICAgLDEuNyAgICwxNCAgICAgICAsIHI6My0xCjUgICAgICAgLDQgICAgICAsMTggICAsOCAgICAsMC45ICAgLDE3ICAgICAgICwgcgo2ICAgICAgICw0ICAgICAgLDIwICAgLDggICAgLDEuNyAgICwxOCAgICAgICAsIHA6OC0xMAo3ICAgICAgICw0ICAgICAgLDIwICAgLDkgICAgLDEuMCAgICwxNiAgICAgICAsIHIKOCAgICAgICAsNSAgICAgICwxMCAgICw5ICAgICwxLjggICAsMTYgICAgICAgLCByOjMtMQo5ICAgICAgICw1ICAgICAgLDIwICAgLDEwICAgLDAuOCAgICwxNiAgICAgICAsIHA6My00CjEwICAgICAgLDUgICAgICAsMjUgICAsMTAgICAsMS4yICAgLDE1ICAgICAgICwgcjoyLTIKMTEgICAgICAsNiAgICAgICwyMCAgICwxMSAgICwwLjkgICAsMTQgICAgICAgLCBwOjMtNAoxMiAgICAgICw2ICAgICAgLDMwICAgLDExICAgLDIuNSAgICwxNCAgICAgICAsIHI6NC0wCjEzICAgICAgLDYgICAgICAsMTAgICAsMTIgICAsMC42ICAgLDE0ICAgICAgICwgcgoxNCAgICAgICw2ICAgICAgLDIwICAgLDEyICAgLDEuNCAgICwxNCAgICAgICAsIHA6NS02CjE1ICAgICAgLDYgICAgICAsNDAgICAsMTIgICAsMi4wICAgLDEzICAgICAgICwgcjozLTAKMTYgICAgICAsNiAgICAgICwyMCAgICwxMiAgICwwLjYgICAsMTAgICAgICAgLCByOjAtMQoxNyAgICAgICw2ICAgICAgLDIwICAgLDEyICAgLDAuNyAgICw3ICAgICAgICAsIHIKMTggICAgICAsNiAgICAgICwyMCAgICwxMiAgICwwLjkgICAsNyAgICAgICAgLCBy",
    },
    {
      name: "strings",
      data: "AgMAZW5pAA8AVGFwIHRvIGNvbnRpbnVlSwBPb3BzLCB0aGVyZSB3YXMgYSBwcm9ibGVtIDooIFRoaXMgc2hvdWxkbid0IGhhcHBlbi4gUGxlYXNlIHJlbG9hZCB0aGUgZ2FtZSEJAEF3LCBTbmFwIWRlfAAWAFRpcHBlbiB1bSBmb3J0enVmYWhyZW5YAEhvcHBsYSEgRXMgZ2FiIGVpbiBQcm9ibGVtIDooIERhcyBzb2xsdGUgbmljaHQgcGFzc2llcmVuLiBCaXR0ZSBsYWRlbiBTaWUgZGFzIFNwaWVsIG5ldSEIAE9oIG5laW4h",
    },
  ];
  na.ax = {}.toString;
  null == ArrayBuffer.prototype.slice && (ArrayBuffer.prototype.slice = xg.LC);
  Kc.Jk = !1;
  eb.xs = "Aw, Snap!";
  eb.body = "Oops, there was a problem :( This shouldn't happen. Please reload the game!";
  eb.info = "";
  A.on = !1;
  A.tf = !1;
  T.tv = !0;
  x.next = 0;
  sd.VERSION = new sd("1.2.7");
  ra.VERSION = new sd("1.2.7");
  db.Qd = new kg(
    function () {
      return Object.create(db.prototype);
    },
    null,
    128
  ).mB(128);
  Ra.count = 0;
  Pa.total = 0;
  Pa.eh = new Ra();
  Pa.Xn = new Z(512);
  Bb.time = 0;
  Bb.cy = 0.016666666666666666;
  Bb.Ur = 0;
  Bb.Gp = 1;
  Bb.$C = 0;
  p.U();
  p.vg = ["sprites.png", "audio/{audio}/sounds.{audio}"];
  p.MAX = 2;
  p.nB = [0];
  p.JB = [0, 1];
  lc.aw = "0123456789abcdef".split("");
  pd.state = new Db();
  Aa.enabled = !0;
  N.Hj = void 0;
  N.active = !1;
  N.eh = new Ra();
  nd.Vw = 65535;
  Gc.Xr = !0;
  $f.rq = [
    0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575,
    2097151, 4194303, 8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647,
    -1,
  ];
  qb.Ov = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  qb.jq = xa.Co(qb.Ov);
  Ab.wi = new DataView(new ArrayBuffer(8));
  wa.fo = "en";
  bb.instance = new bb();
  K.R = 0;
  zb.TYPE = K.Ea();
  zb.count = 0;
  id.TYPE = K.Ea();
  Kd.TYPE = K.Ea();
  Jd.TYPE = K.Ea();
  bc.TYPE = K.Ea();
  bc.count = 0;
  hd.TYPE = K.Ea();
  gd.TYPE = K.Ea();
  fd.TYPE = K.Ea();
  ic.TYPE = K.Ea();
  ic.count = 0;
  sb.TYPE = K.Ea();
  sb.count = 0;
  sb.yb = [];
  Nb.TYPE = K.Ea();
  Nb.count = 0;
  Cc.TYPE = K.Ea();
  rb.TYPE = K.Ea();
  Ia.count = 0;
  Qa.IDLE =
    "AABlYgAAZWMABWRjAABkZAAAY2QAAGNlAABjZQAAYmUAAGJmAABiZgAAYmb7AGJmAAViZgAAYmcAAGJnAABiZwD7YmcAAGJnAABiZwAAY2gAAGNo+wVjZwAAY2f7AGNnAABjZvsAZGYABWRm+wVkZgAFZGX7AGVlAABlZfsAZWUAAGVk+wVlZAAFZmQABWZjBQBmYwAAZmMAAGdjBQVnYgUFZ2IFBWdiAABoYgAFZ2L7BWdiAAVnYgAFZ2IABWdiAAVnYvsFZmIABWZiAAVmYgAFZmIABWZiAABmYg";
  Qa.iw =
    "AAAF/FoATgAAAL/6XABMAAAAp/ldAEsAAACK+F4ASQAAAHL3YABIAAAAVfZhAEYAAAA99WIARQAAACD0ZABEAAAAlPNrAEwAAAAc83EAUwAAALTydwBZAAAAXvJ8AF8AAAAe8n8AYgAAAPDxggBlAAAA0/GDAGcAAADI8YQAaAAAAHPxgQBnAAAAHvF/AGcAAADE8H0AZgAAAG/wewBmAAAAFfB4AGUAAADA73YAZQAAAGbvdABkAAAADO9xAGQAAADf7nIAYgAAALfucwBhAAAAiu5zAGAAAABi7nQAXwAAAD/udABeAAAAF+51AFwAAAD07XUAWwAAANHtdgBaAAAAru12AFkAAACL7XcAWAAAAG3tdwBXAAAAT+14AFcAAAAx7XYAWAAAABPtdQBZAAAA9exzAFoAAADS7HEAWwAAALTscABcAAAAluxvAF0AAAB47G0AXgAAAFrsbABfAAAAPOxqAGAAAAAZ7GkAYQAAAPvrZwBiAAAA3etmAGQAAAC/62YAYgAAAKHrZwBhAAAAg+toAGAAAABg62kAXwAAAELragBeAAAAJOtrAF0AAAAG62sAXAAAAOjqbABbAAAAyuptAFoAAACn6m4AWQAAAInqbwBYAAAAa+pwAFcAAABN6m4AVwAAAC/qbQBXAAAADOpsAFgAAADu6WsAWAAAANDpagBZAAAAsulpAFkAAACP6WgAWgAAAHHpZgBaAAAAU+llAFoAAAA16WQAWwAAABfpYwBbAAAA9OhiAFwAAADW6GEAXAAAALjoYABdAAAA2P9WAFMAAAAF/FoATgA";
  M.jr = 720;
  M.vf = 1280;
  M.zo = 6;
  M.EA = 2;
  M.DA = 10;
  M.LA = 1;
  M.ou = !0;
  M.vr = 6;
  M.hB = [0, 10, 10, 25, 50, 100, 250, 500, 1e3];
  M.ox = 100;
  M.Ao = 7;
  M.Fu = 0.3;
  M.Eu = 0.5;
  M.Zh = 1.25;
  M.uu = 0.2;
  M.Fx = 2;
  M.Zk = 10;
  M.MA = 3;
  M.pA = 20;
  ka.level = 1;
  ka.Cs = !1;
  ka.Bs = !1;
  ka.Kn = !1;
  ka.jg = -1;
  ka.xl = -1;
  ka.Pm = -1;
  ka.Oa = 3;
  ka.qo = -1;
  C.lw = 1001;
  C.mw = 1002;
  C.nw = 1012;
  C.ow = 1013;
  C.pw = 1014;
  C.qw = 1015;
  C.rw = 1016;
  C.sw = 1017;
  C.tw = 1018;
  C.uw = 1019;
  C.vw = 1021;
  C.mm = 1022;
  C.ww = 1024;
  C.xw = 1025;
  C.yw = 1026;
  C.zw = 1027;
  C.Aw = 1028;
  C.Bw = 1029;
  C.Cw = 1030;
  C.Dw = 1031;
  C.Ew = 1032;
  C.wq = 1033;
  C.Fw = 1034;
  C.Gw = 1035;
  C.Hw = 1036;
  C.Iw = 1037;
  C.Jw = 1038;
  C.Kw = 1039;
  C.Lw = 1040;
  C.Mw = 1045;
  C.Nw = 1046;
  C.Ow = 1047;
  C.Pw = 1048;
  C.Qw = 1049;
  C.Rw = 1050;
  var ya = 0,
    ug = -1,
    wc = -1,
    Gg = -1,
    Hg = -1;
  xb.count = 0;
  dd.yb = new Z();
  Na.yg = Array(12);
  Na.stack = Array(65536);
  X.MC = !1;
  X.Qg = 33;
  X.kD = "none";
  X.jD = "stick";
  X.px = "none";
  X.Bx = "destroy";
  X.Ax = "reload";
  X.Wq = 80;
  X.Cx = !0;
  X.yx = 0.35;
  X.zx = 0;
  X.FA = 80;
  X.Rj = -1;
  X.Bd = { enabled: !0, ca: 3, Ji: 3, Uc: 0.2, ef: 500, OC: !1 };
  X.ts = !1;
  ja.gw = 0;
  ja.sq = 1;
  ja.zj = 2;
  ja.yj = 3;
  ja.fw = 4;
  ja.tg = 5;
  ja.hw = 6;
  ja.xj = 7;
  ja.counter = Array(ja.xj);
  Lb.TYPE = K.Ea();
  cb.TYPE = K.Ea();
  bd.TYPE = K.Ea();
  Kb.TYPE = K.Ea();
  Ed.TYPE = K.Ea();
  ad.TYPE = K.Ea();
  xc.count = 0;
  nb.Tw = 0.3;
  nb.Rv = 0.1;
  nb.kw = 0.2;
  nb.Ww = 0.2;
  Jb.Gt = [20, 20, 112, 125, 112, 81, 140, 36];
  var Ug = !0;
  Ha.width = 0;
  Ha.height = 0;
  Ha.map = new Db();
  $a.Aj = "source-over";
  $a.Sw = "source-atop";
  $a.Sv = "destination-over";
  vb.kt = 0;
  Vc.HA = 0;
  gc.Fz = 1;
  gc.qy = !0;
  gc.oo = 256;
  qa.R = 0;
  qa.kq = 0;
  qa.fm = 0;
  qa.oq = 10;
  xd.TYPE = qa.Ea();
  Wb.TYPE = qa.Ea();
  Fa.R = 0;
  Sc.TYPE = Fa.Ea();
  Vb.TYPE = Fa.Ea();
  ib.TYPE = Fa.Ea();
  Rc.TYPE = Fa.Ea();
  Hb.tq = new Hb(nc.qq);
  Hb.jw = new Hb(nc.pq);
  lb.nq = 400;
  lb.mq = 640;
  lb.lq = 480;
  Ea.count = 0;
  Ea.Qv = 1;
  gb.count = 0;
  Fb.count = 0;
  Ua.Ol = new Tb();
  Eb.mv = new vd();
  Eb.nv = new vd();
  pa.R = 0;
  pa.count = 0;
  W.TYPE = pa.Ea();
  W.count = 0;
  ma.TYPE = pa.Ea();
  ma.count = 0;
  tc.TYPE = qa.Ea();
  La.TYPE = pa.Ea();
  La.count = 0;
  oa.Cp = new Tb();
})(
  "undefined" != typeof exports
    ? exports
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof self
    ? self
    : this,
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : this
);
