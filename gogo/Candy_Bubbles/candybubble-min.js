(function(ff, gf) {
    function cb(a) {
        this.state = 0;
        this.Ya = null;
        this.xC = a
    }

    function ce() {}

    function ya() {
        ya.Gd = this;
        C.call(this);
        this.pr = new W;
        this.type = 10
    }

    function hf(a, b, c, d) {
        this.loaded = !1;
        this.OE = a;
        this.PE = b;
        this.NE = c;
        this.rc = d
    }

    function $b(a, b) {
        null == b && (b = {});
        this.caller = a;
        this.Af = b
    }

    function ld() {
        var a = db.decode(ld.KF),
            b = new Wa(a);
        b.Qw(!0);
        this.KB = b.nc();
        this.DA = b.nc();
        var c = b.nc();
        a = a.sub(12, a.length - 12);
        b = new ma(new ArrayBuffer(c));
        c = new ma(new ArrayBuffer(c));
        Db.pe(a, b);
        Db.pe(b, c);
        this.data = [];
        a =
            Dg.NA(c);
        b = 0;
        for (c = a.length; b < c;) {
            var d = b++;
            this.data[d] = a[d]
        }
    }

    function jf(a, b) {
        this.Tt = new nc;
        this.iv = new nc;
        this.sourceIndex = this.tag = this.P = this.yi = 0;
        this.source = a;
        this.kg = b
    }

    function nc() {
        this.te = [];
        this.table = [];
        for (var a = [], b = 0; 16 > b;) b++, a.push(0);
        this.table = a;
        a = [];
        for (b = 0; 288 > b;) b++, a.push(0);
        this.te = a
    }

    function Db() {}

    function qg() {}

    function kf() {
        this.We = this.Jf = null;
        this.J = this.Dh = 0;
        this.Jz = new ld;
        this.reset()
    }

    function rg() {}

    function Jc(a) {
        this.json = a
    }

    function lf(a) {
        this.Il = [];
        this.Am = [];
        try {
            if (a instanceof ma) this.$C(a);
            else if ("string" == typeof a)(new Y('<\\?xml version="1.0"\\?>', "")).match(a) ? this.bD(a) : this.aD(a);
            else throw 0;
            this.jg.lineHeight < this.info.size && (this.jg.lineHeight = this.info.size)
        } catch (b) {
            throw 0;
        }
    }

    function mf() {
        this.Oi = new Kc(1024);
        this.Ko = new md(1024);
        this.padding = Array(4);
        for (var a = 0; 4 > a;) {
            var b = a++;
            this.padding[b] = 0
        }
    }

    function nf() {
        this.x = this.y = this.wl = this.G = this.offsetX = this.offsetY = this.so = 0;
        this.code = -1
    }

    function de(a) {
        this.tC = a
    }

    function nd() {}

    function ee() {
        this.gs = !1;
        var a =
            new x;
        a.b = 0;
        a.a = 0;
        this.Qg = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.U = a;
        a = new Lc;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        a.d = 0;
        this.Xa = a
    }

    function fe() {
        this.Tg = null;
        this.frames = [];
        this.scale = 1
    }

    function ge(a, b) {
        this.id = b.id;
        this.name = b.name;
        a = a.dc;
        var c = a.U,
            d = b.Xa,
            e = d.b,
            f = d.a,
            g = d.c,
            h = d.d;
        null == h && (h = 0);
        null == g && (g = 0);
        null == f && (f = 0);
        null == e && (e = 0);
        d = new w;
        d.b = e;
        d.a = f;
        d.c = g;
        d.d = h;
        this.nF = d;
        e = d.b;
        f = d.a;
        g = d.c;
        h = d.d;
        null == h && (h = 0);
        null == g && (g = 0);
        null == f && (f = 0);
        null == e && (e = 0);
        var l = new w;
        l.b = e;
        l.a = f;
        l.c = g;
        l.d = h;
        this.Tr = l;
        d.b /= c.b;
        d.a /= c.a;
        d.c /=
            c.b;
        d.d /= c.a;
        a.Mi && (e = c.b / a.Ag.b, a = c.a / a.Ag.a, d.b *= e, d.a *= a, d.c *= e, d.d *= a);
        (this.hs = b.gs) ? (a = b.Qg, c = a.a, d = new x, d.b = a.b, d.a = c, this.Qg = d, b = b.U, a = b.a, c = new x, c.b = b.b) : (a = new x, a.b = 0, a.a = 0, this.Qg = a, a = b.Xa.d, c = new x, c.b = b.Xa.c);
        c.a = a;
        this.U = c
    }

    function of(a, b) {
        this.Km = new ub;
        this.dc = a;
        this.scale = b.scale;
        this.Tg = b.Tg;
        this.Zm = b.frames.length;
        a = new W(this.Zm);
        for (var c = 0, d = b.frames; c < d.length;) {
            var e = d[c];
            ++c;
            e = e.id;
            a.i == a.C && a.R();
            a.f[a.i++] = e
        }
        a.sort(function(a, b) {
            return a - b
        }, !0);
        this.Ri = !0;
        c = a.f[0];
        d =
            1;
        for (e = this.Zm; d < e;) {
            var f = d++;
            if (c + 1 != a.f[f]) {
                this.Ri = !1;
                break
            }++c
        }
        this.Ri && 16384 < a.f[a.i - 1] && (this.Ri = !1);
        if (this.Ri)
            for (this.hq = (new W).ua(a.f[a.i - 1] + 1, null), a = 0, b = b.frames; a < b.length;) e = b[a], ++a, c = new ge(this, e), this.hq.f[c.id] = c, d = this.Km, e = e.name, null != va[e] ? d.Bd(e, c) : d.G[e] = c;
        else
            for (a = this.Zm, --a, a |= a >> 1, a |= a >> 2, a |= a >> 4, a |= a >> 8, a |= a >> 16, this.iq = new md(++a), a = 0, b = b.frames; a < b.length;) e = b[a], ++a, c = new ge(this, e), this.iq.set(c.id, c), d = this.Km, e = e.name, null != va[e] ? d.Bd(e, c) : d.G[e] = c
    }

    function wa() {}

    function pf(a) {
        this.scale = 1;
        this.vl = this.ZB = !1;
        this.Ni = this.Tu = this.vm = !0;
        this.Mi = !1;
        this.zm = null;
        var b = new x;
        b.b = 0;
        b.a = 0;
        this.U = b;
        this.ib = null;
        this.Ag = this.U;
        if (this.YB = null != a) {
            this.ib = a.ib;
            b = a.U;
            var c = b.a,
                d = new x;
            d.b = b.b;
            d.a = c;
            this.U = d;
            b = a.Ag;
            c = b.a;
            d = new x;
            d.b = b.b;
            d.a = c;
            this.Ag = d;
            this.zm = a.zm;
            this.Mi = a.Mi;
            this.Ni = a.Ni;
            this.Tu = a.Tu;
            this.vm = a.vm;
            this.vl = a.vl;
            this.scale = a.scale
        }
    }

    function qf(a) {
        this.Sh = 0;
        this.B = a
    }

    function pa() {}

    function rf() {
        this.size = 0;
        this.data = []
    }

    function oc() {
        var a = new w;
        a.b = 1;
        a.a = 1;
        a.c = -1;
        a.d = -1;
        this.vF = a;
        a = new w;
        a.b = 1;
        a.a = 1;
        a.c = -1;
        a.d = -1;
        this.tF = a;
        this.Nc = new W(64);
        this.nt = new rf;
        null == oc.ot && (oc.ot = new kf)
    }

    function od() {
        this.pd = new W(32);
        this.Nc = new W(32)
    }

    function sf() {
        var a = new w;
        a.b = 1;
        a.a = 1;
        a.c = -1;
        a.d = -1;
        this.la = a;
        this.overflow = !1;
        this.ye = new W(256);
        this.pd = new W(64)
    }

    function tf() {
        this.multiline = this.Ho = !1;
        this.Oi = !0;
        this.Hl = 0;
        this.Fm = -1;
        this.sx = this.iC = 0;
        this.align = -1;
        this.width = this.height = 100;
        this.size = 10;
        this.text = ""
    }

    function pd() {}

    function he(a) {
        this.qm = 0;
        Qb.call(this,
            a)
    }

    function Xa(a, b) {
        this.Vn = this.Mp = !1;
        this.sb = !0;
        var c = new nb("SpriteText");
        c.j |= 2048;
        qa.call(this, c, 14);
        this.Og = new od;
        this.fa = new tf;
        this.Jc = new sf;
        null != a && a.appendChild(this);
        null != b && (this.Ka(b), this.fa.size = this.hg.xn);
        Xa.og++
    }

    function R(a) {
        this.repeat = -1;
        this.uk = 0;
        this.controller = null;
        this.length = -1;
        this.B = a
    }

    function ie() {
        Mc.call(this, 8)
    }

    function uf(a) {
        this.B = a
    }

    function aa(a, b, c) {
        this.fr = -1;
        qa.call(this, new nb(a), 2);
        this.j |= 1024;
        null != b && b.appendChild(this);
        if (null != c)
            for (a = 0; a < c.length;) b =
                c[a], ++a, this.appendChild(b);
        aa.og++
    }

    function vf(a) {
        this.lv = a
    }

    function B(a, b, c) {
        var d = new x;
        d.b = 0;
        d.a = 0;
        this.U = d;
        this.pj = null;
        this.Qj = -1;
        qa.call(this, this.$c = new Qb, 5);
        null != a && a.appendChild(this);
        null != b && this.Ka(b);
        null != c && this.bb(c);
        B.og++
    }

    function qa(a, b) {
        this.Vi = this.Si = null;
        this.j = 96;
        this.Hh = !0;
        this.Fe = 1;
        this.Qb = this.Rb = this.tg = this.ug = this.ie = 0;
        this.kb = this.Gc = 1;
        this.ab = this.Ua = 0;
        this.node = a;
        this.node.client = this;
        this.type = b;
        qa.count++
    }

    function ac() {
        var a = new pc;
        a.b = 1;
        a.a = 1;
        a.c = 1;
        this.scale =
            a;
        a = new pc;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        this.translate = a;
        a = new qd;
        wf.Vh(a);
        this.Ba = a;
        this.A = 15;
        wf.Vh(this.Ba);
        a = this.translate;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        a = this.scale;
        a.b = 1;
        a.a = 1;
        a.c = 1;
        this.A |= 63
    }

    function Na() {}

    function je() {}

    function za() {}

    function Qb(a, b) {
        Eb.call(this, a, b);
        this.type = 1
    }

    function Eb(a, b) {
        this.Zf = null;
        Ka.call(this, a, b);
        this.j |= 512;
        this.wg = this.Ct(b);
        this.ns();
        this.Zf = Array(4)
    }

    function nb(a) {
        this.gf = 0;
        this.ia = null;
        Ka.call(this, a);
        this.j |= 256
    }

    function Ka(a, b) {
        this.client = null;
        this.o = new ac;
        this.local = new ac;
        Nc.call(this);
        this.name = a;
        this.key = Oc.next();
        this.Vg = this.Ct(b);
        this.j = 232
    }

    function eb() {}

    function ke(a) {
        this.state = a
    }

    function xf(a) {
        var b = new w;
        b.b = 1;
        b.a = 1;
        b.c = -1;
        b.d = -1;
        this.la = b;
        b = [];
        for (var c = 0; 4 > c;) {
            ++c;
            var d = new pc;
            d.b = 0;
            d.a = 0;
            d.c = 0;
            b.push(d)
        }
        this.un = b;
        b = [];
        for (c = 0; 4 > c;) ++c, b.push(new qc);
        this.Oh = b;
        this.Nj = !0;
        this.zj = new W(1024);
        this.xb = a;
        this.zj.Rd = !0
    }

    function yf(a, b, c, d, e, f, g, h) {
        null == h && (h = 0);
        null == g && (g = 0);
        null == f && (f = 0);
        null == e && (e = 0);
        null == d && (d = 1);
        null == c && (c = 1);
        null == b && (b = 1);
        null ==
            a && (a = 1);
        this.AD = a;
        this.zB = b;
        this.tz = c;
        this.iz = d;
        this.BD = e;
        this.AB = f;
        this.uz = g;
        this.jz = h
    }

    function zf() {
        $a.call(this, ra.i3);
        this.Pz = new yf
    }

    function Af() {
        this.la = null;
        $a.call(this, ra.i2)
    }

    function le() {
        Fb.call(this, 1)
    }

    function Bf() {
        this.rotation = this.zoom = 0;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.Na = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.size = a
    }

    function Cf(a) {
        this.xb = null;
        this.Vp = !0;
        this.Wp = Oa.Yg();
        this.bs = !0;
        this.Ug = Oa.Yg();
        this.xb = a;
        this.state = new Bf;
        var b = a = 0,
            c = 512,
            d = 512;
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null ==
            a && (a = 0);
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        var e = new w;
        e.b = a;
        e.a = b;
        e.c = c;
        e.d = d;
        this.reset(e)
    }

    function bc() {
        var a = new w;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        a.d = 0;
        this.rb = a;
        Fb.call(this, 2)
    }

    function Fb(a) {
        this.type = a;
        a = new pc;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        this.Na = a;
        this.wb = 0
    }

    function rd(a) {
        null == a && (a = 1);
        $a.call(this, ra.i0);
        this.alpha = a
    }

    function Gb(a) {
        $a.call(this, ra.i1);
        this.Ao = a;
        this.Bc |= 1 << a.m << 4;
        if (5 == a.m) {
            var b = a.BH;
            this.Bc |= 1 << a.src.m << 12;
            this.Bc |= 1 << b.m << 20
        }
    }

    function $a(a) {
        this.type = a;
        this.Hr = a.m;
        this.Bc = 1 << this.Hr
    }

    function fb(a) {
        this.zf = 1;
        this.Hm = [];
        this.cu = this.xi = !1;
        var b = this;
        cc.call(this);
        var c = window.document,
            d = window;
        this.devicePixelRatio = d.devicePixelRatio;
        "undefined" !== typeof window.orientation && 0 > window.navigator.userAgent.indexOf("Mobile") && 980 == d.innerWidth && (this.devicePixelRatio = 1);
        this.xi = !1;
        null != a && (this.canvas = c.getElementById(a), this.xi = null != this.canvas);
        if (navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) try {
            c.body.addEventListener("touchmove", function(a) {
                a.preventDefault()
            }, !1), document.addEventListener("touchmove", function(a) {
                a.preventDefault()
            }, {
                passive: !1
            })
        } catch (e) {}
        this.xi || (this.canvas = c.createElement("canvas"), this.canvas.id = null != a ? a : "surface_" + fb.So++, this.canvas.width = 320, this.canvas.height = 240, this.canvas.style.setProperty("touch-action", "none"), this.canvas.style.setProperty("-ms-touch-action", "none"), this.canvas.style.setProperty("-webkit-overflow-scrolling", "auto"), this.canvas.style.setProperty("-webkit-overflow-scrolling", "none"), this.canvas.style.setProperty("user-select",
            "none"), c.body.appendChild(this.canvas), a = this.size, a.b = 320, a.a = 240);
        this.BB();
        this.$B() && this.addListener(c, "fullscreenchange", !0, function() {
            var a = b.Fo(window.document, null, ["isFullScreen", "fullScreen"]);
            null != a ? b.cu = a : (a = b.Fo(window.document, "fullscreenElement"), b.cu = null != a)
        });
        this.addListener(c, "visibilitychange", null, function() {
            null != b.aw && b.aw(!window.document.hidden)
        });
        this.addListener(d, "resize", null, function() {
            if (!b.xi && b.hz) {
                var a = b.Zq();
                b.resize(a.b, a.a)
            }
        });
        c = this.Zq();
        this.resize(c.b,
            c.a)
    }

    function sd() {
        this.zf = 1;
        this.JF = "rgba(0,0,0,0)";
        this.Pn = 0;
        this.yF = Oa.Yg();
        this.AF = new W(32);
        this.zF = new W(32);
        this.Qz = ["none", "source-over", "multiply", "lighter", "screen", null];
        this.wi = null;
        this.rk = -1;
        this.ih = "source-over";
        this.Bm = null;
        vb.call(this);
        this.ex = this.Kx = !0;
        var a = window.navigator.userAgent;
        this.Jr = 0 < a.indexOf("MSIE ") || 0 < a.indexOf("Trident/7.0") ? "msImageSmoothingEnabled" : "imageSmoothingEnabled"
    }

    function Pc(a) {
        this.frame = -1;
        this.ao = this.bo = 0;
        this.co = this.eo = 1;
        var b = new w;
        b.b = 0;
        b.a = 0;
        b.c = 0;
        b.d = 0;
        this.Xa = b;
        this.j = 0;
        ob.call(this, 4);
        if (null != a) {
            this.active = a.active;
            this.Rk = a.Rk;
            b = this.Xa;
            var c = a.Xa;
            b.b = c.b;
            b.a = c.a;
            b.c = c.c;
            b.d = c.d;
            this.frame = a.frame;
            this.j = a.j;
            this.dc = a.dc;
            this.ao = a.ao;
            this.bo = a.bo;
            this.co = a.co;
            this.eo = a.eo
        }
    }

    function td(a) {
        this.Kl = !0;
        ob.call(this, 13);
        null != a && (this.active = a.active, this.Rk = a.Rk, this.color = a.color)
    }

    function ob(a) {
        this.active = this.Rk = !0;
        this.type = a
    }

    function vb() {
        this.Ir = !0;
        this.VB = Oa.Yg();
        this.Qf = Oa.Yg();
        this.ex = this.Kx = !1;
        this.rD = !0;
        this.MA = !1;
        this.ti =
            null;
        this.Xe = 1;
        this.Pl = null;
        this.Bv = !1;
        this.ap = Oa.Yg();
        this.cA = Oa.Yg();
        this.Ft = new xf(this);
        this.eh = new Cf(this);
        this.Id = 0;
        this.Id |= 1 << ra.i1.m;
        this.Id |= 1 << ra.i0.m;
        this.Id |= 1 << ra.i2.m;
        this.Id |= 1 << ra.i3.m
    }

    function cc() {
        this.hz = !0;
        this.Lk = function() {};
        this.Pf = 96;
        Qc.call(this)
    }

    function Qc() {
        this.ss = !1;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.size = a;
        a = new Lc;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        a.d = 0;
        this.Ok = a;
        a = new w;
        a.b = 0;
        a.a = 0;
        a.c = 1;
        a.d = 1;
        this.viewport = a;
        a = new w;
        a.b = 1;
        a.a = 1;
        a.c = 1;
        a.d = 1;
        this.color = a
    }

    function me() {
        sa.call(this, 10)
    }

    function Df(a) {
        this.Vd = a.frames.length;
        this.Zc = Array(this.Vd);
        this.parameters = Array(this.Vd * Z.fc.slice().length);
        this.Lo = Array(this.Vd);
        this.$d = Array(this.Vd);
        var b = L.Gm(),
            c = 1,
            d = 1,
            e = 0,
            f = 0,
            g = 0,
            h = 1,
            l = 0,
            y = this.nf = 0;
        for (a = a.frames; y < a.length;) {
            var H = a[y];
            ++y;
            this.Zc[l] = this.nf;
            this.nf += H.fk;
            H = H.value;
            c = null != H.Rn ? H.Rn : c;
            this.parameters[6 * l + Z.i0.m] = c;
            d = null != H.Sn ? H.Sn : d;
            this.parameters[6 * l + Z.i1.m] = d;
            e = null != H.r ? H.r : e;
            this.parameters[6 * l + Z.i2.m] = e;
            f = null != H.x ? H.x : f;
            this.parameters[6 * l + Z.i3.m] = f;
            g = null !=
                H.y ? H.y : g;
            this.parameters[6 * l + Z.i4.m] = g;
            h = null != H.b ? H.b : h;
            this.parameters[6 * l + Z.i5.m] = h;
            this.$d[l] = b;
            ++l
        }
        b = Z.zc.slice();
        c = 0;
        for (d = this.Vd - 1; c < d;)
            for (e = c++, f = this.Lo[e] = 0; 6 > f;) g = f++, h = this.parameters[6 * e + b[g].m], l = this.parameters[6 * (e + 1) + b[g].m], h != l && (h = e, l = this.Lo, l[h] |= 1 << g)
    }

    function rc() {
        this.eq = new Ef;
        this.lastIndex = 0;
        sa.call(this, 9)
    }

    function Ef() {
        this.alpha = 1;
        this.rotation = this.cs = this.ds = 0;
        this.nr = this.or = 1
    }

    function Rc() {}

    function Mc(a) {
        this.Vk = this.Um = this.zk = 0;
        sa.call(this, a)
    }

    function sa(a) {
        this.bf = !1;
        this.vb = 0;
        this.Xr = 1;
        this.wd = this.Ie = this.ne = 0;
        this.type = a;
        this.repeat = Ha.i1;
        sa.Fs++
    }

    function Nc() {
        this.Uz = !0;
        this.controllers = null
    }

    function sc(a, b) {
        this.value = a;
        this.fk = b
    }

    function gb(a, b) {
        this.name = a;
        this.frames = b;
        this.nf = 0;
        this.Vd = b.length;
        a = 0;
        this.Qo = b[a++].fk;
        for (var c = b[a++].fk; a < this.Vd;)
            if (b[a++].fk != c) {
                this.Qo = 0;
                break
            }
        this.Zc = Array(this.Vd + 1);
        this.values = Array(this.Vd);
        for (a = 0; a < this.Vd;) c = b[a], this.Zc[a] = this.nf, this.values[a] = c.value, this.nf += c.fk, ++a;
        this.Zc[a] = this.nf
    }

    function sg() {}

    function Rb(a) {
        null == a && (a = 0);
        this.length = Math.max(a, 0);
        this.alpha = this.elapsedTime = 0
    }

    function ne(a) {
        this.Wa = a
    }

    function tc() {}

    function Pa() {}

    function oe() {}

    function Sc() {}

    function Ff() {
        this.me = NaN;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.Nh = a;
        this.sm = 3E38;
        this.Rp = NaN;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.rm = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.yh = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.zh = a
    }

    function Gf() {
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.Nh = a;
        this.OB = Array(256);
        this.sm = 3E38;
        a = new w;
        a.b = 1;
        a.a = 1;
        a.c = -1;
        a.d = -1;
        this.Mu = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.yh = a;
        a =
            new x;
        a.b = 0;
        a.a = 0;
        this.zh = a;
        for (a = 0; 256 > a;) {
            var b = a++,
                c = this.OB,
                d = new w;
            d.b = 1;
            d.a = 1;
            d.c = -1;
            d.d = -1;
            c[b] = d
        }
    }

    function Hf() {
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.pn = a;
        this.t = Infinity
    }

    function If(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        var e = new x;
        e.b = a;
        e.a = b;
        this.b = e;
        a = new x;
        a.b = c;
        a.a = d;
        this.a = a
    }

    function Sb(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        var e = new x;
        e.b = a;
        e.a = b;
        this.p = e;
        a = new x;
        a.b = c;
        a.a = d;
        this.d = a
    }

    function qc() {
        this.d = 0;
        var a = new x;
        a.b = 0;
        a.a =
            0;
        this.n = a
    }

    function Tc(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        var d = new x;
        d.b = a;
        d.a = b;
        this.c = d;
        this.r = c
    }

    function Uc(a) {
        null == a && (a = 5489);
        this.oc = Array(624);
        this.pk = Array(2);
        this.pk[0] = 0;
        this.pk[1] = -1727483681;
        this.Ln(a)
    }

    function ud(a) {
        this.Ln(a)
    }

    function Jf() {}

    function qd() {}

    function w() {}

    function Lc() {}

    function pc() {}

    function x() {}

    function hb() {}

    function L() {}

    function Kf(a, b, c, d, e, f, g, h) {
        var l = new x;
        l.b = 0;
        l.a = 0;
        this.Mq = l;
        l = new x;
        l.b = 0;
        l.a = 0;
        this.Lq = l;
        l = new x;
        l.b = 0;
        l.a = 0;
        this.Kq = l;
        l =
            new x;
        l.b = 0;
        l.a = 0;
        l = this.Jq = l;
        l.b = a;
        l.a = b;
        a = this.Kq;
        a.b = c;
        a.a = d;
        c = this.Lq;
        c.b = e;
        c.a = f;
        e = this.Mq;
        e.b = g;
        e.a = h
    }

    function Lf(a) {
        this.gw = a
    }

    function ba() {
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.Jb = a;
        this.be = null;
        this.Vm = 2;
        this.element = null;
        uc.call(this);
        window.document.body.style.setProperty("touch-action", "none");
        window.document.body.style.setProperty("-ms-touch-action", "none");
        a = window;
        a.addEventListener("mousedown", E(this, this.Ov));
        a.addEventListener("mouseup", E(this, this.Qv));
        a.addEventListener("mousemove", E(this,
            this.Pv));
        a.addEventListener("touchstart", E(this, this.Zv));
        a.addEventListener("touchend", E(this, this.Xv));
        a.addEventListener("touchmove", E(this, this.Yv));
        a.addEventListener("mousewheel", E(this, this.Rv), {
            passive: !1
        });
        a.addEventListener("DOMMouseScroll", E(this, this.Rv), {
            passive: !1
        });
        this.devicePixelRatio = "undefined" !== typeof window.orientation && 0 > window.navigator.userAgent.indexOf("Mobile") && 980 == a.innerWidth ? 1 : a.devicePixelRatio
    }

    function uc() {
        this.Zd = [];
        this.Zc = [-1, -1, -1, -1];
        var a = new x;
        a.b = 0;
        a.a =
            0;
        this.J = a;
        this.transform = function() {};
        this.oq = !1;
        this.enabled = !0
    }

    function Mf(a, b, c) {
        this.code = b;
        this.Zd = c
    }

    function Nf() {}

    function Ya() {
        vc.call(this);
        window.addEventListener("keydown", E(this, this.Kk), !0);
        window.addEventListener("keyup", E(this, this.Nv), !0)
    }

    function vc() {
        this.order = Array(255);
        this.keys = Array(255);
        this.enabled = !0;
        this.location = Qa.i0;
        this.Yi = new Nf;
        for (var a = 0; 255 > a;) {
            var b = a++;
            this.order[b] = 0
        }
        a = [];
        for (b = 0; 256 > b;) b++, a.push(0);
        this.j = a;
        for (a = 37; 41 > a;) b = a++, this.j[b] |= 1;
        for (a = 48; 58 > a;) b =
            a++, this.j[b] |= 2;
        for (a = 65; 91 > a;) b = a++, this.j[b] |= 4
    }

    function xa() {}

    function tg() {}

    function ea() {}

    function wc() {}

    function ug() {}

    function vd(a) {
        this.tb = a;
        this.reset()
    }

    function pe(a, b, c) {
        null == b && (b = !1);
        null == a && (a = 1);
        this.Eb = null;
        this.i = 0;
        this.Rd = !1;
        this.Md = -2;
        this.sg = 1 > a ? 1 : a;
        this.C = a;
        this.cf = b;
        null != c && (a = this.i = c.length, b = this.C, this.C = a > b ? a : b);
        this.f = Array(this.C + 1);
        this.f[0] = null;
        if (null != c) {
            a = this.f;
            b = 1;
            for (var d = this.i + 1; b < d;) {
                var e = b++;
                a[e] = c[e - 1]
            }
            this.HD()
        }
    }

    function Kc(a, b) {
        null == b && (b = -1);
        this.vc =
            this.i = 0;
        this.Md = -3; - 1 == b && (b = a);
        this.C = b;
        this.JE = a;
        this.Od = a - 1;
        this.Uc = ea.ua(Array(a), -1);
        this.f = Array(3 * this.C);
        this.ob = Array(this.C);
        b = 2;
        a = this.f;
        for (var c = 0, d = this.C; c < d;) c++, a[b - 1] = -2147483648, a[b] = -1, b += 3;
        a = this.ob;
        b = 0;
        for (c = this.C - 1; b < c;) d = b++, a[d] = d + 1;
        a[this.C - 1] = -1
    }

    function md(a, b) {
        null == b && (b = -1);
        this.vc = this.i = 0; - 1 == b && (b = a);
        this.C = 2 > b ? 2 : b;
        this.da = new Kc(a, this.C);
        this.Gh = Array(this.C);
        this.ob = Array(this.C);
        this.Lm = ea.ua(Array(this.C), -2147483648, 0, this.C);
        a = this.ob;
        b = 0;
        for (var c = this.C -
                1; b < c;) {
            var d = b++;
            a[d] = d + 1
        }
        a[this.C - 1] = -1
    }

    function qe() {}

    function wd() {}

    function Oc() {}

    function xd(a) {
        this.rg = null;
        this.qq = 0;
        this.ta = a;
        this.za = null;
        this.ea = !1
    }

    function yd(a, b) {
        this.node = a;
        this.Tg = b;
        this.Hc = this.next = null
    }

    function re() {
        this.Mm = this.xk = 16;
        this.Eb = null;
        this.i = 0;
        this.ud = null;
        this.wo = !1;
        this.Ti = Array(this.Mm);
        this.vd = Array(this.xk)
    }

    function Tb() {}

    function Of() {}

    function Ub(a, b, c) {
        null == a && (a = 16);
        this.T = 0;
        this.Md = -2;
        this.C = this.sg = 1 > a ? 1 : a;
        if (null != b) {
            a = this.T = b.length;
            var d = this.C;
            this.C =
                a > d ? a : d
        }
        this.f = Array(this.C);
        if (null != b) {
            a = this.f;
            d = 0;
            for (var e = this.T; d < e;) {
                var f = d++;
                a[f] = b[f]
            }
        }
        c && (this.Md = 0)
    }

    function Pf() {}

    function zd(a, b, c) {
        null == a && (a = 16);
        this.i = this.Ta = 0;
        this.Md = -2;
        this.C = this.sg = 1 > a ? 1 : a;
        if (null != b) {
            a = this.i = b.length;
            var d = this.C;
            this.C = a > d ? a : d
        }
        this.f = Array(this.C);
        if (null != b) {
            a = this.f;
            d = 0;
            for (var e = this.i; d < e;) {
                var f = d++;
                a[f] = b[f]
            }
        }
        c && (this.Md = 0)
    }

    function se() {}

    function Ad(a) {
        this.tb = a;
        this.f = this.tb.f;
        this.ub = this.tb.i;
        this.Ja = 0
    }

    function te(a, b) {
        null == b && (b = 0);
        null == a &&
            (a = 0);
        this.x = a;
        this.y = b
    }

    function Bd(a) {
        this.tb = a;
        this.f = this.tb.f;
        a = this.tb;
        this.ub = a.$ * a.da;
        this.Ja = 0
    }

    function Vc() {}

    function Wc(a, b, c) {
        this.Eb = null;
        this.Rd = !1;
        if (null != c) {
            this.$ = a;
            this.da = b;
            a = this.f = Array(this.$ * this.da);
            b = 0;
            for (var d = this.$ * this.da; b < d;) {
                var e = b++;
                a[e] = c[e]
            }
        } else this.$ = a, this.da = b, this.f = Array(this.$ * this.da)
    }

    function ue() {
        Za.call(this, K.getContext().createStereoPanner(), 1)
    }

    function xc() {
        Za.call(this, K.getContext().createGain(), 2)
    }

    function ve() {
        Za.call(this, K.getContext().createBufferSource(),
            0)
    }

    function we() {
        Za.call(this, K.getContext().destination, 7)
    }

    function Za(a, b) {
        this.inputs = [];
        this.n = a;
        this.type = b
    }

    function Hb(a, b) {
        Vb.call(this, a, b);
        this.data = b.data
    }

    function xe() {
        ka.call(this)
    }

    function Cd(a, b, c, d) {
        null == d && (d = !1);
        Vb.call(this, a, b);
        this.loop = d;
        this.Qk = !0;
        this.node = b.data.cloneNode();
        null != c ? (this.min = a.Zc[2 * c] / 1E3, this.max = a.Zc[2 * c + 1] / 1E3, this.node.addEventListener("timeupdate", E(this, this.Wv), !1), this.node.addEventListener("loadedmetadata", E(this, this.Hq), !1)) : (this.min = 0, this.max =
            b.data.duration, this.node.onended = E(this, this.stop), this.node.loop = d);
        this.xj();
        this.node.play()
    }

    function Dd() {
        ka.call(this)
    }

    function vg() {}

    function K() {}

    function Vb(a, b) {
        this.pan = 0;
        this.volume = 1;
        this.offset = 0;
        this.loop = !1;
        this.Ph = a;
        this.Jd = b
    }

    function Ed(a, b, c, d, e) {
        this.elapsedTime = 0;
        var f = this;
        this.SF = a.volume;
        this.TF = b;
        this.duration = c;
        this.$d = d;
        this.ke = e;
        D.Sg.Ma(function(b) {
            f.elapsedTime += b;
            b = Math.min(f.elapsedTime / c, 1);
            var g = hb.map(d(b), 0, 1, f.SF, f.TF);
            a.xr(g);
            1 == b && (D.Sg.detach(), e())
        })
    }

    function Xc() {}

    function ka() {
        this.rc = Array(4096);
        this.Ic = new W;
        this.Av = 1E4;
        this.mq = this.kq = this.lq = 1;
        this.fg = this.qv = 0;
        this.zC = 16;
        this.tv = 2;
        this.enabled = !0;
        this.mx = .05
    }

    function Yc(a, b, c) {
        this.id = a;
        this.data = b;
        this.Ce = c;
        this.ev = 0
    }

    function yc() {}

    function dc(a, b) {
        this.Vq = 0;
        this.url = a;
        this.fo = b
    }

    function Qf(a, b) {
        this.id = a;
        this.Go = [b]
    }

    function m() {}

    function ye(a, b) {
        this.rf = new dc(a, b.fo);
        this.pg = b
    }

    function ze() {}

    function zc(a, b, c) {
        null == a && (a = 2);
        this.vv = this.uv = 0;
        this.Eh = [];
        this.ld = new pe;
        this.Fv = this.rq = 0;
        this.AC = a;
        this.Fq = b;
        this.fo = c
    }

    function Rf(a, b, c) {
        this.url = a;
        this.data = b;
        this.Gb = c
    }

    function Sf(a, b) {
        this.ld = new zc(a, E(this, this.Fq), b)
    }

    function wg() {}

    function xg() {}

    function z() {}

    function Zc(a) {
        this.ta = a;
        Error.captureStackTrace && Error.captureStackTrace(this, Zc)
    }

    function Fd(a) {
        this.W = new ec;
        this.Dg = a
    }

    function fc() {}

    function Tf(a) {
        this.map = a;
        this.keys = a.keys()
    }

    function Ac() {}

    function Uf() {}

    function Ae() {
        this.a = new Gd
    }

    function Be() {}

    function Wa(a, b, c) {
        null == b && (b = 0);
        null == c && (c = a.length - b);
        if (0 > b || 0 > c || b + c > a.length) throw 0;
        this.a = a.a;
        this.J = b;
        this.$h = this.$a = c
    }

    function Ce() {}

    function Gd() {
        this.size = this.J = 0
    }

    function ub() {
        this.G = {}
    }

    function wb() {
        this.G = {}
    }

    function De(a) {
        for (var b = a.length, c = 1; b > 1 << c;) ++c;
        if (8 < c || b != 1 << c) throw 0;
        this.gg = a;
        this.Pd = c
    }

    function db() {}

    function ma(a) {
        this.length = a.byteLength;
        this.a = new Uint8Array(a);
        this.a.zz = a;
        a.LB = this;
        a.zH = this.a
    }

    function $c(a) {
        var b = this;
        this.id = setInterval(function() {
            b.pe()
        }, a)
    }

    function Hd() {}

    function xb() {
        ia.call(this)
    }

    function ad(a, b, c, d, e) {
        function f(a) {
            var c = .3 * b.c,
                d = .35 * b.d,
                e = new Xa(g.group, 247);
            e.el(c, d);
            e.fl(75);
            e.qa(a);
            e.al(-1);
            e.Yf(25);
            e.vr();
            return e
        }
        this.labels = [];
        var g = this;
        C.call(this);
        var h = b.b,
            l = b.a,
            y = b.c,
            H = b.d;
        null == H && (H = 0);
        null == y && (y = 0);
        null == l && (l = 0);
        null == h && (h = 0);
        var p = new w;
        p.b = h;
        p.a = l;
        p.c = y;
        p.d = H;
        this.rect = p;
        this.xm = c;
        this.group = new aa(null, a);
        this.xe = new B(this.group, 184);
        this.hl = new B(this.group);
        this.xe.Ne(b.c);
        this.xe.re(b.d);
        this.group.N(b.b);
        this.group.O(b.a);
        this.group.ka();
        a = b.c / 2;
        this.labels[0] = f(d);
        d = this.labels[0];
        l = h = 0;
        y = a;
        H =
            b.d;
        null == H && (H = -1);
        null == y && (y = -1);
        null == l && (l = 1);
        null == h && (h = 1);
        p = new w;
        p.b = h;
        p.a = l;
        p.c = y;
        p.d = H;
        d.eb(p, 0, 0);
        d = this.labels[0];
        d.N(d.ab + 20);
        this.labels[1] = f(e);
        e = this.labels[1];
        d = a;
        h = 0;
        a *= 2;
        l = b.d;
        null == l && (l = -1);
        null == a && (a = -1);
        null == h && (h = 1);
        null == d && (d = 1);
        y = new w;
        y.b = d;
        y.a = h;
        y.c = a;
        y.d = l;
        e.eb(y, 0, 0);
        e = this.labels[1];
        e.N(e.ab - 20);
        this.hl.$k();
        this.hl.Ka(c ? 182 : 183);
        this.hl.Ne(b.c);
        this.hl.re(b.d);
        this.group.ka();
        this.type = 38
    }

    function bd() {
        ia.call(this)
    }

    function cd() {
        ia.call(this)
    }

    function Id(a) {
        this.kind =
            a
    }

    function Ee() {
        this.vA = L.Rh();
        this.wA = L.mc(2)
    }

    function Fe() {}

    function Jd() {
        this.Xi = null;
        ia.call(this)
    }

    function Ge() {}

    function He() {}

    function dd() {
        La.call(this)
    }

    function ab() {
        ia.call(this)
    }

    function Kd() {
        this.Bw = [ab, yb];
        this.urls = [];
        ia.call(this)
    }

    function ed() {
        Ib.call(this)
    }

    function Ib() {
        this.loaded = !1;
        this.Ym = -1;
        O.call(this);
        this.type = 3
    }

    function fd() {
        this.Nn = [];
        this.Pe = [];
        ia.call(this)
    }

    function Bc() {
        La.call(this)
    }

    function gd() {
        ia.call(this)
    }

    function yb() {
        this.il = this.eu = !1;
        this.bd = -1;
        ia.call(this)
    }

    function Ld() {
        ia.call(this)
    }

    function Md() {
        La.call(this)
    }

    function La() {
        this.Em = 3;
        ia.call(this)
    }

    function Ie() {
        this.Wl = L.mc(4);
        this.Sj = L.Kd(.7)
    }

    function Jb() {}

    function S() {
        ia.call(this)
    }

    function gc() {
        ia.call(this)
    }

    function N() {
        ia.call(this)
    }

    function Aa(a, b, c, d) {
        this.Cl = !0;
        C.call(this);
        this.Xd = .25;
        var e = b.b,
            f = b.a,
            g = b.c,
            h = b.d;
        null == h && (h = 0);
        null == g && (g = 0);
        null == f && (f = 0);
        null == e && (e = 0);
        var l = new w;
        l.b = e;
        l.a = f;
        l.c = g;
        l.d = h;
        this.rect = l;
        this.group = new aa(null, a);
        this.xe = new B(this.group, c, d);
        this.xe.Ne(b.c);
        this.xe.re(b.d);
        this.group.N(b.b);
        this.group.O(b.a);
        this.group.ka();
        this.I(!0);
        this.type = 7
    }

    function ia() {
        this.xo = !1;
        O.call(this)
    }

    function O() {
        this.Z = new $b(null, null);
        this.state = X.i0;
        this.Bj = 0;
        C.call(this);
        this.name = Sc.$j(this);
        this.type = 2
    }

    function Je() {
        C.call(this);
        this.type = 56
    }

    function pb(a, b, c, d) {
        var e = new x;
        e.b = 0;
        e.a = 0;
        this.nn = e;
        this.pressed = this.selected = !1;
        C.call(this);
        null == pb.ax && (pb.ax = R.$b("sparkle_burst", R.Ob("sparkle_burst/", 0, 51), .016666666666666666));
        this.name = "waypoint_" + a;
        this.level =
            a;
        this.group = new aa(null, c);
        this.group.N(b.b);
        this.group.O(b.a);
        a == v.level && (this.nl = new B(this.group, 167, "waypoint_streaks"), this.nl.Ha(), this.nl.ka(), this.nl.M(2));
        this.B = new B(this.group, 167, "waypoint1");
        this.B.Ha();
        this.B.ka();
        a = v.cc[a];
        if (0 < a) {
            var f = new aa(null, this.group);
            d = new B(f, d, "waypoint");
            d.Ha();
            d.ka();
            f.O(55);
            d = function(a, b) {
                var c = new B(f, 167, "map_waypoint_star");
                c.N(a);
                c.O(b);
                c.ka();
                c.Ha()
            };
            0 < a && d(-36, -5);
            1 < a && d(1, 4);
            2 < a && d(36, -5)
        }
        this.enable();
        this.type = 57
    }

    function I() {}

    function Ra(a,
        b, c, d, e) {
        C.call(this);
        this.Te = d;
        wa.wa(65535) && M.ra.bm(65535);
        null == Ra.dg && (Ra.dg = window.document.createElement("canvas"), Ra.dg.width = 2048, Ra.dg.height = 1024);
        d = Ra.Rs != b;
        Ra.Rs = b;
        d && (Ra.dg.getContext("2d", null).clearRect(0, 0, 2048, 1024), this.jA(Ra.dg, c.map), this.nA(Ra.dg, b), this.kA(Ra.dg, b, c.Mj[0]));
        var f = window.document.createElement("img");
        f.src = Ra.dg.toDataURL();
        f.onload = function() {
            f.onload = null;
            e()
        };
        f.width = 2048;
        f.height = 1024;
        M.ra.xb.createTexture(65535, f);
        (new B(a, 65535)).node.name = "scroll";
        this.pA(a,
            b, c.Mr[0]);
        this.mA(a, b, c.ts[0]);
        this.type = 60
    }

    function Ke(a) {
        this.duration = 3;
        this.dh = this.vb = 0;
        C.call(this);
        M.ra.Qa([170, 169]);
        this.yc = new B(a, 169, "puppy_1");
        this.yc.N(460);
        this.yc.O(1024 - this.yc.Aa());
        this.Xb = new B(a, 169, "puppy_2");
        this.Xb.N(this.yc.ab);
        this.Xb.O(this.yc.Ua);
        this.Xb.I(!1);
        this.type = 61
    }

    function Le(a) {
        var b = I.th(a);
        a = I.Df(a);
        this.map = [156, 141, 126, 111, 96, 81, 66, 51, 36, 21][b];
        switch (b) {
            case 0:
                var c = [154, 155];
                break;
            case 1:
                c = [139, 140];
                break;
            case 2:
                c = [124, 125];
                break;
            case 3:
                c = [109, 110];
                break;
            case 4:
                c = [94, 95];
                break;
            case 5:
                c = [79, 80];
                break;
            case 6:
                c = [64, 65];
                break;
            case 7:
                c = [49, 50];
                break;
            case 8:
                c = [34, 35];
                break;
            case 9:
                c = [19, 20];
                break;
            default:
                c = null
        }
        this.Mr = c;
        switch (b) {
            case 0:
                c = [152, 153];
                break;
            case 1:
                c = [137, 138];
                break;
            case 2:
                c = [122, 123];
                break;
            case 3:
                c = [107, 108];
                break;
            case 4:
                c = [92, 93];
                break;
            case 5:
                c = [77, 78];
                break;
            case 6:
                c = [62, 63];
                break;
            case 7:
                c = [47, 48];
                break;
            case 8:
                c = [32, 33];
                break;
            case 9:
                c = [17, 18];
                break;
            default:
                c = null
        }
        this.ts = c;
        this.Ih = [
            [166, 165],
            [151, 150],
            [136, 135],
            [121, 120],
            [106, 105],
            [91, 90],
            [76, 75],
            [61, 60],
            [46, 45],
            [31, 30]
        ][b];
        this.Mj = [
            [164, 163],
            [162, 161],
            [160, 159],
            [158, 157],
            [149, 148],
            [147, 146],
            [145, 144],
            [143, 142],
            [134, 133],
            [132, 131],
            [130, 129],
            [128, 127],
            [119, 118],
            [117, 116],
            [115, 114],
            [113, 112],
            [104, 103],
            [102, 101],
            [100, 99],
            [98, 97],
            [89, 88],
            [87, 86],
            [85, 84],
            [83, 82],
            [74, 73],
            [72, 71],
            [70, 69],
            [68, 67],
            [59, 58],
            [57, 56],
            [55, 54],
            [53, 52],
            [44, 43],
            [42, 41],
            [40, 39],
            [38, 37],
            [29, 28],
            [27, 26],
            [25, 24],
            [23, 22]
        ][4 * b + a];
        m.Xu(this.Mj[0]) || this.Mj.reverse();
        m.Xu(this.Ih[0]) || this.Ih.reverse()
    }

    function Ca(a, b) {
        this.yj =
            new zd;
        var c = new x;
        c.b = 0;
        c.a = 0;
        this.ve = c;
        c = new x;
        c.b = 0;
        c.a = 0;
        this.kh = c;
        c = new x;
        c.b = 0;
        c.a = 0;
        this.Ye = c;
        c = new x;
        c.b = 0;
        c.a = 0;
        this.J = c;
        C.call(this);
        this.level = a;
        this.Te = b;
        this.type = 42
    }

    function Wb(a, b, c, d) {
        function e(a) {
            return (0 < b ? "next_" : "prev_") + (0 == a ? "a" : "b")
        }
        this.pressed = !1;
        this.alpha = 1;
        this.enabled = !0;
        C.call(this);
        this.direction = b;
        this.Oe = new B(a, d, e(0));
        this.yc = new B(a, d, e(1));
        0 < b ? (this.Oe.N(this.yc.N(1820)), this.Oe.O(this.yc.O(414))) : (this.Oe.N(this.yc.N(20)), this.Oe.O(this.yc.O(831)));
        this.Oe.I(!0);
        this.yc.I(!1);
        if (0 > b) {
            if (1 == c) {
                this.Oe.I(!1);
                return
            }
        } else if (c == Math.ceil(v.level / 20)) {
            this.Oe.I(!1);
            return
        }
        ba.X().Ma(E(this, this.Ub));
        this.type = 58
    }

    function Cc(a, b) {
        this.am = 0;
        this.lp = 1;
        this.move = !1;
        var c = new x;
        c.b = 0;
        c.a = 0;
        this.J = c;
        C.call(this);
        this.group = new aa(null, a);
        this.B = new B(this.group, 167, "avatar");
        this.B.Ha();
        this.B.ka();
        this.cx = I.Df(b);
        this.type = 59
    }

    function Me(a, b, c, d, e) {
        this.Xb = new Xa(null, c);
        e && this.Xb.In();
        ca.call(this, a, b, d, e);
        a.appendChild(this.Xb);
        this.type = 9
    }

    function ca(a, b, c, d) {
        this.rv =
            500;
        this.Tm = 8;
        this.text = null;
        C.call(this);
        this.B = new Xa(a, b);
        d && this.B.In();
        this.B.kE(b);
        this.Mn(c);
        this.type = 8
    }

    function hd() {
        this.He = new W;
        this.ji = new W(4);
        this.sa = new Vf;
        t.call(this);
        this.type = 54
    }

    function Vf() {
        this.ol = !1;
        this.reset()
    }

    function Nd() {
        this.Wf = 0;
        t.call(this)
    }

    function v() {}

    function Xb() {
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.xc = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.position = a;
        t.call(this);
        this.type = 14
    }

    function qb() {
        this.xh = 0;
        t.call(this);
        this.type = 50
    }

    function la() {
        this.lg = !1;
        this.duration = 3;
        this.state = this.dh =
            0;
        this.pa = [];
        t.call(this);
        this.jp = !0;
        la.Mb();
        this.type = 49
    }

    function Wf() {
        this.sC = new Uc
    }

    function ta() {}

    function Fa(a) {
        var b = new w;
        b.b = 1;
        b.a = 1;
        b.c = -1;
        b.d = -1;
        this.Cb = b;
        b = new w;
        b.b = 1;
        b.a = 1;
        b.c = -1;
        b.d = -1;
        this.bg = b;
        b = new w;
        b.b = 1;
        b.a = 1;
        b.c = -1;
        b.d = -1;
        this.ue = b;
        this.v = a
    }

    function zb(a) {
        t.call(this);
        zb.Mb();
        this.target = a;
        this.type = 18
    }

    function Od() {
        ib.call(this);
        this.type = 20
    }

    function Pd() {
        ib.call(this);
        this.type = 21
    }

    function ib() {
        t.call(this);
        this.type = 19
    }

    function hc() {
        var a = new w;
        a.b = 1;
        a.a = 1;
        a.c = -1;
        a.d = -1;
        this.pb =
            a;
        t.call(this);
        this.type = 22
    }

    function Qd() {
        t.call(this);
        this.type = 48
    }

    function Rd() {
        t.call(this);
        this.type = 62
    }

    function Sd(a) {
        a = I.th(I.Fc(a));
        this.md = [225, 224, 223, 222, 221, 220, 219, 218, 217, 216][a];
        switch (a) {
            case 0:
                a = 215;
                break;
            case 1:
                a = 214;
                break;
            case 2:
                a = 213;
                break;
            case 3:
                a = 212;
                break;
            case 4:
                a = 211;
                break;
            case 5:
                a = 210;
                break;
            case 6:
                a = 209;
                break;
            case 7:
                a = 208;
                break;
            case 8:
                a = 207;
                break;
            case 9:
                a = 206;
                break;
            default:
                a = -1
        }
        this.km = a
    }

    function Xf() {
        for (var a = [], b = 0; 60 > b;) ++b, a.push(0);
        this.wj = a;
        this.pC = !1;
        this.Bg = this.vj =
            0
    }

    function bb(a) {
        this.oi = 0;
        this.Cm = -1;
        this.sf = new W;
        this.Xk = [];
        this.Ek = this.$m = this.Fk = this.Jh = this.Kh = 0;
        this.Ee = this.Pi = !1;
        this.Lf = 0;
        this.Or = !1;
        this.lb = new Xf;
        this.state = 0;
        bb.X = this;
        this.Zk = a;
        Yb.call(this);
        this.type = 12
    }

    function Yf(a, b) {
        this.x = a;
        this.y = b
    }

    function Td() {
        this.Mo = this.hh = 1;
        this.gi = 2;
        this.rotation = 0;
        this.Bl = !0;
        this.scale = this.Yk = 1;
        this.fd = -1;
        var a = new w;
        a.b = 1;
        a.a = 1;
        a.c = -1;
        a.d = -1;
        this.wv = a;
        this.Zo = this.Ak = -1;
        this.Ql = this.Wm = 1;
        t.call(this);
        this.type = 47
    }

    function ic() {
        var a = new x;
        a.b = 0;
        a.a =
            0;
        this.PD = a;
        this.Qx = this.state = 0;
        this.Xl = -1;
        this.lc = new Rb(0);
        t.call(this);
        this.type = 45
    }

    function jb() {
        this.Ed = 0;
        this.speed = 15;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.position = a;
        this.Xf = [1, 1];
        this.Ib = [null, null];
        t.call(this);
        this.ne = 4;
        jb.Mb();
        this.type = 24
    }

    function Kb() {
        t.call(this)
    }

    function Lb() {
        t.call(this);
        this.type = 26
    }

    function Ga() {
        this.Lr = 1;
        t.call(this);
        this.ne = 5;
        Ga.Mb();
        this.type = 27
    }

    function Ba(a) {
        var b = new x;
        b.b = 0;
        b.a = 0;
        this.zd = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.Of = b;
        this.Wf = 0;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.xc = b;
        this.visible = !0;
        this.alpha = 1;
        this.j = 0;
        this.Aw = 1;
        this.$w = -1;
        this.Lg = 0;
        t.call(this);
        this.S = a;
        a.client = this;
        this.j |= 2048;
        b = this.zd;
        var c = a.position;
        b.b = c.b;
        b.a = c.a;
        b = this.Of;
        c = this.zd;
        b.b = c.b;
        b.a = c.a;
        a.wu(this.zd);
        this.type = 23
    }

    function Zf(a) {
        this.he = a;
        this.df = Array(6)
    }

    function $f(a, b, c) {
        this.code = a;
        this.Oc = new Yf(b, c)
    }

    function Ne() {
        this.Sj = L.pz();
        this.lc = new Rb(2);
        T.call(this)
    }

    function Oe() {
        T.call(this)
    }

    function Ud(a) {
        this.Sj = L.mc(2);
        this.lc = new Rb(.3);
        T.call(this);
        this.yv = a
    }

    function Vd() {
        this.Ef = new Pe;
        this.Co =
            this.Ai = 0;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.XF = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.IC = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.FC = a;
        T.call(this)
    }

    function Qe() {
        this.lc = new Rb(.3);
        T.call(this)
    }

    function Re() {
        this.lc = new Rb(.3);
        T.call(this)
    }

    function Se() {
        this.Bi = 0;
        t.call(this);
        this.ne = 5;
        this.type = 15
    }

    function Te() {
        this.uA = L.Kd(.3);
        this.xA = L.Rh();
        this.lc = new Rb(0);
        this.$o = -1;
        t.call(this);
        this.ne = 3;
        this.type = 16
    }

    function rb(a) {
        var b = new x;
        b.b = 0;
        b.a = 0;
        this.zd = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.Of = b;
        this.nx = 0;
        this.active = !1;
        this.EE = [u.my, u.ny,
            u.oy, u.py
        ];
        this.scale = 1;
        this.state = this.Wr = this.Ut = 0;
        this.visible = !1;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.xc = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.anchor = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.target = b;
        t.call(this);
        this.order = a;
        this.V(new Te);
        this.V(new Se);
        this.S = Object.create(Mb.prototype);
        this.S.Ra = new Tc(0, 0, 1);
        this.S.Ra.r = 1;
        this.S.position = this.S.Ra.c;
        this.S.Li = 0;
        this.type = 17
    }

    function Wd() {
        t.call(this);
        this.type = 51
    }

    function Ue(a) {
        t.call(this);
        this.size = a;
        this.type = 63
    }

    function jc() {
        this.wt = 0;
        this.dt = !1;
        t.call(this);
        this.type = 46
    }

    function Xd() {
        this.xD = new Sb;
        this.current = !1;
        this.shift = 0;
        this.Mg = [];
        this.Dk = 0;
        t.call(this);
        this.type = 52
    }

    function t() {
        this.ne = 0;
        C.call(this)
    }

    function u() {}

    function ja() {}

    function ag() {
        var a = window.document;
        window.addEventListener("resize", E(this, this.resize));
        a.body.style.backgroundColor = "white";
        var b = this.Sa(),
            c = a.createElement("div");
        c.id = "crashdialog";
        c.style.position = "absolute";
        c.style.width = b.c - b.b + "px";
        c.style.height = b.d - b.a + "px";
        c.style.left = b.b + "px";
        c.style.top = b.a + "px";
        a.body.appendChild(c);
        b = a.createElement("img");
        b.src = "res/bug.jpg";
        b.style.width = "100%";
        c.appendChild(b);
        a = a.createElement("p");
        a.style.fontFamily = "Arial, Helvetica, sans-serif";
        a.style.fontWeight = "bold";
        a.style.fontSize = "1em";
        a.style.textAlign = "center";
        a.style.margin = "4px";
        try {
            var d = xa.translate(k.i117)
        } catch (f) {
            d = "Aw, Snap!"
        }
        a.innerText = d;
        c.appendChild(a);
        d = a.cloneNode();
        d.style.fontWeight = "normal";
        d.style.textAlign = "center";
        try {
            var e = xa.translate(k.i113)
        } catch (f) {
            e = "Oops, there was a problem :( This shouldn't happen. Please reload the game!"
        }
        d.innerText =
            e;
        c.appendChild(d)
    }

    function bg(a, b) {
        this.S = a;
        this.depth = b
    }

    function cg() {
        this.list = new W
    }

    function dg() {
        this.On = !1
    }

    function Ab() {
        this.scale = 1;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.Wd = a;
        T.call(this)
    }

    function Ve() {
        this.Xn = new Sb;
        var a = new x;
        a.b = 0;
        a.a = 0;
        T.call(this)
    }

    function yg() {}

    function kc() {
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.anchor = a;
        T.call(this)
    }

    function We() {
        T.call(this)
    }

    function Yd() {
        T.call(this)
    }

    function T() {
        this.enabled = !0;
        this.ne = this.af()
    }

    function Xe(a) {
        this.zoom = 0;
        var b = new x;
        b.b = 0;
        b.a = 0;
        this.Yl = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.rs = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.we = b;
        b = new w;
        b.b = 0;
        b.a = 0;
        b.c = 320;
        b.d = 480;
        this.la = b;
        this.o = a;
        this.Bn(.5, .5)
    }

    function U() {}

    function Dc() {}

    function eg(a) {
        this.mv = new Pe;
        this.nv = new Ff;
        this.kv = [];
        this.bj = new W;
        var b = new x;
        b.b = 0;
        b.a = 0;
        this.kn = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.ln = b;
        this.cj = null;
        this.Nu = !1;
        this.Up = !0;
        this.Tp = 1;
        this.Ki = new Sb;
        this.ov = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.Yn = new Tc;
        this.bj.Rd = !0
    }

    function Ye(a) {
        this.kk = new Gf;
        var b = new w;
        b.b = 1;
        b.a = 1;
        b.c = -1;
        b.d = -1;
        this.sn = b;
        this.Yn = new Tc(0, 0,
            1);
        this.Xn = new Sb;
        this.Rc = 0;
        this.o = a;
        this.result = new Ze;
        this.result.Vj = new W;
        this.result.Tj = null;
        this.result.ni = new W;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.result.Sq = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.result.Rq = b;
        this.result.Pq = -1;
        this.test = new eg(a)
    }

    function Ze() {}

    function $e(a) {
        this.Ru = new Hf;
        this.kd = new W(4);
        this.o = a;
        this.kd.ua(4, null);
        var b = this.kd,
            c = b.f,
            d = 0;
        for (b = b.i; d < b;) {
            var e = d++;
            c[e] = new qc
        }
        c = this.kd;
        d = new qc;
        d.n.b = 1;
        d.n.a = 0;
        d.d = 0;
        c.f[3] = d;
        c = this.kd;
        d = new qc;
        a = a.Fp();
        d.n.b = -1;
        d.n.a = 0;
        d.d = -1 * a;
        c.f[1] = d;
        this.kd.Rd = !0;
        this.fD = 15;
        this.pl()
    }

    function af(a) {
        this.qs = this.size = 0;
        this.Qh = new W(32);
        this.Wt = a;
        this.Qh.Rd = !0
    }

    function fg(a) {
        this.o = a;
        this.bk = new af(function() {
            var a = new W(32);
            a.Rd = !0;
            return a
        });
        this.ak = new af(function() {
            var a = new W(4);
            a.Rd = !0;
            return a
        });
        this.set = new Kc(64, 64)
    }

    function id(a, b, c, d) {
        this.xa = new Wc(a, b);
        this.xa.Cw(0);
        this.Uh = c;
        this.Uf = d
    }

    function gg(a, b, c) {
        this.xa = a;
        this.cols = b;
        this.list = Array(6);
        this.ND = c
    }

    function hg() {
        this.map = new wb
    }

    function lc() {}

    function W(a, b, c) {
        null == a && (a = 2);
        this.Eb = null;
        this.i = 0;
        this.Rd = !1;
        this.Md = -2;
        this.sg = 2 > a ? 2 : a;
        null != b && 0 < b.length ? (this.i = b.length, this.f = b.slice(0, b.length), this.C = this.i) : (this.C = this.sg, this.f = Array(this.C));
        c && (this.Md = 0)
    }

    function ig() {}

    function Nb() {}

    function Pe() {
        this.me = NaN;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.Sp = a;
        this.um = NaN;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.ng = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.ik = a;
        this.tm = NaN;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.Ji = a
    }

    function bf() {}

    function Mb(a) {
        this.gi = this.rotation = this.K = 0;
        this.fp = this.Li = 1;
        this.ze = this.Ng = this.Hi = 0;
        this.scale = 1;
        this.Ra = new Tc;
        var b = new x;
        b.b = 0;
        b.a = 0;
        this.force = b;
        b = new x;
        b.b = 0;
        b.a = 0;
        this.mb = b;
        this.ya = null;
        this.Ab = this.Vb = -1;
        this.code = 0;
        Mb.count++;
        this.key = Oc.next();
        this.o = a;
        this.Ra.r = 1 - U.yz / 2;
        this.position = this.Ra.c;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.mb = a;
        a = new x;
        a.b = 0;
        a.a = 0;
        this.force = a;
        this.Hd = new W(4);
        this.Hd.Rd = !0;
        this.K |= 2;
        this.Mc(new We)
    }

    function Ec() {}

    function cf() {}

    function Zd() {
        this.Ll = !0;
        var a = new x;
        a.b = 0;
        a.a = 0;
        this.jj = a;
        this.Yr = new W;
        this.Zr = new W;
        this.ha = new Sb;
        this.Du = new dg;
        this.Qp = new cg;
        this.wh = new W(1024);
        this.Ac = new zd;
        this.vg = this.If = 0;
        this.cols = -1;
        this.EA = !1;
        this.Lj = new W(4);
        this.Ck = this.Bk = 0;
        a = new w;
        a.b = 1;
        a.a = 1;
        a.c = -1;
        a.d = -1;
        this.Eg = a;
        this.time = 0;
        this.viewport = new Xe(this);
        a = id.bn("0 0 0 0 0\n0 0 0 0", 0, 1);
        this.Hn(a)
    }

    function Fc() {}

    function A(a) {
        this.nodeType = a;
        this.children = [];
        this.Fl = new ub
    }

    function df() {}

    function sb() {
        this.handle = (this.window = "undefined" !== typeof window) ? -1 : null;
        sb.X = this
    }

    function D() {}

    function kb() {}

    function lb() {}

    function ec() {
        this.a = ""
    }

    function G() {}

    function jg(a) {
        null ==
            a && (a = 0);
        this.SC = function() {};
        this.Kv = function() {};
        this.j = 0;
        this.Vf = new nb("root");
        this.j = a
    }

    function fa() {}

    function $d() {}

    function kg(a) {
        this.type = a;
        this.list = new W
    }

    function Yb() {
        this.nq = this.vq = 0;
        this.buffer = new W;
        this.je = new W;
        C.call(this);
        this.type = 11
    }

    function zg() {}

    function lg(a) {
        this.ho = a.firstChild
    }

    function ae(a, b, c) {
        this.j = 0;
        this.source = a;
        this.type = b;
        this.Af = c
    }

    function na() {}

    function jd() {
        this.Dj = 1;
        this.Ej = 0
    }

    function mg(a) {
        this.buffer = new ma(new ArrayBuffer(65536));
        this.J = 0;
        a && (this.Oj = new jd)
    }

    function ng() {}

    function Bb() {}

    function Ia(a, b, c) {
        null == c && (c = !0);
        null == b && (b = !0);
        this.Zp = !1;
        this.om = new ng;
        this.hk = this.rt();
        this.pm = null;
        this.zi = this.$a = 0;
        this.state = b ? ha.i0 : ha.i1;
        this.input = a;
        this.Wc = this.Pd = this.Bc = 0;
        this.W = null;
        this.dj = 0;
        this.Dm = [];
        for (a = 0; 19 > a;) a++, this.Dm.push(-1);
        this.window = new mg(c)
    }

    function og() {}

    function F() {}

    function pg() {
        this.wq = {}
    }

    function Zb() {}

    function ef() {}

    function Da() {}

    function tb() {}

    function V() {}

    function Gc() {}

    function Y(a, b) {
        this.r = new RegExp(a, b.split("u").join(""))
    }

    function da() {}

    function Ea() {
        C.call(this);
        Ea.X = this;
        window.console.info("CandyBubble v1.2.37 2020-07-24 22:18:16 Generated by Haxe 4.0.5 polygonal");
        this.Yh = new sb;
        this.Pu();
        m.WD(Ea.JD);
        this.DE(Ea.language);
        this.Cr();
        D.Sg.Ma(E(this, this.update));
        D.gj.Ma(E(this, this.ma));
        this.Yh.start();
        this.type = 0
    }

    function C() {
        this.qf = this.gr = !0;
        this.time = 0;
        C.Hs++
    }

    function n() {
        return z.Cj(this, "")
    }

    function r(a, b) {
        a = Object.create(a);
        for (var c in b) a[c] = b[c];
        b.toString !== Object.prototype.toString && (a.toString = b.toString);
        return a
    }

    function mc(a) {
        return a instanceof Array ? F.ge(a) : a.iterator()
    }

    function E(a, b) {
        if (null == b) return null;
        null == b.oo && (b.oo = gf.Cs++);
        var c;
        null == a.Pp ? a.Pp = {} : c = a.Pp[b.oo];
        null == c && (c = b.bind(a), a.Pp[b.oo] = c);
        return c
    }
    ff.CandyBubble = ff.CandyBubble || {};
    var Ja = Ja || {},
        ua;
    C.g = "Obj";
    C.prototype = {
        D: function() {
            for (var a = this.firstChild, b; null != a;) b = a.H, a.D(), a = b;
            this.remove();
            C.Hs--
        },
        V: function(a) {
            a.parent = this;
            if (null != this.firstChild) {
                for (var b = this.firstChild; null != b.H;) b = b.H;
                b.H = a
            } else this.firstChild =
                a;
            a.ca()
        },
        removeChild: function(a) {
            if (a.parent == this) {
                if (a == this.firstChild) this.firstChild = a.H;
                else
                    for (var b = this.firstChild; null != b;) {
                        if (b.H == a) {
                            b.H = a.H;
                            break
                        }
                        b = b.H
                    }
                a.parent = a.H = null
            }
        },
        Y: function(a, b, c) {
            if (c) {
                c = null;
                for (var d = this.firstChild; null != d;) {
                    if (null != a) {
                        if (z.Xg(d, a)) {
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
                    var e = d.Y(a, b, !0);
                    if (null != e) {
                        c = e;
                        break
                    }
                    d = d.H
                }
                return c
            }
            for (c = this.firstChild; null != c;) {
                if (null != a) {
                    if (z.Xg(c, a)) {
                        if (null == b) break;
                        if (c.name == b) break
                    }
                } else if (c.name ==
                    b) break;
                c = c.H
            }
            return c
        },
        iterator: function() {
            return new lg(this)
        },
        children: function() {
            for (var a = [], b = this.firstChild; null != b;) a.push(b), b = b.H;
            return a
        },
        remove: function() {
            null != this.parent && this.parent.removeChild(this)
        },
        ki: function(a, b) {
            a = new ae(this, a, b);
            for (b = this.parent; null != b;) {
                b.handle(a);
                if (0 < a.j) break;
                b = b.parent
            }
        },
        Kj: function(a, b) {
            this.lw(new ae(this, a, b), !0)
        },
        update: function(a) {
            this.time += a;
            for (var b = this.firstChild, c; null != b;) c = b.H, b.qf && b.update(a), b = c
        },
        ma: function(a) {
            for (var b = this.firstChild,
                    c; null != b;) c = b.H, b.gr && 0 < b.time && b.ma(a), b = c
        },
        handle: function() {},
        ca: function() {},
        lw: function(a, b) {
            if (!b && (this.handle(a), 0 < (a.j & 1))) {
                a.j &= -2;
                return
            }
            b = this.firstChild;
            for (var c; null != b;) {
                c = b.H;
                if (0 < (a.j & 2)) break;
                b.lw(a, !1);
                b = c
            }
        },
        l: C
    };
    Ea.g = "App";
    Ea.F = C;
    Ea.prototype = r(C.prototype, {
        update: function(a) {
            C.prototype.update.call(this, a)
        },
        ma: function(a) {
            C.prototype.ma.call(this, a)
        },
        rn: function() {
            (new Sf(4, "v=1.2.37")).rn(E(this, this.Sv))
        },
        Pu: function() {
            function a() {
                window.removeEventListener("error", a);
                null !=
                    b.Yh && b.Yh.stop();
                try {
                    b.$v()
                } catch (c) {}
            }
            var b = this;
            window.addEventListener("error", a)
        },
        Cr: function() {
            if (yc.isSupported()) {
                var a = yc.nh();
                if (null == a) yc.enabled = !1;
                else if (na.wa(["ogg", "mp3", "aac"], function(b) {
                        return b == a
                    })) {
                    m.UD(a);
                    for (var b = ka.X(), c = b instanceof Dd, d = function(a, d, e) {
                            d = c ? m.ee(a) : d;
                            if (m.XB(a)) b.Uk(Xc.Qy, d, e);
                            else {
                                var f = m.Ce(a);
                                b.fj(a, d, f, e)
                            }
                        }, e = 0, f = Ea.ht; e < f.length;) {
                        var g = f[e];
                        ++e;
                        m.cn(g, null, d)
                    }
                } else yc.enabled = !1
            }
        },
        DE: function(a) {
            null != Ea.cv && (xa.tr(a, "tr pt pl nl it fr es en de".split(" ")),
                m.tr(xa.qk), a != m.qu() ? window.console.log("" + m.qu() + "(" + a + ")") : window.console.log(a), m.cn(Ea.cv, function(a) {
                    xa.NB(m.getData(a), Ea.NH)
                }))
        },
        Sv: function() {},
        $v: function() {},
        l: Ea
    });
    da.g = "0";
    da.Gg = function(a, b) {
        a -= .4999;
        return Math.round(a + (b + .4999 - a) * Math.random())
    };
    da.wD = function() {
        return da.Gg(-512, 512)
    };
    da.tn = function() {
        return .5 > Math.random()
    };
    da.hc = function(a, b) {
        return a + (b - a) * Math.random()
    };
    Math.g = "Math";
    var M = ff.CandyBubble = function() {
        this.capture = null;
        var a = this;
        Ea.call(this);
        Zb.ua("candy-bubble",
            1, !1, !1);
        Da.ua();
        Da.pq = function() {
            ka.X().mj(0)
        };
        Da.ks = function() {
            ka.X().mj(1)
        };
        Da.freeze = function() {
            a.Yh.stop();
            ba.X().enabled = !1;
            Ya.X().enabled = !1
        };
        Da.vx = function() {
            a.Yh.start();
            ba.X().enabled = !0;
            Ya.X().enabled = !0
        };
        M.ra = new jg(3);
        M.ra.QB(!1, !1);
        var b = M.ra.window;
        2 <= b.devicePixelRatio && (M.vs = 2, b.aE(M.vs), b.Pf = b.Pf / M.vs | 0);
        M.ra.Lk = function() {
            a.Kj(1)
        };
        M.ra.Kv = function(b) {
            b ? (a.Kj(2), Da.paused || (a.Yh.start(), ba.X().enabled = !0), Da.muted || Gc.ro || ka.X().mj(1)) : (a.Kj(3), a.Yh.stop(), ka.X().mj(0), ba.X().enabled = !1)
        };
        ba.X().zA();
        M.ra.window.sd();
        m.xE($d.wm() ? "sd" : "hd");
        M.ra.Vf.appendChild(O.sh().node);
        v.load();
        b = !1;
        null != tb.Yu() && (v.ed = tb.Yu(), b = !0);
        null != tb.$u() && (v.se = tb.$u(), b = !0);
        b && v.save();
        null != tb.isEnabled() && ka.X().mj(tb.isEnabled() ? 1 : 0);
        ja.gl(v.ed);
        u.gl(v.se);
        this.ED();
        this.rn();
        this.type = 1
    };
    M.g = "CandyBubble";
    M.ua = ff.CandyBubble.init = function(a) {
        Pa.mu = function() {
            return window.famobi.localStorage
        };
        Ea.language = a;
        Ea.cv = 187;
        Ea.ht = [256, 255, 254];
        new M
    };
    M.F = Ea;
    M.prototype = r(Ea.prototype, {
        update: function(a) {
            Ea.prototype.update.call(this,
                a);
            M.ra.update(a)
        },
        ma: function(a) {
            Ea.prototype.ma.call(this, a);
            M.ra.ma()
        },
        Pu: function() {},
        $v: function() {
            this.bF();
            ba.X().u();
            Ya.X().u();
            window.document.body.removeChild(z.ba(M.ra.window, fb).canvas);
            M.ra.window.Yd();
            new ag
        },
        Sv: function() {
            U.rx = $d.wm();
            var a = ya.X();
            this.V(a);
            a.RE(Kd);
            this.V(new Je)
        },
        Cr: function() {
            Ea.prototype.Cr.call(this);
            try {
                ka.X().mx = .1
            } catch (a) {}
        },
        bF: function() {
            if (null == this.capture && M.ra.window instanceof fb) try {
                this.capture = z.ba(M.ra.window, fb).canvas.toDataURL("image/jpeg", .1)
            } catch (a) {
                this.capture =
                    "error"
            }
        },
        ED: function() {
            var a = new Ge,
                b = new He,
                c = cb.cr,
                d = cb.CD;
            c(null, Kd, null);
            d(Bc, a);
            d(ed, b);
            d(dd, a);
            a = new Ie;
            d(Jd, a);
            d(gd, a);
            d(fd, a);
            d(xb, a);
            d(cd, a);
            d(bd, a);
            d(Ld, a);
            c(ab, yb, new Fe);
            c(yb, ab, new Ee);
            c(ab, gc, new Id(1));
            c(gc, ab, new Id(2))
        },
        l: M
    });
    Y.g = "EReg";
    Y.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.uc = this.r.exec(a);
            this.r.VH = a;
            return null != this.r.uc
        },
        Fb: function(a) {
            if (null != this.r.uc && 0 <= a && a < this.r.uc.length) return this.r.uc[a];
            throw 0;
        },
        split: function(a) {
            return a.replace(this.r,
                "#__delim__#").split("#__delim__#")
        },
        replace: function(a, b) {
            return a.replace(this.r, b)
        },
        l: Y
    };
    Gc.g = "FamobiAds";
    Gc.Ww = function() {
        Gc.ro = !0;
        try {
            return window.famobi.showInterstitialAd().then(function() {
                Gc.ro = !1
            })
        } catch (a) {
            return new Promise(function(a) {
                a(null)
            })
        }
    };
    V.g = "FamobiAnalytics";
    V.kC = function() {
        return V.gv("quit", void 0)
    };
    V.gv = function(a, b) {
        null == b && (b = "");
        var c = {};
        c.levelName = b;
        c.reason = a;
        return V.send("EVENT_LEVELFAIL", c)
    };
    V.oC = function(a) {
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return V.send("EVENT_LEVELSUCCESS",
            b)
    };
    V.lC = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return V.send("EVENT_LEVELRESTART", b)
    };
    V.nC = function(a) {
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return V.send("EVENT_LEVELSTART", b)
    };
    V.pause = function() {
        return V.send("EVENT_PAUSE")
    };
    V.resume = function() {
        return V.send("EVENT_RESUME")
    };
    V.mC = function(a, b) {
        null == a && (a = "");
        var c = {};
        c.levelName = a;
        c.levelScore = b;
        return V.send("EVENT_LEVELSCORE", c)
    };
    V.qC = function(a) {
        try {
            var b = {};
            b.liveScore = a;
            V.send("EVENT_LIVESCORE", b)
        } catch (c) {}
    };
    V.Px = function(a,
        b) {
        var c = {};
        c.bgmVolume = a;
        c.sfxVolume = b;
        V.send("EVENT_VOLUMECHANGE", c)
    };
    V.ag = function(a, b) {
        try {
            window.famobi_analytics.trackScreen(a, b)
        } catch (c) {}
    };
    V.send = function(a, b) {
        try {
            return null != b ? window.famobi_analytics.trackEvent(a, b) : window.famobi_analytics.trackEvent(a)
        } catch (c) {
            return new Promise(function(a) {
                a(null)
            })
        }
    };
    tb.g = "FamobiAudio";
    tb.Fu = function() {
        try {
            return window.famobi.audio.hasControls()
        } catch (a) {
            return !0
        }
    };
    tb.Yu = function() {
        try {
            return window.famobi.audio.isEnabled("bgm")
        } catch (a) {
            return null
        }
    };
    tb.$u = function() {
        try {
            return window.famobi.audio.isEnabled("sfx")
        } catch (a) {
            return null
        }
    };
    tb.isEnabled = function() {
        try {
            return window.famobi.audio.isEnabled()
        } catch (a) {
            return null
        }
    };
    Da.g = "FamobiHooks";
    Da.ua = function() {
        var a = window;
        a.famobi_muteAudio = function(a) {
            (Da.muted = a) ? Da.pq(): Da.ks()
        };
        a.famobi_pauseGame = function(a) {
            (Da.paused = a) ? Da.freeze(): Da.vx()
        };
        a.famobi_onUnmuteRequested = function() {
            Da.ks();
            Da.muted = !1
        };
        a.famobi_onMuteRequested = function() {
            Da.pq();
            Da.muted = !0
        }
    };
    Da.pq = function() {};
    Da.ks = function() {};
    Da.freeze = function() {};
    Da.vx = function() {};
    ef.g = "FamobiMoreGamesButton";
    ef.load = function(a) {
        try {
            var b = window.famobi.getBrandingButtonImage(!0)
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
    ef.click = function() {
        try {
            window.famobi.openBrandingLink()
        } catch (a) {}
    };
    Zb.g = "FamobiTracking";
    Zb.ua = function(a, b, c) {
        null == c && (c = !1);
        try {
            famobi_tracking.init(a, null, b, c)
        } catch (d) {}
    };
    Zb.GF = function(a) {
        try {
            famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_START,
                a.wq)
        } catch (b) {}
    };
    Zb.FF = function(a) {
        try {
            famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_END, a.wq)
        } catch (b) {}
    };
    Zb.Mk = function() {
        return new pg
    };
    pg.g = "EventParams";
    pg.prototype = {
        iE: function(a) {
            return this.set("level", a)
        },
        sE: function(a) {
            return this.set("score", a)
        },
        vE: function(a) {
            return this.set("stars", a)
        },
        lE: function(a) {
            return this.set("movesAvailable", a)
        },
        mE: function(a) {
            return this.set("movesLeft", a)
        },
        wE: function(a) {
            return this.set("success", a)
        },
        rE: function(a) {
            return this.set("revives", a)
        },
        setData: function(a) {
            return this.set("data", a)
        },
        set: function(a, b) {
            this.wq[a] = b;
            return this
        },
        l: pg
    };
    F.g = "HxOverrides";
    F.li = function(a, b) {
        a = a.charCodeAt(b);
        if (a == a) return a
    };
    F.substr = function(a, b, c) {
        if (null == c) c = a.length;
        else if (0 > c)
            if (0 == b) c = a.length + c;
            else return "";
        return a.substr(b, c)
    };
    F.remove = function(a, b) {
        b = a.indexOf(b);
        if (-1 == b) return !1;
        a.splice(b, 1);
        return !0
    };
    F.ge = function(a) {
        return {
            Gt: 0,
            et: a,
            aa: function() {
                return this.Gt < this.et.length
            },
            next: function() {
                return this.et[this.Gt++]
            }
        }
    };
    og.g = "Inflate";
    og.prototype = {
        pe: function(a) {
            a = new Wa(a);
            return Ia.pe(a)
        },
        l: og
    };
    Ia.g = "InflateImpl";
    Ia.pe = function(a, b) {
        null == b && (b = 65536);
        var c = new ma(new ArrayBuffer(b)),
            d = new Gd;
        for (a = new Ia(a);;) {
            var e = a.Th(c, 0, b);
            d.di(c, 0, e);
            if (e < b) break
        }
        return d.Xj()
    };
    Ia.prototype = {
        rt: function() {
            if (null != Ia.io) return Ia.io;
            for (var a = [], b = 0; 288 > b;) {
                var c = b++;
                a.push(143 >= c ? 8 : 255 >= c ? 9 : 279 >= c ? 7 : 8)
            }
            Ia.io = this.om.Nm(a, 0, 288, 10);
            return Ia.io
        },
        Th: function(a, b, c) {
            this.Wc = c;
            this.dj = b;
            this.W = a;
            if (0 < c)
                for (; this.Ou(););
            return c - this.Wc
        },
        Ae: function(a) {
            for (; this.Pd < a;) this.Bc |= this.input.L() << this.Pd, this.Pd += 8;
            var b = this.Bc & (1 << a) - 1;
            this.Pd -= a;
            this.Bc >>= a;
            return b
        },
        np: function() {
            0 == this.Pd && (this.Pd = 8, this.Bc = this.input.L());
            var a = 1 == (this.Bc & 1);
            this.Pd--;
            this.Bc >>= 1;
            return a
        },
        vp: function(a) {
            return 0 == a ? 0 : this.np() ? 1 << a - 1 | this.vp(a - 1) : this.vp(a - 1)
        },
        KD: function() {
            this.Pd = this.Bc = 0
        },
        di: function(a, b, c) {
            this.window.di(a, b, c);
            this.W.zb(this.dj, a, b, c);
            this.Wc -= c;
            this.dj += c
        },
        ah: function(a) {
            this.window.ah(a);
            this.W.a[this.dj] = a;
            this.Wc--;
            this.dj++
        },
        Zy: function(a) {
            for (var b = this.window.ZA(), c = 0; c < a;) c++, this.ah(b)
        },
        Yy: function(a, b) {
            this.di(this.window.buffer, this.window.J - a, b)
        },
        Hj: function(a) {
            switch (a.id) {
                case 0:
                    return a.hb;
                case 1:
                    return this.Hj(this.np() ? a.right : a.left);
                case 2:
                    return this.Hj(a.table[this.Ae(a.n)])
            }
        },
        PB: function(a, b) {
            for (var c = 0, d = 0; c < b;) {
                var e = this.Hj(this.hk);
                switch (e) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        d = e;
                        a[c] = e;
                        ++c;
                        break;
                    case 16:
                        e =
                            c + 3 + this.Ae(2);
                        if (e > b) throw 0;
                        for (; c < e;) a[c] = d, ++c;
                        break;
                    case 17:
                        c += 3 + this.Ae(3);
                        if (c > b) throw 0;
                        break;
                    case 18:
                        c += 11 + this.Ae(7);
                        if (c > b) throw 0;
                        break;
                    default:
                        throw 0;
                }
            }
        },
        Ou: function() {
            switch (this.state.m) {
                case 0:
                    var a = this.input.L();
                    if (8 != (a & 15)) throw 0;
                    var b = this.input.L();
                    if (0 != ((a << 8) + b) % 31) throw 0;
                    if (0 != (b & 32)) throw 0;
                    this.state = ha.i1;
                    return !0;
                case 1:
                    switch (this.Zp = this.np(), this.Ae(2)) {
                        case 0:
                            this.$a = this.input.oe();
                            if (this.input.oe() != 65535 - this.$a) throw 0;
                            this.state = ha.i3;
                            a = this.Ou();
                            this.KD();
                            return a;
                        case 1:
                            return this.hk = this.rt(), this.pm = null, this.state = ha.i2, !0;
                        case 2:
                            a = this.Ae(5) + 257;
                            b = this.Ae(5) + 1;
                            for (var c = this.Ae(4) + 4, d = 0; d < c;) {
                                var e = d++;
                                this.Dm[Ia.Es[e]] = this.Ae(3)
                            }
                            for (; 19 > c;) d = c++, this.Dm[Ia.Es[d]] = 0;
                            this.hk = this.om.Nm(this.Dm, 0, 19, 8);
                            c = [];
                            d = 0;
                            for (e = a + b; d < e;) d++, c.push(0);
                            this.PB(c, a + b);
                            this.pm = this.om.Nm(c, a, b, 16);
                            this.hk = this.om.Nm(c, 0, a, 16);
                            this.state = ha.i2;
                            return !0;
                        default:
                            throw 0;
                    }
                case 2:
                    b = this.Hj(this.hk);
                    if (256 > b) return this.ah(b), 0 < this.Wc;
                    if (256 == b) this.state = this.Zp ?
                        ha.i4 : ha.i1;
                    else {
                        b -= 257;
                        a = Ia.Zx[b];
                        if (-1 == a) throw 0;
                        this.$a = Ia.Yx[b] + this.Ae(a);
                        b = null == this.pm ? this.vp(5) : this.Hj(this.pm);
                        a = Ia.Wx[b];
                        if (-1 == a) throw 0;
                        this.zi = Ia.Vx[b] + this.Ae(a);
                        if (this.zi > this.window.J) throw 0;
                        this.state = 1 == this.zi ? ha.i6 : ha.i5
                    }
                    return !0;
                case 3:
                    return a = this.$a < this.Wc ? this.$a : this.Wc, b = this.input.read(a), this.$a -= a, this.di(b, 0, a), 0 == this.$a && (this.state = this.Zp ? ha.i4 : ha.i1), 0 < this.Wc;
                case 4:
                    a = this.window.Hz();
                    if (null == a) return this.state = ha.i7, !0;
                    b = jd.read(this.input);
                    if (!a.CA(b)) throw 0;
                    this.state = ha.i7;
                    return !0;
                case 5:
                    for (; 0 < this.$a && 0 < this.Wc;) a = this.$a < this.zi ? this.$a : this.zi, a = this.Wc < a ? this.Wc : a, this.Yy(this.zi, a), this.$a -= a;
                    0 == this.$a && (this.state = ha.i2);
                    return 0 < this.Wc;
                case 6:
                    return a = this.$a < this.Wc ? this.$a : this.Wc, this.Zy(a), this.$a -= a, 0 == this.$a && (this.state = ha.i2), 0 < this.Wc;
                case 7:
                    return !1
            }
        },
        l: Ia
    };
    Bb.g = "Huffman";
    Bb.prototype = {
        Cn: function(a) {
            this.id = 0;
            this.hb = a;
            return this
        },
        Jn: function(a, b) {
            this.id = 1;
            this.left = a;
            this.right = b;
            return this
        },
        nE: function(a, b) {
            this.id = 2;
            this.n =
                a;
            this.table = b;
            return this
        },
        l: Bb
    };
    ng.g = "HuffTools";
    ng.prototype = {
        es: function(a) {
            switch (a.id) {
                case 0:
                    return 0;
                case 1:
                    var b = this.es(a.left);
                    a = this.es(a.right);
                    return 1 + (b < a ? b : a);
                case 2:
                    throw 0;
            }
        },
        rl: function(a) {
            var b = this.es(a);
            if (0 == b) return a;
            if (1 == b) {
                if (1 == a.id) return (new Bb).Jn(this.rl(a.left), this.rl(a.right));
                throw 0;
            }
            for (var c = [], d = 0, e = 1 << b; d < e;) d++, c.push((new Bb).Cn(-1));
            this.fs(c, 0, 0, b, a);
            return (new Bb).nE(b, c)
        },
        fs: function(a, b, c, d, e) {
            if (1 == e.id) {
                var f = e.left,
                    g = e.right;
                0 < d ? (this.fs(a, b, c +
                    1, d - 1, f), this.fs(a, b | 1 << c, c + 1, d - 1, g)) : a[b] = this.rl(e)
            } else a[b] = this.rl(e)
        },
        Zn: function(a, b, c, d) {
            if (d > b) throw 0;
            var e = c << 5 | d;
            if (a.G.hasOwnProperty(e)) return (new Bb).Cn(a.G[e]);
            c <<= 1;
            ++d;
            return (new Bb).Jn(this.Zn(a, b, c, d), this.Zn(a, b, c | 1, d))
        },
        Nm: function(a, b, c, d) {
            if (1 == c) return (new Bb).Jn((new Bb).Cn(0), (new Bb).Cn(0));
            var e = [],
                f = [];
            if (32 < d) throw 0;
            for (var g = 0; g < d;) g++, e.push(0), f.push(0);
            for (g = 0; g < c;) {
                var h = g++;
                h = a[h + b];
                if (h >= d) throw 0;
                e[h]++
            }
            g = 0;
            h = 1;
            for (var l = d - 1; h < l;) {
                var y = h++;
                g = g + e[y] << 1;
                f[y] =
                    g
            }
            e = new wb;
            for (g = 0; g < c;) h = g++, l = a[h + b], 0 != l && (y = f[l - 1], f[l - 1] = y + 1, e.G[y << 5 | l] = h);
            return this.rl((new Bb).Jn(this.Zn(e, d, 0, 1), this.Zn(e, d, 1, 1)))
        },
        l: ng
    };
    mg.g = "~_Inflate.Window";
    mg.prototype = {
        Yw: function() {
            null != this.Oj && this.Oj.update(this.buffer, 0, 32768);
            var a = new ma(new ArrayBuffer(65536));
            this.J -= 32768;
            a.zb(0, this.buffer, 32768, this.J);
            this.buffer = a
        },
        di: function(a, b, c) {
            65536 < this.J + c && this.Yw();
            this.buffer.zb(this.J, a, b, c);
            this.J += c
        },
        ah: function(a) {
            65536 == this.J && this.Yw();
            this.buffer.a[this.J] = a;
            this.J++
        },
        ZA: function() {
            return this.buffer.a[this.J - 1]
        },
        Hz: function() {
            null != this.Oj && this.Oj.update(this.buffer, 0, this.J);
            return this.Oj
        },
        l: mg
    };
    jd.g = "Adler32";
    jd.read = function(a) {
        var b = new jd,
            c = a.L(),
            d = a.L(),
            e = a.L();
        a = a.L();
        b.Dj = e << 8 | a;
        b.Ej = c << 8 | d;
        return b
    };
    jd.prototype = {
        update: function(a, b, c) {
            var d = this.Dj,
                e = this.Ej,
                f = b;
            for (b += c; f < b;) c = f++, d = (d + a.a[c]) % 65521, e = (e + d) % 65521;
            this.Dj = d;
            this.Ej = e
        },
        CA: function(a) {
            return a.Dj == this.Dj ? a.Ej == this.Ej : !1
        },
        l: jd
    };
    var ha = Ja.e0 = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    ha.i0 = {
        m: 0,
        s: "e0",
        toString: n
    };
    ha.i1 = {
        m: 1,
        s: "e0",
        toString: n
    };
    ha.i2 = {
        m: 2,
        s: "e0",
        toString: n
    };
    ha.i3 = {
        m: 3,
        s: "e0",
        toString: n
    };
    ha.i4 = {
        m: 4,
        s: "e0",
        toString: n
    };
    ha.i5 = {
        m: 5,
        s: "e0",
        toString: n
    };
    ha.i6 = {
        m: 6,
        s: "e0",
        toString: n
    };
    ha.i7 = {
        m: 7,
        s: "e0",
        toString: n
    };
    ha.zc = [ha.i0, ha.i1, ha.i2, ha.i3, ha.i4, ha.i5, ha.i6, ha.i7];
    na.g = "Lambda";
    na.ft = function(a) {
        var b = [];
        for (a = mc(a); a.aa();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    na.wa = function(a, b) {
        for (a = mc(a); a.aa();) {
            var c = a.next();
            if (b(c)) return !0
        }
        return !1
    };
    na.ge = function(a, b) {
        for (a =
            mc(a); a.aa();) {
            var c = a.next();
            b(c)
        }
    };
    na.filter = function(a, b) {
        var c = [];
        for (a = mc(a); a.aa();) {
            var d = a.next();
            b(d) && c.push(d)
        }
        return c
    };
    na.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (b = mc(a); b.aa();) b.next(), ++c;
        else
            for (a = mc(a); a.aa();) {
                var d = a.next();
                b(d) && ++c
            }
        return c
    };
    na.find = function(a, b) {
        for (a = mc(a); a.aa();) {
            var c = a.next();
            if (b(c)) return c
        }
        return null
    };
    ae.g = "Message";
    ae.prototype = {
        get: function(a) {
            return null != this.Af ? J.get(this.Af, a) : null
        },
        l: ae
    };
    lg.g = "~_Object.ChildIterator";
    lg.prototype = {
        aa: function() {
            return null !=
                this.ho
        },
        next: function() {
            var a = this.ho;
            this.ho = this.ho.H;
            return a
        },
        l: lg
    };
    zg.g = "ObjectTools";
    zg.kl = function(a, b) {
        if (null != a.firstChild && null != a.firstChild.H) {
            var c = !0,
                d = a.firstChild,
                e;
            for (e = d.H; null != e;) {
                if (0 > b(e, d)) {
                    c = !1;
                    break
                }
                e = e.H
            }
            if (!c) {
                for (var f, g, h = 1, l, y, H;;) {
                    c = d;
                    d = g = null;
                    for (l = 0; null != c;) {
                        ++l;
                        y = 0;
                        e = c;
                        f = 0;
                        for (H = h; f < H && (f++, ++y, e = e.H, null != e););
                        for (H = h; 0 < y || 0 < H && null != e;) 0 == y ? (f = e, e = e.H, --H) : 0 == H || null == e ? (f = c, c = c.H, --y) : 0 <= b(e, c) ? (f = c, c = c.H, --y) : (f = e, e = e.H, --H), null != g ? g.H = f : d = f, g = f;
                        c = e
                    }
                    g.H =
                        null;
                    if (1 >= l) break;
                    h <<= 1
                }
                a.firstChild = d
            }
        }
    };
    Yb.g = "1";
    Yb.F = C;
    Yb.prototype = r(C.prototype, {
        D: function() {
            C.prototype.D.call(this);
            this.je.u();
            this.je = null;
            this.buffer.u();
            this.buffer = null
        },
        Ma: function(a, b, c) {
            if (null != b)
                for (c = 0; c < b.length;) {
                    var d = b[c];
                    ++c;
                    this.Ma(a, null, d)
                } else b = null == c ? 0 : c + 1, b > this.nq && (this.nq = b), this.je.resize(this.nq + 1), c = this.je.f[b], null == c && (c = new kg(b), this.je.f[b] = c), c.add(a) && this.vq++
        },
        detach: function(a, b) {
            b = null == b ? 0 : b + 1;
            if (0 <= b && b < this.je.i) {
                var c = this.je.f[b];
                null != c && c.remove(a) &&
                    (this.vq--, c.list.Db() && (c.u(), this.je.f[b] = null))
            }
        },
        jc: function(a, b) {
            this.buffer.i = 0;
            this.buffer.Yc(2 * this.vq);
            var c = this.buffer.f,
                d = 0;
            if (0 < this.je.i) {
                var e = this.je.f[0];
                if (null != e) {
                    var f = e.list.f;
                    var g = 0;
                    for (e = e.list.i; g < e;) c[g + d] = f[g], ++g;
                    d += e
                }
            }
            g = null == a ? 0 : a + 1;
            if (0 <= g && g < this.je.i && (e = this.je.f[g], null != e)) {
                f = e.list.f;
                g = 0;
                for (e = e.list.i; g < e;) c[g + d] = f[g], ++g;
                d += e
            }
            a = new ae(this, a, b);
            g = 0;
            for (e = d; g < e;) c[g].handle(a), ++g
        },
        l: Yb
    });
    kg.g = "2";
    kg.prototype = {
        add: function(a) {
            if (this.list.contains(a)) return !1;
            var b = this.list;
            b.i == b.C && b.R();
            b.f[b.i++] = a;
            return !0
        },
        remove: function(a) {
            return this.list.remove(a)
        },
        u: function() {
            this.list.u();
            this.list = null
        },
        l: kg
    };
    $d.g = "Platform";
    $d.wm = function() {
        return "undefined" !== typeof window.orientation
    };
    var J = {
        g: "~_Props.Props_Impl_",
        Fa: function(a) {
            var b = {};
            if (null != a)
                if (1 == a.length) J.set(b, a[0]);
                else
                    for (var c = 0, d = a.length; c < d;) J.set(b, a[c], a[c + 1]), c += 2;
            return b
        },
        ad: function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        get: function(a, b) {
            return fa.Ia(a, b)
        },
        set: function(a,
            b, c) {
            a[b] = null == c ? b : c;
            return a
        }
    };
    fa.g = "Reflect";
    fa.Ia = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    jg.g = "Stage";
    jg.prototype = {
        QB: function(a, b) {
            null == b && (b = !1);
            null == a && (a = !1);
            var c = this,
                d = new fb;
            d.RB(a, b);
            d.JB();
            this.window = d;
            this.xb = new sd;
            this.xb.Bv = 0 < (this.j & 1);
            this.xb.bE();
            this.window.qE(this.xb);
            this.xb.clear();
            this.window.Lk = function() {
                c.yx();
                null != c.Lk && c.Lk(c.window.sd())
            };
            this.window.aw = function(a) {
                c.Kv(a)
            };
            this.window.SC = function() {};
            this.yx()
        },
        update: function(a) {
            pa.update(this.Vf,
                a);
            za.ms(this.Vf, a)
        },
        ma: function() {
            pa.pc(this.Vf);
            var a = 0 == (this.j & 2);
            Na.reset();
            0 < (this.j & 4) ? this.Vf.cg(!0, a) : za.cg(this.Vf, a);
            0 < (this.j & 4) ? this.Vf.ul() : za.ul(this.Vf);
            this.xb.clear();
            this.xb.oA(this.Vf)
        },
        Da: function(a, b) {
            if (!wa.wa(a)) {
                var c = null,
                    d = null;
                null == b ? (b = m.cB(a), null != b && (d = db.decode(b, !0))) : (b = m.getData(b), "string" == typeof b ? c = new Jc(b) : d = ma.an(b));
                if (null != d) switch (String.fromCodePoint(d.a[0]) + String.fromCodePoint(d.a[1]) + String.fromCodePoint(d.a[2])) {
                    case "BMF":
                        c = new de(d);
                        break;
                    case "TPJ":
                        c =
                            new Jc(rg.MF(d));
                        break;
                    default:
                        c = new Jc(m.Dz(d))
                }
                this.xb.createTexture(a, m.getData(a), c);
                c = wa.get(a);
                m.FB(a) && "sd" == m.qB() && (c.scale = 2)
            }
        },
        Qa: function(a) {
            a = m.iB(a);
            for (var b = new ub, c = 0; c < a.length;) {
                var d = a[c];
                ++c;
                var e = d.split(".");
                d = e.pop();
                e = e.join(".");
                var f = null != va[e] ? b.Cf(e) : b.G[e];
                if (null == f) {
                    var g = f = [];
                    null != va[e] ? b.Bd(e, g) : b.G[e] = g
                }
                f.push(d)
            }
            for (a = new Tf(b); a.aa();) c = a.next(), b = c.key, c = c.value, 2 == c.length ? ((new Y("(?:png|jpg)", "")).match(c[1]) && (d = c[0], c[0] = c[1], c[1] = d), d = m.Bf("" + b + "." + c[1])) :
                d = null, b = m.Bf("" + b + "." + c[0]), this.Da(b, d)
        },
        bm: function(a, b) {
            null == b && (b = !0);
            this.xb.jh(a);
            b && m.Yd(a)
        },
        yx: function() {
            var a = this.window.sd(),
                b = this.xb.eh,
                c = a.b;
            a = a.a;
            var d = new w;
            d.b = 0;
            d.a = 0;
            d.c = 0;
            d.d = 0;
            d.b = 0;
            d.a = 0;
            d.c = c;
            d.d = a;
            b.reset(d)
        },
        l: jg
    };
    G.g = "Std";
    G.La = function(a) {
        return z.Cj(a, "")
    };
    G.parseInt = function(a) {
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
    ec.g =
        "StringBuf";
    ec.prototype = {
        l: ec
    };
    lb.g = "StringTools";
    lb.Ju = function(a, b) {
        for (var c = "", d = 0; d < a.length;) {
            var e = a,
                f = d++,
                g = e.charCodeAt(f);
            55296 <= g && 56319 >= g && (g = g - 55232 << 10 | e.charCodeAt(f + 1) & 1023);
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
    lb.av = function(a, b) {
        a = F.li(a, b);
        return 8 < a && 14 > a ? !0 :
            32 == a
    };
    lb.jv = function(a) {
        for (var b = a.length, c = 0; c < b && lb.av(a, c);) ++c;
        return 0 < c ? F.substr(a, c, b - c) : a
    };
    lb.OD = function(a) {
        for (var b = a.length, c = 0; c < b && lb.av(a, b - c - 1);) ++c;
        return 0 < c ? F.substr(a, 0, b - c) : a
    };
    lb.trim = function(a) {
        return lb.jv(lb.OD(a))
    };
    kb.g = "3";
    kb.prototype = {
        Ma: function(a) {
            if (null == this.list) return this.list = new ne(a), !0;
            for (var b = this.list; null != b;) {
                if (b.Wa == a) return !1;
                b = b.next
            }
            a = new ne(a);
            a.next = this.list;
            this.list = a;
            return !0
        },
        detach: function(a) {
            if (null == a && null != this.current) return this.detach(this.current), !0;
            var b = this.list;
            if (null == b) return !1;
            if (b.Wa == a) return this.next == b && (this.next = b.next), b.Wa = null, this.list = b.next, b.next = null, !0;
            var c = b;
            for (b = b.next; null != b;) {
                if (b.Wa == a) return b.Wa = null, c.next = b.next, b.next = null, this.next == b && (this.next = c.next), !0;
                c = b;
                b = b.next
            }
            return !1
        },
        toggle: function(a, b) {
            if (null == b) {
                b = !0;
                for (var c = this.list; null != c;) {
                    if (c.Wa == a) {
                        b = !1;
                        break
                    }
                    c = c.next
                }
            }
            return b ? this.Ma(a) : this.detach(a)
        },
        u: function() {
            for (var a = this.list; null != a;) this.next = a.next, a.Wa = null, a.next = null, a = this.next;
            this.list = this.next = null
        },
        l: kb
    };
    D.g = "Time";
    D.Ma = function(a, b) {
        null == b && (b = !1);
        b ? D.gj.Ma(a) : D.Sg.Ma(a)
    };
    D.detach = function(a, b) {
        null == b && (b = !1);
        b ? D.gj.detach(a) : D.Sg.detach(a)
    };
    D.advance = function(a) {
        var b = a / 1E3;
        D.time += b;
        if (!(0 < D.sv && D.time < D.uk + 1 / D.sv)) {
            D.uk = D.time;
            D.time > D.dv + 1 && (D.bu = Math.round(.25 * D.sq + .75 * D.bu), D.dv = D.time, D.sq = 0);
            D.sq++;
            a = D.Kt;
            D.eg += b * D.Xr;
            .2 < D.eg && (D.eg = .2);
            for (; D.eg > a;) {
                D.eg -= a;
                b = D.Sg;
                for (var c = b.list; null != c;) b.next = c.next, b.current = c.Wa, c.Wa(a), c = b.next;
                b.next = null;
                b.current =
                    null;
                D.$t += a;
                D.first = !1
            }
            if (!D.first) {
                a = D.eg / a;
                b = D.gj;
                for (c = b.list; null != c;) b.next = c.next, b.current = c.Wa, c.Wa(a), c = b.next;
                b.next = null;
                b.current = null
            }
        }
    };
    sb.g = "Timer";
    sb.Xd = function(a, b) {
        $c.Xd(a, 1E3 * b | 0)
    };
    sb.QH = function() {};
    sb.prototype = {
        start: function() {
            var a = this;
            this.stop();
            if (this.window && "undefined" !== typeof window.requestAnimationFrame) {
                var b = function(c) {
                    a.handle = window.requestAnimationFrame(b);
                    var d = Math.round(100 * (c - a.now));
                    a.now = c;
                    D.advance(d / 100)
                };
                this.now = window.performance.now();
                this.handle =
                    window.requestAnimationFrame(b)
            } else b = function() {
                a.handle = setTimeout(b, 16);
                var c = a.now;
                a.now = new Date;
                D.advance(a.now - c)
            }, this.now = new Date, this.handle = setTimeout(b, 16)
        },
        stop: function() {
            this.window ? 0 > this.handle || (window.cancelAnimationFrame(this.handle), this.handle = -1) : null != this.handle && (clearInterval(this.handle), this.handle = null)
        },
        l: sb
    };
    df.g = "Type";
    df.aA = function(a) {
        return new(Function.prototype.bind.apply(a, [null].concat([])))
    };
    df.BA = function(a) {
        var b = Ja[a.s];
        b = b[b.fc[a.m]].Se;
        if (null != b) {
            for (var c =
                    [], d = 0; d < b.length;) {
                var e = b[d];
                ++d;
                c.push(a[e])
            }
            return c
        }
        return []
    };
    var Sa = {
        g: "~_UInt.UInt_Impl_",
        Kc: function(a) {
            return 0 > a ? 4294967296 + a : a + 0
        }
    };
    A.g = "Xml";
    A.parse = function(a) {
        return fc.parse(a)
    };
    A.createElement = function(a) {
        var b = new A(A.Element);
        if (b.nodeType != A.Element) throw 0;
        b.nodeName = a;
        return b
    };
    A.Nl = function(a) {
        var b = new A(A.by);
        if (b.nodeType == A.Document || b.nodeType == A.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    A.Yz = function(a) {
        var b = new A(A.Sx);
        if (b.nodeType == A.Document || b.nodeType == A.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    A.createComment = function(a) {
        var b = new A(A.Comment);
        if (b.nodeType == A.Document || b.nodeType == A.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    A.Zz = function(a) {
        var b = new A(A.Xx);
        if (b.nodeType == A.Document || b.nodeType == A.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    A.createProcessingInstruction = function(a) {
        var b = new A(A.ProcessingInstruction);
        if (b.nodeType == A.Document || b.nodeType == A.Element) throw 0;
        b.nodeValue = a;
        return b
    };
    A.createDocument = function() {
        return new A(A.Document)
    };
    A.prototype = {
        get: function(a) {
            if (this.nodeType !=
                A.Element) throw 0;
            var b = this.Fl;
            return null != va[a] ? b.Cf(a) : b.G[a]
        },
        set: function(a, b) {
            if (this.nodeType != A.Element) throw 0;
            var c = this.Fl;
            null != va[a] ? c.Bd(a, b) : c.G[a] = b
        },
        wa: function(a) {
            if (this.nodeType != A.Element) throw 0;
            var b = this.Fl;
            return null != va[a] ? b.ip(a) : b.G.hasOwnProperty(a)
        },
        attributes: function() {
            if (this.nodeType != A.Element) throw 0;
            return this.Fl.keys()
        },
        gp: function(a) {
            if (this.nodeType != A.Document && this.nodeType != A.Element) throw 0;
            for (var b = [], c = 0, d = this.children; c < d.length;) {
                var e = d[c];
                ++c;
                if (e.nodeType == A.Element) {
                    if (e.nodeType != A.Element) throw 0;
                    var f = e.nodeName == a
                } else f = !1;
                f && b.push(e)
            }
            return F.ge(b)
        },
        LA: function() {
            if (this.nodeType != A.Document && this.nodeType != A.Element) throw 0;
            for (var a = 0, b = this.children; a < b.length;) {
                var c = b[a];
                ++a;
                if (c.nodeType == A.Element) return c
            }
            return null
        },
        V: function(a) {
            if (this.nodeType != A.Document && this.nodeType != A.Element) throw 0;
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != A.Document &&
                this.nodeType != A.Element) throw 0;
            return F.remove(this.children, a) ? (a.parent = null, !0) : !1
        },
        toString: function() {
            return Fd.print(this)
        },
        l: A
    };
    Fc.g = "4";
    Fc.Zb = !0;
    Zd.g = "5";
    Zd.ga = [Fc];
    Zd.F = kb;
    Zd.prototype = r(kb.prototype, {
        update: function(a) {
            this.time += a;
            this.OF(a);
            var b = this.Kb,
                c = b.f,
                d = 0;
            for (b = b.i; d < b;) {
                var e = d++;
                e = c[e];
                e.K = this.viewport.Vu(e.Ra) ? e.K & -129 : e.K | 128
            }
            0 <= U.Ez && lc.dF(this, a);
            this.Ll && (this.Ll = !1, this.os());
            this.trim();
            this.$n()
        },
        QD: function(a) {
            this.viewport.$f(a)
        },
        ws: function(a) {
            this.viewport.$r(a,
                a)
        },
        tE: function(a) {
            this.viewport.Wb(a);
            this.Nf.pl()
        },
        Bn: function(a, b) {
            this.viewport.Bn(a, b);
            this.Nf.pl()
        },
        Hn: function(a) {
            var b = this,
                c = a.xa;
            this.Kb = new W(c.$ * c.da);
            this.Kb.Rd = !0;
            this.Uh = a.Uh;
            this.Uf = a.Uf;
            this.cols = a.xa.$;
            this.xa = new hg;
            this.viewport.Pw(0);
            this.Pb = new re;
            this.Pb.Bo = function(a, c) {
                if (b.wh.Db()) return new yd(a, c);
                c = b.wh;
                c = c.f[--c.i];
                c.node = a;
                return c
            };
            this.Pb.Wk = function(a) {
                if (1024 > b.wh.i) {
                    var c = b.wh;
                    c.i == c.C && c.R();
                    c.f[c.i++] = a
                }
            };
            this.Ck = 0;
            this.dD(a.xa);
            a = new w;
            a.b = 1;
            a.a = 1;
            a.c = -1;
            a.d = -1;
            this.Eg = a;
            this.$n();
            this.ha.p.b = this.Fp() / 2;
            this.ha.p.a = 0;
            this.ha.d.b = 0;
            this.ha.d.a = -1;
            this.ef = new fg(this);
            this.Nf = new $e(this);
            this.Hg = new Ye(this);
            this.Nf.pl()
        },
        Ow: function() {
            this.ha.p.a = 0;
            this.bl(this.ha.p.b, -this.viewport.uj(this.viewport.la.a))
        },
        zE: function() {
            this.Ow();
            this.$n();
            var a = this.Eg;
            this.IF(0, -(a.d - a.a))
        },
        cq: function() {
            return this.viewport.Zh(this.Gp()) + .1 >= this.viewport.la.a
        },
        qh: function(a) {
            null == a && (a = 0);
            if (0 == this.Ac.i) return null;
            var b = this.Ac;
            return b.f[(a + b.Ta) % b.C]
        },
        $E: function(a,
            b) {
            var c = this.Ac;
            c = c.f[(a + c.Ta) % c.C];
            var d = this.Ac,
                e = this.Ac;
            e.f[(a + e.Ta) % e.C] = d.f[(b + d.Ta) % d.C];
            a = this.Ac;
            a.f[(b + a.Ta) % a.C] = c
        },
        Im: function(a) {
            var b = new Mb(this);
            b.code = a;
            b.K |= 8;
            b.K |= 16;
            b.K &= -65;
            a = b.Ra.c;
            var c = this.ha.p;
            a.b = c.b;
            a.a = c.a;
            a = this.Kb;
            a.i == a.C && a.R();
            a.f[a.i++] = b;
            b.Mc(new Ab);
            a = this.Ac.i;
            c = this.Ac;
            c.C == c.i && c.R();
            c.f[(c.i++ + c.Ta) % c.C] = b;
            for (c = this.list; null != c;) this.next = c.next, this.current = c.Wa, c.Wa.QC(b, a), c = this.next;
            this.current = this.next = null;
            return b
        },
        Vl: function(a) {
            0 >= (a.K & 64) ||
                (a.K &= -65, this.Ck--, null != a.ya && this.Pb.removeNode(a.ya), this.xa.vw(a), this.Ll = !0)
        },
        mi: function(a, b, c) {
            c.b = 1;
            c.b += 2 * a;
            (b & 1) == this.Uf && (c.b += 1);
            c.a = 1 + 1.7320508075 * b;
            c.a = -c.a
        },
        GE: function() {
            if (0 == this.Ac.i) return !1;
            var a = this.Ac;
            a = a.f[a.Ta];
            this.Lt();
            a.K |= 8;
            a.Mc(new Ve);
            var b = this.Lj;
            b.i == b.C && b.R();
            b.f[b.i++] = a;
            this.Bk++;
            return !0
        },
        Lt: function() {
            if (0 == this.Ac.i) return !1;
            var a = this.Ac,
                b = a.f[a.Ta++];
            a.Ta == a.C && (a.Ta = 0);
            a.i--;
            b.K &= -9;
            b.K &= -17;
            b.Sf(Ab);
            return !0
        },
        OF: function(a) {
            var b = 8 * this.Kb.i,
                c = 7 * b,
                d =
                this.Zr,
                e = this.Yr;
            d.i < c && (d.ua(c, null), e.ua(c, null));
            c = yg.So;
            for (var f = 0; 7 > f;) {
                var g = f++;
                c[g] = 0
            }
            var h = this.Kb;
            f = h.f;
            g = 0;
            for (var l = h.i; g < l;) {
                h = g++;
                var y = f[h];
                y.Pc = a;
                h = y.Hd;
                for (var H = h.f, p = 0, q = h.i; p < q;) {
                    h = p++;
                    var k = H[h];
                    var m = h = k.ne;
                    var n = c[m];
                    c[m] = n + 1;
                    m = n;
                    h = h * b + m;
                    e.f[h] = k;
                    d.f[h] = y
                }
            }
            for (h = 0; 7 > h;) {
                m = c[h];
                a = b * h;
                for (l = a + m; a < l;) f = d.f[a], null != f.o && (g = e.f[a], g.enabled && g.update(f)), ++a;
                ++h
            }
        },
        Aq: function(a, b) {
            for (var c = this.list; null != c;) this.next = c.next, this.current = c.Wa, c.Wa.Aq(a, b), c = this.next;
            this.current =
                this.next = null;
            U.Eu && this.Du.apply(a, b)
        },
        Cq: function(a, b) {
            null != this.sk && 0 < (this.sk.K & 64) && 0 >= (this.sk.K & 4) && this.sk.jl();
            this.sk = a;
            this.Lj.remove(a);
            this.Ck++;
            this.Bk--;
            a.K &= -9;
            if (null == b) {
                var c = a.mb;
                c.b = 0;
                c.a = 0;
                c = a.force;
                c.b = 0;
                c.a = 0
            }
            var d = a.position,
                e = d.a;
            c = new x;
            c.b = d.b;
            c.a = e;
            this.Sz(a, b);
            a.Ng = U.Ue.Ng;
            a.ze = U.Ue.ze;
            a.Mc(new kc);
            d = a.force;
            d.b = 0;
            d.a = 0;
            e = a.mb;
            var f = e.a;
            d = new x;
            d.b = e.b;
            d.a = f;
            Cb.normalize(d);
            e = a.mb;
            e.b = 0;
            e.a = 0;
            U.Ue.enabled && this.Qp.sD(a);
            for (e = this.list; null != e;) this.next = e.next, this.current =
                e.Wa, e.Wa.Cq(a, b), e = this.next;
            this.current = this.next = null;
            U.Ue.enabled && this.Qp.apply(a, c, d)
        },
        Bq: function(a, b) {
            var c = null;
            0 == b ? c = U.Bz : 2 == b && (c = U.Az);
            if (null == c || "destroy" == c) this.Lj.remove(a), a.D(), this.Bk--;
            else {
                a.mb.b = 0;
                a.mb.a = 0;
                a.force.b = 0;
                a.force.a = 0;
                c = a.position;
                var d = this.ha.p;
                c.b = d.b;
                c.a = d.a;
                a.Mc(new Ab);
                c = this.Ac.BF();
                this.Ac.clear();
                d = this.Ac;
                d.C == d.i && d.R();
                d.f[(d.i++ + d.Ta) % d.C] = a;
                for (d = 0; d < c.length;) {
                    var e = c[d];
                    ++d;
                    var f = this.Ac;
                    f.C == f.i && f.R();
                    f.f[(f.i++ + f.Ta) % f.C] = e
                }
            }
            for (c = this.list; null !=
                c;) this.next = c.next, this.current = c.Wa, c.Wa.Bq(a, b), c = this.next;
            this.current = this.next = null
        },
        zq: function(a, b) {
            for (var c = this.list; null != c;) this.next = c.next, this.current = c.Wa, c.Wa.zq(a, b), c = this.next;
            this.current = this.next = null
        },
        Gp: function() {
            this.mi(0, this.If, this.jj);
            return this.jj.a - 1
        },
        Fp: function() {
            return 2 * this.cols + 1 * this.Uh
        },
        yu: function() {
            this.mi(0, this.vg, this.jj);
            return this.jj.a + 1
        },
        PA: function(a) {
            null == a && (a = !1);
            var b = this.ha.p.a - this.yu();
            0 > b && (b = 0);
            return a ? b / 1.7320508075 : b
        },
        YD: function(a,
            b) {
            null == b && (b = !1);
            b ? (b = new x, b.b = 0, b.a = 0, this.mi(0, this.vg - (a | 0), b), this.bl(this.ha.p.b, b.a)) : this.bl(this.ha.p.b, this.yu() + a)
        },
        ku: function(a) {
            return null != a ? a.of(this.ha) : this.ha.clone()
        },
        cm: function(a) {
            if (null != a) return a.b = this.ha.p.b, a.a = this.ha.p.a, a;
            a = this.ha.p;
            var b = a.a,
                c = new x;
            c.b = a.b;
            c.a = b;
            return c
        },
        bl: function(a, b) {
            this.ha.p.b = a;
            this.ha.p.a = b;
            this.Nf.pl()
        },
        IF: function(a, b) {
            this.bl(this.ha.p.b + a, this.ha.p.a + b)
        },
        Cp: function(a) {
            var b = 0,
                c = this.Kb,
                d = c.f,
                e = 0;
            for (c = c.i; e < c;) {
                var f = e++;
                f = d[f];
                this.viewport.Vu(f.Ra) && (a[b++] = f)
            }
            return b
        },
        Xz: function() {
            for (var a = 65535, b = 0, c, d = this.viewport.la.a, e = this.Kb.iterator(); e.aa();) c = e.next(), 0 < (c.K & 4) || this.viewport.Zh(c.Ra.c.a + c.Ra.r) < d || (c = c.Vb, c > b && (b = c), c < a && (a = c));
            return b - a + 1
        },
        Wz: function(a) {
            var b = 0;
            null == a && (a = function() {
                return !0
            });
            var c = this.Kb,
                d = c.f,
                e = 0;
            for (c = c.i; e < c;) {
                var f = e++;
                f = d[f];
                0 >= (f.K & 128) && a(f) && ++b
            }
            return b
        },
        $n: function() {
            var a = this.Eg;
            a.b = a.a = 1;
            a.c = a.d = -1;
            if (0 == this.Ck) a = this.Eg, a.b = 0, a.a = 0, a.c = 0, a.d = 0;
            else {
                var b = this.Kb;
                a =
                    b.f;
                var c = 0;
                for (b = b.i; c < b;) {
                    var d = c++;
                    d = a[d];
                    if (0 < (d.K & 64)) {
                        var e = d.Ra.c;
                        d = this.Eg;
                        var f = e.b;
                        f < d.b ? d.b = f : f > d.c && (d.c = f);
                        e = e.a;
                        e < d.a ? d.a = e : e > d.d && (d.d = e)
                    }
                }
                a = this.Eg;
                --a.b;
                --a.a;
                a.c += 1;
                a.d += 1
            }
        },
        trim: function() {
            for (var a = this.vg, b; a <= this.If;) {
                for (var c = 0, d = this.cols; c < d;)
                    if (b = c++, b = this.xa.get(b, a), null != b && 0 >= (b.K & 4)) {
                        this.vg = b.Vb;
                        return
                    }++a
            }
        },
        dD: function(a) {
            this.vg = 0;
            this.If = a.da - 1;
            0 == (a.da & 1) && (this.Uf = this.Uf + 1 & 1);
            for (var b = a.f, c = a.$, d = 0, e = a.$ * a.da; d < e;) {
                var f = d++,
                    g = f;
                var h = b[f];
                var l = f % c,
                    y = f / c |
                    0;
                0 == h || 0 == this.Uh && (y & 1) == this.Uf && l > a.$ - 1 || (this.Ck++, f = new Mb(this), f.code = h, f.Ab = l, f.Vb = this.If - y, f.jl(), this.xa.Ts(f), l = this.Kb, l.i == l.C && l.R(), l.f[l.i++] = f, f.ya = new xd(f), this.Pb.Ys(f.ya), this.cE(f));
                b[g] = h
            }
            c = this.Kb;
            a = c.f;
            b = 0;
            for (c = c.i; b < c;) d = b++, this.Tz(a[d]);
            this.os();
            for (a = this.xa.iterator(); a.aa();) {
                b = a.next();
                for (c = this.list; null != c;) this.next = c.next, this.current = c.Wa, c.Wa.PC(b), c = this.next;
                this.current = this.next = null
            }
        },
        Tz: function(a) {
            if (null != a && 0 != a.code) {
                a.K |= 64;
                var b = this.To(a);
                for (a =
                    a.ya; b.cursor < b.size;) {
                    var c = b.list[b.cursor++];
                    null != c && 0 != c.code && (c = c.ya, null != a.fu(c) && null != c.fu(a) || this.Pb.Ws(a, c))
                }
            }
        },
        cE: function(a) {
            a.Mc(new kc);
            a.Ng = U.Ue.Ng;
            a.ze = U.Ue.ze
        },
        os: function() {
            for (var a = this.Kb.iterator(); a.aa();) {
                var b = a.next();
                0 < (b.K & 64) && this.Dx(b)
            }
        },
        Dx: function(a) {
            a.K &= -257;
            if (null != a.ya) {
                for (var b = 0, c = a.ya.za; null != c;) ++b, c = c.next;
                if (6 == b) a.K |= 256;
                else {
                    c = a.Ab;
                    var d = a.Vb,
                        e = d == this.If;
                    if (this.EA)
                        if (e && 4 == b) a.K |= 256;
                        else {
                            var f = 1 == this.Uf ? 0 : 1,
                                g = this.cols - 1;
                            if (0 == this.Uh) {
                                if (0 ==
                                    c || c == g - (d + 1 & 1)) e ? b == 2 + f && (a.K |= 256) : 1 == (d & 1) ? b == 5 - 2 * f && (a.K |= 256) : b == 3 + 2 * f && (a.K |= 256)
                            } else 0 == c ? e ? b == 2 + f && (a.K |= 256) : 1 == (d & 1) ? b == 5 - 2 * f && (a.K |= 256) : b == 3 + 2 * f && (a.K |= 256) : c == g && (e ? b == 3 - f && (a.K |= 256) : 1 == (d & 1) ? b == 3 + 2 * f && (a.K |= 256) : b == 5 - 2 * f && (a.K |= 256))
                        }
                }
            }
        },
        Mw: function(a) {
            var b = this.ha.p,
                c = this.ha.d,
                d = c.b,
                e = c.a,
                f = this.jj;
            f.b = a.b;
            f.a = a.a;
            this.QD(f);
            c.b = f.b - b.b;
            c.a = f.a - b.a;
            .25 > Cb.normalize(c) ? (c.b = d, c.a = e) : (a = U.BC, b = 57.29577951308232 * Math.atan2(c.a, c.b), d = 1, U.rx ? 0 <= b ? (d = -1, b < 90 - a ? b = 90 - a : b > 180 - (90 - a) && (b =
                180 - (90 - a))) : b > -90 + a ? b = -90 + a : b < -90 - a && (b = -90 - a) : 0 > b ? b > -90 + a ? b = -90 + a : b < -90 - a && (b = -90 - a) : 90 > b ? b = -90 + a : 270 > b && (b = -90 - a), c.b = Math.cos(.0174532925199432 * b) * d, c.a = Math.sin(.0174532925199432 * b) * d)
        },
        To: function(a) {
            var b = new gg(this.xa, this.cols, this.Uf);
            null != a && b.ua(a.Ab, a.Vb);
            return b
        },
        Sz: function(a, b) {
            a.K |= 64;
            if (null == b) {
                a.Ab = a.position.b / 2 | 0;
                a.Vb = this.If;
                b = 2 * a.Ab + 1;
                if (null != this.xa.get(a.Ab, a.Vb))
                    if (a.position.b < b) {
                        if (0 == a.Ab) throw 0;
                        a.Ab--
                    } else if (a.position.b > b) {
                    if (a.Ab == this.cols - 1) throw 0;
                    a.Ab++
                }
                this.mi(a.Ab,
                    a.Vb, a.Ra.c)
            } else {
                b.jl();
                for (var c = b.ya.za, d; null != c;) d = c.node.ta, d.jl(), c = c.next;
                b = this.JA(new te(b.Ab, b.Vb), a.position);
                a.Ab = b.x;
                a.Vb = b.y;
                a.jl();
                b.y < this.vg && (this.vg = b.y)
            }
            this.xa.Ts(a);
            a.ya = new xd(a);
            this.Pb.Ys(a.ya);
            for (b = this.To(a); b.cursor < b.size;) c = b.list[b.cursor++], this.Pb.Ws(a.ya, c.ya);
            this.Ll = !0
        },
        JA: function(a, b) {
            var c = 20,
                d = new te(-1, -1),
                e = new x;
            e.b = 0;
            e.a = 0;
            var f = this.To();
            for (f.ua(a.x, a.y, !0); f.cursor < f.size;) {
                var g = f.list[f.cursor++];
                if (0 == g.code) {
                    a = g.Ab;
                    g = g.Vb;
                    this.mi(a, g, e);
                    var h = e.b -
                        b.b,
                        l = e.a - b.a;
                    h = h * h + l * l;
                    h < c && (c = h, d.x = a, d.y = g)
                }
            }
            return d
        },
        u: function() {
            kb.prototype.u.call(this);
            this.viewport.u();
            for (var a = this.Kb.iterator(); a.aa();) a.next().u();
            this.xa.u();
            this.Pb.u();
            this.Hg.u();
            this.ef.u();
            this.Nf.u();
            this.Lj.u();
            for (a = this.wh.iterator(); a.aa();) a.next().u();
            this.wh.u();
            this.Zr.u();
            this.Yr.u();
            this.jj = this.Yr = this.Zr = this.sk = this.ha = this.Du = this.Qp = this.wh = this.Ac = this.Lj = this.Uf = this.Uh = this.Nf = this.Eg = this.ef = this.Hg = this.Pb = this.xa = this.Kb = this.viewport = null
        },
        l: Zd
    });
    cf.g =
        "6";
    cf.Zb = !0;
    cf.prototype = {
        l: cf
    };
    Ec.g = "7";
    Ec.Zb = !0;
    Mb.g = "8";
    Mb.ga = [Fc, Ec];
    Mb.prototype = {
        D: function() {
            Mb.count--;
            if (0 < (this.K & 64)) {
                for (var a = this.ya.za; null != a;) this.o.Dx(a.node.ta), a = a.next;
                this.o.Vl(this)
            } - 1 != this.Ab && this.o.xa.vw(this);
            this.o.Kb.remove(this);
            this.Hd.u();
            this.Hd = null;
            this.client.Dq(this);
            this.client = null;
            a = this.o;
            for (var b = a.list; null != b;) a.next = b.next, a.current = b.Wa, b.Wa.Dq(this), b = a.next;
            a.next = null;
            this.Ra = this.position = this.mb = this.force = this.ya = this.o = a.current = null
        },
        Mc: function(a) {
            a.ua(this);
            a.enabled = !0;
            var b = this.Hd;
            b.i == b.C && b.R();
            b.f[b.i++] = a
        },
        Sf: function(a, b) {
            return null != a ? this.Sf(null, this.Wj(a)) : this.Hd.remove(b)
        },
        Wj: function(a) {
            for (var b = this.Hd.f, c = 0, d = this.Hd.i; c < d;) {
                var e = c++;
                if (z.Xg(b[e], a)) return b[e]
            }
            return null
        },
        yA: function(a) {
            for (var b = this.Hd.f, c = 0, d = this.Hd.i; c < d;) {
                var e = c++;
                z.Xg(b[e], a) && (b[e].enabled = !0)
            }
        },
        iA: function(a) {
            for (var b = this.Hd.f, c = 0, d = this.Hd.i; c < d;) {
                var e = c++;
                z.Xg(b[e], a) && (b[e].enabled = !1)
            }
        },
        lu: function(a) {
            this.o.mi(this.Ab, this.Vb, a)
        },
        jl: function() {
            this.lu(this.position)
        },
        Gl: function(a) {
            this.code = a
        },
        wu: function(a) {
            this.o.viewport.$r(this.Ra.c, a)
        },
        rr: function(a, b, c) {
            null == c && (c = -1);
            null == b && (b = -1);
            if (null == a || 0 < (a.K & 512) || 0 < (this.K & 512)) return !1;
            b = -1 == b ? this.Li : b;
            c = -1 == c ? a.Li : c;
            var d = this.position,
                e = a.position,
                f = d.b - e.b,
                g = d.a - e.a,
                h = f * f + g * g;
            a = this.Ra.r + a.Ra.r;
            return h < a * a ? (h = Math.sqrt(h), f /= h, g /= h, a = a - h + .01, h = 1 / (b + c), d.b += f * a * b * h, d.a += g * a * b * h, e.b -= f * a * c * h, e.a -= g * a * c * h, !0) : !1
        },
        SD: function(a) {
            if (!(0 < (this.K & 512))) {
                var b = this.Ra.r,
                    c = this.position;
                c = c.b * a.n.b + c.a * a.n.a -
                    a.d;
                c <= b && (b = b - c + .01, c = a.n.a, this.position.b += b * a.n.b, this.position.a += b * c)
            }
        },
        u: function() {
            this.Hd = this.ut = this.Ra = this.force = this.mb = this.position = this.ya = this.client = this.o = null
        },
        l: Mb
    };
    bf.g = "9";
    bf.Zb = !0;
    bf.prototype = {
        l: bf
    };
    Pe.g = "A";
    Pe.prototype = {
        test: function() {
            var a = this.ng.b - this.Ji.b,
                b = this.ng.a - this.Ji.a,
                c = this.Sp.b - this.ik.b,
                d = this.Sp.a - this.ik.a,
                e = this.tm + this.um,
                f = a * a + b * b - e * e;
            if (0 > f) return this.me = 0, !0;
            e = c * c + d * d;
            if (1E-6 > e) return !1;
            a = c * a + d * b;
            if (0 <= a) return !1;
            b = a * a - e * f;
            if (0 > b) return !1;
            this.me =
                (-a - Math.sqrt(b)) / e;
            return !0
        },
        l: Pe
    };
    Nb.g = "B";
    Nb.Zb = !0;
    Nb.ga = [Ec];
    Nb.prototype = {
        l: Nb
    };
    ig.g = "C";
    ig.Zb = !0;
    ig.ga = [Nb];
    W.g = "D";
    W.ga = [ig];
    W.prototype = {
        tw: function(a) {
            for (var b = this.f, c = b[a], d = --this.i; a < d;) b[a++] = b[a];
            return c
        },
        trim: function(a) {
            this.i = a;
            return this
        },
        sort: function(a, b, c, d) {
            null == d && (d = -1);
            null == c && (c = 0);
            null == b && (b = !1);
            if (1 < this.i)
                if (-1 == d && (d = this.i - c), null == a) b ? this.UB(c, d) : this.ar(c, d);
                else if (b) {
                b = this.f;
                for (var e = c + 1, f = c + d; e < f;) {
                    var g = e++;
                    for (d = b[g]; g > c;) {
                        var h = b[g - 1];
                        if (0 < a(h, d)) b[g] =
                            h, --g;
                        else break
                    }
                    b[g] = d
                }
            } else this.$q(c, d, a);
            return this
        },
        $q: function(a, b, c) {
            var d = a + b - 1,
                e = a,
                f = d,
                g = this.f;
            if (1 < b) {
                var h = a + (b >> 1);
                b = a + b - 1;
                var l = g[a];
                var y = g[h];
                var H = g[b];
                var p = c(l, H);
                h = 0 > p && 0 > c(l, y) ? 0 > c(y, H) ? h : b : 0 > c(y, l) && 0 > c(y, H) ? 0 > p ? a : b : 0 > c(H, l) ? h : a;
                b = g[h];
                for (g[h] = g[a]; e < f;) {
                    for (; 0 > c(b, g[f]) && e < f;) --f;
                    f != e && (g[e] = g[f], ++e);
                    for (; 0 < c(b, g[e]) && e < f;) ++e;
                    f != e && (g[f] = g[e], --f)
                }
                g[e] = b;
                this.$q(a, e - a, c);
                this.$q(e + 1, d - e, c)
            }
        },
        ar: function(a, b) {
            var c = this.f,
                d = a + b - 1,
                e = a,
                f = d;
            if (1 < b) {
                var g = a + (b >> 1);
                b = a + b - 1;
                var h =
                    z.ba(c[a], Tb);
                var l = z.ba(c[g], Tb);
                var y = z.ba(c[b], Tb);
                var H = h.compare(y);
                g = 0 > H && 0 > h.compare(l) ? 0 > l.compare(y) ? g : b : 0 > l.compare(h) && 0 > l.compare(y) ? 0 > H ? a : b : 0 > y.compare(h) ? g : a;
                b = z.ba(c[g], Tb);
                for (c[g] = c[a]; e < f;) {
                    for (; 0 > b.compare(c[f]) && e < f;) --f;
                    f != e && (c[e] = c[f], ++e);
                    for (; 0 < b.compare(c[e]) && e < f;) ++e;
                    f != e && (c[f] = c[e], --f)
                }
                c[e] = b;
                this.ar(a, e - a);
                this.ar(e + 1, d - e)
            }
        },
        UB: function(a, b) {
            for (var c = this.f, d, e, f, g, h = a + 1, l = a + b; h < l;) {
                d = h++;
                b = c[d];
                for (f = z.ba(b, Tb); d > a;)
                    if (e = c[d - 1], g = z.ba(e, Tb), 0 < f.compare(g)) c[d] = e,
                        --d;
                    else break;
                c[d] = b
            }
        },
        Yc: function(a) {
            a > this.C && (this.C = a, this.Tf(a));
            return this
        },
        resize: function(a) {
            a < this.i ? (this.C = this.i = a, this.C < this.sg && (this.C = this.sg), this.Tf(this.C)) : (this.Yc(a), this.i = a);
            return this
        },
        ua: function(a, b) {
            this.Yc(a);
            this.i = a;
            for (var c = this.f, d = 0; d < a;) {
                var e = d++;
                c[e] = b
            }
            return this
        },
        of: function(a) {
            this.i = 0;
            this.Yc(a.i);
            ea.zb(a.f, 0, this.f, 0, a.i);
            this.i = a.i;
            return this
        },
        R: function() {
            this.C = wc.pi(this.Md, this.C);
            this.Tf(this.C)
        },
        Tf: function(a) {
            a = Array(a);
            ea.zb(this.f, 0, a, 0, this.i);
            this.f = a
        },
        u: function() {
            ea.Kf(this.f);
            this.f = null;
            null != this.Eb && (this.Eb.u(), this.Eb = null)
        },
        contains: function(a) {
            for (var b = this.f, c = 0, d = this.i; c < d;) {
                var e = c++;
                if (b[e] == a) return !0
            }
            return !1
        },
        remove: function(a) {
            if (this.Db()) return !1;
            for (var b = 0, c, d, e = this.i, f = this.f; b < e;)
                if (f[b] == a) {
                    for (c = b + 1; c < e;)
                        if (f[c] == a) ++c;
                        else break;
                    d = c - b;
                    e -= d;
                    for (d = b; d < e;) f[d] = f[c++], ++d
                } else ++b;
            a = 0 != this.i - e;
            this.i = e;
            return a
        },
        iterator: function() {
            if (this.Rd) {
                if (null == this.Eb) this.Eb = new Ad(this);
                else {
                    var a = this.Eb;
                    a.f = a.tb.f;
                    a.ub = a.tb.i;
                    a.Ja = 0
                }
                return this.Eb
            }
            return new Ad(this)
        },
        Db: function() {
            return 0 == this.i
        },
        l: W
    };
    lc.g = "E";
    lc.dF = function(a, b) {
        lc.Jb.i = 0;
        var c = a.Kb;
        a = c.f;
        var d = 0;
        for (c = c.i; d < c;) {
            var e = d++;
            e = a[e];
            if (0 < (e.K & 8) && 0 >= (e.K & 16) && 0 >= (e.K & 4)) {
                var f = lc.Jb;
                f.i == f.C && f.R();
                f.f[f.i++] = e
            }
        }
        c = lc.Jb;
        a = c.f;
        d = 0;
        e = c.i;
        for (f = e - 1; d < f;) {
            for (c = d + 1; c < e;) lc.test(a[d], a[c], b), ++c;
            ++d
        }
    };
    lc.test = function() {
        throw 0;
    };
    hg.g = "F";
    hg.prototype = {
        u: function() {
            for (var a = this.map.keys(); a.aa();) {
                var b = a.next();
                this.map.remove(b)
            }
            this.map = null
        },
        wa: function(a, b) {
            return null != this.map.G[b + 16777215 << 6 | a]
        },
        get: function(a, b) {
            return this.map.G[b + 16777215 << 6 | a]
        },
        Ts: function(a) {
            this.map.G[a.Vb + 16777215 << 6 | a.Ab] = a
        },
        vw: function(a) {
            this.map.remove(a.Vb + 16777215 << 6 | a.Ab);
            a.Ab = -1
        },
        iterator: function() {
            for (var a = [], b = this.map.keys(); b.aa();) {
                var c = b.next();
                a.push(this.map.G[c])
            }
            return F.ge(a)
        },
        l: hg
    };
    gg.g = "10";
    gg.prototype = {
        aa: function() {
            return this.cursor < this.size
        },
        next: function() {
            return this.list[this.cursor++]
        },
        ua: function(a, b, c) {
            null == c && (c = !1);
            this.cursor =
                this.size = 0;
            var d = this.cols,
                e = (b & 1) == this.ND ? 1 : 0,
                f = a + 1;
            if (0 <= f && f < d) {
                var g = this.xa.get(f, b);
                null != g ? this.list[this.size++] = g : c && (this.list[this.size++] = this.ri(f, b))
            }
            f = a + e;
            g = b + 1;
            if (0 <= f && f < d) {
                var h = this.xa.get(f, g);
                null != h ? this.list[this.size++] = h : c && (this.list[this.size++] = this.ri(f, g))
            }
            f = a - 1 + e;
            g = b + 1;
            0 <= f && f < d && (h = this.xa.get(f, g), null != h ? this.list[this.size++] = h : c && (this.list[this.size++] = this.ri(f, g)));
            f = a - 1;
            0 <= f && f < d && (g = this.xa.get(f, b), null != g ? this.list[this.size++] = g : c && (this.list[this.size++] =
                this.ri(f, b)));
            f = a - 1 + e;
            g = b - 1;
            0 <= f && f < d && (h = this.xa.get(f, g), null != h ? this.list[this.size++] = h : c && (this.list[this.size++] = this.ri(f, g)));
            a += e;
            --b;
            0 <= a && a < d && (d = this.xa.get(a, b), null != d ? this.list[this.size++] = d : c && (this.list[this.size++] = this.ri(a, b)));
            return this
        },
        ri: function(a, b) {
            var c = Object.create(Mb.prototype);
            c.code = 0;
            c.Ab = a;
            c.Vb = b;
            return c
        },
        l: gg
    };
    id.g = "11";
    id.bn = function(a, b, c) {
        var d = [];
        a = a.split("\n");
        for (var e = 0, f = a.length; e < f;) {
            var g = e++;
            g = (new Y("\\s+", "g")).split(a[g]);
            if (!(1 >= g.length)) {
                for (var h =
                        [], l = 0; l < g.length;) {
                    var y = g[l];
                    ++l;
                    null != G.parseInt(y) && h.push(G.parseInt(y))
                }
                d.push(h)
            }
        }
        a = d[0].length;
        e = d[1].length;
        a = (new Wc(a > e ? a : e, d.length)).Cw(0);
        e = 0;
        for (f = d.length; e < f;)
            for (g = e++, h = 0, l = d[g].length; h < l;) y = h++, a.f[g * a.$ + y] = d[g][y];
        b = new id(a.$, a.da, b, c);
        f = b.xa;
        c = f.f;
        d = f.$;
        e = 0;
        for (f = f.$ * f.da; e < f;) g = e++, c[g] = a.f[(g / d | 0) * a.$ + g % d];
        return b
    };
    id.prototype = {
        l: id
    };
    fg.g = "12";
    fg.prototype = {
        u: function() {
            this.bk.u();
            this.bk = null;
            this.ak.u();
            this.o = this.ak = null;
            this.set.u();
            this.set = null
        },
        $e: function() {
            return this.bk.next()
        },
        ou: function() {
            return this.ak.next()
        },
        ju: function(a) {
            for (var b = [], c, d, e, f = 0, g = a.i; f < g;)
                for (c = a.f[f++], d = 0, e = c.i; d < e;) b.push(c.f[d++]);
            return b
        },
        KA: function(a, b) {
            var c = new W;
            a = this.Zt(a, b);
            if (a.Db()) return c;
            for (var d = a.iterator(); d.Ja < d.ub;) {
                a = d.f[d.Ja++];
                for (var e = !1, f = a.iterator(); f.aa();) {
                    var g = f.next();
                    if (g.Vb == g.o.If) {
                        e = !0;
                        break
                    }
                }
                e ? d.remove() : this.aC(a) && (d.remove(), c.i == c.C && c.R(), c.f[c.i++] = a)
            }
            this.clearMarks();
            d.f = d.tb.f;
            d.ub = d.tb.i;
            for (d.Ja = 0; d.Ja < d.ub;) a = d.f[d.Ja++], this.bC(a) && d.remove();
            var h = this.$e();
            this.clearMarks();
            d.f = d.tb.f;
            d.ub = d.tb.i;
            for (d.Ja = 0; d.Ja < d.ub;) a = d.f[d.Ja++], this.o.Pb.Sl(!1, a.f[0].ya, function(a) {
                a = a.ta;
                h.i == h.C && h.R();
                h.f[h.i++] = a;
                return !0
            });
            for (b = this.Zt(h, b).iterator(); b.aa();) a = b.next(), c.i == c.C && c.R(), c.f[c.i++] = a;
            return c
        },
        bC: function(a) {
            this.clearMarks();
            var b = !1;
            this.o.Pb.Sl(!1, a.f[0].ya, function(a) {
                a = a.ta;
                return a.Vb == a.o.If ? (b = !0, !1) : !0
            });
            return b
        },
        aC: function(a) {
            this.clearMarks();
            this.pv(a);
            for (a = a.iterator(); a.aa();)
                for (var b = a.next().ya.za; null != b;)
                    if (b.node.ea) b =
                        b.next;
                    else return !1;
            return !0
        },
        Sm: function(a, b, c) {
            for (var d = a.ya.za; null != d;) {
                if (c(a, d.node.ta)) {
                    var e = d.node.ta;
                    b.i == b.C && b.R();
                    b.f[b.i++] = e
                }
                d = d.next
            }
            return b
        },
        yC: function(a, b, c) {
            this.clearMarks();
            this.o.Pb.Sl(!0, a.ya, function(d, e) {
                if (e) return c(d.ta, a);
                d = d.ta;
                b.i == b.C && b.R();
                b.f[b.i++] = d;
                return !0
            });
            return b
        },
        Zt: function(a, b) {
            var c = this.ou(),
                d = this.$e();
            d.Yc(32);
            this.clearMarks();
            a = a.iterator();
            for (var e; a.Ja < a.ub;)
                if (e = a.f[a.Ja++], null != e.ya && !e.ya.ea && (d.i = 0, this.o.Pb.Sl(!0, e.ya, function(a, c) {
                        if (c) return b(a.ta,
                            e);
                        a = a.ta;
                        d.i == d.C && d.R();
                        d.f[d.i++] = a;
                        return !0
                    }), 0 < d.i)) {
                    var f = this.$e().of(d);
                    c.i == c.C && c.R();
                    c.f[c.i++] = f;
                    d.i = 0
                }
            return c
        },
        kp: function(a, b) {
            this.clearMarks();
            this.pv(a);
            for (a = a.iterator(); a.Ja < a.ub;) a.f[a.Ja++].ya.ea = !0;
            this.set.clear();
            a.f = a.tb.f;
            a.ub = a.tb.i;
            a.Ja = 0;
            for (var c, d; a.Ja < a.ub;)
                for (c = a.f[a.Ja++].ya.za; null != c;) {
                    d = c.node;
                    if (!d.ea) {
                        var e = this.set,
                            f = d.ta.key,
                            g = 73856093 * f & e.Od,
                            h = e.f,
                            l = e.Uc[g];
                        if (-1 == l) e.i == e.C && (e.R(), h = e.f), l = 3 * e.vc, e.vc = e.ob[e.vc], e.Uc[g] = l, h[l] = f, h[l + 1] = 1, e.i++, e = !0;
                        else if (h[l] ==
                            f) e = !1;
                        else {
                            for (g = h[l + 2]; - 1 != g;) {
                                if (h[g] == f) {
                                    l = -1;
                                    break
                                }
                                l = g;
                                g = h[l + 2]
                            } - 1 == l ? e = !1 : (e.i == e.C && (e.R(), h = e.f), g = 3 * e.vc, e.vc = e.ob[e.vc], h[l + 2] = g, h[g] = f, h[g + 1] = 1, e.i++, e = !0)
                        }
                        e && (e = d.ta, b.i == b.C && b.R(), b.f[b.i++] = e);
                        d.ea = !0
                    }
                    c = c.next
                }
        },
        complete: function() {
            this.bk.qw();
            for (var a = this.bk.iterator(); a.Ja < a.ub;) {
                var b = a.f[a.Ja++],
                    c = !0;
                null == c && (c = !1);
                c && ea.Kf(b.f);
                b.i = 0
            }
            this.ak.qw();
            for (a = this.ak.iterator(); a.Ja < a.ub;) b = a.f[a.Ja++], c = !0, null == c && (c = !1), c && ea.Kf(b.f), b.i = 0
        },
        pv: function(a) {
            var b = a.f,
                c = 0;
            for (a = a.i; c <
                a;) {
                var d = c++;
                b[d].ya.ea = !0
            }
        },
        clearMarks: function() {
            this.o.Pb.clearMarks()
        },
        l: fg
    };
    af.g = "13";
    af.prototype = {
        u: function() {
            this.Qh.u();
            this.Wt = this.Qh = null
        },
        iterator: function() {
            return this.Qh.iterator()
        },
        next: function() {
            if (this.qs < this.size) return this.Qh.f[this.qs++];
            var a = this.Wt(),
                b = this.Qh;
            b.i == b.C && b.R();
            return b.f[b.i++] = a
        },
        qw: function() {
            this.qs = 0;
            this.size = this.Qh.i
        },
        l: af
    };
    $e.g = "14";
    $e.ga = [Fc];
    $e.prototype = {
        zt: function(a, b, c) {
            var d = this.Ru;
            this.ig = -1;
            this.Jl = null;
            for (var e = 0, f = this.kd.iterator(); f.Ja <
                f.ub;) {
                var g = f.f[f.Ja++];
                0 < (this.fD & 1 << e) && d.HA(a.c.b, a.c.a, a.r, b.b, b.a, g.n.b, g.n.a, g.d) && 0 < d.t && d.t < c && (c = d.t, this.Jl = g, this.ig = e);
                ++e
            }
            return c
        },
        pl: function() {
            var a = this.o.viewport,
                b = a.la,
                c = this.kd.f[3];
            c.n.b = 1;
            c.n.a = 0;
            c.d = 0;
            c = this.kd.f[1];
            var d = this.o.Fp();
            c.n.b = -1;
            c.n.a = 0;
            c.d = -1 * d;
            c = this.o.Gp();
            this.o.cq() || (c = a.uj(b.a));
            d = this.kd.f[0];
            d.n.b = 0;
            d.n.a = 1;
            d.d = c;
            a = a.uj(b.d);
            b = this.kd.f[2];
            b.n.b = 0;
            b.n.a = -1;
            b.d = -1 * a
        },
        u: function() {
            this.kd.u();
            this.o = this.Ru = this.kd = this.Jl = null
        },
        l: $e
    };
    Ze.g = "15";
    Ze.ga =
        [Fc];
    Ze.prototype = {
        reset: function() {
            this.Vj.i = 0;
            this.ni.i = 0
        },
        u: function() {
            this.Vj.u();
            this.ni.u();
            this.ni = this.Rq = this.Sq = this.Tj = this.Vj = null
        },
        l: Ze
    };
    Ye.g = "16";
    Ye.ga = [Fc];
    Ye.prototype = {
        jw: function(a, b, c) {
            this.result.Sq = null;
            this.result.Rq = null;
            this.result.Tj = null;
            this.result.Pq = -1;
            a = this.Xn.of(a);
            var d = this.Yn,
                e = d.c,
                f = a.p;
            e.b = f.b;
            e.a = f.a;
            d.r = b;
            this.test.Ki = a;
            this.test.Tp = b;
            e = this.result.Vj;
            e.i = 0;
            f = a.p.b;
            e.i == e.C && e.R();
            e.f[e.i++] = f;
            f = a.p.a;
            e.i == e.C && e.R();
            e.f[e.i++] = f;
            f = this.o.Nf;
            var g = 0;
            if (0 < (this.Rc &
                    8)) {
                var h = this.o.Kb;
                var l = h.f;
                var y = 0;
                for (h = h.i; y < h;) {
                    var H = y++;
                    l[H].K &= -33
                }
            }
            l = this.sn;
            y = this.o.Eg;
            l.b = y.b;
            l.a = y.a;
            l.c = y.c;
            l.d = y.d;
            l = this.sn;
            l.b -= b;
            l.a -= b;
            l.c += b;
            l.d += b;
            for (b = 0; b++ < c + 1;) {
                y = f.zt(d, a.d, Infinity);
                l = Infinity;
                h = this.kk.zh;
                h.b = a.p.b;
                h.a = a.p.a;
                h = this.kk.yh;
                h.b = a.d.b;
                h.a = a.d.a;
                this.kk.Mu = this.sn;
                if (this.kk.test() && (this.result.ni.i = 0, this.test.reset(), this.test.Up = 0 < (this.Rc & 8) && 1 == b, this.test.Nu = 0 < (this.Rc & 16), this.test.pe(), l = this.test.jn, this.test.Up))
                    for (h = this.test.bj.iterator(); h.aa();) {
                        H =
                            h.next();
                        var p = this.result.ni;
                        p.i == p.C && p.R();
                        p.f[p.i++] = H
                    }
                g += Math.min(y, l);
                if (y < l) {
                    this.result.Pq = f.ig;
                    a.p.b += a.d.b * y;
                    a.p.a += a.d.a * y;
                    l = a.p.b;
                    e.i == e.C && e.R();
                    e.f[e.i++] = l;
                    l = a.p.a;
                    e.i == e.C && e.R();
                    e.f[e.i++] = l;
                    if (2 == f.ig && 0 == (this.Rc & 2)) break;
                    if (0 == f.ig && 0 == (this.Rc & 1)) break;
                    l = d.c;
                    y = a.p;
                    l.b = y.b;
                    l.a = y.a;
                    Cb.rw(f.Jl.n, a.d)
                } else return this.result.Sq = this.test.ln, this.result.Rq = this.test.kn, this.result.Tj = this.test.cj, a.p.b += a.d.b * l, a.p.a += a.d.a * l, c = a.p.b, e.i == e.C && e.R(), e.f[e.i++] = c, c = a.p.a, e.i == e.C &&
                    e.R(), e.f[e.i++] = c, l
            }
            return g
        },
        u: function() {
            this.result.u();
            this.test.u();
            this.o = this.kk = this.sn = this.Yn = this.Xn = this.test = this.result = null
        },
        l: Ye
    };
    eg.g = "17";
    eg.prototype = {
        u: function() {
            this.kn = this.ln = this.cj = this.Ki = null;
            this.bj.u();
            this.mv = this.nv = this.kv = this.Yn = this.ov = this.bj = null
        },
        reset: function() {},
        pe: function() {
            this.jn = this.cw = Infinity;
            this.cj = null;
            this.bj.i = 0;
            var a = this.Ki.p.b,
                b = this.Ki.p.a,
                c = this.Ki.d.b,
                d = this.Ki.d.a,
                e = this.mv;
            e.Ji.b = a;
            e.Ji.a = b;
            e.ik.b = c;
            e.ik.a = d;
            var f = this.nv;
            f.zh.b = a;
            f.zh.a =
                b;
            f.yh.b = c;
            f.yh.a = d;
            f.sm = 1;
            for (var g = this.kv, h = 0, l = this.ov.Cp(g); h < l;) {
                var y = h++;
                y = g[y];
                if (null != y && !(!this.Nu && 0 < (y.K & 256) || 0 == 0 < (y.K & 64) || 0 < (y.K & 4))) {
                    var H = y.Ra;
                    if (this.Up && 0 >= (y.K & 32)) {
                        var p = H.r;
                        H.r *= 2;
                        f.rm.b = H.c.b;
                        f.rm.a = H.c.a;
                        f.Rp = H.r;
                        if (f.test()) {
                            y.K |= 32;
                            var q = this.bj;
                            q.i == q.C && q.R();
                            q.f[q.i++] = y
                        }
                        H.r = p
                    }
                    e.tm = this.Tp * U.xz;
                    e.ng.b = H.c.b;
                    e.ng.a = H.c.a;
                    e.um = H.r;
                    e.test() && (H = e.me, H >= this.cw || (this.cw = H, this.cj = y, this.ln.b = a + c * H, this.ln.a = b + d * H))
                }
            }
            null != this.cj && (f = this.cj.Ra, e.ng.b = f.c.b, e.ng.a = f.c.a,
                e.um = f.r, e.tm = this.Tp, e.test(), this.jn = e.me, this.kn.b = a + c * this.jn, this.kn.a = b + d * this.jn)
        },
        l: eg
    };
    Dc.g = "18";
    U.g = "19";
    Xe.g = "1A";
    Xe.ga = [Fc];
    Xe.prototype = {
        Sa: function() {
            var a = this.la,
                b = a.b,
                c = a.a,
                d = a.c;
            a = a.d;
            null == a && (a = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var e = new w;
            e.b = b;
            e.a = c;
            e.c = d;
            e.d = a;
            return e
        },
        Wb: function(a) {
            var b = a.b,
                c = a.a,
                d = a.c;
            a = a.d;
            null == a && (a = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var e = new w;
            e.b = b;
            e.a = c;
            e.c = d;
            e.d = a;
            this.la = e;
            this.zx();
            this.Pw(0)
        },
        TA: function() {
            var a =
                this.rs,
                b = this.we;
            a.b = b.b;
            a.a = b.a;
            return this.rs
        },
        Bn: function(a, b) {
            var c = this.Yl;
            c.b = a;
            c.a = b;
            this.zx()
        },
        Pw: function(a) {
            this.zoom = a;
            0 == a && this.CE(this.o.cols)
        },
        CE: function(a) {
            var b = this.la;
            this.zoom = (b.c - b.b) / (2 * (a + (1 == this.o.Uh ? .5 : 0)))
        },
        $r: function(a, b) {
            b.b = this.we.b + (a.b - this.o.ha.p.b) * this.zoom;
            b.a = this.we.a + (a.a - this.o.ha.p.a) * this.zoom
        },
        tj: function(a) {
            return this.we.b + (a - this.o.ha.p.b) * this.zoom
        },
        Zh: function(a) {
            return this.we.a + (a - this.o.ha.p.a) * this.zoom
        },
        qx: function(a) {
            return (a - this.we.b) / this.zoom +
                this.o.ha.p.b
        },
        uj: function(a) {
            return (a - this.we.a) / this.zoom + this.o.ha.p.a
        },
        $f: function(a) {
            a.b = (a.b - this.we.b) / this.zoom + this.o.ha.p.b;
            a.a = (a.a - this.we.a) / this.zoom + this.o.ha.p.a
        },
        UF: function(a) {
            this.$r(a, a);
            var b = this.la;
            a.b = (a.b - this.la.b) / (b.c - b.b);
            b = this.la;
            a.a = (a.a - this.la.a) / (b.d - b.a)
        },
        HC: function(a) {
            var b = this.la;
            a.b = this.la.b + a.b * (b.c - b.b);
            b = this.la;
            a.a = this.la.a + a.a * (b.d - b.a)
        },
        Vu: function(a) {
            var b = this.tj(a.c.b),
                c = this.Zh(a.c.a);
            a = a.r * this.zoom;
            var d = this.la;
            return 0 == (b + a < d.b || b - a > d.c || c +
                a < d.a || c - a > d.d)
        },
        zx: function() {
            var a = this.la;
            this.we.b = this.la.b + this.Yl.b * (a.c - a.b);
            a = this.la;
            this.we.a = this.la.a + this.Yl.a * (a.d - a.a)
        },
        u: function() {
            this.o = this.Yl = this.rs = this.we = this.la = null
        },
        l: Xe
    };
    T.g = "1B";
    T.prototype = {
        update: function() {},
        ua: function() {},
        af: function() {
            return 0
        },
        l: T
    };
    Yd.g = "1C";
    Yd.F = T;
    Yd.prototype = r(T.prototype, {
        af: function() {
            return 1
        },
        ua: function(a) {
            T.prototype.ua.call(this, a);
            a.Hi = U.Hi;
            a.ze = 0
        },
        update: function(a) {
            a.force.a += a.Hi
        },
        l: Yd
    });
    We.g = "1D";
    We.F = T;
    We.prototype = r(T.prototype, {
        af: function() {
            return 4
        },
        update: function(a) {
            var b = a.Pc,
                c = a.mb;
            c.b += a.force.b * b;
            c.a += a.force.a * b;
            0 < a.ze && (c.b *= 1 - a.ze, c.a *= 1 - a.ze);
            a.position.b += c.b * b;
            a.position.a += c.a * b;
            c = a.force;
            c.b = 0;
            c.a = 0;
            if (0 >= (a.K & 64) && 0 < (a.K & 1024) && (c = a.ut, null != c)) {
                var d = a.o.ha.p.b,
                    e = a.o.ha.p.a;
                a.position.b += d - c.b;
                a.position.a += e - c.a;
                c.b = d;
                c.a = e
            }
            0 != a.gi && (a.rotation += a.gi * b)
        },
        l: We
    });
    kc.g = "1E";
    kc.F = T;
    kc.prototype = r(T.prototype, {
        af: function() {
            return 1
        },
        ua: function(a) {
            a.lu(this.anchor)
        },
        update: function(a) {
            if (0 != a.Ng) {
                var b = a.position.b -
                    this.anchor.b,
                    c = a.position.a - this.anchor.a;
                1E-12 > b * b + c * c ? (a.position.b = this.anchor.b, a.position.a = this.anchor.a) : (a.force.b += -a.Ng * b, a.force.a += -a.Ng * c)
            }
        },
        l: kc
    });
    yg.g = "1F";
    Ve.g = "20";
    Ve.F = T;
    Ve.prototype = r(T.prototype, {
        ua: function(a) {
            T.prototype.ua.call(this, a);
            var b = a.o.ku(),
                c = a.position,
                d = b.p;
            c.b = d.b;
            c.a = d.a;
            a.mb.b = b.d.b * U.st;
            a.mb.a = b.d.a * U.st;
            b = a.force;
            b.b = 0;
            b.a = 0;
            a.K &= -65
        },
        update: function(a) {
            var b = a.o,
                c = b.Hg,
                d = b.Nf,
                e = a.position,
                f = a.mb;
            if (0 < (a.K & 128)) {
                var g = d.kd.f[0];
                this.RC(a, 0 > e.b * g.n.b + e.a * g.n.a -
                    g.d ? 0 : 2)
            } else {
                g = this.Xn;
                var h = g.p;
                h.b = e.b;
                h.a = e.a;
                g.d.b = f.b * a.Pc;
                g.d.a = f.a * a.Pc;
                c.Rc = 0;
                var l = a.o.cq() ? U.DF : U.EF;
                "bounce" == l && (c.Rc |= 1);
                var y = U.vz;
                "bounce" == y && (c.Rc |= 2);
                if (U.Cz || U.Eu) c.Rc |= 8;
                0 >= (a.K & 2) && (c.Rc |= 16);
                h = c.jw(g, a.Ra.r, 0);
                if (0 < (c.Rc & 8)) {
                    var H = c.result.ni;
                    if (0 < H.i) {
                        var p = H.f,
                            q = 0;
                        for (H = H.i; q < H;) {
                            var k = q++;
                            k = p[k];
                            0 >= (a.K & 512) && null != k && 0 >= (k.K & 512) && b.Aq(a, k)
                        }
                    }
                }
                if (-1 != c.result.Pq) {
                    if (!(1 <= h)) {
                        e.b += h * g.d.b;
                        e.a += h * g.d.a;
                        switch (d.ig) {
                            case 0:
                                switch (l) {
                                    case "none":
                                        return;
                                    case "stick":
                                        this.Mv(a,
                                            null);
                                        a.Pc = 0;
                                        return
                                }
                                break;
                            case 2:
                                if ("none" == y) return
                        }
                        Cb.rw(d.kd.f[d.ig].n, f);
                        b.zq(a, d.ig);
                        a.Pc = 0
                    }
                } else 0 < (a.K & 2) && null != c.result.Tj && (b = c.result.Tj, 1 > h && (e.b += h * g.d.b, e.a += h * g.d.a, a.Pc = 0, this.Mv(a, b)))
            }
        },
        Mv: function(a, b) {
            a.Sf(null, this);
            a.o.Hg.result.reset();
            a.o.Cq(a, b)
        },
        RC: function(a, b) {
            a.Sf(null, this);
            a.o.Hg.result.reset();
            a.o.Bq(a, b)
        },
        af: function() {
            return 3
        },
        l: Ve
    });
    Ab.g = "21";
    Ab.F = T;
    Ab.prototype = r(T.prototype, {
        ua: function(a) {
            this.Kw(a)
        },
        update: function(a) {
            this.Kw(a)
        },
        af: function() {
            return 2
        },
        Kw: function(a) {
            a.o.cm(a.position);
            a.position.b += this.Wd.b;
            a.position.a += this.Wd.a;
            a.scale = this.scale
        },
        l: Ab
    });
    dg.g = "22";
    dg.prototype = {
        apply: function(a, b) {
            this.On ? this.On = !1 : a.rr(b, 0, 1) && this.RD(b)
        },
        RD: function(a) {
            if (!(null == a || 0 >= (a.K & 64))) {
                var b = a.o;
                b.Pb.clearMarks();
                b.Pb.Lz();
                b.Pb.Ot(3, !1, a.ya, E(this, this.Uq))
            }
        },
        Uq: function(a) {
            if (a.parent == a) return !0;
            var b = a.parent.ta;
            a = a.ta;
            null != b && null != a && b.rr(a, 0, 1);
            return !0
        },
        l: dg
    };
    cg.g = "23";
    cg.prototype = {
        sD: function(a) {
            this.list.i = 0;
            a.o.Pb.clearMarks();
            a.o.Pb.Ot(U.Ue.wb, !1, a.ya, E(this, this.Uq),
                a)
        },
        apply: function(a, b, c) {
            if (this.On) this.list.i = 0, this.On = !1;
            else {
                this.Zw = U.Ue.KE;
                this.Zw || (a = a.position, a.b = b.b, a.a = b.a);
                this.direction = c;
                a = this.list;
                b = a.f;
                c = 0;
                for (a = a.i; c < a;) {
                    var d = c++,
                        e = b[d];
                    e.S.yA(kc);
                    d = (U.Ue.wb + 1 - e.depth) * U.Ue.uC;
                    e = e.S.mb;
                    e.b += this.direction.b * d;
                    e.a += this.direction.a * d
                }
                this.list.i = 0
            }
        },
        Uq: function(a, b, c) {
            if (this.Zw && a.ta == c) return !0;
            b = this.list;
            a = new bg(a.ta, a.depth);
            b.i == b.C && b.R();
            b.f[b.i++] = a;
            return !0
        },
        l: cg
    };
    bg.g = "24";
    bg.prototype = {
        l: bg
    };
    ag.g = "25";
    ag.prototype = {
        resize: function() {
            var a =
                window.document.getElementById("crashdialog"),
                b = this.Sa();
            a.style.width = b.c - b.b + "px";
            a.style.height = b.d - b.a + "px";
            a.style.left = b.b + "px";
            a.style.top = b.a + "px"
        },
        Sa: function() {
            var a = window.innerWidth,
                b = window.innerHeight;
            var c = .8 * a | 0;
            var d = .5 * b | 0;
            var e = c / 2,
                f = d / 1,
                g = new w;
            g.b = 1;
            g.a = 1;
            g.c = -1;
            g.d = -1;
            e <= f ? (g.b = 0, g.a = 0, g.c = g.b + c, g.d = g.a + (1 * e | 0)) : (e = g.c - g.b, g.b = 0, g.c = e, e = g.d - g.a, g.a = 0, g.d = e, g.c = g.b + (2 * f | 0), g.d = g.a + d);
            a = (a - (g.c - g.b)) / 2 | 0;
            f = g.c - g.b;
            g.b = a;
            g.c = a + f;
            c > d ? (b = g.d - g.a, g.a = 10, g.d = 10 + b) : (b = .3 * b | 0, c = g.d -
                g.a, g.a = b, g.d = b + c);
            return g
        },
        l: ag
    };
    ja.g = "26";
    ja.Au = function() {
        return v.ed
    };
    ja.gl = function(a) {
        v.ed = a;
        ka.X().lj(a ? 1 : 0);
        return a
    };
    ja.xv = function() {
        ja.Zj().lj(0)
    };
    ja.wx = function() {
        ja.Zj().lj(1)
    };
    ja.fw = function() {
        var a;
        null == a && (a = !0);
        if (ja.Au()) {
            var b = ja.Zj();
            b.Zu(255) && (a ? (b.Nd(255) || (ja.position > b.cd(255) - 5 && (ja.position = 0), a = b.play(255, !0, !0, ja.position), b.dl(a, 0)), b.Nd(256) ? b.Dt(256, 255, 2) : b.Yt(255, 2)) : (b.Nd(256) && b.stop(256), b.Nd(255) || (a = b.play(255, !0, !0), b.dl(a, 1))))
        }
    };
    ja.ew = function() {
        var a;
        null ==
            a && (a = !0);
        if (ja.Au()) {
            var b = ja.Zj();
            a ? (b.Nd(256) || (a = b.play(256, !0, !0), b.dl(a, 0)), b.Nd(255) ? (ja.position = b.sc(255), b.dl(256, 0), b.Dt(255, 256, 2)) : b.Yt(256, 2)) : (b.Nd(255) && b.stop(255), b.Nd(256) || (a = b.play(256, !0, !0), b.dl(a, 1)))
        }
    };
    ja.YE = function() {
        var a;
        null == a && (a = !0);
        var b = ja.Zj();
        b.Nd(256) && (a ? b.GA(256, 2) : b.stop(256))
    };
    ja.Zj = function() {
        return ka.X()
    };
    u.g = "27";
    u.gl = function(a) {
        v.se = a;
        ka.X().Jw(a ? 1 : 0);
        return a
    };
    u.play = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = !1);
        null == b && (b = !1);
        ka.X().play(a, b, c,
            d)
    };
    t.g = "28";
    t.F = C;
    t.prototype = r(C.prototype, {
        D: function() {
            C.prototype.D.call(this);
            this.o = this.v = null
        },
        ca: function() {
            C.prototype.ca.call(this);
            this.v = bb.X;
            this.o = this.v.o
        },
        l: t
    });
    Xd.g = "29";
    Xd.F = t;
    Xd.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            this.ui = this.v.Cc;
            this.Ml = Array(200);
            for (var a = [], b = 1; 8 > b;) {
                var c = b++;
                a.push("bubble_color" + c)
            }
            this.yf = a;
            this.group = new aa(null, this.v.ac(0));
            this.group.I(!1);
            this.Mg = [];
            for (a = 0; 10 > a;) b = a++, c = new B(this.group), c.Ka(200), c.bb(this.yf[this.ui -
                1]), c.ka(), c.Ha(), this.Mg[b] = c;
            $d.wm() && ba.X().Ma(E(this, this.Ub))
        },
        D: function() {
            t.prototype.D.call(this);
            ba.X().detach(E(this, this.Ub));
            for (var a = 0, b = this.Mg; a < b.length;) {
                var c = b[a];
                ++a;
                c.u()
            }
            this.group.u()
        },
        Ub: function(a) {
            switch (a.action.m) {
                case 0:
                    a = ba.X().Gi();
                    this.o.Mw(a);
                    this.qf = !0;
                    this.current = !1;
                    break;
                case 1:
                    this.qf = !1, this.group.I(!1), this.current = !1
            }
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            this.o.Hg.Rc = 0;
            this.o.Hg.jw(this.o.ku(this.xD), 1, 1);
            var b = this.o.Hg.result.Vj,
                c = b.i,
                d = (b.i >>
                    1) - 1;
            if (2 == d) {
                var e = b.f[2];
                var f = b.f[3];
                var g = b.f[4];
                var h = b.f[5];
                var l = g - e;
                var y = h - f;
                g = l * l + y * y;
                if (.010000000000000002 > g) c -= 2;
                else if (9 < g) {
                    var k = Math.sqrt(g);
                    b.f[4] = e + l / k * 3;
                    b.f[5] = f + y / k * 3
                }
            }
            var p = k = 0;
            e = b.f[p++];
            for (f = b.f[p++]; p < c;) g = b.f[p++], h = b.f[p++], l = g - e, y = h - f, k += Math.sqrt(l * l + y * y), e = g, f = h;
            this.shift += 3 * a;
            2 < this.shift && (this.shift -= 2);
            a = 0;
            this.Dk = Math.ceil(k / 2);
            for (var q, m, n = 0, v = this.Dk; n < v;) {
                var u = 2 * n++ + this.shift;
                m = 0;
                q = 1;
                c = e;
                p = f;
                e = b.f[m++];
                f = b.f[m++];
                g = b.f[m++];
                h = b.f[m++];
                l = g - e;
                y = h - f;
                k = Math.sqrt(l *
                    l + y * y);
                l /= k;
                y /= k;
                for (var P = !1;;)
                    if (u > k)
                        if (q == d) {
                            P = !0;
                            break
                        } else ++q, c = g, p = h, u -= k, e = g, f = h, g = b.f[m++], h = b.f[m++], l = g - e, y = h - f, k = Math.sqrt(l * l + y * y) + .1, l /= k, y /= k;
                else {
                    c = e + l * u;
                    p = f + y * u;
                    break
                }
                P || (this.Ml[a++] = c, this.Ml[a++] = p)
            }
            this.Dk = a >> 1;
            this.gr = this.current = !0
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            if (this.current)
                if (!this.v.Or || this.v.Nk() || 3 == this.v.state || this.v.Ee || this.v.Pi || 0 == this.v.Hb) this.group.I(!1);
                else {
                    this.group.I(!0);
                    a = this.v.Sc && 2 == this.v.state ? 1 : .5;
                    var b = this.o.qh(),
                        c = null != b && b.code !=
                        this.ui;
                    if (c) {
                        this.ui = b.code;
                        b = 0;
                        for (var d = this.Mg; b < d.length;) {
                            var e = d[b];
                            ++b;
                            e.bb(this.yf[this.ui - 1])
                        }
                    }
                    d = b = 0;
                    for (e = this.Dk; d < e;) {
                        var f = d++,
                            g = this.Mg[f];
                        null == g && (g = new B(this.group), g.Ka(200), g.bb(this.yf[this.ui - 1]), g.M(1), g.ka(), g.Ha(), this.Mg[f] = g);
                        g.na(a);
                        g.I(!0);
                        g.N(this.o.viewport.tj(this.Ml[b++]));
                        g.O(this.o.viewport.Zh(this.Ml[b++]));
                        g.M(.004285714285714285 * this.o.viewport.zoom);
                        c && g.bb(this.yf[this.ui - 1])
                    }
                    a = this.Dk;
                    for (c = this.Mg.length; a < c;) b = a++, this.Mg[b].I(!1)
                }
        },
        l: Xd
    });
    jc.g = "2A";
    jc.F =
        t;
    jc.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            this.canvas = new aa(null, this.v.ac(0));
            this.zw = new B(this.canvas, this.v.rc.md);
            this.resize()
        },
        D: function() {
            t.prototype.D.call(this);
            this.canvas.u()
        },
        handle: function(a) {
            27 == a.type && this.resize()
        },
        resize: function() {
            var a = this.v.Ec(),
                b = this.o.viewport.Sa(),
                c = this.zw.Ga(),
                d = this.zw.Aa();
            this.canvas.M(1);
            var e = a.b / c,
                f = (b.d - b.a) / d;
            this.dt = .7 > a.b / a.a;
            if (e < f) {
                c *= f;
                d = b.d - b.a;
                var g = -(c - a.b) / 2;
                b = b.d - d;
                this.canvas.M(f)
            } else c = a.b, g = 0, b = b.d -
                b.a - e * d, this.canvas.M(e);
            jc.nw && (jc.nw = !1, this.wt = da.wD());
            this.dt && (g += this.wt, 0 < g ? g = 0 : g < a.b - c && (g = a.b - c));
            this.canvas.N(g);
            this.canvas.O(b)
        },
        l: jc
    });
    Ue.g = "2B";
    Ue.F = t;
    Ue.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            if ("de" == xa.qk) switch (this.size) {
                case 1:
                    u.play(u.jy);
                    break;
                case 2:
                    u.play(u.ky);
                    break;
                case 3:
                    u.play(u.ly)
            }
            this.group = new aa(null, this.v.ac(3));
            this.B = new B(this.group, 204, "message_big_match_" + this.size);
            this.B.ka();
            this.B.Ha();
            var a = this.B.wp(),
                b = this.v.jb.Ei();
            a = (b.c -
                b.b) / a.b * .7;
            this.B.M(.1);
            this.B.na(0);
            this.B.gb().Lc(a, .5, L.hi(.2));
            this.B.gb().alpha(1, .5, L.mc(2));
            this.resize()
        },
        D: function() {
            t.prototype.D.call(this);
            this.group.u()
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            a = this.B;
            a.O(a.Ua - .5);
            1 < this.time && (this.qf = !1, this.B.gb().alpha(.5, .25, L.Rh(), null, E(this, this.D)))
        },
        handle: function(a) {
            t.prototype.handle.call(this, a);
            27 == a.type && this.resize()
        },
        resize: function() {
            var a = this.o.viewport.la;
            this.group.N(a.b + .5 * (a.c - a.b));
            this.group.O(a.a + .5 * (a.d - a.a))
        },
        l: Ue
    });
    Wd.g = "2C";
    Wd.F = t;
    Wd.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            this.dd = [new B(null, 200, "border"), new B(null, 200, "border")];
            this.resize()
        },
        D: function() {
            t.prototype.D.call(this);
            this.dd[0].u();
            this.dd[1].u()
        },
        handle: function(a) {
            27 == a.type && this.resize()
        },
        resize: function() {
            var a = this.v.Ec(),
                b = this.o.viewport.Sa();
            if (0 < b.b) {
                if (null == this.dd[0].Lb()) {
                    var c = this.v.ac(0);
                    c.appendChild(this.dd[0]);
                    c.appendChild(this.dd[1])
                }
                this.dd[0].N(b.b - this.dd[0].Ga());
                this.dd[0].re(a.a);
                this.dd[1].N(b.c + this.dd[1].Ga());
                this.dd[1].lf(-1);
                this.dd[1].re(a.a)
            } else null != this.dd[0].Lb() && (this.dd[0].remove(), this.dd[1].remove())
        },
        l: Wd
    });
    rb.g = "2D";
    rb.F = t;
    rb.prototype = r(t.prototype, {
        show: function() {
            this.active || (this.active = !0, this.Wr = da.hc(-5, 5), this.align(), u.play(this.EE[this.order]), this.state = 1)
        },
        nm: function() {
            this.active && (this.active = !1, this.state = 4)
        },
        cC: function() {
            return 0 == this.state
        },
        ek: function(a, b) {
            this.Ut = a;
            this.v.Ip(this.Le);
            b.Le = this.Le;
            a = D.time;
            if (.1 < a - this.nx) {
                var c = b.Cg;
                b.Cg = 4;
                this.v.Uo(b);
                b.Cg = c
            }
            this.nx = a;
            this.Iu = !0;
            2 == this.state && (this.state = 3)
        },
        ca: function() {
            t.prototype.ca.call(this);
            this.align();
            var a = this.zd,
                b = this.S.position;
            a.b = b.b;
            a.a = b.a;
            a = this.Of;
            b = this.zd;
            a.b = b.b;
            a.a = b.a;
            this.o.ws(this.xc)
        },
        update: function(a) {
            var b = this.o.viewport.zoom,
                c = this.o.viewport.TA(),
                d = this.viewport,
                e = this.viewport;
            e = (this.viewport.a + this.y * (e.d - e.a) - c.a) / b;
            this.target.b = this.o.ha.p.b + (this.viewport.b + this.x * (d.c - d.b) - c.b) / b;
            this.target.a = this.o.ha.p.a + e;
            e = (this.viewport.d - c.a) /
                b;
            this.anchor.a = this.o.ha.p.a + e;
            this.anchor.b = this.target.b - Math.tan(.0174532925199432 * this.Wr) * (this.anchor.a - this.target.a);
            t.prototype.update.call(this, a);
            a = this.Of;
            b = this.zd;
            a.b = b.b;
            a.a = b.a;
            a = this.zd;
            b = this.S.position;
            a.b = b.b;
            a.a = b.a;
            this.Iu = !1
        },
        ma: function(a) {
            var b = this.Of.b;
            this.xc.b = b + (this.zd.b - b) * a;
            b = this.Of.a;
            this.xc.a = b + (this.zd.a - b) * a;
            this.o.ws(this.xc);
            t.prototype.ma.call(this, a)
        },
        handle: function(a) {
            t.prototype.handle.call(this, a);
            27 == a.type && this.align()
        },
        align: function() {
            this.viewport =
                this.o.viewport.Sa()
        },
        l: rb
    });
    Te.g = "2E";
    Te.F = t;
    Te.prototype = r(t.prototype, {
        update: function(a) {
            t.prototype.update.call(this, a);
            var b = this.parent;
            if (this.$o != b.state) {
                switch (b.state) {
                    case 1:
                        this.lc.reset(.25);
                        this.ci = b.anchor.a;
                        this.Wg = b.target.a;
                        this.bh = 0;
                        this.rotation = da.hc(-10, 10);
                        break;
                    case 3:
                        var c = hb.map(Math.min(b.Ut, 10), 0, 10, .1, .3);
                        b.S.position.a += c;
                        this.ai = 0;
                        break;
                    case 4:
                        this.lc.reset(.75), this.ci = b.S.position.a, this.Wg = b.anchor.a, this.ai = 0
                }
                this.$o = b.state
            }
            switch (this.$o) {
                case 1:
                    this.ci = b.anchor.a;
                    this.Wg = b.target.a;
                    c = this.lc.update(a);
                    var d = this.ci;
                    b.S.position.a = d + (this.Wg - d) * this.xA(c);
                    this.bh += a * (1E3 * (b.Wr - this.rotation) - .9 * this.bh);
                    this.bh *= .9;
                    this.rotation += a * this.bh;
                    a = b.anchor.a - b.S.position.a;
                    b.S.position.b = b.anchor.b + Math.cos(.0174532925199432 * (this.rotation - 90)) * a;
                    b.S.position.a = b.anchor.a + Math.sin(.0174532925199432 * (this.rotation - 90)) * a;
                    a = this.bh;
                    if (0 < a ? .1 > a : .1 > -a) b.state = 2, a = b.S.position, c = b.target, a.b = c.b, a.a = c.a;
                    b.visible = !0;
                    break;
                case 0:
                case 2:
                    b.S.position.b = b.target.b;
                    b.S.position.a =
                        b.target.a;
                    break;
                case 3:
                    this.ai += -500 * (b.S.position.a - b.target.a) * a;
                    this.ai *= .9;
                    b.S.position.a += this.ai * a;
                    a = this.ai;
                    if (0 < a ? .01 > a : .01 > -a) b.state = 2, a = b.S.position, b = b.target, a.b = b.b, a.a = b.a;
                    break;
                case 4:
                    a = this.lc.update(a), c = this.ci, b.S.position.a = c + (this.Wg - c) * this.uA(a), 1 == a && (b.visible = !1, b.state = 0)
            }
        },
        l: Te
    });
    Se.g = "2F";
    Se.F = t;
    Se.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            var a = this.v.ac(0);
            this.Ud = new B(a, 200, "lollipop_stick" + (this.parent.order + 1));
            this.Ud.I(!1);
            this.mg = new B(a,
                200, "lollipop_glow");
            this.mg.I(!1);
            this.mg.ka();
            this.mg.Ha();
            this.xf = new B(a, 200, "lollipop_circle");
            this.xf.I(!1);
            this.xf.ka();
            this.xf.Ha();
            this.qz = this.xf.Ga() / 2;
            this.ce = new B(a, 200, "lollipop_circle");
            this.ce.I(!1);
            this.ce.ka();
            this.ce.Ha();
            this.ce.vh().add()
        },
        D: function() {
            t.prototype.D.call(this);
            this.mg.u();
            this.xf.u();
            this.Ud.u();
            this.ce.u()
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            this.parent.Iu && (this.ek = !0, this.ce.I(!0), this.$l = .6, this.Bi = .1);
            this.ek && (a = this.$l *= .95, 0 < a ? .01 > a : .01 >
                -a) && (this.$l = 0, this.ce.I(!1), this.ek = !1);
            0 < this.Bi && (a = this.Bi *= .95, 0 < a ? .01 > a : .01 > -a) && (this.Bi = 0)
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            a = this.parent;
            var b = a.S,
                c = this.o.viewport.tj(b.position.b),
                d = this.o.viewport.Zh(b.position.a),
                e = this.o.viewport.zoom,
                f = e / this.qz * a.scale * b.Ra.r,
                g = b.position.b - a.anchor.b,
                h = b.position.a - a.anchor.a;
            b = Math.sqrt(g * g + h * h) - b.Ra.r;
            this.xf.I(a.visible);
            this.xf.M(f);
            this.xf.N(c);
            this.xf.O(d);
            this.mg.I(a.visible);
            this.mg.M(1.2 * f + this.Bi);
            this.mg.N(c);
            this.mg.O(d);
            this.ek ?
                (this.ce.N(c), this.ce.O(d), this.ce.M(f), this.ce.na(this.$l)) : this.ce.I(!1);
            .5 > a.x && (f *= -1);
            this.Ud.M(1);
            this.Ud.Ar(this.Ud.U.b / 2);
            this.Ud.zr(this.Ud.U.b / 2);
            this.Ud.M(f);
            this.Ud.N(c);
            this.Ud.O(d);
            this.Ud.re(b * e + 1);
            this.Ud.Me(90 + 57.29577951308232 * Math.atan2(h, g));
            this.Ud.I(a.visible)
        },
        l: Se
    });
    Re.g = "30";
    Re.F = T;
    Re.prototype = r(T.prototype, {
        ua: function(a) {
            T.prototype.ua.call(this, a);
            this.v = z.ba(a.client, Ba).v;
            this.v.ff++;
            this.Jb = a.Wj(Ab);
            this.Jb.enabled = !1
        },
        update: function(a) {
            var b = this.lc.update(a.Pc),
                c = a.o.cm(),
                d = c.b + this.Jb.Wd.b;
            a.position.b = d + (c.b - d) * b;
            d = c.a + this.Jb.Wd.a;
            a.position.a = d + (c.a - d) * b;
            c = this.Jb.scale;
            a.scale = c + (1 - c) * b;
            a.Pc = 0;
            1 == b && (a.Sf(null, this), this.Jb.enabled = !0, this.Jb.Wd.b = 0, this.Jb.Wd.a = 0, this.Jb.scale = 1, this.v.ff--)
        },
        af: function() {
            return 2
        },
        l: Re
    });
    Qe.g = "31";
    Qe.F = T;
    Qe.prototype = r(T.prototype, {
        ua: function(a) {
            T.prototype.ua.call(this, a);
            this.v = z.ba(a.client, Ba).v;
            this.v.ff++;
            a.scale = .01
        },
        update: function(a) {
            var b = this.lc.update(a.Pc);
            a.scale = .1 + (a.scale - .1) * b;
            1 == b && (a.Sf(null,
                this), this.v.ff--)
        },
        af: function() {
            return 5
        },
        l: Qe
    });
    Vd.g = "32";
    Vd.F = T;
    Vd.prototype = r(T.prototype, {
        update: function(a) {
            var b = a.position,
                c = a.mb,
                d = this.IC,
                e = this.FC;
            e.b = c.b * a.Pc;
            e.a = c.a * a.Pc;
            var f = a.o.Nf,
                g = a.Ra;
            this.Ai += a.Pc;
            c = a.client;
            var h = c.v;
            if (0 < h.Lf)
                for (var l = 0, y = h.Ve; l < y.length;)
                    if (h = y[l], ++l, h.visible) {
                        var k = h.S,
                            p = this.Ef;
                        p.Ji.b = g.c.b;
                        p.Ji.a = g.c.a;
                        p.tm = g.r;
                        p = this.Ef;
                        var q = k.Ra;
                        p.ng.b = q.c.b;
                        p.ng.a = q.c.a;
                        p.um = q.r;
                        this.Ef.ik = e;
                        this.Ef.Sp = this.XF;
                        if (this.Ef.test() && 0 <= this.Ef.me && 1 > this.Ef.me) {
                            a.position.b +=
                                this.Ef.me * e.b;
                            a.position.a += this.Ef.me * e.a;
                            a.Pc = 0;
                            d.b = b.b - k.Ra.c.b;
                            d.a = b.a - k.Ra.c.a;
                            Cb.normalize(d);
                            e = Cb.wB(a.mb);
                            a.rr(k);
                            c.At(d, 1, 0);
                            if (.1 < this.Ai) switch (this.Ai = 0, h.order) {
                                case 0:
                                    u.play(u.qy);
                                    break;
                                case 1:
                                    u.play(u.ry);
                                    break;
                                case 2:
                                    u.play(u.sy);
                                    break;
                                case 3:
                                    u.play(u.ty)
                            }
                            h.ek(e, c);
                            return
                        }
                    }
            if (b.a - 2 * g.r > -f.kd.f[2].d) a.D();
            else if (d = f.zt(g, e, Infinity), !(0 >= d || 1 < d) && (b = f.Jl, f = f.ig, 0 != f)) {
                if (2 == f) {
                    this.Co++;
                    if (1 == this.Co && (.1 < this.Ai && (this.Ai = 0, u.play(u.Ns)), z.ba(c, Ba).yB(), f = a.code, 20 <= f && 30 > f || 10 ==
                            f || 30 == f)) {
                        a.D();
                        return
                    }
                    if (1 < this.Co) return
                }
                a.position.b += d * e.b;
                a.position.a += d * e.a;
                a.Pc = 0;
                c.At(b.n);
                a.SD(b)
            }
        },
        af: function() {
            return 3
        },
        l: Vd
    });
    Ud.g = "33";
    Ud.F = T;
    Ud.prototype = r(T.prototype, {
        ua: function(a) {
            T.prototype.ua.call(this, a);
            this.v = z.ba(a.client, Ba).v;
            this.v.ff++;
            this.v.qb(u.mo);
            this.offset = this.v.up();
            this.Ff = a.Wj(Ab);
            this.Ff.enabled = !1
        },
        update: function(a) {
            var b = this.Sj(this.lc.update(a.Pc)),
                c = a.o.ha.p.b,
                d = a.o.ha.p.a;
            if (1 == this.yv) a.position.b = c + (c + this.offset.b - c) * b, a.position.a = d + (d + this.offset.a -
                d) * b, a.scale = 1 + -.19999999999999996 * b, 1 == b && (this.Ff.Wd.b = this.offset.b, this.Ff.Wd.a = this.offset.a, this.Ff.scale = .8, this.Ff.enabled = !0);
            else if (0 == this.yv) {
                var e = c + this.offset.b;
                a.position.b = e + (c - e) * b;
                c = d + this.offset.a;
                a.position.a = c + (d - c) * b;
                a.scale = .8 + .19999999999999996 * b;
                1 == b && (this.Ff.Wd.b = 0, this.Ff.Wd.a = 0, this.Ff.scale = 1)
            }
            1 == b && (this.v.ff--, a.Sf(null, this), this.Ff.enabled = !0)
        },
        l: Ud
    });
    Oe.g = "34";
    Oe.F = T;
    Oe.prototype = r(T.prototype, {
        ua: function(a) {
            T.prototype.ua.call(this, a);
            a.Li = 1;
            a.Ra.r = .85;
            a.scale =
                1;
            a.ze = .01;
            a.fp = .7;
            a.Hi = 33;
            var b = da.hc(0, 8);
            .5 < Math.random() && (b = -b);
            a.mb.b = b;
            a.mb.a = da.hc(-40, -40);
            a.Mc(new Yd);
            a.Mc(new Vd);
            a = a.client;
            a.Le = 0;
            a.Cg = 2;
            this.v = a.v;
            this.v.qb(u.Ls)
        },
        l: Oe
    });
    Ne.g = "35";
    Ne.F = T;
    Ne.prototype = r(T.prototype, {
        ua: function(a) {
            T.prototype.ua.call(this, a);
            var b = a.client,
                c = b.v.Y(hc),
                d = a.position,
                e = d.a,
                f = new x;
            f.b = d.b;
            f.a = e;
            this.start = f;
            a.o.ws(this.start);
            a = c.im();
            c = a.U.a / 2;
            d = new x;
            d.b = a.U.b / 2;
            d.a = c;
            this.end = d;
            a.$f(this.end, this.end);
            b.j &= -2049
        },
        update: function(a) {
            var b = this.lc.update(a.Pc);
            if (1 <= this.lc.alpha) a.D();
            else {
                a.scale = .5 > b ? 1 + .5 * hb.map(b, 0, .5, 0, 1) : 1.5 + -1 * hb.map(b, .5, 1, 0, 1);
                .75 < b && (a.client.alpha = 1 + -1 * hb.map(b, .75, 1, 0, 1));
                b = this.Sj(b);
                var c = this.start.b,
                    d = this.start.a;
                d = a.o.viewport.uj(d + (this.end.a - d) * b);
                a.position.b = a.o.viewport.qx(c + (this.end.b - c) * b);
                a.position.a = d
            }
        },
        af: function() {
            return 2
        },
        l: Ne
    });
    $f.g = "36";
    $f.prototype = {
        l: $f
    };
    Zf.g = "37";
    Zf.prototype = {
        aa: function() {
            return this.ob < this.i
        },
        next: function() {
            return this.df[this.ob++]
        },
        ua: function(a) {
            this.ob = this.i = 0;
            var b = a.x;
            a = a.y;
            var c = a & 1,
                d = b + 1,
                e = this.he;
            0 <= d && d < e.$ && 0 <= a && a < e.da && (e = this.he, d = e.f[a * e.$ + d], this.df[this.i++] = d);
            d = b + c;
            e = a + 1;
            var f = this.he;
            0 <= d && d < f.$ && 0 <= e && e < f.da && (f = this.he, d = f.f[e * f.$ + d], this.df[this.i++] = d);
            d = b - 1 + c;
            e = a + 1;
            f = this.he;
            0 <= d && d < f.$ && 0 <= e && e < f.da && (f = this.he, d = f.f[e * f.$ + d], this.df[this.i++] = d);
            d = b - 1;
            e = this.he;
            0 <= d && d < e.$ && 0 <= a && a < e.da && (e = this.he, d = e.f[a * e.$ + d], this.df[this.i++] = d);
            d = b - 1 + c;
            e = a - 1;
            f = this.he;
            0 <= d && d < f.$ && 0 <= e && e < f.da && (f = this.he, d = f.f[e * f.$ + d], this.df[this.i++] = d);
            b += c;
            --a;
            c = this.he;
            0 <= b && b < c.$ && 0 <= a && a < c.da && (c = this.he, b = c.f[a * c.$ + b], this.df[this.i++] = b);
            return this
        },
        l: Zf
    };
    Ba.g = "38";
    Ba.ga = [bf];
    Ba.F = t;
    Ba.prototype = r(t.prototype, {
        Dq: function() {
            this.D()
        },
        UH: function() {},
        At: function(a, b, c) {
            null == c && (c = 0);
            null == b && (b = 1);
            var d = Math.min(this.S.fp, b);
            b = this.S.mb;
            var e = b.b * a.b + b.a * a.a;
            b = -(1 + d) * e * a.b * this.S.Li;
            a = -(1 + d) * e * a.a * this.S.Li;
            0 < c && (d = Math.sqrt(b * b + a * a), d < c && (b = b / d * c, a = a / d * c));
            this.S.mb.b += b;
            this.S.mb.a += a
        },
        update: function(a) {
            var b = this.Of,
                c = this.zd;
            b.b = c.b;
            b.a = c.a;
            b = this.zd;
            c = this.S.position;
            b.b = c.b;
            b.a = c.a;
            if (0 < (this.j & 1) && (this.Lg -= a, 0 >= this.Lg)) {
                this.j &= -4;
                this.Y(Ga).dx();
                this.S.iA(kc);
                switch (this.$w) {
                    case 1:
                        this.pop();
                        break;
                    case 2:
                        this.sA();
                        break;
                    case 3:
                        this.Oz();
                        break;
                    case 4:
                        this.nd()
                }
                this.v.Ip(this.Le);
                this.v.Uo(this);
                this.v.Kz(this.S.code)
            }
            0 < (this.j & 2) && (this.Wf -= a, 0 >= this.Wf && (this.j &= -3, this.Y(Ga).lD()));
            t.prototype.update.call(this, a)
        },
        ma: function(a) {
            this.visible = !0;
            0 < (this.j & 2048) && (this.visible = 0 >= (this.S.K & 128));
            var b = this.Of.b;
            this.xc.b = b + (this.zd.b -
                b) * a;
            b = this.Of.a;
            this.xc.a = b + (this.zd.a - b) * a;
            this.S.wu(this.xc);
            this.Aw = this.S.Ra.r * this.S.o.viewport.zoom;
            t.prototype.ma.call(this, a)
        },
        Wh: function(a, b) {
            this.$w = a;
            this.Le = b;
            this.j |= 1;
            this.j &= -3
        },
        FE: function(a) {
            this.j |= 2;
            this.Wf = a
        },
        Wo: function() {
            var a = this.Y(Kb);
            null == a && (a = new Kb, this.V(a), this.kl());
            a.Wo()
        },
        yB: function() {
            this.v.Ip(this.Le);
            this.v.Uo(this)
        },
        pop: function() {
            this.Cg = 1;
            this.V(new Lb);
            this.kl()
        },
        nd: function() {
            this.Cg = 1;
            this.V(new jb);
            this.kl()
        },
        sA: function() {
            this.Cg = 2;
            var a = this.S.force;
            a.b = 0;
            a.a = 0;
            a = da.hc(2, 4);
            .5 < Math.random() && (a = -a);
            this.S.mb.b = a;
            this.S.mb.a = da.hc(-2, -10);
            this.S.Ra.r = .85;
            this.S.ze = .01;
            this.S.fp = .7;
            this.S.Sf(kc);
            this.S.Mc(new Yd);
            this.S.Hi = 33;
            this.S.Mc(new Vd);
            a = this.S;
            a.ut = a.o.cm();
            a.TH = !0
        },
        Oz: function() {
            this.Cg = 3;
            var a = this.S.mb;
            a.b = 0;
            a.a = 0;
            a = this.S.force;
            a.b = 0;
            a.a = 0;
            this.Y(Ga).CC();
            this.S.Mc(new Ne);
            u.play(u.Gy)
        },
        kl: function() {
            zg.kl(this, E(this, this.cmp))
        },
        cmp: function(a, b) {
            return a.ne - b.ne
        },
        l: Ba
    });
    Ga.g = "39";
    Ga.Mb = function() {
        null == Ga.va && (Ga.va = [], Ga.va[0] =
            R.$b("bubble_shine", R.Ob("bubble_shine/", 0, 39), .016666666666666666), Ga.va[1] = R.$b("bubble_cloud", R.Ob("bubble_cloud_", 1, 51), .03333333333333333), Ga.va[2] = R.$b("bubble_cloud_reveal", R.Ob("bubble_cloud_reveal_", 1, 29), .03333333333333333), Ga.va[3] = R.$b("bubble_sparkle", R.Ob("bubble_sparkle/", 0, 108), .03333333333333333))
    };
    Ga.F = t;
    Ga.prototype = r(t.prototype, {
        CC: function() {
            this.B.remove();
            this.v.ac(2).appendChild(this.B)
        },
        lD: function() {
            var a = this;
            this.dx();
            this.Dd = new B(this.B.Lb());
            this.Dd.Ka(236, "bubble_shine/0017");
            this.Dd.ka();
            this.Dd.Ha();
            this.Dd.Za().play(Ga.va[0], !0, 0, function() {
                a.Dd.u();
                a.Dd = null
            });
            this.Dd.I(!1)
        },
        dx: function() {
            null != this.Dd && (this.Dd.u(), this.Dd = null)
        },
        ca: function() {
            t.prototype.ca.call(this);
            this.Pj = z.ba(this.parent, Ba).S.code;
            this.B = new B(null, 200, this.nu());
            this.B.ka();
            this.B.Ha();
            var a = this.Pj;
            40 <= a && 50 > a ? (this.Yb = new B(this.B.Lb(), 240, "bubble_cloud_0001"), this.Yb.ka(), this.Yb.Ha(), this.Yb.Za().play(Ga.va[1]).ow(), this.Lr = 1.5) : 50 <= this.Pj && (this.Yb = new B(this.B.Lb(), 234, "bubble_sparkle/0000"),
                this.Yb.ka(), this.Yb.Ha(), this.Yb.Za().play(Ga.va[3]).ow(), this.Lr = 2)
        },
        D: function() {
            t.prototype.D.call(this);
            this.B.u();
            this.B = null;
            null != this.Yb && (this.Yb.u(), this.Yb = null);
            null != this.Dd && (this.Dd.u(), this.Dd = null)
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            a = this.parent;
            var b = a.visible;
            b && !this.nz && (this.nz = !0, this.v.ac(1).appendChild(this.B), null != this.Yb && this.B.Lb().appendChild(this.Yb), this.B.I(!0), null != this.Yb && this.Yb.I(!0));
            this.B.I(b);
            null != this.Yb && this.Yb.I(b);
            if (b) {
                this.Pj != a.S.code &&
                    (b = this.Pj, 40 <= b && 50 > b ? (b = a.S.code, b = !(40 <= b && 50 > b)) : b = !1, b && this.kD(), this.Pj = a.S.code, this.B.bb(this.nu()));
                b = 2 * a.Aw / 140 * a.S.scale;
                var c = a.xc,
                    d = this.B;
                d.Me(a.S.rotation);
                d.M(b);
                d.na(a.alpha);
                d.N(c.b);
                d.O(c.a);
                d = this.Yb;
                null != d && (d.M(b * this.Lr), d.na(a.alpha), d.N(c.b), d.O(c.a), d.I(!0));
                d = this.Dd;
                null != d && (d.M(b), d.N(c.b), d.O(c.a), d.I(!0))
            }
        },
        kD: function() {
            var a = this;
            this.Yb.Za().play(Ga.va[2], null, null, function() {
                a.Yb.u();
                a.Yb = null
            });
            this.Yb.I(!1)
        },
        nu: function() {
            var a = z.ba(this.parent, Ba).S.code;
            if (8 <
                a)
                if (10 == a) a = "bubble_obstacle";
                else if (20 <= a && 30 > a) switch (20 <= a && 30 > a ? a - 20 : -1) {
                    case 0:
                        a = "bubble_breakable_1hp";
                        break;
                    case 1:
                        a = "bubble_breakable_1hp";
                        break;
                    case 2:
                        a = "bubble_breakable_2hp";
                        break;
                    case 3:
                        a = "bubble_breakable_3hp";
                        break;
                    default:
                        a = null
                } else if (30 == a) a = "bubble_lineblast";
                else if (40 <= a && 50 > a) a = "bubble_conceal";
            else if (50 <= a) switch (50 <= a ? a - 50 : -1) {
                case 1:
                    a = "bubble_collectible1";
                    break;
                case 2:
                    a = "bubble_collectible2";
                    break;
                case 3:
                    a = "bubble_collectible3";
                    break;
                default:
                    a = null
            } else a = null;
            else switch (a) {
                case 1:
                    a =
                        "bubble_color1";
                    break;
                case 2:
                    a = "bubble_color2";
                    break;
                case 3:
                    a = "bubble_color3";
                    break;
                case 4:
                    a = "bubble_color4";
                    break;
                case 5:
                    a = "bubble_color5";
                    break;
                case 6:
                    a = "bubble_color6";
                    break;
                case 7:
                    a = "bubble_color7";
                    break;
                default:
                    a = null
            }
            return a
        },
        l: Ga
    });
    Lb.g = "3A";
    Lb.Mb = function() {
        null == Lb.yb && (Lb.yb = R.$b("bubble_pop", R.Ob("bubble_pop/", 0, 65), .016666666666666666))
    };
    Lb.F = t;
    Lb.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            Lb.Mb();
            this.ne = 4;
            this.B = new B(this.v.ac(1));
            this.B.Ka(238);
            this.B.Za().play(Lb.yb,
                null, 0, E(this, this.xq));
            this.B.ka();
            this.B.Ha();
            this.B.Me(360 * Math.random());
            da.tn() && this.B.vh().add();
            this.scale = da.hc(2, 2.5);
            this.ma(1)
        },
        D: function() {
            t.prototype.D.call(this);
            this.B.u()
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            a = this.parent;
            this.B.M(.014285714285714285 * this.o.viewport.zoom * this.scale);
            this.B.N(a.xc.b);
            this.B.O(a.xc.a)
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            a = this.parent;
            a.alpha -= .1;
            0 >= a.alpha && (a.alpha = 0);
            a.S.scale -= .05;
            0 >= a.S.scale && (a.S.scale = 0)
        },
        xq: function() {
            z.ba(this.parent,
                Ba).S.D()
        },
        l: Lb
    });
    Kb.g = "3B";
    Kb.Mb = function() {
        null == Kb.yb && (Kb.yb = R.$b("cookie_debris", R.Ob("cookie_debris/", 0, 49), .016666666666666666))
    };
    Kb.F = t;
    Kb.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            Kb.Mb();
            this.ne = 4;
            this.B = new B(this.v.ac(1), 232, "cookie_debris/0001");
            this.B.ka();
            this.B.Ha();
            this.B.I(!1);
            this.ma(1)
        },
        Wo: function() {
            var a = z.ba(this.parent, Ba).S.code;
            this.Op = 20 <= a && 30 > a ? a - 20 : -1;
            switch (this.Op) {
                case 0:
                    u.play(u.Hy);
                    break;
                case 1:
                    u.play(u.Iy);
                    break;
                case 2:
                    u.play(u.Jy)
            }
            this.B.I(!0);
            this.B.Za().play(Kb.yb, null, 0, E(this, this.xq))
        },
        D: function() {
            t.prototype.D.call(this);
            this.B.u()
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            a = this.parent;
            this.B.M(.044642857142857144 * this.o.viewport.zoom);
            this.B.N(a.xc.b);
            this.B.O(a.xc.a)
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            a = this.parent;
            0 == this.Op && (a.alpha = Math.max(0, a.alpha - .1))
        },
        xq: function() {
            0 == this.Op ? z.ba(this.parent, Ba).S.D() : this.B.I(!1)
        },
        l: Kb
    });
    jb.g = "3C";
    jb.Mb = function() {
        if (null == jb.va) {
            jb.va = [];
            var a = "bubble_pop_blast",
                b = R.Ob("" + a + "/", 0, 33);
            jb.va[0] = R.$b(a, b, .016666666666666666);
            a = "lineblast_shockwave";
            b = R.Ob("" + a + "/", 0, 8);
            jb.va[1] = R.$b(a, b, .016666666666666666)
        }
    };
    jb.F = t;
    jb.prototype = r(t.prototype, {
        ca: function() {
            function a() {
                var a = new B(b.v.ac(1));
                a.Ka(230);
                a.Za().play(jb.va[1], null, 0);
                a.ka();
                a.Ha();
                return a
            }
            var b = this;
            t.prototype.ca.call(this);
            var c = this.parent,
                d = this.position,
                e = c.S.position;
            d.b = e.b;
            d.a = e.a;
            d = this.o.viewport.zoom;
            30 == c.S.code ? (u.play(u.Oy), this.v.Ec(), this.Ib[0] = a(), this.Ib[1] = a(), c = 5 * d / this.Ib[0].Aa(),
                this.Ib[0].M(c), this.Ib[1].lf(-c), this.Ib[1].mf(c)) : (this.nd = new B(this.v.ac(1)), this.nd.Ka(230), this.nd.Za().play(jb.va[0], null, 0, E(this, this.hd)), this.nd.ka(), this.nd.Ha(), 0 == (c.S.Ab & 1) && this.nd.vh().add(), c = 6 * d / this.nd.Aa(), this.nd.M(c));
            this.ma(1)
        },
        hd: function() {
            z.ba(this.parent, Ba).S.D()
        },
        D: function() {
            t.prototype.D.call(this);
            this.nd = this.Xf = this.Ib = null
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            a = this.parent;
            a.alpha -= .1;
            if (null == this.nd) {
                this.speed += .05;
                this.Ed += this.speed;
                a.alpha -=
                    .1;
                var b = this.o.viewport.Sa(),
                    c = this.o.viewport.tj(this.position.b);
                null != this.Ib[0] && (c - this.Ed < b.b && (this.Xf[0] *= .9), .01 > this.Xf[0] && (this.Ib[0].u(), this.Ib[0] = null));
                null != this.Ib[1] && (c + this.Ed > b.c && (this.Xf[1] *= .9), .01 > this.Xf[1] && (this.Ib[1].u(), this.Ib[1] = null));
                null == this.Ib[0] && null == this.Ib[1] && a.S.D()
            }
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            a = this.o.viewport.tj(this.position.b);
            var b = this.o.viewport.Zh(this.position.a);
            null != this.nd && (this.nd.N(a), this.nd.O(b));
            null != this.Ib[0] && (this.Ib[0].N(a -
                this.Ed), this.Ib[0].O(b), this.Ib[0].na(this.Xf[0]));
            null != this.Ib[1] && (this.Ib[1].N(a + this.Ed), this.Ib[1].O(b), this.Ib[1].na(this.Xf[1]))
        },
        l: jb
    });
    ic.g = "3D";
    ic.F = t;
    ic.prototype = r(t.prototype, {
        D: function() {
            this.v.detach(this);
            t.prototype.D.call(this)
        },
        ca: function() {
            t.prototype.ca.call(this);
            this.v.Ma(this)
        },
        EC: function(a) {
            this.hd = a;
            this.Nr = this.o.ha.p.a;
            this.Ed = 2 * this.o.Xz();
            this.lc.reset(1);
            this.$d = L.mc(2);
            this.state = 2;
            this.v.fe = !1
        },
        handle: function(a) {
            t.prototype.handle.call(this, a);
            switch (a.type) {
                case 6:
                    this.Ht =
                        7;
                    this.o.YD(this.Ht);
                    a = !this.o.cq();
                    this.o.zE();
                    this.v.fe = !0;
                    if (!a) break;
                    this.v.fe = !1;
                    this.state = 2;
                    this.bp();
                    this.$d = L.mc(2);
                    this.lc.reset(3);
                    this.o.Ow();
                    this.Ed = -(this.o.ha.p.a - this.Ht);
                    this.Nr = this.o.ha.p.a;
                    break;
                case 9:
                    0 == this.v.Ro() ? (this.v.detach(this), this.qf = !1, this.v.fe = !0) : (this.Nr = this.o.ha.p.a, a = this.o.PA() - 7, this.Ed = -a, 0 > a ? (this.$d = L.mc(5), this.lc.reset(.5), this.bp(), this.state = 2, this.v.fe = !1) : (a = this.Ed, (0 < a ? .001 > a : .001 > -a) ? 2 != this.state && (this.state = 0, this.v.fe = !0) : (this.Ed = this.Iz(this.Ed),
                        0 == this.Ed ? (this.state = 0, this.v.fe = !0, this.hp()) : (this.$d = L.iw(), this.lc.reset(2), 2 == this.state ? (this.$d = L.mc(3), this.v.fe = !1) : (this.state = 1, this.Xl = 0, this.Qx = .01 + this.v.lb.duration, this.v.fe = !1, this.bp())))))
            }
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            switch (this.state) {
                case 1:
                    this.Xl += a;
                    this.Xl >= this.Qx && (this.hp(), this.state = 2);
                    break;
                case 2:
                    a = this.lc.update(a);
                    var b = this.o.cm(this.PD);
                    this.o.bl(b.b, this.Nr + this.Ed * this.$d(a));
                    1 > a || (this.state = 0, this.v.fe = !0, 5 != this.v.state && this.v.Aj &&
                        this.hp(), null != this.hd && (this.hd(), this.hd = null))
            }
        },
        Iz: function(a) {
            var b = this.o.Gp() - this.o.viewport.uj(this.o.viewport.la.a);
            a < b && (a = b);
            return (0 < b ? .01 > b : .01 > -b) ? 0 : a
        },
        hp: function() {
            this.v.Aj = !1;
            5 != this.v.state && (this.v.Sc = !0)
        },
        bp: function() {
            this.v.Aj = !0;
            this.v.Sc = !1
        },
        l: ic
    });
    Td.g = "3E";
    Td.F = t;
    Td.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            for (var a = [], b = 1; 8 > b;) {
                var c = b++;
                a.push("bubble_glow_color" + c)
            }
            this.Bu = a;
            this.Bu.unshift(null);
            this.v.Ma(this);
            a = this.v.ac(0);
            this.Qe = new B(a);
            this.Qe.Ka(200);
            this.Qe.bb("cannon_bg");
            this.Qe.Ha();
            this.Qe.ka();
            this.Qe.vh().add();
            this.aF = this.Qe.Ga() / 2;
            this.qd = new B(a);
            this.qd.Ka(200);
            this.qd.bb("cloud_moves");
            this.qd.Ha();
            this.qd.ka();
            this.Nz = this.qd.Ga() / 2;
            this.Dc = new B(a);
            this.Dc.Ka(200);
            this.Dc.bb(this.em(1));
            this.Dc.Ha();
            this.Dc.ka();
            this.Dc.I(!1);
            this.Cu = this.Dc.Ga() / 2;
            this.Xc = new B(a);
            this.Xc.Ka(200);
            this.Xc.bb(this.em(1));
            this.Xc.Ha();
            this.Xc.ka();
            this.Xc.I(!1);
            this.xd = new Xa(a, 245);
            this.xd.BE(!0)
        },
        handle: function(a) {
            t.prototype.handle.call(this,
                a);
            27 == a.type && (this.Bl = !0)
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            this.Wm = 0 == this.v.ff && 0 == this.o.Bk ? this.Ql = 1 : this.Ql = 0;
            6 > this.fd && (1 < this.hh && (this.hh *= .97, 1 > this.hh && (this.hh = 1)), 0 < this.Yk ? (this.scale += .01, 1.3 < this.scale && (this.scale = 1.3, this.Yk *= -1)) : (this.scale -= .01, 1 > this.scale && (this.scale = 1, this.Yk *= -1)));
            0 == this.fd && (this.Mo *= .95, this.gi *= .98);
            this.rotation += this.gi
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            a = this.o.viewport.tj(this.o.ha.p.b);
            var b = this.o.viewport.Zh(this.o.ha.p.a),
                c = this.o.viewport.zoom;
            this.Qe.M(c / this.aF * 3);
            this.Qe.N(a);
            this.Qe.O(b);
            this.Qe.Me(this.rotation);
            var d = 1.8 * c;
            this.qd.M(1);
            this.qd.M(c / this.Nz * 1.75 * this.hh);
            this.qd.N(a + Math.sin(-1.0122909661567054) * d);
            this.qd.O(b + d + Math.cos(-1.0122909661567054) * d);
            this.qd.na(this.Mo);
            if (d = this.fd != this.v.Hb) G.La(this.fd).length != G.La(this.v.Hb).length && (this.Bl = !0), this.fd = this.v.Hb, 6 < this.fd && this.xd.M(1), 0 == this.fd ? this.xd.I(!1) : (this.xd.I(!0), this.xd.qa(G.La(this.fd))), 5 == this.fd && (this.qd.bb("cloud_moves_low"),
                this.hh = 1.2);
            if (this.Bl) {
                this.Bl = !1;
                var e = this.qd.Sa(this.qd.Lb());
                this.wv = e;
                this.xd.M(1);
                this.xd.el(e.c - e.b, e.d - e.a);
                this.xd.Ij(8, (e.c - e.b) * (99 < this.fd ? .45 : .6) | 0);
                this.xd.ka();
                this.xd.eb(e, 0, 0)
            }
            d && this.xd.eb(this.wv, 0, 0);
            0 < this.fd && 6 > this.fd ? this.xd.M(this.scale) : this.xd.M(1);
            if (-1 == this.v.Cc) this.Dc.I(!1);
            else {
                this.Zo != this.v.Cc && (this.Zo = this.v.Cc, this.Dc.bb(this.em(this.Zo)));
                this.Dc.M(c / this.Cu * 1.5);
                this.Dc.N(a);
                this.Dc.O(b);
                this.Dc.I(!0);
                0 == this.Ql ? this.Dc.na(0) : (d = this.Ql - this.Dc.Fe, (0 < d ? .01 >
                    d : .01 > -d) ? this.Dc.na(1) : (e = this.Dc, e.na(e.Fe + .2 * d)));
                if (this.Ak != this.v.Tb) {
                    this.Ak = this.v.Tb;
                    if (-1 == this.Ak) {
                        this.Xc.I(!1);
                        return
                    }
                    this.Xc.bb(this.em(this.Ak))
                } - 1 != this.Ak && (d = 1.85 * c, this.Xc.M(c / this.Cu * 1.5 * .8), this.Xc.N(a + Math.sin(1.4311699866353422) * d), this.Xc.O(b + d + Math.cos(1.4311699866353422) * d), this.Xc.I(!0), 0 == this.Wm ? this.Xc.na(0) : (a = this.Wm - this.Xc.Fe, (0 < a ? .01 > a : .01 > -a) ? this.Xc.na(1) : (b = this.Xc, b.na(b.Fe + .2 * a))))
            }
        },
        D: function() {
            this.v.detach(this);
            this.Qe.u();
            this.qd.u();
            this.Dc.u();
            this.Xc.u();
            this.xd.u();
            t.prototype.D.call(this)
        },
        em: function(a) {
            return this.Bu[a]
        },
        l: Td
    });
    Yf.g = "3F";
    Yf.prototype = {
        l: Yf
    };
    bb.g = "40";
    bb.ga = [cf];
    bb.F = Yb;
    bb.prototype = r(Yb.prototype, {
        D: function() {
            Yb.prototype.D.call(this)
        },
        ua: function(a) {
            this.canvas = a;
            this.tk = -1;
            this.jb = new Fa(this);
            new aa("layer0", a);
            new aa("layer1", a);
            new aa("layer2", a);
            new aa("layer3", a);
            Ya.X().Ma(E(this, this.UC))
        },
        resume: function() {
            5 != this.state && (this.state = 2, this.Or = !0)
        },
        jk: function(a) {
            -1 != this.tk && I.Fc(this.tk) != I.Fc(a) && (new Sd(this.tk)).release();
            this.rc = new Sd(a);
            this.rc.ez();
            this.tk != a ? this.Cv = 0 : this.Cv++;
            this.tk = a;
            this.random = new Uc(this.Zk + a);
            this.level = a;
            v.save();
            this.Zl = this.state = this.Je = this.Oo = this.Sd = this.time = this.ff = 0;
            this.Sc = this.Pi = this.Ee = !1;
            this.Ld = 0;
            this.sj = this.qn = this.on = !1;
            this.ej = -1;
            this.Lf = this.xg = 0;
            this.Cm = -1;
            this.oi = 0;
            this.Aj = this.fe = !1;
            this.sf.i = 0;
            var b = ta.getData(a),
                c = b.Gb.jb;
            if (!c.jq) {
                var d = b.xa.da,
                    e = new Wf;
                e.mz(b.xa, c.yf, c.Qr, d);
                c.hn && e.hn(b.xa, c.fx, c.Qr, c.jq)
            }
            if (null != this.ii) {
                this.ii.D();
                this.Sk.D();
                this.Y(ic).D();
                this.Y(jc).D();
                this.Y(hc).D();
                this.Y(Td).D();
                c = 0;
                for (d = this.Ve; c < d.length;) e = d[c], ++c, e.D();
                this.Ve = null;
                this.Y(Qd).D();
                this.Y(la).D();
                this.Y(qb).D();
                this.Y(Wd).D();
                this.Y(Xd).D();
                this.Y(Nd).D();
                this.Y(hd).D()
            }
            this.ii = new C;
            this.ii.name = "bubbles";
            this.V(this.ii);
            this.Sk = new C;
            this.Sk.name = "points";
            this.V(this.Sk);
            this.Xk = [];
            this.Hn(b);
            this.Tw();
            this.Jx();
            this.Cc = this.WA();
            this.Tb = this.Fi();
            if ("play_bubble_swap" == this.td.Gb.sl)
                for (b = 0; this.Tb == this.Cc && 100 > b;) this.Tb = this.Fi(), ++b;
            this.o.Im(this.Cc);
            this.o.Im(this.Tb);
            this.V(new ic);
            this.V(new jc);
            this.V(new hc);
            this.V(new Td);
            this.cD();
            this.V(new Qd);
            this.V(new la);
            this.V(new qb);
            this.V(new Wd);
            this.V(new Xd);
            this.V(new Nd);
            this.V(new hd);
            this.canvas.node.cg();
            this.jc(27);
            this.jc(6);
            this.Y(ic).qf = !1;
            this.o.update(D.Kt);
            this.state = 1;
            Zb.GF(Zb.Mk().iE(a).lE(this.Hb).rE(this.Cv))
        },
        Uw: function() {
            this.Y(ic).qf = !0
        },
        IB: function() {
            this.state = 4;
            this.hj = 0
        },
        ac: function(a) {
            return this.canvas.de("layer" + a)
        },
        Nk: function() {
            var a = ba.X(),
                b = this.o.ha.p.b - this.o.viewport.qx(a.Gi().b);
            a = this.o.ha.p.a - this.o.viewport.uj(a.Gi().a) + 1;
            return 12.25 > b * b + a * a
        },
        qb: function(a) {
            u.play(a)
        },
        Ec: function() {
            var a = M.ra.window.sd(),
                b = a.a,
                c = new x;
            c.b = a.b;
            c.a = b;
            return c
        },
        Uo: function(a) {
            if (!(0 < (a.S.K & 128))) {
                var b = 0 == this.Xk.length ? new Xb : this.Xk.pop();
                b.XD(a);
                this.Sk.V(b)
            }
        },
        MD: function(a) {
            50 < this.Xk.length ? a.D() : (this.Sk.removeChild(a), this.Xk.push(a))
        },
        up: function() {
            var a = 1.85 * Math.cos(1.4311699866353422) + 1.85,
                b = new x;
            b.b = 1.85 * Math.sin(1.4311699866353422);
            b.a = a;
            return b
        },
        Ip: function(a) {
            this.Sd += a;
            V.qC(this.Sd);
            this.jc(20);
            for (a = !0; a;) {
                a = !1;
                for (var b = 0; 3 > b;) {
                    var c = b++;
                    if (this.Je == c && this.Sd > this.Ad[c]) {
                        this.Je++;
                        a = !0;
                        switch (this.Je) {
                            case 1:
                                this.qb(u.Cy);
                                break;
                            case 2:
                                this.qb(u.Dy);
                                break;
                            case 3:
                                this.qb(u.Ey)
                        }
                        c = J.Fa(["numStarsEarned", this.Je]);
                        this.jc(16, c)
                    }
                }
            }
        },
        Ro: function() {
            for (var a = 0, b = this.o.Kb.iterator(); b.aa();) 0 < (b.next().K & 4) || ++a;
            return a
        },
        nB: function() {
            var a = 0;
            0 == this.Je ? a = .15 * hb.map(this.Sd, 0, this.Ad[0], 0, 1) : 1 == this.Je ? a = .15 + .6 * hb.map(this.Sd, this.Ad[0], this.Ad[1], 0, 1) : 2 == this.Je &&
                (a = .75 + .25 * hb.map(this.Sd, this.Ad[1], this.Ad[2], 0, 1));
            return Math.round(100 * Math.min(1, a))
        },
        kB: function() {
            return this.Y(hc).jB()
        },
        resize: function() {
            0 != this.state && (this.canvas.node.cg(), this.Tw(), this.Kj(27))
        },
        update: function(a) {
            var b = this;
            if (0 != this.state) switch (Yb.prototype.update.call(this, a), this.state) {
                case 1:
                    this.o.update(a);
                    break;
                case 2:
                    var c = ba.X().Gi();
                    this.o.Mw(c);
                    this.o.update(a);
                    !this.on || this.qn || this.Nk() || (this.qn = !0);
                    this.hF();
                    this.sj = !1; - 1 != this.ej && (this.ej += a, 3 < this.ej && (this.ej = -1, this.jc(25)));
                    break;
                case 4:
                    this.o.update(a);
                    a = this.Y(ic);
                    switch (this.hj) {
                        case 0:
                            for (a = 0; 4 > a;) c = a++, this.Ve[c].nm();
                            this.hj++;
                            break;
                        case 1:
                            for (c = a = 0; 4 > c;) {
                                var d = c++;
                                this.Ve[d].cC() && ++a
                            }
                            4 == a && this.hj++;
                            break;
                        case 2:
                            0 == this.xg && this.hj++;
                            break;
                        case 3:
                            this.hj++;
                            a.EC(function() {
                                b.hj++
                            });
                            break;
                        case 5:
                            this.state = 1, this.jc(19)
                    }
                    break;
                case 5:
                    switch (this.o.update(a), this.Ld) {
                        case 1:
                            0 == this.xg && (b.time = 0, b.Ld = 2);
                            break;
                        case 2:
                            this.fe && (this.Ee && 0 < this.o.Wz(function(a) {
                                    return 0 >= (a.K & 4)
                                }) ? (b.time = 0, b.Ld = 3) :
                                (this.Vw(), this.jc(13), b.time = 0, b.Ld = 5));
                            break;
                        case 3:
                            .5 < this.time && (this.qb(u.By), this.tA(), b.time = 0, b.Ld = 4);
                            break;
                        case 4:
                            .5 < this.time && (this.Vw(), b.time = 0, b.Ld = 5);
                            break;
                        case 5:
                            null == this.Y(Rd) && (this.pt = 0, 0 < this.Hb && this.Ee ? (b.time = 0, b.Ld = 6) : this.Ee ? (this.jc(26), b.time = 0, b.Ld = 8) : (this.zv(), b.time = 0, b.Ld = 9));
                            break;
                        case 6:
                            this.time > this.pt && (this.time = 0, this.pt = da.hc(.1, .3), this.wC(), 0 == this.Hb && (b.time = 0, b.Ld = 7));
                            break;
                        case 7:
                            a = !0;
                            for (c = this.o.Kb.iterator(); c.aa();)
                                if (0 >= (c.next().K & 64)) {
                                    a = !1;
                                    break
                                }
                            a &&
                                (this.jc(26), b.time = 0, b.Ld = 8);
                            break;
                        case 8:
                            2 < this.time && (this.zv(), b.time = 0, b.Ld = 9)
                    }
            }
        },
        ma: function(a) {
            Yb.prototype.ma.call(this, a)
        },
        Ub: function(a) {
            a.action == oa.i0 ? this.Sc && 2 == this.state && (0 < (a.hint & 8) ? this.js() : this.Oq() ? this.state = 3 : 0 < this.ff || (this.on = this.Nk(), this.qn = !1)) : a.action != oa.i1 || !this.Sc || 2 != this.state || 0 < (a.hint & 8) || 0 < this.ff || (this.on ? (this.on = !1, this.Nk() ? this.qn || this.js() : this.tx()) : this.Nk() || this.tx())
        },
        UC: function(a) {
            a.Zd && 32 == a.code && this.js()
        },
        zv: function() {
            var a = Zb.Mk().wE(this.Ee).sE(this.Sd).vE(this.Je).mE(this.Gv);
            if (this.Pi) {
                var b = {};
                b.failReason = "reach_score" == this.tc ? "notEnoughScore" : "outOfMoves";
                a.setData(JSON.stringify(b))
            }
            Zb.FF(a);
            this.Ee && ++this.level == ta.tq && (this.level = 1);
            this.jc(this.Ee ? 14 : 15)
        },
        hF: function() {
            var a = 0 == this.xg && 0 == this.o.Bk,
                b = this.sj ? this.Sd + this.lb.Bg : this.Sd,
                c = b >= this.Ad[0],
                d = !1;
            switch (this.tc) {
                case "clear_bubbles":
                    d = 0 == this.Ek;
                    break;
                case "free_targets":
                case "pop_bubbles":
                    if (this.sj) {
                        b = this.td.Gb.kc;
                        d = [];
                        0 < b.Tn && d.push(b.Re);
                        0 < b.Rr && d.push(b.Xh);
                        0 < b.Sr && d.push(b.ql);
                        b = this.Rf.slice();
                        if (null != this.lb.wj)
                            for (var e = 0; e < d.length;) {
                                var f = d[e];
                                ++e;
                                b[f] -= this.lb.wj[f]
                            }
                        for (e = d = 0; 60 > e;) f = e++, d += b[f];
                        d = 0 >= d
                    }
                    break;
                case "reach_score":
                    d = !0, c = b >= this.Ad[2]
            }!c && a && 0 == this.Ro() ? (this.Zl = 2, this.En(!1)) : d && c ? this.En(!0) : !d && a && 0 == this.Hb ? (this.Zl = 1, this.En(!1)) : "reach_score" == this.tc && !c && a && 0 == this.Hb && (this.Zl = 1, this.En(!1))
        },
        En: function(a) {
            a ? (this.jc(24), this.qb(u.lo), this.Ee = !0) : (this.Pi = !0, this.qb(u.My));
            this.Gv = this.Hb;
            this.Sc = !1;
            this.state = 5;
            this.Ld = 1;
            this.time = 0;
            this.jc(12);
            this.sj = !1
        },
        Hn: function(a) {
            this.td = a;
            a = this.td.Gb.kc;
            this.tc = a.tc;
            this.Fk = this.$m = this.Ek = 0;
            for (var b = [], c = 0; 60 > c;) c++, b.push(0);
            this.Rf = b;
            for (b = this.td.xa.iterator(); b.aa();) c = b.next().code, c != a.Re && c != a.Xh && c != a.ql || this.Rf[c]++, 0 < c && 8 > c && this.Fk++;
            if ("pop_bubbles" == a.tc) {
                b = this.Rf;
                c = a.Tn;
                var d = b[a.Re];
                b[a.Re] = c < d ? c : d;
                c = a.Rr;
                d = b[a.Xh];
                b[a.Xh] = c < d ? c : d;
                c = a.Sr;
                d = b[a.ql];
                b[a.ql] = c < d ? c : d
            }
            this.KC = this.Rf.slice();
            this.Jh = 0;
            if ("free_targets" == a.tc) {
                for (b = 50; 60 > b;) c = b++, this.Jh += this.KC[c];
                this.Kh = this.Jh
            } else "pop_bubbles" ==
                a.tc && (this.Kh = this.Jh = a.Tn);
            this.Ad = a.Ad.slice();
            this.Gv = this.Hb = a.fd;
            var e = this.td.xa;
            a = e.$;
            b = new id(a, e.da, 0, 1);
            c = e.f;
            d = e.$;
            var f = 0;
            for (e = e.$ * e.da; f < e;) {
                var g = f++,
                    h = c[g],
                    l = b.xa;
                l.f[(g / d | 0) * l.$ + g % d] = h.code;
                c[g] = h
            }
            c = b.xa.da - 1;
            for (d = !0; d;) {
                f = 0;
                for (e = a; f < e;)
                    if (g = f++, h = b.xa, 0 < h.f[c * h.$ + g]) {
                        d = !1;
                        break
                    }
                d && --c
            }
            b.xa.resize(b.xa.$, c + 1);
            null != this.o && (this.o.detach(this), this.o.u());
            this.o = new Zd;
            this.o.Ma(this);
            this.o.Hn(b)
        },
        WA: function() {
            var a = -1,
                b = this.o;
            for (b = b.If - b.vg + 1 - 1; 0 < b && -1 == a;) {
                for (var c = [], d,
                        e = 0, f = this.o.cols; e < f;) d = e++, d = this.o.xa.get(d, b), null != d && (8 < d.code || c.push(d.code));
                if (0 != c.length) {
                    if (1 != c.length) {
                        a = [];
                        e = 0;
                        for (f = c.length; e < f;) e++, a.push(this.random.Fg());
                        ug.HE(c, a)
                    }
                    a = c[0]
                }--b
            } - 1 == a && (a = this.td.Gb.jb.yf[0]);
            return a
        },
        Fi: function() {
            function a() {
                return Math.round(-.4999 + (c - 1 + .4999 - -.4999) * b.random.Fg())
            }
            var b = this,
                c = this.sf.i;
            if (0 == c) {
                var d = this.td.Gb.jb.yf;
                return d[Math.round(-.4999 + (d.length - 1 + .4999 - -.4999) * this.random.Fg())]
            }
            d = a();
            var e = this.sf.f[d];
            if (e == this.Cm) {
                if (this.oi++,
                    2 == this.oi)
                    if (1 == this.sf.i) this.oi++;
                    else {
                        if (2 == this.sf.i) e = this.sf.f[(d + 1) % 2];
                        else
                            for (d = 0; this.Cm == e && 1E3 > d++;) {
                                e = this.sf;
                                var f = a();
                                e = e.f[f]
                            }
                        this.oi = 0
                    }
            } else this.oi = 0;
            return this.Cm = e
        },
        Jx: function() {
            for (var a = this.sf.i = 0, b = this.o.Kb.iterator(); b.aa();) {
                var c = b.next();
                0 < (c.K & 128) || 0 < (c.K & 4) || 0 < (c.K & 8) || 0 < (z.ba(c.client, Ba).j & 1024) || 8 < c.code || (a |= 1 << c.code)
            }
            for (b = 0; 0 != a;) 1 == (a & 1) && (c = this.sf, c.i == c.C && c.R(), c.f[c.i++] = b), a >>= 1, ++b
        },
        ZE: function() {
            var a = this.Cc;
            this.Cc = this.Tb;
            this.Tb = a
        },
        js: function() {
            if (!this.Sc ||
                2 != this.state || 0 < this.ff || 1 >= this.Hb || -1 == this.Cc || this.Cc == this.Tb) return !1;
            this.ZE();
            this.qb(u.mo);
            this.jc(11);
            this.o.$E(0, 1);
            this.o.qh(0).Mc(new Ud(0));
            this.o.qh(1).Mc(new Ud(1));
            this.qb(u.mo);
            return !0
        },
        tx: function() {
            if (!this.Sc || 2 != this.state || 0 == this.Hb || this.sj || 0 == this.Ro() || !this.Or || -1 == this.Cc) return !1;
            this.Hb--;
            this.jc(8);
            u.play(u.Ls);
            this.o.GE();
            this.Sc = !1;
            this.ej = 0;
            5 == this.Hb && (this.jc(17), this.qb(u.Fy));
            return !0
        },
        cD: function() {
            if (0 != rb.count) {
                this.Ve = Array(rb.count);
                for (var a = 0, b = rb.count; a <
                    b;) {
                    var c = a++,
                        d = c,
                        e = rb.data[3 * c],
                        f = rb.data[3 * c + 1];
                    c = rb.data[3 * c + 2] | 0;
                    var g = new rb(d);
                    g.x = e;
                    g.y = f;
                    g.Le = c;
                    this.V(g);
                    this.Ve[d] = g
                }
                a = 0;
                for (b = this.Lf; a < b;) d = a++, this.Ve[d].show()
            }
        },
        fz: function(a) {
            Lb.Mb();
            Ga.Mb();
            jb.Mb();
            qb.Mb();
            la.Mb();
            zb.Mb();
            var b = M.ra;
            b.Qa([241, 240]);
            b.Qa([239, 238]);
            b.Qa([237, 236]);
            b.Qa([233, 232]);
            b.Qa([231, 230]);
            b.Qa([235, 234]);
            b.Qa([227, 226]);
            b.Qa([229, 228]);
            b.Qa([205, 204]);
            b.Da(245, 246);
            b.Da(243, 244);
            b.Qa([199, 198]);
            b.Qa([197, 196]);
            b.Qa([195, 194]);
            b.Qa([193, 192]);
            b.Qa([191, 190]);
            b.Da(203);
            b.Da(202);
            b.Qa([189, 188]);
            b.Qa([201, 200]);
            a()
        },
        PC: function(a) {
            var b = a.code;
            40 <= b && 50 > b ? b = !0 : (b = a.code, b = 0 < b && 8 > b);
            b && this.Ek++;
            a = new Ba(a);
            a.V(new Ga);
            this.ii.V(a)
        },
        Dq: function() {
            this.xg--
        },
        QC: function(a, b) {
            var c = new Ba(a);
            c.V(new Ga);
            this.ii.V(c);
            1 == b && (b = a.Wj(Ab), b.Wd = this.up(), b.scale = .8, b.update(a))
        },
        Aq: function() {},
        Cq: function(a, b) {
            this.Fk++;
            this.LE(a, b);
            this.sj = !0;
            this.o.trim();
            this.o.os();
            this.o.$n();
            this.reload();
            this.jc(9);
            this.Aj || (this.Sc = !0)
        },
        zq: function(a) {
            var b = ka.X();
            b.ur(b.play(u.vy, !1, !0, 0), 0 < a.mb.b ? -1 : 1)
        },
        Bq: function() {
            this.Aj || (this.Sc = !0);
            this.Hb++;
            this.qb(u.Ns)
        },
        LE: function(a, b) {
            function c(a) {
                z.ba(a.client, Ba).j |= 1024;
                var b = a.code;
                40 <= b && 50 > b ? b = !0 : (b = a.code, b = 0 < b && 8 > b);
                b && d.Ek--;
                0 < (a.K & 64) && a.o.Vl(a)
            }
            var d = this;
            this.Ek++;
            var e = this.Y(hd);
            e.Wh(a);
            a = e.sa;
            this.lb.duration = a.duration;
            this.$m += a.Gk;
            this.lb.Bg = 0;
            this.lb.vj = 0;
            this.lb.pC = 0 < a.uq;
            for (var f = 0; 60 > f;) {
                var g = f++;
                this.lb.wj[g] = 0
            }
            for (f = this.o.Kb.iterator(); f.aa();) {
                g = f.next();
                var h = g.client;
                var l = h.j;
                0 < (l & 1024) || (0 < (l &
                    32) ? (c(g), l = 1E3, h.Wh(3, l), this.xg++, this.lb.vj++, this.lb.Bg += l, this.lb.wj[g.code]++) : 0 < (l & 8) ? (c(g), l = 10 + 5 * this.Oo, l = 100 < l ? 100 : l, h.Wh(0 < (h.j & 512) ? 4 : 1, l), this.xg++, this.lb.vj++, this.lb.Bg += l, this.lb.wj[g.code]++) : 0 < (l & 16) ? (c(g), 0 < (h.j & 32) ? (l = 1E3, h.Wh(3, l)) : (l = 100, h.Wh(2, l)), this.xg++, this.lb.vj++, this.lb.Bg += l, this.lb.wj[g.code]++) : 0 < (l & 384) && (h.Wo(), 0 < (l & 256) && (c(g), this.xg++), h.j &= -385))
            }
            if (0 == a.$i && 0 == a.Xm) this.Oo = 0, 0 < this.Lf && (this.Lf--, this.Ve[this.Lf].nm(), this.qb(u.uy));
            else
                for (this.Oo++, f =
                    this.Lf + 1, g = this.Ve.length, this.Lf = f < g ? f : g, f = 0, g = this.Lf; f < g;) h = f++, this.Ve[h].show();
            null != b && 10 == b.code ? this.qb(da.tn() ? u.Ky : u.Ly) : e.sa.ol || this.qb(u.zy);
            if (0 < a.$i) {
                b = a.$i;
                var y = 15 <= b ? u.yy : 8 <= b ? u.xy : u.wy,
                    k = E(this, this.qb);
                sb.Xd(function() {
                    k(y)
                }, .1)
            }
            0 < a.Hv && this.qb(u.Py);
            b = 45 <= a.hf ? 3 : 35 <= a.hf ? 2 : 25 <= a.hf ? 1 : 0;
            this.lb.jt = b;
            0 < b && (this.V(new Ue(b)), this.jc(23));
            this.Aj || (this.Sc = !0)
        },
        Kz: function(a) {
            this.jc(21);
            if (0 != ("free_targets" == this.tc || "pop_bubbles" == this.tc)) {
                var b = this.td.Gb.kc;
                50 <= a ? this.Kh-- :
                    a == b.Re && (this.Kh--, 0 > this.Kh && (this.Kh = 0));
                var c = this.Rf[a];
                0 != c && (this.Rf[a] = c - 1, c = 0 + this.Rf[b.Re], c += this.Rf[b.Xh], c += this.Rf[b.Xh], 0 == c && this.qb(u.lo), this.jc(22, J.Fa(["code", a])))
            }
        },
        Tw: function() {
            var a = this.Ec(),
                b = 0,
                c = 0,
                d = a.b;
            a = a.a;
            null == a && (a = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var e = new w;
            e.b = b;
            e.a = c;
            e.c = d;
            e.d = a;
            this.jb.update(e, .7);
            this.o.tE(this.jb.Ei());
            this.o.Bn(.5, .8)
        },
        tA: function() {
            for (var a = [], b = 0, c = this.o.Cp(a); b < c;) {
                var d = b++;
                d = a[d];
                if (!(0 < (d.K & 16))) {
                    d = z.ba(d.client,
                        Ba);
                    d.j |= 16;
                    var e = d.S;
                    e.o.Vl(e);
                    d.S.K |= 4;
                    d.Wh(2, 100)
                }
            }
        },
        Vw: function() {
            this.V(new Rd)
        },
        Oq: function() {
            for (var a = 0, b = this.firstChild; null != b;) b = b.H, ++a;
            a = this.Y(hc);
            return null != a ? a.Oq() : !1
        },
        wC: function() {
            this.Hb--;
            var a = this.o.qh();
            this.o.Lt();
            a.Mc(new Oe);
            if (0 < this.Hb)
                if (this.Cc = this.Tb, a = this.o.qh(), a.Gl(this.Cc), a.Sf(Ab), a.position.b = this.o.ha.p.b, a.position.a = this.o.ha.p.a, a.scale = 1, 1 < this.Hb) {
                    this.Tb = this.Fi();
                    for (a = 0; this.Tb == this.Cc && !(this.Tb = this.Fi(), 100 < a++););
                    this.o.Im(this.Tb)
                } else this.Tb = -1;
            else this.Cc = -1
        },
        reload: function() {
            if (0 == this.Hb) this.Cc = -1;
            else {
                this.Jx();
                this.sf.contains(this.Tb) || (this.Tb = this.Fi(), this.o.qh().Gl(this.Tb));
                this.Cc = this.Tb;
                this.Tb = this.Fi();
                1 == this.Hb && (this.Tb = -1);
                if (0 < this.Hb) {
                    var a = this.o.qh();
                    a.Wj(Ab).Wd = this.up();
                    a.Mc(new Re)
                }
                1 < this.Hb && this.o.Im(this.Tb).Mc(new Qe)
            }
        },
        l: bb
    });
    Xf.g = "41";
    Xf.prototype = {
        l: Xf
    };
    Sd.g = "42";
    Sd.prototype = {
        ez: function() {
            var a = M.ra;
            a.Da(this.md);
            a.Da(this.km)
        },
        release: function() {
            var a = M.ra;
            a.bm(this.md);
            a.bm(this.km)
        },
        l: Sd
    };
    Rd.g =
        "43";
    Rd.F = t;
    Rd.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            this.group = new aa(null, this.v.ac(3));
            u.play(u.Ny);
            if (this.v.Ee) var a = "message_level_win";
            else switch (this.v.Zl) {
                case 1:
                    a = "message_level_fail_out_of_moves";
                    break;
                case 2:
                    a = "message_level_fail_not_enough_score"
            }
            this.B = new B(this.group, 204, a);
            this.B.ka();
            this.B.Ha();
            a = this.B.wp();
            var b = this.v.jb.Ei();
            a = (b.c - b.b) / a.b * .8;
            this.B.M(.2);
            this.B.na(0);
            this.B.gb().Lc(a, .6, L.hi(.2));
            this.B.gb().alpha(1, .6, L.mc(2));
            this.resize()
        },
        D: function() {
            t.prototype.D.call(this);
            this.group.u();
            this.group.u()
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            a = this.B;
            a.O(a.Ua - .5);
            3 < this.time && (this.B.gb().alpha(.5, .25, L.Rh(), null, E(this, this.D)), this.qf = !1)
        },
        handle: function(a) {
            t.prototype.handle.call(this, a);
            27 == a.type && this.resize()
        },
        resize: function() {
            var a = this.o.viewport.Sa();
            this.group.N(a.b + .5 * (a.c - a.b));
            this.group.O(a.a + .5 * (a.d - a.a))
        },
        l: Rd
    });
    Qd.g = "44";
    Qd.F = t;
    Qd.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            this.B = new B(this.v.ac(0), this.v.rc.km);
            this.resize()
        },
        D: function() {
            t.prototype.D.call(this);
            this.B.u()
        },
        handle: function(a) {
            27 == a.type && this.resize()
        },
        resize: function() {
            this.B.M(1);
            var a = this.o.viewport.zoom,
                b = this.o.viewport.Sa(),
                c = 4 * a / this.B.Aa();
            a = 4 * a / this.B.Aa();
            this.B.lf(c);
            this.B.mf(.9 * a);
            this.B.O(b.d - this.B.Aa() + 1);
            this.B.N(b.b + .5 * (b.c - b.b) - this.B.Ga() / 2)
        },
        l: Qd
    });
    hc.g = "45";
    hc.F = t;
    hc.prototype = r(t.prototype, {
        jB: function() {
            var a = this.pb,
                b = a.b,
                c = a.a,
                d = a.c;
            a = a.d;
            null == a && (a = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var e = new w;
            e.b = b;
            e.a = c;
            e.c = d;
            e.d = a;
            return e
        },
        im: function() {
            return this.ec.im()
        },
        Oq: function() {
            var a = ba.X().Gi(),
                b = this.pb,
                c = a.b;
            a = a.a;
            return c >= b.b && c <= b.c && a >= b.a ? a <= b.d : !1
        },
        ca: function() {
            t.prototype.ca.call(this);
            this.v.Ma(this)
        },
        D: function() {
            this.v.detach(this);
            this.ec.D();
            t.prototype.D.call(this)
        },
        handle: function(a) {
            switch (a.type) {
                case 16:
                    a = a.get("numStarsEarned") - 1;
                    a = this.ec.oB(a);
                    a.bb("ui_star_filled");
                    a.gb().Lc(.8, 1, L.Kd(.25));
                    this.V(new zb(a));
                    break;
                case 20:
                    this.ec.Gx();
                    break;
                case 21:
                case 22:
                    this.ec.Ax();
                    break;
                case 24:
                    this.V(new zb(this.ec.im()));
                    break;
                case 27:
                    this.resize()
            }
        },
        resize: function() {
            this.dz();
            this.v.jb.ym ? (null == this.ec || this.ec instanceof Pd || (this.ec.D(), this.ec = null), null == this.ec && this.V(this.ec = new Pd)) : (null == this.ec || this.ec instanceof Od || (this.ec.D(), this.ec = null), null == this.ec && this.V(this.ec = new Od));
            this.ec.resize();
            this.ec.Gx();
            this.ec.Ax()
        },
        dz: function() {
            var a = this.v.jb,
                b = a.jm(),
                c = a.zu(),
                d = this.v.Ec(),
                e = 1;
            $d.wm() && (e = 2);
            e = e / 2.54 * M.ra.window.Pf;
            this.pb.b = 0;
            this.pb.a = 0;
            this.pb.c =
                e;
            this.pb.d = e;
            e = this.pb;
            e = .25 * (e.c - e.b);
            if (a.ym) {
                b = this.pb;
                var f = b.c - b.b;
                b.b = e;
                b.c = e + f;
                f = b = this.pb;
                f = d.a - (f.d - f.a) - e;
                var g = b.d - b.a;
                b.a = f;
                b.d = f + g;
                null != c && (b = this.pb, c.d - c.a > 1.5 * (b.d - b.a) ? (b = this.pb, e = c.d - e, c = b.d - b.a, b.d = e, b.a = e - c) : (b = this.pb, c.d - c.a > (b.d - b.a) / 2 * 1.5 ? (e = this.pb, c = c.a, b = .5 * (e.d - e.a), e.a = c - b, e.d = c + b) : c.a > this.pb.a && (b = this.pb, e = c.a - e, c = b.d - b.a, b.d = e, b.a = e - c)));
                d = d.b - a.Ei().c;
                e = this.pb;
                d > 1.5 * (e.c - e.b) ? (e = this.pb, d = a.Ei().b - d / 2, a = .5 * (e.c - e.b), e.b = d - a, e.c = d + a) : (e = this.pb, d > (e.c - e.b) / 2 * 1.5 ?
                    (d = this.pb, a = a.Ei().b, e = .5 * (d.c - d.b), d.b = a - e, d.c = a + e) : (a = this.pb, d = a.b + d, e = a.c - a.b, a.b = d, a.c = d + e))
            } else c = a = this.pb, c = b.c - (c.c - c.b) / 1.5, b = .5 * (a.c - a.b), a.b = c - b, a.c = c + b, c = a = this.pb, d = d.a - (c.d - c.a) - e, e = a.d - a.a, a.a = d, a.d = d + e
        },
        l: hc
    });
    ib.g = "46";
    ib.F = t;
    ib.prototype = r(t.prototype, {
        resize: function() {
            throw 0;
        },
        oB: function(a) {
            return this.Vc[a]
        },
        im: function() {
            return this.Gf
        },
        Gx: function() {
            this.bc.qa(tc.lm(this.v.Sd));
            if (this.bc.br()) {
                this.bc.Bb();
                var a = this.bc.B.fa.size,
                    b = this.Sb.B.fa.size;
                this.Sb.nj(a < b ? a : b);
                this.Gj()
            }
            this.Fx();
            "reach_score" == this.v.tc && this.Sb.qa(Math.min(this.v.Sd / this.v.Ad[2] * 100 | 0, 100) + "%")
        },
        Ax: function() {
            "clear_bubbles" == this.v.tc && this.Sb.qa((0 == this.v.Fk ? 0 : this.v.$m / this.v.Fk * 100 | 0) + "%");
            if ("free_targets" == this.v.tc || "pop_bubbles" == this.v.tc) {
                var a = this.v.Jh;
                this.Sb.qa(a - this.v.Kh + "/" + a)
            }
            if (this.Sb.br()) {
                this.Sb.Bb();
                a = this.Sb.B.fa.size;
                var b = this.bc.B.fa.size;
                this.bc.nj(a < b ? a : b);
                this.Gj()
            }
        },
        D: function() {
            t.prototype.D.call(this);
            this.Ge.u();
            this.Vc = this.wk = this.Ge = null;
            this.bc.D();
            this.bc = null;
            this.Sb.D();
            this.Sb = null;
            this.Gf.u();
            this.Gf = null
        },
        Gj: function() {},
        Vs: function() {
            this.Gf = new B(this.Nb, 200, "ui_target_collect_color1")
        },
        Fx: function() {
            var a = this.Ge.Yj(1);
            if (3 == this.v.Je) a.bb(this.wk[99]);
            else {
                var b = this.v.nB();
                99 < b && (b = 99);
                a.bb(this.wk[b])
            }
        },
        Zs: function() {
            this.Ge = new aa("progress", this.Nb);
            var a = new B(this.Ge, 200, "progress");
            this.wk = [];
            for (var b = 0; 100 > b;) {
                var c = b++;
                this.wk[c] = "progress_bar/" + tc.jC(c)
            }
            new B(this.Ge, 228, this.wk[0]);
            this.Vc = [];
            for (b = 0; 3 > b;) c = b++, this.Vc[c] =
                new B(this.Ge, 200, "ui_star_empty"), this.Vc[c].Ha(), this.Vc[c].ka(), this.Vc[c].O(a.Aa() / 2 | 0), this.Vc[c].M(.6);
            this.Vc[0].N(.15 * a.Ga() | 0);
            this.Vc[1].N(.75 * a.Ga() | 0);
            this.Vc[2].N(.98 * a.Ga() | 0);
            a = 0;
            for (b = this.v.Je; a < b;) c = a++, this.Vc[c].bb("ui_star_filled"), this.Vc[c].M(.8);
            this.Fx()
        },
        pu: function() {
            switch (this.v.tc) {
                case "clear_bubbles":
                    return "ui_target_clear_all_bubbles";
                case "free_targets":
                    var a = this.v.td.Gb.kc.Re;
                    return "ui_target_free_collectible" + (50 <= a ? a - 50 : -1);
                case "pop_bubbles":
                    return "ui_target_collect_color" +
                        this.v.td.Gb.kc.Re;
                case "reach_score":
                    return "ui_target_reach_score"
            }
        },
        kw: function() {
            this.bc.qa(tc.lm(999999));
            this.bc.Bb();
            switch (this.v.tc) {
                case "free_targets":
                case "pop_bubbles":
                    var a = "000/000";
                    break;
                case "clear_bubbles":
                case "reach_score":
                    a = "100%";
                    break;
                default:
                    a = null
            }
            this.Sb.qa(a);
            this.Sb.Bb();
            a = this.bc.B.fa.size;
            var b = this.Sb.B.fa.size;
            a = a < b ? a : b;
            this.bc.nj(a);
            this.Sb.nj(a);
            this.Gj()
        },
        l: ib
    });
    Pd.g = "47";
    Pd.F = ib;
    Pd.prototype = r(ib.prototype, {
        resize: function() {
            this.Gf.bb(this.pu());
            var a = bb.X.jb,
                b =
                a.jm(),
                c = a.zu(),
                d = this.v.Ec();
            this.Jm.Ne(d.b);
            this.Jm.re(b.d - b.a);
            this.qg.I(!1);
            this.Hf.I(!1);
            null != c && (this.qg.I(!0), this.qg.Ne(d.b), this.qg.re(c.d - c.a), this.qg.O(c.a));
            this.Fh.M(1);
            b = (b.c - b.b) / this.Fh.Ga();
            this.Fh.Ne(d.b);
            this.Fh.re(this.Fh.Aa() * b);
            this.Fh.O(this.Jm.Aa() - 1);
            null != c && (this.Hf.I(!0), this.Hf.M(1), this.Hf.Ne(d.b), this.Hf.re(this.Hf.Aa() * b), this.Hf.O(this.qg.Ua + 1), c = this.Hf, c.mf(-1 * c.Gc));
            a = a.jm();
            a.a = 0;
            c = Fa.SE(a);
            d = c[1];
            var e = .02 * (a.c - a.b);
            this.Ge.M(1);
            b = 0;
            for (var f = this.Vc; b < f.length;) {
                var g =
                    f[b];
                ++b;
                g.I(!1)
            }
            b = this.Ge.Yj(1);
            f = b.vi;
            b.bb("progress_bar/0010");
            b.pc();
            e = Fa.ij(d, this.Ge.Hp(), {
                x: e,
                y: 0
            });
            Fa.align(e, d, 0, 0);
            this.Ge.Uj(e);
            d = 0;
            for (e = this.Vc; d < e.length;) g = e[d], ++d, g.I(!0);
            b.bb(f);
            this.bc.Mn(-1);
            e = c[2];
            d = e.b;
            b = e.a;
            f = e.c;
            e = e.d;
            null == e && (e = -1);
            null == f && (f = -1);
            null == b && (b = 1);
            null == d && (d = 1);
            g = new w;
            g.b = d;
            g.a = b;
            g.c = f;
            g.d = e;
            e = g;
            e.b += .01 * (a.c - a.b);
            this.bc.Wb(e);
            this.Gf.M(1);
            e = Fa.ij(c[3], this.Gf.Hp());
            Fa.align(e, c[3], 0, 0);
            this.Gf.Uj(e);
            b = c[4];
            a = b.b;
            c = b.a;
            d = b.c;
            b = b.d;
            null == b && (b = -1);
            null ==
                d && (d = -1);
            null == c && (c = 1);
            null == a && (a = 1);
            f = new w;
            f.b = a;
            f.a = c;
            f.c = d;
            f.d = b;
            this.Sb.Wb(f);
            this.kw()
        },
        D: function() {
            ib.prototype.D.call(this);
            this.Nb.u();
            this.Hf = this.Fh = this.qg = this.Jm = null
        },
        ca: function() {
            ib.prototype.ca.call(this);
            this.Nb = new aa(null, this.v.ac(2));
            this.Jm = new B(this.Nb, 203);
            this.Fh = new B(this.Nb, 200, "ui_ornament");
            this.qg = new B(this.Nb, 203);
            this.qg.I(!1);
            this.Hf = new B(this.Nb, 200, "ui_ornament");
            this.Zs();
            this.Vs();
            this.bc = new ca(this.Nb, 245, -1, !1);
            this.V(this.bc);
            this.Sb = new ca(this.Nb,
                245, -1, !1);
            this.V(this.Sb)
        },
        Gj: function() {
            this.bc.eb(-1, 0);
            this.Sb.eb(-1, 0)
        },
        l: Pd
    });
    Od.g = "48";
    Od.F = ib;
    Od.prototype = r(ib.prototype, {
        resize: function() {
            this.Gf.bb(this.pu());
            var a = this.Gf,
                b = 117,
                c = 306,
                d = 259,
                e = 448;
            null == e && (e = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            a.Uj(f);
            this.Ui.qa(G.La(this.v.level));
            this.Nb.M(1);
            a = bb.X.jb.jm();
            b = this.v.Ec();
            c = Fa.TE(a)[1];
            a = Fa.ij(c, this.rC);
            Fa.align(a, c, 1, -1);
            d = a.d - a.a - (c.d - c.a);
            if (0 < d ? .01 > d : .01 > -d) c = (c.c - c.b - (a.c - a.b)) /
                2, c > .05 * b.b && (c = .05 * b.b), b = a.b - c, c = a.c - a.b, a.b = b, a.c = b + c;
            this.Nb.node.xx(!0, !0);
            this.Nb.node.cg(!0, !0);
            b = (a.c - a.b) / this.Nb.Ga();
            this.Nb.M(b);
            this.Nb.N(a.b);
            this.Nb.O(a.a);
            this.kw()
        },
        D: function() {
            ib.prototype.D.call(this);
            this.Nb.u()
        },
        ca: function() {
            ib.prototype.ca.call(this);
            this.Nb = new aa(null, this.v.ac(2));
            this.rC = (new B(this.Nb, 202)).Hp();
            this.Zs();
            this.Vs();
            for (var a = 0, b = this.Vc; a < b.length;) {
                var c = b[a];
                ++a;
                c.I(!1)
            }
            a = this.Ge;
            b = 50;
            c = 165;
            var d = 326,
                e = 225;
            null == e && (e = -1);
            null == d && (d = -1);
            null == c && (c =
                1);
            null == b && (b = 1);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            a.Uj(f);
            a = 0;
            for (b = this.Vc; a < b.length;) c = b[a], ++a, c.I(!0);
            a = this.Ui = new ca(this.Nb, 243, 0, !1);
            b = 112;
            c = 12;
            d = 260;
            e = 86;
            null == e && (e = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            a.Wb(f);
            this.Ui.qa("555");
            this.Ui.Bb();
            this.Ui.qa("");
            this.V(this.Ui);
            a = this.bc = new ca(this.Nb, 245, 0, !1);
            b = 37;
            c = 210;
            d = 337;
            e = 300;
            null == e && (e = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            a.Wb(f);
            this.V(this.bc);
            a = this.Sb = new ca(this.Nb, 245, 0, !1);
            b = 37;
            c = 425;
            d = 337;
            e = 521;
            null == e && (e = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            a.Wb(f);
            this.V(this.Sb)
        },
        Gj: function() {
            this.bc.eb(0, 0);
            this.Sb.eb(0, 0)
        },
        l: Od
    });
    zb.g = "49";
    zb.Mb = function() {
        null == zb.yb && (zb.yb = R.$b("sparkle_burst", R.Ob("sparkle_burst/", 0, 51), .016666666666666666))
    };
    zb.F = t;
    zb.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            var a = this.target.wp();
            a.b /= 2;
            a.a /= 2;
            this.B = new B(this.v.ac(2), 226, "sparkle_burst/0051");
            var b = new x;
            b.b = 0;
            b.a = 0;
            this.target.$f(a, b);
            this.B.N(b.b);
            this.B.O(b.a);
            this.B.Ha();
            this.B.ka();
            this.B.M(8 * this.o.viewport.zoom / this.B.Ga());
            this.B.Za().play(zb.yb, null, null, E(this, this.D))
        },
        D: function() {
            t.prototype.D.call(this);
            this.B.u()
        },
        l: zb
    });
    Fa.g = "4A";
    Fa.ij = function(a, b, c) {
        if (null != c) {
            var d = Object.prototype.hasOwnProperty.call(c, "x") ? fa.Ia(c, "x") : 0;
            c = Object.prototype.hasOwnProperty.call(c, "y") ? fa.Ia(c, "y") : 0;
            if (0 < d || 0 < c) {
                var e = a.b,
                    f = a.a,
                    g = a.c;
                a = a.d;
                null == a && (a = -1);
                null == g && (g = -1);
                null == f && (f =
                    1);
                null == e && (e = 1);
                var h = new w;
                h.b = e;
                h.a = f;
                h.c = g;
                h.d = a;
                a = h;
                d = -d;
                c = -c;
                a.b -= d;
                a.a -= c;
                a.c += d;
                a.d += c
            }
        }
        c = (a.c - a.b) / b.b;
        e = (a.d - a.a) / b.a;
        d = new w;
        d.b = 1;
        d.a = 1;
        d.c = -1;
        d.d = -1;
        c <= e ? (b = b.a * c, d.b = a.b, d.a = a.a, d.c = d.b + (a.c - a.b), d.d = d.a + b) : (b = b.b * e, c = a.b, e = d.c - d.b, d.b = c, d.c = c + e, c = a.a, e = d.d - d.a, d.a = c, d.d = c + e, d.c = d.b + b, d.d = d.a + (a.d - a.a));
        return d
    };
    Fa.SE = function(a) {
        for (var b = [.01, .38, .35, .13, .12, .01], c = b.length, d = [], e = 0; e < c;) {
            e++;
            var f = a.b,
                g = a.a,
                h = a.c,
                l = a.d;
            null == l && (l = -1);
            null == h && (h = -1);
            null == g && (g = 1);
            null == f && (f =
                1);
            var y = new w;
            y.b = f;
            y.a = g;
            y.c = h;
            y.d = l;
            d.push(y)
        }
        d[0].c = d[0].b + b[0] * (a.c - a.b);
        for (e = 1; e < c;) f = e++, d[f].b = d[f - 1].c, d[f].c = d[f].b + b[f] * (a.c - a.b);
        return d
    };
    Fa.TE = function(a) {
        for (var b = [.1, .45, .45], c = b.length, d = [], e = 0; e < c;) {
            e++;
            var f = a.b,
                g = a.a,
                h = a.c,
                l = a.d;
            null == l && (l = -1);
            null == h && (h = -1);
            null == g && (g = 1);
            null == f && (f = 1);
            var y = new w;
            y.b = f;
            y.a = g;
            y.c = h;
            y.d = l;
            d.push(y)
        }
        d[0].d = d[0].a + b[0] * (a.d - a.a);
        for (e = 1; e < c;) f = e++, d[f].a = d[f - 1].d, d[f].d = d[f].a + b[f] * (a.d - a.a);
        return d
    };
    Fa.align = function(a, b, c, d) {
        if (0 > c) {
            c = b.b;
            var e = a.c - a.b
        } else c = 0 < c ? b.c - (a.c - a.b) : b.b + (b.c - b.b - (a.c - a.b)) / 2, e = a.c - a.b;
        a.b = c;
        a.c = c + e;
        b = 0 > d ? b.a : 0 < d ? b.d - (a.d - a.a) : b.a + (b.d - b.a - (a.d - a.a)) / 2;
        d = a.d - a.a;
        a.a = b;
        a.d = b + d
    };
    Fa.prototype = {
        jm: function() {
            var a = this.ue,
                b = a.b,
                c = a.a,
                d = a.c;
            a = a.d;
            null == a && (a = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var e = new w;
            e.b = b;
            e.a = c;
            e.c = d;
            e.d = a;
            return e
        },
        zu: function() {
            if (null == this.bg) return null;
            var a = this.bg,
                b = a.b,
                c = a.a,
                d = a.c;
            a = a.d;
            null == a && (a = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var e = new w;
            e.b =
                b;
            e.a = c;
            e.c = d;
            e.d = a;
            return e
        },
        Ei: function() {
            var a = this.Cb,
                b = a.b,
                c = a.a,
                d = a.c;
            a = a.d;
            null == a && (a = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var e = new w;
            e.b = b;
            e.a = c;
            e.c = d;
            e.d = a;
            return e
        },
        update: function(a, b, c) {
            null == c && (c = !1);
            var d = this.Cb;
            d.b = d.a = 1;
            d.c = d.d = -1;
            d = this.ue;
            d.b = d.a = 1;
            d.c = d.d = -1;
            this.bg = null;
            this.ym = !1;
            if ((a.c - a.b) / (a.d - a.a) < b || c) {
                this.ym = !0;
                c = a.c - a.b;
                b = (a.c - a.b) / b;
                d = this.Cb;
                var e = a.b + c,
                    f = a.a + b;
                d.b = a.b;
                d.a = a.a;
                d.c = e;
                d.d = f;
                f = a.d - a.a - b;
                var g = f / (a.d - a.a);
                d = .08 * (a.d - a.a);
                e = .08 * (a.d - a.a);
                .08 < g ? (c = this.Cb, d = a.a + e + b, c.b = a.b, c.a = a.a + e, c.c = a.c, c.d = d, c = this.ue, d = a.a + e, c.b = a.b, c.a = a.a, c.c = a.c, c.d = d, .03 > (a.d - a.a - b - e) / (a.d - a.a) ? this.Cb.d = a.d : (b = new w, b.b = 1, b.a = 1, b.c = -1, b.d = -1, b = this.bg = b, b.b = a.b, b.a = this.Cb.d, b.c = a.c, b.d = a.d)) : .08 > g ? (g = (b - (d - f)) / b, c *= g, e = (a.c - a.b - c) / 2, f = this.Cb, c = a.b + e + c, b = a.a + b * g + d, f.b = a.b + e, f.a = a.a + d, f.c = c, f.d = b, b = this.ue, c = a.a + d, b.b = this.Cb.b, b.a = a.a, b.c = this.Cb.c, b.d = c, .03 > e / (a.c - a.b) && (this.Cb.b = this.ue.b = a.b, this.Cb.c = this.ue.c = a.c)) : (c = this.Cb, b = a.a + f + b, c.b = a.b, c.a =
                    a.a + f, c.c = a.c, c.d = b, b = this.ue, c = a.a + f, b.b = a.b, b.a = a.a, b.c = a.c, b.d = c)
            } else c = (a.d - a.a) * b, d = this.Cb, e = a.b + c, f = a.a + (a.d - a.a), d.b = a.b, d.a = a.a, d.c = e, d.d = f, d = (a.c - a.b - c) / 2, e = 2 * d / (a.c - a.b), .2 > e ? this.update(a, b, !0) : (.3 > e ? (b = this.Cb, b.b = a.b + 2 * d, b.a = a.a, b.c = a.c, b.d = a.d, b = this.ue, c = this.Cb.b, b.b = a.b, b.a = a.a, b.c = c) : (.4 > e ? (b = this.Cb, b.b = a.b + d, b.a = a.a, b.c = a.c - d, b.d = a.d, b = this.ue, d = a.b + .2 * (a.c - a.b), b.b = a.b, b.a = a.a, b.c = d, b.d = a.d, b = this.Cb, b.b = this.ue.c, b.a = a.a, b.c = this.ue.c + c, b.d = a.d, b = new w, b.b = 1, b.a = 1, b.c = -1, b.d = -1, b = this.bg = b, b.b = this.Cb.c, b.a = a.a) : (b = this.Cb, b.b = a.b + d, b.a = a.a, b.c = a.c - d, b.d = a.d, b = this.ue, c = this.Cb.b, b.b = a.b, b.a = a.a, b.c = c, b.d = this.Cb.d, b = new w, b.b = 1, b.a = 1, b.c = -1, b.d = -1, b = this.bg = b, b.b = this.Cb.c, b.a = this.Cb.a), b.c = a.c), b.d = a.d)
        },
        l: Fa
    };
    ta.g = "4B";
    ta.jE = function(a) {
        ta.data = a;
        ta.Lx = ta.data.Bp(0);
        ta.RF = ta.data.Bp(2);
        ta.tq = ta.data.Bp(4)
    };
    ta.getData = function(a) {
        a = function(a) {
            var b = new Wa(ta.data);
            b.Br(4);
            var c = b.Ca();
            if (1 > a || a > c) throw 0;
            b.Br(6 * (a - 1) + 6);
            c = b.nc();
            a = b.Ca();
            b.Br(c);
            c = new ma(new ArrayBuffer(a));
            b.Th(c, 0, a);
            return c
        }(a);
        var b = new Wa(a),
            c = {
                id: -1,
                sl: null,
                pF: null,
                kc: {
                    tc: null,
                    Re: 0,
                    Tn: 0,
                    Xh: 0,
                    Rr: 0,
                    ql: 0,
                    Sr: 0,
                    Ad: [0, 0, 0],
                    fd: 0
                },
                AH: null,
                jb: {
                    yf: [],
                    Qr: null,
                    fx: null,
                    jq: null,
                    hn: null
                }
            };
        a = {
            Gb: c,
            xa: null
        };
        c.id = b.Ca();
        if (1 == b.L()) {
            var d = b.Ca();
            c.sl = b.Tk(d)
        }
        c.pF = "bg" + b.L();
        switch (b.L()) {
            case 1:
                d = "reach_score";
                break;
            case 2:
                d = "clear_bubbles";
                break;
            case 3:
                d = "pop_bubbles";
                break;
            case 4:
                d = "free_targets";
                break;
            default:
                throw 0;
        }
        c.kc.tc = d;
        c.kc.Tn = b.Ca();
        c.kc.Re = b.Ca();
        c.kc.Rr = b.Ca();
        c.kc.Xh = b.Ca();
        c.kc.Sr = b.Ca();
        c.kc.ql =
            b.Ca();
        c.kc.Ad[0] = b.nc();
        c.kc.Ad[1] = b.nc();
        c.kc.Ad[2] = b.nc();
        c.kc.fd = b.Ca();
        d = 0;
        for (var e = b.L(); d < e;) d++, c.jb.yf.push(b.L());
        d = 1 == b.L();
        c.jb.Qr = d;
        d = 1 == b.L();
        c.jb.fx = d;
        d = 1 == b.L();
        c.jb.jq = d;
        d = 1 == b.L();
        c.jb.hn = d;
        d = b.Ca();
        e = b.Ca();
        c = b.Ca();
        var f = new ma(new ArrayBuffer(c));
        b.Th(f, 0, c);
        b = function(a) {
            a = new Wa(a);
            for (var b = [], c, d = 0, e = a.$h; d < e;) d++, c = a.L(), 0 < (c & 1) ? b.push((c & ta.$x) >> 1) : 1 == (c & 2) >> 1 ? (b.push((c & ta.Js) >> 2), b.push((c & ta.ay) >> 5)) : b.push((c & ta.Js) >> 2);
            return b
        }(f);
        c = 0;
        a.xa = new Wc(d, e);
        var g = a.xa;
        d = g.f;
        e = g.$;
        f = 0;
        for (g = g.$ * g.da; f < g;) {
            var h = f++,
                l = d[h];
            l = new $f(b[c++], h % e, h / e | 0);
            l.Db = 0 == l.code;
            d[h] = l
        }
        return a
    };
    Wf.g = "4C";
    Wf.prototype = {
        mz: function(a, b, c, d, e) {
            function f(b, c, d) {
                b = a.f[c * a.$ + b];
                8 < b.code ? (c = b.code, 40 <= c && 50 > c && (b.code = 40 + d)) : b.code = d
            }
            null == e && (e = -1); - 1 == e && (e = da.Gg(255, 65535));
            e = new Uc(e);
            var g = b.length;
            if (c) {
                c = [];
                for (var h, l, y, k = 0; k < d;) {
                    var p = k++;
                    y = 5;
                    l = 11 - (p & 1);
                    for (var q = 0, m = y; q < m;) {
                        var n = q++;
                        h = b[Math.round(-.4999 + (g - 1 + .4999 - -.4999) * e.Fg())];
                        f(n, p, h);
                        c.push(h)
                    }
                    1 == (l & 1) && (f(y, p, b[Math.round(-.4999 +
                        (g - 1 + .4999 - -.4999) * e.Fg())]), ++y);
                    for (h = y; h < l;) y = h++, f(y, p, c.pop())
                }
            } else
                for (d = a.f, c = a.$, k = 0, p = a.$ * a.da; k < p;) l = k++, f(l % c, l / c | 0, b[Math.round(-.4999 + (g - 1 + .4999 - -.4999) * e.Fg())]), d[l] = d[l];
            b = a.f;
            e = 0;
            for (g = a.$ * a.da; e < g;) d = e++, c = b[d], c.Db && (c.code = 0), b[d] = c
        },
        hn: function(a, b, c, d) {
            function e(a) {
                for (var b = 0, c, d = 0, e = y; d < e;) c = d++, c = l[c].code, 40 <= c && 50 > c && (c = 8 < c ? 40 <= c && 50 > c ? c - 40 : -1 : 0 < c && 8 > c ? c : -1), c == a && ++b;
                return b
            }

            function f(a, b) {
                null == b && (b = 32767);
                y = 0;
                for (a = g.ua(a.Oc); a.ob < a.i;) {
                    var c = a.df[a.ob++];
                    c.Db ||
                        c.Oc.x >= b || (y += 1, l[y - 1] = c)
                }
            }
            var g = new Zf(a),
                h = null;
            h = function(a, b, c) {
                var d = 0;
                if (c) {
                    if (a.code != b) return d;
                    ++d
                }
                a.ea = !0;
                for (c = g.ua(a.Oc); c.ob < c.i;) {
                    var e = c.df[c.ob++];
                    e.code != b || a.ea || (a.ea = !0, ++d, d += h(e, b, !1))
                }
                return d
            };
            var l = [],
                y = 0,
                k;
            if (c && b) {
                b = [];
                for (c = 0; 8 > c;) c++, b.push(0);
                for (var p = 0, q = a.da; p < q;)
                    for (var m = p++, n = 11 - (m & 1) - 1, t = 11 - (m & 1) >> 1, v = 0, P = t; v < P;)
                        if (c = v++, c = a.f[m * a.$ + c], !(c.Db || 8 < c.code || (f(c, t), 0 < e(c.code)))) {
                            var u = a.f;
                            var r = 0;
                            for (k = a.$ * a.da; r < k;) {
                                var x = r++;
                                u[x].ea = !1
                            }
                            r = 32767;
                            u = null;
                            for (var w =
                                    0, z = y; w < z;) k = w++, k = l[k], 8 < k.code || k.ea || (x = h(k, k.code, !0), x < r && (r = x, u = k));
                            null != u && (u = u.code, c.code = u, c.De = !0, c = a.f[m * a.$ + (n - c.Oc.x)], c.code = u, c.De = !0)
                        }
                p = [];
                q = a.da - 1;
                m = 0;
                for (n = a.da; m < n;)
                    if (u = m++, !(0 < (u & 1) || (r = 11 - (u & 1) >> 1, c = a.f[u * a.$ + r], c.Db)))
                        if (f(c), 6 == y) {
                            for (t = 1; 8 > t;) v = t++, b[v] = 0;
                            t = 0;
                            for (v = y; t < v;) u = t++, u = l[u], r = u.code, 0 < r && 8 > r && b[u.code]++;
                            t = 8;
                            v = 0;
                            for (u = 1; 8 > u;) r = u++, 0 < b[r] && b[r] < t && (t = b[r], v = r);
                            0 < v && (c.De = !0, c.code = v)
                        } else d || (v = 0, t = a.f[u * a.$ + (r - 1)], t.Db && (p[v++] = t), 0 < u && (t = a.f[(u - 1) * a.$ + (r - 1)],
                            t.Db && (p[v++] = t)), u < q && (t = a.f[(u + 1) * a.$ + (r - 1)], t.Db && (p[v++] = t)), 0 < v && (t = 1 == v ? 0 : Math.round(-.4999 + (v - 1 + .4999 - -.4999) * this.sC.Fg()), t = p[t], t.Db = !1, t.dC = !1, t.De = !0, t.code = c.code, t = t.Oc.y == c.Oc.y ? a.f[t.Oc.y * a.$ + (t.Oc.x + 2)] : a.f[t.Oc.y * a.$ + (t.Oc.x + 1)], t.Db = !1, t.dC = !1, t.De = !0, t.code = c.code))
            } else
                for (p = function(b) {
                        var c = b.Oc.x,
                            d = b.Oc.y;
                        b = 11 - (b.Oc.y & 1);
                        var e = b >> 1;
                        if (0 == (d & 1))
                            if (c < e || c > e) c = b - 1 - c;
                            else return null;
                        else if (c < e - 1 || c > e) c = b - 1 - c;
                        else return null;
                        return 0 <= c && c < a.$ && 0 <= d && d < a.da ? a.f[d * a.$ + c] : null
                    },
                    q = 0, m = a.da; q < m;)
                    for (n = q++, t = 0, v = 11 - (n & 1); t < v;)
                        if (c = t++, c = a.f[n * a.$ + c], !(c.Db || 8 < c.code || (f(c), 0 < e(c.code)))) {
                            u = a.f;
                            r = 0;
                            for (k = a.$ * a.da; r < k;) x = r++, u[x].ea = !1;
                            r = 32767;
                            u = null;
                            P = 0;
                            for (w = y; P < w;) k = P++, k = l[k], 8 < k.code || k.ea || (x = h(k, k.code, !0), x < r && (r = x, u = k));
                            if (null != u || !d)
                                if (null == u) {
                                    u = !1;
                                    for (r = g.ua(c.Oc); r.ob < r.i;)
                                        if (k = r.df[r.ob++], k.Db && !(0 < (k.Oc.y & 1) && 10 == k.Oc.x)) {
                                            k.code = c.code;
                                            k.Db = !1;
                                            u = k.De = !0;
                                            if (b && (r = p(k), null != r && !r.De))
                                                if (f(r), 0 < e(c.code)) r.code = c.code, r.Db = !1, r.De = !0;
                                                else {
                                                    k = !1;
                                                    x = 0;
                                                    for (P = y; x < P;)
                                                        if (w =
                                                            x++, w = l[w].code, 40 <= w && 50 > w && (w = 8 < w ? 40 <= w && 50 > w ? w - 40 : -1 : 0 < w && 8 > w ? w : -1), 0 < w && 8 > w) {
                                                            k = !0;
                                                            r.code = w;
                                                            r.Db = !1;
                                                            k = r.De = !0;
                                                            break
                                                        }
                                                    if (!k)
                                                        for (k = 0, P = y; k < P;)
                                                            if (x = k++, w = l[x].code, 20 <= w && 30 > w || 10 == l[x].code || 30 == l[x].code) {
                                                                k = !0;
                                                                r.code = l[x].code;
                                                                r.Db = !1;
                                                                k = r.De = !0;
                                                                break
                                                            }
                                                }
                                            break
                                        }
                                    u || (c.code = 0, c.Db = !0, c.RH = !0, c.De = !0)
                                } else c.code = u.code, c.De = !0
                        }
        },
        l: Wf
    };
    la.g = "4D";
    la.Mb = function() {
        null == la.va && (la.va = [], la.va[0] = R.$b("blink", R.Ob("princess_0/", 2, 8), .04), la.va[1] = R.$b("enjoy_0", R.Ob("princess_1/", 0, 18), .04), la.va[2] = R.$b("enjoy_1",
            R.Ob("princess_1/", 19, 38), .04), la.va[3] = R.$b("giggle_0", R.Ob("princess_2/", 1, 19), .04), la.va[4] = R.$b("giggle_1", R.Ob("princess_2/", 20, 38), .04), la.va[5] = R.$b("cry_0", R.Ob("princess_3/", 0, 10), .04), la.va[6] = R.$b("cry_1", R.Ob("princess_3/", 11, 20), .04), la.va[7] = R.$b("cry_2", R.Ob("princess_3/", 21, 27), .2), la.va[8] = R.$b("victory", R.Ob("princess_4/", 0, 7), .1))
    };
    la.F = t;
    la.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            la.Mb();
            this.group = new aa(null, this.v.ac(0));
            this.pa[0] = new B(this.group,
                198, "princess_0/0000");
            this.pa[1] = new B(this.group, 198, "princess_0/0001");
            this.pa[2] = new B(this.group, 198, "princess_0/0002");
            this.pa[3] = new B(this.group, 198, "princess_0/0009");
            this.Gn();
            this.resize();
            this.v.Ma(this)
        },
        D: function() {
            this.v.detach(this);
            this.group.u();
            this.pa = [];
            t.prototype.D.call(this)
        },
        handle: function(a) {
            switch (a.type) {
                case 6:
                    this.state = 0;
                    break;
                case 9:
                    if (!this.jp) break;
                    0 == this.state && (this.fq = this.v.lb.jt, this.time = 0, this.duration = da.hc(.25, .5), this.state = 2, this.time = 0);
                    break;
                case 12:
                    if (!this.jp) break;
                    this.v.Pi && (this.time = 0, this.duration = da.hc(.25, .5), this.state = 3, this.time = 0);
                    break;
                case 26:
                    if (!this.jp) break;
                    this.time = 0;
                    this.duration = da.hc(.25, .5);
                    this.state = 4;
                    this.time = 0;
                    break;
                case 27:
                    this.resize()
            }
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            switch (this.state) {
                case 0:
                    switch (this.dh) {
                        case 0:
                            this.time > this.duration && (this.time = 0, this.duration = this.lg ? .3 : da.hc(.3, .6), this.dh++, this.Gn(), this.gD());
                            break;
                        case 1:
                            this.time > this.duration && (this.dh = this.time = 0, this.duration = (this.lg = this.lg ?
                                !1 : da.tn()) ? .3 : da.hc(3.5, 6.5))
                    }
                    break;
                case 2:
                    if (this.time > this.duration) switch (this.fq) {
                        case 0:
                            if (5 > D.time - this.xB) {
                                this.state = 0;
                                return
                            }
                            this.xB = D.time;
                            .3 < Math.random() && this.iD();
                            break;
                        case 1:
                            .25 < Math.random() && this.Qq();
                            break;
                        case 2:
                            this.Qq();
                            break;
                        case 3:
                            this.Qq()
                    }
                    break;
                case 3:
                    this.time > this.duration && this.hD();
                    break;
                case 4:
                    this.time > this.duration && this.jD()
            }
        },
        Gn: function() {
            3 != this.state && 4 != this.state && (this.pa[1].Za().stop(), this.pa[1].Ka(198, "princess_0/0001"), this.pa[2].Ka(198, "princess_0/0002"),
                this.pa[2].Za().stop(), this.pa[2].I(!0), this.pa[3].Za().stop(), this.pa[3].Ka(198, "princess_0/0009"), this.pa[3].I(!0), this.time = this.state = 0, this.duration = 3)
        },
        gD: function() {
            this.pa[1].Ka(198, "princess_0/0001");
            this.pa[2].Ka(198, "princess_0/0002");
            this.pa[2].I(!0);
            this.pa[2].Za().play(la.va[0], null, 0);
            this.pa[3].Ka(198, "princess_0/0009");
            this.pa[3].I(!0)
        },
        Qq: function() {
            function a() {
                2 == (c += 1) && b.Gn()
            }
            var b = this;
            this.state = 1;
            var c = 0;
            this.pa[1].Ka(196, "princess_1/0000");
            this.pa[1].Za().play(la.va[1], null,
                0, a);
            this.pa[2].Ka(196, "princess_1/0019");
            this.pa[2].Za().play(la.va[2], null, 0, a);
            this.pa[3].I(!1)
        },
        iD: function() {
            function a() {
                2 == (c += 1) && b.Gn()
            }
            var b = this;
            this.state = 1;
            var c = 0;
            this.pa[1].Za().stop();
            this.pa[1].Ka(194, "princess_2/0000");
            this.pa[2].Ka(194, "princess_2/0001");
            this.pa[2].Za().play(la.va[3], null, 0, a);
            this.pa[3].Ka(194, "princess_2/0020");
            this.pa[3].Za().play(la.va[4], null, 0, a);
            this.pa[3].I(!0)
        },
        hD: function() {
            function a() {
                2 <= (c += 1) && (b.pa[3].I(!0), b.pa[3].Ka(192, "princess_3/0021"), b.pa[3].Za().play(la.va[7],
                    null, 0))
            }
            var b = this;
            this.state = 1;
            var c = 0;
            this.pa[1].Ka(192, "princess_3/0000");
            this.pa[1].Za().play(la.va[5], null, 0, a);
            this.pa[2].Ka(192, "princess_3/0011");
            this.pa[2].Za().play(la.va[6], null, 0, a);
            this.pa[3].I(!1)
        },
        jD: function() {
            this.state = 1;
            this.pa[1].Ka(190, "princess_4/0000");
            this.pa[1].Za().play(la.va[8], null, 0);
            this.pa[2].I(!1);
            this.pa[3].I(!1)
        },
        resize: function() {
            var a = this.o.viewport.zoom,
                b = this.o.viewport.Sa();
            this.group.M(1);
            this.group.M(15 * a / this.group.Aa());
            this.group.N(b.b - 1.5 * a);
            this.group.O(b.d -
                15 * a)
        },
        l: la
    });
    var Q = Ja.e1 = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5 i6 i7 i8 i9".split(" ")
    };
    Q.i0 = {
        m: 0,
        s: "e1",
        toString: n
    };
    Q.i1 = {
        m: 1,
        s: "e1",
        toString: n
    };
    Q.i2 = {
        m: 2,
        s: "e1",
        toString: n
    };
    Q.i3 = {
        m: 3,
        s: "e1",
        toString: n
    };
    Q.i4 = {
        m: 4,
        s: "e1",
        toString: n
    };
    Q.i5 = {
        m: 5,
        s: "e1",
        toString: n
    };
    Q.i6 = {
        m: 6,
        s: "e1",
        toString: n
    };
    Q.i7 = {
        m: 7,
        s: "e1",
        toString: n
    };
    Q.i8 = {
        m: 8,
        s: "e1",
        toString: n
    };
    Q.i9 = {
        m: 9,
        s: "e1",
        toString: n
    };
    Q.zc = [Q.i0, Q.i1, Q.i2, Q.i3, Q.i4, Q.i5, Q.i6, Q.i7, Q.i8, Q.i9];
    var Ma = Ja.e2 = {
        qc: !0,
        fc: ["i0", "i1", "i2", "i3", "i4"]
    };
    Ma.i0 = {
        m: 0,
        s: "e2",
        toString: n
    };
    Ma.i1 = {
        m: 1,
        s: "e2",
        toString: n
    };
    Ma.i2 = {
        m: 2,
        s: "e2",
        toString: n
    };
    Ma.i3 = {
        m: 3,
        s: "e2",
        toString: n
    };
    Ma.i4 = {
        m: 4,
        s: "e2",
        toString: n
    };
    Ma.zc = [Ma.i0, Ma.i1, Ma.i2, Ma.i3, Ma.i4];
    qb.g = "4E";
    qb.Mb = function() {
        if (null == qb.va) {
            qb.va = [];
            var a = R.$b("", R.Ob("puppy/", 0, 50), .04).frames,
                b = function(a, b) {
                    qb.va[a.m] = b
                };
            b(Q.i1, new gb("puppy1", a.slice(0, 7)));
            b(Q.i2, new gb("puppy2", a.slice(7, 15)));
            b(Q.i3, new gb("puppy3", a.slice(16, 21)));
            b(Q.i4, new gb("puppy4", a.slice(22, 25)));
            b(Q.i5, new gb("puppy5", a.slice(25, 32)));
            b(Q.i6, new gb("puppy6",
                a.slice(31, 36)));
            b(Q.i7, new gb("puppy7", a.slice(36, 51)));
            b(Q.i8, new gb("puppy8", a.slice(22, 36)));
            b(Q.i9, new gb("puppy8", a.slice(16, 51)))
        }
    };
    qb.F = t;
    qb.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            qb.Mb();
            this.group = new aa(null, this.v.ac(0));
            this.B = new B(this.group, 188, "puppy/0000");
            this.state = Ma.i1;
            this.resize();
            this.v.Ma(this)
        },
        D: function() {
            this.v.detach(this);
            this.group.u();
            this.B = null;
            t.prototype.D.call(this)
        },
        handle: function(a) {
            switch (a.type) {
                case 8:
                    this.state = Ma.i0;
                    break;
                case 9:
                    this.hC =
                        this.v.lb.vj;
                    this.fq = this.v.lb.jt;
                    this.time = 0;
                    this.duration = da.hc(.25, .5);
                    0 == this.v.lb.vj ? ("puppy/0001" == this.B.vi && this.B.bb("puppy/0000"), this.state = Ma.i2) : this.state = Ma.i4;
                    break;
                case 12:
                    this.v.Pi && this.wc(Q.i1, da.Gg(1, 2));
                    break;
                case 13:
                    this.v.Ee ? (a = da.Gg(2, 3), this.wc(Q.i7, a), this.duration = this.B.Za().length * a * 1.1) : this.duration = 1;
                    this.time = 0;
                    this.state = Ma.i3;
                    break;
                case 25:
                    this.state = Ma.i1;
                    this.time = this.xh = 0;
                    break;
                case 27:
                    this.resize()
            }
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            switch (this.state.m) {
                case 1:
                    switch (this.xh) {
                        case 0:
                            2 <
                                this.time && (this.time = 0, a = Math.random(), .25 < a ? (this.xh = 0, a = Math.random(), .66 < a ? this.wc(Q.i1, da.Gg(1, 2)) : .33 < a ? this.wc(Q.i3, 1) : this.wc(Q.i2, 1)) : (this.wc(Q.i4), this.xh = 1, this.duration = da.hc(1.1 * this.B.Za().length, 3)));
                            break;
                        case 1:
                            this.time > this.duration && (this.xh = 2, a = da.Gg(2, 6), this.wc(Q.i5, a), this.duration = this.B.Za().length * a * 1.1, this.time = 0);
                            break;
                        case 2:
                            this.time > this.duration && (this.time = 0, .2 > Math.random() ? (this.xh = 1, this.duration = da.hc(1, 2), this.time = 0) : (this.wc(Q.i6), this.xh = 0))
                    }
                    break;
                case 2:
                    this.time >
                        this.duration && (this.B.bb("puppy/0001"), this.state = Ma.i0);
                    break;
                case 3:
                    this.time > this.duration && (this.wc(Q.i1), this.duration = da.Gg(1, 3), this.time = 0);
                    break;
                case 4:
                    if (this.time > this.duration) switch (this.state = Ma.i0, this.fq) {
                        case 0:
                            if (.3 > Math.random() || 4 > this.hC) {
                                .5 < Math.random() && this.wc(Q.i1);
                                break
                            }
                            a = Math.random();
                            .5 < a ? this.wc(Q.i3) : .25 < a ? this.wc(Q.i3, 2) : this.wc(Q.i7);
                            break;
                        case 1:
                            .9 < Math.random() ? this.wc(Q.i9) : this.wc(Q.i7);
                            break;
                        case 2:
                            .75 < Math.random() ? this.wc(Q.i9) : this.wc(Q.i7, 2);
                            break;
                        case 3:
                            this.wc(Q.i9)
                    }
            }
        },
        wc: function(a, b) {
            null == b && (b = 1);
            this.B.Za().Lw(b - 1);
            this.B.Za().play(qb.va[a.m])
        },
        resize: function() {
            var a = this.o.viewport.zoom,
                b = this.o.viewport.Sa();
            this.group.M(1);
            this.group.M(6.5 * a / this.B.Aa());
            this.group.N(b.c - 6.3 * a);
            this.group.O(b.d - 6 * a)
        },
        l: qb
    });
    Xb.g = "4F";
    Xb.Mb = function() {
        if (null == Xb.yb) {
            var a = new Rc;
            a.Rn = .5;
            a.Sn = .5;
            var b = new Rc;
            b.Rn = .75;
            b.Sn = .75;
            var c = new Rc;
            c.Rn = .5;
            c.Sn = .5;
            var d = new Rc;
            d.b = 0;
            Xb.yb = new gb("", [new sc(a, .133), new sc(b, .116), new sc(c, .38), new sc(d, 0)])
        }
    };
    Xb.F = t;
    Xb.prototype = r(t.prototype, {
        D: function() {
            t.prototype.D.call(this);
            this.node.u();
            this.node.u()
        },
        XD: function(a) {
            this.Le = a.Le;
            this.kind = a.Cg;
            var b = this.position;
            a = a.S.position;
            b.b = a.b;
            b.a = a.a;
            this.position.a -= 1.2
        },
        ca: function() {
            t.prototype.ca.call(this);
            Xb.Mb();
            var a = this.v.ac(3);
            null == this.node ? this.node = new aa(null, a) : a.appendChild(this.node);
            switch (this.kind) {
                case 1:
                    var b = "points_pop" + this.Le;
                    break;
                case 2:
                    b = "points_drop100";
                    break;
                case 3:
                    b = "points_free_target1000";
                    break;
                case 4:
                    switch (this.Le) {
                        case 100:
                            b = "points_bouncer100";
                            break;
                        case 150:
                            b = "points_bouncer150";
                            break;
                        case 200:
                            b = "points_bouncer200";
                            break;
                        case 250:
                            b = "points_bouncer250";
                            break;
                        default:
                            b = null
                    }
            }
            0 == this.node.node.gf ? a = new B(this.node, 200, b) : (a = this.node.Yj(0), a.bb(b));
            a.LD();
            this.scale = 1 / (a.U.b / 3) * 1.5;
            a.ka();
            a.Ha();
            a.vB().play(Xb.yb, null, E(this, this.hd));
            this.o.viewport.UF(this.position)
        },
        ma: function(a) {
            t.prototype.ma.call(this, a);
            a = this.xc;
            var b = this.position;
            a.b = b.b;
            a.a = b.a;
            this.o.viewport.HC(this.xc);
            this.node.N(this.xc.b);
            this.node.O(this.xc.a);
            this.node.M(this.o.viewport.zoom *
                this.scale);
            this.node.I(!0)
        },
        hd: function() {
            this.node.remove();
            this.v.MD(this)
        },
        l: Xb
    });
    v.g = "50";
    v.load = function() {
        var a = Pa.get(v.Is);
        if (null == a) v.Jt(), v.save();
        else try {
            v.decode(a), v.zl && (v.zl = !1, v.save())
        } catch (b) {
            a = v.level, v.Jt(), v.level = a, v.save()
        }
    };
    v.save = function() {
        Pa.set(v.Is, v.encode())
    };
    v.Jt = function() {
        v.level = 1;
        v.Ze = !0;
        v.ed = !0;
        v.se = !0;
        v.mh = !1;
        for (var a = [], b = 0; 1001 > b;) b++, a.push(0);
        v.cc = a;
        v.cc[0] = -1
    };
    v.encode = function() {
        if (3 == v.VERSION) {
            var a = {
                version: 3
            };
            a.level = v.level;
            a.music = v.ed;
            a.sound =
                v.se;
            a.firstRun = v.Ze;
            a.gameOver = v.mh;
            for (var b = [], c = 1; 1001 > c;) {
                var d = c++;
                b.push(v.cc[d])
            }
            a.stars = b;
            return JSON.stringify(a)
        }
        a = new Ae;
        a.tf(v.VERSION);
        a.VF(v.level);
        b = 0;
        v.ed && (b |= 1);
        v.se && (b |= 2);
        a.tf(b);
        a.tf(v.Ze ? 1 : 0);
        if (2 == v.VERSION)
            for (a.tf(v.mh ? 1 : 0), b = 1; 1001 > b;) c = b++, a.tf(v.cc[c]);
        return db.encode(a.Xj())
    };
    v.decode = function(a) {
        if (0 == a.indexOf("{")) v.NC(a);
        else switch ((new Wa(db.decode(a))).L()) {
            case 1:
                v.LC(a);
                if (2 == v.VERSION) {
                    a = [];
                    for (var b = 0; 1001 > b;) b++, a.push(0);
                    v.cc = a;
                    v.cc[0] = -1;
                    a = 1;
                    for (b = v.level; a <
                        b;) {
                        var c = a++;
                        v.cc[c] = 3
                    }
                    v.mh = 0 < v.cc[1E3];
                    v.ed = !0;
                    v.zl = !0
                }
                break;
            case 2:
                v.MC(a), 3 == v.VERSION && (v.zl = !0)
        }
    };
    v.LC = function(a) {
        a = new Wa(db.decode(a));
        a.L();
        v.level = a.Ca();
        var b = a.L();
        v.ed = 0 < (b & 1);
        v.se = 0 < (b & 2);
        v.Ze = 1 == a.L()
    };
    v.MC = function(a) {
        a = new Wa(db.decode(a));
        a.L();
        v.level = a.Ca();
        var b = a.L();
        v.ed = 0 < (b & 1);
        v.se = 0 < (b & 2);
        v.Ze = 1 == a.L();
        v.mh = 1 == a.L();
        v.cc = [];
        v.cc[0] = -1;
        for (b = 1; 1001 > b;) {
            var c = b++;
            v.cc[c] = a.L()
        }
    };
    v.NC = function(a) {
        a = JSON.parse(a);
        v.level = fa.Ia(a, "level");
        v.ed = fa.Ia(a, "music");
        v.se = fa.Ia(a, "sound");
        v.Ze = fa.Ia(a, "firstRun");
        v.mh = fa.Ia(a, "gameOver");
        a = fa.Ia(a, "stars");
        v.cc = [];
        v.cc[0] = -1;
        for (var b = 1; 1001 > b;) {
            var c = b++;
            v.cc[c] = a[c - 1]
        }
    };
    Nd.g = "51";
    Nd.F = t;
    Nd.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            this.v.Ma(this)
        },
        D: function() {
            this.v.detach(this);
            t.prototype.D.call(this)
        },
        handle: function(a) {
            t.prototype.handle.call(this, a);
            8 == a.type && (this.Ii = 0)
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            2 == this.v.state && (0 == this.Wf && (this.Wf = 1 + 2 * Math.random()), this.v.fe ? 0 <= this.Ii &&
                (this.Ii += a, this.Ii > this.Wf && (this.Ii = -1, this.Wf = 0, this.vC())) : this.Ii = 0)
        },
        vC: function() {
            for (var a = [], b = 32767, c = -1, d = 0, e = this.o.Cp(a); d < e;) {
                var f = d++,
                    g = a[f].Vb;
                b = g < b ? g : b;
                f = a[f].Vb;
                c = f > c ? f : c
            }
            b -= b & 1;
            ++c;
            for (e = d = 0; 15 >= e;) {
                f = e++;
                g = b;
                for (var h = c, l = a, y = 0, k = this.o.xa, p = f, q = g; 0 <= p && q < h;) k.wa(p, q) && (l[y++] = k.get(p, q)), --p, q += 2;
                p = f - 1;
                for (q = g + 1; 0 <= p && q < h;) k.wa(p, q) && (l[y++] = k.get(p, q)), --p, q += 2;
                g = y;
                for (f = 0; f < g;) h = a[f++], 0 < (h.K & 4) || 0 >= (h.K & 64) || (l = h.code, 0 < l && 8 > l && z.ba(h.client, Ba).FE(d));
                d += .05
            }
        },
        l: Nd
    });
    Vf.g =
        "52";
    Vf.prototype = {
        reset: function() {
            this.ol = !1;
            this.Gk = this.Zi = this.hf = this.uq = this.Hv = this.Dv = this.Ev = this.Xm = this.JC = this.$i = this.duration = 0
        },
        l: Vf
    };
    hd.g = "53";
    hd.F = t;
    hd.prototype = r(t.prototype, {
        ca: function() {
            t.prototype.ca.call(this);
            var a = 0,
                b = 0,
                c = 0,
                d = 0,
                e = this.Eo = this.o.Kb.iterator();
            e.f = e.tb.f;
            e.ub = e.tb.i;
            for (e.Ja = 0; e.aa();) {
                var f = e.next(),
                    g = f.code;
                0 < g && 8 > g || (g = f.code, 40 <= g && 50 > g && ++a, g = f.code, 20 <= g && 30 > g && ++b, 30 == f.code && ++c, 50 <= f.code && ++d)
            }
            e = this.ji;
            e.ua(4, 0);
            e.f[0] = a;
            e.f[2] = b;
            e.f[1] = c;
            e.f[3] =
                d
        },
        D: function() {
            t.prototype.D.call(this);
            this.sa = null;
            this.ji.u();
            this.ji = null;
            this.He.u();
            this.Eo = this.He = null
        },
        Wh: function(a) {
            this.qt = [];
            this.sa.reset();
            var b = this.Eo;
            b.f = b.tb.f;
            b.ub = b.tb.i;
            for (b.Ja = 0; b.aa();) b.next().K &= -5;
            this.He.i = 0;
            b = this.o.ef;
            this.jF(a);
            this.iF(a);
            this.lF(a);
            var c = b.ou(),
                d = b.$e();
            b.yC(a, d, function(a, b) {
                a.code == b.code ? (a = a.code, a = 0 < a && 8 > a) : a = !1;
                return a ? (b = b.code, 0 < b ? 8 > b : !1) : !1
            });
            3 <= d.i && (c.i == c.C && c.R(), c.f[c.i++] = d);
            for (d = c.iterator(); d.aa();) {
                var e = d.next();
                b.kp(e, this.He)
            }
            this.kF(a,
                c);
            this.oD(a, c);
            for (a = this.o.ef.KA(this.He, function(a, b) {
                    return a.code == b.code
                }).iterator(); a.aa();) c = a.next(), this.DB(c);
            a = 0;
            for (c = this.qt; a < c.length;) d = c[a], ++a, null != d.ya && (d.ya.u(), d.ya = null);
            b.complete()
        },
        lF: function(a) {
            if (0 != this.dm(1)) {
                var b = this.o.ef,
                    c = b.$e();
                c.i = 0;
                b.Sm(a, c, function(a, b) {
                    return 30 == b.code
                });
                if (!c.Db()) {
                    a = this.o.xa;
                    b = b.$e();
                    for (c = c.iterator(); c.aa();) {
                        var d = c.next();
                        this.sa.uq++;
                        b.i = 0;
                        b.i == b.C && b.R();
                        b.f[b.i++] = d;
                        for (var e = .1, f = d.Ab - 1, g = d.Vb; 0 <= f;) {
                            var h = a.get(f, g);
                            null != h &&
                                (z.ba(h.client, Ba).Lg = e, b.i == b.C && b.R(), b.f[b.i++] = h);
                            e += .1;
                            --f
                        }
                        e = .1;
                        f = d.Ab + 1;
                        d = d.Vb;
                        for (g = 11 - (d & 1); f < g;) h = a.get(f, d), null != h && (z.ba(h.client, Ba).Lg = e, b.i == b.C && b.R(), b.f[b.i++] = h), e += .1, ++f;
                        this.o.ef.kp(b, this.He);
                        for (d = b.iterator(); d.aa();) e = d.next(), f = e.client, f.j |= 520, 50 <= e.code ? (f.j |= 32, this.sa.Xm++, this.Rj(3)) : (this.sa.$i++, this.bv(e) && this.sa.Gk++), this.Wi(e), this.sa.hf++, this.sa.Zi++, this.sa.ol = !0
                    }
                    0 < this.sa.uq && (this.sa.duration = .5)
                }
            }
        },
        jF: function(a) {
            if (0 != this.dm(3)) {
                var b = this.o.ef,
                    c = b.$e();
                c.i = 0;
                b.Sm(a, c, function(a, b) {
                    return 50 <= b.code
                });
                for (a = c.iterator(); a.aa();) b = a.next(), this.Xs(b, this.He), this.Wi(b), b.client.j |= 32, this.Rj(3), this.sa.hf++, this.sa.Xm++, this.sa.Zi++, this.sa.ol = !0
            }
        },
        kF: function(a, b) {
            if (0 != this.dm(0)) {
                var c = this.o.ef,
                    d = c.$e();
                d.i = 0;
                c.Sm(a, d, function(a, b) {
                    a = b.code;
                    return 40 <= a ? 50 > a : !1
                });
                for (a = d.iterator(); a.aa();) {
                    var e = a.next();
                    this.ir(e)
                }
                for (b = b.iterator(); b.aa();)
                    for (a = b.next(), d.i = 0, c.kp(a, d), a = d.iterator(); a.aa();) {
                        e = a.next();
                        var f = e.code;
                        40 <= f && 50 > f && this.ir(e)
                    }
            }
        },
        iF: function(a) {
            if (0 != this.dm(2)) {
                var b = this.o.ef,
                    c = b.$e();
                c.i = 0;
                b.Sm(a, c, function(a, b) {
                    a = b.code;
                    return 20 <= a ? 30 > a : !1
                });
                for (a = c.iterator(); a.aa();) {
                    b = a.next();
                    this.sa.hf++;
                    c = b.code;
                    b.Gl(20 + ((20 <= c && 30 > c ? c - 20 : -1) - 1));
                    c = b.client;
                    var d = b.code;
                    0 == (20 <= d && 30 > d ? d - 20 : -1) ? (this.Xs(b, this.He), this.Wi(b), c.j |= 256, this.Rj(2), this.sa.Dv++, this.sa.Zi++, c = this.He, c.i == c.C && c.R(), c.f[c.i++] = b) : (this.sa.Ev++, c.j |= 128)
                }
            }
        },
        oD: function(a, b) {
            function c(b) {
                for (var c = null, d, e = 0, f = b.i; e < f;)
                    for (d = e++, d = b.f[d], d.ya.ea = !1,
                        d = d.ya.za; null != d;) d.node.ea = !1, null == c && d.node.ta == a && (c = d.node.ta), d = d.next;
                return c
            }
            for (var d = this.o.Pb, e = this.o.ef, f = 0, g = e.ju(b); f < g.length;) {
                var h = g[f];
                ++f;
                h.client.j |= 4
            }
            for (f = b.iterator(); f.aa();) {
                g = f.next();
                h = g.i;
                var l = 15 <= h ? .5 : 8 <= h ? .3 : .2;
                l > this.sa.duration && (this.sa.duration = l);
                h = [l / h];
                g = c(g);
                d.rz(!0, g.ya, function(a, b) {
                    return function(c, d) {
                        c = c.ta.client;
                        if (d) return 0 < (c.j & 4);
                        c.Lg = a[0];
                        a[0] += b[0];
                        return !0
                    }
                }([.1], h))
            }
            f = d = 0;
            g = e.$e();
            this.o.Pb.clearMarks();
            for (h = b.iterator(); h.aa();)
                for (l = h.next().iterator(); l.aa();) {
                    var y =
                        l.next();
                    0 < (y.client.j & 4) && (g.i == g.C && g.R(), g.f[g.i++] = y, ++f, y.ya.ea = !0)
                }
            for (; 0 < f;)
                for (h = g.f[d++], --f, l = h.ya.za; null != l;) l.node.ea || (l.node.ea = !0, l.node.ta.client.Lg = h.client.Lg, y = l.node.ta, g.i == g.C && g.R(), g.f[g.i++] = y, ++f), l = l.next;
            d = 0;
            for (b = e.ju(b); d < b.length;) e = b[d], ++d, this.Wi(e), e.client.j |= 8, this.sa.$i++, this.sa.hf++, this.sa.Zi++, this.sa.Gk++, this.sa.ol = !0, this.He.contains(e) && this.He.remove(e);
            b = a.client;
            0 < this.sa.Ev + this.sa.Dv && 0 == (b.j & 8) && (this.Wi(a), this.sa.$i++, this.sa.hf++, this.sa.Zi++,
                this.sa.Gk++, b.j |= 8)
        },
        DB: function(a) {
            for (var b = a.iterator(); b.aa();) {
                var c = b.next();
                this.Wi(c)
            }
            b = 0;
            for (a = a.iterator(); a.aa();) {
                c = a.next();
                var d = c.client;
                0 < (d.j & 264) || (++b, d.j |= 16, this.sa.JC++, this.sa.hf++, this.sa.Zi++, this.bv(c) && this.sa.Gk++, 50 <= c.code && (d.j |= 32, this.sa.Xm++, this.Rj(3)), d = c.code, 40 <= d && 50 > d && this.ir(c))
            }
        },
        Xs: function(a, b) {
            for (a = a.ya.za; null != a;) {
                var c = a.node.ta;
                b.i == b.C && b.R();
                b.f[b.i++] = c;
                a = a.next
            }
        },
        dm: function(a) {
            return this.ji.f[a]
        },
        Rj: function(a) {
            --this.ji.f[a]
        },
        ir: function(a) {
            a.Gl(a.code -
                40);
            z.ba(a.client, Ba).j |= 64;
            this.sa.Hv++;
            this.sa.hf++;
            this.Rj(0)
        },
        bv: function(a) {
            var b = a.code;
            if (0 < b && 8 > b) return !0;
            a = a.code;
            return 40 <= a ? 50 > a : !1
        },
        Wi: function(a) {
            a.o.Vl(a);
            a.K |= 4;
            this.qt.push(a)
        },
        l: hd
    });
    ca.g = "54";
    ca.F = C;
    ca.prototype = r(C.prototype, {
        wr: function(a) {
            this.B.I(a)
        },
        qa: function(a, b) {
            null == b && (b = 0);
            if (this.text == a) return this;
            this.text = a;
            if (null == this.la) return this;
            0 < b && this.B.fl(b);
            this.B.qa(a);
            0 < b && this.B.pc();
            return this
        },
        Mn: function(a) {
            this.B.al(a);
            return a
        },
        JH: function() {
            return this.B.fa.size
        },
        nj: function(a) {
            this.B.fl(a);
            return a
        },
        Bb: function() {
            this.B.Ij(this.Tm, this.rv);
            return this
        },
        Yf: function() {
            this.B.Yf(this.Tm)
        },
        Wb: function(a) {
            this.Nw(this.B, a);
            return this
        },
        eb: function(a, b) {
            if (null == this.la) return this;
            this.B.eb(this.la, a, b);
            return this
        },
        br: function() {
            return this.B.Jc.overflow
        },
        D: function() {
            C.prototype.D.call(this);
            this.B.u()
        },
        Nw: function(a, b) {
            var c = b.b,
                d = b.a,
                e = b.c,
                f = b.d;
            null == f && (f = -1);
            null == e && (e = -1);
            null == d && (d = 1);
            null == c && (c = 1);
            var g = new w;
            g.b = c;
            g.a = d;
            g.c = e;
            g.d = f;
            this.la = g;
            a.N(b.b |
                0);
            a.O(b.a | 0);
            a.el(b.c - b.b | 0, b.d - b.a | 0);
            null != this.text && a.qa(this.text)
        },
        l: ca
    });
    Me.g = "55";
    Me.F = ca;
    Me.prototype = r(ca.prototype, {
        wr: function(a) {
            ca.prototype.wr.call(this, a);
            this.Xb.I(a)
        },
        qa: function(a, b) {
            null == b && (b = 0);
            var c = G.La(a);
            if (this.text == c) return this;
            ca.prototype.qa.call(this, a, b);
            if (null == this.la) return this;
            0 < b && this.Xb.fl(b);
            this.Xb.qa(c);
            0 < b && this.Xb.pc();
            return this
        },
        Mn: function(a) {
            ca.prototype.Mn.call(this, a);
            this.Xb.al(a);
            return a
        },
        nj: function(a) {
            ca.prototype.nj.call(this, a);
            this.Xb.fl(a);
            return a
        },
        Bb: function() {
            ca.prototype.Bb.call(this);
            this.Xb.Ij(this.Tm, this.rv);
            return this
        },
        Yf: function() {
            ca.prototype.Yf.call(this);
            this.Xb.Yf(this.Tm)
        },
        Wb: function(a) {
            ca.prototype.Wb.call(this, a);
            this.Nw(this.Xb, a);
            return this
        },
        eb: function(a, b) {
            ca.prototype.eb.call(this, a, b);
            this.Xb.eb(this.la, a, b);
            return this
        },
        br: function() {
            return this.Xb.Jc.overflow
        },
        D: function() {
            ca.prototype.D.call(this);
            this.Xb.u()
        },
        l: Me
    });
    Cc.g = "56";
    Cc.F = C;
    Cc.prototype = r(C.prototype, {
        yE: function(a) {
            a = I.Ep((a - 1) % 20, this.cx);
            this.group.N(a.b);
            this.group.O(a.a);
            this.group.M(.5)
        },
        DC: function(a, b) {
            this.hd = b;
            this.move = !0;
            this.Dl = !1;
            a = I.iu((a - 2) % 20, this.cx);
            this.jr = [];
            a.yw(this.jr, 1);
            this.index = 0;
            this.Bt();
            a = this.J;
            b = this.qe.b.a;
            a.b = this.qe.b.b;
            a.a = b
        },
        D: function() {
            C.prototype.D.call(this);
            this.group.u()
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            this.move && !this.Dl && this.advance(a)
        },
        ma: function(a) {
            C.prototype.ma.call(this, a);
            this.move && (this.group.N(this.J.b), this.group.O(this.J.a));
            this.Dl && (this.move = this.Dl = !1,
                u.play(u.dy), a = this.hd, this.hd = null, this.B.M(.8), this.B.gb().Lc(1.2, 1.25, L.Kd(.25), null, a))
        },
        advance: function(a) {
            var b = this.qe;
            var c = b.a.b - b.b.b;
            b = b.a.a - b.b.a;
            var d = Math.sqrt(c * c + b * b);
            c /= d;
            d = b / d;
            this.J.b += 75 * c * a;
            for (this.J.a += 75 * d * a; 0 > -c * (this.J.b - this.qe.a.b) + -d * (this.J.a - this.qe.a.a);) {
                if (this.index == this.jr.length - 4) {
                    this.Dl = !0;
                    this.J.b = this.qe.a.b;
                    this.J.a = this.qe.a.a;
                    return
                }
                c = this.qe.a.b - this.J.b;
                b = this.qe.a.a - this.J.a;
                b = Math.sqrt(c * c + b * b);
                this.index += 2;
                this.Bt();
                this.J.b = this.qe.b.b;
                this.J.a =
                    this.qe.b.a;
                d = this.qe;
                c = d.a.b - d.b.b;
                d = d.a.a - d.b.a;
                var e = Math.sqrt(c * c + d * d);
                c /= e;
                d /= e;
                this.J.b += c * b;
                this.J.a += d * b
            }
            this.am += a;
            if (.4 < this.am) {
                switch (this.lp) {
                    case 1:
                        u.play(u.ey);
                        break;
                    case 2:
                        u.play(u.fy);
                        break;
                    case 3:
                        u.play(u.gy);
                        break;
                    case 4:
                        u.play(u.hy);
                        break;
                    case 5:
                        u.play(u.iy)
                }
                5 < ++this.lp && (this.lp = 1);
                this.am = 0
            }
        },
        Bt: function() {
            var a = this.index,
                b = this.jr;
            this.qe = new If(b[a], b[a + 1], b[a + 2], b[a + 3])
        },
        l: Cc
    });
    Wb.g = "57";
    Wb.F = C;
    Wb.prototype = r(C.prototype, {
        D: function() {
            C.prototype.D.call(this);
            this.Oe.u();
            this.yc.u();
            ba.X().detach(E(this, this.Ub))
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            this.pressed ? this.alpha = 1 : (this.alpha *= .97, .1 > this.alpha && (this.alpha = 0))
        },
        ma: function(a) {
            C.prototype.ma.call(this, a);
            this.yc.na(this.alpha)
        },
        Ub: function(a) {
            if (this.enabled && this.Oe.Hh) switch (a.action.m) {
                case 0:
                    var b = this.Oe,
                        c = a.y,
                        d = new x;
                    d.b = a.x;
                    d.a = c;
                    b.kf(d) && (this.yc.I(!0), this.yc.na(1), this.alpha = 1, this.pressed = !0, u.play(u.yl));
                    break;
                case 1:
                    this.yc.I(!0), this.yc.na(1), this.pressed = !1, b = this.Oe, c = a.y,
                        d = new x, d.b = a.x, d.a = c, b.kf(d) && this.ki(30, J.Fa(["direction", this.direction]))
            }
        },
        l: Wb
    });
    Ca.g = "58";
    Ca.F = C;
    Ca.prototype = r(C.prototype, {
        Pg: function(a) {
            if (a)
                for (this.nk = !0, a = this.iterator(); a.aa();) {
                    var b = a.next();
                    b instanceof pb && z.ba(b, pb).enable();
                    b instanceof Wb && (z.ba(b, Wb).enabled = !0)
                } else
                    for (this.nk = !1, a = this.iterator(); a.aa();) b = a.next(), b instanceof pb && z.ba(b, pb).disable(), b instanceof Wb && (z.ba(b, Wb).enabled = !1)
        },
        hx: function() {
            var a = this.Ec();
            this.J.b = -(this.Om.b - a.b);
            this.canvas.N(this.J.b |
                0);
            this.bq = !0
        },
        cF: function(a) {
            var b = this.Ec(),
                c = -(this.Om.b - b.b),
                d = new Rb(Math.abs(c / 1500 * 5 | 0)),
                e = L.mc(2);
            this.Un = function(a) {
                a = d.update(a);
                return hb.map(e(a), 0, 1, c, 0)
            };
            this.Vv = a
        },
        VD: function(a) {
            this.Y(Cc).yE(a)
        },
        HB: function() {
            this.Y(Cc).D()
        },
        az: function(a) {
            function b() {
                c.Uu = !1;
                var b = J.Fa(["level", a]);
                c.ki(31, b)
            }
            var c = this;
            this.Uu = !0;
            var d = this.Y(Cc);
            this.Y(pb, "waypoint_" + (a - 1)).mD(function() {
                d.DC(a, b)
            })
        },
        ca: function() {
            var a = this;
            C.prototype.ca.call(this);
            var b = z.ba(this.parent, ab).content;
            this.canvas =
                new aa(null, b);
            this.canvas.node.name = "levelmap";
            M.ra.Qa([168, 167]);
            b = I.Fc(this.level);
            var c = new Le(b);
            c.Qa();
            this.V(new Ra(this.canvas, b, c, this.Te, function() {
                a.ki(29)
            }));
            this.V(new Wb(this.canvas, -1, b, c.Ih[0]));
            this.V(new Wb(this.canvas, 1, b, c.Ih[0]));
            this.$y(b, c.Ih[0]);
            this.V(new Cc(this.canvas, b));
            this.V(new Ke(this.canvas));
            this.Pg(!1)
        },
        D: function() {
            C.prototype.D.call(this);
            this.canvas.u()
        },
        resize: function() {
            var a = this.Ec(),
                b = a.a / 1024,
                c = a.b / 2048;
            this.au = c > b;
            this.canvas.M(Math.max(b, c));
            this.au ?
                this.J.a = (a.a - this.canvas.Aa()) / 2 : this.J.b = 0;
            this.ct(!0);
            a = this.canvas.Ga();
            b = this.canvas.Aa();
            c = new x;
            c.b = a;
            c.a = b;
            this.Om = c
        },
        Io: function(a) {
            if (!this.bq) {
                var b = z.ba(this.parent, ab).bx ? 19 : (a - 1) % 20,
                    c = this.Ec();
                this.canvas.N(0);
                this.canvas.O(0);
                pa.pf(this.canvas);
                var d = I.Ep(b, I.Df(I.Fc(a)));
                a = this.canvas;
                var e = d.a;
                b = new x;
                b.b = d.b;
                b.a = e;
                d = new x;
                d.b = 0;
                d.a = 0;
                a = a.$f(b, d);
                this.J.b = c.b / 2 - a.b;
                this.J.a = c.a / 2 - a.a;
                this.yt();
                this.canvas.N(this.J.b | 0);
                this.canvas.O(this.J.a | 0)
            }
        },
        ct: function(a) {
            a != this.nk && (this.nk =
                a, ba.X().toggle(E(this, this.Ub), a))
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            null != this.Un && (this.J.b = this.Un(a), 0 < this.J.b && (this.J.b = 0))
        },
        ma: function(a) {
            C.prototype.ma.call(this, a);
            if (null != this.Un && (this.canvas.N(this.J.b | 0), 0 == this.J.b)) {
                this.Un = null;
                this.Vv();
                this.Vv = null;
                this.bq = !1;
                return
            }
            if (this.nk && !this.bq) {
                a = this.kh.b - this.Ye.b;
                var b = this.kh.a - this.Ye.a;
                if (this.pressed) {
                    if (10 < this.yj.i) {
                        var c = this.yj;
                        c.Ta++;
                        c.Ta == c.C && (c.Ta = 0);
                        c.i--
                    }
                    c = this.yj;
                    c.C == c.i && c.R();
                    c.f[(c.i++ + c.Ta) %
                        c.C] = a;
                    this.Ye.b += .95 * (this.kh.b - this.Ye.b);
                    this.Ye.a += .95 * (this.kh.a - this.Ye.a);
                    this.J.b += a;
                    this.J.a += b
                } else this.J.b += this.ve.b, this.J.a += this.ve.a, this.ve.b *= .9, this.ve.a *= .9;
                this.yt();
                this.canvas.N(this.J.b);
                this.canvas.O(this.J.a)
            }
        },
        Ub: function(a) {
            if (!this.Uu) switch (a.action.m) {
                case 0:
                    if (!this.nk) break;
                    this.pressed = !0;
                    var b = this.Ye,
                        c = a.y;
                    b.b = a.x;
                    b.a = c;
                    a = this.kh;
                    b = this.Ye;
                    a.b = b.b;
                    a.a = b.a;
                    this.yj.clear();
                    break;
                case 1:
                    if (!this.pressed) break;
                    this.pressed = !1;
                    b = this.kh;
                    c = a.y;
                    b.b = a.x;
                    b.a = c;
                    a = 0;
                    b = this.yj.i;
                    if (0 == b) {
                        this.ve.b = this.ve.a = 0;
                        break
                    }
                    for (c = 0; c < b;) {
                        var d = c++,
                            e = this.yj;
                        a += e.f[(d + e.Ta) % e.C]
                    }
                    a /= b;
                    this.au ? (this.ve.b = 0, this.ve.a = a) : (this.ve.b = a, this.ve.a = 0);
                    break;
                case 2:
                    this.pressed && (b = this.kh, c = a.y, b.b = a.x, b.a = c)
            }
        },
        $y: function(a, b) {
            for (var c = I.Df(a), d = 0; 20 > d;) {
                var e = d++,
                    f = 20 * (a - 1) + (e + 1);
                e = I.Ep(e, c);
                this.V(new pb(f, e, this.canvas, b))
            }
        },
        yt: function() {
            var a = this.Ec(),
                b = this.J.b,
                c = -(this.Om.b - a.b);
            this.J.b = b < c ? c : 0 < b ? 0 : b;
            b = this.J.a;
            a = -(this.Om.a - a.a);
            this.J.a = b < a ? a : 0 < b ? 0 : b
        },
        Ec: function() {
            return M.ra.window.sd()
        },
        l: Ca
    });
    Le.g = "59";
    Le.prototype = {
        Qa: function() {
            var a = M.ra;
            a.Da(this.map);
            a.Qa(this.Ih);
            a.Qa(this.Mj);
            a.Qa(this.Mr);
            a.Qa(this.ts)
        },
        sp: function() {
            var a = [];
            a.push(this.map);
            a = a.concat(this.Mr);
            a = a.concat(this.ts);
            a = a.concat(this.Ih);
            return a = a.concat(this.Mj)
        },
        l: Le
    };
    Ke.g = "5A";
    Ke.F = C;
    Ke.prototype = r(C.prototype, {
        D: function() {
            C.prototype.D.call(this);
            this.yc.u();
            this.Xb.u()
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            this.vb += a;
            switch (this.dh) {
                case 0:
                    this.vb > this.duration && (this.vb = 0, this.duration =
                        this.lg ? .15 : da.hc(.15, .3), this.dh++, this.Xb.I(!0));
                    break;
                case 1:
                    this.vb > this.duration && (this.Xb.I(!1), this.dh = this.vb = 0, this.duration = (this.lg = this.lg ? !1 : da.tn()) ? .3 : da.hc(3.5, 6.5))
            }
        },
        l: Ke
    });
    Ra.g = "5B";
    Ra.F = C;
    Ra.prototype = r(C.prototype, {
        jA: function(a, b) {
            b = wa.get(b);
            a.getContext("2d", null).drawImage(b.ib, 0, 0)
        },
        nA: function(a, b) {
            var c = I.hB(b),
                d = I.Df(b);
            b = 20 * (b - 1) + 1;
            var e = v.level;
            this.Te && --e;
            a = a.getContext("2d", null);
            var f = c[0],
                g = "rgb(" + (f & 255) + "," + (f >> 8 & 255) + "," + (f >> 16 & 255) + ")";
            f = c[1];
            c = "rgb(" + (f & 255) +
                "," + (f >> 8 & 255) + "," + (f >> 16 & 255) + ")";
            a.lineWidth = 10;
            for (f = 0; 19 > f;) {
                var h = f++;
                a.beginPath();
                a.strokeStyle = b < e ? c : g;
                ++b;
                var l = [];
                I.iu(h, d).yw(l, 1);
                h = 0;
                var y = l.length;
                for (a.moveTo(l[h++], l[h++]); h < y;) a.lineTo(l[h++], l[h++]);
                a.stroke()
            }
        },
        kA: function(a, b, c) {
            c = wa.get(c);
            var d = R.Ob("candy_", 0, c.wf.Zm - 1);
            b = I.OA(b);
            for (var e = 0, f = d.length; e < f;) {
                var g = e++,
                    h = d[g],
                    l = c.wf.Km,
                    y = b[2 * g];
                g = b[2 * g + 1];
                h = (null != va[h] ? l.Cf(h) : l.G[h]).Tr;
                a.getContext("2d", null).drawImage(be.px(c.ib), h.b, h.a, h.c, h.d, y, g, h.c, h.d)
            }
        },
        pA: function(a,
            b, c) {
            b = I.xp(b);
            var d = 160,
                e = 220,
                f = 610,
                g = 290;
            null == g && (g = -1);
            null == f && (f = -1);
            null == e && (e = 1);
            null == d && (d = 1);
            var h = new w;
            h.b = d;
            h.a = e;
            h.c = f;
            h.d = g;
            a = new ca(a, c, -1, !1);
            a.Wb(h);
            a.qa(b);
            a.Bb();
            a.eb(0, 0);
            this.V(a)
        },
        mA: function(a, b, c) {
            for (var d = I.Df(b), e = 0; 20 > e;) {
                var f = e++,
                    g = 20 * (b - 1) + (f + 1);
                if (g <= v.level) {
                    var h = f;
                    f = I.aB(h, d);
                    var l = 60;
                    19 == h && (l = 100);
                    h = f.b - l;
                    l = f.a;
                    var y = f.b,
                        k = f.a + 50;
                    null == k && (k = -1);
                    null == y && (y = -1);
                    null == l && (l = 1);
                    null == h && (h = 1);
                    f = new w;
                    f.b = h;
                    f.a = l;
                    f.c = y;
                    f.d = k;
                    h = new ca(a, c, -1, !1);
                    h.Wb(f);
                    h.qa(null ==
                        g ? "null" : "" + g);
                    h.Bb();
                    h.eb(1, 0);
                    this.V(h)
                }
            }
        },
        l: Ra
    });
    I.g = "5C";
    I.Fc = function(a) {
        return Math.ceil(a / 20) | 0
    };
    I.gu = function(a) {
        return (new Le(I.Fc(a))).sp()
    };
    I.th = function(a) {
        return fa.Ia(I.getData(), "distribution")[2 * (a - 1)] - 1
    };
    I.Df = function(a) {
        return fa.Ia(I.getData(), "distribution")[2 * (a - 1) + 1] - 1
    };
    I.xp = function(a) {
        return xa.translate([k.i49, k.i38, k.i27, k.i16, k.i5, k.i3, k.i2, k.i1, k.i0, k.i48, k.i47, k.i46, k.i45, k.i44, k.i43, k.i42, k.i41, k.i40, k.i39, k.i37, k.i36, k.i35, k.i34, k.i33, k.i32, k.i31, k.i30, k.i29, k.i28, k.i26,
            k.i25, k.i24, k.i23, k.i22, k.i21, k.i20, k.i19, k.i18, k.i17, k.i15, k.i14, k.i13, k.i12, k.i11, k.i10, k.i9, k.i8, k.i7, k.i6, k.i4
        ][a - 1])
    };
    I.OA = function(a) {
        var b = fa.Ia(I.getData(), "candy"),
            c = I.th(a);
        a = I.Df(a);
        return b[4 * c + a]
    };
    I.Ep = function(a, b) {
        var c = fa.Ia(I.getData(), "paths")[b];
        19 == a ? (b = c[8 * (a - 1) + 6], a = c[8 * (a - 1) + 7]) : (b = c[8 * a], a = c[8 * a + 1]);
        c = new x;
        c.b = b;
        c.a = a;
        return c
    };
    I.aB = function(a, b) {
        b = fa.Ia(I.getData(), "numbers")[b];
        var c = b[2 * a + 1],
            d = new x;
        d.b = b[2 * a];
        d.a = c;
        return d
    };
    I.iu = function(a, b) {
        b = fa.Ia(I.getData(), "paths")[b];
        a *= 8;
        return new Kf(b[a], b[a + 1], b[a + 2], b[a + 3], b[a + 4], b[a + 5], b[a + 6], b[a + 7])
    };
    I.hB = function(a) {
        var b = fa.Ia(I.getData(), "colors"),
            c = b[2 * I.th(a)];
        a = b[2 * I.th(a) + 1];
        return [G.parseInt(c), G.parseInt(a)]
    };
    I.getData = function() {
        null == I.data && (I.data = JSON.parse(m.getData(16)));
        return I.data
    };
    pb.g = "5D";
    pb.F = C;
    pb.prototype = r(C.prototype, {
        enable: function() {
            this.level > v.level || ba.X().Ma(E(this, this.Ub))
        },
        disable: function() {
            this.level > v.level || ba.X().detach(E(this, this.Ub))
        },
        D: function() {
            C.prototype.D.call(this);
            this.group.u();
            ba.X().detach(E(this, this.Ub))
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            null != this.nl && (a = this.nl, a.Me(a.ie + .25));
            this.pressed && this.release()
        },
        Ub: function(a) {
            if (a.action == oa.i0) {
                if (!this.selected) {
                    var b = this.B,
                        c = a.y,
                        d = new x;
                    d.b = a.x;
                    d.a = c;
                    b.kf(d) && (this.B.Sa(O.sh()), b = this.group, c = new x, c.b = 0, c.a = 0, d = new x, d.b = 0, d.a = 0, b.$f(c, d), this.nn.b = a.x | 0, this.nn.a = a.y | 0, this.pressed = !0, this.group.gb().Lc(1.2, 1, L.Kd(.5)))
                }
            } else a.action == oa.i1 && !this.selected && this.pressed && (this.pressed = !1, this.release() ||
                (this.selected = !0, z.ba(this.parent, Ca).Pg(!1), this.B.bb("waypoint_2a"), a = new B(this.group, 167, "waypoint_2b"), a.vh().add(), a.Ha(), a.ka(), a.An(), u.play(u.yl), this.group.gb().Lc(1, 1, L.Kd(.25)), this.ki(31, J.Fa(["level", this.level]))))
        },
        mD: function(a) {
            M.ra.Qa([227, 226]);
            this.ll = new B(this.group, 226, "sparkle_burst/0051");
            this.ll.Ha();
            this.ll.ka();
            this.ll.$k();
            this.ll.M(.75);
            this.ll.Za().play(pb.ax, null, 0, function() {
                sb.Xd(a, 1)
            });
            this.B.M(.5);
            this.B.gb().Lc(1, 1, L.Kd(.25));
            u.play(u.lo)
        },
        release: function() {
            var a =
                ba.X().Gi(),
                b = a.a,
                c = new x;
            c.b = a.b;
            c.a = b;
            b = this.nn.b - a.b;
            a = this.nn.a - a.a;
            return 900 < b * b + a * a || !this.B.kf(c) ? (this.group.gb().Lc(1, 1, L.Kd(.5)), this.pressed = !1, !0) : !1
        },
        l: pb
    });
    Je.g = "5E";
    Je.F = C;
    Je.prototype = r(C.prototype, {
        ca: function() {
            C.prototype.ca.call(this);
            Ya.X().Ma(E(this, this.Kk))
        },
        D: function() {
            C.prototype.D.call(this);
            Ya.X().detach(E(this, this.Kk))
        },
        Kk: function(a) {
            a.Zd && 27 == a.code && ya.X().Kj(32)
        },
        l: Je
    });
    O.g = "~scene.Scene";
    O.log = function(a) {
        ya.log("  " + a)
    };
    O.sh = function() {
        null == O.root && (O.root = new aa("scene"),
            new aa("bg", O.root), new aa("fg", O.root));
        return O.root
    };
    O.vu = function(a) {
        var b = Object.create(a.prototype);
        b.Z = new $b(null, null);
        a = [];
        var c = 0;
        for (b = b.Qc(); c < b.length;) {
            var d = b[c];
            ++c;
            m.jx(d) && a.push(d)
        }
        return a
    };
    O.F = C;
    O.prototype = r(C.prototype, {
        D: function() {
            C.prototype.D.call(this);
            this.state != X.i0 && (this.fh(X.i7), null != this.canvas && (pa.mp(this.canvas, !0), this.canvas = this.content = this.md = this.gc = null), this.Z = null);
            this.remove()
        },
        Cd: function(a, b, c) {
            this.QE(a, c, b) || ya.X().Cd(this, a, b, c)
        },
        finish: function(a) {
            ya.X().finish(this,
                a)
        },
        Oa: function() {
            this.fh(X.i1);
            this.canvas = new aa(this.name);
            this.md = new aa("bg", this.canvas);
            this.md.I(!1);
            this.content = new aa("content", this.canvas);
            this.content.I(!1);
            this.gc = new aa("fg", this.canvas);
            this.gc.I(!1)
        },
        Va: function() {
            O.log("onStart " + this.name);
            this.fh(X.i2);
            this.show();
            this.Bj = 0
        },
        Iq: function() {
            O.log("onRestart " + this.name);
            this.fh(X.i4);
            this.show()
        },
        Pa: function() {
            O.log("onResume " + this.name);
            this.fh(X.i3);
            this.hr = !1;
            if (this.Z.wa("loaderInfo")) {
                this.hr = !0;
                var a = this.Z.get("loaderInfo");
                a.loaded && this.Cd(a.OE, a.NE, a.PE)
            }
        },
        yd: function() {
            O.log("onPause " + this.name);
            this.fh(X.i5)
        },
        le: function() {
            O.log("onStop " + this.name);
            this.fh(X.i6);
            this.nm()
        },
        fh: function(a) {
            this.state = a
        },
        show: function() {
            null == this.canvas.Lb() && (this.parent == ya.X() ? z.ba(O.sh().de("fg"), aa).appendChild(this.canvas) : z.ba(this.parent, O).canvas.appendChild(this.canvas));
            this.content.I(this.md.I(this.gc.I(!0)))
        },
        nm: function() {
            var a = this.$A();
            null != a && a.Ah() ? this.content.I(this.md.I(this.gc.I(!1))) : this.canvas.remove()
        },
        Qc: function() {
            return []
        },
        fm: function() {
            if (null != O.pg) return O.pg;
            O.pg = new zc(4, function(a) {
                var b = m.Bf(a.url);
                0 > b || m.setData(b, a.data, a.Gb)
            }, "v=1.2.37");
            O.pg.tag = "scene";
            return O.pg
        },
        QE: function(a, b, c) {
            var d = Object.create(a.prototype);
            d.Z = new $b(this, b);
            var e = d.dB();
            d.Z = null;
            return 0 < e.length ? (O.log("spawn loader in " + this.name + " for " + Sc.$j(a)), this.Cd(d.ru(), !0, J.Fa(["loaderInfo", new hf(a, b, c, e)])), !0) : !1
        },
        dB: function() {
            for (var a = [], b = 0, c = this.Qc(); b < c.length;) {
                var d = c[b];
                ++b;
                m.Xp(d) && null == m.nh() ||
                    m.mm(d) || a.push(d)
            }
            return a
        },
        Ah: function() {
            return !0
        },
        mk: function() {
            return !1
        },
        SH: function() {
            return !1
        },
        ru: function() {
            return Ib
        },
        $A: function() {
            for (var a = [this], b = null; 0 < a.length;)
                for (var c = a.pop().firstChild; null != c;) {
                    if (c instanceof O) {
                        b = c;
                        a.push(b);
                        break
                    }
                    c = c.H
                }
            return b
        },
        pp: function() {
            for (var a = this.firstChild; null != a;) {
                if (a instanceof O) return a;
                a = a.H
            }
            return null
        },
        l: O
    });
    ia.g = "5F";
    ia.F = O;
    ia.prototype = r(O.prototype, {
        handle: function(a) {
            O.prototype.handle.call(this, a);
            switch (a.type) {
                case 1:
                    this.resize();
                    break;
                case 5:
                    a.j |= 1;
                    this.gd(a.get("name"), !0);
                    break;
                case 28:
                    a.j |= 1;
                    var b = a.get("name");
                    a = a.get("on");
                    this.gd(b, a);
                    break;
                case 32:
                    this.xo && this.state == X.i3 && this.Ke()
            }
        },
        Va: function() {
            O.prototype.Va.call(this);
            this.rd();
            na.ge(na.filter(this, function(a) {
                return a instanceof Aa
            }), function(a) {
                z.ba(a, Aa).reset()
            })
        },
        le: function() {
            O.prototype.le.call(this)
        },
        Pa: function() {
            O.prototype.Pa.call(this);
            this.hr || this.ae(!0)
        },
        yd: function() {
            O.prototype.yd.call(this);
            this.ae(!1)
        },
        resize: function() {
            this.rd()
        },
        ru: function() {
            return ed
        },
        gd: function() {},
        ae: function(a) {
            for (var b = 0, c = this.children(); b < c.length;) {
                var d = c[b];
                ++b;
                d instanceof Aa && z.ba(d, Aa).Td(a);
                d instanceof ad && z.ba(d, ad).Td(a)
            }
            this.xo = a
        },
        rd: function() {
            this.content.M(1);
            var a = this.content.Ga(),
                b = this.content.Aa(),
                c = this.uh(),
                d = 2 * -(c.c - c.b) / 100,
                e = 2 * -(c.d - c.a) / 100;
            c.b -= d;
            c.a -= e;
            c.c += d;
            c.d += e;
            e = (c.c - c.b) / a;
            d = (c.d - c.a) / b;
            e <= d ? (d = c.b, b = c.a + (c.d - c.a - b * e) / 2, c = d + (c.c - c.b)) : (e = a * d, d = c.b + (c.c - c.b - e) / 2, b = c.a, c = d + e);
            this.content.M((c - d) / a);
            this.content.N(d);
            this.content.O(b)
        },
        IH: function() {
            return 2
        },
        uh: function() {
            var a = M.ra.window.rh(),
                b = new w;
            b.b = 1;
            b.a = 1;
            b.c = -1;
            b.d = -1;
            b.b = a.b;
            b.a = a.a;
            b.c = a.b + a.c;
            b.d = a.a + a.d;
            return b
        },
        qb: function(a) {
            u.play(a)
        },
        Kg: function(a, b) {
            this.qb(u.Ms);
            this.Cd(a, !0, b)
        },
        Fr: function(a, b) {
            this.qb(u.Ms);
            this.Cd(a, !0, b)
        },
        OH: function() {},
        Mt: function() {
            this.pp() instanceof Md && this.pp().finish();
            this.xo = !1
        },
        Ke: function() {},
        Da: function(a) {
            M.ra.Da(a)
        },
        Qa: function(a) {
            M.ra.Qa(a)
        },
        gz: function(a, b) {
            M.ra.Da(a, b)
        },
        jh: function(a) {
            M.ra.bm(a)
        },
        Ec: function() {
            return M.ra.window.sd()
        },
        Lp: function() {
            for (var a =
                    this.parent; null != a && !(a instanceof yb);) a = a.parent;
            return null != a && a instanceof yb ? null != bb.X : !1
        },
        translate: function(a) {
            return xa.translate(a)
        },
        l: ia
    });
    Aa.g = "60";
    Aa.F = C;
    Aa.prototype = r(C.prototype, {
        D: function() {
            C.prototype.D.call(this);
            this.group.u();
            this.Td(!1)
        },
        reset: function() {
            this.group.gb().stop(4);
            this.group.M(1)
        },
        Wb: function(a) {
            this.rect.b = a.b;
            this.rect.a = a.a;
            this.rect.c = a.c - a.b;
            this.rect.d = a.d - a.a;
            this.xe.Ne(this.rect.c);
            this.xe.re(this.rect.d);
            this.group.N(this.rect.b);
            this.group.O(this.rect.a);
            this.group.ka()
        },
        MH: function() {
            return this.Hh
        },
        I: function(a) {
            this.Hh = a;
            this.group.I(a);
            return a
        },
        uB: function() {
            return this.vk
        },
        Td: function(a) {
            this.vk = a;
            a || (this.selected = this.pressed = !1);
            ba.X().toggle(E(this, this.Ub), a);
            return a
        },
        hE: function(a, b, c, d, e) {
            this.Bh = new Xa(this.group, d);
            this.Bh.el(this.rect.c * c.b, this.rect.d * c.a);
            this.Bh.qa(a);
            this.Bh.al(-1);
            b ? this.Bh.In() : this.Bh.vr();
            this.Bh.Ij(10, 200);
            d = this.Bh;
            var f = 0,
                g = -10,
                h = this.rect.c,
                l = this.rect.d;
            null == l && (l = -1);
            null == h && (h = -1);
            null == g && (g = 1);
            null == f && (f = 1);
            var y = new w;
            y.b = f;
            y.a = g;
            y.c = h;
            y.d = l;
            d.eb(y, 0, 0);
            null != e && (this.Ch = new Xa(this.group, e), this.Ch.el(this.rect.c * c.b, this.rect.d * c.a), this.Ch.qa(a), this.Ch.al(-1), b ? this.Ch.In() : this.Ch.vr(), this.Ch.Ij(10, 200), a = this.Ch, c = b = 0, e = this.rect.c, d = this.rect.d, null == d && (d = -1), null == e && (e = -1), null == c && (c = 1), null == b && (b = 1), f = new w, f.b = b, f.a = c, f.c = e, f.d = d, a.eb(f, 0, 0));
            this.group.ka()
        },
        Ub: function(a) {
            if (this.vk && !this.selected && this.Hh && this.Cl)
                if (a.action == oa.i0) {
                    if (!this.pressed && !this.selected) {
                        var b =
                            this.xe,
                            c = a.y,
                            d = new x;
                        d.b = a.x;
                        d.a = c;
                        b.kf(d) && (this.pressed = !0, this.group.gb().Lc(1.2, 1, L.Kd(.5)), u.play(u.yl))
                    }
                } else a.action == oa.i1 && this.pressed && !this.selected && (b = this.xe, c = a.y, d = new x, d.b = a.x, d.a = c, b.kf(d) ? (this.group.gb().Lc(1, 1, L.Kd(.25)), this.selected = !0, this.pressed = !1, this.rF = D.time, 0 == this.Xd && this.select()) : (this.group.gb().Lc(1, 1, L.Kd(.25)), this.pressed = !1))
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            this.Cl || (this.cp += a, .5 < this.cp && (this.Cl = !0, this.selected = !1));
            this.selected &&
                D.time - this.rF > this.Xd && this.select()
        },
        select: function() {
            this.cp = 0;
            this.selected = this.Cl = !1;
            this.ki(5, J.Fa(["name", this.name]))
        },
        l: Aa
    });
    N.g = "61";
    N.F = ia;
    N.prototype = r(ia.prototype, {
        resize: function() {
            ia.prototype.resize.call(this);
            var a = this.Ec();
            null != N.background && this.bt(a);
            if (null != this.gc.de("solid")) {
                var b = this.gc.de("solid"),
                    c = .00392156862745098 * Sa.Kc(255),
                    d = .00392156862745098 * Sa.Kc(255),
                    e = .00392156862745098 * Sa.Kc(255),
                    f = .00392156862745098 * Sa.Kc(255);
                null == f && (f = 1);
                null == e && (e = 0);
                null == d && (d =
                    0);
                null == c && (c = 0);
                var g = new w;
                g.b = c;
                g.a = d;
                g.c = e;
                g.d = f;
                b.kj(g, a.b, a.a)
            }
        },
        xt: function(a, b) {
            this.Cd(a, !1, b)
        },
        Xy: function() {
            this.Da(225);
            var a = O.sh().de("bg");
            N.background = new aa(null, a);
            N.background.node.name = "bg-container";
            new B(N.background, 225);
            N.background.An();
            this.bt(this.Ec())
        },
        uw: function() {
            null != N.background && (N.background.er(), N.background.u(), N.background = null)
        },
        bt: function(a) {
            N.background.M(1);
            var b = a.b / N.background.Ga(),
                c = a.a / N.background.Aa();
            b < c ? (N.background.M(c), N.background.N(-(N.background.Ga() -
                a.b) / 2), N.background.O(0)) : (N.background.M(b), N.background.N(0), N.background.O(-(N.background.Aa() - a.a) / 2))
        },
        Fj: function() {
            var a = this.gc.de("solid");
            if (null == a) {
                a = this.Ec();
                var b = new B(this.gc),
                    c = .00392156862745098 * Sa.Kc(255),
                    d = .00392156862745098 * Sa.Kc(255),
                    e = .00392156862745098 * Sa.Kc(255),
                    f = .00392156862745098 * Sa.Kc(255);
                null == f && (f = 1);
                null == e && (e = 0);
                null == d && (d = 0);
                null == c && (c = 0);
                var g = new w;
                g.b = c;
                g.a = d;
                g.c = e;
                g.d = f;
                a = b.kj(g, a.b, a.a);
                a.node.name = "solid"
            }
        },
        vn: function() {
            var a = this.gc.de("solid");
            null !=
                a && a.u()
        },
        l: N
    });
    gc.g = "62";
    gc.F = N;
    gc.prototype = r(N.prototype, {
        Pa: function() {
            N.prototype.Pa.call(this);
            if (!this.hr) {
                var a = this.Z.get("oldLevel"),
                    b = this.Z.get("newLevel"),
                    c = I.Fc(a),
                    d = I.Fc(b);
                if (I.th(c) != I.th(d) || I.Df(c) != I.Df(d))
                    for (c = 0, a = I.gu(a); c < a.length;) d = a[c], ++c, this.jh(d);
                b = J.Fa(["level", b]);
                this.Z.wa("tease") && J.set(b, "tease", !0);
                this.Cd(ab, !1, b)
            }
        },
        rd: function() {},
        l: gc
    });
    S.g = "63";
    S.F = ia;
    S.prototype = r(ia.prototype, {
        Ah: function() {
            return !1
        },
        Qc: function() {
            var a = [];
            a = a.concat([251, 250, 249]);
            a = a.concat([248,
                247
            ]);
            a = a.concat([184, 183, 182, 181]);
            this.Gr() && a.push(175);
            a.push(180);
            return a
        },
        rd: function() {
            this.content.M(1);
            var a = this.content.Ga(),
                b = this.content.Aa(),
                c = this.uh();
            a = (c.c - c.b) / a;
            b = (c.d - c.a) / b;
            this.content.Ha();
            this.content.ka();
            this.content.N(c.b + (c.c - c.b) / 2);
            this.content.O(c.a + (c.d - c.a) / 2);
            this.content.M(Math.min(a, b));
            c = M.ra.window.sd();
            b = this.md.de("solid");
            a = .00392156862745098 * Sa.Kc(0);
            var d = .00392156862745098 * Sa.Kc(0),
                e = .00392156862745098 * Sa.Kc(0),
                f = .00392156862745098 * Sa.Kc(255);
            null == f &&
                (f = 1);
            null == e && (e = 0);
            null == d && (d = 0);
            null == a && (a = 0);
            var g = new w;
            g.b = a;
            g.a = d;
            g.c = e;
            g.d = f;
            b.kj(g, c.b, c.a)
        },
        uh: function() {
            var a = ia.prototype.uh.call(this),
                b = a.d - a.a;
            this.Lp() && (bb.X.jb.ym || (a = bb.X.o.viewport.Sa()));
            a.a += 2 * b / 100 | 0;
            a.d -= 2 * b / 100 | 0;
            a.b += 2 * b / 100 | 0;
            a.c -= 2 * b / 100 | 0;
            return a
        },
        Ke: function() {
            this.close(J.Fa(["back", !0]))
        },
        close: function(a) {
            this.qb(u.Ay);
            this.finish(a)
        },
        lh: function() {
            var a = M.ra;
            a.Da(251, 249);
            a.Da(250, 249);
            for (var b = 0, c = [184, 183, 182, 181]; b < c.length;) {
                var d = c[b];
                ++b;
                a.Da(d)
            }
            a.Da(180);
            this.Gr() && a.Da(175);
            a = a.window.sd();
            b = new B(this.md);
            c = .00392156862745098 * Sa.Kc(0);
            d = .00392156862745098 * Sa.Kc(0);
            var e = .00392156862745098 * Sa.Kc(0),
                f = .00392156862745098 * Sa.Kc(255);
            null == f && (f = 1);
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            var g = new w;
            g.b = c;
            g.a = d;
            g.c = e;
            g.d = f;
            b.kj(g, a.b, a.a).node.name = "solid";
            return new B(this.content, 180)
        },
        fi: function(a, b, c) {
            return this.$g(a, b, !1, c)
        },
        $g: function(a, b, c, d) {
            var e = new Me(this.content, 251, 250, 0, c),
                f = b.b,
                g = b.a,
                h = b.b + b.c;
            b = b.a + b.d;
            null == b && (b = -1);
            null ==
                h && (h = -1);
            null == g && (g = 1);
            null == f && (f = 1);
            var l = new w;
            l.b = f;
            l.a = g;
            l.c = h;
            l.d = b;
            e = e.Wb(l);
            null == a || c || (e.qa(a), e.Bb(), e.eb(0, 0));
            this.V(e);
            e.name = d;
            return e
        },
        uf: function(a, b, c) {
            b = new Aa(this.content, b, 184);
            if (null != c) {
                var d = new x;
                d.b = .65;
                d.a = .4;
                b.hE(c, !1, d, 247)
            }
            this.V(b);
            b.name = a;
            return b
        },
        ei: function(a, b) {
            var c = new B(this.content, 175);
            c.N(537);
            c.O(128);
            b = new Aa(this.content, b, 181);
            this.V(b);
            b.name = a;
            return b
        },
        Gr: function() {
            return !0
        },
        l: S
    });
    Jb.g = "~scene.SceneTransitionEffect";
    Jb.Zb = !0;
    Jb.prototype = {
        l: Jb
    };
    Ie.g = "64";
    Ie.ga = [Jb];
    Ie.prototype = {
        cd: function(a, b, c) {
            return 0 == c ? .75 : .5
        },
        yg: function(a, b, c) {
            switch (c) {
                case 0:
                    null != a && a.content.na(1);
                    this.zn = .1;
                    this.kr = b.content.kb;
                    b.content.na(0);
                    b.md.na(.1);
                    break;
                case 1:
                    a.content.na(1), null != b && b.content.na(1), this.zn = a.content.kb, this.kr = .8 * a.content.kb
            }
        },
        Mh: function(a, b, c, d) {
            switch (c) {
                case 0:
                    a = this.zn;
                    b.content.na(a + (1 - a) * this.Wl(d));
                    a = this.zn;
                    b.content.M(a + (this.kr - a) * this.Sj(d));
                    b.md.na(.4 * Math.min(1, 2 * d));
                    break;
                case 1:
                    a.content.na(1 - this.Wl(d)), b = this.zn,
                        a.content.M(b + (this.kr - b) * this.Wl(d)), a.md.na(hb.map(1 - this.Wl(d), 1, 0, .4, 0))
            }
        },
        Lh: function() {},
        l: Ie
    };
    La.g = "65";
    La.F = ia;
    La.prototype = r(ia.prototype, {
        D: function() {
            ia.prototype.D.call(this);
            ba.X().detach(E(this, this.Ub))
        },
        Ah: function() {
            return !1
        },
        Qc: function() {
            return [15]
        },
        rd: function() {
            this.content.M(1);
            var a = this.content.Ga();
            this.content.Aa();
            var b = M.ra.window.rh();
            if (this.Lp()) {
                var c = bb.X.o.viewport.Sa();
                if (0 == c.b || c.c == b.b + b.c) b = .05 * (c.c - c.b) | 0, c.b += b, c.c -= b;
                b = new Lc;
                b.b = 0;
                b.a = 0;
                b.c = 0;
                b.d = 0;
                b.b = c.b |
                    0;
                b.a = c.a | 0;
                b.c = c.c - c.b | 0;
                b.d = c.d - c.a | 0
            }
            this.content.M(b.c / a);
            this.content.N(b.b);
            this.content.O(b.a + (b.d - this.content.Aa()) / 2)
        },
        uh: function() {
            return this.Lp() ? bb.X.o.viewport.Sa() : ia.prototype.uh.call(this)
        },
        Va: function() {
            ia.prototype.Va.call(this);
            ba.X().Ma(E(this, this.Ub))
        },
        Pa: function() {
            ia.prototype.Pa.call(this);
            this.time = 0;
            this.gh && this.close()
        },
        yd: function() {
            ia.prototype.yd.call(this);
            ba.X().detach(E(this, this.Ub))
        },
        update: function(a) {
            ia.prototype.update.call(this, a);
            !this.gh && 0 < this.Em && this.time >
                this.Em && !this.gh && (this.qf = !1, this.close())
        },
        Ke: function() {
            this.close()
        },
        close: function() {
            this.finish()
        },
        Ub: function(a) {
            a.action == oa.i0 && (a.gw.detach(a.Ea), this.state == X.i3 ? this.close() : this.gh = !0)
        },
        l: La
    });
    Md.g = "66";
    Md.F = La;
    Md.prototype = r(La.prototype, {
        Va: function() {
            La.prototype.Va.call(this);
            this.Vr.qa(this.translate(k.i116));
            this.Vr.Bb();
            this.Vr.eb(0, 0);
            this.Em = 1.5;
            ba.X().enabled = !1
        },
        le: function() {
            La.prototype.le.call(this);
            ba.X().enabled = !0
        },
        Oa: function() {
            La.prototype.Oa.call(this);
            this.Da(15);
            this.B = new B(this.content, 15);
            var a = 100,
                b = 100,
                c = 800,
                d = 250;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            var e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.Vr = this.Ol(e, !0)
        },
        Ol: function(a, b) {
            var c = a.b,
                d = a.a,
                e = a.b + a.c,
                f = a.a + a.d;
            null == f && (f = -1);
            null == e && (e = -1);
            null == d && (d = 1);
            null == c && (c = 1);
            a = new w;
            a.b = c;
            a.a = d;
            a.c = e;
            a.d = f;
            b = new ca(this.content, 247, 0, b);
            b.Wb(a);
            this.V(b);
            return b
        },
        Ke: function() {},
        l: Md
    });
    Ld.g = "67";
    Ld.F = S;
    Ld.prototype = r(S.prototype, {
        Qc: function() {
            var a = S.prototype.Qc.call(this);
            a.push(179);
            return a
        },
        Oa: function() {
            S.prototype.Oa.call(this);
            this.lh();
            M.ra.Da(179);
            (new B(this.content, 179)).node.name = "glitter";
            var a = 547,
                b = 137,
                c = 93,
                d = 93;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            var e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.ei("btn_x", e);
            a = this.translate(k.i108);
            b = 71;
            c = 230;
            d = 502;
            e = 102;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.fi(a, f, "headline");
            a = 162;
            b = 370;
            c = 318;
            d = 400;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null ==
                a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            a = this.$g(null, e, !0, "body");
            a.qa(this.translate(k.i110), 100);
            a.Yf();
            a = 96;
            b = 816;
            c = 451;
            d = 180;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.uf("btn_ok", e, this.translate(k.i109))
        },
        Va: function() {
            S.prototype.Va.call(this);
            V.ag("SCREEN_OTHER", "all_levels_completed")
        },
        Pa: function() {
            S.prototype.Pa.call(this);
            this.qb(u.ko)
        },
        gd: function(a) {
            switch (a) {
                case "btn_ok":
                case "btn_x":
                    this.close(J.Fa(["backToMap", !0]))
            }
        },
        l: Ld
    });
    yb.g = "68";
    yb.F = N;
    yb.prototype = r(N.prototype, {
        mk: function() {
            return !0
        },
        Qc: function() {
            var a = [];
            a = a.concat([199, 198, 197, 196, 195, 194, 193, 192, 191, 190]);
            a = a.concat([201, 200]);
            a = a.concat([241, 240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226]);
            a = a.concat([246, 245]);
            a = a.concat([244, 243]);
            a = a.concat([189, 188]);
            a = a.concat([205, 204]);
            a = a.concat([184, 183, 182, 181]);
            a.push(186);
            a.push(180);
            a.push(15);
            a.push(203);
            a.push(202);
            a.push(254);
            a.push(256);
            v.Ze && (a = a.concat(O.vu(xb)));
            var b = ta.getData(v.level).Gb.sl;
            "" != b && (b = xb.zp(b), m.ee(b), a.push(b));
            b = v.level;
            this.Z.wa("level") && (b = this.Z.get("level"));
            b = new Sd(b);
            a.push(b.md);
            a.push(b.km);
            return a
        },
        bA: function() {
            var a = this.content,
                b = 0,
                c = 0,
                d = 100,
                e = 100;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            a = new Aa(a, f, 200, "ui_pause_button");
            a.Xd = 0;
            a.name = "btn_pause";
            this.V(a);
            this.Hu()
        },
        Oa: function() {
            N.prototype.Oa.call(this);
            this.v = new bb(M.Zk);
            this.v.ua(this.content);
            this.v.Ma(this);
            this.V(this.v);
            for (var a = this.fm(),
                    b = 0, c = [251, 250, 249]; b < c.length;) {
                var d = c[b];
                ++b;
                a.load(m.ee(d))
            }
            a.load(m.ee(177));
            a.load(m.ee(14));
            a.load(m.ee(178))
        },
        Va: function() {
            var a = this;
            N.prototype.Va.call(this);
            V.ag("SCREEN_LEVEL");
            this.Z.wa("start") || this.Z.wa("restart");
            this.eu ? (this.jk(), this.rd()) : this.v.fz(function() {
                a.eu = !0;
                a.bA();
                a.jk();
                a.rd();
                a.Bj--
            })
        },
        Pa: function() {
            N.prototype.Pa.call(this);
            this.uw();
            var a = this.Z.caller,
                b = this.Z.Af;
            a instanceof fd && (this.il = !1);
            J.ad(b, "restart") && (this.il = !0);
            J.ad(b, "map") && (this.il = !1);
            if (J.ad(b,
                    "backToMap")) {
                window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {levelName: "", reason: "quit"});
                a = J.Fa(["level", v.level]), J.ad(b, "stageComplete") && J.set(a, "stageComplete", !0), J.ad(b, "levelPass") && J.set(a, "levelPass", !0), J.ad(b, "firstPass") && J.set(a, "firstPass", !0), J.ad(b, "secondTry") && J.set(a, "secondTry", !0), J.ad(b, "level") && J.set(a, "level", J.get(b, "level")), this.Cd(ab, !1, a);
            }
            else if (a instanceof Bc) {
                "" == this.v.td.Gb.sl || this.il ? (this.Xw(), this.v.Sc = !0, this.v.resume(), this.El(!0)) : (this.Kg(xb, J.Fa(["tutorialId", this.v.td.Gb.sl])), this.il = !1);
            }
            else if (a instanceof xb) {
                this.Xw(), this.v.Sc = !0, this.v.resume(), this.El(!0);
            }
            else if (J.ad(b, "restart")) {
                window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {levelName: "", reason: "quit"});
                this.v.Sc = !1, this.v.IB();
            }
            else if (J.ad(b, "start")) this.Fr(Bc, J.Fa(["meta", this.v.td.Gb, "level", this.bd])), this.v.Sc = !1, this.v.Uw();
            else if (J.ad(b, "resume") || a instanceof Md) this.v.resume(), this.El(!0)
        },
        yd: function() {
            N.prototype.yd.call(this);
            this.El(!1)
        },
        handle: function(a) {
            N.prototype.handle.call(this, a);
            switch (a.type) {
                case 12:
                    this.Hu();
                    break;
                case 14:
                    this.Kg(fd, J.Fa(["level", this.bd, "numStarsEarned", this.v.Je, "score", this.v.Sd]));
                    break;
                case 15:
                    this.Kg(gd,
                        J.Fa(["level", this.bd]));
                    break;
                case 18:
                    this.Kg(gd, J.Fa(["level", this.bd]));
                    break;
                case 19:
                    this.jk(), this.v.Uw(), this.Fr(Bc, J.Fa(["meta", this.v.td.Gb, "level", this.bd, "restart", !0]))
            }
        },
        gd: function(a) {
            var b = this;
            "btn_pause" == a && 5 != this.v.state && (this.ae(!1), a = function() {
                var a = J.Fa(["level", b.bd]);
                b.Kg(Jd, a)
            }, V.pause().then(a, a), V.ag("SCREEN_PAUSE"))
        },
        rd: function() {
            this.v.resize();
            var a = this.Y(Aa, "btn_pause");
            null != a && a.Wb(this.v.kB())
        },
        jk: function() {
            this.Z.wa("level") && (this.bd = this.Z.get("level"));
            this.v.jk(this.bd)
        },
        El: function(a) {
            5 != this.v.state && ba.X().toggle((ua = this.v, E(ua, ua.Ub)), a)
        },
        Xw: function() {
            this.Y(Aa, "btn_pause").I(!0)
        },
        Hu: function() {
            this.Y(Aa, "btn_pause").I(!1)
        },
        l: yb
    });
    gd.g = "69";
    gd.F = S;
    gd.prototype = r(S.prototype, {
        Qc: function() {
            var a = S.prototype.Qc.call(this);
            a.push(178);
            return a
        },
        Oa: function() {
            S.prototype.Oa.call(this);
            this.lh();
            var a = 547,
                b = 137,
                c = 93,
                d = 93;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            var e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.ei("btn_x", e);
            a = this.Z.get("level");
            a = this.translate(k.i86(a));
            b = 71;
            c = 230;
            d = 502;
            e = 102;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.fi(a, f, "headline");
            this.Da(178);
            a = new B(this.content, 178);
            a.N(137);
            a.O(330);
            a.Ne(376);
            a.re(445);
            a = 107;
            b = 780;
            c = 451;
            d = 180;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.uf("btn_ok", e, this.translate(k.i87))
        },
        Va: function() {
            S.prototype.Va.call(this);
            V.ag("SCREEN_LEVELRESULT", "fail");
            var a = this.Z.get("level"),
                b = this.Y(ca, "headline");
            b.qa(this.translate(k.i86(a)));
            b.Bb();
            this.dk()
        },
        Pa: function() {
            S.prototype.Pa.call(this);
            this.dk();
            sb.Xd(E(this, this.Dr), 1)
        },
        Dr: function() {
            var a = this.Z.get("level");
            ja.xv();
            a = V.gv("level" + a, "dead");
            var b = Gc.Ww();
            Promise.all([a, b]).then(E(this, this.Hk), E(this, this.Hk))
        },
        Hk: function() {
            ja.wx();
            this.Er()
        },
        gd: function(a) {
            switch (a) {
                case "btn_ok":
                    this.close(J.Fa(["restart", "restart"]));
                    break;
                case "btn_x":
                    this.close(J.Fa(["backToMap", !0, "level", this.Z.get("level")]))
            }
        },
        Ke: function() {
            this.gd("btn_x", !0)
        },
        dk: function() {
            var a = this.Y(Aa, "btn_ok"),
                b = this.Y(Aa, "btn_x");
            a.Td(!1);
            b.Td(!1);
            a.I(!1);
            b.I(!1)
        },
        Er: function() {
            var a = this.Y(Aa, "btn_ok"),
                b = this.Y(Aa, "btn_x");
            a.Td(!0);
            b.Td(!0);
            a.I(!0);
            b.I(!0)
        },
        l: gd
    });
    Bc.g = "6A";
    Bc.F = La;
    Bc.prototype = r(La.prototype, {
        Ke: function() {
            this.close()
        },
        Oa: function() {
            La.prototype.Oa.call(this);
            this.Da(15);
            this.B = new B(this.content, 15);
            var a = 156,
                b = 120,
                c = 660,
                d = 170;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            var e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.head = this.$s(e, !1);
            a = 100;
            b = 256;
            c = 800;
            d = 115;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.body = this.$s(e, !1)
        },
        Va: function() {
            var a = this.Z.get("level"),
                b = this.Z.get("meta");
            switch (b.kc.tc) {
                case "clear_bubbles":
                    var c = k.i62;
                    break;
                case "free_targets":
                    b = b.kc.Re;
                    switch (50 <= b ? b - 50 : -1) {
                        case 1:
                            c = k.i61;
                            break;
                        case 2:
                            c = k.i60;
                            break;
                        case 3:
                            c = k.i59;
                            break;
                        default:
                            c = null
                    }
                    break;
                case "pop_bubbles":
                    switch (b.kc.Re) {
                        case 1:
                            c = k.i58;
                            break;
                        case 2:
                            c = k.i57;
                            break;
                        case 3:
                            c = k.i56;
                            break;
                        case 4:
                            c =
                                k.i55;
                            break;
                        case 5:
                            c = k.i54;
                            break;
                        case 6:
                            c = k.i53;
                            break;
                        case 7:
                            c = k.i52;
                            break;
                        default:
                            c = null
                    }
                    break;
                case "reach_score":
                    c = k.i51
            }
            b = this.translate(c);
            this.head.qa("Level " + a);
            this.head.Bb();
            this.head.eb(0, 0);
            this.body.qa(b);
            this.body.Bb();
            this.body.eb(0, 0);
            this.Z.wa("restart") || ja.ew();
            La.prototype.Va.call(this)
        },
        close: function() {
            function a() {
                b.finish()
            }
            var b = this;
            V.nC("level" + G.La(this.Z.get("level"))).then(a, a)
        },
        $s: function(a, b) {
            var c = a.b,
                d = a.a,
                e = a.b + a.c,
                f = a.a + a.d;
            null == f && (f = -1);
            null == e && (e = -1);
            null ==
                d && (d = 1);
            null == c && (c = 1);
            a = new w;
            a.b = c;
            a.a = d;
            a.c = e;
            a.d = f;
            b = new ca(this.content, 247, 0, b);
            b.Wb(a);
            this.V(b);
            return b
        },
        l: Bc
    });
    fd.g = "6B";
    fd.F = S;
    fd.prototype = r(S.prototype, {
        Qc: function() {
            var a = S.prototype.Qc.call(this);
            a.push(177);
            a.push(14);
            a.push(13);
            a.push(179);
            a.push(185);
            return a
        },
        Oa: function() {
            S.prototype.Oa.call(this);
            this.lh();
            var a = M.ra;
            a.Da(179);
            (new B(this.content, 179)).node.name = "glitter";
            var b = 547,
                c = 137,
                d = 93,
                e = 93;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.ei("btn_x", f);
            b = this.Z.get("level");
            b = this.translate(k.i84(b));
            c = 71;
            d = 230;
            e = 502;
            f = 102;
            null == f && (f = 0);
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            var g = new w;
            g.b = c;
            g.a = d;
            g.c = e;
            g.d = f;
            this.fi(b, g, "headline");
            a.Da(177);
            b = new B(this.content, 177);
            b.ka();
            b.node.name = "girl";
            b.N(134);
            b.O(383);
            a.Da(14);
            a.Da(13);
            a = tc.lm(this.Z.get("score"));
            b = 53;
            c = 680;
            d = 540;
            e = 130;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.$g(a, f, !1, "score");
            a = 96;
            b =
                800;
            c = 451;
            d = 180;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.uf("btn_ok", e, this.translate(k.i85))
        },
        Va: function() {
            var a = this;
            S.prototype.Va.call(this);
            V.ag("SCREEN_LEVELRESULT", "pass");
            ja.YE();
            wa.wa(65536) ? this.Qu() : ef.load(function(b) {
                M.ra.xb.createTexture(65536, b);
                a.Qu()
            });
            var b = this.Z.get("level"),
                c = this.Y(ca, "headline");
            c.qa(this.translate(k.i84(b)));
            c.Bb();
            var d = tc.lm(this.Z.get("score"));
            c = this.Y(ca, "score");
            c.qa(d);
            c.Bb();
            c = 0;
            for (d = this.Pe; c <
                d.length;) {
                var e = d[c];
                ++c;
                e.u()
            }
            this.Pe = [];
            c = 0;
            for (d = this.Nn; c < d.length;) e = d[c], ++c, e.u();
            this.Nn = [];
            c = this.Z.get("numStarsEarned");
            this.Nq = 0 == v.cc[b];
            this.VE = 0 == b % 20;
            this.Nq ? (v.cc[b] = c, 1E3 > v.level && v.level++) : c > v.cc[b] && (v.cc[b] = c);
            switch (c) {
                case 1:
                    this.si(0);
                    break;
                case 2:
                    this.si(20);
                    this.si(-20);
                    break;
                case 3:
                    this.si(38), this.si(0), this.si(-38)
            }
            b = 0;
            for (d = this.Pe; b < d.length;) e = d[b], ++b, e.M(.01), e.I(!1);
            this.content.de("glitter").I(3 == c);
            this.dk()
        },
        Pa: function() {
            var a = this;
            S.prototype.Pa.call(this);
            this.qb(u.ko);
            for (var b = this.Z.get("numStarsEarned"), c = 0, d = this.Pe.length; c < d;) {
                var e = .1 * c,
                    f = [c++],
                    g = [c++];
                sb.Xd(function(c, d, e) {
                    return function() {
                        a.Pe[e[0]].gb().Lc(1, 1, L.hi(.2));
                        a.Pe[d[0]].gb().Lc(1.1, 1, L.hi(.2));
                        a.Pe[d[0]].gb().alpha(0, 1, L.mc(2));
                        a.Pe[e[0]].I(!0);
                        a.Pe[d[0]].I(!0);
                        var f = 1;
                        switch (b) {
                            case 1:
                                f = 1;
                                break;
                            case 2:
                                f = .5;
                                break;
                            case 3:
                                f = 1 == c[0] ? 1 : .5
                        }
                        var g = a.Nn[c[0]];
                        1 > f && g.vh().add();
                        g.I(!0);
                        g.gb().Lc(f, 1, L.hi(.5), null, function() {
                            return function() {
                                g.gb().rotation(180, 6, L.iw(), Ha.i2);
                                1 == f &&
                                    g.gb().Lc(.25, 1, L.Gm(), Ha.i2)
                            }
                        }());
                        g.gb().alpha(1 > f ? .25 : 1, 1, L.mc(2))
                    }
                }([(c >> 1) - 1], g, f), e)
            }
            this.dk();
            sb.Xd(E(this, this.Dr), .1 * d + 2)
        },
        handle: function(a) {
            S.prototype.handle.call(this, a);
            5 == a.type && (J.get(a.Af, "name"), a.j |= 3, ef.click())
        },
        Dr: function() {
            ja.xv();
            var a = this.Z.get("level"),
                b = this.Z.get("score"),
                c = V.oC("level" + a);
            a = V.mC("level" + a, b);
            b = Gc.Ww();
            Promise.all([a, c, b]).then(E(this, this.Hk), E(this, this.Hk))
        },
        Hk: function() {
            ja.wx();
            this.Er()
        },
        gd: function(a) {
            switch (a) {
                case "btn_ok":
                case "btn_x":
                    a = J.Fa(["backToMap", !0, "levelPass", !0]);
                    this.VE && J.set(a, "stageComplete");
                    J.set(a, this.Nq ? "firstPass" : "secondTry");
                    this.Nq || J.set(a, "level", this.Z.get("level"));
                    v.save();
                    this.close(a);
                    break;
                case "playstore":
                    a = window.famobi.getAppLink(), window.open(a, "_self")
            }
        },
        Ke: function() {
            this.gd("btn_x", !0)
        },
        si: function(a) {
            var b = .0174532925199432 * (180 + a),
                c = Math.sin(b);
            b = Math.cos(b);
            var d = this.content.de("girl"),
                e = d.Ga() / 2,
                f = d.ab + e;
            d = d.Ua + e;
            var g = f + c * e,
                h = d - 20 + b * e,
                l = new B(this.content, 14);
            l.N(g);
            l.O(h);
            l.Ha();
            l.ka();
            l.Me(-a);
            this.Pe.push(l);
            l = new B(this.content, 14);
            l.N(g);
            l.O(h);
            l.Ha();
            l.ka();
            l.Me(-a);
            l.vh().add();
            this.Pe.push(l);
            e += 24;
            g = f + c * e;
            h = d - 20 + b * e;
            l = new B(this.content, 13);
            l.N(g);
            l.O(h);
            l.Ha();
            l.ka();
            l.na(0);
            l.M(.01);
            l.I(!1);
            this.Nn.push(l)
        },
        Qu: function() {
            M.ra.Da(185);
            this.mt = new B(this.content, 185);
            this.mt.N(165);
            this.mt.O(1067);
            var a = this.content,
                b = 173,
                c = 987,
                d = 300,
                e = 127;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.kt = new Aa(a, f, 65536);
            this.V(this.kt);
            this.kt.name = "branding"
        },
        dk: function() {
            var a = this.Y(Aa, "btn_ok"),
                b = this.Y(Aa, "btn_x");
            a.Td(!1);
            b.Td(!1);
            a.I(!1);
            b.I(!1)
        },
        Er: function() {
            var a = this.Y(Aa, "btn_ok"),
                b = this.Y(Aa, "btn_x");
            a.Td(!0);
            b.Td(!0);
            a.I(!0);
            b.I(!0)
        },
        l: fd
    });
    Ib.g = "~scene.LoadingScene";
    Ib.F = O;
    Ib.prototype = r(O.prototype, {
        Pa: function() {
            var a = this;
            O.prototype.Pa.call(this);
            this.loaded = !1;
            this.gq = J.get(this.Z.Af, "loaderInfo");
            this.Ym = 0;
            for (var b = this.fm(), c = 0, d = this.gq.rc; c < d.length;) {
                var e = d[c];
                ++c;
                if (!m.Xp(e) || null != m.nh()) {
                    var f = !1,
                        g = m.ee(e);
                    b.$p(g) && (b.tD(g),
                        f = !0);
                    b.load(g) && (f = !0);
                    0 != f && (this.Ym++, m.cn(e, function() {
                        a.Ym--
                    }))
                }
            }
        },
        update: function(a) {
            if (!this.loaded) {
                if (this.loaded = this.lk()) this.gq.loaded = !0, this.finish(J.set({}, "loaderInfo", this.gq));
                O.prototype.update.call(this, a)
            }
        },
        lk: function() {
            return 0 == this.Ym
        },
        l: Ib
    });
    ed.g = "6C";
    ed.F = Ib;
    ed.prototype = r(Ib.prototype, {
        Ah: function() {
            return !1
        },
        Oa: function() {
            Ib.prototype.Oa.call(this);
            this.Da(174);
            this.B = new B(this.content, 174);
            this.B.ka()
        },
        Va: function() {
            Ib.prototype.Va.call(this);
            this.rd()
        },
        update: function(a) {
            var b =
                this.B;
            b.Me(b.ie + 5);
            Ib.prototype.update.call(this, a)
        },
        handle: function(a) {
            1 == a.type && this.rd()
        },
        rd: function() {
            this.content.M(1);
            var a = this.content.Ga();
            this.content.Aa();
            var b = M.ra.window.rh(),
                c = .1 * b.d;
            this.content.M(c / a);
            this.content.N(b.c - c);
            this.content.O(b.d - c)
        },
        Da: function(a) {
            M.ra.Da(a)
        },
        l: ed
    });
    Kd.g = "6D";
    Kd.F = N;
    Kd.prototype = r(N.prototype, {
        Oa: function() {
            var a = this;
            N.prototype.Oa.call(this);
            V.ag("SCREEN_SPLASH");
            var b = ma.an(m.getData(186));
            120 == b.a[0] && (b = (new og).pe(b));
            ta.jE(b);
            window.console.info("zip v" +
                ta.Lx + " (" + ta.tq + " levels)");
            this.Xy();
            this.gz(247, 248);
            this.Da(173);
            this.Da(174);
            this.drawImage(null, 173, 24, 392);
            this.loop = this.drawImage(null, 174, 325, 856);
            this.loop.ka();
            b = 101;
            var c = 982,
                d = 600,
                e = 108;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            c = f;
            b = (new ca(this.content, 247, 0, !1)).qa(this.translate(k.i115));
            d = c.b;
            e = c.a;
            f = c.b + c.c;
            c = c.a + c.d;
            null == c && (c = -1);
            null == f && (f = -1);
            null == e && (e = 1);
            null == d && (d = 1);
            var g = new w;
            g.b = d;
            g.a = e;
            g.c = f;
            g.d = c;
            b.Wb(g);
            b.Bb();
            this.V(b);
            b.name = "loading";
            b = 201;
            c = 1074;
            d = 400;
            e = 70;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            c = f;
            b = (new ca(this.content, 247, 0, !1)).qa("100%");
            d = c.b;
            e = c.a;
            f = c.b + c.c;
            c = c.a + c.d;
            null == c && (c = -1);
            null == f && (f = -1);
            null == e && (e = 1);
            null == d && (d = 1);
            g = new w;
            g.b = d;
            g.a = e;
            g.c = f;
            g.d = c;
            b.Wb(g);
            b.qa("00000");
            b.Bb();
            b.qa("0%");
            b.name = "percent";
            this.V(b);
            var h = this.fm();
            this.urls.push(m.ee(15));
            v.Ze && this.Bw.reverse();
            b = 0;
            for (c = O.vu(this.Bw[0]); b < c.length;) d = c[b], ++b, this.urls.push(m.ee(d));
            na.ge(this.urls, function(a) {
                return h.load(a)
            });
            this.sw = this.urls.length;
            b = 0;
            for (c = this.urls; b < c.length;) d = c[b], ++b, m.cn(m.Bf(d), function() {
                a.sw--
            })
        },
        update: function(a) {
            N.prototype.update.call(this, a);
            a = this.loop;
            a.Me(a.ie + 5);
            this.state == X.i3 && 0 == this.sw ? .25 < this.time && (this.qf = !1, this.zg()) : this.time = 0
        },
        ma: function(a) {
            N.prototype.ma.call(this, a);
            a = this.fm().gm(this.urls);
            var b = Math.ceil(100 * a);
            this.Y(ca, "percent").qa(b + "%");
            1 <= a && (this.gr = !1)
        },
        D: function() {
            N.prototype.D.call(this);
            this.jh(173)
        },
        rd: function() {
            var a =
                this.uh(),
                b = Math.min((a.c - a.b) / 800, (a.d - a.a) / 1200);
            this.content.M(b);
            this.content.N((a.c - a.b - 800 * b) / 2);
            this.content.O((a.d - a.a - 1200 * b) / 2)
        },
        zg: function() {
            if (K.aq()) {
                var a = this.Y(ca, "loading");
                a.qa(this.translate(k.i112));
                a.Bb();
                a = this.Y(ca, "percent");
                a.wr(!1);
                this.loop.I(!1);
                this.CB(E(this, this.next))
                window.famobi_analytics.trackScreen("SCREEN_HOME");
            } else this.next()
        },
        CB: function(a) {
            ba.X().Ma(function(b) {
                b.action == oa.i1 && (b.gw.detach(b.Ea), K.resume(a))
            })
        },
        next: function() {
            v.Ze ? (v.Ze = !1, v.save(), this.xt(yb, J.Fa(["start", !0, "map", !1, "level", v.level]))) :
                this.xt(ab)
        },
        drawImage: function(a, b, c, d) {
            null == a && (a = this.content);
            a = new B(a, b);
            null != c && a.N(c);
            null != d && a.O(d);
            return a
        },
        l: Kd
    });
    ab.g = "6E";
    ab.F = N;
    ab.prototype = r(N.prototype, {
        mk: function() {
            return !0
        },
        Qc: function() {
            var a = [],
                b = v.level;
            this.Z.wa("level") && (b = this.Z.get("level"));
            a = a.concat(I.gu(b));
            a = a.concat([168, 167]);
            a = a.concat([172, 171]);
            a = a.concat([170, 169]);
            a = a.concat([246, 245]);
            a = a.concat([227, 226]);
            a.push(16);
            a.push(255);
            a.push(254);
            return a
        },
        Oa: function() {
            N.prototype.Oa.call(this);
            this.Qa([172,
                171
            ]);
            this.Qa([168, 167]);
            this.Qa([246, 245]);
            this.gk = new aa("hud", this.content);
            this.WE = new B(this.gk, 167, "star");
            this.ml = new ca(this.gk, 245, -1, !1);
            this.V(this.ml);
            if (tb.Fu()) {
                var a = this.gk,
                    b = 20,
                    c = 20,
                    d = 50,
                    e = 50;
                null == e && (e = 0);
                null == d && (d = 0);
                null == c && (c = 0);
                null == b && (b = 0);
                var f = new w;
                f.b = b;
                f.a = c;
                f.c = d;
                f.d = e;
                this.oj = new Aa(a, f, 167, "settings_icon");
                this.oj.name = "btn_settings";
                this.V(this.oj)
            }
            a = "map_ornament_1b map_ornament_1a map_ornament_1a map_ornament_2b map_ornament_2a map_ornament_2a".split(" ");
            b =
                [];
            for (c = 0; c < a.length;) d = a[c], ++c, b.push(new B(this.gk, 171, d));
            this.bw = b
        },
        Va: function() {
            this.Rx = !1;
            var a = this.Z.wa("level") ? this.Z.get("level") : v.level;
            this.Z.wa("stageComplete") && (--a, this.bx = !0);
            this.Te = I.Fc(a) < I.Fc(v.level) ? !1 : this.Z.wa("levelPass") && this.Z.wa("firstPass") && !this.Z.wa("stageComplete");
            this.bd = a;
            this.lA(a);
            this.Ix();
            I.Fc(a) < I.Fc(v.level) ? this.Y(Ca).HB() : (a = this.Te ? v.level - 1 : v.level, this.Y(Ca).VD(a));
            this.Z.wa("tease") && this.Y(Ca).hx();
            ja.fw();
            N.prototype.Va.call(this);
            this.Bj++;
            this.Z.wa("tease") && this.Y(Ca).hx();
            null != this.oj && this.oj.I(!this.Te);
            this.Y(Ca).Io(this.bd);
            this.Te && this.Y(Ca).ct(!1)
        },
        le: function() {
            N.prototype.le.call(this);
            this.Y(Ca).D();
            this.bx = !1
        },
        Pa: function() {
            var a = this;
            N.prototype.Pa.call(this);
            this.uw();
            var b = this.Z.caller;
            if (!(b instanceof ed))
                if (V.ag("SCREEN_LEVELSELECT"), b instanceof gc) this.Z.wa("tease") && (this.ix = !0, this.Y(Ca).cF(function() {
                    a.Y(Ca).Pg(!0);
                    a.ix = !1
                })), this.Fr(dd, J.Fa(["stage", I.Fc(this.bd)]));
                else if (!(b instanceof dd && this.ix))
                if (b instanceof yb && this.Z.wa("stageComplete") && this.Z.wa("firstPass")) this.Kg(bd, J.Fa(["stage", I.Fc(this.bd)]));
                else if (b instanceof bd)
                if (1E3 != v.level || v.mh) b = J.Fa(["oldLevel", this.bd, "newLevel", v.level, "tease", !0]), this.Cd(gc, !1, b);
                else {
                    this.ae(!1);
                    this.Y(Ca).Pg(!1);
                    v.mh = !0;
                    v.save();
                    var c = E(this, this.Kg);
                    sb.Xd(function() {
                        c(Ld)
                    }, .5)
                }
            else this.Te ? (this.Y(Ca).Io(v.level), this.Y(Ca).az(v.level)) : this.Z.wa("levelPass") && !this.Z.wa("secondTry") || this.Y(Ca).Pg(!0)
        },
        yd: function() {
            N.prototype.yd.call(this);
            this.Y(Ca).Pg(!1)
        },
        rd: function() {
            this.Y(Ca).resize();
            this.cz();
            this.bz();
            this.Ix()
        },
        gd: function(a) {
            "btn_settings" != a || this.Te || this.Rx || this.Kg(cd)
        },
        handle: function(a) {
            var b = this;
            N.prototype.handle.call(this, a);
            switch (a.type) {
                case 29:
                    this.Bj--;
                    break;
                case 30:
                    this.Mt();
                    this.Y(Ca).Pg(!1);
                    var c = a.get("direction"),
                        d = I.Fc(this.bd);
                    a = this.bd;
                    c = 0 < c ? 20 * d + 1 : 20 * (d - 2) + 1;
                    I.Fc(c) == I.Fc(v.level) && (c = v.level);
                    this.Cd(gc, !1, J.Fa(["oldLevel", a, "newLevel", c]));
                    break;
                case 31:
                    this.Rx = !0;
                    this.Mt();
                    this.Y(Ca).Pg(!1);
                    var e = a.get("level");
                    this.Fj();
                    this.gc.na(0);
                    this.gc.gb().alpha(1, .5, L.mc(2), null, function() {
                        var a = J.Fa(["start", !0, "map", !0, "level", e]);
                        b.Cd(yb, !1, a)
                    })
            }
        },
        cz: function() {
            var a = this.bw,
                b = M.ra.window.sd();
            a[0].M(1);
            a[1].M(1);
            a[2].M(1);
            var c = .06 * b.a;
            30 > c && (c = 30);
            c /= a[0].Aa();
            a[1].M(c);
            var d = a[1].Ga();
            b.b < 2.4 * d && (c = .3 * b.b, a[1].M(1), c /= a[0].Ga());
            a[1].M(c);
            d = a[1].Ga();
            a[2].lf(-c);
            a[2].mf(c);
            a[2].N(b.b);
            var e = b.b - 2 * d;
            a[0].M(c);
            a[0].N(d);
            a[0].Ne(e);
            a[3].M(1);
            a[4].M(1);
            a[5].M(1);
            a[4].M(c);
            d = b.a - a[4].Aa();
            a[4].O(d);
            d = a[4].Ga();
            a[5].lf(-c);
            a[5].mf(c);
            a[5].N(b.b);
            e = b.a - a[5].Aa();
            a[5].O(e);
            e = b.b - 2 * d;
            a[3].M(c);
            a[3].N(d);
            b = b.a - a[3].Aa();
            a[3].O(b);
            a[3].Ne(e)
        },
        bz: function() {
            var a = M.ra.window.sd(),
                b = [],
                c = new w;
            c.b = 1;
            c.a = 1;
            c.c = -1;
            c.d = -1;
            var d = this.bw[1];
            c.b = .1 * a.b;
            c.c = a.b - .1 * a.b;
            c.a = d.Aa() / 2;
            d = .1 * a.a;
            d > .2 * a.a && (d = .2 * a.a);
            50 > d && (d = 50);
            c.d = c.a + d;
            b.push(c);
            a = new x;
            a.b = 100;
            a.a = 100;
            a = Fa.ij(c, a, {
                y: .1 * d
            });
            Fa.align(a, c, -1, 0);
            b.push(a);
            var e = new x;
            e.b = 200;
            e.a = 100;
            d = Fa.ij(c, e, {
                y: .15 * d
            });
            Fa.align(d, c, -1, 0);
            e = a.c;
            var f = d.c - d.b;
            d.b = e;
            d.c = e +
                f;
            b.push(d);
            e = new x;
            e.b = 100;
            e.a = 100;
            e = Fa.ij(c, e);
            Fa.align(e, c, 1, 0);
            b.push(e);
            this.WE.Uj(a);
            this.ml.Wb(d);
            null != this.oj && this.oj.Wb(e)
        },
        lA: function(a) {
            var b = new Ca(a, this.Te);
            this.V(b);
            b.resize();
            b.Io(a);
            this.gk.$k()
        },
        Ix: function() {
            for (var a = 0, b = v.cc, c = 1, d = v.level + 1; c < d;) {
                var e = c++;
                a += b[e]
            }
            a = Math.floor(a / 3E3 * 100);
            1 <= v.cc[1] && 1 > a && (a = 1);
            this.ml.qa("" + a + "%");
            this.ml.Bb();
            this.ml.eb(-1, 0)
        },
        l: ab
    });
    dd.g = "6F";
    dd.F = La;
    dd.prototype = r(La.prototype, {
        Va: function() {
            La.prototype.Va.call(this);
            var a = this.Z.get("stage") |
                0;
            this.head.qa(this.translate(k.i50(a, 50)));
            this.head.Bb();
            this.head.eb(0, 0);
            this.body.qa(I.xp(a));
            this.body.Bb();
            this.body.eb(0, 0);
            this.Em = 1.5
        },
        Ke: function() {
            this.close()
        },
        Oa: function() {
            La.prototype.Oa.call(this);
            this.Da(15);
            this.B = new B(this.content, 15);
            var a = 156,
                b = 140,
                c = 660,
                d = 170;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            var e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.head = this.Ol(e, !1);
            a = 100;
            b = 275;
            c = 800;
            d = 115;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.body = this.Ol(e, !1)
        },
        rd: function() {
            this.content.M(1);
            var a = this.content.Ga(),
                b = this.content.Aa(),
                c = M.ra.window.rh();
            if (1.2 * c.c > c.d) {
                var d = .25 * c.c | 0;
                c.b += d;
                c.c -= 2 * d;
                a = c.c / a;
                b * a > .4 * c.d && (a = .35 * c.d | 0, c.a += a, c.d -= 2 * a, a = c.d / b);
                this.content.M(a);
                this.content.N(c.b + (c.c - this.content.Ga()) / 2)
            } else b = .05 * c.c | 0, c.b += b, c.c -= 2 * b, this.content.M(c.c / a), this.content.N(c.b);
            this.content.O(c.a + (c.d - this.content.Aa()) / 2)
        },
        Ol: function(a, b) {
            var c = a.b,
                d = a.a,
                e = a.b + a.c,
                f = a.a + a.d;
            null == f && (f = -1);
            null ==
                e && (e = -1);
            null == d && (d = 1);
            null == c && (c = 1);
            a = new w;
            a.b = c;
            a.a = d;
            a.c = e;
            a.d = f;
            b = new ca(this.content, 247, 0, b);
            b.Wb(a);
            this.V(b);
            return b
        },
        l: dd
    });
    He.g = "70";
    He.ga = [Jb];
    He.prototype = {
        cd: function() {
            return .25
        },
        yg: function(a, b, c) {
            switch (c) {
                case 0:
                    b.content.na(0);
                    break;
                case 1:
                    a.content.na(1), null != b && b.content.na(1)
            }
        },
        Mh: function(a, b, c, d) {
            switch (c) {
                case 0:
                    b.content.na(L.mc(2)(d));
                    break;
                case 1:
                    a.content.na(1 - L.mc(2)(d))
            }
        },
        Lh: function() {},
        l: He
    };
    Ge.g = "71";
    Ge.ga = [Jb];
    Ge.prototype = {
        cd: function(a, b, c) {
            return 0 == c ? 1 :
                .5
        },
        yg: function(a, b, c) {
            switch (c) {
                case 0:
                    this.ci = b.content.Ua;
                    this.Wg = M.ra.window.sd().a;
                    b.content.O(this.Wg);
                    break;
                case 1:
                    b.canvas.O(0)
            }
        },
        Mh: function(a, b, c, d) {
            switch (c) {
                case 0:
                    a = this.Wg;
                    b.content.O(a + (this.ci - a) * L.hi()(d));
                    break;
                case 1:
                    b = this.ci, a.content.O(b + (this.Wg - b) * L.oz()(d))
            }
        },
        Lh: function() {},
        l: Ge
    };
    Jd.g = "72";
    Jd.F = S;
    Jd.prototype = r(S.prototype, {
        Oa: function() {
            S.prototype.Oa.call(this);
            this.lh();
            var a = this.Z.get("level");
            a = this.translate(k.i70(a));
            var b = 100,
                c = 190,
                d = 450,
                e = 122;
            null == e && (e = 0);
            null ==
                d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.fi(a, f, "headline");
            a = 547;
            b = 137;
            d = c = 93;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.ei("btn_x", e);
            a = 76;
            b = 365;
            c = 498;
            d = 180;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.uf("btn_restart", e, this.translate(k.i72));
            b = 76;
            c = 550;
            d = 498;
            e = 180;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            a = new w;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d =
                e;
            b = 76;
            c = 735;
            d = 498;
            e = 180;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            tb.Fu() ? (this.uf("btn_settings", a, this.translate(k.i71)), this.uf("btn_back_to_map", f, this.translate(k.i73))) : this.uf("btn_back_to_map", a, this.translate(k.i73))
        },
        Va: function() {
            S.prototype.Va.call(this);
            this.Xi = null;
            this.ae(!0);
            var a = this.Z.get("level"),
                b = this.Y(ca, "headline");
            b.qa(this.translate(k.i70(a)));
            b.Bb();
            ka.X().lj(.2);
            this.level = this.Z.get("level")
        },
        le: function() {
            v.ed && ka.X().lj(1);
            V.ag("SCREEN_LEVEL")
        },
        gd: function(a) {
            if (this.state != X.i3) switch (a) {
                case "btn_back_to_map":
                case "btn_restart":
                case "btn_settings":
                case "btn_x":
                    this.Xi = a;
                    return
            }
            switch (a) {
                case "btn_back_to_map":
                    this.close(J.Fa(["backToMap", !0, "level", this.level]));
                    break;
                case "btn_restart":
                    this.close(J.Fa(["restart", "restart"]));
                    break;
                case "btn_settings":
                    this.Cd(cd, !0);
                    break;
                case "btn_x":
                    this.state != X.i3 ? this.Xi = a : this.close(J.Fa(["resume", "resume"]))
            }
        },
        Ke: function() {
            this.close(J.Fa(["resume", "resume"]))
        },
        Pa: function() {
            var a =
                this;
            S.prototype.Pa.call(this);
            if (null != this.Xi) this.gd(this.Xi, !0), this.Xi = null;
            else {
                var b = this.Z.Af;
                J.ad(b, "quit") ? (b = function() {
                    var b = J.Fa(["quit", "quit"]);
                    a.close(b)
                }, this.ae(!1), V.kC().then(b, b)) : J.ad(b, "restart") ? (this.ae(!1), b = function() {
                    var b = J.Fa(["restart", "restart"]);
                    a.close(b)
                }, V.lC().then(b, b)) : J.ad(b, "keepPlaying") ? (this.ae(!1), V.resume().then(function() {
                    var b = J.Fa(["resume", "resume"]);
                    a.close(b)
                })) : this.ae(!0)
            }
        },
        l: Jd
    });
    Fe.g = "73";
    Fe.ga = [Jb];
    Fe.prototype = {
        cd: function() {
            return .75
        },
        yg: function(a,
            b) {
            b.Fj();
            b.gc.na(1);
            b.canvas.I(!0);
            this.Kp = !1
        },
        Mh: function(a, b, c, d) {
            z.ba(b, O).gc.na(1 - L.mc(2)(d))
        },
        Lh: function(a, b) {
            z.ba(b, N).vn()
        },
        l: Fe
    };
    Ee.g = "74";
    Ee.ga = [Jb];
    Ee.prototype = {
        cd: function() {
            return .75
        },
        yg: function(a, b) {
            a.Fj();
            a.gc.na(0);
            b.canvas.I(!1);
            this.Kp = !1
        },
        Mh: function(a, b, c, d) {
            2 == c && (.5 > d ? a.gc.na(this.vA(hb.map(d, 0, .5, 0, 1))) : (this.Kp || (this.Kp = !0, b.canvas.I(!0)), b.gc.na(1 - this.wA(hb.map(d, .5, 1, 0, 1)))))
        },
        Lh: function(a, b, c) {
            2 == c && z.ba(b, N).vn()
        },
        l: Ee
    };
    Id.g = "75";
    Id.ga = [Jb];
    Id.prototype = {
        cd: function() {
            return 1
        },
        yg: function(a) {
            1 == this.kind && (z.ba(a, N).Fj(), a.gc.na(0))
        },
        Mh: function(a, b, c, d) {
            1 == this.kind ? (a.gc.na(L.Rh()(d)), 1 == d && z.ba(b, N).Fj()) : b.gc.na(1 - L.mc(2)(d))
        },
        Lh: function(a, b) {
            2 == this.kind && (z.ba(a, N).vn(), z.ba(b, N).vn())
        },
        l: Id
    };
    cd.g = "76";
    cd.F = S;
    cd.prototype = r(S.prototype, {
        Oa: function() {
            S.prototype.Oa.call(this);
            this.lh();
            var a = this.translate(k.i66),
                b = 104,
                c = 218,
                d = 444,
                e = 95;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.fi(a, f);
            a = this.translate(k.i65);
            b = 104;
            c = 355;
            d = 444;
            e = 95;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.$g(a, f, !1);
            a = this.translate(k.i67);
            b = 104;
            c = 625;
            d = 444;
            e = 95;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            this.$g(a, f, !1);
            a = 75;
            b = 428;
            c = 498;
            d = 180;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.at("btn_music", e, v.ed);
            a = 75;
            b = 700;
            c = 498;
            d = 180;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null ==
                a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.at("btn_effects", e, v.se);
            a = 547;
            b = 137;
            d = c = 93;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.ei("btn_x", e)
        },
        Va: function() {
            S.prototype.Va.call(this);
            V.ag("SCREEN_SETTINGS");
            this.ae(!0)
        },
        Pa: function() {
            this.gh ? this.close() : S.prototype.Pa.call(this)
        },
        gd: function(a) {
            switch (a) {
                case "btn_effects":
                    a = v.se = !v.se;
                    V.Px(v.se ? 1 : 0, a ? 1 : 0);
                    u.gl(a);
                    u.play(u.yl);
                    break;
                case "btn_music":
                    a = v.ed = !v.ed;
                    V.Px(a ? 1 : 0, v.ed ? 1 : 0);
                    ja.gl(a);
                    a && (this.parent instanceof ab ? ja.fw() : ja.ew());
                    break;
                case "btn_x":
                    this.state != X.i3 ? this.gh = !0 : (v.save(), this.close())
            }
        },
        Ke: function() {
            v.save();
            this.close()
        },
        at: function(a, b, c) {
            b = new ad(this.content, b, c, this.translate(k.i68), this.translate(k.i69));
            this.V(b);
            b.name = a;
            return b
        },
        l: cd
    });
    bd.g = "77";
    bd.F = S;
    bd.prototype = r(S.prototype, {
        Qc: function() {
            var a = S.prototype.Qc.call(this);
            a.push(179);
            a.push(176);
            return a
        },
        Oa: function() {
            S.prototype.Oa.call(this);
            this.lh();
            this.Da(176);
            var a = new B(this.content, 176);
            a.ka();
            a.node.name = "princess";
            a.N(74);
            a.O(245);
            this.Da(179);
            (new B(this.content, 179)).node.name = "glitter";
            a = this.Z.get("stage");
            var b = I.xp(a),
                c = 46,
                d = 640,
                e = 550,
                f = 95;
            null == f && (f = 0);
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            var g = new w;
            g.b = c;
            g.a = d;
            g.c = e;
            g.d = f;
            this.fi(b, g, "headline");
            b = 66;
            c = 740;
            d = 510;
            e = 120;
            null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            b = this.$g(null, f, !0, "body");
            b.qa(this.translate(k.i64(a, 50)), 50);
            b.Yf();
            a = 547;
            b = 137;
            d = c = 93;
            null == d && (d =
                0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.ei("btn_x", e);
            a = 96;
            b = 830;
            c = 451;
            d = 180;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.uf("btn_ok", e, this.translate(k.i63))
        },
        D: function() {
            S.prototype.D.call(this);
            this.jh(176)
        },
        Ke: function() {
            this.state == X.i3 && this.gd("btn_x", !0)
        },
        Pa: function() {
            S.prototype.Pa.call(this);
            this.qb(u.ko)
        },
        gd: function(a) {
            switch (a) {
                case "btn_ok":
                case "btn_x":
                    this.close()
            }
        },
        l: bd
    });
    ad.g = "78";
    ad.F = C;
    ad.prototype = r(C.prototype, {
        D: function() {
            C.prototype.D.call(this);
            this.group.u();
            this.group = null;
            this.Td(!1)
        },
        uB: function() {
            return this.vk
        },
        Td: function(a) {
            this.vk = a;
            ba.X().toggle(E(this, this.Ub), a);
            return a
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            this.selected && .5 < this.time && (this.selected = !1)
        },
        Ub: function(a) {
            if (this.vk && !this.selected) switch (a.action.m) {
                case 0:
                    var b = this.xe,
                        c = a.y,
                        d = new x;
                    d.b = a.x;
                    d.a = c;
                    b.kf(d) && (this.pressed = !0, this.group.gb().Lc(1.1, 1, L.Kd(.25)));
                    break;
                case 1:
                    this.group.gb().Lc(1,
                        1, L.Kd(.25)), this.pressed ? (b = this.xe, c = a.y, d = new x, d.b = a.x, d.a = c, a = b.kf(d)) : a = !1, a && (this.time = 0, this.selected = !0, this.ki(28, J.Fa(["name", this.name, "on", this.xm])), this.xm = !this.xm, this.hl.Ka(this.xm ? 182 : 183)), this.pressed = !1
            }
        },
        l: ad
    });
    xb.g = "79";
    xb.zp = function(a) {
        switch (a) {
            case "objective_free_targets":
                return 12;
            case "objective_pop_bubbles":
                return 11;
            case "objective_reach_score":
                return 10;
            case "play_bank_shots":
                return 9;
            case "play_bouncer":
                return 8;
            case "play_bubble_swap":
                return 7;
            case "play_how_to_pop":
                return 6;
            case "special_breakable_1hp":
                return 5;
            case "special_breakable_2hp":
                return 4;
            case "special_breakable_3hp":
                return 3;
            case "special_concealed":
                return 2;
            case "special_lineblast":
                return 1;
            case "special_obstacle":
                return 0
        }
    };
    xb.F = S;
    xb.prototype = r(S.prototype, {
        Qc: function() {
            var a = S.prototype.Qc.call(this);
            this.Z.wa("tutorialId") && a.push(xb.zp(this.Ap()));
            return a
        },
        D: function() {
            S.prototype.D.call(this);
            this.jh(this.Ur)
        },
        Va: function() {
            S.prototype.Va.call(this);
            this.ae(!0);
            this.Ur = xb.zp(this.Ap());
            this.Da(this.Ur);
            this.ib.Ka(this.Ur);
            var a = this.Y(ca, "body");
            switch (this.Ap()) {
                case "objective_free_targets":
                    var b = k.i100;
                    break;
                case "objective_pop_bubbles":
                    b = k.i99;
                    break;
                case "objective_reach_score":
                    b = k.i98;
                    break;
                case "play_bank_shots":
                    b = k.i97;
                    break;
                case "play_bouncer":
                    b = k.i96;
                    break;
                case "play_bubble_swap":
                    b = k.i95;
                    break;
                case "play_how_to_pop":
                    b = k.i94;
                    break;
                case "special_breakable_1hp":
                    b = k.i93;
                    break;
                case "special_breakable_2hp":
                    b = k.i92;
                    break;
                case "special_breakable_3hp":
                    b = k.i91;
                    break;
                case "special_concealed":
                    b = k.i90;
                    break;
                case "special_lineblast":
                    b = k.i89;
                    break;
                case "special_obstacle":
                    b = k.i88
            }
            b = this.translate(b);
            a.qa(b, 60);
            a.Yf()
        },
        Pa: function() {
            this.gh ? this.close() : S.prototype.Pa.call(this)
        },
        Oa: function() {
            S.prototype.Oa.call(this);
            this.lh();
            this.ib = new B(this.content);
            this.ib.N(51);
            this.ib.O(325);
            this.ib.M(1.06640625);
            var a = 96,
                b = 580,
                c = 450,
                d = 250;
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            var e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.$g(null, e, !0, "body");
            a = 75;
            b = 814;
            c = 498;
            d = 180;
            null == d && (d = 0);
            null == c &&
                (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            e = new w;
            e.b = a;
            e.a = b;
            e.c = c;
            e.d = d;
            this.uf("btn_ok", e, this.translate(k.i103))
        },
        gd: function(a) {
            "btn_ok" == a && (this.state != X.i3 ? (this.gh = !0, this.ae(!1)) : this.close())
        },
        Gr: function() {
            return !1
        },
        Ap: function() {
            return this.Z.get("tutorialId")
        },
        l: xb
    });
    Hd.g = "~haxe.IMap";
    Hd.Zb = !0;
    Hd.prototype = {
        l: Hd
    };
    $c.g = "~haxe.Timer";
    $c.Xd = function(a, b) {
        var c = new $c(b);
        c.pe = function() {
            c.stop();
            a()
        };
        return c
    };
    $c.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        pe: function() {},
        l: $c
    };
    ma.g = "~haxe.io.Bytes";
    ma.bn = function(a, b) {
        if (b == kd.i1) {
            b = new Uint8Array(a.length << 1);
            for (var c = 0, d = a.length; c < d;) {
                var e = c++,
                    f = a.charCodeAt(e);
                b[e << 1] = f & 255;
                b[e << 1 | 1] = f >> 8
            }
            return new ma(b.buffer)
        }
        b = [];
        for (c = 0; c < a.length;) d = a.charCodeAt(c++), 55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023), 127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 | d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63));
        return new ma((new Uint8Array(b)).buffer)
    };
    ma.an = function(a) {
        var b = a.LB;
        return null != b ? b : new ma(a)
    };
    ma.prototype = {
        zb: function(a, b, c, d) {
            if (0 > a || 0 > c || 0 > d || a + d > this.length || c + d > b.length) throw 0;
            0 == c && d == b.a.byteLength ? this.a.set(b.a, a) : this.a.set(b.a.subarray(c, c + d), a)
        },
        sub: function(a, b) {
            if (0 > a || 0 > b || a + b > this.length) throw 0;
            return new ma(this.a.buffer.slice(a + this.a.byteOffset, a + this.a.byteOffset + b))
        },
        Bp: function(a) {
            null == this.data && (this.data = new DataView(this.a.buffer, this.a.byteOffset, this.a.byteLength));
            return this.data.getUint16(a, !0)
        },
        yp: function(a, b, c) {
            if (0 > a || 0 > b || a + b > this.length) throw 0;
            null == c && (c = kd.i0);
            var d = "",
                e = this.a,
                f = a;
            a += b;
            switch (c.m) {
                case 0:
                    for (; f < a;) {
                        c = e[f++];
                        if (128 > c) {
                            if (0 == c) break
                        } else if (224 > c) c = (c & 63) << 6 | e[f++] & 127;
                        else if (240 > c) b = e[f++], c = (c & 31) << 12 | (b & 127) << 6 | e[f++] & 127;
                        else {
                            b = e[f++];
                            var g = e[f++];
                            c = (c & 15) << 18 | (b & 127) << 12 | (g & 127) << 6 | e[f++] & 127
                        }
                        d += String.fromCodePoint(c)
                    }
                    break;
                case 1:
                    for (; f < a;) c = e[f++] | e[f++] << 8, d += String.fromCodePoint(c)
            }
            return d
        },
        toString: function() {
            return this.yp(0, this.length)
        },
        l: ma
    };
    var kd =
        Ja.e3 = {
            qc: !0,
            fc: ["i0", "i1"]
        };
    kd.i0 = {
        m: 0,
        s: "e3",
        toString: n
    };
    kd.i1 = {
        m: 1,
        s: "e3",
        toString: n
    };
    kd.zc = [kd.i0, kd.i1];
    db.g = "~haxe.crypto.Base64";
    db.encode = function(a, b) {
        null == b && (b = !0);
        var c = (new De(db.Ds)).AA(a).toString();
        if (b) switch (a.length % 3) {
            case 1:
                c += "==";
                break;
            case 2:
                c += "="
        }
        return c
    };
    db.decode = function(a, b) {
        null == b && (b = !0);
        if (b)
            for (; 61 == F.li(a, a.length - 1);) a = F.substr(a, 0, -1);
        return (new De(db.Ds)).fA(ma.bn(a))
    };
    De.g = "~haxe.crypto.BaseCode";
    De.prototype = {
        AA: function(a) {
            for (var b = this.Pd, c = this.gg, d =
                    8 * a.length / b | 0, e = new ma(new ArrayBuffer(d + (0 == 8 * a.length % b ? 0 : 1))), f = 0, g = 0, h = (1 << b) - 1, l = 0, y = 0; y < d;) {
                for (; g < b;) g += 8, f <<= 8, f |= a.a[l++];
                g -= b;
                e.a[y++] = c.a[f >> g & h]
            }
            0 < g && (e.a[y++] = c.a[f << b - g & h]);
            return e
        },
        TB: function() {
            for (var a = [], b = 0; 256 > b;) {
                var c = b++;
                a[c] = -1
            }
            b = 0;
            for (c = this.gg.length; b < c;) {
                var d = b++;
                a[this.gg.a[d]] = d
            }
            this.gx = a
        },
        fA: function(a) {
            var b = this.Pd;
            null == this.gx && this.TB();
            for (var c = this.gx, d = a.length * b >> 3, e = new ma(new ArrayBuffer(d)), f = 0, g = 0, h = 0, l = 0; l < d;) {
                for (; 8 > g;) {
                    g += b;
                    f <<= b;
                    var y = c[a.a[h++]];
                    if (-1 == y) throw 0;
                    f |= y
                }
                g -= 8;
                e.a[l++] = f >> g & 255
            }
            return e
        },
        l: De
    };
    wb.g = "~haxe.ds.IntMap";
    wb.ga = [Hd];
    wb.prototype = {
        get: function(a) {
            return this.G[a]
        },
        remove: function(a) {
            if (!this.G.hasOwnProperty(a)) return !1;
            delete this.G[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.G) this.G.hasOwnProperty(b) ? a.push(b | 0) : null;
            return F.ge(a)
        },
        l: wb
    };
    ub.g = "~haxe.ds.StringMap";
    ub.ga = [Hd];
    ub.prototype = {
        get: function(a) {
            return null != va[a] ? this.Cf(a) : this.G[a]
        },
        Bd: function(a, b) {
            null == this.Jg && (this.Jg = {});
            this.Jg["$" + a] =
                b
        },
        Cf: function(a) {
            return null == this.Jg ? null : this.Jg["$" + a]
        },
        ip: function(a) {
            return null == this.Jg ? !1 : this.Jg.hasOwnProperty("$" + a)
        },
        keys: function() {
            return F.ge(this.lz())
        },
        lz: function() {
            var a = [],
                b;
            for (b in this.G) this.G.hasOwnProperty(b) && a.push(b);
            if (null != this.Jg)
                for (b in this.Jg) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        l: ub
    };
    Gd.g = "~haxe.io.BytesBuffer";
    Gd.prototype = {
        ah: function(a) {
            this.J == this.size && this.R(1);
            this.view.setUint8(this.J++, a)
        },
        di: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw 0;
            this.J + c > this.size && this.R(c);
            0 != this.size && (a = new Uint8Array(a.a.buffer, a.a.byteOffset + b, c), this.ux.set(a, this.J), this.J += c)
        },
        R: function(a) {
            var b = this.J + a;
            for (a = 0 == this.size ? 16 : this.size; a < b;) a = 3 * a >> 1;
            b = new ArrayBuffer(a);
            var c = new Uint8Array(b);
            0 < this.size && c.set(this.ux);
            this.size = a;
            this.buffer = b;
            this.ux = c;
            this.view = new DataView(this.buffer)
        },
        Xj: function() {
            if (0 == this.size) return new ma(new ArrayBuffer(0));
            var a = new ma(this.buffer);
            a.length = this.J;
            return a
        },
        l: Gd
    };
    Ce.g = "~haxe.io.Input";
    Ce.prototype = {
        L: function() {
            throw 0;
        },
        Th: function(a, b, c) {
            var d = c,
                e = a.a;
            if (0 > b || 0 > c || b + c > a.length) throw 0;
            try {
                for (; 0 < d;) e[b] = this.L(), ++b, --d
            } catch (f) {
                if (!((f instanceof Zc ? f.ta : f) instanceof Uf)) throw f;
            }
            return c - d
        },
        Qw: function(a) {
            return this.Jj = a
        },
        zD: function(a, b, c) {
            for (; 0 < c;) {
                var d = this.Th(a, b, c);
                if (0 == d) throw 0;
                b += d;
                c -= d
            }
        },
        read: function(a) {
            for (var b = new ma(new ArrayBuffer(a)), c = 0; 0 < a;) {
                var d = this.Th(b, c, a);
                if (0 == d) throw 0;
                c += d;
                a -= d
            }
            return b
        },
        pw: function(a) {
            for (var b = new Gd, c;;) {
                c = this.L();
                if (c == a) break;
                b.ah(c)
            }
            return b.Xj().toString()
        },
        yD: function() {
            var a = this.nc(),
                b = this.nc();
            return this.Jj ? Ac.Ku(b, a) : Ac.Ku(a, b)
        },
        Ca: function() {
            var a = this.L(),
                b = this.L();
            a = this.Jj ? b | a << 8 : a | b << 8;
            return 0 != (a & 32768) ? a - 65536 : a
        },
        oe: function() {
            var a = this.L(),
                b = this.L();
            return this.Jj ? b | a << 8 : a | b << 8
        },
        nc: function() {
            var a = this.L(),
                b = this.L(),
                c = this.L(),
                d = this.L();
            return this.Jj ? d | c << 8 | b << 16 | a << 24 : a | b << 8 | c << 16 | d << 24
        },
        Tk: function(a, b) {
            var c = new ma(new ArrayBuffer(a));
            this.zD(c, 0, a);
            return c.yp(0, a, b)
        },
        l: Ce
    };
    Wa.g = "~haxe.io.BytesInput";
    Wa.F = Ce;
    Wa.prototype = r(Ce.prototype, {
        Br: function(a) {
            0 > a ? a = 0 : a > this.$h && (a = this.$h);
            this.$a = this.$h - a;
            return this.J = a
        },
        L: function() {
            if (0 == this.$a) throw 0;
            this.$a--;
            return this.a[this.J++]
        },
        Th: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw 0;
            if (0 == this.$a && 0 < c) throw 0;
            this.$a < c && (c = this.$a);
            var d = this.a;
            a = a.a;
            for (var e = 0, f = c; e < f;) {
                var g = e++;
                a[b + g] = d[this.J + g]
            }
            this.J += c;
            this.$a -= c;
            return c
        },
        l: Wa
    });
    Be.g = "~haxe.io.Output";
    Be.prototype = {
        tf: function() {
            throw 0;
        },
        VF: function(a) {
            if (-32768 > a || 32768 <= a) throw 0;
            this.WF(a & 65535)
        },
        WF: function(a) {
            if (0 >
                a || 65536 <= a) throw 0;
            this.Jj ? (this.tf(a >> 8), this.tf(a & 255)) : (this.tf(a & 255), this.tf(a >> 8))
        },
        l: Be
    };
    Ae.g = "~haxe.io.BytesOutput";
    Ae.F = Be;
    Ae.prototype = r(Be.prototype, {
        tf: function(a) {
            this.a.ah(a)
        },
        Xj: function() {
            return this.a.Xj()
        },
        l: Ae
    });
    Uf.g = "~haxe.io.Eof";
    Uf.prototype = {
        toString: function() {
            return "Eof"
        },
        l: Uf
    };
    var Hc = Ja.e4 = {
        qc: !0,
        fc: ["i0", "i1", "i2", "i3"]
    };
    Hc.i0 = {
        m: 0,
        s: "e4",
        toString: n
    };
    Hc.i1 = {
        m: 1,
        s: "e4",
        toString: n
    };
    Hc.i2 = {
        m: 2,
        s: "e4",
        toString: n
    };
    Hc.i3 = (ua = function(a) {
            var b = {
                m: 3,
                s: "e4",
                toString: n
            };
            b.e = a;
            return b
        },
        ua.Se = ["e"], ua);
    Hc.zc = [Hc.i0, Hc.i1, Hc.i2];
    Ac.g = "~haxe.io.FPHelper";
    Ac.Ku = function(a, b) {
        Ac.Np.setInt32(0, a, !0);
        Ac.Np.setInt32(4, b, !0);
        return Ac.Np.getFloat64(0, !0)
    };
    var Dg = {
        g: "~haxe.io._Int32Array.Int32Array_Impl_",
        NA: function(a, b, c) {
            null == b && (b = 0);
            null == c && (c = a.length - b >> 2);
            return new Int32Array(a.a.zz, b, c)
        }
    };
    Tf.g = "~haxe.iterators.MapKeyValueIterator";
    Tf.prototype = {
        aa: function() {
            return this.keys.aa()
        },
        next: function() {
            var a = this.keys.next();
            return {
                value: this.map.get(a),
                key: a
            }
        },
        l: Tf
    };
    var Ic = {
            g: "~haxe.xml._Access.NodeAccess_Impl_",
            resolve: function(a, b) {
                a = a.gp(b).next();
                if (null == a) throw 0;
                if (a.nodeType != A.Document && a.nodeType != A.Element) throw 0;
                return a
            }
        },
        Ta = {
            g: "~haxe.xml._Access.AttribAccess_Impl_",
            resolve: function(a, b) {
                if (a.nodeType == A.Document) throw 0;
                a = a.get(b);
                if (null == a) throw 0;
                return a
            }
        },
        Eg = {
            g: "~haxe.xml._Access.HasNodeAccess_Impl_",
            resolve: function(a, b) {
                return a.gp(b).aa()
            }
        },
        Ag = {
            g: "~haxe.xml._Access.NodeListAccess_Impl_",
            resolve: function(a, b) {
                var c = [];
                for (a = a.gp(b); a.aa();) {
                    b = a.next();
                    if (b.nodeType != A.Document && b.nodeType !=
                        A.Element) throw 0;
                    c.push(b)
                }
                return c
            }
        };
    fc.g = "~haxe.xml.Parser";
    fc.parse = function(a, b) {
        null == b && (b = !1);
        var c = A.createDocument();
        fc.Pt(a, b, 0, c);
        return c
    };
    fc.Pt = function(a, b, c, d) {
        null == c && (c = 0);
        for (var e = null, f = 1, g = 1, h = null, l = 0, y = 0, k = 0, p = a.charCodeAt(c), q = new ec, m = 1, n = -1; p == p;) {
            switch (f) {
                case 0:
                    switch (p) {
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
                    if (60 == p) f = 0, g = 2;
                    else {
                        l = c;
                        f = 13;
                        continue
                    }
                    break;
                case 2:
                    switch (p) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) {
                                c += 2;
                                if ("CDATA[" != F.substr(a, c,
                                        6).toUpperCase()) throw 0;
                                c += 5;
                                f = 17
                            } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != F.substr(a, c + 2, 6).toUpperCase()) throw 0;
                                c += 8;
                                f = 16
                            } else {
                                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw 0;
                                c += 2;
                                f = 15
                            }
                            l = c + 1;
                            break;
                        case 47:
                            if (null == d) throw 0;
                            l = c + 1;
                            f = 0;
                            g = 10;
                            break;
                        case 63:
                            f = 14;
                            l = c;
                            break;
                        default:
                            f = 3;
                            l = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p)) {
                        if (c == l) throw 0;
                        e = A.createElement(F.substr(a, l, c - l));
                        d.V(e);
                        ++y;
                        f = 0;
                        g = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (p) {
                        case 47:
                            f = 11;
                            break;
                        case 62:
                            f = 9;
                            break;
                        default:
                            f = 5;
                            l = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p)) {
                        if (l == c) throw 0;
                        h = F.substr(a, l, c - l);
                        if (e.wa(h)) throw 0;
                        f = 0;
                        g = 6;
                        continue
                    }
                    break;
                case 6:
                    if (61 == p) f = 0, g = 7;
                    else throw 0;
                    break;
                case 7:
                    switch (p) {
                        case 34:
                        case 39:
                            q = new ec;
                            f = 8;
                            l = c + 1;
                            n = p;
                            break;
                        default:
                            throw 0;
                    }
                    break;
                case 8:
                    switch (p) {
                        case 38:
                            m = c - l;
                            q.a += null == m ? F.substr(a, l, null) : F.substr(a, l, m);
                            f = 18;
                            m = 8;
                            l = c + 1;
                            break;
                        case 60:
                        case 62:
                            if (b) throw 0;
                            p == n && (g = c - l, q.a += null == g ? F.substr(a, l, null) : F.substr(a, l, g), g = q.a, q = new ec, e.set(h, g), f = 0, g = 4);
                            break;
                        default:
                            p == n && (g = c - l, q.a += null == g ? F.substr(a, l, null) : F.substr(a, l, g), g = q.a, q = new ec, e.set(h, g), f = 0, g = 4)
                    }
                    break;
                case 9:
                    l = c = fc.Pt(a, b, c, e);
                    f = 1;
                    break;
                case 10:
                    if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p)) {
                        if (l == c) throw 0;
                        g = F.substr(a, l, c - l);
                        if (null == d || 0 != d.nodeType) throw 0;
                        if (d.nodeType != A.Element) throw 0;
                        if (g != d.nodeName) throw 0;
                        f = 0;
                        g = 12;
                        continue
                    }
                    break;
                case 11:
                    if (62 == p) f =
                        1;
                    else throw 0;
                    break;
                case 12:
                    if (62 == p) return 0 == y && d.V(A.Nl("")), c;
                    throw 0;
                case 13:
                    60 == p ? (g = c - l, q.a += null == g ? F.substr(a, l, null) : F.substr(a, l, g), g = A.Nl(q.a), q = new ec, d.V(g), ++y, f = 0, g = 2) : 38 == p && (m = c - l, q.a += null == m ? F.substr(a, l, null) : F.substr(a, l, m), f = 18, m = 13, l = c + 1);
                    break;
                case 14:
                    63 == p && 62 == a.charCodeAt(c + 1) && (++c, d.V(A.createProcessingInstruction(F.substr(a, l + 1, c - l - 2))), ++y, f = 1);
                    break;
                case 15:
                    45 == p && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (d.V(A.createComment(F.substr(a, l, c - l))), ++y, c += 2, f = 1);
                    break;
                case 16:
                    91 == p ? ++k : 93 == p ? --k : 62 == p && 0 == k && (d.V(A.Zz(F.substr(a, l, c - l))), ++y, f = 1);
                    break;
                case 17:
                    93 == p && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (p = A.Yz(F.substr(a, l, c - l)), d.V(p), ++y, c += 2, f = 1);
                    break;
                case 18:
                    if (59 == p) {
                        l = F.substr(a, l, c - l);
                        if (35 == l.charCodeAt(0)) l = 120 == l.charCodeAt(1) ? G.parseInt("0" + F.substr(l, 1, l.length - 1)) : G.parseInt(F.substr(l, 1, l.length - 1)), q.a += String.fromCodePoint(l);
                        else if (p = fc.Vt, null != va[l] ? p.ip(l) : p.G.hasOwnProperty(l)) p = fc.Vt, q.a += G.La(null != va[l] ? p.Cf(l) : p.G[l]);
                        else {
                            if (b) throw 0;
                            q.a += G.La("&" + l + ";")
                        }
                        l = c + 1;
                        f = m
                    } else if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p) && 35 != p) {
                        if (b) throw 0;
                        q.a += String.fromCodePoint(38);
                        p = c - l;
                        q.a += null == p ? F.substr(a, l, null) : F.substr(a, l, p);
                        --c;
                        l = c + 1;
                        f = m
                    }
            }
            p = a.charCodeAt(++c)
        }
        1 == f && (l = c, f = 13);
        if (13 == f) {
            if (0 == d.nodeType) throw 0;
            if (c != l || 0 == y) b = c - l, q.a += null == b ? F.substr(a, l, null) : F.substr(a, l, b), d.V(A.Nl(q.a));
            return c
        }
        if (!b && 18 == f && 13 == m) return q.a += String.fromCodePoint(38), b = c - l, q.a += null == b ? F.substr(a,
            l, null) : F.substr(a, l, b), d.V(A.Nl(q.a)), c;
        throw 0;
    };
    Fd.g = "~haxe.xml.Printer";
    Fd.print = function(a, b) {
        null == b && (b = !1);
        b = new Fd(b);
        b.xs(a, "");
        return b.W.a
    };
    Fd.prototype = {
        xs: function(a, b) {
            switch (a.nodeType) {
                case 0:
                    this.W.a += G.La(b + "<");
                    if (a.nodeType != A.Element) throw 0;
                    this.W.a += G.La(a.nodeName);
                    for (var c = a.attributes(); c.aa();) {
                        var d = c.next();
                        this.W.a += G.La(" " + d + '="');
                        d = lb.Ju(a.get(d), !0);
                        this.W.a += G.La(d);
                        this.W.a += '"'
                    }
                    if (this.EB(a)) {
                        this.W.a += ">";
                        this.Dg && (this.W.a += "\n");
                        if (a.nodeType != A.Document &&
                            a.nodeType != A.Element) throw 0;
                        for (c = F.ge(a.children); c.aa();) d = c.next(), this.xs(d, this.Dg ? b + "\t" : b);
                        this.W.a += G.La(b + "</");
                        if (a.nodeType != A.Element) throw 0;
                        this.W.a += G.La(a.nodeName);
                        this.W.a += ">"
                    } else this.W.a += "/>";
                    this.Dg && (this.W.a += "\n");
                    break;
                case 1:
                    if (a.nodeType == A.Document || a.nodeType == A.Element) throw 0;
                    a = a.nodeValue;
                    0 != a.length && (b += lb.Ju(a), this.W.a += G.La(b), this.Dg && (this.W.a += "\n"));
                    break;
                case 2:
                    this.W.a += G.La(b + "<![CDATA[");
                    if (a.nodeType == A.Document || a.nodeType == A.Element) throw 0;
                    this.W.a +=
                        G.La(a.nodeValue);
                    this.W.a += "]]\x3e";
                    this.Dg && (this.W.a += "\n");
                    break;
                case 3:
                    if (a.nodeType == A.Document || a.nodeType == A.Element) throw 0;
                    a = a.nodeValue;
                    a = a.replace(/[\n\r\t]+/g, "");
                    this.W.a += null == b ? "null" : "" + b;
                    b = lb.trim("\x3c!--" + a + "--\x3e");
                    this.W.a += G.La(b);
                    this.Dg && (this.W.a += "\n");
                    break;
                case 4:
                    if (a.nodeType == A.Document || a.nodeType == A.Element) throw 0;
                    this.W.a += G.La("<!DOCTYPE " + a.nodeValue + ">");
                    this.Dg && (this.W.a += "\n");
                    break;
                case 5:
                    if (a.nodeType == A.Document || a.nodeType == A.Element) throw 0;
                    this.W.a +=
                        G.La("<?" + a.nodeValue + "?>");
                    this.Dg && (this.W.a += "\n");
                    break;
                case 6:
                    if (a.nodeType != A.Document && a.nodeType != A.Element) throw 0;
                    for (a = F.ge(a.children); a.aa();) c = a.next(), this.xs(c, b)
            }
        },
        EB: function(a) {
            if (a.nodeType != A.Document && a.nodeType != A.Element) throw 0;
            for (a = F.ge(a.children); a.aa();) {
                var b = a.next();
                switch (b.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (b.nodeType == A.Document || b.nodeType == A.Element) throw 0;
                        if (0 != lb.jv(b.nodeValue).length) return !0
                }
            }
            return !1
        },
        l: Fd
    };
    Zc.g = "~js._Boot.HaxeError";
    Zc.F =
        Error;
    Zc.prototype = r(Error.prototype, {
        l: Zc
    });
    z.g = "~js.Boot";
    z.ph = function(a) {
        if (null == a) return null;
        if (a instanceof Array) return Array;
        var b = a.l;
        if (null != b) return b;
        a = z.Ps(a);
        return null != a ? z.Ty(a) : null
    };
    z.Cj = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        "function" == c && (a.g || a.qc) && (c = "object");
        switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a.s) {
                    var d = Ja[a.s];
                    c = d.fc[a.m];
                    var e = d[c];
                    if (e.Se) {
                        b += "\t";
                        d = [];
                        var f = 0;
                        for (e = e.Se; f < e.length;) {
                            var g = e[f];
                            f += 1;
                            d.push(z.Cj(a[g], b))
                        }
                        return c + "(" + d.join(",") + ")"
                    }
                    return c
                }
                if (a instanceof Array) {
                    c = "[";
                    b += "\t";
                    d = 0;
                    for (f = a.length; d < f;) e = d++, c += (0 < e ? "," : "") + z.Cj(a[e], b);
                    return c + "]"
                }
                try {
                    d = a.toString
                } catch (h) {
                    return "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = "{\n";
                b += "\t";
                d = null != a.hasOwnProperty;
                f = null;
                for (f in a) d && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c +=
                    ", \n"), c += b + f + " : " + z.Cj(a[f], b));
                b = b.substring(1);
                return c + ("\n" + b + "}");
            case "string":
                return a;
            default:
                return String(a)
        }
    };
    z.po = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        if (Object.prototype.hasOwnProperty.call(a, "__interfaces__"))
            for (var c = a.ga, d = 0, e = c.length; d < e;) {
                var f = d++;
                f = c[f];
                if (f == b || z.po(f, b)) return !0
            }
        return z.po(a.F, b)
    };
    z.Xg = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Array:
                return a instanceof Array;
            case Fg:
                return "boolean" == typeof a;
            case Gg:
                return null != a;
            case Hg:
                return "number" ==
                    typeof a;
            case Ig:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (z.Ry(a, b)) return !0
                    } else {
                        if ("object" == typeof b && z.Sy(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == Bg && null != a.g || b == Jg && null != a.qc ? !0 : null != a.s ? Ja[a.s] == b : !1
        }
    };
    z.Ry = function(a, b) {
        return a instanceof b ? !0 : b.Zb ? z.po(z.ph(a), b) : !1
    };
    z.ba = function(a, b) {
        if (null == a || z.Xg(a, b)) return a;
        throw 0;
    };
    z.Ps = function(a) {
        a = z.Uy.call(a).slice(8, -1);
        return "Object" == a || "Function" ==
            a || "Math" == a || "JSON" == a ? null : a
    };
    z.Sy = function(a) {
        return null != z.Ps(a)
    };
    z.Ty = function(a) {
        return gf[a]
    };
    xg.g = "~js.Browser";
    xg.bB = function() {
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
    wg.g = "~js.lib._ArrayBuffer.ArrayBufferCompat";
    wg.IE = function(a, b) {
        a = new Uint8Array(this, a, null == b ? null : b - a);
        b = new Uint8Array(a.byteLength);
        b.set(a);
        return b.buffer
    };
    Sf.g = "7A";
    Sf.prototype = {
        rn: function(a) {
            for (var b =
                    this, c = m.mB(), d = Array(c.length), e = 0, f = c.length; e < f;) {
                var g = e++;
                d[g] = m.ee(c[g])
            }
            this.urls = d;
            this.print(this.urls);
            0 == this.urls.length ? a() : (this.ld.tag = "preloader", this.ld.ke = function() {
                b.ld.ke = null;
                b.fF(a)
            }, na.ge(this.urls, function(a) {
                b.ld.load(a)
            }))
        },
        Fq: function(a) {
            m.setData(m.Bf(a.url), a.data, a.Gb)
        },
        fF: function(a) {
            function b() {
                return !na.wa(c.urls, function(a) {
                    return !m.mm(m.Bf(a))
                })
            }
            var c = this,
                d = new $c(30);
            d.pe = function() {
                b() && (d.stop(), a())
            }
        },
        print: function() {},
        l: Sf
    };
    Rf.g = "7B";
    Rf.prototype = {
        l: Rf
    };
    zc.g = "7C";
    zc.prototype = {
        load: function(a) {
            if (this.$p(a) || this.lk(a)) return !1;
            this.rq++;
            a = new ye(a, this);
            a.ja = this.vv--;
            if (this.Eh.length == this.AC) return this.ld.enqueue(a), !0;
            this.Eh.push(a);
            a.load();
            return !0
        },
        stop: function() {
            this.ld.clear()
        },
        tD: function(a) {
            if (!this.$p(a) || this.lk(a)) return !1;
            var b = na.find(this.ld, function(b) {
                return -1 < b.rf.url.indexOf(a)
            });
            if (null == b) return !1;
            this.ld.ID(b, ++this.uv);
            return !0
        },
        gm: function(a) {
            if (null == this.ld || 0 == this.rq) return 1;
            if (null == a) return this.Fv / this.rq;
            for (var b =
                    0, c = 0, d = 0, e = this.Eh; d < e.length;) {
                var f = e[d];
                ++d;
                if (null == a || -1 < a.indexOf(f.rf.url)) ++b, c += f.rf.Vq
            }
            for (d = this.ld.iterator(); d.aa();)
                if (e = d.next(), null == a || -1 < a.indexOf(e.rf.url)) ++b, c += 0;
            for (d = 0; d < a.length;) e = a[d], ++d, this.lk(e) && (++b, ++c);
            return 0 == b ? 0 : c / b
        },
        $p: function(a) {
            function b(b) {
                return -1 < b.rf.url.indexOf(a)
            }
            return null == this.ld ? !1 : 0 < na.count(this.ld, b) + na.count(this.Eh, b)
        },
        WC: function(a) {
            this.Fq(new Rf(a.rf.url, a.rf.data, a.rf.Gb));
            null != a.zg && (a.zg(a), a.zg = null);
            F.remove(this.Eh, a);
            this.Fv++;
            0 < this.ld.i ? (a = this.ld.gA(), this.Eh.push(a), a.load()) : 0 == this.Eh.length && (this.vv = this.uv = 0, null != this.ke && this.ke())
        },
        VC: function() {
            this.stop()
        },
        lk: function(a) {
            return m.mm(m.Bf(a))
        },
        l: zc
    };
    ze.g = "7D";
    ze.Zb = !0;
    ze.prototype = {
        l: ze
    };
    ye.g = "7E";
    ye.ga = [ze];
    ye.prototype = {
        load: function() {
            var a = this;
            this.rf.load(function() {
                zc.tt += 0;
                a.pg.WC(a);
                a.u()
            }, function() {
                a.pg.VC();
                a.u()
            })
        },
        u: function() {
            this.pg = null;
            this.rf.u()
        },
        l: ye
    };
    m.g = "7F";
    m.WD = function(a) {
        m.yo = a
    };
    m.qB = function() {
        return m.lx
    };
    m.xE = function(a) {
        m.lx =
            a
    };
    m.qu = function() {
        return m.language
    };
    m.tr = function(a) {
        if (null != a && !(new Y("^[a-z]{2}$", "")).match(a)) throw 0;
        m.language = a;
        na.wa("tr pt pl nl it fr es en de".split(" "), function(a) {
            return a == m.language
        }) || (m.language = "en")
    };
    m.nh = function() {
        return m.it
    };
    m.UD = function(a) {
        if (!(new Y("^[a-z3]{3}$", "")).match(a)) throw 0;
        m.it = a
    };
    m.pB = function() {
        return m.oF.slice()
    };
    m.VA = function() {
        return m.Lu.slice()
    };
    m.ee = function(a) {
        if (m.mn.G.hasOwnProperty(a)) return m.mn.G[a];
        var b = m.Zg[a],
            c = new Y("{(?:language|audio|quality)}",
                "");
        c.match(b) && (c = new Y("{language}", ""), c.match(b) && (b = b.replace(c.r, G.La(m.language))), c = new Y("{audio}", "g"), c.match(b) && (b = b.replace(c.r, m.it)), c = new Y("{quality}", "g"), c.match(b) && (b = b.replace(c.r, G.La(m.lx).toLowerCase())));
        m.mn.G[a] = "" + m.yo + "/" + b;
        return m.mn.G[a]
    };
    m.iB = function(a) {
        null == a && (a = m.sp());
        for (var b = [], c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            b.push(m.ee(d))
        }
        return b
    };
    m.sp = function() {
        for (var a = [], b = 0; 257 > b;) {
            var c = b++;
            a.push(c)
        }
        return a
    };
    m.mB = function() {
        for (var a = [], b = 0, c = m.qD; b < c.length;) {
            var d =
                c[b];
            ++b;
            m.jx(d) && a.push(d)
        }
        return a
    };
    m.Bf = function(a) {
        function b(b, c) {
            b.match(a) && (a = b.replace(a, c))
        }
        b(new Y("^(" + m.yo + "/)(.*)", ""), "$2");
        var c = "tr pt pl nl it fr es en de".split(" ");
        0 < c.length && b(new Y("([/_])(" + c.join("|") + ")(/|(\\.\\S{3,4}$))", ""), "$1{language}$3");
        b(new Y("([/_])(sd|hd)(/|(\\.\\S{3,4}$))", ""), "$1{quality}$3");
        c = ["ogg", "mp3", "aac"];
        0 < c.length && (b(new Y("(.*?)\\.(" + c.join("|") + ")$", ""), "$1.{audio}"), b(new Y("((" + c.join("|") + ")\\/)", ""), "{audio}/"));
        return m.Zg.indexOf(a)
    };
    m.FH =
        function() {
            return 0
        };
    m.jx = function(a) {
        if (m.Xp(a)) {
            var b = m.nh();
            return null != b && na.wa(["ogg", "mp3", "aac"], function(a) {
                return a == b
            })
        }
        return !0
    };
    m.getData = function(a) {
        return m.Qi.G[a]
    };
    m.setData = function(a, b, c) {
        null != c && (m.Gb.G[a] = c);
        c = m.Qi.G.hasOwnProperty(a);
        if (m.Rl.G.hasOwnProperty(a)) m.locked.G[a] = !0, c = m.Rl.G[a], m.Rl.remove(a), c(a, b, function(b) {
            m.locked.remove(a);
            m.setData(a, b)
        });
        else if (m.Qi.G[a] = b, !c && null != m.ck)
            for (b = m.ck, c = 0; c < b.length;) {
                var d = b[c];
                if (d.id == a) {
                    var e = d.Go;
                    d.Go = null;
                    b[c] = b[b.length -
                        1];
                    b.pop();
                    for (d = 0; d < e.length;) {
                        var f = e[d];
                        ++d;
                        f(a)
                    }
                } else ++c
            }
    };
    m.mm = function(a) {
        return null == m.Qi.G[a] ? m.locked.G[a] : !0
    };
    m.cB = function(a) {
        return m.Gb.G[a]
    };
    m.Yd = function(a) {
        var b = m.getData(a);
        if (null != b) try {
            b instanceof HTMLImageElement && (m.Qi.G[a] = null, z.ba(b, HTMLImageElement).src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
        } catch (c) {}
        return m.Qi.remove(a)
    };
    m.Xp = function(a) {
        return (new Y("{audio}", "")).match(m.Zg[a])
    };
    m.Ce = function(a) {
        return (new Y("music_", "")).match(m.Zg[a])
    };
    m.XB = function(a) {
        return (new Y("sounds\\.", "g")).match(m.Zg[a])
    };
    m.Xu = function(a) {
        return (new Y("\\.(" + m.Lu.join("|") + ")$", "")).match(m.Zg[a])
    };
    m.FB = function(a) {
        return (new Y("{quality}", "")).match(m.Zg[a])
    };
    m.cn = function(a, b, c) {
        null != c && (m.Rl.G[a] = c);
        if (null != b && null != m.ee(a))
            if (m.mm(a)) b(a);
            else {
                null == m.ck && (m.ck = []);
                c = 0;
                for (var d = m.ck; c < d.length;) {
                    var e = d[c];
                    ++c;
                    if (e.id == a) {
                        e.Go.push(b);
                        return
                    }
                }
                m.ck.push(new Qf(a, b))
            }
    };
    m.Dz = function(a) {
        if (a instanceof ArrayBuffer) {
            if ("TextDecoder" in window) return a =
                new DataView(a), (new TextDecoder("utf-8")).decode(a);
            a = ma.an(a);
            return a.yp(0, a.length)
        }
        return G.La(a)
    };
    m.EH = function() {
        return "tr pt pl nl it fr es en de".split(" ")
    };
    m.DH = function() {
        return ["ogg", "mp3", "aac"]
    };
    m.YF = function() {
        return [225, 224, 223, 222, 221, 220, 219, 218, 217, 216]
    };
    m.ZF = function() {
        return [256, 255, 254]
    };
    m.vG = function() {
        return [184, 183, 182, 181]
    };
    m.uG = function() {
        return [189, 188]
    };
    m.oG = function() {
        return [199, 198, 197, 196, 195, 194, 193, 192, 191, 190]
    };
    m.mG = function() {
        return [205, 204]
    };
    m.dG = function() {
        return [241,
            240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226
        ]
    };
    m.cG = function() {
        return [244, 243]
    };
    m.bG = function() {
        return [246, 245]
    };
    m.aG = function() {
        return [248, 247]
    };
    m.$F = function() {
        return [251, 250, 249]
    };
    m.yG = function() {
        return [168, 167]
    };
    m.xG = function() {
        return [170, 169]
    };
    m.wG = function() {
        return [172, 171]
    };
    m.tG = function() {
        return [191, 190]
    };
    m.sG = function() {
        return [193, 192]
    };
    m.rG = function() {
        return [195, 194]
    };
    m.qG = function() {
        return [197, 196]
    };
    m.pG = function() {
        return [199, 198]
    };
    m.nG = function() {
        return [201, 200]
    };
    m.jG = function() {
        return [231,
            230
        ]
    };
    m.vH = function() {
        return [23, 22]
    };
    m.uH = function() {
        return [25, 24]
    };
    m.tH = function() {
        return [27, 26]
    };
    m.sH = function() {
        return [29, 28]
    };
    m.rH = function() {
        return [31, 30]
    };
    m.qH = function() {
        return [38, 37]
    };
    m.pH = function() {
        return [40, 39]
    };
    m.oH = function() {
        return [42, 41]
    };
    m.nH = function() {
        return [44, 43]
    };
    m.mH = function() {
        return [46, 45]
    };
    m.lH = function() {
        return [53, 52]
    };
    m.kH = function() {
        return [55, 54]
    };
    m.jH = function() {
        return [57, 56]
    };
    m.iH = function() {
        return [59, 58]
    };
    m.hH = function() {
        return [61, 60]
    };
    m.gH = function() {
        return [68, 67]
    };
    m.fH = function() {
        return [70, 69]
    };
    m.eH = function() {
        return [72, 71]
    };
    m.dH = function() {
        return [74, 73]
    };
    m.cH = function() {
        return [76, 75]
    };
    m.bH = function() {
        return [83, 82]
    };
    m.aH = function() {
        return [85, 84]
    };
    m.$G = function() {
        return [87, 86]
    };
    m.ZG = function() {
        return [89, 88]
    };
    m.YG = function() {
        return [91, 90]
    };
    m.XG = function() {
        return [98, 97]
    };
    m.WG = function() {
        return [100, 99]
    };
    m.VG = function() {
        return [102, 101]
    };
    m.UG = function() {
        return [104, 103]
    };
    m.TG = function() {
        return [106, 105]
    };
    m.SG = function() {
        return [113, 112]
    };
    m.RG = function() {
        return [115,
            114
        ]
    };
    m.QG = function() {
        return [117, 116]
    };
    m.PG = function() {
        return [119, 118]
    };
    m.OG = function() {
        return [121, 120]
    };
    m.NG = function() {
        return [128, 127]
    };
    m.MG = function() {
        return [130, 129]
    };
    m.LG = function() {
        return [132, 131]
    };
    m.KG = function() {
        return [134, 133]
    };
    m.JG = function() {
        return [136, 135]
    };
    m.IG = function() {
        return [143, 142]
    };
    m.HG = function() {
        return [145, 144]
    };
    m.GG = function() {
        return [147, 146]
    };
    m.FG = function() {
        return [149, 148]
    };
    m.EG = function() {
        return [151, 150]
    };
    m.DG = function() {
        return [158, 157]
    };
    m.CG = function() {
        return [160, 159]
    };
    m.BG = function() {
        return [162, 161]
    };
    m.AG = function() {
        return [164, 163]
    };
    m.zG = function() {
        return [166, 165]
    };
    m.lG = function() {
        return [227, 226]
    };
    m.kG = function() {
        return [229, 228]
    };
    m.iG = function() {
        return [233, 232]
    };
    m.hG = function() {
        return [235, 234]
    };
    m.gG = function() {
        return [237, 236]
    };
    m.fG = function() {
        return [239, 238]
    };
    m.eG = function() {
        return [241, 240]
    };
    Qf.g = "80";
    Qf.prototype = {
        l: Qf
    };
    dc.g = "81";
    dc.xH = function() {};
    dc.wH = function() {};
    dc.prototype = {
        u: function() {
            this.ib = this.Ik = this.zg = this.data = null
        },
        load: function(a, b) {
            function c(a) {
                return 0 <
                    a.length ? (new Y("(?:" + a.join("|") + ")", "i")).match(e) : !1
            }
            var d = this;
            this.zg = a;
            this.Ik = b;
            var e = "";
            a = this.url;
            b = dc.state;
            null != va[a] ? b.Bd(a, 1) : b.G[a] = 1;
            a = new Y("\\.(\\w+)$", "g");
            a.match(this.url) && (e = a.Fb(1));
            c(["ogg", "mp3", "aac"]) ? this.zs(this.url, "arraybuffer", function(a) {
                d.ke(a)
            }) : c(m.VA()) ? (this.ib = window.document.createElement("img"), this.ib.onload = function() {
                d.ib.onload = null;
                d.ib.onerror = null;
                var a = window.document.createElement("canvas");
                a.width = d.ib.width;
                a.height = d.ib.height;
                a.getContext("2d",
                    null).drawImage(d.ib, 0, 0);
                d.ke(a)
            }, this.ib.onerror = function() {}, this.zs(this.url, "blob", function(a) {
                var b = new FileReader;
                b.onload = function(c) {
                    (new Y("\\.png$", "")).match(d.url) ? d.Gb = d.lB(c.target.result) : (new Y("\\.jpg$", "")).match(d.url) && (d.Gb = d.YA(c.target.result));
                    d.ib.src = URL.createObjectURL(a);
                    b.onload = null;
                    b.onerror = null
                };
                b.onerror = function() {};
                b.readAsArrayBuffer(a)
            })) : (a = "arraybuffer", c(m.pB()) && (a = "text"), this.zs(this.url, a, function(a) {
                d.ke(a)
            }))
        },
        ke: function(a) {
            this.data = a;
            a = this.url;
            var b =
                dc.state;
            null != va[a] ? b.Bd(a, 2) : b.G[a] = 2;
            this.zg();
            this.zg = null
        },
        zs: function(a, b, c) {
            var d = this,
                e = new XMLHttpRequest;
            e.onerror = function() {
                null != d.Ik && d.Ik();
                e.onerror = e.onload = e.onprogress = null
            };
            e.onload = function() {
                d.Vq = 1;
                if (404 == e.status) null != d.Ik && d.Ik();
                else {
                    var a = e.response;
                    e.onerror = e.onload = e.onprogress = null;
                    c(a)
                }
            };
            e.onprogress = function(a) {
                0 < a.total && (d.Vq = a.loaded / a.total)
            };
            try {
                e.open("GET", null != this.fo ? "" + a + "?" + this.fo : a, !0), e.responseType = b, e.send()
            } catch (f) {}
            return e
        },
        lB: function(a) {
            a = ma.an(a);
            a = new Wa(a);
            a.Qw(!0);
            if (137 != a.L() || 80 != a.L() || 78 != a.L() || 71 != a.L() || 13 != a.L() || 10 != a.L() || 26 != a.L() || 10 != a.L()) return null;
            a: for (;;) {
                var b = a.nc(),
                    c = a.Tk(4);
                b = a.read(b);
                a.nc();
                switch (c) {
                    case "IEND":
                        break a;
                    case "tEXt":
                        c = new Wa(b);
                        b = c.$h;
                        var d = "",
                            e = c.L();
                        for (--b; 0 != e;) d += String.fromCodePoint(e), e = c.L(), --b;
                        if ("Comment" != d) c = null;
                        else {
                            for (d = ""; 0 < b;) e = c.L(), d += String.fromCodePoint(e), --b;
                            c = d
                        }
                        if (null != c) return c
                }
            }
            return null
        },
        YA: function(a) {
            a = new DataView(a);
            if (255 != a.getUint8(0) || 216 != a.getUint8(1)) return null;
            for (var b = 2, c = a.byteLength; b < c && 255 == a.getUint8(b);) {
                if (254 == a.getUint8(b + 1)) {
                    var d = b + 4,
                        e = a.getUint16(b + 2) - 2;
                    b = "";
                    c = d;
                    for (d += e; c < d;) e = a.getUint8(c), b += String.fromCodePoint(e), ++c;
                    return b
                }
                b += 2 + a.getUint16(b + 2)
            }
            return null
        },
        l: dc
    };
    yc.g = "82";
    yc.isSupported = function() {
        return K.isSupported()
    };
    yc.nh = function() {
        return K.nh()
    };
    Yc.g = "83";
    Yc.prototype = {
        l: Yc
    };
    ka.g = "84";
    ka.X = function() {
        null == ka.Gd && (ka.Gd = K.fC() ? new Dd : new xe);
        return ka.Gd
    };
    ka.prototype = {
        fj: function() {},
        Uk: function() {},
        play: function() {
            return -1
        },
        stop: function(a, b) {
            null == b && (b = 0);
            if (0 > a) return !1;
            if (1E4 > a) {
                for (var c = !1, d = 0, e = na.filter(this.Ic, function(b) {
                        return b.Jd.id == a
                    }); d < e.length;) {
                    var f = e[d];
                    ++d;
                    c = !0;
                    f.stop(b)
                }
                return c
            }
            c = na.find(this.Ic, function(b) {
                return b.id == a
            });
            return null != c ? (c.stop(b), !0) : !1
        },
        Nd: function(a) {
            return 0 > a ? !1 : 1E4 > a ? na.wa(this.Ic, function(b) {
                return b.Jd.id == a
            }) : na.wa(this.Ic, function(b) {
                return b.id == a
            })
        },
        Bf: function(a) {
            var b = na.find(this.Ic, function(b) {
                return b.Jd.id == a
            });
            return null != b ? b.id : -1
        },
        hm: function(a) {
            return 1E4 >
                a ? na.find(this.Ic, function(b) {
                    return b.Jd.id == a
                }) : na.find(this.Ic, function(b) {
                    return b.id == a
                })
        },
        sc: function(a) {
            a = this.hm(a);
            return null != a ? a.sc() : null
        },
        cd: function(a) {
            a = this.rc[a];
            return null != this.rc ? a.data.duration : NaN
        },
        Zu: function(a) {
            return null != this.rc[a]
        },
        dl: function(a, b) {
            if (null == a) {
                var c = this.Ic;
                a = c.f;
                var d = 0;
                for (c = c.i; d < c;) {
                    var e = d++;
                    e = a[e];
                    e.Jd.Ce && e.xr(b)
                }
            } else
                for (e = this.Ic, d = e.f, c = 0, e = e.i; c < e;) {
                    var f = c++;
                    f = d[f];
                    f.Jd.Ce && (1E4 > a ? f.Jd.id : f.id) == a && f.xr(b)
                }
        },
        mj: function(a) {
            this.mq = 0 > a ? 0 :
                1 < a ? 1 : a;
            this.Cx();
            this.Hx()
        },
        Jw: function(a) {
            this.lq = 0 > a ? 0 : 1 < a ? 1 : a;
            this.Hx()
        },
        lj: function(a) {
            this.kq = 0 > a ? 0 : 1 < a ? 1 : a;
            this.Cx()
        },
        ur: function(a, b) {
            var c = this.Ic,
                d = c.f,
                e = 0;
            for (c = c.i; e < c;) {
                var f = e++;
                f = d[f];
                f.id == a && f.ur(b)
            }
        },
        Yt: function(a, b, c) {
            this.Xt(a, b, 1, L.Rh(), function() {
                null != c && c()
            })
        },
        GA: function(a, b, c, d) {
            null == d && (d = !0);
            var e = this;
            this.Xt(a, b, 0, L.mc(2), function() {
                d && e.stop(a);
                null != c && c()
            })
        },
        Xt: function(a, b, c, d, e) {
            a = this.hm(a);
            if (null != a) {
                var f = a.volume - c;
                (0 < f ? .01 > f : .01 > -f) || (null == d && (d = L.Gm()),
                    null == e && (e = function() {}), new Ed(a, c, b, d, e))
            }
        },
        Dt: function(a, b, c, d) {
            var e = this,
                f = this.hm(a);
            if (null != f && (b = this.hm(b), null != b)) {
                var g = 0,
                    h = function() {
                        2 == (g += 1) && (e.stop(a), null != d && d())
                    };
                new Ed(f, 0, c, L.mc(2), h);
                new Ed(b, 1, c, L.Rh(), h)
            }
        },
        ww: function(a, b, c) {
            if (!this.enabled || !this.Zu(a)) return -1;
            if (b && this.Nd(a)) return this.Bf(a);
            b && (c = !0);
            if (!c && this.qF(a)) return -1;
            a = this.fB(this.rc[a].Ce, c);
            return 0 > a ? -1 : a
        },
        Uv: function(a) {
            var b = this.Ic;
            b.i == b.C && b.R();
            b.f[b.i++] = a;
            this.Ic.i > this.qv && (this.qv = this.Ic.i)
        },
        Tv: function(a) {
            this.fg &= ~(1 << a.channel);
            this.Ic.remove(a)
        },
        qF: function(a) {
            a = this.rc[a];
            if (a.Ce) return !1;
            var b = D.time;
            if (b - a.ev < this.mx) return !0;
            a.ev = b;
            return !1
        },
        fB: function(a, b) {
            if (a) {
                for (b = 0; b < this.tv;) {
                    if (0 == (this.fg & 1 << b)) return this.fg |= 1 << b, b;
                    ++b
                }
                return -1
            }
            a = -1;
            for (var c = this.tv, d = c + this.zC; c < d;) {
                if (0 == (this.fg & 1 << c)) {
                    this.fg |= 1 << c;
                    a = c;
                    break
                }++c
            }
            if (b && 0 > a) {
                b = null;
                a = 0;
                for (c = this.Ic.iterator(); c.aa();) d = c.next(), !d.Jd.Ce && !d.loop && d.gm() > a && (a = d.gm(), b = d);
                if (null == b) return -1;
                a = b.channel;
                b.stop()
            }
            return a
        },
        Cx: function() {
            var a = this.Ic,
                b = a.f,
                c = 0;
            for (a = a.i; c < a;) {
                var d = c++;
                d = b[d];
                d.Jd.Ce && d.xj()
            }
        },
        Hx: function() {
            var a = this.Ic,
                b = a.f,
                c = 0;
            for (a = a.i; c < a;) {
                var d = c++;
                d = b[d];
                d.Jd.Ce || d.xj()
            }
        },
        l: ka
    };
    Xc.g = "85";
    Ed.g = "86";
    Ed.prototype = {
        l: Ed
    };
    Vb.g = "87";
    Vb.prototype = {
        u: function() {
            this.ke = this.Ph = this.Jd = null
        },
        stop: function() {},
        xr: function(a) {
            this.volume = a;
            this.xj()
        },
        ur: function(a) {
            this.pan = a;
            this.Ex()
        },
        gm: function() {
            return this.sc() / this.cd()
        },
        sc: function() {
            return NaN
        },
        cd: function() {
            return NaN
        },
        xj: function() {},
        Ex: function() {},
        l: Vb
    };
    K.g = "88";
    K.Wu = function() {
        return !!window.MSInputMethodContext && !!document.documentMode
    };
    K.WB = function() {
        return K.active
    };
    K.fC = function() {
        return K.fv
    };
    K.aq = function() {
        return null != K.bi && K.bi ? "suspended" == K.context.state : !1
    };
    K.resume = function(a) {
        try {
            if ("running" != K.context.state) {
                K.context.resume().then(function() {
                    K.active = !0;
                    a()
                });
                return
            }
        } catch (b) {}
        K.active = !0;
        a()
    };
    K.isSupported = function() {
        function a() {
            try {
                if ("undefined" !== typeof AudioContext) return new AudioContext;
                if ("undefined" !== typeof webkitAudioContext) return new webkitAudioContext
            } catch (d) {}
            return null
        }
        if (null != K.bi) return K.bi;
        if (K.Wu()) return K.bi = !1, K.fv = !0;
        K.bi = !1;
        try {
            K.context = a();
            K.bi = null != K.context;
            if ((new Y("i(Phone|Pad|Pod)", "")).match(window.navigator.userAgent) && null != K.context && 44100 != K.context.sampleRate) {
                var b = K.context.createBuffer(1, 1, 44100),
                    c = K.context.createBufferSource();
                c.buffer = b;
                c.connect(K.context.destination);
                c.start(0);
                c.disconnect();
                K.context.close();
                K.context = a()
            }
            K.context.onstatechange = function() {
                K.active = !K.aq()
            };
            K.active = !K.aq()
        } catch (d) {}
        return K.bi
    };
    K.nh = function() {
        function a(b) {
            if (b instanceof Array) {
                for (var e = 0, f = 0; f < b.length;) {
                    var g = b[f];
                    ++f;
                    g = a(g);
                    g > e && (e = g)
                }
                return e
            }
            b = c.canPlayType(b).replace(/^no$/, "");
            return fa.Ia(d, b)
        }
        var b = K.vo;
        if (K.Wu()) return "mp3";
        if ("undefined" !== typeof b) return b;
        var c = null;
        try {
            c = "undefined" !== typeof Audio ? new Audio : null
        } catch (h) {
            return null
        }
        if (!c || "function" !== typeof c.canPlayType) return null;
        var d = {
            probably: 2,
            maybe: 1,
            "": 0
        };
        b = {};
        b.mp3 = a("audio/mp3;");
        b.ogg = a('audio/ogg; codecs="vorbis"');
        b.aac = a("audio/aac;"); - 1 < window.navigator.userAgent.indexOf("OPR") && (b.aac =
            0);
        for (var e = 0, f = ["aac", "ogg", "mp3"]; e < f.length;) {
            var g = f[e];
            ++e;
            if (0 < fa.Ia(b, g)) return K.vo = g
        }
        return K.vo = null
    };
    K.getContext = function() {
        K.isSupported();
        return K.context
    };
    vg.g = "89";
    vg.FA = function(a, b) {
        var c = K.getContext(),
            d = a.sampleRate,
            e = [],
            f = 0,
            g = b.length;
        if (1 == a.numberOfChannels)
            for (var h = a.getChannelData(0); f < g;) {
                var l = d / 1E3 * b[f++] | 0,
                    k = d / 1E3 * b[f++] | 0;
                a = c.createBuffer(1, k - l, d);
                l = h.subarray(l, k);
                try {
                    a.copyToChannel(l, 0)
                } catch (q) {
                    a.getChannelData(0).set(l)
                }
                e.push(a)
            } else
                for (h = a.getChannelData(0),
                    a = a.getChannelData(1); f < g;) {
                    var m = d / 1E3 * b[f++] | 0,
                        p = d / 1E3 * b[f++] | 0;
                    l = c.createBuffer(2, p - m, d);
                    k = h.subarray(m, p);
                    m = a.subarray(m, p);
                    try {
                        l.copyToChannel(k, 0), l.copyToChannel(m, 1)
                    } catch (q) {
                        l.getChannelData(0).set(k), l.getChannelData(1).set(m)
                    }
                    e.push(l)
                }
        return e
    };
    Dd.g = "8A";
    Dd.F = ka;
    Dd.prototype = r(ka.prototype, {
        fj: function(a, b, c, d) {
            function e() {
                h.removeEventListener("canplaythrough", e);
                g = !0
            }
            null == c && (c = !1);
            var f = this;
            ka.prototype.fj.call(this, a, b, c, d);
            var g = !1,
                h = new Audio;
            h.addEventListener("canplaythrough",
                e, !1);
            h.src = b;
            h.rn = "auto";
            D.Ma(function() {
                g && 4 == h.readyState && (f.rc[a] = new Yc(a, h, c), d(h), D.detach())
            })
        },
        Uk: function(a, b, c) {
            var d = this;
            ka.prototype.Uk.call(this, a, b, c);
            this.Zc = a;
            this.fj(1E3, b, !1, function(b) {
                for (var e = 0, g = a.length; e < g;) {
                    var h = e++;
                    d.rc[h + 1E3] = new Yc(h + 1E3, b, !1)
                }
                c(b)
            })
        },
        play: function(a, b, c, d, e) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            c = this.ww(a, b, c);
            if (0 > c) return -1;
            a = a >= Xc.jo ? new Cd(this, this.rc[Xc.jo], a - Xc.jo) : new Cd(this, this.rc[a], null, b);
            a.id = this.Av++;
            a.channel = c;
            a.loop =
                b;
            a.offset = d;
            a.ke = e;
            this.Uv(a);
            return a.id
        },
        l: Dd
    });
    Cd.g = "8B";
    Cd.F = Vb;
    Cd.prototype = r(Vb.prototype, {
        sc: function() {
            return (this.node.currentTime - this.min) % this.cd()
        },
        cd: function() {
            return this.max - this.min
        },
        stop: function() {
            this.Qk && (this.node.pause(), this.node.removeEventListener("timeupdate", E(this, this.Wv)), this.node.removeEventListener("loadedmetadata", E(this, this.Hq)), this.node = this.node.onended = null, this.Ph.Tv(this), this.Qk = !1)
        },
        Wv: function() {
            this.node.currentTime > this.max && this.stop()
        },
        Hq: function() {
            this.node.currentTime =
                this.min;
            this.node.removeEventListener("loadedmetadata", E(this, this.Hq))
        },
        xj: function() {
            this.node.volume = (this.Jd.Ce ? this.Ph.kq : this.Ph.lq) * this.Ph.mq * this.volume
        },
        l: Cd
    });
    xe.g = "8C";
    xe.F = ka;
    xe.prototype = r(ka.prototype, {
        fj: function(a, b, c, d) {
            null == c && (c = !1);
            var e = this;
            ka.prototype.fj.call(this, a, b, c, d);
            this.decode(b, function(b) {
                null == b ? d(null) : (e.rc[a] = new Yc(a, b, c), d(b))
            })
        },
        Uk: function(a, b, c) {
            var d = this;
            ka.prototype.Uk.call(this, a, b, c);
            this.decode(b, function(b) {
                if (null == b) c(null);
                else try {
                    for (var e =
                            vg.FA(b, a), g = 0, h = a.length; g < h;) {
                        var l = g++;
                        d.rc[l + 1E3] = new Yc(l + 1E3, e[l], !1)
                    }
                    c(b)
                } catch (y) {
                    c(null)
                }
            })
        },
        play: function(a, b, c, d, e) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            if (!K.WB()) return -1;
            c = this.ww(a, b, c);
            if (0 > c) return -1;
            a = new Hb(this, this.rc[a]);
            a.id = this.Av++;
            a.channel = c;
            a.loop = b;
            a.offset = d;
            a.ke = e;
            a.play();
            this.Uv(a);
            return a.id
        },
        mj: function(a) {
            this.mq = 0 > a ? 0 : 1 < a ? 1 : a;
            this.tp().Dn(a)
        },
        lj: function(a) {
            this.kq = 0 > a ? 0 : 1 < a ? 1 : a;
            this.su().Dn(a)
        },
        Jw: function(a) {
            this.lq = 0 > a ? 0 : 1 < a ? 1 : a;
            this.tu().Dn(a)
        },
        decode: function(a, b) {
            K.getContext().decodeAudioData(a, function(a) {
                b(a)
            }, function() {
                b(null)
            })
        },
        tp: function() {
            null == this.Pm && (this.Pm = new xc, this.Pm.type = 5, this.Pm.connect(new we));
            return this.Pm
        },
        tu: function() {
            null == this.Rm && (this.Rm = new xc, this.Rm.type = 3, this.Rm.connect(this.tp()));
            return this.Rm
        },
        su: function() {
            null == this.Qm && (this.Qm = new xc, this.Qm.type = 4, this.Qm.connect(this.tp()));
            return this.Qm
        },
        l: xe
    });
    Hb.g = "8D";
    Hb.F = Vb;
    Hb.prototype = r(Vb.prototype, {
        u: function() {
            Vb.prototype.u.call(this);
            for (var a =
                    this.od; null != a;) {
                var b = a.W;
                if (2 < a.type) break;
                F.remove(a.W.inputs, a);
                a.n.disconnect();
                a.u();
                a = b
            }
            this.od = this.data = null
        },
        play: function() {
            if (0 < this.offset && this.offset > this.data.length - 50) this.onended();
            else {
                this.startTime = K.getContext().currentTime;
                if (null == this.od) {
                    this.od = new ve;
                    var a = this.Ph;
                    this.od.connect(this.Jd.Ce ? a.su() : a.tu())
                }
                this.Qk = !0;
                this.od.play(this.data, this.loop, this.offset, E(this, this.onended))
            }
        },
        stop: function(a) {
            null == a && (a = 0);
            if (this.Qk && null != this.od) try {
                this.od.stop(this.startTime +
                    a)
            } catch (b) {
                this.onended()
            }
        },
        sc: function() {
            return (K.getContext().currentTime - this.startTime) % this.cd()
        },
        cd: function() {
            return this.data.duration
        },
        xj: function() {
            if (Hb.du && null != this.od) try {
                var a = this.od.get(2);
                if (null == a) {
                    a = new xc;
                    var b = this.od.get(1);
                    null == b ? this.od.append(a) : b.append(a)
                }
                a.Dn(this.volume)
            } catch (c) {
                Hb.du = !1
            }
        },
        Ex: function() {
            if (Hb.dw && null != this.od) try {
                var a = this.od.get(1);
                null == a && (a = new ue, this.od.append(a));
                a.AE(this.pan)
            } catch (b) {
                Hb.dw = !1
            }
        },
        onended: function() {
            this.Qk = !1;
            var a = this.ke;
            this.Ph.Tv(this);
            this.u();
            null != a && a()
        },
        l: Hb
    });
    Za.g = "8E";
    Za.prototype = {
        get: function(a) {
            for (var b = this; null != b;) {
                if (b.type == a) return b;
                b = b.W
            }
            return null
        },
        u: function() {
            this.n = this.W = this.inputs = null
        },
        connect: function(a) {
            this.W = a;
            a.inputs.push(this);
            this.n.disconnect();
            this.n.connect(a.n)
        },
        append: function(a) {
            F.remove(this.W.inputs, this);
            a.connect(this.W);
            this.connect(a)
        },
        l: Za
    };
    we.g = "8F";
    we.F = Za;
    we.prototype = r(Za.prototype, {
        l: we
    });
    ve.g = "90";
    ve.F = Za;
    ve.prototype = r(Za.prototype, {
        u: function() {
            this.n.onended =
                null;
            Za.prototype.u.call(this)
        },
        play: function(a, b, c, d) {
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
        l: ve
    });
    xc.g = "91";
    xc.F = Za;
    xc.prototype = r(Za.prototype, {
        Dn: function(a) {
            this.n.gain.value = a
        },
        l: xc
    });
    ue.g = "92";
    ue.F = Za;
    ue.prototype = r(Za.prototype, {
        AE: function(a) {
            var b = this.n;
            b.pan.setTargetAtTime(a, K.getContext().currentTime, .015);
            b.pan.value = a
        },
        l: ue
    });
    Wc.g = "93";
    Wc.ga = [Nb];
    Wc.prototype = {
        Cw: function(a) {
            for (var b = this.f, c = 0, d = this.$ * this.da; c <
                d;) {
                var e = c++;
                b[e] = a
            }
            return this
        },
        resize: function(a, b) {
            if (a == this.$ && b == this.da) return this;
            var c = this.f;
            this.f = Array(a * b);
            if (a == this.$) return ea.zb(c, 0, this.f, 0, this.$ * (b < this.da ? b : this.da)), this.$ = a, this.da = b, this;
            for (var d = a < this.$ ? a : this.$, e, f, g = this.f, h = 0, l = b < this.da ? b : this.da; h < l;) {
                f = h++;
                e = f * a;
                f *= this.$;
                for (var k = 0, m = d; k < m;) {
                    var p = k++;
                    g[e + p] = c[f + p]
                }
            }
            this.$ = a;
            this.da = b;
            return this
        },
        iterator: function() {
            if (this.Rd) {
                if (null == this.Eb) this.Eb = new Bd(this);
                else {
                    var a = this.Eb;
                    a.f = a.tb.f;
                    var b = a.tb;
                    a.ub = b.$ * b.da;
                    a.Ja = 0
                }
                return this.Eb
            }
            return new Bd(this)
        },
        l: Wc
    };
    Vc.g = "94";
    Vc.Zb = !0;
    Vc.prototype = {
        l: Vc
    };
    Bd.g = "95";
    Bd.ga = [Vc];
    Bd.prototype = {
        aa: function() {
            return this.Ja < this.ub
        },
        next: function() {
            return this.f[this.Ja++]
        },
        l: Bd
    };
    te.g = "96";
    te.prototype = {
        l: te
    };
    Ad.g = "97";
    Ad.ga = [Vc];
    Ad.prototype = {
        u: function() {
            this.f = this.tb = null
        },
        aa: function() {
            return this.Ja < this.ub
        },
        next: function() {
            return this.f[this.Ja++]
        },
        remove: function() {
            this.tb.tw(--this.Ja);
            this.ub--
        },
        l: Ad
    };
    se.g = "98";
    se.Zb = !0;
    se.ga = [Nb];
    zd.g = "99";
    zd.ga =
        [se];
    zd.prototype = {
        clear: function(a) {
            null == a && (a = !1);
            a && ea.Kf(this.f);
            this.Ta = this.i = 0
        },
        BF: function() {
            if (0 == this.i) return [];
            for (var a = this.f, b = Array(this.i), c = 0, d = this.i; c < d;) {
                var e = c++;
                b[e] = a[(e + this.Ta) % this.C]
            }
            return b
        },
        R: function() {
            var a = this.C;
            this.C = wc.pi(this.Md, this.C);
            this.Tf(a, this.C)
        },
        Tf: function(a, b) {
            var c = Array(b);
            a < b ? this.Ta + this.i > a ? (b = a - this.Ta, a -= b, ea.zb(this.f, this.Ta, c, 0, b), ea.zb(this.f, 0, c, b, a)) : ea.zb(this.f, this.Ta, c, 0, this.i) : this.Ta + this.i > a ? (b = this.i - this.Ta, ea.zb(this.f, this.Ta,
                c, 0, a - this.Ta), ea.zb(this.f, 0, c, this.Ta, b)) : ea.zb(this.f, this.Ta, c, 0, this.i);
            this.f = c;
            this.Ta = 0
        },
        l: zd
    };
    Pf.g = "9A";
    Pf.Zb = !0;
    Pf.ga = [Nb];
    Ub.g = "9B";
    Ub.ga = [Pf];
    Ub.prototype = {
        clear: function(a) {
            null == a && (a = !1);
            a && ea.Kf(this.f);
            this.T = 0
        },
        R: function() {
            this.C = wc.pi(this.Md, this.C);
            this.Tf(this.C)
        },
        Tf: function(a) {
            a = Array(a);
            ea.zb(this.f, 0, a, 0, this.T);
            this.f = a
        },
        l: Ub
    };
    Of.g = "9C";
    Of.Zb = !0;
    Tb.g = "9D";
    Tb.Zb = !0;
    Tb.prototype = {
        l: Tb
    };
    re.g = "9E";
    re.ga = [Nb];
    re.prototype = {
        Ys: function(a) {
            if (null != a.rg) return a;
            this.i++;
            a.next =
                this.ud;
            null != a.next && (a.next.Hc = a);
            this.ud = a;
            a.rg = this;
            return a
        },
        removeNode: function(a) {
            if (0 == this.i || null == a.rg) return this;
            this.LF(a);
            null != a.Hc && (a.Hc.next = a.next);
            null != a.next && (a.next.Hc = a.Hc);
            this.ud == a && (this.ud = a.next);
            this.i--;
            a.rg = null;
            return this
        },
        Ws: function(a, b) {
            for (var c = this.ud; null != c;) {
                if (c == a) {
                    a = c;
                    for (c = this.ud; null != c;) {
                        if (c == b) {
                            a.Ss(c);
                            c.Ss(a);
                            break
                        }
                        c = c.next
                    }
                    break
                }
                c = c.next
            }
            return this
        },
        LF: function(a) {
            if (null == a.rg) return a;
            for (var b = a.za; null != b;) {
                for (var c = b.node, d = c.za; null !=
                    d;) {
                    var e = d.next;
                    d.node == a && (null != d.Hc && (d.Hc.next = e), null != e && (e.Hc = d.Hc), c.za == d && (c.za = e), d.u(), c.qq--, null != this.Wk && this.Wk(d));
                    d = e
                }
                c = b.next;
                null != b.Hc && (b.Hc.next = c);
                null != c && (c.Hc = b.Hc);
                a.za == b && (a.za = c);
                b.u();
                a.qq--;
                null != this.Wk && this.Wk(b);
                b = c
            }
            a.za = null;
            return a
        },
        clearMarks: function() {
            for (var a = this.ud; null != a;) a.ea = !1, a = a.next;
            return this
        },
        Lz: function() {
            for (var a = this.ud; null != a;) a.parent = null, a = a.next;
            return this
        },
        Sl: function(a, b, c, d, e) {
            null == e && (e = !1);
            null == a && (a = !1);
            if (0 == this.i) return this;
            this.wo && this.clearMarks();
            var f = 1;
            null == b && (b = this.ud);
            var g = this.Mm,
                h = this.Ti;
            h[0] = b;
            b.parent = b;
            b.depth = 0;
            if (a)
                if (null == c)
                    if (e) b.ta.Fd(!0, d) && this.Ul(b, !0, d);
                    else {
                        c = h[0];
                        b = c.ta;
                        if (!b.Fd(!0, d)) return this;
                        for (; 0 < f;)
                            if (c = h[--f], !c.ea) {
                                c.ea = !0;
                                b = c.ta;
                                if (!b.Fd(!1, d)) break;
                                for (a = c.za; null != a;) b = c.ta, a.node.parent = c, a.node.depth = c.depth + 1, b.Fd(!0, d) && (b = a.node, f == g && (h = this.yn(g *= 2)), h[f++] = b), a = a.next
                            }
                    }
            else if (e) c(b, !0, d) && this.Tl(b, c, !0, d);
            else {
                a = h[0];
                if (!c(a, !0, d)) return this;
                for (; 0 < f;)
                    if (a = h[--f], !a.ea) {
                        a.ea = !0;
                        if (!c(a, !1, d)) break;
                        for (b = a.za; null != b;) b.node.parent = a, b.node.depth = a.depth + 1, c(b.node, !0, d) && (e = b.node, f == g && (h = this.yn(g *= 2)), h[f++] = e), b = b.next
                    }
            } else if (null == c)
                if (e) this.Ul(b, !1, d);
                else
                    for (; 0 < f;) {
                        if (c = h[--f], !c.ea) {
                            c.ea = !0;
                            a = c.ta;
                            if (!a.Fd(!1, d)) break;
                            for (a = c.za; null != a;) b = a.node, f == g && (h = this.yn(g *= 2)), h[f++] = b, a.node.parent = c, a.node.depth = c.depth + 1, a = a.next
                        }
                    } else if (e) this.Tl(b, c, !1, d);
                    else
                        for (; 0 < f;)
                            if (a = h[--f], !a.ea) {
                                a.ea = !0;
                                if (!c(a, !1, d)) break;
                                for (b = a.za; null != b;) e = b.node,
                                    f == g && (h = this.yn(g *= 2)), h[f++] = e, b.node.parent = a, b.node.depth = a.depth + 1, b = b.next
                            }
            return this
        },
        rz: function(a, b, c, d) {
            null == a && (a = !1);
            if (0 == this.i) return this;
            this.wo && this.clearMarks();
            var e = 0,
                f = 1,
                g = this.vd,
                h = this.xk;
            null == b && (b = this.ud);
            g[0] = b;
            b.ea = !0;
            b.parent = b;
            b.depth = 0;
            if (a)
                if (null == c) {
                    c = g[e];
                    var l = c.ta;
                    if (!l.Fd(!0, d)) return this;
                    for (; 0 < f;) {
                        c = g[e];
                        l = c.ta;
                        if (!l.Fd(!1, d)) break;
                        for (a = c.za; null != a;) b = a.node, b.ea || (b.ea = !0, b.parent = c, b.depth = c.depth + 1, l = b.ta, l.Fd(!0, d) && (l = f++ + e, l == h && (this.Ig(h *= 2),
                            g = this.vd), g[l] = b)), a = a.next;
                        ++e;
                        --f
                    }
                } else {
                    a = g[e];
                    if (!c(a, !0, d)) return this;
                    for (; 0 < f;) {
                        a = g[e];
                        if (!c(a, !1, d)) break;
                        for (b = a.za; null != b;) {
                            l = b.node;
                            if (!l.ea && (l.ea = !0, l.parent = a, l.depth = a.depth + 1, c(l, !0, d))) {
                                var k = f++ + e;
                                k == h && (this.Ig(h *= 2), g = this.vd);
                                g[k] = l
                            }
                            b = b.next
                        }++e;
                        --f
                    }
                }
            else if (null == c)
                for (; 0 < f;) {
                    c = g[e];
                    a = c.ta;
                    if (!a.Fd(!1, d)) break;
                    for (a = c.za; null != a;) b = a.node, b.ea || (b.ea = !0, b.parent = c, b.depth = c.depth + 1, l = f++ + e, l == h && (this.Ig(h *= 2), g = this.vd), g[l] = b), a = a.next;
                    ++e;
                    --f
                } else
                    for (; 0 < f;) {
                        a = g[e];
                        if (!c(a, !1, d)) break;
                        for (b = a.za; null != b;) l = b.node, l.ea || (l.ea = !0, l.parent = a, l.depth = a.depth + 1, k = f++ + e, k == h && (this.Ig(h *= 2), g = this.vd), g[k] = l), b = b.next;
                        ++e;
                        --f
                    }
            return this
        },
        Ot: function(a, b, c, d, e) {
            null == b && (b = !1);
            if (0 == this.i) return this;
            this.wo && this.clearMarks();
            var f = 0,
                g = 1,
                h = this.vd,
                l = this.xk;
            null == c && (c = this.ud);
            for (var k = this.ud; null != k;) k.depth = 0, k = k.next;
            c.ea = !0;
            c.parent = c;
            h[0] = c;
            if (b)
                if (null == d) {
                    d = h[f];
                    k = d.ta;
                    if (!k.Fd(!0, e)) return this;
                    for (; 0 < g;) {
                        d = h[f];
                        k = d.ta;
                        if (!k.Fd(!1, e)) break;
                        for (b = d.za; null !=
                            b;) c = b.node, c.ea || (c.ea = !0, c.parent = d, c.depth = d.depth + 1, c.depth <= a && (k = c.ta, k.Fd(!0, e) && (k = g++ + f, k == l && (this.Ig(l *= 2), h = this.vd), h[k] = c))), b = b.next;
                        ++f;
                        --g
                    }
                } else {
                    b = h[f];
                    if (!d(b, !0, e)) return this;
                    for (; 0 < g;) {
                        b = h[f];
                        if (!d(b, !1, e)) break;
                        for (c = b.za; null != c;) {
                            k = c.node;
                            if (!k.ea && (k.ea = !0, k.parent = b, k.depth = b.depth + 1, k.depth <= a && d(k, !0, e))) {
                                var m = g++ + f;
                                m == l && (this.Ig(l *= 2), h = this.vd);
                                h[m] = k
                            }
                            c = c.next
                        }++f;
                        --g
                    }
                }
            else if (null == d)
                for (; 0 < g;) {
                    d = h[f];
                    b = d.ta;
                    if (!b.Fd(!1, e)) break;
                    for (b = d.za; null != b;) c = b.node, c.ea ||
                        (c.ea = !0, c.depth = d.depth + 1, c.parent = d, c.depth <= a && (k = g++ + f, k == l && (this.Ig(l *= 2), h = this.vd), h[k] = c)), b = b.next;
                    ++f;
                    --g
                } else
                    for (; 0 < g;)
                        if (b = h[f], b.depth > a) --g, ++f;
                        else {
                            if (!d(b, !1, e)) break;
                            for (c = b.za; null != c;) k = c.node, k.ea || (k.ea = !0, k.depth = b.depth + 1, k.parent = b, k.depth <= a && (m = g++ + f, m == l && (this.Ig(l *= 2), h = this.vd), h[m] = k)), c = c.next;
                            ++f;
                            --g
                        }
            return this
        },
        u: function() {
            for (var a = this.ud; null != a;) {
                for (var b = a.next, c = a.za; null != c;) {
                    var d = c.next;
                    c.next = c.Hc = null;
                    c.node = null;
                    c = d
                }
                a.u();
                a = b
            }
            this.ud = null;
            ea.Kf(this.Ti);
            this.Ti = null;
            ea.Kf(this.vd);
            this.vd = null;
            null != this.Eb && (this.Eb.u(), this.Eb = null);
            this.Wk = this.Bo = null
        },
        Ul: function(a, b, c) {
            a.ea = !0;
            var d = a.ta;
            if (!d.Fd(!1, c)) return !1;
            for (var e = a.za; null != e;) {
                var f = e.node;
                if (!f.ea)
                    if (e.node.parent = a, e.node.depth = a.depth + 1, b) {
                        if (d = f.ta, d.Fd(!0, c) && !this.Ul(f, !0, c)) return !1
                    } else if (!this.Ul(f, !1, c)) return !1;
                e = e.next
            }
            return !0
        },
        Tl: function(a, b, c, d) {
            a.ea = !0;
            if (!b(a, !1, d)) return !1;
            for (var e = a.za; null != e;) {
                var f = e.node;
                if (!f.ea)
                    if (e.node.parent = a, e.node.depth = a.depth + 1,
                        c) {
                        if (b(f, !0, d) && !this.Tl(f, b, !0, d)) return !1
                    } else if (!this.Tl(f, b, !1, d)) return !1;
                e = e.next
            }
            return !0
        },
        yn: function(a) {
            var b = Array(a);
            ea.zb(this.Ti, 0, b, 0, this.Mm);
            this.Ti = b;
            this.Mm = a;
            return this.Ti
        },
        Ig: function(a) {
            var b = Array(a);
            ea.zb(this.vd, 0, b, 0, this.xk);
            this.vd = b;
            this.xk = a
        },
        l: re
    };
    yd.g = "A0";
    yd.ga = [Ec];
    yd.prototype = {
        u: function() {
            this.next = this.Hc = this.node = null
        },
        l: yd
    };
    xd.g = "A1";
    xd.ga = [Ec];
    xd.prototype = {
        u: function() {
            this.rg = this.za = this.next = this.Hc = this.ta = null
        },
        fu: function(a) {
            for (var b = !1, c = this.za; null !=
                c;) {
                if (c.node == a) {
                    b = !0;
                    break
                }
                c = c.next
            }
            return b ? c : null
        },
        Ss: function(a, b) {
            null == b && (b = 1);
            a = null != this.rg.Bo ? this.rg.Bo(a, b) : new yd(a, b);
            a.next = this.za;
            null != this.za && (this.za.Hc = a);
            this.za = a;
            this.qq++;
            return this
        },
        l: xd
    };
    Oc.g = "A2";
    Oc.next = function() {
        null == Oc.Qs && (Oc.Qs = 0);
        return Oc.Qs++
    };
    wd.g = "A3";
    wd.ga = [Ec];
    wd.prototype = {
        l: wd
    };
    qe.g = "A4";
    qe.Zb = !0;
    qe.ga = [Nb];
    md.g = "A5";
    md.ga = [qe];
    md.prototype = {
        set: function(a, b) {
            this.i == this.C && this.R();
            var c = this.vc,
                d = this.da;
            d.i == d.C && d.R();
            var e = d.f,
                f = d.Uc,
                g = 3 * d.vc;
            d.vc = d.ob[d.vc];
            e[g] = a;
            e[g + 1] = c;
            var h = 73856093 * a & d.Od,
                l = f[h];
            if (-1 == l) f[h] = g, d.i++, d = !0;
            else {
                f = e[l] != a;
                for (h = e[l + 2]; - 1 != h;) e[h] == a && (f = !1), l = h, h = e[h + 2];
                e[l + 2] = g;
                d.i++;
                d = f
            }
            this.Gh[c] = b;
            this.Lm[c] = a;
            this.vc = this.ob[c];
            this.i++;
            return d
        },
        R: function() {
            var a = this.C;
            this.C = wc.pi(this.da.Md, this.C);
            var b = Array(this.C);
            ea.zb(this.ob, 0, b, 0, a);
            this.ob = b;
            b = Array(this.C);
            ea.zb(this.Lm, 0, b, 0, a);
            b = this.Lm = b;
            for (var c = a, d = this.C; c < d;) {
                var e = c++;
                b[e] = -2147483648
            }
            b = this.ob;
            c = a - 1;
            for (d = this.C - 1; c < d;) e = c++, b[e] = e + 1;
            b[this.C - 1] = -1;
            this.vc = a;
            b = Array(this.C);
            ea.zb(this.Gh, 0, b, 0, a);
            this.Gh = b
        },
        l: md
    };
    Kc.g = "A6";
    Kc.ga = [qe];
    Kc.prototype = {
        R: function() {
            var a = this.C;
            this.C = wc.pi(this.Md, this.C);
            var b = Array(this.C);
            ea.zb(this.ob, 0, b, 0, a);
            this.ob = b;
            b = Array(3 * this.C);
            ea.zb(this.f, 0, b, 0, 3 * a);
            this.f = b;
            b = this.ob;
            for (var c = a - 1, d = this.C - 1; c < d;) {
                var e = c++;
                b[e] = e + 1
            }
            b[this.C - 1] = -1;
            this.vc = a;
            c = 3 * a + 2;
            b = this.f;
            d = 0;
            for (a = this.C - a; d < a;) d++, b[c - 1] = -2147483648, b[c] = -1, c += 3
        },
        u: function() {
            this.ob = this.f = this.Uc = null;
            null != this.Eb && (this.Eb.u(),
                this.Eb = null)
        },
        clear: function() {
            for (var a = this.Uc, b = 0, c = this.JE; b < c;) {
                var d = b++;
                a[d] = -1
            }
            b = 2;
            a = this.f;
            c = 0;
            for (d = this.C; c < d;) c++, a[b - 1] = -2147483648, a[b] = -1, b += 3;
            a = this.ob;
            b = 0;
            for (c = this.C - 1; b < c;) d = b++, a[d] = d + 1;
            a[this.C - 1] = -1;
            this.i = this.vc = 0
        },
        l: Kc
    };
    pe.g = "A8";
    pe.ga = [se];
    pe.prototype = {
        enqueue: function(a) {
            this.i == this.C && this.R();
            this.f[++this.i] = a;
            a = a.position = this.i;
            var b = this.f,
                c = a >> 1,
                d = b[a],
                e = d.ja;
            if (this.cf)
                for (; 0 < c;) {
                    var f = b[c];
                    if (0 > e - f.ja) b[a] = f, f.position = a, a = c, c >>= 1;
                    else break
                } else
                    for (; 0 < c;)
                        if (f =
                            b[c], 0 < e - f.ja) b[a] = f, f.position = a, a = c, c >>= 1;
                        else break;
            b[a] = d;
            d.position = a
        },
        gA: function() {
            var a = this.f,
                b = a[1];
            b.position = -1;
            a[1] = a[this.i];
            a = 1;
            var c = this.f,
                d = a << 1,
                e = c[a],
                f = e.ja;
            if (this.cf)
                for (; d < this.i;) {
                    d < this.i - 1 && 0 < c[d].ja - c[d + 1].ja && ++d;
                    var g = c[d];
                    if (0 < f - g.ja) c[a] = g, g.position = a, a = e.position = d, d <<= 1;
                    else break
                } else
                    for (; d < this.i;)
                        if (d < this.i - 1 && 0 > c[d].ja - c[d + 1].ja && ++d, g = c[d], 0 > f - g.ja) c[a] = g, g.position = a, a = e.position = d, d <<= 1;
                        else break;
            c[a] = e;
            e.position = a;
            this.i--;
            return b
        },
        ID: function(a, b) {
            var c =
                a.ja;
            if (c == b) return this;
            a.ja = b;
            a = a.position;
            if (this.cf)
                if (b < c) {
                    b = a;
                    c = this.f;
                    a = b >> 1;
                    var d = c[b],
                        e = d.ja;
                    if (this.cf)
                        for (; 0 < a;) {
                            var f = c[a];
                            if (0 > e - f.ja) c[b] = f, f.position = b, b = a, a >>= 1;
                            else break
                        } else
                            for (; 0 < a;)
                                if (f = c[a], 0 < e - f.ja) c[b] = f, f.position = b, b = a, a >>= 1;
                                else break
                } else {
                    b = a;
                    c = this.f;
                    a = b << 1;
                    e = c[b];
                    f = e.ja;
                    if (this.cf)
                        for (; a < this.i;)
                            if (a < this.i - 1 && 0 < c[a].ja - c[a + 1].ja && ++a, d = c[a], 0 < f - d.ja) c[b] = d, d.position = b, b = e.position = a, a <<= 1;
                            else break;
                    else
                        for (; a < this.i;)
                            if (a < this.i - 1 && 0 > c[a].ja - c[a + 1].ja && ++a, d = c[a],
                                0 > f - d.ja) c[b] = d, d.position = b, b = e.position = a, a <<= 1;
                            else break;
                    c[b] = e;
                    e.position = b;
                    b = this.i;
                    c = this.f;
                    a = b >> 1;
                    d = c[b];
                    e = d.ja;
                    if (this.cf)
                        for (; 0 < a;)
                            if (f = c[a], 0 > e - f.ja) c[b] = f, f.position = b, b = a, a >>= 1;
                            else break;
                    else
                        for (; 0 < a;)
                            if (f = c[a], 0 < e - f.ja) c[b] = f, f.position = b, b = a, a >>= 1;
                            else break
                }
            else {
                if (b > c) b = a;
                else {
                    b = a;
                    c = this.f;
                    a = b << 1;
                    e = c[b];
                    f = e.ja;
                    if (this.cf)
                        for (; a < this.i;)
                            if (a < this.i - 1 && 0 < c[a].ja - c[a + 1].ja && ++a, d = c[a], 0 < f - d.ja) c[b] = d, d.position = b, b = e.position = a, a <<= 1;
                            else break;
                    else
                        for (; a < this.i;)
                            if (a < this.i - 1 && 0 >
                                c[a].ja - c[a + 1].ja && ++a, d = c[a], 0 > f - d.ja) c[b] = d, d.position = b, b = e.position = a, a <<= 1;
                            else break;
                    c[b] = e;
                    e.position = b;
                    b = this.i
                }
                c = this.f;
                a = b >> 1;
                d = c[b];
                e = d.ja;
                if (this.cf)
                    for (; 0 < a;)
                        if (f = c[a], 0 > e - f.ja) c[b] = f, f.position = b, b = a, a >>= 1;
                        else break;
                else
                    for (; 0 < a;)
                        if (f = c[a], 0 < e - f.ja) c[b] = f, f.position = b, b = a, a >>= 1;
                        else break
            }
            c[b] = d;
            d.position = b;
            return this
        },
        clear: function(a) {
            null == a && (a = !1);
            a && ea.Kf(this.f);
            this.i = 0
        },
        iterator: function() {
            if (this.Rd) {
                if (null == this.Eb) return new vd(this);
                this.Eb.reset();
                return this.Eb
            }
            return new vd(this)
        },
        HD: function() {
            for (var a = this.i >> 1; 1 <= a;) this.Gu(a, this.i), --a
        },
        Gu: function(a, b) {
            var c = this.f,
                d = a << 1,
                e = d + 1,
                f = a;
            this.cf ? (d <= b && 0 > c[d].ja - c[f].ja && (f = d), d + 1 <= b && 0 > c[d + 1].ja - c[f].ja && (f = e)) : (d <= b && 0 < c[d].ja - c[f].ja && (f = d), d + 1 <= b && 0 < c[d + 1].ja - c[f].ja && (f = e));
            f != a && (d = c[f], e = c[a], c[f] = e, c[a] = d, a = d.position, d.position = e.position, e.position = a, this.Gu(f, b))
        },
        R: function() {
            this.C = wc.pi(this.Md, this.C);
            this.Tf(this.C)
        },
        Tf: function(a) {
            a = Array(a + 1);
            ea.zb(this.f, 0, a, 0, this.i + 1);
            this.f = a
        },
        l: pe
    };
    vd.g = "A9";
    vd.ga = [Vc];
    vd.prototype = {
        reset: function() {
            this.Ja = 0;
            this.ub = this.tb.i;
            this.f = Array(this.ub);
            ea.zb(this.tb.f, 1, this.f, 0, this.ub);
            return this
        },
        aa: function() {
            return this.Ja < this.ub
        },
        next: function() {
            return this.f[this.Ja++]
        },
        l: vd
    };
    ug.g = "AB";
    ug.HE = function(a, b) {
        var c = a.length;
        if (null == b)
            for (; 1 < --c;) {
                b = tg.Vy() * c | 0;
                var d = a[c];
                a[c] = a[b];
                a[b] = d
            } else
                for (d = 0; 1 < --c;) {
                    var e = b[d++] * c | 0,
                        f = a[c];
                    a[c] = a[e];
                    a[e] = f
                }
    };
    wc.g = "AC";
    wc.pi = function(a, b) {
        if (0 < a) b += a;
        else switch (a) {
            case -3:
                b <<= 1;
                break;
            case -2:
                b = (3 * b >> 1) + 1;
                break;
            case -1:
                a =
                    b + 1;
                b = (a >> 3) + (9 > a ? 3 : 6) + a;
                break;
            case 0:
                throw 0;
        }
        return b
    };
    ea.g = "AD";
    ea.zb = function(a, b, c, d, e) {
        if (0 < e)
            if (a == c)
                if (b < d)
                    for (c = b + e, d += e, b = 0; b < e;) b++, --c, --d, a[d] = a[c];
                else {
                    if (b > d)
                        for (c = b, b = 0; b < e;) b++, a[d] = a[c], ++c, ++d
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
    ea.ua = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        for (d = 0 >= d ? a.length : c + d; c < d;) a[c++] = b;
        return a
    };
    ea.Kf =
        function(a) {
            var b, c;
            null == c && (c = 0);
            null == b && (b = 0);
            for (c = 0 >= c ? a.length : b + c; b < c;) a[b++] = null
        };
    ea.sz = function(a, b, c) {
        for (var d = 0, e, f = c + 1; d < f;) e = d + (f - d >> 1), a[e] < b ? d = e + 1 : f = e;
        return d <= c && a[d] == b ? d : ~d
    };
    tg.g = "AE";
    tg.Vy = function() {
        return Math.random()
    };
    var k = Ja.e5 = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5 i6 i7 i8 i9 i10 i11 i12 i13 i14 i15 i16 i17 i18 i19 i20 i21 i22 i23 i24 i25 i26 i27 i28 i29 i30 i31 i32 i33 i34 i35 i36 i37 i38 i39 i40 i41 i42 i43 i44 i45 i46 i47 i48 i49 i50 i51 i52 i53 i54 i55 i56 i57 i58 i59 i60 i61 i62 i63 i64 i65 i66 i67 i68 i69 i70 i71 i72 i73 i74 i75 i76 i77 i78 i79 i80 i81 i82 i83 i84 i85 i86 i87 i88 i89 i90 i91 i92 i93 i94 i95 i96 i97 i98 i99 i100 i101 i102 i103 i104 i105 i106 i107 i108 i109 i110 i111 i112 i113 i114 i115 i116 i117".split(" ")
    };
    k.i0 = {
        m: 0,
        s: "e5",
        toString: n
    };
    k.i1 = {
        m: 1,
        s: "e5",
        toString: n
    };
    k.i2 = {
        m: 2,
        s: "e5",
        toString: n
    };
    k.i3 = {
        m: 3,
        s: "e5",
        toString: n
    };
    k.i4 = {
        m: 4,
        s: "e5",
        toString: n
    };
    k.i5 = {
        m: 5,
        s: "e5",
        toString: n
    };
    k.i6 = {
        m: 6,
        s: "e5",
        toString: n
    };
    k.i7 = {
        m: 7,
        s: "e5",
        toString: n
    };
    k.i8 = {
        m: 8,
        s: "e5",
        toString: n
    };
    k.i9 = {
        m: 9,
        s: "e5",
        toString: n
    };
    k.i10 = {
        m: 10,
        s: "e5",
        toString: n
    };
    k.i11 = {
        m: 11,
        s: "e5",
        toString: n
    };
    k.i12 = {
        m: 12,
        s: "e5",
        toString: n
    };
    k.i13 = {
        m: 13,
        s: "e5",
        toString: n
    };
    k.i14 = {
        m: 14,
        s: "e5",
        toString: n
    };
    k.i15 = {
        m: 15,
        s: "e5",
        toString: n
    };
    k.i16 = {
        m: 16,
        s: "e5",
        toString: n
    };
    k.i17 = {
        m: 17,
        s: "e5",
        toString: n
    };
    k.i18 = {
        m: 18,
        s: "e5",
        toString: n
    };
    k.i19 = {
        m: 19,
        s: "e5",
        toString: n
    };
    k.i20 = {
        m: 20,
        s: "e5",
        toString: n
    };
    k.i21 = {
        m: 21,
        s: "e5",
        toString: n
    };
    k.i22 = {
        m: 22,
        s: "e5",
        toString: n
    };
    k.i23 = {
        m: 23,
        s: "e5",
        toString: n
    };
    k.i24 = {
        m: 24,
        s: "e5",
        toString: n
    };
    k.i25 = {
        m: 25,
        s: "e5",
        toString: n
    };
    k.i26 = {
        m: 26,
        s: "e5",
        toString: n
    };
    k.i27 = {
        m: 27,
        s: "e5",
        toString: n
    };
    k.i28 = {
        m: 28,
        s: "e5",
        toString: n
    };
    k.i29 = {
        m: 29,
        s: "e5",
        toString: n
    };
    k.i30 = {
        m: 30,
        s: "e5",
        toString: n
    };
    k.i31 = {
        m: 31,
        s: "e5",
        toString: n
    };
    k.i32 = {
        m: 32,
        s: "e5",
        toString: n
    };
    k.i33 = {
        m: 33,
        s: "e5",
        toString: n
    };
    k.i34 = {
        m: 34,
        s: "e5",
        toString: n
    };
    k.i35 = {
        m: 35,
        s: "e5",
        toString: n
    };
    k.i36 = {
        m: 36,
        s: "e5",
        toString: n
    };
    k.i37 = {
        m: 37,
        s: "e5",
        toString: n
    };
    k.i38 = {
        m: 38,
        s: "e5",
        toString: n
    };
    k.i39 = {
        m: 39,
        s: "e5",
        toString: n
    };
    k.i40 = {
        m: 40,
        s: "e5",
        toString: n
    };
    k.i41 = {
        m: 41,
        s: "e5",
        toString: n
    };
    k.i42 = {
        m: 42,
        s: "e5",
        toString: n
    };
    k.i43 = {
        m: 43,
        s: "e5",
        toString: n
    };
    k.i44 = {
        m: 44,
        s: "e5",
        toString: n
    };
    k.i45 = {
        m: 45,
        s: "e5",
        toString: n
    };
    k.i46 = {
        m: 46,
        s: "e5",
        toString: n
    };
    k.i47 = {
        m: 47,
        s: "e5",
        toString: n
    };
    k.i48 = {
        m: 48,
        s: "e5",
        toString: n
    };
    k.i49 = {
        m: 49,
        s: "e5",
        toString: n
    };
    k.i50 = (ua = function(a, b) {
        var c = {
            m: 50,
            s: "e5",
            toString: n
        };
        c.stage = a;
        c.max = b;
        return c
    }, ua.Se = ["stage", "max"], ua);
    k.i51 = {
        m: 51,
        s: "e5",
        toString: n
    };
    k.i52 = {
        m: 52,
        s: "e5",
        toString: n
    };
    k.i53 = {
        m: 53,
        s: "e5",
        toString: n
    };
    k.i54 = {
        m: 54,
        s: "e5",
        toString: n
    };
    k.i55 = {
        m: 55,
        s: "e5",
        toString: n
    };
    k.i56 = {
        m: 56,
        s: "e5",
        toString: n
    };
    k.i57 = {
        m: 57,
        s: "e5",
        toString: n
    };
    k.i58 = {
        m: 58,
        s: "e5",
        toString: n
    };
    k.i59 = {
        m: 59,
        s: "e5",
        toString: n
    };
    k.i60 = {
        m: 60,
        s: "e5",
        toString: n
    };
    k.i61 = {
        m: 61,
        s: "e5",
        toString: n
    };
    k.i62 = {
        m: 62,
        s: "e5",
        toString: n
    };
    k.i63 = {
        m: 63,
        s: "e5",
        toString: n
    };
    k.i64 = (ua = function(a, b) {
        var c = {
            m: 64,
            s: "e5",
            toString: n
        };
        c.level = a;
        c.max = b;
        return c
    }, ua.Se = ["level", "max"], ua);
    k.i65 = {
        m: 65,
        s: "e5",
        toString: n
    };
    k.i66 = {
        m: 66,
        s: "e5",
        toString: n
    };
    k.i67 = {
        m: 67,
        s: "e5",
        toString: n
    };
    k.i68 = {
        m: 68,
        s: "e5",
        toString: n
    };
    k.i69 = {
        m: 69,
        s: "e5",
        toString: n
    };
    k.i70 = (ua = function(a) {
        var b = {
            m: 70,
            s: "e5",
            toString: n
        };
        b.level = a;
        return b
    }, ua.Se = ["level"], ua);
    k.i71 = {
        m: 71,
        s: "e5",
        toString: n
    };
    k.i72 = {
        m: 72,
        s: "e5",
        toString: n
    };
    k.i73 = {
        m: 73,
        s: "e5",
        toString: n
    };
    k.i74 = {
        m: 74,
        s: "e5",
        toString: n
    };
    k.i75 = {
        m: 75,
        s: "e5",
        toString: n
    };
    k.i76 = {
        m: 76,
        s: "e5",
        toString: n
    };
    k.i77 = {
        m: 77,
        s: "e5",
        toString: n
    };
    k.i78 = {
        m: 78,
        s: "e5",
        toString: n
    };
    k.i79 = {
        m: 79,
        s: "e5",
        toString: n
    };
    k.i80 = {
        m: 80,
        s: "e5",
        toString: n
    };
    k.i81 = {
        m: 81,
        s: "e5",
        toString: n
    };
    k.i82 = (ua = function(a) {
        var b = {
            m: 82,
            s: "e5",
            toString: n
        };
        b.level = a;
        return b
    }, ua.Se = ["level"], ua);
    k.i83 = {
        m: 83,
        s: "e5",
        toString: n
    };
    k.i84 = (ua = function(a) {
        var b = {
            m: 84,
            s: "e5",
            toString: n
        };
        b.level = a;
        return b
    }, ua.Se = ["level"], ua);
    k.i85 = {
        m: 85,
        s: "e5",
        toString: n
    };
    k.i86 = (ua = function(a) {
        var b = {
            m: 86,
            s: "e5",
            toString: n
        };
        b.level = a;
        return b
    }, ua.Se = ["level"], ua);
    k.i87 = {
        m: 87,
        s: "e5",
        toString: n
    };
    k.i88 = {
        m: 88,
        s: "e5",
        toString: n
    };
    k.i89 = {
        m: 89,
        s: "e5",
        toString: n
    };
    k.i90 = {
        m: 90,
        s: "e5",
        toString: n
    };
    k.i91 = {
        m: 91,
        s: "e5",
        toString: n
    };
    k.i92 = {
        m: 92,
        s: "e5",
        toString: n
    };
    k.i93 = {
        m: 93,
        s: "e5",
        toString: n
    };
    k.i94 = {
        m: 94,
        s: "e5",
        toString: n
    };
    k.i95 = {
        m: 95,
        s: "e5",
        toString: n
    };
    k.i96 = {
        m: 96,
        s: "e5",
        toString: n
    };
    k.i97 = {
        m: 97,
        s: "e5",
        toString: n
    };
    k.i98 = {
        m: 98,
        s: "e5",
        toString: n
    };
    k.i99 = {
        m: 99,
        s: "e5",
        toString: n
    };
    k.i100 = {
        m: 100,
        s: "e5",
        toString: n
    };
    k.i101 = {
        m: 101,
        s: "e5",
        toString: n
    };
    k.i102 = {
        m: 102,
        s: "e5",
        toString: n
    };
    k.i103 = {
        m: 103,
        s: "e5",
        toString: n
    };
    k.i104 = {
        m: 104,
        s: "e5",
        toString: n
    };
    k.i105 = {
        m: 105,
        s: "e5",
        toString: n
    };
    k.i106 = {
        m: 106,
        s: "e5",
        toString: n
    };
    k.i107 = {
        m: 107,
        s: "e5",
        toString: n
    };
    k.i108 = {
        m: 108,
        s: "e5",
        toString: n
    };
    k.i109 = {
        m: 109,
        s: "e5",
        toString: n
    };
    k.i110 = {
        m: 110,
        s: "e5",
        toString: n
    };
    k.i111 = {
        m: 111,
        s: "e5",
        toString: n
    };
    k.i112 = {
        m: 112,
        s: "e5",
        toString: n
    };
    k.i113 = {
        m: 113,
        s: "e5",
        toString: n
    };
    k.i114 = {
        m: 114,
        s: "e5",
        toString: n
    };
    k.i115 = {
        m: 115,
        s: "e5",
        toString: n
    };
    k.i116 = {
        m: 116,
        s: "e5",
        toString: n
    };
    k.i117 = {
        m: 117,
        s: "e5",
        toString: n
    };
    k.zc = [k.i0, k.i1, k.i2, k.i3, k.i4, k.i5, k.i6, k.i7, k.i8, k.i9, k.i10, k.i11, k.i12, k.i13, k.i14, k.i15, k.i16, k.i17, k.i18, k.i19, k.i20, k.i21, k.i22, k.i23, k.i24, k.i25, k.i26, k.i27, k.i28, k.i29, k.i30, k.i31, k.i32, k.i33, k.i34, k.i35, k.i36, k.i37, k.i38, k.i39, k.i40, k.i41, k.i42, k.i43, k.i44, k.i45, k.i46, k.i47, k.i48, k.i49, k.i51, k.i52, k.i53, k.i54, k.i55, k.i56, k.i57, k.i58, k.i59, k.i60, k.i61, k.i62, k.i63, k.i65, k.i66, k.i67, k.i68, k.i69, k.i71, k.i72, k.i73, k.i74, k.i75, k.i76, k.i77, k.i78, k.i79,
        k.i80, k.i81, k.i83, k.i85, k.i87, k.i88, k.i89, k.i90, k.i91, k.i92, k.i93, k.i94, k.i95, k.i96, k.i97, k.i98, k.i99, k.i100, k.i101, k.i102, k.i103, k.i104, k.i105, k.i106, k.i107, k.i108, k.i109, k.i110, k.i111, k.i112, k.i113, k.i114, k.i115, k.i116, k.i117
    ];
    xa.g = "AF";
    xa.tr = function(a, b) {
        var c = new Y("^([a-z]{2})-([a-z]{2})$", "i");
        c.match(a) && (a = c.Fb(1).toLowerCase());
        xa.qk = a;
        (new Y("^[a-z][a-z]$", "")).match(a) && null != a || (xa.qk = xa.hA());
        na.wa(b, function(a) {
            return a == xa.qk
        }) || (xa.qk = "en")
    };
    xa.NB = function(a, b) {
        a = a.split("\n");
        var c =
            a.length;
        xa.Qn = Array(c);
        xa.Mk = Array(c);
        for (var d = 0; d < c;) {
            var e = d++;
            var f = a[e];
            f = f.replace(/\\n/g, "\n");
            xa.Qn[e] = f;
            xa.Mk[e] = (new Y("::(\\w+)::", "")).match(a[e])
        }
        if (null != b) {
            a = new ub;
            f = [];
            for (c = 0; c < b.length;) d = b[c++], e = b[c++], null != va[d] ? a.Bd(d, e) : a.G[d] = e, f.push(d);
            b = new Y(f.join("|"), "");
            c = 0;
            for (d = xa.Qn.length; c < d;)
                for (f = c++, f = xa.Qn[f]; b.match(f);) e = b.Fb(0), f = f.replace(b.r, null != va[e] ? a.Cf(e) : a.G[e])
        }
    };
    xa.translate = function(a) {
        var b = a.m,
            c = xa.Qn[b];
        if (!xa.Mk[b]) return c;
        a = df.BA(a);
        if (0 == a.length) return c;
        for (b = 0; b < a.length;) {
            var d = a[b];
            ++b;
            c = c.replace(/::(\w+)::/, G.La(d))
        }
        return c
    };
    xa.hA = function() {
        var a = null;
        try {
            var b = new Y("lang=(\\w\\w(?:-\\w\\w)?)", "");
            b.match(window.location.href) && (a = b.Fb(1))
        } catch (c) {}
        null == a && (a = "en");
        return a
    };
    vc.g = "B0";
    vc.F = kb;
    vc.prototype = r(kb.prototype, {
        u: function() {
            kb.prototype.u.call(this);
            this.keys = null
        },
        jd: function(a, b) {
            a = new Mf(0, b, a);
            for (b = this.list; null != b;) this.next = b.next, b = this.current = b.Wa, a.Ea = b, b(a), b = this.next;
            this.current = this.next = null
        },
        l: vc
    });
    Ya.g = "B1";
    Ya.X = function() {
        null == Ya.Gd && (Ya.Gd = new Ya);
        return Ya.Gd
    };
    Ya.F = vc;
    Ya.prototype = r(vc.prototype, {
        u: function() {
            vc.prototype.u.call(this);
            window.removeEventListener("keydown", E(this, this.Kk), !0);
            window.removeEventListener("keyup", E(this, this.Nv), !0);
            Ya.Gd = null
        },
        Kk: function(a) {
            if (this.enabled) {
                var b = a.keyCode;
                if (!this.keys[b]) {
                    this.keys[b] = !0;
                    this.order[b] += 1;
                    this.Yi.shift = a.shiftKey;
                    this.Yi.control = a.ctrlKey;
                    this.Yi.alt = a.altKey;
                    switch (a.location) {
                        case 1:
                            a = Qa.i1;
                            break;
                        case 2:
                            a = Qa.i2;
                            break;
                        case 3:
                            a = Qa.i3;
                            break;
                        default:
                            a = Qa.i0
                    }
                    this.location = a;
                    this.jd(!0, b)
                }
            }
        },
        Nv: function(a) {
            if (this.enabled) {
                var b = a.keyCode;
                this.keys[b] = !1;
                this.Yi.shift = a.shiftKey;
                this.Yi.control = a.ctrlKey;
                this.Yi.alt = a.altKey;
                switch (a.location) {
                    case 1:
                        a = Qa.i1;
                        break;
                    case 2:
                        a = Qa.i2;
                        break;
                    case 3:
                        a = Qa.i3;
                        break;
                    default:
                        a = Qa.i0
                }
                this.location = a;
                this.jd(!1, b)
            }
        },
        l: Ya
    });
    var Qa = Ja.e6 = {
        qc: !0,
        fc: ["i0", "i1", "i2", "i3"]
    };
    Qa.i0 = {
        m: 0,
        s: "e6",
        toString: n
    };
    Qa.i1 = {
        m: 1,
        s: "e6",
        toString: n
    };
    Qa.i2 = {
        m: 2,
        s: "e6",
        toString: n
    };
    Qa.i3 = {
        m: 3,
        s: "e6",
        toString: n
    };
    Qa.zc = [Qa.i0,
        Qa.i1, Qa.i2, Qa.i3
    ];
    Nf.g = "B2";
    Nf.prototype = {
        l: Nf
    };
    Mf.g = "B3";
    Mf.prototype = {
        l: Mf
    };
    uc.g = "B4";
    uc.F = kb;
    uc.prototype = r(kb.prototype, {
        Gi: function() {
            var a = this.J,
                b = a.a,
                c = new x;
            c.b = a.b;
            c.a = b;
            return c
        },
        u: function() {
            kb.prototype.u.call(this);
            this.buffer = null
        },
        jd: function(a, b, c, d, e) {
            null == e && (e = 0);
            null == d && (d = 0);
            var f = this.J;
            f.b = a;
            f.a = b;
            this.transform(this.J);
            this.J.b |= 0;
            this.J.a |= 0;
            f = new Lf(this);
            f.x = this.J.b;
            f.y = this.J.a;
            f.action = c;
            f.YH = d;
            f.hint = e;
            if (this.CH || null == this.buffer) {
                for (a = this.list; null != a;) this.next =
                    a.next, a = this.current = a.Wa, f.Ea = a, a(f), a = this.next;
                this.current = this.next = null
            } else f = this.buffer, f.Yc(f.i + 5), f.f[f.i++] = a | 0, f.f[f.i++] = b | 0, f.f[f.i++] = c.m, f.f[f.i++] = d, f.f[f.i++] = e
        },
        gF: function(a) {
            var b = !1;
            0 > this.Zc[a] ? this.Zc[a] = Date.now() / 1E3 : (.5 > Date.now() / 1E3 - this.Zc[a] && (b = !0), this.Zc[a] = -1);
            return b
        },
        l: uc
    });
    ba.g = "B5";
    ba.X = function() {
        null == ba.Gd && (ba.Gd = new ba);
        return ba.Gd
    };
    ba.F = uc;
    ba.prototype = r(uc.prototype, {
        zA: function() {
            this.Vm |= 8
        },
        u: function() {
            uc.prototype.u.call(this);
            var a = window;
            a.removeEventListener("mousedown",
                E(this, this.Ov));
            a.removeEventListener("mouseup", E(this, this.Qv));
            a.removeEventListener("mousemove", E(this, this.Pv));
            a.removeEventListener("touchstart", E(this, this.Zv));
            a.removeEventListener("touchend", E(this, this.Xv));
            a.removeEventListener("touchmove", E(this, this.Yv));
            this.element = null;
            ba.Gd = null
        },
        Ov: function(a) {
            this.Zd[a.which] = !0;
            if (this.enabled) {
                var b = 1 << a.which;
                0 != (this.Vm & b) && (a = this.sc(a), this.jd(a.b, a.a, oa.i0, -1, b))
            }
        },
        Qv: function(a) {
            this.Zd[a.which] = !1;
            if (this.enabled) {
                var b = 1 << a.which;
                if (0 !=
                    (this.Vm & b)) {
                    var c = this.sc(a);
                    this.gF(a.which) && (b |= 16);
                    this.jd(c.b, c.a, oa.i1, -1, b)
                }
            }
        },
        Pv: function(a) {
            this.enabled && (a = this.sc(a), this.jd(a.b, a.a, oa.i2, -1, 0))
        },
        Zv: function(a) {
            if (this.enabled)
                if (this.oq) {
                    var b = 0;
                    for (a = a.changedTouches; b < a.length;) {
                        var c = a[b];
                        ++b;
                        var d = this.sc(c);
                        null == this.be && (this.be = c.identifier, this.Zd[0] = !0);
                        this.jd(d.b, d.a, oa.i0, c.identifier)
                    }
                } else
                    for (b = 0, a = a.changedTouches; b < a.length;)
                        if (c = a[b], ++b, null == this.be) {
                            this.be = c.identifier;
                            this.Zd[0] = !0;
                            b = this.sc(c);
                            this.jd(b.b,
                                b.a, oa.i0);
                            break
                        }
        },
        Xv: function(a) {
            a.preventDefault();
            if (this.enabled)
                if (this.oq)
                    for (var b = 0, c = a.changedTouches; b < c.length;) {
                        var d = c[b];
                        ++b;
                        a = this.sc(d);
                        d.identifier == this.be && (this.be = null);
                        this.jd(a.b, a.a, oa.i1, d.identifier)
                    } else {
                        b = 0;
                        for (c = a.changedTouches; b < c.length;)
                            if (d = c[b], ++b, d.identifier == this.be) {
                                this.be = null;
                                this.Zd[0] = !1;
                                a = this.sc(d);
                                this.jd(a.b, a.a, oa.i1);
                                return
                            }
                        a = a.changedTouches[0];
                        this.be = a.identifier;
                        a = this.sc(a);
                        this.jd(a.b, a.a, oa.i1)
                    }
        },
        Yv: function(a) {
            if (this.enabled)
                if (this.oq)
                    for (var b =
                            0, c = a.changedTouches; b < c.length;) {
                        var d = c[b];
                        ++b;
                        a = this.sc(d);
                        if (d.identifier == this.be) {
                            var e = this.J;
                            e.b = a.b;
                            e.a = a.a
                        }
                        this.jd(a.b, a.a, oa.i2, d.identifier)
                    } else {
                        c = 0;
                        for (d = a.changedTouches; c < d.length;)
                            if (b = d[c], ++c, b.identifier == this.be) {
                                a = this.sc(b);
                                this.jd(a.b, a.a, oa.i2, b.identifier);
                                return
                            }
                        a = a.changedTouches[0];
                        this.be = a.identifier;
                        a = this.sc(a);
                        this.jd(a.b, a.a, oa.i2)
                    }
        },
        sc: function(a) {
            if (null == this.element) this.Jb.b = a.clientX * this.devicePixelRatio | 0, this.Jb.a = a.clientY * this.devicePixelRatio | 0;
            else {
                var b =
                    this.element.getBoundingClientRect(),
                    c = a.clientX;
                a = a.clientY;
                c < b.left && (c = b.left);
                c > b.right && (c = b.right);
                a < b.top && (a = b.top);
                a > b.bottom && (a = b.bottom);
                this.Jb.b = (c - b.left) * this.devicePixelRatio | 0;
                this.Jb.a = (a - b.top) * this.devicePixelRatio | 0
            }
            return this.Jb
        },
        Rv: function(a) {
            this.jd(Math.max(-1, Math.min(1, a.wheelDelta || -a.detail)), 0, oa.i3)
        },
        l: ba
    });
    var oa = Ja.e7 = {
        qc: !0,
        fc: ["i0", "i1", "i2", "i3"]
    };
    oa.i0 = {
        m: 0,
        s: "e7",
        toString: n
    };
    oa.i1 = {
        m: 1,
        s: "e7",
        toString: n
    };
    oa.i2 = {
        m: 2,
        s: "e7",
        toString: n
    };
    oa.i3 = {
        m: 3,
        s: "e7",
        toString: n
    };
    oa.zc = [oa.i0, oa.i1, oa.i2, oa.i3];
    Lf.g = "B6";
    Lf.prototype = {
        l: Lf
    };
    Kf.g = "B7";
    Kf.prototype = {
        yw: function(a, b) {
            var c = [];
            this.Pr(this.Jq.b, this.Jq.a, this.Kq.b, this.Kq.a, this.Lq.b, this.Lq.a, this.Mq.b, this.Mq.a, c, b);
            b = 0;
            var d = c.length,
                e = c[b++],
                f = c[b++],
                g = c[b++],
                h = c[b++];
            a.push(e);
            for (a.push(f); b <= d;) {
                var l = g - e;
                var k = h - f;
                l = l * l + k * k;
                (0 < l ? .001 > l : .001 > -l) || (a.push(g), a.push(h), e = g, f = h);
                g = c[b++];
                h = c[b++]
            }
        },
        Pr: function(a, b, c, d, e, f, g, h, l, k) {
            this.mF(a, b, c, d, e, f, g, h, k) ? (l.push(a), l.push(b), l.push(c), l.push(d), l.push(e),
                l.push(f), l.push(g), l.push(h)) : (a = this.dA(a, b, c, d, e, f, g, h, []), this.Pr(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], l, k), this.Pr(a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15], l, k))
        },
        mF: function(a, b, c, d, e, f, g, h, l) {
            e = this.Nt(a, b, g, h, e, f);
            return this.Nt(a, b, g, h, c, d) < l ? e < l : !1
        },
        dA: function(a, b, c, d, e, f, g, h, l) {
            var k = .5 * (a + c),
                m = .5 * (b + d),
                p = .5 * (c + e),
                q = .5 * (d + f);
            e = .5 * (e + g);
            f = .5 * (f + h);
            d = .5 * (k + p);
            c = .5 * (m + q);
            p = .5 * (p + e);
            q = .5 * (q + f);
            var n = .5 * (d + p),
                t = .5 * (c + q);
            l[0] = a;
            l[1] = b;
            l[2] = k;
            l[3] = m;
            l[4] = d;
            l[5] = c;
            l[6] = n;
            l[7] = t;
            l[8] = n;
            l[9] = t;
            l[10] = p;
            l[11] = q;
            l[12] = e;
            l[13] = f;
            l[14] = g;
            l[15] = h;
            return l
        },
        Nt: function(a, b, c, d, e, f) {
            e -= a;
            f -= b;
            a = c - a;
            d -= b;
            b = e * a + f * d;
            if (0 >= b) return e * e + f * f;
            d = a * a + d * d;
            return b >= d ? e * e + f * f - 2 * b + d : e * e + f * f - b / d * b
        },
        l: Kf
    };
    var Cg = {
        g: "B8",
        ox: function(a) {
            return "rgba(" + (Math.round(255 * a.b) & 255) + "," + (Math.round(255 * a.a) & 255) + "," + (Math.round(255 * a.c) & 255) + "," + +a.d.toFixed(2) + ")"
        }
    };
    L.g = "B9";
    L.Gm = function() {
        return function(a) {
            return a
        }
    };
    L.Rh = function() {
        return function(a) {
            return Math.pow(a, 2)
        }
    };
    L.iw = function() {
        return function(a) {
            return 1 >
                (a *= 2) ? .5 * Math.pow(a, 2) : 1 - .5 * Math.abs(Math.pow(2 - a, 2))
        }
    };
    L.mc = function(a) {
        return function(b) {
            return 1 - Math.pow(1 - b, a)
        }
    };
    L.oz = function() {
        var a;
        null == a && (a = .1);
        var b = 17.0158 * a;
        return function(a) {
            return a * a * ((b + 1) * a - b)
        }
    };
    L.pz = function() {
        var a = .05;
        null == a && (a = .1);
        var b = 17.0158 * a * 1.525;
        return function(a) {
            if (.5 > a) return 2 * a * a * (2 * (b + 1) * a - b);
            a = 2 * a - 2;
            return .5 * (a * a * ((b + 1) * a + b) + 2)
        }
    };
    L.hi = function(a) {
        null == a && (a = .1);
        var b = 17.0158 * a;
        return function(a) {
            --a;
            return a * a * ((b + 1) * a + b) + 1
        }
    };
    L.Kd = function(a) {
        var b = 0;
        null ==
            a && (a = .3);
        null == b && (b = 0);
        if (1 > b) {
            var c = 1;
            var d = .25 * a
        } else c = b, d = a / 6.283185307179586 * Math.asin(1 / c);
        return function(b) {
            return c * Math.pow(2, -10 * b) * Math.sin(6.283185307179586 * (b - d) / a) + 1
        }
    };
    hb.g = "BA";
    hb.map = function(a, b, c, d, e) {
        return d + (a - b) / (c - b) * (e - d)
    };
    var wf = {
            g: "BB",
            Vh: function(a) {
                a.b = 1;
                a.a = 0;
                a.c = 0;
                a.d = 0;
                a.e = 1;
                a.Ea = 0;
                a.fb = 0;
                a.G = 0;
                a.hb = 1;
                return a
            }
        },
        Oa = {
            g: "BC",
            Yg: function() {
                var a = new Jf;
                Oa.Vh(a);
                return a
            },
            from: function(a, b) {
                a.b = b.b;
                a.a = b.a;
                a.c = b.c;
                a.d = b.d;
                a.e = b.e;
                a.Ea = b.Ea;
                a.fb = b.fb;
                a.G = b.G;
                a.hb = b.hb;
                a.ic = b.ic;
                a.k = b.k;
                a.nb = b.nb;
                a.uc = b.uc;
                a.n = b.n;
                a.Qd = b.Qd;
                a.p = b.p;
                return a
            },
            Vh: function(a) {
                a.b = 1;
                a.a = 0;
                a.c = 0;
                a.d = 0;
                a.e = 0;
                a.Ea = 1;
                a.fb = 0;
                a.G = 0;
                a.hb = 0;
                a.ic = 0;
                a.k = 1;
                a.nb = 0;
                a.uc = 0;
                a.n = 0;
                a.Qd = 0;
                a.p = 1;
                return a
            },
            Dw: function(a, b, c, d) {
                a.b = 1;
                a.a = 0;
                a.c = 0;
                a.d = b;
                a.e = 0;
                a.Ea = 1;
                a.fb = 0;
                a.G = c;
                a.hb = 0;
                a.ic = 0;
                a.k = 1;
                a.nb = d;
                a.uc = 0;
                a.n = 0;
                a.Qd = 0;
                a.p = 1;
                return a
            },
            Gz: function(a, b) {
                var c = Math.sin(b);
                b = Math.cos(b);
                var d = a.b,
                    e = a.e;
                a.b = b * d - c * e;
                a.e = c * d + b * e;
                d = a.a;
                e = a.Ea;
                a.a = b * d - c * e;
                a.Ea = c * d + b * e;
                d = a.c;
                e = a.fb;
                a.c = b * d - c * e;
                a.fb = c * d + b * e;
                d = a.d;
                e = a.G;
                a.d = b * d - c * e;
                a.G = c * d + b * e
            },
            vt: function(a, b, c, d) {
                a.b *= b;
                a.a *= b;
                a.c *= b;
                a.d *= b;
                a.e *= c;
                a.Ea *= c;
                a.fb *= c;
                a.G *= c;
                a.hb *= d;
                a.ic *= d;
                a.k *= d;
                a.nb *= d
            },
            sF: function(a, b) {
                var c = b.b,
                    d = b.a,
                    e = b.c,
                    f = b.d,
                    g = b.e,
                    h = b.Ea,
                    l = b.fb,
                    k = b.G,
                    m = b.hb,
                    p = b.ic,
                    q = b.k,
                    n = b.nb,
                    t = b.uc,
                    u = b.n,
                    v = b.Qd;
                b = b.p;
                var P = a.b,
                    r = a.a,
                    w = a.c,
                    x = a.d;
                a.b = P * c + r * g + w * m + x * t;
                a.a = P * d + r * h + w * p + x * u;
                a.c = P * e + r * l + w * q + x * v;
                a.d = P * f + r * k + w * n + x * b;
                P = a.e;
                r = a.Ea;
                w = a.fb;
                x = a.G;
                a.e = P * c + r * g + w * m + x * t;
                a.Ea = P * d + r * h + w * p + x * u;
                a.fb = P * e + r * l + w * q + x * v;
                a.G = P * f + r * k + w * n + x * b;
                P = a.hb;
                r = a.ic;
                w = a.k;
                x = a.nb;
                a.hb = P * c + r * g + w * m + x * t;
                a.ic = P * d + r * h + w * p + x * u;
                a.k = P * e + r * l + w * q + x * v;
                a.nb = P * f + r * k + w * n + x * b;
                P = a.uc;
                r = a.n;
                w = a.Qd;
                x = a.p;
                a.uc = P * c + r * g + w * m + x * t;
                a.n = P * d + r * h + w * p + x * u;
                a.Qd = P * e + r * l + w * q + x * v;
                a.p = P * f + r * k + w * n + x * b
            },
            Su: function(a, b) {
                var c = a.b * a.Ea - a.a * a.e,
                    d = a.b * a.fb - a.c * a.e,
                    e = a.b * a.G - a.d * a.e,
                    f = a.a * a.fb - a.c * a.Ea,
                    g = a.a * a.G - a.d * a.Ea,
                    h = a.c * a.G - a.d * a.fb,
                    l = a.hb * a.n - a.ic * a.uc,
                    k = a.hb * a.Qd - a.k * a.uc,
                    m = a.hb * a.p - a.nb * a.uc,
                    p = a.ic * a.Qd - a.k * a.n,
                    q = a.ic * a.p - a.nb * a.n,
                    n = a.k * a.p - a.nb * a.Qd,
                    t = 1 / (c * n - d * q + e * p + f * m - g * k + h * l);
                b.b = (a.Ea *
                    n - a.fb * q + a.G * p) * t;
                b.e = (-a.e * n + a.fb * m - a.G * k) * t;
                b.hb = (a.e * q - a.Ea * m + a.G * l) * t;
                b.uc = (-a.e * p + a.Ea * k - a.fb * l) * t;
                b.a = (-a.a * n + a.c * q - a.d * p) * t;
                b.Ea = (a.b * n - a.c * m + a.d * k) * t;
                b.ic = (-a.b * q + a.a * m - a.d * l) * t;
                b.n = (a.b * p - a.a * k + a.c * l) * t;
                b.c = (a.n * h - a.Qd * g + a.p * f) * t;
                b.fb = (-a.uc * h + a.Qd * e - a.p * d) * t;
                b.k = (a.uc * g - a.n * e + a.p * c) * t;
                b.Qd = (-a.uc * f + a.n * d - a.Qd * c) * t;
                b.d = (-a.ic * h + a.k * g - a.nb * f) * t;
                b.G = (a.hb * h - a.k * e + a.nb * d) * t;
                b.nb = (-a.hb * g + a.ic * e - a.nb * c) * t;
                b.p = (a.hb * f - a.ic * d + a.k * c) * t;
                return b
            }
        };
    x.g = "BD";
    x.prototype = {
        l: x
    };
    pc.g = "BE";
    pc.prototype = {
        l: pc
    };
    Lc.g = "BF";
    Lc.prototype = {
        l: Lc
    };
    w.g = "C0";
    w.prototype = {
        l: w
    };
    qd.g = "C1";
    qd.prototype = {
        l: qd
    };
    Jf.g = "C2";
    Jf.prototype = {
        l: Jf
    };
    var Cb = {
        g: "C3",
        rw: function(a, b) {
            var c = b.b,
                d = b.a,
                e = 2 * (c * a.b + d * a.a);
            b.b = c - e * a.b;
            b.a = d - e * a.a
        },
        CF: function(a) {
            var b = a.a,
                c = new pc;
            c.b = a.b;
            c.a = b;
            c.c = 0;
            return c
        },
        wB: function(a) {
            return Math.sqrt(a.b * a.b + a.a * a.a)
        },
        normalize: function(a) {
            var b = a.b * a.b + a.a * a.a;
            0 < b && (b = Math.sqrt(b), a.b /= b, a.a /= b);
            return b
        }
    };
    ud.g = "C4";
    ud.prototype = {
        Ln: function(a) {
            this.Zk = a
        },
        Fg: function() {
            throw 0;
        },
        l: ud
    };
    Uc.g =
        "C5";
    Uc.F = ud;
    Uc.prototype = r(ud.prototype, {
        Ln: function(a) {
            ud.prototype.Ln.call(this, a);
            this.oc[0] = this.Zk;
            for (a = 1; 624 > a;) {
                var b = a++,
                    c = this.oc[b - 1] ^ this.oc[b - 1] >>> 30;
                c = 0 > c ? (c ^ -2147483648) + -2147483648 : c;
                for (var d = 0, e = 0; 32 > e;) {
                    var f = e++;
                    0 != (1812433253 >>> f & 1) && (f = c << f, d = d + (0 > f ? (f ^ -2147483648) + -2147483648 : f) & -1, d = 0 > d ? (d ^ -2147483648) + -2147483648 : d)
                }
                c = d + b & -1;
                this.oc[b] = 0 > c ? (c ^ -2147483648) + -2147483648 : c;
                c = this.oc[b] & -1;
                this.oc[b] = 0 > c ? (c ^ -2147483648) + -2147483648 : c
            }
            this.Yo = 624
        },
        vD: function() {
            if (624 <= this.Yo) {
                for (var a,
                        b = 0; 227 > b;) {
                    var c = b++;
                    a = this.oc[c] & -2147483648 | this.oc[c + 1] & -2147483649;
                    a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                    a = this.oc[c + 397] ^ a >>> 1 ^ this.pk[a & 1];
                    this.oc[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a
                }
                for (b = 227; 623 > b;) c = b++, a = this.oc[c] & -2147483648 | this.oc[c + 1] & -2147483649, a = 0 > a ? (a ^ -2147483648) + -2147483648 : a, a = this.oc[c + -227] ^ a >>> 1 ^ this.pk[a & 1], this.oc[c] = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                a = this.oc[623] & -2147483648 | this.oc[0] & -2147483649;
                a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
                a = this.oc[396] ^ a >>> 1 ^ this.pk[a & 1];
                this.oc[623] =
                    0 > a ? (a ^ -2147483648) + -2147483648 : a;
                this.Yo = 0
            }
            a = this.oc[this.Yo++];
            a ^= a >>> 11;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a << 7 & -1658038656;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a << 15 & -272236544;
            a = 0 > a ? (a ^ -2147483648) + -2147483648 : a;
            a ^= a >>> 18;
            return 0 > a ? (a ^ -2147483648) + -2147483648 : a
        },
        Fg: function() {
            return 2.3283064365386963E-10 * Sa.Kc(this.vD())
        },
        l: Uc
    });
    Tc.g = "C6";
    Tc.prototype = {
        l: Tc
    };
    qc.g = "C7";
    qc.ga = [Of];
    qc.prototype = {
        l: qc
    };
    Sb.g = "C8";
    Sb.ga = [Of];
    Sb.prototype = {
        of: function(a) {
            var b = this.p,
                c = a.p;
            b.b = c.b;
            b.a = c.a;
            b =
                this.d;
            a = a.d;
            b.b = a.b;
            b.a = a.a;
            return this
        },
        clone: function() {
            var a = new Sb;
            a.p.b = this.p.b;
            a.p.a = this.p.a;
            a.d.b = this.d.b;
            a.d.a = this.d.a;
            return a
        },
        l: Sb
    };
    If.g = "C9";
    If.prototype = {
        l: If
    };
    Hf.g = "CA";
    Hf.prototype = {
        HA: function(a, b, c, d, e, f, g, h) {
            h = f * a + g * b - h;
            if ((0 > h ? -h : h) <= c) return this.pn.b = a - f * h, this.pn.a = b - g * h, this.t = 0, !0;
            var l = f * d + g * e;
            if (0 <= l * h) return this.t = -1, !1;
            c = 0 < h ? c : -c;
            this.t = (c - h) / l;
            this.pn.b = a + this.t * d - c * f;
            this.pn.a = b + this.t * e - c * g;
            return !0
        },
        l: Hf
    };
    Gf.g = "CB";
    Gf.prototype = {
        test: function() {
            var a = 0,
                b = this.sm,
                c = this.Mu,
                d = this.zh,
                e = this.yh;
            if (1E-6 > Math.abs(e.b)) {
                if (d.b < c.b || d.b > c.c) return !1
            } else {
                var f = (c.b - d.b) / e.b;
                var g = (c.c - d.b) / e.b;
                if (f > g) {
                    var h = f;
                    f = g;
                    g = h
                }
                f > a && (a = f);
                g < b && (b = g);
                if (a > b) return !1
            }
            if (1E-6 > Math.abs(e.a)) {
                if (d.a < c.a || d.a > c.d) return !1
            } else if (f = (c.a - d.a) / e.a, g = (c.d - d.a) / e.a, f > g && (c = f, f = g, g = c), f > a && (a = f), g < b && (b = g), a > b) return !1;
            this.me = a;
            this.Nh.b = d.b + e.b * a;
            this.Nh.a = d.a + e.a * a;
            return !0
        },
        l: Gf
    };
    Ff.g = "CC";
    Ff.prototype = {
        test: function() {
            var a = this.zh.b,
                b = this.zh.a,
                c = this.yh.b,
                d = this.yh.a,
                e = a - this.rm.b,
                f = b - this.rm.a,
                g = e * c + f * d;
            e = e * e + f * f - this.Rp * this.Rp;
            if (0 < e && 0 < g) return !1;
            e = g * g - e;
            if (0 > e) return !1;
            g = -g - Math.sqrt(e);
            if (g > this.sm) return !1;
            0 > g ? (this.Nh.b = a, this.Nh.a = b, this.me = 0) : (this.Nh.b = a + g * c, this.Nh.a = b + g * d, this.me = g);
            return !0
        },
        l: Ff
    };
    Sc.g = "CD";
    Sc.$j = function(a) {
        return z.Xg(a, Bg) ? (a = a.g, F.substr(a, a.lastIndexOf(".") + 1, null)) : null != z.ph(a) ? Sc.$j(z.ph(a)) : null
    };
    oe.g = "CE";
    oe.Zb = !0;
    Pa.g = "CF";
    Pa.mu = function() {
        return null
    };
    Pa.get = function(a) {
        return Pa.xu().getItem(a)
    };
    Pa.set = function(a, b) {
        Pa.xu().setItem(a,
            b)
    };
    Pa.xu = function() {
        if (null != Pa.rj) return Pa.rj;
        Pa.rj = Pa.mu();
        if (null != Pa.rj) return Pa.rj;
        Pa.rj = xg.bB();
        return Pa.rj
    };
    tc.g = "D0";
    tc.lm = function(a) {
        var b = " ";
        null == b && (b = ".");
        var c = a + "";
        if (1E6 > a) {
            if (1E3 > a) return c;
            if (1E4 > a) return F.substr(c, 0, 1) + b + F.substr(c, 1, null);
            if (1E5 > a) return F.substr(c, 0, 2) + b + F.substr(c, 2, null);
            if (1E6 > a) return F.substr(c, 0, 3) + b + F.substr(c, 3, null)
        } else {
            if (1E7 > a) return F.substr(c, 0, 1) + b + F.substr(c, 1, 3) + b + F.substr(c, 4, null);
            if (1E8 > a) return F.substr(c, 0, 2) + b + F.substr(c, 2, 3) + b + F.substr(c,
                5, null);
            if (1E9 > a) return F.substr(c, 0, 3) + b + F.substr(c, 3, 3) + b + F.substr(c, 6, null)
        }
        return 1E10 > a ? F.substr(c, 0, 1) + b + F.substr(c, 1, 3) + b + F.substr(c, 4, 3) + b + F.substr(c, 7, null) : null
    };
    tc.jC = function(a) {
        a = null == a ? "null" : "" + a;
        for (var b = "", c = 0, d = 4 - a.length; c < d;) c++, b += "0";
        return b + a
    };
    ne.g = "D1";
    ne.prototype = {
        l: ne
    };
    Rb.g = "D2";
    Rb.prototype = {
        reset: function(a) {
            null == a && (a = -1);
            0 < a && (this.length = a);
            this.alpha = this.elapsedTime = 0
        },
        update: function(a) {
            this.PH || (this.elapsedTime += a, this.alpha = Math.min(this.elapsedTime / this.length,
                1));
            return this.alpha
        },
        l: Rb
    };
    sg.g = "D3";
    sg.Zb = !0;
    gb.g = "D4";
    gb.prototype = {
        l: gb
    };
    sc.g = "D5";
    sc.prototype = {
        l: sc
    };
    Nc.g = "D6";
    Nc.prototype = {
        u: function() {
            for (var a = this.controllers, b; null != a;) b = a.next, a.u(), a = b
        },
        Ma: function(a) {
            null != this.controllers && (a.next = this.controllers);
            this.controllers = a;
            a.object = this
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
        IA: function(a) {
            for (var b =
                    this.controllers; null != b;) {
                if (b.type == a) return b;
                b = b.next
            }
            return null
        },
        ms: function(a) {
            if (null == this.controllers || !this.Uz) return !1;
            for (var b = !1, c = this.controllers, d; null != c;) d = c.next, c.update(a) && (b = !0), c = d;
            return b
        },
        l: Nc
    };
    var Ha = Ja.e8 = {
        qc: !0,
        fc: ["i0", "i1", "i2"]
    };
    Ha.i0 = {
        m: 0,
        s: "e8",
        toString: n
    };
    Ha.i1 = {
        m: 1,
        s: "e8",
        toString: n
    };
    Ha.i2 = {
        m: 2,
        s: "e8",
        toString: n
    };
    Ha.zc = [Ha.i0, Ha.i1, Ha.i2];
    sa.g = "D7";
    sa.ga = [oe];
    sa.prototype = {
        u: function() {
            null != this.object && (this.object.detach(this), this.object = null);
            this.repeat =
                null;
            this.type = -1;
            sa.Fs--
        },
        yk: function() {
            this.Yd = !0;
            0 != this.bf && sa.xl--;
            this.bf = !1;
            this.vb = 0;
            this.Ie = sa.Gs
        },
        update: function(a) {
            return this.bf ? (this.vb += a * this.Xr, null == this.object ? !1 : this.aj(this.vb)) : this.Yd ? (this.vb += a, this.vb > sa.Gs && this.u(), !0) : !1
        },
        aj: function() {
            throw 0;
        },
        qp: function() {
            var a = this.vb + this.ne;
            if (this.repeat == Ha.i0) {
                var b = this.wd,
                    c = this.Ie;
                return a < b ? b : a > c ? c : a
            }
            b = this.Ie - this.wd;
            return 0 < b ? (c = (a - this.wd) / b, a = Math.floor(c), c -= a, this.repeat == Ha.i1 ? this.wd + c * b : 0 == (a & 1) ? this.wd + c * b : this.Ie -
                c * b) : this.wd
        },
        l: sa
    };
    Mc.g = "D8";
    Mc.F = sa;
    Mc.prototype = r(sa.prototype, {
        u: function() {
            this.en = this.dn = this.yb = null;
            sa.prototype.u.call(this)
        },
        play: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = -1);
            null == b && (b = 0);
            this.yb = a;
            this.Um = b;
            this.zk = 0 > c ? a.frames.length - 1 : c;
            this.wd = this.yb.Zc[b];
            this.Ie = this.yb.Zc[this.zk + 1];
            this.vb = this.wd;
            this.vb += d;
            1 != this.bf && sa.xl++;
            this.bf = !0;
            this.Yd = !1;
            this.index = -1;
            this.lastIndex = b;
            this.aj(this.vb)
        },
        stop: function() {
            this.yb = null;
            this.Vk = 0;
            this.yk()
        },
        aj: function() {
            var a = this.qp(),
                b = this.yb.Vd;
            if (1 == b) var c = this.lastIndex = 0;
            else if (a >= this.yb.nf) c = this.lastIndex = b - 1;
            else {
                if (0 < this.yb.Qo) c = a / this.yb.Qo | 0;
                else {
                    c = 0;
                    var d = this.yb.Zc,
                        e = d[this.lastIndex + 1];
                    if (a >= d[this.lastIndex] && a <= e) c = this.lastIndex;
                    else if (16 > b)
                        for (e = 0; e <= b;) {
                            if (d[e] >= a) {
                                c = e - 1;
                                break
                            }++e
                        } else c = ea.sz(d, a, b - 1), 0 > c && (c = ~c, --c)
                }
                this.lastIndex = c
            }
            c < this.Um ? c = this.Um : c > this.zk && (c = this.zk);
            c != this.index && (this.index = c, this.en(this.yb.values[c], c, a), c >= this.zk && (this.dn(), this.repeat == Ha.i0 && (0 < this.Vk-- ? (this.vb = this.wd,
                this.index = -1, this.lastIndex = this.Um, this.aj(this.vb)) : (this.yk(), this.yb = null))));
            return !0
        },
        l: Mc
    });
    Rc.g = "D9";
    Rc.prototype = {
        l: Rc
    };
    var Z = Ja.e9 = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5".split(" ")
    };
    Z.i0 = {
        m: 0,
        s: "e9",
        toString: n
    };
    Z.i1 = {
        m: 1,
        s: "e9",
        toString: n
    };
    Z.i2 = {
        m: 2,
        s: "e9",
        toString: n
    };
    Z.i3 = {
        m: 3,
        s: "e9",
        toString: n
    };
    Z.i4 = {
        m: 4,
        s: "e9",
        toString: n
    };
    Z.i5 = {
        m: 5,
        s: "e9",
        toString: n
    };
    Z.zc = [Z.i0, Z.i1, Z.i2, Z.i3, Z.i4, Z.i5];
    Ef.g = "DA";
    Ef.prototype = {
        l: Ef
    };
    rc.g = "DB";
    rc.F = sa;
    rc.prototype = r(sa.prototype, {
        u: function() {
            this.hd = null;
            sa.prototype.u.call(this)
        },
        play: function(a, b) {
            null == b && (b = 0);
            var c = rc.cache,
                d = a.name;
            this.data = null != va[d] ? c.Cf(d) : c.G[d];
            null == this.data && (c = rc.cache, d = a.name, a = this.data = new Df(a), null != va[d] ? c.Bd(d, a) : c.G[d] = a);
            this.lastIndex = 0;
            this.repeat = Ha.i0;
            this.vb = b;
            this.wd = 0;
            this.Ie = this.data.nf;
            1 != this.bf && sa.xl++;
            this.bf = !0;
            this.Yd = !1;
            this.gE(0)
        },
        aj: function(a) {
            var b = this.qp(),
                c = this.data.Zc,
                d;
            if (b <= c[0]) var e = d = this.lastIndex = b = 0;
            else if (b >= c[this.data.Vd - 1]) b = 0, e = d = this.lastIndex = this.data.Vd - 1;
            else if (b > c[this.lastIndex]) {
                for (d =
                    this.lastIndex + 1; b >= c[d];) this.lastIndex = d, ++d;
                e = this.lastIndex;
                b = (b - c[e]) / (c[d] - c[e])
            } else if (b < c[this.lastIndex]) {
                for (d = this.lastIndex - 1; b <= c[d];) this.lastIndex = d, --d;
                e = d;
                d = this.lastIndex;
                b = (b - c[e]) / (c[d] - c[e])
            } else b = 0, e = d = this.lastIndex;
            this.Hw(e, d, b);
            this.fn(this.eq);
            return a > this.Ie && this.repeat == Ha.i0 ? (null != this.hd && (this.hd(), this.hd = null), this.yk(), !1) : !0
        },
        gE: function(a) {
            this.Hw(a, a, 1);
            this.fn(this.eq)
        },
        Hw: function(a, b, c) {
            var d = this.data.parameters,
                e = this.eq;
            if (a != b) {
                c = this.data.$d[a](c);
                var f = this.data.Lo[a];
                null == f && (f = 0);
                if (0 != (f & 1 << Z.i0.m)) {
                    var g = Z.i0.m,
                        h = d[6 * a + g];
                    e.nr = h + (d[6 * b + g] - h) * c
                }
                0 != (f & 1 << Z.i1.m) && (g = Z.i1.m, h = d[6 * a + g], e.or = h + (d[6 * b + g] - h) * c);
                0 != (f & 1 << Z.i2.m) && (g = Z.i2.m, h = d[6 * a + g], e.rotation = h + (d[6 * b + g] - h) * c);
                0 != (f & 1 << Z.i3.m) && (g = Z.i3.m, h = d[6 * a + g], e.cs = h + (d[6 * b + g] - h) * c);
                0 != (f & 1 << Z.i4.m) && (g = Z.i4.m, h = d[6 * a + g], e.ds = h + (d[6 * b + g] - h) * c);
                0 != (f & 1 << Z.i5.m) && (f = Z.i5.m, a = d[6 * a + f], e.alpha = a + (d[6 * b + f] - a) * c)
            } else e.nr = d[6 * b + Z.i0.m], e.or = d[6 * b + Z.i1.m], e.rotation = d[6 * b + Z.i2.m], e.cs = d[6 * b +
                Z.i3.m], e.ds = d[6 * b + Z.i4.m], e.alpha = d[6 * b + Z.i5.m]
        },
        l: rc
    });
    Df.g = "DC";
    Df.prototype = {
        l: Df
    };
    me.g = "DD";
    me.F = sa;
    me.prototype = r(sa.prototype, {
        u: function() {
            this.Mf = this.jf = this.$d = null;
            sa.prototype.u.call(this)
        },
        tl: function(a, b, c, d, e) {
            this.key = a;
            this.UE = b;
            this.St = c;
            this.$d = e;
            this.wd = this.vb = 0;
            this.Ie = d;
            1 != this.bf && sa.xl++;
            this.bf = !0;
            this.Yd = !1
        },
        stop: function() {
            this.jf = this.Mf = null;
            this.yk()
        },
        aj: function(a) {
            if (a >= this.Ie && this.repeat == Ha.i0) return this.yk(), this.jf(this.key, this.St), this.Mf(this.key), !1;
            a =
                this.UE;
            a += (this.St - a) * this.$d((this.qp() - this.wd) / (this.Ie - this.wd));
            this.jf(this.key, a);
            return !0
        },
        l: me
    });
    Qc.g = "DE";
    Qc.prototype = {
        Yd: function() {
            this.xb = null
        },
        getContext: function() {
            throw 0;
        },
        qE: function(a) {
            this.xb = a;
            a.gn(this);
            var b = this.getContext();
            null != b && a.Jk(b)
        },
        sd: function() {
            var a = this.size,
                b = a.a,
                c = new x;
            c.b = a.b;
            c.a = b;
            return c
        },
        GB: function() {
            var a = this.viewport;
            return 0 < a.b || 0 < a.a || 1 > a.c ? !0 : 1 > a.d
        },
        rh: function() {
            this.ss || (this.ss = !0, this.Ok.b = this.size.b * this.viewport.b + .5 | 0, this.Ok.a = this.size.a *
                this.viewport.a + .5 | 0, this.Ok.c = this.size.b * this.viewport.c | 0, this.Ok.d = this.size.a * this.viewport.d | 0);
            var a = this.Ok,
                b = a.b,
                c = a.a,
                d = a.c;
            a = a.d;
            null == a && (a = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var e = new Lc;
            e.b = b;
            e.a = c;
            e.c = d;
            e.d = a;
            return e
        },
        resize: function(a, b) {
            var c = this.size;
            c.b = a;
            c.a = b;
            this.ss = !1;
            this.Po()
        },
        Po: function() {
            throw 0;
        },
        Jk: function() {
            null != this.xb && this.xb.Jk(this.getContext())
        },
        l: Qc
    };
    cc.g = "DF";
    cc.yH = function() {};
    cc.F = Qc;
    cc.prototype = r(Qc.prototype, {
        resize: function(a, b) {
            Qc.prototype.resize.call(this,
                a, b);
            this.Lk(this.sd())
        },
        l: cc
    });
    vb.g = "E0";
    vb.prototype = {
        bE: function() {
            vb.current = this
        },
        oA: function(a) {
            var b = this.wn;
            null != b && null != b.getContext() && 0 != b.sd().b && (this.QF(), this.Xe = 1, this.sr(this.Pl = Gb.Ks.Ao), this.yq(), a = this.Ft.Rz(a, this.Bv), this.qA(a), null != this.ti && this.cl(null), this.Eq())
        },
        clear: function() {},
        QF: function() {
            this.Qf = this.uu();
            Oa.Su(this.Qf, this.VB);
            Oa.from(this.ap, this.Qf);
            null != this.eh && Oa.sF(this.ap, this.eh.sB())
        },
        qA: function(a) {
            var b = a.f,
                c = 0;
            for (a = a.i; c < a;) {
                var d = c++;
                this.rA(b[d])
            }
        },
        rA: function(a) {
            var b = a.Ya;
            b.active && (this.It = a, this.Fn(a), 0 != this.Xe && b.ep(this))
        },
        uu: function() {
            throw 0;
        },
        createTexture: function(a, b, c) {
            var d = new pf;
            d.vm = this.rD;
            d.vl = this.Kx;
            d.fE(b, !this.ex || this.MA);
            null != c && d.TD(c.hu()); - 1 != a && wa.DD(a, d);
            return d
        },
        jh: function(a) {
            wa.wa(a) && (wa.get(a).u(), wa.NF(a))
        },
        yq: function() {},
        Eq: function() {},
        Qt: function() {},
        Rt: function() {},
        Jk: function() {},
        gn: function(a) {
            this.wn = a
        },
        OC: function() {
            this.Ft.Nj = !0
        },
        Fn: function(a) {
            if (0 != this.Id) {
                if (0 != (this.Id & 1 << ra.i0.m)) {
                    var b =
                        a.Zf[ra.i0.m];
                    b = null != b ? b.alpha : 1;
                    b != this.Xe && (this.Xe = b)
                }
                0 != (this.Id & 1 << ra.i1.m) && (b = a.Zf[ra.i1.m], b = null != b ? b.Ao : Gb.Ks.Ao, b != this.Pl && (this.Pl = b, this.sr(this.Pl)));
                0 != (this.Id & 1 << ra.i2.m) && (b = a.Zf[ra.i2.m], null != b ? null != b.Mx && b.Mx != this.ti && this.cl(b.Mx, null != b.la) : null != this.ti && this.cl(null));
                0 != (this.Id & 1 << ra.i3.m) && (a = a.Zf[ra.i3.m], null != a ? this.Ew(a.Pz) : null != this.Xo && this.Ew(null))
            }
        },
        sr: function() {},
        cl: function(a) {
            this.ti = a
        },
        Ew: function(a) {
            this.Xo = a
        },
        l: vb
    };
    ob.g = "E1";
    ob.ga = [oe];
    ob.F = wd;
    ob.prototype =
        r(wd.prototype, {
            u: function() {},
            ep: function() {
                throw 0;
            },
            l: ob
        });
    td.g = "E2";
    td.F = ob;
    td.prototype = r(ob.prototype, {
        QA: function() {
            this.Kl = !0;
            return this.color
        },
        kj: function(a) {
            this.Kl = !0;
            this.color = a
        },
        u: function() {
            ob.prototype.u.call(this);
            this.Tg = null
        },
        ep: function(a) {
            a.Qt(this);
            this.Kl = !1
        },
        l: td
    });
    Pc.g = "E3";
    Pc.F = ob;
    Pc.prototype = r(ob.prototype, {
        Gw: function(a) {
            if (this.frame != a) {
                this.frame = a;
                var b = this.dc.wf;
                if (b.Ri) a = b.hq.f[a];
                else {
                    b = b.iq;
                    var c = b.da,
                        d = c.Uc[73856093 * a & c.Od];
                    if (-1 == d) a = -2147483648;
                    else if (c =
                        c.f, c[d] == a) a = c[d + 1];
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
                    a = -2147483648 == a ? null : b.Gh[a]
                }
                a = this.dc.vl ? a.Tr : a.nF;
                b = this.Xa;
                b.b = a.b;
                b.a = a.a;
                b.c = a.c;
                b.d = a.d
            }
        },
        Ka: function(a) {
            this.dc = a;
            this.Xa.b = 0;
            this.Xa.a = 0;
            this.Xa.c = a.U.b;
            this.Xa.d = a.U.a;
            a.vl || (this.Xa.c /= a.Ag.b, this.Xa.d /= a.Ag.a);
            this.frame = -1;
            this.j = 0;
            this.Rk = a.vm;
            return this
        },
        u: function() {
            ob.prototype.u.call(this);
            this.dc = this.Xa = null
        },
        ep: function(a) {
            this.dc.Ni && a.Rt(this)
        },
        l: Pc
    });
    sd.g = "E4";
    sd.F = vb;
    sd.prototype = r(vb.prototype, {
        clear: function() {
            var a = this.wn;
            if (null != a && null != this.context) {
                var b = a.sd();
                this.xw();
                var c = this.context;
                c.globalAlpha = 1;
                c.globalCompositeOperation = "source-over";
                this.rk = -1;
                var d = this.Ir;
                d != this.wi && (this.wi = d, c[this.Jr] = d);
                c.clearRect(0, 0, b.b, b.a);
                0 < a.color.d && (c.fillStyle = Cg.ox(a.color), c.fillRect(0, 0, b.b, b.a))
            }
        },
        yq: function() {
            vb.prototype.yq.call(this);
            this.mw();
            var a = this.wn;
            if (a.GB()) {
                a = a.rh();
                var b = new Path2D;
                b.rect(a.b, a.a, a.c, a.d);
                this.context.clip(b)
            }
        },
        Eq: function() {
            for (vb.prototype.Eq.call(this); 0 <
                this.Pn;) this.Tq()
        },
        Qt: function(a) {
            a.Kl && (a.Tg = Cg.ox(a.QA()));
            var b = this.context,
                c = this.Ir;
            c != this.wi && (this.wi = c, b[this.Jr] = c);
            this.ih != this.Bm && (this.Bm = this.ih, b.globalCompositeOperation = this.ih);
            this.Xe != this.rk && (this.rk = this.Xe, b.globalAlpha = this.Xe);
            c = this.It.o;
            this.setTransform(c, b);
            c = c.scale;
            b.fillStyle = a.Tg;
            b.fillRect(0, 0, c.b, c.a)
        },
        Rt: function(a) {
            var b = this.context,
                c = this.Ir;
            c != this.wi && (this.wi = c, b[this.Jr] = c);
            this.ih != this.Bm && (this.Bm = this.ih, b.globalCompositeOperation = this.ih);
            this.Xe !=
                this.rk && (this.rk = this.Xe, b.globalAlpha = this.Xe);
            c = a.dc.ib;
            var d = a.Xa,
                e = this.It.o;
            this.setTransform(e, b);
            var f = e.scale;
            e = f.b;
            f = f.a;
            var g = d.b,
                h = d.a,
                l = d.c,
                k = d.d;
            null != this.Xo && (c = this.kz(a), h = g = 0);
            var m = a.j;
            if (0 == (m & 12)) 0 > e || 0 > f ? (b.scale(0 > e ? -1 : 1, 0 > f ? -1 : 1), b.drawImage(c, g, h, l, k, 0, 0, 0 > e ? -e : e, 0 > f ? -f : f)) : b.drawImage(c, g, h, l, k, 0, 0, e, f);
            else if (b = E(b, b.drawImage), 4 == (m & 12)) {
                d = a.ao % 1;
                m = a.bo % 1;
                0 > d && (d = 1 + d);
                0 > m && (m = 1 + m);
                var p = 0;
                0 != d && (p |= 1);
                0 != m && (p |= 2);
                switch (p) {
                    case 0:
                        b(c, g, h, l, k, 0, 0, e, f);
                        break;
                    case 1:
                        b(c,
                            g + d * l, h, l, k, 0, 0, e, f);
                        b(c, g, h, l * d, k, e * (1 - d), 0, e * d, f);
                        break;
                    case 2:
                        b(c, g, h + m * k, l, k, 0, 0, e, f);
                        b(c, g, h, l, k * m, 0, f * (1 - m), e, f * m);
                        break;
                    case 3:
                        b(c, g + d * l, h + m * k, l, k, 0, 0, e, f), b(c, g, h + k * m, l * d, k * (1 - m), e * (1 - d), 0, e * d, f * (1 - m)), b(c, g + d * l, h, l * (1 - d), k * m, 0, f * (1 - m), e * (1 - d), f * m), b(c, g, h, l * d, k * m, e * (1 - d), f * (1 - m), e * d, f * m)
                }
            } else if (8 == (m & 12)) {
                m = a.co;
                var q = a.eo;
                p = e / m;
                for (var n = f / q, t = m | 0, u = q | 0, r = 0, P = 0; P < u;) {
                    P++;
                    for (var v = a = 0, w = t; v < w;) v++, b(c, g, h, l, k, a, r, p, n), a += p;
                    r += n
                }
                l = h = g = 0;
                if (0 < m % 1)
                    for (++l, k = e - t * p, g = e / m * t, a = h = 0; a < u;) a++, b(c,
                        d.b, d.a, k / p * d.c, d.d, g, h, k, f / q), h += f / q;
                if (0 < q % 1)
                    for (++l, a = f - u * n, g = 0, h = f / q * u, k = 0; k < t;) k++, b(c, d.b, d.a, d.c, a / n * d.d, g, h, e / m, a), g += e / m;
                2 == l && (k = e - t * p, a = f - u * n, b(c, d.b, d.a, k / p * d.c, a / n * d.d, g, h, k, a))
            } else if (12 == (m & 12)) {
                d = 1 / a.co;
                m = 1 / a.eo;
                w = 1 / d | 0;
                P = 1 / m | 0;
                var x = 1 - w * d;
                v = 1 - P * m;
                p = this.zF;
                p.Yc(3 * w + 12);
                p.i = 0;
                n = this.AF;
                n.Yc(18 * P + 6);
                u = t = n.i = 0;
                r = a.ao % 1;
                0 > r && (r = 1 + r);
                var z = r;
                for (q = 0; q < w;) {
                    r = z;
                    var A = z + d;
                    1 < A ? (p.f[p.i++] = r, p.f[p.i++] = 1 - r, p.f[p.i++] = 1, p.f[p.i++] = 0, p.f[p.i++] = A - 1, p.f[p.i++] = 0, t += 6) : (p.f[p.i++] = r, p.f[p.i++] =
                        d, p.f[p.i++] = 0, t += 3);
                    ++q;
                    z += d;
                    z %= 1
                }
                0 < x && (r = z, A = z + x, 1 < A ? (p.f[p.i++] = r, p.f[p.i++] = 1 - r, p.f[p.i++] = 1, p.f[p.i++] = 0, p.f[p.i++] = A - 1, p.f[p.i++] = 0, t += 6) : (p.f[p.i++] = r, p.f[p.i++] = x, p.f[p.i++] = 0, t += 3));
                a = a.bo % 1;
                0 > a && (a = 1 + a);
                z = a;
                for (q = 0; q < P;) r = z, A = z + m, 1 < A ? (n.f[n.i++] = r, n.f[n.i++] = 1 - r, n.f[n.i++] = 1, n.f[n.i++] = 0, n.f[n.i++] = A - 1, n.f[n.i++] = 0, u += 6) : (n.f[n.i++] = r, n.f[n.i++] = m, n.f[n.i++] = 0, u += 3), ++q, z += m, z %= 1;
                0 < v && (r = z, A = z + v, 1 < A ? (n.f[n.i++] = r, n.f[n.i++] = 1 - r, n.f[n.i++] = 1, n.f[n.i++] = 0, n.f[n.i++] = A - 1, n.f[n.i++] = 0, u += 6) :
                    (n.f[n.i++] = r, n.f[n.i++] = v, n.f[n.i++] = 0, u += 3));
                q = a = 0;
                for (var B; q < u;) {
                    z = n.f[q++];
                    var C = n.f[q++];
                    var F = n.f[q++];
                    v = C / m;
                    for (B = r = 0; B < t;) w = p.f[B++], x = p.f[B++], A = p.f[B++], P = x / d, b(c, g + r, h + a, l * P, k * v, e * w, f * z, e * x, f * C), r = l * P * A;
                    a = k * v * F
                }
            }
        },
        uu: function() {
            var a = this.eh;
            if (null == a) return Oa.Vh(this.Qf), this.Qf;
            Oa.Dw(this.Qf, a.state.size.b / 2, a.state.size.a / 2, 0);
            var b = this.wn.rh();
            Oa.vt(this.Qf, b.c / this.zf / a.state.size.b, b.d / this.zf / a.state.size.a, 1);
            a = this.Qf;
            a.d += b.b;
            a.G += b.a;
            a.nb = a.nb;
            return this.Qf
        },
        Jk: function(a) {
            this.context =
                a
        },
        gn: function(a) {
            vb.prototype.gn.call(this, a);
            a instanceof fb && (this.zf = z.ba(a, fb).zf)
        },
        sr: function(a) {
            this.ih = this.Qz[a.m]
        },
        cl: function(a, b) {
            null == b && (b = !1);
            var c = this.ti;
            vb.prototype.cl.call(this, a);
            var d = this.context;
            if (null == a) 0 != this.Pn && this.Tq();
            else {
                a != c && null != c && this.Tq();
                this.mw();
                this.xw();
                a = this.ti;
                if (b) try {
                    var e = new Path2D;
                    e.rect(a[0].b, a[0].a, a[2].b - a[1].b, a[2].a - a[3].a);
                    d.clip(e);
                    return
                } catch (f) {}
                d.strokeStyle = this.JF;
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
            var c = a.Ba;
            a = a.translate;
            if (null == this.eh) b.setTransform(c.b, c.d, c.a, c.e, a.b, a.a);
            else {
                var d = this.yF;
                d.b = c.b;
                d.e = c.d;
                d.a = c.a;
                d.Ea = c.e;
                d.d = a.b;
                d.G = a.a;
                c = this.cA;
                a = this.ap;
                var e = d.b,
                    f = d.a,
                    g = d.d,
                    h = d.e,
                    l = d.Ea;
                d = d.G;
                var k = a.b,
                    m = a.a;
                c.b = k * e + m * h;
                c.a = k * f + m * l;
                c.d = k * g + m * d + a.d;
                k = a.e;
                m = a.Ea;
                c.e = k * e + m * h;
                c.Ea = k * f + m * l;
                c.G = k * g + m * d + a.G;
                b.setTransform(c.b, c.e, c.a, c.Ea, c.d, c.G)
            }
        },
        kz: function(a) {
            var b = a.Xa,
                c = b.b | 0,
                d = b.a | 0,
                e = b.c | 0,
                f = b.d | 0;
            b = this.uF;
            null == b && (b = this.uF = window.document.createElement("canvas"));
            if (b.width < e || b.height < f) b.width = e, b.height = f;
            var g = b.getContext("2d", null);
            g.drawImage(be.px(a.dc.ib), c, d, e, f, 0, 0, e, f);
            a = g.getImageData(0, 0, e, f);
            c = a.data;
            d = c.length;
            e = 0;
            var h = this.Xo;
            f = h.AD;
            var l = h.zB,
                k = h.tz,
                m = h.iz,
                p = h.BD,
                q = h.AB,
                n = h.uz;
            h = h.jz;
            if (1 != m && 0 != h)
                for (; e < d;) c[e] = c[e] * f + p, c[e + 1] = c[e + 1] * l + q, c[e + 2] = c[e + 2] * k + n, c[e + 3] = c[e + 3] * m + h, e += 4;
            else
                for (; e < d;) c[e] = c[e] * f + p, c[e + 1] = c[e + 1] * l + q, c[e + 2] = c[e + 2] * k + n, e += 4;
            g.putImageData(a,
                0, 0);
            return b
        },
        xw: function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0)
        },
        mw: function() {
            this.context.save();
            this.Pn++
        },
        Tq: function() {
            this.context.restore();
            this.Pn--
        },
        l: sd
    });
    fb.g = "E5";
    fb.oE = function(a) {
        a.style.setProperty("image-rendering", "pixelated");
        a.style.setProperty("image-rendering", "-moz-crisp-edges");
        a.style.setProperty("image-rendering", "-o-crisp-edges");
        a.style.setProperty("-ms-interpolation-mode", "nearest-neighbor")
    };
    fb.F = cc;
    fb.prototype = r(cc.prototype, {
        RB: function(a, b) {
            null == b && (b = !1);
            null ==
                a && (a = !0);
            this.context = this.canvas.getContext("2d", {
                alpha: a
            });
            a = this.size;
            var c = this.Zq();
            a.b = c.b;
            a.a = c.a;
            b && fb.oE(this.canvas);
            this.Jk()
        },
        GH: function() {
            return this.zf
        },
        aE: function(a) {
            this.zf = a;
            this.Po();
            null != this.xb && this.xb instanceof sd && this.xb.gn(this)
        },
        Yd: function() {
            cc.prototype.Yd.call(this);
            for (var a = 0, b = this.Hm; a < b.length;) {
                var c = b[a];
                ++a;
                c.target.removeEventListener(c.type, c.listener)
            }
            this.Hm = null
        },
        getContext: function() {
            return this.context
        },
        JB: function() {
            window.oncontextmenu = function() {
                return !1
            }
        },
        $B: function() {
            return 1 == this.Fo(window.document, null, ["fullscreenEnabled", "fullScreenEnabled"])
        },
        Po: function() {
            if (!this.xi) {
                var a = this.rh(),
                    b = this.canvas.style;
                b.position = "absolute";
                b.left = "" + (a.b / this.devicePixelRatio | 0) + "px";
                b.top = "" + (a.a / this.devicePixelRatio | 0) + "px";
                b.width = "" + Math.round(a.c / this.devicePixelRatio) + "px";
                b.height = "" + Math.round(a.d / this.devicePixelRatio) + "px";
                this.canvas.width = a.c / this.zf | 0;
                this.canvas.height = a.d / this.zf | 0;
                this.getContext() instanceof WebGLRenderingContext && this.getContext().viewport(0,
                    0, this.canvas.width, this.canvas.height);
                window.scrollTo(0, 1)
            }
        },
        Zq: function() {
            var a = new x;
            a.b = 0;
            a.a = 0;
            this.xi ? (a.b = this.canvas.width, a.a = this.canvas.height) : (a.b = window.innerWidth, a.a = window.innerHeight, a.b = a.b * this.devicePixelRatio | 0, a.a = a.a * this.devicePixelRatio | 0);
            return a
        },
        Fo: function(a, b, c) {
            b = [b];
            null != c && (b = c);
            for (c = 0; c < b.length;) {
                var d = b[c];
                ++c;
                for (var e = 0, f = ["webkit", "moz", "ms", "o", ""]; e < f.length;) {
                    var g = f[e];
                    ++e;
                    var h = d;
                    "" != g && (h = F.substr(d, 0, 1).toUpperCase() + F.substr(d, 1, null));
                    h = g + h;
                    if ("undefined" !==
                        typeof a[h]) return "function" === typeof a[h] ? a[h]() : a[h]
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
                    this.Hm.push({
                        target: a,
                        type: f + b,
                        listener: d
                    });
                    a.addEventListener(f + b, d)
                }
            } else this.Hm.push({
                target: a,
                type: b,
                listener: d
            }), a.addEventListener(b, d)
        },
        BB: function() {
            var a = window.document,
                b = a.createElement("div");
            b.id = "ppi";
            b.style.height = "1in";
            b.style.width = "1in";
            a.body.appendChild(b);
            var c = window.devicePixelRatio;
            this.Pf = a.getElementById("ppi").offsetWidth * c | 0;
            a.body.removeChild(b);
            a = window.screen.width;
            b = window.screen.height;
            if (3400 < a * c) this.Pf = 1.5 * this.Pf | 0;
            else if (!(192 >= this.Pf && 1280 <= a && null == window.orientation))
                for (var d = [375, 812, 3, 458, 288, 414, 736, 3, 401, 288, 375, 667, 2, 326, 192, 320, 568, 2, 326, 192, 320, 480, 2, 326, 192, 320, 480, 1, 163, 96, 360, 640, 4, 538, 384, 384, 640, 2, 318, 192, 360, 740, 4, 529, 384, 360, 740, 4, 568, 384, 360, 640, 4, 534, 384, 360, 640, 4, 577, 384, 360, 640, 3, 441, 288, 360, 640, 1.5, 256, 144, 360, 640, 2, 306, 192, 320, 533, 1.5,
                            233, 144, 320, 533, 1.5, 217, 144, 360, 600, 2, 316, 192, 360, 740, 4, 521, 384, 360, 640, 4, 515, 384, 360, 640, 3, 386, 288, 360, 640, 2, 267, 192, 400, 640, 2, 285, 192, 360, 640, 3, 445, 288, 384, 640, 2, 320, 192, 432, 768, 2.5, 367, 240, 320, 480, 2.4, 332, 220, 320, 480, 1.5, 217, 144, 320, 480, 2, 294, 192, 320, 480, 1.5, 252, 144, 412, 690, 3.5, 493, 336, 360, 640, 3, 468, 288, 320, 480, 3, 341, 288, 360, 598, 3, 424, 288, 360, 640, 3, 443, 288, 360, 640, 2, 342, 192, 360, 640, 1.5, 275, 144, 393, 786, 2.75, 403, 264, 360, 640, 3, 401, 288, 360, 640, 3, 373, 288, 390, 695, 2, 294, 177, 504, 504, 3, 453, 274, 390, 390,
                            1.8, 294, 177, 346, 346, 2, 328, 192, 360, 640, 2, 295, 192, 384, 640, 2, 355, 192, 360, 480, 1, 187, 96, 320, 480, 1.5, 165, 144, 1024, 1366, 2, 265, 192, 768, 1024, 2, 264, 192, 768, 1024, 1, 132, 96, 768, 1024, 2, 326, 192, 768, 1024, 1, 163, 96, 800, 1280, 1, 149, 96, 800, 1280, 1, 170, 96, 600, 1024, 1, 170, 96, 800, 1280, 2, 300, 192, 1024, 2, 281, 192, 600, 960, 2, 323, 192, 604, 966, 1.325, 216, 127, 600, 960, 2, 273, 192, 800, 1280, 1.5, 254, 144, 480, 800, 1.5, 216, 144, 600, 1024, 1, 167, 96, 1024, 1440, 1.0714285714285714, 216, 144, 720, 1280, 1.5, 207, 144, 768, 1366, 1, 148, 96, 600, 1024, 1, 169, 96
                        ], e = 0,
                        f = d.length; e < f;) {
                    var g = d[e++],
                        h = d[e++],
                        l = d[e++],
                        k = d[e++],
                        m = d[e++];
                    if (g == a && h == b && l == c && m == this.Pf) {
                        this.Pf = k;
                        break
                    }
                }
        },
        l: fb
    });
    var mb = Ja.eA = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5".split(" ")
    };
    mb.i0 = {
        m: 0,
        s: "eA",
        toString: n
    };
    mb.i1 = {
        m: 1,
        s: "eA",
        toString: n
    };
    mb.i2 = {
        m: 2,
        s: "eA",
        toString: n
    };
    mb.i3 = {
        m: 3,
        s: "eA",
        toString: n
    };
    mb.i4 = {
        m: 4,
        s: "eA",
        toString: n
    };
    mb.i5 = (ua = function(a, b) {
        var c = {
            m: 5,
            s: "eA",
            toString: n
        };
        c.src = a;
        c.dst = b;
        return c
    }, ua.Se = ["src", "dst"], ua);
    mb.zc = [mb.i0, mb.i1, mb.i2, mb.i3, mb.i4];
    var Ua = Ja.eB = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    Ua.i0 = {
        m: 0,
        s: "eB",
        toString: n
    };
    Ua.i1 = {
        m: 1,
        s: "eB",
        toString: n
    };
    Ua.i2 = {
        m: 2,
        s: "eB",
        toString: n
    };
    Ua.i3 = {
        m: 3,
        s: "eB",
        toString: n
    };
    Ua.i4 = {
        m: 4,
        s: "eB",
        toString: n
    };
    Ua.i5 = {
        m: 5,
        s: "eB",
        toString: n
    };
    Ua.i6 = {
        m: 6,
        s: "eB",
        toString: n
    };
    Ua.i7 = {
        m: 7,
        s: "eB",
        toString: n
    };
    Ua.zc = [Ua.i0, Ua.i1, Ua.i2, Ua.i3, Ua.i4, Ua.i5, Ua.i6, Ua.i7];
    var Va = Ja.eC = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    Va.i0 = {
        m: 0,
        s: "eC",
        toString: n
    };
    Va.i1 = {
        m: 1,
        s: "eC",
        toString: n
    };
    Va.i2 = {
        m: 2,
        s: "eC",
        toString: n
    };
    Va.i3 = {
        m: 3,
        s: "eC",
        toString: n
    };
    Va.i4 = {
        m: 4,
        s: "eC",
        toString: n
    };
    Va.i5 = {
        m: 5,
        s: "eC",
        toString: n
    };
    Va.i6 = {
        m: 6,
        s: "eC",
        toString: n
    };
    Va.i7 = {
        m: 7,
        s: "eC",
        toString: n
    };
    Va.zc = [Va.i0, Va.i1, Va.i2, Va.i3, Va.i4, Va.i5, Va.i6, Va.i7];
    $a.g = "E6";
    $a.prototype = {
        collapse: function() {
            throw 0;
        },
        l: $a
    };
    var ra = Ja.eD = {
        qc: !0,
        fc: ["i0", "i1", "i2", "i3"]
    };
    ra.i0 = {
        m: 0,
        s: "eD",
        toString: n
    };
    ra.i1 = {
        m: 1,
        s: "eD",
        toString: n
    };
    ra.i2 = {
        m: 2,
        s: "eD",
        toString: n
    };
    ra.i3 = {
        m: 3,
        s: "eD",
        toString: n
    };
    ra.zc = [ra.i0, ra.i1, ra.i2, ra.i3];
    Gb.g = "E7";
    Gb.F = $a;
    Gb.prototype = r($a.prototype, {
        collapse: function() {
            return this
        },
        l: Gb
    });
    rd.g = "E8";
    rd.F = $a;
    rd.prototype = r($a.prototype, {
        collapse: function(a) {
            for (var b = 1, c, d = 0, e = a.T; d < e;) c = d++, c = a.f[c], b *= c.alpha;
            null == this.No && (this.No = new rd(this.alpha));
            this.No.alpha = b;
            return this.No
        },
        l: rd
    });
    Fb.g = "E9";
    Fb.prototype = {
        u: function() {
            this.Na = null
        },
        contains: function() {
            throw 0;
        },
        Jp: function() {},
        from: function() {},
        us: function() {
            throw 0;
        },
        as: function(a, b) {
            var c = Cb.Jb,
                d = this.Na,
                e = d.a;
            c.b = d.b;
            c.a = e;
            a.cb(c, c);
            d = b.Na;
            c = Cb.CF(c);
            d.b = c.b;
            d.a = c.a;
            d.c = c.c;
            b.wb = a.gB() * this.wb
        },
        l: Fb
    };
    bc.g = "EA";
    bc.F = Fb;
    bc.prototype =
        r(Fb.prototype, {
            u: function() {
                this.rb = null;
                Fb.prototype.u.call(this)
            },
            contains: function(a) {
                var b = this.rb,
                    c = a.b;
                a = a.a;
                return c >= b.b && c <= b.c && a >= b.a ? a <= b.d : !1
            },
            Jp: function(a) {
                switch (a.type) {
                    case 1:
                        var b = a.Na;
                        a = a.wb;
                        var c = this.rb,
                            d = b.a - a,
                            e = b.b - a;
                        e < c.b ? c.b = e : e > c.c && (c.c = e);
                        d < c.a ? c.a = d : d > c.d && (c.d = d);
                        c = this.rb;
                        d = b.a + a;
                        b = b.b + a;
                        b < c.b ? c.b = b : b > c.c && (c.c = b);
                        d < c.a ? c.a = d : d > c.d && (c.d = d);
                        break;
                    case 2:
                        b = this.rb, a = z.ba(a, bc).rb, a.b < b.b && (b.b = a.b), a.c > b.c && (b.c = a.c), a.a < b.a && (b.a = a.a), a.d > b.d && (b.d = a.d)
                }
                b = this.rb;
                b = .5 * (b.c - b.b);
                a = this.rb;
                a = .5 * (a.d - a.a);
                this.Na.b = this.rb.b + b;
                this.Na.a = this.rb.a + a;
                this.wb = Math.sqrt(b * b + a * a)
            },
            from: function(a) {
                var b = a.Na,
                    c = a.wb;
                switch (a.type) {
                    case 1:
                        this.rb.b = b.b - c;
                        this.rb.a = b.a - c;
                        this.rb.c = b.b + c;
                        this.rb.d = b.a + c;
                        break;
                    case 2:
                        var d = this.rb;
                        a = z.ba(a, bc).rb;
                        d.b = a.b;
                        d.a = a.a;
                        d.c = a.c;
                        d.d = a.d
                }
                d = this.Na;
                d.b = b.b;
                d.a = b.a;
                d.c = b.c;
                this.wb = c
            },
            us: function(a) {
                var b = a.n.b,
                    c = a.n.a;
                a = a.d;
                var d = this.rb.b,
                    e = this.rb.a,
                    f = this.rb.c,
                    g = this.rb.d;
                if (1 == b) return f < a ? -1 : d > a ? 1 : 0;
                if (-1 == b) return d > -a ? -1 : f <
                    -a ? 1 : 0;
                if (1 == c) return g < a ? -1 : e > a ? 1 : 0;
                if (-1 == b) return e > -a ? -1 : g < -a ? 1 : 0;
                d = 0 | 0 > d * b + e * c - a | (0 > f * b + e * c - a) << 1 | (0 > d * b + g * c - a) << 2;
                d |= (0 > f * b + g * c - a) << 3;
                return 15 == d ? -1 : 0 == d ? 1 : 0
            },
            as: function(a, b) {
                Fb.prototype.as.call(this, a, b);
                b = z.ba(b, bc).rb;
                var c = Cb.Jb,
                    d = this.rb;
                c.b = d.b + .5 * (d.c - d.b);
                d = this.rb;
                c.a = d.a + .5 * (d.d - d.a);
                a.cb(c, c);
                b.b = c.b;
                b.a = c.a;
                b.c = c.b;
                b.d = c.a;
                if (0 < (a.A & 2)) c = a.Ba, d = a.scale, a = .5 * d.b, d = .5 * d.a, 0 < c.b ? (b.b -= c.b * a, b.c += c.b * a) : (b.b += c.b * a, b.c -= c.b * a), 0 < c.a ? (b.b -= c.a * d, b.c += c.a * d) : (b.b += c.a * d, b.c -= c.a * d),
                    0 < c.d ? (b.a -= c.d * a, b.d += c.d * a) : (b.a += c.d * a, b.d -= c.d * a), 0 < c.e ? (b.a -= c.e * d, b.d += c.e * d) : (b.a += c.e * d, b.d -= c.e * d);
                else {
                    c = a.Ba;
                    d = c.b;
                    var e = c.a,
                        f = Math.sqrt(d * d + e * e);
                    a = .5 * f;
                    c = (d * c.e - e * c.d) / f * .5;
                    e = Math.atan2(e, d);
                    d = Math.cos(e);
                    e = Math.sin(e);
                    0 < d ? (b.b -= d * a, b.c += d * a) : (b.b += d * a, b.c -= d * a);
                    0 < e ? (b.b -= e * c, b.c += e * c) : (b.b += e * c, b.c -= e * c);
                    0 < -e ? (b.a -= -e * a, b.d += -e * a) : (b.a += -e * a, b.d -= -e * a);
                    0 < d ? (b.a -= d * c, b.d += d * c) : (b.a += d * c, b.d -= d * c)
                }
            },
            l: bc
        });
    Cf.g = "EB";
    Cf.prototype = {
        reset: function(a) {
            this.state.Na.b = a.b + a.c / 2;
            this.state.Na.a =
                a.a + a.d / 2;
            this.state.size.b = a.c;
            this.state.size.a = a.d;
            this.state.rotation = 0;
            this.state.zoom = 1;
            this.ZD()
        },
        sB: function() {
            if (!this.bs) return this.Ug;
            this.bs = !1;
            var a = this.state.Na.b,
                b = this.state.Na.a;
            Oa.Dw(this.Ug, -a, -b, 0);
            Oa.vt(this.Ug, this.state.zoom, this.state.zoom, 1);
            Oa.Gz(this.Ug, .0174532925199432 * this.state.rotation);
            var c = this.Ug;
            c.d += a;
            c.G += b;
            c.nb = c.nb;
            c = this.Ug;
            c.d += -a;
            c.G += -b;
            c.nb = c.nb;
            return this.Ug
        },
        XA: function() {
            if (!this.Vp) return this.Wp;
            this.Vp = !1;
            Oa.Su(this.Ug, this.Wp);
            return this.Wp
        },
        ZD: function() {
            this.Vp = this.bs = !0;
            this.xb.OC()
        },
        l: Cf
    };
    Bf.g = "EC";
    Bf.prototype = {
        l: Bf
    };
    le.g = "ED";
    le.F = Fb;
    le.prototype = r(Fb.prototype, {
        contains: function(a) {
            var b = a.b - this.Na.b;
            a = a.a - this.Na.a;
            return b * b + a * a <= this.wb * this.wb
        },
        Jp: function(a) {
            var b = a.Na.b - this.Na.b,
                c = a.Na.a - this.Na.a,
                d = a.wb - this.wb,
                e = b * b + c * c;
            d * d >= e ? 0 <= d && this.from(a) : (d = Math.sqrt(e), e = (d + a.wb - this.wb) / (2 * d), this.Na.b += e * b, this.Na.a += e * c, this.wb = (d + this.wb + a.wb) / 2)
        },
        from: function(a) {
            this.Na.b = a.Na.b;
            this.Na.a = a.Na.a;
            this.wb = a.wb
        },
        us: function(a) {
            var b =
                a.n;
            a = this.Na.b * b.b + this.Na.a * b.a - a.d;
            return a <= -this.wb ? -1 : a >= this.wb ? 1 : 0
        },
        l: le
    });
    Af.g = "EE";
    Af.F = $a;
    Af.prototype = r($a.prototype, {
        collapse: function() {
            return this
        },
        l: Af
    });
    zf.g = "EF";
    zf.F = $a;
    zf.prototype = r($a.prototype, {
        collapse: function() {
            return this
        },
        l: zf
    });
    yf.g = "F0";
    yf.prototype = {
        l: yf
    };
    xf.g = "F1";
    xf.prototype = {
        Rz: function(a, b) {
            this.zj.i = 0;
            Na.Ox = za.Vz(a);
            Na.Et = 0;
            b || null == this.xb.eh ? za.tB(a, this.zj) : (this.Pk = (1 << this.Oh.length) - 1, this.Nj && (this.PF(), this.Nj = !1), a.Lv(this, !1));
            Na.Nx = this.zj.i;
            Na.Et = 1 -
                Na.Nx / Na.Ox;
            return this.zj
        },
        gC: function(a) {
            if (!isFinite(a.wb)) return !0;
            for (var b = 0, c = this.Oh.length; b < c;) {
                var d = b++,
                    e = 1 << d;
                if (0 != (this.Pk & e)) {
                    d = a.us(this.Oh[d]);
                    if (0 > d) return !1;
                    0 < d && (this.Pk &= ~e)
                }
            }
            return !0
        },
        PF: function() {
            var a = this.xb.eh;
            if (null != a && this.Nj) {
                this.Nj = !1;
                var b = a.state.size.b / 2,
                    c = a.state.size.a / 2,
                    d = this.un[0],
                    e = this.un[1],
                    f = this.un[2],
                    g = this.un[3];
                d.b = -b;
                d.a = -c;
                e.b = b;
                e.a = -c;
                f.b = -b;
                f.a = c;
                g.b = b;
                g.a = c;
                a = a.XA();
                b = d.b;
                c = d.a;
                var h = d.c;
                d.b = a.b * b + a.a * c + a.c * h + 1 * a.d;
                d.a = a.e * b + a.Ea * c + a.fb * h + 1 *
                    a.G;
                d.c = a.hb * b + a.ic * c + a.k * h + 1 * a.nb;
                b = e.b;
                c = e.a;
                h = e.c;
                e.b = a.b * b + a.a * c + a.c * h + 1 * a.d;
                e.a = a.e * b + a.Ea * c + a.fb * h + 1 * a.G;
                e.c = a.hb * b + a.ic * c + a.k * h + 1 * a.nb;
                b = f.b;
                c = f.a;
                h = f.c;
                f.b = a.b * b + a.a * c + a.c * h + 1 * a.d;
                f.a = a.e * b + a.Ea * c + a.fb * h + 1 * a.G;
                f.c = a.hb * b + a.ic * c + a.k * h + 1 * a.nb;
                b = g.b;
                c = g.a;
                h = g.c;
                g.b = a.b * b + a.a * c + a.c * h + 1 * a.d;
                g.a = a.e * b + a.Ea * c + a.fb * h + 1 * a.G;
                g.c = a.hb * b + a.ic * c + a.k * h + 1 * a.nb;
                a = this.Oh[0];
                b = d.b;
                c = d.a;
                h = e.b - b;
                var l = e.a - c,
                    k = Math.sqrt(h * h + l * l);
                a.n.b = -(l / k);
                a.n.a = h / k;
                a.d = a.n.b * b + a.n.a * c;
                a = this.Oh[1];
                b = g.b;
                c = g.a;
                h = f.b - b;
                l = f.a -
                    c;
                k = Math.sqrt(h * h + l * l);
                a.n.b = -(l / k);
                a.n.a = h / k;
                a.d = a.n.b * b + a.n.a * c;
                a = this.Oh[2];
                b = f.b;
                f = f.a;
                c = d.b - b;
                h = d.a - f;
                l = Math.sqrt(c * c + h * h);
                a.n.b = -(h / l);
                a.n.a = c / l;
                a.d = a.n.b * b + a.n.a * f;
                f = this.Oh[3];
                a = e.b;
                e = e.a;
                b = g.b - a;
                c = g.a - e;
                h = Math.sqrt(b * b + c * c);
                f.n.b = -(c / h);
                f.n.a = b / h;
                f.d = f.n.b * a + f.n.a * e;
                this.la.b = d.b;
                this.la.a = d.a;
                this.la.c = g.b;
                this.la.d = g.a
            }
        },
        l: xf
    };
    var Ob = Ja.eE = {
        qc: !0,
        fc: ["i0", "i1", "i2"]
    };
    Ob.i0 = {
        m: 0,
        s: "eE",
        toString: n
    };
    Ob.i1 = {
        m: 1,
        s: "eE",
        toString: n
    };
    Ob.i2 = {
        m: 2,
        s: "eE",
        toString: n
    };
    Ob.zc = [Ob.i0, Ob.i1, Ob.i2];
    ke.g =
        "F2";
    ke.prototype = {
        l: ke
    };
    eb.g = "F3";
    eb.Mz = function() {
        for (var a = 0; 4 > a;) {
            var b = a++;
            eb.Al.f[b].clear()
        }
    };
    eb.uD = function(a) {
        null == eb.Al && eb.SB();
        var b = eb.Al,
            c = eb.Wy,
            d = a;
        for (c.clear(); null != d.parent;) {
            var e = d.parent;
            c.T == c.C && c.R();
            c.f[c.T++] = e;
            d = d.parent
        }
        d = 0;
        for (e = c.T; d < e;) d++, c.f[--c.T].Yq(b);
        a.Yq(b);
        c.clear(!0);
        return b
    };
    eb.SB = function() {
        eb.Al = new W(4);
        for (var a = 0; 4 > a;) {
            a++;
            var b = eb.Al,
                c = new Ub;
            b.i == b.C && b.R();
            b.f[b.i++] = c
        }
        eb.Wy = new Ub(16)
    };
    Ka.g = "F4";
    Ka.ga = [Ec];
    Ka.F = Nc;
    Ka.prototype = r(Nc.prototype, {
        u: function() {
            Nc.prototype.u.call(this);
            null != this.parent && this.parent.removeChild(this);
            this.H = this.parent = null;
            this.local.u();
            this.local = null;
            this.o.u();
            this.Vg = this.o = null;
            this.FD();
            this.client = this.Ya = null;
            this.j = 1024
        },
        yr: function(a) {
            switch (a.m) {
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
        Lv: function(a, b) {
            if (!(0 < (this.j & 1))) {
                0 < (this.j & 2) && (b = !0);
                var c = a.Pk;
                (b || a.gC(this.Vg)) && this.Dp(a, b);
                a.Pk = c
            }
        },
        Dp: function() {
            throw 0;
        },
        Di: function() {
            throw 0;
        },
        sh: function() {
            for (var a = this; null != a.parent;) a =
                a.parent;
            return a
        },
        cg: function(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            this.ps(b);
            b && (this.Rg(), a && this.Wq())
        },
        xx: function(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            if (a && 0 < (this.j & 256))
                for (var c = this.ia; null != c;) c.xx(a, !1), c = c.H;
            this.Rg();
            b && this.Wq()
        },
        ps: function() {
            0 < (this.j & 4) || (Na.Jv++, this.j &= -9, this.j |= 32, null != this.parent ? this.o.pE(this.parent.o, this.local) : this.o.from(this.local))
        },
        Rg: function() {
            null != this.parent && (this.parent.j |= 32);
            Na.Iv++
        },
        Wq: function() {
            null != this.parent && (this.parent.Rg(), this.parent.Wq())
        },
        ul: function(a) {
            var b = null == a;
            b ? a = eb.uD(this) : this.Yq(a);
            this.Xq(a);
            b ? eb.Mz() : this.pD(a);
            this.j &= -129
        },
        UA: function(a) {
            for (var b = this.Be; null != b;) {
                if (b.state.type == a) return b.state;
                b = b.next
            }
            return null
        },
        Fn: function(a) {
            this.j |= 128;
            if (null == this.Be) this.Be = new ke(a);
            else {
                for (var b = this.Be, c = a.type; null != b;) {
                    if (b.state.type == c) {
                        b.state = a;
                        return
                    }
                    b = b.next
                }
                b = new ke(a);
                b.next = this.Be;
                this.Be = b
            }
        },
        GD: function(a) {
            this.j |= 128;
            for (var b = this.Be, c = null; null != b;) {
                if (b.state.type == a) {
                    null != c ? c.next = b.next : this.Be =
                        b.next;
                    b.next = null;
                    break
                }
                c = b;
                b = b.next
            }
        },
        FD: function() {
            this.j |= 128;
            for (var a = this.Be, b; null != a;) b = a.next, a.next = null, a = b;
            this.Be = null
        },
        Xq: function() {
            throw 0;
        },
        Yq: function(a) {
            for (var b = this.Be, c; null != b;) {
                c = b.state;
                var d = a.f[c.Hr];
                d.T == d.C && d.R();
                d.f[d.T++] = c;
                b = b.next
            }
        },
        pD: function(a) {
            for (var b = this.Be; null != b;) --a.f[b.state.Hr].T, b = b.next
        },
        Ct: function(a) {
            null == a && (a = this.oh());
            switch (a) {
                case 1:
                    return new le;
                case 2:
                    return new bc
            }
        },
        oh: function() {
            return Ka.Ux
        },
        l: Ka
    });
    nb.g = "F5";
    nb.F = Ka;
    nb.prototype = r(Ka.prototype, {
        u: function() {
            Ka.prototype.u.call(this);
            this.ia = null
        },
        Dp: function(a, b) {
            for (var c = this.ia; null != c;) c.Lv(a, b), c = c.H
        },
        Di: function(a, b) {
            return za.Di(this, a, b)
        },
        appendChild: function(a) {
            if (null == this.ia) this.ia = a, a.H = null;
            else {
                for (var b = this.ia; null != b.H;) b = b.H;
                b.H = a
            }
            a.parent = this;
            this.gf++;
            return this
        },
        Us: function(a, b) {
            if (0 == b) a.H = this.ia, this.ia = a;
            else {
                var c = this.ia,
                    d = 0;
                for (--b; d < b;) d++, c = c.H;
                a.H = c.H;
                c.H = a
            }
            a.parent = this;
            this.gf++;
            return this
        },
        removeChild: function(a) {
            if (this.ia == a) this.ia = a.H;
            else {
                for (var b =
                        this.ia; b.H != a;) b = b.H;
                b.H = a.H
            }
            a.H = null;
            a.parent = null;
            this.gf--;
            return this
        },
        er: function(a, b) {
            null == b && (b = -1);
            null == a && (a = 0);
            if (0 == a && 0 > b) {
                for (a = this.ia; null != a;) b = a.H, a.parent = null, a.H = null, a = b;
                this.ia = null;
                this.gf = 0
            } else {
                -1 == b && (b = this.gf - 1);
                if (0 == a) {
                    for (var c = 0, d = this.ia; c < b;) {
                        var e = d.H;
                        d.H = null;
                        d.parent = null;
                        d = e;
                        ++c
                    }
                    this.ia = d.H
                } else {
                    c = this.ia;
                    for (d = 0; d < a - 1;) c = c.H, ++d;
                    e = c.H;
                    for (++d; d <= b;) {
                        var f = e.H;
                        e.H = null;
                        e.parent = null;
                        e = f;
                        ++d
                    }
                    c.H = e
                }
                this.gf -= b - a + 1
            }
            return this
        },
        Yj: function(a) {
            for (var b = this.ia,
                    c = 0; c <= a;) {
                if (c == a) return b;
                b = b.H;
                ++c
            }
            return null
        },
        $D: function(a, b) {
            this.removeChild(a);
            this.Us(a, b);
            return this
        },
        de: function(a) {
            for (var b = this.ia; null != b;) {
                if (b.name == a) return b;
                b = b.H
            }
            return null
        },
        Fw: function(a) {
            if (this.ia == a) return this;
            for (var b = this.ia; b.H != a;) b = b.H;
            b.H = a.H;
            a.H = this.ia;
            this.ia = a;
            return this
        },
        Iw: function(a) {
            if (null == a.H) return this;
            var b = this.ia;
            if (b == a) {
                for (; null != b.H;) b = b.H;
                b.H = a;
                this.ia = a.H
            } else {
                for (; b.H != a;) b = b.H;
                for (b = b.H = a.H; null != b.H;) b = b.H;
                b.H = a
            }
            a.H = null;
            return this
        },
        ps: function(a,
            b) {
            null == b && (b = !0);
            Ka.prototype.ps.call(this, a);
            if (b)
                for (b = this.ia; null != b;) b.cg(!1, a), b = b.H
        },
        Rg: function() {
            if (!(0 < (this.j & 16)) && null != this.ia) {
                var a = this.ia;
                this.Vg.from(a.Vg);
                for (a = a.H; null != a;) 0 < (a.j & 256) && 0 == z.ba(a, nb).gf || this.Vg.Jp(a.Vg), a = a.H;
                this.j &= -33;
                Ka.prototype.Rg.call(this)
            }
        },
        Xq: function(a) {
            for (var b = this.ia; null != b;) b.ul(a), b = b.H
        },
        oh: function() {
            return null != nb.RA ? nb.RA() : Ka.prototype.oh.call(this)
        },
        l: nb
    });
    Eb.g = "F7";
    Eb.F = Ka;
    Eb.prototype = r(Ka.prototype, {
        u: function() {
            this.wg.u();
            this.wg =
                null;
            ea.Kf(this.Zf);
            this.Zf = null;
            Ka.prototype.u.call(this)
        },
        ns: function() {
            this.j |= 64
        },
        Rg: function() {
            0 < (this.j & 16) || 0 == (this.j & 96) || (this.wg.as(this.o, this.Vg), this.j &= -97, Ka.prototype.Rg.call(this))
        },
        Dp: function(a) {
            null != this.Ya && (a = a.zj, a.i == a.C && a.R(), a.f[a.i++] = this)
        },
        Xq: function(a) {
            for (var b, c = 0, d = a.i; c < d;) {
                var e = c++;
                b = a.f[e];
                0 == b.T ? this.Zf[e] = null : (b = b.f[b.T - 1].collapse(b), this.Zf[e] = b)
            }
        },
        oh: function() {
            return null != Eb.op ? Eb.op() : Ka.prototype.oh.call(this)
        },
        l: Eb
    });
    Qb.g = "F8";
    Qb.F = Eb;
    Qb.prototype =
        r(Eb.prototype, {
            kf: function(a, b) {
                if (!this.Vg.contains(a)) return 0;
                var c = a.b,
                    d = a.a;
                this.o.vf(a, a);
                var e = a.b,
                    f = a.a;
                (e = 0 <= e && 1 >= e && 0 <= f && 1 >= f) && null != b && (b.data[b.count++] = this);
                a.b = c;
                a.a = d;
                return e ? 1 : 0
            },
            Di: function(a, b) {
                var c = Cb.Jb,
                    d = 3E38,
                    e = 3E38,
                    f = -3E38,
                    g = -3E38;
                if (a == this) e = d = 0, g = f = 1;
                else {
                    if (a == this.parent) {
                        var h = this.local;
                        c.b = 0;
                        c.a = 0;
                        h.cb(c, c);
                        c.b < d && (d = c.b);
                        c.b > f && (f = c.b);
                        c.a < e && (e = c.a);
                        c.a > g && (g = c.a);
                        c.b = 1;
                        c.a = 0;
                        h.cb(c, c);
                        c.b < d && (d = c.b);
                        c.b > f && (f = c.b);
                        c.a < e && (e = c.a);
                        c.a > g && (g = c.a);
                        c.b = 1;
                        c.a = 1;
                        h.cb(c,
                            c);
                        c.b < d && (d = c.b);
                        c.b > f && (f = c.b);
                        c.a < e && (e = c.a);
                        c.a > g && (g = c.a);
                        c.b = 0;
                        c.a = 1;
                        h.cb(c, c)
                    } else null == a.parent ? (h = this.o, c.b = 0, c.a = 0, h.cb(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 0, h.cb(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 1, h.cb(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 0, c.a = 1, h.cb(c, c)) : (h = this.o, a = a.o, c.b = 0, c.a = 0, h.cb(c, c), a.vf(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a =
                        0, h.cb(c, c), a.vf(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 1, h.cb(c, c), a.vf(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 0, c.a = 1, h.cb(c, c), a.vf(c, c));
                    c.b < d && (d = c.b);
                    c.b > f && (f = c.b);
                    c.a < e && (e = c.a);
                    c.a > g && (g = c.a)
                }
                b.b = d;
                b.a = e;
                b.c = f;
                b.d = g;
                return b
            },
            ns: function() {
                Eb.prototype.ns.call(this);
                this.wg.Na.b = .5;
                this.wg.Na.a = .5;
                this.wg.wb = Math.sqrt(.5);
                switch (this.wg.type) {
                    case 2:
                        var a = z.ba(this.wg, bc).rb;
                        a.b = 0;
                        a.a = 0;
                        a.c = 1;
                        a.d = 1
                }
            },
            oh: function() {
                return null !=
                    Qb.op ? Qb.op() : Eb.prototype.oh.call(this)
            },
            l: Qb
        });
    za.g = "F9";
    za.Vz = function(a) {
        var b = 0,
            c = za.qj;
        c.clear();
        c.T == c.C && c.R();
        for (c.f[c.T++] = a; 0 < c.T;)
            if (a = c.f[--c.T], 0 < (a.j & 512)) ++b;
            else if (0 < (a.j & 256))
            for (a = a.ia; null != a;) c.T == c.C && c.R(), c.f[c.T++] = a, a = a.H;
        return b
    };
    za.cg = function(a, b) {
        null == b && (b = !0);
        var c = za.qj;
        c.clear();
        c.T == c.C && c.R();
        c.f[c.T++] = a;
        a = 8;
        for (b && (a |= 32); 0 < c.T;) {
            var d = c.f[--c.T];
            if (0 < (d.j & a)) d.cg(!0, b);
            else if (0 < (d.j & 256))
                for (d = d.ia; null != d;) c.T == c.C && c.R(), c.f[c.T++] = d, d = d.H
        }
    };
    za.ul = function(a) {
        var b =
            za.qj;
        b.clear();
        b.T == b.C && b.R();
        for (b.f[b.T++] = a; 0 < b.T;)
            if (a = b.f[--b.T], 0 < (a.j & 128)) a.ul();
            else if (0 < (a.j & 256))
            for (a = a.ia; null != a;) b.T == b.C && b.R(), b.f[b.T++] = a, a = a.H
    };
    za.ms = function(a, b) {
        var c = za.qj;
        c.clear();
        c.T == c.C && c.R();
        for (c.f[c.T++] = a; 0 < c.T;)
            if (a = c.f[--c.T], null != a.controllers && a.ms(b), 0 < (a.j & 256))
                for (a = a.ia; null != a;) c.T == c.C && c.R(), c.f[c.T++] = a, a = a.H
    };
    za.tB = function(a, b) {
        var c = za.qj,
            d = za.ME;
        c.clear();
        c.T == c.C && c.R();
        for (c.f[c.T++] = a; 0 < c.T;)
            if (a = c.f[--c.T], !(0 < (a.j & 1)))
                if (0 < (a.j & 512)) null !=
                    a.Ya && (d.T == d.C && d.R(), d.f[d.T++] = a);
                else if (0 < (a.j & 256))
            for (a = a.ia; null != a;) c.T == c.C && c.R(), c.f[c.T++] = a, a = a.H;
        b.i = 0;
        b.Yc(d.T);
        c = 0;
        for (a = d.T; c < a;) {
            c++;
            var e = d.f[--d.T];
            b.f[b.i++] = e
        }
    };
    za.Di = function(a, b, c) {
        var d = 3E38,
            e = 3E38,
            f = -3E38,
            g = -3E38,
            h = za.qj;
        h.clear();
        h.T == h.C && h.R();
        for (h.f[h.T++] = a; 0 < h.T;)
            if (a = h.f[--h.T], 0 < (a.j & 512)) a.Di(b, c), c.b < d && (d = c.b), c.a < e && (e = c.a), c.c > f && (f = c.c), c.d > g && (g = c.d);
            else if (0 < (a.j & 256))
            for (a = a.ia; null != a;) h.T == h.C && h.R(), h.f[h.T++] = a, a = a.H;
        c.b = d;
        c.a = e;
        c.c = f;
        c.d = g;
        return c
    };
    za.HF = function(a, b, c) {
        if (null == d) {
            var d = new w;
            d.b = 1;
            d.a = 1;
            d.c = -1;
            d.d = -1
        }
        var e = c.b,
            f = c.a,
            g = c.c,
            h = c.d,
            l = 3E38,
            k = 3E38,
            m = -3E38,
            p = -3E38,
            q = Cb.Jb;
        b == a ? (l = c.b, k = c.a, m = c.c, p = c.d) : (b == a.parent ? (b = a.local, q.b = e, q.a = f, b.cb(q, q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = g, q.a = f, b.cb(q, q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = g, q.a = h, b.cb(q, q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = e, q.a = h, b.cb(q, q)) : null == b.parent ? (b = a.o, q.b = e, q.a = f, b.cb(q,
            q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = g, q.a = f, b.cb(q, q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = g, q.a = h, b.cb(q, q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = e, q.a = h, b.cb(q, q)) : (a = a.o, b = b.o, q.b = e, q.a = f, a.cb(q, q), b.vf(q, q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = g, q.a = f, a.cb(q, q), b.vf(q, q), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = g, q.a = h, a.cb(q, q), b.vf(q, q), q.b < l && (l = q.b), q.b > m &&
            (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a), q.b = e, q.a = h, a.cb(q, q), b.vf(q, q)), q.b < l && (l = q.b), q.b > m && (m = q.b), q.a < k && (k = q.a), q.a > p && (p = q.a));
        d.b = l;
        d.a = k;
        d.c = m;
        d.d = p;
        return d
    };
    je.g = "FA";
    je.Zb = !0;
    je.prototype = {
        l: je
    };
    Na.g = "FB";
    Na.reset = function() {
        Na.Jv = 0;
        Na.Iv = 0
    };
    ac.g = "FC";
    ac.prototype = {
        u: function() {
            this.Ba = this.translate = this.scale = null
        },
        Kn: function(a) {
            if (this.Ba != a) {
                var b = this.Ba;
                b.b = a.b;
                b.a = a.a;
                b.c = a.c;
                b.d = a.d;
                b.e = a.e;
                b.Ea = a.Ea;
                b.fb = a.fb;
                b.G = a.G;
                b.hb = a.hb
            }
            this.A &= -18;
            this.A |= 34
        },
        from: function(a) {
            var b = this.translate,
                c = a.translate;
            b.b = c.b;
            b.a = c.a;
            b.c = c.c;
            b = this.scale;
            c = a.scale;
            b.b = c.b;
            b.a = c.a;
            b.c = c.c;
            b = this.Ba;
            c = a.Ba;
            b.b = c.b;
            b.a = c.a;
            b.c = c.c;
            b.d = c.d;
            b.e = c.e;
            b.Ea = c.Ea;
            b.fb = c.fb;
            b.G = c.G;
            b.hb = c.hb;
            this.A = a.A | 32;
            return this
        },
        pE: function(a, b) {
            if (0 < (a.A & 1)) {
                this.translate.b = b.translate.b;
                this.translate.a = b.translate.a;
                this.scale.b = b.scale.b;
                this.scale.a = b.scale.a;
                a = this.Ba;
                var c = b.Ba;
                a.b = c.b;
                a.a = c.a;
                a.d = c.d;
                a.e = c.e;
                this.A = b.A | 32;
                return this
            }
            if (0 < (b.A & 1)) return this.translate.b = a.translate.b, this.translate.a = a.translate.a,
                this.scale.b = a.scale.b, this.scale.a = a.scale.a, b = this.Ba, c = a.Ba, b.b = c.b, b.a = c.a, b.d = c.d, b.e = c.e, this.A = a.A | 32, this;
            this.A = 43;
            if (0 < (a.A & 2) && 0 < (b.A & 2) && 0 < (a.A & 8)) {
                c = this.Ba;
                if (0 < (a.A & 16)) {
                    var d = b.Ba;
                    c.b = d.b;
                    c.a = d.a;
                    c.d = d.d;
                    c.e = d.e;
                    0 < (b.A & 16) && (this.A |= 16)
                } else {
                    if (0 < (b.A & 16)) {
                        var e = a.Ba;
                        c.b = e.b;
                        c.a = e.a;
                        c.d = e.d;
                        c.e = e.e
                    } else {
                        e = a.Ba;
                        d = b.Ba;
                        var f = d.b;
                        var g = d.a;
                        var h = d.d;
                        var l = d.e;
                        d = e.b;
                        var k = e.a;
                        c.b = d * f + k * h;
                        c.a = d * g + k * l;
                        d = e.d;
                        k = e.e;
                        c.d = d * f + k * h;
                        c.e = d * g + k * l
                    }
                    this.Kn(c)
                }
                h = this.translate;
                e = a.translate;
                0 < (a.A & 16) ?
                    (h.b = b.translate.b, h.a = b.translate.a) : (f = b.translate.b, g = b.translate.a, c = a.Ba, h.b = c.b * f + c.a * g, h.a = c.d * f + c.e * g);
                a = a.scale.b;
                h.b = h.b * a + e.b;
                h.a = h.a * a + e.a;
                0 < (b.A & 8) ? (this.scale.b = this.scale.a = a * b.scale.b, this.A &= -6, this.A |= 40) : (b = b.scale, this.scale.b = a * b.b, this.scale.a = a * b.a, this.A &= -14, this.A |= 32);
                return this
            }
            e = a.Ba;
            0 < (a.A & 2) && (e = ac.wF, f = a.scale.b, g = a.scale.a, c = a.Ba, e.b = c.b * f, e.a = c.a * g, e.d = c.d * f, e.e = c.e * g);
            d = b.Ba;
            0 < (b.A & 2) && (e = ac.xF, f = b.scale.b, g = b.scale.a, c = b.Ba, d.b = c.b * f, d.a = c.a * g, d.d = c.d * f, d.e = c.e *
                g);
            c = this.Ba;
            f = d.b;
            g = d.a;
            h = d.d;
            l = d.e;
            d = e.b;
            k = e.a;
            c.b = d * f + k * h;
            c.a = d * g + k * l;
            d = e.d;
            k = e.e;
            c.d = d * f + k * h;
            c.e = d * g + k * l;
            h = this.translate;
            f = b.translate.b;
            g = b.translate.a;
            h.b = e.b * f + e.a * g;
            h.a = e.d * f + e.e * g;
            e = a.translate;
            h.b += e.b;
            h.a += e.a;
            this.A &= -12;
            this.A |= 32;
            return this
        },
        cb: function(a, b) {
            if (0 < (this.A & 1)) b.b = a.b, b.a = a.a;
            else {
                if (0 < (this.A & 2)) {
                    var c = a.b * this.scale.b;
                    a = a.a * this.scale.a;
                    if (0 >= (this.A & 16)) {
                        var d = c,
                            e = this.Ba;
                        c = e.b * c + e.a * a;
                        a = e.d * d + e.e * a
                    }
                } else c = a.b, a = a.a, d = c, e = this.Ba, c = e.b * c + e.a * a, a = e.d * d + e.e * a;
                b.b = c +
                    this.translate.b;
                b.a = a + this.translate.a
            }
            return b
        },
        vf: function(a, b) {
            if (0 < (this.A & 1)) b.b = a.b, b.a = a.a;
            else {
                var c = a.b - this.translate.b;
                a = a.a - this.translate.a;
                if (0 < (this.A & 2)) {
                    if (0 >= (this.A & 16)) {
                        var d = c,
                            e = this.Ba;
                        c = c * e.b + a * e.d;
                        a = d * e.a + a * e.e
                    }
                    b.b = c / this.scale.b;
                    b.a = a / this.scale.a
                } else d = this.Ba, e = 1 / (d.b * d.e - d.a * d.d), b.b = d.e * e * c - d.a * e * a, b.a = -(d.d * e) * c + d.b * e * a
            }
            return b
        },
        gB: function() {
            var a = Math;
            return 0 < (this.A & 2) ? Math.max(a.abs(this.scale.b), a.abs(this.scale.a)) : Math.max(a.abs(this.Ba.b) + a.abs(this.Ba.a),
                a.abs(this.Ba.d) + a.abs(this.Ba.e))
        },
        l: ac
    };
    qa.g = "FD";
    qa.ga = [oe, je];
    qa.prototype = {
        u: function() {
            this.remove();
            null != this.Vi && (this.Vi.u(), this.Vi = null);
            null != this.Si && (this.Si.u(), this.Si = null);
            this.node = null;
            qa.count--
        },
        remove: function() {
            null != this.node.parent && this.node.parent.removeChild(this.node)
        },
        Lb: function() {
            var a = this.node.parent;
            return null != a && (a = a.client, null != a && 2 == a.type) ? a : null
        },
        na: function(a) {
            this.Fe != a && (this.Fe = 0 > a ? 0 : 1 < a ? 1 : a, this.j |= 2);
            return this.Fe
        },
        I: function(a) {
            this.Hh != a && (this.Hh =
                a, this.j |= 4);
            return a
        },
        N: function(a) {
            this.ab != a && (this.ab = a, this.j |= 1);
            return a
        },
        O: function(a) {
            this.Ua != a && (this.Ua = a, this.j |= 1);
            return a
        },
        Me: function(a) {
            this.ie != a && (this.ie = a, this.j |= 9);
            return a
        },
        M: function(a) {
            if (this.kb != a || this.Gc != a) this.kb = this.Gc = a, this.j |= 49, this.j &= -65;
            return a
        },
        lf: function(a) {
            this.kb != a && (this.kb = a, this.j &= -97, this.j |= 17);
            return a
        },
        mf: function(a) {
            this.Gc != a && (this.Gc = a, this.j &= -97, this.j |= 17);
            return a
        },
        Ga: function() {
            throw 0;
        },
        Aa: function() {
            throw 0;
        },
        Hp: function() {
            var a =
                this.Ga(),
                b = this.Aa(),
                c = new x;
            c.b = a;
            c.a = b;
            return c
        },
        zr: function(a) {
            this.Qb != a && (this.Qb = a, this.j |= 1);
            return a
        },
        Rw: function(a) {
            this.Rb != a && (this.Rb = a, this.j |= 1);
            return a
        },
        Ar: function(a) {
            this.tg != a && (this.tg = a, this.j |= 1);
            return a
        },
        Sw: function(a) {
            this.ug != a && (this.ug = a, this.j |= 1);
            return a
        },
        LD: function() {
            this.Ua = this.ug = this.Rb = this.ab = this.tg = this.Qb = 0;
            this.Gc = this.kb = 1;
            this.ie = 0;
            this.j &= -25;
            this.j |= 97;
            var a = this.node.local,
                b = a.Ba;
            b.b = 1;
            b.a = 0;
            b.d = 0;
            b.e = 1;
            a.translate.b = 0;
            a.translate.a = 0;
            a.scale.b = 1;
            a.scale.a =
                1;
            a.A |= 63
        },
        Sa: function() {
            throw 0;
        },
        eb: function(a, b, c) {
            this.pc();
            var d = this.Sa(this.Lb()),
                e = this.ab - d.b,
                f = this.Ua - d.a;
            switch (b) {
                case -1:
                    this.N(a.b + e);
                    break;
                case 0:
                    this.N(a.b + .5 * (a.c - a.b) + e - (d.c - d.b) / 2);
                    break;
                case 1:
                    this.N(a.c + e - (d.c - d.b))
            }
            switch (c) {
                case -1:
                    this.O(a.a + f);
                    break;
                case 0:
                    this.O(a.a + .5 * (a.d - a.a) + f - (d.d - d.a) / 2);
                    break;
                case 1:
                    this.O(a.d + f - (d.d - d.a))
            }
        },
        Uj: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = Pb.i0);
            this.M(1);
            var e = (a.c - a.b) / this.Ga(),
                f = (a.d - a.a) / this.Aa();
            b == Pb.i2 ? (this.lf(e),
                this.mf(f)) : b == Pb.i0 ? this.M(Math.min(e, f)) : this.M(Math.max(e, f));
            this.N(a.b);
            this.O(a.a);
            f = this.Sa(this.Lb());
            e = a.b - f.b;
            f = a.a - f.a;
            if (b != Pb.i2) {
                switch (c) {
                    case -1:
                        this.N(a.b);
                        break;
                    case 0:
                        this.N(a.b + (a.c - a.b - this.Ga()) / 2);
                        break;
                    case 1:
                        this.N(a.c - this.Ga())
                }
                switch (d) {
                    case -1:
                        this.O(a.a);
                        break;
                    case 0:
                        this.O(a.a + (a.d - a.a - this.Aa()) / 2);
                        break;
                    case 1:
                        this.O(a.d - this.Aa())
                }
            }
            this.N(this.ab + e);
            this.O(this.Ua + f)
        },
        $f: function(a, b) {
            pa.pf(this);
            this.node.o.cb(a, b);
            return b
        },
        update: function() {},
        gb: function() {
            null ==
                this.Vi && (this.Vi = new qf(this));
            return this.Vi
        },
        vB: function() {
            null == this.Si && (this.Si = new uf(this));
            return this.Si
        },
        vh: function() {
            return new vf(this)
        },
        pc: function() {
            if (0 == (this.j & 7)) return this;
            0 < (this.j & 1) && this.Bx();
            0 < (this.j & 4) && (this.node.yr(this.Hh ? Ob.i0 : Ob.i1), this.j &= -5);
            if (0 < (this.j & 2)) {
                if (1 > this.Fe) {
                    var a = this.node.UA(ra.i0);
                    null == a ? this.node.Fn(new rd(this.Fe)) : a.alpha = this.Fe
                } else this.node.GD(ra.i0);
                this.j &= -3;
                this.node.j |= 128
            }
            return this
        },
        Bx: function() {
            this.j &= -2;
            this.node.j |= 8;
            var a =
                this.node.local,
                b = this.tg,
                c = this.ug,
                d = this.j & 120;
            if (0 < (d & 8)) {
                var e = this.ie;
                e %= 360;
                0 > e && (e += 360);
                var f = .0174532925199432 * e;
                e = Math.sin(f);
                f = Math.cos(f);
                var g = a.Ba;
                g.b = f;
                g.a = -e;
                g.d = e;
                g.e = f;
                a.Kn(g);
                if (0 < (d & 64)) a.translate.b = -(b * f) + c * e + b + this.ab - this.Qb, a.translate.a = -(b * e) - c * f + c + this.Ua - this.Rb;
                else if (0 < (d & 32)) {
                    d = this.kb;
                    d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d;
                    g = d * b;
                    var h = d * c;
                    a.scale.b = a.scale.a = d;
                    a.A &= -6;
                    a.A |= 40;
                    a.translate.b = -(g * f) + h * e + b + this.ab - this.Qb;
                    a.translate.a = -(g * e) - h * f + c + this.Ua - this.Rb
                } else {
                    d =
                        this.kb;
                    d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d;
                    g = this.Gc;
                    g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g;
                    h = d * b;
                    var l = g * c;
                    a.scale.b = d;
                    a.scale.a = g;
                    a.A &= -14;
                    a.A |= 32;
                    a.translate.b = -(h * f) + l * e + b + this.ab - this.Qb;
                    a.translate.a = -(h * e) - l * f + c + this.Ua - this.Rb
                }
            } else 0 < (d & 64) ? (a.translate.b = this.ab - this.Qb, a.translate.a = this.Ua - this.Rb) : 0 < (d & 32) ? (e = this.kb, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, a.scale.b = a.scale.a = e, a.A &= -6, a.A |= 40, a.translate.b = -(e * b) + b + this.ab - this.Qb, a.translate.a = -(e * c) + c + this.Ua - this.Rb) : (e = this.kb, e = 0 > e ? -.001 <
                e ? -.001 : e : .001 > e ? .001 : e, f = this.Gc, f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f, a.scale.b = e, a.scale.a = f, a.A &= -14, a.A |= 32, a.translate.b = -(e * b) + b + this.ab - this.Qb, a.translate.a = -(f * c) + c + this.Ua - this.Rb);
            a.A &= -2;
            a.A |= 32
        },
        l: qa
    };
    B.g = "FE";
    B.F = qa;
    B.prototype = r(qa.prototype, {
        u: function() {
            null != this.node && (qa.prototype.u.call(this), null != this.pj && (this.pj.u(), this.pj = null), this.$c.u(), this.oa = this.$c = null, this.Qj = -1, this.vi = null, B.og--)
        },
        Ga: function() {
            var a = Math;
            if (0 == (this.j & 8)) return this.U.b * a.abs(this.kb);
            var b =
                this.U.b * a.abs(this.kb) * .5,
                c = this.U.a * a.abs(this.Gc) * .5,
                d = this.ie;
            d %= 360;
            0 > d && (d += 360);
            var e = .0174532925199432 * d;
            d = -a.sin(e);
            a = a.cos(e);
            var f = e = 0;
            0 < a ? (e -= a * b, f += a * b) : (e += a * b, f -= a * b);
            0 < d ? (e -= d * c, f += d * c) : (e += d * c, f -= d * c);
            return f - e
        },
        Ne: function(a) {
            this.kb = a / this.U.b;
            this.j &= -97;
            this.j |= 17;
            return a
        },
        Aa: function() {
            var a = Math;
            if (0 == (this.j & 8)) return this.U.a * a.abs(this.Gc);
            var b = this.U.b * a.abs(this.kb) / 2,
                c = this.U.a * a.abs(this.Gc) / 2,
                d = this.ie;
            d %= 360;
            0 > d && (d += 360);
            var e = .0174532925199432 * d;
            d = a.sin(e);
            a = a.cos(e);
            var f = e = 0;
            0 < d ? (e -= d * b, f += d * b) : (e += d * b, f -= d * b);
            0 < a ? (e -= a * c, f += a * c) : (e += a * c, f -= a * c);
            return f - e
        },
        re: function(a) {
            this.Gc = a / this.U.a;
            this.j &= -97;
            this.j |= 17;
            return a
        },
        wp: function() {
            var a = this.U.a,
                b = new x;
            b.b = this.U.b;
            b.a = a;
            return b
        },
        LH: function() {
            return this.U.b
        },
        KH: function() {
            return this.U.a
        },
        Ha: function() {
            this.zr(this.U.b / 2);
            this.Rw(this.U.a / 2);
            this.j |= 1
        },
        ka: function() {
            this.tg = this.U.b / 2;
            this.ug = this.U.a / 2;
            this.j |= 1
        },
        Ka: function(a, b) {
            if (this.Qj == a) return null != b && this.bb(b), this;
            this.Qj = a;
            this.vi = null;
            if (null == this.$c.Ya) {
                var c = new Pc;
                this.$c.Ya = c
            } else 4 == this.$c.Ya.type ? c = this.$c.Ya : (this.$c.Ya.u(), c = new Pc, this.$c.Ya = c);
            a = wa.get(a);
            c.Ka(a, a.wf);
            this.U.b = c.dc.U.b;
            this.U.a = c.dc.U.a;
            null == b && (c = this.U, a = a.scale, c.b *= a, c.a *= a);
            this.j = this.U.b == this.U.a ? this.j | 256 : this.j & -257;
            this.j &= -513;
            this.j |= 129;
            null != b && this.bb(b);
            return this
        },
        bb: function(a) {
            if (this.vi == a) return a;
            this.vi = a;
            var b = this.$c.Ya.dc.wf.Km;
            this.uE((null != va[a] ? b.Cf(a) : b.G[a]).id);
            return a
        },
        Za: function() {
            null == this.pj && (this.pj = new R(this));
            return this.pj
        },
        kj: function(a, b, c) {
            this.U.b = b;
            this.U.a = c;
            this.j = this.U.b == this.U.a ? this.j | 256 : this.j & -257;
            this.j &= -513;
            this.j |= 129;
            0 > this.Qj ? null == this.$c.Ya && (this.$c.Ya = new td) : (this.Qj = -1, this.vi = null, this.$c.Ya.u(), this.$c.Ya = new td);
            this.$c.Ya.kj(a);
            return this
        },
        kf: function(a) {
            pa.pf(this);
            0 < (this.node.j & 32) && this.node.Rg();
            return 1 == this.$c.kf(a, null)
        },
        Sa: function(a) {
            var b = new w;
            b.b = 1;
            b.a = 1;
            b.c = -1;
            b.d = -1;
            if (a == this) {
                a = this.U.b;
                var c = this.U.a;
                b.b = 0;
                b.a = 0;
                b.c = a;
                b.d = c;
                return b
            }
            if (0 == (this.j & 128)) return b.b =
                0, b.a = 0, b.c = 0, b.d = 0, b;
            if (c = 512 == (this.j & 8704)) this.j &= -513, this.j |= 1;
            0 == (this.j & 16384) && (pa.pf(this), null == a || pa.Yp(this, a) || pa.pf(a));
            this.node.Di(null == a ? this.node.sh() : a.node, b);
            c && (this.j |= 513);
            this.j &= -24577;
            return b
        },
        pc: function() {
            return 0 == (this.j & 128) ? this : qa.prototype.pc.call(this)
        },
        $k: function() {
            null != this.Lb() && this.Lb().$k(this)
        },
        An: function() {
            null != this.Lb() && this.Lb().An(this)
        },
        $f: function(a, b) {
            var c = a.a,
                d = new x;
            d.b = a.b;
            d.a = c;
            d.b /= this.U.b;
            d.a /= this.U.a;
            0 < (this.j & 512) ? (this.j &= -513,
                this.j |= 1, qa.prototype.$f.call(this, d, b), this.j |= 513, pa.pf(this)) : qa.prototype.$f.call(this, d, b);
            return b
        },
        Bx: function() {
            this.j &= -2;
            this.node.j |= 8;
            var a = this.node.local;
            if (0 < (this.j & 512)) {
                var b = this.tg - this.oa.b,
                    c = this.ug - this.oa.a,
                    d = this.j & 376;
                if (0 < (d & 8)) {
                    var e = this.ie;
                    e %= 360;
                    0 > e && (e += 360);
                    var f = .0174532925199432 * e;
                    e = Math.sin(f);
                    f = Math.cos(f);
                    var g = a.Ba;
                    g.b = f;
                    g.a = -e;
                    g.d = e;
                    g.e = f;
                    a.Kn(g);
                    if (0 < (d & 64)) 0 < (d & 256) ? (a.scale.b = a.scale.a = this.oa.c, a.A &= -6, a.A |= 40) : (a.scale.b = this.oa.c, a.scale.a = this.oa.d,
                        a.A &= -14, a.A |= 32), a.translate.b = -(b * f) + c * e + b + this.ab - this.Qb + this.oa.b, a.translate.a = -(b * e) - c * f + c + this.Ua - this.Rb + this.oa.a;
                    else {
                        if (0 < (d & 32)) {
                            g = this.kb;
                            g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g;
                            var h = g * b,
                                l = g * c;
                            0 < (d & 256) ? (a.scale.b = a.scale.a = this.oa.c * g, a.A &= -6, a.A |= 40) : (a.scale.b = this.oa.c * g, a.scale.a = this.oa.d * g, a.A &= -14, a.A |= 32)
                        } else d = this.kb, d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d, g = this.Gc, g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g, h = d * b, l = g * c, a.scale.b = this.oa.c * d, a.scale.a = this.oa.d * g, a.A &= -14, a.A |= 32;
                        a.translate.b = -(h * f) + l * e + b + this.ab - this.Qb + this.oa.b;
                        a.translate.a = -(h * e) - l * f + c + this.Ua - this.Rb + this.oa.a
                    }
                } else 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.oa.c, a.A &= -6, a.A |= 40) : (a.scale.b = this.oa.c, a.scale.a = this.oa.d, a.A &= -14, a.A |= 32), a.translate.b = this.ab - this.Qb + this.oa.b, a.translate.a = this.Ua - this.Rb + this.oa.a) : 0 < (d & 32) ? (e = this.kb, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.oa.c * e, a.A &= -6, a.A |= 40) : (a.scale.b = this.oa.c * e, a.scale.a = this.oa.d * e, a.A &= -14, a.A |= 32), a.translate.b = -(e *
                    b) + b + this.ab - this.Qb + this.oa.b, a.translate.a = -(e * c) + c + this.Ua - this.Rb + this.oa.a) : (e = this.kb, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, f = this.Gc, f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f, a.scale.b = this.oa.c * e, a.scale.a = this.oa.d * f, a.A &= -14, a.A |= 32, a.translate.b = -(e * b) + b + this.ab - this.Qb + this.oa.b, a.translate.a = -(f * c) + c + this.Ua - this.Rb + this.oa.a)
            } else b = this.tg, c = this.ug, d = this.j & 376, 0 < (d & 8) ? (e = this.ie, e %= 360, 0 > e && (e += 360), f = .0174532925199432 * e, e = Math.sin(f), f = Math.cos(f), g = a.Ba, g.b = f, g.a = -e, g.d = e, g.e = f, a.Kn(g),
                0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.U.b, a.A &= -6, a.A |= 40) : (a.scale.b = this.U.b, a.scale.a = this.U.a, a.A &= -14, a.A |= 32), a.translate.b = -(b * f) + c * e + b + this.ab - this.Qb, a.translate.a = -(b * e) - c * f + c + this.Ua - this.Rb) : (0 < (d & 32) ? (g = this.kb, g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g, h = g * b, l = g * c, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.U.b * g, a.A &= -6, a.A |= 40) : (a.scale.b = this.U.b * g, a.scale.a = this.U.a * g, a.A &= -14, a.A |= 32)) : (d = this.kb, d = 0 > d ? -.001 < d ? -.001 : d : .001 > d ? .001 : d, g = this.Gc, g = 0 > g ? -.001 < g ? -.001 : g : .001 > g ? .001 : g, h = d * b, l =
                    g * c, a.scale.b = this.U.b * d, a.scale.a = this.U.a * g, a.A &= -14, a.A |= 32), a.translate.b = -(h * f) + l * e + b + this.ab - this.Qb, a.translate.a = -(h * e) - l * f + c + this.Ua - this.Rb)) : 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.U.b, a.A &= -6, a.A |= 40) : (a.scale.b = this.U.b, a.scale.a = this.U.a, a.A &= -14, a.A |= 32), a.translate.b = this.ab - this.Qb, a.translate.a = this.Ua - this.Rb) : 0 < (d & 32) ? (e = this.kb, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.U.b * e, a.A &= -6, a.A |= 40) : (a.scale.b = this.U.b * e, a.scale.a = this.U.a * e, a.A &= -14,
                a.A |= 32), a.translate.b = -(e * b) + b + this.ab - this.Qb, a.translate.a = -(e * c) + c + this.Ua - this.Rb) : (e = this.kb, e = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, f = this.Gc, f = 0 > f ? -.001 < f ? -.001 : f : .001 > f ? .001 : f, a.scale.b = this.U.b * e, a.scale.a = this.U.a * f, a.A &= -14, a.A |= 32, a.translate.b = -(e * b) + b + this.ab - this.Qb, a.translate.a = -(f * c) + c + this.Ua - this.Rb);
            a.A &= -2;
            a.A |= 32
        },
        uE: function(a) {
            var b = this.$c.Ya;
            b.Gw(a);
            b = b.dc.wf;
            if (b.Ri) a = b.hq.f[a];
            else {
                var c = b.iq,
                    d = c.da,
                    e = d.Uc[73856093 * a & d.Od];
                if (-1 == e) a = -2147483648;
                else if (d = d.f, d[e] == a) a = d[e +
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
                a = -2147483648 == a ? null : c.Gh[a]
            }
            c = this.U;
            e = a.U;
            c.b = e.b;
            c.a = e.a;
            if (a.hs) {
                this.j |= 512;
                d = a.Qg;
                c = a.Tr;
                if (null == this.oa) {
                    e = d.b;
                    d = d.a;
                    f = c.c;
                    var g = c.d;
                    null == g && (g = 0);
                    null == f && (f = 0);
                    null == d && (d = 0);
                    null == e && (e = 0);
                    var h = new w;
                    h.b = e;
                    h.a = d;
                    h.c = f;
                    h.d = g;
                    this.oa = h
                } else this.oa.b = d.b, this.oa.a = d.a, this.oa.c = c.c, this.oa.d = c.d;
                this.j = c.c == c.d ? this.j | 256 : this.j & -257
            } else this.j &= -513, this.j = this.U.b == this.U.a ? this.j | 256 : this.j & -257;
            1 != b.scale && (b = 1 / b.scale, c = this.U, c.b *= b, c.a *= b, a.hs && (this.oa.b *= b, this.oa.a *= b, this.oa.c *= b, this.oa.d *= b));
            this.j |= 1
        },
        l: B
    });
    var Pb = Ja.eF = {
        qc: !0,
        fc: ["i0", "i1", "i2"]
    };
    Pb.i0 = {
        m: 0,
        s: "eF",
        toString: n
    };
    Pb.i1 = {
        m: 1,
        s: "eF",
        toString: n
    };
    Pb.i2 = {
        m: 2,
        s: "eF",
        toString: n
    };
    Pb.zc = [Pb.i0, Pb.i1, Pb.i2];
    vf.g = "FF";
    vf.prototype = {
        add: function() {
            this.lv.node.Fn(Gb.cy);
            return this.lv
        },
        l: vf
    };
    aa.g = "100";
    aa.F = qa;
    aa.prototype = r(qa.prototype, {
        pc: function() {
            qa.prototype.pc.call(this);
            for (var a = this.node.ia, b; null != a;) {
                if (null != a.client) switch (a.client.type) {
                    case 2:
                    case 5:
                    case 14:
                        b =
                            a.client, b.pc()
                }
                a = a.H
            }
            return this
        },
        u: function() {
            null != this.node && (pa.mp(this), -1 != this.fr && (vb.current.jh(this.fr), this.fr = -1), qa.prototype.u.call(this), aa.og--)
        },
        appendChild: function(a) {
            this.node.appendChild(a.node);
            return this
        },
        er: function(a, b) {
            null == b && (b = -1);
            null == a && (a = 0);
            this.node.er(a, b);
            return this
        },
        Yj: function(a) {
            return this.node.Yj(a).client
        },
        de: function(a) {
            a = this.node.de(a);
            return null == a ? null : a.client
        },
        $k: function(a) {
            if (null == a) return null != this.Lb() && this.node.parent.Iw(this.node), this;
            this.node.Iw(a.node);
            return this
        },
        An: function(a) {
            if (null == a) return null != this.Lb() && this.node.parent.Fw(this.node), this;
            this.node.Fw(a.node);
            return this
        },
        update: function(a) {
            qa.prototype.update.call(this, a);
            var b = this.node;
            if (null != b && 0 != (this.j & 1024))
                for (var c = b.ia; null != c;) b = c.H, c = c.client, null != c && c.update(a), c = b
        },
        Sa: function(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = 0;
            null == e && (e = -1);
            null == d && (d = -1);
            null == c && (c = 1);
            null == b && (b = 1);
            var f = new w;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            if (0 == this.node.gf) return f;
            b = new W(32);
            c = new Ub(32);
            d = this.node;
            c.T == c.C && c.R();
            for (c.f[c.T++] = d; 0 < c.T;) {
                d = c.f[--c.T];
                if (256 == (d.j & 2304))
                    for (e = d, e = e.ia; null != e;) c.T == c.C && c.R(), c.f[c.T++] = e, e = e.H;
                if (null != d.client) switch (d.client.type) {
                    case 5:
                        d = d.client;
                        b.i == b.C && b.R();
                        b.f[b.i++] = d;
                        0 < (d.j & 512) && (d.j &= -513, d.j |= 1, d.j |= 2048);
                        break;
                    case 14:
                        d = d.client, b.i == b.C && b.R(), b.f[b.i++] = d
                }
            }
            pa.pf(this);
            null == a || pa.Yp(this, a) || pa.pf(a);
            f.b = 3E38;
            f.a = 3E38;
            f.c = -3E38;
            f.d = -3E38;
            c = b.f;
            d = 0;
            for (e = b.i; d < e;) {
                var g = d++;
                g = c[g];
                g.j |= 24576;
                g = g.Sa(a);
                g.b < f.b && (f.b = g.b);
                g.a < f.a &&
                    (f.a = g.a);
                g.c > f.c && (f.c = g.c);
                g.d > f.d && (f.d = g.d)
            }
            a = b.f;
            c = 0;
            for (b = b.i; c < b;) d = c++, d = a[d], 0 < (d.j & 2048) && (z.ba(d, B).j |= 513, d.j &= -2049);
            return f
        },
        Ga: function() {
            var a = this.Sa(this.Lb());
            return a.c - a.b
        },
        Aa: function() {
            var a = this.Sa(this.Lb());
            return a.d - a.a
        },
        lf: function(a) {
            return a
        },
        mf: function(a) {
            return a
        },
        ka: function() {
            var a = this.Sa(this);
            this.tg = (a.c - a.b) / 2;
            this.ug = (a.d - a.a) / 2;
            this.j |= 1
        },
        Ha: function() {
            var a = this.Sa(this);
            this.zr((a.c - a.b) / 2);
            this.Rw((a.d - a.a) / 2);
            this.j |= 1
        },
        l: aa
    });
    uf.g = "101";
    uf.prototype = {
        u: function() {
            null != this.controller && this.controller.u();
            this.controller = null
        },
        play: function(a, b, c) {
            null == b && (b = 0);
            var d = this.controller;
            if (null == d || -1 == d.type) d = this.controller = new rc, d.fn = E(this, this.fn), this.B.node.Ma(d);
            d.hd = c;
            d.play(a, b)
        },
        fn: function(a) {
            this.B.lf(a.nr);
            this.B.mf(a.or);
            this.B.Me(a.rotation);
            this.B.N(a.cs);
            this.B.O(a.ds);
            this.B.na(a.alpha)
        },
        l: uf
    };
    ie.g = "102";
    ie.F = Mc;
    ie.prototype = r(Mc.prototype, {
        l: ie
    });
    R.g = "103";
    R.Ob = function(a, b, c) {
        function d(b) {
            e.push(a + (10 > b ? "000" : 100 > b ? "00" :
                "0") + b)
        }
        var e = [],
            f = b;
        if (b > c)
            for (; f >= c;) d(f--);
        else
            for (; f <= c;) d(f++);
        return e
    };
    R.$b = function(a, b, c) {
        for (var d = [], e = 0, f = b.length; e < f;) {
            var g = e++;
            d.push(new sc(b[g], c))
        }
        return new gb(a, d)
    };
    R.prototype = {
        u: function() {
            null != this.controller && (this.controller.u(), this.controller = null);
            this.B = this.Gq = null
        },
        play: function(a, b, c, d) {
            null == b && (b = !0);
            null != c && this.Lw(c);
            return this.nD(a, 0, -1, b, d)
        },
        nD: function(a, b, c, d, e) {
            null == d && (d = !0);
            this.Nd = !0;
            var f = this.rp(); - 2 == this.repeat ? (f.repeat = Ha.i2, f.Vk = -1) : -1 == this.repeat ?
                (f.repeat = Ha.i1, f.Vk = -1) : (f.repeat = Ha.i0, f.Vk = this.repeat);
            f.play(a, b, c, d ? 0 : this.uk);
            this.length = f.Ie - f.wd;
            this.Gq = e;
            return this
        },
        Lw: function(a) {
            this.repeat = a;
            return this
        },
        ow: function() {
            this.rp().vb = da.hc(0, this.length);
            return this
        },
        stop: function() {
            this.rp().stop();
            this.length = -1;
            this.Nd = !1;
            return this
        },
        rp: function() {
            if (null == this.controller || 0 > this.controller.type) {
                var a = this.B.node,
                    b = a.IA(8);
                null == b && (b = new ie, a.Ma(b));
                b.en = E(this, this.en);
                b.dn = E(this, this.dn);
                this.controller = b
            }
            return this.controller
        },
        en: function(a, b, c) {
            this.uk = c;
            this.B.bb(a)
        },
        dn: function() {
            null != this.Gq && this.Gq();
            null != this.controller && this.controller.repeat != Ha.i1 && (this.Nd = !1, this.length = -1)
        },
        l: R
    };
    Xa.g = "104";
    Xa.F = qa;
    Xa.prototype = r(qa.prototype, {
        u: function() {
            if (null != this.node) {
                for (var a = z.ba(this.node, nb).ia; null != a;) {
                    var b = a.H;
                    a.u();
                    a = b
                }
                qa.prototype.u.call(this);
                this.Jc = this.fa = this.hg = this.dc = null;
                Xa.og--
            }
        },
        Ka: function(a) {
            this.dc = wa.get(a);
            this.hg = this.dc.wf.Tg;
            this.Vn = !0
        },
        qa: function(a) {
            this.sb = this.sb || this.fa.text != a;
            this.fa.text = a;
            return this
        },
        HH: function() {
            return this.fa.size
        },
        fl: function(a) {
            this.sb = this.sb || this.fa.size != a;
            this.fa.size = a;
            return this
        },
        el: function(a, b) {
            this.sb = (this.sb = this.sb || this.fa.width != a) || this.fa.height != b;
            this.fa.width = a;
            this.fa.height = b;
            return this
        },
        al: function(a) {
            this.sb = this.sb || this.fa.align != a;
            this.fa.align = a;
            return this
        },
        BE: function(a) {
            this.sb = this.sb || this.fa.Ho != a;
            this.fa.Ho = a;
            return this
        },
        vr: function() {
            this.sb = this.sb || this.fa.multiline;
            this.fa.multiline = !1;
            this.sb && (this.Og =
                new od);
            return this
        },
        In: function() {
            this.sb = this.sb || 0 == this.fa.multiline;
            this.fa.multiline = !0;
            this.sb && (this.Og = new oc);
            return this
        },
        kE: function(a) {
            null != Xa.hv && Xa.hv.G.hasOwnProperty(a) && (this.sb = this.sb || this.fa.Fm != a, this.fa.Fm = a);
            return this
        },
        Ij: function(a, b) {
            this.fa.size = b - a >> 1;
            this.Og.jb(this.hg, this.fa, this.Jc);
            var c = this.fa.size;
            if (this.Jc.overflow) {
                if (c < a) return;
                c = this.Do(a, c - 1)
            } else {
                if (c > b) return;
                c = this.Do(c, b + 1)
            }
            this.fa.size = c < a ? a : c > b ? b : c;
            this.sb = !0;
            this.Og.jb(this.hg, this.fa, this.Jc)
        },
        Yf: function(a) {
            null == a && (a = 4);
            this.Og.jb(this.hg, this.fa, this.Jc);
            if (this.Jc.overflow) {
                var b = this.fa.size;
                b < a || (this.fa.size = this.Do(a, b - 1), this.sb = !0, this.Og.jb(this.hg, this.fa, this.Jc))
            }
        },
        Sa: function(a) {
            this.pc();
            var b = this.Jc.la,
                c = b.b,
                d = b.a,
                e = b.c,
                f = b.d;
            null == f && (f = -1);
            null == e && (e = -1);
            null == d && (d = 1);
            null == c && (c = 1);
            b = new w;
            b.b = c;
            b.a = d;
            b.c = e;
            b.d = f;
            if (b.b > b.c || b.a > b.d) return b.b = 0, b.a = 0, b.c = 0, b.d = 0, b;
            if (a == this) return b;
            0 == (this.j & 16384) && (pa.pf(this), null != a && 0 == pa.Yp(this, a) && pa.pf(a));
            a = null == a ?
                this.node.sh() : a.node;
            return za.HF(this.node, a, b)
        },
        eb: function(a, b, c) {
            this.pc();
            if (!this.Jc.overflow) {
                var d = this.Jc.la;
                d.b > d.c || d.a > d.d || qa.prototype.eb.call(this, a, b, c)
            }
        },
        update: function(a) {
            qa.prototype.update.call(this, a);
            if (this.Mp) {
                for (var b = 0, c = z.ba(this.node, nb), d = c.ia, e; null != d;) {
                    if (0 < (d.j & 1))
                        if (e = d, e.qm += a, 10 < e.qm) {
                            e = d.H;
                            c.removeChild(d);
                            d.u();
                            d = e;
                            continue
                        } else ++b;
                    d = d.H
                }
                this.Mp = 0 < b
            }
        },
        pc: function() {
            qa.prototype.pc.call(this);
            if (null == this.dc || null == this.fa.text || !this.sb && !this.Vn) return this;
            this.sb = !1;
            var a = z.ba(this.node, nb);
            if (this.Vn) {
                this.Vn = !1;
                for (var b = a.ia, c; null != b;) c = b.H, a.removeChild(b), b.u(), b = c
            }
            this.Og.jb(this.hg, this.fa, this.Jc);
            c = this.Jc.pd;
            var d = this.Jc.ye;
            b = a.ia;
            for (var e = 0, f, g, h, l, k, m, p, q = 0, n = c.i; q < n;) k = q++, g = c.f[k], f = k << 2, h = d.f[f], l = d.f[f + 1], k = d.f[f + 2], m = d.f[f + 3], p = String.fromCodePoint(g), null != b ? (f = b, f.name = p, f.yr(Ob.i0), a.$D(f, e++), b = b.H) : (f = new he(p), p = (new Pc).Ka(this.dc, this.dc.wf), f.Ya = p, a.Us(f, e++)), p = f.local, p.translate.b = h, p.translate.a = l, p.A &= -2, p.A |= 32, h =
                f.local, h.scale.b = k, h.scale.a = m, h.A &= -14, h.A |= 32, p = f.Ya, p.Gw(g);
            a.j |= 8;
            for (c = 0; null != b;) 100 > c++ ? (this.Mp = !0, f = b, f.qm = 0, b.yr(Ob.i1), b = b.H) : (d = b.H, a.removeChild(b), b.u(), b = d);
            return this
        },
        ka: function() {
            var a = this.Sa(this);
            a.b > a.c || a.a > a.d ? this.Ar(this.Sw(0)) : (this.Ar(a.b + .5 * (a.c - a.b)), this.Sw(a.a + .5 * (a.d - a.a)))
        },
        Ga: function() {
            var a = this.Sa(this.Lb());
            return a.c - a.b
        },
        Aa: function() {
            var a = this.Sa(this.Lb());
            return a.d - a.a
        },
        lf: function() {
            throw 0;
        },
        mf: function() {
            throw 0;
        },
        Do: function(a, b) {
            for (var c = a, d = -1, e = c + (b - c >> 1); this.fa.size = e, this.Og.jb(this.hg, this.fa, this.Jc), this.Jc.overflow ? b = e : c = d = e, e = c + (b - c >> 1), e != c;);
            return 0 > d ? a : d
        },
        l: Xa
    });
    he.g = "105";
    he.F = Qb;
    he.prototype = r(Qb.prototype, {
        l: he
    });
    pd.g = "106";
    pd.Zb = !0;
    pd.prototype = {
        l: pd
    };
    tf.g = "107";
    tf.prototype = {
        l: tf
    };
    sf.g = "108";
    sf.prototype = {
        l: sf
    };
    od.g = "109";
    od.ga = [pd];
    od.prototype = {
        jb: function(a, b, c) {
            c.overflow = !1;
            var d = c.la;
            d.b = d.a = 1;
            d.c = d.d = -1;
            var e = b.text,
                f = e.length;
            if (0 != f) {
                var g = c.pd;
                g.Yc(f);
                g.i = 0;
                var h = c.ye;
                h.Yc(f);
                h.i = 0;
                var l = a.Ko,
                    k, m = this.pd;
                m.i = 0;
                m.Yc(f);
                for (k = 0; k < f;) {
                    var p = k++;
                    p = F.li(e, p);
                    m.f[m.i++] = p
                }
                if (-1 < b.Fm && (e = Xa.hv.G[b.Fm], null != e)) {
                    f = 0;
                    k = m.i - 1;
                    for (var q; f < k;) {
                        p = m.f[f];
                        q = m.f[f + 1];
                        var n = q << 16 | p,
                            t = e.Uc[73856093 * n & e.Od];
                        if (-1 == t) n = !1;
                        else {
                            var r = e.f;
                            if (r[t] == n) n = !0;
                            else {
                                var u = !1;
                                for (t = r[t + 2]; - 1 != t;) {
                                    if (r[t] == n) {
                                        u = !0;
                                        break
                                    }
                                    t = r[t + 2]
                                }
                                n = u
                            }
                        }
                        if (n) {
                            p |= q << 16;
                            q = e.Uc[73856093 * p & e.Od];
                            if (-1 == q) p = -2147483648;
                            else if (n = e.f, n[q] == p) p = n[q + 1];
                            else {
                                t = -2147483648;
                                for (q = n[q + 2]; - 1 != q;) {
                                    if (n[q] == p) {
                                        t = n[q + 1];
                                        break
                                    }
                                    q = n[q + 2]
                                }
                                p = t
                            }
                            m.f[f] = p;
                            m.tw(f + 1);
                            --k
                        }++f
                    }
                }
                this.Nc.i =
                    0;
                this.Nc.Yc(m.i);
                e = 0;
                for (f = m.i; e < f;) {
                    k = e++;
                    k = m.f[k];
                    q = l.da;
                    p = q.Uc[73856093 * k & q.Od];
                    if (-1 == p) p = !1;
                    else if (q = q.f, q[p] == k) p = !0;
                    else {
                        n = !1;
                        for (p = q[p + 2]; - 1 != p;) {
                            if (q[p] == k) {
                                n = !0;
                                break
                            }
                            p = q[p + 2]
                        }
                        p = n
                    }
                    if (p) {
                        p = this.Nc;
                        n = l.da;
                        q = n.Uc[73856093 * k & n.Od];
                        if (-1 == q) k = -2147483648;
                        else if (n = n.f, n[q] == k) k = n[q + 1];
                        else {
                            t = -2147483648;
                            for (q = n[q + 2]; - 1 != q;) {
                                if (n[q] == k) {
                                    t = n[q + 1];
                                    break
                                }
                                q = n[q + 2]
                            }
                            k = t
                        }
                        k = -2147483648 == k ? null : l.Gh[k];
                        p.f[p.i++] = k
                    }
                }
                if (!this.Nc.Db())
                    if (m = b.width, e = b.Oi, l = b.align, f = a.Oi, k = b.size / a.xn, p = b.sx * k, 1 > b.height /
                        (a.lineHeight * k)) c.overflow = !0;
                    else {
                        u = this.Nc.f[0];
                        q = -(u.offsetX * k);
                        a = a.padding;
                        n = a[0] * k;
                        t = a[1] * k;
                        r = a[2] * k;
                        var P = a[3] * k,
                            v = 0;
                        a = this.Nc.i;
                        for (var w = 0, x, z = 0; v < a;) {
                            u = this.Nc.f[v++];
                            var A = q + u.offsetX * k;
                            var B = u.offsetY * k;
                            var C = u.wl * k;
                            var E = u.G * k;
                            x = A + C - t;
                            if (e) {
                                w |= u.code << 16;
                                z = f.Uc[73856093 * w & f.Od];
                                if (-1 == z) z = -2147483648;
                                else {
                                    var D = f.f;
                                    if (D[z] == w) z = D[z + 1];
                                    else {
                                        var G = -2147483648;
                                        for (z = D[z + 2]; - 1 != z;) {
                                            if (D[z] == w) {
                                                G = D[z + 1];
                                                break
                                            }
                                            z = D[z + 2]
                                        }
                                        z = G
                                    }
                                } - 2147483648 == z && (z = 0);
                                z *= k;
                                w = u.code;
                                x += z
                            }
                            if (x > m) {
                                c.overflow = !0;
                                return
                            }
                            A +=
                                z;
                            g.f[g.i++] = u.code;
                            h.f[h.i++] = A;
                            h.f[h.i++] = B;
                            h.f[h.i++] = C;
                            h.f[h.i++] = E;
                            32 < u.code && (x = B + n, D = A + P, D < d.b ? d.b = D : D > d.c && (d.c = D), x < d.a ? d.a = x : x > d.d && (d.d = x), B = B + E - r, A = A + C - t, A < d.b ? d.b = A : A > d.c && (d.c = A), A = B, A < d.a ? d.a = A : A > d.d && (d.d = A));
                            u = u.so;
                            0 < b.Hl && (u = b.Hl);
                            q += u * k + z + p
                        }
                        if (-1 != l) {
                            c = m - d.c;
                            0 == l && (c /= 2);
                            for (l = 0; l < a;) g = l++ << 2, h.f[g] += c;
                            c = d.b + c;
                            g = d.c - d.b;
                            d.b = c;
                            d.c = c + g
                        }
                        if (b.Ho)
                            for (b = 0; b < a;) d = b++ << 2, h.f[d + 1] /= 2
                    }
            }
        },
        l: od
    };
    oc.g = "10A";
    oc.ga = [pd];
    oc.prototype = {
        jb: function(a, b, c) {
            this.charset = a;
            this.fa = b;
            this.W = c;
            c.overflow = !1;
            var d = c.la;
            d.b = d.a = 1;
            d.c = d.d = -1;
            d = b.text;
            var e = d.length;
            if (0 != e) {
                c.pd.Yc(e);
                c.pd.i = 0;
                c.ye.Yc(4 * e);
                c.ye.i = 0;
                var f = !1,
                    g = a.Ko;
                this.Nc.i = 0;
                this.Nc.Yc(e);
                for (var h = 0; h < e;) {
                    var l = h++;
                    l = F.li(d, l);
                    if (10 == l) l = this.Nc, l.f[l.i++] = null;
                    else {
                        var k = g.da,
                            m = k.Uc[73856093 * l & k.Od];
                        if (-1 == m) m = !1;
                        else if (k = k.f, k[m] == l) m = !0;
                        else {
                            var p = !1;
                            for (m = k[m + 2]; - 1 != m;) {
                                if (k[m] == l) {
                                    p = !0;
                                    break
                                }
                                m = k[m + 2]
                            }
                            m = p
                        }
                        if (m) {
                            m = this.Nc;
                            p = g.da;
                            k = p.Uc[73856093 * l & p.Od];
                            if (-1 == k) l = -2147483648;
                            else if (p = p.f, p[k] == l) l = p[k + 1];
                            else {
                                var q = -2147483648;
                                for (k = p[k + 2]; - 1 != k;) {
                                    if (p[k] == l) {
                                        q = p[k + 1];
                                        break
                                    }
                                    k = p[k + 2]
                                }
                                l = q
                            }
                            l = -2147483648 == l ? null : g.Gh[l];
                            m.f[m.i++] = l
                        } else f = !0
                    }
                }
                if (f)
                    for (d = "", e = this.Nc.iterator(); e.aa();) f = e.next(), null != f && (d += String.fromCodePoint(f.code));
                e = b.size / a.xn;
                g = a.lineHeight * e;
                h = b.iC * e;
                a = g + h;
                f = b.height / g | 0;
                if (0 == f) c.overflow = !0;
                else if (f * g + (f - 1) * h > b.height) c.overflow = !0;
                else {
                    this.wz(d);
                    var n = 0;
                    l = 0;
                    m = 1;
                    p = k = 0;
                    var t = !0,
                        u = !1;
                    q = this.tF;
                    d = this.vF;
                    var r = this.nt;
                    g = 0;
                    h = r.size;
                    d.b = d.a = 1;
                    for (d.c = d.d = -1; g < h && !u;) {
                        var P = r.data[g];
                        var v = k;
                        k = P.position;
                        t && (t = !1, n = -this.Nc.f[v].offsetX * e);
                        var w = c.pd.i;
                        var x = this.write(n, l, v, k, q);
                        if (u = Infinity == x) {
                            c.pd.trim(w);
                            for (c.ye.trim(4 * w); k > v && 32 >= this.Nc.f[k - 1].code;) --k;
                            w = c.pd.i;
                            this.write(n, l, v, k, q);
                            if (u = Infinity == x) {
                                c.pd.trim(w);
                                c.ye.trim(4 * w);
                                k = v;
                                n = c.pd.i - 1;
                                this.to(b.align, p, n, d);
                                p = n;
                                n = c.la;
                                d.b < n.b && (n.b = d.b);
                                d.c > n.c && (n.c = d.c);
                                d.a < n.a && (n.a = d.a);
                                d.d > n.d && (n.d = d.d);
                                d.b = d.a = 1;
                                d.c = d.d = -1;
                                n = 0;
                                l += a;
                                ++m;
                                t = !0;
                                u = m > f;
                                continue
                            }
                        }
                        q.b < d.b && (d.b = q.b);
                        q.c > d.c && (d.c = q.c);
                        q.a < d.a && (d.a = q.a);
                        q.d > d.d && (d.d = q.d);
                        ++g;
                        P.required ?
                            (n = c.pd.i - 1, this.to(b.align, p, n, d), p = n, n = c.la, d.b < n.b && (n.b = d.b), d.c > n.c && (n.c = d.c), d.a < n.a && (n.a = d.a), d.d > n.d && (n.d = d.d), d.b = d.a = 1, d.c = d.d = -1, n = 0, l += a, ++m, t = !0, u = m > f) : n = x
                    }
                    n = c.pd.i - 1;
                    d.b > d.c || d.a > d.d || this.to(b.align, p, n, d);
                    b = c.la;
                    d.b < b.b && (b.b = d.b);
                    d.c > b.c && (b.c = d.c);
                    d.a < b.a && (b.a = d.a);
                    d.d > b.d && (b.d = d.d);
                    c.overflow = g < h
                }
            }
        },
        wz: function(a) {
            var b = oc.ot,
                c = this.nt;
            b.qa(a);
            for (var d = c.size = 0, e;;) {
                e = b.GC();
                if (null == e) break;
                c.add(a.substring(d, e.position), e.position, e.required);
                d = e.position
            }
        },
        write: function(a,
            b, c, d, e) {
            var f = this.fa.size / this.charset.xn,
                g = this.Nc,
                h = this.charset.padding,
                k = h[0] * f,
                m = h[1] * f,
                n = h[2] * f;
            h = h[3] * f;
            e.b = e.a = 1;
            e.c = e.d = -1;
            for (var p, q = 0, t = this.fa.width, u = 0, r = this.charset.Oi, v = this.fa.Oi, P = this.fa.sx; c < d;) {
                var w = g.f[c++];
                if (null != w) {
                    var x = a + w.offsetX * f;
                    var z = b + w.offsetY * f;
                    var A = w.wl * f;
                    var B = w.G * f;
                    p = x + A - m;
                    if (v) {
                        q = w.code << 16 | u;
                        u = r.Uc[73856093 * q & r.Od];
                        if (-1 == u) q = -2147483648;
                        else {
                            var C = r.f;
                            if (C[u] == q) q = C[u + 1];
                            else {
                                var D = -2147483648;
                                for (u = C[u + 2]; - 1 != u;) {
                                    if (C[u] == q) {
                                        D = C[u + 1];
                                        break
                                    }
                                    u = C[u + 2]
                                }
                                q =
                                    D
                            }
                        } - 2147483648 == q && (q = 0);
                        q *= f;
                        u = w.code;
                        p += q
                    }
                    if (p > t) {
                        a = Infinity;
                        break
                    }
                    x += q;
                    p = this.W.pd;
                    p.f[p.i++] = w.code;
                    p = this.W.ye;
                    p.f[p.i++] = x;
                    p = this.W.ye;
                    p.f[p.i++] = z;
                    p = this.W.ye;
                    p.f[p.i++] = A;
                    p = this.W.ye;
                    p.f[p.i++] = B;
                    32 < w.code && (p = z + k, C = x + h, C < e.b ? e.b = C : C > e.c && (e.c = C), p < e.a ? e.a = p : p > e.d && (e.d = p), z = z + B - n, x = x + A - m, x < e.b ? e.b = x : x > e.c && (e.c = x), x = z, x < e.a ? e.a = x : x > e.d && (e.d = x));
                    w = w.so;
                    0 < this.fa.Hl && (w = this.fa.Hl);
                    a += w * f + q + P
                }
            }
            return a
        },
        to: function(a, b, c, d) {
            if (-1 != a) {
                var e = this.fa.width - d.c;
                0 == a && (e /= 2);
                e |= 0;
                a = d.b + e;
                var f =
                    d.c - d.b;
                d.b = a;
                d.c = a + f;
                for (a = this.W.ye; b <= c;) d = b << 2, a.f[d] += e, ++b
            }
        },
        l: oc
    };
    rf.g = "10B";
    rf.prototype = {
        add: function(a, b, c) {
            var d = this.data[this.size];
            null == d && (d = this.data[this.size] = {
                La: null,
                position: -1,
                required: !1
            });
            d.La = a;
            d.position = b;
            d.required = c;
            this.size++
        },
        l: rf
    };
    pa.g = "10C";
    pa.update = function(a, b) {
        var c = pa.Kr;
        c.clear();
        c.T == c.C && c.R();
        for (c.f[c.T++] = a; 0 < c.T;)
            if (a = c.f[--c.T], null == a.client) {
                if (0 == (a.j & 1024))
                    for (a = a.ia; null != a;) c.T == c.C && c.R(), c.f[c.T++] = a, a = a.H
            } else switch (a.client.type) {
                case 2:
                    var d =
                        a.client;
                    var e = d.j & 1024;
                    d.j &= -1025;
                    d.update(b);
                    d.j |= e;
                    if (0 < (d.j & 1024))
                        for (a = a.ia; null != a;) c.T == c.C && c.R(), c.f[c.T++] = a, a = a.H;
                    break;
                case 5:
                case 14:
                    d = a.client, d.update(b)
            }
    };
    pa.pc = function(a) {
        var b = pa.Kr,
            c = null,
            d = null;
        b.clear();
        b.T == b.C && b.R();
        for (b.f[b.T++] = a; 0 < b.T;) {
            a = b.f[--b.T];
            0 < (a.j & 256) && (c = a, d = c.ia);
            var e = a.client;
            if (null != e) switch (e.type) {
                case 2:
                    c.ia = null;
                    e.pc();
                    c.ia = d;
                    break;
                case 5:
                case 14:
                    e.pc()
            }
            if (0 < (a.j & 256))
                for (; null != d;) b.T == b.C && b.R(), b.f[b.T++] = d, d = d.H
        }
    };
    pa.mp = function(a, b) {
        null == b && (b = !1);
        if (2 == a.type)
            for (var c = z.ba(a, aa).node.ia, d; null != c;) d = c.H, pa.mp(c.client, !0), c = d;
        b && a.u()
    };
    pa.Yp = function(a, b) {
        for (a = a.Lb(); null != a;) {
            if (a == b) return !0;
            a = a.Lb()
        }
        return !1
    };
    pa.pf = function(a) {
        var b = a.node,
            c = pa.Kr,
            d = a.node;
        for (c.clear(); null != d;) {
            0 < (d.j & 8) && (b = d);
            if (null != d.client) {
                var e = d.client;
                0 < (e.j & 1) && (e.pc(), b = d)
            }
            c.T == c.C && c.R();
            c.f[c.T++] = d;
            d = d.parent
        }
        a.pc();
        b.cg(!0, !1)
    };
    qf.g = "10D";
    qf.prototype = {
        u: function() {
            this.XE();
            this.Ci = this.B = null
        },
        Lc: function(a, b, c, d, e) {
            this.tl(4, a, b, c, d, e);
            return this
        },
        rotation: function(a, b, c, d, e) {
            this.tl(5, a, b, c, d, e);
            return this
        },
        alpha: function(a, b, c, d, e) {
            this.tl(6, a, b, c, d, e);
            return this
        },
        stop: function(a) {
            if (0 != (this.Sh & a))
                for (var b = this.B.node.controllers; null != b;) {
                    var c = b.next;
                    if (10 == b.type && b.key == a) {
                        b.stop();
                        break
                    }
                    b = c
                }
        },
        XE: function() {
            for (var a = this.B.node.controllers; null != a;) {
                var b = a.next;
                10 == a.type && a.stop();
                a = b
            }
            this.Sh = 0
        },
        tl: function(a, b, c, d, e, f) {
            switch (a) {
                case 0:
                    var g = this.B.ab;
                    break;
                case 1:
                    g = this.B.Ua;
                    break;
                case 2:
                    g = this.B.kb;
                    break;
                case 3:
                    g = this.B.Gc;
                    break;
                case 4:
                    g = this.B.kb;
                    break;
                case 5:
                    g = this.B.ie;
                    break;
                case 6:
                    g = this.B.Fe
            }
            var h = this.rB(a, c);
            h.tl(a, g, b, c, null == d ? L.Gm() : d);
            h.repeat = null == e ? Ha.i0 : e;
            null == this.Ci && (this.Ci = []);
            this.Ci[a] = f;
            this.Sh |= 1 << a;
            return h
        },
        rB: function(a) {
            var b = this.B.node.controllers;
            if (null != b)
                if (0 < (this.Sh & 1 << a))
                    for (; null != b;) {
                        if (10 == b.type) {
                            var c = b;
                            if (c.key == a) return c.Mf = E(this, this.Mf), c.jf = E(this, this.jf), c
                        }
                        b = b.next
                    } else
                        for (; null != b;) {
                            if (10 == b.type && !b.bf) return c = b, c.Mf = E(this, this.Mf), c.jf = E(this, this.jf), c;
                            b = b.next
                        }
                c =
            new me;
            c.Mf = E(this, this.Mf);
            c.jf = E(this, this.jf);
            this.B.node.Ma(c);
            return c
        },
        jf: function(a, b) {
            var c = this.B;
            switch (a) {
                case 0:
                    c.N(b);
                    break;
                case 1:
                    c.O(b);
                    break;
                case 2:
                    c.lf(b);
                    break;
                case 3:
                    c.mf(b);
                    break;
                case 4:
                    c.M(b);
                    break;
                case 5:
                    c.Me(b);
                    break;
                case 6:
                    c.na(b)
            }
        },
        Mf: function(a) {
            this.Sh &= ~(1 << a);
            if (null != this.Ci[a]) {
                var b = this.Ci[a];
                this.Ci[a] = null;
                b()
            }
        },
        l: qf
    };
    var be = {
        g: "10E",
        px: function(a) {
            return a
        },
        Fz: function(a, b) {
            var c = window.document.createElement("img");
            c.src = a.toDataURL("image/png");
            c.onload = function() {
                c.onload =
                    null;
                be.MB(c, b)
            }
        },
        MB: function(a, b) {
            if (null == window.$z) b(a);
            else try {
                window.$z(a).then(function(a) {
                    b(a)
                }, function() {
                    b(a)
                })
            } catch (c) {
                b(a)
            }
        },
        YC: function(a, b, c, d) {
            var e = window.document.createElement("canvas");
            e.width = b;
            e.height = c;
            e.getContext("2d", null).drawImage(a, 0, 0);
            be.Fz(e, d)
        },
        Yd: function(a) {
            a instanceof ImageBitmap ? a.close() : a instanceof HTMLImageElement && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
        }
    };
    pf.g = "10F";
    pf.prototype = {
        fE: function(a, b) {
            var c = this;
            this.ib = a;
            var d = a.width | 0;
            a = a.height | 0;
            var e = this.U;
            e.b = d;
            e.a = a;
            this.zm = 0 != d && 0 == (d & d - 1) && 0 != a && 0 == (a & a - 1);
            this.Ni = !0;
            !b || this.zm || this.Mi || (--d, d |= d >> 1, d |= d >> 2, d |= d >> 4, d |= d >> 8, d |= d >> 16, ++d, --a, a |= a >> 1, a |= a >> 2, a |= a >> 4, a |= a >> 8, a |= a >> 16, ++a, b = new x, b.b = d, b.a = a, this.Ag = b, this.Mi = !0, this.Ni = !1, be.YC(this.ib, d, a, function(a) {
                c.ib = a;
                return c.Ni = !0
            }))
        },
        TD: function(a) {
            this.wf = new of(this, a);
            return this
        },
        u: function() {
            if (!this.YB && this.Mi && !this.ZB) try {
                be.Yd(this.ib)
            } catch (a) {}
            this.wf = this.Ag = this.U = this.ib =
                null
        },
        l: pf
    };
    wa.g = "110";
    wa.get = function(a) {
        return wa.Wn.G[a]
    };
    wa.wa = function(a) {
        return wa.Wn.G.hasOwnProperty(a)
    };
    wa.DD = function(a, b) {
        wa.Wn.G[a] = b;
        b.id = a;
        wa.kx++
    };
    wa.NF = function(a) {
        var b = wa.get(a);
        null != b && (wa.Wn.remove(a), b.u(), wa.kx--)
    };
    of.g = "111";
    of.prototype = {
        l: of
    };
    ge.g = "112";
    ge.prototype = {
        l: ge
    };
    fe.g = "113";
    fe.prototype = {
        l: fe
    };
    ee.g = "114";
    ee.prototype = {
        l: ee
    };
    nd.g = "115";
    nd.Zb = !0;
    nd.prototype = {
        l: nd
    };
    de.g = "116";
    de.ga = [nd];
    de.prototype = {
        hu: function() {
            var a = new fe,
                b = new lf(this.tC),
                c = new mf;
            c.xn = b.info.size;
            c.lineHeight = b.jg.lineHeight;
            c.gg = b.jg.gg;
            c.XH = b.jg.mr;
            c.WH = b.jg.lr;
            c.padding[0] = b.info.padding.ls;
            c.padding[1] = b.info.padding.right;
            c.padding[2] = b.info.padding.Zd;
            c.padding[3] = b.info.padding.left;
            a.Tg = c;
            for (var d = 0, e = b.Il; d < e.length;) {
                var f = e[d];
                ++d;
                var g = f.id,
                    h = new nf;
                h.code = g;
                h.x = f.x;
                h.y = f.y;
                h.offsetX = f.As;
                h.offsetY = f.Bs;
                h.so = f.ys;
                h.wl = f.width;
                h.G = f.height;
                c.Ko.set(h.code, h); - 1 != g && (f = new ee, a.frames.push(f), f.id = g, f.name = String.fromCodePoint(g), f.Xa.b = h.x, f.Xa.a = h.y, f.Xa.c = h.wl, f.Xa.d = h.G, f.U.b =
                    h.wl, f.U.a = h.G)
            }
            d = 0;
            for (b = b.Am; d < b.length;) {
                g = b[d];
                ++d;
                e = c.Oi;
                var k = g.qr << 16 | g.first,
                    m = g.uo;
                e.i == e.C && e.R();
                g = e.f;
                f = e.Uc;
                h = 3 * e.vc;
                e.vc = e.ob[e.vc];
                g[h] = k;
                g[h + 1] = m;
                m = 73856093 * k & e.Od;
                k = f[m];
                if (-1 == k) f[m] = h;
                else {
                    for (f = g[k + 2]; - 1 != f;) k = f, f = g[f + 2];
                    g[k + 2] = h
                }
                e.i++
            }
            return a
        },
        l: de
    };
    nf.g = "117";
    nf.prototype = {
        l: nf
    };
    mf.g = "118";
    mf.prototype = {
        l: mf
    };
    lf.g = "119";
    lf.prototype = {
        $C: function(a) {
            a = new Wa(a);
            var b = a.L(),
                c = a.L(),
                d = a.L();
            if (66 != b || 77 != c || 70 != d) throw 0;
            if (3 != a.L()) throw 0;
            a.L();
            b = a.nc();
            c = a.Ca();
            a.L();
            a.L();
            a.oe();
            a.L();
            d = a.L();
            var e = a.L(),
                f = a.L(),
                g = a.L();
            a.L();
            a.L();
            a.L();
            a.Tk(b - 14);
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    ls: d,
                    right: e,
                    Zd: f,
                    left: g
                }
            };
            a.L();
            a.nc();
            b = a.oe();
            c = a.oe();
            d = a.oe();
            e = a.oe();
            a.oe();
            a.L();
            a.L();
            a.L();
            a.L();
            a.L();
            this.jg = {
                lineHeight: b,
                gg: c,
                mr: d,
                lr: e
            };
            a.L();
            b = a.nc();
            c = a.J;
            a.pw(0);
            c = a.J - c;
            for (b -= c; 0 < b;) a.pw(0), b -= c;
            a.L();
            b = 0;
            for (c = a.nc() / 20 | 0; b < c;) {
                b++;
                d = a.nc();
                e = a.oe();
                f = a.oe();
                g = a.oe();
                var h = a.oe(),
                    k = a.Ca(),
                    m = a.Ca(),
                    n = a.Ca();
                a.L();
                a.L();
                this.Il.push({
                    id: d,
                    x: e,
                    y: f,
                    width: g,
                    height: h,
                    As: k,
                    Bs: m,
                    ys: n
                })
            }
            if (a.J != a.$h)
                for (a.L(), a.nc(); a.J < a.$h;) b = a.nc(), c = a.nc(), d = a.Ca(), this.Am.push({
                    first: b,
                    qr: c,
                    uo: d
                })
        },
        bD: function(a) {
            a = A.parse(a).LA();
            if (a.nodeType != A.Document && a.nodeType != A.Element) throw 0;
            for (var b = [], c = mc(Ta.resolve(Ic.resolve(a, "info"), "padding").split(",")); c.aa();) {
                var d = c.next();
                b.push(G.parseInt(d))
            }
            b = na.ft(b);
            c = G.parseInt(Ta.resolve(Ic.resolve(a, "info"), "size"));
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    ls: b[0],
                    right: b[1],
                    Zd: b[2],
                    left: b[3]
                }
            };
            this.jg = {
                lineHeight: G.parseInt(Ta.resolve(Ic.resolve(a,
                    "common"), "lineHeight")),
                gg: G.parseInt(Ta.resolve(Ic.resolve(a, "common"), "base")),
                mr: G.parseInt(Ta.resolve(Ic.resolve(a, "common"), "scaleW")),
                lr: G.parseInt(Ta.resolve(Ic.resolve(a, "common"), "scaleH"))
            };
            b = 0;
            for (c = Ag.resolve(Ic.resolve(a, "chars"), "char"); b < c.length;) d = c[b], ++b, this.Il.push({
                id: G.parseInt(Ta.resolve(d, "id")),
                x: G.parseInt(Ta.resolve(d, "x")),
                y: G.parseInt(Ta.resolve(d, "y")),
                width: G.parseInt(Ta.resolve(d, "width")),
                height: G.parseInt(Ta.resolve(d, "height")),
                As: G.parseInt(Ta.resolve(d, "xoffset")),
                Bs: G.parseInt(Ta.resolve(d, "yoffset")),
                ys: G.parseInt(Ta.resolve(d, "xadvance"))
            });
            if (Eg.resolve(a, "kernings"))
                for (b = 0, a = Ag.resolve(Ic.resolve(a, "kernings"), "kerning"); b < a.length;) c = a[b], ++b, this.Am.push({
                    first: G.parseInt(Ta.resolve(c, "first")),
                    qr: G.parseInt(Ta.resolve(c, "second")),
                    uo: G.parseInt(Ta.resolve(c, "amount"))
                })
        },
        aD: function(a) {
            a = (new Y("\r\n", "g")).match(a) ? a.split("\r\n") : a.split("\n");
            var b = 0,
                c = new Y('^info face=".*?" size=(-?\\d+).*?padding="(\\d+,\\d+,\\d+,\\d+)"', "");
            c.match(a[b++]);
            for (var d = [], e = mc(c.Fb(2).split(",")); e.aa();) {
                var f = e.next();
                d.push(G.parseInt(f))
            }
            d = na.ft(d);
            c = G.parseInt(c.Fb(1));
            this.info = {
                size: 0 > c ? -c : c,
                padding: {
                    ls: d[0],
                    right: d[1],
                    Zd: d[2],
                    left: d[3]
                }
            };
            c = new Y("^common lineHeight=(\\d+) base=(\\d+) scaleW=(\\d+) scaleH=(\\d+)", "");
            c.match(a[b++]);
            this.jg = {
                lineHeight: G.parseInt(c.Fb(1)),
                gg: G.parseInt(c.Fb(2)),
                mr: G.parseInt(c.Fb(3)),
                lr: G.parseInt(c.Fb(4))
            };
            c = new Y("chars count=(\\d+)", "");
            d = new Y("^char id=(\\d+)\\s+x=(\\d+)\\s+y=(\\d+)\\s+width=(\\d+)\\s+height=(\\d+)\\s+xoffset=(-?\\d+)\\s+yoffset=(-?\\d+)\\s+xadvance=(\\d+)",
                "");
            e = new Y("kernings count=(\\d+)", "");
            f = new Y("kerning first=(\\d+)\\s+second=(\\d+)\\s+amount=(-?\\d+)", "");
            for (var g = 0, h = 0, k = 0, m = 0; b < a.length;) {
                var n = a[b++];
                0 == h ? c.match(n) && (h = G.parseInt(c.Fb(1))) : g < h ? (d.match(n), this.Il.push({
                    id: G.parseInt(d.Fb(1)),
                    x: G.parseInt(d.Fb(2)),
                    y: G.parseInt(d.Fb(3)),
                    width: G.parseInt(d.Fb(4)),
                    height: G.parseInt(d.Fb(5)),
                    As: G.parseInt(d.Fb(6)),
                    Bs: G.parseInt(d.Fb(7)),
                    ys: G.parseInt(d.Fb(8))
                }), ++g) : 0 == m ? e.match(n) && (m = G.parseInt(e.Fb(1))) : k < m && (f.match(n), this.Am.push({
                    first: G.parseInt(f.Fb(1)),
                    qr: G.parseInt(f.Fb(2)),
                    uo: G.parseInt(f.Fb(3))
                }), ++k)
            }
        },
        l: lf
    };
    Jc.g = "11A";
    Jc.ga = [nd];
    Jc.prototype = {
        hu: function() {
            var a = new fe,
                b = JSON.parse(this.json),
                c = fa.Ia(b, "meta");
            null != c && (a.scale = fa.Ia(c, "scale"));
            c = 0;
            b = fa.Ia(b, "frames");
            for (var d = 0; d < b.length;) {
                var e = b[d];
                ++d;
                var f = new ee;
                a.frames.push(f);
                f.id = c++;
                f.name = fa.Ia(e, "filename");
                var g = fa.Ia(e, "frame");
                f.Xa.b = fa.Ia(g, "x");
                f.Xa.a = fa.Ia(g, "y");
                f.Xa.c = fa.Ia(g, "w");
                f.Xa.d = fa.Ia(g, "h");
                Object.prototype.hasOwnProperty.call(e, "trimmed") ? f.gs = fa.Ia(e, "trimmed") :
                    f.gs = !1;
                Object.prototype.hasOwnProperty.call(e, "sourceSize") ? (g = fa.Ia(e, "sourceSize"), f.U.b = fa.Ia(g, "w"), f.U.a = fa.Ia(g, "h")) : (f.U.b = f.Xa.c, f.U.a = f.Xa.d);
                Object.prototype.hasOwnProperty.call(e, "spriteSourceSize") ? (g = fa.Ia(e, "spriteSourceSize"), f.Qg.b = fa.Ia(g, "x"), f.Qg.a = fa.Ia(g, "y")) : (f.Qg.b = 0, f.Qg.a = 0)
            }
            return a
        },
        l: Jc
    };
    rg.g = "11B";
    rg.MF = function(a) {
        function b() {
            var a = c.L(),
                b = {},
                d = {};
            b.frame = d;
            d.x = 0 < (a & 1) ? c.L() : c.Ca();
            d.y = 0 < (a & 2) ? c.L() : c.Ca();
            d.w = 0 < (a & 4) ? c.L() : c.Ca();
            d.h = 0 < (a & 8) ? c.L() : c.Ca();
            d = {};
            b.sourceSize =
                d;
            d.w = 0 < (a & 16) ? c.L() : c.Ca();
            d.h = 0 < (a & 32) ? c.L() : c.Ca();
            d = {};
            b.spriteSourceSize = d;
            d.x = 0 < (a & 64) ? c.L() : c.Ca();
            d.y = 0 < (a & 128) ? c.L() : c.Ca();
            b.trimmed = 1 == c.L();
            return b
        }
        var c = new Wa(a);
        a = c.L();
        var d = c.L(),
            e = c.L();
        if ("TPJ" != String.fromCodePoint(a) + String.fromCodePoint(d) + String.fromCodePoint(e)) throw 0;
        a = [];
        e = {};
        d = {};
        e.size = d;
        d.w = c.Ca();
        d.h = c.Ca();
        e.scale = c.yD();
        d = {};
        d.frames = a;
        d.meta = e;
        var f = c.Ca();
        for (e = 0; e < f;) {
            e++;
            var g = c.Ca();
            g = c.Tk(g);
            var h = b();
            h.filename = g;
            a.push(h)
        }
        f = c.Ca();
        for (e = 0; e < f;) {
            e++;
            var k =
                c.Ca();
            g = c.Ca();
            g = c.Tk(g);
            h = 0;
            for (var m = k; h < m;) {
                var n = h++,
                    p = b();
                k = "" + n;
                1E3 > n && (k = "0" + k);
                100 > n && (k = "0" + k);
                10 > n && (k = "0" + k);
                p.filename = g + "/" + k;
                a.push(p)
            }
        }
        return JSON.stringify(d)
    };
    kf.g = "11C";
    kf.prototype = {
        qa: function(a) {
            this.La = a;
            this.reset()
        },
        reset: function() {
            this.Dh = this.J = 0;
            this.Jf = this.We = null
        },
        GC: function() {
            function a() {
                var a = b.Jz,
                    c = F.li(b.La, b.J++),
                    d = F.li(b.La, b.J);
                55296 <= c && 56319 >= c && 56320 <= d && 57343 >= d && (b.J++, c = 1024 * (c - 55296) + (d - 56320) + 65536);
                a = a.get(c);
                switch (a) {
                    case 32:
                        return 5;
                    case 29:
                    case 36:
                    case 37:
                    case 39:
                        return 12;
                    default:
                        return a
                }
            }
            var b = this,
                c = qg.ZC,
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
                        e = 22
                }
                this.We = e
            }
            for (; this.J < this.La.length;) {
                this.Dh = this.J;
                e = this.Jf;
                this.Jf = a();
                if (30 == this.We || 33 == this.We && 34 != this.Jf) {
                    c = this.Jf;
                    switch (c) {
                        case 32:
                            c = 5;
                            break;
                        case 29:
                        case 36:
                        case 37:
                        case 39:
                            c = 12
                    }
                    switch (c) {
                        case 31:
                            c = 17;
                            break;
                        case 34:
                        case 35:
                            c = 30;
                            break;
                        case 38:
                            c = 22
                    }
                    this.We = c;
                    return {
                        position: this.Dh,
                        required: !0
                    }
                }
                switch (this.Jf) {
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
                        d = -1
                }
                if (-1 != d) {
                    if (this.We = d, 31 == this.Jf) return {
                        position: this.Dh,
                        required: !1
                    }
                } else {
                    d = !1;
                    switch (c[this.We][this.Jf]) {
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
                            if (38 != e) continue
                    }
                    this.We = this.Jf;
                    if (d) return {
                        position: this.Dh,
                        required: !1
                    }
                }
            }
            return this.J >= this.La.length && this.Dh < this.La.length ? (this.Dh = this.La.length, {
                position: this.La.length,
                required: !1
            }) : null
        },
        l: kf
    };
    qg.g = "11D";
    Db.g = "11E";
    Db.pe = function(a,
        b) {
        function c(a, b, c) {
            for (; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
            var d = a.tag & 31;
            a.tag >>>= 5;
            a.P -= 5;
            for (d += 257; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
            var e = a.tag & 31;
            a.tag >>>= 5;
            a.P -= 5;
            for (e += 1; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
            var f = a.tag & 15;
            a.tag >>>= 4;
            a.P -= 4;
            f += 4;
            for (var g = 0; 19 > g;) {
                var h = g++;
                q[h] = 0
            }
            for (g = 0; g < f;) {
                h = g++;
                for (h = n[h]; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                var k = a.tag & 7;
                a.tag >>>= 3;
                a.P -= 3;
                q[h] = k
            }
            for (f = 0; 16 > f;) g = f++, t.table[g] =
                0;
            for (f = 0; 19 > f;) g = f++, t.table[q[g]]++;
            for (g = f = t.table[0] = 0; 16 > g;) h = g++, p[h] = f, f += t.table[h];
            for (f = 0; 19 > f;) g = f++, 0 != q[g] && (t.te[p[q[g]]++] = g);
            for (f = 0; f < d + e;) {
                for (; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                k = h = g = 0;
                for (var l = a.tag; h = 2 * h + (l & 1), l >>>= 1, ++k, g += t.table[k], h -= t.table[k], 0 <= h;);
                a.tag = l;
                a.P -= k;
                g = t.te[g + h];
                switch (g) {
                    case 16:
                        for (g = q[f - 1]; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                        h = a.tag & 3;
                        a.tag >>>= 2;
                        a.P -= 2;
                        for (h += 3; 0 < h;) q[f++] = g, --h;
                        break;
                    case 17:
                        for (; 24 > a.P;) a.tag |=
                            a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                        g = a.tag & 7;
                        a.tag >>>= 3;
                        a.P -= 3;
                        for (g += 3; 0 < g;) q[f++] = 0, --g;
                        break;
                    case 18:
                        for (; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                        g = a.tag & 127;
                        a.tag >>>= 7;
                        a.P -= 7;
                        for (g += 11; 0 < g;) q[f++] = 0, --g;
                        break;
                    default:
                        q[f++] = g
                }
            }
            for (a = 0; 16 > a;) f = a++, b.table[f] = 0;
            for (a = 0; a < d;) f = a++, b.table[q[f]]++;
            for (f = a = b.table[0] = 0; 16 > f;) g = f++, p[g] = a, a += b.table[g];
            for (a = 0; a < d;) f = a++, 0 != q[f] && (b.te[p[q[f]]++] = f);
            for (b = 0; 16 > b;) a = b++, c.table[a] = 0;
            for (b = 0; b < e;) a = b++, c.table[q[d + a]]++;
            for (a = b = c.table[0] =
                0; 16 > a;) f = a++, p[f] = b, b += c.table[f];
            for (b = 0; b < e;) a = b++, 0 != q[d + a] && (c.te[p[q[d + a]]++] = a)
        }

        function d(a, b, c) {
            for (;;) {
                for (; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                for (var d = 0, e = 0, g = 0, l = a.tag; e = 2 * e + (l & 1), l >>>= 1, ++g, d += b.table[g], e -= b.table[g], 0 <= e;);
                a.tag = l;
                a.P -= g;
                e = b.te[d + e];
                if (256 == e) return Db.no;
                if (256 > e) a.kg.a[a.yi++] = e;
                else {
                    e -= 257;
                    d = f[e];
                    e = h[e];
                    if (0 == d) d = e;
                    else {
                        for (; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                        g = a.tag & 65535 >>> 16 - d;
                        a.tag >>>= d;
                        a.P -= d;
                        d = g + e
                    }
                    for (; 24 > a.P;) a.tag |=
                        a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                    l = g = e = 0;
                    for (var n = a.tag; g = 2 * g + (n & 1), n >>>= 1, ++l, e += c.table[l], g -= c.table[l], 0 <= g;);
                    a.tag = n;
                    a.P -= l;
                    l = c.te[e + g];
                    e = a.yi;
                    g = k[l];
                    l = m[l];
                    if (0 == g) g = l;
                    else {
                        for (; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
                        n = a.tag & 65535 >>> 16 - g;
                        a.tag >>>= g;
                        a.P -= g;
                        g = n + l
                    }
                    e = g = e - g;
                    for (d = g + d; e < d;) g = e++, g = a.kg.a[g], a.kg.a[a.yi++] = g
                }
            }
        }

        function e(a) {
            for (; 8 < a.P;) a.sourceIndex--, a.P -= 8;
            var b = a.source.a[a.sourceIndex + 1];
            b = 256 * b + a.source.a[a.sourceIndex];
            var c = a.source.a[a.sourceIndex + 3];
            c = 256 * c + a.source.a[a.sourceIndex + 2];
            if (b != (~c & 65535)) return Db.Os;
            for (a.sourceIndex += 4; 0 < b;) c = a.source.a[a.sourceIndex++], a.kg.a[a.yi++] = c, --b;
            a.P = 0;
            return Db.no
        }
        for (var f = [], g = 0; 30 > g;) g++, f.push(0);
        var h = [];
        for (g = 0; 30 > g;) g++, h.push(0);
        var k = [];
        for (g = 0; 30 > g;) g++, k.push(0);
        var m = [];
        for (g = 0; 30 > g;) g++, m.push(0);
        var n = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            p = [];
        for (g = 0; 16 > g;) g++, p.push(0);
        var q = [];
        for (g = 0; 320 > g;) g++, q.push(0);
        var t = new nc;
        g = new nc;
        var u = new nc;
        a = new jf(a, b);
        for (b = 0; 7 > b;) {
            var r =
                b++;
            g.table[r] = 0
        }
        g.table[7] = 24;
        g.table[8] = 152;
        g.table[9] = 112;
        for (b = 0; 24 > b;) r = b++, g.te[r] = 256 + r;
        for (b = 0; 144 > b;) r = b++, g.te[24 + r] = r;
        for (b = 0; 8 > b;) r = b++, g.te[168 + r] = 280 + r;
        for (b = 0; 112 > b;) r = b++, g.te[176 + r] = 144 + r;
        for (b = 0; 5 > b;) r = b++, u.table[r] = 0;
        u.table[5] = 32;
        for (b = 0; 32 > b;) r = b++, u.te[r] = r;
        for (b = 0; 4 > b;) r = b++, f[r] = 0;
        for (b = 0; 26 > b;) r = b++, f[r + 4] = r / 4 | 0;
        b = 3;
        for (r = 0; 30 > r;) {
            var v = r++;
            h[v] = b;
            b += 1 << f[v]
        }
        for (b = 0; 2 > b;) r = b++, k[r] = 0;
        for (b = 0; 28 > b;) r = b++, k[r + 2] = r / 2 | 0;
        b = 1;
        for (r = 0; 30 > r;) v = r++, m[v] = b, b += 1 << k[v];
        f[28] = 0;
        for (h[28] =
            258;;) {
            0 == a.P-- && (a.tag = a.source.a[a.sourceIndex++], a.P = 7);
            b = a.tag & 1;
            for (a.tag >>>= 1; 24 > a.P;) a.tag |= a.source.a[a.sourceIndex++] << a.P, a.P += 8;
            r = a.tag & 3;
            a.tag >>>= 2;
            a.P -= 2;
            switch (r) {
                case 0:
                    r = e(a);
                    break;
                case 1:
                    r = d(a, g, u);
                    break;
                case 2:
                    c(a, a.iv, a.Tt);
                    r = d(a, a.iv, a.Tt);
                    break;
                default:
                    r = Db.Os
            }
            if (r != Db.no) throw 0;
            if (0 != b) break
        }
        a.yi < a.kg.length && (a.kg = a.kg.sub(0, a.yi));
        return a.kg
    };
    nc.g = "11F";
    nc.prototype = {
        l: nc
    };
    jf.g = "120";
    jf.prototype = {
        l: jf
    };
    ld.g = "121";
    ld.prototype = {
        get: function(a) {
            var b = this.data;
            if (0 > a || 1114111 <
                a) return this.DA;
            if (55296 > a || 56319 < a && 65535 >= a) {
                var c = (b[a >> 5] << 2) + (a & 31);
                return b[c]
            }
            return 65535 >= a ? (c = (b[2048 + (a - 55296 >> 5)] << 2) + (a & 31), b[c]) : a < this.KB ? (c = b[2080 + (a >> 11)], c = b[c + (a >> 5 & 63)], b[(c << 2) + (a & 31)]) : b[this.data.length - 4]
        },
        l: ld
    };
    $b.g = "~scene.Intent";
    $b.prototype = {
        get: function(a) {
            return J.get(this.Af, a)
        },
        wa: function(a) {
            return J.ad(this.Af, a)
        },
        l: $b
    };
    hf.g = "~scene.LoaderInfo";
    hf.prototype = {
        l: hf
    };
    var X = Ja.e10 = {
        qc: !0,
        fc: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    X.i0 = {
        m: 0,
        s: "e10",
        toString: n
    };
    X.i1 = {
        m: 1,
        s: "e10",
        toString: n
    };
    X.i2 = {
        m: 2,
        s: "e10",
        toString: n
    };
    X.i3 = {
        m: 3,
        s: "e10",
        toString: n
    };
    X.i4 = {
        m: 4,
        s: "e10",
        toString: n
    };
    X.i5 = {
        m: 5,
        s: "e10",
        toString: n
    };
    X.i6 = {
        m: 6,
        s: "e10",
        toString: n
    };
    X.i7 = {
        m: 7,
        s: "e10",
        toString: n
    };
    X.zc = [X.i0, X.i1, X.i2, X.i3, X.i4, X.i5, X.i6, X.i7];
    ya.g = "~scene.SceneManager";
    ya.ga = [sg];
    ya.log = function(a) {
        40 < ya.qo.length && ya.qo.shift();
        ya.qo.push(a)
    };
    ya.X = function() {
        null == ya.Gd && new ya;
        return ya.Gd
    };
    ya.F = C;
    ya.prototype = r(C.prototype, {
        RE: function(a, b) {
            Sc.$j(a);
            this.Cd(null, a, !1, b)
        },
        D: function() {
            for (var a =
                    0, b = this.hw(this.firstChild); a < b.length;) {
                var c = b[a];
                ++a;
                switch (c.state.m) {
                    case 3:
                        c.yd();
                        c.le();
                        break;
                    case 5:
                        c.le()
                }
            }
            C.prototype.D.call(this);
            this.Tc = this.root = null;
            this.pr.u()
        },
        hw: function(a, b) {
            null == b && (b = []);
            for (var c = a.firstChild; null != c;) c instanceof O && this.hw(c, b), c = c.H;
            b.push(a);
            return b
        },
        Cd: function(a, b, c, d) {
            ya.log("spawn " + Sc.$j(b) + ", child:" + (null == c ? "null" : "" + c) + ", caller:" + (null != a ? a.name : "-"));
            var e = !1,
                f = na.filter(this.pr, function(a) {
                    return z.ph(a) == b
                })[0];
            null == f && (f = df.aA(b), f.mk() &&
                (e = this.pr, e.i == e.C && e.R(), e.f[e.i++] = f), e = !0);
            f.Z = new $b(a, d);
            if (!e && null != f.parent && f.parent instanceof O) e = f.pp(), this.Tc = f, this.pop(e, f);
            else if (c) {
                var g = this.Tc;
                g.yd();
                g.V(f);
                e && f.Oa();
                this.Tc = f;
                var h = E(this, this.push),
                    k = f;
                f.TC = function() {
                    h(g, k)
                };
                f.TC()
            } else if (null != this.Tc) {
                for (a = this.Tc; a != this;) c = z.ba(a, O), c.state == X.i3 && c.yd(), a = a.parent;
                a = this.Tc;
                this.Tc = f;
                this.V(f);
                e && f.Oa();
                this.Jo(a, f)
            } else this.Tc = this.root = f, this.V(f), e && f.Oa(), this.push(null, f)
        },
        push: function(a, b) {
            ya.log("push " +
                b.name + (null != a ? " onto " + a.name : ""));
            b.Va();
            this.Vo().push(a, b)
        },
        pop: function(a, b) {
            ya.log("pop " + a.name + (null != b ? " off " + b.name : ""));
            this.Vo().pop(a, b)
        },
        Jo: function(a, b) {
            ya.log("change " + a.name + " to " + b.name);
            this.Vo().Jo(a, b)
        },
        XC: function(a, b, c) {
            switch (c) {
                case 0:
                    if (b.Ah() && null != a)
                        for (; a != this;) c = a.parent, a = z.ba(a, O), a.state == X.i5 && a.le(), a = c;
                    b.Pa();
                    break;
                case 1:
                    c = 0;
                    for (a = this.SA(a); c < a.length;) {
                        var d = a[c];
                        ++c;
                        d.le();
                        d.remove();
                        d.mk() || d.D()
                    }
                    switch (b.state.m) {
                        case 2:
                        case 4:
                        case 5:
                            b.Pa();
                            break;
                        case 6:
                            b.Iq(),
                                b.Pa()
                    }
                    break;
                case 2:
                    for (; a != this;) c = a.parent, a = z.ba(a, O), a.state == X.i5 && a.le(), a.remove(), a.mk() || a.D(), a = c;
                    b.Pa()
            }
        },
        finish: function(a, b) {
            if (a.state == X.i1) a.D();
            else if (a.state == X.i3 && a.yd(), null != a.parent && a.parent != this) {
                this.Tc = a.parent;
                this.Tc.Z = new $b(a, b);
                if (this.Tc.state == X.i6 && (this.Tc.Iq(), !this.Tc.Ah())) {
                    var c = this.Tc.parent;
                    for (z.ph(c);;) {
                        c.Z = new $b(a, b);
                        c.Iq();
                        c.Pa();
                        c.yd();
                        if (c.Ah()) break;
                        c = c.parent;
                        if (c.parent == this) break
                    }
                }
                this.pop(a, this.Tc)
            } else this.root = this.Tc = null, a.yd(), this.pop(a,
                null)
        },
        Vo: function() {
            return new cb(this)
        },
        SA: function(a) {
            for (var b = [], c = a; null != c;) {
                b.push(c);
                a = null;
                for (c = c.firstChild; null != c;) {
                    if (c instanceof O) {
                        a = c;
                        break
                    }
                    c = c.H
                }
                if (null == a) break;
                c = a
            }
            b.reverse();
            return b
        },
        l: ya
    });
    ce.g = "~scene._SceneTransition.NullTransition";
    ce.ga = [Jb];
    ce.prototype = {
        cd: function() {
            return 0
        },
        yg: function() {},
        Mh: function() {},
        Lh: function() {},
        l: ce
    };
    cb.g = "~scene.SceneTransition";
    cb.cr = function(a, b, c) {
        var d = cb.dr;
        a = "" + (null == a ? "*" : a.g) + "-" + (null == b ? "*" : b.g);
        null != va[a] ? d.Bd(a, c) : d.G[a] =
            c
    };
    cb.CD = function(a, b) {
        cb.cr(a, null, b);
        cb.cr(null, a, b)
    };
    cb.prototype = {
        push: function(a, b) {
            this.zo(a, b, 0)
        },
        pop: function(a, b) {
            this.zo(a, b, 1)
        },
        Jo: function(a, b) {
            b.Va();
            this.zo(a, b, 2)
        },
        dE: function(a, b) {
            function c(a, b) {
                a = (null == a ? "null" : "*" == a ? "*" : z.ph(a).g) + "-" + (null == b ? "null" : "*" == b ? "*" : z.ph(b).g);
                b = cb.dr;
                return (null != va[a] ? b.ip(a) : b.G.hasOwnProperty(a)) ? (b = cb.dr, d.Ya = null != va[a] ? b.Cf(a) : b.G[a], !0) : !1
            }
            var d = this;
            this.Ya = null;
            c(a, b) || c("*", b) || c(a, "*") || c("*", "*");
            null == this.Ya && (this.Ya = new ce)
        },
        zo: function(a,
            b, c) {
            this.b = a;
            this.a = b;
            this.type = c;
            D.Sg.Ma(E(this, this.update));
            D.gj.Ma(E(this, this.ma));
            this.dE(a, b);
            this.elapsedTime = 0;
            this.duration = this.Ya.cd(a, b, c);
            0 < b.Bj ? (b.canvas.I(!1), this.state = 1) : (this.Ya.yg(a, b, c), this.state = 2)
        },
        end: function(a, b, c) {
            this.xC.XC(a, b, c);
            this.state = 0;
            D.Sg.detach(E(this, this.update));
            D.gj.detach(E(this, this.ma))
        },
        update: function(a) {
            switch (this.state) {
                case 1:
                    if (0 < this.a.Bj) break;
                    this.a.canvas.I(!0);
                    this.Ya.yg(this.b, this.a, this.type);
                    this.state = 2;
                    break;
                case 3:
                    this.elapsedTime +=
                        a;
                    a = Math.min(this.elapsedTime / this.duration, 1);
                    this.Ya.Mh(this.b, this.a, this.type, a);
                    1 == a && (this.Ya.Lh(this.b, this.a, this.type), this.state = 4);
                    break;
                case 5:
                    a = this.b;
                    var b = this.a;
                    this.a = this.b = null;
                    this.state = 0;
                    this.end(a, b, this.type)
            }
        },
        ma: function() {
            switch (this.state) {
                case 2:
                    this.state = 3;
                    break;
                case 4:
                    this.state = 5
            }
        },
        l: cb
    };
    gf.Cs |= 0;
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    });
    String.prototype.l = String;
    String.g = "String";
    Array.g = "Array";
    Date.prototype.l = Date;
    Date.g = "Date";
    var Ig = {},
        Gg = {},
        Hg = Number,
        Fg = Boolean,
        Bg = {},
        Jg = {},
        va = {};
    Object.defineProperty(Zc.prototype, "message", {
        get: function() {
            return String(this.ta)
        }
    });
    z.Uy = {}.toString;
    null == ArrayBuffer.prototype.slice && (ArrayBuffer.prototype.slice = wg.IE);
    C.Hs = 0;
    Ea.language = "en";
    Ea.JD = "res";
    Ea.ht = [];
    M.Zk = da.Gg(255, 1048575);
    M.vs = 1;
    M.TYPE = 1;
    Gc.ro = !1;
    Ia.Zx = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, -1, -1];
    Ia.Yx = [3,
        4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258
    ];
    Ia.Wx = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, -1, -1];
    Ia.Vx = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    Ia.Es = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    D.Sg = new kb;
    D.gj = new kb;
    D.time = 0;
    D.$t = 0;
    D.bu = 60;
    D.sv = -1;
    D.Kt = .016666666666666666;
    D.Xr = 1;
    D.sq = 0;
    D.dv = 0;
    D.uk = 0;
    D.eg = 0;
    D.first = !0;
    A.Element = 0;
    A.by = 1;
    A.Sx = 2;
    A.Comment =
        3;
    A.Xx = 4;
    A.ProcessingInstruction = 5;
    A.Document = 6;
    Mb.count = 0;
    lc.Jb = new W;
    Dc.ze = .2;
    Dc.KE = !1;
    Dc.Ng = 500;
    Dc.uC = 3;
    Dc.enabled = !0;
    Dc.wb = 3;
    U.EF = "bounce";
    U.Ue = Dc;
    U.yz = 0;
    U.rx = !1;
    U.Cz = !0;
    U.BC = 80;
    U.Ez = -1;
    U.Hi = 33;
    U.Bz = "destroy";
    U.st = 50;
    U.Eu = !0;
    U.xz = .3;
    U.DF = "stick";
    U.Az = "reload";
    U.vz = "none";
    yg.So = Array(7);
    ja.position = 0;
    u.dy = 1E3;
    u.ey = 1001;
    u.fy = 1002;
    u.gy = 1003;
    u.hy = 1004;
    u.iy = 1005;
    u.jy = 1006;
    u.ky = 1007;
    u.ly = 1008;
    u.my = 1009;
    u.ny = 1010;
    u.oy = 1011;
    u.py = 1012;
    u.qy = 1013;
    u.ry = 1014;
    u.sy = 1015;
    u.ty = 1016;
    u.uy = 1017;
    u.vy = 1018;
    u.wy = 1019;
    u.xy = 1020;
    u.yy = 1021;
    u.Ls = 1022;
    u.zy = 1023;
    u.yl = 1024;
    u.Ay = 1025;
    u.Ms = 1026;
    u.By = 1027;
    u.Cy = 1029;
    u.Dy = 1030;
    u.Ey = 1031;
    u.Fy = 1032;
    u.Gy = 1033;
    u.Hy = 1034;
    u.Iy = 1035;
    u.Jy = 1036;
    u.Ns = 1037;
    u.Ky = 1038;
    u.Ly = 1039;
    u.My = 1040;
    u.Ny = 1041;
    u.ko = 1042;
    u.Oy = 1043;
    u.lo = 1044;
    u.Py = 1045;
    u.mo = 1046;
    jc.nw = !1;
    rb.count = 4;
    rb.data = [.875, .75, 150, .175, .75, 100, .325, .825, 200, .725, .825, 250];
    ta.Js = 28;
    ta.ay = 224;
    ta.$x = 254;
    ta.Lx = 0;
    ta.RF = 0;
    ta.tq = 0;
    v.Is = "candybubble";
    v.VERSION = 3;
    v.Ze = !0;
    v.zl = !1;
    Ra.Rs = -1;
    db.Tx = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    db.Ds = ma.bn(db.Tx);
    Ac.Np = new DataView(new ArrayBuffer(8));
    fc.Vt = function() {
        var a = new ub;
        null != va.lt ? a.Bd("lt", "<") : a.G.lt = "<";
        null != va.gt ? a.Bd("gt", ">") : a.G.gt = ">";
        null != va.amp ? a.Bd("amp", "&") : a.G.amp = "&";
        null != va.quot ? a.Bd("quot", '"') : a.G.quot = '"';
        null != va.apos ? a.Bd("apos", "'") : a.G.apos = "'";
        return a
    }(this);
    zc.tt = 0;
    m.yo = "res";
    m.Qi = new wb;
    m.Gb = new wb;
    m.mn = new wb;
    m.oF = "txt csv xml json yaml properties".split(" ");
    m.Lu = ["png", "jpg"];
    m.Rl = new wb;
    m.locked = new wb;
    m.Zg = "meta/tutorials/special_obstacle_{quality}.png meta/tutorials/special_line_blast_{quality}.png meta/tutorials/special_conceal_{quality}.png meta/tutorials/special_breakable_3hp_{quality}.png meta/tutorials/special_breakable_2hp_{quality}.png meta/tutorials/special_breakable_1hp_{quality}.png meta/tutorials/play_how_to_pop_{quality}.png meta/tutorials/play_bubble_swap_{quality}.png meta/tutorials/play_bouncer_{quality}.png meta/tutorials/play_bank_shots_{quality}.png meta/tutorials/objective_reachscore_{quality}.png meta/tutorials/objective_pop_bubbles_{quality}.png meta/tutorials/objective_free_targets_{quality}.png meta/star_shine_{quality}.png meta/star_{quality}.png meta/overlay_{quality}.png meta/map/stages.json meta/map/stage9/numbers_{quality}.png meta/map/stage9/numbers_{quality}.fnt meta/map/stage9/name_{quality}.png meta/map/stage9/name_{quality}.fnt meta/map/stage9/map.jpg meta/map/stage9/candy3.png meta/map/stage9/candy3.bin meta/map/stage9/candy2.png meta/map/stage9/candy2.bin meta/map/stage9/candy1.png meta/map/stage9/candy1.bin meta/map/stage9/candy0.png meta/map/stage9/candy0.bin meta/map/stage9/buttons.png meta/map/stage9/buttons.bin meta/map/stage8/numbers_{quality}.png meta/map/stage8/numbers_{quality}.fnt meta/map/stage8/name_{quality}.png meta/map/stage8/name_{quality}.fnt meta/map/stage8/map.jpg meta/map/stage8/candy3.png meta/map/stage8/candy3.bin meta/map/stage8/candy2.png meta/map/stage8/candy2.bin meta/map/stage8/candy1.png meta/map/stage8/candy1.bin meta/map/stage8/candy0.png meta/map/stage8/candy0.bin meta/map/stage8/buttons.png meta/map/stage8/buttons.bin meta/map/stage7/numbers_{quality}.png meta/map/stage7/numbers_{quality}.fnt meta/map/stage7/name_{quality}.png meta/map/stage7/name_{quality}.fnt meta/map/stage7/map.jpg meta/map/stage7/candy3.png meta/map/stage7/candy3.bin meta/map/stage7/candy2.png meta/map/stage7/candy2.bin meta/map/stage7/candy1.png meta/map/stage7/candy1.bin meta/map/stage7/candy0.png meta/map/stage7/candy0.bin meta/map/stage7/buttons.png meta/map/stage7/buttons.bin meta/map/stage6/numbers_{quality}.png meta/map/stage6/numbers_{quality}.fnt meta/map/stage6/name_{quality}.png meta/map/stage6/name_{quality}.fnt meta/map/stage6/map.jpg meta/map/stage6/candy3.png meta/map/stage6/candy3.bin meta/map/stage6/candy2.png meta/map/stage6/candy2.bin meta/map/stage6/candy1.png meta/map/stage6/candy1.bin meta/map/stage6/candy0.png meta/map/stage6/candy0.bin meta/map/stage6/buttons.png meta/map/stage6/buttons.bin meta/map/stage5/numbers_{quality}.png meta/map/stage5/numbers_{quality}.fnt meta/map/stage5/name_{quality}.png meta/map/stage5/name_{quality}.fnt meta/map/stage5/map.jpg meta/map/stage5/candy3.png meta/map/stage5/candy3.bin meta/map/stage5/candy2.png meta/map/stage5/candy2.bin meta/map/stage5/candy1.png meta/map/stage5/candy1.bin meta/map/stage5/candy0.png meta/map/stage5/candy0.bin meta/map/stage5/buttons.png meta/map/stage5/buttons.bin meta/map/stage4/numbers_{quality}.png meta/map/stage4/numbers_{quality}.fnt meta/map/stage4/name_{quality}.png meta/map/stage4/name_{quality}.fnt meta/map/stage4/map.jpg meta/map/stage4/candy3.png meta/map/stage4/candy3.bin meta/map/stage4/candy2.png meta/map/stage4/candy2.bin meta/map/stage4/candy1.png meta/map/stage4/candy1.bin meta/map/stage4/candy0.png meta/map/stage4/candy0.bin meta/map/stage4/buttons.png meta/map/stage4/buttons.bin meta/map/stage3/numbers_{quality}.png meta/map/stage3/numbers_{quality}.fnt meta/map/stage3/name_{quality}.png meta/map/stage3/name_{quality}.fnt meta/map/stage3/map.jpg meta/map/stage3/candy3.png meta/map/stage3/candy3.bin meta/map/stage3/candy2.png meta/map/stage3/candy2.bin meta/map/stage3/candy1.png meta/map/stage3/candy1.bin meta/map/stage3/candy0.png meta/map/stage3/candy0.bin meta/map/stage3/buttons.png meta/map/stage3/buttons.bin meta/map/stage2/numbers_{quality}.png meta/map/stage2/numbers_{quality}.fnt meta/map/stage2/name_{quality}.png meta/map/stage2/name_{quality}.fnt meta/map/stage2/map.jpg meta/map/stage2/candy3.png meta/map/stage2/candy3.bin meta/map/stage2/candy2.png meta/map/stage2/candy2.bin meta/map/stage2/candy1.png meta/map/stage2/candy1.bin meta/map/stage2/candy0.png meta/map/stage2/candy0.bin meta/map/stage2/buttons.png meta/map/stage2/buttons.bin meta/map/stage1/numbers_{quality}.png meta/map/stage1/numbers_{quality}.fnt meta/map/stage1/name_{quality}.png meta/map/stage1/name_{quality}.fnt meta/map/stage1/map.jpg meta/map/stage1/candy3.png meta/map/stage1/candy3.bin meta/map/stage1/candy2.png meta/map/stage1/candy2.bin meta/map/stage1/candy1.png meta/map/stage1/candy1.bin meta/map/stage1/candy0.png meta/map/stage1/candy0.bin meta/map/stage1/buttons.png meta/map/stage1/buttons.bin meta/map/stage0/numbers_{quality}.png meta/map/stage0/numbers_{quality}.fnt meta/map/stage0/name_{quality}.png meta/map/stage0/name_{quality}.fnt meta/map/stage0/map.jpg meta/map/stage0/candy3.png meta/map/stage0/candy3.bin meta/map/stage0/candy2.png meta/map/stage0/candy2.bin meta/map/stage0/candy1.png meta/map/stage0/candy1.bin meta/map/stage0/candy0.png meta/map/stage0/candy0.bin meta/map/stage0/buttons.png meta/map/stage0/buttons.bin meta/map/sprites.png meta/map/sprites.bin meta/map/puppy_{quality}.png meta/map/puppy_{quality}.bin meta/map/ornaments_{quality}.png meta/map/ornaments_{quality}.bin meta/logo_{quality}.png meta/loadloop_{quality}.png meta/dialog_x_{quality}.png meta/dialog_princess_stage_pass_{quality}.png meta/dialog_princess_level_pass_{quality}.png meta/dialog_princess_level_fail_{quality}.png meta/dialog_glitter_{quality}.png meta/dialog_box_{quality}.png meta/button_x_{quality}.png meta/button_r_{quality}.png meta/button_l_{quality}.png meta/button_a_{quality}.png meta/branding_frame_{quality}.png levels.bin lang/strings_{language}.txt core/puppy_{quality}.png core/puppy_{quality}.bin core/princess/part4_{quality}.png core/princess/part4_{quality}.bin core/princess/part3_{quality}.png core/princess/part3_{quality}.bin core/princess/part2_{quality}.png core/princess/part2_{quality}.bin core/princess/part1_{quality}.png core/princess/part1_{quality}.bin core/princess/part0_{quality}.png core/princess/part0_{quality}.bin core/misc/sprites_{quality}.png core/misc/sprites_{quality}.bin core/misc/decor2.png core/misc/decor1.png core/messages/{language}/text_{quality}.png core/messages/{language}/text_{quality}.bin core/ground9_{quality}.png core/ground8_{quality}.png core/ground7_{quality}.png core/ground6_{quality}.png core/ground5_{quality}.png core/ground4_{quality}.png core/ground3_{quality}.png core/ground2_{quality}.png core/ground1_{quality}.png core/ground0_{quality}.png core/bg9.jpg core/bg8.jpg core/bg7.jpg core/bg6.jpg core/bg5.jpg core/bg4.jpg core/bg3.jpg core/bg2.jpg core/bg1.jpg core/bg0.jpg core/anim_sparkle_burst_{quality}.png core/anim_sparkle_burst_{quality}.bin core/anim_progress_bar_{quality}.png core/anim_progress_bar_{quality}.bin core/anim_lineblast_{quality}.png core/anim_lineblast_{quality}.bin core/anim_cookie_debris_{quality}.png core/anim_cookie_debris_{quality}.bin core/anim_bubble_sparkle_{quality}.png core/anim_bubble_sparkle_{quality}.bin core/anim_bubble_shine_{quality}.png core/anim_bubble_shine_{quality}.bin core/anim_bubble_pop_{quality}.png core/anim_bubble_pop_{quality}.bin core/anim_bubble_cloud_{quality}.png core/anim_bubble_cloud_{quality}.bin bug.jpg bmf/style4_{quality}.png bmf/style4_{quality}.fnt bmf/style3_{quality}.png bmf/style3_{quality}.fnt bmf/style2_{quality}.png bmf/style2_{quality}.fnt bmf/style1_{quality}.fnt bmf/style1_b_{quality}.png bmf/style1_a_{quality}.png bmf/profont.png bmf/profont.fnt audio/{audio}/sounds.{audio} audio/{audio}/music_meta.{audio} audio/{audio}/music_game.{audio}".split(" ");
    m.qD = [16, 173, 174, 186, 187, 225, 247, 248, 252, 253];
    dc.state = new ub;
    yc.enabled = !0;
    Xc.jo = 1E3;
    Xc.Qy = [0, 1228, 2227, 2675, 3674, 4139, 5138, 5552, 6551, 6929, 7928, 8358, 9357, 10142, 11141, 11821, 12820, 13840, 14839, 15415, 16414, 16989, 17988, 18564, 19563, 20139, 21138, 21922, 22921, 23680, 24679, 25411, 26410, 27117, 28116, 30180, 31179, 31625, 32624, 34087, 35086, 36550, 37549, 39013, 40012, 40222, 41221, 41509, 42508, 42614, 43613, 43901, 44900, 45301, 46300, 48196, 49195, 50659, 51658, 53122, 54121, 55584, 56583, 58047, 59046, 61895, 62894, 63966, 64965, 65384, 66383,
        66880, 67879, 68559, 69558, 70186, 71185, 71385, 72384, 73104, 74103, 78179, 79178, 79519, 80518, 84594, 85593, 88572, 89571, 92303, 93302, 94008, 95007, 95348
    ];
    K.vo = void 0;
    K.active = !1;
    K.fv = !1;
    Hb.du = !0;
    Hb.dw = !0;
    Cb.Jb = function() {
        var a = new x;
        a.b = 0;
        a.a = 0;
        return a
    }(this);
    sa.Fs = 0;
    sa.xl = 0;
    sa.Gs = 10;
    rc.cache = new ub;
    fb.So = 0;
    Gb.Ks = new Gb(mb.i1);
    Gb.cy = new Gb(mb.i3);
    Ka.Ux = 1;
    za.qj = new Ub;
    za.ME = new Ub;
    Na.Ox = 0;
    Na.Nx = 0;
    Na.Et = 0;
    Na.Jv = 0;
    Na.Iv = 0;
    ac.wF = function() {
        var a = new qd;
        wf.Vh(a);
        return a
    }(this);
    ac.xF = function() {
        var a = new qd;
        wf.Vh(a);
        return a
    }(this);
    qa.count = 0;
    B.og = 0;
    aa.og = 0;
    Xa.og = 0;
    pa.Kr = new Ub;
    wa.kx = 0;
    wa.Wn = new wb;
    qg.ZC = [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4],
        [0, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [4, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0,
            0, 0, 0, 0
        ],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 1, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 1, 1, 1,
            4, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0
        ],
        [0, 4, 4, 1, 0, 1, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 1, 0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 4, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 0],
        [1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1,
            1, 0, 0, 4, 2, 4, 0, 0, 0, 1, 1, 0
        ],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 1, 0],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 1, 1, 1, 1, 0, 0],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 1, 1, 0],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 1, 0],
        [0, 4, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 4, 0, 0, 0, 0, 0, 1]
    ];
    Db.no = 0;
    Db.Os = -3;
    ld.KF = "AA4IAAAAAAAAAhqg5VV7NJtZvz7fTC8zU5deplUlMrQoWqmqahD5So0aipYWrUhVFSVBQ10iSTtUtW6nKDVF6k7d75eQfEUbFcQ9KiFS90tQEolcP23nrLPmO+esr/+f39rr/a293t/e7/P8nmfvlz0O6RvrBJADtbBNaD88IOKTOmOrCqhu9zE770vc1pBV/xL5dxj2V7Zj4FGSomFKStCWNlV7hG1VabZfZ1LaHbFrRwzzLjzPoi1UHDnlV/lWbhgIIJvLBp/pu7AHEdRnIY+ROdXxg4fNpMdTxVnnm08OjozejAVsBqwqz8kddGRlRxsd8c55dNZoPuex6a7Dt6L0NNb03sqgTlR2/OT7eTt0Y0WnpUXxLsp5SMANc4DsmX4zJUBQvznwexm9tsMH+C9uRYMPOd96ZHB29NZjCIM2nfO7tsmQveX3l2r7ft0N4/SRJ7kO6Y8ZCaeuUQ4gMTZ67cp7TgxvlNDsPgOBdZi2YTam5Q7m3+00l+XG7PrDe6YoPmHgK+yLih7fAR16ZFCeD9WvOVt+gfNW/KT5/M6rb/9KERt+N1lad5RneVjzxXHsLofuU+TvrEsr3+26sVz5WJh6L/svoPK3qepFH9bysDljWtD1F7KrxzW1i9r+e/NLxV/acts7zuo304J9+t3Pd6Y6u8f3EAqxNRgv5DZjaI3unyvkvHPya/v3mWVYOC38qBq11+yHZ2bAyP1HbkV92vdno7r2lxz9UwCdCJVfd14NLcpO2CadHS/XPJ9doXgz5vLv/1OBVS3gX0D9n6LiNIDfpilO9RsLgZ2W/wIy8W/Rh93jfoz4qmRV2xElv6p2lRXQdO6/Cv8f5nGn3u0wLXjhnvClabL1o+7yvIpvLfT/xsKG30y/sTvq30ia9Czxp9dr9v/e7Yn/O0QJXxxBOJmceP/DBFa1q1v6oudn/e6qc/37dUoNvnYL4plQ9OoneYOh/r8fOFm7yl7FETHY9dXd5K2n/qEc53dOEe1TTJcvCfp1dpTC334l0vyaFL6mttNEbFjzO+ZV2mLk0qc3BrxJ4d9gweMmjRorxb7vic0rSq6D4wzAyFWas1TqPE0sLI8XLAryC8tPChaN3ALEZSWmtB34SyZcxXYn/E4Tg0LeMIPhgPKD9zyHGMxxhxnDDih7eI86xECTM8zodUCdgffUmRh4rQ8zyA6ow/Aei+01a8OMfziQQ+GAEkhwN/cqUFYAVzA9ex4n6jgtsiMvXf5BtXxEU4hSphvx3v8+9au8eEekEEpkrkne/zB1M+HAPuXIz3paxKlfe8aDMfGWAX6Md6PuuAdKHFVH++Ed5LEji94Z5zeiJIxbmWeN7rr1/ZcaBl5/nimdHsHgIH/ssyLUXZ4fDQ46HnBb+hQqG8yNiKRrXL/b1IPYDUsu3dFKtRMcjqlRvONd4xBvOufx2cUHuk8pmG1D7PyOQmUmluisVFS9OWS8fPIe8LiCtjwJKnEC9hrS9uKmISI3Wa5+vdXUG9dtyfr7g/oJv2wbzeZU838G6mEvntUb3SVV/fBZ6H/sL+lElzeRrHy2Xbe7UWX1q5sgOQ81rv+2baej4fP4m5Mf/GkoxfDtT3++KP7do9Jn26aa6xAhCf5L9RZVfkWKCcjI1eYbm2plvTEqkDxKC402bGzXCYaGnuALHabBT1dFLuOSB7RorOPEhZah1NjZIgR/UFGfK3p1ElYnevOMBDLURdpIjrI+qZk4sffGbRFiXuEmdFjiAODlQCJvIaB1rW61Ljg3y4eS4LAcSgDxxZQs0DYa15wA032Z+lGUfpoyOrFo3mg1sRQtN/fHHCx3TrM8eTrldMbYisDLXbUDoXMLejSq0fUNuO1muX0gEa8vgyegkqiqqbC3W0S4cC9Kmt8MuS/hFO7Xei3f8rSvIjeveMM7kxjUixOrl6gJshe4JU7PhOHpfrRYvu7yoAZKa3Buyk2J+K5W+nNTz1nhJDhRUfDJLiUXxjxXCJeeaOe/r7HlBP/uURc/5efaZEPxr55Qj39rfTLkugUGyMrwo7HAglfEjDriehF1jXtwJkPoiYkYQ5aoXSA7qbCBGKq5hwtu2VkpI9xVDop/1xrC52eiIvCoPWx4lLl40jm9upvycVPfpaH9/o2D4xKXpeNjE2HPQRS+3RFaYTc4Txw7Dvq5X6JBRwzs9mvoB49BK6b+XgsZVJYiInTlSXZ+62FT18mkFVcPKCJsoF5ahb19WheZLUYsSwdrrVM3aQ2XE6SzU2xHDS6iWkodk5AF6F8WUNmmushi8aVpMPwiIfEiQWo3CApONDRjrhDiVnkaFsaP5rjIJkmsN6V26li5LNM3JxGSyKgomknTyyrhcnwv9Qcqaq5utAh44W30SWo8Q0XHKR0glPF4fWst1FUCnk2woFq3iy9fAbzcjJ8fvSjgKVOfn14RDqyQuIgaGJZuswTywdCFSa89SakMf6fe+9KaQMYQlKxiJBczuPSho4wmBjdA+ag6QUOr2GdpcbSl51Ay6khhBt5UXdrnxc7ZGMxCvz96A4oLocxh2+px+1zkyLacCGrxnPzTRSgrLKpStFpH5ppKWm7PgMKZtwgytKLOjbGCOQLTm+KOowqa1sdut9raj1CZFkZD0jbaKNLpJUarSH5Qknx1YiOxdA5L6d5sfI/unmkSF65Ic/AvtXt98Pnrdwl5vgppQ3dYzWFwknZsy6xh2llmLxpegF8ayLwniknlXRHiF4hzzrgB8jQ4wdIqcaHCEAxyJwCeGkXPBZYSrrGa4vMwZvNN9aK0F4JBOK9mQ8g8EjEbIQVwvfS2D8GuCYsdqwqSWbQrfWdTRUJMqmpnWPax4Z7E137I6brHbvjpPlfNZpF1d7PP7HB/MPHcHVKTMhLO4f3CZcaccZEOiS2DpKiQB5KXDJ+Ospcz4qTRCRxgrKEQIgUkKLTKKwskdx2DWo3bg3PEoB5h2nA24olwfKSR+QR6TAvEDi/0czhUT59RZmO1MGeKGeEfuOSPWfL+XKmhqpZmOVR9mJVNDPKOS49Lq+Um10YsBybzDMtemlPCOJEtE8zaXhsaqEs9bngSJGhlOTTMlCXly9Qv5cRN3PVLK7zoMptutf7ihutrQ/Xj7VqeCdUwleTTKklOI8Wep9h7fCY0kVtDtIWKnubWAvbNZtsRRqOYl802vebPEkZRSZc6wXOfPtpPtN5HI63EUFfsy7U/TLr8NkIzaY3vx4A28x765XZMzRZTpMk81YIMuwJ5+/zoCuZj1wGnaHObxa5rpKZj4WhT670maRw04w0e3cZW74Z0aZe2n05hjZaxm6urenz8Ef5O6Yu1J2aqYAlqsCXs5ZB5o1JJ5l3xkTVr8rJQ09NLsBqRRDT2IIjOPmcJa6xQ1R5yGP9jAsj23xYDTezdyqG8YWZ7vJBIWK56K+iDgcHimiQOTIasNSua1fOBxsKMMEKd15jxTl+3CyvGCR+UyRwuSI2XuwRIPoNNclPihfJhaq2mKkNijwYLY6feqohktukmI3KDvOpN7ItCqHHhNuKlxMfBAEO5LjW2RKh6lE5Hd1dtAOopac/Z4FdsNsjMhXz/ug8JGmbVJTA+VOBJXdrYyJcIn5+OEeoK8kWEWF+wdG8ZtZHKSquWDtDVyhFPkRVqguKFkLkKCz46hcU1SUY9oJ2Sk+dmq0kglqk4kqKT1CV9JDELPjK1WsWGkEXF87g9P98e5ff0mIupm/w6vc3kCeq04X5bgJQlcMFRjlFWmSk+kssXCAVikfeAlMuzpUvCSdXiG+dc6KrIiLxxhbEVuKf7vW7KmDQI95bZe3H9mN3/77F6fZ2Yx/F9yClllj8gXpLWLpd5+v90iOaFa9sd7Pvx0lNa1o1+bkiZ69wCiC2x9UIb6/boBCuNMB/HYR0RC6+FD9Oe5qrgQl6JbXtkaYn0wkdNhROLqyhv6cKvyMj1Fvs2o3OOKoMYTubGENLfY5F6H9d8wX1cnINsvz+wZFQu3zhWVlwJvwBEp69Dqu/ZnkBf3nIfbx4TK7zOVJH5sGJX+IMwkn1vVBn38GbpTg9bJnMcTOb5F6Ci5gOn9Fcy6Qzcu+FL6mYJJ+f2ZZJGda1VqruZ0JRXItp8X0aTjIcJgzdaXlha7q7kV4ebrMsunfsRyRa9qYuryBHA0hc1KVsKdE+oI0ljLmSAyMze8lWmc5/lQ18slyTVC/vADTc+SNM5++gztTBLz4m0aVUKcfgOEExuKVomJ7XQDZuziMDjG6JP9tgR7JXZTeo9RGetW/Xm9/TgPJpTgHACPOGvmy2mDm9fl09WeMm9sQUAXP3Su2uApeCwJVT5iWCXDgmcuTsFgU9Nm6/PusJzSbDQIMfl6INY/OAEvZRN54BSSXUClM51im6Wn9VhVamKJmzOaFJErgJcs0etFZ40LIF3EPkjFTjGmAhsd174NnOwJW8TdJ1Dja+E6Wa6FVS22Haj1DDA474EesoMP5nbspAPJLWJ8rYcP1DwCslhnn+gTFm+sS9wY+U6SogAa9tiwpoxuaFeqm2OK+uozR6SfiLCOPz36LiDlzXr6UWd7BpY6mlrNANkTOeme5EgnnAkQRTGo9T6iYxbUKfGJcI9B+ub2PcyUOgpwXbOf3bHFWtygD7FYbRhb+vkzi87dB0JeXl/vBpBUz93VtqZi7AL7C1VowTF+tGmyurw7DBcktc+UMY0E10Jw4URojf8NdaNpN6E1q4+Oz+4YePtMLy8FPRP";
    ya.qo = [];
    cb.dr = new ub
})("undefined" != typeof exports ? exports : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this, "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
//# sourceMappingURL=candybubble-min.js.map
