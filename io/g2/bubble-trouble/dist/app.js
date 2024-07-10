!function(e) {
    function t(t) {
        for (var i, r, o = t[0], l = t[1], h = t[2], c = 0, d = []; c < o.length; c++)
            r = o[c],
            Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]),
            s[r] = 0;
        for (i in l)
            Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        for (_ && _(t); d.length; )
            d.shift()();
        return n.push.apply(n, h || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < n.length; t++) {
            for (var a = n[t], i = !0, o = 1; o < a.length; o++) {
                var l = a[o];
                0 !== s[l] && (i = !1)
            }
            i && (n.splice(t--, 1),
            e = r(r.s = a[0]))
        }
        return e
    }
    var i = {}
      , s = {
        1: 0
    }
      , n = [];
    function r(t) {
        if (i[t])
            return i[t].exports;
        var a = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.m = e,
    r.c = i,
    r.d = function(e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (r.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "";
    var o = window.webpackJsonp = window.webpackJsonp || []
      , l = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var h = 0; h < o.length; h++)
        t(o[h]);
    var _ = l;
    n.push([457, 0, 3]),
    a()
}({
    0: function(e, t, a) {
        "use strict";
        var i = a(44)
          , s = a.n(i)
          , n = a(5)
          , r = a.n(n)
          , o = a(6)
          , l = a.n(o)
          , h = a(16)
          , _ = (a(1),
        function() {
            function e() {
                r()(this, e),
                this.shortName = "",
                this.saveKey = "",
                this.gameVersion = 0,
                this.name = "",
                this.containerName = "",
                this.gameWidth = 0,
                this.gameHeight = 0,
                this.gameAreaMin = h.a.ZERO,
                this.gameAreaMax = h.a.ZERO,
                this.gameAreaSize = h.a.ZERO,
                this.phyStepMax = 0,
                this.fontNames = {
                    MENU: "undefined_menu",
                    LVL_MSG: "undefined_msg",
                    LVL_NUM: "undefined_lvlnum",
                    SCORE: "undefined_score",
                    FREEZE: "undefined_freeze",
                    SLO_MO: "undefined_slow",
                    COMBOBONUS: "undefined_combobonus",
                    TIME_PTS: "undefined_time_pts"
                },
                this.lazyFontNames = {
                    RETENTION_XP: "undefined_retention_xp"
                },
                this.spriteScale = 0,
                this.spriteKey = "",
                this.spriteAtlasJSON = "",
                this.spriteLocation = "",
                this.editorSpriteKey = "skEditor",
                this.editorAtlasJSON = "assets/editor/editor_textures.json",
                this.editorSpriteLocation = "assets/editor",
                this.lazySpriteKey = "lazySk",
                this.lazyAtlasJSON = "",
                this.frameNames = {},
                this.animations = [],
                this.lazyAnimations = [],
                this.playerSpeed = 0,
                this.playerStartG = 0,
                this.playerLadderSpeed = 7,
                this.playerLadderSlideSpeed = 35,
                this.playerSpeedUp = this.playerSpeed + 5,
                this.playerLadderSpeedUp = this.playerLadderSpeed + 3.5,
                this.playerCollW = 0,
                this.playerCollH = 0,
                this.itemGrav = 0,
                this.timebarP1 = h.a.ZERO,
                this.timebarP2 = h.a.ZERO,
                this.timebarColorBack = 0,
                this.timebarColorBackStroke = 0,
                this.timebarColorFront = 0,
                this.ballSizes = [],
                this.ballBounceDiff = [0, 0, 8, 15, 30, 50],
                this.itemAlive = 0,
                this.itemVanishSpeed = 0,
                this.shieldDissappearTime = 0,
                this.gameUIAreaStroke = 0,
                this.livesVisible = 0
            }
            return l()(e, [{
                key: "init",
                value: function() {
                    return console.error("template not yet defined! code 12321"),
                    this
                }
            }, {
                key: "loaderBeforeGameStarts",
                value: function(e) {}
            }, {
                key: "loaderAfterGameStarts",
                value: function(e) {}
            }, {
                key: "isBT",
                get: function() {
                    return this.shortName == i.GAME_BS1
                }
            }, {
                key: "isBS2",
                get: function() {
                    return this.shortName == i.GAME_BS2
                }
            }, {
                key: "isBS3",
                get: function() {
                    return this.shortName == i.GAME_BS3
                }
            }]),
            e
        }())
          , c = a(10)
          , d = a.n(c)
          , u = a(7)
          , p = a.n(u)
          , m = a(11)
          , y = a.n(m)
          , g = a(12)
          , S = a(18)
          , E = a(2)
          , f = function(e) {
            function t() {
                return r()(this, t),
                d()(this, p()(t).apply(this, arguments))
            }
            return y()(t, e),
            l()(t, [{
                key: "init",
                value: function() {
                    return this.shortName = i.GAME_BS1,
                    this.saveKey = "BubbleTrouble",
                    this.gameVersion = .01,
                    this.name = "Bubble Trouble",
                    this.containerName = "bubble-trouble",
                    this.gameWidth = 700,
                    this.gameHeight = 450,
                    this.gameAreaMin = new h.a(6,1),
                    this.gameAreaMax = new h.a(694,368),
                    this.gameAreaSize = new h.a(this.gameAreaMax.x - this.gameAreaMin.x,this.gameAreaMax.y - this.gameAreaMin.y),
                    this.phyStepMax = 250,
                    this.fontNames = {
                        MENU: "ui_announce",
                        LVL_MSG: "ui_announce",
                        LVL_NUM: "ui_level_num",
                        SCORE: "ui_score"
                    },
                    this.lazyFontNames = {
                        RETENTION_XP: "retention_xp"
                    },
                    this.spriteScale = .5,
                    this.spriteKey = "mySprites",
                    this.spriteAtlasJSON = "assets/bt1/sprites/bt1.json",
                    this.spriteLocation = "assets/bt1/sprites",
                    this.lazyAtlasJSON = "assets/bt1/sprites/bt1_lazy.json",
                    this.frameNames = {
                        mine_digin: [{
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_001.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_002.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_003.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_004.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_005.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_006.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_007.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_008.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_009.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_010.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_011.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_012.png"
                        }, {
                            key: this.spriteKey,
                            frame: "shots/mine_ani/mine_013.png"
                        }],
                        pop: [{
                            key: this.spriteKey,
                            frame: "bubbles/pop_bubble_1.png"
                        }, {
                            key: this.spriteKey,
                            frame: "bubbles/pop_bubble_2.png"
                        }, {
                            key: this.spriteKey,
                            frame: "bubbles/pop_bubble_3.png"
                        }],
                        torch: [{
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_1.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_2.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_3.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_4.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_5.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_6.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_7.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_8.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_9.png"
                        }, {
                            key: this.lazySpriteKey,
                            frame: "ani_torch/torch_10.png"
                        }]
                    },
                    this.animations = [{
                        key: "mine_digin",
                        frames: this.frameNames.mine_digin,
                        frameRate: 20,
                        repeat: 0
                    }, {
                        key: "pop",
                        frames: this.frameNames.pop,
                        frameRate: 30,
                        repeat: 1
                    }],
                    this.lazyAnimations = [{
                        key: "torch_burn",
                        frames: this.frameNames.torch,
                        frameRate: 15,
                        repeat: -1
                    }],
                    this.playerSpeed = 13,
                    this.playerCollW = 20,
                    this.playerCollH = 42,
                    this.itemGrav = 8,
                    this.timebarP1 = new h.a(5,374),
                    this.timebarP2 = new h.a(695,392),
                    this.timebarColorBack = 6645093,
                    this.timebarColorBackStroke = 12698049,
                    this.timebarColorFront = 15010330,
                    this.ballSizes = [0, 5, 10, 20, 30, 40, 50],
                    this.itemAlive = 2,
                    this.itemVanishSpeed = 2,
                    this.shieldDissappearTime = 3,
                    this.gameUIAreaStroke = 12698049,
                    this.livesVisible = 9,
                    this
                }
            }, {
                key: "loaderBeforeGameStarts",
                value: function(e) {
                    e.load.multiatlas(this.spriteKey, this.spriteAtlasJSON, this.spriteLocation),
                    e.load.bitmapFont(this.fontNames.SCORE, "assets/bt1/fonts/ui_score.png", "assets/bt1/fonts/ui_score.fnt"),
                    e.load.bitmapFont(this.fontNames.MENU, "assets/bt1/fonts/ui_announce.png", "assets/bt1/fonts/ui_announce.fnt"),
                    e.load.bitmapFont(this.fontNames.LVL_NUM, "assets/bt1/fonts/ui_level_num.png", "assets/bt1/fonts/ui_level_num.fnt"),
                    e.load.image("main_menu_floor", "assets/bt1/images/main_menu_floor.png"),
                    (S.a.isCordova || E.a.debugLog) && (e.load.image("app_logo_bsa", "assets/bt1/images/app_logo_bsa.png"),
                    e.load.image("download_apple", "assets/bt1/images/app_download_apple.png"),
                    e.load.image("download_google", "assets/bt1/images/app_download_google.png"),
                    e.load.image("fillerad_bsa", "assets/bt1/images/fillerads/app_screenshot_bsa.png"),
                    e.load.image("fillerad_btc", "assets/bt1/images/fillerads/app_screenshot_btc.png"),
                    e.load.image("fillerad_bs2", "assets/bt1/images/fillerads/app_screenshot_bs2.png"),
                    e.load.image("fillerad_bs3", "assets/bt1/images/fillerads/app_screenshot_bs3.png"),
                    e.load.image("app_logo_btc", "assets/bt1/images/fillerads/app_logo_btc.png"),
                    e.load.image("app_logo_bs2", "assets/bt1/images/fillerads/app_logo_bs2.png"),
                    e.load.image("app_logo_bs3", "assets/bt1/images/fillerads/app_logo_bs3.png")),
                    e.load.image("back_lvl_1", "assets/bt1/images/backgrounds/lvl1.jpg")
                }
            }, {
                key: "loaderAfterGameStarts",
                value: function(e) {
                    g.a.preloadSounds(e);
                    for (var t = 2; t <= 22; t++)
                        e.load.image("back_lvl_" + t, "assets/bt1/images/backgrounds/lvl" + t + ".jpg");
                    e.load.multiatlas(this.lazySpriteKey, this.lazyAtlasJSON, this.spriteLocation),
                    e.load.json("all_tasks", "assets/bt1/retention/all_tasks_bt1.json"),
                    e.load.bitmapFont(this.lazyFontNames.RETENTION_XP, "assets/bt1/fonts/retention_xp.png", "assets/bt1/fonts/retention_xp.fnt")
                }
            }]),
            t
        }(_)
          , T = function(e) {
            function t() {
                return r()(this, t),
                d()(this, p()(t).apply(this, arguments))
            }
            return y()(t, e),
            l()(t, [{
                key: "init",
                value: function() {
                    this.shortName = i.GAME_BS2,
                    this.saveKey = "BubbleStruggle2",
                    this.gameVersion = .01,
                    this.name = "Bubble Struggle 2",
                    this.containerName = "bubble-struggle2",
                    this.gameWidth = 640,
                    this.gameHeight = 480,
                    this.gameAreaMin = new h.a(10,10),
                    this.gameAreaMax = new h.a(630,420),
                    this.gameAreaSize = new h.a(this.gameAreaMax.x - this.gameAreaMin.x,this.gameAreaMax.y - this.gameAreaMin.y),
                    this.phyStepMax = 20,
                    this.fontNames = {
                        MENU: "ui_buttons",
                        LVL_MSG: "ui_buttons",
                        LVL_NUM: "ui_buttons",
                        SCORE: "ui_buttons",
                        FREEZE: "ui_freeze",
                        SLO_MO: "ui_slo_mo",
                        COMBOX: "ui_combox"
                    },
                    this.lazyFontNames = {
                        RETENTION_XP: "retention_xp"
                    },
                    this.spriteScale = 1,
                    this.spriteKey = "mySprites",
                    this.spriteAtlasJSON = "assets/bs2/sprites/bs2.json",
                    this.spriteLocation = "assets/bs2/sprites",
                    this.lazyAtlasJSON = "assets/bs2/sprites/bs2_lazy.json",
                    this.frameNames = {},
                    this.frameNames.walkLeft = [],
                    this.frameNames.walkRight = [];
                    for (var e = 31; e <= 50; e++)
                        this.frameNames.walkLeft.push({
                            key: this.spriteKey,
                            frame: "char/walk/left_" + e + ".png"
                        }),
                        this.frameNames.walkRight.push({
                            key: this.spriteKey,
                            frame: "char/walk/right_" + e + ".png"
                        });
                    this.frameNames.idle = [];
                    for (e = 50; e <= 89; e += 3)
                        this.frameNames.idle.push({
                            key: this.spriteKey,
                            frame: "char/idle/idle_" + e + ".png"
                        });
                    this.frameNames.win = [];
                    for (e = 20; e <= 50; e++)
                        this.frameNames.win.push({
                            key: this.spriteKey,
                            frame: "char/win/win_" + e + ".png"
                        });
                    this.frameNames.die = [{
                        key: this.spriteKey,
                        frame: "char/die/die.png"
                    }],
                    this.frameNames.climb = [];
                    for (e = 21; e <= 30; e++)
                        this.frameNames.climb.push({
                            key: this.spriteKey,
                            frame: "char/climb/climb_" + e + ".png"
                        });
                    this.frameNames.climb_on = [];
                    for (e = 30; e <= 45; e++)
                        this.frameNames.climb_on.push({
                            key: this.spriteKey,
                            frame: "char/climb_onoff/climb_onoff_" + e + ".png"
                        });
                    this.frameNames.slide = [{
                        key: this.spriteKey,
                        frame: "char/slide/slide.png"
                    }],
                    this.frameNames.singleShot = [{
                        key: this.spriteKey,
                        frame: "shots/single_frm1.png"
                    }, {
                        key: this.spriteKey,
                        frame: "shots/single_frm2.png"
                    }],
                    this.frameNames.singleShot_p2 = [{
                        key: this.spriteKey,
                        frame: "shots/single_frm1_p2.png"
                    }, {
                        key: this.spriteKey,
                        frame: "shots/single_frm2_p2.png"
                    }],
                    this.frameNames.laser_leaf = [];
                    for (e = 1; e <= 49; e++)
                        this.frameNames.laser_leaf.push({
                            key: this.spriteKey,
                            frame: "shots/laser_leaf/leaf" + e + ".png"
                        });
                    this.frameNames.convbelt = [];
                    for (e = 1; e <= 10; e++)
                        this.frameNames.convbelt.push({
                            key: this.spriteKey,
                            frame: "walls/convbelt/convbelt_" + e + ".png"
                        });
                    this.frameNames.pop = [{
                        key: this.spriteKey,
                        frame: "bubbles/pop_bubble_1.png"
                    }, {
                        key: this.spriteKey,
                        frame: "bubbles/pop_bubble_2.png"
                    }, {
                        key: this.spriteKey,
                        frame: "bubbles/pop_bubble_3.png"
                    }],
                    this.frameNames.teleport_ani = [];
                    for (e = 1; e <= 34; e++)
                        this.frameNames.teleport_ani.push({
                            key: this.lazySpriteKey,
                            frame: "teleport/teleport_" + e + ".png"
                        });
                    return this.frameNames.torch = [{
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_1.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_2.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_3.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_4.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_5.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_6.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_7.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_8.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_9.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_10.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_11.png"
                    }],
                    this.animations = [{
                        key: "walkLeft",
                        frames: this.frameNames.walkLeft,
                        frameRate: 37,
                        repeat: -1
                    }, {
                        key: "walkRight",
                        frames: this.frameNames.walkRight,
                        frameRate: 37,
                        repeat: -1
                    }, {
                        key: "idle",
                        frames: this.frameNames.idle,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "win",
                        frames: this.frameNames.win,
                        frameRate: 45,
                        repeat: 0
                    }, {
                        key: "die",
                        frames: this.frameNames.die,
                        frameRate: 1,
                        repeat: 0
                    }, {
                        key: "climb",
                        frames: this.frameNames.climb,
                        frameRate: 0,
                        repeat: 0
                    }, {
                        key: "climb_on",
                        frames: this.frameNames.climb_on,
                        frameRate: 37,
                        repeat: 0
                    }, {
                        key: "slide",
                        frames: this.frameNames.slide,
                        frameRate: 1,
                        repeat: 0
                    }, {
                        key: "singleShot",
                        frames: this.frameNames.singleShot,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "singleShot_p2",
                        frames: this.frameNames.singleShot_p2,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "laser_leaf",
                        frames: this.frameNames.laser_leaf,
                        frameRate: 30,
                        repeat: 0
                    }, {
                        key: "convbelt",
                        frames: this.frameNames.convbelt,
                        frameRate: 18,
                        repeat: -1
                    }, {
                        key: "pop",
                        frames: this.frameNames.pop,
                        frameRate: 30,
                        repeat: 1
                    }],
                    this.lazyAnimations = [{
                        key: "torch_burn",
                        frames: this.frameNames.torch,
                        frameRate: 15,
                        repeat: -1
                    }, {
                        key: "teleport_ani",
                        frames: this.frameNames.teleport_ani,
                        frameRate: 40,
                        repeat: 0
                    }],
                    this.playerSpeed = 11.5,
                    this.playerStartG = 60,
                    this.playerLadderSpeed = 7,
                    this.playerLadderSlideSpeed = 35,
                    this.playerSpeedUp = this.playerSpeed + 5,
                    this.playerLadderSpeedUp = this.playerLadderSpeed + 3.5,
                    this.playerCollW = 22,
                    this.playerCollH = 42,
                    this.itemGrav = 9,
                    this.timebarP1 = new h.a(10,424),
                    this.timebarP2 = new h.a(630,432),
                    this.timebarColorBack = 6447714,
                    this.timebarColorBackStroke = 5198675,
                    this.timebarColorFront = 16662335,
                    this.ballSizes = [0, 6, 12.5, 22.5, 42.25, 62.25],
                    this.itemAlive = 5.5,
                    this.itemVanishSpeed = 2,
                    this.shieldDissappearTime = 2,
                    this.gameUIAreaStroke = 5198675,
                    this.livesVisible = 7,
                    this
                }
            }, {
                key: "loaderBeforeGameStarts",
                value: function(e) {
                    e.load.multiatlas(this.spriteKey, this.spriteAtlasJSON, this.spriteLocation);
                    var t = [];
                    for (var a in this.fontNames) {
                        var i = this.fontNames[a];
                        t.includes(i) || (t.push(i),
                        e.load.bitmapFont(i, "assets/bs2/fonts/" + i + ".png", "assets/bs2/fonts/" + i + ".fnt"))
                    }
                    e.load.image("interface_combo_meter", "assets/bs2/images/interface_combo_meter.png"),
                    (S.a.isCordova || E.a.debugLog) && (e.load.image("app_logo_bsa", "assets/bs2/images/app_logo_bsa.png"),
                    e.load.image("download_apple", "assets/bs2/images/app_download_apple.png"),
                    e.load.image("download_google", "assets/bs2/images/app_download_google.png"),
                    e.load.image("fillerad_bsa", "assets/bs2/images/fillerads/app_screenshot_bsa.png"),
                    e.load.image("fillerad_btc", "assets/bs2/images/fillerads/app_screenshot_btc.png"),
                    e.load.image("fillerad_bs2", "assets/bs2/images/fillerads/app_screenshot_bs2.png"),
                    e.load.image("fillerad_bs3", "assets/bs2/images/fillerads/app_screenshot_bs3.png"),
                    e.load.image("app_logo_btc", "assets/bs2/images/fillerads/app_logo_btc.png"),
                    e.load.image("app_logo_bs2", "assets/bs2/images/fillerads/app_logo_bs2.png"),
                    e.load.image("app_logo_bs3", "assets/bs2/images/fillerads/app_logo_bs3.png")),
                    e.load.image("back_lvl_1", "assets/bs2/images/backgrounds/bck_1.jpg")
                }
            }, {
                key: "loaderAfterGameStarts",
                value: function(e) {
                    g.a.preloadSounds(e);
                    for (var t = 2; t <= 50; t++)
                        e.load.image("back_lvl_" + t, "assets/bs2/images/backgrounds/bck_" + t + ".jpg");
                    for (var a in e.load.multiatlas(this.lazySpriteKey, this.lazyAtlasJSON, this.spriteLocation),
                    this._BS2_p2MatchFrames = {},
                    e.textures.list[this.spriteKey].frames) {
                        var i = "" + e.textures.list[this.spriteKey].frames[a].name;
                        if (-1 != i.indexOf("char/")) {
                            var s = "char_p2/" + i.substr(5);
                            this._BS2_p2MatchFrames[i] = s
                        }
                    }
                    e.load.json("all_tasks", "assets/bs2/retention/all_tasks_bs2.json"),
                    e.load.bitmapFont(this.lazyFontNames.RETENTION_XP, "assets/bs2/fonts/retention_xp.png", "assets/bs2/fonts/retention_xp.fnt")
                }
            }]),
            t
        }(_)
          , v = a(50)
          , b = function(e) {
            function t() {
                return r()(this, t),
                d()(this, p()(t).apply(this, arguments))
            }
            return y()(t, e),
            l()(t, [{
                key: "init",
                value: function() {
                    this.shortName = i.GAME_BS3,
                    this.saveKey = "BubbleStruggle3",
                    this.gameVersion = .01,
                    this.name = "Bubble Trouble 3",
                    this.containerName = "bubble-trouble3",
                    this.gameWidth = 640,
                    this.gameHeight = 480,
                    this.gameAreaMin = new h.a(10,10),
                    this.gameAreaMax = new h.a(630,420),
                    this.gameAreaSize = new h.a(this.gameAreaMax.x - this.gameAreaMin.x,this.gameAreaMax.y - this.gameAreaMin.y),
                    this.phyStepMax = 20,
                    this.fontNames = {
                        MENU: "ui_buttons",
                        LVL_MSG: "game_message",
                        LVL_NUM: "ui_buttons",
                        SCORE: "ui_buttons",
                        FREEZE: "ui_freeze",
                        SLO_MO: "ui_slo_mo",
                        COMBOX: "ui_combox",
                        COMBOBONUS: "ui_combobonus",
                        TIME_PTS: "ui_time_pts"
                    },
                    this.lazyFontNames = {
                        RETENTION_XP: "retention_xp"
                    },
                    this.spriteScale = 1,
                    this.spriteKey = "mySprites",
                    this.spriteAtlasJSON = "assets/bs3/sprites/bs3.json",
                    this.spriteLocation = "assets/bs3/sprites",
                    this.lazyAtlasJSON = "assets/bs3/sprites/bs3_lazy.json",
                    this.frameNames = {},
                    this.frameNames.walkLeft = [],
                    this.frameNames.walkRight = [];
                    for (var e = 1; e <= 8; e++)
                        this.frameNames.walkLeft.push({
                            key: this.spriteKey,
                            frame: "char/walk/run_left_" + e + ".png"
                        }),
                        this.frameNames.walkRight.push({
                            key: this.spriteKey,
                            frame: "char/walk/run_right_" + e + ".png"
                        });
                    this.frameNames.idle = [];
                    for (e = 1; e <= 21; e++)
                        this.frameNames.idle.push({
                            key: this.spriteKey,
                            frame: "char/idle/idle_" + e + ".png"
                        });
                    this.frameNames.win = [];
                    for (e = 1; e <= 25; e++)
                        this.frameNames.win.push({
                            key: this.spriteKey,
                            frame: "char/win/win_" + e + ".png"
                        });
                    this.frameNames.die = [{
                        key: this.spriteKey,
                        frame: "char/die/die.png"
                    }],
                    this.frameNames.climb = [];
                    for (e = 1; e <= 10; e++)
                        this.frameNames.climb.push({
                            key: this.spriteKey,
                            frame: "char/climb/climb_" + e + ".png"
                        });
                    this.frameNames.climb_on = [];
                    for (e = 1; e <= 10; e++)
                        this.frameNames.climb_on.push({
                            key: this.spriteKey,
                            frame: "char/climb_onoff/climb_onoff_" + e + ".png"
                        });
                    this.frameNames.slide = [{
                        key: this.spriteKey,
                        frame: "char/slide/slide.png"
                    }],
                    this._copyFramesForP2("walkLeft"),
                    this._copyFramesForP2("walkRight"),
                    this._copyFramesForP2("idle"),
                    this._copyFramesForP2("win"),
                    this._copyFramesForP2("die"),
                    this._copyFramesForP2("climb"),
                    this._copyFramesForP2("climb_on"),
                    this._copyFramesForP2("slide"),
                    this.frameNames.singleShot = [{
                        key: this.spriteKey,
                        frame: "shots/single_frm1.png"
                    }, {
                        key: this.spriteKey,
                        frame: "shots/single_frm2.png"
                    }],
                    this.frameNames.singleShot_p2 = [{
                        key: this.spriteKey,
                        frame: "shots/single_frm1_p2.png"
                    }, {
                        key: this.spriteKey,
                        frame: "shots/single_frm2_p2.png"
                    }],
                    this.frameNames.convbelt = [];
                    for (e = 1; e <= 10; e++)
                        this.frameNames.convbelt.push({
                            key: this.spriteKey,
                            frame: "walls/convbelt/convbelt_" + e + ".png"
                        });
                    this.frameNames.pop_default = [];
                    for (e = 1; e <= 7; e++)
                        this.frameNames.pop_default.push({
                            key: this.spriteKey,
                            frame: "pop/_default/pop_" + e + ".png"
                        });
                    for (var t in v.a.COL_NAME) {
                        var a = v.a.COL_NAME[t];
                        this.frameNames["pop_" + a] = [];
                        for (e = 1; e <= 7; e++)
                            this.frameNames["pop_" + a].push({
                                key: this.lazySpriteKey,
                                frame: "pop/" + a + "/pop_" + e + ".png"
                            })
                    }
                    this.frameNames.teleport_ani = [];
                    for (e = 1; e <= 34; e++)
                        this.frameNames.teleport_ani.push({
                            key: this.lazySpriteKey,
                            frame: "teleport/teleport_" + e + ".png"
                        });
                    this.frameNames.shield_plain = [];
                    for (e = 1; e <= 14; e++)
                        this.frameNames.shield_plain.push({
                            key: this.lazySpriteKey,
                            frame: "shield_plain/shield_plain_" + e + ".png"
                        });
                    this.frameNames.shield_inv = [];
                    for (e = 1; e <= 14; e++)
                        this.frameNames.shield_inv.push({
                            key: this.lazySpriteKey,
                            frame: "shield_inv/shield_inv_" + e + ".png"
                        });
                    this.frameNames.shield_el = [];
                    for (e = 2; e <= 16; e++)
                        this.frameNames.shield_el.push({
                            key: this.lazySpriteKey,
                            frame: "shield_el/shield_el_" + e + ".png"
                        });
                    this.frameNames.firework_blast = [];
                    for (e = 1; e <= 5; e++)
                        this.frameNames.firework_blast.push({
                            key: this.lazySpriteKey,
                            frame: "ui/confetti/blast_" + e + ".png"
                        });
                    this.frameNames.garmen = [];
                    for (e = 1; e <= 11; e++)
                        this.frameNames.garmen.push({
                            key: this.lazySpriteKey,
                            frame: "ui/confetti/garmen_" + e + ".png"
                        });
                    this.frameNames.run_smoke = [];
                    for (e = 1; e <= 15; e++)
                        this.frameNames.run_smoke.push({
                            key: this.lazySpriteKey,
                            frame: "run_smoke/run_smoke_" + e + ".png"
                        });
                    this.frameNames.timed_ani = [];
                    for (e = 4; e <= 23; e++)
                        this.frameNames.timed_ani.push({
                            key: this.lazySpriteKey,
                            frame: "timed_ani/timed_" + e + ".png"
                        });
                    for (var t in this.frameNames.torch = [{
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_1.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_2.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_3.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_4.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_5.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_6.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_7.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_8.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_9.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_10.png"
                    }, {
                        key: this.lazySpriteKey,
                        frame: "ani_torch/torch_11.png"
                    }],
                    this.animations = [{
                        key: "walkLeft",
                        frames: this.frameNames.walkLeft,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "walkRight",
                        frames: this.frameNames.walkRight,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "idle",
                        frames: this.frameNames.idle,
                        frameRate: 15,
                        repeat: -1
                    }, {
                        key: "win",
                        frames: this.frameNames.win,
                        frameRate: 25,
                        repeat: 0
                    }, {
                        key: "die",
                        frames: this.frameNames.die,
                        frameRate: 1,
                        repeat: 0
                    }, {
                        key: "climb",
                        frames: this.frameNames.climb,
                        frameRate: 0,
                        repeat: 0
                    }, {
                        key: "climb_on",
                        frames: this.frameNames.climb_on,
                        frameRate: 17,
                        repeat: 0
                    }, {
                        key: "slide",
                        frames: this.frameNames.slide,
                        frameRate: 1,
                        repeat: 0
                    }, {
                        key: "singleShot",
                        frames: this.frameNames.singleShot,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "singleShot_p2",
                        frames: this.frameNames.singleShot_p2,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "convbelt",
                        frames: this.frameNames.convbelt,
                        frameRate: 18,
                        repeat: -1
                    }, {
                        key: "pop_default",
                        frames: this.frameNames.pop_default,
                        frameRate: 36,
                        repeat: 0
                    }],
                    this.lazyAnimations = [{
                        key: "torch_burn",
                        frames: this.frameNames.torch,
                        frameRate: 15,
                        repeat: -1
                    }, {
                        key: "teleport_ani",
                        frames: this.frameNames.teleport_ani,
                        frameRate: 40,
                        repeat: 0
                    }, {
                        key: "shield_plain",
                        frames: this.frameNames.shield_plain,
                        frameRate: 40,
                        repeat: -1
                    }, {
                        key: "shield_inv",
                        frames: this.frameNames.shield_inv,
                        frameRate: 40,
                        repeat: -1
                    }, {
                        key: "shield_el",
                        frames: this.frameNames.shield_el,
                        frameRate: 15,
                        repeat: -1
                    }, {
                        key: "firework_blast",
                        frames: this.frameNames.firework_blast,
                        frameRate: 8,
                        repeat: 0
                    }, {
                        key: "garmen",
                        frames: this.frameNames.garmen,
                        frameRate: 20,
                        repeat: 0
                    }, {
                        key: "run_smoke",
                        frames: this.frameNames.run_smoke,
                        frameRate: 20,
                        repeat: 0
                    }, {
                        key: "timed_ani",
                        frames: this.frameNames.timed_ani,
                        frameRate: 20,
                        repeat: 0
                    }],
                    v.a.COL_NAME) {
                        var s = {
                            key: "pop_" + (a = v.a.COL_NAME[t]),
                            frames: this.frameNames["pop_" + a],
                            frameRate: 36,
                            repeat: 0
                        };
                        this.lazyAnimations.push(s)
                    }
                    var n = [{
                        key: "walkLeft_p2",
                        frames: this.frameNames.walkLeft_p2,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "walkRight_p2",
                        frames: this.frameNames.walkRight_p2,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "idle_p2",
                        frames: this.frameNames.idle_p2,
                        frameRate: 15,
                        repeat: -1
                    }, {
                        key: "win_p2",
                        frames: this.frameNames.win_p2,
                        frameRate: 25,
                        repeat: 0
                    }, {
                        key: "die_p2",
                        frames: this.frameNames.die_p2,
                        frameRate: 1,
                        repeat: 0
                    }, {
                        key: "climb_p2",
                        frames: this.frameNames.climb_p2,
                        frameRate: 0,
                        repeat: 0
                    }, {
                        key: "climb_on_p2",
                        frames: this.frameNames.climb_on_p2,
                        frameRate: 17,
                        repeat: 0
                    }, {
                        key: "slide_p2",
                        frames: this.frameNames.slide_p2,
                        frameRate: 1,
                        repeat: 0
                    }];
                    return this.lazyAnimations = this.lazyAnimations.concat(n),
                    this.playerSpeed = 14,
                    this.playerStartG = 65,
                    this.playerLadderSpeed = 10,
                    this.playerLadderSlideSpeed = 42,
                    this.playerSpeedUp = this.playerSpeed + 5,
                    this.playerLadderSpeedUp = this.playerLadderSpeed + 3.5,
                    this.playerCollW = 22,
                    this.playerCollH = 45,
                    this.itemGrav = 12.5,
                    this.timebarP1 = new h.a(10,424),
                    this.timebarP2 = new h.a(630,432),
                    this.timebarColorBack = 6447714,
                    this.timebarColorBackStroke = 5198675,
                    this.timebarColorFront = 16662335,
                    this.ballSizes = [0, 6, 12.5, 22.5, 42.25, 62.25],
                    this.itemAlive = 5.5,
                    this.itemVanishSpeed = 2,
                    this.shieldDissappearTime = 2,
                    this.gameUIAreaStroke = 0,
                    this.livesVisible = 7,
                    this
                }
            }, {
                key: "_copyFramesForP2",
                value: function(e) {
                    var t = this
                      , a = e + "_p2";
                    this.frameNames[a] = [],
                    this.frameNames[e].forEach((function(e) {
                        t.frameNames[a].push({
                            key: t.lazySpriteKey,
                            frame: e.frame
                        })
                    }
                    ))
                }
            }, {
                key: "loaderBeforeGameStarts",
                value: function(e) {
                    e.load.multiatlas(this.spriteKey, this.spriteAtlasJSON, this.spriteLocation);
                    var t = [];
                    for (var a in this.fontNames) {
                        var i = this.fontNames[a];
                        t.includes(i) || (t.push(i),
                        e.load.bitmapFont(i, "assets/bs3/fonts/" + i + ".png", "assets/bs3/fonts/" + i + ".fnt"))
                    }
                    e.load.image("interface_combo_meter", "assets/bs3/images/interface_combo_meter.png"),
                    e.load.image("game_interface", "assets/bs3/images/game_interface.jpg"),
                    (S.a.isCordova || E.a.debugLog) && (e.load.image("app_logo_bsa", "assets/bs3/images/app_logo_bsa.png"),
                    e.load.image("download_apple", "assets/bs3/images/app_download_apple.png"),
                    e.load.image("download_google", "assets/bs3/images/app_download_google.png"),
                    e.load.image("fillerad_bsa", "assets/bs3/images/fillerads/app_screenshot_bsa.png"),
                    e.load.image("fillerad_btc", "assets/bs3/images/fillerads/app_screenshot_btc.png"),
                    e.load.image("fillerad_bs2", "assets/bs3/images/fillerads/app_screenshot_bs2.png"),
                    e.load.image("fillerad_bs3", "assets/bs3/images/fillerads/app_screenshot_bs3.png"),
                    e.load.image("app_logo_btc", "assets/bs3/images/fillerads/app_logo_btc.png"),
                    e.load.image("app_logo_bs2", "assets/bs3/images/fillerads/app_logo_bs2.png"),
                    e.load.image("app_logo_bs3", "assets/bs3/images/fillerads/app_logo_bs3.png")),
                    e.load.image("back_lvl_1", "assets/bs3/images/backgrounds/bck_1.jpg")
                }
            }, {
                key: "loaderAfterGameStarts",
                value: function(e) {
                    g.a.preloadSounds(e),
                    e.load.image("mainmenu_background", "assets/bs3/images/mainmenu_background.jpg");
                    for (var t = 2; t <= 46; t++)
                        e.load.image("back_lvl_" + t, "assets/bs3/images/backgrounds/bck_" + t + ".jpg");
                    e.load.multiatlas(this.lazySpriteKey, this.lazyAtlasJSON, this.spriteLocation),
                    e.load.json("all_tasks", "assets/bs3/retention/all_tasks_bs3.json"),
                    e.load.bitmapFont(this.lazyFontNames.RETENTION_XP, "assets/bs3/fonts/retention_xp.png", "assets/bs3/fonts/retention_xp.fnt")
                }
            }]),
            t
        }(_)
          , k = null
          , P = s.a.GET_MY_GAME();
        P == s.a.GAME_BS1 ? k = (new f).init() : P == s.a.GAME_BS2 ? k = (new T).init() : P == s.a.GAME_BS3 && (k = (new b).init());
        t.a = k
    },
    1: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return o
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(17)
          , r = a.n(n)
          , o = function e() {
            s()(this, e)
        };
        r()(o, "PHY", {
            COL_EDGE: {
                LEFT: "left",
                RIGHT: "right",
                TOP: "top",
                BOTTOM: "bot"
            }
        }),
        r()(o, "ITEM_MANAGER", {
            MOD_TYPE: {
                NONE: "none",
                SLOW_TIME: "slow_time",
                DYNAMITE: "dynamite",
                FREEZE: "freeze",
                MEDAL: "medal",
                WARP: "warp",
                UPGRADE_SLOW: "upgrade_slow",
                UPGRADE_PHASE: "upgrade_phase",
                UPGRADE_LAST_BREATH: "upgrade_lastbreath",
                UPGRADE_TANK: "upgrade_tank",
                UPGRADE_ITEMLIFE: "upgrade_itemlife",
                UPGRADE_FREEZE: "upgrade_freeze",
                UPGRADE_MEDAL: "upgrade_medal",
                UPGRADE_ETIME: "upgrade_etime"
            }
        }),
        r()(o, "ITEM_SPAWN_REASON", {
            NONE: "none",
            WALL: "wall",
            BALL: "ball"
        }),
        r()(o, "GO_TYPE", {
            NONE: "none",
            BALL: "ball",
            PLAYER: "player",
            SHOT: "shot",
            WALL: "wall",
            ITEM: "item",
            LADDER: "ladder"
        }),
        r()(o, "BALL_TYPE", {
            NORMAL: "normal",
            PENTA: "penta",
            REVERSE: "reverse"
        }),
        r()(o, "BALL_TYPE_INFO", {
            NORMAL: "normal",
            PENTA: "penta",
            REVERSE: "reverse",
            METAL: "metal",
            GHOST: "ghost",
            SPLIT4: "split4"
        }),
        r()(o, "POP_REASON", {
            SHIELD_PLAIN: "shield_plain",
            SHOT: "shot",
            BT1_SPIKES_TOP: "bt1_spikes_top",
            SPIKEBURST: "spikeburst",
            DYNAMITE: "dynamite",
            MEDAL: "medal",
            SHIELD_TANK: "shield_tank",
            SQUISH: "squish"
        }),
        r()(o, "WALL", {
            WALL_TYPE: {
                NORMAL: "normal",
                SLIDING_BT1: "sliding",
                DOOR_BT1: "door",
                CEILSPIKE_BT1: "ceilspike",
                LADDER: "ladder",
                BREAKABLE: "breakable",
                SWITCH: "switch",
                ICE: "ice",
                TRAMPOLINE: "trampoline",
                CONV_BELT: "convbelt",
                SPIKEALL: "spikeall",
                TELEPORT: "teleport",
                CAVEIN_BS3: "caveinbs3",
                TIMED: "timed",
                STICKY: "sticky",
                MOVING: "moving"
            }
        }),
        r()(o, "ITEM_TYPE", {
            NONE: "none",
            POINTS1: "points1",
            POINTS2: "points2",
            POINTS3: "points3",
            POINTS4: "points4",
            W_SINGLE: "wsingle",
            W_HOOK: "whook",
            W_MINE: "wmine",
            W_LASER: "wlaser",
            E_LIFE: "elife",
            S_TIME: "stime",
            S_PLAIN: "splain",
            E_TIME: "etime",
            DYNAMITE: "dynamite",
            FREEZE: "freeze",
            MEDAL: "medal",
            S_INVI: "sinvi",
            SPEED: "speed",
            W_DOUBLE: "wdouble"
        }),
        r()(o, "SHOT_TYPE", {
            SINGLE: "single",
            HOOK: "hook",
            LASER: "laser",
            MINE: "mine",
            DOUBLE: "double"
        }),
        r()(o, "UPGRADE_TIP", "Upgrade will auto-activate when level time reaches exactly half"),
        r()(o, "SHARE_TYPE", {
            LEVEL: "level",
            RANK: "rank",
            ALL: "all"
        })
    },
    102: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(16)
          , y = a(51)
          , g = (a(253),
        a(3))
          , S = a(23)
          , E = (a(247),
        a(30),
        a(67),
        a(12))
          , f = a(1)
          , T = a(13)
          , v = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                void 0 === e && console.error("Cant create Shot without all parameters. Something is undefined." + e),
                (a = l()(this, d()(t).call(this, e.gameScene, S.a.LAYER.SHOT, S.a.LAYERS_SHOT, m.a.ZERO, m.a.ZERO))).shotManager = e,
                a.shotType = f.a.SHOT_TYPE.SINGLE,
                a.player = e.player,
                a.shotSpeed = 0,
                a.shotOrigin = m.a.ZERO,
                a
            }
            return p()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    return this.goType = f.a.GO_TYPE.SHOT,
                    this.myRenderDepth = g.a.RENDER_DEPTH.UNDER_GAME,
                    this
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    _()(d()(t.prototype), "myOnDestroy", this).call(this),
                    this.shotManager.removeShot(this)
                }
            }, {
                key: "collideEdge",
                value: function(e, t, a, i, s, n, r, o) {
                    var l = !1;
                    if (o.goType == f.a.GO_TYPE.BALL) {
                        var h = o;
                        if (h._isGhostOn && !h.isStatic)
                            return !0;
                        if (h._isMetal || h._isWarp)
                            return E.a.playSound(this.gameScene, E.a.SND.METAL_BALL),
                            this.myOnDestroy(),
                            this.shotManager.accuracyBonus = !1,
                            T.a.TaskIncrement(this.gameScene, T.a.TASK_TYPE.SHOOT_BALL_TYPE, 1, f.a.BALL_TYPE_INFO.METAL),
                            !0;
                        h._isGhost && T.a.TaskIncrement(this.gameScene, T.a.TASK_TYPE.SHOOT_BALL_TYPE, 1, f.a.BALL_TYPE_INFO.GHOST),
                        4 == h._splitWay && T.a.TaskIncrement(this.gameScene, T.a.TASK_TYPE.SHOOT_BALL_TYPE, 1, f.a.BALL_TYPE_INFO.SPLIT4),
                        T.a.TaskIncrement(this.gameScene, T.a.TASK_TYPE.SHOOT_BALL_TYPE, 1, h._ballType),
                        l = !0,
                        h.popBall({
                            reason: f.a.POP_REASON.SHOT,
                            player: this.player,
                            obj: this
                        })
                    }
                    if (o.goType == f.a.GO_TYPE.WALL) {
                        if (this.playerShotLadderWall(o))
                            return !0;
                        o.showInvisibleWall(!0);
                        var _ = o;
                        _.wallType == f.a.WALL.WALL_TYPE.BREAKABLE && (_.breakableGotShot(this),
                        l = !0)
                    }
                    return 0 == l && (this.shotManager.accuracyBonus = !1),
                    this.myOnDestroy(),
                    !0
                }
            }, {
                key: "playerShotLadderWall",
                value: function(e) {
                    if (null != this.player.usingLadder) {
                        var t = this.gameScene.phyEngine.simulateCollisions(this.player._testPBodyWall, this.player.pos.x, this.player.pos.y, [S.a.LAYER.WALL])
                          , a = !1;
                        if (t.collisions.forEach((function(t) {
                            t.pBody != e || (a = !0)
                        }
                        )),
                        a)
                            return !0
                    }
                    return !1
                }
            }]),
            t
        }(y.a);
        t.a = v
    },
    103: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(170)
          , h = a(172)
          , _ = a(4)
          , c = a(2)
          , d = a(18)
          , u = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "save",
                value: function() {
                    d.a.isFacebook && FBInstant.player.setDataAsync(_.a.gameSettings).then(FBInstant.player.flushDataAsync).then((function() {
                        c.a.warn("FB", "Data is saved!", _.a.gameSettings)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(t) {
                    d.a.isFacebook && (c.a.log("FB", "Loading fb data..."),
                    FBInstant.player.getDataAsync(this.getFacebookdata_allkeys()).then((function(a) {
                        c.a.log("FB", "FACEBOOK GET DATA. got data:", a),
                        0 == Object.keys(a).length ? (c.a.log("FB", "No FB data yet.."),
                        t()) : (c.a.log(a.totalBubblesPopped, _.a.gameSettings.totalBubblesPopped),
                        null != a.totalBubblesPopped && a.totalBubblesPopped > _.a.gameSettings.totalBubblesPopped ? (c.a.warn("FB", "Received *FRESH* FB data!", a),
                        _.a.createGameSettings(a),
                        t()) : (c.a.warn("FB", "Received *OLD/SAME* FB data!", a),
                        t(),
                        e.save()))
                    }
                    )).catch((function(e) {
                        c.a.error("FB", "FACEBOOK GET DATA FAIL. got error:", e),
                        t()
                    }
                    )))
                }
            }, {
                key: "getFacebookdata_allkeys",
                value: function() {
                    var e = new l.a;
                    if (o.a.isBS2 || o.a.isBS3)
                        e = new h.a;
                    var t = [];
                    for (var a in e)
                        t.push(a);
                    return t
                }
            }]),
            e
        }();
        t.a = u
    },
    104: function(e, t, a) {
        "use strict";
        var i = a(83)
          , s = a(5)
          , n = a.n(s)
          , r = a(6)
          , o = a.n(r)
          , l = a(10)
          , h = a.n(l)
          , _ = a(7)
          , c = a.n(_)
          , d = a(11)
          , u = a.n(d)
          , p = a(15)
          , m = a(8)
          , y = a(0)
          , g = a(18)
          , S = function(e) {
            function t() {
                return n()(this, t),
                h()(this, c()(t).apply(this, arguments))
            }
            return u()(t, e),
            o()(t, [{
                key: "drawAd",
                value: function(e) {
                    this.iosLink = e.iosLink,
                    this.androidLink = e.androidLink,
                    this.defaultLink = e.defaultLink,
                    this.btnText = e.btnText,
                    this.screenTexture = e.screenTexture,
                    this.gameLogo = e.gameLogo,
                    this.gameLogoX = e.gameLogoX,
                    this.gameLogoY = e.gameLogoY,
                    this.gameLogoAngle = e.gameLogoAngle;
                    var t = 6;
                    (y.a.isBS2 || y.a.isBS3) && (t = 0),
                    this.open_button.changeTextOrIcon({
                        text: this.btnText,
                        size: 30,
                        fixY: t
                    }),
                    this.app_screen_btc = new m.a(this.myScene,.5 * y.a.gameWidth,.45 * y.a.gameHeight,this.screenTexture,null,1),
                    this.download_apple = new m.a(this.myScene,y.a.gameWidth / 2 - 75,.74 * y.a.gameHeight,"download_apple",null,.7),
                    this.download_google = new m.a(this.myScene,y.a.gameWidth / 2 + 75,.74 * y.a.gameHeight,"download_google",null,.7),
                    this.app_logo = new m.a(this.myScene,y.a.gameWidth * this.gameLogoX,y.a.gameHeight * this.gameLogoY,this.gameLogo),
                    this.app_logo.angle = this.gameLogoAngle,
                    g.a.isCordova && (p.a.isAndroid ? (this.download_apple.visible = !1,
                    this.download_google.x = y.a.gameWidth / 2) : p.a.isIOS && (this.download_google.visible = !1,
                    this.download_apple.x = y.a.gameWidth / 2))
                }
            }, {
                key: "openAd",
                value: function() {
                    p.a.isIOS ? window.open(this.iosLink) : p.a.isAndroid ? window.open(this.androidLink, g.a.browserWindow) : window.open(this.defaultLink, g.a.browserWindow)
                }
            }]),
            t
        }(i.a)
          , E = a(37)
          , f = a(2)
          , T = a(4)
          , v = a(32);
        function b() {}
        b.spawnFillerAd = function(e, t, a) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (f.a.log("AD", "Trying to spawn a Filler Ad", g.a.myTarget, a),
            1 == f.a.neverShowAllFillerAds)
                return f.a.log("AD", "Never showing filler ad."),
                !1;
            if (0 == f.a.alwaysShowAllFillerAds) {
                if (g.a.isPoki)
                    return f.a.log("AD", "No fillers for Poki."),
                    !1;
                if (T.a.gameSettings.filledAdFreqCount++,
                T.a.gameSettings.filledAdFreqCount % b._fillerAdFrequency != 0 && 0 == i)
                    return !1
            }
            var s = [];
            g.a.isCordova ? (s.push(b.ADS.BSA),
            y.a.isBT && (s.push(b.ADS.BS2),
            s.push(b.ADS.BS3)),
            y.a.isBS2 && (s.push(b.ADS.BTC),
            s.push(b.ADS.BS3)),
            y.a.isBS3 && (s.push(b.ADS.BTC),
            s.push(b.ADS.BS2))) : (g.a.isFacebook,
            s.push(b.ADS.BSA),
            y.a.isBT && (s.push(b.ADS.BS2),
            s.push(b.ADS.BS3)),
            y.a.isBS2 && (s.push(b.ADS.BTC),
            s.push(b.ADS.BS3)),
            y.a.isBS3 && (s.push(b.ADS.BTC),
            s.push(b.ADS.BS2)));
            var n = s[Math.floor(Math.random() * s.length)]
              , r = new S(a,n);
            return t == E.a.PLACEMENTS.INTERSTITIAL ? r.setRewarded(3) : t == E.a.PLACEMENTS.REWARD && r.setRewarded(7),
            !0
        }
        ,
        b._fillerAdFrequency = 11,
        b.ADS = {
            BTC: {
                iosLink: v.a.BTC_APPLE,
                androidLink: v.a.BTC_GOOGLE,
                defaultLink: v.a.REBUBBLED_HOMEPAGE,
                btnText: "DOWNLOAD",
                screenTexture: "fillerad_btc",
                gameLogo: "app_logo_btc",
                gameLogoX: .2,
                gameLogoY: .3,
                gameLogoAngle: 0
            },
            BS2: {
                iosLink: v.a.BS2_APPLE,
                androidLink: v.a.BS2_GOOGLE,
                defaultLink: v.a.REBUBBLED_HOMEPAGE,
                btnText: "DOWNLOAD",
                screenTexture: "fillerad_bs2",
                gameLogo: "app_logo_bs2",
                gameLogoX: .2,
                gameLogoY: .22,
                gameLogoAngle: 0
            },
            BS3: {
                iosLink: v.a.BS3_APPLE,
                androidLink: v.a.BS3_GOOGLE,
                defaultLink: v.a.REBUBBLED_HOMEPAGE,
                btnText: "DOWNLOAD",
                screenTexture: "fillerad_bs3",
                gameLogo: "app_logo_bs3",
                gameLogoX: .5,
                gameLogoY: .14,
                gameLogoAngle: 0
            },
            BSA: {
                iosLink: v.a.BSA_APPLE,
                androidLink: v.a.BSA_GOOGLE,
                defaultLink: v.a.BSA_HOMEPAGE,
                btnText: "DOWNLOAD",
                screenTexture: "fillerad_bsa",
                gameLogo: "app_logo_bsa",
                gameLogoX: .15,
                gameLogoY: .15,
                gameLogoAngle: -15
            }
        };
        t.a = b
    },
    106: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return m
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = a(3)
          , _ = a(21)
          , c = a(4)
          , d = a(38)
          , u = a(0)
          , p = a(20)
          , m = function() {
            function e(t, a, i) {
                if (s()(this, e),
                null != a.uid) {
                    if (c.a.gameSettings.shownGamePopups.includes(a.uid))
                        return void (i && i());
                    c.a.gameSettings.shownGamePopups.push(a.uid)
                }
                this.scene = t,
                this.gamePopupMsg = a,
                this.callback = i,
                this.popupContainer = null,
                this._oldButtonGroup = d.a._activeScene,
                this._x = a.x || u.a.gameWidth / 2,
                this._y = a.y || u.a.gameHeight / 2,
                this._w = a.w || u.a.gameWidth - 100,
                this._h = a.h || u.a.gameHeight - 200,
                this.FRAME_RECT = new Phaser.Geom.Rectangle(this._x - this._w / 2,this._y - this._h / 2,this._w,this._h),
                this._init()
            }
            return r()(e, [{
                key: "_init",
                value: function() {
                    if (this.popupContainer = this.scene.add.container(),
                    h.a.mySpriteDepth(h.a.RENDER_DEPTH.GAME_POPUP, this.popupContainer),
                    null != this.gamePopupMsg.highlightRect) {
                        this._disableWholeBackground(!1);
                        var e = this.scene.add.graphics({
                            x: this.gamePopupMsg.highlightRect.x + this.gamePopupMsg.highlightRect.width / 2,
                            y: this.gamePopupMsg.highlightRect.y + this.gamePopupMsg.highlightRect.height / 2
                        })
                          , t = new Phaser.Geom.Rectangle(-this.gamePopupMsg.highlightRect.width / 2,-this.gamePopupMsg.highlightRect.height / 2,this.gamePopupMsg.highlightRect.width,this.gamePopupMsg.highlightRect.height);
                        e.lineStyle(6, 16777215, 1),
                        e.strokeRectShape(t),
                        h.a.mySpriteDepth(h.a.RENDER_DEPTH.GAME_POPUP, e),
                        this.scene.add.tween({
                            targets: e,
                            scale: {
                                from: 1,
                                to: 1.2
                            },
                            alpha: {
                                from: .6,
                                to: 1
                            },
                            duration: 110,
                            loop: -1,
                            yoyo: !0
                        }),
                        this.popupContainer.add(e)
                    } else
                        this._disableWholeBackground(!0);
                    this._backgroundWindowColor();
                    var a = this.scene.add.bitmapText(this._x, this._y, u.a.fontNames.MENU, this.gamePopupMsg.message, 25, 1);
                    a.x -= a.width / 2,
                    a.y -= a.height / 2,
                    this.popupContainer.add(a);
                    var i = 6;
                    (u.a.isBS2 || u.a.isBS3) && (i = 0),
                    this.closeBtn = new _.a(this.scene,this._x,this._y + 48 + 20,100,48,{
                        text: this.gamePopupMsg.buttonTxt,
                        size: 36,
                        fixY: i
                    },this._closeButton.bind(this),null,null,null,!0,"gamePopup"),
                    this.closeBtn.addToContainer(this.popupContainer),
                    null != this.gamePopupMsg.icon && p.a.isLazyLoaded && (this.icon = this.scene.add.sprite(this._x, this._y, u.a.lazySpriteKey, this.gamePopupMsg.icon),
                    this.popupContainer.add(this.icon),
                    this.icon.y -= 55)
                }
            }, {
                key: "_disableWholeBackground",
                value: function(e) {
                    var t = new Phaser.Geom.Rectangle(-1e3,-1e3,3e3,3e3)
                      , a = this.scene.add.graphics()
                      , i = .9;
                    e || (i = .01),
                    a.fillStyle(0, i),
                    a.fillRectShape(t),
                    a.setInteractive({
                        hitArea: t,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    this.popupContainer.add(a)
                }
            }, {
                key: "_backgroundWindowColor",
                value: function() {
                    var e = this.scene.add.graphics()
                      , t = 6513507
                      , a = 1
                      , i = 0;
                    u.a.isBS3 && (t = 2633,
                    a = .85,
                    i = 14998025),
                    e.fillStyle(t, a),
                    e.lineStyle(2, i, 1),
                    e.fillRectShape(this.FRAME_RECT),
                    e.strokeRectShape(this.FRAME_RECT),
                    this.popupContainer.add(e)
                }
            }, {
                key: "_closeButton",
                value: function() {
                    this.closeBtn.destroyMyUIButton(),
                    d.a._activeScene = this._oldButtonGroup,
                    this.popupContainer.removeAll(!0),
                    this.callback && this.callback()
                }
            }]),
            e
        }();
        l()(m, "COL_WHITE", 16777215),
        l()(m, "COL_YELLOW", 14867459),
        l()(m, "COL_GREY", 9474192),
        l()(m, "COL_BLACK", 0),
        l()(m, "COL_RED", 16711680),
        l()(m, "COL_DARKEN", .4),
        m.MSGS = {
            EDITOR_ONLY_WEB: {
                message: "Level editor can be used on your computer.",
                buttonTxt: "CLOSE"
            },
            UPGRADE_LOW_RANK: {
                uid: "reach_bronze_to_upgrade",
                message: "Reach -BRONZE RANK- to unlock upgrades.",
                buttonTxt: "OK"
            },
            FINISH_LEVELS_FOR_UPGRADE_PTS: {
                uid: "fnsh_lvls_pt",
                message: "Get an UPGRADE POINT for each completed level.",
                buttonTxt: "OK",
                icon: "retention/upgrade_btn.png"
            },
            UPGRADE_TIMEBAR_SHOW_FIRST: {
                uid: "entered dynamically in MyUpgradeSelect.js",
                message: "Upgrade will auto-activate when the TIMER reaches it.",
                buttonTxt: "OK",
                h: 200
            }
        }
    },
    111: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return l
        }
        ));
        var i = a(0)
          , s = a(9)
          , n = a(2)
          , r = a(453)
          , o = a(453);
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , a = null;
            return n.a.log("Fetching levles for game mode:", e, " custom pack:", s.a.customPack),
            null != s.a.customPack ? s.a.customPack.levels[t - 1] : (i.a.isBT ? a = r : (i.a.isBS2 || i.a.isBS3) && (e == s.a.MODES.SINGLE ? a = r : e == s.a.MODES.TWOP && (a = o)),
            null == a && n.a.error("Unknown gamemode & levels", i.a.shortName, e),
            null == t ? a : a["lvl" + t])
        }
    },
    112: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return E
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(17)
          , p = a.n(u)
          , m = a(0)
          , y = a(30)
          , g = a(22)
          , S = a(1)
          , E = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, _()(t).call(this, e, a))).wallType = S.a.WALL.WALL_TYPE.ICE,
                t.SPEED_UP = m.a.playerSpeed + 8,
                t.SLOW_DOWN = m.a.playerSpeed - 2,
                i
            }
            return d()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    this.mySprite = new g.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/ice.png",{
                        top: 6,
                        bottom: 6,
                        left: 6,
                        right: 6
                    }),
                    this.mySprite.setDepthNinePatch(this.myRenderDepth)
                }
            }]),
            t
        }(y.a);
        p()(E, "SPEED_UP", 0),
        p()(E, "SLOW_DOWN", 0)
    },
    1143: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(0)
          , p = a(8)
          , m = a(12)
          , y = a(45)
          , g = a(46)
          , S = (a(167),
        a(18),
        function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "BT1_IntroAnimation"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "create",
                value: function() {
                    var e = this;
                    this.myTransition = new y.a(this).clearSlides();
                    new g.a(this);
                    this.intro_music = m.a.playSound(this, m.a.SND.INTRO_MUSIC),
                    new p.a(this,532,330,u.a.spriteKey,"bubbles/bubble_red.png",6.2).alpha = .75,
                    this.char = new p.a(this,60,340,u.a.spriteKey,"ui/devil_idle.png");
                    var t = this.add.graphics();
                    t.fillStyle(14306055, .64),
                    t.fillRect(-u.a.gameWidth, -u.a.gameHeight, 3 * u.a.gameWidth, 3 * u.a.gameHeight);
                    var a = new p.a(this,u.a.gameWidth - 20,u.a.gameHeight - 30,"intro_letters","skip_intro.png",1.5);
                    a.setInteractive({
                        useHandCursor: !0
                    }).on("pointerover", (function() {
                        i.visible = !0
                    }
                    )).on("pointerout", (function() {
                        i.visible = !1
                    }
                    )).on("pointerup", (function() {
                        a.removeInteractive(),
                        e.introComplete(!0)
                    }
                    ));
                    var i = this.add.bitmapText(a.x - 132, a.y - 10, u.a.fontNames.LVL_MSG, "skip intro", 26);
                    i.visible = !1;
                    var s = 263
                      , n = 340;
                    this.word1_lett1 = new p.a(this,160,s,"intro_letters","b0000.png").setVisible(!1),
                    this.word1_lett2 = new p.a(this,202,s,"intro_letters","u0000.png").setVisible(!1),
                    this.word1_lett3 = new p.a(this,244,s,"intro_letters","b0000.png").setVisible(!1),
                    this.word1_lett4 = new p.a(this,286,s,"intro_letters","b0000.png").setVisible(!1),
                    this.word1_lett5 = new p.a(this,328,s,"intro_letters","l0000.png").setVisible(!1),
                    this.word1_lett6 = new p.a(this,370,s,"intro_letters","e0000.png").setVisible(!1),
                    this.word2_lett1 = new p.a(this,210,n,"intro_letters","s0000.png").setVisible(!1),
                    this.word2_lett2 = new p.a(this,252,n,"intro_letters","t0000.png").setVisible(!1),
                    this.word2_lett3 = new p.a(this,294,n,"intro_letters","r0000.png").setVisible(!1),
                    this.word2_lett4 = new p.a(this,336,n,"intro_letters","u0000.png").setVisible(!1),
                    this.word2_lett5 = new p.a(this,378,n,"intro_letters","g0000.png").setVisible(!1),
                    this.word2_lett6 = new p.a(this,420,n,"intro_letters","g0000.png").setVisible(!1),
                    this.word2_lett7 = new p.a(this,462,n,"intro_letters","l0000.png").setVisible(!1),
                    this.word2_lett8 = new p.a(this,504,n,"intro_letters","e0000.png").setVisible(!1);
                    var r = this;
                    this.time.delayedCall(this.getLetterAniDelay(5), (function() {
                        r.word1_lett1.visible = !0,
                        r.word1_lett1.anims.play("intro_letter_b")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(6), (function() {
                        r.word1_lett2.visible = !0,
                        r.word1_lett2.anims.play("intro_letter_u")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(7), (function() {
                        r.word1_lett3.visible = !0,
                        r.word1_lett3.anims.play("intro_letter_b")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(8), (function() {
                        r.word1_lett4.visible = !0,
                        r.word1_lett4.anims.play("intro_letter_b")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(9), (function() {
                        r.word1_lett5.visible = !0,
                        r.word1_lett5.anims.play("intro_letter_l")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(10), (function() {
                        r.word1_lett6.visible = !0,
                        r.word1_lett6.anims.play("intro_letter_e")
                    }
                    ));
                    this.word2_lett2.x += 8,
                    this.time.delayedCall(this.getLetterAniDelay(14), (function() {
                        r.word2_lett1.visible = !0,
                        r.word2_lett1.anims.play("intro_letter_t")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(15), (function() {
                        r.word2_lett2.visible = !0,
                        r.word2_lett2.anims.play("intro_letter_r")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(16), (function() {
                        r.word2_lett3.visible = !0,
                        r.word2_lett3.anims.play("intro_letter_o")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(17), (function() {
                        r.word2_lett4.visible = !0,
                        r.word2_lett4.anims.play("intro_letter_u")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(18), (function() {
                        r.word2_lett5.visible = !0,
                        r.word2_lett5.anims.play("intro_letter_b")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(19), (function() {
                        r.word2_lett6.visible = !0,
                        r.word2_lett6.anims.play("intro_letter_l")
                    }
                    )),
                    this.time.delayedCall(this.getLetterAniDelay(20), (function() {
                        r.word2_lett7.visible = !0,
                        r.word2_lett7.anims.play("intro_letter_e")
                    }
                    )),
                    this.time.delayedCall(5900, (function() {
                        r.popLetter(r.word1_lett1),
                        r.char.setFrame("ui/devil_startgame.png")
                    }
                    )),
                    this.time.delayedCall(6227, (function() {
                        r.popLetter(r.word1_lett5)
                    }
                    )),
                    this.time.delayedCall(6318, (function() {
                        r.popLetter(r.word2_lett1)
                    }
                    )),
                    this.time.delayedCall(6409, (function() {
                        r.popLetter(r.word1_lett3)
                    }
                    )),
                    this.time.delayedCall(6590, (function() {
                        r.popLetter(r.word1_lett2)
                    }
                    )),
                    this.time.delayedCall(6681, (function() {
                        r.popLetter(r.word1_lett4)
                    }
                    )),
                    this.time.delayedCall(6772, (function() {
                        r.popLetter(r.word2_lett5)
                    }
                    )),
                    this.time.delayedCall(6818, (function() {
                        r.popLetter(r.word2_lett2)
                    }
                    )),
                    this.time.delayedCall(7045, (function() {
                        r.popLetter(r.word2_lett3)
                    }
                    )),
                    this.time.delayedCall(7136, (function() {
                        r.popLetter(r.word2_lett7)
                    }
                    )),
                    this.time.delayedCall(7181, (function() {
                        r.popLetter(r.word2_lett4)
                    }
                    )),
                    this.time.delayedCall(7227, (function() {
                        r.popLetter(r.word1_lett6)
                    }
                    )),
                    this.time.delayedCall(7590, (function() {
                        r.popLetter(r.word2_lett6)
                    }
                    )),
                    this.time.delayedCall(8500, this.introComplete, [!1], this)
                }
            }, {
                key: "getLetterAniDelay",
                value: function(e) {
                    return 100 + 215 * e
                }
            }, {
                key: "popLetter",
                value: function(e) {
                    var t = new p.a(this,e.x + 80,e.y - 35,"intro_letters","pop.png");
                    t.rotation = 360 * Math.random(),
                    e.scene.tweens.add({
                        targets: t,
                        scale: 1.2,
                        ease: "Bounce",
                        duration: 200,
                        onComplete: function() {
                            t.visible = !1
                        }
                    }),
                    m.a.playRandom(e.scene, [m.a.SND.BALL_POP1, m.a.SND.BALL_POP2, m.a.SND.BALL_POP3]),
                    e.visible = !1
                }
            }, {
                key: "introComplete",
                value: function(e) {
                    this.game.sound.stopAll(),
                    e && m.a.playRandom(this, [m.a.SND.BALL_POP1, m.a.SND.BALL_POP2, m.a.SND.BALL_POP3]),
                    this.myTransition.transitionToggle(!1, "BT1_MainMenu")
                }
            }]),
            t
        }(Phaser.Scene));
        t.default = S
    },
    1144: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(9)
          , p = a(22)
          , m = a(21)
          , y = a(26)
          , g = a(0)
          , S = a(8)
          , E = a(45)
          , f = a(4)
          , T = a(46)
          , v = a(53)
          , b = a(38)
          , k = a(135)
          , P = a(20)
          , L = a(2)
          , A = a(111)
          , I = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "BT1_LevelSelect"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "create",
                value: function() {
                    this.myTransition = new E.a(this).transitionOpen();
                    new T.a(this);
                    var e = new S.a(this,g.a.gameWidth / 2,444,"main_menu_floor",null,g.a.spriteScale / .5);
                    e.scaleX *= 1.3,
                    e.scaleY *= 1.2;
                    new S.a(this,235,402,f.a.gameSettings.selectedSkinID,"ui/devil_idle.png");
                    for (var t = 49.2, a = (new p.a(this,490,240,306,297,"ui/main_menu_back.png",{
                        top: 50,
                        bottom: 50,
                        left: 50,
                        right: 50
                    }),
                    Object(A.a)(u.a.currentMode)), i = 0; i < 5; i++)
                        for (var s = 0; s < 5; s++) {
                            var n = 5 * i + s + 1;
                            if (null == a["lvl" + n])
                                break;
                            var r = new m.a(this,386.6 + 258 * s / 5,141 + 247 * i / 5,t,47,{
                                text: n,
                                size: 32,
                                fixY: 6
                            },this.btn_startGame.bind(this, n));
                            f.a.gameSettings.maxLevelUnlocked[u.a.currentMode] < n && !L.a.deselectItem && (r.buttonIsActive = !1,
                            r.myText.alpha = .35,
                            r.backgroundNinePatch.ninePatch.alpha = .35),
                            f.a.gameSettings.lastLevelPlayed[u.a.currentMode] == n && (this.tweens.add({
                                targets: [r.myText, r.backgroundNinePatch.ninePatch],
                                scale: 1.1,
                                ease: "Sine.easeIn",
                                duration: 450,
                                loop: -1,
                                yoyo: !0
                            }),
                            b.a.selectButton(r))
                        }
                    if (P.a.isLazyLoaded) {
                        var o = new S.a(this,30,123,g.a.lazySpriteKey,"ani_torch/torch_1.png",.9)
                          , l = (new S.a(this,30,123,g.a.lazySpriteKey,"ani_torch/torch_base.png",.9),
                        new S.a(this,672,123,g.a.lazySpriteKey,"ani_torch/torch_1.png",.9))
                          , h = new S.a(this,672,123,g.a.lazySpriteKey,"ani_torch/torch_base.png",.9);
                        h.scaleX = -h.scaleX,
                        o.anims.play("torch_burn"),
                        l.anims.play("torch_burn")
                    }
                    new p.a(this,100,400,130,77,"ui/main_menu_back.png",{
                        top: 30,
                        bottom: 30,
                        left: 30,
                        right: 30
                    }),
                    new m.a(this,100,400,100,47,{
                        text: y.a.BT1.SETTINGS_BACK,
                        size: 32,
                        fixY: 6
                    },this.myTransition.transitionToggle.bind(this.myTransition, !1, "BT1_MainMenu")),
                    new v.a(this);
                    k.a.showNews(this)
                }
            }, {
                key: "btn_startGame",
                value: function(e) {
                    u.a.newGame(u.a.currentMode, e),
                    this.myTransition.transitionToggle(!1, "GameScene")
                }
            }]),
            t
        }(Phaser.Scene);
        t.default = I
    },
    1145: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(9)
          , p = a(22)
          , m = a(21)
          , y = a(26)
          , g = a(0)
          , S = a(8)
          , E = a(12)
          , f = a(45)
          , T = a(4)
          , v = a(46)
          , b = a(178)
          , k = a(179)
          , P = a(180)
          , L = a(57)
          , A = a(32)
          , I = a(18)
          , M = a(15)
          , O = a(2)
          , D = a(53)
          , R = a(20)
          , B = a(25)
          , w = a(27)
          , N = a(13)
          , x = a(29)
          , C = a(1)
          , U = a(77)
          , W = a(70)
          , Y = a(3)
          , K = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "BT1_MainMenu"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "create",
                value: function() {
                    this.myTransition = new f.a(this).transitionOpen();
                    new v.a(this);
                    var e = new S.a(this,g.a.gameWidth / 2,444,"main_menu_floor",null,g.a.spriteScale / .5);
                    e.scaleX *= 1.3,
                    e.scaleY *= 1.2;
                    new P.a(this,170,69,1,-15);
                    this.devilSprite = new S.a(this,439,413,T.a.gameSettings.selectedSkinID,"ui/devil_idle.png",1,Y.a.RENDER_DEPTH.UIOVER),
                    R.a.isLazyLoaded ? this._drawLazyStuff() : R.a.sceneLink.events.once(R.a.EVT_LOADED, this._drawLazyStuff, this);
                    var t = 3;
                    L.a.isUsingLeader() && t++,
                    I.a.isCordova && t++,
                    I.a.isCordova && 1 == M.a.isAndroid && t++;
                    var a = 180
                      , i = 156
                      , s = 47
                      , n = t * s + 2 * (t + 1)
                      , r = 280 - n / 2 + 24.5
                      , o = (new p.a(this,a,280,206,50 + n,"ui/main_menu_back.png",{
                        top: 50,
                        bottom: 50,
                        left: 50,
                        right: 50
                    }),
                    0);
                    new m.a(this,a,r + n * o / t,i,s,{
                        text: y.a.BT1.MAINMENU_START1,
                        size: 32,
                        fixY: 6
                    },this.btn_startGame.bind(this, u.a.MODES.SINGLE),this.btn_hover.bind(this, y.a.BT1.MAINMENU_START1, !0),this.btn_hover.bind(this, y.a.BT1.MAINMENU_START1, !1),!0,!0);
                    o++;
                    new m.a(this,a,r + n * o / t,i,s,{
                        text: y.a.BT1.MAINMENU_START2,
                        size: 32,
                        fixY: 6
                    },this.btn_startGame.bind(this, u.a.MODES.TWOP),this.btn_hover.bind(this, y.a.BT1.MAINMENU_START2, !0),this.btn_hover.bind(this, y.a.BT1.MAINMENU_START2, !1),!0);
                    o++;
                    new m.a(this,a,r + n * o / t,i,s,{
                        text: y.a.BT1.MAINMENU_SETTINGS,
                        size: 32,
                        fixY: 6
                    },this.btn_openSettings_BS1.bind(this),this.btn_hover.bind(this, y.a.BT1.MAINMENU_SETTINGS, !0),this.btn_hover.bind(this, y.a.BT1.MAINMENU_SETTINGS, !1),!0);
                    if (L.a.isUsingLeader()) {
                        o++;
                        new m.a(this,a,r + n * o / t,i,s,{
                            text: y.a.BT1.MAINMENU_SCORES,
                            size: 32,
                            fixY: 6
                        },this.btn_openGameOver.bind(this),this.btn_hover.bind(this, y.a.BT1.MAINMENU_SCORES, !0),this.btn_hover.bind(this, y.a.BT1.MAINMENU_SCORES, !1),!0)
                    }
                    if (I.a.isCordova) {
                        o++;
                        var l = new k.a(this);
                        new m.a(this,a,r + n * o / t,i,s,l.btnConfig,l.openLink.bind(l),null,null)
                    }
                    if (I.a.isCordova && 1 == M.a.isAndroid) {
                        o++;
                        new m.a(this,a,r + n * o / t,i,s,{
                            text: y.a.BT1.MAINMENU_QUIT,
                            size: 32,
                            fixY: 6
                        },navigator.app.exitApp)
                    }
                    new b.a(this);
                    var h = this.add.bitmapText(10 + M.a.cameraOffset.x, 440, g.a.fontNames.MENU, "Bubble Trouble - (c) 2002 - Kresimir Cvitanovic", 15);
                    h.setOrigin(0, .5),
                    I.a.isPoki || (h.setInteractive({
                        useHandCursor: !0
                    }),
                    h.on("pointerup", (function() {
                        window.open(A.a.REBUBBLED_HOMEPAGE, "_blank")
                    }
                    )));
                    new m.a(this,g.a.gameWidth - 40 - M.a.notchOffset,30,80,35,{
                        text: y.a.BT1.MAINMENU_HELP,
                        size: 28,
                        fixY: 3
                    },this.btn_openHelp_BS1.bind(this),this.btn_hover.bind(this, y.a.BT1.MAINMENU_HELP, !0),this.btn_hover.bind(this, y.a.BT1.MAINMENU_HELP, !1),!0);
                    var _ = this.add.text(350, 440, "2022-12-22T04:53:18.270Z".substring(0, "2022-12-22T04:53:18.270Z".indexOf(".")), {
                        fontSize: 14,
                        color: "#6c6c6c"
                    });
                    _.setOrigin(0, .5),
                    _.alpha = .6;
                    new D.a(this,.6 * g.a.gameWidth,35)
                }
            }, {
                key: "_drawLazyStuff",
                value: function() {
                    new S.a(this,368,177,g.a.lazySpriteKey,"ui/window.png",1.3);
                    var e = new S.a(this,583,177,g.a.lazySpriteKey,"ui/window.png",1.3);
                    e.scaleX = -e.scaleX;
                    var t = new S.a(this,30,125,g.a.lazySpriteKey,"ani_torch/torch_1.png",.9)
                      , a = (new S.a(this,30,123,g.a.lazySpriteKey,"ani_torch/torch_base.png",.9),
                    new S.a(this,672,125,g.a.lazySpriteKey,"ani_torch/torch_1.png",.9))
                      , i = new S.a(this,672,123,g.a.lazySpriteKey,"ani_torch/torch_base.png",.9);
                    i.scaleX = -i.scaleX,
                    t.anims.play("torch_burn"),
                    a.anims.play("torch_burn"),
                    this.btn_hover(null, !1);
                    var s = 110;
                    I.a.isPoki && (s += 40);
                    B.a.renderBadge(this, g.a.gameWidth - 60 - M.a.notchOffset, s, B.a.CurrentLevel, !0, .7),
                    w.a.renderButton(this, g.a.gameWidth - 60 - M.a.notchOffset, s + 90, .7),
                    W.a.renderButton(this, g.a.gameWidth - 60 - M.a.notchOffset, s + 155, .7),
                    U.a.shareSceneButton(this, g.a.gameWidth - 60 - M.a.notchOffset, s + 220, .7, C.a.SHARE_TYPE.ALL);
                    N.a.TaskUpdate(this, N.a.TASK_TYPE.REPEAT_LOGIN, Date.now())
                }
            }, {
                key: "btn_startGame",
                value: function(e) {
                    O.a.log("MAIN_MENU", "STARTING" + e),
                    u.a.newGame(e, 1),
                    0 == T.a.gameSettings.maxLevelUnlocked[e] ? this.myTransition.transitionToggle(!1, "GameScene") : (u.a.currentMode = e,
                    this.myTransition.transitionToggle(!1, "BT1_LevelSelect"))
                }
            }, {
                key: "btn_openGameOver",
                value: function() {
                    this.myTransition.transitionToggle(!1, "BT1_GameOver")
                }
            }, {
                key: "btn_hover",
                value: function(e, t) {
                    var a = "ui/devil_idle.png";
                    if (t)
                        switch (e) {
                        case y.a.BT1.MAINMENU_START1:
                            a = "ui/devil_startgame.png",
                            E.a.playSound(this, E.a.SND.UI_START_1P);
                            break;
                        case y.a.BT1.MAINMENU_START2:
                            a = "ui/devil_startgame2p.png",
                            E.a.playSound(this, E.a.SND.UI_START_2P);
                            break;
                        case y.a.BT1.MAINMENU_SETTINGS:
                            a = "ui/devil_settings.png",
                            E.a.playSound(this, E.a.SND.UI_OPEN_SETTINGS);
                            break;
                        case y.a.BT1.MAINMENU_SCORES:
                            E.a.playSound(this, E.a.SND.UI_OPEN_SETTINGS);
                        case y.a.BT1.MAINMENU_HELP:
                            a = "ui/devil_scores.png"
                        }
                    else
                        a = "ui/devil_idle.png";
                    this.devilSprite.setFrame(a)
                }
            }, {
                key: "btn_openSettings_BS1",
                value: function() {
                    O.a.log("MAINMENU", "Open settings!"),
                    x.a.LogClick(x.a.CLICK_TYPE.SETTINGS),
                    this.myTransition.transitionToggle(!1, "BT1_Settings")
                }
            }, {
                key: "btn_openHelp_BS1",
                value: function() {
                    O.a.log("BT1_Help", "Open scene!"),
                    x.a.LogClick(x.a.CLICK_TYPE.HELP),
                    this.myTransition.transitionToggle(!1, "BT1_Help")
                }
            }, {
                key: "btn_deleteSaveData",
                value: function() {
                    T.a.clearAllLocalStorage(!0)
                }
            }]),
            t
        }(Phaser.Scene);
        t.default = K
    },
    1146: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(21)
          , p = a(26)
          , m = a(0)
          , y = a(45)
          , g = a(8)
          , S = a(46)
          , E = a(1)
          , f = a(181)
          , T = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "BT1_Help"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "create",
                value: function() {
                    this.myTransition = new y.a(this).transitionOpen();
                    new S.a(this);
                    var e = new Phaser.Geom.Rectangle(10,10,m.a.gameWidth - 20,m.a.gameHeight - 20);
                    this.back_graphics = this.add.graphics(),
                    this.back_graphics.fillStyle(8947848, .9),
                    this.back_graphics.fillRectShape(e),
                    this.back_graphics.lineStyle(1, 5329233, 1),
                    this.back_graphics.strokeRectShape(e);
                    new u.a(this,625,405,100,48,{
                        text: p.a.BT1.SETTINGS_BACK,
                        size: 36,
                        fixY: 6
                    },this.myTransition.transitionToggle.bind(this.myTransition, !1, "BT1_MainMenu"),null,null,!0,!0);
                    new f.a(this),
                    this.add.bitmapText(m.a.gameWidth / 2, 33, m.a.fontNames.MENU, "- BONUS DROPS -", 35).setOrigin(.5, .5);
                    for (var t = [{
                        name: "100 points",
                        sprite: E.a.ITEM_TYPE.POINTS1
                    }, {
                        name: "200 points",
                        sprite: E.a.ITEM_TYPE.POINTS2
                    }, {
                        name: "300 points",
                        sprite: E.a.ITEM_TYPE.POINTS3
                    }, {
                        name: "400 points",
                        sprite: E.a.ITEM_TYPE.POINTS4
                    }, {
                        name: "extra time",
                        sprite: E.a.ITEM_TYPE.E_TIME
                    }, {
                        name: "shield",
                        sprite: E.a.ITEM_TYPE.S_PLAIN,
                        desc: "invincibility until hit by a bubble"
                    }, {
                        name: "slow motion",
                        sprite: E.a.ITEM_TYPE.S_TIME,
                        desc: "slows down bubbles"
                    }, {
                        name: "extra life",
                        sprite: E.a.ITEM_TYPE.E_LIFE
                    }, {
                        name: "single harpoon weapon",
                        sprite: E.a.ITEM_TYPE.W_SINGLE,
                        desc: "default weapon"
                    }, {
                        name: "hook weapon",
                        sprite: E.a.ITEM_TYPE.W_HOOK,
                        desc: "sticks to a wall"
                    }, {
                        name: "laser weapon",
                        sprite: E.a.ITEM_TYPE.W_LASER
                    }, {
                        name: "remote mine weapon",
                        sprite: E.a.ITEM_TYPE.W_MINE,
                        desc: "drop it, move away and shoot"
                    }], a = 0, i = 0, s = 0; s < t.length; s++) {
                        8 == s && (a = 0,
                        i = 1);
                        var n = 50 + 330 * i
                          , r = 70 + 50 * a;
                        new g.a(this,n,r,m.a.spriteKey,"items/" + t[s].sprite + ".png");
                        var o = this.add.bitmapText(n + 20, r, m.a.fontNames.MENU, t[s].name, 25);
                        if (o.setOrigin(0, .5),
                        null != t[s].desc) {
                            var l = this.add.bitmapText(n + 20, r + 20, m.a.fontNames.MENU, t[s].desc, 19);
                            l.setOrigin(0, .5),
                            l.alpha = .6,
                            o.y -= 10,
                            l.y -= 10
                        }
                        a++
                    }
                }
            }]),
            t
        }(Phaser.Scene);
        t.default = T
    },
    1150: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(132)
          , s = a.n(i)
          , n = a(0)
          , r = a(254)
          , o = a(20)
          , l = a(69)
          , h = a(5)
          , _ = a.n(h)
          , c = a(6)
          , d = a.n(c)
          , u = a(10)
          , p = a.n(u)
          , m = a(7)
          , y = a.n(m)
          , g = a(11)
          , S = a.n(g)
          , E = a(2)
          , f = a(9)
          , T = a(4)
          , v = function(e) {
            function t() {
                return _()(this, t),
                p()(this, y()(t).call(this, {
                    key: "TitleScene"
                }))
            }
            return S()(t, e),
            d()(t, [{
                key: "create",
                value: function() {
                    E.a.log("TITLE_SCENE", "Created Titlescene..", n.a.shortName);
                    var e = document.getElementById("bt-preloader");
                    if (null != e && (e.hidden = !0,
                    e.parentNode.removeChild(e)),
                    document.getElementById("bubble-trouble").style.display = "block",
                    window.myResize(),
                    0 == T.a.gameSettings.maxLevelUnlocked[f.a.MODES.SINGLE] || E.a.alwaysShowControls)
                        return f.a.newGame(f.a.MODES.SINGLE, 1),
                        void this.scene.start("GameScene");
                    n.a.isBT ? this.scene.start("BT1_MainMenu") : n.a.isBS2 ? this.scene.start("BS2_MainMenu") : n.a.isBS3 && this.scene.start("BS3_MainMenu")
                }
            }]),
            t
        }(Phaser.Scene)
          , b = a(41)
          , k = a.n(b)
          , P = a(83)
          , L = function(e) {
            function t() {
                var e;
                return _()(this, t),
                e = p()(this, y()(t).call(this, {
                    key: "FillerAdScene"
                })),
                P.a.adScene = k()(e),
                e
            }
            return S()(t, e),
            d()(t, [{
                key: "init",
                value: function() {
                    window.myResize()
                }
            }]),
            t
        }(Phaser.Scene)
          , A = a(22)
          , I = a(21)
          , M = a(26)
          , O = a(8)
          , D = a(45)
          , R = a(46)
          , B = a(25)
          , w = a(13)
          , N = a(15)
          , x = a(12)
          , C = a(103)
          , U = a(3)
          , W = function() {
            function e(t, a, i, s) {
                _()(this, e),
                E.a.log("EDITOR MESSAGE", t, a, i),
                a == e.MES_TYPE.INFO && this._showInfo(t, i)
            }
            return d()(e, [{
                key: "_showInfo",
                value: function(e, t) {
                    var a = n.a.gameHeight / 2
                      , i = e.add.graphics();
                    i.lineStyle(2, 14867459),
                    i.fillStyle(0, .9),
                    i.strokeRect(-1e3, a, n.a.gameWidth + 2e3, 30),
                    i.fillRect(-1e3, a, n.a.gameWidth + 2e3, 30),
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.UIOVER, i);
                    var s = 0;
                    n.a.isBT && (s = 6);
                    var r = e.add.bitmapText(n.a.gameWidth / 2, a + s, n.a.fontNames.MENU, t, 25);
                    r.setOrigin(.5, 0),
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.UIOVER, r),
                    i.alpha = 0,
                    r.alpha = 0;
                    e.add.tween({
                        targets: [i, r],
                        alpha: 1,
                        duration: 200
                    }),
                    e.add.tween({
                        targets: [i, r],
                        alpha: 0,
                        duration: 200,
                        delay: 1400
                    })
                }
            }]),
            e
        }();
        W.MES_TYPE = {
            INFO: "info",
            CONFIRM: "confirm",
            INPUT: "input"
        };
        var Y = W
          , K = a(29)
          , G = a(77)
          , H = a(1)
          , V = function(e) {
            function t() {
                return _()(this, t),
                p()(this, y()(t).call(this, {
                    key: "MyTasksScene"
                }))
            }
            return S()(t, e),
            d()(t, [{
                key: "create",
                value: function() {
                    this.myTransition = new D.a(this).transitionOpen();
                    new R.a(this,!1);
                    if (n.a.isBS3) {
                        this.add.sprite(.5 * n.a.gameWidth, .5 * n.a.gameHeight, "mainmenu_background"),
                        new O.a(this,412,451,n.a.lazySpriteKey,"ui/menu_start1.png");
                        var e = new Phaser.Geom.Rectangle(-20,-20,n.a.gameWidth + 40,n.a.gameHeight + 40)
                          , t = this.add.graphics();
                        t.fillStyle(0, .65),
                        t.fillRectShape(e)
                    }
                    if (this._taskCellRenders = [],
                    this.gridStartX = 0 + N.a.notchOffset,
                    this.gridStartY = 180,
                    this.gridCols = 3.5,
                    this.gridRows = 3,
                    this.cellWidth = n.a.gameWidth / this.gridCols,
                    this.cellHeight = (n.a.gameHeight - this.gridStartY) / this.gridRows,
                    this.cellOffsetBorder = 1,
                    this.cellOffsetText = 3,
                    this.cellOffsetCheckmarkX = this.cellWidth - 30,
                    this.cellOffsetCheckmarkY = this.cellHeight - 20,
                    this.cellOffsetPinX = this.cellWidth - 4,
                    this.cellOffsetPinY = 2,
                    this.cellDefaultStrokeCol = 3487285,
                    n.a.isBS3 && (this.cellDefaultStrokeCol = 7090600),
                    this.cellBubbleMasterStrokeCol = 14475273,
                    n.a.isBS3 && (this.cellBubbleMasterStrokeCol = 14569303),
                    this.cellDefaultBackCol = 6119517,
                    n.a.isBS3 && (this.cellDefaultBackCol = 988996),
                    this.cellCompletedBackCol = 5876480,
                    n.a.isBS3 && (this.cellCompletedBackCol = 7090600),
                    this.cellCompletedStrokeCol = 3169536,
                    n.a.isBS3 && (this.cellCompletedStrokeCol = 14403313),
                    this.cellCollectedBackCol = 2574848,
                    n.a.isBS3 && (this.cellCollectedBackCol = 4426479),
                    this.cellPinnedBackCol = 9568444,
                    n.a.isBS3 && (this.cellPinnedBackCol = 3699837),
                    this.cellBubbleMasterCol = 14037563,
                    n.a.isBS3 && (this.cellBubbleMasterCol = 10961322),
                    this._animateXpCount_Tween = null,
                    this.tasksContainer = null,
                    this.badgesWidth = 0,
                    this.badgesPositionX = 0,
                    this._createBadges(),
                    this._renderTasks(),
                    this.makeTasksScrollable(),
                    this.renderBubbleMasterCheckmark(),
                    this.sys.events.once("shutdown", C.a.save),
                    n.a.isBT) {
                        var a = new A.a(this,70 + N.a.notchOffset,45,130,77,"ui/main_menu_back.png",{
                            top: 30,
                            bottom: 30,
                            left: 30,
                            right: 30
                        });
                        U.a.mySpriteDepth(U.a.RENDER_DEPTH.UIOVER, a.ninePatch)
                    }
                    var i = 6;
                    (n.a.isBS2 || n.a.isBS3) && (i = 0);
                    var s = new I.a(this,70 + N.a.notchOffset,45,100,47,{
                        text: M.a.BT1.SETTINGS_BACK,
                        size: 32,
                        fixY: i
                    },this.backToMainMenu.bind(this),null,null,!1,!0);
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.UIOVER, s.backgroundNinePatch.ninePatch),
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.UIOVER, s.myText),
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.UIOVER, s.focusedNinePatch.ninePatch);
                    var r = 40 + N.a.notchOffset;
                    (n.a.isBS2 || n.a.isBS3) && (r = 52 + N.a.notchOffset);
                    new G.a.shareSceneButton(this,r,130,.8,H.a.SHARE_TYPE.RANK)
                }
            }, {
                key: "_createBadges",
                value: function() {
                    var e = .5 * n.a.gameWidth
                      , t = 190;
                    this.badges = [],
                    this.badgesPositionX = e - B.a.CurrentLevel * t - t;
                    for (var a = this.badgesPositionX, i = 0; i < B.a.RANK_NAMES.length; i++) {
                        a += t,
                        this.badgesWidth += t;
                        var s = null;
                        n.a.isBS3 && 6 == i && (s = 1.15);
                        var r = B.a.renderBadge(this, a, 90, i, !1, s);
                        if (i < B.a.RANK_NAMES.length - 1 && i >= B.a.CurrentLevel) {
                            var o = new O.a(this,a + 95,90,n.a.lazySpriteKey,"retention/arrow.png");
                            r.arrow = o,
                            i == B.a.CurrentLevel && (o.x += 25,
                            a += 25)
                        }
                        this.badges.push(r)
                    }
                    this.makeBadgesScrollable()
                }
            }, {
                key: "_renderTasks",
                value: function() {
                    this._taskCellRenders = [],
                    this.tasksContainer = this.add.container();
                    for (var e = 0, t = 0, a = 0; a < w.a._TASKS[B.a.CurrentLevel].length; a++) {
                        e == this.gridRows && (t++,
                        e = 0);
                        var i = w.a._TASKS[B.a.CurrentLevel][a]
                          , s = this._renderTaskCell(i, t, e);
                        this._taskCellRenders.push(s),
                        e++
                    }
                }
            }, {
                key: "_renderTaskCell",
                value: function(e, t, a) {
                    var i = t * this.cellWidth
                      , s = a * this.cellHeight
                      , r = this.gridStartX + i + this.cellOffsetBorder
                      , o = this.gridStartY + s + this.cellOffsetBorder
                      , l = this._renderTaskBackground(r, o, e)
                      , h = this.add.bitmapText(r + this.cellOffsetText, o + this.cellOffsetText, n.a.fontNames.MENU, e.taskDescr, 20);
                    h.maxWidth = this.cellWidth - 2 * this.cellOffsetText,
                    h.letterSpacing = -1;
                    var _ = new O.a(this,r + this.cellOffsetCheckmarkX,o + this.cellOffsetCheckmarkY,n.a.lazySpriteKey,"retention/checkmark.png")
                      , c = new O.a(this,r + this.cellOffsetPinX,o + this.cellOffsetPinY,n.a.lazySpriteKey,"retention/pin_task.png");
                    c.setOrigin(1, 0);
                    var d = this.add.graphics();
                    this.tasksContainer.add([h, _, c, d]);
                    var u = {
                        calcedX: r,
                        calcedY: o,
                        currentVal: e.methods.getValue(),
                        task: e,
                        backGraphics: l,
                        checkmark: _,
                        pinSprite: c,
                        pinButton: d
                    }
                      , p = this;
                    return d.setInteractive({
                        useHandCursor: !0,
                        hitArea: new Phaser.Geom.Rectangle(r,o,this.cellWidth,this.cellHeight),
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    d.on("pointerup", (function(t) {
                        if (p.tasksContainer_savex == p.tasksContainer.x && 0 == p.tasksContainer_flickLastX) {
                            if (e.hideProgress)
                                return;
                            var a = T.a.gameSettings.taskPinned;
                            if (null != T.a.gameSettings.taskPinned)
                                for (var i = 0; i < p._taskCellRenders.length; i++) {
                                    var s = p._taskCellRenders[i];
                                    T.a.gameSettings.taskPinned == s.task.uid && (T.a.gameSettings.taskPinned = null,
                                    p._renderTaskBackground(s.calcedX, s.calcedY, s.task, s.backGraphics),
                                    s.pinSprite.visible = !1)
                                }
                            a != e.uid ? (T.a.gameSettings.taskPinned = e.uid,
                            p._renderTaskBackground(r, o, e, l),
                            c.visible = !0,
                            new Y(p,Y.MES_TYPE.INFO,"PINNED A NEW TASK"),
                            e.methods.showPinnedTaskProgress()) : new Y(p,Y.MES_TYPE.INFO,"UNPINNED THE TASK")
                        }
                    }
                    )),
                    T.a.gameSettings.tasksCollected.includes(e.uid) ? (this._renderTaskBackground(r, o, e, u.backGraphics),
                    c.visible = !1,
                    d.visible = !1) : T.a.gameSettings.tasksCompleted.includes(e.uid) ? (this._renderCompletedTask(r, o, u),
                    c.visible = !1,
                    d.visible = !1) : (_.alpha = 0,
                    this._renderTaskProgress(r, o, u),
                    T.a.gameSettings.taskPinned != e.uid && (c.visible = !1)),
                    u
                }
            }, {
                key: "_renderTaskBackground",
                value: function(e, t, a) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    null == i ? (i = this.add.graphics(),
                    this.tasksContainer.add([i])) : i.clear();
                    var s = this.cellDefaultBackCol
                      , n = this.cellDefaultStrokeCol;
                    return T.a.gameSettings.tasksCompleted.includes(a.uid) && (s = this.cellCollectedBackCol),
                    T.a.gameSettings.taskPinned == a.uid && (s = this.cellPinnedBackCol),
                    a.taskType == w.a.TASK_TYPE.BUBBLE_MASTER && (s = this.cellBubbleMasterCol,
                    n = this.cellBubbleMasterStrokeCol),
                    s != this.cellCollectedBackCol && (i.lineStyle(3, n, 1),
                    i.strokeRect(e, t, this.cellWidth - 2 * this.cellOffsetBorder, this.cellHeight - 2 * this.cellOffsetBorder)),
                    i.fillStyle(s, .8),
                    i.fillRect(e, t, this.cellWidth - 2 * this.cellOffsetBorder, this.cellHeight - 2 * this.cellOffsetBorder),
                    i
                }
            }, {
                key: "_renderTaskProgress",
                value: function(e, t, a) {
                    var i = 10
                      , s = 15
                      , r = this.cellHeight - s - 10
                      , o = this.cellWidth - 53
                      , l = 14475273;
                    n.a.isBS3 && (l = 10437839);
                    var h = 14633551;
                    n.a.isBS3 && (h = l);
                    var _ = 14633551;
                    n.a.isBS3 && (_ = 15454790);
                    var c = this.add.graphics();
                    c.lineStyle(2, l, 1),
                    c.fillStyle(h, .2),
                    c.strokeRect(e + i, t + r, this.cellWidth - i - 70, s),
                    c.fillRect(e + i, t + r, this.cellWidth - i - 70, s);
                    var d = a.currentVal / a.task.goalNum;
                    d > 1 && (d = 1),
                    c.fillStyle(_, 1),
                    c.fillRect(e + i, t + r, (this.cellWidth - i - 70) * d, s);
                    var u = this.add.graphics();
                    u.fillStyle(0, .35),
                    u.fillRect(e + o, t + this.cellHeight - 20 - 8, 48, 20);
                    var p = this.add.bitmapText(e + i + (this.cellWidth - i - 70) / 2, t + r + 7.5, n.a.lazyFontNames.RETENTION_XP, a.currentVal + "/" + a.task.goalNum, 12);
                    p.setOrigin(.5, .5);
                    var m = new O.a(this,e + this.cellWidth - 47,p.y,n.a.lazySpriteKey,"retention/xp_icon.png")
                      , y = this.add.bitmapText(e + this.cellWidth - 19, p.y + 1, n.a.lazyFontNames.RETENTION_XP, a.task.rewXp, 18);
                    if (y.setOrigin(.5, .5),
                    a.task.hideProgress && (c.visible = !1,
                    p.visible = !1),
                    a.task.taskType == w.a.TASK_TYPE.BUBBLE_MASTER) {
                        u.visible = !1,
                        y.visible = !1,
                        m.visible = !1,
                        p.destroy();
                        var g = T.a.gameSettings.taskCompleteDateLast - T.a.gameSettings.taskCompleteDateFirst
                          , S = Math.floor(g / 24 / 60 / 60 / 1e3)
                          , E = Math.floor((g - 24 * S * 60 * 60 * 1e3) / 60 / 60 / 1e3)
                          , f = Math.floor((g - 24 * S * 60 * 60 * 1e3 - 60 * E * 60 * 1e3) / 60 / 1e3)
                          , v = Math.floor((g - 24 * S * 60 * 60 * 1e3 - 60 * E * 60 * 1e3 - 60 * f * 1e3) / 1e3);
                        (p = this.add.bitmapText(e + i + (this.cellWidth - i - 70) / 2, t + r + 7.5, n.a.fontNames.MENU, S + " days, " + E + "h, " + f + "min, " + v + "secs", 12)).y += 5,
                        p.setOrigin(.5, .5),
                        p.visible = !1,
                        a.fillTxt = p
                    }
                    this.tasksContainer.add([c, u, p, m, y])
                }
            }, {
                key: "_renderCompletedTask",
                value: function(e, t, a) {
                    var i = this.add.graphics();
                    i.fillStyle(this.cellCompletedBackCol, 1),
                    i.fillRect(e, t, this.cellWidth - 2 * this.cellOffsetBorder, this.cellHeight - 2 * this.cellOffsetBorder),
                    i.lineStyle(5, this.cellCompletedStrokeCol, 1),
                    i.strokeRect(e, t, this.cellWidth - 2 * this.cellOffsetBorder, this.cellHeight - 2 * this.cellOffsetBorder),
                    i.fillStyle(0, .5),
                    i.fillRect(e + this.cellWidth / 2 - 75, t + 10, 150, 30);
                    var s = new O.a(this,e + this.cellWidth / 2,t + 10 + 15,n.a.lazySpriteKey,"retention/xp_icon.png");
                    s.setOrigin(1, .5);
                    var r = 3;
                    (n.a.isBS2 || n.a.isBS3) && (r = 0);
                    var o = this.add.bitmapText(e + this.cellWidth / 2, t + 10 + 15 + r, n.a.lazyFontNames.RETENTION_XP, a.task.rewXp, 22);
                    o.setOrigin(0, .5);
                    var l = this.add.bitmapText(e + this.cellWidth / 2, t + this.cellHeight - 5, n.a.fontNames.MENU, "COLLECT", 26);
                    l.setOrigin(.5, 1);
                    var h = this;
                    i.setInteractive({
                        useHandCursor: !0,
                        hitArea: new Phaser.Geom.Rectangle(e,t,this.cellWidth,this.cellHeight),
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    i.on("pointerup", (function(r) {
                        if (h.tasksContainer_savex == h.tasksContainer.x && 0 == h.tasksContainer_flickLastX) {
                            i.removeInteractive(),
                            T.a.gameSettings.taskPinned == a.task.uid && (T.a.gameSettings.taskPinned = null),
                            T.a.gameSettings.tasksCollected.push(a.task.uid),
                            T.a.saveUserSettings(),
                            h.time.addEvent({
                                delay: 1e3,
                                callback: function() {
                                    B.a.CurrentBadge.progressContainer && (null != h._animateXpCount_Tween && h._animateXpCount_Tween.stop(),
                                    h._animateXpCount_Tween = h.tweens.addCounter({
                                        from: w.a.Experience - a.task.rewXp,
                                        to: w.a.Experience,
                                        duration: 400,
                                        onUpdate: function(e) {
                                            B.a.updateCrntBadgeProgress(Math.round(e.getValue()))
                                        },
                                        onComplete: function() {
                                            w.a.Experience == w.a.LEVEL_POINTS[B.a.CurrentBadge.badgeLevel] && h.renderLevelUp()
                                        }
                                    }),
                                    B.a.CurrentBadge.progressContainer.scale = 1,
                                    h.add.tween({
                                        targets: B.a.CurrentBadge.progressContainer,
                                        scale: 1.1,
                                        ease: Phaser.Math.Easing.Linear,
                                        duration: 50,
                                        yoyo: !0,
                                        loop: 2
                                    }))
                                }
                            });
                            var _ = e + h.cellWidth / 2
                              , c = t + h.cellHeight / 2
                              , d = h.add.container(_ + h.tasksContainer.x, c);
                            i.x -= _,
                            i.y -= c,
                            s.x -= _,
                            s.y -= c,
                            o.x -= _,
                            o.y -= c,
                            l.x -= _,
                            l.y -= c,
                            d.add([i, s, o, l]),
                            x.a.playSound(h, x.a.SND.RETENTION_XP),
                            h.add.tween({
                                targets: d,
                                duration: 200,
                                scale: .5,
                                alpha: 0,
                                ease: Phaser.Math.Easing.Back.In,
                                onComplete: function() {
                                    for (var e = 0; e < 15; e++) {
                                        var t = new O.a(h,d.x,d.y,n.a.lazySpriteKey,"retention/xp_icon.png");
                                        h.add.tween({
                                            targets: t,
                                            duration: 200 + 100 * Math.random(),
                                            x: d.x - 60 + 120 * Math.random(),
                                            y: d.y - 20 + 40 * Math.random(),
                                            onComplete: function() {
                                                B.a.CurrentBadge.progressContainer && h.add.tween({
                                                    targets: this,
                                                    duration: 250,
                                                    delay: 301 + Math.random(300),
                                                    x: B.a.CurrentBadge.progressContainer.x,
                                                    y: B.a.CurrentBadge.progressContainer.y,
                                                    scale: 1,
                                                    ease: Phaser.Math.Easing.Quadratic.In,
                                                    onComplete: function() {
                                                        this.visible = !1
                                                    },
                                                    onCompleteScope: this
                                                })
                                            },
                                            onCompleteScope: t
                                        }, t),
                                        h.add.tween({
                                            targets: t,
                                            scale: 1.4,
                                            duration: 450,
                                            ease: Phaser.Math.Easing.Elastic.Out
                                        })
                                    }
                                },
                                onCompleteScope: h
                            }),
                            a.checkmark.alpha = 0,
                            a.checkmark.scale = 2.2,
                            h.add.tween({
                                targets: a.checkmark,
                                alpha: 1,
                                scale: 1,
                                duration: 200,
                                delay: 900,
                                ease: Phaser.Math.Easing.Sine.in
                            }),
                            h._renderTaskBackground(e, t, a.task, a.backGraphics)
                        }
                    }
                    ), this),
                    this.tasksContainer.add([i, s, o, l])
                }
            }, {
                key: "renderBubbleMasterCheckmark",
                value: function() {
                    if (B.a.IsFullXp)
                        for (var e = 0; e < this._taskCellRenders.length; e++) {
                            var t = this._taskCellRenders[e];
                            t.task.taskType == w.a.TASK_TYPE.BUBBLE_MASTER && (t.checkmark.alpha = 1,
                            t.fillTxt.visible = 1)
                        }
                }
            }, {
                key: "renderLevelUp",
                value: function() {
                    E.a.log("LEVELUP!");
                    var e = "new RANK";
                    n.a.isBS2 ? e = "new LEVEL" : n.a.isBS3 && (e = "NEW BADGE!");
                    B.a.RANK_NAMES[B.a.CurrentLevel];
                    var t = "YOU UNLOCKED " + w.a._TASKS[B.a.CurrentLevel].length + " NEW TASKS";
                    x.a.playSound(this, x.a.SND.RETENTION_LEVELUP);
                    var a = this.add.container();
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.GAME_POPUP, a),
                    a.alpha = 0;
                    var i = this.add.graphics();
                    i.fillStyle(0, 1),
                    i.fillRect(N.a.cameraOffset.x, N.a.cameraOffset.y, n.a.gameWidth + 2 * -N.a.cameraOffset.x, n.a.gameHeight + 2 * -N.a.cameraOffset.y);
                    var s = B.a.renderBadge(this, n.a.gameWidth / 2, n.a.gameHeight / 2, B.a.CurrentLevel, !1, 2)
                      , r = s.getBadgeDisplayElements(!1);
                    s.progressBack && (s.progressBack.visible = !1),
                    s.progressBar && (s.progressBar.visible = !1),
                    s.progressTxt && (s.progressTxt.visible = !1),
                    s.badgeStars && (s.badgeStars.visible = !1);
                    var o = this.add.bitmapText(.5 * n.a.gameWidth, .15 * n.a.gameHeight, n.a.fontNames.MENU, e, 40).setOrigin(.5, .5)
                      , l = this.add.bitmapText(.5 * n.a.gameWidth, .85 * n.a.gameHeight, n.a.fontNames.MENU, t, 25).setOrigin(.5, .5);
                    B.a.IsFullXp && (o.text = "",
                    l.text = "WOW. YOU ARE THE BUBBLE MASTER.",
                    null == T.a.gameSettings.taskCompleteDateLast && (T.a.gameSettings.taskCompleteDateLast = Date.now())),
                    a.add([i, o, l]),
                    a.add(r);
                    var h = this;
                    this.add.tween({
                        targets: a,
                        alpha: 1,
                        duration: 220
                    }),
                    this.add.tween({
                        delay: 2500,
                        targets: a,
                        alpha: 0,
                        duration: 220
                    }),
                    this.time.addEvent({
                        delay: 250,
                        callback: function() {
                            h.tasksContainer.destroy();
                            for (var e = 0; e < h.badges.length; e++)
                                h.badges[e].destroyBadge();
                            h._createBadges(),
                            w.a.resetLevelTasksData(),
                            h._renderTasks(),
                            h.makeTasksScrollable(),
                            h.renderBubbleMasterCheckmark(),
                            K.a.LogRankUpgrade()
                        }
                    })
                }
            }, {
                key: "makeTasksScrollable",
                value: function() {
                    if (null != this.tasksContainer) {
                        this.input.topOnly = !1,
                        this.draggableTasks = new O.a(this,this.gridStartX,this.gridStartY,n.a.spriteKey,"ui/black.png"),
                        this.draggableTasks.displayWidth = n.a.gameWidth - this.gridStartX - 2 * N.a.notchOffset,
                        this.draggableTasks.displayHeight = n.a.gameHeight - this.gridStartY,
                        this.draggableTasks.setOrigin(0, 0),
                        this.draggableTasks.alpha = .01,
                        this.draggableTasks.setInteractive({
                            useHandCursor: !0
                        }),
                        this.input.setDraggable(this.draggableTasks),
                        this.tasksContainer_savex = this.tasksContainer.x,
                        this.tasksContainer_width = Math.ceil(w.a._TASKS[B.a.CurrentLevel].length / this.gridRows) * this.cellWidth - n.a.gameWidth + 2 * N.a.notchOffset,
                        this.tasksContainer_tween = null,
                        this.tasksContainer_flickLastX = 0,
                        this.tasksContainer_flickLimitX = 20,
                        this.draggingTasks_on = !1;
                        var e = this;
                        this.input.on("pointerdown", (function(t, a, i, s) {
                            e.tasksContainer_width < 0 || t.y + N.a.cameraOffset.y < e.gridStartY || (e.draggingTasks_on = !0,
                            e.tasksContainer_savex = e.tasksContainer.x,
                            e.tasksContainer_flickLastX = 0,
                            null != e.tasksContainer_tween && e.tasksContainer_tween.stop())
                        }
                        )),
                        this.input.on("pointerup", (function(i) {
                            if (e.draggingTasks_on) {
                                e.draggingTasks_on = !1;
                                var s = a(e.tasksContainer.x + 5 * e.tasksContainer_flickLastX)
                                  , n = 2 * Math.abs(s - e.tasksContainer.x);
                                e.tasksContainer_tween = e.add.tween({
                                    targets: e.tasksContainer,
                                    x: s,
                                    duration: n,
                                    ease: Phaser.Math.Easing.Cubic.Out,
                                    onComplete: t,
                                    onCompleteScope: e
                                })
                            }
                        }
                        )),
                        this.input.on("drag", (function(t, i, s, n) {
                            if (e.draggingTasks_on && i == e.draggableTasks) {
                                e.tasksContainer_flickLastX = s - e.tasksContainer.x + e.tasksContainer_savex - N.a.notchOffset;
                                var r = a(e.tasksContainer_savex + s - N.a.notchOffset);
                                e.tasksContainer.x = r
                            }
                        }
                        ))
                    }
                    function t() {
                        e.tasksContainer.x > 0 ? e.tasksContainer_tween = e.add.tween({
                            targets: e.tasksContainer,
                            x: 0,
                            duration: 400,
                            ease: Phaser.Math.Easing.Back.Out
                        }) : e.tasksContainer.x < -e.tasksContainer_width && (e.tasksContainer_tween = e.add.tween({
                            targets: e.tasksContainer,
                            x: -e.tasksContainer_width,
                            duration: 400,
                            ease: Phaser.Math.Easing.Back.Out
                        }))
                    }
                    function a(t) {
                        return t > 0 + e.tasksContainer_flickLimitX ? t = e.tasksContainer_flickLimitX : t < -e.tasksContainer_width - e.tasksContainer_flickLimitX && (t = -e.tasksContainer_width - e.tasksContainer_flickLimitX),
                        t
                    }
                }
            }, {
                key: "makeBadgesScrollable",
                value: function() {
                    this.draggableBadges = new O.a(this,N.a.cameraOffset.x,0,n.a.spriteKey,"ui/black.png"),
                    this.draggableBadges.displayWidth = n.a.gameWidth - 2 * N.a.cameraOffset.x,
                    this.draggableBadges.displayHeight = this.gridStartY,
                    this.draggableBadges.setOrigin(0, 0),
                    this.draggableBadges.alpha = .01,
                    this.draggableBadges.setInteractive({
                        useHandCursor: !0
                    }),
                    this.input.setDraggable(this.draggableBadges),
                    this.draggableBadges_savex = 0,
                    this.draggableBadges_originalX = this.badgesPositionX,
                    this.draggableBadges_tween = null,
                    this.draggingBadges_on = !1;
                    var e = this;
                    this.input.on("pointerdown", (function(t, a, i, s) {
                        t.y + N.a.cameraOffset.y > e.gridStartY || (e.draggingBadges_on = !0,
                        e.draggableBadges_savex = t.x,
                        e.draggableBadges_flickLastX = 0,
                        null != e.draggableBadges_tween && e.draggableBadges_tween.stop())
                    }
                    )),
                    this.input.on("pointerup", (function(t) {
                        if (e.draggingBadges_on) {
                            e.draggingBadges_on = !1;
                            var a = e.draggableBadges_originalX - e.badgesPositionX
                              , i = .5 * Math.abs(a)
                              , s = e.badgesPositionX;
                            e.tweens.addCounter({
                                from: e.badgesPositionX,
                                to: e.draggableBadges_originalX,
                                duration: i,
                                onUpdate: function(t) {
                                    var a = s - t.getValue();
                                    s = t.getValue();
                                    for (var i = 0; i < e.badges.length; i++)
                                        e.badges[i].moveBadgeBy(-a, 0)
                                },
                                ease: Phaser.Math.Easing.Cubic.Out
                            }),
                            e.badgesPositionX += a
                        }
                    }
                    )),
                    this.input.on("drag", (function(t, a, i, s) {
                        if (a == e.draggableBadges) {
                            for (var n = e.draggableBadges_savex - t.x, r = 0; r < e.badges.length; r++)
                                e.badges[r].moveBadgeBy(-n, 0);
                            e.badgesPositionX -= n,
                            e.draggableBadges_savex -= n
                        }
                    }
                    ))
                }
            }, {
                key: "backToMainMenu",
                value: function() {
                    this.input.topOnly = !0;
                    var e = "BT1_MainMenu";
                    n.a.isBS2 ? e = "BS2_MainMenu" : n.a.isBS3 && (e = "BS3_MainMenu"),
                    T.a.saveUserSettings(),
                    this.myTransition.transitionToggle(!1, e)
                }
            }]),
            t
        }(Phaser.Scene)
          , z = a(27)
          , F = a(106)
          , X = function(e) {
            function t() {
                return _()(this, t),
                p()(this, y()(t).call(this, {
                    key: "MyUpgradesScene"
                }))
            }
            return S()(t, e),
            d()(t, [{
                key: "create",
                value: function() {
                    this.myTransition = new D.a(this).transitionOpen();
                    new R.a(this,!1);
                    if (n.a.isBS3) {
                        this.add.sprite(.5 * n.a.gameWidth, .5 * n.a.gameHeight, "mainmenu_background");
                        var e = new Phaser.Geom.Rectangle(-20,-20,n.a.gameWidth + 40,n.a.gameHeight + 40)
                          , t = this.add.graphics();
                        t.fillStyle(0, .65),
                        t.fillRectShape(e)
                    }
                    if (n.a.isBT)
                        new A.a(this,70,45,130,77,"ui/main_menu_back.png",{
                            top: 30,
                            bottom: 30,
                            left: 30,
                            right: 30
                        });
                    var a = 6;
                    (n.a.isBS2 || n.a.isBS3) && (a = 0);
                    new I.a(this,70,45,100,47,{
                        text: M.a.BT1.SETTINGS_BACK,
                        size: 32,
                        fixY: a
                    },this.backToMainMenu.bind(this),null,null,!1,!0);
                    if (this.gridStartX = 200,
                    (n.a.isBS2 || n.a.isBS3) && (this.gridStartX = 150),
                    this.gridEndX = n.a.gameWidth - 10,
                    this.gridStartY = 10,
                    this.gridEndY = n.a.gameHeight - 10,
                    this.gridSpacingY = 10,
                    this.cellWidth = this.gridEndX - this.gridStartX,
                    this.cellHeight = this.gridEndY - this.gridStartY - (z.a.ITEMS.length - 1) * this.gridSpacingY,
                    this.cellHeight /= z.a.ITEMS.length,
                    this.backCol = 7895928,
                    n.a.isBS2 && (this.backCol = 5987163),
                    n.a.isBS3 && (this.backCol = 5727886),
                    this.backColAlpha = 1,
                    n.a.isBS3 && (this.backColAlpha = .5),
                    this.backStrokeCol = 4869194,
                    n.a.isBS3 && (this.backStrokeCol = 7443676),
                    this.backStrokeSize = 4,
                    n.a.isBS2 && (this.backStrokeSize = 2),
                    n.a.isBS3 && (this.backStrokeSize = 2),
                    n.a.isBT) {
                        var i = this.add.graphics();
                        i.fillStyle(this.backCol, this.backColAlpha),
                        i.lineStyle(this.backStrokeSize, this.backStrokeCol),
                        i.fillRect(5, 139, 170, 100),
                        i.strokeRect(5, 139, 170, 100);
                        var s = this.add.bitmapText(90, 190, n.a.fontNames.MENU, H.a.UPGRADE_TIP, 20);
                        s.setOrigin(.5, .5),
                        s.maxWidth = 160
                    }
                    var r, o = this.add.graphics();
                    if (o.fillStyle(this.backCol, this.backColAlpha),
                    o.lineStyle(this.backStrokeSize, this.backStrokeCol),
                    n.a.isBT)
                        r = this.add.sprite(80, 355, n.a.lazySpriteKey, "retention/upgrade_left_back.png");
                    else {
                        var l = {
                            top: 10,
                            bottom: 10,
                            left: 10,
                            right: 10
                        };
                        (r = new A.a(this,70,355,64,43,"ui/ingame/interface_box.png",l)).x = r.ninePatch.x,
                        r.y = r.ninePatch.y
                    }
                    this.pointsLeftTxt = this.add.bitmapText(r.x, r.y, n.a.lazyFontNames.RETENTION_XP, "100", 24),
                    this.pointsLeftTxt.setOrigin(.5, .5);
                    this.pointsLeftTxt.x += -3,
                    this.pointsLeftTxt.y += 1;
                    var h = this.add.bitmapText(this.pointsLeftTxt.x, this.pointsLeftTxt.y, n.a.fontNames.MENU, "UPGRADE POINTS:", 19);
                    h.setOrigin(.5, .5),
                    h.x += 3,
                    h.y += -43;
                    var _ = 150;
                    (n.a.isBS2 || n.a.isBS3) && (_ = 125);
                    var c = r.x - _ / 2
                      , d = r.y - 75;
                    o.fillRect(c + 0, d + 10, _, 150),
                    o.strokeRect(c + 0, d + 10, _, 150);
                    var u = 6;
                    (n.a.isBS2 || n.a.isBS3) && (u = 0);
                    new I.a(this,r.x + 0,r.y + 55,100,47,{
                        text: M.a.BT1.RESET,
                        size: 32,
                        fixY: u
                    },this.resetLevelPoints.bind(this));
                    this.updateLevelPointsLeft(),
                    this.renderItems(),
                    this.sys.events.once("shutdown", C.a.save),
                    0 == B.a.CurrentLevel ? new F.a(this,F.a.MSGS.UPGRADE_LOW_RANK) : new F.a(this,F.a.MSGS.FINISH_LEVELS_FOR_UPGRADE_PTS)
                }
            }, {
                key: "resetLevelPoints",
                value: function() {
                    for (var e = 0; e < z.a.ITEMS.length; e++) {
                        for (var t = 0; t < z.a.ITEMS[e].upgradePrice.length; t++)
                            T.a.gameSettings.levelPointsDistributed[e][t] = 0;
                        z.a.ITEMS[e].updateMarkersColors(),
                        z.a.ITEMS[e].refreshUpgrade()
                    }
                    this.updateLevelPointsLeft()
                }
            }, {
                key: "updateLevelPointsLeft",
                value: function() {
                    this.pointsLeftTxt.text = z.a.UndistributedLevelPoints
                }
            }, {
                key: "renderItems",
                value: function() {
                    for (var e = 0; e < z.a.ITEMS.length; e++)
                        this.renderItem(e, z.a.ITEMS[e])
                }
            }, {
                key: "renderItem",
                value: function(e, t) {
                    var a = this.gridStartX
                      , i = this.gridStartY + (this.gridSpacingY + this.cellHeight) * e
                      , s = 10;
                    n.a.isBS2 && (s = 5);
                    var r = 10;
                    n.a.isBS2 && (r = 5);
                    var o = 43;
                    n.a.isBS2 && (o = 35);
                    var l = 12;
                    n.a.isBS2 && (l = 0),
                    n.a.isBS3 && (l = 5);
                    var h = 10;
                    n.a.isBS2 && (h = 70);
                    var _ = 150;
                    n.a.isBS2 && (_ = 10);
                    var c = 40;
                    n.a.isBS2 && (c = 38),
                    n.a.isBS3 && (c = 36);
                    var d = 130;
                    n.a.isBS2 && (d = 120),
                    n.a.isBS3 && (d = 120);
                    var u = 100;
                    n.a.isBS2 && (u = this.cellHeight),
                    n.a.isBS3 && (u = this.cellHeight);
                    var p = 200;
                    n.a.isBS2 && (p = 210),
                    n.a.isBS3 && (p = 210);
                    var m = 27;
                    n.a.isBS2 && (m = 21),
                    n.a.isBS3 && (m = 27);
                    var y = 18;
                    (n.a.isBS2 || n.a.isBS3) && (y = 22);
                    var g = 400;
                    (n.a.isBS2 || n.a.isBS3) && (g = 420);
                    var S = 23;
                    (n.a.isBS2 || n.a.isBS3) && (S = 20);
                    var f = .5;
                    n.a.isBS2 && (f = .65),
                    n.a.isBS3 && (f = .8);
                    var v = 400;
                    n.a.isBS2 && (v = 420),
                    n.a.isBS3 && (v = 420);
                    var b = 66;
                    n.a.isBS2 && (b = 55),
                    n.a.isBS3 && (b = 65);
                    var k = this.add.graphics();
                    k.fillStyle(this.backCol, .85 * this.backColAlpha),
                    k.lineStyle(this.backStrokeSize, this.backStrokeCol, 1),
                    k.fillRect(a, i, this.cellWidth, this.cellHeight),
                    k.strokeRect(a, i, this.cellWidth, this.cellHeight),
                    this.add.sprite(a + s, i + r, n.a.lazySpriteKey, t.icon).setOrigin(0, 0),
                    this.add.bitmapText(a + o, i + l, n.a.fontNames.MENU, t.title, 30).setOrigin(0, 0);
                    var P = this.add.bitmapText(a + h, i + c, n.a.fontNames.MENU, t.description, 18);
                    P.setOrigin(0, 0),
                    P.maxWidth = this.cellWidth - (h + _),
                    n.a.isBS3 && (P.maxWidth = 0),
                    P.alpha = .8;
                    var L = 10;
                    n.a.isBS2 && (L = 10),
                    n.a.isBS3 && (L = 10);
                    var A = 77;
                    n.a.isBS2 && (A = 35),
                    n.a.isBS3 && (A = 57);
                    var M = 100;
                    n.a.isBS2 && (M = 55),
                    n.a.isBS3 && (M = 55);
                    var O = 25;
                    n.a.isBS2 && (O = 27),
                    n.a.isBS3 && (O = 20);
                    var D = this.add.graphics();
                    D.fillStyle(0, .6),
                    D.lineStyle(2, 0, 1),
                    D.fillRect(a + L, i + A, M, O);
                    var R = 60;
                    n.a.isBS2 && (R = 36.5),
                    n.a.isBS3 && (R = 36.5);
                    var N = 93;
                    n.a.isBS2 && (N = 49),
                    n.a.isBS3 && (N = 67);
                    var x = this.add.bitmapText(a + R, i + N, n.a.fontNames.MENU, "3 SECONDS", 18);
                    x.setOrigin(.5, .5);
                    var C = this.add.graphics();
                    C.fillStyle(0, .5),
                    C.fillRect(p - d / 2, m - u / 2, d, u);
                    var U = 400;
                    n.a.isBS2 && (U = 420),
                    n.a.isBS3 && (U = 420);
                    var W = 91;
                    n.a.isBS2 && (W = 63),
                    n.a.isBS3 && (W = 70);
                    var Y = this.add.bitmapText(a + U, i + W, n.a.fontNames.MENU, "NEXT", 20);
                    Y.setOrigin(.5, .5);
                    var K = this.add.bitmapText(0, 0, n.a.fontNames.MENU, "REQUIRES RANK", y);
                    K.setOrigin(.5, .5);
                    var G = this
                      , H = 20;
                    n.a.isBS2 && (H = 10);
                    var V = this.cellHeight - H - 10
                      , F = (this.cellWidth - 20) / t.upgradeVal.length;
                    (n.a.isBS2 || n.a.isBS3) && (F = (this.cellWidth - d - 20) / t.upgradeVal.length);
                    var X = 13906490;
                    n.a.isBS3 && (X = 2565927);
                    var j = 14475273;
                    n.a.isBS3 && (j = 16769546);
                    var q = 7479070;
                    n.a.isBS3 && (q = 5000268);
                    var J = 11841312;
                    n.a.isBS3 && (J = 8352007);
                    var Z = 2;
                    n.a.isBS3 && (Z = 3);
                    for (var Q = [], $ = 0; $ < t.upgradeVal.length; $++) {
                        var ee = this.add.graphics();
                        Q.push(ee)
                    }
                    t.updateMarkersColors = function() {
                        null != t.rankBadge && (t.rankBadge.destroyBadge(),
                        t.rankBadge = null);
                        for (var s = 0; s < Q.length; s++) {
                            var n = Q[s]
                              , r = s
                              , o = T.a.gameSettings.levelPointsDistributed[e][s];
                            n.clear();
                            var l = X
                              , h = q;
                            0 != o && (l = j,
                            h = J),
                            0 == o && null == t.rankBadge && (t.rankBadge = B.a.renderBadge(G, a + v, i + b, t.rankReq[s], !1, f),
                            K.x = a + g,
                            K.y = i + S,
                            C.x = a + p,
                            C.y = i + m),
                            n.fillStyle(l, 1),
                            n.lineStyle(Z, h, 1);
                            var _ = new Phaser.Geom.Rectangle(a + 10 + r * F,i + V,F,H);
                            n.fillRectShape(_),
                            n.strokeRectShape(_)
                        }
                    }
                    ;
                    var te = function() {
                        for (var t = 0; t < T.a.gameSettings.levelPointsDistributed[e].length; t++) {
                            if (0 == T.a.gameSettings.levelPointsDistributed[e][t])
                                return t
                        }
                        return null
                    }
                      , ae = 66;
                    n.a.isBS2 && (ae = 40),
                    n.a.isBS3 && (ae = 40);
                    var ie = 400;
                    n.a.isBS2 && (ie = 420),
                    n.a.isBS3 && (ie = 420);
                    var se = 40;
                    n.a.isBS2 && (se = 32),
                    n.a.isBS3 && (se = 42);
                    var ne = 25;
                    n.a.isBS2 && (ne = 22),
                    n.a.isBS3 && (ne = 23);
                    var re = 3;
                    (n.a.isBS2 || n.a.isBS3) && (re = 0),
                    t.lvlUpBtn = new I.a(this,a + ie,i + se,110,ae,{
                        text: "UPGRADE",
                        size: ne,
                        fixY: re
                    },(function() {
                        var a = te()
                          , i = t.upgradePrice[a];
                        i > z.a.UndistributedLevelPoints || (w.a.TaskUpdate(G, w.a.TASK_TYPE.DO_UPGRADE, a + 1, t.modType),
                        E.a.log("UPGRADING...", a, i),
                        T.a.gameSettings.levelPointsDistributed[e][a] = i,
                        T.a.saveUserSettings(),
                        t.updateMarkersColors(),
                        t.refreshUpgrade(),
                        G.updateLevelPointsLeft())
                    }
                    )),
                    t.refreshUpgrade = function() {
                        var e = te();
                        if (E.a.log("Refresh upgrade", "Getting next upgrade slot:", e),
                        K.visible = !1,
                        C.visible = !0,
                        Y.visible = !0,
                        0 == e)
                            D.visible = !1,
                            x.text = "";
                        else {
                            D.visible = !0;
                            var a = e;
                            null == a ? a = t.upgradeVal.length - 1 : a--,
                            x.text = t.upgradeVal[a] + " " + t.upgradeUnits
                        }
                        if (null == e)
                            return t.lvlUpBtn.buttonIsActive = !1,
                            t.lvlUpBtn.setVisibleMyUIButton(!1),
                            C.visible = !1,
                            Y.visible = !1,
                            void (null != t.rankBadge && t.rankBadge.destroyBadge());
                        if (t.rankReq[e] > B.a.CurrentLevel)
                            return t.lvlUpBtn.buttonIsActive = !1,
                            t.lvlUpBtn.setVisibleMyUIButton(!1),
                            K.visible = !0,
                            void (Y.visible = !1);
                        t.lvlUpBtn.buttonIsActive = !0,
                        t.lvlUpBtn.setVisibleMyUIButton(!0),
                        null != t.rankBadge && t.rankBadge.destroyBadge();
                        var i = t.upgradePrice[e];
                        t.lvlUpBtn.myText.text = "UPGRADE\n (" + i + "PTS)",
                        (n.a.isBS2 || n.a.isBS3) && (t.lvlUpBtn.myText.text = "UPGRADE (" + i + ")"),
                        Y.text = t.upgradeVal[e] + " " + t.upgradeUnits
                    }
                    ,
                    t.updateMarkersColors(),
                    t.refreshUpgrade()
                }
            }, {
                key: "backToMainMenu",
                value: function() {
                    var e = "BT1_MainMenu";
                    n.a.isBS2 ? e = "BS2_MainMenu" : n.a.isBS3 && (e = "BS3_MainMenu"),
                    this.myTransition.transitionToggle(!1, e)
                }
            }]),
            t
        }(Phaser.Scene)
          , j = a(70)
          , q = function(e) {
            function t() {
                return _()(this, t),
                p()(this, y()(t).call(this, {
                    key: "MySkinsScene"
                }))
            }
            return S()(t, e),
            d()(t, [{
                key: "preload",
                value: function() {
                    var e = this;
                    new R.a(this,!1);
                    for (var t in this.myTransition = new D.a(this),
                    j.a.SKINS) {
                        var a = j.a.SKINS[t];
                        a.skinID != j.a._SKIN_ID_COMINGSOON && (this.textures.exists(a.skinID) || this.load.multiatlas(a.skinID, a.spriteJSON, a.spriteLocation))
                    }
                    var i = new Phaser.Geom.Rectangle(100,.85 * n.a.gameHeight,n.a.gameWidth - 200,50);
                    this.progressBack = this.add.graphics(),
                    this.progressBack.lineStyle(15, 13188130, 3),
                    this.progressBack.strokeRectShape(i),
                    this.progressBack.fillStyle(6842691, 1),
                    this.progressBack.fillRectShape(i),
                    this.progress = this.add.graphics(),
                    this.load.on("progress", (function(t) {
                        t < .2 && (t = .2),
                        e.progress.clear();
                        var a = new Phaser.Geom.Rectangle(100,.85 * n.a.gameHeight,(n.a.gameWidth - 200) * t,50);
                        e.progress.fillStyle(13949193, 1),
                        e.progress.fillRectShape(a)
                    }
                    )),
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.TRANSITION, this.progressBack),
                    U.a.mySpriteDepth(U.a.RENDER_DEPTH.TRANSITION, this.progress)
                }
            }, {
                key: "create",
                value: function() {
                    if (null != this.progress && (this.progressBack.destroy(),
                    this.progress.destroy()),
                    this.devilImage && (this.devilImage.destroy(),
                    this.devilImage = null),
                    this.myTransition.transitionOpen(),
                    n.a.isBS3) {
                        this.add.sprite(.5 * n.a.gameWidth, .5 * n.a.gameHeight, "mainmenu_background"),
                        new O.a(this,412,451,n.a.lazySpriteKey,"ui/menu_start1.png");
                        var e = new Phaser.Geom.Rectangle(-20,-20,n.a.gameWidth + 40,n.a.gameHeight + 40)
                          , t = this.add.graphics();
                        t.fillStyle(0, .65),
                        t.fillRectShape(e)
                    }
                    var a = new O.a(this,n.a.gameWidth / 2,444,"main_menu_floor",null,n.a.spriteScale / .5);
                    if (a.scaleX *= 1.3,
                    a.scaleY *= 1.2,
                    o.a.isLazyLoaded ? this._drawLazyStuff() : o.a.sceneLink.events.once(o.a.EVT_LOADED, this._drawLazyStuff, this),
                    n.a.isBT)
                        new A.a(this,70 + N.a.notchOffset,45,130,77,"ui/main_menu_back.png",{
                            top: 30,
                            bottom: 30,
                            left: 30,
                            right: 30
                        });
                    var i = 6;
                    (n.a.isBS2 || n.a.isBS3) && (i = 0);
                    new I.a(this,70 + N.a.notchOffset,45,100,47,{
                        text: M.a.BT1.SETTINGS_BACK,
                        size: 32,
                        fixY: i
                    },this.backToMainMenu.bind(this),null,null,!1,!0);
                    var s = 0
                      , r = n.a.gameWidth - N.a.cameraOffset.x - 72 * j.a.SKINS.length;
                    for (var l in j.a.SKINS) {
                        var h = j.a.SKINS[l];
                        this._renderSkin(h, r + 85 * s, 80),
                        s++
                    }
                    this._selectSkin(T.a.gameSettings.selectedSkinID)
                }
            }, {
                key: "_renderSkin",
                value: function(e, t, a) {
                    E.a.log("BADGE", "Rendering..", e);
                    var i = {};
                    i.skinItem = e;
                    var s = .8
                      , r = e.skinID == j.a._SKIN_ID_COMINGSOON
                      , o = T.a.gameSettings.skinsUnlocked.includes(e.skinID);
                    if (!T.a.gameSettings.skinsNewViewed.includes(e.skinID)) {
                        T.a.gameSettings.skinsNewViewed.push(e.skinID),
                        i.newSkinAura = [];
                        var l = new O.a(this,t,a,n.a.lazySpriteKey,"retention/back_lvl6_aura_particle2.png");
                        l.scale = s,
                        this.add.tween({
                            targets: l,
                            angle: 46,
                            duration: 1045,
                            alpha: {
                                to: .4,
                                from: 1
                            },
                            scale: {
                                from: s,
                                to: 1
                            },
                            yoyo: !0,
                            loop: -1,
                            ease: Phaser.Math.Easing.Circular.InOut
                        });
                        var h = new O.a(this,t,a,n.a.lazySpriteKey,"retention/back_lvl6_aura_particle1.png");
                        h.scale = s,
                        this.add.tween({
                            targets: h,
                            alpha: {
                                to: .6,
                                from: 1
                            },
                            scale: {
                                from: .8 * s,
                                to: 1.1 * s
                            },
                            duration: 100,
                            yoyo: !0,
                            loop: -1,
                            ease: Phaser.Math.Easing.Expo.InOut
                        }),
                        this.add.tween({
                            targets: h,
                            angle: {
                                from: 0,
                                to: 360
                            },
                            duration: 3845,
                            loop: -1,
                            delay: 250
                        });
                        var _ = new O.a(this,t,a,n.a.lazySpriteKey,"retention/back_lvl6_aura_particle1.png");
                        _.scale = s,
                        this.add.tween({
                            targets: _,
                            alpha: {
                                to: .7,
                                from: .9
                            },
                            scale: {
                                from: .9 * s,
                                to: 1.1 * s
                            },
                            duration: 300,
                            yoyo: !0,
                            loop: -1,
                            ease: Phaser.Math.Easing.Back.InOut
                        }),
                        this.add.tween({
                            targets: _,
                            angle: {
                                from: 180,
                                to: -180
                            },
                            duration: 5245,
                            loop: -1,
                            delay: 550
                        });
                        var c = new O.a(this,t,a,n.a.lazySpriteKey,"retention/back_lvl6_aura_back.png")
                          , d = s;
                        n.a.isBT && (d = 1.1 * s),
                        c.scale = d,
                        this.add.tween({
                            targets: c,
                            alpha: {
                                to: .5,
                                from: 1
                            },
                            duration: 250,
                            yoyo: !0,
                            loop: -1
                        }),
                        i.newSkinAura.push(c, l, h, _)
                    }
                    var u, p = new O.a(this,t,a,n.a.lazySpriteKey,"retention/back_lvl0.png");
                    p.scale = s,
                    i.skinBackground = p,
                    (u = r ? new O.a(this,t,a,n.a.lazySpriteKey,"skins/coming_soon.png") : o ? new O.a(this,t,a,e.skinID,"profile_pic.png") : new O.a(this,t,a,e.skinID,"profile_pic_locked.png")).scale *= s;
                    var m = this.make.graphics({
                        x: t,
                        y: a
                    });
                    m.scale = s,
                    m.fillCircle(0, 0, 45);
                    var y = m.createGeometryMask();
                    if (u.setMask(y),
                    i.profilePic = u,
                    !r) {
                        if (!T.a.gameSettings.skinsUnlockedUsed.includes(e.skinID))
                            this.add.tween({
                                targets: [p, m],
                                scale: 1.05 * s,
                                duration: 330,
                                loop: -1,
                                yoyo: !0
                            }).timeScale = 1.5;
                        var g = this;
                        p.setInteractive({
                            useHandCursor: !0
                        }).on("pointerup", (function() {
                            o ? (null != i.newSkinAura && (i.newSkinAura.forEach((function(e) {
                                e.destroy()
                            }
                            )),
                            i.newSkinAura = null),
                            g._selectSkin(e.skinID)) : new Y(g,Y.MES_TYPE.INFO,e.unlockDescription)
                        }
                        ))
                    }
                    return i._getSkinDisplayElements = function(e) {
                        var t = [];
                        return i.newSkinAura && i.newSkinAura.forEach((function(e) {
                            t.push(e)
                        }
                        )),
                        p && t.push(p),
                        u && t.push(u),
                        e && m && t.push(m),
                        t
                    }
                    ,
                    i.destroyBadge = function() {
                        for (var e = i._getSkinDisplayElements(!0), t = e.length - 1; t >= 0; t--)
                            e[t].destroy()
                    }
                    ,
                    i.moveBadgeBy = function(e, t) {
                        i._getSkinDisplayElements(!0).forEach((function(a) {
                            a.x += e,
                            a.y += t
                        }
                        ))
                    }
                    ,
                    i
                }
            }, {
                key: "_selectSkin",
                value: function(e) {
                    if (e != T.a.gameSettings.selectedSkinID || null == this.devilImage) {
                        T.a.gameSettings.skinsUnlockedUsed.includes(e) || T.a.gameSettings.skinsUnlockedUsed.push(e),
                        T.a.gameSettings.selectedSkinID = e;
                        var t = this;
                        this.add.tween({
                            targets: [this.devilImage],
                            duration: 250,
                            x: "-=200",
                            alpha: 0,
                            onComplete: function() {
                                t.devilImage && t.devilImage.destroy();
                                t.devilImage = new O.a(t,339,413,T.a.gameSettings.selectedSkinID,"ui/devil_idle.png",1,U.a.RENDER_DEPTH.UIOVER),
                                t.devilImage.alpha = 0,
                                t.devilImage.x += 200,
                                t.add.tween({
                                    targets: [t.devilImage],
                                    duration: 250,
                                    x: "-=200",
                                    alpha: 1,
                                    ease: Phaser.Math.Easing.Cubic.Out
                                })
                            },
                            ease: Phaser.Math.Easing.Cubic.In
                        })
                    }
                }
            }, {
                key: "backToMainMenu",
                value: function() {
                    this.input.topOnly = !0;
                    var e = "BT1_MainMenu";
                    n.a.isBS2 ? e = "BS2_MainMenu" : n.a.isBS3 && (e = "BS3_MainMenu"),
                    T.a.saveUserSettings(),
                    this.myTransition.transitionToggle(!1, e)
                }
            }, {
                key: "_drawLazyStuff",
                value: function() {
                    new O.a(this,128,177,n.a.lazySpriteKey,"ui/window.png",1.3);
                    var e = new O.a(this,30,125,n.a.lazySpriteKey,"ani_torch/torch_1.png",.9)
                      , t = (new O.a(this,30,123,n.a.lazySpriteKey,"ani_torch/torch_base.png",.9),
                    new O.a(this,232,125,n.a.lazySpriteKey,"ani_torch/torch_1.png",.9))
                      , a = new O.a(this,232,123,n.a.lazySpriteKey,"ani_torch/torch_base.png",.9);
                    a.scaleX = -a.scaleX,
                    e.anims.play("torch_burn"),
                    t.anims.play("torch_burn")
                }
            }]),
            t
        }(Phaser.Scene)
          , J = a(456)
          , Z = a(18)
          , Q = a(44)
          , $ = a.n(Q)
          , ee = a(1143).default
          , te = a(1151).default
          , ae = a(1144).default
          , ie = a(1145).default
          , se = a(1152).default
          , ne = a(1146).default
          , re = a(73).default
          , oe = a(73).default
          , le = a(73).default
          , he = a(73).default
          , _e = a(73).default
          , ce = a(73).default
          , de = a(73).default
          , ue = a(73).default
          , pe = a(73).default
          , me = a(73).default
          , ye = a(73).default
          , ge = a(73).default
          , Se = a(73).default;
        function Ee(e) {
            console.log("STARTING.." + e, navigator.userAgent + ", " + $.a.GET_ENV_PROD_OR_DEV()),
            Z.a.initialize(e);
            var t = [r.a, v, o.a, l.a, L, V, X, G.a, q]
              , a = [ee, ie, se, ae, te, ne]
              , i = [re, oe, le, he, _e, ce, de, ue, pe]
              , h = [me, ye, ge, Se]
              , _ = [];
            n.a.isBT ? _ = t.concat(a) : n.a.isBS2 ? _ = t.concat(i) : n.a.isBS3 && (_ = t.concat(h));
            var c = {
                type: $.a.GET_PHASER_RENDERER(s.a),
                parent: n.a.containerName,
                width: n.a.gameWidth,
                height: n.a.gameHeight,
                scale: {
                    mode: s.a.Scale.NONE,
                    width: n.a.gameWidth,
                    height: n.a.gameHeight
                },
                dom: {
                    createContainer: !0
                },
                input: {
                    activePointers: 6
                },
                scene: _,
                plugins: {
                    global: [{
                        key: "NinePatchPlugin",
                        plugin: J.NinePatchPlugin,
                        start: !0
                    }]
                }
            };
            window.myResize = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                e && setTimeout((function() {
                    window.myResize(!1)
                }
                ), 500);
                var t = window.innerWidth
                  , a = window.innerHeight
                  , i = n.a.gameWidth
                  , s = n.a.gameHeight
                  , r = 3 * n.a.gameWidth
                  , o = 3 * n.a.gameHeight
                  , l = t / i
                  , h = a / s
                  , _ = Math.min(l, h)
                  , c = Math.min(t / _, r)
                  , u = Math.min(a / _, o);
                N.a.orientation = l > h ? N.a.ORIENTATIONS.LANDSCAPE : N.a.ORIENTATIONS.PORTRAIT,
                N.a.cameraOffset.x = -(c - i) / 2,
                N.a.cameraOffset.y = -(u - s) / 2;
                var p = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sal"), 10)
                  , m = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sar"), 10);
                N.a.notchOffset = p >= m ? N.a.cameraOffset.x + p : N.a.cameraOffset.x + m,
                Z.a.isCordova && N.a.isAndroid && window.AndroidNotch && window.AndroidNotch.getInsetRight((function(e) {
                    window.AndroidNotch.getInsetLeft((function(t) {
                        N.a.notchOffset = t >= e ? N.a.cameraOffset.x + t : N.a.cameraOffset.x + e
                    }
                    ))
                }
                )),
                null != d && (d.scale.resize(c, u),
                d.canvas.style.width = c * _ + "px",
                d.canvas.style.height = u * _ + "px",
                d.canvas.style.marginTop = "".concat((a - u * _) / 2, "px"),
                d.canvas.style.marginLeft = "".concat((t - c * _) / 2, "px"),
                d.scene.scenes.forEach((function(e) {
                    e.cameras.main && (e.cameras.main.scrollX = N.a.cameraOffset.x,
                    e.cameras.main.scrollY = N.a.cameraOffset.y)
                }
                )),
                d.events.emit("LevelEditoSceneResize", c, u, _))
            }
            ,
            window.addEventListener("resize", (function(e) {
                window.myResize()
            }
            )),
            window.onload = window.myResize,
            window._myToggleFullscreen = function() {
                var e = d.canvas;
                document.fullscreenElement ? document.exitFullscreen() : e.requestFullscreen().catch((function(e) {
                    console.log("Error attempting to enable full-screen mode: ".concat(e.message, " (").concat(e.name, ")"), e)
                }
                ))
            }
            ;
            var d = new s.a.Game(c)
        }
        Element.prototype.requestFullscreen || (Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen),
        document.exitFullscreen || (document.exitFullscreen = document.mozExitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen),
        document.fullscreenElement || (Object.defineProperty(document, "fullscreenElement", {
            get: function() {
                return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
            }
        }),
        Object.defineProperty(document, "fullscreenEnabled", {
            get: function() {
                return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
            }
        }));
        var fe = a(37);
        PokiSDK.init().then((function() {
            Ee(Z.a.TARGETS.POKI)
        }
        )).catch((function() {
            fe.a.adBlockerEnabled = !0,
            Ee(Z.a.TARGETS.POKI)
        }
        ));
        /*var Te = $.a.GET_ENV_PROD_OR_DEV() == $.a.ENV_DEV;
        PokiSDK.setDebug(Te);
        var ve, be, ke = ["top", "indexOf", "aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==", "hostname", "length", "location", "LnBva2ktZ2RuLmNvbQ==", "href"];
        ve = ke,
        be = 430,
        function(e) {
            for (; --e; )
                ve.push(ve.shift())
        }(++be);
        var Pe = function(e, t) {
            return ke[e -= 0]
        };
        !function() {
            for (var e = ["bG9jYWxob3N0", "LnBva2kuY29t", Pe("0x0")], t = !1, a = window[Pe("0x7")][Pe("0x5")], i = 0; i < e[Pe("0x6")]; i++) {
                var s = atob(e[i]);
                if (-1 !== a[Pe("0x3")](s, a.length - s.length)) {
                    t = !0;
                    break
                }
            }
            if (!t) {
                var n = Pe("0x4")
                  , r = atob(n);
                window.location[Pe("0x1")] = r,
                window[Pe("0x2")][Pe("0x7")] !== window[Pe("0x7")] && (window[Pe("0x2")][Pe("0x7")] = window[Pe("0x7")])
            }
        }()*/
    },
    1151: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(9)
          , p = a(22)
          , m = a(21)
          , y = a(26)
          , g = a(0)
          , S = a(8)
          , E = a(45)
          , f = a(46)
          , T = a(178)
          , v = a(179)
          , b = a(37)
          , k = a(180)
          , P = a(57)
          , L = (a(168),
        a(2))
          , A = function() {
            function e(t, a, i, n, r) {
                s()(this, e),
                this.myScene = t,
                this.data = n;
                var o = r.row_width;
                this.row_height = r.row_height;
                var l = r.rowId
                  , h = r.title_txtsize || 35
                  , _ = r.title_height || 1.3 * this.row_height
                  , c = r.title_indent || 50
                  , d = r.total_rows || P.a.SHOW_ENTRIES
                  , u = r.colorTitleBack || 11420968
                  , p = r.colorTableBack || 7234146
                  , m = r.colorOddRow || p
                  , y = r.colorEvenRow || 7565938
                  , S = r.colorPlayerRow || 8601673;
                1 == l && (L.a.log("LEADER", "Rendering title)"),
                this.title_img = t.add.graphics(),
                this.title_img.lineStyle(7, 5789784),
                this.title_img.strokeRect(a + c, i - this.row_height / 2 - _, o - 2 * c, _),
                this.title_img.fillStyle(u, 1),
                this.title_img.fillRect(a + c, i - this.row_height / 2 - _, o - 2 * c, _),
                this.title_img.lineStyle(7, 5789784),
                this.title_img.strokeRect(a, i - this.row_height / 2, o, this.row_height * d),
                this.title_img.fillStyle(p, 1),
                this.title_img.fillRect(a, i - this.row_height / 2, o, this.row_height * d),
                this.title_txt = t.add.bitmapText(a + o / 2, i - this.row_height / 2 - _ / 2, Game, r.leader_name, h),
                this.title_txt.setOrigin(.5, .5),
                this.title_txt.y += _ / 10),
                this.background_img = t.add.graphics();
                var E = m;
                l % 2 == 0 && (E = y),
                n.playerUniqueId == P.a.provider.uniquePlayerId && (E = S,
                this.background_img.lineStyle(2, 14067116),
                this.background_img.strokeRect(a, i - this.row_height / 2, o, this.row_height)),
                this.background_img.fillStyle(E, 1),
                this.background_img.fillRect(a, i - this.row_height / 2, o, this.row_height);
                var f = n.rank + ".";
                this.rank_txt = t.add.bitmapText(0, 0, g.a.fontNames.LVL_NUM, f, 25),
                this.rank_txt.setOrigin(1, .5);
                var T = n.name;
                T.length > 15 && (T = T.substring(0, 13) + ".."),
                this.name_txt = t.add.bitmapText(0, 0, g.a.fontNames.MENU, T, 25),
                this.name_txt.setOrigin(0, .5),
                this.score_txt = t.add.bitmapText(0, 0, g.a.fontNames.SCORE, n.score, 25),
                this.score_txt.setOrigin(1, .5),
                this.playerUniqueId = n.playerUniqueId,
                this.photo_img = null,
                this.photo_unique_id = "leader_pl_" + this.playerUniqueId,
                null != n.photoURL && (this.myScene.load.image(this.photo_unique_id, n.photoURL),
                this.myScene.load.once("filecomplete-image-" + this.photo_unique_id, this._addLoadedPlayerPhoto, this),
                this.myScene.load.start()),
                this.myX = a,
                this.myY = i,
                this.myScale = 1
            }
            return r()(e, [{
                key: "redrawColumn",
                value: function() {
                    this.rank_txt.setPosition(this.myX + 50, this.myY),
                    this.name_txt.setPosition(this.myX + 110, this.myY),
                    this.name_txt.y += 4,
                    this.score_txt.setPosition(this.myX + 385, this.myY),
                    this.photo_img && this.photo_img.setPosition(this.myX + 80, this.myY)
                }
            }, {
                key: "_addLoadedPlayerPhoto",
                value: function(e) {
                    this.photo_img = this.myScene.add.image(this.myX + 80, this.myY, this.photo_unique_id),
                    this.photo_img.setOrigin(.5, .5),
                    this.photo_img.displayHeight = this.photo_img.displayWidth = this.row_height - 5
                }
            }, {
                key: "scaleColumn",
                value: function(e) {
                    this.myScale = e,
                    this.rank_txt.setScale(e),
                    this.name_txt.setScale(e),
                    this.score_txt.setScale(e),
                    this.photo_img && this.photo_img.setScale(e)
                }
            }, {
                key: "myDestroy",
                value: function() {
                    this.rank_txt.destroy(),
                    this.name_txt.destroy(),
                    this.score_txt.destroy(),
                    this.photo_img && this.photo_img.destroy()
                }
            }]),
            e
        }()
          , I = a(53)
          , M = a(18)
          , O = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "BT1_GameOver"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "create",
                value: function() {
                    this.myTransition = new E.a(this).transitionOpen();
                    new f.a(this),
                    new k.a(this,130,90,1.25,-15),
                    new p.a(this,130,400,200,77,"ui/main_menu_back.png",{
                        top: 30,
                        bottom: 30,
                        left: 30,
                        right: 30
                    }),
                    new m.a(this,130,400,170,47,{
                        text: y.a.BT1.GAMEOVER_MENU,
                        size: 32,
                        fixY: 6
                    },this.back_btn_with_ad.bind(this),null,null,!1,!0);
                    if (P.a.isUsingLeader())
                        this.leaderRows = [],
                        this.playerRow = null,
                        this.score1Sprite = new S.a(this,135,304,g.a.spriteKey,"ui/points_box.png",1.7),
                        this.loadScores();
                    else {
                        new S.a(this,91,240,g.a.spriteKey,"ui/name_box.png"),
                        new S.a(this,91,297,g.a.spriteKey,"ui/name_box.png"),
                        new S.a(this,91,240,g.a.spriteKey,"ui/name_pl1.png"),
                        new S.a(this,91,297,g.a.spriteKey,"ui/name_pl2.png"),
                        new S.a(this,210,240,g.a.spriteKey,"ui/points_box.png"),
                        new S.a(this,210,297,g.a.spriteKey,"ui/points_box.png");
                        var e = this.add.bitmapText(244, 240, g.a.fontNames.SCORE, u.a.scores[1] || 0)
                          , t = this.add.bitmapText(244, 297, g.a.fontNames.SCORE, u.a.scores[2] || 0);
                        if (e.setOrigin(1, .5),
                        t.setOrigin(1, .5),
                        M.a.isCordova) {
                            new p.a(this,350,400,200,77,"ui/main_menu_back.png",{
                                top: 30,
                                bottom: 30,
                                left: 30,
                                right: 30
                            });
                            var a = new v.a(this);
                            new m.a(this,350,400,170,47,a.btnConfig,a.openLink.bind(a))
                        }
                        new T.a(this),
                        new I.a(this)
                    }
                }
            }, {
                key: "back_btn_with_ad",
                value: function() {
                    b.a.showAd(this, b.a.PLACEMENTS.INTERSTITIAL, this.myTransition.transitionToggle.bind(this.myTransition, !1, "BT1_MainMenu"))
                }
            }, {
                key: "loadScores",
                value: function() {
                    P.a.provider.loadScores(this.onLoadedScores.bind(this), this.onLoadedPlayerScore.bind(this))
                }
            }, {
                key: "onLoadedScores",
                value: function() {
                    if (P.a.isUsingLeader())
                        for (var e = 0; e < P.a.SHOW_ENTRIES; e++)
                            if (null != this.leaderRows[e] && this.leaderRows[e].myDestroy(),
                            null != P.a.provider.scores[e]) {
                                this.leaderRows[e] = new A(this,285,80 + 38 * e,P.a.provider.scores[e],{
                                    row_width: 400,
                                    leader_name: "Online scores",
                                    rowId: e + 1,
                                    row_height: 38
                                }),
                                this.leaderRows[e].redrawColumn()
                            }
                }
            }, {
                key: "onLoadedPlayerScore",
                value: function() {
                    L.a.log("GAME_OVER", "Hey! Loaded players rank:" + P.a.provider.playerScore.rank),
                    null != this.playerRow && this.playerRow.myDestroy();
                    this.playerRow = new A(this,15,260,P.a.provider.playerScore,{
                        row_width: 240,
                        leader_name: "My score:",
                        rowId: 1,
                        row_height: 38,
                        title_indent: 55,
                        title_txtsize: 25,
                        title_height: 33,
                        colorTitleBack: 7368816,
                        total_rows: 1
                    }),
                    this.playerRow.redrawColumn(),
                    this.playerRow.title_txt.alpha = .85,
                    this.playerRow.score_txt.x = this.score1Sprite.x,
                    this.playerRow.score_txt.y = this.score1Sprite.y,
                    this.playerRow.score_txt.setOrigin(.5, .5)
                }
            }]),
            t
        }(Phaser.Scene);
        t.default = O
    },
    1152: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(22)
          , p = a(21)
          , m = a(26)
          , y = a(0)
          , g = a(45)
          , S = a(8)
          , E = a(4)
          , f = a(35)
          , T = a(46)
          , v = a(15)
          , b = a(177)
          , k = a(18)
          , P = a(2)
          , L = a(38)
          , A = a(20)
          , I = a(181)
          , M = a(32)
          , O = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "BT1_Settings"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "create",
                value: function() {
                    this.myTransition = new g.a(this).transitionOpen();
                    new T.a(this);
                    this.selectedPlayer = 1;
                    this._menu_centery = 160;
                    this._menu_btn_height = 47;
                    var e = 2 * this._menu_btn_height + 6
                      , t = this._menu_centery - e / 2 + (this._menu_btn_height + 2) / 2;
                    if (!v.a.isMobile) {
                        new u.a(this,180,this._menu_centery,206,50 + e,"ui/main_menu_back.png",{
                            top: 50,
                            bottom: 50,
                            left: 50,
                            right: 50
                        });
                        var a = 0;
                        new p.a(this,180,t + e * a / 2,156,this._menu_btn_height,{
                            text: m.a.BT1.SETTINGS_PL1,
                            size: 32,
                            fixY: 6
                        },this.btn_selectPlayerInput.bind(this, 1));
                        a = 1;
                        new p.a(this,180,t + e * a / 2,156,this._menu_btn_height,{
                            text: m.a.BT1.SETTINGS_PL2,
                            size: 32,
                            fixY: 6
                        },this.btn_selectPlayerInput.bind(this, 2))
                    }
                    this.showKeyboardMouseWindows();
                    var i = {
                        x: 590,
                        y: 327
                    }
                      , s = {
                        x: 590,
                        y: 410
                    }
                      , n = {
                        x: 250,
                        y: 400
                    };
                    v.a.isMobile && (i = {
                        x: 440,
                        y: 100
                    },
                    s = {
                        x: 440,
                        y: 190
                    },
                    n = {
                        x: 350,
                        y: 400
                    }),
                    this.add.bitmapText(i.x - 55, i.y, y.a.fontNames.MENU, "Sound Effects:", 24).setOrigin(1, .5);
                    new b.a(this,i.x,i.y);
                    this.add.bitmapText(s.x - 55, s.y, y.a.fontNames.MENU, "Show BONUS name:", 24).setOrigin(1, .5);
                    new u.a(this,s.x,s.y,100,63,"ui/main_menu_back.png",{
                        top: 30,
                        bottom: 30,
                        left: 30,
                        right: 30
                    });
                    if (this.bonus_btn = new p.a(this,s.x,s.y,70,33,{
                        text: "ON",
                        size: 32,
                        fixY: 6
                    },this.renderBonusButton.bind(this, !0)),
                    this.renderBonusButton(),
                    k.a.isCordova && !E.a.gameSettings.noads) {
                        var r = new p.a(this,600,390,180,35,{
                            text: m.a.BT1.RESTORE_IAP,
                            size: 19,
                            fixY: 3
                        },store.refresh);
                        k.a.isCordova || (r.myText.alpha = .5)
                    }
                    new I.a(this,n.x,n.y);
                    var o = new p.a(this,600,425,180,22,{
                        text: "PRIVACY POLICY",
                        size: 15,
                        fixY: 3
                    },(function() {
                        window.open(M.a.PRIVACY_POLICY.BT1, k.a.browserWindow)
                    }
                    ));
                    k.a.isPoki && P.a.debugLog ? o.backgroundNinePatch.ninePatch.alpha = .5 : k.a.isCordova || o.setVisibleMyUIButton(!1);
                    new u.a(this,100,400,130,30 + this._menu_btn_height,"ui/main_menu_back.png",{
                        top: 30,
                        bottom: 30,
                        left: 30,
                        right: 30
                    }),
                    new p.a(this,100,400,100,this._menu_btn_height,{
                        text: m.a.BT1.SETTINGS_BACK,
                        size: 32,
                        fixY: 6
                    },this.myTransition.transitionToggle.bind(this.myTransition, !1, "BT1_MainMenu"),null,null,!0,!0);
                    if (A.a.isLazyLoaded) {
                        var l = new S.a(this,30,125,y.a.lazySpriteKey,"ani_torch/torch_1.png",.9)
                          , h = (new S.a(this,30,123,y.a.lazySpriteKey,"ani_torch/torch_base.png",.9),
                        new S.a(this,672,125,y.a.lazySpriteKey,"ani_torch/torch_1.png",.9))
                          , _ = new S.a(this,672,123,y.a.lazySpriteKey,"ani_torch/torch_base.png",.9);
                        _.scaleX = -_.scaleX,
                        l.anims.play("torch_burn"),
                        h.anims.play("torch_burn")
                    }
                }
            }, {
                key: "renderBonusButton",
                value: function(e) {
                    e && (E.a.gameSettings.showPickedItemName = !E.a.gameSettings.showPickedItemName),
                    E.a.gameSettings.showPickedItemName ? this.bonus_btn.changeTextOrIcon({
                        text: "ON",
                        size: 32,
                        fixY: 6
                    }) : this.bonus_btn.changeTextOrIcon({
                        text: "OFF",
                        size: 32,
                        fixY: 6
                    })
                }
            }, {
                key: "showKeyboardMouseWindows",
                value: function() {
                    if (!v.a.isMobile) {
                        new u.a(this,540,this._menu_centery - 105,170,40 + this._menu_btn_height,"ui/main_menu_back.png",{
                            top: 30,
                            bottom: 30,
                            left: 30,
                            right: 30
                        });
                        this.keyboard_btn = new p.a(this,505,this._menu_centery - 105,65,this._menu_btn_height + 10,{
                            icon: "ui/btn/keyboard_off.png"
                        },this.btn_playerSelectKeyboard.bind(this)),
                        this.mouse_btn = new p.a(this,575,this._menu_centery - 105,65,this._menu_btn_height + 10,{
                            icon: "ui/btn/mouse_off.png"
                        },this.btn_playerSelectMouse.bind(this));
                        new u.a(this,490,this._menu_centery + 20,300,190,"ui/main_menu_back.png",{
                            top: 50,
                            bottom: 50,
                            left: 50,
                            right: 50
                        });
                        this.changeKeysText = this.add.bitmapText(430, this._menu_centery + 140, y.a.fontNames.MENU, "Press new key...", 36),
                        this.changeKeysText.setDepth(99999),
                        this.changeKeysText.setOrigin(.25),
                        this.tweens.add({
                            targets: this.changeKeysText,
                            scale: 1.1,
                            ease: "Sine.easeIn",
                            duration: 450,
                            loop: -1,
                            yoyo: !0
                        }),
                        this.keyboard_btn_left = new p.a(this,410,this._menu_centery + 60,60,this._menu_btn_height,{
                            text: "<-",
                            size: 32,
                            fixY: 6
                        },this.btn_startListener.bind(this, this._setKey, "left")),
                        this.keyboard_btn_shoot = new p.a(this,490,this._menu_centery + 60,60,this._menu_btn_height,{
                            text: "SPC",
                            size: 32,
                            fixY: 6
                        },this.btn_startListener.bind(this, this._setKey, "shoot")),
                        this.keyboard_btn_right = new p.a(this,570,this._menu_centery + 60,60,this._menu_btn_height,{
                            text: "->",
                            size: 32,
                            fixY: 6
                        },this.btn_startListener.bind(this, this._setKey, "right")),
                        this._renderPlayerKeys()
                    }
                }
            }, {
                key: "_renderPlayerKeys",
                value: function() {
                    this.input.keyboard.removeListener("keydown"),
                    this.changeKeysText.visible = !1,
                    P.a.log("SETT", "Rendering player " + this.selectedPlayer + ", " + E.a.gameSettings.playerKeys["player" + this.selectedPlayer].controller),
                    null != this.devil_left && (this.devil_left.destroy(),
                    this.devil_right.destroy(),
                    this.devil_shoot.destroy());
                    var e = "char/walk_4"
                      , t = "char/idle";
                    if (2 == this.selectedPlayer && (e += "_p2",
                    t += "_p2"),
                    this.devil_left = new S.a(this,415,this._menu_centery + 30,E.a.gameSettings.selectedSkinID,e + ".png",1.3),
                    this.devil_left.scaleX = -this.devil_left.scaleX,
                    this.devil_shoot = new S.a(this,490,this._menu_centery + 30,E.a.gameSettings.selectedSkinID,t + ".png",1.3),
                    this.devil_right = new S.a(this,565,this._menu_centery + 30,E.a.gameSettings.selectedSkinID,e + ".png",1.3),
                    this._showKeys(),
                    v.a.isMobile)
                        return this.keyboard_btn.myIcon.setFrame("ui/btn/keyboard_off.png"),
                        this.mouse_btn.myIcon.setFrame("ui/btn/mouse_off.png"),
                        this.keyboard_btn.buttonIsActive = !1,
                        void (this.mouse_btn.buttonIsActive = !1);
                    var a = !1;
                    1 == this.selectedPlayer && E.a.gameSettings.playerKeys.player2.controller == f.a.INPUT_TYPE.mouse && (a = !0),
                    2 == this.selectedPlayer && E.a.gameSettings.playerKeys.player1.controller == f.a.INPUT_TYPE.mouse && (a = !0),
                    E.a.gameSettings.playerKeys["player" + this.selectedPlayer].controller == f.a.INPUT_TYPE.keyboard ? (this.keyboard_btn.myIcon.setFrame("ui/btn/keyboard_on.png"),
                    this.mouse_btn.myIcon.setFrame("ui/btn/mouse_off.png")) : E.a.gameSettings.playerKeys["player" + this.selectedPlayer].controller == f.a.INPUT_TYPE.mouse && (this.keyboard_btn.myIcon.setFrame("ui/btn/keyboard_off.png"),
                    this.mouse_btn.myIcon.setFrame("ui/btn/mouse_on.png")),
                    a ? (this.mouse_btn.myIcon.setFrame("ui/btn/mouse_disabled.png"),
                    this.mouse_btn.buttonIsActive = !1) : this.mouse_btn.buttonIsActive = !0;
                    var i = E.a.gameSettings.playerKeys["player" + this.selectedPlayer].controller == f.a.INPUT_TYPE.mouse;
                    this.keyboard_btn_left.buttonIsActive = !i,
                    this.keyboard_btn_shoot.buttonIsActive = !i,
                    this.keyboard_btn_right.buttonIsActive = !i
                }
            }, {
                key: "btn_selectPlayerInput",
                value: function(e) {
                    P.a.log("SETT", "Selecting input player " + e),
                    this.selectedPlayer = e,
                    this._renderPlayerKeys()
                }
            }, {
                key: "btn_playerSelectKeyboard",
                value: function() {
                    P.a.log("SETT", "Selecting keyboard for player" + this.selectedPlayer),
                    E.a.gameSettings.playerKeys["player" + this.selectedPlayer].controller = f.a.INPUT_TYPE.keyboard,
                    this._renderPlayerKeys(),
                    E.a.saveUserSettings()
                }
            }, {
                key: "btn_playerSelectMouse",
                value: function() {
                    P.a.log("SETT", "Selecting MOUSE for player " + this.selectedPlayer),
                    E.a.gameSettings.playerKeys["player" + this.selectedPlayer].controller = f.a.INPUT_TYPE.mouse,
                    this._renderPlayerKeys(),
                    E.a.saveUserSettings()
                }
            }, {
                key: "btn_startListener",
                value: function(e, t) {
                    if (!v.a.isMobile) {
                        this.input.keyboard.removeListener("keydown");
                        var a = this;
                        this.input.keyboard.on("keydown", (function(i) {
                            P.a.log("SETT", "New key setting.....", i.key, a.input.keyboard),
                            "P" != i.key && "p" != i.key && "Escape" != i.key && e(i.key, i.keyCode, t, a.selectedPlayer),
                            a.input.keyboard.removeListener("keydown"),
                            a._renderPlayerKeys(),
                            L.a.disableAllButtons(!1),
                            i.stopImmediatePropagation(),
                            i.stopPropagation()
                        }
                        )),
                        this.changeKeysText.visible = !0,
                        L.a.disableAllButtons(!0),
                        P.a.log("SETT", "Waiting for new key..", this.input.keyboard)
                    }
                }
            }, {
                key: "_setKey",
                value: function(e, t, a, i) {
                    switch (a) {
                    case "left":
                    case "right":
                    case "shoot":
                        E.a.gameSettings.playerKeys["player" + i][a + "_txt"] = function(e) {
                            return P.a.log("Getting key", e),
                            " " == (e += "") ? "SPC" : "ArrowLeft" == e ? "◀" : "ArrowRight" == e ? "▶" : "ArrowUp" == e ? "▲" : "ArrowDown" == e ? "▼" : "Shift" == e ? "SHF" : "Control" == e ? "CTR" : "Meta" == e ? "CMD" : (e.length > 3 && (e = e.substr(0, 3)),
                            e.toUpperCase())
                        }(e),
                        E.a.gameSettings.playerKeys["player" + i][a] = t,
                        E.a.saveUserSettings();
                        break;
                    default:
                        console.error("Unknown action (" + a + ") setting for key (" + key + ").")
                    }
                }
            }, {
                key: "_showKeys",
                value: function() {
                    var e = E.a.gameSettings.playerKeys.player1;
                    return 2 == this.selectedPlayer && (e = E.a.gameSettings.playerKeys.player2),
                    P.a.log("SETT", "Showing keys for .. " + e.controller),
                    v.a.isMobile ? (this.keyboard_btn_left.changeTextOrIcon({
                        icon: "ui/btn/mobile.png"
                    }),
                    this.keyboard_btn_shoot.changeTextOrIcon({
                        icon: "ui/btn/mobile.png"
                    }),
                    void this.keyboard_btn_right.changeTextOrIcon({
                        icon: "ui/btn/mobile.png"
                    })) : e.controller == f.a.INPUT_TYPE.mouse ? (this.keyboard_btn_left.changeTextOrIcon({
                        icon: "ui/btn/mouse_key_left.png"
                    }),
                    this.keyboard_btn_shoot.changeTextOrIcon({
                        icon: "ui/btn/mouse_key_shoot.png"
                    }),
                    this.keyboard_btn_right.changeTextOrIcon({
                        icon: "ui/btn/mouse_key_left.png"
                    }),
                    void (this.keyboard_btn_right.myIcon.scaleX = -1)) : (this.keyboard_btn_left.changeTextOrIcon({
                        text: e.left_txt,
                        size: 22,
                        bitmapText: !1
                    }),
                    this.keyboard_btn_shoot.changeTextOrIcon({
                        text: e.shoot_txt,
                        size: 22,
                        bitmapText: !1
                    }),
                    void this.keyboard_btn_right.changeTextOrIcon({
                        text: e.right_txt,
                        size: 22,
                        bitmapText: !1
                    }))
                }
            }]),
            t
        }(Phaser.Scene);
        t.default = O
    },
    12: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = (a(2),
        a(9),
        a(56),
        a(4))
          , h = function() {
            function e(t) {
                s()(this, e),
                this.myScene = t,
                this.allSounds = {}
            }
            return r()(e, [{
                key: "_attachSound",
                value: function(e) {
                    for (var t = 1; t <= e.num; t++) {
                        var a = e.tag + "_" + t;
                        if (null != this.allSounds[a])
                            return;
                        "" != e.files[o.a.shortName] && this.myScene.game.cache.audio.exists(e.tag) && (this.allSounds[a] = this.myScene.sound.add(e.tag))
                    }
                }
            }], [{
                key: "preloadSounds",
                value: function(t) {
                    for (var a in e.SND) {
                        var i = e.SND[a]
                          , s = [];
                        "" != i.files[o.a.shortName] && (s.push("assets/" + o.a.shortName + "/audio/" + i.files[o.a.shortName] + ".m4a"),
                        s.push("assets/" + o.a.shortName + "/audio/" + i.files[o.a.shortName] + ".mp3")),
                        t.load.audio(i.tag, s)
                    }
                }
            }, {
                key: "playSound",
                value: function(t, a) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (l.a.gameSettings.soundOn && !t.sound.locked) {
                        null == t.mySoundManager && (t.mySoundManager = new e(t)),
                        t.mySoundManager._attachSound(a);
                        for (var s = 1; s <= a.num; s++) {
                            var n = a.tag + "_" + s;
                            if (t.mySoundManager.allSounds.hasOwnProperty(n) && !t.mySoundManager.allSounds[n].isPlaying)
                                return t.mySoundManager.allSounds[n].play(i),
                                t.mySoundManager.allSounds[n]
                        }
                        return null
                    }
                }
            }, {
                key: "playRandom",
                value: function(e, t, a) {
                    var i = t[Math.floor(Math.random() * t.length)];
                    return this.playSound(e, i, a)
                }
            }]),
            e
        }();
        h.SND = {
            BALL_POP1: {
                tag: "ballpop1",
                num: 4,
                files: {
                    bt1: "ball_nestane",
                    bs2: "pop1",
                    bs3: "pop1"
                }
            },
            BALL_POP2: {
                tag: "ballpop2",
                num: 4,
                files: {
                    bt1: "ball_pop",
                    bs2: "pop2",
                    bs3: "pop2"
                }
            },
            BALL_POP3: {
                tag: "ballpop3",
                num: 4,
                files: {
                    bt1: "ball_pop2",
                    bs2: "pop3",
                    bs3: "pop3"
                }
            },
            SHOT_SINGLE: {
                tag: "shot_single",
                num: 4,
                files: {
                    bt1: "shot_rope_twirl5",
                    bs2: "twirl",
                    bs3: "pucanj"
                }
            },
            OUT_OF_TIME: {
                tag: "out_of_time",
                num: 1,
                files: {
                    bt1: "ingame_time_out",
                    bs2: "vrijeme_isteklo",
                    bs3: "vrijeme_isteklo"
                }
            },
            LEVEL_FINISHED_SUCCESS: {
                tag: "level_success",
                num: 1,
                files: {
                    bt1: "ingame_gotov_level",
                    bs2: "gong",
                    bs3: "victory"
                }
            },
            HOOK_ATTACHED: {
                tag: "hook_attchd",
                num: 2,
                files: {
                    bt1: "shot_hook",
                    bs2: "hook-zakacen",
                    bs3: "hook-zakacen"
                }
            },
            PLAYER_DEATH_BALL: {
                tag: "player_dead_ball",
                num: 1,
                files: {
                    bt1: "ingame_dead",
                    bs2: "player_hit",
                    bs3: "player_hit"
                }
            },
            WALL_SLIDE_SMALL: {
                tag: "wallslidesmall",
                num: 2,
                files: {
                    bt1: "slide_wall_small",
                    bs2: "",
                    bs3: ""
                }
            },
            SHOT_LASER: {
                tag: "shot_laser",
                num: 5,
                files: {
                    bt1: "shot_lejz",
                    bs2: "flower",
                    bs3: ""
                }
            },
            SHIELD_ON: {
                tag: "shield_on",
                num: 2,
                files: {
                    bt1: "item_stit_paljenje",
                    bs2: "stit_pali",
                    bs3: "stit_plain"
                }
            },
            MINE_DIGIN: {
                tag: "mine_digin",
                num: 3,
                files: {
                    bt1: "shot_mina_diginin",
                    bs2: "",
                    bs3: ""
                }
            },
            MINE_SHOT: {
                tag: "mine_shot",
                num: 4,
                files: {
                    bt1: "shot_mina_shot",
                    bs2: "",
                    bs3: ""
                }
            },
            FINAL_LEVEL: {
                tag: "final_level",
                num: 1,
                files: {
                    bt1: "final_level",
                    bs2: "final_level",
                    bs3: "final_level"
                }
            },
            FINAL_LEVEL_COMPLETED: {
                tag: "final_level_cmplt",
                num: 1,
                files: {
                    bt1: "final_level_completed",
                    bs2: "kraj_igre",
                    bs3: "kraj_igre"
                }
            },
            UI_BUTTON: {
                tag: "ui_button",
                num: 2,
                files: {
                    bt1: "menu_option",
                    bs2: "",
                    bs3: ""
                }
            },
            UI_START_1P: {
                tag: "ui_start_1p",
                num: 1,
                files: {
                    bt1: "menu_recharging_a_gun",
                    bs2: "menu_recharging_a_gun",
                    bs3: "menu_recharging_a_gun"
                }
            },
            UI_START_2P: {
                tag: "ui_start_2p",
                num: 1,
                files: {
                    bt1: "menu_recharging_a_gun2",
                    bs2: "",
                    bs3: "menu_swoosh_odjeca"
                }
            },
            UI_OPEN_SETTINGS: {
                tag: "ui_open_settings",
                num: 1,
                files: {
                    bt1: "menu_swoosh_odjeca",
                    bs2: "menu_swoosh_odjeca",
                    bs3: ""
                }
            },
            UI_SLIDE_UP: {
                tag: "slide_up",
                num: 1,
                files: {
                    bt1: "menu_sliding_up",
                    bs2: "",
                    bs3: ""
                }
            },
            UI_SLIDE_DOWN: {
                tag: "slide_down",
                num: 1,
                files: {
                    bt1: "menu_sliding_down",
                    bs2: "",
                    bs3: ""
                }
            },
            UI_SOUND_ONOFF: {
                tag: "slide_down",
                num: 1,
                files: {
                    bt1: "",
                    bs2: "kravica",
                    bs3: "kravica"
                }
            },
            TRAMPOLINE: {
                tag: "trampoline",
                num: 4,
                files: {
                    bt1: "",
                    bs2: "trampoline",
                    bs3: "trambulin"
                }
            },
            SWITCH: {
                tag: "switch",
                num: 6,
                files: {
                    bt1: "",
                    bs2: "switch",
                    bs3: "slide4"
                }
            },
            LEVEL_START: {
                tag: "lvl_start",
                num: 1,
                files: {
                    bt1: "",
                    bs2: "pocetak_levela",
                    bs3: "pocetak_levela"
                }
            },
            METAL_BALL: {
                tag: "metalball",
                num: 5,
                files: {
                    bt1: "",
                    bs2: "metalna",
                    bs3: "metalna"
                }
            },
            HOOK_FLYING: {
                tag: "hook_flying",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "hook-shot",
                    bs3: "hook-shot"
                }
            },
            TIME_BONUS: {
                tag: "time_bonus",
                num: 4,
                files: {
                    bt1: "",
                    bs2: "vrijeme-bonus",
                    bs3: ""
                }
            },
            UI_10SEC_LEFT: {
                tag: "time_10sec",
                num: 1,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "podmornica_vrijeme"
                }
            },
            FRAGMENT_SWITCH: {
                tag: "frag_switch",
                num: 10,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "switch_horiz"
                }
            },
            ITEM_EXTRA_TIME: {
                tag: "itm_e_time",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "cuka"
                }
            },
            ITEM_EXTRA_LIFE: {
                tag: "itm_e_life",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "extra_life"
                }
            },
            SHIELD_ON_2: {
                tag: "shield_on_2",
                num: 3,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "stit_invincible"
                }
            },
            SHOOT_LASER1: {
                tag: "bs3_laser1",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "laser1"
                }
            },
            SHOOT_LASER2: {
                tag: "bs3_laser2",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "laser2"
                }
            },
            SHOOT_LASER3: {
                tag: "bs3_laser3",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "laser3"
                }
            },
            TELEPORT_CONTRACT: {
                tag: "teleport_cntrct",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "smoke_puff"
                }
            },
            TELEPORT_CONTENT: {
                tag: "teleport_conten",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "teleport_content"
                }
            },
            TELEPORT_BACK: {
                tag: "teleport_back",
                num: 2,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "smoke_puff_nack"
                }
            },
            WALL_TIMED_OUT: {
                tag: "wall_timed_out",
                num: 4,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "rasipanje"
                }
            },
            WALL_TIMED_IN: {
                tag: "wall_timed_in",
                num: 4,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "rasipanje_back"
                }
            },
            BALL_WARP: {
                tag: "ball_warp",
                num: 1,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "magical_16"
                }
            },
            FIREWORK_1: {
                tag: "firework1",
                num: 3,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "fireworks_bum_1"
                }
            },
            FIREWORK_2: {
                tag: "firework2",
                num: 3,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "fireworks_bum_2"
                }
            },
            FIREWORK_3: {
                tag: "firework3",
                num: 3,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "fireworks_bum_3"
                }
            },
            FIREWORK_ROCKET: {
                tag: "firework_rocket",
                num: 3,
                files: {
                    bt1: "",
                    bs2: "",
                    bs3: "fireworks_raketa"
                }
            },
            RETENTION_XP: {
                tag: "ret_xp",
                num: 3,
                files: {
                    bt1: "collect_xp",
                    bs2: "collect_xp",
                    bs3: "collect_xp"
                }
            },
            RETENTION_LEVELUP: {
                tag: "ret_lvlup",
                num: 3,
                files: {
                    bt1: "levelup",
                    bs2: "levelup",
                    bs3: "levelup"
                }
            },
            RETENTION_TASK_CMPLTD: {
                tag: "tsk_cmpltd",
                num: 3,
                files: {
                    bt1: "task_notify",
                    bs2: "task_notify",
                    bs3: "task_notify"
                }
            },
            RETENTION_UPGRD_ACTIVE: {
                tag: "upgrd_active",
                num: 1,
                files: {
                    bt1: "upgrade_active",
                    bs2: "upgrade_active",
                    bs3: "upgrade_active"
                }
            }
        },
        t.a = h
    },
    121: function(e, t, a) {
        "use strict";
        function i(e, t, a, i, s) {
            t.on(a, i, s),
            e.sys.events.once("shutdown", (function() {
                t.off(a, i, s)
            }
            ))
        }
        a.d(t, "a", (function() {
            return i
        }
        ))
    },
    13: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return MyTasks
        }
        ));
        var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5)
          , _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__)
          , _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6)
          , _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__)
          , _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17)
          , _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__)
          , _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2)
          , _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
          , _MyXpProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25)
          , _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20)
          , _game_objects_MyGameObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3)
          , _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0)
          , _my_sounds_MySoundManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12)
          , _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1)
          , _MyTaskRules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(455)
          , _game_channels_ads_MyAds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37)
          , _MyUpgrades__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27)
          , _my_game_logic_MyGame__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9)
          , _game_channels_MyBuildTargets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18)
          , _helpers_MyDeviceInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15)
          , MyTasks = function() {
            function MyTasks() {
                _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MyTasks)
            }
            return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MyTasks, null, [{
                key: "init",
                value: function(e) {
                    if (null == MyTasks._TASKS) {
                        MyTasks._TASKS = e.cache.json.get("all_tasks").tasks,
                        this.fixTasks();
                        for (var t = [], a = 0; a < MyTasks._TASKS.length; a++) {
                            var i = 0;
                            MyTasks._TASKS[a].sort((function(e, t) {
                                return e.rewXp - t.rewXp
                            }
                            ));
                            for (var s = 0; s < MyTasks._TASKS[a].length; s++) {
                                var n = MyTasks._TASKS[a][s];
                                MyTasks.parseRule(n),
                                n.taskType != MyTasks.TASK_TYPE.BUBBLE_MASTER && (i += n.rewXp),
                                t.includes(n.uid) && _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.error("%c Duplicate task UID found: [" + n.uid + "], " + a + ", " + s, "color: yellow; font-size: 24px; background-color: blue;"),
                                t.push(n.uid),
                                0 != _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.rushToLevel && a < _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.rushToLevel && (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksCompleted.includes(n.uid) || _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksCompleted.push(n.uid),
                                _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksCollected.includes(n.uid) || _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksCollected.push(n.uid))
                            }
                            var r = 0;
                            a > 0 && (r = MyTasks.LEVEL_POINTS[a - 1]),
                            MyTasks.LEVEL_POINTS.push(i + r)
                        }
                        MyTasks.LEVEL_POINTS.length != _MyXpProgress__WEBPACK_IMPORTED_MODULE_5__.a.RANK_NAMES.length && _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.error("Incorrect task levels", MyTasks.LEVEL_POINTS.length, MyTasks.LEVEL_POINTS, ", need: ", _MyXpProgress__WEBPACK_IMPORTED_MODULE_5__.a.RANK_NAMES.length, _MyXpProgress__WEBPACK_IMPORTED_MODULE_5__.a.RANK_NAMES),
                        _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("inited level with level points", MyTasks.LEVEL_POINTS),
                        MyTasks.initCrntLevelTasks()
                    }
                }
            }, {
                key: "fixTasks",
                value: function() {
                    if (_helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("TASKS", "Fixing tasks."),
                    _game_channels_MyBuildTargets__WEBPACK_IMPORTED_MODULE_15__.a.isCordova || _helpers_MyDeviceInfo__WEBPACK_IMPORTED_MODULE_16__.a.isMobile) {
                        _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("TASKS", "Fixing task CMPLT_EDITOR_LVL");
                        e: for (var e = 0; e < MyTasks._TASKS.length - 1; e++)
                            for (var t = 0; t < MyTasks._TASKS[e].length - 1; t++)
                                if (-1 != MyTasks._TASKS[e][t].taskRule.indexOf(MyTasks.TASK_TYPE.CMPLT_EDITOR_LVL)) {
                                    MyTasks._TASKS[e].splice(t, 1),
                                    _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("TASKS", "Fixed task! CMPLT_EDITOR_LVL");
                                    break e
                                }
                    }
                }
            }, {
                key: "parseRule",
                value: function(e) {
                    var t = e.taskRule.split(",");
                    e.taskType = t[0],
                    e.taskMathOperator = t[1],
                    e.goalNum = t[2];
                    for (var a = 1; a < t.length; a++) {
                        var i = "|" + a + "|";
                        e.taskDescr = e.taskDescr.replace(i, t[a]),
                        e.taskType == MyTasks.TASK_TYPE.SHOT_WEAPON && 3 == a ? e.taskDescr = e.taskDescr.replace(t[a], MyTasks.WeaponToString(t[a])) : e.taskType == MyTasks.TASK_TYPE.COLLECT_ITEM && 3 == a || e.taskType == MyTasks.TASK_TYPE.COLLECT_ITEM_LVL && 4 == a ? e.taskDescr = e.taskDescr.replace(t[a], MyTasks.ItemToString(t[a])) : e.taskType == MyTasks.TASK_TYPE.USE_UPGRADE && 3 == a || e.taskType == MyTasks.TASK_TYPE.DO_UPGRADE && 3 == a ? e.taskDescr = e.taskDescr.replace(t[a], MyTasks.UpgradeToString(t[a])) : e.taskType == MyTasks.TASK_TYPE.POP_REASON && 3 == a ? e.taskDescr = e.taskDescr.replace(t[a], MyTasks.PopReasonToString(t[a])) : e.taskType == MyTasks.TASK_TYPE.SHOOT_BALL_TYPE && 3 == a && (e.taskDescr = e.taskDescr.replace(t[a], MyTasks.BallShotTypeToString(t[a])))
                    }
                    var s = t.slice(3);
                    e.ruleFragment1 = s[0] || null,
                    e.ruleFragment2 = s[1] || null,
                    e.taskDescrAdbl && _game_channels_ads_MyAds__WEBPACK_IMPORTED_MODULE_12__.a.adBlockerEnabled && (e.taskDescr += " (DISABLE ADBLOCKER)")
                }
            }, {
                key: "initCrntLevelTasks",
                value: function() {
                    for (var e in MyTasks._taskShortcuts = {},
                    MyTasks.TASK_TYPE) {
                        var t = MyTasks.TASK_TYPE[e];
                        null == MyTasks._taskShortcuts[t] && (MyTasks._taskShortcuts[t] = [])
                    }
                    for (var a = 0; a < MyTasks._TASKS[_MyXpProgress__WEBPACK_IMPORTED_MODULE_5__.a.CurrentLevel].length; a++) {
                        var i = MyTasks._TASKS[_MyXpProgress__WEBPACK_IMPORTED_MODULE_5__.a.CurrentLevel][a];
                        _MyTaskRules__WEBPACK_IMPORTED_MODULE_11__.a.generateMethods(i),
                        i.methods.resetStartVal(!0),
                        _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksCompleted.includes(i.uid) || MyTasks._taskShortcuts[i.taskType].push(i)
                    }
                    _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("Initeddtasks", MyTasks._taskShortcuts),
                    _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("Inited data slosts", _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksStats)
                }
            }, {
                key: "RenderTaskFinishedNotification",
                value: function(e) {
                    _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("RenderTaskFinishedNotification", e);
                    for (var t = 0; t < MyTasks._taskShortcuts[e.taskType].length; t++)
                        if (MyTasks._taskShortcuts[e.taskType][t] == e) {
                            MyTasks._taskShortcuts[e.taskType].splice(t, 1);
                            break
                        }
                    null == _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.taskCompleteDateFirst && (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.taskCompleteDateFirst = Date.now());
                    for (var a = -1, i = 0; i <= MyTasks.numOfTaskNotif.length; i++)
                        if (0 == MyTasks.numOfTaskNotif[i]) {
                            a = i,
                            MyTasks.numOfTaskNotif[i] = !0;
                            break
                        }
                    if (-1 != a) {
                        var s = _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.gameWidth
                          , n = 9;
                        (_build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.isBS2 || _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.isBS3) && (n = 2);
                        var r = ""
                          , o = 13839156;
                        _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.isBS3 && (o = 7090600);
                        _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.scene.bringToTop();
                        var l = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.container();
                        _game_objects_MyGameObject__WEBPACK_IMPORTED_MODULE_7__.a.mySpriteDepth(_game_objects_MyGameObject__WEBPACK_IMPORTED_MODULE_7__.a.RENDER_DEPTH.OVER_GAME, l);
                        var h = 0 + 40 * a
                          , _ = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.graphics();
                        _.fillStyle(o, 1),
                        _.fillRect(0, h, s, 35),
                        _.lineStyle(2, 14475529, .8),
                        _.strokeRect(0, h, s, 35);
                        var c = "DONE: " + e.taskDescr;
                        c.length > 50 && (c = c.substring(0, 50) + "..");
                        var d = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.bitmapText(10, h + n, _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.fontNames.MENU, c, 26);
                        if (d.setOrigin(0, 0),
                        l.add([_, d]),
                        "" != r) {
                            r = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.sprite(180, h + 17.5, _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.lazySpriteKey, r);
                            l.add([r])
                        }
                        l.alpha = 0;
                        _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.tween({
                            targets: l,
                            duration: 350,
                            delay: 250 * a,
                            alpha: 1,
                            x: {
                                from: -50,
                                to: 0
                            },
                            yoyo: !0,
                            hold: 3e3,
                            onComplete: function(e) {
                                MyTasks.numOfTaskNotif[a] = !1,
                                l.destroy()
                            },
                            onStart: function(e) {
                                _my_sounds_MySoundManager__WEBPACK_IMPORTED_MODULE_9__.a.playSound(_my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink, _my_sounds_MySoundManager__WEBPACK_IMPORTED_MODULE_9__.a.SND.RETENTION_TASK_CMPLTD)
                            },
                            ease: Phaser.Math.Easing.Sine.InOut
                        })
                    }
                }
            }, {
                key: "_renderPinnedTaskProgress",
                value: function(e, t) {
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.scene.bringToTop();
                    var a = _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.gameWidth / 2
                      , i = 3;
                    (_build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.isBS2 || _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.isBS3) && (i = 0);
                    if (null != _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.taskPinned && _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.taskPinned == e.uid) {
                        null != _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskContainer && _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskContainer.destroy(),
                        _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskContainer = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.container(),
                        _game_objects_MyGameObject__WEBPACK_IMPORTED_MODULE_7__.a.mySpriteDepth(_game_objects_MyGameObject__WEBPACK_IMPORTED_MODULE_7__.a.RENDER_DEPTH.UNDER_GAME, _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskContainer);
                        var s = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.graphics()
                          , n = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.bitmapText(a + -2, 12 + i, _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_8__.a.fontNames.MENU, e.taskDescr + ": " + t, 22);
                        n.setOrigin(.5, .5);
                        var r = n.width + 20
                          , o = n.height + 3;
                        s.fillStyle(9568444, 1),
                        s.lineStyle(2, 14475529, .8),
                        s.fillRect(a - r / 2, 12 - o / 2, r, o),
                        s.strokeRect(a - r / 2, 12 - o / 2, r, o),
                        _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskContainer.add([s, n]),
                        _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskContainer.alpha = .8,
                        null != _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskTween && _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskTween.stop(),
                        _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskTween = _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.sceneLink.add.tween({
                            targets: _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.pinnedTaskContainer,
                            alpha: 0,
                            duration: 200,
                            delay: 3e3
                        })
                    }
                }
            }, {
                key: "resetLevelTasksData",
                value: function() {
                    _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.log("MyTasks", "Reseting levle tasks data to null", _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksStats),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksStats = {},
                    MyTasks.initCrntLevelTasks()
                }
            }, {
                key: "TaskUpdate",
                value: function(e, t, a) {
                    for (var i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), n = 3; n < i; n++)
                        s[n - 3] = arguments[n];
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.isLazyLoaded && MyTasks._taskShortcuts[t].forEach((function(t) {
                        MyTasks._isTaskActive.apply(MyTasks, [e, t].concat(s)) && t.methods.updateAndNotify(a)
                    }
                    ))
                }
            }, {
                key: "TaskUpdateDontNotify",
                value: function(e, t, a) {
                    for (var i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), n = 3; n < i; n++)
                        s[n - 3] = arguments[n];
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.isLazyLoaded && MyTasks._taskShortcuts[t].forEach((function(t) {
                        MyTasks._isTaskActive.apply(MyTasks, [e, t].concat(s)) && t.methods.updateValue(a)
                    }
                    ))
                }
            }, {
                key: "TaskIncrement",
                value: function(e, t, a) {
                    for (var i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), n = 3; n < i; n++)
                        s[n - 3] = arguments[n];
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.isLazyLoaded && MyTasks._taskShortcuts[t].forEach((function(t) {
                        MyTasks._isTaskActive.apply(MyTasks, [e, t].concat(s)) && t.methods.incrementAndNotify(a)
                    }
                    ))
                }
            }, {
                key: "TaskIncrementDontNotify",
                value: function(e, t, a) {
                    for (var i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), n = 3; n < i; n++)
                        s[n - 3] = arguments[n];
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.isLazyLoaded && MyTasks._taskShortcuts[t].forEach((function(t) {
                        MyTasks._isTaskActive.apply(MyTasks, [e, t].concat(s)) && t.methods.incrementValue(a)
                    }
                    ))
                }
            }, {
                key: "TaskCheckAndNotify",
                value: function(e, t) {
                    for (var a = arguments.length, i = new Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++)
                        i[s - 2] = arguments[s];
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.isLazyLoaded && MyTasks._taskShortcuts[t].forEach((function(t) {
                        MyTasks._isTaskActive.apply(MyTasks, [e, t].concat(i)) && t.methods.notifyIfComplete()
                    }
                    ))
                }
            }, {
                key: "TaskReset",
                value: function(e, t) {
                    for (var a = arguments.length, i = new Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++)
                        i[s - 2] = arguments[s];
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.isLazyLoaded && MyTasks._taskShortcuts[t].forEach((function(t) {
                        MyTasks._isTaskActive.apply(MyTasks, [e, t].concat(i)) && t.methods.resetStartVal(!1)
                    }
                    ))
                }
            }, {
                key: "TaskUpdateIfCondition",
                value: function TaskUpdateIfCondition(gameScene, taskType, value, mathOperator) {
                    for (var _len7 = arguments.length, fragments = new Array(_len7 > 4 ? _len7 - 4 : 0), _key7 = 4; _key7 < _len7; _key7++)
                        fragments[_key7 - 4] = arguments[_key7];
                    _my_scenes_LazyloadScene__WEBPACK_IMPORTED_MODULE_6__.a.isLazyLoaded && MyTasks._taskShortcuts[taskType].forEach((function(t) {
                        MyTasks._isTaskActive.apply(MyTasks, [gameScene, t].concat(fragments)) && eval(value + mathOperator + t.methods.getValue()) && t.methods.updateAndNotify(value)
                    }
                    ))
                }
            }, {
                key: "_isTaskActive",
                value: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (a != t.ruleFragment1 || i != t.ruleFragment2)
                        return t.methods.__debug("VALIDATION FAIL fragments don't match: ", a, "<>", t.ruleFragment1, " -> ", i, "<>", t.ruleFragment2),
                        !1;
                    var s = !1;
                    t.taskType == MyTasks.TASK_TYPE.COMPLETE_PACK_LVLS && t.ruleFragment1 == _my_game_logic_MyGame__WEBPACK_IMPORTED_MODULE_14__.a.customPack.packName && (s = !0);
                    var n = !1;
                    return t.taskType == MyTasks.TASK_TYPE.CMPLT_EDITOR_LVL && (n = !0),
                    null == _my_game_logic_MyGame__WEBPACK_IMPORTED_MODULE_14__.a.customPack || s ? null != e && null != e.CrntLvl && e.CrntLvl.isEditorLevel && !n ? (t.methods.__debug("VALIDATION FAIL due: gameScene.CrntLvl != null && gameScene.CrntLvl.isEditorLevel"),
                    !1) : _my_game_logic_MyGame__WEBPACK_IMPORTED_MODULE_14__.a.currentMode == _my_game_logic_MyGame__WEBPACK_IMPORTED_MODULE_14__.a.MODES.SINGLE || s ? null == _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksStats[t.taskType] ? (t.methods.__debug("VALIDATION FAIL due: MyStorageUtils.gameSettings.tasksStats[task.taskType]", t.taskType, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksStats),
                    !1) : (t.methods.__debug("Validation success:", _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksStats[t.taskType]),
                    !0) : (t.methods.__debug("VALIDATION FAIL due: MyGame.currentMode != MyGame.MODES.SINGLE && !packSpecific", _my_game_logic_MyGame__WEBPACK_IMPORTED_MODULE_14__.a.currentMode, s),
                    !1) : (t.methods.__debug("VALIDATION FAIL due: MyGame.customPack != null && !packSpecific"),
                    !1)
                }
            }, {
                key: "ItemToString",
                value: function(e) {
                    return e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.NONE ? "" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.POINTS1 ? "BONUS 100 POINTS" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.POINTS2 ? "BONUS 200 POINTS" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.POINTS3 ? "BONUS 300 POINTS" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.POINTS4 ? "BONUS 400 POINTS" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.W_SINGLE ? "SINGLE HARPOON" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.W_HOOK ? "HOOK WEAPON" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.W_MINE ? "MINE WEAPON" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.W_LASER ? "LASER WEAPON" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.E_LIFE ? "EXTRA LIFE" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.S_TIME ? "SLOW TIME" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.S_PLAIN ? "SHIELD PLAIN" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.E_TIME ? "EXTRA TIME" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.DYNAMITE ? "DYNAMITE" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.FREEZE ? "FREEZE TIME" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.MEDAL ? "MEDAL" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.S_INVI ? "INVINCIBLE SHIELD" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.SPEED ? "SPEED UP" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_TYPE.W_DOUBLE ? "DOUBLE HARPOON" : void _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.error("Unknown item:", e)
                }
            }, {
                key: "WeaponToString",
                value: function(e) {
                    return e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.SHOT_TYPE.SINGLE ? "'SINGLE HARPOON'" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.SHOT_TYPE.HOOK ? "'HOOK'" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.SHOT_TYPE.LASER ? "'LASER'" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.SHOT_TYPE.MINE ? "'MINE'" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.SHOT_TYPE.DOUBLE ? "'DOUBLE HARPOON'" : (_helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.error("Unknown weapon:", e),
                    null)
                }
            }, {
                key: "UpgradeToString",
                value: function(e) {
                    for (var t = 0; t < _MyUpgrades__WEBPACK_IMPORTED_MODULE_13__.a.ITEMS.length; t++)
                        if (_MyUpgrades__WEBPACK_IMPORTED_MODULE_13__.a.ITEMS[t].modType == e)
                            return "'" + _MyUpgrades__WEBPACK_IMPORTED_MODULE_13__.a.ITEMS[t].title + "'";
                    return _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.error("Unknown modType (UpgradeToString):", e),
                    null
                }
            }, {
                key: "PopReasonToString",
                value: function(e) {
                    if (e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.POP_REASON.SHIELD_TANK) {
                        var t = MyTasks.UpgradeToString(_helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK);
                        if (null != t)
                            return t
                    } else {
                        if (e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.POP_REASON.SPIKEBURST)
                            return "SPIKE WALLS";
                        if (e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.POP_REASON.SHIELD_PLAIN)
                            return "PLAIN SHIELD";
                        if (e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.POP_REASON.DYNAMITE)
                            return "DYNAMITE BONUS";
                        if (e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.POP_REASON.MEDAL)
                            return "MEDAL BONUS"
                    }
                    return _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.error("Unknown popReason:", e),
                    null
                }
            }, {
                key: "BallShotTypeToString",
                value: function(e) {
                    return e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.BALL_TYPE_INFO.METAL ? "METAL" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.BALL_TYPE_INFO.GHOST ? "GHOST" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.BALL_TYPE_INFO.NORMAL ? "PLAIN" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.BALL_TYPE_INFO.PENTA ? "PENTA/UMBRELLA" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.BALL_TYPE_INFO.REVERSE ? "BLACK" : e == _helpers_Consts__WEBPACK_IMPORTED_MODULE_10__.a.BALL_TYPE_INFO.SPLIT4 ? "SPLIT-4" : (_helpers_MyDebug__WEBPACK_IMPORTED_MODULE_3__.a.error("Unknown popReason:", popReason),
                    null)
                }
            }, {
                key: "Experience",
                get: function() {
                    for (var e = 0, t = 0; t < MyTasks._TASKS.length; t++)
                        for (var a = 0; a < MyTasks._TASKS[t].length; a++) {
                            var i = MyTasks._TASKS[t][a];
                            _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_4__.a.gameSettings.tasksCollected.includes(i.uid) && (e += i.rewXp)
                        }
                    return e
                }
            }]),
            MyTasks
        }();
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(MyTasks, "_TASKS", null),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(MyTasks, "_taskShortcuts", {}),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(MyTasks, "TASK_TYPE", {
            LEVEL_COMPLETED: "lvlComplete",
            TOTAL_BUBBLES_POPPED: "totalBubbles",
            LEVEL_POINTS: "lvlPoints",
            TOTAL_REVIVES: "totalRevives",
            TOTAL_DEATHS: "totalDeath",
            TIME_LEFT: "timeLeft",
            GAMES_PLAYED: "gamesPlayed",
            SHOT_WEAPON: "shotWeapon",
            SHOT_ANY_WEAPON_ON_LVL: "shotAnyWeaponOnLvl",
            COLLECT_ITEM: "collectItem",
            COLLECT_ITEM_LVL: "collectItemLvl",
            DO_UPGRADE: "doUpgrade",
            USE_UPGRADE: "useUpgrade",
            DONT_MISS: "dontMiss",
            REPEAT_LOGIN: "repeatLogin",
            BALL_WALL_EDGE: "ballwallEdge",
            LOSE_SHIELD_PLAIN: "loseShieldPlain",
            LOSE_SHIELD_INVINCIBLE: "loseShieldInvincible",
            PHASE_INSIDE_BUBBLE: "phaseInsideBubble",
            GAME_POINTS: "gamePoints",
            CONSECUTIVE_LEVELS: "consecutiveLevels",
            LEVEL_COMBOS: "lvlCombo",
            POP_REASON: "popReason",
            BUBBLE_MASTER: "bubbleMaster",
            COMPLETE_PACK_LVLS: "completePackLvls",
            CMPLT_EDITOR_LVL: "cmpltEditorLvl",
            SHOOT_BALL_TYPE: "shootBallType",
            SPIKE_RUN: "spikeRun"
        }),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(MyTasks, "LEVEL_POINTS", []),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(MyTasks, "numOfTaskNotif", [!1, !1, !1])
    },
    134: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(30)
          , h = a(249)
          , _ = a(10)
          , c = a.n(_)
          , d = a(19)
          , u = a.n(d)
          , p = a(7)
          , m = a.n(p)
          , y = a(11)
          , g = a.n(y)
          , S = a(12)
          , E = a(3)
          , f = a(23)
          , T = a(8)
          , v = a(1)
          , b = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.DOOR_BT1,
                i._spriteStickOutY = 5,
                i._slideForY = -a.h + i._spriteStickOutY,
                i._slideEndY = a.y + i._slideForY,
                i._slideTime = .25,
                i._calculatedSlideSpeedY = i._slideForY / i._slideTime,
                i._doSlide = !1,
                i._spriteOffsetY = (76 - a.h) / 2,
                i._darkWallSprite = null,
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    this.myRenderDepth = E.a.RENDER_DEPTH.UNDER_GAME,
                    this._darkWallSprite = new T.a(this.gameScene,this.pos.x,this.pos.y - this._spriteOffsetY,o.a.spriteKey,"walls/door_back.png",1,this.myRenderDepth),
                    this.mySprite = new T.a(this.gameScene,this.pos.x,this.pos.y - this._spriteOffsetY,o.a.spriteKey,"walls/door.png",1,this.myRenderDepth)
                }
            }, {
                key: "onReceiveMyEvent",
                value: function(e, t) {
                    t == this._eventInfo && (this._doSlide = !0,
                    this.mySound = S.a.playSound(this.gameScene, S.a.SND.WALL_SLIDE_SMALL),
                    this.gameScene.phyEngine.bodySwitchLayer(f.a.LAYER.WALLBALL, f.a.LAYERS_WALL, this))
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this._slideTime > 0 && this._doSlide && (this._slideTime -= a / 1e3,
                    this.mySprite.y += this._calculatedSlideSpeedY * a / 1e3),
                    this._doSlide && this._slideTime <= 0 && (this._doSlide = !1,
                    this.mySprite.y = this._slideEndY - this._spriteOffsetY),
                    u()(m()(t.prototype), "myUpdate", this).call(this, e, a)
                }
            }]),
            t
        }(l.a)
          , k = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.CEILSPIKE_BT1,
                i._slideForY = o.a.gameAreaMax.y - i.pos.y,
                i._slideTime = a.slideTime || 0,
                i._calculatedSlideSpeedY = 0,
                i._doSlide = !1,
                i._spikesOffsetY = -2,
                i._colorOffsetY = -2,
                i._spikesSprite = null,
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    this._calculatedSlideSpeedY = this._slideForY / this._slideTime,
                    this.mySprite = this.gameScene.add.tileSprite(this.pos.x - this.sizeHalf.x, this.pos.y - this.sizeHalf.y, this.size.x, this.size.y, o.a.spriteKey, "walls/ceil_color.png"),
                    this.makeDepthAndScale(this.mySprite),
                    this.mySprite.setSize(this.size.x, 700),
                    this.mySprite.setOrigin(0, 1),
                    this.mySprite.setPosition(this.pos.x - this.sizeHalf.x, this.pos.y),
                    this._spikesSprite = this.gameScene.add.tileSprite(this.pos.x - this.sizeHalf.x, this.pos.y + this._spikesOffsetY, this.size.x, 9, o.a.spriteKey, "walls/wall_spike.png"),
                    this._spikesSprite.setDisplayOrigin(0, 0),
                    this.makeDepthAndScale(this._spikesSprite)
                }
            }, {
                key: "onReceiveMyEvent",
                value: function(e, t) {
                    this.isStatic = !1,
                    this._doSlide = !0
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    this._slideTime > 0 && this._doSlide && (this._slideTime -= a,
                    this.pos.y += this._calculatedSlideSpeedY * a),
                    this._doSlide && this._slideTime < 0 && (this._doSlide = !1,
                    this.isStatic = !0),
                    u()(m()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i)
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this.mySprite.y = this.pos.y,
                    this._spikesSprite.y = this.pos.y + this._spikesOffsetY,
                    u()(m()(t.prototype), "myUpdate", this).call(this, e, a)
                }
            }]),
            t
        }(l.a)
          , P = a(247)
          , L = a(16)
          , A = (a(2),
        a(174))
          , I = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.DOOR_BT1,
                i._slideTime = .25,
                i._mySpriteLeft = null,
                i._mySpriteRight = null,
                i._mySpriteTipLeft = null,
                i._mySpriteTipRight = null,
                i.switchBottomOrigin = i.pos.y + i._wallInfo.h / 2,
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    if (o.a.isBS2) {
                        var e = "walls/switch/" + this._eventInfo + ".png"
                          , t = "walls/switch/" + this._eventInfo + "_tip.png"
                          , a = new L.a(this._p1.x,this._p1.y + -.5)
                          , i = new L.a(this.size.x,this.size.y - -1);
                        if (this.sizeHalf.y > this.sizeHalf.x)
                            i = new L.a(this.size.y,this.size.x - -1);
                        this._mySpriteLeft = this.gameScene.add.tileSprite(a.x, a.y, i.x / 2, i.y, o.a.spriteKey, e),
                        this._mySpriteLeft.setOrigin(0, 0),
                        this.makeDepthAndScale(this._mySpriteLeft),
                        this._mySpriteRight = this.gameScene.add.tileSprite(a.x + i.x, a.y, i.x / 2, i.y, o.a.spriteKey, e),
                        this._mySpriteRight.setOrigin(1, 0),
                        this.makeDepthAndScale(this._mySpriteRight),
                        this.sizeHalf.y > this.sizeHalf.x && (this._mySpriteLeft.angle = 90,
                        this._mySpriteLeft.x += 10,
                        this._mySpriteRight.angle = 90,
                        this._mySpriteRight.x -= i.x - 10,
                        this._mySpriteRight.y += i.x),
                        this._mySpriteTipLeft = new T.a(this.gameScene,this._p1.x,this._p1.y,o.a.spriteKey,t),
                        this._mySpriteTipLeft.setOrigin(0, 0),
                        this.makeDepthAndScale(this._mySpriteTipLeft),
                        this._mySpriteTipRight = new T.a(this.gameScene,this._p1.x + i.x,this._p1.y,o.a.spriteKey,t),
                        this._mySpriteTipRight.setOrigin(0, 0),
                        this.makeDepthAndScale(this._mySpriteTipRight),
                        this._mySpriteTipRight.flipX = !0,
                        this.sizeHalf.y > this.sizeHalf.x && (this._mySpriteTipLeft.angle = 90,
                        this._mySpriteTipLeft.x += 10,
                        this._mySpriteTipRight.angle = 90,
                        this._mySpriteTipRight.x = this._p1.x + 10,
                        this._mySpriteTipRight.y = this._p1.y + i.x),
                        this._stateSprites.push(this._mySpriteLeft, this._mySpriteTipLeft, this._mySpriteRight, this._mySpriteTipRight)
                    } else if (o.a.isBS3) {
                        var s = "walls/basic.png";
                        this._isVerticalBS3Switch() && (s = "walls/cavein_bs3.png"),
                        this.mySprite = this.gameScene.add.tileSprite(this.pos.x - this.sizeHalf.x, this.pos.y - this.sizeHalf.y, this.size.x, this.size.y, o.a.spriteKey, s),
                        this.mySprite.setDisplayOrigin(0, 0),
                        this.makeDepthAndScale(this.mySprite)
                    }
                }
            }, {
                key: "onReceiveMyEvent",
                value: function(e, t) {
                    if (t == this._eventInfo) {
                        if (0 == this.pbActive)
                            return;
                        if (this.pbActive = !1,
                        o.a.isBS2) {
                            this.mySound = S.a.playSound(this.gameScene, S.a.SND.SWITCH),
                            this._mySpriteTipLeft.blendMode = Phaser.BlendModes.ADD,
                            this._mySpriteTipRight.blendMode = Phaser.BlendModes.ADD;
                            var a = this;
                            this.gameScene.tweens.add({
                                targets: [this._mySpriteLeft, this._mySpriteRight],
                                width: 0,
                                ease: "Quint",
                                duration: 450,
                                onComplete: function() {}
                            }),
                            this.gameScene.tweens.add({
                                targets: [this._mySpriteTipLeft, this._mySpriteTipRight],
                                displayWidth: 1,
                                duration: 350,
                                delay: 150,
                                onComplete: function() {
                                    a.myOnDestroy()
                                }
                            })
                        } else if (o.a.isBS3)
                            if (this._isVerticalBS3Switch())
                                S.a.playSound(this.gameScene, S.a.SND.SWITCH),
                                this.pbActive = !0,
                                this.isStatic = !1,
                                this.vel.y = 10;
                            else {
                                this.mySprite.visible = !1;
                                A.a.GetFragments(this)
                            }
                    }
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, t, a) {
                    this._isVerticalBS3Switch() && (this._pBodyResize(new L.a(this.size.x,this.switchBottomOrigin - this.pos.y + this.sizeHalf.y)),
                    this.size.y <= 0 && this.myOnDestroy())
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this._isVerticalBS3Switch() && (this.mySprite.setCrop(0, 0, this.mySprite.width, this.switchBottomOrigin - this.pos.y + this.sizeHalf.y),
                    this.mySprite.x = this.pos.x - this.sizeHalf.x,
                    this.mySprite.y = this.pos.y - this.sizeHalf.y,
                    u()(m()(t.prototype), "myUpdate", this).call(this, e, a))
                }
            }, {
                key: "_isVerticalBS3Switch",
                value: function() {
                    return o.a.isBS3 && this._wallInfo.h > this._wallInfo.w
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    o.a.isBS2 && (this._mySpriteLeft.destroy(),
                    this._mySpriteRight.destroy(),
                    this._mySpriteTipLeft.destroy(),
                    this._mySpriteTipRight.destroy()),
                    u()(m()(t.prototype), "myOnDestroy", this).call(this)
                }
            }]),
            t
        }(l.a)
          , M = a(112)
          , O = a(175)
          , D = a(17)
          , R = a.n(D)
          , B = a(22)
          , w = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.CONV_BELT,
                i.convBeltSpeed = a.convBeltSpeed,
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    this.mySprite = new B.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/convbelt.png",{
                        top: 5,
                        bottom: 6,
                        left: 11,
                        right: 11
                    }),
                    this.mySprite.setDepthNinePatch(this.myRenderDepth);
                    for (var e = 0; e < this.size.x; e += 10) {
                        var t = new T.a(this.gameScene,this.pos.x - this.size.x / 2 + e + 5,this.pos.y - 4,o.a.spriteKey,"walls/convbelt/convbelt_1.png");
                        this.makeDepthAndScale(t),
                        t.anims.play("convbelt"),
                        this.convBeltSpeed < 0 && t.anims.playReverse("convbelt"),
                        this._stateSprites.push(t)
                    }
                }
            }]),
            t
        }(l.a);
        R()(w, "SPEED_UP", 0),
        R()(w, "SLOW_DOWN", 0);
        var N = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.SPIKEALL,
                i._spikesOffsetY = -2,
                i._colorOffsetY = -2,
                i._spikesSprite = null,
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    this.mySprite = new B.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/spikeall.png",{
                        top: 7,
                        bottom: 7,
                        left: 7,
                        right: 7
                    }),
                    this.mySprite.setDepthNinePatch(this.myRenderDepth);
                    var e = t.GetSpikesTopLeftRight(this.gameScene, this._wallInfo.w, this._wallInfo.h);
                    e[0].x = this.pos.x,
                    e[0].y = this.pos.y - this._wallInfo.h / 2,
                    e[1].x = this.pos.x - this._wallInfo.w / 2,
                    e[1].y = this.pos.y,
                    e[2].x = this.pos.x + this._wallInfo.w / 2,
                    e[2].y = this.pos.y,
                    this.makeDepthAndScale(e[0]),
                    this.makeDepthAndScale(e[1]),
                    this.makeDepthAndScale(e[2]),
                    this._stateSprites = this._stateSprites.concat(e)
                }
            }], [{
                key: "GetSpikesTopLeftRight",
                value: function(e, t, a) {
                    var i = []
                      , s = e.add.tileSprite(0, 0, t, 5, o.a.spriteKey, "walls/wall_spikey.psd");
                    s.setOrigin(.5, 0),
                    s.y = -a / 2,
                    s.angle = 180;
                    var n = e.add.tileSprite(0, 0, a, 5, o.a.spriteKey, "walls/wall_spikey.psd");
                    n.setOrigin(.5, 0),
                    n.x = -t / 2,
                    n.angle = 90;
                    var r = e.add.tileSprite(0, 0, a, 5, o.a.spriteKey, "walls/wall_spikey.psd");
                    return r.setOrigin(.5, 0),
                    r.x = t / 2,
                    r.angle = -90,
                    i.push(s, n, r),
                    i
                }
            }]),
            t
        }(l.a)
          , x = (a(43),
        a(20))
          , C = a(31)
          , U = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.TELEPORT,
                i._teleportDestination = null,
                i._teleportRays = null,
                i._teleportIdleTime = 3e3,
                i._lastTeleportTimes = [0, -i._teleportIdleTime, -i._teleportIdleTime],
                i._teleportTween = null,
                i._teleportingPlayerFrame = [],
                i._teleportingPlayerAnim = [],
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    var e = 3;
                    o.a.isBS3 && (e = 0);
                    var a = "_teleportRays";
                    if (!this.gameScene.textures.exists(a)) {
                        var i = this.gameScene.add.graphics();
                        i.fillStyle(7391192, 1),
                        i.fillRect(0, 0, 43, 40),
                        i.generateTexture(a, 43, 40)
                    }
                    this._teleportRays = this.gameScene.add.image(this.pos.x, this.pos.y + e, "_teleportRays"),
                    this.makeDepthAndScale(this._teleportRays),
                    this.gameScene.add.tween({
                        targets: this._teleportRays,
                        duration: 230,
                        delay: 460 * Math.random(),
                        alpha: {
                            from: .6,
                            to: .2
                        },
                        loop: -1,
                        yoyo: !0
                    }),
                    this.mySprite = t.GetTeleportSprite(this.gameScene),
                    this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y,
                    this.makeDepthAndScale(this.mySprite),
                    this._stateSprites.push(this._teleportRays, this.mySprite)
                }
            }, {
                key: "startTeleportingPlayer",
                value: function(e) {
                    if (null != this._wallInfo.teleport_dest) {
                        var t = this;
                        null == this._teleportDestination && null != this._wallInfo.teleport_dest && this.gameScene.phyEngine.bodies[f.a.LAYER.TELEPORT].forEach((function(e) {
                            var a = e;
                            a._wallInfo.t == v.a.WALL.WALL_TYPE.TELEPORT && a._wallInfo.teleport_name == t._wallInfo.teleport_dest && (t._teleportDestination = a)
                        }
                        )),
                        this.gameScene.timeInLevel < this._lastTeleportTimes[e.playerId] || (e.shotManager.cantShootTimer = this.gameScene.timeInLevel + 1e17,
                        this.animation1_startTeleporting(e))
                    }
                }
            }, {
                key: "animation1_startTeleporting",
                value: function(e) {
                    e.pbActive = !1,
                    this._teleportingPlayerAnim[e.playerId] = e.mySprite.anims.currentAnim.key,
                    this._teleportingPlayerFrame[e.playerId] = e.mySprite.frame.name,
                    e.mySprite.anims.stop();
                    var a = null;
                    x.a.isLazyLoaded && ((a = this.gameScene.add.sprite(this.pos.x, this.pos.y)).anims.play("teleport_ani"),
                    this.makeDepthAndScale(a)),
                    S.a.playSound(this.gameScene, S.a.SND.TELEPORT_CONTRACT);
                    var i = this;
                    this._teleportTween = this.gameScene.add.tween({
                        targets: e.pos,
                        x: this._teleportDestination.pos.x,
                        y: this._teleportDestination.pos.y,
                        delay: t.POOF_ANIM_LENGTH,
                        duration: t.TELEPORTATION_SPEED,
                        ease: Phaser.Math.Easing.Quadratic.Out,
                        onStart: function() {
                            S.a.playSound(i.gameScene, S.a.SND.TELEPORT_CONTENT)
                        },
                        onComplete: function() {
                            i._teleportDestination._lastTeleportTimes[e.playerId] = i.gameScene.timeInLevel + i._teleportIdleTime,
                            a && a.destroy(),
                            i.animation2_arrived(e)
                        }
                    }),
                    this.gameScene.time.addEvent({
                        delay: t.POOF_SHOWOUTLINE,
                        callback: function() {
                            e.mySprite.setFrame("walls/char_outline.png"),
                            e.playerShield && e.playerShield.shieldSprite && (e.playerShield.shieldSprite.visible = !1)
                        }
                    })
                }
            }, {
                key: "animation2_arrived",
                value: function(e) {
                    var a = null;
                    x.a.isLazyLoaded && ((a = this.gameScene.add.sprite(this._teleportDestination.pos.x, this._teleportDestination.pos.y)).anims.playReverse("teleport_ani"),
                    this.makeDepthAndScale(a)),
                    S.a.playSound(this.gameScene, S.a.SND.TELEPORT_BACK);
                    var i = this;
                    this.gameScene.time.addEvent({
                        delay: t.POOF_ANIM_LENGTH - t.POOF_SHOWOUTLINE,
                        callback: function() {
                            e.mySprite.setFrame(i._teleportingPlayerFrame[e.playerId]),
                            e.playerShield && e.playerShield.shieldSprite && (e.playerShield.shieldSprite.visible = !0)
                        }
                    }),
                    this.gameScene.time.addEvent({
                        delay: t.POOF_ANIM_LENGTH,
                        callback: function() {
                            a && a.destroy(),
                            e.vel.y = o.a.playerStartG,
                            e.pbActive = !0,
                            e.mySprite.anims.play(i._teleportingPlayerAnim[e.playerId]),
                            e.shotManager.cantShootTimer = i.gameScene.timeInLevel
                        }
                    })
                }
            }, {
                key: "_onStateChanged",
                value: function(e) {
                    e == C.a.EVENT_STATE.ACTIVE ? this._teleportRays.visible = !0 : e == C.a.EVENT_STATE.INACTIVE && (this._teleportRays.visible = !1)
                }
            }, {
                key: "myOnPause",
                value: function(e) {
                    null != this._teleportTween && (e ? this._teleportTween.pause() : this._teleportTween.resume()),
                    u()(m()(t.prototype), "myOnPause", this).call(this, e)
                }
            }], [{
                key: "GetTeleportSprite",
                value: function(e) {
                    return new T.a(e,0,0,o.a.spriteKey,"walls/teleport_base.png")
                }
            }]),
            t
        }(l.a);
        R()(U, "POOF_ANIM_LENGTH", 850),
        R()(U, "POOF_SHOWOUTLINE", 250),
        R()(U, "TELEPORTATION_SPEED", 350);
        var W = U
          , Y = a(248)
          , K = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.TIMED,
                i._steppedOnWallTimed = 1e3 * t.STAY_ON,
                i._falledDownWallTimed = 0,
                i._playerStandingOnTimed = !1,
                i._usingSpriteNoAnimation = !0,
                i._fadingBackIn = !1,
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    if (o.a.isBS2 || !x.a.isLazyLoaded) {
                        this.mySprite = new B.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/timed.png",{
                            top: 7,
                            bottom: 7,
                            left: 7,
                            right: 7
                        }),
                        this.mySprite.setDepthNinePatch(this.myRenderDepth),
                        this.showInvisibleWall(!1)
                    } else
                        o.a.isBS3 && (this.mySprite = new T.a(this.gameScene,this.pos.x,this.pos.y,o.a.lazySpriteKey,"timed_ani/timed_4.png"),
                        this.makeDepthAndScale(this.mySprite),
                        this._usingSpriteNoAnimation = !1)
                }
            }, {
                key: "standingOnWallTimed",
                value: function(e) {
                    this._playerStandingOnTimed = !0
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    u()(m()(t.prototype), "myUpdate", this).call(this, e, a),
                    this.gameScene.isGamePaused || (this._playerStandingOnTimed && this.pbActive ? (this._steppedOnWallTimed -= a,
                    this._steppedOnWallTimed <= 0 && this.timedWallOut()) : this.pbActive || (this._falledDownWallTimed -= a,
                    this._falledDownWallTimed <= 0 && !this._fadingBackIn && (this._fadingBackIn = !0,
                    this.timedWallBackIn())))
                }
            }, {
                key: "timedWallOut",
                value: function() {
                    this.pbActive = !1,
                    this._playerStandingOnTimed = !1,
                    this._steppedOnWallTimed = 1e3 * t.STAY_ON,
                    this._falledDownWallTimed = 1e3 * t.COME_BACK,
                    S.a.playSound(this.gameScene, S.a.SND.WALL_TIMED_OUT),
                    this._usingSpriteNoAnimation ? this.mySprite.ninePatch.alpha = .2 : this.mySprite.anims.play("timed_ani")
                }
            }, {
                key: "timedWallBackIn",
                value: function() {
                    if (S.a.playSound(this.gameScene, S.a.SND.WALL_TIMED_IN),
                    this._usingSpriteNoAnimation)
                        this.mySprite.ninePatch.alpha = 1,
                        this.pbActive = !0;
                    else {
                        this.mySprite.anims.playReverse("timed_ani");
                        var e = this;
                        this.gameScene.time.addEvent({
                            delay: this.mySprite.anims.currentAnim.duration,
                            callback: function() {
                                e.pbActive = !0,
                                e._fadingBackIn = !1
                            }
                        })
                    }
                }
            }]),
            t
        }(l.a);
        R()(K, "STAY_ON", .5),
        R()(K, "COME_BACK", 2);
        var G = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = c()(this, m()(t).call(this, e, a))).wallType = v.a.WALL.WALL_TYPE.STICKY,
                i
            }
            return g()(t, e),
            r()(t, [{
                key: "gotOnSticky",
                value: function(e) {
                    e._stickyModifier = t.STICKY_SLOW_DOWN_BS3,
                    o.a.isBS2 && (e._stickyModifier = t.STICKY_SLOW_DOWN_BS2)
                }
            }, {
                key: "stickyBallBounce",
                value: function(e) {}
            }, {
                key: "drawWall",
                value: function() {
                    if (o.a.isBS2) {
                        this.mySprite = new B.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/sticky.png",{
                            top: 7,
                            bottom: 7,
                            left: 7,
                            right: 7
                        }),
                        this.mySprite.setDepthNinePatch(this.myRenderDepth)
                    } else
                        o.a.isBS3 && (this.mySprite = this.gameScene.add.tileSprite(this.pos.x, this.pos.y, this.size.x, this.size.y, o.a.spriteKey, "walls/sticky.png"),
                        E.a.mySpriteDepth(this.myRenderDepth, this.mySprite))
                }
            }]),
            t
        }(l.a);
        R()(G, "STICKY_SLOW_DOWN_BS3", 10.5),
        R()(G, "STICKY_SLOW_DOWN_BS2", 7);
        var H = a(250)
          , V = a(251)
          , z = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "spawnWall",
                value: function(e, t) {
                    var a = t.t
                      , i = null;
                    return a == v.a.WALL.WALL_TYPE.NORMAL ? i = new l.a(e,t) : a == v.a.WALL.WALL_TYPE.SLIDING_BT1 ? i = new h.a(e,t) : a == v.a.WALL.WALL_TYPE.DOOR_BT1 ? i = new b(e,t) : a == v.a.WALL.WALL_TYPE.CEILSPIKE_BT1 ? i = new k(e,t) : a == v.a.WALL.WALL_TYPE.LADDER ? i = new V.a(e,t) : a == v.a.WALL.WALL_TYPE.BREAKABLE ? i = new P.a(e,t) : a == v.a.WALL.WALL_TYPE.SWITCH ? i = new I(e,t) : a == v.a.WALL.WALL_TYPE.ICE ? i = new M.a(e,t) : a == v.a.WALL.WALL_TYPE.TRAMPOLINE ? i = new O.a(e,t) : a == v.a.WALL.WALL_TYPE.CONV_BELT ? i = new w(e,t) : a == v.a.WALL.WALL_TYPE.SPIKEALL ? i = new N(e,t) : a == v.a.WALL.WALL_TYPE.TELEPORT ? i = new W(e,t) : a == v.a.WALL.WALL_TYPE.CAVEIN_BS3 ? i = new Y.a(e,t) : a == v.a.WALL.WALL_TYPE.TIMED ? i = new K(e,t) : a == v.a.WALL.WALL_TYPE.STICKY ? i = new G(e,t) : a == v.a.WALL.WALL_TYPE.MOVING ? i = new H.a(e,t) : console.error("Undefined wall type!" + a),
                    i.myInit(),
                    i._initializeStateEvent(),
                    i
                }
            }, {
                key: "spawnBounds",
                value: function(e) {
                    var t = 30
                      , a = new l.a(e,{
                        x: o.a.gameAreaMin.x - 15,
                        y: o.a.gameAreaMin.y + (o.a.gameAreaMax.y - o.a.gameAreaMin.y) / 2,
                        w: t,
                        h: o.a.gameAreaMax.y - o.a.gameAreaMin.y + t
                    }).myInit()
                      , i = new l.a(e,{
                        x: o.a.gameAreaMax.x + 15,
                        y: o.a.gameAreaMin.y + (o.a.gameAreaMax.y - o.a.gameAreaMin.y) / 2,
                        w: t,
                        h: o.a.gameAreaMax.y - o.a.gameAreaMin.y + t
                    }).myInit()
                      , s = new l.a(e,{
                        x: o.a.gameAreaMin.x + (o.a.gameAreaMax.x - o.a.gameAreaMin.x) / 2,
                        y: o.a.gameAreaMin.y - 15,
                        w: o.a.gameAreaMax.x - o.a.gameAreaMin.x + t,
                        h: t
                    }).myInit()
                      , n = new l.a(e,{
                        x: o.a.gameAreaMin.x + (o.a.gameAreaMax.x - o.a.gameAreaMin.x) / 2,
                        y: o.a.gameAreaMax.y + 15,
                        w: o.a.gameAreaMax.x - o.a.gameAreaMin.x + t,
                        h: t
                    }).myInit();
                    a.mySprite.destroy(),
                    i.mySprite.destroy(),
                    s.mySprite.destroy(),
                    n.mySprite.destroy()
                }
            }, {
                key: "_assignPriority",
                value: function(e) {
                    return e == v.a.WALL.WALL_TYPE.TELEPORT || e == v.a.WALL.WALL_TYPE.SPIKEALL ? 5 : e == v.a.WALL.WALL_TYPE.NORMAL ? 2 : e == v.a.WALL.WALL_TYPE.MOVING ? 6 : e == v.a.WALL.WALL_TYPE.CAVEIN_BS3 ? 1 : e == v.a.WALL.WALL_TYPE.BREAKABLE || e == v.a.WALL.WALL_TYPE.STICKY ? 2 : e == v.a.WALL.WALL_TYPE.CONV_BELT ? 3 : e == v.a.WALL.WALL_TYPE.ICE ? 2 : e == v.a.WALL.WALL_TYPE.TRAMPOLINE ? 1 : e == v.a.WALL.WALL_TYPE.LADDER ? 4 : e == v.a.WALL.WALL_TYPE.TIMED ? 2 : void 0
                }
            }]),
            e
        }();
        t.a = z
    },
    135: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(4)
          , l = a(2)
          , h = a(10)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(83)
          , y = a(15)
          , g = a(8)
          , S = a(0)
          , E = a(18)
          , f = function(e) {
            function t() {
                return s()(this, t),
                _()(this, d()(t).apply(this, arguments))
            }
            return p()(t, e),
            r()(t, [{
                key: "drawAd",
                value: function() {
                    var e = 6;
                    (S.a.isBS2 || S.a.isBS3) && (e = 0),
                    this.open_button.changeTextOrIcon({
                        text: b.newsObj.action,
                        size: 35,
                        fixY: e
                    }),
                    this.image = new g.a(this.myScene,.52 * S.a.gameWidth,.35 * S.a.gameHeight,b.loadedImageName,null,1)
                }
            }, {
                key: "openAd",
                value: function() {
                    y.a.isIOS ? window.open(b.newsObj.url_ios) : y.a.isAndroid ? window.open(b.newsObj.url_android, E.a.browserWindow) : window.open(b.newsObj.url_web, E.a.browserWindow)
                }
            }]),
            t
        }(m.a)
          , T = (a(254),
        a(38))
          , v = function() {
            function e(t, a) {
                s()(this, e),
                this.id = t.id || -1,
                this.action = t.action || "CLICK HERE",
                this.image = t.image || "",
                this.url_ios = t.url_ios || "",
                this.url_android = t.url_android || "",
                this.url_web = t.url_web || "",
                l.a.log("NEWS", "Getting into img:" + e.loadedImageName, "Image:" + this.image),
                a.load.image(e.loadedImageName, this.image),
                a.load.start(),
                a.load.on("filecomplete-image-" + e.loadedImageName, (function(e) {
                    l.a.log("NEWS", "mynews completed loading", e),
                    a.remoteSettingsCallStart()
                }
                )),
                l.a.debugLog && a.load.on("loaderror", (function(e) {
                    l.a.log("RS", e)
                }
                ))
            }
            return r()(e, null, [{
                key: "showNews",
                value: function(t) {
                    if (l.a.log("NEWS", "Showing news..", e.newsObj),
                    null != e.newsObj) {
                        if (0 == l.a.forceNewsOn) {
                            if (o.a.gameSettings.lastNewsID >= e.newsObj.id)
                                return;
                            if (((new Date).getTime() - new Date(o.a.gameSettings.installDate).getTime()) / 1e3 / 60 / 60 < 1)
                                return void l.a.log("NEWS", "Hour not passed yet.")
                        }
                        new f((function() {
                            T.a.changeActiveScene(t)
                        }
                        )).setRewarded(5),
                        0 == l.a.forceNewsOn && (o.a.gameSettings.lastNewsID = e.newsObj.id,
                        o.a.saveUserSettings())
                    }
                }
            }]),
            e
        }();
        v.newsObj = null,
        v.loadedImageName = "myNewsImage";
        var b = t.a = v
    },
    15: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = (a(2),
        a(16))
          , r = function e() {
            s()(this, e)
        };
        r.initialize = function(e) {
            r.isIpad = r._isIpad(),
            r.isMobile = r._isMobile(e),
            r.isIOS = r._isIOS(e),
            r.isAndroid = r._isAndroid(e)
        }
        ,
        r._isIpad = function() {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
            return !!(!e && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) || e
        }
        ,
        r.isIpad = !1,
        r._isMobile = function(e) {
            return !(e.device.os.desktop && !r.isIpad)
        }
        ,
        r.isMobile = !1,
        r._isIOS = function(e) {
            return !!(e.device.os.iOS || e.device.os.iPad || e.device.os.iPhone)
        }
        ,
        r.isIOS = !1,
        r._isAndroid = function(e) {
            return e.device.os.android
        }
        ,
        r.isAndroid = !1,
        r.cameraOffset = n.a.ZERO,
        r.notchOffset = 0,
        r.orientation = (r.ORIENTATIONS = {
            LANDSCAPE: "landscape",
            PORTRAIT: "portrait"
        }).PORTRAIT,
        t.a = r
    },
    16: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (s()(this, e),
                "number" != typeof t)
                    throw new Error("Invalid X value" + t);
                if ("number" != typeof a)
                    throw new Error("Invalid Y value" + a);
                this.x = t,
                this.y = a
            }
            return r()(e, [{
                key: "plus",
                value: function(t) {
                    return new e(this.x + t.x,this.y + t.y)
                }
            }, {
                key: "minus",
                value: function(t) {
                    return new e(this.x - t.x,this.y - t.y)
                }
            }, {
                key: "multiply",
                value: function(t) {
                    return new e(this.x * t.x,this.y * t.y)
                }
            }, {
                key: "multiplyInt",
                value: function(t) {
                    return new e(this.x * t,this.y * t)
                }
            }, {
                key: "divide",
                value: function(t) {
                    return new e(this.x / t.x,this.y / t.y)
                }
            }, {
                key: "divideInt",
                value: function(t) {
                    return new e(this.x / t,this.y / t)
                }
            }, {
                key: "equalTo",
                value: function(e) {
                    return this.x === e.x && this.y === e.y
                }
            }, {
                key: "copy",
                value: function() {
                    return new e(this.x,this.y)
                }
            }, {
                key: "toString",
                value: function() {
                    return "(".concat(this.x.toFixed(2), ", ").concat(this.y.toFixed(2), ")")
                }
            }], [{
                key: "getPowDistance",
                value: function(e, t) {
                    return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
                }
            }, {
                key: "ZERO",
                get: function() {
                    return new e(0,0)
                }
            }, {
                key: "ONE",
                get: function() {
                    return new e(1,1)
                }
            }]),
            e
        }();
        t.a = o
    },
    167: function(e, t, a) {
        "use strict";
        function i() {}
        i.isHost = function(e) {
            return -1 != (window.location != window.parent.location ? document.referrer : document.location.href).indexOf(e)
        }
        ,
        i.HOSTS = {
            REBUBBLED: "rebubbled",
            MINICLIP: "miniclip"
        }
    },
    168: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return n
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = function e(t) {
            s()(this, e),
            this.rank = t.rank,
            this.name = t.name,
            this.score = t.score,
            this.playerUniqueId = t.playerUniqueId,
            this.photoURL = t.photoURL || null,
            this.optionalData = t.optionalData || {}
        }
    },
    170: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return c
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(10)
          , r = a.n(n)
          , o = a(7)
          , l = a.n(o)
          , h = a(11)
          , _ = a.n(h)
          , c = function(e) {
            function t() {
                var e;
                return s()(this, t),
                (e = r()(this, l()(t).call(this))).playerKeys = {
                    player1: {
                        controller: "keyboard",
                        left: 37,
                        left_txt: "◀",
                        right: 39,
                        right_txt: "▶",
                        shoot: 32,
                        shoot_txt: "SPC"
                    },
                    player2: {
                        controller: "keyboard",
                        left: 65,
                        left_txt: "A",
                        right: 68,
                        right_txt: "D",
                        shoot: 81,
                        shoot_txt: "Q"
                    }
                },
                e
            }
            return _()(t, e),
            t
        }(a(171).a)
    },
    171: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return o
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(9)
          , r = a(0)
          , o = function e() {
            s()(this, e),
            this.playerKeys = {
                player1: {
                    controller: "keyboard",
                    left: 37,
                    left_txt: "◀",
                    right: 39,
                    right_txt: "▶",
                    shoot: 32,
                    shoot_txt: "SPC"
                },
                player2: {
                    controller: "keyboard",
                    left: 65,
                    left_txt: "A",
                    right: 68,
                    right_txt: "D",
                    shoot: 81,
                    shoot_txt: "Q"
                }
            },
            this.lastLevelPlayed = {},
            this.lastLevelPlayed[n.a.MODES.SINGLE] = 0,
            this.lastLevelPlayed[n.a.MODES.TWOP] = 0,
            this.maxLevelUnlocked = {},
            this.maxLevelUnlocked[n.a.MODES.SINGLE] = 0,
            this.maxLevelUnlocked[n.a.MODES.TWOP] = 0,
            this.totalBubblesPopped = 0,
            this.soundOn = !0,
            this.installDate = new Date,
            this.lastNewsID = 0,
            this.noads = !1,
            this.showPickedItemName = r.a.isBS3,
            this.shownGamePopups = [],
            this.tasksCompleted = [],
            this.tasksCollected = [],
            this.tasksStats = {},
            this.taskPinned = null,
            this.taskCompleteDateFirst = null,
            this.taskCompleteDateLast = null,
            this.levelPointsDistributed = [],
            this.loggedClicks = [],
            this.filledAdFreqCount = 0,
            this.sharedClickedFrom = [],
            this.bestScorePerLevel = [],
            this.selectedSkinID = "",
            this.skinsNewViewed = [],
            this.skinsUnlocked = [],
            this.skinsUnlockedUsed = []
        }
    },
    172: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return u
        }
        ));
        var i = a(17)
          , s = a.n(i)
          , n = a(5)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = function(e) {
            function t() {
                var e;
                return r()(this, t),
                (e = l()(this, _()(t).call(this))).playerKeys = {
                    player1: {
                        controller: "keyboard",
                        left: 37,
                        left_txt: "◀",
                        right: 39,
                        right_txt: "▶",
                        up: 38,
                        up_txt: "▲",
                        down: 40,
                        down_txt: "▼",
                        shoot: 32,
                        shoot_txt: "SPC"
                    },
                    player2: {
                        controller: "keyboard",
                        left: 65,
                        left_txt: "A",
                        right: 68,
                        right_txt: "D",
                        up: 87,
                        up_txt: "W",
                        down: 83,
                        down_txt: "S",
                        shoot: 81,
                        shoot_txt: "Q"
                    }
                },
                e.levelEditor = s()({
                    uniqueCounter: 1,
                    allLevels: [],
                    lastLevelEdited: 1,
                    watchedTutorials: []
                }, "lastLevelEdited", null),
                e.playedPackInfo = {},
                e.loadedPacks = [],
                e
            }
            return d()(t, e),
            t
        }(a(171).a)
    },
    173: function(e, t, a) {
        "use strict";
        var i = a(80)
          , s = a.n(i)
          , n = a(5)
          , r = a.n(n)
          , o = a(6)
          , l = a.n(o)
          , h = a(10)
          , _ = a.n(h)
          , c = a(19)
          , d = a.n(c)
          , u = a(7)
          , p = a.n(u)
          , m = a(11)
          , y = a.n(m)
          , g = a(74)
          , S = a(2)
          , E = a(0)
          , f = (a(248),
        a(3))
          , T = (a(250),
        a(31))
          , v = (a(67),
        a(1))
          , b = a(27)
          , k = a(13)
          , P = function(e) {
            function t() {
                return r()(this, t),
                _()(this, p()(t).apply(this, arguments))
            }
            return y()(t, e),
            l()(t, [{
                key: "myInit",
                value: function() {
                    this.modType = v.a.ITEM_MANAGER.MOD_TYPE.FREEZE,
                    this.MOD_TIME = 5,
                    (E.a.isBS2 || E.a.isBS3) && (this.MOD_TIME = 6),
                    this.modTime = this.MOD_TIME;
                    var e = b.a.getPassiveItemValue(v.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_FREEZE);
                    e > 0 && (this.modTime += e,
                    k.a.TaskIncrement(this.gameScene, k.a.TASK_TYPE.USE_UPGRADE, 1, v.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_FREEZE)),
                    S.a.log("ITM_FREEZE", "freeze initiated!");
                    for (var a = 0, i = Object.entries(this.gameScene.ballManager.activeBalls); a < i.length; a++) {
                        var n = s()(i[a], 2);
                        n[0];
                        n[1].forEach((function(e) {
                            t.freezeBall(e)
                        }
                        ))
                    }
                    return f.a._allGameObjects.forEach((function(e) {
                        e.goType != v.a.GO_TYPE.WALL || e._wallInfo.t != v.a.WALL.WALL_TYPE.CAVEIN_BS3 && e._wallInfo.t != v.a.WALL.WALL_TYPE.MOVING || t.freezeCaveinMoving(e)
                    }
                    )),
                    this._formatCountdownTime(this.modTime),
                    this
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    d()(p()(t.prototype), "myUpdate", this).call(this, e, a),
                    this._formatCountdownTime(this.modTime)
                }
            }, {
                key: "modAddExisting",
                value: function() {
                    S.a.log("ITM_FREEZE", "Addi ng more freeze time.."),
                    this.modTime += 4,
                    this._formatCountdownResetAlpha()
                }
            }, {
                key: "modExpired",
                value: function() {
                    S.a.log("ITM_FREEZE", "No more freeze time!!");
                    for (var e = 0, a = Object.entries(this.gameScene.ballManager.activeBalls); e < a.length; e++) {
                        var i = s()(a[e], 2);
                        i[0];
                        i[1].forEach((function(e) {
                            t.unfreezeBall(e)
                        }
                        ))
                    }
                    f.a._allGameObjects.forEach((function(e) {
                        e.goType != v.a.GO_TYPE.WALL || e._wallInfo.t != v.a.WALL.WALL_TYPE.CAVEIN_BS3 && e._wallInfo.t != v.a.WALL.WALL_TYPE.MOVING || t.unfreezeCaveinMoving(e)
                    }
                    ))
                }
            }], [{
                key: "freezeBall",
                value: function(e) {
                    e._currentState == T.a.EVENT_STATE.ACTIVE && (e.mySprite.alpha = .5,
                    e.isStatic = !0)
                }
            }, {
                key: "unfreezeBall",
                value: function(e) {
                    e._currentState == T.a.EVENT_STATE.ACTIVE && (e.mySprite.alpha = 1,
                    e.isStatic = !1)
                }
            }, {
                key: "freezeCaveinMoving",
                value: function(e) {
                    e._currentState == T.a.EVENT_STATE.ACTIVE && (e._frozen = !0)
                }
            }, {
                key: "unfreezeCaveinMoving",
                value: function(e) {
                    e._currentState == T.a.EVENT_STATE.ACTIVE && (e._frozen = !1)
                }
            }]),
            t
        }(g.a);
        t.a = P
    },
    174: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return T
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(16)
          , p = a(51)
          , m = a(23)
          , y = a(0)
          , g = (a(30),
        a(3))
          , S = a(24)
          , E = (a(76),
        a(1))
          , f = a(12)
          , T = function(e) {
            function t(e, a, i, n, r) {
                var o;
                s()(this, t);
                var h = e.gameScene
                  , c = e._wallInfo
                  , d = new u.a(c.x - c.w / 2 + a - i / 2,c.y + 10 * (r - 1) - c.h / 2 + 5)
                  , p = new u.a(i,10)
                  , f = new u.a(d.x - p.x / 2,d.y - p.y / 2)
                  , T = new u.a(d.x + p.x / 2,d.y + p.y / 2);
                o = l()(this, _()(t).call(this, h, m.a.LAYER.FRAGMENTS, m.a.LAYERS_FRAGMENTS, f, T, {
                    vel: new u.a(0,y.a.itemGrav)
                }));
                var v = "walls/breakable.png";
                return e._wallInfo.t == E.a.WALL.WALL_TYPE.SWITCH && (v = "walls/basic.png"),
                o.mySprite = h.add.tileSprite(d.x - i / 2, d.y, i, 10, y.a.spriteKey, v),
                o.mySprite.tilePositionX += a - n,
                o.mySprite.tilePositionY += 10 * (r - 1),
                o.mySprite.angle = S.a(-20, 20),
                o.acc.y = S.a(3.5, 5),
                g.a.mySpriteDepth(g.a.RENDER_DEPTH.UNDER_GAME, o.mySprite),
                o.goType = E.a.GO_TYPE.FRAGMENT,
                o._isLanded = !1,
                o._fadeTime = 2e3,
                o
            }
            return d()(t, e),
            r()(t, [{
                key: "myUpdate",
                value: function(e, t) {
                    this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y,
                    this._isLanded && (this._fadeTime -= t,
                    this.mySprite.alpha = this._fadeTime / 1e3,
                    0 == this.mySprite.alpha && this.myOnDestroy())
                }
            }, {
                key: "collideEdge",
                value: function(e, t, a, i, s, n, r, o) {
                    return e == E.a.PHY.COL_EDGE.BOTTOM && (this.acc.y = 0,
                    this.vel.y = 0,
                    this._isLanded = !0,
                    this.pbActive = !1,
                    !0)
                }
            }], [{
                key: "GetFragments",
                value: function(e) {
                    var a = e._wallInfo
                      , i = 11.5
                      , s = 9.8
                      , n = 4;
                    e._wallInfo.t == E.a.WALL.WALL_TYPE.SWITCH && (i = 18,
                    s = 30.25,
                    n = 2);
                    for (var r = a.w, o = [], l = 1; 10 * l <= a.h; l++)
                        for (var h = 0, _ = 0, c = 1; h < r; c++)
                            if (_ = i,
                            c > 1 && (_ = s),
                            (h += _) > r && (_ -= h - r,
                            h = r),
                            _ > 3) {
                                var d = new t(e,h,_,i,l);
                                o.push(d),
                                c % n == 1 && l % 2 == 1 && f.a.playSound(e.gameScene, f.a.SND.FRAGMENT_SWITCH, {
                                    delay: S.a(0, .2)
                                })
                            }
                    return o
                }
            }]),
            t
        }(p.a)
    },
    175: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return T
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(17)
          , y = a.n(m)
          , g = a(30)
          , S = a(22)
          , E = (a(67),
        a(43),
        a(12))
          , f = a(1)
          , T = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, d()(t).call(this, e, a))).wallType = f.a.WALL.WALL_TYPE.TRAMPOLINE,
                i._steppedOnTrampoline = !1,
                i._steppedOnTrampolineTime = 0,
                t.ANI_LENGTH = t.TOTAL_FRAMES / t.FRAME_RATE,
                i
            }
            return p()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    this.mySprite = new S.a(this.gameScene,this.pos.x,this.pos.y - 2,this.size.x,14,"walls/trampoline/trampoline_3.png",{
                        top: 9,
                        bottom: 2,
                        left: 3.5,
                        right: 3.5
                    }),
                    this.mySprite.setDepthNinePatch(this.myRenderDepth),
                    this.mySprite.ninePatch.setFrame("walls/trampoline/trampoline_1.png")
                }
            }, {
                key: "trampolineBallBounce",
                value: function(e) {
                    this.animateTrampoline()
                }
            }, {
                key: "trampolinePlayerBounce",
                value: function(e) {
                    this.animateTrampoline()
                }
            }, {
                key: "animateTrampoline",
                value: function() {
                    E.a.playSound(this.gameScene, E.a.SND.TRAMPOLINE),
                    this._steppedOnTrampoline || (this._steppedOnTrampoline = !0,
                    this._steppedOnTrampolineTime = this.gameScene.gameTime)
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    if (_()(d()(t.prototype), "myUpdate", this).call(this, e, a),
                    !this.gameScene.isGamePaused && this._steppedOnTrampoline) {
                        var i = 1 + (e - this._steppedOnTrampolineTime) / 1e3 / t.ANI_LENGTH * t.FRAME_RATE / t.TOTAL_FRAMES;
                        (i = Math.floor(i)) > t.TOTAL_FRAMES && (i = 1,
                        this._steppedOnTrampoline = !1),
                        this.mySprite.ninePatch.setFrame("walls/trampoline/trampoline_" + i + ".png")
                    }
                }
            }]),
            t
        }(g.a);
        y()(T, "SPEED_UP", 1.3),
        y()(T, "FRAME_RATE", 60),
        y()(T, "TOTAL_FRAMES", 12),
        y()(T, "ANI_LENGTH", 0)
    },
    176: function(e, t, a) {
        "use strict";
        a(69);
        var i = a(3)
          , s = a(31)
          , n = a(39)
          , r = a(12)
          , o = a(0)
          , l = a(8)
          , h = a(22)
          , _ = a(26)
          , c = a(21)
          , d = a(56)
          , u = a(2)
          , p = a(38)
          , m = (a(4),
        a(9),
        a(1));
        a(77),
        a(15);
        t.a = function(e) {
            u.a.log("Final level start.");
            var t = "BT1_MainMenu";
            o.a.isBS2 ? t = "BS2_MainMenu" : o.a.isBS3 && (t = "BS3_MainMenu"),
            e.ballManager._allBubblesArePopped = function() {
                return !1
            }
            ,
            e.startLevelSound = r.a.playSound(e, r.a.SND.FINAL_LEVEL);
            var a = new i.a(e);
            e.myEventManager.registerForEvent(a, s.a.EVENT_TYPE.ALL_POPPED),
            e.myEventManager.registerForEvent(a, s.a.EVENT_TYPE.GAME_LOADED),
            a.onReceiveMyEvent = function(e, t) {
                e == s.a.EVENT_TYPE.GAME_LOADED ? (this.gameScene.startLevelMessage.myText.text = n.a.MESSAGES.FINAL_LEVEL,
                o.a.isBS3 && (this.gameScene.startLevelMessage.myText.text = n.a.MESSAGES.FINAL_LEVEL.toUpperCase()),
                this.gameScene.startLevelMessage.timer = 2.5) : e == s.a.EVENT_TYPE.ALL_POPPED && (this.gameScene.gamePauseButton.myDestroy(),
                this.gameScene.timebar.timebarStopped = !0,
                i.a._allGameObjects.forEach((function(e) {
                    e.goType != m.a.GO_TYPE.WALL || e.wallType != m.a.WALL.WALL_TYPE.MOVING && e.wallType != m.a.WALL.WALL_TYPE.CAVEIN_BS3 || (e._doSlide = !1)
                }
                )),
                this.theEnd())
            }
            ,
            a.theEnd = function() {
                e.saveLeveUnlocklProgress(),
                this.myRenderDepth = i.a.RENDER_DEPTH.GAME,
                this.myMessage1 = "Congratulations!!!",
                this.myMessage2 = "You are the  BUBBLE MASTER",
                this.myMessage3 = "Thank you for playing Bubble Trouble :)",
                this.myMessage4 = "MADE BY: KRESIMIR CVITANOVIC",
                this.myMessage5 = "IDEA FROM: CAPCOMs PANG SERIES",
                d.a.crntLives[1] > 0 && d.a.crntLives[2] > 0 && (this.myMessage2 = "You are both the  BUBBLE MASTERS"),
                o.a.isBS2 && (this.myMessage3 = "Thank you for playing Bubble Trouble 2 :)"),
                o.a.isBS3 && (this.myMessage3 = "Thank you for playing Bubble Trouble 3 :)"),
                o.a.isBS3 && (this.myMessage1 = this.myMessage1.toUpperCase(),
                this.myMessage2 = this.myMessage2.toUpperCase(),
                this.myMessage3 = this.myMessage3.toUpperCase(),
                this.myMessage4 = this.myMessage4.toUpperCase(),
                this.myMessage5 = this.myMessage5.toUpperCase());
                var a = o.a.gameAreaMin.x + (o.a.gameAreaMax.x - o.a.gameAreaMin.x) / 2
                  , s = o.a.gameAreaMin.y + (o.a.gameAreaMax.y - o.a.gameAreaMin.y) / 2;
                this.myText1 = this.gameScene.add.bitmapText(a, s - 140, o.a.fontNames.LVL_MSG, this.myMessage1, 42),
                this.myText1.setOrigin(.5, .5),
                this.myText2 = this.gameScene.add.bitmapText(a, s - 75, o.a.fontNames.LVL_MSG, this.myMessage2, 44),
                this.myText2.setOrigin(.5, .5),
                this.myText3 = this.gameScene.add.bitmapText(a, s - 25, o.a.fontNames.LVL_MSG, this.myMessage3, 27),
                this.myText3.setOrigin(.5, .5),
                this.myText3.alpha = .9,
                this.myText4 = this.gameScene.add.bitmapText(a, 310, o.a.fontNames.LVL_MSG, this.myMessage4, 27),
                this.myText4.setOrigin(.5, .5),
                this.myText4.alpha = .9,
                this.myText5 = this.gameScene.add.bitmapText(a, 340, o.a.fontNames.LVL_MSG, this.myMessage5, 27),
                this.myText5.setOrigin(.5, .5),
                this.myText5.alpha = .9,
                this.background = new l.a(this.gameScene,a,s - 5,o.a.spriteKey,"ui/black.png"),
                this.background.alpha = .5,
                this.background.setDisplaySize(o.a.gameWidth, o.a.gameHeight),
                this.background.setOrigin(.5, .5),
                i.a.mySpriteDepth(i.a.RENDER_DEPTH.GAME, this.background),
                i.a.mySpriteDepth(this.myRenderDepth, this.myText1),
                i.a.mySpriteDepth(this.myRenderDepth, this.myText2),
                i.a.mySpriteDepth(this.myRenderDepth, this.myText3),
                i.a.mySpriteDepth(this.myRenderDepth, this.myText4),
                i.a.mySpriteDepth(this.myRenderDepth, this.myText5);
                var n = i.a.RENDER_DEPTH.PAUSE_MENU;
                o.a.isBT && new h.a(this.gameScene,o.a.gameWidth / 2,250,200,77,"ui/main_menu_back.png",{
                    top: 30,
                    bottom: 30,
                    left: 30,
                    right: 30
                }).setDepthNinePatch(n);
                var u = 6;
                o.a.isBT || (u = 0),
                new c.a(this.gameScene,o.a.gameWidth / 2,250,170,47,{
                    text: _.a.BT1.GAME_COMPLETED,
                    size: 32,
                    fixY: u
                },this.gameScene.myTransition.transitionToggle.bind(this.gameScene.myTransition, !1, t),p.a.changeActiveScene.bind(this, e)).setDepthMyUIButton(n),
                p.a.changeActiveScene(e.game.scene.getScene("BootScene")),
                r.a.playSound(this.gameScene, r.a.SND.FINAL_LEVEL_COMPLETED),
                e._tasksOnLevelCompleted(),
                e.saveBestLevelScore()
            }
        }
    },
    177: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return u
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(21)
          , l = a(22)
          , h = a(4)
          , _ = a(0)
          , c = a(12)
          , d = a(3)
          , u = function() {
            function e(t, a, i) {
                if (s()(this, e),
                this.myScene = t,
                _.a.isBT) {
                    this.btn_background = new l.a(t,a,i,100,100,"ui/main_menu_back.png",{
                        top: 30,
                        bottom: 30,
                        left: 30,
                        right: 30
                    });
                    var n = "ui/volume_on.png";
                    h.a.gameSettings.soundOn || (n = "ui/volume_off.png"),
                    this.soundButton = new o.a(t,a,i,70,70,{
                        icon: n
                    },this.btn_changeSound.bind(this),null,null,!1,!1)
                } else if (_.a.isBS2 || _.a.isBS3) {
                    this.snd_title = t.add.bitmapText(a + 35, i, _.a.fontNames.MENU, "SOUND", 35),
                    this.snd_title.setOrigin(0, .5),
                    this.snd_title.alpha = 1;
                    var r = "ui/btn/sound_on.png";
                    h.a.gameSettings.soundOn || (r = "ui/btn/sound_off.png"),
                    this.soundButton = new o.a(t,a,i,60,50,{
                        icon: r,
                        size: 36
                    },this.btn_changeSound.bind(this),null,null,!1,!1)
                }
            }
            return r()(e, [{
                key: "btn_changeSound",
                value: function() {
                    if (h.a.gameSettings.soundOn = !h.a.gameSettings.soundOn,
                    h.a.saveUserSettings(),
                    _.a.isBT) {
                        var e = "ui/volume_on.png";
                        h.a.gameSettings.soundOn || (e = "ui/volume_off.png"),
                        this.soundButton.changeTextOrIcon({
                            icon: e
                        })
                    } else if (_.a.isBS2 || _.a.isBS3) {
                        var t = "ui/btn/sound_on.png";
                        h.a.gameSettings.soundOn || (t = "ui/btn/sound_off.png"),
                        this.soundButton.changeTextOrIcon({
                            icon: t
                        }),
                        c.a.playSound(this.myScene, c.a.SND.UI_SOUND_ONOFF)
                    }
                }
            }, {
                key: "changeDepth",
                value: function(e) {
                    this.btn_background && this.btn_background.setDepthNinePatch(e),
                    this.snd_title && d.a.mySpriteDepth(e, this.snd_title),
                    this.soundButton && this.soundButton.setDepthMyUIButton(e)
                }
            }, {
                key: "setVisibleMySndBtn",
                value: function(e) {
                    this.btn_background && this.btn_background.setVisibleNinePatch(e),
                    this.snd_title && (this.snd_title.visible = e),
                    this.soundButton && this.soundButton.setVisibleMyUIButton(e)
                }
            }]),
            e
        }()
    },
    178: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(8)
          , r = (a(167),
        a(18))
          , o = a(32)
          , l = a(15)
          , h = a(2)
          , _ = a(0);
        t.a = function e(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 390;
            s()(this, e),
            null == a && (a = _.a.gameWidth - l.a.notchOffset - 62),
            r.a.isPoki && !h.a.debugLog || (this.app_logo_bsa = new n.a(t,a,i,"app_logo_bsa",null,.5),
            this.download_apple = new n.a(t,a,i + 40,"download_apple",null,.65),
            this.download_google = new n.a(t,a,i + 75,"download_google",null,.65),
            this.download_apple.setInteractive({
                useHandCursor: !0
            }),
            this.download_apple.on("pointerup", (function() {
                window.open(o.a.BSA_APPLE, r.a.browserWindow)
            }
            )),
            this.download_google.setInteractive({
                useHandCursor: !0
            }),
            this.download_google.on("pointerup", (function() {
                window.open(o.a.BSA_GOOGLE, r.a.browserWindow)
            }
            )),
            this.app_logo_bsa.setInteractive({
                useHandCursor: !0
            }),
            this.app_logo_bsa.on("pointerup", (function() {
                r.a.isCordova && (l.a.isIOS ? window.open(o.a.BSA_APPLE, r.a.browserWindow) : l.a.isAndroid && window.open(o.a.BSA_GOOGLE, r.a.browserWindow))
            }
            )),
            r.a.isCordova && (this.app_logo_bsa.scale = .7,
            this.app_logo_bsa.y += 28,
            l.a.isIOS ? (this.download_google.visible = !1,
            this.download_apple.y = this.download_google.y) : l.a.isAndroid && (this.download_apple.visible = !1)),
            r.a.isPoki && (this.download_apple.alpha = .5,
            this.download_google.visible = !1,
            this.app_logo_bsa.alpha = .5))
        }
    },
    179: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return c
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(12)
          , h = (a(167),
        a(32))
          , _ = a(18)
          , c = function() {
            function e(t) {
                return s()(this, e),
                this.myScene = t,
                this.link = h.a.REBUBBLED_HOMEPAGE,
                this.btnConfig = {
                    text: "rebubbled.com",
                    size: 23,
                    fixY: 5
                },
                (o.a.isBS2 || o.a.isBS3) && (this.btnConfig.fixY = 0),
                this
            }
            return r()(e, [{
                key: "openLink",
                value: function() {
                    l.a.playSound(this.myScene, l.a.SND.UI_BUTTON),
                    window.open(this.link, _.a.browserWindow)
                }
            }]),
            e
        }()
    },
    18: function(e, t, a) {
        "use strict";
        a(2);
        function i() {}
        i.TARGETS = {
            FACEBOOK: "fb",
            POKI: "poki",
            CORDOVA: "cordova"
        },
        i.myTarget = null,
        i.initialize = function(e) {
            i.myTarget = e,
            i.myTarget == i.TARGETS.FACEBOOK && (i.isFacebook = !0),
            i.myTarget == i.TARGETS.CORDOVA && (i.isCordova = !0,
            i.browserWindow = "_system"),
            i.myTarget == i.TARGETS.POKI && (i.isPoki = !0)
        }
        ,
        i.isFacebook = !1,
        i.isCordova = !1,
        i.isPoki = !1,
        i.browserWindow = "_blank",
        t.a = i
    },
    180: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return r
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(0)
          , r = function e(t, a, i, r, o) {
            s()(this, e);
            var l = t.add.image(a, i, n.a.spriteKey, "bubbles/bubble_red.png");
            l.scale = 1.1 * r,
            l.angle = o;
            var h = t.add.bitmapText(a, i, n.a.fontNames.MENU, "BUBBLE", 50 * r);
            h.setOrigin(.5, .8),
            h.angle = o,
            h.letterSpacing = -1;
            var _ = t.add.bitmapText(a, i, n.a.fontNames.MENU, "TROUBLE", 50 * r);
            _.setOrigin(.5, 0),
            _.angle = o,
            _.letterSpacing = -1
        }
    },
    181: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = (a(8),
        a(167),
        a(18))
          , r = a(32)
          , o = (a(15),
        a(2))
          , l = a(0)
          , h = a(21)
          , _ = a(6)
          , c = a.n(_)
          , d = a(17)
          , u = a.n(d)
          , p = a(3)
          , m = a(38)
          , y = function() {
            function e(t, a) {
                s()(this, e),
                this.scene = t,
                this.callback = a,
                this.FRAME_RECT = new Phaser.Geom.Rectangle(20,20,l.a.gameWidth - 40,l.a.gameHeight - 40),
                this.offsetX = 30,
                this.offsetY = 300,
                this._oldButtonGroup = m.a._activeScene,
                this._init()
            }
            return c()(e, [{
                key: "_init",
                value: function() {
                    this.bckBlack = this._disableWholeBackground(),
                    this.bckColor = this._backgroundWindowColor();
                    var e = "Bubble Trouble";
                    l.a.isBS2 ? e = "Bubble Struggle 2" : l.a.isBS3 && (e = "Bubble Trouble 3");
                    var t = "You are leaving " + e + ". This is an external link.";
                    l.a.isBS3 && (t = t.toUpperCase()),
                    this.infoMsg = this.scene.add.bitmapText(.5 * l.a.gameWidth, .45 * l.a.gameHeight, l.a.fontNames.MENU, t, 25),
                    this.infoMsg.x -= this.infoMsg.width / 2,
                    this.infoMsg.y -= this.infoMsg.height / 2;
                    var a = 6;
                    (l.a.isBS2 || l.a.isBS3) && (a = 0),
                    this.proceedBtn = new h.a(this.scene,.5 * l.a.gameWidth,.55 * l.a.gameHeight,140,48,{
                        text: "PROCEED",
                        size: 36,
                        fixY: a
                    },this._pressedButton.bind(this, !0),null,null,null,!0,"outsideLink"),
                    this.cancelBtn = new h.a(this.scene,l.a.gameWidth - this.offsetX,l.a.gameHeight - this.offsetY,40,40,{
                        text: "X",
                        size: 24,
                        fixY: a
                    },this._pressedButton.bind(this, !1),null,null,null,!1,"outsideLink"),
                    p.a.mySpriteDepth(p.a.RENDER_DEPTH.GAME_POPUP, this.bckBlack),
                    p.a.mySpriteDepth(p.a.RENDER_DEPTH.GAME_POPUP, this.bckColor),
                    p.a.mySpriteDepth(p.a.RENDER_DEPTH.GAME_POPUP, this.infoMsg),
                    this.proceedBtn.setDepthMyUIButton(p.a.RENDER_DEPTH.GAME_POPUP),
                    this.cancelBtn.setDepthMyUIButton(p.a.RENDER_DEPTH.GAME_POPUP)
                }
            }, {
                key: "_disableWholeBackground",
                value: function() {
                    var e = new Phaser.Geom.Rectangle(-1e3,-1e3,3e3,3e3)
                      , t = this.scene.add.graphics();
                    return t.fillStyle(0, .85),
                    t.fillRectShape(e),
                    t.setInteractive({
                        hitArea: e,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    t
                }
            }, {
                key: "_backgroundWindowColor",
                value: function() {
                    var e = new Phaser.Geom.Rectangle(this.offsetX,this.offsetY,l.a.gameWidth - 2 * this.offsetX,l.a.gameHeight - 2 * this.offsetY)
                      , t = this.scene.add.graphics();
                    return t.fillStyle(6513507, 1),
                    t.fillRectShape(e),
                    t
                }
            }, {
                key: "_pressedButton",
                value: function(e) {
                    this.bckBlack.destroy(),
                    this.bckColor.destroy(),
                    this.infoMsg.destroy(),
                    this.cancelBtn.destroyMyUIButton(),
                    this.proceedBtn.destroyMyUIButton(),
                    m.a._activeScene = this._oldButtonGroup,
                    this.callback(e),
                    e && n.a.isPoki && PokiSDK && !o.a.debugLog && PokiSDK.customEvent("game", "segment", {
                        segment: "discord-button-clicked"
                    })
                }
            }]),
            e
        }();
        u()(y, "COL_WHITE", 16777215),
        u()(y, "COL_YELLOW", 14867459),
        u()(y, "COL_GREY", 9474192),
        u()(y, "COL_BLACK", 0),
        u()(y, "COL_RED", 16711680),
        u()(y, "COL_DARKEN", .4);
        var g = a(29)
          , S = a(20);
        t.a = function e(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (s()(this, e),
            !n.a.isFacebook && S.a.isLazyLoaded) {
                var o = 146
                  , _ = 56
                  , c = a || .68 * l.a.gameWidth
                  , d = i || .9 * l.a.gameHeight
                  , u = function() {
                    new y(t,(function(e) {
                        e && (g.a.LogClick(g.a.CLICK_TYPE.DISCORD),
                        window.open(r.a.DISCORD_INTRODUCEYOURSELF_CHANNEL, n.a.browserWindow))
                    }
                    ))
                }
                  , p = new h.a(t,c,d,o,_,{
                    icon: "ui/my_discord.png",
                    iconSpriteKey: l.a.lazySpriteKey
                },u);
                return p
            }
        }
    },
    2: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(44)
          , h = a.n(l)
          , _ = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "always",
                value: function(e) {
                    for (var t, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                        i[s - 1] = arguments[s];
                    (t = console).log.apply(t, [this._format(e)].concat(i))
                }
            }, {
                key: "log",
                value: function(t) {
                    for (var a, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
                        s[n - 1] = arguments[n];
                    e.debugLog && (a = console).log.apply(a, [this._format(t)].concat(s))
                }
            }, {
                key: "warn",
                value: function(t) {
                    for (var a, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
                        s[n - 1] = arguments[n];
                    e.debugLog && (a = console).warn.apply(a, [this._format(t)].concat(s))
                }
            }, {
                key: "error",
                value: function(t) {
                    if (e.debugLog) {
                        for (var a, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
                            s[n - 1] = arguments[n];
                        (a = console).error.apply(a, [this._format(t)].concat(s)),
                        e.Beep()
                    }
                }
            }, {
                key: "todo",
                value: function(t) {
                    e.debugLog && (console.error("%c[TODO]" + t, "color: blue; font-size: 12px; background-color: yellow;"),
                    e.Beep())
                }
            }, {
                key: "_format",
                value: function(e) {
                    return "[" + e + "]"
                }
            }, {
                key: "printDebuggerOptions",
                value: function() {
                    var t = "";
                    e.logAnalytics && (t += "\nDEBUGGER: Loggin Analytics ON."),
                    e.debugPhy && (t += "\nDEBUGGER: Physics On."),
                    e.debugPhyFrame && (t += "\nDEBUGGER: Physics Frame is On.",
                    o.a.phyStepMax = 3),
                    e.forceRSOff && (t += "\nDEBUGGER: Remote Settings always off."),
                    e.forceNewsOn && (t += "\nDEBUGGER: NEWS debugger is on."),
                    e.noAdBreak && (t += "\nDEBUGGER: No ad break, ever."),
                    e.noAdIgnore && (t += "\nDEBUGGER: Ignoring NO-AD purchase."),
                    e.useAdMobTestAds && (t += "\nDEBUGGER: Admob test adas are ON."),
                    e.deselectItem && (t += "\nDEBUGGER: Deselecting item by defaut."),
                    e.addMoreInfo && (t += "\nDEBUGGER: Adding more information to log."),
                    e.packCanBeUnchecked && (t += "\nDEBUGGER: Pack can add unchecekd leveles."),
                    e.alwaysShowAllFillerAds && (t += "\nDEBUGGER: Always showing filler ads.."),
                    e.neverShowAllFillerAds && (t += "\nDEBUGGER: Never show filler ads.."),
                    e.alwaysShowControls && (t += "\nDEBUGGER: Showing game controls. Always."),
                    e.alwaysShowEditorTutorials && (t += "\nDEBUGGER: Showing tutorials. Always."),
                    e.editorExtraCommands && (t += "\nAllow extra command in the editor (import from flash, delete all, export to clipboard..)"),
                    e.loadLazyImmediate && (t += "\nLoading LazySprite sheet immediately (like Cordova)"),
                    e.getMobileScreenshots && (t += "\nDEBUGGER: Using fake input Keyboard (looks like TOUCH)"),
                    e.resetExperience && (t += "\nDEBUGGER: Using SET EXPERIENCE"),
                    0 != e.rushToLevel && (t += "\nDEBUGGER: SKIPPING XP LEVELS!"),
                    e.taskLogin && (t += "\nDEBUGGER: Using repeat login debug"),
                    !1 !== e.overrideLives && (t += "\nDEBUGGER: Using override LIVES" + e.overrideLives),
                    e.upgradeItemTime && (t += "\nDEBUGGER: Using upgradeItemTime NOW"),
                    e.resetSkins && (t += "\nDEBUGGER: RESETTING ALL SKIN INFORMATION"),
                    "" != t && (console.error("%cDEBUGGER IS ON", "color: yellow; font-size: 35px; background-color: red;"),
                    console.error(t))
                }
            }]),
            e
        }();
        _.debugLog = h.a.GET_ENV_PROD_OR_DEV() == h.a.ENV_DEV,
        _.logAnalytics = !1,
        _.debugPhy = !1,
        _.debugPhyFrame = !1,
        _.forceRSOff = !1,
        _.forceNewsOn = !1,
        _.forceNewsOnJSON = '{"breakBetweenAds":120,"noAdsBeforeLevel":2,"fillerAdFrequency":11,"news":{"id":3,"action":"DOWNLOAD","image":"https://www.kresogames.com/game_supervisor/serve_files/bt1_mobile_for_bsa.jpg","url_ios":"https://itunes.apple.com/app/id947676130","url_android":"https://play.google.com/store/apps/details?id=com.rebubbled.bubblestruggle","url_web":"https://bubble-adventures.com"}}',
        _.noAdBreak = !1,
        _.noAdIgnore = !1,
        _.useAdMobTestAds = !1,
        _.alwaysShowAllFillerAds = !1,
        _.neverShowAllFillerAds = !1,
        _.packCanBeUnchecked = !1,
        _.deselectItem = !1,
        _.addMoreInfo = !1,
        _.alwaysShowControls = !1,
        _.alwaysShowEditorTutorials = !1,
        _.editorExtraCommands = !1,
        _.loadLazyImmediate = !1,
        _.resetExperience = !1,
        _.rushToLevel = 0,
        _.taskLogin = !1,
        _.overrideLives = !1,
        _.upgradeItemTime = !1,
        _.resetSkins = !1,
        _.getMobileScreenshots = !1,
        _.Beep = function() {
            _.debugLog && new Audio("").play()
        }
        ,
        t.a = _
    },
    20: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return T
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(17)
          , p = a.n(u)
          , m = a(0)
          , y = (a(18),
        a(2))
          , g = a(13)
          , S = a(25)
          , E = a(27)
          , f = a(29)
          , T = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "LazyloadScene"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "preload",
                value: function() {
                    t.sceneLink = this,
                    t.LazyLoad(this),
                    f.a.LoadSDK(this),
                    y.a.log("LazyLoad", "Preloading.."),
                    this.load.on("loaderror", (function(e) {
                        t._errorWhileLoading = !0,
                        y.a.error("loaderror loading", e)
                    }
                    ))
                }
            }, {
                key: "init",
                value: function(e) {
                    y.a.log("LazyLoad", "LazyLoadScene init with data:", e),
                    this.continueToTitleSceneCallback = e.continueToTitleScene
                }
            }, {
                key: "create",
                value: function() {
                    var e = this;
                    t._errorWhileLoading || (t._textureManager = this.textures,
                    m.a.lazyAnimations.forEach((function(t) {
                        e.anims.create(t)
                    }
                    )),
                    S.a.init(this),
                    E.a.init(),
                    g.a.init(this),
                    this.events.emit(t.EVT_LOADED, "param"),
                    y.a.log("Lazyload", "Scene created & event sent"),
                    null != this.continueToTitleSceneCallback ? (y.a.log("LazyLoad", "Loaded Lazyload received 'continueToTitleSceneCallback'... loading TitleScene now..."),
                    this.continueToTitleSceneCallback()) : y.a.log("LazyLoad", "Loaded Lazyload while TitleScene was active..."))
                }
            }], [{
                key: "LazyLoad",
                value: function(e) {
                    y.a.log("LazyLoad", "Calling loadAfterGameStarts(scene)", e),
                    m.a.loaderAfterGameStarts(e)
                }
            }, {
                key: "isLazyLoaded",
                get: function() {
                    if (!t._errorWhileLoading)
                        return null != t._textureManager && !!t._textureManager.exists(m.a.lazySpriteKey)
                }
            }]),
            t
        }(Phaser.Scene);
        p()(T, "sceneLink", null),
        p()(T, "EVT_LOADED", "lazyLoaded"),
        p()(T, "pinnedTaskContainer", null),
        p()(T, "pinnedTaskTween", null),
        p()(T, "_errorWhileLoading", !1),
        p()(T, "_textureManager", null)
    },
    21: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(22)
          , h = a(3)
          , _ = a(12)
          , c = a(8)
          , d = a(38)
          , u = (a(2),
        function() {
            function e(t, a, i, n, r, h, _, c, u) {
                var p = arguments.length > 9 && void 0 !== arguments[9] && arguments[9]
                  , m = arguments.length > 10 && void 0 !== arguments[10] && arguments[10]
                  , y = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null
                  , g = arguments.length > 12 && void 0 !== arguments[12] && arguments[12];
                s()(this, e),
                this.myScene = t,
                this.gameInfo = {
                    padding: 0,
                    paddingOutline: 0
                },
                o.a.isBT ? (this.gameInfo.padding = 6,
                this.gameInfo.paddingOutline = 12) : o.a.isBS2 ? (this.gameInfo.padding = 20,
                this.gameInfo.paddingOutline = 12) : o.a.isBS3 && (this.gameInfo.padding = 20,
                this.gameInfo.paddingOutline = 20),
                this.buttonIsActive = !0,
                this.mid_x = a,
                this.mid_y = i,
                this.w = n,
                this.h = r,
                this.isBitmapText = !0,
                this.useOnlyOnce = p,
                this.newOption = g,
                this.newButtonSprite = null,
                this.isVisible = !0,
                this.buttonID = "",
                this.backgroundNinePatch = new l.a(t,a,i,n,r,"ui/button_back.png",{
                    top: this.gameInfo.padding * o.a.spriteScale,
                    bottom: this.gameInfo.padding * o.a.spriteScale,
                    left: this.gameInfo.padding * o.a.spriteScale,
                    right: this.gameInfo.padding * o.a.spriteScale
                }),
                this.btnGroup = y || t.scene.key,
                this.focused = m,
                this.focusedNinePatch = new l.a(t,a,i,n,r,"ui/button_focused.psd",{
                    top: this.gameInfo.paddingOutline / o.a.spriteScale,
                    bottom: this.gameInfo.paddingOutline / o.a.spriteScale,
                    left: this.gameInfo.paddingOutline / o.a.spriteScale,
                    right: this.gameInfo.paddingOutline / o.a.spriteScale
                });
                t.tweens.add({
                    targets: this.focusedNinePatch.ninePatch,
                    alpha: {
                        from: .2,
                        to: .8
                    },
                    ease: "Linear",
                    duration: 200,
                    repeat: -1,
                    yoyo: !0
                });
                this._drawButton(h),
                this.callbackClick = _,
                this.callbackHover = c,
                this.callbackRest = u,
                this.makeSound = !0,
                this.myInit(),
                d.a._registerSceneButton(this)
            }
            return r()(e, [{
                key: "myInit",
                value: function() {
                    var e = this;
                    this.backgroundNinePatch.ninePatch.setInteractive({
                        useHandCursor: !0
                    }).on("pointerover", (function() {
                        return e.mouseOver()
                    }
                    )).on("pointerout", (function() {
                        return e.mouseOut()
                    }
                    )).on("pointerup", (function() {
                        return e.mouseClick()
                    }
                    ))
                }
            }, {
                key: "mouseClick",
                value: function() {
                    this.buttonIsActive && (d.a.selectButton(this),
                    d.a._triggerSelectedButton())
                }
            }, {
                key: "mouseOver",
                value: function() {
                    this.buttonIsActive && d.a.selectButton(this)
                }
            }, {
                key: "mouseOut",
                value: function() {
                    this.buttonIsActive && this.actionHoverOff()
                }
            }, {
                key: "actionClick",
                value: function() {
                    this.buttonIsActive && this.isVisible && (this.callbackClick(),
                    this.useOnlyOnce && (this.buttonIsActive = !1),
                    this.makeSound && _.a.playSound(this.myScene, _.a.SND.UI_BUTTON))
                }
            }, {
                key: "actionHoverOn",
                value: function() {
                    this.buttonIsActive && this.isVisible && null != this.callbackHover && this.callbackHover()
                }
            }, {
                key: "actionHoverOff",
                value: function() {
                    this.buttonIsActive && this.isVisible && null != this.callbackRest && this.callbackRest()
                }
            }, {
                key: "setVisibleMyUIButton",
                value: function(e) {
                    this.backgroundNinePatch.setVisibleNinePatch(e),
                    null != this.myText && this.myText.setVisible(e),
                    null != this.myIcon && this.myIcon.setVisible(e),
                    this.focusedNinePatch.setVisibleNinePatch(e),
                    this.isVisible = e,
                    e && this._drawButton(),
                    this.focused && !e && (this.focused = !1)
                }
            }, {
                key: "setDepthMyUIButton",
                value: function(e) {
                    this.backgroundNinePatch.setDepthNinePatch(e),
                    null != this.myText && h.a.mySpriteDepth(e, this.myText),
                    null != this.myIcon && h.a.mySpriteDepth(e, this.myIcon),
                    this.focusedNinePatch.setDepthNinePatch(e)
                }
            }, {
                key: "changeTextOrIcon",
                value: function(e) {
                    if (null != this.myText && null != e.text && (this.isBitmapText && null == e.bitmapText || !this.isBitmapText && null != e.bitmapText))
                        return this.myText.text = e.text,
                        this.myText.y = this.mid_y + (e.fixY || 0),
                        void (this.myText.fontSize = e.size || this.myText.fontSize);
                    null == this.myIcon || null == e.icon ? (null != this.myText && (this.myText.destroy(),
                    this.myText = null),
                    null != this.myIcon && (this.myIcon.destroy(),
                    this.myIcon = null),
                    this._drawButton(e)) : this.myIcon.setTexture(e.iconSpriteKey || o.a.spriteKey, e.icon)
                }
            }, {
                key: "_drawButton",
                value: function(e) {
                    null != e && (null != e.text && (this.isBitmapText = e.bitmapText || !0,
                    null == e.bitmapText ? this.myText = this.myScene.add.bitmapText(this.mid_x, this.mid_y, o.a.fontNames.MENU, e.text, e.size) : this.myText = this.myScene.add.text(this.mid_x, this.mid_y, e.text).setFont("Arial, Verdana").setFontSize(e.size).setColor("#dcdb2f"),
                    this.myText.setOrigin(.5, .5),
                    this.myText.y += e.fixY || 0,
                    this.buttonID = e.text),
                    null != e.icon && (this.myIcon = new c.a(this.myScene,this.mid_x,this.mid_y,e.iconSpriteKey || o.a.spriteKey,e.icon),
                    this.buttonID = e.icon)),
                    this.focused ? this.focusedNinePatch.setVisibleNinePatch(!0) : this.focusedNinePatch.setVisibleNinePatch(!1),
                    this.newOption && (null != this.newButtonSprite && this.newButtonSprite.destroy(),
                    this.newButtonSprite = new c.a(this.myScene,this.mid_x - this.w / 2,this.mid_y,o.a.spriteKey,"ui/button_new.psd"),
                    this.newButtonSprite.scale = this.h / this.newButtonSprite.height,
                    this.newButtonSprite.setOrigin(0, .5))
                }
            }, {
                key: "destroyMyUIButton",
                value: function() {
                    null != this.myText && this.myText.destroy(),
                    null != this.myIcon && this.myIcon.destroy(),
                    this.backgroundNinePatch.destroy(),
                    this.focusedNinePatch.destroy(),
                    this.newButtonSprite && this.newButtonSprite.destroy(),
                    d.a._unregisterSceneButton(this)
                }
            }, {
                key: "addToContainer",
                value: function(e) {
                    e.add(this.backgroundNinePatch.ninePatch),
                    e.add(this.focusedNinePatch.ninePatch),
                    null != this.myText && e.add(this.myText),
                    null != this.myIcon && e.add(this.myIcon),
                    this.newButtonSprite && e.add(this.newButtonSprite)
                }
            }]),
            e
        }());
        t.a = u
    },
    22: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(3)
          , h = function() {
            function e(t, a, i, n, r, l, h) {
                s()(this, e),
                this.ninePatch = t.add.ninePatch(a, i, n, r, o.a.spriteKey, l, {
                    top: h.top * o.a.spriteScale,
                    bottom: h.bottom * o.a.spriteScale,
                    left: h.left * o.a.spriteScale,
                    right: h.right * o.a.spriteScale
                })
            }
            return r()(e, [{
                key: "setVisibleNinePatch",
                value: function(e) {
                    this.ninePatch.visible = e
                }
            }, {
                key: "setDepthNinePatch",
                value: function(e) {
                    l.a.mySpriteDepth(e, this.ninePatch)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.ninePatch.destroy()
                }
            }, {
                key: "animate",
                value: function(e) {}
            }]),
            e
        }();
        t.a = h
    },
    23: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = a(0)
          , _ = a(1)
          , c = (a(2),
        a(76),
        a(52))
          , d = function() {
            function e(t) {
                s()(this, e),
                this.tStep = e.TIMESTEP,
                this.tStepMS = 500 * e.TIMESTEP,
                this.debugOn = !1,
                this.bodies = {},
                this._simulationBodies = [],
                this.uidCount = 0,
                this.gameScene = t,
                this._pastFrameTime = 0,
                this._processedTime = 0,
                this._accumulatedTime = 0,
                this._waitingLayerChange = {},
                this._timeScale = 1,
                this._tempSimulationCollisionResult = null,
                this._tickNumber = 0
            }
            return r()(e, [{
                key: "myInit",
                value: function(t) {
                    for (var a in e.LAYER)
                        e.LAYER[a] != e.LAYER.SIMULATION && (this.bodies[e.LAYER[a]] = []);
                    return this.debugOn = t,
                    this
                }
            }, {
                key: "addBody",
                value: function(t) {
                    null !== this.bodies && void 0 !== this.bodies || console.error("PhyEngine.addBody(). Engine probably not created."),
                    -1 !== t.uid && console.error("PhyBody already has UID set. uid:" + t.uid),
                    this.uidCount++,
                    t.uid = this.uidCount,
                    this.bodies.hasOwnProperty(t.myLayer) || t.myLayer == e.LAYER.SIMULATION || console.error("Layer not yet defined for PhyEngine" + t.myLayer),
                    t.myLayer == e.LAYER.SIMULATION ? this._simulationBodies.push(t) : this.bodies[t.myLayer].push(t),
                    this.debugOn && console.info("DEBUG Phy: Added new body w id:" + t.uid + ", layer:" + t.myLayer),
                    t.myLayer === e.NONE && console.warn("Added pBody without set layer")
                }
            }, {
                key: "removeBody",
                value: function(e) {
                    null !== this.bodies && void 0 !== this.bodies || console.error("PhyEngine.removeBody(). Engine probably not created.");
                    for (var t = 0; t < this.bodies[e.myLayer].length; t++)
                        if (this.bodies[e.myLayer][t].uid === e.uid)
                            return this.bodies[e.myLayer].splice(t, 1),
                            !0;
                    return console.error("Trying to remove pBody not inside engine.bodies. Layer: " + e.myLayer + ", uid: " + e.uid, this.bodies),
                    !1
                }
            }, {
                key: "bodySwitchLayer",
                value: function(e, t, a) {
                    a.collidesLayers = t,
                    this._waitingLayerChange.hasOwnProperty(e) || (this._waitingLayerChange[e] = []),
                    this._waitingLayerChange[e].push(a)
                }
            }, {
                key: "engineLoop",
                value: function(e) {
                    if (this.gameScene.isGamePaused)
                        this._pastFrameTime = e;
                    else {
                        if (this._pastFrameTime) {
                            var t = e - this._pastFrameTime;
                            for (t > h.a.phyStepMax && (t = h.a.phyStepMax),
                            this._accumulatedTime += t; this._accumulatedTime >= this.tStepMS; )
                                this._tickNumber++,
                                this._integratePhy(this._processedTime, this.tStepMS, this.tStepMS * this._timeScale),
                                this._processedTime += this.tStepMS,
                                this._accumulatedTime -= this.tStepMS
                        }
                        if (this.debugOn) {
                            for (var a in this.bodies)
                                for (var i in this.bodies[a]) {
                                    this.bodies[a][i]._debugDraw()
                                }
                            for (var s in this._simulationBodies)
                                this._simulationBodies[s]._debugDraw()
                        }
                        this._switchAllLayers(),
                        this._pastFrameTime = e
                    }
                }
            }, {
                key: "_integratePhy",
                value: function(e, t, a) {
                    var i = t * this.tStep
                      , s = a * this.tStep
                      , n = i
                      , r = i;
                    for (var o in this.bodies)
                        e: for (var l in this.bodies[o]) {
                            var h = this.bodies[o][l];
                            if (h.pbActive && !h.isStatic) {
                                h.ignoreTimeScale ? (n = i,
                                r = i) : (n = s,
                                r = s);
                                var _ = h.vel.y + r * h.acc.y;
                                h.useGravity && (_ += n),
                                h.tickInfo.vy = _ * r,
                                h.pos.y += h.tickInfo.vy,
                                h.vel.y = _;
                                var c = h.vel.x + r * h.acc.x;
                                for (var d in h.tickInfo.vx = c * r,
                                h.pos.x += h.tickInfo.vx,
                                h.vel.x = c,
                                h.myFixedPreUpdate(e, t / 1e3, a / 1e3),
                                h.collidesLayers) {
                                    var u = h.collidesLayers[d];
                                    if (u !== h.myLayer)
                                        for (var p in this.bodies[u]) {
                                            var m = this.bodies[u][p];
                                            if (m.uid !== h.uid && 0 != m.pbActive) {
                                                if (0 == h.pbActive)
                                                    continue e;
                                                !0 === h.collision.doColl[h.bodyType][m.bodyType](h, m, r, h) && (_ = h.vel.y + r * h.acc.y,
                                                h.useGravity && (_ += n),
                                                h.tickInfo.vy = _ * r,
                                                c = h.vel.x + r * h.acc.x,
                                                h.tickInfo.vx = c * r)
                                            }
                                        }
                                }
                                h.myFixedPostUpdate(e, t / 1e3, a / 1e3)
                            }
                        }
                }
            }, {
                key: "_switchAllLayers",
                value: function() {
                    e: for (var e in this._waitingLayerChange) {
                        for (var t = this._waitingLayerChange[e], a = 0; a < t.length; a++) {
                            var i = t[a];
                            if (i.myLayer != e)
                                for (var s = 0; s < this.bodies[i.myLayer].length; s++)
                                    if (this.bodies[i.myLayer][s] == i) {
                                        this.bodies[i.myLayer].splice(s, 1),
                                        i.myLayer = e,
                                        this.bodies[i.myLayer].push(i);
                                        break e
                                    }
                        }
                        delete this._waitingLayerChange[e]
                    }
                }
            }, {
                key: "simulateCollisions",
                value: function(e, t, a, i) {
                    for (var s in e.pos.x = t,
                    e.pos.y = a,
                    e.bodyType == c.a.CIRCLE && (e.tickInfo.vx = e.vel.x / Math.abs(e.vel.x) * .01,
                    e.tickInfo.vy = e.vel.y / Math.abs(e.vel.y) * .01),
                    e._pBodyResize(e.size),
                    this.debugOn && e._debugDraw(),
                    e.collideEdge = this.__testCollisionEdgeFunc,
                    this._tempSimulationCollisionResult = {
                        isSquished: !1,
                        collisions: []
                    },
                    i) {
                        var n = i[s];
                        if (n !== e.myLayer)
                            for (var r in this.bodies[n]) {
                                var o = this.bodies[n][r];
                                o.uid !== e.uid && (0 != o.pbActive && e.collision.doColl[e.bodyType][o.bodyType](e, o, 0, e))
                            }
                    }
                    var l = !1
                      , h = !1
                      , d = !1
                      , u = !1
                      , p = !1;
                    return this._tempSimulationCollisionResult.collisions.forEach((function(e) {
                        (e.pBody.goType == _.a.GO_TYPE.WALL && e.pBody.wallType == _.a.WALL.WALL_TYPE.MOVING || e.pBody.wallType == _.a.WALL.WALL_TYPE.CAVEIN_BS3) && (p = !0)
                    }
                    )),
                    p && this._tempSimulationCollisionResult.collisions.forEach((function(e) {
                        e.edge == _.a.PHY.COL_EDGE.LEFT ? l = !0 : e.edge == _.a.PHY.COL_EDGE.RIGHT ? h = !0 : e.edge == _.a.PHY.COL_EDGE.TOP ? d = !0 : e.edge == _.a.PHY.COL_EDGE.BOTTOM && (u = !0)
                    }
                    )),
                    (l && h || d && u) && (this._tempSimulationCollisionResult.isSquished = !0),
                    this._tempSimulationCollisionResult
                }
            }, {
                key: "__testCollisionEdgeFunc",
                value: function(e, t, a, i, s, n, r, o) {
                    return r.pEngine._tempSimulationCollisionResult.collisions.push({
                        edge: e,
                        pBody: o
                    }),
                    !0
                }
            }]),
            e
        }();
        l()(d, "TIMESTEP", .01),
        d.LAYER = {
            NONE: "none",
            BALL: "ball",
            PLAYER: "player",
            WALL: "wall",
            ITEM: "item",
            SHOT: "shot",
            WALLBALL: "wallball",
            LADDER: "ladder",
            TELEPORT: "teleport",
            FRAGMENTS: "fragments",
            SIMULATION: "simulation"
        },
        d.LAYERS_BALL = [d.LAYER.WALL, d.LAYER.WALLBALL],
        d.LAYERS_SHOT = [d.LAYER.BALL, d.LAYER.WALL, d.LAYER.WALLBALL],
        d.LAYERS_PLAYER = [d.LAYER.BALL, d.LAYER.WALL, d.LAYER.LADDER, d.LAYER.TELEPORT],
        d.LAYERS_ITEM = [d.LAYER.PLAYER, d.LAYER.WALL, d.LAYER.WALLBALL],
        d.LAYERS_WALL = [],
        d.LAYERS_FRAGMENTS = [d.LAYER.WALL, d.LAYER.WALLBALL],
        d.LAYERS_NONE = [],
        t.a = d
    },
    24: function(e, t, a) {
        "use strict";
        function i(e) {
            return Math.floor(Math.random() * Math.floor(e))
        }
        function s(e, t) {
            return e + Math.random() * (t - e)
        }
        function n(e) {
            var t = Object.keys(e);
            return e[t[t.length * Math.random() << 0]]
        }
        a.d(t, "c", (function() {
            return i
        }
        )),
        a.d(t, "a", (function() {
            return s
        }
        )),
        a.d(t, "b", (function() {
            return n
        }
        ))
    },
    247: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return S
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(30)
          , p = a(22)
          , m = (a(102),
        a(252),
        a(1))
          , y = a(0)
          , g = a(174)
          , S = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, _()(t).call(this, e, a))).wallType = m.a.WALL.WALL_TYPE.BREAKABLE,
                i._itemDrop = a.itemDrop || null,
                i
            }
            return d()(t, e),
            r()(t, [{
                key: "drawWall",
                value: function() {
                    if (y.a.isBS2) {
                        this.mySprite = new p.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/breakable.png",{
                            top: 6,
                            bottom: 6,
                            left: 6,
                            right: 6
                        }),
                        this.mySprite.setDepthNinePatch(this.myRenderDepth)
                    } else
                        y.a.isBS3 && (this.mySprite = this.gameScene.add.tileSprite(this.pos.x - this.sizeHalf.x, this.pos.y - this.sizeHalf.y, this.size.x, this.size.y, y.a.spriteKey, "walls/breakable.png"),
                        this.mySprite.setDisplayOrigin(0, 0),
                        this.makeDepthAndScale(this.mySprite));
                    this.showInvisibleWall(!1)
                }
            }, {
                key: "breakableGotShot",
                value: function(e) {
                    if (this.pbActive = !1,
                    null != this._itemDrop && this.gameScene.itemManager.SpawnItem_BS2(this._itemDrop, this.pos.x, this.pos.y, m.a.ITEM_SPAWN_REASON.WALL),
                    y.a.isBS2) {
                        var t = this;
                        this.gameScene.tweens.add({
                            targets: this.mySprite.ninePatch,
                            alpha: 0,
                            duration: 150,
                            onComplete: function() {
                                t.myOnDestroy()
                            }
                        })
                    } else if (y.a.isBS3) {
                        this.mySprite.visible = !1;
                        g.a.GetFragments(this)
                    }
                }
            }]),
            t
        }(u.a)
    },
    248: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(30)
          , y = (a(12),
        a(134))
          , g = a(22)
          , S = a(1)
          , E = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (a = JSON.parse(JSON.stringify(a))).thisIsRightCavein ? (a.x = a.cavein_originalx + a.cavein_originalw / 2 - 5,
                a.w = 10) : (a.cavein_originalx = a.x,
                a.cavein_originalw = a.w,
                a.x = a.x - a.w / 2 + 5,
                a.w = 10),
                (i = l()(this, d()(t).call(this, e, a))).wallType = S.a.WALL.WALL_TYPE.CAVEIN_BS3,
                i._doSlide = !0,
                i._slideSpeedX = 10,
                i._slideEndX = a.cavein_originalx - 5 - a.cavein_space / 2,
                i._frozen = !1,
                i._rightCavein = a.thisIsRightCavein || !1,
                i._rightCavein && (i._slideSpeedX = -i._slideSpeedX,
                i._slideEndX = a.cavein_originalx + 5 + a.cavein_space / 2),
                i
            }
            return p()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    if (_()(d()(t.prototype), "myInit", this).call(this),
                    this.isStatic = !1,
                    !this._rightCavein) {
                        var e = JSON.parse(JSON.stringify(this._wallInfo));
                        e.thisIsRightCavein = !0,
                        y.a.spawnWall(this.gameScene, e)
                    }
                    return this
                }
            }, {
                key: "drawWall",
                value: function() {
                    this.mySprite = new g.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/cavein_bs3.png",{
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }),
                    this.mySprite.setDepthNinePatch(this.myRenderDepth),
                    this.showInvisibleWall(!1)
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    if (this._doSlide && !this._frozen) {
                        this.pos.x += this._slideSpeedX * a;
                        var s = !1;
                        this._rightCavein ? this.pos.x < this._slideEndX && (s = !0) : this.pos.x > this._slideEndX && (s = !0),
                        s && (this.pos.x = this._slideEndX,
                        this._doSlide = !1,
                        this.isStatic = !0)
                    }
                    _()(d()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i)
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this.mySprite.ninePatch.x = this.pos.x,
                    _()(d()(t.prototype), "myUpdate", this).call(this, e, a)
                }
            }]),
            t
        }(m.a);
        t.a = E
    },
    249: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(30)
          , y = a(12)
          , g = a(1)
          , S = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, d()(t).call(this, e, a))).wallType = g.a.WALL.WALL_TYPE.SLIDING_BT1,
                i._slideForX = a.slideX || 0,
                i._slideForY = a.slideY || 0,
                i._slideEndX = i.pos.x + i._slideForX,
                i._slideEndY = i.pos.y + i._slideForY,
                i._slideTime = a.slideTime || 0,
                i._calculatedSlideSpeedX = 0,
                i._calculatedSlideSpeedY = 0,
                i._doSlide = !1,
                i
            }
            return p()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    return _()(d()(t.prototype), "myInit", this).call(this),
                    0 != this._slideForX && (this._calculatedSlideSpeedX = this._slideForX / this._slideTime),
                    0 != this._slideForY && (this._calculatedSlideSpeedY = this._slideForY / this._slideTime),
                    this
                }
            }, {
                key: "onReceiveMyEvent",
                value: function(e, t) {
                    t == this._eventInfo && (this.isStatic = !1,
                    this._doSlide = !0,
                    this.mySound = y.a.playSound(this.gameScene, y.a.SND.WALL_SLIDE_SMALL))
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    this._slideTime > 0 && this._doSlide && (this._slideTime -= a,
                    this.pos.x += this._calculatedSlideSpeedX * a,
                    this.pos.y += this._calculatedSlideSpeedY * a),
                    this._doSlide && this._slideTime < 0 && (this.pos.x = this._slideEndX,
                    this.pos.y = this._slideEndY,
                    this._doSlide = !1,
                    this.isStatic = !0),
                    _()(d()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i)
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this.mySprite.x = this.pos.x - this.sizeHalf.x,
                    this.mySprite.y = this.pos.y - this.sizeHalf.y,
                    _()(d()(t.prototype), "myUpdate", this).call(this, e, a)
                }
            }]),
            t
        }(m.a);
        t.a = S
    },
    25: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return m
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = a(0)
          , _ = a(8)
          , c = a(2)
          , d = a(29)
          , u = a(4)
          , p = a(13)
          , m = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "init",
                value: function(t) {
                    c.a.resetExperience ? (u.a.gameSettings.tasksCollected = [],
                    u.a.gameSettings.tasksCompleted = [],
                    u.a.gameSettings.tasksStats = {}) : c.a.log("NyXpProgress.init with", u.a.gameSettings.tasksCollected, "experience"),
                    h.a.isBS2 ? e.RANK_NAMES = e._RANK_NAMES_BS2 : h.a.isBS3 && (e.RANK_NAMES = e._RANK_NAMES_BS3)
                }
            }, {
                key: "renderBadge",
                value: function(t, a, i, s, n) {
                    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    c.a.log("BADGE", "Rendering..", s, ", crnt lvl:", e.CurrentLevel, ", crnt badge:", e.CurrentBadge);
                    var o = h.a.isBS2 || h.a.isBS3
                      , l = {};
                    l.badgeLevel = s;
                    var d = 1;
                    if (s != e.CurrentLevel || n || (d = 1.35),
                    null != r && (d = r),
                    l.badgeScale = d,
                    s == e.CurrentLevel && e.IsFullXp) {
                        l.badgeAura = [];
                        var m = new _.a(t,a,i,h.a.lazySpriteKey,"retention/back_lvl" + s + "_aura_particle2.png");
                        m.scale = d,
                        t.add.tween({
                            targets: m,
                            angle: 46,
                            duration: 1045,
                            alpha: {
                                to: .4,
                                from: 1
                            },
                            scale: {
                                from: d,
                                to: 1.25 * d
                            },
                            yoyo: !0,
                            loop: -1,
                            ease: Phaser.Math.Easing.Circular.InOut
                        });
                        var y = new _.a(t,a,i,h.a.lazySpriteKey,"retention/back_lvl" + s + "_aura_particle1.png");
                        y.scale = d,
                        t.add.tween({
                            targets: y,
                            alpha: {
                                to: .6,
                                from: 1
                            },
                            scale: {
                                from: .8 * d,
                                to: 1.1 * d
                            },
                            duration: 100,
                            yoyo: !0,
                            loop: -1,
                            ease: Phaser.Math.Easing.Expo.InOut
                        }),
                        t.add.tween({
                            targets: y,
                            angle: {
                                from: 0,
                                to: 360
                            },
                            duration: 3845,
                            loop: -1,
                            delay: 250
                        });
                        var g = new _.a(t,a,i,h.a.lazySpriteKey,"retention/back_lvl" + s + "_aura_particle1.png");
                        g.scale = d,
                        t.add.tween({
                            targets: g,
                            alpha: {
                                to: .7,
                                from: .9
                            },
                            scale: {
                                from: .9 * d,
                                to: 1.1 * d
                            },
                            duration: 300,
                            yoyo: !0,
                            loop: -1,
                            ease: Phaser.Math.Easing.Back.InOut
                        }),
                        t.add.tween({
                            targets: g,
                            angle: {
                                from: 180,
                                to: -180
                            },
                            duration: 5245,
                            loop: -1,
                            delay: 550
                        });
                        var S = new _.a(t,a,i,h.a.lazySpriteKey,"retention/back_lvl" + s + "_aura_back.png")
                          , E = d;
                        h.a.isBT && (E = 1.1 * d),
                        S.scale = E,
                        t.add.tween({
                            targets: S,
                            alpha: {
                                to: .5,
                                from: 1
                            },
                            duration: 250,
                            yoyo: !0,
                            loop: -1
                        }),
                        l.badgeAura.push(S, m, y, g)
                    }
                    var f = new _.a(t,a,i,h.a.lazySpriteKey,"retention/back_lvl" + s + ".png");
                    if (f.scale = d,
                    l.badgeBack = f,
                    s == e.CurrentLevel) {
                        var T = new _.a(t,a,i,e.PROFILE_PIC.spriteKey,e.PROFILE_PIC.image);
                        T.scale *= d;
                        var v = 100
                          , b = t.make.graphics({
                            x: a,
                            y: i
                        });
                        b.scale = d,
                        b.fillCircle(0, 0, v / 2 - 4);
                        var k = b.createGeometryMask();
                        T.setMask(k),
                        l.profilePic = T
                    }
                    var P = "retention/back_lvl" + s + "_over.png"
                      , L = f.texture.getFrameNames().includes(P)
                      , A = null;
                    L && ((A = new _.a(t,a,i,h.a.lazySpriteKey,P)).y += f.displayHeight / 2,
                    A.scale = d,
                    l.badgeStars = A);
                    var I = 100 * d
                      , M = 25 * d
                      , O = i - f.displayHeight / 2
                      , D = 3 * d;
                    o && (D = 0);
                    var R = [14037563, 14037563, 14037563, 14037563, 14037563, 14037563, 14037563];
                    h.a.isBS2 && (R = [7934216, 3479296, 3421236, 4013056, 14392, 8504, 3082297]),
                    h.a.isBS3 && (R = [591492, 591492, 591492, 591492, 591492, 591492, 591492]);
                    var B = 14037563;
                    h.a.isBS2 && (B = 16706824),
                    h.a.isBS3 && (B = 10531019);
                    var w = t.add.graphics({
                        x: a - I / 2,
                        y: O - M / 2
                    });
                    w.fillStyle(R[s], 1),
                    w.lineStyle(4, B, .35),
                    w.fillRect(0, 0, I, M),
                    w.strokeRect(0, 0, I, M);
                    var N = t.add.bitmapText(a, i, h.a.fontNames.MENU, e.RANK_NAMES[s], 24 * d);
                    if (N.setOrigin(.5, .5),
                    N.y = O + D,
                    l.badgeNameBack = w,
                    l.badgeNameTxt = N,
                    s == e.CurrentLevel && !e.IsFullXp) {
                        var x = 2
                          , C = 100 * d
                          , U = 20 * d
                          , W = i + f.displayHeight / 2
                          , Y = 14037563;
                        h.a.isBS2 && (Y = 14488070),
                        h.a.isBS3 && (Y = 7937188);
                        var K = t.add.graphics();
                        K.fillStyle(Y, 1),
                        K.lineStyle(2, 15959087, 1),
                        K.fillRect(a - C / 2 - x, W - U / 2 - x, C + 2 * x, U + 2 * x);
                        var G = t.add.graphics()
                          , H = 0
                          , V = t.add.bitmapText(a, i, h.a.lazyFontNames.RETENTION_XP, "", 18);
                        V.setOrigin(.5, .5),
                        V.y = W + H;
                        var z = 0;
                        if (s >= 1 && (z = p.a.LEVEL_POINTS[s - 1]),
                        G.updateXp = function(e) {
                            var t = (e - z) / (p.a.LEVEL_POINTS[s] - z);
                            G.fillStyle(14475273, 1),
                            G.fillRect(a - C / 2, W - U / 2, C * t, U),
                            V.text = e - z + "/" + (p.a.LEVEL_POINTS[s] - z)
                        }
                        ,
                        G.updateXp(p.a.Experience),
                        n)
                            V.visible = !1,
                            p.a.Experience - z == 0 ? K.visible = !1 : A && (A.visible = !1);
                        else {
                            var F = t.add.container(a, W);
                            K.x -= a,
                            K.y -= W,
                            V.x -= a,
                            V.y -= W,
                            G.x -= a,
                            G.y -= W,
                            F.add([K, G, V]),
                            l.progressContainer = F,
                            A && (A.visible = !1)
                        }
                        l.progressBack = K,
                        l.progressBar = G,
                        l.progressTxt = V
                    }
                    if (s == e.CurrentLevel)
                        e.CurrentBadge = l,
                        t.sys.events.once("shutdown", (function() {
                            e.CurrentBadge = null
                        }
                        ));
                    else if (h.a.isBS2 || h.a.isBS3) {
                        f.visible = !1;
                        var X = w.y;
                        w.y = i - 35 * d;
                        var j = X - w.y;
                        N.y -= j,
                        A && (A.y = i + 10 * d)
                    }
                    if (n) {
                        if (p.a.Experience - z == 0) {
                            var q = t.add.tween({
                                targets: [f, b],
                                scale: 1.05 * d,
                                duration: 330,
                                loop: -1,
                                yoyo: !0
                            });
                            q.timeScale = 1.5
                        }
                        f.setInteractive({
                            useHandCursor: !0
                        }).on("pointerup", (function() {
                            e.clickedBadge(t)
                        }
                        )),
                        A && (A.visible = !1)
                    }
                    l.getBadgeDisplayElements = function(e) {
                        var t = [];
                        return l.arrow && t.push(l.arrow),
                        l.badgeAura && l.badgeAura.forEach((function(e) {
                            t.push(e)
                        }
                        )),
                        l.badgeStars && t.push(l.badgeStars),
                        f && t.push(f),
                        w && t.push(w),
                        N && t.push(N),
                        T && t.push(T),
                        e && b && t.push(b),
                        K && t.push(K),
                        G && t.push(G),
                        V && t.push(V),
                        t
                    }
                    ,
                    l.destroyBadge = function() {
                        for (var e = l.getBadgeDisplayElements(!0), t = e.length - 1; t >= 0; t--)
                            e[t].destroy()
                    }
                    ,
                    l.moveBadgeBy = function(e, t) {
                        l.getBadgeDisplayElements(!0).forEach((function(a) {
                            a.x += e,
                            a.y += t
                        }
                        ))
                    }
                    ;
                    var J = u.a.gameSettings.tasksCompleted.length - u.a.gameSettings.tasksCollected.length;
                    if (J > 0 && n) {
                        var Z = 13904693
                          , Q = 14475529
                          , $ = 4
                          , ee = 15
                          , te = -50 * d;
                        o && (te = -50 * d);
                        var ae = -25
                          , ie = 15
                          , se = -2
                          , ne = 1
                          , re = t.add.graphics();
                        re.fillStyle(Z, 1),
                        re.lineStyle($, Q, 1),
                        re.fillCircle(0, 0, ee),
                        re.strokeCircle(0, 0, ee);
                        var oe = t.add.bitmapText(se, ne, h.a.lazyFontNames.RETENTION_XP, J, ie);
                        oe.setOrigin(.5, .5);
                        var le = t.add.container(f.x + te, f.y + ae);
                        le.add([re, oe]),
                        t.add.tween({
                            targets: le,
                            scale: 1.21,
                            duration: 230,
                            loop: -1,
                            yoyo: !0
                        })
                    }
                    return l
                }
            }, {
                key: "updateCrntBadgeProgress",
                value: function(t) {
                    null != e.CurrentBadge && e.CurrentBadge.progressBar.updateXp(t)
                }
            }, {
                key: "clickedBadge",
                value: function(e) {
                    d.a.LogClick(d.a.CLICK_TYPE.TASKS),
                    e.myTransition.transitionToggle(!1, "MyTasksScene")
                }
            }, {
                key: "CurrentLevel",
                get: function() {
                    for (var e = p.a.Experience, t = p.a.LEVEL_POINTS.length - 2; t >= 0; t--)
                        if (e >= p.a.LEVEL_POINTS[t])
                            return t + 1;
                    return 0
                }
            }, {
                key: "IsFullXp",
                get: function() {
                    return e.CurrentLevel == p.a._TASKS.length - 1 && p.a.Experience == p.a.LEVEL_POINTS[e.CurrentLevel] ? (c.a.log("Tasks completed. You are very cool! Would you like more tasks? Vote on our Discord"),
                    !0) : (c.a.log("Not full xp.", e.CurrentLevel, "!=", p.a._TASKS.length - 1, "&&", p.a.Experience, "!=", p.a.LEVEL_POINTS[e.CurrentLevel]),
                    !1)
                }
            }, {
                key: "PROFILE_PIC",
                get: function() {
                    return h.a.isBS2 || h.a.isBS3 ? {
                        image: "retention/profile_pic.png",
                        spriteKey: h.a.lazySpriteKey
                    } : {
                        image: "profile_pic.png",
                        spriteKey: u.a.gameSettings.selectedSkinID
                    }
                }
            }]),
            e
        }();
        l()(m, "RANK_NAMES", ["NEWBIE", "BRONZE", "SILVER", "GOLD", "DIAMOND", "LEGEND", "MASTER"]),
        l()(m, "_RANK_NAMES_BS2", ["FRESH", "BRONZE", "SILVER", "GOLD", "DIAMOND", "LEGEND", "MASTER"]),
        l()(m, "_RANK_NAMES_BS3", ["NEW PLAYER", "BRONZE", "SILVER", "GOLD", "DIAMOND", "EPIC", "MASTER"]),
        l()(m, "CurrentBadge", null)
    },
    250: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(30)
          , y = (a(12),
        a(22))
          , g = a(16)
          , S = a(1)
          , E = function(e) {
            function t(e, a) {
                var i;
                s()(this, t),
                (a = JSON.parse(JSON.stringify(a))).w = a.moving_width,
                a.h = 10;
                var n = t.movingGetPosition(a, 0);
                return a.x = a.moving_origin_x + n.x,
                a.y = a.moving_origin_y + n.y,
                (i = l()(this, d()(t).call(this, e, a))).wallType = S.a.WALL.WALL_TYPE.MOVING,
                i._currentMovingStep = 0,
                i._stepPositionCurrent = g.a.ZERO,
                i._stepPositionNext = g.a.ZERO,
                i._doSlide = !0,
                i._slideX = 0,
                i._slideY = 0,
                i._slideEndX = a.cavein_originalx - 5 - a.cavein_space / 2,
                i._frozen = !1,
                i
            }
            return p()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    return _()(d()(t.prototype), "myInit", this).call(this),
                    this.isStatic = !1,
                    this._stepPositionNext = t.movingGetPosition(this._wallInfo, 0),
                    this._prepNextStep(),
                    this
                }
            }, {
                key: "_prepNextStep",
                value: function() {
                    this._stepPositionCurrent = new g.a(this._stepPositionNext.x,this._stepPositionNext.y),
                    this._currentMovingStep++,
                    this._stepPositionNext = t.movingGetPosition(this._wallInfo, this._currentMovingStep);
                    var e = 1
                      , a = 1;
                    if (this._wallInfo.moving_start_direct == t.DIRECTION.DIAG) {
                        var i = Math.abs(this._stepPositionNext.x - this._stepPositionCurrent.x)
                          , s = Math.abs(this._stepPositionNext.y - this._stepPositionCurrent.y);
                        s < i ? (e = 1,
                        a = s / i) : i < s && (e = i / s,
                        a = 1)
                    }
                    this._stepPositionNext.x == this._stepPositionCurrent.x ? this._slideX = 0 : this._stepPositionNext.x < this._stepPositionCurrent.x ? this._slideX = -1 * this._wallInfo.moving_speed * e : this._stepPositionNext.x > this._stepPositionCurrent.x && (this._slideX = 1 * this._wallInfo.moving_speed * e),
                    this._stepPositionNext.y == this._stepPositionCurrent.y ? this._slideY = 0 : this._stepPositionNext.y < this._stepPositionCurrent.y ? this._slideY = -1 * this._wallInfo.moving_speed * a : this._stepPositionNext.y > this._stepPositionCurrent.y && (this._slideY = 1 * this._wallInfo.moving_speed * a)
                }
            }, {
                key: "drawWall",
                value: function() {
                    this.mySprite = new y.a(this.gameScene,this.pos.x,this.pos.y,this._wallInfo.moving_width,10,"walls/basic.png",{
                        top: 7,
                        bottom: 7,
                        left: 7,
                        right: 7
                    }),
                    this.mySprite.setDepthNinePatch(this.myRenderDepth),
                    this.showInvisibleWall(!1)
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    if (this._doSlide && !this._frozen) {
                        this.pos.x += this._slideX * a,
                        this.pos.y += this._slideY * a;
                        var s = !1;
                        (this._slideX > 0 && this.pos.x > this._wallInfo.moving_origin_x + this._stepPositionNext.x || this._slideX < 0 && this.pos.x < this._wallInfo.moving_origin_x + this._stepPositionNext.x) && (s = !0),
                        (this._slideY > 0 && this.pos.y > this._wallInfo.moving_origin_y + this._stepPositionNext.y || this._slideY < 0 && this.pos.y < this._wallInfo.moving_origin_y + this._stepPositionNext.y) && (s = !0),
                        s && (this.pos.x = this._wallInfo.moving_origin_x + this._stepPositionNext.x,
                        this.pos.y = this._wallInfo.moving_origin_y + this._stepPositionNext.y,
                        this._prepNextStep())
                    }
                    _()(d()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i)
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this.mySprite.ninePatch.x = this.pos.x,
                    this.mySprite.ninePatch.y = this.pos.y,
                    this._spikeySprite && (this._spikeySprite.x = this.pos.x,
                    this._spikeySprite.y = this.pos.y + this._wallInfo.h / 2),
                    _()(d()(t.prototype), "myUpdate", this).call(this, e, a)
                }
            }], [{
                key: "movingGetPosition",
                value: function(e, a) {
                    var i = t._movingGetPositionMarker(e, a)
                      , s = -e.moving_origin_w / 2 + e.moving_width / 2
                      , n = -e.moving_origin_h / 2 + 5;
                    return "r" == i[1] && (s = e.moving_origin_w / 2 - e.moving_width / 2),
                    "b" == i[0] && (n = e.moving_origin_h / 2 - 5),
                    {
                        x: s,
                        y: n
                    }
                }
            }, {
                key: "_movingGetPositionMarker",
                value: function(e, a) {
                    var i = [t.POSITION.TOP_LEFT, t.POSITION.TOP_RIGHT, t.POSITION.BOT_RIGHT, t.POSITION.BOT_LEFT]
                      , s = [t.POSITION.TOP_LEFT, t.POSITION.BOT_LEFT, t.POSITION.BOT_RIGHT, t.POSITION.TOP_RIGHT];
                    return e.moving_start_direct == t.DIRECTION.CW ? (a += i.indexOf(e.moving_start_pos),
                    i[a % 4]) : e.moving_start_direct == t.DIRECTION.CCW ? (a += s.indexOf(e.moving_start_pos),
                    s[a % 4]) : e.moving_start_direct == t.DIRECTION.DIAG ? a % 2 == 0 ? e.moving_start_pos : {
                        tl: "br",
                        tr: "bl",
                        br: "tl",
                        bl: "tr"
                    }[e.moving_start_pos] : (console.error("Unknown starting direction:", e.moving_start_direct),
                    null)
                }
            }]),
            t
        }(m.a);
        E.DIRECTION = {
            CW: "cw",
            CCW: "ccw",
            DIAG: "diag"
        },
        E.POSITION = {
            TOP_LEFT: "tl",
            TOP_RIGHT: "tr",
            BOT_LEFT: "bl",
            BOT_RIGHT: "br"
        },
        t.a = E
    },
    251: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(17)
          , y = a.n(m)
          , g = a(0)
          , S = a(3)
          , E = a(8)
          , f = a(51)
          , T = a(23)
          , v = a(16)
          , b = a(43)
          , k = a(2)
          , P = a(1)
          , L = function(e) {
            function t(e, a) {
                var i;
                s()(this, t);
                var n = new v.a(a.x,a.y)
                  , r = new v.a(a.w,a.h)
                  , o = new v.a(n.x - r.x / 2,n.y - r.y / 2 - t.OP)
                  , h = new v.a(n.x + r.x / 2,n.y + r.y / 2);
                return (i = l()(this, d()(t).call(this, e, T.a.LAYER.LADDER, T.a.LAYERS_NONE, o, h, {
                    isStatic: !0
                }))).canUseLadder = [0, a.ladderP1, a.ladderP2],
                null == i.canUseLadder[1] && (i.canUseLadder[1] = !0),
                null == i.canUseLadder[2] && (i.canUseLadder[2] = !0),
                i._ladderSprites = [],
                i._ladder_sensitive_climb = 10,
                i._ladderTopY = i._p1.y,
                i._ladderBotY = i._p2.y - g.a.playerCollH / 2,
                i.slideTo = [null, null, null],
                i.climbingTweens = [],
                i._wallInfo = a,
                i
            }
            return p()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    this.goType = P.a.GO_TYPE.LADDER,
                    this.myRenderDepth = S.a.RENDER_DEPTH.LADDER;
                    var e = "walls/ladder_top"
                      , a = "walls/ladder_bot"
                      , i = "walls/ladder_mid";
                    1 == this.canUseLadder[1] && 0 == this.canUseLadder[2] && (e += "_p1",
                    a += "_p1",
                    i += "_p1"),
                    0 == this.canUseLadder[1] && 1 == this.canUseLadder[2] && (e += "_p2",
                    a += "_p2",
                    i += "_p2"),
                    e += ".png",
                    a += ".png",
                    i += ".png";
                    var s = new E.a(this.gameScene,this.pos.x,this._p1.y + 5,g.a.spriteKey,e,1,this.myRenderDepth)
                      , n = new E.a(this.gameScene,this.pos.x,this._p2.y - 5,g.a.spriteKey,a,1,this.myRenderDepth);
                    this._stateSprites.push(s, n);
                    for (var r = null, o = s.y + 10 + t.OP; o < n.y; o += 10)
                        r = new E.a(this.gameScene,this.pos.x,o,g.a.spriteKey,i,1,this.myRenderDepth),
                        this._stateSprites.push(r);
                    return s.y += t.OP,
                    this
                }
            }, {
                key: "touchingLadder",
                value: function(e) {
                    if (this.canUseLadder[e.playerId] && null == this.climbingTweens[e.playerId]) {
                        if (null == e.usingLadder && Math.abs(e.pos.x - this.pos.x) < 10)
                            if (e.myInput.up())
                                e.pos.y <= this._p2.y - e.sizeHalf.y && e.pos.y > this._p1.y && this._attachPlayer(e);
                            else if (e.myInput.down())
                                if (e.pos.y < this._p2.y - e.sizeHalf.y && e.pos.y > this._p1.y)
                                    this._attachPlayer(e);
                                else if (Math.abs(e.pos.y + e.sizeHalf.y - (this._p1.y + t.OP)) < .1)
                                    return void this._climbOffTop(e);
                        if (e.usingLadder == this) {
                            if (e.myInput.up())
                                e.vel.y = -e.ladderSpeed,
                                this.slideTo[e.playerId] = null;
                            else if (e.myInput.down())
                                e.vel.y = e.ladderSpeed,
                                this.slideTo[e.playerId] = null;
                            else if ((e.myInput.left() || e.myInput.right()) && null == this.slideTo[e.playerId])
                                if (e.pos.y + 1 < this._ladderBotY) {
                                    this.slideTo[e.playerId] = null;
                                    for (var a = !1, i = e.pos.y + 1; i < this._ladderBotY; i++) {
                                        if (0 != (s = this.gameScene.phyEngine.simulateCollisions(e._testPBodyLadder, e.pos.x, i, [T.a.LAYER.WALL])).collisions.length || a || (a = !0),
                                        0 != s.collisions.length && a) {
                                            this.slideTo[e.playerId] = i - 1;
                                            break
                                        }
                                    }
                                    a && null == this.slideTo[e.playerId] && (this.slideTo[e.playerId] = this._ladderBotY - 1)
                                } else
                                    this._releasePlayer(e);
                            else
                                e.vel.y = 0;
                            var s;
                            if (null != this.slideTo[e.playerId])
                                if (e.vel.y = e.ladderSlideSpeed,
                                e.pos.y >= this.slideTo[e.playerId])
                                    return e.pos.y = this.slideTo[e.playerId],
                                    e.vel.y = 0,
                                    this.slideTo[e.playerId] = null,
                                    void ((s = this.gameScene.phyEngine.simulateCollisions(e._testPBodyLadder, e.pos.x, Math.ceil(e.pos.y) + 1, [T.a.LAYER.WALL])).collisions.length > 0 && this._releasePlayer(e));
                            if (e.myInput.down() && e.pos.y + 1 > this._ladderBotY)
                                return e.pos.y = this._ladderBotY,
                                void this._releasePlayer(e);
                            if (e.myInput.up())
                                if (e.pos.y <= this._ladderTopY)
                                    if (e.vel.y = 0,
                                    0 == this.gameScene.phyEngine.simulateCollisions(e._testPBodyLadder, e.pos.x, this._ladderTopY - e.sizeHalf.y, [T.a.LAYER.WALL]).collisions.length)
                                        if ((s = this.gameScene.phyEngine.simulateCollisions(e._testPBodyLadder, e.pos.x, this._ladderTopY - e.sizeHalf.y + t.OP + 1, [T.a.LAYER.WALL])).collisions.length > 0 && Math.abs(s.collisions[0].pBody._p1.y - this._p1.y) < .1 + t.OP)
                                            return void this._climbOntoTop(e);
                            this._animatePlayer(e)
                        }
                    }
                }
            }, {
                key: "_attachPlayer",
                value: function(e) {
                    e.pos.x = this.pos.x,
                    e.vel.x = e.vel.y = 0,
                    e.acc.y = 0,
                    e.usingLadder = this,
                    e.useGravity = !1
                }
            }, {
                key: "_releasePlayer",
                value: function(e) {
                    e.usingLadder != this && k.a.error("Using not this ladder?!", this, e.usingLadder),
                    e.usingLadder = null,
                    e.useGravity = !0,
                    e.vel.y = 0,
                    this.slideTo[e.playerId] = null,
                    e.playCharAnim(b.a.ANIMS.IDLE, !0)
                }
            }, {
                key: "_animatePlayer",
                value: function(e) {
                    if (null != this.slideTo[e.playerId])
                        e.mySprite.anims.play("slide" + e._aniBS3FrameNameMod, !0);
                    else {
                        e.mySprite.anims.play("climb" + e._aniBS3FrameNameMod, !0);
                        var t = Math.floor((e.pos.y - (this._p1.y - this._ladder_sensitive_climb)) / 3 % e.mySprite.anims.getTotalFrames());
                        t = Math.abs(t),
                        e.mySprite.anims.setCurrentFrame(e.mySprite.anims.currentAnim.frames[t])
                    }
                }
            }, {
                key: "_climbOntoTop",
                value: function(e) {
                    e.mySprite.anims.play("climb_on" + e._aniBS3FrameNameMod, !0);
                    var a = this;
                    this.climbingTweens[e.playerId] = this.gameScene.tweens.add({
                        targets: e.pos,
                        y: this._p1.y - e.sizeHalf.y + t.OP,
                        duration: 400,
                        onComplete: function() {
                            delete a.climbingTweens[e.playerId],
                            a._releasePlayer(e)
                        }
                    })
                }
            }, {
                key: "_climbOffTop",
                value: function(e) {
                    e.mySprite.anims.playReverse("climb_on" + e._aniBS3FrameNameMod, !0),
                    this._attachPlayer(e);
                    var t = this;
                    this.climbingTweens[e.playerId] = this.gameScene.tweens.add({
                        targets: e.pos,
                        y: this._p1.y,
                        duration: 400,
                        onComplete: function() {
                            delete t.climbingTweens[e.playerId]
                        }
                    })
                }
            }, {
                key: "myOnPause",
                value: function(e) {
                    for (var a in _()(d()(t.prototype), "myOnPause", this).call(this, e),
                    this.climbingTweens)
                        e ? this.climbingTweens[a].pause() : this.climbingTweens[a].resume()
                }
            }]),
            t
        }(f.a);
        y()(L, "OP", 1),
        t.a = L
    },
    252: function(e, t, a) {
        "use strict";
        var i = a(80)
          , s = a.n(i)
          , n = a(5)
          , r = a.n(n)
          , o = a(6)
          , l = a.n(o)
          , h = (a(69),
        a(0))
          , _ = a(24)
          , c = a(10)
          , d = a.n(c)
          , u = a(19)
          , p = a.n(u)
          , m = a(7)
          , y = a.n(m)
          , g = a(11)
          , S = a.n(g)
          , E = a(51)
          , f = a(3)
          , T = a(16)
          , v = (a(76),
        a(23))
          , b = a(75)
          , k = a(8)
          , P = a(2)
          , L = (a(30),
        a(9))
          , A = a(1)
          , I = a(12)
          , M = a(20)
          , O = a(4)
          , D = a(13)
          , R = a(17)
          , B = a.n(R)
          , w = a(74)
          , N = a(27)
          , x = function(e) {
            function t() {
                return r()(this, t),
                d()(this, y()(t).apply(this, arguments))
            }
            return S()(t, e),
            l()(t, [{
                key: "myInit",
                value: function() {
                    return this.modType = A.a.ITEM_MANAGER.MOD_TYPE.SLOW_TIME,
                    this.MOD_TIME = 5,
                    (h.a.isBS2 || h.a.isBS3) && (this.MOD_TIME = 10),
                    this.modTime = this.MOD_TIME,
                    P.a.log("ITM_SLOW", "slow initiated!"),
                    this.gameScene.phyEngine._timeScale == U.SLOW_DOWNNN_SCALE || (this.gameScene.phyEngine._timeScale = t.SLOW_DOWN_SCALE),
                    this._formatCountdownTime(this.modTime),
                    this
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    p()(y()(t.prototype), "myUpdate", this).call(this, e, a),
                    h.a.isBT || this._formatCountdownTime(this.modTime)
                }
            }, {
                key: "modAddExisting",
                value: function() {
                    P.a.log("ITM_SLOW", "Addi ng more slow time.."),
                    this.modTime += this.MOD_TIME,
                    this._formatCountdownResetAlpha()
                }
            }, {
                key: "modExpired",
                value: function() {
                    P.a.log("ITM_SLOW", "No more slow time!!"),
                    this.gameScene.itemManager.allModifiers.hasOwnProperty(A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_SLOW) ? this.gameScene.phyEngine._timeScale = U.SLOW_DOWNNN_SCALE : this.gameScene.phyEngine._timeScale = 1
                }
            }]),
            t
        }(w.a);
        B()(x, "SLOW_DOWN_SCALE", .5);
        var C = x
          , U = function(e) {
            function t() {
                return r()(this, t),
                d()(this, y()(t).apply(this, arguments))
            }
            return S()(t, e),
            l()(t, [{
                key: "myInit",
                value: function(e) {
                    var t;
                    this.modType = e;
                    for (var a = 0; a <= N.a.ITEMS.length; a++)
                        if (N.a.ITEMS[a].modType == e) {
                            t = N.a.ITEMS[a];
                            break
                        }
                    this.item = t,
                    this.animationTween = null;
                    var i = N.a.getMaxLevelForItem(t)
                      , s = t.upgradeVal[i];
                    return this.modTime = s,
                    this.activateItem(),
                    this._formatCountdownTime(this.modTime),
                    null != this.infoTxt_desc && this.infoTxt_desc.destroy(),
                    this._animateOutItemSprite(),
                    I.a.playSound(this.gameScene, I.a.SND.RETENTION_UPGRD_ACTIVE),
                    this
                }
            }, {
                key: "_animateOutItemSprite",
                value: function() {
                    this.animationTween = this.gameScene.tweens.add({
                        targets: this.gameScene.upgradeItemSprite,
                        duration: 120,
                        alpha: 0,
                        yoyo: !0,
                        loop: -1
                    })
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    p()(y()(t.prototype), "myUpdate", this).call(this, e, a),
                    h.a.isBT || this._formatCountdownTime(this.modTime)
                }
            }, {
                key: "activateItem",
                value: function() {
                    D.a.TaskIncrement(this.gameScene, D.a.TASK_TYPE.USE_UPGRADE, 1, this.modType),
                    this.modType == A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_SLOW ? this.gameScene.phyEngine._timeScale = t.SLOW_DOWNNN_SCALE : this.modType == A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_PHASE ? (this.gameScene.players[1] && (this.gameScene.players[1].mySprite.alpha = t.INVISIBLE_ALPHA),
                    this.gameScene.players[2] && (this.gameScene.players[2].mySprite.alpha = t.INVISIBLE_ALPHA)) : this.modType == A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_LAST_BREATH ? this.gameScene.timebar._timebarTimeScale = t.FINAL_MOMENT_TIMESCALE : this.modType == A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK ? (this.gameScene.players[1] && this.gameScene.players[1].playerShield.addShield(b.a.SHIELD_TYPES.TANK),
                    this.gameScene.players[2] && this.gameScene.players[2].playerShield.addShield(b.a.SHIELD_TYPES.TANK),
                    this.modTime = 0) : P.a.error("Unknown upgrade item picked up", modType)
                }
            }, {
                key: "modExpired",
                value: function() {
                    P.a.log("upgradeitem", "Expired."),
                    this.animationTween.stop(),
                    this.gameScene.upgradeItemSprite.visible = !1,
                    this.modType == A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_SLOW ? this.gameScene.itemManager.allModifiers.hasOwnProperty(A.a.ITEM_MANAGER.MOD_TYPE.SLOW_TIME) ? this.gameScene.phyEngine._timeScale = C.SLOW_DOWN_SCALE : this.gameScene.phyEngine._timeScale = 1 : this.modType == A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_PHASE ? (this.gameScene.players[1] && (this.gameScene.players[1].mySprite.alpha = 1),
                    this.gameScene.players[2] && (this.gameScene.players[2].mySprite.alpha = 1)) : this.modType == A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_LAST_BREATH && (this.gameScene.timebar._timebarTimeScale = 1)
                }
            }]),
            t
        }(w.a);
        B()(U, "SLOW_DOWNNN_SCALE", .35),
        B()(U, "INVISIBLE_ALPHA", .5),
        B()(U, "FINAL_MOMENT_TIMESCALE", .01);
        var W = function(e) {
            function t(e, a, i, s, n) {
                var o;
                r()(this, t),
                P.a.log("ITEM", "Getting item:" + s, a, i);
                var l = t._getHalfSize(s)
                  , _ = new T.a(a - l.x,i - l.y)
                  , c = new T.a(a + l.x,i + l.y);
                return (o = d()(this, y()(t).call(this, e, v.a.LAYER.ITEM, v.a.LAYERS_ITEM, _, c, {
                    vel: new T.a(0,h.a.itemGrav)
                }))).itemType = s,
                o.isPointsItem = !1,
                o._timeLeft = h.a.itemAlive,
                o._vanishSpeed = h.a.itemVanishSpeed,
                o._vanishTick = 0,
                o._landedWall = null,
                o._landedWallOld = null,
                o._spawnReason = n,
                o.myInit(),
                o
            }
            return S()(t, e),
            l()(t, [{
                key: "myInit",
                value: function() {
                    this.goType = A.a.GO_TYPE.ITEM,
                    this.myRenderDepth = f.a.RENDER_DEPTH.GAME,
                    this.mySprite = new k.a(this.gameScene,this.pos.x,this.pos.y,h.a.spriteKey,"items/" + this.itemType + ".png",1,this.myRenderDepth),
                    this.itemType != A.a.ITEM_TYPE.POINTS1 && this.itemType != A.a.ITEM_TYPE.POINTS2 && this.itemType != A.a.ITEM_TYPE.POINTS3 && this.itemType != A.a.ITEM_TYPE.POINTS4 && this.itemType != A.a.ITEM_TYPE.E_LIFE || (this.isPointsItem = !0),
                    this._resetItemTime()
                }
            }, {
                key: "_resetItemTime",
                value: function() {
                    this._timeLeft = h.a.itemAlive,
                    this._timeLeft += N.a.getPassiveItemValue(A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_ITEMLIFE)
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y,
                    this.gameScene.isGamePaused || (null != this._landedWall && this._landedWall.wallType != A.a.WALL.WALL_TYPE.CONV_BELT ? (this._timeLeft -= t / 1e3,
                    h.a.isBT ? this._timeLeft <= 0 && (this.mySprite.alpha -= t / 1e3 * this._vanishSpeed,
                    this.mySprite.alpha <= .3 && this.myOnDestroy()) : this._timeLeft <= 0 ? this.myOnDestroy() : this._vanishTick < e && this._timeLeft <= this._vanishSpeed && (this._vanishTick = e + 100,
                    1 == this.mySprite.alpha ? this.mySprite.alpha = 0 : this.mySprite.alpha = 1)) : (this._resetItemTime(),
                    this.mySprite.alpha = 1))
                }
            }, {
                key: "myFixedPreUpdate",
                value: function(e, a, i) {
                    p()(y()(t.prototype), "myFixedPreUpdate", this).call(this, e, a, i),
                    this._landedWall = null
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    p()(y()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i),
                    this._landedWall != this._landedWallOld && (null == this._landedWall && (this.vel.y = h.a.itemGrav,
                    this.vel.x = 0),
                    this._landedWallOld = this._landedWall)
                }
            }, {
                key: "collideEdge",
                value: function(e, t, a, i, s, n, r, o) {
                    if (o.goType == A.a.GO_TYPE.PLAYER) {
                        var l = o;
                        if (l.mySprite.alpha == U.INVISIBLE_ALPHA)
                            return !0;
                        if (this._itemPickedUp(l),
                        (h.a.isBS2 || h.a.isBS3) && L.a.currentMode == L.a.MODES.TWOP) {
                            var _ = this.gameScene.players[2];
                            2 === l.playerId && (_ = this.gameScene.players[1]);
                            var c = this.gameScene.phyEngine.simulateCollisions(_._testPBodyWall, _.pos.x, _.pos.y, [v.a.LAYER.ITEM]);
                            if (c.collisions.length > 0) {
                                for (var d in c.collisions)
                                    c.collisions[d].pBody == this && this._itemPickedUp(_)
                            }
                        }
                        return this.myOnDestroy(),
                        !0
                    }
                    o.goType == A.a.GO_TYPE.WALL && e == A.a.PHY.COL_EDGE.BOTTOM && (this._landedWall = o,
                    o.wallType == A.a.WALL.WALL_TYPE.CONV_BELT ? this.vel.x = o.convBeltSpeed : this.vel.x = 0)
                }
            }, {
                key: "_itemPickedUp",
                value: function(e) {
                    switch (D.a.TaskIncrement(this.gameScene, D.a.TASK_TYPE.COLLECT_ITEM, 1, this.itemType),
                    D.a.TaskIncrement(this.gameScene, D.a.TASK_TYPE.COLLECT_ITEM_LVL, 1, L.a.currentLevel, this.itemType),
                    this.itemType) {
                    case A.a.ITEM_TYPE.POINTS1:
                        var t = 100;
                        (h.a.isBS2 || h.a.isBS3) && (t = 500),
                        this.gameScene.myGUI.addScore(t, e);
                        break;
                    case A.a.ITEM_TYPE.POINTS2:
                        t = 200;
                        (h.a.isBS2 || h.a.isBS3) && (t = 1e3),
                        this.gameScene.myGUI.addScore(t, e);
                        break;
                    case A.a.ITEM_TYPE.POINTS3:
                        t = 300;
                        (h.a.isBS2 || h.a.isBS3) && (t = 1500),
                        this.gameScene.myGUI.addScore(t, e);
                        break;
                    case A.a.ITEM_TYPE.POINTS4:
                        this.gameScene.myGUI.addScore(400, e);
                        break;
                    case A.a.ITEM_TYPE.W_SINGLE:
                        e.shotManager.switchWeapon(A.a.SHOT_TYPE.SINGLE);
                        break;
                    case A.a.ITEM_TYPE.W_HOOK:
                        e.shotManager.switchWeapon(A.a.SHOT_TYPE.HOOK);
                        break;
                    case A.a.ITEM_TYPE.W_MINE:
                        e.shotManager.switchWeapon(A.a.SHOT_TYPE.MINE);
                        break;
                    case A.a.ITEM_TYPE.W_LASER:
                        e.shotManager.switchWeapon(A.a.SHOT_TYPE.LASER);
                        break;
                    case A.a.ITEM_TYPE.E_LIFE:
                        I.a.playSound(this.gameScene, I.a.SND.ITEM_EXTRA_LIFE),
                        this.gameScene.lives.addLife(e.playerId);
                        break;
                    case A.a.ITEM_TYPE.E_TIME:
                        I.a.playSound(this.gameScene, I.a.SND.ITEM_EXTRA_TIME);
                        var a = 10;
                        (h.a.isBS2 || h.a.isBS3) && (a = 6,
                        L.a.isYouksPack() && (a = 10));
                        var i = N.a.getPassiveItemValue(A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_ETIME);
                        i > 0 && (a += i,
                        D.a.TaskIncrement(this.gameScene, D.a.TASK_TYPE.USE_UPGRADE, 1, A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_ETIME)),
                        this.gameScene.timebar.addTime(a);
                        break;
                    case A.a.ITEM_TYPE.S_PLAIN:
                        e.playerShield.addShield(b.a.SHIELD_TYPES.PLAIN);
                        break;
                    case A.a.ITEM_TYPE.S_TIME:
                        this.gameScene.itemManager.addMod(A.a.ITEM_MANAGER.MOD_TYPE.SLOW_TIME);
                        break;
                    case A.a.ITEM_TYPE.DYNAMITE:
                        this.gameScene.itemManager.addMod(A.a.ITEM_MANAGER.MOD_TYPE.DYNAMITE);
                        break;
                    case A.a.ITEM_TYPE.FREEZE:
                        this.gameScene.itemManager.addMod(A.a.ITEM_MANAGER.MOD_TYPE.FREEZE);
                        break;
                    case A.a.ITEM_TYPE.MEDAL:
                        this._spawnReason == A.a.ITEM_SPAWN_REASON.BALL && D.a.TaskIncrement(this.gameScene, D.a.TASK_TYPE.USE_UPGRADE, 1, A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_MEDAL),
                        this.gameScene.itemManager.addMod(A.a.ITEM_MANAGER.MOD_TYPE.MEDAL);
                        break;
                    case A.a.ITEM_TYPE.S_INVI:
                        e.playerShield.addShield(b.a.SHIELD_TYPES.INVINCIBLE);
                        break;
                    case A.a.ITEM_TYPE.SPEED:
                        e.speedUpPlayer();
                        break;
                    case A.a.ITEM_TYPE.W_DOUBLE:
                        e.shotManager.switchWeapon(A.a.SHOT_TYPE.DOUBLE)
                    }
                    if (O.a.gameSettings.showPickedItemName && M.a.isLazyLoaded) {
                        var s = 1;
                        if (e.pos.x < h.a.gameWidth / 2 && (s = -1),
                        e.vel.x < 0)
                            s = -.5;
                        else if (e.vel.x > 0)
                            s = .5;
                        var n = 1;
                        h.a.isBT && (n = 1.5);
                        var r = new k.a(this.gameScene,this.pos.x,this.pos.y,h.a.lazySpriteKey,"ui/itm_descr/" + this.itemType + ".png",n,f.a.RENDER_DEPTH.UNDER_GAME);
                        r.x -= r.width * s,
                        r.alpha = .8,
                        this.gameScene.add.tween({
                            targets: r,
                            duration: 450,
                            alpha: 0,
                            delay: 1100,
                            onComplete: function() {
                                r.destroy()
                            }
                        })
                    }
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    this.gameScene.itemManager.removeItem(this),
                    p()(y()(t.prototype), "myOnDestroy", this).call(this)
                }
            }], [{
                key: "_getHalfSize",
                value: function(e) {
                    if (h.a.isBT)
                        switch (e) {
                        case A.a.ITEM_TYPE.POINTS1:
                            return new T.a(10,10);
                        case A.a.ITEM_TYPE.POINTS2:
                            return new T.a(13,11.25);
                        case A.a.ITEM_TYPE.POINTS3:
                            return new T.a(12.25,11);
                        case A.a.ITEM_TYPE.POINTS4:
                            return new T.a(13.25,15.25);
                        case A.a.ITEM_TYPE.W_SINGLE:
                        case A.a.ITEM_TYPE.W_HOOK:
                        case A.a.ITEM_TYPE.W_MINE:
                            return new T.a(9,14.75);
                        case A.a.ITEM_TYPE.W_LASER:
                            return new T.a(13.75,10);
                        case A.a.ITEM_TYPE.E_LIFE:
                            return new T.a(9.5,16.25);
                        case A.a.ITEM_TYPE.S_TIME:
                            return new T.a(13.75,12.25);
                        case A.a.ITEM_TYPE.S_PLAIN:
                            return new T.a(10,11);
                        case A.a.ITEM_TYPE.E_TIME:
                            return new T.a(11.25,12.25)
                        }
                    else if (h.a.isBS2)
                        switch (e) {
                        case A.a.ITEM_TYPE.POINTS1:
                        case A.a.ITEM_TYPE.POINTS2:
                        case A.a.ITEM_TYPE.POINTS3:
                            return new T.a(11.5,9);
                        case A.a.ITEM_TYPE.W_SINGLE:
                        case A.a.ITEM_TYPE.W_DOUBLE:
                        case A.a.ITEM_TYPE.W_HOOK:
                            return new T.a(8.25,8.25);
                        case A.a.ITEM_TYPE.W_LASER:
                            return new T.a(9.75,9.75);
                        case A.a.ITEM_TYPE.E_LIFE:
                        case A.a.ITEM_TYPE.S_TIME:
                        case A.a.ITEM_TYPE.S_PLAIN:
                        case A.a.ITEM_TYPE.E_TIME:
                        case A.a.ITEM_TYPE.DYNAMITE:
                        case A.a.ITEM_TYPE.FREEZE:
                        case A.a.ITEM_TYPE.MEDAL:
                        case A.a.ITEM_TYPE.S_INVI:
                        case A.a.ITEM_TYPE.SPEED:
                            return new T.a(10.75,10.75)
                        }
                    else if (h.a.isBS3)
                        switch (e) {
                        case A.a.ITEM_TYPE.POINTS1:
                        case A.a.ITEM_TYPE.POINTS2:
                        case A.a.ITEM_TYPE.POINTS3:
                            return new T.a(4.5,9);
                        case A.a.ITEM_TYPE.W_SINGLE:
                        case A.a.ITEM_TYPE.W_DOUBLE:
                        case A.a.ITEM_TYPE.W_HOOK:
                            return new T.a(4.5,8.25);
                        case A.a.ITEM_TYPE.W_LASER:
                            return new T.a(4.5,9.75);
                        case A.a.ITEM_TYPE.E_LIFE:
                        case A.a.ITEM_TYPE.S_TIME:
                        case A.a.ITEM_TYPE.S_PLAIN:
                        case A.a.ITEM_TYPE.E_TIME:
                        case A.a.ITEM_TYPE.DYNAMITE:
                        case A.a.ITEM_TYPE.FREEZE:
                        case A.a.ITEM_TYPE.MEDAL:
                        case A.a.ITEM_TYPE.S_INVI:
                        case A.a.ITEM_TYPE.SPEED:
                            return new T.a(4.5,10.75)
                        }
                    P.a.error("Unknown item", e, "for game" + h.a.shortName)
                }
            }]),
            t
        }(E.a)
          , Y = a(56)
          , K = (a(67),
        a(31))
          , G = function(e) {
            function t() {
                return r()(this, t),
                d()(this, y()(t).apply(this, arguments))
            }
            return S()(t, e),
            l()(t, [{
                key: "myInit",
                value: function() {
                    this.modType = A.a.ITEM_MANAGER.MOD_TYPE.DYNAMITE,
                    this._popTimeStep = .5,
                    this._popTimeCounter = 0,
                    this.infoTxt_desc = this.gameScene.add.bitmapText(h.a.gameWidth / 2, h.a.gameHeight / 2, h.a.fontNames.LVL_MSG, "BOOM!", 1),
                    f.a.mySpriteDepth(f.a.RENDER_DEPTH.UNDER_GAME, this.infoTxt_desc),
                    this.infoTxt_desc.blendMode = Phaser.BlendModes.COLOR_BURN,
                    this.infoTxt_desc.setOrigin(.5, .5),
                    this.infoTxt_desc.fontSize = 40,
                    this.infoTxt_desc.alpha = 0;
                    var e = this;
                    return this.gameScene.tweens.add({
                        targets: this.infoTxt_desc,
                        fontSize: 125,
                        alpha: .85,
                        ease: "Back.easeInOut",
                        duration: 300,
                        hold: 500,
                        onComplete: function() {
                            e.gameScene.tweens.add({
                                targets: e.infoTxt_desc,
                                fontSize: 40,
                                alpha: 0,
                                ease: "Back.easeInOut",
                                duration: 1e3
                            })
                        }
                    }),
                    this
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    if (!this.gameScene.isGamePaused && (this._popTimeCounter += t / 1e3,
                    this._popTimeCounter >= this._popTimeStep)) {
                        this._popTimeCounter -= this._popTimeStep;
                        for (var a = !1, i = [], n = 0, r = Object.entries(this.gameScene.ballManager.activeBalls); n < r.length; n++) {
                            var o = s()(r[n], 2);
                            o[0];
                            o[1].forEach((function(e) {
                                i.push(e)
                            }
                            ))
                        }
                        i.forEach((function(e) {
                            e._currentState == K.a.EVENT_STATE.ACTIVE && e.ballId > 1 && !e._isMetal && (e.popBall({
                                reason: A.a.POP_REASON.DYNAMITE
                            }),
                            a = !0)
                        }
                        )),
                        a || this._removeMod()
                    }
                }
            }]),
            t
        }(w.a)
          , H = G
          , V = a(173)
          , z = function(e) {
            function t() {
                return r()(this, t),
                d()(this, y()(t).apply(this, arguments))
            }
            return S()(t, e),
            l()(t, [{
                key: "myInit",
                value: function() {
                    this.modType = A.a.ITEM_MANAGER.MOD_TYPE.MEDAL,
                    this._popTimeStep = .5,
                    this._popTimeCounter = 0,
                    this.gameScene.timebar.timebarStopped = !0,
                    this.infoTxt_desc = this.gameScene.add.bitmapText(h.a.gameWidth / 2, 150, h.a.fontNames.LVL_MSG, "WIN", 1),
                    f.a.mySpriteDepth(f.a.RENDER_DEPTH.UNDER_GAME, this.infoTxt_desc),
                    this.infoTxt_desc.blendMode = Phaser.BlendModes.ADD,
                    this.infoTxt_desc.setOrigin(.5, .5),
                    this.infoTxt_desc.fontSize = 40,
                    this.infoTxt_desc.alpha = 0;
                    var e = this;
                    return this.gameScene.tweens.add({
                        targets: this.infoTxt_desc,
                        fontSize: 125,
                        alpha: .85,
                        ease: "Back.easeInOut",
                        duration: 300,
                        hold: 500,
                        onComplete: function() {
                            e.gameScene.tweens.add({
                                targets: e.infoTxt_desc,
                                fontSize: 110,
                                alpha: 0,
                                ease: "Back.easeInOut",
                                duration: 1e3
                            })
                        }
                    }),
                    this._checkIfNoBubbles(),
                    this
                }
            }, {
                key: "_checkIfNoBubbles",
                value: function() {
                    this.gameScene.ballManager._areAllcolor_popped() && this.gameScene.ballManager._allBubblesArePopped()
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    if (!this.gameScene.isGamePaused && (this._popTimeCounter += t / 1e3,
                    this._popTimeCounter >= this._popTimeStep)) {
                        this._popTimeCounter -= this._popTimeStep;
                        for (var a = !1, i = [], n = 0, r = Object.entries(this.gameScene.ballManager.activeBalls); n < r.length; n++) {
                            var o = s()(r[n], 2);
                            o[0];
                            o[1].forEach((function(e) {
                                i.push(e)
                            }
                            ))
                        }
                        i.forEach((function(e) {
                            e._currentState == K.a.EVENT_STATE.ACTIVE && (e._isMetal || e._isWarp || (e.popBall({
                                reason: A.a.POP_REASON.MEDAL
                            }),
                            a = !0))
                        }
                        )),
                        a || this._removeMod()
                    }
                }
            }]),
            t
        }(w.a)
          , F = z
          , X = function() {
            function e(t, a) {
                r()(this, e),
                this.gameScene = t,
                this.allItems = [],
                this.allModifiers = {},
                this._bt1_possibleItems = [A.a.ITEM_TYPE.W_SINGLE, A.a.ITEM_TYPE.POINTS1, A.a.ITEM_TYPE.W_HOOK, A.a.ITEM_TYPE.POINTS2, A.a.ITEM_TYPE.E_TIME, A.a.ITEM_TYPE.W_LASER, A.a.ITEM_TYPE.POINTS3, A.a.ITEM_TYPE.S_PLAIN, A.a.ITEM_TYPE.W_MINE, A.a.ITEM_TYPE.POINTS4, A.a.ITEM_TYPE.E_LIFE, A.a.ITEM_TYPE.S_TIME],
                this._bt1_chances = [6, 7, 7, 7, 6, 6, 6, 5, 7, 5, 2, 3],
                this._bt1_levelItems = a.items,
                this._bt1_probability = a.item_prob,
                this._bs2_calculatedDrops = []
            }
            return l()(e, [{
                key: "popChecksForItem",
                value: function(e, t) {
                    h.a.isBT ? this._calcDropProbabilityBT(e, t) : this._getItemBS2(e, t)
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    for (var t = 0; t < this.allItems.length; t++)
                        if (this.allItems[t] === e) {
                            this.allItems.splice(t, 1);
                            break
                        }
                }
            }, {
                key: "_calcDropProbabilityBT",
                value: function(e, t) {
                    if (this._bt1_levelItems.includes(!0) && !(_.c(this._bt1_probability) > 0)) {
                        var a = -1;
                        do {
                            var i = _.c(this._bt1_possibleItems.length);
                            this._bt1_chances[i] >= 10 - _.c(10) + 1 && !0 === this._bt1_levelItems[i] && (a = i)
                        } while (-1 === a);
                        if (this._bt1_possibleItems[a] == A.a.ITEM_TYPE.E_LIFE) {
                            if (!0 === Y.a.levelSpawnedLife[L.a.currentLevel])
                                return;
                            Y.a.levelSpawnedLife[L.a.currentLevel] = !0
                        }
                        var s = new W(this.gameScene,e,t,this._bt1_possibleItems[a],A.a.ITEM_SPAWN_REASON.BALL);
                        this.allItems.push(s)
                    }
                }
            }, {
                key: "_prepareDropBS2",
                value: function(e) {
                    this._bs2_calculatedDrops = [];
                    for (var t = {
                        2: [0, 0, 1, 3, 7, 15],
                        4: [0, 0, 1, 5, 21, 85]
                    }, a = 0, i = 0, n = Object.entries(this.gameScene.ballManager.activeBalls); i < n.length; i++) {
                        var r = s()(n[i], 2);
                        r[0];
                        r[1].forEach((function(e) {
                            a += t[e._splitWay][e.ballId]
                        }
                        ))
                    }
                    var o = [A.a.ITEM_TYPE.NONE]
                      , l = {};
                    for (var h in e.items)
                        o.push(h),
                        0 === e.items[h] ? l[h] = 9999 : l[h] = e.items[h];
                    function c(e, t) {
                        return Math.round(Math.random() * (t - e)) + e
                    }
                    for (var d = 1; d <= a; d++) {
                        var u = 10 * N.a.getPassiveItemValue(A.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_MEDAL);
                        if (u > 0)
                            if (_.c(1e3) <= u) {
                                P.a.log("MEDAL BONUS!!."),
                                this._bs2_calculatedDrops.push(A.a.ITEM_TYPE.MEDAL);
                                continue
                            }
                        if (c(1, e.item_prob) == e.item_prob) {
                            for (var p = !0, m = c(1, o.length - 1), y = m; y <= m + o.length - 2; y++) {
                                if (l[h = o[y % (o.length - 1) + 1]] > 0) {
                                    this._bs2_calculatedDrops.push(h),
                                    l[h]--,
                                    p = !1,
                                    0 == l[h] && delete l[h];
                                    break
                                }
                            }
                            1 == p && this._bs2_calculatedDrops.push(A.a.ITEM_TYPE.NONE)
                        } else
                            this._bs2_calculatedDrops.push(A.a.ITEM_TYPE.NONE)
                    }
                    !function(e) {
                        for (var t = e.length - 1; t > 0; t--) {
                            var a = Math.floor(Math.random() * (t + 1))
                              , i = e[t];
                            e[t] = e[a],
                            e[a] = i
                        }
                    }(this._bs2_calculatedDrops),
                    P.a.log("drop options:", this._bs2_calculatedDrops, "dropTimes:" + a, "validItems", o, "itemsLeft:", l)
                }
            }, {
                key: "_getItemBS2",
                value: function(e, t) {
                    var a = this._bs2_calculatedDrops.pop();
                    null != a && a != A.a.ITEM_TYPE.NONE && this.SpawnItem_BS2(a, e, t, A.a.ITEM_SPAWN_REASON.BALL)
                }
            }, {
                key: "SpawnItem_BS2",
                value: function(e, t, a, i) {
                    if (e != A.a.ITEM_TYPE.NONE) {
                        var s = new W(this.gameScene,t,a,e,i);
                        this.allItems.push(s)
                    }
                }
            }, {
                key: "addMod",
                value: function(e) {
                    if (this.allModifiers.hasOwnProperty(e))
                        return this.allModifiers[e].modAddExisting(),
                        this.allModifiers[e];
                    P.a.log("Adding mod", e);
                    var t = [];
                    for (var a in A.a.ITEM_MANAGER.MOD_TYPE)
                        -1 != a.search("UPGRADE_") && t.push(A.a.ITEM_MANAGER.MOD_TYPE[a]);
                    var i = null;
                    return e == A.a.ITEM_MANAGER.MOD_TYPE.SLOW_TIME ? i = new C(this.gameScene).myInit() : e == A.a.ITEM_MANAGER.MOD_TYPE.DYNAMITE ? i = new H(this.gameScene).myInit() : e == A.a.ITEM_MANAGER.MOD_TYPE.FREEZE ? i = new V.a(this.gameScene).myInit() : e == A.a.ITEM_MANAGER.MOD_TYPE.MEDAL ? i = new F(this.gameScene).myInit() : t.includes(e) ? i = new U(this.gameScene).myInit(e) : P.a.error("Trying to init unknown mod:" + e),
                    this.allModifiers[e] = i,
                    i
                }
            }, {
                key: "removeMod",
                value: function(e) {
                    delete this.allModifiers[e]
                }
            }]),
            e
        }();
        t.a = X
    },
    253: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(102)
          , l = a(10)
          , h = a.n(l)
          , _ = a(19)
          , c = a.n(_)
          , d = a(7)
          , u = a.n(d)
          , p = a(11)
          , m = a.n(p)
          , y = a(16)
          , g = a(0)
          , S = a(12)
          , E = a(8)
          , f = a(1)
          , T = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                (a = h()(this, u()(t).call(this, e)))._singleShotWidth = 8,
                (g.a.isBS2 || g.a.isBS3) && (a._singleShotWidth = 5),
                a
            }
            return m()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    c()(u()(t.prototype), "myInit", this).call(this),
                    this.shotType = f.a.SHOT_TYPE.SINGLE,
                    this.shotOrigin = new y.a(this.player.pos.x,this.player.pos.y + this.player.sizeHalf.y),
                    this.pos = this.player.pos.copy(),
                    this._pBodyResize(new y.a(this._singleShotWidth,this.player.size.y)),
                    this.vel.y = -16;
                    var e = "shots/single_spiral.png";
                    return 2 == this.player.playerId && (e = "shots/single_spiral_p2.png"),
                    (g.a.isBS2 || g.a.isBS3) && (e = "shots/single_frm1.png",
                    2 == this.player.playerId && (e = "shots/single_frm1_p2.png")),
                    this.mySprite = new E.a(this.gameScene,this.pos.x,this.pos.y,g.a.spriteKey,e,1,this.myRenderDepth),
                    this.mySprite.setOrigin(.5, 0),
                    (g.a.isBS2 || g.a.isBS3) && (this.mySprite.anims.play("singleShot"),
                    2 == this.player.playerId && this.mySprite.anims.play("singleShot_p2")),
                    this.mySound = S.a.playSound(this.gameScene, S.a.SND.SHOT_SINGLE),
                    this.myUpdate(),
                    this
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, t) {
                    this._pBodyResize(new y.a(this.size.x,this.shotOrigin.y - this.pos.y + this.sizeHalf.y))
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y - this.sizeHalf.y,
                    this.mySprite.setCrop(0, 0, this.mySprite.width, this.shotOrigin.y - this.pos.y + this.sizeHalf.y)
                }
            }, {
                key: "myOnPause",
                value: function(e) {
                    c()(u()(t.prototype), "myOnPause", this).call(this, e),
                    e ? this.mySprite.anims.pause() : this.mySprite.anims.resume()
                }
            }]),
            t
        }(o.a)
          , v = (a(76),
        a(51))
          , b = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                (a = h()(this, u()(t).call(this, e))).isHooked = !1,
                a
            }
            return m()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    return c()(u()(t.prototype), "myInit", this).call(this),
                    (g.a.isBS2 || g.a.isBS3) && (this.mySprite.anims.stop(),
                    this.mySprite.setFrame("shots/hook_in_air.png"),
                    2 == this.player.playerId && this.mySprite.setFrame("shots/hook_in_air_p2.png"),
                    null != this.mySound && this.mySound.stop(),
                    this.mySound = S.a.playSound(this.gameScene, S.a.SND.HOOK_FLYING)),
                    this
                }
            }, {
                key: "collideEdge",
                value: function(e, a, i, s, n, r, o, l) {
                    return !(l.goType != f.a.GO_TYPE.WALL || !this.playerShotLadderWall(l)) || (e == f.a.PHY.COL_EDGE.TOP && l.goType == f.a.GO_TYPE.WALL && l.wallType != f.a.WALL.WALL_TYPE.BREAKABLE ? 0 == l.isStatic ? (this.myOnDestroy(),
                    !0) : (this.shotType = f.a.SHOT_TYPE.HOOK,
                    S.a.playSound(this.gameScene, S.a.SND.HOOK_ATTACHED),
                    this.pos.y = this.shotOrigin.y - (this.shotOrigin.y - l._p2.y) / 2,
                    this.vel.y = 0,
                    this.mySprite.setFrame("shots/hook.png"),
                    2 == this.player.playerId && this.mySprite.setFrame("shots/hook_p2.png"),
                    this.makeDepthAndScale(this.mySprite),
                    this._pBodyResize(new y.a(this.size.x,this.shotOrigin.y - l._p2.y)),
                    this.myFixedPostUpdate(),
                    this.myUpdate(),
                    this.isHooked = !0,
                    !0) : c()(u()(t.prototype), "collideEdge", this).call(this, e, a, i, s, n, r, o, l))
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    this.isHooked || c()(u()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i)
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this.isHooked || c()(u()(t.prototype), "myUpdate", this).call(this)
                }
            }]),
            t
        }(T)
          , k = a(3)
          , P = a(24)
          , L = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                (a = h()(this, u()(t).call(this, e))).laserTrail1 = null,
                a.laserTrail2 = null,
                a.laserTrail1Offset = null,
                a.laserTrail2Offset = null,
                a
            }
            return m()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    c()(u()(t.prototype), "myInit", this).call(this),
                    this.shotType = f.a.SHOT_TYPE.LASER,
                    this.pos = this.player.pos.copy(),
                    this.pos.y = this.player._p1.y + 10;
                    var e = "shots/laser.png";
                    if (g.a.isBT || g.a.isBS2)
                        2 == this.player.playerId && (e = "shots/laser_p2.png");
                    else if (g.a.isBS3) {
                        e = "shots/laser/star_" + (P.c(7) + 1) + ".png"
                    }
                    if (this.mySprite = new E.a(this.gameScene,this.pos.x,this.pos.y,g.a.spriteKey,e,1,this.myRenderDepth),
                    this.mySprite.setOrigin(.5, 0),
                    g.a.isBS3) {
                        var a = "shots/laser/star_" + (P.c(7) + 1) + ".png";
                        this.laserTrail1 = new E.a(this.gameScene,this.pos.x,this.pos.y,g.a.spriteKey,a,1,this.myRenderDepth),
                        this.laserTrail1.scale = .6,
                        this.laserTrail1.angle = P.a(0, 360),
                        this.laserTrail1Offset = new y.a(P.a(-4, 4),24);
                        var i = "shots/laser/star_" + (P.c(7) + 1) + ".png";
                        this.laserTrail2 = new E.a(this.gameScene,this.pos.x,this.pos.y,g.a.spriteKey,i,1,this.myRenderDepth),
                        this.laserTrail2.scale = .45,
                        this.laserTrail2.angle = P.a(0, 360),
                        this.laserTrail2Offset = new y.a(P.a(-4, 4),34)
                    }
                    var s = this.mySprite.displayHeight
                      , n = this.mySprite.displayWidth;
                    if (g.a.isBS3 && (s = 20,
                    n = 20),
                    this._pBodyResize(new y.a(s,n)),
                    g.a.isBS3 ? this.mySound = S.a.playRandom(this.gameScene, [S.a.SND.SHOOT_LASER1, S.a.SND.SHOOT_LASER2, S.a.SND.SHOOT_LASER3]) : this.mySound = S.a.playSound(this.gameScene, S.a.SND.SHOT_LASER),
                    g.a.isBT)
                        this.vel.y = -20,
                        this.acc.y = -14;
                    else if (g.a.isBS2) {
                        if (this.vel.y = -60,
                        Math.random() < .5) {
                            var r = new E.a(this.gameScene,this.player.pos.x,this.player.pos.y,g.a.spriteKey,"shots/laser_leaf/leaf1.png",1,k.a.RENDER_DEPTH.UNDER_GAME);
                            this.player._leafLaserNum++,
                            this.player._leafLaserNum % 2 == 0 && (r.flipX = !0),
                            r.anims.play("laser_leaf"),
                            r.once(Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE, (function() {
                                r.destroy()
                            }
                            ))
                        }
                    } else if (g.a.isBS3) {
                        this.vel.y = -60;
                        for (var o = 1; o <= 3; o++) {
                            var l = Math.random() * Math.PI * 2
                              , h = 25 * Math.cos(l)
                              , _ = 25 * Math.sin(l)
                              , d = new E.a(this.gameScene,this.player.pos.x,this.player.pos.y - g.a.playerCollH / 2,g.a.spriteKey,"shots/laser/star_" + (P.c(7) + 1) + ".png",1,k.a.RENDER_DEPTH.UNDER_GAME);
                            d.scale = .75,
                            this.gameScene.add.tween({
                                duration: 140,
                                targets: d,
                                x: this.player.pos.x + h,
                                y: this.player.pos.y + _ - g.a.playerCollH / 2,
                                scale: .5,
                                angle: P.a(-720, 720),
                                onComplete: function() {
                                    this.destroy()
                                },
                                onCompleteScope: d
                            })
                        }
                    }
                    return this.myUpdate(),
                    this
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, t) {
                    if (g.a.isBT) {
                        var a = this.size.y - t * this.vel.y / 1.5
                          , i = new y.a(this.size.x,a);
                        this._pBodyResize(i)
                    }
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    g.a.isBT ? (this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y - this.sizeHalf.y,
                    this.mySprite.displayHeight = -this.vel.y / 3) : g.a.isBS2 ? (this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y) : g.a.isBS3 && (this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y,
                    this.laserTrail1.x = this.pos.x + this.laserTrail1Offset.x,
                    this.laserTrail1.y = this.pos.y + this.laserTrail1Offset.y,
                    this.laserTrail2.x = this.pos.x + this.laserTrail2Offset.x,
                    this.laserTrail2.y = this.pos.y + this.laserTrail2Offset.y)
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    g.a.isBS3 && (this.laserTrail1.destroy(),
                    this.laserTrail2.destroy()),
                    c()(u()(t.prototype), "myOnDestroy", this).call(this)
                }
            }]),
            t
        }(o.a)
          , A = a(23)
          , I = function(e) {
            function t(e) {
                var a;
                s()(this, t),
                void 0 === e && console.error("Cant create Shot without all parameters. Something is undefined." + e);
                var i = e.player.pos
                  , n = new y.a(i.x - 5,i.y + 12)
                  , r = new y.a(i.x + 5,i.y + 17);
                return (a = h()(this, u()(t).call(this, e.gameScene, A.a.LAYER.ITEM, A.a.LAYERS_ITEM, n, r))).shotManager = e,
                a.player = e.player,
                a._mineCanShoot = !1,
                a
            }
            return m()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    return S.a.playSound(this.gameScene, S.a.SND.MINE_DIGIN),
                    this.myRenderDepth = k.a.RENDER_DEPTH.UNDER_GAME,
                    this.mySprite = new E.a(this.gameScene,this.player.pos.x,this.player.pos.y + this.player.sizeHalf.y,g.a.spriteKey,"shots/mine_ani/mine_idle.png"),
                    this.mySprite.anims.play("mine_digin"),
                    this.mySprite.on("animationcomplete", this.mineAnimFinished, this),
                    this.makeDepthAndScale(this.mySprite),
                    this
                }
            }, {
                key: "mineAnimFinished",
                value: function(e, t) {
                    this._mineCanShoot = !0,
                    this.mySprite.setFrame("shots/mine_ani/mine_idle.png")
                }
            }, {
                key: "mineCanShoot",
                value: function() {
                    return this._mineCanShoot
                }
            }, {
                key: "removeMineCase",
                value: function() {
                    var e = this;
                    this._mineCanShoot = !1,
                    this.gameScene.add.tween({
                        targets: this.mySprite,
                        alpha: 0,
                        duration: 500,
                        ease: "Power2"
                    }),
                    this.gameScene.add.tween({
                        targets: this.mySprite,
                        y: this.mySprite.y + 3,
                        duration: 500,
                        ease: "Power2",
                        onCompleteScope: this,
                        onComplete: function() {
                            return e.myOnDestroy()
                        }
                    })
                }
            }, {
                key: "collideEdge",
                value: function(e, t, a, i, s, n, r, o) {
                    if (o.goType == f.a.GO_TYPE.PLAYER)
                        return o != this.shotManager.player || (!this.mineCanShoot() || (this.shotManager.player.myInput.fire() && (this.shotManager.paralizePlayer(200),
                        this.myOnDestroy()),
                        !0))
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    c()(u()(t.prototype), "myOnDestroy", this).call(this),
                    this.shotManager.droppedMine == this && (this.shotManager.droppedMine = null)
                }
            }]),
            t
        }(v.a)
          , M = function(e) {
            function t() {
                return s()(this, t),
                h()(this, u()(t).apply(this, arguments))
            }
            return m()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    c()(u()(t.prototype), "myInit", this).call(this),
                    this.shotType = f.a.SHOT_TYPE.MINE,
                    this.shotOrigin = new y.a(this.shotManager.droppedMine.pos.x,this.shotManager.droppedMine.pos.y),
                    this.pos = this.shotManager.droppedMine.pos.copy(),
                    this._pBodyResize(new y.a(4,2)),
                    this.vel.y = -42;
                    var e = "shots/mine_shot.png";
                    return 2 == this.player.playerId && (e = "shots/mine_shot_p2.png"),
                    this.mySprite = this.gameScene.add.tileSprite(this.pos.x, this.pos.y, 0, 0, g.a.spriteKey, e),
                    this.mySprite.setOrigin(.5, 0),
                    this.makeDepthAndScale(this.mySprite),
                    this.mySound = S.a.playSound(this.gameScene, S.a.SND.MINE_SHOT),
                    this.myUpdate(),
                    this
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, t) {
                    var a = this.shotOrigin.y - this.pos.y + this.sizeHalf.y;
                    a > this.mySprite.displayHeight && (a = this.mySprite.displayHeight),
                    this._pBodyResize(new y.a(4,a))
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y - this.sizeHalf.y,
                    this.mySprite.setCrop(0, 0, this.mySprite.width, this.shotOrigin.y - this.pos.y + this.sizeHalf.y)
                }
            }]),
            t
        }(o.a)
          , O = M
          , D = (a(43),
        a(2))
          , R = a(13)
          , B = a(9)
          , w = function() {
            function e(t) {
                s()(this, e),
                this.gameScene = t.gameScene,
                this.player = t,
                this._activeShotType = f.a.SHOT_TYPE.SINGLE,
                this._activeShots = [],
                this.droppedMine = null,
                this.cantShootTimer = 0,
                this.switchWeaponTween = null,
                this.accuracyBonus = !0
            }
            return r()(e, [{
                key: "playerFired",
                value: function(e) {
                    if (!(this.player.paralizedUntil > e || this.cantShootTimer > e))
                        if (this._activeShotType == f.a.SHOT_TYPE.SINGLE || this._activeShotType == f.a.SHOT_TYPE.DOUBLE || this._activeShotType == f.a.SHOT_TYPE.HOOK) {
                            if (this._activeShotType == f.a.SHOT_TYPE.SINGLE && this._shotsTypeActive(f.a.SHOT_TYPE.SINGLE) >= 1)
                                return;
                            if (this._activeShotType == f.a.SHOT_TYPE.HOOK && this._shotsTypeActive(f.a.SHOT_TYPE.SINGLE) >= 1)
                                return;
                            if (this._activeShotType == f.a.SHOT_TYPE.DOUBLE && this._shotsTypeActive(f.a.SHOT_TYPE.SINGLE) >= 2)
                                return;
                            if (this._activeShotType == f.a.SHOT_TYPE.HOOK)
                                for (var t = 0; t < this._activeShots.length; t++)
                                    if (this._activeShots[t].shotType == f.a.SHOT_TYPE.HOOK && this._activeShots[t].isHooked) {
                                        this._activeShots[t].myOnDestroy();
                                        break
                                    }
                            this.addActiveShot()
                        } else if (this._activeShotType == f.a.SHOT_TYPE.LASER) {
                            if (g.a.isBT && this._shotsTypeActive(f.a.SHOT_TYPE.LASER) >= 1)
                                return;
                            this.addActiveShot()
                        } else if (this._activeShotType == f.a.SHOT_TYPE.MINE)
                            if (null == this.droppedMine)
                                this.droppedMine = new I(this).myInit();
                            else {
                                if (this._shotsTypeActive(f.a.SHOT_TYPE.MINE) >= 1)
                                    return;
                                if (!this.droppedMine.mineCanShoot())
                                    return;
                                this.addActiveShot()
                            }
                }
            }, {
                key: "switchWeapon",
                value: function(e) {
                    if (D.a.log("ShotManager", "Switching weapon to:", e),
                    this._activeShotType != e && (this._activeShotType = e,
                    g.a.isBS2 || g.a.isBS3)) {
                        this.gameScene.myGUI.activeWeapon[this.player.playerId].setFrame("ui/ingame/interface_" + this._activeShotType + ".png"),
                        this.gameScene.myGUI.activeWeaponSwitch[this.player.playerId].alpha = .5,
                        null != this.switchWeaponTween && this.switchWeaponTween.stop();
                        var t = this;
                        this.switchWeaponTween = this.gameScene.add.tween({
                            targets: this.gameScene.myGUI.activeWeaponSwitch[this.player.playerId],
                            alpha: .9,
                            ease: "Elastic",
                            duration: 150,
                            onComplete: function(e) {
                                t.switchWeaponTween = t.gameScene.add.tween({
                                    targets: t.gameScene.myGUI.activeWeaponSwitch[t.player.playerId],
                                    alpha: 0,
                                    duration: 450
                                })
                            }
                        })
                    }
                }
            }, {
                key: "removeShot",
                value: function(e) {
                    for (var t = 0; t < this._activeShots.length; t++)
                        if (this._activeShots[t] === e) {
                            this._activeShots.splice(t, 1);
                            break
                        }
                }
            }, {
                key: "addActiveShot",
                value: function() {
                    R.a.TaskIncrement(this.gameScene, R.a.TASK_TYPE.SHOT_WEAPON, 1, this._activeShotType),
                    R.a.TaskIncrementDontNotify(this.gameScene, R.a.TASK_TYPE.SHOT_ANY_WEAPON_ON_LVL, 1, B.a.currentLevel),
                    this._activeShotType == f.a.SHOT_TYPE.SINGLE || this._activeShotType == f.a.SHOT_TYPE.DOUBLE ? this._activeShots.push(new T(this).myInit()) : this._activeShotType == f.a.SHOT_TYPE.HOOK ? this._activeShots.push(new b(this).myInit()) : this._activeShotType == f.a.SHOT_TYPE.LASER ? this._activeShots.push(new L(this).myInit()) : this._activeShotType == f.a.SHOT_TYPE.MINE && this._activeShots.push(new O(this).myInit()),
                    this.paralizePlayer(),
                    null != this.droppedMine && this._activeShotType != f.a.SHOT_TYPE.MINE && this.droppedMine.removeMineCase()
                }
            }, {
                key: "paralizePlayer",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = e
                      , a = 0;
                    g.a.isBT && 0 === e ? (this._activeShotType == f.a.SHOT_TYPE.SINGLE && (t = 110),
                    this._activeShotType == f.a.SHOT_TYPE.HOOK && (t = 110),
                    this._activeShotType == f.a.SHOT_TYPE.LASER && (t = 70),
                    this._activeShotType == f.a.SHOT_TYPE.MINE && (t = 0)) : (g.a.isBS2 || g.a.isBS3) && 0 == e && (a = 150,
                    this._activeShotType == f.a.SHOT_TYPE.SINGLE && (t = 75),
                    this._activeShotType == f.a.SHOT_TYPE.DOUBLE && (t = 75),
                    this._activeShotType == f.a.SHOT_TYPE.HOOK && (t = 75),
                    this._activeShotType == f.a.SHOT_TYPE.LASER && (t = 75)),
                    this.player.paralizedUntil = this.gameScene.gameTime + t,
                    this.cantShootTimer = this.gameScene.gameTime + a
                }
            }, {
                key: "_shotsTypeActive",
                value: function(e) {
                    for (var t = 0, a = 0; a < this._activeShots.length; a++)
                        this._activeShots[a].shotType == e && t++;
                    return t
                }
            }]),
            e
        }();
        t.a = w
    },
    254: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(0)
          , p = a(18)
          , m = a(103)
          , y = a(37)
          , g = a(57)
          , S = a(2)
          , E = a(32)
          , f = a(15)
          , T = a(4)
          , v = a(135)
          , b = (a(83),
        a(104))
          , k = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "initialize",
                value: function(t) {
                    if (S.a.log("REMOTE", "Initializing RemoteSettings"),
                    S.a.forceRSOff)
                        return S.a.error("REMOTE", "Remote Settings are off for debugging"),
                        void t.remoteSettingsCallStart();
                    if (!p.a.isCordova && 0 == S.a.forceNewsOn)
                        return S.a.log("REMOTE", "Close RS. Not active on this platform:" + p.a.myTarget),
                        void t.remoteSettingsCallStart();
                    t.time.delayedCall(5e3, (function() {
                        S.a.log("REMOTE", "Timer for remotesettings passed, continue game if not already?"),
                        t.remoteSettingsCallStart()
                    }
                    ));
                    var a = new XMLHttpRequest;
                    a.open("POST", E.a.GAME_SUPERVISOR, !0),
                    a.onerror = function(e) {
                        S.a.log("REMOTE", "RS error?!"),
                        S.a.log("REMOTE", e)
                    }
                    ,
                    a.onload = function() {
                        S.a.log("REMOTE", "Received data", this.response);
                        try {
                            var a = JSON.parse(this.response);
                            if (S.a.forceNewsOn && (S.a.error("REMOTE", "DEBUGGER. Forcing news."),
                            a = JSON.parse(S.a.forceNewsOnJSON)),
                            e.loaded = a,
                            S.a.log("REMOTE", "My ads server:", y.a.adServer),
                            a.hasOwnProperty("breakBetweenAds") && (y.a.adServer._breakBetweenAds = a.breakBetweenAds),
                            a.hasOwnProperty("noAdsBeforeLevel") && (y.a.adServer._noAdsBeforeLevel = a.noAdsBeforeLevel),
                            a.hasOwnProperty("fillerAdFrequency") && (b.a._fillerAdFrequency = a.fillerAdFrequency),
                            a.hasOwnProperty("news"))
                                return S.a.log("REMOTE", "RS got news", a.news, t),
                                void (v.a.newsObj = new v.a(a.news,t))
                        } catch (e) {
                            S.a.error("REMOTE", "Can't decode server JSON.", this.response, e)
                        }
                        t.remoteSettingsCallStart()
                    }
                    ,
                    T.a.gameSettings.hasOwnProperty("cohort") || (T.a.gameSettings.cohort = Math.floor(10 * Math.random()) + 1,
                    T.a.saveUserSettings());
                    var i = {
                        game: u.a.shortName,
                        version: u.a.gameVersion,
                        platform: p.a.myTarget,
                        mobile: f.a.isMobile,
                        ios: f.a.isIOS,
                        android: f.a.isAndroid,
                        cohort: T.a.gameSettings.cohort
                    };
                    S.a.log("REMOTE", "request sent", i, JSON.stringify(i)),
                    a.send(JSON.stringify(i))
                }
            }]),
            e
        }();
        k.loaded = {};
        var P = k
          , L = a(53)
          , A = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "OverrideDefault",
                value: function(t, a, i, s) {
                    var n = null;
                    if (this.checkKey(t)) {
                        if (n = this.create(t, a),
                        Array.isArray(i))
                            for (var r = 1 === i.length, o = 0; o < n.source.length; o++) {
                                var l = r ? i[0] : i[o];
                                e.MyJSONArray(n, o, l)
                            }
                        else
                            e.MyJSONArray(n, 0, i);
                        s && n.setDataSource(s),
                        this.emit("addtexture", t, n)
                    }
                    return n
                }
            }, {
                key: "MyJSONArray",
                value: function(t, a, i) {
                    if (S.a.warn("Using custom MyJSONArray to decode TexturePacker", t, a, i),
                    i.frames || i.textures) {
                        var s = t.source[a];
                        t.add("__BASE", a, 0, 0, s.width, s.height);
                        for (var n, r = Array.isArray(i.textures) ? i.textures[a].frames : i.frames, o = 0; o < r.length; o++) {
                            var l = r[o];
                            null == (n = t.add(l.f, a, l.x, l.y, l.w, l.h)) && S.a.error("Erro parsing JSON from TexturePacker. Make sure to parse for BT (save in IDE)."),
                            n.setTrim(l.l, l.r, l.v, l.z, l.b, l.g),
                            l.m && (n.customPivot = !0,
                            n.pivotX = l.m,
                            n.pivotY = l.n),
                            n.customData = e.Clone(l)
                        }
                        for (var h in i)
                            "frames" !== h && (Array.isArray(i[h]) ? t.customData[h] = i[h].slice(0) : t.customData[h] = i[h]);
                        return t
                    }
                    S.a.warn("Invalid Texture Atlas JSON Array")
                }
            }, {
                key: "Clone",
                value: function(e) {
                    var t = {};
                    for (var a in e)
                        Array.isArray(e[a]) ? t[a] = e[a].slice(0) : t[a] = e[a];
                    return t
                }
            }]),
            e
        }()
          , I = a(29)
          , M = a(70)
          , O = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "BootScene"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "preload",
                value: function() {
                    S.a.printDebuggerOptions(),
                    S.a.log("Preloading bootscene.."),
                    T.a.loadUserSettings(),
                    S.a.log("MyStorageUtils inited."),
                    S.a.resetSkins && (T.a.gameSettings.selectedSkinID = "",
                    T.a.gameSettings.skinsNewViewed = [],
                    T.a.gameSettings.skinsUnlocked = [],
                    T.a.gameSettings.skinsUnlockedUsed = []),
                    this.textures.addAtlasJSONArray = A.OverrideDefault,
                    this.load.on("progress", (function(e) {
                        p.a.isFacebook && FBInstant.setLoadingProgress(100 * e)
                    }
                    )),
                    this.cameras.main.transparent = !1,
                    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#ff5b01"),
                    u.a.loaderBeforeGameStarts(this),
                    M.a.init(this)
                }
            }, {
                key: "create",
                value: function() {
                    var e = this;
                    S.a.log("Bootscene starting.."),
                    u.a.animations.forEach((function(t) {
                        e.anims.create(t)
                    }
                    ));
                    var t = this.add.bitmapText(u.a.gameWidth / 2, .82 * u.a.gameHeight, u.a.fontNames.MENU, "Loading...", 30);
                    if (t.setOrigin(0, .5),
                    this.time.addEvent({
                        delay: 400,
                        callback: function() {
                            t.text += "."
                        },
                        callbackScope: this,
                        loop: !0
                    }),
                    this.load.maxParallelDownloads = 128,
                    this.game.sound.pauseOnBlur = !1,
                    p.a.isFacebook) {
                        var a = this;
                        FBInstant.startGameAsync().then((function() {
                            S.a.log("FB", "FBInstant.startGameAsync called"),
                            a._loadFacebookStorage()
                        }
                        ))
                    } else
                        this.gameIsLoaded()
                }
            }, {
                key: "_loadFacebookStorage",
                value: function() {
                    S.a.always("FB", "Loading FBstorage..."),
                    this.add.bitmapText(u.a.gameWidth / 2, u.a.gameHeight / 2, u.a.fontNames.MENU, "LOADING SAVE DATA...", 55).setOrigin(.5, .5),
                    m.a.load(this.gameIsLoaded.bind(this))
                }
            }, {
                key: "gameIsLoaded",
                value: function() {
                    f.a.initialize(this.game),
                    I.a.Init(),
                    p.a.isPoki && PokiSDK.gameLoadingFinished(),
                    S.a.log("Starting game.");
                    var e = window.location != window.parent.location ? document.referrer : document.location.href;
                    S.a.log("Host:" + window.location.hostname + ", url:" + e),
                    P.initialize(this),
                    S.a.log("MyRemoteSettings inited."),
                    y.a.initialize(this),
                    S.a.log("Ads inited."),
                    g.a.initialize(this),
                    S.a.log("Leaderboard inited."),
                    L.a.initializeStore(),
                    this.input.keyboard.addCapture("LEFT,RIGHT,UP,DOWN,SPACE")
                }
            }, {
                key: "remoteSettingsCallStart",
                value: function() {
                    if (S.a.log("--- remoteSettingsCallStart - game started ---"),
                    this.time.clearPendingEvents(),
                    p.a.isCordova || S.a.loadLazyImmediate) {
                        S.a.log("Avoiding loading TitleScene - waiting for LazyLoadScene to load TitleScene..."),
                        this.scene.run("LazyloadScene", {
                            continueToTitleScene: function() {
                                S.a.log("LazyLoad", "called function `continueToTitleScene()`..."),
                                this.scene.start("TitleScene")
                            }
                            .bind(this)
                        })
                    } else
                        S.a.log("Loading TitleScene - LazyloadScene is loading in the background..."),
                        this.scene.run("LazyloadScene"),
                        this.scene.start("TitleScene")
                }
            }]),
            t
        }(Phaser.Scene);
        t.a = O
    },
    26: function(e, t, a) {
        "use strict";
        t.a = {
            BT1: {
                MAINMENU_START1: "1 PLAYER",
                MAINMENU_START2: "2 PLAYERS",
                MAINMENU_SETTINGS: "SETTINGS",
                MAINMENU_SCORES: "SCORES",
                MAINMENU_QUIT: "QUIT",
                MAINMENU_HELP: "HELP",
                MAINMENU_BRAG: "BRAG",
                SETTINGS_PL1: "PLAYER 1",
                SETTINGS_PL2: "PLAYER 2",
                SETTINGS_BACK: "BACK",
                GAMEOVER_MENU: "MENU",
                PAUSE_BACK: "BACK TO GAME",
                PAUSE_QUIT: "QUIT GAME",
                GAME_COMPLETED: "FINISH",
                REMOVE_ADS: "REMOVE ADS",
                RESTORE_IAP: "RESTORE PURCHASE",
                REVIVE: "REVIVE",
                RESET: "RESET",
                SHARE: "SHARE"
            },
            BS2: {
                MAINMENU_START1: "SINGLE PLAYER",
                MAINMENU_STAYING1: "STAYING ALIVE",
                MAINMENU_START2: "TWO PLAYERS",
                MAINMENU_SETTINGS: "CONTROLS",
                MAINMENU_HELP: "HELP",
                MAINMENU_SCORES: "HIGHSCORES",
                MAINMENU_EDITOR: "LEVEL EDITOR",
                MAINMENU_QUIT: "QUIT",
                MAINMENU_MORELVLS: "MORE LEVELS!",
                MAINMENU_BRAG: "BRAG",
                MENU_BACK: "MENU",
                RESTORE_IAP: "RESTORE PURCHASE",
                EDITOR_NEW_PACK: "CREATE PACK",
                EDITOR_LVLS_MY: "MY LEVELS",
                EDITOR_LVLS_1P: "1P LEVELS",
                EDITOR_LVLS_2P: "2P LEVELS",
                EDITOR_LVLS_IMPORT: "IMPORT",
                EDITOR_BACK: "BACK",
                EDITOR_PACKNAME: "SET PACK NAME",
                CUSTOM_BT25: "MISSION IMPOSSIBLE",
                CUSTOM_MASTERQ: "MASTER QUEST",
                CUSTOM_FEW_MOREDYZ: "FEW MORE DAYZ",
                CUSTOM_BS1_IN_BS2: "BS1 in BS2",
                CUSTOM_BS2_TEAM: "BS2 Teamwork",
                CUSTOM_45_EXPANSION: "45 Expansion",
                CUSTOM_SECOND_TIME: "Second Time",
                CUSTOM_EXPERT_ADV: "Expert Adventures",
                CUSTOM_IMPOSSIBLE_Q: "IMPOSSIBLE QUEST",
                CUSTOM_EMPTY: "- LOAD PACK -"
            },
            BS3: {
                MAINMENU_START1: "SINGLE PLAYER",
                MAINMENU_START2: "TWO PLAYERS",
                MAINMENU_SETTINGS: "CONTROLS",
                MAINMENU_HELP: "HELP",
                MAINMENU_SCORES: "HIGHSCORES",
                MAINMENU_QUIT: "QUIT",
                MAINMENU_BRAG: "BRAG",
                MENU_BACK: "MENU",
                RESTORE_IAP: "RESTORE PURCHASE"
            }
        }
    },
    27: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return g
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = a(0)
          , _ = a(21)
          , c = a(1)
          , d = a(2)
          , u = a(9)
          , p = a(29)
          , m = a(4)
          , y = a(25)
          , g = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "init",
                value: function() {
                    h.a.isBS2 ? e.ITEMS = e._ITEMS_BS2 : h.a.isBS3 && (e.ITEMS = e._ITEMS_BS3);
                    for (var t = 0; t < e.ITEMS.length; t++) {
                        null == m.a.gameSettings.levelPointsDistributed[t] && (m.a.gameSettings.levelPointsDistributed[t] = []);
                        var a = e.ITEMS[t]
                          , i = a.upgradePrice.length;
                        a.upgradeVal.length == i && a.upgradePrice.length == i || d.a.error("MyUpgrades", "Item values not set up correctly.", a.upgradePrice.length, a.upgradeVal.length, a.rankReq.length),
                        m.a.gameSettings.levelPointsDistributed[t].length != i && (d.a.warn("MyUpgrades", "Upgrade levels slots doesn't match gamesettings saved value. Resetting", JSON.stringify(m.a.gameSettings.levelPointsDistributed[t]), ", should be:", i),
                        m.a.gameSettings.levelPointsDistributed[t] = []);
                        for (var s = 0; s < e.ITEMS[t].upgradePrice.length; s++)
                            null == m.a.gameSettings.levelPointsDistributed[t][s] && (m.a.gameSettings.levelPointsDistributed[t][s] = 0)
                    }
                    d.a.log("UPGRADES", "Started with items:", e.ITEMS)
                }
            }, {
                key: "renderButton",
                value: function(t, a, i, s) {
                    if (!(e.LevelPoints < 1)) {
                        var n = 80 * s
                          , r = 80 * s;
                        new _.a(t,a,i,n,r,{
                            icon: "retention/upgrade_btn.png",
                            iconSpriteKey: h.a.lazySpriteKey
                        },e.clickedOpenUpgrades.bind(t, t)).myIcon.setScale(s);
                        var o = e.UndistributedLevelPoints;
                        if (o > 0) {
                            var l = 13904693;
                            h.a.isBS3 && (l = 458987);
                            var c = -n / 2
                              , d = -r / 2
                              , u = t.add.graphics();
                            u.fillStyle(l, 1),
                            u.lineStyle(4, 14475529, 1),
                            u.fillCircle(0, 0, 15),
                            u.strokeCircle(0, 0, 15);
                            var p = t.add.bitmapText(-2, 1, h.a.lazyFontNames.RETENTION_XP, e.UndistributedLevelPoints, 15);
                            p.setOrigin(.5, .5);
                            var g = t.add.container(a + c, i + d);
                            g.add([u, p]);
                            var S = !1;
                            e: for (var E = 0; E < e.ITEMS.length; E++)
                                for (var f = 0; f < e.ITEMS[E].upgradePrice.length; f++) {
                                    var T = e.ITEMS[E].rankReq[f]
                                      , v = e.ITEMS[E].upgradePrice[f];
                                    if (y.a.CurrentLevel >= T && o >= v) {
                                        if (0 == m.a.gameSettings.levelPointsDistributed[E][f]) {
                                            S = !0;
                                            break e
                                        }
                                    } else if (y.a.CurrentLevel < T)
                                        break
                                }
                            S && t.add.tween({
                                targets: g,
                                scale: 1.21,
                                duration: 230,
                                loop: -1,
                                yoyo: !0
                            })
                        }
                    }
                }
            }, {
                key: "clickedOpenUpgrades",
                value: function(e) {
                    p.a.LogClick(p.a.CLICK_TYPE.UPGRADES),
                    e.myTransition.transitionToggle(!1, "MyUpgradesScene")
                }
            }, {
                key: "getMaxLevelForItem",
                value: function(t) {
                    for (var a = 0; a < e.ITEMS.length; a++)
                        if (e.ITEMS[a].modType == t.modType)
                            for (var i = 0; i < m.a.gameSettings.levelPointsDistributed[a].length; i++) {
                                if (0 == i && 0 == m.a.gameSettings.levelPointsDistributed[a][i])
                                    return -1;
                                if (0 == m.a.gameSettings.levelPointsDistributed[a][i])
                                    return i - 1;
                                if (i == m.a.gameSettings.levelPointsDistributed[a].length - 1)
                                    return i
                            }
                    return -1
                }
            }, {
                key: "parseActivationTime",
                value: function(e, t) {
                    return d.a.upgradeItemTime ? .97 * t.timebar.timeInitial : e.activationTime.toFixed ? t.timebar.timeInitial * e.activationTime : e.activationTime.split("s")[0]
                }
            }, {
                key: "getPassiveItemValue",
                value: function(t) {
                    if (0 == e.isUpgradeOK())
                        return 0;
                    for (var a = 0; a < e.ITEMS.length; a++)
                        if (e.ITEMS[a].modType == t) {
                            var i = e.getMaxLevelForItem(e.ITEMS[a]);
                            return -1 == i ? 0 : e.ITEMS[a].upgradeVal[i]
                        }
                    return 0
                }
            }, {
                key: "isUpgradeOK",
                value: function() {
                    return (null == m.a.gameSettings.levelEditor || null == m.a.gameSettings.levelEditor.lastLevelEdited) && null == u.a.customPack
                }
            }, {
                key: "LevelPoints",
                get: function() {
                    for (var t = m.a.gameSettings.maxLevelUnlocked[u.a.MODES.SINGLE], a = 0, i = 0; i < e.ITEMS.length; i++)
                        for (var s = 0; s < e.ITEMS[i].upgradePrice.length; s++)
                            a += e.ITEMS[i].upgradePrice[s];
                    return t <= a ? t : a
                }
            }, {
                key: "UndistributedLevelPoints",
                get: function() {
                    for (var t = 0, a = 0; a < m.a.gameSettings.levelPointsDistributed.length; a++)
                        for (var i = 0; i < m.a.gameSettings.levelPointsDistributed[a].length; i++)
                            t += m.a.gameSettings.levelPointsDistributed[a][i];
                    return e.LevelPoints - t
                }
            }]),
            e
        }();
        l()(g, "ITEMS", [{
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_SLOW,
            title: "Super slow",
            description: "Slows down bubbles\nDoesn't stack with slow-motion bonus",
            activationTime: .5,
            activationDescr: "Activates when LEVEL TIME reaches it.",
            passive: !1,
            upgradePrice: [4, 3, 3, 3, 1],
            upgradeVal: [3, 3.5, 4, 5, 6],
            rankReq: [1, 2, 4, 5, 6],
            upgradeUnits: "seconds",
            icon: "retention/item_slomo.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_PHASE,
            title: "Phase",
            description: "Bubbles can't hurt you. You can't pick up bonuses.",
            activationTime: .5,
            activationDescr: "Activates when LEVEL TIME reaches it.",
            passive: !1,
            upgradePrice: [3, 1, 1],
            upgradeVal: [3, 5, 7],
            rankReq: [2, 5, 6],
            upgradeUnits: "seconds",
            icon: "retention/item_invisible.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_LAST_BREATH,
            title: "Last breath",
            description: "If timer runs out, this upgrade will help. Grants additional few seconds of time.",
            activationTime: .035,
            activationDescr: "Activates if you run out of time.",
            passive: !1,
            upgradePrice: [2, 1],
            upgradeVal: [4, 7],
            rankReq: [3, 6],
            upgradeUnits: "seconds",
            icon: "retention/item_finalmoment.png"
        }]),
        l()(g, "_ITEMS_BS2", [{
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_ETIME,
            title: "EXTRA TIME+",
            description: "extra seconds for the EXTRA TIME BONUS",
            activationTime: .035,
            activationDescr: "",
            passive: !0,
            upgradePrice: [4, 3, 2, 2, 1],
            upgradeVal: [.5, 1, 1.5, 2, 2.5],
            rankReq: [1, 2, 4, 5, 6],
            upgradeUnits: "SEC",
            icon: "retention/item_etime.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_FREEZE,
            title: "FREEZE+",
            description: "extra seconds for FREEZE BONUS.",
            activationTime: .035,
            activationDescr: "",
            passive: !0,
            upgradePrice: [3, 3, 3],
            upgradeVal: [.35, .65, 1],
            rankReq: [2, 5, 6],
            upgradeUnits: "SEC",
            icon: "retention/item_freeze.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_ITEMLIFE,
            title: "Increased BONUS DROP life",
            description: "More time to pick up BONUS drops",
            activationTime: .5,
            activationDescr: "",
            passive: !0,
            upgradePrice: [2, 2, 2, 2],
            upgradeVal: [.5, 1, 1.5, 2],
            rankReq: [3, 4, 5, 6],
            upgradeUnits: "SEC",
            icon: "retention/item_itemlife.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK,
            title: "Spikey shield",
            description: "You hurt bubbles!",
            activationTime: .5,
            activationDescr: "Activates when LEVEL TIME reaches it.",
            passive: !1,
            upgradePrice: [3, 3, 3],
            upgradeVal: [8, 8.5, 9],
            rankReq: [4, 5, 6],
            upgradeUnits: "SEC",
            icon: "retention/item_tank.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_MEDAL,
            title: "BONUS MEDAL chance",
            description: "When bubble pops, chance for a BONUS MEDAL drop",
            activationTime: .035,
            activationDescr: "",
            passive: !0,
            upgradePrice: [4, 4, 4],
            upgradeVal: [.1, .2, .3],
            rankReq: [4, 5, 6],
            upgradeUnits: "%",
            icon: "retention/item_medal.png"
        }]),
        l()(g, "_ITEMS_BS3", [{
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_FREEZE,
            title: "FREEZE+",
            description: "extra seconds for FREEZE BONUS.",
            activationTime: .035,
            activationDescr: "",
            passive: !0,
            upgradePrice: [4, 3, 3, 2, 2],
            upgradeVal: [.2, .4, .6, .8, 1],
            rankReq: [1, 2, 4, 5, 6],
            upgradeUnits: "SEC",
            icon: "retention/item_freeze.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK,
            title: "INVINCIBLE SHIELD+",
            description: "INVINCIBLE SHIELD hurts bubbles! And extra seconds",
            activationTime: .5,
            activationDescr: "",
            passive: !0,
            upgradePrice: [3, 3, 3],
            upgradeVal: [.5, 1, 1.5],
            rankReq: [2, 5, 6],
            upgradeUnits: "SEC",
            icon: "retention/item_tank.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_LAST_BREATH,
            title: "LAST BREATH",
            description: "Grants a few more seconds, when time runs out.",
            activationTime: .035,
            activationDescr: "Activates when LEVEL TIME drops to 0",
            passive: !1,
            upgradePrice: [3, 3, 3, 3],
            upgradeVal: [4, 5, 6, 7],
            rankReq: [3, 4, 5, 6],
            upgradeUnits: "SEC",
            icon: "retention/item_last_breath.png"
        }, {
            modType: c.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_MEDAL,
            title: "BONUS MEDAL chance",
            description: "When bubble pops, chance for a BONUS MEDAL drop",
            activationTime: .035,
            activationDescr: "",
            passive: !0,
            upgradePrice: [4, 4, 4],
            upgradeVal: [.1, .2, .3],
            rankReq: [4, 5, 6],
            upgradeUnits: "%",
            icon: "retention/item_medal.png"
        }])
    },
    29: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return m
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = a(18)
          , _ = a(2)
          , c = a(0)
          , d = (a(43),
        a(9))
          , u = a(4)
          , p = a(25)
          , m = (a(15),
        function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "Init",
                value: function() {
                    if (_.a.log("MyAnalytics", "Initializing MyAnalytics... Available: ", e._isAvailablePlatform()),
                    e._isAvailablePlatform()) {
                        var t = e.GAME_INFO_WEB;
                        h.a.myTarget == h.a.TARGETS.CORDOVA && (t = "iOS" == device.platform ? e.GAME_INFO_MOBILE_IOS : e.GAME_INFO_MOBILE_ANDROID),
                        _.a.debugLog && (t = e.GAME_INFO_DEBUG),
                        window.GameAnalytics = window.GameAnalytics || function() {
                            (GameAnalytics.q = GameAnalytics.q || []).push(arguments)
                        }
                        ,
                        _.a.debugLog && _.a.logAnalytics && (_.a.log("MyAnalytics", "Keys:", t),
                        GameAnalytics("setEnabledInfoLog", !0)),
                        GameAnalytics("initialize", t[c.a.shortName].key, t[c.a.shortName].secret)
                    }
                }
            }, {
                key: "LoadSDK",
                value: function(t) {
                    if (e._isAvailablePlatform()) {
                        var a = "./assets/libs/gameanalytics.min.js";
                        _.a.debugLog && (a = "./assets/libs/gameanalytics.debug.js"),
                        t.load.script("gameanalytics", a)
                    }
                }
            }, {
                key: "LogProgression",
                value: function(t, a) {
                    if (e._isAvailablePlatform() && !a) {
                        var i = e.__getPackName();
                        if (null != i) {
                            var s = "mode_" + d.a.currentMode
                              , n = "lvl_" + d.a.currentLevel;
                            _.a.log("MyAnalytics", "LogProgression", t, i, s, n),
                            GameAnalytics("addProgressionEvent", t, i, s, n)
                        }
                    }
                }
            }, {
                key: "LogDeath",
                value: function(t, a) {
                    if (e._isAvailablePlatform() && !t) {
                        var i = e.__getPackName();
                        if (null != i) {
                            var s = "mode_" + d.a.currentMode
                              , n = "lvl_" + d.a.currentLevel;
                            GameAnalytics("addDesignEvent", "FAIL:" + i + ":" + s + ":" + n + ":" + a)
                        }
                    }
                }
            }, {
                key: "LogTaskCompleted",
                value: function(t) {
                    if (e._isAvailablePlatform()) {
                        var a = p.a.CurrentLevel;
                        GameAnalytics("addDesignEvent", "TASK:Rank_" + a + ":" + t.uid)
                    }
                }
            }, {
                key: "LogRankUpgrade",
                value: function() {
                    if (e._isAvailablePlatform()) {
                        var t = p.a.CurrentLevel;
                        GameAnalytics("addDesignEvent", "RANK:Rank_" + t)
                    }
                }
            }, {
                key: "LogClick",
                value: function(t) {
                    e._isAvailablePlatform() && (u.a.gameSettings.loggedClicks.includes(t) || (u.a.gameSettings.loggedClicks.push(t),
                    u.a.saveUserSettings(),
                    GameAnalytics("addDesignEvent", "CLICK:" + t)))
                }
            }, {
                key: "__getPackName",
                value: function() {
                    return null != d.a.customPack ? e._TRACK_PACKS.includes(d.a.customPack.packName) ? "pack_" + d.a.customPack.packName.replace(/ /g, "_") : null : "pack_" + e.__GAME_PACK_NAME
                }
            }, {
                key: "_isAvailablePlatform",
                value: function() {
                    return h.a.myTarget == h.a.TARGETS.POKI || h.a.myTarget == h.a.TARGETS.CORDOVA
                }
            }]),
            e
        }());
        l()(m, "__GAME_PACK_NAME", "_builtin_"),
        l()(m, "GAME_INFO_DEBUG", {
            bt1: {
                key: "09c1297ae5fa769e6f3f18c016110d5d",
                secret: "81b3ee53fe0f9cf851df4efe03dd3f6f0073a448"
            },
            bs2: {
                key: "09c1297ae5fa769e6f3f18c016110d5d",
                secret: "81b3ee53fe0f9cf851df4efe03dd3f6f0073a448"
            },
            bs3: {
                key: "09c1297ae5fa769e6f3f18c016110d5d",
                secret: "81b3ee53fe0f9cf851df4efe03dd3f6f0073a448"
            }
        }),
        l()(m, "GAME_INFO_WEB", {
            bt1: {
                key: "cd8ac4e764a34e0ad7593e0fdacba2a2",
                secret: "76ae49157cb7bdb82dafe38e025b62debae4e81b"
            },
            bs2: {
                key: "2d73b415de03fe77ee92dce92118da68",
                secret: "176f25b266ac7ace3ebcd253d483def4dbbddacf"
            },
            bs3: {
                key: "c096f38a4039462cebdffecf5f15b9c8",
                secret: "ef4c670bff5d3f2d9ca8b36fb8768e5e85beb08b"
            }
        }),
        l()(m, "GAME_INFO_MOBILE_ANDROID", {
            bt1: {
                key: "13b6cd302d4402a1b83cca9dad7ae9d0",
                secret: "51ffd4cbf583e46b9b78bcb8eb21790a801d7cd2"
            },
            bs2: {
                key: "16016d089977cb31c37ff1ba63a7b1b1",
                secret: "f7c0fda3d5e7a0df51dc898b2f0d4aeecf47f32b"
            },
            bs3: {
                key: "cb5073e5ab12201059597f33776e02df",
                secret: "64da46a3c7e47c0f7ffcec75ccd1a33d6b830bb1"
            }
        }),
        l()(m, "GAME_INFO_MOBILE_IOS", {
            bt1: {
                key: "884cc39f436c7f83b664a8cc8c8a6033",
                secret: "9e5a2d97ea7741b9f9cb3b6f7845e7ac61e1154b"
            },
            bs2: {
                key: "c4c4528650937143140d127b3b9bebde",
                secret: "241e2be76296b014fec392b5ce9a9b7347a3f38a"
            },
            bs3: {
                key: "5fd7f124e9160e6226690d1ffdfada5f",
                secret: "c3098265831eab6238f92950dd2e59a013cbe52d"
            }
        }),
        l()(m, "_TRACK_PACKS", ["45 Expansion", "BS1 in BS2", "BS2 Teamwork", "few more days", "Master Quest", "Mission impossible", "Second Time", "Expert Adventures", "Impossible Quest"]),
        l()(m, "EVENT", {
            PROGRESSION: {
                START: "Start",
                FAIL: "Fail",
                COMPLETE: "Complete"
            }
        }),
        l()(m, "CLICK_TYPE", {
            DISCORD: "discord",
            HELP: "help",
            SETTINGS: "settings",
            EDITOR: "editor",
            EDITOR_PLAY: "editor_play",
            UPGRADES: "upgrades",
            MYSKINS: "myskins",
            TASKS: "tasks",
            MORE_LVLS: "more_lvls",
            PACK_LOADED: "pack_loaded",
            SHARE_ALL: "share_all",
            SHARE_RANK: "share_rank",
            SHARE_LEVEL: "share_level"
        })
    },
    3: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = (a(0),
        a(31))
          , l = a(1)
          , h = a(2)
          , _ = function() {
            function e(t) {
                s()(this, e),
                this.gameScene = t,
                this.goType = l.a.GO_TYPE.NONE,
                this.myRenderDepth = e.RENDER_DEPTH.UNIMPORTANT,
                this.mySprite = null,
                this.mySound = null,
                this._didPauseSound = !1,
                this._stateSprites = [],
                this._stateData = null,
                this._currentState = o.a.EVENT_STATE.ACTIVE,
                this._createMyGameObject()
            }
            return r()(e, [{
                key: "_createMyGameObject",
                value: function() {
                    e._allGameObjects.push(this)
                }
            }, {
                key: "myInit",
                value: function() {}
            }, {
                key: "myPreUpdate",
                value: function(e, t) {}
            }, {
                key: "myUpdate",
                value: function(e, t) {}
            }, {
                key: "myOnPause",
                value: function(e) {
                    null != this.mySound && (e && this.mySound.isPlaying ? (this.mySound.pause(),
                    this._didPauseSound = !0) : this._didPauseSound && (this._didPauseSound = !1,
                    this.mySound.play()))
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    null != this.mySprite && this.mySprite.destroy(),
                    null != this.mySound && this.mySound.stop();
                    for (var t = 0; t < e._allGameObjects.length; t++)
                        if (e._allGameObjects[t] === this) {
                            e._allGameObjects.splice(t, 1);
                            break
                        }
                }
            }, {
                key: "onReceiveMyEvent",
                value: function(e, t) {}
            }, {
                key: "_onReceiveMyState",
                value: function(e, t) {
                    var a = this;
                    if (e == this._stateData.stateEvtType && t == this._stateData.stateEvtInfo)
                        if (this._stateData.stateStart == o.a.EVENT_STATE.INACTIVE && 0 == this.pbActive)
                            this.gameScene.add.tween({
                                targets: this._stateSprites,
                                alpha: 1,
                                duration: 350,
                                onComplete: function() {
                                    for (var e in a.pbActive = !0,
                                    a._currentState = o.a.EVENT_STATE.ACTIVE,
                                    a.gameScene.itemManager.allModifiers)
                                        if (e == l.a.ITEM_MANAGER.MOD_TYPE.FREEZE) {
                                            a.goType == l.a.GO_TYPE.BALL ? (a.mySprite.alpha = .5,
                                            a.isStatic = !0) : a.goType != l.a.GO_TYPE.WALL || a._wallInfo.t != l.a.WALL.WALL_TYPE.CAVEIN_BS3 && a._wallInfo.t != l.a.WALL.WALL_TYPE.MOVING || (a._frozen = !0);
                                            break
                                        }
                                    a._onStateChanged(a._currentState)
                                }
                            });
                        else if (this._stateData.stateStart == o.a.EVENT_STATE.ACTIVE && 1 == this.pbActive) {
                            this.pbActive = !1,
                            this._currentState = o.a.EVENT_STATE.INACTIVE;
                            var i = this;
                            this.gameScene.add.tween({
                                targets: this._stateSprites,
                                alpha: 0,
                                duration: 350,
                                onComplete: function() {
                                    i._onStateChanged(i._currentState),
                                    i.goType == l.a.GO_TYPE.BALL && i.gameScene.ballManager.removeBall(i)
                                }
                            })
                        }
                }
            }, {
                key: "_onStateChanged",
                value: function(e) {}
            }, {
                key: "_initializeStateEvent",
                value: function() {
                    null != this._ballInfo && null != this._ballInfo.stateData ? (this._stateData = this._ballInfo.stateData,
                    null != this.mySprite && this._stateSprites.push(this.mySprite)) : null != this._wallInfo && null != this._wallInfo.stateData && (this._stateData = this._wallInfo.stateData,
                    null != this.mySprite && (null != this.mySprite.ninePatch ? this._stateSprites.push(this.mySprite.ninePatch) : this._stateSprites.push(this.mySprite)),
                    null != this._spikeySprite && this._stateSprites.push(this._spikeySprite)),
                    null != this._stateData && (this.gameScene.myEventManager.registerForState(this, this._stateData),
                    this._stateData.stateStart == o.a.EVENT_STATE.INACTIVE && (this._stateSprites.forEach((function(e) {
                        return e.alpha = 0
                    }
                    )),
                    this.pbActive = !1,
                    this._currentState = o.a.EVENT_STATE.INACTIVE,
                    this._onStateChanged(this._currentState)))
                }
            }, {
                key: "makeDepthAndScale",
                value: function(t) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    e.mySpriteScale(t, a),
                    e.mySpriteDepth(this.myRenderDepth, t)
                }
            }], [{
                key: "mySpriteScale",
                value: function(e, t) {
                    e.scale = t
                }
            }, {
                key: "mySpriteDepth",
                value: function(t, a) {
                    null == e._depths[t] && e.myInitialize(),
                    e._depths[t]++,
                    e._depths[t] > 999 && (e._depths[t] = 0);
                    var i = e._depths[t];
                    switch (t) {
                    case e.RENDER_DEPTH.UNDER_GAME:
                        return a.setDepth(i + 3e3);
                    case e.RENDER_DEPTH.GAME:
                        return a.setDepth(i + 8e3);
                    case e.RENDER_DEPTH.LADDER:
                        return a.setDepth(i + 9e3);
                    case e.RENDER_DEPTH.PLAYER:
                        return a.setDepth(i + 1e4);
                    case e.RENDER_DEPTH.OVER_GAME:
                        return a.setDepth(i + 12e3);
                    case e.RENDER_DEPTH.BALL:
                        return a.setDepth(i + 14e3);
                    case e.RENDER_DEPTH.UIBACK:
                        return a.setDepth(i + 15e3);
                    case e.RENDER_DEPTH.UI:
                        return a.setDepth(i + 17e3);
                    case e.RENDER_DEPTH.UI_DROPDOWN:
                        return a.setDepth(i + 18e3);
                    case e.RENDER_DEPTH.UIOVER:
                        return a.setDepth(i + 19e3);
                    case e.RENDER_DEPTH.PAUSE_MENU:
                        return a.setDepth(i + 25e3);
                    case e.RENDER_DEPTH.TUTORIAL_POPUP:
                        return a.setDepth(i + 29e3);
                    case e.RENDER_DEPTH.CONTINUE_MENU:
                        return a.setDepth(i + 3e4);
                    case e.RENDER_DEPTH.GAME_POPUP:
                        return a.setDepth(i + 31e3);
                    case e.RENDER_DEPTH.TRANSITION:
                        return a.setDepth(i + 32e3);
                    case e.RENDER_DEPTH.FILLER_AD:
                        return a.setDepth(i + 34e3);
                    case e.RENDER_DEPTH.PHY_DEBUG:
                        return a.setDepth(i + 36e3)
                    }
                    h.a.error("Coulnd't set depth for :" + t)
                }
            }, {
                key: "myInitialize",
                value: function() {
                    for (var t in e._allGameObjects = [],
                    e._depths = {},
                    e.RENDER_DEPTH)
                        e._depths[e.RENDER_DEPTH[t]] = 0
                }
            }, {
                key: "doOnPause",
                value: function(t) {
                    e._allGameObjects.forEach((function(e) {
                        e.myOnPause(t)
                    }
                    ))
                }
            }, {
                key: "doPreUpdate",
                value: function(t, a) {
                    e._allGameObjects.forEach((function(e) {
                        e.myPreUpdate(t, a)
                    }
                    ))
                }
            }, {
                key: "doUpdate",
                value: function(t, a) {
                    e._allGameObjects.forEach((function(e) {
                        e.myUpdate(t, a)
                    }
                    ))
                }
            }]),
            e
        }();
        _.RENDER_DEPTH = {
            UNIMPORTANT: "notimp",
            UNDER_GAME: "undergame",
            GAME: "game",
            LADDER: "ladder",
            PLAYER: "player",
            BALL: "ball",
            OVER_GAME: "overgame",
            UIBACK: "uiback",
            UI: "ui",
            UI_DROPDOWN: "ui_dd",
            UIOVER: "uiover",
            PAUSE_MENU: "pausemenu",
            TUTORIAL_POPUP: "tut_popup",
            CONTINUE_MENU: "contmenu",
            GAME_POPUP: "game_popup",
            FILLER_AD: "filler_ad",
            TRANSITION: "transition",
            PHY_DEBUG: "phydebug"
        },
        _._depths = {},
        _._allGameObjects = [],
        t.a = _
    },
    30: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(51)
          , p = a(16)
          , m = a(3)
          , y = a(0)
          , g = a(23)
          , S = a(22)
          , E = a(1)
          , f = function(e) {
            function t(e, a) {
                var i;
                s()(this, t);
                var n = new p.a(a.x,a.y)
                  , r = new p.a(a.w,a.h)
                  , o = new p.a(n.x - r.x / 2,n.y - r.y / 2)
                  , h = new p.a(n.x + r.x / 2,n.y + r.y / 2)
                  , c = g.a.LAYER.WALL;
                return a.t == E.a.WALL.WALL_TYPE.TELEPORT && (c = g.a.LAYER.TELEPORT),
                (i = l()(this, _()(t).call(this, e, c, g.a.LAYERS_WALL, o, h, {
                    isStatic: !0
                })))._eventType = a.eType || null,
                i._eventInfo = a.eInfo || null,
                i.wallType = E.a.WALL.WALL_TYPE.NORMAL,
                i._softWall = !1,
                null != a.softWall && (i._softWall = a.softWall),
                i._invisWall = !1,
                null != a.invisWall && (i._invisWall = a.invisWall),
                i._invisWallTimer = null,
                i._INVIS_TIMER = 1.2,
                i._isSpikey = a.spikey || !1,
                i._spikeySprite = null,
                i._wallInfo = a,
                i._collisionPriority = -1,
                i
            }
            return d()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    return this.goType = E.a.GO_TYPE.WALL,
                    this.myRenderDepth = m.a.RENDER_DEPTH.GAME,
                    null != this._eventType && this.gameScene.myEventManager.registerForEvent(this, this._eventType),
                    this._isSpikey && (this._spikeySprite = t.GetSpikeySprite(this.gameScene, this._wallInfo.w, this._wallInfo.h),
                    this._spikeySprite.x = this._wallInfo.x,
                    this._spikeySprite.y = this._wallInfo.y + this._wallInfo.h / 2,
                    m.a.mySpriteDepth(m.a.RENDER_DEPTH.GAME, this._spikeySprite)),
                    this.drawWall(),
                    this
                }
            }, {
                key: "drawWall",
                value: function() {
                    if (y.a.isBT)
                        this.mySprite = this.gameScene.add.tileSprite(this.pos.x - this.sizeHalf.x, this.pos.y - this.sizeHalf.y, this.size.x, this.size.y, y.a.spriteKey, "ui/back_brick.png"),
                        this.mySprite.setDisplayOrigin(0, 0),
                        this.makeDepthAndScale(this.mySprite);
                    else if (y.a.isBS2) {
                        this.mySprite = new S.a(this.gameScene,this.pos.x,this.pos.y,this.size.x,this.size.y,"walls/basic.png",{
                            top: 7,
                            bottom: 7,
                            left: 7,
                            right: 7
                        }),
                        this.mySprite.setDepthNinePatch(this.myRenderDepth),
                        this.showInvisibleWall(!1)
                    } else
                        y.a.isBS3 && (this.mySprite = this.gameScene.add.tileSprite(this.pos.x - this.sizeHalf.x, this.pos.y - this.sizeHalf.y, this.size.x, this.size.y, y.a.spriteKey, "walls/basic.png"),
                        this.mySprite.setDisplayOrigin(0, 0),
                        this.makeDepthAndScale(this.mySprite))
                }
            }, {
                key: "showInvisibleWall",
                value: function(e) {
                    0 != this._invisWall && (null != this._invisWallTimer && this._invisWallTimer.remove(),
                    this.mySprite.ninePatch ? this.mySprite.setVisibleNinePatch(e) : this.mySprite.visible = e,
                    this._spikeySprite && (this._spikeySprite.visible = e),
                    e && (this._invisWallTimer = this.gameScene.time.addEvent({
                        delay: 1e3 * this._INVIS_TIMER,
                        callbackScope: this,
                        callback: function() {
                            this.showInvisibleWall(!1)
                        }
                    })))
                }
            }], [{
                key: "GetSpikeySprite",
                value: function(e, t, a) {
                    var i = e.add.tileSprite(0, 0, t, 5, y.a.spriteKey, "walls/wall_spikey.psd");
                    return i.setOrigin(.5, 0),
                    i.y = a / 2,
                    i
                }
            }]),
            t
        }(u.a);
        t.a = f
    },
    31: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = (a(3),
        a(2))
          , l = function() {
            function e(t) {
                s()(this, e),
                this.gameScene = t,
                this._registeredEventReceivers = {},
                this._registeredStateReceivers = {}
            }
            return r()(e, [{
                key: "registerForEvent",
                value: function(e, t) {
                    this._registeredEventReceivers[t] = this._registeredEventReceivers[t] || [],
                    this._registeredEventReceivers[t].push(e)
                }
            }, {
                key: "registerForState",
                value: function(e, t) {
                    var a = t.stateEvtType;
                    this._registeredStateReceivers[a] = this._registeredStateReceivers[a] || [],
                    this._registeredStateReceivers[a].push(e)
                }
            }, {
                key: "dispatchEvent",
                value: function(e, t) {
                    o.a.log("MyEventManager", "DispatchEvent", e, t),
                    null != this._registeredEventReceivers[e] && this._registeredEventReceivers[e].forEach((function(a) {
                        a.onReceiveMyEvent(e, t)
                    }
                    )),
                    null != this._registeredStateReceivers[e] && this._registeredStateReceivers[e].forEach((function(a) {
                        a._onReceiveMyState(e, t)
                    }
                    ))
                }
            }]),
            e
        }();
        l.EVENT_TYPE = {
            NONE: "none",
            COLOR_POPPED: "color_popped",
            ALL_POPPED: "allpopped",
            TIME_END: "time_end",
            GAME_START: "gamestart",
            GAME_LOADED: "gameloaded",
            TUT_WATCHED: "tut_watched",
            PLAYER_DIED: "player_died"
        },
        l.EVENT_STATE = {
            NONE: "none",
            ACTIVE: "act",
            INACTIVE: "inact"
        },
        t.a = l
    },
    32: function(e, t, a) {
        "use strict";
        function i() {}
        i.REBUBBLED_HOMEPAGE = "https://rebubbled.com",
        i.REBUBBLED_HOMEPAGE_SHORT = "rebubbled.com",
        i.BSA_HOMEPAGE = "https://bubble-adventures.com",
        i.BSA_APPLE = "https://itunes.apple.com/app/id947676130",
        i.BSA_GOOGLE = "https://play.google.com/store/apps/details?id=com.rebubbled.bubblestruggle",
        i.BTC_APPLE = "https://itunes.apple.com/app/id1453111037",
        i.BTC_GOOGLE = "https://play.google.com/store/apps/details?id=com.kresogames.bubbletrouble",
        i.BS2_APPLE = "https://itunes.apple.com/app/id1643027061",
        i.BS2_GOOGLE = "https://play.google.com/store/apps/details?id=com.kresogames.bubblestruggle2",
        i.BS3_APPLE = "https://itunes.apple.com/app/id1643029539",
        i.BS3_GOOGLE = "https://play.google.com/store/apps/details?id=com.kresogames.bubbletrouble3",
        i.GAME_SUPERVISOR_HOST = "https://kresogames.com",
        i.GAME_SUPERVISOR = i.GAME_SUPERVISOR_HOST + "/game_supervisor.php",
        i.DISCORD_INTRODUCEYOURSELF_CHANNEL = "https://discord.gg/9g7dsQ2kYN",
        i.PRIVACY_POLICY = {
            BT1: "https://kresogames.com/policy/bubble_trouble.php",
            BS2: "https://kresogames.com/policy/bubble_struggle_2.php",
            BS3: "https://kresogames.com/policy/bubble_trouble_3.php"
        },
        t.a = i
    },
    35: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = (a(43),
        function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, _()(t).call(this, e.gameScene))).playerOwner = e,
                i.gameScene = e.gameScene,
                i.controlInfo = a,
                i
            }
            return d()(t, e),
            r()(t, [{
                key: "left",
                value: function() {
                    console.error("left() not yet defined!")
                }
            }, {
                key: "right",
                value: function() {
                    console.error("right() not yet defined!")
                }
            }, {
                key: "up",
                value: function() {
                    console.error("up() not yet defined!")
                }
            }, {
                key: "down",
                value: function() {
                    console.error("down() not yet defined!")
                }
            }, {
                key: "fire",
                value: function() {
                    console.error("fire() not yet defined!")
                }
            }]),
            t
        }(a(3).a));
        u.INPUT_TYPE = {
            keyboard: "keyboard",
            mouse: "mouse",
            touch: "touch"
        },
        u.INPUT_ACTIONS = {
            LEFT: "l",
            RIGHT: "r",
            UP: "u",
            DOWN: "d",
            SHOOT: "f"
        },
        t.a = u
    },
    37: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(3)
          , y = a(8)
          , g = a(0)
          , S = a(2)
          , E = a(4)
          , f = a(9)
          , T = a(18)
          , v = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, [{
                key: "init",
                value: function(e) {
                    return this.inputManager = e.input.manager,
                    this._breakBetweenAds = 0,
                    this._timerLastAdShown = Math.round(Date.now() / 1e3),
                    this._noAdsBeforeLevel = 2,
                    this._adInterstitialPreloaded = !1,
                    this._adRewardedPreloaded = !1,
                    this
                }
            }, {
                key: "showAd",
                value: function(e, t, a) {
                    this.inputManager.keyboard.enabled = !1
                }
            }, {
                key: "cleanUpAdView",
                value: function() {
                    this.inputManager.keyboard.enabled = !0
                }
            }, {
                key: "isAdBreak",
                value: function() {
                    if (E.a.gameSettings.maxLevelUnlocked[f.a.MODES.SINGLE] <= this._noAdsBeforeLevel && E.a.gameSettings.maxLevelUnlocked[f.a.MODES.TWOP] <= this._noAdsBeforeLevel)
                        return !0;
                    if (this._breakBetweenAds > 0) {
                        var e = Math.round(Date.now() / 1e3);
                        return !(e > this._timerLastAdShown + this._breakBetweenAds) || (this._timerLastAdShown = e,
                        !1)
                    }
                    return !1
                }
            }, {
                key: "preloadAds",
                value: function() {}
            }]),
            e
        }()
          , b = function(e) {
            function t() {
                return s()(this, t),
                l()(this, d()(t).apply(this, arguments))
            }
            return p()(t, e),
            r()(t, [{
                key: "init",
                value: function(e) {
                    return _()(d()(t.prototype), "init", this).call(this, e),
                    this.firstTimeRun = !0,
                    this
                }
            }, {
                key: "showAd",
                value: function(e, a, i) {
                    var s = this;
                    _()(d()(t.prototype), "showAd", this).call(this, e, a, i),
                    S.a.log("AD", "Showing POKI ad."),
                    this.no_click_background = new y.a(e,-g.a.gameWidth,-g.a.gameHeight,g.a.spriteKey,"ui/black.png",1,m.a.RENDER_DEPTH.FILLER_AD),
                    this.no_click_background.alpha = .01,
                    this.no_click_background.setDisplaySize(3 * g.a.gameWidth, 3 * g.a.gameHeight),
                    this.no_click_background.setDisplayOrigin(.5),
                    this.no_click_background.setInteractive(),
                    a == B.PLACEMENTS.INTERSTITIAL ? PokiSDK.commercialBreak().then((function() {
                        S.a.log("AD", "Commercial break finished, proceeding to game"),
                        _()(d()(t.prototype), "cleanUpAdView", s).call(s),
                        null != i && i(),
                        s.no_click_background.destroy()
                    }
                    )) : a == B.PLACEMENTS.REWARD && PokiSDK.rewardedBreak().then((function(e) {
                        S.a.log("AD", "Commercial break finished, proceeding to game"),
                        _()(d()(t.prototype), "cleanUpAdView", s).call(s),
                        null != i && i(e),
                        s.no_click_background.destroy()
                    }
                    ))
                }
            }, {
                key: "isAdBreak",
                value: function() {
                    return this.firstTimeRun ? (this.firstTimeRun = !1,
                    !1) : _()(d()(t.prototype), "isAdBreak", this).call(this)
                }
            }]),
            t
        }(v)
          , k = a(105)
          , P = a.n(k)
          , L = a(133)
          , A = a.n(L)
          , I = a(104)
          , M = function(e) {
            function t() {
                var e;
                return s()(this, t),
                (e = l()(this, d()(t).call(this)))._callbackReference = null,
                e._rewardReference = !1,
                e.interstitial_id = "989530068639301_1138323570426616",
                e.rewarded_id = "989530068639301_1053162418942732",
                S.a.log("AD", "API", FBInstant.getSupportedAPIs()),
                e.fbInterstitialAd = null,
                e.fbRewardedAd = null,
                e._adInterstitialPreloaded = !1,
                e._adRewardedPreloaded = !1,
                e._FB_PRELOAD_FREQUENCY = 30,
                e._lastFbPreloadRequestTime = 0,
                e
            }
            var a, i;
            return p()(t, e),
            r()(t, [{
                key: "init",
                value: function(e) {
                    return _()(d()(t.prototype), "init", this).call(this, e),
                    this._breakBetweenAds = 120,
                    this.preloadAds(),
                    this
                }
            }, {
                key: "showAd",
                value: (i = A()(P.a.mark((function e(t, a, i) {
                    var s;
                    return P.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this._callbackReference = i,
                                this._rewardReference = !1,
                                S.a.log("AD", "Cordova showAd", a, t),
                                s = this,
                                a != B.PLACEMENTS.INTERSTITIAL || !this._adInterstitialPreloaded) {
                                    e.next = 11;
                                    break
                                }
                                return S.a.log("AD", "Actually showing interstitial admob"),
                                this._adInterstitialPreloaded = !1,
                                this.fbInterstitialAd.showAsync().then((function() {
                                    S.a.log("AD", "Interstitial ad showed successfully"),
                                    s.doCallback()
                                }
                                )).catch((function(e) {
                                    S.a.log("AD", "Interstitial ad NOT showed successfully"),
                                    S.a.log("AD", "ERR MSG:", e.message),
                                    s.doCallback()
                                }
                                )),
                                e.abrupt("return");
                            case 11:
                                if (a != B.PLACEMENTS.REWARD || !this._adRewardedPreloaded) {
                                    e.next = 16;
                                    break
                                }
                                return S.a.log("AD", "Actually showing rewarded admob"),
                                this._adRewardedPreloaded = !1,
                                this.fbRewardedAd.showAsync().then((function() {
                                    S.a.log("AD", "Rewarded ad showed successfully"),
                                    s._rewardReference = !0,
                                    s.doCallback()
                                }
                                )).catch((function(e) {
                                    S.a.log("AD", "Rewarded ad NOT showed successfully"),
                                    S.a.log("AD", "ERR MSG:", e.message),
                                    s.doCallback()
                                }
                                )),
                                e.abrupt("return");
                            case 16:
                                S.a.log("AD", "Dont have a FB ad ready, next try reloading them. And try showing the filler ad."),
                                this.preloadAds(),
                                I.a.spawnFillerAd(t, a, i, !0);
                            case 19:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t, a) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "preloadAds",
                value: (a = A()(P.a.mark((function e(t) {
                    var a, i;
                    return P.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (S.a.log("AD", "FB Preloading ads..."),
                                !((a = Math.floor(Date.now() / 1e3)) - this._lastFbPreloadRequestTime < this._FB_PRELOAD_FREQUENCY)) {
                                    e.next = 5;
                                    break
                                }
                                return S.a.log("AD", "FB not preloading since not enough seconds passed. FB limitation is 1 preload call per seconds:" + this._FB_PRELOAD_FREQUENCY),
                                e.abrupt("return");
                            case 5:
                                this._lastFbPreloadRequestTime = a,
                                i = this,
                                this._adRewardedPreloaded || FBInstant.getRewardedVideoAsync(this.rewarded_id).then((function(e) {
                                    return S.a.log("AD", "GOT REWARDED FB"),
                                    i.fbInterstitialAd = e,
                                    i.fbInterstitialAd.loadAsync().then((function() {
                                        S.a.log("AD", "REWARDED LOADED."),
                                        i._adRewardedPreloaded = !0
                                    }
                                    ))
                                }
                                )).then((function() {
                                    S.a.log("AD", "Rewarded video preloaded")
                                }
                                )).catch((function(e) {
                                    S.a.error("AD", "Rewarded video failed to preload: " + e.message, e)
                                }
                                )),
                                this._adInterstitialPreloaded || FBInstant.getInterstitialAdAsync(this.interstitial_id).then((function(e) {
                                    return S.a.log("AD", "GOT INTERSTITIAL FB"),
                                    i.fbRewardedAd = e,
                                    i.fbRewardedAd.loadAsync().then((function() {
                                        S.a.log("AD", "INTERSTITIAL LOADED."),
                                        i._adInterstitialPreloaded = !0
                                    }
                                    ))
                                }
                                )).then((function() {
                                    S.a.log("AD", "Interstitial preloaded")
                                }
                                )).catch((function(e) {
                                    S.a.error("AD", "Interstitial failed to preload: " + e.message, e)
                                }
                                ));
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "doCallback",
                value: function() {
                    null != this._callbackReference && (this._callbackReference(this._rewardReference),
                    this._callbackReference = null,
                    this._rewardReference = !1)
                }
            }]),
            t
        }(v)
          , O = function(e) {
            function t() {
                var e;
                return s()(this, t),
                (e = l()(this, d()(t).call(this)))._callbackReference = null,
                e._rewardReference = !1,
                e.ADID_DEBUG = {
                    ios: {
                        interstitial: "ca-app-pub-3940256099942544/1033173712",
                        rewarded: "ca-app-pub-3940256099942544/5224354917"
                    },
                    android: {
                        interstitial: "ca-app-pub-3940256099942544/1033173712",
                        rewarded: "ca-app-pub-3940256099942544/5224354917"
                    }
                },
                e.ADID_BT1 = {
                    ios: {
                        interstitial: "ca-app-pub-8079897977490520/9200723749",
                        rewarded: "ca-app-pub-8079897977490520/2771046767"
                    },
                    android: {
                        interstitial: "ca-app-pub-8079897977490520/7831801750",
                        rewarded: "ca-app-pub-8079897977490520/7640230067"
                    }
                },
                e.ADID_BS2 = {
                    ios: {
                        interstitial: "ca-app-pub-8079897977490520/2870608018",
                        rewarded: "ca-app-pub-8079897977490520/4321885514"
                    },
                    android: {
                        interstitial: "ca-app-pub-8079897977490520/8286015406",
                        rewarded: "ca-app-pub-8079897977490520/2547174385"
                    }
                },
                e.ADID_BS3 = {
                    ios: {
                        interstitial: "ca-app-pub-8079897977490520/6370869328",
                        rewarded: "ca-app-pub-8079897977490520/9791239589"
                    },
                    android: {
                        interstitial: "ca-app-pub-8079897977490520/6562441013",
                        rewarded: "ca-app-pub-8079897977490520/9982811274"
                    }
                },
                e.gameIDS = e.ADID_BT1,
                e.admobIDS = {},
                e.admobInterstitialAd = null,
                e.admobRewardedAd = null,
                e._adInterstitialPreloaded = !1,
                e._adRewardedPreloaded = !1,
                S.a.debugLog && (document.addEventListener("admob.interstitial.close", (function(e) {
                    console.log("?AD INTERSTITIAL", "close" + JSON.stringify(e))
                }
                )),
                document.addEventListener("admob.interstitial.loadFail", (function(e) {
                    console.log("?AD INTERSTITIAL", "loadFail" + JSON.stringify(e))
                }
                )),
                document.addEventListener("admob.rewarded.open", (function(e) {
                    console.log("?AD REWARDED", "open" + JSON.stringify(e))
                }
                )),
                document.addEventListener("admob.rewarded.loadFail", (function(e) {
                    console.log("?AD REWARDED", "loadFail" + JSON.stringify(e))
                }
                )),
                document.addEventListener("admob.rewarded.showFail", (function(e) {
                    console.log("?AD REWARDED", "showFail" + JSON.stringify(e))
                }
                )),
                document.addEventListener("admob.rewarded.close", (function(e) {
                    console.log("?AD REWARDED", "close" + JSON.stringify(e))
                }
                )),
                document.addEventListener("admob.rewarded.reward", (function(e) {
                    console.log("?AD REWARDED", "reward" + JSON.stringify(e))
                }
                ))),
                e
            }
            var a;
            return p()(t, e),
            r()(t, [{
                key: "init",
                value: function(e) {
                    if (_()(d()(t.prototype), "init", this).call(this, e),
                    this._breakBetweenAds = 120,
                    g.a.isBS2 ? this.gameIDS = this.ADID_BS2 : g.a.isBS3 && (this.gameIDS = this.ADID_BS3),
                    S.a.useAdMobTestAds) {
                        S.a.log("ADS", "Trying to use test ads...");
                        admob.configure({
                            testDeviceIds: ["362f94af12a3b64b98d54ce227cd7fef", "D79CDF96D1DF8F394DB0D4CD9DD0965D"]
                        }),
                        this.gameIDS = this.ADID_DEBUG
                    }
                    /(android)/i.test(navigator.userAgent) ? this.admobIDS = {
                        interstitial: this.gameIDS.android.interstitial,
                        rewarded: this.gameIDS.android.rewarded
                    } : /(ipod|iphone|ipad)/i.test(navigator.userAgent) ? this.admobIDS = {
                        interstitial: this.gameIDS.ios.interstitial,
                        rewarded: this.gameIDS.ios.rewarded
                    } : this.admobIDS = {
                        interstitial: this.gameIDS.android.interstitial,
                        rewarded: this.gameIDS.android.rewarded
                    },
                    S.a.log("ADS", "Using admobIDS:", this.admobIDS),
                    this.admobInterstitialAd = new admob.InterstitialAd({
                        adUnitId: this.admobIDS.interstitial
                    }),
                    this.admobRewardedAd = new admob.RewardedAd({
                        adUnitId: this.admobIDS.rewarded
                    });
                    var a = this;
                    return S.a.log("Inited Cordova ads."),
                    this.admobInterstitialAd.on("load", (function(e) {
                        S.a.log("AD EVT", "Success load interstitial ad.", a.admobInterstitialAd, e),
                        a._adInterstitialPreloaded = !0
                    }
                    )),
                    this.admobInterstitialAd.on("showfail", (function(e) {
                        S.a.log("AD EVT", "Interstitial event showfail", e),
                        a.doCallback()
                    }
                    )),
                    this.admobInterstitialAd.on("dismiss", (function(e) {
                        S.a.log("AD EVT", "Interstitial event dismiss", e),
                        a.doCallback()
                    }
                    )),
                    this.admobRewardedAd.on("load", (function(e) {
                        S.a.log("AD EVT", "Success load rewarded ad.", a.admobRewardedAd, e),
                        a._adRewardedPreloaded = !0
                    }
                    )),
                    this.admobRewardedAd.on("showfail", (function(e) {
                        S.a.log("AD EVT", "Rewarded event showfail", e),
                        a.doCallback(!1)
                    }
                    )),
                    this.admobRewardedAd.on("reward", (function(e) {
                        S.a.log("AD EVT", "reward", "Rewarded event reward", e),
                        a._rewardReference = !0
                    }
                    )),
                    this.admobRewardedAd.on("dismiss", (function(e) {
                        S.a.log("AD EVT", "reward", "Rewarded event dismiss", e),
                        a.doCallback()
                    }
                    )),
                    S.a.debugLog && (this.admobInterstitialAd.on("loadfail", (function(e) {
                        S.a.log("AD EVT", "Interstitial event loadfail", e)
                    }
                    )),
                    this.admobInterstitialAd.on("show", (function(e) {
                        S.a.log("AD EVT", "Interstitial event show", e)
                    }
                    )),
                    this.admobInterstitialAd.on("impression", (function(e) {
                        S.a.log("AD EVT", "Interstitial event impression", e)
                    }
                    )),
                    this.admobRewardedAd.on("loadfail", (function(e) {
                        S.a.log("AD EVT", "Rewarded event loadfail", e)
                    }
                    )),
                    this.admobRewardedAd.on("show", (function(e) {
                        S.a.log("AD EVT", "Rewarded event show", e)
                    }
                    )),
                    this.admobRewardedAd.on("impression", (function(e) {
                        S.a.log("AD EVT", "reward", "Rewarded event impression", e)
                    }
                    ))),
                    this.preloadAds(),
                    this
                }
            }, {
                key: "showAd",
                value: (a = A()(P.a.mark((function e(t, a, i) {
                    return P.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this._callbackReference = i,
                                this._rewardReference = !1,
                                S.a.log("AD", "Cordova showAd", a, t),
                                a != B.PLACEMENTS.INTERSTITIAL || !this._adInterstitialPreloaded) {
                                    e.next = 10;
                                    break
                                }
                                return S.a.log("AD", "Actually showing interstitial admob"),
                                this.admobInterstitialAd.show(),
                                this._adInterstitialPreloaded = !1,
                                e.abrupt("return");
                            case 10:
                                if (a != B.PLACEMENTS.REWARD || !this._adRewardedPreloaded) {
                                    e.next = 15;
                                    break
                                }
                                return S.a.log("AD", "Actually showing rewarded admob"),
                                this.admobRewardedAd.show(),
                                this._adRewardedPreloaded = !1,
                                e.abrupt("return");
                            case 15:
                                S.a.log("AD", "Dont have an admob ready, next try reloading them. And try showing the filler ad."),
                                this.preloadAds(),
                                I.a.spawnFillerAd(t, a, i, !0);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t, i) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "preloadAds",
                value: function() {
                    S.a.log("AD", "ADMOB Preloading ads..."),
                    this._adInterstitialPreloaded || (S.a.log("ADS", "Preloading interstitial.."),
                    this.admobInterstitialAd.load()),
                    this._adRewardedPreloaded || (S.a.log("ADS", "Preloading reward.."),
                    this.admobRewardedAd.load())
                }
            }, {
                key: "doCallback",
                value: function() {
                    null != this._callbackReference && (this._callbackReference(this._rewardReference),
                    this._callbackReference = null,
                    this._rewardReference = !1)
                }
            }]),
            t
        }(v)
          , D = a(83);
        function R() {}
        R.showAd = function(e, t, a) {
            if (S.a.log("AD", "Trying to show an ad of kind:", t),
            t == this.PLACEMENTS.INTERSTITIAL) {
                if (T.a.isCordova && E.a.gameSettings.noads && !S.a.noAdIgnore)
                    return S.a.log("AD", "Not showing ad, purchased full."),
                    void a();
                if (1 == R.adServer.isAdBreak() && !S.a.noAdBreak)
                    return S.a.log("AD", "Too early for ad. isAdBreak returns TRUE"),
                    void a();
                if (1 == I.a.spawnFillerAd(e, t, a))
                    return void S.a.log("AD", "Showing filler ad. spawnFillerAd() returns true")
            }
            S.a.log("AD", "Proceeding to showAd of current MyAd platform..."),
            R.adServer.showAd(e, t, a)
        }
        ,
        R.initialize = function(e) {
            S.a.log("AD", "Initializing MyAds:" + T.a.myTarget),
            D.a.scenePlugin = e.scene,
            T.a.isPoki ? R.adServer = (new b).init(e) : T.a.isFacebook ? R.adServer = (new M).init(e) : T.a.isCordova && (R.adServer = (new O).init(e)),
            S.a.log("AD SERVER set", R.adServer)
        }
        ,
        R.PLACEMENTS = {
            INTERSTITIAL: "interstitial",
            REWARD: "reward"
        },
        R.adServer = null,
        R.adBlockerEnabled = !1;
        var B = t.a = R
    },
    38: function(e, t, a) {
        "use strict";
        var i = a(454)
          , s = a.n(i)
          , n = a(5)
          , r = a.n(n)
          , o = a(6)
          , l = a.n(o)
          , h = a(17)
          , _ = a.n(h)
          , c = (a(21),
        a(2))
          , d = function() {
            function e() {
                r()(this, e)
            }
            return l()(e, null, [{
                key: "_registerSceneButton",
                value: function(t) {
                    t.myScene.hasOwnProperty("scene") && (e._activeScene = t.btnGroup,
                    e._sceneButtons.hasOwnProperty(t.btnGroup) || (e._sceneButtons[t.btnGroup] = []),
                    e._addedListenerToScene || (e._addedListenerToScene = !0,
                    t.myScene.sys.events.once("shutdown", e._destroyScene),
                    t.myScene.input.keyboard.on("keydown-LEFT", e._moveSelectedCursor.bind(null, "L")),
                    t.myScene.input.keyboard.on("keydown-RIGHT", e._moveSelectedCursor.bind(null, "R")),
                    t.myScene.input.keyboard.on("keydown-UP", e._moveSelectedCursor.bind(null, "U")),
                    t.myScene.input.keyboard.on("keydown-DOWN", e._moveSelectedCursor.bind(null, "D")),
                    t.myScene.input.keyboard.on("keydown-SPACE", e._triggerSelectedButton),
                    t.myScene.input.keyboard.on("keydown-ENTER", e._triggerSelectedButton)),
                    e._sceneButtons[t.btnGroup].push(t))
                }
            }, {
                key: "_unregisterSceneButton",
                value: function(t) {
                    null != e._sceneButtons && null != e._sceneButtons[t.btnGroup] && delete e._sceneButtons[t.btnGroup]
                }
            }, {
                key: "_destroyScene",
                value: function() {
                    c.a.log("EXTEND KEYBOARD", "_destroyScene"),
                    e._activeScene = null,
                    e._sceneButtons = {},
                    e._addedListenerToScene = !1
                }
            }, {
                key: "_triggerSelectedButton",
                value: function(t) {
                    if (!e._disableAllButtons) {
                        null != t && t.stopImmediatePropagation();
                        var a = e._getSelectedBtn();
                        a && a.actionClick()
                    }
                }
            }, {
                key: "_moveSelectedCursor",
                value: function(t) {
                    if (!e._disableAllButtons) {
                        var a = e._getSelectedBtn();
                        if (null != a) {
                            var i = s()(e._sceneButtons[e._activeScene])
                              , n = []
                              , r = n.indexOf(a);
                            if (-1 !== r && n.splice(r, 1),
                            i.forEach((function(e) {
                                ("L" == t && e.mid_x < a.mid_x || "R" == t && e.mid_x > a.mid_x || "U" == t && e.mid_y < a.mid_y || "D" == t && e.mid_y > a.mid_y) && n.push(e)
                            }
                            )),
                            0 != n.length) {
                                var o = function(e) {
                                    return Math.pow(a.mid_x - e.mid_x, 2) + Math.pow(a.mid_y - e.mid_y, 2)
                                };
                                n.sort((function(e, t) {
                                    var a = o(e)
                                      , i = o(t);
                                    if (a < i)
                                        return -1;
                                    if (i < a)
                                        return 1;
                                    if (a == i) {
                                        if (e.mid_y < t.mid_y)
                                            return -1;
                                        if (t.mid_y < e.mid_y)
                                            return 1
                                    }
                                    return 0
                                }
                                ));
                                var l = e._getFirstWithinAngle(t, a, n);
                                null == l && (l = n[0]),
                                e.selectButton(l)
                            }
                        }
                    }
                }
            }, {
                key: "_getFirstWithinAngle",
                value: function(e, t, a) {
                    function i(e) {
                        return e < 360 ? i(e += 360) : e > 720 ? i(e -= 360) : e
                    }
                    var s = 0;
                    "L" == e ? s = 180 : "D" == e ? s = 90 : "U" == e && (s = 270);
                    for (var n = i(s - 44), r = i(s + 44), o = 0; o < a.length; o++) {
                        var l = a[o];
                        if (l.isVisible) {
                            var h = 180 * Math.atan2(l.mid_y - t.mid_y, l.mid_x - t.mid_x) / Math.PI;
                            if ((h = i(h)) > n && h < r)
                                return l
                        }
                    }
                    return null
                }
            }, {
                key: "_getSelectedBtn",
                value: function() {
                    var t = e._sceneButtons[e._activeScene];
                    if (null == t)
                        return null;
                    for (var a = 0; a < t.length; a++)
                        if (t[a].focused && t[a].isVisible && t[a].btnGroup == e._activeScene)
                            return t[a];
                    return null
                }
            }, {
                key: "selectButton",
                value: function(t) {
                    var a = e._getSelectedBtn();
                    return !!t.isVisible && (null != a && t != a && (a.focused = !1,
                    a._drawButton(),
                    a.actionHoverOff()),
                    t.focused = !0,
                    t._drawButton(),
                    t.actionHoverOn(),
                    !0)
                }
            }, {
                key: "disableAllButtons",
                value: function(t) {
                    e._disableAllButtons = t
                }
            }, {
                key: "changeActiveScene",
                value: function(t) {
                    c.a.log("BTN", "Changing scene from", e._activeScene, "to", t.scene.key),
                    e._activeScene = t.scene.key
                }
            }]),
            e
        }();
        _()(d, "_sceneButtons", {}),
        _()(d, "_activeScene", null),
        _()(d, "_addedListenerToScene", !1),
        _()(d, "_disableAllButtons", !1),
        t.a = d
    },
    39: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(3)
          , y = a(0)
          , g = a(8)
          , S = a(69)
          , E = a(2)
          , f = function(e) {
            function t(e, a, i, n) {
                var r;
                return s()(this, t),
                (r = l()(this, d()(t).call(this, e))).gameScene = e,
                r.myMessage = a,
                y.a.isBS3 && (r.myMessage = r.myMessage.toUpperCase()),
                r.callbackMethod = n,
                r.timer = i,
                r.background = null,
                r.myText = null,
                r
            }
            return p()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    E.a.log("LevelMessage", "myInit", this.myMessage),
                    this.myRenderDepth = m.a.RENDER_DEPTH.UI;
                    var e = y.a.gameAreaMin.x + (y.a.gameAreaMax.x - y.a.gameAreaMin.x) / 2
                      , t = y.a.gameAreaMin.y + (y.a.gameAreaMax.y - y.a.gameAreaMin.y) / 2;
                    this.myText = this.gameScene.add.bitmapText(e, t, y.a.fontNames.LVL_MSG, this.myMessage),
                    this.myText.setOrigin(.5, .5),
                    this.myText.align = 1;
                    var a = 6;
                    return (y.a.isBS2 || y.a.isBS3) && (a = 0),
                    this.background = new g.a(this.gameScene,e,t - a,y.a.spriteKey,"ui/black.png"),
                    this.background.alpha = .7,
                    this.background.setDisplaySize(this.myText.width + 160, this.myText.height + 35),
                    this.background.setOrigin(.5, .5),
                    y.a.isBS3 && (this.background.visible = !1),
                    m.a.mySpriteDepth(this.myRenderDepth, this.background),
                    m.a.mySpriteDepth(this.myRenderDepth, this.myText),
                    this.gameScene.setCanPlayerPause(!1),
                    this.gameScene.myPauseGame(!0, !1, S.a.PAUSE_REASONS.LEVEL_MESSAGE),
                    this
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    this.timer -= t / 1e3,
                    this.timer <= 0 && (null != this.callbackMethod && this.callbackMethod(),
                    this.myOnDestroy())
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    _()(d()(t.prototype), "myOnDestroy", this).call(this),
                    this.background.destroy(),
                    this.myText.destroy()
                }
            }]),
            t
        }(m.a);
        f.MESSAGES = {
            GET_READY: "Get ready",
            OUT_OF_TIME: "Out of time!",
            GAME_OVER: "GAME OVER",
            FINAL_LEVEL: "Final level",
            OUCH: "Ouch!",
            PRESS_P: "Press P to pause",
            GAME_COMPLETED: "BRAVO.\nGame finished.",
            AD_CONTINUE_MOB: "TOUCH to start",
            AD_CONTINUE_COMP: "SPACE to start",
            TUT_NOW_PLAY: "Now play!",
            LEVEL_COMPLETED: "GOOD JOB!"
        },
        t.a = f
    },
    4: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(170)
          , l = a(172)
          , h = a(0)
          , _ = a(2)
          , c = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "saveUserSettings",
                value: function() {
                    var t = h.a.saveKey
                      , a = e._getLocalStorage();
                    null !== a ? (_.a.log("Saved data now.."),
                    a.setItem(t, JSON.stringify(e.gameSettings))) : _.a.warn("STORAGE", "Didn't save. No storage.")
                }
            }, {
                key: "loadUserSettings",
                value: function() {
                    var t = h.a.saveKey
                      , a = null
                      , i = e._getLocalStorage();
                    if (_.a.log("STORAGE", "Loaded storage:", i),
                    null !== i && i.length > 0 && null != i.getItem(t) && "null" != i.getItem(t)) {
                        var s = i.getItem(t);
                        try {
                            a = JSON.parse(s),
                            _.a.log("Loaded json savegame...success", a)
                        } catch (e) {
                            console.warn(e),
                            console.warn("Error parsing json storage: " + s)
                        }
                    } else
                        null !== i ? (_.a.log("New gameSettings detected."),
                        a = this._getFreshSettings()) : (_.a.log("Standard storage not available. Incognito?"),
                        a = this._getFreshSettings());
                    return e.createGameSettings(a),
                    e.gameSettings
                }
            }, {
                key: "_getLocalStorage",
                value: function() {
                    try {
                        if ("localStorage"in window && null != window.localStorage)
                            return localStorage
                    } catch (e) {
                        return null
                    }
                    return null
                }
            }, {
                key: "clearAllLocalStorage",
                value: function(e) {
                    e && (localStorage.clear(),
                    console.error("CLEARED ALL STORAGE Bye bye.."))
                }
            }, {
                key: "createGameSettings",
                value: function(t) {
                    _.a.log("Created GameSettings", "data:", t),
                    e.gameSettings = t,
                    e._updateGameSettingsKeys()
                }
            }, {
                key: "_updateGameSettingsKeys",
                value: function() {
                    var t = this._getFreshSettings();
                    if (null != e.gameSettings)
                        for (var a in t) {
                            null == e.gameSettings[a] && (e.gameSettings[a] = t[a]);
                            var i = Array.isArray(t[a])
                              , s = Array.isArray(e.gameSettings[a]);
                            i && !s && "tasksCompleted" == a && (e.gameSettings.tasksCompleted = [])
                        }
                    e.saveUserSettings()
                }
            }, {
                key: "_getFreshSettings",
                value: function() {
                    return h.a.isBT ? new o.a : h.a.isBS2 || h.a.isBS3 ? new l.a : void console.error("Unknown settings." + h.a.shortName)
                }
            }]),
            e
        }();
        c.gameSettings = {},
        t.a = c
    },
    43: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(41)
          , _ = a.n(h)
          , c = a(19)
          , d = a.n(c)
          , u = a(7)
          , p = a.n(u)
          , m = a(11)
          , y = a.n(m)
          , g = a(17)
          , S = a.n(g)
          , E = a(35)
          , f = a(16)
          , T = a(51)
          , v = a(0)
          , b = a(253)
          , k = a(3)
          , P = (a(76),
        a(12))
          , L = a(23)
          , A = a(75)
          , I = a(8)
          , M = a(4)
          , O = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, p()(t).call(this, e, a))).key = {},
                i.myInit(),
                i
            }
            return y()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    this.key = {},
                    this.key[E.a.INPUT_ACTIONS.LEFT] = this.gameScene.input.keyboard.addKey(this.controlInfo.left),
                    this.key[E.a.INPUT_ACTIONS.RIGHT] = this.gameScene.input.keyboard.addKey(this.controlInfo.right),
                    this.key[E.a.INPUT_ACTIONS.UP] = this.gameScene.input.keyboard.addKey(this.controlInfo.up),
                    this.key[E.a.INPUT_ACTIONS.DOWN] = this.gameScene.input.keyboard.addKey(this.controlInfo.down),
                    this.key[E.a.INPUT_ACTIONS.SHOOT] = this.gameScene.input.keyboard.addKey(this.controlInfo.shoot)
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    d()(p()(t.prototype), "myOnDestroy", this).call(this),
                    this.gameScene.input.keyboard.removeKey(this.controlInfo.left),
                    this.gameScene.input.keyboard.removeKey(this.controlInfo.right),
                    this.gameScene.input.keyboard.removeKey(this.controlInfo.up),
                    this.gameScene.input.keyboard.removeKey(this.controlInfo.down),
                    this.gameScene.input.keyboard.removeKey(this.controlInfo.shoot),
                    this.key = null,
                    this.gameScene.input.keyboard.clearCaptures()
                }
            }, {
                key: "left",
                value: function() {
                    return this.key[E.a.INPUT_ACTIONS.LEFT].isDown
                }
            }, {
                key: "right",
                value: function() {
                    return this.key[E.a.INPUT_ACTIONS.RIGHT].isDown
                }
            }, {
                key: "up",
                value: function() {
                    return this.key[E.a.INPUT_ACTIONS.UP].isDown
                }
            }, {
                key: "down",
                value: function() {
                    return this.key[E.a.INPUT_ACTIONS.DOWN].isDown
                }
            }, {
                key: "fire",
                value: function() {
                    return this.key[E.a.INPUT_ACTIONS.SHOOT].isDown
                }
            }]),
            t
        }(E.a)
          , D = a(39)
          , R = function(e) {
            function t(e, a) {
                var i;
                s()(this, t),
                (i = l()(this, p()(t).call(this, e, a))).deadZone = 3,
                i.mouseIsDown = !1,
                i.myContour = new I.a(e.gameScene,e.pos.x,e.pos.y,v.a.spriteKey,"ui/mouse_contour.png",1,k.a.RENDER_DEPTH.OVER_GAME),
                i.contourXMin = v.a.gameAreaMin.x - i.deadZone + i.myContour.displayWidth / 2,
                i.contourXMax = v.a.gameAreaMax.x + i.deadZone - i.myContour.displayWidth / 2;
                var n = new D.a(i.gameScene,D.a.MESSAGES.PRESS_P,1.8).myInit();
                return n.myText.fontSize *= .5,
                n.myText.y += 60,
                n.background.setDisplaySize(.5 * n.background.displayWidth, .5 * n.background.displayHeight),
                n.background.y += 60,
                i.myInit(),
                i
            }
            return y()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    this.gameScene.input.mouse.requestPointerLock(),
                    this.gameScene.input.on("pointermove", (function(e) {
                        this.gameScene.input.mouse.locked && (this.myContour.x += e.movementX,
                        this.myContour.x < this.contourXMin && (this.myContour.x = this.contourXMin),
                        this.myContour.x > this.contourXMax && (this.myContour.x = this.contourXMax),
                        this.myContour.y = this.playerOwner.pos.y)
                    }
                    ), this),
                    this.gameScene.input.on("pointerdown", (function(e) {
                        this.gameScene.input.mouse.locked && (this.mouseIsDown = !0)
                    }
                    ), this),
                    this.gameScene.input.on("pointerup", (function(e) {
                        this.gameScene.input.mouse.locked && (this.mouseIsDown = !1)
                    }
                    ), this)
                }
            }, {
                key: "myOnPause",
                value: function(e) {
                    d()(p()(t.prototype), "myOnPause", this).call(this),
                    this.mouseIsDown = !1,
                    e ? this.gameScene.input.mouse.releasePointerLock() : this.gameScene.input.mouse.requestPointerLock()
                }
            }, {
                key: "left",
                value: function() {
                    return this.myContour.x < this.playerOwner.pos.x - this.deadZone
                }
            }, {
                key: "right",
                value: function() {
                    return this.myContour.x > this.playerOwner.pos.x + this.deadZone
                }
            }, {
                key: "up",
                value: function() {
                    return !1
                }
            }, {
                key: "down",
                value: function() {
                    return !1
                }
            }, {
                key: "fire",
                value: function() {
                    return this.mouseIsDown
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    d()(p()(t.prototype), "myOnDestroy", this).call(this),
                    this.gameScene.input.mouse.releasePointerLock()
                }
            }]),
            t
        }(E.a)
          , B = a(9)
          , w = a(15)
          , N = a(121)
          , x = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, p()(t).call(this, e, a))).isBtnLeft = !1,
                i.isBtnRight = !1,
                i.isBtnShooting = !1,
                i.spriteLeft = new I.a(e.gameScene,0,0,v.a.spriteKey,"ui/input_touch.psd",1,k.a.RENDER_DEPTH.UIOVER),
                i.spriteLeft.angle = -90,
                i.spriteRight = new I.a(e.gameScene,0,0,v.a.spriteKey,"ui/input_touch.psd",1,k.a.RENDER_DEPTH.UIOVER),
                i.spriteRight.angle = 90,
                i.spriteShoot = new I.a(e.gameScene,0,0,v.a.spriteKey,"ui/input_touch.psd",1,k.a.RENDER_DEPTH.UIOVER),
                i.myInit(),
                i
            }
            return y()(t, e),
            r()(t, [{
                key: "_doAction",
                value: function(e, t) {
                    t.alpha = e ? 1 : .5
                }
            }, {
                key: "myInit",
                value: function() {
                    this._doAction(!1, this.spriteLeft),
                    this._doAction(!1, this.spriteRight),
                    this._doAction(!1, this.spriteShoot),
                    this.myOnResizeSinglePlayer(),
                    N.a(this.gameScene, this.gameScene.game.events, "LevelEditoSceneResize", this.myOnResizeSinglePlayer, this)
                }
            }, {
                key: "left",
                value: function() {
                    return this.isBtnLeft
                }
            }, {
                key: "right",
                value: function() {
                    return this.isBtnRight
                }
            }, {
                key: "up",
                value: function() {
                    return !1
                }
            }, {
                key: "down",
                value: function() {
                    return !1
                }
            }, {
                key: "fire",
                value: function() {
                    return this.isBtnShooting
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    d()(p()(t.prototype), "myOnDestroy", this).call(this)
                }
            }, {
                key: "myOnResizeSinglePlayer",
                value: function() {
                    var e = this;
                    this.spriteLeft.scale = this.spriteRight.scale = this.spriteShoot.scale = 2 / window.devicePixelRatio;
                    var t = 50
                      , a = 20;
                    B.a.currentMode == B.a.MODES.TWOP && (t = 10,
                    a = 10),
                    this.spriteLeft.x = w.a.cameraOffset.x + this.spriteLeft.displayHeight / 2 + t,
                    this.spriteLeft.y = v.a.gameHeight - w.a.cameraOffset.y - this.spriteLeft.displayWidth / 2 - -10,
                    this.spriteRight.x = this.spriteLeft.x + this.spriteRight.displayHeight + a,
                    this.spriteRight.y = this.spriteLeft.y,
                    this.spriteShoot.x = v.a.gameWidth - w.a.cameraOffset.x - this.spriteShoot.displayWidth / 2 - t,
                    this.spriteShoot.y = this.spriteRight.y,
                    B.a.currentMode == B.a.MODES.TWOP && (1 == this.playerOwner.playerId ? this.spriteShoot.x = this.spriteRight.x + this.spriteShoot.displayWidth + a : 2 == this.playerOwner.playerId && (this.spriteRight.x = this.spriteShoot.x - this.spriteShoot.displayWidth - a,
                    this.spriteLeft.x = this.spriteRight.x - this.spriteRight.displayHeight - a)),
                    null != this.btn_left && this.btn_left.destroy(),
                    null != this.btn_right && this.btn_right.destroy(),
                    null != this.btn_shoot && this.btn_shoot.destroy();
                    var i = w.a.cameraOffset.x
                      , s = this.spriteLeft.x + this.spriteLeft.displayHeight / 2 + a / 2
                      , n = .5 * v.a.gameWidth
                      , r = v.a.gameWidth - w.a.cameraOffset.x
                      , o = .3 * (v.a.gameHeight - w.a.cameraOffset.y)
                      , l = .7 * (v.a.gameHeight - w.a.cameraOffset.y);
                    B.a.currentMode == B.a.MODES.TWOP && (n = this.spriteRight.x + this.spriteLeft.displayHeight / 2 + a / 2,
                    1 == this.playerOwner.playerId ? r = v.a.gameWidth / 2 : i = v.a.gameWidth / 2);
                    var h = new Phaser.Geom.Rectangle(i,o,s - i,l)
                      , _ = new Phaser.Geom.Rectangle(s,o,n - s,l)
                      , c = new Phaser.Geom.Rectangle(n,o,r - n,l);
                    this.btn_left = this.gameScene.add.graphics(),
                    this.btn_left.setInteractive({
                        hitArea: h,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    this.btn_left.on("pointerdown", (function() {
                        e._doAction(!0, e.spriteLeft),
                        e.isBtnLeft = !0
                    }
                    )),
                    this.btn_left.on("pointerover", (function() {
                        e._doAction(!0, e.spriteLeft),
                        e.isBtnLeft = !0
                    }
                    )),
                    this.btn_left.on("pointerup", (function() {
                        e._doAction(!1, e.spriteLeft),
                        e.isBtnLeft = !1
                    }
                    )),
                    this.btn_left.on("pointerout", (function() {
                        e._doAction(!1, e.spriteLeft),
                        e.isBtnLeft = !1
                    }
                    )),
                    this.btn_right = this.gameScene.add.graphics(),
                    this.btn_right.setInteractive({
                        hitArea: _,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    this.btn_right.on("pointerdown", (function() {
                        e._doAction(!0, e.spriteRight),
                        e.isBtnRight = !0
                    }
                    )),
                    this.btn_right.on("pointerover", (function() {
                        e._doAction(!0, e.spriteRight),
                        e.isBtnRight = !0
                    }
                    )),
                    this.btn_right.on("pointerup", (function() {
                        e._doAction(!1, e.spriteRight),
                        e.isBtnRight = !1
                    }
                    )),
                    this.btn_right.on("pointerout", (function() {
                        e._doAction(!1, e.spriteRight),
                        e.isBtnRight = !1
                    }
                    )),
                    this.btn_shoot = this.gameScene.add.graphics(),
                    this.btn_shoot.setInteractive({
                        hitArea: c,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    this.btn_shoot.on("pointerdown", (function() {
                        e._doAction(!0, e.spriteShoot),
                        e.isBtnShooting = !0
                    }
                    )),
                    this.btn_shoot.on("pointerover", (function() {
                        e._doAction(!0, e.spriteShoot),
                        e.isBtnShooting = !0
                    }
                    )),
                    this.btn_shoot.on("pointerup", (function() {
                        e._doAction(!1, e.spriteShoot),
                        e.isBtnShooting = !1
                    }
                    )),
                    this.btn_shoot.on("pointerout", (function() {
                        e._doAction(!1, e.spriteShoot),
                        e.isBtnShooting = !1
                    }
                    ))
                }
            }]),
            t
        }(E.a)
          , C = a(2)
          , U = function(e) {
            function t(e, a) {
                var i;
                s()(this, t),
                (i = l()(this, p()(t).call(this, e, a)))._deadZone = 15,
                i._maxJoyTravel = 0,
                i._pressPos = f.a.ZERO,
                i.isBtnLeft = !1,
                i.isBtnRight = !1,
                i.isBtnUp = !1,
                i.isBtnDown = !1,
                i.isBtnShooting = !1,
                i._movePointer = null,
                i.move_area = new I.a(e.gameScene,0,0,v.a.spriteKey,"ui/input_touch_move.psd",1,k.a.RENDER_DEPTH.UIOVER),
                i.move_joy = new I.a(e.gameScene,0,0,v.a.spriteKey,"ui/input_touch.psd",1,k.a.RENDER_DEPTH.UIOVER),
                i.move_joy.scale = .35,
                i._maxJoyTravel = i.move_area.displayWidth / 2 - i.move_joy.displayWidth / 2,
                i.shoot_joy = new I.a(i.gameScene,0,0,v.a.spriteKey,"ui/input_touch_shoot.psd",1,k.a.RENDER_DEPTH.UIOVER);
                var n = _()(i);
                return i.gameScene.input.on("pointerup", (function(e) {
                    n._clearMoveCusor(e)
                }
                )),
                i.moveAreadefaultPositionX = null,
                i.moveAreadefaultPositionY = null,
                i.myInit(),
                i
            }
            return y()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    this._touchShoot(!1),
                    this._clearMoveCusor(null),
                    N.a(this.gameScene, this.gameScene.game.events, "LevelEditoSceneResize", this.myOnResizeSinglePlayer, this),
                    this.myOnResizeSinglePlayer()
                }
            }, {
                key: "_touchShoot",
                value: function(e, t) {
                    null != this._movePointer && t == this._movePointer || (this.shoot_joy.alpha = e ? .65 : .3,
                    this.isBtnShooting = e)
                }
            }, {
                key: "_setMoveCursor",
                value: function(e) {
                    this._movePointer = e,
                    this.move_joy.alpha = 1,
                    this._pressPos.x = e.worldX,
                    this._pressPos.y = e.worldY
                }
            }, {
                key: "_clearMoveCusor",
                value: function(e) {
                    e == this._movePointer && (this._movePointer = null,
                    null != this.moveAreadefaultPositionX && (this.move_area.x = this.moveAreadefaultPositionX,
                    this.move_area.y = this.moveAreadefaultPositionY),
                    this.move_area.alpha = .25,
                    this.move_joy.alpha = .5,
                    this.move_joy.x = this.move_area.x,
                    this.move_joy.y = this.move_area.y,
                    this.isBtnLeft = this.isBtnRight = this.isBtnUp = this.isBtnDown = !1)
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    d()(p()(t.prototype), "myUpdate", this).call(this, e, a),
                    this._movePointer && (this.move_area.x = this._pressPos.x,
                    this.move_area.y = this._pressPos.y,
                    this.move_joy.x = this._movePointer.worldX,
                    this.move_joy.y = this._movePointer.worldY,
                    this.move_joy.x < this.move_area.x - this._deadZone ? this.isBtnLeft = !0 : this.isBtnLeft = !1,
                    this.move_joy.x > this.move_area.x + this._deadZone ? this.isBtnRight = !0 : this.isBtnRight = !1,
                    this.move_joy.y < this.move_area.y - this._deadZone ? this.isBtnUp = !0 : this.isBtnUp = !1,
                    this.move_joy.y > this.move_area.y + this._deadZone ? this.isBtnDown = !0 : this.isBtnDown = !1,
                    this.move_joy.x < this.move_area.x - this._maxJoyTravel && (this._pressPos.x = this.move_joy.x + this._maxJoyTravel),
                    this.move_joy.x > this.move_area.x + this._maxJoyTravel && (this._pressPos.x = this.move_joy.x - this._maxJoyTravel),
                    this.move_joy.y < this.move_area.y - this._maxJoyTravel && (this._pressPos.y = this.move_joy.y + this._maxJoyTravel),
                    this.move_joy.y > this.move_area.y + this._maxJoyTravel && (this._pressPos.y = this.move_joy.y - this._maxJoyTravel))
                }
            }, {
                key: "left",
                value: function() {
                    return this.isBtnLeft
                }
            }, {
                key: "right",
                value: function() {
                    return this.isBtnRight
                }
            }, {
                key: "up",
                value: function() {
                    return this.isBtnUp
                }
            }, {
                key: "down",
                value: function() {
                    return this.isBtnDown
                }
            }, {
                key: "fire",
                value: function() {
                    return this.isBtnShooting
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    d()(p()(t.prototype), "myOnDestroy", this).call(this)
                }
            }, {
                key: "myOnResizeSinglePlayer",
                value: function() {
                    var e = this
                      , t = v.a.gameWidth
                      , a = 1e3
                      , i = w.a.cameraOffset.x
                      , s = (v.a.gameWidth + 2 * -w.a.cameraOffset.x) / 4;
                    null != this.btn_move && this.btn_move.destroy(),
                    null != this.btn_shoot && this.btn_shoot.destroy(),
                    this.rectMove = new Phaser.Geom.Rectangle(-1e3,150,a + .5 * t,2e3),
                    B.a.currentMode == B.a.MODES.TWOP && (1 == this.playerOwner.playerId ? this.rectMove = new Phaser.Geom.Rectangle(i,150,s,2e3) : this.rectMove = new Phaser.Geom.Rectangle(i + 2 * s,150,s,2e3)),
                    this.btn_move = this.gameScene.add.graphics(),
                    this.btn_move.setInteractive({
                        hitArea: this.rectMove,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    this.btn_move.on("pointerdown", (function(t) {
                        e._setMoveCursor(t)
                    }
                    )),
                    this.rectShoot = new Phaser.Geom.Rectangle(.5 * t,170,2e3,2e3),
                    B.a.currentMode == B.a.MODES.TWOP && (1 == this.playerOwner.playerId ? this.rectShoot = new Phaser.Geom.Rectangle(i + s,150,s,2e3) : this.rectShoot = new Phaser.Geom.Rectangle(i + 3 * s,150,s,2e3)),
                    this.btn_shoot = this.gameScene.add.graphics(),
                    this.btn_shoot.setInteractive({
                        hitArea: this.rectShoot,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    this.btn_shoot.on("pointerdown", (function(t) {
                        e._touchShoot(!0, t)
                    }
                    )),
                    this.btn_shoot.on("pointerup", (function(t) {
                        e._touchShoot(!1, t)
                    }
                    )),
                    this.btn_shoot.on("pointerout", (function(t) {
                        e._touchShoot(!1, t)
                    }
                    )),
                    this.move_area.x = w.a.cameraOffset.x + 60 + this.move_area.displayWidth / 2,
                    this.move_area.y = v.a.gameHeight - w.a.cameraOffset.y - 60 - this.move_area.displayHeight / 2,
                    this.moveAreadefaultPositionX = this.move_area.x,
                    this.moveAreadefaultPositionY = this.move_area.y,
                    this.move_joy.x = this.move_area.x,
                    this.move_joy.y = this.move_area.y,
                    this.shoot_joy.x = v.a.gameWidth - w.a.cameraOffset.x - 10 - this.shoot_joy.displayWidth / 2,
                    this.shoot_joy.y = v.a.gameHeight - w.a.cameraOffset.y - 10 - this.shoot_joy.displayHeight / 2,
                    B.a.currentMode == B.a.MODES.TWOP && (1 == this.playerOwner.playerId ? this.shoot_joy.x = i + 2 * s - 10 - this.shoot_joy.displayWidth / 2 - 35 : (this.move_area.x = i + 2 * s + 60 + this.move_area.displayWidth / 2 + 35,
                    this.moveAreadefaultPositionX = this.move_area.x))
                }
            }]),
            t
        }(E.a)
          , W = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "createInput",
                value: function(e, t) {
                    return C.a.getMobileScreenshots ? (v.a.isBT ? new x(e,t) : new U(e,t),
                    new O(e,t)) : w.a.isMobile ? v.a.isBT ? new x(e,t) : new U(e,t) : t.controller == E.a.INPUT_TYPE.keyboard ? new O(e,t) : t.controller == E.a.INPUT_TYPE.mouse ? new R(e,t) : (console.error("Unknown controller type:" + t.controller),
                    null)
                }
            }]),
            e
        }()
          , Y = (a(69),
        a(251),
        a(30),
        a(112))
          , K = (a(67),
        a(20))
          , G = a(80)
          , H = a.n(G)
          , V = a(74)
          , z = a(1)
          , F = function(e) {
            function t() {
                return s()(this, t),
                l()(this, p()(t).apply(this, arguments))
            }
            return y()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    var e = this;
                    this.modType = z.a.ITEM_MANAGER.MOD_TYPE.WARP,
                    this.MOD_TIME = 5,
                    this.modTime = this.MOD_TIME,
                    C.a.log("ITM_FREEZE", "freeze initiated!");
                    for (var t = 0, a = Object.entries(this.gameScene.ballManager.activeBalls); t < a.length; t++) {
                        var i = H()(a[t], 2);
                        i[0];
                        i[1].forEach((function(e) {
                            e.pbActive = !1
                        }
                        ))
                    }
                    this.gameScene.timebar.timebarStopped = !0,
                    this.gameScene.timebar.timeLeft = 0,
                    this.gameScene.timebar._redrawTimebar(),
                    this.gameScene.players.forEach((function(t) {
                        t.shotManager.accuracyBonus = !1,
                        t.shotManager.cantShootTimer = e.gameScene.timeInLevel + 9999999
                    }
                    ));
                    var s = this.gameScene.add.graphics();
                    return s.fillStyle(16777215, 1),
                    s.fillRect(w.a.cameraOffset.x, w.a.cameraOffset.y, v.a.gameWidth - 2 * w.a.cameraOffset.x, v.a.gameHeight - 2 * w.a.cameraOffset.y),
                    k.a.mySpriteDepth(k.a.RENDER_DEPTH.UIOVER, s),
                    this.gameScene.add.tween({
                        targets: s,
                        duration: 600,
                        alpha: 0,
                        delay: 450
                    }),
                    P.a.playSound(this.gameScene, P.a.SND.BALL_WARP),
                    this
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    d()(p()(t.prototype), "myUpdate", this).call(this, e, a)
                }
            }, {
                key: "modExpired",
                value: function() {
                    C.a.log("WARP", "Level warping ahead...!!"),
                    this.gameScene.levelComplete()
                }
            }], [{
                key: "freezeBall",
                value: function(e) {
                    e.mySprite.alpha = .5,
                    e.isStatic = !0
                }
            }, {
                key: "unfreezeBall",
                value: function(e) {
                    e.mySprite.alpha = 1,
                    e.isStatic = !1
                }
            }]),
            t
        }(V.a)
          , X = F
          , j = a(13)
          , q = a(70)
          , J = function(e) {
            function t(e, a, i) {
                var n;
                return s()(this, t),
                (n = l()(this, p()(t).call(this, e, L.a.LAYER.PLAYER, L.a.LAYERS_PLAYER, i.minus(new f.a(v.a.playerCollW / 2,v.a.playerCollH / 2)), i.plus(new f.a(v.a.playerCollW / 2,v.a.playerCollH / 2)), {
                    useGravity: !0,
                    mass: t.PLAYER_MASS,
                    acc: new f.a(0,t.PLAYER_GRAVITY)
                }))).playerId = a,
                n.speed = new f.a(v.a.playerSpeed,0),
                n.ladderSpeed = v.a.playerLadderSpeed,
                n.ladderSlideSpeed = v.a.playerLadderSlideSpeed,
                n.SPEED_FACTOR_PLAYER = 5,
                n.SPEED_FACTOR_LADDER = 3.5,
                n.myInput = W.createInput(_()(n), M.a.gameSettings.playerKeys["player" + a]),
                n.paralizedUntil = 0,
                n.shotManager = new b.a(_()(n)),
                n.playerShield = new A.a(_()(n)).myInit(),
                n._currentAni = "",
                n.usingLadder = null,
                n._aniBT1FrameNameMod = "",
                n._aniBS3FrameNameMod = "",
                n._testPBodyLadder = new T.a(n.gameScene,L.a.LAYER.SIMULATION,L.a.LAYER.NONE,new f.a(n._p1.x + 1,n._p1.y),new f.a(n._p2.x - 1,n._p2.y)),
                n._testPBodyWall = new T.a(n.gameScene,L.a.LAYER.SIMULATION,L.a.LAYER.NONE,new f.a(n._p1.x,n._p1.y),new f.a(n._p2.x,n._p2.y)),
                n._testPBodySquish = new T.a(n.gameScene,L.a.LAYER.SIMULATION,L.a.LAYER.NONE,new f.a(n._p1.x - 1,n._p1.y - 1),new f.a(n._p2.x + 1,n._p2.y + 1)),
                n._leafLaserNum = 0,
                n._landedWall = null,
                n._landedWallOld = null,
                n._runDieAnimation = !1,
                n._lastBallKill = null,
                n._p2Sprite,
                n._stickyModifier = 0,
                n._bs3RunSmoke = null,
                n
            }
            return y()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    this.goType = z.a.GO_TYPE.PLAYER,
                    this.myRenderDepth = k.a.RENDER_DEPTH.PLAYER,
                    this._aniBT1FrameNameMod = this._detectedModifier(),
                    this._aniBS3FrameNameMod = "";
                    var e = v.a.spriteKey;
                    v.a.isBT && (e = M.a.gameSettings.selectedSkinID,
                    q.a.createSkinAnimations(this.gameScene));
                    var a = "char/idle" + this._aniBT1FrameNameMod + ".png";
                    if (v.a.isBS2 ? a = "char/idle/idle_50.png" : v.a.isBS3 && (a = "char/idle/idle_1.png",
                    2 == this.playerId && K.a.isLazyLoaded && (e = v.a.lazySpriteKey,
                    this._aniBS3FrameNameMod = "_p2")),
                    this.mySprite = new I.a(this.gameScene,this.pos.x,this.pos.y + this.size.y / 2,e,a,1,this.myRenderDepth),
                    v.a.isBS2 && 2 == this.playerId && this.gameScene.textures.exists(v.a.lazySpriteKey)) {
                        var i = v.a._BS2_p2MatchFrames[this.mySprite.frame.name];
                        this._p2Sprite = new I.a(this.gameScene,this.pos.x,this.pos.y + this.size.y / 2,v.a.lazySpriteKey,i,1,this.myRenderDepth),
                        k.a.mySpriteDepth(this.myRenderDepth, this._p2Sprite)
                    }
                    return 1 !== this.playerId && 2 !== this.playerId && console.error("Player ID has to be 1 or 2. id:" + this.playerId),
                    this.gameScene.children.bringToTop(this.debugGraphics),
                    this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y + this.size.y / 2,
                    this.playCharAnim = this._playCharAnimBT1,
                    (v.a.isBS2 || v.a.isBS3) && (this.playCharAnim = this._playCharAnimBS2),
                    this.playCharAnim(t.ANIMS.IDLE),
                    this
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    if (v.a.isBS2 && 2 == this.playerId && null != this._p2Sprite && (this._p2Sprite.setFrame(v.a._BS2_p2MatchFrames[this.mySprite.frame.name]),
                    this._p2Sprite.flipX = this.mySprite.flipX,
                    this._p2Sprite.x = this.mySprite.x,
                    this._p2Sprite.y = this.mySprite.y),
                    this._runDieAnimation)
                        this.animatePlayerDeathBounce(e, a);
                    else if (this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y + this.size.y / 2,
                    this.gameScene.isGamePaused)
                        this._currentAni != t.ANIMS.IDLE && this._currentAni != t.ANIMS.WIN && this.mySprite.anims.stop();
                    else {
                        var i = 0
                          , s = !0;
                        if (this.paralizedUntil > e && (this.playCharAnim(t.ANIMS.IDLE),
                        s = !1),
                        s) {
                            if (this.myInput.fire() && this.shotManager.playerFired(e),
                            null != this.usingLadder)
                                return;
                            this.myInput.left() && !this.myInput.right() ? (this.playCharAnim(t.ANIMS.WALK_L),
                            i = -this.speed.x,
                            i += this._stickyModifier) : this.myInput.right() && !this.myInput.left() ? (this.playCharAnim(t.ANIMS.WALK_R),
                            i = this.speed.x,
                            i -= this._stickyModifier) : this.myInput.left() && this.myInput.right() && v.a.isBT ? (this.playCharAnim(t.ANIMS.IDLE),
                            i = -this.speed.x) : (this.playCharAnim(t.ANIMS.IDLE),
                            i = 0),
                            this._stickyModifier = 0
                        }
                        null != this._landedWall && this._landedWall.wallType == z.a.WALL.WALL_TYPE.ICE && (0 == i ? this.vel.x > 0 ? (i = this.vel.x - Y.a.SLOW_DOWN * (a / 1e3)) < 0 && (i = 0) : this.vel.x < 0 && (i = this.vel.x + Y.a.SLOW_DOWN * (a / 1e3)) > 0 && (i = 0) : i > 0 ? (i = this.vel.x + Y.a.SPEED_UP * (a / 1e3)) > this.speed.x && (i = this.speed.x) : i < 0 && (i = this.vel.x - Y.a.SPEED_UP * (a / 1e3)) < -this.speed.x && (i = -this.speed.x)),
                        null != this._landedWall && this._landedWall.wallType == z.a.WALL.WALL_TYPE.CONV_BELT && (i += this._landedWall.convBeltSpeed),
                        this.vel.x = i
                    }
                }
            }, {
                key: "_playCharAnimBT1",
                value: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e !== this._currentAni || a)
                        switch (this._currentAni = e,
                        e) {
                        case t.ANIMS.WALK_L:
                            this.mySprite.anims.play("walk" + this._aniBT1FrameNameMod),
                            this.mySprite.setScale(-1, 1);
                            break;
                        case t.ANIMS.WALK_R:
                            this.mySprite.anims.play("walk" + this._aniBT1FrameNameMod),
                            this.mySprite.setScale(1, 1);
                            break;
                        case t.ANIMS.IDLE:
                            this.mySprite.anims.play("idle" + this._aniBT1FrameNameMod),
                            this.mySprite.setScale(1, 1)
                        }
                }
            }, {
                key: "_playCharAnimBS2",
                value: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.pbActive && (e !== this._currentAni || a))
                        switch (this._currentAni = e,
                        e) {
                        case t.ANIMS.WALK_L:
                            this.mySprite.anims.play("walkLeft" + this._aniBS3FrameNameMod);
                            break;
                        case t.ANIMS.WALK_R:
                            this.mySprite.anims.play("walkRight" + this._aniBS3FrameNameMod);
                            break;
                        case t.ANIMS.IDLE:
                            this.mySprite.anims.play("idle" + this._aniBS3FrameNameMod);
                            break;
                        case t.ANIMS.WIN:
                            this.mySprite.anims.play("win" + this._aniBS3FrameNameMod)
                        }
                }
            }, {
                key: "collideEdge",
                value: function(e, a, i, s, n, r, o, l) {
                    if (l.goType == z.a.GO_TYPE.WALL) {
                        if (l.wallType == z.a.WALL.WALL_TYPE.CEILSPIKE_BT1)
                            return this._playerDied(t.DEATH_REASON.SPIKES),
                            !0;
                        if ((l.wallType == z.a.WALL.WALL_TYPE.MOVING || l.wallType == z.a.WALL.WALL_TYPE.CAVEIN_BS3) && this.gameScene.phyEngine.simulateCollisions(this._testPBodySquish, this.pos.x, this.pos.y, [L.a.LAYER.WALL]).isSquished)
                            return this._playerDied(t.DEATH_REASON.SPIKES),
                            !0
                    } else
                        l.goType == z.a.GO_TYPE.WALL && l.wallType == z.a.WALL.WALL_TYPE.TIMED && C.a.error("DIED BY APPEARING INSIDE TIMED tile.");
                    if (l.goType == z.a.GO_TYPE.BALL) {
                        if (l._isGhostOn)
                            return !0;
                        if (l.isStatic)
                            return !0;
                        if (l._ballInfo.warp) {
                            new X(this.gameScene).myInit();
                            return !0
                        }
                        for (var h in this.gameScene.itemManager.allModifiers) {
                            if (h == z.a.ITEM_MANAGER.MOD_TYPE.MEDAL)
                                return !0;
                            if (h == z.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_PHASE)
                                return j.a.TaskUpdate(this.gameScene, j.a.TASK_TYPE.PHASE_INSIDE_BUBBLE, !0),
                                !0
                        }
                        return this.playerShield.ignoreBall(l) || (this._lastBallKill = l,
                        this._playerDied(t.DEATH_REASON.BALL)),
                        !0
                    }
                    if (l.goType == z.a.GO_TYPE.WALL && null == this.usingLadder) {
                        var _ = l;
                        if (_.wallType == z.a.WALL.WALL_TYPE.SPIKEALL && e != z.a.PHY.COL_EDGE.TOP) {
                            if (this.speed.x != v.a.playerSpeedUp || 0 == this.vel.x || e != z.a.PHY.COL_EDGE.BOTTOM)
                                return this._playerDied(t.DEATH_REASON.SPIKES),
                                !0;
                            if (null == this._bs3RunSmoke && K.a.isLazyLoaded) {
                                this._bs3RunSmoke = new I.a(this.gameScene,this.pos.x,this.pos.y + v.a.playerCollH / 2,v.a.lazySpriteKey,"run_smoke/run_smoke_1.png",1,k.a.RENDER_DEPTH.UNDER_GAME),
                                this._bs3RunSmoke.anims.play("run_smoke"),
                                this.vel.x > 0 && (this._bs3RunSmoke.flipX = !0);
                                var c = this;
                                this._bs3RunSmoke.once("animationcomplete", (function() {
                                    c._bs3RunSmoke.destroy(),
                                    delete c._bs3RunSmoke
                                }
                                )),
                                j.a.TaskUpdate(this.gameScene, j.a.TASK_TYPE.SPIKE_RUN, !0, B.a.currentLevel)
                            }
                        }
                        if (_.wallType == z.a.WALL.WALL_TYPE.TELEPORT)
                            return f.a.getPowDistance(this.pos, _.pos) < 20 && _.startTeleportingPlayer(this),
                            !0;
                        if (e == z.a.PHY.COL_EDGE.BOTTOM) {
                            if (this._isStandingOnAnotherWall(_))
                                return !0;
                            this._landedWall = _,
                            this.vel.y = .1,
                            _.wallType == z.a.WALL.WALL_TYPE.TRAMPOLINE ? (this.vel.y = -50,
                            _.trampolinePlayerBounce(this),
                            this._landedWall = null) : _.wallType == z.a.WALL.WALL_TYPE.STICKY && _.gotOnSticky(this)
                        } else if (e == z.a.PHY.COL_EDGE.TOP && (this.vel.y = 0,
                        _._isSpikey))
                            return this._playerDied(t.DEATH_REASON.SPIKES),
                            !0;
                        _.wallType == z.a.WALL.WALL_TYPE.TIMED && _.standingOnWallTimed(this)
                    } else if (l.goType == z.a.GO_TYPE.LADDER)
                        return l.touchingLadder(this),
                        !0;
                    if (l.goType == z.a.GO_TYPE.ITEM && C.a.error("THIS NEVER HAPPENS. ITEM REACTS, NOT PLAYER.!"),
                    null != this.usingLadder)
                        return !0
                }
            }, {
                key: "myFixedPreUpdate",
                value: function(e, a, i) {
                    d()(p()(t.prototype), "myFixedPreUpdate", this).call(this, e, a, i),
                    this._landedWall = null
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    d()(p()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i),
                    this._landedWall != this._landedWallOld && (null == this._landedWall && null == this.usingLadder && (this.vel.y = v.a.playerStartG),
                    this._landedWallOld = this._landedWall),
                    null == this._landedWall && this.vel.y < v.a.playerStartG && null == this.usingLadder && (this.vel.y += 100 * a,
                    this.vel.y > v.a.playerStartG && (this.vel.y = v.a.playerStartG))
                }
            }, {
                key: "_playerDied",
                value: function(e) {
                    C.a.log("PLAYER", "Player is hit!" + e),
                    this.pbActive = !1,
                    P.a.playSound(this.gameScene, P.a.SND.PLAYER_DEATH_BALL),
                    this.gameScene.playerDied(this, e)
                }
            }, {
                key: "_detectedModifier",
                value: function() {
                    var e = "";
                    return v.a.isBT && (this.gameScene.ballManager.ballGravity <= .8 && (e += "_space"),
                    2 == this.playerId && (e += "_p2")),
                    e
                }
            }, {
                key: "speedUpPlayer",
                value: function() {
                    this.speed.x = v.a.playerSpeedUp,
                    this.ladderSpeed = v.a.playerLadderSpeedUp
                }
            }, {
                key: "animatePlayerDeathBounce",
                value: function(e, a) {
                    if (0 == this._runDieAnimation)
                        return this._runDieAnimation = !0,
                        this.mySprite.anims.stop(),
                        this.mySprite.setFrame("char/die/die.png"),
                        this.vel.x = 80,
                        this.vel.y = -20,
                        this.acc.y = 0,
                        void (this.pos.x < this._lastBallKill.pos.x && (this.mySprite.flipX = !this.mySprite.flipX,
                        this.vel.x = -this.vel.x));
                    this.pos.x += this.vel.x * a / 100,
                    this.vel.y = this.vel.y + this.acc.y * a / 10,
                    this.pos.y += this.vel.y * a / 100,
                    this.mySprite.x = this.pos.x,
                    this.mySprite.y = this.pos.y + this.size.y / 2,
                    (this.pos.x - this.sizeHalf.x < v.a.gameAreaMin.x || this.pos.x + this.sizeHalf.x > v.a.gameAreaMax.x) && (this.pos.x - this.sizeHalf.x < v.a.gameAreaMin.x && (this.pos.x = v.a.gameAreaMin.x + this.sizeHalf.x),
                    this.pos.x + this.sizeHalf.x > v.a.gameAreaMax.x && (this.pos.x = v.a.gameAreaMax.x - this.sizeHalf.x),
                    this.vel.y = -20,
                    this.vel.x = -this.vel.x / Math.abs(this.vel.x) * 25,
                    this.acc.y = t.PLAYER_GRAVITY,
                    this.mySprite.flipX = !this.mySprite.flipX),
                    this.pos.y > v.a.gameAreaMax.y + this.size.y && (this._runDieAnimation = !1,
                    this.gameScene.restartStageAfterDying(t.DEATH_REASON.BALL))
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    d()(p()(t.prototype), "myOnDestroy", this).call(this),
                    null != this._p2Sprite && this._p2Sprite.destroy()
                }
            }, {
                key: "_isStandingOnAnotherWall",
                value: function(e) {
                    var t = this
                      , a = !1
                      , i = this.gameScene.phyEngine.simulateCollisions(this._testPBodyWall, this.pos.x, this.pos.y, [L.a.LAYER.WALL]);
                    return i.collisions.length >= 2 && i.collisions.forEach((function(i) {
                        var s = i.pBody;
                        if (s != e && s._p1.y == e._p1.y)
                            if (t.pos.x > s._p1.x) {
                                if (t.pos.x < s._p2.x)
                                    return void (a = !0)
                            } else if (t.pos.x > s._p1.x)
                                return void (a = !0)
                    }
                    )),
                    a
                }
            }]),
            t
        }(T.a);
        S()(J, "PLAYER_GRAVITY", .905),
        S()(J, "PLAYER_MASS", 850),
        J.DEATH_REASON = {
            SPIKES: "spikes",
            BALL: "ball",
            TIMEBAR: "timebar"
        },
        J.ANIMS = {
            WALK_L: "walkl",
            WALK_R: "walkr",
            IDLE: "idle",
            WIN: "win",
            DIE: "die",
            CLIMB: "climb",
            CLIMB_ONOFF: "climb_onoff",
            SLIDE: "slide"
        };
        t.a = J
    },
    44: function(e, t) {
        t.GET_PHASER_RENDERER = function(e) {
            return "auto" == this.PHASER_AUTO ? e.AUTO : "auto" == this.PHASER_CANVAS ? e.CANVAS : "auto" == this.PHASER_WEBGL ? e.WEBGL : void console.error("Unknown __MY_RENDERER__:", "auto")
        }
        ,
        t.PHASER_AUTO = "auto",
        t.PHASER_CANVAS = "canvas",
        t.PHASER_WEBGL = "webgl",
        t.GET_ENV_PROD_OR_DEV = function() {
            return "prod"
        }
        ,
        t.ENV_PROD = "prod",
        t.ENV_DEV = "dev",
        t.GET_MY_GAME = function() {
            return "bt1"
        }
        ,
        t.GAME_BS1 = "bt1",
        t.GAME_BS2 = "bs2",
        t.GAME_BS3 = "bs3"
    },
    45: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return d
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(12)
          , h = a(15)
          , _ = a(121)
          , c = a(3)
          , d = function() {
            function e(t) {
                s()(this, e),
                this.myScene = t;
                var a = "undefined";
                o.a.isBT ? a = "ui/back_brick.png" : o.a.isBS2 ? a = "ui/popup_back.png" : o.a.isBS3 && (a = "ui/black.png"),
                this.topBrickwall = t.add.tileSprite(-o.a.gameWidth, -o.a.gameHeight, 3 * o.a.gameWidth, 1.5 * o.a.gameHeight, o.a.spriteKey, a),
                this.topBrickwall.setDisplayOrigin(0, 3),
                this.topBrickwall.setTileScale(1 / o.a.spriteScale, 1 / o.a.spriteScale),
                this.topBrickwall.setTilePosition(20, 59),
                this.botBrickwall = t.add.tileSprite(-o.a.gameWidth, o.a.gameHeight, 3 * o.a.gameWidth, 1.5 * o.a.gameHeight, o.a.spriteKey, a),
                this.botBrickwall.setDisplayOrigin(0, -3),
                this.botBrickwall.setTileScale(1 / o.a.spriteScale, 1 / o.a.spriteScale),
                this.botBrickwall.setTilePosition(0, -2),
                this.botBrickwall.y -= o.a.gameHeight / 2,
                this.topBrickwallStroke = t.add.tileSprite(-o.a.gameWidth, -o.a.gameHeight, 3 * o.a.gameWidth, 1.5 * o.a.gameHeight + 3, o.a.spriteKey, "ui/gray.png"),
                this.topBrickwallStroke.setDisplayOrigin(0, 3),
                this.topBrickwallStroke.setTileScale(1 / o.a.spriteScale, 1 / o.a.spriteScale),
                this.botBrickwallStroke = t.add.tileSprite(-o.a.gameWidth, o.a.gameHeight, 3 * o.a.gameWidth, 1.5 * o.a.gameHeight + 6, o.a.spriteKey, "ui/gray.png"),
                this.botBrickwallStroke.setDisplayOrigin(0, 0),
                this.botBrickwallStroke.setTileScale(1 / o.a.spriteScale, 1 / o.a.spriteScale),
                this.botBrickwallStroke.y -= o.a.gameHeight / 2,
                c.a.mySpriteDepth(c.a.RENDER_DEPTH.TRANSITION, this.botBrickwallStroke),
                c.a.mySpriteDepth(c.a.RENDER_DEPTH.TRANSITION, this.botBrickwall),
                c.a.mySpriteDepth(c.a.RENDER_DEPTH.TRANSITION, this.topBrickwallStroke),
                c.a.mySpriteDepth(c.a.RENDER_DEPTH.TRANSITION, this.topBrickwall),
                this.posTopbrickClosedY = this.topBrickwall.y,
                this.posBotbrickClosedY = this.botBrickwall.y,
                this.posTopbrickOpenY = this.posTopbrickClosedY - o.a.gameHeight / 2 + h.a.cameraOffset.y,
                this.posBotbrickOpenY = this.posBotbrickClosedY + o.a.gameHeight / 2 - h.a.cameraOffset.y,
                this.botBrickwall.y = this.posBotbrickClosedY,
                this.botBrickwallStroke.y = this.botBrickwall.y,
                this.tweenTop = null,
                this.tweenBot = null,
                this._TRANSITION_STATES = {
                    OPEN: "open",
                    CLOSED: "closed",
                    ANIMATING: "animating"
                },
                this._transitionState = this._TRANSITION_STATES.CLOSED,
                this.myOnResize(),
                _.a(this.myScene, this.myScene.game.events, "LevelEditoSceneResize", this.myOnResize, this)
            }
            return r()(e, [{
                key: "transitionOpen",
                value: function() {
                    return this.transitionToggle(!0),
                    this
                }
            }, {
                key: "clearSlides",
                value: function() {
                    return this.topBrickwall.y = this.posTopbrickOpenY,
                    this.botBrickwall.y = this.posBotbrickOpenY,
                    this.topBrickwallStroke.y = this.topBrickwall.y,
                    this.botBrickwallStroke.y = this.botBrickwall.y,
                    this._transitionState = this._TRANSITION_STATES.OPEN,
                    this
                }
            }, {
                key: "transitionToggle",
                value: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (this._transitionState = this._TRANSITION_STATES.ANIMATING,
                    this.passedAlongSceneData = a,
                    o.a.isBS2 || o.a.isBS3)
                        this._transitionCompleted(e, t);
                    else {
                        var i = this.posTopbrickOpenY
                          , s = this.posBotbrickOpenY;
                        e || (i = this.posTopbrickClosedY,
                        s = this.posBotbrickClosedY);
                        var n = 0;
                        e && (n = 550),
                        null != this.tweenTop && this.tweenTop.remove(),
                        null != this.tweenBot && this.tweenBot.remove();
                        var r = this;
                        this.tweenTop = this.myScene.tweens.add({
                            targets: [this.topBrickwall, this.topBrickwallStroke],
                            y: i,
                            ease: "Quart.easeIn",
                            duration: 300,
                            delay: n,
                            onComplete: r._transitionCompleted.bind(this, e, t),
                            onStart: function() {
                                e ? l.a.playSound(r.myScene, l.a.SND.UI_SLIDE_UP) : l.a.playSound(r.myScene, l.a.SND.UI_SLIDE_DOWN)
                            }
                        }),
                        this.tweenBot = this.myScene.tweens.add({
                            targets: [this.botBrickwall, this.botBrickwallStroke],
                            y: s,
                            ease: "Quart.easeIn",
                            duration: 300,
                            delay: n
                        })
                    }
                }
            }, {
                key: "_transitionCompleted",
                value: function(e, t) {
                    e ? (this._transitionState = this._TRANSITION_STATES.OPEN,
                    null != this.tweenBot && this.tweenBot.remove(),
                    this.myOnResize()) : (this._transitionState = this._TRANSITION_STATES.CLOSED,
                    this.myScene.scene.start(t, this.passedAlongSceneData))
                }
            }, {
                key: "myOnResize",
                value: function() {
                    this._transitionState == this._TRANSITION_STATES.OPEN && (this.posTopbrickOpenY = this.posTopbrickClosedY - o.a.gameHeight / 2 + h.a.cameraOffset.y,
                    this.posBotbrickOpenY = this.posBotbrickClosedY + o.a.gameHeight / 2 - h.a.cameraOffset.y,
                    this.topBrickwall.y = this.posTopbrickOpenY,
                    this.botBrickwall.y = this.posBotbrickOpenY,
                    this.topBrickwallStroke.y = this.topBrickwall.y,
                    this.botBrickwallStroke.y = this.botBrickwall.y)
                }
            }]),
            e
        }()
    },
    453: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = {};
        a.r(i),
        a.d(i, "time1", (function() {
            return P
        }
        )),
        a.d(i, "time2", (function() {
            return L
        }
        )),
        a.d(i, "items", (function() {
            return A
        }
        )),
        a.d(i, "item_prob", (function() {
            return I
        }
        )),
        a.d(i, "ballInfo", (function() {
            return M
        }
        )),
        a.d(i, "players", (function() {
            return O
        }
        )),
        a.d(i, "walls", (function() {
            return D
        }
        )),
        a.d(i, "balls", (function() {
            return R
        }
        ));
        var s = {};
        a.r(s),
        a.d(s, "time1", (function() {
            return B
        }
        )),
        a.d(s, "time2", (function() {
            return w
        }
        )),
        a.d(s, "items", (function() {
            return N
        }
        )),
        a.d(s, "item_prob", (function() {
            return x
        }
        )),
        a.d(s, "ballInfo", (function() {
            return C
        }
        )),
        a.d(s, "players", (function() {
            return U
        }
        )),
        a.d(s, "walls", (function() {
            return W
        }
        )),
        a.d(s, "balls", (function() {
            return Y
        }
        ));
        var n = {};
        a.r(n),
        a.d(n, "time1", (function() {
            return K
        }
        )),
        a.d(n, "time2", (function() {
            return G
        }
        )),
        a.d(n, "items", (function() {
            return H
        }
        )),
        a.d(n, "item_prob", (function() {
            return V
        }
        )),
        a.d(n, "ballInfo", (function() {
            return z
        }
        )),
        a.d(n, "players", (function() {
            return F
        }
        )),
        a.d(n, "walls", (function() {
            return X
        }
        )),
        a.d(n, "balls", (function() {
            return j
        }
        ));
        var r = {};
        a.r(r),
        a.d(r, "time1", (function() {
            return q
        }
        )),
        a.d(r, "time2", (function() {
            return J
        }
        )),
        a.d(r, "items", (function() {
            return Z
        }
        )),
        a.d(r, "item_prob", (function() {
            return Q
        }
        )),
        a.d(r, "ballInfo", (function() {
            return $
        }
        )),
        a.d(r, "players", (function() {
            return ee
        }
        )),
        a.d(r, "walls", (function() {
            return te
        }
        )),
        a.d(r, "balls", (function() {
            return ae
        }
        ));
        var o = {};
        a.r(o),
        a.d(o, "time1", (function() {
            return ie
        }
        )),
        a.d(o, "time2", (function() {
            return se
        }
        )),
        a.d(o, "items", (function() {
            return ne
        }
        )),
        a.d(o, "item_prob", (function() {
            return re
        }
        )),
        a.d(o, "ballInfo", (function() {
            return oe
        }
        )),
        a.d(o, "players", (function() {
            return le
        }
        )),
        a.d(o, "walls", (function() {
            return he
        }
        )),
        a.d(o, "balls", (function() {
            return _e
        }
        ));
        var l = {};
        a.r(l),
        a.d(l, "time1", (function() {
            return ce
        }
        )),
        a.d(l, "time2", (function() {
            return de
        }
        )),
        a.d(l, "items", (function() {
            return ue
        }
        )),
        a.d(l, "item_prob", (function() {
            return pe
        }
        )),
        a.d(l, "ballInfo", (function() {
            return me
        }
        )),
        a.d(l, "players", (function() {
            return ye
        }
        )),
        a.d(l, "walls", (function() {
            return ge
        }
        )),
        a.d(l, "balls", (function() {
            return Se
        }
        ));
        var h = {};
        a.r(h),
        a.d(h, "offsetBackground", (function() {
            return Ee
        }
        )),
        a.d(h, "time1", (function() {
            return fe
        }
        )),
        a.d(h, "time2", (function() {
            return Te
        }
        )),
        a.d(h, "items", (function() {
            return ve
        }
        )),
        a.d(h, "item_prob", (function() {
            return be
        }
        )),
        a.d(h, "ballInfo", (function() {
            return ke
        }
        )),
        a.d(h, "players", (function() {
            return Pe
        }
        )),
        a.d(h, "walls", (function() {
            return Le
        }
        )),
        a.d(h, "balls", (function() {
            return Ae
        }
        ));
        var _ = {};
        a.r(_),
        a.d(_, "time1", (function() {
            return Ie
        }
        )),
        a.d(_, "time2", (function() {
            return Me
        }
        )),
        a.d(_, "items", (function() {
            return Oe
        }
        )),
        a.d(_, "item_prob", (function() {
            return De
        }
        )),
        a.d(_, "ballInfo", (function() {
            return Re
        }
        )),
        a.d(_, "players", (function() {
            return Be
        }
        )),
        a.d(_, "walls", (function() {
            return we
        }
        )),
        a.d(_, "balls", (function() {
            return Ne
        }
        ));
        var c = {};
        a.r(c),
        a.d(c, "time1", (function() {
            return xe
        }
        )),
        a.d(c, "time2", (function() {
            return Ce
        }
        )),
        a.d(c, "items", (function() {
            return Ue
        }
        )),
        a.d(c, "item_prob", (function() {
            return We
        }
        )),
        a.d(c, "ballInfo", (function() {
            return Ye
        }
        )),
        a.d(c, "players", (function() {
            return Ke
        }
        )),
        a.d(c, "walls", (function() {
            return Ge
        }
        )),
        a.d(c, "balls", (function() {
            return He
        }
        ));
        var d = {};
        a.r(d),
        a.d(d, "time1", (function() {
            return Ve
        }
        )),
        a.d(d, "time2", (function() {
            return ze
        }
        )),
        a.d(d, "items", (function() {
            return Fe
        }
        )),
        a.d(d, "item_prob", (function() {
            return Xe
        }
        )),
        a.d(d, "ballInfo", (function() {
            return je
        }
        )),
        a.d(d, "players", (function() {
            return qe
        }
        )),
        a.d(d, "walls", (function() {
            return Je
        }
        )),
        a.d(d, "balls", (function() {
            return Ze
        }
        ));
        var u = {};
        a.r(u),
        a.d(u, "time1", (function() {
            return Qe
        }
        )),
        a.d(u, "time2", (function() {
            return $e
        }
        )),
        a.d(u, "items", (function() {
            return et
        }
        )),
        a.d(u, "item_prob", (function() {
            return tt
        }
        )),
        a.d(u, "ballInfo", (function() {
            return at
        }
        )),
        a.d(u, "players", (function() {
            return it
        }
        )),
        a.d(u, "walls", (function() {
            return st
        }
        )),
        a.d(u, "balls", (function() {
            return nt
        }
        ));
        var p = {};
        a.r(p),
        a.d(p, "time1", (function() {
            return rt
        }
        )),
        a.d(p, "time2", (function() {
            return ot
        }
        )),
        a.d(p, "items", (function() {
            return lt
        }
        )),
        a.d(p, "item_prob", (function() {
            return ht
        }
        )),
        a.d(p, "ballInfo", (function() {
            return _t
        }
        )),
        a.d(p, "players", (function() {
            return ct
        }
        )),
        a.d(p, "walls", (function() {
            return dt
        }
        )),
        a.d(p, "balls", (function() {
            return ut
        }
        ));
        var m = {};
        a.r(m),
        a.d(m, "time1", (function() {
            return pt
        }
        )),
        a.d(m, "time2", (function() {
            return mt
        }
        )),
        a.d(m, "items", (function() {
            return yt
        }
        )),
        a.d(m, "item_prob", (function() {
            return gt
        }
        )),
        a.d(m, "ballInfo", (function() {
            return St
        }
        )),
        a.d(m, "players", (function() {
            return Et
        }
        )),
        a.d(m, "walls", (function() {
            return ft
        }
        )),
        a.d(m, "balls", (function() {
            return Tt
        }
        ));
        var y = {};
        a.r(y),
        a.d(y, "time1", (function() {
            return vt
        }
        )),
        a.d(y, "time2", (function() {
            return bt
        }
        )),
        a.d(y, "items", (function() {
            return kt
        }
        )),
        a.d(y, "item_prob", (function() {
            return Pt
        }
        )),
        a.d(y, "ballInfo", (function() {
            return Lt
        }
        )),
        a.d(y, "players", (function() {
            return At
        }
        )),
        a.d(y, "walls", (function() {
            return It
        }
        )),
        a.d(y, "balls", (function() {
            return Mt
        }
        ));
        var g = {};
        a.r(g),
        a.d(g, "time1", (function() {
            return Ot
        }
        )),
        a.d(g, "time2", (function() {
            return Dt
        }
        )),
        a.d(g, "items", (function() {
            return Rt
        }
        )),
        a.d(g, "item_prob", (function() {
            return Bt
        }
        )),
        a.d(g, "ballInfo", (function() {
            return wt
        }
        )),
        a.d(g, "players", (function() {
            return Nt
        }
        )),
        a.d(g, "walls", (function() {
            return xt
        }
        )),
        a.d(g, "balls", (function() {
            return Ct
        }
        ));
        var S = {};
        a.r(S),
        a.d(S, "offsetBackground", (function() {
            return Ut
        }
        )),
        a.d(S, "time1", (function() {
            return Wt
        }
        )),
        a.d(S, "time2", (function() {
            return Yt
        }
        )),
        a.d(S, "items", (function() {
            return Kt
        }
        )),
        a.d(S, "item_prob", (function() {
            return Gt
        }
        )),
        a.d(S, "ballInfo", (function() {
            return Ht
        }
        )),
        a.d(S, "players", (function() {
            return Vt
        }
        )),
        a.d(S, "walls", (function() {
            return zt
        }
        )),
        a.d(S, "balls", (function() {
            return Ft
        }
        ));
        var E = {};
        a.r(E),
        a.d(E, "time1", (function() {
            return Xt
        }
        )),
        a.d(E, "time2", (function() {
            return jt
        }
        )),
        a.d(E, "items", (function() {
            return qt
        }
        )),
        a.d(E, "item_prob", (function() {
            return Jt
        }
        )),
        a.d(E, "ballInfo", (function() {
            return Zt
        }
        )),
        a.d(E, "players", (function() {
            return Qt
        }
        )),
        a.d(E, "walls", (function() {
            return $t
        }
        )),
        a.d(E, "balls", (function() {
            return ea
        }
        ));
        var f = {};
        a.r(f),
        a.d(f, "time1", (function() {
            return na
        }
        )),
        a.d(f, "time2", (function() {
            return ra
        }
        )),
        a.d(f, "items", (function() {
            return oa
        }
        )),
        a.d(f, "item_prob", (function() {
            return la
        }
        )),
        a.d(f, "ballInfo", (function() {
            return ha
        }
        )),
        a.d(f, "players", (function() {
            return _a
        }
        )),
        a.d(f, "walls", (function() {
            return ca
        }
        )),
        a.d(f, "balls", (function() {
            return da
        }
        ));
        var T = {};
        a.r(T),
        a.d(T, "time1", (function() {
            return ua
        }
        )),
        a.d(T, "time2", (function() {
            return pa
        }
        )),
        a.d(T, "items", (function() {
            return ma
        }
        )),
        a.d(T, "item_prob", (function() {
            return ya
        }
        )),
        a.d(T, "ballInfo", (function() {
            return ga
        }
        )),
        a.d(T, "players", (function() {
            return Sa
        }
        )),
        a.d(T, "walls", (function() {
            return Ea
        }
        )),
        a.d(T, "balls", (function() {
            return fa
        }
        ));
        var v = {};
        a.r(v),
        a.d(v, "time1", (function() {
            return Ta
        }
        )),
        a.d(v, "time2", (function() {
            return va
        }
        )),
        a.d(v, "items", (function() {
            return ba
        }
        )),
        a.d(v, "item_prob", (function() {
            return ka
        }
        )),
        a.d(v, "ballInfo", (function() {
            return Pa
        }
        )),
        a.d(v, "players", (function() {
            return La
        }
        )),
        a.d(v, "walls", (function() {
            return Aa
        }
        )),
        a.d(v, "balls", (function() {
            return Ia
        }
        ));
        var b = {};
        a.r(b),
        a.d(b, "time1", (function() {
            return Oa
        }
        )),
        a.d(b, "time2", (function() {
            return Da
        }
        )),
        a.d(b, "items", (function() {
            return Ra
        }
        )),
        a.d(b, "item_prob", (function() {
            return Ba
        }
        )),
        a.d(b, "ballInfo", (function() {
            return wa
        }
        )),
        a.d(b, "players", (function() {
            return Na
        }
        )),
        a.d(b, "walls", (function() {
            return xa
        }
        )),
        a.d(b, "balls", (function() {
            return Ca
        }
        ));
        var k = {};
        a.r(k),
        a.d(k, "time1", (function() {
            return Ha
        }
        )),
        a.d(k, "time2", (function() {
            return Va
        }
        )),
        a.d(k, "items", (function() {
            return za
        }
        )),
        a.d(k, "item_prob", (function() {
            return Fa
        }
        )),
        a.d(k, "ballInfo", (function() {
            return Xa
        }
        )),
        a.d(k, "players", (function() {
            return ja
        }
        )),
        a.d(k, "walls", (function() {
            return qa
        }
        )),
        a.d(k, "balls", (function() {
            return Ja
        }
        ));
        var P = 40
          , L = 25
          , A = [!0, !0, !0, !1, !0, !1, !1, !1, !1, !1, !1, !1]
          , I = 2
          , M = {}
          , O = [{
            x: 300,
            y: 347,
            id: 1
        }, {
            x: 360,
            y: 347,
            id: 2
        }]
          , D = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , R = [{
            x: 85,
            y: 250,
            id: 2,
            c: "yellow",
            vx: 1,
            vy: 1
        }]
          , B = 40
          , w = 25
          , N = [!0, !0, !0, !1, !0, !1, !1, !1, !1, !1, !1, !1]
          , x = 2
          , C = {}
          , U = [{
            x: 300,
            y: 347,
            id: 1
        }, {
            x: 360,
            y: 347,
            id: 2
        }]
          , W = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , Y = [{
            x: 75,
            y: 200,
            id: 3,
            c: "green",
            vx: 1,
            vy: 1
        }]
          , K = 40
          , G = 25
          , H = [!0, !0, !0, !1, !0, !1, !1, !1, !1, !1, !1, !1]
          , V = 2
          , z = {}
          , F = [{
            x: 300,
            y: 347,
            id: 1
        }, {
            x: 360,
            y: 347,
            id: 2
        }]
          , X = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , j = [{
            x: 90,
            y: 185,
            id: 4,
            c: "red",
            vx: 1,
            vy: 1
        }]
          , q = 40
          , J = 25
          , Z = [!0, !0, !0, !1, !0, !1, !1, !1, !1, !1, !1, !1]
          , Q = 2
          , $ = {}
          , ee = [{
            x: 300,
            y: 347,
            id: 1
        }, {
            x: 400,
            y: 347,
            id: 2
        }]
          , te = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , ae = [{
            x: 215.6,
            y: 170.8,
            id: 3,
            c: "orange",
            vx: -1,
            vy: 1
        }, {
            x: 484.4,
            y: 170.8,
            id: 3,
            c: "orange",
            vx: 1,
            vy: 1
        }]
          , ie = 40
          , se = 25
          , ne = [!0, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1, !1]
          , re = 2
          , oe = {}
          , le = [{
            x: 40,
            y: 347,
            id: 1
        }, {
            x: 78,
            y: 347,
            id: 2
        }]
          , he = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 340,
            y: 155.5,
            w: 40,
            h: 309,
            t: "normal"
        }, {
            x: 340,
            y: 339,
            w: 40,
            h: 58,
            t: "door",
            eType: "color_popped",
            eInfo: "yellow"
        }]
          , _e = [{
            x: 136,
            y: 180,
            id: 3,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 560,
            y: 140,
            id: 4,
            c: "green",
            vx: -1,
            vy: 1
        }]
          , ce = 20
          , de = 15
          , ue = [!0, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1, !1]
          , pe = 2
          , me = {}
          , ye = [{
            x: 347,
            y: 347,
            id: 1
        }, {
            x: 376,
            y: 347,
            id: 2
        }]
          , ge = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15,
            eType: "gamestart"
        }]
          , Se = [{
            x: 13.95,
            y: 318,
            id: 1,
            c: "blue",
            vx: -1,
            vy: 1
        }, {
            x: 93.25,
            y: 358,
            id: 1,
            c: "purple",
            vx: -1,
            vy: 1
        }, {
            x: 164.55,
            y: 318,
            id: 1,
            c: "blue",
            vx: -1,
            vy: 1
        }, {
            x: 237.25,
            y: 358,
            id: 1,
            c: "purple",
            vx: -1,
            vy: 1
        }, {
            x: 469.95,
            y: 358,
            id: 1,
            c: "purple",
            vx: 1,
            vy: 1
        }, {
            x: 543.95,
            y: 318,
            id: 1,
            c: "blue",
            vx: 1,
            vy: 1
        }, {
            x: 613.95,
            y: 358,
            id: 1,
            c: "purple",
            vx: 1,
            vy: 1
        }, {
            x: 683.95,
            y: 318,
            id: 1,
            c: "blue",
            vx: 1,
            vy: 1
        }]
          , Ee = {
            x: 0,
            y: 24
        }
          , fe = 25
          , Te = 18
          , ve = [!0, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1, !1]
          , be = 2
          , ke = {}
          , Pe = [{
            x: 325.6,
            y: 263.3,
            id: 1
        }, {
            x: 366.4,
            y: 263.3,
            id: 2
        }]
          , Le = [{
            x: 350,
            y: 155,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 350,
            y: 326,
            w: 688,
            h: 84,
            t: "normal"
        }]
          , Ae = [{
            x: 17.5,
            y: 218.5,
            id: 1,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 39.5,
            y: 218.5,
            id: 1,
            c: "orange",
            vx: 1,
            vy: 1
        }, {
            x: 61.5,
            y: 218.5,
            id: 1,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 161,
            y: 218.5,
            id: 1,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 179.5,
            y: 218.5,
            id: 1,
            c: "orange",
            vx: 1,
            vy: 1
        }, {
            x: 201,
            y: 218.5,
            id: 1,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 497.4,
            y: 218.5,
            id: 1,
            c: "red",
            vx: -1,
            vy: 1
        }, {
            x: 518.9,
            y: 218.5,
            id: 1,
            c: "orange",
            vx: -1,
            vy: 1
        }, {
            x: 537.4,
            y: 218.5,
            id: 1,
            c: "red",
            vx: -1,
            vy: 1
        }, {
            x: 636.9,
            y: 218.5,
            id: 1,
            c: "yellow",
            vx: -1,
            vy: 1
        }, {
            x: 658.9,
            y: 218.5,
            id: 1,
            c: "orange",
            vx: -1,
            vy: 1
        }, {
            x: 680.9,
            y: 218.5,
            id: 1,
            c: "red",
            vx: -1,
            vy: 1
        }]
          , Ie = 110
          , Me = 50
          , Oe = [!0, !0, !0, !0, !0, !0, !0, !1, !1, !1, !1, !1]
          , De = 2
          , Re = {}
          , Be = [{
            x: 36.6,
            y: 347,
            id: 1
        }, {
            x: 89.4,
            y: 347,
            id: 2
        }]
          , we = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 260,
            y: 95.5,
            w: 40,
            h: 189,
            t: "sliding",
            slideX: 0,
            slideY: -190,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "yellow"
        }, {
            x: 260,
            y: 279,
            w: 40,
            h: 178,
            t: "sliding",
            slideX: 0,
            slideY: 180,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "yellow"
        }, {
            x: 480,
            y: 95.5,
            w: 40,
            h: 189,
            t: "sliding",
            slideX: 0,
            slideY: -190,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "orange"
        }, {
            x: 480,
            y: 279,
            w: 40,
            h: 178,
            t: "sliding",
            slideX: 0,
            slideY: 180,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "orange"
        }]
          , Ne = [{
            x: 118.35,
            y: 199.2,
            id: 3,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 349.35,
            y: 143.2,
            id: 4,
            c: "orange",
            vx: 1,
            vy: 1
        }, {
            x: 605.35,
            y: 143.2,
            id: 5,
            c: "red",
            vx: 1,
            vy: 1
        }]
          , xe = 110
          , Ce = 50
          , Ue = [!0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !1, !1]
          , We = 2
          , Ye = {}
          , Ke = [{
            x: 236.6,
            y: 347,
            id: 1
        }, {
            x: 457.4,
            y: 347,
            id: 2
        }]
          , Ge = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , He = [{
            x: 94.35,
            y: 199.2,
            id: 4,
            c: "yellow",
            vx: -1,
            vy: 1
        }, {
            x: 349.35,
            y: 143.2,
            id: 5,
            c: "red",
            vx: 0,
            vy: 1
        }, {
            x: 598.35,
            y: 199.2,
            id: 4,
            c: "yellow",
            vx: 1,
            vy: 1
        }]
          , Ve = 110
          , ze = 65
          , Fe = [!0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1]
          , Xe = 2
          , je = {}
          , qe = [{
            x: 308,
            y: 347,
            id: 1
        }, {
            x: 385.4,
            y: 347,
            id: 2
        }]
          , Je = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , Ze = [{
            x: 133.35,
            y: 143.2,
            id: 6,
            c: "red",
            vx: 1,
            vy: 1
        }]
          , Qe = 45
          , $e = 30
          , et = [!0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !1, !1]
          , tt = 2
          , at = {
            jumpHeights: {
                green: [0, 266, 266, 179, 219, 259, 304],
                yellow: [0, 266, 266, 179, 219, 259, 304]
            }
        }
          , it = [{
            x: 308.6,
            y: 347,
            id: 1
        }, {
            x: 385.4,
            y: 347,
            id: 2
        }]
          , st = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , nt = [{
            x: 69.35,
            y: 103.2,
            id: 2,
            c: "green",
            vx: 1,
            vy: 1
        }, {
            x: 97.85,
            y: 103.2,
            id: 2,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 126.35,
            y: 103.2,
            id: 2,
            c: "green",
            vx: 1,
            vy: 1
        }, {
            x: 158.35,
            y: 103.2,
            id: 2,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 542.35,
            y: 103.2,
            id: 2,
            c: "yellow",
            vx: -1,
            vy: 1
        }, {
            x: 574.35,
            y: 103.2,
            id: 2,
            c: "green",
            vx: -1,
            vy: 1
        }, {
            x: 602.85,
            y: 103.2,
            id: 2,
            c: "yellow",
            vx: -1,
            vy: 1
        }, {
            x: 631.35,
            y: 103.2,
            id: 2,
            c: "green",
            vx: -1,
            vy: 1
        }]
          , rt = 75
          , ot = 45
          , lt = [!0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !0, !1]
          , ht = 2
          , _t = {}
          , ct = [{
            x: 308.6,
            y: 347,
            id: 1
        }, {
            x: 385.4,
            y: 347,
            id: 2
        }]
          , dt = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , ut = [{
            x: 45.35,
            y: 271.2,
            id: 3,
            c: "purple",
            vx: 0,
            vy: 1
        }, {
            x: 129.85,
            y: 271.2,
            id: 3,
            c: "purple",
            vx: 0,
            vy: 1
        }, {
            x: 209.85,
            y: 271.2,
            id: 3,
            c: "purple",
            vx: 0,
            vy: 1
        }, {
            x: 485.35,
            y: 271.2,
            id: 3,
            c: "blue",
            vx: 0,
            vy: 1
        }, {
            x: 565.35,
            y: 271.2,
            id: 3,
            c: "blue",
            vx: 0,
            vy: 1
        }, {
            x: 646.35,
            y: 271.2,
            id: 3,
            c: "blue",
            vx: 0,
            vy: 1
        }, {
            x: 108.85,
            y: 108.2,
            id: 4,
            c: "green",
            vx: 1,
            vy: 1
        }]
          , pt = 130
          , mt = 75
          , yt = [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1]
          , gt = 2
          , St = {
            jumpHeights: {
                yellow: [0, 139, 179, 219, 259, 259, 304],
                orange: [0, 139, 179, 219, 259, 259, 304],
                red: [0, 139, 179, 219, 259, 259, 304]
            }
        }
          , Et = [{
            x: 227.6,
            y: 347,
            id: 1
        }, {
            x: 471.4,
            y: 347,
            id: 2
        }]
          , ft = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 106,
            y: 155.5,
            w: 40,
            h: 309,
            t: "normal"
        }, {
            x: 106,
            y: 339,
            w: 40,
            h: 58,
            t: "door",
            eType: "gamestart"
        }, {
            x: 227,
            y: 155.5,
            w: 40,
            h: 309,
            t: "normal"
        }, {
            x: 227,
            y: 339,
            w: 40,
            h: 58,
            t: "door",
            eType: "gamestart"
        }, {
            x: 349,
            y: 155.5,
            w: 40,
            h: 309,
            t: "normal"
        }, {
            x: 349,
            y: 339,
            w: 40,
            h: 58,
            t: "door",
            eType: "gamestart"
        }, {
            x: 470.4,
            y: 155.5,
            w: 40,
            h: 309,
            t: "normal"
        }, {
            x: 470.4,
            y: 339,
            w: 40,
            h: 58,
            t: "door",
            eType: "gamestart"
        }, {
            x: 591.75,
            y: 155.5,
            w: 40,
            h: 309,
            t: "normal"
        }, {
            x: 591.75,
            y: 339,
            w: 40,
            h: 58,
            t: "door",
            eType: "gamestart"
        }]
          , Tt = [{
            x: 45.85,
            y: 312.85,
            id: 4,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 658.95,
            y: 312.85,
            id: 4,
            c: "red",
            vx: -1,
            vy: 1
        }, {
            x: 167.85,
            y: 152.85,
            id: 4,
            c: "orange",
            vx: 1,
            vy: 1
        }, {
            x: 537.95,
            y: 152.85,
            id: 4,
            c: "orange",
            vx: -1,
            vy: 1
        }, {
            x: 294,
            y: 224.85,
            id: 3,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 410,
            y: 224.85,
            id: 3,
            c: "yellow",
            vx: -1,
            vy: 1
        }]
          , vt = 110
          , bt = 50
          , kt = [!0, !1, !0, !1, !0, !1, !1, !1, !0, !1, !1, !1]
          , Pt = 2
          , Lt = {}
          , At = [{
            x: 36.6,
            y: 347,
            id: 1
        }, {
            x: 73.4,
            y: 347,
            id: 2
        }]
          , It = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 252.3,
            y: 155.5,
            w: 40,
            h: 309,
            t: "normal"
        }, {
            x: 252.3,
            y: 339,
            w: 40,
            h: 58,
            t: "door",
            eType: "color_popped",
            eInfo: "green"
        }, {
            x: 511.9,
            y: 95.5,
            w: 40,
            h: 189,
            t: "sliding",
            slideX: 0,
            slideY: -190,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "purple"
        }, {
            x: 511.9,
            y: 279,
            w: 40,
            h: 178,
            t: "sliding",
            slideX: 0,
            slideY: 180,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "purple"
        }]
          , Mt = [{
            x: 120.2,
            y: 148.2,
            id: 3,
            c: "green",
            vx: 1,
            vy: 1
        }, {
            x: 368.3,
            y: 167.2,
            id: 4,
            c: "purple",
            vx: -1,
            vy: 1
        }, {
            x: 607.35,
            y: 111.2,
            id: 5,
            c: "blue",
            vx: 1,
            vy: 1
        }]
          , Ot = 150
          , Dt = 80
          , Rt = [!0, !0, !0, !0, !0, !0, !0, !0, !1, !0, !1, !1]
          , Bt = 2
          , wt = {}
          , Nt = [{
            x: 436.6,
            y: 347,
            id: 1
        }, {
            x: 473.4,
            y: 347,
            id: 2
        }]
          , xt = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 164.75,
            y: 95.5,
            w: 40,
            h: 189,
            t: "sliding",
            slideX: 0,
            slideY: -190,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "yellow"
        }, {
            x: 164.75,
            y: 279,
            w: 40,
            h: 178,
            t: "sliding",
            slideX: 0,
            slideY: 180,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "yellow"
        }, {
            x: 529.35,
            y: 95.5,
            w: 40,
            h: 189,
            t: "sliding",
            slideX: 0,
            slideY: -190,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "yellow"
        }, {
            x: 529.35,
            y: 279,
            w: 40,
            h: 178,
            t: "sliding",
            slideX: 0,
            slideY: 180,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "yellow"
        }]
          , Ct = [{
            x: 304.3,
            y: 151.2,
            id: 5,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 68.85,
            y: 68.85,
            id: 6,
            c: "red",
            vx: -1,
            vy: 1
        }, {
            x: 631.35,
            y: 111.2,
            id: 6,
            c: "orange",
            vx: 1,
            vy: 1
        }]
          , Ut = {
            x: 0,
            y: -29
        }
          , Wt = 50
          , Yt = 30
          , Kt = [!0, !1, !0, !1, !1, !0, !0, !0, !1, !0, !0, !1]
          , Gt = 2
          , Ht = {
            jumpHeights: {
                blue: [0, 0, 145, 60, 219, 259, 304]
            },
            floorY: {
                blue: 300
            }
        }
          , Vt = [{
            x: 301,
            y: 281.9,
            id: 1
        }, {
            x: 399.4,
            y: 281.9,
            id: 2
        }]
          , zt = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 350,
            y: 335.5,
            w: 688,
            h: 65,
            t: "normal"
        }]
          , Ft = [{
            x: 39.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: 1,
            vy: 1
        }, {
            x: 79.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: 1,
            vy: 1
        }, {
            x: 119.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: 1,
            vy: 1
        }, {
            x: 159.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: 1,
            vy: 1
        }, {
            x: 199.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: 1,
            vy: 1
        }, {
            x: 503.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: -1,
            vy: 1
        }, {
            x: 543.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: -1,
            vy: 1
        }, {
            x: 583.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: -1,
            vy: 1
        }, {
            x: 623.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: -1,
            vy: 1
        }, {
            x: 663.85,
            y: 155.85,
            id: 2,
            c: "blue",
            vx: -1,
            vy: 1
        }]
          , Xt = 150
          , jt = 80
          , qt = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !0]
          , Jt = 0
          , Zt = {}
          , Qt = [{
            x: 314.6,
            y: 347,
            id: 1
        }, {
            x: 351.4,
            y: 347,
            id: 2
        }]
          , $t = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 93,
            y: 184.5,
            w: 174,
            h: 367,
            t: "normal"
        }, {
            x: 602,
            y: 184.5,
            w: 184,
            h: 367,
            t: "normal"
        }]
          , ea = [{
            x: 289.5,
            y: 201.45,
            id: 6,
            c: "orange",
            vx: -1,
            vy: 1
        }, {
            x: 393.5,
            y: 201.45,
            id: 6,
            c: "orange",
            vx: 1,
            vy: 1
        }, {
            x: 337.5,
            y: 153.45,
            id: 4,
            c: "yellow",
            vx: 1,
            vy: 1
        }]
          , ta = (a(69),
        a(0))
          , aa = a(3)
          , ia = a(8)
          , sa = a(20)
          , na = 125
          , ra = 90
          , oa = [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1]
          , la = 2
          , ha = {
            grav: .8
        }
          , _a = [{
            x: 314.6,
            y: 347,
            id: 1
        }, {
            x: 351.4,
            y: 347,
            id: 2
        }]
          , ca = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , da = [{
            x: 118.35,
            y: 151.2,
            id: 5,
            c: "green",
            vx: 1,
            vy: 1
        }, {
            x: 302.35,
            y: 151.2,
            id: 5,
            c: "yellow",
            vx: 1,
            vy: 1
        }, {
            x: 494.35,
            y: 151.2,
            id: 5,
            c: "orange",
            vx: 1,
            vy: 1
        }]
          , ua = 125
          , pa = 90
          , ma = [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1]
          , ya = 2
          , ga = {
            grav: .8
        }
          , Sa = [{
            x: 314.6,
            y: 347,
            id: 1
        }, {
            x: 351.4,
            y: 347,
            id: 2
        }]
          , Ea = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , fa = [{
            x: 99,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 150,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 200,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 250,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 299,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 350,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 399,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 450,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 499,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 550,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 599,
            y: 111.2,
            id: 3,
            c: "red",
            vx: 1,
            vy: 1
        }]
          , Ta = 125
          , va = 90
          , ba = [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1]
          , ka = 2
          , Pa = {
            grav: .8
        }
          , La = [{
            x: 314.6,
            y: 347,
            id: 1
        }, {
            x: 351.4,
            y: 347,
            id: 2
        }]
          , Aa = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }, {
            x: 479.9,
            y: 95.5,
            w: 40,
            h: 189,
            t: "sliding",
            slideX: 0,
            slideY: -190,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "red"
        }, {
            x: 479.9,
            y: 279,
            w: 40,
            h: 178,
            t: "sliding",
            slideX: 0,
            slideY: 180,
            slideTime: .4,
            eType: "color_popped",
            eInfo: "red"
        }]
          , Ia = [{
            x: 106,
            y: 127.2,
            id: 6,
            c: "red",
            vx: 1,
            vy: 1
        }, {
            x: 589.45,
            y: 128,
            id: 6,
            c: "green",
            vx: 1,
            vy: 1
        }]
          , Ma = (a(249),
        a(1))
          , Oa = 80
          , Da = 120
          , Ra = [!0, !0, !0, !0, !1, !0, !0, !0, !0, !0, !1, !1]
          , Ba = 2
          , wa = {
            grav: .8
        }
          , Na = [{
            x: 314.6,
            y: 347,
            id: 1
        }, {
            x: 351.4,
            y: 347,
            id: 2
        }]
          , xa = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , Ca = []
          , Ua = a(31)
          , Wa = a(67)
          , Ya = a(24)
          , Ka = a(23)
          , Ga = a(50)
          , Ha = 1160
          , Va = 905
          , za = [!0, !1, !0, !1, !1, !0, !1, !0, !1, !1, !1, !0]
          , Fa = 2
          , Xa = {
            grav: .8
        }
          , ja = [{
            x: 314.6,
            y: 347,
            id: 1
        }, {
            x: 351.4,
            y: 347,
            id: 2
        }]
          , qa = [{
            x: 350,
            y: -1,
            w: 688,
            h: 10,
            t: "ceilspike",
            slideTime: 15
        }]
          , Ja = [{
            x: 106,
            y: 127.2,
            id: 6,
            c: "red",
            vx: 1,
            vy: 1,
            splitWay: 3
        }]
          , Za = a(176);
        a.d(t, "lvl1", (function() {
            return Qa
        }
        )),
        a.d(t, "lvl2", (function() {
            return $a
        }
        )),
        a.d(t, "lvl3", (function() {
            return ei
        }
        )),
        a.d(t, "lvl4", (function() {
            return ti
        }
        )),
        a.d(t, "lvl5", (function() {
            return ai
        }
        )),
        a.d(t, "lvl6", (function() {
            return ii
        }
        )),
        a.d(t, "lvl7", (function() {
            return si
        }
        )),
        a.d(t, "lvl8", (function() {
            return ni
        }
        )),
        a.d(t, "lvl9", (function() {
            return ri
        }
        )),
        a.d(t, "lvl10", (function() {
            return oi
        }
        )),
        a.d(t, "lvl11", (function() {
            return li
        }
        )),
        a.d(t, "lvl12", (function() {
            return hi
        }
        )),
        a.d(t, "lvl13", (function() {
            return _i
        }
        )),
        a.d(t, "lvl14", (function() {
            return ci
        }
        )),
        a.d(t, "lvl15", (function() {
            return di
        }
        )),
        a.d(t, "lvl16", (function() {
            return ui
        }
        )),
        a.d(t, "lvl17", (function() {
            return pi
        }
        )),
        a.d(t, "lvl18", (function() {
            return mi
        }
        )),
        a.d(t, "lvl19", (function() {
            return yi
        }
        )),
        a.d(t, "lvl20", (function() {
            return gi
        }
        )),
        a.d(t, "lvl21", (function() {
            return Si
        }
        )),
        a.d(t, "lvl22", (function() {
            return Ei
        }
        ));
        var Qa = i
          , $a = s
          , ei = n
          , ti = r
          , ai = o
          , ii = l
          , si = h
          , ni = _
          , ri = c
          , oi = d
          , li = u
          , hi = p
          , _i = m
          , ci = y
          , di = g
          , ui = S
          , pi = E;
        pi.extra = function(e) {
            if (sa.a.isLazyLoaded) {
                var t = new ia.a(e,92,195,ta.a.lazySpriteKey,"ui/window.png")
                  , a = new ia.a(e,612,195,ta.a.lazySpriteKey,"ui/window.png");
                a.scaleX = -a.scaleX
            }
            aa.a.mySpriteDepth(aa.a.RENDER_DEPTH.UI, t),
            aa.a.mySpriteDepth(aa.a.RENDER_DEPTH.UI, a)
        }
        ;
        var mi = f
          , yi = T
          , gi = v;
        gi.extra = function(e) {
            var t = [];
            aa.a._allGameObjects.forEach((function(e) {
                null != e.wallType && e.wallType == Ma.a.WALL.WALL_TYPE.SLIDING_BT1 && t.push(e)
            }
            )),
            new aa.a(e).myUpdate = function(e, a) {
                this.gameScene.isGamePaused || t.forEach((function(e) {
                    e.pos.x -= 5 * a / 1e3,
                    e.pos.x < 265 && (e.pos.x = 265)
                }
                ))
            }
        }
        ;
        var Si = b;
        Si.extra = function(e) {
            var t = 0
              , a = [];
            e.timebar.outOfTime = function() {}
            ,
            e.ballManager._allBubblesArePopped = function() {
                return !1
            }
            ;
            var i = new aa.a(e);
            i.nextSpawnTime = 6,
            e.myEventManager.registerForEvent(i, Ua.a.EVENT_TYPE.TIME_END),
            i.onReceiveMyEvent = function(e, t) {
                this.gameScene.levelComplete()
            }
            ,
            i.myUpdate = function(e, t) {
                if (!this.gameScene.isGamePaused) {
                    this.nextSpawnTime -= t / 1e3,
                    this.nextSpawnTime <= 0 && this.spawnBubble();
                    for (var i = 0; i < a.length; i++) {
                        var s = a[i];
                        (s.vel.x > 0 && s.pos.x > ta.a.gameAreaMin.x + s.radius || s.vel.x < 0 && s.pos.x < ta.a.gameAreaMax.x - s.radius) && (this._enableSpawnedBall(s),
                        a.splice(i, 1))
                    }
                }
            }
            ,
            i._enableSpawnedBall = function(e) {
                this.gameScene.phyEngine.bodySwitchLayer(Ka.a.LAYER.BALL, Ka.a.LAYERS_BALL, e),
                e.mySprite.alpha = 1
            }
            ,
            i.spawnBubble = function() {
                t < 5 && t++,
                this.nextSpawnTime = 6 - .5 * t;
                var e = {};
                e.id = Ya.c(3) + 2,
                e.c = Ya.b(Ga.a.COL_NAME_BT1_ONLY),
                e.y = 100,
                e.vy = 1,
                e.vx = 1,
                e.x = -50,
                0 == Ya.c(2) && (e.vx = -1,
                e.x = ta.a.gameWidth + 50);
                var i = new Wa.a(this.gameScene,e).myInit(e);
                this.gameScene.phyEngine.bodySwitchLayer(Ka.a.LAYER.NONE, Ka.a.LAYERS_NONE, i),
                i.mySprite.alpha = .5,
                a.push(i)
            }
        }
        ;
        var Ei = k;
        Ei.extra = Za.a
    },
    455: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return MyTaskRules
        }
        ));
        var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10)
          , _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__)
          , _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7)
          , _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__)
          , _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11)
          , _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__)
          , _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5)
          , _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__)
          , _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6)
          , _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__)
          , _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2)
          , _my_game_logic_MyGame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9)
          , _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4)
          , _MyTasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13)
          , _build_platforms_GameConfigs_GameConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0)
          , _my_game_settings_MyAnalytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29)
          , MyTaskRules = function() {
            function e() {
                _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, e)
            }
            return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(e, null, [{
                key: "generateMethods",
                value: function(e) {
                    for (var t = [{
                        taskType: _MyTasks__WEBPACK_IMPORTED_MODULE_8__.a.TASK_TYPE.REPEAT_LOGIN,
                        factory: MyTaskRule_RepeatLogin
                    }], a = !1, i = 0; i < t.length; i++)
                        t[i].taskType == e.taskType && (e.methods = new t[i].factory(e),
                        a = !0);
                    a || (null == e.ruleFragment1 ? e.methods = new MyTaskRule_Count(e) : null == e.ruleFragment2 ? e.methods = new MyTaskRule_Array(e) : e.methods = new MyTaskRule_Object(e))
                }
            }]),
            e
        }()
          , MyTaskRuleBase = function() {
            function MyTaskRuleBase(e) {
                _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, MyTaskRuleBase),
                this.task = e,
                this._validateTask(),
                _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_5__.a.debugLog || (this.__debug = function() {}
                )
            }
            return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MyTaskRuleBase, [{
                key: "_validateTask",
                value: function() {
                    for (var e in _MyTasks__WEBPACK_IMPORTED_MODULE_8__.a.TASK_TYPE)
                        if (this.task.taskType == _MyTasks__WEBPACK_IMPORTED_MODULE_8__.a.TASK_TYPE[e])
                            return !0;
                    _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_5__.a.error("Unknown taskType", this.task.taskType)
                }
            }, {
                key: "resetStartVal",
                value: function(e) {}
            }, {
                key: "getValue",
                value: function() {}
            }, {
                key: "updateValue",
                value: function(e) {
                    this.__debug("Updating values..", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]),
                    this.updateValidatedValue(e),
                    this.showPinnedTaskProgress(),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.saveUserSettings(),
                    this.__debug("Updating values COMPLETED:..", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType])
                }
            }, {
                key: "incrementValue",
                value: function(e) {
                    this.__debug("Increment values..", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]),
                    this.incrementValidatedValue(e),
                    this.showPinnedTaskProgress(),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.saveUserSettings(),
                    this.__debug("Increment values COMPLETED:..", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType])
                }
            }, {
                key: "updateValidatedValue",
                value: function(e) {}
            }, {
                key: "incrementValidatedValue",
                value: function(e) {}
            }, {
                key: "notifyIfComplete",
                value: function() {
                    var e = this.task.methods.isTaskCompleted();
                    this.__debug("notifyIfComplete:", e, !_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksCompleted.includes(this.task.uid)),
                    e && !_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksCompleted.includes(this.task.uid) && (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksCompleted.push(this.task.uid),
                    _MyTasks__WEBPACK_IMPORTED_MODULE_8__.a.RenderTaskFinishedNotification(this.task),
                    _my_game_settings_MyAnalytics__WEBPACK_IMPORTED_MODULE_10__.a.LogTaskCompleted(this.task),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.saveUserSettings())
                }
            }, {
                key: "updateAndNotify",
                value: function(e) {
                    this.updateValue(e),
                    this.notifyIfComplete()
                }
            }, {
                key: "incrementAndNotify",
                value: function(e) {
                    this.incrementValue(e),
                    this.notifyIfComplete()
                }
            }, {
                key: "isTaskCompleted",
                value: function isTaskCompleted() {
                    var currentVal = this.getValue()
                      , success = eval(currentVal + this.task.taskMathOperator + this.task.goalNum);
                    return this.__debug("Evalauting tasks: [" + this.task.taskType + "]", "currently:", currentVal, this.task.taskMathOperator, this.task.goalNum, " - SUCCESS:", success),
                    success
                }
            }, {
                key: "showPinnedTaskProgress",
                value: function() {
                    var e = this.getValue();
                    _MyTasks__WEBPACK_IMPORTED_MODULE_8__.a._renderPinnedTaskProgress(this.task, e)
                }
            }, {
                key: "__debug",
                value: function() {
                    for (var e, t = arguments.length, a = new Array(t), i = 0; i < t; i++)
                        a[i] = arguments[i];
                    this.task.taskType == _MyTasks__WEBPACK_IMPORTED_MODULE_8__.a.TASK_TYPE.LEVEL_COMBOS && (e = console).warn.apply(e, [this.task.taskType].concat(a, [{
                        task: this.task,
                        stats: _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats
                    }]))
                }
            }]),
            MyTaskRuleBase
        }()
          , MyTaskRule_Count = function(e) {
            function t() {
                return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, t),
                _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(t).apply(this, arguments))
            }
            return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(t, e),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(t, [{
                key: "resetStartVal",
                value: function(e) {
                    this.__debug("resetStartVal count", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]),
                    e && null != _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] || (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] = 0)
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.__debug("getValue count", _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]
                }
            }, {
                key: "updateValidatedValue",
                value: function(e) {
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] = e
                }
            }, {
                key: "incrementValidatedValue",
                value: function(e) {
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] += e
                }
            }]),
            t
        }(MyTaskRuleBase)
          , MyTaskRule_Array = function(e) {
            function t() {
                return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, t),
                _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(t).apply(this, arguments))
            }
            return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(t, e),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(t, [{
                key: "resetStartVal",
                value: function(e) {
                    this.__debug("resetStartVal array", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]),
                    e && null != _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] || (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] = {}),
                    e && null != _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1] || (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1] = 0)
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.__debug("getValue array", _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1]),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1]
                }
            }, {
                key: "updateValidatedValue",
                value: function(e) {
                    this.__debug("Really updating val by ", e),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1] = e
                }
            }, {
                key: "incrementValidatedValue",
                value: function(e) {
                    this.__debug("Really inceemneting val by ", e),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1] += e
                }
            }]),
            t
        }(MyTaskRuleBase)
          , MyTaskRule_Object = function(e) {
            function t() {
                return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, t),
                _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(t).apply(this, arguments))
            }
            return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(t, e),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(t, [{
                key: "resetStartVal",
                value: function(e) {
                    this.__debug("resetStartVal object", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]),
                    e && null != _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] || (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] = {}),
                    e && null != _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1] || (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1] = {}),
                    e && null != _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1][this.task.ruleFragment2] || (_my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1][this.task.ruleFragment2] = 0)
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.__debug("getValue object", _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1][this.task.ruleFragment2]),
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1][this.task.ruleFragment2]
                }
            }, {
                key: "updateValidatedValue",
                value: function(e) {
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1][this.task.ruleFragment2] = e
                }
            }, {
                key: "incrementValidatedValue",
                value: function(e) {
                    _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType][this.task.ruleFragment1][this.task.ruleFragment2] += e
                }
            }]),
            t
        }(MyTaskRuleBase)
          , MyTaskRule_RepeatLogin = function(e) {
            function t() {
                return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, t),
                _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(t).apply(this, arguments))
            }
            return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(t, e),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(t, [{
                key: "resetStartVal",
                value: function(e) {
                    if (this.__debug("resetStartVal RepeatLogin", e, _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]),
                    !e || null == _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]) {
                        var t = {
                            count: 0,
                            lastLogin: Date.now()
                        };
                        _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType] = t
                    }
                }
            }, {
                key: "getValue",
                value: function() {
                    return _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType].count
                }
            }, {
                key: "updateValidatedValue",
                value: function(e) {
                    var t = _my_game_settings_MyStorageUtils__WEBPACK_IMPORTED_MODULE_7__.a.gameSettings.tasksStats[this.task.taskType]
                      , a = 864e5;
                    _helpers_MyDebug__WEBPACK_IMPORTED_MODULE_5__.a.taskLogin && (a = 1);
                    var i = e;
                    i > t.lastLogin + a && (t.count++,
                    t.lastLogin = i)
                }
            }]),
            t
        }(MyTaskRuleBase)
    },
    457: function(e, t, a) {
        e.exports = a(1150)
    },
    46: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return y
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(10)
          , r = a.n(n)
          , o = a(7)
          , l = a.n(o)
          , h = a(41)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(0)
          , p = (a(3),
        a(15))
          , m = a(20)
          , y = function(e) {
            function t(e) {
                var a, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                s()(this, t),
                e.cameras.main.scrollX = p.a.cameraOffset.x,
                e.cameras.main.scrollY = p.a.cameraOffset.y,
                e.cameras.main.setBackgroundColor(8750981);
                var n = "undefined";
                if (u.a.isBT ? n = "ui/back_brick.png" : u.a.isBS2 ? n = "ui/popup_back.png" : u.a.isBS3 && (n = "ui/black.png"),
                a = r()(this, l()(t).call(this, e, -u.a.gameWidth, -u.a.gameHeight, 2 * u.a.gameWidth, 2 * u.a.gameHeight, u.a.spriteKey, n)),
                e.add.existing(_()(a)),
                a.setDisplaySize(4 * u.a.gameWidth, 4 * u.a.gameHeight),
                a.setDisplayOrigin(.5, .5),
                a.setTileScale(u.a.spriteScale, u.a.spriteScale),
                a.y -= 25,
                u.a.isBS2 && i) {
                    var o = new Phaser.Geom.Rectangle(10,10,u.a.gameWidth - 20,u.a.gameHeight - 20);
                    a.back_graphics = e.add.graphics(),
                    a.back_graphics.fillStyle(8947848, .6),
                    a.back_graphics.fillRectShape(o),
                    a.back_graphics.lineStyle(1, 5329233, 1),
                    a.back_graphics.strokeRectShape(o)
                }
                return u.a.isBS3 && m.a.isLazyLoaded && (a.backEdgeLeft = e.add.sprite(-u.a.gameWidth / 2, u.a.gameHeight / 2, "mainmenu_background"),
                a.backEdgeLeft.flipX = !0,
                a.backEdgeRight = e.add.sprite(1.5 * u.a.gameWidth, u.a.gameHeight / 2, "mainmenu_background"),
                a.backEdgeLeft.alpha = .5,
                a.backEdgeRight.alpha = a.backEdgeLeft.alpha),
                a
            }
            return d()(t, e),
            t
        }(Phaser.GameObjects.TileSprite)
    },
    50: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = (a(67),
        a(31))
          , l = a(4)
          , h = a(2)
          , _ = a(0)
          , c = a(1)
          , d = function() {
            function e(t, a) {
                s()(this, e),
                this.gameScene = t,
                this._levelBallInfo = a,
                this.activeBalls = {},
                this._calcdBallInfo = {},
                this._calcdMaxYSpeeds = {},
                this._timedEvent = null,
                this._timedEventCounter = 20
            }
            return r()(e, [{
                key: "myInit",
                value: function() {}
            }, {
                key: "initBallSpeeds",
                value: function(e) {}
            }, {
                key: "getPopScore",
                value: function(e) {}
            }, {
                key: "removeBall",
                value: function(e) {
                    for (var t = 0; t < this.activeBalls[e.ballColor].length; t++)
                        if (this.activeBalls[e.ballColor][t] === e) {
                            this.activeBalls[e.ballColor].splice(t, 1);
                            break
                        }
                    var a = this._checkBallColorCount(e);
                    h.a.log("Popped ball. ", e.ballColor, ", type: ", e._ballType, ", left count:" + a, this.activeBalls[e.ballColor]),
                    0 == a ? (e._ballType == c.a.BALL_TYPE.REVERSE ? this.gameScene.myEventManager.dispatchEvent(o.a.EVENT_TYPE.COLOR_POPPED, c.a.BALL_TYPE.REVERSE) : this.gameScene.myEventManager.dispatchEvent(o.a.EVENT_TYPE.COLOR_POPPED, e.ballColor),
                    this._areAllcolor_popped() && this._allBubblesArePopped()) : this.checkForBallOutOfBounds(),
                    l.a.gameSettings.totalBubblesPopped++
                }
            }, {
                key: "checkForBallOutOfBounds",
                value: function() {
                    for (var e in this.activeBalls)
                        for (var t = 0; t < this.activeBalls[e].length; t++) {
                            var a = this.activeBalls[e][t];
                            if (a.pos.x < -100 || a.pos.x > _.a.gameAreaMax.x + 100 || a.pos.y < -100 || a.pos.y > _.a.gameAreaMax.y + 100)
                                return h.a.error("Found a ball out of bounds!. DESTROYING IT NOW.", a),
                                void a.myOnDestroy()
                        }
                }
            }, {
                key: "addBall",
                value: function(e) {
                    this.activeBalls[e.ballColor] = this.activeBalls[e.ballColor] || [],
                    this.activeBalls[e.ballColor].push(e)
                }
            }, {
                key: "_areAllcolor_popped",
                value: function() {
                    for (var e in this.activeBalls)
                        for (var t = this.activeBalls[e], a = 0; a < t.length; a++) {
                            var i = t[a];
                            if (!i._isMetal && !i._isWarp)
                                return h.a.log("BALL_MANAGER", "This color not yet popped: " + i.ballColor),
                                !1
                        }
                    return this.gameScene.myEventManager.dispatchEvent(o.a.EVENT_TYPE.ALL_POPPED),
                    !0
                }
            }, {
                key: "_allBubblesArePopped",
                value: function() {
                    h.a.log("BallManager", "All balls popped"),
                    this.gameScene.setCanPlayerPause(!1),
                    this.gameScene.timebar.timebarStopped = !0,
                    this._timedEvent = this.gameScene.time.addEvent({
                        delay: 250,
                        callback: this._checkPointItemsAndFinishLevel,
                        callbackScope: this,
                        loop: !0
                    })
                }
            }, {
                key: "_checkPointItemsAndFinishLevel",
                value: function() {
                    var e = !1;
                    this.gameScene.itemManager.allItems.forEach((function(t) {
                        t.isPointsItem && (e = !0)
                    }
                    )),
                    e && this._timedEventCounter > 0 ? this._timedEventCounter-- : (this._timedEvent.remove(!1),
                    this.gameScene.levelComplete())
                }
            }, {
                key: "_checkBallColorCount",
                value: function(e) {
                    var t = 0;
                    if (e._ballType == c.a.BALL_TYPE.REVERSE)
                        for (var a in this.activeBalls)
                            for (var i = this.activeBalls[a], s = 0; s < i.length; s++) {
                                (e = i[s])._ballType != c.a.BALL_TYPE.REVERSE || e._isMetal || e._isWarp || t++
                            }
                    else
                        for (s = 0; s < this.activeBalls[e.ballColor].length; s++) {
                            (e = this.activeBalls[e.ballColor][s])._ballType == c.a.BALL_TYPE.REVERSE || e._isMetal || e._isWarp || t++
                        }
                    return t
                }
            }]),
            e
        }();
        d.COL_NAME = {
            RED: "red",
            BLUE: "blue",
            GREEN: "green",
            ORANGE: "orange",
            PURPLE: "purple",
            YELLOW: "yellow",
            BLUEGREEN: "bluegreen",
            PINK: "pink"
        },
        d.COL_NAME_BT1_ONLY = {
            RED: "red",
            BLUE: "blue",
            GREEN: "green",
            ORANGE: "orange",
            PURPLE: "purple",
            YELLOW: "yellow"
        },
        t.a = d
    },
    51: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(41)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(19)
          , p = a.n(u)
          , m = a(169)
          , y = a.n(m)
          , g = a(7)
          , S = a.n(g)
          , E = a(2)
          , f = a(16)
          , T = a(76)
          , v = a(52)
          , b = function(e) {
            function t(e, a, i, n, r, o) {
                var h, c, d;
                return s()(this, t),
                d = l()(this, S()(t).call(this, e, a, i, o)),
                y()((h = _()(d),
                S()(t.prototype)), "bodyType", v.a.AABB, h, !0),
                d.size = new f.a(r.x - n.x,r.y - n.y),
                d.sizeHalf = new f.a(d.size.x / 2,d.size.y / 2),
                d._p1 = n.copy(),
                d._p2 = r.copy(),
                d.pos = n.plus(d.sizeHalf),
                p()((c = _()(d),
                S()(t.prototype)), "_pBodyInit", c).call(c),
                d
            }
            return d()(t, e),
            r()(t, [{
                key: "_pBodyResize",
                value: function(e) {
                    p()(S()(t.prototype), "_pBodyResize", this).call(this),
                    void 0 === e && E.a.error("Cant resize AABB pBody without entering new {size} Vector2"),
                    this.size.x = e.x,
                    this.size.y = e.y,
                    this.sizeHalf = new f.a(e.x / 2,e.y / 2),
                    this._p1.x = this.pos.x - this.sizeHalf.x,
                    this._p1.y = this.pos.y - this.sizeHalf.y,
                    this._p2.x = this.pos.x + this.sizeHalf.x,
                    this._p2.y = this.pos.y + this.sizeHalf.y
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    p()(S()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i),
                    this.isStatic || this._pBodyResize(this.size)
                }
            }, {
                key: "_debugDraw",
                value: function() {
                    p()(S()(t.prototype), "_debugDraw", this).call(this),
                    this.debugGraphics.fillRect(this._p1.x, this._p1.y, this.size.x, this.size.y),
                    this.debugGraphics.strokeRect(this._p1.x, this._p1.y, this.size.x, this.size.y)
                }
            }]),
            t
        }(T.a);
        t.a = b
    },
    52: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            NONE: "none",
            AABB: "aabb",
            CIRCLE: "circle"
        }
    },
    53: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(18)
          , l = a(22)
          , h = a(26)
          , _ = a(21)
          , c = a(4)
          , d = a(2)
          , u = a(0)
          , p = function() {
            function e(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.a.gameWidth / 2
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 35;
                if (s()(this, e),
                !o.a.isCordova && !d.a.debugLog)
                    return d.a.log("STORE", "Not shwoing remove-ads on non-cordova."),
                    void (e._activeButton = null);
                if (c.a.gameSettings.noads && !d.a.noAdIgnore)
                    return d.a.log("STORE", "Not shwoing remove-ads, already purchased no ads."),
                    void (e._activeButton = null);
                var n = 4;
                u.a.isBT ? this.btn_background = new l.a(t,a,i,180,67,"ui/main_menu_back.png",{
                    top: 30,
                    bottom: 30,
                    left: 30,
                    right: 30
                }) : (u.a.isBS2 || u.a.isBS3) && (n = 0),
                this.btn = new _.a(t,a,i,150,40,{
                    text: h.a.BT1.REMOVE_ADS,
                    size: 27,
                    fixY: n
                },this.initiatePurchase.bind(this)),
                e._activeButton = this,
                this.currentScene = t,
                this.purchaseLoadingScreen = null,
                o.a.isCordova || (this.btn_background && (this.btn_background.ninePatch.alpha = .5),
                this.btn.backgroundNinePatch.alpha = .5,
                this.btn.myText.alpha = .5)
            }
            return r()(e, [{
                key: "initiatePurchase",
                value: function() {
                    d.a.log("STORE", "Initiated purchase now."),
                    store.order(e.PRODUCTS.tier3),
                    e.removePleaseWaitBackground("initiatePurchase"),
                    this.purchaseLoadingScreen = this.currentScene.add.container();
                    var t = new Phaser.Geom.Rectangle(-1e3,-1e3,3e3,3e3)
                      , a = this.currentScene.add.graphics();
                    a.fillStyle(0, .8),
                    a.fillRectShape(t),
                    a.setInteractive({
                        hitArea: t,
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }),
                    this.purchaseLoadingScreen.add(a);
                    var i = this.currentScene.add.bitmapText(u.a.gameWidth / 2, u.a.gameHeight / 2, u.a.fontNames.MENU, "PLEASE WAIT...", 30);
                    i.x -= i.width / 2,
                    i.y -= i.height / 2,
                    this.purchaseLoadingScreen.add(i)
                }
            }], [{
                key: "initializeStore",
                value: function() {
                    u.a.isBS2 ? e.PRODUCTS.tier3 = "com.kresogames.bubblestruggle2.tier3" : u.a.isBS3 && (e.PRODUCTS.tier3 = "com.kresogames.bubbletrouble3.tier3"),
                    o.a.isCordova && (d.a.debugLog && (store.verbosity = store.DEBUG),
                    store.register({
                        id: e.PRODUCTS.tier3,
                        type: store.NON_CONSUMABLE
                    }),
                    store.error((function(t) {
                        d.a.log("STORE", "STORE ERROR " + t.code + ": " + t.message),
                        e.removePleaseWaitBackground("error")
                    }
                    )),
                    store.when(e.PRODUCTS.tier3).cancelled(e.cancelledProduct),
                    store.when(e.PRODUCTS.tier3).error(e.errorProduct),
                    store.when(e.PRODUCTS.tier3).updated(e._processIAPs),
                    store.when(e.PRODUCTS.tier3).approved((function(t) {
                        d.a.log("STORE", "BOUGHT COMPLETED", t),
                        t.finish(),
                        c.a.gameSettings.noads = !0,
                        c.a.saveUserSettings(),
                        e.hideActiveButton(),
                        e.removePleaseWaitBackground("purchaseApproved")
                    }
                    )),
                    store.refresh())
                }
            }, {
                key: "_processIAPs",
                value: function() {
                    var t = store.get(e.PRODUCTS.tier3);
                    return d.a.log("STORE", "SHOWING BUY BUTTON CALLED>", t, t.state),
                    t ? t.state === store.REGISTERED ? (d.a.log("STORE", "product.state === store.REGISTERED"),
                    !0) : t.state === store.INVALID ? (d.a.log("STORE", "product.state === store.INVALID"),
                    !1) : (d.a.log("STORE", "product loaded and valid. Is it owned:", t.owned),
                    t.owned ? c.a.gameSettings.noads = !0 : c.a.gameSettings.noads = !1,
                    c.a.saveUserSettings(),
                    void e.hideActiveButton()) : (d.a.log("STORE", "product is null"),
                    !1)
                }
            }, {
                key: "errorProduct",
                value: function(t) {
                    d.a.log("STORE", "PRODUCT ERROR ", t),
                    e.removePleaseWaitBackground("error_product")
                }
            }, {
                key: "cancelledProduct",
                value: function(t) {
                    d.a.log("STORE", "PRODUCT CANCELED "),
                    e.removePleaseWaitBackground("canceledProduct")
                }
            }, {
                key: "removePleaseWaitBackground",
                value: function(t) {
                    d.a.log("STORE", "Removing background because reason: ", t),
                    null != e._activeButton && null != e._activeButton.purchaseLoadingScreen && (e._activeButton.purchaseLoadingScreen && e._activeButton.purchaseLoadingScreen.destroy(),
                    e._activeButton.purchaseLoadingScreen = null)
                }
            }]),
            e
        }();
        p._activeButton = null,
        p.hideActiveButton = function() {
            null != p._activeButton && null == p._activeButton.btn && c.a.gameSettings.noads && (p._activeButton.btn.setVisibleMyUIButton(!1),
            p._activeButton.btn_background && p._activeButton.btn_background.setVisibleNinePatch(!1),
            p._activeButton = null)
        }
        ,
        p.PRODUCTS = {
            tier3: "com.kresogames.bubbletrouble.tier3"
        },
        t.a = p
    },
    56: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(0)
          , l = a(3)
          , h = a(8)
          , _ = a(9)
          , c = a(43)
          , d = a(69)
          , u = a(26)
          , p = a(21)
          , m = a(37)
          , y = a(2)
          , g = a(18)
          , S = a(13)
          , E = function() {
            function e(t, a, i) {
                s()(this, e),
                this.gameScene = t,
                this.callback = a,
                this.passThroughDataToCallback = i
            }
            return r()(e, [{
                key: "showMenu",
                value: function() {
                    if (this.startReviveTimer = this.gameScene.time.now,
                    this.TOTAL_TIME_FOR_CLICK = 4400,
                    this.gameScene.setCanPlayerPause(!1),
                    this.background = new h.a(this.gameScene,-o.a.gameWidth,-o.a.gameHeight,o.a.spriteKey,"ui/black.png",1,l.a.RENDER_DEPTH.CONTINUE_MENU),
                    this.background.alpha = .55,
                    this.background.setDisplaySize(3 * o.a.gameWidth, 3 * o.a.gameHeight),
                    this.background.setDisplayOrigin(.5),
                    this.background.setInteractive(),
                    this.btnX = .5 * o.a.gameWidth,
                    this.btnY = .25 * o.a.gameHeight,
                    this.btnW = 140,
                    this.btnH = 120,
                    this.reward_btn = new p.a(this.gameScene,this.btnX,this.btnY,this.btnW,this.btnH,{
                        icon: "ui/btn/reward_video.psd",
                        size: 32,
                        fixY: 6
                    },this._btnShowRewardAd.bind(this),null,null,!0,!0,"reward"),
                    this.reward_btn.setDepthMyUIButton(l.a.RENDER_DEPTH.CONTINUE_MENU),
                    this.reward_btn.myIcon.y -= 15,
                    this.myText = this.gameScene.add.bitmapText(this.btnX, this.btnY + 40, o.a.fontNames.MENU, u.a.BT1.REVIVE, 30),
                    this.myText.setOrigin(.5, .5),
                    l.a.mySpriteDepth(l.a.RENDER_DEPTH.CONTINUE_MENU, this.myText),
                    g.a.isPoki && m.a.adBlockerEnabled) {
                        this.myText.alpha = .75,
                        this.reward_btn.buttonIsActive = !1,
                        null != this.reward_btn.myText && (this.reward_btn.myText.alpha = .75),
                        null != this.reward_btn.myIcon && (this.reward_btn.myIcon.alpha = .75),
                        this.reward_btn.focusedNinePatch.setVisibleNinePatch(!1),
                        this.reward_btn.backgroundNinePatch.ninePatch.alpha = .75,
                        this.reward_btn.backgroundNinePatch.ninePatch.removeInteractive(),
                        this.black2 = new h.a(this.gameScene,.5 * o.a.gameWidth,.55 * o.a.gameHeight,o.a.spriteKey,"ui/black.png",1,l.a.RENDER_DEPTH.CONTINUE_MENU),
                        this.black2.alpha = .35,
                        this.black2.displayWidth = 310,
                        this.black2.displayHeight = 30;
                        var e = -9;
                        o.a.isBS2 && (e = -15),
                        this.adblockerInfo = this.gameScene.add.bitmapText(.5 * o.a.gameWidth, .55 * o.a.gameHeight + e, o.a.fontNames.MENU, "Please disable Ad Blocker", 26),
                        this.adblockerInfo.x -= this.adblockerInfo.width / 2,
                        l.a.mySpriteDepth(l.a.RENDER_DEPTH.CONTINUE_MENU, this.adblockerInfo)
                    }
                    this.progress = this.gameScene.add.graphics(),
                    l.a.mySpriteDepth(l.a.RENDER_DEPTH.CONTINUE_MENU, this.progress),
                    this.timer = this.gameScene.time.addEvent({
                        delay: 1,
                        callback: this._updateProgressbar,
                        callbackScope: this,
                        loop: !0
                    })
                }
            }, {
                key: "_btnShowRewardAd",
                value: function() {
                    this.timer.remove(),
                    m.a.showAd(this.gameScene, m.a.PLACEMENTS.REWARD, this.rewardAdCompleted.bind(this))
                }
            }, {
                key: "_updateProgressbar",
                value: function() {
                    var e = (this.gameScene.time.now - this.startReviveTimer) / this.TOTAL_TIME_FOR_CLICK;
                    this.progress.clear(),
                    this.progress.fillStyle(13949193, 1),
                    this.progress.fillRect(this.btnX - this.btnW / 2, this.btnY + this.btnH / 2, this.btnW * (1 - e), 20),
                    e >= 1 && (this.timer.remove(),
                    this._clearMenuItems(),
                    this.gameScene.lives.rewardADResult(!1, this.passThroughDataToCallback))
                }
            }, {
                key: "rewardAdCompleted",
                value: function(e) {
                    y.a.log("REVIVE", "Ad completed. Reward:" + e + ". Passthroughdata:", this.passThroughDataToCallback),
                    this._clearMenuItems(),
                    S.a.TaskIncrement(this.gameScene, S.a.TASK_TYPE.TOTAL_REVIVES, 1),
                    this.callback(e, this.passThroughDataToCallback)
                }
            }, {
                key: "_clearMenuItems",
                value: function() {
                    this.background.destroy(),
                    this.progress.destroy(),
                    this.reward_btn.destroyMyUIButton(),
                    this.myText.destroy(),
                    this.adblockerInfo && (this.adblockerInfo.destroy(),
                    this.black2.destroy())
                }
            }]),
            e
        }()
          , f = a(39)
          , T = a(75)
          , v = (a(208),
        function() {
            function e(t) {
                s()(this, e),
                this.gameScene = t,
                this.livesSprites = {
                    p1: [],
                    p2: []
                },
                this.myInit()
            }
            return r()(e, [{
                key: "myInit",
                value: function() {
                    this._drawLives(1),
                    this._drawLives(2)
                }
            }, {
                key: "_drawLives",
                value: function(e) {
                    if (!o.a.isBS2 && !o.a.isBS3 || 2 != e) {
                        var t = 0
                          , a = 0
                          , i = ""
                          , s = ""
                          , n = 1;
                        o.a.isBT ? (t = 0,
                        a = 406,
                        2 == e && (t = 464),
                        i = "ui/life_full.png",
                        s = "ui/life_empty.png",
                        n = 25) : (o.a.isBS2 || o.a.isBS3) && (t = 25,
                        a = 457,
                        2 == e && (t = 467),
                        i = "ui/ingame/interface_life.png",
                        s = "ui/blank.png",
                        n = 18.4),
                        this._drawLivesGameDependent(t, a, e, i, s, n)
                    }
                }
            }, {
                key: "_drawLivesGameDependent",
                value: function(t, a, i, s, n, r) {
                    for (var _ = this.livesSprites["p" + i], c = 0; c < o.a.livesVisible; c++) {
                        var d = "";
                        d = c < e.crntLives[i] ? s : n,
                        _.length < o.a.livesVisible ? _[c] = new h.a(this.gameScene,t + 18 + c * r,a,o.a.spriteKey,d,1,l.a.RENDER_DEPTH.UIOVER) : _[c].setFrame(d),
                        this.gameScene.CrntLvl.isEditorLevel && (_[c].visible = !1)
                    }
                }
            }, {
                key: "addLife",
                value: function(t) {
                    (o.a.isBS2 || o.a.isBS3) && (t = 1),
                    e.crntLives[t]++,
                    this._drawLives(t)
                }
            }, {
                key: "_removeLife",
                value: function(t) {
                    if (this.gameScene.showControlsOnStart.initialized)
                        return !1;
                    (o.a.isBS2 || o.a.isBS3) && (t = 1);
                    var a = !1;
                    return y.a.log("MY_LIVES", "Testing:" + e.crntLives[t] + "==1 && " + e.usedContinueForThisGame[t] + "==false"),
                    y.a.log("MY_LIVES", "Pl id:" + t),
                    1 == e.crntLives[t] && 0 == e.usedContinueForThisGame[t] && (a = !0,
                    e.usedContinueForThisGame[t] = !0),
                    e.crntLives[t]--,
                    a
                }
            }, {
                key: "_anyLivesLeft",
                value: function() {
                    if (y.a.log("REVIVE", "testing lives", e.crntLives),
                    o.a.isBT) {
                        if (e.crntLives[1] > 0 || e.crntLives[2] > 0)
                            return !0
                    } else if ((o.a.isBS2 || o.a.isBS3) && e.crntLives[1] > 0)
                        return !0;
                    return !1
                }
            }, {
                key: "isGameOver",
                value: function(e, t) {
                    var a = [];
                    if (t == c.a.DEATH_REASON.BALL || t == c.a.DEATH_REASON.SPIKES ? 1 == this._removeLife(e.playerId) && a.push(e.playerId) : t == c.a.DEATH_REASON.TIMEBAR && (1 == this._removeLife(1) && a.push(1),
                    o.a.isBT && 1 == this._removeLife(2) && a.push(2)),
                    y.a.log("MY_LIVES", "Award recepients", a),
                    a.length > 0) {
                        var i = new E(this.gameScene,this.rewardADResult.bind(this),{
                            recepients: a,
                            REASON: t
                        });
                        return this.gameScene.time.delayedCall(500, i.showMenu, [], i),
                        !0
                    }
                    return 0 == this._anyLivesLeft() && (y.a.log("REVIVE", "No more lives left."),
                    this.gameIsOver(),
                    !0)
                }
            }, {
                key: "rewardADResult",
                value: function(t, a) {
                    if (t) {
                        for (var i in y.a.log("REVIVE", "Success", a),
                        this.gameScene.timebar.addTime(15),
                        this.gameScene.players)
                            this.gameScene.players[i].pbActive = !0,
                            o.a.isBT ? 0 == e.crntLives[i] && (e.crntLives[i]++,
                            this.gameScene.players[i].playerShield.addShield(T.a.SHIELD_TYPES.PLAIN)) : (e.crntLives[1] = 1,
                            this.gameScene.players[i].playerShield.addShield(T.a.SHIELD_TYPES.PLAIN));
                        new f.a(this.gameScene,f.a.MESSAGES.GET_READY,1.5).myInit(),
                        this.gameScene.time.delayedCall(1500, this.gameScene.myPauseGame, [!1, !1, d.a.PAUSE_REASONS.REVIVED], this.gameScene),
                        this.gameScene.time.delayedCall(1500, this.gameScene.setCanPlayerPause, [!0], this.gameScene),
                        this.gameScene.input.keyboard.resetKeys(),
                        this.gameScene.levelReceivedRevive = !0
                    } else
                        0 == this._anyLivesLeft() ? this.gameIsOver() : this.gameScene.playerDiedAnimation(a.recepients[0], a.REASON)
                }
            }, {
                key: "gameIsOver",
                value: function() {
                    S.a.TaskIncrement(this.gameScene, S.a.TASK_TYPE.GAMES_PLAYED, 1);
                    var e = "BT1_MainMenu";
                    o.a.isBS2 && (e = null == _.a.customPack ? "BS2_MainMenu" : "BS2_MoreLevels"),
                    o.a.isBS3 && (e = "BS3_MainMenu"),
                    new f.a(this.gameScene,f.a.MESSAGES.GAME_OVER,1.8,this.gameScene.myTransition.transitionToggle.bind(this.gameScene.myTransition, !1, e)).myInit()
                }
            }]),
            e
        }());
        v._START_LIVES = 3,
        0 != y.a.overrideLives && (v._START_LIVES = y.a.overrideLives),
        v.crntLives = [],
        v.resetLives = function(e) {
            v.crntLives = [],
            v.crntLives[1] = 0,
            v.crntLives[2] = 0,
            v.levelSpawnedLife = [],
            v.crntLives[1] = v._START_LIVES,
            o.a.isBT && e == _.a.MODES.TWOP && (v.crntLives[2] = v._START_LIVES),
            v.usedContinueForThisGame = [],
            v.usedContinueForThisGame[1] = !1,
            v.usedContinueForThisGame[2] = !1
        }
        ,
        v.levelSpawnedLife = [],
        v.usedContinueForThisGame = [];
        t.a = v
    },
    57: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = (a(4),
        a(168))
          , p = function() {
            function e() {
                s()(this, e),
                this.playerScore = null,
                this.scores = [],
                this._callbackScoresLoaded = null,
                this._callbackPlayerRankLoaded = null,
                this.uniquePlayerId = -1
            }
            return r()(e, [{
                key: "init",
                value: function() {}
            }, {
                key: "loadScores",
                value: function(e, t) {}
            }, {
                key: "sendScore",
                value: function(e) {}
            }]),
            e
        }()
          , m = a(2)
          , y = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).apply(this, arguments))
            }
            return d()(t, e),
            r()(t, [{
                key: "init",
                value: function() {}
            }, {
                key: "loadScores",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                    ;
                    "null" != FBInstant.context.getID() && (m.a.log("FB SCORE", "Context id:", FBInstant.context.getID()),
                    FBInstant.getLeaderboardAsync("Single player." + FBInstant.context.getID()).then((function(e) {
                        console.log(e.getName())
                    }
                    )).catch((function(e) {
                        console.error("getLeaderboardAsync failed: " + e.message, e)
                    }
                    )),
                    this._callbackScoresLoaded = e,
                    this._callbackPlayerRankLoaded = t,
                    null == this.leaderboard ? this.facebookPlugin.getLeaderboard(this.leaderboardID) : (this.leaderboard.getScores(),
                    this.leaderboard.getPlayerScore()))
                }
            }, {
                key: "_onScoresLoaded",
                value: function(e) {
                    for (var t in console.log("Loaded scores..", e),
                    this.scores = [],
                    e) {
                        var a = e[t];
                        this.scores.push(this._parseReceivedScore(a))
                    }
                    this._callbackScoresLoaded()
                }
            }, {
                key: "_parseReceivedScore",
                value: function(e) {
                    return null == e ? null : new u.a({
                        name: e.playerName,
                        rank: e.rank,
                        score: e.score,
                        playerUniqueId: e.playerID,
                        photoURL: e.playerPhotoURL,
                        optionalData: JSON.parse(e.data)
                    })
                }
            }]),
            t
        }(p)
          , g = a(18);
        function S() {}
        S.initialize = function(e) {
            m.a.log("LEADER", "Initializing leaderboard:" + g.a.myTarget),
            g.a.isFacebook ? S.provider = (new y).init(e.facebook) : g.a.isCordova || g.a.isPoki ? S.provider = (new p).init() : console.error("Unknown leaderboard provider:" + g.a.myTarget)
        }
        ,
        S.provider = null,
        S.SHOW_ENTRIES = 10,
        S.isUsingLeader = function() {
            return !!g.a.isFacebook
        }
        ;
        t.a = S
    },
    67: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(41)
          , _ = a.n(h)
          , c = a(19)
          , d = a.n(c)
          , u = a(7)
          , p = a.n(u)
          , m = a(11)
          , y = a.n(m)
          , g = a(0)
          , S = a(169)
          , E = a.n(S)
          , f = a(76)
          , T = a(52)
          , v = function(e) {
            function t(e, a, i, n, r, o) {
                var h, c, u;
                return s()(this, t),
                u = l()(this, p()(t).call(this, e, a, i, o)),
                E()((h = _()(u),
                p()(t.prototype)), "bodyType", T.a.CIRCLE, h, !0),
                u.pos = n,
                u.radius = r,
                d()((c = _()(u),
                p()(t.prototype)), "_pBodyInit", c).call(c),
                u._pBodyResize(),
                u
            }
            return y()(t, e),
            r()(t, [{
                key: "_pBodyResize",
                value: function() {
                    d()(p()(t.prototype), "_pBodyResize", this).call(this)
                }
            }, {
                key: "_debugDraw",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    d()(p()(t.prototype), "_debugDraw", this).call(this),
                    this.debugGraphics.fillCircle(e || this.pos.x, a || this.pos.y, this.radius),
                    this.debugGraphics.strokeCircle(e || this.pos.x, a || this.pos.y, this.radius)
                }
            }]),
            t
        }(f.a)
          , b = v
          , k = a(16)
          , P = a(12)
          , L = a(3)
          , A = a(50)
          , I = a(23)
          , M = (a(43),
        a(8))
          , O = a(2)
          , D = a(173)
          , R = a(1)
          , B = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "collideEdge",
                value: function(e, t, a, i, s, n, r, o) {
                    return o.goType == R.a.GO_TYPE.WALL && o.wallType == R.a.WALL.WALL_TYPE.CEILSPIKE_BT1 ? (this.popBall({
                        reason: R.a.POP_REASON.BT1_SPIKES_TOP,
                        player: null,
                        obj: {}
                    }),
                    !0) : e == R.a.PHY.COL_EDGE.TOP ? (this.pos.y += s,
                    this.vel.y = this._maxSpeedY,
                    !0) : void 0
                }
            }, {
                key: "_checkMaxY_BT",
                value: function() {
                    this._prevSpeedY < 0 && this.vel.y > 0 && this.pos.y < this._maxY && (this._maxY = this.pos.y)
                }
            }]),
            e
        }()
          , w = a(81)
          , N = (a(30),
        a(175))
          , x = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "_collideEdgeDefault",
                value: function(t, a, i, s, n, r, o, l) {
                    if (this._comboId = 1,
                    this._spawnedBy = 0,
                    l.goType == R.a.GO_TYPE.WALL) {
                        if (l.showInvisibleWall(!0),
                        e._flipGhostBall(this),
                        l.wallType == R.a.WALL.WALL_TYPE.CEILSPIKE_BT1)
                            return O.a.error("This should not happen. How is BT1 ceil wall in BS2 or BS3?"),
                            this.popBall({
                                reason: R.a.POP_REASON.BT1_SPIKES_TOP,
                                player: null,
                                obj: {}
                            }),
                            !0;
                        if (l._isSpikey && t == R.a.PHY.COL_EDGE.BOTTOM)
                            return this.popBall({
                                reason: R.a.POP_REASON.SPIKEBURST,
                                player: null,
                                obj: {}
                            }),
                            !0;
                        if (l.wallType == R.a.WALL.WALL_TYPE.SPIKEALL && t != R.a.PHY.COL_EDGE.BOTTOM)
                            return this.popBall({
                                reason: R.a.POP_REASON.SPIKEBURST,
                                player: null,
                                obj: {}
                            }),
                            !0;
                        if (l.wallType == R.a.WALL.WALL_TYPE.CAVEIN_BS3 || l.wallType == R.a.WALL.WALL_TYPE.MOVING)
                            if (w.a.pBodySimCavein.radius = this.radius + 2,
                            w.a.pBodySimCavein.vel.x = this.vel.x,
                            w.a.pBodySimCavein.vel.y = this.vel.y,
                            this.gameScene.phyEngine.simulateCollisions(w.a.pBodySimCavein, this.pos.x, this.pos.y, [I.a.LAYER.WALL]).isSquished)
                                return this.popBall({
                                    reason: R.a.POP_REASON.SQUISH,
                                    player: null,
                                    obj: {}
                                }),
                                !0;
                        if (t == R.a.PHY.COL_EDGE.TOP) {
                            if (this._ballType != R.a.BALL_TYPE.NORMAL && this._ballType != R.a.BALL_TYPE.REVERSE || (l.wallType == R.a.WALL.WALL_TYPE.CONV_BELT ? this.vel.x += l.convBeltSpeed / 4 : 0 != this._ballInfo.vx && (this._ballType == R.a.BALL_TYPE.NORMAL ? this.vel.x = this.vel.x / Math.abs(this.vel.x) * this.gameScene.ballManager._calcdBallInfo[this._ballType][this.ballColor].speedx : this.vel.x = this.vel.x / Math.abs(this.vel.x) * this.gameScene.ballManager._calcdBallInfo[this._ballType].speedx)),
                            l.wallType == R.a.WALL.WALL_TYPE.TRAMPOLINE && (this.pos.y += n,
                            l.trampolineBallBounce(o),
                            this._ballType == R.a.BALL_TYPE.NORMAL))
                                return this.vel.y = this._maxSpeedY * N.a.SPEED_UP,
                                this._maxY = this.pos.y + n - this._bounceHeight,
                                !0;
                            if (l.wallType == R.a.WALL.WALL_TYPE.STICKY && this.vel.y > 0 && this._ballType == R.a.BALL_TYPE.NORMAL)
                                return this.vel.y = -3,
                                this.pos.y += n,
                                !0
                        }
                    }
                }
            }, {
                key: "collideEdgeNormal",
                value: function(t, a, i, s, n, r, o, l) {
                    if (e._collideEdgeDefault.call(this, t, a, i, s, n, r, o, l))
                        return !0;
                    if (t == R.a.PHY.COL_EDGE.BOTTOM && (o._doCheckMaxY = !1),
                    t == R.a.PHY.COL_EDGE.TOP) {
                        if (l._softWall) {
                            var h = this.pos.y + n
                              , _ = h - this._maxY;
                            _ <= 0 && (_ = 1),
                            this.pos.y = h,
                            this.vel.y = -Math.sqrt(Math.abs(2 * this.acc.y * _))
                        } else
                            this.pos.y += n,
                            this.vel.y = this._maxSpeedY;
                        return !0
                    }
                }
            }, {
                key: "collideEdgeReverse",
                value: function(t, a, i, s, n, r, o, l) {
                    if (e._collideEdgeDefault.call(this, t, a, i, s, n, r, o, l))
                        return !0;
                    if (t == R.a.PHY.COL_EDGE.TOP && (o._doCheckMaxY = !1),
                    t == R.a.PHY.COL_EDGE.BOTTOM) {
                        if (l._softWall) {
                            var h = this.pos.y + n
                              , _ = h - this._maxY;
                            _ >= 0 && (_ = -1),
                            this.pos.y = h,
                            this.vel.y = Math.sqrt(Math.abs(2 * this.acc.y * _))
                        } else
                            this.pos.y += n,
                            this.vel.y = this._maxSpeedY;
                        return !0
                    }
                    t == R.a.PHY.COL_EDGE.TOP && (this.vel.y = -this.vel.y)
                }
            }, {
                key: "collideEdgePenta",
                value: function(t, a, i, s, n, r, o, l) {
                    if (e._collideEdgeDefault.call(this, t, a, i, s, n, r, o, l))
                        return !0;
                    var h = Math.abs(o._pentaDir.x)
                      , _ = Math.abs(o._pentaDir.y);
                    return t == R.a.PHY.COL_EDGE.LEFT ? (this.tickInfo.vy < 0 ? this._ballInfo.rot > 0 ? _ > 2 && (_--,
                    h++) : _ < 5 && (_++,
                    h--) : this._ballInfo.rot > 0 ? _ < 5 && (_++,
                    h--) : _ > 2 && (_--,
                    h++),
                    this.vel.y = this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][_],
                    this.tickInfo.vy < 0 && (this.vel.y = -this.vel.y),
                    this.vel.x = -this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][h]) : t == R.a.PHY.COL_EDGE.RIGHT ? (this.tickInfo.vy < 0 ? this._ballInfo.rot > 0 ? _ < 5 && (_++,
                    h--) : _ > 2 && (_--,
                    h++) : this._ballInfo.rot > 0 ? _ > 2 && (_--,
                    h++) : _ < 5 && (_++,
                    h--),
                    this.vel.y = this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][_],
                    this.tickInfo.vy < 0 && (this.vel.y = -this.vel.y),
                    this.vel.x = this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][h]) : t == R.a.PHY.COL_EDGE.TOP ? (this.tickInfo.vx < 0 ? this._ballInfo.rot > 0 ? _ > 2 && (_--,
                    h++) : _ < 5 && (_++,
                    h--) : this._ballInfo.rot > 0 ? _ < 5 && (_++,
                    h--) : _ > 2 && (_--,
                    h++),
                    this.vel.x = this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][h],
                    this.tickInfo.vx < 0 && (this.vel.x = -this.vel.x),
                    this.vel.y = -this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][_]) : t == R.a.PHY.COL_EDGE.BOTTOM && (this.tickInfo.vx < 0 ? this._ballInfo.rot > 0 ? _ < 5 && (_++,
                    h--) : _ > 2 && (_--,
                    h++) : this._ballInfo.rot > 0 ? _ > 2 && (_--,
                    h++) : _ < 5 && (_++,
                    h--),
                    this.vel.x = this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][h],
                    this.tickInfo.vx < 0 && (this.vel.x = -this.vel.x),
                    this.vel.y = this.gameScene.ballManager._calcdMaxYSpeeds.penta[this.ballColor][_]),
                    this._pentaDir.x = h,
                    this.vel.x < 0 && (this._pentaDir.x = -this._pentaDir.x),
                    this._pentaDir.y = _,
                    this.vel.y < 0 && (this._pentaDir.y = -this._pentaDir.y),
                    this.pos.x += s,
                    this.pos.y += n,
                    !0
                }
            }, {
                key: "_flipGhostBall",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e._isGhost)
                        if (t || (e._isGhostOn = !e._isGhostOn),
                        e._isGhostOn) {
                            var a = "bubbles/ghost_on.png";
                            e._ballType == R.a.BALL_TYPE.PENTA && (a = "bubbles/penta_ghost_on.png"),
                            e._ghostSprite.setFrame(a)
                        } else {
                            a = "bubbles/ghost_off.png";
                            e._ballType == R.a.BALL_TYPE.PENTA && (a = "bubbles/penta_ghost_off.png"),
                            e._ghostSprite.setFrame(a)
                        }
                }
            }, {
                key: "_checkMaxY_BS2_normal",
                value: function() {
                    this.vel.y > 0 && this._prevSpeedY < 0 && Math.abs(this.pos.y - this._maxY) > 6 && (this._maxY = this.pos.y)
                }
            }, {
                key: "_checkMaxY_BS2_reverse",
                value: function() {
                    this.vel.y < 0 && this._prevSpeedY > 0 && Math.abs(this.pos.y - this._maxY) > 6 && (this._maxY = this.pos.y)
                }
            }]),
            e
        }()
          , C = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "getCollideEdge",
                value: function(e) {
                    return g.a.isBT ? B.collideEdge.bind(e) : e._ballType == R.a.BALL_TYPE.NORMAL ? x.collideEdgeNormal.bind(e) : e._ballType == R.a.BALL_TYPE.PENTA ? x.collideEdgePenta.bind(e) : e._ballType == R.a.BALL_TYPE.REVERSE ? x.collideEdgeReverse.bind(e) : void 0
                }
            }, {
                key: "getCheckMaxY",
                value: function(t) {
                    return g.a.isBT ? B._checkMaxY_BT.bind(t) : t._ballType == R.a.BALL_TYPE.NORMAL ? x._checkMaxY_BS2_normal.bind(t) : t._ballType == R.a.BALL_TYPE.REVERSE ? x._checkMaxY_BS2_reverse.bind(t) : e.doNothing.bind(t)
                }
            }, {
                key: "doNothing",
                value: function() {}
            }]),
            e
        }()
          , U = a(20)
          , W = a(13)
          , Y = a(9)
          , K = function(e) {
            function t(e, a) {
                var i;
                s()(this, t);
                var n = new k.a(a.x,a.y)
                  , r = a.id;
                return (g.a.isBS2 || g.a.isBS3) && (n.x + g.a.ballSizes[r] > g.a.gameAreaMax.x ? n.x = g.a.gameAreaMax.x - g.a.ballSizes[r] : n.x - g.a.ballSizes[r] < g.a.gameAreaMin.x && (n.x = g.a.gameAreaMin.x + g.a.ballSizes[r])),
                (i = l()(this, p()(t).call(this, e, I.a.LAYER.BALL, I.a.LAYERS_BALL, n, g.a.ballSizes[r], {
                    mass: 1,
                    acc: k.a.ZERO,
                    useGravity: !1
                })))._ballInfo = a,
                i.ballId = r,
                i._ballType = a.t || R.a.BALL_TYPE.NORMAL,
                i.ballColor = a.c || A.a.COL_NAME.RED,
                i._splitWay = a.splitWay || 2,
                i._isMetal = a.isMetal || !1,
                i._isWarp = a.warp || !1,
                i._isGhost = a.isGhost || !1,
                i._isGhostOn = !1,
                i._ghostSprite = null,
                i._comboId = a.comboId || 1,
                i._spawnedBy = a.spawnedBy || 0,
                i._maxSpeedY = 0,
                i._bounceHeight = 0,
                i._prevSpeedY = 0,
                i._maxY = 0,
                i._popSprite = null,
                i._checkMaxY = C.getCheckMaxY(_()(i)),
                i._doCheckMaxY = !1,
                i.collideEdge = C.getCollideEdge(_()(i)),
                i._ballContainer = i.gameScene.add.container(0, 0),
                i._pentaTween = null,
                i._pentaDir = k.a.ZERO,
                i._nonPlayerPopReasons = [R.a.POP_REASON.BT1_SPIKES_TOP, R.a.POP_REASON.SPIKEBURST, R.a.POP_REASON.SQUISH],
                i
            }
            return y()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    this.goType = R.a.GO_TYPE.BALL,
                    this.myRenderDepth = L.a.RENDER_DEPTH.BALL,
                    this.ignoreTimeScale = !1;
                    var e = "bubbles/"
                      , a = g.a.spriteKey
                      , i = this.ballColor;
                    this._ballType == R.a.BALL_TYPE.REVERSE ? (e += "reverse",
                    i = "") : g.a.isBT || g.a.isBS2 ? g.a.isBS2 && this._ballType == R.a.BALL_TYPE.PENTA ? e += "penta_" : e += "bubble_" : g.a.isBS3 && (e += (this._ballType + "_").toLowerCase()),
                    this._ballType != R.a.BALL_TYPE.REVERSE && (U.a.isLazyLoaded ? i != A.a.COL_NAME.RED && (a = g.a.lazySpriteKey) : i = A.a.COL_NAME.RED);
                    var s = e + i + ".png";
                    if ((g.a.isBS2 || g.a.isBS3) && (this._ballInfo.isMetal && (a = g.a.spriteKey,
                    s = "bubbles/metal.png",
                    this._ballInfo.t == R.a.BALL_TYPE.PENTA && (s = "bubbles/metal_penta.png")),
                    this._ballInfo.warp && (a = g.a.spriteKey,
                    s = "bubbles/warp.png",
                    this._ballInfo.t == R.a.BALL_TYPE.PENTA && (s = "bubbles/warp_penta.png"))),
                    this.mySprite = new M.a(this.gameScene,0,0,a,s,g.a.ballSizes[this.ballId] / 50,this.myRenderDepth),
                    this._ballContainer.add(this.mySprite),
                    this.makeDepthAndScale(this._ballContainer, 1),
                    (g.a.isBS2 || g.a.isBS3) && (this._ballInfo.isGhost && (this._ghostSprite = new M.a(this.gameScene,0,0,g.a.spriteKey,"bubbles/ghost_off.png",1,this.myRenderDepth),
                    this._ghostSprite.setScale(2 * g.a.ballSizes[this.ballId] / 100),
                    this._ballContainer.add(this._ghostSprite),
                    x._flipGhostBall(this, !0),
                    this._stateSprites.push(this._ghostSprite)),
                    4 === this._ballInfo.splitWay && this._ballInfo.id > 1)) {
                        var n = t.GetDoubleSpriteName(this)
                          , r = new M.a(this.gameScene,0,0,g.a.spriteKey,n,1,this.myRenderDepth);
                        r.setScale(2 * g.a.ballSizes[this.ballId] / 100),
                        this._ballContainer.add(r),
                        this._stateSprites.push(r)
                    }
                    if (!g.a.isBS3) {
                        var o = this.gameScene.add.graphics();
                        if (o.lineStyle(1, 16777215, 1),
                        this._ballType == R.a.BALL_TYPE.NORMAL || this._ballType == R.a.BALL_TYPE.REVERSE) {
                            var l = new Phaser.Geom.Circle(0,0,g.a.ballSizes[this.ballId] + 1);
                            o.strokeCircleShape(l)
                        } else if (this._ballType == R.a.BALL_TYPE.PENTA) {
                            var h = t.GetPentaPoints(this.ballId, 0, 0);
                            o.strokePoints(h, !0)
                        }
                        this._ballContainer.add(o),
                        this._stateSprites.push(o)
                    }
                    for (var _ in this.gameScene.itemManager.allModifiers)
                        _ == R.a.ITEM_MANAGER.MOD_TYPE.FREEZE && D.a.freezeBall(this);
                    return this.gameScene.ballManager.initBallSpeeds(this),
                    this.gameScene.ballManager.addBall(this),
                    this._initializeStateEvent(),
                    this.myUpdate(),
                    this
                }
            }, {
                key: "popBall",
                value: function(e) {
                    O.a.log("BALL", "Ball got popped!", this, e),
                    this._attachPopAnim(),
                    P.a.playRandom(this.gameScene, [P.a.SND.BALL_POP1, P.a.SND.BALL_POP2, P.a.SND.BALL_POP3]),
                    this.ballId > 1 && (g.a.isBS2 || g.a.isBS3 || g.a.isBT && e.reason != R.a.POP_REASON.BT1_SPIKES_TOP) && this.gameScene.itemManager.popChecksForItem(this.pos.x, this.pos.y);
                    var a = !0;
                    null != e.player && e.player.playerId == this._spawnedBy || (a = !1),
                    !this._nonPlayerPopReasons.includes(e.reason) || 1 != this._spawnedBy && 2 != this._spawnedBy || (a = !1),
                    a && (this._comboId++,
                    this._comboId >= 2 && this.gameScene.myGUI.addCombo(this._comboId, this));
                    var i = this.gameScene.ballManager.getPopScore(this);
                    if (g.a.isBT && (this._comboId = 1),
                    this.gameScene.myGUI.addScore(i * this._comboId, e.player),
                    null != e.player && W.a.TaskIncrement(this.gameScene, W.a.TASK_TYPE.TOTAL_BUBBLES_POPPED, 1),
                    e.reason == R.a.POP_REASON.BT1_SPIKES_TOP)
                        return W.a.TaskIncrement(this.gameScene, W.a.TASK_TYPE.LEVEL_COMBOS, .5, Y.a.currentLevel),
                        this.gameScene.myCombo.showWallSpikeCombo(this.pos.x, this.pos.y),
                        void this.myOnDestroy();
                    W.a.TaskIncrement(this.gameScene, W.a.TASK_TYPE.POP_REASON, 1, e.reason);
                    var s = this.ballId - 1;
                    if (0 != s) {
                        var n = JSON.parse(JSON.stringify(this._ballInfo));
                        delete n.stateData,
                        n.x = this.pos.x - g.a.ballSizes[s] / 2,
                        n.y = this.pos.y,
                        n.id = s,
                        0 == n.vx && (n.vx = 1),
                        n.vx = -Math.abs(n.vx),
                        n.comboId = this._comboId,
                        n.spawnSpeedY = this.vel.y,
                        g.a.isBT && (n.vy = -1);
                        var r = this._spawnedBy;
                        e.reason == R.a.POP_REASON.SHIELD_PLAIN || e.reason == R.a.POP_REASON.SHIELD_TANK || e.reason == R.a.POP_REASON.SHOT ? r = e.player.playerId : e.reason != R.a.POP_REASON.BT1_SPIKES_TOP && e.reason != R.a.POP_REASON.DYNAMITE && e.reason != R.a.POP_REASON.MEDAL || (r = 3),
                        n.spawnedBy = r;
                        var o = new t(this.gameScene,n).myInit();
                        n.x = this.pos.x + g.a.ballSizes[s] / 2,
                        n.vx = Math.abs(n.vx);
                        var l = new t(this.gameScene,n).myInit();
                        if (3 === this._splitWay) {
                            n.vx = 0,
                            n.x = this.pos.x;
                            new t(this.gameScene,n).myInit()
                        } else if (4 === this._splitWay) {
                            var h = g.a.ballSizes[s];
                            n.vx = Math.abs(n.vx),
                            n.x = l.pos.x + h;
                            new t(this.gameScene,n).myInit();
                            n.vx = -Math.abs(n.vx),
                            n.x = o.pos.x + h;
                            new t(this.gameScene,n).myInit();
                            o.pos.x -= h,
                            l.pos.x -= h
                        }
                        this.myOnDestroy()
                    } else
                        this.myOnDestroy()
                }
            }, {
                key: "myFixedPreUpdate",
                value: function(e, a, i) {
                    d()(p()(t.prototype), "myFixedPreUpdate", this).call(this, e, a, i),
                    this._doCheckMaxY = !0
                }
            }, {
                key: "myFixedPostUpdate",
                value: function(e, a, i) {
                    d()(p()(t.prototype), "myFixedPostUpdate", this).call(this, e, a, i),
                    this._doCheckMaxY && this._checkMaxY(),
                    this._prevSpeedY = this.vel.y
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    this._ballContainer.x = this.pos.x,
                    this._ballContainer.y = this.pos.y
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    this.gameScene.ballManager.removeBall(this),
                    this._ballContainer.destroy(),
                    d()(p()(t.prototype), "myOnDestroy", this).call(this)
                }
            }, {
                key: "myOnPause",
                value: function(e) {
                    d()(p()(t.prototype), "myOnPause", this).call(this, e),
                    this._ballType == R.a.BALL_TYPE.PENTA && (e ? this._pentaTween.pause() : this._pentaTween.resume())
                }
            }, {
                key: "_attachPopAnim",
                value: function() {
                    var e = this
                      , t = 1;
                    if (1 == this.ballId && g.a.isBT)
                        this._popSprite = new M.a(this.gameScene,this.pos.x,this.pos.y,g.a.spriteKey,"bubbles/pop_bubble_1.png",t,L.a.RENDER_DEPTH.BALL),
                        this._popSprite.anims.play("pop"),
                        this._popSprite.once("animationcomplete", (function() {
                            e._popSprite.destroy()
                        }
                        )),
                        L.a.mySpriteScale(this._popSprite, 1);
                    else if (g.a.isBT || g.a.isBS2) {
                        t = g.a.ballSizes[this.ballId] / 100;
                        var a = "bubbles/bubble_" + this.ballColor + "_pop.png";
                        this._ballType == R.a.BALL_TYPE.REVERSE && (a = "bubbles/reverse_pop.png"),
                        this._popSprite = new M.a(this.gameScene,this.pos.x,this.pos.y,g.a.spriteKey,a,1.5 * t,L.a.RENDER_DEPTH.BALL);
                        this.gameScene.tweens.add({
                            targets: this._popSprite,
                            scale: .1,
                            ease: "Bounce",
                            duration: 200,
                            onComplete: function() {
                                e._popSprite.destroy()
                            }
                        })
                    } else if (g.a.isBS3) {
                        t = g.a.ballSizes[this.ballId] / 100;
                        var i = g.a.spriteKey
                          , s = (a = "pop/_default/pop_1.png",
                        "pop_default");
                        U.a.isLazyLoaded && this._ballType != R.a.BALL_TYPE.REVERSE && (i = g.a.lazySpriteKey,
                        a = "pop/" + this.ballColor + "/pop_1.png",
                        s = "pop_" + this.ballColor),
                        this._popSprite = new M.a(this.gameScene,this.pos.x,this.pos.y,i,a,2.5 * t,L.a.RENDER_DEPTH.BALL),
                        this._popSprite.angle = 360 * Math.random(),
                        this._popSprite.anims.play(s);
                        this.gameScene.tweens.add({
                            targets: this._popSprite,
                            scale: this._popSprite.scale,
                            ease: "Bounce",
                            duration: (this._popSprite.anims.getTotalFrames() + 1) * this._popSprite.anims.msPerFrame,
                            onComplete: function() {
                                e._popSprite.destroy()
                            }
                        })
                    } else
                        O.a.error("Unknown pop sprite.")
                }
            }], [{
                key: "GetPentaPoints",
                value: function(e, t, a) {
                    var i = g.a.ballSizes[e] / 100 * 2;
                    i += .02;
                    var s = 48.8;
                    return new Phaser.Geom.Polygon([20 * i + t, -48.8 * i + a, 52.5 * i + t, (53 - s) * i + a, (57.7 - 45) * i + t, 51.2 * i + a, -45 * i + t, (75.7 - s) * i + a, -40 * i + t, (14.2 - s) * i + a]).points
                }
            }, {
                key: "GetDoubleSpriteName",
                value: function(e) {
                    return g.a.isBS3 ? e._ballType == R.a.BALL_TYPE.REVERSE ? "bubbles/reverse_double.png" : "bubbles/" + e._ballType + "_" + e.ballColor + "_double.png" : "bubbles/double.png"
                }
            }, {
                key: "CreateTestBodies",
                value: function(e) {
                    w.a.pBodySim = new b(e,I.a.LAYER.SIMULATION,I.a.LAYERS_NONE,new k.a(0,0),1),
                    w.a.pBodySimCavein = new b(e,I.a.LAYER.SIMULATION,I.a.LAYERS_NONE,new k.a(0,0),1)
                }
            }]),
            t
        }(b);
        K.POP_REASON = {
            SHIELD_PLAIN: "shield_plain",
            SHOT: "shot",
            BT1_SPIKES_TOP: "bt1_spikes_top",
            SPIKEBURST: "spikeburst",
            DYNAMITE: "dynamite",
            MEDAL: "medal",
            SHIELD_TANK: "shield_tank"
        };
        t.a = K
    },
    69: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(43)
          , p = a(23)
          , m = a(16)
          , y = a(0)
          , g = a(67)
          , S = a(3)
          , E = a(50)
          , f = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, _()(t).call(this, e, a)))._levelBallInfo = a,
                i.ballGravity = 0,
                i.ballSpeedX = 7,
                i.ballSpeedY = 4,
                i.ballPoints = [0, 300, 250, 200, 150, 100, 50],
                i.defaultJumpHeights = [0, 69, 139, 179, 219, 259, 300],
                i.floorYs = {},
                i
            }
            return d()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    var e = this._levelBallInfo;
                    this.ballGravity = e.grav || this.ballSpeedY;
                    var t = this.defaultJumpHeights
                      , a = y.a.ballSizes;
                    for (var i in E.a.COL_NAME) {
                        var s = E.a.COL_NAME[i];
                        this._calcdMaxYSpeeds[s] = [],
                        this._calcdBallInfo[s] = [];
                        for (var n = 1; n < t.length; n++) {
                            var r = 0;
                            r = null != e.jumpHeights && null != e.jumpHeights[s] ? e.jumpHeights[s][n] : t[n],
                            this._calcdBallInfo[s][n] = r;
                            var o = r - a[n];
                            o < 0 && (o = 0),
                            this._calcdMaxYSpeeds[s][n] = -Math.sqrt(2 * this.ballGravity * o, 2)
                        }
                        this.floorYs[s] = y.a.gameAreaMax.y,
                        null != e.floorY && null != e.floorY[s] && (this.floorYs[s] = e.floorY[s])
                    }
                    return this
                }
            }, {
                key: "initBallSpeeds",
                value: function(e) {
                    e._maxSpeedY = this._calcdMaxYSpeeds[e.ballColor][e.ballId],
                    e.acc.y = this.ballGravity;
                    var t = e.gameScene.ballManager;
                    if (e._ballInfo.vy > 0)
                        e.vel.y = 0,
                        e._maxY = e.pos.y;
                    else {
                        var a = 1 - y.a.ballSizes[e.ballId + 1] / 180
                          , i = Math.abs(t._calcdBallInfo[e.ballColor][e.ballId] - (t.floorYs[e.ballColor] - e.pos.y) + a);
                        e.vel.y = a * -Math.sqrt(2 * t.ballGravity * i, 2)
                    }
                    e.vel.x = e._ballInfo.vx * this.ballSpeedX
                }
            }, {
                key: "getPopScore",
                value: function(e) {
                    return this.ballPoints[e.ballId]
                }
            }]),
            t
        }(E.a)
          , T = a(2)
          , v = a(1)
          , b = a(9)
          , k = function(e) {
            function t(e, a) {
                var i;
                return s()(this, t),
                (i = l()(this, _()(t).call(this, e, a))).PHY_VELY_ADJUST = 9,
                i._levelBallInfo = a,
                i._calcdMaxYSpeeds = {},
                i._calcdBallInfo = {},
                i._defaultBallInfo = {
                    normal: {
                        _default: {
                            speedx: 7,
                            grav: 41,
                            bounce: [0, 70, 115, 155, 195, 235]
                        }
                    },
                    penta: {
                        _default: {
                            speedx: 12
                        }
                    },
                    reverse: {
                        speedx: 7,
                        grav: 36,
                        bounce: [0, 375, 335, 235, 120, 30]
                    }
                },
                y.a.isBS3 && (i._defaultBallInfo = {
                    normal: {
                        _default: {
                            speedx: 7.5,
                            grav: 60,
                            bounce: [0, 70, 115, 155, 195, 235]
                        }
                    },
                    penta: {
                        _default: {
                            speedx: 14
                        }
                    },
                    reverse: {
                        speedx: 7.5,
                        grav: 36,
                        bounce: [0, 375, 335, 235, 120, 30]
                    }
                }),
                Object.freeze(i._defaultBallInfo),
                i.pentaAngles = [0, .87, .79, .71, .61, .5],
                i._pentaRotationSpeed = 1.8,
                i.ballPoints = {
                    normal: 4,
                    penta: 5,
                    reverse: 6
                },
                i
            }
            return d()(t, e),
            r()(t, null, [{
                key: "PHY_VELY_ADJUST",
                get: function() {
                    return 9
                }
            }]),
            r()(t, [{
                key: "myInit",
                value: function() {
                    var e = this._levelBallInfo || {};
                    for (var a in v.a.BALL_TYPE) {
                        var i = v.a.BALL_TYPE[a];
                        if (this._calcdMaxYSpeeds[i] = {},
                        i == v.a.BALL_TYPE.REVERSE) {
                            this._calcdBallInfo.reverse = JSON.parse(JSON.stringify(this._defaultBallInfo.reverse)),
                            null != e.reverse && (this._calcdBallInfo.reverse = JSON.parse(JSON.stringify(e.reverse))),
                            this._calcdBallInfo.reverse.grav /= t.PHY_VELY_ADJUST,
                            this._calcdBallInfo.reverse.grav = -this._calcdBallInfo.reverse.grav;
                            var s = this._calcdBallInfo.reverse.grav;
                            this._calcdMaxYSpeeds.reverse = [0];
                            for (var n = 1; n <= 5; n++)
                                this._calcdMaxYSpeeds.reverse[n] = Math.sqrt(2 * Math.abs(s) * this._calcdBallInfo.reverse.bounce[n])
                        } else if (i == v.a.BALL_TYPE.NORMAL || i == v.a.BALL_TYPE.PENTA)
                            for (var r in E.a.COL_NAME) {
                                var o = E.a.COL_NAME[r];
                                if (null == this._calcdBallInfo[i] && (this._calcdBallInfo[i] = {}),
                                this._calcdBallInfo[i][o] = JSON.parse(JSON.stringify(this._defaultBallInfo[i]._default)),
                                null != e[i] && (null != e[i]._default && (this._calcdBallInfo[i][o] = JSON.parse(JSON.stringify(e[i]._default))),
                                null != e[i][o] && (this._calcdBallInfo[i][o] = JSON.parse(JSON.stringify(e[i][o])))),
                                i == v.a.BALL_TYPE.NORMAL && (this._calcdBallInfo.normal[o].grav /= t.PHY_VELY_ADJUST),
                                null == this._calcdMaxYSpeeds[i] && (this._calcdMaxYSpeeds[i] = {}),
                                this._calcdMaxYSpeeds[i][o] = [0],
                                i == v.a.BALL_TYPE.NORMAL)
                                    for (s = this._calcdBallInfo.normal[o].grav,
                                    n = 1; n <= 5; n++)
                                        this._calcdMaxYSpeeds.normal[o][n] = -Math.sqrt(2 * Math.abs(s) * this._calcdBallInfo.normal[o].bounce[n]);
                                else if (i == v.a.BALL_TYPE.PENTA) {
                                    var l = this._calcdBallInfo.penta[o].speedx;
                                    for (n = 1; n <= 5; n++)
                                        this._calcdMaxYSpeeds.penta[o][n] = l * this.pentaAngles[n]
                                }
                            }
                    }
                    return this
                }
            }, {
                key: "initBallSpeeds",
                value: function(e) {
                    e._ballType == v.a.BALL_TYPE.NORMAL ? (e._maxSpeedY = this._calcdMaxYSpeeds.normal[e.ballColor][e.ballId],
                    e._bounceHeight = this._calcdBallInfo.normal[e.ballColor].bounce[e.ballId],
                    e.acc.y = this._calcdBallInfo.normal[e.ballColor].grav,
                    e.vel.x = e._ballInfo.vx * this._calcdBallInfo.normal[e.ballColor].speedx,
                    null == e._ballInfo.spawnSpeedY ? e._ballInfo.vy > 0 ? (e.vel.y = 0,
                    e._maxY = e.pos.y) : (e.vel.y = e._maxSpeedY,
                    e._maxY = e.pos.y - e._bounceHeight) : (e.vel.y = -200 - 7 * (5 - e.ballId),
                    e.vel.y /= t.PHY_VELY_ADJUST,
                    e._maxY = e.pos.y)) : e._ballType == v.a.BALL_TYPE.REVERSE ? (e._maxSpeedY = this._calcdMaxYSpeeds.reverse[e.ballId],
                    e._bounceHeight = this._calcdBallInfo.reverse.bounce[e.ballId],
                    e.acc.y = this._calcdBallInfo.reverse.grav,
                    e.vel.x = e._ballInfo.vx * this._calcdBallInfo.reverse.speedx,
                    null == e._ballInfo.spawnSpeedY ? e._ballInfo.vy < 0 || b.a.isYouksPack() && e._ballInfo.vy > 0 ? (e.vel.y = 0,
                    e._maxY = e.pos.y) : (e.vel.y = e._maxSpeedY,
                    e._maxY = e.pos.y + e._bounceHeight) : (e.vel.y = e._ballInfo.spawnSpeedY,
                    e._maxY = e.pos.y)) : e._ballType == v.a.BALL_TYPE.PENTA && (null != e._ballInfo.spawnSpeedY && (e._ballInfo.vy = -Math.abs(e._ballInfo.vy)),
                    e._pentaDir = new m.a(e._ballInfo.vx,e._ballInfo.vy),
                    e.vel.x = this._calcdMaxYSpeeds.penta[e.ballColor][Math.abs(e._ballInfo.vx)],
                    e._ballInfo.vx < 0 && (e.vel.x = -e.vel.x),
                    e.vel.y = this._calcdMaxYSpeeds.penta[e.ballColor][Math.abs(e._ballInfo.vy)],
                    e._ballInfo.vy < 0 && (e.vel.y = -e.vel.y),
                    e._pentaTween = this.gameScene.add.tween({
                        targets: e._ballContainer,
                        angle: 360 * e._ballInfo.rot,
                        repeat: -1,
                        paused: this.gameScene._isPaused,
                        duration: 1e3 * this._pentaRotationSpeed
                    }))
                }
            }, {
                key: "getPopScore",
                value: function(e) {
                    return this.ballPoints[e._ballType] * (6 - e.ballId)
                }
            }]),
            t
        }(E.a)
          , P = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "spawnBallManager",
                value: function(e, t) {
                    return y.a.isBT ? new f(e,t) : y.a.isBS2 || y.a.isBS3 ? new k(e,t) : void 0
                }
            }]),
            e
        }()
          , L = a(12)
          , A = a(31)
          , I = a(39)
          , M = a(8)
          , O = a(20)
          , D = a(77)
          , R = a(15)
          , B = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                (a = l()(this, _()(t).call(this, e))).timeInitial = 0,
                a.timeLeft = 0,
                a._upgradeItemTime = 0,
                a._timebarTimeScale = 1,
                a.graphicsFront = e.add.graphics(),
                a._offsetBar = 2,
                a.rounded_corner = 4,
                a.timebarStopped = !1,
                a._turningTimeToPoints = !1,
                a._turningTimeToPoints_break = 0,
                a.turningTimeToPointsAccumulated = 0,
                a.timeToPointsBonus = null,
                a.timeBonusSound = null,
                a.greatJobLvlMsg = null,
                a._allowPlaying10SecMark = !0,
                a._blinkClock_BS3_tween = null,
                a
            }
            return d()(t, e),
            r()(t, [{
                key: "myInit",
                value: function(e) {
                    var t = e.time1;
                    return y.a.isBT && b.a.currentMode == b.a.MODES.TWOP && (t = e.time2),
                    this.timeInitial = t,
                    this.timeLeft = t,
                    this._drawTimebar(),
                    this
                }
            }, {
                key: "applyUpgradeTime",
                value: function(e) {
                    this._upgradeItemTime = e
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    if (this._turningTimeToPoints && (y.a.isBT ? this._turnTimeToPointsBT1(t) : (y.a.isBS2 || y.a.isBS3) && this._turnTimeToPointsBS2(t)),
                    !this.gameScene.isGamePaused && !this.timebarStopped && this.timeLeft > 0) {
                        if (this.timeLeft -= t * this._timebarTimeScale / 1e3,
                        this.timeLeft < 0 && (this.timeLeft = 0),
                        this._redrawTimebar(),
                        this.timeLeft <= this._upgradeItemTime && null != this.gameScene.upgradeItem && (this.gameScene.itemManager.addMod(this.gameScene.upgradeItem.modType),
                        this.gameScene.upgradeItem = null),
                        y.a.isBS3 && this.timeLeft <= 10 && this._allowPlaying10SecMark && (L.a.playSound(this.gameScene, L.a.SND.UI_10SEC_LEFT, {
                            volume: .5
                        }),
                        this._allowPlaying10SecMark = !1,
                        this._blinkClock_BS3_tween = this.gameScene.tweens.add({
                            targets: this.gameScene.myGUI.timerClock,
                            alpha: {
                                from: .2,
                                to: .8
                            },
                            ease: "Linear",
                            duration: 200,
                            repeat: -1,
                            yoyo: !0
                        }),
                        O.a.isLazyLoaded)) {
                            var a = new M.a(this.gameScene,377,458,y.a.lazySpriteKey,"ui/low_time.png",1,S.a.RENDER_DEPTH.UIOVER);
                            this.gameScene.time.addEvent({
                                delay: 2e3,
                                callback: function() {
                                    a.destroy()
                                }
                            })
                        }
                        0 == this.timeLeft && (this.gameScene.myEventManager.dispatchEvent(A.a.EVENT_TYPE.TIME_END),
                        this.outOfTime())
                    }
                }
            }, {
                key: "outOfTime",
                value: function() {
                    L.a.playSound(this.gameScene, L.a.SND.OUT_OF_TIME),
                    this.gameScene.playerDied(null, u.a.DEATH_REASON.TIMEBAR)
                }
            }, {
                key: "addTime",
                value: function(e) {
                    y.a.isBS3 && this.timeLeft < 10 && this.timeLeft + e > 10 && (this._allowPlaying10SecMark = !0,
                    this._blinkClock_BS3_tween.stop(0),
                    this.gameScene.myGUI.timerClock.alpha = 1),
                    this.timeLeft += e,
                    this.timeLeft > this.timeInitial && (this.timeLeft = this.timeInitial)
                }
            }, {
                key: "turnTimeToPoints",
                value: function() {
                    if (this._showShareButton(),
                    y.a.isBT)
                        T.a.log("TIMEBAR", "TUrning time to points now"),
                        this._turningTimeToPoints = !0;
                    else if (y.a.isBS2 || y.a.isBS3) {
                        var e = this;
                        this.greatJobLvlMsg = new I.a(this.gameScene,I.a.MESSAGES.LEVEL_COMPLETED,99,(function() {}
                        )).myInit(),
                        this.greatJobLvlMsg.background.displayWidth = 400,
                        this.greatJobLvlMsg.background.displayHeight = 120,
                        this.gameScene.time.addEvent({
                            delay: 800,
                            callback: function() {
                                e._turningTimeToPoints = !0;
                                var t = e.gameScene.add.bitmapText(y.a.gameWidth / 2 - 90, .57 * y.a.gameHeight, y.a.fontNames.MENU, "TIME BONUS:", 26, Phaser.GameObjects.BitmapText.ALIGN_CENTER);
                                if (t.setOrigin(.5, .5),
                                S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, t),
                                e.timeToPointsBonus = e.gameScene.add.bitmapText(y.a.gameWidth / 2 + 90, t.y, y.a.fontNames.MENU, "0", 26, Phaser.GameObjects.BitmapText.ALIGN_CENTER),
                                e.timeToPointsBonus.setOrigin(.5, .5),
                                S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, e.timeToPointsBonus),
                                e.timeBonusSound = L.a.playSound(e.gameScene, L.a.SND.TIME_BONUS),
                                null != e.timeBonusSound) {
                                    var a = e.timeBonusSound.totalDuration - .129;
                                    a < 0 && (a = 0),
                                    null == e.timeBonusSound.markers.bonus && e.timeBonusSound.addMarker({
                                        name: "bonus",
                                        start: a
                                    })
                                }
                                e.greatJobLvlMsg.background.setOrigin(.5, 0),
                                e.greatJobLvlMsg.background.y -= e.greatJobLvlMsg.background.displayHeight / 2,
                                e.gameScene.add.tween({
                                    targets: e.greatJobLvlMsg.background,
                                    displayHeight: 150,
                                    duration: 150
                                })
                            },
                            callbackScope: this
                        })
                    }
                }
            }, {
                key: "_turnTimeToPointsBT1",
                value: function(e) {
                    var t = this.timeInitial * e / 3e3;
                    this.timeLeft >= 0 && (this.timeLeft - t > 0 ? this.timeLeft -= t : (T.a.log("TIMEBAR", "BT1, Done turning time to points"),
                    t = this.timeLeft,
                    this.timeLeft = 0,
                    this._turningTimeToPoints = !1,
                    this.gameScene._levelCompleteTimebarAdded(1e3)),
                    this.gameScene.myGUI.addScore(Math.ceil(30 * t))),
                    this._redrawTimebar()
                }
            }, {
                key: "_turnTimeToPointsBS2",
                value: function(e) {
                    var t = e / 1e3 * 25;
                    this.timeLeft >= 0 && (this.timeLeft - t > 0 ? this.timeLeft -= t : (T.a.log("TIMEBAR", "BS2, Done turning time to points"),
                    t = this.timeLeft,
                    this.timeLeft = 0,
                    this._turningTimeToPoints = !1,
                    this.gameScene.time.addEvent({
                        delay: 300,
                        callback: this._showAccuracyBonusBS2,
                        callbackScope: this
                    })),
                    this.turningTimeToPointsAccumulated += t,
                    this.timeToPointsBonus.text = Math.ceil(this.turningTimeToPointsAccumulated) + " X 10 = " + 10 * Math.ceil(this.turningTimeToPointsAccumulated),
                    null == this.timeBonusSound || this.timeBonusSound.isPlaying || this.timeBonusSound.play("bonus")),
                    this._redrawTimebar()
                }
            }, {
                key: "_showAccuracyBonusBS2",
                value: function() {
                    var e = !0;
                    null != this.gameScene.players[1] && (e = e && this.gameScene.players[1].shotManager.accuracyBonus),
                    null != this.gameScene.players[2] && (e = e && this.gameScene.players[2].shotManager.accuracyBonus);
                    var t = 700
                      , a = 10 * Math.ceil(this.turningTimeToPointsAccumulated);
                    if (e) {
                        a += 2e3,
                        t = 1300,
                        this.gameScene.add.tween({
                            targets: this.greatJobLvlMsg.background,
                            displayHeight: 190,
                            duration: 150
                        });
                        var i = this.gameScene.add.bitmapText(y.a.gameWidth / 2 + 10, this.timeToPointsBonus.y + 40, y.a.fontNames.MENU, "ACCURATE SHOOTING:       2000", 26, Phaser.GameObjects.BitmapText.ALIGN_CENTER);
                        i.setOrigin(.5, .5),
                        S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, i)
                    }
                    this.gameScene.myGUI.addScore(a),
                    this.gameScene._levelCompleteTimebarAdded(t)
                }
            }, {
                key: "_showShareButton",
                value: function() {
                    if (!this.gameScene.CrntLvl.isEditorLevel && null == b.a.customPack && b.a.currentMode == b.a.MODES.SINGLE)
                        if (y.a.isBT) {
                            var e = y.a.gameWidth - 60
                              , t = 320;
                            D.a.shareSceneButton(this.gameScene, e, t, .8, v.a.SHARE_TYPE.LEVEL, this.gameScene._startNextLevel.bind(this.gameScene))
                        } else {
                            e = y.a.gameWidth - 60,
                            t = 365;
                            D.a.shareSceneButton(this.gameScene, e, t, .8, v.a.SHARE_TYPE.LEVEL, this.gameScene._startNextLevel.bind(this.gameScene))
                        }
                }
            }, {
                key: "_drawTimebar",
                value: function() {
                    if (!y.a.isBS3) {
                        var e = this.gameScene.add.graphics();
                        y.a.isBT ? (e.lineStyle(1.5, y.a.timebarColorBackStroke, 1),
                        e.strokeRect(y.a.timebarP1.x, y.a.timebarP1.y, y.a.timebarP2.x - y.a.timebarP1.x, y.a.timebarP2.y - y.a.timebarP1.y),
                        e.fillStyle(y.a.timebarColorBack),
                        e.fillRect(y.a.timebarP1.x, y.a.timebarP1.y, y.a.timebarP2.x - y.a.timebarP1.x, y.a.timebarP2.y - y.a.timebarP1.y),
                        this.graphicsFront.fillStyle(y.a.timebarColorFront),
                        this.graphicsFront.defaultFillColor = y.a.timebarColorFront) : y.a.isBS2 && (this._offsetBar = 0,
                        e.lineStyle(1.5, y.a.timebarColorBackStroke, 1),
                        e.strokeRoundedRect(y.a.timebarP1.x, y.a.timebarP1.y, y.a.timebarP2.x - y.a.timebarP1.x, y.a.timebarP2.y - y.a.timebarP1.y, this.rounded_corner),
                        e.fillStyle(y.a.timebarColorBack),
                        e.fillRoundedRect(y.a.timebarP1.x, y.a.timebarP1.y, y.a.timebarP2.x - y.a.timebarP1.x, y.a.timebarP2.y - y.a.timebarP1.y, this.rounded_corner),
                        this.graphicsFront.fillStyle(y.a.timebarColorFront),
                        this.graphicsFront.defaultFillColor = y.a.timebarColorFront),
                        S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, e),
                        S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, this.graphicsFront),
                        this._redrawTimebar()
                    }
                }
            }, {
                key: "_redrawTimebar",
                value: function() {
                    var e = this.timeLeft / this.timeInitial;
                    if (this.graphicsFront.clear(),
                    !(e <= .007))
                        if (y.a.isBT)
                            this.graphicsFront.fillRect(y.a.timebarP1.x + this._offsetBar, y.a.timebarP1.y + this._offsetBar, (y.a.timebarP2.x - y.a.timebarP1.x - 2 * this._offsetBar) * e, y.a.timebarP2.y - y.a.timebarP1.y - 2 * this._offsetBar);
                        else if (y.a.isBS2) {
                            var t = y.a.timebarP2.x - y.a.timebarP1.x - 2 * this._offsetBar
                              , a = t * (1 - e);
                            this.graphicsFront.fillRoundedRect(y.a.timebarP1.x + this._offsetBar + a, y.a.timebarP1.y + this._offsetBar, t * e, y.a.timebarP2.y - y.a.timebarP1.y - 2 * this._offsetBar, this.rounded_corner)
                        } else
                            y.a.isBS3 && (this.gameScene.myGUI.timerTxt.text = ("000" + Math.floor(this.timeLeft)).slice(-3))
                }
            }]),
            t
        }(S.a)
          , w = a(252)
          , N = a(56)
          , x = a(22)
          , C = a(75)
          , U = a(13)
          , W = function() {
            function e(t) {
                s()(this, e),
                this.gameScene = t,
                this.score1Txt = null,
                this.score2Txt = null,
                this.activeWeapon = [],
                this.activeWeaponSwitch = []
            }
            return r()(e, [{
                key: "myInit",
                value: function() {
                    return y.a.isBT ? this._drawBT1() : y.a.isBS2 ? this._drawBS2() : y.a.isBS3 && this._drawBS3(),
                    this
                }
            }, {
                key: "_drawBT1",
                value: function() {
                    var e = S.a.RENDER_DEPTH.UI;
                    new M.a(this.gameScene,71,434,y.a.spriteKey,"ui/name_box.png",1,e),
                    new M.a(this.gameScene,630,434,y.a.spriteKey,"ui/name_box.png",1,e),
                    new M.a(this.gameScene,71,434,y.a.spriteKey,"ui/name_pl1.png",1,e),
                    new M.a(this.gameScene,630,434,y.a.spriteKey,"ui/name_pl2.png",1,e),
                    new M.a(this.gameScene,188,434,y.a.spriteKey,"ui/points_box.png",1,e),
                    new M.a(this.gameScene,510,434,y.a.spriteKey,"ui/points_box.png",1,e);
                    this.score1Txt = this.gameScene.add.bitmapText(221, 434, y.a.fontNames.SCORE, b.a.scores[1] || 0),
                    this.score2Txt = this.gameScene.add.bitmapText(544, 434, y.a.fontNames.SCORE, b.a.scores[2] || 0),
                    this.score1Txt.setOrigin(1, .5),
                    this.score2Txt.setOrigin(1, .5),
                    S.a.mySpriteDepth(e, this.score1Txt),
                    S.a.mySpriteDepth(e, this.score2Txt);
                    new M.a(this.gameScene,350,421,y.a.spriteKey,"ui/level_box.png",1,e);
                    var t = this.gameScene.add.bitmapText(350, 432, y.a.fontNames.LVL_NUM, b.a.currentLevel.toString());
                    t.setOrigin(.5, .5),
                    S.a.mySpriteDepth(e, t);
                    new M.a(this.gameScene,291,422,y.a.spriteKey,"ui/ui_torch.png",1,e);
                    var a = new M.a(this.gameScene,411,422,y.a.spriteKey,"ui/ui_torch.png",1,e);
                    a.scaleX = -a.scaleX
                }
            }, {
                key: "_drawBS2",
                value: function() {
                    var e = S.a.RENDER_DEPTH.UI
                      , t = {
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10
                    }
                      , a = 98
                      , i = 241
                      , s = 333
                      , n = 423
                      , r = 552;
                    b.a.currentMode == b.a.MODES.TWOP && (a = 98,
                    i = 231,
                    s = 313,
                    n = 383,
                    r = 552);
                    var o = new x.a(this.gameScene,a,456,146,33,"ui/ingame/interface_box.png",t);
                    o.setDepthNinePatch(S.a.RENDER_DEPTH.UIBACK),
                    new x.a(this.gameScene,i,456,94,33,"ui/ingame/interface_box.png",t).setDepthNinePatch(S.a.RENDER_DEPTH.UIBACK);
                    var l = this.gameScene.add.bitmapText(i, 456, y.a.fontNames.SCORE, "COMBO", 22);
                    l.setOrigin(.5, .5),
                    S.a.mySpriteDepth(e, l),
                    l.alpha = .35;
                    var h = new M.a(this.gameScene,i,456,"interface_combo_meter",null,1,e);
                    this.comboMask = this.gameScene.add.graphics(),
                    this.comboMask.fillRect(h.x - h.displayWidth / 2, h.y - h.displayHeight / 2, h.displayWidth, h.displayHeight);
                    var _ = this.comboMask.createGeometryMask();
                    h.setMask(_),
                    this._comboMaskMax = this.comboMask.x,
                    this._comboMaskMin = this.comboMask.x - h.displayWidth,
                    this.comboMask.x = this._comboMaskMin,
                    this._drawCombo();
                    var c = "ui/ingame/interface_box.png";
                    b.a.currentMode == b.a.MODES.TWOP && (c = "ui/ingame/interface_box_p1.png");
                    var d = new x.a(this.gameScene,s,456,41,43,c,t);
                    if (d.setDepthNinePatch(S.a.RENDER_DEPTH.UIBACK),
                    this.activeWeapon[1] = new M.a(this.gameScene,d.ninePatch.x,d.ninePatch.y,y.a.spriteKey,"ui/ingame/interface_single.png",1,e),
                    this.activeWeaponSwitch[1] = new M.a(this.gameScene,d.ninePatch.x,d.ninePatch.y,y.a.spriteKey,"ui/white.png",1,e),
                    this.activeWeaponSwitch[1].setDisplaySize(this.activeWeapon[1].displayWidth, this.activeWeapon[1].displayHeight),
                    this.activeWeaponSwitch[1].alpha = 0,
                    b.a.currentMode == b.a.MODES.TWOP) {
                        var u = new x.a(this.gameScene,453,456,41,43,"ui/ingame/interface_box_p2.png",t);
                        u.setDepthNinePatch(S.a.RENDER_DEPTH.UIBACK),
                        this.activeWeapon[2] = new M.a(this.gameScene,u.ninePatch.x,u.ninePatch.y,y.a.spriteKey,"ui/ingame/interface_single.png",1,e),
                        this.activeWeaponSwitch[2] = new M.a(this.gameScene,u.ninePatch.x,u.ninePatch.y,y.a.spriteKey,"ui/white.png",1,e),
                        this.activeWeaponSwitch[2].setDisplaySize(this.activeWeapon[1].displayWidth, this.activeWeapon[1].displayHeight),
                        this.activeWeaponSwitch[2].alpha = 0
                    }
                    var p = new x.a(this.gameScene,n,456,71,43,"ui/ingame/interface_box.png",t);
                    p.setDepthNinePatch(S.a.RENDER_DEPTH.UIBACK);
                    var m = this.gameScene.add.bitmapText(n, 447, y.a.fontNames.LVL_NUM, "LEVEL", 14)
                      , g = this.gameScene.add.bitmapText(n, 461, y.a.fontNames.LVL_NUM, b.a.currentLevel.toString(), 26);
                    m.setOrigin(.5, .5),
                    g.setOrigin(.5, .5),
                    S.a.mySpriteDepth(e, m),
                    S.a.mySpriteDepth(e, g),
                    m.alpha = .75;
                    var E = new x.a(this.gameScene,r,456,120,33,"ui/ingame/interface_box.png",t);
                    if (E.setDepthNinePatch(S.a.RENDER_DEPTH.UIBACK),
                    this.score1Txt = this.gameScene.add.bitmapText(r + 50, 456, y.a.fontNames.SCORE, b.a.scores[1] || 0, 22),
                    this.score1Txt.setOrigin(1, .5),
                    S.a.mySpriteDepth(e, this.score1Txt),
                    this.gameScene.CrntLvl.isEditorLevel) {
                        p.setVisibleNinePatch(!1),
                        g.visible = !1,
                        m.visible = !1,
                        o.setVisibleNinePatch(!1),
                        E.ninePatch.x -= 95,
                        this.score1Txt.x -= 95,
                        this.buttonStop = this.gameScene.add.sprite(y.a.gameWidth, y.a.gameHeight, y.a.editorSpriteKey, "buttons/button_stop.png"),
                        this.buttonStop.x -= this.buttonStop.displayWidth / 2 + 5,
                        this.buttonStop.y -= this.buttonStop.displayHeight / 2 + 5,
                        S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, this.buttonStop),
                        this.buttonStop.setInteractive({
                            useHandCursor: !0
                        });
                        var f = this;
                        this.buttonStop.on("pointerup", (function() {
                            return f.gameScene._backToEditor()
                        }
                        )),
                        b.a.currentMode == b.a.MODES.TWOP && (u.ninePatch.x -= 90,
                        this.activeWeapon[2].x -= 90,
                        this.activeWeaponSwitch[2].x -= 90)
                    }
                }
            }, {
                key: "_drawBS3",
                value: function() {
                    var e = S.a.RENDER_DEPTH.UI;
                    new M.a(this.gameScene,220,456,y.a.spriteKey,"ui/ingame/combo_fill.png",1,e).setOrigin(.5, .5),
                    this.comboMeter = this.gameScene.add.tileSprite(220, 456, 84, 28, "interface_combo_meter"),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, this.comboMeter),
                    this.comboMeter.tileScaleX = 84 / 79;
                    var t = this.gameScene.add.graphics();
                    t.fillRoundedRect(this.comboMeter.x - this.comboMeter.displayWidth / 2, this.comboMeter.y - this.comboMeter.displayHeight / 2, this.comboMeter.displayWidth, this.comboMeter.displayHeight, 10);
                    var a = t.createGeometryMask();
                    this.comboMeter.setMask(a),
                    this._drawCombo();
                    var i = this.gameScene.add.graphics();
                    i.lineStyle(2, 6776679, .8),
                    i.strokeRoundedRect(this.comboMeter.x - this.comboMeter.displayWidth / 2, this.comboMeter.y - this.comboMeter.displayHeight / 2, this.comboMeter.displayWidth, this.comboMeter.displayHeight, 10),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, i);
                    var s = "ui/ingame/interface_box.png";
                    b.a.currentMode == b.a.MODES.TWOP && (s = "ui/ingame/interface_box_p1.png");
                    var n = new M.a(this.gameScene,300,456,y.a.spriteKey,s,1,S.a.RENDER_DEPTH.UIBACK);
                    if (this.activeWeapon[1] = new M.a(this.gameScene,n.x,n.y,y.a.spriteKey,"ui/ingame/interface_single.png",1,e),
                    this.activeWeaponSwitch[1] = new M.a(this.gameScene,n.x,n.y,y.a.spriteKey,"ui/ingame/interface_box.png",1,e),
                    this.activeWeaponSwitch[1].setDisplaySize(this.activeWeapon[1].displayWidth, this.activeWeapon[1].displayHeight),
                    this.activeWeaponSwitch[1].alpha = 0,
                    b.a.currentMode == b.a.MODES.TWOP) {
                        var r = new M.a(this.gameScene,453,456,y.a.spriteKey,"ui/ingame/interface_box_p2.png",1,S.a.RENDER_DEPTH.UIBACK);
                        this.activeWeapon[2] = new M.a(this.gameScene,r.x,r.y,y.a.spriteKey,"ui/ingame/interface_single.png",1,e),
                        this.activeWeaponSwitch[2] = new M.a(this.gameScene,r.x,r.y,y.a.spriteKey,"ui/ingame/interface_box.png",1,e),
                        this.activeWeaponSwitch[2].setDisplaySize(this.activeWeapon[1].displayWidth, this.activeWeapon[1].displayHeight),
                        this.activeWeaponSwitch[2].alpha = 0
                    }
                    var o = this.gameScene.add.bitmapText(375, 444, y.a.fontNames.TIME_PTS, "LEVEL " + b.a.currentLevel, 18);
                    o.setOrigin(.5, .5),
                    S.a.mySpriteDepth(e, o),
                    this.timerClock = new M.a(this.gameScene,357,466,y.a.spriteKey,"ui/interface_satic.png",1,e),
                    this.timerClock.setOrigin(.5, .5);
                    var l = ("000" + this.gameScene.timebar.timeInitial).slice(-3);
                    this.timerTxt = this.gameScene.add.bitmapText(387, 464, y.a.fontNames.TIME_PTS, l, 24),
                    this.timerTxt.setOrigin(.5, .5),
                    S.a.mySpriteDepth(e, this.timerTxt),
                    this.score1Txt = this.gameScene.add.bitmapText(552, 456, y.a.fontNames.TIME_PTS, b.a.scores[1] || 0, 22),
                    this.score1Txt.setOrigin(1, .5),
                    S.a.mySpriteDepth(e, this.score1Txt);
                    var h = this.gameScene.add.bitmapText(562, 456, y.a.fontNames.TIME_PTS, "PTS", 22);
                    h.setOrigin(0, .5),
                    S.a.mySpriteDepth(e, h)
                }
            }, {
                key: "addScore",
                value: function(e, t) {
                    y.a.isBT ? this._addScoreBT1(e, t) : (y.a.isBS2 || y.a.isBS3) && this._addScoreBS2_BS3(e, t),
                    U.a.TaskIncrement(this.gameScene, U.a.TASK_TYPE.LEVEL_POINTS, e, b.a.currentLevel),
                    U.a.TaskUpdate(this.gameScene, U.a.TASK_TYPE.GAME_POINTS, b.a.scores[1])
                }
            }, {
                key: "_addScoreBT1",
                value: function(e, t) {
                    null != t ? b.a.scores[t.playerId] += e : (N.a.crntLives[1] > 0 && (b.a.scores[1] += e),
                    N.a.crntLives[2] > 0 && (b.a.scores[2] += e)),
                    this.score1Txt.text = b.a.scores[1],
                    this.score2Txt.text = b.a.scores[2]
                }
            }, {
                key: "_addScoreBS2_BS3",
                value: function(e, t) {
                    null != t ? b.a.scores[t.playerId] += e : (N.a.crntLives[1] > 0 && (b.a.scores[1] += e),
                    N.a.crntLives[2] > 0 && (b.a.scores[2] += e)),
                    null != this.score1Txt && (this.score1Txt.text = b.a.scores[1]),
                    null != this.score2Txt && (this.score2Txt.text = b.a.scores[2])
                }
            }, {
                key: "addCombo",
                value: function(e, t) {
                    if (!y.a.isBT) {
                        b.a.comboPoints += e,
                        T.a.log("addCombo:" + e + ", total:" + b.a.comboPoints, this);
                        var a = t.pos.x
                          , i = t.pos.y
                          , s = y.a.fontNames.COMBOX
                          , n = "COMBO x" + e + "!"
                          , r = 14 + 2.5 * e;
                        if (b.a.comboPoints >= 100)
                            for (var o in b.a.comboPoints = 0,
                            n = "COMBO BONUS!",
                            r = 30,
                            s = y.a.fontNames.LVL_MSG,
                            y.a.isBS3 && (s = y.a.fontNames.COMBOBONUS),
                            b.a.resetComboMeter(),
                            this.gameScene.lives.addLife(1),
                            this.gameScene.players) {
                                var l = this.gameScene.players[o];
                                l.playerShield.addShield(C.a.SHIELD_TYPES.PLAIN),
                                l.speedUpPlayer()
                            }
                        else
                            T.a.log("COMBO increase by", e, " to:", b.a.comboPoints);
                        var h = this.gameScene.add.bitmapText(a, i, s, n, r);
                        (h = S.a.mySpriteDepth(S.a.RENDER_DEPTH.GAME, h)).setOrigin(.5, .5),
                        h.y -= 2 * y.a.ballSizes[t.ballId],
                        h.y < y.a.gameAreaMin.y + h.height / 2 && (h.y = y.a.gameAreaMin.y + h.height / 2),
                        h.y > y.a.gameAreaMax.y - h.height / 2 && (h.y = y.a.gameAreaMax.y - h.height / 2),
                        h.x < y.a.gameAreaMin.x + h.width / 2 && (h.x = y.a.gameAreaMin.y + h.width / 2),
                        h.x > y.a.gameAreaMax.x - h.width / 2 && (h.x = y.a.gameAreaMax.x - h.width / 2),
                        this.gameScene.time.addEvent({
                            delay: 1500,
                            callback: function() {
                                h.destroy()
                            }
                        }),
                        this._drawCombo()
                    }
                }
            }, {
                key: "_drawCombo",
                value: function() {
                    y.a.isBS2 ? this.comboMask.x = this._comboMaskMin + Math.abs(this._comboMaskMax - this._comboMaskMin) * b.a.comboPoints / 100 : y.a.isBS3 && this.comboMeter.setCrop(0, 0, this.comboMeter.width * b.a.comboPoints / 100, 200)
                }
            }]),
            e
        }()
          , Y = a(134)
          , K = function() {
            function e(t, a, i, n, r, o, l) {
                var h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : m.a.ZERO;
                s()(this, e),
                this.myScene = t,
                this.image_back = new M.a(t,a,i,y.a.spriteKey,n,1,o),
                this.image_front = new M.a(t,a,i,y.a.spriteKey,r,1,o),
                this.callback = l,
                this.buttonIsEnabled = !0;
                var _ = this.image_back.displayWidth / 2 * h.x
                  , c = this.image_back.displayHeight / 2 * h.y;
                this.image_back.x += _,
                this.image_back.y += c,
                this.image_front.x += _,
                this.image_front.y += c,
                this.buttonTween = null,
                this.myInit()
            }
            return r()(e, [{
                key: "myInit",
                value: function() {
                    var e = this;
                    this.image_back.scale = 1,
                    this.image_front.scale = 1,
                    this.image_back.setInteractive({
                        useHandCursor: !0
                    }).on("pointerover", (function() {
                        return e.enterButtonHoverState()
                    }
                    )).on("pointerout", (function() {
                        return e.enterButtonRestState()
                    }
                    )).on("pointerdown", (function() {
                        return e.enterButtonActiveState()
                    }
                    )).on("pointerup", (function() {
                        e.enterButtonHoverState(),
                        e.callback()
                    }
                    ))
                }
            }, {
                key: "enableButton",
                value: function() {
                    this.buttonIsEnabled = !0,
                    this.refreshButton()
                }
            }, {
                key: "disableButton",
                value: function() {
                    this.buttonIsEnabled = !1,
                    this.refreshButton()
                }
            }, {
                key: "refreshButton",
                value: function() {
                    null != this.buttonTween && this.buttonTween.stop(),
                    this.buttonIsEnabled ? this.buttonTween = this.myScene.tweens.add({
                        targets: [this.image_back, this.image_front],
                        alpha: .25,
                        duration: 350,
                        delay: 750
                    }) : this.buttonTween = this.myScene.tweens.add({
                        targets: [this.image_back, this.image_front],
                        alpha: 1,
                        duration: 500
                    })
                }
            }, {
                key: "enterButtonRestState",
                value: function() {
                    this.buttonIsEnabled && (this.image_back.scale = 1,
                    this.image_front.scale = 1)
                }
            }, {
                key: "enterButtonHoverState",
                value: function() {
                    this.buttonIsEnabled && (this.image_back.scale = 1.1,
                    this.image_front.scale = 1.1)
                }
            }, {
                key: "enterButtonActiveState",
                value: function() {
                    this.buttonIsEnabled && (this.image_back.scale = 1.1,
                    this.image_front.scale = 1.1)
                }
            }]),
            e
        }()
          , G = K
          , H = function() {
            function e(t) {
                s()(this, e),
                this.gameScene = t,
                this.myButton = new G(t,y.a.gameWidth,0,"ui/button_back_circle.png","ui/btn/pause.png",S.a.RENDER_DEPTH.UIOVER,this.btn_callPauseGame.bind(this),new m.a(-1.3,1.3)),
                this.myButton.x -= this.myButton.image_back.displayWidth,
                this.myButton.y -= this.myButton.image_back.displayHeight,
                this.myButton.disableButton(),
                this.binded_keyboard_pauseGame = this.keyboard_pauseGame.bind(this),
                this.gameScene.input.keyboard.on("keydown", this.binded_keyboard_pauseGame)
            }
            return r()(e, [{
                key: "btn_callPauseGame",
                value: function() {
                    this.gameScene.myPauseGame(!0, !0, ye.PAUSE_REASONS.BUTTON)
                }
            }, {
                key: "keyboard_pauseGame",
                value: function(e) {
                    if (this.gameScene._canPlayerPause && (e.keyCode === Phaser.Input.Keyboard.KeyCodes.P || e.keyCode === Phaser.Input.Keyboard.KeyCodes.ESC)) {
                        if (T.a.getMobileScreenshots)
                            return this.gameScene.myPauseGame(!this.gameScene.isGamePaused, !1, ye.PAUSE_REASONS.FOR_SCREENSHOT);
                        this.gameScene.isGamePaused ? this.gameScene.pauseMenu.btn_unpauseGame() : this.gameScene.myPauseGame(!0, !0, ye.PAUSE_REASONS.KEYBOARD)
                    }
                }
            }, {
                key: "myDestroy",
                value: function() {
                    this.gameScene.input.keyboard.off("keydown", this.binded_keyboard_pauseGame),
                    this.myButton.image_back.visible = !1,
                    this.myButton.image_front.visible = !1
                }
            }]),
            e
        }()
          , V = a(26)
          , z = a(21)
          , F = a(177)
          , X = a(37)
          , j = a(53)
          , q = a(38)
          , J = function() {
            function e(t) {
                s()(this, e),
                this.gameScene = t,
                this.background = new M.a(t,-y.a.gameWidth,-y.a.gameHeight,y.a.spriteKey,"ui/black.png",1,S.a.RENDER_DEPTH.PAUSE_MENU),
                this.background.alpha = .7,
                this.background.setDisplaySize(3 * y.a.gameWidth, 3 * y.a.gameHeight),
                this.background.setDisplayOrigin(.5),
                this.background.setInteractive();
                var a = y.a.gameWidth / 2
                  , i = 100
                  , n = 0;
                y.a.isBT && (n = 6,
                this.main_menu_back = new x.a(t,a,250,246,150,"ui/main_menu_back.png",{
                    top: 50,
                    bottom: 50,
                    left: 50,
                    right: 50
                }));
                var r = 0;
                this.backtogame = new z.a(t,a,224.5 + i * r / 2,196,47,{
                    text: V.a.BT1.PAUSE_BACK,
                    size: 32,
                    fixY: n
                },this.btn_unpauseGame.bind(this),null,null,!1,!0,null,!1),
                r = 1,
                this.quitgame = new z.a(t,a,224.5 + i * r / 2,196,47,{
                    text: V.a.BT1.PAUSE_QUIT,
                    size: 32,
                    fixY: n
                },this.btn_quitGame.bind(this),null,null,!0,!1,null,!1),
                this.main_menu_back && this.main_menu_back.setDepthNinePatch(S.a.RENDER_DEPTH.PAUSE_MENU),
                this.backtogame.setDepthMyUIButton(S.a.RENDER_DEPTH.PAUSE_MENU),
                this.quitgame.setDepthMyUIButton(S.a.RENDER_DEPTH.PAUSE_MENU);
                var o = 70
                  , l = 70;
                y.a.isBT || (o = 50,
                l = 40),
                this.soundButton = new F.a(t,o,l),
                this.soundButton.changeDepth(S.a.RENDER_DEPTH.PAUSE_MENU);
                new j.a(t,350,35);
                if (null != j.a._activeButton && (j.a._activeButton.btn_background && j.a._activeButton.btn_background.setDepthNinePatch(S.a.RENDER_DEPTH.PAUSE_MENU),
                j.a._activeButton.btn.setDepthMyUIButton(S.a.RENDER_DEPTH.PAUSE_MENU)),
                this.showPauseMenu(!1),
                t.CrntLvl.isEditorLevel) {
                    this.quitgame.myText.text = "OPEN EDITOR";
                    var h = this;
                    this.quitgame.callbackClick = function() {
                        h.gameScene._backToEditor()
                    }
                }
            }
            return r()(e, [{
                key: "showPauseMenu",
                value: function(e) {
                    this.background.visible = e,
                    this.main_menu_back && this.main_menu_back.setVisibleNinePatch(e),
                    this.backtogame.setVisibleMyUIButton(e),
                    this.quitgame.setVisibleMyUIButton(e),
                    this.soundButton.setVisibleMySndBtn(e),
                    null != j.a._activeButton && (j.a._activeButton.btn_background && j.a._activeButton.btn_background.setVisibleNinePatch(e),
                    j.a._activeButton.btn.setVisibleMyUIButton(e)),
                    e && (q.a.changeActiveScene(this.gameScene),
                    q.a.selectButton(this.backtogame))
                }
            }, {
                key: "btn_unpauseGame",
                value: function() {
                    X.a.showAd(this.gameScene, X.a.PLACEMENTS.INTERSTITIAL, this._delayedUnpauseGame.bind(this))
                }
            }, {
                key: "_delayedUnpauseGame",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                        e.gameScene.myPauseGame(!1, !0, ye.PAUSE_REASONS.BUTTON)
                    }
                    ), 200)
                }
            }, {
                key: "btn_quitGame",
                value: function() {
                    y.a.isBT ? this.gameScene.myTransition.transitionToggle(!1, "BT1_MainMenu") : y.a.isBS2 ? null == b.a.customPack ? this.gameScene.myTransition.transitionToggle(!1, "BS2_MainMenu") : this.gameScene.myTransition.transitionToggle(!1, "BS2_MoreLevels") : y.a.isBS3 && this.gameScene.myTransition.transitionToggle(!1, "BS3_MainMenu")
                }
            }]),
            e
        }()
          , Z = a(24)
          , Q = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                (a = l()(this, _()(t).call(this, e)))._lifetime = 1.6,
                a._timeElapsed = a._lifetime,
                a.myTween = null,
                a.myInit(),
                a
            }
            return d()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    this.mySprite = new M.a(this.gameScene,0,0,y.a.spriteKey,"bubbles/combo.png",1,S.a.RENDER_DEPTH.OVER_GAME),
                    this.mySprite.setDisplayOrigin(.5),
                    this.mySprite.visible = !1
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    this._timeElapsed < this._lifetime && (this._timeElapsed += t / 1e3,
                    this._timeElapsed >= this._lifetime && (this.mySprite.visible = !1))
                }
            }, {
                key: "showWallSpikeCombo",
                value: function(e, t) {
                    this.mySprite.x = e,
                    this.mySprite.y = t,
                    this.mySprite.visible = !0,
                    this.mySprite.scale = 1,
                    this.mySprite.angle = Z.c(30) - 15,
                    this._timeElapsed = 0,
                    null != this.myTween && this.myTween.stop(),
                    this.myTween = this.gameScene.tweens.add({
                        targets: this.mySprite,
                        scale: 1.2,
                        ease: "Bounce",
                        duration: 450
                    })
                }
            }]),
            t
        }(S.a)
          , $ = a(111)
          , ee = a(19)
          , te = a.n(ee)
          , ae = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                a = l()(this, _()(t).call(this, e)),
                T.a.log("Confetti!!!"),
                a.gameScene = e,
                a.confetti = [],
                a.confettiNum = 32,
                a.confettiVariations = 5,
                a.fire_blasts = 15,
                a.myInit(),
                a
            }
            return d()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    if (y.a.isBS2)
                        for (var e = 0; e < this.confettiNum; e++) {
                            var t = R.a.cameraOffset.x - 100;
                            e % 2 == 0 && (t = y.a.gameWidth - R.a.cameraOffset.x + 100);
                            var a = Z.a(100, 200)
                              , i = "ui/confetti/confetti_" + (Z.c(this.confettiVariations) + 1) + ".png"
                              , s = this.gameScene.add.sprite(t, a, y.a.spriteKey, i);
                            s.angle = Z.a(0, 359),
                            s.scale = Z.a(.55, 1),
                            S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, s),
                            this.confetti.push(s),
                            this.applyForce(s, e)
                        }
                    else if (y.a.isBS3 && O.a.isLazyLoaded)
                        for (var n = 0; n < this.fire_blasts; n++)
                            this.spawnStar(n % 2 == 1),
                            n < this.fire_blasts / 2 && this.spawnGarmen(n)
                }
            }, {
                key: "spawnStar",
                value: function(e) {
                    var t = Z.a(0, 640)
                      , a = Z.a(t + 5, t + 115)
                      , i = Z.a(t - 50, t + 15)
                      , s = Z.a(260, 420)
                      , n = Z.a(55, 275);
                    e && (t = y.a.gameWidth - t,
                    a = y.a.gameWidth - a,
                    i = y.a.gameWidth - i);
                    var r = new Phaser.Curves.Path(t,600).splineTo([a, s, i, n])
                      , o = this.gameScene.add.follower(r, 0, 0, y.a.lazySpriteKey, "ui/confetti/trail.png")
                      , l = this.gameScene.add.follower(r, 0, 0, y.a.lazySpriteKey, "ui/confetti/star.png");
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, o),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, l);
                    var h = Z.a(0, 2e3)
                      , _ = this
                      , c = !1;
                    o.myid = Math.random(),
                    o.startFollow({
                        positionOnPath: !0,
                        duration: 450,
                        repeat: 0,
                        rotateToPath: !0,
                        rotationOffset: 48,
                        onUpdate: function(e, t) {
                            e.elapsed > h + 310 && !c && (c = !0,
                            L.a.playRandom(_.gameScene, [L.a.SND.FIREWORK_1, L.a.SND.FIREWORK_2, L.a.SND.FIREWORK_3]),
                            o.destroy())
                        },
                        delay: h
                    }),
                    l.startFollow({
                        positionOnPath: !0,
                        duration: 450,
                        repeat: 0,
                        rotateToPath: !0,
                        rotationOffset: 48,
                        onStart: function() {
                            L.a.playSound(_.gameScene, L.a.SND.FIREWORK_ROCKET)
                        },
                        onComplete: function() {
                            var t = _.gameScene.add.sprite(l.x, l.y, y.a.lazySpriteKey, "ui/confetti/blast_1.png");
                            t.angle = Z.a(-30, 30),
                            e && (t.flipX = !0),
                            S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, t),
                            t.anims.play("firework_blast"),
                            t.once("animationcomplete", (function() {
                                t.destroy()
                            }
                            )),
                            l.destroy()
                        },
                        delay: h
                    })
                }
            }, {
                key: "spawnGarmen",
                value: function(e) {
                    var t = this;
                    this.gameScene.time.addEvent({
                        delay: Z.a(100, 2e3),
                        callback: function() {
                            var a = 1;
                            e % 2 == 0 ? a = 2 : e % 3 == 0 && (a = 3);
                            var i = Z.a(0, .3 * y.a.gameWidth)
                              , s = Z.a(-25, 70);
                            2 == a ? i = Z.a(.3 * y.a.gameWidth, .65 * y.a.gameWidth) : 3 == a && (i = Z.a(.65 * y.a.gameWidth, y.a.gameWidth));
                            var n = t.gameScene.add.sprite(i, s, y.a.lazySpriteKey, "ui/confetti/garmen_1.png");
                            n.scale = Z.a(.7, 1),
                            n.angle = Z.a(48, 56),
                            2 == a ? n.angle = Z.a(22, 30) : 3 == a && (n.angle = Z.a(4, 12)),
                            n.anims.play("garmen"),
                            n.once("animationcomplete", (function() {
                                n.destroy()
                            }
                            )),
                            S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIOVER, n)
                        }
                    })
                }
            }, {
                key: "applyForce",
                value: function(e, t) {
                    var a = Z.a(-50, .55 * y.a.gameWidth)
                      , i = Z.a(0, a / 2);
                    t % 2 == 0 && (a = Z.a(.45 * y.a.gameWidth, y.a.gameWidth + 50),
                    i = Z.a(0, (y.a.gameWidth - a) / 2));
                    var s = Z.a(200, 440)
                      , n = Z.a(150, 400);
                    this.gameScene.tweens.add({
                        targets: e,
                        x: a,
                        y: e.y - i,
                        angle: e.angle + 180,
                        duration: s,
                        delay: n,
                        ease: "Cubic.easeOut",
                        callbackScope: this,
                        onComplete: this.beginFalling.bind(this, e)
                    })
                }
            }, {
                key: "beginFalling",
                value: function(e) {
                    this.applyGravityAndRotation(e);
                    var t = Z.a(2e3, 4e3);
                    this.gameScene.tweens.add({
                        targets: e,
                        y: y.a.gameHeight + 50,
                        duration: t
                    })
                }
            }, {
                key: "applyGravityAndRotation",
                value: function(e) {
                    e.y,
                    Z.a(77, 111);
                    var t = Math.random() < .5 ? -1 : 1
                      , a = e.x + Z.a(20, 50) * t
                      , i = e.angle + Z.a(-100, 100)
                      , s = Z.a(200, 500);
                    this.gameScene.tweens.add({
                        targets: e,
                        x: a,
                        angle: i,
                        duration: s,
                        ease: "Quad.easeInOut",
                        callbackScope: this,
                        onComplete: this.applyGravityAndRotation.bind(this, e)
                    })
                }
            }, {
                key: "myUpdate",
                value: function(e, t) {
                    this.timer -= t / 1e3,
                    this.timer <= 0 && (null != this.callbackMethod && this.callbackMethod(),
                    this.myOnDestroy())
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    te()(_()(t.prototype), "myOnDestroy", this).call(this);
                    for (var e = 0; e < this.confetti.length; e++)
                        this.confetti[e].destroy()
                }
            }]),
            t
        }(S.a)
          , ie = a(45)
          , se = a(4)
          , ne = a(46)
          , re = a(103)
          , oe = a(18)
          , le = function e(t) {
            if (s()(this, e),
            this.initialized = !1,
            T.a.log("ShowControls", b.a.currentMode, se.a.gameSettings.maxLevelUnlocked[b.a.currentMode]),
            (!(se.a.gameSettings.maxLevelUnlocked[b.a.currentMode] > 0) || T.a.alwaysShowControls) && !t.CrntLvl.isEditorLevel && null == b.a.customPack) {
                t.startLevelMessage.myOnDestroy(),
                t.startGame();
                var a = new Phaser.Geom.Rectangle(y.a.gameAreaMin.x,y.a.gameAreaMin.y,y.a.gameAreaSize.x,y.a.gameAreaSize.y / 2)
                  , i = t.add.graphics();
                i.fillStyle(0, .5),
                i.fillRectShape(a),
                S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, i);
                var n = t.add.bitmapText(y.a.gameWidth / 2, .1 * y.a.gameHeight, y.a.fontNames.MENU, "AVOID AND POP!", 36, 1);
                S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, n),
                n.originX = 0,
                n.x = y.a.gameWidth / 2 - n.width / 2;
                var r = .5 * y.a.gameWidth
                  , o = .3 * y.a.gameHeight;
                R.a.isMobile ? (n.y = .2 * y.a.gameHeight,
                b.a.currentMode == b.a.MODES.SINGLE && (y.a.isBT ? (t.players[1].myInput.spriteLeft.alpha = 1,
                t.players[1].myInput.spriteRight.alpha = 1,
                t.players[1].myInput.spriteShoot.alpha = 1) : (y.a.isBS2 || y.a.isBS3) && (t.players[1].myInput.shoot_joy.alpha = .75,
                t.players[1].myInput.move_area.alpha = .25,
                t.players[1].myInput.move_joy.alpha = 1))) : b.a.currentMode == b.a.MODES.SINGLE ? new M.a(t,r,o,y.a.spriteKey,"tut/tutorial_controls_p1.png",1,S.a.RENDER_DEPTH.UI) : b.a.currentMode == b.a.MODES.TWOP && (new M.a(t,r - 155,o,y.a.spriteKey,"tut/tutorial_controls_p1.png",1,S.a.RENDER_DEPTH.UI),
                new M.a(t,r + 150,o,y.a.spriteKey,"tut/tutorial_controls_p2.png",1,S.a.RENDER_DEPTH.UI)),
                this.initialized = !0
            }
        }
          , he = a(176)
          , _e = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "SaveScreenshot",
                value: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , i = y.a.gameAreaMin.x - R.a.cameraOffset.x
                      , s = y.a.gameAreaMin.y - R.a.cameraOffset.y
                      , n = y.a.gameAreaMax.x - y.a.gameAreaMin.x
                      , r = y.a.gameAreaMax.y - y.a.gameAreaMin.y
                      , o = "image/jpeg"
                      , l = e;
                    e.game.renderer.snapshotArea(i, s, n, r, (function(e) {
                        var i = "screenshot_" + se.a.gameSettings.levelEditor.lastLevelEdited;
                        l.textures.exists(i) && l.textures.remove(i);
                        for (var s = se.a.gameSettings.levelEditor.lastLevelEdited, n = 0; n < se.a.gameSettings.levelEditor.allLevels.length; n++)
                            if (se.a.gameSettings.levelEditor.allLevels[n].uniqueId == s && (null == se.a.gameSettings.levelEditor.allLevels[n].screenshot && !t || t)) {
                                se.a.gameSettings.levelEditor.allLevels[n].screenshot = e.src,
                                se.a.saveUserSettings(),
                                T.a.log("Saved the screenshot");
                                break
                            }
                        a && a()
                    }
                    ), o, .1)
                }
            }]),
            e
        }()
          , ce = a(27)
          , de = a(106)
          , ue = function() {
            function e(t, a) {
                s()(this, e),
                this.gameScene = t,
                this._callback = a
            }
            return r()(e, [{
                key: "showMenu",
                value: function() {
                    0 != ce.a.isUpgradeOK() ? (this.startReviveTimer = this.gameScene.time.now,
                    this.gameScene.setCanPlayerPause(!1),
                    this.background = new M.a(this.gameScene,-y.a.gameWidth,-y.a.gameHeight,y.a.spriteKey,"ui/black.png",1,S.a.RENDER_DEPTH.CONTINUE_MENU),
                    this.background.alpha = .35,
                    this.background.setDisplaySize(3 * y.a.gameWidth, 3 * y.a.gameHeight),
                    this.background.setDisplayOrigin(.5),
                    this.background.setInteractive(),
                    this.upgradeBtns = [],
                    this._showAvailableUpgrades()) : this._callback()
                }
            }, {
                key: "_showAvailableUpgrades",
                value: function() {
                    for (var e = .5 * y.a.gameWidth, t = .25 * y.a.gameHeight, a = 0, i = 0; i < ce.a.ITEMS.length; i++)
                        -1 != ce.a.getMaxLevelForItem(ce.a.ITEMS[i]) && a++;
                    var s = 115 * (a - 1)
                      , n = 0;
                    for (i = 0; i < ce.a.ITEMS.length; i++)
                        if (-1 != ce.a.getMaxLevelForItem(ce.a.ITEMS[i]) && !ce.a.ITEMS[i].passive) {
                            var r = e - s / 2 + 115 * n
                              , o = t
                              , l = new z.a(this.gameScene,r,o,90,90,{
                                icon: ce.a.ITEMS[i].icon,
                                iconSpriteKey: y.a.lazySpriteKey
                            },this._selectUpgrade.bind(this, ce.a.ITEMS[i], r, o, 2),null,null,!0,0 == n,"upgrade");
                            l.myIcon.scale = 2,
                            l.setDepthMyUIButton(S.a.RENDER_DEPTH.CONTINUE_MENU);
                            var h = new z.a(this.gameScene,r,o + 65,90,23,{
                                text: "PICK ALWAYS",
                                size: 14,
                                fixY: 2
                            },this.selectAlwaysPick.bind(this, i, ce.a.ITEMS[i], r, o, 2),null,null,!0,!1,"upgrade");
                            h.setDepthMyUIButton(S.a.RENDER_DEPTH.CONTINUE_MENU),
                            this.upgradeBtns.push(l, h),
                            n++
                        }
                    0 == n ? (this._clearMenuItems(),
                    this.callbackAfterUpgrade()) : 1 == n ? this.upgradeBtns[0].callbackClick() : (this.myText = this.gameScene.add.bitmapText(.5 * y.a.gameWidth, .1 * y.a.gameHeight, y.a.fontNames.MENU, "PICK UPGRADE:", 30),
                    this.myText.setOrigin(.5, .5),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.CONTINUE_MENU, this.myText))
                }
            }, {
                key: "selectAlwaysPick",
                value: function(e, t, a, i, s) {
                    for (var n = 0; n < se.a.gameSettings.levelPointsDistributed.length; n++)
                        if (n != e)
                            for (var r = 0; r < se.a.gameSettings.levelPointsDistributed[n].length; r++)
                                se.a.gameSettings.levelPointsDistributed[n][r] = 0;
                    this._selectUpgrade(t, a, i, s)
                }
            }, {
                key: "_selectUpgrade",
                value: function(e, t, a, i) {
                    T.a.log("MyUpgradeSelect", e);
                    for (var s = 0; s < this.upgradeBtns.length; s++)
                        this.upgradeBtns[s].buttonIsActive = !1,
                        this.upgradeBtns[s].setVisibleMyUIButton(!1);
                    this.gameScene.upgradeItem = e;
                    var n = ce.a.parseActivationTime(e, this.gameScene);
                    this.gameScene.timebar.applyUpgradeTime(n),
                    this.gameScene.upgradeItemSprite = this.gameScene.add.sprite(t, a, y.a.lazySpriteKey, e.icon);
                    var r = 0
                      , o = y.a.timebarP1.y + (y.a.timebarP2.y - y.a.timebarP1.y) / 2
                      , l = n / this.gameScene.timebar.timeInitial;
                    if (y.a.isBT ? r = y.a.timebarP1.x + (y.a.timebarP2.x - y.a.timebarP1.x) * l - this.gameScene.upgradeItemSprite.displayWidth / 2 : y.a.isBS2 ? r = y.a.timebarP1.x + (y.a.timebarP2.x - y.a.timebarP1.x) * (1 - l) + this.gameScene.upgradeItemSprite.displayWidth / 2 : y.a.isBS3 && (r = 423,
                    o = 464),
                    this.gameScene.upgradeItemSprite.scale = i,
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.CONTINUE_MENU, this.gameScene.upgradeItemSprite),
                    2 == this.upgradeBtns.length)
                        this.gameScene.upgradeItemSprite.scale = 1,
                        this.gameScene.upgradeItemSprite.x = r,
                        this.gameScene.upgradeItemSprite.y = o,
                        S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, this.gameScene.upgradeItemSprite),
                        this._clearMenuItems(),
                        this.callbackAfterUpgrade();
                    else {
                        var h = this;
                        this.gameScene.tweens.add({
                            targets: this.gameScene.upgradeItemSprite,
                            x: r,
                            y: o,
                            scale: 1,
                            duration: 250,
                            onComplete: function(e) {
                                S.a.mySpriteDepth(S.a.RENDER_DEPTH.UI, h.gameScene.upgradeItemSprite),
                                h._clearMenuItems(),
                                h.callbackAfterUpgrade()
                            }
                        })
                    }
                }
            }, {
                key: "_clearMenuItems",
                value: function() {
                    this.background.destroy();
                    for (var e = 0; e < this.upgradeBtns.length; e++)
                        this.upgradeBtns[e].destroyMyUIButton();
                    this.myText && this.myText.destroy(),
                    this.adblockerInfo && (this.adblockerInfo.destroy(),
                    this.black2.destroy())
                }
            }, {
                key: "callbackAfterUpgrade",
                value: function() {
                    if (null != this.gameScene.upgradeItem && 0 == this.gameScene.upgradeItem.passive) {
                        var e = JSON.parse(JSON.stringify(de.a.MSGS.UPGRADE_TIMEBAR_SHOW_FIRST));
                        e.uid = "upgrd__" + this.gameScene.upgradeItem.modType,
                        e.message = this.gameScene.upgradeItem.title + "\n" + this.gameScene.upgradeItem.activationDescr,
                        e.icon = this.gameScene.upgradeItem.icon,
                        e.highlightRect = new Phaser.Geom.Rectangle(this.gameScene.upgradeItemSprite.x - 13,this.gameScene.upgradeItemSprite.y - 13,26,26),
                        new de.a(this.gameScene,e,this._callback.bind(this))
                    } else
                        this._callback()
                }
            }]),
            e
        }()
          , pe = a(29)
          , me = function(e) {
            function t() {
                return s()(this, t),
                l()(this, _()(t).call(this, {
                    key: "GameScene"
                }))
            }
            return d()(t, e),
            r()(t, [{
                key: "create",
                value: function() {
                    if (S.a.myInitialize(),
                    this.CrntLvl = null,
                    y.a.isBS2 && null != se.a.gameSettings.levelEditor.lastLevelEdited) {
                        for (var e = 0; e < se.a.gameSettings.levelEditor.allLevels.length; e++)
                            se.a.gameSettings.levelEditor.allLevels[e].uniqueId == se.a.gameSettings.levelEditor.lastLevelEdited && (this.CrntLvl = se.a.gameSettings.levelEditor.allLevels[e].levelObj);
                        T.a.log("LOADED LVL", JSON.stringify(this.CrntLvl));
                        var t = b.a.MODES.SINGLE;
                        this.CrntLvl.players.length > 1 && (t = b.a.MODES.TWOP),
                        b.a.newGame(t, this.CrntLvl.backImageNum)
                    } else
                        this.CrntLvl = Object($.a)(b.a.currentMode, b.a.currentLevel);
                    this.ballManager = P.spawnBallManager(this, this.CrntLvl.ballInfo).myInit(),
                    this.itemManager = new w.a(this,this.CrntLvl),
                    this.myEventManager = new A.a(this),
                    this.phyEngine = new p.a(this).myInit(T.a.debugPhy),
                    this.players = [],
                    this.timebar = {},
                    this.myGUI = {},
                    this.lives = new N.a(this),
                    this.gameTime = 0,
                    this._isPaused = !0,
                    this._canPlayerPause = !1,
                    this.backBrickSprite = null,
                    this.gameAreaStroke = null,
                    this.backImage = null,
                    this.myCombo = null,
                    this.gamePauseButton = null,
                    this.pauseMenu = null,
                    this.myTransition = null,
                    this.startLevelSound = null,
                    this.startLevelMessage = null,
                    this.showControlsOnStart = null,
                    this.timeInLevel = 0,
                    this.upgradeItem = null,
                    this.upgradeItemSprite = null,
                    this.levelReceivedRevive = !1,
                    this.sys.events.once("shutdown", re.a.save),
                    this.myGameSceneInit()
                }
            }, {
                key: "init",
                value: function(e) {
                    this.passedAlongSceneData = e,
                    this.scene.settings.data = null
                }
            }, {
                key: "myGameSceneInit",
                value: function() {
                    var e = this;
                    if (Y.a.spawnBounds(this),
                    this._drawStageBackground(),
                    this._drawBackgroundImage(),
                    this.myCombo = new Q(this),
                    this.CrntLvl.players.forEach((function(t) {
                        if (y.a.isBT)
                            N.a.crntLives[t.id] > 0 && (e.players[t.id] = new u.a(e,t.id,new m.a(t.x,t.y)).myInit());
                        else {
                            var a = t.x
                              , i = t.y;
                            y.a.isBS3 && (i -= 1.5),
                            e.players[t.id] = new u.a(e,t.id,new m.a(a,i)).myInit()
                        }
                    }
                    )),
                    this.CrntLvl.balls.forEach((function(t) {
                        new g.a(e,t).myInit()
                    }
                    )),
                    this.CrntLvl.walls.forEach((function(t) {
                        Y.a.spawnWall(e, t)
                    }
                    )),
                    (y.a.isBS2 || y.a.isBS3) && this.itemManager._prepareDropBS2(this.CrntLvl),
                    this.gamePauseButton = new H(this),
                    this.pauseMenu = new J(this),
                    g.a.CreateTestBodies(this),
                    T.a.addMoreInfo) {
                        null != this.players[1] && (this.players[1].playerShield.ignoreBall = function() {
                            return !0
                        }
                        ),
                        null != this.players[2] && (this.players[2].playerShield.ignoreBall = function() {
                            return !0
                        }
                        );
                        var t = this;
                        this.input.keyboard.on("keydown", (function(e) {
                            if (e.keyCode === Phaser.Input.Keyboard.KeyCodes.T && (console.error("issued an all pop event"),
                            t.itemManager.addMod(v.a.ITEM_MANAGER.MOD_TYPE.MEDAL)),
                            e.keyCode === Phaser.Input.Keyboard.KeyCodes.I)
                                for (var a in console.error("issued an all list event"),
                                t.ballManager.activeBalls)
                                    for (var i in t.ballManager.activeBalls[a])
                                        console.log("Left ball", t.ballManager.activeBalls[a][i].ballColor, t.ballManager.activeBalls[a][i])
                        }
                        ))
                    }
                    this.timebar = new B(this).myInit(this.CrntLvl),
                    this.myGUI = new W(this).myInit(),
                    null != b.a.customPack && b.a.customPack.levels.length == b.a.currentLevel && (T.a.log("Final level for custom pack."),
                    this.CrntLvl.extra = he.a),
                    null != this.CrntLvl.extra && this.CrntLvl.extra(this),
                    this.myTransition = new ie.a(this);
                    var a = !0;
                    if (null != this.passedAlongSceneData && null != this.passedAlongSceneData.hideTransition && (a = !1),
                    a ? this.myTransition.transitionOpen() : this.myTransition.clearSlides(),
                    se.a.gameSettings.lastLevelPlayed[b.a.currentMode] = b.a.currentLevel,
                    se.a.saveUserSettings(),
                    X.a.showAd(this, X.a.PLACEMENTS.INTERSTITIAL, this._startTheLevel.bind(this)),
                    null != b.a.customPack) {
                        if ("Master Quest" == b.a.customPack.packName) {
                            for (var i = 51; i <= 105; i++)
                                this.load.image("back_lvl_" + i, "assets/bs2/packs/back_masterquest/back_" + i + ".jpg");
                            this.load.start()
                        } else if ("BS1 in BS2" == b.a.customPack.packName) {
                            for (i = 1; i <= 22; i++)
                                this.load.image("back_lvl_bs1inbs2_" + i, "assets/bs2/packs/back_bs1_in_bs2/back_" + i + ".jpg");
                            this.load.start()
                        } else if ("Impossible Quest" == b.a.customPack.packName)
                            for (i = 1; i <= 54; i++)
                                this.load.image("back_lvl_impossible_" + i, "assets/bs2/packs/back_impossiblequest/back_" + i + ".jpg");
                        this.load.start()
                    }
                }
            }, {
                key: "myPauseGame",
                value: function(e, t, a) {
                    T.a.warn("Pause." + e + ", already paused: " + this._isPaused + ", playerInitiated:" + t + ", reason:" + a),
                    e != this._isPaused && (t && !this._canPlayerPause || (this._isPaused = e,
                    S.a.doOnPause(this._isPaused),
                    t && !e ? (this.gamePauseButton.myButton.enableButton(),
                    this.pauseMenu.showPauseMenu(!1)) : t && e && (this.gamePauseButton.myButton.disableButton(),
                    this.pauseMenu.showPauseMenu(!0)),
                    t && se.a.saveUserSettings(),
                    oe.a.isPoki && (e ? PokiSDK.gameplayStop() : PokiSDK.gameplayStart())))
                }
            }, {
                key: "setCanPlayerPause",
                value: function(e) {
                    this._canPlayerPause = e,
                    e && this.gamePauseButton.myButton && this.gamePauseButton.myButton.enableButton()
                }
            }, {
                key: "startGame",
                value: function() {
                    T.a.log("STARTING GAME!"),
                    this.myPauseGame(!1, !1, t.PAUSE_REASONS.LEVEL_START),
                    this.setCanPlayerPause(!0),
                    this.myEventManager.dispatchEvent(A.a.EVENT_TYPE.GAME_START),
                    U.a.TaskReset(this, U.a.TASK_TYPE.BALL_WALL_EDGE, b.a.currentLevel, "left"),
                    U.a.TaskReset(this, U.a.TASK_TYPE.BALL_WALL_EDGE, b.a.currentLevel, "right"),
                    U.a.TaskReset(this, U.a.TASK_TYPE.COLLECT_ITEM_LVL, b.a.currentLevel),
                    U.a.TaskReset(this, U.a.TASK_TYPE.SHOT_ANY_WEAPON_ON_LVL, b.a.currentLevel),
                    U.a.TaskReset(this, U.a.TASK_TYPE.LEVEL_COMBOS, b.a.currentLevel),
                    pe.a.LogProgression(pe.a.EVENT.PROGRESSION.START, this.CrntLvl.isEditorLevel)
                }
            }, {
                key: "playerDied",
                value: function(e, a) {
                    this.myPauseGame(!0, !1, t.PAUSE_REASONS.DEATH),
                    this.myEventManager.dispatchEvent(A.a.EVENT_TYPE.PLAYER_DIED),
                    this.levelReceivedRevive || (pe.a.LogProgression(pe.a.EVENT.PROGRESSION.FAIL, this.CrntLvl.isEditorLevel),
                    pe.a.LogDeath(this.CrntLvl.isEditorLevel, a)),
                    U.a.TaskIncrement(this, U.a.TASK_TYPE.TOTAL_DEATHS, 1),
                    this.CrntLvl.isEditorLevel ? this._backToEditor() : 1 != this.lives.isGameOver(e, a) && this.playerDiedAnimation(e, a)
                }
            }, {
                key: "playerDiedAnimation",
                value: function(e, t) {
                    T.a.log("playerDiedAnimation", e, t),
                    X.a.adServer.preloadAds(),
                    !y.a.isBS2 && !y.a.isBS3 || t != u.a.DEATH_REASON.BALL ? this.restartStageAfterDying(t) : this.time.addEvent({
                        delay: 350,
                        callback: e.animatePlayerDeathBounce,
                        args: [null, null],
                        callbackScope: e
                    })
                }
            }, {
                key: "restartStageAfterDying",
                value: function(e) {
                    if (T.a.log("restartStageAfterDying", e),
                    !y.a.isBS2 && !y.a.isBS3 || (b.a.resetComboMeter(),
                    e == u.a.DEATH_REASON.TIMEBAR)) {
                        var t = I.a.MESSAGES.OUCH;
                        e == u.a.DEATH_REASON.TIMEBAR && (t = I.a.MESSAGES.OUT_OF_TIME),
                        new I.a(this,t,1.8,this.scene.restart.bind(this.scene, {
                            hideTransition: !0
                        })).myInit()
                    } else
                        this.scene.restart({
                            hideTransition: !0
                        })
                }
            }, {
                key: "levelComplete",
                value: function() {
                    if (this.myPauseGame(!0, !1, t.PAUSE_REASONS.LEVEL_COMPLETE),
                    L.a.playSound(this, L.a.SND.LEVEL_FINISHED_SUCCESS),
                    this.time.delayedCall(100, this.timebar.turnTimeToPoints, [], this.timebar),
                    this._tasksOnLevelCompleted(),
                    y.a.isBT)
                        new I.a(this,I.a.MESSAGES.LEVEL_COMPLETED,99).myInit();
                    else if (y.a.isBS2 || y.a.isBS3) {
                        for (var e in this.players)
                            this.players[e].playCharAnim(u.a.ANIMS.WIN),
                            this.players[e].playerShield && this.players[e].playerShield.shieldSprite && this.add.tween({
                                targets: this.players[e].playerShield.shieldSprite,
                                alpha: 0,
                                duration: 250
                            });
                        new ae(this),
                        this.CrntLvl.isEditorLevel && this._succesfullyFinishedEditorLevel()
                    }
                    X.a.adServer.preloadAds()
                }
            }, {
                key: "_tasksOnLevelCompleted",
                value: function() {
                    U.a.TaskUpdate(this, U.a.TASK_TYPE.LEVEL_COMPLETED, !0, b.a.currentLevel),
                    U.a.TaskUpdate(this, U.a.TASK_TYPE.TIME_LEFT, this.timebar.timeLeft, b.a.currentLevel),
                    this.players[1] && U.a.TaskUpdate(this, U.a.TASK_TYPE.DONT_MISS, this.players[1].shotManager.accuracyBonus, b.a.currentLevel),
                    U.a.TaskCheckAndNotify(this, U.a.TASK_TYPE.BALL_WALL_EDGE, b.a.currentLevel, "left"),
                    U.a.TaskCheckAndNotify(this, U.a.TASK_TYPE.BALL_WALL_EDGE, b.a.currentLevel, "right"),
                    U.a.TaskIncrement(this, U.a.TASK_TYPE.CONSECUTIVE_LEVELS, 1),
                    U.a.TaskCheckAndNotify(this, U.a.TASK_TYPE.SHOT_ANY_WEAPON_ON_LVL, b.a.currentLevel),
                    U.a.TaskCheckAndNotify(this, U.a.TASK_TYPE.LEVEL_COMBOS, b.a.currentLevel),
                    null != b.a.customPack && U.a.TaskUpdateIfCondition(this, U.a.TASK_TYPE.COMPLETE_PACK_LVLS, b.a.currentLevel, ">", b.a.customPack.packName),
                    this.CrntLvl.isEditorLevel && U.a.TaskUpdate(this, U.a.TASK_TYPE.CMPLT_EDITOR_LVL, !0),
                    pe.a.LogProgression(pe.a.EVENT.PROGRESSION.COMPLETE, this.CrntLvl.isEditorLevel)
                }
            }, {
                key: "_levelCompleteTimebarAdded",
                value: function(e) {
                    this.saveLeveUnlocklProgress(),
                    this.saveBestLevelScore(),
                    this.time.addEvent({
                        delay: e,
                        callback: this._shareOrStartNextLevel,
                        callbackScope: this
                    })
                }
            }, {
                key: "_shareOrStartNextLevel",
                value: function() {
                    0 == D.a.ShareSceneButtonReserveShare() && this._startNextLevel()
                }
            }, {
                key: "_startNextLevel",
                value: function() {
                    T.a.warn("_startNextLevel", "Increment level & load game scene. cnrtLvl:", b.a.currentLevel),
                    this.CrntLvl.isEditorLevel ? this._backToEditor() : (b.a.currentLevel++,
                    null != Object($.a)(b.a.currentMode, b.a.currentLevel) ? this.scene.restart({
                        hideTransition: !0
                    }) : T.a.log("NO MORE LEVELS. GAME END."))
                }
            }, {
                key: "preUpdate",
                value: function(e, t) {
                    S.a.doPreUpdate(e, t)
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this.gameTime = e,
                    this.phyEngine.engineLoop(e),
                    S.a.doUpdate(e, t),
                    this._isPaused || (this.timeInLevel += t)
                }
            }, {
                key: "_drawStageBackground",
                value: function() {
                    this.backBrickSprite = new ne.a(this),
                    this.backBrickSprite.setTileScale(y.a.spriteScale),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIBACK, this.backBrickSprite),
                    y.a.isBS3 && (this.backBrickSprite.backEdgeLeft && (S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIBACK, this.backBrickSprite.backEdgeLeft),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIBACK, this.backBrickSprite.backEdgeRight)),
                    this.backBrickSprite2 = new M.a(this,y.a.gameWidth / 2,y.a.gameHeight / 2,"game_interface",null,1,S.a.RENDER_DEPTH.UI)),
                    this._backBrickMask = this.add.graphics(),
                    this._backBrickMask.fillRect(-y.a.gameWidth, -y.a.gameHeight, 3 * y.a.gameWidth, y.a.gameHeight + y.a.gameAreaMin.y),
                    this._backBrickMask.fillRect(-y.a.gameWidth, y.a.gameAreaMax.y, 3 * y.a.gameWidth, y.a.gameHeight),
                    this._backBrickMask.fillRect(-y.a.gameWidth, -y.a.gameHeight, y.a.gameWidth + y.a.gameAreaMin.x, 3 * y.a.gameHeight),
                    this._backBrickMask.fillRect(y.a.gameAreaMax.x, -y.a.gameHeight, y.a.gameWidth, 3 * y.a.gameHeight);
                    var e = this._backBrickMask.createGeometryMask();
                    this.backBrickSprite.setMask(e),
                    this.backBrickSprite2 && this.backBrickSprite2.setMask(e);
                    var t = 1;
                    y.a.isBS3 && (t = 0),
                    this.gameAreaStroke = this.add.graphics(),
                    this.gameAreaStroke.clear(),
                    this.gameAreaStroke.lineStyle(1, y.a.gameUIAreaStroke, 1),
                    this.gameAreaStroke.strokeRect(y.a.gameAreaMin.x - t, y.a.gameAreaMin.y - t, y.a.gameAreaMax.x - y.a.gameAreaMin.x + 2 * t, y.a.gameAreaMax.y - y.a.gameAreaMin.y + 2 * t),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UIBACK, this.gameAreaStroke)
                }
            }, {
                key: "_drawBackgroundImage",
                value: function() {
                    var e = y.a.gameAreaMin.x + (y.a.gameAreaMax.x - y.a.gameAreaMin.x) / 2
                      , t = y.a.gameAreaMin.y + (y.a.gameAreaMax.y - y.a.gameAreaMin.y) / 2;
                    null != this.CrntLvl.offsetBackground && (e += this.CrntLvl.offsetBackground.x,
                    t += this.CrntLvl.offsetBackground.y);
                    var a = "back_lvl_" + b.a.currentLevel;
                    if (b.a.currentLevel > 50 && (a = "back_lvl_" + (b.a.currentLevel - 35)),
                    b.a.currentLevel > 85 && (a = "back_lvl_" + (b.a.currentLevel - 35) % 50 + 1),
                    null != b.a.customPack && ("Master Quest" == b.a.customPack.packName ? a = "back_lvl_" + b.a.currentLevel : "BS1 in BS2" == b.a.customPack.packName ? a = "back_lvl_bs1inbs2_" + b.a.currentLevel : "Impossible Quest" == b.a.customPack.packName && (a = "back_lvl_impossible_" + b.a.currentLevel)),
                    this.textures.exists(a) || (a = "back_lvl_1"),
                    this.backImage = this.add.image(e, t, a),
                    S.a.mySpriteDepth(S.a.RENDER_DEPTH.UNDER_GAME, this.backImage),
                    y.a.isBS3) {
                        var i = this.add.graphics();
                        i.fillStyle(0, .5),
                        i.fillRect(-1e4, -1e4, 3e4, 3e4),
                        S.a.mySpriteDepth(S.a.RENDER_DEPTH.UNDER_GAME, i)
                    }
                }
            }, {
                key: "_startTheLevel",
                value: function() {
                    this.gamePauseButton.myButton.image_back.visible = !1,
                    this.gamePauseButton.myButton.image_front.visible = !1,
                    se.a.gameSettings.levelEditor && null != se.a.gameSettings.levelEditor.lastLevelEdited ? _e.SaveScreenshot(this, !0, this._checkUpgrade.bind(this)) : this._checkUpgrade()
                }
            }, {
                key: "_checkUpgrade",
                value: function() {
                    O.a.isLazyLoaded ? new ue(this,this._startTheLevel2.bind(this)).showMenu() : this._startTheLevel2()
                }
            }, {
                key: "_startTheLevel2",
                value: function() {
                    this.gamePauseButton.myButton.image_back.visible = !0,
                    this.gamePauseButton.myButton.image_front.visible = !0,
                    this.startLevelSound = L.a.playSound(this, L.a.SND.LEVEL_START);
                    var e = "LEVEL " + b.a.currentLevel;
                    this.CrntLvl.isEditorLevel && (e = I.a.MESSAGES.GET_READY),
                    this.startLevelMessage = new I.a(this,e,1.2,this.startGame.bind(this)).myInit(),
                    this.myEventManager.dispatchEvent(A.a.EVENT_TYPE.GAME_LOADED),
                    this.showControlsOnStart = new le(this)
                }
            }, {
                key: "_backToEditor",
                value: function() {
                    oe.a.isPoki && PokiSDK.gameplayStop(),
                    this.scene.start("LevelEditorScene")
                }
            }, {
                key: "_succesfullyFinishedEditorLevel",
                value: function() {
                    for (var e = se.a.gameSettings.levelEditor.lastLevelEdited, t = 0; t < se.a.gameSettings.levelEditor.allLevels.length; t++)
                        if (se.a.gameSettings.levelEditor.allLevels[t].uniqueId == e) {
                            se.a.gameSettings.levelEditor.allLevels[t].levelObj.finishedSuccesfully = !0,
                            se.a.saveUserSettings();
                            break
                        }
                }
            }, {
                key: "saveLeveUnlocklProgress",
                value: function() {
                    var e = b.a.currentLevel + 1;
                    null != b.a.customPack ? se.a.gameSettings.playedPackInfo[b.a.customPackKey] < e && (se.a.gameSettings.playedPackInfo[b.a.customPackKey] = e,
                    se.a.saveUserSettings()) : se.a.gameSettings.maxLevelUnlocked[b.a.currentMode] < e && (se.a.gameSettings.maxLevelUnlocked[b.a.currentMode] = e,
                    se.a.saveUserSettings())
                }
            }, {
                key: "saveBestLevelScore",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (T.a.log("Attempting saveBestLevelScore with waitTime ", t),
                    b.a.currentMode == b.a.MODES.SINGLE && null == b.a.customPack && !this.CrntLvl.isEditorLevel) {
                        var a = se.a.gameSettings.bestScorePerLevel[b.a.currentLevel] || 0;
                        if (b.a.scores[1] > a && (T.a.log("New best score of ", b.a.scores[1], " for level ", b.a.currentLevel),
                        se.a.gameSettings.bestScorePerLevel[b.a.currentLevel] = b.a.scores[1],
                        O.a.isLazyLoaded && null == b.a.customPack)) {
                            var i = "sharescore/bubble_highscore_L.psd";
                            this.players[1].pos.x > y.a.gameWidth / 2 && (i = "sharescore/bubble_highscore_R.psd");
                            var s = new M.a(this,this.players[1].pos.x,this.players[1].pos.y,y.a.lazySpriteKey,i,1,S.a.RENDER_DEPTH.UIOVER);
                            this.tweens.add({
                                targets: s,
                                angle: {
                                    from: -1,
                                    to: 1
                                },
                                duration: 350,
                                yoyo: !0,
                                repeat: -1,
                                ease: "Sine.easeInOut"
                            })
                        }
                    }
                }
            }, {
                key: "isGamePaused",
                get: function() {
                    return this._isPaused
                }
            }]),
            t
        }(Phaser.Scene);
        me.PAUSE_REASONS = {
            DEATH: "death",
            BUTTON: "button",
            KEYBOARD: "keyboard",
            FOR_SCREENSHOT: "screenshot",
            LEVEL_MESSAGE: "lvl_message",
            LEVEL_START: "lvl_start",
            LEVEL_COMPLETE: "lvl_complete",
            REVIVED: "revived"
        };
        var ye = t.a = me
    },
    70: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return m
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = a(0)
          , _ = a(21)
          , c = (a(1),
        a(2))
          , d = (a(9),
        a(29))
          , u = a(4)
          , p = a(25)
          , m = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "init",
                value: function(t) {
                    h.a.isBS2 || h.a.isBS3 || (h.a.isBT && (e.SKINS = e.SKINS_BT1,
                    "" == u.a.gameSettings.selectedSkinID && (u.a.gameSettings.selectedSkinID = e._SKIN_ID_DEFAULT),
                    e.unlockSkinByID(e._SKIN_ID_DEFAULT),
                    e.unlockSkinByID(e._SKIN_ID_COMINGSOON),
                    0 == u.a.gameSettings.skinsNewViewed.length && u.a.gameSettings.skinsNewViewed.push(e._SKIN_ID_DEFAULT, e._SKIN_ID_COMINGSOON),
                    0 == u.a.gameSettings.skinsUnlockedUsed.length && u.a.gameSettings.skinsUnlockedUsed.push(e._SKIN_ID_DEFAULT, e._SKIN_ID_COMINGSOON)),
                    t.load.multiatlas(u.a.gameSettings.selectedSkinID, e.CURRENT.spriteJSON, e.CURRENT.spriteLocation),
                    c.a.log("SKINS", "Initializing:", h.a))
                }
            }, {
                key: "renderButton",
                value: function(t, a, i, s) {
                    var n = 80 * s
                      , r = 80 * s;
                    new _.a(t,a,i,n,r,{
                        icon: "skins/select_skin_button.psd",
                        iconSpriteKey: h.a.lazySpriteKey
                    },e.clickedOpenMySkins.bind(t, t)).myIcon.setScale(s),
                    e.checkIfPlayerRankUnlocksSkins();
                    var o = e.countNewUnlockedSkins()
                      , l = e.countNewSkins();
                    if (o > 0) {
                        var c = 13904693;
                        h.a.isBS3 && (c = 458987);
                        var d = 14475529
                          , u = 4
                          , p = 15
                          , m = -n / 2
                          , y = -r / 2
                          , g = 15
                          , S = -2
                          , E = 1;
                        (T = t.add.graphics()).fillStyle(c, 1),
                        T.lineStyle(u, d, 1),
                        T.fillCircle(0, 0, p),
                        T.strokeCircle(0, 0, p),
                        (v = t.add.bitmapText(S, E, h.a.lazyFontNames.RETENTION_XP, o, g)).setOrigin(.5, .5);
                        var f = t.add.container(a + m, i + y);
                        f.add([T, v]),
                        t.add.tween({
                            targets: f,
                            scale: 1.21,
                            duration: 230,
                            loop: -1,
                            yoyo: !0
                        })
                    }
                    if (l > 0) {
                        c = 13904693;
                        h.a.isBS3 && (c = 458987);
                        var T, v;
                        d = 14475529,
                        u = 4,
                        p = 15,
                        m = n / 2,
                        y = -r / 2,
                        g = 15,
                        S = 0,
                        E = 1;
                        (T = t.add.graphics()).fillStyle(c, 1),
                        T.lineStyle(u, d, 1),
                        T.fillRect(-p, -p, 2 * p, 2 * p),
                        T.strokeRect(-p, -p, 2 * p, 2 * p),
                        (v = t.add.bitmapText(S, E, h.a.fontNames.MENU, "NEW", g)).setOrigin(.5, .5);
                        var b = t.add.container(a + m, i + y);
                        b.add([T, v]),
                        t.add.tween({
                            targets: b,
                            scale: 1.21,
                            duration: 230,
                            loop: -1,
                            yoyo: !0
                        })
                    }
                }
            }, {
                key: "checkIfPlayerRankUnlocksSkins",
                value: function() {
                    for (var t in e.SKINS) {
                        var a = e.SKINS[t];
                        null != a.unlockRank && p.a.CurrentLevel >= a.unlockRank && (u.a.gameSettings.skinsUnlocked.includes(a.skinID) || u.a.gameSettings.skinsUnlocked.push(a.skinID))
                    }
                }
            }, {
                key: "countNewUnlockedSkins",
                value: function() {
                    return u.a.gameSettings.skinsUnlocked.length - u.a.gameSettings.skinsUnlockedUsed.length
                }
            }, {
                key: "countNewSkins",
                value: function() {
                    return e.SKINS.length - u.a.gameSettings.skinsNewViewed.length
                }
            }, {
                key: "unlockSkinByID",
                value: function(e) {
                    u.a.gameSettings.skinsUnlocked.includes(e) || u.a.gameSettings.skinsUnlocked.push(e)
                }
            }, {
                key: "clickedOpenMySkins",
                value: function(e) {
                    d.a.LogClick(d.a.CLICK_TYPE.MYSKINS),
                    e.myTransition.transitionToggle(!1, "MySkinsScene")
                }
            }, {
                key: "createSkinAnimations",
                value: function(t) {
                    e._getCharAnimations().forEach((function(e) {
                        t.anims.create(e)
                    }
                    ))
                }
            }, {
                key: "_getCharAnimations",
                value: function() {
                    var e = u.a.gameSettings.selectedSkinID
                      , t = {
                        walk: [{
                            key: e,
                            frame: "char/walk_1.png"
                        }, {
                            key: e,
                            frame: "char/walk_2.png"
                        }, {
                            key: e,
                            frame: "char/walk_3.png"
                        }, {
                            key: e,
                            frame: "char/walk_4.png"
                        }, {
                            key: e,
                            frame: "char/walk_3.png"
                        }, {
                            key: e,
                            frame: "char/walk_2.png"
                        }],
                        walk_space: [{
                            key: e,
                            frame: "char/walk_space_1.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_2.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_3.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_4.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_3.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_2.png"
                        }],
                        idle: [{
                            key: e,
                            frame: "char/idle.png"
                        }],
                        idle_space: [{
                            key: e,
                            frame: "char/idle_space.png"
                        }],
                        shoot: [{
                            key: e,
                            frame: "char/idle.png"
                        }],
                        shoot_space: [{
                            key: e,
                            frame: "char/idle_space.png"
                        }],
                        walk_p2: [{
                            key: e,
                            frame: "char/walk_1_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_2_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_3_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_4_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_3_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_2_p2.png"
                        }],
                        walk_space_p2: [{
                            key: e,
                            frame: "char/walk_space_1_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_2_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_3_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_4_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_3_p2.png"
                        }, {
                            key: e,
                            frame: "char/walk_space_2_p2.png"
                        }],
                        idle_p2: [{
                            key: e,
                            frame: "char/idle_p2.png"
                        }],
                        idle_space_p2: [{
                            key: e,
                            frame: "char/idle_space_p2.png"
                        }],
                        shoot_p2: [{
                            key: e,
                            frame: "char/idle_p2.png"
                        }],
                        shoot_space_p2: [{
                            key: e,
                            frame: "char/idle_space_p2.png"
                        }]
                    };
                    return [{
                        key: "walk",
                        frames: t.walk,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "idle",
                        frames: t.idle,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "walk_space",
                        frames: t.walk_space,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "idle_space",
                        frames: t.idle_space,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "walk_p2",
                        frames: t.walk_p2,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "idle_p2",
                        frames: t.idle_p2,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "walk_space_p2",
                        frames: t.walk_space_p2,
                        frameRate: 10,
                        repeat: -1
                    }, {
                        key: "idle_space_p2",
                        frames: t.idle_space_p2,
                        frameRate: 10,
                        repeat: -1
                    }]
                }
            }, {
                key: "CURRENT",
                get: function() {
                    for (var t in e.SKINS)
                        if (e.SKINS[t].skinID == u.a.gameSettings.selectedSkinID)
                            return e.SKINS[t]
                }
            }]),
            e
        }();
        l()(m, "SKINS", []),
        l()(m, "_SKIN_ID_DEFAULT", "skin_default"),
        l()(m, "_SKIN_ID_COMINGSOON", "skin_comingsoon"),
        l()(m, "SKINS_BT1", [{
            skinID: m._SKIN_ID_DEFAULT,
            spriteJSON: "assets/bt1/skins/bt1_skin_default.json",
            spriteLocation: "assets/bt1/skins"
        }, {
            skinID: "fakeangel",
            spriteJSON: "assets/bt1/skins/bt1_skin_angel.json",
            spriteLocation: "assets/bt1/skins",
            unlockDescription: "Achieve " + p.a.RANK_NAMES[1] + " RANK to unlock this skin",
            unlockRank: 1
        }, {
            skinID: m._SKIN_ID_COMINGSOON
        }])
    },
    73: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "default", (function() {
            return n
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = function e() {
            s()(this, e)
        }
    },
    74: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(0)
          , p = a(3)
          , m = (a(69),
        a(1))
          , y = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                (a = l()(this, _()(t).call(this, e))).modType = m.a.ITEM_MANAGER.MOD_TYPE.NONE,
                a.modTime = 0,
                a.infoTxt_left = a.infoTxt_mid = a.infoTxt_right = a.infoTxt_desc = null,
                a
            }
            return d()(t, e),
            r()(t, [{
                key: "myUpdate",
                value: function(e, t) {
                    this.gameScene.isGamePaused || (this.modTime -= t / 1e3,
                    this.modTime <= 0 && (this.modExpired(),
                    this._removeMod()))
                }
            }, {
                key: "modExpired",
                value: function() {}
            }, {
                key: "modAddExisting",
                value: function() {}
            }, {
                key: "_removeMod",
                value: function() {
                    null != this.infoTxt_left && this.infoTxt_left.destroy(),
                    null != this.infoTxt_mid && this.infoTxt_mid.destroy(),
                    null != this.infoTxt_right && this.infoTxt_right.destroy(),
                    null != this.infoTxt_desc && this.infoTxt_desc.destroy(),
                    this.gameScene.itemManager.removeMod(this.modType),
                    this.myOnDestroy()
                }
            }, {
                key: "_formatCountdownTime",
                value: function(e) {
                    if (!u.a.isBT) {
                        if (null == this.infoTxt_left) {
                            var t = 100
                              , a = "[SLOW]"
                              , i = u.a.fontNames.SLO_MO;
                            this.modType == m.a.ITEM_MANAGER.MOD_TYPE.FREEZE && (t = 230,
                            a = "[FREEZE]",
                            i = u.a.fontNames.FREEZE),
                            this.infoTxt_left = this.gameScene.add.bitmapText(u.a.gameWidth / 2, t, i, "0", 100),
                            this.infoTxt_mid = this.gameScene.add.bitmapText(u.a.gameWidth / 2, t, i, "0", 100),
                            this.infoTxt_right = this.gameScene.add.bitmapText(u.a.gameWidth / 2, t, i, "0", 100),
                            this.infoTxt_desc = this.gameScene.add.bitmapText(u.a.gameWidth / 2, this.infoTxt_right.y + 45, i, a, 45),
                            p.a.mySpriteDepth(p.a.RENDER_DEPTH.UNDER_GAME, this.infoTxt_left),
                            p.a.mySpriteDepth(p.a.RENDER_DEPTH.UNDER_GAME, this.infoTxt_mid),
                            p.a.mySpriteDepth(p.a.RENDER_DEPTH.UNDER_GAME, this.infoTxt_right),
                            p.a.mySpriteDepth(p.a.RENDER_DEPTH.UNDER_GAME, this.infoTxt_desc),
                            this.infoTxt_left.setOrigin(1, .5),
                            this.infoTxt_mid.setOrigin(.5, .5),
                            this.infoTxt_right.setOrigin(0, .5),
                            this.infoTxt_desc.setOrigin(.5, .5),
                            this.infoTxt_mid.text = ":",
                            this.infoTxt_left.x -= this.infoTxt_mid.width / 2,
                            this.infoTxt_right.x += this.infoTxt_mid.width / 2,
                            this._formatCountdownResetAlpha()
                        }
                        var s = e % 1
                          , n = Math.floor(e);
                        0 == n && (this.infoTxt_left.alpha = s,
                        this.infoTxt_mid.alpha = s,
                        this.infoTxt_right.alpha = s,
                        this.infoTxt_desc.alpha = .25 * s),
                        n < 10 && (n = "0" + n),
                        1 == (s = s.toString().substr(2, 2)).length && (s = "0" + s),
                        this.infoTxt_left.text = n,
                        this.infoTxt_right.text = s
                    }
                }
            }, {
                key: "_formatCountdownResetAlpha",
                value: function() {
                    null != this.infoTxt_left && (this.infoTxt_left.alpha = .7,
                    this.infoTxt_mid.alpha = .7,
                    this.infoTxt_right.alpha = .7,
                    this.infoTxt_desc.alpha = .25)
                }
            }]),
            t
        }(p.a);
        t.a = y
    },
    75: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = (a(43),
        a(67),
        a(12))
          , p = a(0)
          , m = a(3)
          , y = a(8)
          , g = a(20)
          , S = a(13)
          , E = a(27)
          , f = a(1)
          , T = a(2)
          , v = function(e) {
            function t(e) {
                var a;
                return s()(this, t),
                (a = l()(this, _()(t).call(this, e.gameScene))).player = e,
                a._shieldType = t.SHIELD_TYPES.NONE,
                a._shieldState = t._SHIELD_STATE.INACTIVE,
                a.INVINCIBILITY_TIME = 8 - p.a.shieldDissappearTime,
                a._shield_timer = 0,
                a.shieldSprite = null,
                a.shieldTween = null,
                a._shieldDissappearTime = 0,
                a.firstShieldFrame = "shield/plain.png",
                a
            }
            return d()(t, e),
            r()(t, [{
                key: "myInit",
                value: function() {
                    return this.myRenderDepth = m.a.RENDER_DEPTH.UNDER_GAME,
                    this
                }
            }, {
                key: "addShield",
                value: function(e) {
                    if (p.a.isBS3) {
                        var a;
                        a = E.a.getPassiveItemValue(f.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK),
                        this.INVINCIBILITY_TIME = 8 - p.a.shieldDissappearTime + a,
                        e == t.SHIELD_TYPES.INVINCIBLE && E.a.getPassiveItemValue(f.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK) > 0 && (e = t.SHIELD_TYPES.TANK,
                        this._shield_timer = this.INVINCIBILITY_TIME,
                        S.a.TaskIncrement(this.gameScene, S.a.TASK_TYPE.USE_UPGRADE, 1, f.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK))
                    }
                    if (!p.a.isBS3 || e != t.SHIELD_TYPES.INVINCIBLE && e != t.SHIELD_TYPES.TANK ? e != t.SHIELD_TYPES.TANK && u.a.playSound(this.player.gameScene, u.a.SND.SHIELD_ON) : u.a.playSound(this.player.gameScene, u.a.SND.SHIELD_ON_2),
                    this._shieldType != t.SHIELD_TYPES.NONE)
                        if (e == t.SHIELD_TYPES.PLAIN) {
                            if (this._shieldState == t._SHIELD_STATE.ACTIVE)
                                return
                        } else if (e == t.SHIELD_TYPES.INVINCIBLE && this._shieldType == t.SHIELD_TYPES.TANK && this._shieldState != t._SHIELD_STATE.DISSAPEARING)
                            return;
                    if (e == t.SHIELD_TYPES.INVINCIBLE && (this._shield_timer = this.INVINCIBILITY_TIME),
                    p.a.isBS2 && e == t.SHIELD_TYPES.TANK) {
                        this._shield_timer = -1;
                        for (var i = 0; i <= E.a.ITEMS.length; i++)
                            if (E.a.ITEMS[i].modType == f.a.ITEM_MANAGER.MOD_TYPE.UPGRADE_TANK) {
                                var s = E.a.getMaxLevelForItem(E.a.ITEMS[i]);
                                this._shield_timer = E.a.ITEMS[i].upgradeVal[s] - p.a.shieldDissappearTime;
                                break
                            }
                    }
                    null != this.shieldSprite && this.shieldSprite.destroy(),
                    this.shieldSprite = new y.a(this.player.gameScene,this.player.pos.x,this.player.pos.y,p.a.spriteKey,"shield/plain.png",1,this.myRenderDepth),
                    this.shieldSprite.alpha = 1,
                    p.a.isBS3 || null != this.shieldTween && (this.shieldTween.stop(),
                    this.shieldTween = null,
                    this.shieldSprite.setCrop(0, 0, this.shieldSprite.width, this.shieldSprite.height)),
                    e == t.SHIELD_TYPES.PLAIN ? this.shieldSprite.setFrame("shield/plain.png") : e == t.SHIELD_TYPES.INVINCIBLE ? this.shieldSprite.setFrame("shield/inv.png") : e == t.SHIELD_TYPES.TANK ? p.a.isBS2 ? this.shieldSprite.setFrame("shield/tank.psd") : p.a.isBS3 && this.shieldSprite.setFrame("shield/el.png") : T.a.error("Dont know how to draw this shield!" + e),
                    p.a.isBS3 ? g.a.isLazyLoaded && (e == t.SHIELD_TYPES.PLAIN ? this.shieldSprite.anims.play("shield_plain") : e == t.SHIELD_TYPES.INVINCIBLE ? this.shieldSprite.anims.play("shield_inv") : e == t.SHIELD_TYPES.TANK && this.shieldSprite.anims.play("shield_el")) : (this.shieldSprite.setCrop(0, 0, this.shieldSprite.width, 1),
                    this.shieldTween = this.player.gameScene.add.tween({
                        targets: this.shieldSprite,
                        alpha: 1,
                        ease: "Linear",
                        onUpdate: function(e) {
                            this.shieldSprite.setCrop(0, 0, this.shieldSprite.width, this.shieldSprite.height * e.totalProgress)
                        },
                        onComplete: function() {
                            this.shieldSprite.setCrop()
                        },
                        onUpdateScope: this,
                        onCompleteScope: this,
                        duration: 200
                    })),
                    this._shieldType = e,
                    this._shieldState = t._SHIELD_STATE.ACTIVE
                }
            }, {
                key: "_removeShield",
                value: function() {
                    this._shieldType == t.SHIELD_TYPES.PLAIN ? S.a.TaskIncrement(this.gameScene, S.a.TASK_TYPE.LOSE_SHIELD_PLAIN, 1) : this._shieldType == t.SHIELD_TYPES.INVINCIBLE && S.a.TaskIncrement(this.gameScene, S.a.TASK_TYPE.LOSE_SHIELD_INVINCIBLE, 1),
                    this._shieldState = t._SHIELD_STATE.DISSAPEARING,
                    this._shieldDissappearTime = p.a.shieldDissappearTime
                }
            }, {
                key: "ignoreBall",
                value: function(e) {
                    return this._shieldType != t.SHIELD_TYPES.NONE && (this._shieldType == t.SHIELD_TYPES.TANK ? (e._isMetal || e._isWarp || e.popBall({
                        reason: f.a.POP_REASON.SHIELD_TANK,
                        player: this.player
                    }),
                    !0) : this._shieldType == t.SHIELD_TYPES.INVINCIBLE || (this._shieldType == t.SHIELD_TYPES.PLAIN ? (this._shieldState == t._SHIELD_STATE.ACTIVE && ((p.a.isBS2 || p.a.isBS3) && 0 == e._isMetal && e.popBall({
                        reason: f.a.POP_REASON.SHIELD_PLAIN,
                        player: this.player,
                        obj: {}
                    }),
                    this._removeShield()),
                    !0) : void 0))
                }
            }, {
                key: "myUpdate",
                value: function(e, a) {
                    this.gameScene.isGamePaused || null != this.shieldSprite && (this.shieldSprite.x = this.player.pos.x,
                    this.shieldSprite.y = this.player.pos.y,
                    this._shieldState != t._SHIELD_STATE.ACTIVE || this._shieldType != t.SHIELD_TYPES.INVINCIBLE && this._shieldType != t.SHIELD_TYPES.TANK || (this._shield_timer -= a / 1e3,
                    this._shield_timer <= 0 && this._removeShield()),
                    this._shieldState == t._SHIELD_STATE.DISSAPEARING && (this._shieldDissappearTime -= a / 1e3,
                    this.shieldSprite.alpha = this._shieldDissappearTime % 1,
                    this._shieldDissappearTime <= 0 && (this._shieldType = t.SHIELD_TYPES.NONE,
                    this._shieldState = t._SHIELD_STATE.INACTIVE,
                    this.shieldSprite.destroy())))
                }
            }]),
            t
        }(m.a);
        v.SHIELD_TYPES = {
            NONE: "none",
            REMOVING: "removing",
            PLAIN: "plain",
            INVINCIBLE: "invi",
            TANK: "tank"
        },
        v._SHIELD_STATE = {
            ACTIVE: "active",
            INACTIVE: "inactive",
            DISSAPEARING: "dissapearing"
        },
        t.a = v
    },
    76: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(19)
          , _ = a.n(h)
          , c = a(7)
          , d = a.n(c)
          , u = a(11)
          , p = a.n(u)
          , m = a(3)
          , y = a(16)
          , g = a(1)
          , S = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "CollisionVsAABB",
                value: function(t, a, i, s) {
                    var n = t.pos.x - a.pos.x
                      , r = t.sizeHalf.x + a.sizeHalf.x - Math.abs(n);
                    if (r > 0) {
                        var o = t.pos.y - a.pos.y
                          , l = t.sizeHalf.y + a.sizeHalf.y - Math.abs(o);
                        if (l > 0) {
                            var h = 0
                              , _ = 0;
                            return n < -a.sizeHalf.x ? h = -1 : n > a.sizeHalf.x && (h = 1),
                            o < -a.sizeHalf.y ? _ = -1 : o > a.sizeHalf.y && (_ = 1),
                            0 === h ? e._solveCollision(t, a, 0, l * _, 0, _, i, s) : 0 === _ || Math.abs(r) < Math.abs(l) ? e._solveCollision(t, a, r * h, 0, h, 0, i, s) : e._solveCollision(t, a, 0, l * _, 0, _, i, s),
                            !0
                        }
                    }
                    return !1
                }
            }, {
                key: "_solveCollision",
                value: function(t, a, i, s, n, r, o, l) {
                    var h = a;
                    h == l && (h = t),
                    0 === s ? n < 0 ? e.EdgeAABBRight(t, a, i, s, o, l, h) : e.EdgeAABBLeft(t, a, i, s, o, l, h) : 0 === i && (r < 0 ? e.EdgeAABBBottom(t, a, i, s, o, l, h) : e.EdgeAABBTop(t, a, i, s, o, l, h))
                }
            }, {
                key: "EdgeAABBLeft",
                value: function(e, t, a, i, s, n, r) {
                    !0 !== n.collideEdge(g.a.PHY.COL_EDGE.LEFT, e, t, a, i, s, n, r) && (e.pos.x += a)
                }
            }, {
                key: "EdgeAABBRight",
                value: function(e, t, a, i, s, n, r) {
                    !0 !== n.collideEdge(g.a.PHY.COL_EDGE.RIGHT, e, t, a, i, s, n, r) && (e.pos.x += a)
                }
            }, {
                key: "EdgeAABBTop",
                value: function(e, t, a, i, s, n, r) {
                    !0 !== n.collideEdge(g.a.PHY.COL_EDGE.TOP, e, t, a, i, s, n, r) && (e.pos.y += i)
                }
            }, {
                key: "EdgeAABBBottom",
                value: function(e, t, a, i, s, n, r) {
                    !0 !== n.collideEdge(g.a.PHY.COL_EDGE.BOTTOM, e, t, a, i, s, n, r) && (e.pos.y += i)
                }
            }]),
            e
        }()
          , E = a(81)
          , f = a(52)
          , T = function() {
            function e(t) {
                s()(this, e),
                this.pBody = t,
                this.doColl = {},
                this.doColl[f.a.AABB] = {},
                this.doColl[f.a.AABB][f.a.AABB] = S.CollisionVsAABB,
                this.doColl[f.a.AABB][f.a.CIRCLE] = e._AABBVsCircle,
                this.doColl[f.a.CIRCLE] = {},
                this.doColl[f.a.CIRCLE][f.a.AABB] = E.a.CollisionVsAABB
            }
            return r()(e, null, [{
                key: "_AABBVsCircle",
                value: function(e, t, a, i) {
                    return E.a.CollisionVsAABB(t, e, a, i)
                }
            }]),
            e
        }()
          , v = a(23)
          , b = function(e) {
            function t(e) {
                var a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.a.LAYER.NONE, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return s()(this, t),
                a = l()(this, d()(t).call(this, e)),
                void 0 === e && console.error("Cant create PhyBody without all parameters. Something is undefined." + e),
                r.hasOwnProperty("vel") && (r.vel = r.vel.copy()),
                r.hasOwnProperty("acc") && (r.acc = r.acc.copy()),
                a.uid = -1,
                a.pbActive = !0,
                a.bodyType = f.a.NONE,
                a.isStatic = r.isStatic || !1,
                a.myLayer = i,
                a.collidesLayers = n,
                a.useGravity = r.useGravity || !1,
                a.mass = r.mass || 1,
                a.vel = r.vel || y.a.ZERO,
                a.acc = r.acc || y.a.ZERO,
                a.pos = y.a.ZERO,
                a.pEngine = a.gameScene.phyEngine,
                a.collision = null,
                a.ignoreTimeScale = !0,
                a.tickInfo = {},
                a.debugGraphics = null,
                a
            }
            return p()(t, e),
            r()(t, [{
                key: "collideEdge",
                value: function(e, t, a, i, s, n, r, o) {
                    return !1
                }
            }, {
                key: "_pBodyInit",
                value: function() {
                    void 0 !== this.bodyType && this.bodyType !== f.a.NONE || console.error("Have to set body type. Currently: " + this.bodyType),
                    void 0 !== this.gameScene && null !== this.gameScene || console.error("GameScene is not defined for this pBody."),
                    this.collision = new T(this),
                    this.gameScene.phyEngine.debugOn && (this.debugGraphics = this.gameScene.add.graphics(),
                    m.a.mySpriteDepth(m.a.RENDER_DEPTH.PHY_DEBUG, this.debugGraphics)),
                    this.gameScene.phyEngine.addBody(this)
                }
            }, {
                key: "_pBodyResize",
                value: function() {}
            }, {
                key: "_debugDraw",
                value: function() {
                    this.debugGraphics.clear(),
                    this.myLayer == v.a.LAYER.SIMULATION ? this.debugGraphics.fillStyle(16079939, .35) : this.debugGraphics.fillStyle(16119107, .35),
                    this.debugGraphics.lineStyle(.75, 16119107, .75)
                }
            }, {
                key: "myOnDestroy",
                value: function() {
                    _()(d()(t.prototype), "myOnDestroy", this).call(this),
                    null != this.debugGraphics && this.debugGraphics.destroy(),
                    this.pbActive = !1,
                    this.gameScene.phyEngine.removeBody(this)
                }
            }, {
                key: "myFixedPreUpdate",
                value: function(e, t, a) {}
            }, {
                key: "myFixedPostUpdate",
                value: function(e, t, a) {}
            }]),
            t
        }(m.a);
        t.a = b
    },
    77: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(10)
          , l = a.n(o)
          , h = a(7)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(17)
          , p = a.n(u)
          , m = a(21)
          , y = a(4)
          , g = a(0)
          , S = a(45)
          , E = a(46)
          , f = a(2)
          , T = a(1)
          , v = a(9)
          , b = a(26)
          , k = a(22)
          , P = a(15)
          , L = a(8)
          , A = a(111)
          , I = a(25)
          , M = a(18)
          , O = a(32)
          , D = a(20)
          , R = a(29)
          , B = a(3)
          , w = a(38)
          , N = function(e) {
            function t(e, a, i) {
                var n;
                return s()(this, t),
                (n = l()(this, _()(t).call(this, {
                    key: "MyShareScene"
                }))).passedAlongSceneData = null,
                n.screenshotRectangle = null,
                n
            }
            return d()(t, e),
            r()(t, [{
                key: "init",
                value: function(e) {
                    f.a.log("SHARE", "Received data:", e),
                    this.passedAlongSceneData = e,
                    this.scene.settings.data = null,
                    this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.ALL ? R.a.LogClick(R.a.CLICK_TYPE.SHARE_ALL) : this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.RANK ? R.a.LogClick(R.a.CLICK_TYPE.SHARE_RANK) : this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.LEVEL && R.a.LogClick(R.a.CLICK_TYPE.SHARE_LEVEL)
                }
            }, {
                key: "create",
                value: function() {
                    if (this.passedAlongSceneData.shareType != T.a.SHARE_TYPE.LEVEL) {
                        this.myTransition = new S.a(this).transitionOpen();
                        new E.a(this,!1);
                        if (g.a.isBS3) {
                            this.add.sprite(.5 * g.a.gameWidth, .5 * g.a.gameHeight, "mainmenu_background"),
                            new L.a(this,412,451,g.a.lazySpriteKey,"ui/menu_start1.png");
                            var e = new Phaser.Geom.Rectangle(-20,-20,g.a.gameWidth + 40,g.a.gameHeight + 40)
                              , t = this.add.graphics();
                            t.fillStyle(0, .65),
                            t.fillRectShape(e)
                        }
                    } else {
                        var a = new Phaser.Geom.Rectangle(-1500,-1500,5e3,5e3)
                          , i = this.add.graphics();
                        i.fillStyle(0, .9),
                        i.fillRectShape(a),
                        i.setInteractive({
                            hitArea: a,
                            hitAreaCallback: Phaser.Geom.Rectangle.Contains
                        })
                    }
                    var s = b.a.BT1.SETTINGS_BACK;
                    if (this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.LEVEL && (s = "DONE"),
                    g.a.isBT)
                        new k.a(this,70 + P.a.notchOffset,410,130,77,"ui/main_menu_back.png",{
                            top: 30,
                            bottom: 30,
                            left: 30,
                            right: 30
                        });
                    var n = 6;
                    if ((g.a.isBS2 || g.a.isBS3) && (n = 0),
                    this.back_btn = new m.a(this,70 + P.a.notchOffset,410,100,47,{
                        text: s,
                        size: 32,
                        fixY: n
                    },this.backToMainMenu.bind(this),null,null,!1,!1),
                    g.a.isBT)
                        new k.a(this,g.a.gameWidth / 2,410,130,77,"ui/main_menu_back.png",{
                            top: 30,
                            bottom: 30,
                            left: 30,
                            right: 30
                        });
                    n = 6;
                    (g.a.isBS2 || g.a.isBS3) && (n = 0),
                    this.share_btn = new m.a(this,g.a.gameWidth / 2,410,100,47,{
                        text: b.a.BT1.SHARE,
                        size: 32,
                        fixY: n
                    },this.share.bind(this),null,null,!0,!0);
                    this.screenshotRectangle = new Phaser.Geom.Rectangle(g.a.gameWidth / 2 - 205,10,410,355);
                    var r = this.add.graphics();
                    if (r.fillStyle(0, .8),
                    r.fillRectShape(this.screenshotRectangle),
                    g.a.isBT) {
                        var o = new L.a(this,90,195,g.a.lazySpriteKey,"ani_torch/torch_1.png",.9)
                          , l = (new L.a(this,90,193,g.a.lazySpriteKey,"ani_torch/torch_base.png",.9),
                        new L.a(this,612,195,g.a.lazySpriteKey,"ani_torch/torch_1.png",.9))
                          , h = new L.a(this,612,193,g.a.lazySpriteKey,"ani_torch/torch_base.png",.9);
                        h.scaleX = -h.scaleX,
                        o.anims.play("torch_burn"),
                        l.anims.play("torch_burn")
                    }
                    var _ = this.add.bitmapText(this.screenshotRectangle.x + this.screenshotRectangle.width - 5, this.screenshotRectangle.y + this.screenshotRectangle.height - 1, g.a.fontNames.MENU, O.a.REBUBBLED_HOMEPAGE_SHORT, 15);
                    _.setOrigin(1, 1),
                    this.logo = this.add.container(),
                    this.logo.add([_]),
                    this.logo.alpha = .7,
                    this.logo.visible = !1,
                    y.a.gameSettings.sharedClickedFrom.includes(this.passedAlongSceneData.shareType) || y.a.gameSettings.sharedClickedFrom.push(this.passedAlongSceneData.shareType),
                    this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.ALL || this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.RANK ? this._renderMainMenuShare() : this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.LEVEL && this._renderLevelShare()
                }
            }, {
                key: "_renderMainMenuShare",
                value: function() {
                    var e = 330
                      , t = 140;
                    (g.a.isBS2 || g.a.isBS3) && (t = 110);
                    var a = -8;
                    (g.a.isBS2 || g.a.isBS3) && (a = -15);
                    for (var i = y.a.gameSettings.maxLevelUnlocked[v.a.MODES.SINGLE], s = "My best level is: ", n = Object(A.a)(v.a.currentMode), r = 0; null != n["lvl" + (r + 1)]; )
                        r++;
                    f.a.log("levles in game:", r),
                    null != y.a.gameSettings.bestScorePerLevel[r] && y.a.gameSettings.bestScorePerLevel[r] > 0 && (s = "I FINISHED ALL (" + r + ") LEVELS!",
                    i = "",
                    e = g.a.gameWidth / 2);
                    var o = this.add.bitmapText(e, 45, g.a.fontNames.MENU, s, 30)
                      , l = this.add.bitmapText(e + t, 45 + a, g.a.fontNames.MENU, i, 54);
                    o.x -= o.width / 2,
                    l.x -= l.width / 2;
                    for (var h = 0, _ = 1; _ <= r; _++)
                        null != y.a.gameSettings.bestScorePerLevel[_] && (f.a.log("Level", _, " score: ", y.a.gameSettings.bestScorePerLevel[_]),
                        h += y.a.gameSettings.bestScorePerLevel[_]);
                    f.a.log("SHARE", "Calculated best score:", h);
                    var c = g.a.gameWidth / 2
                      , d = 110;
                    if (g.a.isBT)
                        (u = new L.a(this,c,150,g.a.spriteKey,"ui/name_box.png")).scale = 2;
                    else if (g.a.isBS2) {
                        var u, p = {
                            top: 10,
                            bottom: 10,
                            left: 10,
                            right: 10
                        };
                        (u = new k.a(this,c,150,250,50,"ui/ingame/interface_box.png",p)).scale = 2,
                        u.ninePatch.alpha = .5
                    }
                    this.add.bitmapText(c, d, g.a.fontNames.MENU, "TOTAL SCORE:", 20).setOrigin(.5, .5),
                    this.add.bitmapText(c, 150, g.a.fontNames.SCORE, h, 44).setOrigin(.5, .5);
                    I.a.renderBadge(this, g.a.gameWidth / 2, 275, I.a.CurrentLevel, !1, 1)
                }
            }, {
                key: "_renderLevelShare",
                value: function() {
                    var e = g.a.gameWidth / 2
                      , t = this.add.bitmapText(e, 95, g.a.fontNames.MENU, "Best level score", 26)
                      , a = this.add.bitmapText(e, 25, g.a.fontNames.MENU, "LEVEL " + v.a.currentLevel, 54);
                    t.x -= t.width / 2,
                    a.x -= a.width / 2;
                    var i = 0;
                    null != y.a.gameSettings.bestScorePerLevel[v.a.currentLevel] && (i = y.a.gameSettings.bestScorePerLevel[v.a.currentLevel]);
                    var s = g.a.gameWidth / 2;
                    if (g.a.isBT)
                        (n = new L.a(this,s,150,g.a.spriteKey,"ui/name_box.png")).scale = 2;
                    else if (g.a.isBS2) {
                        var n, r = {
                            top: 10,
                            bottom: 10,
                            left: 10,
                            right: 10
                        };
                        (n = new k.a(this,s,150,250,50,"ui/ingame/interface_box.png",r)).scale = 2,
                        n.ninePatch.alpha = .5
                    }
                    this.add.bitmapText(s, 150, g.a.fontNames.SCORE, i, 44).setOrigin(.5, .5);
                    I.a.renderBadge(this, g.a.gameWidth / 2, 275, I.a.CurrentLevel, !1, 1)
                }
            }, {
                key: "backToMainMenu",
                value: function() {
                    if (this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.ALL) {
                        var e = "BT1_MainMenu";
                        g.a.isBS2 ? e = "BS2_MainMenu" : g.a.isBS3 && (e = "BS3_MainMenu"),
                        this.myTransition.transitionToggle(!1, e)
                    } else
                        this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.RANK ? this.myTransition.transitionToggle(!1, "MyTasksScene") : this.passedAlongSceneData.shareType == T.a.SHARE_TYPE.LEVEL && (w.a._unregisterSceneButton(this.back_btn),
                        w.a._activeScene = this.passedAlongSceneData.fromScene,
                        this.scene.stop("MyShareScene"),
                        this.passedAlongSceneData.onBackCallback && this.passedAlongSceneData.onBackCallback())
                }
            }, {
                key: "share",
                value: function() {
                    this._createScreenshot()
                }
            }, {
                key: "doneSharing",
                value: function(e) {
                    f.a.log("SHARE", "Done sharing.", e)
                }
            }, {
                key: "_createScreenshot",
                value: function() {
                    f.a.log("SHARE", "Creating screenshot.");
                    var e = this.screenshotRectangle.x - P.a.cameraOffset.x + 2
                      , a = this.screenshotRectangle.y - P.a.cameraOffset.y + 2
                      , i = this.screenshotRectangle.width - 4
                      , s = this.screenshotRectangle.height - 4;
                    this.logo.visible = !0;
                    var n = this;
                    this.game.renderer.snapshotArea(e, a, i, s, (function(e) {
                        f.a.log("SHARE", "Screenshot completed", e.src),
                        n.logo.visible = !1,
                        n._shareFile(e.src)
                    }
                    ), t.IMAGE_TYPE, .75)
                }
            }, {
                key: "_shareFile",
                value: function(e) {
                    f.a.log("SHARE", "Sharing for platform:", M.a.myTarget);
                    var a = {
                        files: [new File([t._b64toBlob(e)],t.OUTPUT_FILENAME,{
                            type: t.IMAGE_TYPE,
                            lastModified: (new Date).getTime()
                        })]
                    }
                      , i = t._generateShareURL();
                    null != i && (a.url = i),
                    navigator.canShare && navigator.canShare(a) ? (f.a.log("SHARING", "Via navigator.canShare()", a),
                    navigator.share(a).then(this.doneSharing).catch(this.doneSharing)) : (f.a.log("SHARING", "Via downloadFile()", a),
                    this._share_via_downloadFile(e))
                }
            }, {
                key: "_share_via_downloadFile",
                value: function(e) {
                    var a = document.createElement("a");
                    a.download = t.OUTPUT_FILENAME,
                    a.href = e,
                    a.dataset.downloadurl = [t.IMAGE_TYPE, a.download, a.href].join(":"),
                    document.body.appendChild(a),
                    a.click(),
                    document.body.removeChild(a),
                    this.doneSharing()
                }
            }], [{
                key: "_b64toBlob",
                value: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512;
                    e = e.substring(e.indexOf(",") + 1);
                    for (var i = atob(e), s = [], n = 0; n < i.length; n += a) {
                        for (var r = i.slice(n, n + a), o = new Array(r.length), l = 0; l < r.length; l++)
                            o[l] = r.charCodeAt(l);
                        var h = new Uint8Array(o);
                        s.push(h)
                    }
                    var _ = new Blob(s,{
                        type: t.IMAGE_TYPE
                    });
                    return _
                }
            }, {
                key: "_generateShareURL",
                value: function() {
                    if (M.a.isPoki)
                        return null;
                    if (M.a.isCordova)
                        if (P.a.isIOS) {
                            if (g.a.isBT)
                                return O.a.BTC_APPLE;
                            if (g.a.isBS2)
                                return O.a.BS2_APPLE;
                            if (g.a.isBSS)
                                return O.a.BS3_APPLE
                        } else if (P.a.isAndroid) {
                            if (g.a.isBT)
                                return O.a.BTC_GOOGLE;
                            if (g.a.isBS2)
                                return O.a.BS2_GOOGLE;
                            if (g.a.isBSS)
                                return O.a.BS3_GOOGLE
                        }
                    return null
                }
            }, {
                key: "shareSceneButton",
                value: function(e, a, i, s, n) {
                    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    if (f.a.log("SHARE", "Creating shareSceneButton for: ", n),
                    D.a.isLazyLoaded && !(n == T.a.SHARE_TYPE.ALL && y.a.gameSettings.maxLevelUnlocked[v.a.MODES.SINGLE] < t.MINIMUM_SHARE_LEVEL)) {
                        var o = {
                            shareType: n,
                            fromScene: e.scene.key,
                            onBackCallback: r
                        }
                          , l = n == T.a.SHARE_TYPE.LEVEL
                          , h = new m.a(e,a,i,80 * s,80 * s,{
                            icon: "sharescore/share_button.png",
                            iconSpriteKey: g.a.lazySpriteKey
                        },null,null,null,!1,l);
                        if (n == T.a.SHARE_TYPE.ALL || n == T.a.SHARE_TYPE.RANK ? h.callbackClick = t._shareSceneButtonClick.bind(e, e, o) : n == T.a.SHARE_TYPE.LEVEL && (t._levelCallShareData = null,
                        h.callbackClick = t._shareSceneButtonReserveShare.bind(e, e, o, h)),
                        n == T.a.SHARE_TYPE.LEVEL && h.setDepthMyUIButton(B.a.RENDER_DEPTH.UIOVER),
                        !y.a.gameSettings.sharedClickedFrom.includes(n)) {
                            var _ = 13904693;
                            g.a.isBS3 && (_ = 458987);
                            var c = 14475529
                              , d = 4
                              , u = 10
                              , p = h.backgroundNinePatch.ninePatch.displayWidth / 2 - 5
                              , S = -h.backgroundNinePatch.ninePatch.displayHeight / 2 + 5
                              , E = 20
                              , b = 0
                              , k = 1;
                            g.a.isBT && (k = 3);
                            var P = e.add.graphics();
                            P.fillStyle(_, 1),
                            P.lineStyle(d, c, 1),
                            P.fillRect(-u, -u, 2 * u, 2 * u),
                            P.strokeRect(-u, -u, 2 * u, 2 * u);
                            var L = e.add.bitmapText(b, k, g.a.fontNames.MENU, "!", E);
                            L.setOrigin(.5, .5);
                            var A = e.add.container(a + p, i + S);
                            A.add([P, L]),
                            e.add.tween({
                                targets: A,
                                scale: 1.21,
                                duration: 230,
                                loop: -1,
                                yoyo: !0
                            }),
                            n == T.a.SHARE_TYPE.LEVEL && B.a.mySpriteDepth(B.a.RENDER_DEPTH.UIOVER, A)
                        }
                    }
                }
            }, {
                key: "_shareSceneButtonClick",
                value: function(e, t) {
                    e.scene.run("MyShareScene", t),
                    e.scene.bringToTop("MyShareScene"),
                    window.dispatchEvent(new Event("resize"))
                }
            }, {
                key: "_shareSceneButtonReserveShare",
                value: function(e, a, i) {
                    t._levelCallShareData = {
                        scene: e,
                        sceneData: a
                    };
                    var s = i;
                    s.changeTextOrIcon({
                        icon: "sharescore/share_button.png",
                        iconSpriteKey: g.a.lazySpriteKey
                    });
                    var n = new L.a(e,s.myIcon.x,s.myIcon.y,g.a.lazySpriteKey,"sharescore/share_button_wait.png",1.9,B.a.RENDER_DEPTH.UIOVER);
                    s.buttonIsActive = !1,
                    s.focusedNinePatch.setVisibleNinePatch(!1),
                    e.add.tween({
                        targets: [s.backgroundNinePatch.ninePatch],
                        alpha: 0,
                        duration: 150
                    }),
                    e.add.tween({
                        targets: [s.myIcon, s.backgroundNinePatch.ninePatch],
                        scale: {
                            from: 1.2,
                            to: 1
                        },
                        duration: 200,
                        repeat: -1,
                        yoyo: !0
                    }),
                    e.add.tween({
                        targets: [n],
                        angle: {
                            from: 0,
                            to: 360
                        },
                        duration: 3200,
                        repeat: -1
                    })
                }
            }, {
                key: "ShareSceneButtonReserveShare",
                value: function() {
                    return null != t._levelCallShareData && (t._shareSceneButtonClick(t._levelCallShareData.scene, t._levelCallShareData.sceneData),
                    !0)
                }
            }]),
            t
        }(Phaser.Scene);
        p()(N, "MINIMUM_SHARE_LEVEL", 2),
        p()(N, "OUTPUT_FILENAME", "BubbleTrouble.png"),
        p()(N, "IMAGE_TYPE", "image/png"),
        p()(N, "_levelCallShareData", null),
        t.a = N
    },
    8: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return m
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(10)
          , r = a.n(n)
          , o = a(7)
          , l = a.n(o)
          , h = a(41)
          , _ = a.n(h)
          , c = a(11)
          , d = a.n(c)
          , u = a(3)
          , p = a(2)
          , m = function(e) {
            function t(e, a, i, n, o) {
                var h, c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                return s()(this, t),
                h = r()(this, l()(t).call(this, e, a, i, n, o)),
                e.textures.exists(n) ? (e.add.existing(_()(h)),
                u.a.mySpriteScale(_()(h), c),
                null != d && u.a.mySpriteDepth(d, _()(h)),
                r()(h, _()(h))) : (p.a.error("MySprite", "No texture present.", n, o),
                r()(h, null))
            }
            return d()(t, e),
            t
        }(Phaser.GameObjects.Sprite)
    },
    81: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = (a(76),
        a(0))
          , _ = a(23)
          , c = a(1)
          , d = a(13)
          , u = a(9)
          , p = function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "CollisionVsAABB",
                value: function(t, a, i, s) {
                    var n = t.pos.x - a.pos.x
                      , r = t.radius + a.sizeHalf.x - Math.abs(n);
                    if (r > 0) {
                        var o = t.pos.y - a.pos.y
                          , l = t.radius + a.sizeHalf.y - Math.abs(o);
                        if (l > 0) {
                            var h, _, c = 0, d = 0;
                            if (n < -a.sizeHalf.x ? (h = a._p1.x,
                            c = -1) : n > a.sizeHalf.x && (h = a._p2.x,
                            c = 1),
                            o < -a.sizeHalf.y ? (_ = a._p1.y,
                            d = -1) : o > a.sizeHalf.y && (_ = a._p2.y,
                            d = 1),
                            0 === c || 0 == t.vel.x)
                                e._solveCollision(t, a, 0, l * d, 0, d, i, s);
                            else if (0 === d)
                                e._solveCollision(t, a, r * c, 0, c, 0, i, s);
                            else {
                                var u = t.pos.x - h
                                  , p = t.pos.y - _
                                  , m = u * u + p * p;
                                if (t.radius * t.radius > m) {
                                    var y, g, S = t.pos.x - t.tickInfo.vx, E = t.pos.y - t.tickInfo.vy, f = t.tickInfo.vy / t.tickInfo.vx, T = f * f, v = (h + f * _ + T * S - f * E) / (T + 1), b = (E + f * h + T * _ - f * S) / (T + 1), k = h - v, P = _ - b, L = Math.sqrt(k * k + P * P), A = Math.sqrt(t.radius * t.radius - L * L), I = Math.atan(t.tickInfo.vx / t.tickInfo.vy);
                                    t.tickInfo.vy > 0 ? (y = v - A * Math.sin(I),
                                    g = b - A * Math.cos(I)) : (y = v + A * Math.sin(I),
                                    g = b + A * Math.cos(I)),
                                    y < a._p1.x ? c = -1 : y > a._p2.x && (c = 1),
                                    g < a._p1.y ? d = -1 : g > a._p2.y && (d = 1),
                                    0 == c ? (l = 1 == d ? a._p2.y - t.pos.y : t.pos.y - a._p1.y,
                                    e._solveCollision(t, a, 0, l, 0, d, i, s)) : 0 == d ? (r = 1 == c ? a._p2.x - t.pos.x : t.pos.x - a._p1.x,
                                    e._solveCollision(t, a, r, 0, c, 0, i, s)) : (r = -(t.pos.x - y),
                                    l = -(t.pos.y - g),
                                    e._solveCollision(t, a, r, l, c, d, i, s, h, _))
                                }
                            }
                            return !0
                        }
                    }
                    return !1
                }
            }, {
                key: "_solveCollision",
                value: function(t, a, i, s, n, r, o, l, d, u) {
                    if (!t.gameScene.isGamePaused) {
                        var p = a;
                        if (p == l && (p = t),
                        0 === s)
                            n < 0 ? e.EdgeAABBLeft(t, a, i, s, o, l, p) : e.EdgeAABBRight(t, a, i, s, o, l, p);
                        else if (0 === i)
                            r < 0 ? e.EdgeAABBTop(t, a, i, s, o, l, p) : e.EdgeAABBBottom(t, a, i, s, o, l, p);
                        else {
                            var m = Math.abs(t.pos.x - d)
                              , y = Math.abs(t.pos.y - u);
                            if (e.pBodySim.radius = h.a.ballSizes[t.ballId],
                            e.pBodySim.vel.x = t.vel.x,
                            e.pBodySim.vel.y = t.vel.y,
                            a.goType != c.a.GO_TYPE.SHOT && a.goType != c.a.GO_TYPE.PLAYER)
                                if (m > y) {
                                    if (m > h.a.ballBounceDiff[t.ballId])
                                        if (n > 0) {
                                            if (t.tickInfo.vx < 0) {
                                                var g = t.pos.x - t.tickInfo.vx;
                                                if (0 == t.gameScene.phyEngine.simulateCollisions(e.pBodySim, g, t.pos.y + s, [_.a.LAYER.WALL]).collisions.length)
                                                    return t.pos.x = g,
                                                    e.EdgeAABBRight(t, a, i, s, o, l, p),
                                                    !0
                                            }
                                        } else if (t.tickInfo.vx > 0) {
                                            g = t.pos.x - t.tickInfo.vx;
                                            if (0 == t.gameScene.phyEngine.simulateCollisions(e.pBodySim, g, t.pos.y + s, [_.a.LAYER.WALL]).collisions.length)
                                                return t.pos.x = g,
                                                void e.EdgeAABBLeft(t, a, i, s, o, l, p)
                                        }
                                } else if (y > h.a.ballBounceDiff[t.ballId])
                                    if (r > 0) {
                                        if (t.tickInfo.vy < 0) {
                                            var S = t.pos.y - t.tickInfo.vy;
                                            if (0 == t.gameScene.phyEngine.simulateCollisions(e.pBodySim, t.pos.x + i, S, [_.a.LAYER.WALL]).collisions.length)
                                                return t.pos.y = S,
                                                void e.EdgeAABBBottom(t, a, i, s, o, l, p)
                                        }
                                    } else if (t.tickInfo.vy > 0) {
                                        S = t.pos.y - t.tickInfo.vy;
                                        if (0 == t.gameScene.phyEngine.simulateCollisions(e.pBodySim, t.pos.x + i, S, [_.a.LAYER.WALL]).collisions.length)
                                            return t.pos.y = S,
                                            void e.EdgeAABBTop(t, a, i, s, o, l, p)
                                    }
                            if (n < 0 ? t.tickInfo.vx > 0 && e.EdgeAABBLeft(t, a, i, s, o, l, p) : t.tickInfo.vx < 0 && e.EdgeAABBRight(t, a, i, s, o, l, p),
                            !t.pbActive || !a.pbActive)
                                return;
                            r < 0 ? t.tickInfo.vy > 0 && e.EdgeAABBTop(t, a, i, s, o, l, p) : t.tickInfo.vy < 0 && e.EdgeAABBBottom(t, a, i, s, o, l, p)
                        }
                    }
                }
            }, {
                key: "Debug",
                value: function(e, t, a, i, s, n, r, o) {
                    t.myLayer != _.a.LAYER.SIMULATION ? console.warn("[" + t.pEngine._tickNumber + "]", e, a.uid, t.tickInfo, i, s, t.pos) : console.log("SIM CHECK.")
                }
            }, {
                key: "EdgeAABBLeft",
                value: function(e, t, a, i, s, n, r) {
                    t.goType == c.a.GO_TYPE.WALL && d.a.TaskUpdateDontNotify(e.gameScene, d.a.TASK_TYPE.BALL_WALL_EDGE, !0, u.a.currentLevel, c.a.PHY.COL_EDGE.LEFT),
                    !0 !== n.collideEdge(c.a.PHY.COL_EDGE.LEFT, e, t, a, i, s, n, r) && (e.pos.x += a,
                    e.vel.x = -Math.abs(e.vel.x))
                }
            }, {
                key: "EdgeAABBRight",
                value: function(e, t, a, i, s, n, r) {
                    t.goType == c.a.GO_TYPE.WALL && d.a.TaskUpdateDontNotify(e.gameScene, d.a.TASK_TYPE.BALL_WALL_EDGE, !0, u.a.currentLevel, c.a.PHY.COL_EDGE.RIGHT),
                    !0 !== n.collideEdge(c.a.PHY.COL_EDGE.RIGHT, e, t, a, i, s, n, r) && (e.pos.x += a,
                    e.vel.x = Math.abs(e.vel.x))
                }
            }, {
                key: "EdgeAABBTop",
                value: function(e, t, a, i, s, n, r) {
                    !0 !== n.collideEdge(c.a.PHY.COL_EDGE.TOP, e, t, a, i, s, n, r) && (e.pos.y += i,
                    e.vel.y = -Math.abs(e.vel.y))
                }
            }, {
                key: "EdgeAABBBottom",
                value: function(e, t, a, i, s, n, r) {
                    !0 !== n.collideEdge(c.a.PHY.COL_EDGE.BOTTOM, e, t, a, i, s, n, r) && (e.pos.y += i,
                    e.vel.y = Math.abs(e.vel.y))
                }
            }]),
            e
        }();
        l()(p, "pBodySim", void 0),
        l()(p, "pBodySimCavein", void 0),
        t.a = p
    },
    83: function(e, t, a) {
        "use strict";
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(21)
          , l = a(0)
          , h = a(22)
          , _ = (a(37),
        a(18))
          , c = a(2)
          , d = a(15)
          , u = function() {
            function e(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                s()(this, e),
                e.scenePlugin.launch("FillerAdScene"),
                e.adScene.scene.bringToTop("FillerAdScene"),
                this.callbackOnCompleted = t,
                this.myScene = e.adScene,
                this.img_background = this.myScene.add.tileSprite(3 * -l.a.gameWidth, 3 * -l.a.gameHeight, 7 * l.a.gameWidth, 7 * l.a.gameHeight, l.a.spriteKey, "ui/black.png"),
                this.img_background.setDisplayOrigin(.5, .5),
                this.img_background.setInteractive(),
                this.img_game = null;
                var i = 6;
                (l.a.isBS2 || l.a.isBS3) && (i = 0),
                l.a.isBT && (this.open_background = new h.a(this.myScene,l.a.gameWidth / 2,.89 * l.a.gameHeight,230,80,"ui/main_menu_back.png",{
                    top: 30,
                    bottom: 30,
                    left: 30,
                    right: 30
                })),
                this.open_button = new o.a(this.myScene,l.a.gameWidth / 2,.89 * l.a.gameHeight,200,50,{
                    text: "OPEN",
                    size: 42,
                    fixY: i
                },this.openAd.bind(this));
                var n = l.a.gameWidth - d.a.notchOffset - 50;
                l.a.isBT && (this.close_background = new h.a(this.myScene,n,40,100,60,"ui/main_menu_back.png",{
                    top: 30,
                    bottom: 30,
                    left: 30,
                    right: 30
                }),
                this.close_background.ninePatch.alpha = .7);
                var r = 30;
                l.a.isBS3 && (r = 50),
                this.close_button = new o.a(this.myScene,n,40,70,r,{
                    text: "X",
                    size: 32,
                    fixY: i
                },this._closeAd.bind(this)),
                this.txt_timer = this.myScene.add.text(n, 40, "15"),
                this.txt_timer.visible = !1,
                this.myTimer = null,
                this.timerRepeatCount = 0,
                _.a.isFacebook && this._showOpenButton(!1),
                this.drawAd(a)
            }
            return r()(e, [{
                key: "drawAd",
                value: function() {}
            }, {
                key: "openAd",
                value: function() {}
            }, {
                key: "_closeAd",
                value: function() {
                    c.a.log("Closed rewarded ad."),
                    e.scenePlugin.stop("FillerAdScene"),
                    this.close_button.destroyMyUIButton(),
                    this.open_button.destroyMyUIButton(),
                    c.a.log("closing ad.", this, this.callbackOnCompleted),
                    null != this.callbackOnCompleted && this.callbackOnCompleted(!0)
                }
            }, {
                key: "setRewarded",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15;
                    this._showCloseButton(!1),
                    this.timerRepeatCount = e,
                    this.txt_timer.text = this.timerRepeatCount.toString(),
                    this.txt_timer.visible = !0,
                    this.myTimer = this.myScene.time.addEvent({
                        delay: 1e3,
                        callback: this._updateRewardedTimer.bind(this),
                        callbackScope: this,
                        repeat: e - 1
                    })
                }
            }, {
                key: "_updateRewardedTimer",
                value: function() {
                    this.timerRepeatCount--,
                    this.txt_timer.text = this.timerRepeatCount.toString(),
                    0 == this.timerRepeatCount && (this.txt_timer.visible = !1,
                    this._showCloseButton(!0))
                }
            }, {
                key: "_showCloseButton",
                value: function(e) {
                    this.close_background && this.close_background.setVisibleNinePatch(e),
                    this.close_button && this.close_button.setVisibleMyUIButton(e)
                }
            }, {
                key: "_showOpenButton",
                value: function(e) {
                    this.open_background && this.open_background.setVisibleNinePatch(e),
                    this.open_button && this.open_button.setVisibleMyUIButton(e)
                }
            }]),
            e
        }();
        u.adScene = null,
        u.scenePlugin = null,
        t.a = u
    },
    9: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return d
        }
        ));
        var i = a(5)
          , s = a.n(i)
          , n = a(6)
          , r = a.n(n)
          , o = a(17)
          , l = a.n(o)
          , h = a(56)
          , _ = (a(0),
        a(2))
          , c = a(13)
          , d = (a(20),
        function() {
            function e() {
                s()(this, e)
            }
            return r()(e, null, [{
                key: "newGame",
                value: function(t) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    null != i && (i = JSON.parse(JSON.stringify(i))),
                    e.currentMode = t,
                    e.currentLevel = a,
                    e.resetScores(),
                    e.resetComboMeter(),
                    h.a.resetLives(t),
                    e._customPackKey = "",
                    null != i ? (e.customPack = i,
                    e.currentMode = e.MODES.SINGLE,
                    i.is2P && (e.currentMode = e.MODES.TWOP)) : (e.customPack = null,
                    e._customPackKey = ""),
                    c.a.TaskReset(null, c.a.TASK_TYPE.CONSECUTIVE_LEVELS)
                }
            }, {
                key: "resetScores",
                value: function() {
                    e.scores[1] = 0,
                    e.scores[2] = 0
                }
            }, {
                key: "isYouksPack",
                value: function() {
                    return null != e.customPack && ("Master Quest" == e.customPack.packName || "45 Expansion" == e.customPack.packName)
                }
            }, {
                key: "customPackKey",
                get: function() {
                    return null == e.customPack ? (_.a.error("customPackKey, Unknown pack"),
                    null) : ("" != e._customPackKey || (e._customPackKey = e.customPack.packName + e.customPack.levels.length,
                    _.a.log("Set new custom packKey:", e._customPackKey)),
                    e._customPackKey)
                }
            }]),
            e
        }());
        l()(d, "MODES", {
            SINGLE: "single",
            TWOP: "twop",
            PACK: "pack"
        }),
        l()(d, "currentLevel", 0),
        l()(d, "currentMode", d.MODES.SINGLE),
        l()(d, "scores", []),
        l()(d, "comboPoints", 0),
        l()(d, "resetComboMeter", (function() {
            d.comboPoints = 0
        }
        )),
        l()(d, "customPack", null),
        l()(d, "_customPackKey", "")
    }
});
