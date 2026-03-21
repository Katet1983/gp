(function (Qd, Nb) {
  function ld() {
    var a = pb.decode(ld.OK),
      b = new qb(a);
    b.GJ(!0);
    this.xG = b.Hd();
    this.iF = b.Hd();
    var c = b.Hd();
    a = a.sub(12, a.length - 12);
    b = new ra(new ArrayBuffer(c));
    c = new ra(new ArrayBuffer(c));
    Bb.Ic(a, b);
    Bb.Ic(b, c);
    this.data = [];
    a = Nh.yF(c);
    b = 0;
    for (c = a.length; b < c; ) {
      var d = b++;
      this.data[d] = a[d];
    }
  }
  function zf(a, b) {
    this.ux = new ic();
    this.nz = new ic();
    this.sourceIndex = this.tag = this.T = this.cj = 0;
    this.source = a;
    this.tg = b;
  }
  function ic() {
    this.ee = [];
    this.table = [];
    for (var a = [], b = 0; 16 > b; ) ++b, a.push(0);
    this.table = a;
    a = [];
    for (b = 0; 288 > b; ) ++b, a.push(0);
    this.ee = a;
  }
  function Bb() {}
  function Pg() {}
  function Af() {
    this.We = this.Rf = null;
    this.va = this.Hh = 0;
    this.AE = new ld();
    this.reset();
  }
  function Ec(a) {
    this.json = a;
  }
  function Bf(a) {
    this.Iw = [];
    this.dz = [];
    try {
      if (a instanceof ra) this.$H(a);
      else throw 34;
      this.Xi.lineHeight < this.info.size && (this.Xi.lineHeight = this.info.size);
    } catch (b) {
      throw 35;
    }
  }
  function Cf() {
    this.advance = 0;
    this.wj = new Fc(1024);
    this.padding = Array(4);
    for (var a = 0; 4 > a; ) this.padding[a++] = 0;
  }
  function Df() {
    this.x = this.y = this.w = this.P = this.offsetX = this.offsetY = this.Pk = 0;
    this.code = -1;
  }
  function Rd(a) {
    this.src = a;
  }
  function md() {}
  function Sd() {
    this.Bk = !1;
    this.Xg = new E();
    this.ba = new E();
    this.Ua = new jc();
  }
  function Td() {
    this.sf = null;
    this.frames = [];
    this.scale = 1;
  }
  function Ef(a, b) {
    this.id = b.id;
    this.name = b.name;
    var c = b.Ua;
    a = new jc();
    a.x = c.x;
    a.y = c.y;
    a.width = c.width;
    a.height = c.height;
    this.frame = a;
    (this.Bk = b.Bk)
      ? ((a = b.Xg),
        (c = new E()),
        (c.x = a.x),
        (c.y = a.y),
        (this.Xg = c),
        (a = b.ba),
        (c = new E()),
        (c.x = a.x),
        (c.y = a.y))
      : ((c = new E()), (c.x = 0), (c.y = 0), (this.Xg = c), (c = new E()), (c.x = b.Ua.width), (c.y = b.Ua.height));
    this.ba = c;
  }
  function Ud(a, b) {
    this.$q = new kb();
    this.za = a;
    this.sf = b.sf;
    this.wo = b.frames.length;
    this.ue = new Z(this.wo);
    a = 0;
    for (var c = b.frames; a < c.length; ) this.ue.add(c[a++].id);
    this.ue.sort(function (e, f) {
      return e - f;
    }, !0);
    a = this.ue;
    4096 < a.m[a.o - 1] && (this.Ah = new Vd(P.Wh(this.wo)));
    a = this.ue;
    a = P.min(4096, a.m[a.o - 1]) + 1;
    this.frames = new Z().sa(a, null);
    a = 0;
    for (c = b.frames; a < c.length; ) {
      b = c[a];
      ++a;
      var d = new Ef(this, b);
      4096 >= d.id && (this.frames.m[d.id] = d);
      null != this.Ah && this.Ah.set(d.id, d);
      this.$q.P[b.name] = d;
    }
  }
  function Gc(a) {
    this.Zf = 0;
    this.C = a;
  }
  function ua() {}
  function Ff() {
    this.size = 0;
    this.data = [];
  }
  function kc() {
    this.xK = new W();
    this.wK = new W();
    this.Cc = new Z(64);
    this.yw = new Ff();
    null == kc.zw && (kc.zw = new Af());
  }
  function Wd() {
    this.ed = new Z(32);
    this.Cc = new Z(32);
  }
  function Gf() {
    this.ja = new W();
    this.overflow = !1;
    this.me = new Z(256);
    this.ed = new Z(64);
  }
  function Hf() {
    this.multiline = this.yE = !1;
    this.wj = !0;
    this.GB = this.$r = this.Vm = 0;
    this.align = -1;
    this.width = this.height = 100;
    this.size = 10;
    this.scale = 1;
    this.text = "";
  }
  function nd() {}
  function Xd(a) {
    this.Pn = 0;
    lc.call(this, a);
  }
  function va(a, b) {
    this.qp = this.vr = !1;
    this.Nb = !0;
    var c = new db("SpriteText");
    c.flags |= 2048;
    na.call(this, c, va.TYPE);
    this.yi = new Wd();
    this.ra = new Hf();
    this.bd = new Gf();
    null != a && a.appendChild(this);
    null != b && (this.cc(b), (this.ra.size = this.Nd.Vl));
    va.count++;
  }
  function rb(a) {
    this.repeat = -1;
    this.Ih = 0;
    this.controller = null;
    this.length = -1;
    this.C = a;
  }
  function Ob() {
    Hc.call(this, Ob.TYPE);
  }
  function ia(a, b, c) {
    this.jt = -1;
    na.call(this, new db(a), ia.TYPE);
    this.flags |= 1024;
    null != b && b.appendChild(this);
    if (null != c) for (a = 0; a < c.length; ) this.appendChild(c[a++]);
    ia.count++;
  }
  function If(a) {
    this.C = a;
  }
  function Q(a, b, c) {
    var d = new E();
    d.x = 0;
    d.y = 0;
    this.ba = d;
    this.Ug = null;
    this.lh = -1;
    na.call(this, (this.Rb = new lc()), Q.TYPE);
    null != a && a.appendChild(this);
    null != b && this.cc(b);
    null != c && this.oc(c);
    Q.count++;
  }
  function na(a, b) {
    this.Re = this.Zp = null;
    this.od = !0;
    this.fc = 1;
    this.Lb = this.Mb = this.he = this.ie = this.zb = 0;
    this.pa = this.Vb = 1;
    this.ga = this.qa = 0;
    this.flags = 96;
    this.node = a;
    this.node.client = this;
    this.type = b;
    na.count++;
  }
  function Cb() {
    this.D = 15;
    this.scale = new E();
    this.translate = new E();
    this.matrix = new od();
    this.Id();
  }
  function Yd() {}
  function Ra() {}
  function lc(a, b) {
    sb.call(this, a, b);
    this.type = 1;
  }
  function sb(a, b) {
    this.uk = null;
    this.flags = 512;
    ya.call(this, a, b);
    this.Lg = this.Uw(b);
    this.bu();
    this.uk = Array(4);
    sb.count++;
  }
  function db(a, b) {
    this.Tf = 0;
    this.da = null;
    this.flags = 256;
    ya.call(this, a, b);
    db.count++;
  }
  function ya(a, b) {
    this.client = null;
    this.g = new Cb();
    this.local = new Cb();
    Ic.call(this);
    this.name = a;
    this.flags |= 232;
    this.key = mc.next();
    this.$g = this.Uw(b);
    ya.count++;
  }
  function eb() {}
  function Ub(a) {
    this.state = a;
  }
  function Jf(a) {
    this.Kc = new Z();
    this.stack = new Pb();
    this.nA = 4;
    this.ja = new W();
    this.Sl = Array(4);
    this.Zj = Array(4);
    this.wm = new Z(1024);
    this.V = a;
    this.wm.Hb = !0;
    for (a = 0; 4 > a; ) {
      var b = a++;
      this.Zj[b] = new Jc();
      var c = new E();
      c.x = 0;
      c.y = 0;
      c.z = 0;
      this.Sl[b] = c;
    }
  }
  function Zd() {
    this.yq = new Kf();
    Wa.call(this, 1);
  }
  function Kf() {
    var a = new Vb();
    a.r = 0;
    a.Za = 0;
    a.b = 0;
    a.a = 0;
    this.offset = a;
    a = new Vb();
    a.r = 1;
    a.Za = 1;
    a.b = 1;
    a.a = 1;
    this.ld = a;
  }
  function $d() {
    this.ja = null;
    Wa.call(this, 3);
  }
  function ae() {
    Db.call(this, 1);
  }
  function fb() {
    this.VG = ba.Ac();
    this.Lr = ba.Ac();
    this.Mr = ba.Ac();
    this.kL = ba.Ac();
    this.sI = ba.Ac();
    var a = new E();
    a.x = fb.Pu;
    a.y = fb.Ou;
    this.size = a;
    this.Lk = 1;
    this.ga = this.qa = this.zb = 0;
    this.D = 7;
    this.flipY = !0;
    this.Ap = !1;
    this.ip(-fb.Qu / 2, fb.Qu / 2);
  }
  function be() {
    var a = new W();
    a.j = a.l = Infinity;
    a.u = a.A = -Infinity;
    this.box = a;
    Db.call(this, 2);
  }
  function Db(a) {
    this.type = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    a.z = 0;
    this.K = a;
    this.la = 0;
  }
  function pd(a) {
    Wa.call(this, 0);
    this.alpha = a;
  }
  function Eb(a) {
    Wa.call(this, 2);
    this.hq = a;
    this.Ue |= (1 << a.G) << 4;
    5 == a.G && (this.Ue = this.Ue | ((1 << a.src.G) << 12) | ((1 << a.Sc.G) << 20));
  }
  function Wa(a) {
    this.slot = this.type = a;
    this.Ue = 1 << this.slot;
  }
  function Kc(a, b, c, d) {
    this.Ht = !1;
    this.Xj = this.Yj = this.Dp = this.ku = this.Cp = this.ju = 0;
    this.Oo = 1;
    pa.call(this, Kc.TYPE);
    this.AB = a;
    this.Vt = b;
    this.za = c;
    this.Pc = d;
  }
  function Sa(a) {
    this.frame = -1;
    this.Oj = this.Pj = 0;
    this.gk = this.hk = 1;
    this.Ua = new jc();
    this.flags = 0;
    pa.call(this, Sa.TYPE);
    if (null != a) {
      this.active = a.active;
      var b = this.Ua,
        c = a.Ua;
      b.x = c.x;
      b.y = c.y;
      b.width = c.width;
      b.height = c.height;
      this.frame = a.frame;
      this.flags = a.flags;
      this.za = a.za;
      this.gk = a.gk;
      this.hk = a.hk;
      this.Oj = a.Oj;
      this.Pj = a.Pj;
    }
  }
  function tb(a) {
    pa.call(this, tb.TYPE);
    null != a && ((this.active = a.active), (this.color = a.color));
  }
  function Lf(a, b) {
    this.x = a;
    this.y = b;
    this.zB = this.code = 0;
    this.gq = -1;
  }
  function Lc(a, b, c) {
    null == c && (c = -1);
    null == b && (b = -1);
    this.fillColor = 0;
    this.Ht = !1;
    pa.call(this, Lc.TYPE);
    this.za = a;
    this.Nd = a.Pc.sf;
    this.grid = new Fb(0 > b ? 10 : b, 0 > c ? 10 : c);
    this.grid.forEach(function (d, e, f) {
      return new Lf(e, f);
    });
  }
  function ub() {
    ma.call(this, ub.TYPE);
  }
  function qd() {
    this.ez = new Mf();
    this.lastIndex = 0;
    ma.call(this, qd.TYPE);
  }
  function Mf() {
    this.alpha = 1;
    this.rotation = this.JB = this.KB = 0;
    this.NA = this.OA = 1;
  }
  function Hc(a) {
    this.Xo = this.Gj = this.Th = 0;
    ma.call(this, a);
  }
  function ma(a) {
    this.fe = !1;
    this.lc = 0;
    this.pm = 1;
    this.Xc = this.Ud = this.$a = 0;
    this.type = a;
    this.repeat = 1;
    ma.Ii++;
  }
  function Ic() {
    this.IE = !0;
    this.controllers = null;
  }
  function Nf(a, b) {
    this.value = a;
    this.zg = b;
  }
  function Of(a, b) {
    this.name = a;
    this.frames = b;
    this.rm = 0;
    this.Bi = b.length;
    this.Aq = b[0].zg;
    a = 2;
    for (var c = b[1].zg; a < this.Bi; )
      if (b[a++].zg != c) {
        this.Aq = 0;
        break;
      }
    this.Kd = Array(this.Bi + 1);
    this.values = Array(this.Bi);
    for (a = 0; a < this.Bi; ) (c = b[a]), (this.Kd[a] = this.rm), (this.values[a] = c.value), (this.rm += c.zg), ++a;
    this.Kd[a] = this.rm;
  }
  function ce() {
    this.pw = 2;
    this.lw = !0;
    this.Um = this.CG = null;
    this.Yf = 0;
  }
  function de(a, b, c) {
    this.Mc = null;
    lb.call(this, a, b, c);
  }
  function Mc() {
    this.bx = null;
    this.Te = new Z();
    this.ww = [0, 1, 774, 775, 770, 771, 772, 773];
    this.lB = this.hx = -1;
    sa.call(this, "webgl");
    this.tA = Array(pa.X);
    this.lm = !1;
    this.ZA();
  }
  function ee(a) {
    this.size = 0;
    this.matrix = new Float32Array(16);
    this.V = a;
    this.sa();
  }
  function fe(a) {
    this.V = a;
    this.sa();
  }
  function ge(a) {
    this.matrix = new Float32Array(16);
    this.V = a;
    this.sa();
  }
  function Wb() {}
  function rd() {
    this.stencil = !0;
    this.preserveDrawingBuffer = !1;
    this.premultipliedAlpha = !0;
    this.powerPreference = "default";
    this.antialias = this.depth = this.failIfMajorPerformanceCaveat = !0;
    this.alpha = this.desynchronized = !1;
  }
  function he(a) {
    this.size = 0;
    this.matrix = new Float32Array(16);
    this.V = a;
    this.sa();
  }
  function Gb() {}
  function ie(a, b) {
    this.mu = !1;
    this.bs = [];
    this.br = !1;
    var c = this;
    Xb.call(this);
    this.Hq = new Pf(-1, -1);
    this.Jq = null;
    null == b && (b = new ce());
    b.lw || this.VE();
    this.Ar = !!navigator.platform && /iPad|iPhone/.test(navigator.platform);
    !this.Ar &&
      this.WG() &&
      this.addListener(window.document, "fullscreenchange", function () {
        c.br = document.br;
        c.Js(c.br);
      });
    this.addListener(window.document, "visibilitychange", function () {
      var d = !window.document.hidden;
      c.Ko(d);
      c.J(d);
    });
    this.Ar
      ? this.addListener(window, "orientationchange", function () {
          c.Fo(c.iy());
          setInterval(function () {
            window.scrollTo(0, 1);
          }, 1);
        })
      : typeof window.onorientationchange &&
        (window.onorientationchange = function () {
          c.Fo(c.iy());
        });
    this.Yf = 0 == b.Yf ? window.devicePixelRatio : b.Yf;
    null != b.Um
      ? ((this.canvas = window.document.getElementById(b.Um)),
        null == this.canvas &&
          ((this.canvas = window.document.createElement("canvas")),
          (this.canvas.id = b.Um),
          window.document.body.appendChild(this.canvas)))
      : ((this.canvas = window.document.createElement("canvas")),
        (this.canvas.id = "gfx"),
        (this.canvas.style.position = "absolute"),
        (this.canvas.style.width = "100%"),
        (this.canvas.style.height = "100%"),
        (this.canvas.style.touchAction = "none"),
        (this.canvas.style.userSelect = "none"),
        (this.canvas.style.outline = "none"),
        this.canvas.style.setProperty("-webkit-user-select", "none"),
        (this.canvas.style.zIndex = "0"),
        window.document.body.appendChild(this.canvas),
        this.rJ(b.CG),
        (this.canvas.tabIndex = 1),
        this.canvas.focus());
  }
  function Xb() {
    this.od = !0;
    this.Pz = function () {};
    this.Fo = function () {};
    this.Js = function () {};
    this.Ko = function () {};
    this.Pa = function () {};
    Qb.call(this);
  }
  function gb(a, b, c) {
    lb.call(this, a, b, c);
  }
  function lb(a, b, c) {
    this.Co = [];
    this.parent = null;
    this.children = [];
    this.scale = 1;
    this.dd = this.Vc = 0;
    this.group = -1;
    Qb.call(this);
    this.V = a;
    this.flags = b;
    this.name = c;
  }
  function Qb() {
    this.Nl = new jc();
    var a = new W();
    a.j = 0;
    a.l = 0;
    a.u = 1;
    a.A = 1;
    this.viewport = a;
    this.Yf = 1;
    this.width = this.height = this.Rm = this.Sk = 0;
    a = new Vb();
    a.r = 1;
    a.Za = 1;
    a.b = 1;
    a.a = 1;
    this.color = a;
  }
  function Xa() {
    this.$w = new Ya();
    this.QE = new Ya();
    this.Nj = new Ya();
    this.lt = ba.Ac();
    this.NK = "rgba(0,0,0,0)";
    this.op = 0;
    this.AK = new Z(32);
    this.zK = new Z(32);
    this.DE = ["none", "source-over", "multiply", "lighter", "screen", null];
    this.Lq = null;
    this.Vr = -1;
    this.fn = Xa.Cm;
    this.Wr = null;
    this.It = !1;
    sa.call(this, "canvas");
    this.lm = !0;
    this.Vk = window.document.createElement("canvas").getContext("2d", null);
    this.ZA();
  }
  function sa(a) {
    this.ts = 1e3;
    this.zi = new Ya();
    this.lm = !1;
    this.Nq = 0;
    this.qq = !0;
    this.Kx = this.ti = !1;
    this.km = this.Gq = !0;
    this.Os = function () {};
    this.$i = null;
    this.Bf = 1;
    this.en = null;
    var b = ba.Ac();
    ba.Id(b);
    this.kh = b;
    b = ba.Ac();
    ba.Id(b);
    this.hn = b;
    b = ba.Ac();
    ba.Id(b);
    this.ex = b;
    b = ba.Ac();
    ba.Id(b);
    this.Xe = b;
    this.bc = null;
    this.name = a;
    this.Fq = new Jf(this);
    this.Mi = 15;
    this.pt(new fb());
  }
  function je(a) {
    this.name = a;
    this.storage = Qg.PF();
  }
  function ke(a) {
    this.Ng = a;
  }
  function nc() {}
  function hb() {
    this.jA = [];
    this.loaded = !1;
    this.tc = function () {};
    this.Gs = function () {};
  }
  function oc() {
    this.fm(0);
  }
  function le(a) {
    null == a && (a = 5489);
    this.ec = Array(624);
    this.wl = Array(2);
    this.wl[0] = 0;
    this.wl[1] = -1727483681;
    this.fm(a);
  }
  function pc(a) {
    this.fm(a);
  }
  function sd() {}
  function Rg() {}
  function E() {}
  function jc() {}
  function me() {}
  function Rb() {
    this.direction = new E();
    this.origin = new E();
  }
  function Jc() {
    this.sc = new E();
  }
  function Qf() {}
  function od() {}
  function P() {}
  function Pf(a, b) {
    this.x = a;
    this.y = b;
  }
  function Rf(a) {
    this.a = this.b = a;
  }
  function Vb() {}
  function td() {
    this.K = new E();
  }
  function W() {}
  function Sg() {}
  function Qg() {}
  function ta() {}
  function Sf(a) {
    this.hI = a;
  }
  function Ia() {
    this.element = null;
    this.xH = 0;
    this.ue = [];
    this.touches = {};
    this.first = null;
    this.enabled = !1;
    this.xd = 0;
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.anchor = a;
    this.Sm = 0;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.position = a;
    this.Lj = 0;
    this.maxTouchPoints = 1;
    this.element = window;
    this.passive = this.tB();
    this.Sm |= 14;
    window.document.body.style.setProperty("touch-action", "none");
    window.document.body.style.setProperty("-ms-touch-action", "none");
    window.document.body.addEventListener(
      "touchmove",
      function (b) {
        b.preventDefault();
      },
      this.passive && { passive: !1 }
    );
    this.event = new Sf(this);
    this.enable();
  }
  function Tf(a, b, c) {
    this.keyboard = a;
    this.code = b;
    this.xd = c;
  }
  function Ta() {
    this.enabled = !1;
    this.time = 0;
    this.hw = Array(255);
    this.Gb = new Nc();
    this.keys = Array(255);
    for (var a = (this.location = 0); 255 > a; ) this.hw[a++] = 0;
    a = [];
    for (var b = 0; 256 > b; ) ++b, a.push(0);
    b = this.flags = a;
    for (a = 37; 41 > a; ) b[a++] |= 1;
    for (a = 48; 58 > a; ) b[a++] |= 2;
    for (a = 65; 91 > a; ) b[a++] |= 4;
    this.enable();
  }
  function oa() {}
  function da() {}
  function ud(a) {
    this.current = 0;
    this.rw = a;
  }
  function qc() {}
  function qb(a, b, c) {
    null == b && (b = 0);
    null == c && (c = a.length - b);
    if (0 > b || 0 > c || b + c > a.length) throw 23;
    this.b = a.b;
    this.va = b;
    this.zk = this.xe = c;
  }
  function ne() {}
  function Uf() {
    this.size = this.va = 0;
  }
  function oe(a, b, c) {
    null == a && (a = "Not implemented");
    Oc.call(this, a, b, c);
  }
  function Oc(a, b, c) {
    Ja.call(this, a, b);
    this.Uo = null == c ? { fileName: "(unknown)", lineNumber: 0, className: "(unknown)", methodName: "(unknown)" } : c;
  }
  function kb() {
    this.P = Object.create(null);
  }
  function pe(a) {
    for (var b = a.length, c = 1; b > 1 << c; ) ++c;
    if (8 < c || b != 1 << c) throw 19;
    this.Ni = a;
    this.Hz = c;
  }
  function pb() {}
  function ra(a) {
    this.length = a.byteLength;
    this.b = new Uint8Array(a);
    this.b.pE = a;
    a.zG = this;
    a.pL = this.b;
  }
  function qe(a, b, c) {
    Ja.call(this, String(a), b, c);
    this.value = a;
  }
  function rc(a) {
    var b = this;
    this.id = setInterval(function () {
      b.Ic();
    }, a);
  }
  function re() {}
  function Vf() {}
  function ha() {}
  function Yb() {}
  function Wf() {}
  function Tg() {}
  function vd(a) {
    this.kd = a;
    this.reset();
  }
  function se(a, b, c) {
    null == b && (b = !1);
    null == a && (a = 1);
    this.Va = null;
    this.o = 0;
    this.Hb = !1;
    this.Uc = -2;
    this.Gg = 1 > a ? 1 : a;
    this.S = a;
    this.Ae = b;
    null != c && ((a = this.o = c.length), (b = this.S), (this.S = a > b ? a : b));
    this.m = Array(this.S + 1);
    this.m[0] = null;
    if (null != c) {
      a = this.m;
      b = 1;
      for (var d = this.o + 1; b < d; ) {
        var e = b++;
        a[e] = c[e - 1];
      }
      this.NI();
    }
  }
  function Fc(a, b) {
    null == b && (b = -1);
    this.ze = this.o = 0;
    this.Uc = -3;
    -1 == b && (b = a);
    this.S = b;
    this.Dl = a - 1;
    this.xj = ha.sa(Array(a), -1);
    this.m = Array(3 * this.S);
    this.jd = Array(this.S);
    var c = 2;
    a = this.m;
    b = 0;
    for (var d = this.S; b < d; ) ++b, (a[c - 1] = -2147483648), (a[c] = -1), (c += 3);
    a = this.jd;
    b = 0;
    for (d = this.S - 1; b < d; ) (c = b++), (a[c] = c + 1);
    a[this.S - 1] = -1;
  }
  function Vd(a, b) {
    null == b && (b = -1);
    this.Va = null;
    this.ze = this.o = 0;
    -1 == b && (b = a);
    2 > b && (b = 2);
    this.S = b;
    this.Ha = new Fc(a, this.S);
    this.Cj = Array(this.S);
    this.jd = Array(this.S);
    this.Cl = ha.sa(Array(this.S), -2147483648, 0, this.S);
    a = this.jd;
    b = 0;
    for (var c = this.S - 1; b < c; ) {
      var d = b++;
      a[d] = d + 1;
    }
    a[this.S - 1] = -1;
  }
  function te() {}
  function mc() {}
  function Pc(a) {
    this.Fg = null;
    this.us = 0;
    this.visible = !0;
    this.mb = a;
    this.eb = null;
    this.tb = !1;
  }
  function wd(a, b) {
    this.node = a;
    this.sf = b;
    this.mc = this.next = null;
  }
  function xd(a) {
    this.kd = a;
    this.zj = this.kd.Ec;
  }
  function ue() {
    this.ko = this.jo = 16;
    this.Va = null;
    this.o = 0;
    this.Ec = null;
    this.sw = this.Hb = !1;
    this.Bj = Array(this.ko);
    this.Of = Array(this.jo);
  }
  function Pb(a, b, c) {
    null == a && (a = 16);
    this.Va = null;
    this.Xa = 0;
    this.Uc = -2;
    this.S = this.Gg = 1 > a ? 1 : a;
    if (null != b) {
      a = this.Xa = b.length;
      var d = this.S;
      this.S = a > d ? a : d;
    }
    this.m = Array(this.S);
    if (null != b) {
      a = this.m;
      d = 0;
      for (var e = this.Xa; d < e; ) {
        var f = d++;
        a[f] = b[f];
      }
    }
    c && (this.Uc = 0);
  }
  function Xf() {}
  function Nc(a, b, c) {
    null == a && (a = 16);
    this.o = this.Sa = 0;
    this.Uc = -2;
    this.S = this.Gg = 1 > a ? 1 : a;
    if (null != b) {
      a = this.o = b.length;
      var d = this.S;
      this.S = a > d ? a : d;
    }
    this.m = Array(this.S);
    if (null != b) {
      a = this.m;
      d = 0;
      for (var e = this.o; d < e; ) {
        var f = d++;
        a[f] = b[f];
      }
    }
    c && (this.Uc = 0);
  }
  function ve() {}
  function yd(a) {
    this.kd = a;
    this.m = this.kd.m;
    this.Qf = this.kd.o;
    this.Cd = 0;
  }
  function zd(a, b) {
    null == b && (b = 0);
    null == a && (a = 0);
    this.x = a;
    this.y = b;
  }
  function Qc() {}
  function Fb(a, b, c) {
    if (null != c) {
      this.ca = a;
      this.Ha = b;
      a = this.m = Array(this.ca * this.Ha);
      b = 0;
      for (var d = this.ca * this.Ha; b < d; ) {
        var e = b++;
        a[e] = c[e];
      }
    } else (this.ca = a), (this.Ha = b), (this.m = Array(this.ca * this.Ha));
  }
  function we() {
    Hb.call(this, null, "window");
    this.Pa(null);
  }
  function sc(a, b) {
    null == b && (b = 0.5);
    this.so = 0;
    Zb.call(this);
    this.axis = a;
    this.JJ(b);
  }
  function Yf(a) {
    this.m = a;
  }
  function tc(a, b) {
    this.spacing = 2;
    Zb.call(this);
    this.rows = b;
    this.cols = a;
    for (var c = [], d = 0; d < a; ) ++d, c.push(1 / a);
    d = [];
    for (a = 0; a < b; ) ++a, d.push(1 / b);
    this.Ig = [c, d];
  }
  function Zb() {
    this.type = this.getType();
  }
  function Hb(a, b) {
    this.Vj = this.Wj = 0;
    var c = new E();
    c.x = 1;
    c.y = 1;
    this.scale = c;
    c = new E();
    c.x = 0;
    c.y = 0;
    this.position = c;
    this.vG = !1;
    c = new E();
    c.x = 0;
    c.y = 0;
    this.Xf = c;
    c = new E();
    c.x = 0;
    c.y = 0;
    this.size = c;
    this.Nh = [];
    c = new W();
    c.j = 0;
    c.l = 0;
    c.u = 0;
    c.A = 0;
    this.Nf = c;
    this.rd = null;
    this.Tf = 0;
    null != b && (this.name = b);
    null != a && this.La(a);
  }
  function Ad(a) {
    A.call(this);
    this.$j = new Q(a, 2, "plank_window");
    this.C = new Q(a, 2, "pergament");
  }
  function Ib(a, b, c, d) {
    A.call(this);
    this.duration = c;
    this.src = a;
    this.Sc = b;
    this.Bo = d;
  }
  function ib(a, b, c) {
    null == c && (c = -1);
    this.oz = !1;
    this.ds = 1;
    this.io = 200;
    this.es = 8;
    this.o = -1;
    var d = new W();
    d.j = 0;
    d.l = 0;
    d.u = 1;
    d.A = 1;
    this.Nf = d;
    this.Wa = null;
    A.call(this);
    this.Qa = this.Da = new va(a, b);
    -1 != c && (this.Qa = new va(a, c));
  }
  function Zf(a, b) {
    this.Ay = !1;
    this.Ij = a;
    this.Ao = b;
    a.node.J(!1);
    b.fw();
    b.zd.fa(0);
  }
  function xe(a, b) {
    this.kn = 0;
    this.Pg = [0, 0];
    this.Fj = [0, 0];
    this.state =
      this.offset =
      this.Zr =
      this.Vs =
      this.position =
      this.ha =
      this.force =
      this.Ob =
      this.Ef =
      this.kx =
        0;
    A.call(this);
    this.C = a;
    this.rect = b;
    oa.Pb().ya(J(this, this.Qz));
    this.Vs = this.position = this.C.O(b.l);
  }
  function Bd() {
    R.call(this);
  }
  function Cd(a) {
    this.Dj = this.fs = !1;
    A.call(this);
    this.button = new Za(a, 2, "icon_settings");
    this.button.Fc = J(this, this.Fc);
    this.Y(null, this.button);
    this.jc = new Q(a, 2, "icon_music");
    this.jc.J(!1);
    this.jc.aa();
    this.$b = new Q(a, 2, "icon_sound");
    this.$b.J(!1);
    this.$b.aa();
    a = new W();
    a.j = 940;
    a.l = 110;
    a.u = 1020;
    a.A = 190;
    this.La(a);
  }
  function ye(a) {
    A.call(this);
    this.Ph = a;
    this.sb = new Q(a, 2, "menubar_trophy");
    this.sb.L(695);
    this.sb.O(3);
    this.Wa = new ib(a, $b, jb);
    this.$f();
  }
  function ze(a) {
    A.call(this);
    this.Ph = a;
    this.sb = new Q(a, 2, "menubar_medal");
    this.sb.aa();
    this.sb.L(480);
    this.sb.O(1);
    this.Wa = new ib(this.Ph, $b, jb);
    oa.Pb().ya(J(this, this.Qb));
    this.$f();
  }
  function Ae(a) {
    A.call(this);
    this.Ph = a;
    this.sb = new Q(a, 2, "menubar_coin");
    this.sb.L(281);
    this.sb.O(52);
    this.sb.aa();
    this.sb.Ga();
    this.Wa = new ib(this.Ph, $b, jb);
    this.$f();
  }
  function Be(a) {
    this.vz = 0;
    A.call(this);
    this.Ph = a;
    this.Aj = new Q(a, 2, "menubar_progress");
    this.Aj.L(90);
    this.Aj.O(26);
    this.Hg = new Q(a, 2, "menubar_progress_highlight");
    this.Hg.L(90);
    this.Hg.O(26);
    this.Hg.fa(0.5);
    this.Hg.Tc().add();
    this.sb = new Q(a, 2, "menubar_star");
    this.sb.aa();
    this.sb.L(56);
    this.sb.O(52);
    this.sb.Ga();
    this.Wa = new ib(this.Ph, $b, jb);
    this.Wa.aa();
    this.ub();
    this.em();
    this.f = (this.f & -2) | 0;
  }
  function Jb() {
    A.call(this);
    0 > Jb.Wk && (Jb.Wk = B.nj);
  }
  function Ce() {
    this.xa = [];
    R.call(this);
  }
  function Dd() {
    $a.call(this);
  }
  function $a() {
    this.loaded = !1;
    xa.call(this);
  }
  function De() {
    R.call(this);
  }
  function Ee(a, b, c) {
    this.xx = !1;
    this.align = [0, 0];
    this.C = new Q(a, b, c);
  }
  function Ed() {
    A.call(this);
    this.group = new ia();
    new Q(this.group, 2, "play_sign");
    this.button = new Za(this.group, 2, "button_sign");
    var a = da.translate(y.Pv),
      b = new E();
    b.x = 0.7;
    b.y = 0.7;
    this.button.bB(a, dh, -1, b);
    a = new W();
    a.j = 20;
    a.l = 108;
    a.u = 378;
    a.A = 248;
    this.button.La(a);
    this.button.Ub(!1);
    this.Y(null, this.button);
  }
  function mb() {
    this.Hj = null;
    R.call(this);
  }
  function ab() {
    R.call(this);
  }
  function Fe(a) {
    this.group = new ia();
    A.call(this);
    this.button = a;
    a = new Q(this.group, 2, "box_amount_a");
    a.L(-8);
    a.O(-8);
    a.M(0.5);
    this.amount = new ib(this.group, Ug);
    a = new W();
    a.j = -15;
    a.l = -7;
    a.u = 45;
    a.A = 29;
    this.amount.La(a);
    this.amount.ka("5", 9, 200);
    this.amount.cg(0, 0);
    this.amount.Ad();
    this.Y(null, this.amount);
  }
  function Ge(a) {
    this.ou = !0;
    this.xa = [];
    A.call(this);
    this.tc = a;
    this.time = 1;
  }
  function Rc() {
    this.uz = this.yh = !1;
    this.El = 5;
    this.hs = 1;
    this.Dd = this.js = 0;
    R.call(this);
  }
  function Sc() {
    R.call(this);
  }
  function He(a, b, c) {
    this.Rq = !1;
    Za.call(this, a, b, c);
  }
  function Za(a, b, c) {
    this.$n = !1;
    this.isVisible = !0;
    this.isEnabled = this.Gh = this.Kf = !1;
    var d = new E();
    d.x = 0;
    d.y = 0;
    this.om = d;
    d = new W();
    d.j = 0;
    d.l = 0;
    d.u = 100;
    d.A = 100;
    this.ja = d;
    this.Lw = 0.25;
    A.call(this);
    this.group = new ia("button", a);
    this.button = new Q(this.group, b, c);
    oa.Pb().ya(J(this, this.Qb));
  }
  function ac(a, b) {
    this.scale = 1;
    this.xa = [];
    var c = this;
    A.call(this);
    this.group = new ia(null, a);
    this.Pm = b;
    a = new Q(this.group, 2, "boost_frame");
    this.xa[0] = a;
    a.M(0.5);
    var d = new Q(this.group, 2, this.Bn());
    d.aa();
    d.Ga();
    d.L(a.Ba() / 2);
    d.O(a.ma() / 2);
    d.M(0.375);
    this.xa[1] = d;
    a = new Q(this.group, 2, "box_amount_a");
    a.L(-8);
    a.O(-8);
    a.M(0.5);
    this.xa[2] = a;
    a = new Q(this.group, 2, "check");
    a.L(70);
    a.O(-7);
    a.M(0.5);
    this.xa[3] = a;
    a = new Q(this.group, 2, "lock");
    a.L(72);
    a.O(80);
    a.M(0.5);
    this.xa[4] = a;
    this.button = new He(this.group, 2, "plus_button");
    a = new W();
    a.j = 70;
    a.l = 91;
    a.u = 110;
    a.A = 131;
    this.button.La(a);
    this.button.Fc = function () {
      c.Fc(b);
    };
    this.Y(null, this.button);
    oa.Pb().ya(J(this, this.Qb));
  }
  function vb() {}
  function wb() {
    R.call(this);
  }
  function Fd() {
    R.call(this);
  }
  function uc() {
    R.call(this);
  }
  function R() {
    this.backgroundImage = null;
    this.images = new kb();
    this.Qt = new kb();
    this.buttons = [];
    xa.call(this);
  }
  function xa() {
    this.wi = 0;
    this.lf = Oa.Ac();
    this.Ak = this.Ne = this.iA = 0;
    A.call(this);
    this.ng(0);
  }
  function Ie() {
    this.align = !0;
    A.call(this);
  }
  function vc() {
    this.gn = -1;
    this.gb = this.cJ = 0;
    this.mt = Je;
    this.Je = 1;
    this.Qg = new W();
    this.jk = 1;
    this.nt = new W();
    this.blink = !1;
    this.zf = [];
    A.call(this);
  }
  function Tc(a, b, c, d) {
    this.easing = null;
    A.call(this);
    this.duration = a;
    this.easing = c;
    this.target = b;
    this.uI = d;
  }
  function bc(a, b) {
    this.mF = Ke(2);
    this.tn = 3.4e38;
    this.group = new ia();
    this.Bd = 0;
    var c = new E();
    c.x = 0;
    c.y = 0;
    this.$d = c;
    this.Ob = 0;
    this.alpha = this.scale = 1;
    this.rotation = 0;
    c = new E();
    c.x = 0;
    c.y = 0;
    this.force = c;
    c = new E();
    c.x = 0;
    c.y = 0;
    this.ha = c;
    c = new E();
    c.x = 0;
    c.y = 0;
    this.position = c;
    A.call(this);
    this.rK = a;
    this.text = b;
    bc.Ii++;
  }
  function Le() {
    A.call(this);
  }
  function Me() {
    this.gb = 0;
    this.Je = 1;
    this.ja = new W();
    A.call(this);
  }
  function Ne() {
    this.Ql = !0;
    A.call(this);
  }
  function Oe() {
    A.call(this);
  }
  function Pe() {
    this.yr = !1;
    this.zg = 0;
    this.alpha = 1;
    this.va = new E();
    A.call(this);
  }
  function Qe() {
    A.call(this);
  }
  function Gd() {
    A.call(this);
  }
  function Uc() {
    this.scale = 1;
    this.Wi = new W();
    A.call(this);
  }
  function Re() {
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.Kc = a;
    A.call(this);
  }
  function Se() {
    this.He = 1;
    this.points = 0;
    A.call(this);
  }
  function Te() {
    this.He = 1;
    this.points = 0;
    A.call(this);
  }
  function Ue() {
    A.call(this);
  }
  function Ve() {
    this.nq = -1;
    this.Sh = [];
    this.Kg = [];
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.q = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.b = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.a = a;
    A.call(this);
  }
  function $f() {}
  function We() {
    A.call(this);
  }
  function Hd(a) {
    this.mp = !1;
    this.Ul = this.Mk = 0;
    this.Zq = !1;
    this.Gf = 0;
    this.Wn = !1;
    this.Po = new Z();
    this.hz = -1;
    var b = new E();
    b.x = 0;
    b.y = 0;
    this.Yr = b;
    this.co = -1;
    this.Ur = !1;
    this.Vy = !0;
    this.isFrozen = this.vl = this.sl = this.bf = this.Jf = !1;
    this.Tr = !0;
    this.ve = this.Nr = this.cf = this.df = !1;
    this.eh = 0;
    this.lg = -1;
    this.gb = this.Ya = this.vj = 0;
    this.to = -1;
    this.mg = this.Cf = this.Ab = this.vd = 0;
    this.qA = null;
    b = new E();
    b.x = 0;
    b.y = 0;
    this.va = b;
    this.state = -1;
    this.kb = new ag();
    this.layout = "EPortrait";
    b = new W();
    b.j = 0;
    b.l = 0;
    b.u = 640;
    b.A = 800;
    this.Fi = b;
    this.node = new db();
    Sb.call(this);
    this.xc = a;
  }
  function Vc(a, b) {
    this.alpha = 0;
    pa.call(this, Vc.TYPE);
    this.step = a;
    this.g = b;
  }
  function pa(a) {
    this.Ue = 0;
    this.active = !0;
    Wc.call(this);
    this.Ue = this.type = a;
  }
  function Wc() {
    this.key = mc.next();
  }
  function Xe(a, b) {
    xb.call(this, a, b);
  }
  function xb(a, b) {
    A.call(this);
    this.step = a;
    this.group = b;
    this.C = new Q(b, 2, this.hl());
    this.C.aa();
    this.C.Ga();
    this.C.J(!1);
  }
  function Ye(a, b) {
    this.RA = !1;
    A.call(this);
    this.step = a;
    this.group = b;
  }
  function Xc() {
    this.state = 0;
    A.call(this);
  }
  function ag() {
    this.de = 0;
    this.bH = !1;
    this.Ej = 0;
    this.kA = !0;
    this.Hl =
      this.dr =
      this.Dz =
      this.vo =
      this.vs =
      this.zo =
      this.yo =
      this.Bs =
      this.Mz =
      this.ws =
      this.Jz =
      this.qo =
        0;
  }
  function bg(a) {
    this.N = a;
    this.lj = new Z(100);
    for (a = 0; 100 > a; ) {
      ++a;
      var b = new Z();
      b.Hb = !0;
      b.iterator();
      this.lj.Ma(b);
    }
    this.Lf = new Z();
    this.Lf.Hb = !0;
    this.Ib = new cg();
  }
  function cg() {
    this.sd = new Z();
    this.sd.Hb = !0;
    this.wf = new Z();
    this.wf.Hb = !0;
    this.Rc = new Z();
    this.Rc.Hb = !0;
    this.je = new Z();
    this.je.Hb = !0;
    this.Qi = new Z();
    this.Qi.Hb = !0;
    this.Il = new Z();
    this.Il.Hb = !0;
    this.Rk = new Z();
    this.Rk.Hb = !0;
    this.fi = !1;
  }
  function Ze(a) {
    this.Xk = null;
    this.jh = -1;
    this.data = new Z();
    this.md = a;
  }
  function $e() {
    this.Xr = 0;
    A.call(this);
  }
  function Da() {
    this.zq = !1;
    A.call(this);
  }
  function dg(a, b) {
    this.xs = this.zs = 0;
    this.md = a;
    this.zF = b;
    this.ae = new Ze(a);
    this.ae.add(1, 3333);
    this.ae.add(2, 3333);
    this.ae.add(4, 3333);
    this.ae.sk();
    this.zx = this.xz(!0);
    this.zs = 0;
  }
  function Ea(a, b, c, d) {
    this.Jm = new Z();
    this.vx = [];
    this.dJ = [];
    this.kt = [];
    this.al = 0;
    this.bz = [];
    this.stack = [];
    Ea.JG();
    this.md = b;
    this.buffer = new Fb(c, d);
    this.marks = new Fb(c, d);
    for (d = 0; d < c; ) this.vx[d++] = 0;
    this.mE = new dg(b, 0 < (a.mg & 1));
    this.pF();
  }
  function af() {}
  function eg(a) {
    this.g = new W();
    this.rj = new W();
    this.window = new W();
    var b = new W();
    b.j = 0;
    b.l = 0;
    b.u = a.x;
    b.A = a.y;
    b = this.window = b;
    a = new W();
    a.j = b.j;
    a.l = b.l;
    a.u = b.u;
    a.A = b.A;
    this.rj = a;
    this.ud(0);
  }
  function bf(a, b, c) {
    A.call(this);
    this.screen = a;
    u.enabled = 0 < q.Mn();
    G.Cy() && (u.enabled = !1);
    Vg && (u.enabled = !1);
    u.sa();
    this.configure(b, c);
    this.g = new Hd(a.fb());
    this.Y(null, this.g);
    a.canvas.node.appendChild(this.g.node);
    this.g.sa(this.config);
    this.g.ya(this);
    this.resize();
    this.g.U(0);
    this.g.Ka(1);
  }
  function cf() {
    this.mm = new W();
    this.Fb = !1;
    A.call(this);
  }
  function df() {
    this.si = -1;
    A.call(this);
  }
  function Wg() {}
  function wc() {
    ja.call(this, wc.TYPE);
  }
  function aa() {
    this.flags = 0;
    A.call(this);
  }
  function Tb(a) {
    this.uB = !1;
    this.state = 0;
    var b = new E();
    b.x = 0;
    b.y = 0;
    this.Xs = b;
    this.zz = !1;
    this.rotation = 0;
    this.scale = 1;
    this.visible = !0;
    this.PA = 1;
    b = new E();
    b.x = 0;
    b.y = 0;
    this.$d = b;
    A.call(this);
    this.ia = a;
    a.client = this;
    a.ny(this.$d);
    b = this.Xs;
    var c = this.$d;
    b.x = c.x;
    b.y = c.y;
    this.visible = !a.f.dn;
  }
  function M() {
    A.call(this);
  }
  function Xg() {}
  function fg(a) {
    this.Se = new Nc(8);
    this.g = a;
    this.ae = new Ze(a.md);
    for (var b = [], c = 0; 4 > c; ) ++c, b.push(0);
    this.uo = b;
    b = [];
    for (c = 0; 4 > c; ) ++c, b.push(0);
    this.Mg = b;
    0 < (a.mg & 4) && ((this.xw = this.wz(!0)), (this.Mg[2] = 0));
    0 < (a.mg & 2) && ((this.hA = this.yz(!0)), (this.Mg[1] = 0));
    this.ae.add(1, 333);
    this.ae.add(2, 333);
    this.ae.add(4, 333);
    this.ae.sk();
    a = this.Sf();
    b = this.Sf();
    for (c = this.Sf(); c == a || c == b; ) c = this.Sf();
    for (var d = this.Sf(); d == b || d == c; ) d = this.Sf();
    this.enqueue(a);
    this.enqueue(b);
    this.enqueue(c);
    this.enqueue(d);
    this.xb = this.next();
    this.hf = this.next();
  }
  function u() {}
  function gg(a, b) {
    this.ia = a;
    this.depth = b;
  }
  function hg() {
    this.list = new Z();
    this.filter = function () {
      return !0;
    };
  }
  function ig() {
    this.ti = !1;
  }
  function Yc() {
    this.rp = new Rb();
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.Ut = a;
    ja.call(this, Yc.TYPE);
  }
  function Id() {
    ja.call(this, Id.TYPE);
  }
  function nb() {
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.anchor = a;
    ja.call(this, nb.TYPE);
  }
  function Zc() {
    ja.call(this, Zc.TYPE);
  }
  function Kb() {
    this.scale = 1;
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.Fw = a;
    ja.call(this, Kb.TYPE);
  }
  function $c() {
    ja.call(this, $c.TYPE);
  }
  function Fa() {}
  function ja(a) {
    this.time = 0;
    this.enabled = !0;
    this.type = a;
    this.$a = this.xg();
  }
  function jg(a) {
    this.zoom = 0;
    var b = new E();
    b.x = 0;
    b.y = 0;
    this.rn = b;
    b = new E();
    b.x = 0;
    b.y = 0;
    b = new E();
    b.x = 0;
    b.y = 0;
    this.Pe = b;
    b = new W();
    b.j = 0;
    b.l = 0;
    b.u = 640;
    b.A = 480;
    this.ja = b;
    this.g = a;
    this.fp(0.5, 0.5);
  }
  function kg(a) {
    this.wB = new lg();
    this.xB = new mg();
    this.kf = [];
    this.Uj = new Z();
    var b = new E();
    b.x = 0;
    b.y = 0;
    this.Mo = b;
    b = new E();
    b.x = 0;
    b.y = 0;
    this.No = b;
    this.di = null;
    this.My = !1;
    this.Ir = !0;
    this.Fr = 1;
    this.pj = new Rb();
    this.g = a;
    this.Uj.Hb = !0;
  }
  function ng(a) {
    this.rl = new og();
    this.Wo = new W();
    var b = new td();
    b.K.x = 0;
    b.K.y = 0;
    b.la = 1;
    this.yK = b;
    this.rp = new Rb();
    this.Ut = new E();
    this.ic = 0;
    this.g = a;
    this.result = new pg();
    this.result.wn = new Z();
    this.result.bl = null;
    this.result.Vi = new Z();
    b = new E();
    b.x = 0;
    b.y = 0;
    this.result.So = b;
    b = new E();
    b.x = 0;
    b.y = 0;
    this.result.Ts = b;
    this.result.planeIndex = -1;
    this.test = new kg(a);
  }
  function pg() {}
  function qg() {}
  function Yg() {}
  function rg(a) {
    this.Ry = new sg();
    this.ii = new Z(4);
    this.Zc = new Z(4);
    this.KD = 15;
    var b = this;
    this.g = a;
    this.Zc.sa(4, null);
    var c = this.Zc,
      d = c.m,
      e = 0;
    for (c = c.o; e < c; ) d[e++] = new Jc();
    c = this.Zc;
    d = new Jc();
    e = new E();
    e.x = 1;
    e.y = 0;
    var f = new E();
    f.x = 0;
    f.y = 0;
    d = d.lk(e, f);
    c.m[3] = d;
    c = this.Zc;
    d = new Jc();
    e = new E();
    e.x = -1;
    e.y = 0;
    var g = a.rr();
    f = new E();
    f.x = g;
    f.y = 0;
    d = d.lk(e, f);
    c.m[1] = d;
    this.Zc.Hb = !0;
    this.ii.sa(4, null);
    this.ii.m[3] = function (h) {
      var l = new E();
      l.x = 1;
      l.y = 0;
      var k = new E();
      k.x = 0;
      k.y = 0;
      h.lk(l, k);
    };
    this.ii.m[1] = function (h) {
      var l = new E();
      l.x = -1;
      l.y = 0;
      var k = a.rr(),
        m = new E();
      m.x = k;
      m.y = 0;
      h.lk(l, m);
    };
    this.ii.m[0] = function () {
      var h = a.viewport,
        l = h.ja,
        k = a.ty();
      a.Zy() || (k = h.sp(l.l));
      h = b.Zc.m[0];
      l = new E();
      l.x = 0;
      l.y = 1;
      var m = new E();
      m.x = 0;
      m.y = k;
      h.lk(l, m);
    };
    this.ii.m[2] = function () {
      var h = a.viewport;
      h = h.sp(h.ja.A);
      var l = b.Zc.m[2],
        k = new E();
      k.x = 0;
      k.y = -1;
      var m = new E();
      m.x = 0;
      m.y = h;
      l.lk(k, m);
    };
  }
  function ef() {
    this.bk = new Z(32);
    this.bk.Hb = !0;
  }
  function tg(a) {
    this.g = a;
    this.xy = new ef(function () {
      var b = new Z(32);
      b.Hb = !0;
      return b;
    });
    this.wy = new ef(function () {
      var b = new Z(4);
      b.Hb = !0;
      return b;
    });
    this.set = new Fc(64, 64);
  }
  function ug(a, b, c, d) {
    null == d && (d = 1);
    null == c && (c = 1);
    this.grid = new Fb(a, b);
    this.grid.cp(0);
    this.li = c;
    this.Ge = d;
    this.marks = new Fb(a, b);
    this.marks.cp(0);
    this.FE();
  }
  function vg() {}
  function mg() {
    this.Og = NaN;
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.ei = a;
    this.Sn = 3.4e38;
    this.Dr = NaN;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Cr = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Ch = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Dh = a;
  }
  function og() {
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.ei = a;
    this.DG = Array(256);
    this.Sn = 3.4e38;
    this.Ly = new W();
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Ch = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Dh = a;
    for (a = 0; 256 > a; ) this.DG[a++] = new W();
  }
  function sg() {
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.Ro = a;
    this.t = Infinity;
  }
  function Zg() {}
  function wg(a, b, c) {
    this.grid = a;
    this.cols = b;
    this.list = Array(6);
    this.YI = c;
  }
  function xg(a) {
    this.map = new Ya();
    this.g = a;
  }
  function yg(a) {
    this.jF = !1;
    this.g = a;
  }
  function ad() {}
  function lg() {
    this.Hr = this.Og = NaN;
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.Er = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Rn = a;
    this.Gr = NaN;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Tn = a;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.Qn = a;
  }
  function ff() {}
  function zg() {
    this.dh = this.loaded = !1;
    this.Zm = !0;
    this.Jd = this.connected = this.xr = this.dn = this.Ed = this.Ye = this.fixed = !1;
  }
  function yb(a) {
    this.nw = this.rotation = 0;
    this.Sy = 1;
    this.Ob = this.Vg = this.Bd = 0;
    this.scale = new Rf(1);
    this.la = 1;
    var b = new E();
    b.x = 0;
    b.y = 0;
    this.force = b;
    b = new E();
    b.x = 0;
    b.y = 0;
    this.ha = b;
    b = new E();
    b.x = 0;
    b.y = 0;
    this.K = b;
    this.Db = null;
    this.f = new zg();
    this.Sb = this.nc = -1;
    this.code = 0;
    this.g = a;
    yb.count++;
    this.key = mc.next();
    this.la = 1 - ea.oE / 2;
    this.actions = new Z(4);
    this.actions.Hb = !0;
    this.uf(new Zc());
  }
  function gf() {
    this.sq = this.tq = 0;
    this.an = !0;
    var a = new E();
    a.x = 0;
    a.y = 0;
    this.ap = a;
    this.St = new Z();
    this.Tt = new Z();
    this.ta = new Rb();
    this.vK = 0;
    this.yy = new ig();
    this.Br = new hg();
    this.zh = new Z(1024);
    this.Ea = new Nc();
    this.Vh = this.gf = 0;
    this.cols = -1;
    this.Od = new Z(4);
    this.Jj = 0;
    this.proxy = new W();
    this.time = 0;
    a = new E();
    a.x = 0;
    a.y = 0;
    this.ta.origin = a;
    a = new E();
    a.x = 0;
    a.y = -1;
    this.ta.direction = a;
    this.Zd = new rg(this);
    this.viewport = new jg(this);
    this.Zd.wk();
    this.ns = new tg(this);
    this.ek = new ng(this);
    this.Mj = new yg(this);
  }
  function hf() {}
  function ea() {}
  function z() {}
  function B() {}
  function wa() {}
  function q() {}
  function Ag() {}
  function Bg() {
    Ua.call(this, X.context.createStereoPanner(), 1);
  }
  function xc() {
    Ua.call(this, X.context.createGain(), 2);
  }
  function jf() {
    Ua.call(this, X.context.createBufferSource(), 0);
  }
  function kf() {
    Ua.call(this, X.context.destination, 7);
  }
  function Ua(a, b) {
    this.inputs = [];
    this.n = a;
    this.type = b;
  }
  function yc(a, b) {
    this.ro = null;
    Lb.call(this, a, b);
    this.data = b.data;
  }
  function lf() {
    ka.call(this);
  }
  function Jd(a, b, c, d) {
    this.stopped = !1;
    this.time = 0;
    Lb.call(this, a, b);
    this.loop = d;
    this.Zb = !0;
    this.node = b.data.cloneNode();
    null != c
      ? ((a = a.xa[c]),
        (this.min = a.min / 1e3),
        (this.max = a.max / 1e3),
        this.node.addEventListener("timeupdate", J(this, this.bA), !1),
        this.node.addEventListener("loadedmetadata", J(this, this.Ms), !1))
      : ((this.min = 0), (this.max = b.data.duration), (this.node.onended = J(this, this.stop)), (this.node.loop = d));
    this.ri(this.yg());
    this.node.play();
  }
  function bd() {
    this.xa = [];
    ka.call(this);
  }
  function X() {}
  function Lb(a, b) {
    this.volume = 1;
    this.offset = 0;
    this.loop = !1;
    this.ji = a;
    this.pd = b;
  }
  function zc() {}
  function Cg(a, b, c, d) {
    this.name = a;
    this.id = b;
    this.min = c;
    this.max = d;
  }
  function ka() {
    this.qd = Array(4096);
    this.dc = new Z();
    this.Iz = 1e4;
    this.ms = this.ks = this.ls = 1;
    this.kg = this.Az = 0;
    this.qH = 16;
    this.Cz = 2;
    this.enabled = !0;
    this.tK = 0.05;
  }
  function cd(a, b, c) {
    this.Cg = -1;
    this.id = a;
    this.data = b;
    this.we = c;
  }
  function Ca() {}
  function dd(a, b) {
    this.progress = 0;
    this.url = a;
    this.Bp = b;
  }
  function cc() {}
  function Dg(a, b) {
    this.id = a;
    this.dl = b;
  }
  function x() {}
  function Ya() {
    this.P = {};
  }
  function Eg() {}
  function mf(a, b) {
    this.rf = new dd(a, b.Bp);
    this.hd = b;
  }
  function nf() {}
  function of(a, b, c) {
    null == a && (a = 2);
    this.Fz = this.Ez = 0;
    this.Lh = [];
    this.Gb = new se();
    this.Kz = this.As = 0;
    this.rH = a;
    this.Gs = b;
    this.Bp = c;
  }
  function Fg(a, b, c, d) {
    this.url = a;
    this.data = b;
    this.Uh = c;
    this.sf = d;
  }
  function ed(a, b) {
    this.f = 128;
    A.call(this);
    this.dl = a;
    this.delay = b;
  }
  function Ac() {}
  function pf() {
    this.Ic = function () {};
    this.handle = (this.window = "undefined" !== typeof window) ? -1 : null;
  }
  function Ha() {}
  function Gg(a, b, c) {
    Ja.call(this, a, b, c);
  }
  function Ja(a, b, c) {
    this.message = a;
    this.bw = null != c ? c : this;
  }
  function qf() {}
  function U() {}
  function Kd() {}
  function Hg(a) {
    this.type = a;
    this.list = new Z();
  }
  function Sb() {
    this.ps = this.xo = 0;
    this.buffer = new Z();
    this.Wd = new Z();
    A.call(this);
  }
  function zb() {}
  function Ma() {}
  function Pa() {}
  function Z(a, b, c) {
    null == a && (a = 2);
    this.Va = null;
    this.o = 0;
    this.Hb = !1;
    this.Uc = -2;
    this.Gg = 2 > a ? 2 : a;
    null != b && 0 < b.length
      ? ((this.o = b.length), (this.m = b.slice(0, b.length)), (this.S = this.o))
      : ((this.S = this.Gg), (this.m = Array(this.S)));
    c && (this.Uc = 0);
  }
  function Ig() {}
  function dc() {}
  function Bc() {}
  function Jg(a) {
    this.top = 0;
    this.stack = [];
    this.push(a);
  }
  function bb(a, b, c) {
    this.flags = 0;
    this.sender = a;
    this.type = b;
    this.qn = c;
  }
  function Kg(a, b, c) {
    null == c && (c = -1);
    this.Al = 16;
    this.size = 0;
    this.Uc = -1;
    this.pz = a;
    this.iH = null == b ? function () {} : b;
    this.pH = c;
    this.Qh = Array(this.Al);
  }
  function Ga() {}
  function fa() {}
  function Lg() {
    this.fF = !0;
    this.Zg = new ce();
    this.Vq = !1;
    this.Uq = !0;
    this.wx = !1;
    this.hi = 1;
    this.seed = 0;
    this.Yl = 1;
    this.language = "en";
    this.title = "?";
  }
  function rf(a) {
    this.storage = null;
    this.name = a;
    this.storage = window.famobi.localStorage;
  }
  function fd(a) {
    this.name = a;
  }
  function S() {}
  function G() {}
  function Cc() {}
  function cb(a) {
    la.call(this, a);
  }
  function la(a) {
    this.sG = null;
    this.Ih = this.xn = this.bh = 0;
    this.lb = new pf();
    this.Bz = -1;
    la.instance = this;
    this.config = a;
    Nb.console.log("" + a.title + " v1.3.44 2024-10-23 13:32:45 Generated by Haxe 4.2.5 polygonal");
    Ka.call(this);
    this.iq();
  }
  function gd(a) {
    this.ab = a;
    var b = new qa(
      "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
      ""
    );
    if (b.match(a)) Aa.parseInt(b.Ce(1)), Aa.parseInt(b.Ce(2)), Aa.parseInt(b.Ce(3)), b.Ce(4), b.Ce(5);
    else throw 2;
  }
  function Aa() {}
  function qa(a, b) {
    this.r = new RegExp(a, b.split("u").join(""));
  }
  function Ka() {
    this.Ws = [];
    this.eE = this.SJ = !1;
    this.zd = new db("fg");
    this.canvas = new db("canvas");
    this.Bc = new db("bg");
    this.ad = new db("sg");
    A.call(this);
    Ka.instance = this;
    this.name = "Stage";
    this.ad.appendChild(this.Bc);
    this.ad.appendChild(this.canvas);
    this.ad.appendChild(this.zd);
  }
  function A() {
    this.time = this.$a = 0;
    this.uid = A.next++;
    void 0 === this.f && (this.f = 0);
    this.type = this.X();
    this.f |= 3;
    0 == (this.f & 128) && Ma.register(this);
  }
  function H() {
    return ta.Ik(this, "");
  }
  function C(a, b) {
    a = Object.create(a);
    for (var c in b) a[c] = b[c];
    b.toString !== Object.prototype.toString && (a.toString = b.toString);
    return a;
  }
  function hd(a, b) {
    ed.root.Y(null, new ed(a, b));
  }
  function Oh() {
    return function (a) {
      return a;
    };
  }
  function Ke(a) {
    return function (b) {
      return Math.pow(b, a);
    };
  }
  function eh(a) {
    return function (b) {
      return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a));
    };
  }
  function za(a) {
    return function (b) {
      return 1 - Math.pow(1 - b, a);
    };
  }
  function ec(a) {
    null == a && (a = 0.1);
    var b = P.Td(0, 17.0158, a);
    return function (c) {
      --c;
      return c * c * ((b + 1) * c + b) + 1;
    };
  }
  function id(a, b) {
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
  function Mg(a, b) {
    var c = [];
    c.unshift(b);
    b = 0;
    for (var d = a.length; b < d; )
      ++b,
        c.push(function () {
          a.shift()(c.pop());
        });
    c.pop()();
  }
  function Ph(a) {
    function b() {
      function t(F) {
        return 0 < (n & F) ? c.ea() : c.Gd();
      }
      var n = c.ea(),
        w = {},
        v = {};
      w.frame = v;
      v.x = t(1);
      v.y = t(2);
      v.w = t(4);
      v.h = t(8);
      v = {};
      w.sourceSize = v;
      v.w = t(16);
      v.h = t(32);
      v = {};
      w.spriteSourceSize = v;
      v.x = t(64);
      v.y = t(128);
      w.trimmed = 1 == c.ea();
      return w;
    }
    var c = new qb(a);
    c.ea();
    c.ea();
    c.ea();
    a = [];
    var d = {},
      e = {};
    d.size = e;
    e.w = c.Gd();
    e.h = c.Gd();
    d.scale = c.yI();
    e = {};
    e.frames = a;
    e.meta = d;
    for (var f, g = c.Gd(), h = 0; h < g; ) (f = c.Rl(c.Gd())), (d = b()), (d.filename = f), a.push(d), ++h;
    var l, k;
    g = c.Gd();
    for (h = 0; h < g; ) {
      var m = c.Gd();
      f = c.Rl(c.Gd());
      for (k = 0; k < m; ) {
        d = b();
        for (l = "" + (k + 1); 4 > l.length; ) l = "0" + l;
        d.filename = f + l;
        a.push(d);
        ++k;
      }
      ++h;
    }
    return JSON.stringify(e);
  }
  function sf(a) {
    return a instanceof Array ? new ud(a) : a.iterator();
  }
  function J(a, b) {
    if (null == b) return null;
    null == b.Vp && (b.Vp = Nb.pu++);
    var c;
    null == a.zr ? (a.zr = {}) : (c = a.zr[b.Vp]);
    null == c && ((c = b.bind(a)), (a.zr[b.Vp] = c));
    return c;
  }
  Qd.BubbleWoods = Qd.BubbleWoods || {};
  var Mb = Mb || {},
    N;
  A.i = !0;
  A.prototype = {
    X: function () {
      return 0;
    },
    B: function () {
      if (!(0 < (this.f & 8))) {
        this.f |= 8;
        for (var a = this.da, b; null != a; ) (b = a.W), a.B(), (a = b);
        this.remove();
        0 == (this.f & 128) && Ma.unregister(this);
        this.Fs();
      }
    },
    remove: function () {
      null != this.parent && (0 == (this.f & 8) && zb.ot(this, 32), zb.removeChild(this));
    },
    iterator: function () {
      return new Jg(this);
    },
    is: function (a) {
      return this instanceof a;
    },
    Y: function (a, b) {
      null != a && (b = Ac.cn(a));
      zb.Y(this, b);
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
      for (c = this.da; null != c; ) {
        var d = c.find(a, b, !1);
        if (null != d) return d;
        c = c.W;
      }
      return null;
    },
    Bw: function (a, b) {
      a = bb.create(this, a, b);
      for (b = this.parent; null != b; ) {
        b.Ia(a);
        if (0 < a.flags) break;
        b = b.parent;
      }
      bb.dt(a);
    },
    Pi: function (a, b) {
      a = bb.create(this, a, b);
      this.vA(a, !0);
      bb.dt(a);
    },
    VB: function () {
      zb.ot(this, 20);
    },
    Fs: function () {},
    U: function (a) {
      if (!(0 < (this.f & 40)))
        for (var b = this.da, c; null != b; )
          (b.f |= 64), (c = b.W), 1 == (b.f & 25) ? ((b.f |= 4), b.U(a), (b.time += a)) : (b.f &= -65), (b = c);
    },
    Ka: function (a) {
      if (!(0 < (this.f & 40)))
        for (var b = this.da, c; null != b; )
          (b.f |= 64), (c = b.W), 6 == (b.f & 14) ? ((b.f &= -17), b.Ka(a)) : (b.f &= -65), (b = c);
    },
    Ia: function () {},
    kc: function () {},
    vA: function (a, b) {
      if (!b && (this.Ia(a), 0 < (a.flags & 1))) {
        a.flags &= -2;
        return;
      }
      b = this.da;
      for (var c; null != b; ) {
        c = b.W;
        if (0 < (a.flags & 2)) break;
        b.vA(a, !1);
        b = c;
      }
    },
    ef: function (a) {
      return Math.min(1, this.time / a);
    },
    toString: function () {
      return "{" + this.name + "}" + (0 != this.$a ? "[" + this.$a + "]" : "");
    },
    s: A,
  };
  Ka.i = !0;
  Ka.F = A;
  Ka.prototype = C(A.prototype, {
    HL: function () {
      return this.window.width;
    },
    GL: function () {
      return this.window.height;
    },
    te: function () {
      var a = this.window.width,
        b = this.window.height,
        c = new E();
      c.x = a;
      c.y = b;
      return c;
    },
    Fs: function () {
      this.ad.B();
      this.zd = this.canvas = this.Bc = this.ad = null;
      this.window.B();
      this.window = null;
      this.V.B();
      this.V = null;
      A.prototype.Fs.call(this);
    },
    QG: function (a) {
      var b = this;
      this.Zg = a;
      this.window = new ie(J(this, this.Sj), a);
      this.window.Pa = function () {
        b.Pa();
      };
      this.window.Ko = function (c) {
        b.Do(c);
      };
      this.window.Fo = function () {};
      this.window.Js = function (c) {
        b.IH(c);
      };
      this.Sj();
    },
    LG: function (a) {
      var b = 2;
      null != this.Zg && (b = this.Zg.pw);
      switch (b) {
        case 1:
          this.window.Py(a);
          null != this.window.getContext() ? (this.V = new Mc()) : (this.window.Oy(a), (this.V = new Xa()));
          break;
        case 2:
          this.window.Oy(a);
          this.V = new Xa();
          break;
        case 3:
          this.window.Py(a), (this.V = new Mc());
      }
      this.V.Os(function () {});
      this.V.pi(this.window);
      this.Ll();
    },
    dL: function (a) {
      ua.update(this.ad, a);
      Ra.$t(this.ad, a);
    },
    MI: function () {
      if (!this.SJ && null != this.V) {
        var a = this.V.Gq;
        ua.yc(this.ad);
        this.eE ? (this.ad.Di(!0, a), this.ad.Ck()) : (Ra.Di(this.ad, a), Ra.Ck(this.ad));
        this.V.clear();
        this.V.px(this.ad);
      }
    },
    U: function (a) {
      A.prototype.U.call(this, a);
      this.dL(a);
    },
    Ka: function (a) {
      this.window.update();
      A.prototype.Ka.call(this, a);
      this.MI();
      for (var b = 0, c = this.Ws.length; b < c; ) this.Ws[b++](a);
      for (; 0 < b--; ) this.Ws.pop();
    },
    Sj: function () {
      this.LG(new rd());
    },
    Ll: function () {},
    Pa: function () {
      for (var a = 0, b = this.bG(); a < b.length; ) {
        var c = b[a];
        ++a;
        switch (c.Ie) {
          case 0:
          case 7:
            break;
          default:
            c.Pa();
        }
      }
      this.Pi(1);
    },
    Do: function (a) {
      this.Pi(a ? 2 : 3);
    },
    IH: function (a) {
      this.Pi(a ? 4 : 5);
    },
    OL: function () {},
    NE: function (a, b, c) {
      a = Ac.cn(a);
      a.caller = b;
      a.sj = c;
      a.Sr = !0;
      b = this.find(xa, null, !1);
      null == b ? this.Y(null, a) : zb.Qy(b, a);
    },
    createTexture: function (a, b, c) {
      function d(F, I) {
        g.V.OE(a, F, I);
      }
      function e(F) {
        return g.V.createTexture(a, x.getData(a), F, b, x.il(a));
      }
      function f(F) {
        var I = F.b[0],
          r = String.fromCodePoint(I);
        I = F.b[1];
        r += String.fromCodePoint(I);
        I = F.b[2];
        switch (r + String.fromCodePoint(I)) {
          case "BMF":
            return new Rd(F);
          case "TPJ":
            return new Ec(Ph(F));
          default:
            return new Ec(x.Cw(F));
        }
      }
      null == b && (b = 0);
      var g = this;
      if (null != this.V.Hf(a)) return this.V.Hf(a);
      var h = [],
        l = [];
      if (null == c) {
        if (((c = x.QF(a)), null != c)) {
          var k = new qb(ra.bi(c));
          c = 0;
          for (var m = k.ea(); c < m; ) {
            c++;
            var t = k.ea(),
              n = k.ea(),
              w = null,
              v = k.ac();
            0 < v && (w = k.Rl(v, Ld.Up));
            l.push(w);
            0 == t ? ((t = k.ac()), (n = new ra(new ArrayBuffer(t))), k.ct(n, 0, t), h.push(f(n))) : h.push(h[n]);
          }
        }
      } else (c = x.getData(c)), "string" == typeof c ? h.push(new Ec(c)) : h.push(f(ra.bi(c)));
      k = null;
      m = !1;
      for (c = 0; c < l.length; )
        if (null != l[c++]) {
          m = !0;
          break;
        }
      if (m) for (c = 0, m = h.length; c < m; ) (t = c++), 0 == t ? (k = e(h[0])) : d(l[t], h[t]);
      else if (0 == h.length) k = e(null);
      else if (1 == h.length) k = e(h[0]);
      else for (k = e(null), c = 0; c < h.length; ) d(null, h[c++]);
      x.Ey(a) && (k.scale = 1 / x.XF());
      return k;
    },
    Fy: function (a) {
      return null != this.V.Hf(a);
    },
    Hf: function (a) {
      return this.V.Hf(a);
    },
    Zk: function (a, b) {
      null == b && (b = !0);
      this.V.Zk(a);
      b && x.wd(a);
    },
    bG: function () {
      for (var a = [], b = this.iterator(); b.Ca(); ) {
        var c = b.next();
        c instanceof xa && a.push(c);
      }
      return a;
    },
    X: function () {
      return 1;
    },
    s: Ka,
  });
  qa.i = !0;
  qa.prototype = {
    match: function (a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.ye = this.r.exec(a);
      this.r.LA = a;
      return null != this.r.ye;
    },
    Ce: function (a) {
      if (null != this.r.ye && 0 <= a && a < this.r.ye.length) return this.r.ye[a];
      throw 0;
    },
    oH: function () {
      if (null == this.r.ye) throw 1;
      return { va: this.r.ye.index, xe: this.r.ye[0].length };
    },
    nH: function (a, b, c) {
      null == c && (c = -1);
      if (this.r.global) {
        if (
          ((this.r.lastIndex = b),
          (this.r.ye = this.r.exec(0 > c ? a : fa.substr(a, 0, b + c))),
          (c = null != this.r.ye))
        )
          this.r.LA = a;
      } else if ((c = this.match(0 > c ? fa.substr(a, b, null) : fa.substr(a, b, c))))
        (this.r.LA = a), (this.r.ye.index += b);
      return c;
    },
    map: function (a, b) {
      for (var c = 0, d = ""; !(c >= a.length); ) {
        if (!this.nH(a, c)) {
          d += Aa.ab(fa.substr(a, c, null));
          break;
        }
        var e = this.oH();
        d += Aa.ab(fa.substr(a, c, e.va - c));
        d += Aa.ab(b(this));
        0 == e.xe ? ((d += Aa.ab(fa.substr(a, e.va, 1))), (c = e.va + 1)) : (c = e.va + e.xe);
        if (!this.r.global) break;
      }
      !this.r.global && 0 < c && c < a.length && (d += Aa.ab(fa.substr(a, c, null)));
      return d;
    },
    s: qa,
  };
  Aa.i = !0;
  Aa.ab = function (a) {
    return ta.Ik(a, "");
  };
  Aa.parseInt = function (a) {
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
  gd.i = !0;
  gd.prototype = {
    toString: function () {
      return this.ab;
    },
    s: gd,
  };
  la.i = !0;
  la.F = Ka;
  la.prototype = C(Ka.prototype, {
    update: function (a) {
      this.uq(this, 96);
      this.f |= 64;
      this.U(a);
      this.time += a;
    },
    LI: function (a) {
      this.uq(this, 96);
      this.f |= 64;
      this.Ka(a);
    },
    uq: function (a, b) {
      a.f &= ~b;
      for (a = a.da; null != a; ) this.uq(a, b), (a = a.W);
    },
    B: function () {
      this.lb.stop();
      this.lb.Ic = null;
      Ca.oh();
      da.oh();
      window.removeEventListener("error", this.sG);
      x.sa();
      Ia.oh();
      Ta.oh();
      la.instance = null;
      Ka.prototype.B.call(this);
      Nb.console.log("" + this.config.title + " \ud83d\udc4b");
    },
    Sj: function () {
      Ka.prototype.Sj.call(this);
      this.config.Vq || (this.window.Ko = function () {});
    },
    Ll: function () {
      Ka.prototype.Ll.call(this);
      this.jq();
      this.info = window.document.createElement("div");
      window.document.body.appendChild(this.info);
      this.info.innerText = la.VERSION.ab + " " + (this.V instanceof Mc ? "HW" : "SW");
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
    U: function (a) {
      Ka.prototype.U.call(this, a);
      null != this.info && 5 < this.time && (this.info.remove(), (this.info = null));
    },
    Do: function (a) {
      this.config.Vq &&
        (Ka.prototype.Do.call(this, a),
        a ? (this.lb.start(), oa.Pb().enable(), Ca.yn().vc(1)) : (this.lb.stop(), oa.Pb().disable(), Ca.yn().vc(0)));
    },
    setTime: function (a) {
      a /= 1e3;
      this.time += a;
      if (!(0 < this.Bz && this.time < this.Ih + 1 / this.Bz)) {
        this.Ih = this.time;
        this.xn += a;
        1 <= this.xn && --this.xn;
        var b = Ha.Yk;
        (this.bh += a * Ha.pm) > 10 * b && (this.bh = 10 * b);
        for (; this.bh > b; ) (this.bh -= b), Ha.uK++, this.update(b), (Ha.Ix += b);
        this.LI(this.bh / b);
      }
    },
    Go: function () {},
    iq: function () {
      ed.root = this;
      this.MG();
      x.xJ(this.config.hi);
      this.GG();
      this.IG();
      this.FG();
      this.QG(this.config.Zg);
    },
    jq: function () {
      this.start();
      this.preload();
    },
    GG: function () {
      var a = this;
      this.config.wx &&
        (Cc.sa(),
        (Cc.mr = function () {
          var b = {};
          null != a.nf && (b.save = a.nf.stringify());
          for (var c = {}, d = Kd.hG().P, e = Object.keys(d), f = e.length, g = 0; g < f; ) {
            var h = e[g++];
            c[h] = d[h];
          }
          b.v = c;
          return b;
        }));
    },
    MG: function () {
      this.nf = this.Yw();
      this.Yl = this.config.Yl;
    },
    KL: function () {},
    LL: function () {},
    IG: function () {
      var a = this;
      x.tt(this.config.language);
      var b = tf.cl(x.kr());
      da.tt(b);
      Nb.console.log(b);
      b = re.gr("strings");
      if (null != b) da.Ky(b, this.config.vy);
      else {
        b = [];
        for (var c = 0, d = x.jy(); c < d.length; ) {
          var e = d[c];
          ++c;
          new qa("lang", "").match(e) && b.push(e);
        }
        1 == b.length &&
          x.Es(x.wg(b[0]), function (f) {
            da.Ky(x.getData(f), a.config.vy);
          });
      }
    },
    FG: function () {
      if (Ca.Ty())
        if (this.config.Uq) {
          Ca.enabled = !0;
          var a = Ca.rh();
          if (null == a) Ca.enabled = !1;
          else if (
            Ga.ug(["ogg", "aac"], function (h) {
              return h == a;
            })
          ) {
            x.iJ(a);
            for (var b = x.jy(), c = [], d = 0; d < b.length; ) {
              var e = b[d];
              ++d;
              new qa("audio", "").match(e) && c.push(e);
            }
            if (0 != c.length) {
              Ca.start();
              var f = ka.instance(),
                g = f instanceof bd;
              b = function (h, l, k) {
                zc.By(l)
                  ? ((h = zc.DF(l)), (l = zc.KI(l)), g && (l = new Blob([l], { type: "audio/wav" })), f.Tl(h, l, k))
                  : (g && (l = new Blob([l], { type: "audio/wav" })), f.fk(h, l, x.we(h), k));
              };
              for (d = 0; d < c.length; ) x.GI(x.wg(c[d++]), b);
            }
          } else Ca.enabled = !1;
        } else Ca.enabled = !1;
    },
    BI: function () {
      try {
        if (null == this.my()()) {
          this.nf.reset();
          this.Nc();
          return;
        }
        this.nf.parse(this.my()());
      } catch (c) {
        Ja.Hw(c);
        this.nf.reset();
        this.Nc();
        return;
      }
      if (this.nf.rev > this.Yl) throw 3;
      for (var a = !1, b = this.nf.rev; b < this.Yl; ) this.nf.upgrade(), (b = this.nf.rev), (a = !0);
      a && this.Nc();
    },
    Nc: function () {
      this.aG()(this.nf.stringify());
    },
    start: function () {
      this.lb = new pf();
      this.lb.Ic = J(this, this.setTime);
      this.lb.start();
    },
    preload: function () {
      var a = this,
        b = x.YF(),
        c = b.length;
      if (0 == c) this.Go();
      else {
        var d = new of(
          4,
          function (f) {
            x.setData(x.wg(f.url), f.data, f.Uh);
          },
          "v=" + gd.VERSION.ab
        );
        d.tag = "load";
        for (var e = 0; e < b.length; )
          x.Es(b[e++], function () {
            0 == --c && setTimeout(J(a, a.Go), 0);
          });
        for (e = 0; e < b.length; ) d.load(x.il(b[e++]));
      }
    },
    Yw: function () {
      return null;
    },
    my: function () {
      var a = this;
      return function () {
        return a.Dq(a.config.title).get();
      };
    },
    aG: function () {
      var a = this;
      return function (b) {
        a.Dq(a.config.title).set(b);
      };
    },
    Dq: function (a) {
      return new je(a);
    },
    X: function () {
      return 2;
    },
    s: la,
  });
  cb.i = !0;
  cb.sr = Qd.BubbleWoods.gotoHome = function () {
    la.instance.Pi(47);
  };
  cb.yh = Qd.BubbleWoods.gotoBooster = function () {
    la.instance.Pi(48);
  };
  cb.sa = Qd.BubbleWoods.init = function (a, b) {
    var c = new Lg();
    c.title = "BubbleWoods";
    c.Yl = 4;
    null != a && (c.language = a);
    c.hi = 1;
    c.seed = (16777215 * Math.random()) | 0;
    c.wx = !0;
    c.Vq = !0;
    c.Zg.gJ(!1);
    c.Zg.hJ(2);
    c.Zg.kJ(b);
    a = new kb();
    a.P["\u011e"] = "G";
    a.P["\u011f"] = "g";
    a.P["\u0130"] = "I";
    a.P["\u015e"] = "S";
    a.P["\u015f"] = "s";
    c.vy = a;
    c.Uq = !0;
    c.fF = !0;
    a = 1;
    2 < window.devicePixelRatio && Kd.ve() && (a = 2);
    c.Zg.yJ(a);
    G.PG();
    cb.instance = new cb(c);
  };
  cb.F = la;
  cb.prototype = C(la.prototype, {
    iq: function () {
      la.prototype.iq.call(this);
    },
    B: function () {
      la.prototype.B.call(this);
    },
    jq: function () {
      var a = this;
      la.prototype.jq.call(this);
      G.MH(function (b) {
        b ? (a.lb.stop(), oa.Pb().disable(), oa.If().disable()) : (a.lb.start(), oa.Pb().enable(), oa.If().enable());
      });
      G.NH(function (b) {
        B.be = b;
        a.Nc();
        b ? z.ci() : z.Uf();
      });
      G.LH(function (b) {
        B.Vd = b;
        a.Nc();
        b ? wa.ci() : wa.Uf();
      });
      G.OH(function (b) {
        ka.instance().vc(b);
      });
      G.SH(function () {
        ka.instance().vc(0);
        cb.Qs = !0;
        a.lb.stop();
      });
      G.VH(function () {
        ka.instance().vc(G.Ux());
        cb.Qs = !1;
        a.lb.start();
      });
      G.Ns(J(this, this.Ns));
      ka.instance().vc(G.Ux());
    },
    Ns: function () {
      var a = this.find(ab);
      null != a
        ? 3 == a.Ie
          ? a.VI()
          : ((a = this.find(Dd)),
            null == a || a.Un instanceof ab || (a.Un instanceof Rc && Oa.Sq(a.Un.sj, "restart", !0)))
        : ((a = this.find(Rc)), null != a && a.cb(ab));
    },
    Sj: function () {
      la.prototype.Sj.call(this);
      this.window.color = $g.Lx(-12443315);
    },
    Ll: function () {
      this.V.Gq = !1;
      this.V.lm = !0;
      this.V.Nq = 24;
      Ia.instance().oJ(this.window.canvas);
      la.prototype.Ll.call(this);
    },
    Do: function (a) {
      a
        ? (G.yx || (this.lb.start(), oa.Pb().enable()), G.Im || cb.Qs || Ca.yn().vc(1))
        : (this.lb.stop(), Ca.yn().vc(0), oa.Pb().disable());
    },
    Go: function () {
      la.prototype.Go.call(this);
      this.window.update();
      this.NE(Ce);
    },
    Pa: function () {
      var a = this.V.yf;
      a.Ap = !0;
      a.reset();
      this.window.SI();
      la.prototype.Pa.call(this);
    },
    Ka: function (a) {
      this.window.update();
      la.prototype.Ka.call(this, a);
    },
    Yw: function () {
      return new B();
    },
    Nc: function () {
      G.tj() || la.prototype.Nc.call(this);
    },
    Dq: function (a) {
      return new rf(a);
    },
    X: function () {
      return 3;
    },
    s: cb,
  });
  Cc.i = !0;
  Cc.sa = function () {
    if (false) {
      var a = window.document.createElement("script");
      a.type = "text/javascript";
      a.src = "https://d2wy8f7a9ursnm.cloudfront.net/v7/bugsnag.min.js";
      a.onload = function () {
        Cc.sa();
      };
      window.document.body.append(a);
    } else {
      a = { apiKey: "4345af46890ff4e654cdf5b36fdae0ed" };
      a.appVersion = la.VERSION.ab;
      a.releaseStage = "production";
      a.onError = function (b) {
        b.addMetadata("meta", Cc.mr());
        return !0;
      };
      a.collectUserIp = !1;
      a.logger = null;
      try {
        window.Bugsnag.start(a), (Cc.Wn = !0);
      } catch (b) {}
    }
  };
  G.i = !0;
  G.hasFeature = function (a) {
    a = G.td("hasFeature", [a]);
    G.xf && (a = !1);
    return a;
  };
  G.tj = function () {
    return G.hasFeature("forced_mode");
  };
  G.SH = function (a) {
    window.famobi_onPauseRequested = a;
  };
  G.VH = function (a) {
    window.famobi_onResumeRequested = a;
  };
  G.Vx = function () {
    var a = G.td("getFeatureProperties", ["forced_mode"]);
    G.xf && (a = {});
    return a;
  };
  G.eB = function (a) {
    G.td("setPreloadProgress", [a]);
  };
  G.Dy = function () {
    return G.hasFeature("external_pause");
  };
  G.MH = function (a) {
    G.Wf("pauseGameplay", function () {
      G.yx = !0;
      a(!0);
    });
    G.Wf("resumeGameplay", function () {
      G.yx = !1;
      a(!1);
    });
  };
  G.Nn = function () {
    return G.hasFeature("external_mute");
  };
  G.NH = function (a) {
    G.Wf("enableAudio", function () {
      a(!0);
    });
    G.Wf("disableAudio", function () {
      a(!1);
    });
  };
  G.LH = function (a) {
    G.Wf("enableMusic", function () {
      a(!0);
    });
    G.Wf("disableMusic", function () {
      a(!1);
    });
  };
  G.OH = function (a) {
    G.Wf("changeVolume", a);
  };
  G.Ns = function (a) {
    G.Wf("restartGame", a);
  };
  G.Ux = function () {
    var a = G.td("getVolume");
    G.xf && (a = 1);
    return a;
  };
  G.Cy = function () {
    return G.hasFeature("external_achievements");
  };
  G.TJ = function () {
    return G.hasFeature("skip_title");
  };
  G.tG = function () {
    return G.hasFeature("external_start");
  };
  G.zJ = function () {
    G.td("playerReady");
  };
  G.st = function (a) {
    G.cr
      ? a()
      : G.tG()
      ? (G.Wf("startGame", function () {
          G.cr = !0;
          a();
        }),
        G.td("gameReady"))
      : (G.td("gameReady"), (G.cr = !0), a());
  };
  G.Wf = function (a, b) {
    G.td("onRequest", [a, b]);
  };
  G.oB = function () {
    G.Im = !0;
    var a = G.td("showInterstitialAd");
    return G.xf
      ? ((G.Im = !1),
        new Promise(function (b) {
          b(null);
        }))
      : a.then(
          function () {
            G.Im = !1;
          },
          function () {
            G.Im = !1;
          }
        );
  };
  G.uG = function () {
    var a = G.td("hasRewardedAd");
    G.xf && (a = !1);
    return a;
  };
  G.PJ = function (a) {
    G.td("rewardedAd", [a]);
    G.xf && a({});
  };
  G.eH = function (a) {
    var b = G.td("getBrandingButtonImage", [!0]);
    G.xf && (b = "more_games_graphic.png");
    var c = window.document.createElement("img");
    c.crossOrigin = "Anonymous";
    c.onload = function () {
      a(c);
    };
    c.src = b;
  };
  G.DH = function () {
    G.td("openBrandingLink");
  };
  G.PG = function () {
    S.FB = G.hasFeature("trackstats");
  };
  G.td = function (a, b) {
    G.xf = !1;
    try {
      var c = window.famobi[a];
      if (null == c) throw 4;
      return c.apply(window.famobi, b);
    } catch (d) {
      return (G.xf = !0), null;
    }
  };
  S.i = !0;
  S.cH = function () {
    return S.fo("quit");
  };
  S.fo = function (a) {
    var b;
    null == b && (b = "");
    var c = {};
    c.levelName = b;
    c.reason = a;
    return S.send("EVENT_LEVELFAIL", c);
  };
  S.jz = function (a) {
    null == a && (a = "");
    var b = {};
    b.levelName = a;
    return S.send("EVENT_LEVELSTART", b);
  };
  S.pause = function () {
    return S.send("EVENT_PAUSE");
  };
  S.resume = function () {
    return S.send("EVENT_RESUME");
  };
  S.dH = function (a) {
    try {
      var b = {};
      b.liveScore = a;
      S.send("EVENT_LIVESCORE", b);
    } catch (c) {}
  };
  S.Xt = function (a) {
    var b = {};
    b.totalScore = a;
    return S.send("EVENT_TOTALSCORE", b);
  };
  S.PK = function () {
    S.send("EVENT_TUTORIALCOMPLETED");
  };
  S.UB = function (a, b) {
    var c = {};
    c.bgmVolume = a;
    c.sfxVolume = b;
    S.send("EVENT_VOLUMECHANGE", c);
  };
  S.qf = function (a, b) {
    try {
      window.famobi_analytics.trackScreen(a, b);
    } catch (c) {}
  };
  S.Lc = function (a, b, c) {
    null == b && (b = 1);
    if (S.FB)
      try {
        window.famobi_analytics.trackStats(a, c, b);
      } catch (d) {}
  };
  S.LK = function (a, b, c) {
  	SDK_INTERFACE_HELPERS.lastLevel = q.Sd();
    var d = { eventName: "LEVELEND" };
    d.result = a;
    d.score = b;
    S.send("EVENT_CUSTOM", d).then(
      function () {
        c();
      },
      function () {}
    );
  };
  S.Mq = function () {
  	if(q.Sd() > SDK_INTERFACE_HELPERS.lastLevel) {
  		window.famobi_analytics.trackEvent("EVENT_CUSTOM", {eventName: "EVENT_LEVELSUCCESS", levelName: SDK_INTERFACE_HELPERS.lastLevel});
  	} else {
  		window.famobi_analytics.trackEvent("EVENT_CUSTOM", {eventName: "EVENT_LEVELFAIL"});
  	}
    return S.send("EVENT_CUSTOM", { eventName: "EVENT_LEADERBOARD" });
  };
  S.send = function (a, b) {
    try {
      return null != b ? window.famobi_analytics.trackEvent(a, b) : window.famobi_analytics.trackEvent(a);
    } catch (c) {
      return new Promise(function (d) {
        d(null);
      });
    }
  };
  fd.i = !0;
  fd.prototype = { s: fd };
  rf.i = !0;
  rf.F = fd;
  rf.prototype = C(fd.prototype, {
    get: function () {
      return this.storage.getItem(this.name);
    },
    set: function (a) {
      this.storage.setItem(this.name, a);
    },
    s: rf,
  });
  Lg.i = !0;
  Lg.prototype = { s: Lg };
  fa.i = !0;
  fa.Ri = function (a, b) {
    a = a.charCodeAt(b);
    if (a == a) return a;
  };
  fa.substr = function (a, b, c) {
    if (null == c) c = a.length;
    else if (0 > c)
      if (0 == b) c = a.length + c;
      else return "";
    return a.substr(b, c);
  };
  fa.remove = function (a, b) {
    b = a.indexOf(b);
    if (-1 == b) return !1;
    a.splice(b, 1);
    return !0;
  };
  fa.now = function () {
    return Date.now();
  };
  Ga.i = !0;
  Ga.ug = function (a, b) {
    for (a = sf(a); a.Ca(); ) if (b(a.next())) return !0;
    return !1;
  };
  Ga.filter = function (a, b) {
    var c = [];
    for (a = sf(a); a.Ca(); ) {
      var d = a.next();
      b(d) && c.push(d);
    }
    return c;
  };
  Ga.count = function (a, b) {
    var c = 0;
    if (null == b) for (b = sf(a); b.Ca(); ) b.next(), ++c;
    else for (a = sf(a); a.Ca(); ) b(a.next()) && ++c;
    return c;
  };
  Ga.find = function (a, b) {
    for (a = sf(a); a.Ca(); ) {
      var c = a.next();
      if (b(c)) return c;
    }
    return null;
  };
  Math.i = !0;
  Kg.i = !0;
  Kg.prototype = {
    lI: function (a) {
      this.size = this.Al = a;
      ha.jf(this.Qh);
      this.Qh = Array(this.size);
      for (var b = 0; b < a; ) this.Qh[b++] = this.pz();
      return this;
    },
    put: function (a) {
      this.size == this.pH ? this.iH(a) : (this.size == this.Al && this.resize(), (this.Qh[this.size++] = a));
    },
    resize: function () {
      var a = Yb.ud(this.Uc, this.Al),
        b = Array(a);
      this.Al = a;
      ha.Wb(this.Qh, 0, b, 0, this.size);
      this.Qh = b;
    },
    s: Kg,
  };
  bb.i = !0;
  bb.create = function (a, b, c) {
    var d = bb.bk;
    d = 0 < d.size ? d.Qh[--d.size] : d.pz();
    d.flags = 0;
    d.sender = a;
    d.type = b;
    d.qn = c;
    return d;
  };
  bb.dt = function (a) {
    a.sender = null;
    a.qn = null;
    bb.bk.put(a);
  };
  bb.prototype = {
    get: function (a) {
      return null != this.qn ? Oa.get(this.qn, a) : null;
    },
    s: bb,
  };
  Jg.i = !0;
  Jg.prototype = {
    Ca: function () {
      return 0 < this.top;
    },
    next: function () {
      var a = this.stack[--this.top];
      this.push(a);
      return a;
    },
    push: function (a) {
      for (a = a.da; null != a; ) (this.stack[this.top++] = a), (a = a.W);
    },
    s: Jg,
  };
  Bc.i = !0;
  Bc.rc = !0;
  dc.i = !0;
  dc.rc = !0;
  dc.Aa = [Bc];
  Ig.i = !0;
  Ig.rc = !0;
  Ig.Aa = [dc];
  Z.i = !0;
  Z.Aa = [Ig];
  Z.prototype = {
    add: function (a) {
      this.Ma(a);
    },
    Ma: function (a) {
      this.o == this.S && this.grow();
      this.m[this.o++] = a;
      return this.o;
    },
    JI: function (a) {
      for (var b = this.m, c = b[a], d = --this.o; a < d; ) b[a++] = b[a];
      return c;
    },
    fE: function (a) {
      for (var b = this.m, c = 0, d, e = this.o, f = e - 1, g; c < f; ) {
        g = b[c];
        for (d = c + 1; d < e; ) a(g, b[d]), ++d;
        ++c;
      }
      return this;
    },
    trim: function (a) {
      this.o = a;
      return this;
    },
    indexOf: function (a) {
      if (0 == this.o) return -1;
      for (var b = 0, c = -1, d = this.o - 1, e = this.m; ; ) {
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
      1 < this.o &&
        (-1 == d && (d = this.o - c),
        null == a ? (b ? this.TG(c, d) : this.$s(c, d)) : b ? this.SG(a, c, d) : this.Zs(c, d, a));
      return this;
    },
    SG: function (a, b, c) {
      for (var d, e, f = this.m, g = b + 1, h = b + c; g < h; ) {
        d = g++;
        for (c = f[d]; d > b; )
          if (((e = f[d - 1]), 0 < a(e, c))) (f[d] = e), --d;
          else break;
        f[d] = c;
      }
      return this;
    },
    sk: function (a) {
      var b = this.o,
        c = this.m;
      if (null == a)
        for (; 1 < --b; ) {
          var d = (Vf.f() * b) | 0,
            e = c[b];
          c[b] = c[d];
          c[d] = e;
        }
      else for (var f = 0; 1 < --b; ) (d = (a[f++] * b) | 0), (e = c[b]), (c[b] = c[d]), (c[d] = e);
      return this;
    },
    Zs: function (a, b, c) {
      var d = a + b - 1,
        e = a,
        f = d,
        g = this.m;
      if (1 < b) {
        var h = a + (b >> 1);
        b = a + b - 1;
        var l = g[a];
        var k = g[h];
        var m = g[b];
        var t = c(l, m);
        h =
          0 > t && 0 > c(l, k)
            ? 0 > c(k, m)
              ? h
              : b
            : 0 > c(k, l) && 0 > c(k, m)
            ? 0 > t
              ? a
              : b
            : 0 > c(m, l)
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
        this.Zs(a, e - a, c);
        this.Zs(e + 1, d - e, c);
      }
    },
    $s: function (a, b) {
      var c = this.m,
        d = a + b - 1,
        e = a,
        f = d;
      if (1 < b) {
        var g = a + (b >> 1);
        b = a + b - 1;
        var h = c[a];
        var l = c[g];
        var k = c[b];
        var m = h.compare(k);
        g =
          0 > m && 0 > h.compare(l)
            ? 0 > l.compare(k)
              ? g
              : b
            : 0 > l.compare(h) && 0 > l.compare(k)
            ? 0 > m
              ? a
              : b
            : 0 > k.compare(h)
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
        this.$s(a, e - a);
        this.$s(e + 1, d - e);
      }
    },
    TG: function (a, b) {
      for (var c = this.m, d, e, f, g, h = a + 1, l = a + b; h < l; ) {
        d = h++;
        for (f = b = c[d]; d > a; )
          if (((g = e = c[d - 1]), 0 < f.compare(g))) (c[d] = e), --d;
          else break;
        c[d] = b;
      }
    },
    uc: function (a) {
      a > this.S && ((this.S = a), this.ag(a));
      return this;
    },
    resize: function (a) {
      a < this.o
        ? ((this.S = this.o = a), this.S < this.Gg && (this.S = this.Gg), this.ag(this.S))
        : (this.uc(a), (this.o = a));
      return this;
    },
    sa: function (a, b) {
      this.uc(a);
      this.o = a;
      for (var c = this.m, d = 0; d < a; ) c[d++] = b;
      return this;
    },
    grow: function () {
      this.S = Yb.ud(this.Uc, this.S);
      this.ag(this.S);
    },
    ag: function (a) {
      a = Array(a);
      ha.Wb(this.m, 0, a, 0, this.o);
      this.m = a;
    },
    R: function () {
      ha.jf(this.m);
      this.m = null;
      null != this.Va && (this.Va.R(), (this.Va = null));
    },
    contains: function (a) {
      for (var b = this.m, c = 0, d = this.o; c < d; ) if (b[c++] == a) return !0;
      return !1;
    },
    remove: function (a) {
      if (this.af()) return !1;
      for (var b = 0, c, d, e = this.o, f = this.m; b < e; )
        if (f[b] == a) {
          for (c = b + 1; c < e; )
            if (f[c] == a) ++c;
            else break;
          d = c - b;
          e -= d;
          for (d = b; d < e; ) (f[d] = f[c++]), ++d;
        } else ++b;
      a = 0 != this.o - e;
      this.o = e;
      return a;
    },
    iterator: function () {
      if (this.Hb) {
        if (null == this.Va) this.Va = new yd(this);
        else {
          var a = this.Va;
          a.m = a.kd.m;
          a.Qf = a.kd.o;
          a.Cd = 0;
        }
        return this.Va;
      }
      return new yd(this);
    },
    af: function () {
      return 0 == this.o;
    },
    Wg: function () {
      return ha.Wg(this.m, 0, this.o, []);
    },
    s: Z,
  };
  Pa.i = !0;
  Pa.prototype = {
    ya: function (a) {
      if (null == this.list) return (this.list = new ke(a)), Pa.count++, !0;
      for (var b = this.list; null != b; ) {
        if (b.Ng == a) return !1;
        b = b.next;
      }
      a = new ke(a);
      a.next = this.list;
      this.list = a;
      Pa.count++;
      return !0;
    },
    detach: function (a) {
      if (null == a && null != this.current) return this.detach(this.current), (this.current = null), !0;
      var b = this.list;
      if (null == b) return !1;
      if (b.Ng == a)
        return (
          this.next == b && (this.next = b.next), (b.Ng = null), (this.list = b.next), (b.next = null), Pa.count--, !0
        );
      var c = b;
      for (b = b.next; null != b; ) {
        if (b.Ng == a)
          return (
            (b.Ng = null), (c.next = b.next), (b.next = null), this.next == b && (this.next = c.next), Pa.count--, !0
          );
        c = b;
        b = b.next;
      }
      return !1;
    },
    Xm: function () {
      for (var a = this.list; null != a; )
        (this.next = a.next), (a.Ng = null), (a.next = null), (a = this.next), Pa.count--;
      this.list = this.next = null;
    },
    notify: function (a) {
      for (var b = this.list; null != b; ) (this.next = b.next), (this.current = b.Ng), a(b.Ng), (b = this.next);
      this.current = this.next = null;
    },
    s: Pa,
  };
  Ma.i = !0;
  Ma.register = function (a) {
    Ma.Kr.Ma(a);
    Ma.total++;
    Ma.ai.notify(function (b) {
      b.QL(a);
    });
  };
  Ma.unregister = function (a) {
    var b = Ma.Kr,
      c = b.m;
    c[Ma.Kr.indexOf(a)] = c[--b.o];
    Ma.total--;
    Ma.ai.notify(function (d) {
      d.RL(a);
    });
  };
  Ma.Zz = function (a) {
    Ma.ai.notify(function (b) {
      b.Zz(a);
    });
  };
  zb.i = !0;
  zb.Y = function (a, b) {
    b.parent = a;
    if (null != a.da) {
      for (var c = a.da; null != c.W; ) c = c.W;
      c.W = b;
    } else a.da = b;
    for (a = a.parent; null != a; ) a = a.parent;
    b.kc();
    Ma.Zz(b);
  };
  zb.removeChild = function (a) {
    if (null == a || null == a.parent) return !1;
    var b = a.parent;
    if (a == b.da) b.da = a.W;
    else
      for (b = b.da; null != b; ) {
        if (b.W == a) {
          b.W = a.W;
          break;
        }
        b = b.W;
      }
    a.parent = a.W = null;
    return !0;
  };
  zb.Qy = function (a, b) {
    var c = a.W;
    a.W = b;
    b.W = c;
    b.parent = a.parent;
    b.kc();
  };
  zb.ot = function (a, b) {
    a.f |= b;
    for (a = a.da; null != a; ) zb.ot(a, b), (a = a.W);
  };
  Sb.i = !0;
  Sb.F = A;
  Sb.prototype = C(A.prototype, {
    B: function () {
      A.prototype.B.call(this);
      this.Wd.R();
      this.Wd = null;
      this.buffer.R();
      this.buffer = null;
      this.xo = 0;
    },
    ya: function (a, b, c) {
      if (null != b) for (c = 0; c < b.length; ) this.ya(a, null, b[c++]);
      else
        (b = null == c ? 0 : c + 1),
          b > this.ps && (this.ps = b),
          this.Wd.resize(this.ps + 1),
          (c = this.Wd.m[b]),
          null == c && ((c = new Hg(b)), (this.Wd.m[b] = c)),
          c.add(a) && this.xo++;
    },
    detach: function (a, b) {
      b = null == b ? 0 : b + 1;
      if (0 <= b && b < this.Wd.o) {
        var c = this.Wd.m[b];
        null != c && c.remove(a) && (this.xo--, c.list.af() && (c.R(), (this.Wd.m[b] = null)));
      }
    },
    notify: function (a, b) {
      this.buffer.o = 0;
      this.buffer.uc(2 * this.xo);
      var c = this.buffer.m,
        d = 0;
      if (0 < this.Wd.o) {
        var e = this.Wd.m[0];
        if (null != e) {
          var f = e.list.m;
          var g = 0;
          for (e = e.list.o; g < e; ) (c[g] = f[g]), ++g;
          d = e;
        }
      }
      g = null == a ? 0 : a + 1;
      if (0 <= g && g < this.Wd.o && ((e = this.Wd.m[g]), null != e)) {
        f = e.list.m;
        g = 0;
        for (e = e.list.o; g < e; ) (c[g + d] = f[g]), ++g;
        d += e;
      }
      a = bb.create(this, a, b);
      g = 0;
      for (e = d; g < e; ) c[g].Ia(a), ++g;
      bb.dt(a);
    },
    X: function () {
      return 9;
    },
    s: Sb,
  });
  Hg.i = !0;
  Hg.prototype = {
    add: function (a) {
      if (this.list.contains(a)) return !1;
      this.list.Ma(a);
      return !0;
    },
    remove: function (a) {
      return this.list.remove(a);
    },
    R: function () {
      this.list.R();
      this.list = null;
    },
    s: Hg,
  };
  Kd.i = !0;
  Kd.ve = function () {
    return "undefined" !== typeof window.orientation;
  };
  Kd.hG = function () {
    var a = new kb();
    new qa("[?&]+([^=&]+)=([^&]*)", "gi").map(window.location.href, function (b) {
      var c = b.Ce(1);
      b = b.Ce(2);
      a.P[c] = b;
      return null;
    });
    return a;
  };
  var Oa = {
    Mx: function (a) {
      var b = Oa.Ac();
      if (1 == a.length) Oa.set(b, a[0]);
      else for (var c = a.length, d = 0; d < c; ) Oa.set(b, a[d], a[d + 1]), (d += 2);
      return b;
    },
    Ac: function (a, b) {
      var c = {};
      null != a && Oa.set(c, a, b);
      return c;
    },
    get: function (a, b, c) {
      a = U.Z(a, b);
      null == a && (a = c);
      return a;
    },
    set: function (a, b, c) {
      a[b] = null == c ? !0 : c;
      return a;
    },
    $k: function (a, b) {
      return U.Z(a, b);
    },
    Sq: function (a, b, c) {
      a[b] = c;
    },
  };
  U.i = !0;
  U.Z = function (a, b) {
    try {
      return a[b];
    } catch (c) {
      return null;
    }
  };
  qf.i = !0;
  qf.rc = !0;
  qf.prototype = { s: qf };
  Ja.i = !0;
  Ja.Hw = function (a) {
    a instanceof Ja || (a instanceof Error ? new Ja(a.message, null, a) : new qe(a, null, a));
  };
  Ja.F = Error;
  Ja.prototype = C(Error.prototype, {
    YK: function () {
      return this.bw;
    },
    toString: function () {
      return this.message;
    },
    AL: function () {
      return this.message;
    },
    BL: function () {
      return this.bw;
    },
    s: Ja,
  });
  Gg.i = !0;
  Gg.F = Ja;
  Gg.prototype = C(Ja.prototype, { s: Gg });
  Ha.i = !0;
  pf.i = !0;
  pf.prototype = {
    start: function () {
      var a = this;
      this.stop();
      var b = null;
      this.window && "undefined" !== typeof window.requestAnimationFrame
        ? ((b = function (c) {
            a.handle = window.requestAnimationFrame(b);
            a.update(c);
          }),
          (this.now = 0),
          (this.handle = window.requestAnimationFrame(b)))
        : ((b = function () {
            a.handle = setTimeout(b, 16);
            var c = Date.now();
            a.update(c);
          }),
          (this.now = Date.now()),
          (this.handle = setTimeout(b, 16)));
    },
    stop: function () {
      this.window
        ? 0 > this.handle || (window.cancelAnimationFrame(this.handle), (this.handle = -1))
        : null != this.handle && (clearInterval(this.handle), (this.handle = null));
    },
    update: function (a) {
      Ha.time = a / 1e3;
      var b = a - this.now;
      this.now = a;
      null != this.Ic && this.Ic(b);
    },
    s: pf,
  };
  Ac.i = !0;
  Ac.cn = function (a) {
    return new (Function.prototype.bind.apply(a, [null].concat([])))();
  };
  Ac.hF = function (a) {
    var b = Mb[a.H].Oc[a.G].hb;
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
  var uf = {
    qm: function (a) {
      return 0 > a ? 4294967296 + a : a + 0;
    },
  };
  ed.i = !0;
  ed.F = A;
  ed.prototype = C(A.prototype, {
    U: function (a) {
      this.delay -= a;
      0 < this.delay || (this.dl(), (this.dl = null), this.B());
    },
    X: function () {
      return 7;
    },
    s: ed,
  });
  Fg.i = !0;
  Fg.prototype = { s: Fg };
  of.i = !0;
  of.prototype = {
    load: function (a, b) {
      if (this.tl(a) || this.Rr(a) || this.Zn(a)) return !1;
      this.As++;
      a = new mf(a, this);
      a.sf = b;
      a.priority = this.Fz--;
      if (this.Lh.length == this.rH) return this.Gb.enqueue(a), !0;
      this.Lh.push(a);
      a.load();
      return !0;
    },
    stop: function () {
      this.Gb.clear();
    },
    rI: function (a) {
      if (!this.tl(a) || this.Rr(a) || this.Zn(a)) return !1;
      var b = Ga.find(this.Gb, function (c) {
        return -1 < c.rf.url.indexOf(a);
      });
      if (null == b) return !1;
      this.Gb.OI(b, ++this.Ez);
      return !0;
    },
    xh: function (a) {
      if (null == this.Gb || 0 == this.As) return 1;
      if (null == a) return this.Kz / this.As;
      for (var b = 0, c = 0, d = 0, e = this.Lh; d < e.length; ) {
        var f = e[d];
        ++d;
        if (null == a || -1 < a.indexOf(f.rf.url)) ++b, (c += f.ol());
      }
      for (f = this.Gb.iterator(); f.Ca(); ) if (((d = f.next()), null == a || -1 < a.indexOf(d.rf.url))) ++b, (c += 0);
      for (d = 0; d < a.length; ) this.Rr(a[d++]) && (++b, ++c);
      return 0 == b ? 0 : c / b;
    },
    tl: function (a) {
      function b(c) {
        return -1 < c.rf.url.indexOf(a);
      }
      return null == this.Gb ? !1 : 0 < Ga.count(this.Gb, b) + Ga.count(this.Lh, b);
    },
    UH: function (a) {
      this.Gs(new Fg(a.rf.url, a.rf.data, a.rf.Uh, a.sf));
      null != a.Tj && (a.Tj(a), (a.Tj = null));
      fa.remove(this.Lh, a);
      this.Kz++;
      0 < this.Gb.o
        ? ((a = this.Gb.bj()), this.Lh.push(a), a.load())
        : 0 == this.Lh.length && ((this.Fz = this.Ez = 0), null != this.tc && this.tc());
    },
    TH: function () {
      this.stop();
    },
    Rr: function (a) {
      return x.pl(x.wg(a));
    },
    Zn: function (a) {
      return x.Zn(x.wg(a));
    },
    s: of,
  };
  nf.i = !0;
  nf.rc = !0;
  nf.prototype = { s: nf };
  mf.i = !0;
  mf.Aa = [nf];
  mf.prototype = {
    ol: function () {
      return this.rf.progress;
    },
    load: function () {
      var a = this;
      this.rf.load(
        function () {
          a.hd.UH(a);
          a.R();
        },
        function () {
          a.hd.TH();
          a.R();
        }
      );
    },
    R: function () {
      this.hd = null;
      this.rf.R();
    },
    s: mf,
  };
  Eg.i = !0;
  Eg.rc = !0;
  Ya.i = !0;
  Ya.Aa = [Eg];
  Ya.prototype = {
    remove: function (a) {
      if (!this.P.hasOwnProperty(a)) return !1;
      delete this.P[a];
      return !0;
    },
    keys: function () {
      var a = [],
        b;
      for (b in this.P) this.P.hasOwnProperty(b) && a.push(+b);
      return new ud(a);
    },
    iterator: function () {
      return {
        CI: this.P,
        cz: this.keys(),
        Ca: function () {
          return this.cz.Ca();
        },
        next: function () {
          var a = this.cz.next();
          return this.CI[a];
        },
      };
    },
    s: Ya,
  };
  x.i = !0;
  x.sa = function () {
    x.tw = "res";
    x.yl = new Ya();
    x.Uh = new Ya();
    x.Dw = [];
    x.hi = 0;
    x.language = null;
    x.Mm = null;
    x.gi = new Ya();
    x.qK = "txt csv xml json yaml properties js".split(" ");
    x.AG = ["png", "jpg"];
    x.Xl = new kb();
    x.jn = new Ya();
    x.locked = new Ya();
  };
  x.XF = function () {
    return x.hi;
  };
  x.xJ = function (a) {
    x.hi = a;
    x.pq(x.Ey);
  };
  x.kr = function () {
    return x.language;
  };
  x.tt = function (a) {
    if (null != a && !new qa("^[a-z]{2}$", "").match(a)) throw 5;
    x.language = a;
    a = "tr ru pt it fr es en de".split(" ");
    0 < a.length &&
      !Ga.ug(a, function (b) {
        return b == x.language;
      }) &&
      (x.language = "en");
    x.pq(x.XG);
  };
  x.rh = function () {
    return x.Mm;
  };
  x.iJ = function (a) {
    if (!new qa("^[a-z3]{3}$", "").match(a)) throw 6;
    x.Mm = a;
    x.pq(x.Yn);
  };
  x.fG = function () {
    return x.qK.slice();
  };
  x.JF = function () {
    return x.AG.slice();
  };
  x.il = function (a) {
    if (x.gi.P.hasOwnProperty(a)) return x.gi.P[a];
    if (1e3 < a && Object.prototype.hasOwnProperty.call(x.Xl.P, null == a ? "null" : "" + a)) {
      var b = x.Xl.P[null == a ? "null" : "" + a];
      return (x.gi.P[a] = b);
    }
    b = x.Ki[a];
    if (null == b) return null;
    var c = new qa("{(?:language|audio|x)}", "");
    if (c.match(b)) {
      c = new qa("{language}", "");
      if (c.match(b)) {
        if (null == x.language) return null;
        b = b.replace(c.r, Aa.ab(x.language));
      }
      c = new qa("{audio}", "g");
      if (c.match(b)) {
        if (null == x.Mm) return null;
        b = b.replace(c.r, x.Mm);
      }
      c = new qa("{x}", "g");
      if (c.match(b)) {
        if (null == x.hi) return null;
        b = b.replace(c.r, "x" + x.hi);
      }
    }
    x.gi.P[a] = "" + x.tw + "/" + b;
    return x.gi.P[a];
  };
  x.jy = function () {
    var a;
    null == a && (a = x.Zx());
    for (var b = [], c = 0; c < a.length; ) {
      var d = x.il(a[c++]);
      null != d && b.push(d);
    }
    return b;
  };
  x.Zx = function () {
    for (var a = [], b = 0; 27 > b; ) a.push(b++);
    return a;
  };
  x.YF = function () {
    for (var a = [], b = 0, c = x.nI; b < c.length; ) {
      var d = c[b];
      ++b;
      x.nK(d) && a.push(d);
    }
    return a;
  };
  x.wg = function (a) {
    function b(d, e) {
      d.match(a) && (a = a.replace(d.r, e));
    }
    if (Object.prototype.hasOwnProperty.call(x.Xl.P, a)) return Aa.parseInt(x.Xl.P[a]);
    b(new qa("^(" + x.tw + "/)(.*)", ""), "$2");
    var c = "tr ru pt it fr es en de".split(" ");
    0 < c.length && b(new qa("([/_])(" + c.join("|") + ")(/|(\\.\\S{3,4}$))", ""), "$1{language}$3");
    b(new qa("([/_])(x[1-4])(/|(\\.\\S{3,4}$))", ""), "$1{x}$3");
    c = ["ogg", "aac"];
    0 < c.length &&
      (b(new qa("(.*?)\\.(" + c.join("|") + ")$", ""), "$1.{audio}"),
      b(new qa("((" + c.join("|") + ")\\/)", ""), "{audio}/"));
    return x.Ki.indexOf(a);
  };
  x.Ln = function (a) {
    return x.Cw(x.getData(a));
  };
  x.nK = function (a) {
    if (x.Yn(a)) {
      var b = x.rh();
      return null == b
        ? !1
        : Ga.ug(["ogg", "aac"], function (c) {
            return c == b;
          });
    }
    return !0;
  };
  x.getData = function (a) {
    return x.yl.P[a];
  };
  x.setData = function (a, b, c) {
    var d = x.yl.P.hasOwnProperty(a);
    if (x.jn.P.hasOwnProperty(a))
      (x.locked.P[a] = !0),
        (d = x.jn.P[a]),
        x.jn.remove(a),
        d(a, b, function (f) {
          x.locked.remove(a);
          x.setData(a, f, c);
        });
    else if ((null != c && (x.Uh.P[a] = c), (x.yl.P[a] = b), !d))
      for (b = x.Dw, d = b.length; -1 < --d; )
        if (b[d].id == a) {
          var e = b[d];
          b[d] = b[b.length - 1];
          b.pop();
          e.cF();
        }
  };
  x.pl = function (a) {
    return null != x.yl.P[a];
  };
  x.QF = function (a) {
    return x.Uh.P[a];
  };
  x.wd = function (a) {
    var b = x.getData(a);
    if (null != b)
      try {
        b instanceof HTMLImageElement
          ? (b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
          : b instanceof HTMLCanvasElement
          ? ((b.width = 1), (b.height = 1))
          : b instanceof ImageBitmap && b.close();
      } catch (c) {}
    return x.yl.remove(a);
  };
  x.XG = function (a) {
    return new qa("{language}", "").match(x.Ki[a]);
  };
  x.Yn = function (a) {
    return 1e3 < a
      ? ((a = x.Xl.P[null == a ? "null" : "" + a]), new qa("(ogg|aac|mp3)$", "").match(a))
      : new qa("{audio}", "").match(x.Ki[a]);
  };
  x.we = function (a) {
    return new qa("music", "").match(x.Ki[a]);
  };
  x.Zn = function (a) {
    return x.locked.P.hasOwnProperty(a);
  };
  x.Ey = function (a) {
    return 1e3 < a || (0 > a && 27 <= a) ? !1 : new qa("{x}", "").match(x.Ki[a]);
  };
  x.Es = function (a, b) {
    null != x.il(a) && (x.pl(a) ? b(a) : x.Dw.push(new Dg(a, b)));
  };
  x.GI = function (a, b) {
    x.jn.P[a] = b;
  };
  x.Cw = function (a) {
    if (a instanceof ArrayBuffer) {
      if ("TextDecoder" in window) return (a = new DataView(a)), new TextDecoder("utf-8").decode(a);
      a = ra.bi(a);
      return a.Ln(0, a.length);
    }
    return Aa.ab(a);
  };
  x.pq = function (a) {
    for (var b = 0, c = x.Zx(), d = [], e = 0; e < c.length; ) {
      var f = c[e];
      ++e;
      a(f) && x.gi.P.hasOwnProperty(f) && d.push(f);
    }
    for (; b < d.length; ) x.gi.remove(d[b++]);
  };
  Dg.i = !0;
  Dg.prototype = {
    cF: function () {
      this.dl(this.id);
      this.dl = null;
    },
    s: Dg,
  };
  cc.i = !0;
  cc.encode = function (a) {
    for (
      var b = a.length, c = [1732584193, -271733879, -1732584194, 271733878], d = 64, e = a.length, f = [];
      d <= e;

    ) {
      for (var g = a.substring(d - 64, d), h = 0; 64 > h; )
        (f[h >> 2] =
          g.charCodeAt(h) + (g.charCodeAt(h + 1) << 8) + (g.charCodeAt(h + 2) << 16) + (g.charCodeAt(h + 3) << 24)),
          (h += 4);
      cc.qs(c, f);
      d += 64;
    }
    a = a.substring(d - 64);
    f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    d = 0;
    for (e = a.length; d < e; ) (f[d >> 2] |= a.charCodeAt(d) << (d % 4 << 3)), ++d;
    f[d >> 2] |= 128 << (d % 4 << 3);
    if (55 < d) for (cc.qs(c, f), d = 0; 16 > d; ) (f[d] = 0), ++d;
    f[14] = 8 * b;
    cc.qs(c, f);
    f = cc.wC;
    g = "";
    d = 0;
    for (e = c.length; d < e; )
      for (a = 0, b = c[d++]; 4 > a; ) (g += f[(b >> ((a << 3) + 4)) & 15] + f[(b >> (a << 3)) & 15]), ++a;
    return g;
  };
  cc.qs = function (a, b) {
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
  dd.i = !0;
  dd.prototype = {
    R: function () {
      this.image = this.Kl = this.Tj = this.data = null;
    },
    load: function (a, b) {
      function c(f) {
        return 0 < f.length ? new qa("(?:" + f.join("|") + ")", "i").match(e) : !1;
      }
      var d = this;
      this.Tj = a;
      this.Kl = b;
      var e = "";
      dd.state.P[this.url] = 1;
      a = new qa("\\.(\\w+)$", "g");
      a.match(this.url) && (e = a.Ce(1));
      c(["ogg", "aac"])
        ? this.nu(this.url, "arraybuffer", null, function (f) {
            d.tc(f);
          })
        : c(x.JF())
        ? ((this.image = window.document.createElement("img")),
          (this.image.onload = function () {
            d.image.onload = null;
            d.image.onerror = null;
            d.tc(d.image);
          }),
          (this.image.onerror = function () {}),
          this.nu(this.url, "blob", "jpg" == e ? "image/jpeg" : "image/png", function (f) {
            var g = new FileReader();
            g.onload = function (h) {
              d.Uh = d.mr(h.target.result);
              d.image.src = URL.createObjectURL(f);
              g.onload = null;
              g.onerror = null;
            };
            g.onerror = function () {};
            g.readAsArrayBuffer(f);
          }))
        : ((a = "arraybuffer"),
          c(x.fG()) && (a = "text"),
          this.nu(this.url, a, null, function (f) {
            d.tc(f);
          }));
    },
    tc: function (a) {
      this.data = a;
      dd.state.P[this.url] = 2;
      this.Tj();
      this.Tj = null;
    },
    nu: function (a, b, c, d) {
      var e = this,
        f = new XMLHttpRequest();
      f.onerror = function () {
        null != e.Kl && e.Kl();
        f.onerror = f.onload = f.onprogress = null;
      };
      f.onload = function () {
        e.progress = 1;
        if (404 == f.status) null != e.Kl && e.Kl();
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
        f.open("GET", null != this.Bp ? "" + a + "?" + this.Bp : a, !0),
          null != c && f.setRequestHeader("Content-Type", c),
          (f.responseType = b),
          f.send();
      } catch (g) {}
      return f;
    },
    mr: function (a) {
      var b = new Uint8Array(a),
        c = b.byteLength;
      if (69 == b[c - 1]) {
        var d = b[c - 3];
        b = b[c - 6] | (b[c - 5] << 8) | (b[c - 4] << 16);
        c = a.slice(c - (b + 6), c - 6);
        if (0 < (d & 1)) {
          b = cc.encode(pb.encode(ra.bi(a.slice(0, a.byteLength - (b + 6)))));
          a = [];
          for (d = 0; 32 > d; ) a.push(fa.Ri(b, d++));
          b = new Uint8Array(c);
          d = 0;
          for (var e = c.byteLength; d < e; ) {
            var f = d++;
            b[f] ^= a[f & 31];
          }
        }
        return c;
      }
      return null;
    },
    s: dd,
  };
  Ca.i = !0;
  Ca.oh = function () {
    null != ka.Kb && (ka.Kb.B(), X.close());
  };
  Ca.start = function () {
    return (Ca.enabled = X.create());
  };
  Ca.Ty = function () {
    return X.$G();
  };
  Ca.rh = function () {
    return X.rh();
  };
  Ca.yn = function () {
    return ka.instance();
  };
  cd.i = !0;
  cd.prototype = { s: cd };
  ka.i = !0;
  ka.instance = function () {
    return null != ka.Kb ? ka.Kb : (ka.Kb = Ca.Ty() ? new lf() : new ka());
  };
  ka.prototype = {
    B: function () {
      ka.Kb = null;
      for (var a = this.dc.iterator(); a.Ca(); ) a.next().B();
      this.dc.R();
      this.dc = null;
      for (var b = 0; 4096 > b; ) {
        a = b++;
        var c = this.qd[a];
        null != c && (c.data = null);
        this.qd[a] = null;
      }
      this.qd = null;
    },
    fk: function () {},
    Tl: function () {},
    play: function () {
      return -1;
    },
    stop: function (a, b) {
      null == b && (b = 0);
      if (0 > a) return !1;
      if (1e4 > a) {
        for (
          var c = !1,
            d = 0,
            e = Ga.filter(this.dc, function (f) {
              return f.pd.id == a;
            });
          d < e.length;

        )
          (c = !0), e[d++].stop(b);
        return c;
      }
      c = Ga.find(this.dc, function (f) {
        return f.id == a;
      });
      return null != c ? (c.stop(b), !0) : !1;
    },
    Zb: function (a) {
      return 0 > a
        ? !1
        : 1e4 > a
        ? Ga.ug(this.dc, function (b) {
            return b.pd.id == a;
          })
        : Ga.ug(this.dc, function (b) {
            return b.id == a;
          });
    },
    wg: function (a) {
      var b = Ga.find(this.dc, function (c) {
        return c.pd.id == a;
      });
      return null != b ? b.id : -1;
    },
    cG: function (a) {
      return 1e4 > a
        ? Ga.find(this.dc, function (b) {
            return b.pd.id == a;
          })
        : Ga.find(this.dc, function (b) {
            return b.id == a;
          });
    },
    Yy: function (a) {
      return null != this.qd[a];
    },
    vJ: function (a, b) {
      if (null == a) {
        var c = this.dc,
          d = c.m,
          e = 0;
        for (c = c.o; e < c; ) {
          var f = d[e++];
          f.pd.we && f.ri(b);
        }
      } else
        for (c = this.dc, d = c.m, e = 0, c = c.o; e < c; )
          (f = d[e++]), f.pd.we && (1e4 > a ? f.pd.id : f.id) == a && f.ri(b);
    },
    vc: function (a) {
      this.ms = P.ne(a);
      this.cu();
      this.du();
    },
    wt: function (a) {
      this.ls = P.ne(a);
      this.du();
    },
    vt: function (a) {
      this.ks = P.ne(a);
      this.cu();
    },
    oF: function (a, b, c) {
      null == c && (c = !0);
      this.dk(a, 0, b);
      c && this.stop(a, b);
    },
    dk: function (a, b, c, d) {
      null == d && (d = -1);
      var e = this.cG(a);
      null != e && this.Zb(a) && (-1 != d && e.ri(d), P.vq(e.yg(), b, 0.01) || e.dk(b, c));
    },
    GA: function (a, b, c) {
      if (!this.enabled || !this.Yy(a)) return -1;
      if (b && this.Zb(a)) return this.wg(a);
      b && (c = !0);
      if (!c && this.sK(a)) return -1;
      a = this.SF(this.qd[a].we, c);
      return 0 > a ? -1 : a;
    },
    aA: function (a) {
      this.dc.add(a);
      this.dc.o > this.Az && (this.Az = this.dc.o);
    },
    $z: function (a) {
      this.kg &= ~(1 << a.channel);
      this.dc.remove(a);
      null != a.tc && (a.tc(), (a.tc = null));
    },
    sK: function (a) {
      a = this.qd[a];
      if (a.we) return !1;
      var b = fa.now() / 1e3;
      if (b - a.Cg < this.tK) return !0;
      a.Cg = b;
      return !1;
    },
    SF: function (a, b) {
      if (a) {
        for (var c = 0; c < this.Cz; ) {
          if (0 == (this.kg & (1 << c))) return (this.kg |= 1 << c), c;
          ++c;
        }
        return -1;
      }
      c = -1;
      var d = this.Cz;
      for (a = d + this.qH; d < a; ) {
        if (0 == (this.kg & (1 << d))) {
          this.kg |= 1 << d;
          c = d;
          break;
        }
        ++d;
      }
      if (b && 0 > c) {
        b = null;
        a = 0;
        for (c = this.dc.iterator(); c.Ca(); )
          (d = c.next()), !d.pd.we && !d.loop && d.xh() > a && ((a = d.xh()), (b = d));
        if (null == b) return -1;
        c = b.channel;
        b.stop();
      }
      return c;
    },
    cu: function () {
      var a = this.dc,
        b = a.m,
        c = 0;
      for (a = a.o; c < a; ) {
        var d = b[c++];
        d.pd.we && d.ri(d.yg());
      }
    },
    du: function () {
      var a = this.dc,
        b = a.m,
        c = 0;
      for (a = a.o; c < a; ) {
        var d = b[c++];
        d.pd.we || d.ri(d.yg());
      }
    },
    s: ka,
  };
  Cg.i = !0;
  Cg.prototype = { s: Cg };
  zc.i = !0;
  zc.By = function (a) {
    a = ra.bi(a);
    return 83 == a.b[0] && 80 == a.b[1] ? 82 == a.b[2] : !1;
  };
  zc.KI = function (a) {
    return a.slice(5 + new qb(ra.bi(a), 3).ac());
  };
  zc.DF = function (a) {
    if (!zc.By(a)) throw 7;
    a = new qb(ra.bi(a), 5);
    for (var b = [], c = 0, d = a.ac(); c < d; ) {
      c++;
      for (var e = "", f = 0, g = a.ac(); f < g; ) {
        f++;
        var h = a.ea();
        e += String.fromCodePoint(h);
      }
      b.push(new Cg(e, a.ac(), a.yA(), a.yA()));
    }
    return b;
  };
  Lb.i = !0;
  Lb.prototype = {
    B: function () {
      this.ji = this.pd = null;
      this.Ag = !0;
    },
    yg: function () {
      return this.Ag ? NaN : this.volume;
    },
    ri: function (a) {
      this.Ag || ((this.volume = a), this.SB());
    },
    xh: function () {
      return this.Ag ? NaN : this.wh() / this.Cn();
    },
    s: Lb,
  };
  X.i = !0;
  X.isActive = function () {
    return X.active;
  };
  X.ao = function () {
    return null != X.xm && X.xm ? "suspended" == X.context.state : !1;
  };
  X.yb = function (a) {
    X.active ? a() : X.ai.ya(a);
  };
  X.resume = function () {
    if (null != X.context && X.ao())
      try {
        "suspended" == X.context.state &&
          X.context.resume().then(function () {
            X.active = !0;
            X.ai.notify(function (a) {
              a();
            });
            X.ai.Xm();
          });
      } catch (a) {}
  };
  X.$G = function () {
    for (;;) {
      if (null != X.xm) return X.xm;
      try {
        X.xm = !(!window.AudioContext && !window.webkitAudioContext);
      } catch (a) {
        X.xm = !1;
      }
    }
  };
  X.rh = function () {
    var a = X.Lm;
    if ("undefined" !== typeof a) return a;
    if (-1 != Nb.navigator.userAgent.indexOf("EdgA/")) return (X.Lm = "ogg");
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
        for (var l = 0, k = 0; k < h.length; ) {
          var m = d(h[k++]);
          m > l && (l = m);
        }
        return l;
      }
      return U.Z(c, b.canPlayType(h).replace(RegExp("^no$", ""), ""));
    };
    a = {};
    a.mp3 = d("audio/mp3;");
    a.ogg = d('audio/ogg; codecs="vorbis"');
    a.aac = d("audio/aac;");
    var e = Nb.navigator.userAgent.toLowerCase();
    if (-1 < e.indexOf("opr") || -1 < e.indexOf("yabrowser")) return "ogg";
    e = 0;
    for (var f = ["aac", "ogg", "mp3"]; e < f.length; ) {
      var g = f[e];
      ++e;
      if (0 < U.Z(a, g)) return (X.Lm = g);
    }
    return (X.Lm = null);
  };
  X.create = function () {
    if (null != X.context) return !0;
    try {
      if (
        ("undefined" !== typeof AudioContext
          ? (X.context = new AudioContext())
          : "undefined" !== typeof webkitAudioContext && (X.context = new webkitAudioContext()),
        (X.context.onstatechange = function () {
          X.active = !X.ao();
        }),
        (X.active = !X.ao()),
        !X.active)
      ) {
        var a = null;
        a = function (b) {
          "touchend" == b.type && b.preventDefault();
          X.ao() ? X.resume() : (window.removeEventListener("mouseup", a), window.removeEventListener("touchend", a));
        };
        window.addEventListener("mouseup", a);
        window.addEventListener("touchend", a);
      }
    } catch (b) {
      X.context = null;
    }
    return null != X.context;
  };
  X.close = function () {
    try {
      X.context.close();
    } catch (a) {}
  };
  bd.i = !0;
  bd.F = ka;
  bd.prototype = C(ka.prototype, {
    fk: function (a, b, c, d, e) {
      null == c && (c = !1);
      var f = this;
      ka.prototype.fk.call(this, a, b, c, d, e);
      var g = !1,
        h = new Audio(),
        l = null;
      l = function () {
        h.removeEventListener("canplaythrough", l);
        g = !0;
      };
      h.addEventListener("canplaythrough", l, !1);
      h.src = URL.createObjectURL(b);
      h.preload = "auto";
      var k = new rc(100);
      k.Ic = function () {
        g && 4 == h.readyState && ((f.qd[a] = new cd(a, h, c)), d(h), k.stop());
      };
    },
    Tl: function (a, b, c) {
      for (var d = this, e = 0; e < a.length; ) {
        var f = a[e];
        ++e;
        this.xa[f.id] = f;
      }
      ka.prototype.Tl.call(this, a, b, c);
      this.fk(++bd.CD, b, !1, function (g) {
        for (var h = 0, l = a.length; h < l; ) {
          var k = a[h++].id;
          d.qd[k] = new cd(k, g, !1);
        }
        c(g);
      });
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = !1);
      null == b && (b = !1);
      c = this.GA(a, b, c);
      if (0 > c) return -1;
      a = 1001 <= a ? new Jd(this, this.qd[a], a, !1) : new Jd(this, this.qd[a], null, b);
      a.id = this.Iz++;
      a.channel = c;
      a.loop = b;
      a.offset = d;
      this.aA(a);
      return a.id;
    },
    s: bd,
  });
  Jd.i = !0;
  Jd.F = Lb;
  Jd.prototype = C(Lb.prototype, {
    B: function () {
      this.node.pause();
      this.node.removeEventListener("timeupdate", J(this, this.bA));
      this.node.removeEventListener("loadedmetadata", J(this, this.Ms));
      this.node = this.node.onended = null;
      this.ji.$z(this);
      this.Zb = !1;
      null != this.lb && (this.lb.stop(), (this.lb = this.lb.Ic = null));
      Lb.prototype.B.call(this);
    },
    wh: function () {
      return (this.node.currentTime - this.min) % this.Cn();
    },
    Cn: function () {
      return this.max - this.min;
    },
    dk: function (a, b) {
      var c = this;
      if (!this.Ag) {
        null != this.lb ? this.lb.stop() : (this.lb = new rc(30));
        var d = this.yg();
        b *= 1e3;
        this.time = 0;
        this.lb.Ic = function () {
          c.time += 30;
          if (null == c.node) c.lb.stop(), (c.lb.Ic = null), (c.lb = null);
          else {
            var e = Math.min(c.time / b, 1);
            c.ri(P.Td(d, a, e));
            1 == e && (c.lb.stop(), (c.lb = null));
          }
        };
      }
    },
    stop: function (a) {
      null == a && (a = 0);
      this.Zb && !this.stopped && ((this.stopped = !0), 0 < a ? rc.delay(J(this, this.B), (1e3 * a) | 0) : this.B());
    },
    bA: function () {
      this.node.currentTime > this.max && this.stop();
    },
    Ms: function () {
      this.node.currentTime = this.min;
      this.node.removeEventListener("loadedmetadata", J(this, this.Ms));
    },
    SB: function () {
      var a = (this.pd.we ? this.ji.ks : this.ji.ls) * this.ji.ms,
        b = this.yg();
      this.node.volume = a * b;
    },
    s: Jd,
  });
  lf.i = !0;
  lf.F = ka;
  lf.prototype = C(ka.prototype, {
    fk: function (a, b, c, d, e) {
      null == c && (c = !1);
      var f = this;
      ka.prototype.fk.call(this, a, b, c, d, e);
      this.decode(b, function (g) {
        null == g ? d(null) : ((f.qd[a] = new cd(a, g, c)), d(g));
      });
    },
    Tl: function (a, b, c) {
      var d = this;
      ka.prototype.Tl.call(this, a, b, c);
      this.decode(b, function (e) {
        if (null == e) c(null);
        else
          try {
            for (var f = d.split(e, a), g = 0, h = a.length; g < h; ) {
              var l = g++,
                k = a[l].id;
              d.qd[k] = new cd(k, f[l], !1);
            }
            c(e);
          } catch (m) {}
      });
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = !1);
      null == b && (b = !1);
      if (!Ca.enabled || null == X.context || !X.isActive()) return -1;
      c = this.GA(a, b, c);
      if (0 > c) return -1;
      a = new yc(this, this.qd[a]);
      a.id = this.Iz++;
      a.channel = c;
      a.loop = b;
      a.offset = d;
      a.play();
      this.aA(a);
      return a.id;
    },
    vc: function (a) {
      null != X.context && ((this.ms = P.ne(a)), this.lr().hp(a));
    },
    vt: function (a) {
      null != X.context && ((this.ks = P.ne(a)), this.ay().hp(a));
    },
    wt: function (a) {
      null != X.context && ((this.ls = P.ne(a)), this.by().hp(a));
    },
    cu: function () {},
    du: function () {},
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
    lr: function () {
      null == this.no && ((this.no = new xc()), (this.no.type = 5), this.no.connect(new kf()));
      return this.no;
    },
    by: function () {
      null == this.po && ((this.po = new xc()), (this.po.type = 3), this.po.connect(this.lr()));
      return this.po;
    },
    ay: function () {
      null == this.oo && ((this.oo = new xc()), (this.oo.type = 4), this.oo.connect(this.lr()));
      return this.oo;
    },
    ME: function (a) {
      var b = window.OfflineAudioContext;
      null == b && (b = window.webkitOfflineAudioContext);
      return new b(2, 44100 * a, 44100);
    },
    split: function (a, b) {
      var c = this.ME(Math.ceil((2 * b[b.length - 1].max) / 1e3)),
        d = a.sampleRate,
        e = [],
        f = 0,
        g = b.length;
      if (1 == a.numberOfChannels)
        for (var h = a.getChannelData(0); f < g; ) {
          a = b[f++];
          var l = ((d / 1e3) * a.min) | 0,
            k = ((d / 1e3) * a.max) | 0;
          a = c.createBuffer(1, k - l, d);
          l = h.subarray(l, k);
          try {
            a.copyToChannel(l, 0);
          } catch (n) {
            a.getChannelData(0).set(l);
          }
          e.push(a);
        }
      else {
        h = a.getChannelData(0);
        for (var m = a.getChannelData(1); f < g; ) {
          a = b[f++];
          l = ((d / 1e3) * a.min) | 0;
          k = ((d / 1e3) * a.max) | 0;
          a = c.createBuffer(2, k - l, d);
          var t = h.subarray(l, k);
          l = m.subarray(l, k);
          try {
            a.copyToChannel(t, 0), a.copyToChannel(l, 1);
          } catch (n) {
            a.getChannelData(0).set(t), a.getChannelData(1).set(l);
          }
          e.push(a);
        }
      }
      return e;
    },
    s: lf,
  });
  yc.i = !0;
  yc.F = Lb;
  yc.prototype = C(Lb.prototype, {
    B: function () {
      if (!this.Ag) {
        var a = this.ke;
        a: for (; null != a; ) {
          var b = a.output;
          switch (a.type) {
            case 0:
              this.Zb && ((this.Zb = !1), this.ke.stop(0));
              break;
            case 1:
            case 2:
              break;
            default:
              break a;
          }
          fa.remove(a.output.inputs, a);
          a.n.disconnect();
          a.B();
          a = b;
        }
        this.ke = this.data = null;
        a = this.ji;
        Lb.prototype.B.call(this);
        a.$z(this);
      }
    },
    play: function () {
      if (!this.Ag) {
        this.Zb = !0;
        this.ke = new jf();
        var a = this.ji;
        this.ke.connect(this.pd.we ? a.ay() : a.by());
        this.startTime = X.context.currentTime;
        this.ke.play(this.data, this.loop, this.offset, J(this, this.onended));
      }
    },
    dk: function (a, b) {
      if (!this.Ag) {
        var c = this.Xx();
        null != c && c.dk(a, b);
        this.volume = a;
        this.ro = X.context.currentTime + b;
      }
    },
    stop: function (a) {
      null == a && (a = 0);
      this.Ag || !this.Zb || this.stopped || ((this.stopped = !0), this.ke.stop(X.context.currentTime + a));
    },
    wh: function () {
      return (this.offset + (X.context.currentTime - this.startTime)) % this.Cn();
    },
    Cn: function () {
      return this.data.duration;
    },
    yg: function () {
      if (null != this.ro) {
        if (X.context.currentTime < this.ro) return this.ke.get(2).n.gain.value;
        this.ro = null;
      }
      return this.volume;
    },
    SB: function () {
      var a = this.Xx();
      null != a && a.hp(this.yg());
    },
    onended: function () {
      this.Zb && ((this.Zb = !1), this.B());
    },
    Xx: function () {
      if (!yc.Nx || null == this.ke) return null;
      try {
        var a = this.ke.get(2);
        if (null == a) {
          a = new xc();
          var b = this.ke.get(1);
          null == b ? this.ke.append(a) : b.append(a);
        }
        return a;
      } catch (c) {
        return (yc.Nx = !1), null;
      }
    },
    s: yc,
  });
  Ua.i = !0;
  Ua.prototype = {
    get: function (a) {
      for (var b = this; null != b; ) {
        if (b.type == a) return b;
        b = b.output;
      }
      return null;
    },
    B: function () {
      this.n = this.output = this.inputs = null;
    },
    connect: function (a) {
      this.output = a;
      a.inputs.push(this);
      this.n.disconnect();
      this.n.connect(a.n);
    },
    append: function (a) {
      fa.remove(this.output.inputs, this);
      a.connect(this.output);
      this.connect(a);
    },
    s: Ua,
  };
  kf.i = !0;
  kf.F = Ua;
  kf.prototype = C(Ua.prototype, { s: kf });
  jf.i = !0;
  jf.F = Ua;
  jf.prototype = C(Ua.prototype, {
    B: function () {
      this.n.onended = null;
      Ua.prototype.B.call(this);
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
    s: jf,
  });
  xc.i = !0;
  xc.F = Ua;
  xc.prototype = C(Ua.prototype, {
    sL: function () {
      return this.n.gain.value;
    },
    hp: function (a) {
      this.n.gain.value = a;
    },
    dk: function (a, b) {
      var c = X.context.currentTime,
        d = this.n;
      d.gain.cancelScheduledValues(0);
      d.gain.linearRampToValueAtTime(a, c + b);
    },
    s: xc,
  });
  Bg.i = !0;
  Bg.F = Ua;
  Bg.prototype = C(Ua.prototype, { s: Bg });
  Ag.i = !0;
  Ag.prototype = { s: Ag };
  q.i = !0;
  q.sa = function () {
    q.Qe = [-1, -1, -1, -1];
    for (var a = new qb(pb.decode(q.data, !0)); a.va < a.zk; ) {
      var b = a.AI(),
        c = a.ea(),
        d = a.ea(),
        e = a.ea();
      q.Qe.push(b);
      q.Qe.push(c);
      q.Qe.push(d);
      q.Qe.push(e);
    }
    q.ge = B.level;
    q.tf = B.Gi;
    q.ig = B.Af;
    q.Dm = B.nj;
    q.zc = B.Qc;
    q.Jk = 0;
    q.Li = B.sm;
    q.Kk = B.tp;
    G.tj() && (q.Li = 1);
  };
  q.vH = function () {
    q.Fm = !1;
    q.aq = !1;
    q.Jk = 0;
    q.$p = !1;
    q.Xp = !1;
    q.Yp = !1;
  };
  q.PH = function (a, b) {
    (q.$p = a) && !q.gd() && S.PK();
    a && 0 == q.Li && (q.Li = 1);
    q.Gm = b;
    q.Wp = Math.round((b * q.zn()) / 100);
    q.Gm += q.Wp;
    q.gd()
      ? q.se() > q.Dm && ((q.Fm = !0), (q.Dm = q.se()), q.save())
      : q.se() > q.Kk && (0 == q.Kk ? (q.Kk = q.se()) : (q.Fm = !0), q.save());
    q.save();
  };
  q.oy = function () {
    return q.Jk;
  };
  q.el = function (a) {
    return q.zc[a];
  };
  q.ew = function (a, b) {
    null == b && (b = 1);
    if (0 > q.zc[a]) return 0;
    q.zc[a] += b;
    q.save();
    return q.zc[a];
  };
  q.iL = function () {
    for (var a = 0, b = q.zc.length; a < b; ) {
      var c = a++;
      0 < q.zc[c] && (q.zc[c]--, (q.Jk |= 1 << c));
    }
    q.save();
  };
  q.vE = function (a) {
    if (q.ig < q.hj(a)) return !1;
    a = q.hj(a);
    q.ig -= a;
    B.Yh += a;
    q.save();
    return !0;
  };
  q.hj = function (a) {
    switch (a) {
      case 0:
        return 150;
      case 1:
        return 200;
      case 2:
        return 300;
      case 3:
        return 400;
    }
  };
  q.EF = function (a) {
    switch (a) {
      case 0:
        return 2;
      case 1:
        return 3;
      case 2:
        return 8;
      case 3:
        return 20;
    }
  };
  q.pr = function () {
    if (!q.gd()) return null;
    for (var a = 0, b = q.zc.length; a < b; ) {
      var c = a++;
      if (-1 == q.zc[c] && q.Or(c)) return c;
    }
    return null;
  };
  q.WK = function (a) {
    q.zc[a] = 0;
    q.save();
  };
  q.WF = function () {
    return Ga.count(q.zc, function (a) {
      return -1 < a;
    });
  };
  q.RD = function () {
    for (var a = 0, b = q.zc.length; a < b; ) if (0 > q.zc[a++]) return !1;
    return !0;
  };
  q.Or = function (a) {
    var b = q.Sd();
    switch (a) {
      case 0:
        var c = 2;
        break;
      case 1:
        c = 3;
        break;
      case 2:
        c = 8;
        break;
      case 3:
        c = 20;
    }
    return b >= c;
  };
  q.jG = function () {
    return q.tf;
  };
  q.uh = function () {
    return q.ig;
  };
  q.MD = function (a) {
    q.ig += a;
    q.save();
  };
  q.OD = function (a) {
    q.Em.AH = q.ge;
    var b = [],
      c = q.Fn(q.tf, q.ge),
      d = -1;
    q.tf += a;
    for (a = q.ey(); q.tf >= a; )
      (d = q.Fn(q.tf, q.ge)),
        b.push(c),
        b.push(Math.min(d, 1)),
        (c = 0),
        q.ge++,
        (q.aq = !0),
        200 < q.ge && (q.ge = 200),
        (a = q.ey());
    0 > d ? (b.push(c), (d = q.Fn(q.tf, q.ge)), b.push(d)) : (b.push(0), b.push(d - 1));
    q.Em.NL = q.ge;
    q.Em.xI = b;
    q.save();
  };
  q.Sd = function () {
    return q.ge;
  };
  q.KF = function () {
    return q.Em;
  };
  q.zn = function () {
    return q.Qe[4 * q.Sd() + 1];
  };
  q.Px = function () {
    return q.gd() ? q.Wp : 0;
  };
  q.ey = function () {
    var a;
    null == a && (a = -1);
    0 > a && (a = q.Sd());
    200 > a && ++a;
    return q.Qe[4 * a];
  };
  q.Fn = function (a, b) {
    null == b && (b = -1);
    0 > b && (b = q.Sd());
    return 200 == b ? 1 : P.map(a, q.Qe[4 * b], q.Qe[4 * (b + 1)], 0, 1);
  };
  q.NF = function () {
    var a = q.Qe[4 * q.Sd() + 2];
    return 0 == a ? null : a - 1;
  };
  q.OF = function () {
    return q.Qe[4 * q.Sd() + 3];
  };
  q.gd = function () {
    return 0 < q.Mn();
  };
  q.Mn = function () {
    return q.Li;
  };
  q.YE = function () {
    q.Yp = !0;
  };
  q.An = function () {
    if (!q.$p || !q.gd()) return 0;
    var a = 5 * Math.floor((10 * Math.pow(q.se(), 0.21)) / 5);
    0 == a && (a = 1);
    q.Yp && (a *= 2);
    return a;
  };
  q.XE = function () {
    q.Xp = !0;
  };
  q.sh = function () {
    if (!q.$p || !q.gd()) return 0;
    var a = 5 + 10 * Math.floor((0.38 * Math.pow(q.se(), 0.5)) / 10);
    0 == a && (a = 1);
    q.Xp && (a *= 2);
    return a;
  };
  q.Wy = function () {
    return q.gd() ? q.Fm : !1;
  };
  q.ZG = function () {
    return q.aq;
  };
  q.se = function () {
    return q.Gm;
  };
  q.VF = function () {
    return u.hy();
  };
  q.UF = function () {
    return u.Hn();
  };
  q.save = function () {
    B.level = q.ge;
    B.Gi = q.tf;
    B.Af = q.ig;
    B.nj = q.Dm;
    B.Qc = q.zc;
    B.sm = q.Li;
    B.tp = q.Kk;
    la.instance.Nc();
  };
  wa.i = !0;
  wa.ci = function () {
    wa.qe().vt(1);
  };
  wa.Uf = function () {
    wa.qe().vt(0);
  };
  wa.pA = function () {
    wa.qe().Zb(25) || wa.play(26, 25, !0);
  };
  wa.dI = function () {
    wa.qe().Zb(26) || wa.play(25, 26, !1);
  };
  wa.gK = function () {
    wa.qe().oF(26, 2);
  };
  wa.play = function (a, b) {
    var c = wa.qe();
    0 != c.Yy(b) && (c.stop(a), c.vJ(c.play(b, !0, !0), 1));
  };
  wa.qe = function () {
    return ka.instance();
  };
  B.i = !0;
  B.Aa = [qf];
  B.prototype = {
    upgrade: function () {
      switch (this.rev) {
        case 1:
          B.Ld = [];
          B.Qc.push(-1);
          break;
        case 2:
          B.de = 0;
          B.oj = 0;
          B.Yh = 0;
          B.Cg = new Date().getTime();
          B.pg = 0;
          B.Zh = 0;
          B.Xh = 0;
          break;
        case 3:
          var a = B.Ld.slice();
          B.Ld = [];
          for (var b = 0, c = u.keys(); b < c.length; ) {
            var d = c[b];
            ++b;
            B.Ld.push("" + d + ":" + (-1 < a.indexOf(d) ? 100 : 0));
          }
      }
      this.rev++;
    },
    stringify: function () {
      var a = {};
      a.version = this.rev;
      a.level = B.level;
      a.xp = B.Gi;
      a.coins = B.Af;
      a.highscore = B.nj;
      a.music = B.Vd;
      a.sound = B.be;
      a.boosters = B.Qc;
      a.tutorialProgress = B.sm;
      a.tutorialHighscore = B.tp;
      a.achievements = B.Ld;
      a.stats = {
        totalPlayTime: B.de,
        improvedScoreTimes: B.oj,
        numCoinsSpent: B.Yh,
        lastPlayTime: B.Cg,
        consecutiveDays: B.pg,
        numPaintBubbles: B.Zh,
        numBombs: B.Xh,
      };
      return JSON.stringify(a);
    },
    parse: function (a) {
      a = JSON.parse(a);
      Object.prototype.hasOwnProperty.call(a, "format")
        ? (this.rev = U.Z(a, "format"))
        : (this.rev = U.Z(a, "version"));
      B.hH = this.rev;
      B.level = U.Z(a, "level");
      B.Gi = U.Z(a, "xp");
      B.Af = U.Z(a, "coins");
      B.nj = U.Z(a, "highscore");
      B.Qc = U.Z(a, "boosters");
      B.Vd = U.Z(a, "music");
      B.be = U.Z(a, "sound");
      B.sm = U.Z(a, "tutorialProgress");
      B.tp = U.Z(a, "tutorialHighscore");
      B.Ld = U.Z(a, "achievements");
      a = U.Z(a, "stats");
      null != a &&
        ((B.de = U.Z(a, "totalPlayTime")),
        (B.oj = U.Z(a, "improvedScoreTimes")),
        (B.Yh = U.Z(a, "numCoinsSpent")),
        (B.Cg = U.Z(a, "lastPlayTime")),
        (B.pg = U.Z(a, "consecutiveDays")),
        (B.Zh = U.Z(a, "numPaintBubbles")),
        (B.Xh = U.Z(a, "numBombs")));
    },
    reset: function () {
      B.level = 1;
      B.Gi = 0;
      B.Af = 3e3;
      B.nj = 0;
      B.Vd = !0;
      B.be = !0;
      B.Qc = [-1, -1, -1, -1];
      B.sm = 0;
      B.tp = 0;
      B.Ld = [];
      for (var a = 0, b = u.keys(); a < b.length; ) B.Ld.push("" + b[a++] + ":0");
      B.de = 0;
      B.oj = 0;
      B.Yh = 0;
      B.Cg = new Date().getTime();
      B.pg = 0;
      B.Zh = 0;
      B.Xh = 0;
      this.rev = 4;
    },
    s: B,
  };
  z.i = !0;
  z.ci = function () {
    z.qe().wt(1);
  };
  z.Uf = function () {
    z.qe().wt(0);
  };
  z.play = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = !1);
    null == b && (b = !1);
    z.qe().play(a, b, c, d);
  };
  z.stop = function (a) {
    z.qe().stop(a);
  };
  z.qe = function () {
    return ka.instance();
  };
  ea.i = !0;
  hf.i = !0;
  hf.rc = !0;
  hf.prototype = { s: hf };
  gf.i = !0;
  gf.F = Pa;
  gf.prototype = C(Pa.prototype, {
    B: function () {
      this.Xm();
      this.viewport.R();
      for (var a = this.Xb.Wg(), b = 0, c = a.length; b < c; ) a[b++].B();
      this.grid.R();
      this.hc.R();
      this.ek.R();
      this.ns.R();
      this.Zd.R();
      this.Od.R();
      for (a = this.zh.iterator(); a.Ca(); ) a.next().R();
      this.zh.R();
      this.Tt.R();
      this.St.R();
      this.Mj =
        this.ap =
        this.St =
        this.Tt =
        this.xl =
        this.ta =
        this.yy =
        this.zh =
        this.Ea =
        this.Od =
        this.Ge =
        this.li =
        this.Zd =
        this.proxy =
        this.ns =
        this.ek =
        this.hc =
        this.grid =
        this.Xb =
        this.viewport =
          null;
    },
    update: function (a) {
      this.time += a;
      var b = this.ta.origin.y;
      this.sq = b - this.tq;
      this.tq = b;
      this.$K(a);
      var c = this.Xb;
      a = c.m;
      b = 0;
      for (c = c.o; b < c; ) {
        var d = a[b++];
        d.f.dn = !this.viewport.Pr(d.K, d.la);
      }
      0 <= ea.Tm && ad.mK(this);
      this.an && ((this.an = !1), this.Mj.update());
      this.trim();
      this.yp();
    },
    QA: function (a) {
      this.viewport.Me(a);
    },
    fB: function (a) {
      this.viewport.La(a);
      this.Zd.wk();
    },
    fp: function (a, b) {
      this.viewport.fp(a, b);
      this.Zd.wk();
    },
    tJ: function (a) {
      var b = this;
      if (null != this.grid) {
        for (var c = 0, d = this.Xb.Wg(); c < d.length; ) d[c++].B();
        this.Xb.R();
        this.grid.R();
        this.ns.R();
      }
      c = a.grid;
      this.Xb = new Z(c.ca * c.Ha);
      this.Xb.Hb = !0;
      this.li = a.li;
      this.Ge = a.Ge;
      this.cols = a.grid.ca;
      this.grid = new xg(this);
      this.viewport.iB();
      this.hc = new ue();
      this.hc.kq = function (e, f) {
        if (b.zh.af()) return new wd(e, f);
        f = b.zh;
        f = f.m[--f.o];
        f.node = e;
        return f;
      };
      this.hc.Wl = function (e) {
        1024 > b.zh.o && b.zh.Ma(e);
      };
      this.Jj = 0;
      this.aI(a.grid);
      this.proxy = new W();
      this.yp();
      this.ta.origin.x = this.rr() / 2;
      this.ta.origin.y = 0;
      this.ta.direction.x = 0;
      this.ta.direction.y = -1;
      this.Zd.wk();
    },
    Zy: function (a) {
      null == a && (a = 0);
      return this.viewport.yk(this.ty()) - a >= this.viewport.ja.l;
    },
    Gn: function (a) {
      null == a && (a = 0);
      if (0 == this.Ea.o) return null;
      var b = this.Ea;
      return b.m[(a + b.Sa) % b.S];
    },
    kz: function (a) {
      var b = new yb(this);
      b.code = a;
      b.f.dh = !0;
      b.f.loaded = !0;
      b.f.connected = !1;
      a = b.K;
      var c = this.ta.origin;
      a.x = c.x;
      a.y = c.y;
      this.Xb.add(b);
      b.uf(new Kb());
      var d = this.Ea.o;
      this.Ea.enqueue(b);
      this.notify(function (e) {
        e.lE(b, d);
      });
      return b;
    },
    jx: function (a) {
      a.f.connected &&
        ((a.f.connected = !1), this.Jj--, null != a.Db && this.hc.removeNode(a.Db), this.grid.CA(a), (this.an = !0));
    },
    Tk: function (a, b, c) {
      c.x = 1;
      c.x += 2 * a;
      (b & 1) == this.Ge && (c.x += 1);
      c.y = 1 + 1.7320508075 * b;
      c.y = -c.y;
    },
    kI: function (a, b) {
      b.y = -((a.y / 1.7320508075) | 0) - (0 < a.y ? 1 : 0);
      if ((b.y & 1) == this.Ge) {
        if (1 > a.x) return !1;
        b.x = ((a.x - 1) / 2) | 0;
      } else {
        if (0 > a.x) return !1;
        b.x = (a.x / 2) | 0;
      }
      return b.x >= this.cols ? !1 : !0;
    },
    wE: function () {
      if (0 == this.Ea.o || (0 > ea.Tm && !this.Od.af()) || this.time - this.vK < ea.Tm) return !1;
      if (0 <= ea.Tm) {
        var a = !1,
          b = this.Ea,
          c = b.m[b.Sa];
        b = this.Od;
        var d = b.m,
          e = 0;
        for (b = b.o; e < b; ) d[e++].UG(c) && (a = !0);
        if (a) return !1;
      }
      return !0;
    },
    LJ: function () {
      if (0 == this.Ea.o) return !1;
      var a = this.Ea;
      a = a.m[a.Sa];
      this.TE();
      a.f.dh = !0;
      this.tq = this.ta.origin.y;
      this.sq = 0;
      a.uf(new Yc());
      this.Od.add(a);
      return !0;
    },
    TE: function () {
      if (0 == this.Ea.o) return !1;
      var a = this.Ea.bj();
      a.f.dh = !1;
      a.f.loaded = !1;
      a.mf(null, Kb.TYPE);
      return !0;
    },
    RJ: function () {
      this.Br.ti = !0;
    },
    $K: function (a) {
      var b = 8 * this.Xb.o,
        c = b * Fa.Am,
        d = this.Tt,
        e = this.St;
      d.o < c && (d.sa(c, null), e.sa(c, null));
      c = Fa.counter;
      for (var f = 0, g = Fa.Am; f < g; ) c[f++] = 0;
      var h = this.Xb;
      var l = h.m;
      f = 0;
      for (g = h.o; f < g; ) {
        var k = l[f++];
        k.nh = a;
        h = k.actions;
        for (var m = h.m, t = 0, n = h.o; t < n; ) {
          var w = m[t++],
            v = (h = w.$a),
            F = c[v];
          c[v] = F + 1;
          h = h * b + F;
          e.m[h] = w;
          d.m[h] = k;
        }
      }
      for (h = 0; h < Fa.Am; ) {
        k = c[h];
        f = b * h;
        for (g = f + k; f < g; )
          (k = d.m[f]), null != k.g && ((w = e.m[f]), (w.time += a), w.enabled && w.update(k)), ++f;
        ++h;
      }
    },
    FH: function (a, b) {
      this.notify(function (c) {
        c.hE(a, b);
      });
      ea.zy && this.yy.apply(a, b);
    },
    HH: function (a, b) {
      null != this.xl && this.xl.f.connected && !this.xl.f.Jd && this.xl.ui();
      this.xl = a;
      this.Od.remove(a);
      this.Jj++;
      a.f.dh = !1;
      if (null == b) {
        var c = a.ha;
        c.x = 0;
        c.y = 0;
        c = a.force;
        c.x = 0;
        c.y = 0;
      }
      c = a.K;
      var d = new E();
      d.x = c.x;
      d.y = c.y;
      this.HE(a, b);
      a.Vg = ea.Ve.Vg;
      a.Ob = ea.Ve.Ob;
      a.uf(new nb());
      c = a.force;
      c.x = 0;
      c.y = 0;
      c = a.ha;
      var e = new E();
      e.x = c.x;
      e.y = c.y;
      jd.normalize(e);
      c = a.ha;
      c.x = 0;
      c.y = 0;
      ea.Ve.enabled && this.Br.oI(a);
      this.notify(function (f) {
        f.jE(a, b);
      });
      ea.Ve.enabled && this.Br.apply(a, d, e);
      this.yp();
    },
    GH: function (a, b) {
      var c = null;
      0 == b ? (c = ea.rE) : 2 == b && (c = ea.qE);
      if (null == c || "destroy" == c) this.Od.remove(a), a.B();
      else {
        a.ha.x = 0;
        a.ha.y = 0;
        a.force.x = 0;
        a.force.y = 0;
        c = a.K;
        var d = this.ta.origin;
        c.x = d.x;
        c.y = d.y;
        a.uf(new Kb());
        c = this.Ea.Wg();
        this.Ea.clear();
        this.Ea.enqueue(a);
        for (d = 0; d < c.length; ) this.Ea.enqueue(c[d++]);
      }
      this.notify(function (e) {
        e.iE(a, b);
      });
    },
    EH: function (a, b) {
      this.notify(function (c) {
        c.gE(a, b);
      });
    },
    ty: function () {
      this.Tk(0, this.gf, this.ap);
      return this.ap.y - 1;
    },
    rr: function () {
      return 2 * this.cols + 1 * this.li;
    },
    jJ: function (a, b) {
      this.ta.origin.x = a;
      this.ta.origin.y = b;
      this.Zd.wk();
    },
    IB: function (a, b) {
      this.jJ(this.ta.origin.x + a, this.ta.origin.y + b);
    },
    iG: function (a) {
      var b = 0,
        c = this.Xb,
        d = c.m,
        e = 0;
      for (c = c.o; e < c; ) {
        var f = d[e++];
        this.viewport.Pr(f.K, f.la) && (a[b++] = f);
      }
      return b;
    },
    yp: function () {
      var a = this.proxy;
      a.j = a.l = Infinity;
      a.u = a.A = -Infinity;
      if (0 == this.Jj) (a = this.proxy), (a.j = 0), (a.l = 0), (a.u = 0), (a.A = 0);
      else {
        a = -Infinity;
        var b = Infinity,
          c = -Infinity,
          d = Infinity,
          e = this.Xb,
          f = e.m,
          g = 0;
        for (e = e.o; g < e; ) {
          var h = f[g++];
          h.f.connected &&
            ((h = h.K), h.x < b && (b = h.x), h.x > a && (a = h.x), h.y < d && (d = h.y), h.y > c && (c = h.y));
        }
        this.proxy.j = b;
        this.proxy.l = d;
        this.proxy.u = a;
        this.proxy.A = c;
        La.offset(this.proxy, 1, 1);
      }
    },
    nr: function () {
      for (var a = this.Vh, b; a <= this.gf; ) {
        for (var c = 0, d = this.cols; c < d; ) if (((b = this.grid.get(c++, a)), null != b && !b.f.Jd)) return b;
        ++a;
      }
      return null;
    },
    trim: function () {
      for (var a, b = this.Vh; b <= this.gf; ) {
        for (var c = 0, d = this.cols; c < d; )
          if (((a = this.grid.get(c++, b)), null != a && !a.f.Jd)) {
            this.Vh = a.nc;
            return;
          }
        ++b;
      }
    },
    pI: function (a) {
      var b = a.length;
      b > this.cols && (b = this.cols);
      this.gf++;
      b = [];
      for (var c = 0, d = a.length; c < d; ) {
        var e = c++,
          f = a[e];
        if (0 != f) {
          var g = new yb(this);
          g.code = f;
          b.push(g);
          g.nc = this.gf;
          g.Sb = e;
          g.ui();
          this.grid.bq(g);
          this.Xb.add(g);
          g.Db = new Pc(g);
          this.hc.cq(g.Db);
          this.Sw(g);
          this.$A(g);
          this.Jj++;
        }
      }
      this.Mj.update();
      for (c = 0; c < b.length; )
        this.notify(
          (function (h) {
            return function (l) {
              l.Aw(h[0]);
            };
          })([b[c++]])
        );
      this.Zd.wk();
      this.yp();
      return b;
    },
    EE: function (a) {
      var b = new td();
      b.K.x = 0;
      b.K.y = 0;
      b.la = 0;
      for (var c = new td(), d = 0, e = a.length; d < e; ) {
        var f = a[d++];
        c.K.x = f.K.x;
        c.K.y = f.K.y;
        c.la = f.la;
        Qh.PD(b, c);
      }
      return b;
    },
    aI: function (a) {
      var b = this;
      this.Vh = 0;
      this.gf = a.Ha - 1;
      0 == (a.Ha & 1) && (this.Ge = (this.Ge + 1) & 1);
      a.forEach(function (f, g, h) {
        if (0 == f || (0 == b.li && (h & 1) == b.Ge && g > a.ca - 1)) return f;
        b.Jj++;
        var l = new yb(b);
        l.code = f;
        l.Sb = g;
        l.nc = b.gf - h;
        l.ui();
        b.grid.bq(l);
        b.Xb.add(l);
        l.Db = new Pc(l);
        b.hc.cq(l.Db);
        b.$A(l);
        return f;
      });
      var c = this.Xb,
        d = c.m,
        e = 0;
      for (c = c.o; e < c; ) b.Sw(d[e++]);
      this.Mj.update();
      for (d = this.grid.iterator(); d.Ca(); )
        this.notify(
          (function (f) {
            return function (g) {
              g.Aw(f[0]);
            };
          })([d.next()])
        );
    },
    Sw: function (a) {
      if (null != a && 0 != a.code) {
        a.f.connected = !0;
        var b = this.Eq(a);
        for (a = a.Db; b.cursor < b.size; ) {
          var c = b.list[b.cursor++];
          null != c && 0 != c.code && ((c = c.Db), a.YG(c) || this.hc.gw(a, c));
        }
      }
    },
    $A: function (a) {
      a.uf(new nb());
      a.Vg = ea.Ve.Vg;
      a.Ob = ea.Ve.Ob;
    },
    xt: function (a) {
      var b = this.ta,
        c = b.direction.x,
        d = b.direction.y,
        e = this.ap;
      e.x = a.x;
      e.y = a.y;
      this.QA(e);
      b.direction.x = e.x - this.ta.origin.x;
      b.direction.y = e.y - this.ta.origin.y;
      0.25 > b.normalize()
        ? ((b.direction.x = c), (b.direction.y = d))
        : ((a = ea.sH),
          (c = 57.29577951308232 * Math.atan2(b.direction.y, b.direction.x)),
          (d = 1),
          ea.VJ
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
    Eq: function (a) {
      var b = new wg(this.grid, this.cols, this.Ge);
      null != a && b.sa(a.Sb, a.nc);
      return b;
    },
    HE: function (a, b) {
      a.f.connected = !0;
      if (null == b) {
        b = new zd();
        this.kI(a.K, b);
        a.Sb = b.x;
        a.nc = b.y;
        var c = new E();
        this.Tk(b.x, b.y, c);
        if (null != this.grid.get(a.Sb, a.nc))
          if (a.K.x < c.x) {
            if (0 == a.Sb) throw 8;
            a.Sb--;
          } else if (a.K.x > c.x) {
            if (a.Sb == this.cols - 1) throw 9;
            a.Sb++;
          }
        this.Tk(a.Sb, a.nc, a.K);
      } else {
        b.ui();
        c = b.Db.eb;
        for (var d; null != c; ) (d = c.node.mb), d.ui(), (c = c.next);
        b = this.tF(new zd(b.Sb, b.nc), a.K);
        a.Sb = b.x;
        a.nc = b.y;
        a.ui();
        b.y < this.Vh && (this.Vh = b.y);
      }
      this.grid.bq(a);
      a.Db = new Pc(a);
      this.hc.cq(a.Db);
      for (b = this.Eq(a); b.cursor < b.size; ) this.hc.gw(a.Db, b.list[b.cursor++].Db);
      this.an = !0;
    },
    tF: function (a, b) {
      var c = 20,
        d = new zd(-1, -1),
        e = new E();
      e.x = 0;
      e.y = 0;
      var f = this.Eq();
      for (f.sa(a.x, a.y, !0); f.cursor < f.size; ) {
        var g = f.list[f.cursor++];
        if (0 == g.code) {
          a = g.Sb;
          g = g.nc;
          this.Tk(a, g, e);
          var h = e.x - b.x,
            l = e.y - b.y;
          h = h * h + l * l;
          h < c && ((c = h), (d.x = a), (d.y = g));
        }
      }
      return d;
    },
    s: gf,
  });
  yb.i = !0;
  yb.Aa = [Bc];
  yb.prototype = {
    B: function () {
      var a = this;
      if (!this.f.Ye) {
        yb.count--;
        if (this.f.connected) {
          for (var b = this.Db.eb; null != b; ) this.g.Mj.LB(b.node.mb), (b = b.next);
          this.g.jx(this);
        }
        this.g.grid.CA(this);
        this.g.Xb.remove(this);
        this.actions.R();
        null != this.client && this.client.lq(this);
        this.g.notify(function (c) {
          c.lq(a);
        });
        this.f.Ye = !0;
        this.actions = this.xE = this.force = this.ha = this.K = this.Db = this.client = this.g = null;
      }
    },
    uf: function (a) {
      a.sa(this);
      a.enabled = !0;
      this.actions.Ma(a);
    },
    mf: function (a, b) {
      null == b && (b = -1);
      -1 < b && (a = this.AF(b));
      if (null == a) return !1;
      a.enabled = !1;
      return this.actions.remove(a);
    },
    AF: function (a) {
      for (var b = this.actions.m, c = 0, d = this.actions.o; c < d; ) {
        var e = c++;
        if (b[e].type == a) return b[e];
      }
      return null;
    },
    dF: function (a) {
      for (var b = this.actions.m, c = 0, d = this.actions.o; c < d; ) {
        var e = c++;
        b[e].type == a && (b[e].enabled = !0);
      }
    },
    Rx: function (a) {
      this.g.Tk(this.Sb, this.nc, a);
    },
    ui: function () {
      this.Rx(this.K);
    },
    Si: function (a) {
      this.code = a;
      null != this.client && this.client.kE(this, a, this.code);
    },
    disconnect: function () {
      this.g.jx(this);
    },
    ny: function (a) {
      this.g.viewport.xk(this.K, a);
    },
    UG: function (a) {
      return Zg.kK(this.K, this.la, a.K, a.la);
    },
    SA: function (a, b, c) {
      null == c && (c = -1);
      null == b && (b = -1);
      if (null == a || a.f.Ye || this.f.Ye) return !1;
      b = -1 == b ? this.Sy : b;
      c = -1 == c ? a.Sy : c;
      var d = this.K,
        e = a.K,
        f = d.x - e.x,
        g = d.y - e.y,
        h = f * f + g * g;
      a = this.la + a.la;
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
    s: yb,
  };
  zg.i = !0;
  zg.prototype = { s: zg };
  ff.i = !0;
  ff.rc = !0;
  ff.prototype = { s: ff };
  lg.i = !0;
  lg.prototype = {
    test: function () {
      var a = this.Rn.x - this.Qn.x,
        b = this.Rn.y - this.Qn.y,
        c = this.Er.x - this.Tn.x,
        d = this.Er.y - this.Tn.y,
        e = this.Gr + this.Hr,
        f = a * a + b * b - e * e;
      if (0 > f) return (this.Og = 0), !0;
      e = c * c + d * d;
      if (1e-6 > e) return !1;
      a = c * a + d * b;
      if (0 <= a) return !1;
      b = a * a - e * f;
      if (0 > b) return !1;
      this.Og = (-a - Math.sqrt(b)) / e;
      return !0;
    },
    s: lg,
  };
  ad.i = !0;
  ad.mK = function (a) {
    ad.Kc.o = 0;
    var b = a.Xb;
    a = b.m;
    var c = 0;
    for (b = b.o; c < b; ) {
      var d = a[c++];
      !d.f.dh || d.f.loaded || d.f.Jd || ad.Kc.Ma(d);
    }
    ad.Kc.fE(function () {});
  };
  yg.i = !0;
  yg.prototype = {
    update: function () {
      for (var a = this.g.Xb.iterator(); a.Ca(); ) {
        var b = a.next();
        b.f.connected && this.LB(b);
      }
    },
    LB: function (a) {
      a.f.Ed = !1;
      if (null != a.Db) {
        for (var b = 0, c = a.Db.eb; null != c; ) ++b, (c = c.next);
        if (6 == b) a.f.Ed = !0;
        else {
          c = a.Sb;
          var d = a.nc,
            e = d == this.g.gf;
          if (this.jF)
            if (e && 4 == b) a.f.Ed = !0;
            else {
              var f = 1 == this.g.Ge ? 0 : 1,
                g = this.g.cols - 1;
              if (0 == this.g.li) {
                if (0 == c || c == g - ((d + 1) & 1))
                  e
                    ? b == 2 + f && (a.f.Ed = !0)
                    : 1 == (d & 1)
                    ? b == 5 - 2 * f && (a.f.Ed = !0)
                    : b == 3 + 2 * f && (a.f.Ed = !0);
              } else
                0 == c
                  ? e
                    ? b == 2 + f && (a.f.Ed = !0)
                    : 1 == (d & 1)
                    ? b == 5 - 2 * f && (a.f.Ed = !0)
                    : b == 3 + 2 * f && (a.f.Ed = !0)
                  : c == g &&
                    (e
                      ? b == 3 - f && (a.f.Ed = !0)
                      : 1 == (d & 1)
                      ? b == 3 + 2 * f && (a.f.Ed = !0)
                      : b == 5 - 2 * f && (a.f.Ed = !0));
            }
        }
      }
    },
    s: yg,
  };
  xg.i = !0;
  xg.prototype = {
    R: function () {
      for (var a = this.map.keys(); a.Ca(); ) {
        var b = a.next();
        this.map.remove(b);
      }
      this.map = null;
    },
    ug: function (a, b) {
      return -1 != a ? this.map.P.hasOwnProperty(((b + 16777215) << 6) | a) : !1;
    },
    get: function (a, b) {
      return this.map.P[((b + 16777215) << 6) | a];
    },
    set: function (a, b, c) {
      this.map.P[((b + 16777215) << 6) | a] = c;
    },
    bq: function (a) {
      this.set(a.Sb, a.nc, a);
    },
    CA: function (a) {
      this.ug(a.Sb, a.nc) && this.get(a.Sb, a.nc) == a && this.map.remove(((a.nc + 16777215) << 6) | a.Sb);
    },
    iterator: function () {
      for (var a = [], b = this.map.keys(); b.Ca(); ) {
        var c = b.next();
        a.push(this.map.P[c]);
      }
      return new ud(a);
    },
    s: xg,
  };
  wg.i = !0;
  wg.prototype = {
    Ca: function () {
      return this.cursor < this.size;
    },
    next: function () {
      return this.list[this.cursor++];
    },
    sa: function (a, b, c) {
      null == c && (c = !1);
      this.cursor = this.size = 0;
      var d = this.cols,
        e = (b & 1) == this.YI ? 1 : 0,
        f = a + 1;
      if (0 <= f && f < d) {
        var g = this.grid.get(f, b);
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Zi(f, b));
      }
      f = a + e;
      var h = b + 1;
      0 <= f &&
        f < d &&
        ((g = this.grid.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Zi(f, h)));
      f = a - 1 + e;
      h = b + 1;
      0 <= f &&
        f < d &&
        ((g = this.grid.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Zi(f, h)));
      f = a - 1;
      0 <= f &&
        f < d &&
        ((g = this.grid.get(f, b)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Zi(f, b)));
      f = a - 1 + e;
      h = b - 1;
      0 <= f &&
        f < d &&
        ((g = this.grid.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Zi(f, h)));
      f = a + e;
      h = b - 1;
      0 <= f &&
        f < d &&
        ((g = this.grid.get(f, h)),
        null != g ? (this.list[this.size++] = g) : c && (this.list[this.size++] = this.Zi(f, h)));
      return this;
    },
    Zi: function (a, b) {
      var c = Object.create(yb.prototype);
      c.code = 0;
      c.Sb = a;
      c.nc = b;
      return c;
    },
    s: wg,
  };
  Zg.i = !0;
  Zg.kK = function (a, b, c, d) {
    var e = c.x - a.x;
    a = c.y - a.y;
    b += d;
    return e * e + a * a < b * b;
  };
  sg.i = !0;
  sg.prototype = {
    rF: function (a, b, c, d, e, f, g, h) {
      h = f * a + g * b - h;
      if (P.abs(h) <= c) return (this.Ro.x = a - f * h), (this.Ro.y = b - g * h), (this.t = 0), !0;
      var l = f * d + g * e;
      if (0 <= l * h) return (this.t = -1), !1;
      c = 0 < h ? c : -c;
      this.t = (c - h) / l;
      this.Ro.x = a + this.t * d - c * f;
      this.Ro.y = b + this.t * e - c * g;
      return !0;
    },
    s: sg,
  };
  og.i = !0;
  og.prototype = {
    test: function () {
      var a = 0,
        b = this.Sn,
        c = this.Ly,
        d = this.Dh,
        e = this.Ch;
      if (1e-6 > Math.abs(e.x)) {
        if (d.x < c.j || d.x > c.u) return !1;
      } else {
        var f = (c.j - d.x) / e.x;
        var g = (c.u - d.x) / e.x;
        if (f > g) {
          var h = f;
          f = g;
          g = h;
        }
        0 < f && (a = f);
        g < b && (b = g);
        if (a > b) return !1;
      }
      if (1e-6 > Math.abs(e.y)) {
        if (d.y < c.l || d.y > c.A) return !1;
      } else if (
        ((f = (c.l - d.y) / e.y),
        (g = (c.A - d.y) / e.y),
        f > g && ((h = f), (f = g), (g = h)),
        f > a && (a = f),
        g < b && (b = g),
        a > b)
      )
        return !1;
      this.Og = a;
      this.ei.x = d.x + e.x * a;
      this.ei.y = d.y + e.y * a;
      return !0;
    },
    s: og,
  };
  mg.i = !0;
  mg.prototype = {
    test: function () {
      var a = this.Dh.x,
        b = this.Dh.y,
        c = this.Ch.x,
        d = this.Ch.y,
        e = a - this.Cr.x,
        f = b - this.Cr.y,
        g = e * c + f * d;
      e = e * e + f * f - this.Dr * this.Dr;
      if (0 < e && 0 < g) return !1;
      e = g * g - e;
      if (0 > e) return !1;
      g = -g - Math.sqrt(e);
      if (g > this.Sn) return !1;
      0 > g
        ? ((this.ei.x = a), (this.ei.y = b), (this.Og = 0))
        : ((this.ei.x = a + g * c), (this.ei.y = b + g * d), (this.Og = g));
      return !0;
    },
    s: mg,
  };
  vg.i = !0;
  vg.Cx = function (a, b, c, d, e, f, g) {
    e = (f - (e * a + 0 * b)) / (e * c + 0 * d);
    0 <= e && 3.4e38 > e && ((g.x = a + e * c), (g.y = b + e * d));
  };
  ug.i = !0;
  ug.prototype = {
    FE: function () {
      function a(k, m) {
        var t = e + k,
          n = f + m;
        0 <= t && t < b && 0 <= n && n < c && ((h = (h |= (k + 1) << l) | ((m + 1) << (l + 2))), (l += 4));
      }
      var b = this.grid.ca,
        c = this.grid.Ha,
        d = new Fb(b, c),
        e = 0,
        f = 0;
      for (f = 0; f < c; ) {
        var g = (f & 1) == this.Ge ? 1 : 0;
        for (e = 0; e < b; ) {
          var h = 0;
          var l = 3;
          a(1, 0);
          a(g, 1);
          a(-1 + g, 1);
          a(-1, 0);
          a(-1 + g, -1);
          a(g, -1);
          h |= (l - 3) >> 2;
          d.m[f * d.ca + e] = h;
          e += 1;
        }
        f += 1;
      }
      return d;
    },
    s: ug,
  };
  tg.i = !0;
  tg.prototype = {
    R: function () {
      this.xy.R();
      this.xy = null;
      this.wy.R();
      this.g = this.wy = null;
      this.set.R();
      this.set = null;
    },
    s: tg,
  };
  ef.i = !0;
  ef.prototype = {
    R: function () {
      this.bk.R();
      this.bk = null;
    },
    s: ef,
  };
  rg.i = !0;
  rg.prototype = {
    R: function () {
      this.Zc.R();
      this.g = this.Ry = this.ii = this.Zc = this.wq = null;
    },
    CE: function (a, b, c) {
      var d = this.Ry;
      this.gh = -1;
      this.wq = null;
      for (var e = 0, f = this.Zc.iterator(); f.Cd < f.Qf; ) {
        var g = f.m[f.Cd++];
        0 != (this.KD & (1 << e)) &&
          d.rF(a.K.x, a.K.y, a.la, b.x, b.y, g.sc.x, g.sc.y, g.Df) &&
          0 < d.t &&
          d.t < c &&
          ((c = d.t), (this.wq = g), (this.gh = e));
        ++e;
      }
      return c;
    },
    wk: function () {
      for (var a = 0; 4 > a; ) {
        var b = a++;
        this.ii.m[b](this.Zc.m[b]);
      }
    },
    s: rg,
  };
  Yg.i = !0;
  Yg.jK = function (a, b) {
    return a.x > b.j && a.x < b.u && a.y > b.l ? a.y < b.A : !1;
  };
  qg.i = !0;
  qg.xi = function (a, b, c, d, e) {
    return 0 > a * c + b * d - e;
  };
  pg.i = !0;
  pg.prototype = {
    R: function () {
      this.wn.R();
      this.Vi.R();
      this.Vi = this.Ts = this.So = this.bl = this.wn = null;
    },
    reset: function () {
      this.wn.o = 0;
      this.Vi.o = 0;
    },
    s: pg,
  };
  ng.i = !0;
  ng.prototype = {
    R: function () {
      this.result.R();
      this.test.R();
      this.g = this.rl = this.Wo = this.rp = this.Ut = this.test = this.result = null;
    },
    rA: function (a, b, c) {
      this.result.So = null;
      this.result.Ts = null;
      this.result.bl = null;
      this.result.planeIndex = -1;
      var d = this.rp,
        e = d.origin,
        f = a.origin;
      e.x = f.x;
      e.y = f.y;
      e = d.direction;
      f = a.direction;
      e.x = f.x;
      e.y = f.y;
      a = this.yK;
      a.K.x = d.origin.x;
      a.K.y = d.origin.y;
      a.la = b;
      this.test.pj = d;
      this.test.Fr = b;
      var g = this.result.wn;
      g.o = 0;
      g.Ma(d.origin.x);
      g.Ma(d.origin.y);
      var h = this.g.Zd,
        l = 0;
      if (0 < (this.ic & 8)) {
        var k = this.g.Xb;
        e = k.m;
        f = 0;
        for (k = k.o; f < k; ) e[f++].f.xr = !1;
      }
      e = this.Wo;
      f = this.g.proxy;
      e.j = f.j;
      e.l = f.l;
      e.u = f.u;
      e.A = f.A;
      La.offset(this.Wo, b, b);
      for (b = 0; b++ < c + 1; ) {
        e = this.Ut;
        e.x = d.direction.x;
        e.y = d.direction.y;
        f = h.CE(a, e, Infinity);
        k = Infinity;
        var m = this.rl.Dh;
        m.x = d.origin.x;
        m.y = d.origin.y;
        m = this.rl.Ch;
        m.x = e.x;
        m.y = e.y;
        this.rl.Ly = this.Wo;
        if (
          this.rl.test() &&
          ((this.result.Vi.o = 0),
          this.test.reset(),
          (this.test.Ir = 0 < (this.ic & 8) && 1 == b),
          (this.test.My = 0 < (this.ic & 16)),
          this.test.Ic(),
          (k = this.test.Lo),
          this.test.Ir)
        )
          for (m = this.test.Uj.iterator(); m.Ca(); ) {
            var t = m.next();
            this.result.Vi.Ma(t);
          }
        l += Math.min(f, k);
        if (f < k) {
          this.result.planeIndex = h.gh;
          d.origin.x += d.direction.x * f;
          d.origin.y += d.direction.y * f;
          g.Ma(d.origin.x);
          g.Ma(d.origin.y);
          if (2 == h.gh && 0 == (this.ic & 2)) break;
          if (0 == h.gh && 0 == (this.ic & 1)) break;
          a.K = d.origin;
          jd.ft(e, h.wq.sc);
          d.direction.x = e.x;
          d.direction.y = e.y;
        } else
          return (
            (this.result.So = this.test.No),
            (this.result.Ts = this.test.Mo),
            (this.result.bl = this.test.di),
            (d.origin.x += e.x * k),
            (d.origin.y += e.y * k),
            g.Ma(d.origin.x),
            g.Ma(d.origin.y),
            k
          );
      }
      return l;
    },
    s: ng,
  };
  kg.i = !0;
  kg.prototype = {
    R: function () {
      this.Uj.R();
      this.wB = this.xB = this.kf = this.g = this.Uj = this.Mo = this.No = this.di = this.pj = null;
    },
    reset: function () {},
    Ic: function () {
      this.Lo = this.fA = Infinity;
      this.di = null;
      this.Uj.o = 0;
      var a = this.pj.origin.x,
        b = this.pj.origin.y,
        c = this.pj.direction.x,
        d = this.pj.direction.y,
        e = this.wB;
      e.Qn.x = a;
      e.Qn.y = b;
      e.Tn.x = c;
      e.Tn.y = d;
      var f = e.Er;
      f.x = 0;
      f.y = 0;
      var g = this.xB;
      g.Dh.x = a;
      g.Dh.y = b;
      g.Ch.x = c;
      g.Ch.y = d;
      g.Sn = 1;
      for (var h = this.g.iG(this.kf), l = 0; l < h; ) {
        var k = this.kf[l++];
        if (null != k && (this.My || !k.f.Ed) && k.f.connected && k.f.Zm && !k.f.Jd) {
          if (this.Ir && !k.f.xr) {
            f = g.Cr;
            var m = k.K;
            f.x = m.x;
            f.y = m.y;
            g.Dr = 2 * k.la;
            g.test() && ((k.f.xr = !0), this.Uj.Ma(k));
          }
          e.Gr = this.Fr * ea.nE;
          f = e.Rn;
          m = k.K;
          f.x = m.x;
          f.y = m.y;
          e.Hr = k.la;
          e.test() &&
            ((f = e.Og),
            f >= this.fA || ((this.fA = f), (this.di = k), (this.No.x = a + c * f), (this.No.y = b + d * f)));
        }
      }
      null != this.di &&
        ((f = e.Rn),
        (m = this.di.K),
        (f.x = m.x),
        (f.y = m.y),
        (e.Hr = this.di.la),
        (e.Gr = this.Fr),
        e.test(),
        (this.Lo = e.Og),
        (this.Mo.x = a + c * this.Lo),
        (this.Mo.y = b + d * this.Lo));
    },
    s: kg,
  };
  jg.i = !0;
  jg.prototype = {
    R: function () {
      this.g = this.rn = this.Pe = null;
    },
    na: function () {
      var a = this.ja,
        b = new W();
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      return b;
    },
    La: function (a) {
      var b = new W();
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      this.ja = b;
      this.MB();
      this.iB();
    },
    fp: function (a, b) {
      var c = this.rn;
      c.x = a;
      c.y = b;
      this.MB();
    },
    Oa: function () {
      return this.zoom;
    },
    iB: function (a) {
      null == a && (a = this.g.cols);
      var b = this.ja;
      return (this.zoom = (b.u - b.j) / (2 * (a + (1 == this.g.li ? 0.5 : 0))));
    },
    xk: function (a, b) {
      b.x = this.Pe.x + (a.x - this.g.ta.origin.x) * this.zoom;
      b.y = this.Pe.y + (a.y - this.g.ta.origin.y) * this.zoom;
    },
    Wt: function (a) {
      return this.Pe.x + (a - this.g.ta.origin.x) * this.zoom;
    },
    yk: function (a) {
      return this.Pe.y + (a - this.g.ta.origin.y) * this.zoom;
    },
    IK: function (a) {
      return (a - this.Pe.x) / this.zoom + this.g.ta.origin.x;
    },
    sp: function (a) {
      return (a - this.Pe.y) / this.zoom + this.g.ta.origin.y;
    },
    Me: function (a) {
      a.x = (a.x - this.Pe.x) / this.zoom + this.g.ta.origin.x;
      a.y = (a.y - this.Pe.y) / this.zoom + this.g.ta.origin.y;
    },
    lL: function (a) {
      this.xk(a, a);
      var b = this.ja;
      a.x = (a.x - this.ja.j) / (b.u - b.j);
      b = this.ja;
      a.y = (a.y - this.ja.l) / (b.A - b.l);
    },
    zH: function (a) {
      var b = this.ja;
      a.x = this.ja.j + a.x * (b.u - b.j);
      b = this.ja;
      a.y = this.ja.l + a.y * (b.A - b.l);
    },
    Pr: function (a, b) {
      var c = this.Wt(a.x);
      a = this.yk(a.y);
      b *= this.zoom;
      var d = this.ja;
      return 0 == (c + b < d.j || c - b > d.u || a + b < d.l || a - b > d.A);
    },
    MB: function () {
      var a = this.ja;
      this.Pe.x = this.ja.j + this.rn.x * (a.u - a.j);
      a = this.ja;
      this.Pe.y = this.ja.l + this.rn.y * (a.A - a.l);
    },
    s: jg,
  };
  ja.i = !0;
  ja.Jb = function () {
    return ++ja.X;
  };
  ja.prototype = {
    update: function () {},
    ef: function (a) {
      return Math.min(1, this.time / a);
    },
    sa: function () {},
    xg: function () {
      return Fa.BC;
    },
    s: ja,
  };
  Fa.i = !0;
  $c.i = !0;
  $c.F = ja;
  $c.prototype = C(ja.prototype, {
    xg: function () {
      return Fa.fv;
    },
    sa: function (a) {
      ja.prototype.sa.call(this, a);
      a.Bd = ea.Bd;
      a.Ob = 0;
    },
    update: function (a) {
      a.force.y += a.Bd;
    },
    s: $c,
  });
  Kb.i = !0;
  Kb.F = ja;
  Kb.prototype = C(ja.prototype, {
    sa: function (a) {
      this.dB(a);
    },
    update: function (a) {
      this.dB(a);
    },
    xg: function () {
      return Fa.Qp;
    },
    dB: function (a) {
      var b = a.K,
        c = a.g.ta.origin;
      b.x = c.x;
      b.y = c.y;
      a.K.x += this.Fw.x;
      a.K.y += this.Fw.y;
      a = a.scale;
      a.a = a.b = this.scale;
    },
    s: Kb,
  });
  Zc.i = !0;
  Zc.F = ja;
  Zc.prototype = C(ja.prototype, {
    xg: function () {
      return Fa.AC;
    },
    update: function (a) {
      var b = a.nh,
        c = a.ha;
      c.x += a.force.x * b;
      c.y += a.force.y * b;
      0 < a.Ob && ((c.x *= 1 - a.Ob), (c.y *= 1 - a.Ob));
      a.K.x += c.x * b;
      a.K.y += c.y * b;
      c = a.force;
      c.x = 0;
      c.y = 0;
      if (!a.f.connected && a.f.fixed && ((c = a.xE), null != c)) {
        var d = a.g.ta.origin.x,
          e = a.g.ta.origin.y;
        a.K.x += d - c.x;
        a.K.y += e - c.y;
        c.x = d;
        c.y = e;
      }
      0 != a.nw && (a.rotation += a.nw * b);
    },
    s: Zc,
  });
  nb.i = !0;
  nb.F = ja;
  nb.prototype = C(ja.prototype, {
    xg: function () {
      return Fa.fv;
    },
    sa: function (a) {
      a.Rx(this.anchor);
    },
    update: function (a) {
      if (0 != a.Vg) {
        var b = a.K.x - this.anchor.x,
          c = a.K.y - this.anchor.y;
        1e-12 > b * b + c * c
          ? ((a.K.x = this.anchor.x), (a.K.y = this.anchor.y))
          : ((a.force.x += -a.Vg * b), (a.force.y += -a.Vg * c));
      }
    },
    s: nb,
  });
  Id.i = !0;
  Id.F = ja;
  Id.prototype = C(ja.prototype, {
    xg: function () {
      return Fa.Qp;
    },
    update: function (a) {
      a.rotation = 90 + 57.29577951308232 * Math.atan2(a.ha.y, a.ha.x);
    },
    s: Id,
  });
  Yc.i = !0;
  Yc.F = ja;
  Yc.prototype = C(ja.prototype, {
    sa: function (a) {
      ja.prototype.sa.call(this, a);
      var b = a.g.ta.clone(),
        c = a.K,
        d = b.origin;
      c.x = d.x;
      c.y = d.y;
      a.ha.x = b.direction.x * ea.oq;
      a.ha.y = b.direction.y * ea.oq;
      c = a.force;
      c.x = 0;
      c.y = 0;
      a.f.connected = !1;
    },
    update: function (a) {
      var b = a.g,
        c = b.ek,
        d = b.Zd,
        e = a.K;
      e.y += b.sq;
      var f = a.ha;
      if (a.f.dn) this.KH(a, 0 > d.Zc.m[0].WE(e) ? 0 : 2);
      else {
        var g = this.rp,
          h = g.origin;
        h.x = e.x;
        h.y = e.y;
        g.direction.x = f.x * a.nh;
        g.direction.y = f.y * a.nh;
        c.ic = 0;
        h = a.g.Zy() ? ea.JK : ea.KK;
        "bounce" == h && (c.ic |= 1);
        var l = ea.cE;
        "bounce" == l && (c.ic |= 2);
        if (ea.sE || ea.zy) c.ic |= 8;
        a.f.Zm || (c.ic |= 16);
        var k = c.rA(g, a.la, 0);
        if (0 < (c.ic & 8)) {
          var m = c.result.Vi;
          if (0 < m.o) {
            var t = m.m,
              n = 0;
            for (m = m.o; n < m; ) {
              var w = t[n++];
              a.f.Ye || null == w || w.f.Ye || b.FH(a, w);
            }
          }
        }
        if (-1 != c.result.planeIndex) {
          if (!(1 <= k)) {
            e.x += k * g.direction.x;
            e.y += k * g.direction.y;
            switch (d.gh) {
              case 0:
                switch (h) {
                  case "none":
                    return;
                  case "stick":
                    this.Tz(a, null);
                    a.nh = 0;
                    return;
                }
                break;
              case 2:
                if ("none" == l) return;
            }
            jd.ft(f, d.Zc.m[d.gh].sc);
            b.EH(a, d.gh);
            a.nh = 0;
          }
        } else
          a.f.Zm &&
            null != c.result.bl &&
            1 > k &&
            ((e.x += k * g.direction.x), (e.y += k * g.direction.y), (a.nh = 0), this.Tz(a, c.result.bl));
      }
    },
    Tz: function (a, b) {
      a.mf(this);
      a.g.ek.result.reset();
      a.g.HH(a, b);
    },
    KH: function (a, b) {
      a.mf(this);
      a.g.ek.result.reset();
      a.g.GH(a, b);
    },
    xg: function () {
      return Fa.zC;
    },
    s: Yc,
  });
  ig.i = !0;
  ig.prototype = {
    apply: function (a, b) {
      this.ti ? (this.ti = !1) : a.SA(b, 0, 1) && this.fJ(b);
    },
    fJ: function (a) {
      if (null != a && a.f.connected) {
        var b = a.g;
        b.hc.clearMarks();
        b.hc.Jw();
        b.hc.Qq(3, !1, a.Db, J(this, this.process));
      }
    },
    process: function (a) {
      if (a.parent == a) return !0;
      var b = a.parent.mb;
      a = a.mb;
      null != b && null != a && b.SA(a, 0, 1);
      return !0;
    },
    s: ig,
  };
  hg.i = !0;
  hg.prototype = {
    oI: function (a) {
      this.list.o = 0;
      a.g.hc.clearMarks();
      a.g.hc.Qq(ea.Ve.la, !1, a.Db, J(this, this.process), a);
    },
    apply: function (a, b, c) {
      if (this.ti) (this.list.o = 0), (this.ti = !1);
      else {
        this.pB = ea.Ve.WJ;
        this.pB || a.f.Ye || ((a = a.K), (a.x = b.x), (a.y = b.y));
        this.direction = c;
        a = this.list;
        b = a.m;
        c = 0;
        for (a = a.o; c < a; ) {
          var d = b[c++];
          if (!d.ia.f.Ye) {
            d.ia.dF(nb.TYPE);
            var e = (ea.Ve.la + 1 - d.depth) * ea.Ve.jH;
            d = d.ia.ha;
            d.x += this.direction.x * e;
            d.y += this.direction.y * e;
          }
        }
        this.list.o = 0;
      }
    },
    process: function (a, b, c) {
      if ((this.pB && a.mb == c) || (null != this.filter && !this.filter(c, a.mb))) return !0;
      this.list.Ma(new gg(a.mb, a.depth));
      return !0;
    },
    s: hg,
  };
  gg.i = !0;
  gg.prototype = { s: gg };
  u.i = !0;
  u.sa = function () {
    if (null == u.values) {
      u.values = new kb();
      for (var a = u.data.split(","), b = u.Hn(), c = 0; c < b; ) {
        var d = a[c++].split(":");
        u.values.P[d[0]] = Aa.parseInt(d[1]);
      }
    }
    u.ys = 0;
    u.progress = new kb();
    a = !1;
    c = 0;
    for (b = B.Ld; c < b.length; ) {
      var e = b[c++].split(":");
      d = e[0];
      e = Aa.parseInt(e[1]);
      Object.prototype.hasOwnProperty.call(u.progress.P, d)
        ? e > u.progress.P[d] && ((u.progress.P[d] = e), (a = !0))
        : (u.progress.P[d] = e);
      100 == e && u.ys++;
    }
    if (a) {
      a = [];
      c = Object.keys(u.progress.P);
      b = c.length;
      for (d = 0; d < b; ) (e = c[d++]), a.push(e + ":" + u.progress.P[e]);
      B.Ld = a;
      la.instance.Nc();
    }
  };
  u.Hn = function () {
    return u.data.split(",").length;
  };
  u.hy = function () {
    for (var a = B.Ld, b = 0, c = 0; c < a.length; ) "100" == a[c++].split(":")[1] && ++b;
    return b;
  };
  u.Eb = function (a) {
    return !u.az(a);
  };
  u.az = function (a) {
    return 100 == u.progress.P[a];
  };
  u.ql = function () {
    return 0 < u.ss.length;
  };
  u.TF = function () {
    return u.ss.pop();
  };
  u.yB = function (a) {
    u.enabled &&
      (u.Eb("ClearMinAmountOfBubblesInRound") &&
        a.Hl > u.Cb("ClearMinAmountOfBubblesInRound") &&
        u.unlock("ClearMinAmountOfBubblesInRound"),
      u.Eb("PlayMinutesTotal") && a.de / 60 >= u.Cb("PlayMinutesTotal") && u.unlock("PlayMinutesTotal"),
      u.Eb("EarnMinPointsWithSingleShot") &&
        a.Dz > u.Cb("EarnMinPointsWithSingleShot") &&
        u.unlock("EarnMinPointsWithSingleShot"),
      u.Eb("PlayGameWithAllBoosters") && a.Jz == u.Cb("PlayGameWithAllBoosters") && u.unlock("PlayGameWithAllBoosters"),
      u.Eb("PaintMinAmountOfBubbles") && a.vo > u.Cb("PaintMinAmountOfBubbles") && u.unlock("PaintMinAmountOfBubbles"),
      u.Eb("BlastAwayMinAmountOfBubbles") &&
        a.vs > u.Cb("BlastAwayMinAmountOfBubbles") &&
        u.unlock("BlastAwayMinAmountOfBubbles"),
      u.Eb("ReachMinCombo") && a.qo > u.Cb("ReachMinCombo") && u.unlock("ReachMinCombo"),
      u.Eb("ClearMinAmountOfBubblesWithFireball") &&
        a.ws > u.Cb("ClearMinAmountOfBubblesWithFireball") &&
        u.unlock("ClearMinAmountOfBubblesWithFireball"),
      u.Eb("ShootMinAmountOfFireballs") &&
        a.Bs >= u.Cb("ShootMinAmountOfFireballs") &&
        u.unlock("ShootMinAmountOfFireballs"),
      u.Eb("DropMinGrapeSize") && a.Ej >= u.Cb("DropMinGrapeSize") && u.unlock("DropMinGrapeSize"),
      u.Eb("ExtendGameTime") && 3 * a.Mz >= u.Cb("ExtendGameTime") && u.unlock("ExtendGameTime"),
      u.Eb("ShootMinAmountPaintTotal") &&
        a.zo + B.Zh >= u.Cb("ShootMinAmountPaintTotal") &&
        u.unlock("ShootMinAmountPaintTotal"),
      u.Eb("ShootMinAmountBombsTotal") &&
        a.yo + B.Xh >= u.Cb("ShootMinAmountBombsTotal") &&
        u.unlock("ShootMinAmountBombsTotal"),
      u.ub("ClearMinAmountOfBubblesInRound", a.Hl),
      u.ub("PlayMinutesTotal", a.de / 60),
      u.ub("EarnMinPointsWithSingleShot", a.Dz),
      u.ub("PlayGameWithAllBoosters", a.Jz),
      u.ub("PaintMinAmountOfBubbles", a.vo),
      u.ub("BlastAwayMinAmountOfBubbles", a.vs),
      u.ub("ReachMinCombo", a.qo),
      u.ub("ClearMinAmountOfBubblesWithFireball", a.ws),
      u.ub("ShootMinAmountOfFireballs", a.Bs),
      u.ub("DropMinGrapeSize", a.Ej),
      u.ub("ExtendGameTime", 3 * a.Mz),
      u.ub("ShootMinAmountPaintTotal", a.zo + B.Zh),
      u.ub("ShootMinAmountBombsTotal", a.yo + B.Xh));
  };
  u.lK = function (a) {
    if (u.enabled) {
      a = a.kb;
      B.de = Math.round(a.de);
      B.Zh += a.zo;
      B.Xh += a.yo;
      q.Wy() && B.oj++;
      if (u.Eb("PlayMinConsecutiveDays")) {
        var b = new Date(B.Cg).getDate();
        31 == b && (b = 0);
        var c = new Date(),
          d = c.getDate();
        31 == d && (d = 0);
        b = d - b;
        1 == b ? B.pg++ : 1 < b && (B.pg = 0);
        u.Eb("PlayMinConsecutiveDays") && B.pg >= u.Cb("PlayMinConsecutiveDays") && u.unlock("PlayMinConsecutiveDays");
        B.Cg = c.getTime();
      }
      u.Eb("SaveMinAmountCoins") && q.uh() + q.sh() > u.Cb("SaveMinAmountCoins") && u.unlock("SaveMinAmountCoins");
      u.ub("SaveMinAmountCoins", q.uh() + q.sh());
      u.Eb("SpendMinAmountCoins") && B.Yh >= u.Cb("SpendMinAmountCoins") && u.unlock("SpendMinAmountCoins");
      u.ub("SpendMinAmountCoins", B.Yh);
      u.Eb("ImproveScoreTimes") && B.oj >= u.Cb("ImproveScoreTimes") && u.unlock("ImproveScoreTimes");
      u.ub("ImproveScoreTimes", B.oj);
      u.Eb("EarnMinPointsInRound") && q.se() > u.Cb("EarnMinPointsInRound") && u.unlock("EarnMinPointsInRound");
      u.ub("EarnMinPointsInRound", q.se());
      u.Eb("PlayMinConsecutiveDays") && B.pg > u.Cb("PlayMinConsecutiveDays") && u.unlock("PlayMinConsecutiveDays");
      u.ub("PlayMinConsecutiveDays", B.pg);
      u.yB(a);
      la.instance.Nc();
    }
  };
  u.pK = function () {
    u.enabled &&
      (u.Eb("UnlockAllBoosters") && q.RD() && u.unlock("UnlockAllBoosters"), u.ub("UnlockAllBoosters", q.WF()));
  };
  u.oK = function () {
    u.enabled &&
      (u.Eb("ReachLevel") && q.Sd() >= u.Cb("ReachLevel") && u.unlock("ReachLevel"), u.ub("ReachLevel", q.Sd()));
  };
  u.Tx = function (a) {
    var b = nc.kj(u.Cb(a));
    switch (a) {
      case "BlastAwayMinAmountOfBubbles":
        a = y.qu(b);
        break;
      case "ClearMinAmountOfBubblesInRound":
        a = y.ru(b);
        break;
      case "ClearMinAmountOfBubblesWithFireball":
        a = y.su(b);
        break;
      case "DropMinGrapeSize":
        a = y.tu(b);
        break;
      case "EarnMinPointsInRound":
        a = y.uu(b);
        break;
      case "EarnMinPointsWithSingleShot":
        a = y.vu(b);
        break;
      case "ExtendGameTime":
        a = y.wu(b);
        break;
      case "ImproveScoreTimes":
        a = y.xu(b);
        break;
      case "PaintMinAmountOfBubbles":
        a = y.yu(b);
        break;
      case "PlayGameWithAllBoosters":
        a = y.zu;
        break;
      case "PlayMinConsecutiveDays":
        a = y.Au(b);
        break;
      case "PlayMinutesTotal":
        a = y.Bu(b);
        break;
      case "ReachLevel":
        a = y.Cu(b);
        break;
      case "ReachMinCombo":
        a = y.Du(b);
        break;
      case "SaveMinAmountCoins":
        a = y.Eu(b);
        break;
      case "ShootMinAmountBombsTotal":
        a = y.Fu(b);
        break;
      case "ShootMinAmountOfFireballs":
        a = y.Gu(b);
        break;
      case "ShootMinAmountPaintTotal":
        a = y.Hu(b);
        break;
      case "SpendMinAmountCoins":
        a = y.Iu(b);
        break;
      case "UnlockAllBoosters":
        a = y.Ju;
        break;
      default:
        a = null;
    }
    return da.translate(a);
  };
  u.xh = function (a) {
    return Object.prototype.hasOwnProperty.call(u.progress.P, a) ? u.progress.P[a] : 0;
  };
  u.ZI = function () {
    for (var a = B.Ld, b = 0, c = a.length; b < c; ) {
      var d = b++,
        e = a[d].split(":")[0];
      a[d] = e + ":" + u.xh(e);
    }
    la.instance.Nc();
  };
  u.ub = function (a, b) {
    b = Math.round((b / u.Cb(a)) * 100);
    100 < b && (b = 100);
    (Object.prototype.hasOwnProperty.call(u.progress.P, a) && u.progress.P[a] > b) || (u.progress.P[a] = b);
  };
  u.Cb = function (a) {
    return u.values.P[a];
  };
  u.unlock = function (a) {
    0 == u.ys && (u.un = !0);
    u.ss.push(a);
    for (var b = B.Ld, c = 0, d = b.length; c < d; ) {
      var e = c++;
      b[e].split(":")[0] == a && (b[e] = a + ":100");
    }
    la.instance.Nc();
  };
  u.keys = function () {
    return "ClearMinAmountOfBubblesInRound PlayMinutesTotal EarnMinPointsInRound EarnMinPointsWithSingleShot PlayGameWithAllBoosters ImproveScoreTimes PaintMinAmountOfBubbles BlastAwayMinAmountOfBubbles ReachMinCombo UnlockAllBoosters ClearMinAmountOfBubblesWithFireball ShootMinAmountOfFireballs ReachLevel DropMinGrapeSize SaveMinAmountCoins SpendMinAmountCoins ExtendGameTime PlayMinConsecutiveDays ShootMinAmountPaintTotal ShootMinAmountBombsTotal".split(
      " "
    );
  };
  fg.i = !0;
  fg.prototype = {
    reload: function () {
      this.xb = this.hf;
      this.hf = this.next();
    },
    Ew: function () {
      return 8 == this.xb || this.xb == this.hf ? !1 : !0;
    },
    iK: function () {
      if (!this.Ew()) return !1;
      var a = this.xb;
      this.xb = this.hf;
      this.hf = a;
      a = this.Se;
      var b = a.m[a.Sa % a.S],
        c = (a = this.Se);
      c.m[c.Sa % c.S] = a.m[(1 + a.Sa) % a.S];
      a = this.Se;
      a.m[(1 + a.Sa) % a.S] = b;
      a = this.Se;
      b = a.m[(2 + a.Sa) % a.S];
      a = this.Se;
      for (a = a.m[(3 + a.Sa) % a.S]; b == a; ) a = this.Sf();
      return !0;
    },
    fH: function () {
      0 != (this.xb & 48) && (this.hf = this.xb);
      this.xb = 8;
    },
    et: function () {
      var a = this.Se,
        b = a.m[(1 + a.Sa) % a.S];
      a = this.Se;
      a = a.m[(2 + a.Sa) % a.S];
      if (0 < (this.g.mg & 4) && 6 > this.uo[2] && this.Mg[2] >= this.xw)
        this.enqueue(32), (this.xw = this.wz()), this.uo[2]++, (this.Mg[2] = 0);
      else if (0 < (this.g.mg & 2) && 6 > this.uo[1] && this.Mg[1] >= this.hA)
        this.enqueue(16), (this.hA = this.yz()), this.uo[1]++, (this.Mg[1] = 0);
      else {
        var c = this.Sf();
        if (b == a) for (; c == a && c == b; ) c = this.Sf();
        this.enqueue(c);
      }
    },
    next: function () {
      var a = this.Se.bj();
      this.et();
      return a;
    },
    wz: function (a) {
      null == a && (a = !1);
      return this.lo(a, Rh);
    },
    yz: function (a) {
      null == a && (a = !1);
      return this.lo(a, Sh);
    },
    lo: function (a, b) {
      null == a && (a = !1);
      if (a) {
        a = 0;
        var c = 1;
      } else (a = 2), (c = 3);
      return this.g.md.ki(b[a], b[c]);
    },
    enqueue: function (a) {
      this.Se.enqueue(a);
      a = 0;
      for (var b = this.Mg.length; a < b; ) this.Mg[a++]++;
    },
    Sf: function () {
      return this.ae.next();
    },
    s: fg,
  };
  var fh = null,
    gh = null,
    ah = null,
    hh = null,
    ih = null,
    jh = null,
    kh = null,
    lh = null,
    mh = null,
    nh = null,
    oh = null,
    ph = null,
    qh = null,
    rh = null,
    sh = null,
    th = null;
  Xg.i = !0;
  Xg.eJ = function (a) {
    function b(f) {
      for (var g = [], h = 0, l = f.length; h < l; ) ++h, g.push(Math.random());
      Tg.sk(f, g);
    }
    if (null == a) {
      for (var c = [], d = 0; 5 > d; ) c.push(d++);
      a = c;
      b(c);
    } else if (((a = a.slice()), 3 > a.length)) {
      a.sort(function (f, g) {
        return f - g;
      });
      d = [];
      for (c = 0; 5 > c; ) {
        var e = c++;
        e != a[e] && d.push(e);
      }
      for (b(d); 3 > a.length; ) a.push(d.pop());
    }
    c = [];
    for (d = 0; 3 > d; ) ++d, c.push(a.pop());
    return c;
  };
  M.i = !0;
  M.F = A;
  M.prototype = C(A.prototype, {
    kc: function () {
      for (var a = this.parent; null != a; ) {
        if (10 == a.type) {
          this.gB(a);
          break;
        }
        a = a.parent;
      }
    },
    B: function () {
      A.prototype.B.call(this);
      this.aE && this.g.detach(this);
      this.N = this.g = null;
    },
    gB: function (a) {
      if (null == this.g) {
        this.g = a;
        this.N = a.N;
        this.pb();
        for (var b = this.da; null != b; ) b instanceof M && b.gB(a), (b = b.W);
      }
    },
    ya: function () {
      this.g.ya(this);
      this.aE = !0;
    },
    X: function () {
      return 11;
    },
    s: M,
  });
  Tb.i = !0;
  Tb.Aa = [ff];
  Tb.F = M;
  Tb.prototype = C(M.prototype, {
    vh: function () {
      return this.g.vh(this.ia.code);
    },
    pop: function () {
      if (0 == this.state) {
        this.ia.disconnect();
        this.ia.mf(null, nb.TYPE);
        var a = this.ia.ha;
        a.x = 0;
        a.y = 0;
      }
      this.find(aa).fI();
    },
    bF: function () {
      this.ia.disconnect();
      this.ia.mf(null, nb.TYPE);
      this.ia.uf(new $c());
      this.ia.Ob = 0;
      this.state = 1;
    },
    tE: function (a) {
      this.kF = a;
      this.ia.mf(null, nb.TYPE);
      this.ia.disconnect();
      this.state = 2;
    },
    uE: function () {
      this.ia.mf(null, nb.TYPE);
      this.ia.disconnect();
      this.find(aa).cI();
    },
    YH: function (a) {
      this.gA = a;
      this.find(aa).eI();
    },
    RH: function () {
      this.ia.Si(this.gA);
      this.gA = -1;
    },
    lq: function () {
      this.B();
    },
    kE: function () {
      this.Pi(49);
    },
    pb: function () {},
    B: function () {
      this.Xs = this.$d = this.ia = null;
      M.prototype.B.call(this);
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      if (this.zz) this.ia.B();
      else {
        switch (this.state) {
          case 1:
            var b = this.ia.g.ta.origin.y;
            a = this.ia.K.y;
            !this.uB && a > b - 2 && (this.find(aa).FK(), (this.uB = !0));
            var c = b + 1,
              d = (b = this.g.Fi);
            0.65 > (b.u - b.j) / (d.A - d.l) && (c += 3);
            a > c &&
              ((this.g.aH = this.ia),
              this.g.notify(30),
              (this.ia.ha.y = -20),
              (this.ia.ha.y += 0.8 * this.g.eh),
              this.pop(),
              (this.state = 0));
            break;
          case 2:
            0 >= --this.kF && (this.find(aa).bI(), (this.state = 0));
        }
        null != this.ia &&
          ((this.rotation = this.ia.rotation),
          (this.scale = this.ia.scale.b),
          (this.visible = !this.ia.f.dn),
          (b = this.Xs),
          (a = this.$d),
          (b.x = a.x),
          (b.y = a.y),
          this.ia.ny(this.$d),
          (this.PA = this.ia.la * this.ia.g.viewport.Oa()));
      }
    },
    X: function () {
      return 33;
    },
    s: Tb,
  });
  aa.i = !0;
  aa.F = M;
  aa.prototype = C(M.prototype, {
    FK: function () {
      this.C.HJ(this.g.Bb(4));
    },
    pb: function () {
      var a = this.parent;
      32 == a.ia.code
        ? this.lx()
        : 16 == a.ia.code
        ? this.ox()
        : ((this.C = new Q(this.Bb())),
          this.C.cc(12, this.hl()),
          this.C.aa(),
          this.C.Ga(),
          0 != (a.ia.code & 64) &&
            ((this.ce = new Q(this.Bb(), 12, "bubble_hourglass")), this.ce.aa(), this.ce.Ga(), (this.flags |= aa.Gp)));
    },
    B: function () {
      null != this.C && (this.C.B(), (this.C = null));
      null != this.oa && (this.oa.B(), (this.oa = null));
      null != this.ce && (this.ce.B(), (this.ce = null));
      null != this.Yb && (this.Yb.B(), (this.Yb = null));
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      49 == a.type &&
        0 != this.parent.ia.code &&
        ((a = this.parent),
        8 == a.ia.code
          ? this.$E()
          : 32 == a.ia.code
          ? this.lx()
          : 16 == a.ia.code
          ? this.ox()
          : ((a = this.hl()),
            0 < (this.flags & (aa.zm | aa.Hi))
              ? ((this.flags &= ~(aa.zm | aa.Hi)),
                null != this.oa && (this.oa.B(), (this.oa = null)),
                this.C.cc(12, a),
                this.C.IA(),
                this.C.Ga(),
                this.C.aa())
              : this.C.oc(a)));
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      null != this.C && this.C.update(a);
      null != this.oa && this.oa.update(a);
      if (0 != this.flags)
        if (0 < (this.flags & aa.Hp)) {
          var b = this.oa;
          b.pc(b.zb + 10);
          this.Yb.update(a);
        } else
          0 < (this.flags & aa.Hi)
            ? ((b = this.C), b.pc(b.zb + 5))
            : 0 < (this.flags & aa.Jp)
            ? this.ar(2)
            : 0 < (this.flags & aa.Ep)
            ? this.ar(11)
            : 0 < (this.flags & aa.Fp)
            ? this.ar(10)
            : 0 < (this.flags & aa.Fk) &&
              0 == (this.flags & aa.Ip) &&
              this.oa.Dc().uy() > 12 * Ha.Yk &&
              (this.parent.RH(), (this.flags |= aa.Ip));
    },
    Ka: function (a) {
      M.prototype.Ka.call(this, a);
      a = this.parent;
      var b = a.$d;
      var c = b.x;
      b = b.y;
      var d = ((2 * a.PA) / 106) * a.scale;
      null != this.C && (this.C.L(c), this.C.O(b), this.C.M(d), this.C.J(a.visible));
      if (null != this.oa) {
        this.oa.J(a.visible);
        this.oa.L(c);
        this.oa.O(b);
        var e = d;
        0 < (this.flags & (aa.Ep | aa.Fk | aa.Jp | aa.Fp)) && (e = 2 * d);
        this.oa.M(e);
      }
      0 < (this.flags & aa.Gp) && (this.ce.J(a.visible), this.ce.L(c), this.ce.O(b), this.ce.M(d));
      0 < (this.flags & aa.Hp) &&
        ((e = a.ia.ha),
        (e = 57.29577951308232 * Math.atan2(e.y, e.x) + 90),
        this.Yb.M(1.2 * d),
        this.Yb.pc(e),
        this.Yb.L(c),
        this.Yb.O(b),
        this.Yb.J(!a.ia.f.loaded));
    },
    fI: function () {
      0 < (this.flags & aa.Fk) && null != this.oa && (this.oa.B(), (this.oa = null));
      switch (this.parent.vh()) {
        case 0:
          var a = hh;
          break;
        case 1:
          a = ih;
          break;
        case 2:
          a = jh;
          break;
        case 3:
          a = kh;
          break;
        case 4:
          a = lh;
          break;
        case 5:
          a = mh;
          break;
        default:
          a = null;
      }
      this.Tb(17, a.frames[0].value);
      this.oa.Ga();
      this.oa.aa();
      this.oa.Dc().pk(0).play(a, !0, 0, J(this, this.Oq));
      this.jp();
      this.flags |= aa.Jp;
    },
    bI: function () {
      0 < (this.flags & aa.zm) && this.oa.B();
      this.Tb(21, Ab);
      this.oa.Ga();
      this.oa.aa();
      this.oa.Tc().add();
      this.jp();
      this.oa.Dc().play(oh, null, null, J(this, this.Oq));
      this.flags |= aa.Ep;
    },
    cI: function () {
      this.Tb(20, Ab);
      this.oa.Ga();
      this.oa.aa();
      this.oa.Tc().add();
      this.jp();
      this.oa.Dc().pk(0).play(nh, null, null, J(this, this.Oq));
      this.flags |= aa.Fp;
    },
    eI: function () {
      0 < (this.flags & aa.Hi) && ((this.flags &= ~aa.Hi), this.C.pc(0));
      this.Tb(18, Ab);
      this.oa.Ga();
      this.oa.aa();
      this.oa.Tc().add();
      this.jp();
      this.oa.Dc().play(ph, null, null, J(this, this.QH));
      this.flags |= aa.Fk;
    },
    $E: function () {
      null == this.C ? (this.C = new Q(this.Bb(), 12, "bubble_fireball")) : this.C.cc(12, "bubble_fireball");
      this.C.Ga();
      this.C.aa();
      this.Tb(12, "bubble_fireball_flames");
      this.oa.Ga();
      this.oa.aa();
      this.oa.Tc().add();
      this.Yb = new Q(this.C.vb(), 19, Ab);
      this.Yb.Tc().add();
      this.Yb.rk(this.Yb.Ba() / 2);
      this.Yb.dg(this.Yb.Ba() / 2);
      this.Yb.J(!1);
      this.Yb.vb().pp(this.C, this.Yb);
      this.Yb.vb().pp(this.C, this.oa);
      this.Yb.Dc().play(rh);
      this.flags = aa.Hp;
    },
    lx: function () {
      null == this.C ? (this.C = new Q(this.Bb(), 22, Ab)) : (this.C.IA(), this.C.cc(22, Ab));
      this.C.aa();
      this.C.Ga();
      this.Tb(22, Ab);
      this.oa.Ga();
      this.oa.aa();
      this.oa.Dc().pk(-1).play(qh);
      this.flags = aa.zm;
    },
    ox: function () {
      null != this.C && this.C.B();
      null != this.oa && this.oa.B();
      this.C = new Q(this.Bb(), 12, "bubble_painter0");
      this.K(this.C);
      this.Tb(12, "bubble_painter1");
      this.K(this.oa);
      this.flags = aa.Hi;
    },
    hl: function () {
      return "bubble" + ta.Zv(this.parent, Tb).vh();
    },
    Bb: function () {
      return this.g.Bb(2);
    },
    Oq: function () {
      ta.Zv(this.parent, Tb).zz = !0;
    },
    QH: function () {
      this.oa.B();
      this.oa = null;
      this.flags &= ~(aa.Fk | aa.Ip);
    },
    ar: function (a) {
      null != this.C &&
        this.oa.Dc().uy() > a * Ha.Yk &&
        (this.C.B(), (this.C = null), null != this.ce && (this.ce.B(), (this.ce = null), (this.flags &= ~aa.Gp)));
    },
    jp: function () {
      this.oa.pc(Math.round(360 * Math.random()));
    },
    K: function (a) {
      a.aa();
      a.Ga();
    },
    Tb: function (a, b) {
      null != this.oa && this.oa.B();
      this.oa = new Q(this.C.vb(), a, b);
    },
    X: function () {
      return 14;
    },
    s: aa,
  });
  wc.i = !0;
  wc.F = ja;
  wc.prototype = C(ja.prototype, {
    sa: function (a) {
      ja.prototype.sa.call(this, a);
      a.mf(null, Kb.TYPE);
    },
    update: function (a) {
      var b = a.g.ta.origin,
        c = b.x,
        d = b.y;
      b = this.ef(0.1);
      a.K.x = P.Td(c - 3.2, c, b);
      a.K.y = P.Td(d + 0.72, d, b);
      c = a.scale;
      d = P.Td(0.75, 1, b);
      c.a = c.b;
      c.b = d;
      1 == b && (a.client.g.notify(17), a.mf(this), a.uf(new Kb()));
      a.nh = 0;
    },
    xg: function () {
      return Fa.Qp;
    },
    s: wc,
  });
  Wg.i = !0;
  Wg.getTypeName = function (a) {
    switch (a) {
      case 8:
        return "fireball";
      case 16:
        return "painter";
      case 32:
        return "bomb";
      default:
        return "normal";
    }
  };
  df.i = !0;
  df.F = M;
  df.prototype = C(M.prototype, {
    pb: function () {
      this.ya();
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      8 == this.g.Ea.xb || this.g.sl
        ? ((a = P.map(this.time, 0, 3, 1, 2)), 2 < a && (a = 2), this.yt(1.7 * Math.sin(40 * this.time * a)))
        : -1 != this.si &&
          ((this.si *= 0.97),
          0.5 > this.si ? (this.yt(0), (this.si = -1)) : this.yt(Math.sin(40 * this.time) * this.si));
    },
    Ia: function (a) {
      switch (a.type) {
        case 23:
          0 < this.g.Dg.je.o && (this.si = 4);
          break;
        case 24:
        case 28:
          this.time = 0;
      }
    },
    yt: function (a) {
      var b = this.g.node.local;
      b.translate.x = 0;
      b.translate.y = a;
      b.D = (b.D & -2) | 224;
      this.g.node.flags |= 8;
    },
    X: function () {
      return 18;
    },
    s: df,
  });
  cf.i = !0;
  cf.F = M;
  cf.prototype = C(M.prototype, {
    pb: function () {
      oa.If().ya(J(this, this.Vf));
      this.ya();
    },
    B: function () {
      oa.If().detach(J(this, this.Vf));
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      M.prototype.Ia.call(this, a);
      var b = this.g.qA,
        c = this.g.va;
      switch (a.type) {
        case 43:
        case 44:
          if (0 > this.g.state || this.g.cf || this.g.mA(c)) return;
      }
      switch (a.type) {
        case 43:
          if (3 == b.id) {
            this.g.Pt();
            break;
          }
          if (this.lA(c)) {
            this.Fb = !0;
            break;
          }
          if (this.vw(c)) break;
          this.N.xt(c);
          break;
        case 44:
          if (3 == b.id) break;
          if (this.g.bf) break;
          if (this.lA(c)) {
            this.Fb && ((this.Fb = !1), this.g.Pt());
            break;
          }
          if (this.vw(c)) break;
          this.g.df && this.N.wE() && (this.N.xt(c), this.g.Et());
          break;
        case 45:
          this.N.xt(c);
      }
    },
    Vf: function (a) {
      a.xd && 32 == a.code && this.g.Pt();
    },
    vw: function (a) {
      return this.N.viewport.sp(a.y) > this.N.ta.origin.y;
    },
    lA: function (a) {
      var b = new E();
      b.x = a.x;
      b.y = a.y;
      this.N.QA(b);
      var c = this.N.ta.origin;
      a = c.x;
      c = c.y;
      this.mm.j = a + -3.2 - 1;
      this.mm.A = c + 0.72 + 2;
      this.mm.u = a + 3;
      this.mm.l = c - 2.5;
      return Yg.jK(b, this.mm);
    },
    X: function () {
      return 12;
    },
    s: cf,
  });
  bf.i = !0;
  bf.F = A;
  bf.prototype = C(A.prototype, {
    start: function () {
      oa.Pb().ya(J(this, this.Qb));
      oa.If().ya(J(this, this.Vf));
      this.$y ? this.g.eK() : this.g.dK();
    },
    abort: function () {
      this.g.JD();
    },
    resume: function () {
      this.g.resume();
      this.cf = !1;
    },
    resize: function () {
      this.layout = new eg(this.screen.fb().te());
      this.g.layout = this.layout.mode;
      this.g.Fi = this.layout.window;
      var a = this.layout.rj,
        b = new W();
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      this.g.ML = b;
      this.g.N.fB(this.layout.g);
      this.g.N.fp(0.5, 0.9);
      this.g.Pa();
    },
    B: function () {
      A.prototype.B.call(this);
      oa.Pb().detach(J(this, this.Qb));
      oa.If().detach(J(this, this.Vf));
      this.screen = this.g = null;
    },
    Ia: function (a) {
      A.prototype.Ia.call(this, a);
      switch (a.type) {
        case 10:
          Oa.Sq(this.screen.lf, "reason", this.g.Jf ? "dead" : "timeout");
          S.LK(this.g.Jf ? "fail" : "success", this.g.gb, J(this, this.NJ));
          break;
        case 40:
          if (this.cf) break;
          this.cf = !0;
          this.screen.ND(Bd);
          break;
        case 41:
          (a = new Ye(a.get("step"), this.screen.canvas)), this.g.Y(null, a);
      }
    },
    NJ: function () {
      q.PH(!this.g.Jf && !this.g.Nr, this.g.gb);
      u.lK(this.g);
      u.ZI();
      this.screen.cb(Rc);
    },
    configure: function (a, b) {
      this.config = new $f();
      this.config.seed = a;
      this.config.Qc = q.oy();
      this.config.mobile = Kd.ve();
      this.config.og = null;
      cb.vC && 0 == q.Mn() && ((this.$y = !0), (this.config.seed = 4085), (this.config.og = Th.slice()));
      a = null;
      try {
        if (G.tj()) {
          this.$y = !1;
          var c = G.Vx(),
            d = U.Z(c, "state");
          if (Object.prototype.hasOwnProperty.call(d, "active_powerups"))
            for (var e = U.Z(d, "active_powerups"), f = 0; f < e.length; )
              switch (e[f++]) {
                case "bomb":
                  this.config.Qc |= 4;
                  break;
                case "laser":
                  this.config.Qc |= 8;
                  break;
                case "painter":
                  this.config.Qc |= 2;
                  break;
                case "time":
                  this.config.Qc |= 1;
              }
          var g = U.Z(c, "override");
          if (Object.prototype.hasOwnProperty.call(g, "bubble_colors"))
            try {
              var h = U.Z(g, "bubble_colors");
              a = [];
              for (f = 0; f < h.length; ) {
                switch (h[f++]) {
                  case "aqua":
                    var l = 2;
                    break;
                  case "green":
                    l = 3;
                    break;
                  case "pink":
                    l = 5;
                    break;
                  case "purple":
                    l = 1;
                    break;
                  case "red":
                    l = 0;
                    break;
                  case "yellow":
                    l = 4;
                    break;
                  default:
                    l = -1;
                }
                if (-1 != l) {
                  if (0 > a.indexOf(l) && (a.push(l), 3 == a.length)) break;
                  this.config.og = a;
                }
              }
            } catch (k) {}
        }
      } catch (k) {}
      b = null == b ? Xg.eJ(this.config.og) : b.slice();
      this.config.og = b;
    },
    Qb: function (a) {
      this.g.Qb(a);
    },
    Vf: function () {},
    X: function () {
      return 47;
    },
    s: bf,
  });
  eg.i = !0;
  eg.prototype = {
    ud: function (a) {
      null == a && (a = 0);
      var b = this.rj;
      if (0.85 > (b.u - b.j) / (b.A - b.l)) {
        var c = b.u - b.j,
          d = (b.u - b.j) / 0.85;
        this.g.j = b.j;
        this.g.l = b.l;
        this.g.u = b.j + c;
        this.g.A = b.l + d;
        var e = this.g,
          f = b.j + 0.5 * (b.u - b.j),
          g = 0.5 * (e.u - e.j);
        e.j = f - g;
        e.u = f + g;
        e = this.g;
        f = b.l + 0.5 * (b.A - b.l);
        g = 0.5 * (e.A - e.l);
        e.l = f - g;
        e.A = f + g;
        this.mode = "EPortrait";
        0 == a
          ? ((c = b.A - b.l - d),
            (e = this.g),
            (e = c / (e.A - e.l)),
            0.3 > e &&
              ((d = 1),
              0.2 <= e && (d = P.map(e, 0.2, 0.3, 1, 0)),
              (e = this.g),
              (f = this.g.l + (c / 2) * d),
              (g = e.A - e.l),
              (e.l = f),
              (e.A = f + g)),
            this.g.l < 0.15 * (b.A - b.l) &&
              ((c = 0.15 * (b.A - b.l) - this.g.l),
              b.A - b.l - this.g.A >= c
                ? ((e = this.g), (f = this.g.l + c), (g = e.A - e.l), (e.l = f), (e.A = f + g))
                : ((this.rj.l = 0.15 * (b.A - b.l)), this.ud(++a))))
          : (this.mode = "ENarrowLandscape");
      } else
        (this.mode = "ELandscape"),
          (c = 0.85 * (b.A - b.l)),
          (d = b.A - b.l),
          (this.g.j = b.j),
          (this.g.l = b.l),
          (this.g.u = b.j + c),
          (this.g.A = b.l + d),
          (e = this.g),
          (f = b.j + 0.5 * (b.u - b.j)),
          (g = 0.5 * (e.u - e.j)),
          (e.j = f - g),
          (e.u = f + g),
          (e = this.g),
          (f = b.l + 0.5 * (b.A - b.l)),
          (g = 0.5 * (e.A - e.l)),
          (e.l = f - g),
          (e.A = f + g),
          0 == a
            ? ((this.mode = "ELandscape"),
              (c = b.u - b.j - c),
              (e = this.g),
              (e = c / (e.u - e.j)),
              0.4 > e &&
                ((d = 1),
                0.2 <= e && (d = P.map(e, 0.2, 0.4, 1, 0)),
                (e = this.g),
                (f = this.g.j + (c / 2) * d),
                (g = e.u - e.j),
                (e.j = f),
                (e.u = f + g)),
              this.g.j < 0.2 * (b.u - b.j) &&
                ((c = 0.2 * (b.u - b.j) - this.g.j),
                b.u - b.j - this.g.u >= c
                  ? ((e = this.g), (f = this.g.j + c), (g = e.u - e.j), (e.j = f), (e.u = f + g))
                  : ((e = this.rj), (this.rj.j = 0.2 * (e.u - e.j)), this.ud(++a))))
            : (this.mode = "EWidePortrait");
    },
    s: eg,
  };
  af.i = !0;
  af.rc = !0;
  af.prototype = { s: af };
  Ea.i = !0;
  Ea.JG = function () {
    Ea.Gl = new Fb(12, 2);
    Ea.Gl.Sg(0, [-1, 0, 1, 0, -1, -1, 0, -1, -1, 1, 0, 1]);
    Ea.Gl.Sg(1, [-1, 0, 1, 0, 0, -1, 1, -1, 0, 1, 1, 1]);
  };
  Ea.prototype = {
    gy: function () {
      0 == this.bufferSize && this.AA();
      var a = this.buffer.$F(this.bufferSize, this.dJ);
      this.buffer.Sg(this.bufferSize, this.vx);
      this.bufferSize--;
      return a;
    },
    pF: function () {
      for (var a = this.buffer.Ha, b = 0; b < a; ) this.buffer.Sg(b++, this.Xw());
      this.bufferSize = a - 1;
      this.it(a);
    },
    AA: function () {
      switch (this.al) {
        case 0:
          if (0.5 > this.md.qh()) {
            this.ax = this.md.ki(Ea.Ku[0], Ea.Ku[1]);
            this.al = 1;
            this.AA();
            return;
          }
          this.FI();
          break;
        case 1:
          this.EI();
          this.al = 2;
          break;
        case 2:
          this.DI(), (this.al = 0);
      }
      var a = this.buffer.Ha;
      this.bufferSize = a - 1;
      this.it(a - 1);
    },
    FI: function () {
      var a = this.buffer.Ha;
      this.buffer.Bq(0, a - 1);
      for (var b = 0, c = a - 1; b < c; ) this.buffer.Sg(b++, this.Xw());
      this.it(a - 1);
    },
    Xw: function () {
      var a = this.buffer.ca,
        b = Ea.Lu[0],
        c = Ea.Lu[1],
        d = this.md.ki(b, c);
      d = P.min(a >> 1, d);
      var e = this.md.ki(b, c);
      e = P.min(a >> 1, e);
      if (d + e == a)
        for (;;) {
          --d;
          if (3 == a - d - e) break;
          --e;
          if (3 == a - d - e) break;
        }
      b = this.kt;
      for (c = 0; c < a; ) b[c++] = 0;
      c = d;
      for (a -= e; c < a; ) b[c++] = 1;
      this.Xq(b);
      return b;
    },
    EI: function () {
      var a = this.buffer.Ha;
      this.buffer.Bq(0, a - 1);
      var b = 1,
        c = this.ax,
        d = 1;
      for (--a; 0 < a--; ) {
        var e = this.Tw(this.Kn(), this.Kn(), b);
        this.Xq(e);
        ++d;
        2 == d && (b < c && ++b, (d = 0));
        this.buffer.Sg(a, e);
      }
    },
    DI: function () {
      var a = this.buffer.Ha;
      this.buffer.Bq(0, a - 1);
      var b = this.ax,
        c = 1;
      for (--a; 0 < a--; ) {
        var d = this.Tw(this.Kn(), this.Kn(), b);
        this.Xq(d);
        ++c;
        2 == c && (0 < b && --b, (c = 0));
        this.buffer.Sg(a, d);
      }
    },
    Tw: function (a, b, c) {
      for (var d = this.buffer.ca, e = this.HG(this.kt), f = a, g = d - b; f < g; ) e[f++] = 1;
      if (0 < c) {
        g = d >> 1;
        var h = d >> 1;
        for (f = 0; f < c; ) 0 == (f++ & 1) ? (2 <= g - a && (e[g] = 0), ++h) : (2 < d - b - h && (e[h] = 0), --g);
      }
      return e;
    },
    it: function (a) {
      for (var b = this.buffer.ca; ; ) {
        --a;
        if (!(0 < a)) break;
        for (var c = 0; c < b; ) {
          var d = c++,
            e = this.buffer,
            f = e.m[a * e.ca + d],
            g = 0 != (f & 64);
          f &= 7;
          if (0 != f) {
            this.Jm.o = 0;
            var h = !0;
            e = this.kt;
            for (var l = this.CF(d, a, e), k = 0; k < l; ) {
              var m = k++;
              if (f == e[m]) {
                h = !1;
                break;
              }
              this.Jm.Ma(e[m]);
            }
            if (h) {
              f = -1;
              if (0 < this.Jm.o) {
                f = this.Jm.m[0];
                if (g) {
                  e = this.buffer;
                  e.m[a * e.ca + d] = f | 64;
                  continue;
                }
                if (0 != this.al) {
                  e = this.buffer;
                  e.m[a * e.ca + d] = f;
                  continue;
                }
              }
              g = this.buffer;
              g.m[a * g.ca + d] = 0;
              if (-1 != f)
                for (g = 0, h = this.BF(d, a, e); g < h; )
                  if (((l = this.MF(e[g++], e[g++])), 0 != l))
                    for (k = this.buffer, k.m[a * k.ca + d] = f, k = this.bz, m = 0; m < l; ) {
                      var t = this.buffer;
                      t.m[k[m + 1] * t.ca + k[m]] = 0;
                      m += 2;
                    }
            }
          }
        }
        break;
      }
    },
    MF: function (a, b) {
      var c = this.buffer,
        d = Ea.Gl,
        e = this.buffer.ca - 1,
        f = this.buffer.Ha - 1,
        g = this.marks,
        h = 0,
        l = this.bz,
        k = this.stack;
      k[0] = a;
      k[1] = b;
      a = 2;
      for (g.cp(!1); 0 < a; ) {
        b = k[--a];
        var m = k[--a];
        if (!g.m[b * g.ca + m]) {
          l[h++] = m;
          l[h++] = b;
          if (0 == b) return 0;
          g.m[b * g.ca + m] = !0;
          for (var t = 0, n = b & 1; 12 > t; ) {
            var w = m + d.m[n * d.ca + t++];
            if (0 > w || w > e) ++t;
            else {
              var v = b + d.m[n * d.ca + t++];
              !(0 > v || v > f) && 0 < c.m[v * c.ca + w] && ((k[a++] = w), (k[a++] = v));
            }
          }
        }
      }
      return h;
    },
    CF: function (a, b, c) {
      for (var d = this.buffer, e = Ea.Gl, f = d.ca - 1, g = d.Ha - 1, h = 0, l = 0; 12 > l; ) {
        var k = a + e.m[(b & 1) * e.ca + l++];
        if (0 > k || k > f) ++l;
        else {
          var m = b + e.m[(b & 1) * e.ca + l++];
          0 > m || m > g || ((k = d.m[m * d.ca + k]), 0 != k && (c[h++] = k & 7));
        }
      }
      return h;
    },
    BF: function (a, b, c) {
      for (var d = this.buffer, e = Ea.Gl, f = d.ca - 1, g = d.Ha - 1, h = 0, l = 0; 12 > l; ) {
        var k = a + e.m[(b & 1) * e.ca + l++];
        if (0 > k || k > f) ++l;
        else {
          var m = b + e.m[(b & 1) * e.ca + l++];
          !(0 > m || m > g) && 0 < d.m[m * d.ca + k] && ((c[h++] = k), (c[h++] = m));
        }
      }
      return h;
    },
    HG: function (a) {
      for (var b = 0, c = this.buffer.ca; b < c; ) a[b++] = 0;
      return a;
    },
    Xq: function (a) {
      for (var b = this.buffer.ca, c = 0; c < b; ) {
        var d = c++;
        1 == a[d] && (a[d] = this.mE.next());
      }
    },
    Kn: function () {
      return this.md.ki(Ea.Mu[0], Ea.Mu[1]);
    },
    s: Ea,
  };
  dg.i = !0;
  dg.prototype = {
    next: function () {
      if (this.zF) {
        if (this.xs >= this.zx && 7 > this.zs)
          return (this.zx = this.xz()), (this.xs = 0), this.zs++, this.ae.next() | 64;
        this.xs++;
      }
      return this.ae.next();
    },
    xz: function (a) {
      null == a && (a = !1);
      return this.lo(a, Uh);
    },
    lo: function (a, b) {
      null == a && (a = !1);
      if (a) {
        a = 0;
        var c = 1;
      } else (a = 2), (c = 3);
      return this.md.ki(b[a], b[c]);
    },
    s: dg,
  };
  Da.i = !0;
  Da.format = function (a) {
    for (;;) {
      var b = Da.cache.P[a];
      if (null != b) return b;
      Da.cache.P[a] = nc.kj(a);
    }
  };
  Da.F = M;
  Da.prototype = C(M.prototype, {
    Ia: function (a) {
      switch (a.type) {
        case 18:
          if (8 == this.g.Cf) break;
          this.g.Ab = 0;
          this.g.notify(34);
          break;
        case 23:
          a = this.g.Dg;
          0 < a.wf.o && this.pG(a.wf.o);
          0 < a.Rc.o && this.oG(a.Rc.o);
          0 < a.je.o && this.lG(a.je.o);
          null == a.seed ||
            a.fi ||
            0 != a.sd.o ||
            (2 <= this.g.Ab && this.g.notify(34), 1 == this.g.Ab && (this.zq = !0), (this.g.Ab = 0));
          break;
        case 29:
          this.nG();
          break;
        case 32:
          this.mG(this.g.co);
      }
    },
    In: function () {
      var a = Vh;
      return 100 + ((this.g.Ab / a[0]) | 0) * a[1];
    },
    ky: function () {
      return (2 * this.In()) | 0;
    },
    pb: function () {
      this.ya();
      this.g.gb = 0;
      this.g.Ab = 0;
      this.g.Cf = -1;
    },
    pG: function (a) {
      this.Ny();
      this.g.vd = this.In() * a;
      this.g.gb += this.g.vd;
      this.um();
      this.g.notify(35);
    },
    lG: function (a) {
      this.Ny();
      this.g.vd = this.In() * a;
      this.g.gb += this.g.vd;
      this.um();
      this.g.notify(36);
    },
    oG: function (a) {
      this.g.vd = this.ky() * a;
      this.g.gb += this.g.vd;
      this.um();
      this.g.notify(37);
    },
    nG: function () {
      this.g.vd = (10 * this.In()) | 0;
      this.g.gb += this.g.vd;
      this.um();
      this.g.notify(38);
    },
    mG: function (a) {
      a = Wh[a];
      this.g.vd = a;
      this.g.gb += a;
      this.um();
      this.g.notify(39);
    },
    Ny: function () {
      if (99 > this.g.Ab) {
        this.g.Ab++;
        S.Lc("combo_achieved", null, { combo_value: this.g.Ab });
        var a = this.g.kb;
        this.g.Ab > a.qo && (a.qo = this.g.Ab);
        this.zq ? (this.zq = !1) : this.g.notify(33);
      }
    },
    um: function () {
      S.dH(this.g.gb);
    },
    X: function () {
      return 19;
    },
    s: Da,
  });
  $e.i = !0;
  $e.F = M;
  $e.prototype = C(M.prototype, {
    pb: function () {
      this.ya();
      this.Kh = !1;
    },
    B: function () {
      this.stop(z.Gk);
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      switch (a.type) {
        case 7:
          this.play(z.dD);
          break;
        case 8:
          this.play(z.cD);
          break;
        case 11:
        case 12:
          this.stop(z.Bm);
          this.stop(z.lv);
          this.stop(z.Gk);
          this.g.vl && this.play(z.kD);
          (this.g.Jf || this.g.Nr) && this.play(z.jD);
          break;
        case 15:
          this.play(z.Gk, !1, !0);
          break;
        case 16:
          8 == this.N.Od.m[0].code
            ? (this.Kh || this.play(z.iD, !1, !0), this.play(z.hD, !1, !0), this.stop(z.Bm))
            : this.play(z.MC);
          break;
        case 18:
          this.Kh || this.play(z.LC);
          break;
        case 19:
          this.play(z.IC, !1, !0);
          break;
        case 20:
          this.play(z.JC, !1, !0);
          break;
        case 21:
        case 22:
          this.Kh || this.play(z.KC);
          break;
        case 23:
          a = this.g.Dg;
          0 < a.wf.o && this.play(z.FC);
          0 < a.je.o && this.play(z.EC);
          a.fi && this.play(z.oD);
          break;
        case 24:
          this.Kh || this.play(z.lv, !1, !0);
          this.Kh || this.play(z.Bm, !1, !0);
          this.play(z.sD, !1, !0);
          break;
        case 27:
          this.stop(z.Gk);
          this.play(z.RC, !1, !0);
          10 >= this.g.Ya && this.play(z.Gk, !1, !1, 10 - this.g.Ya);
          break;
        case 29:
          this.Kh || this.play(z.GC);
          break;
        case 30:
          this.Kh || this.play(z.HC);
          break;
        case 32:
          switch (this.g.co) {
            case 0:
              this.play(z.pD);
              break;
            case 1:
              this.play(z.qD);
              break;
            case 2:
              this.play(z.rD);
          }
          break;
        case 33:
          this.Xr++;
          1 < this.g.Ab && this.play(z.SC);
          break;
        case 34:
          2 <= this.Xr && (this.play(z.TC, !1, !0), this.stop(z.Bm));
          this.Xr = 0;
          break;
        case 35:
          switch (P.min(this.g.Ab, 10)) {
            case 1:
              a = z.UC;
              break;
            case 2:
              a = z.VC;
              break;
            case 3:
              a = z.WC;
              break;
            case 4:
              a = z.XC;
              break;
            case 5:
              a = z.YC;
              break;
            case 6:
              a = z.ZC;
              break;
            case 7:
              a = z.$C;
              break;
            case 8:
              a = z.aD;
              break;
            case 9:
              a = z.bD;
              break;
            case 10:
              a = z.kv;
              break;
            default:
              a = z.kv;
          }
          this.play(a);
          break;
        case 42:
          this.play(z.DC);
      }
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = !1);
      null == b && (b = !1);
      z.play(a, b, c, d);
    },
    stop: function (a) {
      z.stop(a);
    },
    X: function () {
      return 25;
    },
    s: $e,
  });
  Ze.i = !0;
  Ze.prototype = {
    add: function (a, b) {
      this.data.uc(this.data.o + b);
      for (var c = 0; c < b; ) {
        ++c;
        var d = this.data;
        d.m[d.o++] = a;
      }
      this.jh = this.data.o - 1;
    },
    next: function () {
      if (1 > this.jh) return (this.jh = this.data.o - 1), (this.Xk = this.data.m[0]);
      var a = Math.floor(this.md.qh() * this.jh);
      this.Xk = this.data.m[a];
      this.data.m[a] = this.data.m[this.jh];
      this.data.m[this.jh] = this.Xk;
      this.jh--;
      return this.Xk;
    },
    sk: function () {
      for (var a = [], b = 0, c = this.data.o; b < c; ) a[b++] = this.md.qh();
      this.data.sk(a);
    },
    s: Ze,
  };
  cg.i = !0;
  cg.prototype = {
    reset: function () {
      this.seed = null;
      this.fi = !1;
      this.sd.o = 0;
      this.wf.o = 0;
      this.Rc.o = 0;
      this.je.o = 0;
      this.Qi.o = 0;
      this.Il.o = 0;
      this.Rk.o = 0;
    },
    R: function () {
      this.seed = null;
      this.sd.R();
      this.wf.R();
      this.Rc.R();
      this.je.R();
      this.Qi.R();
      this.Il.R();
      this.Rk.R();
    },
    s: cg,
  };
  bg.i = !0;
  bg.prototype = {
    Kw: function () {
      this.Ib.reset();
    },
    R: function () {
      this.N = null;
      this.Ib.R();
      this.Ib = null;
      this.lj.R();
      this.lj = null;
      this.Lf.R();
      this.Lf = null;
    },
    lH: function (a, b) {
      var c = a.code;
      this.Ib.seed = a;
      this.Ib.fi = 16 == c;
      if (16 == c) return this.YJ(a, b), this.Ib;
      32 == c ? this.XJ(a) : this.mH(a);
      this.qB();
      return this.Ib;
    },
    qB: function () {
      var a = this.N.hc;
      this.Lf.o = 0;
      a.clearMarks();
      for (var b = a.iterator(); b.Ca(); ) {
        var c = b.next();
        c.Db.tb = 0 == c.code || c.f.Jd;
      }
      for (b = a.Ec; null != b; )
        b.tb ||
          ((c = this.lj),
          (c = [c.m[--c.o]]),
          (c[0].o = 0),
          a.ix(
            !1,
            b,
            (function (g) {
              return function (h) {
                g[0].Ma(h.mb);
                return !0;
              };
            })(c)
          ),
          this.Lf.Ma(c[0])),
          (b = b.next);
      if (this.Lf.af()) return this.Ib;
      for (var d = this.Lf.iterator(); d.Ca(); ) {
        var e = d.next();
        a.clearMarks();
        for (var f = !0; ; ) {
          for (b = e.iterator(); b.Ca(); )
            if (((c = b.next()), c.nc == c.g.gf)) {
              f = !1;
              break;
            }
          break;
        }
        f || (d.remove(), this.lj.Ma(e));
      }
      if (this.Lf.af()) return this.Ib;
      a = 0;
      for (e = this.Lf.iterator(); e.Ca(); ) {
        d = e.next();
        this.Ib.Il.Ma(0);
        f = 0;
        for (b = d.iterator(); b.Ca(); )
          (c = b.next()), ++f, (this.Ib.Il.m[a] = f), this.Ib.Rc.Ma(c), this.Ib.sd.Ma(c), (c.f.Jd = !0);
        ++a;
        this.lj.Ma(d);
      }
      this.Yq(this.Ib.Rc);
      return this.Ib;
    },
    mH: function (a) {
      var b = new Z();
      this.uF(a, b);
      this.EA(b);
      if (!(3 > b.o))
        for (this.Yq(b), a = b.iterator(); a.Ca(); ) (b = a.next()), this.Ib.wf.Ma(b), this.Ib.sd.Ma(b), (b.f.Jd = !0);
    },
    XJ: function (a) {
      var b = new Z();
      this.Dx(a, 10, b);
      if (!b.af())
        for (this.Yq(b), a = b.iterator(); a.Ca(); )
          (b = a.next()), b.f.Jd || (this.Ib.je.Ma(b), this.Ib.sd.Ma(b), (b.f.Jd = !0));
    },
    YJ: function (a, b) {
      var c = new Z();
      this.Dx(a, 5, c);
      for (c = c.iterator(); c.Ca(); ) {
        var d = c.next();
        ((d.code & 7) == (b & 7) && d != a) || d.f.Jd || this.Ib.Qi.Ma(d);
      }
    },
    uF: function (a, b) {
      b.o = 0;
      var c = this.N.hc;
      c.clearMarks();
      c.Jw();
      c.ix(!0, a.Db, function (d, e) {
        if (e) return (d.mb.code & 7) == (d.parent.mb.code & 7);
        d.mb.f.Jd || b.Ma(d.mb);
        return !0;
      });
      return b;
    },
    Dx: function (a, b, c) {
      c.o = 0;
      var d = this.N.hc;
      d.clearMarks();
      d.Qq(b, !1, a.Db, function (e) {
        c.Ma(e.mb);
        return !0;
      });
      this.EA(c);
      return c;
    },
    EA: function (a) {
      for (a = a.iterator(); a.Ca(); ) {
        var b = a.next();
        this.N.viewport.Pr(b.K, b.la) || a.remove();
      }
    },
    Yq: function (a) {
      for (a = a.iterator(); a.Ca(); ) {
        var b = a.next();
        0 != (b.code & 64) && this.Ib.Rk.Ma(b);
      }
    },
    s: bg,
  };
  ag.i = !0;
  ag.prototype = { s: ag };
  Xc.i = !0;
  Xc.F = M;
  Xc.prototype = C(M.prototype, {
    next: function () {
      this.g.isFrozen = !1;
      this.g.df = !0;
      if (10 == this.state) return !1;
      this.state++;
      return !0;
    },
    Ia: function (a) {
      9 == a.type && (this.f = (this.f & -2) | 1);
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      if (!this.g.isFrozen) {
        var b = Je - this.g.Ya;
        switch (this.state) {
          case 0:
            1 < b && (this.lp(1), this.state++);
            break;
          case 2:
            this.state++;
            break;
          case 3:
            2 == this.g.Ab && (this.lp(2), this.state++);
            break;
          case 5:
            this.time = 0;
            this.state++;
            break;
          case 6:
            this.time += a;
            if (3 < this.time || 20 > this.g.Ya) this.lp(3), this.state++;
            break;
          case 8:
            this.time = 0;
            this.state++;
            break;
          case 9:
            (this.time += a),
              (10 < this.time || 10 > this.g.Ya) &&
                this.g.Ea.Ew() &&
                ((this.g.Tr = !0), this.lp(4), (this.state = 10), (this.f = (this.f & -2) | 0));
        }
      }
    },
    pb: function () {
      this.g.Tr = !1;
      this.g.df = !1;
      this.ya();
      this.f = (this.f & -2) | 0;
    },
    lp: function (a) {
      this.g.bf
        ? (this.f = (this.f & -2) | 0)
        : ((this.g.isFrozen = !0), (this.g.df = !1), this.g.notify(41, Oa.Mx(["step", a])));
    },
    X: function () {
      return 34;
    },
    s: Xc,
  });
  Ye.i = !0;
  Ye.F = M;
  Ye.prototype = C(M.prototype, {
    B: function () {
      this.Kt.B();
      M.prototype.B.call(this);
    },
    U: function (a) {
      !this.RA && 1 < this.time && ((this.RA = !0), this.ya());
      var b = this.ef(0.5);
      b = za(2)(b);
      this.bK.alpha = 0.5 * b;
      M.prototype.U.call(this, a);
    },
    Ia: function (a) {
      M.prototype.Ia.call(this, a);
      43 == a.type && (z.play(z.OC), z.play(z.eD), hd(((N = this.g), J(N, N.WI)), 0.1), this.B());
    },
    pb: function () {
      this.Kt = new sb();
      this.Kt.effect = this.bK = new Vc(this.step, this.g);
      this.group.node.appendChild(this.Kt);
      this.Y(null, new xb(this.step, this.group));
      this.ia = this.Y(null, new Xe(this.step, this.group));
    },
    X: function () {
      return 64;
    },
    s: Ye,
  });
  xb.i = !0;
  xb.F = M;
  xb.prototype = C(M.prototype, {
    B: function () {
      this.C.B();
      M.prototype.B.call(this);
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      this.offset = (Math.sin(3 * this.time) * this.N.viewport.Oa()) / 4;
    },
    Ka: function (a) {
      var b = this.wh();
      this.C.L(b.x);
      this.C.O(b.y);
      this.C.M(this.N.viewport.Oa() / 60);
      this.C.J(!0);
      switch (this.step) {
        case 1:
        case 2:
          b = this.C;
          b.O(b.qa + this.offset);
          break;
        case 3:
          this.C.pc(90);
          b = this.C;
          b.L(b.ga + this.offset);
          break;
        case 4:
          this.C.pc(-90), (b = this.C), b.L(b.ga + this.offset);
      }
      M.prototype.Ka.call(this, a);
    },
    pb: function () {},
    hl: function () {
      return "arrow";
    },
    wh: function () {
      var a = this.N.viewport,
        b = a.na(),
        c = new E();
      c.x = 0;
      c.y = 0;
      switch (this.step) {
        case 1:
          c.x = b.j + 0.67 * (b.u - b.j);
          c.y = b.l + 0.48 * (b.A - b.l);
          break;
        case 2:
          b = this.g.find(Uc).gl();
          c.x = b.x;
          c.y = b.y - 4 * a.Oa();
          break;
        case 3:
          b = this.g.find(vc).gl();
          c.x = b.x + 5 * a.Oa();
          c.y = b.y;
          break;
        case 4:
          (c.x = b.j + 0.45 * (b.u - b.j) - 6 * a.Oa()), (c.y = b.l + 0.9 * (b.A - b.l));
      }
      return c;
    },
    X: function () {
      return 62;
    },
    s: xb,
  });
  Xe.i = !0;
  Xe.F = xb;
  Xe.prototype = C(xb.prototype, {
    B: function () {
      xb.prototype.B.call(this);
      this.text.B();
    },
    hl: function () {
      return "bubble";
    },
    U: function (a) {
      xb.prototype.U.call(this, a);
      var b = this.Oa() / 36;
      switch (this.$a) {
        case 0:
          var c = this.ef(0.5);
          this.C.fa(za(2)(c));
          this.C.M(ec(0.1)(c) * b);
          1 == c && (this.text.Da.Fa().alpha(1, 0.5, za(2)), (this.$a = 1));
          break;
        case 1:
          this.C.M(b);
      }
      this.C.update(a);
      this.text.Da.update(a);
    },
    Ka: function () {
      var a = this.Oa(),
        b = this.wh();
      this.C.J(!0);
      this.C.L(b.x);
      this.C.O(b.y);
      b = this.C.na(this.C.vb());
      La.offset(b, -a, -a);
      b.A += 2 * a;
      this.text.La(b);
      a = (0.85 * a) | 0;
      this.text.Da.cB(0.5 * -a);
      this.text.Bt(a);
    },
    wh: function () {
      var a = xb.prototype.wh.call(this),
        b = this.Oa();
      switch (this.step) {
        case 1:
          a.x -= 2 * b;
          a.y -= 5 * b;
          break;
        case 2:
          a.x -= 8 * b;
          a.y -= 7 * b;
          break;
        case 3:
          a.x += 9 * b;
          a.y += 5 * b;
          break;
        case 4:
          (a.x += 4 * b), (a.y -= 7 * b);
      }
      return a;
    },
    pb: function () {
      xb.prototype.pb.call(this);
      this.C.fa(0);
      this.C.J(!1);
      if (this.g.ve)
        switch (this.step) {
          case 1:
            var a = da.translate(y.Iv);
            break;
          case 2:
            a = da.translate(y.Kv);
            break;
          case 3:
            a = da.translate(y.Mv);
            break;
          case 4:
            a = da.translate(y.Ov);
            break;
          default:
            a = null;
        }
      else
        switch (this.step) {
          case 1:
            a = da.translate(y.Hv);
            break;
          case 2:
            a = da.translate(y.Jv);
            break;
          case 3:
            a = da.translate(y.Lv);
            break;
          case 4:
            a = da.translate(y.Nv);
            break;
          default:
            a = null;
        }
      var b = (0.85 * this.Oa()) | 0;
      this.text = new ib(this.group, ob, -1);
      this.text.fa(0);
      this.text.ka(a);
      this.text.Da.cB(-b / 2);
      this.text.Bt(b);
      this.text.Rg();
      z.play(z.fD);
      this.$a = 0;
    },
    Oa: function () {
      return this.N.viewport.Oa();
    },
    X: function () {
      return 63;
    },
    s: Xe,
  });
  Wc.i = !0;
  Wc.Aa = [Bc];
  Wc.prototype = { s: Wc };
  pa.i = !0;
  pa.Jb = function () {
    return ++pa.X;
  };
  pa.F = Wc;
  pa.prototype = C(Wc.prototype, { B: function () {}, s: pa });
  Vc.i = !0;
  Vc.F = pa;
  Vc.prototype = C(pa.prototype, {
    B: function () {
      pa.prototype.B.call(this);
      this.g = null;
    },
    yd: function (a) {
      var b = 0,
        c = 0,
        d = 0,
        e = this.g.N.viewport,
        f = e.na();
      switch (this.step) {
        case 1:
          b = f.j + 0.6 * (f.u - f.j);
          c = f.l + 0.72 * (f.A - f.l);
          d = 8 * e.Oa();
          break;
        case 2:
          c = this.g.find(Uc).gl();
          b = c.x;
          c = c.y;
          d = 6 * e.Oa();
          break;
        case 3:
          c = this.g.find(vc).gl();
          b = c.x;
          c = c.y;
          d = 6 * e.Oa();
          break;
        case 4:
          (b = f.j + 0.45 * (f.u - f.j)), (c = f.l + 0.9 * (f.A - f.l)), (d = 4 * e.Oa());
      }
      e = a.bc.getContext();
      a.dm(e);
      a.cm(e);
      a = Ka.instance.te();
      e.setTransform(1, 0, 0, 1, 0, 0);
      e.fillStyle = "rgba(0,0,0," + this.alpha + ")";
      e.beginPath();
      e.rect(0, 0, a.x, a.y);
      e.arc(b, c, d, 0, 2 * Math.PI, !0);
      e.closePath();
      e.fill();
    },
    s: Vc,
  });
  Hd.i = !0;
  Hd.Aa = [hf];
  Hd.F = Sb;
  Hd.prototype = C(Sb.prototype, {
    sa: function (a) {
      this.Wn = !0;
      this.md = new le(a.seed);
      this.mg = a.Qc;
      this.ve = a.mobile;
      this.TD();
      for (var b = [], c = 0; 8 > c; ) ++c, b.push(new ia());
      this.eo = b;
      b = 0;
      for (c = this.eo; b < c.length; ) this.node.appendChild(c[b++].node);
      this.to = 0 < bh ? bh : -1;
      this.Qm = new We();
      this.Y(null, this.Qm);
      a = a.og;
      this.$m = [];
      this.$m[1] = a[0];
      this.$m[2] = a[1];
      this.$m[4] = a[2];
      this.N = new gf();
      this.N.fB(this.Fi);
      this.N.ya(this);
      this.em();
      this.Ea = new fg(this);
      this.N.kz(this.Ea.xb);
      this.Y(cf);
      this.Y(Oe);
      this.Y(Re);
      this.Y(Ve);
      this.Y(Le);
      this.Y(df);
      this.Y(Da);
      this.Y(Ue);
      la.instance.config.Uq && this.Y($e);
      this.Y(Qe);
      this.Y(Ne);
      Ng ? Og || this.Y(Me) : (Og && Md) || this.Y(vc);
      this.Y(Uc);
      0 < (this.mg & 8) && this.Y(Pe);
      this.Y(Gd);
      this.vi = new bg(this.N);
    },
    Qb: function (a) {
      this.qA = a;
      var b = this.va;
      b.x = a.x;
      b.y = a.y;
      switch (a.type) {
        case 0:
          this.notify(43);
          break;
        case 1:
          this.notify(44);
          break;
        case 2:
          this.notify(45);
      }
    },
    Bb: function (a) {
      return this.eo[a];
    },
    eK: function () {
      this.mp = !1;
      this.Ya = this.state = 1;
      this.Y(Xc);
      this.lu = !0;
      this.df = !1;
    },
    dK: function () {
      (this.mp = !0), (this.state = 0);
    },
    mA: function (a) {
      return Ga.ug(this.Po, function (b) {
        return b.Fb(a);
      });
    },
    JD: function () {
      this.Nr = !0;
      this.bm();
    },
    WI: function () {
      this.find(Xc).next() || this.find(Xc).B();
      this.lu = !1;
    },
    pause: function () {
      this.cf = !0;
      this.notify(40);
    },
    resume: function () {
      this.cf = !1;
    },
    B: function () {
      Sb.prototype.B.call(this);
      for (var a = 0, b = this.eo; a < b.length; ) b[a++].B();
      this.eo = null;
      this.node.B();
      this.node = null;
      this.N.detach(this);
      this.N.B();
      this.gz = this.aH = this.fz = this.Dg = this.Ea = this.N = null;
      this.vi.R();
      this.Qm = this.Ss = this.vi = null;
      this.Po.R();
      this.Po = null;
    },
    U: function (a) {
      this.cf || (this.eL(a), Sb.prototype.U.call(this, a));
    },
    Ka: function (a) {
      this.cf || Sb.prototype.Ka.call(this, a);
    },
    Pa: function () {
      this.Wn && this.notify(6);
    },
    vh: function (a) {
      return this.$m[a & 7];
    },
    eL: function (a) {
      switch (this.state) {
        case 0:
          this.Ya += a;
          0.25 < this.Ya && (this.notify(7), (this.Ya = 0), this.state++);
          break;
        case 1:
          this.Ya += a;
          1 <= this.Ya &&
            ((this.Ya = Je),
            this.mp && this.notify(8),
            G.zJ(),
            (this.kb.dr = Ha.time | 0),
            (this.kb.de = B.de),
            (this.lg = this.Ex()),
            this.notify(9),
            0 < (this.mg & 8) && S.Lc("powerup_used", null, { powerup_type: "laser" }),
            (this.state = 2),
            this.lu || (this.df = !0));
          break;
        case 2:
          if (this.sl) {
            this.Gf += a;
            1 <= this.Gf / 1 && this.Et();
            break;
          }
          this.vl ||
            this.isFrozen ||
            this.bf ||
            (this.fL(),
            this.N.IB(0, this.eh * a),
            (this.Ul -= a),
            0 >= this.Ul && !this.lu && (this.df = !0),
            Ng || (this.Ya -= a),
            (this.kb.de += a),
            !this.Ur && 10 >= this.Ya && ((this.Ur = !0), this.notify(15)),
            0 >= this.Ya &&
              ((this.Ya = 0),
              (this.vl = !0),
              8 == this.Ea.xb || 32 == this.Ea.xb ? ((this.sl = !0), (this.Gf = 0), this.notify(28)) : this.bm(),
              this.notify(11)),
            (this.Mk += a),
            1 < this.Mk && ((this.Mk = 0), u.yB(this.kb), u.ql() && ((this.Mk = -1e5), this.Y(Ie), this.notify(42))));
          this.N.update(a);
          if (this.bf) {
            var b = !1;
            this.N.Od.af() || (b = !0);
            for (var c = this.N.Xb.iterator(); c.Ca(); ) {
              var d = c.next();
              if (!d.f.dh && !d.f.connected) {
                b = !0;
                break;
              }
            }
            0 < bc.Ii && (b = !0);
            b || this.state++;
          }
          this.vj -= a;
          0 > this.vj && (this.vj = 0);
          this.Zq &&
            (this.vi.Kw(),
            (b = this.vi.qB()),
            0 < b.Rc.o && b.Rc.o > this.kb.Ej && (this.kb.Ej = b.Rc.o),
            this.Gw(b, 8),
            (this.Zq = !1));
          this.Jf ||
            ((b = this.N.nr()),
            null != b && 0 >= this.N.ta.origin.y - (b.K.y + 1) && ((this.Jf = !0), this.bm(), this.notify(12)));
          0 < this.Ab &&
            this.hz != this.Ab &&
            ((this.hz = this.Ab), uh && 0 == this.Ab % 10 && (this.Ea.fH(), this.$J()));
          8 == this.Ea.xb && ((this.Gf += a), (this.Jf || 1 <= this.Gf / 2) && this.Et());
          break;
        case 3:
          (this.state = -1), this.notify(10);
      }
    },
    et: function (a) {
      null == a && (a = -1);
      if (0 > a) {
        var b = this.N;
        a = 19 - (b.gf - b.Vh + 1);
      }
      for (b = 0; b < a; ) {
        ++b;
        for (var c = this.Ss.gy(), d = [], e = 0, f = this.N.cols; e < f; ) d.push(c[e++]);
        this.N.pI(d);
      }
    },
    Et: function () {
      if (!this.bf) {
        this.sl && ((this.sl = !1), this.bm());
        var a = this.N.Gn(0);
        a.mf(null, wc.TYPE);
        this.Cf = a.code;
        var b = 8 == this.Cf,
          c = 16 == this.Cf,
          d = 32 == this.Cf;
        c && (this.kb.zo++, (c = !0));
        d && (this.kb.yo++, (d = !0));
        ea.oq = b ? 90 : 120;
        b && ((a.f.Zm = !1), this.kb.Bs++, (this.Ul = 0.5), (this.df = !1));
        this.N.LJ();
        this.to--;
        this.Ea.reload();
        b && (this.Gf = 0);
        this.notify(16);
        a = this.fl(this.Cf);
        var e = {};
        null != a && (e.color = a);
        e.shot_type = Wg.getTypeName(this.Cf);
        S.Lc("projectile_shot", e);
        b && S.Lc("powerup_used", null, { powerup_type: "fireball" });
        c && S.Lc("powerup_used", null, { powerup_type: "painter" });
        d && S.Lc("powerup_used", null, { powerup_type: "bomb" });
        0 != this.to && this.N.kz(this.Ea.xb);
      }
    },
    Pt: function () {
      !this.bf &&
        this.Tr &&
        (this.Ea.iK() ? (this.N.Gn(0).Si(this.Ea.xb), this.notify(19), S.Lc("bubble_swapped")) : this.notify(20));
    },
    Gw: function (a, b) {
      this.Dg = a;
      this.kb.Hl += a.sd.o;
      a.Rc.o > this.kb.Ej && (this.kb.Ej = a.Rc.o);
      for (var c = a.Rc.iterator(); c.Ca(); ) {
        var d = c.next();
        S.Lc("bubbles_destroyed", null, {
          bubble_color: this.fl(d.code),
          destruction_type: "detached",
          destruction_cause: "normal_shot",
        });
        d.client.bF();
      }
      for (c = a.Rk.iterator(); c.Ca(); ) this.Nw(c.next());
      for (c = a.wf.iterator(); c.Ca(); )
        (d = c.next()),
          S.Lc("bubbles_destroyed", null, {
            bubble_color: this.fl(d.code),
            destruction_type: "popped",
            destruction_cause: "normal_shot",
          }),
          d.client.pop();
      if (0 < a.je.o) {
        this.vj = 0.75;
        var e = 1,
          f = 0;
        for (c = a.je.iterator(); c.Ca(); )
          (d = c.next()),
            this.kb.vs++,
            d.client.tE(e),
            S.Lc("bubbles_destroyed", null, {
              bubble_color: this.fl(d.code),
              destruction_type: "popped",
              destruction_cause: "bomb",
            }),
            3 == ++f && (++e, (f = 0));
        this.Ul = e * Ha.Yk;
        this.df = !1;
      }
      if (a.fi)
        for (c = a.Qi.iterator(); c.Ca(); ) (d = c.next()), (e = (b & 7) | (d.code & 64)), (d.code = e), d.client.YH(e);
      0 < a.sd.o && (this.N.trim(), this.et());
      this.N.Mj.update();
    },
    Nw: function (a) {
      1 >= this.Ya && (this.kb.bH = !0);
      this.Ya += 3;
      this.vl && (this.bf = this.vl = !1);
      10 < this.Ya && (this.Ur = !1);
      this.gz = a;
      this.notify(27);
    },
    bm: function () {
      this.bf = !0;
      this.kb.dr = (Ha.time - this.kb.dr) | 0;
    },
    $J: function () {
      this.Gf = 0;
      var a = (this.Ab / 10) | 0;
      this.Ea.xb = 8;
      this.N.Gn(0).Si(8);
      this.notify(24, Oa.Mx(["count", a]));
    },
    em: function () {
      var a = new ug(13, 20, 1, 1);
      a.grid.cp(0);
      this.Ss = new Ea(this, this.md, 13, 19);
      for (var b = a.grid.Ha - 2; 0 <= b; ) {
        for (var c = this.Ss.gy(), d = a.grid, e = [], f = 0; 13 > f; ) e.push(c[f++]);
        d.Sg(b, e);
        --b;
      }
      a.grid.resize(a.grid.ca, a.grid.Ha - 1);
      this.N.tJ(a);
      this.N.IB(0, 10);
    },
    Aw: function (a) {
      a = new Tb(a);
      a.Y(aa);
      this.Qm.Y(null, a);
    },
    lq: function () {},
    lE: function (a) {
      this.Vy || a.uf(new wc());
      this.Vy = !1;
      a = new Tb(a);
      a.Y(aa);
      this.Qm.Y(null, a);
    },
    hE: function (a, b) {
      8 == a.code &&
        (0 != (b.code & 64) && this.Nw(b),
        (b.f.Jd = !0),
        b.client.uE(),
        this.kb.ws++,
        this.kb.Hl++,
        S.Lc("bubbles_destroyed", null, {
          bubble_color: this.fl(b.code),
          destruction_type: "popped",
          destruction_cause: "fireball",
        }),
        (this.fz = b),
        this.notify(29),
        (this.Zq = !0));
    },
    iE: function () {
      this.notify(18);
      this.kb.kA = !1;
    },
    jE: function (a, b) {
      var c = b.code;
      b = this.Yr;
      var d = a.K;
      b.x = d.x;
      b.y = d.y;
      this.vi.Kw();
      this.vi.lH(a, c);
      b = this.vi.Ib;
      b.sd.af() && (this.kb.kA = !1);
      if (0 < b.sd.o || b.fi) a.ui(), this.N.RJ();
      this.Gw(b, c);
      this.notify(23);
      b.fi &&
        ((this.kb.vo += b.Qi.o),
        (a = c & 7),
        8 != this.Ea.xb &&
          (0 != (this.Ea.xb & 48) && (this.Ea.hf = this.Ea.xb), (this.Ea.xb = a), this.N.Gn(0).Si(a), this.notify(31)));
      if (0 < b.sd.o)
        for (a = Xh, c = a.length; 0 < c--; )
          if (b.sd.o >= a[c]) {
            this.co = c;
            this.notify(32);
            break;
          }
      0 == this.to && this.bm();
    },
    gE: function (a) {
      0 < a.ha.x ? this.notify(21) : this.notify(22);
    },
    fL: function () {
      if (this.bf) this.eh = P.Mw(Math.abs(this.eh), 0.001) ? 0 : 0.9 * this.eh;
      else {
        var a = this.Ex(),
          b = Yh,
          c = b[b.length - 1],
          d = this.Uy();
        d && (c = 5);
        (d = d || 0 < this.vj) && this.lg >= vh.length - 1 && (this.lg = 2);
        a == this.lg || d || (this.lg = a);
        a = b[this.lg];
        3 > this.lg && (a *= wh);
        a > c && (a = c);
        c = Math.abs(this.eh);
        c += (a - c) * (c < a ? 0.1 : 0.06);
        P.vq(c, a, 0.001) && (c = a);
        this.eh = -c;
      }
    },
    Ex: function () {
      if (this.Uy() || null == this.N.nr()) return this.lg;
      var a = this.N.viewport.yk(this.N.nr().K.y + 1),
        b = this.N.viewport.na();
      a = 1 - P.map(a, b.l, b.A, 0, 1);
      b = vh;
      for (var c = b.length - 1, d = 0; d <= c; ) {
        if (a < b[d]) return d;
        ++d;
      }
      return c;
    },
    Uy: function () {
      return 0 < this.N.Od.o && 8 == this.N.Od.m[0].code ? !0 : !1;
    },
    TD: function () {
      if (!this.xc.Fy(23)) {
        var a = 0,
          b = function (d, e, f) {
            null == f && (f = "");
            return rb.Zw(f, d, e);
          },
          c = function (d) {
            a += 1;
            return rb.SE("anim" + (a - 1), d, Ha.Yk);
          };
        this.xc.createTexture(23);
        this.xc.createTexture(22);
        qh = c(b(2, 31));
        this.xc.createTexture(21);
        oh = c(b(1, 45));
        this.xc.createTexture(20);
        nh = c(b(1, 45));
        this.xc.createTexture(19);
        rh = c(b(1, 16));
        this.xc.createTexture(18);
        ph = c(b(1, 25));
        this.xc.createTexture(17);
        hh = c(b(1, 45, "0_"));
        ih = c(b(1, 45, "1_"));
        jh = c(b(1, 45, "2_"));
        kh = c(b(1, 45, "3_"));
        lh = c(b(1, 45, "4_"));
        mh = c(b(1, 45, "5_"));
        this.xc.createTexture(16);
        this.xc.createTexture(14);
        th = c(b(1, 18));
        sh = c(b(18, 31));
        this.xc.createTexture(13);
        ah = c(b(1, 16));
        this.xc.createTexture(12);
        this.xc.createTexture(15);
        this.xc.createTexture(9);
        this.xc.createTexture(11);
        gh = c(b(18, 47).concat([Ab]));
        fh = c(b(1, 18));
        b = this.xc.createTexture(10).py();
        xh = b[0].id;
        yh = b[1].id;
        zh = b[2].id;
        Ah = b[3].id;
        Bh = b[4].id;
        Ch = b[5].id;
        Dh = b[6].id;
        Eh = b[7].id;
        Fh = b[8].id;
        vf = b[9].id;
        Nd = b[10].id;
      }
    },
    fl: function (a) {
      if (0 != (a & 64)) return "time";
      if (4 >= (a & -65))
        switch (this.vh(a)) {
          case 0:
            return "red";
          case 1:
            return "purple";
          case 2:
            return "aqua";
          case 3:
            return "green";
          case 4:
            return "yellow";
          case 5:
            return "pink";
        }
      return null;
    },
    X: function () {
      return 10;
    },
    s: Hd,
  });
  We.i = !0;
  We.F = A;
  We.prototype = C(A.prototype, {
    X: function () {
      return 8;
    },
    s: We,
  });
  $f.i = !0;
  $f.prototype = { s: $f };
  Ve.i = !0;
  Ve.F = M;
  Ve.prototype = C(M.prototype, {
    B: function () {
      for (var a = 0, b = this.Kg; a < b.length; ) b[a++].B();
      a = 0;
      for (b = this.Sh; a < b.length; ) b[a++].B();
      this.Wc = this.Sh = this.Kg = null;
      M.prototype.B.call(this);
    },
    pb: function () {
      this.Wc = this.g.Bb(3);
      for (var a = 0; 10 > a; ) {
        var b = a++,
          c = new Q(this.Wc, 12, "aim_marker_small_0");
        c.node.name = "AimMarkerSmall" + b;
        c.Ga();
        c.aa();
        c.J(!1);
        c.Tc().add();
        this.Kg[b] = c;
      }
      for (a = 0; 2 > a; )
        (b = a++),
          (c = new Q(this.Wc, 12, "aim_marker_big_0")),
          (c.node.name = "AimMarkerBig" + b),
          c.Ga(),
          c.aa(),
          c.J(!1),
          c.Tc().add(),
          (this.Sh[b] = c);
      this.nq = -1;
      this.ya();
      this.g.ve && this.kp(!1);
    },
    Ia: function (a) {
      M.prototype.Ia.call(this, a);
      switch (a.type) {
        case 9:
          this.g.ve || this.kp(!0);
          break;
        case 43:
          if (-1 == this.g.state) break;
          this.g.ve && (this.g.mA(this.g.va) || this.kp(!0));
          break;
        case 44:
          -1 != this.g.state && this.g.ve && this.kp(!1);
      }
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      if (!(0 > this.g.state)) {
        var b = this.g.va,
          c = 2 != this.g.state || this.g.bf || !this.g.df;
        this.UA(c ? 0.25 : 1);
        a = this.N.ta.clone();
        var d = this.a;
        d.x = a.origin.x;
        d.y = a.origin.y;
        d = b.y;
        var e = this.N.viewport;
        this.b.x = e.IK(b.x);
        this.b.y = e.sp(d);
        var f = this.b.x - this.a.x,
          g = this.b.y - this.a.y,
          h = Math.sqrt(f * f + g * g);
        c || ((c = P.map(h, 2, 4, 0, 1)), (c = P.Ti(c, 0, 1)), this.UA(c));
        c = !1;
        b = 0;
        var l = a.origin;
        d = a.direction;
        var k = this.N.Zd.Zc.m[1];
        qg.xi(this.b.x, this.b.y, -1, 0, k.Df + 1 + 2.5) &&
          (vg.Cx(l.x, l.y, d.x, d.y, -1, k.Df + 1, this.b), (c = !0), (b = 1));
        k = this.N.Zd.Zc.m[3];
        qg.xi(this.b.x, this.b.y, 1, 0, k.Df + 1 + 2.5) &&
          (vg.Cx(l.x, l.y, d.x, d.y, 1, k.Df + 1, this.b), (c = !0), (b = -1));
        !c && this.g.ve && ((d = 4 + 0.4 * h), 4 < d && (d = 4), (this.b.x += (f / h) * d), (this.b.y += (g / h) * d));
        c &&
          ((d = this.b),
          (f = this.a),
          (g = new E()),
          (g.x = d.x - f.x),
          (g.y = d.y - f.y),
          (this.q = g),
          jd.normalize(this.q),
          (g = new E()),
          (g.x = b),
          (g.y = 0),
          jd.ft(this.q, g));
        e.xk(this.a, this.a);
        e.xk(this.b, this.b);
        f = this.a.x - this.b.x;
        g = this.a.y - this.b.y;
        d = Math.sqrt(f * f + g * g);
        1500 < d && ((d = 1500), (c = !1));
        b = this.g.Ea.xb;
        g = b != this.nq;
        this.nq = b;
        h = f = null;
        if (g) {
          4 >= (b & -65)
            ? ((b = this.g.vh(b)), (f = "aim_marker_big_" + b), (h = "aim_marker_small_" + b))
            : 8 == b
            ? ((f = "aim_marker_big_fireball"), (h = "aim_marker_small_fireball"))
            : 16 == b
            ? ((f = "aim_marker_big_painter"), (h = "aim_marker_small_painter"))
            : 32 == b && ((f = "aim_marker_big_bomb"), (h = "aim_marker_small_bomb"));
          b = 0;
          for (l = this.Sh; b < l.length; ) (g = l[b]), ++b, g.oc(f), g.aa();
          b = 0;
          for (l = this.Kg; b < l.length; ) (g = l[b]), ++b, g.oc(h), g.aa();
        }
        b = 0;
        for (l = this.Kg; b < l.length; ) l[b++].J(!1);
        b = 0;
        for (l = this.Sh; b < l.length; ) l[b++].J(!1);
        e = e.ja.l;
        f = d / 8;
        h = 0;
        d = a.direction;
        for (b = 0; 7 > b; )
          ++b,
            (this.a.x += d.x * f),
            (this.a.y += d.y * f),
            (a = this.Kg[h++]),
            a.L(this.a.x),
            a.O(this.a.y),
            a.J(this.a.y > e);
        if (c) {
          for (b = 0; 2 > b; )
            (g = b++),
              (this.a.x = this.b.x + this.q.x * g * f),
              (this.a.y = this.b.y + this.q.y * g * f),
              (a = this.Kg[h++]),
              a.L(this.a.x),
              a.O(this.a.y),
              a.J(this.a.y > e);
          this.a.x = this.b.x + 2 * this.q.x * f;
          this.a.y = this.b.y + 2 * this.q.y * f;
        } else (this.a.x += d.x * f), (this.a.y += d.y * f);
        a = this.Sh[0];
        a.L(this.a.x);
        a.O(this.a.y);
        a.J(this.a.y > e);
      }
    },
    Ka: function (a) {
      M.prototype.Ka.call(this, a);
      a = this.N.viewport.Oa() / 40;
      for (var b = 0, c = this.Kg; b < c.length; ) c[b++].M(a);
      b = 0;
      for (c = this.Sh; b < c.length; ) c[b++].M(a);
    },
    kp: function (a) {
      this.Wc.J(a);
    },
    UA: function (a) {
      this.Wc.fa(a);
    },
    X: function () {
      return 16;
    },
    s: Ve,
  });
  Ue.i = !0;
  Ue.F = M;
  Ue.prototype = C(M.prototype, {
    pb: function () {
      this.ya();
    },
    Ia: function (a) {
      switch (a.type) {
        case 7:
          a = this.Tb(Qa.ah(0), da.translate(y.Ev));
          this.Jn(a.position, 10);
          a.tm(0.5, 0.01, 1, za(3));
          a.up(0.5, 0.01, 1, za(3));
          a.Qd(0.35, 0.9);
          a.ha.y = 12;
          a.Bd = -40;
          break;
        case 8:
          a = this.Tb(Qa.ah(1), da.translate(y.Dv));
          this.Jn(a.position, 10);
          a.tm(0.5, 0.01, 1, ec(0.3));
          a.up(0.5, 0.01, 1, ec(0.3));
          a.Qd(0.35, 0.9);
          a.ha.y = 12;
          a.Bd = -40;
          break;
        case 11:
          a = this.Tb(Qa.ah(3), da.translate(y.Fv));
          this.Jn(a.position, 10);
          a.Qd(0.35, 1);
          a.ha.y = 15;
          a.Bd = -40;
          break;
        case 12:
          a = this.Tb(Qa.ah(4), da.translate(y.Cv));
          this.Jn(a.position, 10);
          a.Qd(0.35, 1);
          a.ha.y = 15;
          a.Bd = -40;
          break;
        case 16:
          8 == this.g.Cf && (this.Gx = !0);
          break;
        case 24:
          a = this.Tb(Qa.ah(2), da.translate(y.Bv));
          a.tm(0.5, 0.01, 1, za(3));
          a.QK(0.5, 0, 360, za(3));
          a.Qd(0.3, 1);
          var b = this.N.ta.origin,
            c = new E();
          c.x = b.x;
          c.y = b.y;
          a.position = c;
          a.position.y -= 6;
          a.ha.y = 15;
          a.Bd = -40;
          break;
        case 27:
          a = this.Tb(Qa.Xv, null);
          b = a.position;
          c = this.g.gz.K;
          b.x = c.x;
          b.y = c.y;
          a.ha.y = 0.15;
          a.Bd = -0.4;
          a.ej();
          a.up(0.5, 0.01, 1, za(3));
          a.tm(0.5, 0.01, 1, za(3));
          a.Qd(0.3, 1);
          break;
        case 29:
          if (Od) break;
          this.Gx &&
            ((this.Gx = !1),
            (a = this.Tb(Qa.Hk, "")),
            (b = a.position),
            (c = this.g.fz.K),
            (b.x = c.x),
            (b.y = c.y),
            (a.position.x = this.N.ta.origin.x),
            a.ej(),
            (a.ha.y = -0.04),
            (a.Ob = 0.05),
            a.Y(Se));
          break;
        case 32:
          a = [6, 5, 7][this.g.co];
          switch (a) {
            case 5:
              b = da.translate(y.zv);
              break;
            case 6:
              b = da.translate(y.Gv);
              break;
            case 7:
              b = da.translate(y.Av);
              break;
            default:
              b = null;
          }
          a = this.Tb(Qa.ah(a), b);
          b = a.position;
          c = this.g.Yr;
          b.x = c.x;
          b.y = c.y;
          a.position.y += 2;
          a.ha.y = 0.15;
          a.Bd = -0.4;
          a.ej();
          a.rotation = oc.instance.xF(10);
          a.Qd(0.3, 1);
          break;
        case 35:
          if (Od) break;
          c = this.fr(this.g.Dg.wf);
          a = this.Tb(Qa.Hk, Da.format(this.g.vd));
          b = a.position;
          c = c.K;
          b.x = c.x;
          b.y = c.y;
          a.Qd(0.2, 0.5);
          a.ej();
          break;
        case 36:
          if (Od) break;
          c = this.fr(this.g.Dg.je);
          a = this.Tb(Qa.Hk, Da.format(this.g.vd));
          b = a.position;
          c = c.K;
          b.x = c.x;
          b.y = c.y;
          a.Ob = 0.05;
          a.ha.y = -4;
          a.scale = 1.3;
          a.Qd(1.6, 0);
          break;
        case 37:
          if (Od) break;
          c = this.fr(this.g.Dg.Rc);
          a = this.Tb(Qa.Hk, "");
          a.position.x = c.K.x;
          a.position.y = this.N.ta.origin.y - 4;
          a.ej();
          a.Ob = 0.05;
          a.Y(Te);
          break;
        case 39:
          Od ||
            ((a = this.Tb(Qa.Yv, Da.format(this.g.vd))),
            (b = a.position),
            (c = this.g.Yr),
            (b.x = c.x),
            (b.y = c.y),
            (a.ha.y = -0.15),
            (a.Ob = 0.05),
            a.Qd(0.2, 1),
            a.up(0.5, 0.01, 1.3, za(3)),
            a.tm(0.5, 0.01, 1.3, za(3)),
            a.ej());
      }
    },
    Tb: function (a, b) {
      a = new bc(a, b);
      this.g.Y(null, a);
      return a;
    },
    Jn: function (a, b) {
      var c = this.N.ta.origin;
      a.x = c.x;
      a.y = c.y;
      a.y -= b;
    },
    fr: function (a) {
      return this.N.EE(a.Wg());
    },
    X: function () {
      return 22;
    },
    s: Ue,
  });
  Te.i = !0;
  Te.F = A;
  Te.prototype = C(A.prototype, {
    kc: function () {
      A.prototype.kc.call(this);
      this.text = this.parent;
      this.g = this.text.g;
      this.g.ya(this);
      this.g.Dg.Rc.Wg();
    },
    B: function () {
      this.g.detach(this);
      A.prototype.B.call(this);
    },
    Ia: function (a) {
      if (30 == a.type) {
        a = this.text;
        var b = this.g.find(Da).ky();
        this.points += b;
        0 == a.ha.y ? (a.ha.y = -0.1) : ((this.He += 0.02), 2 < this.He && (this.He = 2));
        a.RB(Da.format(this.points));
        a.alpha = 1;
        a.Qd(0.5, 0);
      }
    },
    U: function (a) {
      this.text.scale += 0.5 * (this.He - this.text.scale);
      A.prototype.U.call(this, a);
    },
    X: function () {
      return 21;
    },
    s: Te,
  });
  Se.i = !0;
  Se.F = A;
  Se.prototype = C(A.prototype, {
    kc: function () {
      A.prototype.kc.call(this);
      this.text = this.parent;
      this.g = this.text.g;
      this.g.ya(this);
    },
    B: function () {
      this.g.detach(this);
      A.prototype.B.call(this);
    },
    Ia: function (a) {
      38 == a.type &&
        ((this.points += this.g.vd),
        this.text.RB(Da.format(this.points)),
        (this.He += 0.02),
        2 < this.He && (this.He = 2),
        (this.text.alpha = 1),
        this.text.Qd(0.5, 0));
    },
    U: function (a) {
      this.text.scale += 0.5 * (this.He - this.text.scale);
      A.prototype.U.call(this, a);
    },
    X: function () {
      return 20;
    },
    s: Se,
  });
  Re.i = !0;
  Re.F = M;
  Re.prototype = C(M.prototype, {
    B: function () {
      this.group.B();
      this.gj.B();
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      switch (a.type) {
        case 16:
          this.wG();
          break;
        case 17:
          this.nB();
      }
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      this.Na.od && 1 > this.Na.fc && ((a = this.Na), a.fa(a.fc + 0.05), 1 < this.Na.fc && this.Na.fa(1));
      a = this.N.ta.clone();
      var b = (2 * this.N.viewport.Oa()) / 106;
      this.group.M(b);
      this.rq.pc(57.29577951308232 * Math.atan2(a.direction.y, a.direction.x) + 90);
      this.N.viewport.xk(a.origin, this.Kc);
      this.group.L(this.Kc.x);
      this.group.O(this.Kc.y);
      this.gj.M(b);
      this.gj.L(this.Kc.x);
      this.gj.O(this.Kc.y);
    },
    pb: function () {
      this.ya();
      this.group = new ia(null, this.g.Bb(1));
      this.Jx = new Q(this.group, 12, "foliage1");
      this.Jx.Ga();
      this.Jx.aa();
      this.rq = new Q(this.group, 12, "cannon");
      this.rq.Ga();
      this.rq.aa();
      this.gj = new Q(this.g.Bb(4), 12, "foliage2");
      this.gj.Ga();
      this.gj.aa();
      this.Na = new Q(this.group, 12, "cannon_bubble_glow");
      this.Na.Ga();
      this.Na.aa();
      this.Na.M(2);
      this.nB();
    },
    wG: function () {
      this.Na.J(!1);
      this.Na.fa(0);
    },
    nB: function () {
      this.Na.J(!0);
      var a = this.g.Ea.xb;
      this.Na.oc(32 == a ? "cannon_bubble_bomb_glow" : 16 == a ? "cannon_bubble_painter_glow" : "cannon_bubble_glow");
    },
    X: function () {
      return 15;
    },
    s: Re,
  });
  Uc.i = !0;
  Uc.F = M;
  Uc.prototype = C(M.prototype, {
    gl: function () {
      var a = this.group.na(this.group),
        b = new E();
      b.x = a.j + 0.5 * (a.u - a.j);
      b.y = a.l + 0.5 * (a.A - a.l);
      return this.group.Me(b, b);
    },
    pb: function () {
      this.ya();
      this.group = new ia(null, this.g.Bb(4));
      this.C = new Q(this.group, 14, Ab);
      this.C.Dc().pk(0);
      this.C.aa();
      this.C.J(!1);
      var a = da.kr() == tf.cl("ru");
      this.le = new va(this.group, a ? Eh : Dh);
      this.le.qk();
      this.le.nd(this.C.Ba(), this.C.ma());
      this.le.ka(a ? "\u0446\u0435\u043f\u044c" : "Chain");
      this.le.Ke();
      this.le.mi(0);
      this.le.L(0);
      this.le.O(0.08 * -this.C.ma());
      this.le.J(!1);
      this.oe = new va(this.group, vf);
      this.oe.qk();
      this.oe.nd(this.C.Ba(), 0.75 * this.C.ma());
      this.oe.ka("1");
      this.oe.Ke();
      this.Wi.j = 0;
      this.Wi.l = 0;
      this.Wi.u = this.C.Ba();
      this.Wi.A = this.C.ma();
      this.oe.L(0);
      this.oe.O(0);
      this.oe.J(!1);
    },
    B: function () {
      this.group.B();
      M.prototype.B.call(this);
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      this.scale += 0.5 * (1 - this.scale);
      this.C.update(a);
    },
    Ka: function (a) {
      M.prototype.Ka.call(this, a);
      this.C.M(this.scale);
    },
    Ia: function (a) {
      switch (a.type) {
        case 6:
          this.resize();
          break;
        case 33:
          1 == this.g.Ab ? (this.C.J(!0), this.le.J(!0), this.oe.J(!0), this.C.Dc().play(sh)) : (this.scale = 1.2);
          this.oe.ka("" + this.g.Ab);
          this.Wi.j = 9 > this.g.Ab ? 0 : 0.1 * this.C.Ba();
          this.oe.nb(this.Wi, 0, 0);
          break;
        case 34:
          this.le.od && (this.le.J(!1), this.oe.J(!1), this.C.Dc().play(th, !0));
      }
    },
    resize: function () {
      var a = this.N.viewport,
        b = a.na(),
        c = (3 * a.Oa()) / this.C.ma();
      this.group.M(c);
      this.group.L(b.u - 1.1 * this.group.Ba());
      this.group.O(a.yk(this.N.ta.origin.y) - 0.6 * this.group.ma());
    },
    X: function () {
      return 30;
    },
    s: Uc,
  });
  Gd.i = !0;
  Gd.Aa = [af];
  Gd.F = M;
  Gd.prototype = C(M.prototype, {
    Fb: function (a) {
      return this.wc.Fb(a) || this.Yc.Fb(a) ? !0 : this.Gc.Fb(a);
    },
    B: function () {
      this.wc.B();
      this.Yc.B();
      this.Gc.B();
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      var b = this;
      switch (a.type) {
        case 6:
          this.resize();
          break;
        case 44:
          if (!(0 > this.g.state || this.g.cf || this.g.isFrozen)) {
            a = this.g.va;
            if (this.wc.od && this.wc.Fb(a)) {
              var c = (B.be = !B.be);
              la.instance.Nc();
              c ? z.ci() : z.Uf();
              this.wc.fa(c ? 1 : 0.5);
              this.Jl();
            }
            this.Yc.od &&
              this.Yc.Fb(a) &&
              ((c = B.Vd = !B.Vd), la.instance.Nc(), c ? wa.ci() : wa.Uf(), this.Yc.fa(c ? 1 : 0.5), this.Jl());
            3 < this.g.Ya &&
              !this.g.Jf &&
              this.Gc.od &&
              this.Gc.Fb(a) &&
              ((this.g.cf = !0),
              S.pause().then(
                function () {
                  b.g.pause();
                },
                function () {
                  b.g.pause();
                }
              ));
          }
      }
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      this.Gc.fa(3 < this.g.Ya && !this.g.Jf ? 1 : 0.5);
    },
    pb: function () {
      this.ya();
      this.Wc = this.g.Bb(6);
      this.wc = new Q(this.Wc, 12, "icon_sound");
      B.be || this.wc.fa(0.5);
      G.Nn() && this.wc.J(!1);
      this.Yc = new Q(this.Wc, 12, "icon_music");
      B.Vd || this.Yc.fa(0.5);
      G.Nn() && this.Yc.J(!1);
      this.Gc = new Q(this.Wc, 12, "icon_pause");
      G.Dy() && this.Gc.J(!1);
      this.g.Po.add(this);
    },
    Jl: function () {
      S.UB(B.Vd ? 1 : 0, B.be ? 1 : 0);
    },
    resize: function () {
      var a = (this.g.N.viewport.Oa() * (this.g.ve ? 2.5 : 2)) / this.wc.ba.x;
      this.wc.M(a);
      this.Yc.M(a);
      this.Gc.M(a);
      a = this.g.Fi;
      var b = a.u - a.j,
        c = this.N.viewport.na();
      a = this.wc.Ba();
      var d = 0.06 * c.l;
      c = G.Nn();
      if (!c || !G.Dy()) {
        var e = 3;
        c && (e = 1);
        switch (this.g.layout) {
          case "ELandscape":
            this.Yc.L(b - 1.1 * a);
            this.Yc.O(0);
            this.wc.L(b - 2.2 * a);
            this.wc.O(0);
            this.Gc.L(b - e * a * 1.1);
            this.Gc.O(0);
            d = b - this.N.viewport.na().u;
            d < 4 * a &&
              ((b = this.wc),
              b.L(b.ga - d),
              (b = this.Yc),
              b.L(b.ga - d),
              (b = this.Gc),
              b.L(b.ga - d),
              c && (this.Gc.O(0), (b = this.Gc), b.L(b.ga + d)));
            break;
          case "ENarrowLandscape":
          case "EPortrait":
          case "EWidePortrait":
            this.Yc.L(b - 1.1 * a),
              this.Yc.O(d),
              this.wc.L(b - 2.2 * a),
              this.wc.O(d),
              this.Gc.L(b - e * a * 1.1),
              this.Gc.O(d);
        }
        "ENarrowLandscape" == this.g.layout &&
          ((d = 0.5 * a),
          (b = this.wc),
          b.L(b.ga - d),
          (b = this.Yc),
          b.L(b.ga - d),
          c || ((b = this.Gc), b.L(b.ga - d)),
          this.wc.O(this.Yc.O(this.Gc.O(0.1 * a))));
      }
    },
    X: function () {
      return 32;
    },
    s: Gd,
  });
  Qe.i = !0;
  Qe.F = M;
  Qe.prototype = C(M.prototype, {
    kc: function () {
      M.prototype.kc.call(this);
      this.bt = !0;
    },
    B: function () {
      this.Bc.B();
      this.green.B();
      this.Ci.B();
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      6 == a.type && this.resize();
    },
    pb: function () {
      this.ya();
      var a = this.g.Bb(0);
      this.Bc = new Q(a, 23);
      this.green = new Q(a, 15);
      a = this.g.Bb(5);
      this.Ci = new Q(a, 9);
    },
    resize: function () {
      var a = this.N.viewport.na(),
        b = this.g.Fi,
        c = b.u - b.j,
        d = b.A - b.l;
      b = this.g.xc.te();
      var e = this.Bc.ba.x;
      var f = this.Bc.ba.y,
        g = c / e,
        h = (a.A - a.l) / f;
      g < h
        ? ((f = a.A - a.l),
          (c = -(h * e - c) / 2),
          (e = a.A - f),
          this.Bc.M(h),
          1.5 < d / b.x &&
            "EPortrait" == this.g.layout &&
            this.bt &&
            (0.25 > Math.random()
              ? ((c -= 0.75 * c), (this.bt = !1))
              : 0.75 < Math.random() && ((c += 0.75 * c), (this.bt = !1))))
        : ((c = 0), (e = a.A - a.l - g * f), this.Bc.M(g));
      this.Bc.L(c);
      this.Bc.O(e);
      this.green.M(b.x / this.green.ba.x);
      this.green.L(0);
      this.green.O(a.A - 100 * this.green.pa);
      e = (d = 0 == a.l) ? a.u - a.j : b.x;
      this.Ci.L(d ? a.j : 0);
      this.Ci.O(a.l);
      this.Ci.M(e / this.Ci.ba.x);
      a = this.Ci;
      a.O(a.qa - 0.85 * this.Ci.ma());
    },
    X: function () {
      return 26;
    },
    s: Qe,
  });
  Pe.i = !0;
  Pe.F = M;
  Pe.prototype = C(M.prototype, {
    B: function () {
      this.Ff.B();
      M.prototype.B.call(this);
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      if (!(0 > this.g.state)) {
        var b = this.g.va.x,
          c = this.g.va.y,
          d = this.va.x - b,
          e = this.va.y - c;
        this.va.x = b;
        this.va.y = c;
        1 > d * d + e * e
          ? ((this.zg += a), 0.075 < this.zg && (this.yr = !0), this.yr && (this.alpha += 0.1))
          : ((this.yr = !1), (this.alpha *= 0.9));
        1 < this.alpha && (this.alpha = 1);
        0 > this.alpha && (this.alpha = 0);
        a = this.N.ta.clone();
        b = this.N.ek;
        b.ic = 0;
        b.ic |= 2;
        b.rA(a, 1, 3);
        a = b.result.So;
        null != a ? ((b = this.N.viewport), this.Ff.L(b.Wt(a.x)), this.Ff.O(b.yk(a.y))) : (this.alpha *= 0.9);
        a = this.g.Ea.xb;
        a =
          4 >= (a & -65)
            ? "laser_end_point_" + this.g.vh(a)
            : 8 == a
            ? "laser_end_point_fireball"
            : 16 == a
            ? "laser_end_point_painter"
            : 32 == a
            ? "laser_end_point_bomb"
            : null;
        this.Ff.M(((2 * this.N.viewport.Oa()) / 106) * 1.1);
        this.Ff.fa(this.alpha);
        this.Ff.oc(a);
      }
    },
    pb: function () {
      this.Ff = new Q(this.g.Bb(3), 12, "laser_end_point_1");
      this.Ff.Ga();
      this.Ff.aa();
      this.Ff.Tc().add();
      var a = this.va,
        b = this.g.va;
      a.x = b.x;
      a.y = b.y;
    },
    X: function () {
      return 31;
    },
    s: Pe,
  });
  Oe.i = !0;
  Oe.F = M;
  Oe.prototype = C(M.prototype, {
    B: function () {
      this.ia.B();
      M.prototype.B.call(this);
    },
    U: function (a) {
      this.ia.K.x = this.N.ta.origin.x + -3.2;
      this.ia.K.y = this.N.ta.origin.y + 0.72;
      var b = this.ia.scale.b;
      0.75 > b && ((b += 0.6 * (0.75 - b)), 0.75 < b && (b = 0.75));
      var c = this.ia.scale;
      c.a = c.b;
      c.b = b;
      M.prototype.U.call(this, a);
    },
    Ia: function (a) {
      switch (a.type) {
        case 16:
          this.view.C.fa(0);
          break;
        case 17:
          this.ia.Si(this.g.Ea.hf);
          this.view.C.fa(1);
          a = this.ia.scale;
          a.a = a.b = 0.1;
          break;
        case 19:
        case 31:
          this.ia.Si(this.g.Ea.hf);
      }
    },
    pb: function () {
      this.ya();
      this.ia = new yb(this.N);
      this.ia.code = this.g.Ea.hf;
      this.ia.f.dh = !0;
      this.ia.f.loaded = !0;
      var a = this.ia.scale;
      a.a = a.b = 0.75;
      a = new Tb(this.ia);
      this.view = new aa();
      a.Y(null, this.view);
      this.Y(null, a);
    },
    X: function () {
      return 13;
    },
    s: Oe,
  });
  Ne.i = !0;
  Ne.F = M;
  Ne.prototype = C(M.prototype, {
    B: function () {
      for (var a = 0, b = this.Hc; a < b.length; ) b[a++].B();
      a = 0;
      for (b = this.eg; a < b.length; ) b[a++].B();
      a = 0;
      for (b = this.rb; a < b.length; ) b[a++].B();
      this.ph.B();
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      switch (a.type) {
        case 6:
          this.resize();
          break;
        case 16:
          8 == this.N.Od.m[0].code && (this.vn = 3);
          break;
        case 21:
          this.Xd[0] -= 0.2 * this.N.viewport.Oa();
          break;
        case 22:
          this.Xd[1] += 0.2 * this.N.viewport.Oa();
          break;
        case 24:
          (this.vn = 1), (this.Rd = 0), this.ph.J(!0), this.rb[0].Dc().play(ah), this.rb[1].Dc().play(ah);
      }
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      this.Ql &&
        (this.Hc[0].L(this.view.j + this.Xd[0]),
        this.Hc[1].L(this.view.u + this.Xd[1]),
        (this.Xd[0] *= 0.5),
        (this.Xd[1] *= 0.5));
      switch (this.vn) {
        case 1:
          this.Rd += 0.1;
          1 <= this.Rd && ((this.Rd = 1), (this.vn = 2));
          this.rb[0].fa(this.Rd);
          this.rb[1].fa(this.Rd);
          break;
        case 3:
          (this.Rd -= 0.1),
            0 >= this.Rd && ((this.vn = this.Rd = 0), this.ph.J(!1)),
            this.rb[0].fa(this.Rd),
            this.rb[1].fa(this.Rd);
      }
      this.rb[0].update(a);
      this.rb[1].update(a);
    },
    pb: function () {
      this.Wc = this.g.Bb(4);
      this.Xd = Array(2);
      this.Xd[0] = 0;
      this.Xd[1] = 0;
      this.Hc = Array(2);
      var a = new Q(this.Wc, 12, "pole_l");
      a.dg(a.Ba() / 2);
      a.rk(a.Ba() / 2);
      this.Hc[0] = a;
      a = new Q(this.Wc, 12, "pole_r");
      a.dg(a.Ba() / 2);
      a.rk(a.Ba() / 2);
      this.Hc[1] = a;
      this.ph = new ia(null, this.Wc);
      this.ph.Tc().add();
      this.rb = Array(2);
      a = new Q(this.ph, 13, Ab);
      a.dg(a.Ba() / 2);
      a.aa();
      a.fa(0);
      a.Tc().add();
      this.rb[0] = a;
      a = new Q(this.ph, 13, Ab);
      a.dg(a.Ba() / 2);
      a.aa();
      a.fa(0);
      a.Tc().add();
      this.rb[1] = a;
      this.ph.J(!1);
      this.eg = Array(2);
      this.eg[0] = new Q(this.Wc, 12, "stone_l");
      this.eg[1] = new Q(this.Wc, 12, "stone_r");
      this.ya();
    },
    resize: function () {
      this.view = this.N.viewport.na();
      for (var a = this.N.viewport.Oa(), b = 12 * a, c = 0, d = this.rb; c < d.length; ) {
        var e = d[c];
        ++c;
        e.M(1);
        e.RI();
        e.QI();
        e.rk(e.Ba() / 2);
        e.dg(e.Ba() / 2);
        e.M(b / e.ma());
      }
      b = 2 * a;
      a *= 2;
      var f = this.g.Fi;
      c = this.view;
      if ((this.Ql = 5 < (f.u - f.j - (c.u - c.j)) / 2)) {
        c = 0;
        for (d = this.Hc; c < d.length; )
          (e = d[c]), ++c, (f = this.view), e.M((0.95 * (f.A - f.l)) / e.ba.y), e.O(this.view.l);
        this.rb[0].L(this.view.j);
        this.rb[1].L(this.view.u);
        this.rb[0].O(this.Hc[0].qa + this.Hc[0].ma() - this.rb[0].ma());
        this.rb[1].O(this.Hc[1].qa + this.Hc[1].ma() - this.rb[1].ma());
        c = 0;
        for (d = this.eg; c < d.length; )
          (e = d[c]),
            ++c,
            e.J(!1),
            e.M(1),
            e.aa(),
            e.Ga(),
            e.M(b / e.ma()),
            e.O(this.Hc[0].qa + 0.98 * this.Hc[0].ma());
        this.eg[0].L(this.view.j);
        this.eg[1].L(this.view.u);
      } else {
        this.rb[0].L(this.view.j + a);
        this.rb[0].O(this.view.A - this.rb[0].ma());
        this.rb[1].L(this.view.u - a);
        this.rb[1].O(this.view.A - this.rb[1].ma());
        c = 0;
        for (d = this.eg; c < d.length; )
          (e = d[c]), ++c, e.J(!0), e.M(1), e.aa(), e.Ga(), e.M(b / e.ma()), e.O(this.view.A - b / 4);
        this.eg[0].L(this.view.j + a);
        this.eg[1].L(this.view.u - a);
      }
      this.Hc[0].J(this.Ql);
      this.Hc[1].J(this.Ql);
      this.Hc[0].L(this.view.j);
      this.Hc[1].L(this.view.u);
    },
    X: function () {
      return 27;
    },
    s: Ne,
  });
  Me.i = !0;
  Me.F = M;
  Me.prototype = C(M.prototype, {
    B: function () {
      this.wa.B();
      this.wa = null;
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      switch (a.type) {
        case 6:
          this.resize();
          break;
        case 9:
          this.f = (this.f & -2) | 1;
      }
    },
    U: function (a) {
      this.gb != this.g.gb && ((this.Je = 1.3), (this.gb = this.g.gb), this.vm());
      this.Je += 0.5 * (1 - this.Je);
      M.prototype.U.call(this, a);
    },
    Ka: function (a) {
      M.prototype.Ka.call(this, a);
      this.wa.M(this.Je);
    },
    pb: function () {
      this.ya();
      this.wa = new va(this.g.Bb(6), Nd);
      this.f = (this.f & -2) | 0;
    },
    resize: function () {
      var a = this.N.viewport,
        b = a.na();
      switch (this.g.layout) {
        case "ELandscape":
        case "ENarrowLandscape":
          this.wa.cc(Nd);
          var c = b.j;
          a = 8 * a.Oa();
          this.wa.nd(c, a);
          this.wa.qk();
          this.wa.$c((a / 2) | 0);
          this.ja.j = 0;
          this.ja.u = c;
          this.ja.l = 0.1 * (b.A - b.l);
          this.ja.A = this.ja.l + a;
          break;
        case "EPortrait":
        case "EWidePortrait":
          this.wa.cc(vf),
            (a = b.l),
            this.wa.nd(0.5 * (b.u - b.j), a),
            this.wa.qk(),
            this.wa.$c((1.6 * this.wa.ra.size) | 0),
            (c = new W()),
            (c.j = b.j),
            (c.l = 0.05 * b.l),
            (c.u = b.u),
            (c.A = a),
            (this.ja = c);
      }
      this.wa.nb(this.ja, 0, 0);
      this.wa.ka(Da.format(1e7));
      this.wa.Ke();
      this.vm();
    },
    vm: function () {
      this.wa.ka(Da.format(this.gb));
      this.wa.nb(this.ja, 0, 0);
      this.wa.aa();
    },
    X: function () {
      return 28;
    },
    s: Me,
  });
  Le.i = !0;
  Le.F = M;
  Le.prototype = C(M.prototype, {
    B: function () {
      this.C.B();
      this.C = null;
      M.prototype.B.call(this);
    },
    pb: function () {
      this.C = new Q(this.g.Bb(1), 11, Ab);
      this.C.aa();
      this.C.Ga();
      this.C.Dc().pk(0);
      this.ya();
    },
    Ia: function (a) {
      M.prototype.Ia.call(this, a);
      switch (a.type) {
        case 16:
          this.C.Dc().play(fh);
          break;
        case 32:
          this.C.Dc().play(gh);
      }
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      var b = this.N.ta.clone(),
        c = this.N.viewport,
        d = ((2 * c.Oa()) / 106) * 1.1,
        e = b.origin.x - 5.6;
      b = b.origin.y - 1;
      e = c.Wt(e);
      b = c.yk(b);
      this.C.L(e);
      this.C.O(b);
      this.C.M(d);
      this.C.update(a);
    },
    X: function () {
      return 17;
    },
    s: Le,
  });
  var Qa = (Mb.e0 = {
    hg: !0,
    Oc: null,
    ah:
      ((N = function (a) {
        return { G: 0, type: a, H: "e0", toString: H };
      }),
      (N.I = "TypeAnnouncer"),
      (N.hb = ["type"]),
      N),
    Hk: { I: "e00", G: 1, H: "e0", toString: H },
    Yv: { I: "e01", G: 2, H: "e0", toString: H },
    Xv: { I: "e02", G: 3, H: "e0", toString: H },
  });
  Qa.Oc = [Qa.ah, Qa.Hk, Qa.Yv, Qa.Xv];
  bc.i = !0;
  bc.F = M;
  bc.prototype = C(M.prototype, {
    ej: function () {
      this.fixed = !0;
      this.N.viewport.lL(this.position);
    },
    RB: function (a) {
      this.Jc.J(!0);
      this.Jc.ka(a);
      this.Jc.nb(this.nm, 0, 0);
    },
    Qd: function (a, b) {
      this.time = 0;
      this.nF = a;
      this.tn = b;
    },
    tm: function (a, b, c, d) {
      this.scale = b;
      this.Y(null, new Tc(a, c, d, 0));
    },
    up: function (a, b, c, d) {
      this.alpha = b;
      this.Y(null, new Tc(a, c, d, 1));
    },
    QK: function (a, b, c, d) {
      this.rotation = b;
      this.Y(null, new Tc(a, c, d, 2));
    },
    pb: function () {
      var a = this.N.viewport,
        b = 20 * a.Oa(),
        c = 4 * a.Oa(),
        d = this.rK;
      switch (d.G) {
        case 0:
          a = d.type;
          switch (a) {
            case 2:
            case 5:
            case 6:
            case 7:
              c *= 0.75;
          }
          d = new W();
          d.j = -b / 2;
          d.l = -c / 2;
          d.u = b / 2;
          d.A = c / 2;
          this.nm = d;
          switch (a) {
            case 0:
            case 1:
            case 6:
              var e = yh;
              break;
            case 2:
              e = Ah;
              break;
            case 3:
            case 4:
              e = Ch;
              break;
            case 5:
              e = Bh;
              break;
            case 7:
              e = zh;
          }
          this.outline = new va(this.group, xh);
          this.outline.nd(b, c);
          this.outline.ka(this.text);
          this.outline.$c(200);
          this.outline.Ke();
          this.outline.nb(this.nm, 0, 0);
          this.Jc = new va(this.group, e);
          this.Jc.nd(b, c);
          this.Jc.ka(this.text);
          this.Jc.$c(200);
          this.Jc.Ke();
          this.Jc.nb(this.nm, 0, 0);
          break;
        case 1:
        case 2:
          b = 4 * a.Oa();
          c = 2.2 * a.Oa();
          d = new W();
          d.j = -b;
          d.l = -c;
          d.u = b;
          d.A = c;
          this.nm = d;
          this.Jc = new va(this.group, Fh);
          "" == this.text && ((this.text = "00000"), this.Jc.J(!1));
          this.Jc.nd(b, c);
          this.Jc.$c(200);
          this.Jc.ka(this.text);
          this.Jc.Ke();
          this.Jc.nb(this.nm, 0, 0);
          break;
        case 3:
          (this.C = new Q(this.group, 12, "extra_time")), this.C.Ga(), this.C.aa(), this.C.M(c / this.C.ma());
      }
      this.g.Bb(7).appendChild(this.group);
    },
    kc: function () {
      M.prototype.kc.call(this);
      this.ya();
    },
    B: function () {
      this.group.B();
      this.text = this.C = this.outline = this.Jc = this.group = null;
      bc.Ii--;
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      6 == a.type && this.B();
    },
    U: function (a) {
      this.force.y += this.Bd;
      switch (this.$a) {
        case 0:
          this.tn -= a;
          0 > this.tn && ((this.time = 0), (this.$a = 1));
          break;
        case 1:
          if (((this.alpha = 1 - this.mF(this.ef(this.nF))), 0 == this.alpha)) {
            this.B();
            return;
          }
      }
      this.ha.x += this.force.x * a;
      this.ha.y += this.force.y * a;
      var b = this.Ob;
      0 < b && ((this.ha.x *= 1 - b), (this.ha.y *= 1 - b));
      this.position.x += this.ha.x * a;
      this.position.y += this.ha.y * a;
      this.force.x = 0;
      this.force.y = 0;
      M.prototype.U.call(this, a);
    },
    Ka: function (a) {
      var b = this.group;
      b.fa(this.alpha);
      b.M(this.scale);
      b.pc(this.rotation);
      if (this.fixed) {
        var c = this.$d,
          d = this.position;
        c.x = d.x;
        c.y = d.y;
        this.N.viewport.zH(this.$d);
      } else this.N.viewport.xk(this.position, this.$d);
      b.L(this.$d.x);
      b.O(this.$d.y);
      M.prototype.Ka.call(this, a);
    },
    X: function () {
      return 24;
    },
    s: bc,
  });
  Tc.i = !0;
  Tc.F = A;
  Tc.prototype = C(A.prototype, {
    U: function (a) {
      A.prototype.U.call(this, a);
      a = this.ef(this.duration);
      var b = this.parent,
        c = this.easing(a) * this.target;
      switch (this.uI) {
        case 0:
          b.scale = c;
          break;
        case 1:
          b.alpha = c;
          break;
        case 2:
          b.rotation = c;
      }
      1 == a && this.B();
    },
    X: function () {
      return 23;
    },
    s: Tc,
  });
  vc.i = !0;
  vc.F = M;
  vc.prototype = C(M.prototype, {
    gl: function () {
      var a = this.group.na(this.group),
        b = new E();
      b.x = a.j + 0.5 * (a.u - a.j);
      b.y = a.l + 0.5 * (a.A - a.l);
      a = new E();
      a.x = 0;
      a.y = 0;
      return this.group.Me(b, a);
    },
    pb: function () {
      this.ya();
      this.group = new ia(null, this.g.Bb(6));
      this.Ui = new Q(this.group, 12, "clockface");
      for (var a = rb.Zw("", 1, 12), b = 0; 12 > b; ) {
        var c = b++,
          d = new Q(this.group, 16, a[c]);
        d.L(167);
        d.O(91);
        d.Ga();
        d.aa();
        d.M(2);
        d.J(!1);
        this.zf[c] = d;
      }
      this.Jh = 11;
      this.zf[this.Jh].J(!0);
      b = new W();
      b.j = 137;
      b.l = 61;
      b.u = 197;
      b.A = 121;
      this.nt = b;
      this.bg = new va(this.group, vf);
      this.wa = new va(this.group, Nd);
      this.f = (this.f & -2) | 0;
      Og && this.wa.J(!1);
      if (Md) for (this.bg.J(!1), this.Ui.J(!1), b = 0, a = this.zf; b < a.length; ) a[b++].J(!1);
    },
    B: function () {
      this.group.B();
      this.wa = this.bg = this.zf = this.Ui = this.group = null;
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      switch (a.type) {
        case 6:
          this.resize();
          break;
        case 9:
          this.f = (this.f & -2) | 1;
          break;
        case 11:
          this.jk = 1.3;
          this.zf[this.Jh].J(!1);
          break;
        case 15:
          this.blink = !0;
          this.Qk = 0;
          break;
        case 27:
          this.jk = 1.3;
      }
    },
    U: function (a) {
      var b = Math.round(this.g.Ya);
      this.mt != b && ((this.mt = b), this.eu());
      this.gb != this.g.gb && ((this.Je = 1.3), (this.gb = this.g.gb), this.vm());
      this.Je += 0.5 * (1 - this.Je);
      this.jk += 0.1 * (1 - this.jk);
      0 >= this.g.Ya ||
        (Md ||
          ((b = this.g.Ya),
          (b = 0 >= b ? -1 : (b / 5) | 0),
          11 < b && (b = 11),
          b != this.Jh && (this.zf[this.Jh].J(!1), -1 != b && (this.zf[b].J(!0), (this.Jh = b))),
          this.blink &&
            ((b = 0.25),
            5 > this.g.Ya && (b = 0.125),
            (this.Qk += a),
            this.Qk > b && ((this.Qk -= b), this.zf[this.Jh].J(!this.zf[this.Jh].od)))),
        M.prototype.U.call(this, a));
    },
    Ka: function (a) {
      M.prototype.Ka.call(this, a);
      this.wa.M(this.Je);
      this.bg.M(this.jk);
    },
    resize: function () {
      var a = this.g.layout,
        b = -1 == this.gn,
        c = "EPortrait" == this.gn || "EWidePortrait" == this.gn;
      switch (a) {
        case "ELandscape":
        case "ENarrowLandscape":
          (b || c) && this.GK();
          this.bL();
          break;
        case "EPortrait":
        case "EWidePortrait":
          (!b && c) || this.HK(), this.cL();
      }
      this.gn = a;
    },
    HK: function () {
      this.group.M(1);
      null != this.Ym && this.group.removeChild(this.Ym);
      this.kw();
      var a = this.group.vb();
      this.group.removeChild(this.wa);
      a.appendChild(this.wa);
      this.wa.cc(vf);
    },
    cL: function () {
      var a = this.N.viewport,
        b = a.na();
      a = P.min(0.8 * b.l, 4 * a.Oa());
      this.group.M(1);
      a /= this.group.ma();
      this.group.M(a);
      this.group.L(0.02 * -this.group.Ba());
      this.group.O(0.4 * b.l);
      this.wa.nd(0.5 * (b.u - b.j), b.l);
      this.wa.qk();
      this.wa.$c((1.6 * this.wa.ra.size) | 0);
      this.wa.ka(Da.format(1e7));
      this.wa.Ke();
      this.wa.ka(Da.format(this.gb));
      a = b.j;
      var c = 0.05 * b.l;
      b = b.u;
      var d = this.group.qa + this.group.ma(),
        e = new W();
      e.j = a;
      e.l = c;
      e.u = b;
      e.A = d;
      this.Qg = e;
      this.wa.nb(this.Qg, 0, 0);
      this.eu();
    },
    GK: function () {
      this.kw();
      Md ||
        ((this.Ym = new Q(null, 12, "clockface_score")), this.Ym.O(0.75 * this.Ui.ma()), this.Ui.vb().Nk(this.Ym, 0));
      this.wa.remove();
      this.group.appendChild(this.wa);
      this.wa.cc(Nd);
      var a = this.Ui.Ba(),
        b = this.Ui.ma();
      this.Qg.j = -20;
      this.Qg.u = a + 20;
      this.Qg.l = 105 + b - 80;
      this.Qg.A = 105 + b;
      this.wa.cc(Nd);
      this.wa.nd(a + 20, 80);
      this.wa.ka(Da.format(1e6));
      this.wa.Ke();
      this.wa.nb(this.Qg, 0, 0);
    },
    bL: function () {
      var a = this.N.viewport;
      this.group.M(1);
      var b = a.na();
      a = (8 * a.Oa()) / this.group.ma();
      this.group.M(a);
      1.05 * this.group.Ba() > b.j && (this.group.M(1), this.group.M((0.9 * b.j) / this.group.Ba()));
      this.group.L(b.j - 1.05 * this.group.Ba());
      this.group.O(0.1 * (b.A - b.l));
      this.vm();
    },
    kw: function () {
      this.bg.ka(Aa.ab(Je));
      this.bg.Ke();
      this.bg.nb(this.nt, 0, 0);
      this.eu();
    },
    eu: function () {
      this.bg.ka(Aa.ab(this.mt));
      this.bg.nb(this.nt, 0, 0);
      this.bg.aa();
    },
    vm: function () {
      this.wa.ka(Da.format(this.gb));
      this.wa.nb(this.Qg, this.cJ, 0);
      this.wa.aa();
    },
    X: function () {
      return 29;
    },
    s: vc,
  });
  Ie.i = !0;
  Ie.F = M;
  Ie.prototype = C(M.prototype, {
    B: function () {
      this.C.B();
      this.C = null;
      M.prototype.B.call(this);
    },
    Ia: function (a) {
      6 == a.type && this.resize();
    },
    U: function (a) {
      M.prototype.U.call(this, a);
      this.C.update(a);
    },
    Ka: function (a) {
      M.prototype.Ka.call(this, a);
      if (this.align) {
        this.align = !1;
        this.group.M(1);
        this.C.Ga();
        this.C.aa();
        var b = this.N.viewport;
        a = 3 * b.Oa();
        this.group.M(a / this.cK);
        var c = this.parent.find(vc);
        null != c
          ? ((b = c.group.na()), this.group.L(b.j + 0.5 * (b.u - b.j)), this.group.O(b.A + 0.75 * a))
          : ((b = b.ja), this.group.L(b.j + 1.5 * this.C.Ba()), this.group.O(b.l + 2 * this.C.ma()));
      }
    },
    pb: function () {
      this.ya();
      this.group = new ia(null, this.g.Bb(6));
      this.C = new Q(this.group, 12, "achievement");
      this.cK = this.C.Ba();
      this.resize();
      this.C.fa(0);
      this.C.M(0.1);
      this.C.Fa().alpha(1, 0.5, za(2));
      this.C.Fa().fg(1, 0.5, ec(0.2));
    },
    resize: function () {
      this.align = !0;
    },
    X: function () {
      return 35;
    },
    s: Ie,
  });
  xa.i = !0;
  xa.F = A;
  xa.prototype = C(A.prototype, {
    fb: function () {
      for (var a = this.parent; null != a; ) {
        if (a instanceof Ka) return a;
        a = a.parent;
      }
      return null;
    },
    cb: function (a) {
      a = Ac.cn(a);
      a.caller = this;
      a.sj = this.lf;
      a.Sr = !0;
      var b = this.fb().find(xa, null, !1);
      null == b ? this.fb().Y(null, a) : zb.Qy(b, a);
    },
    ND: function (a) {
      a = Ac.cn(a);
      a.caller = this;
      a.sj = this.lf;
      a.Xy = !0;
      a.caller = this;
      this.Y(null, a);
    },
    B: function () {
      oa.Pb().detach(J(this, this.Qb));
      oa.If().detach(J(this, this.Vf));
      this.ng(7);
      A.prototype.B.call(this);
      null != this.node && this.node.B();
      this.node = null;
    },
    U: function (a) {
      this.f |= 3;
      0 < this.wi && ((this.wi -= a), 0 >= this.wi && ((this.wi = 0), this.start(), this.$o()));
      this.zp();
      A.prototype.U.call(this, a);
    },
    kc: function () {
      if (this.Sr) {
        var a = this.fb().find(xa, null, !1);
        if (this == a) (this.caller = null), (this.Ne = 0);
        else {
          for (a = a.kl(); 0 < a.length; ) {
            var b = a.pop();
            3 == b.Ie && b.pause();
          }
          this.Ne = 2;
        }
      } else this.Xy && ((this.caller = this.parent), this.caller.pause(), (this.Ne = 0), (this.Xy = !1));
      a = this.RF();
      0 < a.length
        ? ((b = this.Ww()), (b.Un = this), (b.EG = a), this.parent.Y(null, b), (this.tl = !0))
        : ((this.Sr = this.tl = !1), this.create(), 0 == this.wi && (this.start(), this.$o()));
    },
    finish: function () {
      for (var a = this.kl(), b = !1; 0 < a.length; ) {
        var c = a.pop();
        3 == c.Ie && c.pause();
        c.Fh() && (b = !0);
      }
      a = this.parent;
      null != a && ((a.caller = this), (a.sj = this.lf), b && a instanceof xa && (a.UI(), a.start()));
      this.Ne = 1;
      this.$o();
    },
    create: function () {
      this.ng(1);
      this.node = new ia("node{" + this.name + "}");
      this.Bc = new ia("bg", this.node);
      this.Bc.J(!1);
      this.canvas = new ia("canvas", this.node);
      this.canvas.J(!1);
      this.zd = new ia("fg", this.node);
      this.zd.J(!1);
      this.ob();
    },
    start: function () {
      this.ng(2);
      null == this.node.node.parent &&
        (this.parent instanceof Ka
          ? this.fb().canvas.appendChild(this.node.node)
          : this.parent.node.appendChild(this.node));
      this.canvas.J(this.Bc.J(this.zd.J(!0)));
      this.De();
    },
    UI: function () {
      this.ng(4);
    },
    resume: function () {
      this.ng(3);
      oa.Pb().ya(J(this, this.Qb));
      oa.If().ya(J(this, this.Vf));
      this.yb();
    },
    pause: function () {
      this.ng(5);
      oa.Pb().detach(J(this, this.Qb));
      oa.If().detach(J(this, this.Vf));
      this.Ml();
    },
    stop: function () {
      this.ng(6);
      var a = this.find($a, null, !1);
      null != a && a.Fh()
        ? this.canvas.J(this.Bc.J(this.zd.J(!1)))
        : ((a = this.kl().pop()),
          a == this && (a = null),
          null != a && a.Fh() ? this.canvas.J(this.Bc.J(this.zd.J(!1))) : this.node.remove());
    },
    ob: function () {},
    De: function () {},
    SL: function () {},
    yb: function () {},
    Ml: function () {},
    TL: function () {},
    Qb: function () {},
    Vf: function () {},
    Jo: function () {},
    Pa: function () {},
    nl: function () {
      return 0;
    },
    Fh: function () {
      return !0;
    },
    Ww: function () {
      return new $a();
    },
    re: function () {
      return [];
    },
    zp: function () {
      var a = this;
      switch (this.Ak) {
        case 1:
          var b = this.fb().find(null, function (e) {
            return e instanceof xa ? e != a : !1;
          });
          2 != this.Ne && (b = this.parent);
          this.Jo(0, this.Ne, b);
          this.time = 0;
          this.Ak = 2;
          this.VB();
          break;
        case 2:
          if (0 == this.time) break;
          b = null;
          switch (this.Ne) {
            case 0:
            case 1:
              b = this.parent;
              break;
            case 2:
              b = this.fb().find(xa, null, !1);
          }
          var c = Math.min(this.time / this.nl(), 1);
          0.5 < c && 0.5 > this.iA && this.Jo(0.5, this.Ne, b);
          this.Jo(c, this.Ne, b);
          this.iA = c;
          1 == c && ((this.Ak = 3), this.VB());
          break;
        case 3:
          switch (((this.Ak = 0), this.Ne)) {
            case 0:
              if (this.Fh())
                for (c = this.parent; null != c && !(c instanceof Ka); ) 5 == c.Ie && c.stop(), (c = c.parent);
              this.resume();
              break;
            case 1:
              c = this.parent;
              b = this.kl();
              for (var d = b.length; 0 < d; ) 6 != b[--d].Ie && b[d].stop();
              for (d = b.length; 0 < d; ) b[--d].B();
              c instanceof xa && c.resume();
              break;
            case 2:
              for (b = this.fb().find(xa, null, !1).kl(); 0 < b.length; ) (c = b.pop()), 5 == c.Ie && c.stop(), c.B();
              this.resume();
          }
      }
    },
    $o: function () {
      this.Ak = 0 < this.nl() && Zh ? 1 : 3;
      this.zp();
    },
    ng: function (a) {
      this.Ie = a;
    },
    RF: function () {
      for (var a = [], b = 0, c = this.re(); b < c.length; ) {
        var d = c[b];
        ++b;
        (x.Yn(d) && null == x.rh()) || x.pl(d) || a.push(d);
      }
      return a;
    },
    uL: function () {
      return this.parent;
    },
    kl: function () {
      for (var a = [this], b = this.da; null != b; ) b instanceof xa ? (a.push(b), (b = b.da)) : (b = b.W);
      return a;
    },
    toString: function () {
      return "{Scene " + this.name + "}";
    },
    X: function () {
      return 4;
    },
    s: xa,
  });
  R.i = !0;
  R.F = xa;
  R.prototype = C(xa.prototype, {
    Ww: function () {
      return new Dd();
    },
    re: function () {
      return [2, 1, 4, 25, 24, 3];
    },
    nl: function () {
      return 0.5;
    },
    Jo: function (a, b, c) {
      switch (b) {
        case 0:
          this.node.fa(a);
          break;
        case 1:
          this.node.fa(1 - a);
          break;
        case 2:
          0 == a
            ? ((this.transition = new Zf(this, c)), this.transition.update(a))
            : (this.transition.update(a), 1 == a && (this.transition.B(), (this.transition = null)));
      }
    },
    ob: function () {
      xa.prototype.ob.call(this);
      this.SD();
      this.Ft();
    },
    De: function () {
      xa.prototype.De.call(this);
      this.Pa();
    },
    mI: function () {
      var a = Object.create(ab.prototype).re();
      new hb().load(a);
    },
    Pa: function () {
      xa.prototype.Pa.call(this);
      var a = this.fb().te();
      if (null != this.Ra) {
        var b = new W();
        b.j = 0;
        b.l = 0;
        b.u = a.x;
        b.A = a.y;
        this.Ra.La(b);
      }
      null != this.Ta && this.Ta.resize(a);
      this.QD(a);
      a = this.Qt.P;
      b = Object.keys(a);
      for (var c = b.length, d = 0; d < c; ) a[b[d++]].Ad();
    },
    NB: function () {
      var a = this.fb().te();
      if (null != this.Ra) {
        var b = new W();
        b.j = 0;
        b.l = 0;
        b.u = a.x;
        b.A = a.y;
        this.Ra.La(b);
      }
    },
    SD: function () {
      function a(d) {
        return x.pl(d) && !b.fb().Fy(d) ? (b.fb().createTexture(d), !0) : !1;
      }
      var b = this;
      a(4);
      a(2);
      a(5);
      if (a(1)) {
        var c = this.fb().Hf(1).py();
        ch = c[0].id;
        Gh = c[1].id;
        Hh = c[2].id;
        Ug = c[3].id;
        Ih = c[4].id;
        Jh = c[5].id;
        Kh = c[6].id;
        ob = c[7].id;
        Pd = c[8].id;
        Lh = c[9].id;
        jb = c[10].id;
        wf = c[11].id;
        $b = c[12].id;
        Mh = c[13].id;
        Na = c[14].id;
        dh = c[15].id;
      }
    },
    Ft: function () {
      null == this.backgroundImage &&
        ((this.backgroundImage = new Q(null, 4)), this.Bc.appendChild(this.backgroundImage));
    },
    QD: function (a) {
      var b = this.backgroundImage;
      if (null != b) {
        b.M(1);
        var c = a.x / b.Ba(),
          d = a.y / b.ma();
        c < d
          ? (b.M(d), 0.6 > a.x / a.y ? b.L((a.x - b.Ba()) / 2) : b.L(-(b.Ba() - a.x) / 2), b.O(0))
          : (b.M(c), b.L(0), b.O(-(b.ma() - a.y) / 2));
      }
    },
    pf: function (a) {
      if (!x.pl(3)) return null;
      var b = JSON.parse(x.getData(3));
      b = U.Z(b, a);
      return null == b ? null : (this.Ra = new Yf(b).read());
    },
    Gt: function (a, b, c, d, e) {
      this.Ta = new Jb();
      this.Y(null, this.Ta);
      this.canvas.appendChild(this.Ta.group);
      a && this.Ta.OJ();
      b && this.Ta.au();
      this.Ta.resize(this.fb().te());
      d ? this.Ta.tH(c, e) : (this.Ta.group.J(!0), c && this.Ta.Ub(!0));
    },
    jb: function (a, b, c, d) {
      null == c && (c = "");
      null == d && (d = this.canvas);
      1 == b.length && (b[1] = -1);
      b = new ib(d, b[0], b[1]);
      b.ka(c, 9, 200);
      b.VA();
      this.Y(null, b);
      this.Ra.find(a).rd = b;
      return (this.Qt.P[a] = b);
    },
    qg: function (a, b, c) {
      var d = new Za(this.canvas, 2, "button_red"),
        e = new E();
      e.x = 0.9;
      e.y = 0.6;
      d.bB(b, Mh, jb, e);
      d.Fc = c;
      this.Y(null, d);
      this.buttons.push(d);
      return (this.Ra.find(a).rd = d);
    },
    Ze: function (a) {
      return this.images.P[a];
    },
    findText: function (a) {
      return this.Qt.P[a];
    },
    ka: function (a, b, c) {
      null == c && (c = !1);
      c && (b = this.vF(b));
      this.findText(a).ka(b);
    },
    vF: function (a) {
      return nc.kj(a);
    },
    bb: function (a, b, c, d) {
      null == d && (d = this.canvas);
      b = new Ee(d, b, c);
      this.Ra.find(a).rd = b;
      return (this.images.P[a] = b);
    },
    ih: function (a) {
      var b = new Ad(this.canvas);
      return (this.Ra.find(a).rd = b);
    },
    translate: function (a) {
      return da.translate(a);
    },
    Qx: function (a) {
      return this.buttons[a];
    },
    Pd: function (a) {
      for (var b = 0, c = this.buttons; b < c.length; ) c[b++].Ub(a);
    },
    fw: function () {
      if (null == this.zd.pe("solid")) {
        var a = this.fb().te();
        new Q(this.zd).setColor($g.Lx(-16777216), a.x, a.y).node.name = "solid";
      }
    },
    DA: function () {
      var a = this.zd.pe("solid");
      null != a && a.B();
    },
    KA: function (a) {
      var b = this;
      X.yb(function () {
        3 == b.Ie && a();
      });
    },
    X: function () {
      return 36;
    },
    s: R,
  });
  uc.i = !0;
  uc.F = R;
  uc.prototype = C(R.prototype, {
    re: function () {
      var a = R.prototype.re.call(this);
      a.push(5);
      return a;
    },
    ob: function () {
      R.prototype.ob.call(this);
      this.pf("AchievementUnlockedScreen");
      this.ih("pane");
      this.bb("banderole", 2, "banderole");
      this.jb("title", [wf, jb], this.translate(y.Sp));
      this.bb("rays", 2, "sun_rays").Ok();
      this.bb("frame", 2, "boost_frame");
      var a = u.TF();
      this.bb("icon", 5, a);
      this.bb("highlight", 2, "gloss_star").Ok();
      this.jb("name", [$b, jb], this.translate(y.ov));
      a = u.Tx(a);
      var b = this.jb("info", [Na, Pd]);
      b.Rg();
      b.ka(a, 8, 50);
      b.uJ(0.3);
      this.qg("ok", this.translate(y.Ji), J(this, this.ok));
    },
    De: function () {
      R.prototype.De.call(this);
      z.play(z.jv);
    },
    yb: function () {
      R.prototype.yb.call(this);
      this.Pd(!0);
      S.qf("SCREEN_OTHER", "ACHIEVEMENT_UNLOCKED");
    },
    ok: function () {
      u.ql() ? this.cb(uc) : this.cb(wb);
    },
    X: function () {
      return 55;
    },
    s: uc,
  });
  Fd.i = !0;
  Fd.F = R;
  Fd.prototype = C(R.prototype, {
    re: function () {
      var a = R.prototype.re.call(this);
      a.push(5);
      return a;
    },
    ob: function () {
      R.prototype.ob.call(this);
      u.sa();
      this.pf("AchievementsScreen");
      this.ih("pane");
      this.bb("banderole", 2, "banderole");
      this.fj = new Q(this.canvas);
      this.jb("title", [wf, jb], this.translate(y.pv));
      var a = u.hy(),
        b = u.Hn();
      this.jb("info", [Na, ob], this.translate(y.qv(a, b)));
      this.qg("ok", this.translate(y.Ji), J(this, this.ok));
      u.un = !1;
    },
    B: function () {
      this.fb().V.Zk(37);
      R.prototype.B.call(this);
    },
    yb: function () {
      R.prototype.yb.call(this);
      this.Pd(!0);
      S.qf("SCREEN_OTHER", "ACHIEVEMENTS_OVERVIEW");
    },
    Pa: function () {
      R.prototype.Pa.call(this);
      this.aF();
    },
    ok: function () {
      this.cb(ta.Sx(this.caller));
    },
    aF: function () {
      function a(w, v, F) {
        F = new va(f, F);
        F.L(v.j);
        F.O(v.l);
        F.nd(v.u - v.j, v.A - v.l);
        F.$c(((v.A - v.l) / 4) | 0);
        F.Rg();
        F.ka(w);
      }
      var b = this.Ra.find("frame").na(),
        c = this.Ra.find("icon").na(),
        d = c.u - c.j;
      c = this.Ra.find("text").na();
      for (var e = c.u - c.j, f = new ia(null, this.canvas), g = 0, h = 0, l = u.Hn(), k = u.keys(); h < l; ) {
        var m = new Q(f, 2, "row_bg");
        m.Ct(d);
        m.kB(b.u - b.j);
        m.O(g);
        var t = k[h];
        c = new Q(f, 5, t);
        c.M((0.9 * d) / c.Ba());
        c.L(0.05 * d);
        c.O(g + c.ga);
        if (u.az(t)) {
          var n = new Q(f, 2, "check");
          n.M(m.ma() / 2 / n.ma());
          n.L(m.Ba() - n.Ba() - 5);
          n.O(m.qa + m.ma() - n.ma() - 5);
          m.fa(0.75);
        } else m.fa(0.25);
        m = u.xh(t);
        100 > m &&
          ((n = new Q(f, 5, "progress_bar")),
          n.L(c.ga),
          n.O(c.qa),
          n.M(c.pa),
          1 < m &&
            ((n = new Q(f, 5, "progress_fill")),
            n.M(c.pa),
            n.L(c.ga + 16 * c.pa),
            n.O(c.qa + 204 * c.pa),
            n.Tg((c.pa * m) / 100)));
        t = u.Tx(t);
        m = c.ga + 1.1 * c.Ba();
        n = g + 1.1 * c.ga;
        c = new W();
        c.j = m;
        c.l = n;
        c.u = m + e;
        c.A = n + d;
        a(t, c, Na);
        a(t, c, Pd);
        g += d;
        g += 0.05 * d;
        ++h;
      }
      ua.yc(f.node);
      f.node.Di();
      f.node.Ck();
      f.na();
      d = Math.ceil(b.u - b.j);
      g = Math.ceil(g);
      0 < (d & 1) && ++d;
      0 < (g & 1) && ++g;
      e = sa.current;
      h = e.bc;
      l = e.yf;
      k = new fb();
      k.Ap = !0;
      null != this.za && (this.fb().Zk(37, !1), this.fj.cc(-1));
      this.za = this.fb().V.KE(37, d, g);
      this.za.color.a = 0;
      e.pi(this.za);
      e.pt(k);
      k.reset();
      e.clear();
      e.px(f.node);
      e.pi(h);
      e.pt(l);
      this.fj.cc(37);
      this.fj.L(b.j);
      this.fj.O(b.l);
      f.B();
      this.fj.zt(b);
      null != this.scrolling && this.scrolling.B();
      this.scrolling = new xe(this.fj, b);
      this.Y(null, this.scrolling);
    },
    X: function () {
      return 60;
    },
    s: Fd,
  });
  wb.i = !0;
  wb.F = R;
  wb.prototype = C(R.prototype, {
    ob: function () {
      function a(e, f) {
        q.Or(f)
          ? (b.jb("amount" + e, [Na, ob], q.hj(f) + "").cg(-1, 0), b.bb("coin" + e, 2, "coin").mi(1, 0))
          : ((f = b.translate(y.Vv(q.EF(f)))),
            b
              .jb("info" + e, [Na, ob], f)
              .Rg()
              .VA());
      }
      var b = this;
      R.prototype.ob.call(this);
      q.vH();
      this.pf("BoostSelectScreen");
      this.ih("pane");
      this.bb("frame", 2, "frame").qt();
      this.jb("title", [Na, ob], this.translate(y.Uv));
      this.qg("ok", this.translate(y.Tv), J(this, this.ok));
      this.qb = [];
      this.qb.push(new ac(this.canvas, 0));
      this.qb.push(new ac(this.canvas, 1));
      this.qb.push(new ac(this.canvas, 2));
      this.qb.push(new ac(this.canvas, 3));
      for (var c = 0, d = this.qb; c < d.length; ) this.Y(null, d[c++]);
      c = this.Ra.find("booster1");
      c.rd = this.qb[0];
      c = this.Ra.find("booster2");
      c.rd = this.qb[1];
      c = this.Ra.find("booster3");
      c.rd = this.qb[2];
      c = this.Ra.find("booster4");
      c.rd = this.qb[3];
      a(1, 0);
      a(2, 1);
      a(3, 2);
      a(4, 3);
      this.qb[0].kk(q.el(0));
      this.qb[1].kk(q.el(1));
      this.qb[2].kk(q.el(2));
      this.qb[3].kk(q.el(3));
      this.qb[0].Fc = J(this, this.Ho);
      this.qb[1].Fc = J(this, this.Ho);
      this.qb[2].Fc = J(this, this.Ho);
      this.qb[3].Fc = J(this, this.Ho);
      this.Gt(!0, !0, !1, !1);
      u.un && this.Ta.oA();
    },
    yb: function () {
      var a = this;
      R.prototype.yb.call(this);
      S.qf("SCREEN_SHOP");
      G.st(function () {
        wa.pA();
        a.Pd(!0);
        a.Ta.Ub(!0);
      });
    },
    Ml: function () {
      R.prototype.Ml.call(this);
      this.Ta.Ub(!1);
      this.Pd(!1);
    },
    Ia: function (a) {
      R.prototype.Ia.call(this, a);
      51 == a.type && this.cb(Fd);
    },
    Pd: function (a) {
      R.prototype.Pd.call(this, a);
      for (var b = 0, c = this.qb; b < c.length; ) {
        var d = c[b];
        ++b;
        d.enabled && d.button.Ub(a);
      }
    },
    Ho: function (a) {
      var b = q.hj(a);
      if (q.vE(a)) {
        S.Lc("currency_change", b, { currency_type: "coins", change_type: "decrease" });
        var c = q.ew(a);
        this.qb[a].kk(c);
        this.qb[a].XD();
        z.play(z.Rp);
        this.Ta.Qo(-b);
        this.Ta.wp();
        switch (a) {
          case 0:
            var d = "time";
            break;
          case 1:
            d = "painter";
            break;
          case 2:
            d = "bomb";
            break;
          case 3:
            d = "laser";
        }
        S.Lc("powerup_purchased", null, { powerup_type: d });
        for (a = 0; 4 > a; ) (b = a++), q.uh() < q.hj(b) && (this.qb[b].button.J(!1), this.qb[b].button.Ub(!1));
      }
    },
    ok: function () {
      var a = this;
      this.Pd(!1);
      S.jz().then(
        function () {
          a.rB();
        },
        function () {
          a.rB();
        }
      );
    },
    rB: function () {
      for (var a = 0, b = this.qb; a < b.length; ) b[a++].button.Ub(!1);
      q.iL();
      this.Ta.uH(J(this, this.animate));
    },
    animate: function () {
      function a() {
        f += 1;
        f == g && b.cb(ab);
      }
      var b = this,
        c = this.Ra.find("ok").na(),
        d = new E();
      d.x = c.j + 0.5 * (c.u - c.j);
      d.y = c.l + 0.5 * (c.A - c.l);
      c = q.oy();
      for (var e = 0, f = 0, g = 0, h = 0; 4 > h; ) {
        var l = h++;
        0 < (c & (1 << l)) && (this.qb[l].WD(d, e, a), (e += 0.5), (g += 1));
      }
      0 == g && this.cb(ab);
    },
    X: function () {
      return 58;
    },
    s: wb,
  });
  vb.i = !0;
  vb.rc = !0;
  vb.prototype = { s: vb };
  ac.i = !0;
  ac.Aa = [vb];
  ac.F = A;
  ac.prototype = C(A.prototype, {
    XD: function () {
      var a = new Q(this.group.vb(), 2, "plus_one");
      a.aa();
      a.Ga();
      var b = this.xa[1].qa,
        c = new E();
      c.x = this.xa[1].ga;
      c.y = b;
      b = new E();
      b.x = 0;
      b.y = 0;
      c = this.group.Me(c, b);
      a.L(c.x);
      a.O(c.y);
      a.M(this.group.pa / 2);
      a.Fa().y(a.qa - this.group.ma() / 2, 1, za(2));
      a.Fa().alpha(0, 1, Ke(2));
    },
    WD: function (a, b, c) {
      function d() {
        z.play(z.nv);
        g.Fa().alpha(0, 0.25, Ke(2), null, e);
        return g.Fa().fg(3, 0.25, za(2), null, e);
      }
      function e() {
        2 == (k += 1) && c();
      }
      var f = this,
        g = new Q(this.group.vb(), 2, this.Bn());
      g.aa();
      g.Ga();
      var h = this.xa[1].qa,
        l = new E();
      l.x = this.xa[1].ga;
      l.y = h;
      h = new E();
      h.x = 0;
      h.y = 0;
      l = this.group.Me(l, h);
      g.L(l.x);
      g.O(l.y);
      g.M(this.xa[1].pa * this.group.pa);
      var k = 0;
      hd(function () {
        g.Fa().position(a.x, a.y, 1, za(2), null, d);
        f.kk(q.el(f.Pm));
      }, b);
    },
    B: function () {
      oa.Pb().detach(J(this, this.Qb));
      A.prototype.B.call(this);
    },
    kk: function (a) {
      0 > a
        ? (this.xa[0].oc("boost_frame_locked"),
          this.xa[1].oc(this.Bn() + "_disabled"),
          this.xa[1].fa(0.3),
          this.xa[2].J(!1),
          this.xa[3].J(!1),
          this.xa[4].J(!0),
          this.button.J(!1))
        : (this.button.ck(!1),
          q.uh() < q.hj(this.Pm)
            ? (this.button.J(!1), (this.enabled = !1))
            : (this.button.J(!0), (this.enabled = !0), 0 == a && this.button.ck(!0)),
          this.xa[0].oc(0 < a ? "boost_frame_selected" : "boost_frame"),
          this.xa[1].oc(this.Bn()),
          this.xa[1].fa(1),
          this.xa[2].J(!0),
          this.xa[2].oc("box_amount_" + (0 == a ? "b" : "a")),
          this.xa[3].J(0 < a),
          this.xa[4].J(!1),
          this.PE(0 == a ? Ih : Ug),
          this.amount.ka("" + a),
          this.amount.Ad(),
          this.amount.cg(0, 0));
    },
    La: function (a) {
      this.group.aa();
      this.group.vg(a);
      this.scale = this.group.pa;
    },
    PE: function (a) {
      null != this.amount && this.amount.B();
      this.amount = new ib(this.group, a);
      a = new W();
      a.j = -15;
      a.l = -7;
      a.u = 45;
      a.A = 29;
      this.amount.La(a);
      this.amount.ka("0", 9, 200);
      this.amount.cg(0, 0);
      this.amount.Ad();
      this.Y(null, this.amount);
    },
    Bn: function () {
      switch (this.Pm) {
        case 0:
          return "booster_time";
        case 1:
          return "booster_painter";
        case 2:
          return "booster_bomb";
        case 3:
          return "booster_laser";
      }
    },
    Qb: function (a) {
      if (this.button.isVisible) {
        var b = new E();
        b.x = a.x;
        b.y = a.y;
        if (!this.button.yG(b) && this.xa[1].Fb(b) && this.button.isEnabled)
          switch (a.type) {
            case 0:
              this.group.Fa().fg(1.1 * this.scale, 1, id(0, 0.5));
              break;
            case 1:
              this.group.Fa().fg(this.scale, 1, id(0, 0.25)), this.Fc(this.Pm);
          }
      }
    },
    X: function () {
      return 57;
    },
    s: ac,
  });
  Za.i = !0;
  Za.Aa = [vb];
  Za.UK = function (a, b) {
    for (var c = a.Mf.ra.size, d = 0; d < b.length; ) c = P.min(c, b[d++].Mf.ra.size);
    a.$c(c);
    for (d = 0; d < b.length; ) b[d++].$c(c);
  };
  Za.F = A;
  Za.prototype = C(A.prototype, {
    B: function () {
      oa.Pb().detach(J(this, this.Qb));
      this.group.B();
      this.Fc = null;
      A.prototype.B.call(this);
    },
    bB: function (a, b, c, d) {
      null == d && ((d = new E()), (d.x = 1), (d.y = 1));
      var e = this.om;
      e.x = d.x;
      e.y = d.y;
      this.Mf = new va(this.group, b);
      this.Mf.ka(a);
      -1 < c && ((this.Bg = new va(this.group, c)), this.Bg.ka(a));
      this.iz();
    },
    na: function () {
      return La.clone(this.ja);
    },
    La: function (a) {
      var b = new W();
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      this.ja = b;
      this.button.M(1);
      this.button.kB(a.u - a.j);
      this.button.Ct(a.A - a.l);
      this.group.L(a.j);
      this.group.O(a.l);
      this.group.aa();
      this.iz();
    },
    yG: function (a) {
      return this.button.Fb(a);
    },
    IL: function () {
      return this.isVisible;
    },
    J: function (a) {
      this.group.J(a);
      return (this.isVisible = a);
    },
    fa: function (a) {
      this.group.fa(a);
      return a;
    },
    yL: function () {
      return this.isEnabled;
    },
    Ub: function (a) {
      a || (this.Kf = this.Gh = !1);
      return (this.isEnabled = a);
    },
    iz: function () {
      if (null != this.Mf) {
        var a = this.ja;
        if (!(a.j >= a.u || a.l >= a.A)) {
          a = this.ja;
          var b = a.u - a.j;
          a = this.ja;
          var c = a.A - a.l;
          a = new W();
          a.j = 0;
          a.l = 0;
          a.u = b;
          a.A = c;
          this.Mf.nd(b * this.om.x, c * this.om.y);
          this.Mf.Nm(10, 200);
          this.Mf.nb(a, 0, 0);
          null != this.Bg && (this.Bg.nd(b * this.om.x, c * this.om.y), this.Bg.Nm(10, 200), this.Bg.nb(a, 0, 0));
        }
      }
    },
    Qb: function (a) {
      if (this.isEnabled && !this.Kf && this.isVisible && !this.$n)
        switch (a.type) {
          case 0:
            if (this.Gh) break;
            if (this.Kf) break;
            var b = new E();
            b.x = a.x;
            b.y = a.y;
            if (!this.button.Fb(b)) break;
            this.Gh = !0;
            this.group.Fa().fg(1.2, 1, id(0, 0.5));
            z.play(z.QC);
            break;
          case 1:
            this.Gh &&
              !this.Kf &&
              ((b = new E()),
              (b.x = a.x),
              (b.y = a.y),
              this.button.Fb(b)
                ? (z.play(z.NC),
                  this.group.Fa().fg(1, 1, id(0, 0.25)),
                  (this.Kf = !0),
                  (this.Gh = !1),
                  (this.qI = Ha.time),
                  0 == this.Lw && this.select())
                : (z.play(z.PC), this.group.Fa().fg(1, 1, id(0, 0.25)), (this.Gh = !1)));
        }
    },
    U: function (a) {
      A.prototype.U.call(this, a);
      this.$n && ((this.Jr += a), 0.5 < this.Jr && (this.Kf = this.$n = !1));
      this.Kf && Ha.time - this.qI > this.Lw && this.select();
    },
    select: function () {
      null != this.Fc && this.Fc();
      this.Bw(50);
      this.Jr = 0;
      this.$n = !0;
      this.Kf = !1;
    },
    $c: function (a) {
      var b = this.ja,
        c = b.u - b.j;
      b = this.ja;
      var d = b.A - b.l;
      b = new W();
      b.j = 0;
      b.l = 0;
      b.u = c;
      b.A = d;
      this.Mf.$c(a);
      this.Mf.nb(b, 0, 0);
      null != this.Bg && (this.Bg.$c(a), this.Bg.nb(b, 0, 0));
    },
    X: function () {
      return 39;
    },
    s: Za,
  });
  He.i = !0;
  He.F = Za;
  He.prototype = C(Za.prototype, {
    ck: function (a) {
      this.Rq = a;
      this.group.M(1);
    },
    U: function (a) {
      Za.prototype.U.call(this, a);
      this.Kf && (this.Rq = !1);
      this.Rq && !this.Gh && this.group.M(P.map(Math.sin(8 * this.time), -1, 1, 0.9, 1.1));
    },
    X: function () {
      return 56;
    },
    s: He,
  });
  Sc.i = !0;
  Sc.F = R;
  Sc.prototype = C(R.prototype, {
    ob: function () {
      R.prototype.ob.call(this);
      this.pf("BoostUnlockedScreen");
      var a = q.pr();
      q.WK(a);
      var b = null,
        c = null;
      switch (a) {
        case 0:
          b = this.translate(y.cv);
          c = this.translate(y.Zu);
          break;
        case 1:
          b = this.translate(y.ev);
          c = this.translate(y.av);
          break;
        case 2:
          b = this.translate(y.bv);
          c = this.translate(y.Yu);
          break;
        case 3:
          (b = this.translate(y.dv)), (c = this.translate(y.$u));
      }
      this.ih("pane");
      this.bb("banderole", 2, "banderole");
      this.jb("title", [wf, jb], this.translate(y.Sp));
      this.bb("rays", 2, "sun_rays").Ok();
      this.bb("frame", 2, "boost_frame");
      switch (a) {
        case 0:
          var d = "booster_time";
          break;
        case 1:
          d = "booster_painter";
          break;
        case 2:
          d = "booster_bomb";
          break;
        case 3:
          d = "booster_laser";
      }
      this.bb("boost", 2, d);
      this.bb("highlight", 2, "gloss_star").Ok();
      this.jb("name", [$b, jb], b);
      a = this.jb("info", [Na, Pd]);
      b = this.Ra.find("info").na();
      a.ka(c, 8, ((b.A - b.l) / 3) | 0);
      a.Rg();
      this.qg("ok", this.translate(y.Ji), J(this, this.ok));
    },
    De: function () {
      R.prototype.De.call(this);
      z.play(z.jv);
    },
    yb: function () {
      R.prototype.yb.call(this);
      this.Pd(!0);
      S.qf("SCREEN_BONUS");
    },
    ok: function () {
      u.pK();
      u.ql() ? this.cb(uc) : this.cb(wb);
    },
    X: function () {
      return 53;
    },
    s: Sc,
  });
  Rc.i = !0;
  Rc.F = R;
  Rc.prototype = C(R.prototype, {
    ob: function () {
      R.prototype.ob.call(this);
      this.pf("GameResultsScreen");
      this.Pf = new ia();
      this.Be = new ia();
      this.ih("pane");
      this.bb("star0", 2, "sun_rays").Ok();
      this.bb("star1", 2, "gloss_star");
      this.bb("star2", 2, "gloss_star");
      this.bb("star3", 2, "gloss_star");
      this.bb("star4", 2, "gloss_star");
      this.bb("rewards_bg", 2, "frame", this.Be).qt();
      this.bb("level_star", 2, "level_star", this.Pf);
      this.bb("coin", 2, "coin", this.Pf);
      this.bb("squirrel", 2, "squirrel_pose_1");
      this.jb("xp_amount", [Na, ob], null, this.Pf).ut();
      this.jb("coin_amount", [Na, ob], null, this.Pf).ut();
      this.jb("title", [Na, ob]);
      this.jb("info", [Na, Pd]);
      this.jb("points", [ch]).ka("0").cg(0, 0);
      this.jb("bonus", [Na, Lh]);
      this.jb("rewards_info", [$b, jb], this.translate(y.tv), this.Be);
      this.canvas.appendChild(this.Be);
      this.qg("button", this.translate(y.Ji), J(this, this.ok));
      this.Be.appendChild(this.Pf);
    },
    De: function () {
      this.Mh = q.Px();
      this.ff = q.se() - this.Mh;
      this.sz = q.gd() && 0 < this.ff && G.uG();
      this.yj = q.Wy();
      switch (1e3 > this.ff || !q.gd() ? 1 : 1e5 > this.ff ? 2 : 5e5 > this.ff ? 3 : 4) {
        case 1:
          var a = y.vv;
          break;
        case 2:
          a = y.wv;
          break;
        case 3:
          a = y.xv;
          break;
        case 4:
          a = y.yv;
          break;
        default:
          a = null;
      }
      this.ka("title", this.translate(a).split("*")[oc.instance.ki(0, 2)]);
      this.ka("info", this.translate(this.yj ? y.rv : y.sv));
      this.findText("info").J(!1);
      a = this.findText("points");
      a.J(!1);
      a.Da.cc(this.yj ? Gh : ch);
      a.aa();
      a.M(0 < this.Mh ? 0.6 : 0.8);
      this.Be.J(!1);
      0 < this.Mh &&
        this.findText("bonus")
          .mj()
          .ka(this.translate(y.uv(q.zn(), q.Px())));
      a = q.An();
      var b = q.sh();
      this.cs = 0 < a + b;
      this.ka("xp_amount", a, !0);
      this.ka("coin_amount", b, !0);
      a = this.Ze("squirrel");
      this.yj ? a.show() : a.mj();
      this.jm(!1);
      R.prototype.De.call(this);
    },
    yb: function () {
      var a = this;
      R.prototype.yb.call(this);
      if (Oa.$k(this.sj, "restart")) this.cb(ab);
      else if (0 == this.ff) {
        var b = function () {
          a.jm(!0);
        };
        Promise.all([S.fo(Oa.$k(this.caller.lf, "reason")), S.Xt(0), G.oB(), S.Mq()]).then(b, b);
      } else
        this.yj && z.play(z.nD),
          q.gd() ? this.Gt(!1, !1, !0, !0, J(this, this.ow)) : hd(J(this, this.ow), 0.5),
          S.qf("SCREEN_GAMERESULT");
    },
    ow: function () {
      function a(g, h, l, k) {
        g.J(!0);
        g.fa(h);
        h = new Ib(h, l, 0.3, function (m) {
          g.fa(m);
        })
          .$l(za(2))
          .mk(k);
        b.Y(null, h);
      }
      var b = this,
        c = this.findText("points"),
        d = this.findText("bonus"),
        e = this.findText("info"),
        f = [
          function (g) {
            a(e, 0, 1, g);
          },
          function (g) {
            b.bn(c, 0, b.ff, g);
          },
          function (g) {
            var h = b.ff;
            b.yj && null != b.Ta && b.Ta.au(h, !0);
            g();
          },
          function (g) {
            b.To(c, 0 < b.Mh ? 0.8 : 1, !0, g);
          },
        ];
      0 < this.Mh &&
        (f = f.concat([
          function (g) {
            a(d, 0, 1, g);
          },
          function (g) {
            b.bn(c, b.ff, b.ff + b.Mh, g);
          },
          function (g) {
            var h = b.ff + b.Mh;
            b.yj && null != b.Ta && b.Ta.au(h, !0);
            g();
          },
          function (g) {
            b.To(c, 1, !0, g);
          },
          function (g) {
            a(d, 1, 0, g);
          },
        ]));
      Mg(f, J(this, this.BH));
    },
    BH: function () {
      var a = this;
      if (q.gd())
        this.cs
          ? Mg(
              [
                function (c) {
                  var d = a.Be;
                  d.J(!0);
                  d.fa(0);
                  c = new Ib(0, 1, 0.3, function (e) {
                    d.fa(e);
                  })
                    .$l(za(2))
                    .mk(c);
                  a.Y(null, c);
                },
                function (c) {
                  hd(c, 1);
                },
              ],
              J(this, this.mB)
            )
          : ((this.sz = !1), hd(J(this, this.mB), 1));
      else {
        ka.instance().vc(0);
        var b = function () {
          a.jm(!0);
          ka.instance().vc(1);
        };
        Promise.all([S.fo(Oa.$k(this.caller.lf, "reason")), S.Xt(q.se()), S.Mq()]).then(b, b);
      }
    },
    mB: function () {
      function a() {
        ka.instance().vc(1);
        b.sz ? b.QJ() : b.cs ? b.Pl() : b.Ds();
      }
      var b = this;
      ka.instance().vc(0);
      Promise.all([S.fo(Oa.$k(this.caller.lf, "reason")), S.Xt(q.se()), G.oB()]).then(
        function () {
          a();
        },
        function () {
          a();
        }
      );
    },
    Pl: function () {
      var a = q.An();
      q.OD(a);
      S.Lc("experience_increase", a);
      a = q.sh();
      q.MD(a);
      S.Lc("currency_change", a, { currency_type: "coins", change_type: "increase" });
      this.Y(null, new Ge(J(this, this.Ds)));
    },
    Ds: function () {
      var a = this;
      S.Mq().then(function () {
        a.jm(!0);
      });
    },
    yH: function () {
      this.uz = !0;
      1 > q.Mn()
        ? this.cb(ab)
        : q.gd() && 1 == q.Sd() && null != q.pr()
        ? this.cb(Sc)
        : q.ZG()
        ? (S.Lc("player_levelup", null, { new_level: q.Sd() }), this.cb(De))
        : u.ql()
        ? this.cb(uc)
        : this.cb(wb);
    },
    bn: function (a, b, c, d) {
      a.J(!0);
      this.Y(
        null,
        new Ib(b, c, 1, function (e) {
          return a.ka(nc.kj(e | 0));
        })
          .$l(za(2))
          .mk(d)
      );
      z.play(z.tD);
    },
    To: function (a, b, c, d) {
      a.aa();
      c && a.cg(0, 0);
      this.Y(
        null,
        new Ib(a.Da.pa, b, 0.5, function (e) {
          return a.M(e);
        })
          .$l(ec(0.5))
          .mk(d)
      );
    },
    U: function (a) {
      R.prototype.U.call(this, a);
      this.vI(a);
      !this.rz &&
        0 != this.Dd &&
        0 <= this.El &&
        ((this.El -= a), 0 > this.El && !this.rz && this.Iy(!0, J(this, this.Pl)));
    },
    Ka: function (a) {
      R.prototype.Ka.call(this, a);
      3 == this.Ie && this.yh && ((this.yh = !1), this.cb(wb));
    },
    Ia: function (a) {
      R.prototype.Ia.call(this, a);
      48 == a.type && (this.yh = !0);
    },
    Pa: function () {
      R.prototype.Pa.call(this);
      this.jw();
    },
    QJ: function () {
      z.play(z.Rp);
      var a = 0.5 > Math.random() ? -1 : 1;
      this.Dd = a;
      var b = (this.Jg = new Za(this.canvas, 2, "button_x2"));
      this.Y(null, b);
      b.Fc = J(this, this.XH);
      this.buttons.push(b);
      b.Ub(!0);
      this.Ra.find("rewards_x2_" + (0 > a ? "l" : "r")).rd = b;
      for (var c = 0 > a ? 35 : 55, d = ["level_star", "coin", "xp_amount", "coin_amount"], e = 0; e < d.length; )
        this.Ra.find(d[e++]).position.x += c * -a;
      this.Ze("coin").C.aa();
      this.Ze("level_star").C.aa();
      this.NB();
      c = new Q(this.Be, 2, "button_x2_frame");
      c.node.name = "frame";
      c.bp();
      this.Ze("rewards_bg").C.bp();
      this.jw();
      c = id();
      this.Pf.L(100 * a);
      this.Pf.Fa().x(0, 0.5, c);
      d = b.group;
      e = d.ga;
      d.L(d.ga + 100 * a);
      b.fa(0);
      d.Fa().x(e, 0.5, c);
      d.Fa().alpha(1, 0.25);
      this.Rh = new Fe(b);
      this.Y(null, this.Rh);
      this.canvas.appendChild(this.Rh.group);
    },
    XH: function () {
      var a = this;
      this.Be.pe("frame").J(!1);
      this.Jg.button.oc("button_x2b");
      this.Jg.Ub(!1);
      this.rz = !0;
      this.Rh.B();
      this.Rh = null;
      ka.instance().vc(0);
      G.PJ(function (b) {
        a.rG(1 == U.Z(b, "rewardGranted"));
      });
    },
    rG: function (a) {
      var b = this;
      hd(function () {
        b.qG(a);
      }, 1.5);
    },
    qG: function (a) {
      var b = this;
      if (!this.uz)
        if ((this.Iy(), ka.instance().vc(1), a))
          if (0 > this.Dd) {
            var c = q.An();
            q.YE();
            Mg(
              [
                function (e) {
                  b.bn(b.findText("xp_amount"), c, 2 * c, e);
                },
                function (e) {
                  b.To(b.findText("xp_amount"), 1.1, !1, e);
                },
              ],
              J(this, this.Pl)
            );
          } else {
            var d = q.sh();
            q.XE();
            Mg(
              [
                function (e) {
                  b.bn(b.findText("coin_amount"), d, 2 * d, e);
                },
                function (e) {
                  b.To(b.findText("coin_amount"), 1.1, !1, e);
                },
              ],
              J(this, this.Pl)
            );
          }
        else this.cs ? this.Pl() : this.Ds();
    },
    Iy: function (a, b) {
      null == a && (a = !1);
      var c = this;
      null != this.Jg &&
        ((this.Jg.Fc = null),
        null != this.Rh && (this.Rh.B(), (this.Rh = null)),
        this.Be.pe("frame").Fa().alpha(0, 0.25),
        this.Jg.group.Fa().alpha(0, 0.25, null, null, function () {
          c.Jg.B();
          fa.remove(c.buttons, c.Jg);
          c.Jg = null;
          if (a) {
            c.Ra.find("rewards_x2_" + (0 > c.Dd ? "l" : "r")).rd = null;
            for (
              var d = 0 > c.Dd ? 35 : 55, e = ["level_star", "coin", "xp_amount", "coin_amount"], f = 0;
              f < e.length;

            )
              c.Ra.find(e[f++]).position.x += d * c.Dd;
            c.NB();
            c.Pf.L(100 * c.Dd);
            c.Pf.Fa().x(0, 0.5, id(), null, function () {
              c.jm(!0);
              b();
            });
          }
        }));
    },
    jw: function () {
      var a = this.Ra.find("rewards_x2_" + (0 > this.Dd ? "l" : "r")).na(),
        b = this.Be.pe("frame");
      null != b &&
        (b.M(1),
        b.M((a.A - a.l) / b.ma()),
        b.hm(0.9 * b.Vb),
        0 < this.Dd && b.Tg(1.05 * b.pa),
        b.O(a.l),
        0 > this.Dd ? b.L(a.j) : b.L(a.j - (b.Ba() - (a.u - a.j))),
        b.O(a.l + 0.5 * (a.A - a.l) - b.ma() / 2),
        (this.hs = this.Ze(0 > this.Dd ? "level_star" : "coin").C.pa));
    },
    vI: function (a) {
      0 != this.Dd &&
        ((this.js += a),
        (a = P.map(Math.sin(8 * this.js), -1, 1, this.hs - 0.05, this.hs + 0.05)),
        this.Ze(0 > this.Dd ? "level_star" : "coin").C.M(a));
    },
    jm: function (a) {
      this.buttons[0].J(a);
      this.Pd(a);
    },
    ok: function () {
      this.Pd(!1);
      this.yH();
    },
    X: function () {
      return 52;
    },
    s: Rc,
  });
  Ge.i = !0;
  Ge.F = A;
  Ge.prototype = C(A.prototype, {
    kc: function () {
      A.prototype.kc.call(this);
      this.YD();
    },
    B: function () {
      A.prototype.B.call(this);
      var a = this.tc;
      this.Sc = this.src = this.tc = null;
      null != this.Na && (this.Na.B(), (this.Na = null));
      for (var b = 0, c = this.xa; b < c.length; ) c[b++].B();
      this.xa = null;
      a();
    },
    U: function (a) {
      A.prototype.U.call(this, a);
      this.progress += a;
      switch (this.$a) {
        case 0:
          this.Kj < this.$h &&
            0.1 <= this.time &&
            ((this.time = 0), this.Kj++, this.aK(), this.Kj == this.$h && z.play(z.gD));
          a = this.Na;
          a.fa(0.9 * a.fc);
          this.Km && this.$a++;
          break;
        case 1:
          a = this.Na;
          a.fa(0.7 * a.fc);
          0.01 > this.Na.fc && (this.Na.B(), (this.Na = null), (this.$a = 2), this.hB(0), this.VD());
          break;
        case 2:
          this.Kj < this.$h && 0.1 <= this.time && ((this.time = 0), this.Kj++, this.ZJ());
          a = this.Na;
          a.fa(0.9 * a.fc);
          a = this.Sc;
          a.M(a.pa + 0.1 * (1 - this.Sc.pa));
          this.Na.M(this.Sc.pa);
          this.Km && P.vq(this.Sc.pa, 1, 0.01) && (this.Sc.M(1), this.$a++);
          break;
        case 3:
          this.parent.Ta.Qo(this.Af);
          this.parent.Ta.wp();
          z.play(z.Rp);
          this.WA(0);
          this.$a++;
          break;
        case 4:
          a = this.Na;
          a.fa(0.7 * a.fc);
          0.01 > this.Na.fc &&
            (this.Na.B(), (this.Na = null), this.parent.Be.Fa().alpha(0, 0.5), (this.$a = 5), (this.time = 0));
          break;
        case 5:
          0.6 < this.time && this.ou && this.B();
      }
    },
    Ka: function (a) {
      A.prototype.Ka.call(this, a);
      a = 1 - Math.min(this.progress / this.duration, 1);
      switch (this.$a) {
        case 0:
          a = (a * this.Gi) | 0;
          if (a == this.BA) break;
          this.BA = a;
          this.hB(a);
          break;
        case 2:
          (a = (a * this.Af) | 0), a != this.ht && ((this.ht = a), this.WA(a));
      }
    },
    YD: function () {
      this.Km = !1;
      this.parent.Ta.Rs(J(this, this.Hs));
      this.src = this.parent.Ze("level_star").C;
      this.Sc = this.parent.Ta.ll();
      this.Gi = this.BA = q.An();
      this.$h = 1 + ((this.Gi / 10) | 0);
      this.Kj = this.Lz = 0;
      this.Na = this.Sc.clone();
      this.Na.Tc().add();
      this.Na.J(!1);
      this.duration = 0.1 * this.$h + 0.75;
      this.progress = 0;
      this.ou = !1;
      this.$a = 0;
    },
    VD: function () {
      this.Km = !1;
      this.src = this.parent.Ze("coin").C;
      this.Sc = this.parent.Ta.hr();
      this.Af = this.ht = q.sh();
      this.$h = 1 + ((q.sh() / 10) | 0);
      this.Kj = this.Lz = 0;
      this.Na = this.Sc.clone();
      this.Na.Tc().add();
      this.Na.J(!1);
      this.duration = 0.1 * this.$h + 0.75;
      this.progress = 0;
      this.$a = 2;
    },
    Hs: function () {
      this.ou = !0;
    },
    aK: function () {
      var a = this.src.clone();
      a.remove();
      this.parent.fb().ad.appendChild(a.node);
      a.aa();
      a.Ga();
      var b = this.parent.Ta.dG();
      a.Fa().position(b.x, b.y, 0.75, za(2), null, J(this, this.eA));
      this.xa.push(a);
    },
    ZJ: function () {
      var a = this.src.clone();
      a.remove();
      this.parent.fb().ad.appendChild(a.node);
      a.aa();
      a.Ga();
      var b = this.parent.Ta.GF();
      a.Fa().position(b.x, b.y, 0.75, za(2), null, J(this, this.eA));
      this.xa.push(a);
    },
    eA: function () {
      this.Na.J(!0);
      this.Na.fa(1);
      this.xa.shift().B();
      switch (this.$a) {
        case 0:
          z.play(z.nv);
          break;
        case 2:
          z.play(z.mv);
          var a = this.Sc;
          a.M(a.pa + 0.1);
          this.parent.Ta.wp(Math.round(q.uh() - this.Af + (this.Af - this.ht)));
      }
      ++this.Lz == this.$h && (this.Km = !0);
    },
    vL: function () {
      return this.parent;
    },
    tL: function () {
      return this.parent.Ta;
    },
    WA: function (a) {
      this.parent.findText("coin_amount").ka(null == a ? "null" : "" + a);
    },
    hB: function (a) {
      this.parent.findText("xp_amount").ka(null == a ? "null" : "" + a);
    },
    X: function () {
      return 51;
    },
    s: Ge,
  });
  Fe.i = !0;
  Fe.F = A;
  Fe.prototype = C(A.prototype, {
    B: function () {
      A.prototype.B.call(this);
      this.group.B();
      this.group = null;
    },
    U: function (a) {
      A.prototype.U.call(this, a);
      0 < (this.f & 8) || (this.amount.ka(Aa.ab(Math.round(this.parent.El))), this.amount.cg(0, 0));
    },
    Ka: function (a) {
      A.prototype.Ka.call(this, a);
      a = this.button.na();
      this.group.L(a.u - 0.1 * (a.u - a.j));
      this.group.O(a.l);
      this.group.M(1);
      a = (a.A - a.l) / (2 * this.group.ma());
      this.group.M(a);
    },
    X: function () {
      return 50;
    },
    s: Fe,
  });
  ab.i = !0;
  ab.F = R;
  ab.prototype = C(R.prototype, {
    VI: function () {
      this.$e.B();
      this.Vw();
      this.$e.start();
    },
    Ft: function () {},
    re: function () {
      var a = [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9];
      a.push(24);
      a.push(26);
      a.push(4);
      a.push(2);
      a.push(1);
      a.push(3);
      return a;
    },
    ob: function () {
      R.prototype.ob.call(this);
      this.seed = ++la.instance.config.seed;
      this.Vw();
    },
    B: function () {
      R.prototype.B.call(this);
      wa.gK();
    },
    Ia: function (a) {
      R.prototype.Ia.call(this, a);
      switch (a.type) {
        case 47:
          this.sr = !0;
          break;
        case 48:
          this.yh = !0;
      }
    },
    Ka: function (a) {
      R.prototype.Ka.call(this, a);
      if (3 == this.Ie && this.sr) {
        this.sr = !1;
        try {
          this.$e.B();
        } catch (b) {}
        this.cb(mb);
      } else if (3 == this.Ie && this.yh) {
        this.yh = !1;
        try {
          this.$e.B();
        } catch (b) {}
        this.cb(wb);
      }
    },
    yb: function () {
      var a = this;
      R.prototype.yb.call(this);
      this.caller instanceof Bd
        ? Oa.$k(this.caller.lf, "end")
          ? (this.$e.abort(), this.cb(mb))
          : (this.$e.resume(), S.qf("SCREEN_LEVEL"))
        : (S.qf("SCREEN_LEVEL"),
          G.st(function () {
            a.KA(wa.dI);
            a.$e.start();
          }));
    },
    Pa: function () {
      R.prototype.Pa.call(this);
      this.$e.resize();
    },
    Vw: function () {
      try {
        if (G.tj()) {
          var a = U.Z(G.Vx(), "override"),
            b = U.Z(a, "time");
          null != b && (0 < b ? (Je = b) : (Ng = !0));
          var c = U.Z(a, "shots");
          null != c && 0 < c && (bh = c);
          U.Z(a, "fireball_enabled") || (uh = !1);
          if (Object.prototype.hasOwnProperty.call(a, "bubble_speed")) {
            var d = U.Z(a, "bubble_speed");
            isNaN(d) || (wh = d);
          }
          Ng && (Md = !0);
          if (Object.prototype.hasOwnProperty.call(a, "hide_ui")) {
            var e = U.Z(a, "hide_ui");
            for (a = 0; a < e.length; )
              switch (e[a++]) {
                case "achievements":
                  Vg = !0;
                  break;
                case "floating_points":
                  Od = !0;
                  break;
                case "score":
                  Og = !0;
                  break;
                case "time":
                  Md = !0;
              }
          }
        }
      } catch (f) {}
      this.$e = new bf(this, this.seed, this.og);
      this.og = this.$e.config.og.slice();
      this.Y(null, this.$e);
    },
    X: function () {
      return 37;
    },
    s: ab,
  });
  mb.i = !0;
  mb.F = R;
  mb.prototype = C(R.prototype, {
    ob: function () {
      R.prototype.ob.call(this);
      this.pf("HomeScreen");
      this.bb("logo", 2, "logo");
      this.ak = new Ed();
      this.Y(null, this.ak);
      this.ak.button.Fc = J(this, this.play);
      this.canvas.appendChild(this.ak.group);
      this.Ra.find("play").rd = this.ak;
      S.qf("SCREEN_HOME");
      mb.Hx ? ((mb.Hx = !1), this.mI(), this.KG()) : mb.Gz && (this.Hj = new Q(this.canvas, 28));
    },
    yb: function () {
      var a = this;
      R.prototype.yb.call(this);
      this.KA(wa.pA);
      this.Gt(!0, !0, !0, !0, function () {
        G.st(function () {
          a.ak.button.Ub(!0);
        });
      });
      u.un && this.Ta.oA();
    },
    Ml: function () {
      R.prototype.Ml.call(this);
      this.Ta.Ub(!1);
      this.ak.button.Ub(!1);
    },
    Ia: function (a) {
      R.prototype.Ia.call(this, a);
      51 == a.type && this.cb(Fd);
    },
    play: function () {
      1 == B.hH && q.Or(3) ? this.cb(Sc) : this.cb(wb);
    },
    Pa: function () {
      R.prototype.Pa.call(this);
      null != this.Hj && this.iw();
    },
    KG: function () {
      var a = this;
      G.eH(function (b) {
        Ka.instance.V.createTexture(28, b);
        a.Hj = new Q(a.canvas, 28);
        mb.Gz = !0;
        a.iw();
      });
    },
    iw: function () {
      try {
        var a = La.clone(this.Ra.find("play").na());
        a.l = a.A - 0.3 * (a.A - a.l);
        var b = a.u - a.j,
          c = this.fb().te(),
          d = c.x > 0.8 * c.y;
        La.offset(a, -b * (d ? 0.3 : 0.2), d ? 0.1 * -(a.A - a.l) : 0);
        this.Hj.vg(a, null, 0, 0);
      } catch (e) {}
    },
    Qb: function (a) {
      if (0 == a.type) {
        if (null != this.Hj) {
          var b = new E();
          b.x = a.x;
          b.y = a.y;
          a = this.Hj.Fb(b);
        } else a = !1;
        a && G.DH();
      }
    },
    X: function () {
      return 66;
    },
    s: mb,
  });
  Ed.i = !0;
  Ed.Aa = [vb];
  Ed.F = A;
  Ed.prototype = C(A.prototype, {
    La: function (a) {
      var b = this.parent.fb().te();
      this.group.vg(a, null, 0, 1);
      a = new W();
      a.j = 0;
      a.l = 0;
      a.u = b.x;
      a.A = b.y;
      this.group.nb(a, 0, 1);
    },
    X: function () {
      return 65;
    },
    s: Ed,
  });
  Ee.i = !0;
  Ee.Aa = [vb];
  Ee.prototype = {
    J: function (a) {
      this.C.J(!1);
      return a;
    },
    oc: function (a) {
      this.C.oc(a);
      return a;
    },
    La: function (a) {
      this.C.vg(a, this.xx ? 2 : 0, this.align[0], this.align[1]);
    },
    mi: function (a, b) {
      this.align = [a, b];
      return this;
    },
    qt: function () {
      this.xx = !0;
      return this;
    },
    Ok: function () {
      this.C.Tc().add();
      return this;
    },
    mj: function () {
      this.C.J(!1);
      return this;
    },
    show: function () {
      this.C.J(!0);
      return this;
    },
    s: Ee,
  };
  De.i = !0;
  De.F = R;
  De.prototype = C(R.prototype, {
    ob: function () {
      R.prototype.ob.call(this);
      this.pf("LevelUpScreen");
      this.ih("pane");
      this.bb("banderole", 2, "banderole");
      this.jb("title", [wf, jb], this.translate(y.Sv));
      this.bb("squirrel", 2, "squirrel_pose_1");
      this.bb("star", 2, "star_level_up");
      var a = "+" + q.zn() + "%",
        b = new ia("bonusGroup", this.canvas);
      this.bb("frame", 2, "frame", b).qt();
      this.jb("bonus", [$b, jb], this.translate(y.Rv), b);
      this.jb("percent", [Na, ob], a, b);
      this.jb("percent_with_bonus", [Na, ob], a, b);
      this.bb("item", 2, "booster_painter_outline", b);
      this.jb("item_amount", [Na, ob], "+1", b).ut();
      a = "" + q.Sd();
      this.jb("info", [Na, Pd], this.translate(y.Qv));
      this.jb("level", [Hh], a).Ad().cg(0, 0).aa();
      this.qg("ok", this.translate(y.Ji), J(this, this.ok));
    },
    De: function () {
      z.play(z.mD);
      var a = q.zn(),
        b = q.NF();
      this.canvas.pe("bonusGroup").J(!1);
      if (null != b) {
        var c = q.OF();
        q.ew(b, c);
        this.findText("percent").J(!1);
        this.findText("percent_with_bonus").ka("+" + a + "%");
        this.findText("item_amount").ka("+" + c);
        switch (b) {
          case 0:
            var d = "booster_time";
            break;
          case 1:
            d = "booster_painter";
            break;
          case 2:
            d = "booster_bomb";
            break;
          case 3:
            d = "booster_laser";
        }
        this.Ze("item").oc(d + "_outline");
      } else
        this.findText("percent").ka("+" + a + "%"),
          this.findText("percent_with_bonus").J(!1),
          this.findText("item_amount").J(!1),
          this.Ze("item").J(!1);
      var e = this.findText("level"),
        f = ec(0.1);
      this.Y(
        null,
        new Ib(0.01, 1, 1, function (g) {
          e.M(f(g));
        }).mk(J(this, this.MJ))
      );
      S.qf("SCREEN_BONUS");
      R.prototype.De.call(this);
    },
    MJ: function () {
      var a = this.canvas.pe("bonusGroup");
      a.J(!0);
      a.fa(0);
      a.Fa().alpha(1, 0.5, za(2), null, J(this, this.CH));
    },
    CH: function () {
      this.Pd(!0);
    },
    ok: function () {
      u.oK();
      null != q.pr() ? this.cb(Sc) : u.ql() ? this.cb(uc) : this.cb(wb);
    },
    X: function () {
      return 54;
    },
    s: De,
  });
  $a.i = !0;
  $a.F = xa;
  $a.prototype = C(xa.prototype, {
    kc: function () {
      this.create();
      0 == this.wi && (this.start(), this.$o());
    },
    yb: function () {
      xa.prototype.yb.call(this);
      this.Nt();
    },
    zp: function () {
      3 == this.Ak && 1 == this.Ne ? (this.stop(), this.B(), this.Un.kc()) : xa.prototype.zp.call(this);
    },
    U: function (a) {
      xa.prototype.U.call(this, a);
      this.loaded || null == this.hd || (this.hd.ol(), this.hd.loaded && ((this.loaded = !0), this.Fx()));
    },
    Fh: function () {
      return !1;
    },
    Fx: function () {
      this.finish();
    },
    Nt: function () {
      this.hd = new hb();
      this.hd.load(this.EG);
    },
    X: function () {
      return 5;
    },
    s: $a,
  });
  Dd.i = !0;
  Dd.F = $a;
  Dd.prototype = C($a.prototype, {
    Fh: function () {
      return !1;
    },
    B: function () {
      this.group.B();
      $a.prototype.B.call(this);
    },
    Nt: function () {},
    ob: function () {
      $a.prototype.ob.call(this);
      this.group = new ia(null, this.canvas);
      this.tk = new Q(this.group, 6, "bubble");
      this.tk.aa();
      this.tk.Ga();
      this.Lt = new Q(this.group, 6, "bubble_gloss");
      this.Lt.aa();
      this.Lt.Ga();
      this.group.M(0.01);
      this.Pa();
    },
    Fx: function () {},
    U: function (a) {
      $a.prototype.U.call(this, a);
      a = this.tk;
      a.pc(a.zb + 10);
      switch (this.$a) {
        case 0:
          a = this.ef(0.5);
          this.group.M(0.01 + ec(0.2)(a));
          1 == a && ((this.time = 0), (this.$a = 1), $a.prototype.Nt.call(this));
          break;
        case 1:
          a = this.ef(0.5);
          1 == a && this.loaded && ((this.time = 0), (this.$a = 2));
          break;
        case 2:
          a = this.ef(0.25);
          a = za(2)(a);
          this.group.M(1 - a);
          this.group.fa(1 - a);
          1 == a && (this.$a = 3);
          break;
        case 3:
          $a.prototype.finish.call(this);
      }
    },
    Pa: function () {
      $a.prototype.Pa.call(this);
      var a = this.fb().te(),
        b = (0.1 * Math.max(600, Math.min(a.x, a.y))) / this.tk.ba.x;
      this.tk.M(b);
      this.Lt.M(b);
      b *= this.tk.ba.x;
      this.group.L(a.x - b);
      this.group.O(a.y - b);
    },
    X: function () {
      return 49;
    },
    s: Dd,
  });
  Ce.i = !0;
  Ce.F = R;
  Ce.prototype = C(R.prototype, {
    nl: function () {
      return 0;
    },
    ob: function () {
      R.prototype.ob.call(this);
      this.fb().createTexture(7);
      var a = this.fb().createTexture(6);
      this.xa.push(new Q(this.canvas, 7));
      for (var b = 0, c = ["squirrel", "logo", "bubble", "bubble_gloss"]; b < c.length; )
        this.xa.push(new Q(this.canvas, 6, c[b++]));
      this.text = new va(this.canvas, a.eG("text").id);
      this.text.ka("0");
    },
    yb: function () {
      R.prototype.yb.call(this);
      la.instance.BI();
      G.tj() && (B.sm = 1);
      q.sa();
      B.be || z.Uf();
      B.Vd || wa.Uf();
      this.hd = new hb();
      G.tj() ? (this.fh = ab) : q.gd() ? (G.TJ() ? (this.fh = wb) : (this.fh = mb)) : ((this.fh = ab), (this.fK = !0));
      this.hd.gH(this.fh);
    },
    B: function () {
      R.prototype.B.call(this);
      this.xa = null;
    },
    U: function (a) {
      R.prototype.U.call(this, a);
      if (null != this.hd)
        switch (
          ((a = this.xa[3]),
          a.pc(a.zb + 10),
          (a = this.xa[3]),
          a.pc(a.zb + 10),
          this.text.ka(Aa.ab(this.hd.ol())),
          this.text.Ke(),
          this.text.Ga(),
          this.$a)
        ) {
          case 0:
            G.eB(P.min(99, this.hd.ol())), this.hd.loaded && (G.eB(100), this.next(), this.$a++);
        }
    },
    re: function () {
      return [];
    },
    Ft: function () {},
    next: function () {
      var a = this;
      if (this.fh == ab) {
        var b = function () {
          a.cb(a.fh);
        };
        S.jz(this.fK ? "tutorial" : null).then(b, b);
      } else this.cb(this.fh);
    },
    Pa: function () {
      function a(f) {
        f.M(1);
        f.aa();
        f.Ga();
        f.L(c.x / 2);
        f.O(c.y / 2);
      }
      R.prototype.Pa.call(this);
      var b = this.xa[0],
        c = this.fb().te();
      a(b);
      b.M(Math.max(c.x / b.Ba(), c.y / b.ma()));
      b = this.xa[2];
      a(b);
      b.M((P.min(c.x, c.y) / b.Ba()) * 0.5);
      var d = this.xa[1];
      a(d);
      d.M(b.pa);
      d.L(d.ga - 0.1 * d.Ba());
      d.O(d.qa - 1.1 * b.ma());
      d = this.xa[3];
      d.pc(0);
      a(d);
      d.M(0.7 * b.pa);
      d.O(d.qa + 0.8 * b.ma());
      var e = this.xa[4];
      a(e);
      e.M(d.pa);
      e.L(d.ga);
      e.O(d.qa);
      this.text.qk();
      this.text.$c((this.text.ra.size * b.pa * 0.5) | 0);
      this.text.Ke();
      this.text.L(d.ga);
      this.text.O(d.qa + 1.1 * d.ma());
      this.text.Ga();
    },
    X: function () {
      return 67;
    },
    s: Ce,
  });
  Jb.i = !0;
  Jb.F = A;
  Jb.prototype = C(A.prototype, {
    B: function () {
      0 < (this.f & 8) || (A.prototype.B.call(this), (this.group = null), this.Ra.R(), (this.Ra = null));
    },
    Ub: function (a) {
      if (null == this.im) return a;
      this.im.button.Ub(a);
      null != this.jg && (this.jg.enabled = a);
      return a;
    },
    resize: function (a) {
      if (null != this.Ra) {
        null != this.im && this.im.mj(!0);
        var b = 0.01 * a.y,
          c = new W();
        c.j = 0;
        c.l = b;
        c.u = 0.99 * a.x;
        c.A = b + 0.1 * a.y;
        a = a.x / 2;
        b = 0.5 * (c.u - c.j);
        c.j = a - b;
        c.u = a + b;
        this.Ra.La(c);
        c = this.Ra.na();
        this.group.pe("bar").vg(c, 0, 0, -1);
        this.Dk.ub();
      }
    },
    tH: function (a, b) {
      var c = this;
      this.group.J(!1);
      this.group.O(1.5 * -this.group.ma());
      hd(function () {
        c.group.J(!0);
        c.group.Fa().y(0, 0.5, ec(0.1), null, function () {
          a && c.Ub(!0);
          null != b && b();
        });
      }, 0.5);
    },
    uH: function (a) {
      this.Ub(!1);
      this.group.Fa().y(1.5 * -this.group.ma(), 0.5, Ke(2), null, a);
    },
    kc: function () {
      A.prototype.kc.call(this);
      this.group = new ia();
      this.group.J(!1);
      var a = new ia("bar", this.group);
      this.Ra = new Hb();
      var b = new Q(a, 2, "menubar");
      b.node.name = "plank";
      b.L(15);
      b.O(13);
      this.Dk = new Be(a);
      this.Uk = new Ae(a);
      Vg || (this.jg = new ze(a));
      this.On = new ye(a);
      this.Y(null, this.Dk);
      this.Y(null, this.Uk);
      null != this.jg && this.Y(null, this.jg);
      this.Y(null, this.On);
      this.hL();
      this.wp();
    },
    OJ: function () {
      G.Nn() || ((this.im = new Cd(this.group.pe("bar"))), this.Y(null, this.im));
    },
    oA: function () {
      null != this.jg && this.jg.ck();
    },
    hr: function () {
      return this.Uk.hr();
    },
    GF: function () {
      var a = this.ll().vb(),
        b = new E();
      b.x = 281;
      b.y = 52;
      var c = new E();
      c.x = 0;
      c.y = 0;
      return a.Me(b, c);
    },
    ll: function () {
      return this.Dk.ll();
    },
    dG: function () {
      var a = this.ll().vb(),
        b = new E();
      b.x = 52;
      b.y = 52;
      var c = new E();
      c.x = 0;
      c.y = 0;
      return a.Me(b, c);
    },
    wp: function (a) {
      null == a && (a = q.uh());
      this.Uk.$f(a);
      this.Oz();
    },
    Qo: function (a) {
      this.Uk.Qo(a);
    },
    hL: function () {
      this.Dk.ub();
      this.Dk.em();
    },
    Rs: function (a) {
      this.Dk.Rs(a);
    },
    au: function (a, b) {
      null == b && (b = !1);
      null == a && (a = -1);
      Jb.Wk = B.nj;
      -1 < a && (Jb.Wk = a);
      this.On.$f();
      this.Oz();
      b && this.On.iI();
    },
    Oz: function () {
      var a = [this.Uk.ml()];
      null != this.jg && a.push(this.jg.ml());
      a.push(this.On.ml());
      for (var b = 65535, c = 0, d = a.length; c < d; ) {
        var e = c++;
        a[e].Da.ra.size < b && (b = a[e].Da.ra.size);
      }
      c = 0;
      for (d = a.length; c < d; ) a[c++].Bt(b);
    },
    X: function () {
      return 46;
    },
    s: Jb,
  });
  Be.i = !0;
  Be.F = A;
  Be.prototype = C(A.prototype, {
    em: function (a) {
      null == a && (a = q.Sd());
      var b = new W();
      b.j = 0;
      b.l = 1;
      b.u = 106;
      b.A = 104;
      La.offset(b, 0, -18);
      this.Wa.La(b);
      this.Wa.ka("" + a);
      this.Wa.Ad();
      this.Wa.cg(0, 0);
    },
    ub: function () {
      this.Aj.Tg(P.Ti(q.Fn(q.jG()), 0.01, 1));
      this.Hg.J(!0);
      this.Hg.zt(this.Aj.na());
    },
    Rs: function (a) {
      this.qz = a;
      this.ck();
      a = q.KF();
      this.vz = a.AH;
      this.Ig = a.xI;
      this.fill();
    },
    ll: function () {
      return this.sb;
    },
    U: function (a) {
      A.prototype.U.call(this, a);
      this.Hg.fa(P.map(Math.sin(5 * this.time), -1, 1, 0.25, 0.5));
    },
    ck: function () {
      this.sb.Fa().fg(1.1, 0.25, eh(2), 2);
    },
    fill: function () {
      this.f = (this.f & -2) | 1;
      var a = new Ib(this.Ig.shift(), this.Ig.shift(), 3, J(this, this.ZE));
      this.Y(null, a);
      a.mk(J(this, this.Hs));
    },
    Hs: function () {
      this.f = (this.f & -2) | 0;
      if (0 < this.Ig.length) this.em(++this.vz), z.play(z.lD), z.play(z.mv), this.fill();
      else {
        this.sb.Fa().sB();
        var a = this.qz;
        this.qz = null;
        a();
      }
    },
    ZE: function (a) {
      this.Aj.Tg(P.Ti(a, 0.01, 1));
      this.Hg.zt(this.Aj.na());
    },
    X: function () {
      return 45;
    },
    s: Be,
  });
  Ae.i = !0;
  Ae.F = A;
  Ae.prototype = C(A.prototype, {
    ml: function () {
      return this.Wa;
    },
    hr: function () {
      return this.sb;
    },
    $f: function (a) {
      null == a && (a = q.uh());
      var b = new W();
      b.j = 325;
      b.l = 14;
      b.u = 475;
      b.A = 78;
      this.Wa.La(b);
      this.Wa.ka(nc.kj(a));
      this.Wa.Ad();
    },
    Qo: function (a) {
      this.Nz();
      this.Oh = new ia(null, this.Ph);
      this.Oh.L(this.Wa.Da.ga);
      var b = null == a ? "null" : "" + a;
      0 < a && (b = "+" + b);
      this.Eg = new ib(this.Oh, 0 < a ? Jh : Kh);
      a = new W();
      a.j = -20;
      a.l = 0;
      a.u = 100;
      a.A = 80;
      this.Eg.La(a);
      this.Eg.ka(b);
      this.Eg.Ad();
      this.Y(null, this.Eg);
      this.Oh.fa(1);
      this.Oh.O(30);
      this.Oh.Fa().alpha(0, 1, Ke(2));
      this.Oh.Fa().y(70, 1, za(2), null, J(this, this.Nz));
    },
    Nz: function () {
      null != this.Eg && (this.Eg.B(), this.Oh.B(), (this.Eg = null));
    },
    B: function () {
      this.Eg = null;
      A.prototype.B.call(this);
    },
    X: function () {
      return 44;
    },
    s: Ae,
  });
  ze.i = !0;
  ze.F = A;
  ze.prototype = C(A.prototype, {
    ck: function () {
      this.sb.Fa().fg(1.1, 0.25, eh(2), 2);
    },
    ml: function () {
      this.$f();
      return this.Wa;
    },
    B: function () {
      A.prototype.B.call(this);
      oa.Pb().detach(J(this, this.Qb));
    },
    $f: function () {
      var a = new W();
      a.j = 580;
      a.l = 14;
      a.u = 700;
      a.A = 78;
      this.Wa.La(a);
      this.Wa.ka(q.VF() + "/" + q.UF(), 8, 200);
      this.Wa.Ad();
    },
    Qb: function (a) {
      if (this.enabled && 0 == a.type) {
        var b = new E();
        b.x = a.x;
        b.y = a.y;
        this.sb.Fb(b) && !G.Cy() && this.Bw(51);
      }
    },
    X: function () {
      return 43;
    },
    s: ze,
  });
  ye.i = !0;
  ye.F = A;
  ye.prototype = C(A.prototype, {
    ml: function () {
      this.$f();
      return this.Wa;
    },
    $f: function () {
      var a = new W();
      a.j = 810;
      a.l = 14;
      a.u = 1030;
      a.A = 78;
      this.Wa.La(a);
      this.Wa.ka(nc.kj(Jb.Wk));
      this.Wa.Ad();
    },
    iI: function () {
      var a = this;
      this.Wa.aa();
      this.sb.aa();
      this.Y(
        null,
        new Ib(0.7, 1, 0.5, function (b) {
          a.Wa.M(b);
          a.sb.M(b);
        }).$l(ec(0.5))
      );
    },
    X: function () {
      return 42;
    },
    s: ye,
  });
  Cd.i = !0;
  Cd.Aa = [vb];
  Cd.F = A;
  Cd.prototype = C(A.prototype, {
    B: function () {
      A.prototype.B.call(this);
      oa.Pb().detach(J(this, this.Qb));
    },
    La: function (a) {
      this.button.La(a);
      this.Dj &&
        (this.button.group.pc(0),
        this.jc.J(!1),
        this.$b.J(!1),
        this.button.Ub(!0),
        (this.Dj = !1),
        this.jc.fa(0),
        this.$b.fa(0),
        (a = this.button.na().l),
        this.jc.O(a),
        this.$b.O(a));
    },
    Fc: function () {
      this.Dj ? this.mj() : this.show();
    },
    show: function () {
      function a() {
        4 == (e += 1) && (b.Dj = !0);
      }
      var b = this;
      this.fs = !0;
      var c = B.Vd ? 1 : 0.5,
        d = B.be ? 1 : 0.5,
        e = 0,
        f = za(2),
        g = this.button.na();
      g.u = g.j + 1.25 * (g.u - g.j);
      g.A = g.l + 1.25 * (g.A - g.l);
      var h = g.j,
        l = g.l - 0.1 * (g.A - g.l),
        k = g.A - g.l;
      g.l = l;
      g.A = l + k;
      l = g.j - 1.25 * (g.u - g.j);
      k = g.u - g.j;
      g.j = l;
      g.u = l + k;
      this.jc.vg(g);
      this.jc.J(!0);
      l = g.j - 1.25 * (g.u - g.j);
      k = g.u - g.j;
      g.j = l;
      g.u = l + k;
      this.$b.vg(g);
      this.$b.J(!0);
      g = this.jc.ga;
      this.jc.L(h);
      this.jc.Fa().x(g, 0.25, f, null, a);
      this.jc.fa(0);
      this.jc.Fa().alpha(c, 0.25, f, null, a);
      g = this.$b.ga;
      this.$b.L(h);
      this.$b.J(!0);
      this.$b.Fa().x(g, 0.25, f, null, a);
      this.$b.fa(0);
      this.$b.Fa().alpha(d, 0.25, f, null, a);
      this.button.group.Fa().rotation(180, 0.25, f);
      oa.Pb().ya(J(this, this.Qb));
    },
    mj: function (a) {
      null == a && (a = !1);
      var b = this;
      if (this.fs) {
        this.button.Ub(!1);
        a && this.button.group.pc(0);
        var c = za(2);
        this.button.group.Fa().rotation(0, 0.25, c);
        var d = 0,
          e = function () {
            4 == (d += 1) && (b.jc.J(!1), b.$b.J(!1), b.button.Ub(!0), (b.Dj = !1), (b.fs = !1));
          },
          f = this.button.na().j;
        a
          ? (this.jc.L(f), this.$b.L(f), (d = 3), e())
          : (this.jc.Fa().x(f, 0.25, c, null, e),
            this.jc.Fa().alpha(0, 0.25, c, null, e),
            this.$b.Fa().x(f, 0.25, c, null, e),
            this.$b.Fa().alpha(0, 0.25, c, null, e));
      }
    },
    Qb: function (a) {
      if (this.Dj && 1 == a.type) {
        var b = new E();
        b.x = a.x;
        b.y = a.y;
        this.$b.Fb(b) &&
          ((a = B.be = !B.be), la.instance.Nc(), a ? z.ci() : z.Uf(), this.$b.fa(a ? 1 : 0.5), this.Jl());
        this.jc.Fb(b) &&
          ((b = B.Vd = !B.Vd), la.instance.Nc(), b ? wa.ci() : wa.Uf(), this.jc.fa(b ? 1 : 0.5), this.Jl());
      }
    },
    Jl: function () {
      S.UB(B.Vd ? 1 : 0, B.be ? 1 : 0);
    },
    X: function () {
      return 41;
    },
    s: Cd,
  });
  Bd.i = !0;
  Bd.F = R;
  Bd.prototype = C(R.prototype, {
    re: function () {
      return [];
    },
    Fh: function () {
      return !0;
    },
    nl: function () {
      return 0;
    },
    ob: function () {
      R.prototype.ob.call(this);
      this.pf("PauseDialog");
      this.ih("pane");
      this.jb("title", [Na, ob], this.translate(y.Uu));
      this.qg("resume", this.translate(y.Tu), J(this, this.WH));
      this.qg("end", this.translate(y.Su), J(this, this.JH));
      ka.instance().vc(0);
    },
    B: function () {
      R.prototype.B.call(this);
      ka.instance().vc(1);
    },
    yb: function () {
      R.prototype.yb.call(this);
      this.Pd(!0);
      S.qf("SCREEN_PAUSE");
    },
    Pa: function () {
      R.prototype.Pa.call(this);
      q.gd() && Za.UK(this.Qx(0), [this.Qx(1)]);
    },
    WH: function () {
      function a() {
        b.finish();
      }
      var b = this;
      S.resume().then(a, a);
    },
    JH: function () {
      function a() {
        b.finish();
      }
      var b = this;
      Oa.Sq(this.lf, "end", !0);
      S.cH().then(a, a);
    },
    X: function () {
      return 48;
    },
    s: Bd,
  });
  xe.i = !0;
  xe.F = A;
  xe.prototype = C(A.prototype, {
    B: function () {
      oa.Pb().detach(J(this, this.Qz));
      A.prototype.B.call(this);
    },
    U: function (a) {
      A.prototype.U.call(this, a);
      this.Pg[0] = this.position - this.rect.l;
      this.Pg[1] = this.position + this.C.ma() - this.rect.A;
      switch (this.state) {
        case 0:
          this.Ob = 0;
          this.qw() && (this.Xn(), (this.state = 2));
          break;
        case 1:
          this.force = this.Kq - this.Zr;
          this.Zr = this.Kq;
          this.setPosition(this.rect.l + this.offset + this.Ef);
          break;
        case 2:
          1 > Math.abs(this.Pg[0])
            ? (this.setPosition(this.rect.l), (this.state = 0))
            : 1 > Math.abs(this.Pg[1])
            ? (this.setPosition(this.rect.A - this.C.ma()), (this.state = 0))
            : (this.qw(),
              this.Xn(),
              0 < this.Pg[0] && (this.state = 3),
              0 > this.Pg[1] && (this.state = 4),
              P.Mw(this.ha, 0.1) && (this.state = 0));
          break;
        case 3:
          a = this.position - this.rect.l;
          0.001 > a * a
            ? (this.setPosition(this.rect.l), (this.state = this.ha = this.force = 0))
            : ((this.force += -0.1 * a), (this.ha *= 0.7), this.Xn());
          break;
        case 4:
          (a = this.position + this.C.ma() - this.rect.A),
            0.001 > a * a
              ? (this.setPosition(this.rect.A - this.C.ma()), (this.state = this.ha = this.force = 0))
              : ((this.force += -0.1 * a), (this.ha *= 0.7), this.Xn());
      }
    },
    Ka: function (a) {
      A.prototype.Ka.call(this, a);
      this.C.O(this.position * a + this.Vs * (1 - a));
    },
    Qz: function (a) {
      switch (this.state) {
        case 3:
          return;
        case 4:
          return;
      }
      switch (a.type) {
        case 0:
          this.state = 1;
          this.ha = this.force = 0;
          this.Zr = this.kx = this.Kq = a.y;
          this.Ef = 0;
          this.Fj[0] = this.position - this.rect.l;
          this.Fj[1] = this.position + this.C.ma() - this.rect.A;
          break;
        case 1:
          this.state = 2;
          this.offset += this.Ef;
          this.Ef = 0;
          this.Ob = 0.03;
          break;
        case 2:
          if (1 != this.state) break;
          this.Kq = a.y;
          this.Ef = a.y - this.kx;
          -this.Ef < this.Fj[0] && (this.Ef = -this.Fj[0]);
          -this.Ef > this.Fj[1] && (this.Ef = -this.Fj[1]);
          break;
        case 3:
          this.kn = a.scroll;
      }
    },
    Xn: function () {
      this.ha = (this.ha + this.force) * (1 - this.Ob);
      this.offset += this.ha;
      this.setPosition(this.rect.l + this.offset);
      this.force = 0;
    },
    setPosition: function (a) {
      this.Vs = this.position;
      this.position = a;
    },
    qw: function () {
      if (0 == this.kn) return !1;
      var a = this.kn;
      this.kn = 0;
      if (0 < a) {
        if (0 <= this.Pg[0]) return !1;
      } else if (0 >= this.Pg[1]) return !1;
      this.ha += 10 * a;
      this.ha = P.zE(this.ha);
      this.Ob = 0.08;
      return !0;
    },
    X: function () {
      return 61;
    },
    s: xe,
  });
  Zf.i = !0;
  Zf.prototype = {
    B: function () {
      this.Ao = this.Ij = null;
    },
    update: function (a) {
      0.5 > a
        ? this.Ao.zd.fa(2 * a)
        : (this.Ay ||
            ((this.Ay = !0),
            this.Ij.fw(),
            this.Ij.node.J(!0),
            this.Ij.parent instanceof Ka && (this.Ao.DA(), this.Ao.node.J(!1))),
          this.Ij.zd.fa(1 - 2 * (a - 0.5)));
      1 == a && this.Ij.DA();
    },
    s: Zf,
  };
  ib.i = !0;
  ib.Aa = [vb];
  ib.F = A;
  ib.prototype = C(A.prototype, {
    FL: function () {
      return this.Da;
    },
    fa: function (a) {
      this.Da.fa(a);
      this.Qa.fa(a);
      return a;
    },
    J: function (a) {
      this.Da.J(a);
      this.Qa.J(a);
      return a;
    },
    JL: function () {
      return this.Da.ga;
    },
    EL: function () {
      return this.Da.pa;
    },
    M: function (a) {
      this.oz && (this.Da.M(1), this.Qa.M(1), this.Da.aa(), this.Qa.aa());
      this.Da.M(a);
      this.Qa.M(a);
      return a;
    },
    mj: function () {
      this.Da.J(!1);
      this.Qa.J(!1);
      return this;
    },
    ut: function () {
      this.Da.mi(-1);
      this.Qa.mi(-1);
      return this;
    },
    VA: function () {
      this.Da.mi(0);
      this.Qa.mi(0);
      return this;
    },
    zL: function () {
      return this.Da.ra.size;
    },
    Bt: function (a) {
      this.o = a;
      this.Da.$c(a);
      this.Qa.$c(a);
      return a;
    },
    Rg: function () {
      this.Da.Rg();
      null != this.Qa && this.Qa.Rg();
      return this;
    },
    ka: function (a, b, c) {
      null == c && (c = 200);
      null == b && (b = 8);
      this.es = b;
      this.io = null == c ? b : c;
      if (this.Wa == a) return this;
      this.Wa = a;
      b = this.Nf;
      if (b.j >= b.u || b.l >= b.A) return this;
      this.Da.ka(a);
      null != this.Qa && this.Qa.ka(a);
      return this;
    },
    uJ: function (a) {
      this.ds = a;
    },
    La: function (a) {
      var b = this.Da.pa;
      this.Da.M(1);
      var c = new W();
      c.j = a.j;
      c.l = a.l;
      c.u = a.u;
      c.A = a.A;
      this.Nf = c;
      this.Da.L(a.j | 0);
      this.Da.O(a.l | 0);
      this.Da.nd((a.u - a.j) | 0, (a.A - a.l) | 0);
      null != this.Wa && this.Da.ka(this.Wa);
      null != this.Qa &&
        (this.Qa.L(this.Da.ga),
        this.Qa.O(this.Da.qa),
        this.Qa.nd((a.u - a.j) | 0, (a.A - a.l) | 0),
        null != this.Wa && this.Qa.ka(this.Wa));
      1 != this.ds && (this.io = ((a.A - a.l) * this.ds) | 0);
      this.Ad();
      this.Da.M(b);
      null != this.Qa && this.Qa.M(b);
      this.nb(a);
    },
    Ad: function () {
      if (-1 != this.o) return this;
      this.Da.Nm(this.es, this.io);
      null != this.Qa && this.Qa.Nm(this.es, this.io);
      return this;
    },
    aa: function () {
      this.oz = !0;
      this.Da.aa();
      null != this.Qa && this.Qa.aa();
    },
    cg: function (a, b) {
      this.zl = [a, b];
      var c = this.Nf;
      if (c.j >= c.u || c.l >= c.A) return this;
      this.Da.nb(this.Nf, a, b);
      null != this.Qa && this.Qa.nb(this.Nf, a, b);
      return this;
    },
    B: function () {
      null != this.Da &&
        (this.Da.B(), (this.Da = null), null != this.Qa && (this.Qa.B(), (this.Qa = null)), A.prototype.B.call(this));
    },
    nb: function (a) {
      null != this.zl &&
        (this.Da.nb(a, this.zl[0], this.zl[1]), null != this.Qa && this.Qa.nb(a, this.zl[0], this.zl[1]));
    },
    X: function () {
      return 40;
    },
    s: ib,
  });
  Ib.i = !0;
  Ib.F = A;
  Ib.prototype = C(A.prototype, {
    B: function () {
      this.on = this.Bo = this.tc = null;
      A.prototype.B.call(this);
    },
    $l: function (a) {
      this.on = a;
      return this;
    },
    mk: function (a) {
      this.tc = a;
      return this;
    },
    U: function (a) {
      A.prototype.U.call(this, a);
      a = this.ef(this.duration);
      null != this.on && (a = this.on(a));
      this.Bo(P.map(a, 0, 1, this.src, this.Sc));
      1 == a && (this.Bo(this.Sc), (a = this.tc), (this.on = this.Bo = this.tc = null), this.B(), null != a && a());
    },
    X: function () {
      return 59;
    },
    s: Ib,
  });
  Ad.i = !0;
  Ad.Aa = [vb];
  Ad.F = A;
  Ad.prototype = C(A.prototype, {
    B: function () {
      this.C = this.$j = null;
      A.prototype.B.call(this);
    },
    La: function (a) {
      this.C.vg(a, 2);
      this.$j.L(a.u - 0.89 * this.$j.Ba());
      this.$j.O(a.l + 0.05 * (a.A - a.l));
      this.$j.M(1);
      this.$j.Ct(0.15 * this.C.ma());
    },
    X: function () {
      return 38;
    },
    s: Ad,
  });
  Hb.i = !0;
  Hb.Aa = [vb];
  Hb.prototype = {
    R: function () {
      for (var a = 0, b = this.Nh; a < b.length; ) b[a++].R();
      null != this.parent && this.parent.removeChild(this);
      this.Nh = null;
    },
    na: function () {
      return La.clone(this.Nf);
    },
    vp: function () {
      if (null != this.ho) this.ho.layout();
      else for (var a = 0, b = this.Nh; a < b.length; ) b[a++].update();
    },
    update: function () {
      if ("window" == this.Ad) {
        var a = this.align(this.aJ(), 0, 0);
        this.scale.x = (a.u - a.j) / this.Xf.x;
        this.scale.y = (a.A - a.l) / this.Xf.y;
        this.parent.na();
        this.La(a);
      } else if (0 < this.Xf.x) {
        if (null == this.parent) {
          a = new W();
          var b = this.position.x,
            c = a.u - a.j;
          a.j = b;
          a.u = b + c;
          b = this.position.y;
          c = a.A - a.l;
          a.l = b;
          a.A = b + c;
          a.u = a.j + this.Xf.x;
          a.A = a.l + this.Xf.y;
        } else {
          var d = this.parent.na();
          b = this.parent.scale.x;
          c = this.parent.scale.y;
          var e = this.position.x * b,
            f = this.position.y * c;
          a = new W();
          a.j = e;
          a.l = f;
          a.u = e + this.Xf.x * b;
          a.A = f + this.Xf.y * c;
          b = a.j + d.j;
          c = a.u - a.j;
          a.j = b;
          a.u = b + c;
          b = a.l + d.l;
          c = a.A - a.l;
          a.l = b;
          a.A = b + c;
        }
        this.La(a);
      }
    },
    La: function (a) {
      a = this.$D(a);
      var b = this.Nf;
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      null != this.rd && this.rd.La(this.Nf);
      this.vp();
    },
    $D: function (a) {
      var b = La.clone(a);
      0 < this.Vj && (1 > this.Vj ? La.offset(b, -(a.u - a.j) * this.Vj, 0) : La.offset(b, -this.Vj, 0));
      0 < this.Wj && (1 > this.Wj ? La.offset(b, 0, -(a.A - a.l) * this.Wj) : La.offset(b, 0, -this.Wj));
      return b;
    },
    pf: function (a) {
      this.ho = a;
      this.ho.nJ(this);
    },
    Y: function (a, b) {
      null == a ? (a = new Hb(null, b)) : null != b && (a.name = b);
      a.parent = this;
      this.Tf++;
      this.Nh.push(a);
      return a;
    },
    removeChild: function (a) {
      return fa.remove(this.Nh, a) ? (this.Tf--, !0) : !1;
    },
    th: function (a) {
      return this.Nh[a];
    },
    find: function (a) {
      if (this.name == a) return this;
      for (var b = null, c = 0, d = this.Nh; c < d.length; ) {
        var e = d[c++].find(a);
        null != e && (b = e);
      }
      return b;
    },
    aJ: function () {
      var a = this.parent.na(),
        b = this.Xf,
        c = (a.u - a.j) / b.x,
        d = (a.A - a.l) / b.y,
        e = new W();
      if (c <= d) (e.j = a.j), (e.l = a.l), (e.u = e.j + (a.u - a.j)), (e.A = e.l + b.y * c);
      else {
        c = a.j;
        var f = e.u - e.j;
        e.j = c;
        e.u = c + f;
        c = a.l;
        f = e.A - e.l;
        e.l = c;
        e.A = c + f;
        e.u = e.j + b.x * d;
        e.A = e.l + (a.A - a.l);
      }
      return e;
    },
    align: function (a, b, c) {
      var d = this.parent.na();
      if (0 > b) {
        b = d.j;
        var e = a.u - a.j;
      } else (b = 0 < b ? d.u - (a.u - a.j) : d.j + (d.u - d.j - (a.u - a.j)) / 2), (e = a.u - a.j);
      a.j = b;
      a.u = b + e;
      b = 0 > c ? d.l : 0 < c ? d.A - (a.A - a.l) : d.l + (d.A - d.l - (a.A - a.l)) / 2;
      e = a.A - a.l;
      a.l = b;
      a.A = b + e;
      return a;
    },
    s: Hb,
  };
  Zb.i = !0;
  Zb.prototype = {
    nJ: function (a) {
      this.Bl = a;
      this.sa();
      this.layout();
    },
    layout: function () {
      throw 10;
    },
    sa: function () {},
    getType: function () {
      throw 11;
    },
    s: Zb,
  };
  tc.i = !0;
  tc.F = Zb;
  tc.prototype = C(Zb.prototype, {
    mJ: function (a, b) {
      this.Ig[0][a] = b;
    },
    DJ: function (a, b) {
      this.Ig[1][a] = b;
    },
    layout: function () {
      var a = this.Bl,
        b = a.na(),
        c = 0,
        d = 0;
      0 < this.spacing &&
        (1 > this.spacing
          ? ((c = -((b.u - b.j) * this.spacing) / 2), (d = -((b.A - b.l) * this.spacing) / 2))
          : (c = d = -this.spacing / 2),
        La.offset(b, c, d));
      for (var e = [], f = 0, g = b.u - b.j, h = 0, l = this.cols; h < l; ) {
        var k = h++;
        e[k] = f;
        f += this.Ig[0][k] * g;
      }
      e.push(g);
      g = [];
      var m = 0;
      f = b.A - b.l;
      h = 0;
      for (l = this.rows; h < l; ) (k = h++), (g[k] = m), (m += this.Ig[1][k] * f);
      g.push(f);
      f = b.j;
      m = b.l;
      b = new W();
      h = 0;
      for (l = this.rows; h < l; ) {
        k = h++;
        for (var t = 0, n = this.cols; t < n; ) {
          var w = t++;
          b.j = f + e[w];
          b.u = f + e[w + 1];
          b.l = m + g[k];
          b.A = m + g[k + 1];
          0 < this.spacing && La.offset(b, c, d);
          a.th(k * this.cols + w).La(b);
        }
      }
    },
    sa: function () {
      for (var a = this.Bl, b = 0, c = this.rows; b < c; )
        for (var d = b++, e = 0, f = this.cols; e < f; ) a.Y().name = "" + e++ + "," + d;
    },
    getType: function () {
      return tc.TYPE;
    },
    s: tc,
  });
  Yf.i = !0;
  Yf.prototype = {
    read: function () {
      "string" == typeof this.m && (this.m = JSON.parse(this.m));
      var a = this.cd(U.Z(this.m, "container"), null);
      a.update();
      return a;
    },
    cd: function (a, b) {
      null == b && (b = this.Cq(a));
      Object.prototype.hasOwnProperty.call(a, "layout") && b.pf(this.LE(U.Z(a, "layout")));
      a = U.Z(a, "container");
      if (null == a) return b;
      var c = null != b.ho;
      if (a instanceof Array)
        if (c)
          for (var d = 0, e = a.length; d < e; ) {
            var f = d++;
            c = b.th(f);
            this.YA(c, a[f]);
            this.cd(a[f], c);
          }
        else for (d = 0, e = a.length; d < e; ) (f = d++), (c = this.Cq(a[f])), b.Y(c), this.cd(a[f], c);
      else c ? ((c = b.th(0)), (c.name = U.Z(a, "name"))) : ((c = this.Cq(a)), b.Y(c)), this.cd(a, c);
      return b;
    },
    LE: function (a) {
      switch (U.Z(a, "type")) {
        case sc.TYPE:
          return new sc(U.Z(a, "axis"), Object.prototype.hasOwnProperty.call(a, "ratio") ? U.Z(a, "ratio") : 0.5);
        case tc.TYPE:
          var b = U.Z(a, "cols"),
            c = U.Z(a, "rows"),
            d = b instanceof Array ? b.length : b,
            e = c instanceof Array ? c.length : c;
          a = Object.prototype.hasOwnProperty.call(a, "spacing") ? U.Z(a, "spacing") : 0;
          d = new tc(d, e);
          d.spacing = a;
          if (b instanceof Array)
            for (e = 0, a = b.length; e < a; ) {
              var f = e++;
              d.mJ(f, b[f]);
            }
          if (c instanceof Array) for (b = c, e = 0, a = b.length; e < a; ) (f = e++), d.DJ(f, b[f]);
          return d;
        default:
          throw 12;
      }
    },
    Cq: function (a) {
      var b = U.Z(a, "name");
      b = Object.prototype.hasOwnProperty.call(a, "window") ? new we() : new Hb(null, b);
      this.YA(b, a);
      return b;
    },
    YA: function (a, b) {
      Object.prototype.hasOwnProperty.call(b, "name") && (a.name = U.Z(b, "name"));
      if (Object.prototype.hasOwnProperty.call(b, "padding")) {
        var c = U.Z(b, "padding");
        c instanceof Array ? ((a.Vj = c[0]), (a.Wj = c[1])) : ((a.Vj = c), (a.Wj = c));
      }
      if (Object.prototype.hasOwnProperty.call(b, "size")) {
        var d = U.Z(b, "size");
        a.vG = !0;
        c = a.Xf;
        c.x = d[0];
        c.y = d[1];
        c = a.size;
        c.x = d[0];
        c.y = d[1];
      }
      Object.prototype.hasOwnProperty.call(b, "position") &&
        ((d = U.Z(b, "position")), (c = a.position), (c.x = d[0]), (c.y = d[1]));
      Object.prototype.hasOwnProperty.call(b, "fit") && (a.Ad = U.Z(b, "fit"));
    },
    s: Yf,
  };
  sc.i = !0;
  sc.F = Zb;
  sc.prototype = C(Zb.prototype, {
    CL: function () {
      return this.gs;
    },
    JJ: function (a) {
      this.gs = P.Ti(a, 0.01, 0.99);
      null != this.Bl && this.vp();
      return a;
    },
    layout: function () {
      this.vp();
    },
    sa: function () {
      var a = this.Bl,
        b = a.Y();
      a = a.Y();
      b.name = "split0";
      a.name = "split1";
    },
    getType: function () {
      return sc.TYPE;
    },
    vp: function () {
      var a = this.Bl,
        b = a.na();
      switch (this.axis) {
        case 0:
          var c = b.l + this.gs * (b.A - b.l);
          c - b.l < this.so ? (c = b.l + this.so) : b.A - c < this.so && (c = b.A - this.so);
          var d = La.clone(b);
          d.A = c;
          a.th(0).La(d);
          d = La.clone(b);
          d.l = c;
          a.th(1).La(d);
          break;
        case 1:
          (c = b.j + this.gs * (b.u - b.j)),
            (d = La.clone(b)),
            (d.u = c),
            a.th(0).La(d),
            (d = La.clone(b)),
            (d.j = c),
            a.th(1).La(d);
      }
    },
    s: sc,
  });
  we.i = !0;
  we.F = Hb;
  we.prototype = C(Hb.prototype, {
    update: function () {
      this.Pa(null);
    },
    Pa: function () {
      var a = window,
        b = new W();
      b.j = 10;
      b.l = 10;
      b.u = ((a.innerWidth * a.devicePixelRatio) | 0) - 10;
      b.A = ((a.innerHeight * a.devicePixelRatio) | 0) - 10;
      Hb.prototype.La.call(this, b);
    },
    s: we,
  });
  Fb.i = !0;
  Fb.Aa = [dc];
  Fb.prototype = {
    cp: function (a) {
      for (var b = this.m, c = 0, d = this.ca * this.Ha; c < d; ) b[c++] = a;
      return this;
    },
    inRange: function (a, b) {
      return 0 <= a && a < this.ca && 0 <= b ? b < this.Ha : !1;
    },
    $F: function (a, b) {
      a *= this.ca;
      for (var c = this.m, d = 0, e = this.ca; d < e; ) {
        var f = d++;
        b[f] = c[a + f];
      }
      return b;
    },
    Sg: function (a, b) {
      a *= this.ca;
      for (var c = this.m, d = 0, e = this.ca; d < e; ) {
        var f = d++;
        c[a + f] = b[f];
      }
      return this;
    },
    forEach: function (a) {
      for (var b = this.m, c = this.ca, d = 0, e = this.ca * this.Ha; d < e; ) {
        var f = d++;
        b[f] = a(b[f], f % c, (f / c) | 0);
      }
      return this;
    },
    resize: function (a, b) {
      if (a == this.ca && b == this.Ha) return this;
      var c = this.m;
      this.m = Array(a * b);
      if (a == this.ca)
        return ha.Wb(c, 0, this.m, 0, this.ca * (b < this.Ha ? b : this.Ha)), (this.ca = a), (this.Ha = b), this;
      for (var d = a < this.ca ? a : this.ca, e, f, g = this.m, h = 0, l = b < this.Ha ? b : this.Ha; h < l; ) {
        f = h++;
        e = f * a;
        f *= this.ca;
        for (var k = 0, m = d; k < m; ) {
          var t = k++;
          g[e + t] = c[f + t];
        }
      }
      this.ca = a;
      this.Ha = b;
      return this;
    },
    Bq: function (a, b) {
      if (a != b) {
        a *= this.ca;
        b *= this.ca;
        for (var c = this.m, d = 0, e = this.ca; d < e; ) {
          var f = d++;
          c[b + f] = c[a + f];
        }
      }
      return this;
    },
    s: Fb,
  };
  Qc.i = !0;
  Qc.rc = !0;
  Qc.prototype = { s: Qc };
  zd.i = !0;
  zd.prototype = { s: zd };
  yd.i = !0;
  yd.Aa = [Qc];
  yd.prototype = {
    R: function () {
      this.m = this.kd = null;
    },
    Ca: function () {
      return this.Cd < this.Qf;
    },
    next: function () {
      return this.m[this.Cd++];
    },
    remove: function () {
      this.kd.JI(--this.Cd);
      this.Qf--;
    },
    s: yd,
  };
  ve.i = !0;
  ve.rc = !0;
  ve.Aa = [dc];
  Nc.i = !0;
  Nc.Aa = [ve];
  Nc.prototype = {
    enqueue: function (a) {
      this.S == this.o && this.grow();
      this.m[(this.o++ + this.Sa) % this.S] = a;
    },
    bj: function () {
      var a = this.m[this.Sa++];
      this.Sa == this.S && (this.Sa = 0);
      this.o--;
      return a;
    },
    clear: function (a) {
      null == a && (a = !1);
      a && ha.jf(this.m);
      this.Sa = this.o = 0;
    },
    Wg: function () {
      if (0 == this.o) return [];
      for (var a = this.m, b = Array(this.o), c = 0, d = this.o; c < d; ) {
        var e = c++;
        b[e] = a[(e + this.Sa) % this.S];
      }
      return b;
    },
    grow: function () {
      var a = this.S;
      this.S = Yb.ud(this.Uc, this.S);
      this.ag(a, this.S);
    },
    ag: function (a, b) {
      var c = Array(b);
      a < b
        ? this.Sa + this.o > a
          ? ((b = a - this.Sa), ha.Wb(this.m, this.Sa, c, 0, b), ha.Wb(this.m, 0, c, b, a - b))
          : ha.Wb(this.m, this.Sa, c, 0, this.o)
        : this.Sa + this.o > a
        ? ((b = this.o - this.Sa), ha.Wb(this.m, this.Sa, c, 0, a - this.Sa), ha.Wb(this.m, 0, c, this.Sa, b))
        : ha.Wb(this.m, this.Sa, c, 0, this.o);
      this.m = c;
      this.Sa = 0;
    },
    s: Nc,
  };
  Xf.i = !0;
  Xf.rc = !0;
  Xf.Aa = [dc];
  Pb.i = !0;
  Pb.Aa = [Xf];
  Pb.prototype = {
    top: function () {
      return this.m[this.Xa - 1];
    },
    push: function (a) {
      this.Xa == this.S && this.grow();
      this.m[this.Xa++] = a;
    },
    R: function () {
      ha.jf(this.m);
      this.m = null;
      null != this.Va && (this.Va.R(), (this.Va = null));
    },
    clear: function (a) {
      null == a && (a = !1);
      a && ha.jf(this.m);
      this.Xa = 0;
    },
    grow: function () {
      this.S = Yb.ud(this.Uc, this.S);
      this.ag(this.S);
    },
    ag: function (a) {
      a = Array(a);
      ha.Wb(this.m, 0, a, 0, this.Xa);
      this.m = a;
    },
    s: Pb,
  };
  ue.i = !0;
  ue.Aa = [dc];
  ue.prototype = {
    cq: function (a) {
      if (null != a.Fg) return a;
      this.o++;
      a.next = this.Ec;
      null != a.next && (a.next.mc = a);
      this.Ec = a;
      a.Fg = this;
      return a;
    },
    removeNode: function (a) {
      if (0 == this.o || null == a.Fg) return this;
      this.VK(a);
      null != a.mc && (a.mc.next = a.next);
      null != a.next && (a.next.mc = a.mc);
      this.Ec == a && (this.Ec = a.next);
      this.o--;
      a.Fg = null;
      a.next = a.mc = null;
      return this;
    },
    gw: function (a, b) {
      for (var c = this.Ec; null != c; ) {
        if (c == a) {
          a = c;
          for (c = this.Ec; null != c; ) {
            if (c == b) {
              a.dw(c);
              c.dw(a);
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
    VK: function (a) {
      if (null == a.Fg) return a;
      for (var b = a.eb; null != b; ) {
        for (var c = b.node, d = c.eb; null != d; ) {
          var e = d.next;
          d.node == a &&
            (null != d.mc && (d.mc.next = e),
            null != e && (e.mc = d.mc),
            c.eb == d && (c.eb = e),
            d.R(),
            c.us--,
            null != this.Wl && this.Wl(d));
          d = e;
        }
        c = b.next;
        null != b.mc && (b.mc.next = c);
        null != c && (c.mc = b.mc);
        a.eb == b && (a.eb = c);
        b.R();
        a.us--;
        null != this.Wl && this.Wl(b);
        b = c;
      }
      a.eb = null;
      return a;
    },
    clearMarks: function () {
      for (var a = this.Ec; null != a; ) (a.tb = !1), (a = a.next);
      return this;
    },
    Jw: function () {
      for (var a = this.Ec; null != a; ) (a.parent = null), (a = a.next);
      return this;
    },
    ix: function (a, b, c, d, e) {
      null == e && (e = !1);
      null == a && (a = !1);
      if (0 == this.o) return this;
      this.sw && this.clearMarks();
      var f = 1;
      null == b && (b = this.Ec);
      var g = this.ko,
        h = this.Bj;
      h[0] = b;
      b.parent = b;
      b.depth = 0;
      if (a)
        if (null == c)
          if (e) b.mb.cd(!0, d) && this.mn(b, !0, d);
          else {
            a = h[0];
            c = a.mb;
            if (!c.cd(!0, d)) return this;
            for (; 0 < f; )
              if (((a = h[--f]), !a.tb && a.visible)) {
                a.tb = !0;
                c = a.mb;
                if (!c.cd(!1, d)) break;
                for (b = a.eb; null != b; )
                  b.node.visible &&
                    ((c = a.mb),
                    (b.node.parent = a),
                    (b.node.depth = a.depth + 1),
                    c.cd(!0, d) && ((e = b.node), f == g && (h = this.Zo((g *= 2))), (h[f++] = e))),
                    (b = b.next);
              }
          }
        else if (e) c(b, !0, d) && this.ln(b, c, !0, d);
        else {
          a = h[0];
          if (!c(a, !0, d)) return this;
          for (; 0 < f; )
            if (((a = h[--f]), !a.tb && a.visible)) {
              a.tb = !0;
              if (!c(a, !1, d)) break;
              for (b = a.eb; null != b; )
                b.node.visible &&
                  ((b.node.parent = a),
                  (b.node.depth = a.depth + 1),
                  c(b.node, !0, d) && ((e = b.node), f == g && (h = this.Zo((g *= 2))), (h[f++] = e))),
                  (b = b.next);
            }
        }
      else if (null == c)
        if (e) this.mn(b, !1, d);
        else
          for (; 0 < f; ) {
            if (((a = h[--f]), !a.tb && a.visible)) {
              a.tb = !0;
              c = a.mb;
              if (!c.cd(!1, d)) break;
              for (b = a.eb; null != b; )
                b.node.visible &&
                  ((e = b.node),
                  f == g && (h = this.Zo((g *= 2))),
                  (h[f++] = e),
                  (b.node.parent = a),
                  (b.node.depth = a.depth + 1)),
                  (b = b.next);
            }
          }
      else if (e) this.ln(b, c, !1, d);
      else
        for (; 0 < f; )
          if (((a = h[--f]), !a.tb && a.visible)) {
            a.tb = !0;
            if (!c(a, !1, d)) break;
            for (b = a.eb; null != b; )
              b.node.visible &&
                ((e = b.node),
                f == g && (h = this.Zo((g *= 2))),
                (h[f++] = e),
                (b.node.parent = a),
                (b.node.depth = a.depth + 1)),
                (b = b.next);
          }
      return this;
    },
    Qq: function (a, b, c, d, e) {
      null == b && (b = !1);
      if (0 == this.o) return this;
      this.sw && this.clearMarks();
      var f = 0,
        g = 1,
        h = this.Of,
        l = this.jo;
      null == c && (c = this.Ec);
      for (var k = this.Ec; null != k; ) (k.depth = 0), (k = k.next);
      c.tb = !0;
      c.parent = c;
      h[0] = c;
      if (b)
        if (null == d) {
          b = h[0];
          d = b.mb;
          if (!d.cd(!0, e)) return this;
          for (; 0 < g; ) {
            b = h[f];
            d = b.mb;
            if (!d.cd(!1, e)) break;
            for (c = b.eb; null != c; ) {
              k = c.node;
              if (
                !k.tb &&
                k.visible &&
                ((k.tb = !0), (k.parent = b), (k.depth = b.depth + 1), k.depth <= a && ((d = k.mb), d.cd(!0, e)))
              ) {
                var m = g++ + f;
                m == l && (this.Yo((l *= 2)), (h = this.Of));
                h[m] = k;
              }
              c = c.next;
            }
            ++f;
            --g;
          }
        } else {
          b = h[0];
          if (!d(b, !0, e)) return this;
          for (; 0 < g; ) {
            b = h[f];
            if (!d(b, !1, e)) break;
            for (c = b.eb; null != c; )
              (k = c.node),
                !k.tb &&
                  k.visible &&
                  ((k.tb = !0),
                  (k.parent = b),
                  (k.depth = b.depth + 1),
                  k.depth <= a &&
                    d(k, !0, e) &&
                    ((m = g++ + f), m == l && (this.Yo((l *= 2)), (h = this.Of)), (h[m] = k))),
                (c = c.next);
            ++f;
            --g;
          }
        }
      else if (null == d)
        for (; 0 < g; ) {
          b = h[f];
          d = b.mb;
          if (!d.cd(!1, e)) break;
          for (c = b.eb; null != c; )
            (k = c.node),
              !k.tb &&
                k.visible &&
                ((k.tb = !0),
                (k.depth = b.depth + 1),
                (k.parent = b),
                k.depth <= a && ((m = g++ + f), m == l && (this.Yo((l *= 2)), (h = this.Of)), (h[m] = k))),
              (c = c.next);
          ++f;
          --g;
        }
      else
        for (; 0 < g; )
          if (((b = h[f]), b.depth > a)) --g, ++f;
          else {
            if (!d(b, !1, e)) break;
            for (c = b.eb; null != c; )
              (k = c.node),
                !k.tb &&
                  k.visible &&
                  ((k.tb = !0),
                  (k.depth = b.depth + 1),
                  (k.parent = b),
                  k.depth <= a && ((m = g++ + f), m == l && (this.Yo((l *= 2)), (h = this.Of)), (h[m] = k))),
                (c = c.next);
            ++f;
            --g;
          }
      return this;
    },
    R: function () {
      for (var a = this.Ec; null != a; ) {
        for (var b = a.next, c = a.eb; null != c; ) {
          var d = c.next;
          c.next = c.mc = null;
          c.node = null;
          c = d;
        }
        a.R();
        a = b;
      }
      this.Ec = null;
      ha.jf(this.Bj);
      this.Bj = null;
      ha.jf(this.Of);
      this.Of = null;
      null != this.Va && (this.Va.R(), (this.Va = null));
      this.Wl = this.kq = null;
    },
    iterator: function () {
      if (this.Hb) {
        if (null == this.Va) this.Va = new xd(this);
        else {
          var a = this.Va;
          a.zj = a.kd.Ec;
        }
        return this.Va;
      }
      return new xd(this);
    },
    mn: function (a, b, c) {
      a.tb = !0;
      var d = a.mb;
      if (!d.cd(!1, c)) return !1;
      for (var e = a.eb; null != e; ) {
        var f = e.node;
        if (!f.tb && f.visible)
          if (((e.node.parent = a), (e.node.depth = a.depth + 1), b)) {
            if (((d = f.mb), d.cd(!0, c) && !this.mn(f, !0, c))) return !1;
          } else if (!this.mn(f, !1, c)) return !1;
        e = e.next;
      }
      return !0;
    },
    ln: function (a, b, c, d) {
      a.tb = !0;
      if (!b(a, !1, d)) return !1;
      for (var e = a.eb; null != e; ) {
        var f = e.node;
        if (!f.tb && f.visible)
          if (((e.node.parent = a), (e.node.depth = a.depth + 1), c)) {
            if (b(f, !0, d) && !this.ln(f, b, !0, d)) return !1;
          } else if (!this.ln(f, b, !1, d)) return !1;
        e = e.next;
      }
      return !0;
    },
    Zo: function (a) {
      var b = Array(a);
      ha.Wb(this.Bj, 0, b, 0, this.ko);
      this.Bj = b;
      this.ko = a;
      return this.Bj;
    },
    Yo: function (a) {
      var b = Array(a);
      ha.Wb(this.Of, 0, b, 0, this.jo);
      this.Of = b;
      this.jo = a;
    },
    s: ue,
  };
  xd.i = !0;
  xd.Aa = [Qc];
  xd.prototype = {
    R: function () {
      this.zj = this.kd = null;
    },
    Ca: function () {
      return null != this.zj;
    },
    next: function () {
      var a = this.zj.mb;
      this.zj = this.zj.next;
      return a;
    },
    remove: function () {
      throw 13;
    },
    s: xd,
  };
  wd.i = !0;
  wd.Aa = [Bc];
  wd.prototype = {
    R: function () {
      this.next = this.mc = this.node = null;
    },
    s: wd,
  };
  Pc.i = !0;
  Pc.Aa = [Bc];
  Pc.prototype = {
    R: function () {
      this.Fg = this.eb = this.next = this.mc = this.mb = null;
    },
    YG: function (a) {
      return null != this.Ox(a) ? null != a.Ox(this) : !1;
    },
    Ox: function (a) {
      for (var b = !1, c = this.eb; null != c; ) {
        if (c.node == a) {
          b = !0;
          break;
        }
        c = c.next;
      }
      return b ? c : null;
    },
    dw: function (a, b) {
      null == b && (b = 1);
      a = null != this.Fg.kq ? this.Fg.kq(a, b) : new wd(a, b);
      a.next = this.eb;
      null != this.eb && (this.eb.mc = a);
      this.eb = a;
      this.us++;
      return this;
    },
    s: Pc,
  };
  mc.i = !0;
  mc.next = function () {
    null == mc.cw && (mc.cw = 0);
    return mc.cw++;
  };
  te.i = !0;
  te.rc = !0;
  te.Aa = [dc];
  Vd.i = !0;
  Vd.Aa = [te];
  Vd.prototype = {
    get: function (a) {
      var b = this.Ha,
        c = b.xj[(73856093 * a) & b.Dl];
      if (-1 == c) a = -2147483648;
      else if (((b = b.m), b[c] == a)) a = b[c + 1];
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
      return -2147483648 == a ? null : this.Cj[a];
    },
    set: function (a, b) {
      this.o == this.S && this.grow();
      var c = this.ze,
        d = this.Ha;
      d.o == d.S && d.grow();
      var e = d.m,
        f = d.xj,
        g = 3 * d.ze;
      d.ze = d.jd[d.ze];
      e[g] = a;
      e[g + 1] = c;
      var h = (73856093 * a) & d.Dl,
        l = f[h];
      if (-1 == l) (f[h] = g), d.o++, (d = !0);
      else {
        f = e[l] != a;
        for (h = e[l + 2]; -1 != h; ) e[h] == a && (f = !1), (l = h), (h = e[h + 2]);
        e[l + 2] = g;
        d.o++;
        d = f;
      }
      this.Cj[c] = b;
      this.Cl[c] = a;
      this.ze = this.jd[c];
      this.o++;
      return d;
    },
    grow: function () {
      var a = this.S;
      this.S = Yb.ud(this.Ha.Uc, this.S);
      var b = Array(this.S);
      ha.Wb(this.jd, 0, b, 0, a);
      this.jd = b;
      b = Array(this.S);
      ha.Wb(this.Cl, 0, b, 0, a);
      b = this.Cl = b;
      for (var c = a, d = this.S; c < d; ) b[c++] = -2147483648;
      b = this.jd;
      c = a - 1;
      for (d = this.S - 1; c < d; ) {
        var e = c++;
        b[e] = e + 1;
      }
      b[this.S - 1] = -1;
      this.ze = a;
      b = Array(this.S);
      ha.Wb(this.Cj, 0, b, 0, a);
      this.Cj = b;
    },
    R: function () {
      ha.jf(this.Cj);
      this.jd = this.Cl = this.Cj = null;
      this.Ha.R();
      this.Ha = null;
      null != this.Va && (this.Va.R(), (this.Va = null));
    },
    s: Vd,
  };
  Fc.i = !0;
  Fc.Aa = [te];
  Fc.prototype = {
    grow: function () {
      var a = this.S;
      this.S = Yb.ud(this.Uc, this.S);
      var b = Array(this.S);
      ha.Wb(this.jd, 0, b, 0, a);
      this.jd = b;
      b = Array(3 * this.S);
      ha.Wb(this.m, 0, b, 0, 3 * a);
      this.m = b;
      b = this.jd;
      for (var c = a - 1, d = this.S - 1; c < d; ) {
        var e = c++;
        b[e] = e + 1;
      }
      b[this.S - 1] = -1;
      this.ze = a;
      e = 3 * a + 2;
      b = this.m;
      c = 0;
      for (d = this.S - a; c < d; ) ++c, (b[e - 1] = -2147483648), (b[e] = -1), (e += 3);
    },
    R: function () {
      this.jd = this.m = this.xj = null;
      null != this.Va && (this.Va.R(), (this.Va = null));
    },
    s: Fc,
  };
  se.i = !0;
  se.Aa = [ve];
  se.prototype = {
    enqueue: function (a) {
      this.o == this.S && this.grow();
      this.m[++this.o] = a;
      a = a.position = this.o;
      var b = this.m,
        c = a >> 1,
        d = b[a],
        e = d.priority;
      if (this.Ae)
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
    bj: function () {
      var a = this.m,
        b = a[1];
      b.position = -1;
      a[1] = a[this.o];
      var c = 1;
      a = this.m;
      var d = 2,
        e = a[1],
        f = e.priority;
      if (this.Ae)
        for (; d < this.o; ) {
          d < this.o - 1 && 0 < a[d].priority - a[d + 1].priority && ++d;
          var g = a[d];
          if (0 < f - g.priority) (a[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
          else break;
        }
      else
        for (; d < this.o; )
          if ((d < this.o - 1 && 0 > a[d].priority - a[d + 1].priority && ++d, (g = a[d]), 0 > f - g.priority))
            (a[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
          else break;
      a[c] = e;
      e.position = c;
      this.o--;
      return b;
    },
    OI: function (a, b) {
      var c = a.priority;
      if (c == b) return this;
      a.priority = b;
      a = a.position;
      if (this.Ae)
        if (b < c) {
          b = a;
          c = this.m;
          var d = a >> 1;
          a = c[a];
          var e = a.priority;
          if (this.Ae)
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
          c = this.m;
          d = a << 1;
          a = c[a];
          e = a.priority;
          if (this.Ae)
            for (; d < this.o; )
              if ((d < this.o - 1 && 0 < c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 < e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          else
            for (; d < this.o; )
              if ((d < this.o - 1 && 0 > c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 > e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          c[b] = a;
          a.position = b;
          b = this.o;
          c = this.m;
          d = b >> 1;
          a = c[b];
          e = a.priority;
          if (this.Ae)
            for (; 0 < d; )
              if (((f = c[d]), 0 > e - f.priority)) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
          else
            for (; 0 < d; )
              if (((f = c[d]), 0 < e - f.priority)) (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
        }
      else {
        if (b > c) (b = a), (c = this.m), (d = a >> 1), (a = c[a]);
        else {
          b = a;
          c = this.m;
          d = a << 1;
          a = c[a];
          e = a.priority;
          if (this.Ae)
            for (; d < this.o; )
              if ((d < this.o - 1 && 0 < c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 < e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          else
            for (; d < this.o; )
              if ((d < this.o - 1 && 0 > c[d].priority - c[d + 1].priority && ++d, (f = c[d]), 0 > e - f.priority))
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          c[b] = a;
          a.position = b;
          b = this.o;
          c = this.m;
          d = b >> 1;
          a = c[b];
        }
        e = a.priority;
        if (this.Ae)
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
    remove: function (a) {
      if (0 == this.o) return !1;
      if (1 == a.position) this.bj();
      else {
        a = a.position;
        var b = this.m;
        b[a] = b[this.o];
        var c = a;
        b = this.m;
        var d = a << 1,
          e = b[a],
          f = e.priority;
        if (this.Ae)
          for (; d < this.o; ) {
            d < this.o - 1 && 0 < b[d].priority - b[d + 1].priority && ++d;
            var g = b[d];
            if (0 < f - g.priority) (b[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
            else break;
          }
        else
          for (; d < this.o; )
            if ((d < this.o - 1 && 0 > b[d].priority - b[d + 1].priority && ++d, (g = b[d]), 0 > f - g.priority))
              (b[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
            else break;
        b[c] = e;
        e.position = c;
        c = a;
        b = this.m;
        d = a >> 1;
        e = b[a];
        a = e.priority;
        if (this.Ae)
          for (; 0 < d; )
            if (((g = b[d]), 0 > a - g.priority)) (b[c] = g), (g.position = c), (c = d), (d >>= 1);
            else break;
        else
          for (; 0 < d; )
            if (((g = b[d]), 0 < a - g.priority)) (b[c] = g), (g.position = c), (c = d), (d >>= 1);
            else break;
        b[c] = e;
        e.position = c;
        this.o--;
      }
      return !0;
    },
    clear: function (a) {
      null == a && (a = !1);
      a && ha.jf(this.m);
      this.o = 0;
    },
    iterator: function () {
      if (this.Hb) {
        if (null == this.Va) return new vd(this);
        this.Va.reset();
        return this.Va;
      }
      return new vd(this);
    },
    NI: function () {
      for (var a = this.o >> 1; 1 <= a; ) this.Hy(a, this.o), --a;
    },
    Hy: function (a, b) {
      var c = this.m,
        d = a << 1,
        e = d + 1,
        f = a;
      this.Ae
        ? (d <= b && 0 > c[d].priority - c[a].priority && (f = d),
          d + 1 <= b && 0 > c[d + 1].priority - c[f].priority && (f = e))
        : (d <= b && 0 < c[d].priority - c[a].priority && (f = d),
          d + 1 <= b && 0 < c[d + 1].priority - c[f].priority && (f = e));
      f != a &&
        ((d = c[f]),
        (e = c[a]),
        (c[f] = e),
        (c[a] = d),
        (a = d.position),
        (d.position = e.position),
        (e.position = a),
        this.Hy(f, b));
    },
    grow: function () {
      this.S = Yb.ud(this.Uc, this.S);
      this.ag(this.S);
    },
    ag: function (a) {
      a = Array(a + 1);
      ha.Wb(this.m, 0, a, 0, this.o + 1);
      this.m = a;
    },
    s: se,
  };
  vd.i = !0;
  vd.Aa = [Qc];
  vd.prototype = {
    reset: function () {
      this.Cd = 0;
      this.Qf = this.kd.o;
      this.m = Array(this.Qf);
      ha.Wb(this.kd.m, 1, this.m, 0, this.Qf);
      return this;
    },
    Ca: function () {
      return this.Cd < this.Qf;
    },
    next: function () {
      return this.m[this.Cd++];
    },
    remove: function () {
      this.kd.remove(this.m[this.Cd - 1]);
    },
    s: vd,
  };
  Tg.i = !0;
  Tg.sk = function (a, b) {
    var c = a.length;
    if (null == b)
      for (; 1 < --c; ) {
        var d = (Vf.f() * c) | 0,
          e = a[c];
        a[c] = a[d];
        a[d] = e;
      }
    else for (var f = 0; 1 < --c; ) (d = (b[f++] * c) | 0), (e = a[c]), (a[c] = a[d]), (a[d] = e);
  };
  Wf.i = !0;
  Yb.i = !0;
  Yb.ud = function (a, b) {
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
          b = (a >> 3) + (9 > a ? 3 : 6);
          b += a;
          break;
        case 0:
          throw 16;
      }
    return b;
  };
  ha.i = !0;
  ha.Wg = function (a, b, c) {
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
  ha.Wb = function (a, b, c, d, e) {
    if (0 < e)
      if (a == c)
        if (b < d) {
          var f = b + e;
          b = d + e;
          for (var g = 0; g < e; ) ++g, --f, --b, (a[b] = a[f]);
        } else {
          if (b > d) for (f = b, b = d, g = 0; g < e; ) ++g, (a[b] = a[f]), ++f, ++b;
        }
      else if (0 == b && 0 == d) for (g = 0; g < e; ) (f = g++), (c[f] = a[f]);
      else if (0 == b) for (g = 0; g < e; ) (f = g++), (c[d + f] = a[f]);
      else if (0 == d) for (g = 0; g < e; ) (f = g++), (c[f] = a[b + f]);
      else for (g = 0; g < e; ) (f = g++), (c[d + f] = a[b + f]);
  };
  ha.sa = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    var e = c;
    for (c = 0 >= d ? a.length : c + d; e < c; ) a[e++] = b;
    return a;
  };
  ha.jf = function (a) {
    var b, c;
    null == c && (c = 0);
    null == b && (b = 0);
    var d = b;
    for (b = 0 >= c ? a.length : b + c; d < b; ) a[d++] = null;
  };
  ha.bE = function (a, b, c) {
    for (var d = 0, e, f = c + 1; d < f; ) (e = d + ((f - d) >> 1)), a[e] < b ? (d = e + 1) : (f = e);
    return d <= c && a[d] == b ? d : ~d;
  };
  Vf.i = !0;
  Vf.f = function () {
    return Math.random();
  };
  re.i = !0;
  re.gr = function (a) {
    for (var b = 0, c = re.content; b < c.length; ) {
      var d = c[b];
      ++b;
      if (d.name == a) return null != d.hK ? ra.Cs(d.hK) : pb.decode(d.data);
    }
    return null;
  };
  rc.i = !0;
  rc.delay = function (a, b) {
    var c = new rc(b);
    c.Ic = function () {
      c.stop();
      a();
    };
    return c;
  };
  rc.prototype = {
    stop: function () {
      null != this.id && (clearInterval(this.id), (this.id = null));
    },
    Ic: function () {},
    s: rc,
  };
  qe.i = !0;
  qe.F = Ja;
  qe.prototype = C(Ja.prototype, {
    YK: function () {
      return this.value;
    },
    s: qe,
  });
  ra.i = !0;
  ra.Cs = function (a) {
    if (void 0 == Ld.hv) {
      for (var b = new Uint8Array(a.length << 1), c = 0, d = a.length; c < d; ) {
        var e = c++,
          f = a.charCodeAt(e);
        b[e << 1] = f & 255;
        b[(e << 1) | 1] = f >> 8;
      }
      return new ra(b.buffer);
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
    return new ra(new Uint8Array(b).buffer);
  };
  ra.bi = function (a) {
    var b = a.zG;
    return null != b ? b : new ra(a);
  };
  ra.prototype = {
    sub: function (a, b) {
      if (0 > a || 0 > b || a + b > this.length) throw 17;
      return new ra(this.b.buffer.slice(a + this.b.byteOffset, a + this.b.byteOffset + b));
    },
    Ln: function (a, b, c) {
      if (0 > a || 0 > b || a + b > this.length) throw 18;
      null == c && (c = Ld.Up);
      var d = "",
        e = this.b,
        f = a;
      a += b;
      switch (c.G) {
        case 0:
          for (; f < a; )
            if (((c = e[f++]), 128 > c)) {
              if (0 == c) break;
              d += String.fromCodePoint(c);
            } else
              224 > c
                ? ((c = ((c & 63) << 6) | (e[f++] & 127)), (d += String.fromCodePoint(c)))
                : 240 > c
                ? ((c = ((c & 31) << 12) | ((e[f++] & 127) << 6) | (e[f++] & 127)), (d += String.fromCodePoint(c)))
                : ((c = ((c & 15) << 18) | ((e[f++] & 127) << 12) | ((e[f++] & 127) << 6) | (e[f++] & 127)),
                  (d += String.fromCodePoint(c)));
          break;
        case 1:
          for (; f < a; ) (c = e[f++] | (e[f++] << 8)), (d += String.fromCodePoint(c));
      }
      return d;
    },
    toString: function () {
      return this.Ln(0, this.length);
    },
    s: ra,
  };
  var Ld = (Mb.e1 = {
    hg: !0,
    Oc: null,
    Up: { I: "e10", G: 0, H: "e1", toString: H },
    hv: { I: "e11", G: 1, H: "e1", toString: H },
  });
  Ld.Oc = [Ld.Up, Ld.hv];
  pb.i = !0;
  pb.encode = function (a, b) {
    null == b && (b = !0);
    var c = new pe(pb.Nu).gF(a).toString();
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
  pb.decode = function (a, b) {
    null == b && (b = !0);
    if (b) for (; 61 == fa.Ri(a, a.length - 1); ) a = fa.substr(a, 0, -1);
    return new pe(pb.Nu).RE(ra.Cs(a));
  };
  pe.i = !0;
  pe.prototype = {
    gF: function (a) {
      for (
        var b = this.Hz,
          c = this.Ni,
          d = ((8 * a.length) / b) | 0,
          e = new ra(new ArrayBuffer(d + (0 == (8 * a.length) % b ? 0 : 1))),
          f = 0,
          g = 0,
          h = (1 << b) - 1,
          l = 0,
          k = 0;
        k < d;

      ) {
        for (; g < b; ) (g += 8), (f <<= 8), (f |= a.b[l++]);
        g -= b;
        e.b[k++] = c.b[(f >> g) & h];
      }
      0 < g && (e.b[k++] = c.b[(f << (b - g)) & h]);
      return e;
    },
    OG: function () {
      for (var a = [], b = 0; 256 > b; ) a[b++] = -1;
      b = 0;
      for (var c = this.Ni.length; b < c; ) {
        var d = b++;
        a[this.Ni.b[d]] = d;
      }
      this.vB = a;
    },
    RE: function (a) {
      var b = this.Hz;
      null == this.vB && this.OG();
      for (
        var c = this.vB, d = (a.length * b) >> 3, e = new ra(new ArrayBuffer(d)), f = 0, g = 0, h = 0, l = 0;
        l < d;

      ) {
        for (; 8 > g; ) {
          g += b;
          f <<= b;
          var k = c[a.b[h++]];
          if (-1 == k) throw 20;
          f |= k;
        }
        g -= 8;
        e.b[l++] = (f >> g) & 255;
      }
      return e;
    },
    s: pe,
  };
  kb.i = !0;
  kb.Aa = [Eg];
  kb.prototype = { s: kb };
  Oc.i = !0;
  Oc.F = Ja;
  Oc.prototype = C(Ja.prototype, {
    toString: function () {
      return (
        "" +
        Ja.prototype.toString.call(this) +
        " in " +
        this.Uo.className +
        "." +
        this.Uo.methodName +
        " at " +
        this.Uo.fileName +
        ":" +
        this.Uo.lineNumber
      );
    },
    s: Oc,
  });
  oe.i = !0;
  oe.F = Oc;
  oe.prototype = C(Oc.prototype, { s: oe });
  Uf.i = !0;
  Uf.prototype = {
    LD: function (a) {
      this.va == this.size && this.grow(1);
      this.view.setUint8(this.va++, a);
    },
    grow: function (a) {
      var b = this.va + a;
      for (a = 0 == this.size ? 16 : this.size; a < b; ) a = (3 * a) >> 1;
      b = new ArrayBuffer(a);
      var c = new Uint8Array(b);
      0 < this.size && c.set(this.RK);
      this.size = a;
      this.buffer = b;
      this.RK = c;
      this.view = new DataView(this.buffer);
    },
    gr: function () {
      if (0 == this.size) return new ra(new ArrayBuffer(0));
      var a = new ra(this.buffer);
      a.length = this.va;
      return a;
    },
    s: Uf,
  };
  ne.i = !0;
  ne.prototype = {
    ea: function () {
      throw new oe(null, null, {
        fileName: "haxe/io/Input.hx",
        lineNumber: 53,
        className: "haxe.io.Input",
        methodName: "readByte",
      });
    },
    ct: function (a, b, c) {
      var d = c,
        e = a.b;
      if (0 > b || 0 > c || b + c > a.length) throw 21;
      try {
        for (; 0 < d; ) (e[b] = this.ea()), ++b, --d;
      } catch (f) {
        throw (Ja.Hw(f), f);
      }
      return c - d;
    },
    GJ: function (a) {
      return (this.Oi = a);
    },
    zI: function (a, b, c) {
      for (; 0 < c; ) {
        var d = this.ct(a, b, c);
        if (0 == d) throw 22;
        b += d;
        c -= d;
      }
    },
    zA: function (a) {
      for (var b = new Uf(), c; ; ) {
        c = this.ea();
        if (c == a) break;
        b.LD(c);
      }
      return b.gr().toString();
    },
    yI: function () {
      var a = this.Hd(),
        b = this.Hd();
      return this.Oi ? qc.Jy(b, a) : qc.Jy(a, b);
    },
    Gd: function () {
      var a = this.ea(),
        b = this.ea();
      a = this.Oi ? b | (a << 8) : a | (b << 8);
      return 0 != (a & 32768) ? a - 65536 : a;
    },
    ac: function () {
      var a = this.ea(),
        b = this.ea();
      return this.Oi ? b | (a << 8) : a | (b << 8);
    },
    AI: function () {
      var a = this.ea(),
        b = this.ea(),
        c = this.ea();
      a = this.Oi ? c | (b << 8) | (a << 16) : a | (b << 8) | (c << 16);
      return 0 != (a & 8388608) ? a - 16777216 : a;
    },
    yA: function () {
      var a = this.ea(),
        b = this.ea(),
        c = this.ea();
      return this.Oi ? c | (b << 8) | (a << 16) : a | (b << 8) | (c << 16);
    },
    Hd: function () {
      var a = this.ea(),
        b = this.ea(),
        c = this.ea(),
        d = this.ea();
      return this.Oi ? d | (c << 8) | (b << 16) | (a << 24) : a | (b << 8) | (c << 16) | (d << 24);
    },
    Rl: function (a, b) {
      var c = new ra(new ArrayBuffer(a));
      this.zI(c, 0, a);
      return c.Ln(0, a, b);
    },
    s: ne,
  };
  qb.i = !0;
  qb.F = ne;
  qb.prototype = C(ne.prototype, {
    IJ: function (a) {
      0 > a ? (a = 0) : a > this.zk && (a = this.zk);
      this.xe = this.zk - a;
      return (this.va = a);
    },
    ea: function () {
      if (0 == this.xe) throw 24;
      this.xe--;
      return this.b[this.va++];
    },
    ct: function (a, b, c) {
      if (0 > b || 0 > c || b + c > a.length) throw 25;
      if (0 == this.xe && 0 < c) throw 26;
      this.xe < c && (c = this.xe);
      var d = this.b;
      a = a.b;
      for (var e = 0, f = c; e < f; ) {
        var g = e++;
        a[b + g] = d[this.va + g];
      }
      this.va += c;
      this.xe -= c;
      return c;
    },
    s: qb,
  });
  var xf = (Mb.e2 = {
    hg: !0,
    Oc: null,
    YB: { I: "e20", G: 0, H: "e2", toString: H },
    yC: { I: "e21", G: 1, H: "e2", toString: H },
    xC: { I: "e22", G: 2, H: "e2", toString: H },
    kC:
      ((N = function (a) {
        return { G: 3, e: a, H: "e2", toString: H };
      }),
      (N.I = "Custom"),
      (N.hb = ["e"]),
      N),
  });
  xf.Oc = [xf.YB, xf.yC, xf.xC, xf.kC];
  qc.i = !0;
  qc.Jy = function (a, b) {
    qc.wr.setInt32(0, a, !0);
    qc.wr.setInt32(4, b, !0);
    return qc.wr.getFloat64(0, !0);
  };
  var Nh = {
    yF: function (a, b, c) {
      null == b && (b = 0);
      null == c && (c = (a.length - b) >> 2);
      return new Int32Array(a.b.pE, b, c);
    },
  };
  ud.i = !0;
  ud.prototype = {
    Ca: function () {
      return this.current < this.rw.length;
    },
    next: function () {
      return this.rw[this.current++];
    },
    s: ud,
  };
  var tf = {
      cl: function (a) {
        var b = new qa("^([a-z]{2})", "i");
        if (!b.match(a)) return null;
        a = b.Ce(1);
        return new qa("^(en|de|fr|it|es|pt|tr|pl|ru|nl)", "").match(a) ? a : null;
      },
    },
    y = (Mb.e3 = {
      hg: !0,
      Oc: null,
      Vv:
        ((N = function (a) {
          return { G: 0, level: a, H: "e3", toString: H };
        }),
        (N.I = "Screen_SelectBoost_Unlock"),
        (N.hb = ["level"]),
        N),
      BD: { I: "e30", G: 1, H: "e3", toString: H },
      Uv: { I: "e31", G: 2, H: "e3", toString: H },
      Tv: { I: "e32", G: 3, H: "e3", toString: H },
      Sv: { I: "e33", G: 4, H: "e3", toString: H },
      Rv: { I: "e34", G: 5, H: "e3", toString: H },
      Qv: { I: "e35", G: 6, H: "e3", toString: H },
      Pv: { I: "e36", G: 7, H: "e3", toString: H },
      Ov: { I: "e37", G: 8, H: "e3", toString: H },
      Nv: { I: "e38", G: 9, H: "e3", toString: H },
      Mv: { I: "e39", G: 10, H: "e3", toString: H },
      Lv: { I: "e3A", G: 11, H: "e3", toString: H },
      Kv: { I: "e3B", G: 12, H: "e3", toString: H },
      Jv: { I: "e3C", G: 13, H: "e3", toString: H },
      Iv: { I: "e3D", G: 14, H: "e3", toString: H },
      Hv: { I: "e3E", G: 15, H: "e3", toString: H },
      Gv: { I: "e3F", G: 16, H: "e3", toString: H },
      AD: { I: "e310", G: 17, H: "e3", toString: H },
      Fv: { I: "e311", G: 18, H: "e3", toString: H },
      Ev: { I: "e312", G: 19, H: "e3", toString: H },
      zD: { I: "e313", G: 20, H: "e3", toString: H },
      Dv: { I: "e314", G: 21, H: "e3", toString: H },
      Cv: { I: "e315", G: 22, H: "e3", toString: H },
      Bv: { I: "e316", G: 23, H: "e3", toString: H },
      Av: { I: "e317", G: 24, H: "e3", toString: H },
      zv: { I: "e318", G: 25, H: "e3", toString: H },
      yD: { I: "e319", G: 26, H: "e3", toString: H },
      xD: { I: "e31A", G: 27, H: "e3", toString: H },
      wD: { I: "e31B", G: 28, H: "e3", toString: H },
      yv: { I: "e31C", G: 29, H: "e3", toString: H },
      xv: { I: "e31D", G: 30, H: "e3", toString: H },
      wv: { I: "e31E", G: 31, H: "e3", toString: H },
      vv: { I: "e31F", G: 32, H: "e3", toString: H },
      uv:
        ((N = function (a, b) {
          return { G: 33, percent: a, points: b, H: "e3", toString: H };
        }),
        (N.I = "Screen_GameResult_ScoreBonus"),
        (N.hb = ["percent", "points"]),
        N),
      tv: { I: "e320", G: 34, H: "e3", toString: H },
      sv: { I: "e321", G: 35, H: "e3", toString: H },
      rv: { I: "e322", G: 36, H: "e3", toString: H },
      Sp: { I: "e323", G: 37, H: "e3", toString: H },
      qv:
        ((N = function (a, b) {
          return { G: 38, count: a, total: b, H: "e3", toString: H };
        }),
        (N.I = "Screen_Achievements_Unlocked"),
        (N.hb = ["count", "total"]),
        N),
      pv: { I: "e324", G: 39, H: "e3", toString: H },
      vD: { I: "e325", G: 40, H: "e3", toString: H },
      ov: { I: "e326", G: 41, H: "e3", toString: H },
      ev: { I: "e327", G: 42, H: "e3", toString: H },
      dv: { I: "e328", G: 43, H: "e3", toString: H },
      cv: { I: "e329", G: 44, H: "e3", toString: H },
      bv: { I: "e32A", G: 45, H: "e3", toString: H },
      av: { I: "e32B", G: 46, H: "e3", toString: H },
      $u: { I: "e32C", G: 47, H: "e3", toString: H },
      Zu: { I: "e32D", G: 48, H: "e3", toString: H },
      Yu: { I: "e32E", G: 49, H: "e3", toString: H },
      Uu: { I: "e32F", G: 50, H: "e3", toString: H },
      Tu: { I: "e330", G: 51, H: "e3", toString: H },
      Su: { I: "e331", G: 52, H: "e3", toString: H },
      jC: { I: "e332", G: 53, H: "e3", toString: H },
      iC: { I: "e333", G: 54, H: "e3", toString: H },
      hC: { I: "e334", G: 55, H: "e3", toString: H },
      gC: { I: "e335", G: 56, H: "e3", toString: H },
      fC: { I: "e336", G: 57, H: "e3", toString: H },
      eC: { I: "e337", G: 58, H: "e3", toString: H },
      Ji: { I: "e338", G: 59, H: "e3", toString: H },
      dC: { I: "e339", G: 60, H: "e3", toString: H },
      cC: { I: "e33A", G: 61, H: "e3", toString: H },
      bC: { I: "e33B", G: 62, H: "e3", toString: H },
      aC: { I: "e33C", G: 63, H: "e3", toString: H },
      $B: { I: "e33D", G: 64, H: "e3", toString: H },
      Ju: { I: "e33E", G: 65, H: "e3", toString: H },
      Iu:
        ((N = function (a) {
          return { G: 66, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_SpendMinAmountCoins"),
        (N.hb = ["amount"]),
        N),
      Hu:
        ((N = function (a) {
          return { G: 67, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ShootMinAmountPaintTotal"),
        (N.hb = ["amount"]),
        N),
      Gu:
        ((N = function (a) {
          return { G: 68, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ShootMinAmountOfFireballs"),
        (N.hb = ["amount"]),
        N),
      Fu:
        ((N = function (a) {
          return { G: 69, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ShootMinAmountBombsTotal"),
        (N.hb = ["amount"]),
        N),
      Eu:
        ((N = function (a) {
          return { G: 70, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_SaveMinAmountCoins"),
        (N.hb = ["amount"]),
        N),
      Du:
        ((N = function (a) {
          return { G: 71, combo: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ReachMinCombo"),
        (N.hb = ["combo"]),
        N),
      Cu:
        ((N = function (a) {
          return { G: 72, level: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ReachLevel"),
        (N.hb = ["level"]),
        N),
      Bu:
        ((N = function (a) {
          return { G: 73, minutes: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_PlayMinTimeInTotal"),
        (N.hb = ["minutes"]),
        N),
      Au:
        ((N = function (a) {
          return { G: 74, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_PlayMinConsecutiveDays"),
        (N.hb = ["amount"]),
        N),
      zu: { I: "e33F", G: 75, H: "e3", toString: H },
      yu:
        ((N = function (a) {
          return { G: 76, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_PaintMinAmountOfBubbles"),
        (N.hb = ["amount"]),
        N),
      XB: { I: "e340", G: 77, H: "e3", toString: H },
      xu:
        ((N = function (a) {
          return { G: 78, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ImproveScoreTimes"),
        (N.hb = ["amount"]),
        N),
      wu:
        ((N = function (a) {
          return { G: 79, seconds: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ExtendGameTime"),
        (N.hb = ["seconds"]),
        N),
      vu:
        ((N = function (a) {
          return { G: 80, points: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_EarnMinPointsWithSingleShot"),
        (N.hb = ["points"]),
        N),
      uu:
        ((N = function (a) {
          return { G: 81, score: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_EarnMinPointsInRound"),
        (N.hb = ["score"]),
        N),
      tu:
        ((N = function (a) {
          return { G: 82, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_DropMinGrapeSize"),
        (N.hb = ["amount"]),
        N),
      su:
        ((N = function (a) {
          return { G: 83, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ClearMinAmountOfBubblesWithFireball"),
        (N.hb = ["amount"]),
        N),
      ru:
        ((N = function (a) {
          return { G: 84, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_ClearMinAmountOfBubblesInRound"),
        (N.hb = ["amount"]),
        N),
      qu:
        ((N = function (a) {
          return { G: 85, amount: a, H: "e3", toString: H };
        }),
        (N.I = "Achievement_BlastAwayMinAmountOfBubbles"),
        (N.hb = ["amount"]),
        N),
    });
  y.Oc = [
    y.Vv,
    y.BD,
    y.Uv,
    y.Tv,
    y.Sv,
    y.Rv,
    y.Qv,
    y.Pv,
    y.Ov,
    y.Nv,
    y.Mv,
    y.Lv,
    y.Kv,
    y.Jv,
    y.Iv,
    y.Hv,
    y.Gv,
    y.AD,
    y.Fv,
    y.Ev,
    y.zD,
    y.Dv,
    y.Cv,
    y.Bv,
    y.Av,
    y.zv,
    y.yD,
    y.xD,
    y.wD,
    y.yv,
    y.xv,
    y.wv,
    y.vv,
    y.uv,
    y.tv,
    y.sv,
    y.rv,
    y.Sp,
    y.qv,
    y.pv,
    y.vD,
    y.ov,
    y.ev,
    y.dv,
    y.cv,
    y.bv,
    y.av,
    y.$u,
    y.Zu,
    y.Yu,
    y.Uu,
    y.Tu,
    y.Su,
    y.jC,
    y.iC,
    y.hC,
    y.gC,
    y.fC,
    y.eC,
    y.Ji,
    y.dC,
    y.cC,
    y.bC,
    y.aC,
    y.$B,
    y.Ju,
    y.Iu,
    y.Hu,
    y.Gu,
    y.Fu,
    y.Eu,
    y.Du,
    y.Cu,
    y.Bu,
    y.Au,
    y.zu,
    y.yu,
    y.XB,
    y.xu,
    y.wu,
    y.vu,
    y.uu,
    y.tu,
    y.su,
    y.ru,
    y.qu,
  ];
  da.i = !0;
  da.oh = function () {
    da.bo = "en";
    da.vk = null;
    da.Ps = null;
  };
  da.kr = function () {
    return da.bo;
  };
  da.tt = function (a) {
    null == a && (a = da.UE());
    da.bo = a;
  };
  da.Ky = function (a, b) {
    if (a instanceof ra) {
      for (var c = !1, d = new qb(a), e = d.ea(), f = d.ac(), g = 0; g < e; ) {
        g++;
        var h = d.ea();
        h = String.fromCodePoint(h);
        var l = d.ea();
        h = (h + String.fromCodePoint(l)).toLowerCase();
        l = d.ac();
        if (tf.cl(h) == da.bo) {
          g = "";
          for (e = 0; e < f; ) e++, (g += Aa.ab(d.Rl(d.ac()))), (g += "\n");
          a = g;
          c = !0;
          break;
        } else d.IJ(d.va + l);
      }
      if (!c) return;
    }
    f = RegExp("\r", "g");
    a = a.replace(f, "");
    a = a.split("\n");
    e = a.length;
    da.vk = Array(e);
    da.Ps = Array(e);
    for (g = 0; g < e; )
      (c = g++),
        (d = a[c]),
        (f = RegExp("\\\\n", "g")),
        (d = d.replace(f, "\n")),
        (da.vk[c] = d),
        (da.Ps[c] = new qa("::(\\w+)::", "").match(a[c]));
    if (null != b) {
      g = [];
      e = Object.keys(b.P);
      d = e.length;
      for (f = 0; f < d; ) g.push(e[f++]);
      f = new qa(g.join("|"), "");
      g = 0;
      for (e = da.vk.length; g < e; ) for (d = da.vk[g++]; f.match(d); ) (a = f.Ce(0)), (d = d.replace(f.r, b.P[a]));
    }
  };
  da.translate = function (a, b) {
    if (null == da.vk) return null != b ? b : "NO STRINGS IMPORTED";
    var c = a.G;
    b = da.vk[c];
    if (!da.Ps[c]) return b;
    a = Ac.hF(a);
    if (0 == a.length) return b;
    for (c = 0; c < a.length; ) {
      var d = a[c++];
      b = b.replace(RegExp("::(\\w+)::", ""), Aa.ab(d));
    }
    return b;
  };
  da.UE = function () {
    var a = null;
    try {
      var b = new qa("lang=(\\w\\w(?:-\\w\\w)?)", "");
      b.match(window.location.href) && (a = tf.cl(b.Ce(1)));
    } catch (c) {}
    try {
      null == a && (a = tf.cl(Nb.navigator.language));
    } catch (c) {}
    null == a && (a = "en");
    return a;
  };
  oa.i = !0;
  oa.Pb = function () {
    return Ia.instance();
  };
  oa.If = function () {
    return Ta.instance();
  };
  Ta.i = !0;
  Ta.oh = function () {
    null != Ta.Kb && (Ta.Kb.Xm(), Ta.Kb.disable(), (Ta.Kb = null));
  };
  Ta.instance = function () {
    null == Ta.Kb && (Ta.Kb = new Ta());
    return Ta.Kb;
  };
  Ta.F = Pa;
  Ta.prototype = C(Pa.prototype, {
    enable: function () {
      this.enabled ||
        ((this.enabled = !0),
        window.addEventListener("keydown", J(this, this.Uz), !0),
        window.addEventListener("keyup", J(this, this.Vz), !0));
    },
    disable: function () {
      this.enabled &&
        ((this.enabled = !1),
        window.removeEventListener("keydown", J(this, this.Uz), !0),
        window.removeEventListener("keyup", J(this, this.Vz), !0));
    },
    Uz: function (a) {
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
        this.Fd(!0, b);
        this.event = null;
      }
    },
    Vz: function (a) {
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
      this.Fd(!1, b);
    },
    Fd: function (a, b) {
      if (a) (this.keys[b] = !0), (this.hw[b] = this.time++);
      else {
        this.keys[b] = !1;
        for (var c = 0, d = this.Gb.o; c < d; ) {
          var e = this.Gb;
          if (e.m[(c + e.Sa) % e.S] == b) {
            e = this.Gb;
            e.m[(c + e.Sa) % e.S] = -1;
            break;
          }
          ++c;
        }
        for (c = 0; 100 >= ++c && 0 != this.Gb.o; )
          if (((e = this.Gb), (e = e.m[e.Sa]), 0 > e || e == b)) this.Gb.bj();
          else break;
      }
      var f = new Tf(this, b, a);
      this.notify(function (g) {
        f.f = g;
        g(f);
      });
    },
    s: Ta,
  });
  Tf.i = !0;
  Tf.prototype = { s: Tf };
  Ia.i = !0;
  Ia.oh = function () {
    if (null != Ia.Kb) {
      Ia.Kb.Xm();
      Ia.Kb.disable();
      var a = Ia.Kb.event;
      a.hI = null;
      a.f = null;
      Ia.Kb.event = null;
      Ia.Kb = null;
    }
  };
  Ia.instance = function () {
    null == Ia.Kb && (Ia.Kb = new Ia());
    return Ia.Kb;
  };
  Ia.F = Pa;
  Ia.prototype = C(Pa.prototype, {
    oJ: function (a) {
      var b = this.enabled;
      this.disable();
      this.element = a;
      b && this.enable();
    },
    enable: function () {
      if (!this.enabled) {
        this.enabled = !0;
        var a = this.tB() && { passive: !1 };
        this.element.addEventListener("mousedown", J(this, this.Wz));
        this.element.addEventListener("mouseup", J(this, this.Yz));
        this.element.addEventListener("mousemove", J(this, this.Xz));
        this.element.addEventListener("touchstart", J(this, this.dA), a);
        this.element.addEventListener("touchend", J(this, this.Io));
        this.element.addEventListener("touchcancel", J(this, this.Io));
        this.element.addEventListener("touchmove", J(this, this.cA));
        this.element.addEventListener("mousewheel", J(this, this.Eo), a);
        this.element.addEventListener("DOMMouseScroll", J(this, this.Eo), a);
      }
    },
    disable: function () {
      this.enabled &&
        ((this.enabled = !1),
        this.element.removeEventListener("mousedown", J(this, this.Wz)),
        this.element.removeEventListener("mouseup", J(this, this.Yz)),
        this.element.removeEventListener("mousemove", J(this, this.Xz)),
        this.element.removeEventListener("touchstart", J(this, this.dA)),
        this.element.removeEventListener("touchend", J(this, this.Io)),
        this.element.removeEventListener("touchcancel", J(this, this.Io)),
        this.element.removeEventListener("touchmove", J(this, this.cA)),
        this.element.removeEventListener("mousewheel", J(this, this.Eo)),
        this.element.removeEventListener("DOMMouseScroll", J(this, this.Eo)));
    },
    Wz: function (a) {
      var b = a.which;
      this.xd = (this.xd & ~(1 << b)) | (1 << b);
      0 != (this.Sm & (1 << a.which)) && this.Fd(a.clientX, a.clientY, 0, a.which);
    },
    Yz: function (a) {
      var b = a.which;
      this.xd = (this.xd & ~(1 << b)) | (0 << b);
      0 != (this.Sm & (1 << a.which)) && this.Fd(a.clientX, a.clientY, 1, a.which);
    },
    Xz: function (a) {
      0 < this.Lj || this.Fd(a.clientX, a.clientY, 2, 0);
    },
    dA: function (a) {
      this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints)
        null != this.first ||
          1 < a.length ||
          ((this.first = a[0]),
          (this.xd = (this.xd & -3) | 2),
          (this.Lj = 1),
          this.Fd(this.first.clientX, this.first.clientY, 0, 4));
      else
        for (var b = 0; b < a.length; ) {
          var c = a[b];
          ++b;
          var d = this.Lj < this.maxTouchPoints,
            e = d ? (0 < this.ue.length ? this.ue.pop() : this.xH++) : null;
          this.touches["" + c.identifier] = e;
          d && (this.Fd(c.clientX, c.clientY, 0, 4 + e), this.Lj++);
        }
    },
    Io: function (a) {
      "touchend" == a.type && this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (null != this.first)
          for (var b = 0; b < a.length; ) {
            var c = a[b];
            ++b;
            if (c.identifier == this.first.identifier) {
              this.Lj = 0;
              this.xd = (this.xd & -3) | 0;
              this.first = null;
              this.Fd(c.clientX, c.clientY, 1, 4);
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
          null != e && (this.Lj--, this.ue.push(e), this.Fd(c.clientX, c.clientY, 1, 4 + e));
        }
    },
    cA: function (a) {
      this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (null != this.first)
          for (var b = 0; b < a.length; ) {
            var c = a[b];
            ++b;
            if (c.identifier == this.first.identifier) {
              this.Fd(c.clientX, c.clientY, 2, 4);
              break;
            }
          }
      } else
        for (b = 0; b < a.length; ) {
          c = a[b];
          ++b;
          var d = this.touches["" + c.identifier];
          null != d && this.Fd(c.clientX, c.clientY, 2, 4 + d);
        }
    },
    Eo: function (a) {
      this.Fd(Math.max(-1, Math.min(1, a.wheelDelta || -a.detail)), 0, 3, 0);
    },
    Fd: function (a, b, c, d) {
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
          : 2 == c && 0 == this.xd && ((f = this.anchor), (f.x = a), (f.y = b));
        f = this.position;
        f.x = a;
        f.y = b;
        e.x = this.position.x;
        e.y = this.position.y;
      }
      e.type = c;
      e.id = d;
      this.rL || null == this.buffer
        ? this.notify(function (g) {
            e.f = g;
            g(e);
          })
        : ((f = this.buffer),
          f.uc(f.o + 5),
          (f.m[f.o++] = a | 0),
          (f.m[f.o++] = b | 0),
          (f.m[f.o++] = c),
          (f.m[f.o++] = d));
    },
    cancel: function (a) {
      a.preventDefault();
    },
    tB: function () {
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            p = !0;
          },
        });
        window.addEventListener("test", null, a);
        window.removeEventListener("test", null, a);
      } catch (b) {}
      return !1;
    },
    s: Ia,
  });
  Sf.i = !0;
  Sf.prototype = { s: Sf };
  ta.i = !0;
  ta.Sx = function (a) {
    if (null == a) return null;
    if (a instanceof Array) return Array;
    var b = a.s;
    if (null != b) return b;
    a = ta.aw(a);
    return null != a ? ta.GD(a) : null;
  };
  ta.Ik = function (a, b) {
    if (null == a) return "null";
    if (5 <= b.length) return "<...>";
    var c = typeof a;
    "function" == c && (a.i || a.hg) && (c = "object");
    switch (c) {
      case "function":
        return "<function>";
      case "object":
        if (a.H) {
          var d = Mb[a.H].Oc[a.G];
          c = d.I;
          if (d.hb) {
            b += "\t";
            var e = [],
              f = 0;
            for (d = d.hb; f < d.length; ) {
              var g = d[f];
              f += 1;
              e.push(ta.Ik(a[g], b));
            }
            return c + "(" + e.join(",") + ")";
          }
          return c;
        }
        if (a instanceof Array) {
          c = "[";
          b += "\t";
          e = 0;
          for (f = a.length; e < f; ) (d = e++), (c += (0 < d ? "," : "") + ta.Ik(a[d], b));
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
            (2 != c.length && (c += ", \n"), (c += b + f + " : " + ta.Ik(a[f], b)));
        b = b.substring(1);
        return c + ("\n" + b + "}");
      case "string":
        return a;
      default:
        return String(a);
    }
  };
  ta.$v = function (a, b) {
    for (;;) {
      if (null == a) return !1;
      if (a == b) return !0;
      var c = a.Aa;
      if (null != c)
        for (var d = 0, e = c.length; d < e; ) {
          var f = c[d++];
          if (f == b || ta.$v(f, b)) return !0;
        }
      a = a.F;
    }
  };
  ta.ED = function (a, b) {
    if (null == b) return !1;
    switch (b) {
      case Array:
        return a instanceof Array;
      case $h:
        return "boolean" == typeof a;
      case ai:
        return null != a;
      case bi:
        return "number" == typeof a;
      case ci:
        return "number" == typeof a ? (a | 0) === a : !1;
      case String:
        return "string" == typeof a;
      default:
        if (null != a)
          if ("function" == typeof b) {
            if (ta.DD(a, b)) return !0;
          } else {
            if ("object" == typeof b && ta.FD(b) && a instanceof b) return !0;
          }
        else return !1;
        return (b == di && null != a.i) || (b == ei && null != a.hg) ? !0 : null != a.H ? Mb[a.H] == b : !1;
    }
  };
  ta.DD = function (a, b) {
    return a instanceof b ? !0 : b.rc ? ta.$v(ta.Sx(a), b) : !1;
  };
  ta.Zv = function (a, b) {
    if (null == a || ta.ED(a, b)) return a;
    throw 27;
  };
  ta.aw = function (a) {
    a = ta.HD.call(a).slice(8, -1);
    return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a;
  };
  ta.FD = function (a) {
    return null != ta.aw(a);
  };
  ta.GD = function (a) {
    return Nb[a];
  };
  Qg.i = !0;
  Qg.PF = function () {
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
  Sg.i = !0;
  Sg.UJ = function (a, b) {
    a = new Uint8Array(this, a, null == b ? null : b - a);
    b = new Uint8Array(a.byteLength);
    b.set(a);
    return b.buffer;
  };
  var La = {
    offset: function (a, b, c) {
      a.j -= b;
      a.l -= c;
      a.u += b;
      a.A += c;
      return a;
    },
    clone: function (a) {
      var b = new W();
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      return b;
    },
  };
  W.i = !0;
  W.prototype = { s: W };
  var Qh = {
    PD: function (a, b) {
      var c = b.K.x - a.K.x,
        d = b.K.y - a.K.y,
        e = b.la - a.la,
        f = c * c + d * d;
      e * e >= f
        ? 0 <= e && ((a.K.x = b.K.x), (a.K.y = b.K.y), (a.la = b.la))
        : ((e = Math.sqrt(f)),
          (f = (e + b.la - a.la) / (2 * e)),
          (a.K.x += f * c),
          (a.K.y += f * d),
          (a.la = (e + a.la + b.la) / 2));
    },
  };
  td.i = !0;
  td.prototype = { s: td };
  var $g = {
    Lx: function (a) {
      var b = 0.00392156862745098 * uf.qm(a & 255),
        c = 0.00392156862745098 * uf.qm((a >>> 8) & 255),
        d = 0.00392156862745098 * uf.qm(a >>> 24),
        e = new Vb();
      e.r = 0.00392156862745098 * uf.qm((a >>> 16) & 255);
      e.Za = c;
      e.b = b;
      e.a = d;
      return e;
    },
    EK: function (a) {
      return (
        "rgba(" +
        (Math.round(255 * a.r) & 255) +
        "," +
        (Math.round(255 * a.Za) & 255) +
        "," +
        (Math.round(255 * a.b) & 255) +
        "," +
        a.a.toFixed(2) +
        ")"
      );
    },
  };
  Vb.i = !0;
  Vb.prototype = { s: Vb };
  var fi = {
    DK: function (a) {
      var b = new Vb();
      b.r = (a & 255) / 255;
      b.Za = ((a >> 8) & 255) / 255;
      b.b = ((a >> 16) & 255) / 255;
      b.a = (a >>> 24) / 255;
      return b;
    },
  };
  Rf.i = !0;
  Rf.prototype = { s: Rf };
  Pf.i = !0;
  Pf.prototype = {
    set: function (a, b) {
      this.x = a;
      this.y = b;
    },
    s: Pf,
  };
  P.i = !0;
  P.min = function (a, b) {
    return a < b ? a : b;
  };
  P.max = function (a, b) {
    return a > b ? a : b;
  };
  P.abs = function (a) {
    return 0 > a ? -a : a;
  };
  P.Ti = function (a, b, c) {
    return a < b ? b : a > c ? c : a;
  };
  P.ne = function (a) {
    return 0 > a ? 0 : 1 < a ? 1 : a;
  };
  P.zE = function (a) {
    return -40 > a ? -40 : 40 < a ? 40 : a;
  };
  P.ym = function (a) {
    a %= 360;
    0 > a && (a += 360);
    return a;
  };
  P.vq = function (a, b, c) {
    a -= b;
    return 0 < a ? a < c : -a < c;
  };
  P.Mw = function (a, b) {
    return 0 < a ? a < b : -a < b;
  };
  P.ul = function (a) {
    return 0 != a ? 0 == (a & (a - 1)) : !1;
  };
  P.Wh = function (a) {
    --a;
    a |= a >> 1;
    a |= a >> 2;
    a |= a >> 4;
    a |= a >> 8;
    a |= a >> 16;
    return ++a;
  };
  P.map = function (a, b, c, d, e) {
    return d + ((a - b) / (c - b)) * (e - d);
  };
  P.Td = function (a, b, c) {
    return a + (b - a) * c;
  };
  var kd = {
    Id: function (a) {
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
    Kd: function (a, b, c) {
      var d = b.m11,
        e = b.m12,
        f = b.m13,
        g = b.m21,
        h = b.m22,
        l = b.m23,
        k = b.m31,
        m = b.m32;
      b = b.m33;
      var t = a.m11,
        n = a.m12,
        w = a.m13;
      c.m11 = t * d + n * g + w * k;
      c.m12 = t * e + n * h + w * m;
      c.m13 = t * f + n * l + w * b;
      t = a.m21;
      n = a.m22;
      w = a.m23;
      c.m21 = t * d + n * g + w * k;
      c.m22 = t * e + n * h + w * m;
      c.m23 = t * f + n * l + w * b;
      t = a.m31;
      n = a.m32;
      w = a.m33;
      c.m31 = t * d + n * g + w * k;
      c.m32 = t * e + n * h + w * m;
      c.m33 = t * f + n * l + w * b;
      return c;
    },
    Ai: function (a, b, c) {
      var d = b.x,
        e = b.y;
      b = b.z;
      c.x = a.m11 * d + a.m12 * e + a.m13 * b;
      c.y = a.m21 * d + a.m22 * e + a.m23 * b;
      c.z = a.m31 * d + a.m32 * e + a.m33 * b;
      return c;
    },
    BB: function (a, b, c) {
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
  od.i = !0;
  od.prototype = { s: od };
  var ba = {
    Ac: function () {
      return new Qf();
    },
    Id: function (a) {
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
    ip: function (a, b, c, d, e, f, g) {
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
    wJ: function (a, b, c, d, e) {
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
    EJ: function (a, b, c, d, e) {
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
    XI: function (a, b) {
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
    Kd: function (a, b, c) {
      var d = b.m11,
        e = b.m12,
        f = b.m13,
        g = b.m14,
        h = b.m21,
        l = b.m22,
        k = b.m23,
        m = b.m24,
        t = b.m31,
        n = b.m32,
        w = b.m33,
        v = b.m34,
        F = b.m41,
        I = b.m42,
        r = b.m43;
      b = b.m44;
      var L = a.m11,
        O = a.m12,
        D = a.m13,
        K = a.m14;
      c.m11 = L * d + O * h + D * t + K * F;
      c.m12 = L * e + O * l + D * n + K * I;
      c.m13 = L * f + O * k + D * w + K * r;
      c.m14 = L * g + O * m + D * v + K * b;
      L = a.m21;
      O = a.m22;
      D = a.m23;
      K = a.m24;
      c.m21 = L * d + O * h + D * t + K * F;
      c.m22 = L * e + O * l + D * n + K * I;
      c.m23 = L * f + O * k + D * w + K * r;
      c.m24 = L * g + O * m + D * v + K * b;
      L = a.m31;
      O = a.m32;
      D = a.m33;
      K = a.m34;
      c.m31 = L * d + O * h + D * t + K * F;
      c.m32 = L * e + O * l + D * n + K * I;
      c.m33 = L * f + O * k + D * w + K * r;
      c.m34 = L * g + O * m + D * v + K * b;
      L = a.m41;
      O = a.m42;
      D = a.m43;
      K = a.m44;
      c.m41 = L * d + O * h + D * t + K * F;
      c.m42 = L * e + O * l + D * n + K * I;
      c.m43 = L * f + O * k + D * w + K * r;
      c.m44 = L * g + O * m + D * v + K * b;
      return c;
    },
    Rt: function (a, b, c) {
      var d = b.m11,
        e = b.m12,
        f = b.m14,
        g = b.m21,
        h = b.m22;
      b = b.m24;
      var l = a.m11,
        k = a.m12;
      c.m11 = l * d + k * g;
      c.m12 = l * e + k * h;
      c.m14 = l * f + k * b + a.m14;
      l = a.m21;
      k = a.m22;
      c.m21 = l * d + k * g;
      c.m22 = l * e + k * h;
      c.m24 = l * f + k * b + a.m24;
      return c;
    },
    Ai: function (a, b, c) {
      var d = b.x,
        e = b.y;
      b = b.z;
      c.x = a.m11 * d + a.m12 * e + a.m13 * b + a.m14;
      c.y = a.m21 * d + a.m22 * e + a.m23 * b + a.m24;
      c.z = a.m31 * d + a.m32 * e + a.m33 * b + a.m34;
      return c;
    },
    inverse: function (a, b) {
      var c = a.m11,
        d = a.m12,
        e = a.m13,
        f = a.m14,
        g = a.m21,
        h = a.m22,
        l = a.m23,
        k = a.m24,
        m = a.m31,
        t = a.m32,
        n = a.m33,
        w = a.m34,
        v = a.m41,
        F = a.m42,
        I = a.m43;
      a = a.m44;
      var r = c * h - d * g,
        L = c * l - e * g,
        O = c * k - f * g,
        D = d * l - e * h,
        K = d * k - f * h,
        Y = e * k - f * l,
        V = m * F - t * v,
        T = m * I - n * v,
        ca = m * a - w * v,
        Ba = t * I - n * F,
        Dc = t * a - w * F,
        yf = n * a - w * I,
        Va = 1 / (r * yf - L * Dc + O * Ba + D * ca - K * T + Y * V);
      b.m11 = (h * yf - l * Dc + k * Ba) * Va;
      b.m12 = (-d * yf + e * Dc - f * Ba) * Va;
      b.m13 = (F * Y - I * K + a * D) * Va;
      b.m14 = (-t * Y + n * K - w * D) * Va;
      b.m21 = (-g * yf + l * ca - k * T) * Va;
      b.m22 = (c * yf - e * ca + f * T) * Va;
      b.m23 = (-v * Y + I * O - a * L) * Va;
      b.m24 = (m * Y - n * O + w * L) * Va;
      b.m31 = (g * Dc - h * ca + k * V) * Va;
      b.m32 = (-c * Dc + d * ca - f * V) * Va;
      b.m33 = (v * K - F * O + a * r) * Va;
      b.m34 = (-m * K + t * O - w * r) * Va;
      b.m41 = (-g * Ba + h * T - l * V) * Va;
      b.m42 = (c * Ba - d * T + e * V) * Va;
      b.m43 = (-v * D + F * L - I * r) * Va;
      b.m44 = (m * D - t * L + n * r) * Va;
      return b;
    },
    jr: function (a, b, c, d) {
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
  Qf.i = !0;
  Qf.prototype = { s: Qf };
  Jc.i = !0;
  Jc.prototype = {
    lk: function (a, b) {
      var c = new E();
      c.x = a.x;
      c.y = a.y;
      this.sc = c;
      jd.normalize(this.sc);
      a = this.sc;
      this.Df = a.x * b.x + a.y * b.y;
      return this;
    },
    gp: function (a, b) {
      var c = new E();
      c.x = b.x - a.x;
      c.y = b.y - a.y;
      b = this.sc = c;
      c = b.y;
      b.y = b.x;
      b.x = -c;
      jd.normalize(this.sc);
      b = this.sc;
      this.Df = b.x * a.x + b.y * a.y;
      return this;
    },
    WE: function (a) {
      return a.x * this.sc.x + a.y * this.sc.y - this.Df;
    },
    s: Jc,
  };
  Rb.i = !0;
  Rb.kH = function (a, b) {
    var c = new Rb(),
      d = c.origin;
    d.x = a.x;
    d.y = a.y;
    d = c.direction;
    d.x = b.x;
    d.y = b.y;
    return c;
  };
  Rb.prototype = {
    normalize: function () {
      var a = this.direction.x * this.direction.x + this.direction.y * this.direction.y;
      0 < a && ((a = Math.sqrt(a)), (this.direction.x /= a), (this.direction.y /= a));
      return a;
    },
    clone: function () {
      return Rb.kH(this.origin, this.direction);
    },
    s: Rb,
  };
  me.i = !0;
  me.prototype = { s: me };
  jc.i = !0;
  jc.prototype = { s: jc };
  var jd = {
    ft: function (a, b) {
      var c = a.x,
        d = a.y,
        e = 2 * (c * b.x + d * b.y);
      a.x = c - e * b.x;
      a.y = d - e * b.y;
    },
    normalize: function (a) {
      var b = Math.sqrt(a.x * a.x + a.y * a.y);
      1e-6 < b && ((a.x /= b), (a.y /= b));
      return b;
    },
  };
  E.i = !0;
  E.prototype = { s: E };
  Rg.i = !0;
  Rg.qF = function (a, b, c, d, e) {
    return Math.max(0, a * c + b * d - e);
  };
  sd.i = !0;
  sd.xi = function (a, b, c, d, e) {
    return 0 > a * c + b * d - e;
  };
  pc.i = !0;
  pc.prototype = {
    fm: function (a) {
      this.seed = a;
    },
    qh: function () {
      throw 28;
    },
    ki: function (a, b) {
      a -= 0.4999;
      return Math.round(a + (b + 0.4999 - a) * this.qh());
    },
    wF: function (a, b) {
      return a + (b - a) * this.qh();
    },
    xF: function (a) {
      return this.wF(-a, a);
    },
    s: pc,
  };
  le.i = !0;
  le.F = pc;
  le.prototype = C(pc.prototype, {
    fm: function (a) {
      pc.prototype.fm.call(this, a);
      this.ec[0] = this.seed;
      for (a = 1; 624 > a; ) {
        var b = a++,
          c = this.ec[b - 1] ^ (this.ec[b - 1] >>> 30);
        c = 0 > c ? (c ^ -2147483648) + -2147483648 : c;
        for (var d = 0, e = 0; 32 > e; ) {
          var f = e++;
          0 != ((1812433253 >>> f) & 1) &&
            ((f = c << f),
            (d = (d + (0 > f ? (f ^ -2147483648) + -2147483648 : f)) & -1),
            (d = 0 > d ? (d ^ -2147483648) + -2147483648 : d));
        }
        c = (d + b) & -1;
        this.ec[b] = 0 > c ? (c ^ -2147483648) + -2147483648 : c;
        c = this.ec[b] & -1;
        this.ec[b] = 0 > c ? (c ^ -2147483648) + -2147483648 : c;
      }
      this.Iq = 624;
    },
    wI: function () {
      if (624 <= this.Iq) {
        for (var a, b = 0; 227 > b; ) {
          var c = b++;
          a = (this.ec[c] & -2147483648) | (this.ec[c + 1] & -2147483649);
          a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
          a = this.ec[c + 397] ^ (a >>> 1) ^ this.wl[a & 1];
          this.ec[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
        }
        for (b = 227; 623 > b; )
          (c = b++),
            (a = (this.ec[c] & -2147483648) | (this.ec[c + 1] & -2147483649)),
            (a = 0 > a ? (a ^ -2147483648) + -2147483648 : a),
            (a = this.ec[c + -227] ^ (a >>> 1) ^ this.wl[a & 1]),
            (this.ec[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a);
        a = (this.ec[623] & -2147483648) | (this.ec[0] & -2147483649);
        a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
        a = this.ec[396] ^ (a >>> 1) ^ this.wl[a & 1];
        this.ec[623] = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
        this.Iq = 0;
      }
      b = this.ec[this.Iq++];
      a = b ^ (b >>> 11);
      b = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
      a = b ^ ((b << 7) & -1658038656);
      b = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
      a = b ^ ((b << 15) & -272236544);
      b = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
      a = b ^ (b >>> 18);
      return 0 > a ? (a ^ -2147483648) + -2147483648 : a;
    },
    qh: function () {
      return 2.3283064365386963e-10 * uf.qm(this.wI());
    },
    s: le,
  });
  oc.i = !0;
  oc.F = pc;
  oc.prototype = C(pc.prototype, {
    qh: function () {
      return Math.random();
    },
    s: oc,
  });
  hb.i = !0;
  hb.$x = function () {
    if (null != hb.Gb) return hb.Gb;
    hb.Gb = new of(
      4,
      function (a) {
        var b = x.wg(a.url);
        0 > b || x.setData(b, a.data, a.Uh);
      },
      "v=" + Aa.ab(la.VERSION)
    );
    hb.Gb.tag = "scene";
    return hb.Gb;
  };
  hb.prototype = {
    ol: function () {
      return this.loaded ? 100 : Math.round(100 * hb.$x().xh(this.jA));
    },
    gH: function (a, b) {
      this.loaded = !1;
      a = Object.create(a.prototype);
      a.caller = a;
      a.sj = a.lf = null == b ? Oa.Ac() : b;
      this.load(a.re());
      return this;
    },
    load: function (a) {
      for (var b = this, c = hb.$x(), d = 0, e = 0; e < a.length; ) {
        var f = a[e];
        ++e;
        if (!x.Yn(f) || null != x.rh()) {
          var g = x.il(f);
          if (c.tl(g) || c.load(g))
            c.rI(g),
              (d += 1),
              this.jA.push(g),
              x.Es(f, function () {
                b.Gs();
                0 == --d && ((b.loaded = !0), b.tc());
              });
        }
      }
      0 == d && (this.loaded = !0);
      return d;
    },
    s: hb,
  };
  nc.i = !0;
  nc.kj = function (a) {
    var b = " ";
    null == b && (b = ".");
    var c = a + "";
    if (1e6 > a) {
      if (1e3 > a) return c;
      if (1e4 > a) return fa.substr(c, 0, 1) + b + fa.substr(c, 1, null);
      if (1e5 > a) return fa.substr(c, 0, 2) + b + fa.substr(c, 2, null);
      if (1e6 > a) return fa.substr(c, 0, 3) + b + fa.substr(c, 3, null);
    } else {
      if (1e7 > a) return fa.substr(c, 0, 1) + b + fa.substr(c, 1, 3) + b + fa.substr(c, 4, null);
      if (1e8 > a) return fa.substr(c, 0, 2) + b + fa.substr(c, 2, 3) + b + fa.substr(c, 5, null);
      if (1e9 > a) return fa.substr(c, 0, 3) + b + fa.substr(c, 3, 3) + b + fa.substr(c, 6, null);
    }
    return 1e10 > a
      ? fa.substr(c, 0, 1) + b + fa.substr(c, 1, 3) + b + fa.substr(c, 4, 3) + b + fa.substr(c, 7, null)
      : null;
  };
  ke.i = !0;
  ke.prototype = { s: ke };
  je.i = !0;
  je.F = fd;
  je.prototype = C(fd.prototype, {
    get: function () {
      return this.storage.getItem(this.name);
    },
    set: function (a) {
      this.storage.setItem(this.name, a);
    },
    s: je,
  });
  sa.i = !0;
  sa.prototype = {
    B: function () {
      for (var a = this.zi.iterator(); a.Ca(); ) a.next().wd();
      this.zi = null;
      this == sa.current && (sa.current = null);
      this.bc = this.yf = this.Os = null;
      this.Fq.B();
      this.Fq = null;
    },
    pi: function (a) {
      null != this.bc && this.bc.Zt();
      this.bc = a;
      this.bc.bind();
    },
    pt: function (a) {
      this.yf = a;
      a.CJ(this);
    },
    ZA: function () {
      sa.current = this;
    },
    px: function (a) {
      if (!this.ti && null != this.bc && this.bc.uj()) {
        var b = this.bc.qy();
        this.Gy = 0 == (0 == b.j && 0 == b.l && 1 == b.u && 1 == b.A);
        this.Bf = 1;
        this.ep((this.en = Eb.gv.hq));
        this.fu();
        this.Om();
        a = this.Fq.GE(a, 0 == this.Gq);
        0 < a.o && this.Tq(a);
        null != this.$i && this.Zl(null);
        this.qq = !1;
        this.pn();
      }
    },
    clear: function () {},
    Tq: function (a) {
      var b = a.m,
        c = 0;
      for (a = a.o; c < a; ) this.tx(b[c++]);
    },
    tx: function (a) {
      var b = a.effect;
      b.active && ((this.sg = a), this.oi(a), 0 != this.Bf && b.yd(this));
    },
    fu: function () {
      ba.set(this.ex, this.yf.qr());
      ba.set(this.hn, this.yf.ZF());
      ba.Kd(this.hn, this.ex, this.kh);
    },
    Hf: function (a) {
      return this.zi.P[a];
    },
    createTexture: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == a && (a = -32768);
      d |= this.Nq;
      if (this.Kx || !this.lm) d |= 2;
      d = this.Vn(d, e);
      -32768 == a && (a = this.ts++);
      this.gt(d, a);
      d.qJ(b, c);
      return d;
    },
    KE: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == a && (a = -32768);
      d |= this.Nq;
      if (this.Kx || !this.lm) d |= 2;
      -32768 == a && (a = this.ts++);
      d = this.Vn(d, e);
      this.gt(d, a);
      d.am(b, c);
      return d;
    },
    OE: function (a, b, c) {
      a = this.Hf(a).eq(b, c);
      this.gt(a, this.ts++);
      return a;
    },
    Zk: function (a) {
      if (this.zi.P.hasOwnProperty(a)) {
        var b = this.zi.P[a];
        this.zi.remove(a);
        b.wd();
      }
    },
    gt: function (a, b) {
      this.zi.P[b] = a;
      a.id = b;
      a.group = null == a.parent ? b : a.parent.group;
    },
    Om: function () {},
    pn: function () {},
    oi: function (a) {
      if (0 != this.Mi) {
        var b = this.Mi;
        a = a.uk;
        if (0 < (b & 1)) {
          var c = a[0];
          c = null != c ? c.alpha : 1;
          c != this.Bf && (this.Bf = c);
        }
        0 < (b & 2) && ((c = a[1]), null != c ? this.XA(c.yq) : null != this.rg && this.XA(null));
        0 < (b & 4) &&
          ((c = a[2]), (c = null != c ? c.hq : Eb.gv.hq), c != this.en && ((this.en = c), this.ep(this.en)));
        0 < (b & 8) &&
          ((c = a[3]),
          null != c
            ? null != c.iu && c.iu != this.$i && this.Zl(c.iu, null != c.ja)
            : null != this.$i && this.Zl(null));
      }
    },
    ep: function () {},
    Zl: function (a) {
      this.$i = a;
    },
    XA: function (a) {
      this.rg = a;
    },
    nk: function (a) {
      0 < (a.D & 1) ? ba.set(this.Xe, this.kh) : ba.Rt(this.kh, a.En(), this.Xe);
      return this.Xe;
    },
    s: sa,
  };
  Xa.i = !0;
  Xa.F = sa;
  Xa.prototype = C(sa.prototype, {
    pi: function (a) {
      sa.prototype.pi.call(this, a);
      this.context = a.getContext();
    },
    createTexture: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == a && (a = -32768);
      return sa.prototype.createTexture.call(this, a, b, c, d, e);
    },
    B: function () {
      sa.prototype.B.call(this);
      this.Vk = this.context = null;
      for (var a = this.Nj.keys(); a.Ca(); ) {
        var b = a.next(),
          c = this.Nj.P[b].canvas;
        c.width = 1;
        c.height = 1;
        this.Nj.P[b] = null;
      }
      this.Nj = null;
    },
    clear: function () {
      var a = this.bc;
      if (null != a && a.uj()) {
        this.HA();
        var b = this.context,
          c = a.jj();
        b.clearRect(c.x, c.y, c.width, c.height);
        0 < a.color.a && ((b.fillStyle = this.xq(a.color)), b.fillRect(c.x, c.y, c.width, c.height));
      }
    },
    Om: function () {
      sa.prototype.Om.call(this);
      this.HA();
      this.resetTransform();
      this.xA();
      if (this.Gy) {
        var a = this.bc.jj(),
          b = new Path2D();
        b.rect(a.x, a.y, a.width, a.height);
        this.context.clip(b);
      }
    },
    pn: function () {
      for (sa.prototype.pn.call(this); 0 < this.op; ) this.Us();
    },
    HA: function () {
      var a = this.bc;
      null != a &&
        a.uj() &&
        (this.resetTransform(),
        (a = this.context),
        (a.globalAlpha = 1),
        (a.globalCompositeOperation = Xa.Cm),
        (this.Vr = -1),
        (this.Lq = this.Wr = null),
        this.gm(a, this.km));
    },
    Vn: function (a, b) {
      return new gb(this, a, b);
    },
    nx: function (a) {
      var b = this.context;
      this.gm(b, this.km);
      this.dm(b);
      this.cm(b);
      this.setTransform(this.sg.g);
      if (null != this.rg) {
        var c = this.rg.ld;
        var d = this.rg.offset;
        a = a.color;
        var e = new Vb();
        e.r = a.r;
        e.Za = a.Za;
        e.b = a.b;
        e.a = a.a;
        e.r = P.ne(e.r * c.r + d.r);
        e.Za = P.ne(e.Za * c.Za + d.Za);
        e.b = P.ne(e.b * c.b + d.b);
        e.a = P.ne(e.a * c.a + d.a);
        c = e;
      } else c = a.color;
      b.fillStyle = this.xq(c);
      b.fillRect(0, 0, 1, 1);
    },
    qx: function (a) {
      var b = this.context;
      this.gm(b, this.km);
      this.dm(b);
      this.cm(b);
      var c = a.za;
      if (!(0 < (c.flags & 4096))) {
        c = c.image;
        this.setTransform(this.sg.g);
        var d = a.Ua,
          e = d.x,
          f = d.y,
          g = d.width,
          h = d.height;
        null != this.rg && ((c = this.ZD(a)), (f = e = 0));
        var l = a.flags;
        if (0 == (l & 12)) b.drawImage(c, e, f, g, h, 0, 0, 1, 1);
        else if (4 == (l & 12)) {
          d = a.Oj % 1;
          l = a.Pj % 1;
          0 > d && (d = 1 + d);
          0 > l && (l = 1 + l);
          var k = 0;
          0 != d && (k = 1);
          0 != l && (k |= 2);
          switch (k) {
            case 0:
              b.drawImage(c, e, f, g, h, 0, 0, 1, 1);
              break;
            case 1:
              b.drawImage(c, e + d * g, f, g, h, 0, 0, 1, 1);
              b.drawImage(c, e, f, g * d, h, 1 - d, 0, d, 1);
              break;
            case 2:
              b.drawImage(c, e, f + l * h, g, h, 0, 0, 1, 1);
              b.drawImage(c, e, f, g, h * l, 0, 1 - l, 1, l);
              break;
            case 3:
              b.drawImage(c, e + d * g, f + l * h, g, h, 0, 0, 1, 1),
                b.drawImage(c, e, f + h * l, g * d, h * (1 - l), 1 - d, 0, d, 1 - l),
                b.drawImage(c, e + d * g, f, g * (1 - d), h * l, 0, 1 - l, 1 - d, l),
                b.drawImage(c, e, f, g * d, h * l, 1 - d, 1 - l, d, l);
          }
        } else if (8 == (l & 12)) {
          l = a.gk;
          k = a.hk;
          for (var m = 1 / l, t = 1 / k, n = l | 0, w = k | 0, v = 0, F = 0; F < w; ) {
            ++F;
            for (var I = (a = 0); I < n; ) ++I, b.drawImage(c, e, f, g, h, a, v, m, t), (a += m);
            v += t;
          }
          a = h = g = 0;
          if (0 < l % 1)
            for (a = 1, e = 1 - n * m, g = (1 / l) * n, F = h = 0; F < w; )
              ++F, b.drawImage(c, d.x, d.y, (e / m) * d.width, d.height, g, h, e, 1 / k), (h += 1 / k);
          if (0 < k % 1)
            for (++a, f = 1 - w * t, g = 0, h = (1 / k) * w, F = 0; F < n; )
              ++F, b.drawImage(c, d.x, d.y, d.width, (f / t) * d.height, g, h, 1 / l, f), (g += 1 / l);
          2 == a &&
            ((e = 1 - n * m),
            (f = 1 - w * t),
            b.drawImage(c, d.x, d.y, (e / m) * d.width, (f / t) * d.height, g, h, e, f));
        } else if (12 == (l & 12)) {
          d = 1 / a.gk;
          l = 1 / a.hk;
          var r = (1 / d) | 0;
          v = (1 / l) | 0;
          var L = 1 - r * d;
          I = 1 - v * l;
          k = this.zK;
          k.uc(3 * r + 12);
          k.o = 0;
          m = this.AK;
          m.uc(18 * v + 6);
          n = t = m.o = 0;
          F = a.Oj % 1;
          0 > F && (F = 1 + F);
          var O = F;
          for (w = 0; w < r; ) {
            F = O;
            var D = O + d;
            1 < D
              ? ((k.m[k.o++] = F),
                (k.m[k.o++] = 1 - F),
                (k.m[k.o++] = 1),
                (k.m[k.o++] = 0),
                (k.m[k.o++] = D - 1),
                (k.m[k.o++] = 0),
                (t += 6))
              : ((k.m[k.o++] = F), (k.m[k.o++] = d), (k.m[k.o++] = 0), (t += 3));
            ++w;
            O += d;
            O %= 1;
          }
          0 < L &&
            ((F = O),
            (D = O + L),
            1 < D
              ? ((k.m[k.o++] = F),
                (k.m[k.o++] = 1 - F),
                (k.m[k.o++] = 1),
                (k.m[k.o++] = 0),
                (k.m[k.o++] = D - 1),
                (k.m[k.o++] = 0),
                (t += 6))
              : ((k.m[k.o++] = F), (k.m[k.o++] = L), (k.m[k.o++] = 0), (t += 3)));
          a = a.Pj % 1;
          0 > a && (a = 1 + a);
          O = a;
          for (w = 0; w < v; )
            (F = O),
              (D = O + l),
              1 < D
                ? ((m.m[m.o++] = F),
                  (m.m[m.o++] = 1 - F),
                  (m.m[m.o++] = 1),
                  (m.m[m.o++] = 0),
                  (m.m[m.o++] = D - 1),
                  (m.m[m.o++] = 0),
                  (n += 6))
                : ((m.m[m.o++] = F), (m.m[m.o++] = l), (m.m[m.o++] = 0), (n += 3)),
              ++w,
              (O += l),
              (O %= 1);
          0 < I &&
            ((F = O),
            (D = O + I),
            1 < D
              ? ((m.m[m.o++] = F),
                (m.m[m.o++] = 1 - F),
                (m.m[m.o++] = 1),
                (m.m[m.o++] = 0),
                (m.m[m.o++] = D - 1),
                (m.m[m.o++] = 0),
                (n += 6))
              : ((m.m[m.o++] = F), (m.m[m.o++] = I), (m.m[m.o++] = 0), (n += 3)));
          w = a = 0;
          for (var K; w < n; ) {
            O = m.m[w++];
            var Y = m.m[w++];
            var V = m.m[w++];
            I = Y / l;
            for (K = F = 0; K < t; )
              (r = k.m[K++]),
                (L = k.m[K++]),
                (D = k.m[K++]),
                (v = L / d),
                b.drawImage(c, e + F, f + a, g * v, h * I, r, O, L, Y),
                (F = g * v * D);
            a = h * I * V;
          }
        }
      }
    },
    sx: function (a) {
      var b = a.Vt,
        c = a.za.image,
        d = a.Pc,
        e = this.context;
      this.gm(e, this.km);
      this.dm(e);
      this.cm(e);
      this.setTransform(this.sg.g);
      for (var f = a.Xj, g = a.Yj, h, l, k = a.ju, m, t, n, w = a.AB, v = a.ku; v <= k; ) {
        h = a.Dp;
        for (l = a.Cp; h <= l; )
          (m = h * b + f),
            (t = v * b + g),
            (n = -1),
            w.inRange(h, v) && (n = w.m[v * w.ca + h]),
            0 < n && ((n = d.Dn(n).frame), e.drawImage(c, n.x, n.y, n.width, n.height, m, t, b, b)),
            ++h;
        ++v;
      }
    },
    mx: function (a) {
      var b = this.Nj.P[a.key];
      null == b &&
        ((b = window.document.createElement("canvas").getContext("2d", { alpha: !0 })), (this.Nj.P[a.key] = b));
      var c = a.Nd,
        d = a.grid,
        e = c.lineHeight,
        f = c.Wm,
        g = c.advance;
      c = d.ca * g;
      var h = d.Ha * e;
      if (b.canvas.width < c || b.canvas.height < h) (b.canvas.width = c), (b.canvas.height = h);
      var l = a.za.image,
        k = this.QE,
        m = null,
        t = d.m,
        n = d.ca,
        w = 0;
      for (d = d.ca * d.Ha; w < d; ) {
        var v = w++,
          F = t[v],
          I = F.code,
          r = F.zB,
          L = F.gq,
          O = (v % n) * g,
          D = ((v / n) | 0) * e;
        b.clearRect(O, D, g, e);
        var K = null;
        if (-1 != L && ((K = k.P[L]), null == K)) {
          var Y = (L >> 16) & 255;
          var V = (L >> 8) & 255;
          var T = L & 255;
          K = "rgb(" + Y + "," + V + "," + T + ")";
          k.P[L] = K;
        }
        L = k.P[r];
        null == L &&
          ((Y = (r >> 16) & 255),
          (V = (r >> 8) & 255),
          (T = r & 255),
          (L = "rgb(" + Y + "," + V + "," + T + ")"),
          (k.P[r] = L));
        32 < I
          ? ((I = f[I]),
            null == I && (I = f[63]),
            (r = Xa.Cm),
            m != r && (m = b.globalCompositeOperation = r),
            (r = D + I.offsetY),
            (Y = I.w),
            (V = I.P),
            b.drawImage(l, I.x, I.y, I.w, I.P, O, r, Y, V),
            null != L &&
              ((b.fillStyle = L), (L = Xa.uD), m != L && (m = b.globalCompositeOperation = L), b.fillRect(O, r, Y, V)),
            null != K &&
              ((b.fillStyle = K), (K = Xa.mC), m != K && (m = b.globalCompositeOperation = K), b.fillRect(O, D, g, e)))
          : null != K &&
            ((b.fillStyle = K), (K = Xa.Cm), m != K && (m = b.globalCompositeOperation = K), b.fillRect(O, D, g, e));
        t[v] = F;
      }
      this.setTransform(this.sg.g);
      e = b.canvas;
      b = this.context;
      this.gm(b, this.km);
      this.dm(b);
      this.cm(b);
      0 < a.fillColor >>> 24 && ((b.fillStyle = this.xq(fi.DK(a.fillColor))), b.fillRect(0, 0, c, h));
      b.drawImage(e, 0, 0, c, h, 0, 0, c, h);
    },
    fu: function () {
      sa.prototype.fu.call(this);
      var a = this.bc.jj();
      this.It = !1;
      if (this.yf.Ap && !this.Gy) {
        var b = this.yf.size;
        if (b.x == a.width && b.y == a.height) {
          this.It = !0;
          ba.Id(this.lt);
          return;
        }
      }
      ba.EJ(this.lt, a.x, a.y, a.width, a.height);
      ba.Kd(this.lt, this.kh, this.kh);
    },
    nk: function (a) {
      if (this.It) return ba.set(this.Xe, a.En()), this.Xe;
      if (0 < (a.D & 1)) ba.set(this.Xe, this.kh);
      else {
        var b = a.ur;
        if (0 < (a.D & 64))
          if (((a.D &= -65), null == b && ((b = a.ur = ba.Ac()), ba.Id(b)), 0 < (a.D & 1)))
            (b.m11 = 1), (b.m12 = 0), (b.m14 = 0), (b.m21 = 0), (b.m22 = 1), (b.m24 = 0);
          else {
            var c = a.matrix,
              d = a.scale.x,
              e = a.scale.y;
            0 < (a.D & 2)
              ? ((b.m11 = c.m11 * d), (b.m12 = c.m12 * e), (b.m21 = c.m21 * d), (b.m22 = c.m22 * e))
              : ((b.m11 = c.m11), (b.m21 = c.m21), (b.m12 = c.m12), (b.m22 = c.m22));
            b.m14 = a.translate.x;
            b.m24 = a.translate.y;
          }
        var f = b;
        a = this.kh;
        b = this.Xe;
        c = f.m11;
        d = f.m12;
        e = f.m14;
        var g = f.m21,
          h = f.m22;
        f = f.m24;
        var l = a.m11,
          k = a.m12;
        b.m11 = l * c + k * g;
        b.m12 = l * d + k * h;
        b.m14 = l * e + k * f + a.m14;
        l = a.m21;
        k = a.m22;
        b.m21 = l * c + k * g;
        b.m22 = l * d + k * h;
        b.m24 = l * e + k * f + a.m24;
      }
      return this.Xe;
    },
    ep: function (a) {
      this.fn = this.DE[a.G];
    },
    Zl: function (a, b) {
      null == b && (b = !1);
      var c = this.$i;
      sa.prototype.Zl.call(this, a);
      var d = this.context;
      if (null == a) 0 != this.op && this.Us();
      else {
        a != c && null != c && this.Us();
        this.xA();
        this.resetTransform();
        a = this.$i;
        c = 1 / this.bc.Yf;
        if (b)
          try {
            var e = new Path2D();
            e.rect(a[0].x * c, a[0].y * c, (a[2].x - a[1].x) * c, (a[2].y - a[3].y) * c);
            d.clip(e);
            return;
          } catch (f) {}
        d.strokeStyle = this.NK;
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
    dm: function (a) {
      this.fn != this.Wr && ((this.Wr = this.fn), (a.globalCompositeOperation = this.fn));
    },
    cm: function (a) {
      this.Bf != this.Vr && ((this.Vr = this.Bf), (a.globalAlpha = this.Bf));
    },
    gm: function (a, b) {
      b != this.Lq && ((this.Lq = b), (a.imageSmoothingEnabled = b));
    },
    setTransform: function (a) {
      a = this.nk(a);
      this.context.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24);
    },
    ZD: function (a) {
      var b = a.Ua,
        c = b.width | 0,
        d = b.height | 0,
        e = this.Vk.canvas;
      if (e.width < c || e.height < d) (e.width = c), (e.height = d);
      this.Vk.drawImage(a.za.image, b.x | 0, b.y | 0, c, d, 0, 0, c, d);
      a = this.Vk.getImageData(0, 0, c, d);
      b = a.data;
      c = 0;
      d = b.length;
      var f = this.rg,
        g = f.ld,
        h = g.r,
        l = g.Za,
        k = g.b;
      g = g.a;
      var m = f.offset;
      f = 255 * m.r;
      var t = 255 * m.Za,
        n = 255 * m.b;
      for (m = 255 * m.a; c < d; )
        (b[c] = b[c] * h + f),
          (b[c + 1] = b[c + 1] * l + t),
          (b[c + 2] = b[c + 2] * k + n),
          (b[c + 3] = b[c + 3] * g + m),
          (c += 4);
      this.Vk.putImageData(a, 0, 0);
      return e;
    },
    xq: function (a) {
      var b = (((255 * a.a) | 0) << 24) | (((255 * a.r) | 0) << 16) | (((255 * a.Za) | 0) << 8) | (255 * a.b) | 0,
        c = this.$w.P[b];
      null == c && ((c = $g.EK(a)), (this.$w.P[b] = c));
      return c;
    },
    resetTransform: function () {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
    },
    xA: function () {
      this.context.save();
      this.op++;
    },
    Us: function () {
      this.context.restore();
      this.op--;
    },
    s: Xa,
  });
  Qb.i = !0;
  Qb.prototype = {
    B: function () {},
    uj: function () {
      return null != this.getContext() && 0 < this.Rm ? 0 < this.Sk : !1;
    },
    qy: function () {
      var a = this.viewport,
        b = new W();
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      return b;
    },
    SI: function () {
      var a = this.viewport;
      a.j = 0;
      a.l = 0;
      a.u = 1;
      a.A = 1;
      this.PB();
    },
    jj: function () {
      var a = this.Nl,
        b = new jc();
      b.x = a.x;
      b.y = a.y;
      b.width = a.width;
      b.height = a.height;
      return b;
    },
    JA: function (a, b) {
      this.Rm = a;
      this.Sk = b;
      this.PB();
    },
    PB: function () {
      this.Nl.x = (this.viewport.j * this.Rm) | 0;
      this.Nl.y = (this.viewport.l * this.Sk) | 0;
      var a = this.viewport;
      this.Nl.width = ((a.u - a.j) * this.Rm) | 0;
      a = this.viewport;
      this.Nl.height = ((a.A - a.l) * this.Sk) | 0;
    },
    bind: function () {},
    Zt: function () {},
    s: Qb,
  };
  lb.i = !0;
  lb.F = Qb;
  lb.prototype = C(Qb.prototype, {
    py: function () {
      return this.children.slice();
    },
    eG: function (a) {
      return Ga.find(this.children, function (b) {
        return b.name == a;
      });
    },
    eq: function (a, b) {
      var c = this.V.Vn(this.flags, a);
      this.children.push(c);
      c.parent = this;
      c.group = this.group;
      c.width = this.width;
      c.dd = this.dd;
      c.height = this.height;
      c.Vc = this.Vc;
      c.scale = this.scale;
      b = b.er();
      if (null != a) {
        a = this.Pc.Wx(a);
        for (var d = a.frame.x | 0, e = a.frame.y | 0, f = 0, g = b.frames; f < g.length; )
          (a = g[f]), ++f, (a.Ua.x += d), (a.Ua.y += e);
      }
      c.Pc = new Ud(c, b);
      0 < (this.flags & 1024) && (c.image = this.image);
      return c;
    },
    qJ: function (a, b) {
      var c = this;
      this.image = a;
      this.dd = this.width = a.width | 0;
      this.Vc = this.height = a.height | 0;
      this.ik() && ((this.dd = P.Wh(this.width)), (this.Vc = P.Wh(this.height)));
      null != b && (this.Pc = new Ud(this, b.er()));
      lb.mz++;
      var d = this.image;
      this.sA(function () {
        0 < (c.flags & 4096) ||
          (0 < (c.flags & 2048) && c.V.Os(d), (c.flags |= 1024), lb.mz--, c.Ks(), null != c.Sz && c.Sz());
      });
    },
    am: function (a, b) {
      this.flags |= 1024;
      this.JA(a, b);
    },
    wd: function () {
      if (!(0 < (this.flags & 4096))) {
        this.flags |= 4096;
        null == this.parent && (0 < (this.flags & 2048) && this.Pq(), null != this.Pc && this.Pc.R());
        for (var a = 0, b = this.children; a < b.length; ) b[a++].wd();
        this.Co = this.children = this.parent = this.Sz = this.Pc = this.image = null;
      }
    },
    HI: function (a) {
      -1 == this.Co.indexOf(a) && this.Co.push(a);
    },
    XK: function (a) {
      fa.remove(this.Co, a);
    },
    sA: function () {},
    Ks: function () {
      for (var a = 0, b = this.children; a < b.length; ) {
        var c = b[a];
        ++a;
        c.image = this.image;
        c.flags |= 1024;
      }
    },
    ul: function () {
      return P.ul(this.width) ? P.ul(this.height) : !1;
    },
    ik: function () {
      return 0 < (this.flags & 2) ? !this.ul() : !1;
    },
    Pq: function () {},
    s: lb,
  });
  gb.i = !0;
  gb.F = lb;
  gb.prototype = C(lb.prototype, {
    getContext: function () {
      return this.image.getContext("2d", null);
    },
    am: function (a, b) {
      var c = window.document.createElement("canvas");
      c.width = a;
      c.height = b;
      this.image = c;
      this.width = this.dd = a;
      this.height = this.Vc = b;
      this.ik() && ((this.dd = P.Wh(a)), (this.Vc = P.Wh(b)));
      lb.prototype.am.call(this, a, b);
    },
    sA: function (a) {
      var b = 0 == (this.flags & 1);
      if (this.ik() || !b || 0 < (this.flags & 512)) {
        this.flags |= 2048;
        var c = window.document.createElement("canvas");
        c.width = this.dd;
        c.height = this.Vc;
        c = c.getContext("2d", null);
        b || ((c.fillStyle = "rgb(0,0,0)"), c.fillRect(0, 0, this.dd, this.Vc));
        c.drawImage(this.image, 0, 0);
        0 < (this.flags & 512) && this.lF(c);
        this.image = c.canvas;
      }
      switch (Wb.BG) {
        case 0:
          a();
          break;
        case 1:
          this.EB(this.image, a);
          break;
        case 2:
          this.CK(this.image, a);
          break;
        case 3:
          this.BK(this.image, a);
      }
    },
    Pq: function () {
      lb.prototype.Pq.call(this);
      try {
        this.image instanceof HTMLImageElement
          ? (this.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
          : this.image instanceof HTMLCanvasElement
          ? ((this.image.width = 1), (this.image.height = 1))
          : this.image instanceof ImageBitmap && this.image.close();
      } catch (a) {}
    },
    lF: function (a) {
      function b(I, r, L, O) {
        f = r * e + (I << 2);
        g = O * e + (L << 2);
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
          l,
          k = this.Pc.IF(),
          m = this.Pc.wo,
          t = 0;
        t < m;

      ) {
        h = k[t].frame;
        var n = h.x,
          w = h.y,
          v = n + h.width,
          F = w + h.height;
        for (l = w; l < F; ) b(n, l, n - 1, l), b(v - 1, l, v, l), ++l;
        h = n;
        for (l = w - 1; h < v; ) b(h, w, h, w - 1), b(h, F - 1, h, F), ++h;
        b(n, w, n - 1, w - 1);
        b(v - 1, w, v, w - 1);
        b(n, F - 1, n - 1, F);
        b(v - 1, F - 1, v, F);
        ++t;
      }
      a.putImageData(c, 0, 0);
    },
    BK: function (a, b) {
      var c = this;
      null == window.createImageBitmap
        ? a instanceof HTMLImageElement
          ? b()
          : this.EB(a, b)
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
    EB: function (a, b) {
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
    CK: function (a, b) {
      if (!(a instanceof HTMLCanvasElement)) {
        var c = window.document.createElement("canvas");
        c.width = a.width;
        c.height = a.height;
        c.getContext("2d", null).drawImage(a, 0, 0);
        this.flags |= 2048;
      }
      b();
    },
    s: gb,
  });
  Xb.i = !0;
  Xb.F = Qb;
  Xb.prototype = C(Qb.prototype, {
    J: function (a) {
      return (this.od = a);
    },
    B: function () {
      Qb.prototype.B.call(this);
      this.Pz = this.Fo = this.Js = this.Ko = this.Pa = null;
    },
    s: Xb,
  });
  ie.i = !0;
  ie.F = Xb;
  ie.prototype = C(Xb.prototype, {
    update: function () {
      var a = this.canvas.clientWidth,
        b = this.canvas.clientHeight;
      null != this.Jq && ((a = this.Jq.x), (b = this.Jq.y));
      if (this.Hq.x != a || this.Hq.y != b) {
        this.Hq.set(a, b);
        var c = window.devicePixelRatio;
        this.width = (a * c) | 0;
        this.height = (b * c) | 0;
        a = this.Yf;
        0 == a && (a = c);
        c = (this.width / a) | 0;
        a = (this.height / a) | 0;
        this.canvas.width = c;
        this.canvas.height = a;
        this.JA(c, a);
        this.Pa();
      }
    },
    Oy: function (a) {
      null == a && (a = new rd());
      var b = {};
      b.alpha = a.alpha;
      b.desynchronized = a.desynchronized;
      this.context = this.canvas.getContext("2d", b);
    },
    Py: function (a) {
      function b() {
        try {
          e.Pz();
        } catch (g) {}
      }
      function c(g) {
        g.preventDefault();
      }
      function d(g) {
        console.log(g.statusMessage || "Unknown error");
      }
      var e = this;
      null == a && (a = new rd());
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
      this.mu = !1;
      try {
        if ((this.context = this.canvas.getContext("webgl", f)) && this.context instanceof WebGLRenderingContext) {
          this.mu = !0;
          return;
        }
      } catch (g) {
        this.context = null;
      }
      this.canvas.removeEventListener("webglcontextcreationerror", d);
      this.canvas.removeEventListener("webglcontextlost", c);
      this.canvas.removeEventListener("webglcontextrestored", b);
    },
    uj: function () {
      if (this.mu) {
        var a = this.getContext();
        if (null != a && 37442 == a.getError()) return !1;
      }
      return Xb.prototype.uj.call(this);
    },
    iy: function () {
      if (this.Ar) return 0 == window.orientation ? 0 : 1;
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
    B: function () {
      Xb.prototype.B.call(this);
      this.canvas.remove();
      this.context = this.canvas = null;
      for (var a = 0, b = this.bs; a < b.length; ) {
        var c = b[a];
        ++a;
        U.Z(c, "target").removeEventListener(U.Z(c, "type"), U.Z(c, "listener"));
      }
      this.bs = null;
      window.onresize = null;
      window.oncontextmenu = null;
      window.onorientationchange = null;
    },
    getContext: function () {
      return this.context;
    },
    VE: function () {
      this.addListener(window, "contextmenu", function (a) {
        a.preventDefault();
      });
      window.oncontextmenu = function () {
        return !1;
      };
    },
    WG: function () {
      try {
        return document.fullscreenEnabled;
      } catch (a) {
        return !1;
      }
    },
    rJ: function (a) {
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
      this.bs.push(d);
      a.addEventListener(b, c);
    },
    s: ie,
  });
  Gb.i = !0;
  Gb.prototype = { setActive: function () {}, s: Gb };
  he.i = !0;
  he.F = Gb;
  he.prototype = C(Gb.prototype, {
    sa: function () {
      var a = this.V.$;
      this.Ja = this.V.createProgram(
        "\n\t\t\tattribute vec4 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\tattribute vec4 a_Color;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\t\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\tuniform mat4 u_Matrix;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = u_Matrix * a_Position;\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t\tv_Color = a_Color.bgra;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D u_Image;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\tuniform bool u_Fill;\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tif (u_Fill)\n\t\t\t\t\tgl_FragColor = v_Color;\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\tvec4 color = texture2D(u_Image, v_TexCoord);\n\t\t\t\t\tgl_FragColor = color + v_Color * color.w;\n\t\t\t\t}\n\t\t\t}\n\t\t"
      );
      this.Fl = a.getUniformLocation(this.Ja, "u_Matrix");
      this.Eh = a.getUniformLocation(this.Ja, "u_InvTextureSize");
      this.Fe = a.getAttribLocation(this.Ja, "a_Position");
      this.Le = a.getAttribLocation(this.Ja, "a_TexCoord");
      this.hh = a.getAttribLocation(this.Ja, "a_Color");
      this.Bh = a.getUniformLocation(this.Ja, "u_Image");
      this.Bx = a.getUniformLocation(this.Ja, "u_Fill");
      this.Yg = a.createBuffer();
      this.qj = a.createBuffer();
    },
    setActive: function () {
      var a = this.V.$;
      a.useProgram(this.Ja);
      a.bindBuffer(34962, this.Yg);
      a.bindBuffer(34963, this.qj);
      a.enableVertexAttribArray(this.Fe);
      a.vertexAttribPointer(this.Fe, 2, 5123, !1, 16, 0);
      a.enableVertexAttribArray(this.Le);
      a.vertexAttribPointer(this.Le, 2, 5123, !1, 16, 4);
      a.enableVertexAttribArray(this.hh);
      a.vertexAttribPointer(this.hh, 4, 5121, !0, 16, 8);
    },
    yd: function (a) {
      var b = a.effect,
        c = b.grid,
        d = b.za.dd,
        e = b.za.Vc,
        f = this.V.$,
        g = b.za;
      f.uniform1i(this.Bh, 0);
      f.bindTexture(3553, g.Mc);
      ba.jr(b.Ht ? ba.Rt(this.V.hn, a.g.En(), this.V.Xe) : this.V.nk(a.g), this.matrix, 0, !0);
      f.uniformMatrix4fv(this.Fl, !1, this.matrix);
      f.uniform2f(this.Eh, 1 / d, 1 / e);
      f.uniform1i(this.Bx, 1);
      a = b.grid.ca * b.grid.Ha;
      if (a > this.size) {
        this.size = a;
        this.qc = new ArrayBuffer(64 * a);
        this.hu = new Uint16Array(this.qc);
        this.TB = new Uint32Array(this.qc);
        this.wb = new Uint16Array(6 * a);
        for (e = d = 0; d < a; )
          (g = 4 * d),
            (this.wb[e++] = g),
            (this.wb[e++] = g + 1),
            (this.wb[e++] = g + 2),
            (this.wb[e++] = g),
            (this.wb[e++] = g + 2),
            (this.wb[e++] = g + 3),
            ++d;
        f.bufferData(34963, this.wb, 35044);
      }
      d = b.Nd;
      f = d.lineHeight;
      e = d.advance;
      var h = d.Wm,
        l = 0,
        k = c.m,
        m = this.hu,
        t = this.TB,
        n = (d = 0),
        w = b.fillColor;
      if (0 != w) {
        c = b.grid.ca * e;
        var v = b.grid.Ha * f;
        m[0] = 0;
        m[1] = v;
        m[8] = 0;
        m[9] = 0;
        m[16] = c;
        m[17] = 0;
        m[24] = c;
        m[25] = v;
        t[2] = w;
        t[6] = w;
        t[10] = w;
        t[14] = w;
        n = 64;
        l = 1;
      }
      for (; d < a; )
        if (((g = k[d++]), !(0 > g.gq))) {
          var F = g.x * e;
          var I = g.y * f;
          w = -16777216 | g.gq;
          g = n >> 1;
          m[g] = F;
          m[g + 1] = I + f;
          m[g + 8] = F;
          m[g + 9] = I;
          m[g + 16] = F + e;
          m[g + 17] = I;
          m[g + 24] = F + e;
          m[g + 25] = I + f;
          g = (n + 8) >> 2;
          t[g] = w;
          t[g + 4] = w;
          t[g + 8] = w;
          t[g + 12] = w;
          n += 64;
          ++l;
        }
      this.drawElements(1, l);
      for (n = d = l = 0; d < a; )
        if (((g = k[d++]), !(32 >= g.code))) {
          var r = h[g.code];
          null == r && (r = h[63]);
          F = g.x * e;
          I = g.y * f + r.offsetY;
          c = r.w;
          v = r.P;
          b = r.x;
          r = r.y;
          var L = b + c;
          var O = r + v;
          w = g.zB;
          g = n >> 1;
          m[g] = F;
          m[g + 1] = I + v;
          m[g + 2] = b;
          m[g + 3] = O;
          m[g + 8] = F;
          m[g + 9] = I;
          m[g + 10] = b;
          m[g + 11] = r;
          m[g + 16] = F + c;
          m[g + 17] = I;
          m[g + 18] = L;
          m[g + 19] = r;
          m[g + 24] = F + c;
          m[g + 25] = I + v;
          m[g + 26] = L;
          m[g + 27] = O;
          g = (n + 8) >> 2;
          t[g] = w;
          t[g + 4] = w;
          t[g + 8] = w;
          t[g + 12] = w;
          n += 64;
          ++l;
        }
      this.drawElements(0, l);
    },
    drawElements: function (a, b) {
      if (0 != b) {
        var c = this.V.$;
        c.uniform1i(this.Bx, a);
        c.bufferData(34962, this.qc, 35048);
        c.drawElements(4, 6 * b, 5123, 0);
      }
    },
    mh: function () {},
    s: he,
  });
  rd.i = !0;
  rd.prototype = { s: rd };
  Wb.i = !0;
  ge.i = !0;
  ge.F = Gb;
  ge.prototype = C(Gb.prototype, {
    sa: function () {
      var a = this.V.$;
      this.Ja = this.V.createProgram(
        "\n\t\t\tattribute vec4 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\tattribute vec4 a_Color;\n\t\t\t\n\t\t\tuniform mat4 u_Matrix;\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = u_Matrix * a_Position;\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t\tv_Color = a_Color;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\t\n\t\t\tuniform sampler2D u_Image;\n\t\t\tuniform float u_Alpha;\n\t\t\tuniform vec4 u_ColorMultiplier;\n\t\t\tuniform vec4 u_ColorOffset;\n\t\t\t\n\t\t\tuniform bool u_sampleTexture;\n\t\t\tuniform bool u_transformColors;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying vec4 v_Color;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tvec4 color;\n\t\t\t\n\t\t\t\tif (u_sampleTexture)\n\t\t\t\t\tcolor = texture2D(u_Image, v_TexCoord);\n\t\t\t\telse\n\t\t\t\t\tcolor = v_Color;\n\t\t\t\t\n\t\t\t\tif (u_transformColors)\n\t\t\t\t\tcolor = color * u_ColorMultiplier + u_ColorOffset;\n\t\t\t\t\n\t\t\t\tgl_FragColor = color * u_Alpha;\n\t\t\t}\n\t\t"
      );
      this.Fl = a.getUniformLocation(this.Ja, "u_Matrix");
      this.Bh = a.getUniformLocation(this.Ja, "u_Image");
      this.UD = a.getUniformLocation(this.Ja, "u_Alpha");
      this.Pw = a.getUniformLocation(this.Ja, "u_ColorMultiplier");
      this.Rw = a.getUniformLocation(this.Ja, "u_ColorOffset");
      this.MA = a.getUniformLocation(this.Ja, "u_sampleTexture");
      this.HB = a.getUniformLocation(this.Ja, "u_transformColors");
      this.Eh = a.getUniformLocation(this.Ja, "u_InvTextureSize");
      this.qc = new ArrayBuffer(128);
      this.sn = new Float32Array(this.qc);
      for (
        var b = [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          c = 0,
          d = b.length;
        c < d;

      ) {
        var e = c++;
        this.sn[e] = b[e];
      }
      this.Yg = a.createBuffer();
      a.bindBuffer(34962, this.Yg);
      a.bufferData(34962, this.qc, 35048);
    },
    setActive: function () {
      var a = this.V.$;
      a.useProgram(this.Ja);
      a.bindBuffer(34962, this.Yg);
      a.bindBuffer(34963, null);
      this.Fe = a.getAttribLocation(this.Ja, "a_Position");
      a.enableVertexAttribArray(this.Fe);
      a.vertexAttribPointer(this.Fe, 2, 5126, !1, 32, 0);
      this.Le = a.getAttribLocation(this.Ja, "a_TexCoord");
      a.enableVertexAttribArray(this.Le);
      a.vertexAttribPointer(this.Le, 2, 5126, !1, 32, 8);
      this.hh = a.getAttribLocation(this.Ja, "a_Color");
      a.enableVertexAttribArray(this.hh);
      a.vertexAttribPointer(this.hh, 4, 5126, !1, 32, 16);
    },
    yd: function (a) {
      var b = this.V.$,
        c = this.sn,
        d = a.effect;
      if (d.type == Sa.TYPE) {
        var e = d.za,
          f = e.dd,
          g = e.Vc,
          h = d.Ua,
          l = d.Oj * f + h.x,
          k = d.Pj * g + h.y,
          m = l + d.gk * h.width;
        d = k + d.hk * h.height;
        c[2] = l;
        c[3] = d;
        c[10] = m;
        c[11] = d;
        c[18] = l;
        c[19] = k;
        c[26] = m;
        c[27] = k;
        b.uniform1i(this.Bh, 0);
        b.bindTexture(3553, e.Mc);
        b.uniform1i(this.MA, 1);
        b.uniform2f(this.Eh, 1 / f, 1 / g);
      } else
        d.type == tb.TYPE &&
          ((l = d.color),
          (e = l.a),
          (f = l.r * e),
          (g = l.Za * e),
          (l = l.b * e),
          (c[4] = f),
          (c[5] = g),
          (c[6] = l),
          (c[7] = e),
          (c[12] = f),
          (c[13] = g),
          (c[14] = l),
          (c[15] = e),
          (c[20] = f),
          (c[21] = g),
          (c[22] = l),
          (c[23] = e),
          (c[28] = f),
          (c[29] = g),
          (c[30] = l),
          (c[31] = e),
          b.uniform1i(this.MA, 0));
      b.bufferData(34962, this.qc, 35048);
      ba.jr(this.V.nk(a.g), this.matrix, 0, !0);
      b.uniformMatrix4fv(this.Fl, !1, this.matrix);
      b.uniform1f(this.UD, this.V.Bf);
      c = this.V.rg;
      null != c
        ? (b.uniform1i(this.HB, 1),
          (a = c.ld),
          (c = c.offset),
          b.uniform4f(this.Pw, a.r, a.Za, a.b, a.a),
          b.uniform4f(this.Rw, c.r, c.Za, c.b, c.a))
        : (b.uniform1i(this.HB, 0), b.uniform4f(this.Pw, 1, 1, 1, 1), b.uniform4f(this.Rw, 0, 0, 0, 0));
      b.drawArrays(5, 0, 4);
    },
    mh: function () {},
    s: ge,
  });
  fe.i = !0;
  fe.F = Gb;
  fe.prototype = C(Gb.prototype, {
    sa: function () {
      var a = this.V.$;
      this.Ja = this.V.createProgram(
        "\n\t\t\tattribute vec2 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\tattribute float a_Alpha;\n\t\t\t\n\t\t\tattribute vec4 a_ColorMultiplier;\n\t\t\tattribute vec4 a_ColorOffset;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying float v_Alpha;\n\t\t\tvarying vec4 v_ColorMultiplier;\n\t\t\tvarying vec4 v_ColorOffset;\n\t\t\t\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = vec4(a_Position, 1, 1);\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t\tv_Alpha = a_Alpha;\n\t\t\t\tv_ColorMultiplier = a_ColorMultiplier;\n\t\t\t\tv_ColorOffset = a_ColorOffset;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D u_Image;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvarying float v_Alpha;\n\t\t\tvarying vec4 v_ColorMultiplier;\n\t\t\tvarying vec4 v_ColorOffset;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tvec4 color;\n\t\t\t\tcolor = texture2D(u_Image, v_TexCoord) * v_Alpha;\n\t\t\t\tcolor = color * v_ColorMultiplier + v_ColorOffset;\n\t\t\t\tgl_FragColor = color;\n\t\t\t}\n\t\t"
      );
      this.Fe = a.getAttribLocation(this.Ja, "a_Position");
      this.Le = a.getAttribLocation(this.Ja, "a_TexCoord");
      this.mw = a.getAttribLocation(this.Ja, "a_Alpha");
      this.Ow = a.getAttribLocation(this.Ja, "a_ColorMultiplier");
      this.Qw = a.getAttribLocation(this.Ja, "a_ColorOffset");
      this.Eh = a.getUniformLocation(this.Ja, "u_InvTextureSize");
      this.Bh = a.getUniformLocation(this.Ja, "u_Image");
      this.Yg = a.createBuffer();
      this.qc = new ArrayBuffer(131072);
      this.sn = new Float32Array(this.qc);
      new Uint8Array(this.qc);
      this.SK = new Uint16Array(this.qc);
      this.TK = new Uint32Array(this.qc);
      this.qj = a.createBuffer();
      this.wb = new Uint16Array(6144);
      for (var b = 0, c = 0; 1024 > b; ) {
        var d = 4 * b;
        this.wb[c++] = d;
        this.wb[c++] = d + 1;
        this.wb[c++] = d + 2;
        this.wb[c++] = d;
        this.wb[c++] = d + 2;
        this.wb[c++] = d + 3;
        ++b;
      }
      a.bindBuffer(34963, this.qj);
      a.bufferData(34963, this.wb, 35044);
    },
    setActive: function () {
      var a = this.V.$;
      a.useProgram(this.Ja);
      a.bindBuffer(34962, this.Yg);
      a.bindBuffer(34963, this.qj);
      a.enableVertexAttribArray(this.Fe);
      a.vertexAttribPointer(this.Fe, 2, 5126, !1, 32, 0);
      a.enableVertexAttribArray(this.Le);
      a.vertexAttribPointer(this.Le, 2, 5123, !1, 32, 8);
      a.enableVertexAttribArray(this.mw);
      a.vertexAttribPointer(this.mw, 1, 5126, !1, 32, 12);
      a.enableVertexAttribArray(this.Ow);
      a.vertexAttribPointer(this.Ow, 4, 5121, !0, 32, 16);
      a.enableVertexAttribArray(this.Qw);
      a.vertexAttribPointer(this.Qw, 4, 5121, !0, 32, 20);
    },
    yd: function () {},
    mh: function (a) {
      var b = a.o,
        c = this.V.$,
        d = a.m[0].effect;
      if (d.type == Sa.TYPE) {
        if (((d = d.za), 0 != (d.flags & 1024))) {
          c.uniform1i(this.Bh, 0);
          c.bindTexture(3553, d.Mc);
          c.uniform2f(this.Eh, 1 / d.dd, 1 / d.Vc);
          d = 1024;
          0 < Wb.os && 1024 > Wb.os && (d = Wb.os);
          c = this.V.Mi;
          this.V.Mi = 12;
          this.V.oi(a.m[0]);
          this.V.Mi = 3;
          for (var e = (b / d) | 0, f = 0; f < e; ) this.uw(a, f * d, d), ++f;
          d *= e;
          b -= d;
          0 < b && this.uw(a, d, b);
          this.V.Mi = c;
        }
      } else debugger;
    },
    uw: function (a, b, c) {
      this.gL(a, b, c);
      a = this.V.$;
      a.bufferData(34962, this.qc, 35048);
      a.drawElements(4, 6 * c, 5123, 0);
    },
    gL: function (a, b, c) {
      var d = this.V,
        e = 0,
        f = 0,
        g = null,
        h = null,
        l = this.SK,
        k = this.TK,
        m = this.sn,
        t = 0,
        n = b;
      for (b += c; n < b; ) {
        var w = a.m[n++];
        this.V.oi(w);
        c = this.V.Bf;
        var v = this.V.rg;
        null != v && ((g = v.ld), (h = v.offset));
        var F = w.effect;
        0 == e && ((f = F.za), (e = f.dd), (f = f.Vc));
        var I = F.Ua;
        var r = F.Oj * e + I.x;
        var L = F.Pj * f + I.y;
        var O = r + F.gk * I.width;
        F = L + F.hk * I.height;
        w = d.nk(w.g);
        var D = w.m11;
        var K = w.m21;
        var Y = w.m24;
        var V = w.m14;
        var T = w.m12 + V;
        var ca = w.m22 + Y;
        w = 32 * t;
        I = w >> 2;
        m[I] = V;
        m[I + 1] = Y;
        m[I + 8] = T;
        m[I + 9] = ca;
        m[I + 16] = D + T;
        m[I + 17] = K + ca;
        m[I + 24] = D + V;
        m[I + 25] = K + Y;
        I = (w >> 1) + 4;
        l[I] = r;
        l[I + 1] = L;
        l[I + 16] = r;
        l[I + 17] = F;
        l[I + 32] = O;
        l[I + 33] = F;
        l[I + 48] = O;
        l[I + 49] = L;
        I = (w >> 2) + 3;
        m[I] = c;
        m[I + 8] = c;
        m[I + 16] = c;
        m[I + 24] = c;
        null != v
          ? ((c = ((255 * g.a) << 24) | ((255 * g.r) << 16) | ((255 * g.Za) << 8) | (255 * g.b)),
            (v = ((255 * h.a) << 24) | ((255 * h.r) << 16) | ((255 * h.Za) << 8) | (255 * h.b)),
            (I = (w >> 2) + 4),
            (k[I] = c),
            (k[I + 1] = v),
            (k[I + 8] = c),
            (k[I + 9] = v),
            (k[I + 16] = c),
            (k[I + 17] = v),
            (k[I + 24] = c),
            (k[I + 25] = v))
          : ((I = (w >> 2) + 4),
            (k[I] = -1),
            (k[I + 1] = 0),
            (k[I + 8] = -1),
            (k[I + 9] = 0),
            (k[I + 16] = -1),
            (k[I + 17] = 0),
            (k[I + 24] = -1),
            (k[I + 25] = 0));
        t += 4;
      }
    },
    s: fe,
  });
  ee.i = !0;
  ee.F = Gb;
  ee.prototype = C(Gb.prototype, {
    sa: function () {
      var a = this.V.$;
      this.Ja = this.V.createProgram(
        "\n\t\t\tattribute vec4 a_Position;\n\t\t\tattribute vec2 a_TexCoord;\n\t\t\t\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\t\n\t\t\tuniform vec2 u_InvTextureSize;\n\t\t\tuniform mat4 u_Matrix;\n\t\t\t\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tgl_Position = u_Matrix * a_Position;\n\t\t\t\tv_TexCoord = a_TexCoord * u_InvTextureSize;\n\t\t\t}\n\t\t",
        "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D u_Image;\n\t\t\tvarying vec2 v_TexCoord;\n\t\t\tvoid main()\n\t\t\t{\n\t\t\t\tvec4 color = texture2D(u_Image, v_TexCoord);\n\t\t\t\tgl_FragColor = color + v_Color * color.w;\n\t\t\t}\n\t\t"
      );
      this.Fl = a.getUniformLocation(this.Ja, "u_Matrix");
      this.Eh = a.getUniformLocation(this.Ja, "u_InvTextureSize");
      this.Fe = a.getAttribLocation(this.Ja, "a_Position");
      this.Le = a.getAttribLocation(this.Ja, "a_TexCoord");
      this.Bh = a.getUniformLocation(this.Ja, "u_Image");
      this.Yg = a.createBuffer();
      this.qj = a.createBuffer();
    },
    setActive: function () {
      var a = this.V.$;
      a.useProgram(this.Ja);
      a.bindBuffer(34962, this.Yg);
      a.bindBuffer(34963, this.qj);
      a.enableVertexAttribArray(this.Fe);
      a.vertexAttribPointer(this.Fe, 2, 5123, !1, 16, 0);
      a.enableVertexAttribArray(this.Le);
      a.vertexAttribPointer(this.Le, 2, 5123, !1, 16, 4);
      a.enableVertexAttribArray(this.hh);
      a.vertexAttribPointer(this.hh, 4, 5121, !0, 16, 8);
    },
    yd: function (a) {
      var b = a.effect,
        c = b.za.dd,
        d = b.za.Vc,
        e = this.V.$,
        f = b.za;
      e.uniform1i(this.Bh, 0);
      e.bindTexture(3553, f.Mc);
      ba.jr(b.Ht ? ba.Rt(this.V.hn, a.g.En(), this.V.Xe) : this.V.nk(a.g), this.matrix, 0, !0);
      e.uniformMatrix4fv(this.Fl, !1, this.matrix);
      e.uniform2f(this.Eh, 1 / c, 1 / d);
      a = b.Xj;
      c = b.Yj;
      var g = b.Dp,
        h = b.Cp,
        l = b.ku;
      d = b.ju;
      var k;
      f = b.AB;
      debugger;
      h = (h - g) * (d - l);
      if (h > this.size) {
        this.size = h;
        this.qc = new ArrayBuffer(64 * h);
        this.hu = new Uint16Array(this.qc);
        this.TB = new Uint32Array(this.qc);
        this.jL = new Float32Array(this.qc);
        this.wb = new Uint16Array(6 * h);
        for (var m = 0, t = 0; m < h; )
          (g = 4 * m),
            (this.wb[t++] = g),
            (this.wb[t++] = g + 1),
            (this.wb[t++] = g + 2),
            (this.wb[t++] = g),
            (this.wb[t++] = g + 2),
            (this.wb[t++] = g + 3),
            ++m;
        e.bufferData(34963, this.wb, 35044);
      }
      m = b.Vt;
      t = b.Pc;
      for (var n = this.jL, w = this.hu, v = 0, F = 0; l <= d; ) {
        g = b.Dp;
        h = b.Cp;
        for (k = g; k <= h; ) {
          var I = k * m + a;
          var r = l * m + c;
          g = -1;
          f.inRange(k, l) && (g = f.m[l * f.ca + k]);
          if (!(0 >= g)) {
            var L = t.Dn(g).frame;
            g = v >> 2;
            var O = L.x,
              D = L.y,
              K = O + L.width;
            L = D + L.height;
            n[g] = I;
            n[g + 1] = r + m;
            n[g + 4] = I;
            n[g + 4 + 1] = r;
            n[g + 8] = I + m;
            n[g + 8 + 1] = r;
            n[g + 12] = I + m;
            n[g + 12 + 1] = r + m;
            g = (v + 8) >> 1;
            w[g] = O;
            w[g + 1] = L;
            w[g + 8] = O;
            w[g + 9] = D;
            w[g + 16] = K;
            w[g + 17] = D;
            w[g + 24] = K;
            w[g + 25] = L;
            v += 64;
            ++F;
          }
          ++k;
        }
        ++l;
      }
      e.bufferData(34962, this.qc, 35048);
      e.drawElements(4, 6 * F, 5123, 0);
    },
    mh: function () {},
    s: ee,
  });
  Mc.i = !0;
  Mc.F = sa;
  Mc.prototype = C(sa.prototype, {
    B: function () {
      sa.prototype.B.call(this);
    },
    pi: function (a) {
      sa.prototype.pi.call(this, a);
      this.$ = a.getContext();
    },
    createTexture: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == a && (a = -32768);
      return sa.prototype.createTexture.call(this, a, b, c, d, e);
    },
    clear: function () {
      var a = this.bc;
      if (null != a && a.uj() && null != this.$) {
        var b = a.jj(),
          c = b.x,
          d = a.Sk - b.y - b.height,
          e = b.width;
        b = b.height;
        this.$.viewport(c, d, e, b);
        var f = a.qy();
        0 == (0 == f.j && 0 == f.l && 1 == f.u && 1 == f.A)
          ? (this.$.enable(3089), this.$.scissor(c, d, e, b))
          : this.$.disable(3089);
        a = a.color;
        this.$.clearColor(a.r, a.Za, a.b, a.a);
        this.$.clear(16640);
      }
    },
    Tq: function (a) {
      if (Wb.eF) {
        var b = a.iterator(),
          c = b.m[b.Cd++];
        this.Te.uc(a.o);
        this.Te.o = 0;
        var d = this.Te;
        d.m[d.o++] = c;
        var e = c.Ot;
        for (a = c.effect; b.Cd < b.Qf; )
          (c = b.m[b.Cd++]),
            a.Ue == c.effect.Ue && (e & 12) == (c.Ot & 12)
              ? ((d = this.Te), (d.m[d.o++] = c))
              : (this.mh(), (this.Te.o = 0), (a = this.Te), (a.m[a.o++] = c), (e = c.Ot), (a = c.effect));
        0 < this.Te.o && this.mh();
      } else sa.prototype.Tq.call(this, a);
    },
    Om: function () {},
    pn: function () {},
    Vn: function (a, b) {
      return new de(this, a, b);
    },
    mh: function () {
      var a = this.Te.m[0].effect;
      if (a.type == Sa.TYPE) this.jl(a, !0).mh(this.Te);
      else {
        var b = this.Te;
        a = b.m;
        var c = 0;
        for (b = b.o; c < b; ) this.tx(a[c++]);
      }
    },
    qx: function (a) {
      this.jl(a, !1).yd(this.sg);
    },
    nx: function (a) {
      this.jl(a, !1).yd(this.sg);
    },
    sx: function (a) {
      this.jl(a, !1).yd(this.sg);
    },
    mx: function (a) {
      this.jl(a, !1).yd(this.sg);
    },
    jl: function (a, b) {
      var c = 0;
      switch (a.type) {
        case Sa.TYPE:
        case tb.TYPE:
          c = b ? 2 : 1;
          break;
        case Kc.TYPE:
          c = 4;
          break;
        case Lc.TYPE:
          c = 3;
      }
      a = this.tA[c];
      if (null == a) {
        switch (c) {
          case 1:
            a = new ge(this);
            break;
          case 2:
            a = new fe(this);
            break;
          case 3:
            a = new he(this);
            break;
          case 4:
            a = new ee(this);
            break;
          default:
            a = null;
        }
        this.tA[c] = a;
      }
      this.bx != a && ((this.bx = a), a.setActive());
      return a;
    },
    ep: function (a) {
      var b = 0,
        c = 0;
      switch (a.G) {
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
          (b = this.ww[a.src.G]), (c = this.ww[a.Sc.G]);
      }
      if (this.lB != b || this.hx != c) this.$.enable(3042), this.$.blendFunc(b, c), (this.lB = b), (this.hx = c);
    },
    createProgram: function (a, b) {
      a = this.lz(35633, a);
      b = this.lz(35632, b);
      var c = this.$.createProgram();
      this.$.attachShader(c, a);
      this.$.attachShader(c, b);
      this.$.linkProgram(c);
      this.$.getProgramParameter(c, 35714) ||
        this.$.isContextLost() ||
        (this.$.deleteProgram(c), this.$.deleteShader(b), this.$.deleteShader(a), (c = null));
      this.$.detachShader(c, a);
      this.$.deleteShader(a);
      this.$.detachShader(c, b);
      this.$.deleteShader(b);
      return c;
    },
    lz: function (a, b) {
      a = this.$.createShader(a);
      this.$.shaderSource(a, b);
      this.$.compileShader(a);
      return this.$.getShaderParameter(a, 35713) || this.$.isContextLost() ? a : (this.$.deleteShader(a), null);
    },
    s: Mc,
  });
  de.i = !0;
  de.F = gb;
  de.prototype = C(gb.prototype, {
    getContext: function () {
      return this.$;
    },
    am: function (a, b) {
      this.$ = this.V.$;
      this.width = this.dd = a;
      this.height = this.Vc = b;
      this.ik() && ((this.dd = P.Wh(a)), (this.Vc = P.Wh(b)));
      this.Mc = this.$.createTexture();
      this.$.bindTexture(3553, this.Mc);
      this.$.texImage2D(3553, 0, 6408, a, b, 0, 6408, 5121, null);
      this.$.texParameteri(3553, 10241, 9729);
      this.$.texParameteri(3553, 10242, 33071);
      this.$.texParameteri(3553, 10243, 33071);
      gb.prototype.am.call(this, a, b);
    },
    eq: function (a, b) {
      a = gb.prototype.eq.call(this, a, b);
      0 < (this.flags & 1024) && (a.Mc = this.Mc);
      return a;
    },
    Ks: function () {
      this.$ = this.V.$;
      this.Mc = this.$.createTexture();
      this.$.bindTexture(3553, this.Mc);
      try {
        var a = this.image instanceof ImageBitmap;
      } catch (d) {
        a = !1;
      }
      a || this.$.pixelStorei(37441, !0);
      a = 0 < (this.flags & 4) ? 10497 : 33071;
      var b = 0 < (this.flags & 8) ? 9729 : 9728,
        c = 0 < (this.flags & 16) ? 9729 : 9728;
      this.$.texParameteri(3553, 10242, a);
      this.$.texParameteri(3553, 10243, a);
      this.$.texParameteri(3553, 10241, b);
      this.$.texParameteri(3553, 10240, c);
      a = 0 < (this.flags & 1) ? 6407 : 6408;
      this.$.texImage2D(3553, 0, a, a, 5121, this.image);
      0 < (this.flags & 480) &&
        ((a = 9984),
        0 < (this.flags & 64) && (a = 9985),
        0 < (this.flags & 128) && (a = 9986),
        0 < (this.flags & 256) && (a = 9987),
        this.$.texParameteri(3553, 10241, a),
        this.$.generateMipmap(3553));
      a = 0;
      for (b = this.children; a < b.length; ) b[a++].Mc = this.Mc;
      gb.prototype.Ks.call(this);
    },
    wd: function () {
      null == this.parent && this.V.$.deleteTexture(this.Mc);
      this.Mc = null;
      gb.prototype.wd.call(this);
    },
    ik: function () {
      return gb.prototype.ik.call(this) ? !0 : 0 < (this.flags & 484) ? !this.ul() : !1;
    },
    bind: function () {
      gb.prototype.bind.call(this);
      null == this.Ax && (this.Ax = this.$.createFramebuffer());
      this.$.bindTexture(3553, this.Mc);
      this.$.bindFramebuffer(36160, this.Ax);
      this.$.framebufferTexture2D(36160, 36064, 3553, this.Mc, 0);
    },
    Zt: function () {
      gb.prototype.Zt.call(this);
      this.$.bindFramebuffer(36160, null);
    },
    s: de,
  });
  ce.i = !0;
  ce.prototype = {
    yJ: function (a) {
      this.Yf = a;
      return this;
    },
    kJ: function (a) {
      this.Um = a;
      return this;
    },
    gJ: function (a) {
      this.lw = a;
      return this;
    },
    hJ: function (a) {
      this.pw = a;
    },
    s: ce,
  };
  Of.i = !0;
  Of.prototype = { s: Of };
  Nf.i = !0;
  Nf.prototype = { s: Nf };
  Ic.i = !0;
  Ic.prototype = {
    B: function () {
      for (var a = this.controllers, b; null != a; ) (b = a.next), a.B(), (a = b);
    },
    ya: function (a) {
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
    sF: function (a) {
      for (var b = this.controllers; null != b; ) {
        if (b.type == a) return b;
        b = b.next;
      }
      return null;
    },
    $t: function (a) {
      if (null == this.controllers || !this.IE) return !1;
      for (var b = !1, c = this.controllers, d; null != c; ) (d = c.next), c.update(a) && (b = !0), (c = d);
      return b;
    },
    s: Ic,
  };
  ma.i = !0;
  ma.Jb = function () {
    return ++ma.X;
  };
  ma.prototype = {
    B: function () {
      null != this.object && (this.object.detach(this), (this.object = null));
      this.repeat = null;
      this.Ye = !0;
      ma.Ii--;
    },
    mo: function () {
      this.wd = !0;
      0 != this.fe && ma.Ek--;
      this.fe = !1;
      this.lc = 0;
      this.Ud = ma.Ru;
    },
    update: function (a) {
      return this.fe
        ? ((this.lc += a * this.pm), null == this.object ? !1 : this.U(this.lc))
        : this.wd
        ? ((this.lc += a), this.lc > ma.Ru && this.B(), !0)
        : !1;
    },
    ir: function () {
      var a = this.lc + this.$a;
      if (0 == this.repeat) return P.Ti(a, this.Xc, this.Ud);
      var b = this.Ud - this.Xc;
      if (0 < b) {
        var c = (a - this.Xc) / b;
        a = Math.floor(c);
        c -= a;
        return 1 == this.repeat ? this.Xc + c * b : 0 == (a & 1) ? this.Xc + c * b : this.Ud - c * b;
      }
      return this.Xc;
    },
    Yi: function (a) {
      var b = this.fe;
      a.fe != b && (b ? ma.Ek++ : ma.Ek--);
      a.fe = b;
      a.repeat = this.repeat;
      a.Xc = this.Xc;
      a.Ud = this.Ud;
      a.$a = this.$a;
      a.pm = this.pm;
      a.lc = this.lc;
      a.wd = this.wd;
    },
    s: ma,
  };
  Hc.i = !0;
  Hc.F = ma;
  Hc.prototype = C(ma.prototype, {
    B: function () {
      this.Rj = this.Qj = this.Md = null;
      ma.prototype.B.call(this);
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = -1);
      null == b && (b = 0);
      this.Md = a;
      this.Gj = b;
      this.Th = 0 > c ? a.frames.length - 1 : c;
      this.Xc = this.Md.Kd[b];
      this.Ud = this.Md.Kd[this.Th + 1];
      this.lc = this.Xc;
      this.lc += d;
      1 != this.fe && ma.Ek++;
      this.fe = !0;
      this.wd = !1;
      this.index = -1;
      this.lastIndex = b;
      this.U(this.lc);
    },
    U: function () {
      var a = this.ir(),
        b = this.Md.Bi;
      if (1 == b) var c = (this.lastIndex = 0);
      else if (a >= this.Md.rm) c = this.lastIndex = b - 1;
      else {
        if (0 < this.Md.Aq) c = (a / this.Md.Aq) | 0;
        else {
          c = 0;
          var d = this.Md.Kd;
          if (a >= d[this.lastIndex] && a <= d[this.lastIndex + 1]) c = this.lastIndex;
          else if (16 > b)
            for (var e = 0; e <= b; ) {
              if (d[e] >= a) {
                c = e - 1;
                break;
              }
              ++e;
            }
          else (c = ha.bE(d, a, b - 1)), 0 > c && ((c = ~c), --c);
        }
        this.lastIndex = c;
      }
      c < this.Gj ? (c = this.Gj) : c > this.Th && (c = this.Th);
      c != this.index &&
        ((this.index = c),
        this.Rj(this.Md.values[c], c, a),
        c >= this.Th &&
          (this.Qj(),
          0 == this.repeat &&
            (0 < this.Xo--
              ? ((this.lc = this.Xc), (this.index = -1), (this.lastIndex = this.Gj), this.U(this.lc))
              : (this.mo(), (this.Md = null)))));
      return !0;
    },
    Yi: function (a) {
      ma.prototype.Yi.call(this, a);
      a.index = this.index;
      a.lastIndex = this.lastIndex;
      a.Md = this.Md;
      a.Gj = this.Gj;
      a.Th = this.Th;
    },
    s: Hc,
  });
  Mf.i = !0;
  Mf.prototype = { s: Mf };
  qd.i = !0;
  qd.F = ma;
  qd.prototype = C(ma.prototype, {
    B: function () {
      this.Is = null;
      ma.prototype.B.call(this);
    },
    U: function (a) {
      var b = this.ir(),
        c = this.data.Kd,
        d;
      if (b <= c[0]) var e = (d = this.lastIndex = b = 0);
      else if (b >= c[this.data.Bi - 1]) (b = 0), (e = d = this.lastIndex = this.data.Bi - 1);
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
      this.sJ(e, d, b);
      this.PL(this.ez);
      return a > this.Ud && 0 == this.repeat ? (null != this.Is && (this.Is(), (this.Is = null)), this.mo(), !1) : !0;
    },
    sJ: function (a, b, c) {
      var d = this.data.parameters,
        e = this.ez;
      if (a != b) {
        c = this.data.easing[a](c);
        var f = this.data.qL[a];
        if (0 < (f & 1)) {
          var g = 0;
          e.NA = P.Td(d[6 * a + g], d[6 * b + g], c);
        }
        0 < (f & 2) && ((g = 1), (e.OA = P.Td(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 4) && ((g = 2), (e.rotation = P.Td(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 8) && ((g = 3), (e.JB = P.Td(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 16) && ((g = 4), (e.KB = P.Td(d[6 * a + g], d[6 * b + g], c)));
        0 < (f & 32) && ((g = 5), (e.alpha = P.Td(d[6 * a + g], d[6 * b + g], c)));
      } else
        (e.NA = d[6 * b]),
          (e.OA = d[6 * b + 1]),
          (e.rotation = d[6 * b + 2]),
          (e.JB = d[6 * b + 3]),
          (e.KB = d[6 * b + 4]),
          (e.alpha = d[6 * b + 5]);
    },
    s: qd,
  });
  ub.i = !0;
  ub.F = ma;
  ub.prototype = C(ma.prototype, {
    B: function () {
      this.Ee = this.Yd = this.easing = null;
      ma.prototype.B.call(this);
    },
    Oe: function (a, b, c, d, e) {
      this.key = a;
      this.Mt = b;
      this.nn = c;
      this.easing = e;
      this.Xc = this.lc = 0;
      this.Ud = d;
      1 != this.fe && ma.Ek++;
      this.fe = !0;
      this.wd = !1;
    },
    stop: function () {
      this.Yd = this.Ee = null;
      this.mo();
    },
    U: function (a) {
      if (a >= this.Ud && 0 == this.repeat) return this.mo(), this.Yd(this.key, this.nn), this.Ee(this.key), !1;
      a = P.Td(this.Mt, this.nn, this.easing((this.ir() - this.Xc) / (this.Ud - this.Xc)));
      this.Yd(this.key, a);
      return !0;
    },
    Yi: function (a) {
      ma.prototype.Yi.call(this, a);
      a.key = this.key;
      a.Mt = this.Mt;
      a.nn = this.nn;
      a.easing = this.easing;
    },
    s: ub,
  });
  Lc.i = !0;
  Lc.F = pa;
  Lc.prototype = C(pa.prototype, {
    xL: function () {
      return this.grid.ca;
    },
    DL: function () {
      return this.grid.Ha;
    },
    yd: function (a) {
      a.mx(this);
    },
    s: Lc,
  });
  Lf.i = !0;
  Lf.prototype = { s: Lf };
  tb.i = !0;
  tb.F = pa;
  tb.prototype = C(pa.prototype, {
    yd: function (a) {
      a.nx(this);
    },
    s: tb,
  });
  Sa.i = !0;
  Sa.F = pa;
  Sa.prototype = C(pa.prototype, {
    cc: function (a) {
      this.za = a;
      this.Ua.x = 0;
      this.Ua.y = 0;
      this.Ua.width = a.width;
      this.Ua.height = a.height;
      this.frame = -1;
      this.flags = 0;
      this.Ue = (a.group << 4) | this.type;
      a.HI(J(this, this.refresh));
      return this;
    },
    rt: function (a) {
      if (this.frame != a) {
        this.frame = a;
        var b = this.Ua;
        a = this.za.Pc.Dn(a).frame;
        b.x = a.x;
        b.y = a.y;
        b.width = a.width;
        b.height = a.height;
      }
    },
    B: function () {
      pa.prototype.B.call(this);
      null != this.za && 0 == (this.za.flags & 4096) && this.za.XK(J(this, this.refresh));
      this.za = this.Ua = null;
    },
    yd: function (a) {
      if (null != this.za) {
        var b = this.za.flags;
        0 == (b & 1024) || 0 < (b & 4096) || a.qx(this);
      }
    },
    refresh: function () {
      if (null != this.za)
        if (0 > this.frame) this.cc(this.za);
        else {
          var a = this.frame;
          this.frame = -1;
          this.rt(a);
        }
    },
    s: Sa,
  });
  Kc.i = !0;
  Kc.F = pa;
  Kc.prototype = C(pa.prototype, {
    yd: function (a) {
      var b = a.yf,
        c = a.bc.jj();
      var d = c.width;
      var e = c.height;
      d /= b.Lk;
      e /= b.Lk;
      c = new E();
      c.x = d / 2;
      c.y = e / 2;
      if (0 != b.zb) {
        e = 0.0174532925199432 * b.zb;
        d = Math.cos(e);
        var f = Math.sin(e),
          g = d * c.x,
          h = f * c.y;
        e = P.max(-3.4e38, -g - h);
        e = P.max(e, g - h);
        e = P.max(e, -g + h);
        e = P.max(e, g + h);
        g = -f * c.x;
        h = d * c.y;
        d = P.max(-3.4e38, -g - h);
        d = P.max(d, g - h);
        d = P.max(d, -g + h);
        d = P.max(d, g + h);
        c.x = e;
        c.y = d;
      }
      this.Yj = this.Xj = 0;
      1 != this.Oo && 0 < this.Oo && ((this.Xj = b.ga * this.Oo), (this.Yj = b.qa * this.Oo));
      d = 1 / this.Vt;
      this.Dp = (((b.ga - c.x - this.Xj) * d) | 0) - 1;
      this.ku = (((b.qa - c.y - this.Yj) * d) | 0) - 1;
      this.Cp = (((b.ga + c.x - this.Xj) * d) | 0) + 1;
      this.ju = (((b.qa + c.y - this.Yj) * d) | 0) + 1;
      a.sx(this);
    },
    s: Kc,
  });
  var fc = (Mb.e4 = {
    hg: !0,
    Oc: null,
    pC: { I: "e40", G: 0, H: "e4", toString: H },
    Wu: { I: "e41", G: 1, H: "e4", toString: H },
    oC: { I: "e42", G: 2, H: "e4", toString: H },
    Vu: { I: "e43", G: 3, H: "e4", toString: H },
    sC: { I: "e44", G: 4, H: "e4", toString: H },
    uC:
      ((N = function (a, b) {
        return { G: 5, src: a, dst: b, H: "e4", toString: H };
      }),
      (N.I = "EUser"),
      (N.hb = ["src", "dst"]),
      N),
  });
  fc.Oc = [fc.pC, fc.Wu, fc.oC, fc.Vu, fc.sC, fc.uC];
  var gc = (Mb.e5 = {
    hg: !0,
    Oc: null,
    Pp: { I: "e50", G: 0, H: "e5", toString: H },
    Lp: { I: "e51", G: 1, H: "e5", toString: H },
    nC: { I: "e52", G: 2, H: "e5", toString: H },
    qC: { I: "e53", G: 3, H: "e5", toString: H },
    Op: { I: "e54", G: 4, H: "e5", toString: H },
    Np: { I: "e55", G: 5, H: "e5", toString: H },
    Kp: { I: "e56", G: 6, H: "e5", toString: H },
    Mp: { I: "e57", G: 7, H: "e5", toString: H },
  });
  gc.Oc = [gc.Pp, gc.Lp, gc.nC, gc.qC, gc.Op, gc.Np, gc.Kp, gc.Mp];
  var hc = (Mb.e6 = {
    hg: !0,
    Oc: null,
    Pp: { I: "e60", G: 0, H: "e6", toString: H },
    Lp: { I: "e61", G: 1, H: "e6", toString: H },
    tC: { I: "e62", G: 2, H: "e6", toString: H },
    rC: { I: "e63", G: 3, H: "e6", toString: H },
    Op: { I: "e64", G: 4, H: "e6", toString: H },
    Np: { I: "e65", G: 5, H: "e6", toString: H },
    Kp: { I: "e66", G: 6, H: "e6", toString: H },
    Mp: { I: "e67", G: 7, H: "e6", toString: H },
  });
  hc.Oc = [hc.Pp, hc.Lp, hc.tC, hc.rC, hc.Op, hc.Np, hc.Kp, hc.Mp];
  Wa.i = !0;
  Wa.prototype = {
    collapse: function () {
      throw 29;
    },
    s: Wa,
  };
  Eb.i = !0;
  Eb.F = Wa;
  Eb.prototype = C(Wa.prototype, {
    collapse: function () {
      return this;
    },
    s: Eb,
  });
  pd.i = !0;
  pd.F = Wa;
  pd.prototype = C(Wa.prototype, {
    collapse: function (a) {
      for (var b = 1, c, d = 0, e = a.Xa; d < e; ) (c = a.m[d++]), (b *= c.alpha);
      null == this.collapsed && (this.collapsed = new pd(this.alpha));
      this.collapsed.alpha = b;
      return this.collapsed;
    },
    s: pd,
  });
  Db.i = !0;
  Db.prototype = {
    B: function () {
      this.K = null;
    },
    tr: function () {},
    from: function () {},
    Yt: function (a, b) {
      var c = this.K,
        d = b.K;
      if (0 < (a.D & 1)) (d.x = c.x), (d.y = c.y);
      else {
        if (0 < (a.D & 2)) {
          var e = c.x * a.scale.x;
          c = c.y * a.scale.y;
          if (0 >= (a.D & 16)) {
            var f = e,
              g = a.matrix;
            e = g.m11 * e + g.m12 * c;
            c = g.m21 * f + g.m22 * c;
          }
        } else (e = c.x), (c = c.y), (f = e), (g = a.matrix), (e = g.m11 * e + g.m12 * c), (c = g.m21 * f + g.m22 * c);
        d.x = e + a.translate.x;
        d.y = c + a.translate.y;
      }
      b.la =
        (0 < (a.D & 2)
          ? Math.max(Math.abs(a.scale.x), Math.abs(a.scale.y))
          : Math.max(
              Math.abs(a.matrix.m11) + Math.abs(a.matrix.m12),
              Math.abs(a.matrix.m21) + Math.abs(a.matrix.m22)
            )) * this.la;
    },
    s: Db,
  };
  be.i = !0;
  be.F = Db;
  be.prototype = C(Db.prototype, {
    B: function () {
      this.box = null;
      Db.prototype.B.call(this);
    },
    contains: function (a) {
      var b = this.box,
        c = a.x;
      a = a.y;
      return c > b.j && c < b.u && a > b.l ? a < b.A : !1;
    },
    tr: function (a) {
      switch (a.type) {
        case 1:
          var b = a.K;
          a = a.la;
          var c = this.box,
            d = b.x - a,
            e = b.y - a;
          d < c.j && (c.j = d);
          d > c.u && (c.u = d);
          e < c.l && (c.l = e);
          e > c.A && (c.A = e);
          c = this.box;
          d = b.x + a;
          e = b.y + a;
          d < c.j && (c.j = d);
          d > c.u && (c.u = d);
          e < c.l && (c.l = e);
          e > c.A && (c.A = e);
          break;
        case 2:
          (c = this.box),
            (b = a.box),
            b.j < c.j && (c.j = b.j),
            b.u > c.u && (c.u = b.u),
            b.l < c.l && (c.l = b.l),
            b.A > c.A && (c.A = b.A);
      }
      c = this.box;
      b = 0.5 * (c.u - c.j);
      c = this.box;
      c = 0.5 * (c.A - c.l);
      this.K.x = this.box.j + b;
      this.K.y = this.box.l + c;
      this.la = Math.sqrt(b * b + c * c);
    },
    from: function (a) {
      var b = a.K,
        c = a.la;
      switch (a.type) {
        case 1:
          this.box.j = b.x - c;
          this.box.l = b.y - c;
          this.box.u = b.x + c;
          this.box.A = b.y + c;
          break;
        case 2:
          var d = this.box;
          a = a.box;
          d.j = a.j;
          d.l = a.l;
          d.u = a.u;
          d.A = a.A;
      }
      d = this.K;
      d.x = b.x;
      d.y = b.y;
      d.z = b.z;
      this.la = c;
    },
    WB: function (a) {
      var b = a.sc.x,
        c = a.sc.y;
      a = a.Df;
      var d = this.box.j,
        e = this.box.l,
        f = this.box.u,
        g = this.box.A;
      if (1 == b) return f < a ? -1 : d > a ? 1 : 0;
      if (-1 == b) return d > -a ? -1 : f < -a ? 1 : 0;
      if (1 == c) return g < a ? -1 : e > a ? 1 : 0;
      if (-1 == b) return e > -a ? -1 : g < -a ? 1 : 0;
      var h = 0 | sd.xi(d, e, b, c, a);
      h |= sd.xi(f, e, b, c, a) << 1;
      h |= sd.xi(d, g, b, c, a) << 2;
      h |= sd.xi(f, g, b, c, a) << 3;
      return h == Wf.Xu[4] ? -1 : 0 == h ? 1 : 0;
    },
    Yt: function (a, b) {
      Db.prototype.Yt.call(this, a, b);
      b = b.box;
      var c = new E(),
        d = this.box;
      c.x = d.j + 0.5 * (d.u - d.j);
      d = this.box;
      c.y = d.l + 0.5 * (d.A - d.l);
      a.ib(c, c);
      b.j = c.x;
      b.l = c.y;
      b.u = c.x;
      b.A = c.y;
      if (0 < (a.D & 2))
        (c = a.matrix),
          (d = a.scale),
          (a = 0.5 * d.x),
          (d = 0.5 * d.y),
          0 < c.m11 ? ((b.j -= c.m11 * a), (b.u += c.m11 * a)) : ((b.j += c.m11 * a), (b.u -= c.m11 * a)),
          0 < c.m12 ? ((b.j -= c.m12 * d), (b.u += c.m12 * d)) : ((b.j += c.m12 * d), (b.u -= c.m12 * d)),
          0 < c.m21 ? ((b.l -= c.m21 * a), (b.A += c.m21 * a)) : ((b.l += c.m21 * a), (b.A -= c.m21 * a)),
          0 < c.m22 ? ((b.l -= c.m22 * d), (b.A += c.m22 * d)) : ((b.l += c.m22 * d), (b.A -= c.m22 * d));
      else {
        d = a.matrix;
        c = d.m11;
        var e = d.m12,
          f = Math.sqrt(c * c + e * e);
        a = 0.5 * f;
        d = ((c * d.m22 - e * d.m21) / f) * 0.5;
        e = Math.atan2(e, c);
        c = Math.cos(e);
        e = Math.sin(e);
        0 < c ? ((b.j -= c * a), (b.u += c * a)) : ((b.j += c * a), (b.u -= c * a));
        0 < e ? ((b.j -= e * d), (b.u += e * d)) : ((b.j += e * d), (b.u -= e * d));
        0 < -e ? ((b.l -= -e * a), (b.A += -e * a)) : ((b.l += -e * a), (b.A -= -e * a));
        0 < c ? ((b.l -= c * d), (b.A += c * d)) : ((b.l += c * d), (b.A -= c * d));
      }
    },
    s: be,
  });
  fb.i = !0;
  fb.prototype = {
    ip: function (a, b) {
      this.D |= 3;
      this.rs = a;
      this.Wq = b;
      this.ni();
    },
    L: function (a) {
      if (a == this.ga) return a;
      this.D |= 4;
      this.ni();
      return (this.ga = a);
    },
    O: function (a) {
      if (a == this.qa) return a;
      this.D |= 4;
      this.ni();
      return (this.qa = a);
    },
    KJ: function (a) {
      0.001 > a && (a = 0.001);
      this.D |= 4;
      this.ni();
      return (this.Lk = a);
    },
    pc: function (a) {
      if (a == this.zb) return a;
      this.D |= 4;
      this.ni();
      return (this.zb = a);
    },
    CJ: function (a) {
      this.V = a;
      this.ni();
    },
    reset: function () {
      if (null == this.V || null == this.V.bc) {
        var a = this.size;
        a.x = fb.Pu;
        a.y = fb.Ou;
      } else {
        var b = this.V.bc,
          c = b.jj();
        a = this.size;
        a.x = c.width * b.Yf;
        a.y = c.height * b.Yf;
      }
      this.L(this.O(this.pc(0)));
      this.KJ(1);
      this.D |= 6;
      this.ni();
    },
    ZF: function () {
      var a = this.sI;
      if (0 == (this.D & 2)) return a;
      this.D &= -3;
      if (0 < (this.D & 1)) {
        this.flipY
          ? ba.ip(a, 0, this.size.x, this.size.y, 0, this.rs, this.Wq)
          : ba.ip(a, 0, this.size.x, 0, this.size.y, this.rs, this.Wq);
        var b = this.Lr;
        ba.Id(b);
        b.m11 = 1 / a.m11;
        b.m22 = 1 / a.m22;
        b.m33 = 1 / a.m33;
        b.m14 = -a.m14 * b.m11;
        b.m24 = -a.m24 * b.m22;
        b.m34 = -a.m34 * b.m33;
      } else ba.wJ(a, 1.221730476396024, this.size.x / this.size.y, this.rs, this.Wq), ba.inverse(a, this.Lr);
      this.QB();
      return a;
    },
    qr: function () {
      var a = this.kL;
      if (0 == (this.D & 4)) return a;
      this.D &= -5;
      if (0 < (this.D & 1)) {
        ba.Id(a);
        this.D |= 8;
        if (!this.Ap) {
          this.D &= -9;
          ba.translate(a, -this.ga, -this.qa, 0);
          ba.scale(a, this.Lk, this.Lk, 1);
          ba.XI(a, 0.0174532925199432 * this.zb);
          ba.translate(a, this.ga, this.qa, 0);
          var b = this.size;
          ba.translate(a, b.x / 2 - this.ga, b.y / 2 - this.qa, 0);
        }
        ba.inverse(a, this.Mr);
        this.QB();
      }
      return a;
    },
    LF: function () {
      0 < (this.D & 4) && this.qr();
      this.qr();
      return this.Mr;
    },
    ni: function () {
      null != this.V && (this.V.qq = !0);
    },
    QB: function () {
      ba.Kd(this.Mr, this.Lr, this.VG);
    },
    s: fb,
  };
  ae.i = !0;
  ae.F = Db;
  ae.prototype = C(Db.prototype, {
    contains: function (a) {
      var b = a.x - this.K.x;
      a = a.y - this.K.y;
      return b * b + a * a <= this.la * this.la;
    },
    tr: function (a) {
      var b = a.K.x - this.K.x,
        c = a.K.y - this.K.y,
        d = a.la - this.la,
        e = b * b + c * c;
      d * d >= e
        ? 0 <= d && this.from(a)
        : ((d = Math.sqrt(e)),
          (e = (d + a.la - this.la) / (2 * d)),
          (this.K.x += e * b),
          (this.K.y += e * c),
          (this.la = (d + this.la + a.la) / 2));
    },
    from: function (a) {
      this.K.x = a.K.x;
      this.K.y = a.K.y;
      this.la = a.la;
    },
    WB: function (a) {
      a = Rg.qF(this.K.x, this.K.y, a.sc.x, a.sc.y, a.Df);
      return a <= -this.la ? -1 : a >= this.la ? 1 : 0;
    },
    s: ae,
  });
  $d.i = !0;
  $d.F = Wa;
  $d.prototype = C(Wa.prototype, {
    La: function (a) {
      var b = new W();
      b.j = a.j;
      b.l = a.l;
      b.u = a.u;
      b.A = a.A;
      this.ja = b;
      b = new E();
      b.x = a.j;
      b.y = a.l;
      var c = new E();
      c.x = a.j;
      c.y = a.A;
      var d = new E();
      d.x = a.u;
      d.y = a.A;
      var e = new E();
      e.x = a.u;
      e.y = a.l;
      this.iu = [b, c, d, e];
    },
    collapse: function () {
      return this;
    },
    s: $d,
  });
  Kf.i = !0;
  Kf.prototype = { s: Kf };
  Zd.i = !0;
  Zd.F = Wa;
  Zd.prototype = C(Wa.prototype, {
    collapse: function (a) {
      null == this.collapsed && (this.collapsed = new Zd());
      var b = this.collapsed.yq,
        c = b.ld;
      c.r = 1;
      c.Za = 1;
      c.b = 1;
      c.a = 1;
      c = b.offset;
      c.r = 0;
      c.Za = 0;
      c.b = 0;
      c.a = 0;
      for (c = a.Xa; -1 < --c; ) {
        var d = a.m[c].yq,
          e = d.ld;
        d = d.offset;
        b.ld.r *= e.r;
        b.ld.Za *= e.Za;
        b.ld.b *= e.b;
        b.ld.a *= e.a;
        b.offset.r = e.r * b.offset.r + d.r;
        b.offset.Za = e.Za * b.offset.Za + d.Za;
        b.offset.b = e.b * b.offset.b + d.b;
        b.offset.a = e.a * b.offset.a + d.a;
      }
      return this.collapsed;
    },
    s: Zd,
  });
  Jf.i = !0;
  Jf.prototype = {
    B: function () {
      this.wm.R();
      this.Kc.R();
      this.stack.R();
      this.V = this.stack = this.Kc = this.wm = null;
    },
    GE: function (a, b) {
      var c = this.wm;
      c.o = 0;
      c.uc(ya.count);
      this.Ol = Wf.Xu[this.nA];
      this.V.qq && this.aL();
      this.Vo = 0;
      if (b)
        for (this.Kc.uc(ya.count), this.stack.clear(), this.stack.push(a); 0 < this.stack.Xa; ) {
          if (((a = this.stack), (a = a.m[--a.Xa]), (a.Vo = this.Vo++), 1 != a.kG()))
            if (0 < (a.flags & 512)) null != a.effect && (c.m[c.o++] = a);
            else if (0 < (a.flags & 256)) {
              this.Kc.o = 0;
              for (b = a.da; null != b; ) {
                var d = this.Kc;
                d.m[d.o++] = b;
                b = b.W;
              }
              for (a = a.Tf; -1 < --a; ) (b = this.Kc), this.stack.push(b.m[--b.o]);
            }
        }
      else a.Rz(this, b);
      return c;
    },
    isVisible: function (a) {
      if (!isFinite(a.la)) return !0;
      for (var b = 0, c = this.nA; b < c; ) {
        var d = b++,
          e = 1 << d;
        if (0 != (this.Ol & e)) {
          d = a.WB(this.Zj[d]);
          if (0 > d) return !1;
          0 < d && (this.Ol &= ~e);
        }
      }
      return !0;
    },
    aL: function () {
      var a = this.V.yf,
        b = a.size,
        c = b.x,
        d = b.y;
      b = this.Sl[0];
      b.x = 0;
      b.y = 0;
      var e = this.Sl[1];
      e.x = c;
      e.y = 0;
      var f = this.Sl[2];
      f.x = 0;
      f.y = d;
      var g = this.Sl[3];
      g.x = c;
      g.y = d;
      null != a && ((a = a.LF()), ba.Ai(a, b, b), ba.Ai(a, e, e), ba.Ai(a, f, f), ba.Ai(a, g, g));
      this.Zj[0].gp(b, e);
      this.Zj[1].gp(g, f);
      this.Zj[2].gp(f, b);
      this.Zj[3].gp(e, g);
      this.ja.j = b.x;
      this.ja.l = b.y;
      this.ja.u = g.x;
      this.ja.A = g.y;
    },
    s: Jf,
  };
  Ub.i = !0;
  Ub.JE = function (a) {
    var b = new Ub(a.state),
      c = b;
    for (a = a.next; null != a; ) (c = c.next = new Ub(a.state)), (a = a.next);
    return b;
  };
  Ub.prototype = { s: Ub };
  eb.i = !0;
  eb.BE = function () {
    for (var a = 0; 4 > a; ) eb.Hm.m[a++].clear();
  };
  eb.tI = function (a) {
    null == eb.Hm && eb.NG();
    var b = eb.Hm,
      c = eb.ID,
      d = a;
    for (c.clear(); null != d.parent; ) c.push(d.parent), (d = d.parent);
    d = 0;
    for (var e = c.Xa; d < e; ) ++d, c.m[--c.Xa].Ys(b);
    a.Ys(b);
    c.clear(!0);
    return b;
  };
  eb.NG = function () {
    eb.Hm = new Z(4);
    for (var a = 0; 4 > a; ) ++a, eb.Hm.Ma(new Pb());
    eb.ID = new Pb(16);
  };
  ya.i = !0;
  ya.Aa = [Bc];
  ya.F = Ic;
  ya.prototype = C(Ic.prototype, {
    B: function () {
      0 < (this.flags & 1024) ||
        (Ic.prototype.B.call(this),
        null != this.parent && this.parent.removeChild(this),
        (this.$g = this.g = this.local = null),
        this.II(),
        null != this.effect && this.effect.B(),
        (this.client = this.effect = null),
        (this.flags = 1024),
        ya.count--);
    },
    kG: function () {
      return 0 < (this.flags & 1) ? 1 : 0 < (this.flags & 2) ? 2 : 0;
    },
    At: function (a) {
      switch (a) {
        case 0:
          this.flags &= -4;
          break;
        case 1:
          this.flags = (this.flags &= -3) | 1;
          break;
        case 2:
          this.flags = (this.flags |= 2) & -2;
      }
      return a;
    },
    Rz: function (a, b) {
      this.Vo = a.Vo++;
      if (!(0 < (this.flags & 1))) {
        0 < (this.flags & 2) && (b = !0);
        var c = a.Ol;
        (b || a.isVisible(this.$g)) && this.sy(a, b);
        a.Ol = c;
      }
    },
    ly: function () {
      for (var a = this; null != a.parent; ) a = a.parent;
      return a;
    },
    Di: function (a, b) {
      null == b && (b = !0);
      null == a && (a = !0);
      this.gu(b, !0);
      b && (this.Ei(), a && this.uA());
    },
    gu: function () {
      0 < (this.flags & 4) ||
        ((this.flags = (this.flags & -9) | 32),
        null != this.parent
          ? 0 < (this.flags & 4096)
            ? this.g.AJ(this.parent.g, this.local)
            : this.g.BJ(this.parent.g, this.local)
          : this.g.set(this.local));
    },
    Ei: function () {
      null != this.parent && (this.parent.flags |= 32);
    },
    uA: function () {
      null != this.parent && (this.parent.Ei(), this.parent.uA());
    },
    Ck: function (a) {
      var b = null == a;
      b ? (a = eb.tI(this)) : this.Ys(a);
      this.wA(a);
      b ? eb.BE() : this.jI(a);
      this.flags &= -129;
    },
    Yx: function (a) {
      for (var b = this.fd; null != b; ) {
        if (b.state.type == a) return b.state;
        b = b.next;
      }
      return null;
    },
    oi: function (a) {
      this.flags |= 128;
      if (null == this.fd) this.fd = new Ub(a);
      else {
        for (var b = this.fd, c = a.type; null != b; ) {
          if (b.state.type == c) {
            b.state = a;
            return;
          }
          b = b.next;
        }
        b = new Ub(a);
        b.next = this.fd;
        this.fd = b;
      }
    },
    FA: function (a) {
      this.flags |= 128;
      for (var b = this.fd, c = null; null != b; ) {
        if (b.state.type == a) {
          null != c ? (c.next = b.next) : (this.fd = b.next);
          b.next = null;
          break;
        }
        c = b;
        b = b.next;
      }
    },
    II: function () {
      this.flags |= 128;
      for (var a = this.fd, b; null != a; ) (b = a.next), (a.next = null), (a = b);
      this.fd = null;
    },
    Ys: function (a) {
      for (var b = this.fd, c; null != b; ) (c = b.state), a.m[c.slot].push(c), (b = b.next);
    },
    jI: function (a) {
      for (var b = this.fd; null != b; ) --a.m[b.state.slot].Xa, (b = b.next);
    },
    Uw: function (a) {
      null == a && (a = this.FF());
      if (null == a) throw 30;
      switch (a) {
        case 1:
          return new ae();
        case 2:
          return new be();
        default:
          throw 31;
      }
    },
    FF: function () {
      return null != ya.TI ? ya.TI(this) : ya.lC;
    },
    s: ya,
  });
  db.i = !0;
  db.F = ya;
  db.prototype = C(ya.prototype, {
    B: function () {
      if (!(0 < (this.flags & 1024))) {
        for (var a = this.da; null != a; ) {
          var b = a.W;
          a.B();
          a = b;
        }
        ya.prototype.B.call(this);
        db.count--;
      }
    },
    sy: function (a, b) {
      for (var c = this.da; null != c; ) c.Rz(a, b), (c = c.W);
    },
    ij: function (a, b) {
      return Ra.ij(this, a, b);
    },
    appendChild: function (a) {
      if (null == this.da) (this.da = a), (a.W = null);
      else {
        for (var b = this.da; null != b.W; ) b = b.W;
        b.W = a;
      }
      a.parent = this;
      this.Tf++;
      return this;
    },
    Nk: function (a, b) {
      if (0 == b) (a.W = this.da), (this.da = a);
      else {
        var c = this.da,
          d = 0;
        for (--b; d < b; ) ++d, (c = c.W);
        a.W = c.W;
        c.W = a;
      }
      a.parent = this;
      this.Tf++;
      return this;
    },
    removeChild: function (a) {
      if (this.da == a) this.da = a.W;
      else {
        for (var b = this.da; b.W != a; ) b = b.W;
        b.W = a.W;
      }
      a.W = null;
      a.parent = null;
      this.Tf--;
      return this;
    },
    lJ: function (a, b) {
      this.removeChild(a);
      this.Nk(a, b);
      return this;
    },
    pe: function (a) {
      for (var b = this.da; null != b; ) {
        if (b.name == a) return b;
        b = b.W;
      }
      return null;
    },
    pp: function (a, b) {
      for (var c = null, d = null, e = 0, f = this.da; 2 > e && null != f; )
        f.W == a ? ((c = f), ++e) : f.W == b && ((d = f), ++e), (f = f.W);
      e = a.W;
      f = b.W;
      a.W = null;
      b.W = null;
      e == b
        ? (null != c ? (c.W = b) : (this.da = b), (b.W = a), (a.W = f))
        : f == a
        ? (null != d ? (d.W = a) : (this.da = a), (a.W = b), (b.W = e))
        : (null != c ? (c.W = b) : (this.da = b), (b.W = e), null != d ? (d.W = a) : (this.da = a), (a.W = f));
      return this;
    },
    aB: function (a) {
      if (this.da == a) return this;
      for (var b = this.da; b.W != a; ) b = b.W;
      b.W = a.W;
      a.W = this.da;
      this.da = a;
      return this;
    },
    gu: function (a, b) {
      ya.prototype.gu.call(this, a, b);
      if (b) for (b = this.da; null != b; ) b.Di(!1, a), (b = b.W);
    },
    Ei: function () {
      if (!(0 < (this.flags & 16)) && null != this.da) {
        var a = this.da;
        this.$g.from(a.$g);
        for (a = a.W; null != a; ) (0 < (a.flags & 256) && 0 == a.Tf) || this.$g.tr(a.$g), (a = a.W);
        this.flags &= -33;
        ya.prototype.Ei.call(this);
      }
    },
    wA: function (a) {
      for (var b = this.da; null != b; ) b.Ck(a), (b = b.W);
    },
    s: db,
  });
  sb.i = !0;
  sb.F = ya;
  sb.prototype = C(ya.prototype, {
    B: function () {
      0 < (this.flags & 1024) ||
        (this.Lg.B(), (this.Lg = null), ha.jf(this.uk), (this.uk = null), ya.prototype.B.call(this), sb.count--);
    },
    bu: function () {
      this.flags |= 64;
    },
    ij: function (a, b) {
      return b;
    },
    Ei: function () {
      0 < (this.flags & 16) ||
        0 == (this.flags & 96) ||
        (this.Lg.Yt(this.g, this.$g), (this.flags &= -97), ya.prototype.Ei.call(this));
    },
    sy: function (a) {
      null != this.effect && ((a = a.wm), (a.m[a.o++] = this));
    },
    wA: function (a) {
      for (var b = 0, c, d = 0, e = a.o; d < e; ) {
        var f = d++;
        c = a.m[f];
        0 == c.Xa ? (this.uk[f] = null) : ((c = c.top().collapse(c)), (this.uk[f] = c), (b |= c.Ue));
      }
      this.Ot = b;
    },
    s: sb,
  });
  lc.i = !0;
  lc.F = sb;
  lc.prototype = C(sb.prototype, {
    Fb: function (a, b) {
      if (!this.$g.contains(a)) return 0;
      var c = a.x,
        d = a.y;
      this.g.vf(a, a);
      var e = a.x,
        f = a.y;
      (e = 0 < e && 1 > e && 0 < f && 1 > f) && null != b && (b.data[b.count++] = this);
      a.x = c;
      a.y = d;
      return e ? 1 : 0;
    },
    ij: function (a, b) {
      var c = new E(),
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
          h.ib(c, c);
          3.4e38 > c.x && (d = c.x);
          -3.4e38 < c.x && (f = c.x);
          3.4e38 > c.y && (e = c.y);
          -3.4e38 < c.y && (g = c.y);
          c.x = 1;
          c.y = 0;
          h.ib(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = 1;
          c.y = 1;
          h.ib(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = 0;
          c.y = 1;
          h.ib(c, c);
        } else
          null == a.parent
            ? ((h = this.g),
              (c.x = 0),
              (c.y = 0),
              h.ib(c, c),
              3.4e38 > c.x && (d = c.x),
              -3.4e38 < c.x && (f = c.x),
              3.4e38 > c.y && (e = c.y),
              -3.4e38 < c.y && (g = c.y),
              (c.x = 1),
              (c.y = 0),
              h.ib(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 1),
              (c.y = 1),
              h.ib(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = 1),
              h.ib(c, c))
            : ((h = this.g),
              (a = a.g),
              (c.x = 0),
              (c.y = 0),
              h.ib(c, c),
              a.vf(c, c),
              3.4e38 > c.x && (d = c.x),
              -3.4e38 < c.x && (f = c.x),
              3.4e38 > c.y && (e = c.y),
              -3.4e38 < c.y && (g = c.y),
              (c.x = 1),
              (c.y = 0),
              h.ib(c, c),
              a.vf(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 1),
              (c.y = 1),
              h.ib(c, c),
              a.vf(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = 1),
              h.ib(c, c),
              a.vf(c, c));
        c.x < d && (d = c.x);
        c.x > f && (f = c.x);
        c.y < e && (e = c.y);
        c.y > g && (g = c.y);
      }
      b.j = d;
      b.l = e;
      b.u = f;
      b.A = g;
      return b;
    },
    bu: function () {
      sb.prototype.bu.call(this);
      this.Lg.K.x = 0.5;
      this.Lg.K.y = 0.5;
      this.Lg.la = Math.sqrt(0.5);
      switch (this.Lg.type) {
        case 2:
          var a = this.Lg.box;
          a.j = 0;
          a.l = 0;
          a.u = 1;
          a.A = 1;
      }
    },
    s: lc,
  });
  Ra.i = !0;
  Ra.Di = function (a, b) {
    null == b && (b = !0);
    var c = Ra.np;
    c.clear();
    c.push(a);
    a = 8;
    for (b && (a = 40); 0 < c.Xa; ) {
      var d = c.m[--c.Xa];
      if (0 < (d.flags & a)) d.Di(!0, b);
      else if (0 < (d.flags & 256)) for (d = d.da; null != d; ) c.push(d), (d = d.W);
    }
  };
  Ra.Ck = function (a) {
    var b = Ra.np;
    b.clear();
    for (b.push(a); 0 < b.Xa; )
      if (((a = b.m[--b.Xa]), 0 < (a.flags & 128))) a.Ck();
      else if (0 < (a.flags & 256)) for (a = a.da; null != a; ) b.push(a), (a = a.W);
  };
  Ra.$t = function (a, b) {
    var c = Ra.np;
    c.clear();
    for (c.push(a); 0 < c.Xa; )
      if (((a = c.m[--c.Xa]), null != a.controllers && a.$t(b), 0 < (a.flags & 256)))
        for (a = a.da; null != a; ) c.push(a), (a = a.W);
  };
  Ra.ij = function (a, b, c) {
    var d = 3.4e38,
      e = 3.4e38,
      f = -3.4e38,
      g = -3.4e38,
      h = Ra.np;
    h.clear();
    for (h.push(a); 0 < h.Xa; )
      if (((a = h.m[--h.Xa]), 0 < (a.flags & 512)))
        a.ij(b, c), c.j < d && (d = c.j), c.l < e && (e = c.l), c.u > f && (f = c.u), c.A > g && (g = c.A);
      else if (0 < (a.flags & 256)) for (a = a.da; null != a; ) h.push(a), (a = a.W);
    c.j = d;
    c.l = e;
    c.u = f;
    c.A = g;
    return c;
  };
  Ra.MK = function (a, b, c) {
    var d;
    null == d && (d = new W());
    var e = c.j,
      f = c.l,
      g = c.u,
      h = c.A,
      l = 3.4e38,
      k = 3.4e38,
      m = -3.4e38,
      t = -3.4e38,
      n = new E();
    b == a
      ? ((l = c.j), (k = c.l), (m = c.u), (t = c.A))
      : (b == a.parent
          ? ((a = a.local),
            (n.x = e),
            (n.y = f),
            a.ib(n, n),
            3.4e38 > n.x && (l = n.x),
            -3.4e38 < n.x && (m = n.x),
            3.4e38 > n.y && (k = n.y),
            -3.4e38 < n.y && (t = n.y),
            (n.x = g),
            (n.y = f),
            a.ib(n, n),
            n.x < l && (l = n.x),
            n.x > m && (m = n.x),
            n.y < k && (k = n.y),
            n.y > t && (t = n.y),
            (n.x = g),
            (n.y = h),
            a.ib(n, n),
            n.x < l && (l = n.x),
            n.x > m && (m = n.x),
            n.y < k && (k = n.y),
            n.y > t && (t = n.y),
            (n.x = e),
            (n.y = h),
            a.ib(n, n))
          : null == b.parent
          ? ((a = a.g),
            (n.x = e),
            (n.y = f),
            a.ib(n, n),
            3.4e38 > n.x && (l = n.x),
            -3.4e38 < n.x && (m = n.x),
            3.4e38 > n.y && (k = n.y),
            -3.4e38 < n.y && (t = n.y),
            (n.x = g),
            (n.y = f),
            a.ib(n, n),
            n.x < l && (l = n.x),
            n.x > m && (m = n.x),
            n.y < k && (k = n.y),
            n.y > t && (t = n.y),
            (n.x = g),
            (n.y = h),
            a.ib(n, n),
            n.x < l && (l = n.x),
            n.x > m && (m = n.x),
            n.y < k && (k = n.y),
            n.y > t && (t = n.y),
            (n.x = e),
            (n.y = h),
            a.ib(n, n))
          : ((a = a.g),
            (b = b.g),
            (n.x = e),
            (n.y = f),
            a.ib(n, n),
            b.vf(n, n),
            3.4e38 > n.x && (l = n.x),
            -3.4e38 < n.x && (m = n.x),
            3.4e38 > n.y && (k = n.y),
            -3.4e38 < n.y && (t = n.y),
            (n.x = g),
            (n.y = f),
            a.ib(n, n),
            b.vf(n, n),
            n.x < l && (l = n.x),
            n.x > m && (m = n.x),
            n.y < k && (k = n.y),
            n.y > t && (t = n.y),
            (n.x = g),
            (n.y = h),
            a.ib(n, n),
            b.vf(n, n),
            n.x < l && (l = n.x),
            n.x > m && (m = n.x),
            n.y < k && (k = n.y),
            n.y > t && (t = n.y),
            (n.x = e),
            (n.y = h),
            a.ib(n, n),
            b.vf(n, n)),
        n.x < l && (l = n.x),
        n.x > m && (m = n.x),
        n.y < k && (k = n.y),
        n.y > t && (t = n.y));
    d.j = l;
    d.l = k;
    d.u = m;
    d.A = t;
    return d;
  };
  Yd.i = !0;
  Yd.rc = !0;
  Yd.prototype = { s: Yd };
  Cb.i = !0;
  Cb.prototype = {
    setRotate: function (a) {
      if (this.matrix != a) {
        var b = this.matrix;
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
      this.D = (this.D & -18) | 226;
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
      b = this.matrix;
      c = a.matrix;
      b.m11 = c.m11;
      b.m12 = c.m12;
      b.m13 = c.m13;
      b.m21 = c.m21;
      b.m22 = c.m22;
      b.m23 = c.m23;
      b.m31 = c.m31;
      b.m32 = c.m32;
      b.m33 = c.m33;
      this.D = a.D | 224;
      return this;
    },
    TA: function (a) {
      this.translate.x = a.translate.x;
      this.translate.y = a.translate.y;
      this.scale.x = a.scale.x;
      this.scale.y = a.scale.y;
      var b = this.matrix,
        c = a.matrix;
      b.m11 = c.m11;
      b.m12 = c.m12;
      b.m21 = c.m21;
      b.m22 = c.m22;
      this.D = a.D | 224;
      return this;
    },
    Id: function () {
      kd.Id(this.matrix);
      var a = this.translate;
      a.x = 0;
      a.y = 0;
      a.z = 0;
      a = this.scale;
      a.x = 1;
      a.y = 1;
      a.z = 1;
      this.D |= 255;
      return this;
    },
    pJ: function () {
      var a = this.matrix;
      a.m11 = 1;
      a.m12 = 0;
      a.m21 = 0;
      a.m22 = 1;
      this.translate.x = 0;
      this.translate.y = 0;
      this.scale.x = 1;
      this.scale.y = 1;
      this.D |= 255;
      return this;
    },
    AJ: function (a, b) {
      if (0 < (a.D & 1)) return this.set(b), this;
      if (0 < (b.D & 1)) return this.set(a), this;
      this.D = 235;
      if (0 < (a.D & 2) && 0 < (b.D & 2) && 0 < (a.D & 8)) {
        if (0 < (a.D & 16)) {
          var c = this.matrix,
            d = b.matrix;
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
          0 < (b.D & 16)
            ? ((c = this.matrix),
              (d = a.matrix),
              (c.m11 = d.m11),
              (c.m12 = d.m12),
              (c.m13 = d.m13),
              (c.m21 = d.m21),
              (c.m22 = d.m22),
              (c.m23 = d.m23),
              (c.m31 = d.m31),
              (c.m32 = d.m32),
              (c.m33 = d.m33))
            : kd.Kd(a.matrix, b.matrix, this.matrix);
        c = this.translate;
        var e = a.translate;
        0 < (a.D & 16) ? ((d = b.translate), (c.x = d.x), (c.y = d.y), (c.z = d.z)) : kd.Ai(a.matrix, b.translate, c);
        a = a.scale.x;
        c.x = c.x * a + e.x;
        c.y = c.y * a + e.y;
        c.z = c.z * a + e.z;
        0 < (b.D & 8)
          ? ((this.scale.x = this.scale.y = this.scale.z = a * b.scale.x), (this.D = (this.D & -6) | 232))
          : ((b = b.scale),
            (this.scale.x = a * b.x),
            (this.scale.y = a * b.y),
            (this.scale.z = a * b.z),
            (this.D = (this.D & -14) | 224));
        return this;
      }
      d = 0 < (a.D & 2) ? kd.BB(a.matrix, a.scale, Cb.CB) : a.matrix;
      kd.Kd(d, 0 < (b.D & 2) ? kd.BB(b.matrix, b.scale, Cb.DB) : b.matrix, this.matrix);
      c = this.translate;
      kd.Ai(d, b.translate, c);
      e = a.translate;
      c.x += e.x;
      c.y += e.y;
      c.z += e.z;
      this.D &= -12;
      return this;
    },
    BJ: function (a, b) {
      if (0 < (a.D & 1)) return this.TA(b), this;
      if (0 < (b.D & 1)) return this.TA(a), this;
      this.D = 235;
      if (0 < (a.D & 2) && 0 < (b.D & 2) && 0 < (a.D & 8)) {
        var c = this.matrix;
        if (0 < (a.D & 16)) {
          var d = b.matrix;
          c.m11 = d.m11;
          c.m12 = d.m12;
          c.m21 = d.m21;
          c.m22 = d.m22;
          0 < (b.D & 16) && (this.D |= 16);
        } else {
          if (0 < (b.D & 16)) {
            var e = a.matrix;
            c.m11 = e.m11;
            c.m12 = e.m12;
            c.m21 = e.m21;
            c.m22 = e.m22;
          } else {
            e = a.matrix;
            d = b.matrix;
            var f = d.m11;
            var g = d.m12;
            var h = d.m21;
            var l = d.m22;
            d = e.m11;
            var k = e.m12;
            c.m11 = d * f + k * h;
            c.m12 = d * g + k * l;
            d = e.m21;
            k = e.m22;
            c.m21 = d * f + k * h;
            c.m22 = d * g + k * l;
          }
          this.setRotate(c);
        }
        h = this.translate;
        e = a.translate;
        0 < (a.D & 16)
          ? ((h.x = b.translate.x), (h.y = b.translate.y))
          : ((f = b.translate.x),
            (g = b.translate.y),
            (c = a.matrix),
            (h.x = c.m11 * f + c.m12 * g),
            (h.y = c.m21 * f + c.m22 * g));
        a = a.scale.x;
        h.x = h.x * a + e.x;
        h.y = h.y * a + e.y;
        0 < (b.D & 8)
          ? ((this.scale.x = this.scale.y = a * b.scale.x), (this.D = (this.D & -6) | 232))
          : ((b = b.scale), (this.scale.x = a * b.x), (this.scale.y = a * b.y), (this.D = (this.D & -14) | 224));
        return this;
      }
      e = a.matrix;
      0 < (a.D & 2) &&
        ((e = Cb.CB),
        (f = a.scale.x),
        (g = a.scale.y),
        (c = a.matrix),
        (e.m11 = c.m11 * f),
        (e.m12 = c.m12 * g),
        (e.m21 = c.m21 * f),
        (e.m22 = c.m22 * g));
      d = b.matrix;
      0 < (b.D & 2) &&
        ((e = Cb.DB),
        (f = b.scale.x),
        (g = b.scale.y),
        (c = b.matrix),
        (d.m11 = c.m11 * f),
        (d.m12 = c.m12 * g),
        (d.m21 = c.m21 * f),
        (d.m22 = c.m22 * g));
      c = this.matrix;
      f = d.m11;
      g = d.m12;
      h = d.m21;
      l = d.m22;
      d = e.m11;
      k = e.m12;
      c.m11 = d * f + k * h;
      c.m12 = d * g + k * l;
      d = e.m21;
      k = e.m22;
      c.m21 = d * f + k * h;
      c.m22 = d * g + k * l;
      h = this.translate;
      f = b.translate.x;
      g = b.translate.y;
      h.x = e.m11 * f + e.m12 * g;
      h.y = e.m21 * f + e.m22 * g;
      e = a.translate;
      h.x += e.x;
      h.y += e.y;
      this.D = (this.D & -12) | 224;
      return this;
    },
    ib: function (a, b) {
      if (0 < (this.D & 1)) (b.x = a.x), (b.y = a.y);
      else {
        if (0 < (this.D & 2)) {
          var c = a.x * this.scale.x;
          a = a.y * this.scale.y;
          if (0 >= (this.D & 16)) {
            var d = c,
              e = this.matrix;
            c = e.m11 * c + e.m12 * a;
            a = e.m21 * d + e.m22 * a;
          }
        } else
          (c = a.x), (a = a.y), (d = c), (e = this.matrix), (c = e.m11 * c + e.m12 * a), (a = e.m21 * d + e.m22 * a);
        b.x = c + this.translate.x;
        b.y = a + this.translate.y;
      }
      return b;
    },
    vf: function (a, b) {
      if (0 < (this.D & 1)) (b.x = a.x), (b.y = a.y);
      else {
        var c = a.x - this.translate.x;
        a = a.y - this.translate.y;
        if (0 < (this.D & 2)) {
          if (0 >= (this.D & 16)) {
            var d = c,
              e = this.matrix;
            c = c * e.m11 + a * e.m21;
            a = d * e.m12 + a * e.m22;
          }
          b.x = c / this.scale.x;
          b.y = a / this.scale.y;
        } else
          (e = this.matrix),
            (d = 1 / (e.m11 * e.m22 - e.m12 * e.m21)),
            (b.x = e.m22 * d * c - e.m12 * d * a),
            (b.y = -(e.m21 * d) * c + e.m11 * d * a);
      }
      return b;
    },
    En: function () {
      var a = this.ur;
      if (0 < (this.D & 64))
        if (((this.D &= -65), null == a && ((a = this.ur = ba.Ac()), ba.Id(a)), 0 < (this.D & 1)))
          (a.m11 = 1), (a.m12 = 0), (a.m14 = 0), (a.m21 = 0), (a.m22 = 1), (a.m24 = 0);
        else {
          var b = this.matrix,
            c = this.scale.x,
            d = this.scale.y;
          0 < (this.D & 2)
            ? ((a.m11 = b.m11 * c), (a.m12 = b.m12 * d), (a.m21 = b.m21 * c), (a.m22 = b.m22 * d))
            : ((a.m11 = b.m11), (a.m21 = b.m21), (a.m12 = b.m12), (a.m22 = b.m22));
          a.m14 = this.translate.x;
          a.m24 = this.translate.y;
        }
      return a;
    },
    s: Cb,
  };
  na.i = !0;
  na.Aa = [Yd];
  na.Jb = function () {
    return ++na.X;
  };
  na.prototype = {
    B: function () {
      this.remove();
      null != this.Re && (this.Re.B(), (this.Re = null));
      null != this.Zp && (this.Zp.B(), (this.Zp = null));
      this.node.B();
      na.count--;
    },
    remove: function () {
      null != this.node.parent && this.node.parent.removeChild(this.node);
    },
    vb: function () {
      var a = this.node.parent;
      return null != a && ((a = a.client), null != a && a.type == ia.TYPE) ? a : null;
    },
    HJ: function (a) {
      this.remove();
      a.appendChild(this.node.client);
      return a;
    },
    fa: function (a) {
      this.fc != a && ((this.fc = P.ne(a)), (this.flags |= 2));
      return this.fc;
    },
    J: function (a) {
      this.od != a && ((this.od = a), (this.flags |= 4));
      return a;
    },
    L: function (a) {
      this.ga != a && ((this.ga = a), (this.flags |= 1));
      return a;
    },
    O: function (a) {
      this.qa != a && ((this.qa = a), (this.flags |= 1));
      return a;
    },
    pc: function (a) {
      this.zb != a && ((this.zb = a), (this.flags |= 9));
      return a;
    },
    M: function (a) {
      if (this.pa != a || this.Vb != a) (this.pa = this.Vb = a), (this.flags = (this.flags | 49) & -65);
      return a;
    },
    Tg: function (a) {
      this.pa != a && ((this.pa = a), (this.flags = (this.flags & -97) | 17));
      return a;
    },
    hm: function (a) {
      this.Vb != a && ((this.Vb = a), (this.flags = (this.flags & -97) | 17));
      return a;
    },
    Ba: function () {
      return 0;
    },
    ma: function () {
      return 0;
    },
    dg: function (a) {
      this.Lb != a && ((this.Lb = a), (this.flags |= 1));
      return a;
    },
    Dt: function (a) {
      this.Mb != a && ((this.Mb = a), (this.flags |= 1));
      return a;
    },
    rk: function (a) {
      this.he != a && ((this.he = a), (this.flags |= 1));
      return a;
    },
    jB: function (a) {
      this.ie != a && ((this.ie = a), (this.flags |= 1));
      return a;
    },
    QI: function () {
      this.Lb = this.Mb = 0;
      this.flags |= 1;
    },
    RI: function () {
      this.he = this.ie = 0;
      this.flags |= 1;
    },
    IA: function () {
      this.qa = this.ie = this.Mb = this.ga = this.he = this.Lb = 0;
      this.Vb = this.pa = 1;
      this.zb = 0;
      this.flags = (this.flags & -25) | 97;
      this.node.local.pJ();
    },
    nb: function (a, b, c) {
      this.yc();
      var d = this.na(this.vb()),
        e = this.ga - d.j,
        f = this.qa - d.l;
      switch (b) {
        case -1:
          this.L(a.j + e);
          break;
        case 0:
          this.L(a.j + 0.5 * (a.u - a.j) + e - (d.u - d.j) / 2);
          break;
        case 1:
          this.L(a.u + e - (d.u - d.j));
      }
      switch (c) {
        case -1:
          this.O(a.l + f);
          break;
        case 0:
          this.O(a.l + 0.5 * (a.A - a.l) + f - (d.A - d.l) / 2);
          break;
        case 1:
          this.O(a.A + f - (d.A - d.l));
      }
    },
    vg: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = 0);
      null == b && (b = 0);
      this.M(1);
      var e = (a.u - a.j) / this.Ba(),
        f = (a.A - a.l) / this.ma();
      2 == b ? (this.Tg(e), this.hm(f)) : 0 == b ? this.M(Math.min(e, f)) : this.M(Math.max(e, f));
      this.L(a.j);
      this.O(a.l);
      f = this.na(this.vb());
      e = a.j - f.j;
      f = a.l - f.l;
      2 != b && (this.L(P.map(c, -1, 1, a.j, a.u - this.Ba())), this.O(P.map(d, -1, 1, a.l, a.A - this.ma())));
      this.L(this.ga + e);
      this.O(this.qa + f);
    },
    Me: function (a, b) {
      ua.gg(this);
      this.node.g.ib(a, b);
      return b;
    },
    update: function () {},
    Fa: function () {
      null == this.Re && (this.Re = new Gc(this));
      return this.Re;
    },
    Tc: function () {
      return new If(this);
    },
    zt: function (a) {
      var b = this.node.Yx(3);
      if (null == b) {
        if (null == a) return a;
        b = new $d();
        this.node.oi(b);
      }
      if (null == a) return this.node.FA(3), a;
      b.La(a);
      return a;
    },
    yc: function () {
      if (0 == (this.flags & 7)) return this;
      0 < (this.flags & 1) && this.OB();
      0 < (this.flags & 4) && (this.node.At(this.od ? 0 : 1), (this.flags &= -5));
      if (0 < (this.flags & 2)) {
        if (1 > this.fc) {
          var a = this.node.Yx(0);
          null == a ? this.node.oi(new pd(this.fc)) : (a.alpha = this.fc);
        } else this.node.FA(0);
        this.flags &= -3;
        this.node.flags |= 128;
      }
      return this;
    },
    OB: function () {
      this.flags &= -2;
      this.node.flags |= 8;
      var a = this.node.local,
        b = this.he,
        c = this.ie,
        d = this.flags & 120;
      if (0 < (d & 8)) {
        var e = 0.0174532925199432 * P.ym(this.zb),
          f = Math.sin(e);
        e = Math.cos(e);
        var g = a.matrix;
        g.m11 = e;
        g.m12 = -f;
        g.m21 = f;
        g.m22 = e;
        a.setRotate(g);
        if (0 < (d & 64))
          (a.translate.x = -(b * e) + c * f + b + this.ga - this.Lb),
            (a.translate.y = -(b * f) - c * e + c + this.qa - this.Mb);
        else {
          if (0 < (d & 32)) {
            d = this.pa;
            var h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d;
            d = h * b;
            g = h * c;
            a.scale.x = a.scale.y = h;
            a.D = (a.D & -6) | 232;
          } else {
            d = this.pa;
            h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d;
            d = this.Vb;
            var l = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d;
            d = h * b;
            g = l * c;
            a.scale.x = h;
            a.scale.y = l;
            a.D = (a.D & -14) | 224;
          }
          a.translate.x = -(d * e) + g * f + b + this.ga - this.Lb;
          a.translate.y = -(d * f) - g * e + c + this.qa - this.Mb;
        }
      } else
        0 < (d & 64)
          ? ((a.translate.x = this.ga - this.Lb), (a.translate.y = this.qa - this.Mb))
          : 0 < (d & 32)
          ? ((d = this.pa),
            (h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d),
            (a.scale.x = a.scale.y = h),
            (a.D = (a.D & -6) | 232),
            (a.translate.x = -(h * b) + b + this.ga - this.Lb),
            (a.translate.y = -(h * c) + c + this.qa - this.Mb))
          : ((d = this.pa),
            (h = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d),
            (d = this.Vb),
            (l = 0 > d ? (-0.001 < d ? -0.001 : d) : 0.001 > d ? 0.001 : d),
            (a.scale.x = h),
            (a.scale.y = l),
            (a.D = (a.D & -14) | 224),
            (a.translate.x = -(h * b) + b + this.ga - this.Lb),
            (a.translate.y = -(l * c) + c + this.qa - this.Mb));
      a.D = (a.D & -2) | 224;
    },
    s: na,
  };
  Q.i = !0;
  Q.F = na;
  Q.prototype = C(na.prototype, {
    B: function () {
      null != this.node &&
        (null != this.Ug && (this.Ug.B(), (this.Ug = null)),
        (this.ua = this.Rb = null),
        (this.lh = -1),
        (this.aj = null),
        na.prototype.B.call(this),
        Q.count--);
    },
    Ba: function () {
      if (0 == (this.flags & 8)) return this.ba.x * Math.abs(this.pa);
      var a = this.ba.x * Math.abs(this.pa) * 0.5,
        b = this.ba.y * Math.abs(this.Vb) * 0.5,
        c = 0.0174532925199432 * P.ym(this.zb),
        d = -Math.sin(c),
        e = Math.cos(c);
      0 < e ? ((c = -(e * a)), (a *= e)) : ((c = e * a), (a = -(e * a)));
      0 < d ? ((c -= d * b), (a += d * b)) : ((c += d * b), (a -= d * b));
      return a - c;
    },
    kB: function (a) {
      this.pa = a / this.ba.x;
      this.flags = (this.flags & -97) | 17;
      return a;
    },
    ma: function () {
      if (0 == (this.flags & 8)) return this.ba.y * Math.abs(this.Vb);
      var a = (this.ba.x * Math.abs(this.pa)) / 2,
        b = (this.ba.y * Math.abs(this.Vb)) / 2,
        c = 0.0174532925199432 * P.ym(this.zb),
        d = Math.sin(c);
      c = Math.cos(c);
      if (0 < d) {
        var e = -(d * a);
        a *= d;
      } else (e = d * a), (a = -(d * a));
      0 < c ? ((e -= c * b), (a += c * b)) : ((e += c * b), (a -= c * b));
      return a - e;
    },
    Ct: function (a) {
      this.Vb = a / this.ba.y;
      this.flags = (this.flags & -97) | 17;
      return a;
    },
    Ga: function () {
      this.dg(this.ba.x / 2);
      this.Dt(this.ba.y / 2);
      this.flags |= 1;
    },
    aa: function () {
      this.he = this.ba.x / 2;
      this.ie = this.ba.y / 2;
      this.flags |= 1;
    },
    cc: function (a, b) {
      if (this.lh == a && this.V == sa.current) return null != b && this.oc(b), this;
      this.V = sa.current;
      this.lh = a;
      this.aj = null;
      if (-1 == a)
        return null != this.Rb.effect && this.Rb.effect.B(), (this.Rb.effect = null), (this.flags &= -641), this;
      if (null == this.Rb.effect) {
        var c = new Sa();
        this.Rb.effect = c;
      } else
        this.Rb.effect.type == Sa.TYPE
          ? (c = this.Rb.effect)
          : (this.Rb.effect.B(), (c = new Sa()), (this.Rb.effect = c));
      a = sa.current.Hf(a);
      c.cc(a);
      c = this.ba;
      c.x = a.width;
      c.y = a.height;
      null == b && ((c = this.ba), (a = a.scale), (c.x *= a), (c.y *= a));
      this.flags = this.ba.x == this.ba.y ? this.flags | 256 : this.flags & -257;
      this.flags = (this.flags & -513) | 129;
      null != b && this.oc(b);
      return this;
    },
    oc: function (a) {
      if (this.aj == a) return a;
      this.aj = a;
      this.FJ(this.Rb.effect.za.Pc.Wx(a).id);
      return a;
    },
    Dc: function () {
      null == this.Ug && (this.Ug = new rb(this));
      return this.Ug;
    },
    setColor: function (a, b, c) {
      this.ba.x = b;
      this.ba.y = c;
      this.flags = this.ba.x == this.ba.y ? this.flags | 256 : this.flags & -257;
      this.flags = (this.flags & -513) | 129;
      0 > this.lh
        ? null == this.Rb.effect && (this.Rb.effect = new tb())
        : ((this.lh = -1), (this.aj = null), this.Rb.effect.B(), (this.Rb.effect = new tb()));
      this.Rb.effect.color = a;
      return this;
    },
    Fb: function (a) {
      ua.gg(this);
      0 < (this.node.flags & 32) && this.node.Ei();
      return 1 == this.Rb.Fb(a, null);
    },
    na: function (a) {
      var b = new W();
      if (a == this) return (b.j = 0), (b.l = 0), (b.u = this.ba.x), (b.A = this.ba.y), b;
      if (0 == (this.flags & 128)) return (b.j = 0), (b.l = 0), (b.u = 0), (b.A = 0), b;
      var c = 512 == (this.flags & 8704);
      c && (this.flags = (this.flags & -513) | 1);
      0 == (this.flags & 16384) && (ua.gg(this), null == a || ua.Qr(this, a) || ua.gg(a));
      this.node.ij(null == a ? this.node.ly() : a.node, b);
      c && (this.flags |= 513);
      this.flags &= -24577;
      return b;
    },
    yc: function () {
      return 0 == (this.flags & 128) ? this : na.prototype.yc.call(this);
    },
    bp: function () {
      null != this.vb() && this.vb().bp(this);
    },
    clone: function () {
      var a = new Q(this.vb()),
        b = this.Rb.effect;
      if (null != b)
        switch (b.type) {
          case Sa.TYPE:
            a.Rb.effect = new Sa(b);
            a.lh = this.lh;
            a.aj = this.aj;
            if (null != this.ua) {
              b = this.ua;
              var c = new me();
              c.x = b.x;
              c.y = b.y;
              c.width = b.width;
              c.height = b.height;
              a.ua = c;
            }
            break;
          case tb.TYPE:
            a.Rb.effect = new tb(b);
        }
      null != this.node.name && (a.node.name = this.node.name + "_clone");
      a.ga = this.ga;
      a.qa = this.qa;
      a.pa = this.pa;
      a.Vb = this.Vb;
      a.Lb = this.Lb;
      a.Mb = this.Mb;
      a.he = this.he;
      a.ie = this.ie;
      a.zb = this.zb;
      a.fc = this.fc;
      a.od = this.od;
      b = a.ba;
      c = this.ba;
      b.x = c.x;
      b.y = c.y;
      a.flags = this.flags;
      a.node.flags = a.node.flags;
      a.node.local.set(this.node.local);
      a.node.g.set(this.node.g);
      null != a.node.fd && (a.node.fd = Ub.JE(this.node.fd));
      Gc.clone(this, a);
      rb.clone(this, a);
      return a;
    },
    Me: function (a, b) {
      var c = new E();
      c.x = a.x;
      c.y = a.y;
      c.x /= this.ba.x;
      c.y /= this.ba.y;
      0 < (this.flags & 512)
        ? ((this.flags = (this.flags & -513) | 1), na.prototype.Me.call(this, c, b), (this.flags |= 513), ua.gg(this))
        : na.prototype.Me.call(this, c, b);
      return b;
    },
    OB: function () {
      this.flags &= -2;
      this.node.flags |= 8;
      var a = this.node.local;
      if (0 < (this.flags & 512)) {
        var b = this.he - this.ua.x,
          c = this.ie - this.ua.y,
          d = this.flags & 376;
        if (0 < (d & 8)) {
          var e = 0.0174532925199432 * P.ym(this.zb),
            f = Math.sin(e);
          e = Math.cos(e);
          var g = a.matrix;
          g.m11 = e;
          g.m12 = -f;
          g.m21 = f;
          g.m22 = e;
          a.setRotate(g);
          if (0 < (d & 64))
            0 < (d & 256)
              ? ((a.scale.x = a.scale.y = this.ua.width), (a.D = (a.D & -6) | 232))
              : ((a.scale.x = this.ua.width), (a.scale.y = this.ua.height), (a.D = (a.D & -14) | 224)),
              (a.translate.x = -(b * e) + c * f + b + this.ga - this.Lb + this.ua.x),
              (a.translate.y = -(b * f) - c * e + c + this.qa - this.Mb + this.ua.y);
          else {
            if (0 < (d & 32)) {
              g = this.pa;
              var h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g;
              g = h * b;
              var l = h * c;
              0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.ua.width * h), (a.D = (a.D & -6) | 232))
                : ((a.scale.x = this.ua.width * h), (a.scale.y = this.ua.height * h), (a.D = (a.D & -14) | 224));
            } else
              (g = this.pa),
                (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                (g = this.Vb),
                (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                (g = d * b),
                (l = h * c),
                (a.scale.x = this.ua.width * d),
                (a.scale.y = this.ua.height * h),
                (a.D = (a.D & -14) | 224);
            a.translate.x = -(g * e) + l * f + b + this.ga - this.Lb + this.ua.x;
            a.translate.y = -(g * f) - l * e + c + this.qa - this.Mb + this.ua.y;
          }
        } else
          0 < (d & 64)
            ? (0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.ua.width), (a.D = (a.D & -6) | 232))
                : ((a.scale.x = this.ua.width), (a.scale.y = this.ua.height), (a.D = (a.D & -14) | 224)),
              (a.translate.x = this.ga - this.Lb + this.ua.x),
              (a.translate.y = this.qa - this.Mb + this.ua.y))
            : 0 < (d & 32)
            ? ((g = this.pa),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.ua.width * h), (a.D = (a.D & -6) | 232))
                : ((a.scale.x = this.ua.width * h), (a.scale.y = this.ua.height * h), (a.D = (a.D & -14) | 224)),
              (a.translate.x = -(h * b) + b + this.ga - this.Lb + this.ua.x),
              (a.translate.y = -(h * c) + c + this.qa - this.Mb + this.ua.y))
            : ((g = this.pa),
              (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (g = this.Vb),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (a.scale.x = this.ua.width * d),
              (a.scale.y = this.ua.height * h),
              (a.D = (a.D & -14) | 224),
              (a.translate.x = -(d * b) + b + this.ga - this.Lb + this.ua.x),
              (a.translate.y = -(h * c) + c + this.qa - this.Mb + this.ua.y));
      } else
        (b = this.he),
          (c = this.ie),
          (d = this.flags & 376),
          0 < (d & 8)
            ? ((e = 0.0174532925199432 * P.ym(this.zb)),
              (f = Math.sin(e)),
              (e = Math.cos(e)),
              (g = a.matrix),
              (g.m11 = e),
              (g.m12 = -f),
              (g.m21 = f),
              (g.m22 = e),
              a.setRotate(g),
              0 < (d & 64)
                ? (0 < (d & 256)
                    ? ((a.scale.x = a.scale.y = this.ba.x), (a.D = (a.D & -6) | 232))
                    : ((a.scale.x = this.ba.x), (a.scale.y = this.ba.y), (a.D = (a.D & -14) | 224)),
                  (a.translate.x = -(b * e) + c * f + b + this.ga - this.Lb),
                  (a.translate.y = -(b * f) - c * e + c + this.qa - this.Mb))
                : (0 < (d & 32)
                    ? ((g = this.pa),
                      (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                      (g = h * b),
                      (l = h * c),
                      0 < (d & 256)
                        ? ((a.scale.x = a.scale.y = this.ba.x * h), (a.D = (a.D & -6) | 232))
                        : ((a.scale.x = this.ba.x * h), (a.scale.y = this.ba.y * h), (a.D = (a.D & -14) | 224)))
                    : ((g = this.pa),
                      (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                      (g = this.Vb),
                      (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
                      (g = d * b),
                      (l = h * c),
                      (a.scale.x = this.ba.x * d),
                      (a.scale.y = this.ba.y * h),
                      (a.D = (a.D & -14) | 224)),
                  (a.translate.x = -(g * e) + l * f + b + this.ga - this.Lb),
                  (a.translate.y = -(g * f) - l * e + c + this.qa - this.Mb)))
            : 0 < (d & 64)
            ? (0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.ba.x), (a.D = (a.D & -6) | 232))
                : ((a.scale.x = this.ba.x), (a.scale.y = this.ba.y), (a.D = (a.D & -14) | 224)),
              (a.translate.x = this.ga - this.Lb),
              (a.translate.y = this.qa - this.Mb))
            : 0 < (d & 32)
            ? ((g = this.pa),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              0 < (d & 256)
                ? ((a.scale.x = a.scale.y = this.ba.x * h), (a.D = (a.D & -6) | 232))
                : ((a.scale.x = this.ba.x * h), (a.scale.y = this.ba.y * h), (a.D = (a.D & -14) | 224)),
              (a.translate.x = -(h * b) + b + this.ga - this.Lb),
              (a.translate.y = -(h * c) + c + this.qa - this.Mb))
            : ((g = this.pa),
              (d = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (g = this.Vb),
              (h = 0 > g ? (-0.001 < g ? -0.001 : g) : 0.001 > g ? 0.001 : g),
              (a.scale.x = this.ba.x * d),
              (a.scale.y = this.ba.y * h),
              (a.D = (a.D & -14) | 224),
              (a.translate.x = -(d * b) + b + this.ga - this.Lb),
              (a.translate.y = -(h * c) + c + this.qa - this.Mb));
      a.D = (a.D & -2) | 224;
    },
    FJ: function (a) {
      var b = this.Rb.effect;
      b.rt(a);
      a = b.za.Pc.Dn(a);
      var c = this.ba,
        d = a.ba;
      c.x = d.x;
      c.y = d.y;
      if (a.Bk) {
        this.flags |= 512;
        d = a.Xg;
        var e = a.frame;
        null == this.ua
          ? ((c = new me()), (c.x = d.x), (c.y = d.y), (c.width = e.width), (c.height = e.height), (this.ua = c))
          : ((this.ua.x = d.x), (this.ua.y = d.y), (this.ua.width = e.width), (this.ua.height = e.height));
        this.flags = e.width == e.height ? this.flags | 256 : this.flags & -257;
      } else (this.flags &= -513), (this.flags = this.ba.x == this.ba.y ? this.flags | 256 : this.flags & -257);
      b = b.za.scale;
      1 != b &&
        ((c = this.ba),
        (c.x *= b),
        (c.y *= b),
        a.Bk && ((this.ua.x *= b), (this.ua.y *= b), (this.ua.width *= b), (this.ua.height *= b)));
      this.flags |= 1;
    },
    s: Q,
  });
  If.i = !0;
  If.prototype = {
    add: function () {
      this.C.node.oi(Eb.CC);
      return this.C;
    },
    s: If,
  };
  ia.i = !0;
  ia.F = na;
  ia.prototype = C(na.prototype, {
    yc: function () {
      na.prototype.yc.call(this);
      for (var a = this.node.da, b; null != a; ) {
        if (null != a.client)
          switch (a.client.type) {
            case ia.TYPE:
            case Q.TYPE:
            case va.TYPE:
              (b = a.client), b.yc();
          }
        a = a.W;
      }
      return this;
    },
    B: function () {
      null != this.node &&
        (ua.gx(this), -1 != this.jt && (sa.current.Zk(this.jt), (this.jt = -1)), na.prototype.B.call(this), ia.count--);
    },
    appendChild: function (a) {
      this.node.appendChild(a.node);
      return this;
    },
    Nk: function (a, b) {
      this.node.Nk(a.node, b);
      return this;
    },
    removeChild: function (a) {
      this.node.removeChild(a.node);
      return this;
    },
    pe: function (a) {
      a = this.node.pe(a);
      return null == a ? null : a.client;
    },
    pp: function (a, b) {
      this.node.pp(a.node, b.node);
      return this;
    },
    bp: function (a) {
      if (null == a) return null != this.vb() && this.node.parent.aB(this.node), this;
      this.node.aB(a.node);
      return this;
    },
    update: function (a) {
      na.prototype.update.call(this, a);
      var b = this.node;
      if (null != b && 0 != (this.flags & 1024))
        for (var c = b.da; null != c; ) (b = c.W), (c = c.client), null != c && c.update(a), (c = b);
    },
    na: function (a) {
      var b = new W();
      b.j = b.l = Infinity;
      b.u = b.A = -Infinity;
      if (0 == this.node.Tf) return b;
      var c = new Z(32),
        d = new Pb(32);
      d.push(this.node);
      for (var e, f; 0 < d.Xa; ) {
        e = d.m[--d.Xa];
        if (256 == (e.flags & 2304)) for (f = e, f = f.da; null != f; ) d.push(f), (f = f.W);
        if (null != e.client)
          switch (e.client.type) {
            case Q.TYPE:
              e = e.client;
              c.Ma(e);
              0 < (e.flags & 512) && ((e.flags = (e.flags &= -513) | 1), (e.flags |= 2048));
              break;
            case va.TYPE:
              c.Ma(e.client);
          }
      }
      ua.gg(this);
      null == a || ua.Qr(this, a) || ua.gg(a);
      b.j = 3.4e38;
      b.l = 3.4e38;
      b.u = -3.4e38;
      b.A = -3.4e38;
      d = c.m;
      e = 0;
      for (f = c.o; e < f; ) {
        var g = d[e++];
        g.flags |= 24576;
        g = g.na(a);
        g.j < b.j && (b.j = g.j);
        g.l < b.l && (b.l = g.l);
        g.u > b.u && (b.u = g.u);
        g.A > b.A && (b.A = g.A);
      }
      d = c.m;
      e = 0;
      for (f = c.o; e < f; ) (g = d[e++]), 0 < (g.flags & 2048) && ((g.flags |= 513), (g.flags &= -2049));
      return b;
    },
    Ba: function () {
      var a = this.na(this.vb());
      return a.u - a.j;
    },
    ma: function () {
      var a = this.na(this.vb());
      return a.A - a.l;
    },
    Tg: function (a) {
      return a;
    },
    hm: function (a) {
      return a;
    },
    aa: function () {
      var a = this.na(this);
      this.he = (a.u - a.j) / 2;
      this.ie = (a.A - a.l) / 2;
      this.flags |= 1;
    },
    s: ia,
  });
  Ob.i = !0;
  Ob.F = Hc;
  Ob.prototype = C(Hc.prototype, { s: Ob });
  rb.i = !0;
  rb.Zw = function (a, b, c) {
    function d(g) {
      e.push(a + (10 > g ? "000" : 100 > g ? "00" : "0") + g);
    }
    var e = [],
      f = b;
    if (b > c) for (; f >= c; ) d(f--);
    else for (; f <= c; ) d(f++);
    return e;
  };
  rb.SE = function (a, b, c) {
    for (var d = [], e = 0, f = b.length; e < f; ) d.push(new Nf(b[e++], c));
    return new Of(a, d);
  };
  rb.clone = function (a, b) {
    var c = a.Ug;
    if (null != c && 0 != c.Zb) {
      var d = (b.Ug = new rb(b));
      d.length = c.length;
      d.Zb = c.Zb;
      d.Ih = c.Ih;
      d.repeat = c.repeat;
      for (a = a.node.controllers; null != a; )
        a.type == Ob.TYPE &&
          ((c = new Ob()), a.Yi(c), (c.Qj = J(d, d.Qj)), (c.Rj = J(d, d.Rj)), b.node.ya(c), (d.controller = c)),
          (a = a.next);
    }
  };
  rb.prototype = {
    uy: function () {
      return this.Zb ? this.controller.lc : 0;
    },
    B: function () {
      null != this.controller && (this.controller.B(), (this.controller = null));
      this.C = this.Ls = null;
    },
    play: function (a, b, c, d) {
      null == b && (b = !0);
      null != c && this.pk(c);
      return this.gI(a, 0, -1, b, d);
    },
    gI: function (a, b, c, d, e) {
      null == d && (d = !0);
      this.Zb = !0;
      var f = this.HF();
      -2 == this.repeat
        ? ((f.repeat = 2), (f.Xo = -1))
        : -1 == this.repeat
        ? ((f.repeat = 1), (f.Xo = -1))
        : ((f.repeat = 0), (f.Xo = this.repeat));
      f.play(a, b, c, d ? 0 : this.Ih);
      this.length = f.Ud - f.Xc;
      this.Ls = e;
      return this;
    },
    pk: function (a) {
      this.repeat = a;
      return this;
    },
    HF: function () {
      if (null == this.controller || this.controller.Ye) {
        var a = this.C.node,
          b = a.sF(Ob.TYPE);
        null == b && ((b = new Ob()), a.ya(b));
        b.Rj = J(this, this.Rj);
        b.Qj = J(this, this.Qj);
        this.controller = b;
      }
      return this.controller;
    },
    Rj: function (a, b, c) {
      this.Ih = c;
      this.C.oc(a);
    },
    Qj: function () {
      null != this.Ls && this.Ls();
      null != this.controller && 1 != this.controller.repeat && ((this.Zb = !1), (this.length = -1));
    },
    s: rb,
  };
  va.i = !0;
  va.F = na;
  va.prototype = C(na.prototype, {
    B: function () {
      if (null != this.node) {
        for (var a = this.node.da; null != a; ) {
          var b = a.W;
          a.B();
          a = b;
        }
        this.bd = this.ra = this.Nd = this.za = null;
        na.prototype.B.call(this);
        va.count--;
      }
    },
    cc: function (a) {
      this.za = sa.current.Hf(a);
      this.Nd = this.za.Pc.sf;
      this.qp = !0;
      this.ra.scale = this.za.scale;
    },
    ka: function (a) {
      this.Nb = this.Nb || this.ra.text != a;
      this.ra.text = a;
      return this;
    },
    wL: function () {
      return this.ra.size;
    },
    $c: function (a) {
      this.Nb = this.Nb || this.ra.size != a;
      this.ra.size = a;
      return this;
    },
    nd: function (a, b) {
      this.Nb = (this.Nb = this.Nb || this.ra.width != a) || this.ra.height != b;
      this.ra.width = a;
      this.ra.height = b;
      return this;
    },
    mi: function (a) {
      this.Nb = this.Nb || this.ra.align != a;
      this.ra.align = a;
      return this;
    },
    Rg: function () {
      this.Nb = this.Nb || 0 == this.ra.multiline;
      this.ra.multiline = !0;
      this.Nb && (this.yi = new kc());
      return this;
    },
    cB: function (a) {
      this.Nb = this.Nb || this.ra.$r != a;
      this.ra.$r = a;
      return this;
    },
    qk: function () {
      var a = this.Nd.Vl;
      this.Nb = this.Nb || this.ra.size != a;
      this.ra.size = a;
      return this;
    },
    Nm: function (a, b) {
      this.ra.size = (b - a) >> 1;
      this.yi.layout(this.Nd, this.ra, this.bd);
      var c = this.ra.size;
      if (this.bd.overflow) {
        if (c < a) return;
        c = this.mq(a, c - 1);
      } else {
        if (c > b) return;
        c = this.mq(c, b + 1);
      }
      c = P.Ti(c, a, b);
      this.ra.size = c;
      this.Nb = !0;
      this.yi.layout(this.Nd, this.ra, this.bd);
    },
    Ke: function (a) {
      null == a && (a = 4);
      this.yi.layout(this.Nd, this.ra, this.bd);
      if (this.bd.overflow) {
        var b = this.ra.size;
        b < a || ((this.ra.size = this.mq(a, b - 1)), (this.Nb = !0), this.yi.layout(this.Nd, this.ra, this.bd));
      }
    },
    na: function (a) {
      this.yc();
      var b = this.bd.ja,
        c = new W();
      c.j = b.j;
      c.l = b.l;
      c.u = b.u;
      c.A = b.A;
      if (c.j >= c.u || c.l >= c.A) return (c.j = 0), (c.l = 0), (c.u = 0), (c.A = 0), c;
      if (a == this) return c;
      0 == (this.flags & 16384) && (ua.gg(this), null != a && 0 == ua.Qr(this, a) && ua.gg(a));
      return Ra.MK(this.node, null == a ? this.node.ly() : a.node, c);
    },
    nb: function (a, b, c) {
      this.yc();
      if (!this.bd.overflow) {
        var d = this.bd.ja;
        d.j >= d.u || d.l >= d.A || na.prototype.nb.call(this, a, b, c);
      }
    },
    update: function (a) {
      na.prototype.update.call(this, a);
      if (this.vr) {
        for (var b = 0, c = this.node, d = c.da, e; null != d; ) {
          if (0 < (d.flags & 1))
            if (((e = d), (e.Pn += a), 10 < e.Pn)) {
              e = d.W;
              c.removeChild(d);
              d.B();
              d = e;
              continue;
            } else ++b;
          d = d.W;
        }
        this.vr = 0 < b;
      }
    },
    yc: function () {
      na.prototype.yc.call(this);
      if (null == this.za || null == this.ra.text || (!this.Nb && !this.qp)) return this;
      this.Nb = !1;
      var a = this.node;
      if (this.qp) {
        this.qp = !1;
        for (var b = a.da, c; null != b; ) (c = b.W), a.removeChild(b), b.B(), (b = c);
      }
      this.yi.layout(this.Nd, this.ra, this.bd);
      c = this.bd.ed;
      for (var d = this.bd.me, e = a.da, f = 0, g, h, l, k, m, t, n = 0, w = c.o; n < w; )
        (k = n++),
          (b = c.m[k]),
          (g = k << 2),
          (h = d.m[g]),
          (l = d.m[g + 1]),
          (k = d.m[g + 2]),
          (m = d.m[g + 3]),
          (t = String.fromCodePoint(b)),
          null != e
            ? ((g = e), (g.name = t), g.At(0), a.lJ(g, f++), (e = e.W))
            : ((g = new Xd(t)), (t = new Sa().cc(this.za)), (g.effect = t), a.Nk(g, f++)),
          (t = g.local),
          (t.translate.x = h),
          (t.translate.y = l),
          (t.D &= -2),
          (t.D |= 224),
          (h = g.local),
          (h.scale.x = k),
          (h.scale.y = m),
          (h.D &= -14),
          (h.D |= 224),
          (t = g.effect),
          t.rt(b);
      a.flags |= 8;
      for (b = 0; null != e; )
        100 > b++
          ? ((this.vr = !0), (g = e), (g.Pn = 0), e.At(1), (e = e.W))
          : ((c = e.W), a.removeChild(e), e.B(), (e = c));
      return this;
    },
    aa: function () {
      var a = this.na(this);
      a.j >= a.u || a.l >= a.A
        ? this.rk(this.jB(0))
        : (this.rk(a.j + 0.5 * (a.u - a.j)), this.jB(a.l + 0.5 * (a.A - a.l)));
    },
    Ga: function () {
      var a = this.na(this);
      a.j >= a.u || a.l >= a.A ? this.dg(this.Dt(0)) : (this.dg(a.j + (a.u - a.j) / 2), this.Dt(a.l + (a.A - a.l) / 2));
    },
    Ba: function () {
      var a = this.na(this.vb());
      return a.u - a.j;
    },
    ma: function () {
      var a = this.na(this.vb());
      return a.A - a.l;
    },
    Tg: function () {
      throw 32;
    },
    hm: function () {
      throw 33;
    },
    mq: function (a, b) {
      var c = a,
        d = b,
        e = -1;
      for (
        b = a + ((b - a) >> 1);
        (this.ra.size = b),
          this.yi.layout(this.Nd, this.ra, this.bd),
          this.bd.overflow ? (d = b) : (c = e = b),
          (b = c + ((d - c) >> 1)),
          b != c;

      );
      return 0 > e ? a : e;
    },
    s: va,
  });
  Xd.i = !0;
  Xd.F = lc;
  Xd.prototype = C(lc.prototype, { s: Xd });
  nd.i = !0;
  nd.rc = !0;
  nd.prototype = { s: nd };
  Hf.i = !0;
  Hf.prototype = { s: Hf };
  Gf.i = !0;
  Gf.prototype = { s: Gf };
  Wd.i = !0;
  Wd.Aa = [nd];
  Wd.prototype = {
    layout: function (a, b, c) {
      try {
        this.ud(a, b, c);
      } catch (d) {}
    },
    ud: function (a, b, c) {
      c.overflow = !1;
      var d = c.ja;
      d.j = d.l = Infinity;
      d.u = d.A = -Infinity;
      var e = b.text,
        f = e.length;
      if (0 != f) {
        var g = c.ed;
        g.uc(f);
        g.o = 0;
        var h = c.me;
        h.uc(4 * f);
        h.o = 0;
        var l = a.Wm,
          k = this.ed;
        k.o = 0;
        k.uc(f);
        for (var m = 0; m < f; ) {
          var t = fa.Ri(e, m++);
          k.m[k.o++] = t;
        }
        this.Cc.o = 0;
        this.Cc.uc(k.o);
        m = 0;
        for (e = k.o; m < e; ) (t = k.m[m++]), null != l[t] && ((f = this.Cc), (t = l[t]), (f.m[f.o++] = t));
        if (!this.Cc.af())
          if (
            ((l = b.width),
            (k = b.wj),
            (m = b.align),
            (e = a.wj),
            (f = (b.size / a.Vl) * b.scale),
            (t = b.GB * f),
            1 > b.height / (a.lineHeight * f))
          )
            c.overflow = !0;
          else {
            var n = this.Cc.m[0],
              w = -(n.offsetX * f);
            a = a.padding;
            var v = a[0] * f,
              F = a[1] * f,
              I = a[2] * f,
              r = a[3] * f,
              L = 0;
            a = this.Cc.o;
            for (var O = 0, D, K = 0; L < a; ) {
              n = this.Cc.m[L++];
              var Y = w + n.offsetX * f;
              var V = n.offsetY * f;
              var T = n.w * f;
              var ca = n.P * f;
              D = Y + T - F;
              if (k) {
                O |= n.code << 16;
                K = e.xj[(73856093 * O) & e.Dl];
                if (-1 == K) K = -2147483648;
                else {
                  var Ba = e.m;
                  if (Ba[K] == O) K = Ba[K + 1];
                  else {
                    var Dc = -2147483648;
                    for (K = Ba[K + 2]; -1 != K; ) {
                      if (Ba[K] == O) {
                        Dc = Ba[K + 1];
                        break;
                      }
                      K = Ba[K + 2];
                    }
                    K = Dc;
                  }
                }
                -2147483648 == K && (K = 0);
                K *= f;
                O = n.code;
                D += K;
              }
              if (D > l) {
                c.overflow = !0;
                return;
              }
              Y += K;
              g.m[g.o++] = n.code;
              h.m[h.o++] = Y;
              h.m[h.o++] = V;
              h.m[h.o++] = T;
              h.m[h.o++] = ca;
              32 < n.code &&
                ((D = Y + r),
                (Ba = V + v),
                D < d.j && (d.j = D),
                D > d.u && (d.u = D),
                Ba < d.l && (d.l = Ba),
                Ba > d.A && (d.A = Ba),
                (Y = Y + T - F),
                (V = V + ca - I),
                Y < d.j && (d.j = Y),
                Y > d.u && (d.u = Y),
                V < d.l && (d.l = V),
                V > d.A && (d.A = V));
              n = n.Pk;
              0 < b.Vm && (n = b.Vm);
              w += n * f + K + t;
            }
            if (-1 != m) {
              c = l - d.u;
              0 == m && (c /= 2);
              for (m = 0; m < a; ) (g = m++ << 2), (h.m[g] += c);
              c = d.j + c;
              V = d.u - d.j;
              d.j = c;
              d.u = c + V;
            }
            if (b.yE) for (m = 0; m < a; ) h.m[(m++ << 2) + 1] /= 2;
          }
      }
    },
    s: Wd,
  };
  kc.i = !0;
  kc.Aa = [nd];
  kc.prototype = {
    layout: function (a, b, c) {
      this.charset = a;
      this.ra = b;
      this.kf = c;
      c.overflow = !1;
      var d = c.ja;
      d.j = d.l = Infinity;
      d.u = d.A = -Infinity;
      var e = b.text,
        f = e.length;
      if (0 != f) {
        c.ed.uc(f);
        c.ed.o = 0;
        c.me.uc(4 * f);
        c.me.o = 0;
        var g = !1,
          h = a.Wm;
        this.Cc.o = 0;
        this.Cc.uc(f);
        for (var l = 0; l < f; ) {
          var k = fa.Ri(e, l++);
          if (10 == k) {
            var m = this.Cc;
            m.m[m.o++] = null;
          } else null != h[k] ? ((m = this.Cc), (k = h[k]), (m.m[m.o++] = k)) : (g = !0);
        }
        if (g) {
          f = "";
          for (e = this.Cc.iterator(); e.Ca(); ) (g = e.next()), null != g && (f += String.fromCodePoint(g.code));
          e = f;
        }
        f = b.size / a.Vl;
        h = a.lineHeight * f;
        l = b.$r * f;
        a = h + l;
        g = (b.height / h) | 0;
        if (0 == g) c.overflow = !0;
        else if (g * h + (g - 1) * l > b.height) c.overflow = !0;
        else {
          this.dE(e);
          h = d = 0;
          l = 1;
          k = m = 0;
          var t = !0,
            n = !1,
            w = this.wK,
            v = this.xK,
            F = this.yw;
          e = 0;
          var I = F.size;
          v.j = v.l = Infinity;
          for (v.u = v.A = -Infinity; e < I && !n; ) {
            var r = F.data[e];
            var L = m;
            m = r.position;
            t && ((t = !1), (d = -this.Cc.m[L].offsetX * f));
            var O = c.ed.o;
            var D = this.write(d, h, L, m, w);
            if ((n = Infinity == D)) {
              c.ed.trim(O);
              for (c.me.trim(4 * O); m > L && 32 >= this.Cc.m[m - 1].code; ) --m;
              O = c.ed.o;
              this.write(d, h, L, m, w);
              if ((n = Infinity == D)) {
                c.ed.trim(O);
                c.me.trim(4 * O);
                m = L;
                d = c.ed.o - 1;
                this.fq(b.align, k, d, v);
                k = d;
                d = c.ja;
                v.j < d.j && (d.j = v.j);
                v.u > d.u && (d.u = v.u);
                v.l < d.l && (d.l = v.l);
                v.A > d.A && (d.A = v.A);
                v.j = v.l = Infinity;
                v.u = v.A = -Infinity;
                d = 0;
                h += a;
                ++l;
                t = !0;
                n = l > g;
                continue;
              }
            }
            w.j < v.j && (v.j = w.j);
            w.u > v.u && (v.u = w.u);
            w.l < v.l && (v.l = w.l);
            w.A > v.A && (v.A = w.A);
            ++e;
            r.required
              ? ((d = c.ed.o - 1),
                this.fq(b.align, k, d, v),
                (k = d),
                (d = c.ja),
                v.j < d.j && (d.j = v.j),
                v.u > d.u && (d.u = v.u),
                v.l < d.l && (d.l = v.l),
                v.A > d.A && (d.A = v.A),
                (v.j = v.l = Infinity),
                (v.u = v.A = -Infinity),
                (d = 0),
                (h += a),
                ++l,
                (t = !0),
                (n = l > g))
              : (d = D);
          }
          d = c.ed.o - 1;
          v.j >= v.u || v.l >= v.A || this.fq(b.align, k, d, v);
          d = c.ja;
          v.j < d.j && (d.j = v.j);
          v.u > d.u && (d.u = v.u);
          v.l < d.l && (d.l = v.l);
          v.A > d.A && (d.A = v.A);
          c.overflow = e < I;
        }
      }
    },
    dE: function (a) {
      var b = kc.zw,
        c = this.yw;
      b.ka(a);
      for (var d = (c.size = 0), e; ; ) {
        e = b.wH();
        if (null == e) break;
        c.add(a.substring(d, e.position), e.position, e.required);
        d = e.position;
      }
    },
    write: function (a, b, c, d, e) {
      var f = this.ra.size / this.charset.Vl,
        g = this.Cc,
        h = this.charset.padding,
        l = h[0] * f,
        k = h[1] * f,
        m = h[2] * f;
      h = h[3] * f;
      e.j = e.l = Infinity;
      e.u = e.A = -Infinity;
      for (var t, n = 0, w = this.ra.width, v = 0, F = this.charset.wj, I = this.ra.wj, r = this.ra.GB; c < d; ) {
        var L = g.m[c++];
        if (null != L) {
          var O = a + L.offsetX * f;
          var D = b + L.offsetY * f;
          var K = L.w * f;
          var Y = L.P * f;
          t = O + K - k;
          if (I) {
            n = (L.code << 16) | v;
            v = F.xj[(73856093 * n) & F.Dl];
            if (-1 == v) n = -2147483648;
            else {
              var V = F.m;
              if (V[v] == n) n = V[v + 1];
              else {
                var T = -2147483648;
                for (v = V[v + 2]; -1 != v; ) {
                  if (V[v] == n) {
                    T = V[v + 1];
                    break;
                  }
                  v = V[v + 2];
                }
                n = T;
              }
            }
            -2147483648 == n && (n = 0);
            n *= f;
            v = L.code;
            t += n;
          }
          if (t > w) {
            a = Infinity;
            break;
          }
          O += n;
          t = this.kf.ed;
          t.m[t.o++] = L.code;
          t = this.kf.me;
          t.m[t.o++] = O;
          t = this.kf.me;
          t.m[t.o++] = D;
          t = this.kf.me;
          t.m[t.o++] = K;
          t = this.kf.me;
          t.m[t.o++] = Y;
          32 < L.code &&
            ((t = O + h),
            (V = D + l),
            t < e.j && (e.j = t),
            t > e.u && (e.u = t),
            V < e.l && (e.l = V),
            V > e.A && (e.A = V),
            (O = O + K - k),
            (D = D + Y - m),
            O < e.j && (e.j = O),
            O > e.u && (e.u = O),
            D < e.l && (e.l = D),
            D > e.A && (e.A = D));
          L = L.Pk;
          0 < this.ra.Vm && (L = this.ra.Vm);
          a += L * f + n + r;
        }
      }
      return a;
    },
    fq: function (a, b, c, d) {
      if (-1 != a && !(0 > b)) {
        var e = this.ra.width - d.u;
        0 == a && (e /= 2);
        e |= 0;
        a = d.j + e;
        var f = d.u - d.j;
        d.j = a;
        d.u = a + f;
        for (a = this.kf.me; b <= c; ) (d = b << 2), (a.m[d] += e), ++b;
      }
    },
    s: kc,
  };
  Ff.i = !0;
  Ff.prototype = {
    add: function (a, b, c) {
      var d = this.data[this.size];
      null == d && (d = this.data[this.size] = { ab: null, position: -1, required: !1 });
      d.ab = a;
      d.position = b;
      d.required = c;
      this.size++;
    },
    s: Ff,
  };
  ua.i = !0;
  ua.update = function (a, b) {
    var c = ua.Jt;
    c.clear();
    for (c.push(a); 0 < c.Xa; )
      if (((a = c.m[--c.Xa]), null == a.client)) {
        if (0 == (a.flags & 1024)) for (a = a.da; null != a; ) c.push(a), (a = a.W);
      } else
        switch (a.client.type) {
          case ia.TYPE:
            var d = a.client;
            var e = d.flags & 1024;
            d.flags &= -1025;
            d.update(b);
            d.flags |= e;
            if (0 < (d.flags & 1024)) for (a = a.da; null != a; ) c.push(a), (a = a.W);
            break;
          case Q.TYPE:
          case va.TYPE:
            (d = a.client), d.update(b);
        }
  };
  ua.yc = function (a) {
    var b = ua.Jt,
      c = null,
      d = null;
    b.clear();
    for (b.push(a); 0 < b.Xa; ) {
      var e = b.m[--b.Xa];
      if ((a = 0 < (e.flags & 256))) (c = e), (d = c.da);
      e = e.client;
      if (null != e)
        switch (e.type) {
          case ia.TYPE:
            c.da = null;
            e.yc();
            c.da = d;
            break;
          case Q.TYPE:
          case va.TYPE:
            e.yc();
        }
      if (a && !(0 < (c.flags & 2048))) for (; null != d; ) b.push(d), (d = d.W);
    }
  };
  ua.gx = function (a, b) {
    null == b && (b = !0);
    if (a.type == ia.TYPE)
      for (a = a.node.da; null != a; ) (b = a.W), null != a.client ? ua.gx(a.client, !1) : a.B(), (a = b);
    else b || a.B();
  };
  ua.Qr = function (a, b) {
    for (a = a.vb(); null != a; ) {
      if (a == b) return !0;
      a = a.vb();
    }
    return !1;
  };
  ua.gg = function (a) {
    var b = a.node,
      c = ua.Jt,
      d = a.node;
    for (c.clear(); null != d; ) {
      0 < (d.flags & 8) && (b = d);
      if (null != d.client) {
        var e = d.client;
        0 < (e.flags & 1) && (e.yc(), (b = d));
      }
      c.push(d);
      d = d.parent;
    }
    a.yc();
    b.Di(!0, !1);
  };
  Gc.i = !0;
  Gc.clone = function (a, b) {
    if (null != a.Re && 0 != a.Re.Zf) {
      var c = (b.Re = new Gc(b));
      c.Zf = a.Re.Zf;
      for (a = a.node.controllers; null != a; ) {
        if (a.type == ub.TYPE) {
          var d = new ub();
          a.Yi(d);
          d.Yd = J(c, c.Yd);
          d.Ee = J(c, c.Ee);
          b.node.ya(d);
        }
        a = a.next;
      }
    }
  };
  Gc.prototype = {
    B: function () {
      this.sB();
      this.dj = this.C = null;
    },
    x: function (a, b, c, d, e) {
      this.Oe(0, a, b, c, d, e);
      return this;
    },
    y: function (a, b, c, d, e) {
      this.Oe(1, a, b, c, d, e);
      return this;
    },
    position: function (a, b, c, d, e, f) {
      if (null != f) {
        var g = 0,
          h = function () {
            2 == (g += 1) && f();
          };
        this.Oe(0, a, c, d, e, h);
        this.Oe(1, b, c, d, e, h);
      } else this.Oe(0, a, c, d, e, f), this.Oe(1, b, c, d, e, f);
      return this;
    },
    fg: function (a, b, c, d, e) {
      this.Oe(4, a, b, c, d, e);
      return this;
    },
    rotation: function (a, b, c, d, e) {
      this.Oe(5, a, b, c, d, e);
      return this;
    },
    alpha: function (a, b, c, d, e) {
      this.Oe(6, a, b, c, d, e);
      return this;
    },
    sB: function () {
      for (var a = this.C.node.controllers; null != a; ) {
        var b = a.next;
        a.type == ub.TYPE && a.stop();
        a = b;
      }
      this.Zf = 0;
    },
    Oe: function (a, b, c, d, e, f) {
      switch (a) {
        case 0:
          var g = this.C.ga;
          break;
        case 1:
          g = this.C.qa;
          break;
        case 2:
          g = this.C.pa;
          break;
        case 3:
          g = this.C.Vb;
          break;
        case 4:
          g = this.C.pa;
          break;
        case 5:
          g = this.C.zb;
          break;
        case 6:
          g = this.C.fc;
      }
      var h = this.gG(a, c);
      h.Oe(a, g, b, c, null == d ? Oh() : d);
      h.repeat = null == e ? 0 : e;
      null == this.dj && (this.dj = []);
      this.dj[a] = f;
      this.Zf |= 1 << a;
      return h;
    },
    gG: function (a) {
      var b = this.C.node.controllers;
      if (null != b)
        if (0 < (this.Zf & (1 << a)))
          for (; null != b; ) {
            if (b.type == ub.TYPE) {
              var c = b;
              if (c.key == a) return (c.Ee = J(this, this.Ee)), (c.Yd = J(this, this.Yd)), c;
            }
            b = b.next;
          }
        else
          for (; null != b; ) {
            if (b.type == ub.TYPE && !b.fe) return (c = b), (c.Ee = J(this, this.Ee)), (c.Yd = J(this, this.Yd)), c;
            b = b.next;
          }
      c = new ub();
      c.Ee = J(this, this.Ee);
      c.Yd = J(this, this.Yd);
      this.C.node.ya(c);
      return c;
    },
    Yd: function (a, b) {
      var c = this.C;
      switch (a) {
        case 0:
          c.L(b);
          break;
        case 1:
          c.O(b);
          break;
        case 2:
          c.Tg(b);
          break;
        case 3:
          c.hm(b);
          break;
        case 4:
          c.M(b);
          break;
        case 5:
          c.pc(b);
          break;
        case 6:
          c.fa(b);
      }
    },
    Ee: function (a) {
      this.Zf &= ~(1 << a);
      if (null != this.dj[a]) {
        var b = this.dj[a];
        this.dj[a] = null;
        b();
      }
    },
    s: Gc,
  };
  Ud.i = !0;
  Ud.prototype = {
    R: function () {
      null != this.za &&
        ((this.sf = this.za = null),
        this.ue.R(),
        (this.ue = null),
        this.frames.R(),
        (this.frames = null),
        null != this.Ah && (this.Ah.R(), (this.Ah = null)),
        (this.$q = null));
    },
    IF: function () {
      var a = Array(this.wo),
        b = 0,
        c = this.ue,
        d = c.m,
        e = 0;
      for (c = c.o; e < c; ) {
        var f = d[e++];
        a[b++] = 4096 > f ? this.frames.m[f] : this.Ah.get(f);
      }
      return a;
    },
    Dn: function (a) {
      return 4096 >= a ? this.frames.m[a] : this.Ah.get(a);
    },
    Wx: function (a) {
      return this.$q.P[a];
    },
    s: Ud,
  };
  Ef.i = !0;
  Ef.prototype = { s: Ef };
  Td.i = !0;
  Td.prototype = { s: Td };
  Sd.i = !0;
  Sd.prototype = { s: Sd };
  md.i = !0;
  md.rc = !0;
  md.prototype = { s: md };
  Rd.i = !0;
  Rd.Aa = [md];
  Rd.prototype = {
    er: function () {
      var a = new Td(),
        b = new Bf(this.src),
        c = new Cf();
      c.Vl = b.info.size;
      c.lineHeight = b.Xi.lineHeight;
      c.Ni = b.Xi.Ni;
      c.VL = b.Xi.bJ;
      c.UL = b.Xi.$I;
      c.padding[0] = b.info.padding.ZK;
      c.padding[1] = b.info.padding.right;
      c.padding[2] = b.info.padding.xd;
      c.padding[3] = b.info.padding.left;
      a.sf = c;
      for (var d = [], e = 0, f = 0, g = b.Iw; f < g.length; ) {
        var h = g[f];
        ++f;
        var l = h.id,
          k = new Df();
        k.code = l;
        k.x = h.x;
        k.y = h.y;
        k.offsetX = h.nL;
        k.offsetY = h.oL;
        k.Pk = h.mL;
        k.w = h.width;
        k.P = h.height;
        0 < k.Pk && (c.advance = k.Pk);
        d.push(k);
        l > e && (e = l);
        h = new Sd();
        a.frames.push(h);
        h.id = l;
        h.name = String.fromCodePoint(l);
        h.Ua.x = k.x;
        h.Ua.y = k.y;
        h.Ua.width = k.w;
        h.Ua.height = k.P;
        h.ba.x = k.w;
        h.ba.y = k.P;
      }
      l = c.Wm = Array(e);
      f = 0;
      for (g = e; f < g; ) l[f++] = null;
      for (f = 0; f < d.length; ) (e = d[f]), ++f, (l[e.code] = e);
      f = 0;
      for (g = b.dz; f < g.length; ) {
        e = g[f];
        ++f;
        b = c.wj;
        k = (e.second << 16) | e.first;
        h = e.amount;
        b.o == b.S && b.grow();
        d = b.m;
        l = b.xj;
        e = 3 * b.ze;
        b.ze = b.jd[b.ze];
        d[e] = k;
        d[e + 1] = h;
        h = (73856093 * k) & b.Dl;
        k = l[h];
        if (-1 == k) l[h] = e;
        else {
          for (l = d[k + 2]; -1 != l; ) (k = l), (l = d[l + 2]);
          d[k + 2] = e;
        }
        b.o++;
      }
      return a;
    },
    s: Rd,
  };
  Df.i = !0;
  Df.prototype = { s: Df };
  Cf.i = !0;
  Cf.prototype = { s: Cf };
  Bf.i = !0;
  Bf.prototype = {
    $H: function (a) {
      a = new qb(a);
      var b = a.ea(),
        c = a.ea(),
        d = a.ea();
      if (66 != b || 77 != c || 70 != d) throw 36;
      if (3 != a.ea()) throw 37;
      a.ea();
      b = a.Hd();
      c = a.Gd();
      a.ea();
      a.ea();
      a.ac();
      a.ea();
      d = a.ea();
      var e = a.ea(),
        f = a.ea(),
        g = a.ea();
      a.ea();
      a.ea();
      a.ea();
      a.Rl(b - 14);
      this.info = { size: P.abs(c), padding: { ZK: d, right: e, xd: f, left: g } };
      a.ea();
      a.Hd();
      b = a.ac();
      c = a.ac();
      d = a.ac();
      e = a.ac();
      a.ac();
      a.ea();
      a.ea();
      a.ea();
      a.ea();
      a.ea();
      this.Xi = { lineHeight: b, Ni: c, bJ: d, $I: e };
      a.ea();
      b = a.Hd();
      c = a.va;
      a.zA(0);
      c = a.va - c;
      for (b -= c; 0 < b; ) a.zA(0), (b -= c);
      a.ea();
      b = (a.Hd() / 20) | 0;
      for (c = 0; c < b; ) {
        ++c;
        d = a.Hd();
        e = a.ac();
        f = a.ac();
        g = a.ac();
        var h = a.ac(),
          l = a.Gd(),
          k = a.Gd(),
          m = a.Gd();
        a.ea();
        a.ea();
        this.Iw.push({ id: d, x: e, y: f, width: g, height: h, nL: l, oL: k, mL: m });
      }
      if (a.va != a.zk)
        for (a.ea(), a.Hd(); a.va < a.zk; )
          (b = a.Hd()), (c = a.Hd()), (d = a.Gd()), this.dz.push({ first: b, second: c, amount: d });
    },
    s: Bf,
  };
  Ec.i = !0;
  Ec.Aa = [md];
  Ec.prototype = {
    er: function () {
      var a = new Td(),
        b = JSON.parse(this.json),
        c = U.Z(b, "meta");
      null != c && (a.scale = U.Z(c, "scale"));
      c = 0;
      b = U.Z(b, "frames");
      for (var d = 0; d < b.length; ) {
        var e = b[d];
        ++d;
        var f = new Sd();
        a.frames.push(f);
        f.id = c++;
        f.name = U.Z(e, "filename");
        var g = U.Z(e, "frame");
        f.Ua.x = U.Z(g, "x");
        f.Ua.y = U.Z(g, "y");
        f.Ua.width = U.Z(g, "w");
        f.Ua.height = U.Z(g, "h");
        Object.prototype.hasOwnProperty.call(e, "trimmed") && (f.Bk = U.Z(e, "trimmed"));
        Object.prototype.hasOwnProperty.call(e, "sourceSize")
          ? ((g = U.Z(e, "sourceSize")), (f.ba.x = U.Z(g, "w")), (f.ba.y = U.Z(g, "h")))
          : ((f.ba.x = f.Ua.width), (f.ba.y = f.Ua.height));
        Object.prototype.hasOwnProperty.call(e, "spriteSourceSize")
          ? ((g = U.Z(e, "spriteSourceSize")), (f.Xg.x = U.Z(g, "x")), (f.Xg.y = U.Z(g, "y")))
          : ((f.Xg.x = 0), (f.Xg.y = 0));
      }
      return a;
    },
    s: Ec,
  };
  Af.i = !0;
  Af.prototype = {
    ka: function (a) {
      this.ab = a;
      this.reset();
    },
    reset: function () {
      this.Hh = this.va = 0;
      this.Rf = this.We = null;
    },
    wH: function () {
      function a() {
        var f = b.AE,
          g = fa.Ri(b.ab, b.va++),
          h = fa.Ri(b.ab, b.va);
        55296 <= g &&
          56319 >= g &&
          56320 <= h &&
          57343 >= h &&
          (b.va++, (g = 1024 * (g - 55296) + (h - 56320) + 65536));
        f = f.get(g);
        switch (f) {
          case 32:
            return 5;
          case 29:
          case 36:
          case 37:
          case 39:
            return 12;
          default:
            return f;
        }
      }
      var b = this,
        c = Pg.ZH,
        d = -1;
      if (null == this.We) {
        var e = a();
        switch (e) {
          case 31:
            e = 17;
            break;
          case 34:
          case 35:
            e = 30;
            break;
          case 38:
            e = 22;
        }
        this.We = e;
      }
      for (; this.va < this.ab.length; ) {
        this.Hh = this.va;
        e = this.Rf;
        this.Rf = a();
        if (30 == this.We || (33 == this.We && 34 != this.Rf)) {
          e = this.Rf;
          switch (e) {
            case 32:
              c = 5;
              break;
            case 29:
            case 36:
            case 37:
            case 39:
              c = 12;
              break;
            default:
              c = e;
          }
          switch (c) {
            case 31:
              e = 17;
              break;
            case 34:
            case 35:
              e = 30;
              break;
            case 38:
              e = 22;
              break;
            default:
              e = c;
          }
          this.We = e;
          return { position: this.Hh, required: !0 };
        }
        switch (this.Rf) {
          case 31:
            d = 17;
            break;
          case 33:
            d = 33;
            break;
          case 30:
          case 34:
          case 35:
            d = 30;
            break;
          case 38:
            d = this.We;
            break;
          default:
            d = -1;
        }
        if (-1 != d) {
          if (((this.We = d), 31 == this.Rf)) return { position: this.Hh, required: !1 };
        } else {
          d = !1;
          switch (c[this.We][this.Rf]) {
            case 0:
              d = !0;
              break;
            case 1:
              d = 38 == e;
              break;
            case 2:
              d = 38 == e;
              if (!d) continue;
              break;
            case 3:
              if (38 != e) continue;
          }
          this.We = this.Rf;
          if (d) return { position: this.Hh, required: !1 };
        }
      }
      return this.va >= this.ab.length && this.Hh < this.ab.length
        ? ((this.Hh = this.ab.length), { position: this.ab.length, required: !1 })
        : null;
    },
    s: Af,
  };
  Pg.i = !0;
  Bb.i = !0;
  Bb.Ic = function (a, b) {
    function c(r, L, O) {
      for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
      var D = r.tag & 31;
      r.tag >>>= 5;
      r.T -= 5;
      for (var K = D + 257; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
      D = r.tag & 31;
      r.tag >>>= 5;
      r.T -= 5;
      for (var Y = D + 1; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
      D = r.tag & 15;
      r.tag >>>= 4;
      r.T -= 4;
      for (var V = D + 4, T = 0; 19 > T; ) w[T++] = 0;
      for (T = 0; T < V; ) {
        for (var ca = w, Ba = t[T++]; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
        D = r.tag & 7;
        r.tag >>>= 3;
        r.T -= 3;
        ca[Ba] = D;
      }
      for (T = 0; 16 > T; ) v.table[T++] = 0;
      for (T = 0; 19 > T; ) (D = v.table), (ca = w[T++]), D[ca]++;
      for (T = ca = v.table[0] = 0; 16 > T; ) (D = T++), (n[D] = ca), (ca += v.table[D]);
      for (T = 0; 19 > T; ) (D = T++), 0 != w[D] && ((V = n), (ca = w[D]), (v.ee[V[ca]++] = D));
      for (T = 0; T < K + Y; ) {
        for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
        V = D = ca = 0;
        for (Ba = r.tag; (D = 2 * D + (Ba & 1)), (Ba >>>= 1), ++V, (ca += v.table[V]), (D -= v.table[V]), 0 <= D; );
        r.tag = Ba;
        r.T -= V;
        ca = v.ee[ca + D];
        switch (ca) {
          case 16:
            for (ca = w[T - 1]; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
            D = r.tag & 3;
            r.tag >>>= 2;
            r.T -= 2;
            for (D += 3; 0 < D; ) (w[T++] = ca), --D;
            break;
          case 17:
            for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
            ca = r.tag & 7;
            r.tag >>>= 3;
            r.T -= 3;
            for (ca += 3; 0 < ca; ) (w[T++] = 0), --ca;
            break;
          case 18:
            for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
            ca = r.tag & 127;
            r.tag >>>= 7;
            r.T -= 7;
            for (ca += 11; 0 < ca; ) (w[T++] = 0), --ca;
            break;
          default:
            w[T++] = ca;
        }
      }
      for (T = 0; 16 > T; ) L.table[T++] = 0;
      for (T = 0; T < K; ) (ca = w[T++]), L.table[ca]++;
      for (T = ca = L.table[0] = 0; 16 > T; ) (D = T++), (n[D] = ca), (ca += L.table[D]);
      for (T = 0; T < K; ) (D = T++), 0 != w[D] && ((V = n), (ca = w[D]), (L.ee[V[ca]++] = D));
      for (T = 0; 16 > T; ) O.table[T++] = 0;
      for (T = 0; T < Y; ) (ca = w[K + T++]), O.table[ca]++;
      for (T = ca = O.table[0] = 0; 16 > T; ) (D = T++), (n[D] = ca), (ca += O.table[D]);
      for (T = 0; T < Y; ) (D = T++), 0 != w[K + D] && ((V = n), (ca = w[K + D]), (O.ee[V[ca]++] = D));
    }
    function d(r, L, O) {
      for (;;) {
        for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
        for (
          var D = 0, K = 0, Y = 0, V = r.tag;
          (K = 2 * K + (V & 1)), (V >>>= 1), ++Y, (D += L.table[Y]), (K -= L.table[Y]), 0 <= K;

        );
        r.tag = V;
        r.T -= Y;
        K = L.ee[D + K];
        if (256 == K) return Bb.Tp;
        if (256 > K) r.tg.b[r.cj++] = K;
        else {
          K -= 257;
          D = h[K];
          K = l[K];
          if (0 == D) D = K;
          else {
            for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
            Y = r.tag & (65535 >>> (16 - D));
            r.tag >>>= D;
            r.T -= D;
            D = Y + K;
          }
          for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
          V = Y = K = 0;
          for (var T = r.tag; (Y = 2 * Y + (T & 1)), (T >>>= 1), ++V, (K += O.table[V]), (Y -= O.table[V]), 0 <= Y; );
          r.tag = T;
          r.T -= V;
          V = O.ee[K + Y];
          K = r.cj;
          Y = k[V];
          V = m[V];
          if (0 == Y) Y = V;
          else {
            for (; 24 > r.T; ) (r.tag |= r.source.b[r.sourceIndex++] << r.T), (r.T += 8);
            T = r.tag & (65535 >>> (16 - Y));
            r.tag >>>= Y;
            r.T -= Y;
            Y = T + V;
          }
          K = Y = K - Y;
          for (D = Y + D; K < D; ) (Y = r.tg.b[K++]), (r.tg.b[r.cj++] = Y);
        }
      }
    }
    function e(r) {
      for (; 8 < r.T; ) r.sourceIndex--, (r.T -= 8);
      var L = r.source.b[r.sourceIndex + 1];
      L = 256 * L + r.source.b[r.sourceIndex];
      var O = r.source.b[r.sourceIndex + 3];
      O = 256 * O + r.source.b[r.sourceIndex + 2];
      if (L != (~O & 65535)) return Bb.Wv;
      for (r.sourceIndex += 4; 0 < L; ) (O = r.source.b[r.sourceIndex++]), (r.tg.b[r.cj++] = O), --L;
      r.T = 0;
      return Bb.Tp;
    }
    for (var f = [], g = 0; 30 > g; ) ++g, f.push(0);
    var h = f;
    f = [];
    for (g = 0; 30 > g; ) ++g, f.push(0);
    var l = f;
    f = [];
    for (g = 0; 30 > g; ) ++g, f.push(0);
    var k = f;
    f = [];
    for (g = 0; 30 > g; ) ++g, f.push(0);
    var m = f,
      t = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    f = [];
    for (g = 0; 16 > g; ) ++g, f.push(0);
    var n = f;
    f = [];
    for (g = 0; 320 > g; ) ++g, f.push(0);
    var w = f,
      v = new ic();
    g = new ic();
    var F = new ic();
    a = new zf(a, b);
    for (f = 0; 7 > f; ) g.table[f++] = 0;
    g.table[7] = 24;
    g.table[8] = 152;
    g.table[9] = 112;
    for (f = 0; 24 > f; ) (b = f++), (g.ee[b] = 256 + b);
    for (f = 0; 144 > f; ) (b = f++), (g.ee[24 + b] = b);
    for (f = 0; 8 > f; ) (b = f++), (g.ee[168 + b] = 280 + b);
    for (f = 0; 112 > f; ) (b = f++), (g.ee[176 + b] = 144 + b);
    for (f = 0; 5 > f; ) F.table[f++] = 0;
    F.table[5] = 32;
    for (f = 0; 32 > f; ) (b = f++), (F.ee[b] = b);
    for (f = 0; 4 > f; ) h[f++] = 0;
    for (f = 0; 26 > f; ) (b = f++), (h[b + 4] = (b / 4) | 0);
    var I = 3;
    for (f = 0; 30 > f; ) (b = f++), (l[b] = I), (I += 1 << h[b]);
    for (f = 0; 2 > f; ) k[f++] = 0;
    for (f = 0; 28 > f; ) (b = f++), (k[b + 2] = (b / 2) | 0);
    I = 1;
    for (f = 0; 30 > f; ) (b = f++), (m[b] = I), (I += 1 << k[b]);
    h[28] = 0;
    for (l[28] = 258; ; ) {
      0 == a.T-- && ((a.tag = a.source.b[a.sourceIndex++]), (a.T = 7));
      f = a.tag & 1;
      for (a.tag >>>= 1; 24 > a.T; ) (a.tag |= a.source.b[a.sourceIndex++] << a.T), (a.T += 8);
      b = a.tag & 3;
      a.tag >>>= 2;
      a.T -= 2;
      switch (b) {
        case 0:
          b = e(a);
          break;
        case 1:
          b = d(a, g, F);
          break;
        case 2:
          c(a, a.nz, a.ux);
          b = d(a, a.nz, a.ux);
          break;
        default:
          b = Bb.Wv;
      }
      if (b != Bb.Tp) throw 38;
      if (0 != f) break;
    }
    a.cj < a.tg.length && (a.tg = a.tg.sub(0, a.cj));
    return a.tg;
  };
  ic.i = !0;
  ic.prototype = { s: ic };
  zf.i = !0;
  zf.prototype = { s: zf };
  ld.i = !0;
  ld.prototype = {
    get: function (a) {
      var b = this.data;
      if (0 > a || 1114111 < a) return this.iF;
      if (55296 > a || (56319 < a && 65535 >= a)) {
        var c = (b[a >> 5] << 2) + (a & 31);
        return b[c];
      }
      return 65535 >= a
        ? ((c = (b[2048 + ((a - 55296) >> 5)] << 2) + (a & 31)), b[c])
        : a < this.xG
        ? ((c = b[2080 + (a >> 11)]), (c = b[c + ((a >> 5) & 63)]), b[(c << 2) + (a & 31)])
        : b[this.data.length - 4];
    },
    s: ld,
  };
  Nb.pu |= 0;
  null == String.fromCodePoint &&
    (String.fromCodePoint = function (a) {
      return 65536 > a
        ? String.fromCharCode(a)
        : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320);
    });
  String.prototype.s = String;
  String.i = !0;
  Array.i = !0;
  Date.prototype.s = Date;
  Date.i = "Date";
  var ci = {},
    ai = {},
    bi = Number,
    $h = Boolean,
    di = {},
    ei = {};
  "undefined" != typeof performance &&
    "function" == typeof performance.now &&
    (fa.now = performance.now.bind(performance));
  re.content = [];
  ta.HD = {}.toString;
  null == ArrayBuffer.prototype.slice && (ArrayBuffer.prototype.slice = Sg.UJ);
  A.next = 0;
  gd.VERSION = new gd("1.3.44");
  la.VERSION = new gd("1.3.44");
  cb.vC = !0;
  cb.Qs = !1;
  Cc.Wn = !1;
  G.cr = !1;
  G.xf = !1;
  S.FB = !0;
  bb.bk = new Kg(
    function () {
      return Object.create(bb.prototype);
    },
    null,
    128
  ).lI(128);
  Pa.count = 0;
  Ma.total = 0;
  Ma.ai = new Pa();
  Ma.Kr = new Z(512);
  Ha.time = 0;
  Ha.Yk = 0.016666666666666666;
  Ha.Ix = 0;
  Ha.pm = 1;
  Ha.uK = 0;
  x.sa();
  x.Ki =
    "oops.png meta/text.png meta/sprites.png meta/layout.json meta/bg.jpg meta/achievements.png loader/sprites.png loader/bg.jpg lang/strings_{language}.txt core/treetop.png core/text.png core/squirrel.png core/sprites.png core/pole_flames.png core/pergament.png core/green.png core/clockface.png core/bubble_pop.png core/bubble_paint.png core/bubble_flames.png core/bubble_burst_fireball.png core/bubble_burst_bomb.png core/bomb.png core/bg.jpg audio/{audio}/sounds.{audio} audio/{audio}/music_meta.{audio} audio/{audio}/music_game.{audio}".split(
      " "
    );
  x.MAX = 27;
  x.nI = [6, 7, 8];
  cc.wC = "0123456789abcdef".split("");
  dd.state = new kb();
  Ca.enabled = !0;
  X.Lm = void 0;
  X.active = !1;
  X.ai = new Pa();
  bd.CD = 65535;
  yc.Nx = !0;
  var Th = [0, 1, 4],
    vh = [0, 0.3, 0.5, 1],
    Yh = [0, 0.3, 0.4, 17.5],
    Xh = [20, 30, 45],
    Wh = [5e3, 1e4, 2e4],
    Vh = [10, 25],
    Uh = [10, 20, 100, 100],
    Rh = [5, 10, 8, 16],
    Sh = [5, 10, 8, 16];
  q.data =
    "AAAAAAAAUAAAAgAA5gAAAwAA4AEABAAAPgMABQAAAAUABgAAJgcABwEBsAkACAIBngwACQMB8A8ACgEFphMACwIBwBcADAMBPhwADQEBICEADgEBZiYADwMBECwAEAIBHjIAEQEBkDgAEgIBZj8AEwMBoEYAFAQDPk4AFQECQFYAFgICpl4AFwMCcGcAGAICnnAAGQECMHoAGgMCJoQAGwICgI4AHAQCPpkAHQECYKQAHgQF5q8AHwQD0LsAIAIDHsgAIQED0NQAIgQD5uEAIwEDYO8AJAIDPv0AJQQDgAsBJgMDJhoBJwIDMCkBKAMFnjgBKQEEcEgBKgMEplgBKwQEQGkBLAQEPnoBLQIEoIsBLgMEZp0BLwEEkK8BMAIEHsIBMQMEENUBMgQKZugBMwIFIPwBNAEFPhACNQQFwCQCNgEFpjkCNwIF8E4COAQFnmQCOQIFsHoCOgQFJpECOwMFAKgCPAEKPr8CPQQF4NYCPgEF5u4CPwIFUAcDQAMFHiADQQEFUDkDQgMF5lIDQwIF4GwDRAEFPocDRQMFAKIDRgEKJr0DRwIFsNgDSAQFnvQDSQMF8BAESgQFpi0ESwIFwEoETAMFPmgETQEFIIYETgIFZqQETwQFEMMEUAEKHuIEUQIFkAEFUgMFZiEFUwEFoEEFVAIFPmIFVQQFQIMFVgEFpqQFVwQFcMYFWAEFnugFWQMFMAsGWgEKJi4GWwMFgFEGXAIFPnUGXQMFYJkGXgQF5r0GXwMF0OIGYAEFHggHYQQF0C0HYgIF5lMHYwQFYHoHZAMZPqEHZAQKgMgHZAIKJvAHZAEKMBgIZAMKnkAIZAEKcGkIZAQKppIIZAMKQLwIZAEKPuYIZAMKoBAJZAEZZjsJZAIKkGYJZAQKHpIJZAEKEL4JZAIKZuoJZAQKIBcKZAMKPkQKZAEKwHEKZAIKpp8KZAQK8M0KZAEZnvwKZAIKsCsLZAMKJlsLZAEKAIsLZAIKPrsLZAQK4OsLZAEK5hwMZAIKUE4MZAQKHoAMZAEKULIMZAQZ5uQMZAMK4BcNZAQKPksNZAIKAH8NZAQKJrMNZAEKsOcNZAMKnhwOZAQK8FEOZAIKpocOZAMKwL0OZAIZPvQOZAMKICsPZAIKZmIPZAEKEJoPZAIKHtIPZAEKkAoQZAMKZkMQZAQKoHwQZAIKPrYQZAEKQPAQZAMZpioRZAIPcGURZAEPnqARZAIPMNwRZAQPJhgSZAIPgFQSZAQPPpESZAMPYM4SZAQP5gsTZAIP0EkTZAEZHogTZAQP0MYTZAIP5gUUZAEPYEUUZAIPPoUUZAMPgMUUZAQPJgYVZAQPMEcVZAMPnogVZAQPcMoVZAEZpgwWZAMPQE8WZAIPPpIWZAQPoNUWZAEPZhkXZAIPkF0XZAEPHqIXZAIPEOcXZAEPZiwYZAMPIHIYZAIZPrgYZAQPwP4YZAEPpkUZZAIP8IwZZAEPntQZZAIPsBwaZAQPJmUaZAIPAK4aZAMPPvcaZAQP4EAbZAMZ5oobZAEPUNUbZAIPHiAcZAQPUGscZAMP5rYcZAIP4AIdZAQPPk8dZAEPAJwdZAQPJukdZAMPsDYeZAEy";
  q.Gm = 0;
  q.tf = 0;
  q.Dm = 0;
  q.Fm = !1;
  q.aq = !1;
  q.ge = 1;
  q.ig = 3e3;
  q.zc = [-1, -1, -1, -1];
  q.Jk = 0;
  q.Li = 0;
  q.Kk = 0;
  q.Wp = 0;
  q.Xp = !1;
  q.Yp = !1;
  q.Em = new Ag();
  var Je = 60,
    bh = 0,
    Ng = !1,
    Og = !1,
    uh = !0,
    wh = 1,
    Md = !1,
    Od = !1,
    Vg = !1;
  z.DC = 1001;
  z.EC = 1002;
  z.jv = 1003;
  z.FC = 1004;
  z.GC = 1005;
  z.HC = 1006;
  z.IC = 1007;
  z.JC = 1008;
  z.KC = 1009;
  z.LC = 1010;
  z.MC = 1011;
  z.NC = 1013;
  z.OC = 1014;
  z.PC = 1015;
  z.QC = 1016;
  z.Rp = 1017;
  z.RC = 1018;
  z.Bm = 1019;
  z.SC = 1020;
  z.TC = 1021;
  z.UC = 1022;
  z.kv = 1023;
  z.VC = 1024;
  z.WC = 1025;
  z.XC = 1026;
  z.YC = 1027;
  z.ZC = 1028;
  z.$C = 1029;
  z.aD = 1030;
  z.bD = 1031;
  z.cD = 1032;
  z.dD = 1033;
  z.eD = 1034;
  z.fD = 1036;
  z.gD = 1037;
  z.lv = 1038;
  z.hD = 1039;
  z.iD = 1040;
  z.jD = 1041;
  z.kD = 1042;
  z.lD = 1043;
  z.mD = 1044;
  z.mv = 1045;
  z.nD = 1046;
  z.oD = 1047;
  z.pD = 1048;
  z.qD = 1049;
  z.rD = 1050;
  z.sD = 1051;
  z.tD = 1052;
  z.Gk = 1054;
  z.nv = 1057;
  var xh = -1,
    yh = -1,
    zh = -1,
    Ah = -1,
    Bh = -1,
    Ch = -1,
    Dh = -1,
    Eh = -1,
    Fh = -1,
    vf = -1,
    Nd = -1,
    ch = -1,
    Gh = -1,
    Hh = -1,
    Ug = -1,
    Ih = -1,
    Jh = -1,
    Kh = -1,
    ob = -1,
    Pd = -1,
    Lh = -1,
    jb = -1,
    wf = -1,
    $b = -1,
    Mh = -1,
    Na = -1,
    dh = -1;
  ea.VJ = !1;
  ea.Bd = 33;
  ea.KK = "none";
  ea.JK = "none";
  ea.cE = "none";
  ea.rE = "destroy";
  ea.qE = "reload";
  ea.oq = 25;
  ea.sE = !0;
  ea.nE = 0.3;
  ea.oE = 0;
  ea.sH = 80;
  ea.Tm = -1;
  ea.Ve = { enabled: !0, la: 3, jH: 3, Ob: 0.2, Vg: 500, WJ: !1 };
  ea.zy = !0;
  yb.count = 0;
  ad.Kc = new Z();
  ja.X = 0;
  Fa.BC = 0;
  Fa.fv = 1;
  Fa.Qp = 2;
  Fa.zC = 3;
  Fa.AC = 4;
  Fa.Am = 7;
  Fa.counter = Array(Fa.Am);
  $c.TYPE = ja.Jb();
  Kb.TYPE = ja.Jb();
  Zc.TYPE = ja.Jb();
  nb.TYPE = ja.Jb();
  Id.TYPE = ja.Jb();
  Yc.TYPE = ja.Jb();
  u.un = !1;
  u.enabled = !0;
  u.ys = 0;
  u.ss = [];
  u.data =
    "ClearMinAmountOfBubblesInRound:1000,PlayMinutesTotal:60,EarnMinPointsInRound:500000,EarnMinPointsWithSingleShot:30000,PlayGameWithAllBoosters:4,ImproveScoreTimes:5,PaintMinAmountOfBubbles:100,BlastAwayMinAmountOfBubbles:300,ReachMinCombo:50,UnlockAllBoosters:4,ClearMinAmountOfBubblesWithFireball:50,ShootMinAmountOfFireballs:5,ReachLevel:30,DropMinGrapeSize:40,SaveMinAmountCoins:5000,SpendMinAmountCoins:10000,ExtendGameTime:20,PlayMinConsecutiveDays:5,ShootMinAmountPaintTotal:100,ShootMinAmountBombsTotal:100";
  var Ab = "0001";
  aa.Hp = 1;
  aa.zm = 2;
  aa.Hi = 4;
  aa.Jp = 8;
  aa.Ep = 16;
  aa.Fp = 32;
  aa.Fk = 64;
  aa.Ip = 128;
  aa.Gp = 256;
  wc.TYPE = ja.Jb();
  Ea.Ku = [5, 6];
  Ea.Lu = [2, 4];
  Ea.Mu = [1, 2];
  Da.cache = new Ya();
  pa.X = 0;
  Vc.TYPE = pa.Jb();
  bc.Ii = 0;
  mb.Hx = !0;
  mb.Gz = !1;
  Jb.Wk = -1;
  tc.TYPE = "grid";
  sc.TYPE = "split";
  Wf.Xu = [
    0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575,
    2097151, 4194303, 8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647,
    -1,
  ];
  pb.ZB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  pb.Nu = ra.Cs(pb.ZB);
  qc.wr = new DataView(new ArrayBuffer(8));
  da.bo = "en";
  oc.instance = new oc();
  var Zh = !0;
  Xa.Cm = "source-over";
  Xa.uD = "source-atop";
  Xa.mC = "destination-over";
  lb.mz = 0;
  Wb.BG = 1;
  Wb.eF = !0;
  Wb.os = 256;
  ma.X = 0;
  ma.Ii = 0;
  ma.Ek = 0;
  ma.Ru = 10;
  qd.TYPE = ma.Jb();
  ub.TYPE = ma.Jb();
  Lc.TYPE = pa.Jb();
  tb.TYPE = pa.Jb();
  Sa.TYPE = pa.Jb();
  Kc.TYPE = pa.Jb();
  Eb.gv = new Eb(fc.Wu);
  Eb.CC = new Eb(fc.Vu);
  fb.Qu = 400;
  fb.Pu = 640;
  fb.Ou = 480;
  ya.count = 0;
  ya.lC = 1;
  db.count = 0;
  sb.count = 0;
  Ra.np = new Pb();
  Cb.CB = new od();
  Cb.DB = new od();
  na.X = 0;
  na.count = 0;
  Q.TYPE = na.Jb();
  Q.count = 0;
  ia.TYPE = na.Jb();
  ia.count = 0;
  Ob.TYPE = ma.Jb();
  va.TYPE = na.Jb();
  va.count = 0;
  ua.Jt = new Pb();
  Pg.ZH = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4],
    [0, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [4, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 1, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 0, 1, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 1, 0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 4, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
    [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 1, 1, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 1, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 0, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 1, 1, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 1, 0],
    [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 1],
  ];
  Bb.Tp = 0;
  Bb.Wv = -3;
  ld.OK =
    "AA4IAAAAAAAAAhqg5VV7NJtZvz7fTC8zU5deplUlMrQoWqmqahD5So0aipYWrUhVFSVBQ10iSTtUtW6nKDVF6k7d75eQfEUbFcQ9KiFS90tQEolcP23nrLPmO+esr/+f39rr/a293t/e7/P8nmfvlz0O6RvrBJADtbBNaD88IOKTOmOrCqhu9zE770vc1pBV/xL5dxj2V7Zj4FGSomFKStCWNlV7hG1VabZfZ1LaHbFrRwzzLjzPoi1UHDnlV/lWbhgIIJvLBp/pu7AHEdRnIY+ROdXxg4fNpMdTxVnnm08OjozejAVsBqwqz8kddGRlRxsd8c55dNZoPuex6a7Dt6L0NNb03sqgTlR2/OT7eTt0Y0WnpUXxLsp5SMANc4DsmX4zJUBQvznwexm9tsMH+C9uRYMPOd96ZHB29NZjCIM2nfO7tsmQveX3l2r7ft0N4/SRJ7kO6Y8ZCaeuUQ4gMTZ67cp7TgxvlNDsPgOBdZi2YTam5Q7m3+00l+XG7PrDe6YoPmHgK+yLih7fAR16ZFCeD9WvOVt+gfNW/KT5/M6rb/9KERt+N1lad5RneVjzxXHsLofuU+TvrEsr3+26sVz5WJh6L/svoPK3qepFH9bysDljWtD1F7KrxzW1i9r+e/NLxV/acts7zuo304J9+t3Pd6Y6u8f3EAqxNRgv5DZjaI3unyvkvHPya/v3mWVYOC38qBq11+yHZ2bAyP1HbkV92vdno7r2lxz9UwCdCJVfd14NLcpO2CadHS/XPJ9doXgz5vLv/1OBVS3gX0D9n6LiNIDfpilO9RsLgZ2W/wIy8W/Rh93jfoz4qmRV2xElv6p2lRXQdO6/Cv8f5nGn3u0wLXjhnvClabL1o+7yvIpvLfT/xsKG30y/sTvq30ia9Czxp9dr9v/e7Yn/O0QJXxxBOJmceP/DBFa1q1v6oudn/e6qc/37dUoNvnYL4plQ9OoneYOh/r8fOFm7yl7FETHY9dXd5K2n/qEc53dOEe1TTJcvCfp1dpTC334l0vyaFL6mttNEbFjzO+ZV2mLk0qc3BrxJ4d9gweMmjRorxb7vic0rSq6D4wzAyFWas1TqPE0sLI8XLAryC8tPChaN3ALEZSWmtB34SyZcxXYn/E4Tg0LeMIPhgPKD9zyHGMxxhxnDDih7eI86xECTM8zodUCdgffUmRh4rQ8zyA6ow/Aei+01a8OMfziQQ+GAEkhwN/cqUFYAVzA9ex4n6jgtsiMvXf5BtXxEU4hSphvx3v8+9au8eEekEEpkrkne/zB1M+HAPuXIz3paxKlfe8aDMfGWAX6Md6PuuAdKHFVH++Ed5LEji94Z5zeiJIxbmWeN7rr1/ZcaBl5/nimdHsHgIH/ssyLUXZ4fDQ46HnBb+hQqG8yNiKRrXL/b1IPYDUsu3dFKtRMcjqlRvONd4xBvOufx2cUHuk8pmG1D7PyOQmUmluisVFS9OWS8fPIe8LiCtjwJKnEC9hrS9uKmISI3Wa5+vdXUG9dtyfr7g/oJv2wbzeZU838G6mEvntUb3SVV/fBZ6H/sL+lElzeRrHy2Xbe7UWX1q5sgOQ81rv+2baej4fP4m5Mf/GkoxfDtT3++KP7do9Jn26aa6xAhCf5L9RZVfkWKCcjI1eYbm2plvTEqkDxKC402bGzXCYaGnuALHabBT1dFLuOSB7RorOPEhZah1NjZIgR/UFGfK3p1ElYnevOMBDLURdpIjrI+qZk4sffGbRFiXuEmdFjiAODlQCJvIaB1rW61Ljg3y4eS4LAcSgDxxZQs0DYa15wA032Z+lGUfpoyOrFo3mg1sRQtN/fHHCx3TrM8eTrldMbYisDLXbUDoXMLejSq0fUNuO1muX0gEa8vgyegkqiqqbC3W0S4cC9Kmt8MuS/hFO7Xei3f8rSvIjeveMM7kxjUixOrl6gJshe4JU7PhOHpfrRYvu7yoAZKa3Buyk2J+K5W+nNTz1nhJDhRUfDJLiUXxjxXCJeeaOe/r7HlBP/uURc/5efaZEPxr55Qj39rfTLkugUGyMrwo7HAglfEjDriehF1jXtwJkPoiYkYQ5aoXSA7qbCBGKq5hwtu2VkpI9xVDop/1xrC52eiIvCoPWx4lLl40jm9upvycVPfpaH9/o2D4xKXpeNjE2HPQRS+3RFaYTc4Txw7Dvq5X6JBRwzs9mvoB49BK6b+XgsZVJYiInTlSXZ+62FT18mkFVcPKCJsoF5ahb19WheZLUYsSwdrrVM3aQ2XE6SzU2xHDS6iWkodk5AF6F8WUNmmushi8aVpMPwiIfEiQWo3CApONDRjrhDiVnkaFsaP5rjIJkmsN6V26li5LNM3JxGSyKgomknTyyrhcnwv9Qcqaq5utAh44W30SWo8Q0XHKR0glPF4fWst1FUCnk2woFq3iy9fAbzcjJ8fvSjgKVOfn14RDqyQuIgaGJZuswTywdCFSa89SakMf6fe+9KaQMYQlKxiJBczuPSho4wmBjdA+ag6QUOr2GdpcbSl51Ay6khhBt5UXdrnxc7ZGMxCvz96A4oLocxh2+px+1zkyLacCGrxnPzTRSgrLKpStFpH5ppKWm7PgMKZtwgytKLOjbGCOQLTm+KOowqa1sdut9raj1CZFkZD0jbaKNLpJUarSH5Qknx1YiOxdA5L6d5sfI/unmkSF65Ic/AvtXt98Pnrdwl5vgppQ3dYzWFwknZsy6xh2llmLxpegF8ayLwniknlXRHiF4hzzrgB8jQ4wdIqcaHCEAxyJwCeGkXPBZYSrrGa4vMwZvNN9aK0F4JBOK9mQ8g8EjEbIQVwvfS2D8GuCYsdqwqSWbQrfWdTRUJMqmpnWPax4Z7E137I6brHbvjpPlfNZpF1d7PP7HB/MPHcHVKTMhLO4f3CZcaccZEOiS2DpKiQB5KXDJ+Ospcz4qTRCRxgrKEQIgUkKLTKKwskdx2DWo3bg3PEoB5h2nA24olwfKSR+QR6TAvEDi/0czhUT59RZmO1MGeKGeEfuOSPWfL+XKmhqpZmOVR9mJVNDPKOS49Lq+Um10YsBybzDMtemlPCOJEtE8zaXhsaqEs9bngSJGhlOTTMlCXly9Qv5cRN3PVLK7zoMptutf7ihutrQ/Xj7VqeCdUwleTTKklOI8Wep9h7fCY0kVtDtIWKnubWAvbNZtsRRqOYl802vebPEkZRSZc6wXOfPtpPtN5HI63EUFfsy7U/TLr8NkIzaY3vx4A28x765XZMzRZTpMk81YIMuwJ5+/zoCuZj1wGnaHObxa5rpKZj4WhT670maRw04w0e3cZW74Z0aZe2n05hjZaxm6urenz8Ef5O6Yu1J2aqYAlqsCXs5ZB5o1JJ5l3xkTVr8rJQ09NLsBqRRDT2IIjOPmcJa6xQ1R5yGP9jAsj23xYDTezdyqG8YWZ7vJBIWK56K+iDgcHimiQOTIasNSua1fOBxsKMMEKd15jxTl+3CyvGCR+UyRwuSI2XuwRIPoNNclPihfJhaq2mKkNijwYLY6feqohktukmI3KDvOpN7ItCqHHhNuKlxMfBAEO5LjW2RKh6lE5Hd1dtAOopac/Z4FdsNsjMhXz/ug8JGmbVJTA+VOBJXdrYyJcIn5+OEeoK8kWEWF+wdG8ZtZHKSquWDtDVyhFPkRVqguKFkLkKCz46hcU1SUY9oJ2Sk+dmq0kglqk4kqKT1CV9JDELPjK1WsWGkEXF87g9P98e5ff0mIupm/w6vc3kCeq04X5bgJQlcMFRjlFWmSk+kssXCAVikfeAlMuzpUvCSdXiG+dc6KrIiLxxhbEVuKf7vW7KmDQI95bZe3H9mN3/77F6fZ2Yx/F9yClllj8gXpLWLpd5+v90iOaFa9sd7Pvx0lNa1o1+bkiZ69wCiC2x9UIb6/boBCuNMB/HYR0RC6+FD9Oe5qrgQl6JbXtkaYn0wkdNhROLqyhv6cKvyMj1Fvs2o3OOKoMYTubGENLfY5F6H9d8wX1cnINsvz+wZFQu3zhWVlwJvwBEp69Dqu/ZnkBf3nIfbx4TK7zOVJH5sGJX+IMwkn1vVBn38GbpTg9bJnMcTOb5F6Ci5gOn9Fcy6Qzcu+FL6mYJJ+f2ZZJGda1VqruZ0JRXItp8X0aTjIcJgzdaXlha7q7kV4ebrMsunfsRyRa9qYuryBHA0hc1KVsKdE+oI0ljLmSAyMze8lWmc5/lQ18slyTVC/vADTc+SNM5++gztTBLz4m0aVUKcfgOEExuKVomJ7XQDZuziMDjG6JP9tgR7JXZTeo9RGetW/Xm9/TgPJpTgHACPOGvmy2mDm9fl09WeMm9sQUAXP3Su2uApeCwJVT5iWCXDgmcuTsFgU9Nm6/PusJzSbDQIMfl6INY/OAEvZRN54BSSXUClM51im6Wn9VhVamKJmzOaFJErgJcs0etFZ40LIF3EPkjFTjGmAhsd174NnOwJW8TdJ1Dja+E6Wa6FVS22Haj1DDA474EesoMP5nbspAPJLWJ8rYcP1DwCslhnn+gTFm+sS9wY+U6SogAa9tiwpoxuaFeqm2OK+uozR6SfiLCOPz36LiDlzXr6UWd7BpY6mlrNANkTOeme5EgnnAkQRTGo9T6iYxbUKfGJcI9B+ub2PcyUOgpwXbOf3bHFWtygD7FYbRhb+vkzi87dB0JeXl/vBpBUz93VtqZi7AL7C1VowTF+tGmyurw7DBcktc+UMY0E10Jw4URojf8NdaNpN6E1q4+Oz+4YePtMLy8FPRP";
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