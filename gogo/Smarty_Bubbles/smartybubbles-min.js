(function(fe, Va) {
    function Xc() {}

    function Yc() {}

    function wc() {}

    function Zc() {
        I.call(this, "StatisticsScreen");
        this.type = 11
    }

    function Yb() {
        I.call(this, "PauseScreen");
        this.type = 32
    }

    function Zb() {
        this.timeout = !1;
        I.call(this, "LoadingScreen");
        this.type = 34
    }

    function xc() {
        this.Mm = this.Nm = !1;
        kb.call(this)
    }

    function Wa() {
    	window.famobi_analytics.trackScreen("SCREEN_HOME");
        I.call(this, "HomeScreen");
        this.type = 9
    }

    function qb() {
        I.call(this);
        this.type = 10
    }

    function $c() {
        I.call(this, "GameOverScreen");
        this.type = 33
    }

    function I(a) {
        this.Gr = new Ia;
        this.group = new ia;
        this.buttons =
            [];
        O.call(this);
        this.Mp = a;
        null == I.jh && this.cv();
        this.type = 6
    }

    function $b(a, b) {
        B.call(this);
        this.Ai = a;
        this.Og = b;
        this.type = 31
    }

    function ge(a, b, c, d, e) {
        this.start = a;
        this.end = b;
        this.interval = new lb(c);
        this.Jb = d;
        this.Og = e
    }

    function D() {}

    function he() {
        this.ah = new P;
        this.me = new P
    }

    function ad() {
        this.ij = new P(256);
        B.call(this)
    }

    function bd() {
        B.call(this)
    }

    function cd() {
        B.call(this)
    }

    function dd() {
        this.li = !1;
        this.uh = 0;
        this.count = 7;
        B.call(this);
        this.D().ta(this);
        this.group = new ia(null, this.D().mc(6));
        this.group.ba(100);
        this.group.ga(600);
        this.group.ib(.5);
        for (var a = [], b = 0, c = this.count; b < c;) b++, a.push([new ca(this.group, 15, "0"), new ca(this.group, 14, "0")]);
        this.zf = a;
        a = 0;
        for (b = this.count; a < b;) {
            c = a++;
            var d = this.zf[c][0].Vk().b,
                e = this.zf[c];
            e[0].ba(d * c);
            e[1].ba(d * c);
            e[1].qa(0);
            e[1].na(!1)
        }
        this.type = 29
    }

    function ed() {
        B.call(this);
        this.button = new mb(this.D().mc(6), new ca(null, 3, "button_pause"));
        this.button.name = "pause_button";
        this.button.Rb(!0);
        this.W(this.button);
        this.D().ta(this);
        this.type = 17
    }

    function Eb() {
        this.state =
            0;
        this.buttons = [];
        B.call(this);
        this.button = new mb(this.D().mc(6), new ca(null, 3, "button_music"));
        this.button.Ko = .3;
        this.button.name = "music";
        this.button.Rb(!0);
        ja.enabled ? (this.W(this.button), this.D().ta(this), this.Tr(), this.type = 16) : (this.button.Rb(!1), this.button.na(!1), this.ei = !1)
    }

    function R() {}

    function rb() {
        this.Ng = 0;
        B.call(this);
        this.gd = ka.yb.window.nc();
        this.type = 20
    }

    function fd() {
        this.Vm = this.speed = this.offset = 0;
        this.gk = 1;
        this.Gi = .1;
        this.blink = !1;
        this.alpha = this.Oj = 0;
        B.call(this)
    }

    function lb(a) {
        null ==
            a && (a = 0);
        this.elapsedTime = this.alpha = 0;
        this.duration = a
    }

    function ie() {
        this.vh = this.jj = this.Rl = this.ul = this.le = 0
    }

    function je(a, b) {
        this.yi = !1;
        this.rk = this.time = 0;
        this.vl = -1;
        this.state = 0;
        this.Wh = !1;
        this.Tv = 2;
        this.dd = this.wf = this.Bd = 0;
        this.Xa = new ie;
        var c = this;
        this.ia = a;
        this.xh = this.kj = 5;
        this.Tw = new gd(b);
        this.Sg = [1, 2, 3, 4, 5, 6].slice();
        b = [];
        for (var d = 0, e = this.Sg.length + 1; d < e;) d++, b.push(0);
        this.nd = b;
        this.Xa.Nl = this.nd.slice();
        this.xh = 5;
        this.data = new ac(11, 12, 1, 1);
        this.Ll = 7;
        this.data.ka.forEach(function(a,
            b, d) {
            return 5 <= d ? c.Dq(!0) : 7
        });
        this.data.ka.Qf(function(a) {
            c.ck(a)
        });
        this.wf = this.Eh();
        this.Bd = this.Eh();
        a = a.l;
        a.rr(this.data);
        a.bx(10, !0);
        a.zl(this.wf);
        this.Tq()
    }

    function Ja(a, b) {
        this.nf = this.mm = !1;
        this.$a = new rb;
        this.paused = !1;
        this.fc = new Ka("game");
        cb.call(this);
        Ja.Ia = this;
        this.screen = a;
        this.xl = [];
        for (a = 0; 7 > a;) {
            var c = a++;
            this.xl[c] = new ia("layer_" + c);
            this.fc.appendChild(this.xl[c].node)
        }
        this.W(this.Wn = new B);
        this.W(this.pw = new B);
        Oa.Ac = t.Ac;
        this.l = new yc;
        this.l.ta(this);
        this.la = new je(this, b);
        this.W(new fd);
        this.W(new bc);
        this.W(new hd);
        this.W(new cd);
        this.W(new id);
        this.W(new bd);
        this.W(new dd);
        this.W(this.lm = new ed);
        Aa.If() && this.W(this.Yf = new Eb);
        this.type = 13
    }

    function sb(a, b) {
        B.call(this);
        this.Kg = a;
        this.value = b;
        sb.count++;
        this.type = 30
    }

    function ke() {
        var a = window.document;
        window.addEventListener("resize", E(this, this.resize));
        a.body.style.backgroundColor = "white";
        var b = this.Ha(),
            c = a.createElement("div");
        c.id = "crashdialog";
        c.style.position = "absolute";
        c.style.width = b.c - b.b + "px";
        c.style.height = b.d - b.a + "px";
        c.style.left = b.b + "px";
        c.style.top = b.a + "px";
        a.body.appendChild(c);
        a = a.createElement("p");
        a.style.fontFamily = "Arial, Helvetica, sans-serif";
        a.style.fontWeight = "bold";
        a.style.fontSize = "2em";
        a.style.textAlign = "center";
        a.style.margin = "4px";
        try {
            var d = "\ud83d\ude22<br>" + Z.translate(w.i25)
        } catch (e) {
            d = "Aw, Snap!"
        }
        a.innerHTML = d;
        c.appendChild(a);
        a = a.cloneNode();
        a.style.fontWeight = "normal";
        a.style.textAlign = "center";
        a.style.fontSize = "1.5em";
        try {
            d = Z.translate(w.i4)
        } catch (e) {
            d = "Oops, there was a problem :( This shouldn't happen. Please reload the game!"
        }
        a.innerText =
            d;
        c.appendChild(a)
    }

    function cc(a) {
        this.frame = 0;
        var b = new v;
        b.b = 0;
        b.a = 0;
        this.Cg = b;
        B.call(this);
        this.depth = a;
        this.type = 24
    }

    function hd() {
        this.Gg = 0;
        B.call(this)
    }

    function bf() {}

    function mb(a, b) {
        this.i = 0;
        this.R = new H;
        var c = new v;
        c.b = 1;
        c.a = 1;
        this.Vn = c;
        this.Ko = .5;
        B.call(this);
        this.R = b.Ha(b);
        this.group = new ia("button", a);
        this.group.ba(b.xa);
        this.group.ga(b.ua);
        b.ba(0);
        b.ga(0);
        this.F = b;
        this.group.appendChild(b);
        this.group.Nc();
        this.i |= 8;
        ha.Sa().ta(E(this, this.Ic));
        this.type = 7
    }

    function Oa() {
        this.Hq = 1;
        B.call(this)
    }

    function Fa(a) {
        this.visible = !0;
        this.hc = this.sb = 0;
        this.Dj = this.scale = this.alpha = 1;
        var b = new v;
        b.b = 0;
        b.a = 0;
        this.lg = b;
        b = new v;
        b.b = 0;
        b.a = 0;
        this.Fb = b;
        B.call(this);
        this.da = a;
        this.da.client = this;
        this.da.cp(this.Fb);
        a = this.lg;
        b = this.Fb;
        a.b = b.b;
        a.a = b.a;
        this.type = 15
    }

    function bc() {
        B.call(this)
    }

    function Fb() {
        this.rd = 0;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.Cg = a;
        a = new v;
        a.b = 0;
        a.a = 0;
        a = new v;
        a.b = 0;
        a.a = 0;
        this.Il = a;
        this.ld = 0;
        L.call(this)
    }

    function jd(a) {
        this.state = 0;
        L.call(this);
        this.tb = a
    }

    function kd(a) {
        B.call(this);
        this.F =
            new ca(null, 1, "bubble" + a);
        this.type = 19
    }

    function Gb() {
        this.cr = !1;
        this.It = da.Ih();
        this.Ht = da.jk();
        this.ld = this.rd = 0;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.Cg = a;
        a = new v;
        a.b = 0;
        a.a = 0;
        a = new v;
        a.b = 0;
        a.a = 0;
        this.Il = a;
        L.call(this)
    }

    function Hb() {
        L.call(this)
    }

    function ld(a, b) {
        this.interval = new lb(1);
        L.call(this);
        this.$p = a;
        this.tb = b
    }

    function md(a) {
        this.interval = new lb(.2);
        this.Jb = da.Ih();
        L.call(this);
        this.tb = a
    }

    function nd(a) {
        this.scale = .01;
        this.interval = new lb(.2);
        this.Jb = da.Ih();
        L.call(this);
        this.Ox = a
    }

    function dc() {
        this.interval =
            new lb(.2);
        this.Jb = da.Ih();
        L.call(this)
    }

    function L() {
        la.call(this);
        L.count++
    }

    function id() {
        this.Ti = od.Ti();
        this.eh = this.alpha = 0;
        this.ji = 1;
        var a = new v;
        a.b = -100;
        a.a = -100;
        this.rb = a;
        B.call(this)
    }

    function C() {
        B.call(this)
    }

    function ta(a) {
        this.state = 0;
        this.ja = null;
        this.Lv = a
    }

    function pd() {}

    function Ib() {}

    function Pa() {
        Pa.Fg = this;
        B.call(this);
        this.dr = new P;
        this.type = 2
    }

    function kb() {
        this.loaded = !1;
        this.$f = -1;
        O.call(this);
        this.type = 5
    }

    function O() {
        this.ac = new tb(null, null);
        this.tn = this.state = 0;
        Jb.call(this);
        this.name = qd.Xk(this);
        this.type = 4
    }

    function le(a, b, c, d) {
        this.loaded = !1;
        this.Jx = a;
        this.Kx = b;
        this.Ix = c;
        this.lc = d
    }

    function tb(a, b) {
        null == b && (b = {});
        this.caller = a;
        this.Sc = b
    }

    function cf() {}

    function ec(a) {
        this.json = a
    }

    function me(a) {
        this.ui = [];
        this.Wi = [];
        try {
            if (a instanceof sa) this.hw(a);
            else if ("string" == typeof a)(new M('<\\?xml version="1.0"\\?>', "")).match(a) ? this.jw(a) : this.iw(a);
            else throw n.B("invalid source file");
            this.Td.lineHeight < this.info.size && (this.Td.lineHeight = this.info.size)
        } catch (b) {
            throw n.B("invalid .fnt file (" +
                z.va(n.co(b).jn()) + ")");
        }
    }

    function ne() {
        this.Vi = new fc(1024);
        this.io = new zc(1024);
        this.padding = Array(4);
        for (var a = 0; 4 > a;) {
            var b = a++;
            this.padding[b] = 0
        }
    }

    function oe() {
        this.x = this.y = this.Vj = this.v = this.offsetX = this.offsetY = this.On = 0;
        this.code = -1
    }

    function rd(a) {
        this.Jv = a
    }

    function Ac() {}

    function sd() {
        this.dn = !1;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.ve = a;
        a = new v;
        a.b = 0;
        a.a = 0;
        this.J = a;
        this.oa = new Bc
    }

    function td() {
        this.we = null;
        this.frames = [];
        this.scale = 1
    }

    function ud(a, b) {
        this.id = b.id;
        this.name = b.name;
        a = a.Oa;
        var c =
            a.J,
            d = b.oa,
            e = d.b,
            f = d.a,
            g = d.c,
            h = d.d,
            k = new H;
        k.b = e;
        k.a = f;
        k.c = g;
        k.d = h;
        this.Tx = d = k;
        e = d.b;
        f = d.a;
        g = d.c;
        h = d.d;
        k = new H;
        k.b = e;
        k.a = f;
        k.c = g;
        k.d = h;
        this.Fr = k;
        d.b /= c.b;
        d.a /= c.a;
        d.c /= c.b;
        d.d /= c.a;
        a.Nf && (e = c.b / a.je.b, a = c.a / a.je.a, d.b *= e, d.a *= a, d.c *= e, d.d *= a);
        (this.en = b.dn) ? (k = b.ve, e = k.b, f = k.a, a = k = new v, a.b = e, a.a = f, this.ve = a, k = b.J, e = k.b, f = k.a) : (a = k = new v, a.b = 0, a.a = 0, this.ve = a, e = b.oa.c, f = b.oa.d);
        a = k = new v;
        a.b = e;
        a.a = f;
        this.J = a
    }

    function pe(a, b) {
        this.bj = new Ia;
        this.Oa = a;
        this.scale = b.scale;
        this.we = b.we;
        this.Pl = b.frames.length;
        var c = new P(this.Pl);
        a = 0;
        for (var d = b.frames; a < d.length;) {
            var e = d[a];
            ++a;
            c.add(e.id)
        }
        c.sort(function(a, b) {
            return a - b
        }, !0);
        this.Sf = !0;
        var f = c.f[0];
        a = 1;
        for (d = this.Pl; a < d;) {
            e = a++;
            if (f + 1 != c.f[e]) {
                this.Sf = !1;
                break
            }++f
        }
        this.Sf && 16384 < c.f[c.g - 1] && (this.Sf = !1);
        if (this.Sf)
            for (this.Bl = (new P).X(c.f[c.g - 1] + 1, null), a = 0, d = b.frames; a < d.length;) b = d[a], ++a, c = new ud(this, b), this.Bl.f[c.id] = c, this.bj.v[b.name] = c;
        else
            for (a = this.Pl, --a, a |= a >> 1, a |= a >> 2, a |= a >> 4, a |= a >> 8, a |= a >> 16, this.Cl = new zc(++a), a = 0, d = b.frames; a < d.length;) b =
                d[a], ++a, c = new ud(this, b), this.Cl.set(c.id, c), this.bj.v[b.name] = c
    }

    function ea() {}

    function qe(a) {
        this.scale = 1;
        this.fi = this.qv = !1;
        this.Pf = this.yp = this.Ri = !0;
        this.Nf = !1;
        this.Ui = null;
        var b = new v;
        b.b = 0;
        b.a = 0;
        this.J = b;
        this.Za = null;
        this.je = this.J;
        if (this.pv = null != a) {
            this.Za = a.Za;
            b = a.J;
            var c = b.b,
                d = b.a;
            b = new v;
            b.b = c;
            b.a = d;
            this.J = b;
            b = a.je;
            c = b.b;
            d = b.a;
            b = new v;
            b.b = c;
            b.a = d;
            this.je = b;
            this.Ui = a.Ui;
            this.Nf = a.Nf;
            this.Pf = a.Pf;
            this.yp = a.yp;
            this.Ri = a.Ri;
            this.fi = a.fi;
            this.scale = a.scale
        }
    }

    function gc(a) {
        this.Gd = 0;
        this.F =
            a
    }

    function aa() {}

    function vd() {
        this.ti = new P(32);
        this.Ce = new P(32)
    }

    function re() {
        this.R = new H;
        this.overflow = !1;
        this.ho = new P(256);
        this.ti = new P(64)
    }

    function se() {
        this.ct = !1;
        this.Vi = !0;
        this.fo = 0;
        this.Pp = -1;
        this.ny = 0;
        this.align = -1;
        this.width = this.height = 100;
        this.size = 10;
        this.text = ""
    }

    function wd() {}

    function xd(a) {
        this.Mi = 0;
        nb.call(this, a)
    }

    function db(a, b) {
        this.Pj = this.dl = !1;
        this.Ib = !0;
        var c = new Ka("SpriteText");
        c.i |= 2048;
        ba.call(this, c, 7);
        this.ug = new vd;
        this.ra = new se;
        this.Hb = new re;
        null != a && a.appendChild(this);
        null != b && (this.re(b), this.ra.size = this.Sd.Yq);
        db.ae++
    }

    function eb(a) {
        this.repeat = -1;
        this.Se = 0;
        this.controller = null;
        this.length = -1;
        this.F = a
    }

    function Cc() {
        hc.call(this, 14)
    }

    function ia(a, b, c) {
        this.Am = -1;
        ba.call(this, new Ka(a), 10);
        this.i |= 1024;
        null != b && b.appendChild(this);
        if (null != c)
            for (a = 0; a < c.length;) b = c[a], ++a, this.appendChild(b);
        ia.ae++
    }

    function ca(a, b, c) {
        var d = new v;
        d.b = 0;
        d.a = 0;
        this.J = d;
        this.se = null;
        this.Zg = -1;
        ba.call(this, this.jb = new nb, 12);
        null != a && a.appendChild(this);
        null != b && this.re(b);
        null !=
            c && this.gc(c);
        ca.ae++
    }

    function ba(a, b) {
        this.Wc = this.Dl = null;
        this.i = 96;
        this.sh = !0;
        this.Gc = 1;
        this.Ua = this.Va = this.Ue = this.yd = this.Hc = 0;
        this.Ca = this.mb = 1;
        this.xa = this.ua = 0;
        this.node = a;
        this.node.client = this;
        this.type = b;
        ba.count++
    }

    function ub() {
        var a = new La;
        a.b = 1;
        a.a = 1;
        a.c = 1;
        this.scale = a;
        a = new La;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        this.translate = a;
        a = new Dc;
        Ec.ff(a);
        this.fa = a;
        this.m = 15;
        Ec.ff(this.fa);
        a = this.translate;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        a = this.scale;
        a.b = 1;
        a.a = 1;
        a.c = 1;
        this.m |= 63
    }

    function ua() {}

    function yd() {}

    function ma() {}

    function nb(a, b) {
        Za.call(this, a, b);
        this.type = 1
    }

    function Za(a, b) {
        this.Kd = null;
        pa.call(this, a, b);
        this.i |= 512;
        this.ge = this.oo(b);
        this.nn();
        this.Kd = Array(4)
    }

    function Ka(a) {
        this.wh = 0;
        this.Y = null;
        pa.call(this, a);
        this.i |= 256
    }

    function pa(a, b) {
        this.client = null;
        this.l = new ub;
        this.local = new ub;
        ic.call(this);
        this.name = a;
        this.key = jc.next();
        this.ye = this.oo(b);
        this.i = 232
    }

    function Qa() {}

    function vb(a) {
        this.state = a
    }

    function te(a) {
        this.R = new H;
        for (var b = [], c = 0; 4 > c;) {
            ++c;
            var d = new La;
            d.b = 0;
            d.a = 0;
            d.c = 0;
            b.push(d)
        }
        this.zj =
            b;
        b = [];
        for (c = 0; 4 > c;) ++c, b.push(new La);
        this.$e = b;
        this.Qg = !0;
        this.Bg = new P(1024);
        this.Na = a;
        this.Bg.Lc = !0
    }

    function ue(a, b, c, d, e, f, g, h) {
        null == h && (h = 0);
        null == g && (g = 0);
        null == f && (f = 0);
        null == e && (e = 0);
        null == d && (d = 1);
        null == c && (c = 1);
        null == b && (b = 1);
        null == a && (a = 1);
        this.Gw = a;
        this.Mu = b;
        this.Qs = c;
        this.Hs = d;
        this.Hw = e;
        this.Nu = f;
        this.Rs = g;
        this.Is = h
    }

    function ve() {
        Ma.call(this, X.i3);
        this.ht = new ue
    }

    function zd() {
        this.R = null;
        Ma.call(this, X.i2)
    }

    function Ad() {
        fb.call(this, 1)
    }

    function we() {
        this.rotation = this.zoom = 0;
        var a =
            new v;
        a.b = 0;
        a.a = 0;
        this.A = a;
        a = new v;
        a.b = 0;
        a.a = 0;
        this.size = a
    }

    function xe(a) {
        this.Na = null;
        this.pl = !0;
        this.ql = va.Ae();
        this.cn = !0;
        this.xe = va.Ae();
        this.Na = a;
        this.state = new we;
        a = new H;
        a.b = 0;
        a.a = 0;
        a.c = 512;
        a.d = 512;
        this.reset(a)
    }

    function wb() {
        var a = new H;
        a.b = a.a = Infinity;
        a.c = a.d = -Infinity;
        this.Ea = a;
        fb.call(this, 2)
    }

    function fb(a) {
        this.type = a;
        a = new La;
        a.b = 0;
        a.a = 0;
        a.c = 0;
        this.A = a;
        this.T = 0
    }

    function Fc(a) {
        null == a && (a = 1);
        Ma.call(this, X.i0);
        this.alpha = a
    }

    function Kb(a) {
        Ma.call(this, X.i1);
        this.mk = a;
        this.rf |= 1 << a.u <<
            4;
        if (5 == a.u) {
            var b = a.My;
            this.rf |= 1 << a.src.u << 12;
            this.rf |= 1 << b.u << 20
        }
    }

    function Ma(a) {
        this.type = a;
        this.Om = a.u;
        this.rf = 1 << this.Om
    }

    function Y(a, b) {
        null == b && (b = 8);
        this.Cf = !1;
        var c = new v;
        c.b = 0;
        c.a = 0;
        this.wl = c;
        this.aj = [];
        this.Lo = this.$g = !1;
        var d = this;
        Lb.call(this);
        this.Yb = Y.gi;
        1 < b && this.Yb > b && (this.Yb = b);
        "undefined" !== typeof window.orientation && 0 > Va.navigator.userAgent.indexOf("Mobile") && 980 == window.innerWidth && (this.Yb = 1);
        b = window.document;
        this.$g = !1;
        null != a && (this.canvas = b.getElementById(a), this.$g = null !=
            this.canvas);
        this.gl = !!navigator.platform && /iPad|iPhone/.test(navigator.platform);
        this.$g || (this.canvas = b.createElement("canvas"), this.canvas.id = "win" + Y.Ak++, this.canvas.style.setProperty("touch-action", "none"), this.canvas.style.setProperty("-ms-touch-action", "none"), this.canvas.style.setProperty("-webkit-overflow-scrolling", "auto"), this.canvas.style.setProperty("-webkit-overflow-scrolling", "none"), this.canvas.style.setProperty("user-select", "none"), b.body.appendChild(this.canvas), this.canvas.focus());
        this.Ou();
        Y.$c = Y.$c * this.Yb / Y.gi | 0;
        !this.gl && this.rv() && this.addListener(b, "fullscreenchange", !0, function() {
            var a = d.sk(window.document, null, ["isFullScreen", "fullScreen"]);
            null != a ? d.Lo = a : (a = d.sk(window.document, "fullscreenElement"), d.Lo = null != a)
        });
        this.addListener(b, "visibilitychange", null, function() {
            d.Aq(!window.document.hidden)
        });
        try {
            this.gl ? this.addListener(window, "orientationchange", !1, function() {}) : typeof window.onorientationchange && (window.onorientationchange = function() {})
        } catch (e) {}
        this.$g ?
            (a = this.size, a.b = this.canvas.width, a.a = this.canvas.height, this.Yc(this.nc())) : this.resize(320, 240)
    }

    function Bd() {
        this.ry = "rgba(0,0,0,0)";
        this.Lj = 0;
        this.by = va.Ae();
        this.ey = new P(32);
        this.dy = new P(32);
        this.it = ["none", "source-over", "multiply", "lighter", "screen", null];
        this.yf = null;
        this.Re = -1;
        this.Pc = "source-over";
        this.Rf = null;
        gb.call(this);
        this.Ar = this.Vr = !0;
        var a = Va.navigator.userAgent;
        this.Qm = 0 < a.indexOf("MSIE ") || 0 < a.indexOf("Trident/7.0") ? "msImageSmoothingEnabled" : "imageSmoothingEnabled"
    }

    function Mb(a) {
        this.frame = -1;
        this.Qj = this.Rj = 0;
        this.Sj = this.Tj = 1;
        this.oa = new H;
        this.i = 0;
        Ba.call(this, 11);
        if (null != a) {
            this.active = a.active;
            this.Hh = a.Hh;
            var b = this.oa,
                c = a.oa;
            b.b = c.b;
            b.a = c.a;
            b.c = c.c;
            b.d = c.d;
            this.frame = a.frame;
            this.i = a.i;
            this.Oa = a.Oa;
            this.Qj = a.Qj;
            this.Rj = a.Rj;
            this.Sj = a.Sj;
            this.Tj = a.Tj
        }
    }

    function Cd(a) {
        Ba.call(this, 3);
        this.Ei = a
    }

    function Dd(a) {
        this.xk = !0;
        Ba.call(this, 5);
        null != a && (this.active = a.active, this.Hh = a.Hh, this.color = a.color)
    }

    function Ba(a) {
        this.active = this.Hh = !0;
        this.type = a
    }

    function gb() {
        this.Pm = !0;
        this.mv =
            va.Ae();
        this.Fd = va.Ae();
        this.og = this.Ar = this.Vr = !1;
        this.xw = !0;
        this.Zt = !1;
        this.xf = null;
        this.Wb = 1;
        this.xi = null;
        this.bq = !1;
        this.Fk = va.Ae();
        this.ut = va.Ae();
        this.so = new te(this);
        this.Ee = new xe(this);
        this.Vb = 0;
        this.Vb |= 1 << X.i1.u;
        this.Vb |= 1 << X.i0.u;
        this.Vb |= 1 << X.i2.u;
        this.Vb |= 1 << X.i3.u
    }

    function Lb() {
        this.bw = function() {};
        this.$v = function() {};
        this.Aq = function() {};
        this.Yc = function() {};
        kc.call(this)
    }

    function kc() {
        this.sn = !1;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.size = a;
        this.Fh = new Bc;
        a = new H;
        a.b = 0;
        a.a = 0;
        a.c = 1;
        a.d = 1;
        this.viewport =
            a;
        a = new H;
        a.b = 1;
        a.a = 1;
        a.c = 1;
        a.d = 1;
        this.color = a
    }

    function Gc() {
        V.call(this, 9)
    }

    function ye() {
        this.Ip = new ze;
        this.lastIndex = 0;
        V.call(this, 8)
    }

    function ze() {
        this.alpha = 1;
        this.rotation = this.Nr = this.Or = 0;
        this.ar = this.br = 1
    }

    function hc(a) {
        this.Bj = this.Vf = this.Ve = 0;
        V.call(this, a)
    }

    function V(a) {
        this.Fc = !1;
        this.pb = 0;
        this.Yh = 1;
        this.Eb = this.oc = this.Dh = 0;
        this.type = a;
        this.repeat = wa.i1;
        V.Bn++
    }

    function ic() {
        this.mt = !0;
        this.controllers = null
    }

    function Ae(a, b) {
        this.value = a;
        this.tb = b
    }

    function Be(a, b) {
        this.name = a;
        this.frames =
            b;
        this.ai = 0;
        this.jf = b.length;
        a = 0;
        this.yk = b[a++].tb;
        for (var c = b[a++].tb; a < this.jf;)
            if (b[a++].tb != c) {
                this.yk = 0;
                break
            }
        this.Md = Array(this.jf + 1);
        this.values = Array(this.jf);
        for (a = 0; a < this.jf;) c = b[a], this.Md[a] = this.ai, this.values[a] = c.value, this.ai += c.tb, ++a;
        this.Md[a] = this.ai
    }

    function Ed() {}

    function xa() {}

    function df() {}

    function Fd(a) {
        this.ha = a
    }

    function Gd() {}

    function qd() {}

    function Ra() {}

    function gd(a) {
        null == a && (a = 1);
        this.tr(a)
    }

    function Hd(a) {
        this.tr(a)
    }

    function Ce() {
        this.ie = NaN;
        this.Ze = new v;
        this.Pi =
            3E38;
        this.kl = NaN;
        this.jl = new v;
        this.Pe = new v;
        this.Qe = new v
    }

    function De() {
        this.Ze = new v;
        this.Zu = Array(256);
        this.Pi = 3E38;
        this.pp = new H;
        this.Pe = new v;
        this.Qe = new v;
        for (var a = 0; 256 > a;) {
            var b = a++;
            this.Zu[b] = new H
        }
    }

    function Ee() {
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.tj = a;
        this.t = Infinity
    }

    function ef() {}

    function Hc() {}

    function ff() {}

    function Id() {}

    function Fe() {}

    function Dc() {}

    function Bc() {}

    function H() {}

    function La() {}

    function v() {}

    function Na() {}

    function da() {}

    function Ge(a) {
        this.uj = a
    }

    function hb() {
        this.Wv = 0;
        this.hl =
            [];
        this.touches = {};
        this.first = null;
        this.enabled = !1;
        this.Xb = 0;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.gb = a;
        this.ri = 0;
        a = new v;
        a.b = 1;
        a.a = 1;
        this.scale = a;
        this.Yb = window.devicePixelRatio;
        this.element = null;
        this.We = 0;
        this.maxTouchPoints = 1;
        this.passive = this.Br();
        this.ri |= 14;
        window.document.body.style.setProperty("touch-action", "none");
        window.document.body.style.setProperty("-ms-touch-action", "none");
        window.document.body.addEventListener("touchmove", function(a) {
            a.preventDefault()
        }, this.passive && {
            passive: !1
        });
        this.enable()
    }

    function He(a, b, c) {
        this.Xi = a;
        this.code = b;
        this.Xb = c
    }

    function ib() {
        this.enabled = !1;
        this.order = Array(255);
        this.keys = Array(255);
        this.location = ya.i0;
        this.Wf = new Ie;
        for (var a = 0; 255 > a;) {
            var b = a++;
            this.order[b] = 0
        }
        a = [];
        for (b = 0; 256 > b;) b++, a.push(0);
        var c = this.i = a;
        for (a = 37; 41 > a;) b = a++, c[b] |= 1;
        for (a = 48; 58 > a;) b = a++, c[b] |= 2;
        for (a = 65; 91 > a;) b = a++, c[b] |= 4;
        this.enable()
    }

    function Ie() {}

    function ha() {}

    function Z() {}

    function gf() {}

    function S() {}

    function Nb() {}

    function hf() {}

    function Ic(a) {
        this.Db = a;
        this.reset()
    }

    function Jd(a,
        b, c) {
        null == b && (b = !1);
        null == a && (a = 1);
        this.eb = null;
        this.g = 0;
        this.Lc = !1;
        this.$b = -2;
        this.de = 1 > a ? 1 : a;
        this.s = a;
        this.xd = b;
        null != c && (a = this.g = c.length, b = this.s, this.s = a > b ? a : b);
        this.f = Array(this.s + 1);
        this.f[0] = null;
        if (null != c) {
            a = this.f;
            b = 1;
            for (var d = this.g + 1; b < d;) {
                var e = b++;
                a[e] = c[e - 1]
            }
            this.Ow()
        }
    }

    function fc(a, b) {
        null == b && (b = -1);
        this.bb = this.g = 0;
        this.$b = -3; - 1 == b && (b = a);
        this.s = b;
        this.Fx = a;
        this.Vc = a - 1;
        this.bc = S.X(Array(a), -1);
        this.f = Array(3 * this.s);
        this.wb = Array(this.s);
        var c = 2;
        a = this.f;
        b = 0;
        for (var d = this.s; b <
            d;) b++, a[c - 1] = -2147483648, a[c] = -1, c += 3;
        a = this.wb;
        b = 0;
        for (d = this.s - 1; b < d;) c = b++, a[c] = c + 1;
        a[this.s - 1] = -1
    }

    function zc(a, b) {
        null == b && (b = -1);
        this.bb = this.g = 0; - 1 == b && (b = a);
        2 > b && (b = 2);
        this.s = b;
        this.cb = new fc(a, this.s);
        this.Uf = Array(this.s);
        this.wb = Array(this.s);
        this.cj = S.X(Array(this.s), -2147483648, 0, this.s);
        a = this.wb;
        b = 0;
        for (var c = this.s - 1; b < c;) {
            var d = b++;
            a[d] = d + 1
        }
        a[this.s - 1] = -1
    }

    function Kd() {}

    function Jc() {}

    function jc() {}

    function lc(a) {
        this.ce = null;
        this.Ml = 0;
        this.aa = a;
        this.ca = null;
        this.Z = !1
    }

    function Kc(a,
        b) {
        this.node = a;
        this.we = b;
        this.hb = this.next = null
    }

    function Ld() {
        this.dj = this.rh = 16;
        this.eb = null;
        this.g = 0;
        this.Nb = null;
        this.ik = !1;
        this.Tf = Array(this.dj);
        this.Ob = Array(this.rh)
    }

    function ob(a, b, c) {
        null == a && (a = 16);
        this.I = 0;
        this.$b = -2;
        this.s = this.de = 1 > a ? 1 : a;
        if (null != b) {
            a = this.I = b.length;
            var d = this.s;
            this.s = a > d ? a : d
        }
        this.f = Array(this.s);
        if (null != b) {
            a = this.f;
            d = 0;
            for (var e = this.I; d < e;) {
                var f = d++;
                a[f] = b[f]
            }
        }
        c && (this.$b = 0)
    }

    function Je() {}

    function Lc(a, b, c) {
        null == a && (a = 16);
        this.g = this.ma = 0;
        this.$b = -2;
        this.s = this.de =
            1 > a ? 1 : a;
        if (null != b) {
            a = this.g = b.length;
            var d = this.s;
            this.s = a > d ? a : d
        }
        this.f = Array(this.s);
        if (null != b) {
            a = this.f;
            d = 0;
            for (var e = this.g; d < e;) {
                var f = d++;
                a[f] = b[f]
            }
        }
        c && (this.$b = 0)
    }

    function Md() {}

    function Mc(a) {
        this.Db = a;
        this.f = this.Db.f;
        this.Wa = this.Db.g;
        this.pa = 0
    }

    function Nc(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    }

    function Oc() {}

    function Pc(a, b, c) {
        if (null != c) {
            this.Pb = a;
            this.cb = b;
            a = this.f = Array(this.Pb * this.cb);
            b = 0;
            for (var d = this.Pb * this.cb; b < d;) {
                var e = b++;
                a[e] = c[e]
            }
        } else this.Pb = a, this.cb = b,
            this.f = Array(this.Pb * this.cb)
    }

    function Ke() {
        Ga.call(this, J.getContext().createStereoPanner(), 1)
    }

    function Ob() {
        Ga.call(this, J.getContext().createGain(), 2)
    }

    function Nd() {
        Ga.call(this, J.getContext().createBufferSource(), 0)
    }

    function Od() {
        Ga.call(this, J.getContext().destination, 7)
    }

    function Ga(a, b) {
        this.inputs = [];
        this.n = a;
        this.type = b
    }

    function Pb(a, b) {
        pb.call(this, a, b);
        this.data = b.data
    }

    function Pd() {
        qa.call(this)
    }

    function Qc(a, b, c, d) {
        null == d && (d = !1);
        pb.call(this, a, b);
        this.loop = d;
        this.Zc = !0;
        this.node = b.data.cloneNode();
        null != c ? (this.min = a.Md[2 * c] / 1E3, this.max = a.Md[2 * c + 1] / 1E3, this.node.addEventListener("timeupdate", E(this, this.xq), !1), this.node.addEventListener("loadedmetadata", E(this, this.em), !1)) : (this.min = 0, this.max = b.data.duration, this.node.onended = E(this, this.stop), this.node.loop = d);
        this.di();
        this.node.play()
    }

    function Rc() {
        qa.call(this)
    }

    function jf() {}

    function J() {}

    function pb(a, b) {
        this.volume = 1;
        this.offset = 0;
        this.loop = !1;
        this.af = a;
        this.jd = b
    }

    function qa() {
        this.lc = Array(4096);
        this.vc = new P;
        this.aq = 1E4;
        this.El =
            this.Mv = this.Nv = 1;
        this.Rd = this.Up = 0;
        this.Pv = 16;
        this.Xp = 2;
        this.enabled = !0;
        this.Wx = .05
    }

    function mc(a, b, c) {
        this.id = a;
        this.data = b;
        this.vd = c;
        this.Lp = 0
    }

    function ja() {}

    function nc(a, b) {
        this.Jh = 0;
        this.url = a;
        this.Uj = b
    }

    function Le(a, b) {
        this.id = a;
        this.Mo = b
    }

    function l() {}

    function Qd(a, b) {
        this.ed = new nc(a, b.Uj);
        this.be = b
    }

    function Rd() {}

    function Qb(a, b, c) {
        null == a && (a = 2);
        this.Zp = this.Yp = 0;
        this.wd = [];
        this.ad = new Jd;
        this.cq = this.Ol = 0;
        this.Qv = a;
        this.dg = b;
        this.Uj = c
    }

    function Me(a, b, c) {
        this.url = a;
        this.data = b;
        this.ee =
            c
    }

    function kf() {}

    function F() {}

    function Sc(a) {
        this.O = new xb;
        this.ne = a
    }

    function yb() {}

    function oa(a, b, c) {
        this.xml = b;
        this.message = a;
        this.position = c;
        this.lineNumber = 1;
        for (a = this.sm = 0; a < c;) {
            var d = a++;
            d = b.charCodeAt(d);
            10 == d ? (this.lineNumber++, this.sm = 0) : 13 != d && this.sm++
        }
    }

    function oc(a) {
        this.current = 0;
        this.Ig = a
    }

    function Rb() {}

    function Tc() {}

    function Sb(a, b, c) {
        null == b && (b = 0);
        null == c && (c = a.length - b);
        if (0 > b || 0 > c || b + c > a.length) throw n.B(Sa.i2);
        this.a = a.a;
        this.gb = b;
        this.an = this.Te = c
    }

    function Sd() {}

    function Ne() {
        this.size =
            this.gb = 0
    }

    function Ia() {
        this.v = Object.create(null)
    }

    function $a() {
        this.v = {}
    }

    function Oe(a) {
        for (var b = a.length, c = 1; b > 1 << c;) ++c;
        if (8 < c || b != 1 << c) throw n.B("BaseCode : base length must be a power of two.");
        this.Be = a;
        this.Uv = c
    }

    function pc() {}

    function sa(a) {
        this.length = a.byteLength;
        this.a = new Uint8Array(a);
        this.a.Jy = a;
        a.Vu = this;
        a.Ky = this.a
    }

    function Uc(a, b, c) {
        n.call(this, String(a), 0, c);
        this.value = a
    }

    function Tb(a) {
        var b = this;
        this.id = setInterval(function() {
            b.Oh()
        }, a)
    }

    function n(a, b, c) {
        this.message = a;
        this.ak =
            null != c ? c : this
    }

    function Pe() {}

    function Qe(a, b) {
        this.da = a;
        this.depth = b
    }

    function Re() {
        this.list = new P
    }

    function Se() {
        this.og = !1
    }

    function Xa() {
        this.scale = 1;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.od = a;
        la.call(this)
    }

    function Td() {
        this.Zh = new H;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.$m = a;
        la.call(this)
    }

    function lf() {}

    function Ub() {
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.anchor = a;
        la.call(this)
    }

    function Ud() {
        la.call(this)
    }

    function qc() {
        la.call(this)
    }

    function la() {
        this.enabled = !0;
        this.Dh = this.Zb()
    }

    function Vd(a) {
        this.zoom = 0;
        var b = new v;
        b.b =
            0;
        b.a = 0;
        this.dh = b;
        b = new v;
        b.b = 0;
        b.a = 0;
        b = new v;
        b.b = 0;
        b.a = 0;
        this.fd = b;
        b = new H;
        b.b = 0;
        b.a = 0;
        b.c = 320;
        b.d = 480;
        this.R = b;
        this.l = a;
        this.mg(.5, .5)
    }

    function K() {}

    function Vb() {}

    function Wd(a) {
        this.Dr = new Te;
        this.Er = new Ce;
        this.im = [];
        this.fg = new P;
        var b = new v;
        b.b = 0;
        b.a = 0;
        this.rj = b;
        b = new v;
        b.b = 0;
        b.a = 0;
        this.sj = b;
        this.Ye = null;
        this.sp = !1;
        this.nl = !0;
        this.qp = 1;
        this.Kf = new H;
        this.l = a;
        this.fg.Lc = !0
    }

    function Xd(a) {
        this.mh = new De;
        this.wj = new H;
        var b = new La;
        b.b = 0;
        b.a = 0;
        b.c = 1;
        this.cy = b;
        this.Zh = new H;
        this.$m = new v;
        this.ub =
            0;
        this.l = a;
        this.result = new Yd;
        this.result.gh = new P;
        this.result.fh = null;
        this.result.tf = new P;
        b = new v;
        b.b = 0;
        b.a = 0;
        this.result.pm = b;
        b = new v;
        b.b = 0;
        b.a = 0;
        this.result.om = b;
        this.result.nm = -1;
        this.test = new Wd(a)
    }

    function Yd() {}

    function Zd(a) {
        this.wp = new Ee;
        this.xb = new P(4);
        this.l = a;
        this.xb.X(4, null);
        var b = this.xb,
            c = b.f,
            d = 0;
        for (b = b.g; d < b;) {
            var e = d++,
                f = new La;
            c[e] = f
        }
        b = this.xb;
        f = new La;
        c = d = new v;
        c.b = 1;
        c.a = 0;
        d = new v;
        d.b = 0;
        d.a = 0;
        f = za.ng(f, c, d);
        b.f[3] = f;
        b = this.xb;
        f = new La;
        c = d = new v;
        c.b = -1;
        c.a = 0;
        a = a.$k();
        d = new v;
        d.b = a;
        d.a = 0;
        f = za.ng(f, c, d);
        b.f[1] = f;
        this.xb.Lc = !0;
        this.mw = 15;
        this.sg()
    }

    function $d(a) {
        this.qn = this.size = 0;
        this.bf = new P(32);
        this.Do = a;
        this.bf.Lc = !0
    }

    function Ue(a) {
        this.l = a;
        this.lh = new $d(function() {
            var a = new P(32);
            a.Lc = !0;
            return a
        });
        this.kh = new $d(function() {
            var a = new P(4);
            a.Lc = !0;
            return a
        });
        this.set = new fc(64, 64)
    }

    function ac(a, b, c, d) {
        this.ka = new Pc(a, b);
        this.ka.ir(0);
        this.ef = c;
        this.cd = d
    }

    function Ve(a, b, c) {
        this.ka = a;
        this.cols = b;
        this.list = Array(6);
        this.Uw = c
    }

    function We(a) {
        this.map = new $a;
        this.l = a
    }

    function rc() {}

    function P(a, b, c) {
        null == a && (a = 2);
        this.eb = null;
        this.g = 0;
        this.Lc = !1;
        this.$b = -2;
        this.de = 2 > a ? 2 : a;
        null != b && 0 < b.length ? (this.g = b.length, this.f = b.slice(0, b.length), this.s = this.g) : (this.s = this.de, this.f = Array(this.s));
        c && (this.$b = 0)
    }

    function Xe() {}

    function zb() {}

    function Te() {
        this.ml = this.ie = NaN;
        this.ll = new v;
        this.Oi = new v;
        this.rp = NaN;
        this.Qi = new v;
        this.Ni = new v
    }

    function ae() {}

    function Ye() {
        this.ko = !0
    }

    function ab(a) {
        this.Qn = this.rotation = 0;
        this.Ao = this.nh = 1;
        this.Qc = this.ue = this.Hf = 0;
        this.T =
            this.scale = 1;
        var b = new v;
        b.b = 0;
        b.a = 0;
        this.force = b;
        b = new v;
        b.b = 0;
        b.a = 0;
        this.za = b;
        b = new v;
        b.b = 0;
        b.a = 0;
        this.A = b;
        this.ea = null;
        this.C = new Ye;
        this.Pa = this.qb = -1;
        this.code = 0;
        this.l = a;
        ab.count++;
        this.key = jc.next();
        this.T = 1 - K.Us / 2;
        this.yc = new P(4);
        this.yc.Lc = !0;
        this.kb(new Ud)
    }

    function Wb() {}

    function be() {}

    function yc() {
        this.vi = !0;
        var a = new v;
        a.b = 0;
        a.a = 0;
        this.kg = a;
        this.Ym = new P;
        this.Zm = new P;
        this.U = new H;
        this.Xx = 0;
        this.hp = new Se;
        this.il = new Re;
        this.Oe = new P(1024);
        this.wa = new Lc;
        this.fe = this.Xc = 0;
        this.cols = -1;
        this.Nt = !1;
        this.De = new P(4);
        this.Zf = 0;
        this.Hd = new H;
        this.time = 0;
        this.U.b = 0;
        this.U.a = 0;
        this.U.c = 0;
        this.U.d = -1;
        this.viewport = new Vd(this);
        a = ac.lj("0 0 0 0 0\n0 0 0 0", 0, 1);
        this.rr(a)
    }

    function Ab() {}

    function x(a) {
        this.nodeType = a;
        this.children = [];
        this.mi = new Ia
    }

    function ce() {}

    function sc() {
        null != sc.Ia && sc.Ia.stop();
        this.handle = (this.window = "undefined" !== typeof window) ? -1 : null;
        sc.Ia = this
    }

    function G() {}

    function Ta() {}

    function Ua() {}

    function xb() {
        this.a = ""
    }

    function z() {}

    function Ze() {
        this.jq = function() {};
        this.iq = function() {};
        this.Vp = 8;
        this.ao = null;
        this.i = 0;
        var a = .00392156862745098 * Bb.Nd(0),
            b = .00392156862745098 * Bb.Nd(0),
            c = .00392156862745098 * Bb.Nd(0),
            d = .00392156862745098 * Bb.Nd(0);
        null == d && (d = 1);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        var e = new H;
        e.b = a;
        e.a = b;
        e.c = c;
        e.d = d;
        this.color = e;
        this.fc = new Ka("root");
        this.i |= 32
    }

    function t() {}

    function $e() {
        this.Lg = this.Hi = this.Ii = this.Ie = this.le = this.Yg = this.Wg = this.Xg = this.Vg = this.Tg = this.Ug = 0
    }

    function N() {}

    function od() {}

    function Jb() {
        this.v = new $a;
        this.type =
            3;
        B.call(this)
    }

    function af(a) {
        this.type = a;
        this.list = new P
    }

    function cb() {
        this.Gl = this.Sl = 0;
        this.buffer = new P;
        this.qc = new P;
        B.call(this);
        this.type = 12
    }

    function Vc(a, b, c) {
        this.i = 0;
        this.source = a;
        this.type = b;
        this.Sc = c
    }

    function W() {}

    function A() {}

    function de() {}

    function na() {}

    function Aa() {}

    function Q() {}

    function tc() {}

    function M(a, b) {
        this.r = new RegExp(a, b.split("u").join(""))
    }

    function fa() {
        B.call(this);
        fa.Ia = this;
        Va.console.info("SmartyBubbles v2.1.8 2020-07-30 11:19:30 Generated by Haxe 4.1.2 polygonal");
        l.ax(fa.Rw);
        l.qx();
        this.ol();
        this.dv(fa.language);
        this.$u();
        this.up();
        this.gv();
        this.type = 0
    }

    function B() {
        this.ei = this.Bm = !0;
        this.time = 0;
        B.Dn++
    }

    function y() {
        return F.Eg(this, "")
    }

    function u(a, b) {
        a = Object.create(a);
        for (var c in b) a[c] = b[c];
        b.toString !== Object.prototype.toString && (a.toString = b.toString);
        return a
    }

    function Cb(a) {
        return a instanceof Array ? new oc(a) : a.iterator()
    }

    function E(a, b) {
        if (null == b) return null;
        null == b.Zj && (b.Zj = Va.An++);
        var c;
        null == a.fl ? a.fl = {} : c = a.fl[b.Zj];
        null == c && (c = b.bind(a), a.fl[b.Zj] =
            c);
        return c
    }
    fe.SmartyBubbles = fe.SmartyBubbles || {};
    var Ha = Ha || {},
        Wc;
    B.__name__ = "0";
    B.prototype = {
        L: function() {
            for (var a = this.firstChild, b; null != a;) b = a.K, a.L(), a = b;
            this.remove();
            B.Dn--
        },
        W: function(a) {
            a.parent = this;
            if (null != this.firstChild) {
                for (var b = this.firstChild; null != b.K;) b = b.K;
                b.K = a
            } else this.firstChild = a;
            a.Da()
        },
        removeChild: function(a) {
            if (a.parent == this) {
                if (a == this.firstChild) this.firstChild = a.K;
                else
                    for (var b = this.firstChild; null != b;) {
                        if (b.K == a) {
                            b.K = a.K;
                            break
                        }
                        b = b.K
                    }
                a.parent = a.K = null
            }
        },
        Ro: function(a,
            b, c) {
            if (c) {
                c = null;
                for (var d = this.firstChild; null != d;) {
                    if (null != a) {
                        if (F.ze(d, a)) {
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
                    var e = d.Ro(a, b, !0);
                    if (null != e) {
                        c = e;
                        break
                    }
                    d = d.K
                }
                return c
            }
            for (d = this.firstChild; null != d;) {
                if (null != a) {
                    if (F.ze(d, a)) {
                        if (null == b) break;
                        if (d.name == b) break
                    }
                } else if (d.name == b) break;
                d = d.K
            }
            return d
        },
        Lk: function(a, b) {
            for (var c = this.parent; null != c;) {
                if (null != a) {
                    if (F.ze(c, a)) {
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
        qk: function(a, b) {
            a = new Vc(this, a, b);
            for (b = this.parent; null != b;) {
                b.handle(a);
                if (0 < a.i) break;
                b = b.parent
            }
        },
        md: function(a, b) {
            this.Nq(new Vc(this, a, b), !0)
        },
        update: function(a) {
            this.time += a;
            for (var b = this.firstChild, c; null != b;) c = b.K, b.ei && b.parent == this && b.update(a), b = c
        },
        Ma: function(a) {
            for (var b = this.firstChild, c; null != b;) c = b.K, b.Bm && b.parent == this && 0 < b.time && b.Ma(a), b = c
        },
        handle: function() {},
        Da: function() {},
        Nq: function(a, b) {
            if (!b && (this.handle(a),
                    0 < (a.i & 1))) {
                a.i &= -2;
                return
            }
            b = this.firstChild;
            for (var c; null != b;) {
                c = b.K;
                if (0 < (a.i & 2)) break;
                b.Nq(a, !1);
                b = c
            }
        },
        Jh: function(a) {
            return Math.min(1, this.time / a)
        },
        j: B
    };
    Math.__name__ = "1";
    fa.__name__ = "2";
    fa.G = B;
    fa.prototype = u(B.prototype, {
        Kq: function() {
            var a = this,
                b = new Qb(4, function(a) {
                    l.setData(l.td(a.url), a.data, a.ee)
                }, "v=2.1.8");
            b.tag = "preload";
            var c = l.zu();
            if (0 == c.length) this.fm();
            else {
                var d = c.length,
                    e = function() {
                        0 == --d && a.fm()
                    };
                W.Qf(c, function(a) {
                    l.ag(a, e)
                });
                W.Qf(c, function(a) {
                    b.load(l.Ec(a))
                })
            }
        },
        ol: function() {
            function a() {
                window.removeEventListener("error",
                    a);
                null != b.hf && b.hf.stop();
                try {
                    b.hm()
                } catch (c) {}
            }
            var b = this;
            window.addEventListener("error", a)
        },
        gv: function() {
            G.Ag.ta(E(this, this.update));
            G.ig.ta(E(this, this.Ma));
            this.hf = new sc;
            this.hf.start()
        },
        $u: function() {
            if (ja.zp()) {
                var a = ja.Je();
                if (null == a) ja.enabled = !1;
                else if (W.Ab(["ogg", "mp3", "aac"], function(b) {
                        return b == a
                    })) {
                    l.$w(a);
                    for (var b = qa.Ia(), c = b instanceof Rc, d = function(a, d, e) {
                            d = c ? l.Ec(a) : d;
                            l.ov(a) ? b.Kh([0, 120, 1120, 1370, 2370, 2867, 3866, 4102, 5101, 5206, 6205, 10085, 11084, 14085, 15084, 16600, 17599, 20186,
                                21185, 27118, 28117, 29215, 30214, 32584, 33583, 35621, 36620, 37551, 38550, 38906, 39905, 41549, 42548, 42713, 43712, 44732, 45731, 46594, 47593, 47729, 48728, 48829, 49828, 50774
                            ], d, e) : b.hg(a, d, l.vd(a), e)
                        }, e = 0, f = fa.Rn; e < f.length;) {
                        var g = f[e];
                        ++e;
                        l.Kw(g, d)
                    }
                } else ja.enabled = !1
            }
        },
        up: function() {},
        dv: function(a) {
            null != fa.Jp && (Z.Im(a, ["tr", "ru", "es", "en", "de"]), l.Im(Z.Yi), a != l.Wo() ? Va.console.log("" + l.Wo() + "(" + a + ")") : Va.console.log(a), l.ag(fa.Jp, function(a) {
                Z.Yu(l.getData(a), fa.Yy)
            }))
        },
        fm: function() {},
        hm: function() {
            Va.console.log("SmartyBubbles crashed \ud83d\ude2d")
        },
        j: fa
    });
    M.__name__ = "3";
    M.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.ab = this.r.exec(a);
            this.r.cz = a;
            return null != this.r.ab
        },
        Ja: function(a) {
            if (null != this.r.ab && 0 <= a && a < this.r.ab.length) return this.r.ab[a];
            throw n.B("EReg::matched");
        },
        split: function(a) {
            return a.replace(this.r, "#__delim__#").split("#__delim__#")
        },
        replace: function(a, b) {
            return a.replace(this.r, b)
        },
        j: M
    };
    tc.__name__ = "4";
    tc.Cx = function() {
        tc.ek = !0;
        try {
            return window.famobi.showInterstitialAd().then(function() {
                tc.ek = !1
            })
        } catch (a) {
            return new Promise(function(a) {
                a(null)
            })
        }
    };
    Q.__name__ = "5";
    Q.Dv = function() {
        return Q.Op("quit", void 0)
    };
    Q.Op = function(a, b) {
        null == b && (b = "");
        var c = {};
        c.levelName = b;
        c.reason = a;
        return Q.send("EVENT_LEVELFAIL", c)
    };
    Q.Gv = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return Q.send("EVENT_LEVELSUCCESS", b)
    };
    Q.Ev = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return Q.send("EVENT_LEVELRESTART", b)
    };
    Q.Fv = function() {
        var a;
        null == a && (a = "");
        var b = {};
        b.levelName = a;
        return Q.send("EVENT_LEVELSTART",
            b)
    };
    Q.pause = function() {
        return Q.send("EVENT_PAUSE")
    };
    Q.resume = function() {
        return Q.send("EVENT_RESUME")
    };
    Q.Rp = function(a) {
        try {
            var b = {};
            b.liveScore = a;
            Q.send("EVENT_LIVESCORE", b)
        } catch (c) {}
    };
    Q.ly = function(a) {
        var b = {};
        b.totalScore = a;
        return Q.send("EVENT_TOTALSCORE", b)
    };
    Q.Ey = function(a, b) {
        var c = {};
        c.bgmVolume = a;
        c.sfxVolume = b;
        Q.send("EVENT_VOLUMECHANGE", c)
    };
    Q.bi = function(a, b) {
        try {
            window.famobi_analytics.trackStats(a, b)
        } catch (c) {}
    };
    Q.send = function(a, b) {
        try {
            return null != b ? window.famobi_analytics.trackEvent(a,
                b) : window.famobi_analytics.trackEvent(a)
        } catch (c) {
            return new Promise(function(a) {
                a(null)
            })
        }
    };
    Aa.__name__ = "6";
    Aa.If = function() {
        try {
            return window.famobi.audio.hasControls()
        } catch (a) {
            return !0
        }
    };
    Aa.Dp = function() {
        try {
            return window.famobi.audio.isEnabled("bgm")
        } catch (a) {
            return null
        }
    };
    Aa.Ep = function() {
        try {
            return window.famobi.audio.isEnabled("sfx")
        } catch (a) {
            return null
        }
    };
    Aa.isEnabled = function() {
        try {
            return window.famobi.audio.isEnabled()
        } catch (a) {
            return null
        }
    };
    na.__name__ = "7";
    na.X = function() {
        var a = window;
        a.famobi_muteAudio = function(a) {
            (na.muted = a) ? na.Kl(): na.hn()
        };
        a.famobi_pauseGame = function(a) {
            (na.paused = a) ? na.freeze(): na.Pr()
        };
        a.famobi_onUnmuteRequested = function() {
            na.hn();
            na.muted = !1
        };
        a.famobi_onMuteRequested = function() {
            na.Kl();
            na.muted = !0
        }
    };
    na.Kl = function() {};
    na.hn = function() {};
    na.freeze = function() {};
    na.Pr = function() {};
    de.__name__ = "8";
    de.load = function(a) {
        try {
            var b = window.famobi.getBrandingButtonImage(!0)
        } catch (d) {
            b = "more_games_graphic.png"
        }
        var c = window.document.createElement("img");
        c.crossOrigin =
            "Anonymous";
        c.onload = function() {
            a(c)
        };
        c.src = b
    };
    de.click = function() {
        try {
            window.famobi.openBrandingLink()
        } catch (a) {}
    };
    A.__name__ = "9";
    A.tk = function(a, b) {
        a = a.charCodeAt(b);
        if (a == a) return a
    };
    A.substr = function(a, b, c) {
        if (null == c) c = a.length;
        else if (0 > c)
            if (0 == b) c = a.length + c;
            else return "";
        return a.substr(b, c)
    };
    A.remove = function(a, b) {
        b = a.indexOf(b);
        if (-1 == b) return !1;
        a.splice(b, 1);
        return !0
    };
    A.now = function() {
        return Date.now()
    };
    W.__name__ = "B";
    W.Ig = function(a) {
        var b = [];
        for (a = Cb(a); a.P();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    W.Ab = function(a, b) {
        for (a = Cb(a); a.P();) {
            var c = a.next();
            if (b(c)) return !0
        }
        return !1
    };
    W.Qf = function(a, b) {
        for (a = Cb(a); a.P();) {
            var c = a.next();
            b(c)
        }
    };
    W.filter = function(a, b) {
        var c = [];
        for (a = Cb(a); a.P();) {
            var d = a.next();
            b(d) && c.push(d)
        }
        return c
    };
    W.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (b = Cb(a); b.P();) b.next(), ++c;
        else
            for (a = Cb(a); a.P();) {
                var d = a.next();
                b(d) && ++c
            }
        return c
    };
    W.find = function(a, b) {
        for (a = Cb(a); a.P();) {
            var c = a.next();
            if (b(c)) return c
        }
        return null
    };
    Vc.__name__ = "C";
    Vc.prototype = {
        get: function(a) {
            return null !=
                this.Sc ? ra.get(this.Sc, a) : null
        },
        j: Vc
    };
    cb.__name__ = "D";
    cb.G = B;
    cb.prototype = u(B.prototype, {
        L: function() {
            B.prototype.L.call(this);
            this.qc.o();
            this.qc = null;
            this.buffer.o();
            this.buffer = null
        },
        ta: function(a, b, c) {
            if (null != b)
                for (var d = 0; d < b.length;) c = b[d], ++d, this.ta(a, null, c);
            else c = null == c ? 0 : c + 1, c > this.Gl && (this.Gl = c), this.qc.resize(this.Gl + 1), b = this.qc.f[c], null == b && (b = new af(c), this.qc.f[c] = b), b.add(a) && this.Sl++
        },
        detach: function(a, b) {
            b = null == b ? 0 : b + 1;
            if (0 <= b && b < this.qc.g) {
                var c = this.qc.f[b];
                null != c && c.remove(a) &&
                    (this.Sl--, c.list.Lf() && (c.o(), this.qc.f[b] = null))
            }
        },
        pc: function(a, b) {
            this.buffer.g = 0;
            this.buffer.ec(2 * this.Sl);
            var c = this.buffer.f,
                d = 0;
            if (0 < this.qc.g) {
                var e = this.qc.f[0];
                if (null != e) {
                    var f = e.list.f;
                    var g = 0;
                    for (e = e.list.g; g < e;) c[g + d] = f[g], ++g;
                    d += e
                }
            }
            g = null == a ? 0 : a + 1;
            if (0 <= g && g < this.qc.g && (e = this.qc.f[g], null != e)) {
                f = e.list.f;
                g = 0;
                for (e = e.list.g; g < e;) c[g + d] = f[g], ++g;
                d += e
            }
            a = new Vc(this, a, b);
            g = 0;
            for (e = d; g < e;) c[g].handle(a), ++g
        },
        j: cb
    });
    af.__name__ = "E";
    af.prototype = {
        add: function(a) {
            if (this.list.contains(a)) return !1;
            var b = this.list;
            b.g == b.s && b.M();
            b.f[b.g++] = a;
            return !0
        },
        remove: function(a) {
            return this.list.remove(a)
        },
        o: function() {
            this.list.o();
            this.list = null
        },
        j: af
    };
    Jb.__name__ = "F";
    Jb.G = B;
    Jb.prototype = u(B.prototype, {
        L: function() {
            B.prototype.L.call(this);
            for (var a = this.v.iterator(); a.P();) a.next().o();
            this.v = null
        },
        handle: function(a) {
            B.prototype.handle.call(this, a);
            var b = this.v.v[a.type];
            if (null != b)
                for (var c = b.$h(), d = 0; d < c.length;) {
                    var e = c[d];
                    ++d;
                    e.C(a.Sc);
                    e.once && b.remove(e)
                }
        },
        j: Jb
    });
    od.__name__ = "11";
    od.Ti = function() {
        return "undefined" !==
            typeof window.orientation
    };
    od.yv = function() {
        var a;
        null == a && (a = !0);
        var b = Va.navigator.userAgent;
        return ((new M("iPad", "i")).match(b) || (new M("iPhone", "i")).match(b)) && (new M("WebKit", "i")).match(b) ? a ? !(new M("CriOS", "i")).match(b) : !0 : !1
    };
    var ra = {
        Df: function(a) {
            var b = {};
            if (null != a)
                if (1 == a.length) ra.set(b, a[0]);
                else
                    for (var c = 0, d = a.length; c < d;) ra.set(b, a[c], a[c + 1]), c += 2;
            return b
        },
        Js: function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        get: function(a, b) {
            return N.$(a, b)
        },
        set: function(a, b, c) {
            a[b] =
                null == c ? b : c;
            return a
        }
    };
    N.__name__ = "12";
    N.$ = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    N.gx = function(a, b, c) {
        a[b] = c
    };
    $e.__name__ = "13";
    $e.prototype = {
        $t: function(a) {
            var b = N.$;
            this.Lg = b(a, "bubblesCleared");
            this.Hi = b(a, "gamesPlayed");
            this.Ii = b(a, "gamesWon");
            this.Ie = b(a, "fewestBalls");
            this.le = b(a, "playTime");
            this.Yg = b(a, "countYellow");
            this.Wg = b(a, "countRed");
            this.Xg = b(a, "countTurquoise");
            this.Vg = b(a, "countPurple");
            this.Tg = b(a, "countBlue");
            this.Ug = b(a, "countGreen")
        },
        hy: function() {
            var a = {},
                b = N.gx;
            b(a, "bubblesCleared", this.Lg);
            b(a, "gamesPlayed", this.Hi);
            b(a, "gamesWon", this.Ii);
            b(a, "fewestBalls", this.Ie);
            b(a, "playTime", this.le);
            b(a, "countYellow", this.Yg);
            b(a, "countRed", this.Wg);
            b(a, "countTurquoise", this.Xg);
            b(a, "countPurple", this.Vg);
            b(a, "countBlue", this.Tg);
            b(a, "countGreen", this.Ug);
            return a
        },
        j: $e
    };
    t.__name__ = "14";
    t.load = function() {
        var a = xa.get("SmartyBubbles");
        if (null == a) t.save();
        else try {
            var b = N.$,
                c = JSON.parse(a),
                d = b(c, "version");
            null == d ? t.save() : (2 <= d && (t.zd = b(c, "music"), t.te = b(c, "sound"),
                t.$d = b(c, "highscore"), t.Xa.$t(b(c, "stats"))), 3 <= d && (t.Ac = b(c, "colorblind")), 4 <= d && (t.Qb = b(c, "track")), 5 <= d && (t.th = b(c, "hint")), 5 > d && t.save())
        } catch (e) {
            t.save()
        }
    };
    t.save = function() {
        var a = {
            version: 5
        };
        a.music = t.zd;
        a.sound = t.te;
        a.highscore = t.$d;
        a.colorblind = t.Ac;
        a.track = t.Qb;
        a.hint = t.th;
        a.stats = t.Xa.hy();
        xa.set("SmartyBubbles", JSON.stringify(a))
    };
    var ka = fe.SmartyBubbles = function() {
        this.er = null;
        var a = this;
        fa.call(this);
        na.X();
        na.Kl = function() {
            ja.Dc().qe(0)
        };
        na.hn = function() {
            ja.Dc().qe(1)
        };
        na.freeze = function() {
            a.hf.stop();
            ha.Sa().disable();
            ha.al().disable()
        };
        na.Pr = function() {
            a.hf.start();
            ha.Sa().enable();
            ha.al().enable()
        };
        ta.Lw(xc);
        ta.cf(null, Zb, null);
        ta.cf(Zb, Wa, new wc);
        ta.cf(qb, Yb, new Yc);
        ta.cf(Yb, qb, new Xc);
        ta.cf(null, null, new wc);
        ka.yb.fc.appendChild(O.Ff().node);
        t.load();
        Aa.If() || (t.Qb = Ra.xj(0, 3));
        var b = !1;
        null != Aa.Dp() && (t.zd = Aa.Dp(), b = !0);
        null != Aa.Ep() && (t.te = Aa.Ep(), b = !0);
        b && t.save();
        null != Aa.isEnabled() && ja.Dc().qe(Aa.isEnabled() ? 1 : 0);
        this.Kq();
        this.type = 1
    };
    ka.__name__ = "15";
    ka.X = fe.SmartyBubbles.init = function(a) {
        xa.So =
            function() {
                return window.famobi.localStorage
            };
        fa.language = a;
        fa.Jp = 5;
        fa.Rn = [16].concat([20, 19, 18, 17]);
        new ka
    };
    ka.G = fa;
    ka.prototype = u(fa.prototype, {
        update: function(a) {
            fa.prototype.update.call(this, a);
            ka.yb.update(a)
        },
        Ma: function(a) {
            fa.prototype.Ma.call(this, a);
            ka.yb.Ma()
        },
        ol: function() {
            fa.prototype.ol.call(this)
        },
        up: function() {
            var a = this;
            ka.yb = new Ze;
            ka.yb.Vp = 2;
            ka.yb.i = 3;
            var b = .00392156862745098 * Bb.Nd(1),
                c = .00392156862745098 * Bb.Nd(169),
                d = .00392156862745098 * Bb.Nd(253),
                e = .00392156862745098 * Bb.Nd(255);
            null == e && (e = 1);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = 0);
            var f = new H;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            ka.yb.color = f;
            ka.yb.iq = function() {
                a.md(1)
            };
            ka.yb.jq = function(b) {
                b ? (a.md(2), na.paused || (a.hf.start(), ha.Sa().enable()), na.muted || tc.ek || ja.Dc().qe(1)) : (a.md(3), a.hf.stop(), ja.Dc().qe(0), ha.Sa().disable())
            };
            ka.yb.av();
            ka.yb.window.Un()
        },
        hm: function() {
            fa.prototype.hm.call(this);
            this.Um();
            ha.Sa().o();
            ha.al().o();
            ka.yb.window.Cc();
            new ke
        },
        fm: function() {
            var a = Pa.Ia();
            this.W(a);
            a.Mx(Zb)
        },
        Um: function() {
            null == this.er &&
                ka.yb.window instanceof Y && (this.er = F.Aa(ka.yb.window, Y).Um(.1))
        },
        j: ka
    });
    Ze.__name__ = "16";
    Ze.prototype = {
        av: function() {
            var a = this,
                b = new Y(this.ao, this.Vp);
            b.bv(0 < (this.i & 32), 0 < (this.i & 16));
            b.Uu();
            this.window = b;
            this.Na = new Bd;
            this.Na.bq = 0 < (this.i & 1);
            this.Na.ex();
            this.window.mx(this.Na);
            null != this.color && (this.window.color = this.color);
            this.Na.clear();
            this.window.Aq = function(b) {
                a.jq(b)
            };
            this.window.$v = function() {};
            this.window.bw = function() {};
            this.window.Yc = function() {
                a.Qr();
                a.iq(a.window.nc())
            };
            ha.Sa().Yb =
                b.Yb;
            null != this.ao && (ha.Sa().element = b.canvas, ha.Sa().scale.b = b.canvas.width / b.canvas.scrollWidth, ha.Sa().scale.a = b.canvas.height / b.canvas.scrollHeight);
            this.Qr()
        },
        update: function(a) {
            aa.update(this.fc, a);
            ma.ln(this.fc, a)
        },
        Ma: function() {
            aa.zb(this.fc);
            var a = 0 == (this.i & 2);
            ua.reset();
            0 < (this.i & 4) ? this.fc.yg(!0, a) : ma.yg(this.fc, a);
            0 < (this.i & 4) ? this.fc.ci() : ma.ci(this.fc);
            null != this.Na && (this.Na.clear(), this.Na.Dt(this.fc))
        },
        jc: function(a, b) {
            if (!ea.Ab(a)) {
                var c = null,
                    d = null;
                null == b ? 65535 > a && (b = l.qu(a),
                    l.Ec(a), null != b && (d = pc.decode(b, !0))) : (b = l.getData(b), "string" == typeof b ? c = new ec(b) : d = sa.Tl(b));
                if (null != d) switch (c = d.a[0], b = String.fromCodePoint(c), c = d.a[1], b += String.fromCodePoint(c), c = d.a[2], b += String.fromCodePoint(c), b) {
                    case "BMF":
                        c = new rd(d);
                        break;
                    case "TPJ":
                        c = new ec(cf.wy(d));
                        break;
                    default:
                        c = new ec(l.Ys(d))
                }
                this.Na.createTexture(a, l.getData(a), c);
                d = ea.get(a);
                l.Qu(a) && "sd" == l.Eu() && (d.scale = 2)
            }
        },
        Qr: function() {
            var a = this.window.nc(),
                b = this.Na.Ee,
                c = a.b;
            a = a.a;
            var d = new H;
            d.b = 0;
            d.a = 0;
            d.c = c;
            d.d =
                a;
            b.reset(d)
        },
        j: Ze
    };
    z.__name__ = "17";
    z.va = function(a) {
        return F.Eg(a, "")
    };
    z.parseInt = function(a) {
        if (null != a)
            for (var b = 0, c = a.length; b < c;) {
                var d = b++,
                    e = a.charCodeAt(d);
                if (8 >= e || 14 <= e && 32 != e && 45 != e)
                    if (b = a.charCodeAt(d + 1), a = parseInt(a, 120 == b || 88 == b ? 16 : 10), isNaN(a)) break;
                    else return a
            }
        return null
    };
    xb.__name__ = "18";
    xb.prototype = {
        j: xb
    };
    Ua.__name__ = "19";
    Ua.np = function(a, b) {
        for (var c = "", d = 0, e = a; d < e.length;) {
            a = e;
            var f = d++,
                g = a.charCodeAt(f);
            55296 <= g && 56319 >= g && (g = g - 55232 << 10 | a.charCodeAt(f + 1) & 1023);
            a = g;
            65536 <=
                a && ++d;
            switch (a) {
                case 34:
                    c = b ? c + "&quot;" : c + String.fromCodePoint(a);
                    break;
                case 38:
                    c += "&amp;";
                    break;
                case 39:
                    c = b ? c + "&#039;" : c + String.fromCodePoint(a);
                    break;
                case 60:
                    c += "&lt;";
                    break;
                case 62:
                    c += "&gt;";
                    break;
                default:
                    c += String.fromCodePoint(a)
            }
        }
        return c
    };
    Ua.Fp = function(a, b) {
        a = A.tk(a, b);
        return 8 < a && 14 > a ? !0 : 32 == a
    };
    Ua.Sp = function(a) {
        for (var b = a.length, c = 0; c < b && Ua.Fp(a, c);) ++c;
        return 0 < c ? A.substr(a, c, b - c) : a
    };
    Ua.Vw = function(a) {
        for (var b = a.length, c = 0; c < b && Ua.Fp(a, b - c - 1);) ++c;
        return 0 < c ? A.substr(a, 0, b - c) : a
    };
    Ua.trim =
        function(a) {
            return Ua.Sp(Ua.Vw(a))
        };
    Ta.__name__ = "1A";
    Ta.prototype = {
        ta: function(a) {
            if (null == this.list) return this.list = new Fd(a), !0;
            for (var b = this.list; null != b;) {
                if (b.ha == a) return !1;
                b = b.next
            }
            a = new Fd(a);
            a.next = this.list;
            this.list = a;
            return !0
        },
        detach: function(a) {
            if (null == a && null != this.current) return this.detach(this.current), !0;
            var b = this.list;
            if (null == b) return !1;
            if (b.ha == a) return this.next == b && (this.next = b.next), b.ha = null, this.list = b.next, b.next = null, !0;
            var c = b;
            for (b = b.next; null != b;) {
                if (b.ha == a) return b.ha =
                    null, c.next = b.next, b.next = null, this.next == b && (this.next = c.next), !0;
                c = b;
                b = b.next
            }
            return !1
        },
        o: function() {
            for (var a = this.list; null != a;) this.next = a.next, a.ha = null, a.next = null, a = this.next;
            this.list = this.next = null
        },
        j: Ta
    };
    G.__name__ = "1B";
    G.ta = function(a, b) {
        null == b && (b = !1);
        b ? G.ig.ta(a) : G.Ag.ta(a)
    };
    G.detach = function(a, b) {
        null == b && (b = !1);
        b ? G.ig.detach(a) : G.Ag.detach(a)
    };
    G.advance = function(a) {
        var b = a / 1E3;
        G.time += b;
        if (!(0 < G.Wp && G.time < G.Se + 1 / G.Wp)) {
            G.Se = G.time;
            G.time > G.Kp + 1 && (G.Jo = Math.round(.25 * G.Ql + .75 * G.Jo),
                G.Kp = G.time, G.Ql = 0);
            G.Ql++;
            a = G.xt;
            G.Qd += b * G.Yh;
            .2 < G.Qd && (G.Qd = .2);
            for (; G.Qd > a;) {
                G.Qd -= a;
                b = G.Ag;
                for (var c = b.list; null != c;) b.next = c.next, b.current = c.ha, c.ha(a), c = b.next;
                b.next = null;
                b.current = null;
                G.Go += a;
                G.first = !1
            }
            if (!G.first) {
                a = G.Qd / a;
                b = G.ig;
                for (c = b.list; null != c;) b.next = c.next, b.current = c.ha, c.ha(a), c = b.next;
                b.next = null;
                b.current = null
            }
        }
    };
    sc.__name__ = "1C";
    sc.prototype = {
        start: function() {
            var a = this;
            this.stop();
            if (this.window && "undefined" !== typeof window.requestAnimationFrame) {
                var b = function(c) {
                    a.handle =
                        window.requestAnimationFrame(b);
                    G.advance(c - a.now);
                    a.now = c
                };
                this.now = 0;
                this.handle = window.requestAnimationFrame(b)
            } else b = function() {
                a.handle = setTimeout(b, 16);
                var c = a.now;
                a.now = new Date;
                G.advance(a.now - c)
            }, this.now = new Date, this.handle = setTimeout(b, 16)
        },
        stop: function() {
            this.window ? 0 > this.handle || (window.cancelAnimationFrame(this.handle), this.handle = -1) : null != this.handle && (clearInterval(this.handle), this.handle = null)
        },
        j: sc
    };
    ce.__name__ = "1D";
    ce.st = function(a) {
        return new(Function.prototype.bind.apply(a, [null].concat([])))
    };
    ce.Mt = function(a) {
        var b = Ha[a.H];
        b = b[b.Tb[a.u]].hi;
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
    var Bb = {
            Nd: function(a) {
                return 0 > a ? 4294967296 + a : a + 0
            }
        },
        T = {
            toString: function(a) {
                switch (a) {
                    case 0:
                        return "Element";
                    case 1:
                        return "PCData";
                    case 2:
                        return "CData";
                    case 3:
                        return "Comment";
                    case 4:
                        return "DocType";
                    case 5:
                        return "ProcessingInstruction";
                    case 6:
                        return "Document"
                }
            }
        };
    x.__name__ = "1E";
    x.parse = function(a) {
        return yb.parse(a)
    };
    x.createElement = function(a) {
        var b =
            new x(x.Element);
        if (b.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == b.nodeType ? "null" : T.toString(b.nodeType)));
        b.nodeName = a;
        return b
    };
    x.wi = function(a) {
        var b = new x(x.ds);
        if (b.nodeType == x.Document || b.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == b.nodeType ? "null" : T.toString(b.nodeType)));
        b.nodeValue = a;
        return b
    };
    x.pt = function(a) {
        var b = new x(x.$r);
        if (b.nodeType == x.Document || b.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == b.nodeType ?
            "null" : T.toString(b.nodeType)));
        b.nodeValue = a;
        return b
    };
    x.createComment = function(a) {
        var b = new x(x.Comment);
        if (b.nodeType == x.Document || b.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == b.nodeType ? "null" : T.toString(b.nodeType)));
        b.nodeValue = a;
        return b
    };
    x.qt = function(a) {
        var b = new x(x.cs);
        if (b.nodeType == x.Document || b.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == b.nodeType ? "null" : T.toString(b.nodeType)));
        b.nodeValue = a;
        return b
    };
    x.createProcessingInstruction = function(a) {
        var b =
            new x(x.ProcessingInstruction);
        if (b.nodeType == x.Document || b.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == b.nodeType ? "null" : T.toString(b.nodeType)));
        b.nodeValue = a;
        return b
    };
    x.createDocument = function() {
        return new x(x.Document)
    };
    x.prototype = {
        get: function(a) {
            if (this.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            return this.mi.v[a]
        },
        set: function(a, b) {
            if (this.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " +
                (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            this.mi.v[a] = b
        },
        Ab: function(a) {
            if (this.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            return Object.prototype.hasOwnProperty.call(this.mi.v, a)
        },
        attributes: function() {
            if (this.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            return Ia.zv(this.mi.v)
        },
        Hk: function(a) {
            if (this.nodeType !=
                x.Document && this.nodeType != x.Element) throw n.B("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            for (var b = [], c = 0, d = this.children; c < d.length;) {
                var e = d[c];
                ++c;
                if (e.nodeType == x.Element) {
                    if (e.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == e.nodeType ? "null" : T.toString(e.nodeType)));
                    var f = e.nodeName == a
                } else f = !1;
                f && b.push(e)
            }
            return new oc(b)
        },
        Wt: function() {
            if (this.nodeType != x.Document && this.nodeType != x.Element) throw n.B("Bad node type, expected Element or Document but found " +
                (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            for (var a = 0, b = this.children; a < b.length;) {
                var c = b[a];
                ++a;
                if (c.nodeType == x.Element) return c
            }
            return null
        },
        W: function(a) {
            if (this.nodeType != x.Document && this.nodeType != x.Element) throw n.B("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != x.Document && this.nodeType != x.Element) throw n.B("Bad node type, expected Element or Document but found " +
                (null == this.nodeType ? "null" : T.toString(this.nodeType)));
            return A.remove(this.children, a) ? (a.parent = null, !0) : !1
        },
        toString: function() {
            return Sc.print(this)
        },
        j: x
    };
    Ab.__name__ = "1F";
    Ab.__isInterface__ = !0;
    yc.__name__ = "20";
    yc.__interfaces__ = [Ab];
    yc.G = Ta;
    yc.prototype = u(Ta.prototype, {
        update: function(a) {
            this.time += a;
            this.yy(a);
            var b = this.Ra;
            a = b.f;
            var c = 0;
            for (b = b.g; c < b;) {
                var d = c++;
                d = a[d];
                d.C.ro = !this.viewport.Ap(d.A, d.T)
            }
            0 <= K.si && rc.Rx(this);
            this.vi && (this.vi = !1, this.on());
            this.trim();
            this.zg()
        },
        Em: function(a) {
            this.viewport.wg(a)
        },
        Gy: function(a) {
            this.viewport.Kr(a, a)
        },
        Hj: function(a) {
            this.viewport.Jd(a);
            this.Kc.sg()
        },
        mg: function(a, b) {
            this.viewport.mg(a, b);
            this.Kc.sg()
        },
        rr: function(a) {
            var b = this,
                c = a.ka;
            this.Ra = new P(c.Pb * c.cb);
            this.Ra.Lc = !0;
            this.ef = a.ef;
            this.cd = a.cd;
            this.cols = a.ka.Pb;
            this.ka = new We(this);
            this.viewport.ur(0);
            this.La = new Ld;
            this.La.nk = function(a, c) {
                if (b.Oe.Lf()) return new Kc(a, c);
                c = b.Oe;
                c = c.f[--c.g];
                c.node = a;
                return c
            };
            this.La.Nh = function(a) {
                if (1024 > b.Oe.g) {
                    var c = b.Oe;
                    c.g == c.s && c.M();
                    c.f[c.g++] = a
                }
            };
            this.Zf = 0;
            this.lw(a.ka);
            this.Hd = new H;
            this.zg();
            this.U.b = this.$k() / 2;
            this.U.a = 0;
            this.U.c = 0;
            this.U.d = -1;
            this.Fl = new Ue(this);
            this.Kc = new Zd(this);
            this.oe = new Xd(this);
            this.Kc.sg()
        },
        Gp: function() {
            return this.viewport.vg(this.fp()) + .1 >= this.viewport.R.a
        },
        Xd: function(a) {
            null == a && (a = 0);
            if (0 == this.wa.g) return null;
            var b = this.wa;
            return b.f[(a + b.ma) % b.s]
        },
        Ry: function() {
            return this.wa.g
        },
        zl: function(a) {
            var b = new ab(this);
            b.code = a;
            b.C.Mg = !0;
            b.C.loaded = !0;
            b.C.connected = !1;
            a = b.A;
            var c = this.U,
                d = c.a;
            a.b = c.b;
            a.a = d;
            this.Ra.add(b);
            b.kb(new Xa);
            a = this.wa.g;
            c = this.wa;
            c.s == c.g && c.M();
            c.f[(c.g++ + c.ma) % c.s] = b;
            for (c = this.list; null != c;) this.next = c.next, this.current = c.ha, c.ha.Yv(b, a), c = this.next;
            this.current = this.next = null;
            return b
        },
        po: function(a) {
            var b = new ab(this);
            b.code = a;
            this.Ra.add(b);
            for (a = this.list; null != a;) this.next = a.next, this.current = a.ha, a.ha.Zl(b), a = this.next;
            this.current = this.next = null;
            return b
        },
        uo: function(a) {
            a.C.connected && (a.C.connected = !1, this.Zf--, null != a.ea && this.La.removeNode(a.ea), this.ka.Vq(a), this.vi = !0)
        },
        Fe: function(a,
            b, c) {
            c.b = 1;
            c.b += 2 * a;
            (b & 1) == this.cd && (c.b += 1);
            c.a = 1 + 1.7320508075 * b;
            c.a = -c.a
        },
        uw: function(a, b) {
            b.y = -(a.a / 1.7320508075 | 0) - (0 < a.a ? 1 : 0);
            if ((b.y & 1) == this.cd) {
                if (1 > a.b) return !1;
                b.x = (a.b - 1) / 2 | 0
            } else {
                if (0 > a.b) return !1;
                b.x = a.b / 2 | 0
            }
            return b.x >= this.cols ? !1 : !0
        },
        Zs: function() {
            if (0 == this.wa.g || 0 > K.si && !this.De.Lf() || this.time - this.Xx < K.si) return !1;
            if (0 <= K.si) {
                var a = !1,
                    b = this.wa,
                    c = b.f[b.ma];
                b = this.De;
                var d = b.f,
                    e = 0;
                for (b = b.g; e < b;) {
                    var f = e++;
                    d[f].jv(c) && (a = !0)
                }
                if (a) return !1
            }
            return !0
        },
        Ax: function() {
            if (0 == this.wa.g) return !1;
            var a = this.wa;
            a = a.f[a.ma];
            this.zt();
            a.C.Mg = !0;
            a.kb(new Td);
            this.De.add(a);
            return !0
        },
        zt: function() {
            if (0 == this.wa.g) return !1;
            var a = this.wa,
                b = a.f[a.ma++];
            a.ma == a.s && (a.ma = 0);
            a.g--;
            b.C.Mg = !1;
            b.C.loaded = !1;
            b.df(Xa);
            return !0
        },
        yy: function(a) {
            var b = 8 * this.Ra.g,
                c = 7 * b,
                d = this.Zm,
                e = this.Ym;
            d.g < c && (d.X(c, null), e.X(c, null));
            c = lf.Ak;
            for (var f = 0; 7 > f;) {
                var g = f++;
                c[g] = 0
            }
            var h = this.Ra,
                k = h.f;
            f = 0;
            for (var q = h.g; f < q;) {
                var r = f++;
                r = k[r];
                r.Fa = a;
                h = r.yc;
                for (var p = h.f, m = 0, l = h.g; m < l;) {
                    h = m++;
                    h = p[h];
                    var n = g = h.Dh;
                    var v = c[n];
                    c[n] =
                        v + 1;
                    n = v;
                    g = g * b + n;
                    e.f[g] = h;
                    d.f[g] = r
                }
            }
            for (g = 0; 7 > g;) {
                n = c[g];
                a = b * g;
                for (f = a + n; a < f;) r = d.f[a], null != r.l && (h = e.f[a], h.enabled && h.update(r)), ++a;
                ++g
            }
        },
        Wl: function(a, b) {
            for (var c = this.list; null != c;) this.next = c.next, this.current = c.ha, c.ha.Wl(a, b), c = this.next;
            this.current = this.next = null;
            K.ip && this.hp.apply(a, b)
        },
        Yl: function(a, b) {
            null != this.qh && this.qh.C.connected && !this.qh.C.gf && this.qh.pg();
            this.qh = a;
            this.De.remove(a);
            this.Zf++;
            a.C.Mg = !1;
            if (null == b) {
                var c = a.za;
                c.b = 0;
                c.a = 0;
                c = a.force;
                c.b = 0;
                c.a = 0
            }
            c = a.A;
            var d = c.b,
                e = c.a;
            c = new v;
            c.b = d;
            c.a = e;
            var f = c;
            this.kt(a, b);
            a.ue = K.Mc.ue;
            a.Qc = K.Mc.Qc;
            a.kb(new Ub);
            c = a.force;
            c.b = 0;
            c.a = 0;
            c = a.za;
            d = c.b;
            e = c.a;
            c = new v;
            c.b = d;
            c.a = e;
            d = c;
            mf.normalize(d);
            c = a.za;
            c.b = 0;
            c.a = 0;
            K.Mc.enabled && this.il.yw(a);
            for (c = this.list; null != c;) this.next = c.next, this.current = c.ha, c.ha.Yl(a, b), c = this.next;
            this.current = this.next = null;
            K.Mc.enabled && this.il.apply(a, f, d)
        },
        Xl: function(a, b) {
            var c = null;
            0 == b ? c = K.Ws : 2 == b && (c = K.Vs);
            if (null == c || "destroy" == c) this.De.remove(a), a.L();
            else {
                a.za.b = 0;
                a.za.a = 0;
                a.force.b = 0;
                a.force.a = 0;
                c = a.A;
                var d = this.U,
                    e = d.a;
                c.b = d.b;
                c.a = e;
                a.kb(new Xa);
                c = this.wa.$h();
                this.wa.clear();
                d = this.wa;
                d.s == d.g && d.M();
                d.f[(d.g++ + d.ma) % d.s] = a;
                for (e = 0; e < c.length;) {
                    var f = c[e];
                    ++e;
                    d = this.wa;
                    d.s == d.g && d.M();
                    d.f[(d.g++ + d.ma) % d.s] = f
                }
            }
            for (c = this.list; null != c;) this.next = c.next, this.current = c.ha, c.ha.Xl(a, b), c = this.next;
            this.current = this.next = null
        },
        Vl: function(a, b) {
            for (var c = this.list; null != c;) this.next = c.next, this.current = c.ha, c.ha.Vl(a, b), c = this.next;
            this.current = this.next = null
        },
        fp: function() {
            this.Fe(0,
                this.Xc, this.kg);
            return this.kg.a - 1
        },
        $k: function() {
            return 2 * this.cols + 1 * this.ef
        },
        Zk: function() {
            this.Fe(0, this.fe, this.kg);
            return this.kg.a + 1
        },
        du: function(a) {
            null == a && (a = !1);
            var b = this.U.a - this.Zk();
            0 > b && (b = 0);
            return a ? b / 1.7320508075 : b
        },
        bx: function(a, b) {
            null == b && (b = !1);
            b ? (b = new v, b.b = 0, b.a = 0, this.Fe(0, this.fe - (a | 0), b), this.Rh(this.U.b, b.a)) : this.Rh(this.U.b, this.Zk() + a)
        },
        Rh: function(a, b) {
            this.U.b = a;
            this.U.a = b;
            this.Kc.sg()
        },
        cu: function() {
            return 57.29577951308232 * Math.atan2(this.U.d, this.U.c) + 90
        },
        py: function(a,
            b) {
            this.Rh(this.U.b + a, this.U.a + b)
        },
        qy: function(a) {
            this.py(0, -1.7320508075 * a)
        },
        Hu: function(a) {
            var b = 0,
                c = this.Ra,
                d = c.f,
                e = 0;
            for (c = c.g; e < c;) {
                var f = e++;
                f = d[f];
                this.viewport.Ap(f.A, f.T) && (a[b++] = f)
            }
            return b
        },
        zg: function() {
            var a = this.Hd;
            a.b = a.a = Infinity;
            a.c = a.d = -Infinity;
            if (0 == this.Zf) a = this.Hd, a.b = 0, a.a = 0, a.c = 0, a.d = 0;
            else {
                var b = this.Ra,
                    c = b.f,
                    d = 0;
                for (b = b.g; d < b;) {
                    a = d++;
                    var e = c[a];
                    if (e.C.connected) {
                        a = this.Hd;
                        e = e.A;
                        var f = e.b;
                        f < a.b ? a.b = f : f > a.c && (a.c = f);
                        e = e.a;
                        e < a.a ? a.a = e : e > a.d && (a.d = e)
                    }
                }
                uc.offset(this.Hd, 1, 1)
            }
        },
        au: function(a) {
            for (var b = 0, c = this.wa.g; b < c;) {
                var d = b++,
                    e = this.wa;
                if (e.f[(d + e.ma) % e.s] == a) return d
            }
            return -1
        },
        trim: function() {
            for (var a = this.fe, b; a <= this.Xc;) {
                for (var c = 0, d = this.cols; c < d;)
                    if (b = c++, b = this.ka.get(b, a), null != b && !b.C.gf) {
                        this.fe = b.qb;
                        return
                    }++a
            }
        },
        zw: function(a) {
            this.Xc++;
            for (var b = [], c = 0, d = a.length; c < d;) {
                var e = c++,
                    f = a[e];
                if (0 != f) {
                    var g = new ab(this);
                    g.code = f;
                    b.push(g);
                    g.qb = this.Xc;
                    g.Pa = e;
                    g.pg();
                    this.ka.bk(g);
                    this.Ra.add(g);
                    g.ea = new lc(g);
                    this.La.dk(g.ea);
                    this.no(g);
                    this.mr(g);
                    this.Zf++
                }
            }
            this.on();
            for (c = 0; c < b.length;) {
                g = b[c];
                ++c;
                for (a = this.list; null != a;) this.next = a.next, this.current = a.ha, a.ha.Zl(g), a = this.next;
                this.current = this.next = null
            }
            this.Kc.sg();
            this.zg();
            return b
        },
        lw: function(a) {
            var b = this;
            this.fe = 0;
            this.Xc = a.cb - 1;
            0 == (a.cb & 1) && (this.cd = this.cd + 1 & 1);
            a.forEach(function(c, d, e) {
                if (0 == c || 0 == b.ef && (e & 1) == b.cd && d > a.Pb - 1) return c;
                b.Zf++;
                var f = new ab(b);
                f.code = c;
                f.Pa = d;
                f.qb = b.Xc - e;
                f.pg();
                b.ka.bk(f);
                b.Ra.add(f);
                f.ea = new lc(f);
                b.La.dk(f.ea);
                b.mr(f);
                return c
            });
            var c = this.Ra,
                d = c.f,
                e = 0;
            for (c = c.g; e <
                c;) {
                var f = e++;
                b.no(d[f])
            }
            this.on();
            for (d = this.ka.iterator(); d.P();) {
                e = d.next();
                for (c = this.list; null != c;) this.next = c.next, this.current = c.ha, c.ha.Zl(e), c = this.next;
                this.current = this.next = null
            }
        },
        no: function(a) {
            if (null != a && 0 != a.code) {
                a.C.connected = !0;
                var b = this.Ck(a);
                for (a = a.ea; b.cursor < b.size;) {
                    var c = b.list[b.cursor++];
                    null != c && 0 != c.code && (c = c.ea, a.uv(c) || this.La.Nn(a, c))
                }
            }
        },
        mr: function(a) {
            a.kb(new Ub);
            a.ue = K.Mc.ue;
            a.Qc = K.Mc.Qc
        },
        on: function() {
            for (var a = this.Ra.iterator(); a.P();) {
                var b = a.next();
                b.C.connected &&
                    this.Ur(b)
            }
        },
        Ur: function(a) {
            a.C.rc = !1;
            if (null != a.ea) {
                for (var b = 0, c = a.ea.ca; null != c;) ++b, c = c.next;
                if (6 == b) a.C.rc = !0;
                else {
                    c = a.Pa;
                    var d = a.qb,
                        e = d == this.Xc;
                    if (this.Nt)
                        if (e && 4 == b) a.C.rc = !0;
                        else {
                            var f = 1 == this.cd ? 0 : 1,
                                g = this.cols - 1;
                            if (0 == this.ef) {
                                if (0 == c || c == g - (d + 1 & 1)) e ? b == 2 + f && (a.C.rc = !0) : 1 == (d & 1) ? b == 5 - 2 * f && (a.C.rc = !0) : b == 3 + 2 * f && (a.C.rc = !0)
                            } else 0 == c ? e ? b == 2 + f && (a.C.rc = !0) : 1 == (d & 1) ? b == 5 - 2 * f && (a.C.rc = !0) : b == 3 + 2 * f && (a.C.rc = !0) : c == g && (e ? b == 3 - f && (a.C.rc = !0) : 1 == (d & 1) ? b == 3 + 2 * f && (a.C.rc = !0) : b == 5 - 2 * f && (a.C.rc = !0))
                        }
                }
            }
        },
        ox: function(a) {
            var b = this.U,
                c = b.c,
                d = b.d,
                e = this.kg;
            e.b = a.b;
            e.a = a.a;
            this.Em(e);
            b.c = e.b - this.U.b;
            b.d = e.a - this.U.a;
            .25 > qf.normalize(b) ? (b.c = c, b.d = d) : (a = K.Rv, c = 57.29577951308232 * Math.atan2(b.d, b.c), d = 1, K.Ex ? 0 <= c ? (d = -1, c < 90 - a ? c = 90 - a : c > 180 - (90 - a) && (c = 180 - (90 - a))) : c > -90 + a ? c = -90 + a : c < -90 - a && (c = -90 - a) : 0 > c ? c > -90 + a ? c = -90 + a : c < -90 - a && (c = -90 - a) : 90 > c ? c = -90 + a : 270 > c && (c = -90 - a), b.c = Math.cos(.0174532925199432 * c) * d, b.d = Math.sin(.0174532925199432 * c) * d)
        },
        kw: function(a, b, c, d) {
            if (0 > a || a >= this.wa.g || 0 == this.wa.g) return !1;
            var e =
                this.wa;
            a = e.f[(a + e.ma) % e.s];
            e = new v;
            e.b = b;
            e.a = c;
            this.Em(e);
            return ff.tg(e.b, e.a, a.A.b, a.A.a, a.T * d)
        },
        Ck: function(a) {
            var b = new Ve(this.ka, this.cols, this.cd);
            null != a && b.X(a.Pa, a.qb);
            return b
        },
        kt: function(a, b) {
            a.C.connected = !0;
            if (null == b) {
                b = new Nc;
                this.uw(a.A, b);
                a.Pa = b.x;
                a.qb = b.y;
                var c = new v;
                this.Fe(b.x, b.y, c);
                if (null != this.ka.get(a.Pa, a.qb))
                    if (a.A.b < c.b) {
                        if (0 == a.Pa) throw n.B("leftmost cell");
                        a.Pa--
                    } else if (a.A.b > c.b) {
                    if (a.Pa == this.cols - 1) throw n.B("rightmost cell");
                    a.Pa++
                }
                this.Fe(a.Pa, a.qb, a.A)
            } else {
                b.pg();
                c = b.ea.ca;
                for (var d; null != c;) d = c.node.aa, d.pg(), c = c.next;
                b = this.Tt(new Nc(b.Pa, b.qb), a.A);
                a.Pa = b.x;
                a.qb = b.y;
                a.pg();
                b.y < this.fe && (this.fe = b.y)
            }
            this.ka.bk(a);
            a.ea = new lc(a);
            this.La.dk(a.ea);
            for (b = this.Ck(a); b.cursor < b.size;) c = b.list[b.cursor++], this.La.Nn(a.ea, c.ea);
            this.vi = !0
        },
        Tt: function(a, b) {
            var c = 20,
                d = new Nc(-1, -1),
                e = new v;
            e.b = 0;
            e.a = 0;
            var f = this.Ck();
            for (f.X(a.x, a.y, !0); f.cursor < f.size;) {
                var g = f.list[f.cursor++];
                if (0 == g.code) {
                    a = g.Pa;
                    g = g.qb;
                    this.Fe(a, g, e);
                    var h = e.b - b.b,
                        k = e.a - b.a;
                    h = h * h + k * k;
                    h < c && (c =
                        h, d.x = a, d.y = g)
                }
            }
            return d
        },
        o: function() {
            Ta.prototype.o.call(this);
            this.viewport.o();
            for (var a = this.Ra.iterator(); a.P();) a.next().o();
            this.ka.o();
            this.La.o();
            this.oe.o();
            this.Fl.o();
            this.Kc.o();
            this.De.o();
            for (a = this.Oe.iterator(); a.P();) a.next().o();
            this.Oe.o();
            this.Zm.o();
            this.Ym.o();
            this.kg = this.Ym = this.Zm = this.qh = this.U = this.hp = this.il = this.Oe = this.wa = this.De = this.cd = this.ef = this.Kc = this.Hd = this.Fl = this.oe = this.La = this.ka = this.Ra = this.viewport = null
        },
        j: yc
    });
    be.__name__ = "21";
    be.__isInterface__ = !0;
    be.prototype = {
        j: be
    };
    Wb.__name__ = "22";
    Wb.__isInterface__ = !0;
    ab.__name__ = "23";
    ab.__interfaces__ = [Ab, Wb];
    ab.prototype = {
        L: function() {
            ab.count--;
            if (this.C.connected) {
                for (var a = this.ea.ca; null != a;) this.l.Ur(a.node.aa), a = a.next;
                this.l.uo(this)
            } - 1 != this.Pa && this.l.ka.Vq(this);
            this.l.Ra.remove(this);
            this.yc.o();
            this.yc = null;
            null != this.client && this.client.$l(this);
            this.client = null;
            a = this.l;
            for (var b = a.list; null != b;) a.next = b.next, a.current = b.ha, b.ha.$l(this), b = a.next;
            a.next = null;
            this.A = this.za = this.force = this.ea =
                this.l = a.current = null;
            this.C.bh = !0
        },
        kb: function(a) {
            a.X(this);
            a.enabled = !0;
            var b = this.yc;
            b.g == b.s && b.M();
            b.f[b.g++] = a
        },
        df: function(a, b) {
            return null != a ? this.df(null, this.Ud(a)) : this.yc.remove(b)
        },
        Ud: function(a) {
            for (var b = this.yc.f, c = 0, d = this.yc.g; c < d;) {
                var e = c++;
                if (F.ze(b[e], a)) return b[e]
            }
            return null
        },
        Kt: function(a) {
            for (var b = this.yc.f, c = 0, d = this.yc.g; c < d;) {
                var e = c++;
                F.ze(b[e], a) && (b[e].enabled = !0)
            }
        },
        Qo: function(a) {
            this.l.Fe(this.Pa, this.qb, a)
        },
        pg: function() {
            this.Qo(this.A)
        },
        Pg: function(a) {
            this.code =
                a;
            null != this.client && this.client.hq(this, a, this.code)
        },
        cp: function(a) {
            this.l.viewport.Kr(this.A, a)
        },
        jv: function(a) {
            var b = this.A,
                c = a.A,
                d = c.b - b.b;
            b = c.a - b.a;
            a = this.T + a.T;
            return d * d + b * b < a * a
        },
        gr: function(a, b, c) {
            null == c && (c = -1);
            null == b && (b = -1);
            if (null == a || a.C.bh || this.C.bh) return !1;
            b = -1 == b ? this.nh : b;
            c = -1 == c ? a.nh : c;
            var d = this.A,
                e = a.A,
                f = d.b - e.b,
                g = d.a - e.a,
                h = f * f + g * g;
            a = this.T + a.T;
            return h < a * a ? (h = Math.sqrt(h), f /= h, g /= h, a = a - h + .01, h = 1 / (b + c), d.b += f * a * b * h, d.a += g * a * b * h, e.b -= f * a * c * h, e.a -= g * a * c * h, !0) : !1
        },
        hr: function(a) {
            if (!this.C.bh) {
                var b =
                    this.A;
                b = b.b * a.b + b.a * a.a - za.Le(a);
                b <= this.T && (b = this.T - b + .01, this.A.b += b * a.b, this.A.a += b * a.a)
            }
        },
        o: function() {
            this.yc = this.$s = this.force = this.za = this.A = this.ea = this.client = this.l = null
        },
        j: ab
    };
    Ye.__name__ = "24";
    Ye.prototype = {
        j: Ye
    };
    ae.__name__ = "25";
    ae.__isInterface__ = !0;
    ae.prototype = {
        j: ae
    };
    Te.__name__ = "26";
    Te.prototype = {
        test: function() {
            var a = this.Oi.b - this.Ni.b,
                b = this.Oi.a - this.Ni.a,
                c = this.ll.b - this.Qi.b,
                d = this.ll.a - this.Qi.a,
                e = this.rp + this.ml,
                f = a * a + b * b - e * e;
            if (0 > f) return this.ie = 0, !0;
            e = c * c + d * d;
            if (1E-6 >
                e) return !1;
            a = c * a + d * b;
            if (0 <= a) return !1;
            b = a * a - e * f;
            if (0 > b) return !1;
            this.ie = (-a - Math.sqrt(b)) / e;
            return !0
        },
        j: Te
    };
    zb.__name__ = "27";
    zb.__isInterface__ = !0;
    zb.__interfaces__ = [Wb];
    Xe.__name__ = "28";
    Xe.__isInterface__ = !0;
    Xe.__interfaces__ = [zb];
    P.__name__ = "29";
    P.__interfaces__ = [Xe];
    P.prototype = {
        add: function(a) {
            this.g == this.s && this.M();
            this.f[this.g++] = a
        },
        Uq: function(a) {
            for (var b = this.f, c = b[a], d = --this.g; a < d;) b[a++] = b[a];
            return c
        },
        sort: function(a, b, c, d) {
            null == d && (d = -1);
            null == c && (c = 0);
            null == b && (b = !1);
            1 < this.g &&
                (-1 == d && (d = this.g - c), null == a ? b ? this.iv(c, d) : this.xm(c, d) : b ? this.hv(a, c, d) : this.wm(c, d, a));
            return this
        },
        hv: function(a, b, c) {
            for (var d, e, f = this.f, g = b + 1, h = b + c; g < h;) {
                d = g++;
                for (c = f[d]; d > b;)
                    if (e = f[d - 1], 0 < a(e, c)) f[d] = e, --d;
                    else break;
                f[d] = c
            }
            return this
        },
        wm: function(a, b, c) {
            var d = a + b - 1,
                e = a,
                f = d,
                g = this.f;
            if (1 < b) {
                var h = a + (b >> 1);
                b = a + b - 1;
                var k = g[a];
                var q = g[h];
                var r = g[b];
                var p = c(k, r);
                h = 0 > p && 0 > c(k, q) ? 0 > c(q, r) ? h : b : 0 > c(q, k) && 0 > c(q, r) ? 0 > p ? a : b : 0 > c(r, k) ? h : a;
                b = g[h];
                for (g[h] = g[a]; e < f;) {
                    for (; 0 > c(b, g[f]) && e < f;) --f;
                    f != e && (g[e] =
                        g[f], ++e);
                    for (; 0 < c(b, g[e]) && e < f;) ++e;
                    f != e && (g[f] = g[e], --f)
                }
                g[e] = b;
                this.wm(a, e - a, c);
                this.wm(e + 1, d - e, c)
            }
        },
        xm: function(a, b) {
            var c = this.f,
                d = a + b - 1,
                e = a,
                f = d;
            if (1 < b) {
                var g = a + (b >> 1);
                b = a + b - 1;
                var h = c[a];
                var k = c[g];
                var q = c[b];
                var r = h.compare(q);
                g = 0 > r && 0 > h.compare(k) ? 0 > k.compare(q) ? g : b : 0 > k.compare(h) && 0 > k.compare(q) ? 0 > r ? a : b : 0 > q.compare(h) ? g : a;
                b = c[g];
                for (c[g] = c[a]; e < f;) {
                    for (; 0 > b.compare(c[f]) && e < f;) --f;
                    f != e && (c[e] = c[f], ++e);
                    for (; 0 < b.compare(c[e]) && e < f;) ++e;
                    f != e && (c[f] = c[e], --f)
                }
                c[e] = b;
                this.xm(a, e - a);
                this.xm(e +
                    1, d - e)
            }
        },
        iv: function(a, b) {
            for (var c = this.f, d, e, f, g, h = a + 1, k = a + b; h < k;) {
                d = h++;
                for (f = b = c[d]; d > a;)
                    if (g = e = c[d - 1], 0 < f.compare(g)) c[d] = e, --d;
                    else break;
                c[d] = b
            }
        },
        ec: function(a) {
            a > this.s && (this.s = a, this.Id(a));
            return this
        },
        resize: function(a) {
            a < this.g ? (this.s = this.g = a, this.s < this.de && (this.s = this.de), this.Id(this.s)) : (this.ec(a), this.g = a);
            return this
        },
        X: function(a, b) {
            this.ec(a);
            this.g = a;
            for (var c = this.f, d = 0; d < a;) {
                var e = d++;
                c[e] = b
            }
            return this
        },
        of: function(a) {
            this.g = 0;
            this.ec(a.g);
            S.Ya(a.f, 0, this.f, 0, a.g);
            this.g =
                a.g;
            return this
        },
        M: function() {
            this.s = Nb.Bc(this.$b, this.s);
            this.Id(this.s)
        },
        Id: function(a) {
            a = Array(a);
            S.Ya(this.f, 0, a, 0, this.g);
            this.f = a
        },
        o: function() {
            S.Cd(this.f);
            this.f = null;
            null != this.eb && (this.eb.o(), this.eb = null)
        },
        contains: function(a) {
            for (var b = this.f, c = 0, d = this.g; c < d;) {
                var e = c++;
                if (b[e] == a) return !0
            }
            return !1
        },
        remove: function(a) {
            if (this.Lf()) return !1;
            for (var b = 0, c, d, e = this.g, f = this.f; b < e;)
                if (f[b] == a) {
                    for (c = b + 1; c < e;)
                        if (f[c] == a) ++c;
                        else break;
                    d = c - b;
                    e -= d;
                    for (d = b; d < e;) f[d] = f[c++], ++d
                } else ++b;
            a = 0 !=
                this.g - e;
            this.g = e;
            return a
        },
        iterator: function() {
            if (this.Lc) {
                if (null == this.eb) this.eb = new Mc(this);
                else {
                    var a = this.eb;
                    a.f = a.Db.f;
                    a.Wa = a.Db.g;
                    a.pa = 0
                }
                return this.eb
            }
            return new Mc(this)
        },
        Lf: function() {
            return 0 == this.g
        },
        $h: function() {
            return S.$h(this.f, 0, this.g, [])
        },
        j: P
    };
    rc.__name__ = "2A";
    rc.Rx = function(a) {
        var b = rc.Xm;
        b.g = 0;
        b = a.Ra;
        for (var c = b.f, d = 0, e = b.g; d < e;) a = d++, a = c[a], !a.C.Mg || a.C.loaded || a.C.gf || (b = rc.Xm, b.g == b.s && b.M(), b.f[b.g++] = a);
        b = rc.Xm;
        a = 0;
        c = b.g;
        for (d = c - 1; a < d;) {
            for (b = a + 1; b < c;) ++b;
            ++a
        }
    };
    We.__name__ =
        "2B";
    We.prototype = {
        o: function() {
            for (var a = this.map.keys(); a.P();) {
                var b = a.next();
                this.map.remove(b)
            }
            this.map = null
        },
        get: function(a, b) {
            return this.map.v[b + 16777215 << 6 | a]
        },
        bk: function(a) {
            this.map.v[a.qb + 16777215 << 6 | a.Pa] = a
        },
        Vq: function(a) {
            this.map.remove(a.qb + 16777215 << 6 | a.Pa);
            a.Pa = -1
        },
        iterator: function() {
            for (var a = [], b = this.map.keys(); b.P();) {
                var c = b.next();
                a.push(this.map.v[c])
            }
            return new oc(a)
        },
        j: We
    };
    Ve.__name__ = "2C";
    Ve.prototype = {
        P: function() {
            return this.cursor < this.size
        },
        next: function() {
            return this.list[this.cursor++]
        },
        X: function(a, b, c) {
            null == c && (c = !1);
            this.cursor = this.size = 0;
            var d = this.cols,
                e = (b & 1) == this.Uw ? 1 : 0,
                f = a + 1;
            if (0 <= f && f < d) {
                var g = this.ka.get(f, b);
                null != g ? this.list[this.size++] = g : c && (this.list[this.size++] = this.vf(f, b))
            }
            f = a + e;
            var h = b + 1;
            0 <= f && f < d && (g = this.ka.get(f, h), null != g ? this.list[this.size++] = g : c && (this.list[this.size++] = this.vf(f, h)));
            f = a - 1 + e;
            h = b + 1;
            0 <= f && f < d && (g = this.ka.get(f, h), null != g ? this.list[this.size++] = g : c && (this.list[this.size++] = this.vf(f, h)));
            f = a - 1;
            0 <= f && f < d && (g = this.ka.get(f, b), null != g ? this.list[this.size++] =
                g : c && (this.list[this.size++] = this.vf(f, b)));
            f = a - 1 + e;
            h = b - 1;
            0 <= f && f < d && (g = this.ka.get(f, h), null != g ? this.list[this.size++] = g : c && (this.list[this.size++] = this.vf(f, h)));
            f = a + e;
            h = b - 1;
            0 <= f && f < d && (g = this.ka.get(f, h), null != g ? this.list[this.size++] = g : c && (this.list[this.size++] = this.vf(f, h)));
            return this
        },
        vf: function(a, b) {
            var c = Object.create(ab.prototype);
            c.code = 0;
            c.Pa = a;
            c.qb = b;
            return c
        },
        j: Ve
    };
    ac.__name__ = "2D";
    ac.lj = function(a, b, c) {
        var d = [],
            e = a.split("\n");
        a = 0;
        for (var f = e.length; a < f;) {
            var g = a++,
                h = (new M("\\s+",
                    "g")).split(e[g]);
            if (!(1 >= h.length)) {
                var k = [];
                for (g = 0; g < h.length;) {
                    var q = h[g];
                    ++g;
                    null != z.parseInt(q) && k.push(z.parseInt(q))
                }
                d.push(k)
            }
        }
        a = d[0].length;
        f = d[1].length;
        k = (new Pc(a > f ? a : f, d.length)).ir(0);
        a = 0;
        for (f = d.length; a < f;)
            for (e = a++, g = 0, h = d[e].length; g < h;) q = g++, k.f[e * k.Pb + q] = d[e][q];
        b = new ac(k.Pb, k.cb, b, c);
        b.ka.forEach(function(a, b, c) {
            return k.f[c * k.Pb + b]
        });
        return b
    };
    ac.prototype = {
        j: ac
    };
    Ue.__name__ = "2E";
    Ue.prototype = {
        o: function() {
            this.lh.o();
            this.lh = null;
            this.kh.o();
            this.l = this.kh = null;
            this.set.o();
            this.set = null
        },
        Ji: function() {
            return this.lh.next()
        },
        Vo: function() {
            return this.kh.next()
        },
        Ut: function(a, b) {
            var c = new P;
            a = this.Eo(a, b);
            if (a.Lf()) return c;
            for (var d = a.iterator(); d.pa < d.Wa;) {
                a = d.f[d.pa++];
                for (var e = !1, f = a.iterator(); f.P();) {
                    var g = f.next();
                    if (g.qb == g.l.Xc) {
                        e = !0;
                        break
                    }
                }
                e ? d.remove() : this.sv(a) && (d.remove(), c.add(a))
            }
            this.clearMarks();
            d.f = d.Db.f;
            d.Wa = d.Db.g;
            for (d.pa = 0; d.pa < d.Wa;) a = d.f[d.pa++], this.tv(a) && d.remove();
            var h = this.Ji();
            this.clearMarks();
            d.f = d.Db.f;
            d.Wa = d.Db.g;
            for (d.pa = 0; d.pa <
                d.Wa;) a = d.f[d.pa++], this.l.La.Bi(!1, a.f[0].ea, function(a) {
                h.add(a.aa);
                return !0
            });
            for (a = this.Eo(h, b).iterator(); a.P();) b = a.next(), c.add(b);
            return c
        },
        tv: function(a) {
            this.clearMarks();
            var b = !1;
            this.l.La.Bi(!1, a.f[0].ea, function(a) {
                a = a.aa;
                return a.qb == a.l.Xc ? (b = !0, !1) : !0
            });
            return b
        },
        sv: function(a) {
            this.clearMarks();
            this.Tp(a);
            for (a = a.iterator(); a.P();)
                for (var b = a.next().ea.ca; null != b;)
                    if (b.node.Z) b = b.next;
                    else return !1;
            return !0
        },
        Ov: function(a, b, c) {
            this.clearMarks();
            this.l.La.Bi(!0, a.ea, function(d, e) {
                if (e) return c(d.aa,
                    a);
                b.add(d.aa);
                return !0
            });
            return b
        },
        Eo: function(a, b) {
            var c = this.Vo(),
                d = this.Ji();
            d.ec(32);
            this.clearMarks();
            a = a.iterator();
            for (var e; a.pa < a.Wa;)
                if (e = a.f[a.pa++], null != e.ea && !e.ea.Z && (d.g = 0, this.l.La.Bi(!0, e.ea, function(a, c) {
                        if (c) return b(a.aa, e);
                        d.add(a.aa);
                        return !0
                    }), 0 < d.g)) {
                    var f = this.Ji().of(d);
                    c.add(f);
                    d.g = 0
                }
            return c
        },
        Vt: function(a, b) {
            this.clearMarks();
            this.Tp(a);
            var c = a.iterator();
            for (a = c; a.pa < a.Wa;) {
                var d = a.f[a.pa++];
                d.ea.Z = !0
            }
            this.set.clear();
            c.f = c.Db.f;
            c.Wa = c.Db.g;
            c.pa = 0;
            for (a = c; a.pa < a.Wa;)
                for (d =
                    a.f[a.pa++], c = d.ea.ca; null != c;) {
                    d = c.node;
                    if (!d.Z) {
                        var e = this.set,
                            f = d.aa.key,
                            g = 73856093 * f & e.Vc,
                            h = e.f,
                            k = e.bc[g];
                        if (-1 == k) e.g == e.s && (e.M(), h = e.f), k = 3 * e.bb, e.bb = e.wb[e.bb], e.bc[g] = k, h[k] = f, h[k + 1] = 1, e.g++, e = !0;
                        else if (h[k] == f) e = !1;
                        else {
                            for (g = h[k + 2]; - 1 != g;) {
                                if (h[g] == f) {
                                    k = -1;
                                    break
                                }
                                k = g;
                                g = h[k + 2]
                            } - 1 == k ? e = !1 : (e.g == e.s && (e.M(), h = e.f), g = 3 * e.bb, e.bb = e.wb[e.bb], h[k + 2] = g, h[g] = f, h[g + 1] = 1, e.g++, e = !0)
                        }
                        e && b.add(d.aa);
                        d.Z = !0
                    }
                    c = c.next
                }
        },
        complete: function() {
            this.lh.Sq();
            for (var a = this.lh.iterator(); a.pa < a.Wa;) {
                var b = a.f[a.pa++],
                    c = !0;
                null == c && (c = !1);
                c && S.Cd(b.f);
                b.g = 0
            }
            this.kh.Sq();
            for (a = this.kh.iterator(); a.pa < a.Wa;) b = a.f[a.pa++], c = !0, null == c && (c = !1), c && S.Cd(b.f), b.g = 0
        },
        Tp: function(a) {
            var b = a.f,
                c = 0;
            for (a = a.g; c < a;) {
                var d = c++;
                b[d].ea.Z = !0
            }
        },
        clearMarks: function() {
            this.l.La.clearMarks()
        },
        j: Ue
    };
    $d.__name__ = "2F";
    $d.prototype = {
        o: function() {
            this.bf.o();
            this.Do = this.bf = null
        },
        iterator: function() {
            return this.bf.iterator()
        },
        next: function() {
            if (this.qn < this.size) return this.bf.f[this.qn++];
            var a = this.Do();
            this.bf.add(a);
            return a
        },
        Sq: function() {
            this.qn =
                0;
            this.size = this.bf.g
        },
        j: $d
    };
    Zd.__name__ = "30";
    Zd.__interfaces__ = [Ab];
    Zd.prototype = {
        wk: function(a, b, c) {
            var d = this.wp;
            this.pd = -1;
            this.Rg = null;
            for (var e = 0, f = this.xb.iterator(); f.pa < f.Wa;) {
                var g = f.f[f.pa++];
                0 < (this.mw & 1 << e) && d.Rt(a.b, a.a, a.c, b.b, b.a, g.b, g.a, za.Le(g)) && 0 < d.t && d.t < c && (c = d.t, this.Rg = g, this.pd = e);
                ++e
            }
            return c
        },
        sg: function() {
            var a = this.l.viewport,
                b = a.R,
                c = this.xb.f[3],
                d = new v,
                e = d;
            e.b = 1;
            e.a = 0;
            d = new v;
            d.b = 0;
            d.a = 0;
            za.ng(c, e, d);
            c = this.xb.f[1];
            e = d = new v;
            e.b = -1;
            e.a = 0;
            var f = this.l.$k();
            d = new v;
            d.b =
                f;
            d.a = 0;
            za.ng(c, e, d);
            f = this.l.fp();
            this.l.Gp() || (f = a.Mr(b.a));
            c = this.xb.f[0];
            e = d = new v;
            e.b = 0;
            e.a = 1;
            d = new v;
            d.b = 0;
            d.a = f;
            za.ng(c, e, d);
            a = a.Mr(b.d);
            c = this.xb.f[2];
            e = d = new v;
            e.b = 0;
            e.a = -1;
            d = new v;
            d.b = 0;
            d.a = a;
            za.ng(c, e, d)
        },
        o: function() {
            this.xb.o();
            this.l = this.wp = this.xb = this.Rg = null
        },
        j: Zd
    };
    Yd.__name__ = "31";
    Yd.__interfaces__ = [Ab];
    Yd.prototype = {
        reset: function() {
            var a = this.gh;
            a.g = 0;
            a = this.tf;
            a.g = 0
        },
        o: function() {
            this.gh.o();
            this.tf.o();
            this.tf = this.om = this.pm = this.fh = this.gh = null
        },
        j: Yd
    };
    Xd.__name__ = "32";
    Xd.__interfaces__ =
        [Ab];
    Xd.prototype = {
        Jq: function(a, b, c) {
            this.result.pm = null;
            this.result.om = null;
            this.result.fh = null;
            this.result.nm = -1;
            var d = this.Zh;
            d.b = a.b;
            d.a = a.a;
            d.c = a.c;
            d.d = a.d;
            var e = this.Zh,
                f = this.cy;
            f.b = e.b;
            f.a = e.a;
            f.c = b;
            this.test.Kf = e;
            this.test.qp = b;
            a = this.result.gh;
            a.g = 0;
            var g = e.b;
            a.g == a.s && a.M();
            a.f[a.g++] = g;
            g = e.a;
            a.g == a.s && a.M();
            a.f[a.g++] = g;
            var h = this.l.Kc,
                k = 0;
            if (0 < (this.ub & 8)) {
                g = this.l.Ra;
                d = g.f;
                var q = 0;
                for (g = g.g; q < g;) {
                    var r = q++;
                    d[r].C.mp = !1
                }
            }
            d = this.wj;
            g = this.l.Hd;
            d.b = g.b;
            d.a = g.a;
            d.c = g.c;
            d.d = g.d;
            uc.offset(this.wj,
                b, b);
            for (b = 0; b++ < c + 1;) {
                d = this.$m;
                d.b = e.c;
                d.a = e.d;
                q = h.wk(f, d, Infinity);
                g = Infinity;
                r = this.mh.Qe;
                r.b = e.b;
                r.a = e.a;
                r = this.mh.Pe;
                r.b = d.b;
                r.a = d.a;
                this.mh.pp = this.wj;
                if (this.mh.test() && (g = this.result.tf, g.g = 0, this.test.reset(), this.test.nl = 0 < (this.ub & 8) && 1 == b, this.test.sp = 0 < (this.ub & 16), this.test.Oh(), g = this.test.qj, this.test.nl))
                    for (r = this.test.fg.iterator(); r.P();) {
                        var p = r.next(),
                            m = this.result.tf;
                        m.g == m.s && m.M();
                        m.f[m.g++] = p
                    }
                k += Math.min(q, g);
                if (q < g) {
                    this.result.nm = h.pd;
                    e.b += e.c * q;
                    e.a += e.d * q;
                    g = e.b;
                    a.g ==
                        a.s && a.M();
                    a.f[a.g++] = g;
                    g = e.a;
                    a.g == a.s && a.M();
                    a.f[a.g++] = g;
                    if (2 == h.pd && 0 == (this.ub & 2)) break;
                    if (0 == h.pd && 0 == (this.ub & 1)) break;
                    g = e.a;
                    f.b = e.b;
                    f.a = g;
                    g = h.Rg;
                    q = g.a;
                    r = new v;
                    r.b = g.b;
                    r.a = q;
                    mf.Jw(r, d);
                    e.c = d.b;
                    e.d = d.a
                } else return this.result.pm = this.test.sj, this.result.om = this.test.rj, this.result.fh = this.test.Ye, e.b += d.b * g, e.a += d.a * g, c = e.b, a.g == a.s && a.M(), a.f[a.g++] = c, c = e.a, a.g == a.s && a.M(), a.f[a.g++] = c, g
            }
            return k
        },
        o: function() {
            this.result.o();
            this.test.o();
            this.l = this.mh = this.wj = this.Zh = this.$m = this.test = this.result =
                null
        },
        j: Xd
    };
    Wd.__name__ = "33";
    Wd.__interfaces__ = [Ab];
    Wd.prototype = {
        reset: function() {},
        Oh: function() {
            this.qj = this.Bq = Infinity;
            this.Ye = null;
            var a = this.fg;
            a.g = 0;
            var b = this.Kf.b,
                c = this.Kf.a,
                d = this.Kf.c,
                e = this.Kf.d,
                f = this.Dr;
            f.Ni.b = b;
            f.Ni.a = c;
            f.Qi.b = d;
            f.Qi.a = e;
            a = f.ll;
            a.b = 0;
            a.a = 0;
            var g = this.Er;
            g.Qe.b = b;
            g.Qe.a = c;
            g.Pe.b = d;
            g.Pe.a = e;
            g.Pi = 1;
            for (var h = 0, k = this.l.Hu(this.im); h < k;) {
                var q = h++;
                q = this.im[q];
                if (null != q && (this.sp || !q.C.rc) && 0 != q.C.connected && !q.C.gf) {
                    if (this.nl && !q.C.mp) {
                        a = g.jl;
                        var r = q.A;
                        a.b = r.b;
                        a.a =
                            r.a;
                        g.kl = 2 * q.T;
                        g.test() && (q.C.mp = !0, a = this.fg, a.g == a.s && a.M(), a.f[a.g++] = q)
                    }
                    f.rp = this.qp * K.Ts;
                    a = f.Oi;
                    r = q.A;
                    a.b = r.b;
                    a.a = r.a;
                    f.ml = q.T;
                    f.test() && (a = f.ie, a >= this.Bq || (this.Bq = a, this.Ye = q, this.sj.b = b + d * a, this.sj.a = c + e * a))
                }
            }
            null != this.Ye && (a = f.Oi, r = this.Ye.A, a.b = r.b, a.a = r.a, f.ml = this.Ye.T, f.test(), this.qj = f.ie, this.rj.b = b + d * this.qj, this.rj.a = c + e * this.qj)
        },
        o: function() {
            this.fg.o();
            this.Dr = this.Er = this.im = this.l = this.fg = this.rj = this.sj = this.Ye = this.Kf = null
        },
        j: Wd
    };
    Vb.__name__ = "34";
    K.__name__ = "35";
    Vd.__name__ =
        "36";
    Vd.__interfaces__ = [Ab];
    Vd.prototype = {
        Ha: function() {
            var a = this.R,
                b = a.b,
                c = a.a,
                d = a.c,
                e = a.d;
            a = new H;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d = e;
            return a
        },
        Jd: function(a) {
            var b = a.a,
                c = a.c,
                d = a.d,
                e = new H;
            e.b = a.b;
            e.a = b;
            e.c = c;
            e.d = d;
            this.R = e;
            this.Rr();
            this.ur(0)
        },
        Uc: function() {
            var a = this.dh,
                b = a.b,
                c = a.a;
            a = new v;
            a.b = b;
            a.a = c;
            return a
        },
        mg: function(a, b) {
            var c = this.dh;
            c.b = a;
            c.a = b;
            this.Rr()
        },
        ur: function(a) {
            this.zoom = a;
            0 == a && this.sx(this.l.cols)
        },
        sx: function(a) {
            var b = this.R;
            this.zoom = (b.c - b.b) / (2 * (a + (1 == this.l.ef ? .5 : 0)))
        },
        Kr: function(a,
            b) {
            b.b = this.fd.b + (a.b - this.l.U.b) * this.zoom;
            b.a = this.fd.a + (a.a - this.l.U.a) * this.zoom
        },
        Lr: function(a) {
            return this.fd.b + (a - this.l.U.b) * this.zoom
        },
        vg: function(a) {
            return this.fd.a + (a - this.l.U.a) * this.zoom
        },
        Mr: function(a) {
            return (a - this.fd.a) / this.zoom + this.l.U.a
        },
        wg: function(a) {
            a.b = (a.b - this.fd.b) / this.zoom + this.l.U.b;
            a.a = (a.a - this.fd.a) / this.zoom + this.l.U.a
        },
        Ap: function(a, b) {
            var c = this.Lr(a.b);
            a = this.vg(a.a);
            b *= this.zoom;
            var d = this.R;
            return 0 == (c + b < d.b || c - b > d.c || a + b < d.a || a - b > d.d)
        },
        Rr: function() {
            var a =
                this.R;
            this.fd.b = this.R.b + this.dh.b * (a.c - a.b);
            a = this.R;
            this.fd.a = this.R.a + this.dh.a * (a.d - a.a)
        },
        o: function() {
            this.l = this.dh = this.fd = null
        },
        j: Vd
    };
    la.__name__ = "37";
    la.prototype = {
        update: function() {},
        X: function() {},
        Zb: function() {
            return 0
        },
        j: la
    };
    qc.__name__ = "38";
    qc.G = la;
    qc.prototype = u(la.prototype, {
        Zb: function() {
            return 1
        },
        X: function(a) {
            la.prototype.X.call(this, a);
            a.Hf = K.Hf;
            a.Qc = 0
        },
        update: function(a) {
            a.force.a += a.Hf
        },
        j: qc
    });
    Ud.__name__ = "39";
    Ud.G = la;
    Ud.prototype = u(la.prototype, {
        Zb: function() {
            return 4
        },
        update: function(a) {
            var b =
                a.Fa,
                c = a.za;
            c.b += a.force.b * b;
            c.a += a.force.a * b;
            0 < a.Qc && (c.b *= 1 - a.Qc, c.a *= 1 - a.Qc);
            a.A.b += c.b * b;
            a.A.a += c.a * b;
            c = a.force;
            c.b = 0;
            c.a = 0;
            if (!a.C.connected && a.C.fixed && (c = a.$s, null != c)) {
                var d = a.l.U.b,
                    e = a.l.U.a;
                a.A.b += d - c.b;
                a.A.a += e - c.a;
                c.b = d;
                c.a = e
            }
            0 != a.Qn && (a.rotation += a.Qn * b)
        },
        j: Ud
    });
    Ub.__name__ = "3A";
    Ub.G = la;
    Ub.prototype = u(la.prototype, {
        Zb: function() {
            return 1
        },
        X: function(a) {
            a.Qo(this.anchor)
        },
        update: function(a) {
            if (0 != a.ue) {
                var b = a.A.b - this.anchor.b,
                    c = a.A.a - this.anchor.a;
                1E-12 > b * b + c * c ? (a.A.b = this.anchor.b,
                    a.A.a = this.anchor.a) : (a.force.b += -a.ue * b, a.force.a += -a.ue * c)
            }
        },
        j: Ub
    });
    lf.__name__ = "3B";
    Td.__name__ = "3C";
    Td.G = la;
    Td.prototype = u(la.prototype, {
        X: function(a) {
            la.prototype.X.call(this, a);
            var b = a.l.U,
                c = b.b,
                d = b.a,
                e = b.c,
                f = b.d;
            b = a.A;
            b.b = c;
            b.a = d;
            a.za.b = e * K.Xn;
            a.za.a = f * K.Xn;
            b = a.force;
            b.b = 0;
            b.a = 0;
            a.C.connected = !1
        },
        update: function(a) {
            var b = a.l,
                c = b.oe,
                d = b.Kc,
                e = a.A,
                f = a.za;
            if (a.C.ro) b = d.xb.f[0], this.Zv(a, 0 > e.b * b.b + e.a * b.a - za.Le(b) ? 0 : 2);
            else {
                var g = this.Zh;
                var h = e.b;
                var k = e.a;
                g.b = h;
                g.a = k;
                g.c = f.b * a.Fa;
                g.d = f.a * a.Fa;
                c.ub = 0;
                k = a.l.Gp() ? K.jy : K.ky;
                "bounce" == k && (c.ub |= 1);
                var q = K.Ss;
                "bounce" == q && (c.ub |= 2);
                if (K.Xs || K.ip) c.ub |= 8;
                a.C.ko || (c.ub |= 16);
                h = c.Jq(g, a.T, 0);
                if (0 < (c.ub & 8)) {
                    var r = c.result.tf;
                    if (0 < r.g) {
                        var p = r.f,
                            m = 0;
                        for (r = r.g; m < r;) {
                            var l = m++;
                            l = p[l];
                            a.C.bh || null == l || l.C.bh || b.Wl(a, l)
                        }
                    }
                }
                if (-1 != c.result.nm) {
                    if (!(1 <= h)) {
                        e.b += h * g.c;
                        e.a += h * g.d;
                        switch (d.pd) {
                            case 0:
                                switch (k) {
                                    case "none":
                                        return;
                                    case "stick":
                                        this.mq(a, null);
                                        a.Fa = 0;
                                        return
                                }
                                break;
                            case 2:
                                if ("none" == q) return
                        }
                        g = d.xb.f[d.pd];
                        e = g.b;
                        g = g.a;
                        c = f.b;
                        h = f.a;
                        k = 2 * (c * e + h * g);
                        f.b = c - k * e;
                        f.a = h - k * g;
                        b.Vl(a, d.pd);
                        a.Fa = 0
                    }
                } else a.C.ko && null != c.result.fh && (b = c.result.fh, 1 > h && (e.b += h * g.c, e.a += h * g.d, a.Fa = 0, this.mq(a, b)))
            }
        },
        mq: function(a, b) {
            a.df(null, this);
            a.l.oe.result.reset();
            a.l.Yl(a, b)
        },
        Zv: function(a, b) {
            a.df(null, this);
            a.l.oe.result.reset();
            a.l.Xl(a, b)
        },
        Zb: function() {
            return 3
        },
        j: Td
    });
    Xa.__name__ = "3D";
    Xa.G = la;
    Xa.prototype = u(la.prototype, {
        X: function(a) {
            this.sr(a)
        },
        update: function(a) {
            this.sr(a)
        },
        Zb: function() {
            return 2
        },
        sr: function(a) {
            var b = a.A,
                c = a.l.U,
                d = c.a;
            b.b = c.b;
            b.a = d;
            a.A.b +=
                this.od.b;
            a.A.a += this.od.a;
            a.scale = this.scale
        },
        j: Xa
    });
    Se.__name__ = "3E";
    Se.prototype = {
        apply: function(a, b) {
            this.og ? this.og = !1 : a.gr(b, 0, 1) && this.Xw(b)
        },
        Xw: function(a) {
            if (null != a && a.C.connected) {
                var b = a.l;
                b.La.clearMarks();
                b.La.dt();
                b.La.vo(3, !1, a.ea, E(this, this.tm))
            }
        },
        tm: function(a) {
            if (a.parent == a) return !0;
            var b = a.parent.aa;
            a = a.aa;
            null != b && null != a && b.gr(a, 0, 1);
            return !0
        },
        j: Se
    };
    Re.__name__ = "3F";
    Re.prototype = {
        yw: function(a) {
            this.list.g = 0;
            a.l.La.clearMarks();
            a.l.La.vo(K.Mc.T, !1, a.ea, E(this, this.tm), a)
        },
        apply: function(a, b, c) {
            if (this.og) a = this.list, a.g = 0, this.og = !1;
            else {
                this.zr = K.Mc.Gx;
                this.zr || (a = a.A, a.b = b.b, a.a = b.a);
                this.direction = c;
                a = this.list;
                b = a.f;
                c = 0;
                for (a = a.g; c < a;) {
                    var d = c++,
                        e = b[d];
                    e.da.Kt(Ub);
                    d = (K.Mc.T + 1 - e.depth) * K.Mc.Kv;
                    e = e.da.za;
                    e.b += this.direction.b * d;
                    e.a += this.direction.a * d
                }
                a = this.list;
                a.g = 0
            }
        },
        tm: function(a, b, c) {
            if (this.zr && a.aa == c) return !0;
            b = this.list;
            a = new Qe(a.aa, a.depth);
            b.g == b.s && b.M();
            b.f[b.g++] = a;
            return !0
        },
        j: Re
    };
    Qe.__name__ = "40";
    Qe.prototype = {
        j: Qe
    };
    Pe.__name__ = "41";
    Pe.__isInterface__ = !0;
    n.__name__ = "42";
    n.co = function(a) {
        return a instanceof n ? a : a instanceof Error ? new n(a.message, 0, a) : new Uc(a, 0, a)
    };
    n.B = function(a) {
        return a instanceof n ? a.ak : a instanceof Error ? a : new Uc(a)
    };
    n.G = Error;
    n.prototype = u(Error.prototype, {
        jn: function() {
            return this.ak
        },
        Vy: function() {
            return this.ak
        },
        j: n
    });
    Tb.__name__ = "43";
    Tb.Ai = function(a, b) {
        var c = new Tb(b);
        c.Oh = function() {
            c.stop();
            a()
        };
        return c
    };
    Tb.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        Oh: function() {},
        j: Tb
    };
    Uc.__name__ =
        "44";
    Uc.G = n;
    Uc.prototype = u(n.prototype, {
        jn: function() {
            return this.value
        },
        j: Uc
    });
    sa.__name__ = "45";
    sa.lj = function(a, b) {
        if (b == vc.i1) {
            for (var c = new Uint8Array(a.length << 1), d = 0, e = a.length; d < e;) {
                b = d++;
                var f = a.charCodeAt(b);
                c[b << 1] = f & 255;
                c[b << 1 | 1] = f >> 8
            }
            return new sa(c.buffer)
        }
        c = [];
        for (b = 0; b < a.length;) f = a.charCodeAt(b++), 55296 <= f && 56319 >= f && (f = f - 55232 << 10 | a.charCodeAt(b++) & 1023), 127 >= f ? c.push(f) : (2047 >= f ? c.push(192 | f >> 6) : (65535 >= f ? c.push(224 | f >> 12) : (c.push(240 | f >> 18), c.push(128 | f >> 12 & 63)), c.push(128 | f >> 6 &
            63)), c.push(128 | f & 63));
        return new sa((new Uint8Array(c)).buffer)
    };
    sa.Tl = function(a) {
        var b = a.Vu;
        return null != b ? b : new sa(a)
    };
    sa.prototype = {
        Wk: function(a, b, c) {
            if (0 > a || 0 > b || a + b > this.length) throw n.B(Sa.i2);
            null == c && (c = vc.i0);
            var d = "",
                e = this.a,
                f = a;
            a += b;
            switch (c.u) {
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
            return this.Wk(0, this.length)
        },
        j: sa
    };
    var vc = Ha.e0 = {
        Ub: !0,
        Tb: ["i0", "i1"]
    };
    vc.i0 = {
        u: 0,
        H: "e0",
        toString: y
    };
    vc.i1 = {
        u: 1,
        H: "e0",
        toString: y
    };
    vc.xc = [vc.i0, vc.i1];
    pc.__name__ = "46";
    pc.decode = function(a, b) {
        null == b && (b = !0);
        if (b)
            for (; 61 == A.tk(a, a.length - 1);) a = A.substr(a, 0, -1);
        return (new Oe(pc.Zr)).vt(sa.lj(a))
    };
    Oe.__name__ = "47";
    Oe.prototype = {
        fv: function() {
            for (var a = [], b = 0; 256 > b;) {
                var c = b++;
                a[c] = -1
            }
            b = 0;
            for (var d = this.Be.length; b <
                d;) c = b++, a[this.Be.a[c]] = c;
            this.Cr = a
        },
        vt: function(a) {
            var b = this.Uv;
            null == this.Cr && this.fv();
            for (var c = this.Cr, d = a.length * b >> 3, e = new sa(new ArrayBuffer(d)), f = 0, g = 0, h = 0, k = 0; k < d;) {
                for (; 8 > g;) {
                    g += b;
                    f <<= b;
                    var q = c[a.a[h++]];
                    if (-1 == q) throw n.B("BaseCode : invalid encoded char");
                    f |= q
                }
                g -= 8;
                e.a[k++] = f >> g & 255
            }
            return e
        },
        j: Oe
    };
    $a.__name__ = "48";
    $a.__interfaces__ = [Pe];
    $a.prototype = {
        remove: function(a) {
            if (!this.v.hasOwnProperty(a)) return !1;
            delete this.v[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.v) this.v.hasOwnProperty(b) &&
                a.push(b | 0);
            return new oc(a)
        },
        iterator: function() {
            return {
                Iw: this.v,
                Hp: this.keys(),
                P: function() {
                    return this.Hp.P()
                },
                next: function() {
                    var a = this.Hp.next();
                    return this.Iw[a]
                }
            }
        },
        j: $a
    };
    Ia.__name__ = "49";
    Ia.__interfaces__ = [Pe];
    Ia.zv = function(a) {
        var b = Object.keys(a),
            c = b.length,
            d = 0;
        return {
            P: function() {
                return d < c
            },
            next: function() {
                d += 1;
                return b[d - 1]
            }
        }
    };
    Ia.Dy = function(a) {
        var b = Object.keys(a),
            c = b.length,
            d = 0;
        return {
            P: function() {
                return d < c
            },
            next: function() {
                d += 1;
                return a[b[d - 1]]
            }
        }
    };
    Ia.prototype = {
        iterator: function() {
            return Ia.Dy(this.v)
        },
        j: Ia
    };
    Ne.__name__ = "4A";
    Ne.prototype = {
        Fs: function(a) {
            this.gb == this.size && this.M(1);
            this.view.setUint8(this.gb++, a)
        },
        M: function(a) {
            var b = this.gb + a;
            for (a = 0 == this.size ? 16 : this.size; a < b;) a = 3 * a >> 1;
            b = new ArrayBuffer(a);
            var c = new Uint8Array(b);
            0 < this.size && c.set(this.sy);
            this.size = a;
            this.buffer = b;
            this.sy = c;
            this.view = new DataView(this.buffer)
        },
        bu: function() {
            if (0 == this.size) return new sa(new ArrayBuffer(0));
            var a = new sa(this.buffer);
            a.length = this.gb;
            return a
        },
        j: Ne
    };
    Sd.__name__ = "4B";
    Sd.prototype = {
        N: function() {
            throw n.B("Not implemented");
        },
        ym: function(a, b, c) {
            var d = c,
                e = a.a;
            if (0 > b || 0 > c || b + c > a.length) throw n.B(Sa.i2);
            try {
                for (; 0 < d;) e[b] = this.N(), ++b, --d
            } catch (f) {
                if (!(n.co(f).jn() instanceof Tc)) throw f;
            }
            return c - d
        },
        tx: function(a) {
            return this.oi = a
        },
        Fw: function(a, b, c) {
            for (; 0 < c;) {
                var d = this.ym(a, b, c);
                if (0 == d) throw n.B(Sa.i0);
                b += d;
                c -= d
            }
        },
        read: function(a) {
            for (var b = new sa(new ArrayBuffer(a)), c = 0; 0 < a;) {
                var d = this.ym(b, c, a);
                if (0 == d) throw n.B(Sa.i0);
                c += d;
                a -= d
            }
            return b
        },
        Rq: function(a) {
            for (var b = new Ne, c;;) {
                c = this.N();
                if (c == a) break;
                b.Fs(c)
            }
            return b.bu().toString()
        },
        Ew: function() {
            var a = this.uc(),
                b = this.uc();
            return this.oi ? Rb.op(b, a) : Rb.op(a, b)
        },
        Qa: function() {
            var a = this.N(),
                b = this.N();
            a = this.oi ? b | a << 8 : a | b << 8;
            return 0 != (a & 32768) ? a - 65536 : a
        },
        bd: function() {
            var a = this.N(),
                b = this.N();
            return this.oi ? b | a << 8 : a | b << 8
        },
        uc: function() {
            var a = this.N(),
                b = this.N(),
                c = this.N(),
                d = this.N();
            return this.oi ? d | c << 8 | b << 16 | a << 24 : a | b << 8 | c << 16 | d << 24
        },
        yj: function(a, b) {
            var c = new sa(new ArrayBuffer(a));
            this.Fw(c, 0, a);
            return c.Wk(0, a, b)
        },
        j: Sd
    };
    Sb.__name__ = "4C";
    Sb.G = Sd;
    Sb.prototype = u(Sd.prototype, {
        N: function() {
            if (0 == this.Te) throw n.B(new Tc);
            this.Te--;
            return this.a[this.gb++]
        },
        ym: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw n.B(Sa.i2);
            if (0 == this.Te && 0 < c) throw n.B(new Tc);
            this.Te < c && (c = this.Te);
            var d = this.a;
            a = a.a;
            for (var e = 0, f = c; e < f;) {
                var g = e++;
                a[b + g] = d[this.gb + g]
            }
            this.gb += c;
            this.Te -= c;
            return c
        },
        j: Sb
    });
    Tc.__name__ = "4D";
    Tc.prototype = {
        toString: function() {
            return "Eof"
        },
        j: Tc
    };
    var Sa = Ha.e1 = {
        Ub: !0,
        Tb: ["i0", "i1", "i2", "i3"]
    };
    Sa.i0 = {
        u: 0,
        H: "e1",
        toString: y
    };
    Sa.i1 = {
        u: 1,
        H: "e1",
        toString: y
    };
    Sa.i2 = {
        u: 2,
        H: "e1",
        toString: y
    };
    Sa.i3 = (Wc = function(a) {
        var b = {
            u: 3,
            H: "e1",
            toString: y
        };
        b.e = a;
        return b
    }, Wc.hi = ["e"], Wc);
    Sa.xc = [Sa.i0, Sa.i1, Sa.i2];
    Rb.__name__ = "4E";
    Rb.op = function(a, b) {
        Rb.el.setInt32(0, a, !0);
        Rb.el.setInt32(4, b, !0);
        return Rb.el.getFloat64(0, !0)
    };
    oc.__name__ = "4F";
    oc.prototype = {
        P: function() {
            return this.current < this.Ig.length
        },
        next: function() {
            return this.Ig[this.current++]
        },
        j: oc
    };
    var Xb = {
            resolve: function(a, b) {
                var c = a.Hk(b).next();
                if (null == c) {
                    if (a.nodeType == x.Document) a = "Document";
                    else {
                        if (a.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " +
                            (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                        a = a.nodeName
                    }
                    throw n.B(a + " is missing element " + b);
                }
                if (c.nodeType != x.Document && c.nodeType != x.Element) throw n.B("Invalid nodeType " + (null == c.nodeType ? "null" : T.toString(c.nodeType)));
                return c
            }
        },
        Ca = {
            resolve: function(a, b) {
                if (a.nodeType == x.Document) throw n.B("Cannot access document attribute " + b);
                var c = a.get(b);
                if (null == c) {
                    if (a.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    throw n.B(a.nodeName +
                        " is missing attribute " + b);
                }
                return c
            }
        },
        rf = {
            resolve: function(a, b) {
                return a.Hk(b).P()
            }
        },
        nf = {
            resolve: function(a, b) {
                var c = [];
                for (b = a.Hk(b); b.P();) {
                    a = b.next();
                    if (a.nodeType != x.Document && a.nodeType != x.Element) throw n.B("Invalid nodeType " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    c.push(a)
                }
                return c
            }
        };
    oa.__name__ = "50";
    oa.prototype = {
        toString: function() {
            return F.Wd(this).__name__ + ": " + this.message + " at line " + this.lineNumber + " char " + this.sm
        },
        j: oa
    };
    yb.__name__ = "51";
    yb.parse = function(a, b) {
        null == b &&
            (b = !1);
        var c = x.createDocument();
        yb.wo(a, b, 0, c);
        return c
    };
    yb.wo = function(a, b, c, d) {
        null == c && (c = 0);
        for (var e = null, f = 1, g = 1, h = null, k = 0, q = 0, r = 0, p = a.charCodeAt(c), m = new xb, l = 1, v = -1; p == p;) {
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
                        k = c;
                        f = 13;
                        continue
                    }
                    break;
                case 2:
                    switch (p) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) {
                                c += 2;
                                if ("CDATA[" != A.substr(a, c, 6).toUpperCase()) throw n.B(new oa("Expected <![CDATA[", a, c));
                                c += 5;
                                f = 17
                            } else if (68 == a.charCodeAt(c +
                                    1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != A.substr(a, c + 2, 6).toUpperCase()) throw n.B(new oa("Expected <!DOCTYPE", a, c));
                                c += 8;
                                f = 16
                            } else {
                                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw n.B(new oa("Expected \x3c!--", a, c));
                                c += 2;
                                f = 15
                            }
                            k = c + 1;
                            break;
                        case 47:
                            if (null == d) throw n.B(new oa("Expected node name", a, c));
                            k = c + 1;
                            f = 0;
                            g = 10;
                            break;
                        case 63:
                            f = 14;
                            k = c;
                            break;
                        default:
                            f = 3;
                            k = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p)) {
                        if (c == k) throw n.B(new oa("Expected node name",
                            a, c));
                        e = x.createElement(A.substr(a, k, c - k));
                        d.W(e);
                        ++q;
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
                            k = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p)) {
                        if (k == c) throw n.B(new oa("Expected attribute name", a, c));
                        h = A.substr(a, k, c - k);
                        if (e.Ab(h)) throw n.B(new oa("Duplicate attribute [" + h + "]", a, c));
                        f = 0;
                        g = 6;
                        continue
                    }
                    break;
                case 6:
                    if (61 == p) f = 0, g = 7;
                    else throw n.B(new oa("Expected =", a, c));
                    break;
                case 7:
                    switch (p) {
                        case 34:
                        case 39:
                            m =
                                new xb;
                            f = 8;
                            k = c + 1;
                            v = p;
                            break;
                        default:
                            throw n.B(new oa('Expected "', a, c));
                    }
                    break;
                case 8:
                    switch (p) {
                        case 38:
                            l = c - k;
                            m.a += null == l ? A.substr(a, k, null) : A.substr(a, k, l);
                            f = 18;
                            l = 8;
                            k = c + 1;
                            break;
                        case 60:
                        case 62:
                            if (b) throw n.B(new oa("Invalid unescaped " + String.fromCodePoint(p) + " in attribute value", a, c));
                            p == v && (g = c - k, m.a += null == g ? A.substr(a, k, null) : A.substr(a, k, g), g = m.a, m = new xb, e.set(h, g), f = 0, g = 4);
                            break;
                        default:
                            p == v && (g = c - k, m.a += null == g ? A.substr(a, k, null) : A.substr(a, k, g), g = m.a, m = new xb, e.set(h, g), f = 0, g = 4)
                    }
                    break;
                case 9:
                    k = c = yb.wo(a, b, c, e);
                    f = 1;
                    break;
                case 10:
                    if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p)) {
                        if (k == c) throw n.B(new oa("Expected node name", a, c));
                        g = A.substr(a, k, c - k);
                        if (null == d || 0 != d.nodeType) throw n.B(new oa("Unexpected </" + g + ">, tag is not open", a, c));
                        if (d.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == d.nodeType ? "null" : T.toString(d.nodeType)));
                        if (g != d.nodeName) {
                            if (d.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " +
                                (null == d.nodeType ? "null" : T.toString(d.nodeType)));
                            throw n.B(new oa("Expected </" + d.nodeName + ">", a, c));
                        }
                        f = 0;
                        g = 12;
                        continue
                    }
                    break;
                case 11:
                    if (62 == p) f = 1;
                    else throw n.B(new oa("Expected >", a, c));
                    break;
                case 12:
                    if (62 == p) return 0 == q && d.W(x.wi("")), c;
                    throw n.B(new oa("Expected >", a, c));
                case 13:
                    60 == p ? (g = c - k, m.a += null == g ? A.substr(a, k, null) : A.substr(a, k, g), g = x.wi(m.a), m = new xb, d.W(g), ++q, f = 0, g = 2) : 38 == p && (l = c - k, m.a += null == l ? A.substr(a, k, null) : A.substr(a, k, l), f = 18, l = 13, k = c + 1);
                    break;
                case 14:
                    63 == p && 62 == a.charCodeAt(c +
                        1) && (++c, d.W(x.createProcessingInstruction(A.substr(a, k + 1, c - k - 2))), ++q, f = 1);
                    break;
                case 15:
                    45 == p && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (d.W(x.createComment(A.substr(a, k, c - k))), ++q, c += 2, f = 1);
                    break;
                case 16:
                    91 == p ? ++r : 93 == p ? --r : 62 == p && 0 == r && (d.W(x.qt(A.substr(a, k, c - k))), ++q, f = 1);
                    break;
                case 17:
                    93 == p && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (p = x.pt(A.substr(a, k, c - k)), d.W(p), ++q, c += 2, f = 1);
                    break;
                case 18:
                    if (59 == p) {
                        k = A.substr(a, k, c - k);
                        if (35 == k.charCodeAt(0)) k = 120 == k.charCodeAt(1) ? z.parseInt("0" +
                            A.substr(k, 1, k.length - 1)) : z.parseInt(A.substr(k, 1, k.length - 1)), m.a += String.fromCodePoint(k);
                        else if (Object.prototype.hasOwnProperty.call(yb.Co.v, k)) m.a += z.va(yb.Co.v[k]);
                        else {
                            if (b) throw n.B(new oa("Undefined entity: " + k, a, c));
                            m.a += z.va("&" + k + ";")
                        }
                        k = c + 1;
                        f = l
                    } else if (!(97 <= p && 122 >= p || 65 <= p && 90 >= p || 48 <= p && 57 >= p || 58 == p || 46 == p || 95 == p || 45 == p) && 35 != p) {
                        if (b) throw n.B(new oa("Invalid character in entity: " + String.fromCodePoint(p), a, c));
                        m.a += String.fromCodePoint(38);
                        p = c - k;
                        m.a += null == p ? A.substr(a, k, null) : A.substr(a,
                            k, p);
                        --c;
                        k = c + 1;
                        f = l
                    }
            }
            p = a.charCodeAt(++c)
        }
        1 == f && (k = c, f = 13);
        if (13 == f) {
            if (0 == d.nodeType) {
                if (d.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == d.nodeType ? "null" : T.toString(d.nodeType)));
                throw n.B(new oa("Unclosed node <" + d.nodeName + ">", a, c));
            }
            if (c != k || 0 == q) l = c - k, m.a += null == l ? A.substr(a, k, null) : A.substr(a, k, l), d.W(x.wi(m.a));
            return c
        }
        if (!b && 18 == f && 13 == l) return m.a += String.fromCodePoint(38), l = c - k, m.a += null == l ? A.substr(a, k, null) : A.substr(a, k, l), d.W(x.wi(m.a)), c;
        throw n.B(new oa("Unexpected end",
            a, c));
    };
    Sc.__name__ = "52";
    Sc.print = function(a, b) {
        null == b && (b = !1);
        b = new Sc(b);
        b.vn(a, "");
        return b.O.a
    };
    Sc.prototype = {
        vn: function(a, b) {
            switch (a.nodeType) {
                case 0:
                    this.O.a += z.va(b + "<");
                    if (a.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    this.O.a += z.va(a.nodeName);
                    for (var c = a.attributes(); c.P();) {
                        var d = c.next();
                        this.O.a += z.va(" " + d + '="');
                        d = Ua.np(a.get(d), !0);
                        this.O.a += z.va(d);
                        this.O.a += '"'
                    }
                    if (this.Pu(a)) {
                        this.O.a += ">";
                        this.ne &&
                            (this.O.a += "\n");
                        if (a.nodeType != x.Document && a.nodeType != x.Element) throw n.B("Bad node type, expected Element or Document but found " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                        c = 0;
                        for (d = a.children; c < d.length;) {
                            var e = d[c++];
                            this.vn(e, this.ne ? b + "\t" : b)
                        }
                        this.O.a += z.va(b + "</");
                        if (a.nodeType != x.Element) throw n.B("Bad node type, expected Element but found " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                        this.O.a += z.va(a.nodeName);
                        this.O.a += ">"
                    } else this.O.a += "/>";
                    this.ne && (this.O.a += "\n");
                    break;
                case 1:
                    if (a.nodeType == x.Document || a.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    a = a.nodeValue;
                    0 != a.length && (d = b + Ua.np(a), this.O.a += z.va(d), this.ne && (this.O.a += "\n"));
                    break;
                case 2:
                    this.O.a += z.va(b + "<![CDATA[");
                    if (a.nodeType == x.Document || a.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    this.O.a += z.va(a.nodeValue);
                    this.O.a += "]]\x3e";
                    this.ne && (this.O.a += "\n");
                    break;
                case 3:
                    if (a.nodeType ==
                        x.Document || a.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    a = a.nodeValue;
                    a = a.replace(/[\n\r\t]+/g, "");
                    this.O.a += null == b ? "null" : "" + b;
                    d = Ua.trim("\x3c!--" + a + "--\x3e");
                    this.O.a += z.va(d);
                    this.ne && (this.O.a += "\n");
                    break;
                case 4:
                    if (a.nodeType == x.Document || a.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    this.O.a += z.va("<!DOCTYPE " + a.nodeValue + ">");
                    this.ne && (this.O.a += "\n");
                    break;
                case 5:
                    if (a.nodeType ==
                        x.Document || a.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    this.O.a += z.va("<?" + a.nodeValue + "?>");
                    this.ne && (this.O.a += "\n");
                    break;
                case 6:
                    if (a.nodeType != x.Document && a.nodeType != x.Element) throw n.B("Bad node type, expected Element or Document but found " + (null == a.nodeType ? "null" : T.toString(a.nodeType)));
                    c = 0;
                    for (d = a.children; c < d.length;) e = d[c++], this.vn(e, b)
            }
        },
        Pu: function(a) {
            if (a.nodeType != x.Document && a.nodeType != x.Element) throw n.B("Bad node type, expected Element or Document but found " +
                (null == a.nodeType ? "null" : T.toString(a.nodeType)));
            var b = 0;
            for (a = a.children; b < a.length;) {
                var c = a[b++];
                switch (c.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (c.nodeType == x.Document || c.nodeType == x.Element) throw n.B("Bad node type, unexpected " + (null == c.nodeType ? "null" : T.toString(c.nodeType)));
                        if (0 != Ua.Sp(c.nodeValue).length) return !0
                }
            }
            return !1
        },
        j: Sc
    };
    F.__name__ = "53";
    F.Wd = function(a) {
        if (null == a) return null;
        if (a instanceof Array) return Array;
        var b = a.j;
        if (null != b) return b;
        a = F.In(a);
        return null != a ? F.As(a) :
            null
    };
    F.Eg = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        "function" == c && (a.__name__ || a.Ub) && (c = "object");
        switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a.H) {
                    var d = Ha[a.H];
                    c = d.Tb[a.u];
                    var e = d[c];
                    if (e.hi) {
                        b += "\t";
                        d = [];
                        var f = 0;
                        for (e = e.hi; f < e.length;) {
                            var g = e[f];
                            f += 1;
                            d.push(F.Eg(a[g], b))
                        }
                        return c + "(" + d.join(",") + ")"
                    }
                    return c
                }
                if (a instanceof Array) {
                    c = "[";
                    b += "\t";
                    d = 0;
                    for (f = a.length; d < f;) e = d++, c += (0 < e ? "," : "") + F.Eg(a[e], b);
                    return c + "]"
                }
                try {
                    d = a.toString
                } catch (h) {
                    return "???"
                }
                if (null !=
                    d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = "{\n";
                b += "\t";
                d = null != a.hasOwnProperty;
                f = null;
                for (f in a) d && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"), c += b + f + " : " + F.Eg(a[f], b));
                b = b.substring(1);
                return c + ("\n" + b + "}");
            case "string":
                return a;
            default:
                return String(a)
        }
    };
    F.$j = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d =
                    0, e = c.length; d < e;) {
                var f = d++;
                f = c[f];
                if (f == b || F.$j(f, b)) return !0
            }
        return F.$j(a.G, b)
    };
    F.ze = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Array:
                return a instanceof Array;
            case sf:
                return "boolean" == typeof a;
            case tf:
                return null != a;
            case uf:
                return "number" == typeof a;
            case vf:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (F.ys(a, b)) return !0
                    } else {
                        if ("object" == typeof b && F.zs(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == of && null !=
                    a.__name__ || b == wf && null != a.Ub ? !0 : null != a.H ? Ha[a.H] == b : !1
        }
    };
    F.ys = function(a, b) {
        return a instanceof b ? !0 : b.__isInterface__ ? F.$j(F.Wd(a), b) : !1
    };
    F.Aa = function(a, b) {
        if (null == a || F.ze(a, b)) return a;
        throw n.B("Cannot cast " + z.va(a) + " to " + z.va(b));
    };
    F.In = function(a) {
        a = F.Bs.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    F.zs = function(a) {
        return null != F.In(a)
    };
    F.As = function(a) {
        return Va[a]
    };
    kf.__name__ = "54";
    kf.nu = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            if (0 ==
                a.length) {
                var b = "_hx_" + Math.random();
                a.setItem(b, b);
                a.removeItem(b)
            }
            return a
        } catch (c) {
            return null
        }
    };
    Me.__name__ = "55";
    Me.prototype = {
        j: Me
    };
    Qb.__name__ = "56";
    Qb.prototype = {
        load: function(a) {
            if (this.Si(a) || this.ph(a) || this.oh(a)) return !1;
            this.Ol++;
            a = new Qd(a, this);
            a.V = this.Zp--;
            if (this.wd.length == this.Qv) return this.ad.enqueue(a), !0;
            this.wd.push(a);
            a.load();
            return !0
        },
        stop: function() {
            this.ad.clear()
        },
        Lq: function(a) {
            if (!this.Si(a) || this.ph(a) || this.oh(a)) return !1;
            var b = W.find(this.ad, function(b) {
                return -1 <
                    b.ed.url.indexOf(a)
            });
            if (null == b) return !1;
            this.ad.Pw(b, ++this.Yp);
            return !0
        },
        Ki: function(a) {
            if (null == this.ad || 0 == this.Ol) return 1;
            if (null == a) return this.cq / this.Ol;
            for (var b = 0, c = 0, d = 0, e = this.wd; d < e.length;) {
                var f = e[d];
                ++d;
                if (null == a || -1 < a.indexOf(f.ed.url)) ++b, c += f.ed.Jh
            }
            for (f = this.ad.iterator(); f.P();)
                if (d = f.next(), null == a || -1 < a.indexOf(d.ed.url)) ++b, c += 0;
            for (d = 0; d < a.length;) f = a[d], ++d, this.ph(f) && (++b, ++c);
            return 0 == b ? 0 : c / b
        },
        Si: function(a) {
            function b(b) {
                return -1 < b.ed.url.indexOf(a)
            }
            return null ==
                this.ad ? !1 : 0 < W.count(this.ad, b) + W.count(this.wd, b)
        },
        dw: function(a) {
            this.dg(new Me(a.ed.url, a.ed.data, a.ed.ee));
            null != a.Ed && (a.Ed(a), a.Ed = null);
            A.remove(this.wd, a);
            this.cq++;
            0 < this.ad.g ? (a = this.ad.yt(), this.wd.push(a), a.load()) : 0 == this.wd.length && (this.Zp = this.Yp = 0, null != this.Dd && this.Dd())
        },
        cw: function() {
            this.stop()
        },
        ph: function(a) {
            return l.Jf(l.td(a))
        },
        oh: function(a) {
            return l.oh(l.td(a))
        },
        j: Qb
    };
    Rd.__name__ = "57";
    Rd.__isInterface__ = !0;
    Rd.prototype = {
        j: Rd
    };
    Qd.__name__ = "58";
    Qd.__interfaces__ = [Rd];
    Qd.prototype = {
        load: function() {
            var a = this;
            this.ed.load(function() {
                Qb.Yn += 0;
                a.be.dw(a);
                a.o()
            }, function() {
                a.be.cw();
                a.o()
            })
        },
        o: function() {
            this.be = null;
            this.ed.o()
        },
        j: Qd
    };
    l.__name__ = "59";
    l.ax = function(a) {
        l.kk = a
    };
    l.Eu = function() {
        return l.Ir
    };
    l.qx = function() {
        l.Ir = "hd"
    };
    l.Wo = function() {
        return l.language
    };
    l.Im = function(a) {
        if (null != a && !(new M("^[a-z]{2}$", "")).match(a)) throw n.B("invalid ISO 639-1 code");
        l.language = a;
        W.Ab(["tr", "ru", "es", "en", "de"], function(a) {
            return a == l.language
        }) || (l.language = "en")
    };
    l.Je = function() {
        return l.Sn
    };
    l.$w = function(a) {
        if (!(new M("^[a-z3]{3}$", "")).match(a)) throw n.B("invalid audio file format");
        l.Sn = a
    };
    l.Du = function() {
        return l.Ux.slice()
    };
    l.ju = function() {
        return l.Xu.slice()
    };
    l.Ec = function(a) {
        if (l.Bh.v.hasOwnProperty(a)) return l.Bh.v[a];
        if (65535 <= a && Object.prototype.hasOwnProperty.call(l.Ph.v, null == a ? "null" : "" + a)) {
            var b = l.Ph.v[null == a ? "null" : "" + a];
            return l.Bh.v[a] = b
        }
        b = l.mf[a];
        var c = new M("{(?:language|audio|quality)}", "");
        c.match(b) && (c = new M("{language}", ""), c.match(b) && (b = b.replace(c.r, z.va(l.language))),
            c = new M("{audio}", "g"), c.match(b) && (b = b.replace(c.r, l.Sn)), c = new M("{quality}", "g"), c.match(b) && (b = b.replace(c.r, z.va(l.Ir).toLowerCase())));
        l.Bh.v[a] = "" + l.kk + "/" + b;
        return l.Bh.v[a]
    };
    l.wu = function() {
        var a = [20, 19, 18, 17];
        null == a && (a = l.iu());
        for (var b = [], c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            b.push(l.Ec(d))
        }
        return b
    };
    l.iu = function() {
        for (var a = [], b = 0; 21 > b;) {
            var c = b++;
            a.push(c)
        }
        return a
    };
    l.zu = function() {
        for (var a = [], b = 0, c = l.ww; b < c.length;) {
            var d = c[b];
            ++b;
            l.Wm(d) && a.push(d)
        }
        return a
    };
    l.Au = function() {
        for (var a =
                [], b = 0, c = l.Qw; b < c.length;) {
            var d = c[b];
            ++b;
            l.Wm(d) && a.push(d)
        }
        return a
    };
    l.td = function(a) {
        function b(b, c) {
            b.match(a) && (a = b.replace(a, c))
        }
        if (Object.prototype.hasOwnProperty.call(l.Ph.v, a)) return z.parseInt(l.Ph.v[a]);
        b(new M("^(" + l.kk + "/)(.*)", ""), "$2");
        var c = ["tr", "ru", "es", "en", "de"];
        0 < c.length && b(new M("([/_])(" + c.join("|") + ")(/|(\\.\\S{3,4}$))", ""), "$1{language}$3");
        b(new M("([/_])(sd|hd)(/|(\\.\\S{3,4}$))", ""), "$1{quality}$3");
        c = ["ogg", "mp3", "aac"];
        0 < c.length && (b(new M("(.*?)\\.(" + c.join("|") + ")$",
            ""), "$1.{audio}"), b(new M("((" + c.join("|") + ")\\/)", ""), "{audio}/"));
        return l.mf.indexOf(a)
    };
    l.Qy = function() {
        return 0
    };
    l.Wm = function(a) {
        if (l.rl(a)) {
            var b = l.Je();
            return null != b && W.Ab(["ogg", "mp3", "aac"], function(a) {
                return a == b
            })
        }
        return !0
    };
    l.getData = function(a) {
        return l.$i.v[a]
    };
    l.setData = function(a, b, c) {
        var d = l.$i.v.hasOwnProperty(a);
        if (!d)
            if (l.zi.v.hasOwnProperty(a)) l.locked.v[a] = !0, d = l.zi.v[a], l.zi.remove(a), d(a, b, function(b) {
                l.locked.remove(a);
                l.setData(a, b, c)
            });
            else if (null != c && (l.ee.v[a] = c), l.$i.v[a] =
            b, !d)
            for (b = l.Zn, d = b.length; - 1 < --d;)
                if (b[d].id == a) {
                    var e = b[d];
                    b[d] = b[b.length - 1];
                    b.pop();
                    e.Jt()
                }
    };
    l.Jf = function(a) {
        return null != l.$i.v[a]
    };
    l.qu = function(a) {
        return l.ee.v[a]
    };
    l.rl = function(a) {
        return 65535 <= a ? (a = l.Ph.v[null == a ? "null" : "" + a], (new M("(ogg|aac|mp3)$", "")).match(a)) : (new M("{audio}", "")).match(l.mf[a])
    };
    l.vd = function(a) {
        return (new M("music_", "")).match(l.mf[a])
    };
    l.ov = function(a) {
        return (new M("sounds\\.", "g")).match(l.mf[a])
    };
    l.oh = function(a) {
        return l.locked.v.hasOwnProperty(a)
    };
    l.Qu = function(a) {
        return 65535 <=
            a ? !1 : (new M("{quality}", "")).match(l.mf[a])
    };
    l.ag = function(a, b) {
        null != l.Ec(a) && (l.Jf(a) ? b(a) : l.Zn.push(new Le(a, b)))
    };
    l.Kw = function(a, b) {
        l.zi.v[a] = b
    };
    l.Ys = function(a) {
        if (a instanceof ArrayBuffer) {
            if ("TextDecoder" in window) return a = new DataView(a), (new TextDecoder("utf-8")).decode(a);
            a = sa.Tl(a);
            return a.Wk(0, a.length)
        }
        return z.va(a)
    };
    l.Py = function() {
        return ["tr", "ru", "es", "en", "de"]
    };
    l.Oy = function() {
        return ["ogg", "mp3", "aac"]
    };
    l.Hy = function() {
        return [20, 19, 18, 17]
    };
    l.Iy = function() {
        return [20, 19, 18, 17]
    };
    Le.__name__ = "5A";
    Le.prototype = {
        Jt: function() {
            this.Mo(this.id);
            this.Mo = null
        },
        j: Le
    };
    nc.__name__ = "5B";
    nc.prototype = {
        o: function() {
            this.Za = this.zh = this.Ed = this.data = null
        },
        load: function(a, b) {
            function c(a) {
                return 0 < a.length ? (new M("(?:" + a.join("|") + ")", "i")).match(e) : !1
            }
            var d = this;
            this.Ed = a;
            this.zh = b;
            var e = "";
            nc.state.v[this.url] = 1;
            a = new M("\\.(\\w+)$", "g");
            a.match(this.url) && (e = a.Ja(1));
            c(["ogg", "mp3", "aac"]) ? this.xn(this.url, "arraybuffer", function(a) {
                d.Dd(a)
            }) : c(l.ju()) ? (this.Za = window.document.createElement("img"),
                this.Za.addEventListener("load", E(this, this.lq)), this.xn(this.url, "blob", function(a) {
                    var b = new FileReader;
                    b.onload = function(c) {
                        (new M("\\.png$", "")).match(d.url) ? d.ee = d.yu(c.target.result) : (new M("\\.jpg$", "")).match(d.url) && (d.ee = d.lu(c.target.result));
                        d.Za.src = URL.createObjectURL(a);
                        b.onload = null
                    };
                    b.readAsArrayBuffer(a)
                })) : (a = "arraybuffer", c(l.Du()) && (a = "text"), this.xn(this.url, a, function(a) {
                d.Dd(a)
            }))
        },
        Dd: function(a) {
            this.data = a;
            nc.state.v[this.url] = 2;
            this.Ed();
            this.Ed = null
        },
        lq: function() {
            this.Za.removeEventListener("load",
                E(this, this.lq));
            var a = window.document.createElement("canvas");
            a.width = this.Za.width;
            a.height = this.Za.height;
            a.getContext("2d", null).drawImage(this.Za, 0, 0);
            this.Dd(a);
            this.Za = null
        },
        xn: function(a, b, c) {
            var d = this,
                e = new XMLHttpRequest;
            e.onerror = function() {
                null != d.zh && d.zh();
                e.onerror = e.onload = e.onprogress = null
            };
            e.onload = function() {
                d.Jh = 1;
                if (404 == e.status) null != d.zh && d.zh();
                else {
                    var a = e.response;
                    e.onerror = e.onload = e.onprogress = null;
                    c(a)
                }
            };
            e.onprogress = function(a) {
                0 < a.total && (d.Jh = a.loaded / a.total)
            };
            try {
                e.open("GET",
                    null != this.Uj ? "" + a + "?" + this.Uj : a, !0), e.responseType = b, e.send()
            } catch (f) {}
            return e
        },
        yu: function(a) {
            a = sa.Tl(a);
            a = new Sb(a);
            a.tx(!0);
            if (137 != a.N() || 80 != a.N() || 78 != a.N() || 71 != a.N() || 13 != a.N() || 10 != a.N() || 26 != a.N() || 10 != a.N()) return null;
            a: for (;;) {
                var b = a.uc(),
                    c = a.yj(4);
                b = a.read(b);
                a.uc();
                switch (c) {
                    case "IEND":
                        break a;
                    case "tEXt":
                        c = new Sb(b);
                        b = c.an;
                        var d = "",
                            e = c.N();
                        for (--b; 0 != e;) d += String.fromCodePoint(e), e = c.N(), --b;
                        if ("Comment" != d) c = null;
                        else {
                            for (d = ""; 0 < b;) e = c.N(), d += String.fromCodePoint(e), --b;
                            c = d
                        }
                        if (null !=
                            c) return c
                }
            }
            return null
        },
        lu: function(a) {
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
        j: nc
    };
    ja.__name__ = "5C";
    ja.zp = function() {
        return J.isSupported()
    };
    ja.Je = function() {
        return J.Je()
    };
    ja.Dc = function() {
        return qa.Ia()
    };
    mc.__name__ = "5D";
    mc.prototype = {
        j: mc
    };
    qa.__name__ = "5E";
    qa.Ia = function() {
        if (null != qa.Fg) return qa.Fg;
        var a = ja.zp();
        return qa.Fg = a ? J.Cp() ? new Rc : new Pd : new qa
    };
    qa.prototype = {
        hg: function() {},
        Kh: function() {},
        play: function() {
            return -1
        },
        stop: function(a, b) {
            null == b && (b = 0);
            if (0 > a) return !1;
            if (1E4 > a) {
                for (var c = !1, d = 0, e = W.filter(this.vc, function(b) {
                        return b.jd.id == a
                    }); d < e.length;) {
                    var f = e[d];
                    ++d;
                    c = !0;
                    f.stop(b)
                }
                return c
            }
            f = W.find(this.vc, function(b) {
                return b.id == a
            });
            return null != f ? (f.stop(b), !0) : !1
        },
        Of: function(a) {
            return 0 > a ? !1 : 1E4 > a ? W.Ab(this.vc, function(b) {
                return b.jd.id ==
                    a
            }) : W.Ab(this.vc, function(b) {
                return b.id == a
            })
        },
        td: function(a) {
            var b = W.find(this.vc, function(b) {
                return b.jd.id == a
            });
            return null != b ? b.id : -1
        },
        vv: function(a) {
            return null != this.lc[a]
        },
        qe: function(a) {
            this.El = 0 > a ? 0 : 1 < a ? 1 : a;
            this.Ay();
            this.By()
        },
        Zq: function(a, b, c) {
            if (!this.enabled || !this.vv(a)) return -1;
            if (b && this.Of(a)) return this.td(a);
            b && (c = !0);
            if (!c && this.Vx(a)) return -1;
            a = this.tu(this.lc[a].vd, c);
            return 0 > a ? -1 : a
        },
        vq: function(a) {
            this.vc.add(a);
            this.vc.g > this.Up && (this.Up = this.vc.g)
        },
        uq: function(a) {
            this.Rd &=
                ~(1 << a.channel);
            this.vc.remove(a)
        },
        Vx: function(a) {
            a = this.lc[a];
            if (a.vd) return !1;
            var b = G.time;
            if (b - a.Lp < this.Wx) return !0;
            a.Lp = b;
            return !1
        },
        tu: function(a, b) {
            if (a) {
                for (var c = 0; c < this.Xp;) {
                    if (0 == (this.Rd & 1 << c)) return this.Rd |= 1 << c, c;
                    ++c
                }
                return -1
            }
            c = -1;
            var d = this.Xp;
            for (a = d + this.Pv; d < a;) {
                if (0 == (this.Rd & 1 << d)) {
                    this.Rd |= 1 << d;
                    c = d;
                    break
                }++d
            }
            if (b && 0 > c) {
                b = null;
                a = 0;
                for (c = this.vc.iterator(); c.P();) d = c.next(), !d.jd.vd && !d.loop && d.Ki() > a && (a = d.Ki(), b = d);
                if (null == b) return -1;
                c = b.channel;
                b.stop()
            }
            return c
        },
        Ay: function() {
            var a =
                this.vc,
                b = a.f,
                c = 0;
            for (a = a.g; c < a;) {
                var d = c++;
                d = b[d];
                d.jd.vd && d.di()
            }
        },
        By: function() {
            var a = this.vc,
                b = a.f,
                c = 0;
            for (a = a.g; c < a;) {
                var d = c++;
                d = b[d];
                d.jd.vd || d.di()
            }
        },
        j: qa
    };
    pb.__name__ = "60";
    pb.prototype = {
        o: function() {
            this.Dd = this.af = this.jd = null;
            null != this.Bw && this.Bw.L()
        },
        stop: function() {},
        Ki: function() {
            return this.Sk() / this.Tc()
        },
        Sk: function() {
            return NaN
        },
        Tc: function() {
            return NaN
        },
        di: function() {},
        j: pb
    };
    J.__name__ = "61";
    J.Bp = function() {
        return !!window.MSInputMethodContext && !!document.documentMode
    };
    J.nv = function() {
        return J.active
    };
    J.Cp = function() {
        return J.yl
    };
    J.tl = function() {
        return null != J.lf && J.lf ? "suspended" == J.context.state : !1
    };
    J.resume = function(a) {
        try {
            if ("running" != J.context.state) {
                J.context.resume().then(function() {
                    J.active = !0;
                    a()
                });
                return
            }
        } catch (b) {}
        J.active = !0;
        a()
    };
    J.isSupported = function() {
        if (null != J.lf) return J.yl ? !0 : J.lf;
        if (J.Bp()) return J.lf = !1, J.yl = !0;
        J.lf = !1;
        try {
            J.context = function() {
                    try {
                        if ("undefined" !== typeof AudioContext) return new AudioContext;
                        if ("undefined" !== typeof webkitAudioContext) return new webkitAudioContext
                    } catch (a) {}
                    return null
                }(),
                J.lf = null != J.context, J.context.onstatechange = function() {
                    J.active = !J.tl()
                }, J.active = !J.tl()
        } catch (a) {}
        return J.lf
    };
    J.Je = function() {
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
            return N.$(d, c.canPlayType(b).replace(/^no$/, ""))
        }
        var b = J.ni;
        if ("undefined" !== typeof b) return b;
        if (J.Bp()) return "aac";
        if (-1 != Va.navigator.userAgent.indexOf("EdgA/")) return J.ni = "ogg";
        var c = null;
        try {
            c = "undefined" !== typeof Audio ? new Audio : null
        } catch (h) {
            return null
        }
        if (!c ||
            "function" !== typeof c.canPlayType) return null;
        var d = {
            probably: 2,
            maybe: 1,
            "": 0
        };
        b = {};
        b.mp3 = a("audio/mp3;");
        b.ogg = a('audio/ogg; codecs="vorbis"');
        b.aac = a("audio/aac;"); - 1 < Va.navigator.userAgent.indexOf("OPR") && (b.aac = 0);
        for (var e = 0, f = ["aac", "ogg", "mp3"]; e < f.length;) {
            var g = f[e];
            ++e;
            if (0 < N.$(b, g)) return J.ni = g
        }
        return J.ni = null
    };
    J.getContext = function() {
        J.isSupported();
        return J.context
    };
    jf.__name__ = "62";
    jf.Pt = function(a, b) {
        var c = J.getContext(),
            d = a.sampleRate,
            e = [],
            f = 0,
            g = b.length;
        if (1 == a.numberOfChannels)
            for (var h =
                    a.getChannelData(0); f < g;) {
                var k = d / 1E3 * b[f++] | 0,
                    q = d / 1E3 * b[f++] | 0;
                a = c.createBuffer(1, q - k, d);
                k = h.subarray(k, q);
                try {
                    a.copyToChannel(k, 0)
                } catch (m) {
                    a.getChannelData(0).set(k)
                }
                e.push(a)
            } else {
                h = a.getChannelData(0);
                for (var r = a.getChannelData(1); f < g;) {
                    k = d / 1E3 * b[f++] | 0;
                    q = d / 1E3 * b[f++] | 0;
                    a = c.createBuffer(2, q - k, d);
                    var p = h.subarray(k, q);
                    k = r.subarray(k, q);
                    try {
                        a.copyToChannel(p, 0), a.copyToChannel(k, 1)
                    } catch (m) {
                        a.getChannelData(0).set(p), a.getChannelData(1).set(k)
                    }
                    e.push(a)
                }
            }
        return e
    };
    Rc.__name__ = "63";
    Rc.G = qa;
    Rc.prototype =
        u(qa.prototype, {
            hg: function(a, b, c, d) {
                function e() {
                    h.removeEventListener("canplaythrough", e);
                    g = !0
                }
                null == c && (c = !1);
                var f = this;
                qa.prototype.hg.call(this, a, b, c, d);
                var g = !1,
                    h = new Audio;
                h.addEventListener("canplaythrough", e, !1);
                h.src = b;
                h.Kq = "auto";
                G.ta(function() {
                    g && 4 == h.readyState && (f.lc[a] = new mc(a, h, c), d(h), G.detach())
                })
            },
            Kh: function(a, b, c) {
                var d = this;
                qa.prototype.Kh.call(this, a, b, c);
                this.Md = a;
                this.hg(1E3, b, !1, function(b) {
                    for (var e = 0, g = a.length; e < g;) {
                        var h = e++;
                        d.lc[h + 1E3] = new mc(h + 1E3, b, !1)
                    }
                    c(b)
                })
            },
            play: function(a, b, c, d, e) {
                null == d && (d = 0);
                null == c && (c = !1);
                null == b && (b = !1);
                c = this.Zq(a, b, c);
                if (0 > c) return -1;
                a = 1E3 <= a ? new Qc(this, this.lc[1E3], a - 1E3) : new Qc(this, this.lc[a], null, b);
                a.id = this.aq++;
                a.channel = c;
                a.loop = b;
                a.offset = d;
                a.Dd = e;
                this.vq(a);
                return a.id
            },
            j: Rc
        });
    Qc.__name__ = "64";
    Qc.G = pb;
    Qc.prototype = u(pb.prototype, {
        Sk: function() {
            return (this.node.currentTime - this.min) % this.Tc()
        },
        Tc: function() {
            return this.max - this.min
        },
        stop: function() {
            this.Zc && (this.node.pause(), this.node.removeEventListener("timeupdate",
                E(this, this.xq)), this.node.removeEventListener("loadedmetadata", E(this, this.em)), this.node = this.node.onended = null, this.af.uq(this), this.Zc = !1)
        },
        xq: function() {
            this.node.currentTime > this.max && this.stop()
        },
        em: function() {
            this.node.currentTime = this.min;
            this.node.removeEventListener("loadedmetadata", E(this, this.em))
        },
        di: function() {
            this.node.volume = (this.jd.vd ? this.af.Mv : this.af.Nv) * this.af.El * this.volume
        },
        j: Qc
    });
    Pd.__name__ = "65";
    Pd.G = qa;
    Pd.prototype = u(qa.prototype, {
        hg: function(a, b, c, d) {
            null == c && (c = !1);
            var e = this;
            qa.prototype.hg.call(this, a, b, c, d);
            this.decode(b, function(b) {
                null == b ? d(null) : (e.lc[a] = new mc(a, b, c), d(b))
            })
        },
        Kh: function(a, b, c) {
            var d = this;
            qa.prototype.Kh.call(this, a, b, c);
            this.decode(b, function(b) {
                if (null == b) c(null);
                else try {
                    for (var e = jf.Pt(b, a), g = 0, h = a.length; g < h;) {
                        var k = g++;
                        d.lc[k + 1E3] = new mc(k + 1E3, e[k], !1)
                    }
                    c(b)
                } catch (q) {
                    c(null)
                }
            })
        },
        play: function(a, b, c, d, e) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            if (!J.nv()) return -1;
            c = this.Zq(a, b, c);
            if (0 > c) return -1;
            a = new Pb(this, this.lc[a]);
            a.id =
                this.aq++;
            a.channel = c;
            a.loop = b;
            a.offset = d;
            a.Dd = e;
            a.play();
            this.vq(a);
            return a.id
        },
        qe: function(a) {
            this.El = 0 > a ? 0 : 1 < a ? 1 : a;
            this.Qk().pr(a)
        },
        decode: function(a, b) {
            (new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(2, 1323E4, 44100)).decodeAudioData(a, function(a) {
                b(a)
            }, function() {
                b(null)
            })
        },
        Qk: function() {
            null == this.fj && (this.fj = new Ob, this.fj.type = 5, this.fj.connect(new Od));
            return this.fj
        },
        pu: function() {
            null == this.hj && (this.hj = new Ob, this.hj.type = 3, this.hj.connect(this.Qk()));
            return this.hj
        },
        ou: function() {
            null == this.gj && (this.gj = new Ob, this.gj.type = 4, this.gj.connect(this.Qk()));
            return this.gj
        },
        j: Pd
    });
    Pb.__name__ = "66";
    Pb.G = pb;
    Pb.prototype = u(pb.prototype, {
        o: function() {
            pb.prototype.o.call(this);
            for (var a = this.zc; null != a;) {
                var b = a.O;
                if (2 < a.type) break;
                A.remove(a.O.inputs, a);
                a.n.disconnect();
                a.o();
                a = b
            }
            this.zc = this.data = null
        },
        play: function() {
            if (0 < this.offset && this.offset > this.data.length - 50) this.onended();
            else {
                this.startTime = J.getContext().currentTime;
                if (null == this.zc) {
                    this.zc = new Nd;
                    var a =
                        this.af;
                    this.zc.connect(this.jd.vd ? a.ou() : a.pu())
                }
                this.Zc = !0;
                this.zc.play(this.data, this.loop, this.offset, E(this, this.onended))
            }
        },
        stop: function(a) {
            null == a && (a = 0);
            if (this.Zc && null != this.zc) try {
                this.zc.stop(this.startTime + a)
            } catch (b) {
                this.onended()
            }
        },
        Sk: function() {
            return (J.getContext().currentTime - this.startTime) % this.Tc()
        },
        Tc: function() {
            return this.data.duration
        },
        di: function() {
            if (Pb.No && null != this.zc) try {
                var a = this.zc.get(2);
                if (null == a) {
                    a = new Ob;
                    var b = this.zc.get(1);
                    null == b ? this.zc.append(a) : b.append(a)
                }
                a.pr(this.volume)
            } catch (c) {
                Pb.No = !1
            }
        },
        onended: function() {
            this.Zc = !1;
            var a = this.Dd;
            this.af.uq(this);
            this.o();
            null != a && a()
        },
        j: Pb
    });
    Ga.__name__ = "67";
    Ga.prototype = {
        get: function(a) {
            for (var b = this; null != b;) {
                if (b.type == a) return b;
                b = b.O
            }
            return null
        },
        o: function() {
            this.n = this.O = this.inputs = null
        },
        connect: function(a) {
            this.O = a;
            a.inputs.push(this);
            this.n.disconnect();
            this.n.connect(a.n)
        },
        append: function(a) {
            A.remove(this.O.inputs, this);
            a.connect(this.O);
            this.connect(a)
        },
        j: Ga
    };
    Od.__name__ = "68";
    Od.G = Ga;
    Od.prototype = u(Ga.prototype, {
        j: Od
    });
    Nd.__name__ =
        "69";
    Nd.G = Ga;
    Nd.prototype = u(Ga.prototype, {
        o: function() {
            this.n.onended = null;
            Ga.prototype.o.call(this)
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
        j: Nd
    });
    Ob.__name__ = "6A";
    Ob.G = Ga;
    Ob.prototype = u(Ga.prototype, {
        pr: function(a) {
            this.n.gain.value = a
        },
        j: Ob
    });
    Ke.__name__ = "6B";
    Ke.G = Ga;
    Ke.prototype = u(Ga.prototype, {
        j: Ke
    });
    Pc.__name__ = "6C";
    Pc.__interfaces__ = [zb];
    Pc.prototype = {
        ir: function(a) {
            for (var b = this.f, c = 0, d = this.Pb * this.cb; c <
                d;) {
                var e = c++;
                b[e] = a
            }
            return this
        },
        forEach: function(a) {
            for (var b = this.f, c = this.Pb, d = 0, e = this.Pb * this.cb; d < e;) {
                var f = d++;
                b[f] = a(b[f], f % c, f / c | 0)
            }
            return this
        },
        Qf: function(a) {
            for (var b = this.f, c = 0, d = this.Pb * this.cb; c < d;) {
                var e = c++;
                a(b[e])
            }
            return this
        },
        j: Pc
    };
    Oc.__name__ = "6D";
    Oc.__isInterface__ = !0;
    Oc.prototype = {
        j: Oc
    };
    Nc.__name__ = "6E";
    Nc.prototype = {
        j: Nc
    };
    Mc.__name__ = "6F";
    Mc.__interfaces__ = [Oc];
    Mc.prototype = {
        o: function() {
            this.f = this.Db = null
        },
        P: function() {
            return this.pa < this.Wa
        },
        next: function() {
            return this.f[this.pa++]
        },
        remove: function() {
            this.Db.Uq(--this.pa);
            this.Wa--
        },
        j: Mc
    };
    Md.__name__ = "70";
    Md.__isInterface__ = !0;
    Md.__interfaces__ = [zb];
    Lc.__name__ = "71";
    Lc.__interfaces__ = [Md];
    Lc.prototype = {
        clear: function(a) {
            null == a && (a = !1);
            a && S.Cd(this.f);
            this.ma = this.g = 0
        },
        $h: function() {
            if (0 == this.g) return [];
            for (var a = this.f, b = Array(this.g), c = 0, d = this.g; c < d;) {
                var e = c++;
                b[e] = a[(e + this.ma) % this.s]
            }
            return b
        },
        M: function() {
            var a = this.s;
            this.s = Nb.Bc(this.$b, this.s);
            this.Id(a, this.s)
        },
        Id: function(a, b) {
            var c = Array(b);
            a < b ? this.ma + this.g >
                a ? (b = a - this.ma, a -= b, S.Ya(this.f, this.ma, c, 0, b), S.Ya(this.f, 0, c, b, a)) : S.Ya(this.f, this.ma, c, 0, this.g) : this.ma + this.g > a ? (b = a - this.ma, a = this.g - this.ma, S.Ya(this.f, this.ma, c, 0, b), S.Ya(this.f, 0, c, this.ma, a)) : S.Ya(this.f, this.ma, c, 0, this.g);
            this.f = c;
            this.ma = 0
        },
        j: Lc
    };
    Je.__name__ = "72";
    Je.__isInterface__ = !0;
    Je.__interfaces__ = [zb];
    ob.__name__ = "73";
    ob.__interfaces__ = [Je];
    ob.prototype = {
        clear: function(a) {
            null == a && (a = !1);
            a && S.Cd(this.f);
            this.I = 0
        },
        M: function() {
            this.s = Nb.Bc(this.$b, this.s);
            this.Id(this.s)
        },
        Id: function(a) {
            a =
                Array(a);
            S.Ya(this.f, 0, a, 0, this.I);
            this.f = a
        },
        j: ob
    };
    Ld.__name__ = "75";
    Ld.__interfaces__ = [zb];
    Ld.prototype = {
        dk: function(a) {
            if (null != a.ce) return a;
            this.g++;
            a.next = this.Nb;
            null != a.next && (a.next.hb = a);
            this.Nb = a;
            a.ce = this;
            return a
        },
        removeNode: function(a) {
            if (0 == this.g || null == a.ce) return this;
            this.vy(a);
            null != a.hb && (a.hb.next = a.next);
            null != a.next && (a.next.hb = a.hb);
            this.Nb == a && (this.Nb = a.next);
            this.g--;
            a.ce = null;
            a.next = a.hb = null;
            return this
        },
        Nn: function(a, b) {
            for (var c = this.Nb; null != c;) {
                if (c == a) {
                    a = c;
                    for (c = this.Nb; null !=
                        c;) {
                        if (c == b) {
                            a.Kn(c);
                            c.Kn(a);
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
        vy: function(a) {
            if (null == a.ce) return a;
            for (var b = a.ca; null != b;) {
                for (var c = b.node, d = c.ca; null != d;) {
                    var e = d.next;
                    d.node == a && (null != d.hb && (d.hb.next = e), null != e && (e.hb = d.hb), c.ca == d && (c.ca = e), d.o(), c.Ml--, null != this.Nh && this.Nh(d));
                    d = e
                }
                c = b.next;
                null != b.hb && (b.hb.next = c);
                null != c && (c.hb = b.hb);
                a.ca == b && (a.ca = c);
                b.o();
                a.Ml--;
                null != this.Nh && this.Nh(b);
                b = c
            }
            a.ca = null;
            return a
        },
        clearMarks: function() {
            for (var a = this.Nb; null != a;) a.Z = !1, a = a.next;
            return this
        },
        dt: function() {
            for (var a = this.Nb; null != a;) a.parent = null, a = a.next;
            return this
        },
        Bi: function(a, b, c, d, e) {
            null == e && (e = !1);
            null == a && (a = !1);
            if (0 == this.g) return this;
            this.ik && this.clearMarks();
            var f = 1;
            null == b && (b = this.Nb);
            var g = this.dj,
                h = this.Tf;
            h[0] = b;
            b.parent = b;
            b.depth = 0;
            if (a)
                if (null == c)
                    if (e) c = b.aa, c.Sb(!0, d) && this.Di(b, !0, d);
                    else {
                        b = h[0];
                        c = b.aa;
                        if (!c.Sb(!0, d)) return this;
                        for (; 0 < f;)
                            if (b = h[--f], !b.Z) {
                                b.Z = !0;
                                c = b.aa;
                                if (!c.Sb(!1, d)) break;
                                for (a = b.ca; null != a;) c = b.aa, a.node.parent = b, a.node.depth = b.depth +
                                    1, c.Sb(!0, d) && (e = a.node, f == g && (h = this.Cj(g *= 2)), h[f++] = e), a = a.next
                            }
                    }
            else if (e) c(b, !0, d) && this.Ci(b, c, !0, d);
            else {
                b = h[0];
                if (!c(b, !0, d)) return this;
                for (; 0 < f;)
                    if (b = h[--f], !b.Z) {
                        b.Z = !0;
                        if (!c(b, !1, d)) break;
                        for (a = b.ca; null != a;) a.node.parent = b, a.node.depth = b.depth + 1, c(a.node, !0, d) && (e = a.node, f == g && (h = this.Cj(g *= 2)), h[f++] = e), a = a.next
                    }
            } else if (null == c)
                if (e) this.Di(b, !1, d);
                else
                    for (; 0 < f;) {
                        if (b = h[--f], !b.Z) {
                            b.Z = !0;
                            c = b.aa;
                            if (!c.Sb(!1, d)) break;
                            for (a = b.ca; null != a;) e = a.node, f == g && (h = this.Cj(g *= 2)), h[f++] = e, a.node.parent =
                                b, a.node.depth = b.depth + 1, a = a.next
                        }
                    } else if (e) this.Ci(b, c, !1, d);
                    else
                        for (; 0 < f;)
                            if (b = h[--f], !b.Z) {
                                b.Z = !0;
                                if (!c(b, !1, d)) break;
                                for (a = b.ca; null != a;) e = a.node, f == g && (h = this.Cj(g *= 2)), h[f++] = e, a.node.parent = b, a.node.depth = b.depth + 1, a = a.next
                            }
            return this
        },
        Ns: function(a, b, c, d) {
            null == a && (a = !1);
            if (0 == this.g) return this;
            this.ik && this.clearMarks();
            var e = 0,
                f = 1,
                g = this.Ob,
                h = this.rh;
            null == b && (b = this.Nb);
            g[0] = b;
            b.Z = !0;
            b.parent = b;
            b.depth = 0;
            if (a)
                if (null == c) {
                    a = g[e];
                    c = a.aa;
                    if (!c.Sb(!0, d)) return this;
                    for (; 0 < f;) {
                        a = g[e];
                        c =
                            a.aa;
                        if (!c.Sb(!1, d)) break;
                        for (b = a.ca; null != b;) {
                            var k = b.node;
                            if (!k.Z && (k.Z = !0, k.parent = a, k.depth = a.depth + 1, c = k.aa, c.Sb(!0, d))) {
                                var q = f++ + e;
                                q == h && (this.pe(h *= 2), g = this.Ob);
                                g[q] = k
                            }
                            b = b.next
                        }++e;
                        --f
                    }
                } else {
                    a = g[e];
                    if (!c(a, !0, d)) return this;
                    for (; 0 < f;) {
                        a = g[e];
                        if (!c(a, !1, d)) break;
                        for (b = a.ca; null != b;) k = b.node, k.Z || (k.Z = !0, k.parent = a, k.depth = a.depth + 1, c(k, !0, d) && (q = f++ + e, q == h && (this.pe(h *= 2), g = this.Ob), g[q] = k)), b = b.next;
                        ++e;
                        --f
                    }
                }
            else if (null == c)
                for (; 0 < f;) {
                    a = g[e];
                    c = a.aa;
                    if (!c.Sb(!1, d)) break;
                    for (b = a.ca; null !=
                        b;) k = b.node, k.Z || (k.Z = !0, k.parent = a, k.depth = a.depth + 1, q = f++ + e, q == h && (this.pe(h *= 2), g = this.Ob), g[q] = k), b = b.next;
                    ++e;
                    --f
                } else
                    for (; 0 < f;) {
                        a = g[e];
                        if (!c(a, !1, d)) break;
                        for (b = a.ca; null != b;) k = b.node, k.Z || (k.Z = !0, k.parent = a, k.depth = a.depth + 1, q = f++ + e, q == h && (this.pe(h *= 2), g = this.Ob), g[q] = k), b = b.next;
                        ++e;
                        --f
                    }
            return this
        },
        vo: function(a, b, c, d, e) {
            null == b && (b = !1);
            if (0 == this.g) return this;
            this.ik && this.clearMarks();
            var f = 0,
                g = 1,
                h = this.Ob,
                k = this.rh;
            null == c && (c = this.Nb);
            for (var q = this.Nb; null != q;) q.depth = 0, q = q.next;
            c.Z = !0;
            c.parent = c;
            h[0] = c;
            if (b)
                if (null == d) {
                    b = h[f];
                    d = b.aa;
                    if (!d.Sb(!0, e)) return this;
                    for (; 0 < g;) {
                        b = h[f];
                        d = b.aa;
                        if (!d.Sb(!1, e)) break;
                        for (c = b.ca; null != c;) {
                            q = c.node;
                            if (!q.Z && (q.Z = !0, q.parent = b, q.depth = b.depth + 1, q.depth <= a && (d = q.aa, d.Sb(!0, e)))) {
                                var r = g++ + f;
                                r == k && (this.pe(k *= 2), h = this.Ob);
                                h[r] = q
                            }
                            c = c.next
                        }++f;
                        --g
                    }
                } else {
                    b = h[f];
                    if (!d(b, !0, e)) return this;
                    for (; 0 < g;) {
                        b = h[f];
                        if (!d(b, !1, e)) break;
                        for (c = b.ca; null != c;) q = c.node, q.Z || (q.Z = !0, q.parent = b, q.depth = b.depth + 1, q.depth <= a && d(q, !0, e) && (r = g++ + f, r == k && (this.pe(k *=
                            2), h = this.Ob), h[r] = q)), c = c.next;
                        ++f;
                        --g
                    }
                }
            else if (null == d)
                for (; 0 < g;) {
                    b = h[f];
                    d = b.aa;
                    if (!d.Sb(!1, e)) break;
                    for (c = b.ca; null != c;) q = c.node, q.Z || (q.Z = !0, q.depth = b.depth + 1, q.parent = b, q.depth <= a && (r = g++ + f, r == k && (this.pe(k *= 2), h = this.Ob), h[r] = q)), c = c.next;
                    ++f;
                    --g
                } else
                    for (; 0 < g;)
                        if (b = h[f], b.depth > a) --g, ++f;
                        else {
                            if (!d(b, !1, e)) break;
                            for (c = b.ca; null != c;) q = c.node, q.Z || (q.Z = !0, q.depth = b.depth + 1, q.parent = b, q.depth <= a && (r = g++ + f, r == k && (this.pe(k *= 2), h = this.Ob), h[r] = q)), c = c.next;
                            ++f;
                            --g
                        }
            return this
        },
        o: function() {
            for (var a =
                    this.Nb; null != a;) {
                for (var b = a.next, c = a.ca; null != c;) {
                    var d = c.next;
                    c.next = c.hb = null;
                    c.node = null;
                    c = d
                }
                a.o();
                a = b
            }
            this.Nb = null;
            S.Cd(this.Tf);
            this.Tf = null;
            S.Cd(this.Ob);
            this.Ob = null;
            null != this.eb && (this.eb.o(), this.eb = null);
            this.Nh = this.nk = null
        },
        Di: function(a, b, c) {
            a.Z = !0;
            var d = a.aa;
            if (!d.Sb(!1, c)) return !1;
            for (var e = a.ca; null != e;) {
                var f = e.node;
                if (!f.Z)
                    if (e.node.parent = a, e.node.depth = a.depth + 1, b) {
                        if (d = f.aa, d.Sb(!0, c) && !this.Di(f, !0, c)) return !1
                    } else if (!this.Di(f, !1, c)) return !1;
                e = e.next
            }
            return !0
        },
        Ci: function(a,
            b, c, d) {
            a.Z = !0;
            if (!b(a, !1, d)) return !1;
            for (var e = a.ca; null != e;) {
                var f = e.node;
                if (!f.Z)
                    if (e.node.parent = a, e.node.depth = a.depth + 1, c) {
                        if (b(f, !0, d) && !this.Ci(f, b, !0, d)) return !1
                    } else if (!this.Ci(f, b, !1, d)) return !1;
                e = e.next
            }
            return !0
        },
        Cj: function(a) {
            var b = Array(a);
            S.Ya(this.Tf, 0, b, 0, this.dj);
            this.Tf = b;
            this.dj = a;
            return this.Tf
        },
        pe: function(a) {
            var b = Array(a);
            S.Ya(this.Ob, 0, b, 0, this.rh);
            this.Ob = b;
            this.rh = a
        },
        j: Ld
    };
    Kc.__name__ = "77";
    Kc.__interfaces__ = [Wb];
    Kc.prototype = {
        o: function() {
            this.next = this.hb = this.node = null
        },
        j: Kc
    };
    lc.__name__ = "78";
    lc.__interfaces__ = [Wb];
    lc.prototype = {
        o: function() {
            this.ce = this.ca = this.next = this.hb = this.aa = null
        },
        uv: function(a) {
            return null != this.Oo(a) ? null != a.Oo(this) : !1
        },
        Oo: function(a) {
            for (var b = !1, c = this.ca; null != c;) {
                if (c.node == a) {
                    b = !0;
                    break
                }
                c = c.next
            }
            return b ? c : null
        },
        Kn: function(a, b) {
            null == b && (b = 1);
            a = null != this.ce.nk ? this.ce.nk(a, b) : new Kc(a, b);
            a.next = this.ca;
            null != this.ca && (this.ca.hb = a);
            this.ca = a;
            this.Ml++;
            return this
        },
        j: lc
    };
    jc.__name__ = "79";
    jc.next = function() {
        null == jc.Jn && (jc.Jn = 0);
        return jc.Jn++
    };
    Jc.__name__ = "7A";
    Jc.__interfaces__ = [Wb];
    Jc.prototype = {
        j: Jc
    };
    Kd.__name__ = "7B";
    Kd.__isInterface__ = !0;
    Kd.__interfaces__ = [zb];
    zc.__name__ = "7C";
    zc.__interfaces__ = [Kd];
    zc.prototype = {
        set: function(a, b) {
            this.g == this.s && this.M();
            var c = this.bb,
                d = this.cb;
            d.g == d.s && d.M();
            var e = d.f,
                f = d.bc,
                g = 3 * d.bb;
            d.bb = d.wb[d.bb];
            e[g] = a;
            e[g + 1] = c;
            var h = 73856093 * a & d.Vc,
                k = f[h];
            if (-1 == k) f[h] = g, d.g++, d = !0;
            else {
                f = e[k] != a;
                for (h = e[k + 2]; - 1 != h;) e[h] == a && (f = !1), k = h, h = e[h + 2];
                e[k + 2] = g;
                d.g++;
                d = f
            }
            this.Uf[c] = b;
            this.cj[c] = a;
            this.bb =
                this.wb[c];
            this.g++;
            return d
        },
        M: function() {
            var a = this.s;
            this.s = Nb.Bc(this.cb.$b, this.s);
            var b = Array(this.s);
            S.Ya(this.wb, 0, b, 0, a);
            this.wb = b;
            b = Array(this.s);
            S.Ya(this.cj, 0, b, 0, a);
            b = this.cj = b;
            for (var c = a, d = this.s; c < d;) {
                var e = c++;
                b[e] = -2147483648
            }
            b = this.wb;
            c = a - 1;
            for (d = this.s - 1; c < d;) e = c++, b[e] = e + 1;
            b[this.s - 1] = -1;
            this.bb = a;
            b = Array(this.s);
            S.Ya(this.Uf, 0, b, 0, a);
            this.Uf = b
        },
        j: zc
    };
    fc.__name__ = "7D";
    fc.__interfaces__ = [Kd];
    fc.prototype = {
        M: function() {
            var a = this.s;
            this.s = Nb.Bc(this.$b, this.s);
            var b = Array(this.s);
            S.Ya(this.wb, 0, b, 0, a);
            this.wb = b;
            b = Array(3 * this.s);
            S.Ya(this.f, 0, b, 0, 3 * a);
            this.f = b;
            b = this.wb;
            for (var c = a - 1, d = this.s - 1; c < d;) {
                var e = c++;
                b[e] = e + 1
            }
            b[this.s - 1] = -1;
            this.bb = a;
            e = 3 * a + 2;
            b = this.f;
            c = 0;
            for (d = this.s - a; c < d;) c++, b[e - 1] = -2147483648, b[e] = -1, e += 3
        },
        o: function() {
            this.wb = this.f = this.bc = null;
            null != this.eb && (this.eb.o(), this.eb = null)
        },
        clear: function() {
            for (var a = this.bc, b = 0, c = this.Fx; b < c;) {
                var d = b++;
                a[d] = -1
            }
            d = 2;
            a = this.f;
            b = 0;
            for (c = this.s; b < c;) b++, a[d - 1] = -2147483648, a[d] = -1, d += 3;
            a = this.wb;
            b = 0;
            for (c = this.s - 1; b <
                c;) d = b++, a[d] = d + 1;
            a[this.s - 1] = -1;
            this.g = this.bb = 0
        },
        j: fc
    };
    Jd.__name__ = "7F";
    Jd.__interfaces__ = [Md];
    Jd.prototype = {
        enqueue: function(a) {
            this.g == this.s && this.M();
            this.f[++this.g] = a;
            a = a.position = this.g;
            var b = this.f,
                c = a >> 1,
                d = b[a],
                e = d.V;
            if (this.xd)
                for (; 0 < c;) {
                    var f = b[c];
                    if (0 > e - f.V) b[a] = f, f.position = a, a = c, c >>= 1;
                    else break
                } else
                    for (; 0 < c;)
                        if (f = b[c], 0 < e - f.V) b[a] = f, f.position = a, a = c, c >>= 1;
                        else break;
            b[a] = d;
            d.position = a
        },
        yt: function() {
            var a = this.f,
                b = a[1];
            b.position = -1;
            a[1] = a[this.g];
            var c = 1;
            a = this.f;
            var d = c << 1,
                e =
                a[c],
                f = e.V;
            if (this.xd)
                for (; d < this.g;) {
                    d < this.g - 1 && 0 < a[d].V - a[d + 1].V && ++d;
                    var g = a[d];
                    if (0 < f - g.V) a[c] = g, g.position = c, c = e.position = d, d <<= 1;
                    else break
                } else
                    for (; d < this.g;)
                        if (d < this.g - 1 && 0 > a[d].V - a[d + 1].V && ++d, g = a[d], 0 > f - g.V) a[c] = g, g.position = c, c = e.position = d, d <<= 1;
                        else break;
            a[c] = e;
            e.position = c;
            this.g--;
            return b
        },
        Pw: function(a, b) {
            var c = a.V;
            if (c == b) return this;
            a.V = b;
            a = a.position;
            if (this.xd)
                if (b < c) {
                    b = a;
                    c = this.f;
                    var d = b >> 1;
                    a = c[b];
                    var e = a.V;
                    if (this.xd)
                        for (; 0 < d;) {
                            var f = c[d];
                            if (0 > e - f.V) c[b] = f, f.position = b,
                                b = d, d >>= 1;
                            else break
                        } else
                            for (; 0 < d;)
                                if (f = c[d], 0 < e - f.V) c[b] = f, f.position = b, b = d, d >>= 1;
                                else break
                } else {
                    b = a;
                    c = this.f;
                    d = b << 1;
                    a = c[b];
                    e = a.V;
                    if (this.xd)
                        for (; d < this.g;)
                            if (d < this.g - 1 && 0 < c[d].V - c[d + 1].V && ++d, f = c[d], 0 < e - f.V) c[b] = f, f.position = b, b = a.position = d, d <<= 1;
                            else break;
                    else
                        for (; d < this.g;)
                            if (d < this.g - 1 && 0 > c[d].V - c[d + 1].V && ++d, f = c[d], 0 > e - f.V) c[b] = f, f.position = b, b = a.position = d, d <<= 1;
                            else break;
                    c[b] = a;
                    a.position = b;
                    b = this.g;
                    c = this.f;
                    d = b >> 1;
                    a = c[b];
                    e = a.V;
                    if (this.xd)
                        for (; 0 < d;)
                            if (f = c[d], 0 > e - f.V) c[b] = f, f.position =
                                b, b = d, d >>= 1;
                            else break;
                    else
                        for (; 0 < d;)
                            if (f = c[d], 0 < e - f.V) c[b] = f, f.position = b, b = d, d >>= 1;
                            else break
                }
            else {
                if (b > c) b = a;
                else {
                    b = a;
                    c = this.f;
                    d = b << 1;
                    a = c[b];
                    e = a.V;
                    if (this.xd)
                        for (; d < this.g;)
                            if (d < this.g - 1 && 0 < c[d].V - c[d + 1].V && ++d, f = c[d], 0 < e - f.V) c[b] = f, f.position = b, b = a.position = d, d <<= 1;
                            else break;
                    else
                        for (; d < this.g;)
                            if (d < this.g - 1 && 0 > c[d].V - c[d + 1].V && ++d, f = c[d], 0 > e - f.V) c[b] = f, f.position = b, b = a.position = d, d <<= 1;
                            else break;
                    c[b] = a;
                    a.position = b;
                    b = this.g
                }
                c = this.f;
                d = b >> 1;
                a = c[b];
                e = a.V;
                if (this.xd)
                    for (; 0 < d;)
                        if (f = c[d], 0 > e - f.V) c[b] =
                            f, f.position = b, b = d, d >>= 1;
                        else break;
                else
                    for (; 0 < d;)
                        if (f = c[d], 0 < e - f.V) c[b] = f, f.position = b, b = d, d >>= 1;
                        else break
            }
            c[b] = a;
            a.position = b;
            return this
        },
        clear: function(a) {
            null == a && (a = !1);
            a && S.Cd(this.f);
            this.g = 0
        },
        iterator: function() {
            if (this.Lc) {
                if (null == this.eb) return new Ic(this);
                this.eb.reset();
                return this.eb
            }
            return new Ic(this)
        },
        Ow: function() {
            for (var a = this.g >> 1; 1 <= a;) this.kp(a, this.g), --a
        },
        kp: function(a, b) {
            var c = this.f,
                d = a << 1,
                e = d + 1,
                f = a;
            this.xd ? (d <= b && 0 > c[d].V - c[f].V && (f = d), d + 1 <= b && 0 > c[d + 1].V - c[f].V && (f =
                e)) : (d <= b && 0 < c[d].V - c[f].V && (f = d), d + 1 <= b && 0 < c[d + 1].V - c[f].V && (f = e));
            f != a && (d = c[f], e = c[a], c[f] = e, c[a] = d, a = d.position, d.position = e.position, e.position = a, this.kp(f, b))
        },
        M: function() {
            this.s = Nb.Bc(this.$b, this.s);
            this.Id(this.s)
        },
        Id: function(a) {
            a = Array(a + 1);
            S.Ya(this.f, 0, a, 0, this.g + 1);
            this.f = a
        },
        j: Jd
    };
    Ic.__name__ = "80";
    Ic.__interfaces__ = [Oc];
    Ic.prototype = {
        reset: function() {
            this.pa = 0;
            this.Wa = this.Db.g;
            this.f = Array(this.Wa);
            S.Ya(this.Db.f, 1, this.f, 0, this.Wa);
            return this
        },
        P: function() {
            return this.pa < this.Wa
        },
        next: function() {
            return this.f[this.pa++]
        },
        j: Ic
    };
    hf.__name__ = "82";
    hf.Dx = function(a) {
        for (var b = a.length; 1 < --b;) {
            var c = gf.Cs() * b | 0,
                d = a[b];
            a[b] = a[c];
            a[c] = d
        }
    };
    Nb.__name__ = "83";
    Nb.Bc = function(a, b) {
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
                throw n.B("out of space");
        }
        return b
    };
    S.__name__ = "84";
    S.$h = function(a, b, c) {
        if (0 == c) return [];
        var d = Array(c);
        if (0 == b)
            for (var e = 0; e < c;) {
                var f = e++;
                d[f] = a[f]
            } else
                for (e = b, c = b + c; e < c;) f = e++, d[f - b] =
                    a[f];
        return d
    };
    S.Ya = function(a, b, c, d, e) {
        if (0 < e)
            if (a == c)
                if (b < d) {
                    var f = b + e;
                    b = d + e;
                    for (var g = 0; g < e;) g++, --f, --b, a[b] = a[f]
                } else {
                    if (b > d)
                        for (f = b, b = d, g = 0; g < e;) g++, a[b] = a[f], ++f, ++b
                }
        else if (0 == b && 0 == d)
            for (g = 0; g < e;) f = g++, c[f] = a[f];
        else if (0 == b)
            for (g = 0; g < e;) f = g++, c[d + f] = a[f];
        else if (0 == d)
            for (g = 0; g < e;) f = g++, c[f] = a[b + f];
        else
            for (g = 0; g < e;) f = g++, c[d + f] = a[b + f]
    };
    S.X = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        for (d = 0 >= d ? a.length : c + d; c < d;) a[c++] = b;
        return a
    };
    S.Cd = function(a) {
        var b, c;
        null == c && (c = 0);
        null == b && (b = 0);
        for (c = 0 >= c ? a.length : b + c; b < c;) a[b++] = null
    };
    S.Ps = function(a, b, c) {
        for (var d = 0, e, f = c + 1; d < f;) e = d + (f - d >> 1), a[e] < b ? d = e + 1 : f = e;
        return d <= c && a[d] == b ? d : ~d
    };
    gf.__name__ = "85";
    gf.Cs = function() {
        return Math.random()
    };
    var w = Ha.e2 = {
        Ub: !0,
        Tb: "i0 i1 i2 i3 i4 i5 i6 i7 i8 i9 i10 i11 i12 i13 i14 i15 i16 i17 i18 i19 i20 i21 i22 i23 i24 i25".split(" ")
    };
    w.i0 = {
        u: 0,
        H: "e2",
        toString: y
    };
    w.i1 = {
        u: 1,
        H: "e2",
        toString: y
    };
    w.i2 = {
        u: 2,
        H: "e2",
        toString: y
    };
    w.i3 = {
        u: 3,
        H: "e2",
        toString: y
    };
    w.i4 = {
        u: 4,
        H: "e2",
        toString: y
    };
    w.i5 = {
        u: 5,
        H: "e2",
        toString: y
    };
    w.i6 = {
        u: 6,
        H: "e2",
        toString: y
    };
    w.i7 = {
        u: 7,
        H: "e2",
        toString: y
    };
    w.i8 = {
        u: 8,
        H: "e2",
        toString: y
    };
    w.i9 = {
        u: 9,
        H: "e2",
        toString: y
    };
    w.i10 = {
        u: 10,
        H: "e2",
        toString: y
    };
    w.i11 = {
        u: 11,
        H: "e2",
        toString: y
    };
    w.i12 = {
        u: 12,
        H: "e2",
        toString: y
    };
    w.i13 = {
        u: 13,
        H: "e2",
        toString: y
    };
    w.i14 = {
        u: 14,
        H: "e2",
        toString: y
    };
    w.i15 = {
        u: 15,
        H: "e2",
        toString: y
    };
    w.i16 = {
        u: 16,
        H: "e2",
        toString: y
    };
    w.i17 = {
        u: 17,
        H: "e2",
        toString: y
    };
    w.i18 = {
        u: 18,
        H: "e2",
        toString: y
    };
    w.i19 = {
        u: 19,
        H: "e2",
        toString: y
    };
    w.i20 = {
        u: 20,
        H: "e2",
        toString: y
    };
    w.i21 = {
        u: 21,
        H: "e2",
        toString: y
    };
    w.i22 = {
        u: 22,
        H: "e2",
        toString: y
    };
    w.i23 = {
        u: 23,
        H: "e2",
        toString: y
    };
    w.i24 = {
        u: 24,
        H: "e2",
        toString: y
    };
    w.i25 = {
        u: 25,
        H: "e2",
        toString: y
    };
    w.xc = [w.i0, w.i1, w.i2, w.i3, w.i4, w.i5, w.i6, w.i7, w.i8, w.i9, w.i10, w.i11, w.i12, w.i13, w.i14, w.i15, w.i16, w.i17, w.i18, w.i19, w.i20, w.i21, w.i22, w.i23, w.i24, w.i25];
    Z.__name__ = "86";
    Z.Im = function(a, b) {
        var c = new M("^([a-z]{2})-([a-z]{2})$", "i");
        c.match(a) && (a = c.Ja(1).toLowerCase());
        Z.Yi = a;
        (new M("^[a-z][a-z]$", "")).match(a) && null != a || (Z.Yi = Z.At());
        W.Ab(b, function(a) {
            return a == Z.Yi
        }) || (Z.Yi = "en")
    };
    Z.Yu = function(a,
        b) {
        var c = a.split("\n");
        a = c.length;
        var d = Array(a);
        Z.Mj = d;
        d = Array(a);
        Z.Cq = d;
        d = 0;
        for (var e = a; d < e;) {
            a = d++;
            var f = c[a];
            f = f.replace(/\\n/g, "\n");
            Z.Mj[a] = f;
            Z.Cq[a] = (new M("::(\\w+)::", "")).match(c[a])
        }
        if (null != b) {
            c = Object.create(null);
            d = [];
            for (a = 0; a < b.length;) f = b[a++], e = b[a++], c[f] = e, d.push(f);
            b = new M(d.join("|"), "");
            d = 0;
            for (e = Z.Mj.length; d < e;)
                for (a = d++, f = Z.Mj[a]; b.match(f);) a = c[b.Ja(0)], f = f.replace(b.r, a)
        }
    };
    Z.translate = function(a) {
        var b = a.u,
            c = Z.Mj[b];
        if (!Z.Cq[b]) return c;
        a = ce.Mt(a);
        if (0 == a.length) return c;
        for (b = 0; b < a.length;) {
            var d = a[b];
            ++b;
            c = c.replace(/::(\w+)::/, z.va(d))
        }
        return c
    };
    Z.At = function() {
        var a = null;
        try {
            var b = new M("lang=(\\w\\w(?:-\\w\\w)?)", "");
            b.match(window.location.href) && (a = b.Ja(1))
        } catch (c) {}
        null == a && (a = "en");
        return a
    };
    ha.__name__ = "87";
    ha.Sa = function() {
        return hb.Ia()
    };
    ha.al = function() {
        return ib.Ia()
    };
    var ya = Ha.e3 = {
        Ub: !0,
        Tb: ["i0", "i1", "i2", "i3"]
    };
    ya.i0 = {
        u: 0,
        H: "e3",
        toString: y
    };
    ya.i1 = {
        u: 1,
        H: "e3",
        toString: y
    };
    ya.i2 = {
        u: 2,
        H: "e3",
        toString: y
    };
    ya.i3 = {
        u: 3,
        H: "e3",
        toString: y
    };
    ya.xc = [ya.i0, ya.i1,
        ya.i2, ya.i3
    ];
    Ie.__name__ = "88";
    Ie.prototype = {
        j: Ie
    };
    ib.__name__ = "89";
    ib.Ia = function() {
        null == ib.Xi && (ib.Xi = new ib);
        return ib.Xi
    };
    ib.G = Ta;
    ib.prototype = u(Ta.prototype, {
        o: function() {
            Ta.prototype.o.call(this);
            this.disable();
            ib.Xi = null
        },
        enable: function() {
            this.enabled || (this.enabled = !0, window.addEventListener("keydown", E(this, this.nq), !0), window.addEventListener("keyup", E(this, this.oq), !0))
        },
        disable: function() {
            this.enabled && (this.enabled = !1, window.removeEventListener("keydown", E(this, this.nq), !0), window.removeEventListener("keyup",
                E(this, this.oq), !0))
        },
        dc: function(a, b) {
            a = new He(this, b, a);
            for (b = this.list; null != b;) this.next = b.next, b = this.current = b.ha, a.C = b, b(a), b = this.next;
            this.current = this.next = null
        },
        nq: function(a) {
            var b = a.keyCode;
            if (!this.keys[b]) {
                this.keys[b] = !0;
                this.order[b] += 1;
                this.Wf.shift = a.shiftKey;
                this.Wf.control = a.ctrlKey;
                this.Wf.alt = a.altKey;
                switch (a.location) {
                    case 1:
                        var c = ya.i1;
                        break;
                    case 2:
                        c = ya.i2;
                        break;
                    case 3:
                        c = ya.i3;
                        break;
                    default:
                        c = ya.i0
                }
                this.location = c;
                this.event = a;
                this.enabled && this.dc(!0, b);
                this.event = null
            }
        },
        oq: function(a) {
            var b = a.keyCode;
            this.keys[b] = !1;
            this.Wf.shift = a.shiftKey;
            this.Wf.control = a.ctrlKey;
            this.Wf.alt = a.altKey;
            switch (a.location) {
                case 1:
                    a = ya.i1;
                    break;
                case 2:
                    a = ya.i2;
                    break;
                case 3:
                    a = ya.i3;
                    break;
                default:
                    a = ya.i0
            }
            this.location = a;
            this.enabled && this.dc(!1, b)
        },
        j: ib
    });
    He.__name__ = "8A";
    He.prototype = {
        j: He
    };
    hb.__name__ = "8B";
    hb.Ia = function() {
        null == hb.uj && (hb.uj = new hb);
        return hb.uj
    };
    hb.G = Ta;
    hb.prototype = u(Ta.prototype, {
        Ku: function() {
            var a = this.gb,
                b = a.b,
                c = a.a;
            a = new v;
            a.b = b;
            a.a = c;
            return a
        },
        o: function() {
            Ta.prototype.o.call(this);
            this.disable();
            this.element = null;
            hb.uj = null
        },
        enable: function() {
            if (!this.enabled) {
                this.enabled = !0;
                var a = this.Br() && {
                        passive: !1
                    },
                    b = window;
                b.addEventListener("mousedown", E(this, this.pq));
                b.addEventListener("mouseup", E(this, this.rq));
                b.addEventListener("mousemove", E(this, this.qq));
                b.addEventListener("touchstart", E(this, this.zq), a);
                b.addEventListener("touchend", E(this, this.pj));
                b.addEventListener("touchcancel", E(this, this.pj));
                b.addEventListener("touchmove", E(this, this.yq));
                b.addEventListener("mousewheel",
                    E(this, this.nj), a);
                b.addEventListener("DOMMouseScroll", E(this, this.nj), a)
            }
        },
        disable: function() {
            if (this.enabled) {
                this.enabled = !1;
                var a = window;
                a.removeEventListener("mousedown", E(this, this.pq));
                a.removeEventListener("mouseup", E(this, this.rq));
                a.removeEventListener("mousemove", E(this, this.qq));
                a.removeEventListener("touchstart", E(this, this.zq));
                a.removeEventListener("touchend", E(this, this.pj));
                a.removeEventListener("touchcancel", E(this, this.pj));
                a.removeEventListener("touchmove", E(this, this.yq));
                a.removeEventListener("mousewheel",
                    E(this, this.nj));
                a.removeEventListener("DOMMouseScroll", E(this, this.nj))
            }
        },
        pq: function(a) {
            var b = a.which;
            this.Xb = this.Xb & ~(1 << b) | 1 << b;
            0 != (this.ri & 1 << a.which) && this.dc(a.clientX, a.clientY, 0, a.which)
        },
        rq: function(a) {
            var b = a.which;
            this.Xb = this.Xb & ~(1 << b) | 0 << b;
            0 != (this.ri & 1 << a.which) && this.dc(a.clientX, a.clientY, 1, a.which)
        },
        qq: function(a) {
            0 < this.We || this.dc(a.clientX, a.clientY, 2, 0)
        },
        zq: function(a) {
            this.cancel(a);
            a = a.changedTouches;
            if (1 == this.maxTouchPoints) {
                if (!(null != this.first || 1 < a.length)) {
                    this.first =
                        a[0];
                    var b = 1;
                    this.Xb = this.Xb & ~(1 << b) | 1 << b;
                    this.We = 1;
                    this.dc(this.first.clientX, this.first.clientY, 0, 4)
                }
            } else
                for (var c = this.touches, d = 0; d < a.length;) {
                    b = a[d];
                    ++d;
                    var e = this.We < this.maxTouchPoints,
                        f = e ? 0 < this.hl.length ? this.hl.pop() : this.Wv++ : null;
                    c["" + b.identifier] = f;
                    e && (this.dc(b.clientX, b.clientY, 0, 4 + f), this.We++)
                }
        },
        pj: function(a) {
            "touchend" == a.type && this.cancel(a);
            a = a.changedTouches;
            if (1 == this.maxTouchPoints) {
                if (null != this.first)
                    for (var b = 0; b < a.length;) {
                        var c = a[b];
                        ++b;
                        if (c.identifier == this.first.identifier) {
                            this.We =
                                0;
                            this.Xb = this.Xb & -3 | 0;
                            this.first = null;
                            this.dc(c.clientX, c.clientY, 1, 4);
                            break
                        }
                    }
            } else {
                var d = this.touches;
                for (b = 0; b < a.length;) {
                    c = a[b];
                    ++b;
                    var e = "" + c.identifier,
                        f = d[e];
                    delete d[e];
                    null != f && (this.We--, this.hl.push(f), this.dc(c.clientX, c.clientY, 1, 4 + f))
                }
            }
        },
        yq: function(a) {
            this.cancel(a);
            a = a.changedTouches;
            if (1 == this.maxTouchPoints) {
                if (null != this.first)
                    for (var b = 0; b < a.length;) {
                        var c = a[b];
                        ++b;
                        if (c.identifier == this.first.identifier) {
                            this.dc(c.clientX, c.clientY, 2, 4);
                            break
                        }
                    }
            } else {
                var d = this.touches;
                for (b = 0; b <
                    a.length;) {
                    c = a[b];
                    ++b;
                    var e = d["" + c.identifier];
                    null != e && this.dc(c.clientX, c.clientY, 2, 4 + e)
                }
            }
        },
        nj: function(a) {
            this.dc(Math.max(-1, Math.min(1, a.wheelDelta || -a.detail)), 0, 3, -1)
        },
        dc: function(a, b, c, d) {
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
                a = a * this.Yb * this.scale.b | 0;
                b = b * this.Yb * this.scale.a | 0
            }
            e = this.gb;
            e.b = a;
            e.a = b;
            e = new Ge(this);
            e.x = this.gb.b;
            e.y = this.gb.a;
            e.type = c;
            e.id = d;
            if (this.Ny || null == this.buffer) {
                for (a = this.list; null != a;) this.next = a.next, a = this.current = a.ha, e.C = a, a(e), a = this.next;
                this.current = this.next = null
            } else e = this.buffer, e.ec(e.g + 5), e.f[e.g++] = a | 0, e.f[e.g++] = b | 0, e.f[e.g++] = c, e.f[e.g++] = d
        },
        cancel: function(a) {
            a.preventDefault()
        },
        Br: function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                window.addEventListener("test", null, b);
                window.removeEventListener("test", null, b)
            } catch (c) {}
            return a
        },
        j: hb
    });
    Ge.__name__ = "8C";
    Ge.prototype = {
        j: Ge
    };
    var uc = {
            gq: function(a, b, c, d) {
                var e = new H;
                e.b = a - c;
                e.a = b - d;
                e.c = a + c;
                e.d = b + d;
                return e
            },
            offset: function(a, b, c) {
                a.b -= b;
                a.a -= c;
                a.c += b;
                a.d += c
            },
            scale: function(a, b, c) {
                if (c) {
                    c = (a.c - a.b) / 2;
                    var d = a.b + c;
                    a.b = d - c * b;
                    a.c = d + c * b;
                    c = (a.d - a.a) / 2;
                    d = a.a + c;
                    a.a = d - c * b;
                    a.d = d + c * b
                } else a.b *= b, a.a *= b, a.c *= b, a.d *= b
            }
        },
        pf = {
            Jr: function(a) {
                return "rgba(" + (Math.round(255 * a.b) & 255) + "," + (Math.round(255 * a.a) & 255) + "," + (Math.round(255 * a.c) & 255) + "," + +a.d.toFixed(2) + ")"
            }
        };
    da.__name__ = "8D";
    da.Qp = function() {
        return function(a) {
            return a
        }
    };
    da.vw = function() {
        return function(a) {
            return Math.pow(a, 2)
        }
    };
    da.Ih = function() {
        return function(a) {
            return 1 - Math.pow(1 - a, 2)
        }
    };
    da.Ms = function() {
        var a = .1;
        null == a && (a = .1);
        var b = 17.0158 * a;
        return function(a) {
            return a * a * ((b + 1) * a - b)
        }
    };
    da.jk = function() {
        var a = .1;
        null == a && (a = .1);
        var b = 17.0158 * a;
        return function(a) {
            --a;
            return a * a * ((b + 1) * a + b) + 1
        }
    };
    da.He = function(a, b) {
        null == b && (b = .3);
        null == a && (a = 0);
        if (1 > a) {
            var c = 1;
            var d = .25 * b
        } else c = a, d = b / 6.283185307179586 * Math.asin(1 / c);
        return function(a) {
            return c * Math.pow(2, -10 * a) *
                Math.sin(6.283185307179586 * (a - d) / b) + 1
        }
    };
    Na.__name__ = "8E";
    Na.map = function(a, b, c, d, e) {
        return d + (a - b) / (c - b) * (e - d)
    };
    var Ec = {
            pi: function(a, b) {
                a.b = b.b;
                a.a = b.a;
                a.c = b.c;
                a.d = b.d;
                a.e = b.e;
                a.C = b.C;
                a.Ga = b.Ga;
                a.v = b.v;
                a.Ka = b.Ka;
                return a
            },
            ff: function(a) {
                a.b = 1;
                a.a = 0;
                a.c = 0;
                a.d = 0;
                a.e = 1;
                a.C = 0;
                a.Ga = 0;
                a.v = 0;
                a.Ka = 1;
                return a
            }
        },
        va = {
            Ae: function() {
                var a = new Fe;
                va.ff(a);
                return a
            },
            pi: function(a, b) {
                a.b = b.b;
                a.a = b.a;
                a.c = b.c;
                a.d = b.d;
                a.e = b.e;
                a.C = b.C;
                a.Ga = b.Ga;
                a.v = b.v;
                a.Ka = b.Ka;
                a.Ta = b.Ta;
                a.k = b.k;
                a.Ba = b.Ba;
                a.ab = b.ab;
                a.n = b.n;
                a.cc = b.cc;
                a.p = b.p;
                return a
            },
            ff: function(a) {
                a.b = 1;
                a.a = 0;
                a.c = 0;
                a.d = 0;
                a.e = 0;
                a.C = 1;
                a.Ga = 0;
                a.v = 0;
                a.Ka = 0;
                a.Ta = 0;
                a.k = 1;
                a.Ba = 0;
                a.ab = 0;
                a.n = 0;
                a.cc = 0;
                a.p = 1;
                return a
            },
            jr: function(a, b, c, d) {
                a.b = 1;
                a.a = 0;
                a.c = 0;
                a.d = b;
                a.e = 0;
                a.C = 1;
                a.Ga = 0;
                a.v = c;
                a.Ka = 0;
                a.Ta = 0;
                a.k = 1;
                a.Ba = d;
                a.ab = 0;
                a.n = 0;
                a.cc = 0;
                a.p = 1;
                return a
            },
            bt: function(a, b) {
                var c = Math.sin(b);
                b = Math.cos(b);
                var d = a.b,
                    e = a.e;
                a.b = b * d - c * e;
                a.e = c * d + b * e;
                d = a.a;
                e = a.C;
                a.a = b * d - c * e;
                a.C = c * d + b * e;
                d = a.c;
                e = a.Ga;
                a.c = b * d - c * e;
                a.Ga = c * d + b * e;
                d = a.d;
                e = a.v;
                a.d = b * d - c * e;
                a.v = c * d + b * e
            },
            bo: function(a, b, c, d) {
                a.b *=
                    b;
                a.a *= b;
                a.c *= b;
                a.d *= b;
                a.e *= c;
                a.C *= c;
                a.Ga *= c;
                a.v *= c;
                a.Ka *= d;
                a.Ta *= d;
                a.k *= d;
                a.Ba *= d
            },
            Yx: function(a, b) {
                var c = b.b,
                    d = b.a,
                    e = b.c,
                    f = b.d,
                    g = b.e,
                    h = b.C,
                    k = b.Ga,
                    q = b.v,
                    r = b.Ka,
                    p = b.Ta,
                    m = b.k,
                    l = b.Ba,
                    n = b.ab,
                    v = b.n,
                    x = b.cc;
                b = b.p;
                var u = a.b,
                    t = a.a,
                    w = a.c,
                    y = a.d;
                a.b = u * c + t * g + w * r + y * n;
                a.a = u * d + t * h + w * p + y * v;
                a.c = u * e + t * k + w * m + y * x;
                a.d = u * f + t * q + w * l + y * b;
                u = a.e;
                t = a.C;
                w = a.Ga;
                y = a.v;
                a.e = u * c + t * g + w * r + y * n;
                a.C = u * d + t * h + w * p + y * v;
                a.Ga = u * e + t * k + w * m + y * x;
                a.v = u * f + t * q + w * l + y * b;
                u = a.Ka;
                t = a.Ta;
                w = a.k;
                y = a.Ba;
                a.Ka = u * c + t * g + w * r + y * n;
                a.Ta = u * d + t * h + w * p + y * v;
                a.k = u * e + t * k +
                    w * m + y * x;
                a.Ba = u * f + t * q + w * l + y * b;
                u = a.ab;
                t = a.n;
                w = a.cc;
                y = a.p;
                a.ab = u * c + t * g + w * r + y * n;
                a.n = u * d + t * h + w * p + y * v;
                a.cc = u * e + t * k + w * m + y * x;
                a.p = u * f + t * q + w * l + y * b
            },
            xp: function(a, b) {
                var c = a.b * a.C - a.a * a.e,
                    d = a.b * a.Ga - a.c * a.e,
                    e = a.b * a.v - a.d * a.e,
                    f = a.a * a.Ga - a.c * a.C,
                    g = a.a * a.v - a.d * a.C,
                    h = a.c * a.v - a.d * a.Ga,
                    k = a.Ka * a.n - a.Ta * a.ab,
                    q = a.Ka * a.cc - a.k * a.ab,
                    r = a.Ka * a.p - a.Ba * a.ab,
                    p = a.Ta * a.cc - a.k * a.n,
                    m = a.Ta * a.p - a.Ba * a.n,
                    l = a.k * a.p - a.Ba * a.cc,
                    n = 1 / (c * l - d * m + e * p + f * r - g * q + h * k);
                b.b = (a.C * l - a.Ga * m + a.v * p) * n;
                b.e = (-a.e * l + a.Ga * r - a.v * q) * n;
                b.Ka = (a.e * m - a.C * r + a.v * k) *
                    n;
                b.ab = (-a.e * p + a.C * q - a.Ga * k) * n;
                b.a = (-a.a * l + a.c * m - a.d * p) * n;
                b.C = (a.b * l - a.c * r + a.d * q) * n;
                b.Ta = (-a.b * m + a.a * r - a.d * k) * n;
                b.n = (a.b * p - a.a * q + a.c * k) * n;
                b.c = (a.n * h - a.cc * g + a.p * f) * n;
                b.Ga = (-a.ab * h + a.cc * e - a.p * d) * n;
                b.k = (a.ab * g - a.n * e + a.p * c) * n;
                b.cc = (-a.ab * f + a.n * d - a.cc * c) * n;
                b.d = (-a.Ta * h + a.k * g - a.Ba * f) * n;
                b.v = (a.Ka * h - a.k * e + a.Ba * d) * n;
                b.Ba = (-a.Ka * g + a.Ta * e - a.Ba * c) * n;
                b.p = (a.Ka * f - a.Ta * d + a.k * c) * n;
                return b
            }
        },
        za = {
            Le: function(a) {
                return a.c
            },
            vx: function(a, b) {
                return a.c = b
            },
            ng: function(a, b, c) {
                a.b = b.b;
                a.a = b.a;
                a.c = b.b * c.b + b.a * c.a;
                return a
            },
            Ej: function(a, b, c) {
                var d = c.b - b.b;
                c = c.a - b.a;
                var e = Math.sqrt(d * d + c * c);
                a.b = -(c / e);
                a.a = d / e;
                za.vx(a, a.b * b.b + a.a * b.a);
                return a
            }
        },
        qf = {
            normalize: function(a) {
                var b = a.c * a.c + a.d * a.d;
                0 < b && (b = Math.sqrt(b), a.c /= b, a.d /= b);
                return b
            }
        };
    v.__name__ = "8F";
    v.prototype = {
        j: v
    };
    La.__name__ = "90";
    La.prototype = {
        j: La
    };
    H.__name__ = "91";
    H.prototype = {
        j: H
    };
    Bc.__name__ = "92";
    Bc.prototype = {
        j: Bc
    };
    Dc.__name__ = "93";
    Dc.prototype = {
        j: Dc
    };
    Fe.__name__ = "94";
    Fe.prototype = {
        j: Fe
    };
    var mf = {
            Jw: function(a, b) {
                var c = b.b,
                    d = b.a,
                    e = 2 * (c * a.b + d * a.a);
                b.b = c - e *
                    a.b;
                b.a = d - e * a.a
            },
            iy: function(a) {
                var b = a.b,
                    c = a.a;
                a = new La;
                a.b = b;
                a.a = c;
                a.c = 0;
                return a
            },
            normalize: function(a) {
                var b = a.b * a.b + a.a * a.a;
                0 < b && (b = Math.sqrt(b), a.b /= b, a.a /= b);
                return b
            }
        },
        Db = {
            Od: function(a) {
                var b = a.b,
                    c = a.a;
                a = new v;
                a.b = b;
                a.a = c;
                return a
            }
        };
    Id.__name__ = "95";
    Id.Px = function(a, b) {
        return a.b > b.b && a.b < b.c && a.a > b.a ? a.a < b.d : !1
    };
    Id.Qx = function(a, b) {
        return 0 < a && 1 > a && 0 < b ? 1 > b : !1
    };
    ff.__name__ = "96";
    ff.tg = function(a, b, c, d, e) {
        a -= c;
        b -= d;
        return a * a + b * b < e * e
    };
    Hc.__name__ = "97";
    Hc.tg = function(a, b, c, d, e) {
        return 0 > a * c +
            b * d - e
    };
    ef.__name__ = "98";
    ef.Qt = function(a, b, c, d, e) {
        return a * c + b * d - e
    };
    Ee.__name__ = "99";
    Ee.prototype = {
        Rt: function(a, b, c, d, e, f, g, h) {
            h = f * a + g * b - h;
            if ((0 > h ? -h : h) <= c) return this.tj.b = a - f * h, this.tj.a = b - g * h, this.t = 0, !0;
            var k = f * d + g * e;
            if (0 <= k * h) return this.t = -1, !1;
            c = 0 < h ? c : -c;
            this.t = (c - h) / k;
            this.tj.b = a + this.t * d - c * f;
            this.tj.a = b + this.t * e - c * g;
            return !0
        },
        j: Ee
    };
    De.__name__ = "9A";
    De.prototype = {
        test: function() {
            var a = 0,
                b = this.Pi,
                c = this.pp,
                d = this.Qe,
                e = this.Pe;
            if (1E-6 > Math.abs(e.b)) {
                if (d.b < c.b || d.b > c.c) return !1
            } else {
                var f =
                    (c.b - d.b) / e.b;
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
            } else if (f = (c.a - d.a) / e.a, g = (c.d - d.a) / e.a, f > g && (h = f, f = g, g = h), f > a && (a = f), g < b && (b = g), a > b) return !1;
            this.ie = a;
            this.Ze.b = d.b + e.b * a;
            this.Ze.a = d.a + e.a * a;
            return !0
        },
        j: De
    };
    Ce.__name__ = "9B";
    Ce.prototype = {
        test: function() {
            var a = this.Qe.b,
                b = this.Qe.a,
                c = this.Pe.b,
                d = this.Pe.a,
                e = a - this.jl.b,
                f = b - this.jl.a,
                g = e * c + f * d;
            e = e * e + f * f - this.kl * this.kl;
            if (0 < e && 0 < g) return !1;
            e = g * g - e;
            if (0 >
                e) return !1;
            g = -g - Math.sqrt(e);
            if (g > this.Pi) return !1;
            0 > g ? (this.Ze.b = a, this.Ze.a = b, this.ie = 0) : (this.Ze.b = a + g * c, this.Ze.a = b + g * d, this.ie = g);
            return !0
        },
        j: Ce
    };
    Hd.__name__ = "9C";
    Hd.prototype = {
        tr: function(a) {
            this.fr = a
        },
        Pq: function() {
            throw n.B("override for implementation");
        },
        xj: function(a, b) {
            a -= .4999;
            return Math.round(a + (b + .4999 - a) * this.Pq())
        },
        j: Hd
    };
    gd.__name__ = "9D";
    gd.G = Hd;
    gd.prototype = u(Hd.prototype, {
        Cw: function() {
            return this.fr = 16807 * this.fr % 2147483647 | 0
        },
        Pq: function() {
            return Bb.Nd(this.Cw()) / 2147483647
        },
        j: gd
    });
    Ra.__name__ = "9E";
    Ra.xj = function(a, b) {
        a -= .4999;
        return Math.round(a + (b + .4999 - a) * Math.random())
    };
    Ra.hh = function(a, b) {
        return a + (b - a) * Math.random()
    };
    Ra.Ik = function(a) {
        return Ra.hh(-a, a)
    };
    qd.__name__ = "9F";
    qd.Xk = function(a) {
        return F.ze(a, of) ? (a = a.__name__, A.substr(a, a.lastIndexOf(".") + 1, null)) : null != F.Wd(a) ? qd.Xk(F.Wd(a)) : null
    };
    Gd.__name__ = "A0";
    Gd.gy = function(a) {
        a = 1E3 * a | 0;
        a = (a - a % 1E3) / 1E3;
        var b = a % 60;
        return A.substr("0" + (a - b) / 60, -2, null) + ":" + A.substr("0" + b, -2, null)
    };
    Gd.Cb = function(a, b) {
        null == b && (b =
            ".");
        var c = a + "";
        if (1E6 > a) {
            if (1E3 > a) return c;
            if (1E4 > a) return A.substr(c, 0, 1) + b + A.substr(c, 1, null);
            if (1E5 > a) return A.substr(c, 0, 2) + b + A.substr(c, 2, null);
            if (1E6 > a) return A.substr(c, 0, 3) + b + A.substr(c, 3, null)
        } else {
            if (1E7 > a) return A.substr(c, 0, 1) + b + A.substr(c, 1, 3) + b + A.substr(c, 4, null);
            if (1E8 > a) return A.substr(c, 0, 2) + b + A.substr(c, 2, 3) + b + A.substr(c, 5, null);
            if (1E9 > a) return A.substr(c, 0, 3) + b + A.substr(c, 3, 3) + b + A.substr(c, 6, null)
        }
        return 1E10 > a ? A.substr(c, 0, 1) + b + A.substr(c, 1, 3) + b + A.substr(c, 4, 3) + b + A.substr(c, 7,
            null) : null
    };
    Fd.__name__ = "A1";
    Fd.prototype = {
        j: Fd
    };
    df.__name__ = "A2";
    df.__isInterface__ = !0;
    xa.__name__ = "A3";
    xa.So = function() {
        return null
    };
    xa.get = function(a) {
        return xa.ep().getItem(a)
    };
    xa.set = function(a, b) {
        xa.ep().setItem(a, b)
    };
    xa.ep = function() {
        if (null != xa.rg) return xa.rg;
        xa.rg = xa.So();
        if (null != xa.rg) return xa.rg;
        xa.rg = kf.nu();
        return xa.rg
    };
    Ed.__name__ = "A4";
    Ed.__isInterface__ = !0;
    Be.__name__ = "A5";
    Be.prototype = {
        j: Be
    };
    Ae.__name__ = "A6";
    Ae.prototype = {
        j: Ae
    };
    ic.__name__ = "A7";
    ic.prototype = {
        o: function() {
            for (var a =
                    this.controllers, b; null != a;) b = a.next, a.o(), a = b
        },
        ta: function(a) {
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
        St: function(a) {
            for (var b = this.controllers; null != b;) {
                if (b.type == a) return b;
                b = b.next
            }
            return null
        },
        ln: function(a) {
            if (null == this.controllers || !this.mt) return !1;
            for (var b = !1, c = this.controllers,
                    d; null != c;) d = c.next, c.update(a) && (b = !0), c = d;
            return b
        },
        j: ic
    };
    var wa = Ha.e4 = {
        Ub: !0,
        Tb: ["i0", "i1", "i2"]
    };
    wa.i0 = {
        u: 0,
        H: "e4",
        toString: y
    };
    wa.i1 = {
        u: 1,
        H: "e4",
        toString: y
    };
    wa.i2 = {
        u: 2,
        H: "e4",
        toString: y
    };
    wa.xc = [wa.i0, wa.i1, wa.i2];
    V.__name__ = "A8";
    V.__interfaces__ = [Ed];
    V.prototype = {
        o: function() {
            null != this.object && (this.object.detach(this), this.object = null);
            this.repeat = null;
            this.type = -1;
            V.Bn--
        },
        ej: function() {
            this.Cc = !0;
            0 != this.Fc && V.Dg--;
            this.Fc = !1;
            this.pb = 0;
            this.oc = V.Cn
        },
        update: function(a) {
            return this.Fc ? (this.pb +=
                a * this.Yh, null == this.object ? !1 : this.eg(this.pb)) : this.Cc ? (this.pb += a, this.pb > V.Cn && this.o(), !0) : !1
        },
        eg: function() {
            throw n.B("override for implementation");
        },
        Pk: function() {
            var a = this.pb + this.Dh;
            if (this.repeat == wa.i0) {
                var b = this.Eb,
                    c = this.oc;
                return a < b ? b : a > c ? c : a
            }
            b = this.oc - this.Eb;
            return 0 < b ? (c = (a - this.Eb) / b, a = Math.floor(c), c -= a, this.repeat == wa.i1 ? this.Eb + c * b : 0 == (a & 1) ? this.Eb + c * b : this.oc - c * b) : this.Eb
        },
        uf: function(a) {
            var b = this.Fc;
            a.Fc != b && (b ? V.Dg++ : V.Dg--);
            a.Fc = b;
            a.repeat = this.repeat;
            a.Eb = this.Eb;
            a.oc =
                this.oc;
            a.Dh = this.Dh;
            a.Yh = this.Yh;
            a.pb = this.pb;
            a.Cc = this.Cc
        },
        j: V
    };
    hc.__name__ = "A9";
    hc.G = V;
    hc.prototype = u(V.prototype, {
        o: function() {
            this.cg = this.bg = this.kc = null;
            V.prototype.o.call(this)
        },
        play: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = -1);
            null == b && (b = 0);
            this.kc = a;
            this.Vf = b;
            this.Ve = 0 > c ? a.frames.length - 1 : c;
            this.Eb = this.kc.Md[b];
            this.oc = this.kc.Md[this.Ve + 1];
            this.pb = this.Eb;
            this.pb += d;
            1 != this.Fc && V.Dg++;
            this.Fc = !0;
            this.Cc = !1;
            this.index = -1;
            this.lastIndex = b;
            this.eg(this.pb)
        },
        eg: function() {
            var a = this.Pk(),
                b = this.kc.jf;
            if (1 == b) var c = this.lastIndex = 0;
            else if (a >= this.kc.ai) c = this.lastIndex = b - 1;
            else {
                if (0 < this.kc.yk) c = a / this.kc.yk | 0;
                else {
                    c = 0;
                    var d = this.kc.Md,
                        e = d[this.lastIndex + 1];
                    if (a >= d[this.lastIndex] && a <= e) c = this.lastIndex;
                    else if (16 > b)
                        for (e = 0; e <= b;) {
                            if (d[e] >= a) {
                                c = e - 1;
                                break
                            }++e
                        } else c = S.Ps(d, a, b - 1), 0 > c && (c = ~c, --c)
                }
                this.lastIndex = c
            }
            c < this.Vf ? c = this.Vf : c > this.Ve && (c = this.Ve);
            c != this.index && (this.index = c, this.cg(this.kc.values[c], c, a), c >= this.Ve && (this.bg(), this.repeat == wa.i0 && (0 < this.Bj-- ? (this.pb = this.Eb,
                this.index = -1, this.lastIndex = this.Vf, this.eg(this.pb)) : (this.ej(), this.kc = null))));
            return !0
        },
        uf: function(a) {
            V.prototype.uf.call(this, a);
            a.index = this.index;
            a.lastIndex = this.lastIndex;
            a.kc = this.kc;
            a.Vf = this.Vf;
            a.Ve = this.Ve
        },
        j: hc
    });
    var U = Ha.e5 = {
        Ub: !0,
        Tb: "i0 i1 i2 i3 i4 i5".split(" ")
    };
    U.i0 = {
        u: 0,
        H: "e5",
        toString: y
    };
    U.i1 = {
        u: 1,
        H: "e5",
        toString: y
    };
    U.i2 = {
        u: 2,
        H: "e5",
        toString: y
    };
    U.i3 = {
        u: 3,
        H: "e5",
        toString: y
    };
    U.i4 = {
        u: 4,
        H: "e5",
        toString: y
    };
    U.i5 = {
        u: 5,
        H: "e5",
        toString: y
    };
    U.xc = [U.i0, U.i1, U.i2, U.i3, U.i4, U.i5];
    ze.__name__ =
        "AB";
    ze.prototype = {
        j: ze
    };
    ye.__name__ = "AC";
    ye.G = V;
    ye.prototype = u(V.prototype, {
        o: function() {
            this.bm = null;
            V.prototype.o.call(this)
        },
        eg: function(a) {
            var b = this.Pk(),
                c = this.data.Md,
                d;
            if (b <= c[0]) var e = d = this.lastIndex = b = 0;
            else if (b >= c[this.data.jf - 1]) b = 0, e = d = this.lastIndex = this.data.jf - 1;
            else if (b > c[this.lastIndex]) {
                for (d = this.lastIndex + 1; b >= c[d];) this.lastIndex = d, ++d;
                e = this.lastIndex;
                b = (b - c[e]) / (c[d] - c[e])
            } else if (b < c[this.lastIndex]) {
                for (d = this.lastIndex - 1; b <= c[d];) this.lastIndex = d, --d;
                e = d;
                d = this.lastIndex;
                b = (b - c[e]) / (c[d] - c[e])
            } else b = 0, e = d = this.lastIndex;
            this.ix(e, d, b);
            this.bz(this.Ip);
            return a > this.oc && this.repeat == wa.i0 ? (null != this.bm && (this.bm(), this.bm = null), this.ej(), !1) : !0
        },
        ix: function(a, b, c) {
            var d = this.data.parameters,
                e = this.Ip;
            if (a != b) {
                c = this.data.Jb[a](c);
                var f = this.data.Ly[a];
                null == f && (f = 0);
                if (0 != (f & 1 << U.i0.u)) {
                    var g = U.i0.u,
                        h = d[6 * a + g];
                    e.ar = h + (d[6 * b + g] - h) * c
                }
                0 != (f & 1 << U.i1.u) && (g = U.i1.u, h = d[6 * a + g], e.br = h + (d[6 * b + g] - h) * c);
                0 != (f & 1 << U.i2.u) && (g = U.i2.u, h = d[6 * a + g], e.rotation = h + (d[6 * b + g] - h) * c);
                0 !=
                    (f & 1 << U.i3.u) && (g = U.i3.u, h = d[6 * a + g], e.Nr = h + (d[6 * b + g] - h) * c);
                0 != (f & 1 << U.i4.u) && (g = U.i4.u, h = d[6 * a + g], e.Or = h + (d[6 * b + g] - h) * c);
                0 != (f & 1 << U.i5.u) && (g = U.i5.u, h = d[6 * a + g], e.alpha = h + (d[6 * b + g] - h) * c)
            } else e.ar = d[6 * b + U.i0.u], e.br = d[6 * b + U.i1.u], e.rotation = d[6 * b + U.i2.u], e.Nr = d[6 * b + U.i3.u], e.Or = d[6 * b + U.i4.u], e.alpha = d[6 * b + U.i5.u]
        },
        j: ye
    });
    Gc.__name__ = "AE";
    Gc.G = V;
    Gc.prototype = u(V.prototype, {
        o: function() {
            this.Jc = this.tc = this.Jb = null;
            V.prototype.o.call(this)
        },
        xg: function(a, b, c, d, e) {
            this.key = a;
            this.Tm = b;
            this.Fi = c;
            this.Jb =
                e;
            this.Eb = this.pb = 0;
            this.oc = d;
            1 != this.Fc && V.Dg++;
            this.Fc = !0;
            this.Cc = !1
        },
        stop: function() {
            this.tc = this.Jc = null;
            this.ej()
        },
        eg: function(a) {
            if (a >= this.oc && this.repeat == wa.i0) return this.ej(), this.tc(this.key, this.Fi), this.Jc(this.key), !1;
            a = this.Tm;
            a += (this.Fi - a) * this.Jb((this.Pk() - this.Eb) / (this.oc - this.Eb));
            this.tc(this.key, a);
            return !0
        },
        uf: function(a) {
            V.prototype.uf.call(this, a);
            a.key = this.key;
            a.Tm = this.Tm;
            a.Fi = this.Fi;
            a.Jb = this.Jb
        },
        j: Gc
    });
    kc.__name__ = "AF";
    kc.prototype = {
        Cc: function() {
            this.Na = null
        },
        getContext: function() {
            throw n.B("override for implementation");
        },
        mx: function(a) {
            this.Na = a;
            a.ew(this);
            var b = this.getContext();
            null != b && a.Ah(b)
        },
        nc: function() {
            var a = this.size,
                b = a.b,
                c = a.a;
            a = new v;
            a.b = b;
            a.a = c;
            return a
        },
        Su: function() {
            var a = this.viewport;
            return 0 < a.b || 0 < a.a || 1 > a.c ? !0 : 1 > a.d
        },
        $o: function() {
            this.sn || (this.sn = !0, this.Fh.b = this.size.b * this.viewport.b + .5 | 0, this.Fh.a = this.size.a * this.viewport.a + .5 | 0, this.Fh.c = this.size.b * this.viewport.c | 0, this.Fh.d = this.size.a * this.viewport.d | 0);
            var a = this.Fh,
                b = a.b,
                c = a.a,
                d = a.c,
                e = a.d;
            a = new Bc;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d = e;
            return a
        },
        resize: function(a, b) {
            var c = this.size;
            c.b = a;
            c.a = b;
            this.sn = !1;
            this.mo()
        },
        mo: function() {
            throw n.B("override for implementation");
        },
        Ah: function() {
            null != this.Na && this.Na.Ah(this.getContext())
        },
        j: kc
    };
    Lb.__name__ = "B0";
    Lb.G = kc;
    Lb.prototype = u(kc.prototype, {
        Un: function() {},
        resize: function(a, b) {
            kc.prototype.resize.call(this, a, b);
            this.Yc(this.nc())
        },
        j: Lb
    });
    gb.__name__ = "B1";
    gb.prototype = {
        ex: function() {
            gb.current = this
        },
        Dt: function(a) {
            if (!this.og) {
                var b = this.Lh;
                null != b && null != b.getContext() && 0 != b.nc().b && (this.Cy(),
                    this.Wb = 1, this.Gm(this.xi = Kb.En.mk), this.Ul(), a = this.so.jt(a, this.bq), this.Et(a), null != this.xf && this.Sh(null), this.am())
            }
        },
        clear: function() {},
        Cy: function() {
            this.Fd = this.ap();
            va.xp(this.Fd, this.mv);
            va.pi(this.Fk, this.Fd);
            null != this.Ee && va.Yx(this.Fk, this.Ee.Gu())
        },
        Et: function(a) {
            var b = a.f,
                c = 0;
            for (a = a.g; c < a;) {
                var d = c++;
                this.Ft(b[d])
            }
        },
        Ft: function(a) {
            var b = a.ja;
            b.active && (this.to = a, this.Fj(a), 0 != this.Wb && b.Af(this))
        },
        ap: function() {
            throw n.B("override for implementation");
        },
        createTexture: function(a, b,
            c) {
            var d = new qe;
            d.Ri = this.xw;
            d.fi = this.Vr;
            d.hx(b, !this.Ar || this.Zt);
            null != c && d.Zw(c.Po()); - 1 != a && ea.Mw(a, d);
            return d
        },
        Bt: function(a) {
            ea.Ab(a) && (ea.get(a).o(), ea.xy(a))
        },
        Ul: function() {},
        am: function() {},
        xo: function() {},
        yo: function() {},
        Ct: function(a) {
            a.Ei(this)
        },
        Ah: function() {},
        ew: function(a) {
            this.Lh = a
        },
        Xv: function() {
            this.so.Qg = !0
        },
        Fj: function(a) {
            if (0 != this.Vb) {
                if (0 != (this.Vb & 1 << X.i0.u)) {
                    var b = a.Kd[X.i0.u];
                    b = null != b ? b.alpha : 1;
                    b != this.Wb && (this.Wb = b)
                }
                0 != (this.Vb & 1 << X.i1.u) && (b = a.Kd[X.i1.u], b = null != b ?
                    b.mk : Kb.En.mk, b != this.xi && (this.xi = b, this.Gm(this.xi)));
                0 != (this.Vb & 1 << X.i2.u) && (b = a.Kd[X.i2.u], null != b ? null != b.rn && b.rn != this.xf && this.Sh(b.rn, null != b.R) : null != this.xf && this.Sh(null));
                0 != (this.Vb & 1 << X.i3.u) && (b = a.Kd[X.i3.u], null != b ? this.lr(b.ht) : null != this.Ek && this.lr(null))
            }
        },
        Gm: function() {},
        Sh: function(a) {
            this.xf = a
        },
        lr: function(a) {
            this.Ek = a
        },
        j: gb
    };
    Ba.__name__ = "B2";
    Ba.__interfaces__ = [Ed];
    Ba.G = Jc;
    Ba.prototype = u(Jc.prototype, {
        o: function() {},
        Af: function() {
            throw n.B("override for implementation");
        },
        j: Ba
    });
    Dd.__name__ = "B3";
    Dd.G = Ba;
    Dd.prototype = u(Ba.prototype, {
        eu: function() {
            this.xk = !0;
            return this.color
        },
        o: function() {
            Ba.prototype.o.call(this);
            this.we = null
        },
        Af: function(a) {
            a.xo(this);
            this.xk = !1
        },
        j: Dd
    });
    Cd.__name__ = "B4";
    Cd.G = Ba;
    Cd.prototype = u(Ba.prototype, {
        o: function() {
            Ba.prototype.o.call(this);
            this.Ei = null
        },
        Af: function(a) {
            a.Ct(this)
        },
        j: Cd
    });
    Mb.__name__ = "B5";
    Mb.G = Ba;
    Mb.prototype = u(Ba.prototype, {
        or: function(a) {
            if (this.frame != a) {
                this.frame = a;
                var b = this.Oa.kd;
                if (b.Sf) var c = b.Bl.f[a];
                else {
                    c = b.Cl;
                    b = c.cb;
                    var d = b.bc[73856093 * a & b.Vc];
                    if (-1 == d) a = -2147483648;
                    else if (b = b.f, b[d] == a) a = b[d + 1];
                    else {
                        var e = -2147483648;
                        for (d = b[d + 2]; - 1 != d;) {
                            if (b[d] == a) {
                                e = b[d + 1];
                                break
                            }
                            d = b[d + 2]
                        }
                        a = e
                    }
                    c = -2147483648 == a ? null : c.Uf[a]
                }
                c = this.Oa.fi ? c.Fr : c.Tx;
                a = this.oa;
                a.b = c.b;
                a.a = c.a;
                a.c = c.c;
                a.d = c.d
            }
        },
        re: function(a) {
            this.Oa = a;
            this.oa.b = 0;
            this.oa.a = 0;
            this.oa.c = a.J.b;
            this.oa.d = a.J.a;
            a.fi || (this.oa.c /= a.je.b, this.oa.d /= a.je.a);
            this.frame = -1;
            this.i = 0;
            this.Hh = a.Ri;
            return this
        },
        o: function() {
            Ba.prototype.o.call(this);
            this.Oa = this.oa = null
        },
        Af: function(a) {
            this.Oa.Pf &&
                a.yo(this)
        },
        j: Mb
    });
    Bd.__name__ = "B6";
    Bd.G = gb;
    Bd.prototype = u(gb.prototype, {
        clear: function() {
            var a = this.Lh;
            if (null != a && null != this.context) {
                var b = a.nc();
                this.$q();
                var c = this.context;
                c.globalAlpha = 1;
                c.globalCompositeOperation = "source-over";
                this.Re = -1;
                var d = this.Pm;
                d != this.yf && (this.yf = d, c[this.Qm] = d);
                c.clearRect(0, 0, b.b, b.a);
                0 < a.color.d && (c.fillStyle = pf.Jr(a.color), c.fillRect(0, 0, b.b, b.a))
            }
        },
        Ul: function() {
            gb.prototype.Ul.call(this);
            this.Oq();
            var a = this.Lh;
            if (a.Su()) {
                a = a.$o();
                var b = new Path2D;
                b.rect(a.b,
                    a.a, a.c, a.d);
                this.context.clip(b)
            }
        },
        am: function() {
            for (gb.prototype.am.call(this); 0 < this.Lj;) this.rm()
        },
        xo: function(a) {
            a.xk && (a.we = pf.Jr(a.eu()));
            var b = this.context,
                c = this.Pm;
            c != this.yf && (this.yf = c, b[this.Qm] = c);
            this.Pc != this.Rf && (this.Rf = this.Pc, b.globalCompositeOperation = this.Pc);
            this.Wb != this.Re && (this.Re = this.Wb, b.globalAlpha = this.Wb);
            c = this.to.l;
            this.setTransform(c, b);
            c = c.scale;
            b.fillStyle = a.we;
            b.fillRect(0, 0, c.b, c.a)
        },
        yo: function(a) {
            var b = this.context,
                c = this.Pm;
            c != this.yf && (this.yf = c, b[this.Qm] =
                c);
            this.Pc != this.Rf && (this.Rf = this.Pc, b.globalCompositeOperation = this.Pc);
            this.Wb != this.Re && (this.Re = this.Wb, b.globalAlpha = this.Wb);
            c = a.Oa.Za;
            var d = a.oa,
                e = this.to.l;
            this.setTransform(e, b);
            var f = e.scale,
                g = f.b;
            f = f.a;
            e = d.b;
            var h = d.a,
                k = d.c,
                q = d.d;
            null != this.Ek && (c = this.Ks(a), h = e = 0);
            var r = a.i;
            if (0 == (r & 12)) 0 > g || 0 > f ? (b.scale(0 > g ? -1 : 1, 0 > f ? -1 : 1), b.drawImage(c, e, h, k, q, 0, 0, 0 > g ? -g : g, 0 > f ? -f : f)) : b.drawImage(c, e, h, k, q, 0, 0, g, f);
            else if (b = E(b, b.drawImage), 4 == (r & 12)) {
                d = a.Qj % 1;
                r = a.Rj % 1;
                0 > d && (d = 1 + d);
                0 > r && (r = 1 + r);
                var p =
                    0;
                0 != d && (p |= 1);
                0 != r && (p |= 2);
                switch (p) {
                    case 0:
                        b(c, e, h, k, q, 0, 0, g, f);
                        break;
                    case 1:
                        b(c, e + d * k, h, k, q, 0, 0, g, f);
                        b(c, e, h, k * d, q, g * (1 - d), 0, g * d, f);
                        break;
                    case 2:
                        b(c, e, h + r * q, k, q, 0, 0, g, f);
                        b(c, e, h, k, q * r, 0, f * (1 - r), g, f * r);
                        break;
                    case 3:
                        b(c, e + d * k, h + r * q, k, q, 0, 0, g, f), b(c, e, h + q * r, k * d, q * (1 - r), g * (1 - d), 0, g * d, f * (1 - r)), b(c, e + d * k, h, k * (1 - d), q * r, 0, f * (1 - r), g * (1 - d), f * r), b(c, e, h, k * d, q * r, g * (1 - d), f * (1 - r), g * d, f * r)
                }
            } else if (8 == (r & 12)) {
                r = a.Sj;
                p = a.Tj;
                var m = g / r,
                    l = f / p,
                    n = r | 0,
                    v = p | 0,
                    u, x = 0;
                a = 0;
                for (var t = v; a < t;) {
                    a++;
                    for (var w = u = 0, y = n; w < y;) w++,
                        b(c, e, h, k, q, u, x, m, l), u += m;
                    x += l
                }
                u = q = k = 0;
                if (0 < r % 1)
                    for (++u, e = g - n * m, k = g / r * n, a = q = 0, t = v; a < t;) a++, b(c, d.b, d.a, e / m * d.c, d.d, k, q, e, f / p), q += f / p;
                if (0 < p % 1)
                    for (++u, h = f - v * l, k = 0, q = f / p * v, a = 0, t = n; a < t;) a++, b(c, d.b, d.a, d.c, h / l * d.d, k, q, g / r, h), k += g / r;
                2 == u && (e = g - n * m, h = f - v * l, b(c, d.b, d.a, e / m * d.c, h / l * d.d, k, q, e, h))
            } else if (12 == (r & 12)) {
                r = 1 / a.Sj;
                p = 1 / a.Tj;
                w = 1 / r | 0;
                u = 1 / p | 0;
                y = 1 - w * r;
                x = 1 - u * p;
                m = this.dy;
                m.ec(3 * w + 12);
                m.g = 0;
                l = this.ey;
                l.ec(18 * u + 6);
                v = n = l.g = 0;
                t = a.Qj % 1;
                0 > t && (t = 1 + t);
                var z = t;
                for (d = 0; d < w;) {
                    t = z;
                    var A = z + r;
                    1 < A ? (m.f[m.g++] = t, m.f[m.g++] =
                        1 - t, m.f[m.g++] = 1, m.f[m.g++] = 0, m.f[m.g++] = A - 1, m.f[m.g++] = 0, n += 6) : (m.f[m.g++] = t, m.f[m.g++] = r, m.f[m.g++] = 0, n += 3);
                    ++d;
                    z += r;
                    z %= 1
                }
                0 < y && (t = z, A = z + y, 1 < A ? (m.f[m.g++] = t, m.f[m.g++] = 1 - t, m.f[m.g++] = 1, m.f[m.g++] = 0, m.f[m.g++] = A - 1, m.f[m.g++] = 0, n += 6) : (m.f[m.g++] = t, m.f[m.g++] = y, m.f[m.g++] = 0, n += 3));
                a = a.Rj % 1;
                0 > a && (a = 1 + a);
                z = a;
                for (d = 0; d < u;) t = z, A = z + p, 1 < A ? (l.f[l.g++] = t, l.f[l.g++] = 1 - t, l.f[l.g++] = 1, l.f[l.g++] = 0, l.f[l.g++] = A - 1, l.f[l.g++] = 0, v += 6) : (l.f[l.g++] = t, l.f[l.g++] = p, l.f[l.g++] = 0, v += 3), ++d, z += p, z %= 1;
                0 < x && (t = z, A = z + x, 1 < A ?
                    (l.f[l.g++] = t, l.f[l.g++] = 1 - t, l.f[l.g++] = 1, l.f[l.g++] = 0, l.f[l.g++] = A - 1, l.f[l.g++] = 0, v += 6) : (l.f[l.g++] = t, l.f[l.g++] = x, l.f[l.g++] = 0, v += 3));
                d = a = 0;
                for (var C; d < v;) {
                    z = l.f[d++];
                    var B = l.f[d++];
                    var D = l.f[d++];
                    x = B / p;
                    for (C = t = 0; C < n;) w = m.f[C++], y = m.f[C++], A = m.f[C++], u = y / r, b(c, e + t, h + a, k * u, q * x, g * w, f * z, g * y, f * B), t = k * u * A;
                    a = q * x * D
                }
            }
        },
        ap: function() {
            var a = this.Ee;
            if (null == a) return va.ff(this.Fd), this.Fd;
            va.jr(this.Fd, a.state.size.b / 2, a.state.size.a / 2, 0);
            var b = this.Lh.$o();
            va.bo(this.Fd, b.c / a.state.size.b, b.d / a.state.size.a,
                1);
            a = this.Fd;
            a.d += b.b;
            a.v += b.a;
            a.Ba = a.Ba;
            return this.Fd
        },
        Ah: function(a) {
            this.context = a
        },
        Gm: function(a) {
            this.Pc = this.it[a.u]
        },
        Sh: function(a, b) {
            null == b && (b = !1);
            var c = this.xf;
            gb.prototype.Sh.call(this, a);
            var d = this.context;
            if (null == a) 0 != this.Lj && this.rm();
            else {
                a != c && null != c && this.rm();
                this.Oq();
                this.$q();
                a = this.xf;
                if (b) try {
                    var e = new Path2D;
                    e.rect(a[0].b, a[0].a, a[2].b - a[1].b, a[2].a - a[3].a);
                    d.clip(e);
                    return
                } catch (f) {}
                d.strokeStyle = this.ry;
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
            var c = a.fa;
            a = a.translate;
            if (null == this.Ee) b.setTransform(c.b, c.d, c.a, c.e, a.b, a.a);
            else {
                var d = this.by;
                d.b = c.b;
                d.e = c.d;
                d.a = c.a;
                d.C = c.e;
                d.d = a.b;
                d.v = a.a;
                c = this.ut;
                a = this.Fk;
                var e = d.b,
                    f = d.a,
                    g = d.d,
                    h = d.e,
                    k = d.C;
                d = d.v;
                var q = a.b,
                    l = a.a;
                c.b = q * e + l * h;
                c.a = q * f + l * k;
                c.d = q * g + l * d + a.d;
                q = a.e;
                l = a.C;
                c.e = q * e + l * h;
                c.C = q * f + l * k;
                c.v = q * g + l * d + a.v;
                b.setTransform(c.b, c.e, c.a, c.C, c.d, c.v)
            }
        },
        Ks: function(a) {
            var b = a.oa,
                c = b.b | 0,
                d = b.a | 0,
                e = b.c | 0,
                f = b.d |
                0;
            b = this.Zx;
            null == b && (b = this.Zx = window.document.createElement("canvas"));
            if (b.width < e || b.height < f) b.width = e, b.height = f;
            var g = b.getContext("2d", null);
            g.drawImage(ee.fy(a.Oa.Za), c, d, e, f, 0, 0, e, f);
            a = g.getImageData(0, 0, e, f);
            c = a.data;
            d = c.length;
            e = 0;
            var h = this.Ek;
            f = h.Gw;
            var k = h.Mu,
                q = h.Qs,
                l = h.Hs,
                p = h.Hw,
                m = h.Nu,
                n = h.Rs;
            h = h.Is;
            if (1 != l && 0 != h)
                for (; e < d;) c[e] = c[e] * f + p, c[e + 1] = c[e + 1] * k + m, c[e + 2] = c[e + 2] * q + n, c[e + 3] = c[e + 3] * l + h, e += 4;
            else
                for (; e < d;) c[e] = c[e] * f + p, c[e + 1] = c[e + 1] * k + m, c[e + 2] = c[e + 2] * q + n, e += 4;
            g.putImageData(a,
                0, 0);
            return b
        },
        $q: function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0)
        },
        Oq: function() {
            this.context.save();
            this.Lj++
        },
        rm: function() {
            this.context.restore();
            this.Lj--
        },
        j: Bd
    });
    Y.__name__ = "B7";
    Y.kx = function(a) {
        a.style.setProperty("image-rendering", "pixelated");
        a.style.setProperty("image-rendering", "-moz-crisp-edges");
        a.style.setProperty("image-rendering", "-o-crisp-edges");
        a.style.setProperty("-ms-interpolation-mode", "nearest-neighbor")
    };
    Y.G = Lb;
    Y.prototype = u(Lb.prototype, {
        Un: function() {
            this.Cf = !0;
            this.Fq();
            window.clearInterval(this.Gq);
            this.Gq = window.setInterval(E(this, this.Fq), 100)
        },
        Sy: function() {
            if (this.gl) return 0 == window.orientation ? "Portrait" : "Landscape";
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
        bv: function(a, b) {
            null == b && (b = !1);
            null == a && (a = !0);
            this.context = this.canvas.getContext("2d", {
                alpha: a
            });
            b && Y.kx(this.canvas);
            this.Ah()
        },
        Um: function(a) {
            null == a && (a = .9);
            try {
                return this.canvas.toDataURL("image/jpeg", a)
            } catch (b) {
                return null
            }
        },
        Cc: function() {
            Lb.prototype.Cc.call(this);
            this.canvas.remove();
            for (var a = 0, b = this.aj; a < b.length;) {
                var c = b[a];
                ++a;
                c.target.removeEventListener(c.type, c.listener)
            }
            this.aj = null;
            window.clearInterval(this.Gq);
            window.clearTimeout(this.Ho)
        },
        getContext: function() {
            return this.context
        },
        Uu: function() {
            window.oncontextmenu = function() {
                return !1
            }
        },
        rv: function() {
            return 1 == this.sk(window.document, null, ["fullscreenEnabled",
                "fullScreenEnabled"
            ])
        },
        mo: function() {
            if (!this.$g)
                if (this.Cf) {
                    var a = window.innerHeight;
                    this.canvas.width = window.innerWidth * this.Yb | 0;
                    this.canvas.height = a * this.Yb | 0;
                    c = this.canvas.style;
                    c.left = "0px";
                    c.top = "0px";
                    c.width = "100%";
                    c.height = "100%";
                    c.position = "absolute";
                    this.getContext() instanceof WebGLRenderingContext && this.getContext().viewport(0, 0, this.canvas.width, this.canvas.height);
                    window.scrollTo(0, 1)
                } else {
                    a = this.size.b | 0;
                    var b = this.size.a | 0;
                    this.canvas.width = a;
                    this.canvas.height = b;
                    var c = this.canvas.style;
                    c.width = "" + a + "px";
                    c.height = "" + b + "px";
                    c.position = "absolute"
                }
        },
        Fq: function() {
            var a = this,
                b = window.innerWidth * this.Yb | 0,
                c = window.innerHeight * this.Yb | 0;
            if (this.wl.b != b || this.wl.a != c) {
                var d = this.wl;
                d.b = b;
                d.a = c;
                this.canvas.style.display = "none";
                window.clearTimeout(this.Ho);
                this.Ho = window.setTimeout(function() {
                    a.canvas.style.display = ""
                }, 250);
                this.resize(b, c)
            }
        },
        sk: function(a, b, c) {
            b = [b];
            null != c && (b = c);
            for (c = 0; c < b.length;) {
                var d = b[c];
                ++c;
                for (var e = 0, f = ["webkit", "moz", "ms", "o", ""]; e < f.length;) {
                    var g = f[e];
                    ++e;
                    var h = d;
                    "" != g && (h = A.substr(d, 0, 1).toUpperCase() + A.substr(d, 1, null));
                    h = g + h;
                    if ("undefined" !== typeof a[h]) return "function" === typeof a[h] ? a[h]() : a[h]
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
                    this.aj.push({
                        target: a,
                        type: f + b,
                        listener: d
                    });
                    a.addEventListener(f + b, d)
                }
            } else this.aj.push({
                target: a,
                type: b,
                listener: d
            }), a.addEventListener(b, d)
        },
        Ou: function() {
            var a = window.document,
                b = window,
                c = a.createElement("div");
            c.id =
                "ppi";
            c.style.height = "1in";
            c.style.width = "1in";
            a.body.appendChild(c);
            Y.$c = a.getElementById("ppi").offsetWidth * Y.gi | 0;
            a.body.removeChild(c);
            a = b.screen.width;
            c = b.screen.height;
            if (3400 < a * Y.gi) Y.$c = 1.5 * Y.$c | 0;
            else if (!(192 >= Y.$c && 1280 <= a && null == b.orientation)) {
                b = [375, 812, 3, 458, 288, 414, 736, 3, 401, 288, 375, 667, 2, 326, 192, 320, 568, 2, 326, 192, 320, 480, 2, 326, 192, 320, 480, 1, 163, 96, 360, 640, 4, 538, 384, 384, 640, 2, 318, 192, 360, 740, 4, 529, 384, 360, 740, 4, 568, 384, 360, 640, 4, 534, 384, 360, 640, 4, 577, 384, 360, 640, 3, 441, 288, 360, 640,
                    1.5, 256, 144, 360, 640, 2, 306, 192, 320, 533, 1.5, 233, 144, 320, 533, 1.5, 217, 144, 360, 600, 2, 316, 192, 360, 740, 4, 521, 384, 360, 640, 4, 515, 384, 360, 640, 3, 386, 288, 360, 640, 2, 267, 192, 400, 640, 2, 285, 192, 360, 640, 3, 445, 288, 384, 640, 2, 320, 192, 432, 768, 2.5, 367, 240, 320, 480, 2.4, 332, 220, 320, 480, 1.5, 217, 144, 320, 480, 2, 294, 192, 320, 480, 1.5, 252, 144, 412, 690, 3.5, 493, 336, 360, 640, 3, 468, 288, 320, 480, 3, 341, 288, 360, 598, 3, 424, 288, 360, 640, 3, 443, 288, 360, 640, 2, 342, 192, 360, 640, 1.5, 275, 144, 393, 786, 2.75, 403, 264, 360, 640, 3, 401, 288, 360, 640, 3, 373, 288, 390,
                    695, 2, 294, 177, 504, 504, 3, 453, 274, 390, 390, 1.8, 294, 177, 346, 346, 2, 328, 192, 360, 640, 2, 295, 192, 384, 640, 2, 355, 192, 360, 480, 1, 187, 96, 320, 480, 1.5, 165, 144, 1024, 1366, 2, 265, 192, 768, 1024, 2, 264, 192, 768, 1024, 1, 132, 96, 768, 1024, 2, 326, 192, 768, 1024, 1, 163, 96, 800, 1280, 1, 149, 96, 800, 1280, 1, 170, 96, 600, 1024, 1, 170, 96, 800, 1280, 2, 300, 192, 1024, 2, 281, 192, 600, 960, 2, 323, 192, 604, 966, 1.325, 216, 127, 600, 960, 2, 273, 192, 800, 1280, 1.5, 254, 144, 480, 800, 1.5, 216, 144, 600, 1024, 1, 167, 96, 1024, 1440, 1.0714285714285714, 216, 144, 720, 1280, 1.5, 207, 144, 768,
                    1366, 1, 148, 96, 600, 1024, 1, 169, 96
                ];
                for (var d = 0, e = b.length; d < e;) {
                    var f = b[d++],
                        g = b[d++],
                        h = b[d++],
                        k = b[d++],
                        q = b[d++];
                    if (f == a && g == c && h == Y.gi && q == Y.$c) {
                        Y.$c = k;
                        break
                    }
                }
            }
        },
        j: Y
    });
    var Ya = Ha.e6 = {
        Ub: !0,
        Tb: "i0 i1 i2 i3 i4 i5".split(" ")
    };
    Ya.i0 = {
        u: 0,
        H: "e6",
        toString: y
    };
    Ya.i1 = {
        u: 1,
        H: "e6",
        toString: y
    };
    Ya.i2 = {
        u: 2,
        H: "e6",
        toString: y
    };
    Ya.i3 = {
        u: 3,
        H: "e6",
        toString: y
    };
    Ya.i4 = {
        u: 4,
        H: "e6",
        toString: y
    };
    Ya.i5 = (Wc = function(a, b) {
        var c = {
            u: 5,
            H: "e6",
            toString: y
        };
        c.src = a;
        c.dst = b;
        return c
    }, Wc.hi = ["src", "dst"], Wc);
    Ya.xc = [Ya.i0, Ya.i1, Ya.i2,
        Ya.i3, Ya.i4
    ];
    var Da = Ha.e7 = {
        Ub: !0,
        Tb: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    Da.i0 = {
        u: 0,
        H: "e7",
        toString: y
    };
    Da.i1 = {
        u: 1,
        H: "e7",
        toString: y
    };
    Da.i2 = {
        u: 2,
        H: "e7",
        toString: y
    };
    Da.i3 = {
        u: 3,
        H: "e7",
        toString: y
    };
    Da.i4 = {
        u: 4,
        H: "e7",
        toString: y
    };
    Da.i5 = {
        u: 5,
        H: "e7",
        toString: y
    };
    Da.i6 = {
        u: 6,
        H: "e7",
        toString: y
    };
    Da.i7 = {
        u: 7,
        H: "e7",
        toString: y
    };
    Da.xc = [Da.i0, Da.i1, Da.i2, Da.i3, Da.i4, Da.i5, Da.i6, Da.i7];
    var Ea = Ha.e8 = {
        Ub: !0,
        Tb: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ")
    };
    Ea.i0 = {
        u: 0,
        H: "e8",
        toString: y
    };
    Ea.i1 = {
        u: 1,
        H: "e8",
        toString: y
    };
    Ea.i2 = {
        u: 2,
        H: "e8",
        toString: y
    };
    Ea.i3 = {
        u: 3,
        H: "e8",
        toString: y
    };
    Ea.i4 = {
        u: 4,
        H: "e8",
        toString: y
    };
    Ea.i5 = {
        u: 5,
        H: "e8",
        toString: y
    };
    Ea.i6 = {
        u: 6,
        H: "e8",
        toString: y
    };
    Ea.i7 = {
        u: 7,
        H: "e8",
        toString: y
    };
    Ea.xc = [Ea.i0, Ea.i1, Ea.i2, Ea.i3, Ea.i4, Ea.i5, Ea.i6, Ea.i7];
    Ma.__name__ = "B8";
    Ma.prototype = {
        collapse: function() {
            throw n.B("override for implementation");
        },
        j: Ma
    };
    var X = Ha.e9 = {
        Ub: !0,
        Tb: ["i0", "i1", "i2", "i3"]
    };
    X.i0 = {
        u: 0,
        H: "e9",
        toString: y
    };
    X.i1 = {
        u: 1,
        H: "e9",
        toString: y
    };
    X.i2 = {
        u: 2,
        H: "e9",
        toString: y
    };
    X.i3 = {
        u: 3,
        H: "e9",
        toString: y
    };
    X.xc = [X.i0, X.i1,
        X.i2, X.i3
    ];
    Kb.__name__ = "B9";
    Kb.G = Ma;
    Kb.prototype = u(Ma.prototype, {
        collapse: function() {
            return this
        },
        j: Kb
    });
    Fc.__name__ = "BA";
    Fc.G = Ma;
    Fc.prototype = u(Ma.prototype, {
        collapse: function(a) {
            for (var b = 1, c, d = 0, e = a.I; d < e;) c = d++, c = a.f[c], b *= c.alpha;
            null == this.vk && (this.vk = new Fc(this.alpha));
            this.vk.alpha = b;
            return this.vk
        },
        j: Fc
    });
    fb.__name__ = "BB";
    fb.prototype = {
        o: function() {
            this.A = null
        },
        contains: function() {
            throw n.B("override for implementation");
        },
        cl: function() {},
        from: function() {},
        un: function() {
            throw n.B("override for implementation");
        },
        bn: function(a, b) {
            var c = Db.Od(this.A);
            a.sa(c, c);
            var d = b.A;
            c = mf.iy(c);
            d.b = c.b;
            d.a = c.a;
            d.c = c.c;
            b.T = a.uu() * this.T
        },
        j: fb
    };
    wb.__name__ = "BC";
    wb.G = fb;
    wb.prototype = u(fb.prototype, {
        o: function() {
            this.Ea = null;
            fb.prototype.o.call(this)
        },
        contains: function(a) {
            return Id.Px(a, this.Ea)
        },
        cl: function(a) {
            switch (a.type) {
                case 1:
                    var b = a.A;
                    a = a.T;
                    var c = this.Ea,
                        d = b.b - a,
                        e = b.a - a;
                    d < c.b ? c.b = d : d > c.c && (c.c = d);
                    e < c.a ? c.a = e : e > c.d && (c.d = e);
                    c = this.Ea;
                    d = b.b + a;
                    e = b.a + a;
                    d < c.b ? c.b = d : d > c.c && (c.c = d);
                    e < c.a ? c.a = e : e > c.d && (c.d = e);
                    break;
                case 2:
                    c =
                        this.Ea, b = F.Aa(a, wb).Ea, b.b < c.b && (c.b = b.b), b.c > c.c && (c.c = b.c), b.a < c.a && (c.a = b.a), b.d > c.d && (c.d = b.d)
            }
            c = this.Ea;
            b = .5 * (c.c - c.b);
            c = this.Ea;
            c = .5 * (c.d - c.a);
            this.A.b = this.Ea.b + b;
            this.A.a = this.Ea.a + c;
            this.T = Math.sqrt(b * b + c * c)
        },
        from: function(a) {
            var b = a.A,
                c = a.T;
            switch (a.type) {
                case 1:
                    this.Ea.b = b.b - c;
                    this.Ea.a = b.a - c;
                    this.Ea.c = b.b + c;
                    this.Ea.d = b.a + c;
                    break;
                case 2:
                    var d = this.Ea;
                    a = F.Aa(a, wb).Ea;
                    d.b = a.b;
                    d.a = a.a;
                    d.c = a.c;
                    d.d = a.d
            }
            d = this.A;
            d.b = b.b;
            d.a = b.a;
            d.c = b.c;
            this.T = c
        },
        un: function(a) {
            var b = a.b,
                c = a.a;
            a = za.Le(a);
            var d =
                this.Ea.b,
                e = this.Ea.a,
                f = this.Ea.c,
                g = this.Ea.d;
            if (1 == b) return f < a ? -1 : d > a ? 1 : 0;
            if (-1 == b) return d > -a ? -1 : f < -a ? 1 : 0;
            if (1 == c) return g < a ? -1 : e > a ? 1 : 0;
            if (-1 == b) return e > -a ? -1 : g < -a ? 1 : 0;
            var h = 0 | Hc.tg(d, e, b, c, a);
            h |= Hc.tg(f, e, b, c, a) << 1;
            h |= Hc.tg(d, g, b, c, a) << 2;
            h |= Hc.tg(f, g, b, c, a) << 3;
            return 15 == h ? -1 : 0 == h ? 1 : 0
        },
        bn: function(a, b) {
            fb.prototype.bn.call(this, a, b);
            b = F.Aa(b, wb).Ea;
            var c = new v,
                d = c;
            c = this.Ea;
            d.b = c.b + .5 * (c.c - c.b);
            c = this.Ea;
            d.a = c.a + .5 * (c.d - c.a);
            a.sa(d, d);
            b.b = d.b;
            b.a = d.a;
            b.c = d.b;
            b.d = d.a;
            if (0 < (a.m & 2)) d = a.fa, c = a.scale,
                a = .5 * c.b, c = .5 * c.a, 0 < d.b ? (b.b -= d.b * a, b.c += d.b * a) : (b.b += d.b * a, b.c -= d.b * a), 0 < d.a ? (b.b -= d.a * c, b.c += d.a * c) : (b.b += d.a * c, b.c -= d.a * c), 0 < d.d ? (b.a -= d.d * a, b.d += d.d * a) : (b.a += d.d * a, b.d -= d.d * a), 0 < d.e ? (b.a -= d.e * c, b.d += d.e * c) : (b.a += d.e * c, b.d -= d.e * c);
            else {
                d = a.fa;
                var e = d.b,
                    f = d.a;
                a = Math.sqrt(e * e + f * f);
                d = (e * d.e - f * d.d) / a;
                a *= .5;
                c = .5 * d;
                e = Math.atan2(f, e);
                d = Math.cos(e);
                e = Math.sin(e);
                0 < d ? (b.b -= d * a, b.c += d * a) : (b.b += d * a, b.c -= d * a);
                0 < e ? (b.b -= e * c, b.c += e * c) : (b.b += e * c, b.c -= e * c);
                0 < -e ? (b.a -= -e * a, b.d += -e * a) : (b.a += -e * a, b.d -= -e * a);
                0 < d ?
                    (b.a -= d * c, b.d += d * c) : (b.a += d * c, b.d -= d * c)
            }
        },
        j: wb
    });
    xe.__name__ = "BD";
    xe.prototype = {
        reset: function(a) {
            this.state.A.b = a.b + a.c / 2;
            this.state.A.a = a.a + a.d / 2;
            this.state.size.b = a.c;
            this.state.size.a = a.d;
            this.state.rotation = 0;
            this.state.zoom = 1;
            this.cx()
        },
        Gu: function() {
            if (!this.cn) return this.xe;
            this.cn = !1;
            var a = this.state.A.b,
                b = this.state.A.a;
            va.jr(this.xe, -a, -b, 0);
            va.bo(this.xe, this.state.zoom, this.state.zoom, 1);
            va.bt(this.xe, .0174532925199432 * this.state.rotation);
            var c = this.xe;
            c.d += a;
            c.v += b;
            c.Ba = c.Ba;
            c = this.xe;
            c.d += -a;
            c.v += -b;
            c.Ba = c.Ba;
            return this.xe
        },
        ku: function() {
            if (!this.pl) return this.ql;
            this.pl = !1;
            va.xp(this.xe, this.ql);
            return this.ql
        },
        cx: function() {
            this.pl = this.cn = !0;
            this.Na.Xv()
        },
        j: xe
    };
    we.__name__ = "BE";
    we.prototype = {
        j: we
    };
    Ad.__name__ = "BF";
    Ad.G = fb;
    Ad.prototype = u(fb.prototype, {
        contains: function(a) {
            var b = a.b - this.A.b;
            a = a.a - this.A.a;
            return b * b + a * a <= this.T * this.T
        },
        cl: function(a) {
            var b = a.A.b - this.A.b,
                c = a.A.a - this.A.a,
                d = a.T - this.T,
                e = b * b + c * c;
            d * d >= e ? 0 <= d && this.from(a) : (d = Math.sqrt(e), e = (d + a.T - this.T) / (2 *
                d), this.A.b += e * b, this.A.a += e * c, this.T = (d + this.T + a.T) / 2)
        },
        from: function(a) {
            this.A.b = a.A.b;
            this.A.a = a.A.a;
            this.T = a.T
        },
        un: function(a) {
            a = ef.Qt(this.A.b, this.A.a, a.b, a.a, za.Le(a));
            return a <= -this.T ? -1 : a >= this.T ? 1 : 0
        },
        j: Ad
    });
    zd.__name__ = "C0";
    zd.G = Ma;
    zd.prototype = u(Ma.prototype, {
        Jd: function(a) {
            var b = a.a,
                c = a.c,
                d = a.d,
                e = new H;
            e.b = a.b;
            e.a = b;
            e.c = c;
            e.d = d;
            this.R = e;
            b = a.b;
            c = a.a;
            d = e = new v;
            d.b = b;
            d.a = c;
            b = a.b;
            c = a.d;
            var f = e = new v;
            f.b = b;
            f.a = c;
            b = a.c;
            c = a.d;
            var g = e = new v;
            g.b = b;
            g.a = c;
            b = a.c;
            c = a.a;
            a = e = new v;
            a.b = b;
            a.a = c;
            this.rn =
                [d, f, g, a]
        },
        collapse: function() {
            return this
        },
        j: zd
    });
    ve.__name__ = "C1";
    ve.G = Ma;
    ve.prototype = u(Ma.prototype, {
        collapse: function() {
            return this
        },
        j: ve
    });
    ue.__name__ = "C2";
    ue.prototype = {
        j: ue
    };
    te.__name__ = "C3";
    te.prototype = {
        jt: function(a, b) {
            this.Bg.g = 0;
            ua.Xr = ma.ot(a);
            ua.qo = 0;
            b || null == this.Na.Ee ? ma.Iu(a, this.Bg) : (this.Gh = (1 << this.$e.length) - 1, this.Qg && (this.zy(), this.Qg = !1), a.kq(this, !1));
            ua.Wr = this.Bg.g;
            ua.qo = 1 - ua.Wr / ua.Xr;
            return this.Bg
        },
        xv: function(a) {
            if (!isFinite(a.T)) return !0;
            for (var b = 0, c = this.$e.length; b <
                c;) {
                var d = b++,
                    e = 1 << d;
                if (0 != (this.Gh & e)) {
                    d = a.un(this.$e[d]);
                    if (0 > d) return !1;
                    0 < d && (this.Gh &= ~e)
                }
            }
            return !0
        },
        zy: function() {
            var a = this.Na.Ee;
            if (null != a && this.Qg) {
                this.Qg = !1;
                var b = a.state.size.b / 2,
                    c = a.state.size.a / 2,
                    d = this.zj[0],
                    e = this.zj[1],
                    f = this.zj[2],
                    g = this.zj[3];
                d.b = -b;
                d.a = -c;
                e.b = b;
                e.a = -c;
                f.b = -b;
                f.a = c;
                g.b = b;
                g.a = c;
                a = a.ku();
                b = d.b;
                c = d.a;
                var h = d.c,
                    k = 1;
                d.b = a.b * b + a.a * c + a.c * h + a.d * k;
                d.a = a.e * b + a.C * c + a.Ga * h + a.v * k;
                d.c = a.Ka * b + a.Ta * c + a.k * h + a.Ba * k;
                b = e.b;
                c = e.a;
                h = e.c;
                k = 1;
                e.b = a.b * b + a.a * c + a.c * h + a.d * k;
                e.a = a.e * b + a.C *
                    c + a.Ga * h + a.v * k;
                e.c = a.Ka * b + a.Ta * c + a.k * h + a.Ba * k;
                b = f.b;
                c = f.a;
                h = f.c;
                k = 1;
                f.b = a.b * b + a.a * c + a.c * h + a.d * k;
                f.a = a.e * b + a.C * c + a.Ga * h + a.v * k;
                f.c = a.Ka * b + a.Ta * c + a.k * h + a.Ba * k;
                b = g.b;
                c = g.a;
                h = g.c;
                k = 1;
                g.b = a.b * b + a.a * c + a.c * h + a.d * k;
                g.a = a.e * b + a.C * c + a.Ga * h + a.v * k;
                g.c = a.Ka * b + a.Ta * c + a.k * h + a.Ba * k;
                za.Ej(this.$e[0], Db.Od(d), Db.Od(e));
                za.Ej(this.$e[1], Db.Od(g), Db.Od(f));
                za.Ej(this.$e[2], Db.Od(f), Db.Od(d));
                za.Ej(this.$e[3], Db.Od(e), Db.Od(g));
                this.R.b = d.b;
                this.R.a = d.a;
                this.R.c = g.b;
                this.R.d = g.a
            }
        },
        j: te
    };
    var jb = Ha.eA = {
        Ub: !0,
        Tb: ["i0", "i1",
            "i2"
        ]
    };
    jb.i0 = {
        u: 0,
        H: "eA",
        toString: y
    };
    jb.i1 = {
        u: 1,
        H: "eA",
        toString: y
    };
    jb.i2 = {
        u: 2,
        H: "eA",
        toString: y
    };
    jb.xc = [jb.i0, jb.i1, jb.i2];
    vb.__name__ = "C4";
    vb.nt = function(a) {
        var b = new vb(a.state),
            c = b;
        for (a = a.next; null != a;) c = c.next = new vb(a.state), a = a.next;
        return b
    };
    vb.prototype = {
        j: vb
    };
    Qa.__name__ = "C5";
    Qa.et = function() {
        for (var a = 0; 4 > a;) {
            var b = a++;
            Qa.ii.f[b].clear()
        }
    };
    Qa.Aw = function(a) {
        null == Qa.ii && Qa.ev();
        var b = Qa.ii,
            c = Qa.Ds,
            d = a;
        for (c.clear(); null != d.parent;) {
            var e = d.parent;
            c.I == c.s && c.M();
            c.f[c.I++] = e;
            d = d.parent
        }
        d =
            0;
        for (e = c.I; d < e;) d++, c.f[--c.I].vm(b);
        a.vm(b);
        c.clear(!0);
        return b
    };
    Qa.ev = function() {
        Qa.ii = new P(4);
        for (var a = 0; 4 > a;) {
            a++;
            var b = Qa.ii,
                c = new ob;
            b.g == b.s && b.M();
            b.f[b.g++] = c
        }
        Qa.Ds = new ob(16)
    };
    pa.__name__ = "C6";
    pa.__interfaces__ = [Wb];
    pa.G = ic;
    pa.prototype = u(ic.prototype, {
        o: function() {
            ic.prototype.o.call(this);
            null != this.parent && this.parent.removeChild(this);
            this.K = this.parent = null;
            this.local.o();
            this.local = null;
            this.l.o();
            this.ye = this.l = null;
            this.Nw();
            null != this.ja && this.ja.o();
            this.client = this.ja = null;
            this.i = 1024
        },
        Lm: function(a) {
            switch (a.u) {
                case 0:
                    this.i &= -4;
                    break;
                case 1:
                    this.i &= -3;
                    this.i |= 1;
                    break;
                case 2:
                    this.i |= 2, this.i &= -2
            }
            return a
        },
        kq: function(a, b) {
            if (!(0 < (this.i & 1))) {
                0 < (this.i & 2) && (b = !0);
                var c = a.Gh;
                (b || a.xv(this.ye)) && this.Yk(a, b);
                a.Gh = c
            }
        },
        Yk: function() {
            throw n.B("override for implementation");
        },
        Ef: function() {
            throw n.B("override for implementation");
        },
        Ff: function() {
            for (var a = this; null != a.parent;) a = a.parent;
            return a
        },
        yg: function(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            this.pn(b);
            b && (this.kf(),
                a && this.Mq())
        },
        pn: function() {
            0 < (this.i & 4) || (ua.fq++, this.i &= -9, this.i |= 32, null != this.parent ? this.l.lx(this.parent.l, this.local) : this.l.from(this.local))
        },
        kf: function() {
            null != this.parent && (this.parent.i |= 32);
            ua.eq++
        },
        Mq: function() {
            null != this.parent && (this.parent.kf(), this.parent.Mq())
        },
        ci: function(a) {
            var b = null == a;
            b ? a = Qa.Aw(this) : this.vm(a);
            this.um(a);
            b ? Qa.et() : this.tw(a);
            this.i &= -129
        },
        Uo: function(a) {
            for (var b = this.Lb; null != b;) {
                if (b.state.type == a) return b.state;
                b = b.next
            }
            return null
        },
        Fj: function(a) {
            this.i |=
                128;
            if (null == this.Lb) this.Lb = new vb(a);
            else {
                for (var b = this.Lb, c = a.type; null != b;) {
                    if (b.state.type == c) {
                        b.state = a;
                        return
                    }
                    b = b.next
                }
                b = new vb(a);
                b.next = this.Lb;
                this.Lb = b
            }
        },
        Xq: function(a) {
            this.i |= 128;
            for (var b = this.Lb, c = null; null != b;) {
                if (b.state.type == a) {
                    null != c ? c.next = b.next : this.Lb = b.next;
                    b.next = null;
                    break
                }
                c = b;
                b = b.next
            }
        },
        Nw: function() {
            this.i |= 128;
            for (var a = this.Lb, b; null != a;) b = a.next, a.next = null, a = b;
            this.Lb = null
        },
        um: function() {
            throw n.B("override for implementation");
        },
        vm: function(a) {
            for (var b = this.Lb,
                    c; null != b;) {
                c = b.state;
                var d = a.f[c.Om];
                d.I == d.s && d.M();
                d.f[d.I++] = c;
                b = b.next
            }
        },
        tw: function(a) {
            for (var b = this.Lb; null != b;) --a.f[b.state.Om].I, b = b.next
        },
        oo: function(a) {
            null == a && (a = this.Ke());
            switch (a) {
                case 1:
                    return new Ad;
                case 2:
                    return new wb
            }
        },
        Ke: function() {
            return pa.bs
        },
        j: pa
    });
    Ka.__name__ = "C7";
    Ka.G = pa;
    Ka.prototype = u(pa.prototype, {
        o: function() {
            pa.prototype.o.call(this);
            this.Y = null
        },
        Yk: function(a, b) {
            for (var c = this.Y; null != c;) c.kq(a, b), c = c.K
        },
        Ef: function(a, b) {
            return ma.Ef(this, a, b)
        },
        appendChild: function(a) {
            if (null ==
                this.Y) this.Y = a, a.K = null;
            else {
                for (var b = this.Y; null != b.K;) b = b.K;
                b.K = a
            }
            a.parent = this;
            this.wh++;
            return this
        },
        Ln: function(a, b) {
            if (0 == b) a.K = this.Y, this.Y = a;
            else {
                var c = this.Y,
                    d = 0;
                for (--b; d < b;) d++, c = c.K;
                a.K = c.K;
                c.K = a
            }
            a.parent = this;
            this.wh++;
            return this
        },
        removeChild: function(a) {
            if (this.Y == a) this.Y = a.K;
            else {
                for (var b = this.Y; b.K != a;) b = b.K;
                b.K = a.K
            }
            a.K = null;
            a.parent = null;
            this.wh--;
            return this
        },
        ih: function(a) {
            for (var b = this.Y, c = 0; c <= a;) {
                if (c == a) return b;
                b = b.K;
                ++c
            }
            return null
        },
        dx: function(a, b) {
            this.removeChild(a);
            this.Ln(a, b);
            return this
        },
        Vd: function(a) {
            for (var b = this.Y; null != b;) {
                if (b.name == a) return b;
                b = b.K
            }
            return null
        },
        nr: function(a) {
            if (this.Y == a) return this;
            for (var b = this.Y; b.K != a;) b = b.K;
            b.K = a.K;
            a.K = this.Y;
            this.Y = a;
            return this
        },
        pn: function(a, b) {
            null == b && (b = !0);
            pa.prototype.pn.call(this, a);
            if (b)
                for (b = this.Y; null != b;) b.yg(!1, a), b = b.K
        },
        kf: function() {
            if (!(0 < (this.i & 16)) && null != this.Y) {
                var a = this.Y;
                this.ye.from(a.ye);
                for (a = a.K; null != a;) 0 < (a.i & 256) && 0 == F.Aa(a, Ka).wh || this.ye.cl(a.ye), a = a.K;
                this.i &= -33;
                pa.prototype.kf.call(this)
            }
        },
        um: function(a) {
            for (var b = this.Y; null != b;) b.ci(a), b = b.K
        },
        Ke: function() {
            return null != Ka.gu ? Ka.gu() : pa.prototype.Ke.call(this)
        },
        j: Ka
    });
    Za.__name__ = "C9";
    Za.G = pa;
    Za.prototype = u(pa.prototype, {
        o: function() {
            this.ge.o();
            this.ge = null;
            S.Cd(this.Kd);
            this.Kd = null;
            pa.prototype.o.call(this)
        },
        nn: function() {
            this.i |= 64
        },
        kf: function() {
            0 < (this.i & 16) || 0 == (this.i & 96) || (this.ge.bn(this.l, this.ye), this.i &= -97, pa.prototype.kf.call(this))
        },
        Yk: function(a) {
            null != this.ja && (a = a.Bg, a.g == a.s && a.M(), a.f[a.g++] = this)
        },
        um: function(a) {
            for (var b,
                    c = 0, d = a.g; c < d;) {
                var e = c++;
                b = a.f[e];
                0 == b.I ? this.Kd[e] = null : (b = b.f[b.I - 1].collapse(b), this.Kd[e] = b)
            }
        },
        Ke: function() {
            return null != Za.Ok ? Za.Ok() : pa.prototype.Ke.call(this)
        },
        j: Za
    });
    nb.__name__ = "CA";
    nb.G = Za;
    nb.prototype = u(Za.prototype, {
        fb: function(a, b) {
            if (!this.ye.contains(a)) return 0;
            var c = a.b,
                d = a.a;
            this.l.hd(a, a);
            var e = Id.Qx(a.b, a.a);
            e && null != b && (b.data[b.count++] = this);
            a.b = c;
            a.a = d;
            return e ? 1 : 0
        },
        Ef: function(a, b) {
            var c = new v,
                d = 3E38,
                e = 3E38,
                f = -3E38,
                g = -3E38;
            if (a == this) e = d = 0, g = f = 1;
            else {
                if (a == this.parent) {
                    var h =
                        this.local;
                    c.b = 0;
                    c.a = 0;
                    h.sa(c, c);
                    c.b < d && (d = c.b);
                    c.b > f && (f = c.b);
                    c.a < e && (e = c.a);
                    c.a > g && (g = c.a);
                    c.b = 1;
                    c.a = 0;
                    h.sa(c, c);
                    c.b < d && (d = c.b);
                    c.b > f && (f = c.b);
                    c.a < e && (e = c.a);
                    c.a > g && (g = c.a);
                    c.b = 1;
                    c.a = 1;
                    h.sa(c, c);
                    c.b < d && (d = c.b);
                    c.b > f && (f = c.b);
                    c.a < e && (e = c.a);
                    c.a > g && (g = c.a);
                    c.b = 0;
                    c.a = 1;
                    h.sa(c, c)
                } else null == a.parent ? (h = this.l, c.b = 0, c.a = 0, h.sa(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 0, h.sa(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 1, h.sa(c, c), c.b < d &&
                    (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 0, c.a = 1, h.sa(c, c)) : (h = this.l, a = a.l, c.b = 0, c.a = 0, h.sa(c, c), a.hd(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 0, h.sa(c, c), a.hd(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 1, c.a = 1, h.sa(c, c), a.hd(c, c), c.b < d && (d = c.b), c.b > f && (f = c.b), c.a < e && (e = c.a), c.a > g && (g = c.a), c.b = 0, c.a = 1, h.sa(c, c), a.hd(c, c));
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
        nn: function() {
            Za.prototype.nn.call(this);
            this.ge.A.b = .5;
            this.ge.A.a = .5;
            this.ge.T = Math.sqrt(.5);
            switch (this.ge.type) {
                case 2:
                    var a = F.Aa(this.ge, wb).Ea;
                    a.b = 0;
                    a.a = 0;
                    a.c = 1;
                    a.d = 1
            }
        },
        Ke: function() {
            return null != nb.Ok ? nb.Ok() : Za.prototype.Ke.call(this)
        },
        j: nb
    });
    ma.__name__ = "CB";
    ma.ot = function(a) {
        var b = 0,
            c = ma.qg;
        c.clear();
        c.I == c.s && c.M();
        for (c.f[c.I++] = a; 0 < c.I;)
            if (a = c.f[--c.I], 0 < (a.i & 512)) ++b;
            else if (0 < (a.i & 256))
            for (a = a.Y; null != a;) c.I == c.s && c.M(), c.f[c.I++] = a, a = a.K;
        return b
    };
    ma.yg = function(a, b) {
        null == b && (b = !0);
        var c = ma.qg;
        c.clear();
        c.I == c.s && c.M();
        c.f[c.I++] = a;
        a = 8;
        for (b && (a |= 32); 0 < c.I;) {
            var d = c.f[--c.I];
            if (0 < (d.i & a)) d.yg(!0, b);
            else if (0 < (d.i & 256))
                for (d = d.Y; null != d;) c.I == c.s && c.M(), c.f[c.I++] = d, d = d.K
        }
    };
    ma.ci = function(a) {
        var b = ma.qg;
        b.clear();
        b.I == b.s && b.M();
        for (b.f[b.I++] = a; 0 < b.I;)
            if (a = b.f[--b.I], 0 < (a.i & 128)) a.ci();
            else if (0 < (a.i & 256))
            for (a = a.Y; null != a;) b.I == b.s && b.M(), b.f[b.I++] = a, a = a.K
    };
    ma.ln = function(a, b) {
        var c = ma.qg;
        c.clear();
        c.I == c.s && c.M();
        for (c.f[c.I++] = a; 0 < c.I;)
            if (a = c.f[--c.I], null != a.controllers && a.ln(b), 0 < (a.i & 256))
                for (a = a.Y; null !=
                    a;) c.I == c.s && c.M(), c.f[c.I++] = a, a = a.K
    };
    ma.Iu = function(a, b) {
        var c = ma.qg,
            d = ma.Hx;
        c.clear();
        c.I == c.s && c.M();
        for (c.f[c.I++] = a; 0 < c.I;)
            if (a = c.f[--c.I], !(0 < (a.i & 1)))
                if (0 < (a.i & 512)) null != a.ja && (d.I == d.s && d.M(), d.f[d.I++] = a);
                else if (0 < (a.i & 256))
            for (a = a.Y; null != a;) c.I == c.s && c.M(), c.f[c.I++] = a, a = a.K;
        b.g = 0;
        b.ec(d.I);
        c = 0;
        for (a = d.I; c < a;) {
            c++;
            var e = d.f[--d.I];
            b.f[b.g++] = e
        }
    };
    ma.Ef = function(a, b, c) {
        var d = 3E38,
            e = 3E38,
            f = -3E38,
            g = -3E38,
            h = ma.qg;
        h.clear();
        h.I == h.s && h.M();
        for (h.f[h.I++] = a; 0 < h.I;)
            if (a = h.f[--h.I], 0 < (a.i & 512)) a.Ef(b,
                c), c.b < d && (d = c.b), c.a < e && (e = c.a), c.c > f && (f = c.c), c.d > g && (g = c.d);
            else if (0 < (a.i & 256))
            for (a = a.Y; null != a;) h.I == h.s && h.M(), h.f[h.I++] = a, a = a.K;
        c.b = d;
        c.a = e;
        c.c = f;
        c.d = g;
        return c
    };
    ma.oy = function(a, b, c) {
        if (null == e) {
            var d = new H;
            var e = d
        }
        var f = c.b,
            g = c.a,
            h = c.c,
            k = c.d,
            q = 3E38,
            l = 3E38,
            p = -3E38,
            m = -3E38;
        d = new v;
        b == a ? (q = c.b, l = c.a, p = c.c, m = c.d) : (b == a.parent ? (a = a.local, d.b = f, d.a = g, a.sa(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a), d.b = h, d.a = g, a.sa(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m &&
            (m = d.a), d.b = h, d.a = k, a.sa(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a), d.b = f, d.a = k, a.sa(d, d)) : null == b.parent ? (a = a.l, d.b = f, d.a = g, a.sa(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a), d.b = h, d.a = g, a.sa(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a), d.b = h, d.a = k, a.sa(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a), d.b = f, d.a = k, a.sa(d, d)) : (a = a.l, b = b.l, d.b = f, d.a = g, a.sa(d, d), b.hd(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m &&
            (m = d.a), d.b = h, d.a = g, a.sa(d, d), b.hd(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a), d.b = h, d.a = k, a.sa(d, d), b.hd(d, d), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a), d.b = f, d.a = k, a.sa(d, d), b.hd(d, d)), d.b < q && (q = d.b), d.b > p && (p = d.b), d.a < l && (l = d.a), d.a > m && (m = d.a));
        e.b = q;
        e.a = l;
        e.c = p;
        e.d = m;
        return e
    };
    yd.__name__ = "CC";
    yd.__isInterface__ = !0;
    yd.prototype = {
        j: yd
    };
    ua.__name__ = "CD";
    ua.reset = function() {
        ua.fq = 0;
        ua.eq = 0
    };
    ub.__name__ = "CE";
    ub.prototype = {
        o: function() {
            this.fa = this.translate = this.scale =
                null
        },
        Gj: function(a) {
            this.fa != a && Ec.pi(this.fa, a);
            this.m &= -18;
            this.m |= 34
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
            Ec.pi(this.fa, a.fa);
            this.m = a.m | 32;
            return this
        },
        lx: function(a, b) {
            if (0 < (a.m & 1)) {
                this.translate.b = b.translate.b;
                this.translate.a = b.translate.a;
                this.scale.b = b.scale.b;
                this.scale.a = b.scale.a;
                var c = this.fa,
                    d = b.fa;
                c.b = d.b;
                c.a = d.a;
                c.d = d.d;
                c.e = d.e;
                this.m = b.m | 32;
                return this
            }
            if (0 < (b.m & 1)) return this.translate.b = a.translate.b,
                this.translate.a = a.translate.a, this.scale.b = a.scale.b, this.scale.a = a.scale.a, c = this.fa, d = a.fa, c.b = d.b, c.a = d.a, c.d = d.d, c.e = d.e, this.m = a.m | 32, this;
            this.m = 43;
            if (0 < (a.m & 2) && 0 < (b.m & 2) && 0 < (a.m & 8)) {
                c = this.fa;
                if (0 < (a.m & 16)) {
                    var e = b.fa;
                    c.b = e.b;
                    c.a = e.a;
                    c.d = e.d;
                    c.e = e.e;
                    0 < (b.m & 16) && (this.m |= 16)
                } else {
                    if (0 < (b.m & 16)) d = a.fa, c.b = d.b, c.a = d.a, c.d = d.d, c.e = d.e;
                    else {
                        d = a.fa;
                        e = b.fa;
                        var f = e.b;
                        var g = e.a;
                        var h = e.d;
                        var k = e.e;
                        e = d.b;
                        var l = d.a;
                        c.b = e * f + l * h;
                        c.a = e * g + l * k;
                        e = d.d;
                        l = d.e;
                        c.d = e * f + l * h;
                        c.e = e * g + l * k
                    }
                    this.Gj(c)
                }
                h = this.translate;
                d = a.translate;
                0 < (a.m & 16) ? (h.b = b.translate.b, h.a = b.translate.a) : (f = b.translate.b, g = b.translate.a, c = a.fa, h.b = c.b * f + c.a * g, h.a = c.d * f + c.e * g);
                a = a.scale.b;
                h.b = h.b * a + d.b;
                h.a = h.a * a + d.a;
                0 < (b.m & 8) ? (this.scale.b = this.scale.a = a * b.scale.b, this.m &= -6, this.m |= 40) : (b = b.scale, this.scale.b = a * b.b, this.scale.a = a * b.a, this.m &= -14, this.m |= 32);
                return this
            }
            d = a.fa;
            0 < (a.m & 2) && (d = ub.$x, f = a.scale.b, g = a.scale.a, c = a.fa, d.b = c.b * f, d.a = c.a * g, d.d = c.d * f, d.e = c.e * g);
            e = b.fa;
            0 < (b.m & 2) && (d = ub.ay, f = b.scale.b, g = b.scale.a, c = b.fa, e.b = c.b * f, e.a =
                c.a * g, e.d = c.d * f, e.e = c.e * g);
            c = this.fa;
            f = e.b;
            g = e.a;
            h = e.d;
            k = e.e;
            e = d.b;
            l = d.a;
            c.b = e * f + l * h;
            c.a = e * g + l * k;
            e = d.d;
            l = d.e;
            c.d = e * f + l * h;
            c.e = e * g + l * k;
            h = this.translate;
            f = b.translate.b;
            g = b.translate.a;
            h.b = d.b * f + d.a * g;
            h.a = d.d * f + d.e * g;
            d = a.translate;
            h.b += d.b;
            h.a += d.a;
            this.m &= -12;
            this.m |= 32;
            return this
        },
        sa: function(a, b) {
            if (0 < (this.m & 1)) b.b = a.b, b.a = a.a;
            else {
                if (0 < (this.m & 2)) {
                    var c = a.b * this.scale.b;
                    a = a.a * this.scale.a;
                    if (0 >= (this.m & 16)) {
                        var d = c,
                            e = this.fa;
                        c = e.b * c + e.a * a;
                        a = e.d * d + e.e * a
                    }
                } else c = a.b, a = a.a, d = c, e = this.fa, c = e.b * c + e.a *
                    a, a = e.d * d + e.e * a;
                b.b = c + this.translate.b;
                b.a = a + this.translate.a
            }
            return b
        },
        hd: function(a, b) {
            if (0 < (this.m & 1)) b.b = a.b, b.a = a.a;
            else {
                var c = a.b - this.translate.b;
                a = a.a - this.translate.a;
                if (0 < (this.m & 2)) {
                    if (0 >= (this.m & 16)) {
                        var d = c,
                            e = this.fa;
                        c = c * e.b + a * e.d;
                        a = d * e.a + a * e.e
                    }
                    b.b = c / this.scale.b;
                    b.a = a / this.scale.a
                } else e = this.fa, d = 1 / (e.b * e.e - e.a * e.d), b.b = e.e * d * c - e.a * d * a, b.a = -(e.d * d) * c + e.b * d * a
            }
            return b
        },
        uu: function() {
            var a = Math;
            return 0 < (this.m & 2) ? Math.max(a.abs(this.scale.b), a.abs(this.scale.a)) : Math.max(a.abs(this.fa.b) +
                a.abs(this.fa.a), a.abs(this.fa.d) + a.abs(this.fa.e))
        },
        j: ub
    };
    ba.__name__ = "CF";
    ba.__interfaces__ = [Ed, yd];
    ba.prototype = {
        o: function() {
            this.remove();
            null != this.Wc && (this.Wc.o(), this.Wc = null);
            null != this.Dl && (this.Dl.o(), this.Dl = null);
            this.node = null;
            ba.count--
        },
        remove: function() {
            null != this.node.parent && this.node.parent.removeChild(this.node)
        },
        Kb: function() {
            var a = this.node.parent;
            return null != a && (a = a.client, null != a && 10 == a.type) ? a : null
        },
        wr: function(a) {
            this.remove();
            a.appendChild(this.node.client);
            return a
        },
        qa: function(a) {
            this.Gc != a && (this.Gc = 0 > a ? 0 : 1 < a ? 1 : a, this.i |= 2);
            return this.Gc
        },
        na: function(a) {
            this.sh != a && (this.sh = a, this.i |= 4);
            return a
        },
        ba: function(a) {
            this.xa != a && (this.xa = a, this.i |= 1);
            return a
        },
        ga: function(a) {
            this.ua != a && (this.ua = a, this.i |= 1);
            return a
        },
        Jj: function(a) {
            this.Hc != a && (this.Hc = a, this.i |= 9);
            return a
        },
        ib: function(a) {
            if (this.Ca != a || this.mb != a) this.Ca = this.mb = a, this.i |= 49, this.i &= -65;
            return a
        },
        Uh: function(a) {
            this.Ca != a && (this.Ca = a, this.i &= -97, this.i |= 17);
            return a
        },
        Vh: function(a) {
            this.mb !=
                a && (this.mb = a, this.i &= -97, this.i |= 17);
            return a
        },
        Ne: function() {
            throw n.B("override for implementation");
        },
        Me: function() {
            throw n.B("override for implementation");
        },
        wx: function(a) {
            this.Ua != a && (this.Ua = a, this.i |= 1);
            return a
        },
        vr: function(a) {
            this.Va != a && (this.Va = a, this.i |= 1);
            return a
        },
        xx: function(a) {
            this.yd != a && (this.yd = a, this.i |= 1);
            return a
        },
        Ha: function() {
            throw n.B("override for implementation");
        },
        Hg: function(a, b, c) {
            this.zb();
            var d = this.Ha(this.Kb()),
                e = this.xa - d.b,
                f = this.ua - d.a;
            switch (b) {
                case -1:
                    this.ba(a.b +
                        e);
                    break;
                case 0:
                    this.ba(a.b + .5 * (a.c - a.b) + e - (d.c - d.b) / 2);
                    break;
                case 1:
                    this.ba(a.c + e - (d.c - d.b))
            }
            switch (c) {
                case -1:
                    this.ga(a.a + f);
                    break;
                case 0:
                    this.ga(a.a + .5 * (a.d - a.a) + f - (d.d - d.a) / 2);
                    break;
                case 1:
                    this.ga(a.d + f - (d.d - d.a))
            }
        },
        Xt: function(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = bb.i0);
            this.ib(1);
            var e = (a.c - a.b) / this.Ne(),
                f = (a.d - a.a) / this.Me();
            b == bb.i2 ? (this.Uh(e), this.Vh(f)) : b == bb.i0 ? this.ib(Math.min(e, f)) : this.ib(Math.max(e, f));
            this.ba(a.b);
            this.ga(a.a);
            f = this.Ha(this.Kb());
            e = a.b - f.b;
            f = a.a - f.a;
            if (b != bb.i2) {
                switch (c) {
                    case -1:
                        this.ba(a.b);
                        break;
                    case 0:
                        this.ba(a.b + (a.c - a.b - this.Ne()) / 2);
                        break;
                    case 1:
                        this.ba(a.c - this.Ne())
                }
                switch (d) {
                    case -1:
                        this.ga(a.a);
                        break;
                    case 0:
                        this.ga(a.a + (a.d - a.a - this.Me()) / 2);
                        break;
                    case 1:
                        this.ga(a.d - this.Me())
                }
            }
            a = this;
            a.ba(a.xa + e);
            a = this;
            a.ga(a.ua + f)
        },
        wg: function(a, b) {
            aa.Pd(this);
            this.node.l.sa(a, b);
            return b
        },
        update: function() {},
        Zd: function() {
            null == this.Wc && (this.Wc = new gc(this));
            return this.Wc
        },
        ux: function(a) {
            var b = this.node.Uo(X.i2);
            if (null == b) {
                if (null == a) return a;
                b = new zd;
                this.node.Fj(b)
            }
            if (null == a) return this.node.Xq(X.i2), a;
            b.Jd(a);
            return a
        },
        zb: function() {
            if (0 == (this.i & 7)) return this;
            0 < (this.i & 1) && this.Sr();
            0 < (this.i & 4) && (this.node.Lm(this.sh ? jb.i0 : jb.i1), this.i &= -5);
            if (0 < (this.i & 2)) {
                if (1 > this.Gc) {
                    var a = this.node.Uo(X.i0);
                    null == a ? this.node.Fj(new Fc(this.Gc)) : a.alpha = this.Gc
                } else this.node.Xq(X.i0);
                this.i &= -3;
                this.node.i |= 128
            }
            return this
        },
        Sr: function() {
            this.i &= -2;
            this.node.i |= 8;
            var a = this.node.local,
                b = this.Ue,
                c = this.yd,
                d = this.i & 120;
            if (0 < (d & 8)) {
                var e = this.Hc;
                e %= 360;
                0 > e && (e += 360);
                var f = .0174532925199432 * e,
                    g = Math.sin(f);
                f = Math.cos(f);
                e = a.fa;
                e.b = f;
                e.a = -g;
                e.d = g;
                e.e = f;
                a.Gj(e);
                if (0 < (d & 64)) a.translate.b = -(b * f) + c * g + b + this.xa - this.Ua, a.translate.a = -(b * g) - c * f + c + this.ua - this.Va;
                else {
                    if (0 < (d & 32)) {
                        e = this.Ca;
                        var h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e;
                        d = h * b;
                        e = h * c;
                        a.scale.b = a.scale.a = h;
                        a.m &= -6;
                        a.m |= 40
                    } else {
                        e = this.Ca;
                        h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e;
                        e = this.mb;
                        var k = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e;
                        d = h * b;
                        e = k * c;
                        a.scale.b = h;
                        a.scale.a = k;
                        a.m &= -14;
                        a.m |= 32
                    }
                    a.translate.b = -(d *
                        f) + e * g + b + this.xa - this.Ua;
                    a.translate.a = -(d * g) - e * f + c + this.ua - this.Va
                }
            } else 0 < (d & 64) ? (a.translate.b = this.xa - this.Ua, a.translate.a = this.ua - this.Va) : 0 < (d & 32) ? (e = this.Ca, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, a.scale.b = a.scale.a = h, a.m &= -6, a.m |= 40, a.translate.b = -(h * b) + b + this.xa - this.Ua, a.translate.a = -(h * c) + c + this.ua - this.Va) : (e = this.Ca, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, e = this.mb, k = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, a.scale.b = h, a.scale.a = k, a.m &= -14, a.m |= 32, a.translate.b = -(h * b) + b + this.xa - this.Ua, a.translate.a = -(k * c) + c + this.ua - this.Va);
            a.m &= -2;
            a.m |= 32
        },
        j: ba
    };
    ca.__name__ = "D0";
    ca.G = ba;
    ca.prototype = u(ba.prototype, {
        o: function() {
            null != this.node && (ba.prototype.o.call(this), null != this.se && (this.se.o(), this.se = null), this.jb.o(), this.S = this.jb = null, this.Zg = -1, this.Ge = null, ca.ae--)
        },
        Ne: function() {
            var a = Math;
            if (0 == (this.i & 8)) return this.J.b * a.abs(this.Ca);
            var b = this.J.b * a.abs(this.Ca) * .5,
                c = this.J.a * a.abs(this.mb) * .5,
                d = this.Hc;
            d %= 360;
            0 > d && (d += 360);
            var e = .0174532925199432 * d;
            d = -a.sin(e);
            a = a.cos(e);
            var f = e = 0;
            0 < a ? (e -=
                a * b, f += a * b) : (e += a * b, f -= a * b);
            0 < d ? (e -= d * c, f += d * c) : (e += d * c, f -= d * c);
            return f - e
        },
        Kj: function(a) {
            this.Ca = a / this.J.b;
            this.i &= -97;
            this.i |= 17;
            return a
        },
        Me: function() {
            var a = Math;
            if (0 == (this.i & 8)) return this.J.a * a.abs(this.mb);
            var b = this.J.b * a.abs(this.Ca) / 2,
                c = this.J.a * a.abs(this.mb) / 2,
                d = this.Hc;
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
        Ij: function(a) {
            this.mb = a / this.J.a;
            this.i &= -97;
            this.i |=
                17;
            return a
        },
        Vk: function() {
            var a = this.J.a,
                b = new v;
            b.b = this.J.b;
            b.a = a;
            return b
        },
        Xy: function() {
            return this.J.b
        },
        Wy: function() {
            return this.J.a
        },
        sf: function() {
            this.wx(this.J.b / 2);
            this.vr(this.J.a / 2);
            this.i |= 1
        },
        Nc: function() {
            this.Ue = this.J.b / 2;
            this.yd = this.J.a / 2;
            this.i |= 1
        },
        re: function(a, b) {
            if (this.Zg == a) return null != b && this.gc(b), this;
            this.Zg = a;
            this.Ge = null;
            if (null == this.jb.ja) {
                var c = new Mb;
                this.jb.ja = c
            } else 11 == this.jb.ja.type ? c = this.jb.ja : (this.jb.ja.o(), c = new Mb, this.jb.ja = c);
            a = ea.get(a);
            c.re(a, a.kd);
            this.J.b = c.Oa.J.b;
            this.J.a = c.Oa.J.a;
            null == b && (c = this.J, a = a.scale, c.b *= a, c.a *= a);
            this.i = this.J.b == this.J.a ? this.i | 256 : this.i & -257;
            this.i &= -513;
            this.i |= 129;
            null != b && this.gc(b);
            return this
        },
        gc: function(a) {
            if (this.Ge == a) return a;
            this.Ge = a;
            this.px(this.jb.ja.Oa.kd.bj.v[a].id);
            return a
        },
        Lu: function() {
            null == this.se && (this.se = new eb(this));
            return this.se
        },
        fb: function(a) {
            aa.Pd(this);
            0 < (this.node.i & 32) && this.node.kf();
            return 1 == this.jb.fb(a, null)
        },
        Ha: function(a) {
            var b = new H;
            if (a == this) {
                a = this.J.b;
                var c = this.J.a;
                b.b = 0;
                b.a = 0;
                b.c = a;
                b.d = c;
                return b
            }
            if (0 == (this.i & 128)) return b.b = 0, b.a = 0, b.c = 0, b.d = 0, b;
            if (c = 512 == (this.i & 8704)) this.i &= -513, this.i |= 1;
            0 == (this.i & 16384) && (aa.Pd(this), null == a || aa.sl(this, a) || aa.Pd(a));
            this.node.Ef(null == a ? this.node.Ff() : a.node, b);
            c && (this.i |= 513);
            this.i &= -24577;
            return b
        },
        zb: function() {
            return 0 == (this.i & 128) ? this : ba.prototype.zb.call(this)
        },
        clone: function() {
            var a = new ca(this.Kb()),
                b = this.jb.ja;
            if (null != b) switch (b.type) {
                case 5:
                    a.jb.ja = new Dd(b);
                    break;
                case 11:
                    if (a.jb.ja = new Mb(b), a.Zg =
                        this.Zg, a.Ge = this.Ge, null != this.S) {
                        b = this.S;
                        var c = b.b,
                            d = b.a,
                            e = b.c,
                            f = b.d;
                        b = new H;
                        b.b = c;
                        b.a = d;
                        b.c = e;
                        b.d = f;
                        a.S = b
                    }
            }
            null != this.node.name && (a.node.name = this.node.name + "_clone");
            a.xa = this.xa;
            a.ua = this.ua;
            a.Ca = this.Ca;
            a.mb = this.mb;
            a.Ua = this.Ua;
            a.Va = this.Va;
            a.Ue = this.Ue;
            a.yd = this.yd;
            a.Hc = this.Hc;
            a.Gc = this.Gc;
            a.sh = this.sh;
            b = a.J;
            c = this.J;
            b.b = c.b;
            b.a = c.a;
            a.i = this.i;
            a.node.i = a.node.i;
            a.node.local.from(this.node.local);
            a.node.l.from(this.node.l);
            null != a.node.Lb && (a.node.Lb = vb.nt(this.node.Lb));
            gc.clone(this, a);
            eb.clone(this, a);
            return a
        },
        wg: function(a, b) {
            var c = a.a,
                d = new v;
            d.b = a.b;
            d.a = c;
            d.b /= this.J.b;
            d.a /= this.J.a;
            0 < (this.i & 512) ? (this.i &= -513, this.i |= 1, ba.prototype.wg.call(this, d, b), this.i |= 513, aa.Pd(this)) : ba.prototype.wg.call(this, d, b);
            return b
        },
        Sr: function() {
            this.i &= -2;
            this.node.i |= 8;
            var a = this.node.local;
            if (0 < (this.i & 512)) {
                var b = this.Ue - this.S.b,
                    c = this.yd - this.S.a,
                    d = this.i & 376;
                if (0 < (d & 8)) {
                    var e = this.Hc;
                    e %= 360;
                    0 > e && (e += 360);
                    var f = .0174532925199432 * e,
                        g = Math.sin(f);
                    f = Math.cos(f);
                    e = a.fa;
                    e.b = f;
                    e.a = -g;
                    e.d =
                        g;
                    e.e = f;
                    a.Gj(e);
                    if (0 < (d & 64)) 0 < (d & 256) ? (a.scale.b = a.scale.a = this.S.c, a.m &= -6, a.m |= 40) : (a.scale.b = this.S.c, a.scale.a = this.S.d, a.m &= -14, a.m |= 32), a.translate.b = -(b * f) + c * g + b + this.xa - this.Ua + this.S.b, a.translate.a = -(b * g) - c * f + c + this.ua - this.Va + this.S.a;
                    else {
                        if (0 < (d & 32)) {
                            e = this.Ca;
                            var h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e;
                            e = h * b;
                            var k = h * c;
                            0 < (d & 256) ? (a.scale.b = a.scale.a = this.S.c * h, a.m &= -6, a.m |= 40) : (a.scale.b = this.S.c * h, a.scale.a = this.S.d * h, a.m &= -14, a.m |= 32)
                        } else e = this.Ca, d = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e,
                            e = this.mb, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, e = d * b, k = h * c, a.scale.b = this.S.c * d, a.scale.a = this.S.d * h, a.m &= -14, a.m |= 32;
                        a.translate.b = -(e * f) + k * g + b + this.xa - this.Ua + this.S.b;
                        a.translate.a = -(e * g) - k * f + c + this.ua - this.Va + this.S.a
                    }
                } else 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.S.c, a.m &= -6, a.m |= 40) : (a.scale.b = this.S.c, a.scale.a = this.S.d, a.m &= -14, a.m |= 32), a.translate.b = this.xa - this.Ua + this.S.b, a.translate.a = this.ua - this.Va + this.S.a) : (0 < (d & 32) ? (e = this.Ca, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, 0 < (d & 256) ? (a.scale.b =
                    a.scale.a = this.S.c * h, a.m &= -6, a.m |= 40) : (a.scale.b = this.S.c * h, a.scale.a = this.S.d * h, a.m &= -14, a.m |= 32), a.translate.b = -(h * b) + b + this.xa - this.Ua + this.S.b) : (e = this.Ca, d = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, e = this.mb, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, a.scale.b = this.S.c * d, a.scale.a = this.S.d * h, a.m &= -14, a.m |= 32, a.translate.b = -(d * b) + b + this.xa - this.Ua + this.S.b), a.translate.a = -(h * c) + c + this.ua - this.Va + this.S.a)
            } else b = this.Ue, c = this.yd, d = this.i & 376, 0 < (d & 8) ? (e = this.Hc, e %= 360, 0 > e && (e += 360), f = .0174532925199432 * e, g = Math.sin(f),
                f = Math.cos(f), e = a.fa, e.b = f, e.a = -g, e.d = g, e.e = f, a.Gj(e), 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.J.b, a.m &= -6, a.m |= 40) : (a.scale.b = this.J.b, a.scale.a = this.J.a, a.m &= -14, a.m |= 32), a.translate.b = -(b * f) + c * g + b + this.xa - this.Ua, a.translate.a = -(b * g) - c * f + c + this.ua - this.Va) : (0 < (d & 32) ? (e = this.Ca, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, e = h * b, k = h * c, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.J.b * h, a.m &= -6, a.m |= 40) : (a.scale.b = this.J.b * h, a.scale.a = this.J.a * h, a.m &= -14, a.m |= 32)) : (e = this.Ca, d = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e,
                    e = this.mb, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, e = d * b, k = h * c, a.scale.b = this.J.b * d, a.scale.a = this.J.a * h, a.m &= -14, a.m |= 32), a.translate.b = -(e * f) + k * g + b + this.xa - this.Ua, a.translate.a = -(e * g) - k * f + c + this.ua - this.Va)) : 0 < (d & 64) ? (0 < (d & 256) ? (a.scale.b = a.scale.a = this.J.b, a.m &= -6, a.m |= 40) : (a.scale.b = this.J.b, a.scale.a = this.J.a, a.m &= -14, a.m |= 32), a.translate.b = this.xa - this.Ua, a.translate.a = this.ua - this.Va) : (0 < (d & 32) ? (e = this.Ca, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, 0 < (d & 256) ? (a.scale.b = a.scale.a = this.J.b * h, a.m &= -6, a.m |=
                40) : (a.scale.b = this.J.b * h, a.scale.a = this.J.a * h, a.m &= -14, a.m |= 32), a.translate.b = -(h * b) + b + this.xa - this.Ua) : (e = this.Ca, d = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, e = this.mb, h = 0 > e ? -.001 < e ? -.001 : e : .001 > e ? .001 : e, a.scale.b = this.J.b * d, a.scale.a = this.J.a * h, a.m &= -14, a.m |= 32, a.translate.b = -(d * b) + b + this.xa - this.Ua), a.translate.a = -(h * c) + c + this.ua - this.Va);
            a.m &= -2;
            a.m |= 32
        },
        px: function(a) {
            var b = this.jb.ja;
            b.or(a);
            b = b.Oa.kd;
            if (b.Sf) a = b.Bl.f[a];
            else {
                var c = b.Cl,
                    d = c.cb,
                    e = d.bc[73856093 * a & d.Vc];
                if (-1 == e) a = -2147483648;
                else if (d =
                    d.f, d[e] == a) a = d[e + 1];
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
                a = -2147483648 == a ? null : c.Uf[a]
            }
            c = this.J;
            e = a.J;
            c.b = e.b;
            c.a = e.a;
            if (a.en) {
                this.i |= 512;
                c = a.ve;
                e = a.Fr;
                if (null == this.S) {
                    d = c.b;
                    f = c.a;
                    var g = e.c,
                        h = e.d;
                    c = new H;
                    c.b = d;
                    c.a = f;
                    c.c = g;
                    c.d = h;
                    this.S = c
                } else this.S.b = c.b, this.S.a = c.a, this.S.c = e.c, this.S.d = e.d;
                this.i = e.c == e.d ? this.i | 256 : this.i & -257
            } else this.i &= -513, this.i = this.J.b == this.J.a ? this.i | 256 : this.i & -257;
            1 != b.scale && (b = 1 / b.scale, c = this.J, c.b *= b, c.a *= b, a.en &&
                (this.S.b *= b, this.S.a *= b, this.S.c *= b, this.S.d *= b));
            this.i |= 1
        },
        j: ca
    });
    var bb = Ha.eB = {
        Ub: !0,
        Tb: ["i0", "i1", "i2"]
    };
    bb.i0 = {
        u: 0,
        H: "eB",
        toString: y
    };
    bb.i1 = {
        u: 1,
        H: "eB",
        toString: y
    };
    bb.i2 = {
        u: 2,
        H: "eB",
        toString: y
    };
    bb.xc = [bb.i0, bb.i1, bb.i2];
    ia.__name__ = "D1";
    ia.G = ba;
    ia.prototype = u(ba.prototype, {
        zb: function() {
            ba.prototype.zb.call(this);
            for (var a = this.node.Y, b; null != a;) {
                if (null != a.client) switch (a.client.type) {
                    case 7:
                    case 10:
                    case 12:
                        b = a.client, b.zb()
                }
                a = a.K
            }
            return this
        },
        o: function() {
            null != this.node && (aa.Jk(this), -1 !=
                this.Am && (gb.current.Bt(this.Am), this.Am = -1), ba.prototype.o.call(this), ia.ae--)
        },
        appendChild: function(a) {
            this.node.appendChild(a.node);
            return this
        },
        ih: function(a) {
            return this.node.ih(a).client
        },
        Vd: function(a) {
            a = this.node.Vd(a);
            return null == a ? null : a.client
        },
        Ww: function(a) {
            if (null == a) return null != this.Kb() && this.node.parent.nr(this.node), this;
            this.node.nr(a.node);
            return this
        },
        update: function(a) {
            ba.prototype.update.call(this, a);
            var b = this.node;
            if (null != b && 0 != (this.i & 1024))
                for (var c = b.Y; null != c;) b = c.K,
                    c = c.client, null != c && c.update(a), c = b
        },
        Ha: function(a) {
            var b = new H;
            b.b = b.a = Infinity;
            b.c = b.d = -Infinity;
            if (0 == this.node.wh) return b;
            var c = new P(32),
                d = new ob(32),
                e = this.node;
            d.I == d.s && d.M();
            d.f[d.I++] = e;
            for (var f; 0 < d.I;) {
                e = d.f[--d.I];
                if (256 == (e.i & 2304))
                    for (f = e, f = f.Y; null != f;) d.I == d.s && d.M(), d.f[d.I++] = f, f = f.K;
                if (null != e.client) switch (e.client.type) {
                    case 7:
                        e = e.client;
                        c.g == c.s && c.M();
                        c.f[c.g++] = e;
                        break;
                    case 12:
                        e = e.client, c.g == c.s && c.M(), c.f[c.g++] = e, 0 < (e.i & 512) && (e.i &= -513, e.i |= 1, e.i |= 2048)
                }
            }
            aa.Pd(this);
            null == a || aa.sl(this, a) || aa.Pd(a);
            b.b = 3E38;
            b.a = 3E38;
            b.c = -3E38;
            b.d = -3E38;
            d = c.f;
            e = 0;
            for (f = c.g; e < f;) {
                var g = e++;
                g = d[g];
                g.i |= 24576;
                g = g.Ha(a);
                g.b < b.b && (b.b = g.b);
                g.a < b.a && (b.a = g.a);
                g.c > b.c && (b.c = g.c);
                g.d > b.d && (b.d = g.d)
            }
            d = c.f;
            e = 0;
            for (f = c.g; e < f;) g = e++, g = d[g], 0 < (g.i & 2048) && (F.Aa(g, ca).i |= 513, g.i &= -2049);
            return b
        },
        Ne: function() {
            var a = this.Ha(this.Kb());
            return a.c - a.b
        },
        Me: function() {
            var a = this.Ha(this.Kb());
            return a.d - a.a
        },
        Uh: function(a) {
            return a
        },
        Vh: function(a) {
            return a
        },
        Nc: function() {
            var a = this.Ha(this);
            this.Ue =
                (a.c - a.b) / 2;
            this.yd = (a.d - a.a) / 2;
            this.i |= 1
        },
        j: ia
    });
    Cc.__name__ = "D3";
    Cc.G = hc;
    Cc.prototype = u(hc.prototype, {
        j: Cc
    });
    eb.__name__ = "D4";
    eb.tt = function(a) {
        for (var b = [], c = 1; 20 >= c;) {
            var d = c++;
            b.push(a + (10 > d ? "000" : 100 > d ? "00" : "0") + d)
        }
        return b
    };
    eb.wt = function(a, b) {
        for (var c = [], d = 0, e = b.length; d < e;) {
            var f = d++;
            c.push(new Ae(b[f], .03333333333333333))
        }
        return new Be(a, c)
    };
    eb.clone = function(a, b) {
        var c = a.se;
        if (null != c && 0 != c.Of) {
            var d = b.se = new eb(b);
            d.length = c.length;
            d.Of = c.Of;
            d.Se = c.Se;
            d.repeat = c.repeat;
            for (a = a.node.controllers; null !=
                a;) 14 == a.type && (c = new Cc, a.uf(c), c.bg = E(d, d.bg), c.cg = E(d, d.cg), b.node.ta(c), d.controller = c), a = a.next
        }
    };
    eb.prototype = {
        o: function() {
            null != this.controller && (this.controller.o(), this.controller = null);
            this.F = this.dm = null
        },
        play: function(a, b, c, d) {
            null == b && (b = !0);
            null != c && this.nx(c);
            return this.ow(a, 0, -1, b, d)
        },
        ow: function(a, b, c, d, e) {
            null == d && (d = !0);
            this.Of = !0;
            var f = this.fu(); - 2 == this.repeat ? (f.repeat = wa.i2, f.Bj = -1) : -1 == this.repeat ? (f.repeat = wa.i1, f.Bj = -1) : (f.repeat = wa.i0, f.Bj = this.repeat);
            f.play(a, b, c, d ?
                0 : this.Se);
            this.length = f.oc - f.Eb;
            this.dm = e;
            return this
        },
        nx: function(a) {
            this.repeat = a;
            return this
        },
        fu: function() {
            if (null == this.controller || 0 > this.controller.type) {
                var a = this.F.node,
                    b = a.St(14);
                null == b && (b = new Cc, a.ta(b));
                b.cg = E(this, this.cg);
                b.bg = E(this, this.bg);
                this.controller = b
            }
            return this.controller
        },
        cg: function(a, b, c) {
            this.Se = c;
            this.F.gc(a)
        },
        bg: function() {
            null != this.dm && this.dm();
            null != this.controller && this.controller.repeat != wa.i1 && (this.Of = !1, this.length = -1)
        },
        j: eb
    };
    db.__name__ = "D5";
    db.G = ba;
    db.prototype =
        u(ba.prototype, {
            o: function() {
                if (null != this.node) {
                    for (var a = F.Aa(this.node, Ka).Y; null != a;) {
                        var b = a.K;
                        a.o();
                        a = b
                    }
                    ba.prototype.o.call(this);
                    this.Hb = this.ra = this.Sd = this.Oa = null;
                    db.ae--
                }
            },
            re: function(a) {
                this.Oa = ea.get(a);
                this.Sd = this.Oa.kd.we;
                this.Pj = !0
            },
            ya: function(a) {
                this.Ib = this.Ib || this.ra.text != a;
                this.ra.text = a;
                return this
            },
            Ty: function() {
                return this.ra.size
            },
            Th: function(a) {
                this.Ib = this.Ib || this.ra.size != a;
                this.ra.size = a;
                return this
            },
            Km: function(a, b) {
                this.Ib = (this.Ib = this.Ib || this.ra.width != a) || this.ra.height !=
                    b;
                this.ra.width = a;
                this.ra.height = b;
                return this
            },
            Yw: function(a) {
                this.Ib = this.Ib || this.ra.align != a;
                this.ra.align = a;
                return this
            },
            Ls: function(a, b) {
                this.ra.size = b - a >> 1;
                this.ug.$a(this.Sd, this.ra, this.Hb);
                var c = this.ra.size;
                if (this.Hb.overflow) {
                    if (c < a) return;
                    c = this.pk(a, c - 1)
                } else {
                    if (c > b) return;
                    c = this.pk(c, b + 1)
                }
                c < a ? c = a : c > b && (c = b);
                this.ra.size = c;
                this.Ib = !0;
                this.ug.$a(this.Sd, this.ra, this.Hb)
            },
            yr: function(a) {
                null == a && (a = 4);
                this.ug.$a(this.Sd, this.ra, this.Hb);
                if (this.Hb.overflow) {
                    var b = this.ra.size;
                    b < a || (this.ra.size =
                        this.pk(a, b - 1), this.Ib = !0, this.ug.$a(this.Sd, this.ra, this.Hb))
                }
            },
            Ha: function(a) {
                this.zb();
                var b = this.Hb.R,
                    c = b.b,
                    d = b.a,
                    e = b.c,
                    f = b.d;
                b = new H;
                b.b = c;
                b.a = d;
                b.c = e;
                b.d = f;
                if (b.b > b.c || b.a > b.d) return b.b = 0, b.a = 0, b.c = 0, b.d = 0, b;
                if (a == this) return b;
                0 == (this.i & 16384) && (aa.Pd(this), null != a && 0 == aa.sl(this, a) && aa.Pd(a));
                a = null == a ? this.node.Ff() : a.node;
                return ma.oy(this.node, a, b)
            },
            Hg: function(a, b, c) {
                this.zb();
                if (!this.Hb.overflow) {
                    var d = this.Hb.R;
                    d.b > d.c || d.a > d.d || ba.prototype.Hg.call(this, a, b, c)
                }
            },
            update: function(a) {
                ba.prototype.update.call(this,
                    a);
                if (this.dl) {
                    for (var b = 0, c = F.Aa(this.node, Ka), d = c.Y, e; null != d;) {
                        if (0 < (d.i & 1))
                            if (e = d, e.Mi += a, 10 < e.Mi) {
                                e = d.K;
                                c.removeChild(d);
                                d.o();
                                d = e;
                                continue
                            } else ++b;
                        d = d.K
                    }
                    this.dl = 0 < b
                }
            },
            zb: function() {
                ba.prototype.zb.call(this);
                if (null == this.Oa || null == this.ra.text || !this.Ib && !this.Pj) return this;
                this.Ib = !1;
                var a = F.Aa(this.node, Ka);
                if (this.Pj) {
                    this.Pj = !1;
                    for (var b = a.Y, c; null != b;) c = b.K, a.removeChild(b), b.o(), b = c
                }
                this.ug.$a(this.Sd, this.ra, this.Hb);
                c = this.Hb.ti;
                for (var d = this.Hb.ho, e = a.Y, f = 0, g, h, k, l, r, p, m = 0, n = c.g; m <
                    n;) l = m++, b = c.f[l], g = l << 2, h = d.f[g], k = d.f[g + 1], l = d.f[g + 2], r = d.f[g + 3], p = String.fromCodePoint(b), null != e ? (g = e, g.name = p, g.Lm(jb.i0), a.dx(g, f++), e = e.K) : (g = new xd(p), p = (new Mb).re(this.Oa, this.Oa.kd), g.ja = p, a.Ln(g, f++)), p = g.local, p.translate.b = h, p.translate.a = k, p.m &= -2, p.m |= 32, h = g.local, h.scale.b = l, h.scale.a = r, h.m &= -14, h.m |= 32, p = g.ja, p.or(b);
                a.i |= 8;
                for (b = 0; null != e;) 100 > b++ ? (this.dl = !0, g = e, g.Mi = 0, e.Lm(jb.i1), e = e.K) : (c = e.K, a.removeChild(e), e.o(), e = c);
                return this
            },
            Ne: function() {
                var a = this.Ha(this.Kb());
                return a.c -
                    a.b
            },
            Me: function() {
                var a = this.Ha(this.Kb());
                return a.d - a.a
            },
            Uh: function() {
                throw n.B("unsupported operation");
            },
            Vh: function() {
                throw n.B("unsupported operation");
            },
            pk: function(a, b) {
                for (var c = a, d = -1, e = c + (b - c >> 1); this.ra.size = e, this.ug.$a(this.Sd, this.ra, this.Hb), this.Hb.overflow ? b = e : c = d = e, e = c + (b - c >> 1), e != c;);
                return 0 > d ? a : d
            },
            j: db
        });
    xd.__name__ = "D6";
    xd.G = nb;
    xd.prototype = u(nb.prototype, {
        j: xd
    });
    wd.__name__ = "D7";
    wd.__isInterface__ = !0;
    wd.prototype = {
        j: wd
    };
    se.__name__ = "D8";
    se.prototype = {
        j: se
    };
    re.__name__ = "D9";
    re.prototype = {
        j: re
    };
    vd.__name__ = "DA";
    vd.__interfaces__ = [wd];
    vd.prototype = {
        $a: function(a, b, c) {
            c.overflow = !1;
            var d = c.R;
            d.b = d.a = Infinity;
            d.c = d.d = -Infinity;
            var e = b.text,
                f = e.length;
            if (0 != f) {
                var g = c.ti;
                g.ec(f);
                g.g = 0;
                var h = c.ho;
                h.ec(f);
                h.g = 0;
                var k = a.io,
                    l = this.ti;
                l.g = 0;
                l.ec(f);
                for (var r = 0, p = f; r < p;) {
                    f = r++;
                    var m = A.tk(e, f);
                    l.f[l.g++] = m
                }
                if (-1 < b.Pp && (r = db.az.v[b.Pp], null != r)) {
                    f = 0;
                    e = l.g - 1;
                    for (var n; f < e;) {
                        p = l.f[f];
                        n = l.f[f + 1];
                        var v = n << 16 | p;
                        m = r.bc[73856093 * v & r.Vc];
                        if (-1 == m) m = !1;
                        else {
                            var t = r.f;
                            if (t[m] == v) m = !0;
                            else {
                                var u = !1;
                                for (m = t[m + 2]; - 1 != m;) {
                                    if (t[m] == v) {
                                        u = !0;
                                        break
                                    }
                                    m = t[m + 2]
                                }
                                m = u
                            }
                        }
                        if (m) {
                            p |= n << 16;
                            m = r.bc[73856093 * p & r.Vc];
                            if (-1 == m) m = -2147483648;
                            else if (n = r.f, n[m] == p) m = n[m + 1];
                            else {
                                u = -2147483648;
                                for (m = n[m + 2]; - 1 != m;) {
                                    if (n[m] == p) {
                                        u = n[m + 1];
                                        break
                                    }
                                    m = n[m + 2]
                                }
                                m = u
                            }
                            l.f[f] = m;
                            l.Uq(f + 1);
                            --e
                        }++f
                    }
                }
                f = this.Ce;
                f.g = 0;
                this.Ce.ec(l.g);
                r = 0;
                for (p = l.g; r < p;) {
                    f = r++;
                    e = l.f[f];
                    f = k.cb;
                    m = f.bc[73856093 * e & f.Vc];
                    if (-1 == m) m = !1;
                    else if (t = f.f, t[m] == e) m = !0;
                    else {
                        u = !1;
                        for (m = t[m + 2]; - 1 != m;) {
                            if (t[m] == e) {
                                u = !0;
                                break
                            }
                            m = t[m + 2]
                        }
                        m = u
                    }
                    if (m) {
                        f = this.Ce;
                        u = k.cb;
                        m = u.bc[73856093 *
                            e & u.Vc];
                        if (-1 == m) e = -2147483648;
                        else if (n = u.f, n[m] == e) e = n[m + 1];
                        else {
                            u = -2147483648;
                            for (m = n[m + 2]; - 1 != m;) {
                                if (n[m] == e) {
                                    u = n[m + 1];
                                    break
                                }
                                m = n[m + 2]
                            }
                            e = u
                        }
                        m = -2147483648 == e ? null : k.Uf[e];
                        f.f[f.g++] = m
                    }
                }
                if (!this.Ce.Lf()) {
                    l = b.width;
                    r = b.Vi;
                    k = b.align;
                    p = a.Vi;
                    n = b.size / a.Yq;
                    var x = b.ny * n;
                    if (1 > b.height / (a.lineHeight * n)) c.overflow = !0;
                    else {
                        var w = this.Ce.f[0],
                            y = -(w.offsetX * n);
                        e = a.padding;
                        a = e[0] * n;
                        var z = e[1] * n,
                            C = e[2] * n,
                            E = e[3] * n;
                        f = 0;
                        e = this.Ce.g;
                        m = 0;
                        for (u = 0; f < e;) {
                            w = this.Ce.f[f++];
                            var B = y + w.offsetX * n;
                            var D = w.offsetY * n;
                            var F = w.Vj *
                                n;
                            var G = w.v * n;
                            var H = B + F - z;
                            if (r) {
                                v = w.code << 16 | m;
                                m = p.bc[73856093 * v & p.Vc];
                                if (-1 == m) u = -2147483648;
                                else if (t = p.f, t[m] == v) u = t[m + 1];
                                else
                                    for (u = -2147483648, m = t[m + 2]; - 1 != m;) {
                                        if (t[m] == v) {
                                            u = t[m + 1];
                                            break
                                        }
                                        m = t[m + 2]
                                    } - 2147483648 == u && (u = 0);
                                u *= n;
                                m = w.code;
                                H += u
                            }
                            if (H > l) {
                                c.overflow = !0;
                                return
                            }
                            B += u;
                            g.f[g.g++] = w.code;
                            h.f[h.g++] = B;
                            h.f[h.g++] = D;
                            h.f[h.g++] = F;
                            h.f[h.g++] = G;
                            32 < w.code && (t = D + a, v = B + E, v < d.b ? d.b = v : v > d.c && (d.c = v), t < d.a ? d.a = t : t > d.d && (d.d = t), t = D + G - C, v = B + F - z, v < d.b ? d.b = v : v > d.c && (d.c = v), t < d.a ? d.a = t : t > d.d && (d.d = t));
                            t = w.On;
                            0 < b.fo && (t = b.fo);
                            y += t * n + u + x
                        }
                        if (-1 != k) {
                            c = l - d.c;
                            0 == k && (c /= 2);
                            r = 0;
                            for (p = e; r < p;) f = r++, g = f << 2, h.f[g] += c;
                            c = d.b + c;
                            D = d.c - d.b;
                            d.b = c;
                            d.c = c + D
                        }
                        if (b.ct)
                            for (r = 0, p = e; r < p;) f = r++, g = f << 2, h.f[g + 1] /= 2
                    }
                }
            }
        },
        j: vd
    };
    aa.__name__ = "DB";
    aa.update = function(a, b) {
        var c = aa.Sm;
        c.clear();
        c.I == c.s && c.M();
        for (c.f[c.I++] = a; 0 < c.I;)
            if (a = c.f[--c.I], null == a.client) {
                if (0 == (a.i & 1024))
                    for (a = a.Y; null != a;) c.I == c.s && c.M(), c.f[c.I++] = a, a = a.K
            } else switch (a.client.type) {
                case 10:
                    var d = a.client;
                    var e = d.i & 1024;
                    d.i &= -1025;
                    d.update(b);
                    d.i |= e;
                    if (0 < (d.i &
                            1024))
                        for (a = a.Y; null != a;) c.I == c.s && c.M(), c.f[c.I++] = a, a = a.K;
                    break;
                case 7:
                case 12:
                    d = a.client, d.update(b)
            }
    };
    aa.zb = function(a) {
        var b = aa.Sm,
            c = null,
            d = null;
        b.clear();
        b.I == b.s && b.M();
        for (b.f[b.I++] = a; 0 < b.I;) {
            a = b.f[--b.I];
            0 < (a.i & 256) && (c = a, d = c.Y);
            var e = a.client;
            if (null != e) switch (e.type) {
                case 10:
                    c.Y = null;
                    e.zb();
                    c.Y = d;
                    break;
                case 7:
                case 12:
                    e.zb()
            }
            if (0 < (a.i & 256))
                for (; null != d;) b.I == b.s && b.M(), b.f[b.I++] = d, d = d.K
        }
    };
    aa.Jk = function(a, b) {
        null == b && (b = !1);
        if (10 == a.type)
            for (var c = F.Aa(a, ia).node.Y, d; null != c;) d = c.K, aa.Jk(c.client, !0), c = d;
        b && a.o()
    };
    aa.sl = function(a, b) {
        for (a = a.Kb(); null != a;) {
            if (a == b) return !0;
            a = a.Kb()
        }
        return !1
    };
    aa.Pd = function(a) {
        var b = a.node,
            c = aa.Sm,
            d = a.node;
        for (c.clear(); null != d;) {
            0 < (d.i & 8) && (b = d);
            if (null != d.client) {
                var e = d.client;
                0 < (e.i & 1) && (e.zb(), b = d)
            }
            c.I == c.s && c.M();
            c.f[c.I++] = d;
            d = d.parent
        }
        a.zb();
        b.yg(!0, !1)
    };
    gc.__name__ = "DC";
    gc.clone = function(a, b) {
        if (null != a.Wc && 0 != a.Wc.Gd) {
            var c = b.Wc = new gc(b);
            c.Gd = a.Wc.Gd;
            for (a = a.node.controllers; null != a;) {
                if (9 == a.type) {
                    var d = new Gc;
                    a.uf(d);
                    d.tc = E(c, c.tc);
                    d.Jc = E(c, c.Jc);
                    b.node.ta(d)
                }
                a = a.next
            }
        }
    };
    gc.prototype = {
        o: function() {
            this.Nx();
            this.Bf = this.F = null
        },
        y: function(a, b, c, d, e) {
            this.xg(1, a, b, c, d, e);
            return this
        },
        fn: function(a, b, c, d, e) {
            this.xg(4, a, b, c, d, e);
            return this
        },
        Nx: function() {
            for (var a = this.F.node.controllers; null != a;) {
                var b = a.next;
                9 == a.type && a.stop();
                a = b
            }
            this.Gd = 0
        },
        xg: function(a, b, c, d, e, f) {
            switch (a) {
                case 0:
                    var g = this.F.xa;
                    break;
                case 1:
                    g = this.F.ua;
                    break;
                case 2:
                    g = this.F.Ca;
                    break;
                case 3:
                    g = this.F.mb;
                    break;
                case 4:
                    g = this.F.Ca;
                    break;
                case 5:
                    g = this.F.Hc;
                    break;
                case 6:
                    g = this.F.Gc
            }
            var h =
                this.Fu(a, c);
            h.xg(a, g, b, c, null == d ? da.Qp() : d);
            h.repeat = null == e ? wa.i0 : e;
            null == this.Bf && (this.Bf = []);
            this.Bf[a] = f;
            this.Gd |= 1 << a;
            return h
        },
        Fu: function(a) {
            var b = this.F.node.controllers;
            if (null != b)
                if (0 < (this.Gd & 1 << a))
                    for (; null != b;) {
                        if (9 == b.type) {
                            var c = b;
                            if (c.key == a) return c.Jc = E(this, this.Jc), c.tc = E(this, this.tc), c
                        }
                        b = b.next
                    } else
                        for (; null != b;) {
                            if (9 == b.type && !b.Fc) return c = b, c.Jc = E(this, this.Jc), c.tc = E(this, this.tc), c;
                            b = b.next
                        }
                c = new Gc;
            c.Jc = E(this, this.Jc);
            c.tc = E(this, this.tc);
            this.F.node.ta(c);
            return c
        },
        tc: function(a, b) {
            var c = this.F;
            switch (a) {
                case 0:
                    c.ba(b);
                    break;
                case 1:
                    c.ga(b);
                    break;
                case 2:
                    c.Uh(b);
                    break;
                case 3:
                    c.Vh(b);
                    break;
                case 4:
                    c.ib(b);
                    break;
                case 5:
                    c.Jj(b);
                    break;
                case 6:
                    c.qa(b)
            }
        },
        Jc: function(a) {
            this.Gd &= ~(1 << a);
            if (null != this.Bf[a]) {
                var b = this.Bf[a];
                this.Bf[a] = null;
                b()
            }
        },
        j: gc
    };
    var ee = {
        fy: function(a) {
            return a
        },
        at: function(a, b) {
            var c = window.document.createElement("img");
            c.src = a.toDataURL("image/png");
            c.onload = function() {
                c.onload = null;
                ee.Wu(c, b)
            }
        },
        Wu: function(a, b) {
            if (null == window.rt) b(a);
            else try {
                window.rt(a).then(function(a) {
                        b(a)
                    },
                    function() {
                        b(a)
                    })
            } catch (c) {
                b(a)
            }
        },
        gw: function(a, b, c, d) {
            var e = window.document.createElement("canvas");
            e.width = b;
            e.height = c;
            e.getContext("2d", null).drawImage(a, 0, 0);
            ee.at(e, d)
        },
        Cc: function(a) {
            a instanceof ImageBitmap ? a.close() : a instanceof HTMLImageElement && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
        }
    };
    qe.__name__ = "DD";
    qe.prototype = {
        hx: function(a, b) {
            var c = this;
            this.Za = a;
            var d = a.width | 0;
            a = a.height | 0;
            var e = this.J;
            e.b = d;
            e.a = a;
            this.Ui = 0 != d && 0 == (d & d - 1) && 0 != a &&
                0 == (a & a - 1);
            this.Pf = !0;
            !b || this.Ui || this.Nf || (b = d, --b, b |= b >> 1, b |= b >> 2, b |= b >> 4, b |= b >> 8, b |= b >> 16, ++b, d = b, b = a, --b, b |= b >> 1, b |= b >> 2, b |= b >> 4, b |= b >> 8, b |= b >> 16, ++b, a = b, b = e = new v, b.b = d, b.a = a, this.je = b, this.Nf = !0, this.Pf = !1, ee.gw(this.Za, d, a, function(a) {
                c.Za = a;
                c.Pf = !0
            }))
        },
        Zw: function(a) {
            this.kd = new pe(this, a);
            return this
        },
        o: function() {
            if (!this.pv && this.Nf && !this.qv) try {
                ee.Cc(this.Za)
            } catch (a) {}
            this.kd = this.je = this.J = this.Za = null
        },
        j: qe
    };
    ea.__name__ = "DE";
    ea.get = function(a) {
        return ea.Xh.v[a]
    };
    ea.nc = function(a,
        b) {
        a = ea.Xh.v[a];
        if (null == a || null == a.kd && null != b) return null;
        if (null != b) {
            b = a.kd.bj.v[b];
            if (null == b) return null;
            var c = b.J
        } else c = a.J;
        b = c.b;
        a = c.a;
        c = new v;
        c.b = b;
        c.a = a;
        return c
    };
    ea.Ab = function(a) {
        return ea.Xh.v.hasOwnProperty(a)
    };
    ea.Mw = function(a, b) {
        ea.Xh.v[a] = b;
        b.id = a;
        ea.Hr++
    };
    ea.xy = function(a) {
        var b = ea.get(a);
        null != b && (ea.Xh.remove(a), b.o(), ea.Hr--)
    };
    pe.__name__ = "DF";
    pe.prototype = {
        j: pe
    };
    ud.__name__ = "E0";
    ud.prototype = {
        j: ud
    };
    td.__name__ = "E1";
    td.prototype = {
        j: td
    };
    sd.__name__ = "E2";
    sd.prototype = {
        j: sd
    };
    Ac.__name__ =
        "E3";
    Ac.__isInterface__ = !0;
    Ac.prototype = {
        j: Ac
    };
    rd.__name__ = "E4";
    rd.__interfaces__ = [Ac];
    rd.prototype = {
        Po: function() {
            var a = new td,
                b = new me(this.Jv),
                c = new ne;
            c.Yq = b.info.size;
            c.lineHeight = b.Td.lineHeight;
            c.Be = b.Td.Be;
            c.ez = b.Td.Dm;
            c.dz = b.Td.Cm;
            c.padding[0] = b.info.padding.kn;
            c.padding[1] = b.info.padding.right;
            c.padding[2] = b.info.padding.Xb;
            c.padding[3] = b.info.padding.left;
            a.we = c;
            for (var d = 0, e = b.ui; d < e.length;) {
                var f = e[d];
                ++d;
                var g = f.id,
                    h = new oe;
                h.code = g;
                h.x = f.x;
                h.y = f.y;
                h.offsetX = f.yn;
                h.offsetY = f.zn;
                h.On =
                    f.wn;
                h.Vj = f.width;
                h.v = f.height;
                c.io.set(h.code, h); - 1 != g && (f = new sd, a.frames.push(f), f.id = g, f.name = String.fromCodePoint(g), f.oa.b = h.x, f.oa.a = h.y, f.oa.c = h.Vj, f.oa.d = h.v, f.J.b = h.Vj, f.J.a = h.v)
            }
            d = 0;
            for (e = b.Wi; d < e.length;) {
                g = e[d];
                ++d;
                b = c.Vi;
                var k = g.Fm << 16 | g.first,
                    l = g.hk;
                b.g == b.s && b.M();
                g = b.f;
                f = b.bc;
                h = 3 * b.bb;
                b.bb = b.wb[b.bb];
                g[h] = k;
                g[h + 1] = l;
                l = 73856093 * k & b.Vc;
                k = f[l];
                if (-1 == k) f[l] = h;
                else {
                    for (f = g[k + 2]; - 1 != f;) k = f, f = g[f + 2];
                    g[k + 2] = h
                }
                b.g++
            }
            return a
        },
        j: rd
    };
    oe.__name__ = "E5";
    oe.prototype = {
        j: oe
    };
    ne.__name__ = "E6";
    ne.prototype = {
        j: ne
    };
    me.__name__ = "E7";
    me.prototype = {
        hw: function(a) {
            a = new Sb(a);
            var b = a.N(),
                c = a.N(),
                d = a.N();
            if (66 != b || 77 != c || 70 != d) throw n.B("not a BMF file");
            if (3 != a.N()) throw n.B("invalid version (must be 3)");
            a.N();
            c = a.uc();
            b = a.Qa();
            a.N();
            a.N();
            a.bd();
            a.N();
            d = a.N();
            var e = a.N(),
                f = a.N(),
                g = a.N();
            a.N();
            a.N();
            a.N();
            a.yj(c - 14);
            this.info = {
                size: 0 > b ? -b : b,
                padding: {
                    kn: d,
                    right: e,
                    Xb: f,
                    left: g
                }
            };
            a.N();
            a.uc();
            b = a.bd();
            c = a.bd();
            d = a.bd();
            e = a.bd();
            a.bd();
            a.N();
            a.N();
            a.N();
            a.N();
            a.N();
            this.Td = {
                lineHeight: b,
                Be: c,
                Dm: d,
                Cm: e
            };
            a.N();
            c = a.uc();
            d = a.gb;
            a.Rq(0);
            b = a.gb;
            b -= d;
            for (c -= b; 0 < c;) a.Rq(0), c -= b;
            a.N();
            c = a.uc();
            b = 0;
            for (c = c / 20 | 0; b < c;) {
                b++;
                d = a.uc();
                e = a.bd();
                f = a.bd();
                g = a.bd();
                var h = a.bd(),
                    k = a.Qa(),
                    l = a.Qa(),
                    r = a.Qa();
                a.N();
                a.N();
                this.ui.push({
                    id: d,
                    x: e,
                    y: f,
                    width: g,
                    height: h,
                    yn: k,
                    zn: l,
                    wn: r
                })
            }
            if (a.gb != a.an)
                for (a.N(), a.uc(); a.gb < a.an;) b = a.uc(), c = a.uc(), d = a.Qa(), this.Wi.push({
                    first: b,
                    Fm: c,
                    hk: d
                })
        },
        jw: function(a) {
            var b = x.parse(a).Wt();
            if (b.nodeType != x.Document && b.nodeType != x.Element) throw n.B("Invalid nodeType " + (null == b.nodeType ? "null" : T.toString(b.nodeType)));
            a = b;
            var c = [];
            for (b = Cb(Ca.resolve(Xb.resolve(a, "info"), "padding").split(",")); b.P();) {
                var d = b.next();
                c.push(z.parseInt(d))
            }
            c = W.Ig(c);
            b = z.parseInt(Ca.resolve(Xb.resolve(a, "info"), "size"));
            this.info = {
                size: 0 > b ? -b : b,
                padding: {
                    kn: c[0],
                    right: c[1],
                    Xb: c[2],
                    left: c[3]
                }
            };
            this.Td = {
                lineHeight: z.parseInt(Ca.resolve(Xb.resolve(a, "common"), "lineHeight")),
                Be: z.parseInt(Ca.resolve(Xb.resolve(a, "common"), "base")),
                Dm: z.parseInt(Ca.resolve(Xb.resolve(a, "common"), "scaleW")),
                Cm: z.parseInt(Ca.resolve(Xb.resolve(a, "common"),
                    "scaleH"))
            };
            c = 0;
            for (b = nf.resolve(Xb.resolve(a, "chars"), "char"); c < b.length;) d = b[c], ++c, this.ui.push({
                id: z.parseInt(Ca.resolve(d, "id")),
                x: z.parseInt(Ca.resolve(d, "x")),
                y: z.parseInt(Ca.resolve(d, "y")),
                width: z.parseInt(Ca.resolve(d, "width")),
                height: z.parseInt(Ca.resolve(d, "height")),
                yn: z.parseInt(Ca.resolve(d, "xoffset")),
                zn: z.parseInt(Ca.resolve(d, "yoffset")),
                wn: z.parseInt(Ca.resolve(d, "xadvance"))
            });
            if (rf.resolve(a, "kernings"))
                for (c = 0, b = nf.resolve(Xb.resolve(a, "kernings"), "kerning"); c < b.length;) d = b[c],
                    ++c, this.Wi.push({
                        first: z.parseInt(Ca.resolve(d, "first")),
                        Fm: z.parseInt(Ca.resolve(d, "second")),
                        hk: z.parseInt(Ca.resolve(d, "amount"))
                    })
        },
        iw: function(a) {
            a = (new M("\r\n", "g")).match(a) ? a.split("\r\n") : a.split("\n");
            var b = 0,
                c = new M('^info face=".*?" size=(-?\\d+).*?padding="(\\d+,\\d+,\\d+,\\d+)"', "");
            c.match(a[b++]);
            for (var d = [], e = Cb(c.Ja(2).split(",")); e.P();) {
                var f = e.next();
                d.push(z.parseInt(f))
            }
            d = W.Ig(d);
            e = z.parseInt(c.Ja(1));
            this.info = {
                size: 0 > e ? -e : e,
                padding: {
                    kn: d[0],
                    right: d[1],
                    Xb: d[2],
                    left: d[3]
                }
            };
            c = new M("^common lineHeight=(\\d+) base=(\\d+) scaleW=(\\d+) scaleH=(\\d+)", "");
            c.match(a[b++]);
            this.Td = {
                lineHeight: z.parseInt(c.Ja(1)),
                Be: z.parseInt(c.Ja(2)),
                Dm: z.parseInt(c.Ja(3)),
                Cm: z.parseInt(c.Ja(4))
            };
            c = new M("chars count=(\\d+)", "");
            e = new M("^char id=(\\d+)\\s+x=(\\d+)\\s+y=(\\d+)\\s+width=(\\d+)\\s+height=(\\d+)\\s+xoffset=(-?\\d+)\\s+yoffset=(-?\\d+)\\s+xadvance=(\\d+)", "");
            d = new M("kernings count=(\\d+)", "");
            f = new M("kerning first=(\\d+)\\s+second=(\\d+)\\s+amount=(-?\\d+)", "");
            for (var g =
                    0, h = 0, k = 0, l = 0; b < a.length;) {
                var r = a[b++];
                0 == h ? c.match(r) && (h = z.parseInt(c.Ja(1))) : g < h ? (e.match(r), this.ui.push({
                    id: z.parseInt(e.Ja(1)),
                    x: z.parseInt(e.Ja(2)),
                    y: z.parseInt(e.Ja(3)),
                    width: z.parseInt(e.Ja(4)),
                    height: z.parseInt(e.Ja(5)),
                    yn: z.parseInt(e.Ja(6)),
                    zn: z.parseInt(e.Ja(7)),
                    wn: z.parseInt(e.Ja(8))
                }), ++g) : 0 == l ? d.match(r) && (l = z.parseInt(d.Ja(1))) : k < l && (f.match(r), this.Wi.push({
                    first: z.parseInt(f.Ja(1)),
                    Fm: z.parseInt(f.Ja(2)),
                    hk: z.parseInt(f.Ja(3))
                }), ++k)
            }
        },
        j: me
    };
    ec.__name__ = "E8";
    ec.__interfaces__ =
        [Ac];
    ec.prototype = {
        Po: function() {
            var a = new td,
                b = JSON.parse(this.json),
                c = N.$(b, "meta");
            null != c && (a.scale = N.$(c, "scale"));
            c = 0;
            b = N.$(b, "frames");
            for (var d = 0; d < b.length;) {
                var e = b[d];
                ++d;
                var f = new sd;
                a.frames.push(f);
                f.id = c++;
                f.name = N.$(e, "filename");
                var g = N.$(e, "frame");
                f.oa.b = N.$(g, "x");
                f.oa.a = N.$(g, "y");
                f.oa.c = N.$(g, "w");
                f.oa.d = N.$(g, "h");
                Object.prototype.hasOwnProperty.call(e, "trimmed") ? f.dn = N.$(e, "trimmed") : f.dn = !1;
                Object.prototype.hasOwnProperty.call(e, "sourceSize") ? (g = N.$(e, "sourceSize"), f.J.b =
                    N.$(g, "w"), f.J.a = N.$(g, "h")) : (f.J.b = f.oa.c, f.J.a = f.oa.d);
                Object.prototype.hasOwnProperty.call(e, "spriteSourceSize") ? (g = N.$(e, "spriteSourceSize"), f.ve.b = N.$(g, "x"), f.ve.a = N.$(g, "y")) : (f.ve.b = 0, f.ve.a = 0)
            }
            return a
        },
        j: ec
    };
    cf.__name__ = "E9";
    cf.wy = function(a) {
        function b() {
            var a = c.N(),
                b = {},
                d = {};
            b.frame = d;
            d.x = 0 < (a & 1) ? c.N() : c.Qa();
            d.y = 0 < (a & 2) ? c.N() : c.Qa();
            d.w = 0 < (a & 4) ? c.N() : c.Qa();
            d.h = 0 < (a & 8) ? c.N() : c.Qa();
            d = {};
            b.sourceSize = d;
            d.w = 0 < (a & 16) ? c.N() : c.Qa();
            d.h = 0 < (a & 32) ? c.N() : c.Qa();
            d = {};
            b.spriteSourceSize = d;
            d.x = 0 <
                (a & 64) ? c.N() : c.Qa();
            d.y = 0 < (a & 128) ? c.N() : c.Qa();
            b.trimmed = 1 == c.N();
            return b
        }
        var c = new Sb(a);
        a = c.N();
        var d = c.N(),
            e = c.N();
        if ("TPJ" != String.fromCodePoint(a) + String.fromCodePoint(d) + String.fromCodePoint(e)) throw n.B("invalid tp json array file");
        a = [];
        e = {};
        d = {};
        e.size = d;
        d.w = c.Qa();
        d.h = c.Qa();
        e.scale = c.Ew();
        d = {};
        d.frames = a;
        d.meta = e;
        var f = c.Qa();
        for (e = 0; e < f;) {
            e++;
            var g = c.yj(c.Qa()),
                h = b();
            h.filename = g;
            a.push(h)
        }
        f = c.Qa();
        for (e = 0; e < f;) {
            e++;
            h = c.Qa();
            g = c.yj(c.Qa());
            for (var k, l = 0, r = h; l < r;) {
                var p = l++;
                h = b();
                k = "" +
                    p;
                1E3 > p && (k = "0" + k);
                100 > p && (k = "0" + k);
                10 > p && (k = "0" + k);
                h.filename = g + "/" + k;
                a.push(h)
            }
        }
        return JSON.stringify(d)
    };
    tb.__name__ = "EA";
    tb.prototype = {
        get: function(a) {
            return ra.get(this.Sc, a)
        },
        Ab: function(a) {
            return ra.Js(this.Sc, a)
        },
        j: tb
    };
    le.__name__ = "EB";
    le.prototype = {
        j: le
    };
    O.__name__ = "EC";
    O.Ff = function() {
        null == O.root && (O.root = new ia("scene"), new ia("bg", O.root), new ia("fg", O.root));
        return O.root
    };
    O.Bu = function(a) {
        var b = Object.create(a.prototype);
        b.ac = new tb(null, null);
        a = [];
        var c = 0;
        for (b = b.Yd(); c < b.length;) {
            var d =
                b[c];
            ++c;
            l.Wm(d) && a.push(d)
        }
        return a
    };
    O.G = Jb;
    O.prototype = u(Jb.prototype, {
        L: function() {
            Jb.prototype.L.call(this);
            0 != this.state && (this.lb(7), null != this.canvas && (aa.Jk(this.canvas, !0), this.canvas = this.content = this.Jg = this.sd = null), this.ac = null);
            this.remove()
        },
        ic: function(a, b, c) {
            this.Lx(a, c, b) || Pa.Ia().ic(this, a, b, c)
        },
        finish: function(a) {
            Pa.Ia().finish(this, a)
        },
        nb: function() {
            this.lb(1);
            this.canvas = new ia(this.name);
            this.Jg = new ia("bg", this.canvas);
            this.Jg.na(!1);
            this.content = new ia("content", this.canvas);
            this.content.na(!1);
            this.sd = new ia("fg", this.canvas);
            this.sd.na(!1)
        },
        wq: function() {
            this.lb(2);
            this.show();
            this.tn = 0
        },
        gm: function() {
            this.lb(4);
            this.show()
        },
        ob: function() {
            this.lb(3);
            this.Mh = !1;
            if (this.ac.Ab("loaderInfo")) {
                this.Mh = !0;
                var a = this.ac.get("loaderInfo");
                a.loaded && this.ic(a.Jx, a.Ix, a.Kx)
            }
        },
        sc: function() {
            this.lb(5)
        },
        Xe: function() {
            this.lb(6);
            this.Tu()
        },
        lb: function(a) {
            this.state = a
        },
        show: function() {
            null == this.canvas.Kb() && (this.parent == Pa.Ia() ? F.Aa(O.Ff().Vd("fg"), ia).appendChild(this.canvas) :
                F.Aa(this.parent, O).canvas.appendChild(this.canvas));
            this.content.na(this.Jg.na(this.sd.na(!0)))
        },
        Tu: function() {
            var a = this.mu();
            null != a && a.Mf() ? this.content.na(this.Jg.na(this.sd.na(!1))) : this.canvas.remove()
        },
        Yd: function() {
            return []
        },
        ud: function() {
            if (null != O.be) return O.be;
            O.be = new Qb(4, function(a) {
                var b = l.td(a.url);
                0 > b || l.setData(b, a.data, a.ee)
            }, "v=2.1.8");
            O.be.tag = "scene";
            return O.be
        },
        Lx: function(a, b, c) {
            var d = Object.create(a.prototype);
            d.ac = new tb(this, b);
            var e = d.ru();
            d.ac = null;
            return 0 < e.length ?
                (this.ic(d.Xo(), !0, ra.Df(["loaderInfo", new le(a, b, c, e)])), !0) : !1
        },
        ru: function() {
            for (var a = [], b = 0, c = this.Yd(); b < c.length;) {
                var d = c[b];
                ++b;
                l.rl(d) && null == l.Je() || l.Jf(d) || a.push(d)
            }
            return a
        },
        Mf: function() {
            return !0
        },
        $y: function() {
            return !1
        },
        Zy: function() {
            return !1
        },
        Xo: function() {
            return kb
        },
        mu: function() {
            for (var a = [this], b = null; 0 < a.length;)
                for (var c = a.pop().firstChild; null != c;) {
                    if (c instanceof O) {
                        b = c;
                        a.push(b);
                        break
                    }
                    c = c.K
                }
            return b
        },
        j: O
    });
    kb.__name__ = "ED";
    kb.G = O;
    kb.prototype = u(O.prototype, {
        ob: function() {
            var a =
                this;
            O.prototype.ob.call(this);
            this.loaded = !1;
            this.Al = ra.get(this.ac.Sc, "loaderInfo");
            this.$f = 0;
            for (var b = this.ud(), c = 0, d = this.Al.lc; c < d.length;) {
                var e = d[c];
                ++c;
                if (!l.rl(e) || null != l.Je()) {
                    var f = l.Ec(e);
                    if (b.Si(f) || b.load(f)) b.Lq(f), this.$f++, l.ag(e, function() {
                        a.$f--;
                        a.dg()
                    })
                }
            }
        },
        update: function(a) {
            O.prototype.update.call(this, a);
            !this.loaded && (this.loaded = this.ph()) && (this.Al.loaded = !0, this.finish(ra.set({}, "loaderInfo", this.Al)))
        },
        ph: function() {
            return 0 == this.$f
        },
        dg: function() {},
        j: kb
    });
    Pa.__name__ =
        "EE";
    Pa.__interfaces__ = [df];
    Pa.Ia = function() {
        null == Pa.Fg && new Pa;
        return Pa.Fg
    };
    Pa.G = B;
    Pa.prototype = u(B.prototype, {
        Mx: function(a, b) {
            qd.Xk(a);
            this.ic(null, a, !1, b)
        },
        L: function() {
            for (var a = 0, b = this.Iq(this.firstChild); a < b.length;) {
                var c = b[a];
                ++a;
                switch (c.state) {
                    case 3:
                        c.sc();
                        c.Xe();
                        break;
                    case 5:
                        c.Xe()
                }
            }
            B.prototype.L.call(this);
            this.vb = this.root = null;
            this.dr.o()
        },
        Iq: function(a, b) {
            null == b && (b = []);
            for (var c = a.firstChild; null != c;) c instanceof O && this.Iq(c, b), c = c.K;
            b.push(a);
            return b
        },
        ic: function(a, b, c, d) {
            var e = !1,
                f = W.filter(this.dr, function(a) {
                    return F.Wd(a) == b
                })[0];
            null == f && (f = ce.st(b), e = !0);
            f.ac = new tb(a, d);
            if (!e && null != f.parent && f.parent instanceof O) e = f.Ro(), this.vb = f, this.pop(e, f);
            else if (c) {
                var g = this.vb;
                g.sc();
                g.W(f);
                e && f.nb();
                this.vb = f;
                var h = E(this, this.push);
                c = f;
                f.aw = function() {
                    h(g, c)
                };
                f.aw()
            } else if (null != this.vb) {
                for (a = this.vb; a != this;) d = F.Aa(a, O), 3 == d.state && d.sc(), a = a.parent;
                a = this.vb;
                this.vb = f;
                this.W(f);
                e && f.nb();
                this.uk(a, f)
            } else this.vb = this.root = f, this.W(f), e && f.nb(), this.push(null, f)
        },
        push: function(a, b) {
            b.wq();
            this.Dk().push(a, b)
        },
        pop: function(a, b) {
            this.Dk().pop(a, b)
        },
        uk: function(a, b) {
            this.Dk().uk(a, b)
        },
        fw: function(a, b, c) {
            switch (c) {
                case 0:
                    if (b.Mf() && null != a)
                        for (; a != this;) c = a.parent, a = F.Aa(a, O), 5 == a.state && a.Xe(), a = c;
                    b.ob();
                    break;
                case 1:
                    c = 0;
                    for (a = this.hu(a); c < a.length;) {
                        var d = a[c];
                        ++c;
                        d.Xe();
                        d.remove();
                        d.L()
                    }
                    switch (b.state) {
                        case 2:
                        case 4:
                        case 5:
                            b.ob();
                            break;
                        case 6:
                            b.gm(), b.ob()
                    }
                    break;
                case 2:
                    for (; a != this;) c = a.parent, a = F.Aa(a, O), 5 == a.state && a.Xe(), a.remove(), a.L(), a = c;
                    b.ob()
            }
        },
        finish: function(a,
            b) {
            if (1 == a.state) a.L();
            else if (3 == a.state && a.sc(), null != a.parent && a.parent != this) {
                this.vb = a.parent;
                this.vb.ac = new tb(a, b);
                if (6 == this.vb.state && (this.vb.gm(), !this.vb.Mf())) {
                    var c = this.vb.parent;
                    for (F.Wd(c);;) {
                        c.ac = new tb(a, b);
                        c.gm();
                        c.ob();
                        c.sc();
                        if (c.Mf()) break;
                        c = c.parent;
                        if (c.parent == this) break
                    }
                }
                this.pop(a, this.vb)
            } else this.root = this.vb = null, a.sc(), this.pop(a, null)
        },
        Dk: function() {
            return new ta(this)
        },
        hu: function(a) {
            for (var b = [], c = a; null != c;) {
                b.push(c);
                a = null;
                for (c = c.firstChild; null != c;) {
                    if (c instanceof O) {
                        a = c;
                        break
                    }
                    c = c.K
                }
                if (null == a) break;
                c = a
            }
            b.reverse();
            return b
        },
        j: Pa
    });
    Ib.__name__ = "EF";
    Ib.__isInterface__ = !0;
    Ib.prototype = {
        j: Ib
    };
    pd.__name__ = "F0";
    pd.__interfaces__ = [Ib];
    pd.prototype = {
        Tc: function() {
            return 0
        },
        yh: function() {},
        oj: function() {},
        mj: function() {},
        j: pd
    };
    ta.__name__ = "F1";
    ta.cf = function(a, b, c) {
        ta.zm.v["" + (null == a ? "*" : a.__name__) + "-" + (null == b ? "*" : b.__name__)] = c
    };
    ta.Lw = function(a) {
        ta.cf(a, null, null);
        ta.cf(null, a, null)
    };
    ta.prototype = {
        push: function(a, b) {
            this.lk(a, b, 0)
        },
        pop: function(a, b) {
            this.lk(a,
                b, 1)
        },
        uk: function(a, b) {
            b.wq();
            this.lk(a, b, 2)
        },
        fx: function(a, b) {
            function c(a, b) {
                a = (null == a ? "null" : "*" == a ? "*" : F.Wd(a).__name__) + "-" + (null == b ? "null" : "*" == b ? "*" : F.Wd(b).__name__);
                return Object.prototype.hasOwnProperty.call(ta.zm.v, a) ? (d.ja = ta.zm.v[a], !0) : !1
            }
            var d = this;
            this.ja = null;
            c(a, b) || c("*", b) || c(a, "*") || c("*", "*");
            null == this.ja && (this.ja = new pd)
        },
        lk: function(a, b, c) {
            this.b = a;
            this.a = b;
            this.type = c;
            G.Ag.ta(E(this, this.update));
            G.ig.ta(E(this, this.Ma));
            this.fx(a, b);
            this.elapsedTime = 0;
            this.duration = this.ja.Tc(a,
                b, c);
            0 < b.tn ? (b.canvas.na(!1), this.state = 1) : (this.ja.yh(a, b, c), this.state = 2)
        },
        end: function(a, b, c) {
            this.Lv.fw(a, b, c);
            this.state = 0;
            G.Ag.detach(E(this, this.update));
            G.ig.detach(E(this, this.Ma))
        },
        update: function(a) {
            switch (this.state) {
                case 1:
                    if (0 < this.a.tn) break;
                    this.a.canvas.na(!0);
                    this.ja.yh(this.b, this.a, this.type);
                    this.state = 2;
                    break;
                case 3:
                    this.elapsedTime += a;
                    a = Math.min(this.elapsedTime / this.duration, 1);
                    this.ja.oj(this.b, this.a, this.type, a);
                    1 == a && (this.ja.mj(this.b, this.a, this.type), this.state = 4);
                    break;
                case 5:
                    a = this.b;
                    var b = this.a;
                    this.a = this.b = null;
                    this.state = 0;
                    this.end(a, b, this.type)
            }
        },
        Ma: function() {
            switch (this.state) {
                case 2:
                    this.state = 3;
                    break;
                case 4:
                    this.state = 5
            }
        },
        j: ta
    };
    C.__name__ = "F2";
    C.G = B;
    C.prototype = u(B.prototype, {
        D: function() {
            return Ja.Ia
        },
        L: function() {
            this.D().detach(this);
            B.prototype.L.call(this)
        },
        j: C
    });
    id.__name__ = "F3";
    id.G = C;
    id.prototype = u(C.prototype, {
        Da: function() {
            C.prototype.Da.call(this);
            this.Oc = new ca(this.D().mc(4), 1, "crosshair");
            this.Oc.qa(0);
            ha.Sa().ta(E(this, this.Ic));
            this.D().ta(this)
        },
        L: function() {
            ha.Sa().detach(E(this, this.Ic));
            C.prototype.L.call(this)
        },
        handle: function(a) {
            12 == a.type && this.L()
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            a = ha.Sa().Ku();
            !this.D().nf && this.Ti || this.D().l.ox(a);
            this.alpha += this.eh / 20;
            1 < this.alpha && (this.alpha = 1);
            0 > this.alpha && (this.alpha = 0);
            this.ji *= .9;
            this.D().l.oe.ub = 0;
            var b = this.D().l.oe,
                c = this.D().l.U,
                d = new H;
            d.b = c.b;
            d.a = c.a;
            d.c = c.c;
            d.d = c.d;
            b.Jq(d, 1, 1);
            c = this.D().l.oe.result.gh;
            b = 0 < ha.Sa().We ? 1 : 0;
            d = c.f[2] - c.f[0];
            var e = c.f[3] - c.f[1];
            c = Math.sqrt(d *
                d + e * e);
            0 < c && (d /= c, e /= c);
            c = this.rb;
            c.b = a.b;
            c.a = a.a;
            this.D().l.Em(this.rb);
            this.rb.b += 6 * d * b;
            this.rb.a += 6 * e * b;
            this.rb.b = this.D().l.viewport.Lr(this.rb.b);
            this.rb.a = this.D().l.viewport.vg(this.rb.a);
            a = this.D().l.viewport.R;
            this.rb.b = Math.max(a.b, this.rb.b);
            this.rb.b = Math.min(a.c, this.rb.b)
        },
        Ma: function(a) {
            C.prototype.Ma.call(this, a);
            this.Oc.qa(this.alpha);
            if (this.D().paused || 3 == this.D().la.state) this.Oc.qa(0);
            else if (this.D().nf || !this.Ti) a = 2 * this.D().l.viewport.zoom, this.Oc.ba(this.rb.b), this.Oc.ga(this.rb.a),
                this.Oc.qa(this.alpha), this.Oc.ib(a / this.Oc.J.b * (1.5 + this.ji)), this.Oc.Nc(), this.Oc.sf()
        },
        Ic: function(a) {
            if (!this.D().paused) {
                var b = this.D().lm,
                    c = a.x,
                    d = a.y,
                    e = new v;
                e.b = c;
                e.a = d;
                if (!b.fb(e) && (null != this.D().Yf ? (b = this.D().Yf, c = a.x, d = a.y, e = new v, e.b = c, e.a = d, b = b.fb(e)) : b = !1, !b)) switch (a.type) {
                    case 0:
                        this.eh = 1;
                        this.ji = 1.5;
                        break;
                    case 1:
                        this.eh = -1
                }
            }
        },
        j: id
    });
    L.__name__ = "F4";
    L.G = la;
    L.prototype = u(la.prototype, {
        X: function(a) {
            la.prototype.X.call(this, a);
            this.da = a
        },
        L: function() {
            L.count--;
            this.da.L();
            this.da = null
        },
        remove: function() {
            L.count--;
            this.da.df(null, this);
            this.da = null
        },
        j: L
    });
    dc.__name__ = "F5";
    dc.G = L;
    dc.prototype = u(L.prototype, {
        Zb: function() {
            return 5
        },
        X: function(a) {
            L.prototype.X.call(this, a);
            var b = a.Ud(Xa),
                c = b.od,
                d = c.b,
                e = c.a;
            c = new v;
            c.b = d;
            c.a = e;
            this.offset = c;
            this.scale = b.scale;
            this.align = a.client.D().$a.Ng
        },
        update: function(a) {
            var b = this.interval.update(a.Fa);
            b = this.Jb(b);
            var c = 0,
                d = 0,
                e = .3;
            switch (a.l.au(a)) {
                case 0:
                    0 == this.align ? d = -this.offset.a : c = -this.offset.b;
                    e = 1;
                    break;
                case 1:
                    e = .5;
                    c = -1.25;
                    break;
                default:
                    c = -1.25
            }
            a = a.Ud(Xa);
            a.od.b = Na.map(b, 0, 1, this.offset.b, this.offset.b + c);
            a.od.a = Na.map(b, 0, 1, this.offset.a, this.offset.a + d);
            a.scale = Na.map(b, 0, 1, this.scale, e);
            1 == b && this.remove()
        },
        j: dc
    });
    nd.__name__ = "F6";
    nd.G = L;
    nd.prototype = u(L.prototype, {
        Zb: function() {
            return 5
        },
        X: function(a) {
            L.prototype.X.call(this, a);
            var b = a.Ud(Xa);
            b.scale = this.scale;
            b.update(a)
        },
        update: function(a) {
            var b = this.interval.update(a.Fa);
            b = this.Jb(b);
            a.Ud(Xa).scale = Na.map(b, 0, 1, 0, this.Ox);
            1 == b && this.remove()
        },
        j: nd
    });
    md.__name__ = "F7";
    md.G = L;
    md.prototype = u(L.prototype, {
        Zb: function() {
            return 2
        },
        X: function(a) {
            L.prototype.X.call(this, a);
            a.scale = 0
        },
        update: function(a) {
            this.tb -= a.Fa;
            if (!(0 < this.tb)) {
                var b = this.interval.update(a.Fa);
                a.scale = Na.map(this.Jb(b), 0, 1, 0, 1);
                1 == b && this.remove()
            }
        },
        j: md
    });
    ld.__name__ = "F8";
    ld.G = L;
    ld.prototype = u(L.prototype, {
        Zb: function() {
            return 2
        },
        X: function(a) {
            L.prototype.X.call(this, a);
            this.jm = new kd(this.$p);
            a.client.W(this.jm)
        },
        update: function(a) {
            this.tb -= a.Fa;
            if (!(0 < this.tb)) {
                var b = a.client,
                    c = this.interval.update(a.Fa);
                this.jm.F.qa(c);
                b.scale = .5 + .5 * da.He()(c);
                1 == c && (a.Pg(this.$p), this.jm.L(), this.remove())
            }
        },
        j: ld
    });
    Hb.__name__ = "F9";
    Hb.G = L;
    Hb.prototype = u(L.prototype, {
        X: function(a) {
            var b = this;
            L.prototype.X.call(this, a);
            this.xg = new ge(1, 0, .25, da.Qp(), function() {
                Hb.count--;
                b.L()
            });
            Hb.count++
        },
        update: function(a) {
            var b = a.client,
                c = this.xg;
            a = c.interval.update(a.Fa);
            b.scale = Na.map(c.Jb(a), 0, 1, c.start, c.end);
            1 == a && (b = c.Og, c.Og = null, c.interval = null, c.Jb = null, b())
        },
        Zb: function() {
            return 5
        },
        j: Hb
    });
    Gb.__name__ = "FA";
    Gb.G = L;
    Gb.prototype =
        u(L.prototype, {
            X: function(a) {
                L.prototype.X.call(this, a);
                a.df(Ub);
                a.kb(new qc);
                this.kv = new lb(.5);
                this.lv = new lb(1);
                a.za.b = Ra.Ik(10);
                a.za.a = Ra.hh(-2, -4);
                Gb.count++
            },
            update: function(a) {
                var b = this.kv.update(a.Fa);
                a.scale = Na.map(this.Ht(b), 0, 1, 1, .5);
                this.cr || 1 != b || (Gb.count--, this.cr = !0);
                if (this.eh) {
                    var c = a.client;
                    b = this.lv.update(a.Fa);
                    c.alpha = 1 - this.It(b);
                    c.scale = .001 + c.alpha;
                    if (.01 > c.alpha) {
                        this.L();
                        return
                    }
                }
                this.ft(a)
            },
            ft: function(a) {
                var b = a.A,
                    c = a.za,
                    d = this.Il;
                d.b = c.b * a.Fa;
                d.a = c.a * a.Fa;
                var e = a.l.Kc;
                this.rd += a.Fa;
                c = a.client;
                if (b.a - 2 * a.T > -za.Le(e.xb.f[2])) this.L();
                else if (1 != this.ld) {
                    var f = a.A.b,
                        g = a.A.a;
                    b = a.T;
                    var h = new La;
                    h.b = f;
                    h.a = g;
                    h.c = b;
                    f = e.wk(h, d, Infinity);
                    if (!(0 >= f || 1 < f) && (b = e.Rg, e = e.pd, 0 != e)) {
                        if (2 == e && (this.ld++, 1 == this.ld && (.1 < this.rd && (this.rd = 0, D.play(D.Hn)), this.eh = !0), 1 < this.ld)) return;
                        a.A.b += f * d.b;
                        a.A.a += f * d.a;
                        a.Fa = 0;
                        f = b.b;
                        g = b.a;
                        h = new v;
                        h.b = f;
                        h.a = g;
                        c.lo(h, .7);
                        a.hr(b)
                    }
                }
            },
            Zb: function() {
                return 3
            },
            j: Gb
        });
    kd.__name__ = "FB";
    kd.G = B;
    kd.prototype = u(B.prototype, {
        Da: function() {
            B.prototype.Da.call(this);
            this.parent.D().mc(3).appendChild(this.F);
            this.F.sf();
            this.F.Nc();
            this.F.qa(0)
        },
        L: function() {
            B.prototype.L.call(this);
            this.F.o();
            this.F = null
        },
        update: function(a) {
            B.prototype.update.call(this, a);
            this.F.update(a)
        },
        Ma: function(a) {
            B.prototype.Ma.call(this, a);
            var b = this.parent;
            this.F.ba(b.Fb.b * a + b.lg.b * (1 - a));
            this.F.ga(b.Fb.a * a + b.lg.a * (1 - a));
            this.F.ib(2 * b.Dj / this.F.J.b * .95 * b.scale * b.da.scale)
        },
        j: kd
    });
    jd.__name__ = "FC";
    jd.G = L;
    jd.prototype = u(L.prototype, {
        X: function(a) {
            L.prototype.X.call(this, a);
            a.nh = 1;
            a.scale =
                .75;
            a.Qc = .01;
            a.Ao = .7;
            a.Hf = 33;
            var b = a.A,
                c = a.l.U,
                d = c.a;
            b.b = c.b;
            b.a = d;
            a.client.visible = !1
        },
        update: function(a) {
            L.prototype.update.call(this, a);
            switch (this.state) {
                case 0:
                    this.tb -= a.Fa;
                    if (0 >= this.tb) {
                        .3 > Math.random() && D.play(D.js);
                        this.state++;
                        a.client.visible = !0;
                        var b = Ra.hh(0, 6);
                        .5 < Math.random() && (b = -b);
                        a.za.b = b;
                        a.za.a = Ra.hh(-30, -40);
                        a.kb(new qc)
                    }
                    break;
                case 1:
                    0 <= a.za.a && (this.Ot(), this.L())
            }
        },
        Ot: function() {
            D.play(D.Gn);
            for (var a = 0; 8 > a;) {
                var b = a++;
                .5 > Math.random() && Tb.Ai(function(a) {
                        return function() {
                            D.play(a[0])
                        }
                    }([D.ss]),
                    50 * b);
                var c = Ra.hh(10, 15),
                    d = Math.sin(.7853981633974483 * b) * c;
                b = Math.cos(.7853981633974483 * b) * c;
                c = this.da.l.po(this.da.code);
                c.scale = .25;
                var e = c.A,
                    f = this.da.A;
                e.b = f.b;
                e.a = f.a;
                c.za.b = d;
                c.za.a = b;
                c.Hf = 15;
                c.kb(new Fb)
            }
        },
        j: jd
    });
    Fb.__name__ = "FD";
    Fb.G = L;
    Fb.prototype = u(L.prototype, {
        X: function(a) {
            L.prototype.X.call(this, a);
            a.kb(new qc);
            Fb.count++
        },
        update: function(a) {
            var b = a.A,
                c = a.za,
                d = this.Il;
            d.b = c.b * a.Fa;
            d.a = c.a * a.Fa;
            var e = a.l.Kc;
            this.rd += a.Fa;
            c = a.client;
            if (b.a - 2 * a.T > -za.Le(e.xb.f[2])) Fb.count--, this.L();
            else if (1 !=
                this.ld) {
                var f = a.A.b,
                    g = a.A.a;
                b = a.T;
                var h = new La;
                h.b = f;
                h.a = g;
                h.c = b;
                f = e.wk(h, d, Infinity);
                if (!(0 >= f || 1 < f) && (b = e.Rg, e = e.pd, 0 != e)) {
                    if (2 == e && (this.ld++, 1 == this.ld && .1 < this.rd && (this.rd = 0, D.play(D.Hn)), 1 < this.ld)) return;
                    a.A.b += f * d.b;
                    a.A.a += f * d.a;
                    a.Fa = 0;
                    f = b.b;
                    g = b.a;
                    h = new v;
                    h.b = f;
                    h.a = g;
                    c.lo(h, .7);
                    a.hr(b)
                }
            }
        },
        Zb: function() {
            return 3
        },
        j: Fb
    });
    bc.__name__ = "FE";
    bc.G = C;
    bc.prototype = u(C.prototype, {
        L: function() {
            this.jb.o();
            C.prototype.L.call(this)
        },
        Da: function() {
            C.prototype.Da.call(this);
            var a = this.D().mc(6).node;
            this.jb =
                new Za;
            this.jb.ja = new Cd(E(this, this.Ei));
            F.Aa(a, Ka).appendChild(this.jb)
        },
        Ei: function(a) {
            var b = this.D().l.viewport.R;
            if (!(10 > b.b)) {
                var c = a.Lh,
                    d = c.getContext();
                a.Pc != a.Rf && (a.Rf = a.Pc, d.globalCompositeOperation = a.Pc);
                a.Wb != a.Re && (a.Re = a.Wb, d.globalAlpha = a.Wb);
                a = c.nc();
                d.setTransform(1, 0, 0, 1, 0, 0);
                d.lineWidth = 1;
                d.strokeStyle = bc.xs;
                d.beginPath();
                d.moveTo(b.b, 0);
                d.lineTo(b.b, a.a);
                d.closePath();
                d.stroke();
                d.beginPath();
                d.moveTo(b.c, 0);
                d.lineTo(b.c, a.a);
                d.closePath();
                d.stroke();
                d.strokeStyle = null
            }
        },
        j: bc
    });
    Fa.__name__ = "FF";
    Fa.__interfaces__ = [ae];
    Fa.G = C;
    Fa.prototype = u(C.prototype, {
        Uy: function() {
            return this.da.code
        },
        L: function() {
            C.prototype.L.call(this);
            this.da = null
        },
        pop: function() {
            var a = this,
                b = new Hb;
            this.W(new $b(this.hc, function() {
                Fa.Ch--;
                a.da.kb(b);
                a.D().sw(a);
                a.md(21)
            }));
            Fa.Ch++
        },
        zo: function() {
            var a = this,
                b = new Gb;
            this.W(new $b(this.hc, function() {
                Fa.Ch--;
                a.da.kb(b);
                a.D().Gt(a)
            }));
            Fa.Ch++
        },
        $l: function() {
            this.L()
        },
        hq: function() {
            this.md(20)
        },
        lo: function(a, b, c) {
            null == c && (c = 0);
            null == b && (b = 1);
            var d = Math.min(this.da.Ao,
                b);
            b = this.da.za;
            var e = b.b * a.b + b.a * a.a;
            b = -(1 + d) * e * a.b * this.da.nh;
            a = -(1 + d) * e * a.a * this.da.nh;
            0 < c && (d = Math.sqrt(b * b + a * a), d < c && (b = b / d * c, a = a / d * c));
            this.da.za.b += b;
            this.da.za.a += a
        },
        Da: function() {
            C.prototype.Da.call(this)
        },
        update: function(a) {
            var b = this.lg,
                c = this.Fb;
            b.b = c.b;
            b.a = c.a;
            this.da.cp(this.Fb);
            this.Dj = this.da.T * this.da.l.viewport.zoom;
            this.visible = 7 == this.da.code ? 0 < this.Fb.a : !this.da.C.ro;
            C.prototype.update.call(this, a)
        },
        j: Fa
    });
    Oa.__name__ = "100";
    Oa.G = B;
    Oa.prototype = u(B.prototype, {
        Da: function() {
            B.prototype.Da.call(this);
            var a = F.Aa(this.parent, Fa).D().mc(3);
            this.F = new ca(a);
            this.F.na(!1);
            this.F.re(1, this.To());
            this.F.sf();
            this.F.Nc();
            if (null == Oa.qm)
                for (Oa.qm = [], a = 0; 6 >= a;) {
                    var b = eb.tt("" + a + "/");
                    Oa.qm[a] = eb.wt("pop_" + a, b);
                    ++a
                }
        },
        L: function() {
            B.prototype.L.call(this);
            this.F.o();
            this.F = null
        },
        handle: function(a) {
            var b = this;
            B.prototype.handle.call(this, a);
            switch (a.type) {
                case 20:
                    this.F.gc(this.To());
                    break;
                case 21:
                    a = this.parent;
                    var c = a.Fb,
                        d = c.b,
                        e = c.a;
                    c = new v;
                    c.b = d;
                    c.a = e;
                    this.vj = c;
                    a = a.da.code;
                    this.pop = new ca(this.F.Kb(), 2, "" +
                        a + "/0001");
                    this.pop.sf();
                    this.pop.Nc();
                    this.pop.Lu().play(Oa.qm[a], !0, 0, function() {
                        b.pop.o();
                        b.pop = null
                    });
                    a = this.pop.Jj(360 * Math.random());
                    this.pop.ba(this.vj.b);
                    this.pop.ga(this.vj.a);
                    this.pop.ib(.75);
                    this.gg = c = new v;
                    this.gg.b = 10 * Math.sin(.0174532925199432 * a);
                    this.gg.a = 10 * Math.cos(.0174532925199432 * a);
                    this.time = 0
            }
        },
        update: function(a) {
            B.prototype.update.call(this, a);
            this.F.update(a);
            null != this.pop && (this.gg.a += 100 * a, this.Hq = this.Jh(.5))
        },
        Ma: function(a) {
            B.prototype.Ma.call(this, a);
            var b = this.parent;
            this.F.ba(b.Fb.b * a + b.lg.b * (1 - a));
            this.F.ga(b.Fb.a * a + b.lg.a * (1 - a));
            this.F.ib(2 * b.Dj / this.F.J.b * .9 * b.scale * b.da.scale);
            this.F.na(b.visible);
            this.F.qa(b.alpha);
            null != this.pop && (this.pop.ba(this.vj.b + this.gg.b), this.pop.ga(this.vj.a + this.gg.a), this.pop.qa(1 - this.Hq))
        },
        To: function() {
            var a = this.parent.da.code;
            7 == a && (a = 7);
            var b = "bubble" + a;
            Oa.Ac && 0 < a && 7 > a && (b += "_cb");
            return b
        },
        j: Oa
    });
    mb.__name__ = "101";
    mb.uy = function(a) {
        for (var b = 1E3, c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            null != d.label && (d = d.label.ra.size, b >= d &&
                (b = d))
        }
        if (1E3 != b)
            for (c = 0; c < a.length;) d = a[c], ++c, null != d.label && d.Th(b)
    };
    mb.G = B;
    mb.prototype = u(B.prototype, {
        L: function() {
            ha.Sa().detach(E(this, this.Ic));
            this.group.o();
            this.tq = this.sq = null;
            B.prototype.L.call(this)
        },
        fb: function(a) {
            return this.F.fb(a)
        },
        Ha: function() {
            var a = this.R,
                b = a.b,
                c = a.a,
                d = a.c,
                e = a.d;
            a = new H;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d = e;
            return a
        },
        Jd: function(a) {
            var b = this.R;
            b.b = a.b;
            b.a = a.a;
            b.c = a.c;
            b.d = a.d;
            this.F.ib(1);
            b = a.d - a.a;
            this.F.Kj(a.c - a.b);
            this.F.Ij(b);
            this.group.ba(a.b);
            this.group.ga(a.a);
            this.group.Nc();
            this.Np()
        },
        na: function(a) {
            this.group.na(a);
            this.i = this.i & -9 | (a ? 1 : 0) << 3;
            return a
        },
        qa: function(a) {
            this.group.qa(a);
            return a
        },
        Rb: function(a) {
            this.i = a ? this.i | 1 : this.i & -8;
            return a
        },
        jx: function(a, b) {
            null == this.label && (this.label = new db(this.group, b));
            this.label.ya(a);
            this.Np()
        },
        Np: function() {
            if (null != this.label) {
                var a = this.R;
                if (!(a.b > a.c || a.a > a.d)) {
                    a = this.R;
                    var b = a.c - a.b;
                    a = this.R;
                    var c = a.d - a.a,
                        d = a = new H;
                    d.b = 0;
                    d.a = 0;
                    d.c = b;
                    d.d = c;
                    b = d;
                    d = a = this.R;
                    this.label.Km(.75 * (a.c - a.b) * this.Vn.b, .75 * (d.d - d.a) * this.Vn.a);
                    this.label.Ls(10, 200);
                    this.label.Hg(b, 0, 0)
                }
            }
        },
        Ic: function(a) {
            if (0 != (this.i & 1) && 0 != (this.i & 8) && 0 == (this.i & 20)) switch (a.type) {
                case 0:
                    if (0 != (this.i & 6)) break;
                    var b = this.F,
                        c = a.x;
                    a = a.y;
                    var d = new v;
                    d.b = c;
                    d.a = a;
                    if (!b.fb(d)) break;
                    this.i |= 2;
                    "button" == this.F.Ge ? D.play(D.vs) : D.play(D.ws);
                    this.group.Zd().fn(1.1, 1, da.He(0, .5));
                    null != this.sq && this.sq();
                    break;
                case 1:
                    0 != (this.i & 2) && 0 == (this.i & 4) && (b = this.F, c = a.x, a = a.y, d = new v, d.b = c, d.a = a, b.fb(d) ? (this.group.Zd().fn(1, 1, da.He(0, .25)), this.i |= 4, this.i &= -3, this.time =
                        0, this.select()) : (this.group.Zd().fn(1, 1, da.He(0, .25)), this.i &= -3))
            }
        },
        update: function(a) {
            B.prototype.update.call(this, a);
            0 != (this.i & 16) && (this.Kk += a, this.Kk > this.Ko && (this.i &= -21))
        },
        select: function() {
            null != this.tq && this.tq();
            this.qk(5, ra.Df(["name", this.name]));
            this.Kk = 0;
            var a = 4;
            this.i = this.i & ~(1 << a) | 1 << a;
            a = 2;
            this.i = this.i & ~(1 << a) | 0 << a
        },
        Th: function(a) {
            var b = this.R,
                c = b.c - b.b;
            b = this.R;
            var d = b.d - b.a;
            b = new H;
            b.b = 0;
            b.a = 0;
            b.c = c;
            b.d = d;
            this.label.Th(a);
            this.label.Hg(b, 0, 0)
        },
        j: mb
    });
    bf.__name__ = "102";
    hd.__name__ =
        "103";
    hd.G = C;
    hd.prototype = u(C.prototype, {
        Da: function() {
            C.prototype.Da.call(this);
            this.group = new ia(null, this.D().mc(0));
            this.W(new cc(.25));
            this.W(new cc(.5));
            this.W(new cc(1.5));
            this.resize()
        },
        L: function() {
            C.prototype.L.call(this);
            this.group.o()
        },
        handle: function(a) {
            1 == a.type && this.resize()
        },
        resize: function() {
            var a = this.D().screen.Zi[1];
            this.group.ib((a.d - a.a) / 1280)
        },
        Uk: function(a) {
            this.Gg &= ~(1 << a);
            for (var b = 0;;)
                if (a = Ra.xj(1, 4), !(0 < (this.Gg & 1 << a) && 100 > b++)) {
                    this.Gg |= 1 << a;
                    break
                }
            return a
        },
        j: hd
    });
    cc.__name__ =
        "104";
    cc.G = C;
    cc.prototype = u(C.prototype, {
        Da: function() {
            C.prototype.Da.call(this);
            this.F = new ca(this.parent.group, 6, "1");
            this.F.ba(this.Yo() * Math.random());
            this.Qq()
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            a = this.F;
            a.ba(a.xa + this.speed);
            a = this.Yo();
            this.Cg.b = 0;
            this.F.wg(this.Cg, this.Cg);
            this.Cg.b > a && (this.Qq(), this.F.ba(-this.F.Ne()))
        },
        Qq: function() {
            this.speed = .3 * (this.depth + Ra.Ik(.3 * this.depth));
            this.F.ib(this.depth + Ra.Ik(.3 * this.depth));
            var a = this.F.Me();
            this.F.ga(a / 2 + 1280 * Math.random() *
                this.D().l.viewport.Uc().a - a);
            this.F.qa(this.depth);
            this.F.gc(this.Uk())
        },
        Uk: function() {
            this.frame = this.parent.Uk(this.frame);
            return z.va(this.frame)
        },
        Yo: function() {
            return this.D().$a.gd.b
        },
        j: cc
    });
    ke.__name__ = "105";
    ke.prototype = {
        resize: function() {
            var a = window.document.getElementById("crashdialog"),
                b = this.Ha();
            a.style.width = b.c - b.b + "px";
            a.style.height = b.d - b.a + "px";
            a.style.left = b.b + "px";
            a.style.top = b.a + "px"
        },
        Ha: function() {
            var a = window.innerWidth,
                b = window.innerHeight;
            var c = .8 * a | 0;
            var d = .5 * b | 0;
            var e =
                c / .6,
                f = d / 1,
                g = new H;
            e <= f ? (g.b = 0, g.a = 0, g.c = g.b + c, g.d = g.a + (1 * e | 0)) : (c = g.c - g.b, g.b = 0, g.c = c, c = g.d - g.a, g.a = 0, g.d = c, g.c = g.b + (.6 * f | 0), g.d = g.a + d);
            a = (a - (g.c - g.b)) / 2 | 0;
            c = g.c - g.b;
            g.b = a;
            g.c = a + c;
            a = .3 * b | 0;
            c = g.d - g.a;
            g.a = a;
            g.d = a + c;
            return g
        },
        j: ke
    };
    sb.__name__ = "106";
    sb.G = C;
    sb.prototype = u(C.prototype, {
        L: function() {
            this.F.o();
            C.prototype.L.call(this);
            sb.count--
        },
        Da: function() {
            C.prototype.Da.call(this);
            var a = this.Kg.Dj,
                b = this.Kg.Fb.b - a,
                c = this.Kg.Fb.a - a,
                d = this.Kg.Fb.b + a,
                e = this.Kg.Fb.a + a;
            this.F = new db(this.D().mc(5), 1E3 <=
                this.value ? 14 : 15);
            var f = 1E4 <= this.value ? 1.25 : 1E3 <= this.value ? 1 : 100 <= this.value ? .75 : 10 <= this.value ? .5 : .25;
            this.F.Km(2.5 * a * f, 2.5 * a * f);
            this.F.ya(z.va(this.value));
            this.F.yr();
            a = this.F;
            f = new H;
            f.b = b;
            f.a = c;
            f.c = d;
            f.d = e;
            a.Hg(f, 0, 0);
            this.Yr = this.Wj = this.F.ua;
            this.alpha = 1
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            this.Yr = this.Wj;
            this.Wj -= .5;
            .5 < this.time && (this.alpha -= .1, .005 >= this.alpha && this.L())
        },
        Ma: function(a) {
            C.prototype.Ma.call(this, a);
            this.F.ga(this.Wj * a + this.Yr * (1 - a));
            this.F.qa(this.alpha)
        },
        j: sb
    });
    Ja.__name__ = "107";
    Ja.__interfaces__ = [be];
    Ja.G = cb;
    Ja.prototype = u(cb.prototype, {
        Da: function() {
            cb.prototype.Da.call(this);
            this.$a.Bc();
            this.md(1)
        },
        L: function() {
            cb.prototype.L.call(this);
            this.screen = null;
            this.Gk();
            this.fc.o();
            Ja.Ia = null
        },
        Lt: function() {
            ha.Sa().ta(E(this, this.Ic))
        },
        Gk: function() {
            ha.Sa().detach(E(this, this.Ic))
        },
        pause: function() {
            this.paused = !0;
            this.Bm = this.ei = !1;
            this.Gk()
        },
        resume: function() {
            this.paused = !1;
            this.Bm = this.ei = !0;
            this.Lt()
        },
        mc: function(a) {
            return this.xl[a]
        },
        xr: function(a) {
            4 !=
                this.la.state && this.pw.W(new sb(a, this.la.Mk(a.sb)))
        },
        sw: function(a) {
            var b = this.la.dd += this.la.Mk(a.sb);
            this.la.dd = 9999999 < b ? 9999999 : b;
            this.pc(16);
            Q.Rp(this.la.dd);
            b = a.sb;
            a.da.C.Mg && (b = -1);
            this.pc(9, ra.Df(["index", b]));
            this.xr(a)
        },
        Gt: function(a) {
            var b = this.la.dd += this.la.Mk(a.sb);
            this.la.dd = 9999999 < b ? 9999999 : b;
            Q.Rp(this.la.dd);
            this.pc(16);
            this.pc(10, ra.Df(["index", a.sb]));
            this.xr(a)
        },
        reload: function() {
            for (var a = this.l.wa.g, b = 0; b < a;) {
                var c = b++;
                this.l.Xd(c).kb(new dc)
            }
            1 < a && this.l.Xd(1).Pg(this.la.Bd)
        },
        cm: function() {
            this.la.Xa.le = Math.round(this.time);
            this.la.Wh ? (this.md(13), this.qk(13)) : (this.md(14), this.qk(14));
            this.ei = !1
        },
        update: function(a) {
            this.la.update(a);
            this.l.update(a);
            cb.prototype.update.call(this, a)
        },
        handle: function(a) {
            1 == a.type && this.$a.Bc();
            cb.prototype.handle.call(this, a)
        },
        Ic: function(a) {
            if (!this.paused) switch (a.type) {
                case 0:
                    if (null != this.Yf) {
                        var b = this.Yf;
                        var c = a.x,
                            d = a.y,
                            e = new v;
                        e.b = c;
                        e.a = d;
                        b = b.fb(e)
                    } else b = !1;
                    if (b) break;
                    b = this.lm;
                    c = a.x;
                    d = a.y;
                    e = new v;
                    e.b = c;
                    e.a = d;
                    if (b.fb(e)) {
                        this.mm = !0;
                        this.nf = !1;
                        break
                    }
                    this.nf = !0;
                    break;
                case 1:
                    null != this.Yf ? (b = this.Yf, c = a.x, d = a.y, e = new v, e.b = c, e.a = d, b = b.fb(e)) : b = !1, b || (b = this.lm, c = a.x, d = a.y, e = new v, e.b = c, e.a = d, b.fb(e) || this.mm ? this.mm = this.nf = !1 : (c = a.x | 0, a = a.y | 0, 1 < this.la.Rk() && this.l.kw(0, c, a, 2) || (this.la.zx(), this.nf = !1)))
            }
        },
        Zl: function(a) {
            a = new Fa(a);
            a.W(new Oa);
            this.Wn.W(a)
        },
        $l: function() {},
        Yv: function(a, b) {
            var c = new Fa(a);
            c.W(new Oa);
            this.Wn.W(c);
            if (0 < b) {
                c = a.Ud(Xa);
                var d = 1.25 * (b - 1),
                    e = 0;
                0 == this.$a.Ng ? e = 2 : d += 2;
                c.od.b = d;
                c.od.a = e;
                b = c.scale = 1 ==
                    b ? .5 : .3;
                c.update(a);
                c = new nd(b);
                a.kb(c)
            }
        },
        fk: function() {
            for (var a = this.$a.Ng, b = 1, c = this.l.wa.g; b < c;) {
                var d = b++,
                    e = this.l.Xd(d),
                    f = e.Ud(Xa);
                if (0 == a) {
                    d = 1.25 * (d - 1);
                    var g = 2
                } else d = 2 + 1.25 * (d - 1), g = 0;
                f.od.b = d;
                f.od.a = g;
                e.df(dc)
            }
        },
        Wl: function() {},
        Yl: function(a, b) {
            null != b && 7 == b.code && this.pc(7);
            this.pc(6);
            this.la.ck(a.code);
            this.la.Rm(a)
        },
        Vl: function() {
            this.pc(17)
        },
        Xl: function(a) {
            a.L()
        },
        j: Ja
    });
    je.__name__ = "108";
    je.prototype = {
        update: function(a) {
            this.time += a;
            switch (this.state) {
                case 0:
                    if (0 < Fa.Ch) break;
                    if (0 < sb.count) break;
                    this.Sx();
                    break;
                case 2:
                    null == this.ia.l.Xd(0).Ud(dc) && this.lb(0);
                    break;
                case 3:
                    a = this.time / .5;
                    1 < a && (a = 1);
                    var b = this.$n;
                    b += (this.Vv - b) * da.jk()(a);
                    this.ia.l.Rh(this.ia.l.U.b, b);
                    1 == a && this.lb(0);
                    break;
                case 4:
                    0 == L.count && (this.ia.cm(), this.lb(5))
            }
        },
        zx: function() {
            this.wv() && 0 != this.zk() && (this.ia.l.Ax(), this.Xa.vh++, Q.bi("total_bubbles_shot", this.Xa.vh), this.lb(1), this.ia.pc(8), this.wf = this.Bd, this.Bd = this.Eh(), this.ia.reload())
        },
        wv: function() {
            return 0 == this.state ? this.ia.l.Zs() : !1
        },
        Tq: function() {
            for (var a =
                    0, b = this.xh; a < b;) {
                var c = a++;
                this.ia.l.zl(0 == c ? this.Bd : 0)
            }
        },
        Sx: function() {
            if (0 == this.zk()) this.Fy();
            else {
                var a = this.Rk();
                this.ia.l.Zk() > this.ia.l.U.a ? this.Iv() : 1 <= a ? this.yi && (this.yi = !1, this.ia.pc(19)) : this.yi || (this.yi = !0, this.ia.pc(18))
            }
        },
        Rm: function(a) {
            this.result = (new ad).Rm(a);
            a = this.result.me.g + this.result.ah.g;
            this.Xa.jj += a;
            Q.bi("total_bubbles_cleared", this.Xa.jj);
            0 < a && (this.Xa.Rl++, Q.bi("total_hits", this.Xa.Rl));
            a > this.Xa.ul && (this.Xa.ul = a, Q.bi("largest_group", a));
            this.result.me.sort(function(a,
                b) {
                return a.client.sb - b.client.sb
            });
            for (a = this.result.me.iterator(); a.P();) {
                var b = a.next();
                this.clearColor(b.code);
                b = b.client;
                b.pop()
            }
            for (a = this.result.ah.iterator(); a.P();) b = a.next(), this.clearColor(b.code), b = b.client, b.zo();
            0 < this.zk() && (0 == this.nd[this.wf] && (this.wf = this.Eh(), this.ia.l.Xd().Pg(this.wf)), 0 == this.nd[this.Bd] && (this.Bd = this.Eh(), this.ia.l.Xd(1).Pg(this.Bd)));
            0 < this.result.me.g ? (this.lb(2), this.ia.l.zl(1 == this.ia.l.wa.g ? this.Bd : 0), this.ia.md(15)) : (this.xh--, 0 == this.xh ? (this.Gs(), this.kj--,
                0 == this.kj && (this.kj = 5), this.xh = this.kj, this.Tq(), this.lb(3)) : this.lb(2))
        },
        ck: function(a) {
            7 != a && this.nd[a]++
        },
        clearColor: function(a) {
            this.nd[a]--;
            this.Xa.Nl[a]++;
            switch (a) {
                case 1:
                    var b = "total_bubbles_cleared_blue";
                    break;
                case 2:
                    b = "total_bubbles_cleared_green";
                    break;
                case 3:
                    b = "total_bubbles_cleared_yellow";
                    break;
                case 4:
                    b = "total_bubbles_cleared_turquoise";
                    break;
                case 5:
                    b = "total_bubbles_cleared_purple";
                    break;
                case 6:
                    b = "total_bubbles_cleared_red";
                    break;
                default:
                    b = null
            }
            null != b && Q.bi(b, this.Xa.Nl[a])
        },
        Dq: function(a) {
            if (a) return this.Tk(this.Sg);
            a = this.bp();
            return this.Tk(a)
        },
        Eh: function() {
            var a = this.bp();
            if (1 == a.length) return a[0];
            for (var b = 0, c; c = this.Tk(a), c == this.vl && 2 <= this.rk && 100 > b++;);
            c == this.vl ? this.rk++ : this.rk = 0;
            return this.vl = c
        },
        bp: function() {
            for (var a = [], b = 0, c = this.Sg; b < c.length;) {
                var d = c[b];
                ++b;
                0 < this.nd[d] && a.push(d)
            }
            return a
        },
        vu: function() {
            for (var a = 0, b = 1, c = this.nd.length; b < c;) {
                var d = b++;
                0 < this.nd[d] && ++a
            }
            return a
        },
        Mk: function(a) {
            var b = bf.qw;
            return a < b.length ? b[a] : b[b.length - 1]
        },
        Zo: function() {
            return this.Sg.length - this.vu() +
                1
        },
        Rk: function() {
            return this.ia.l.du(!0) | 0
        },
        Gs: function() {
            for (var a = this.ia.l, b = this.Zo(), c = 0, d = 0 < a.ka.get(0, this.Ll).client.Fb.a, e = 0; e < b;) {
                for (var f = e++, g = [], h = 0, k = a.cols; h < k;) h++, g.push(this.Dq(!1));
                for (h = 0; h < g.length;) k = g[h], ++h, this.ck(k);
                h = [];
                k = 0;
                for (var l = a.cols; k < l;) k++, h.push(7);
                a.zw(h);
                h = [];
                k = 0;
                for (l = a.cols; k < l;) {
                    var r = k++;
                    r = a.ka.get(r, this.Ll);
                    h.push(r)
                }
                1 == (f & 1) && h.reverse();
                this.Ll++;
                for (k = f = 0; k < h.length;) l = h[k], ++k, r = g[f++], d ? l.kb(new ld(r, c)) : (l.Pg(r), l.kb(new md(c))), c += .025
            }
            this.$n =
                a.U.a;
            a.qy(b);
            this.Vv = a.U.a;
            a.Rh(a.U.b, this.$n);
            this.ia.pc(11)
        },
        rw: function() {
            for (var a = this.ia.l, b = a.ka, c = !0, d = .1, e = a.fe; e <= a.Xc;) {
                for (var f = [], g = 0, h = a.cols; g < h;) {
                    var k = g++;
                    f.push(b.get(k, e))
                }(c = !c) && f.reverse();
                for (g = 0; g < f.length;) h = f[g], ++g, null != h && (h = h.client, h.hc = d, h.zo(), d += .01);
                ++e
            }
            a = this.ia.l.wa.g;
            f = 0;
            for (g = a; f < g;) h = f++, h = this.ia.l.Xd(h).client, h.hc = d, h.pop(), d += .1
        },
        Tk: function(a) {
            var b = a.length;
            return 1 == b ? a[0] : a[this.Tw.xj(0, b - 1)]
        },
        lb: function(a) {
            this.state = a;
            this.time = 0
        },
        zk: function() {
            for (var a =
                    0, b = 0, c = this.Sg.length; b < c;) {
                var d = b++;
                a += this.nd[d + 1]
            }
            return a
        },
        Fy: function() {
            this.Wh = !0;
            this.qr();
            this.Bx()
        },
        Iv: function() {
            this.Wh = !1;
            this.qr();
            this.rw()
        },
        Bx: function() {
            D.play(D.hs);
            this.lb(4);
            for (var a = 0, b = 0, c = this.ia.l.wa.g; b < c;) {
                var d = b++;
                d = this.ia.l.Xd(d).client;
                d.hc = a;
                d.pop();
                a += .1
            }
            var e = D.rs;
            this.ia.W(new $b(a, function() {
                D.play(e)
            }));
            b = 0;
            for (c = 30; b < c;) d = b++, this.ia.l.po(d % 7).kb(new jd(a)), a += .1
        },
        qr: function() {
            this.lb(4);
            this.ia.Gk();
            this.ia.pc(12)
        },
        j: je
    };
    ie.__name__ = "109";
    ie.prototype = {
        Ju: function() {
            return 0 ==
                this.vh ? 0 : Math.floor(100 * this.Rl / this.vh)
        },
        j: ie
    };
    lb.__name__ = "10A";
    lb.prototype = {
        update: function(a) {
            this.elapsedTime += a;
            return this.alpha = Math.min(this.elapsedTime / this.duration, 1)
        },
        j: lb
    };
    fd.__name__ = "10B";
    fd.G = C;
    fd.prototype = u(C.prototype, {
        Da: function() {
            C.prototype.Da.call(this);
            this.Ld = new ia(null, this.D().mc(1));
            this.b = new ca(this.Ld, 0);
            this.a = new ca(this.Ld, 0);
            this.a.ba(this.b.Vk().b);
            this.Nj = this.a.Vk();
            this.Ld.qa(0);
            this.resize();
            this.D().ta(this)
        },
        L: function() {
            C.prototype.L.call(this);
            this.Ld.o()
        },
        handle: function(a) {
            C.prototype.handle.call(this, a);
            switch (a.type) {
                case 1:
                    this.resize();
                    break;
                case 12:
                    this.L()
            }
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            a = this.D().la.Tv + this.D().la.Zo();
            var b = this.D().la.Rk();
            b <= a ? (this.Oj = 1, this.Vm = 1 + (a - b)) : this.Vm = this.Oj = 0;
            this.Gi = .1;
            this.gk = 1;
            1 > b ? (this.blink || (this.blink = !0, this.time = 0), this.Oj = this.Gi = 1, this.gk = Na.map(Math.cos(10 * this.time), -1, 1, 0, 1)) : this.blink = !1;
            this.alpha += (this.Oj * this.gk - this.alpha) * this.Gi;
            this.speed += (this.Vm - this.speed) * this.Gi;
            this.offset -= 2 * this.speed; - this.offset > this.Nj.b && (a = this.b, a.ba(a.xa - this.offset), a = this.b, this.b = this.a, this.a = a, this.offset = 0)
        },
        Ma: function() {
            C.prototype.Ma.call(this, this.alpha);
            this.b.ba(this.offset);
            this.a.ba(this.Nj.b + this.offset);
            this.Ld.qa(this.alpha)
        },
        resize: function() {
            var a = this.D().l.viewport.Ha(),
                b = (a.c - a.b) / this.Nj.b;
            this.Ld.ib(b);
            b *= this.Nj.a;
            var c = b / 2;
            this.Ld.ba(a.b);
            var d = this.D().l.U,
                e = d.a;
            e = this.D().l.viewport.vg(e);
            e -= 2 * this.D().l.viewport.zoom;
            e -= c;
            this.Ld.ga(e);
            c = this.Ld;
            var f =
                a.b;
            a = a.c;
            d = new H;
            d.b = f;
            d.a = e;
            d.c = a;
            d.d = e + b;
            c.ux(d)
        },
        j: fd
    });
    rb.__name__ = "10C";
    rb.G = C;
    rb.prototype = u(C.prototype, {
        xu: function() {
            var a = this.ke,
                b = a.b,
                c = a.a,
                d = a.c,
                e = a.d;
            a = new H;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d = e;
            return a
        },
        su: function() {
            var a = this.Ad,
                b = a.b,
                c = a.a,
                d = a.c,
                e = a.d;
            a = new H;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d = e;
            return a
        },
        Cu: function() {
            var a = this.jg,
                b = a.b,
                c = a.a,
                d = a.c,
                e = a.d;
            a = new H;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d = e;
            return a
        },
        bl: function() {
            var a = this.gd;
            return a.b / a.a
        },
        Bc: function() {
            this.yx();
            this.fk();
            this.Bv();
            this.Av();
            this.Cv()
        },
        yx: function() {
            this.gd = ka.yb.window.nc();
            var a = this.gd.b,
                b = this.gd.a,
                c = new H,
                d = c;
            d.b = 0;
            d.a = 0;
            d.c = a;
            d.d = b;
            this.wc = d;
            this.D().l.zg();
            this.D().l.mg(.5, .8);
            var e = c = new H;
            d = c = this.wc;
            if (.77 > (c.c - c.b) / (d.d - d.a)) {
                if (a = this.wc, e.b = a.b, e.a = a.a, e.c = a.c, e.d = a.d, this.D().l.Hj(e), this.ki(), e = this.D().l.viewport, .8 < e.Uc().a)
                    for (a = 0; 5 > a && !(a++, this.Hl(1), .8 > e.Uc().a););
            } else {
                c = this.wc;
                a = .5625 * (c.d - c.a);
                c = this.wc;
                c = c.d - c.a;
                a = this.wc.b + a;
                b = this.wc.a + c;
                e.b = this.wc.b;
                e.a = this.wc.a;
                e.c = a;
                e.d = b;
                c = this.wc;
                a = c.b + .5 * (c.c -
                    c.b);
                c = .5 * (e.c - e.b);
                e.b = a - c;
                e.c = a + c;
                this.D().l.Hj(e);
                var f = e.b,
                    g = e.a;
                a = e.c;
                b = e.d;
                d = c = new H;
                d.b = f;
                d.a = g;
                d.c = a;
                d.d = b;
                e = d;
                this.rx();
                this.Ru() ? this.ki() : (this.D().l.Hj(e), this.Sv())
            }
        },
        Hl: function(a) {
            var b = this.D().l.viewport;
            a = 1.7320508075 * a * b.zoom;
            var c = b.Uc();
            b = b.R;
            this.D().l.mg(.5, c.a - a / (b.d - b.a))
        },
        ki: function() {
            var a = this.D().l.viewport,
                b = a.vg(this.D().l.Hd.a),
                c = a.Uc();
            a = a.R;
            this.D().l.mg(.5, c.a - b / (a.d - a.a))
        },
        rx: function() {
            var a = this.D().l.viewport.Ha();
            a.b = this.wc.b;
            a.c = this.wc.c;
            this.D().l.Hj(a)
        },
        Ru: function() {
            this.D().l.zg();
            return 0 < this.D().l.viewport.vg(this.D().l.Hd.a)
        },
        Sv: function() {
            var a = this;
            this.ki();
            this.Hl(5);
            var b = this.D().l.viewport.Ha();
            this.Os(0, b.b, .1, function(c) {
                var d = b.a,
                    e = b.c,
                    f = b.d,
                    g = new H;
                g.b = b.b;
                g.a = d;
                g.c = e;
                g.d = f;
                g.b = b.b - c;
                g.c = b.c + c;
                a.D().l.viewport.Jd(g);
                a.ki();
                a.Hl(5);
                return a.D().l.viewport.Uc().a > rb.Xj
            })
        },
        Os: function(a, b, c, d) {
            for (var e = a + (b - a) / 2, f = 0; 100 > f++ && !(b - a < c);) d(e) ? b = e : a = e, e = a + (b - a) / 2;
            return e
        },
        Bv: function() {
            var a = this.D().l.viewport,
                b = a.R.c,
                c = Y.$c / 2.54,
                d =
                .2 * c;
            c *= .4;
            var e = a.zoom;
            e = c > e ? c : e;
            c = this.gd;
            this.ke = uc.gq(c.b, c.a, e, e);
            this.margin = d;
            d = this.bl();
            this.margin *= Na.map(.6 > d ? .6 : .8 < d ? .8 : d, .6, .8, 2, 1);
            d = this.ke;
            e = b - this.margin;
            var f = d.c - d.b;
            d.c = e;
            d.b = e - f;
            d = this.ke;
            e = c.a - this.margin;
            f = d.d - d.a;
            d.d = e;
            d.a = e - f;
            d = this.ke;
            b = d.a + .5 * (d.d - d.a);
            e = a.Uc().a;
            d = e - rb.Xj;
            if (0 < d ? .01 > d : .01 > -d) d = this.ke, a = a.R, e *= a.d - a.a, f = .5 * (d.d - d.a), d.a = e - f, d.d = e + f;
            this.ke.d > c.a && (d = this.ke, f = .5 * (d.d - d.a), d.a = b - f, d.d = b + f)
        },
        Av: function() {
            var a = this.D().l.viewport,
                b = a.R,
                c = b.b;
            b = Y.$c / 2.54;
            var d = .2 * b,
                e = .48 * b;
            b = a.zoom;
            e = e > b ? e : b;
            b = this.gd;
            this.Ad = uc.gq(0, b.a, e, e);
            this.margin = d;
            d = this.bl();
            this.margin *= Na.map(.6 > d ? .6 : .8 < d ? .8 : d, .6, .8, 2, 1);
            d = this.Ad;
            e = c + this.margin;
            var f = d.c - d.b;
            d.b = e;
            d.c = e + f;
            d = this.Ad;
            e = b.a - this.margin;
            f = d.d - d.a;
            d.d = e;
            d.a = e - f;
            1.2 < this.bl() && (d = this.Ad, e = c - this.margin, f = d.c - d.b, d.c = e, d.b = e - f);
            d = this.Ad;
            c = d.a + .5 * (d.d - d.a);
            e = a.Uc().a;
            d = e - rb.Xj;
            if (0 < d ? .01 > d : .01 > -d) d = this.Ad, a = a.R, e *= a.d - a.a, f = .5 * (d.d - d.a), d.a = e - f, d.d = e + f;
            this.Ad.d > b.a && (d = this.Ad, f = .5 * (d.d - d.a), d.a = c - f, d.d =
                c + f)
        },
        Cv: function() {
            var a = this.D().l.viewport,
                b = a.zoom,
                c = 2 * b,
                d = a.Uc().a,
                e = a.R;
            d *= e.d - e.a;
            var f = e = new H;
            f.b = 0;
            f.a = 0;
            f.c = 4 * c;
            f.d = c;
            this.jg = f;
            5 < (this.gd.a - d - b) / b ? (e = this.jg, c = this.gd.b / 2, a = .5 * (e.c - e.b), e.b = c - a, e.c = c + a, e = this.jg, c = d + (this.gd.a - d) / 2 + b, a = .5 * (e.d - e.a), e.a = c - a, e.d = c + a, uc.scale(this.jg, 1.2, !0)) : (b = Aa.If() ? this.Ad.c : a.R.b, e = a.R, a = e.b + .5 * (e.c - e.b) - c / 2, f = e = new H, f.b = b, f.a = 0, f.c = a, f.d = .6 * c, e = this.jg = f, f = this.ke, c = f.a + .5 * (f.d - f.a), a = .5 * (e.d - e.a), e.a = c - a, e.d = c + a)
        },
        fk: function() {
            this.Ng = 0;
            .9 < this.D().l.viewport.Uc().a &&
                (this.Ng = 1);
            this.D().fk()
        },
        j: rb
    });
    R.__name__ = "10D";
    R.X = function() {
        R.id = R.Gf()
    };
    R.play = function() {
        t.zd && l.Jf(R.id) && !R.Zc && (ja.Dc().play(R.id, !0, !0), R.Zc = !0)
    };
    R.nw = function() {
        var a = [20, 19, 18, 17];
        hf.Dx(a);
        for (var b = 0; 4 > b;) {
            var c = b++;
            if (l.Jf(a[c])) {
                R.id = a[c];
                R.play();
                break
            }
        }
    };
    R.stop = function() {
        l.Jf(R.id) && R.Zc && (ja.Dc().stop(R.id), R.Zc = !1)
    };
    R.eo = function() {
        R.stop();
        R.id = R.Gf();
        R.play()
    };
    R.Gf = function() {
        return -1 == t.Qb ? 20 : [20, 19, 18, 17][t.Qb]
    };
    Eb.__name__ = "10E";
    Eb.G = C;
    Eb.prototype = u(C.prototype, {
        fb: function(a) {
            if (!ja.enabled) return !1;
            if (0 < this.state)
                for (var b = 0, c = this.buttons; b < c.length;) {
                    var d = c[b];
                    ++b;
                    if (d.fb(a)) return !0
                }
            return this.button.fb(a)
        },
        L: function() {
            this.button.L();
            for (var a = 0, b = this.buttons; a < b.length;) {
                var c = b[a];
                ++a;
                c.L()
            }
            C.prototype.L.call(this)
        },
        handle: function(a) {
            if (ja.enabled) switch (C.prototype.handle.call(this, a), a.type) {
                case 1:
                    this.button.Jd(this.D().$a.su());
                    this.Jl = this.button.Ha();
                    0 < this.state && this.$a();
                    break;
                case 5:
                    a.i |= 3;
                    if (5 <= this.state) break;
                    switch (a.source.name) {
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                            var b =
                                t.Qb;
                            a = z.parseInt(a.source.name) - 1;
                            t.Qb = a;
                            t.zd = !0;
                            t.save();
                            this.Nk(b).F.gc("button_track" + (b + 1));
                            b = 0;
                            for (a = this.buttons; b < a.length;) {
                                var c = a[b];
                                ++b;
                                c.Rb(!1)
                            }
                            this.state = 5;
                            if (this.Hv()) return;
                            this.state = 6;
                            this.Nk().F.gc("button_track" + (t.Qb + 1) + "_active");
                            R.eo();
                            break;
                        case "music":
                            switch (this.state) {
                                case 0:
                                    t.th && (t.th = !1, t.save());
                                    this.open();
                                    break;
                                case 2:
                                    this.close()
                            }
                            break;
                        case "stop":
                            R.stop(), t.zd = !1, t.save(), this.close()
                    }
                    break;
                case 12:
                    this.button.Rb(!1), this.button.group.na(!1)
            }
        },
        update: function(a) {
            C.prototype.update.call(this,
                a);
            switch (this.state) {
                case 0:
                    if (!t.th || 10 == Eb.lp) break;
                    2 < this.time && (a = this.button.group, a.ga(a.ua - 20), this.button.group.Zd().y(this.Jl.a, .5, da.He()), this.time = 0, Eb.lp++);
                    break;
                case 1:
                    .4 < this.time && (this.state = 2, this.button.Rb(!0));
                    break;
                case 3:
                    if (.4 < this.time) {
                        this.state = 0;
                        this.button.Rb(!0);
                        a = 0;
                        for (var b = this.buttons; a < b.length;) {
                            var c = b[a];
                            ++a;
                            c.L()
                        }
                        this.buttons = []
                    }
                    break;
                case 5:
                    a = this.Mb;
                    a.Jj(a.Hc + 10);
                    break;
                case 6:
                    a = 0;
                    for (b = this.buttons; a < b.length;) c = b[a], ++a, c.Rb(!0);
                    this.state = 2
            }
        },
        $a: function() {
            var a =
                this.Jl,
                b = a.b,
                c = a.a,
                d = a.c,
                e = a.d;
            a = new H;
            a.b = b;
            a.a = c;
            a.c = d;
            a.d = e;
            b = a;
            uc.scale(b, .8, !0);
            c = b.a - 10;
            d = b.d - b.a;
            b.a = c;
            b.d = c + d;
            for (e = 0; 5 > e;) a = e++, c = b.a - .1 * (b.d - b.a), d = b.d - b.a, b.d = c, b.a = c - d, this.buttons[a].Jd(b);
            null != this.Mb && (b = this.buttons[t.Qb + 1], this.Mb.Nc(), b = b.Ha(), this.Mb.ba((b.c - b.b) / 2), this.Mb.ga((b.d - b.a) / 2), this.Mb.ib((b.c - b.b) / this.Mb.J.b))
        },
        open: function() {
            this.state = 1;
            this.time = 0;
            this.button.Rb(!1);
            this.button.F.gc("button_close");
            var a = this.D().mc(6),
                b = this.Jl,
                c = b.b,
                d = b.a,
                e = b.c,
                f = b.d;
            b = new H;
            b.b = c;
            b.a = d;
            b.c = e;
            b.d = f;
            uc.scale(b, .8, !0);
            var g = b.a - 10,
                h = b.d - b.a;
            b.a = g;
            b.d = g + h;
            c = b.a;
            d = ["button_music_stop", "button_track1", "button_track2", "button_track3", "button_track4"];
            e = ["stop", "1", "2", "3", "4"];
            f = [!0, !0, !0, !0, !0];
            if (t.zd)
                for (var k = 1; 5 > k;)
                    if (g = k++, t.Qb + 1 == g) {
                        d[g] += "_active";
                        f[g] = !1;
                        break
                    }
            for (k = 0; 5 > k;) {
                g = k++;
                var l = new mb(a, new ca(null, 3, d[g]));
                l.name = e[g];
                l.Rb(f[g]);
                this.W(l);
                g = b.a - .1 * (b.d - b.a);
                h = b.d - b.a;
                b.d = g;
                b.a = g - h;
                l.Jd(b);
                l.group.ga(c);
                l.group.Zd().y(b.a, .2, da.jk());
                this.buttons.push(l)
            }
            for (k =
                1; 5 > k;)
                if (g = k++, t.Qb + 1 == g) {
                    d[g] += "_active";
                    f[g] = !1;
                    break
                }
            for (k = 0; 5 > k;) g = k++, this.buttons[g].group.Kb().Ww(this.buttons[g].group)
        },
        close: function() {
            this.state = 3;
            this.time = 0;
            this.button.Rb(!1);
            for (var a = 0, b = this.buttons; a < b.length;) {
                var c = b[a];
                ++a;
                c.Rb(!1)
            }
            this.Tr();
            var d = this.button.Ha();
            a = 0;
            for (b = this.buttons.length; a < b;) c = a++, this.buttons[c].group.Zd().y(d.a, .2, da.Ms())
        },
        Nk: function(a) {
            null == a && (a = t.Qb);
            return this.buttons[a + 1]
        },
        Hv: function() {
            var a = R.Gf(),
                b = this.Lk(qb);
            return b.ud().load(l.Ec(a)) ?
                (l.ag(a, E(this, this.Eq)), this.wd = !0, a = this.buttons[t.Qb + 1], this.Mb = new ca(a.group, 3, "loading"), this.Mb.Nc(), this.Mb.sf(), a = a.Ha(), this.Mb.ba((a.c - a.b) / 2), this.Mb.ga((a.d - a.a) / 2), this.Mb.ib((a.c - a.b) / this.Mb.J.b), !0) : b.ud().Si(l.Ec(a)) || l.oh(a) ? (l.ag(a, E(this, this.Eq)), !0) : !1
        },
        Eq: function(a) {
            this.wd = !1;
            this.Nk().F.gc("button_track" + (t.Qb + 1) + "_active");
            this.Mb.o();
            a == R.Gf() && R.eo();
            this.state = 6
        },
        Tr: function() {
            this.button.F.gc(t.zd ? "button_music" : "button_music_off")
        },
        j: Eb
    });
    ed.__name__ = "10F";
    ed.G = C;
    ed.prototype = u(C.prototype, {
        fb: function(a) {
            return this.button.fb(a)
        },
        L: function() {
            this.button.L();
            C.prototype.L.call(this)
        },
        handle: function(a) {
            C.prototype.handle.call(this, a);
            switch (a.type) {
                case 1:
                    this.button.Jd(this.D().$a.xu());
                    break;
                case 12:
                    this.button.Rb(!1), this.button.group.na(!1)
            }
        },
        j: ed
    });
    dd.__name__ = "110";
    dd.G = C;
    dd.prototype = u(C.prototype, {
        handle: function(a) {
            C.prototype.handle.call(this, a);
            switch (a.type) {
                case 1:
                    this.group.Xt(this.D().$a.Cu(), bb.i0, 0, 0);
                    break;
                case 10:
                    if (this.li) break;
                    this.li = !0;
                    for (this.uh = 0;
                        "0" == this.zf[this.uh][0].Ge;) this.uh++;
                    break;
                case 12:
                    this.D().detach(this);
                    this.group.na(!1);
                    break;
                case 16:
                    a = z.va(this.D().la.dd);
                    for (var b = a.length, c = this.count; - 1 < --b;) {
                        --c;
                        var d = this.zf[c];
                        d[0].gc(a.charAt(b));
                        d[1].gc(a.charAt(b));
                        d[1].qa(1);
                        d[1].na(!0)
                    }
            }
        },
        update: function(a) {
            C.prototype.update.call(this, a);
            a = 0;
            for (var b = this.count; a < b;) {
                var c = a++,
                    d = c = this.zf[c][1];
                d.qa(.97 * d.Gc);
                .01 > c.Gc && c.na(!1)
            }
            this.li && .1 < this.time && (this.time = 0, b = this.zf[this.uh++], a = b[0], a.ga(a.ua - 20), b[0].Zd().y(0,
                2, da.He()), a = b[1], a.ga(a.ua - 20), b[1].Zd().y(0, 2, da.He()), this.uh == this.count && (this.li = !1))
        },
        j: dd
    });
    cd.__name__ = "111";
    cd.G = C;
    cd.prototype = u(C.prototype, {
        Da: function() {
            C.prototype.Da.call(this);
            this.D().ta(this)
        },
        handle: function(a) {
            C.prototype.handle.call(this, a);
            switch (a.type) {
                case 6:
                    this.play(D.us);
                    break;
                case 7:
                    this.play(D.es);
                    break;
                case 8:
                    this.play(D.ts);
                    break;
                case 9:
                    a = a.get("index");
                    if (-1 == a) {
                        this.play(D.qs);
                        break
                    }
                    this.play(D.Gn);
                    4 == a % 5 && this.play(D.Fn);
                    break;
                case 10:
                    this.play(D.fs);
                    a = a.get("index");
                    4 == a % 5 && this.play(D.Fn);
                    break;
                case 11:
                    this.play(D.ns);
                    break;
                case 12:
                    this.D().la.Wh || (this.play(D.os), this.stop(D.Yj));
                    break;
                case 17:
                    this.play(D.gs);
                    break;
                case 18:
                    this.play(D.Yj, !0);
                    break;
                case 19:
                    this.stop(D.Yj), this.play(D.ps)
            }
        },
        stop: function(a) {
            D.stop(a)
        },
        play: function(a, b) {
            null == b && (b = !1);
            D.play(a, b)
        },
        j: cd
    });
    bd.__name__ = "112";
    bd.G = C;
    bd.prototype = u(C.prototype, {
        Da: function() {
            C.prototype.Da.call(this);
            this.F = new ca(null, 1, "shooting_arm");
            this.D().mc(2).appendChild(this.F);
            this.F.sf();
            this.F.Nc();
            this.F.vr(this.F.J.a);
            this.F.xx(this.F.J.a);
            this.D().ta(this)
        },
        L: function() {
            C.prototype.L.call(this);
            this.F.o()
        },
        Ma: function(a) {
            C.prototype.Ma.call(this, a);
            this.F.Jj(this.D().l.cu())
        },
        handle: function(a) {
            C.prototype.handle.call(this, a);
            switch (a.type) {
                case 1:
                    var b = this.D().l.U;
                    a = b.b;
                    var c = b.a;
                    b = new v;
                    b.b = a;
                    b.a = c;
                    this.D().l.Gy(b);
                    this.F.ba(b.b);
                    this.F.ga(b.a);
                    this.F.ib(this.D().l.viewport.zoom / 50);
                    break;
                case 12:
                    this.L()
            }
        },
        j: bd
    });
    ad.__name__ = "113";
    ad.G = C;
    ad.prototype = u(C.prototype, {
        Rm: function(a) {
            function b(a,
                b) {
                return a.code == b.code
            }
            this.result = new he;
            var c = this.D().l.Fl,
                d = c.Vo(),
                e = c.Ji();
            c.Ov(a, e, b);
            if (3 > e.g) return this.result;
            d.add(e);
            for (e = d.iterator(); e.P();) {
                var f = e.next();
                c.Vt(f, this.ij)
            }
            a = this.pop(a, d);
            d = [];
            e = 0;
            for (f = c.Ut(this.ij, b).iterator(); f.P();) {
                for (var g = f.next(), h = [], k = 0, l = 0, r = g.iterator(); r.P();) {
                    var p = r.next(),
                        m = p.client;
                    m.sb > k && (k = m.sb);
                    p.depth > l && (l = p.depth)
                }
                k = .1 + .1 * k + .075 * l;
                l = 0;
                for (g = g.iterator(); g.P();) r = g.next(), p = r.client, p.hc = k + .1 * e + .1 * l++, p.sb = a++, this.disconnect(r), p = this.result.ah,
                    p.g == p.s && p.M(), p.f[p.g++] = r, h.push(r);
                ++e;
                d.push(h)
            }
            c.complete();
            this.D().l.trim();
            this.D().l.zg();
            a = this.result.me.g + this.result.ah.g;
            c = 1;
            5 < a && (c = Na.map(a, 5, 40, 1, .5), .5 > c && (c = .5));
            for (a = this.result.me.iterator(); a.P();) d = a.next(), d = d.client, d.hc *= c;
            for (a = this.result.ah.iterator(); a.P();) d = a.next(), d = d.client, d.hc *= c;
            return this.result
        },
        pop: function(a, b) {
            function c(b) {
                for (var c = null, d, e = 0, f = b.g; e < f;)
                    for (d = e++, d = b.f[d], d.ea.Z = !1, d = d.ea.ca; null != d;) d.node.Z = !1, null == c && d.node.aa == a && (c = d.node.aa),
                        d = d.next;
                return c
            }
            for (var d = this.D().l.La, e = b.iterator(); e.P();) {
                var f = e.next();
                for (f = f.iterator(); f.P();) {
                    var g = f.next();
                    g.C.gf = !0
                }
            }
            var h = this.D().l.Ra;
            f = h.f;
            g = 0;
            for (h = h.g; g < h;) e = g++, e = f[e], F.Aa(e.client, Fa).sb = 0, e.depth = 0;
            for (e = b.iterator(); e.P();) {
                f = e.next();
                h = c(f);
                var k = 1;
                d.Ns(!0, h.ea, function(a, b) {
                    a = a.aa;
                    if (b) return a.C.gf;
                    b = a.client;
                    b.sb = k;
                    b.hc = .1 + .1 * k;
                    k += 1;
                    return !0
                })
            }
            h = new Lc;
            d.clearMarks();
            for (e = b.iterator(); e.P();)
                for (f = e.next(), f = f.iterator(); f.P();) g = f.next(), g.C.gf && (h.s == h.g && h.M(), h.f[(h.g++ +
                    h.ma) % h.s] = g, g.ea.Z = !0, g.depth = 0);
            for (d = 0; 0 < h.g;) {
                if (1E4 < d++) throw n.B("bail out");
                f = h.f[h.ma++];
                h.ma == h.s && (h.ma = 0);
                h.g--;
                g = F.Aa(f.client, Fa);
                for (var l = f.ea.ca; null != l;) l.node.aa.C.gf || (e = l.node.aa.client, e.sb < g.sb && (e.sb = g.sb, e.hc = g.hc, 0 == l.node.aa.depth && (l.node.aa.depth = f.depth + 1), e = l.node.aa, h.s == h.g && h.M(), h.f[(h.g++ + h.ma) % h.s] = e)), l = l.next
            }
            h = this.result.me;
            h.g = 0;
            for (e = b.iterator(); e.P();)
                for (f = e.next(), f = f.iterator(); f.P();) g = f.next(), this.disconnect(g), h = this.result.me, h.g == h.s && h.M(), h.f[h.g++] =
                    g, this.ij.contains(g) && this.ij.remove(g);
            return k
        },
        disconnect: function(a) {
            a.l.uo(a)
        },
        j: ad
    });
    he.__name__ = "114";
    he.prototype = {
        j: he
    };
    D.__name__ = "115";
    D.play = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = !1);
        null == b && (b = !1);
        t.te && ja.Dc().play(a, b, c, d)
    };
    D.stop = function(a) {
        ja.Dc().stop(a)
    };
    ge.__name__ = "116";
    ge.prototype = {
        j: ge
    };
    $b.__name__ = "117";
    $b.G = B;
    $b.prototype = u(B.prototype, {
        update: function(a) {
            B.prototype.update.call(this, a);
            this.time > this.Ai && (a = this.Og, this.Og = null, this.L(), a())
        },
        j: $b
    });
    I.__name__ =
        "118";
    I.G = O;
    I.prototype = u(O.prototype, {
        Bb: function() {
            return ka.yb
        },
        handle: function(a) {
            O.prototype.handle.call(this, a);
            switch (a.type) {
                case 1:
                    this.Cf();
                    this.Yc();
                    break;
                case 5:
                    this.he(a.source.name.replace(/_button/, "")), a.i |= 3
            }
        },
        nb: function() {
            O.prototype.nb.call(this);
            this.pf();
            this.Jm();
            this.Cf();
            this.Yc()
        },
        sc: function() {
            O.prototype.sc.call(this);
            this.Rc(!1)
        },
        ob: function() {
            O.prototype.ob.call(this);
            this.Mh || this.Rc(!0)
        },
        Xe: function() {
            O.prototype.Xe.call(this)
        },
        Yd: function() {
            var a = [4, 11, 12, 9, 10, 7, 8,
                3
            ];
            a.push(16);
            return a
        },
        Li: function() {
            return this.Bb().window.nc()
        },
        Xo: function() {
            return xc
        },
        Rc: function(a) {
            for (var b = 0, c = this.buttons; b < c.length;) {
                var d = c[b];
                ++b;
                d.Rb(a)
            }
        },
        he: function() {},
        Yc: function() {},
        pf: function() {
            this.Bb().jc(3);
            this.Bb().jc(11, 12);
            this.Bb().jc(9, 10);
            this.Bb().jc(7, 8)
        },
        Bk: function(a, b) {
            b.remove();
            b = new mb(this.group, b);
            b.name = a;
            this.W(b);
            this.buttons.push(b)
        },
        translate: function(a) {
            return Z.translate(a)
        },
        Jm: function() {
            if (null != this.Mp && (null == this.group || this.group.Kb() != this.content)) {
                null ==
                    I.json && (I.json = JSON.parse(l.getData(4)));
                for (var a = function(a, b) {
                        b.ba(Object.prototype.hasOwnProperty.call(a, "x") ? N.$(a, "x") : 0);
                        b.ga(Object.prototype.hasOwnProperty.call(a, "y") ? N.$(a, "y") : 0)
                    }, b = function(a, b) {
                        Object.prototype.hasOwnProperty.call(a, "s") ? b.ib(N.$(a, "s")) : (Object.prototype.hasOwnProperty.call(a, "sx") && b.Uh(N.$(a, "sx")), Object.prototype.hasOwnProperty.call(a, "sy") && b.Vh(N.$(a, "sy")))
                    }, c = 0, d = N.$(I.json, this.Mp); c < d.length;) {
                    var e = d[c];
                    ++c;
                    var f = N.$(e, "texture");
                    if (null != f) {
                        if ("placeholder" ==
                            f) {
                            f = new ia(null, this.group);
                            f.node.name = N.$(e, "frame");
                            a(e, f);
                            b(e, f);
                            continue
                        }
                        var g = f + ".png";
                        g = l.td(g);
                        0 > g && (g = f + ".jpg", g = l.td(f + ".png"));
                        f = N.$(e, "frame");
                        if (null != f && null == ea.nc(g, f)) continue;
                        g = new ca(this.group, g, f);
                        g.node.name = f;
                        a(e, g);
                        b(e, g);
                        f = N.$(e, "id");
                        null != f && (new M("_button$", "")).match(f) && this.Bk(f, g)
                    }
                    null != N.$(e, "text") && (f = l.td("bmf/" + z.va(N.$(e, "font")) + ".png"), f = new db(this.group, f), f.node.name = N.$(e, "id"), a(e, f), f.Km(N.$(e, "w"), N.$(e, "h")), f.Th(N.$(e, "size")), f.ya(f.node.name), f.Yw(Object.prototype.hasOwnProperty.call(e,
                        "align") ? N.$(e, "align") : -1))
                }
                this.content.appendChild(this.group)
            }
        },
        Bc: function() {
            var a = this.Li(),
                b = a.b,
                c = a.a,
                d = b - 0,
                e = c - 0,
                f = d / .5625,
                g = e / 1,
                h = new H;
            a = h;
            a.b = 0;
            a.a = 0;
            if (f <= g) return a.c = a.b + d, a.d = a.a + f, h = 0 + (e - (a.d - a.a)) / 2, d = a.d - a.a, a.a = h, a.d = h + d, d = a.b, e = a.a, f = a.c, g = a.d, h = new H, h.b = d, h.a = e, h.c = f, h.d = g, b = h, b.a = 0, b.d = a.a, d = a.b, e = a.a, f = a.c, g = a.d, h = new H, h.b = d, h.a = e, h.c = f, h.d = g, h.a = a.d, h.d = c, [b, a, h];
            a.c = a.b + .5625 * g;
            a.d = a.a + e;
            h = 0 + (d - (a.c - a.b)) / 2;
            d = a.c - a.b;
            a.b = h;
            a.c = h + d;
            d = a.b;
            e = a.a;
            f = a.c;
            g = a.d;
            h = new H;
            h.b = d;
            h.a = e;
            h.c = f;
            h.d = g;
            c = h;
            c.b = 0;
            d = c.c = a.b;
            e = a.a;
            f = a.c;
            g = a.d;
            h = new H;
            h.b = d;
            h.a = e;
            h.c = f;
            h.d = g;
            h.b = a.c;
            h.c = b;
            return [c, a, h]
        },
        Cf: function() {
            this.Zi = this.Bc();
            var a = this.Zi[1];
            this.group.ba(a.b);
            this.group.ga(a.a);
            this.group.ib((a.d - a.a) / 1280);
            this.Yt()
        },
        ya: function(a, b) {
            var c = this.group.Vd(a);
            null != c && (c.ya(z.va(b)), c.yr(), this.Gr.v[a] = c);
            return c
        },
        Gb: function(a, b) {
            return this.ya(a, Z.translate(b))
        },
        Qh: function(a, b) {
            this.kr(a, Z.translate(b))
        },
        kr: function(a, b) {
            for (var c = 0, d = this.buttons.length; c < d;) {
                var e = c++;
                this.buttons[e].name == a && this.buttons[e].jx(b, 7)
            }
        },
        Cb: function(a) {
            return Gd.Cb(a, " ")
        },
        Io: function(a) {
            return Gd.gy(a)
        },
        gn: function(a, b) {
            function c(a) {
                return W.Ab(b, function(b) {
                    return b == a
                })
            }
            null == b && (b = []);
            for (var d = W.filter(this.Gr, function(b) {
                    return b.Oa.id == a ? !c(b.node.name) : !1
                }), e = 1E3, f = 0; f < d.length;) {
                var g = d[f];
                ++f;
                g = g.ra.size;
                e >= g && (e = g)
            }
            if (1E3 != e)
                for (f = 0; f < d.length;) g = d[f], ++f, g.Th(e)
        },
        ty: function() {
            mb.uy(this.buttons)
        },
        Yt: function() {
            var a = this.Li(),
                b = I.jh;
            b.ba(0);
            b.ga(0);
            b.Kj(a.b);
            b.Ij(a.a)
        },
        cv: function() {
            var a = window.document.createElement("canvas"),
                b = a.width = 720,
                c = a.height = 1280,
                d = a.getContext("2d", null),
                e = d.createLinearGradient(0, 0, 0, c);
            e.addColorStop(0, "#1c5bfc");
            e.addColorStop(1, "#5dddff");
            d.fillStyle = e;
            d.fillRect(0, 0, b, c);
            d.fill();
            this.Bb().Na.createTexture(65536, a);
            I.jh = new ca(null, 65536);
            F.Aa(O.Ff().Vd("bg"), ia).appendChild(I.jh)
        },
        Mn: function() {
            null == this.qd && (this.qd = I.jh.clone(), this.qd.wr(this.sd));
            var a = this.Li();
            this.qd.ba(0);
            this.qd.ga(0);
            this.qd.Kj(a.b);
            this.qd.Ij(a.a)
        },
        Wq: function() {
            null != this.qd && this.qd.o();
            this.qd = null
        },
        j: I
    });
    $c.__name__ = "119";
    $c.G = I;
    $c.prototype = u(I.prototype, {
        nb: function() {
            I.prototype.nb.call(this);
            var a = ra.get(this.ac.Sc, "won"),
                b = ra.get(this.ac.Sc, "score"),
                c = b > t.$d;
            c && (t.$d = b, t.save());
            this.Gb("title", a ? w.i0 : w.i19);
            var d = this.ya("highscore", c ? this.translate(w.i10) : this.Cb(t.$d));
            R.stop();
            c && D.play(D.ms);
            a ? D.play(D.ls) : D.play(D.ks);
            c || (d.re(11), d.qa(.3), 0 == t.$d && d.na(!1));
            this.ya("score", this.Cb(b));
            this.Gb("bubbles_cleared_label", w.i23);
            this.Gb("balls_shot_label",
                w.i24);
            this.Gb("hit_ratio_label", w.i14);
            this.Gb("largest_group_label", w.i13);
            this.Gb("play_time_label", w.i6);
            a = this.ac.Sc;
            this.ya("bubbles_cleared_val", ra.get(a, "bubblesCleared"));
            this.ya("balls_shot_val", ra.get(a, "ballsShot"));
            this.ya("hit_ratio_val", z.va(ra.get(a, "hitRatio")) + "%");
            this.ya("largest_group_val", ra.get(a, "largestGroup"));
            this.ya("play_time_val", this.Io(ra.get(a, "playTime")));
            this.Qh("continue_button", w.i20);
            this.gn(11, ["score"])
        },
        he: function(a) {
            "continue" == a && this.ic(Wa, !1)
        },
        j: $c
    });
    qb.__name__ = "11A";
    qb.G = I;
    qb.prototype = u(I.prototype, {
        Sw: function() {
            Ja.Ia.L();
            this.tp()
        },
        nb: function() {
            I.prototype.nb.call(this);
            this.tp()
        },
        he: function(a) {
            I.prototype.he.call(this, a);
            "pause" == a && this.ic(Yb, !0)
        },
        ob: function() {
            I.prototype.ob.call(this);
            this.Mh || (Ja.Ia.resume(), Aa.If() ? R.play() : R.nw())
        },
        sc: function() {
            I.prototype.sc.call(this);
            Ja.Ia.pause()
        },
        handle: function(a) {
            I.prototype.handle.call(this, a);
            switch (a.type) {
                case 13:
                case 14:
                    this.cm()
            }
        },
        pf: function() {
            I.prototype.pf.call(this);
            this.Bb().jc(1);
            this.Bb().jc(0);
            this.Bb().jc(15);
            this.Bb().jc(14);
            this.Bb().jc(2);
            this.Bb().jc(6)
        },
        Yd: function() {
            var a = [15, 14, 1, 0, 2, 6];
            a.push(R.Gf());
            return I.prototype.Yd.call(this).concat(a)
        },
        tp: function() {
            var a = new Ja(this, fa.Dw);
            this.content.node.appendChild(a.fc);
            this.W(a)
        },
        cm: function() {
            function a() {
                na.muted || ja.Dc().qe(1);
                b.ic($c, !1, m)
            }
            var b = this,
                c = Ja.Ia,
                d = c.la.Xa,
                e = d.jj,
                f = d.vh,
                g = d.Ju(),
                h = d.ul,
                k = d.le,
                l = c.la.Wh;
            c = c.la.dd;
            var n = t.Xa;
            n.Lg += e;
            if (0 == n.Ie) var p = f;
            else p = n.Ie, p = f < p ? f : p;
            n.Ie = p;
            n.le += k;
            n.Hi++;
            l && n.Ii++;
            d = d.Nl;
            n.Tg += d[1];
            n.Ug += d[2];
            n.Yg += d[3];
            n.Xg += d[4];
            n.Vg += d[5];
            n.Wg += d[6];
            t.save();
            var m = ra.Df(["bubblesCleared", e, "ballsShot", f, "hitRatio", g, "largestGroup", h, "playTime", k, "won", l, "score", c]);
            ja.Dc().qe(0);
            d = l ? Q.Gv() : Q.Op("dead");
            p = Q.ly(c);
            e = tc.Cx();
            Promise.all([d, p, e]).then(a, a)
        },
        j: qb
    });
    Wa.__name__ = "11B";
    Wa.G = I;
    Wa.prototype = u(I.prototype, {
        nb: function() {
            var a = this;
            I.prototype.nb.call(this);
            0 == t.$d ? (this.group.Vd("highscore_label").na(!1), this.group.Vd("highscore_value").na(!1)) : (this.Gb("highscore_label",
                w.i15), this.ya("highscore_value", this.Cb(t.$d)));
            this.Qh("play_button", w.i7);
            ea.Ab(65535) ? this.vp() : de.load(function(b) {
                a.Bb().Na.createTexture(65535, b);
                a.vp()
            });
            R.stop()
        },
        ob: function() {
            I.prototype.ob.call(this);
            this.Mh || ha.Sa().ta(E(this, this.Ic))
        },
        sc: function() {
            I.prototype.sc.call(this);
            ha.Sa().detach(E(this, this.Ic))
        },
        he: function(a) {
            "play" == a ? (this.Rc(!1), Q.Fv().then(E(this, this.Bo), E(this, this.Bo))) : "statistics" == a && this.ic(Zc, !1)
        },
        Yc: function() {
            I.prototype.Yc.call(this);
            this.Pn()
        },
        Bo: function() {
            this.ic(qb, !1)
        },
        Ic: function(a) {
            if (1 == a.type && (Wa.Tn || ((J.tl() || J.Cp()) && J.resume(function() {}), Wa.Tn = !0), null != this.Xf)) {
                var b = this.Xf.ih(0),
                    c = a.y,
                    d = new v;
                d.b = a.x;
                d.a = c;
                b.fb(d) && de.click()
            }
        },
        vp: function() {
            this.Xf = this.group.Vd("more_games_graphic");
            this.Xf.appendChild(new ca(null, 65535));
            this.Pn()
        },
        Pn: function() {
            if (null != this.Xf && (this.Xf.ih(0).ga(0), 0 < this.Zi[2].a)) {
                var a = this.Zi[2];
                this.Xf.ih(0).ga((a.d - a.a) / this.group.Ca / 2)
            }
        },
        j: Wa
    });
    xc.__name__ = "11C";
    xc.G = kb;
    xc.prototype = u(kb.prototype, {
        Mf: function() {
            return !1
        },
        ob: function() {
            kb.prototype.ob.call(this);
            this.total = this.$f
        },
        update: function(a) {
            kb.prototype.update.call(this, a);
            !this.Mm && 1 < this.time && (this.Mm = !0, this.mn());
            !this.Nm && 3 < this.time && (this.Nm = !0, this.mn())
        },
        dg: function() {
            this.mn()
        },
        mn: function() {
            if (this.Mm) {
                var a = Z.translate(w.i12);
                this.Nm && (a = "" + Math.round(100 * (1 - this.$f / this.total)) + "%");
                var b = this.Lk(Wa);
                null != b && b.kr("play_button", a)
            }
        },
        j: xc
    });
    Zb.__name__ = "11D";
    Zb.G = I;
    Zb.prototype = u(I.prototype, {
        Yd: function() {
            return [11, 12]
        },
        pf: function() {
            this.Bb().jc(11,
                12)
        },
        nb: function() {
            var a = this;
            I.prototype.nb.call(this);
            this.jo = Wa;
            var b = O.Bu(this.jo);
            this.Aj = b.length;
            for (var c = 0; c < b.length;) {
                var d = b[c];
                ++c;
                l.ag(d, E(this, this.dg))
            }
            var e = Array(b.length);
            c = 0;
            for (var f = b.length; c < f;) d = c++, e[d] = l.Ec(b[d]);
            this.km = e;
            W.Qf(this.km, function(b) {
                a.ud().load(b)
            });
            W.Qf(this.km, function(b) {
                a.ud().Lq(b)
            })
        },
        update: function(a) {
            var b = this;
            I.prototype.update.call(this, a);
            if (!(.25 > this.time || this.timeout))
                if (this.timeout = !0, 0 == this.Aj) this.Ed();
                else {
                    this.Af();
                    var c = new Tb(33);
                    c.Oh = function() {
                        b.fill();
                        3 == b.state && 0 == b.Aj && (c.stop(), b.Ed())
                    }
                }
        },
        Jm: function() {},
        Af: function() {
            I.prototype.Jm.call(this);
            this.fill();
            this.Cf()
        },
        fill: function() {
            this.Gb("loading", w.i12);
            this.ya("percent", "" + Math.round(100 * this.ud().Ki(this.km)) + "%")
        },
        dg: function() {
            this.Aj--
        },
        Ed: function() {
            this.Aj = -1;
            R.X();
            if (!od.yv()) {
                for (var a = [20, 19, 18, 17], b = [], c = 0, d = l.Au(); c < d.length;) {
                    var e = d[c];
                    ++c;
                    0 > a.indexOf(e) && b.push(e)
                }
                d = b;
                e = Array(d.length);
                b = 0;
                for (c = d.length; b < c;) a = b++, e[a] = this.ud().load(l.Ec(d[a]));
                d = l.Ec(R.Gf());
                this.ud().load(d);
                b = 0;
                for (c = l.wu(); b < c.length;) a = c[b], ++b, a != d && this.ud().load(a)
            }
            this.next()
        },
        next: function() {
            this.ic(this.jo, !1)
        },
        j: Zb
    });
    Yb.__name__ = "11E";
    Yb.G = I;
    Yb.prototype = u(I.prototype, {
        nb: function() {
            I.prototype.nb.call(this);
            this.Es();
            this.Fo();
            this.Gb("title", w.i8);
            this.Qh("resume_button", w.i2);
            this.Qh("restart_button", w.i3);
            this.Qh("main_menu_button", w.i11);
            this.Hm();
            this.gn(11);
            this.ty()
        },
        Bk: function(a, b) {
            if (!Aa.If()) {
                if ("sound_button" == a) {
                    b.na(!1);
                    return
                }
                "colorblind_button" ==
                a && b.ba(b.xa + 100)
            }
            I.prototype.Bk.call(this, a, b)
        },
        ob: function() {
            var a = this;
            I.prototype.ob.call(this);
            if (!this.Mh) {
                this.Rc(!1);
                var b = function() {
                    a.Rc(!0)
                };
                Q.pause().then(b, b)
            }
        },
        he: function(a) {
            var b = this;
            I.prototype.he.call(this, a);
            switch (a) {
                case "colorblind":
                    t.Ac = !t.Ac;
                    t.save();
                    this.Hm();
                    Oa.Ac = t.Ac;
                    for (a = Ja.Ia.l.Ra.iterator(); a.P();) a.next().client.hq(null, 0, 0);
                    break;
                case "main_menu":
                    this.Rc(!1);
                    Q.Dv().then(E(this, this.gp), E(this, this.gp));
                    break;
                case "restart":
                    this.Rc(!1);
                    a = function() {
                        b.Lk(qb).Sw();
                        b.finish(ra.Df(["restart", !0]))
                    };
                    Q.Ev().then(a, a);
                    break;
                case "resume":
                    this.Rc(!1);
                    a = function() {
                        b.finish()
                    };
                    Q.resume().then(a);
                    break;
                case "sound":
                    t.te = !t.te, t.save(), this.Hm(), this.my()
            }
        },
        Yc: function() {
            I.prototype.Yc.call(this);
            this.Fo()
        },
        Mf: function() {
            return !1
        },
        my: function() {
            this.Rc(!1);
            var a = E(this, this.Rc);
            Tb.Ai(function() {
                a(!0)
            }, 250);
            Q.Ey(t.zd ? 1 : 0, t.te ? 1 : 0)
        },
        gp: function() {
            Ja.Ia.L();
            this.ic(Wa, !1)
        },
        Hm: function() {
            if (Aa.If()) {
                var a = t.te ? 1 : .5;
                W.find(this.buttons, function(a) {
                    return "sound_button" == a.name
                }).qa(a)
            }
            a =
                t.Ac ? 1 : .5;
            W.find(this.buttons, function(a) {
                return "colorblind_button" == a.name
            }).qa(a)
        },
        Es: function() {
            this.qf = I.jh.clone();
            this.qf.wr(this.Jg)
        },
        Fo: function() {
            if (null != this.qf) {
                var a = this.Li();
                this.qf.ba(0);
                this.qf.ga(0);
                this.qf.Kj(a.b);
                this.qf.Ij(a.a)
            }
        },
        j: Yb
    });
    Zc.__name__ = "11F";
    Zc.G = I;
    Zc.prototype = u(I.prototype, {
        nb: function() {
            I.prototype.nb.call(this);
            this.fill()
        },
        pf: function() {
            I.prototype.pf.call(this);
            this.Bb().jc(1)
        },
        Yd: function() {
            return I.prototype.Yd.call(this).concat([1])
        },
        he: function(a) {
            "back" ==
            a && this.ic(Wa, !1)
        },
        fill: function() {
            this.Gb("title", w.i1);
            this.Gb("bubbles_cleared_label", w.i23);
            this.Gb("games_played_label", w.i17);
            this.Gb("games_won_label", w.i16);
            this.Gb("fewest_balls_label", w.i18);
            this.Gb("play_time_label", w.i5);
            var a = t.Xa;
            this.ya("bubbles_cleared_val", this.Cb(a.Lg));
            this.ya("games_played_val", this.Cb(a.Hi));
            this.ya("games_won_val", this.Cb(a.Ii));
            this.ya("fewest_balls_val", 0 == a.Ie ? "-" : this.Cb(a.Ie));
            this.ya("play_time_val", this.Io(a.le));
            this.ya("yellow_val", this.Cb(a.Yg));
            this.ya("red_val",
                this.Cb(a.Wg));
            this.ya("turquoise_val", this.Cb(a.Xg));
            this.ya("purple_val", this.Cb(a.Vg));
            this.ya("blue_val", this.Cb(a.Tg));
            this.ya("green_val", this.Cb(a.Ug));
            this.gn(11)
        },
        j: Zc
    });
    wc.__name__ = "120";
    wc.__interfaces__ = [Ib];
    wc.prototype = {
        Tc: function() {
            return .5
        },
        yh: function(a, b) {
            F.Aa(a, I).Mn();
            a.sd.qa(0);
            F.Aa(b, I).Mn();
            b.sd.qa(1);
            b.canvas.na(!1);
            this.jp = !1
        },
        oj: function(a, b, c, d) {
            .5 > d ? (c = Na.map(d, 0, .5, 0, 1), a.sd.qa(da.vw()(c))) : (this.jp || (this.jp = !0, a.canvas.na(!1), b.canvas.na(!0)), c = Na.map(d, .5, 1, 0, 1), b.sd.qa(1 -
                da.Ih()(c)))
        },
        mj: function(a, b) {
            F.Aa(a, I).Wq();
            F.Aa(b, I).Wq()
        },
        j: wc
    };
    Yc.__name__ = "121";
    Yc.__interfaces__ = [Ib];
    Yc.prototype = {
        Tc: function() {
            return .25
        },
        yh: function(a, b) {
            b.canvas.qa(0)
        },
        oj: function(a, b, c, d) {
            b.canvas.qa(d)
        },
        mj: function() {},
        j: Yc
    };
    Xc.__name__ = "122";
    Xc.__interfaces__ = [Ib];
    Xc.prototype = {
        Tc: function() {
            return .25
        },
        yh: function() {},
        oj: function(a, b, c, d) {
            a.canvas.qa(1 - d)
        },
        mj: function() {},
        j: Xc
    };
    Va.An |= 0;
    "undefined" != typeof performance && "function" == typeof performance.now && (A.now = performance.now.bind(performance));
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    });
    String.prototype.j = String;
    String.__name__ = "123";
    Array.__name__ = "124";
    Date.prototype.j = Date;
    Date.__name__ = "125";
    var vf = {},
        tf = {},
        uf = Number,
        sf = Boolean,
        of = {},
        wf = {};
    F.Bs = {}.toString;
    B.Dn = 0;
    fa.language = "en";
    fa.Rw = "res";
    fa.Rn = [];
    fa.Dw = 16777215 * Math.random() | 0;
    tc.ek = !1;
    t.zd = !0;
    t.te = !0;
    t.$d = 0;
    t.Xa = new $e;
    t.Ac = !1;
    t.Qb = -1;
    t.th = !0;
    ka.TYPE =
        1;
    G.Ag = new Ta;
    G.ig = new Ta;
    G.time = 0;
    G.Go = 0;
    G.Jo = 60;
    G.Wp = -1;
    G.xt = .016666666666666666;
    G.Yh = 1;
    G.Ql = 0;
    G.Kp = 0;
    G.Se = 0;
    G.Qd = 0;
    G.first = !0;
    x.Element = 0;
    x.ds = 1;
    x.$r = 2;
    x.Comment = 3;
    x.cs = 4;
    x.ProcessingInstruction = 5;
    x.Document = 6;
    ab.count = 0;
    rc.Xm = new P;
    Vb.Qc = .2;
    Vb.Gx = !1;
    Vb.ue = 500;
    Vb.Kv = 3;
    Vb.enabled = !0;
    Vb.T = 3;
    K.ky = "stick";
    K.Mc = Vb;
    K.Us = 0;
    K.Ex = !1;
    K.Xs = !0;
    K.Rv = 80;
    K.si = -1;
    K.Hf = 33;
    K.Ws = "destroy";
    K.Xn = 80;
    K.ip = !1;
    K.Ts = .35;
    K.jy = "stick";
    K.Vs = "reload";
    K.Ss = "none";
    lf.Ak = Array(7);
    pc.as = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    pc.Zr = sa.lj(pc.as);
    Rb.el = new DataView(new ArrayBuffer(8));
    yb.Co = function() {
        var a = new Ia;
        a.v.lt = "<";
        a.v.gt = ">";
        a.v.amp = "&";
        a.v.quot = '"';
        a.v.apos = "'";
        return a
    }(this);
    Qb.Yn = 0;
    l.kk = "res";
    l.$i = new $a;
    l.ee = new $a;
    l.Zn = [];
    l.Bh = new $a;
    l.Ux = "txt csv xml json yaml properties js".split(" ");
    l.Xu = ["png", "jpg"];
    l.Ph = new Ia;
    l.zi = new $a;
    l.locked = new $a;
    l.mf = "tape.png sprites.png pop.png meta.png layout.json lang/strings_{language}.txt clouds.png bmf/text_3.png bmf/text_3.fnt bmf/text_2.png bmf/text_2.fnt bmf/text_1.png bmf/text_1.fnt bmf/profont.png bmf/digits_b.png bmf/digits_a.png audio/{audio}/sounds.{audio} audio/{audio}/music_4.{audio} audio/{audio}/music_3.{audio} audio/{audio}/music_2.{audio} audio/{audio}/music_1.{audio}".split(" ");
    l.ww = [4, 5, 11, 12, 13];
    l.Qw = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    nc.state = new Ia;
    ja.enabled = !0;
    J.ni = void 0;
    J.active = !1;
    J.yl = !1;
    Pb.No = !0;
    V.Bn = 0;
    V.Dg = 0;
    V.Cn = 10;
    Y.gi = window.devicePixelRatio;
    Y.$c = 96;
    Y.Ak = 0;
    Kb.En = new Kb(Ya.i1);
    pa.bs = 1;
    ma.qg = new ob;
    ma.Hx = new ob;
    ua.Xr = 0;
    ua.Wr = 0;
    ua.qo = 0;
    ua.fq = 0;
    ua.eq = 0;
    ub.$x = function() {
        var a = new Dc;
        Ec.ff(a);
        return a
    }(this);
    ub.ay = function() {
        var a = new Dc;
        Ec.ff(a);
        return a
    }(this);
    ba.count = 0;
    ca.ae = 0;
    ia.ae = 0;
    db.ae = 0;
    aa.Sm = new ob;
    ea.Hr = 0;
    ea.Xh = new $a;
    ta.zm = new Ia;
    L.count = 0;
    Hb.count = 0;
    Gb.count = 0;
    Fb.count = 0;
    bc.xs = "#5eddff";
    Fa.Ch = 0;
    Oa.Ac = !1;
    bf.qw = [0, 10, 10, 25, 50, 100, 250, 500, 1E3];
    sb.count = 0;
    rb.Xj = .95;
    R.Zc = !1;
    R.id = -1;
    Eb.lp = 0;
    D.es = 1E3;
    D.fs = 1001;
    D.Fn = 1002;
    D.gs = 1003;
    D.Gn = 1004;
    D.hs = 1005;
    D.js = 1006;
    D.ks = 1007;
    D.ls = 1008;
    D.ms = 1009;
    D.ns = 1010;
    D.os = 1011;
    D.ps = 1012;
    D.Hn = 1013;
    D.qs = 1014;
    D.rs = 1015;
    D.ss = 1016;
    D.ts = 1017;
    D.us = 1018;
    D.vs = 1019;
    D.ws = 1020;
    D.Yj = 1021;
    Wa.Tn = !1
})("undefined" != typeof exports ? exports : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this, "undefined" !=
    typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
//# sourceMappingURL=smartybubbles-min.js.map
