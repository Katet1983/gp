(function(Qe, Re) {
    function Na(a) {
        this.state = 0;
        this.Ga = null;
        this.Xv = a
    }

    function Zc() {}

    function Ka() {
        Ka.Mg = this;
        z.call(this);
        this.Em = new W;
        this.type = 2
    }

    function Se(a, b, c, d) {
        this.loaded = !1;
        this.Nx = a;
        this.Ox = b;
        this.Mx = c;
        this.Fc = d
    }

    function wb(a, b) {
        null == b && (b = {});
        this.caller = a;
        this.tc = b
    }

    function Te(a) {
        this.buffer = new xb;
        this.Et = a
    }

    function Ue() {
        function a(a) {
            a = new Ve(a);
            b.entries.push(a);
            return a
        }
        this.entries = [];
        this.Jw = !0;
        this.oj = null;
        var b = this;
        a(0).set(0, ba.rm).set(1, C.Sa(Y.get("DiamondRush")));
        Za.Ob = function(b) {
            a(1).set(2,
                b)
        };
        db.Ob = function(b, d) {
            a(2).set(3, d).set(4, b.url)
        };
        Oa.Ob = function(b, d, e) {
            a(3).set(5, d).set(6, b).set(7, e.alt).set(8, e.control).set(9, e.shift)
        };
        Ea.Ob = function(c, d, e, f) {
            (2 != e || b.Jw) && a(4).set(10, c).set(11, d).set(12, e).set(13, f)
        };
        eb.Ob = function(b, d) {
            a(5).set(10, b).set(11, d)
        }
    }

    function Ve(a) {
        this.type = a;
        this.data = Object.create(null)
    }

    function Of() {}

    function Vb(a) {
        this.json = a
    }

    function We(a) {
        this.mi = [];
        this.Mi = [];
        try {
            if (a instanceof ra) this.sw(a);
            else if ("string" == typeof a)(new L('<\\?xml version="1.0"\\?>',
                "")).match(a) ? this.uw(a) : this.tw(a);
            else throw 0;
            this.ge.lineHeight < this.info.size && (this.ge.lineHeight = this.info.size)
        } catch (b) {
            throw 0;
        }
    }

    function Xe() {
        this.Li = new nc(1024);
        this.no = new Wb(1024);
        this.padding = Array(4);
        for (var a = 0; 4 > a;) this.padding[a++] = 0
    }

    function Ye() {
        this.x = this.y = this.Zj = this.C = this.offsetX = this.offsetY = this.Tn = 0;
        this.code = -1
    }

    function $c(a) {
        this.Vv = a
    }

    function oc() {}

    function ad() {
        this.fn = !1;
        var a = new I;
        a.b = 0;
        a.a = 0;
        this.Ge = a;
        a = new I;
        a.b = 0;
        a.a = 0;
        this.P = a;
        this.Ja = new pc
    }

    function bd() {
        this.He =
            null;
        this.frames = [];
        this.scale = 1
    }

    function cd(a, b) {
        this.id = b.id;
        this.name = b.name;
        var c = a.sb,
            d = c.P,
            e = b.Ja;
        a = new J;
        a.b = e.b;
        a.a = e.a;
        a.f = e.f;
        a.d = e.d;
        this.Yx = a;
        e = new J;
        e.b = a.b;
        e.a = a.a;
        e.f = a.f;
        e.d = a.d;
        this.lr = e;
        a.b /= d.b;
        a.a /= d.a;
        a.f /= d.b;
        a.d /= d.a;
        c.Vf && (e = d.b / c.ve.b, c = d.a / c.ve.a, a.b *= e, a.a *= c, a.f *= e, a.d *= c);
        (this.gn = b.fn) ? (a = b.Ge, c = new I, c.b = a.b, c.a = a.a, this.Ge = c, b = b.P, a = new I, a.b = b.b, a.a = b.a) : (a = new I, a.b = 0, a.a = 0, this.Ge = a, a = new I, a.b = b.Ja.f, a.a = b.Ja.d);
        this.P = a
    }

    function Ze(a, b) {
        this.af = new $a;
        this.sb =
            a;
        this.scale = b.scale;
        this.He = b.He;
        this.Sl = b.frames.length;
        a = new W(this.Sl);
        for (var c = 0, d = b.frames; c < d.length;) a.add(d[c++].id);
        a.sort(function(a, b) {
            return a - b
        }, !0);
        this.Zf = !0;
        c = a.c[0];
        d = 1;
        for (var e = this.Sl; d < e;) {
            if (c + 1 != a.c[d++]) {
                this.Zf = !1;
                break
            }++c
        }
        this.Zf && 16384 < a.c[a.g - 1] && (this.Zf = !1);
        if (this.Zf)
            for (this.Dl = (new W).mb(a.c[a.g - 1] + 1, null), a = 0, b = b.frames; a < b.length;) e = b[a], ++a, c = new cd(this, e), this.Dl.c[c.id] = c, d = this.af, e = e.name, null != X[e] ? d.Dc(e, c) : d.C[e] = c;
        else
            for (a = this.Sl, --a, a |= a >> 1, a |= a >>
                2, a |= a >> 4, a |= a >> 8, a |= a >> 16, this.El = new Wb(++a), a = 0, b = b.frames; a < b.length;) e = b[a], ++a, c = new cd(this, e), this.El.set(c.id, c), d = this.af, e = e.name, null != X[e] ? d.Dc(e, c) : d.C[e] = c
    }

    function Z() {}

    function $e(a) {
        this.scale = 1;
        this.Wh = this.Iv = !1;
        this.Wf = this.rp = this.Fi = !0;
        this.Vf = !1;
        this.Ji = null;
        var b = new I;
        b.b = 0;
        b.a = 0;
        this.P = b;
        this.bb = null;
        this.ve = this.P;
        if (this.Hv = null != a) {
            this.bb = a.bb;
            b = a.P;
            var c = new I;
            c.b = b.b;
            c.a = b.a;
            this.P = c;
            b = a.ve;
            c = new I;
            c.b = b.b;
            c.a = b.a;
            this.ve = c;
            this.Ji = a.Ji;
            this.Vf = a.Vf;
            this.Wf = a.Wf;
            this.rp =
                a.rp;
            this.Fi = a.Fi;
            this.Wh = a.Wh;
            this.scale = a.scale
        }
    }

    function af(a) {
        this.kg = 0;
        this.I = a
    }

    function ia() {}

    function dd() {
        this.li = new W(32);
        this.Me = new W(32)
    }

    function bf() {
        this.U = new J;
        this.overflow = !1;
        this.mo = new W(256);
        this.li = new W(64)
    }

    function cf() {
        this.zt = !1;
        this.Li = !0;
        this.lo = 0;
        this.Ep = -1;
        this.my = 0;
        this.align = -1;
        this.width = this.height = 100;
        this.size = 10;
        this.text = ""
    }

    function ed() {}

    function fd(a) {
        this.Ei = 0;
        qb.call(this, a)
    }

    function na(a, b) {
        this.Mj = this.gl = !1;
        this.Lb = !0;
        var c = new Ta("SpriteText");
        c.j |= 2048;
        ja.call(this, c, 14);
        this.Ag = new dd;
        this.Ca = new cf;
        this.dc = new bf;
        null != a && a.appendChild(this);
        null != b && (this.bc(b), this.Ca.size = this.Kd.Am);
        na.ke++
    }

    function qc(a) {
        this.repeat = -1;
        this.jh = 0;
        this.controller = null;
        this.length = -1;
        this.I = a
    }

    function gd() {
        Xb.call(this, 8)
    }

    function ka(a, b, c) {
        this.zm = -1;
        ja.call(this, new Ta(a), 2);
        this.j |= 1024;
        null != b && b.appendChild(this);
        if (null != c)
            for (a = 0; a < c.length;) this.appendChild(c[a++]);
        ka.ke++
    }

    function df(a) {
        this.Kp = a
    }

    function K(a, b, c) {
        var d = new I;
        d.b = 0;
        d.a = 0;
        this.P = d;
        this.ug =
            null;
        this.Rg = -1;
        ja.call(this, this.Tb = new qb, 5);
        null != a && a.appendChild(this);
        null != b && this.bc(b);
        null != c && this.sg(c);
        K.ke++
    }

    function ja(a, b) {
        this.dg = this.Fl = null;
        this.j = 96;
        this.Hl = !0;
        this.Sd = 1;
        this.nb = this.ob = this.ag = this.bg = this.$c = 0;
        this.Ra = this.ic = 1;
        this.va = this.wa = 0;
        this.node = a;
        this.node.client = this;
        this.type = b;
        ja.count++
    }

    function yb() {
        var a = new zb;
        a.b = 1;
        a.a = 1;
        a.f = 1;
        this.scale = a;
        a = new zb;
        a.b = 0;
        a.a = 0;
        a.f = 0;
        this.translate = a;
        a = new rc;
        sc.mf(a);
        this.ya = a;
        this.D = 15;
        sc.mf(this.ya);
        a = this.translate;
        a.b =
            0;
        a.a = 0;
        a.f = 0;
        a = this.scale;
        a.b = 1;
        a.a = 1;
        a.f = 1;
        this.D |= 63
    }

    function za() {}

    function hd() {}

    function ma() {}

    function qb(a, b) {
        fb.call(this, a, b);
        this.type = 1
    }

    function fb(a, b) {
        this.Zd = null;
        ua.call(this, a, b);
        this.j |= 512;
        this.qe = this.qo(b);
        this.mn();
        this.Zd = Array(4)
    }

    function Ta(a) {
        this.oh = 0;
        this.ka = null;
        ua.call(this, a);
        this.j |= 256
    }

    function ua(a, b) {
        this.client = null;
        this.X = new yb;
        this.local = new yb;
        Yb.call(this);
        this.name = a;
        this.key = tc.next();
        this.Je = this.qo(b);
        this.j = 232
    }

    function Pa() {}

    function id(a) {
        this.state =
            a
    }

    function ef(a) {
        this.U = new J;
        for (var b = [], c = 0; 4 > c;) {
            ++c;
            var d = new zb;
            d.b = 0;
            d.a = 0;
            d.f = 0;
            b.push(d)
        }
        this.pj = b;
        b = [];
        for (c = 0; 4 > c;) ++c, b.push(new zb);
        this.hf = b;
        this.Pg = !0;
        this.Fg = new W(1024);
        this.rb = a;
        this.Fg.Cc = !0
    }

    function ff(a, b, c, d, e, f, g, k) {
        null == k && (k = 0);
        null == g && (g = 0);
        null == f && (f = 0);
        null == e && (e = 0);
        null == d && (d = 1);
        null == c && (c = 1);
        null == b && (b = 1);
        null == a && (a = 1);
        this.Kw = a;
        this.av = b;
        this.st = c;
        this.ht = d;
        this.Lw = e;
        this.bv = f;
        this.tt = g;
        this.it = k
    }

    function gf() {
        La.call(this, wa.i3);
        this.Ct = new ff
    }

    function hf() {
        this.U =
            null;
        La.call(this, wa.i2)
    }

    function jd() {
        gb.call(this, 1)
    }

    function jf() {
        this.rotation = this.zoom = 0;
        var a = new I;
        a.b = 0;
        a.a = 0;
        this.ma = a;
        a = new I;
        a.b = 0;
        a.a = 0;
        this.size = a
    }

    function kf(a) {
        this.rb = null;
        this.pl = !0;
        this.ql = Aa.Ke();
        this.en = !0;
        this.Ie = Aa.Ke();
        this.rb = a;
        this.state = new jf;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 512;
        a.d = 512;
        this.reset(a)
    }

    function Ab() {
        var a = new J;
        a.b = a.a = Infinity;
        a.f = a.d = -Infinity;
        this.Fa = a;
        gb.call(this, 2)
    }

    function gb(a) {
        this.type = a;
        a = new zb;
        a.b = 0;
        a.a = 0;
        a.f = 0;
        this.ma = a;
        this.ib = 0
    }

    function uc(a) {
        null ==
            a && (a = 1);
        La.call(this, wa.i0);
        this.alpha = a
    }

    function hb(a) {
        La.call(this, wa.i1);
        this.ik = a;
        this.Gf |= 1 << a.G << 4;
        5 == a.G && (this.Gf |= 1 << a.src.G << 12, this.Gf |= 1 << a.Hy.G << 20)
    }

    function La(a) {
        this.type = a;
        this.Rm = a.G;
        this.Gf = 1 << this.Rm
    }

    function da(a, b) {
        null == b && (b = 8);
        this.Ho = !1;
        var c = new I;
        c.b = 0;
        c.a = 0;
        this.Al = c;
        this.Ri = [];
        this.Lo = this.Sg = !1;
        var d = this;
        eb.call(this);
        this.fc = da.$h;
        1 < b && this.fc > b && (this.fc = b);
        "undefined" !== typeof window.orientation && 0 > window.navigator.userAgent.indexOf("Mobile") && 980 == window.innerWidth &&
            (this.fc = 1);
        b = window.document;
        this.Sg = !1;
        null != a && (this.canvas = b.getElementById(a), this.Sg = null != this.canvas);
        this.ll = !!navigator.platform && /iPad|iPhone/.test(navigator.platform);
        this.Sg || (this.canvas = b.createElement("canvas"), this.canvas.id = "win" + da.Mt++, this.canvas.style.setProperty("touch-action", "none"), this.canvas.style.setProperty("-ms-touch-action", "none"), this.canvas.style.setProperty("-webkit-overflow-scrolling", "auto"), this.canvas.style.setProperty("-webkit-overflow-scrolling", "none"), this.canvas.style.setProperty("user-select",
            "none"), b.body.appendChild(this.canvas), this.canvas.focus());
        this.cv();
        da.xe = da.xe * this.fc / da.$h | 0;
        !this.ll && this.Jv() && this.addListener(b, "fullscreenchange", !0, function() {
            var a = d.lk(window.document, null, ["isFullScreen", "fullScreen"]);
            null != a ? d.Lo = a : (a = d.lk(window.document, "fullscreenElement"), d.Lo = null != a)
        });
        this.addListener(b, "visibilitychange", null, function() {
            d.uq(!window.document.hidden)
        });
        try {
            this.ll ? this.addListener(window, "orientationchange", !1, function() {}) : typeof window.onorientationchange &&
                (window.onorientationchange = function() {})
        } catch (e) {}
        this.Sg ? (a = this.size, a.b = this.canvas.width, a.a = this.canvas.height, this.Oa(this.hc())) : this.resize(320, 240)
    }

    function kd() {
        this.oy = "rgba(0,0,0,0)";
        this.Ij = 0;
        this.gy = Aa.Ke();
        this.iy = new W(32);
        this.hy = new W(32);
        this.Dt = ["none", "source-over", "multiply", "lighter", "screen", null];
        this.Lf = null;
        this.ih = -1;
        this.Te = "source-over";
        this.Pi = null;
        ib.call(this);
        this.ir = this.Ar = !0;
        var a = window.navigator.userAgent;
        this.Tm = 0 < a.indexOf("MSIE ") || 0 < a.indexOf("Trident/7.0") ?
            "msImageSmoothingEnabled" : "imageSmoothingEnabled"
    }

    function Zb(a) {
        this.frame = -1;
        this.Tj = this.Uj = 0;
        this.Vj = this.Wj = 1;
        this.Ja = new J;
        this.j = 0;
        Ua.call(this, 4);
        if (null != a) {
            this.active = a.active;
            this.yh = a.yh;
            var b = this.Ja,
                c = a.Ja;
            b.b = c.b;
            b.a = c.a;
            b.f = c.f;
            b.d = c.d;
            this.frame = a.frame;
            this.j = a.j;
            this.sb = a.sb;
            this.Tj = a.Tj;
            this.Uj = a.Uj;
            this.Vj = a.Vj;
            this.Wj = a.Wj
        }
    }

    function vc(a) {
        this.ni = !0;
        Ua.call(this, 13);
        null != a && (this.active = a.active, this.yh = a.yh, this.color = a.color)
    }

    function Ua(a) {
        this.active = this.yh = !0;
        this.type =
            a
    }

    function ib() {
        this.Sm = !0;
        this.Ev = Aa.Ke();
        this.Wd = Aa.Ke();
        this.Gx = this.ir = this.Ar = !1;
        this.Bw = !0;
        this.qu = !1;
        this.Kf = null;
        this.qd = 1;
        this.pi = null;
        this.Yp = !1;
        this.yk = Aa.Ke();
        this.Rt = Aa.Ke();
        this.so = new ef(this);
        this.Qe = new kf(this);
        this.qc = 0;
        this.qc |= 2;
        this.qc |= 1;
        this.qc |= 4;
        this.qc |= 8
    }

    function eb() {
        this.iw = function() {};
        this.fw = function() {};
        this.uq = function() {};
        this.Oa = function() {};
        $b.call(this)
    }

    function $b() {
        this.qn = !1;
        var a = new I;
        a.b = 0;
        a.a = 0;
        this.size = a;
        this.vh = new pc;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 1;
        a.d =
            1;
        this.viewport = a;
        a = new J;
        a.b = 1;
        a.a = 1;
        a.f = 1;
        a.d = 1;
        this.color = a
    }

    function ld() {
        ea.call(this, 10)
    }

    function lf() {
        this.zp = new mf;
        this.lastIndex = 0;
        ea.call(this, 9)
    }

    function mf() {
        this.alpha = 1;
        this.rotation = this.qr = this.rr = 0;
        this.Gh = this.Qq = 1
    }

    function Xb(a) {
        this.Xd = this.Yi = this.nh = 0;
        ea.call(this, a)
    }

    function ea(a) {
        this.me = !1;
        this.Mb = 0;
        this.bn = 1;
        this.wc = this.yd = this.vw = 0;
        this.type = a;
        this.repeat = Ba.i1;
        ea.Bn++
    }

    function Yb() {
        this.It = !0;
        this.controllers = null
    }

    function nf(a, b) {
        this.value = a;
        this.Pd = b
    }

    function of(a,
        b) {
        this.name = a;
        this.frames = b;
        this.Th = 0;
        this.vf = b.length;
        this.rk = b[0].Pd;
        a = 2;
        for (var c = b[1].Pd; a < this.vf;)
            if (b[a++].Pd != c) {
                this.rk = 0;
                break
            }
        this.$d = Array(this.vf + 1);
        this.values = Array(this.vf);
        for (a = 0; a < this.vf;) c = b[a], this.$d[a] = this.Th, this.values[a] = c.value, this.Th += c.Pd, ++a;
        this.$d[a] = this.Th
    }

    function md() {}

    function Y() {}

    function Pf() {}

    function Qf() {}

    function nd(a) {
        this.lc = a
    }

    function Jb() {}

    function pf() {}

    function od() {}

    function wc() {
        this.ji = new xb;
        this.If = this.Ne = 0
    }

    function Kb() {}

    function pd(a) {
        null ==
            a && (a = 5489);
        this.yb = Array(624);
        this.hh = Array(2);
        this.hh[0] = 0;
        this.hh[1] = -1727483681;
        this.Cj(a)
    }

    function xc(a) {
        this.Cj(a)
    }

    function Rf() {}

    function yc() {}

    function qd() {}

    function qf() {}

    function rc() {}

    function pc() {}

    function J() {}

    function zb() {}

    function I() {}

    function Va() {}

    function U() {}

    function rf(a) {
        this.zh = a
    }

    function Ea() {
        this.Rl = 0;
        this.ml = [];
        this.touches = {};
        this.first = null;
        this.enabled = !1;
        this.ub = 0;
        var a = new I;
        a.b = 0;
        a.a = 0;
        this.ea = a;
        this.ii = 0;
        a = new I;
        a.b = 1;
        a.a = 1;
        this.scale = a;
        this.fc = window.devicePixelRatio;
        this.element = null;
        this.fg = 0;
        this.maxTouchPoints = 1;
        this.passive = this.jr();
        this.ii |= 14;
        window.document.body.style.setProperty("touch-action", "none");
        window.document.body.style.setProperty("-ms-touch-action", "none");
        window.document.body.addEventListener("touchmove", function(a) {
            a.preventDefault()
        }, this.passive && {
            passive: !1
        });
        this.enable()
    }

    function sf(a, b, c) {
        this.Ni = a;
        this.code = b;
        this.ub = c
    }

    function Oa() {
        this.enabled = !1;
        this.order = Array(255);
        this.keys = Array(255);
        this.location = Ca.i0;
        this.ef = new tf;
        for (var a =
                0; 255 > a;) this.order[a++] = 0;
        a = [];
        for (var b = 0; 256 > b;) ++b, a.push(0);
        a = this.j = a;
        for (b = 37; 41 > b;) a[b++] |= 1;
        for (b = 48; 58 > b;) a[b++] |= 2;
        for (b = 65; 91 > b;) a[b++] |= 4;
        this.enable()
    }

    function tf() {}

    function oa() {}

    function V() {}

    function rd(a, b, c) {
        null == c && (c = -1);
        this.wd = 16;
        this.size = 0;
        this.Db = -1;
        this.Cl = a;
        this.$e = null == b ? function() {} : b;
        this.df = c;
        this.Mc = Array(this.wd)
    }

    function O() {}

    function rb() {}

    function sd() {}

    function zc(a) {
        this.eb = a;
        this.reset()
    }

    function td(a, b, c) {
        null == b && (b = !1);
        null == a && (a = 1);
        this.La = null;
        this.g =
            0;
        this.Cc = !1;
        this.Db = -2;
        this.Td = 1 > a ? 1 : a;
        this.u = a;
        this.xd = b;
        null != c && (a = this.g = c.length, b = this.u, this.u = a > b ? a : b);
        this.c = Array(this.u + 1);
        this.c[0] = null;
        if (null != c) {
            a = this.c;
            b = 1;
            for (var d = this.g + 1; b < d;) {
                var e = b++;
                a[e] = c[e - 1]
            }
            this.Bm()
        }
    }

    function nc(a, b) {
        null == b && (b = -1);
        this.Jb = this.g = 0;
        this.Db = -3; - 1 == b && (b = a);
        this.u = b;
        this.Zc = a - 1;
        this.Xc = O.mb(Array(a), -1);
        this.c = Array(3 * this.u);
        this.Yb = Array(this.u);
        b = 2;
        a = this.c;
        for (var c = 0, d = this.u; c < d;) ++c, a[b - 1] = -2147483648, a[b] = -1, b += 3;
        a = this.Yb;
        b = 0;
        for (c = this.u -
            1; b < c;) d = b++, a[d] = d + 1;
        a[this.u - 1] = -1
    }

    function Wb(a, b) {
        null == b && (b = -1);
        this.Jb = this.g = 0; - 1 == b && (b = a);
        this.u = 2 > b ? 2 : b;
        this.Ba = new nc(a, this.u);
        this.cf = Array(this.u);
        this.Yb = Array(this.u);
        this.lh = O.mb(Array(this.u), -2147483648, 0, this.u);
        a = this.Yb;
        b = 0;
        for (var c = this.u - 1; b < c;) {
            var d = b++;
            a[d] = d + 1
        }
        a[this.u - 1] = -1
    }

    function ud() {}

    function vd(a, b) {
        null == a && (a = 1);
        this.g = 0;
        this.Db = -2;
        this.Td = 1 > a ? 1 : a;
        this.u = a;
        if (null != b) {
            a = this.g = b.length;
            var c = this.u;
            this.u = a > c ? a : c
        }
        this.c = Array(this.u + 1);
        this.c[0] = null;
        if (null !=
            b) {
            a = this.c;
            c = 1;
            for (var d = this.g + 1; c < d;) {
                var e = c++;
                a[e] = b[e - 1]
            }
            this.Bm()
        }
    }

    function Ac() {}

    function tc() {}

    function wd(a) {
        this.kh = null;
        this.Ya = a;
        this.rc = null;
        this.jc = !1
    }

    function xd(a, b) {
        this.node = a;
        this.He = b;
        this.$b = this.next = null
    }

    function yd() {
        this.Ti = this.Uv = 16;
        this.La = null;
        this.g = 0;
        this.bf = null;
        this.nt = !1;
        this.cg = Array(this.Ti);
        this.Jp = Array(this.Uv)
    }

    function ac(a, b) {
        this.Ya = a;
        this.$f = b
    }

    function bc(a, b) {
        null == a && (a = 0);
        this.La = null;
        this.g = this.ne = 0;
        this.tl = !1;
        this.mh = a;
        0 < a && (this.Yc = this.Gl = new ac(null,
            this));
        if (null != b && 0 < b.length) {
            this.g = b.length;
            a = b[0];
            if (0 == this.mh || 0 == this.ne) a = new ac(a, this);
            else {
                var c = this.Yc;
                this.Yc = this.Yc.next;
                this.ne--;
                c.next = null;
                c.Ya = a;
                a = c
            }
            this.head = this.zb = a;
            a = 1;
            for (c = this.g; a < c;) {
                var d = b[a++];
                if (0 == this.mh || 0 == this.ne) d = new ac(d, this);
                else {
                    var e = this.Yc;
                    this.Yc = this.Yc.next;
                    this.ne--;
                    e.next = null;
                    e.Ya = d;
                    d = e
                }
                this.zb.next = d;
                d.$b = this.zb;
                this.zb = d
            }
        } else this.head = this.zb = null
    }

    function sb(a, b, c) {
        null == a && (a = 16);
        this.M = 0;
        this.Db = -2;
        this.u = this.Td = 1 > a ? 1 : a;
        if (null != b) {
            a =
                this.M = b.length;
            var d = this.u;
            this.u = a > d ? a : d
        }
        this.c = Array(this.u);
        if (null != b) {
            a = this.c;
            d = 0;
            for (var e = this.M; d < e;) {
                var f = d++;
                a[f] = b[f]
            }
        }
        c && (this.Db = 0)
    }

    function uf() {}

    function Bc(a, b, c) {
        null == a && (a = 16);
        this.g = this.oa = 0;
        this.Db = -2;
        this.u = this.Td = 1 > a ? 1 : a;
        if (null != b) {
            a = this.g = b.length;
            var d = this.u;
            this.u = a > d ? a : d
        }
        this.c = Array(this.u);
        if (null != b) {
            a = this.c;
            d = 0;
            for (var e = this.g; d < e;) {
                var f = d++;
                a[f] = b[f]
            }
        }
        c && (this.Db = 0)
    }

    function zd() {}

    function Cc(a) {
        this.eb = a;
        this.c = this.eb.c;
        this.Fb = this.eb.g;
        this.Wa = 0
    }

    function W(a,
        b, c) {
        null == a && (a = 2);
        this.La = null;
        this.g = 0;
        this.Cc = !1;
        this.Db = -2;
        this.Td = 2 > a ? 2 : a;
        null != b && 0 < b.length ? (this.g = b.length, this.c = b.slice(0, b.length), this.u = this.g) : (this.u = this.Td, this.c = Array(this.u));
        c && (this.Db = 0)
    }

    function Ad() {}

    function Dc(a) {
        this.eb = a;
        this.c = this.eb.c;
        a = this.eb;
        this.Fb = a.F * a.Ba;
        this.Wa = 0
    }

    function cc() {}

    function jb(a, b, c) {
        this.La = null;
        this.Cc = !1;
        if (null != c) {
            this.F = a;
            this.Ba = b;
            a = this.c = Array(this.F * this.Ba);
            b = 0;
            for (var d = this.F * this.Ba; b < d;) {
                var e = b++;
                a[e] = c[e]
            }
        } else this.F = a, this.Ba =
            b, this.c = Array(this.F * this.Ba)
    }

    function ab() {}

    function dc() {}

    function vf() {
        Ja.call(this, A.getContext().createStereoPanner(), 1)
    }

    function Lb() {
        Ja.call(this, A.getContext().createGain(), 2)
    }

    function Bd() {
        Ja.call(this, A.getContext().createBufferSource(), 0)
    }

    function Cd() {
        Ja.call(this, A.getContext().destination, 7)
    }

    function Ja(a, b) {
        this.inputs = [];
        this.n = a;
        this.type = b
    }

    function Mb(a, b) {
        tb.call(this, a, b);
        this.data = b.data
    }

    function Dd() {
        va.call(this)
    }

    function Ec(a, b, c, d) {
        null == d && (d = !1);
        tb.call(this, a, b);
        this.loop =
            d;
        this.jg = !0;
        this.node = b.data.cloneNode();
        null != c ? (this.min = a.$d[2 * c] / 1E3, this.max = a.$d[2 * c + 1] / 1E3, this.node.addEventListener("timeupdate", B(this, this.rq), !1), this.node.addEventListener("loadedmetadata", B(this, this.gm), !1)) : (this.min = 0, this.max = b.data.duration, this.node.onended = B(this, this.stop), this.node.loop = d);
        this.Eg();
        this.node.play()
    }

    function Fc() {
        va.call(this)
    }

    function Sf() {}

    function A() {}

    function tb(a, b) {
        this.volume = 1;
        this.offset = 0;
        this.loop = !1;
        this.jf = a;
        this.od = b
    }

    function wf(a) {
        this.elapsedTime =
            0;
        this.Rb = a
    }

    function va() {
        this.Fc = Array(4096);
        this.cc = new W;
        this.Xp = 1E4;
        this.Jl = this.Yv = this.Il = 1;
        this.de = this.Op = 0;
        this.aw = 16;
        this.Rp = 2;
        this.enabled = !0;
        this.Nj = .05
    }

    function ec(a, b, c) {
        this.id = a;
        this.data = b;
        this.Qd = c;
        this.Cp = 0
    }

    function pa() {}

    function db(a, b) {
        this.ta = 0;
        this.url = a;
        this.Xj = b
    }

    function xf(a, b) {
        this.id = a;
        this.Mo = b
    }

    function n() {}

    function Ed(a, b) {
        this.yf = new db(a, b.Xj);
        this.le = b
    }

    function Fd() {}

    function Nb(a, b, c) {
        null == a && (a = 2);
        this.Vp = this.Sp = 0;
        this.Yf = [];
        this.Xa = new td;
        this.bw = a;
        this.gg =
            b;
        this.Xj = c
    }

    function yf(a, b, c) {
        this.url = a;
        this.data = b;
        this.pe = c
    }

    function Tf() {}

    function E() {}

    function fc(a) {
        this.Ya = a;
        Error.captureStackTrace && Error.captureStackTrace(this, fc)
    }

    function Gc(a) {
        this.Y = new Bb;
        this.ye = a
    }

    function Cb() {}

    function zf(a) {
        this.map = a;
        this.keys = a.keys()
    }

    function Ob() {}

    function Af() {}

    function xb() {
        this.a = new Gd
    }

    function Hd() {}

    function Pb(a, b, c) {
        null == b && (b = 0);
        null == c && (c = a.length - b);
        if (0 > b || 0 > c || b + c > a.length) throw 0;
        this.a = a.a;
        this.ea = b;
        this.cn = this.Ze = c
    }

    function Id() {}

    function Gd() {
        this.size =
            this.ea = 0
    }

    function $a() {
        this.C = {}
    }

    function Jd(a) {
        for (var b = a.length, c = 1; b > 1 << c;) ++c;
        if (8 < c || b != 1 << c) throw 0;
        this.ee = a;
        this.Wp = c
    }

    function ub() {}

    function ra(a) {
        this.length = a.byteLength;
        this.a = new Uint8Array(a);
        this.a.ut = a;
        a.mv = this;
        a.ji = this.a
    }

    function gc(a) {
        var b = this;
        this.id = setInterval(function() {
            b.Eh()
        }, a)
    }

    function Kd() {
        this.warn = !1;
        this.scale = 1;
        this.mg = this.Pe = !1;
        this.Gm = -1;
        l.call(this)
    }

    function Ld() {
        this.Nb = new I;
        this.fb = new I;
        this.ea = new I;
        this.Bo = U.Nc(3);
        this.Ck = U.Jd(.1);
        this.Up = !1;
        this.state =
            this.alpha = this.scale = this.interval = 0;
        l.call(this)
    }

    function Md() {
        P.call(this)
    }

    function Nd() {
        l.call(this)
    }

    function Od() {
        this.align = this.mg = !0;
        this.length = -1;
        this.la = this.Ab = 0;
        l.call(this)
    }

    function Pd() {
        this.ze = this.Ah = 0;
        this.eu = U.Jd(.2);
        this.$m = this.an = this.scale = 1;
        this.state = this.Jf = 0;
        l.call(this)
    }

    function Hc() {
        P.call(this)
    }

    function Ic() {
        P.call(this)
    }

    function vb(a) {
        this.alpha = 1;
        this.state = 0;
        this.Hg = new I;
        l.call(this);
        this.m = a;
        var b = this.Hg;
        a = a.position;
        b.b = a.b;
        b.a = a.a;
        this.type = 55
    }

    function bb() {
        this.C = {}
    }

    function Jc() {}

    function kb(a) {
        z.call(this);
        this.Dp = a;
        this.type = 45
    }

    function Qd() {
        P.call(this)
    }

    function Rd() {
        l.call(this)
    }

    function Sd() {
        P.call(this)
    }

    function Qb() {
        l.call(this);
        this.type = 17
    }

    function Td(a, b) {
        this.scale = 0;
        this.alpha = 1;
        this.state = 0;
        this.ea = new I;
        l.call(this);
        this.ea.b = a.position.b + (b.position.b - a.position.b) / 2;
        this.ea.a = a.position.a + (b.position.a - a.position.a) / 2;
        this.type = 56
    }

    function Ud() {
        this.state = 0;
        this.scale = this.alpha = 1;
        this.rotation = 0;
        l.call(this)
    }

    function P() {
        this.md = .1;
        this.scale =
            1;
        this.enabled = !1;
        l.call(this)
    }

    function Vd(a, b, c) {
        var d = new I;
        d.b = 0;
        d.a = 0;
        this.ea = d;
        this.state = this.alpha = this.scale = 0;
        l.call(this);
        this.text = a;
        this.kind = b;
        this.gb = c;
        switch (b) {
            case 0:
                var e = .5;
                break;
            case 1:
                e = 1
        }
        this.interval = e;
        this.type = 25
    }

    function Wd() {}

    function Xd() {}

    function hc() {}

    function Bf(a, b) {
        b = 0 > b ? 0 : 1 < b ? 1 : b;
        a = a.ra();
        this.left = new G;
        var c = new J;
        c.b = a.b;
        c.a = a.a;
        c.f = a.f;
        c.d = a.d;
        this.left.H = c;
        this.left.H.f = a.b + (a.f - a.b) * b;
        this.right = new G;
        b = new J;
        b.b = a.b;
        b.a = a.a;
        b.f = a.f;
        b.d = a.d;
        this.right.H = b;
        this.right.H.b = this.left.H.f
    }

    function Cf(a, b) {
        b = 0 > b ? 0 : 1 < b ? 1 : b;
        a = a.ra();
        this.top = new G;
        var c = new J;
        c.b = a.b;
        c.a = a.a;
        c.f = a.f;
        c.d = a.d;
        this.top.H = c;
        this.top.H.d = a.a + (a.d - a.a) * b;
        this.bottom = new G;
        b = new J;
        b.b = a.b;
        b.a = a.a;
        b.f = a.f;
        b.d = a.d;
        this.bottom.H = b;
        this.bottom.H.a = this.top.H.d
    }

    function Df(a, b, c) {
        this.Ip = Array(b * c);
        this.cols = c;
        var d = a.H.b,
            e = a.H.a,
            f = a.ra();
        a = (f.f - f.b) / c;
        f = (f.d - f.a) / b;
        for (var g, k = 0; k < b;) {
            for (g = 0; g < c;) {
                var m = new G,
                    l = m.H;
                l.b = d + g * a;
                l.a = e + k * f;
                l.f = d + g * a + a;
                l.d = e + k * f + f;
                this.Ip[k * c + g] = m;
                ++g
            }++k
        }
    }

    function G() {
        this.Hp = 0;
        this.H = new J
    }

    function Kc() {
        this.confirm = !1;
        Q.call(this)
    }

    function Lc() {
        this.di = 0;
        this.on = !0;
        Qa.call(this)
    }

    function Qa() {
        this.loaded = !1;
        this.eg = -1;
        N.call(this);
        this.type = 5
    }

    function Mc() {
        this.Aa = {
            Lc: null,
            ff: null,
            po: null,
            Gb: null
        };
        Q.call(this)
    }

    function Yd() {
        Q.call(this)
    }

    function Zd(a) {
        Db.call(this, new $d(new jc(null, 0, 0), a));
        this.type = 79
    }

    function ae() {
        this.se = !1;
        Q.call(this)
    }

    function Q() {
        N.call(this);
        this.Z = fa.Z;
        this.type = 7
    }

    function N() {
        this.vc = new wb(null, null);
        this.Xh = this.state =
            0;
        Wa.call(this);
        this.name = od.Zk(this);
        this.type = 4
    }

    function Nc(a) {
        var b = new J;
        b.b = 0;
        b.a = 0;
        b.f = 100;
        b.d = 100;
        this.U = b;
        this.md = .1;
        this.scale = 1;
        z.call(this);
        this.frame = a;
        this.type = 33
    }

    function be() {
        Wa.call(this)
    }

    function Oc() {
        this.speed = 0;
        l.call(this)
    }

    function ce(a) {
        l.call(this);
        this.Ed(a);
        this.type = 48
    }

    function de(a) {
        l.call(this);
        this.Ed(a);
        this.type = 52
    }

    function ee(a) {
        l.call(this);
        this.Ed(a);
        this.type = 51
    }

    function fe(a) {
        l.call(this);
        this.Ed(a);
        this.type = 53
    }

    function ge(a) {
        l.call(this);
        this.Ed(a);
        this.type =
            46
    }

    function he(a) {
        l.call(this);
        this.Ed(a);
        this.type = 47
    }

    function ie(a) {
        l.call(this);
        this.Ed(a);
        this.type = 44
    }

    function je() {
        this.Xa = new Bc(M.ak);
        this.Vd = new W(M.ak);
        l.call(this)
    }

    function Pc(a, b) {
        l.call(this);
        this.Ed(a);
        this.kind = b;
        this.type = 50
    }

    function ke() {
        this.Ce = 0;
        l.call(this)
    }

    function le() {
        this.alpha = 1;
        l.call(this)
    }

    function me() {
        l.call(this)
    }

    function ne(a, b) {
        l.call(this);
        this.time = -b;
        this.J = a;
        a.view.alpha = 0;
        this.type = 73
    }

    function lb() {
        l.call(this)
    }

    function oe(a) {
        l.call(this);
        this.Ed(a);
        this.type =
            43
    }

    function Qc(a, b) {
        l.call(this);
        this.b = a;
        this.a = b;
        this.type = 21
    }

    function pe(a) {
        this.tr = !1;
        l.call(this);
        this.b = a.b;
        this.a = a.a;
        this.b.s.rf = !0;
        this.a.s.rf = !0;
        this.b.J.s.locked = !0;
        this.a.J.s.locked = !0;
        this.O(new Qc(this.b, this.a));
        this.type = 22
    }

    function Rc(a, b) {
        this.state = 0;
        l.call(this);
        this.m = a;
        this.time = -b;
        a.s.Mf = !0;
        a.view.visible = !1;
        a.J.s.locked = !0;
        this.type = 57
    }

    function qe(a, b) {
        this.Nb = new I;
        this.fb = new I;
        l.call(this);
        this.time = -b;
        this.m = a;
        a.J.s.locked = !0;
        b = this.fb;
        var c = a.position;
        b.b = c.b;
        b.a = c.a;
        b = this.Nb;
        b.b = a.J.x + .5;
        b.a = a.J.y + .5;
        this.type = 76
    }

    function re(a, b) {
        this.state = 0;
        l.call(this);
        this.source = a;
        this.Ed(b);
        this.type = 38
    }

    function se(a, b, c) {
        this.state = 0;
        l.call(this);
        this.m = a;
        this.time = -c;
        this.source = b;
        a.s.Tc = !0;
        a.J.s.locked = !0;
        this.type = 39
    }

    function te(a, b) {
        l.call(this);
        this.time = -b;
        this.m = a;
        a.view.alpha = 0;
        a.view.scale = 0;
        this.type = 78
    }

    function ue(a) {
        this.state = 0;
        l.call(this);
        this.m = a;
        a.view.scale = 1;
        this.type = 35
    }

    function ve(a, b) {
        l.call(this);
        this.m = a;
        this.time = -b;
        a.s.Mf = !0;
        a.J.s.locked = !0;
        this.type = 58
    }

    function we(a) {
        var b = this;
        l.call(this);
        a.s.fe = !0;
        a.J.s.locked = !0;
        a.view.Bt(function() {
            b.v().wg(a);
            a.J.s.locked = !1;
            a.J.og();
            b.o()
        });
        this.type = 42
    }

    function xe(a, b, c) {
        this.state = 0;
        l.call(this);
        this.m = a;
        this.time = -b;
        a.s.Tc = !0;
        a.J.s.locked = !0;
        a.Bd = c;
        this.v().Ci(a);
        this.type = 37
    }

    function ye(a, b, c) {
        null == c && (c = -1);
        this.state = 0;
        l.call(this);
        this.m = a;
        this.time = -b;
        a.s.Tc = !0;
        a.J.s.locked = !0;
        a.Bd = c;
        this.v().Ci(a);
        this.type = 36
    }

    function ze(a, b) {
        z.call(this);
        this.b = a;
        this.a = b;
        this.type = 40
    }

    function kc(a) {
        this.state =
            this.bo = 0;
        l.call(this);
        this.match = a;
        if (a.kind == R.i5 || a.kind == R.i4)
            for (var b = 0, c = a.size; b < c;) a.V[b++].s.pb = !1;
        else
            for (b = 0, c = a.size; b < c;) {
                var d = a.V[b++];
                d.s.pb && (this.pb = d)
            }
        b = 0;
        for (c = a.size; b < c;) d = a.V[b++], d.J.s.locked = !0, d.s.Nl = !0;
        if (null == this.pb) {
            b = a.kind;
            switch (b.G) {
                case 1:
                    switch (b.axis.G) {
                        case 0:
                            var e = 1;
                            break;
                        case 1:
                            e = 0
                    }
                    break;
                case 2:
                    e = 1;
                    break;
                case 3:
                    e = 2;
                    break;
                case 4:
                    e = 0;
                    break;
                case 5:
                    e = 0;
                    break;
                default:
                    throw 0;
            }
            this.pb = a.V[e];
            this.pb.s.pb = !0
        }
        this.pb.ad = this.v().eh ? 2 : 1;
        e = this.v().speed.Cb;
        this.v().Uf &&
            1 < e && (this.bo = 100 * e);
        e = 0;
        for (b = a.size; e < b;) c = a.V[e++], c.s.pb || this.O(new ze(this.pb, c));
        switch (a.kind.G) {
            case 2:
                a = 250;
                break;
            case 3:
                a = 1E3;
                break;
            case 4:
            case 5:
                a = 500;
                break;
            default:
                a = 0
        }
        this.pb.Bd = a + this.bo;
        this.v().Ci(this.pb);
        this.type = 41
    }

    function Sc(a) {
        this.si = 0;
        this.Pj = new W;
        this.state = this.zf = this.$i = 0;
        this.speed = null;
        this.Ul = this.Wl = this.Vl = this.Tp = 0;
        this.Ll = 1;
        this.Re = this.Fj = this.Zp = this.Kl = 0;
        this.lf = 1;
        this.la = 0;
        this.Gd = this.paused = !1;
        this.selection = new Ae(null, null);
        Fa.call(this);
        S.mb();
        this.Uc =
            a;
        a.X = this;
        a.O(this);
        this.type = 12
    }

    function Be() {
        this.sf = this.Ld = 0;
        this.Yh = !1;
        this.Zh = this.Cb = 0;
        l.call(this)
    }

    function t() {}

    function H() {}

    function Ce() {
        l.call(this)
    }

    function Tc(a) {
        z.call(this);
        this.X = a;
        this.cl = new De(a.S);
        this.type = 13
    }

    function Eb() {}

    function Db(a) {
        this.Dj = 0;
        this.De = !1;
        this.visible = !0;
        this.alpha = 1;
        this.rotation = 0;
        this.position = new I;
        this.scale = 1;
        l.call(this);
        this.m = a;
        this.type = 18
    }

    function Xa(a) {
        this.kind = a;
        this.Ma = 0
    }

    function Ef(a) {
        this.m = a
    }

    function $d(a, b) {
        this.zk = this.Xg = 0;
        this.Qf = !1;
        this.ad = 1;
        this.Bd = 0;
        this.J = a;
        this.code = b;
        b = new I;
        b.b = a.x + .5;
        b.a = a.y + .5;
        this.position = b;
        a = new I;
        a.b = 0;
        a.a = 0;
        this.Rc = a;
        a = new I;
        a.b = 0;
        a.a = 0;
        this.force = a;
        this.s = new Ef(this);
        this.s.Ee = !0;
        this.s.qf = !0
    }

    function Ff() {
        this.lj = this.mj = this.Gr = this.Yj = this.$n = this.rotation = this.fk = this.Xf = 0
    }

    function Ee() {
        this.ed = new W;
        l.call(this);
        this.type = 19
    }

    function Ra() {
        this.Aa = new bc;
        this.ed = new bc;
        l.call(this)
    }

    function Ae(a, b) {
        this.b = a;
        this.a = b
    }

    function Fe(a) {
        this.Qj = new W(2 * M.Ea);
        this.Oe = new jb(M.Ea, M.Ea);
        this.result =
            new W;
        z.call(this);
        this.S = a;
        this.Qj.Db = 0;
        this.type = 26
    }

    function Gf() {
        this.kind = R.i0;
        this.V = Array(M.Ea)
    }

    function Ge() {}

    function Hf(a) {
        this.jl = !1;
        this.Yl = this.$l = this.Zl = 0;
        this.X = a;
        this.result = new jb(M.Ea, M.Ea);
        this.result.forEach(function() {
            return new Ge
        });
        this.vj = new W(M.ak);
        this.marks = new jb(M.Ea, M.Ea);
        this.uf = new W;
        this.Pj = new W;
        this.dh = new rd(function() {
            return new W
        });
        this.kl = new jb(M.Ea, M.Ea)
    }

    function If() {
        var a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.Lc = a;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.la =
            a;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.ad = a;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.time = a;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.S = a;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.hint = a;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.pause = a;
        a = new J;
        a.b = 0;
        a.a = 0;
        a.f = 100;
        a.d = 100;
        this.Rb = a
    }

    function Uc() {
        this.state = 0;
        l.call(this)
    }

    function M(a) {
        this.xi = null;
        var b = this;
        z.call(this);
        this.X = a;
        this.vd = new yd;
        this.cells = new jb(M.Ea, M.Ea);
        this.cells.forEach(function(a, d, e) {
            return new jc(b, d, e)
        });
        for (a = this.cells.iterator(); a.ia();) a.next().dt();
        for (a = this.cells.iterator(); a.ia();) a.next().dx();
        this.ww();
        this.type = 23
    }

    function De(a) {
        z.call(this);
        var b = M.Ea;
        this.S = a;
        this.j = new jb(b, b);
        this.j.forEach(function() {
            return 0
        });
        this.stack = Array(b);
        this.order = Array(b);
        this.result = new W;
        this.result.Bc(b * b * 5);
        this.type = 14
    }

    function Rb(a, b) {
        this.uj = 0;
        this.Da = new If;
        Fa.call(this);
        this.wj = 60;
        try {
            var c = window.famobi.config.round_time;
            null != c && (this.wj = c)
        } catch (d) {}
        Eb.mb(b);
        this.canvas = a;
        this.Z = fa.Z;
        Rb.cb = this;
        this.Ef();
        this.X = new Sc(this);
        this.resize();
        this.type =
            11
    }

    function Jf() {
        var a = window.document;
        window.addEventListener("resize", B(this, this.resize));
        a.body.style.backgroundColor = "white";
        var b = this.Pa(),
            c = a.createElement("div");
        c.id = "crashdialog";
        c.style.position = "absolute";
        c.style.width = b.f - b.b + "px";
        c.style.height = b.d - b.a + "px";
        c.style.left = b.b + "px";
        c.style.top = b.a + "px";
        a.body.appendChild(c);
        a = a.createElement("p");
        a.style.fontFamily = "Arial, Helvetica, sans-serif";
        a.style.fontWeight = "bold";
        a.style.fontSize = "2em";
        a.style.textAlign = "center";
        a.style.margin =
            "4px";
        try {
            var d = "\ud83d\ude22<br>" + V.translate(T.i11)
        } catch (f) {
            d = "Aw, Snap!"
        }
        a.innerHTML = d;
        c.appendChild(a);
        d = a.cloneNode();
        d.style.fontWeight = "normal";
        d.style.textAlign = "center";
        d.style.fontSize = "1.5em";
        try {
            var e = V.translate(T.i10)
        } catch (f) {
            e = "Oops, there was a problem :( This shouldn't happen. Please reload the game!"
        }
        d.innerText = e;
        c.appendChild(d)
    }

    function He() {
        this.ub = !1;
        l.call(this)
    }

    function Ie() {
        this.tp = !1;
        this.Pd = this.Be = 0;
        this.tf = this.freeze = !1;
        l.call(this)
    }

    function Je(a) {
        var b = new I;
        b.b =
            0;
        b.a = 0;
        this.ma = b;
        this.alpha = .85;
        z.call(this);
        this.J = a;
        a.view = this;
        this.type = 27
    }

    function Kf() {}

    function jc(a, b, c) {
        this.S = this.m = null;
        this.s = new Kf;
        Vc.call(this, b, c);
        this.S = a
    }

    function Uf() {}

    function Vc(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    }

    function Ke() {
        l.call(this)
    }

    function l() {
        z.call(this);
        this.type = 15
    }

    function lc() {}

    function S() {}

    function w(a) {
        this.nodeType = a;
        this.children = [];
        this.ei = new $a
    }

    function Fb() {}

    function Za() {
        null != Za.cb && Za.cb.stop();
        this.handle = (this.window = "undefined" !==
            typeof window) ? -1 : null;
        Za.cb = this
    }

    function Le(a) {
        this.gb = a
    }

    function Me() {}

    function Wc() {}

    function Xc() {}

    function Vf() {}

    function F() {}

    function Ne() {}

    function x() {}

    function mb() {}

    function Ma() {}

    function Bb() {
        this.a = ""
    }

    function C() {}

    function Lf() {
        this.fq = function() {};
        this.eq = function() {};
        this.Pp = 8;
        this.io = null;
        this.j = 0;
        var a = .00392156862745098 * ta.kb(0),
            b = .00392156862745098 * ta.kb(0),
            c = .00392156862745098 * ta.kb(0),
            d = new J;
        d.b = .00392156862745098 * ta.kb(0);
        d.a = a;
        d.f = b;
        d.d = c;
        this.color = d;
        this.Pc = new Ta("root");
        this.j |= 32
    }

    function ca() {}

    function la() {}

    function Wf() {}

    function Mf(a) {
        this.s = a
    }

    function Wa() {
        this.C = new bb;
        this.type = 3;
        z.call(this)
    }

    function Nf(a) {
        this.type = a;
        this.list = new W
    }

    function Fa() {
        this.Ml = this.Xl = 0;
        this.buffer = new W;
        this.yc = new W;
        z.call(this);
        this.type = 10
    }

    function Yc(a, b, c) {
        this.j = 0;
        this.source = a;
        this.type = b;
        this.tc = c
    }

    function aa() {}

    function y() {}

    function Oe() {}

    function qa() {}

    function cb() {}

    function ha() {}

    function Gb() {}

    function L(a, b) {
        this.r = new RegExp(a, b.split("u").join(""))
    }

    function Ya() {}

    function ba() {
        z.call(this);
        ba.cb = this;
        window.console.info("DiamondRush v1.1.10 2020-07-24 13:22:05 Generated by Haxe 4.0.5 polygonal");
        n.hx(ba.Ww);
        n.vx();
        this.vv();
        this.nl();
        this.uv(ba.language);
        this.rv();
        this.op();
        this.yv();
        this.type = 0
    }

    function z() {
        this.zr = !1;
        this.Qc = this.rj = !0;
        this.time = 0;
        z.Dn++
    }

    function D() {
        return E.Lg(this, "")
    }

    function v(a, b) {
        a = Object.create(a);
        for (var c in b) a[c] = b[c];
        b.toString !== Object.prototype.toString && (a.toString = b.toString);
        return a
    }

    function Hb(a) {
        return a instanceof Array ?
            y.hb(a) : a.iterator()
    }

    function B(a, b) {
        if (null == b) return null;
        null == b.bk && (b.bk = Re.zn++);
        var c;
        null == a.il ? a.il = {} : c = a.il[b.bk];
        null == c && (c = b.bind(a), a.il[b.bk] = c);
        return c
    }
    Qe.DiamondRush = Qe.DiamondRush || {};
    var xa = xa || {},
        Da;
    z.__name__ = "0";
    z.prototype = {
        Bi: function() {
            for (var a = 0, b = this.firstChild; null != b;) ++a, b = b.L;
            return a
        },
        o: function() {
            for (var a = this.firstChild, b; null != a;) b = a.L, a.o(), a = b;
            this.remove();
            z.Dn--
        },
        O: function(a) {
            a.parent = this;
            if (null != this.firstChild) {
                for (var b = this.firstChild; null != b.L;) b =
                    b.L;
                b.L = a
            } else this.firstChild = a;
            a.K()
        },
        removeChild: function(a) {
            if (a.parent == this) {
                if (a == this.firstChild) this.firstChild = a.L;
                else
                    for (var b = this.firstChild; null != b;) {
                        if (b.L == a) {
                            b.L = a.L;
                            break
                        }
                        b = b.L
                    }
                a.parent = a.L = null
            }
        },
        uc: function(a, b, c) {
            if (c) {
                c = null;
                for (var d = this.firstChild; null != d;) {
                    if (null != a) {
                        if (E.Kg(d, a)) {
                            if (null == b) {
                                c = d;
                                break
                            }
                            if (d.name == b) {
                                c = d;
                                break
                            }
                        }
                    } else if (d.name == b) {
                        c = d;
                        break
                    }
                    var e = d.uc(a, b, !0);
                    if (null != e) {
                        c = e;
                        break
                    }
                    d = d.L
                }
                return c
            }
            for (c = this.firstChild; null != c;) {
                if (null != a) {
                    if (E.Kg(c, a)) {
                        if (null ==
                            b) break;
                        if (c.name == b) break
                    }
                } else if (c.name == b) break;
                c = c.L
            }
            return c
        },
        Po: function(a, b) {
            for (var c = this.parent; null != c;) {
                if (null != a) {
                    if (E.Kg(c, a)) {
                        if (null == b) break;
                        if (c.name == b) break
                    }
                } else if (c.name == b) break;
                c = c.parent
            }
            return c
        },
        remove: function() {
            null != this.parent && this.parent.removeChild(this)
        },
        kk: function(a, b) {
            a = new Yc(this, a, b);
            for (b = this.parent; null != b;) {
                b.handle(a);
                if (0 < a.j) break;
                b = b.parent
            }
        },
        Hf: function(a, b) {
            this.Fq(new Yc(this, a, b), !0)
        },
        update: function(a) {
            this.zr = !0;
            this.time += a;
            for (var b = this.firstChild,
                    c; null != b;) c = b.L, b.Qc && b.parent == this && b.update(a), b = c
        },
        pa: function(a) {
            for (var b = this.firstChild, c; null != b;) c = b.L, b.rj && b.zr && b.parent == this && b.pa(a), b = c
        },
        handle: function() {},
        K: function() {},
        Fq: function(a, b) {
            if (!b && (this.handle(a), 0 < (a.j & 1))) {
                a.j &= -2;
                return
            }
            b = this.firstChild;
            for (var c; null != b;) {
                c = b.L;
                if (0 < (a.j & 2)) break;
                b.Fq(a, !1);
                b = c
            }
        },
        ta: function(a) {
            return Math.min(1, this.time / a)
        },
        i: z
    };
    Math.__name__ = "1";
    ba.__name__ = "2";
    ba.B = z;
    ba.prototype = v(z.prototype, {
        Cq: function() {
            var a = this,
                b = new Nb(4, function(a) {
                    n.setData(n.ie(a.url),
                        a.data, a.pe)
                }, "v=1.1.10");
            b.tag = "preload";
            var c = n.Ou();
            if (0 == c.length) this.hm();
            else {
                var d = c.length,
                    e = function() {
                        if (0 == --d) {
                            var b = function() {
                                x.detach(b);
                                a.hm()
                            };
                            x.ua(b)
                        }
                    };
                aa.hb(c, function(a) {
                    n.dj(a, e)
                });
                aa.hb(c, function(a) {
                    a = n.je(a);
                    return b.load(a)
                })
            }
        },
        vv: function() {
            this.tm = new Ue
        },
        nl: function() {
            function a(c) {
                window.removeEventListener("error", a);
                c.error.toString();
                null != b.Fe && b.Fe.stop();
                try {
                    b.jm()
                } catch (d) {}
            }
            var b = this;
            window.addEventListener("error", a)
        },
        yv: function() {
            x.ld.ua(B(this, this.update));
            x.pg.ua(B(this, this.pa));
            this.Fe = new Za;
            this.Fe.start()
        },
        rv: function() {
            if (pa.sl()) {
                var a = pa.Ve();
                if (null == a) pa.enabled = !1;
                else if (aa.Vb(["ogg", "mp3", "aac"], function(b) {
                        return b == a
                    })) {
                    n.gx(a);
                    for (var b = va.cb(), c = b instanceof Fc, d = function(a, d, e) {
                            d = c ? n.je(a) : d;
                            if (n.Gv(a)) b.Ch([0, 321, 1320, 3558, 4557, 7261, 8260, 8985, 9984, 11448, 12447, 14171, 15170, 17326, 18325, 22857, 23856, 25580, 26579, 31643, 32642, 36043, 37042, 43721, 44720, 46904, 47903, 50704, 51703, 53774, 54773, 56353, 57352, 59157, 60156, 62853, 63852, 71447, 72446, 74197,
                                75196, 76947, 77946, 79697, 80696, 82447, 83446, 85197, 86196, 87947, 88946, 90697, 91696, 93447, 94446, 96490, 97489, 98255, 99254, 100523, 101522, 101799, 102798, 104894, 105893, 108831, 109830, 112031, 113030, 116526, 117525, 119726, 120725, 124577, 125576, 127777, 128776, 132457, 133456, 135657, 136656, 140604, 141603, 143804, 144803, 149768, 150767, 152968, 153967, 157886, 158885, 161086, 162085, 166004, 167003, 169204, 170203, 170983, 171982, 178208, 179207, 181385
                            ], d, e);
                            else {
                                var f = n.Qd(a);
                                b.ng(a, d, f, e)
                            }
                        }, e = 0, f = ba.Wn; e < f.length;) n.Nw(f[e++], d)
                } else pa.enabled = !1
            }
        },
        op: function() {},
        uv: function(a) {
            null != ba.Ap && (V.Lm(a, ["fr", "en", "de"]), n.Lm(V.Oi), a != n.Xo() ? window.console.log("" + n.Xo() + "(" + a + ")") : window.console.log(a), n.dj(ba.Ap, function(a) {
                V.qv(n.getData(a), ba.Qy)
            }))
        },
        hm: function() {},
        jm: function() {
            window.console.log("DiamondRush crashed \ud83d\ude2d");
            if (Ya.bh) try {
                null != this.tm && this.tm.save()
            } catch (a) {}
        },
        o: function() {
            z.prototype.o.call(this);
            this.Fe = this.tm = null
        },
        i: ba
    });
    Ya.__name__ = "3";
    Ya.mb = function(a) {
        if (false) {
            var b = {};
            b.apiKey = a;
            b.appVersion =
                "1.1.10";
            b.releaseStage = "production";
            b.beforeSend = function(a) {
                if (null != Ya.mp && Ya.mp(a.errorMessage)) return !1;
                if (null != Ya.ap) {
                    var b = Ya.ap();
                    null != b && a.updateMetaData("meta", b)
                }
                return !0
            };
            b.collectUserIp = !1;
            a = null;
            Y.Nv() ? a = Y.get("bugsnagid") : (a = (new Date).valueOf().toString(36) + Math.random().toString(36).substr(2), Y.set("bugsnagid", a));
            var c = {};
            c.id = a;
            b.user = c;
            b.logger = null;
            window.bugsnagClient = window.bugsnag(b);
            Ya.client = window.bugsnagClient;
            window.console.debug("bugsnag initialized");
            Ya.bh = !0
        }
    };
    var fa =
        Qe.DiamondRush = function() {
            this.Rq = null;
            var a = this;
            ba.call(this);
            Ya.mb("255b83737747f2bc0d1c79b6a396082c");
            Ya.mp = function(a) {
                return "onServiceReady is not defined" == a ? !0 : !1
            };
            Ya.ap = function() {
                var a = Y.get("DiamondRush"),
                    b = {};
                b.l = a;
                return b
            };
            qa.mb();
            qa.Ql = function() {
                pa.Jc().rg(0)
            };
            qa.jn = function() {
                pa.Jc().rg(1)
            };
            qa.freeze = function() {
                a.Fe.stop();
                oa.Hb().disable();
                oa.al().disable()
            };
            qa.ur = function() {
                a.Fe.start();
                oa.Hb().enable();
                oa.al().enable()
            };
            this.O(Ka.cb());
            var b = Na.vm;
            Na.Ow(Lc);
            b(null, null, new Wd);
            b(null, Kc, new Xd);
            fa.Z.Pc.appendChild(N.Zg().node);
            ca.load();
            b = !1;
            null != cb.vp() && (ca.Pl = cb.vp(), b = !0);
            null != cb.wp() && (ca.Rb = cb.wp(), b = !0);
            b && ca.save();
            null != cb.isEnabled() && pa.Jc().rg(cb.isEnabled() ? 1 : 0);
            ca.Rb || t.bm();
            ca.Rb ? t.bj() : t.bm();
            this.Cq();
            this.type = 1
        };
    fa.__name__ = "4";
    fa.mb = Qe.DiamondRush.init = function(a) {
        Y.So = function() {
            return window.famobi.localStorage
        };
        ba.language = a;
        ba.Ap = 3;
        ba.Wn = [27];
        new fa
    };
    fa.B = ba;
    fa.prototype = v(ba.prototype, {
        update: function(a) {
            F.update(a);
            ba.prototype.update.call(this,
                a);
            fa.Z.update(a)
        },
        pa: function(a) {
            ba.prototype.pa.call(this, a);
            fa.Z.pa()
        },
        nl: function() {
            ba.prototype.nl.call(this)
        },
        op: function() {
            var a = this;
            fa.Z = new Lf;
            fa.Z.Pp = 2;
            var b = .00392156862745098 * ta.kb(169),
                c = .00392156862745098 * ta.kb(253),
                d = .00392156862745098 * ta.kb(255),
                e = new J;
            e.b = .00392156862745098 * ta.kb(1);
            e.a = b;
            e.f = c;
            e.d = d;
            fa.Z.color = e;
            fa.Z.eq = function(b) {
                b = sa.Pf(["bounds", Xf.dw(0, 0, b.b, b.a)]);
                a.Hf(1, b)
            };
            fa.Z.fq = function(b) {
                b ? (a.Hf(2), qa.paused || (a.Fe.start(), oa.Hb().enable()), qa.muted || Gb.Ng || pa.Jc().rg(1),
                    gc.Ld(function() {
                        A.resume(function() {})
                    }, 100)) : (a.Hf(3), a.Fe.stop(), pa.Jc().rg(0), oa.Hb().disable())
            };
            fa.Z.sv();
            fa.Z.window.Zn()
        },
        jm: function() {
            ba.prototype.jm.call(this);
            this.Xm();
            oa.Hb().A();
            oa.al().A();
            window.document.body.removeChild(E.tb(fa.Z.window, da).canvas);
            fa.Z.window.Md();
            new Jf
        },
        hm: function() {
            Ka.cb().Rx(Kc)
        },
        Xm: function() {
            null == this.Rq && fa.Z.window instanceof da && (this.Rq = E.tb(fa.Z.window, da).Xm(.1))
        },
        i: fa
    });
    L.__name__ = "5";
    L.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex =
                0);
            this.r.Eb = this.r.exec(a);
            this.r.Xy = a;
            return null != this.r.Eb
        },
        Ka: function(a) {
            if (null != this.r.Eb && 0 <= a && a < this.r.Eb.length) return this.r.Eb[a];
            throw 0;
        },
        replace: function(a, b) {
            return a.replace(this.r, b)
        },
        i: L
    };
    Gb.__name__ = "6";
    Gb.Ex = function() {
        Gb.Ng = !0;
        try {
            return window.famobi.showInterstitialAd().then(function() {
                Gb.Ng = !1
            }, function() {
                Gb.Ng = !1
            })
        } catch (a) {
            return Gb.Ng = !1, new Promise(function(a) {
                a(null)
            })
        }
    };
    ha.__name__ = "7";
    ha.Ov = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        b.reason = "timeout";
        return ha.send("EVENT_LEVELFAIL", b)
    };
    ha.Pv = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return ha.send("EVENT_LEVELRESTART", b)
    };
    ha.Qv = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return ha.send("EVENT_LEVELSTART", b)
    };
    ha.pause = function() {
        return ha.send("EVENT_PAUSE")
    };
    ha.resume = function() {
        return ha.send("EVENT_RESUME")
    };
    ha.Tv = function(a) {
        try {
            var b = {};
            b.liveScore = a;
            ha.send("EVENT_LIVESCORE", b)
        } catch (c) {}
    };
    ha.ly = function(a) {
        var b = {};
        b.totalScore = a;
        return ha.send("EVENT_TOTALSCORE",
            b)
    };
    ha.zy = function(a) {
        var b = {
            bgmVolume: 0
        };
        b.sfxVolume = a;
        ha.send("EVENT_VOLUMECHANGE", b)
    };
    ha.send = function(a, b) {
        try {
            return null != b ? window.famobi_analytics.trackEvent(a, b) : window.famobi_analytics.trackEvent(a)
        } catch (c) {
            return new Promise(function(a) {
                a(null)
            })
        }
    };
    cb.__name__ = "8";
    cb.fv = function() {
        try {
            return window.famobi.audio.hasControls()
        } catch (a) {
            return !0
        }
    };
    cb.vp = function() {
        try {
            return window.famobi.audio.isEnabled("bgm")
        } catch (a) {
            return null
        }
    };
    cb.wp = function() {
        try {
            return window.famobi.audio.isEnabled("sfx")
        } catch (a) {
            return null
        }
    };
    cb.isEnabled = function() {
        try {
            return window.famobi.audio.isEnabled()
        } catch (a) {
            return null
        }
    };
    qa.__name__ = "9";
    qa.mb = function() {
        var a = window;
        a.famobi_muteAudio = function(a) {
            (qa.muted = a) ? qa.Ql(): qa.jn()
        };
        a.famobi_pauseGame = function(a) {
            (qa.paused = a) ? qa.freeze(): qa.ur()
        };
        a.famobi_onUnmuteRequested = function() {
            qa.jn();
            qa.muted = !1
        };
        a.famobi_onMuteRequested = function() {
            qa.Ql();
            qa.muted = !0
        }
    };
    qa.Ql = function() {};
    qa.jn = function() {};
    qa.freeze = function() {};
    qa.ur = function() {};
    Oe.__name__ = "A";
    Oe.load = function(a) {
    	window.famobi_analytics.trackScreen("SCREEN_HOME");
        try {
            var b =
                window.famobi.getBrandingButtonImage(!0)
        } catch (d) {
            b = "more_games_graphic.png"
        }
        var c = window.document.createElement("img");
        c.crossOrigin = "Anonymous";
        c.onload = function() {
            a(c)
        };
        c.src = b
    };
    Oe.click = function() {
        try {
            window.famobi.openBrandingLink()
        } catch (a) {}
    };
    y.__name__ = "B";
    y.ki = function(a, b) {
        a = a.charCodeAt(b);
        if (a == a) return a
    };
    y.substr = function(a, b, c) {
        if (null == c) c = a.length;
        else if (0 > c)
            if (0 == b) c = a.length + c;
            else return "";
        return a.substr(b, c)
    };
    y.remove = function(a, b) {
        b = a.indexOf(b);
        if (-1 == b) return !1;
        a.splice(b,
            1);
        return !0
    };
    y.hb = function(a) {
        return {
            to: 0,
            Un: a,
            ia: function() {
                return this.to < this.Un.length
            },
            next: function() {
                return this.Un[this.to++]
            }
        }
    };
    aa.__name__ = "D";
    aa.Vn = function(a) {
        var b = [];
        for (a = Hb(a); a.ia();) b.push(a.next());
        return b
    };
    aa.Vb = function(a, b) {
        for (a = Hb(a); a.ia();)
            if (b(a.next())) return !0;
        return !1
    };
    aa.hb = function(a, b) {
        for (a = Hb(a); a.ia();) b(a.next())
    };
    aa.filter = function(a, b) {
        var c = [];
        for (a = Hb(a); a.ia();) {
            var d = a.next();
            b(d) && c.push(d)
        }
        return c
    };
    aa.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (b = Hb(a); b.ia();) b.next(),
                ++c;
        else
            for (a = Hb(a); a.ia();) b(a.next()) && ++c;
        return c
    };
    aa.find = function(a, b) {
        for (a = Hb(a); a.ia();) {
            var c = a.next();
            if (b(c)) return c
        }
        return null
    };
    Yc.__name__ = "E";
    Yc.prototype = {
        i: Yc
    };
    Fa.__name__ = "F";
    Fa.B = z;
    Fa.prototype = v(z.prototype, {
        ua: function(a, b, c) {
            if (null != b)
                for (c = 0; c < b.length;) this.ua(a, null, b[c++]);
            else b = null == c ? 0 : c + 1, b > this.Ml && (this.Ml = b), this.yc.resize(this.Ml + 1), c = this.yc.c[b], null == c && (c = new Nf(b), this.yc.c[b] = c), c.add(a) && this.Xl++
        },
        detach: function(a, b) {
            b = null == b ? 0 : b + 1;
            if (0 <= b && b < this.yc.g) {
                var c =
                    this.yc.c[b];
                null != c && c.remove(a) && (this.Xl--, c.list.Hi() && (c.A(), this.yc.c[b] = null))
            }
        },
        sa: function(a, b) {
            this.buffer.g = 0;
            this.buffer.Bc(2 * this.Xl);
            var c = this.buffer.c,
                d = 0;
            if (0 < this.yc.g) {
                var e = this.yc.c[0];
                if (null != e) {
                    var f = e.list.c;
                    var g = 0;
                    for (e = e.list.g; g < e;) c[g] = f[g], ++g;
                    d = e
                }
            }
            g = null == a ? 0 : a + 1;
            if (0 <= g && g < this.yc.g && (e = this.yc.c[g], null != e)) {
                f = e.list.c;
                g = 0;
                for (e = e.list.g; g < e;) c[g + d] = f[g], ++g;
                d += e
            }
            a = new Yc(this, a, b);
            g = 0;
            for (e = d; g < e;) c[g].handle(a), ++g
        },
        o: function() {
            z.prototype.o.call(this);
            this.yc.A();
            this.yc = null;
            this.buffer.A();
            this.buffer = this.yc = this.buffer = null
        },
        i: Fa
    });
    Nf.__name__ = "10";
    Nf.prototype = {
        add: function(a) {
            if (this.list.contains(a)) return !1;
            var b = this.list;
            b.g == b.u && b.R();
            b.c[b.g++] = a;
            return !0
        },
        remove: function(a) {
            return this.list.remove(a)
        },
        A: function() {
            this.list.A();
            this.list = null
        },
        i: Nf
    };
    Wa.__name__ = "11";
    Wa.B = z;
    Wa.prototype = v(z.prototype, {
        handle: function(a) {
            z.prototype.handle.call(this, a);
            var b = this.C.C[a.type];
            if (null != b)
                for (var c = b.Rj(), d = 0; d < c.length;) {
                    var e = c[d];
                    ++d;
                    e.s(a.tc);
                    e.once && b.remove(e)
                }
        },
        bj: function(a, b, c) {
            null == c && (c = !1);
            var d = this.C.C[a];
            null == d && (d = new W, this.C.C[a] = d);
            aa.Vb(d, function(a) {
                return a.s == b
            }) || (a = new Mf(b), a.once = c, d.add(a))
        },
        o: function() {
            z.prototype.o.call(this);
            for (var a = this.C.iterator(); a.ia();) a.next().A();
            this.C = null
        },
        i: Wa
    });
    Mf.__name__ = "12";
    Mf.prototype = {
        i: Mf
    };
    Wf.__name__ = "13";
    Wf.Mv = function() {
        var a = !1;
        null == a && (a = !0);
        var b = window.navigator.userAgent;
        return ((new L("iPad", "i")).match(b) || (new L("iPhone", "i")).match(b)) && (new L("WebKit", "i")).match(b) ?
            a ? !(new L("CriOS", "i")).match(b) : !0 : !1
    };
    var sa = {
        __name__: "14",
        Pf: function(a) {
            var b = {};
            if (null != a)
                if (1 == a.length) sa.set(b, a[0]);
                else
                    for (var c = 0, d = a.length; c < d;) sa.set(b, a[c], a[c + 1]), c += 2;
            return b
        },
        jt: function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        get: function(a, b) {
            return la.Za(a, b)
        },
        set: function(a, b, c) {
            a[b] = null == c ? b : c;
            return a
        }
    };
    la.__name__ = "15";
    la.Za = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    ca.__name__ = "16";
    ca.load = function() {
        var a = Y.get("diamondrush");
        null != a && (Y.set("DiamondRush",
            a), Y.Cg("diamondrush"));
        a = Y.get("DiamondRush");
        if (null == a) ca.save();
        else try {
            var b = JSON.parse(a);
            ca.Pl = la.Za(b, "music");
            ca.Rb = la.Za(b, "sound");
            ca.Xb = la.Za(b, "highscore")
        } catch (c) {
            ca.save()
        }
    };
    ca.save = function() {
        var a = {};
        a.music = ca.Pl;
        a.sound = ca.Rb;
        a.highscore = ca.Xb;
        Y.set("DiamondRush", JSON.stringify(a))
    };
    Lf.__name__ = "17";
    Lf.prototype = {
        sv: function() {
            var a = this,
                b = new da(this.io, this.Pp);
            b.tv(0 < (this.j & 32), !1);
            b.lv();
            this.window = b;
            this.rb = new kd;
            this.rb.Yp = 0 < (this.j & 1);
            this.rb.lx();
            this.window.sx(this.rb);
            null != this.color && (this.window.color = this.color);
            this.rb.clear();
            this.window.uq = function(b) {
                a.fq(b)
            };
            this.window.fw = function() {};
            this.window.iw = function() {};
            this.window.Oa = function() {
                a.vr();
                a.eq(a.window.hc())
            };
            oa.Hb().fc = b.fc;
            null != this.io && (oa.Hb().element = b.canvas, oa.Hb().scale.b = b.canvas.width / b.canvas.scrollWidth, oa.Hb().scale.a = b.canvas.height / b.canvas.scrollHeight, oa.Hb().fc = 1);
            this.vr()
        },
        update: function(a) {
            ia.update(this.Pc, a);
            ma.ln(this.Pc, a)
        },
        pa: function() {
            ia.Sb(this.Pc);
            var a = 0 == (this.j &
                2);
            za.reset();
            0 < (this.j & 4) ? this.Pc.Dg(!0, a) : ma.Dg(this.Pc, a);
            0 < (this.j & 4) ? this.Pc.Vh() : ma.Vh(this.Pc);
            null != this.rb && (this.rb.clear(), this.rb.bu(this.Pc))
        },
        Ta: function(a, b) {
            if (!Z.Vb(a)) {
                var c = null,
                    d = null;
                null == b ? 65535 > a && (b = n.Iu(a), n.je(a), null != b && (d = ub.decode(b, !0))) : (b = n.getData(b), "string" == typeof b ? c = new Vb(b) : d = ra.aj(b));
                if (null != d) switch (String.fromCodePoint(d.a[0]) + String.fromCodePoint(d.a[1]) + String.fromCodePoint(d.a[2])) {
                    case "BMF":
                        c = new $c(d);
                        break;
                    case "TPJ":
                        c = new Vb(Of.sy(d));
                        break;
                    default:
                        c =
                            new Vb(n.wt(d))
                }
                this.rb.createTexture(a, n.getData(a), c);
                c = Z.get(a);
                n.iv(a) && "sd" == n.Yk() && (c.scale = 2)
            }
        },
        Ef: function(a) {
            a = n.Mu(a);
            for (var b = new $a, c = 0; c < a.length;) {
                var d = a[c++].split("."),
                    e = d.pop();
                d = d.join(".");
                var f = null != X[d] ? b.gc(d) : b.C[d];
                if (null == f) {
                    var g = f = [];
                    null != X[d] ? b.Dc(d, g) : b.C[d] = g
                }
                f.push(e)
            }
            for (a = new zf(b); a.ia();) c = a.next(), b = c.key, c = c.value, 2 == c.length ? ((new L("(?:png|jpg)", "")).match(c[1]) && (e = c[0], c[0] = c[1], c[1] = e), e = n.ie("" + b + "." + c[1])) : e = null, this.Ta(n.ie("" + b + "." + c[0]), e)
        },
        vr: function() {
            var a =
                this.window.hc(),
                b = a.b;
            a = a.a;
            var c = new J;
            c.b = 0;
            c.a = 0;
            c.f = b;
            c.d = a;
            this.rb.Qe.reset(c)
        },
        i: Lf
    };
    C.__name__ = "18";
    C.Sa = function(a) {
        return E.Lg(a, "")
    };
    C.parseInt = function(a) {
        if (null != a)
            for (var b = 0, c = a.length; b < c;) {
                var d = b++,
                    e = a.charCodeAt(d);
                if (8 >= e || 14 <= e && 32 != e && 45 != e)
                    if (a = parseInt(a, "x" == a[d + 1] || "X" == a[d + 1] ? 16 : 10), isNaN(a)) break;
                    else return a
            }
        return null
    };
    Bb.__name__ = "19";
    Bb.prototype = {
        i: Bb
    };
    Ma.__name__ = "1A";
    Ma.kp = function(a, b) {
        for (var c = "", d = 0; d < a.length;) {
            var e = a,
                f = d++,
                g = e.charCodeAt(f);
            55296 <= g && 56319 >=
                g && (g = g - 55232 << 10 | e.charCodeAt(f + 1) & 1023);
            e = g;
            65536 <= e && ++d;
            switch (e) {
                case 34:
                    c = b ? c + "&quot;" : c + String.fromCodePoint(e);
                    break;
                case 38:
                    c += "&amp;";
                    break;
                case 39:
                    c = b ? c + "&#039;" : c + String.fromCodePoint(e);
                    break;
                case 60:
                    c += "&lt;";
                    break;
                case 62:
                    c += "&gt;";
                    break;
                default:
                    c += String.fromCodePoint(e)
            }
        }
        return c
    };
    Ma.xp = function(a, b) {
        a = y.ki(a, b);
        return 8 < a && 14 > a ? !0 : 32 == a
    };
    Ma.Gp = function(a) {
        for (var b = a.length, c = 0; c < b && Ma.xp(a, c);) ++c;
        return 0 < c ? y.substr(a, c, b - c) : a
    };
    Ma.$w = function(a) {
        for (var b = a.length, c = 0; c < b && Ma.xp(a,
                b - c - 1);) ++c;
        return 0 < c ? y.substr(a, 0, b - c) : a
    };
    Ma.trim = function(a) {
        return Ma.Gp(Ma.$w(a))
    };
    Ma.Ry = function(a, b) {
        for (var c = ""; c = "0123456789ABCDEF".charAt(a & 15) + c, a >>>= 4, 0 < a;);
        if (null != b)
            for (; c.length < b;) c = "0" + c;
        return c
    };
    mb.__name__ = "1B";
    mb.prototype = {
        ua: function(a) {
            if (null == this.list) return this.list = new nd(a), !0;
            for (var b = this.list; null != b;) {
                if (b.lc == a) return !1;
                b = b.next
            }
            a = new nd(a);
            a.next = this.list;
            this.list = a;
            return !0
        },
        detach: function(a) {
            if (null == a && null != this.current) return this.detach(this.current), !0;
            var b = this.list;
            if (null == b) return !1;
            if (b.lc == a) return this.next == b && (this.next = b.next), b.lc = null, this.list = b.next, b.next = null, !0;
            var c = b;
            for (b = b.next; null != b;) {
                if (b.lc == a) return b.lc = null, c.next = b.next, b.next = null, this.next == b && (this.next = c.next), !0;
                c = b;
                b = b.next
            }
            return !1
        },
        A: function() {
            for (var a = this.list; null != a;) this.next = a.next, a.lc = null, a.next = null, a = this.next;
            this.list = this.next = null
        },
        i: mb
    };
    x.__name__ = "1C";
    x.ua = function(a, b) {
        null == b && (b = !1);
        b ? x.pg.ua(a) : x.ld.ua(a)
    };
    x.detach = function(a, b) {
        null ==
            b && (b = !1);
        b ? x.pg.detach(a) : x.ld.detach(a)
    };
    x.advance = function(a) {
        var b = a / 1E3;
        x.time += b;
        if (!(0 < x.Qp && x.time < x.jh + 1 / x.Qp)) {
            x.jh = x.time;
            x.time > x.Bp + 1 && (x.Jo = Math.round(.25 * x.Tl + .75 * x.Jo), x.Bp = x.time, x.Tl = 0);
            x.Tl++;
            a = x.Ut;
            x.ce += b * x.bn;
            .2 < x.ce && (x.ce = .2);
            for (; x.ce > a;) {
                x.ce -= a;
                b = x.ld;
                for (var c = b.list; null != c;) b.next = c.next, b.current = c.lc, c.lc(a), c = b.next;
                b.next = null;
                b.current = null;
                x.Io += a;
                x.first = !1
            }
            if (!x.first) {
                a = x.ce / a;
                b = x.pg;
                for (c = b.list; null != c;) b.next = c.next, b.current = c.lc, c.lc(a), c = b.next;
                b.next =
                    null;
                b.current = null
            }
        }
    };
    Ne.__name__ = "1D";
    Ne.__isInterface__ = !0;
    Ne.prototype = {
        i: Ne
    };
    F.__name__ = "1E";
    F.setTimeout = function(a, b) {
        F.ax(new Le(a), b)
    };
    F.mb = function() {
        F.bh || (F.bh = !0, F.buffer = new Bc(1024), F.Bh = new vd, F.active = new bc, F.map = new Wb(65536), F.we = new rd(function() {
            return new Me
        }, null, 1024), F.time = 0, F.Rl = F.Vy = 1, x.ld.ua(F.update))
    };
    F.ax = function(a, b) {
        var c, d;
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        F.mb();
        0 != c && 0 == d && (d = b);
        var e = F.Rl++,
            f = F.we;
        f = 0 < f.size ? f.Mc[--f.size] : f.Cl();
        f.id = e;
        f.duration =
            0;
        f.Ld = b;
        f.Xd = c;
        f.Tw = d;
        f.startTime = F.time + b;
        f.endTime = f.startTime + 0;
        f.Ki = 0;
        f.listener = a;
        a = F.buffer;
        a.u == a.g && a.R();
        a.c[(a.g++ + a.oa) % a.u] = f;
        F.map.set(f.id, f)
    };
    F.update = function(a) {
        F.mb();
        F.time += a;
        for (a = 1; 0 != F.buffer.g;) {
            var b = F.buffer,
                c = b.c[b.oa++];
            b.oa == b.u && (b.oa = 0);
            b.g--;
            c.ho || (c.Ab = a++, F.Bh.add(c))
        }
        for (; 0 != F.Bh.g;)
            if (a = F.Bh.c[1], a.ho) F.Bh.pop(), a.listener.cq(a.id), a.listener = null, b = F.we, b.size == b.df ? b.$e(a) : (b.size == b.wd && b.resize(), b.Mc[b.size++] = a), F.map.Cg(a.id);
            else {
                if (!(a.startTime <= F.time)) break;
                F.Bh.pop();
                a.startTime == a.endTime ? (a.listener.Zb(a.id, a.Ki), 0 != a.Xd ? (a.Pq(), b = F.buffer, b.u == b.g && b.R(), b.c[(b.g++ + b.oa) % b.u] = a) : (a.listener = null, b = F.we, b.size == b.df ? b.$e(a) : (b.size == b.wd && b.resize(), b.Mc[b.size++] = a), F.map.Cg(a.id))) : (a.ta = 0, a.listener.Zb(a.id, a.Ki), a.listener.hg(a.ta), F.active.append(a))
            }
        for (b = F.active.head; null != b;) a = b.Ya, a.ho ? (b = b.$f.Sj(b), a.listener.cq(a.id), a.listener = null, c = F.we, c.size == c.df ? c.$e(a) : (c.size == c.wd && c.resize(), c.Mc[c.size++] = a), F.map.Cg(a.id)) : (c = (F.time - a.startTime) /
            a.duration, a.ta = 0 > c ? 0 : 1 < c ? 1 : c, a.listener.hg(a.ta), a.endTime <= F.time ? (b = b.$f.Sj(b), a.listener.rh(a.id, a.Ki), 0 != a.Xd ? (a.Pq(), c = F.buffer, c.u == c.g && c.R(), c.c[(c.g++ + c.oa) % c.u] = a) : (a.listener = null, c = F.we, c.size == c.df ? c.$e(a) : (c.size == c.wd && c.resize(), c.Mc[c.size++] = a), F.map.Cg(a.id))) : b = b.next)
    };
    Vf.__name__ = "1F";
    Vf.__isInterface__ = !0;
    Xc.__name__ = "20";
    Xc.__isInterface__ = !0;
    Xc.prototype = {
        i: Xc
    };
    Wc.__name__ = "21";
    Wc.__isInterface__ = !0;
    Wc.__interfaces__ = [Xc];
    Wc.prototype = {
        i: Wc
    };
    Me.__name__ = "22";
    Me.__interfaces__ =
        [Vf, Wc];
    Me.prototype = {
        Pq: function() {
            this.startTime = this.endTime + this.Tw;
            this.endTime = this.startTime + this.duration;
            0 != this.Xd && (this.Xd--, this.Ki++)
        },
        compare: function(a) {
            var b = a.startTime - this.startTime;
            return 0 < b ? 1 : 0 > b ? -1 : a.Ab - this.Ab
        },
        i: Me
    };
    Le.__name__ = "23";
    Le.__interfaces__ = [Ne];
    Le.prototype = {
        Zb: function() {
            this.gb();
            this.gb = null
        },
        hg: function() {},
        rh: function() {},
        cq: function() {
            this.gb = null
        },
        i: Le
    };
    Za.__name__ = "24";
    Za.Ob = function() {};
    Za.prototype = {
        start: function() {
            var a = this;
            this.stop();
            if (this.window &&
                "undefined" !== typeof window.requestAnimationFrame) {
                var b = function(c) {
                    a.handle = window.requestAnimationFrame(b);
                    var d = c - a.now;
                    d = Math.round(100 * d);
                    d = Math.min(d, 65535);
                    Za.Ob(d);
                    x.advance(d / 100);
                    a.now = c
                };
                this.now = 0;
                this.handle = window.requestAnimationFrame(b)
            } else b = function() {
                a.handle = setTimeout(b, 16);
                var c = a.now;
                a.now = new Date;
                c = a.now - c;
                Za.Ob(c);
                x.advance(c)
            }, this.now = new Date, this.handle = setTimeout(b, 16)
        },
        stop: function() {
            this.window ? 0 > this.handle || (window.cancelAnimationFrame(this.handle), this.handle = -1) : null != this.handle && (clearInterval(this.handle), this.handle = null)
        },
        i: Za
    };
    Fb.__name__ = "25";
    Fb.Qt = function(a) {
        return new(Function.prototype.bind.apply(a, [null].concat([])))
    };
    Fb.Ek = function(a, b) {
        if (a == b) return !0;
        try {
            var c = a.N;
            if (null == c || c != b.N || a.G != b.G) return !1;
            var d = xa[c],
                e = d[d.Kb[a.G]].be;
            for (c = 0; c < e.length;) {
                var f = e[c];
                ++c;
                if (!Fb.Ek(a[f], b[f])) return !1
            }
        } catch (g) {
            return !1
        }
        return !0
    };
    Fb.hu = function(a) {
        var b = xa[a.N];
        b = b[b.Kb[a.G]].be;
        if (null != b) {
            for (var c = [], d = 0; d < b.length;) {
                var e = b[d];
                ++d;
                c.push(a[e])
            }
            return c
        }
        return []
    };
    var ta = {
        __name__: "26",
        kb: function(a) {
            return 0 > a ? 4294967296 + a : a + 0
        }
    };
    w.__name__ = "28";
    w.parse = function(a) {
        return Cb.parse(a)
    };
    w.createElement = function(a) {
        var b = new w(w.Element);
        if (b.nodeType != w.Element) throw 0;
        b.nodeName = a;
        return b
    };
    w.oi = function(a) {
        var b = new w(w.Vr);
        if (b.nodeType == w.Document || b.nodeType == w.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    w.Nt = function(a) {
        var b = new w(w.Ir);
        if (b.nodeType == w.Document || b.nodeType == w.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    w.createComment = function(a) {
        var b = new w(w.Comment);
        if (b.nodeType == w.Document || b.nodeType == w.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    w.Ot = function(a) {
        var b = new w(w.Lr);
        if (b.nodeType == w.Document || b.nodeType == w.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    w.createProcessingInstruction = function(a) {
        var b = new w(w.ProcessingInstruction);
        if (b.nodeType == w.Document || b.nodeType == w.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    w.createDocument = function() {
        return new w(w.Document)
    };
    w.prototype = {
        get: function(a) {
            if (this.nodeType != w.Element) throw 0;
            var b = this.ei;
            return null !=
                X[a] ? b.gc(a) : b.C[a]
        },
        set: function(a, b) {
            if (this.nodeType != w.Element) throw 0;
            var c = this.ei;
            null != X[a] ? c.Dc(a, b) : c.C[a] = b
        },
        Vb: function(a) {
            if (this.nodeType != w.Element) throw 0;
            var b = this.ei;
            return null != X[a] ? b.Ug(a) : b.C.hasOwnProperty(a)
        },
        attributes: function() {
            if (this.nodeType != w.Element) throw 0;
            return this.ei.keys()
        },
        Dk: function(a) {
            if (this.nodeType != w.Document && this.nodeType != w.Element) throw 0;
            for (var b = [], c = 0, d = this.children; c < d.length;) {
                var e = d[c];
                ++c;
                if (e.nodeType == w.Element) {
                    if (e.nodeType != w.Element) throw 0;
                    var f = e.nodeName == a
                } else f = !1;
                f && b.push(e)
            }
            return y.hb(b)
        },
        pu: function() {
            if (this.nodeType != w.Document && this.nodeType != w.Element) throw 0;
            for (var a = 0, b = this.children; a < b.length;) {
                var c = b[a];
                ++a;
                if (c.nodeType == w.Element) return c
            }
            return null
        },
        O: function(a) {
            if (this.nodeType != w.Document && this.nodeType != w.Element) throw 0;
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != w.Document && this.nodeType != w.Element) throw 0;
            return y.remove(this.children,
                a) ? (a.parent = null, !0) : !1
        },
        toString: function() {
            return Gc.print(this)
        },
        i: w
    };
    S.__name__ = "29";
    S.mb = function() {
        if (null == S.Go) {
            var a = qc.Tt;
            S.Gk = a("explosion", H.Mr(), .03333333333333333);
            for (var b = 7, c = S.Gk.frames.length; b < c;) S.Gk.frames[b++].Pd *= 2;
            S.Go = a("fire", H.Nr(), .03333333333333333);
            S.Rv = a("lightning1", H.En(), .03333333333333333);
            S.Sv = a("lightning2", H.En(), .03333333333333333);
            S.De = Array(7);
            S.De[0] = null;
            for (b = 1; 6 >= b;) {
                c = new Xa(b);
                switch (c.kind) {
                    case 1:
                        var d = H.Xr();
                        break;
                    case 2:
                        d = H.Yr();
                        break;
                    case 3:
                        d =
                            H.Zr();
                        break;
                    case 4:
                        d = H.$r();
                        break;
                    case 5:
                        d = H.as();
                        break;
                    case 6:
                        d = H.bs();
                        break;
                    default:
                        d = null
                }
                S.De[b] = a("gem_" + c.Wo() + "_shine", d, .016666666666666666);
                ++b
            }
            S.nv = a("hyper", H.Ur(), .03333333333333333)
        }
    };
    S.Tk = function() {
        return S.Gk
    };
    S.Uo = function() {
        return S.Go
    };
    S.Eu = function() {
        return S.Rv
    };
    S.Fu = function() {
        return S.Sv
    };
    S.Vo = function() {
        return S.nv
    };
    S.Tu = function(a) {
        return S.De[a]
    };
    lc.__name__ = "2A";
    lc.__isInterface__ = !0;
    l.__name__ = "2B";
    l.__interfaces__ = [lc];
    l.B = z;
    l.prototype = v(z.prototype, {
        xa: function() {
            return Rb.cb
        },
        v: function() {
            return Rb.cb.X
        },
        Ed: function(a) {
            this.next = a;
            return this
        },
        K: function() {
            z.prototype.K.call(this);
            l.count++
        },
        handle: function(a) {
            z.prototype.handle.call(this, a);
            4 == a.type && this.Oa()
        },
        Oa: function() {},
        o: function() {
            z.prototype.o.call(this);
            l.count--;
            null != this.next && (this.next(), this.next = null);
            this.next = null
        },
        i: l
    });
    Ke.__name__ = "2C";
    Ke.B = l;
    Ke.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this)
        },
        o: function() {
            this.v().detach(this);
            l.prototype.o.call(this)
        },
        handle: function(a) {
            l.prototype.handle.call(this,
                a);
            var b = 0;
            switch (a.type) {
                case 12:
                    a = V.translate(T.i6);
                    break;
                case 15:
                    a = V.translate(T.i3);
                    break;
                case 17:
                    b = 1;
                    switch (this.v().Re) {
                        case 1:
                            a = V.translate(T.i5);
                            break;
                        case 3:
                            a = V.translate(T.i1);
                            break;
                        case 4:
                            a = V.translate(T.i8);
                            break;
                        case 5:
                            a = V.translate(T.i0);
                            break;
                        default:
                            a = null
                    }
                    break;
                case 38:
                    a = V.translate(T.i4);
                    break;
                case 43:
                    a = V.translate(T.i7);
                    break;
                default:
                    a = null
            }
            null != a && this.v().Wv(a, b)
        },
        i: Ke
    });
    Vc.__name__ = "2D";
    Vc.prototype = {
        i: Vc
    };
    Uf.__name__ = "2E";
    Uf.__isInterface__ = !0;
    jc.__name__ = "2F";
    jc.__interfaces__ =
        [Uf];
    jc.B = Vc;
    jc.prototype = v(Vc.prototype, {
        update: function(a) {
            this.s.na && this.m.update(a)
        },
        Sn: function(a) {
            this.m = new $d(this, a);
            this.s.na = !0;
            return this.m
        },
        og: function() {
            null != this.m && (this.m.o(), this.m = null, this.s.na = !1);
            return this
        },
        Ux: function(a) {
            this.S.pf(this, a);
            var b = this.s.na;
            this.s.na = a.s.na;
            a.s.na = b
        },
        dx: function() {
            function a(a) {
                var c = b.Di;
                a = a.Di;
                c.isConnected(a) || c.Pn(a);
                a.isConnected(c) || a.Pn(c)
            }
            var b = this,
                c = this.S.cells,
                d = this.x,
                e = this.y - 1;
            this.top = 0 <= d && d < c.F && 0 <= e && e < c.Ba ? c.c[(this.y -
                1) * c.F + this.x] : null;
            d = this.x;
            e = this.y + 1;
            this.bottom = 0 <= d && d < c.F && 0 <= e && e < c.Ba ? c.c[(this.y + 1) * c.F + this.x] : null;
            d = this.x - 1;
            e = this.y;
            this.left = 0 <= d && d < c.F && 0 <= e && e < c.Ba ? c.c[this.y * c.F + (this.x - 1)] : null;
            d = this.x + 1;
            e = this.y;
            this.right = 0 <= d && d < c.F && 0 <= e && e < c.Ba ? c.c[this.y * c.F + (this.x + 1)] : null;
            null != this.top && a(this.top);
            null != this.right && a(this.right);
            null != this.bottom && a(this.bottom);
            null != this.left && a(this.left)
        },
        dt: function() {
            this.Di = this.S.vd.add(this)
        },
        A: function() {
            this.Di = this.left = this.bottom = this.right =
                this.top = this.m = this.S = this.view = null
        },
        i: jc
    });
    Kf.__name__ = "30";
    Kf.prototype = {
        hp: function() {
            return !(this.locked || this.rt || this.na)
        },
        i: Kf
    };
    Je.__name__ = "31";
    Je.B = z;
    Je.prototype = v(z.prototype, {
        update: function(a) {
            z.prototype.update.call(this, a);
            this.ma.b = this.J.x + .5;
            this.ma.a = this.J.y + .5
        },
        o: function() {
            z.prototype.o.call(this);
            this.ma = this.J = null
        },
        i: Je
    });
    Ie.__name__ = "32";
    Ie.B = l;
    Ie.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.kf = this.xa().wj
        },
        update: function(a) {
            4 == this.v().state &&
                (l.prototype.update.call(this, a), this.freeze || this.tf || this.v().paused || (0 < this.Pd ? this.Pd -= a : (this.kf = this.xa().wj - this.time, this.Be += a, 1 < this.Be && !this.tp && (--this.Be, 0 == (this.kf | 0) && (this.tp = !0), this.v().sa(42)), 0 >= this.kf && (this.tf = !0, this.v().ah(), this.v().sa(41)))))
        },
        i: Ie
    });
    He.__name__ = "33";
    He.B = l;
    He.prototype = v(l.prototype, {
        o: function() {
            l.prototype.o.call(this);
            Ea.cb().detach(B(this, this.cd))
        },
        K: function() {
            l.prototype.K.call(this);
            Ea.cb().ua(B(this, this.cd))
        },
        cd: function(a) {
            if (this.v().Gd &&
                !this.v().paused && !this.v().Hc.tf) {
                var b = this.v().selection;
                if (null == b.b || null == b.a) switch (a.type) {
                    case 0:
                        if (this.ub) break;
                        this.ub = !0;
                        b = this.v();
                        var c = new I;
                        c.b = a.x;
                        c.a = a.y;
                        b = b.fd(c);
                        if (null == b) break;
                        a = this.v().selection;
                        if (null == a.b) {
                            this.select(b);
                            break
                        }
                        var d = a.b.J;
                        if (null == d) {
                            this.v().selection.b = null;
                            break
                        }
                        var e = b.J;
                        c = e.x - d.x;
                        d = e.y - d.y;
                        switch ((0 > c ? -c : c) + (0 > d ? -d : d)) {
                            case 0:
                                this.Ak(b);
                                break;
                            case 1:
                                this.select(b);
                                break;
                            default:
                                this.Ak(a.b), this.select(b)
                        }
                        break;
                    case 1:
                        this.ub = !1;
                        break;
                    case 2:
                        if (this.ub &&
                            (b = this.v().selection.b, null != b && (c = this.v(), d = new I, d.b = a.x, d.a = a.y, a = c.fd(d), null != a))) switch (d = b.J, e = a.J, c = e.x - d.x, d = e.y - d.y, (0 > c ? -c : c) + (0 > d ? -d : d)) {
                            case 0:
                                this.ub = !0;
                                break;
                            case 1:
                                this.select(a);
                                break;
                            case 2:
                                this.Ak(b)
                        }
                }
            }
        },
        select: function(a) {
            this.v().cx(a)
        },
        Ak: function(a) {
            this.v().vo(a)
        },
        i: He
    });
    Jf.__name__ = "34";
    Jf.prototype = {
        resize: function() {
            var a = window.document.getElementById("crashdialog"),
                b = this.Pa();
            a.style.width = b.f - b.b + "px";
            a.style.height = b.d - b.a + "px";
            a.style.left = b.b + "px";
            a.style.top = b.a +
                "px"
        },
        Pa: function() {
            var a = window.innerWidth,
                b = window.innerHeight;
            var c = .8 * a | 0;
            var d = .5 * b | 0;
            var e = c / .6,
                f = d / 1,
                g = new J;
            e <= f ? (g.b = 0, g.a = 0, g.f = g.b + c, g.d = g.a + (1 * e | 0)) : (c = g.f - g.b, g.b = 0, g.f = c, c = g.d - g.a, g.a = 0, g.d = c, g.f = g.b + (.6 * f | 0), g.d = g.a + d);
            a = (a - (g.f - g.b)) / 2 | 0;
            d = g.f - g.b;
            g.b = a;
            g.f = a + d;
            b = .3 * b | 0;
            a = g.d - g.a;
            g.a = b;
            g.d = b + a;
            return g
        },
        i: Jf
    };
    Rb.__name__ = "35";
    Rb.B = Fa;
    Rb.prototype = v(Fa.prototype, {
        start: function() {
            var a = this;
            this.X.start();
            this.X.gq = function() {
                a.kk(7)
            }
        },
        pause: function() {
            this.X.paused = !0;
            this.Ad = new z;
            this.O(this.Ad);
            this.Ad.O(new Hc);
            this.Ad.O(new Ic);
            this.Hf(5)
        },
        resume: function() {
            this.X.paused = !1;
            this.Ad.o();
            this.Ad = null;
            this.Hf(6)
        },
        handle: function(a) {
            Fa.prototype.handle.call(this, a);
            3 != a.type || this.X.paused || this.pause()
        },
        update: function(a) {
            if (null != this.Ad) this.Ad.update(a);
            else switch (Fa.prototype.update.call(this, a), this.uj) {
                case 1:
                    if (0 < this.X.he()) break;
                    this.X.paused = !0;
                    this.uj = 2;
                    this.time = 0;
                    break;
                case 2:
                    1 == this.ta(1) && (t.Qh(), this.kk(8), this.uj = 3)
            }
        },
        pa: function(a) {
            null != this.Ad ? this.Ad.pa(a) :
                Fa.prototype.pa.call(this, a)
        },
        Xw: function() {
            this.resume();
            this.X.Gd = !1;
            this.uj = 1
        },
        resize: function() {
            this.Da.update(this.Z.window.hc());
            this.Hf(4)
        },
        Ef: function() {
            this.Z.Ef([13, 12, 11, 10, 9, 8, 7, 6, 5]);
            this.Z.Ta(1);
            this.Z.Ta(0);
            this.Z.Ta(23, 25);
            this.Z.Ef([23, 25, 24]);
            this.Z.Ta(21, 22);
            this.Z.Ta(20, 22);
            this.Z.Ta(18, 22);
            this.Z.Ta(17, 22);
            this.Z.Ta(16, 22);
            this.Z.Ta(15, 22);
            this.Z.Ta(19, 22);
            this.Z.Ef([25, 23])
        },
        o: function() {
            Fa.prototype.o.call(this);
            this.Ad = this.Da = this.Z = this.canvas = this.X = null
        },
        i: Rb
    });
    De.__name__ =
        "36";
    De.B = z;
    De.prototype = v(z.prototype, {
        pd: function() {
            var a = this.S.cells,
                b = this.j,
                c = b.c,
                d = b.F,
                e = 0;
            for (b = b.F * b.Ba; e < b;) {
                var f = e++;
                var g = 0;
                var k = a.c[(f / d | 0) * a.F + f % d];
                !k.s.hp() && (k.s.na && (g = 1), k.s.rt || k.s.locked) && (g |= 2);
                c[f] = g
            }
            a = this.j.F;
            c = this.j.Ba;
            e = this.stack;
            O.mb(e, 0, 0, M.Ea);
            b = this.order;
            O.mb(b, 0, 0, M.Ea);
            f = this.result;
            f.g = 0;
            for (var m;;) {
                k = !1;
                for (g = c - 1; - 1 < --g;)
                    for (d = 0; d < a;) {
                        m = this.j;
                        1 == m.c[g * m.F + d] ? (m = this.j, m = 0 == m.c[(g + 1) * m.F + d]) : m = !1;
                        if (m) {
                            for (k = g + 1;;) {
                                k + 1 < c ? (m = this.j, m = 0 == m.c[(k + 1) * m.F + d]) : m = !1;
                                if (!m) break;
                                ++k
                            }
                            var l = this.j;
                            m = g * l.F + d;
                            var u = k * l.F + d;
                            l = l.c;
                            var r = l[m];
                            l[m] = l[u];
                            l[u] = r;
                            m = b[d];
                            b[d] = m + 1;
                            f.add(m);
                            f.add(2);
                            f.add(d);
                            f.add(g);
                            f.add(d);
                            f.add(k);
                            k = !0
                        }++d
                    }
                for (d = 0; d < a;) {
                    g = this.j;
                    g = g.c[0 * g.F + d];
                    if (!(0 < g)) {
                        for (g = 0;;) {
                            g + 1 < c ? (k = this.j, k = 0 == k.c[(g + 1) * k.F + d]) : k = !1;
                            if (!k) break;
                            ++g
                        }
                        k = g;
                        g = this.j;
                        g.c[k * g.F + d] = 1;
                        g = e[d] - 1;
                        e[d] = g;
                        m = b[d];
                        b[d] = m + 1;
                        f.add(m);
                        f.add(2);
                        f.add(d);
                        f.add(g);
                        f.add(d);
                        f.add(k);
                        k = !0
                    }++d
                }
                if (!k) break
            }
            return f
        },
        o: function() {
            z.prototype.o.call(this);
            this.result.A();
            this.j.A();
            this.order =
                this.stack = this.j = this.S = this.result = null
        },
        i: De
    });
    M.__name__ = "37";
    M.__interfaces__ = [lc];
    M.B = z;
    M.prototype = v(z.prototype, {
        wi: function(a) {
            var b = this.cells.c,
                c = 0;
            var d = this.cells;
            for (var e = d.F * d.Ba; c < e;) d = b[c++], d.s.na && a(d, d.m)
        },
        pf: function(a, b) {
            var c = a.m,
                d = b.m;
            a.m = d;
            b.m = c;
            null != c && (c.J = b);
            null != d && (d.J = a)
        },
        rx: function() {
            var a = this;
            this.cells.forEach(function(a) {
                return a.og()
            });
            this.cells.forEach(function(b) {
                b.Sn(new Xa(a.Ai()));
                return b
            });
            this.Tx()
        },
        Fx: function() {
            for (var a = 0, b = this.cells.c, c = b.length,
                    d = M.Ea - 1, e = !1, f = !1, g = this.X.kc, k; 100 > a++;) {
                for (var m = 0; m < c;) e = b[m++], e.s.na && e.m.s.qf && (k = b[Eb.ol(d)], k.m.s.qf && this.pf(e, k));
                e = g.Np();
                if (!e && (f = null == g.Vg(), !f)) break
            }
            return e || f ? !1 : !0
        },
        ru: function(a, b) {
            b.Bc(b.g + 8);
            this.cells.Kt(a.x, a.y, function(a) {
                null != a && (b.g == b.u && b.R(), b.c[b.g++] = a);
                return !0
            })
        },
        sk: function() {
            var a = 0;
            this.cells.hb(function(b) {
                b.s.na && b.m.s.Mf && (a += 1);
                return !0
            });
            return a
        },
        Lt: function() {
            var a = 0;
            this.cells.hb(function(b) {
                b.s.hp() && (a += 1)
            });
            return a
        },
        Tx: function() {
            var a = this;
            if (this.gv() &&
                this.hv())
                for (var b = this.X.kc, c = 0; !(100 < ++c);)
                    if (b.Gw(), b.Np()) this.wi(function(b, c) {
                        c.s.Ee && (c.code.kind = a.Ai());
                        return !0
                    });
                    else if (null != b.Vg()) break
        },
        gv: function() {
            for (var a = this.cells.iterator(); a.ia();) {
                var b = a.next();
                if (b.s.na && b.m.s.Ee) return !0
            }
            return !1
        },
        hv: function() {
            for (var a, b = this.cells.iterator(); b.ia();) {
                var c = b.next();
                if (a = c.s.na && c.m.s.qf) {
                    a = c.right;
                    if (null != a && a.s.na && a.m.s.qf) return !0;
                    a = c.bottom;
                    if (null != a && a.s.na && a.m.s.qf) return !0
                }
            }
            return !1
        },
        Ai: function() {
            var a = Eb.ol(this.xi.length -
                1);
            return this.xi[a]
        },
        ww: function() {
            for (var a = [], b = 0; 6 > b;) a.push(b++ + 1);
            this.xi = a
        },
        o: function() {
            z.prototype.o.call(this);
            for (var a = this.cells.iterator(); a.ia();) {
                var b = a.next();
                b.s.na && b.m.o()
            }
            for (a = this.cells.iterator(); a.ia();) a.next().A();
            this.cells.A();
            this.vd.A();
            this.xi = this.X = this.vd = this.cells = null
        },
        i: M
    });
    Uc.__name__ = "38";
    Uc.__interfaces__ = [lc];
    Uc.B = l;
    Uc.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().Gd = !1;
            this.v().Hc.freeze = !0;
            this.v().S.Fx();
            this.state = 0
        },
        update: function(a) {
            var b =
                this;
            l.prototype.update.call(this, a);
            switch (this.state) {
                case 0:
                    this.v().sa(15);
                    this.time = 0;
                    this.state++;
                    break;
                case 1:
                    1 < this.time && (this.state++, this.time = 0);
                    break;
                case 2:
                    this.v().S.wi(function(a, d) {
                        b.v().ec(new qe(d, 0))
                    });
                    this.state++;
                    break;
                case 3:
                    0 < this.v().he(76) || (this.v().Gd = !0, this.v().Hc.freeze = !1, this.v().Og = !0, this.o())
            }
        },
        i: Uc
    });
    If.__name__ = "39";
    If.prototype = {
        update: function(a) {
            a = G.mc(a.b, a.a);
            switch (a.bl()) {
                case 0:
                case 1:
                    this.Gt(a);
                    break;
                case 2:
                    this.Ft(a)
            }
        },
        Gt: function(a) {
            a.nc(.05, 0);
            var b =
                new G;
            b.xb(1);
            a.Dd(b);
            if (.6 < b.da() / a.da()) {
                var c = .6 * a.da();
                b.kx(c, c)
            }
            a.ma(b);
            a.ft(b, .5, .6);
            if (Wf.Mv()) {
                c = b.H.b + (b.H.b / 2 | 0);
                var d = b.H,
                    e = d.f - d.b;
                d.b = c;
                d.f = c + e
            }
            var f = G.ph(b.H.b, 0, b.H.f, b.H.a);
            f.nc(0, .1);
            c = (new G).xb(5).oc(b.$() / 2);
            f.ca(c, -1, 1);
            d = (new G).xb(1).oc(.1 * b.$());
            f.ca(d, 0, 1);
            e = (new G).xb(5).oc(b.$() / 2);
            f.ca(e, 1, 1);
            f.Om(c.H.a);
            f.Om(f.H.d - .1 * f.da());
            var g = (new G).xb(2);
            f.Dd(g);
            f.ca(g, 0, 0);
            a = G.ph(b.H.b, b.H.d, b.H.f, a.H.d);
            a.nc(0, .1);
            f = (new G).xb(1).oc(b.$() / 6);
            a.ca(f, 0, -1);
            var k = .75 * f.$();
            k = (new G).xb(1).oc(k);
            a.ca(k, -1, 1);
            var m = (new G).xb(1).oc(k.da());
            a.ca(m, 1, 1);
            this.Lc = g.ra();
            this.la = c.ra();
            this.time = e.ra();
            this.ad = d.ra();
            this.S = b.ra();
            this.hint = f.ra();
            this.pause = k.ra();
            this.Rb = m.ra()
        },
        Ft: function(a) {
            var b = a.H.f;
            a.nc(.1, .1);
            a.zx(a.H.f - .1 * b);
            var c = a.Wm(.3);
            a = new G;
            a.xb(1);
            c.right.Dd(a);
            c.right.nc(.05, 0);
            c.right.ma(a);
            c.right.ca(a, -1, 0);
            c.left.Bx(a.H.a);
            c.left.Om(a.H.d);
            var d = c.left;
            d.Ax(d.H.b + (c.left.$() - c.left.$() * (a.$() / c.right.$())));
            d = G.mc(c.left.$(), .25 * c.left.da());
            c.left.Dd(d);
            c.left.ca(d, 0, -1);
            var e = G.mc(c.left.$(), .12 * a.da());
            c.left.ca(e, 0, 0);
            e.aa(d.H.d + .2 * e.da());
            var f = G.mc(c.left.$(), .12 * a.da());
            c.left.ca(f, 0, 0);
            f.aa(e.H.d + 1.2 * e.da());
            var g = (new G).xb(1).oc(a.$() / 10);
            f.ca(g, 0, 0);
            g.aa(f.H.a - g.da());
            var k = c.left.Vm(.6);
            c = (new G).xb(1).oc(a.$() / 10);
            k.bottom.ca(c, 0, 1);
            var m = (new G).xb(1.8).oc(a.$() / 4);
            G.ph(k.bottom.H.b, f.H.d, k.bottom.H.f, c.H.a).ca(m, 0, 0);
            b = G.ph(a.H.f, a.H.a, b, a.H.d);
            k = b.H.b + a.$() / 30;
            var l = b.H,
                u = l.f - l.b;
            l.b = k;
            l.f = k + u;
            k = (new G).xb(1).oc(a.$() / 10);
            b.ca(k, -1, 1);
            this.Lc = d.ra();
            this.la = e.ra();
            this.time = f.ra();
            this.ad = g.ra();
            this.S = a.ra();
            this.hint = m.ra();
            this.pause = c.ra();
            this.Rb = k.ra()
        },
        i: If
    };
    Hf.__name__ = "3A";
    Hf.prototype = {
        o: function() {
            this.X = null;
            for (var a = this.result.iterator(); a.ia();) a.next().m = null;
            this.result.A()
        },
        Hx: function(a) {
            this.reset();
            if (0 != a.length) {
                for (var b = 0; b < a.length;) {
                    var c = a[b];
                    ++b;
                    2 == c.code.Ma && this.Mh(c, 0)
                }
                for (b = 0; b < a.length;) c = a[b], ++b, 1 == c.code.Ma && this.Lh(c, 0);
                this.Fk()
            }
        },
        Jx: function() {
            this.reset();
            var a = [];
            this.X.S.wi(function(b, c) {
                0 != c.code.Ma &&
                    a.push(c)
            });
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                9 == c.code.kind && this.Yd(c, 0, 16)
            }
            for (b = 0; b < a.length;) c = a[b], ++b, 2 == c.code.Ma && this.Mh(c, 0);
            for (b = 0; b < a.length;) c = a[b], ++b, 1 == c.code.Ma && this.Lh(c, 0);
            this.Fk();
            return 0 < a.length
        },
        Ix: function(a, b) {
            this.reset();
            this.jl = 9 == a.code.kind && 9 == b.code.kind;
            0 == a.code.Ma && 9 == b.code.kind ? this.fr(b, a) : this.fr(a, b);
            a = this.Fk();
            this.X.$t(a);
            this.jl = !1;
            for (b = this.X.S.cells.iterator(); b.ia();) {
                var c = b.next();
                c.s.na && c.m.freeze(a)
            }
        },
        reset: function() {
            this.result.hb(function(a) {
                a.reset()
            });
            this.Zl = this.$l = this.Yl = 0
        },
        Lh: function(a, b) {
            null == b && (b = 0);
            var c = this.dh,
                d = 0 < c.size ? c.Mc[--c.size] : c.Cl();
            d.g = 0;
            d.Cc = !0;
            c = d.iterator();
            this.xu(a, function(a, b) {
                a = b | a.J.x << 8 | a.J.y << 16;
                d.g == d.u && d.R();
                d.c[d.g++] = a
            });
            if (0 != d.g) {
                0 < d.g && d.pp(function(a, b) {
                    return (a & 255) - (b & 255)
                }, 0, d.g);
                a = this.X.S.cells;
                c.c = c.eb.c;
                c.Fb = c.eb.g;
                for (c.Wa = 0; c.Wa < c.Fb;) {
                    var e = c.c[c.Wa++];
                    var f = e >> 8 & 255;
                    var g = e >> 16 & 255;
                    f = a.c[g * a.F + f].m;
                    e &= 255;
                    g = b + (e - 1);
                    2 != f.code.Ma && (this.X.eh && 2 >= e && (f.ad = 2), this.Yd(f, g, 1 == f.code.Ma ? 1 : 2))
                }
                c.c =
                    c.eb.c;
                c.Fb = c.eb.g;
                for (c.Wa = 0; c.Wa < c.Fb;) e = c.c[c.Wa++], f = e >> 8 & 255, g = e >> 16 & 255, f = a.c[g * a.F + f].m, 2 == f.code.Ma && (e &= 255, g = b + (e - 1), this.Mh(f, g))
            }
            d.Cc = !1;
            b = this.dh;
            b.size == b.df ? b.$e(d) : (b.size == b.wd && b.resize(), b.Mc[b.size++] = d)
        },
        Mh: function(a, b) {
            null == b && (b = 0);
            this.Yd(a, b, 4);
            var c = this.X.S.cells,
                d = this.dh;
            d = 0 < d.size ? d.Mc[--d.size] : d.Cl();
            d.g = 0;
            d.Cc = !0;
            var e = d.iterator(),
                f = a.J;
            a = 0;
            for (var g = f.top; null != g;) {
                ++a;
                if (this.Rd(g) && 9 != g.m.code.kind) {
                    var k = g.m,
                        m = this.result,
                        l = k.J;
                    m = m.c[l.y * m.F + l.x];
                    if (null == m.m ||
                        b + a < m.Ab) k = k.J, k = a | k.y * c.F + k.x << 16, d.g == d.u && d.R(), d.c[d.g++] = k
                }
                g = g.top
            }
            a = 0;
            for (g = f.bottom; null != g;) ++a, this.Rd(g) && 9 != g.m.code.kind && (k = g.m, m = this.result, l = k.J, m = m.c[l.y * m.F + l.x], null == m.m || b + a < m.Ab) && (k = k.J, k = a | k.y * c.F + k.x << 16, d.g == d.u && d.R(), d.c[d.g++] = k), g = g.bottom;
            a = 0;
            for (g = f.left; null != g;) ++a, this.Rd(g) && 9 != g.m.code.kind && (k = g.m, m = this.result, l = k.J, m = m.c[l.y * m.F + l.x], null == m.m || b + a < m.Ab) && (k = k.J, k = a | k.y * c.F + k.x << 16, d.g == d.u && d.R(), d.c[d.g++] = k), g = g.left;
            a = 0;
            for (g = f.right; null != g;) ++a, this.Rd(g) &&
                9 != g.m.code.kind && (f = g.m, k = this.result, m = f.J, k = k.c[m.y * k.F + m.x], null == k.m || b + a < k.Ab) && (f = f.J, f = a | f.y * c.F + f.x << 16, d.g == d.u && d.R(), d.c[d.g++] = f), g = g.right;
            e.c = e.eb.c;
            e.Fb = e.eb.g;
            for (e.Wa = 0; e.Wa < e.Fb;) g = e.c[e.Wa++], a = g & 255, g >>>= 16, g = c.c[(g / c.F | 0) * c.F + g % c.F].m, 0 == g.code.Ma && this.Yd(g, b + a, 8);
            e.c = e.eb.c;
            e.Fb = e.eb.g;
            for (e.Wa = 0; e.Wa < e.Fb;) g = e.c[e.Wa++], a = g & 255, g >>>= 16, g = c.c[(g / c.F | 0) * c.F + g % c.F].m, 2 == g.code.Ma ? this.Mh(g, b + a) : 1 == g.code.Ma && this.Lh(g, b + a);
            d.Cc = !1;
            b = this.dh;
            b.size == b.df ? b.$e(d) : (b.size == b.wd &&
                b.resize(), b.Mc[b.size++] = d)
        },
        fr: function(a, b) {
            var c = new W;
            var d = this.X.S.cells.iterator();
            for (var e = 0; d.Wa < d.Fb;) {
                var f = d.c[d.Wa++];
                f.s.na && this.Rd(f) && f.m != a && (9 == b.code.kind ? f.m != b && this.Rd(f) && (f = f.m, c.g == c.u && c.R(), c.c[c.g++] = f) : f.m.code.match(b.code) && this.Rd(f) && (f = f.m, c.g == c.u && c.R(), c.c[c.g++] = f))
            }
            c.sort(function(b, c) {
                var d = b.J,
                    e = a.J;
                b = e.x - d.x;
                d = e.y - d.y;
                e = c.J;
                var f = a.J;
                c = f.x - e.x;
                e = f.y - e.y;
                return (0 > b ? -b : b) + (0 > d ? -d : d) - ((0 > c ? -c : c) + (0 > e ? -e : e))
            });
            if (9 == b.code.kind) {
                for (c = c.iterator(); c.ia();) this.Yd(c.next(),
                    e, 2), ++e;
                this.Yd(a, e, 16);
                this.Yd(b, e, 16)
            } else {
                f = 0;
                var g = c.g;
                for (this.uf.g = 0; f < g;)
                    if (d = c.c[f], 0 != d.code.Ma) {
                        var k = c.c;
                        k[f] = k[--c.g];
                        --g;
                        k = this.uf;
                        k.g == k.u && k.R();
                        k.c[k.g++] = d
                    } else ++f;
                g = this.uf;
                d = g.c;
                f = 0;
                for (g = g.g; f < g;) k = f++, c.g == c.u && c.R(), c.c[c.g++] = d[k];
                f = this.uf.g = 0;
                for (g = c.g; f < g;) {
                    d = c.c[f];
                    if (d == b) {
                        c.Kq(f);
                        b = this.uf;
                        b.g == b.u && b.R();
                        b.c[b.g++] = d;
                        break
                    }++f
                }
                c.Dw(this.uf.c[0]);
                this.kl.Im(null);
                b = a;
                f = 0;
                for (g = c.g; f < g;) {
                    d = c.c[f++];
                    k = this.kl;
                    var m = d.J;
                    k.c[m.y * k.F + m.x] = b;
                    b = d;
                    this.Yd(d, e, 32);
                    ++e
                }
                b = 0;
                for (f =
                    c.g; b < f;)
                    if (d = c.c[b++], 0 != d.code.Ma) switch (e = this.result, g = d.J, e = e.c[g.y * e.F + g.x].Ab, d.code.Ma) {
                        case 1:
                            this.Lh(d, e);
                            break;
                        case 2:
                            this.Mh(d, e)
                    }
                    this.Yd(a, e++, 16);
                this.Lh(a, e)
            }
        },
        Fk: function() {
            var a = this,
                b = this.result,
                c = 0;
            b.hb(function(a) {
                a = a.Ab;
                c = a > c ? a : c
            });
            var d = .1;
            this.jl && (d = .05);
            var e = c * d;
            this.vj.g = 0;
            b.hb(function(b) {
                if (0 < b.type) {
                    var c = a.vj;
                    c.g == c.u && c.R();
                    c.c[c.g++] = b
                }
            });
            this.vj.sort();
            var f = this.vj;
            b = f.c;
            var g = 0;
            for (f = f.g; g < f;) {
                var k = b[g++],
                    m = k.Ab * d;
                a.X.Uf || a.X.Fj++;
                switch (k.type) {
                    case 1:
                        a.X.hi(k.m,
                            m, 100);
                        a.Yl++;
                        break;
                    case 2:
                        a.X.hi(k.m, m, 25);
                        break;
                    case 4:
                        a.X.ao(k.m, m, 200);
                        a.$l++;
                        break;
                    case 8:
                        a.X.ao(k.m, m, 50);
                        break;
                    case 16:
                        a.X.hi(k.m, m, 1E3);
                        a.Zl++;
                        break;
                    case 32:
                        var l = a.kl,
                            u = k.m.J;
                        a.X.qt(k.m, l.c[u.y * l.F + u.x], m)
                }
            }
            return e
        },
        xu: function(a, b) {
            var c = this.uf;
            c.g = 0;
            c.g == c.u && c.R();
            c.c[c.g++] = a;
            this.marks.Im(0);
            var d;
            a = this.Pj;
            a.g = 0;
            for (var e = this.X.S, f = 1; 0 < c.g;) {
                for (d = c.iterator(); d.ia();) {
                    var g = d.next();
                    var k = g.J;
                    var m = this.marks;
                    0 < m.c[k.y * m.F + k.x] || (m = this.marks, m.c[k.y * m.F + k.x] = 1, this.Rd(k) && b(g,
                        f))
                }
                for (k = c.iterator(); k.ia();) e.ru(k.next().J, a);
                c.g = 0;
                ++f;
                for (k = a.iterator(); k.ia();) g = k.next(), g.s.na && (d = g.m, 9 != d.code.kind && (m = this.marks, 0 < m.c[g.y * m.F + g.x] || (m = this.marks, m.c[g.y * m.F + g.x] = 1, this.Rd(g) && (1 == d.code.Ma ? (b(d, f + 1), d = g.m, c.g == c.u && c.R(), c.c[c.g++] = d) : b(d, f)))));
                a.g = 0;
                ++f
            }
        },
        Yd: function(a, b, c) {
            var d = this.result,
                e = a.J;
            d = d.c[e.y * d.F + e.x];
            null == d.m ? d.set(a, b, c) : b < d.Ab && 0 == (d.type & 48) && d.set(a, b, c)
        },
        Rd: function(a) {
            return !a.s.locked && a.s.na && a.m.s.td()
        },
        i: Hf
    };
    Ge.__name__ = "3B";
    Ge.__interfaces__ =
        [Xc];
    Ge.prototype = {
        set: function(a, b, c) {
            this.m = a;
            this.Ab = b;
            this.type = c;
            return this
        },
        reset: function() {
            this.m = null;
            this.Ab = 0;
            this.type = -1
        },
        compare: function(a) {
            return this.Ab - a.Ab
        },
        i: Ge
    };
    var nb = xa.e0 = {
        Ub: !0,
        Kb: ["i0", "i1"]
    };
    nb.i0 = {
        G: 0,
        N: "e0",
        toString: D
    };
    nb.i1 = {
        G: 1,
        N: "e0",
        toString: D
    };
    nb.pc = [nb.i0, nb.i1];
    var R = xa.e1 = {
        Ub: !0,
        Kb: "i0 i1 i2 i3 i4 i5".split(" ")
    };
    R.i0 = {
        G: 0,
        N: "e1",
        toString: D
    };
    R.i1 = (Da = function(a) {
        var b = {
            G: 1,
            N: "e1",
            toString: D
        };
        b.axis = a;
        return b
    }, Da.be = ["axis"], Da);
    R.i2 = (Da = function(a) {
        var b = {
            G: 2,
            N: "e1",
            toString: D
        };
        b.axis = a;
        return b
    }, Da.be = ["axis"], Da);
    R.i3 = (Da = function(a) {
        var b = {
            G: 3,
            N: "e1",
            toString: D
        };
        b.axis = a;
        return b
    }, Da.be = ["axis"], Da);
    R.i4 = {
        G: 4,
        N: "e1",
        toString: D
    };
    R.i5 = {
        G: 5,
        N: "e1",
        toString: D
    };
    R.pc = [R.i0, R.i4, R.i5];
    Gf.__name__ = "3C";
    Gf.prototype = {
        iu: function(a) {
            if (this.size != a.size) return !1;
            for (var b = this.V, c = a.V, d, e = 0, f = 0, g = this.size; f < g;) {
                var k = f++;
                a = b[k];
                for (var m = 0, l = this.size; m < l;)
                    if (++m, d = c[k], a == d) {
                        ++e;
                        break
                    }
            }
            return e == this.size
        },
        Se: function() {
            for (var a = 0, b = M.Ea; a < b;) {
                var c = a++;
                null !=
                    this.V[c] && (this.V[c] = null)
            }
        },
        trim: function() {
            for (var a = this.size, b = M.Ea; a < b;) {
                var c = a++;
                null != this.V[c] && (this.V[c] = null)
            }
        },
        bp: function() {
            for (var a = Array(this.size), b = 0, c = this.size; b < c;) {
                var d = b++;
                a[d] = this.V[d]
            }
            return a
        },
        i: Gf
    };
    Fe.__name__ = "3D";
    Fe.B = z;
    Fe.prototype = v(z.prototype, {
        Zv: function(a, b, c) {
            this.Sq = b;
            this.Tq = c;
            this.result.g = 0;
            this.Nq();
            var d = a.cells;
            b = d.c[b.y * d.F + b.x];
            c = d.c[c.y * d.F + c.x];
            a.vd.clearMarks();
            d = this.Nf(b);
            a.vd.clearMarks();
            a = this.Nf(c);
            if (3 > d.length && 3 > a.length) return !1;
            d = 3 > d.length ?
                null : this.Lk(d);
            a = 3 > a.length ? null : this.Lk(a);
            if (null == d && null == a) return !1;
            if (null != d)
                for (var e = 0; e < d.length;) {
                    var f = d[e];
                    ++e;
                    f.kind != R.i0 && (b.m.s.pb = !0, this.result.add(f))
                }
            if (null != a)
                for (b = 0; b < a.length;)
                    if (d = a[b], ++b, d.kind != R.i0) {
                        e = !1;
                        var g = this.result;
                        f = g.c;
                        var k = 0;
                        for (g = g.g; k < g;) f[k++].iu(d) && (e = !0);
                        e || (this.result.add(d), c.m.s.pb = !0)
                    }
            this.$q(this.result);
            return !0
        },
        $q: function(a) {
            var b = a.c,
                c = 0;
            for (a = a.g; c < a;)
                for (var d = b[c++], e = 0, f = d.size; e < f;) d.V[e++].s.Ka = !0
        },
        Nq: function() {
            this.S.cells.hb(function(a) {
                a.s.na &&
                    (a.m.s.Ka = !1)
            })
        },
        mu: function() {
            this.result.g = 0;
            var a = this.S.cells;
            this.S.vd.clearMarks();
            this.Nq();
            for (var b = a.Ba, c; 0 <= --b;)
                for (var d = 0, e = a.Ba; d < e;)
                    if (c = a.c[b * a.F + d++], c = this.Nf(c), !(3 > c.length) && (c = this.Lk(c), null != c))
                        for (var f = 0; f < c.length;) this.result.add(c[f++]);
            return 0 < this.result.g ? (this.$q(this.result), !0) : !1
        },
        Lk: function(a) {
            this.Jj(a);
            for (var b = null, c = this.Qg(), d = !0; d;) {
                d = !1;
                for (var e = 0; 4 > e;) {
                    switch (e++) {
                        case 0:
                            var f = this.Ik(a, c);
                            break;
                        case 1:
                            f = this.Jk(a, c);
                            break;
                        case 2:
                            f = this.Kk(a, c);
                            break;
                        case 3:
                            f = this.Wg(a, c);
                            break;
                        default:
                            f = !1
                    }
                    if (f) {
                        null == b && (b = []);
                        b.push(c);
                        a = this.Sw(a, c);
                        c = this.Qg();
                        d = !0;
                        break
                    }
                }
            }
            return b
        },
        Sw: function(a, b) {
            for (var c = [], d = 0; d < a.length;) {
                var e = a[d];
                ++d;
                for (var f = !1, g = 0, k = b.size; g < k;)
                    if (b.V[g++].J == e) {
                        f = this.Oe;
                        f.c[e.y * f.F + e.x] = !1;
                        f = !0;
                        break
                    }
                f || c.push(e)
            }
            return c
        },
        Nf: function(a) {
            var b = [];
            this.S.vd.Zt(!0, a.Di, function(c, d) {
                c = c.Ya;
                if (d) return c.s.na && a.s.na ? (c = c.m, d = a.m, c.code.match(d.code) && c.s.td() ? d.s.td() : !1) : !1;
                if (c.s.na && a.s.na) {
                    d = c.m;
                    var e = a.m;
                    d = d.code.match(e.code) &&
                        d.s.td() && e.s.td()
                } else d = !1;
                d && b.push(c);
                return !0
            }, null, !0);
            return b
        },
        Jj: function(a) {
            var b = this.Oe;
            O.mb(b.c, !1);
            for (var c = 0; c < a.length;) {
                var d = a[c];
                ++c;
                b.c[d.y * b.F + d.x] = !0
            }
        },
        Wg: function(a, b) {
            var c = a.length;
            if (2 > c) return b.kind = R.i0, b.size = 0, b.Se(), !1;
            for (var d, e = 0, f = nb.i0, g = this.Qj, k, m = this.Oe, l = 0; l < c;) {
                k = l++;
                d = a[k].m.code;
                for (k = a[k];;) {
                    var u = k.left;
                    if (!(null != u && u.s.na && u.m.code.match(d) && m.c[u.y * m.F + u.x])) break;
                    k = k.left
                }
                for (g.g = 0; null != k && k.s.na && k.m.code.match(d) && m.c[k.y * m.F + k.x];) g.c[g.g++] =
                    k, k = k.right;
                d = g.g;
                if (d > e)
                    for (e = d, k = 0; k < d;) u = k++, b.V[u] = g.c[u].m
            }
            for (l = 0; l < c;) {
                k = l++;
                d = a[k].m.code;
                for (k = a[k];;) {
                    u = k.top;
                    if (!(null != u && u.s.na && u.m.code.match(d) && m.c[u.y * m.F + u.x])) break;
                    k = k.top
                }
                for (g.g = 0; null != k && k.s.na && k.m.code.match(d) && m.c[k.y * m.F + k.x];) g.c[g.g++] = k, k = k.bottom;
                d = g.g;
                if (d > e) {
                    e = d;
                    for (f = 0; f < d;) k = f++, b.V[k] = g.c[k].m;
                    f = nb.i1
                }
            }
            if (3 > e) return b.kind = R.i0, b.size = 0, b.Se(), !1;
            5 < e && (e = 5);
            b.size = e;
            switch (e) {
                case 3:
                    a = R.i1(f);
                    break;
                case 4:
                    a = R.i2(f);
                    break;
                case 5:
                    a = R.i3(f);
                    break;
                default:
                    a = R.i0
            }
            b.kind =
                a;
            b.trim();
            return !0
        },
        Ik: function(a, b) {
            if (this.Wg(a, b) && 3 == b.kind.G) return !0;
            b.kind = R.i0;
            b.size = 0;
            b.Se();
            return !1
        },
        Fo: function(a, b) {
            if (this.Wg(a, b) && 2 == b.kind.G) return !0;
            b.kind = R.i0;
            b.size = 0;
            b.Se();
            return !1
        },
        Eo: function(a, b) {
            if (this.Wg(a, b) && 1 == b.kind.G) return !0;
            b.kind = R.i0;
            b.size = 0;
            b.Se();
            return !1
        },
        Jk: function(a, b) {
            for (var c = this.Oe, d = 0; d < a.length;) {
                var e = a[d];
                ++d;
                for (var f = 0, g = e.top; null != g && c.c[g.y * c.F + g.x];) ++f, g = g.top;
                var k = 0;
                for (g = e.bottom; null != g && c.c[g.y * c.F + g.x];) ++k, g = g.bottom;
                var m = 0;
                for (g =
                    e.left; null != g && c.c[g.y * c.F + g.x];) ++m, g = g.left;
                var l = 0;
                for (g = e.right; null != g && c.c[g.y * c.F + g.x];) ++l, g = g.right;
                g = 0;
                2 <= f && (g = 1);
                2 <= k && (g |= 2);
                2 <= m && (g |= 4);
                2 <= l && (g |= 8);
                if (5 == g) return b.kind = R.i4, b.size = 5, b.V[0] = e.m, b.V[1] = e.left.m, b.V[2] = e.left.left.m, b.V[3] = e.top.m, b.V[4] = e.top.top.m, !0;
                if (9 == g) return b.kind = R.i4, b.size = 5, b.V[0] = e.m, b.V[1] = e.right.m, b.V[2] = e.right.right.m, b.V[3] = e.top.m, b.V[4] = e.top.top.m, !0;
                if (6 == g) return b.kind = R.i4, b.size = 5, b.V[0] = e.m, b.V[1] = e.left.m, b.V[2] = e.left.left.m, b.V[3] =
                    e.bottom.m, b.V[4] = e.bottom.bottom.m, !0;
                if (10 == g) return b.kind = R.i4, b.size = 5, b.V[0] = e.m, b.V[1] = e.right.m, b.V[2] = e.right.right.m, b.V[3] = e.bottom.m, b.V[4] = e.bottom.bottom.m, !0
            }
            b.kind = R.i0;
            b.size = 0;
            b.Se();
            return !1
        },
        Kk: function(a, b) {
            for (var c = this.Oe, d = 0; d < a.length;) {
                var e = a[d];
                ++d;
                for (var f = 0, g = e.top; null != g && c.c[g.y * c.F + g.x];) ++f, g = g.top;
                var k = 0;
                for (g = e.bottom; null != g && c.c[g.y * c.F + g.x];) ++k, g = g.bottom;
                var m = 0;
                for (g = e.left; null != g && c.c[g.y * c.F + g.x];) ++m, g = g.left;
                var l = 0;
                for (g = e.right; null != g && c.c[g.y *
                        c.F + g.x];) ++l, g = g.right;
                if (1 <= f && 1 <= k) {
                    if (2 <= m) return b.kind = R.i5, b.size = 5, b.V[0] = e.m, b.V[1] = e.top.m, b.V[2] = e.bottom.m, b.V[3] = e.left.m, b.V[4] = e.left.left.m, !0;
                    if (2 <= l) return b.kind = R.i5, b.size = 5, b.V[0] = e.m, b.V[1] = e.top.m, b.V[2] = e.bottom.m, b.V[3] = e.right.m, b.V[4] = e.right.right.m, !0
                }
                if (1 <= m && 1 <= l) {
                    if (2 <= k) return b.kind = R.i5, b.size = 5, b.V[0] = e.m, b.V[1] = e.left.m, b.V[2] = e.right.m, b.V[3] = e.bottom.m, b.V[4] = e.bottom.bottom.m, !0;
                    if (2 <= f) return b.kind = R.i5, b.size = 5, b.V[0] = e.m, b.V[1] = e.left.m, b.V[2] = e.right.m,
                        b.V[3] = e.top.m, b.V[4] = e.top.top.m, !0
                }
            }
            b.kind = R.i0;
            b.size = 0;
            b.Se();
            return !1
        },
        Qg: function() {
            return new Gf
        },
        Vg: function(a) {
            function b(a, b) {
                if (null != b && b.s.na && a.m.s.qf && b.m.s.qf) {
                    e.pf(a, b);
                    g = 0;
                    var d = 6;
                    var k = c(a);
                    6 > k && (g += 1);
                    6 > k && (d = k);
                    k = c(b);
                    6 > k && (g += 1);
                    k < d && (d = k);
                    e.pf(a, b);
                    2 == g && (m.b = a, m.a = b, d <<= 1);
                    d < f && (f = d, m.b = a, m.a = b)
                }
            }

            function c(b) {
                e.vd.clearMarks();
                b = d.Nf(b);
                if (3 > b.length) return 6;
                d.Jj(b);
                b = d.Eo(b, k) ? !0 : d.Fo(b, k) ? !0 : d.Jk(b, k) ? !0 : d.Kk(b, k) ? !0 : d.Ik(b, k);
                return null == a || a(k) ? b ? k.size : 6 : 6
            }
            for (var d =
                    this, e = this.S, f = 6, g = 0, k = this.Qg(), m = new Ae(null, null), l = e.cells.iterator(); l.ia();) {
                var u = l.next();
                if (u.s.na) {
                    b(u, u.right);
                    if (3 == f) break;
                    b(u, u.bottom);
                    if (3 == f) break
                }
            }
            return null == m.b ? null : m
        },
        Do: function(a) {
            var b = this.Qg();
            this.S.vd.clearMarks();
            a = this.Nf(a);
            3 <= a.length && this.Jj(a);
            this.Eo(a, b) || this.Fo(a, b) || this.Jk(a, b) || this.Kk(a, b) || this.Ik(a, b);
            return b
        },
        Gw: function() {
            function a(a, d, e, f) {
                function g(a, d) {
                    switch (f.G) {
                        case 0:
                            var e = c.c[d * c.F + a];
                            break;
                        case 1:
                            e = c.c[a * c.F + d]
                    }
                    a = e.m.code.kind;
                    for (d = 0; e.m.s.Ee &&
                        100 > d++;)
                        if (e.m.code.kind = b.S.Ai(), e.m.code.kind != a) return !0;
                    return !1
                }
                switch (a) {
                    case 3:
                        g(e + 1, d) || g(e, d) || g(e + 2, d);
                        break;
                    case 4:
                        a = e + 1;
                        switch (f.G) {
                            case 0:
                                var k = c.c[d * c.F + a];
                                break;
                            case 1:
                                k = c.c[a * c.F + d]
                        }
                        if (k.m.s.Ee) {
                            a = e + 2;
                            switch (f.G) {
                                case 0:
                                    var m = c.c[d * c.F + a];
                                    break;
                                case 1:
                                    m = c.c[a * c.F + d]
                            }
                            a = m.m.s.Ee
                        } else a = !1;
                        if (a) {
                            g(e + 1, d);
                            g(e + 2, d);
                            break
                        }
                        g(e, d) && g(e + 3, d);
                        break;
                    case 5:
                        if (g(e + 2, d)) break;
                        a = e + 1;
                        switch (f.G) {
                            case 0:
                                var l = c.c[d * c.F + a];
                                break;
                            case 1:
                                l = c.c[a * c.F + d]
                        }
                        if (l.m.s.Ee) {
                            a = e + 3;
                            switch (f.G) {
                                case 0:
                                    var q = c.c[d *
                                        c.F + a];
                                    break;
                                case 1:
                                    q = c.c[a * c.F + d]
                            }
                            a = q.m.s.Ee
                        } else a = !1;
                        a && (g(e + 1, d), g(e + 3, d));
                        break;
                    default:
                        m = !0;
                        for (q = 0; q < a;)
                            if (k = q++, 0 == (k & 1)) {
                                k = e + k;
                                switch (f.G) {
                                    case 0:
                                        var r = c.c[d * c.F + k];
                                        break;
                                    case 1:
                                        r = c.c[k * c.F + d]
                                }
                                if (r.m.s.Ee) {
                                    m = !1;
                                    break
                                }
                            }
                        if (m)
                            for (r = 0; r < a;) m = r++, 0 == (m & 1) && g(e + m, d);
                        else
                            for (r = 0; r < a;) m = r++, 1 == (m & 1) && g(e + m, d)
                }
            }
            for (var b = this, c = this.S.cells, d = c.F, e = c.Ba, f = null, g = 0, k = 0; k < e;) {
                for (var m = 0, l = 0; l < d;)
                    if (0 == m) f = c.c[k * c.F + l], g = l, ++m, ++l;
                    else {
                        var u = c.c[k * c.F + l];
                        if (u.s.na && f.s.na) {
                            u = u.m;
                            var r = f.m;
                            u = u.code.match(r.code) &&
                                u.s.td() && r.s.td()
                        } else u = !1;
                        u ? (++m, ++l) : (2 < m && a(m, k, g, nb.i0), m = 0)
                    }
                2 < m && a(m, k, g, nb.i0);
                ++k
            }
            for (k = g = 0; k < d;) {
                for (l = m = 0; l < e;) 0 == m ? (f = c.c[l * c.F + k], g = l, ++m, ++l) : (u = c.c[l * c.F + k], u.s.na && f.s.na ? (u = u.m, r = f.m, u = u.code.match(r.code) && u.s.td() && r.s.td()) : u = !1, u ? (++m, ++l) : (2 < m && a(m, k, g, nb.i1), m = 0));
                2 < m && a(m, k, g, nb.i1);
                ++k
            }
        },
        Np: function() {
            var a = this.Qg();
            var b = this.S.vd;
            b.clearMarks();
            for (var c = b.bf; null != c;) {
                if (!c.jc && (b = this.Nf(c.Ya), 3 <= b.length && (this.Jj(b), this.Wg(b, a), a.kind != R.i0))) return !0;
                c = c.next
            }
            return !1
        },
        o: function() {
            z.prototype.o.call(this);
            this.Oe.A();
            this.result.A();
            this.Qj.A();
            this.S = this.Qj = this.Oe = this.Tq = this.Sq = this.result = null
        },
        i: Fe
    });
    Ae.__name__ = "3E";
    Ae.prototype = {
        i: Ae
    };
    Ra.__name__ = "3F";
    Ra.B = l;
    Ra.prototype = v(l.prototype, {
        vt: function(a, b) {
            null == b && (b = 1);
            null == Ra.frames && (Ra.frames = [], Ra.frames[1] = H.Or(), Ra.frames[2] = H.Pr(), Ra.frames[3] = H.Qr(), Ra.frames[4] = H.Rr(), Ra.frames[5] = H.Sr(), Ra.frames[6] = H.Tr());
            var c = this.v().rd(2),
                d = this.v().xq,
                e = a.position.b,
                f = a.position.a;
            a = a.m.code.kind;
            for (var g =
                    0; 5 > g;) {
                var k = new K(c, 9, Ra.frames[a][g++]);
                k.ha(e);
                k.aa(f);
                k.Ua();
                k.Ia();
                var m = d.ct();
                m.Xf = 3;
                m.lj = e;
                m.mj = f;
                m.Gr = Kb.Ko(500 * b);
                m.Yj = Kb.Mk(-500 * b, -1E3 * b);
                m.fk += Kb.Ko(100);
                m.$n = 2E3;
                this.Aa.append(k);
                this.ed.append(m)
            }
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            a = this.ed.head;
            for (var b, c = this.Aa.head, d; null != a;) b = a.Ya, d = c.Ya, 0 >= b.Xf ? (d.A(), a.Ya = null, c.Ya = null, a = a.$f.Sj(a), c = c.$f.Sj(c)) : (d.ha(b.lj), d.aa(b.mj), d.hd(b.rotation), d.qa(b.Xf / 3), a = a.next, c = c.next)
        },
        o: function() {
            this.ed.A();
            this.ed = null;
            this.Aa.A();
            l.prototype.o.call(this);
            this.Aa = this.ed = null
        },
        i: Ra
    });
    Ee.__name__ = "40";
    Ee.B = l;
    Ee.prototype = v(l.prototype, {
        ct: function() {
            var a = new Ff;
            this.ed.add(a);
            return a
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            for (var b = this.ed, c = b.g, d; - 1 < --c;) d = b.c[c], d.Ab(a), 0 >= d.Xf && (d = b.c, d[c] = d[--b.g])
        },
        o: function() {
            this.ed.A();
            this.ed = null;
            l.prototype.o.call(this);
            this.ed = null
        },
        i: Ee
    });
    Ff.__name__ = "41";
    Ff.prototype = {
        Ab: function(a) {
            this.Yj += this.$n * a;
            this.lj += this.Gr * a;
            this.mj += this.Yj * a;
            this.rotation += this.fk *
                a;
            this.Xf -= a
        },
        i: Ff
    };
    $d.__name__ = "42";
    $d.prototype = {
        o: function() {
            this.J = null;
            null != this.view && this.view.o();
            this.view = null
        },
        at: function(a) {
            this.code.Ma = a;
            9 == a && (this.code.kind = 9)
        },
        br: function(a, b) {
            this.position.b = a + .5;
            this.position.a = b + .5
        },
        freeze: function(a) {
            this.Xg = a;
            this.Rc.a = 0;
            this.force.a = 0;
            a = this.J.y + .5;
            this.position.a >= a && (this.position.a = a);
            this.Qf = !0
        },
        update: function(a) {
            if (this.Qf) {
                this.Xg -= a;
                if (0 < this.Xg) return;
                this.Xg = 0;
                this.Qf = !1
            }
            this.Bv(a)
        },
        Bv: function(a) {
            this.Qf || (this.Rc.b += this.force.b *
                a, this.Rc.a += this.force.a * a, 0 < this.zk && (this.Rc.b *= 1 - this.zk, this.Rc.a *= 1 - this.zk), this.position.b += this.Rc.b * a, this.position.a += this.Rc.a * a, this.force.b = 0, this.force.a = 0)
        },
        i: $d
    };
    Ef.__name__ = "43";
    Ef.prototype = {
        td: function() {
            return this.rf || this.Mf || this.Nl || this.fe || this.Tc || null == this.m.J || this.m.J.s.locked ? !1 : !0
        },
        $u: function() {
            return this.rf || this.Mf || this.Nl || this.fe || this.Tc || this.selected || this.Ka || null == this.m.J || this.m.J.s.locked ? !1 : !0
        },
        i: Ef
    };
    Xa.__name__ = "44";
    Xa.Ok = function(a) {
        var b = a / 10 | 0,
            c = new Xa(b);
        c.Ma = a - 10 * b;
        return c
    };
    Xa.prototype = {
        match: function(a) {
            return this.kind == a.kind
        },
        Wo: function() {
            return Xa.names[0][this.kind]
        },
        i: Xa
    };
    Db.__name__ = "45";
    Db.B = l;
    Db.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.m.view = this;
            this.ko = 150;
            this.nn()
        },
        Mp: function(a) {
            null == a && (a = !1);
            null != this.m && (a ? this.De = !0 : 3 < this.Dj && (this.Dj = 0, this.De = !0))
        },
        Bt: function(a) {
            this.O(new oe(a))
        },
        Wt: function(a) {
            this.O(new Pc(a, 1))
        },
        Xt: function(a) {
            this.O(new Pc(a, 2))
        },
        jd: function(a) {
            this.O(new fe(a))
        },
        py: function(a) {
            this.O(new ee(a))
        },
        ry: function(a) {
            this.O(new ce(a));
            this.O(new me)
        },
        qy: function(a) {
            this.O(new de(a))
        },
        Qx: function(a) {
            switch (this.m.code.Ma) {
                case 1:
                    this.O(new ie(a));
                    break;
                case 2:
                    this.O(new ge(a));
                    break;
                case 9:
                    this.O(new he(a))
            }
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            this.Dj += a
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            this.nn();
            this.De = !1
        },
        nn: function() {
            this.position.b = this.m.position.b * this.ko;
            this.position.a = this.m.position.a * this.ko
        },
        o: function() {
            l.prototype.o.call(this);
            this.position = this.m = null
        },
        i: Db
    });
    Eb.__name__ = "46";
    Eb.mb = function(a) {
        Eb.Zw = new pd(a)
    };
    Eb.ol = function(a) {
        return Eb.Zw.Fw(0, a)
    };
    Tc.__name__ = "47";
    Tc.__interfaces__ = [lc];
    Tc.B = z;
    Tc.prototype = v(z.prototype, {
        ku: function() {
            for (var a = this.cl.pd(), b, c, d, e = this.X.S.cells, f = 0, g = a.g; f < g;) {
                var k = a.c[f];
                f += 2;
                c = a.c[f++];
                var m = a.c[f++];
                d = a.c[f++];
                b = a.c[f++];
                k *= .05;
                0 > m ? (d = e.c[b * e.F + d], b = d.Sn(new Xa(this.X.S.Ai())), b.br(c, m), b = d.m, this.X.Gj(b, k)) : (c = e.c[m * e.F + c], d = e.c[b * e.F + d], c.Ux(d), b = d.m, this.X.zo(b, k))
            }
            null != this.X.selection.b &&
                this.X.selection.b.s.Mf && this.X.vo(this.X.selection.b)
        },
        o: function() {
            z.prototype.o.call(this);
            this.cl.o();
            this.X = this.cl = null
        },
        i: Tc
    });
    Ce.__name__ = "48";
    Ce.B = l;
    Ce.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this)
        },
        o: function() {
            this.v().detach(this);
            l.prototype.o.call(this)
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            !this.by && 5 > this.v().Hc.kf && (this.by = !0, this.play(t.Hn, 0))
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            switch (a.type) {
                case 10:
                    this.play(t.ds);
                    break;
                case 12:
                    this.play(t.ks, 0);
                    break;
                case 14:
                    this.play(t.ms);
                    break;
                case 15:
                    this.play(t.Ds);
                    break;
                case 16:
                    this.gw();
                    break;
                case 19:
                    this.play(t.Cs, 0);
                    break;
                case 22:
                    this.ow();
                    break;
                case 24:
                    this.play(t.ps);
                    break;
                case 27:
                    switch (sa.get(a.tc, "magic")) {
                        case 1:
                            this.play(t.fs);
                            break;
                        case 2:
                            this.play(t.rs);
                            break;
                        case 9:
                            this.play(t.ns)
                    }
                    break;
                case 28:
                    this.play(t.gs);
                    break;
                case 29:
                    this.play(t.ss);
                    break;
                case 30:
                    this.play(t.os);
                    break;
                case 31:
                    this.nw();
                    break;
                case 34:
                    this.hw();
                    break;
                case 35:
                    this.play(t.Bs);
                    break;
                case 36:
                    this.play(t.Kn);
                    break;
                case 37:
                    this.play(t.Kn, .025);
                    break;
                case 38:
                    this.play(t.qs);
                    break;
                case 40:
                    this.play(t.es);
                    break;
                case 41:
                    this.stop(t.Hn);
                    break;
                case 43:
                    this.play(t.hs);
                    break;
                case 44:
                    this.play(t.Ts)
            }
        },
        ow: function() {
            this.play(t.Ss, 0)
        },
        gw: function() {
            if (this.v().eh) this.play(t.cs);
            else {
                var a = this.v().Re;
                0 < this.v().Re && this.v().Uf && ++a;
                switch (a) {
                    case 0:
                        a = t.ts;
                        break;
                    case 1:
                        a = t.us;
                        break;
                    case 2:
                        a = t.vs;
                        break;
                    case 3:
                        a = t.ws;
                        break;
                    case 4:
                        a = t.xs;
                        break;
                    case 5:
                        a = t.ys;
                        break;
                    case 6:
                        a = t.zs;
                        break;
                    case 7:
                        a = t.Jn;
                        break;
                    default:
                        a = t.Jn
                }
                this.play(a,
                    0)
            }
        },
        nw: function() {
            var a = this.v().speed.Cb;
            if (!(2 > a)) {
                switch (a) {
                    case 2:
                        var b = t.Fs;
                        break;
                    case 3:
                        b = t.Hs;
                        break;
                    case 4:
                        b = t.Js;
                        break;
                    case 5:
                        b = t.Ls;
                        break;
                    case 6:
                        b = t.Ns;
                        break;
                    case 7:
                        b = t.Ps;
                        break;
                    case 8:
                        b = t.Rs;
                        break;
                    case 9:
                        b = t.Mn;
                        break;
                    default:
                        b = t.Mn
                }
                this.play(b, 0);
                switch (a) {
                    case 2:
                        a = t.Es;
                        break;
                    case 3:
                        a = t.Gs;
                        break;
                    case 4:
                        a = t.Is;
                        break;
                    case 5:
                        a = t.Ks;
                        break;
                    case 6:
                        a = t.Ms;
                        break;
                    case 7:
                        a = t.Os;
                        break;
                    case 8:
                        a = t.Qs;
                        break;
                    case 9:
                        a = t.Ln;
                        break;
                    default:
                        a = t.Ln
                }
                this.play(a)
            }
        },
        hw: function() {
            2 <= this.v().lf && this.play(t.As)
        },
        play: function(a, b) {
            null == b && (b = -1);
            if (!(0 > a)) {
                var c = 0 == b;
                if (0 < b) {
                    var d = pa.Jc(),
                        e = d.Nj;
                    d.Nj = b;
                    t.play(a, !1, c);
                    d.Nj = e
                } else t.play(a, !1, c)
            }
        },
        stop: function(a) {
            t.stop(a)
        },
        i: Ce
    });
    H.__name__ = "49";
    H.Pb = function(a, b) {
        var c = new L("{(d+)}", "");
        c.match(a);
        var d = c.Ka(1).length;
        c = new L("{d{" + d + "}}", "i");
        var e = [],
            f = 1;
        for (b += 1; f < b;) {
            var g = f++;
            for (g = null == g ? "null" : "" + g; g.length < d;) g = "0" + g;
            e.push(a.replace(c.r, g))
        }
        return e
    };
    H.Nr = function() {
        return H.Pb("fire{dddd}", 32)
    };
    H.Mr = function() {
        return H.Pb("explosion{dddd}",
            15)
    };
    H.bs = function() {
        return H.Pb("gem_yellow_shine{dddd}", 20)
    };
    H.Xr = function() {
        return H.Pb("gem_blue_shine{dddd}", 20)
    };
    H.Zr = function() {
        return H.Pb("gem_purple_shine{dddd}", 20)
    };
    H.Yr = function() {
        return H.Pb("gem_green_shine{dddd}", 20)
    };
    H.$r = function() {
        return H.Pb("gem_red_shine{dddd}", 20)
    };
    H.as = function() {
        return H.Pb("gem_white_shine{dddd}", 20)
    };
    H.En = function() {
        return H.Pb("lightning{dddd}", 80)
    };
    H.Sr = function() {
        return H.Pb("gem_white_particle{dddd}", 5)
    };
    H.Pr = function() {
        return H.Pb("gem_green_particle{dddd}",
            5)
    };
    H.Or = function() {
        return H.Pb("gem_blue_particle{dddd}", 5)
    };
    H.Tr = function() {
        return H.Pb("gem_yellow_particle{dddd}", 5)
    };
    H.Qr = function() {
        return H.Pb("gem_purple_particle{dddd}", 5)
    };
    H.Rr = function() {
        return H.Pb("gem_red_particle{dddd}", 5)
    };
    H.Ur = function() {
        return H.Pb("gem_hyper{dddd}", 55)
    };
    t.__name__ = "4A";
    t.bj = function() {
        pa.Jc().Mm(1)
    };
    t.bm = function() {
        pa.Jc().Mm(0)
    };
    t.play = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = !1);
        null == b && (b = !1);
        return pa.Jc().play(a, b, c, d)
    };
    t.stop = function(a, b) {
        null == b && (b =
            0);
        pa.Jc().stop(a, b)
    };
    t.Hk = function(a, b) {
        pa.Jc().Hk(a, b)
    };
    t.Qh = function() {
        pa.Jc().Qh()
    };
    Be.__name__ = "4B";
    Be.B = l;
    Be.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this)
        },
        o: function() {
            this.v().detach(this);
            l.prototype.o.call(this)
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            switch (a.type) {
                case 13:
                    this.sf = 0;
                    break;
                case 14:
                    1 < this.Cb && (this.Yh = !1, this.qg(0));
                    break;
                case 16:
                    if (!this.v().Uf) break;
                    0 == this.Cb ? (this.qg(1), this.Zi = 0) : this.sf < 3 - this.Zi ? (this.qg(this.Cb + 1), this.Zi =
                        .05 * (this.Cb - 2), this.Yh = !1, this.Zh = 0) : this.qg(0);
                    this.sf = 0;
                    break;
                case 41:
                    this.qg(0)
            }
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            4 == this.v().state && (0 < this.Ld && (this.Ld -= a, 0 > this.Ld && (this.Ld = 0)), 0 == this.v().he(22) && 0 == this.Ld && (this.sf += a), 2 > this.Cb || (this.Yh ? (this.km += a, this.Zh = this.km / 1, this.sf > 3 - this.Zi && (this.Yh = !1, this.qg(0))) : this.sf > 3 - this.Zi - 1 && (this.km = 0, this.Yh = !0, this.Zh = 0, this.v().sa(32))))
        },
        qg: function(a) {
            this.Cb = a;
            if (1 != this.Cb && (1 < this.Cb ? this.v().sa(31) : 0 == this.Cb && this.v().sa(33),
                    9 == this.Cb)) {
                this.Cb = 0;
                this.v().lf++;
                a = this.v().Ll;
                var b = this.v().lf;
                this.v().Ll = a > b ? a : b;
                this.v().sa(34)
            }
        },
        i: Be
    });
    Sc.__name__ = "4C";
    Sc.B = Fa;
    Sc.prototype = v(Fa.prototype, {
        gq: function() {},
        K: function() {
            Fa.prototype.K.call(this);
            this.Hd = new z;
            this.Hd.Qc = !1;
            this.Hd.name = "actions";
            this.S = new M(this);
            this.kc = new Fe(this.S);
            this.um = new Tc(this);
            this.oe = new Hf(this);
            this.O(this.Hc = new Ie);
            this.O(this.speed = new Be);
            this.O(new Ce);
            this.O(new ke);
            this.O(new le);
            this.O(new Ke);
            this.O(this.xq = new Ee);
            this.O(this.wq =
                new Ra);
            this.O(new je);
            this.S.rx();
            var a = new z;
            this.O(a);
            a.O(new Rd);
            a.O(new Sd);
            a.O(new Qd);
            cb.fv() && a.O(new Md);
            a.O(new Qb);
            a.O(new Od);
            a.O(new Ld);
            a.O(new Kd);
            a.O(new Nd);
            a.O(new Pd);
            this.O(new He)
        },
        rd: function(a) {
            return this.uc(Qb, null, !0).Yo(a)
        },
        start: function() {
            this.lb(1)
        },
        cx: function(a) {
            this.Sh = 0;
            this.zl = !1;
            var b = this.selection;
            if (null != b.b && null != b.a || !a.s.$u() || 3 == this.he(22)) return !1;
            if (null == this.selection.b) this.selection.b = a, a.s.selected = !0, this.sa(19);
            else {
                if (!this.selection.b.s.td() ||
                    9 == this.selection.b.code.kind && 9 == a.code.kind) return this.selection.b.s.selected = !1, this.sa(21), this.selection.b = null, !1;
                this.selection.a = a;
                a.s.selected = !0;
                this.sa(20)
            }
            return !0
        },
        vo: function(a) {
            this.Sh = 0;
            this.zl = !1;
            var b = this.selection;
            if (null != b.b && null != b.a || !a.s.selected) return !1;
            a.s.selected = !1;
            this.sa(21);
            this.selection.b = null;
            return !0
        },
        fd: function(a) {
            var b = this.Uc.Da.S,
                c = (b.f - b.b) / M.Ea,
                d = (a.b - b.b) / c;
            if (0 > d) return null;
            a = (a.a - b.a) / c;
            if (0 > a) return null;
            d |= 0;
            a |= 0;
            b = this.S.cells;
            if (!(0 <= d && d < b.F &&
                    0 <= a && a < b.Ba)) return null;
            b = this.S.cells;
            return b.c[a * b.F + d].m
        },
        Wv: function(a, b, c) {
            null == b && (b = 0);
            this.O(new Vd(a, b, c))
        },
        Lq: function() {
            if (4 != this.state || this.Hc.tf || this.vl || 0 < this.he() || 0 < this.S.sk() || !this.Gd) return !1;
            this.vl = !0;
            var a = this.ou();
            if (null != a) {
                for (var b = 0; b < a.length;) this.ec(new ue(a[b++]));
                this.sa(14)
            }
            return !0
        },
        rn: function() {
            var a = this;
            this.$i++;
            return function() {
                a.$i--
            }
        },
        $t: function(a) {
            this.zf += a;
            this.Gd = !1
        },
        lb: function(a) {
            this.Bg = 0;
            this.state = a
        },
        wy: function(a) {
            this.Bg += a;
            switch (this.state) {
                case 1:
                    this.sa(9);
                    this.O(new lb);
                    this.sa(10);
                    this.lb(2);
                    break;
                case 2:
                    this.xr(a);
                    this.S.cells.hb(function(b) {
                        b.update(a)
                    });
                    null == this.uc(lb) && (this.sa(11), this.lb(3));
                    break;
                case 3:
                    0 == this.$i && (this.sa(12), this.sa(13), this.Sh = this.Oj = 0, this.Gd = this.Hj = this.Og = !0, this.lb(4));
                    break;
                case 4:
                    var b = this.selection;
                    null != b.b && null != b.a && (this.Hc.tf ? (this.selection.b = null, this.selection.a = null) : (this.Hj = !1, this.Vx()));
                    !this.zl && 3 < this.Sh && (this.zl = !0, this.sa(45));
                    this.paused || this.step(a);
                    this.Hc.tf && (this.ah(), 0 == this.he() +
                        this.S.sk() && (this.Gd = !1, this.lb(5)));
                    break;
                case 5:
                    if (.1 < this.Bg) {
                        var c = 0;
                        this.S.wi(function(a, b) {
                            0 != b.code.Ma && (c += 1)
                        });
                        0 == c ? (this.sa(39), this.sa(43), this.lb(9)) : (this.sa(38), this.lb(6))
                    }
                    break;
                case 6:
                    1 < this.Bg && (this.Hj = !this.oe.Jx(), this.tk(), this.lb(7));
                    break;
                case 7:
                    this.step(a);
                    this.Hj && this.lb(8);
                    break;
                case 8:
                    1 < this.Bg && (this.sa(43), this.lb(9));
                    break;
                case 9:
                    0 == this.$i && 2 < this.Bg && (this.sa(44), this.O(new Oc), this.lb(10));
                    break;
                case 10:
                    null == this.uc(Oc) && (this.gq(), this.lb(0))
            }
        },
        update: function(a) {
            this.wy(a);
            Fa.prototype.update.call(this, a)
        },
        step: function(a) {
            !this.Gd && 0 < this.zf && (this.zf -= a, 0 >= this.zf && (this.zf = 0, this.Gd = !0));
            this.xr(a);
            this.S.cells.hb(function(b) {
                b.update(a)
            });
            var b = 0 == this.he(-1, 22);
            b && 0 < this.S.Lt() && (this.um.ku(), this.Og = !1);
            if (0 == this.S.sk() && b && (this.Oj += a, this.Sh += a, !this.Og))
                if (this.Og = !0, 4 != this.state || this.Hc.tf || null != this.kc.Vg())
                    if (this.kc.mu()) {
                        this.Re++;
                        b = this.Kl;
                        var c = this.Re;
                        this.Kl = b > c ? b : c;
                        this.sa(17);
                        this.gr(!1)
                    } else 0 < this.Re && this.sa(18), this.Fj = this.Re = 0, this.Hj = !0, b = this.Tp, c = this.si, this.Tp = b > c ? b : c, this.si = 0, 4 < this.Oj && this.Lq();
            else this.ah(), this.O(new Uc), this.Og = !1
        },
        Vx: function() {
            9 == this.selection.b.code.kind || 9 == this.selection.a.code.kind ? (this.oe.Ix(this.selection.b, this.selection.a), this.tk()) : (this.sa(22), this.ec(new pe(this.selection)));
            this.selection.b = null;
            this.selection.a = null;
            this.Oj = 0;
            this.ah()
        },
        ah: function() {
            if (this.vl) {
                this.vl = !1;
                for (var a = this.Hd.firstChild; null != a;) {
                    var b = a.L;
                    35 == a.type && a.o();
                    a = b
                }
            }
        },
        xr: function(a) {
            this.Hd.update(a)
        },
        he: function(a, b) {
            null == b && (b = -1);
            null == a && (a = -1);
            if (0 > a && 0 > b) return this.Hd.Bi();
            for (var c = 0, d = this.Hd.firstChild; null != d;) d.type != b && (0 > a || d.type == a) && ++c, d = d.L;
            return c
        },
        gr: function(a) {
            this.ah();
            var b = this.kc.result;
            if (!b.Hi()) {
                b.Cc = !0;
                this.eh = (this.Uf = a) && 2 == b.g;
                this.Zp++;
                this.sa(16);
                for (var c = [], d = b.iterator(); d.ia();)
                    for (var e = d.next(), f = 0, g = e.size; f < g;) {
                        var k = e.V[f++];
                        0 != k.code.Ma && c.push(k)
                    }
                this.oe.Hx(c);
                this.tk();
                for (c = b.iterator(); c.ia();) {
                    d = c.next();
                    e = !1;
                    f = 0;
                    for (g = d.size; f < g;)
                        if (k = d.V[f++].s,
                            k.fe || k.Tc) e = !0;
                    if (!e) switch (a || (this.Fj += d.size), d.kind.G) {
                        case 1:
                            e = d.V[1];
                            e.Bd = 100;
                            this.Uf && 1 < this.speed.Cb && (e.Bd += 100 * this.speed.Cb);
                            this.Ci(e);
                            e = 0;
                            for (d = d.bp(); e < d.length;) this.ec(new we(d[e++]));
                            break;
                        case 2:
                            d = new kc(d);
                            d.next = function() {};
                            this.ec(d);
                            break;
                        case 3:
                            d = new kc(d);
                            d.next = function() {};
                            this.ec(d);
                            break;
                        case 4:
                        case 5:
                            d = new kc(d), d.next = function() {}, this.ec(d)
                    }
                }
                this.eh = this.Uf = !1;
                b.g = 0;
                b.Cc = !1
            }
        },
        Ci: function(a) {
            0 < a.Bd && (a = a.Bd * a.ad * this.lf, this.la += a, this.si += a, ha.Tv(this.la))
        },
        wg: function(a) {
            0 <
                a.Bd && (a.ad *= this.lf, this.sa(26, sa.Pf(["piece", a])))
        },
        tk: function() {
            this.Ul += this.oe.Yl;
            this.Wl += this.oe.$l;
            this.Vl += this.oe.Zl
        },
        ou: function() {
            var a = this.kc.Vg(function(a) {
                for (var b = 0, c = 0, d = a.size; c < d;) b += a.V[c++].code.Ma;
                return 0 == b
            });
            null == a && (a = this.kc.Vg());
            if (null == a) return [];
            var b = a.b,
                c = a.a;
            this.S.pf(b, c);
            var d = this.kc.Do(a.b);
            Fb.Ek(d.kind, R.i0) && (d = this.kc.Do(a.a));
            if (Fb.Ek(d.kind, R.i0)) return [];
            this.S.pf(b, c);
            a = d.bp();
            return 3 <= a.length ? a : null
        },
        $v: function(a, b) {
            (a = this.kc.Zv(this.S, a.J, b.J)) ?
            this.gr(!0): this.sa(24);
            return a
        },
        Gj: function(a, b) {
            this.sa(25, sa.Pf(["piece", a]));
            this.ec(new Rc(a, b))
        },
        zo: function(a, b) {
            this.ec(new ve(a, b))
        },
        ec: function(a) {
            this.Hd.O(a)
        },
        hi: function(a, b, c) {
            this.ec(new ye(a, b, c))
        },
        ao: function(a, b, c) {
            this.ec(new xe(a, b, c))
        },
        qt: function(a, b, c) {
            this.ec(new se(a, b, c))
        },
        o: function() {
            this.selection.b = null;
            this.selection.a = null;
            this.S.o();
            this.kc.o();
            this.um.o();
            this.Hd.o();
            this.oe.o();
            this.Pj.A();
            Fa.prototype.o.call(this);
            this.Uc = this.Pj = this.oe = this.um = this.Hd = this.wq =
                this.xq = this.speed = this.kc = this.S = this.Hc = null
        },
        i: Sc
    });
    kc.__name__ = "4D";
    kc.B = l;
    kc.prototype = v(l.prototype, {
        update: function(a) {
            var b = this;
            l.prototype.update.call(this, a);
            switch (this.state) {
                case 0:
                    if (0 < this.Bi()) break;
                    this.state++;
                    break;
                case 1:
                    a = this.match;
                    for (var c = 0, d = a.size; c < d;) {
                        var e = c++;
                        e = a.V[e];
                        e.s.Nl = !1;
                        e.s.pb || (e.J.s.locked = !1, e.s.Tc = !0, e.J.og())
                    }
                    switch (this.match.kind.G) {
                        case 2:
                            a = 1;
                            break;
                        case 3:
                            a = 9;
                            break;
                        case 4:
                        case 5:
                            a = 2;
                            break;
                        default:
                            a = 0
                    }
                    this.pb.at(a);
                    this.pb.view.Qx(function() {
                        b.state++
                    });
                    this.v().sa(27, sa.Pf(["magic", a]));
                    this.state++;
                    break;
                case 3:
                    this.v().wg(this.pb), this.pb.J.s.locked = !1, this.pb.s.Ka = !1, this.o()
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.pb = this.match = null
        },
        i: kc
    });
    ze.__name__ = "4E";
    ze.B = z;
    ze.prototype = v(z.prototype, {
        update: function(a) {
            z.prototype.update.call(this, a);
            a = this.ta(.25);
            var b = U.Nc(3)(a),
                c = this.b.J.y - this.a.J.y;
            this.a.position.b = this.a.J.x + .5 + (this.b.J.x - this.a.J.x) * b;
            this.a.position.a = this.a.J.y + .5 + c * b;
            1 == a && this.o()
        },
        o: function() {
            z.prototype.o.call(this);
            this.a = this.b = null
        },
        i: ze
    });
    ye.__name__ = "4F";
    ye.B = l;
    ye.prototype = v(l.prototype, {
        update: function(a) {
            var b = this;
            l.prototype.update.call(this, a);
            switch (this.state) {
                case 0:
                    if (0 > this.time) break;
                    a = function() {
                        b.state++
                    };
                    switch (this.m.code.Ma) {
                        case 1:
                            this.m.view.py(a);
                            this.v().sa(28);
                            break;
                        case 9:
                            this.m.view.qy(a);
                            break;
                        default:
                            this.m.view.Wt(a)
                    }
                    this.state++;
                    break;
                case 2:
                    this.v().wg(this.m), a = this.m.J, a.og(), a.s.locked = !1, this.o()
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = null
        },
        i: ye
    });
    xe.__name__ = "50";
    xe.B = l;
    xe.prototype = v(l.prototype, {
        update: function(a) {
            var b = this;
            l.prototype.update.call(this, a);
            switch (this.state) {
                case 0:
                    if (0 > this.time) break;
                    a = function() {
                        b.state++
                    };
                    2 == this.m.code.Ma ? this.m.view.ry(a) : this.m.view.Xt(a);
                    this.v().wg(this.m);
                    this.state++;
                    break;
                case 2:
                    this.m.J.s.locked = !1, this.m.J.og(), this.o()
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = null
        },
        i: xe
    });
    we.__name__ = "51";
    we.B = l;
    we.prototype = v(l.prototype, {
        i: we
    });
    ve.__name__ = "52";
    ve.B = l;
    ve.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this,
                a);
            if (!this.m.Qf)
                if (a = this.m.s, a.fe || a.Tc) this.o();
                else if (!(0 > this.time)) {
                a = this.m;
                var b = a.J.y + .5;
                a.force.a += 100;
                a.position.a >= b && (a.position.a = b, b = a.force, b.b = 0, b.a = 0, this.v().sa(35), b = a.Rc, b.b = 0, b.a = 0, a.s.Mf = !1, a.J.s.locked = !1, this.o())
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = null
        },
        i: ve
    });
    ue.__name__ = "53";
    ue.B = l;
    ue.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.m.s;
            if (a.fe || a.Tc) this.o();
            else switch (this.state) {
                case 0:
                    a = this.ta(1);
                    var b = Math.sin(6.283185307179586 *
                        a);
                    if (1 == a) {
                        var c = b;
                        c = 0 < c ? .01 > c : .01 > -c
                    } else c = !1;
                    c && (this.time = 0, this.m.view.scale = 1, this.state++);
                    b = .5 > a ? Va.map(b, 0, 1, 1, 1.3) : Va.map(b, -1, 0, .75, 1);
                    this.m.view.scale = b;
                    break;
                case 1:
                    1 == this.ta(1) && (this.time = 0, this.state--);
                    break;
                case 2:
                    a = this.m.view.scale, b = this.m.view, b.scale += .5 * (1 - a), a = b.scale, --a, (0 < a ? .01 > a : .01 > -a) && this.o()
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = null
        },
        i: ue
    });
    te.__name__ = "54";
    te.B = l;
    te.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            if (!(0 > this.time)) {
                a =
                    this.ta(.5);
                var b = U.Nc(2)(a);
                this.m.view.scale = b;
                this.m.view.alpha = b;
                1 == a && this.o()
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = null
        },
        i: te
    });
    se.__name__ = "55";
    se.B = l;
    se.prototype = v(l.prototype, {
        update: function(a) {
            var b = this;
            l.prototype.update.call(this, a);
            switch (this.state) {
                case 0:
                    if (0 > this.time) break;
                    this.m.view.O(new re(this.source, function() {
                        b.state++
                    }));
                    this.state++;
                    break;
                case 2:
                    this.v().hi(this.m, 0, 100), this.o()
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = this.source = null
        },
        i: se
    });
    re.__name__ =
        "56";
    re.B = l;
    re.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.T = new K(this.v().rd(2), 6, "energy_bolt");
            this.T.Ua();
            this.T.Ia();
            this.T.Sf().add();
            var a = this.parent,
                b = this.source.view.position,
                c = a.position,
                d = c.b - b.b;
            c = c.a - b.a;
            var e = Math.sqrt(d * d + c * c);
            d /= e;
            c /= e;
            var f = b.b + d * e / 2;
            b = b.a + c * e / 2;
            var g = (e - this.T.$()) / 2;
            g += this.T.$() / 2;
            var k = 1;
            0 > e - this.T.$() && (this.T.Cx(e), g = e / 2, k = this.T.Ra);
            this.duration = .1;
            this.T.ha(f - d * g);
            this.T.aa(b - c * g);
            this.T.hd(this.su(this.source.J, a.m.J));
            this.T.ud().x(f +
                d * g, this.duration);
            this.T.ud().y(b + c * g, this.duration);
            this.T.nf(.05);
            this.T.ud().Gh(k, this.duration / 2, null, null, B(this, this.bq));
            this.v().sa(40)
        },
        bq: function() {
            2 == ++this.state ? this.o() : this.T.ud().Gh(.05, this.duration / 2, null, null, B(this, this.bq))
        },
        su: function(a, b) {
            a = a.m.position;
            b = b.m.position;
            return 57.29577951308232 * Math.atan2(b.a - a.a, b.b - a.b)
        },
        o: function() {
            this.T.A();
            this.source = null;
            l.prototype.o.call(this);
            this.source = this.T = null
        },
        i: re
    });
    qe.__name__ = "57";
    qe.B = l;
    qe.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this,
                a);
            a = this.ta(.5);
            this.fb.b += .3 * (this.Nb.b - this.fb.b);
            this.fb.a += .3 * (this.Nb.a - this.fb.a);
            var b = this.m.position,
                c = this.fb;
            b.b = c.b;
            b.a = c.a;
            b = this.Nb.b - this.fb.b;
            (0 < b ? .01 > b : .01 > -b) ? (b = this.Nb.a - this.fb.a, b = 0 < b ? .01 > b : .01 > -b) : b = !1;
            b && (this.m.J.s.locked = !1, this.o());
            this.m.position.b = this.fb.b + (this.Nb.b - this.fb.b) * a;
            this.m.position.a = this.fb.a + (this.Nb.a - this.fb.a) * a
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = this.Nb = this.fb = null
        },
        i: qe
    });
    Rc.__name__ = "58";
    Rc.B = l;
    Rc.prototype = v(l.prototype, {
        update: function(a) {
            var b =
                this;
            l.prototype.update.call(this, a);
            if (!this.m.Qf)
                if (a = this.m.s, a.fe || a.Tc) this.o();
                else switch (this.state) {
                    case 0:
                        0 <= this.time && (this.m.view.visible = !0, this.m.view.jd(function() {
                            b.state++
                        }), this.state++);
                        break;
                    case 2:
                        this.v().zo(this.m, 0), this.o()
                }
        },
        o: function() {
            l.prototype.o.call(this);
            this.m = null
        },
        i: Rc
    });
    pe.__name__ = "59";
    pe.B = l;
    pe.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            0 < this.Bi() || (this.b.s.rf = !1, this.a.s.rf = !1, this.b.s.selected = !1, this.a.s.selected = !1, this.b.J.s.locked = !1, this.a.J.s.locked = !1, this.v().S.pf(this.b.J, this.a.J), this.tr ? (this.b.s.selected = !1, this.a.s.selected = !1, this.o()) : this.v().$v(this.b, this.a) ? this.o() : (this.O(new Qc(this.b, this.a)), this.tr = !0, this.b.s.selected = !0, this.a.s.selected = !0, this.b.s.rf = !0, this.a.s.rf = !0, this.b.J.s.locked = !0, this.a.J.s.locked = !0))
        },
        o: function() {
            l.prototype.o.call(this);
            this.a = this.b = null
        },
        i: pe
    });
    Qc.__name__ = "5A";
    Qc.B = l;
    Qc.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.ta(.3);
            a = U.Jd(.1)(a);
            var b = this.b.J.x - this.a.J.x,
                c = this.b.J.y - this.a.J.y;
            0 == b ? (b = 0 < c ? 1 : 0 > c ? -1 : 0, this.b.position.a = this.b.J.y + .5 - a * b, this.a.position.a = this.a.J.y + .5 + a * b) : (b = 0 < b ? 1 : 0 > b ? -1 : 0, this.b.position.b = this.b.J.x + .5 - a * b, this.a.position.b = this.a.J.x + .5 + a * b);
            1 == a && this.o()
        },
        o: function() {
            l.prototype.o.call(this);
            this.a = this.b = null
        },
        i: Qc
    });
    oe.__name__ = "5B";
    oe.B = l;
    oe.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.ta(.15);
            this.parent.scale = 1 - a;
            1 == a && this.o()
        },
        i: oe
    });
    lb.__name__ = "5C";
    lb.B =
        l;
    lb.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            for (var a = Eb.ol(4), b = this.v().S, c = this.Su(a, M.Ea), d = 0, e = c.length, f, g, k; d < e;) {
                f = c[d++];
                g = c[d++];
                k = c[d++];
                var m = b.cells;
                g = m.c[g * m.F + f];
                f = g.m;
                k *= .02;
                this.O(new ne(g, k));
                switch (a) {
                    case 1:
                    case 4:
                        f.br(f.J.x, -1);
                        this.v().ec(new Rc(f, k));
                        break;
                    case 0:
                    case 2:
                    case 3:
                        this.v().ec(new te(f, k))
                }
            }
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            0 < this.Bi() || 0 < this.v().he() || this.o()
        },
        Su: function(a, b) {
            function c(a, b) {
                e += 1;
                d[e - 1] = a;
                e += 1;
                d[e - 1] =
                    b;
                e += 1;
                f += 1;
                d[e - 1] = f - 1
            }
            var d = Array(b * b * 3),
                e = 0,
                f = 0;
            switch (a) {
                case 0:
                    a = b;
                    for (var g = b = 0, k = 0, m = 0; 0 < a;) {
                        ++m;
                        2 == m && (m = 0, --a);
                        if (0 == a) break;
                        for (var l = 0, u = a; l < u;) c(b, g), l++ < a - 1 && (b += lb.ai[k][0], g += lb.ai[k][1]);
                        k = k + 1 & 3;
                        b += lb.ai[k][0];
                        g += lb.ai[k][1]
                    }
                    break;
                case 1:
                    for (b = a = b - 1; 0 <= b;) {
                        if (0 == (b & 1))
                            for (g = a; 0 <= g;) c(g, b), --g;
                        else
                            for (g = 0, k = a + 1; g < k;) c(g++, b);
                        --b
                    }
                    break;
                case 2:
                    for (b = a = b - 1; 0 <= b;) {
                        g = 0;
                        for (k = a + 1; g < k;) m = g++, 0 == (m & 1) && c(m, b);
                        g = 0;
                        for (k = a + 1; g < k;) m = g++, 1 == (m & 1) && c(m, b);
                        --b
                    }
                    break;
                case 3:
                    a = b - 1;
                    b = 0;
                    for (g = a + 1; b <
                        g;)
                        for (k = b++, m = a; 0 <= m;) c(k, m), --m;
                    break;
                case 4:
                    g = b - 1;
                    k = 0;
                    for (m = g + 1; k < m;)
                        for (a = k++, b = g; 0 <= a;) c(a, b), --a, --b;
                    for (k = g - 1; 0 <= k;) {
                        a = g;
                        for (b = k; 0 <= b;) c(a, b), --a, --b;
                        --k
                    }
            }
            return d
        },
        i: lb
    });
    ne.__name__ = "5D";
    ne.B = l;
    ne.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            0 > this.time || (a = this.ta(.1), this.J.view.alpha = .85 * a, 1 == a && this.o())
        },
        o: function() {
            l.prototype.o.call(this);
            this.J = null
        },
        i: ne
    });
    me.__name__ = "5E";
    me.B = l;
    me.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            if (null ==
                this.Aa) {
                this.Aa = Array(4);
                var a = this.parent,
                    b = this.v().rd(2);
                this.remove();
                this.v().uc(Qb, null, !0).O(this);
                var c = 150 / Z.hc(6, "blast").b * 1.2,
                    d = new K(b, 6, "blast");
                d.Sf().add();
                d.Ua();
                d.Ia();
                d.ha(a.position.b);
                d.aa(a.position.a);
                d.ba(c);
                this.Aa[0] = d;
                d = new K(b, 6, "blast");
                d.Ua();
                d.Ia();
                d.ha(a.position.b);
                d.aa(a.position.a);
                d.ba(c);
                d.tg(-1);
                this.Aa[1] = d;
                d = new K(b, 6, "blast");
                d.Ua();
                d.Ia();
                d.hd(-90);
                d.ha(a.position.b);
                d.aa(a.position.a);
                d.ba(c);
                this.Aa[2] = d;
                b = new K(b, 6, "blast");
                b.Ua();
                b.Ia();
                b.nf(-1);
                b.hd(90);
                b.ha(a.position.b);
                b.aa(a.position.a);
                b.ba(c);
                this.Aa[3] = b
            }
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a *= 1500;
            var b = this.Aa[0],
                c = b;
            c.aa(c.wa - a);
            0 > b.wa && b.qa(Math.max(0, Va.map(b.wa, 0, -100, 1, 0)));
            c = b = this.Aa[1];
            c.aa(c.wa + a);
            1200 < b.wa && b.qa(Math.max(0, Va.map(b.wa, 1200, 1300, 1, 0)));
            c = b = this.Aa[2];
            c.ha(c.va - a);
            0 > b.va && b.qa(Math.max(0, Va.map(b.va, 0, -100, 1, 0)));
            c = b = this.Aa[3];
            c.ha(c.va + a);
            1200 < b.va && b.qa(Math.max(0, Va.map(b.va, 1200, 1300, 1, 0)));
            for (b = a = 0; 4 > b;) c = this.Aa[b++].Sd, (0 < c ? .1 > c : .1 > -c) &&
                ++a;
            4 == a && this.o()
        },
        o: function() {
            l.prototype.o.call(this);
            this.Aa = null
        },
        i: me
    });
    le.__name__ = "5F";
    le.B = l;
    le.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this);
            this.Qc = this.rj = !1
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.alpha *= .97;
            if (0 < a ? .1 > a : .1 > -a) this.Qc = this.rj = !1, this.I.fa(!1), this.I.qa(0)
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            this.I.qa(this.alpha)
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            switch (a.type) {
                case 30:
                    this.alpha = .6;
                    break;
                case 40:
                    if (null == this.I) {
                        this.I = new K(this.xa().canvas);
                        a = this.xa().Z.window.hc();
                        var b = .00392156862745098 * ta.kb(255),
                            c = .00392156862745098 * ta.kb(255),
                            d = .00392156862745098 * ta.kb(255),
                            e = new J;
                        e.b = .00392156862745098 * ta.kb(255);
                        e.a = b;
                        e.f = c;
                        e.d = d;
                        this.I.Ih(e, a.b + 10, a.a + 10);
                        this.I.ha(-5);
                        this.I.aa(-5);
                        this.I.Sf().add()
                    }
                    this.rj = this.Qc = !0;
                    this.I.fa(!0);
                    this.alpha = .3
            }
        },
        o: function() {
            null != this.I && (this.I.A(), this.I = null);
            this.v().detach(this);
            l.prototype.o.call(this);
            this.I = null
        },
        i: le
    });
    ke.__name__ = "60";
    ke.B =
        l;
    ke.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this)
        },
        o: function() {
            this.v().detach(this);
            l.prototype.o.call(this)
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            0 != this.Ce && (this.Ce *= .95, .5 > this.Ce ? (this.Ce = 0, this.cr(0)) : this.cr(Math.sin(100 * this.time) * this.Ce))
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            switch (a.type) {
                case 28:
                case 29:
                    this.Ce = 4;
                    break;
                case 40:
                    this.Ce = 2
            }
        },
        cr: function(a) {
            var b = this.xa().Z.Pc.local;
            b.translate.b = 0;
            b.translate.a = a;
            b.D = b.D &
                -2 | 32;
            this.xa().Z.Pc.j |= 8
        },
        i: ke
    });
    Pc.__name__ = "61";
    Pc.B = l;
    Pc.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().wq.vt(this.parent);
            this.v().sa(1 == this.kind ? 36 : 37)
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.ta(1 == this.kind ? .25 : .5);
            var b = this.parent;
            b.scale = 1 - a;
            b.alpha = 1 - a;
            1 == a && this.o()
        },
        i: Pc
    });
    je.__name__ = "62";
    je.B = l;
    je.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this)
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            switch (a.type) {
                case 11:
                    this.Lp();
                    break;
                case 45:
                    this.Lp()
            }
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            if (0 != this.Xa.g && (a = this.Xa, !(this.time < .03 * a.c[a.oa]))) {
                a = this.Xa;
                a.oa++;
                a.oa == a.u && (a.oa = 0);
                a.g--;
                var b = this.Xa;
                a = b.c[b.oa++];
                b.oa == b.u && (b.oa = 0);
                b.g--;
                for (b = 0; b < a;) {
                    ++b;
                    var c = this.Xa,
                        d = c.c[c.oa++];
                    c.oa == c.u && (c.oa = 0);
                    c.g--;
                    var e = this.Xa;
                    c = e.c[e.oa++];
                    e.oa == e.u && (e.oa = 0);
                    e.g--;
                    e = this.v().S.cells;
                    d = e.c[c * e.F + d];
                    d.s.na && (d = d.m, c = d.s, c.fe || c.Tc || d.view.Mp(!0))
                }
            }
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            var b = this.xa().Da.S,
                c = oa.Hb().Zu(),
                d = (b.f - b.b) / M.Ea;
            a = (c.b - b.b) / d | 0;
            b = (c.a - b.a) / d | 0;
            c = this.v().S.cells;
            0 <= a && a < c.F && 0 <= b && b < c.Ba && (a = c.c[b * c.F + a], null != a && null != a.m && null != a.m.view && a.m.view.Mp())
        },
        Lp: function() {
            this.time = 0;
            for (var a = this.v().S.cells, b = 0, c = 0, d = M.Ea - 1; c <= d;) {
                this.Vd.g = 0;
                for (var e = c++, f = 0; 0 <= e && f <= d;) {
                    if (0 <= e && e < a.F && 0 <= f && f < a.Ba) {
                        var g = this.Vd,
                            k = a.c[f * a.F + e];
                        g.c[g.g++] = k
                    }--e;
                    ++f
                }
                e = this.Xa;
                f = b++;
                e.u == e.g && e.R();
                e.c[(e.g++ + e.oa) % e.u] = f;
                e = this.Xa;
                f = this.Vd.g;
                e.u == e.g && e.R();
                e.c[(e.g++ + e.oa) % e.u] = f;
                g = this.Vd;
                e = g.c;
                f = 0;
                for (g = g.g; f < g;) {
                    k = e[f++];
                    var m = this.Xa,
                        l = k.x;
                    m.u == m.g && m.R();
                    m.c[(m.g++ + m.oa) % m.u] = l;
                    m = this.Xa;
                    k = k.y;
                    m.u == m.g && m.R();
                    m.c[(m.g++ + m.oa) % m.u] = k
                }
            }
            for (c = 1; c <= d;) {
                this.Vd.g = 0;
                e = d;
                for (f = c++; 0 <= e && f <= d;) 0 <= e && e < a.F && 0 <= f && f < a.Ba && (g = this.Vd, k = a.c[f * a.F + e], g.c[g.g++] = k), --e, ++f;
                e = this.Xa;
                f = b++;
                e.u == e.g && e.R();
                e.c[(e.g++ + e.oa) % e.u] = f;
                e = this.Xa;
                f = this.Vd.g;
                e.u == e.g && e.R();
                e.c[(e.g++ + e.oa) % e.u] = f;
                g = this.Vd;
                e = g.c;
                f = 0;
                for (g = g.g; f < g;) k = e[f++], m = this.Xa, l = k.x, m.u == m.g && m.R(), m.c[(m.g++ + m.oa) % m.u] =
                    l, m = this.Xa, k = k.y, m.u == m.g && m.R(), m.c[(m.g++ + m.oa) % m.u] = k
            }
        },
        o: function() {
            this.v().detach(this);
            l.prototype.o.call(this);
            this.Xa = this.Vd = null
        },
        i: je
    });
    ie.__name__ = "63";
    ie.B = l;
    ie.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            var a = this.parent.uc(kb);
            a.Uh();
            a.xg.qa(0);
            a.jb.qa(0)
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.ta(.25);
            var b = this.parent.uc(kb);
            b.xg.qa(a);
            b.jb.qa(a);
            1 == a && this.o()
        },
        i: ie
    });
    he.__name__ = "64";
    he.B = l;
    he.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this,
                a);
            a = this.parent;
            a.rotation = 10 * Math.sin(100 * this.time);
            .5 < this.time && (a.rotation = 0, a.uc(kb).Uh(), this.o())
        },
        i: he
    });
    ge.__name__ = "65";
    ge.B = l;
    ge.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            var a = this.parent.uc(kb);
            a.Uh();
            a.jb.qa(0);
            a.Nh.qa(0)
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.ta(.25);
            var b = this.parent.uc(kb);
            b.jb.qa(a);
            1 == a && (b.Nh.qa(1), this.o())
        },
        i: ge
    });
    fe.__name__ = "66";
    fe.B = l;
    fe.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.parent.scale =
                0
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = U.zw()(this.ta(.1));
            var b = this.parent;
            b.alpha = a;
            b.scale = a;
            1 == a && this.o()
        },
        i: fe
    });
    ee.__name__ = "67";
    ee.B = l;
    ee.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            var a = S.Tk(),
                b = this.parent;
            this.T = new K(this.v().rd(2), 11, a.frames[0].value);
            this.T.ha(b.position.b);
            this.T.aa(b.position.a);
            this.T.Ua();
            this.T.Ia();
            this.T.ba(2);
            this.T.Tf().play(S.Tk(), null, null, B(this, this.o));
            this.T.Sf().add()
        },
        update: function(a) {
            l.prototype.update.call(this,
                a);
            a = this.ta(.1);
            var b = this.parent;
            b.alpha = 1 - a;
            b.scale = 1 - a
        },
        o: function() {
            this.T.A();
            l.prototype.o.call(this);
            this.T = null
        },
        i: ee
    });
    de.__name__ = "68";
    de.B = l;
    de.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            var a = this.parent,
                b = S.Tk();
            this.T = new K(this.v().rd(2), 11, b.frames[0].value);
            this.T.ha(a.position.b);
            this.T.aa(a.position.a);
            this.T.Ua();
            this.T.Ia();
            this.T.ba(2);
            this.T.Tf().play(b, null, null, B(this, this.o));
            this.v().sa(30)
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.parent;
            a.alpha -= .25;
            0 > a.alpha && (a.alpha = 0)
        },
        o: function() {
            l.prototype.o.call(this);
            this.T.A();
            this.T = null
        },
        i: de
    });
    ce.__name__ = "69";
    ce.B = l;
    ce.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().sa(29)
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.ta(.5);
            this.parent.alpha = 1 - a;
            1 == a && this.o()
        },
        o: function() {
            l.prototype.o.call(this);
            this.I = null
        },
        i: ce
    });
    Oc.__name__ = "6A";
    Oc.B = l;
    Oc.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.rotation = new jb(M.Ea, M.Ea);
            this.rotation.Im(0);
            for (var a = M.Ea / 2, b = E.tb(this.parent, Sc).S.cells.iterator(); b.ia();) {
                var c = b.next(),
                    d = c.m,
                    e = this.rotation;
                e.c[c.y * e.F + c.x] = Math.atan2(d.position.a - a, d.position.b - a)
            }
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = M.Ea / 2;
            this.speed += 4E-4;
            .03 < this.speed && (this.speed = .03);
            for (var b = new I, c = 0, d = this.v().S.cells.iterator(); d.ia();) {
                var e = d.next();
                if (e.s.na) {
                    ++c;
                    var f = e.m,
                        g = f.position,
                        k = g.b - a,
                        m = g.a - a,
                        ic = Math.sqrt(k * k + m * m),
                        u = Va.map(ic, .1, .5, 0, 1);
                    1 < u && (u = 1);
                    0 > u && (u = 0);
                    .1 > ic ? e.s.na && e.og() : (f.view.alpha =
                        u, f.view.scale = u, f = this.rotation, f = f.c[e.y * f.F + e.x], f -= Math.sqrt(16) / ic * this.speed, u = this.rotation, u.c[e.y * u.F + e.x] = f, e = a + Math.cos(f) * ic, f = a + Math.sin(f) * ic, .5 > ic ? (e += .05 * (a - e), f += .05 * (a - f)) : (b.b = k, b.a = m, Yf.normalize(b), e -= b.b * this.speed * 1.1, f -= b.a * this.speed * 1.1), g.b = e, g.a = f)
                }
            }
            0 == c && this.o()
        },
        o: function() {
            this.rotation.A();
            this.rotation = null;
            l.prototype.o.call(this);
            this.rotation = null
        },
        i: Oc
    });
    be.__name__ = "6B";
    be.B = Wa;
    be.prototype = v(Wa.prototype, {
        K: function() {
            var a = this;
            Wa.prototype.K.call(this);
            var b =
                this.Po(Q);
            this.Z = b.Z;
            this.Z.Ta(26);
            this.canvas = new ka(null, b.Ff);
            this.bb = new K(this.canvas, 26);
            this.bj(1, function() {
                a.resize()
            });
            this.resize()
        },
        resize: function() {
            this.canvas.ba(1);
            var a = this.bb.sd().b,
                b = this.bb.sd().a,
                c = this.Z.window.hc(),
                d = c.b / a,
                e = c.a / b;
            d < e ? (a = -(e * a - c.b) / 2, b = 0, this.canvas.ba(e)) : (a = 0, b = (c.a - d * b) / 2, this.canvas.ba(d));
            this.canvas.ha(a);
            this.canvas.aa(b)
        },
        o: function() {
            this.canvas.A();
            Wa.prototype.o.call(this);
            this.Z = this.bb = this.canvas = null
        },
        i: be
    });
    Nc.__name__ = "6C";
    Nc.B = z;
    Nc.prototype =
        v(z.prototype, {
            Kh: function(a) {
                a ? oa.Hb().ua(B(this, this.cd)) : oa.Hb().detach(B(this, this.cd));
                return a
            },
            fa: function(a) {
                this.I.fa(a);
                return a
            },
            K: function() {
                z.prototype.K.call(this);
                this.I = new K(this.Po(Q).content, 0, this.frame);
                this.I.Ia();
                this.I.Ua();
                this.Da();
                this.Qc = !1
            },
            cd: function(a) {
                if (1 == a.type) {
                    var b = new I;
                    b.b = a.x;
                    b.a = a.y;
                    this.I.fd(b) && (this.Pe(), t.play(t.Gn), this.kk(47))
                }
            },
            Pe: function() {
                this.Qc = !0;
                this.md = .1;
                this.time = 0
            },
            update: function(a) {
                z.prototype.update.call(this, a);
                this.I.ba(this.scale +
                    this.scale * Math.sin(25 * this.time) * -this.md);
                a = this.md *= .8;
                if (0 < a ? .005 > a : .005 > -a) this.I.ba(this.scale), this.Qc = !1
            },
            Da: function() {
                var a = this.Pa(),
                    b = this.I.sd();
                this.scale = Math.min((a.f - a.b) / b.b, (a.d - a.a) / b.a);
                this.I.ba(this.scale);
                this.I.ha(a.b + .5 * (a.f - a.b));
                this.I.aa(a.a + .5 * (a.d - a.a))
            },
            Pa: function() {
                return this.U
            },
            Vq: function(a) {
                var b = this.U;
                b.b = a.b;
                b.a = a.a;
                b.f = a.f;
                b.d = a.d;
                this.Da()
            },
            o: function() {
                this.I.A();
                this.I = null;
                z.prototype.o.call(this);
                this.I = null
            },
            i: Nc
        });
    N.__name__ = "6D";
    N.Zg = function() {
        null ==
            N.root && (N.root = new ka("scene"), new ka("bg", N.root), new ka("fg", N.root));
        return N.root
    };
    N.Ru = function(a) {
        a = Object.create(a.prototype);
        a.vc = new wb(null, null);
        a = a.Yg();
        for (var b = [], c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            n.Zm(d) && b.push(d)
        }
        return b
    };
    N.B = Wa;
    N.prototype = v(Wa.prototype, {
        jd: function(a, b, c) {
            a.__name__;
            this.Px(a, c, b) || Ka.cb().jd(this, a, b, c)
        },
        finish: function(a) {
            Ka.cb().finish(this, a)
        },
        zc: function() {
            this.lb(1);
            this.canvas = new ka(this.name);
            this.Ff = new ka("bg", this.canvas);
            this.Ff.fa(!1);
            this.content =
                new ka("content", this.canvas);
            this.content.fa(!1);
            this.Ic = new ka("fg", this.canvas);
            this.Ic.fa(!1)
        },
        Zb: function() {
            this.lb(2);
            this.show();
            this.Xh = 0
        },
        im: function() {
            this.lb(4);
            this.show()
        },
        wb: function() {
            this.lb(3);
            this.Dh = !1;
            if (this.vc.Vb("loaderInfo")) {
                this.Dh = !0;
                var a = this.vc.get("loaderInfo");
                a.loaded && this.jd(a.Nx, a.Mx, a.Ox)
            }
        },
        ue: function() {
            this.lb(5)
        },
        th: function() {
            this.lb(6);
            this.kv()
        },
        lb: function(a) {
            this.state = a
        },
        show: function() {
            null == this.canvas.Wb() && (this.parent == Ka.cb() ? E.tb(N.Zg().yi("fg"),
                ka).appendChild(this.canvas) : E.tb(this.parent, N).canvas.appendChild(this.canvas));
            this.content.fa(this.Ff.fa(this.Ic.fa(!0)))
        },
        kv: function() {
            var a = this.Du();
            null != a && a.fh() ? this.content.fa(this.Ff.fa(this.Ic.fa(!1))) : this.canvas.remove()
        },
        Yg: function() {
            return []
        },
        zi: function() {
            if (null != N.le) return N.le;
            N.le = new Nb(4, function(a) {
                var b = n.ie(a.url);
                0 > b || n.setData(b, a.data, a.pe)
            }, "v=1.1.10");
            N.le.tag = "scene";
            return N.le
        },
        Px: function(a, b, c) {
            var d = Object.create(a.prototype);
            d.vc = new wb(this, b);
            var e = d.Ju();
            d.vc = null;
            return 0 < e.length ? (this.jd(d.Zo(), !0, sa.Pf(["loaderInfo", new Se(a, b, c, e)])), !0) : !1
        },
        Ju: function() {
            for (var a = [], b = 0, c = this.Yg(); b < c.length;) {
                var d = c[b];
                ++b;
                n.rl(d) && null == n.Ve() || n.fl(d) || a.push(d)
            }
            return a
        },
        fh: function() {
            return !0
        },
        Ty: function() {
            return !1
        },
        Sy: function() {
            return !1
        },
        Zo: function() {
            return Qa
        },
        Du: function() {
            for (var a = [this], b = null; 0 < a.length;)
                for (var c = a.pop().firstChild; null != c;) {
                    if (c instanceof N) {
                        b = c;
                        a.push(b);
                        break
                    }
                    c = c.L
                }
            return b
        },
        o: function() {
            Wa.prototype.o.call(this);
            0 != this.state &&
                (this.lb(7), null != this.canvas && (ia.Nk(this.canvas, !0), this.canvas = this.content = this.Ff = this.Ic = null), this.vc = null);
            this.remove();
            this.jq = this.Ic = this.content = this.Ff = this.canvas = this.vc = null
        },
        i: N
    });
    Q.__name__ = "6E";
    Q.B = N;
    Q.prototype = v(N.prototype, {
        Zb: function() {
            N.prototype.Zb.call(this);
            this.Oa()
        },
        wb: function() {
            N.prototype.wb.call(this);
            this.Dh || oa.Hb().ua(B(this, this.cd))
        },
        ue: function() {
            N.prototype.ue.call(this);
            oa.Hb().detach(B(this, this.cd))
        },
        handle: function(a) {
            N.prototype.handle.call(this, a);
            1 ==
                a.type && this.Oa()
        },
        Zo: function() {
            return Lc
        },
        Ye: function() {
            return this.Z.window.hc()
        },
        Oa: function() {},
        dk: function() {
            var a = this.To();
            null == a && (a = new K(this.Ic), a.node.name = "fill");
            var b = this.Ye(),
                c = .00392156862745098 * ta.kb(0),
                d = .00392156862745098 * ta.kb(0),
                e = .00392156862745098 * ta.kb(255),
                f = new J;
            f.b = .00392156862745098 * ta.kb(0);
            f.a = c;
            f.f = d;
            f.d = e;
            a.Ih(f, b.b, b.a)
        },
        ym: function() {
            var a = this.To();
            null != a && a.A()
        },
        To: function() {
            return this.Ic.yi("fill")
        },
        cd: function(a) {
            if (0 == a.type) {
                var b = new I;
                b.b = a.x;
                b.a =
                    a.y;
                this.fd(b)
            }
        },
        fd: function() {},
        ci: function() {
            this.O(new be)
        },
        o: function() {
            N.prototype.o.call(this);
            this.Z = null
        },
        i: Q
    });
    ae.__name__ = "6F";
    ae.B = Q;
    ae.prototype = v(Q.prototype, {
        zc: function() {
            Q.prototype.zc.call(this);
            this.Z.Ta(0);
            this.Z.Ta(1);
            this.Z.Ta(24, 25);
            this.Z.Ta(23, 25);
            this.re = new na(this.canvas, 23);
            S.mb();
            this.Z.Ef([13, 12, 11, 10, 9, 8, 7, 6, 5]);
            this.Lc = new K(this.content, 1);
            this.la = new na(this.content, 24);
            this.la.ex(0);
            this.Oo = [this.uk(Xa.Ok(31)), this.uk(Xa.Ok(32)), this.uk(Xa.Ok(99))];
            this.Vc = [];
            for (var a =
                    0; 3 > a;) {
                var b = a++;
                this.Vc[b] = new na(this.content, 24);
                this.Vc[b].za("2")
            }
            this.Oh = [];
            this.Oh[0] = new K(this.content, 0, "icon_multiplier");
            this.Oh[1] = new K(this.content, 0, "icon_matches");
            this.Ph = [];
            this.Ph[0] = null;
            a = this.Ph;
            b = void 0;
            null == b && (b = "0");
            var c = new na(this.content, 24);
            c.ac(10);
            null != b && c.za(b);
            a[1] = c;
            this.re = new na(this.canvas, 23);
            this.re.za("X2");
            this.re.Qb(200, 200);
            this.ok = new Nc("button_play");
            this.O(this.ok);
            this.Gb = new K(this.content, 0, "trophy");
            this.Gb.Ua();
            this.Gb.Ia();
            this.ci()
        },
        uk: function(a) {
            a =
                new Zd(a);
            a.O(new kb(this.content));
            this.O(a);
            return a
        },
        Zb: function() {
            Q.prototype.Zb.call(this);
            var a = this.vc.tc;
            this.Fm = sa.get(a, "score");
            var b = sa.get(a, "highestMultiplier"),
                c = sa.get(a, "matches");
            if (this.se = this.Fm > ca.Xb) ca.Xb = this.Fm, ca.save();
            t.play(t.js);
            this.se && t.play(t.ls);
            this.Gb.fa(this.se);
            this.la.bc(this.se ? 23 : 24);
            this.la.za(Jb.dl(this.Fm));
            this.la.Yn(8, 100);
            this.Vc[0].za(C.Sa(sa.get(a, "magicFire")));
            this.Vc[1].za(C.Sa(sa.get(a, "magicLightning")));
            this.Vc[2].za(C.Sa(sa.get(a, "magicHyper")));
            this.Ph[1].za(C.Sa(c));
            this.re.za("X" + b);
            this.ok.Kh(!1);
            this.ok.fa(!1);
            this.Oa();
            this.se && (a = this.Gb.Ra, this.Gb.ba(0), this.Gb.ud().hn(a, 1, U.Jd(.2)))
        },
        wb: function() {
            Q.prototype.wb.call(this);
            this.Dh || F.setTimeout(B(this, this.Dx), this.se ? 4 : 2)
        },
        handle: function(a) {
            Q.prototype.handle.call(this, a);
            if (47 == a.type) {
                this.ok.Kh(!1);
                var b = B(this, this.jd);
                F.setTimeout(function() {
                    b(Mc, !1)
                }, .5)
            }
        },
        Dx: function() {
            function a() {
                b.ok.Kh(!0);
                b.ok.fa(!0)
            }
            var b = this,
                c = sa.get(this.vc.tc, "score");
            Promise.all([ha.Ov(), ha.ly(c),
                Gb.Ex()
            ]).then(a, a)
        },
        Oa: function() {
            function a(a) {
                var b = k.Pk(a, 0),
                    d = (new G).xb(2);
                b.Dd(d);
                b.ca(d, 0, 0);
                if (0 == a) b = d.ra(), c.re.Qb(b.f - b.b, b.d - b.a), c.re.ac((b.d - b.a) / 2 | 0), c.re.ca(b, 0, 0), a = c.Oh[a], a.Ue(b), a.ha(b.b + .5 * (b.f - b.b) - a.$() / 2);
                else {
                    b = d.Wm(.5);
                    b.right.nc(.1, 0);
                    b.left.nc(0, .1);
                    d = b.left.ra();
                    var e = c.Oh[a];
                    e.Ue(d);
                    e.ha(d.b + .5 * (d.f - d.b) - e.$() / 2);
                    a = c.Ph[a];
                    d = b.right.ra();
                    a.Qb(d.f - d.b, d.d - d.a);
                    a.ac(.6 * (d.d - d.a) | 0);
                    a.Ej(16);
                    a.ha(d.b);
                    a.aa(d.a);
                    a.ca(d, -1, 0);
                    m.push(a);
                    a = b.right.ra();
                    l.push(a)
                }
            }

            function b(a) {
                var b =
                    k.Pk(a, 0),
                    d = (new G).xb(2);
                b.Dd(d);
                b.ca(d, 0, 0);
                b = d.Wm(.5);
                b.right.nc(.3, 0);
                d = c.Oo[a];
                var e = Z.get(9).Gc.af;
                e = (null != X.gem_blue ? e.gc("gem_blue") : e.C.gem_blue).P.b;
                var f = b.left.ra();
                d.scale = (f.f - f.b) / e / ("sd" == n.Yk() ? 2 : 1);
                e = d.position;
                f = b.left.ra();
                e.b = f.b + .5 * (f.f - f.b);
                d = d.position;
                e = b.left.ra();
                d.a = e.a + .5 * (e.d - e.a);
                c.Vc[a].Qb(b.right.$(), b.right.da());
                c.Vc[a].ac(.6 * b.right.da() | 0);
                c.Vc[a].Ej(16);
                c.Vc[a].ca(b.right.ra(), -1, 0);
                m.push(c.Vc[a]);
                a = b.right.ra();
                l.push(a)
            }
            var c = this,
                d = this.Ye(),
                e = (new G).xb(.8);
            d = G.mc(d.b, d.a);
            d.Dd(e);
            d.ca(e, 0, 0);
            d = e.Vm(.3);
            d.top.nc(0, .1);
            var f = this.Lc.sd();
            f = G.mc(f.b, f.a);
            d.top.Dd(f);
            800 < this.Lc.$() && f.oc(800);
            d.top.ma(f);
            this.Lc.Ue(f.ra());
            d = d.bottom;
            f = G.mc(.8 * e.$(), .2 * d.da());
            var g = .15 * d.da();
            this.la.da() > g && f.xj(g);
            d.ca(f, 0, -1);
            this.la.Qb(f.$(), f.da());
            this.la.ha(f.H.b);
            this.la.aa(f.H.a);
            this.la.Yn(16, 200);
            this.la.ca(f.ra(), 0, 0);
            this.se && (g = this.la.Pa(), this.Gb.ba(1), this.Gb.ba(1.5 * this.la.da() / this.Gb.da()), this.Gb.ha(g.f + this.Gb.$() / 2), this.Gb.aa(g.a));
            g = G.mc(.9 * e.$(),
                .2 * d.da());
            d.ca(g, 0, -1);
            g.aa(f.H.d);
            var k = g.hr(1, 3),
                m = [],
                l = [];
            b(0);
            b(1);
            b(2);
            f = G.mc(.7 * e.$(), .3 * d.da());
            d.ca(f, 0, -1);
            f.aa(g.H.d);
            k = f.hr(1, 2);
            a(0);
            a(1);
            f = 1E3;
            for (g = 0; g < m.length;) {
                var u = m[g];
                ++g;
                u.Ca.size < f && (f = u.Ca.size)
            }
            g = 0;
            for (u = m.length; g < u;) {
                var r = g++;
                m[r].ac(f);
                m[r].ca(l[r], -1, 0)
            }
            f = Z.get(0).Gc.af;
            f = (null != X.button_play ? f.gc("button_play") : f.C.button_play).P;
            f = G.mc(f.b, f.a);
            f.xj(.15 * e.$());
            300 < f.$() && f.oc(300);
            e = .3 * d.da();
            f.da() > e && f.xj(e);
            d.ca(f, 0, 1);
            f.aa(k.Pk(0, 0).H.d + .25 * f.da());
            this.ok.Vq(f.ra())
        },
        o: function() {
            Q.prototype.o.call(this);
            this.Gb = this.re = this.Ph = this.Oh = this.Vc = this.Oo = this.ok = this.la = this.Lc = null
        },
        i: ae
    });
    Zd.__name__ = "70";
    Zd.B = Db;
    Zd.prototype = v(Db.prototype, {
        K: function() {
            l.count++
        },
        nn: function() {},
        i: Zd
    });
    Yd.__name__ = "71";
    Yd.B = Q;
    Yd.prototype = v(Q.prototype, {
        Yg: function() {
            var a = [13, 12, 11, 10, 9, 8, 7, 6, 5];
            a = a.concat([23, 25, 24, 21, 22, 20, 19, 18, 17, 16, 15, 14]);
            a.push(0);
            a.push(26);
            a.push(1);
            a.push(27);
            return a
        },
        zc: function() {
            Q.prototype.zc.call(this);
            this.ci();
            this.np()
        },
        Zb: function() {
            Q.prototype.Zb.call(this);
            this.Xh = 1
        },
        wb: function() {
            Q.prototype.wb.call(this);
            this.Dh || this.Uc.start()
        },
        handle: function(a) {
            var b = this;
            Q.prototype.handle.call(this, a);
            switch (a.type) {
                case 7:
                    a = this.Uc.X;
                    this.jd(ae, !1, sa.Pf(["score", a.la, "magicFire", a.Ul, "magicLightning", a.Wl, "magicHyper", a.Vl, "highestMultiplier", a.Ll, "longestCascade", a.Kl, "matches", a.Zp]));
                    break;
                case 8:
                    a = function() {
                        b.np();
                        b.Uc.start()
                    }, ha.Pv().then(a, a)
            }
        },
        np: function() {
            var a = this,
                b = ba.rm;
            ba.rm++;
            null != this.Uc && this.Uc.o();
            this.O(this.Uc = new Rb(this.content, b));
            this.Oa();
            F.setTimeout(function() {
                a.Xh = 0
            }, .5)
        },
        Oa: function() {
            null != this.Uc && this.Uc.resize()
        },
        o: function() {
            Q.prototype.o.call(this);
            this.Uc = null
        },
        i: Yd
    });
    Mc.__name__ = "72";
    Mc.B = Q;
    Mc.prototype = v(Q.prototype, {
        Yg: function() {
            var a = [];
            a.push(0);
            a.push(4);
            a.push(1);
            a.push(26);
            a.push(24);
            a.push(23);
            a.push(25);
            a.push(27);
            return a
        },
        zc: function() {
            var a = this;
            Q.prototype.zc.call(this);
            this.Z.Ta(0);
            this.Z.Ta(1);
            this.Z.Ta(23, 25);
            this.Aa.Lc = new K(this.content, 1);
            this.xh = new Nc("button_play");
            this.O(this.xh);
            this.Aa.Gb =
                new K(this.content, 0, "trophy");
            this.Aa.Gb.Ua();
            this.Aa.Gb.Ia();
            this.Xb = new na(this.content, 23);
            this.Z.Ta(4);
            this.Aa.po = new K(this.content, 4);
            Z.Vb(65535) ? this.Aa.ff = new K(this.content, 65535) : Oe.load(function(b) {
                a.Z.rb.createTexture(65535, b);
                a.Aa.ff = new K(a.content, 65535);
                a.Aa.ff.Ue(a.Ol)
            });
            this.ci()
        },
        Zb: function() {
            Q.prototype.Zb.call(this);
            t.play(t.In)
        },
        wb: function() {
            Q.prototype.wb.call(this);
            this.Dh || this.xh.Kh(!0)
        },
        handle: function(a) {
            var b = this;
            Q.prototype.handle.call(this, a);
            47 == a.type && (t.Hk(t.In,
                .5), this.xh.Kh(!1), a = function() {
                b.jd(Yd, !1)
            }, ha.Qv().then(a, a))
        },
        fd: function(a) {
            null != this.Aa.ff && this.Aa.ff.fd(a) && Oe.click()
        },
        Oa: function() {
            var a = this.Ye(),
                b = (new G).xb(.7);
            a = G.mc(a.b, a.a);
            a.Dd(b);
            a.ca(b, 0, 0);
            var c = b.Vm(.5);
            switch (b.bl()) {
                case 0:
                    c.top.nc(.1, 0);
                    break;
                case 1:
                    c.top.nc(.2, 0);
                    break;
                case 2:
                    c.top.nc(.3, .1)
            }
            var d = this.Aa.Lc.sd(),
                e = G.mc(d.b, d.a);
            c.top.Dd(e);
            c.top.ma(e);
            this.Aa.Lc.Ue(e.ra());
            d = Z.get(0).Gc.af;
            d = (null != X.button_play ? d.gc("button_play") : d.C.button_play).P;
            d = G.mc(d.b, d.a);
            d.xj(e.ip().a /
                3);
            0 != b.bl() && c.bottom.nc(0, .2);
            c.bottom.ca(d, 0, -1);
            e = G.mc(.5 * c.bottom.$(), d.da());
            c.bottom.ca(e, 0, 1);
            e.aa(d.H.d + .25 * d.da());
            c = this.Aa.Gb;
            0 < ca.Xb ? (this.Xb.fa(!0), this.Xb.za(Jb.dl(ca.Xb)), this.Xb.ac(.75 * e.da() | 0), this.Xb.Qb(e.$(), e.da()), this.Xb.Ej(16), this.Xb.ca(e.ra(), 0, 0), c.fa(!0), c.ha(e.H.b), c.aa(e.H.a + e.da() / 2), c.ba(1), c.ba(e.da() / c.da())) : (this.Xb.fa(!1), c.fa(!1));
            c = this.Aa.po;
            c.ba(1);
            c.ba(.6 * d.$() / c.$());
            c.ha(a.H.f - c.$());
            c.aa(a.H.d - c.da());
            this.xh.Vq(d.ra());
            b = G.ph(b.H.b, e.H.d, b.H.f, b.H.d);
            b.nc(.4, .3);
            this.Ol = b.ra();
            null != this.Aa.ff && this.Aa.ff.Ue(this.Ol)
        },
        o: function() {
            Q.prototype.o.call(this);
            this.Aa = this.Ol = this.Xb = this.xh = null
        },
        i: Mc
    });
    Qa.__name__ = "73";
    Qa.B = N;
    Qa.prototype = v(N.prototype, {
        Yg: function() {
            return []
        },
        wb: function() {
            var a = this;
            N.prototype.wb.call(this);
            this.loaded = !1;
            this.Si = sa.get(this.vc.tc, "loaderInfo");
            this.eg = 0;
            for (var b = this.zi(), c = 0, d = this.Si.Fc; c < d.length;) {
                var e = d[c];
                ++c;
                if (!n.rl(e) || null != n.Ve()) {
                    var f = n.je(e);
                    if (b.wl(f) || b.load(f)) b.Dq(f), this.eg++, n.dj(e, function() {
                        a.eg--;
                        a.gg()
                    })
                }
            }
        },
        update: function(a) {
            N.prototype.update.call(this, a);
            !this.loaded && (this.loaded = this.Ii()) && (this.Si.loaded = !0, this.finish(sa.set({}, "loaderInfo", this.Si)))
        },
        Ii: function() {
            return 0 == this.eg
        },
        gg: function() {},
        o: function() {
            N.prototype.o.call(this);
            this.Si = null
        },
        i: Qa
    });
    Lc.__name__ = "74";
    Lc.B = Qa;
    Lc.prototype = v(Qa.prototype, {
        fh: function() {
            return !1
        },
        zc: function() {
            Qa.prototype.zc.call(this);
            var a = fa.Z;
            a.Ta(2);
            a.Ta(24, 25);
            this.group = new ka(null, this.content);
            this.T = new K(this.group, 2);
            this.T.Ua();
            this.T.Ia();
            a = -this.T.da() / 2;
            var b = this.T.$() / 2,
                c = this.T.da() / 2,
                d = new J;
            d.b = -this.T.$() / 2;
            d.a = a;
            d.f = b;
            d.d = c;
            this.Fa = d;
            this.text = new na(this.group, 24);
            b = a = this.Fa;
            this.text.Qb(a.f - a.b, b.d - b.a);
            this.text.za("00");
            a = this.Fa;
            this.text.ac((a.f - a.b) / 2 | 0);
            this.text.ca(this.Fa, 0, 0);
            this.text.fa(!1)
        },
        Zb: function() {
            Qa.prototype.Zb.call(this);
            this.resize()
        },
        wb: function() {
            Qa.prototype.wb.call(this);
            this.za();
            this.text.fa(!0)
        },
        update: function(a) {
            Qa.prototype.update.call(this, a);
            a = this.T;
            a.hd(a.$c + 5);
            switch (this.di) {
                case 0:
                    a =
                        this.ta(.5);
                    this.T.ba(.01 + U.Jd(.2)(a));
                    this.loaded && 1 == a && (this.time = 0, this.di = 1);
                    break;
                case 1:
                    1 == this.ta(.5) && (this.time = 0, this.di = 2);
                    break;
                case 2:
                    a = this.ta(.25);
                    var b = U.Nc(2);
                    this.T.ba(1 - (.01 + b(a)));
                    this.group.qa(1 - b(a));
                    1 == a && (this.di = 3);
                    break;
                case 3:
                    this.Qc = !1, Qa.prototype.finish.call(this, this.tc)
            }
            this.on && (this.on = !1, this.za())
        },
        finish: function(a) {
            this.tc = a
        },
        gg: function() {
            this.on = !0
        },
        Ye: function() {
            return fa.Z.window.hc()
        },
        za: function() {
            0 > this.eg || (this.text.za(C.Sa(this.eg)), this.text.ca(this.Fa,
                0, 0), this.text.fa(!0))
        },
        resize: function() {
            var a = this.Ye(),
                b = Math.min(a.b, a.a),
                c = new J;
            c.b = 0;
            c.a = 0;
            c.f = .15 * b;
            c.d = .15 * b;
            c = b = this.U = c;
            c = a.b - 1.25 * (c.f - c.b);
            var d = b.f - b.b;
            b.b = c;
            b.f = c + d;
            c = b = this.U;
            a = a.a - 1.25 * (c.d - c.a);
            c = b.d - b.a;
            b.a = a;
            b.d = a + c;
            a = this.U;
            this.group.ba((a.f - a.b) / this.T.sd().b);
            a = this.U;
            this.group.ha(a.b + .5 * (a.f - a.b));
            a = this.U;
            this.group.aa(a.a + .5 * (a.d - a.a));
            this.za()
        },
        o: function() {
            this.group.A();
            Qa.prototype.o.call(this);
            this.Fa = this.tc = this.U = this.text = this.T = this.group = null
        },
        i: Lc
    });
    Kc.__name__ =
        "75";
    Kc.B = Q;
    Kc.prototype = v(Q.prototype, {
        zc: function() {
            var a = this;
            Q.prototype.zc.call(this);
            this.pk = Mc;
            var b = N.Ru(this.pk);
            this.xm = b.length;
            for (var c = 0; c < b.length;) n.dj(b[c++], B(this, this.gg));
            c = Array(b.length);
            for (var d = 0, e = b.length; d < e;) {
                var f = d++;
                c[f] = n.je(b[f])
            }
            this.lm = c;
            aa.hb(this.lm, function(b) {
                return a.zi().load(b)
            });
            aa.hb(this.lm, function(b) {
                return a.zi().Dq(b)
            });
            this.Z.Ta(24, 25);
            this.Z.Ta(2);
            this.I = new K(this.content, 2);
            this.I.Ia();
            this.I.Ua();
            this.text = new na(this.content, 24);
            this.ci()
        },
        wb: function() {
            var a = this;
            Q.prototype.wb.call(this);
            var b = new gc(33);
            b.Eh = function() {
                a.loaded || (a.za(), 3 == a.state && 0 == a.xm && (a.loaded = !0, b.stop(), a.te()))
                if(typeof a.loaded !== "undefined") {
                    try{
                        window.famobi_analytics.trackScreen("SCREEN_HOME");
                    } catch(e) {

                    }

                }
            }
        },
        update: function(a) {
            Q.prototype.update.call(this, a);
            a = this.I;
            a.hd(a.$c + 5)
        },
        Oa: function() {
            var a = this.Ye(),
                b = Math.min(a.b, a.a),
                c = new J;
            c.b = 0;
            c.a = 0;
            c.f = .2 * b;
            c.d = .2 * b;
            c = b = this.U = c;
            c = a.b / 2 - (c.f - c.b) / 2;
            var d = b.f - b.b;
            b.b = c;
            b.f = c + d;
            c = b = this.U;
            a = a.a / 2 - (c.d - c.a) / 2;
            c = b.d - b.a;
            b.a = a;
            b.d = a + c;
            a = this.U;
            this.I.ba((a.f - a.b) / this.I.sd().b);
            a = this.U;
            this.I.ha(a.b +
                .5 * (a.f - a.b));
            a = this.U;
            this.I.aa(a.a + .5 * (a.d - a.a));
            this.za()
        },
        gg: function() {
            this.xm--
        },
        te: function() {
            for (var a = n.Qu(), b = Array(a.length), c = 0, d = a.length; c < d;) {
                var e = c++;
                b[e] = this.zi().load(n.je(a[e]))
            }
            A.yl() || A.up() ? (this.confirm = !0, this.za(), this.dv(B(this, this.next))) : this.next()
        },
        dv: function(a) {
            Ea.cb().ua(function(b) {
                1 == b.type && (b.zh.detach(b.s), A.resume(a))
            })
        },
        next: function() {
            this.jd(this.pk, !1)
        },
        za: function() {
            if (this.confirm) {
                var a = this.Ye();
                this.text.Qb(a.b / 2 | 0, this.I.da() / 2 | 0);
                this.text.za(V.translate(T.i9).toUpperCase());
                this.text.ac(this.I.da() / 4 | 0);
                this.text.Ej();
                var b = a.b;
                a = a.a;
                var c = new J;
                c.b = 0;
                c.a = 0;
                c.f = b;
                c.d = a;
                this.text.ca(c, 0, 0)
            } else this.text.za(C.Sa(this.xm)), a = b = this.U, this.text.Qb((b.f - b.b) / 2, (a.d - a.a) / 2), b = this.U, this.text.ac((b.d - b.a) / 3 | 0), this.text.ca(this.U, 0, 0)
        },
        o: function() {
            Q.prototype.o.call(this);
            this.pk = this.U = this.text = this.I = this.lm = null
        },
        i: Kc
    });
    G.__name__ = "76";
    G.mc = function(a, b) {
        var c = new G,
            d = c.H;
        d.b = 0;
        d.a = 0;
        d.f = a;
        d.d = b;
        return c
    };
    G.ph = function(a, b, c, d) {
        var e = new G,
            f = e.H;
        f.b = a;
        f.a = b;
        f.f = c;
        f.d =
            d;
        return e
    };
    G.prototype = {
        ra: function() {
            var a = this.H,
                b = new J;
            b.b = a.b;
            b.a = a.a;
            b.f = a.f;
            b.d = a.d;
            return b
        },
        aa: function(a) {
            var b = this.H,
                c = b.d - b.a;
            b.a = a;
            b.d = a + c;
            return a
        },
        Ax: function(a) {
            return this.H.b = a
        },
        Bx: function(a) {
            return this.H.a = a
        },
        zx: function(a) {
            return this.H.f = a
        },
        Om: function(a) {
            return this.H.d = a
        },
        ip: function() {
            var a = this.H,
                b = this.H,
                c = new I;
            c.b = a.f - a.b;
            c.a = b.d - b.a;
            return c
        },
        $: function() {
            var a = this.H;
            return a.f - a.b
        },
        da: function() {
            var a = this.H;
            return a.d - a.a
        },
        kx: function(a, b) {
            var c = this.H;
            c.b = 0;
            c.a =
                0;
            c.f = a;
            c.d = b;
            return this
        },
        xb: function(a, b) {
            null == b && (b = 1);
            this.Hp = a;
            a = this.H;
            a.b = 0;
            a.a = 0;
            a.f = this.Hp * b;
            a.d = b;
            return this
        },
        nc: function(a, b, c) {
            null == c && (c = !1);
            c || (c = this.H, a = (0 > a ? 0 : 1 < a ? 1 : a) * (c.f - c.b) / 2, c = this.H, b = (0 > b ? 0 : 1 < b ? 1 : b) * (c.d - c.a) / 2);
            Xf.offset(this.H, -a, -b)
        },
        bl: function() {
            var a = this.H,
                b = this.H;
            a = (a.f - a.b) / (b.d - b.a);
            return .9 > a ? 0 : 1.1 < a ? 2 : 1
        },
        Vm: function(a) {
            return new Cf(this, a)
        },
        Wm: function(a) {
            return new Bf(this, a)
        },
        hr: function(a, b) {
            return new Df(this, a, b)
        },
        oc: function(a, b) {
            null == b && (b = -1);
            var c =
                this.H;
            c = a / (c.f - c.b);
            var d = this.H;
            d.f = d.b + a;
            a = this.H;
            a.d = a.a + (a.d - a.a) * c;
            0 < b && (a = this.H, a.d - a.a > b && (a = this.H, a = b / (a.d - a.a), c = this.H, c.d = c.a + b, c = b = this.H, b.f = b.b + (c.f - c.b) * a));
            return this
        },
        xj: function(a, b) {
            null == b && (b = -1);
            var c = this.H,
                d = this.H;
            d.f = d.b + a / (c.d - c.a) * (d.f - d.b);
            c = this.H;
            c.d = c.a + a;
            0 < b && (a = this.H, a.f - a.b > b && (a = this.H, a = b / (a.f - a.b), c = this.H, c.f = c.b + b, c = b = this.H, b.d = b.a + (c.d - c.a) * a));
            return this
        },
        Dd: function(a) {
            var b = this.H,
                c = a.ip(),
                d = (b.f - b.b) / c.b,
                e = (b.d - b.a) / c.a,
                f = a.H;
            d <= e ? (c = c.a * d, f.b = b.b,
                f.a = b.a, f.f = f.b + (b.f - b.b), f.d = f.a + c) : (c = c.b * e, d = b.b, e = f.f - f.b, f.b = d, f.f = d + e, d = b.a, e = f.d - f.a, f.a = d, f.d = d + e, f.f = f.b + c, f.d = f.a + (b.d - b.a));
            return a
        },
        ma: function(a) {
            this.align(a.H, this.H, 0, 0);
            return a
        },
        ca: function(a, b, c) {
            this.align(a.H, this.H, b, c);
            return a
        },
        align: function(a, b, c, d) {
            if (0 > c) {
                c = b.b;
                var e = a.f - a.b
            } else c = 0 < c ? b.f - (a.f - a.b) : b.b + (b.f - b.b - (a.f - a.b)) / 2, e = a.f - a.b;
            a.b = c;
            a.f = c + e;
            b = 0 > d ? b.a : 0 < d ? b.d - (a.d - a.a) : b.a + (b.d - b.a - (a.d - a.a)) / 2;
            d = a.d - a.a;
            a.a = b;
            a.d = b + d
        },
        ft: function(a, b, c) {
            this.et(a.H, this.H, b, c);
            return a
        },
        et: function(a, b, c, d) {
            c = b.b + (b.f - b.b - (a.f - a.b)) * c;
            var e = a.f - a.b;
            a.b = c;
            a.f = c + e;
            b = b.a + (b.d - b.a - (a.d - a.a)) * d;
            d = a.d - a.a;
            a.a = b;
            a.d = b + d
        },
        i: G
    };
    Df.__name__ = "77";
    Df.prototype = {
        Pk: function(a, b) {
            return this.Ip[b * this.cols + a]
        },
        i: Df
    };
    Cf.__name__ = "78";
    Cf.prototype = {
        i: Cf
    };
    Bf.__name__ = "79";
    Bf.prototype = {
        i: Bf
    };
    hc.__name__ = "7A";
    hc.__isInterface__ = !0;
    hc.prototype = {
        i: hc
    };
    Xd.__name__ = "7B";
    Xd.__interfaces__ = [hc];
    Xd.prototype = {
        Nd: function() {
            return .5
        },
        cj: function(a, b) {
            b.dk()
        },
        hg: function(a, b, c, d) {
            b.Ic.qa(1 - U.Nc(2)(d))
        },
        dm: function(a, b) {
            b.ym()
        },
        i: Xd
    };
    Wd.__name__ = "7C";
    Wd.__interfaces__ = [hc];
    Wd.prototype = {
        Nd: function() {
            return 1
        },
        cj: function(a, b) {
            t.play(t.Us);
            a.dk();
            a.Ic.qa(0);
            b.dk();
            b.Ic.qa(1);
            b.canvas.fa(!1);
            this.jp = !1
        },
        hg: function(a, b, c, d) {
            .5 > d ? a.Ic.qa(U.Bq()(Va.map(d, 0, .5, 0, 1))) : (this.jp || (this.jp = !0, a.canvas.fa(!1), b.canvas.fa(!0)), b.Ic.qa(1 - U.Nc(2)(Va.map(d, .5, 1, 0, 1))))
        },
        dm: function(a, b) {
            a.ym();
            b.ym()
        },
        i: Wd
    };
    Vd.__name__ = "7D";
    Vd.B = l;
    Vd.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.ta(this.interval);
            var b = 1 == a;
            switch (this.kind) {
                case 0:
                    switch (this.state) {
                        case 0:
                            this.scale = U.Jd(.1)(a);
                            this.alpha = a;
                            b && (this.interval = 1, this.time = 0, this.state++);
                            break;
                        case 1:
                            b && (this.interval = .3, this.time = 0, this.state++);
                            break;
                        case 2:
                            this.alpha = 1 - a, this.scale = 1 - U.ot()(a), b && this.o()
                    }
                    break;
                case 1:
                    switch (this.state) {
                        case 0:
                            this.alpha = this.scale = a;
                            b && (this.interval = 1, this.time = 0, this.state++);
                            break;
                        case 1:
                            this.scale = 1 + .5 * a, this.alpha = 1 - U.Bq()(a), b && this.o()
                    }
            }
        },
        pa: function(a) {
            l.prototype.pa.call(this,
                a);
            this.Ec.ha(150 * this.ea.b);
            this.Ec.aa(150 * this.ea.a);
            this.Ec.qa(this.alpha);
            this.Ec.ba(this.scale)
        },
        K: function() {
            l.prototype.K.call(this);
            var a = 150 * M.Ea;
            this.Ec = new na(this.v().rd(4), 24);
            this.Ec.Qb(a, a);
            this.Ec.za(this.text);
            this.Ec.ac(a / 8 | 0);
            var b = new J;
            b.b = 0;
            b.a = 0;
            b.f = a;
            b.d = a;
            this.Ec.ca(b, 0, 0);
            this.Ec.Ia();
            this.ea.b = this.Ec.va / 150;
            this.ea.a = this.Ec.wa / 150
        },
        o: function() {
            l.prototype.o.call(this);
            null != this.gb && (this.gb(), this.gb = null);
            this.Ec.A();
            this.Ec = this.ea = this.gb = null
        },
        i: Vd
    });
    P.__name__ =
        "7E";
    P.B = l;
    P.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.I = new K(this.xa().canvas, 0, this.Od());
            this.I.Ia();
            this.I.Ua();
            this.Qc = !1;
            oa.Hb().ua(B(this, this.cd));
            this.Oa()
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            this.md *= .8;
            this.I.ba(this.scale + this.scale * Math.sin(25 * this.time) * -this.md);
            a = this.md;
            if (0 < a ? .005 > a : .005 > -a) this.I.ba(this.scale), this.Qc = !1
        },
        Oa: function() {
            var a = this.Pa(),
                b = this.I.sd();
            this.scale = Math.min((a.f - a.b) / b.b, (a.d - a.a) / b.a);
            this.I.ba(this.scale);
            this.I.ha(a.b + .5 * (a.f - a.b));
            this.I.aa(a.a + .5 * (a.d - a.a))
        },
        cd: function(a) {
            if (this.enabled && 0 == a.type) {
                var b = new I;
                b.b = a.x;
                b.a = a.y;
                this.I.fd(b) && (this.Pe(), this.dd())
            }
        },
        Pe: function() {
            this.Qc = !0;
            this.time = 0;
            this.md = .2
        },
        dd: function() {
            t.play(t.Gn)
        },
        Od: function() {
            return null
        },
        Pa: function() {
            return null
        },
        o: function() {
            oa.Hb().detach(B(this, this.cd));
            this.I.A();
            l.prototype.o.call(this);
            this.I = null
        },
        i: P
    });
    Ud.__name__ = "7F";
    Ud.B = l;
    Ud.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this)
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            switch (a.type) {
                case 10:
                    this.T = new K(this.v().rd(0), 13);
                    a = this.T.sd().b;
                    this.T.Ia();
                    this.T.ba(150 * M.Ea / this.T.$());
                    a = (a - this.T.$()) / 2;
                    var b = this.T;
                    b.ha(b.va - a);
                    b = this.T;
                    b.aa(b.wa - a);
                    this.T.qa(0);
                    this.time = this.alpha = 0;
                    this.state = 1;
                    break;
                case 44:
                    this.scale = this.T.Ra, this.alpha = this.T.Sd, this.state = 2
            }
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            switch (this.state) {
                case 1:
                    a = this.ta(1);
                    this.alpha = .85 * U.Nc(2)(a);
                    1 == a && (this.state = 0);
                    break;
                case 2:
                    this.rotation +=
                        .02, this.scale += .01, this.alpha += .005
            }
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            switch (this.state) {
                case 1:
                    this.T.qa(this.alpha);
                    break;
                case 2:
                    a = this.T, a.hd(a.$c + this.rotation), this.T.ba(this.scale), this.T.qa(this.alpha)
            }
        },
        o: function() {
            l.prototype.o.call(this);
            this.T.A();
            this.T = null
        },
        i: Ud
    });
    Td.__name__ = "80";
    Td.B = l;
    Td.prototype = v(l.prototype, {
        update: function(a) {
            l.prototype.update.call(this, a);
            this.ea.a -= .005;
            switch (this.state) {
                case 0:
                    a = this.ta(.25);
                    this.scale = U.Jd(.2)(a);
                    1 == a && (this.state++, this.time =
                        0, this.scale = 1);
                    break;
                case 1:
                    1 == this.ta(.5) && (this.time = 0, this.state++);
                    break;
                case 2:
                    a = this.ta(.5), this.alpha = this.scale = 1 - a, 1 == a && (this.state++, this.o())
            }
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            this.text.ha(150 * this.ea.b);
            this.text.aa(150 * this.ea.a);
            this.text.qa(this.alpha);
            this.text.ba(this.scale)
        },
        K: function() {
            l.prototype.K.call(this);
            this.text = new na(this.v().rd(4), 23);
            this.text.Jh();
            this.text.Qb(150, 150);
            this.text.za("X2");
            this.text.Ia();
            this.text.Ua()
        },
        o: function() {
            l.prototype.o.call(this);
            this.text.A();
            this.text = this.ea = null
        },
        i: Td
    });
    Qb.__name__ = "81";
    Qb.__interfaces__ = [lc];
    Qb.B = l;
    Qb.prototype = v(l.prototype, {
        Yo: function(a) {
            return this.canvas.Rk(a)
        },
        K: function() {
            l.prototype.K.call(this);
            this.canvas = new ka;
            this.canvas.appendChild(new ka("layer_cells"));
            this.canvas.appendChild(new ka("layer_pieces_color"));
            this.canvas.appendChild(new ka("layer_effects"));
            this.canvas.appendChild(new ka("layer_selection"));
            this.canvas.appendChild(new ka("layer_points"));
            this.xa().canvas.appendChild(this.canvas);
            this.v().ua(this)
        },
        zv: function() {
            for (var a = this.v().S.cells, b = a.iterator(); b.ia();) this.Lx(b.next());
            for (a = a.iterator(); a.ia();) b = a.next(), b.s.na && this.Gj(b.m)
        },
        handle: function(a) {
            switch (a.type) {
                case 4:
                    a = this.xa().Da.S;
                    this.canvas.ha(a.b);
                    this.canvas.aa(a.a);
                    this.canvas.ba((a.f - a.b) / (150 * M.Ea));
                    break;
                case 9:
                    this.zv();
                    this.O(new Ud);
                    break;
                case 16:
                    if (this.v().eh) {
                        a = this.v().S.cells;
                        var b = this.v().kc.Sq,
                            c = this.v().S.cells,
                            d = this.v().kc.Tq;
                        this.O(new Td(a.c[b.y * a.F + b.x].m, c.c[d.y * c.F + d.x].m))
                    }
                    break;
                case 25:
                    this.Gj(sa.get(a.tc,
                        "piece"));
                    break;
                case 26:
                    this.wg(sa.get(a.tc, "piece"))
            }
        },
        Lx: function(a) {
            this.O(new Je(a))
        },
        Gj: function(a) {
            a = new Db(a);
            a.O(new kb(this.Yo(1)));
            this.O(a)
        },
        wg: function(a) {
            this.O(new vb(a))
        },
        o: function() {
            this.v().detach(this);
            this.canvas.A();
            this.canvas = null;
            l.prototype.o.call(this);
            this.canvas = null
        },
        i: Qb
    });
    Sd.__name__ = "82";
    Sd.B = P;
    Sd.prototype = v(P.prototype, {
        K: function() {
            P.prototype.K.call(this);
            this.v().ua(this)
        },
        o: function() {
            this.v().detach(this);
            P.prototype.o.call(this)
        },
        handle: function(a) {
            if (!this.v().paused) switch (P.prototype.handle.call(this,
                a), a.type) {
                case 13:
                    this.enabled = !0;
                    break;
                case 38:
                    this.enabled = !1
            }
        },
        dd: function() {
            P.prototype.dd.call(this);
            this.v().Lq()
        },
        Od: function() {
            return "button_hint"
        },
        Pa: function() {
            return this.xa().Da.hint
        },
        i: Sd
    });
    Rd.__name__ = "83";
    Rd.B = l;
    Rd.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.I = new K(this.xa().canvas, 1)
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            4 == a.type && this.Da()
        },
        Da: function() {
            var a = this.xa().Da.Lc;
            this.I.Ue(a);
            this.I.ha(this.I.va + (a.f - a.b - this.I.$()) / 2)
        },
        o: function() {
            this.I.A();
            l.prototype.o.call(this);
            this.I = null
        },
        i: Rd
    });
    Qd.__name__ = "84";
    Qd.B = P;
    Qd.prototype = v(P.prototype, {
        K: function() {
            P.prototype.K.call(this);
            this.v().ua(this)
        },
        o: function() {
            this.v().detach(this);
            P.prototype.o.call(this)
        },
        handle: function(a) {
            P.prototype.handle.call(this, a);
            switch (a.type) {
                case 6:
                    this.enabled = !0;
                    break;
                case 13:
                    this.enabled = !0;
                    break;
                case 38:
                    this.enabled = !1
            }
        },
        dd: function() {
            var a = this;
            P.prototype.dd.call(this);
            if (3 < this.v().Hc.kf) {
                this.enabled = !1;
                var b = function() {
                    a.xa().pause()
                };
                ha.pause().then(b,
                    b)
            }
        },
        Od: function() {
            return "button_pause"
        },
        Pa: function() {
            return this.xa().Da.pause
        },
        i: Qd
    });
    kb.__name__ = "85";
    kb.B = z;
    kb.prototype = v(z.prototype, {
        K: function() {
            z.prototype.K.call(this);
            this.jj = E.tb(this.parent, Db);
            this.group = new ka(null, this.Dp);
            this.I = new K(this.group, 9);
            this.Fd = new K(this.group, 5);
            this.Fd.fa(!1);
            this.gh = !1;
            this.Uh()
        },
        handle: function(a) {
            z.prototype.handle.call(this, a);
            46 == a.type && this.Uh()
        },
        pa: function(a) {
            z.prototype.pa.call(this, a);
            a = this.jj;
            var b = a.position.a,
                c = a.scale;
            this.group.ha(a.position.b);
            this.group.aa(b);
            this.group.ba(c);
            this.I.qa(a.alpha);
            this.I.fa(a.visible);
            this.I.hd(a.rotation);
            if (a.De && !this.gh) {
                if (9 == a.m.code.kind) return;
                this.gh = !0;
                b = S.Tu(a.m.code.kind);
                this.Fd.bc(5, b.frames[0].value);
                this.Fd.Ua();
                this.Fd.Ia();
                this.Fd.Tf().play(b, !0, null, B(this, this.mw))
            }
            9 == a.m.code.kind && null != this.jb && this.jb.qa(Va.map(Math.sin(3 * this.time), -1, 1, .25, .9) * a.alpha);
            this.gh && (null != a.m ? (a = a.m.s, a = a.fe || a.Tc) : a = !0, a ? (this.gh = !1, this.Fd.fa(!1)) : this.Fd.fa(!0))
        },
        Uh: function() {
            var a = this.jj.m;
            9 ==
                a.code.kind ? (a = S.Vo(), this.I.bc(8, a.frames[0].value), this.I.Tf().play(a), this.jb = new K(this.group), this.jb.bc(8, a.frames[0].value), this.jb.Tf().play(S.Vo()).Iq(), this.jb.Ia(), this.jb.Ua(), this.jb.nf(-1), this.jb.tg(-1), this.jb.Sf().add()) : (0 != a.code.Ma && (1 == a.code.Ma ? (null == this.yg && (this.yg = new K(this.group)), this.yg.bc(10, "glow"), this.yg.Ua(), this.yg.Ia(), this.yg.yj(), null == this.xg && (this.xg = new K(this.group)), this.kj(this.xg, 10, S.Uo()), this.xg.yj(), null == this.jb && (this.jb = new K(this.group)), this.kj(this.jb,
                    10, S.Uo()), this.jb.Sf().add()) : 2 == a.code.Ma && (null == this.jb && (this.jb = new K(this.group)), this.kj(this.jb, 7, S.Fu()), null == this.Nh && (this.Nh = new K(this.group)), this.kj(this.Nh, 7, S.Eu())), this.Fd.Hm()), this.I.bc(9, this.Od()));
            this.I.ba(1);
            this.I.hd(0);
            this.I.Ia();
            this.I.Ua()
        },
        Od: function() {
            return "gem_" + this.jj.m.code.Wo()
        },
        kj: function(a, b, c) {
            a.bc(b, c.frames[0].value);
            a.ba(1);
            a.hd(0);
            a.Ia();
            a.Ua();
            a.Tf().play(c).Iq()
        },
        mw: function() {
            this.Fd.fa(!1);
            this.gh = !1
        },
        o: function() {
            z.prototype.o.call(this);
            this.group.A();
            this.jj = this.Fd = this.Nh = this.jb = this.I = this.yg = this.xg = this.group = this.Dp = null
        },
        i: kb
    });
    Jc.__name__ = "86";
    Jc.__isInterface__ = !0;
    Jc.prototype = {
        i: Jc
    };
    bb.__name__ = "87";
    bb.__interfaces__ = [Jc];
    bb.prototype = {
        get: function(a) {
            return this.C[a]
        },
        remove: function(a) {
            if (!this.C.hasOwnProperty(a)) return !1;
            delete this.C[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.C) this.C.hasOwnProperty(b) ? a.push(b | 0) : null;
            return y.hb(a)
        },
        iterator: function() {
            return {
                Mw: this.C,
                yp: this.keys(),
                ia: function() {
                    return this.yp.ia()
                },
                next: function() {
                    var a = this.yp.next();
                    return this.Mw[a]
                }
            }
        },
        i: bb
    };
    vb.__name__ = "88";
    vb.B = l;
    vb.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            var a = this.m.Bd * this.m.ad;
            this.key = this.m.code.kind << 16 | a;
            this.text = new na(this.v().rd(4));
            this.text.bc(9 == this.m.code.kind ? 19 : vb.$x[this.m.code.kind]);
            this.text.Jh();
            "sd" == n.Yk() && this.text.ac(2 * this.text.Ca.size);
            this.text.Qb(150, 150);
            this.text.za(null == a ? "null" : "" + a);
            this.text.Ia();
            this.text.Ua();
            this.text.qa(1);
            this.text.ba(1)
        },
        update: function(a) {
            l.prototype.update.call(this,
                a);
            switch (this.state) {
                case 0:
                    this.Hg.a -= .01;
                    1 == this.ta(1) && (this.time = 0, this.state++);
                    break;
                case 1:
                    a = this.ta(.25), this.alpha = 1 - a, 1 == a && (this.state++, this.o())
            }
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            a = 150 * this.Hg.a;
            this.text.ha(150 * this.Hg.b);
            this.text.aa(a);
            this.text.qa(this.alpha);
            this.text.ba(this.alpha)
        },
        o: function() {
            if (null != this.text.node) {
                this.text.remove();
                var a = vb.we.C[this.key];
                null == a && (a = [], vb.we.C[this.key] = a);
                a.push(this.text);
                l.prototype.o.call(this);
                this.text = this.Hg = this.m = null
            }
        },
        i: vb
    });
    Ic.__name__ = "89";
    Ic.B = P;
    Ic.prototype = v(P.prototype, {
        K: function() {
            this.enabled = !0;
            P.prototype.K.call(this)
        },
        dd: function() {
            P.prototype.dd.call(this);
            this.enabled = !1;
            this.parent.uc(Hc).enabled = !1;
            F.setTimeout((Da = this.xa(), B(Da, Da.Xw)), .5)
        },
        Od: function() {
            return "button_restart"
        },
        Pa: function() {
            return this.U
        },
        Oa: function() {
            var a = this.xa().Da.S,
                b = Math.min(300, .2 * Math.min(a.f - a.b, a.d - a.a));
            b = (new G).xb(1).oc(b);
            var c = a.b + .5 * (a.f - a.b) - b.$() / 2,
                d = b.H,
                e = d.f - d.b;
            d.b = c;
            d.f = c + e;
            b.aa(a.a + .5 * (a.d - a.a));
            this.U =
                b.ra();
            P.prototype.Oa.call(this)
        },
        o: function() {
            P.prototype.o.call(this);
            this.U = null
        },
        i: Ic
    });
    Hc.__name__ = "8A";
    Hc.B = P;
    Hc.prototype = v(P.prototype, {
        K: function() {
            this.ij = new K(this.xa().canvas);
            this.ij.qa(.75);
            this.enabled = !0;
            P.prototype.K.call(this)
        },
        dd: function() {
            var a = this;
            P.prototype.dd.call(this);
            this.enabled = !1;
            this.parent.uc(Ic).enabled = !1;
            ha.resume().then(function() {
                a.xa().resume()
            })
        },
        Od: function() {
            return "button_resume"
        },
        Pa: function() {
            return this.U
        },
        Oa: function() {
            var a = this.xa().Z.window.hc(),
                b = .00392156862745098 * ta.kb(0),
                c = .00392156862745098 * ta.kb(0),
                d = .00392156862745098 * ta.kb(255),
                e = new J;
            e.b = .00392156862745098 * ta.kb(0);
            e.a = b;
            e.f = c;
            e.d = d;
            this.ij.Ih(e, a.b, a.a);
            a = this.xa().Da.S;
            b = Math.min(300, .2 * Math.min(a.f - a.b, a.d - a.a));
            b = (new G).xb(1).oc(b);
            c = a.b + .5 * (a.f - a.b) - b.$() / 2;
            d = b.H;
            e = d.f - d.b;
            d.b = c;
            d.f = c + e;
            b.aa(a.a + .5 * (a.d - a.a) - b.da() - b.da() / 4);
            this.U = b.ra();
            P.prototype.Oa.call(this)
        },
        o: function() {
            P.prototype.o.call(this);
            this.ij.A();
            this.U = this.ij = null
        },
        i: Hc
    });
    Pd.__name__ = "8B";
    Pd.B = l;
    Pd.prototype =
        v(l.prototype, {
            K: function() {
                l.prototype.K.call(this);
                this.v().ua(this);
                this.sc = new K(this.xa().canvas, 12, "circle0001");
                this.sc.Ua();
                this.sc.Ia();
                this.text = new na(this.xa().canvas, 23);
                this.text.Jh();
                this.text.za("X1");
                this.nk = Array(32);
                for (var a = 1; 31 >= a;) this.nk[a] = "circle00" + (10 > a ? "0" : "") + a, ++a;
                this.Oa()
            },
            handle: function(a) {
                l.prototype.handle.call(this, a);
                switch (a.type) {
                    case 31:
                        a = this.v().speed.Cb;
                        this.Jf = 1;
                        2 == a && (this.sc.fa(!0), this.state = 1);
                        this.Ah = (a - 1) / 8;
                        break;
                    case 33:
                        this.Jf = this.Ah = this.ze =
                            0;
                        break;
                    case 43:
                        0 == this.Ah && this.sc.fa(!1), this.gb = this.v().rn(), this.time = 0, this.state = 4
                }
            },
            update: function(a) {
                l.prototype.update.call(this, a);
                switch (this.state) {
                    case 1:
                        this.Jf = 1 - this.v().speed.Zh;
                        this.ze += .3 * (this.Ah - this.ze);
                        this.Wq();
                        a = this.ze - 1;
                        if (0 < a ? .01 > a : .01 > -a) a = this.v().lf, this.text.za("X" + this.v().lf), this.text.ca(this.U, 0, 0), this.text.fa(!0), this.text.ba(this.an = 0), this.$m = 1, this.scale = Math.min(.8 + .1 * a, 1.5), this.time = 0, this.state++;
                        break;
                    case 2:
                        a = this.ta(.5);
                        this.an = this.eu(a);
                        this.Jf =
                            1 - a;
                        this.ze = 1 - a;
                        this.Wq();
                        1 == a && (this.state = 3);
                        break;
                    case 3:
                        this.Ah = this.ze = 0;
                        this.state = 1;
                        this.sc.fa(!1);
                        break;
                    case 4:
                        a = this.ta(.5), this.$m = 1 - a, this.Jf = 1 - a, 1 == a && (this.gb(), this.gb = null, this.state = 0)
                }
            },
            pa: function(a) {
                l.prototype.pa.call(this, a);
                this.text.qa(this.$m);
                this.text.ba(this.an * this.scale);
                this.sc.qa(this.Jf)
            },
            Oa: function() {
                var a = this.U = this.xa().Da.ad,
                    b = this.U;
                this.text.Qb(a.f - a.b, b.d - b.a);
                this.text.ha(this.U.b);
                this.text.aa(this.U.a);
                a = this.U;
                this.text.ac(.9 * (a.d - a.a) | 0);
                this.text.ca(this.U,
                    0, 0);
                this.text.Ia();
                a = this.U;
                this.sc.ha(a.b + .5 * (a.f - a.b));
                a = this.U;
                this.sc.aa(a.a + .5 * (a.d - a.a));
                a = this.U;
                this.sc.ba((a.f - a.b) / this.sc.sd().b * 1.5)
            },
            Wq: function() {
                var a = Math.ceil(31 * this.ze);
                0 < a && this.sc.sg(this.nk[a])
            },
            o: function() {
                this.v().detach(this);
                this.text.A();
                this.sc.A();
                l.prototype.o.call(this);
                this.gb = this.nk = this.sc = this.text = this.U = null
            },
            i: Pd
        });
    Od.__name__ = "8C";
    Od.B = l;
    Od.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.text = new na(this.xa().canvas, 24);
            this.text.Jh();
            this.text.za("0");
            this.v().ua(this)
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            43 == a.type && (this.gb = this.v().rn())
        },
        update: function(a) {
            l.prototype.update.call(this, a);
            a = this.la;
            if (this.la < this.v().la) {
                var b = this.v().la - this.la;
                10 > b ? this.Ab++ >= 10 - b && (this.Ab = 0, this.la++) : this.la = 1E3 < b ? this.la + 1E3 : 500 < b ? this.la + 500 : 100 < b ? this.la + 9 : 50 < b ? this.la + 6 : this.la + 3;
                this.la > this.v().la && (this.la = this.v().la)
            } else null != this.gb && (this.gb(), this.gb = null, this.text.ud().alpha(0, 1, U.Nc(2)));
            this.mg = a < this.la
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            this.mg && (a = Jb.dl(this.la), this.text.za(a), this.length != a.length && (this.length = a.length, this.text.ca(this.U, 0, 1)))
        },
        Oa: function() {
            var a = this.U = this.xa().Da.la;
            this.text.Qb(a.f - a.b, a.d - a.a);
            this.text.ha(a.b);
            this.text.aa(a.a);
            this.text.ac(a.d - a.a | 0);
            this.text.ca(a, 0, 1);
            this.align = !1
        },
        o: function() {
            this.v().detach(this);
            this.text.A();
            l.prototype.o.call(this);
            this.gb = this.text = this.U = null
        },
        i: Od
    });
    Nd.__name__ = "8D";
    Nd.B = l;
    Nd.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this)
        },
        handle: function(a) {
            switch (a.type) {
                case 9:
                    this.I = new K(this.v().rd(3), 6, "selection_frame");
                    this.I.Ua();
                    this.I.Ia();
                    this.I.ba(135 / this.I.$());
                    this.I.fa(!1);
                    break;
                case 19:
                    a = this.v().selection.b;
                    this.I.ha(150 * (a.J.x + .5));
                    this.I.aa(150 * (a.J.y + .5));
                    this.I.fa(!0);
                    break;
                case 15:
                case 20:
                case 21:
                case 38:
                case 39:
                    this.I.fa(!1)
            }
        },
        o: function() {
            this.I.A();
            this.v().detach(this);
            l.prototype.o.call(this);
            this.I = null
        },
        i: Nd
    });
    Md.__name__ = "8E";
    Md.B = P;
    Md.prototype = v(P.prototype, {
        handle: function(a) {
            P.prototype.handle.call(this,
                a);
            switch (a.type) {
                case 5:
                    this.enabled = !1;
                    break;
                case 6:
                    this.enabled = !0
            }
        },
        K: function() {
            this.state = ca.Rb;
            P.prototype.K.call(this);
            this.enabled = !0
        },
        dd: function() {
            this.v().paused || (this.state = !this.state, ca.Rb = this.state, ca.save(), ha.zy(this.state ? 1 : 0), this.state ? t.bj() : t.bm(), this.I.sg(this.Od()), this.I.qa(this.state ? 1 : .5), this.state && P.prototype.dd.call(this))
        },
        Od: function() {
            return this.state ? "button_sound_on" : "button_sound_off"
        },
        Pa: function() {
            return this.xa().Da.Rb
        },
        i: Md
    });
    Ld.__name__ = "8F";
    Ld.B = l;
    Ld.prototype =
        v(l.prototype, {
            K: function() {
                l.prototype.K.call(this);
                this.v().ua(this);
                this.text = new na(this.xa().canvas, 23);
                this.text.Jh();
                this.text.fa(!1);
                this.Da()
            },
            handle: function(a) {
                l.prototype.handle.call(this, a);
                switch (a.type) {
                    case 4:
                        this.Da();
                        break;
                    case 31:
                        a = this.v().speed.Cb;
                        if (0 == a) {
                            this.text.fa(!1);
                            this.state = 0;
                            break
                        }
                        this.Up = 9 == a;
                        this.state = 1;
                        this.alpha = 0;
                        this.scale = 1;
                        this.Ck = U.Jd(2 == a ? .3 : .08 * (a - 1));
                        this.text.za(V.translate(T.i2) + " +" + 100 * a);
                        this.text.fa(!0);
                        this.sj(.5);
                        2 == a && (this.text.ca(this.U, 0, 1),
                            this.fb.a = this.text.wa);
                        this.text.ca(this.U, 0, -1);
                        this.ea.b = this.Nb.b = this.text.va;
                        this.ea.a = this.Nb.a = this.text.wa;
                        this.text.Ia();
                        break;
                    case 32:
                        this.state = 3;
                        break;
                    case 33:
                        this.state = 5, this.sj(.3)
                }
            },
            update: function(a) {
                l.prototype.update.call(this, a);
                switch (this.state) {
                    case 1:
                        var b = this.v().speed.Cb;
                        this.alpha = a = this.ta(this.interval);
                        2 == b ? (b = this.fb.a, this.ea.a = b + (this.Nb.a - b) * this.Ck(a)) : this.scale = this.Ck(a) + .02 * (b - 1);
                        if (1 == a)
                            if (this.sj(1), this.Up) {
                                a = this.xa().Da.ad;
                                b = this.fb;
                                b.b = this.text.va;
                                b.a =
                                    this.text.wa;
                                b = this.Nb;
                                var c = a.b + .5 * (a.f - a.b) - this.text.$() / 2;
                                a = a.a + .5 * (a.d - a.a) - this.text.da() / 2;
                                b.b = c;
                                b.a = a;
                                this.sj(.5);
                                this.state = 4
                            } else this.state++;
                        break;
                    case 3:
                        this.alpha = 1 - .5 * this.v().speed.Zh;
                        break;
                    case 4:
                        a = this.ta(this.interval);
                        this.scale = 1 - a;
                        this.alpha = 1 - a;
                        b = this.fb.b;
                        this.ea.b = b + (this.Nb.b - b) * this.Bo(a);
                        b = this.fb.a;
                        this.ea.a = b + (this.Nb.a - b) * this.Bo(a);
                        1 == a && (this.text.fa(!1), this.state = 0);
                        break;
                    case 5:
                        a = this.ta(this.interval), this.scale = 1 + a, this.alpha = .5 - .5 * a, 1 == a && (this.state = 0, this.text.ba(1),
                            this.text.qa(0), this.text.fa(!1))
                }
            },
            pa: function(a) {
                l.prototype.pa.call(this, a);
                0 != this.state && (this.text.qa(this.alpha), this.text.ba(this.scale), this.text.ha(this.ea.b), this.text.aa(this.ea.a))
            },
            Da: function() {
                this.U = this.xa().Da.la;
                this.text.ba(1);
                var a = this.U,
                    b = this.U;
                this.text.Qb(a.f - a.b, b.d - b.a);
                this.text.za("SPEED +1000");
                a = this.U;
                this.text.ac(.5 * (a.d - a.a) | 0);
                this.text.ca(this.U, 0, -1);
                this.ea.b = this.text.va;
                this.ea.a = this.text.wa
            },
            sj: function(a) {
                this.interval = a;
                this.time = 0
            },
            o: function() {
                this.v().detach(this);
                this.text.A();
                l.prototype.o.call(this);
                this.Nb = this.fb = this.ea = this.U = this.text = null
            },
            i: Ld
        });
    Kd.__name__ = "90";
    Kd.B = l;
    Kd.prototype = v(l.prototype, {
        K: function() {
            l.prototype.K.call(this);
            this.v().ua(this);
            this.text = new na(this.xa().canvas, 24);
            this.text.za(Jb.pr(this.xa().wj));
            this.text.fa(!1);
            this.Oa()
        },
        handle: function(a) {
            l.prototype.handle.call(this, a);
            switch (a.type) {
                case 11:
                    this.gb = this.v().rn();
                    this.Cv();
                    break;
                case 38:
                case 39:
                    this.text.ud().alpha(0, 1, U.Nc(2))
            }
        },
        Cv: function() {
            this.Oa();
            var a = new I;
            a.b = this.text.va;
            a.a = this.text.wa;
            this.Ym = a;
            a = this.text.$();
            var b = this.text.da(),
                c = this.xa().Da.S;
            this.text.ha(c.b + .5 * (c.f - c.b) - a / 2);
            this.text.aa(c.a + .5 * (c.d - c.a) - b / 2);
            this.text.fa(!0);
            this.text.Ia();
            this.text.qa(0);
            this.text.ba(1);
            this.text.ud().alpha(1, .25);
            this.text.ud().hn(1.5, .5, U.Jd(.2), null, B(this, this.Dv))
        },
        Dv: function() {
            function a() {
                2 == (c += 1) && (b.gb(), b.gb = null)
            }
            var b = this,
                c = 0;
            this.text.ud().position(this.Ym.b, this.Ym.a, 1, U.Nc(2), null, a).hn(1, 1, U.Nc(2), null, a)
        },
        update: function(a) {
            l.prototype.update.call(this,
                a);
            4 == this.v().state && (a = this.v().Hc.kf | 0, this.Gm != a && (5 > this.v().Hc.kf && (this.warn || (this.warn = !0, this.text.bc(23)), this.Pe = !0, this.scale = .25, this.text.ba(1 + this.scale)), this.Gm = a, this.mg = !0));
            this.Pe && (this.scale *= .9, this.text.ba(1 + this.scale), a = this.scale, 0 < a ? .01 > a : .01 > -a) && (this.text.ba(1), this.Pe = !1)
        },
        pa: function(a) {
            l.prototype.pa.call(this, a);
            4 == this.v().state && this.mg && (this.text.za(Jb.pr(this.Gm)), this.mg = !1)
        },
        Oa: function() {
            var a = this.xa().Da.time,
                b = this.text.Ca.text;
            this.text.Qb(a.f - a.b,
                a.d - a.a);
            this.text.za("00:00");
            this.text.ac(a.d - a.a | 0);
            this.text.za(b);
            this.text.ca(a, 0, 1)
        },
        o: function() {
            l.prototype.o.call(this);
            this.v().detach(this);
            this.text.A();
            l.prototype.o.call(this);
            this.Ym = this.gb = this.text = null
        },
        i: Kd
    });
    gc.__name__ = "91";
    gc.Ld = function(a, b) {
        var c = new gc(b);
        c.Eh = function() {
            c.stop();
            a()
        };
        return c
    };
    gc.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        Eh: function() {},
        i: gc
    };
    ra.__name__ = "92";
    ra.am = function(a, b) {
        if (b == Sb.i1) {
            b = new Uint8Array(a.length <<
                1);
            for (var c = 0, d = a.length; c < d;) {
                var e = c++,
                    f = a.charCodeAt(e);
                b[e << 1] = f & 255;
                b[e << 1 | 1] = f >> 8
            }
            return new ra(b.buffer)
        }
        b = [];
        for (c = 0; c < a.length;) d = a.charCodeAt(c++), 55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023), 127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 | d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63));
        return new ra((new Uint8Array(b)).buffer)
    };
    ra.aj = function(a) {
        var b = a.mv;
        return null != b ? b : new ra(a)
    };
    ra.prototype = {
        Xk: function(a, b, c) {
            if (0 >
                a || 0 > b || a + b > this.length) throw 0;
            null == c && (c = Sb.i0);
            var d = "",
                e = this.a,
                f = a;
            a += b;
            switch (c.G) {
                case 0:
                    for (; f < a;) {
                        c = e[f++];
                        if (128 > c) {
                            if (0 == c) break
                        } else c = 224 > c ? (c & 63) << 6 | e[f++] & 127 : 240 > c ? (c & 31) << 12 | (e[f++] & 127) << 6 | e[f++] & 127 : (c & 15) << 18 | (e[f++] & 127) << 12 | (e[f++] & 127) << 6 | e[f++] & 127;
                        d += String.fromCodePoint(c)
                    }
                    break;
                case 1:
                    for (; f < a;) c = e[f++] | e[f++] << 8, d += String.fromCodePoint(c)
            }
            return d
        },
        toString: function() {
            return this.Xk(0, this.length)
        },
        i: ra
    };
    var Sb = xa.e2 = {
        Ub: !0,
        Kb: ["i0", "i1"]
    };
    Sb.i0 = {
        G: 0,
        N: "e2",
        toString: D
    };
    Sb.i1 = {
        G: 1,
        N: "e2",
        toString: D
    };
    Sb.pc = [Sb.i0, Sb.i1];
    ub.__name__ = "93";
    ub.encode = function(a, b) {
        null == b && (b = !0);
        var c = (new Jd(ub.An)).gu(a).toString();
        if (b) switch (a.length % 3) {
            case 1:
                c += "==";
                break;
            case 2:
                c += "="
        }
        return c
    };
    ub.decode = function(a, b) {
        null == b && (b = !0);
        if (b)
            for (; 61 == y.ki(a, a.length - 1);) a = y.substr(a, 0, -1);
        return (new Jd(ub.An)).St(ra.am(a))
    };
    Jd.__name__ = "94";
    Jd.prototype = {
        gu: function(a) {
            for (var b = this.Wp, c = this.ee, d = 8 * a.length / b | 0, e = new ra(new ArrayBuffer(d + (0 == 8 * a.length % b ? 0 : 1))), f = 0, g = 0, k = (1 << b) -
                    1, m = 0, l = 0; l < d;) {
                for (; g < b;) g += 8, f <<= 8, f |= a.a[m++];
                g -= b;
                e.a[l++] = c.a[f >> g & k]
            }
            0 < g && (e.a[l++] = c.a[f << b - g & k]);
            return e
        },
        xv: function() {
            for (var a = [], b = 0; 256 > b;) a[b++] = -1;
            b = 0;
            for (var c = this.ee.length; b < c;) {
                var d = b++;
                a[this.ee.a[d]] = d
            }
            this.kr = a
        },
        St: function(a) {
            var b = this.Wp;
            null == this.kr && this.xv();
            for (var c = this.kr, d = a.length * b >> 3, e = new ra(new ArrayBuffer(d)), f = 0, g = 0, k = 0, m = 0; m < d;) {
                for (; 8 > g;) {
                    g += b;
                    f <<= b;
                    var l = c[a.a[k++]];
                    if (-1 == l) throw 0;
                    f |= l
                }
                g -= 8;
                e.a[m++] = f >> g & 255
            }
            return e
        },
        i: Jd
    };
    $a.__name__ = "95";
    $a.__interfaces__ =
        [Jc];
    $a.prototype = {
        get: function(a) {
            return null != X[a] ? this.gc(a) : this.C[a]
        },
        Dc: function(a, b) {
            null == this.Ae && (this.Ae = {});
            this.Ae["$" + a] = b
        },
        gc: function(a) {
            return null == this.Ae ? null : this.Ae["$" + a]
        },
        Ug: function(a) {
            return null == this.Ae ? !1 : this.Ae.hasOwnProperty("$" + a)
        },
        keys: function() {
            return y.hb(this.mt())
        },
        mt: function() {
            var a = [],
                b;
            for (b in this.C) this.C.hasOwnProperty(b) && a.push(b);
            if (null != this.Ae)
                for (b in this.Ae) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        i: $a
    };
    Gd.__name__ = "96";
    Gd.prototype = {
        Qn: function(a) {
            this.ea == this.size && this.R(1);
            this.view.setUint8(this.ea++, a)
        },
        $s: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw 0;
            this.ea + c > this.size && this.R(c);
            0 != this.size && (this.sr.set(new Uint8Array(a.a.buffer, a.a.byteOffset + b, c), this.ea), this.ea += c)
        },
        R: function(a) {
            var b = this.ea + a;
            for (a = 0 == this.size ? 16 : this.size; a < b;) a = 3 * a >> 1;
            b = new ArrayBuffer(a);
            var c = new Uint8Array(b);
            0 < this.size && c.set(this.sr);
            this.size = a;
            this.buffer = b;
            this.sr = c;
            this.view = new DataView(this.buffer)
        },
        Kc: function() {
            if (0 == this.size) return new ra(new ArrayBuffer(0));
            var a = new ra(this.buffer);
            a.length = this.ea;
            return a
        },
        i: Gd
    };
    Id.__name__ = "97";
    Id.prototype = {
        W: function() {
            throw 0;
        },
        sm: function(a, b, c) {
            var d = c,
                e = a.a;
            if (0 > b || 0 > c || b + c > a.length) throw 0;
            try {
                for (; 0 < d;) e[b] = this.W(), ++b, --d
            } catch (f) {
                if (!((f instanceof fc ? f.Ya : f) instanceof Af)) throw f;
            }
            return c - d
        },
        xx: function(a) {
            return this.Le = a
        },
        Iw: function(a, b, c) {
            for (; 0 < c;) {
                var d = this.sm(a, b, c);
                if (0 == d) throw 0;
                b += d;
                c -= d
            }
        },
        read: function(a) {
            for (var b = new ra(new ArrayBuffer(a)), c = 0; 0 < a;) {
                var d = this.sm(b, c, a);
                if (0 == d) throw 0;
                c += d;
                a -= d
            }
            return b
        },
        Jq: function(a) {
            for (var b = new Gd, c;;) {
                c = this.W();
                if (c == a) break;
                b.Qn(c)
            }
            return b.Kc().toString()
        },
        Hw: function() {
            var a = this.Oc(),
                b = this.Oc();
            return this.Le ? Ob.lp(b, a) : Ob.lp(a, b)
        },
        qb: function() {
            var a = this.W(),
                b = this.W();
            a = this.Le ? b | a << 8 : a | b << 8;
            return 0 != (a & 32768) ? a - 65536 : a
        },
        Cd: function() {
            var a = this.W(),
                b = this.W();
            return this.Le ? b | a << 8 : a | b << 8
        },
        Oc: function() {
            var a = this.W(),
                b = this.W(),
                c = this.W(),
                d = this.W();
            return this.Le ? d | c << 8 | b << 16 | a << 24 : a | b << 8 | c << 16 | d << 24
        },
        nj: function(a, b) {
            var c = new ra(new ArrayBuffer(a));
            this.Iw(c, 0, a);
            return c.Xk(0, a, b)
        },
        i: Id
    };
    Pb.__name__ = "98";
    Pb.B = Id;
    Pb.prototype = v(Id.prototype, {
        W: function() {
            if (0 == this.Ze) throw 0;
            this.Ze--;
            return this.a[this.ea++]
        },
        sm: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw 0;
            if (0 == this.Ze && 0 < c) throw 0;
            this.Ze < c && (c = this.Ze);
            var d = this.a;
            a = a.a;
            for (var e = 0, f = c; e < f;) {
                var g = e++;
                a[b + g] = d[this.ea + g]
            }
            this.ea += c;
            this.Ze -= c;
            return c
        },
        i: Pb
    });
    Hd.__name__ = "99";
    Hd.prototype = {
        Ha: function() {
            throw 0;
        },
        Bf: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw 0;
            a = a.a;
            for (var d =
                    c; 0 < d;) this.Ha(a[b]), ++b, --d;
            return c
        },
        By: function(a, b, c) {
            for (; 0 < c;) {
                var d = this.Bf(a, b, c);
                b += d;
                c -= d
            }
        },
        tn: function(a) {
            if (-32768 > a || 32768 <= a) throw 0;
            this.Cf(a & 65535)
        },
        Cf: function(a) {
            if (0 > a || 65536 <= a) throw 0;
            this.Le ? (this.Ha(a >> 8), this.Ha(a & 255)) : (this.Ha(a & 255), this.Ha(a >> 8))
        },
        Jg: function(a) {
            if (0 > a || 16777216 <= a) throw 0;
            this.Le ? (this.Ha(a >> 16), this.Ha(a >> 8 & 255), this.Ha(a & 255)) : (this.Ha(a & 255), this.Ha(a >> 8 & 255), this.Ha(a >> 16))
        },
        Hr: function(a) {
            this.Le ? (this.Ha(a >>> 24), this.Ha(a >> 16 & 255), this.Ha(a >> 8 & 255),
                this.Ha(a & 255)) : (this.Ha(a & 255), this.Ha(a >> 8 & 255), this.Ha(a >> 16 & 255), this.Ha(a >>> 24))
        },
        Ig: function(a, b) {
            a = ra.am(a, b);
            this.By(a, 0, a.length)
        },
        i: Hd
    };
    xb.__name__ = "9A";
    xb.B = Hd;
    xb.prototype = v(Hd.prototype, {
        Ha: function(a) {
            this.a.Qn(a)
        },
        Bf: function(a, b, c) {
            this.a.$s(a, b, c);
            return c
        },
        Kc: function() {
            return this.a.Kc()
        },
        i: xb
    });
    Af.__name__ = "9B";
    Af.prototype = {
        toString: function() {
            return "Eof"
        },
        i: Af
    };
    var Tb = xa.e3 = {
        Ub: !0,
        Kb: ["i0", "i1", "i2", "i3"]
    };
    Tb.i0 = {
        G: 0,
        N: "e3",
        toString: D
    };
    Tb.i1 = {
        G: 1,
        N: "e3",
        toString: D
    };
    Tb.i2 = {
        G: 2,
        N: "e3",
        toString: D
    };
    Tb.i3 = (Da = function(a) {
        var b = {
            G: 3,
            N: "e3",
            toString: D
        };
        b.e = a;
        return b
    }, Da.be = ["e"], Da);
    Tb.pc = [Tb.i0, Tb.i1, Tb.i2];
    Ob.__name__ = "9C";
    Ob.lp = function(a, b) {
        Ob.hl.setInt32(0, a, !0);
        Ob.hl.setInt32(4, b, !0);
        return Ob.hl.getFloat64(0, !0)
    };
    zf.__name__ = "9D";
    zf.prototype = {
        ia: function() {
            return this.keys.ia()
        },
        next: function() {
            var a = this.keys.next();
            return {
                value: this.map.get(a),
                key: a
            }
        },
        i: zf
    };
    var Ub = {
            __name__: "9E",
            resolve: function(a, b) {
                a = a.Dk(b).next();
                if (null == a) throw 0;
                if (a.nodeType != w.Document && a.nodeType !=
                    w.Element) throw 0;
                return a
            }
        },
        Ga = {
            __name__: "9F",
            resolve: function(a, b) {
                if (a.nodeType == w.Document) throw 0;
                a = a.get(b);
                if (null == a) throw 0;
                return a
            }
        },
        bg = {
            __name__: "A0",
            resolve: function(a, b) {
                return a.Dk(b).ia()
            }
        },
        Zf = {
            __name__: "A1",
            resolve: function(a, b) {
                var c = [];
                for (a = a.Dk(b); a.ia();) {
                    b = a.next();
                    if (b.nodeType != w.Document && b.nodeType != w.Element) throw 0;
                    c.push(b)
                }
                return c
            }
        };
    Cb.__name__ = "A3";
    Cb.parse = function(a, b) {
        null == b && (b = !1);
        var c = w.createDocument();
        Cb.wo(a, b, 0, c);
        return c
    };
    Cb.wo = function(a, b, c, d) {
        null ==
            c && (c = 0);
        for (var e = null, f = 1, g = 1, k = null, m = 0, l = 0, u = 0, r = a.charCodeAt(c), q = new Bb, n = 1, t = -1; r == r;) {
            switch (f) {
                case 0:
                    switch (r) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            break;
                        default:
                            f = g;
                            continue
                    }
                    break;
                case 1:
                    if (60 == r) f = 0, g = 2;
                    else {
                        m = c;
                        f = 13;
                        continue
                    }
                    break;
                case 2:
                    switch (r) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) {
                                c += 2;
                                if ("CDATA[" != y.substr(a, c, 6).toUpperCase()) throw 0;
                                c += 5;
                                f = 17
                            } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != y.substr(a, c + 2, 6).toUpperCase()) throw 0;
                                c += 8;
                                f = 16
                            } else {
                                if (45 != a.charCodeAt(c + 1) ||
                                    45 != a.charCodeAt(c + 2)) throw 0;
                                c += 2;
                                f = 15
                            }
                            m = c + 1;
                            break;
                        case 47:
                            if (null == d) throw 0;
                            m = c + 1;
                            f = 0;
                            g = 10;
                            break;
                        case 63:
                            f = 14;
                            m = c;
                            break;
                        default:
                            f = 3;
                            m = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= r && 122 >= r || 65 <= r && 90 >= r || 48 <= r && 57 >= r || 58 == r || 46 == r || 95 == r || 45 == r)) {
                        if (c == m) throw 0;
                        e = w.createElement(y.substr(a, m, c - m));
                        d.O(e);
                        ++l;
                        f = 0;
                        g = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (r) {
                        case 47:
                            f = 11;
                            break;
                        case 62:
                            f = 9;
                            break;
                        default:
                            f = 5;
                            m = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= r && 122 >= r || 65 <= r && 90 >= r || 48 <= r && 57 >= r || 58 == r || 46 == r || 95 == r || 45 == r)) {
                        if (m == c) throw 0;
                        k = y.substr(a, m, c - m);
                        if (e.Vb(k)) throw 0;
                        f = 0;
                        g = 6;
                        continue
                    }
                    break;
                case 6:
                    if (61 == r) f = 0, g = 7;
                    else throw 0;
                    break;
                case 7:
                    switch (r) {
                        case 34:
                        case 39:
                            q = new Bb;
                            f = 8;
                            m = c + 1;
                            t = r;
                            break;
                        default:
                            throw 0;
                    }
                    break;
                case 8:
                    switch (r) {
                        case 38:
                            n = c - m;
                            q.a += null == n ? y.substr(a, m, null) : y.substr(a, m, n);
                            f = 18;
                            n = 8;
                            m = c + 1;
                            break;
                        case 60:
                        case 62:
                            if (b) throw 0;
                            r == t && (g = c - m, q.a += null == g ? y.substr(a, m, null) : y.substr(a, m, g), g = q.a, q = new Bb, e.set(k, g), f = 0, g = 4);
                            break;
                        default:
                            r == t && (g = c - m, q.a += null == g ? y.substr(a, m, null) : y.substr(a, m, g), g = q.a, q = new Bb,
                                e.set(k, g), f = 0, g = 4)
                    }
                    break;
                case 9:
                    m = c = Cb.wo(a, b, c, e);
                    f = 1;
                    break;
                case 10:
                    if (!(97 <= r && 122 >= r || 65 <= r && 90 >= r || 48 <= r && 57 >= r || 58 == r || 46 == r || 95 == r || 45 == r)) {
                        if (m == c) throw 0;
                        g = y.substr(a, m, c - m);
                        if (null == d || 0 != d.nodeType) throw 0;
                        if (d.nodeType != w.Element) throw 0;
                        if (g != d.nodeName) throw 0;
                        f = 0;
                        g = 12;
                        continue
                    }
                    break;
                case 11:
                    if (62 == r) f = 1;
                    else throw 0;
                    break;
                case 12:
                    if (62 == r) return 0 == l && d.O(w.oi("")), c;
                    throw 0;
                case 13:
                    60 == r ? (g = c - m, q.a += null == g ? y.substr(a, m, null) : y.substr(a, m, g), g = w.oi(q.a), q = new Bb, d.O(g), ++l, f = 0, g = 2) :
                        38 == r && (n = c - m, q.a += null == n ? y.substr(a, m, null) : y.substr(a, m, n), f = 18, n = 13, m = c + 1);
                    break;
                case 14:
                    63 == r && 62 == a.charCodeAt(c + 1) && (++c, d.O(w.createProcessingInstruction(y.substr(a, m + 1, c - m - 2))), ++l, f = 1);
                    break;
                case 15:
                    45 == r && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (d.O(w.createComment(y.substr(a, m, c - m))), ++l, c += 2, f = 1);
                    break;
                case 16:
                    91 == r ? ++u : 93 == r ? --u : 62 == r && 0 == u && (d.O(w.Ot(y.substr(a, m, c - m))), ++l, f = 1);
                    break;
                case 17:
                    93 == r && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (d.O(w.Nt(y.substr(a, m, c - m))), ++l,
                        c += 2, f = 1);
                    break;
                case 18:
                    if (59 == r) {
                        m = y.substr(a, m, c - m);
                        if (35 == m.charCodeAt(0)) m = 120 == m.charCodeAt(1) ? C.parseInt("0" + y.substr(m, 1, m.length - 1)) : C.parseInt(y.substr(m, 1, m.length - 1)), q.a += String.fromCodePoint(m);
                        else if (r = Cb.Co, null != X[m] ? r.Ug(m) : r.C.hasOwnProperty(m)) r = Cb.Co, q.a += C.Sa(null != X[m] ? r.gc(m) : r.C[m]);
                        else {
                            if (b) throw 0;
                            q.a += C.Sa("&" + m + ";")
                        }
                        m = c + 1;
                        f = n
                    } else if (!(97 <= r && 122 >= r || 65 <= r && 90 >= r || 48 <= r && 57 >= r || 58 == r || 46 == r || 95 == r || 45 == r) && 35 != r) {
                        if (b) throw 0;
                        q.a += String.fromCodePoint(38);
                        r = c - m;
                        q.a +=
                            null == r ? y.substr(a, m, null) : y.substr(a, m, r);
                        --c;
                        m = c + 1;
                        f = n
                    }
            }
            r = a.charCodeAt(++c)
        }
        1 == f && (m = c, f = 13);
        if (13 == f) {
            if (0 == d.nodeType) throw 0;
            if (c != m || 0 == l) b = c - m, q.a += null == b ? y.substr(a, m, null) : y.substr(a, m, b), d.O(w.oi(q.a));
            return c
        }
        if (!b && 18 == f && 13 == n) return q.a += String.fromCodePoint(38), b = c - m, q.a += null == b ? y.substr(a, m, null) : y.substr(a, m, b), d.O(w.oi(q.a)), c;
        throw 0;
    };
    Gc.__name__ = "A4";
    Gc.print = function(a, b) {
        null == b && (b = !1);
        b = new Gc(b);
        b.un(a, "");
        return b.Y.a
    };
    Gc.prototype = {
        un: function(a, b) {
            switch (a.nodeType) {
                case 0:
                    this.Y.a +=
                        C.Sa(b + "<");
                    if (a.nodeType != w.Element) throw 0;
                    this.Y.a += C.Sa(a.nodeName);
                    for (var c = a.attributes(); c.ia();) {
                        var d = c.next();
                        this.Y.a += C.Sa(" " + d + '="');
                        d = Ma.kp(a.get(d), !0);
                        this.Y.a += C.Sa(d);
                        this.Y.a += '"'
                    }
                    if (this.ev(a)) {
                        this.Y.a += ">";
                        this.ye && (this.Y.a += "\n");
                        if (a.nodeType != w.Document && a.nodeType != w.Element) throw 0;
                        for (c = y.hb(a.children); c.ia();) this.un(c.next(), this.ye ? b + "\t" : b);
                        this.Y.a += C.Sa(b + "</");
                        if (a.nodeType != w.Element) throw 0;
                        this.Y.a += C.Sa(a.nodeName);
                        this.Y.a += ">"
                    } else this.Y.a += "/>";
                    this.ye &&
                        (this.Y.a += "\n");
                    break;
                case 1:
                    if (a.nodeType == w.Document || a.nodeType == w.Element) throw 0;
                    a = a.nodeValue;
                    0 != a.length && (b += Ma.kp(a), this.Y.a += C.Sa(b), this.ye && (this.Y.a += "\n"));
                    break;
                case 2:
                    this.Y.a += C.Sa(b + "<![CDATA[");
                    if (a.nodeType == w.Document || a.nodeType == w.Element) throw 0;
                    this.Y.a += C.Sa(a.nodeValue);
                    this.Y.a += "]]\x3e";
                    this.ye && (this.Y.a += "\n");
                    break;
                case 3:
                    if (a.nodeType == w.Document || a.nodeType == w.Element) throw 0;
                    a = a.nodeValue;
                    a = a.replace(/[\n\r\t]+/g, "");
                    this.Y.a += null == b ? "null" : "" + b;
                    this.Y.a += C.Sa(Ma.trim("\x3c!--" +
                        a + "--\x3e"));
                    this.ye && (this.Y.a += "\n");
                    break;
                case 4:
                    if (a.nodeType == w.Document || a.nodeType == w.Element) throw 0;
                    this.Y.a += C.Sa("<!DOCTYPE " + a.nodeValue + ">");
                    this.ye && (this.Y.a += "\n");
                    break;
                case 5:
                    if (a.nodeType == w.Document || a.nodeType == w.Element) throw 0;
                    this.Y.a += C.Sa("<?" + a.nodeValue + "?>");
                    this.ye && (this.Y.a += "\n");
                    break;
                case 6:
                    if (a.nodeType != w.Document && a.nodeType != w.Element) throw 0;
                    for (a = y.hb(a.children); a.ia();) this.un(a.next(), b)
            }
        },
        ev: function(a) {
            if (a.nodeType != w.Document && a.nodeType != w.Element) throw 0;
            for (a = y.hb(a.children); a.ia();) {
                var b = a.next();
                switch (b.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (b.nodeType == w.Document || b.nodeType == w.Element) throw 0;
                        if (0 != Ma.Gp(b.nodeValue).length) return !0
                }
            }
            return !1
        },
        i: Gc
    };
    fc.__name__ = "A5";
    fc.B = Error;
    fc.prototype = v(Error.prototype, {
        i: fc
    });
    E.__name__ = "A6";
    E.Xe = function(a) {
        if (null == a) return null;
        if (a instanceof Array) return Array;
        var b = a.i;
        if (null != b) return b;
        a = E.Nn(a);
        return null != a ? E.Xs(a) : null
    };
    E.Lg = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        "function" == c && (a.__name__ || a.Ub) && (c = "object");
        switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a.N) {
                    var d = xa[a.N];
                    c = d.Kb[a.G];
                    var e = d[c];
                    if (e.be) {
                        b += "\t";
                        d = [];
                        var f = 0;
                        for (e = e.be; f < e.length;) {
                            var g = e[f];
                            f += 1;
                            d.push(E.Lg(a[g], b))
                        }
                        return c + "(" + d.join(",") + ")"
                    }
                    return c
                }
                if (a instanceof Array) {
                    c = "[";
                    b += "\t";
                    d = 0;
                    for (f = a.length; d < f;) e = d++, c += (0 < e ? "," : "") + E.Lg(a[e], b);
                    return c + "]"
                }
                try {
                    d = a.toString
                } catch (k) {
                    return "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(),
                        "[object Object]" != c)) return c;
                c = "{\n";
                b += "\t";
                d = null != a.hasOwnProperty;
                f = null;
                for (f in a) d && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"), c += b + f + " : " + E.Lg(a[f], b));
                b = b.substring(1);
                return c + ("\n" + b + "}");
            case "string":
                return a;
            default:
                return String(a)
        }
    };
    E.ck = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        if (Object.prototype.hasOwnProperty.call(a, "__interfaces__"))
            for (var c = a.__interfaces__, d = 0, e = c.length; d <
                e;) {
                var f = c[d++];
                if (f == b || E.ck(f, b)) return !0
            }
        return E.ck(a.B, b)
    };
    E.Kg = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Array:
                return a instanceof Array;
            case cg:
                return "boolean" == typeof a;
            case dg:
                return null != a;
            case eg:
                return "number" == typeof a;
            case fg:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (E.Vs(a, b)) return !0
                    } else {
                        if ("object" == typeof b && E.Ws(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == $f && null != a.__name__ || b == gg &&
                    null != a.Ub ? !0 : null != a.N ? xa[a.N] == b : !1
        }
    };
    E.Vs = function(a, b) {
        return a instanceof b ? !0 : b.__isInterface__ ? E.ck(E.Xe(a), b) : !1
    };
    E.tb = function(a, b) {
        if (null == a || E.Kg(a, b)) return a;
        throw 0;
    };
    E.Nn = function(a) {
        a = E.Ys.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    E.Ws = function(a) {
        return null != E.Nn(a)
    };
    E.Xs = function(a) {
        return Re[a]
    };
    Tf.__name__ = "A7";
    Tf.Gu = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            if (0 == a.length) {
                var b = "_hx_" + Math.random();
                a.setItem(b, b);
                a.removeItem(b)
            }
            return a
        } catch (c) {
            return null
        }
    };
    yf.__name__ = "A8";
    yf.prototype = {
        i: yf
    };
    Nb.__name__ = "A9";
    Nb.prototype = {
        load: function(a) {
            if (this.wl(a) || this.Ii(a) || this.Gi(a)) return !1;
            a = new Ed(a, this);
            a.ga = this.Vp--;
            if (this.Yf.length == this.bw) return this.Xa.enqueue(a), !0;
            this.Yf.push(a);
            a.load();
            return !0
        },
        stop: function() {
            this.Xa.clear()
        },
        Dq: function(a) {
            if (!this.wl(a) || this.Ii(a) || this.Gi(a)) return !1;
            var b = aa.find(this.Xa, function(b) {
                return -1 < b.yf.url.indexOf(a)
            });
            if (null == b) return !1;
            this.Xa.Uw(b, ++this.Sp);
            return !0
        },
        wl: function(a) {
            function b(b) {
                return -1 <
                    b.yf.url.indexOf(a)
            }
            return null == this.Xa ? !1 : 0 < aa.count(this.Xa, b) + aa.count(this.Yf, b)
        },
        kw: function(a) {
            this.gg(new yf(a.yf.url, a.yf.data, a.yf.pe));
            null != a.te && (a.te(a), a.te = null);
            y.remove(this.Yf, a);
            0 < this.Xa.g ? (a = this.Xa.Vt(), this.Yf.push(a), a.load()) : 0 == this.Yf.length && (this.Vp = this.Sp = 0, null != this.bd && this.bd())
        },
        jw: function() {
            this.stop()
        },
        Ii: function(a) {
            return n.fl(n.ie(a))
        },
        Gi: function(a) {
            return n.Gi(n.ie(a))
        },
        i: Nb
    };
    Fd.__name__ = "AA";
    Fd.__isInterface__ = !0;
    Fd.prototype = {
        i: Fd
    };
    Ed.__name__ = "AB";
    Ed.__interfaces__ =
        [Fd];
    Ed.prototype = {
        load: function() {
            var a = this;
            this.yf.load(function() {
                Nb.eo += 0;
                a.le.kw(a);
                a.A()
            }, function() {
                a.le.jw();
                a.A()
            })
        },
        A: function() {
            this.le = null;
            this.yf.A()
        },
        i: Ed
    };
    n.__name__ = "AC";
    n.hx = function(a) {
        n.gk = a
    };
    n.Yk = function() {
        return n.nr
    };
    n.vx = function() {
        n.nr = "hd"
    };
    n.Xo = function() {
        return n.language
    };
    n.Lm = function(a) {
        if (null != a && !(new L("^[a-z]{2}$", "")).match(a)) throw 0;
        n.language = a;
        aa.Vb(["fr", "en", "de"], function(a) {
            return a == n.language
        }) || (n.language = "en")
    };
    n.Ve = function() {
        return n.Xn
    };
    n.gx =
        function(a) {
            if (!(new L("^[a-z3]{3}$", "")).match(a)) throw 0;
            n.Xn = a
        };
    n.Vu = function() {
        return n.Zx.slice()
    };
    n.Au = function() {
        return n.pv.slice()
    };
    n.je = function(a) {
        if (n.uh.C.hasOwnProperty(a)) return n.uh.C[a];
        if (65535 <= a) {
            var b = n.Fh;
            var c = null == a ? "null" : "" + a;
            b = null != X[c] ? b.Ug(c) : b.C.hasOwnProperty(c)
        } else b = !1;
        if (b) return b = n.Fh, c = null == a ? "null" : "" + a, b = null != X[c] ? b.gc(c) : b.C[c], n.uh.C[a] = b;
        b = n.Df[a];
        c = new L("{(?:language|audio|quality)}", "");
        c.match(b) && (c = new L("{language}", ""), c.match(b) && (b = b.replace(c.r,
            C.Sa(n.language))), c = new L("{audio}", "g"), c.match(b) && (b = b.replace(c.r, n.Xn)), c = new L("{quality}", "g"), c.match(b) && (b = b.replace(c.r, C.Sa(n.nr).toLowerCase())));
        n.uh.C[a] = "" + n.gk + "/" + b;
        return n.uh.C[a]
    };
    n.Mu = function(a) {
        null == a && (a = n.zu());
        for (var b = [], c = 0; c < a.length;) b.push(n.je(a[c++]));
        return b
    };
    n.zu = function() {
        for (var a = [], b = 0; 28 > b;) a.push(b++);
        return a
    };
    n.Ou = function() {
        for (var a = [], b = 0, c = n.Aw; b < c.length;) {
            var d = c[b];
            ++b;
            n.Zm(d) && a.push(d)
        }
        return a
    };
    n.Qu = function() {
        for (var a = [], b = 0, c = n.Vw; b < c.length;) {
            var d =
                c[b];
            ++b;
            n.Zm(d) && a.push(d)
        }
        return a
    };
    n.ie = function(a) {
        function b(b, c) {
            b.match(a) && (a = b.replace(a, c))
        }
        var c = n.Fh;
        if (null != X[a] ? c.Ug(a) : c.C.hasOwnProperty(a)) return c = n.Fh, C.parseInt(null != X[a] ? c.gc(a) : c.C[a]);
        b(new L("^(" + n.gk + "/)(.*)", ""), "$2");
        c = ["fr", "en", "de"];
        0 < c.length && b(new L("([/_])(" + c.join("|") + ")(/|(\\.\\S{3,4}$))", ""), "$1{language}$3");
        b(new L("([/_])(sd|hd)(/|(\\.\\S{3,4}$))", ""), "$1{quality}$3");
        c = ["ogg", "mp3", "aac"];
        0 < c.length && (b(new L("(.*?)\\.(" + c.join("|") + ")$", ""), "$1.{audio}"),
            b(new L("((" + c.join("|") + ")\\/)", ""), "{audio}/"));
        return n.Df.indexOf(a)
    };
    n.My = function() {
        return 0
    };
    n.Zm = function(a) {
        if (n.rl(a)) {
            var b = n.Ve();
            return null != b && aa.Vb(["ogg", "mp3", "aac"], function(a) {
                return a == b
            })
        }
        return !0
    };
    n.getData = function(a) {
        return n.Qi.C[a]
    };
    n.setData = function(a, b, c) {
        var d = n.Qi.C.hasOwnProperty(a);
        if (!d)
            if (n.ti.C.hasOwnProperty(a)) n.locked.C[a] = !0, d = n.ti.C[a], n.ti.remove(a), d(a, b, function(b) {
                n.locked.remove(a);
                n.setData(a, b, c)
            });
            else if (null != c && (n.pe.C[a] = c), n.Qi.C[a] = b, !d)
            for (b =
                n.fo, d = b.length; - 1 < --d;)
                if (b[d].id == a) {
                    var e = b[d];
                    b[d] = b[b.length - 1];
                    b.pop();
                    e.fu()
                }
    };
    n.fl = function(a) {
        return null != n.Qi.C[a]
    };
    n.Iu = function(a) {
        return n.pe.C[a]
    };
    n.rl = function(a) {
        if (65535 <= a) {
            var b = n.Fh;
            a = null == a ? "null" : "" + a;
            return (new L("(ogg|aac|mp3)$", "")).match(null != X[a] ? b.gc(a) : b.C[a])
        }
        return (new L("{audio}", "")).match(n.Df[a])
    };
    n.Qd = function(a) {
        return (new L("music_", "")).match(n.Df[a])
    };
    n.Gv = function(a) {
        return (new L("sounds\\.", "g")).match(n.Df[a])
    };
    n.Gi = function(a) {
        return n.locked.C.hasOwnProperty(a)
    };
    n.iv = function(a) {
        return 65535 <= a ? !1 : (new L("{quality}", "")).match(n.Df[a])
    };
    n.dj = function(a, b) {
        null != n.je(a) && (n.fl(a) ? b(a) : n.fo.push(new xf(a, b)))
    };
    n.Nw = function(a, b) {
        n.ti.C[a] = b
    };
    n.wt = function(a) {
        if (a instanceof ArrayBuffer) {
            if ("TextDecoder" in window) return a = new DataView(a), (new TextDecoder("utf-8")).decode(a);
            a = ra.aj(a);
            return a.Xk(0, a.length)
        }
        return C.Sa(a)
    };
    n.Ly = function() {
        return ["fr", "en", "de"]
    };
    n.Ky = function() {
        return ["ogg", "mp3", "aac"]
    };
    n.Fy = function() {
        return [13, 12, 11, 10, 9, 8, 7, 6, 5]
    };
    n.Dy =
        function() {
            return [23, 25, 24, 21, 22, 20, 19, 18, 17, 16, 15, 14]
        };
    n.Ey = function() {
        return [23, 25, 24]
    };
    xf.__name__ = "AD";
    xf.prototype = {
        fu: function() {
            this.Mo(this.id);
            this.Mo = null
        },
        i: xf
    };
    db.__name__ = "AE";
    db.Ob = function() {};
    db.prototype = {
        A: function() {
            this.bb = this.qh = this.te = this.data = null
        },
        load: function(a, b) {
            function c(a) {
                return 0 < a.length ? (new L("(?:" + a.join("|") + ")", "i")).match(e) : !1
            }
            var d = this;
            this.te = a;
            this.qh = b;
            db.Ob(this, 0);
            var e = "";
            a = this.url;
            b = db.state;
            null != X[a] ? b.Dc(a, 1) : b.C[a] = 1;
            a = new L("\\.(\\w+)$", "g");
            a.match(this.url) && (e = a.Ka(1));
            c(["ogg", "mp3", "aac"]) ? this.wn(this.url, "arraybuffer", function(a) {
                d.bd(a)
            }) : c(n.Au()) ? (this.bb = window.document.createElement("img"), this.bb.addEventListener("load", B(this, this.iq)), this.wn(this.url, "blob", function(a) {
                var b = new FileReader;
                b.onload = function(c) {
                    (new L("\\.png$", "")).match(d.url) ? d.pe = d.Nu(c.target.result) : (new L("\\.jpg$", "")).match(d.url) && (d.pe = d.Cu(c.target.result));
                    d.bb.src = URL.createObjectURL(a);
                    b.onload = null
                };
                b.readAsArrayBuffer(a)
            })) : (a = "arraybuffer",
                c(n.Vu()) && (a = "text"), this.wn(this.url, a, function(a) {
                    d.bd(a)
                }))
        },
        bd: function(a) {
            this.data = a;
            a = this.url;
            var b = db.state;
            null != X[a] ? b.Dc(a, 2) : b.C[a] = 2;
            db.Ob(this, 1);
            this.te();
            this.te = null
        },
        iq: function() {
            this.bb.removeEventListener("load", B(this, this.iq));
            var a = window.document.createElement("canvas");
            a.width = this.bb.width;
            a.height = this.bb.height;
            a.getContext("2d", null).drawImage(this.bb, 0, 0);
            this.bd(a);
            this.bb = null
        },
        wn: function(a, b, c) {
            var d = this,
                e = new XMLHttpRequest;
            e.onerror = function() {
                null != d.qh && d.qh();
                e.onerror = e.onload = e.onprogress = null
            };
            e.onload = function() {
                d.ta = 1;
                if (404 == e.status) null != d.qh && d.qh();
                else {
                    var a = e.response;
                    e.onerror = e.onload = e.onprogress = null;
                    c(a)
                }
            };
            e.onprogress = function(a) {
                0 < a.total && (d.ta = a.loaded / a.total)
            };
            try {
                e.open("GET", null != this.Xj ? "" + a + "?" + this.Xj : a, !0), e.responseType = b, e.send()
            } catch (f) {}
            return e
        },
        Nu: function(a) {
            a = new Pb(ra.aj(a));
            a.xx(!0);
            if (137 != a.W() || 80 != a.W() || 78 != a.W() || 71 != a.W() || 13 != a.W() || 10 != a.W() || 26 != a.W() || 10 != a.W()) return null;
            a: for (;;) {
                var b = a.Oc(),
                    c = a.nj(4);
                b = a.read(b);
                a.Oc();
                switch (c) {
                    case "IEND":
                        break a;
                    case "tEXt":
                        c = new Pb(b);
                        b = c.cn;
                        var d = "",
                            e = c.W();
                        for (--b; 0 != e;) d += String.fromCodePoint(e), e = c.W(), --b;
                        if ("Comment" != d) c = null;
                        else {
                            for (d = ""; 0 < b;) e = c.W(), d += String.fromCodePoint(e), --b;
                            c = d
                        }
                        if (null != c) return c
                }
            }
            return null
        },
        Cu: function(a) {
            a = new DataView(a);
            if (255 != a.getUint8(0) || 216 != a.getUint8(1)) return null;
            for (var b = 2, c = a.byteLength; b < c && 255 == a.getUint8(b);) {
                if (254 == a.getUint8(b + 1)) {
                    var d = b + 4;
                    c = "";
                    var e = d;
                    for (b = d + (a.getUint16(b + 2) - 2); e < b;) d = a.getUint8(e),
                        c += String.fromCodePoint(d), ++e;
                    return c
                }
                b += 2 + a.getUint16(b + 2)
            }
            return null
        },
        i: db
    };
    pa.__name__ = "AF";
    pa.sl = function() {
        return A.isSupported()
    };
    pa.Ve = function() {
        return A.Ve()
    };
    pa.Jc = function() {
        return va.cb()
    };
    ec.__name__ = "B0";
    ec.prototype = {
        i: ec
    };
    va.__name__ = "B1";
    va.cb = function() {
        return null != va.Mg ? va.Mg : va.Mg = pa.sl() ? A.up() ? new Fc : new Dd : new va
    };
    va.prototype = {
        ng: function() {},
        Ch: function() {},
        play: function() {
            return -1
        },
        stop: function(a, b) {
            null == b && (b = 0);
            if (0 > a) return !1;
            if (1E4 > a) {
                for (var c = !1, d = 0, e = aa.filter(this.cc,
                        function(b) {
                            return b.od.id == a
                        }); d < e.length;) c = !0, e[d++].stop(b);
                return c
            }
            c = aa.find(this.cc, function(b) {
                return b.id == a
            });
            return null != c ? (c.stop(b), !0) : !1
        },
        Qh: function() {
            for (var a = 0, b = this.cc.Rj(); a < b.length;) b[a++].stop()
        },
        xl: function(a) {
            return 0 > a ? !1 : 1E4 > a ? aa.Vb(this.cc, function(b) {
                return b.od.id == a
            }) : aa.Vb(this.cc, function(b) {
                return b.id == a
            })
        },
        ie: function(a) {
            var b = aa.find(this.cc, function(b) {
                return b.od.id == a
            });
            return null != b ? b.id : -1
        },
        Uu: function(a) {
            return 1E4 > a ? aa.find(this.cc, function(b) {
                return b.od.id ==
                    a
            }) : aa.find(this.cc, function(b) {
                return b.id == a
            })
        },
        Kv: function(a) {
            return null != this.Fc[a]
        },
        rg: function(a) {
            this.Jl = 0 > a ? 0 : 1 < a ? 1 : a;
            this.vy();
            this.yr()
        },
        Mm: function(a) {
            this.Il = 0 > a ? 0 : 1 < a ? 1 : a;
            this.yr()
        },
        Hk: function(a, b, c, d) {
            null == d && (d = !0);
            var e = this,
                f = null;
            if (null != c || d) f = function() {
                d && e.stop(a);
                null != c && c()
            };
            this.lg(a, b, 0, U.Nc(2), f)
        },
        lg: function(a, b, c, d, e) {
            pa.sl();
            a = this.Uu(a);
            if (null != a) {
                var f = a.volume - c;
                (0 < f ? .01 > f : .01 > -f) || (null == d && (d = U.Fp()), null == e && (e = function() {}), a.Pu().Eh(c, b, d, e))
            }
        },
        Mq: function(a,
            b, c) {
            if (!this.enabled || !this.Kv(a)) return -1;
            if (b && this.xl(a)) return this.ie(a);
            b && (c = !0);
            if (!c && this.ay(a)) return -1;
            a = this.Ku(this.Fc[a].Qd, c);
            return 0 > a ? -1 : a
        },
        qq: function(a) {
            this.cc.add(a);
            this.cc.g > this.Op && (this.Op = this.cc.g)
        },
        pq: function(a) {
            this.de &= ~(1 << a.channel);
            this.cc.remove(a)
        },
        ay: function(a) {
            a = this.Fc[a];
            if (a.Qd) return !1;
            var b = x.time;
            if (b - a.Cp < this.Nj) return !0;
            a.Cp = b;
            return !1
        },
        Ku: function(a, b) {
            if (a) {
                for (b = 0; b < this.Rp;) {
                    if (0 == (this.de & 1 << b)) return this.de |= 1 << b, b;
                    ++b
                }
                return -1
            }
            a = -1;
            for (var c =
                    this.Rp, d = c + this.aw; c < d;) {
                if (0 == (this.de & 1 << c)) {
                    this.de |= 1 << c;
                    a = c;
                    break
                }++c
            }
            if (b && 0 > a) {
                b = null;
                a = 0;
                for (c = this.cc.iterator(); c.ia();) d = c.next(), !d.od.Qd && !d.loop && d.ep() > a && (a = d.ep(), b = d);
                if (null == b) return -1;
                a = b.channel;
                b.stop()
            }
            return a
        },
        vy: function() {
            var a = this.cc,
                b = a.c,
                c = 0;
            for (a = a.g; c < a;) {
                var d = b[c++];
                d.od.Qd && d.Eg()
            }
        },
        yr: function() {
            var a = this.cc,
                b = a.c,
                c = 0;
            for (a = a.g; c < a;) {
                var d = b[c++];
                d.od.Qd || d.Eg()
            }
        },
        i: va
    };
    wf.__name__ = "B2";
    wf.prototype = {
        Eh: function(a, b, c, d) {
            this.Er = this.Rb.volume;
            this.Fr = a;
            a = this.Fr -
                this.Er;
            this.duration = (0 > a ? -a : a) / b;
            this.Tg = c;
            this.bd = d;
            this.elapsedTime = 0;
            x.ld.detach(B(this, this.update));
            x.ld.ua(B(this, this.update))
        },
        o: function() {
            x.ld.detach(B(this, this.update));
            this.Rb = null
        },
        update: function(a) {
            this.elapsedTime += a;
            a = Math.min(this.elapsedTime / this.duration, 1);
            var b = Va.map(this.Tg(a), 0, 1, this.Er, this.Fr);
            this.Rb.wx(b);
            1 != a && this.Rb.jg || (x.ld.detach(), this.bd())
        },
        i: wf
    };
    tb.__name__ = "B3";
    tb.prototype = {
        A: function() {
            this.bd = this.jf = this.od = null;
            null != this.lg && this.lg.o()
        },
        stop: function() {},
        wx: function(a) {
            this.volume = a;
            this.Eg()
        },
        ep: function() {
            return this.Vk() / this.Nd()
        },
        Vk: function() {
            return NaN
        },
        Nd: function() {
            return NaN
        },
        Eg: function() {},
        Pu: function() {
            null == this.lg && (this.lg = new wf(this));
            return this.lg
        },
        i: tb
    };
    A.__name__ = "B4";
    A.sp = function() {
        return !!window.MSInputMethodContext && !!document.documentMode
    };
    A.Fv = function() {
        return A.active
    };
    A.up = function() {
        return A.Bl
    };
    A.yl = function() {
        return null != A.Af && A.Af ? "suspended" == A.context.state : !1
    };
    A.resume = function(a) {
        try {
            if ("running" != A.context.state) {
                A.context.resume().then(function() {
                    A.active = !0;
                    a()
                });
                return
            }
        } catch (b) {}
        A.active = !0;
        a()
    };
    A.isSupported = function() {
        if (null != A.Af) return A.Bl ? !0 : A.Af;
        if (A.sp()) return A.Af = !1, A.Bl = !0;
        A.Af = !1;
        try {
            A.context = function() {
                try {
                    if ("undefined" !== typeof AudioContext) return new AudioContext;
                    if ("undefined" !== typeof webkitAudioContext) return new webkitAudioContext
                } catch (a) {}
                return null
            }(), A.Af = null != A.context, A.context.onstatechange = function() {
                A.active = !A.yl()
            }, A.active = !A.yl()
        } catch (a) {}
        return A.Af
    };
    A.Ve = function() {
        var a = A.fi;
        if ("undefined" !== typeof a) return a;
        if (A.sp()) return "aac";
        if (-1 != window.navigator.userAgent.indexOf("EdgA/")) return A.fi = "ogg";
        var b = null;
        try {
            b = "undefined" !== typeof Audio ? new Audio : null
        } catch (k) {
            return null
        }
        if (!b || "function" !== typeof b.canPlayType) return null;
        var c = {
                probably: 2,
                maybe: 1,
                "": 0
            },
            d = null;
        d = function(a) {
            if (a instanceof Array) {
                for (var e = 0, f = 0; f < a.length;) {
                    var g = a[f];
                    ++f;
                    g = d(g);
                    g > e && (e = g)
                }
                return e
            }
            a = b.canPlayType(a).replace(/^no$/, "");
            return la.Za(c, a)
        };
        a = {};
        a.mp3 = d("audio/mp3;");
        a.ogg = d('audio/ogg; codecs="vorbis"');
        a.aac = d("audio/aac;"); -
        1 < window.navigator.userAgent.indexOf("OPR") && (a.aac = 0);
        for (var e = 0, f = ["aac", "ogg", "mp3"]; e < f.length;) {
            var g = f[e];
            ++e;
            if (0 < la.Za(a, g)) return A.fi = g
        }
        return A.fi = null
    };
    A.getContext = function() {
        A.isSupported();
        return A.context
    };
    Sf.__name__ = "B5";
    Sf.ju = function(a, b) {
        var c = A.getContext(),
            d = a.sampleRate,
            e = [],
            f = 0,
            g = b.length;
        if (1 == a.numberOfChannels)
            for (var k = a.getChannelData(0); f < g;) {
                var m = d / 1E3 * b[f++] | 0,
                    l = d / 1E3 * b[f++] | 0;
                a = c.createBuffer(1, l - m, d);
                m = k.subarray(m, l);
                try {
                    a.copyToChannel(m, 0)
                } catch (q) {
                    a.getChannelData(0).set(m)
                }
                e.push(a)
            } else
                for (k =
                    a.getChannelData(0), a = a.getChannelData(1); f < g;) {
                    var u = d / 1E3 * b[f++] | 0,
                        r = d / 1E3 * b[f++] | 0;
                    m = c.createBuffer(2, r - u, d);
                    l = k.subarray(u, r);
                    u = a.subarray(u, r);
                    try {
                        m.copyToChannel(l, 0), m.copyToChannel(u, 1)
                    } catch (q) {
                        m.getChannelData(0).set(l), m.getChannelData(1).set(u)
                    }
                    e.push(m)
                }
        return e
    };
    Fc.__name__ = "B6";
    Fc.B = va;
    Fc.prototype = v(va.prototype, {
        ng: function(a, b, c, d) {
            null == c && (c = !1);
            var e = this;
            va.prototype.ng.call(this, a, b, c, d);
            var f = !1,
                g = new Audio,
                k = null;
            k = function() {
                g.removeEventListener("canplaythrough", k);
                f = !0
            };
            g.addEventListener("canplaythrough", k, !1);
            g.src = b;
            g.Cq = "auto";
            x.ua(function() {
                f && 4 == g.readyState && (e.Fc[a] = new ec(a, g, c), d(g), x.detach())
            })
        },
        Ch: function(a, b, c) {
            var d = this;
            va.prototype.Ch.call(this, a, b, c);
            this.$d = a;
            this.ng(1E3, b, !1, function(b) {
                for (var e = 0, g = a.length; e < g;) {
                    var k = e++;
                    d.Fc[k + 1E3] = new ec(k + 1E3, b, !1)
                }
                c(b)
            })
        },
        play: function(a, b, c, d, e) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            c = this.Mq(a, b, c);
            if (0 > c) return -1;
            a = 1E3 <= a ? new Ec(this, this.Fc[1E3], a - 1E3) : new Ec(this, this.Fc[a], null, b);
            a.id =
                this.Xp++;
            a.channel = c;
            a.loop = b;
            a.offset = d;
            a.bd = e;
            this.qq(a);
            return a.id
        },
        i: Fc
    });
    Ec.__name__ = "B7";
    Ec.B = tb;
    Ec.prototype = v(tb.prototype, {
        Vk: function() {
            return (this.node.currentTime - this.min) % this.Nd()
        },
        Nd: function() {
            return this.max - this.min
        },
        stop: function() {
            this.jg && (this.node.pause(), this.node.removeEventListener("timeupdate", B(this, this.rq)), this.node.removeEventListener("loadedmetadata", B(this, this.gm)), this.node = this.node.onended = null, this.jf.pq(this), this.jg = !1)
        },
        rq: function() {
            this.node.currentTime >
                this.max && this.stop()
        },
        gm: function() {
            this.node.currentTime = this.min;
            this.node.removeEventListener("loadedmetadata", B(this, this.gm))
        },
        Eg: function() {
            this.node.volume = (this.od.Qd ? this.jf.Yv : this.jf.Il) * this.jf.Jl * this.volume
        },
        i: Ec
    });
    Dd.__name__ = "B8";
    Dd.B = va;
    Dd.prototype = v(va.prototype, {
        ng: function(a, b, c, d) {
            null == c && (c = !1);
            var e = this;
            va.prototype.ng.call(this, a, b, c, d);
            this.decode(b, function(b) {
                null == b ? d(null) : (e.Fc[a] = new ec(a, b, c), d(b))
            })
        },
        Ch: function(a, b, c) {
            var d = this;
            va.prototype.Ch.call(this, a, b,
                c);
            this.decode(b, function(b) {
                if (null == b) c(null);
                else try {
                    for (var e = Sf.ju(b, a), g = 0, k = a.length; g < k;) {
                        var m = g++;
                        d.Fc[m + 1E3] = new ec(m + 1E3, e[m], !1)
                    }
                    c(b)
                } catch (ic) {}
            })
        },
        play: function(a, b, c, d, e) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            if (!A.Fv()) return -1;
            c = this.Mq(a, b, c);
            if (0 > c) return -1;
            a = new Mb(this, this.Fc[a]);
            a.id = this.Xp++;
            a.channel = c;
            a.loop = b;
            a.offset = d;
            a.bd = e;
            a.play();
            this.qq(a);
            return a.id
        },
        rg: function(a) {
            this.Jl = 0 > a ? 0 : 1 < a ? 1 : a;
            this.Uk().Km(a)
        },
        Mm: function(a) {
            this.Il = 0 > a ? 0 : 1 < a ? 1 : a;
            this.$o().Km(a)
        },
        decode: function(a, b) {
            (new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(2, 1323E4, 44100)).decodeAudioData(a, function(a) {
                b(a)
            }, function() {
                b(null)
            })
        },
        Uk: function() {
            null == this.Vi && (this.Vi = new Lb, this.Vi.type = 5, this.Vi.connect(new Cd));
            return this.Vi
        },
        $o: function() {
            null == this.Xi && (this.Xi = new Lb, this.Xi.type = 3, this.Xi.connect(this.Uk()));
            return this.Xi
        },
        Hu: function() {
            null == this.Wi && (this.Wi = new Lb, this.Wi.type = 4, this.Wi.connect(this.Uk()));
            return this.Wi
        },
        i: Dd
    });
    Mb.__name__ = "B9";
    Mb.B =
        tb;
    Mb.prototype = v(tb.prototype, {
        A: function() {
            tb.prototype.A.call(this);
            for (var a = this.Sc; null != a;) {
                var b = a.Y;
                if (2 < a.type) break;
                y.remove(a.Y.inputs, a);
                a.n.disconnect();
                a.A();
                a = b
            }
            this.Sc = this.data = null
        },
        play: function() {
            if (0 < this.offset && this.offset > this.data.length - 50) this.onended();
            else {
                this.startTime = A.getContext().currentTime;
                if (null == this.Sc) {
                    this.Sc = new Bd;
                    var a = this.jf;
                    this.Sc.connect(this.od.Qd ? a.Hu() : a.$o())
                }
                this.jg = !0;
                this.Sc.play(this.data, this.loop, this.offset, B(this, this.onended))
            }
        },
        stop: function(a) {
            null ==
                a && (a = 0);
            if (this.jg && null != this.Sc) try {
                this.Sc.stop(this.startTime + a)
            } catch (b) {
                this.onended()
            }
        },
        Vk: function() {
            return (A.getContext().currentTime - this.startTime) % this.Nd()
        },
        Nd: function() {
            return this.data.duration
        },
        Eg: function() {
            if (Mb.No && null != this.Sc) try {
                var a = this.Sc.get(2);
                if (null == a) {
                    a = new Lb;
                    var b = this.Sc.get(1);
                    null == b ? this.Sc.append(a) : b.append(a)
                }
                a.Km(this.volume)
            } catch (c) {
                Mb.No = !1
            }
        },
        onended: function() {
            this.jg = !1;
            var a = this.bd;
            this.jf.pq(this);
            this.A();
            null != a && a()
        },
        i: Mb
    });
    Ja.__name__ = "BA";
    Ja.prototype = {
        get: function(a) {
            for (var b = this; null != b;) {
                if (b.type == a) return b;
                b = b.Y
            }
            return null
        },
        A: function() {
            this.n = this.Y = this.inputs = null
        },
        connect: function(a) {
            this.Y = a;
            a.inputs.push(this);
            this.n.disconnect();
            this.n.connect(a.n)
        },
        append: function(a) {
            y.remove(this.Y.inputs, this);
            a.connect(this.Y);
            this.connect(a)
        },
        i: Ja
    };
    Cd.__name__ = "BB";
    Cd.B = Ja;
    Cd.prototype = v(Ja.prototype, {
        i: Cd
    });
    Bd.__name__ = "BC";
    Bd.B = Ja;
    Bd.prototype = v(Ja.prototype, {
        A: function() {
            this.n.onended = null;
            Ja.prototype.A.call(this)
        },
        play: function(a,
            b, c, d) {
            var e = this.n;
            e.buffer = a;
            e.loop = b;
            e.start(0, c);
            e.onended = d
        },
        stop: function(a) {
            null == a && (a = 0);
            this.n.stop(a)
        },
        i: Bd
    });
    Lb.__name__ = "BD";
    Lb.B = Ja;
    Lb.prototype = v(Ja.prototype, {
        Km: function(a) {
            this.n.gain.value = a
        },
        i: Lb
    });
    vf.__name__ = "BE";
    vf.B = Ja;
    vf.prototype = v(Ja.prototype, {
        i: vf
    });
    dc.__name__ = "BF";
    dc.__isInterface__ = !0;
    ab.__name__ = "C0";
    ab.__isInterface__ = !0;
    ab.__interfaces__ = [dc];
    ab.prototype = {
        i: ab
    };
    jb.__name__ = "C1";
    jb.__interfaces__ = [ab];
    jb.prototype = {
        Kt: function(a, b, c, d) {
            null == d && (d = !1);
            var e = 0,
                f =
                0 < a,
                g = a < this.F - 1,
                k = b < this.Ba - 1,
                m = this.c,
                l = this.F,
                u = b * l + a;
            f && c(m[u - 1]) && (e = 1);
            g && c(m[u + 1]) && ++e;
            0 < b && (u = (b - 1) * l + a, c(m[u]) && ++e, d || (f && c(m[u - 1]) && ++e, g && c(m[u + 1]) && ++e));
            k && (u = (b + 1) * l + a, c(m[u]) && ++e, d || (f && c(m[u - 1]) && ++e, g && c(m[u + 1]) && ++e));
            return e
        },
        Im: function(a) {
            for (var b = this.c, c = 0, d = this.F * this.Ba; c < d;) b[c++] = a;
            return this
        },
        forEach: function(a) {
            for (var b = this.c, c = this.F, d = 0, e = this.F * this.Ba; d < e;) {
                var f = d++;
                b[f] = a(b[f], f % c, f / c | 0)
            }
            return this
        },
        hb: function(a) {
            for (var b = this.c, c = 0, d = this.F * this.Ba; c <
                d;) a(b[c++]);
            return this
        },
        A: function() {
            O.gf(this.c);
            this.c = null;
            null != this.La && (this.La.A(), this.La = null)
        },
        iterator: function() {
            if (this.Cc) {
                if (null == this.La) this.La = new Dc(this);
                else {
                    var a = this.La;
                    a.c = a.eb.c;
                    var b = a.eb;
                    a.Fb = b.F * b.Ba;
                    a.Wa = 0
                }
                return this.La
            }
            return new Dc(this)
        },
        i: jb
    };
    cc.__name__ = "C2";
    cc.__isInterface__ = !0;
    cc.prototype = {
        i: cc
    };
    Dc.__name__ = "C3";
    Dc.__interfaces__ = [cc];
    Dc.prototype = {
        A: function() {
            this.c = this.eb = null
        },
        ia: function() {
            return this.Wa < this.Fb
        },
        next: function() {
            return this.c[this.Wa++]
        },
        i: Dc
    };
    Ad.__name__ = "C4";
    Ad.__isInterface__ = !0;
    Ad.__interfaces__ = [ab];
    W.__name__ = "C5";
    W.__interfaces__ = [Ad];
    W.prototype = {
        add: function(a) {
            this.g == this.u && this.R();
            this.c[this.g++] = a
        },
        Dw: function(a) {
            if (0 == this.g) return this.c[0] = a, ++this.g;
            this.g == this.u && this.R();
            for (var b = this.c, c = this.g; 0 < c;) b[c] = b[c - 1], --c;
            b[0] = a;
            return ++this.g
        },
        Kq: function(a) {
            for (var b = this.c, c = b[a], d = --this.g; a < d;) b[a++] = b[a];
            return c
        },
        sort: function(a, b, c, d) {
            null == d && (d = -1);
            null == c && (c = 0);
            null == b && (b = !1);
            1 < this.g && (-1 == d && (d = this.g -
                c), null == a ? b ? this.Av(c, d) : this.qm(c, d) : b ? this.pp(a, c, d) : this.pm(c, d, a));
            return this
        },
        pp: function(a, b, c) {
            for (var d, e, f = this.c, g = b + 1, k = b + c; g < k;) {
                d = g++;
                for (c = f[d]; d > b;)
                    if (e = f[d - 1], 0 < a(e, c)) f[d] = e, --d;
                    else break;
                f[d] = c
            }
            return this
        },
        pm: function(a, b, c) {
            var d = a + b - 1,
                e = a,
                f = d,
                g = this.c;
            if (1 < b) {
                var k = a + (b >> 1);
                b = a + b - 1;
                var m = g[a];
                var l = g[k];
                var u = g[b];
                var r = c(m, u);
                k = 0 > r && 0 > c(m, l) ? 0 > c(l, u) ? k : b : 0 > c(l, m) && 0 > c(l, u) ? 0 > r ? a : b : 0 > c(u, m) ? k : a;
                b = g[k];
                for (g[k] = g[a]; e < f;) {
                    for (; 0 > c(b, g[f]) && e < f;) --f;
                    f != e && (g[e] = g[f], ++e);
                    for (; 0 <
                        c(b, g[e]) && e < f;) ++e;
                    f != e && (g[f] = g[e], --f)
                }
                g[e] = b;
                this.pm(a, e - a, c);
                this.pm(e + 1, d - e, c)
            }
        },
        qm: function(a, b) {
            var c = this.c,
                d = a + b - 1,
                e = a,
                f = d;
            if (1 < b) {
                var g = a + (b >> 1);
                b = a + b - 1;
                var k = c[a];
                var m = c[g];
                var l = c[b];
                var u = k.compare(l);
                g = 0 > u && 0 > k.compare(m) ? 0 > m.compare(l) ? g : b : 0 > m.compare(k) && 0 > m.compare(l) ? 0 > u ? a : b : 0 > l.compare(k) ? g : a;
                b = c[g];
                for (c[g] = c[a]; e < f;) {
                    for (; 0 > b.compare(c[f]) && e < f;) --f;
                    f != e && (c[e] = c[f], ++e);
                    for (; 0 < b.compare(c[e]) && e < f;) ++e;
                    f != e && (c[f] = c[e], --f)
                }
                c[e] = b;
                this.qm(a, e - a);
                this.qm(e + 1, d - e)
            }
        },
        Av: function(a,
            b) {
            for (var c = this.c, d, e, f, g, k = a + 1, m = a + b; k < m;) {
                d = k++;
                for (f = b = c[d]; d > a;)
                    if (g = e = c[d - 1], 0 < f.compare(g)) c[d] = e, --d;
                    else break;
                c[d] = b
            }
        },
        Bc: function(a) {
            a > this.u && (this.u = a, this.gd(a));
            return this
        },
        resize: function(a) {
            a < this.g ? (this.u = this.g = a, this.u < this.Td && (this.u = this.Td), this.gd(this.u)) : (this.Bc(a), this.g = a);
            return this
        },
        mb: function(a, b) {
            this.Bc(a);
            this.g = a;
            for (var c = this.c, d = 0; d < a;) c[d++] = b;
            return this
        },
        R: function() {
            this.u = rb.pd(this.Db, this.u);
            this.gd(this.u)
        },
        gd: function(a) {
            a = Array(a);
            O.Bb(this.c,
                0, a, 0, this.g);
            this.c = a
        },
        A: function() {
            O.gf(this.c);
            this.c = null;
            null != this.La && (this.La.A(), this.La = null)
        },
        contains: function(a) {
            for (var b = this.c, c = 0, d = this.g; c < d;)
                if (b[c++] == a) return !0;
            return !1
        },
        remove: function(a) {
            if (this.Hi()) return !1;
            for (var b = 0, c, d, e = this.g, f = this.c; b < e;)
                if (f[b] == a) {
                    for (c = b + 1; c < e;)
                        if (f[c] == a) ++c;
                        else break;
                    d = c - b;
                    e -= d;
                    for (d = b; d < e;) f[d] = f[c++], ++d
                } else ++b;
            a = 0 != this.g - e;
            this.g = e;
            return a
        },
        iterator: function() {
            if (this.Cc) {
                if (null == this.La) this.La = new Cc(this);
                else {
                    var a = this.La;
                    a.c = a.eb.c;
                    a.Fb = a.eb.g;
                    a.Wa = 0
                }
                return this.La
            }
            return new Cc(this)
        },
        Hi: function() {
            return 0 == this.g
        },
        Rj: function() {
            return O.Rj(this.c, 0, this.g, [])
        },
        i: W
    };
    Cc.__name__ = "C6";
    Cc.__interfaces__ = [cc];
    Cc.prototype = {
        A: function() {
            this.c = this.eb = null
        },
        ia: function() {
            return this.Wa < this.Fb
        },
        next: function() {
            return this.c[this.Wa++]
        },
        i: Cc
    };
    zd.__name__ = "C7";
    zd.__isInterface__ = !0;
    zd.__interfaces__ = [ab];
    Bc.__name__ = "C8";
    Bc.__interfaces__ = [zd];
    Bc.prototype = {
        R: function() {
            var a = this.u;
            this.u = rb.pd(this.Db, this.u);
            this.gd(a, this.u)
        },
        gd: function(a, b) {
            var c = Array(b);
            a < b ? this.oa + this.g > a ? (b = a - this.oa, O.Bb(this.c, this.oa, c, 0, b), O.Bb(this.c, 0, c, b, a - b)) : O.Bb(this.c, this.oa, c, 0, this.g) : this.oa + this.g > a ? (b = this.g - this.oa, O.Bb(this.c, this.oa, c, 0, a - this.oa), O.Bb(this.c, 0, c, this.oa, b)) : O.Bb(this.c, this.oa, c, 0, this.g);
            this.c = c;
            this.oa = 0
        },
        i: Bc
    };
    uf.__name__ = "C9";
    uf.__isInterface__ = !0;
    uf.__interfaces__ = [ab];
    sb.__name__ = "CA";
    sb.__interfaces__ = [uf];
    sb.prototype = {
        clear: function(a) {
            null == a && (a = !1);
            a && O.gf(this.c);
            this.M = 0
        },
        R: function() {
            this.u =
                rb.pd(this.Db, this.u);
            this.gd(this.u)
        },
        gd: function(a) {
            a = Array(a);
            O.Bb(this.c, 0, a, 0, this.M);
            this.c = a
        },
        i: sb
    };
    bc.__name__ = "CB";
    bc.__interfaces__ = [Ad];
    bc.prototype = {
        append: function(a) {
            if (0 == this.mh || 0 == this.ne) a = new ac(a, this);
            else {
                var b = this.Yc;
                this.Yc = this.Yc.next;
                this.ne--;
                b.next = null;
                b.Ya = a;
                a = b
            }
            null != this.zb ? (this.zb.next = a, a.$b = this.zb) : this.head = a;
            this.zb = a;
            this.tl && (this.zb.next = this.head, this.head.$b = this.zb);
            this.g++;
            return a
        },
        Sj: function(a) {
            var b = a.next;
            a == this.head ? (this.head = this.head.next,
                this.tl && (this.head == this.zb ? this.head = null : this.zb.next = this.head), null == this.head && (this.zb = null)) : a == this.zb && (this.zb = this.zb.$b, this.tl && (this.head.$b = this.zb), null == this.zb && (this.head = null));
            null != a.$b && (a.$b.next = a.next);
            null != a.next && (a.next.$b = a.$b);
            a.next = a.$b = null;
            0 < this.mh && this.ne < this.mh ? (this.Gl = this.Gl.next = a, a.Ya = null, this.ne++) : a.$f = null;
            this.g--;
            return b
        },
        A: function() {
            for (var a = this.head, b, c = 0, d = this.g; c < d;) ++c, b = a.next, a.A(), a = b;
            this.head = this.zb = null;
            for (a = this.Yc; null != a;) b =
                a.next, a.A(), a = b;
            this.Yc = this.Gl = null;
            null != this.La && (this.La.A(), this.La = null)
        },
        i: bc
    };
    ac.__name__ = "CD";
    ac.prototype = {
        A: function() {
            this.$f = this.next = this.$b = this.Ya = null
        },
        i: ac
    };
    yd.__name__ = "CE";
    yd.__interfaces__ = [ab];
    yd.prototype = {
        add: function(a) {
            return this.bt(new wd(a))
        },
        bt: function(a) {
            if (null != a.kh) return a;
            this.g++;
            a.next = this.bf;
            null != a.next && (a.next.$b = a);
            this.bf = a;
            a.kh = this;
            return a
        },
        clearMarks: function() {
            for (var a = this.bf; null != a;) a.jc = !1, a = a.next;
            return this
        },
        Zt: function(a, b, c, d, e) {
            null ==
                e && (e = !1);
            null == a && (a = !1);
            if (0 == this.g) return this;
            this.nt && this.clearMarks();
            var f = 1;
            null == b && (b = this.bf);
            var g = this.Ti,
                k = this.cg;
            k[0] = b;
            b.parent = b;
            b.depth = 0;
            if (a)
                if (null == c)
                    if (e) b.Ya.Gg(!0, d) && this.vi(b, !0, d);
                    else {
                        c = k[0];
                        b = c.Ya;
                        if (!b.Gg(!0, d)) return this;
                        for (; 0 < f;)
                            if (c = k[--f], !c.jc) {
                                c.jc = !0;
                                b = c.Ya;
                                if (!b.Gg(!1, d)) break;
                                for (a = c.rc; null != a;) b = c.Ya, a.node.parent = c, a.node.depth = c.depth + 1, b.Gg(!0, d) && (b = a.node, f == g && (k = this.tj(g *= 2)), k[f++] = b), a = a.next
                            }
                    }
            else if (e) c(b, !0, d) && this.ui(b, c, !0, d);
            else {
                a = k[0];
                if (!c(a, !0, d)) return this;
                for (; 0 < f;)
                    if (a = k[--f], !a.jc) {
                        a.jc = !0;
                        if (!c(a, !1, d)) break;
                        for (b = a.rc; null != b;) b.node.parent = a, b.node.depth = a.depth + 1, c(b.node, !0, d) && (e = b.node, f == g && (k = this.tj(g *= 2)), k[f++] = e), b = b.next
                    }
            } else if (null == c)
                if (e) this.vi(b, !1, d);
                else
                    for (; 0 < f;) {
                        if (c = k[--f], !c.jc) {
                            c.jc = !0;
                            a = c.Ya;
                            if (!a.Gg(!1, d)) break;
                            for (a = c.rc; null != a;) b = a.node, f == g && (k = this.tj(g *= 2)), k[f++] = b, a.node.parent = c, a.node.depth = c.depth + 1, a = a.next
                        }
                    } else if (e) this.ui(b, c, !1, d);
                    else
                        for (; 0 < f;)
                            if (a = k[--f], !a.jc) {
                                a.jc = !0;
                                if (!c(a, !1, d)) break;
                                for (b = a.rc; null != b;) e = b.node, f == g && (k = this.tj(g *= 2)), k[f++] = e, b.node.parent = a, b.node.depth = a.depth + 1, b = b.next
                            }
            return this
        },
        A: function() {
            for (var a = this.bf; null != a;) {
                for (var b = a.next, c = a.rc; null != c;) {
                    var d = c.next;
                    c.next = c.$b = null;
                    c.node = null;
                    c = d
                }
                a.A();
                a = b
            }
            this.bf = null;
            O.gf(this.cg);
            this.cg = null;
            O.gf(this.Jp);
            this.Jp = null;
            null != this.La && (this.La.A(), this.La = null);
            this.co = null
        },
        vi: function(a, b, c) {
            a.jc = !0;
            var d = a.Ya;
            if (!d.Gg(!1, c)) return !1;
            for (var e = a.rc; null != e;) {
                var f = e.node;
                if (!f.jc)
                    if (e.node.parent =
                        a, e.node.depth = a.depth + 1, b) {
                        if (d = f.Ya, d.Gg(!0, c) && !this.vi(f, !0, c)) return !1
                    } else if (!this.vi(f, !1, c)) return !1;
                e = e.next
            }
            return !0
        },
        ui: function(a, b, c, d) {
            a.jc = !0;
            if (!b(a, !1, d)) return !1;
            for (var e = a.rc; null != e;) {
                var f = e.node;
                if (!f.jc)
                    if (e.node.parent = a, e.node.depth = a.depth + 1, c) {
                        if (b(f, !0, d) && !this.ui(f, b, !0, d)) return !1
                    } else if (!this.ui(f, b, !1, d)) return !1;
                e = e.next
            }
            return !0
        },
        tj: function(a) {
            var b = Array(a);
            O.Bb(this.cg, 0, b, 0, this.Ti);
            this.cg = b;
            this.Ti = a;
            return this.cg
        },
        i: yd
    };
    xd.__name__ = "D0";
    xd.__interfaces__ =
        [dc];
    xd.prototype = {
        i: xd
    };
    wd.__name__ = "D1";
    wd.__interfaces__ = [dc];
    wd.prototype = {
        A: function() {
            this.kh = this.rc = this.next = this.$b = this.Ya = null
        },
        isConnected: function(a) {
            return null != this.tu(a)
        },
        tu: function(a) {
            for (var b = !1, c = this.rc; null != c;) {
                if (c.node == a) {
                    b = !0;
                    break
                }
                c = c.next
            }
            return b ? c : null
        },
        Pn: function(a, b) {
            null == b && (b = 1);
            a = null != this.kh.co ? this.kh.co(a, b) : new xd(a, b);
            a.next = this.rc;
            null != this.rc && (this.rc.$b = a);
            this.rc = a;
            return this
        },
        i: wd
    };
    tc.__name__ = "D2";
    tc.next = function() {
        null == tc.On && (tc.On = 0);
        return tc.On++
    };
    Ac.__name__ = "D3";
    Ac.__interfaces__ = [dc];
    Ac.prototype = {
        i: Ac
    };
    vd.__name__ = "D4";
    vd.__interfaces__ = [ab];
    vd.prototype = {
        add: function(a) {
            this.g == this.u && this.R();
            this.c[++this.g] = a;
            a = a.position = this.g;
            for (var b = this.c, c = a >> 1, d = b[a], e; 0 < c;)
                if (e = b[c], 0 < d.compare(e)) b[a] = e, e.position = a, a = c, c >>= 1;
                else break;
            d.position = a;
            b[a] = d;
            return this
        },
        pop: function() {
            var a = this.c,
                b = a[1];
            a[1] = a[this.g];
            a = 1;
            for (var c = this.c, d = 2, e = c[1], f = this.g - 1; d < this.g;) {
                d < f && 0 > c[d].compare(c[d + 1]) && ++d;
                var g = c[d];
                if (0 > e.compare(g)) c[a] =
                    g, g.position = a, a = e.position = d, d <<= 1;
                else break
            }
            e.position = a;
            c[a] = e;
            this.g--;
            return b
        },
        Bm: function() {
            for (var a = this.g >> 1; 1 <= a;) this.$g(a, this.g), --a;
            return this
        },
        $g: function(a, b) {
            var c = this.c,
                d = a << 1,
                e = a;
            d <= b && 0 < c[d].compare(c[a]) && (e = d);
            d + 1 <= b && 0 < c[d + 1].compare(c[e]) && (e = d + 1);
            if (e != a) {
                d = c[e];
                var f = c[a];
                c[e] = f;
                c[a] = d;
                a = d.position;
                d.position = f.position;
                f.position = a;
                this.$g(e, b)
            }
        },
        R: function() {
            this.u = rb.pd(this.Db, this.u);
            this.gd(this.u)
        },
        gd: function(a) {
            a = Array(a + 1);
            O.Bb(this.c, 0, a, 0, this.g + 1);
            this.c =
                a
        },
        i: vd
    };
    ud.__name__ = "D5";
    ud.__isInterface__ = !0;
    ud.__interfaces__ = [ab];
    Wb.__name__ = "D6";
    Wb.__interfaces__ = [ud];
    Wb.prototype = {
        set: function(a, b) {
            this.g == this.u && this.R();
            var c = this.Jb,
                d = this.Ba;
            d.g == d.u && d.R();
            var e = d.c,
                f = d.Xc,
                g = 3 * d.Jb;
            d.Jb = d.Yb[d.Jb];
            e[g] = a;
            e[g + 1] = c;
            var k = 73856093 * a & d.Zc,
                m = f[k];
            if (-1 == m) f[k] = g, d.g++, d = !0;
            else {
                f = e[m] != a;
                for (k = e[m + 2]; - 1 != k;) e[k] == a && (f = !1), m = k, k = e[k + 2];
                e[m + 2] = g;
                d.g++;
                d = f
            }
            this.cf[c] = b;
            this.lh[c] = a;
            this.Jb = this.Yb[c];
            this.g++;
            return d
        },
        Cg: function(a) {
            var b = this.Ba,
                c = b.Xc[73856093 *
                    a & b.Zc];
            if (-1 == c) c = -2147483648;
            else if (b = b.c, b[c] == a) c = b[c + 1];
            else {
                var d = -2147483648;
                for (c = b[c + 2]; - 1 != c;) {
                    if (b[c] == a) {
                        d = b[c + 1];
                        break
                    }
                    c = b[c + 2]
                }
                c = d
            }
            if (-2147483648 == c) return !1;
            this.cf[c] = null;
            this.lh[c] = -2147483648;
            this.Yb[c] = this.Jb;
            this.Jb = c;
            c = this.Ba;
            var e = 73856093 * a & c.Zc,
                f = c.Xc;
            b = f[e];
            if (-1 != b)
                if (d = c.c, a == d[b]) f[e] = -1 == d[b + 2] ? -1 : d[b + 2], a = b / 3 | 0, c.Yb[a] = c.Jb, c.Jb = a, d[b + 1] = -2147483648, d[b + 2] = -1, c.g--;
                else {
                    e = !1;
                    f = b;
                    for (b = d[b + 2]; - 1 != b;) {
                        if (d[b] == a) {
                            e = !0;
                            break
                        }
                        f = b;
                        b = d[f + 2]
                    }
                    e && (d[f + 2] = d[b + 2], a = b / 3 | 0, c.Yb[a] =
                        c.Jb, c.Jb = a, d[b + 1] = -2147483648, d[b + 2] = -1, c.g--)
                }
            this.g--;
            return !0
        },
        R: function() {
            var a = this.u;
            this.u = rb.pd(this.Ba.Db, this.u);
            var b = Array(this.u);
            O.Bb(this.Yb, 0, b, 0, a);
            this.Yb = b;
            b = Array(this.u);
            O.Bb(this.lh, 0, b, 0, a);
            b = this.lh = b;
            for (var c = a, d = this.u; c < d;) b[c++] = -2147483648;
            b = this.Yb;
            c = a - 1;
            for (d = this.u - 1; c < d;) {
                var e = c++;
                b[e] = e + 1
            }
            b[this.u - 1] = -1;
            this.Jb = a;
            b = Array(this.u);
            O.Bb(this.cf, 0, b, 0, a);
            this.cf = b
        },
        i: Wb
    };
    nc.__name__ = "D7";
    nc.__interfaces__ = [ud];
    nc.prototype = {
        R: function() {
            var a = this.u;
            this.u = rb.pd(this.Db,
                this.u);
            var b = Array(this.u);
            O.Bb(this.Yb, 0, b, 0, a);
            this.Yb = b;
            b = Array(3 * this.u);
            O.Bb(this.c, 0, b, 0, 3 * a);
            this.c = b;
            b = this.Yb;
            for (var c = a - 1, d = this.u - 1; c < d;) {
                var e = c++;
                b[e] = e + 1
            }
            b[this.u - 1] = -1;
            this.Jb = a;
            c = 3 * a + 2;
            b = this.c;
            d = 0;
            for (a = this.u - a; d < a;) ++d, b[c - 1] = -2147483648, b[c] = -1, c += 3
        },
        i: nc
    };
    td.__name__ = "D8";
    td.__interfaces__ = [zd];
    td.prototype = {
        enqueue: function(a) {
            this.g == this.u && this.R();
            this.c[++this.g] = a;
            a = a.position = this.g;
            var b = this.c,
                c = a >> 1,
                d = b[a],
                e = d.ga;
            if (this.xd)
                for (; 0 < c;) {
                    var f = b[c];
                    if (0 > e - f.ga) b[a] =
                        f, f.position = a, a = c, c >>= 1;
                    else break
                } else
                    for (; 0 < c;)
                        if (f = b[c], 0 < e - f.ga) b[a] = f, f.position = a, a = c, c >>= 1;
                        else break;
            b[a] = d;
            d.position = a
        },
        Vt: function() {
            var a = this.c,
                b = a[1];
            b.position = -1;
            a[1] = a[this.g];
            a = 1;
            var c = this.c,
                d = 2,
                e = c[1],
                f = e.ga;
            if (this.xd)
                for (; d < this.g;) {
                    d < this.g - 1 && 0 < c[d].ga - c[d + 1].ga && ++d;
                    var g = c[d];
                    if (0 < f - g.ga) c[a] = g, g.position = a, a = e.position = d, d <<= 1;
                    else break
                } else
                    for (; d < this.g;)
                        if (d < this.g - 1 && 0 > c[d].ga - c[d + 1].ga && ++d, g = c[d], 0 > f - g.ga) c[a] = g, g.position = a, a = e.position = d, d <<= 1;
                        else break;
            c[a] =
                e;
            e.position = a;
            this.g--;
            return b
        },
        Uw: function(a, b) {
            var c = a.ga;
            if (c == b) return this;
            a.ga = b;
            a = a.position;
            if (this.xd)
                if (b < c) {
                    b = a;
                    c = this.c;
                    var d = a >> 1;
                    a = c[a];
                    var e = a.ga;
                    if (this.xd)
                        for (; 0 < d;) {
                            var f = c[d];
                            if (0 > e - f.ga) c[b] = f, f.position = b, b = d, d >>= 1;
                            else break
                        } else
                            for (; 0 < d;)
                                if (f = c[d], 0 < e - f.ga) c[b] = f, f.position = b, b = d, d >>= 1;
                                else break;
                    c[b] = a;
                    a.position = b
                } else {
                    b = a;
                    c = this.c;
                    d = a << 1;
                    e = c[a];
                    f = e.ga;
                    if (this.xd)
                        for (; d < this.g;)
                            if (d < this.g - 1 && 0 < c[d].ga - c[d + 1].ga && ++d, a = c[d], 0 < f - a.ga) c[b] = a, a.position = b, b = e.position = d, d <<=
                                1;
                            else break;
                    else
                        for (; d < this.g;)
                            if (d < this.g - 1 && 0 > c[d].ga - c[d + 1].ga && ++d, a = c[d], 0 > f - a.ga) c[b] = a, a.position = b, b = e.position = d, d <<= 1;
                            else break;
                    c[b] = e;
                    e.position = b;
                    a = this.g;
                    b = this.c;
                    c = a >> 1;
                    d = b[a];
                    e = d.ga;
                    if (this.xd)
                        for (; 0 < c;)
                            if (f = b[c], 0 > e - f.ga) b[a] = f, f.position = a, a = c, c >>= 1;
                            else break;
                    else
                        for (; 0 < c;)
                            if (f = b[c], 0 < e - f.ga) b[a] = f, f.position = a, a = c, c >>= 1;
                            else break;
                    b[a] = d;
                    d.position = a
                }
            else if (b > c) {
                b = a;
                c = this.c;
                d = a >> 1;
                a = c[a];
                e = a.ga;
                if (this.xd)
                    for (; 0 < d;)
                        if (f = c[d], 0 > e - f.ga) c[b] = f, f.position = b, b = d, d >>= 1;
                        else break;
                else
                    for (; 0 < d;)
                        if (f = c[d], 0 < e - f.ga) c[b] = f, f.position = b, b = d, d >>= 1;
                        else break;
                c[b] = a;
                a.position = b
            } else {
                b = a;
                c = this.c;
                d = a << 1;
                e = c[a];
                f = e.ga;
                if (this.xd)
                    for (; d < this.g;)
                        if (d < this.g - 1 && 0 < c[d].ga - c[d + 1].ga && ++d, a = c[d], 0 < f - a.ga) c[b] = a, a.position = b, b = e.position = d, d <<= 1;
                        else break;
                else
                    for (; d < this.g;)
                        if (d < this.g - 1 && 0 > c[d].ga - c[d + 1].ga && ++d, a = c[d], 0 > f - a.ga) c[b] = a, a.position = b, b = e.position = d, d <<= 1;
                        else break;
                c[b] = e;
                e.position = b;
                a = this.g;
                b = this.c;
                c = a >> 1;
                d = b[a];
                e = d.ga;
                if (this.xd)
                    for (; 0 < c;)
                        if (f = b[c], 0 > e - f.ga) b[a] = f,
                            f.position = a, a = c, c >>= 1;
                        else break;
                else
                    for (; 0 < c;)
                        if (f = b[c], 0 < e - f.ga) b[a] = f, f.position = a, a = c, c >>= 1;
                        else break;
                b[a] = d;
                d.position = a
            }
            return this
        },
        clear: function(a) {
            null == a && (a = !1);
            a && O.gf(this.c);
            this.g = 0
        },
        iterator: function() {
            if (this.Cc) {
                if (null == this.La) return new zc(this);
                this.La.reset();
                return this.La
            }
            return new zc(this)
        },
        Bm: function() {
            for (var a = this.g >> 1; 1 <= a;) this.$g(a, this.g), --a
        },
        $g: function(a, b) {
            var c = this.c,
                d = a << 1,
                e = d + 1,
                f = a;
            this.xd ? (d <= b && 0 > c[d].ga - c[a].ga && (f = d), d + 1 <= b && 0 > c[d + 1].ga - c[f].ga &&
                (f = e)) : (d <= b && 0 < c[d].ga - c[a].ga && (f = d), d + 1 <= b && 0 < c[d + 1].ga - c[f].ga && (f = e));
            f != a && (d = c[f], e = c[a], c[f] = e, c[a] = d, a = d.position, d.position = e.position, e.position = a, this.$g(f, b))
        },
        R: function() {
            this.u = rb.pd(this.Db, this.u);
            this.gd(this.u)
        },
        gd: function(a) {
            a = Array(a + 1);
            O.Bb(this.c, 0, a, 0, this.g + 1);
            this.c = a
        },
        i: td
    };
    zc.__name__ = "D9";
    zc.__interfaces__ = [cc];
    zc.prototype = {
        reset: function() {
            this.Wa = 0;
            this.Fb = this.eb.g;
            this.c = Array(this.Fb);
            O.Bb(this.eb.c, 1, this.c, 0, this.Fb);
            return this
        },
        ia: function() {
            return this.Wa <
                this.Fb
        },
        next: function() {
            return this.c[this.Wa++]
        },
        i: zc
    };
    sd.__name__ = "DB";
    sd.qw = function(a) {
        a -= a >> 1 & 1431655765;
        a = (a >> 2 & 858993459) + (a & 858993459);
        a = (a >> 4) + a & 252645135;
        a += a >> 8;
        return a + (a >> 16) & 63
    };
    sd.cw = function(a) {
        if (0 > a) return 0;
        a |= a >> 1;
        a |= a >> 2;
        a |= a >> 4;
        a |= a >> 8;
        return 32 - sd.qw(a | a >> 16)
    };
    rb.__name__ = "DC";
    rb.pd = function(a, b) {
        if (0 < a) b += a;
        else switch (a) {
            case -3:
                b <<= 1;
                break;
            case -2:
                b = (3 * b >> 1) + 1;
                break;
            case -1:
                a = b + 1;
                b = (a >> 3) + (9 > a ? 3 : 6) + a;
                break;
            case 0:
                throw 0;
        }
        return b
    };
    O.__name__ = "DD";
    O.Rj = function(a, b, c) {
        if (0 ==
            c) return [];
        var d = Array(c);
        if (0 == b)
            for (b = 0; b < c;) {
                var e = b++;
                d[e] = a[e]
            } else
                for (e = b, c = b + c; e < c;) {
                    var f = e++;
                    d[f - b] = a[f]
                }
        return d
    };
    O.Bb = function(a, b, c, d, e) {
        if (0 < e)
            if (a == c)
                if (b < d)
                    for (c = b + e, d += e, b = 0; b < e;) ++b, --c, --d, a[d] = a[c];
                else {
                    if (b > d)
                        for (c = b, b = 0; b < e;) ++b, a[d] = a[c], ++c, ++d
                }
        else if (0 == b && 0 == d)
            for (d = 0; d < e;) b = d++, c[b] = a[b];
        else if (0 == b)
            for (b = 0; b < e;) {
                var f = b++;
                c[d + f] = a[f]
            } else if (0 == d)
                for (d = 0; d < e;) f = d++, c[f] = a[b + f];
            else
                for (f = 0; f < e;) {
                    var g = f++;
                    c[d + g] = a[b + g]
                }
    };
    O.mb = function(a, b, c, d) {
        null == d && (d = 0);
        null == c &&
            (c = 0);
        var e = c;
        for (c = 0 >= d ? a.length : c + d; e < c;) a[e++] = b;
        return a
    };
    O.gf = function(a) {
        var b, c;
        null == c && (c = 0);
        null == b && (b = 0);
        var d = b;
        for (b = 0 >= c ? a.length : b + c; d < b;) a[d++] = null
    };
    O.pt = function(a, b, c) {
        for (var d = 0, e, f = c + 1; d < f;) e = d + (f - d >> 1), a[e] < b ? d = e + 1 : f = e;
        return d <= c && a[d] == b ? d : ~d
    };
    rd.__name__ = "DE";
    rd.prototype = {
        resize: function() {
            var a = rb.pd(this.Db, this.wd),
                b = Array(a);
            this.wd = a;
            O.Bb(this.Mc, 0, b, 0, this.size);
            this.Mc = b
        },
        i: rd
    };
    var T = xa.e4 = {
        Ub: !0,
        Kb: "i0 i1 i2 i3 i4 i5 i6 i7 i8 i9 i10 i11".split(" ")
    };
    T.i0 = {
        G: 0,
        N: "e4",
        toString: D
    };
    T.i1 = {
        G: 1,
        N: "e4",
        toString: D
    };
    T.i2 = {
        G: 2,
        N: "e4",
        toString: D
    };
    T.i3 = {
        G: 3,
        N: "e4",
        toString: D
    };
    T.i4 = {
        G: 4,
        N: "e4",
        toString: D
    };
    T.i5 = {
        G: 5,
        N: "e4",
        toString: D
    };
    T.i6 = {
        G: 6,
        N: "e4",
        toString: D
    };
    T.i7 = {
        G: 7,
        N: "e4",
        toString: D
    };
    T.i8 = {
        G: 8,
        N: "e4",
        toString: D
    };
    T.i9 = {
        G: 9,
        N: "e4",
        toString: D
    };
    T.i10 = {
        G: 10,
        N: "e4",
        toString: D
    };
    T.i11 = {
        G: 11,
        N: "e4",
        toString: D
    };
    T.pc = [T.i0, T.i1, T.i2, T.i3, T.i4, T.i5, T.i6, T.i7, T.i8, T.i9, T.i10, T.i11];
    V.__name__ = "DF";
    V.Lm = function(a, b) {
        var c = new L("^([a-z]{2})-([a-z]{2})$", "i");
        c.match(a) && (a = c.Ka(1).toLowerCase());
        V.Oi = a;
        (new L("^[a-z][a-z]$", "")).match(a) && null != a || (V.Oi = V.Yt());
        aa.Vb(b, function(a) {
            return a == V.Oi
        }) || (V.Oi = "en")
    };
    V.qv = function(a, b) {
        var c = a.split("\n"),
            d = c.length;
        V.Kj = Array(d);
        V.vq = Array(d);
        for (var e = 0; e < d;) {
            var f = e++;
            a = c[f];
            a = a.replace(/\\n/g, "\n");
            V.Kj[f] = a;
            V.vq[f] = (new L("::(\\w+)::", "")).match(c[f])
        }
        if (null != b) {
            c = new $a;
            a = [];
            for (d = 0; d < b.length;) e = b[d++], f = b[d++], null != X[e] ? c.Dc(e, f) : c.C[e] = f, a.push(e);
            b = new L(a.join("|"), "");
            d = 0;
            for (e = V.Kj.length; d < e;)
                for (a = V.Kj[d++]; b.match(a);) f = b.Ka(0),
                    a = a.replace(b.r, null != X[f] ? c.gc(f) : c.C[f])
        }
    };
    V.translate = function(a) {
        var b = a.G,
            c = V.Kj[b];
        if (!V.vq[b]) return c;
        a = Fb.hu(a);
        if (0 == a.length) return c;
        for (b = 0; b < a.length;) {
            var d = a[b++];
            c = c.replace(/::(\w+)::/, C.Sa(d))
        }
        return c
    };
    V.Yt = function() {
        var a = null;
        try {
            var b = new L("lang=(\\w\\w(?:-\\w\\w)?)", "");
            b.match(window.location.href) && (a = b.Ka(1))
        } catch (c) {}
        null == a && (a = "en");
        return a
    };
    oa.__name__ = "E0";
    oa.Hb = function() {
        return Ea.cb()
    };
    oa.al = function() {
        return Oa.cb()
    };
    var Ca = xa.e5 = {
        Ub: !0,
        Kb: ["i0", "i1", "i2", "i3"]
    };
    Ca.i0 = {
        G: 0,
        N: "e5",
        toString: D
    };
    Ca.i1 = {
        G: 1,
        N: "e5",
        toString: D
    };
    Ca.i2 = {
        G: 2,
        N: "e5",
        toString: D
    };
    Ca.i3 = {
        G: 3,
        N: "e5",
        toString: D
    };
    Ca.pc = [Ca.i0, Ca.i1, Ca.i2, Ca.i3];
    tf.__name__ = "E1";
    tf.prototype = {
        i: tf
    };
    Oa.__name__ = "E2";
    Oa.cb = function() {
        null == Oa.Ni && (Oa.Ni = new Oa);
        return Oa.Ni
    };
    Oa.Ob = function() {};
    Oa.B = mb;
    Oa.prototype = v(mb.prototype, {
        A: function() {
            mb.prototype.A.call(this);
            this.disable();
            Oa.Ni = null
        },
        enable: function() {
            this.enabled || (this.enabled = !0, window.addEventListener("keydown", B(this, this.kq), !0), window.addEventListener("keyup",
                B(this, this.lq), !0))
        },
        disable: function() {
            this.enabled && (this.enabled = !1, window.removeEventListener("keydown", B(this, this.kq), !0), window.removeEventListener("keyup", B(this, this.lq), !0))
        },
        Ac: function(a, b) {
            Oa.Ob(a, b, this.ef);
            a = new sf(this, b, a);
            for (b = this.list; null != b;) this.next = b.next, b = this.current = b.lc, a.s = b, b(a), b = this.next;
            this.current = this.next = null
        },
        kq: function(a) {
            var b = a.keyCode;
            if (!this.keys[b]) {
                this.keys[b] = !0;
                this.order[b] += 1;
                this.ef.shift = a.shiftKey;
                this.ef.control = a.ctrlKey;
                this.ef.alt = a.altKey;
                switch (a.location) {
                    case 1:
                        var c = Ca.i1;
                        break;
                    case 2:
                        c = Ca.i2;
                        break;
                    case 3:
                        c = Ca.i3;
                        break;
                    default:
                        c = Ca.i0
                }
                this.location = c;
                this.event = a;
                this.enabled && this.Ac(!0, b);
                this.event = null
            }
        },
        lq: function(a) {
            var b = a.keyCode;
            this.keys[b] = !1;
            this.ef.shift = a.shiftKey;
            this.ef.control = a.ctrlKey;
            this.ef.alt = a.altKey;
            switch (a.location) {
                case 1:
                    a = Ca.i1;
                    break;
                case 2:
                    a = Ca.i2;
                    break;
                case 3:
                    a = Ca.i3;
                    break;
                default:
                    a = Ca.i0
            }
            this.location = a;
            this.enabled && this.Ac(!1, b)
        },
        i: Oa
    });
    sf.__name__ = "E3";
    sf.prototype = {
        i: sf
    };
    Ea.__name__ = "E4";
    Ea.cb =
        function() {
            null == Ea.zh && (Ea.zh = new Ea);
            return Ea.zh
        };
    Ea.Ob = function() {};
    Ea.B = mb;
    Ea.prototype = v(mb.prototype, {
        Zu: function() {
            var a = this.ea,
                b = new I;
            b.b = a.b;
            b.a = a.a;
            return b
        },
        A: function() {
            mb.prototype.A.call(this);
            this.disable();
            this.element = null;
            Ea.zh = null
        },
        enable: function() {
            if (!this.enabled) {
                this.enabled = !0;
                var a = this.jr() && {
                        passive: !1
                    },
                    b = window;
                b.addEventListener("mousedown", B(this, this.mq));
                b.addEventListener("mouseup", B(this, this.oq));
                b.addEventListener("mousemove", B(this, this.nq));
                b.addEventListener("touchstart",
                    B(this, this.tq), a);
                b.addEventListener("touchend", B(this, this.hj));
                b.addEventListener("touchcancel", B(this, this.hj));
                b.addEventListener("touchmove", B(this, this.sq));
                b.addEventListener("mousewheel", B(this, this.gj), a);
                b.addEventListener("DOMMouseScroll", B(this, this.gj), a)
            }
        },
        disable: function() {
            if (this.enabled) {
                this.enabled = !1;
                var a = window;
                a.removeEventListener("mousedown", B(this, this.mq));
                a.removeEventListener("mouseup", B(this, this.oq));
                a.removeEventListener("mousemove", B(this, this.nq));
                a.removeEventListener("touchstart",
                    B(this, this.tq));
                a.removeEventListener("touchend", B(this, this.hj));
                a.removeEventListener("touchcancel", B(this, this.hj));
                a.removeEventListener("touchmove", B(this, this.sq));
                a.removeEventListener("mousewheel", B(this, this.gj));
                a.removeEventListener("DOMMouseScroll", B(this, this.gj))
            }
        },
        mq: function(a) {
            var b = a.which;
            this.ub = this.ub & ~(1 << b) | 1 << b;
            0 != (this.ii & 1 << a.which) && this.Ac(a.clientX, a.clientY, 0, a.which)
        },
        oq: function(a) {
            var b = a.which;
            this.ub = this.ub & ~(1 << b) | 0 << b;
            0 != (this.ii & 1 << a.which) && this.Ac(a.clientX,
                a.clientY, 1, a.which)
        },
        nq: function(a) {
            0 < this.fg || this.Ac(a.clientX, a.clientY, 2, 0)
        },
        tq: function(a) {
            this.cancel(a);
            a = a.changedTouches;
            if (1 == this.maxTouchPoints) null != this.first || 1 < a.length || (this.first = a[0], this.ub = this.ub & -3 | 2, this.fg = 1, this.Ac(this.first.clientX, this.first.clientY, 0, 4));
            else
                for (var b = 0; b < a.length;) {
                    var c = a[b];
                    ++b;
                    var d = this.fg < this.maxTouchPoints,
                        e = d ? 0 < this.ml.length ? this.ml.pop() : this.Rl++ : null;
                    h["" + c.identifier] = e;
                    d && (this.Ac(c.clientX, c.clientY, 0, 4 + e), this.fg++)
                }
        },
        hj: function(a) {
            "touchend" ==
            a.type && this.cancel(a);
            a = a.changedTouches;
            if (1 == this.maxTouchPoints) {
                if (null != this.first)
                    for (var b = 0; b < a.length;) {
                        var c = a[b];
                        ++b;
                        if (c.identifier == this.first.identifier) {
                            this.fg = 0;
                            this.ub = this.ub & -3 | 0;
                            this.first = null;
                            this.Ac(c.clientX, c.clientY, 1, 4);
                            break
                        }
                    }
            } else
                for (b = this.touches, c = 0; c < a.length;) {
                    var d = a[c];
                    ++c;
                    var e = "" + d.identifier,
                        f = b[e];
                    delete b[e];
                    null != f && (this.fg--, this.ml.push(f), this.Ac(d.clientX, d.clientY, 1, 4 + f))
                }
        },
        sq: function(a) {
            this.cancel(a);
            a = a.changedTouches;
            if (1 == this.maxTouchPoints) {
                if (null !=
                    this.first)
                    for (var b = 0; b < a.length;) {
                        var c = a[b];
                        ++b;
                        if (c.identifier == this.first.identifier) {
                            this.Ac(c.clientX, c.clientY, 2, 4);
                            break
                        }
                    }
            } else
                for (b = 0; b < a.length;) {
                    c = a[b];
                    ++b;
                    var d = h["" + c.identifier];
                    null != d && this.Ac(c.clientX, c.clientY, 2, 4 + d)
                }
        },
        gj: function(a) {
            this.Ac(Math.max(-1, Math.min(1, a.wheelDelta || -a.detail)), 0, 3, -1)
        },
        Ac: function(a, b, c, d) {
            Ea.Ob(a, b, c, d);
            if (3 != c) {
                if (null != this.element) {
                    var e = this.element.getBoundingClientRect();
                    a < e.left && (a = e.left);
                    a > e.right && (a = e.right);
                    a -= e.left;
                    b < e.top && (b = e.top);
                    b > e.bottom && (b = e.bottom);
                    b -= e.top
                } else 0 > a && (a = 0), 0 > b && (b = 0);
                a = a * this.fc * this.scale.b | 0;
                b = b * this.fc * this.scale.a | 0
            }
            e = this.ea;
            e.b = a;
            e.a = b;
            e = new rf(this);
            e.x = this.ea.b;
            e.y = this.ea.a;
            e.type = c;
            e.id = d;
            if (this.Jy || null == this.buffer) {
                for (a = this.list; null != a;) this.next = a.next, a = this.current = a.lc, e.s = a, a(e), a = this.next;
                this.current = this.next = null
            } else e = this.buffer, e.Bc(e.g + 5), e.c[e.g++] = a | 0, e.c[e.g++] = b | 0, e.c[e.g++] = c, e.c[e.g++] = d
        },
        cancel: function(a) {
            a.preventDefault()
        },
        jr: function() {
            try {
                var a = Object.defineProperty({},
                    "passive", {
                        get: function() {
                            p = !0
                        }
                    });
                window.addEventListener("test", null, a);
                window.removeEventListener("test", null, a)
            } catch (b) {}
            return !1
        },
        i: Ea
    });
    rf.__name__ = "E5";
    rf.prototype = {
        i: rf
    };
    var Xf = {
            __name__: "E6",
            dw: function(a, b, c, d) {
                var e = new J;
                e.b = a;
                e.a = b;
                e.f = a + c;
                e.d = b + d;
                return e
            },
            offset: function(a, b, c) {
                a.b -= b;
                a.a -= c;
                a.f += b;
                a.d += c
            }
        },
        ag = {
            __name__: "E7",
            or: function(a) {
                return "rgba(" + (Math.round(255 * a.b) & 255) + "," + (Math.round(255 * a.a) & 255) + "," + (Math.round(255 * a.f) & 255) + "," + +a.d.toFixed(2)
            }
        };
    U.__name__ = "E8";
    U.Fp =
        function() {
            return function(a) {
                return a
            }
        };
    U.Bq = function() {
        return function(a) {
            return Math.pow(a, 2)
        }
    };
    U.zw = function() {
        return function(a) {
            return 1 > (a *= 2) ? .5 * Math.pow(a, 2) : 1 - .5 * Math.abs(Math.pow(2 - a, 2))
        }
    };
    U.Nc = function(a) {
        return function(b) {
            return 1 - Math.pow(1 - b, a)
        }
    };
    U.ot = function() {
        var a = .1;
        null == a && (a = .1);
        var b = 17.0158 * a;
        return function(a) {
            return a * a * ((b + 1) * a - b)
        }
    };
    U.Jd = function(a) {
        null == a && (a = .1);
        var b = 17.0158 * a;
        return function(a) {
            --a;
            return a * a * ((b + 1) * a + b) + 1
        }
    };
    Va.__name__ = "E9";
    Va.map = function(a, b, c,
        d, e) {
        return d + (a - b) / (c - b) * (e - d)
    };
    var sc = {
            __name__: "EA",
            gi: function(a, b) {
                a.b = b.b;
                a.a = b.a;
                a.f = b.f;
                a.d = b.d;
                a.e = b.e;
                a.s = b.s;
                a.Va = b.Va;
                a.C = b.C;
                a.ab = b.ab;
                return a
            },
            mf: function(a) {
                a.b = 1;
                a.a = 0;
                a.f = 0;
                a.d = 0;
                a.e = 1;
                a.s = 0;
                a.Va = 0;
                a.C = 0;
                a.ab = 1;
                return a
            }
        },
        Aa = {
            __name__: "EB",
            Ke: function() {
                var a = new qf;
                Aa.mf(a);
                return a
            },
            gi: function(a, b) {
                a.b = b.b;
                a.a = b.a;
                a.f = b.f;
                a.d = b.d;
                a.e = b.e;
                a.s = b.s;
                a.Va = b.Va;
                a.C = b.C;
                a.ab = b.ab;
                a.vb = b.vb;
                a.k = b.k;
                a.Qa = b.Qa;
                a.Eb = b.Eb;
                a.n = b.n;
                a.xc = b.xc;
                a.p = b.p;
                return a
            },
            mf: function(a) {
                a.b = 1;
                a.a = 0;
                a.f =
                    0;
                a.d = 0;
                a.e = 0;
                a.s = 1;
                a.Va = 0;
                a.C = 0;
                a.ab = 0;
                a.vb = 0;
                a.k = 1;
                a.Qa = 0;
                a.Eb = 0;
                a.n = 0;
                a.xc = 0;
                a.p = 1;
                return a
            },
            Uq: function(a, b, c, d) {
                a.b = 1;
                a.a = 0;
                a.f = 0;
                a.d = b;
                a.e = 0;
                a.s = 1;
                a.Va = 0;
                a.C = c;
                a.ab = 0;
                a.vb = 0;
                a.k = 1;
                a.Qa = d;
                a.Eb = 0;
                a.n = 0;
                a.xc = 0;
                a.p = 1;
                return a
            },
            yt: function(a, b) {
                var c = Math.sin(b);
                b = Math.cos(b);
                var d = a.b,
                    e = a.e;
                a.b = b * d - c * e;
                a.e = c * d + b * e;
                d = a.a;
                e = a.s;
                a.a = b * d - c * e;
                a.s = c * d + b * e;
                d = a.f;
                e = a.Va;
                a.f = b * d - c * e;
                a.Va = c * d + b * e;
                d = a.d;
                e = a.C;
                a.d = b * d - c * e;
                a.C = c * d + b * e
            },
            jo: function(a, b, c, d) {
                a.b *= b;
                a.a *= b;
                a.f *= b;
                a.d *= b;
                a.e *= c;
                a.s *= c;
                a.Va *= c;
                a.C *=
                    c;
                a.ab *= d;
                a.vb *= d;
                a.k *= d;
                a.Qa *= d
            },
            cy: function(a, b) {
                var c = b.b,
                    d = b.a,
                    e = b.f,
                    f = b.d,
                    g = b.e,
                    k = b.s,
                    m = b.Va,
                    l = b.C,
                    u = b.ab,
                    r = b.vb,
                    q = b.k,
                    n = b.Qa,
                    t = b.Eb,
                    v = b.n,
                    w = b.xc;
                b = b.p;
                var y = a.b,
                    x = a.a,
                    z = a.f,
                    B = a.d;
                a.b = y * c + x * g + z * u + B * t;
                a.a = y * d + x * k + z * r + B * v;
                a.f = y * e + x * m + z * q + B * w;
                a.d = y * f + x * l + z * n + B * b;
                y = a.e;
                x = a.s;
                z = a.Va;
                B = a.C;
                a.e = y * c + x * g + z * u + B * t;
                a.s = y * d + x * k + z * r + B * v;
                a.Va = y * e + x * m + z * q + B * w;
                a.C = y * f + x * l + z * n + B * b;
                y = a.ab;
                x = a.vb;
                z = a.k;
                B = a.Qa;
                a.ab = y * c + x * g + z * u + B * t;
                a.vb = y * d + x * k + z * r + B * v;
                a.k = y * e + x * m + z * q + B * w;
                a.Qa = y * f + x * l + z * n + B * b;
                y = a.Eb;
                x = a.n;
                z = a.xc;
                B = a.p;
                a.Eb = y * c + x * g + z * u + B * t;
                a.n = y * d + x * k + z * r + B * v;
                a.xc = y * e + x * m + z * q + B * w;
                a.p = y * f + x * l + z * n + B * b
            },
            qp: function(a, b) {
                var c = a.b * a.s - a.a * a.e,
                    d = a.b * a.Va - a.f * a.e,
                    e = a.b * a.C - a.d * a.e,
                    f = a.a * a.Va - a.f * a.s,
                    g = a.a * a.C - a.d * a.s,
                    k = a.f * a.C - a.d * a.Va,
                    m = a.ab * a.n - a.vb * a.Eb,
                    l = a.ab * a.xc - a.k * a.Eb,
                    u = a.ab * a.p - a.Qa * a.Eb,
                    r = a.vb * a.xc - a.k * a.n,
                    q = a.vb * a.p - a.Qa * a.n,
                    n = a.k * a.p - a.Qa * a.xc,
                    t = 1 / (c * n - d * q + e * r + f * u - g * l + k * m);
                b.b = (a.s * n - a.Va * q + a.C * r) * t;
                b.e = (-a.e * n + a.Va * u - a.C * l) * t;
                b.ab = (a.e * q - a.s * u + a.C * m) * t;
                b.Eb = (-a.e * r + a.s * l - a.Va * m) * t;
                b.a = (-a.a * n + a.f *
                    q - a.d * r) * t;
                b.s = (a.b * n - a.f * u + a.d * l) * t;
                b.vb = (-a.b * q + a.a * u - a.d * m) * t;
                b.n = (a.b * r - a.a * l + a.f * m) * t;
                b.f = (a.n * k - a.xc * g + a.p * f) * t;
                b.Va = (-a.Eb * k + a.xc * e - a.p * d) * t;
                b.k = (a.Eb * g - a.n * e + a.p * c) * t;
                b.xc = (-a.Eb * f + a.n * d - a.xc * c) * t;
                b.d = (-a.vb * k + a.k * g - a.Qa * f) * t;
                b.C = (a.ab * k - a.k * e + a.Qa * d) * t;
                b.Qa = (-a.ab * g + a.vb * e - a.Qa * c) * t;
                b.p = (a.ab * f - a.vb * d + a.k * c) * t;
                return b
            }
        },
        mc = {
            __name__: "EC",
            gp: function(a) {
                return a.f
            },
            yx: function(a, b) {
                return a.f = b
            },
            zj: function(a, b, c) {
                var d = c.b - b.b;
                c = c.a - b.a;
                var e = Math.sqrt(d * d + c * c);
                a.b = -(c / e);
                a.a = d / e;
                mc.yx(a,
                    a.b * b.b + a.a * b.a);
                return a
            }
        };
    I.__name__ = "ED";
    I.prototype = {
        i: I
    };
    zb.__name__ = "EE";
    zb.prototype = {
        i: zb
    };
    J.__name__ = "EF";
    J.prototype = {
        i: J
    };
    pc.__name__ = "F0";
    pc.prototype = {
        i: pc
    };
    rc.__name__ = "F1";
    rc.prototype = {
        i: rc
    };
    qf.__name__ = "F2";
    qf.prototype = {
        i: qf
    };
    var Yf = {
            __name__: "F3",
            ky: function(a) {
                var b = new zb;
                b.b = a.b;
                b.a = a.a;
                b.f = 0;
                return b
            },
            normalize: function(a) {
                var b = a.b * a.b + a.a * a.a;
                0 < b && (b = Math.sqrt(b), a.b /= b, a.a /= b);
                return b
            }
        },
        Ib = {
            __name__: "F4",
            ae: function(a) {
                var b = new I;
                b.b = a.b;
                b.a = a.a;
                return b
            }
        };
    qd.__name__ =
        "F5";
    qd.Wx = function(a, b) {
        return a.b > b.b && a.b < b.f && a.a > b.a ? a.a < b.d : !1
    };
    qd.Xx = function(a, b) {
        return 0 < a && 1 > a && 0 < b ? 1 > b : !1
    };
    yc.__name__ = "F6";
    yc.Lj = function(a, b, c, d, e) {
        return 0 > a * c + b * d - e
    };
    Rf.__name__ = "F7";
    Rf.lu = function(a, b, c, d, e) {
        return a * c + b * d - e
    };
    xc.__name__ = "F8";
    xc.prototype = {
        Cj: function(a) {
            this.bx = a
        },
        Hq: function() {
            throw 0;
        },
        Fw: function(a, b) {
            a -= .4999;
            return Math.round(a + (b + .4999 - a) * this.Hq())
        },
        i: xc
    };
    pd.__name__ = "F9";
    pd.B = xc;
    pd.prototype = v(xc.prototype, {
        Cj: function(a) {
            xc.prototype.Cj.call(this, a);
            this.yb[0] =
                this.bx;
            for (a = 1; 624 > a;) {
                var b = a++,
                    c = this.yb[b - 1] ^ this.yb[b - 1] >>> 30;
                c = 0 > c ? (c ^ -2147483648) + -2147483648 : c;
                for (var d = 0, e = 0; 32 > e;) {
                    var f = e++;
                    0 != (1812433253 >>> f & 1) && (f = c << f, d = d + (0 > f ? (f ^ -2147483648) + -2147483648 : f) & -1, d = 0 > d ? (d ^ -2147483648) + -2147483648 : d)
                }
                c = d + b & -1;
                this.yb[b] = 0 > c ? (c ^ -2147483648) + -2147483648 : c;
                c = this.yb[b] & -1;
                this.yb[b] = 0 > c ? (c ^ -2147483648) + -2147483648 : c
            }
            this.xk = 624
        },
        Ew: function() {
            if (624 <= this.xk) {
                for (var a, b = 0; 227 > b;) {
                    var c = b++;
                    a = this.yb[c] & -2147483648 | this.yb[c + 1] & -2147483649;
                    a = 0 > a ? (a ^ -2147483648) +
                        -2147483648 : a;
                    a = this.yb[c + 397] ^ a >>> 1 ^ this.hh[a & 1];
                    this.yb[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a
                }
                for (b = 227; 623 > b;) c = b++, a = this.yb[c] & -2147483648 | this.yb[c + 1] & -2147483649, a = 0 > a ? (a ^ -2147483648) + -2147483648 : a, a = this.yb[c + -227] ^ a >>> 1 ^ this.hh[a & 1], this.yb[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                a = this.yb[623] & -2147483648 | this.yb[0] & -2147483649;
                a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                a = this.yb[396] ^ a >>> 1 ^ this.hh[a & 1];
                this.yb[623] = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                this.xk = 0
            }
            a = this.yb[this.xk++];
            a ^= a >>> 11;
            a = 0 > a ? (a ^
                -2147483648) + -2147483648 : a;
            a ^= a << 7 & -1658038656;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a << 15 & -272236544;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a >>> 18;
            return 0 > a ? (a ^ -2147483648) + -2147483648 : a
        },
        Hq: function() {
            return 2.3283064365386963E-10 * ta.kb(this.Ew())
        },
        i: pd
    });
    Kb.__name__ = "FA";
    Kb.Mk = function(a, b) {
        return a + (b - a) * Math.random()
    };
    Kb.Ko = function(a) {
        return Kb.Mk(-a, a)
    };
    wc.__name__ = "FB";
    wc.prototype = {
        Kc: function() {
            0 != this.Ne && this.ji.Ha(this.If);
            this.Ne = this.If = 0;
            return this.ji.Kc()
        },
        $a: function(a, b) {
            32 <
                b && (b = 32);
            for (var c = 0, d = 0; d < b;) 8 == this.Ne && (0 != this.Ne && this.ji.Ha(this.If), this.Ne = this.If = 0), this.If |= (a >> d & 1) << this.Ne, this.Ne++, ++c, ++d;
            return c
        },
        i: wc
    };
    od.__name__ = "FC";
    od.Zk = function(a) {
        return E.Kg(a, $f) ? (a = a.__name__, y.substr(a, a.lastIndexOf(".") + 1, null)) : null != E.Xe(a) ? od.Zk(E.Xe(a)) : null
    };
    pf.__name__ = "FD";
    pf.encode = function(a, b) {
        null == b && (b = a);
        for (var c = 0, d = 0, e = a.length; d < e;) {
            var f = a[d];
            b[d] = f - c;
            c = f;
            ++d
        }
    };
    Jb.__name__ = "FE";
    Jb.pr = function(a) {
        a = 1E3 * a | 0;
        a = (a - a % 1E3) / 1E3;
        var b = a % 60;
        return y.substr("0" +
            (a - b) / 60, -2, null) + ":" + y.substr("0" + b, -2, null)
    };
    Jb.dl = function(a) {
        var b = " ";
        null == b && (b = ".");
        var c = a + "";
        if (1E6 > a) {
            if (1E3 > a) return c;
            if (1E4 > a) return y.substr(c, 0, 1) + b + y.substr(c, 1, null);
            if (1E5 > a) return y.substr(c, 0, 2) + b + y.substr(c, 2, null);
            if (1E6 > a) return y.substr(c, 0, 3) + b + y.substr(c, 3, null)
        } else {
            if (1E7 > a) return y.substr(c, 0, 1) + b + y.substr(c, 1, 3) + b + y.substr(c, 4, null);
            if (1E8 > a) return y.substr(c, 0, 2) + b + y.substr(c, 2, 3) + b + y.substr(c, 5, null);
            if (1E9 > a) return y.substr(c, 0, 3) + b + y.substr(c, 3, 3) + b + y.substr(c, 6,
                null)
        }
        return 1E10 > a ? y.substr(c, 0, 1) + b + y.substr(c, 1, 3) + b + y.substr(c, 4, 3) + b + y.substr(c, 7, null) : null
    };
    nd.__name__ = "FF";
    nd.prototype = {
        i: nd
    };
    Qf.__name__ = "100";
    Qf.__isInterface__ = !0;
    Pf.__name__ = "101";
    Pf.yy = function(a) {
        for (var b = 0, c, d = 0, e = a.length; d < e;) {
            c = y.ki(a, d++);
            if (127 >= c) c = 1;
            else if (2047 >= c) c = 2;
            else if (65535 >= c) c = 3;
            else if (1114111 >= c) c = 4;
            else throw 0;
            b += c
        }
        return b
    };
    Y.__name__ = "102";
    Y.So = function() {
        return null
    };
    Y.get = function(a) {
        return Y.Wk().getItem(a)
    };
    Y.set = function(a, b) {
        Y.Wk().setItem(a, b)
    };
    Y.Nv =
        function() {
            return null != Y.get("bugsnagid")
        };
    Y.Cg = function(a) {
        Y.Wk().removeItem(a)
    };
    Y.Wk = function() {
        if (null != Y.zg) return Y.zg;
        Y.zg = Y.So();
        if (null != Y.zg) return Y.zg;
        Y.zg = Tf.Gu();
        return Y.zg
    };
    md.__name__ = "103";
    md.__isInterface__ = !0;
    of.__name__ = "104";
    of.prototype = {
        i: of
    };
    nf.__name__ = "105";
    nf.prototype = {
        i: nf
    };
    Yb.__name__ = "106";
    Yb.prototype = {
        A: function() {
            for (var a = this.controllers, b; null != a;) b = a.next, a.A(), a = b
        },
        ua: function(a) {
            null != this.controllers && (a.next = this.controllers);
            this.controllers = a;
            a.object =
                this
        },
        detach: function(a) {
            if (this.controllers == a) this.controllers = this.controllers.next;
            else {
                for (var b = this.controllers; b.next != a;) b = b.next;
                b.next = a.next
            }
            a.next = null;
            a.object = null
        },
        nu: function(a) {
            for (var b = this.controllers; null != b;) {
                if (b.type == a) return b;
                b = b.next
            }
            return null
        },
        ln: function(a) {
            if (null == this.controllers || !this.It) return !1;
            for (var b = !1, c = this.controllers, d; null != c;) d = c.next, c.update(a) && (b = !0), c = d;
            return b
        },
        i: Yb
    };
    var Ba = xa.e6 = {
        Ub: !0,
        Kb: ["i0", "i1", "i2"]
    };
    Ba.i0 = {
        G: 0,
        N: "e6",
        toString: D
    };
    Ba.i1 = {
        G: 1,
        N: "e6",
        toString: D
    };
    Ba.i2 = {
        G: 2,
        N: "e6",
        toString: D
    };
    Ba.pc = [Ba.i0, Ba.i1, Ba.i2];
    ea.__name__ = "107";
    ea.__interfaces__ = [md];
    ea.prototype = {
        A: function() {
            null != this.object && (this.object.detach(this), this.object = null);
            this.repeat = null;
            this.type = -1;
            ea.Bn--
        },
        Ui: function() {
            this.Md = !0;
            0 != this.me && ea.$j--;
            this.me = !1;
            this.Mb = 0;
            this.yd = ea.Cn
        },
        update: function(a) {
            return this.me ? (this.Mb += a * this.bn, null == this.object ? !1 : this.ig(this.Mb)) : this.Md ? (this.Mb += a, this.Mb > ea.Cn && this.A(), !0) : !1
        },
        ig: function() {
            throw 0;
        },
        Sk: function() {
            var a =
                this.Mb + this.vw;
            if (this.repeat == Ba.i0) {
                var b = this.wc,
                    c = this.yd;
                return a < b ? b : a > c ? c : a
            }
            b = this.yd - this.wc;
            return 0 < b ? (c = (a - this.wc) / b, a = Math.floor(c), c -= a, this.repeat == Ba.i1 ? this.wc + c * b : 0 == (a & 1) ? this.wc + c * b : this.yd - c * b) : this.wc
        },
        i: ea
    };
    Xb.__name__ = "108";
    Xb.B = ea;
    Xb.prototype = v(ea.prototype, {
        A: function() {
            this.fj = this.ej = this.nd = null;
            ea.prototype.A.call(this)
        },
        play: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = -1);
            null == b && (b = 0);
            this.nd = a;
            this.Yi = b;
            this.nh = 0 > c ? a.frames.length - 1 : c;
            this.wc = this.nd.$d[b];
            this.yd =
                this.nd.$d[this.nh + 1];
            this.Mb = this.wc;
            this.Mb += d;
            1 != this.me && ea.$j++;
            this.me = !0;
            this.Md = !1;
            this.index = -1;
            this.lastIndex = b;
            this.ig(this.Mb)
        },
        ig: function() {
            var a = this.Sk(),
                b = this.nd.vf;
            if (1 == b) var c = this.lastIndex = 0;
            else if (a >= this.nd.Th) c = this.lastIndex = b - 1;
            else {
                if (0 < this.nd.rk) c = a / this.nd.rk | 0;
                else {
                    c = 0;
                    var d = this.nd.$d;
                    if (a >= d[this.lastIndex] && a <= d[this.lastIndex + 1]) c = this.lastIndex;
                    else if (16 > b)
                        for (var e = 0; e <= b;) {
                            if (d[e] >= a) {
                                c = e - 1;
                                break
                            }++e
                        } else c = O.pt(d, a, b - 1), 0 > c && (c = ~c, --c)
                }
                this.lastIndex = c
            }
            c <
                this.Yi ? c = this.Yi : c > this.nh && (c = this.nh);
            c != this.index && (this.index = c, this.fj(this.nd.values[c], c, a), c >= this.nh && (this.ej(), this.repeat == Ba.i0 && (0 < this.Xd-- ? (this.Mb = this.wc, this.index = -1, this.lastIndex = this.Yi, this.ig(this.Mb)) : (this.Ui(), this.nd = null))));
            return !0
        },
        i: Xb
    });
    var ya = xa.e7 = {
        Ub: !0,
        Kb: "i0 i1 i2 i3 i4 i5".split(" ")
    };
    ya.i0 = {
        G: 0,
        N: "e7",
        toString: D
    };
    ya.i1 = {
        G: 1,
        N: "e7",
        toString: D
    };
    ya.i2 = {
        G: 2,
        N: "e7",
        toString: D
    };
    ya.i3 = {
        G: 3,
        N: "e7",
        toString: D
    };
    ya.i4 = {
        G: 4,
        N: "e7",
        toString: D
    };
    ya.i5 = {
        G: 5,
        N: "e7",
        toString: D
    };
    ya.pc = [ya.i0, ya.i1, ya.i2, ya.i3, ya.i4, ya.i5];
    mf.__name__ = "10A";
    mf.prototype = {
        i: mf
    };
    lf.__name__ = "10B";
    lf.B = ea;
    lf.prototype = v(ea.prototype, {
        A: function() {
            this.rh = null;
            ea.prototype.A.call(this)
        },
        ig: function(a) {
            var b = this.Sk(),
                c = this.data.$d,
                d;
            if (b <= c[0]) var e = d = this.lastIndex = b = 0;
            else if (b >= c[this.data.vf - 1]) b = 0, e = d = this.lastIndex = this.data.vf - 1;
            else if (b > c[this.lastIndex]) {
                for (d = this.lastIndex + 1; b >= c[d];) this.lastIndex = d, ++d;
                e = this.lastIndex;
                b = (b - c[e]) / (c[d] - c[e])
            } else if (b < c[this.lastIndex]) {
                for (d = this.lastIndex -
                    1; b <= c[d];) this.lastIndex = d, --d;
                e = d;
                d = this.lastIndex;
                b = (b - c[e]) / (c[d] - c[e])
            } else b = 0, e = d = this.lastIndex;
            this.ox(e, d, b);
            this.Wy(this.zp);
            return a > this.yd && this.repeat == Ba.i0 ? (null != this.rh && (this.rh(), this.rh = null), this.Ui(), !1) : !0
        },
        ox: function(a, b, c) {
            var d = this.data.parameters,
                e = this.zp;
            if (a != b) {
                c = this.data.Tg[a](c);
                var f = this.data.Gy[a],
                    g = f;
                null == f && (g = 0);
                f = g;
                0 != (f & 1) && (g = d[6 * a], e.Gh = g + (d[6 * b] - g) * c);
                0 != (f & 2) && (g = d[6 * a + 1], e.Qq = g + (d[6 * b + 1] - g) * c);
                0 != (f & 4) && (g = d[6 * a + 2], e.rotation = g + (d[6 * b + 2] - g) * c);
                0 !=
                    (f & 8) && (g = d[6 * a + 3], e.qr = g + (d[6 * b + 3] - g) * c);
                0 != (f & 16) && (g = d[6 * a + 4], e.rr = g + (d[6 * b + 4] - g) * c);
                0 != (f & 32) && (a = d[6 * a + 5], e.alpha = a + (d[6 * b + 5] - a) * c)
            } else e.Gh = d[6 * b + ya.i0.G], e.Qq = d[6 * b + ya.i1.G], e.rotation = d[6 * b + ya.i2.G], e.qr = d[6 * b + ya.i3.G], e.rr = d[6 * b + ya.i4.G], e.alpha = d[6 * b + ya.i5.G]
        },
        i: lf
    });
    ld.__name__ = "10D";
    ld.B = ea;
    ld.prototype = v(ea.prototype, {
        A: function() {
            this.Ud = this.zd = this.Tg = null;
            ea.prototype.A.call(this)
        },
        kd: function(a, b, c, d, e) {
            this.key = a;
            this.Sx = b;
            this.Ao = c;
            this.Tg = e;
            this.wc = this.Mb = 0;
            this.yd = d;
            1 != this.me &&
                ea.$j++;
            this.me = !0;
            this.Md = !1
        },
        stop: function() {
            this.zd = this.Ud = null;
            this.Ui()
        },
        ig: function(a) {
            if (a >= this.yd && this.repeat == Ba.i0) return this.Ui(), this.zd(this.key, this.Ao), this.Ud(this.key), !1;
            a = this.Sx;
            a += (this.Ao - a) * this.Tg((this.Sk() - this.wc) / (this.yd - this.wc));
            this.zd(this.key, a);
            return !0
        },
        i: ld
    });
    $b.__name__ = "10E";
    $b.prototype = {
        Md: function() {
            this.rb = null
        },
        getContext: function() {
            throw 0;
        },
        sx: function(a) {
            this.rb = a;
            a.lw(this);
            var b = this.getContext();
            null != b && a.sh(b)
        },
        hc: function() {
            var a = this.size,
                b = new I;
            b.b = a.b;
            b.a = a.a;
            return b
        },
        jv: function() {
            var a = this.viewport;
            return 0 < a.b || 0 < a.a || 1 > a.f ? !0 : 1 > a.d
        },
        cp: function() {
            this.qn || (this.qn = !0, this.vh.b = this.size.b * this.viewport.b + .5 | 0, this.vh.a = this.size.a * this.viewport.a + .5 | 0, this.vh.f = this.size.b * this.viewport.f | 0, this.vh.d = this.size.a * this.viewport.d | 0);
            var a = this.vh,
                b = new pc;
            b.b = a.b;
            b.a = a.a;
            b.f = a.f;
            b.d = a.d;
            return b
        },
        resize: function(a, b) {
            var c = this.size;
            c.b = a;
            c.a = b;
            this.qn = !1;
            this.oo()
        },
        oo: function() {
            throw 0;
        },
        sh: function() {
            null != this.rb && this.rb.sh(this.getContext())
        },
        i: $b
    };
    eb.__name__ = "10F";
    eb.Ob = function() {};
    eb.B = $b;
    eb.prototype = v($b.prototype, {
        Zn: function() {},
        resize: function(a, b) {
            $b.prototype.resize.call(this, a, b);
            this.Oa(this.hc())
        },
        i: eb
    });
    ib.__name__ = "110";
    ib.prototype = {
        lx: function() {
            ib.current = this
        },
        bu: function(a) {
            if (!this.Gx) {
                var b = this.qj;
                null != b && null != b.getContext() && 0 != b.hc().b && (this.xy(), this.qd = 1, this.Jm(this.pi = hb.Fn.ik), this.cm(), this.cu(this.so.Ht(a, this.Yp)), null != this.Kf && this.Hh(null), this.em())
            }
        },
        clear: function() {},
        xy: function() {
            this.Wd = this.fp();
            Aa.qp(this.Wd, this.Ev);
            Aa.gi(this.yk, this.Wd);
            null != this.Qe && Aa.cy(this.yk, this.Qe.Xu())
        },
        cu: function(a) {
            var b = a.c,
                c = 0;
            for (a = a.g; c < a;) this.du(b[c++])
        },
        du: function(a) {
            var b = a.Ga;
            b.active && (this.uo = a, this.Aj(a), 0 != this.qd && b.Bk(this))
        },
        fp: function() {
            throw 0;
        },
        createTexture: function(a, b, c) {
            var d = new $e;
            d.Fi = this.Bw;
            d.Wh = this.Ar;
            d.nx(b, !this.ir || this.qu);
            null != c && d.fx(c.Qo()); - 1 != a && Z.Pw(a, d);
            return d
        },
        au: function(a) {
            Z.Vb(a) && (Z.get(a).A(), Z.ty(a))
        },
        cm: function() {},
        em: function() {},
        xo: function() {},
        yo: function() {},
        sh: function() {},
        lw: function(a) {
            this.qj = a
        },
        ew: function() {
            this.so.Pg = !0
        },
        Aj: function(a) {
            if (0 != this.qc) {
                if (0 != (this.qc & 1)) {
                    var b = a.Zd[wa.i0.G];
                    b = null != b ? b.alpha : 1;
                    b != this.qd && (this.qd = b)
                }
                0 != (this.qc & 2) && (b = a.Zd[wa.i1.G], b = null != b ? b.ik : hb.Fn.ik, b != this.pi && (this.pi = b, this.Jm(this.pi)));
                0 != (this.qc & 4) && (b = a.Zd[wa.i2.G], null != b ? null != b.Br && b.Br != this.Kf && this.Hh(b.Br, null != b.U) : null != this.Kf && this.Hh(null));
                0 != (this.qc & 8) && (a = a.Zd[wa.i3.G], null != a ? this.Xq(a.Ct) : null != this.wk && this.Xq(null))
            }
        },
        Jm: function() {},
        Hh: function(a) {
            this.Kf = a
        },
        Xq: function(a) {
            this.wk = a
        },
        i: ib
    };
    Ua.__name__ = "111";
    Ua.__interfaces__ = [md];
    Ua.B = Ac;
    Ua.prototype = v(Ac.prototype, {
        A: function() {},
        Bk: function() {
            throw 0;
        },
        i: Ua
    });
    vc.__name__ = "112";
    vc.B = Ua;
    vc.prototype = v(Ua.prototype, {
        uu: function() {
            this.ni = !0;
            return this.color
        },
        Ih: function(a) {
            this.ni = !0;
            this.color = a
        },
        A: function() {
            Ua.prototype.A.call(this);
            this.He = null
        },
        Bk: function(a) {
            a.xo(this);
            this.ni = !1
        },
        i: vc
    });
    Zb.__name__ = "113";
    Zb.B = Ua;
    Zb.prototype = v(Ua.prototype, {
        Zq: function(a) {
            if (this.frame !=
                a) {
                this.frame = a;
                var b = this.sb.Gc;
                if (b.Zf) a = b.Dl.c[a];
                else {
                    b = b.El;
                    var c = b.Ba,
                        d = c.Xc[73856093 * a & c.Zc];
                    if (-1 == d) a = -2147483648;
                    else if (c = c.c, c[d] == a) a = c[d + 1];
                    else {
                        var e = -2147483648;
                        for (d = c[d + 2]; - 1 != d;) {
                            if (c[d] == a) {
                                e = c[d + 1];
                                break
                            }
                            d = c[d + 2]
                        }
                        a = e
                    }
                    a = -2147483648 == a ? null : b.cf[a]
                }
                a = this.sb.Wh ? a.lr : a.Yx;
                b = this.Ja;
                b.b = a.b;
                b.a = a.a;
                b.f = a.f;
                b.d = a.d
            }
        },
        bc: function(a) {
            this.sb = a;
            this.Ja.b = 0;
            this.Ja.a = 0;
            this.Ja.f = a.P.b;
            this.Ja.d = a.P.a;
            a.Wh || (this.Ja.f /= a.ve.b, this.Ja.d /= a.ve.a);
            this.frame = -1;
            this.j = 0;
            this.yh = a.Fi;
            return this
        },
        A: function() {
            Ua.prototype.A.call(this);
            this.sb = this.Ja = null
        },
        Bk: function(a) {
            this.sb.Wf && a.yo(this)
        },
        i: Zb
    });
    kd.__name__ = "114";
    kd.B = ib;
    kd.prototype = v(ib.prototype, {
        clear: function() {
            var a = this.qj;
            if (null != a && null != this.context) {
                var b = a.hc();
                this.Oq();
                var c = this.context;
                c.globalAlpha = 1;
                c.globalCompositeOperation = "source-over";
                this.ih = -1;
                var d = this.Sm;
                d != this.Lf && (this.Lf = d, c[this.Tm] = d);
                c.clearRect(0, 0, b.b, b.a);
                0 < a.color.d && (c.fillStyle = ag.or(a.color), c.fillRect(0, 0, b.b, b.a))
            }
        },
        cm: function() {
            ib.prototype.cm.call(this);
            this.Gq();
            var a = this.qj;
            if (a.jv()) {
                a = a.cp();
                var b = new Path2D;
                b.rect(a.b, a.a, a.f, a.d);
                this.context.clip(b)
            }
        },
        em: function() {
            for (ib.prototype.em.call(this); 0 < this.Ij;) this.mm()
        },
        xo: function(a) {
            a.ni && (a.He = ag.or(a.uu()));
            var b = this.context,
                c = this.Sm;
            c != this.Lf && (this.Lf = c, b[this.Tm] = c);
            this.Te != this.Pi && (this.Pi = this.Te, b.globalCompositeOperation = this.Te);
            this.qd != this.ih && (this.ih = this.qd, b.globalAlpha = this.qd);
            c = this.uo.X;
            this.setTransform(c, b);
            c = c.scale;
            b.fillStyle = a.He;
            b.fillRect(0, 0, c.b, c.a)
        },
        yo: function(a) {
            var b =
                this.context,
                c = this.Sm;
            c != this.Lf && (this.Lf = c, b[this.Tm] = c);
            this.Te != this.Pi && (this.Pi = this.Te, b.globalCompositeOperation = this.Te);
            this.qd != this.ih && (this.ih = this.qd, b.globalAlpha = this.qd);
            c = a.sb.bb;
            var d = a.Ja,
                e = this.uo.X;
            this.setTransform(e, b);
            var f = e.scale;
            e = f.b;
            f = f.a;
            var g = d.b,
                k = d.a,
                m = d.f,
                l = d.d;
            null != this.wk && (c = this.kt(a), k = g = 0);
            var u = a.j;
            if (0 == (u & 12)) 0 > e || 0 > f ? (b.scale(0 > e ? -1 : 1, 0 > f ? -1 : 1), b.drawImage(c, g, k, m, l, 0, 0, 0 > e ? -e : e, 0 > f ? -f : f)) : b.drawImage(c, g, k, m, l, 0, 0, e, f);
            else if (b = B(b, b.drawImage), 4 ==
                (u & 12)) {
                d = a.Tj % 1;
                u = a.Uj % 1;
                0 > d && (d = 1 + d);
                0 > u && (u = 1 + u);
                var r = 0;
                0 != d && (r = 1);
                0 != u && (r |= 2);
                switch (r) {
                    case 0:
                        b(c, g, k, m, l, 0, 0, e, f);
                        break;
                    case 1:
                        b(c, g + d * m, k, m, l, 0, 0, e, f);
                        b(c, g, k, m * d, l, e * (1 - d), 0, e * d, f);
                        break;
                    case 2:
                        b(c, g, k + u * l, m, l, 0, 0, e, f);
                        b(c, g, k, m, l * u, 0, f * (1 - u), e, f * u);
                        break;
                    case 3:
                        b(c, g + d * m, k + u * l, m, l, 0, 0, e, f), b(c, g, k + l * u, m * d, l * (1 - u), e * (1 - d), 0, e * d, f * (1 - u)), b(c, g + d * m, k, m * (1 - d), l * u, 0, f * (1 - u), e * (1 - d), f * u), b(c, g, k, m * d, l * u, e * (1 - d), f * (1 - u), e * d, f * u)
                }
            } else if (8 == (u & 12)) {
                u = a.Vj;
                var q = a.Wj;
                r = e / u;
                for (var n = f / q, t = u | 0,
                        v = q | 0, w = 0, y = 0; y < v;) {
                    ++y;
                    for (var x = a = 0; x < t;) ++x, b(c, g, k, m, l, a, w, r, n), a += r;
                    w += n
                }
                m = k = g = 0;
                if (0 < u % 1)
                    for (m = 1, l = e - t * r, g = e / u * t, a = k = 0; a < v;) ++a, b(c, d.b, d.a, l / r * d.f, d.d, g, k, l, f / q), k += f / q;
                if (0 < q % 1)
                    for (++m, a = f - v * n, g = 0, k = f / q * v, l = 0; l < t;) ++l, b(c, d.b, d.a, d.f, a / n * d.d, g, k, e / u, a), g += e / u;
                2 == m && (l = e - t * r, a = f - v * n, b(c, d.b, d.a, l / r * d.f, a / n * d.d, g, k, l, a))
            } else if (12 == (u & 12)) {
                d = 1 / a.Vj;
                u = 1 / a.Wj;
                var z = 1 / d | 0;
                y = 1 / u | 0;
                var D = 1 - z * d;
                x = 1 - y * u;
                r = this.hy;
                r.Bc(3 * z + 12);
                r.g = 0;
                n = this.iy;
                n.Bc(18 * y + 6);
                v = t = n.g = 0;
                w = a.Tj % 1;
                0 > w && (w = 1 + w);
                var C = w;
                for (q =
                    0; q < z;) {
                    w = C;
                    var A = C + d;
                    1 < A ? (r.c[r.g++] = w, r.c[r.g++] = 1 - w, r.c[r.g++] = 1, r.c[r.g++] = 0, r.c[r.g++] = A - 1, r.c[r.g++] = 0, t += 6) : (r.c[r.g++] = w, r.c[r.g++] = d, r.c[r.g++] = 0, t += 3);
                    ++q;
                    C += d;
                    C %= 1
                }
                0 < D && (w = C, A = C + D, 1 < A ? (r.c[r.g++] = w, r.c[r.g++] = 1 - w, r.c[r.g++] = 1, r.c[r.g++] = 0, r.c[r.g++] = A - 1, r.c[r.g++] = 0, t += 6) : (r.c[r.g++] = w, r.c[r.g++] = D, r.c[r.g++] = 0, t += 3));
                a = a.Uj % 1;
                0 > a && (a = 1 + a);
                C = a;
                for (q = 0; q < y;) w = C, A = C + u, 1 < A ? (n.c[n.g++] = w, n.c[n.g++] = 1 - w, n.c[n.g++] = 1, n.c[n.g++] = 0, n.c[n.g++] = A - 1, n.c[n.g++] = 0, v += 6) : (n.c[n.g++] = w, n.c[n.g++] = u, n.c[n.g++] =
                    0, v += 3), ++q, C += u, C %= 1;
                0 < x && (w = C, A = C + x, 1 < A ? (n.c[n.g++] = w, n.c[n.g++] = 1 - w, n.c[n.g++] = 1, n.c[n.g++] = 0, n.c[n.g++] = A - 1, n.c[n.g++] = 0, v += 6) : (n.c[n.g++] = w, n.c[n.g++] = x, n.c[n.g++] = 0, v += 3));
                q = a = 0;
                for (var E; q < v;) {
                    C = n.c[q++];
                    var F = n.c[q++];
                    var H = n.c[q++];
                    x = F / u;
                    for (E = w = 0; E < t;) z = r.c[E++], D = r.c[E++], A = r.c[E++], y = D / d, b(c, g + w, k + a, m * y, l * x, e * z, f * C, e * D, f * F), w = m * y * A;
                    a = l * x * H
                }
            }
        },
        fp: function() {
            var a = this.Qe;
            if (null == a) return Aa.mf(this.Wd), this.Wd;
            Aa.Uq(this.Wd, a.state.size.b / 2, a.state.size.a / 2, 0);
            var b = this.qj.cp();
            Aa.jo(this.Wd,
                b.f / a.state.size.b, b.d / a.state.size.a, 1);
            a = this.Wd;
            a.d += b.b;
            a.C += b.a;
            a.Qa = a.Qa;
            return this.Wd
        },
        sh: function(a) {
            this.context = a
        },
        Jm: function(a) {
            this.Te = this.Dt[a.G]
        },
        Hh: function(a, b) {
            null == b && (b = !1);
            var c = this.Kf;
            ib.prototype.Hh.call(this, a);
            var d = this.context;
            if (null == a) 0 != this.Ij && this.mm();
            else {
                a != c && null != c && this.mm();
                this.Gq();
                this.Oq();
                a = this.Kf;
                if (b) try {
                    var e = new Path2D;
                    e.rect(a[0].b, a[0].a, a[2].b - a[1].b, a[2].a - a[3].a);
                    d.clip(e);
                    return
                } catch (f) {}
                d.strokeStyle = this.oy;
                d.lineWidth = 0;
                d.beginPath();
                d.moveTo(a[0].b, a[0].a);
                b = a.length;
                for (e = 0; ++e < b;) d.lineTo(a[e].b, a[e].a);
                d.stroke();
                d.clip()
            }
        },
        setTransform: function(a, b) {
            var c = a.ya;
            a = a.translate;
            if (null == this.Qe) b.setTransform(c.b, c.d, c.a, c.e, a.b, a.a);
            else {
                var d = this.gy;
                d.b = c.b;
                d.e = c.d;
                d.a = c.a;
                d.s = c.e;
                d.d = a.b;
                d.C = a.a;
                c = this.Rt;
                a = this.yk;
                var e = d.b,
                    f = d.a,
                    g = d.d,
                    k = d.e,
                    m = d.s;
                d = d.C;
                var l = a.b,
                    n = a.a;
                c.b = l * e + n * k;
                c.a = l * f + n * m;
                c.d = l * g + n * d + a.d;
                l = a.e;
                n = a.s;
                c.e = l * e + n * k;
                c.s = l * f + n * m;
                c.C = l * g + n * d + a.C;
                b.setTransform(c.b, c.e, c.a, c.s, c.d, c.C)
            }
        },
        kt: function(a) {
            var b =
                a.Ja,
                c = b.b | 0,
                d = b.a | 0,
                e = b.f | 0,
                f = b.d | 0;
            b = this.dy;
            null == b && (b = this.dy = window.document.createElement("canvas"));
            if (b.width < e || b.height < f) b.width = e, b.height = f;
            var g = b.getContext("2d", null);
            g.drawImage(Pe.jy(a.sb.bb), c, d, e, f, 0, 0, e, f);
            a = g.getImageData(0, 0, e, f);
            c = a.data;
            d = c.length;
            e = 0;
            var k = this.wk;
            f = k.Kw;
            var l = k.av,
                n = k.st,
                u = k.ht,
                r = k.Lw,
                q = k.bv,
                t = k.tt;
            k = k.it;
            if (1 != u && 0 != k)
                for (; e < d;) c[e] = c[e] * f + r, c[e + 1] = c[e + 1] * l + q, c[e + 2] = c[e + 2] * n + t, c[e + 3] = c[e + 3] * u + k, e += 4;
            else
                for (; e < d;) c[e] = c[e] * f + r, c[e + 1] = c[e + 1] * l + q, c[e + 2] =
                    c[e + 2] * n + t, e += 4;
            g.putImageData(a, 0, 0);
            return b
        },
        Oq: function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0)
        },
        Gq: function() {
            this.context.save();
            this.Ij++
        },
        mm: function() {
            this.context.restore();
            this.Ij--
        },
        i: kd
    });
    da.__name__ = "115";
    da.px = function(a) {
        a.style.setProperty("image-rendering", "pixelated");
        a.style.setProperty("image-rendering", "-moz-crisp-edges");
        a.style.setProperty("image-rendering", "-o-crisp-edges");
        a.style.setProperty("-ms-interpolation-mode", "nearest-neighbor")
    };
    da.B = eb;
    da.prototype = v(eb.prototype, {
        Zn: function() {
            this.Ho = !0;
            this.yq();
            window.clearInterval(this.zq);
            this.zq = window.setInterval(B(this, this.yq), 100)
        },
        Ny: function() {
            if (this.ll) return 0 == window.orientation ? "Portrait" : "Landscape";
            try {
                switch (window.screen.orientation.type) {
                    case "landscape-primary":
                    case "landscape-secondary":
                        return "Landscape";
                    case "portrait-primary":
                    case "portrait-secondary":
                        return "Portrait";
                    default:
                        return null
                }
            } catch (a) {
                return null
            }
        },
        tv: function(a, b) {
            null == b && (b = !1);
            null == a && (a = !0);
            this.context = this.canvas.getContext("2d", {
                alpha: a
            });
            b && da.px(this.canvas);
            this.sh()
        },
        Xm: function(a) {
            null == a && (a = .9);
            try {
                return this.canvas.toDataURL("image/jpeg", a)
            } catch (b) {
                return null
            }
        },
        Md: function() {
            eb.prototype.Md.call(this);
            this.canvas.remove();
            for (var a = 0, b = this.Ri; a < b.length;) {
                var c = b[a];
                ++a;
                c.target.removeEventListener(c.type, c.listener)
            }
            this.Ri = null;
            window.clearInterval(this.zq);
            window.clearTimeout(this.Iy)
        },
        getContext: function() {
            return this.context
        },
        lv: function() {
            window.oncontextmenu = function() {
                return !1
            }
        },
        Jv: function() {
            return 1 ==
                this.lk(window.document, null, ["fullscreenEnabled", "fullScreenEnabled"])
        },
        oo: function() {
            if (!this.Sg)
                if (this.Ho) {
                    this.canvas.width = window.innerWidth * this.fc | 0;
                    this.canvas.height = window.innerHeight * this.fc | 0;
                    var a = this.canvas.style;
                    a.left = "0px";
                    a.top = "0px";
                    a.width = "100%";
                    a.height = "100%";
                    a.position = "absolute";
                    this.getContext() instanceof WebGLRenderingContext && this.getContext().viewport(0, 0, this.canvas.width, this.canvas.height);
                    window.scrollTo(0, 1)
                } else {
                    a = this.size.b | 0;
                    var b = this.size.a | 0;
                    this.canvas.width =
                        a;
                    this.canvas.height = b;
                    var c = this.canvas.style;
                    c.width = "" + a + "px";
                    c.height = "" + b + "px";
                    c.position = "absolute"
                }
        },
        yq: function() {
            var a = window.innerWidth * this.fc | 0,
                b = window.innerHeight * this.fc | 0;
            if (this.Al.b != a || this.Al.a != b) {
                var c = this.Al;
                c.b = a;
                c.a = b;
                eb.Ob(window.innerWidth | 0, window.innerHeight | 0);
                this.resize(a, b)
            }
        },
        lk: function(a, b, c) {
            b = [b];
            null != c && (b = c);
            for (c = 0; c < b.length;) {
                var d = b[c];
                ++c;
                for (var e = 0, f = ["webkit", "moz", "ms", "o", ""]; e < f.length;) {
                    var g = f[e];
                    ++e;
                    var k = d;
                    "" != g && (k = y.substr(d, 0, 1).toUpperCase() +
                        y.substr(d, 1, null));
                    k = g + k;
                    if ("undefined" !== typeof a[k]) return "function" === typeof a[k] ? a[k]() : a[k]
                }
            }
            return null
        },
        addListener: function(a, b, c, d) {
            null == c && (c = !1);
            if (c) {
                c = 0;
                for (var e = ["webkit", "moz", "ms", "o", ""]; c < e.length;) {
                    var f = e[c];
                    ++c;
                    this.Ri.push({
                        target: a,
                        type: f + b,
                        listener: d
                    });
                    a.addEventListener(f + b, d)
                }
            } else this.Ri.push({
                target: a,
                type: b,
                listener: d
            }), a.addEventListener(b, d)
        },
        cv: function() {
            var a = window.document,
                b = window,
                c = a.createElement("div");
            c.id = "ppi";
            c.style.height = "1in";
            c.style.width = "1in";
            a.body.appendChild(c);
            da.xe = a.getElementById("ppi").offsetWidth * da.$h | 0;
            a.body.removeChild(c);
            a = b.screen.width;
            c = b.screen.height;
            if (3400 < a * da.$h) da.xe = 1.5 * da.xe | 0;
            else if (!(192 >= da.xe && 1280 <= a && null == b.orientation)) {
                b = [375, 812, 3, 458, 288, 414, 736, 3, 401, 288, 375, 667, 2, 326, 192, 320, 568, 2, 326, 192, 320, 480, 2, 326, 192, 320, 480, 1, 163, 96, 360, 640, 4, 538, 384, 384, 640, 2, 318, 192, 360, 740, 4, 529, 384, 360, 740, 4, 568, 384, 360, 640, 4, 534, 384, 360, 640, 4, 577, 384, 360, 640, 3, 441, 288, 360, 640, 1.5, 256, 144, 360, 640, 2, 306, 192, 320, 533, 1.5,
                    233, 144, 320, 533, 1.5, 217, 144, 360, 600, 2, 316, 192, 360, 740, 4, 521, 384, 360, 640, 4, 515, 384, 360, 640, 3, 386, 288, 360, 640, 2, 267, 192, 400, 640, 2, 285, 192, 360, 640, 3, 445, 288, 384, 640, 2, 320, 192, 432, 768, 2.5, 367, 240, 320, 480, 2.4, 332, 220, 320, 480, 1.5, 217, 144, 320, 480, 2, 294, 192, 320, 480, 1.5, 252, 144, 412, 690, 3.5, 493, 336, 360, 640, 3, 468, 288, 320, 480, 3, 341, 288, 360, 598, 3, 424, 288, 360, 640, 3, 443, 288, 360, 640, 2, 342, 192, 360, 640, 1.5, 275, 144, 393, 786, 2.75, 403, 264, 360, 640, 3, 401, 288, 360, 640, 3, 373, 288, 390, 695, 2, 294, 177, 504, 504, 3, 453, 274, 390, 390,
                    1.8, 294, 177, 346, 346, 2, 328, 192, 360, 640, 2, 295, 192, 384, 640, 2, 355, 192, 360, 480, 1, 187, 96, 320, 480, 1.5, 165, 144, 1024, 1366, 2, 265, 192, 768, 1024, 2, 264, 192, 768, 1024, 1, 132, 96, 768, 1024, 2, 326, 192, 768, 1024, 1, 163, 96, 800, 1280, 1, 149, 96, 800, 1280, 1, 170, 96, 600, 1024, 1, 170, 96, 800, 1280, 2, 300, 192, 1024, 2, 281, 192, 600, 960, 2, 323, 192, 604, 966, 1.325, 216, 127, 600, 960, 2, 273, 192, 800, 1280, 1.5, 254, 144, 480, 800, 1.5, 216, 144, 600, 1024, 1, 167, 96, 1024, 1440, 1.0714285714285714, 216, 144, 720, 1280, 1.5, 207, 144, 768, 1366, 1, 148, 96, 600, 1024, 1, 169, 96
                ];
                for (var d =
                        0, e = b.length; d < e;) {
                    var f = d++,
                        g = d++,
                        k = d++,
                        l = d++,
                        n = d++;
                    if (b[f] == a && b[g] == c && b[k] == da.$h && b[n] == da.xe) {
                        da.xe = b[l];
                        break
                    }
                }
            }
        },
        i: da
    });
    var Sa = xa.e8 = {
        Ub: !0,
        Kb: "i0 i1 i2 i3 i4 i5".split(" ")
    };
    Sa.i0 = {
        G: 0,
        N: "e8",
        toString: D
    };
    Sa.i1 = {
        G: 1,
        N: "e8",
        toString: D
    };
    Sa.i2 = {
        G: 2,
        N: "e8",
        toString: D
    };
    Sa.i3 = {
        G: 3,
        N: "e8",
        toString: D
    };
    Sa.i4 = {
        G: 4,
        N: "e8",
        toString: D
    };
    Sa.i5 = (Da = function(a, b) {
        var c = {
            G: 5,
            N: "e8",
            toString: D
        };
        c.src = a;
        c.dst = b;
        return c
    }, Da.be = ["src", "dst"], Da);
    Sa.pc = [Sa.i0, Sa.i1, Sa.i2, Sa.i3, Sa.i4];
    var Ha = xa.e9 = {
        Ub: !0,
        Kb: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    Ha.i0 = {
        G: 0,
        N: "e9",
        toString: D
    };
    Ha.i1 = {
        G: 1,
        N: "e9",
        toString: D
    };
    Ha.i2 = {
        G: 2,
        N: "e9",
        toString: D
    };
    Ha.i3 = {
        G: 3,
        N: "e9",
        toString: D
    };
    Ha.i4 = {
        G: 4,
        N: "e9",
        toString: D
    };
    Ha.i5 = {
        G: 5,
        N: "e9",
        toString: D
    };
    Ha.i6 = {
        G: 6,
        N: "e9",
        toString: D
    };
    Ha.i7 = {
        G: 7,
        N: "e9",
        toString: D
    };
    Ha.pc = [Ha.i0, Ha.i1, Ha.i2, Ha.i3, Ha.i4, Ha.i5, Ha.i6, Ha.i7];
    var Ia = xa.eA = {
        Ub: !0,
        Kb: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    Ia.i0 = {
        G: 0,
        N: "eA",
        toString: D
    };
    Ia.i1 = {
        G: 1,
        N: "eA",
        toString: D
    };
    Ia.i2 = {
        G: 2,
        N: "eA",
        toString: D
    };
    Ia.i3 = {
        G: 3,
        N: "eA",
        toString: D
    };
    Ia.i4 = {
        G: 4,
        N: "eA",
        toString: D
    };
    Ia.i5 = {
        G: 5,
        N: "eA",
        toString: D
    };
    Ia.i6 = {
        G: 6,
        N: "eA",
        toString: D
    };
    Ia.i7 = {
        G: 7,
        N: "eA",
        toString: D
    };
    Ia.pc = [Ia.i0, Ia.i1, Ia.i2, Ia.i3, Ia.i4, Ia.i5, Ia.i6, Ia.i7];
    La.__name__ = "116";
    La.prototype = {
        collapse: function() {
            throw 0;
        },
        i: La
    };
    var wa = xa.eB = {
        Ub: !0,
        Kb: ["i0", "i1", "i2", "i3"]
    };
    wa.i0 = {
        G: 0,
        N: "eB",
        toString: D
    };
    wa.i1 = {
        G: 1,
        N: "eB",
        toString: D
    };
    wa.i2 = {
        G: 2,
        N: "eB",
        toString: D
    };
    wa.i3 = {
        G: 3,
        N: "eB",
        toString: D
    };
    wa.pc = [wa.i0, wa.i1, wa.i2, wa.i3];
    hb.__name__ = "117";
    hb.B = La;
    hb.prototype = v(La.prototype, {
        collapse: function() {
            return this
        },
        i: hb
    });
    uc.__name__ = "118";
    uc.B = La;
    uc.prototype = v(La.prototype, {
        collapse: function(a) {
            for (var b = 1, c, d = 0, e = a.M; d < e;) c = a.c[d++], b *= c.alpha;
            null == this.qk && (this.qk = new uc(this.alpha));
            this.qk.alpha = b;
            return this.qk
        },
        i: uc
    });
    gb.__name__ = "119";
    gb.prototype = {
        A: function() {
            this.ma = null
        },
        contains: function() {
            throw 0;
        },
        el: function() {},
        from: function() {},
        sn: function() {
            throw 0;
        },
        dn: function(a, b) {
            var c = Ib.ae(this.ma);
            a.Na(c, c);
            var d = b.ma;
            c = Yf.ky(c);
            d.b = c.b;
            d.a = c.a;
            d.f = c.f;
            b.ib = a.Lu() * this.ib
        },
        i: gb
    };
    Ab.__name__ = "11A";
    Ab.B =
        gb;
    Ab.prototype = v(gb.prototype, {
        A: function() {
            this.Fa = null;
            gb.prototype.A.call(this)
        },
        contains: function(a) {
            return qd.Wx(a, this.Fa)
        },
        el: function(a) {
            switch (a.type) {
                case 1:
                    var b = a.ma;
                    a = a.ib;
                    var c = this.Fa,
                        d = b.b - a,
                        e = b.a - a;
                    d < c.b ? c.b = d : d > c.f && (c.f = d);
                    e < c.a ? c.a = e : e > c.d && (c.d = e);
                    c = this.Fa;
                    d = b.b + a;
                    b = b.a + a;
                    d < c.b ? c.b = d : d > c.f && (c.f = d);
                    b < c.a ? c.a = b : b > c.d && (c.d = b);
                    break;
                case 2:
                    b = this.Fa, a = E.tb(a, Ab).Fa, a.b < b.b && (b.b = a.b), a.f > b.f && (b.f = a.f), a.a < b.a && (b.a = a.a), a.d > b.d && (b.d = a.d)
            }
            b = this.Fa;
            b = .5 * (b.f - b.b);
            a = this.Fa;
            a =
                .5 * (a.d - a.a);
            this.ma.b = this.Fa.b + b;
            this.ma.a = this.Fa.a + a;
            this.ib = Math.sqrt(b * b + a * a)
        },
        from: function(a) {
            var b = a.ma,
                c = a.ib;
            switch (a.type) {
                case 1:
                    this.Fa.b = b.b - c;
                    this.Fa.a = b.a - c;
                    this.Fa.f = b.b + c;
                    this.Fa.d = b.a + c;
                    break;
                case 2:
                    var d = this.Fa;
                    a = E.tb(a, Ab).Fa;
                    d.b = a.b;
                    d.a = a.a;
                    d.f = a.f;
                    d.d = a.d
            }
            d = this.ma;
            d.b = b.b;
            d.a = b.a;
            d.f = b.f;
            this.ib = c
        },
        sn: function(a) {
            var b = a.b,
                c = a.a;
            a = mc.gp(a);
            var d = this.Fa.b,
                e = this.Fa.a,
                f = this.Fa.f,
                g = this.Fa.d;
            if (1 == b) return f < a ? -1 : d > a ? 1 : 0;
            if (-1 == b) return d > -a ? -1 : f < -a ? 1 : 0;
            if (1 == c) return g < a ?
                -1 : e > a ? 1 : 0;
            if (-1 == b) return e > -a ? -1 : g < -a ? 1 : 0;
            var k = 0 | yc.Lj(d, e, b, c, a);
            k |= yc.Lj(f, e, b, c, a) << 1;
            k |= yc.Lj(d, g, b, c, a) << 2;
            k |= yc.Lj(f, g, b, c, a) << 3;
            return 15 == k ? -1 : 0 == k ? 1 : 0
        },
        dn: function(a, b) {
            gb.prototype.dn.call(this, a, b);
            b = E.tb(b, Ab).Fa;
            var c = new I,
                d = this.Fa;
            c.b = d.b + .5 * (d.f - d.b);
            d = this.Fa;
            c.a = d.a + .5 * (d.d - d.a);
            a.Na(c, c);
            b.b = c.b;
            b.a = c.a;
            b.f = c.b;
            b.d = c.a;
            if (0 < (a.D & 2)) c = a.ya, d = a.scale, a = .5 * d.b, d = .5 * d.a, 0 < c.b ? (b.b -= c.b * a, b.f += c.b * a) : (b.b += c.b * a, b.f -= c.b * a), 0 < c.a ? (b.b -= c.a * d, b.f += c.a * d) : (b.b += c.a * d, b.f -= c.a * d), 0 <
                c.d ? (b.a -= c.d * a, b.d += c.d * a) : (b.a += c.d * a, b.d -= c.d * a), 0 < c.e ? (b.a -= c.e * d, b.d += c.e * d) : (b.a += c.e * d, b.d -= c.e * d);
            else {
                c = a.ya;
                d = c.b;
                var e = c.a,
                    f = Math.sqrt(d * d + e * e);
                a = .5 * f;
                c = (d * c.e - e * c.d) / f * .5;
                e = Math.atan2(e, d);
                d = Math.cos(e);
                e = Math.sin(e);
                0 < d ? (b.b -= d * a, b.f += d * a) : (b.b += d * a, b.f -= d * a);
                0 < e ? (b.b -= e * c, b.f += e * c) : (b.b += e * c, b.f -= e * c);
                0 < -e ? (b.a -= -e * a, b.d += -e * a) : (b.a += -e * a, b.d -= -e * a);
                0 < d ? (b.a -= d * c, b.d += d * c) : (b.a += d * c, b.d -= d * c)
            }
        },
        i: Ab
    });
    kf.__name__ = "11B";
    kf.prototype = {
        reset: function(a) {
            this.state.ma.b = a.b + a.f / 2;
            this.state.ma.a =
                a.a + a.d / 2;
            this.state.size.b = a.f;
            this.state.size.a = a.d;
            this.state.rotation = 0;
            this.state.zoom = 1;
            this.ix()
        },
        Xu: function() {
            if (!this.en) return this.Ie;
            this.en = !1;
            var a = this.state.ma.b,
                b = this.state.ma.a;
            Aa.Uq(this.Ie, -a, -b, 0);
            Aa.jo(this.Ie, this.state.zoom, this.state.zoom, 1);
            Aa.yt(this.Ie, .0174532925199432 * this.state.rotation);
            var c = this.Ie;
            c.d += a;
            c.C += b;
            c.Qa = c.Qa;
            c = this.Ie;
            c.d += -a;
            c.C += -b;
            c.Qa = c.Qa;
            return this.Ie
        },
        Bu: function() {
            if (!this.pl) return this.ql;
            this.pl = !1;
            Aa.qp(this.Ie, this.ql);
            return this.ql
        },
        ix: function() {
            this.pl = this.en = !0;
            this.rb.ew()
        },
        i: kf
    };
    jf.__name__ = "11C";
    jf.prototype = {
        i: jf
    };
    jd.__name__ = "11D";
    jd.B = gb;
    jd.prototype = v(gb.prototype, {
        contains: function(a) {
            var b = a.b - this.ma.b;
            a = a.a - this.ma.a;
            return b * b + a * a <= this.ib * this.ib
        },
        el: function(a) {
            var b = a.ma.b - this.ma.b,
                c = a.ma.a - this.ma.a,
                d = a.ib - this.ib,
                e = b * b + c * c;
            d * d >= e ? 0 <= d && this.from(a) : (d = Math.sqrt(e), e = (d + a.ib - this.ib) / (2 * d), this.ma.b += e * b, this.ma.a += e * c, this.ib = (d + this.ib + a.ib) / 2)
        },
        from: function(a) {
            this.ma.b = a.ma.b;
            this.ma.a = a.ma.a;
            this.ib =
                a.ib
        },
        sn: function(a) {
            a = Rf.lu(this.ma.b, this.ma.a, a.b, a.a, mc.gp(a));
            return a <= -this.ib ? -1 : a >= this.ib ? 1 : 0
        },
        i: jd
    });
    hf.__name__ = "11E";
    hf.B = La;
    hf.prototype = v(La.prototype, {
        collapse: function() {
            return this
        },
        i: hf
    });
    gf.__name__ = "11F";
    gf.B = La;
    gf.prototype = v(La.prototype, {
        collapse: function() {
            return this
        },
        i: gf
    });
    ff.__name__ = "120";
    ff.prototype = {
        i: ff
    };
    ef.__name__ = "121";
    ef.prototype = {
        Ht: function(a, b) {
            this.Fg.g = 0;
            za.Dr = ma.Jt(a);
            za.ro = 0;
            b || null == this.rb.Qe ? ma.Yu(a, this.Fg) : (this.wh = (1 << this.hf.length) - 1, this.Pg &&
                (this.uy(), this.Pg = !1), a.hq(this, !1));
            za.Cr = this.Fg.g;
            za.ro = 1 - za.Cr / za.Dr;
            return this.Fg
        },
        Lv: function(a) {
            if (!isFinite(a.ib)) return !0;
            for (var b = 0, c = this.hf.length; b < c;) {
                var d = b++,
                    e = 1 << d;
                if (0 != (this.wh & e)) {
                    d = a.sn(this.hf[d]);
                    if (0 > d) return !1;
                    0 < d && (this.wh &= ~e)
                }
            }
            return !0
        },
        uy: function() {
            var a = this.rb.Qe;
            if (null != a && this.Pg) {
                this.Pg = !1;
                var b = a.state.size.b / 2,
                    c = a.state.size.a / 2,
                    d = this.pj[0],
                    e = this.pj[1],
                    f = this.pj[2],
                    g = this.pj[3];
                d.b = -b;
                d.a = -c;
                e.b = b;
                e.a = -c;
                f.b = -b;
                f.a = c;
                g.b = b;
                g.a = c;
                a = a.Bu();
                b = d.b;
                c = d.a;
                var k =
                    d.f;
                d.b = a.b * b + a.a * c + a.f * k + a.d;
                d.a = a.e * b + a.s * c + a.Va * k + a.C;
                d.f = a.ab * b + a.vb * c + a.k * k + a.Qa;
                b = e.b;
                c = e.a;
                k = e.f;
                e.b = a.b * b + a.a * c + a.f * k + a.d;
                e.a = a.e * b + a.s * c + a.Va * k + a.C;
                e.f = a.ab * b + a.vb * c + a.k * k + a.Qa;
                b = f.b;
                c = f.a;
                k = f.f;
                f.b = a.b * b + a.a * c + a.f * k + a.d;
                f.a = a.e * b + a.s * c + a.Va * k + a.C;
                f.f = a.ab * b + a.vb * c + a.k * k + a.Qa;
                b = g.b;
                c = g.a;
                k = g.f;
                g.b = a.b * b + a.a * c + a.f * k + a.d;
                g.a = a.e * b + a.s * c + a.Va * k + a.C;
                g.f = a.ab * b + a.vb * c + a.k * k + a.Qa;
                mc.zj(this.hf[0], Ib.ae(d), Ib.ae(e));
                mc.zj(this.hf[1], Ib.ae(g), Ib.ae(f));
                mc.zj(this.hf[2], Ib.ae(f), Ib.ae(d));
                mc.zj(this.hf[3],
                    Ib.ae(e), Ib.ae(g));
                this.U.b = d.b;
                this.U.a = d.a;
                this.U.f = g.b;
                this.U.d = g.a
            }
        },
        i: ef
    };
    var ob = xa.eC = {
        Ub: !0,
        Kb: ["i0", "i1", "i2"]
    };
    ob.i0 = {
        G: 0,
        N: "eC",
        toString: D
    };
    ob.i1 = {
        G: 1,
        N: "eC",
        toString: D
    };
    ob.i2 = {
        G: 2,
        N: "eC",
        toString: D
    };
    ob.pc = [ob.i0, ob.i1, ob.i2];
    id.__name__ = "122";
    id.prototype = {
        i: id
    };
    Pa.__name__ = "123";
    Pa.At = function() {
        for (var a = 0; 4 > a;) Pa.bi.c[a++].clear()
    };
    Pa.Cw = function(a) {
        null == Pa.bi && Pa.wv();
        var b = Pa.bi,
            c = Pa.Zs,
            d = a;
        for (c.clear(); null != d.parent;) {
            var e = d.parent;
            c.M == c.u && c.R();
            c.c[c.M++] = e;
            d = d.parent
        }
        d = 0;
        for (e = c.M; d < e;) ++d, c.c[--c.M].om(b);
        a.om(b);
        c.clear(!0);
        return b
    };
    Pa.wv = function() {
        Pa.bi = new W(4);
        for (var a = 0; 4 > a;) {
            ++a;
            var b = Pa.bi,
                c = new sb;
            b.g == b.u && b.R();
            b.c[b.g++] = c
        }
        Pa.Zs = new sb(16)
    };
    ua.__name__ = "124";
    ua.__interfaces__ = [dc];
    ua.B = Yb;
    ua.prototype = v(Yb.prototype, {
        A: function() {
            Yb.prototype.A.call(this);
            null != this.parent && this.parent.removeChild(this);
            this.L = this.parent = null;
            this.local.A();
            this.local = null;
            this.X.A();
            this.Je = this.X = null;
            this.Qw();
            null != this.Ga && this.Ga.A();
            this.client = this.Ga = null;
            this.j = 1024
        },
        Nm: function(a) {
            switch (a.G) {
                case 0:
                    this.j &= -4;
                    break;
                case 1:
                    this.j &= -3;
                    this.j |= 1;
                    break;
                case 2:
                    this.j |= 2, this.j &= -2
            }
            return a
        },
        hq: function(a, b) {
            if (!(0 < (this.j & 1))) {
                0 < (this.j & 2) && (b = !0);
                var c = a.wh;
                (b || a.Lv(this.Je)) && this.$k(a, b);
                a.wh = c
            }
        },
        $k: function() {
            throw 0;
        },
        Rf: function() {
            throw 0;
        },
        Zg: function() {
            for (var a = this; null != a.parent;) a = a.parent;
            return a
        },
        Dg: function(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            this.pn(b);
            b && (this.wf(), a && this.Eq())
        },
        pn: function() {
            0 < (this.j & 4) || (za.aq++, this.j &= -9, this.j |=
                32, null != this.parent ? this.X.qx(this.parent.X, this.local) : this.X.from(this.local))
        },
        wf: function() {
            null != this.parent && (this.parent.j |= 32);
            za.$p++
        },
        Eq: function() {
            null != this.parent && (this.parent.wf(), this.parent.Eq())
        },
        Vh: function(a) {
            var b = null == a;
            b ? a = Pa.Cw(this) : this.om(a);
            this.nm(a);
            b ? Pa.At() : this.yw(a);
            this.j &= -129
        },
        yu: function(a) {
            for (var b = this.Wc; null != b;) {
                if (b.state.type == a) return b.state;
                b = b.next
            }
            return null
        },
        Aj: function(a) {
            this.j |= 128;
            if (null == this.Wc) this.Wc = new id(a);
            else {
                for (var b = this.Wc,
                        c = a.type; null != b;) {
                    if (b.state.type == c) {
                        b.state = a;
                        return
                    }
                    b = b.next
                }
                b = new id(a);
                b.next = this.Wc;
                this.Wc = b
            }
        },
        Rw: function(a) {
            this.j |= 128;
            for (var b = this.Wc, c = null; null != b;) {
                if (b.state.type == a) {
                    null != c ? c.next = b.next : this.Wc = b.next;
                    b.next = null;
                    break
                }
                c = b;
                b = b.next
            }
        },
        Qw: function() {
            this.j |= 128;
            for (var a = this.Wc, b; null != a;) b = a.next, a.next = null, a = b;
            this.Wc = null
        },
        nm: function() {
            throw 0;
        },
        om: function(a) {
            for (var b = this.Wc, c; null != b;) {
                c = b.state;
                var d = a.c[c.Rm];
                d.M == d.u && d.R();
                d.c[d.M++] = c;
                b = b.next
            }
        },
        yw: function(a) {
            for (var b =
                    this.Wc; null != b;) --a.c[b.state.Rm].M, b = b.next
        },
        qo: function(a) {
            null == a && (a = this.We());
            switch (a) {
                case 1:
                    return new jd;
                case 2:
                    return new Ab
            }
        },
        We: function() {
            return ua.Kr
        },
        i: ua
    });
    Ta.__name__ = "125";
    Ta.B = ua;
    Ta.prototype = v(ua.prototype, {
        A: function() {
            ua.prototype.A.call(this);
            this.ka = null
        },
        $k: function(a, b) {
            for (var c = this.ka; null != c;) c.hq(a, b), c = c.L
        },
        Rf: function(a, b) {
            return ma.Rf(this, a, b)
        },
        appendChild: function(a) {
            if (null == this.ka) this.ka = a, a.L = null;
            else {
                for (var b = this.ka; null != b.L;) b = b.L;
                b.L = a
            }
            a.parent = this;
            this.oh++;
            return this
        },
        Rn: function(a, b) {
            if (0 == b) a.L = this.ka, this.ka = a;
            else {
                var c = this.ka,
                    d = 0;
                for (--b; d < b;) ++d, c = c.L;
                a.L = c.L;
                c.L = a
            }
            a.parent = this;
            this.oh++;
            return this
        },
        removeChild: function(a) {
            if (this.ka == a) this.ka = a.L;
            else {
                for (var b = this.ka; b.L != a;) b = b.L;
                b.L = a.L
            }
            a.L = null;
            a.parent = null;
            this.oh--;
            return this
        },
        Rk: function(a) {
            for (var b = this.ka, c = 0; c <= a;) {
                if (c == a) return b;
                b = b.L;
                ++c
            }
            return null
        },
        jx: function(a, b) {
            this.removeChild(a);
            this.Rn(a, b);
            return this
        },
        yi: function(a) {
            for (var b = this.ka; null != b;) {
                if (b.name ==
                    a) return b;
                b = b.L
            }
            return null
        },
        Yq: function(a) {
            if (this.ka == a) return this;
            for (var b = this.ka; b.L != a;) b = b.L;
            b.L = a.L;
            a.L = this.ka;
            this.ka = a;
            return this
        },
        ar: function(a) {
            if (null == a.L) return this;
            var b = this.ka;
            if (b == a) {
                for (; null != b.L;) b = b.L;
                b.L = a;
                this.ka = a.L
            } else {
                for (; b.L != a;) b = b.L;
                for (b = b.L = a.L; null != b.L;) b = b.L;
                b.L = a
            }
            a.L = null;
            return this
        },
        pn: function(a, b) {
            null == b && (b = !0);
            ua.prototype.pn.call(this, a);
            if (b)
                for (b = this.ka; null != b;) b.Dg(!1, a), b = b.L
        },
        wf: function() {
            if (!(0 < (this.j & 16)) && null != this.ka) {
                var a = this.ka;
                this.Je.from(a.Je);
                for (a = a.L; null != a;) 0 < (a.j & 256) && 0 == E.tb(a, Ta).oh || this.Je.el(a.Je), a = a.L;
                this.j &= -33;
                ua.prototype.wf.call(this)
            }
        },
        nm: function(a) {
            for (var b = this.ka; null != b;) b.Vh(a), b = b.L
        },
        We: function() {
            return null != Ta.vu ? Ta.vu() : ua.prototype.We.call(this)
        },
        i: Ta
    });
    fb.__name__ = "127";
    fb.B = ua;
    fb.prototype = v(ua.prototype, {
        A: function() {
            this.qe.A();
            this.qe = null;
            O.gf(this.Zd);
            this.Zd = null;
            ua.prototype.A.call(this)
        },
        mn: function() {
            this.j |= 64
        },
        wf: function() {
            0 < (this.j & 16) || 0 == (this.j & 96) || (this.qe.dn(this.X,
                this.Je), this.j &= -97, ua.prototype.wf.call(this))
        },
        $k: function(a) {
            null != this.Ga && (a = a.Fg, a.g == a.u && a.R(), a.c[a.g++] = this)
        },
        nm: function(a) {
            for (var b, c = 0, d = a.g; c < d;) {
                var e = c++;
                b = a.c[e];
                0 == b.M ? this.Zd[e] = null : (b = b.c[b.M - 1].collapse(b), this.Zd[e] = b)
            }
        },
        We: function() {
            return null != fb.Qk ? fb.Qk() : ua.prototype.We.call(this)
        },
        i: fb
    });
    qb.__name__ = "128";
    qb.B = fb;
    qb.prototype = v(fb.prototype, {
        fd: function(a, b) {
            if (!this.Je.contains(a)) return 0;
            var c = a.b,
                d = a.a;
            this.X.Id(a, a);
            var e = qd.Xx(a.b, a.a);
            e && null != b && (b.data[b.count++] =
                this);
            a.b = c;
            a.a = d;
            return e ? 1 : 0
        },
        Rf: function(a, b) {
            var c = new I,
                d = 3E38,
                e = 3E38,
                f = -3E38,
                g = -3E38;
            if (a == this) e = d = 0, g = f = 1;
            else {
                if (a == this.parent) {
                    var k = this.local;
                    c.b = 0;
                    c.a = 0;
                    k.Na(c, c);
                    3E38 > c.b && (d = c.b); - 3E38 < c.b && (f = c.b);
                    3E38 > c.a && (e = c.a); - 3E38 < c.a && (g = c.a);
                    c.b = 1;
                    c.a = 0;
                    k.Na(c, c);
                    c.b < d && (d = c.b);
                    c.b > f && (f = c.b);
                    c.a < e && (e = c.a);
                    c.a > g && (g = c.a);
                    c.b = 1;
                    c.a = 1;
                    k.Na(c, c);
                    c.b < d && (d = c.b);
                    c.b > f && (f = c.b);
                    c.a < e && (e = c.a);
                    c.a > g && (g = c.a);
                    c.b = 0;
                    c.a = 1;
                    k.Na(c, c)
                } else null == a.parent ? (k = this.X, c.b = 0, c.a = 0, k.Na(c, c), 3E38 > c.b && (d =
                    c.b), -3E38 < c.b && (f = c.b), 3E38 > c.a && (e = c.a), -3E38 < c.a && (g = c.a), c.b = 1, c.a = 0, k.Na(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 1, k.Na(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 0, c.a = 1, k.Na(c, c)) : (k = this.X, a = a.X, c.b = 0, c.a = 0, k.Na(c, c), a.Id(c, c), 3E38 > c.b && (d = c.b), -3E38 < c.b && (f = c.b), 3E38 > c.a && (e = c.a), -3E38 < c.a && (g = c.a), c.b = 1, c.a = 0, k.Na(c, c), a.Id(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 1, k.Na(c, c), a.Id(c, c), c.b < d &&
                    (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 0, c.a = 1, k.Na(c, c), a.Id(c, c));
                c.b < d && (d = c.b);
                c.b > f && (f = c.b);
                c.a < e && (e = c.a);
                c.a > g && (g = c.a)
            }
            b.b = d;
            b.a = e;
            b.f = f;
            b.d = g;
            return b
        },
        mn: function() {
            fb.prototype.mn.call(this);
            this.qe.ma.b = .5;
            this.qe.ma.a = .5;
            this.qe.ib = Math.sqrt(.5);
            switch (this.qe.type) {
                case 2:
                    var a = E.tb(this.qe, Ab).Fa;
                    a.b = 0;
                    a.a = 0;
                    a.f = 1;
                    a.d = 1
            }
        },
        We: function() {
            return null != qb.Qk ? qb.Qk() : fb.prototype.We.call(this)
        },
        i: qb
    });
    ma.__name__ = "129";
    ma.Jt = function(a) {
        var b = 0,
            c = ma.vg;
        c.clear();
        c.M ==
            c.u && c.R();
        for (c.c[c.M++] = a; 0 < c.M;)
            if (a = c.c[--c.M], 0 < (a.j & 512)) ++b;
            else if (0 < (a.j & 256))
            for (a = a.ka; null != a;) c.M == c.u && c.R(), c.c[c.M++] = a, a = a.L;
        return b
    };
    ma.Dg = function(a, b) {
        null == b && (b = !0);
        var c = ma.vg;
        c.clear();
        c.M == c.u && c.R();
        c.c[c.M++] = a;
        a = 8;
        for (b && (a = 40); 0 < c.M;) {
            var d = c.c[--c.M];
            if (0 < (d.j & a)) d.Dg(!0, b);
            else if (0 < (d.j & 256))
                for (d = d.ka; null != d;) c.M == c.u && c.R(), c.c[c.M++] = d, d = d.L
        }
    };
    ma.Vh = function(a) {
        var b = ma.vg;
        b.clear();
        b.M == b.u && b.R();
        for (b.c[b.M++] = a; 0 < b.M;)
            if (a = b.c[--b.M], 0 < (a.j & 128)) a.Vh();
            else if (0 <
            (a.j & 256))
            for (a = a.ka; null != a;) b.M == b.u && b.R(), b.c[b.M++] = a, a = a.L
    };
    ma.ln = function(a, b) {
        var c = ma.vg;
        c.clear();
        c.M == c.u && c.R();
        for (c.c[c.M++] = a; 0 < c.M;)
            if (a = c.c[--c.M], null != a.controllers && a.ln(b), 0 < (a.j & 256))
                for (a = a.ka; null != a;) c.M == c.u && c.R(), c.c[c.M++] = a, a = a.L
    };
    ma.Yu = function(a, b) {
        var c = ma.vg,
            d = ma.Kx;
        c.clear();
        c.M == c.u && c.R();
        for (c.c[c.M++] = a; 0 < c.M;)
            if (a = c.c[--c.M], !(0 < (a.j & 1)))
                if (0 < (a.j & 512)) null != a.Ga && (d.M == d.u && d.R(), d.c[d.M++] = a);
                else if (0 < (a.j & 256))
            for (a = a.ka; null != a;) c.M == c.u && c.R(), c.c[c.M++] =
                a, a = a.L;
        b.g = 0;
        b.Bc(d.M);
        c = 0;
        for (a = d.M; c < a;) {
            ++c;
            var e = d.c[--d.M];
            b.c[b.g++] = e
        }
    };
    ma.Rf = function(a, b, c) {
        var d = 3E38,
            e = 3E38,
            f = -3E38,
            g = -3E38,
            k = ma.vg;
        k.clear();
        k.M == k.u && k.R();
        for (k.c[k.M++] = a; 0 < k.M;)
            if (a = k.c[--k.M], 0 < (a.j & 512)) a.Rf(b, c), c.b < d && (d = c.b), c.a < e && (e = c.a), c.f > f && (f = c.f), c.d > g && (g = c.d);
            else if (0 < (a.j & 256))
            for (a = a.ka; null != a;) k.M == k.u && k.R(), k.c[k.M++] = a, a = a.L;
        c.b = d;
        c.a = e;
        c.f = f;
        c.d = g;
        return c
    };
    ma.ny = function(a, b, c) {
        var d;
        null == d && (d = new J);
        var e = c.b,
            f = c.a,
            g = c.f,
            k = c.d,
            l = 3E38,
            n = 3E38,
            u = -3E38,
            r = -3E38,
            q = new I;
        b == a ? (l = c.b, n = c.a, u = c.f, r = c.d) : (b == a.parent ? (b = a.local, q.b = e, q.a = f, b.Na(q, q), 3E38 > q.b && (l = q.b), -3E38 < q.b && (u = q.b), 3E38 > q.a && (n = q.a), -3E38 < q.a && (r = q.a), q.b = g, q.a = f, b.Na(q, q), q.b < l && (l = q.b), q.b > u && (u = q.b), q.a < n && (n = q.a), q.a > r && (r = q.a), q.b = g, q.a = k, b.Na(q, q), q.b < l && (l = q.b), q.b > u && (u = q.b), q.a < n && (n = q.a), q.a > r && (r = q.a), q.b = e, q.a = k, b.Na(q, q)) : null == b.parent ? (b = a.X, q.b = e, q.a = f, b.Na(q, q), 3E38 > q.b && (l = q.b), -3E38 < q.b && (u = q.b), 3E38 > q.a && (n = q.a), -3E38 < q.a && (r = q.a), q.b = g, q.a = f, b.Na(q, q), q.b < l && (l = q.b),
                q.b > u && (u = q.b), q.a < n && (n = q.a), q.a > r && (r = q.a), q.b = g, q.a = k, b.Na(q, q), q.b < l && (l = q.b), q.b > u && (u = q.b), q.a < n && (n = q.a), q.a > r && (r = q.a), q.b = e, q.a = k, b.Na(q, q)) : (a = a.X, b = b.X, q.b = e, q.a = f, a.Na(q, q), b.Id(q, q), 3E38 > q.b && (l = q.b), -3E38 < q.b && (u = q.b), 3E38 > q.a && (n = q.a), -3E38 < q.a && (r = q.a), q.b = g, q.a = f, a.Na(q, q), b.Id(q, q), q.b < l && (l = q.b), q.b > u && (u = q.b), q.a < n && (n = q.a), q.a > r && (r = q.a), q.b = g, q.a = k, a.Na(q, q), b.Id(q, q), q.b < l && (l = q.b), q.b > u && (u = q.b), q.a < n && (n = q.a), q.a > r && (r = q.a), q.b = e, q.a = k, a.Na(q, q), b.Id(q, q)), q.b < l && (l = q.b),
            q.b > u && (u = q.b), q.a < n && (n = q.a), q.a > r && (r = q.a));
        d.b = l;
        d.a = n;
        d.f = u;
        d.d = r;
        return d
    };
    hd.__name__ = "12A";
    hd.__isInterface__ = !0;
    hd.prototype = {
        i: hd
    };
    za.__name__ = "12B";
    za.reset = function() {
        za.aq = 0;
        za.$p = 0
    };
    yb.__name__ = "12C";
    yb.prototype = {
        A: function() {
            this.ya = this.translate = this.scale = null
        },
        Bj: function(a) {
            this.ya != a && sc.gi(this.ya, a);
            this.D &= -18;
            this.D |= 34
        },
        from: function(a) {
            var b = this.translate,
                c = a.translate;
            b.b = c.b;
            b.a = c.a;
            b.f = c.f;
            b = this.scale;
            c = a.scale;
            b.b = c.b;
            b.a = c.a;
            b.f = c.f;
            sc.gi(this.ya, a.ya);
            this.D = a.D |
                32;
            return this
        },
        qx: function(a, b) {
            if (0 < (a.D & 1)) {
                this.translate.b = b.translate.b;
                this.translate.a = b.translate.a;
                this.scale.b = b.scale.b;
                this.scale.a = b.scale.a;
                a = this.ya;
                var c = b.ya;
                a.b = c.b;
                a.a = c.a;
                a.d = c.d;
                a.e = c.e;
                this.D = b.D | 32;
                return this
            }
            if (0 < (b.D & 1)) return this.translate.b = a.translate.b, this.translate.a = a.translate.a, this.scale.b = a.scale.b, this.scale.a = a.scale.a, b = this.ya, c = a.ya, b.b = c.b, b.a = c.a, b.d = c.d, b.e = c.e, this.D = a.D | 32, this;
            this.D = 43;
            if (0 < (a.D & 2) && 0 < (b.D & 2) && 0 < (a.D & 8)) {
                c = this.ya;
                if (0 < (a.D & 16)) {
                    var d =
                        b.ya;
                    c.b = d.b;
                    c.a = d.a;
                    c.d = d.d;
                    c.e = d.e;
                    0 < (b.D & 16) && (this.D |= 16)
                } else {
                    if (0 < (b.D & 16)) {
                        var e = a.ya;
                        c.b = e.b;
                        c.a = e.a;
                        c.d = e.d;
                        c.e = e.e
                    } else {
                        e = a.ya;
                        d = b.ya;
                        var f = d.b;
                        var g = d.a;
                        var k = d.d;
                        var l = d.e;
                        d = e.b;
                        var n = e.a;
                        c.b = d * f + n * k;
                        c.a = d * g + n * l;
                        d = e.d;
                        n = e.e;
                        c.d = d * f + n * k;
                        c.e = d * g + n * l
                    }
                    this.Bj(c)
                }
                k = this.translate;
                e = a.translate;
                0 < (a.D & 16) ? (k.b = b.translate.b, k.a = b.translate.a) : (f = b.translate.b, g = b.translate.a, c = a.ya, k.b = c.b * f + c.a * g, k.a = c.d * f + c.e * g);
                a = a.scale.b;
                k.b = k.b * a + e.b;
                k.a = k.a * a + e.a;
                0 < (b.D & 8) ? (this.scale.b = this.scale.a =
                    a * b.scale.b, this.D &= -6, this.D |= 40) : (b = b.scale, this.scale.b = a * b.b, this.scale.a = a * b.a, this.D &= -14, this.D |= 32);
                return this
            }
            e = a.ya;
            0 < (a.D & 2) && (e = yb.ey, f = a.scale.b, g = a.scale.a, c = a.ya, e.b = c.b * f, e.a = c.a * g, e.d = c.d * f, e.e = c.e * g);
            d = b.ya;
            0 < (b.D & 2) && (e = yb.fy, f = b.scale.b, g = b.scale.a, c = b.ya, d.b = c.b * f, d.a = c.a * g, d.d = c.d * f, d.e = c.e * g);
            c = this.ya;
            f = d.b;
            g = d.a;
            k = d.d;
            l = d.e;
            d = e.b;
            n = e.a;
            c.b = d * f + n * k;
            c.a = d * g + n * l;
            d = e.d;
            n = e.e;
            c.d = d * f + n * k;
            c.e = d * g + n * l;
            k = this.translate;
            f = b.translate.b;
            g = b.translate.a;
            k.b = e.b * f + e.a * g;
            k.a = e.d * f + e.e *
                g;
            e = a.translate;
            k.b += e.b;
            k.a += e.a;
            this.D &= -12;
            this.D |= 32;
            return this
        },
        Na: function(a, b) {
            if (0 < (this.D & 1)) b.b = a.b, b.a = a.a;
            else {
                if (0 < (this.D & 2)) {
                    var c = a.b * this.scale.b;
                    a = a.a * this.scale.a;
                    if (0 >= (this.D & 16)) {
                        var d = c,
                            e = this.ya;
                        c = e.b * c + e.a * a;
                        a = e.d * d + e.e * a
                    }
                } else c = a.b, a = a.a, d = c, e = this.ya, c = e.b * c + e.a * a, a = e.d * d + e.e * a;
                b.b = c + this.translate.b;
                b.a = a + this.translate.a
            }
            return b
        },
        Id: function(a, b) {
            if (0 < (this.D & 1)) b.b = a.b, b.a = a.a;
            else {
                var c = a.b - this.translate.b;
                a = a.a - this.translate.a;
                if (0 < (this.D & 2)) {
                    if (0 >= (this.D & 16)) {
                        var d =
                            c,
                            e = this.ya;
                        c = c * e.b + a * e.d;
                        a = d * e.a + a * e.e
                    }
                    b.b = c / this.scale.b;
                    b.a = a / this.scale.a
                } else d = this.ya, e = 1 / (d.b * d.e - d.a * d.d), b.b = d.e * e * c - d.a * e * a, b.a = -(d.d * e) * c + d.b * e * a
            }
            return b
        },
        Lu: function() {
            return 0 < (this.D & 2) ? Math.max(Math.abs(this.scale.b), Math.abs(this.scale.a)) : Math.max(Math.abs(this.ya.b) + Math.abs(this.ya.a), Math.abs(this.ya.d) + Math.abs(this.ya.e))
        },
        i: yb
    };
    ja.__name__ = "12D";
    ja.__interfaces__ = [md, hd];
    ja.prototype = {
        A: function() {
            this.remove();
            null != this.dg && (this.dg.A(), this.dg = null);
            null != this.Fl && (this.Fl.A(),
                this.Fl = null);
            this.node = null;
            ja.count--
        },
        remove: function() {
            null != this.node.parent && this.node.parent.removeChild(this.node)
        },
        Wb: function() {
            var a = this.node.parent;
            return null != a && (a = a.client, null != a && 2 == a.type) ? a : null
        },
        qa: function(a) {
            this.Sd != a && (this.Sd = 0 > a ? 0 : 1 < a ? 1 : a, this.j |= 2);
            return this.Sd
        },
        fa: function(a) {
            this.Hl != a && (this.Hl = a, this.j |= 4);
            return a
        },
        ha: function(a) {
            this.va != a && (this.va = a, this.j |= 1);
            return a
        },
        aa: function(a) {
            this.wa != a && (this.wa = a, this.j |= 1);
            return a
        },
        hd: function(a) {
            this.$c != a && (this.$c =
                a, this.j |= 9);
            return a
        },
        ba: function(a) {
            if (this.Ra != a || this.ic != a) this.Ra = this.ic = a, this.j |= 49, this.j &= -65;
            return a
        },
        nf: function(a) {
            this.Ra != a && (this.Ra = a, this.j &= -97, this.j |= 17);
            return a
        },
        tg: function(a) {
            this.ic != a && (this.ic = a, this.j &= -97, this.j |= 17);
            return a
        },
        $: function() {
            throw 0;
        },
        da: function() {
            throw 0;
        },
        Pm: function(a) {
            this.nb != a && (this.nb = a, this.j |= 1);
            return a
        },
        Qm: function(a) {
            this.ob != a && (this.ob = a, this.j |= 1);
            return a
        },
        dr: function(a) {
            this.ag != a && (this.ag = a, this.j |= 1);
            return a
        },
        er: function(a) {
            this.bg !=
                a && (this.bg = a, this.j |= 1);
            return a
        },
        Pa: function() {
            throw 0;
        },
        ca: function(a, b, c) {
            this.Sb();
            var d = this.Pa(this.Wb()),
                e = this.va - d.b,
                f = this.wa - d.a;
            switch (b) {
                case -1:
                    this.ha(a.b + e);
                    break;
                case 0:
                    this.ha(a.b + .5 * (a.f - a.b) + e - (d.f - d.b) / 2);
                    break;
                case 1:
                    this.ha(a.f + e - (d.f - d.b))
            }
            switch (c) {
                case -1:
                    this.aa(a.a + f);
                    break;
                case 0:
                    this.aa(a.a + .5 * (a.d - a.a) + f - (d.d - d.a) / 2);
                    break;
                case 1:
                    this.aa(a.d + f - (d.d - d.a))
            }
        },
        Ue: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = pb.i0);
            this.ba(1);
            var e = (a.f - a.b) / this.$(),
                f = (a.d -
                    a.a) / this.da();
            b == pb.i2 ? (this.nf(e), this.tg(f)) : b == pb.i0 ? this.ba(Math.min(e, f)) : this.ba(Math.max(e, f));
            this.ha(a.b);
            this.aa(a.a);
            f = this.Pa(this.Wb());
            e = a.b - f.b;
            f = a.a - f.a;
            if (b != pb.i2) {
                switch (c) {
                    case -1:
                        this.ha(a.b);
                        break;
                    case 0:
                        this.ha(a.b + (a.f - a.b - this.$()) / 2);
                        break;
                    case 1:
                        this.ha(a.f - this.$())
                }
                switch (d) {
                    case -1:
                        this.aa(a.a);
                        break;
                    case 0:
                        this.aa(a.a + (a.d - a.a - this.da()) / 2);
                        break;
                    case 1:
                        this.aa(a.d - this.da())
                }
            }
            this.ha(this.va + e);
            this.aa(this.wa + f)
        },
        update: function() {},
        ud: function() {
            null == this.dg && (this.dg =
                new af(this));
            return this.dg
        },
        Sf: function() {
            return new df(this)
        },
        Sb: function() {
            if (0 == (this.j & 7)) return this;
            0 < (this.j & 1) && this.wr();
            0 < (this.j & 4) && (this.node.Nm(this.Hl ? ob.i0 : ob.i1), this.j &= -5);
            if (0 < (this.j & 2)) {
                if (1 > this.Sd) {
                    var a = this.node.yu(wa.i0);
                    null == a ? this.node.Aj(new uc(this.Sd)) : a.alpha = this.Sd
                } else this.node.Rw(wa.i0);
                this.j &= -3;
                this.node.j |= 128
            }
            return this
        },
        wr: function() {
            this.j &= -2;
            this.node.j |= 8;
            var a = this.node.local,
                b = this.ag,
                c = this.bg,
                d = this.j & 120;
            if (0 < (d & 8)) {
                var e = this.$c;
                e %= 360;
                0 > e &&
                    (e += 360);
                var f = .0174532925199432 * e;
                e = Math.sin(f);
                f = Math.cos(f);
                var g = a.ya;
                g.b = f;
                g.a = -e;
                g.d = e;
                g.e = f;
                a.Bj(g);
                if (0 < (d & 64)) a.translate.b = -(b * f) + c * e + b + this.va - this.nb, a.translate.a = -(b * e) - c * f + c + this.wa - this.ob;
                else if (0 < (d & 32)) {
                    d = this.Ra;
                    d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d;
                    g = d * b;
                    var k = d * c;
                    a.scale.b = a.scale.a = d;
                    a.D = a.D & -6 | 40;
                    a.translate.b = -(g * f) + k * e + b + this.va - this.nb;
                    a.translate.a = -(g * e) - k * f + c + this.wa - this.ob
                } else {
                    d = this.Ra;
                    d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d;
                    g = this.ic;
                    g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 :
                        g;
                    k = d * b;
                    var l = g * c;
                    a.scale.b = d;
                    a.scale.a = g;
                    a.D = a.D & -14 | 32;
                    a.translate.b = -(k * f) + l * e + b + this.va - this.nb;
                    a.translate.a = -(k * e) - l * f + c + this.wa - this.ob
                }
            } else 0 < (d & 64) ? (a.translate.b = this.va - this.nb, a.translate.a = this.wa - this.ob) : 0 < (d & 32) ? (e = this.Ra, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, a.scale.b = a.scale.a = e, a.D = a.D & -6 | 40, a.translate.b = -(e * b) + b + this.va - this.nb, a.translate.a = -(e * c) + c + this.wa - this.ob) : (e = this.Ra, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, f = this.ic, f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f, a.scale.b = e, a.scale.a =
                f, a.D = a.D & -14 | 32, a.translate.b = -(e * b) + b + this.va - this.nb, a.translate.a = -(f * c) + c + this.wa - this.ob);
            a.D = a.D & -2 | 32
        },
        i: ja
    };
    K.__name__ = "12E";
    K.B = ja;
    K.prototype = v(ja.prototype, {
        A: function() {
            null != this.node && (ja.prototype.A.call(this), null != this.ug && (this.ug.A(), this.ug = null), this.Tb.A(), this.ja = this.Tb = null, this.Rg = -1, this.ri = null, K.ke--)
        },
        $: function() {
            if (0 == (this.j & 8)) return this.P.b * Math.abs(this.Ra);
            var a = this.P.b * Math.abs(this.Ra) * .5,
                b = this.P.a * Math.abs(this.ic) * .5,
                c = this.$c;
            c %= 360;
            0 > c && (c += 360);
            var d =
                .0174532925199432 * c;
            c = -Math.sin(d);
            var e = Math.cos(d);
            0 < e ? (d = 0 - e * a, a *= e) : (d = e * a, a = 0 - e * a);
            0 < c ? (d -= c * b, a += c * b) : (d += c * b, a -= c * b);
            return a - d
        },
        Cx: function(a) {
            this.Ra = a / this.P.b;
            this.j &= -97;
            this.j |= 17;
            return a
        },
        da: function() {
            if (0 == (this.j & 8)) return this.P.a * Math.abs(this.ic);
            var a = this.P.b * Math.abs(this.Ra) / 2,
                b = this.P.a * Math.abs(this.ic) / 2,
                c = this.$c;
            c %= 360;
            0 > c && (c += 360);
            var d = .0174532925199432 * c;
            c = Math.sin(d);
            d = Math.cos(d);
            if (0 < c) {
                var e = 0 - c * a;
                a *= c
            } else e = c * a, a = 0 - c * a;
            0 < d ? (e -= d * b, a += d * b) : (e += d * b, a -= d * b);
            return a -
                e
        },
        sd: function() {
            var a = new I;
            a.b = this.P.b;
            a.a = this.P.a;
            return a
        },
        Ua: function() {
            this.Pm(this.P.b / 2);
            this.Qm(this.P.a / 2);
            this.j |= 1
        },
        Ia: function() {
            this.ag = this.P.b / 2;
            this.bg = this.P.a / 2;
            this.j |= 1
        },
        bc: function(a, b) {
            if (this.Rg == a) return null != b && this.sg(b), this;
            this.Rg = a;
            this.ri = null;
            if (null == this.Tb.Ga) {
                var c = new Zb;
                this.Tb.Ga = c
            } else 4 == this.Tb.Ga.type ? c = this.Tb.Ga : (this.Tb.Ga.A(), c = new Zb, this.Tb.Ga = c);
            a = Z.get(a);
            c.bc(a, a.Gc);
            this.P.b = c.sb.P.b;
            this.P.a = c.sb.P.a;
            null == b && (c = this.P, a = a.scale, c.b *= a, c.a *=
                a);
            this.j = this.P.b == this.P.a ? this.j | 256 : this.j & -257;
            this.j &= -513;
            this.j |= 129;
            null != b && this.sg(b);
            return this
        },
        sg: function(a) {
            if (this.ri == a) return a;
            this.ri = a;
            var b = this.Tb.Ga.sb.Gc.af;
            this.ux((null != X[a] ? b.gc(a) : b.C[a]).id);
            return a
        },
        Tf: function() {
            null == this.ug && (this.ug = new qc(this));
            return this.ug
        },
        Ih: function(a, b, c) {
            this.P.b = b;
            this.P.a = c;
            this.j = this.P.b == this.P.a ? this.j | 256 : this.j & -257;
            this.j &= -513;
            this.j |= 129;
            0 > this.Rg ? null == this.Tb.Ga && (this.Tb.Ga = new vc) : (this.Rg = -1, this.ri = null, this.Tb.Ga.A(),
                this.Tb.Ga = new vc);
            this.Tb.Ga.Ih(a);
            return this
        },
        fd: function(a) {
            ia.xf(this);
            0 < (this.node.j & 32) && this.node.wf();
            return 1 == this.Tb.fd(a, null)
        },
        Pa: function(a) {
            var b = new J;
            if (a == this) {
                a = this.P.b;
                var c = this.P.a;
                b.b = 0;
                b.a = 0;
                b.f = a;
                b.d = c;
                return b
            }
            if (0 == (this.j & 128)) return b.b = 0, b.a = 0, b.f = 0, b.d = 0, b;
            if (c = 512 == (this.j & 8704)) this.j &= -513, this.j |= 1;
            0 == (this.j & 16384) && (ia.xf(this), null == a || ia.ul(this, a) || ia.xf(a));
            this.node.Rf(null == a ? this.node.Zg() : a.node, b);
            c && (this.j |= 513);
            this.j &= -24577;
            return b
        },
        Sb: function() {
            return 0 ==
                (this.j & 128) ? this : ja.prototype.Sb.call(this)
        },
        Hm: function() {
            null != this.Wb() && this.Wb().Hm(this)
        },
        yj: function() {
            null != this.Wb() && this.Wb().yj(this)
        },
        wr: function() {
            this.j &= -2;
            this.node.j |= 8;
            var a = this.node.local;
            if (0 < (this.j & 512)) {
                var b = this.ag - this.ja.b,
                    c = this.bg - this.ja.a,
                    d = this.j & 376;
                if (0 < (d & 8)) {
                    var e = this.$c;
                    e %= 360;
                    0 > e && (e += 360);
                    var f = .0174532925199432 * e;
                    e = Math.sin(f);
                    f = Math.cos(f);
                    var g = a.ya;
                    g.b = f;
                    g.a = -e;
                    g.d = e;
                    g.e = f;
                    a.Bj(g);
                    if (0 < (d & 64)) 0 < (d & 256) ? (a.scale.b = a.scale.a = this.ja.f, a.D = a.D & -6 | 40) : (a.scale.b =
                        this.ja.f, a.scale.a = this.ja.d, a.D = a.D & -14 | 32), a.translate.b = -(b * f) + c * e + b + this.va - this.nb + this.ja.b, a.translate.a = -(b * e) - c * f + c + this.wa - this.ob + this.ja.a;
                    else {
                        if (0 < (d & 32)) {
                            g = this.Ra;
                            g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g;
                            var k = g * b,
                                l = g * c;
                            0 < (d & 256) ? (a.scale.b = a.scale.a = this.ja.f * g, a.D = a.D & -6 | 40) : (a.scale.b = this.ja.f * g, a.scale.a = this.ja.d * g, a.D = a.D & -14 | 32)
                        } else d = this.Ra, d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d, g = this.ic, g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g, k = d * b, l = g * c, a.scale.b = this.ja.f * d, a.scale.a = this.ja.d *
                            g, a.D = a.D & -14 | 32;
                        a.translate.b = -(k * f) + l * e + b + this.va - this.nb + this.ja.b;
                        a.translate.a = -(k * e) - l * f + c + this.wa - this.ob + this.ja.a
                    }
                } else 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.ja.f, a.D = a.D & -6 | 40) : (a.scale.b = this.ja.f, a.scale.a = this.ja.d, a.D = a.D & -14 | 32), a.translate.b = this.va - this.nb + this.ja.b, a.translate.a = this.wa - this.ob + this.ja.a) : 0 < (d & 32) ? (e = this.Ra, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.ja.f * e, a.D = a.D & -6 | 40) : (a.scale.b = this.ja.f * e, a.scale.a = this.ja.d * e, a.D = a.D & -14 |
                    32), a.translate.b = -(e * b) + b + this.va - this.nb + this.ja.b, a.translate.a = -(e * c) + c + this.wa - this.ob + this.ja.a) : (e = this.Ra, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, f = this.ic, f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f, a.scale.b = this.ja.f * e, a.scale.a = this.ja.d * f, a.D = a.D & -14 | 32, a.translate.b = -(e * b) + b + this.va - this.nb + this.ja.b, a.translate.a = -(f * c) + c + this.wa - this.ob + this.ja.a)
            } else b = this.ag, c = this.bg, d = this.j & 376, 0 < (d & 8) ? (e = this.$c, e %= 360, 0 > e && (e += 360), f = .0174532925199432 * e, e = Math.sin(f), f = Math.cos(f), g = a.ya, g.b = f, g.a = -e,
                g.d = e, g.e = f, a.Bj(g), 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.P.b, a.D = a.D & -6 | 40) : (a.scale.b = this.P.b, a.scale.a = this.P.a, a.D = a.D & -14 | 32), a.translate.b = -(b * f) + c * e + b + this.va - this.nb, a.translate.a = -(b * e) - c * f + c + this.wa - this.ob) : (0 < (d & 32) ? (g = this.Ra, g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g, k = g * b, l = g * c, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.P.b * g, a.D = a.D & -6 | 40) : (a.scale.b = this.P.b * g, a.scale.a = this.P.a * g, a.D = a.D & -14 | 32)) : (d = this.Ra, d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d, g = this.ic, g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 :
                    g, k = d * b, l = g * c, a.scale.b = this.P.b * d, a.scale.a = this.P.a * g, a.D = a.D & -14 | 32), a.translate.b = -(k * f) + l * e + b + this.va - this.nb, a.translate.a = -(k * e) - l * f + c + this.wa - this.ob)) : 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.P.b, a.D = a.D & -6 | 40) : (a.scale.b = this.P.b, a.scale.a = this.P.a, a.D = a.D & -14 | 32), a.translate.b = this.va - this.nb, a.translate.a = this.wa - this.ob) : 0 < (d & 32) ? (e = this.Ra, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.P.b * e, a.D = a.D & -6 | 40) : (a.scale.b = this.P.b * e, a.scale.a = this.P.a * e, a.D =
                a.D & -14 | 32), a.translate.b = -(e * b) + b + this.va - this.nb, a.translate.a = -(e * c) + c + this.wa - this.ob) : (e = this.Ra, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, f = this.ic, f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f, a.scale.b = this.P.b * e, a.scale.a = this.P.a * f, a.D = a.D & -14 | 32, a.translate.b = -(e * b) + b + this.va - this.nb, a.translate.a = -(f * c) + c + this.wa - this.ob);
            a.D = a.D & -2 | 32
        },
        ux: function(a) {
            var b = this.Tb.Ga;
            b.Zq(a);
            b = b.sb.Gc;
            if (b.Zf) a = b.Dl.c[a];
            else {
                var c = b.El,
                    d = c.Ba,
                    e = d.Xc[73856093 * a & d.Zc];
                if (-1 == e) a = -2147483648;
                else if (d = d.c, d[e] == a) a = d[e +
                    1];
                else {
                    var f = -2147483648;
                    for (e = d[e + 2]; - 1 != e;) {
                        if (d[e] == a) {
                            f = d[e + 1];
                            break
                        }
                        e = d[e + 2]
                    }
                    a = f
                }
                a = -2147483648 == a ? null : c.cf[a]
            }
            c = this.P;
            e = a.P;
            c.b = e.b;
            c.a = e.a;
            a.gn ? (this.j |= 512, c = a.Ge, e = a.lr, null == this.ja ? (d = new J, d.b = c.b, d.a = c.a, d.f = e.f, d.d = e.d, this.ja = d) : (this.ja.b = c.b, this.ja.a = c.a, this.ja.f = e.f, this.ja.d = e.d), this.j = e.f == e.d ? this.j | 256 : this.j & -257) : (this.j &= -513, this.j = this.P.b == this.P.a ? this.j | 256 : this.j & -257);
            1 != b.scale && (b = 1 / b.scale, c = this.P, c.b *= b, c.a *= b, a.gn && (this.ja.b *= b, this.ja.a *= b, this.ja.f *= b,
                this.ja.d *= b));
            this.j |= 1
        },
        i: K
    });
    var pb = xa.eD = {
        Ub: !0,
        Kb: ["i0", "i1", "i2"]
    };
    pb.i0 = {
        G: 0,
        N: "eD",
        toString: D
    };
    pb.i1 = {
        G: 1,
        N: "eD",
        toString: D
    };
    pb.i2 = {
        G: 2,
        N: "eD",
        toString: D
    };
    pb.pc = [pb.i0, pb.i1, pb.i2];
    df.__name__ = "12F";
    df.prototype = {
        add: function() {
            this.Kp.node.Aj(hb.Wr);
            return this.Kp
        },
        i: df
    };
    ka.__name__ = "130";
    ka.B = ja;
    ka.prototype = v(ja.prototype, {
        Sb: function() {
            ja.prototype.Sb.call(this);
            for (var a = this.node.ka, b; null != a;) {
                if (null != a.client) switch (a.client.type) {
                    case 2:
                    case 5:
                    case 14:
                        b = a.client, b.Sb()
                }
                a = a.L
            }
            return this
        },
        A: function() {
            null != this.node && (ia.Nk(this), -1 != this.zm && (ib.current.au(this.zm), this.zm = -1), ja.prototype.A.call(this), ka.ke--)
        },
        appendChild: function(a) {
            this.node.appendChild(a.node);
            return this
        },
        Rk: function(a) {
            return this.node.Rk(a).client
        },
        yi: function(a) {
            a = this.node.yi(a);
            return null == a ? null : a.client
        },
        Hm: function(a) {
            if (null == a) return null != this.Wb() && this.node.parent.ar(this.node), this;
            this.node.ar(a.node);
            return this
        },
        yj: function(a) {
            if (null == a) return null != this.Wb() && this.node.parent.Yq(this.node),
                this;
            this.node.Yq(a.node);
            return this
        },
        update: function(a) {
            ja.prototype.update.call(this, a);
            var b = this.node;
            if (null != b && 0 != (this.j & 1024))
                for (var c = b.ka; null != c;) b = c.L, c = c.client, null != c && c.update(a), c = b
        },
        Pa: function(a) {
            var b = new J;
            b.b = b.a = Infinity;
            b.f = b.d = -Infinity;
            if (0 == this.node.oh) return b;
            var c = new W(32),
                d = new sb(32),
                e = this.node;
            d.M == d.u && d.R();
            d.c[d.M++] = e;
            for (var f; 0 < d.M;) {
                e = d.c[--d.M];
                if (256 == (e.j & 2304))
                    for (f = e, f = f.ka; null != f;) d.M == d.u && d.R(), d.c[d.M++] = f, f = f.L;
                if (null != e.client) switch (e.client.type) {
                    case 5:
                        e =
                            e.client;
                        c.g == c.u && c.R();
                        c.c[c.g++] = e;
                        0 < (e.j & 512) && (e.j = (e.j &= -513) | 1, e.j |= 2048);
                        break;
                    case 14:
                        e = e.client, c.g == c.u && c.R(), c.c[c.g++] = e
                }
            }
            ia.xf(this);
            null == a || ia.ul(this, a) || ia.xf(a);
            b.b = 3E38;
            b.a = 3E38;
            b.f = -3E38;
            b.d = -3E38;
            d = c.c;
            e = 0;
            for (f = c.g; e < f;) {
                var g = d[e++];
                g.j |= 24576;
                g = g.Pa(a);
                g.b < b.b && (b.b = g.b);
                g.a < b.a && (b.a = g.a);
                g.f > b.f && (b.f = g.f);
                g.d > b.d && (b.d = g.d)
            }
            a = c.c;
            d = 0;
            for (c = c.g; d < c;) e = a[d++], 0 < (e.j & 2048) && (E.tb(e, K).j |= 513, e.j &= -2049);
            return b
        },
        $: function() {
            var a = this.Pa(this.Wb());
            return a.f - a.b
        },
        da: function() {
            var a =
                this.Pa(this.Wb());
            return a.d - a.a
        },
        nf: function(a) {
            return a
        },
        tg: function(a) {
            return a
        },
        i: ka
    });
    gd.__name__ = "132";
    gd.B = Xb;
    gd.prototype = v(Xb.prototype, {
        i: gd
    });
    qc.__name__ = "133";
    qc.Tt = function(a, b, c) {
        for (var d = [], e = 0, f = b.length; e < f;) d.push(new nf(b[e++], c));
        return new of(a, d)
    };
    qc.prototype = {
        A: function() {
            null != this.controller && (this.controller.A(), this.controller = null);
            this.I = this.fm = null
        },
        play: function(a, b, c, d) {
            null == b && (b = !0);
            null != c && this.tx(c);
            return this.xw(a, 0, -1, b, d)
        },
        xw: function(a, b, c, d, e) {
            null ==
                d && (d = !0);
            this.xl = !0;
            var f = this.Ro(); - 2 == this.repeat ? (f.repeat = Ba.i2, f.Xd = -1) : -1 == this.repeat ? (f.repeat = Ba.i1, f.Xd = -1) : (f.repeat = Ba.i0, f.Xd = this.repeat);
            f.play(a, b, c, d ? 0 : this.jh);
            this.length = f.yd - f.wc;
            this.fm = e;
            return this
        },
        tx: function(a) {
            this.repeat = a;
            return this
        },
        Iq: function() {
            this.Ro().Mb = Kb.Mk(0, this.length);
            return this
        },
        Ro: function() {
            if (null == this.controller || 0 > this.controller.type) {
                var a = this.I.node,
                    b = a.nu(8);
                null == b && (b = new gd, a.ua(b));
                b.fj = B(this, this.fj);
                b.ej = B(this, this.ej);
                this.controller =
                    b
            }
            return this.controller
        },
        fj: function(a, b, c) {
            this.jh = c;
            this.I.sg(a)
        },
        ej: function() {
            null != this.fm && this.fm();
            null != this.controller && this.controller.repeat != Ba.i1 && (this.xl = !1, this.length = -1)
        },
        i: qc
    };
    na.__name__ = "134";
    na.B = ja;
    na.prototype = v(ja.prototype, {
        A: function() {
            if (null != this.node) {
                for (var a = E.tb(this.node, Ta).ka; null != a;) {
                    var b = a.L;
                    a.A();
                    a = b
                }
                ja.prototype.A.call(this);
                this.dc = this.Ca = this.Kd = this.sb = null;
                na.ke--
            }
        },
        bc: function(a) {
            this.sb = Z.get(a);
            this.Kd = this.sb.Gc.He;
            this.Mj = !0
        },
        Oy: function() {
            return this.Ca.text
        },
        za: function(a) {
            this.Lb = this.Lb || this.Ca.text != a;
            this.Ca.text = a;
            return this
        },
        Py: function() {
            return this.Ca.size
        },
        ac: function(a) {
            this.Lb = this.Lb || this.Ca.size != a;
            this.Ca.size = a;
            return this
        },
        Qb: function(a, b) {
            this.Lb = (this.Lb = this.Lb || this.Ca.width != a) || this.Ca.height != b;
            this.Ca.width = a;
            this.Ca.height = b;
            return this
        },
        ex: function(a) {
            this.Lb = this.Lb || this.Ca.align != a;
            this.Ca.align = a;
            return this
        },
        Jh: function() {
            var a = this.Kd.Am;
            this.Lb = this.Lb || this.Ca.size != a;
            this.Ca.size = a;
            return this
        },
        Yn: function(a, b) {
            this.Ca.size =
                b - a >> 1;
            this.Ag.Da(this.Kd, this.Ca, this.dc);
            var c = this.Ca.size;
            if (this.dc.overflow) {
                if (c < a) return;
                c = this.jk(a, c - 1)
            } else {
                if (c > b) return;
                c = this.jk(c, b + 1)
            }
            this.Ca.size = c < a ? a : c > b ? b : c;
            this.Lb = !0;
            this.Ag.Da(this.Kd, this.Ca, this.dc)
        },
        Ej: function(a) {
            null == a && (a = 4);
            this.Ag.Da(this.Kd, this.Ca, this.dc);
            if (this.dc.overflow) {
                var b = this.Ca.size;
                b < a || (this.Ca.size = this.jk(a, b - 1), this.Lb = !0, this.Ag.Da(this.Kd, this.Ca, this.dc))
            }
        },
        Pa: function(a) {
            this.Sb();
            var b = this.dc.U,
                c = new J;
            c.b = b.b;
            c.a = b.a;
            c.f = b.f;
            c.d = b.d;
            if (c.b >
                c.f || c.a > c.d) return c.b = 0, c.a = 0, c.f = 0, c.d = 0, c;
            if (a == this) return c;
            0 == (this.j & 16384) && (ia.xf(this), null != a && 0 == ia.ul(this, a) && ia.xf(a));
            return ma.ny(this.node, null == a ? this.node.Zg() : a.node, c)
        },
        ca: function(a, b, c) {
            this.Sb();
            if (!this.dc.overflow) {
                var d = this.dc.U;
                d.b > d.f || d.a > d.d || ja.prototype.ca.call(this, a, b, c)
            }
        },
        update: function(a) {
            ja.prototype.update.call(this, a);
            if (this.gl) {
                for (var b = 0, c = E.tb(this.node, Ta), d = c.ka, e; null != d;) {
                    if (0 < (d.j & 1))
                        if (e = d, e.Ei += a, 10 < e.Ei) {
                            e = d.L;
                            c.removeChild(d);
                            d.A();
                            d = e;
                            continue
                        } else ++b;
                    d = d.L
                }
                this.gl = 0 < b
            }
        },
        Sb: function() {
            ja.prototype.Sb.call(this);
            if (null == this.sb || null == this.Ca.text || !this.Lb && !this.Mj) return this;
            this.Lb = !1;
            var a = E.tb(this.node, Ta);
            if (this.Mj) {
                this.Mj = !1;
                for (var b = a.ka, c; null != b;) c = b.L, a.removeChild(b), b.A(), b = c
            }
            this.Ag.Da(this.Kd, this.Ca, this.dc);
            c = this.dc.li;
            var d = this.dc.mo;
            b = a.ka;
            for (var e = 0, f, g, k, l, n, u, r, q = 0, t = c.g; q < t;) n = q++, g = c.c[n], f = n << 2, k = d.c[f], l = d.c[f + 1], n = d.c[f + 2], u = d.c[f + 3], r = String.fromCodePoint(g), null != b ? (f = b, f.name = r, f.Nm(ob.i0), a.jx(f, e++), b = b.L) :
                (f = new fd(r), r = (new Zb).bc(this.sb, this.sb.Gc), f.Ga = r, a.Rn(f, e++)), r = f.local, r.translate.b = k, r.translate.a = l, r.D &= -2, r.D |= 32, k = f.local, k.scale.b = n, k.scale.a = u, k.D &= -14, k.D |= 32, r = f.Ga, r.Zq(g);
            a.j |= 8;
            for (c = 0; null != b;) 100 > c++ ? (this.gl = !0, f = b, f.Ei = 0, b.Nm(ob.i1), b = b.L) : (d = b.L, a.removeChild(b), b.A(), b = d);
            return this
        },
        Ia: function() {
            var a = this.Pa(this);
            a.b > a.f || a.a > a.d ? this.dr(this.er(0)) : (this.dr(a.b + .5 * (a.f - a.b)), this.er(a.a + .5 * (a.d - a.a)))
        },
        Ua: function() {
            var a = this.Pa(this);
            a.b > a.f || a.a > a.d ? this.Pm(this.Qm(0)) :
                (this.Pm(a.b + (a.f - a.b) / 2), this.Qm(a.a + (a.d - a.a) / 2))
        },
        $: function() {
            var a = this.Pa(this.Wb());
            return a.f - a.b
        },
        da: function() {
            var a = this.Pa(this.Wb());
            return a.d - a.a
        },
        nf: function() {
            throw 0;
        },
        tg: function() {
            throw 0;
        },
        jk: function(a, b) {
            var c = a,
                d = b,
                e = -1;
            for (b = a + (b - a >> 1); this.Ca.size = b, this.Ag.Da(this.Kd, this.Ca, this.dc), this.dc.overflow ? d = b : c = e = b, b = c + (d - c >> 1), b != c;);
            return 0 > e ? a : e
        },
        i: na
    });
    fd.__name__ = "135";
    fd.B = qb;
    fd.prototype = v(qb.prototype, {
        i: fd
    });
    ed.__name__ = "136";
    ed.__isInterface__ = !0;
    ed.prototype = {
        i: ed
    };
    cf.__name__ = "137";
    cf.prototype = {
        i: cf
    };
    bf.__name__ = "138";
    bf.prototype = {
        i: bf
    };
    dd.__name__ = "139";
    dd.__interfaces__ = [ed];
    dd.prototype = {
        Da: function(a, b, c) {
            c.overflow = !1;
            var d = c.U;
            d.b = d.a = Infinity;
            d.f = d.d = -Infinity;
            var e = b.text,
                f = e.length;
            if (0 != f) {
                var g = c.li;
                g.Bc(f);
                g.g = 0;
                var k = c.mo;
                k.Bc(f);
                k.g = 0;
                var l = a.no,
                    n, u = this.li;
                u.g = 0;
                u.Bc(f);
                for (n = 0; n < f;) {
                    var r = y.ki(e, n++);
                    u.c[u.g++] = r
                }
                if (-1 < b.Ep && (e = na.Uy.C[b.Ep], null != e)) {
                    f = 0;
                    n = u.g - 1;
                    for (var q; f < n;) {
                        r = u.c[f];
                        q = u.c[f + 1];
                        var t = q << 16 | r,
                            v = e.Xc[73856093 * t & e.Zc];
                        if (-1 ==
                            v) t = !1;
                        else {
                            var w = e.c;
                            if (w[v] == t) t = !0;
                            else {
                                var x = !1;
                                for (v = w[v + 2]; - 1 != v;) {
                                    if (w[v] == t) {
                                        x = !0;
                                        break
                                    }
                                    v = w[v + 2]
                                }
                                t = x
                            }
                        }
                        if (t) {
                            r |= q << 16;
                            q = e.Xc[73856093 * r & e.Zc];
                            if (-1 == q) r = -2147483648;
                            else if (t = e.c, t[q] == r) r = t[q + 1];
                            else {
                                v = -2147483648;
                                for (q = t[q + 2]; - 1 != q;) {
                                    if (t[q] == r) {
                                        v = t[q + 1];
                                        break
                                    }
                                    q = t[q + 2]
                                }
                                r = v
                            }
                            u.c[f] = r;
                            u.Kq(f + 1);
                            --n
                        }++f
                    }
                }
                this.Me.g = 0;
                this.Me.Bc(u.g);
                e = 0;
                for (f = u.g; e < f;) {
                    n = u.c[e++];
                    q = l.Ba;
                    r = q.Xc[73856093 * n & q.Zc];
                    if (-1 == r) r = !1;
                    else if (q = q.c, q[r] == n) r = !0;
                    else {
                        t = !1;
                        for (r = q[r + 2]; - 1 != r;) {
                            if (q[r] == n) {
                                t = !0;
                                break
                            }
                            r = q[r +
                                2]
                        }
                        r = t
                    }
                    if (r) {
                        r = this.Me;
                        t = l.Ba;
                        q = t.Xc[73856093 * n & t.Zc];
                        if (-1 == q) n = -2147483648;
                        else if (t = t.c, t[q] == n) n = t[q + 1];
                        else {
                            v = -2147483648;
                            for (q = t[q + 2]; - 1 != q;) {
                                if (t[q] == n) {
                                    v = t[q + 1];
                                    break
                                }
                                q = t[q + 2]
                            }
                            n = v
                        }
                        n = -2147483648 == n ? null : l.cf[n];
                        r.c[r.g++] = n
                    }
                }
                if (!this.Me.Hi())
                    if (u = b.width, e = b.Li, l = b.align, f = a.Li, n = b.size / a.Am, r = b.my * n, 1 > b.height / (a.lineHeight * n)) c.overflow = !0;
                    else {
                        x = this.Me.c[0];
                        q = -(x.offsetX * n);
                        a = a.padding;
                        t = a[0] * n;
                        v = a[1] * n;
                        w = a[2] * n;
                        var z = a[3] * n,
                            B = 0;
                        a = this.Me.g;
                        for (var C = 0, D, A = 0; B < a;) {
                            x = this.Me.c[B++];
                            var E =
                                q + x.offsetX * n;
                            var F = x.offsetY * n;
                            var H = x.Zj * n;
                            var I = x.C * n;
                            D = E + H - v;
                            if (e) {
                                C |= x.code << 16;
                                A = f.Xc[73856093 * C & f.Zc];
                                if (-1 == A) A = -2147483648;
                                else {
                                    var G = f.c;
                                    if (G[A] == C) A = G[A + 1];
                                    else {
                                        var J = -2147483648;
                                        for (A = G[A + 2]; - 1 != A;) {
                                            if (G[A] == C) {
                                                J = G[A + 1];
                                                break
                                            }
                                            A = G[A + 2]
                                        }
                                        A = J
                                    }
                                } - 2147483648 == A && (A = 0);
                                A *= n;
                                C = x.code;
                                D += A
                            }
                            if (D > u) {
                                c.overflow = !0;
                                return
                            }
                            E += A;
                            g.c[g.g++] = x.code;
                            k.c[k.g++] = E;
                            k.c[k.g++] = F;
                            k.c[k.g++] = H;
                            k.c[k.g++] = I;
                            32 < x.code && (D = E + z, G = F + t, D < d.b ? d.b = D : D > d.f && (d.f = D), G < d.a ? d.a = G : G > d.d && (d.d = G), E = E + H - v, F = F + I - w, E < d.b ? d.b =
                                E : E > d.f && (d.f = E), F < d.a ? d.a = F : F > d.d && (d.d = F));
                            x = x.Tn;
                            0 < b.lo && (x = b.lo);
                            q += x * n + A + r
                        }
                        if (-1 != l) {
                            c = u - d.f;
                            0 == l && (c /= 2);
                            for (l = 0; l < a;) g = l++ << 2, k.c[g] += c;
                            c = d.b + c;
                            g = d.f - d.b;
                            d.b = c;
                            d.f = c + g
                        }
                        if (b.zt)
                            for (b = 0; b < a;) d = b++ << 2, k.c[d + 1] /= 2
                    }
            }
        },
        i: dd
    };
    ia.__name__ = "13A";
    ia.update = function(a, b) {
        var c = ia.Um;
        c.clear();
        c.M == c.u && c.R();
        for (c.c[c.M++] = a; 0 < c.M;) {
            var d = c.c[--c.M];
            if (null == d.client) {
                if (0 == (d.j & 1024))
                    for (a = d, a = a.ka; null != a;) c.M == c.u && c.R(), c.c[c.M++] = a, a = a.L
            } else switch (d.client.type) {
                case 2:
                    a = d.client;
                    var e = a.j & 1024;
                    a.j &= -1025;
                    a.update(b);
                    a.j |= e;
                    if (0 < (a.j & 1024))
                        for (a = d, a = a.ka; null != a;) c.M == c.u && c.R(), c.c[c.M++] = a, a = a.L;
                    break;
                case 5:
                case 14:
                    a = d.client, a.update(b)
            }
        }
    };
    ia.Sb = function(a) {
        var b = ia.Um,
            c = null,
            d = null;
        b.clear();
        b.M == b.u && b.R();
        for (b.c[b.M++] = a; 0 < b.M;) {
            var e = b.c[--b.M];
            0 < (e.j & 256) && (c = e, d = c.ka);
            a = e.client;
            if (null != a) switch (a.type) {
                case 2:
                    c.ka = null;
                    a.Sb();
                    c.ka = d;
                    break;
                case 5:
                case 14:
                    a.Sb()
            }
            if (0 < (e.j & 256))
                for (; null != d;) b.M == b.u && b.R(), b.c[b.M++] = d, d = d.L
        }
    };
    ia.Nk = function(a, b) {
        null == b && (b = !1);
        if (2 == a.type)
            for (var c =
                    E.tb(a, ka).node.ka, d; null != c;) d = c.L, ia.Nk(c.client, !0), c = d;
        b && a.A()
    };
    ia.ul = function(a, b) {
        for (a = a.Wb(); null != a;) {
            if (a == b) return !0;
            a = a.Wb()
        }
        return !1
    };
    ia.xf = function(a) {
        var b = a.node,
            c = ia.Um,
            d = a.node;
        for (c.clear(); null != d;) {
            0 < (d.j & 8) && (b = d);
            if (null != d.client) {
                var e = d.client;
                0 < (e.j & 1) && (e.Sb(), b = d)
            }
            c.M == c.u && c.R();
            c.c[c.M++] = d;
            d = d.parent
        }
        a.Sb();
        b.Dg(!0, !1)
    };
    af.__name__ = "13B";
    af.prototype = {
        A: function() {
            this.Qh();
            this.Of = this.I = null
        },
        x: function(a, b, c, d, e) {
            this.kd(0, a, b, c, d, e);
            return this
        },
        y: function(a, b,
            c, d, e) {
            this.kd(1, a, b, c, d, e);
            return this
        },
        position: function(a, b, c, d, e, f) {
            if (null != f) {
                var g = 0,
                    k = function() {
                        2 == (g += 1) && f()
                    };
                this.kd(0, a, c, d, e, k);
                this.kd(1, b, c, d, e, k)
            } else this.kd(0, a, c, d, e, f), this.kd(1, b, c, d, e, f);
            return this
        },
        Gh: function(a, b, c, d, e) {
            this.kd(2, a, b, c, d, e);
            return this
        },
        hn: function(a, b, c, d, e) {
            this.kd(4, a, b, c, d, e);
            return this
        },
        alpha: function(a, b, c, d, e) {
            this.kd(6, a, b, c, d, e);
            return this
        },
        Qh: function() {
            for (var a = this.I.node.controllers; null != a;) {
                var b = a.next;
                10 == a.type && a.stop();
                a = b
            }
            this.kg =
                0
        },
        kd: function(a, b, c, d, e, f) {
            switch (a) {
                case 0:
                    var g = this.I.va;
                    break;
                case 1:
                    g = this.I.wa;
                    break;
                case 2:
                    g = this.I.Ra;
                    break;
                case 3:
                    g = this.I.ic;
                    break;
                case 4:
                    g = this.I.Ra;
                    break;
                case 5:
                    g = this.I.$c;
                    break;
                case 6:
                    g = this.I.Sd
            }
            var k = this.Wu(a, c);
            k.kd(a, g, b, c, null == d ? U.Fp() : d);
            k.repeat = null == e ? Ba.i0 : e;
            null == this.Of && (this.Of = []);
            this.Of[a] = f;
            this.kg |= 1 << a;
            return k
        },
        Wu: function(a) {
            var b = this.I.node.controllers;
            if (null != b)
                if (0 < (this.kg & 1 << a))
                    for (; null != b;) {
                        if (10 == b.type) {
                            var c = b;
                            if (c.key == a) return c.Ud = B(this, this.Ud),
                                c.zd = B(this, this.zd), c
                        }
                        b = b.next
                    } else
                        for (; null != b;) {
                            if (10 == b.type && !b.me) return c = b, c.Ud = B(this, this.Ud), c.zd = B(this, this.zd), c;
                            b = b.next
                        }
                c = new ld;
            c.Ud = B(this, this.Ud);
            c.zd = B(this, this.zd);
            this.I.node.ua(c);
            return c
        },
        zd: function(a, b) {
            var c = this.I;
            switch (a) {
                case 0:
                    c.ha(b);
                    break;
                case 1:
                    c.aa(b);
                    break;
                case 2:
                    c.nf(b);
                    break;
                case 3:
                    c.tg(b);
                    break;
                case 4:
                    c.ba(b);
                    break;
                case 5:
                    c.hd(b);
                    break;
                case 6:
                    c.qa(b)
            }
        },
        Ud: function(a) {
            this.kg &= ~(1 << a);
            if (null != this.Of[a]) {
                var b = this.Of[a];
                this.Of[a] = null;
                b()
            }
        },
        i: af
    };
    var Pe = {
        __name__: "13C",
        jy: function(a) {
            return a
        },
        xt: function(a, b) {
            var c = window.document.createElement("img");
            c.src = a.toDataURL("image/png");
            c.onload = function() {
                c.onload = null;
                Pe.ov(c, b)
            }
        },
        ov: function(a, b) {
            if (null == window.Pt) b(a);
            else try {
                window.Pt(a).then(function(a) {
                    b(a)
                }, function() {
                    b(a)
                })
            } catch (c) {
                b(a)
            }
        },
        rw: function(a, b, c, d) {
            var e = window.document.createElement("canvas");
            e.width = b;
            e.height = c;
            e.getContext("2d", null).drawImage(a, 0, 0);
            Pe.xt(e, d)
        },
        Md: function(a) {
            a instanceof ImageBitmap ? a.close() : a instanceof
            HTMLImageElement && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
        }
    };
    $e.__name__ = "13D";
    $e.prototype = {
        nx: function(a, b) {
            var c = this;
            this.bb = a;
            var d = a.width | 0;
            a = a.height | 0;
            var e = this.P;
            e.b = d;
            e.a = a;
            this.Ji = 0 != d && 0 == (d & d - 1) && 0 != a && 0 == (a & a - 1);
            this.Wf = !0;
            !b || this.Ji || this.Vf || (--d, d |= d >> 1, d |= d >> 2, d |= d >> 4, d |= d >> 8, d |= d >> 16, ++d, --a, a |= a >> 1, a |= a >> 2, a |= a >> 4, a |= a >> 8, a |= a >> 16, ++a, b = new I, b.b = d, b.a = a, this.ve = b, this.Vf = !0, this.Wf = !1, Pe.rw(this.bb, d, a, function(a) {
                c.bb = a;
                return c.Wf = !0
            }))
        },
        fx: function(a) {
            this.Gc = new Ze(this, a);
            return this
        },
        A: function() {
            if (!this.Hv && this.Vf && !this.Iv) try {
                Pe.Md(this.bb)
            } catch (a) {}
            this.Gc = this.ve = this.P = this.bb = null
        },
        i: $e
    };
    Z.__name__ = "13E";
    Z.get = function(a) {
        return Z.Rh.C[a]
    };
    Z.hc = function(a, b) {
        a = Z.Rh.C[a];
        if (null == a || null == a.Gc && null != b) return null;
        if (null != b) {
            a = a.Gc.af;
            b = null != X[b] ? a.gc(b) : a.C[b];
            if (null == b) return null;
            b = b.P;
            a = new I;
            a.b = b.b;
            a.a = b.a;
            return a
        }
        b = a.P;
        a = new I;
        a.b = b.b;
        a.a = b.a;
        return a
    };
    Z.Vb = function(a) {
        return Z.Rh.C.hasOwnProperty(a)
    };
    Z.Pw = function(a, b) {
        Z.Rh.C[a] = b;
        b.id = a;
        Z.mr++
    };
    Z.ty = function(a) {
        var b = Z.get(a);
        null != b && (Z.Rh.remove(a), b.A(), Z.mr--)
    };
    Ze.__name__ = "13F";
    Ze.prototype = {
        i: Ze
    };
    cd.__name__ = "140";
    cd.prototype = {
        i: cd
    };
    bd.__name__ = "141";
    bd.prototype = {
        i: bd
    };
    ad.__name__ = "142";
    ad.prototype = {
        i: ad
    };
    oc.__name__ = "143";
    oc.__isInterface__ = !0;
    oc.prototype = {
        i: oc
    };
    $c.__name__ = "144";
    $c.__interfaces__ = [oc];
    $c.prototype = {
        Qo: function() {
            var a = new bd,
                b = new We(this.Vv),
                c = new Xe;
            c.Am = b.info.size;
            c.lineHeight = b.ge.lineHeight;
            c.ee = b.ge.ee;
            c.Zy =
                b.ge.Dm;
            c.Yy = b.ge.Cm;
            c.padding[0] = b.info.padding.kn;
            c.padding[1] = b.info.padding.right;
            c.padding[2] = b.info.padding.ub;
            c.padding[3] = b.info.padding.left;
            a.He = c;
            for (var d = 0, e = b.mi; d < e.length;) {
                var f = e[d];
                ++d;
                var g = f.id,
                    k = new Ye;
                k.code = g;
                k.x = f.x;
                k.y = f.y;
                k.offsetX = f.xn;
                k.offsetY = f.yn;
                k.Tn = f.vn;
                k.Zj = f.width;
                k.C = f.height;
                c.no.set(k.code, k); - 1 != g && (f = new ad, a.frames.push(f), f.id = g, f.name = String.fromCodePoint(g), f.Ja.b = k.x, f.Ja.a = k.y, f.Ja.f = k.Zj, f.Ja.d = k.C, f.P.b = k.Zj, f.P.a = k.C)
            }
            d = 0;
            for (b = b.Mi; d < b.length;) {
                g =
                    b[d];
                ++d;
                e = c.Li;
                var l = g.Be << 16 | g.first,
                    n = g.ek;
                e.g == e.u && e.R();
                g = e.c;
                f = e.Xc;
                k = 3 * e.Jb;
                e.Jb = e.Yb[e.Jb];
                g[k] = l;
                g[k + 1] = n;
                n = 73856093 * l & e.Zc;
                l = f[n];
                if (-1 == l) f[n] = k;
                else {
                    for (f = g[l + 2]; - 1 != f;) l = f, f = g[f + 2];
                    g[l + 2] = k
                }
                e.g++
            }
            return a
        },
        i: $c
    };
    Ye.__name__ = "145";
    Ye.prototype = {
        i: Ye
    };
    Xe.__name__ = "146";
    Xe.prototype = {
        i: Xe
    };
    We.__name__ = "147";
    We.prototype = {
        sw: function(a) {
            a = new Pb(a);
            var b = a.W(),
                c = a.W(),
                d = a.W();
            if (66 != b || 77 != c || 70 != d) throw 0;
            if (3 != a.W()) throw 0;
            a.W();
            b = a.Oc();
            c = a.qb();
            a.W();
            a.W();
            a.Cd();
            a.W();
            d = a.W();
            var e =
                a.W(),
                f = a.W(),
                g = a.W();
            a.W();
            a.W();
            a.W();
            a.nj(b - 14);
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    kn: d,
                    right: e,
                    ub: f,
                    left: g
                }
            };
            a.W();
            a.Oc();
            b = a.Cd();
            c = a.Cd();
            d = a.Cd();
            e = a.Cd();
            a.Cd();
            a.W();
            a.W();
            a.W();
            a.W();
            a.W();
            this.ge = {
                lineHeight: b,
                ee: c,
                Dm: d,
                Cm: e
            };
            a.W();
            b = a.Oc();
            c = a.ea;
            a.Jq(0);
            c = a.ea - c;
            for (b -= c; 0 < b;) a.Jq(0), b -= c;
            a.W();
            b = a.Oc() / 20 | 0;
            for (c = 0; c < b;) {
                ++c;
                d = a.Oc();
                e = a.Cd();
                f = a.Cd();
                g = a.Cd();
                var k = a.Cd(),
                    l = a.qb(),
                    n = a.qb(),
                    t = a.qb();
                a.W();
                a.W();
                this.mi.push({
                    id: d,
                    x: e,
                    y: f,
                    width: g,
                    height: k,
                    xn: l,
                    yn: n,
                    vn: t
                })
            }
            if (a.ea != a.cn)
                for (a.W(),
                    a.Oc(); a.ea < a.cn;) b = a.Oc(), c = a.Oc(), d = a.qb(), this.Mi.push({
                    first: b,
                    Be: c,
                    ek: d
                })
        },
        uw: function(a) {
            a = w.parse(a).pu();
            if (a.nodeType != w.Document && a.nodeType != w.Element) throw 0;
            for (var b = [], c = Hb(Ga.resolve(Ub.resolve(a, "info"), "padding").split(",")); c.ia();) b.push(C.parseInt(c.next()));
            b = aa.Vn(b);
            c = C.parseInt(Ga.resolve(Ub.resolve(a, "info"), "size"));
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    kn: b[0],
                    right: b[1],
                    ub: b[2],
                    left: b[3]
                }
            };
            this.ge = {
                lineHeight: C.parseInt(Ga.resolve(Ub.resolve(a, "common"), "lineHeight")),
                ee: C.parseInt(Ga.resolve(Ub.resolve(a,
                    "common"), "base")),
                Dm: C.parseInt(Ga.resolve(Ub.resolve(a, "common"), "scaleW")),
                Cm: C.parseInt(Ga.resolve(Ub.resolve(a, "common"), "scaleH"))
            };
            b = 0;
            for (c = Zf.resolve(Ub.resolve(a, "chars"), "char"); b < c.length;) {
                var d = c[b];
                ++b;
                this.mi.push({
                    id: C.parseInt(Ga.resolve(d, "id")),
                    x: C.parseInt(Ga.resolve(d, "x")),
                    y: C.parseInt(Ga.resolve(d, "y")),
                    width: C.parseInt(Ga.resolve(d, "width")),
                    height: C.parseInt(Ga.resolve(d, "height")),
                    xn: C.parseInt(Ga.resolve(d, "xoffset")),
                    yn: C.parseInt(Ga.resolve(d, "yoffset")),
                    vn: C.parseInt(Ga.resolve(d,
                        "xadvance"))
                })
            }
            if (bg.resolve(a, "kernings"))
                for (b = 0, a = Zf.resolve(Ub.resolve(a, "kernings"), "kerning"); b < a.length;) c = a[b], ++b, this.Mi.push({
                    first: C.parseInt(Ga.resolve(c, "first")),
                    Be: C.parseInt(Ga.resolve(c, "second")),
                    ek: C.parseInt(Ga.resolve(c, "amount"))
                })
        },
        tw: function(a) {
            a = (new L("\r\n", "g")).match(a) ? a.split("\r\n") : a.split("\n");
            var b = new L('^info face=".*?" size=(-?\\d+).*?padding="(\\d+,\\d+,\\d+,\\d+)"', "");
            b.match(a[0]);
            for (var c = [], d = Hb(b.Ka(2).split(",")); d.ia();) c.push(C.parseInt(d.next()));
            c = aa.Vn(c);
            b = C.parseInt(b.Ka(1));
            this.info = {
                size: 0 > b ? -b : b,
                padding: {
                    kn: c[0],
                    right: c[1],
                    ub: c[2],
                    left: c[3]
                }
            };
            c = new L("^common lineHeight=(\\d+) base=(\\d+) scaleW=(\\d+) scaleH=(\\d+)", "");
            b = 2;
            c.match(a[1]);
            this.ge = {
                lineHeight: C.parseInt(c.Ka(1)),
                ee: C.parseInt(c.Ka(2)),
                Dm: C.parseInt(c.Ka(3)),
                Cm: C.parseInt(c.Ka(4))
            };
            c = new L("chars count=(\\d+)", "");
            d = new L("^char id=(\\d+)\\s+x=(\\d+)\\s+y=(\\d+)\\s+width=(\\d+)\\s+height=(\\d+)\\s+xoffset=(-?\\d+)\\s+yoffset=(-?\\d+)\\s+xadvance=(\\d+)", "");
            for (var e =
                    new L("kernings count=(\\d+)", ""), f = new L("kerning first=(\\d+)\\s+second=(\\d+)\\s+amount=(-?\\d+)", ""), g = 0, k = 0, l = 0, n = 0; b < a.length;) {
                var t = a[b++];
                0 == k ? c.match(t) && (k = C.parseInt(c.Ka(1))) : g < k ? (d.match(t), this.mi.push({
                    id: C.parseInt(d.Ka(1)),
                    x: C.parseInt(d.Ka(2)),
                    y: C.parseInt(d.Ka(3)),
                    width: C.parseInt(d.Ka(4)),
                    height: C.parseInt(d.Ka(5)),
                    xn: C.parseInt(d.Ka(6)),
                    yn: C.parseInt(d.Ka(7)),
                    vn: C.parseInt(d.Ka(8))
                }), ++g) : 0 == n ? e.match(t) && (n = C.parseInt(e.Ka(1))) : l < n && (f.match(t), this.Mi.push({
                    first: C.parseInt(f.Ka(1)),
                    Be: C.parseInt(f.Ka(2)),
                    ek: C.parseInt(f.Ka(3))
                }), ++l)
            }
        },
        i: We
    };
    Vb.__name__ = "148";
    Vb.__interfaces__ = [oc];
    Vb.prototype = {
        Qo: function() {
            var a = new bd,
                b = JSON.parse(this.json),
                c = la.Za(b, "meta");
            null != c && (a.scale = la.Za(c, "scale"));
            c = 0;
            b = la.Za(b, "frames");
            for (var d = 0; d < b.length;) {
                var e = b[d];
                ++d;
                var f = new ad;
                a.frames.push(f);
                f.id = c++;
                f.name = la.Za(e, "filename");
                var g = la.Za(e, "frame");
                f.Ja.b = la.Za(g, "x");
                f.Ja.a = la.Za(g, "y");
                f.Ja.f = la.Za(g, "w");
                f.Ja.d = la.Za(g, "h");
                Object.prototype.hasOwnProperty.call(e, "trimmed") ?
                    f.fn = la.Za(e, "trimmed") : f.fn = !1;
                Object.prototype.hasOwnProperty.call(e, "sourceSize") ? (g = la.Za(e, "sourceSize"), f.P.b = la.Za(g, "w"), f.P.a = la.Za(g, "h")) : (f.P.b = f.Ja.f, f.P.a = f.Ja.d);
                Object.prototype.hasOwnProperty.call(e, "spriteSourceSize") ? (g = la.Za(e, "spriteSourceSize"), f.Ge.b = la.Za(g, "x"), f.Ge.a = la.Za(g, "y")) : (f.Ge.b = 0, f.Ge.a = 0)
            }
            return a
        },
        i: Vb
    };
    Of.__name__ = "149";
    Of.sy = function(a) {
        function b() {
            var a = c.W(),
                b = {},
                d = {};
            b.frame = d;
            d.x = 0 < (a & 1) ? c.W() : c.qb();
            d.y = 0 < (a & 2) ? c.W() : c.qb();
            d.w = 0 < (a & 4) ? c.W() : c.qb();
            d.h =
                0 < (a & 8) ? c.W() : c.qb();
            d = {};
            b.sourceSize = d;
            d.w = 0 < (a & 16) ? c.W() : c.qb();
            d.h = 0 < (a & 32) ? c.W() : c.qb();
            d = {};
            b.spriteSourceSize = d;
            d.x = 0 < (a & 64) ? c.W() : c.qb();
            d.y = 0 < (a & 128) ? c.W() : c.qb();
            b.trimmed = 1 == c.W();
            return b
        }
        var c = new Pb(a);
        a = c.W();
        var d = c.W(),
            e = c.W();
        if ("TPJ" != String.fromCodePoint(a) + String.fromCodePoint(d) + String.fromCodePoint(e)) throw 0;
        a = [];
        e = {};
        d = {};
        e.size = d;
        d.w = c.qb();
        d.h = c.qb();
        e.scale = c.Hw();
        d = {};
        d.frames = a;
        d.meta = e;
        var f = c.qb();
        for (e = 0; e < f;) {
            e++;
            var g = c.qb();
            g = c.nj(g);
            var k = b();
            k.filename = g;
            a.push(k)
        }
        f =
            c.qb();
        for (e = 0; e < f;) {
            e++;
            var l = c.qb();
            g = c.qb();
            g = c.nj(g);
            k = 0;
            for (var n = l; k < n;) {
                var t = k++,
                    r = b();
                l = "" + t;
                1E3 > t && (l = "0" + l);
                100 > t && (l = "0" + l);
                10 > t && (l = "0" + l);
                r.filename = g + "/" + l;
                a.push(r)
            }
        }
        return JSON.stringify(d)
    };
    Ve.__name__ = "14A";
    Ve.prototype = {
        get: function(a) {
            return this.data[a]
        },
        set: function(a, b) {
            this.data[a] = b;
            return this
        },
        i: Ve
    };
    Ue.__name__ = "14B";
    Ue.prototype = {
        save: function() {
            if (null != this.oj) return this.oj;
            var a = (new Te(!0)).write(this.entries);
            if (void 0 !== window.pako) try {
                window.pako;
                var b = new pako.Deflate({
                    level: 9
                });
                b.push(a.a.ut, !0);
                a = ra.aj(la.Za(b, "result"))
            } catch (c) {}
            this.oj = ub.encode(a, !0);
            new Za;
            return this.oj
        },
        i: Ue
    };
    Te.__name__ = "14C";
    Te.prototype = {
        write: function(a) {
            return this.Et ? this.Ay(a) : this.Cy(a)
        },
        Cy: function(a) {
            for (var b = new xb, c = 0; c < a.length;) {
                var d = a[c];
                ++c;
                var e = d.type;
                b.Ha(e);
                switch (e) {
                    case 0:
                        b.Hr(d.get(0));
                        this.Ig(d.get(1), b);
                        break;
                    case 1:
                        b.Cf(d.get(2));
                        break;
                    case 2:
                        b.Ha(d.get(3));
                        this.Ig(d.get(4), b);
                        break;
                    case 3:
                        b.tn(d.get(5));
                        e = 0;
                        d.get(6) && (e = 1);
                        d.get(7) && (e |= 2);
                        d.get(8) && (e |= 4);
                        d.get(9) &&
                            (e |= 8);
                        b.Ha(e);
                        break;
                    case 4:
                        b.tn(d.get(10));
                        b.tn(d.get(11));
                        b.Ha(d.get(12));
                        b.Ha(d.get(13));
                        break;
                    case 5:
                        b.Cf(d.get(10)), b.Cf(d.get(11))
                }
            }
            return b.Kc()
        },
        Ay: function(a) {
            for (var b = Array(a.length), c = [], d = 0; 6 > d;) ++d, c.push([]);
            d = 0;
            for (var e = a.length; d < e;) {
                var f = d++,
                    g = a[f];
                b[f] = g.type;
                c[g.type].push(g)
            }
            d = new wc;
            for (a = 0; a < b.length;) d.$a(b[a++], 3);
            a = new xb;
            a.Jg(b.length);
            b = d.Kc();
            a.Jg(b.length);
            a.Bf(b, 0, b.length);
            a = a.Kc();
            b = a.length;
            this.buffer.Jg(b);
            this.buffer.Bf(a, 0, b);
            for (b = 0; 6 > b;) {
                e = b++;
                a = new xb;
                d =
                    [c[e]];
                f = [function(a) {
                    return function(b) {
                        for (var c = [], d = 0; d < a[0].length;) c.push(a[0][d++].get(b));
                        return c
                    }
                }(d)];
                switch (e) {
                    case 0:
                        d = d[0][0];
                        a.Hr(d.get(0));
                        this.Ig(d.get(1), a);
                        break;
                    case 1:
                        d = f[0](2);
                        pf.encode(d);
                        e = new wc;
                        for (f = 0; f < d.length;) g = d[f], ++f, e.$a(0 > g ? 1 : 0, 1), 0 > g && (g = -g), 32 > g ? (e.$a(1, 1), e.$a(g, 5)) : (e.$a(0, 1), e.$a(g, 16));
                        d = e.Kc();
                        a.Jg(d.length);
                        a.Bf(d, 0, d.length);
                        break;
                    case 2:
                        for (e = 0; e < d[0].length;) f = d[0][e], ++e, a.Ha(f.get(3)), this.Ig(f.get(4), a);
                        break;
                    case 3:
                        for (e = 0; e < d[0].length;) f = d[0][e],
                            ++e, a.Ha(f.get(5) & 255), g = 0, f.get(6) && (g = 1), f.get(7) && (g |= 2), f.get(8) && (g |= 4), f.get(9) && (g |= 8), a.Ha(g);
                        break;
                    case 4:
                        e = [new wc];
                        g = function(a, b) {
                            return function(c) {
                                c = b[0](c);
                                pf.encode(c);
                                for (var d = 0; d < c.length;) {
                                    var e = c[d];
                                    ++d;
                                    a[0].$a(0 > e ? 1 : 0, 1);
                                    0 > e && (e = -e);
                                    4 > e ? (a[0].$a(0, 2), a[0].$a(e, 2)) : 16 > e ? (a[0].$a(1, 2), a[0].$a(e, 4)) : 32 > e ? (a[0].$a(2, 2), a[0].$a(e, 5)) : (a[0].$a(3, 2), a[0].$a(e & 65535, 16))
                                }
                            }
                        }(e, f);
                        g(10);
                        g(11);
                        for (g = 0; g < d[0].length;) e[0].$a(d[0][g++].get(12), 2);
                        d = this.Yw(f[0](13));
                        f = d.length >> 1;
                        e[0].$a(f,
                            16);
                        for (var k = g = 0; k < f;) {
                            ++k;
                            var l = d[g++],
                                n = d[g++],
                                t = 32 - sd.cw(l);
                            t = 1 > t ? 1 : t;
                            e[0].$a(t, 5);
                            e[0].$a(l, t);
                            4 > n ? (e[0].$a(0, 1), e[0].$a(n, 2)) : (e[0].$a(1, 1), e[0].$a(n, 8))
                        }
                        d = e[0].Kc();
                        a.Jg(d.length);
                        a.Bf(d, 0, d.length);
                        break;
                    case 5:
                        for (e = 0; e < d[0].length;) f = d[0][e], ++e, a.Cf(f.get(10)), a.Cf(f.get(11))
                }
                a = a.Kc();
                d = a.length;
                this.buffer.Jg(d);
                this.buffer.Bf(a, 0, d)
            }
            return this.buffer.Kc()
        },
        Ig: function(a, b) {
            b.Cf(Pf.yy(a));
            b.Ig(a, Sb.i0)
        },
        Yw: function(a) {
            var b = a.length;
            if (0 == b) return [];
            for (var c = [], d = a[0], e = 0, f = 0; f < b;) {
                var g =
                    a[f++];
                g != d ? (c.push(e), c.push(d), e = 1, d = g) : ++e
            }
            c.push(e);
            c.push(d);
            return c
        },
        i: Te
    };
    wb.__name__ = "14D";
    wb.prototype = {
        get: function(a) {
            return sa.get(this.tc, a)
        },
        Vb: function(a) {
            return sa.jt(this.tc, a)
        },
        i: wb
    };
    Se.__name__ = "14E";
    Se.prototype = {
        i: Se
    };
    Ka.__name__ = "14F";
    Ka.__interfaces__ = [Qf];
    Ka.cb = function() {
        null == Ka.Mg && new Ka;
        return Ka.Mg
    };
    Ka.B = z;
    Ka.prototype = v(z.prototype, {
        Rx: function(a, b) {
            od.Zk(a);
            this.jd(null, a, !1, b)
        },
        Aq: function(a, b) {
            null == b && (b = []);
            for (var c = a.firstChild; null != c;) c instanceof N && this.Aq(c,
                b), c = c.L;
            b.push(a);
            return b
        },
        jd: function(a, b, c, d) {
            var e = !1,
                f = aa.filter(this.Em, function(a) {
                    return E.Xe(a) == b
                })[0];
            null == f && (f = Fb.Qt(b), e = !0);
            f.vc = new wb(a, d);
            if (!e && null != f.parent && f.parent instanceof N) e = f.uc(), this.Ib = f, this.pop(e, f);
            else if (c) {
                var g = this.Ib;
                g.ue();
                g.O(f);
                e && f.zc();
                this.Ib = f;
                var k = B(this, this.push),
                    l = f;
                f.jq = function() {
                    k(g, l)
                };
                f.jq()
            } else if (null != this.Ib) {
                for (a = this.Ib; a != this;) c = E.tb(a, N), 3 == c.state && c.ue(), a = a.parent;
                a = this.Ib;
                this.Ib = f;
                this.O(f);
                e && f.zc();
                this.mk(a, f)
            } else this.Ib =
                this.root = f, this.O(f), e && f.zc(), this.push(null, f)
        },
        push: function(a, b) {
            b.Zb();
            this.vk().push(a, b)
        },
        pop: function(a, b) {
            this.vk().pop(a, b)
        },
        mk: function(a, b) {
            this.vk().mk(a, b)
        },
        pw: function(a, b, c) {
            switch (c) {
                case 0:
                    if (b.fh() && null != a)
                        for (; a != this;) c = a.parent, a = E.tb(a, N), 5 == a.state && a.th(), a = c;
                    b.wb();
                    break;
                case 1:
                    c = 0;
                    for (a = this.wu(a); c < a.length;) {
                        var d = a[c];
                        ++c;
                        d.th();
                        d.remove();
                        d.o()
                    }
                    switch (b.state) {
                        case 2:
                        case 4:
                        case 5:
                            b.wb();
                            break;
                        case 6:
                            b.im(), b.wb()
                    }
                    break;
                case 2:
                    for (; a != this;) c = a.parent, a = E.tb(a, N),
                        5 == a.state && a.th(), a.remove(), a.o(), a = c;
                    b.wb()
            }
        },
        finish: function(a, b) {
            if (1 == a.state) a.o();
            else if (3 == a.state && a.ue(), null != a.parent && a.parent != this) {
                this.Ib = a.parent;
                this.Ib.vc = new wb(a, b);
                if (6 == this.Ib.state && (this.Ib.im(), !this.Ib.fh())) {
                    var c = this.Ib.parent,
                        d = E.Xe(c);
                    for (d.__name__;;) {
                        c.vc = new wb(a, b);
                        c.im();
                        c.wb();
                        c.ue();
                        if (c.fh()) break;
                        c = c.parent;
                        if (c.parent == this) break
                    }
                }
                this.pop(a, this.Ib)
            } else this.root = this.Ib = null, a.ue(), this.pop(a, null)
        },
        vk: function() {
            return new Na(this)
        },
        wu: function(a) {
            for (var b =
                    [], c = a; null != c;) {
                b.push(c);
                a = null;
                for (c = c.firstChild; null != c;) {
                    if (c instanceof N) {
                        a = c;
                        break
                    }
                    c = c.L
                }
                if (null == a) break;
                c = a
            }
            b.reverse();
            return b
        },
        o: function() {
            for (var a = 0, b = this.Aq(this.firstChild); a < b.length;) {
                var c = b[a];
                ++a;
                switch (c.state) {
                    case 3:
                        c.ue();
                        c.th();
                        break;
                    case 5:
                        c.th()
                }
            }
            z.prototype.o.call(this);
            this.Ib = this.root = null;
            this.Em.A();
            this.Em = this.Ib = this.root = null
        },
        i: Ka
    });
    Zc.__name__ = "150";
    Zc.__interfaces__ = [hc];
    Zc.prototype = {
        Nd: function() {
            return 0
        },
        cj: function() {},
        hg: function() {},
        dm: function() {},
        i: Zc
    };
    Na.__name__ = "151";
    Na.vm = function(a, b, c) {
        var d = Na.wm;
        a = "" + (null == a ? "*" : a.__name__) + "-" + (null == b ? "*" : b.__name__);
        null != X[a] ? d.Dc(a, c) : d.C[a] = c
    };
    Na.Ow = function(a) {
        Na.vm(a, null, null);
        Na.vm(null, a, null)
    };
    Na.prototype = {
        push: function(a, b) {
            this.hk(a, b, 0)
        },
        pop: function(a, b) {
            this.hk(a, b, 1)
        },
        mk: function(a, b) {
            b.Zb();
            this.hk(a, b, 2)
        },
        mx: function(a, b) {
            function c(a, b) {
                a = (null == a ? "null" : "*" == a ? "*" : E.Xe(a).__name__) + "-" + (null == b ? "null" : "*" == b ? "*" : E.Xe(b).__name__);
                b = Na.wm;
                return (null != X[a] ? b.Ug(a) : b.C.hasOwnProperty(a)) ?
                    (b = Na.wm, d.Ga = null != X[a] ? b.gc(a) : b.C[a], !0) : !1
            }
            var d = this;
            this.Ga = null;
            c(a, b) || c("*", b) || c(a, "*") || c("*", "*");
            null == this.Ga && (this.Ga = new Zc)
        },
        hk: function(a, b, c) {
            this.b = a;
            this.a = b;
            this.type = c;
            x.ld.ua(B(this, this.update));
            x.pg.ua(B(this, this.pa));
            this.mx(a, b);
            this.elapsedTime = 0;
            this.duration = this.Ga.Nd(a, b, c);
            0 < b.Xh ? (b.canvas.fa(!1), this.state = 1) : (this.Ga.cj(a, b, c), this.state = 2)
        },
        end: function(a, b, c) {
            this.Xv.pw(a, b, c);
            this.state = 0;
            x.ld.detach(B(this, this.update));
            x.pg.detach(B(this, this.pa))
        },
        update: function(a) {
            switch (this.state) {
                case 1:
                    if (0 <
                        this.a.Xh) break;
                    this.a.canvas.fa(!0);
                    this.Ga.cj(this.b, this.a, this.type);
                    this.state = 2;
                    break;
                case 3:
                    this.elapsedTime += a;
                    a = Math.min(this.elapsedTime / this.duration, 1);
                    this.Ga.hg(this.b, this.a, this.type, a);
                    1 == a && (this.Ga.dm(this.b, this.a, this.type), this.state = 4);
                    break;
                case 5:
                    a = this.b;
                    var b = this.a;
                    this.a = this.b = null;
                    this.state = 0;
                    this.end(a, b, this.type)
            }
        },
        pa: function() {
            switch (this.state) {
                case 2:
                    this.state = 3;
                    break;
                case 4:
                    this.state = 5
            }
        },
        i: Na
    };
    Re.zn |= 0;
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 >
            a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    });
    String.prototype.i = String;
    String.__name__ = "152";
    Array.__name__ = "153";
    Date.prototype.i = Date;
    Date.__name__ = "154";
    var fg = {},
        dg = {},
        eg = Number,
        cg = Boolean,
        $f = {},
        gg = {},
        X = {};
    Object.defineProperty(fc.prototype, "message", {
        get: function() {
            return String(this.Ya)
        }
    });
    E.Ys = {}.toString;
    z.Dn = 0;
    ba.language = "en";
    ba.Ww = "res";
    ba.Wn = [];
    ba.rm = 16777215 * Math.random() | 0;
    Ya.bh = !1;
    fa.$y = 1;
    fa.TYPE = 1;
    Gb.Ng = !1;
    ca.Pl = !0;
    ca.Rb = !0;
    ca.Xb =
        0;
    x.ld = new mb;
    x.pg = new mb;
    x.time = 0;
    x.Io = 0;
    x.Jo = 60;
    x.Qp = -1;
    x.Ut = .016666666666666666;
    x.bn = 1;
    x.Tl = 0;
    x.Bp = 0;
    x.jh = 0;
    x.ce = 0;
    x.first = !0;
    F.bh = !1;
    w.Element = 0;
    w.Vr = 1;
    w.Ir = 2;
    w.Comment = 3;
    w.Lr = 4;
    w.ProcessingInstruction = 5;
    w.Document = 6;
    l.count = 0;
    M.Ea = 8;
    M.ak = M.Ea * M.Ea;
    Xa.names = [
        ["empty", "blue", "green", "purple", "red", "white", "yellow", null, null, "hyper"],
        ["none", "fire", "lightning", null, null, null, null, null, null, "hyper"]
    ];
    t.Gn = 1E3;
    t.cs = 1001;
    t.ds = 1002;
    t.es = 1003;
    t.fs = 1004;
    t.gs = 1005;
    t.hs = 1006;
    t.js = 1007;
    t.ks = 1008;
    t.ls = 1009;
    t.ms = 1010;
    t.Hn = 1011;
    t.ns = 1012;
    t.os = 1013;
    t.ps = 1014;
    t.qs = 1015;
    t.rs = 1016;
    t.ss = 1017;
    t.In = 1018;
    t.ts = 1019;
    t.us = 1020;
    t.vs = 1021;
    t.ws = 1022;
    t.xs = 1023;
    t.ys = 1024;
    t.zs = 1025;
    t.Jn = 1026;
    t.As = 1027;
    t.Kn = 1028;
    t.Bs = 1029;
    t.Cs = 1030;
    t.Ds = 1031;
    t.Es = 1032;
    t.Fs = 1033;
    t.Gs = 1034;
    t.Hs = 1035;
    t.Is = 1036;
    t.Js = 1037;
    t.Ks = 1038;
    t.Ls = 1039;
    t.Ms = 1040;
    t.Ns = 1041;
    t.Os = 1042;
    t.Ps = 1043;
    t.Qs = 1044;
    t.Rs = 1045;
    t.Ln = 1046;
    t.Mn = 1047;
    t.Ss = 1048;
    t.Ts = 1049;
    t.Us = 1050;
    lb.ai = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    vb.we = new bb;
    vb.$x = [-1, 21, 20, 18, 17, 16, 15];
    ub.Jr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    ub.An = ra.am(ub.Jr);
    Ob.hl = new DataView(new ArrayBuffer(8));
    Cb.Co = function() {
        var a = new $a;
        null != X.lt ? a.Dc("lt", "<") : a.C.lt = "<";
        null != X.gt ? a.Dc("gt", ">") : a.C.gt = ">";
        null != X.amp ? a.Dc("amp", "&") : a.C.amp = "&";
        null != X.quot ? a.Dc("quot", '"') : a.C.quot = '"';
        null != X.apos ? a.Dc("apos", "'") : a.C.apos = "'";
        return a
    }(this);
    Nb.eo = 0;
    n.gk = "res";
    n.Qi = new bb;
    n.pe = new bb;
    n.fo = [];
    n.uh = new bb;
    n.Zx = "txt csv xml json yaml properties js".split(" ");
    n.pv = ["png", "jpg"];
    n.Fh = new $a;
    n.ti = new bb;
    n.locked = new bb;
    n.Df = "ui.png logo.png loadloop.png lang/strings_{language}.txt famobi.png core/shine.png core/misc.png core/lightning.png core/hyper.png core/gems.png core/fire.png core/explosion.png core/circle.png core/checkerboard.png bmf/profont.png bmf/points_yellow.png bmf/points_white.png bmf/points_red.png bmf/points_purple.png bmf/points_hyper.png bmf/points_green.png bmf/points_blue.png bmf/points.fnt bmf/main_b.png bmf/main.png bmf/main.fnt bg.jpg audio/{audio}/sounds.{audio}".split(" ");
    n.Aw = [2, 3, 14, 24, 25, 26];
    n.Vw = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
    db.state = new $a;
    pa.enabled = !0;
    A.fi = void 0;
    A.active = !1;
    A.Bl = !1;
    Mb.No = !0;
    ea.Bn = 0;
    ea.$j = 0;
    ea.Cn = 10;
    da.$h = window.devicePixelRatio;
    da.xe = 96;
    da.Mt = 0;
    hb.Fn = new hb(Sa.i1);
    hb.Wr = new hb(Sa.i3);
    ua.Kr = 1;
    ma.vg = new sb;
    ma.Kx = new sb;
    za.Dr = 0;
    za.Cr = 0;
    za.ro = 0;
    za.aq = 0;
    za.$p = 0;
    yb.ey = function() {
        var a = new rc;
        sc.mf(a);
        return a
    }(this);
    yb.fy = function() {
        var a = new rc;
        sc.mf(a);
        return a
    }(this);
    ja.count = 0;
    K.ke = 0;
    ka.ke = 0;
    na.ke =
        0;
    ia.Um = new sb;
    Z.mr = 0;
    Z.Rh = new bb;
    Na.wm = new $a
})("undefined" != typeof exports ? exports : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this, "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
//# sourceMappingURL=diamondrush-min.js.map
