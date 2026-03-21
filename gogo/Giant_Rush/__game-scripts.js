// Constants.js
var Constants = pc.createScript('constants');

Constants.GAME_NAME = 'GiantRush';
Constants.GAME_VERSION = 'v1.0';

var EventTypes = {};

/* General */
EventTypes.APP_LOADED = 'app:onLoaded';
EventTypes.SAVE_APP = 'app:save';
EventTypes.SAVEDATA_LOADED = 'app:savedataLoaded';
EventTypes.POSTINITIALIZE = 'postinitialize';
EventTypes.LEVEL_RESET = 'level:reset';
EventTypes.LEVEL_FINISHED = 'level:finished';

EventTypes.Screen = {
    RESIZED: 'app:screen:resized',
    SET_SCALE_BLEND: 'app:screen:setScaleBlend',
    SET_SHADOWS_ENABLED: 'app:screen:shadowsEnabled'
};





Constants.prototype.initialize = function () {
    window.Events = {
        OnLoadLevel: "OnLoadLevel",
        OnUnloadLevel: "OnUnloadLevel",
        OnGetLevel: "OnGetLevel",
        OnSwipe: "OnSwipe",
        OnTouchBegin: "OnTouchBegin",
        OnTouchEnd: "OnTouchEnd",
        OnTouchMove: "OnTouchMove",
        OnLevelLoaded: "OnLevelLoaded",
        OnStartGame: "OnStartGame",
        OnCollectablePicked: "OnCollectablePicked",
        OnPlayerProgress: "OnPlayerProgress",
        OnFinishLineReached: "OnFinishLineReached",
        OnSetCrownState: "OnSetCrownState",
        OnDebugProgression: "OnDebugProgression",
        OnPlayerDead: "OnPlayerDead",
        OnHitObstacle: "OnHitObstacle",
        OnLevelCompleted: "OnLevelCompleted",

        OnFightSequenceBegins: "OnFightSequenceBegins",
        OnFightSequenceCompleted: "OnFightSequenceCompleted",

        OnAttack: "OnAttack",
        OnDamage: "OnDamage",
        OnTap: "OnTap",
        OnTapBonus: "OnTapBonus",
        OnHealthChanged: "OnHealthChanged",

        OnChangeMenuState: "changeMenuState",
        OnChangeCameraState: "OnChangeCameraState",
        OnResetLevel: "OnResetLevel",

        OnUpgradeKick: "OnUpgradeKick",
        OnUpgradeMultiplier: "OnUpgradeMultiplier",

        OnRevivePlayer: "OnRevivePlayer",
        OnKillBoss: "OnKillBoss",
        OnUpdateLevelNumber: "OnUpdateLevelNumber",

        OnBossSpawned: "OnBossSpawned",

        OnFlightBegins: "OnFlightBegins",
        OnFlightCompleted: "OnFlightCompleted",

        OnRageModeActivated: "OnRageModeActivated",
        OnRageModeDeactivated: "OnRageModeDeactivated",

        OnColorChangedRageMode: "OnColorChangedRageMode",

        OnGetRandomBonusLevel: "OnGetRandomBonusLevel",

        OnBonusSequenceBegins: "OnBonusSequenceBegins",
        OnBonusSequenceCompleted: "OnBonusSequenceCompleted",
        OnFinishLineStarted: "OnFinishLineStarted",
        UpdateBossPosition: 'UpdateBossPosition',

        ShakeCamera: "ShakeCamera",

        BigBoss: {
            FightBegins: 'BigBoss:FightBegins',
        },

        OnKeysRefill: "OnKeysRefill",

        OnSkinSelected: "OnSkinSelected",
        OnSkinUnselected: "OnSkinUnselected",

        OnLoseLooksGoodOffer: "OnLoseLooksGoodOffer",
        OnKeepLooksGoodOffer: "OnKeepLooksGoodOffer",
        OnUpdateGemsView: "OnUpdateGemsView",
        OnRageRvCompleted: "OnRageRvCompleted",
    };

    window.CollectableType = {
        MobGreen: 0,
        MobOrange: 1,
        Gem: 2,
        Key: 3,
        PainterGreen: 4,
        PainterOrange: 5,
        MobYellow: 6,
        PainterYellow: 7,
        PainterBlue: 8,
        MobBlue: 9,
        BreakableWall: 10,

        Pole: 11,
        Rail: 12,
        RailSmall: 13,
        RailDouble: 14,
        FlapperLeft: 15,
        FlapperRight: 16,
        FlapperDouble: 17,
        FlapperTwoSided: 18,
        Totem: 19,
        Gate: 20,

        Arrow1: 21,
        Arrow2: 22,
        Arrow3: 23,
        Arrow4: 24,
        Arrow5: 25,
        Arrow6: 26,
        Arrow7: 27,
        Arrow8: 28,
        Arrow9: 29,

        PainterGreenHalf: 30,
        PainterOrangeHalf: 31,
        PainterYellowHalf: 32,
        PainterBlueHalf: 33,

        Lava: 34,

        Gem_Group_1: 35,
        Gem_Group_2: 36,
        Gem_Group_3: 37,
        Gem_Group_4: 38,
        Gem_Group_5: 39,

        Totem_Double: 40,

        ShoesShoes: 41,
        SharkShoes: 42,
        BigfootShoes: 43,
        SocksShoes: 44,
        BunnyShoes: 45,
        WingsShoes: 46,
        BootsShoes: 47,
        KedsShoes: 48,
        PointesShoes: 49,
    };

    window.ColorType = {
        Green: 0,
        Blue: 1,
        Orange: 2,
        Yellow: 3,
        Red: 4,
    };

    window.Patch = {
        RoadFlat: 0,
        RoadSlide: 1,
        RoadDoubleSlide: 2,
        RoadLeftHalf: 3,
        RoadLeftThird: 4,
        RoadRightHalf: 5,
        RoadRightThird: 6,
        RoadStart_Arena: 7,
        RoadEnd_Arena: 8,
        RoadEnd_ArenaBig: 9,
        RoadMiddle_Arena: 10,
        RoadFinishSegment: 11,
        RoadRotatingCircle: 12,
        RoadPainterCircle: 13,
        RoadPainterHalf: 14,
    };

    window.AttackTarget = {
        Player: 0,
        Boss: 1,
        Chest: 2,
    };

    window.Attack = {
        PunchLeft: 0,
        PunchRight: 1,
    };

    window.Action = {
        Enable: 0,
        Disable: 1
    };

    window.CameraState = {
        Mainmenu: 0,
        Gameplay: 1,
        Fight: 2,
        Flight: 3,
        End: 4,
        Wall: 5,
        WallBreak: 6,
        Dodge1: 7,
        Dodge2: 8,
        Dodge3: 9,
        Dodge4: 10,
        Dead: 11
    };

    window.FightingMode = {
        Winner: 0,
        AlmostLoose: 1,
        Looser: 2
    };

    window.BigBossStates = {
        idle: 0,
        attack: 1,
        punchLeft: 2,
        punchRight: 3,
    };

    window.SkinType = {
        Hats: 0,
        Shoes: 1,
        Kicks: 2,
    };

    window.SkinRarity = {
        Common: 0,
        Premium: 1,
    };

    window.SkinStatus = {
        //unlocked and can be selected in Shop panel
        Unlocked: "Unlocked",
        //locked and not displayed in Shop panel
        Locked: "Locked",
        //unlocked and selected
        Selected: "Selected",
        //locked but is displayed in Shop panel
        Available: "Available",
    };

    window.SkinPurchaseType = {
        Gems: 0,
        Rewarded: 1
    };

    window.FireworkType = {
        topCenter: 0,
        bottomCenter: 1,
    };

    window.PendulumReward = {
        Skin: 0,
        Key: 1,
        GemsSmall: 2,
        GemsLarge: 3,
    };

    this.app.events = {
        configManager: {
            initialized: 'ConfigManager:Initialized',
        },
        facebook: {
            tournamentButton: 'Facebook:Tournament',
        }
    };
};

Constants.prototype.update = function (dt) {

};

// Utils.js
Math.dist = function (x1, y1, x2, y2) {
    if (!x2) x2 = 0;
    if (!y2) y2 = 0;
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

Math.noiseAbs = function (x) {
    x = (x << 13) ^ x;
    return Math.abs(parseFloat(1.0 - ((x * (x * x * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0));
};


Math.checkCircleRectangleOverlap = function (r, xc, yc, x1, y1, x2, y2) {
    // Find the nearest point on the
    // rectangle to the center of
    // the circle
    let xn = Math.max(x1, Math.min(xc, x2));
    let yn = Math.max(y1, Math.min(yc, y2));

    // BB_BallsManager.Instance.points[3].setPosition(xn, yn, 0);

    // Find the distance between the
    // nearest point and the center
    // of the circle
    // Distance between 2 points,
    // (x1, y1) & (x2, y2) in
    // 2D Euclidean space is
    // ((x1-x2)**2 + (y1-y2)**2)**0.5
    let dx = xn - xc;
    let dy = yn - yc;
    return (dx * dx + dy * dy) <= r * r;
};

// x and y are center of rectangle
// w and h are wih=dth and height
Math.findRectangleOppositeCorners = function (w, h, x, y) {
    let oppositeCorners = { x1: x - w, y1: y - h, x2: x + w, y2: y + h };
    // BB_BallsManager.Instance.points[1].setPosition(oppositeCorners.x1, oppositeCorners.y1, 0);
    // BB_BallsManager.Instance.points[2].setPosition(oppositeCorners.x2, oppositeCorners.y2, 0);

    return oppositeCorners;
};

Math.randomPlusMinus = function () {
    return (parseInt(pc.math.random(0, 100)) % 2 === 0 ? 1 : -1);
};

Math.clamp01 = function (a) {
    return pc.math.clamp(a, 0, 1);
};

Math.hex2rgb = function (hex) {
    return {
        r: ('0x' + hex[1] + hex[2] | 0) / 255,
        g: ('0x' + hex[3] + hex[4] | 0) / 255,
        b: ('0x' + hex[5] + hex[6] | 0) / 255
    };
};

Math.evaluateColorObj = function (colors, time) {
    let segments = colors.length;
    let ratio = time * segments;
    let color;

    for (let i = 0; i < segments; i++) {
        if (ratio <= i + 1) {
            let t = ratio - i;
            Debug.log(t);
            if (i + 1 >= segments)
                color = colors[i].color;
            else
                color.lerp(colors[i].color, colors[i + 1].color, t);

            break;
        }
    }

    Debug.log('evaluteColor: ', time, segments, ratio, color);
    return color;
};

Math.evaluateColor = function (colors, time) {
    let segments = colors.length;
    let ratio = time * segments;
    let color = new pc.Color();

    for (let i = 0; i < segments; i++) {
        if (ratio <= i + 1) {
            let t = ratio - i;
            if (i + 1 >= segments)
                color = colors[i];
            else
                color.lerp(colors[i], colors[i + 1], t);

            // console.log(t, i);
            break;
        }
        else color = colors[i];
    }

    // console.log('evaluteColor: ', color, colors);
    return color;
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeRange(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



pc.Entity.prototype.delayedCall = function (durationMS, f, scope) {
    var n = 0;
    while (this["delayedExecuteTween" + n]) {
        n++;
    }
    var id = "delayedExecuteTween" + n;
    var m;
    this[id] = this.tween(m)
        .to(1, durationMS / 1000, pc.Linear)
        ;
    this[id].start();

    this[id].once("complete", function () {
        f.call(scope);
        this[id] = null;
    }, this);

    return this[id];
};


var Utils = {};


Utils.setSpriteElementFromAsset = function (elementImage, spriteAsset) {
    const app = pc.AppBase.getApplication();
    const atlasFrameKey = spriteAsset.data.frameKeys[0];
    const textureAtlas = app.assets.get(spriteAsset.data.textureAtlasAsset);
    const rect = textureAtlas.resource.frames[atlasFrameKey].rect;
    elementImage.element.spriteAsset = spriteAsset.id;
    elementImage.element.width = rect.z;
    elementImage.element.height = rect.w;
};

Utils.setSpriteElementFromSprite = function (elementImage, sprite, maxWidth, maxHeight) {
    const atlasFrameKey = sprite.frameKeys[0];
    const rect = sprite.atlas.frames[atlasFrameKey].rect;
    elementImage.element.sprite = sprite;
    elementImage.element.width = rect.z;
    elementImage.element.height = rect.w;

    if(maxWidth && maxHeight) {
        Utils.clampSpriteSizeTo(elementImage, maxWidth, maxHeight);
    }
};

Utils.clampSpriteSizeTo = function(sprite, maxWidth, maxHeight) {
    const currentWidth = sprite.element.width;
    const currentHeight = sprite.element.height;
    const scaleFactor = Math.min(maxWidth / currentWidth, maxHeight / currentHeight);
    sprite.element.width = currentWidth * scaleFactor;
    sprite.element.height = currentHeight * scaleFactor;
};

Utils.wait = function (duration) {
    return new Promise((resolve, reject) => {
        const app = pc.AppBase.getApplication();
        if (duration !== undefined) {
            if (app) {
                pc.AppBase.getApplication().root.delayedCall(duration, () => {
                    resolve();
                })

            } else {
                setTimeout(() => resolve(), duration);
            }
        } else {
            resolve();
        }
    })
};

Utils.setEntityAlpha = function (entity, alpha) {
    if (entity.model && entity.model.enabled) {
        var a = pc.math.clamp(alpha, 0, 1);
        var meshInstances = entity.model.meshInstances;
        for (var i = 0; i < meshInstances.length; ++i) {
            // WARNING: setParameter() is still a beta feature and may change in the future      
            // This is where we set how transparent we want the object to be on a value between 0 and 1
            // 0 = fully transparent
            // 1 = fully opaque

            // Note: The materials on the model MUST have alpha set on opacity -> blend type and be slight less than 1
            meshInstances[i].setParameter("material_opacity", a);
        }
    }
};

Utils.randomName = function (length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

Utils.compareArrays = function (a, b) {
    var equalsIgnoreOrder = (a, b) => {
        if (a.length !== b.length) return false;
        const uniqueValues = new Set([...a, ...b]);
        for (const v of uniqueValues) {
            const aCount = a.filter(e => e === v).length;
            const bCount = b.filter(e => e === v).length;
            if (aCount !== bCount) return false;
        }
        return true;
    };

    return equalsIgnoreOrder(a, b);
};

Utils.compareStateArray = function (a, b) {
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i].state != b[i].state) {
            return false;
        }
    }
    return true;
};


function myFindWhere(array, criteria) {
    return array.find(item => Object.keys(criteria).every(key => item[key] === criteria[key]))
}

// tween.umd.js
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TWEEN = {}));
}(this, (function (exports) { 'use strict';

    /**
     * The Ease class provides a collection of easing functions for use with tween.js.
     */
    var Easing = {
        Linear: {
            None: function (amount) {
                return amount;
            },
        },
        Quadratic: {
            In: function (amount) {
                return amount * amount;
            },
            Out: function (amount) {
                return amount * (2 - amount);
            },
            InOut: function (amount) {
                if ((amount *= 2) < 1) {
                    return 0.5 * amount * amount;
                }
                return -0.5 * (--amount * (amount - 2) - 1);
            },
        },
        Cubic: {
            In: function (amount) {
                return amount * amount * amount;
            },
            Out: function (amount) {
                return --amount * amount * amount + 1;
            },
            InOut: function (amount) {
                if ((amount *= 2) < 1) {
                    return 0.5 * amount * amount * amount;
                }
                return 0.5 * ((amount -= 2) * amount * amount + 2);
            },
        },
        Quartic: {
            In: function (amount) {
                return amount * amount * amount * amount;
            },
            Out: function (amount) {
                return 1 - --amount * amount * amount * amount;
            },
            InOut: function (amount) {
                if ((amount *= 2) < 1) {
                    return 0.5 * amount * amount * amount * amount;
                }
                return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
            },
        },
        Quintic: {
            In: function (amount) {
                return amount * amount * amount * amount * amount;
            },
            Out: function (amount) {
                return --amount * amount * amount * amount * amount + 1;
            },
            InOut: function (amount) {
                if ((amount *= 2) < 1) {
                    return 0.5 * amount * amount * amount * amount * amount;
                }
                return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
            },
        },
        Sinusoidal: {
            In: function (amount) {
                return 1 - Math.cos((amount * Math.PI) / 2);
            },
            Out: function (amount) {
                return Math.sin((amount * Math.PI) / 2);
            },
            InOut: function (amount) {
                return 0.5 * (1 - Math.cos(Math.PI * amount));
            },
        },
        Exponential: {
            In: function (amount) {
                return amount === 0 ? 0 : Math.pow(1024, amount - 1);
            },
            Out: function (amount) {
                return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
            },
            InOut: function (amount) {
                if (amount === 0) {
                    return 0;
                }
                if (amount === 1) {
                    return 1;
                }
                if ((amount *= 2) < 1) {
                    return 0.5 * Math.pow(1024, amount - 1);
                }
                return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
            },
        },
        Circular: {
            In: function (amount) {
                return 1 - Math.sqrt(1 - amount * amount);
            },
            Out: function (amount) {
                return Math.sqrt(1 - --amount * amount);
            },
            InOut: function (amount) {
                if ((amount *= 2) < 1) {
                    return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
                }
                return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
            },
        },
        Elastic: {
            In: function (amount) {
                if (amount === 0) {
                    return 0;
                }
                if (amount === 1) {
                    return 1;
                }
                return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            },
            Out: function (amount) {
                if (amount === 0) {
                    return 0;
                }
                if (amount === 1) {
                    return 1;
                }
                return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
            },
            InOut: function (amount) {
                if (amount === 0) {
                    return 0;
                }
                if (amount === 1) {
                    return 1;
                }
                amount *= 2;
                if (amount < 1) {
                    return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
                }
                return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
            },
        },
        Back: {
            In: function (amount) {
                var s = 1.70158;
                return amount * amount * ((s + 1) * amount - s);
            },
            Out: function (amount) {
                var s = 1.70158;
                return --amount * amount * ((s + 1) * amount + s) + 1;
            },
            InOut: function (amount) {
                var s = 1.70158 * 1.525;
                if ((amount *= 2) < 1) {
                    return 0.5 * (amount * amount * ((s + 1) * amount - s));
                }
                return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
            },
        },
        Bounce: {
            In: function (amount) {
                return 1 - Easing.Bounce.Out(1 - amount);
            },
            Out: function (amount) {
                if (amount < 1 / 2.75) {
                    return 7.5625 * amount * amount;
                }
                else if (amount < 2 / 2.75) {
                    return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
                }
                else if (amount < 2.5 / 2.75) {
                    return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
                }
                else {
                    return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
                }
            },
            InOut: function (amount) {
                if (amount < 0.5) {
                    return Easing.Bounce.In(amount * 2) * 0.5;
                }
                return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
            },
        },
    };

    var now;
    // Include a performance.now polyfill.
    // In node.js, use process.hrtime.
    // eslint-disable-next-line
    // @ts-ignore
    if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
        now = function () {
            // eslint-disable-next-line
            // @ts-ignore
            var time = process.hrtime();
            // Convert [seconds, nanoseconds] to milliseconds.
            return time[0] * 1000 + time[1] / 1000000;
        };
    }
    // In a browser, use self.performance.now if it is available.
    else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
        // This must be bound, because directly assigning this function
        // leads to an invocation exception in Chrome.
        now = self.performance.now.bind(self.performance);
    }
    // Use Date.now if it is available.
    else if (Date.now !== undefined) {
        now = Date.now;
    }
    // Otherwise, use 'new Date().getTime()'.
    else {
        now = function () {
            return new Date().getTime();
        };
    }
    var now$1 = now;

    /**
     * Controlling groups of tweens
     *
     * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
     * In these cases, you may want to create your own smaller groups of tween
     */
    var Group = /** @class */ (function () {
        function Group() {
            this._tweens = {};
            this._tweensAddedDuringUpdate = {};
        }
        Group.prototype.getAll = function () {
            var _this = this;
            return Object.keys(this._tweens).map(function (tweenId) {
                return _this._tweens[tweenId];
            });
        };
        Group.prototype.removeAll = function () {
            this._tweens = {};
        };
        Group.prototype.add = function (tween) {
            this._tweens[tween.getId()] = tween;
            this._tweensAddedDuringUpdate[tween.getId()] = tween;
        };
        Group.prototype.remove = function (tween) {
            delete this._tweens[tween.getId()];
            delete this._tweensAddedDuringUpdate[tween.getId()];
        };
        Group.prototype.update = function (time, preserve) {
            if (time === void 0) { time = now$1(); }
            if (preserve === void 0) { preserve = false; }
            var tweenIds = Object.keys(this._tweens);
            if (tweenIds.length === 0) {
                return false;
            }
            // Tweens are updated in "batches". If you add a new tween during an
            // update, then the new tween will be updated in the next batch.
            // If you remove a tween during an update, it may or may not be updated.
            // However, if the removed tween was added during the current batch,
            // then it will not be updated.
            while (tweenIds.length > 0) {
                this._tweensAddedDuringUpdate = {};
                for (var i = 0; i < tweenIds.length; i++) {
                    var tween = this._tweens[tweenIds[i]];
                    var autoStart = !preserve;
                    if (tween && tween.update(time, autoStart) === false && !preserve) {
                        delete this._tweens[tweenIds[i]];
                    }
                }
                tweenIds = Object.keys(this._tweensAddedDuringUpdate);
            }
            return true;
        };
        return Group;
    }());

    /**
     *
     */
    var Interpolation = {
        Linear: function (v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = Interpolation.Utils.Linear;
            if (k < 0) {
                return fn(v[0], v[1], f);
            }
            if (k > 1) {
                return fn(v[m], v[m - 1], m - f);
            }
            return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
        },
        Bezier: function (v, k) {
            var b = 0;
            var n = v.length - 1;
            var pw = Math.pow;
            var bn = Interpolation.Utils.Bernstein;
            for (var i = 0; i <= n; i++) {
                b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
            }
            return b;
        },
        CatmullRom: function (v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = Interpolation.Utils.CatmullRom;
            if (v[0] === v[m]) {
                if (k < 0) {
                    i = Math.floor((f = m * (1 + k)));
                }
                return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
            }
            else {
                if (k < 0) {
                    return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
                }
                if (k > 1) {
                    return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
                }
                return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
            }
        },
        Utils: {
            Linear: function (p0, p1, t) {
                return (p1 - p0) * t + p0;
            },
            Bernstein: function (n, i) {
                var fc = Interpolation.Utils.Factorial;
                return fc(n) / fc(i) / fc(n - i);
            },
            Factorial: (function () {
                var a = [1];
                return function (n) {
                    var s = 1;
                    if (a[n]) {
                        return a[n];
                    }
                    for (var i = n; i > 1; i--) {
                        s *= i;
                    }
                    a[n] = s;
                    return s;
                };
            })(),
            CatmullRom: function (p0, p1, p2, p3, t) {
                var v0 = (p2 - p0) * 0.5;
                var v1 = (p3 - p1) * 0.5;
                var t2 = t * t;
                var t3 = t * t2;
                return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            },
        },
    };

    /**
     * Utils
     */
    var Sequence = /** @class */ (function () {
        function Sequence() {
        }
        Sequence.nextId = function () {
            return Sequence._nextId++;
        };
        Sequence._nextId = 0;
        return Sequence;
    }());

    var mainGroup = new Group();

    /**
     * Tween.js - Licensed under the MIT license
     * https://github.com/tweenjs/tween.js
     * ----------------------------------------------
     *
     * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
     * Thank you all, you're awesome!
     */
    var Tween = /** @class */ (function () {
        function Tween(_object, _group) {
            if (_group === void 0) { _group = mainGroup; }
            this._object = _object;
            this._group = _group;
            this._isPaused = false;
            this._pauseStart = 0;
            this._valuesStart = {};
            this._valuesEnd = {};
            this._valuesStartRepeat = {};
            this._duration = 1000;
            this._initialRepeat = 0;
            this._repeat = 0;
            this._yoyo = false;
            this._isPlaying = false;
            this._reversed = false;
            this._delayTime = 0;
            this._startTime = 0;
            this._easingFunction = Easing.Linear.None;
            this._interpolationFunction = Interpolation.Linear;
            this._chainedTweens = [];
            this._onStartCallbackFired = false;
            this._id = Sequence.nextId();
            this._isChainStopped = false;
            this._goToEnd = false;
        }
        Tween.prototype.getId = function () {
            return this._id;
        };
        Tween.prototype.isPlaying = function () {
            return this._isPlaying;
        };
        Tween.prototype.isPaused = function () {
            return this._isPaused;
        };
        Tween.prototype.to = function (properties, duration) {
            // TODO? restore this, then update the 07_dynamic_to example to set fox
            // tween's to on each update. That way the behavior is opt-in (there's
            // currently no opt-out).
            // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
            this._valuesEnd = Object.create(properties);
            if (duration !== undefined) {
                this._duration = duration;
            }
            return this;
        };
        Tween.prototype.duration = function (d) {
            this._duration = d;
            return this;
        };
        Tween.prototype.start = function (time) {
            if (this._isPlaying) {
                return this;
            }
            // eslint-disable-next-line
            this._group && this._group.add(this);
            this._repeat = this._initialRepeat;
            if (this._reversed) {
                // If we were reversed (f.e. using the yoyo feature) then we need to
                // flip the tween direction back to forward.
                this._reversed = false;
                for (var property in this._valuesStartRepeat) {
                    this._swapEndStartRepeatValues(property);
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
            }
            this._isPlaying = true;
            this._isPaused = false;
            this._onStartCallbackFired = false;
            this._isChainStopped = false;
            this._startTime = time !== undefined ? (typeof time === 'string' ? now$1() + parseFloat(time) : time) : now$1();
            this._startTime += this._delayTime;
            this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
            return this;
        };
        Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
            for (var property in _valuesEnd) {
                var startValue = _object[property];
                var startValueIsArray = Array.isArray(startValue);
                var propType = startValueIsArray ? 'array' : typeof startValue;
                var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
                // If `to()` specifies a property that doesn't exist in the source object,
                // we should not set that property in the object
                if (propType === 'undefined' || propType === 'function') {
                    continue;
                }
                // Check if an Array was provided as property value
                if (isInterpolationList) {
                    var endValues = _valuesEnd[property];
                    if (endValues.length === 0) {
                        continue;
                    }
                    // handle an array of relative values
                    endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                    // Create a local copy of the Array with the start value at the front
                    _valuesEnd[property] = [startValue].concat(endValues);
                }
                // handle the deepness of the values
                if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                    _valuesStart[property] = startValueIsArray ? [] : {};
                    // eslint-disable-next-line
                    for (var prop in startValue) {
                        // eslint-disable-next-line
                        // @ts-ignore FIXME?
                        _valuesStart[property][prop] = startValue[prop];
                    }
                    _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
                }
                else {
                    // Save the starting value, but only once.
                    if (typeof _valuesStart[property] === 'undefined') {
                        _valuesStart[property] = startValue;
                    }
                    if (!startValueIsArray) {
                        // eslint-disable-next-line
                        // @ts-ignore FIXME?
                        _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                    }
                    if (isInterpolationList) {
                        // eslint-disable-next-line
                        // @ts-ignore FIXME?
                        _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                    }
                    else {
                        _valuesStartRepeat[property] = _valuesStart[property] || 0;
                    }
                }
            }
        };
        Tween.prototype.stop = function () {
            if (!this._isChainStopped) {
                this._isChainStopped = true;
                this.stopChainedTweens();
            }
            if (!this._isPlaying) {
                return this;
            }
            // eslint-disable-next-line
            this._group && this._group.remove(this);
            this._isPlaying = false;
            this._isPaused = false;
            if (this._onStopCallback) {
                this._onStopCallback(this._object);
            }
            return this;
        };
        Tween.prototype.end = function () {
            this._goToEnd = true;
            this.update(Infinity);
            return this;
        };
        Tween.prototype.pause = function (time) {
            if (time === void 0) { time = now$1(); }
            if (this._isPaused || !this._isPlaying) {
                return this;
            }
            this._isPaused = true;
            this._pauseStart = time;
            // eslint-disable-next-line
            this._group && this._group.remove(this);
            return this;
        };
        Tween.prototype.resume = function (time) {
            if (time === void 0) { time = now$1(); }
            if (!this._isPaused || !this._isPlaying) {
                return this;
            }
            this._isPaused = false;
            this._startTime += time - this._pauseStart;
            this._pauseStart = 0;
            // eslint-disable-next-line
            this._group && this._group.add(this);
            return this;
        };
        Tween.prototype.stopChainedTweens = function () {
            for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                this._chainedTweens[i].stop();
            }
            return this;
        };
        Tween.prototype.group = function (group) {
            this._group = group;
            return this;
        };
        Tween.prototype.delay = function (amount) {
            this._delayTime = amount;
            return this;
        };
        Tween.prototype.repeat = function (times) {
            this._initialRepeat = times;
            this._repeat = times;
            return this;
        };
        Tween.prototype.repeatDelay = function (amount) {
            this._repeatDelayTime = amount;
            return this;
        };
        Tween.prototype.yoyo = function (yoyo) {
            this._yoyo = yoyo;
            return this;
        };
        Tween.prototype.easing = function (easingFunction) {
            this._easingFunction = easingFunction;
            return this;
        };
        Tween.prototype.interpolation = function (interpolationFunction) {
            this._interpolationFunction = interpolationFunction;
            return this;
        };
        Tween.prototype.chain = function () {
            var tweens = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                tweens[_i] = arguments[_i];
            }
            this._chainedTweens = tweens;
            return this;
        };
        Tween.prototype.onStart = function (callback) {
            this._onStartCallback = callback;
            return this;
        };
        Tween.prototype.onUpdate = function (callback) {
            this._onUpdateCallback = callback;
            return this;
        };
        Tween.prototype.onRepeat = function (callback) {
            this._onRepeatCallback = callback;
            return this;
        };
        Tween.prototype.onComplete = function (callback) {
            this._onCompleteCallback = callback;
            return this;
        };
        Tween.prototype.onStop = function (callback) {
            this._onStopCallback = callback;
            return this;
        };
        /**
         * @returns true if the tween is still playing after the update, false
         * otherwise (calling update on a paused tween still returns true because
         * it is still playing, just paused).
         */
        Tween.prototype.update = function (time, autoStart) {
            if (time === void 0) { time = now$1(); }
            if (autoStart === void 0) { autoStart = true; }
            if (this._isPaused)
                return true;
            var property;
            var elapsed;
            var endTime = this._startTime + this._duration;
            if (!this._goToEnd && !this._isPlaying) {
                if (time > endTime)
                    return false;
                if (autoStart)
                    this.start(time);
            }
            this._goToEnd = false;
            if (time < this._startTime) {
                return true;
            }
            if (this._onStartCallbackFired === false) {
                if (this._onStartCallback) {
                    this._onStartCallback(this._object);
                }
                this._onStartCallbackFired = true;
            }
            elapsed = (time - this._startTime) / this._duration;
            elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
            var value = this._easingFunction(elapsed);
            // properties transformations
            this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
            if (this._onUpdateCallback) {
                this._onUpdateCallback(this._object, elapsed);
            }
            if (elapsed === 1) {
                if (this._repeat > 0) {
                    if (isFinite(this._repeat)) {
                        this._repeat--;
                    }
                    // Reassign starting values, restart by making startTime = now
                    for (property in this._valuesStartRepeat) {
                        if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                            this._valuesStartRepeat[property] =
                                // eslint-disable-next-line
                                // @ts-ignore FIXME?
                                this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                        }
                        if (this._yoyo) {
                            this._swapEndStartRepeatValues(property);
                        }
                        this._valuesStart[property] = this._valuesStartRepeat[property];
                    }
                    if (this._yoyo) {
                        this._reversed = !this._reversed;
                    }
                    if (this._repeatDelayTime !== undefined) {
                        this._startTime = time + this._repeatDelayTime;
                    }
                    else {
                        this._startTime = time + this._delayTime;
                    }
                    if (this._onRepeatCallback) {
                        this._onRepeatCallback(this._object);
                    }
                    return true;
                }
                else {
                    if (this._onCompleteCallback) {
                        this._onCompleteCallback(this._object);
                    }
                    for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                        // Make the chained tweens start exactly at the time they should,
                        // even if the `update()` method was called way past the duration of the tween
                        this._chainedTweens[i].start(this._startTime + this._duration);
                    }
                    this._isPlaying = false;
                    return false;
                }
            }
            return true;
        };
        Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
            for (var property in _valuesEnd) {
                // Don't update properties that do not exist in the source object
                if (_valuesStart[property] === undefined) {
                    continue;
                }
                var start = _valuesStart[property] || 0;
                var end = _valuesEnd[property];
                var startIsArray = Array.isArray(_object[property]);
                var endIsArray = Array.isArray(end);
                var isInterpolationList = !startIsArray && endIsArray;
                if (isInterpolationList) {
                    _object[property] = this._interpolationFunction(end, value);
                }
                else if (typeof end === 'object' && end) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    this._updateProperties(_object[property], start, end, value);
                }
                else {
                    // Parses relative end values with start as base (e.g.: +10, -3)
                    end = this._handleRelativeValue(start, end);
                    // Protect against non numeric properties.
                    if (typeof end === 'number') {
                        // eslint-disable-next-line
                        // @ts-ignore FIXME?
                        _object[property] = start + (end - start) * value;
                    }
                }
            }
        };
        Tween.prototype._handleRelativeValue = function (start, end) {
            if (typeof end !== 'string') {
                return end;
            }
            if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                return start + parseFloat(end);
            }
            else {
                return parseFloat(end);
            }
        };
        Tween.prototype._swapEndStartRepeatValues = function (property) {
            var tmp = this._valuesStartRepeat[property];
            var endValue = this._valuesEnd[property];
            if (typeof endValue === 'string') {
                this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
            }
            else {
                this._valuesStartRepeat[property] = this._valuesEnd[property];
            }
            this._valuesEnd[property] = tmp;
        };
        return Tween;
    }());

    var VERSION = '18.6.4';

    /**
     * Tween.js - Licensed under the MIT license
     * https://github.com/tweenjs/tween.js
     * ----------------------------------------------
     *
     * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
     * Thank you all, you're awesome!
     */
    var nextId = Sequence.nextId;
    /**
     * Controlling groups of tweens
     *
     * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
     * In these cases, you may want to create your own smaller groups of tweens.
     */
    var TWEEN = mainGroup;
    // This is the best way to export things in a way that's compatible with both ES
    // Modules and CommonJS, without build hacks, and so as not to break the
    // existing API.
    // https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
    var getAll = TWEEN.getAll.bind(TWEEN);
    var removeAll = TWEEN.removeAll.bind(TWEEN);
    var add = TWEEN.add.bind(TWEEN);
    var remove = TWEEN.remove.bind(TWEEN);
    var update = TWEEN.update.bind(TWEEN);
    var exports$1 = {
        Easing: Easing,
        Group: Group,
        Interpolation: Interpolation,
        now: now$1,
        Sequence: Sequence,
        nextId: nextId,
        Tween: Tween,
        VERSION: VERSION,
        getAll: getAll,
        removeAll: removeAll,
        add: add,
        remove: remove,
        update: update,
    };

    exports.Easing = Easing;
    exports.Group = Group;
    exports.Interpolation = Interpolation;
    exports.Sequence = Sequence;
    exports.Tween = Tween;
    exports.VERSION = VERSION;
    exports.add = add;
    exports.default = exports$1;
    exports.getAll = getAll;
    exports.nextId = nextId;
    exports.now = now$1;
    exports.remove = remove;
    exports.removeAll = removeAll;
    exports.update = update;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


// LevelsData.js
var LevelsData = pc.createScript('levelsData');

LevelsData.attributes.add('difficultyData', {
    title: 'Difficulty Data',
    type: 'json',
    schema: [
        { name: 'minLevel', title: 'Min Level', type: 'number' },
        { name: 'bossLevelDelta', title: 'Boss Level Delta', type: 'number' },
        { name: 'heroSpeed', title: 'Hero Speed', type: 'number' },
    ],
    array: true,
});

LevelsData.attributes.add('Levels', {
    type: 'json', schema: [{
        name: 'Preset',
        type: 'entity',
    }],
    array: true
});

LevelsData.attributes.add('BonusLevels', {
    type: 'json', schema: [{
        name: 'Preset',
        type: 'entity',
    }],
    array: true
});

// initialize code called once per entity
LevelsData.prototype.initialize = function () {
    LevelsData.instance = this;
    this.app.on(Events.OnGetLevel, this.OnGetLevel, this);
    this.app.on(Events.OnGetRandomBonusLevel, this.OnGetRandomBonusLevel, this);
};

LevelsData.prototype.OnGetLevel = function (index) {
    index %= this.Levels.length;

    // console.log(index, this.Levels[index]);
    this.app.fire(Events.OnLoadLevel, this.Levels[index]);
};

LevelsData.prototype.OnGetRandomBonusLevel = function () {
    let index = Math.floor(getRandomArbitrary(0, this.BonusLevels.length));
    this.app.fire(Events.OnLoadLevel, this.BonusLevels[index]);
};


LevelsData.prototype.LoadBonusLevel = function (index) {
    this.app.fire(Events.OnLoadLevel, this.BonusLevels[index]);
};

LevelsData.prototype.update = function (dt) {

};


// PatchContainer.js
var PatchContainer = pc.createScript('patchContainer');
PatchContainer.attributes.add('Patches', {
    type: 'json', schema: [{
        name: 'Patch',
        type: 'entity',
    }, {
        name: 'ID',
        type: 'number',
        enum: [
            { 'RoadFlat': 0 },
            { 'RoadSlide': 1 },
            { 'RoadDoubleSlide': 2 },
            { 'RoadLeftHalf': 3 },
            { 'RoadLeftThird': 4 },
            { 'RoadRightHalf': 5 },
            { 'RoadRightThird': 6 },
            { 'RoadStart_Arena': 7 },
            { 'RoadEnd_Arena': 8 },
            { 'RoadEnd_ArenaBig': 9 },
            { 'RoadMiddle_Arena': 10 },
            { 'RoadFinishSegment': 11 },
            { 'RoadRotatingCircle': 12 },
            { 'RoadPainterCircle': 13 },
            { 'RoadPainterHalf': 14 },
            { 'RoadFlatWall': 15 },
            { 'RoadFlatObstacle': 16 },
            { 'RoadFlatQuarter': 17 },
        ]
    }],
    array: true
});

PatchContainer.prototype.initialize = function () {
    PatchContainer = this;
};

PatchContainer.prototype.GetPatch = function (id) {
    var patch = myFindWhere(this.Patches, { ID: id });
    return patch;
};

PatchContainer.prototype.update = function (dt) {

};


// LevelGenerator.js
var LevelGenerator = pc.createScript('levelGenerator');
LevelGenerator.attributes.add('levelsLimit', { type: 'number', title: 'Levels Limit', default: 9 });
LevelGenerator.attributes.add('PathParent', { type: 'entity' });


// initialize code called once per entity
LevelGenerator.prototype.initialize = function () {
    // console.log("OnLoadLevel ---> Initialized");
    // console.log("OnUnloadLevel ---> Initialized");
    
    LevelGenerator.instance = this;

    this.generatedPatches = [];
    this.app.on(Events.OnLoadLevel, this.OnLoadLevel, this);
    this.app.on(Events.OnUnloadLevel, this.OnUnloadLevel, this);
    this.app.on(Events.OnDebugProgression, this.OnDebugProgression, this);
    this.app.on(Events.OnLevelCompleted, this.OnLevelCompleted, this);
    this.app.on(Events.OnResetLevel, this.OnResetLevel, this);

    this.app.on(Events.OnColorChangedRageMode, this.OnColorChangedRageMode, this);

    this.index = parseInt(this.GetCurrentLevel());
    this.currentTotalLevel = parseInt(this.GetCurrentTotalLevel());

    this.mobs = [];

    setTimeout(() => {
        var isBonusLevel = this.currentTotalLevel % 6 === 0;
        if (isBonusLevel)
            this.app.fire(Events.OnGetRandomBonusLevel);
        else
            this.app.fire(Events.OnGetLevel, this.index);
    }, 500);
};

LevelGenerator.prototype.postInitialize = function () {

};

LevelGenerator.prototype.OnColorChangedRageMode = function (data) {
    // console.log("LevelGenerator.OnColorChangedRageMode ---> ", data);
    for (let i = 0; i < this.mobs.length; i++) {
        var mob = this.mobs[i];
        mob.script.materialChanger.OnColorChangedRageMode(data);
    }
};

LevelGenerator.prototype.OnResetLevel = function () {
    this.app.fire(Events.OnStartGame, false);
    this.app.fire(Events.OnGetLevel, this.index);
    this.app.fire("changeMenuState", MenuManager.States.Home);
};

LevelGenerator.prototype.GetCurrentLevel = function () {
    var level = APIMediator.getStorageItem("currentLevel");

    if (level === null || level < 0) {
        level = 0;
        APIMediator.setStorageItem("currentLevel", level);
    }
    return level;
};

LevelGenerator.prototype.checkForLevelType = function () {
    let levelType = 'Normal';
};

LevelGenerator.prototype.GetCurrentTotalLevel = function () {
    var level = APIMediator.getStorageItem("currentTotalLevel");

    if (level === null || level < 1) {
        level = 1;
        APIMediator.setStorageItem("currentTotalLevel", level);
    }
    return level;
};

LevelGenerator.prototype.loadCustomLevel = function (levelNumber) {
    this.currentTotalLevel = levelNumber;
    this.currentLevel = Math.max(0, levelNumber - 1);
    this.index = this.currentLevel; //pc.math.clamp(this.currentLevel % this.levelsLimit, 0, this.levelsLimit);

    var level = this.index;
    var totalLevel = this.currentTotalLevel;
    var isBonusLevel = this.currentTotalLevel % 6 === 0;

    if (isBonusLevel)
        this.app.fire(Events.OnGetRandomBonusLevel);
    else
        this.app.fire(Events.OnGetLevel, level);

    this.app.fire(Events.OnUpdateLevelNumber, totalLevel);
    this.app.fire(Events.OnStartGame, false);
    this.app.fire("changeMenuState", MenuManager.States.Home);

    APIMediator.setStorageItem("currentLevel", level);
    APIMediator.setStorageItem("currentTotalLevel", totalLevel);
};


LevelGenerator.prototype.loadNextLevel = function () {
    this.currentTotalLevel++;
    this.index = this.currentTotalLevel - 1;// (this.currentTotalLevel - 1) % this.levelsLimit;

    // if (this.index > this.levelsLimit)
    //     this.index = 0;

    this._doLevelLoadingRoutine();
};



LevelGenerator.prototype.loadPreviousLevel = function () {
    this.index -= 2;
    this.currentTotalLevel -= 2;

    if (this.index <= 0)
        this.index = this.levelsLimit - 1;

    this.OnLevelCompleted();
};

LevelGenerator.prototype.OnLevelCompleted = function () {
    this.index++;
    this.currentTotalLevel++;

    // if (this.index > this.levelsLimit)
    //     this.index = 0;

    this._doLevelLoadingRoutine();
};

LevelGenerator.prototype._doLevelLoadingRoutine = function() {
    var level = this.index;
    var totalLevel = this.currentTotalLevel;
    var isBonusLevel = this.currentTotalLevel % 6 === 0;

    if (isBonusLevel)
        this.app.fire(Events.OnGetRandomBonusLevel);
    else
        this.app.fire(Events.OnGetLevel, level);

    this.app.fire(Events.OnUpdateLevelNumber, totalLevel);
    this.app.fire(Events.OnStartGame, false);
    this.app.fire("changeMenuState", MenuManager.States.Home);

    APIMediator.setStorageItem("currentLevel", level);
    APIMediator.setStorageItem("currentTotalLevel", totalLevel);
};

LevelGenerator.prototype.OnDebugProgression = function () {
    this.app.fire(Events.OnLevelCompleted);
};

LevelGenerator.prototype.OnLoadLevel = function (data) {
    this.mobs = [];
    var pos = pc.Vec3.ZERO;

    // console.log(data);

    var colorType = data.Preset.script.levelData.Segments.ColorType;
    var patches = data.Preset.script.levelData.Segments.Patches;
    var collectableData = data.Preset.script.levelData.CollectableData;
    var bossData = data.Preset.script.bossModifier;
    let maxHeroLevel = this.calculateMaxHeroLevel(collectableData, data.Preset.script.levelData.Segments.ColorType);
    var chestData = data.Preset.script.chestModifier;
    let gemsCount = 0;

    for (let i = 0; i < this.generatedPatches.length; i++) {
        let patch = this.generatedPatches[i];
        patch.destroy();
    }

    this.generatedPatches = [];
    for (let i = 0; i < patches.length; i++) {
        let patch = PatchContainer.GetPatch(patches[i]).Patch.clone();
        this.PathParent.addChild(patch);
        patch.setPosition(pos);

        var nextPoint = patch.script.patchObject.PatchNextPos;
        if (nextPoint) {
            pos = nextPoint.getPosition().clone();
        }

        this.generatedPatches.push(patch);
    }

    // Bosses Settings
    let levelsBetweenBigBoss = Settings.biggBossFighting.levelsBetweenBigBoss;
    let isBigBossLevel = this.generatedPatches[this.generatedPatches.length - 1].name === 'RoadEnd_ArenaBig'; //this.currentTotalLevel % levelsBetweenBigBoss === 0;
    let bigBossOffset = Settings.finishTrack.generalSettings.biggBossForwardOffset;
    let miniBossOffset = Settings.finishTrack.generalSettings.miniBossForwardOffset;
    let forwardOffset = isBigBossLevel ? bigBossOffset : miniBossOffset;
    let maxForward = this.generatedPatches[this.generatedPatches.length - 1].getPosition().z + forwardOffset;

    let self = this;
    let count = 0;

    CustomCoroutine.Instance.set(() => {
        for (let i = 0; i < this.generatedPatches.length; i++) {

            if (chestData) {
                if (i === chestData.info.patchIndex) {
                    var chest = ChestContainer.template.clone();
                    chest.enabled = true;
                    let patch = this.generatedPatches[i];
                    patch.script.patchObject.AddChild(chest);
                    chest.script.chestController.prepare(chestData.info);
                    // console.log("chest spawned: ", chest.getPosition());
                }
            }

            for (let j = 0; j < collectableData.length; j++) {
                if (collectableData[j].PatchIndex == i) {
                    for (let k = 0; k < collectableData[j].Placements.length; k++) {

                        var collectable = CollectableContainer.GetCollectable(collectableData[j].CollectableType).clone();
                        let patch = this.generatedPatches[i];
                        patch.script.patchObject.AddChild(collectable);
                        collectable.setLocalPosition(collectableData[j].Placements[k]);

                        if (collectableData[j].CollectableType == CollectableType.MobGreen ||
                            collectableData[j].CollectableType == CollectableType.MobBlue ||
                            collectableData[j].CollectableType == CollectableType.MobYellow ||
                            collectableData[j].CollectableType == CollectableType.MobOrange) {
                            count++;

                            this.mobs.push(collectable);
                        }

                        if (collectableData[j].CollectableType == CollectableType.Gem_Group_1 ||
                            collectableData[j].CollectableType == CollectableType.Gem_Group_2 ||
                            collectableData[j].CollectableType == CollectableType.Gem_Group_3 ||
                            collectableData[j].CollectableType == CollectableType.Gem_Group_4 ||
                            collectableData[j].CollectableType == CollectableType.Gem_Group_5) {

                            gemsCount += collectable.children.length;
                        }

                        if (collectableData[j].CollectableType == CollectableType.Gem) {
                            gemsCount++;
                        }

                        var origin = collectable.getPosition().clone();
                        origin.y = 20;
                        var destination = new pc.Vec3(origin.x, origin.y - 100, origin.z);
                        var result = this.app.systems.rigidbody.raycastAll(origin, destination);
                        for (let l = 0; l < result.length; l++) {
                            if (result[l].entity.tags.has("road")) {
                                var point = result[l].point;
                                collectable.setPosition(point);
                            }
                        }
                    }
                }
            }

            if (bossData) {
                if (i === bossData.info.patchIndex) {
                    let boss;
                    if (isBigBossLevel) {
                        boss = BossContainer.templates.biggBoss.clone();
                        boss.enabled = true;
                        let patch = this.generatedPatches[i];
                        patch.script.patchObject.AddChild(boss);

                        bossData.info.maxHeroLevel = maxHeroLevel;
                        bossData.info.position.z += bigBossOffset * 0.5;

                        boss.script.biggBossController.prepare(bossData.info, this.currentTotalLevel);
                    }
                    else {
                        boss = BossContainer.templates.miniBoss.clone();
                        boss.enabled = true;
                        let patch = this.generatedPatches[i];
                        patch.script.patchObject.AddChild(boss);

                        bossData.info.maxHeroLevel = maxHeroLevel;
                        // bossData.info.position.z = miniBossOffset;

                        boss.script.bossController.prepare(bossData.info, this.currentTotalLevel);
                    }
                }
            }
        }
        // console.log('ABC count: ', count);
        let isBonusLevel = this.currentTotalLevel % 6 === 0;
        let info = {
            maxForward: maxForward,
            initialColorType: colorType,
            mobsCount: maxHeroLevel,
            gemsCount: gemsCount,
            level: this.currentTotalLevel,
            nextLevel: this.currentTotalLevel + 1,
            isBigBossLevel: isBigBossLevel,
            maxHeroLevel: isBonusLevel ? Settings.scale.maxScale / 1.5 : maxHeroLevel,
            isBonusLevel: isBonusLevel,
        };

        // console.log('Level: ' + info.level);
        Settings.pathColor.updateColors(info);

        this.app.fire(Events.OnLevelLoaded, info);
        LevelInfo = info;
    }, 0.25);
};

LevelGenerator.prototype.isPlayerMobColorSame = function (playerColor, mobColor) {
    return (playerColor === ColorType.Green && mobColor === CollectableType.MobGreen) ||
        (playerColor === ColorType.Blue && mobColor === CollectableType.MobBlue) ||
        (playerColor === ColorType.Orange && mobColor === CollectableType.MobOrange) ||
        (playerColor === ColorType.Yellow && mobColor === CollectableType.MobYellow);
};

LevelGenerator.prototype.calculateMaxHeroLevel = function (collectableData, startColor) {
    let color = [];
    let count = 0;
    color.push({ type: startColor, count: 0 });
    let paintersSeriesStarted = false;

    for (let i = 0; i < collectableData.length; i++) {
        let result = JSON.parse(JSON.stringify(this.detectType(collectableData[i].CollectableType)));
        if (result.isPainter) {
            if (paintersSeriesStarted) {
                color.push({ type: result.color, count: 0 });
                // console.log('ABC paintersSeriesStarted: ', JSON.stringify(color));
            }
            else {
                // if there were two color changing painters then we will use lesser mobs count
                // console.log('1234 Colors: ', color);
                let min = color[0].count;
                color.forEach((element) => { if (element.count < min) min = element.count; });
                // console.log('1234 Before Count: ', count);
                count += min;
                // console.log('1234 After Count: ', count);
                // // console.log('ABC Painter: ', min.toString());
                color = [];
                color.push({ type: result.color, count: 0 });
            }

            paintersSeriesStarted = true;
        }
        else if (result.isMob) {
            // console.log('ABC B Mob: ', JSON.stringify(color));

            for (let j = 0; j < color.length; j++) {

                if (this.isPlayerMobColorSame(color[j].type, collectableData[i].CollectableType)) {
                    // if two mobs of same colors have same Z then we will only chose one
                    let takenZAxes = [], possibleCollectables = 0;
                    collectableData[i].Placements.forEach((element) => {
                        let index = takenZAxes.findIndex((ele) => { return ele === element.z; });
                        if (index === -1) {
                            takenZAxes.push(element.z);
                            possibleCollectables++;
                        }
                    });
                    color[j].count += possibleCollectables;
                }
            }

            // console.log('ABC A Mob: ', JSON.stringify(color));
            paintersSeriesStarted = false;
        }
        else
            paintersSeriesStarted = false;
    }

    let min = color[0].count;
    // console.log('1234 Colors: ', color);
    color.forEach((element) => { if (element.count < min) min = element.count; });
    // console.log('1234 Before Count: ', count);
    count += min;
    // console.log('1234 After Count: ', count);
    color = [];

    // console.log('ABC count: ', count);
    return count;
};

LevelGenerator.prototype.detectType = function (type) {
    let obj = { isPainter: false, isMob: false };
    if (type === CollectableType.PainterGreen || type === CollectableType.PainterGreenHalf) {
        obj.isPainter = true;
        obj.color = ColorType.Green;
    }
    else if (type === CollectableType.PainterOrange || type === CollectableType.PainterOrangeHalf) {
        obj.isPainter = true;
        obj.color = ColorType.Orange;
    }
    else if (type === CollectableType.PainterYellow || type === CollectableType.PainterYellowHalf) {
        obj.isPainter = true;
        obj.color = ColorType.Yellow;
    }
    else if (type === CollectableType.PainterBlue || type === CollectableType.PainterBlueHalf) {
        obj.isPainter = true;
        obj.color = ColorType.Blue;
    }

    obj.isMob = type === CollectableType.MobBlue || type === CollectableType.MobGreen ||
        type === CollectableType.MobYellow || type === CollectableType.MobOrange;

    return obj;
};

LevelGenerator.prototype.OnUnloadLevel = function () {
    // console.log("OnUnloadLevel ---> Received");
};

// update code called every frame
LevelGenerator.prototype.update = function (dt) {

    // if (this.app.keyboard.wasPressed(pc.KEY_ESCAPE)) {
    //     this.app.fire(Events.OnResetLevel);
    // }

    // if (this.app.keyboard.wasPressed(pc.KEY_N)) {
    //     this.app.fire(Events.OnDebugProgression, this.index);
    // }

    // if (this.app.keyboard.wasPressed(pc.KEY_Z)) {
    //     this.loadPreviousLevel();
    // }

    // if (this.app.keyboard.wasPressed(pc.KEY_BACKSPACE)) {
    //     this.index = -1;
    //     this.currentTotalLevel = 0;
    //     APIMediator.setStorageItem("currentLevel", this.index);
    //     APIMediator.setStorageItem("currentTotalLevel", this.currentTotalLevel);
    //     this.app.fire(Events.OnDebugProgression, this.index);
    // }
};


// PatchObject.js
var PatchObject = pc.createScript('patchObject');

PatchObject.attributes.add('label', { type: 'entity', title: 'Label' });
PatchObject.attributes.add('PatchNextPos', { type: 'entity' });
PatchObject.attributes.add('PlacementsParent', { type: 'entity' });

// initialize code called once per entity
PatchObject.prototype.initialize = function () {

    this.entity.on('setMul', this.setMultiplier, this);
    this.entity.on('setMat', this.setMaterial, this);
    this.entity.on('setBoss', this.setBoss, this);
    this.entity.on('setColor', this.setColor, this);

    this.onEnable();
    this.on('enable', this.onEnable, this);
};

PatchObject.prototype.onEnable = function () {
    this.boss = undefined;
    this.passedColor = undefined;

    if (this.label)
        this.label.enabled = false;
};

// update code called every frame
PatchObject.prototype.update = function (dt) {
    if (!this.boss || !this.boss.script) return;

    // console.log(this.entity.name, ' ', this.boss.getLocalPosition().z, ' > ', this.entity.getLocalPosition().z, this.passedColor);
    if (this.boss.script.bossController.posReference.getPosition().z + 4 > this.entity.getPosition().z && this.passedColor) {
        // console.log(this.entity.name, 'this.passedColor');
        this.entity.render.meshInstances[1].material.diffuse.set(this.passedColor.r, this.passedColor.g, this.passedColor.b);
        this.entity.render.meshInstances[1].material.update();
        this.passedColor = undefined;
        this.boss = undefined;
        this.app.fire('Track:CurrentMultiplier', this.multiplier);
    }
};

PatchObject.prototype.setMultiplier = function (mul) {
    if (!this.label) return;

    this.label.enabled = mul ? true : false;

    if (this.label.enabled) {
        this.multiplier = mul;
        this.label.element.text = `X${mul.toFixed(1)}`;
    }
};

PatchObject.prototype.setMaterial = function (mat) {
    this.entity.render.meshInstances[1].material = mat;
    this.entity.render.meshInstances[1].material.update();
};

PatchObject.prototype.setColor = function (color) {
    // console.log('setColor: ', color);
    this.passedColor = color;
};

PatchObject.prototype.setBoss = function (boss) {
    this.boss = boss;
};

PatchObject.prototype.AddChild = function (child) {
    if (this.PlacementsParent) {
        child.reparent(this.PlacementsParent);
    } else {
        child.reparent(this.entity);
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// PatchObject.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// EasyTween.js
var Tween = pc.createScript('tween');

Tween.attributes.add('tweens', {
    type: 'json',
    schema: [
        {
            name: 'autoPlay',
            title: 'Autoplay',
            description: 'Play tween immediately.',
            type: 'boolean',
            default: false
        }, {
            name: 'event',
            title: 'Trigger Event',
            description: 'Play tween on the specified event name. This event must be fired on the global application object (e.g. this.app.fire(\'eventname\');).',
            type: 'string'
        }, {
            name: 'path',
            title: 'Path',
            description: 'The path from the entity to the property. e.g. \'light.color\', \'camera.fov\' or \'script.vehicle.speed\'.',
            type: 'string'
        }, {
            name: 'relative',
            title: 'Relative',
            description: 'If checked, the start value is ingored and the end value will be the relative offset from the property\'s current value.',
            type: 'boolean',
            default: false
        }, {
            name: 'start',
            title: 'Start',
            type: 'vec4'
        }, {
            name: 'end',
            title: 'End',
            type: 'vec4'
        }, {
            name: 'easingFunction',
            title: 'Easing Function',
            type: 'number',
            enum: [
                { 'Linear': 0 },
                { 'Quadratic': 1 },
                { 'Cubic': 2 },
                { 'Quartic': 3 },
                { 'Quintic': 4 },
                { 'Sinusoidal': 5 },
                { 'Exponential': 6 },
                { 'Circular': 7 },
                { 'Elastic': 8 },
                { 'Back': 9 },
                { 'Bounce': 10 }
            ]
        }, {
            name: 'easingType',
            title: 'Easing Type',
            type: 'number',
            enum: [
                { 'In': 0 },
                { 'Out': 1 },
                { 'InOut': 2 }
            ]
        }, {
            name: 'duration',
            title: 'Duration',
            description: 'Time to execute the tween in milliseconds. Defaults to 1000.',
            type: 'number',
            default: 1000
        }, {
            name: 'delay',
            title: 'Delay',
            description: 'Time to wait in milliseconds after receiving the trigger event before executing the tween. Defaults to 0.',
            type: 'number',
            default: 0
        }, {
            name: 'repeat',
            title: 'Repeat',
            description: 'The number of times the tween should be repeated after the initial playback. Defaults to 0.',
            type: 'number',
            default: 0
        }, {
            name: 'repeatDelay',
            title: 'Repeat Delay',
            description: 'Time to wait in milliseconds before executing each repeat of the tween. Defaults to 0.',
            type: 'number',
            default: 0
        }, {
            name: 'yoyo',
            title: 'Yoyo',
            description: 'This function only has effect if used along with repeat. When active, the behaviour of the tween will be like a yoyo, i.e. it will bounce to and from the start and end values, instead of just repeating the same sequence from the beginning. Defaults to false.',
            type: 'boolean',
            default: false
        }, {
            name: 'startEvent',
            title: 'Start Event',
            description: 'Executed right before the tween starts animating, after any delay time specified by the delay method. This will be executed only once per tween, i.e. it will not be run when the tween is repeated via repeat(). It is great for synchronising to other events or triggering actions you want to happen when a tween starts.',
            type: 'string'
        }, {
            name: 'stopEvent',
            title: 'Stop Event',
            description: 'Executed when a tween is explicitly stopped via stop(), but not when it is completed normally.',
            type: 'string'
        }, {
            name: 'updateEvent',
            title: 'Update Event',
            description: 'Executed each time the tween is updated, after the values have been actually updated.',
            type: 'string'
        }, {
            name: 'completeEvent',
            title: 'Complete Event',
            description: 'Executed when a tween is finished normally (i.e. not stopped).',
            type: 'string'
        }, {
            name: 'repeatEvent',
            title: 'Repeat Event',
            description: 'Executed whenever a tween has just finished one repetition and will begin another.',
            type: 'string'
        }
    ],
    array: true
});

// initialize code called once per entity
Tween.prototype.initialize = function () {
    var app = this.app;
    var i;

    this.tweenInstances = [];
    this.tweenCallbacks = [];

    var makeStartCallback = function (i) {
        return function () {
            this.start(i);
        };
    };

    for (i = 0; i < this.tweens.length; i++) {
        var tween = this.tweens[i];
        if (tween.autoPlay) {
            this.start(i);
        }
        if (tween.event.length > 0) {
            this.tweenCallbacks[i] = {
                event: tween.event,
                cb: makeStartCallback(i)
            };
            app.on(this.tweenCallbacks[i].event, this.tweenCallbacks[i].cb, this);
        }
    }

    this.on('enable', function () {
        for (i = 0; i < this.tweens.length; i++) {
            if (this.tweenInstances[i] && this.tweenInstances[i].isPaused()) {
                this.tweenInstances[i].resume();
            }
        }
    });

    this.on('disable', function () {
        for (i = 0; i < this.tweens.length; i++) {
            if (this.tweenInstances[i]) {
                this.tweenInstances[i].pause();
            }
        }
    });

    this.on('attr', function (name, value, prev) {
        for (i = 0; i < this.tweenCallbacks.length; i++) {
            if (this.tweenCallbacks[i]) {
                app.off(this.tweenCallbacks[i].event, this.tweenCallbacks[i].cb, this);
                this.tweenCallbacks[i] = null;
            }
        }

        for (i = 0; i < this.tweens.length; i++) {
            var tween = this.tweens[i];
            if (tween.event.length > 0) {
                this.tweenCallbacks[i] = {
                    event: tween.event,
                    cb: makeStartCallback(i)
                };
                app.on(this.tweenCallbacks[i].event, this.tweenCallbacks[i].cb, this);
            }
        }
    });
};

Tween.prototype.start = function (idx) {
    var app = this.app;
    var tween = this.tweens[idx];

    var easingTypes = ['In', 'Out', 'InOut'];
    var easingFuncs = ['Linear', 'Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce'];

    var easingFunc;
    if (tween.easingFunction === 0) {
        easingFunc = TWEEN.Easing[easingFuncs[tween.easingFunction]].None;
    } else {
        easingFunc = TWEEN.Easing[easingFuncs[tween.easingFunction]][easingTypes[tween.easingType]];
    }

    var tweenInstances = this.tweenInstances;
    if (tweenInstances[idx]) {
        tweenInstances[idx].stop();
    }

    var pathSegments = tween.path.split('.');
    var propertyOwner = this.entity;
    for (i = 0; i < pathSegments.length - 1; i++) {
        propertyOwner = propertyOwner[pathSegments[i]];
    }

    var propertyName = pathSegments[pathSegments.length - 1];
    var property = propertyOwner[propertyName];

    var startValue, endValue;
    var isNumber = typeof property === 'number';
    var start = tween.start;
    var end = tween.end;
    if (isNumber) {
        startValue = { x: start.x };
        endValue = { x: end.x };
    } else if (property instanceof pc.Vec2) {
        startValue = new pc.Vec2(start.x, start.y);
        endValue = new pc.Vec2(end.x, end.y);
    } else if (property instanceof pc.Vec3) {
        startValue = new pc.Vec3(start.x, start.y, start.z);
        endValue = new pc.Vec3(end.x, end.y, end.z);
    } else if (property instanceof pc.Vec4) {
        startValue = start.clone();
        endValue = end.clone();
    } else if (property instanceof pc.Color) {
        startValue = new pc.Color(start.x, start.y, start.z, start.w);
        endValue = new pc.Color(end.x, end.y, end.z, end.w);
    } else {
        console.error('ERROR: tween - specified property must be a number, vec2, vec3, vec4 or color');
        return;
    }

    propertyOwner[propertyName] = isNumber ? startValue.x : startValue;

    switch (propertyName) {
        case 'localPosition':
            propertyOwner.setLocalPosition(startValue);
            break;
        case 'localEulerAngles':
            propertyOwner.setLocalEulerAngles(startValue);
            break;
        case 'localScale':
            propertyOwner.setLocalScale(startValue);
            break;
        case 'position':
            propertyOwner.setPosition(startValue);
            break;
        case 'eulerAngles':
            propertyOwner.setEulerAngles(startValue);
            break;
    }

    if (propertyOwner instanceof pc.Material) {
        propertyOwner.update();
    }

    tweenInstances[idx] = new TWEEN.Tween(startValue)
        .to(endValue, tween.duration)
        .easing(easingFunc)
        .onStart(function (obj) {
            if (tween.startEvent !== '') {
                app.fire(tween.startEvent);
            }
        })
        .onStop(function (obj) {
            if (tween.stopEvent !== '') {
                app.fire(tween.stopEvent);
            }
            tweenInstances[idx] = null;
        })
        .onUpdate(function (obj) {
            propertyOwner[propertyName] = isNumber ? obj.x : obj;

            switch (propertyName) {
                case 'localPosition':
                    propertyOwner.setLocalPosition(obj);
                    break;
                case 'localEulerAngles':
                    propertyOwner.setLocalEulerAngles(obj);
                    break;
                case 'localScale':
                    propertyOwner.setLocalScale(obj);
                    break;
                case 'position':
                    propertyOwner.setPosition(obj);
                    break;
                case 'eulerAngles':
                    propertyOwner.setEulerAngles(obj);
                    break;
            }

            if (propertyOwner instanceof pc.Material) {
                propertyOwner.update();
            }

            if (tween.updateEvent !== '') {
                app.fire(tween.updateEvent);
            }
        })
        .onComplete(function (obj) {
            if (tween.completeEvent !== '') {
                app.fire(tween.completeEvent);
            }
            tweenInstances[idx] = null;
        })
        .onRepeat(function (obj) {
            if (tween.repeatEvent !== '') {
                app.fire(tween.repeatEvent);
            }
        })
        .repeat(tween.repeat)
        .repeatDelay(tween.repeatDelay)
        .yoyo(tween.yoyo)
        .delay(tween.delay)
        .start();
};

// We have to update the tween.js engine somewhere once a frame...
var app = pc.Application.getApplication();
if (app) {
    app.on('update', function (dt) {
        TWEEN.update();
    });
}


// ios-select-fix-patch.js
(function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML =
        "canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}" +
        "body{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0}";
})();

// instancer-lite.js
var UranusInstancerLite = pc.createScript('uranusInstancerLite');

UranusInstancerLite.attributes.add('frustumCulling', {
    type: 'boolean',
    default: false,
    title: 'Frustum Culling',
    description: "Controls the culling of instances against the camera frustum (frustum culling needs to enabled on each camera component). If false all instances will be rendered regardless of their visibility. Changing this setting requires application reload."
});

UranusInstancerLite.attributes.add('cloneMaterials', {
    type: 'boolean',
    default: true,
    title: 'Clone Materials',
    description: "If selected all instances will use a clone of the original model material. This is useful when the original material is being used in non instanced models and otherwise it will produce render artifacts. Changing this setting requires application reload."
});

UranusInstancerLite.attributes.add('disableShadows', {
    type: 'boolean',
    default: false,
    title: 'Disable Shadows',
    description: "If selected no shadows buffers will be created (optimization). Requires app reload."
});

UranusInstancerLite.attributes.add('disableTransparent', {
    type: 'boolean',
    default: true,
    title: 'Disable Transparent',
    description: "If selected transparent mesh instances will not be instanced."
});

UranusInstancerLite.attributes.add('excludeTag', {
    type: 'string',
    default: 'INSTANCING:Disable',
    title: 'Exclude Tag',
    description: "The tag that can be used on entities to exclude them from instancing."
});

UranusInstancerLite.attributes.add('excludeLayers', {
    type: 'string',
    array: true,
    default: ['Depth', 'Skybox', 'Immediate', 'UI'],
    title: 'Exclude Layers',
    description: 'Mesh instances rendered in these layers won\'t be instanced.'
});

// initialize code called once per entity
UranusInstancerLite.prototype.initialize = function () {

    UranusInstancerLite.api = this;

    // --- variables
    this.payloads = undefined;

    this.vec = new pc.Vec3();
    this.vec2 = new pc.Vec3();
    this.quat = new pc.Quat();
    this.matrix = new pc.Mat4();

    // --- execute
    this.prepare();

    // TODO find a more elegant way to execute after other scripts have been prepared
    window.setTimeout(() => this.onState(true), 0);

    // --- events
    this.on('state', this.onState, this);

    this.on('attr:disableShadows', this.onDisableShadows, this);
};

UranusInstancerLite.prototype.prepare = function () {

    // --- override PC engine
    this.overrideEngine();

    // --- set initial data
    this.payloads = {};

    // --- check if we need an update loop
    if (!this.frustumCulling && this.cloneMaterials) {
        this.app.on('update', this.onUpdate, this);
    }
};

UranusInstancerLite.prototype.onState = function (state) {

    // --- with this trick, on start, we re-trigger all mesh instances to get added into layers to we can track them
    if (state) {
        const composition = this.app.scene.layers;
        const layers = composition.layerList;

        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i];

            if (this.isLayerValid(layer) === false) continue;

            // -- process existing mesh instances
            const opaqueMeshInstances = [];
            layer.opaqueMeshInstances.forEach(o => opaqueMeshInstances.push(o));

            const transparentMeshInstances = layer.transparentMeshInstances;

            if (!this.disableTransparent) {
                layer.transparentMeshInstances.forEach(o => transparentMeshInstances.push(o));
            }

            UranusInstancerLite.removeMeshInstancesFunc.apply(layer, [opaqueMeshInstances]);
            layer.addMeshInstances(opaqueMeshInstances);

            if (!this.disableTransparent) {
                UranusInstancerLite.removeMeshInstancesFunc.apply(layer, [transparentMeshInstances]);
                layer.addMeshInstances(transparentMeshInstances);
            }
        }

    } else {
        // --- clear all payloads if we are disabling instancing
        for (let id in this.payloads) {

            const payload = this.payloads[id];
            const meshInstances = payload.refMeshInstances;
            const layer = payload.layer;

            this.clearPayload(payload);

            layer.addMeshInstances(meshInstances);
        }
        this.payloads = {};
    }
};

UranusInstancerLite.prototype.onDisableShadows = function (value) {

    if (this.enabled) {
        this.enabled = false;
        this.enabled = true;
    }
};

UranusInstancerLite.prototype.setShadows = function (state) {
    this.disableShadows = !state;
};

UranusInstancerLite.prototype.isLayerValid = function (layer) {
    return this.excludeLayers.indexOf(layer.name) === -1;
};

UranusInstancerLite.prototype.getPayloadId = function (meshInstance, layer, castShadow, prevMaterial) {
    // Key definition:
    // Bit
    // 27 - 31 : layer
    // 26      : shadowcaster
    // 13 - 25 : Mesh ID
    // 0 - 12   : Material ID
    const material = prevMaterial ? prevMaterial : meshInstance.material;

    return ((layer.id & 0x0f) << 27) |
        ((castShadow ? 1 : 0) << 26) |
        ((meshInstance.mesh.id & 0x1ff) << 13) |
        ((material.id & 0x1ff) << 0);
    //return `${layer.id}_${castShadow ? '1' : '0'}_${meshInstance.mesh.id}_${material.id}`;
};

UranusInstancerLite.prototype.getMeshInstanceEntity = function (meshInstance) {

    // --- find referenced node, if available
    let entity = meshInstance.node;

    // --- support for legacy model component
    if (entity instanceof pc.Entity === false) {

        while (entity instanceof pc.Entity === false && entity.parent) {
            entity = entity.parent;
        }

        // --- we don't support nodes not included in the hierarchy
        if (entity instanceof pc.Entity === false) return;
    }

    return entity;
};

UranusInstancerLite.prototype.addMeshInstance = function (meshInstance, layer, skipShadowCasters, onlyShadows) {

    // --- we don't parse mesh instances with no material or skinned meshes
    if (!meshInstance.material || meshInstance.mesh.skin) return false;

    // --- check conditions that can skip this meshinstance
    if (meshInstance.node.name === 'uranus-instancer-payload') return false;

    if (this.disableTransparent && meshInstance.material.blendType !== pc.BLEND_NONE) return false;

    // --- find referenced entity && node
    const entity = this.getMeshInstanceEntity(meshInstance);

    if (!entity) return false;

    const node = meshInstance.node !== entity ? meshInstance.node : entity;

    // --- check conditions that can skip this meshinstance
    if (entity.tags.has(this.excludeTag)) return false;

    // --- if model/render component is using batching or it's not a valid component, we skip
    const component = entity.render ? entity.render : entity.model;

    if (!component || (component && component.batchGroupId > -1)) return false;

    // --- add to a payload
    if (!onlyShadows) {
        this.addToPayload(entity, node, meshInstance, layer, false);
    }

    // --- check if we are adding a shadow mesh instance
    if (!this.disableShadows && !skipShadowCasters && meshInstance.castShadow) {
        this.addToPayload(entity, node, meshInstance, layer, true);
    }

    // --- add property watchers (e.g. change of mesh instance material)
    this.overrideMeshInstance(meshInstance, () => {

        this.removeFromPayload(meshInstance, layer, false, null);
        this.removeFromPayload(meshInstance, layer, true, null);

        // --- add to a payload
        if (!onlyShadows) {
            this.addToPayload(entity, node, meshInstance, layer, false);
        }

        // --- check if we are adding a shadow mesh instance
        if (!this.disableShadows && !skipShadowCasters && meshInstance.castShadow) {
            this.addToPayload(entity, node, meshInstance, layer, true);
        }
    });

    return true;
};

UranusInstancerLite.prototype.addToPayload = function (entity, node, meshInstance, layer, castShadow) {

    // --- find unique payloadId used to group the instances
    const payloadId = this.getPayloadId(meshInstance, layer, castShadow);

    // --- check if we have a payload, if not spawn a new one
    let payload = this.payloads[payloadId];

    if (!payload) {
        payload = this.createPayload(payloadId, meshInstance, layer, castShadow);
    } else {
        // --- check if mesh instance already exists
        if (payload.refMeshInstances.indexOf(meshInstance) > -1) return payload;
    }

    // --- add instance to payload
    // --- all properties are commented out so only the necessary ones are filled to reduce memory usage
    const instance = {
        // entity,
        // meshInstance: meshInstance,
        // node: node,
        // refInstance: undefined
    };

    // --- check if we've received instanced data only
    instance.entity = entity;
    payload.refMeshInstances.push(meshInstance);

    // --- set mesh instance reference for later removal
    meshInstance.uranusPayloadMaterial = meshInstance.material;

    instance.meshInstance = meshInstance;
    instance.node = node;

    payload.instances.push(instance);

    // --- resize payload buffer
    this.updateVertexBuffer(payload, true);

    // --- if culling is disabled we need to update the buffer here
    if (!this.frustumCulling) this.isMeshInstanceVisible(null, payload);

    return payload;
};

UranusInstancerLite.prototype.removeMeshInstance = function (meshInstance, layer, skipShadowCasters, onlyShadows) {

    // --- we don't parse mesh instances with skinned meshes
    if (meshInstance.mesh.skin) return false;

    // --- check if it's a payload mesh instance
    if (meshInstance.node.name === 'uranus-instancer-payload') return false;

    // --- remove from payload
    let success = false;
    if (!onlyShadows) {
        success = this.removeFromPayload(meshInstance, layer, false);
    }

    // --- check if we are removing from shadows payload
    if (!this.skipShadowCasters && !skipShadowCasters) {
        success = this.removeFromPayload(meshInstance, layer, true);
    }

    this.overrideMeshInstance(meshInstance);

    return success;
};

UranusInstancerLite.prototype.removeFromPayload = function (meshInstance, layer, castShadow) {

    const payloadIdMaterial = meshInstance.uranusPayloadMaterial ? meshInstance.uranusPayloadMaterial : meshInstance.material;

    if (!payloadIdMaterial) return false;

    // --- find unique payloadId used to group the instances
    const payloadId = this.getPayloadId(meshInstance, layer, castShadow, payloadIdMaterial);

    const payload = this.payloads[payloadId];

    if (!payload) return false;

    if (payload.refMeshInstances.length > 0) {

        // --- find and remove mesh instance from payload
        const index = payload.refMeshInstances.indexOf(meshInstance);

        if (index === -1) {
            return false;
        }

        // --- remove from payload
        payload.instances.splice(index, 1);
        payload.refMeshInstances.splice(index, 1);
    }

    // --- check if payload is empty to remove
    if (payload.instances.length === 0) {
        this.clearPayload(payload);

        delete this.payloads[payloadId];
    } else {
        // --- resize payload buffer
        this.updateVertexBuffer(payload, true);

        // --- if culling is disabled we need to update the buffer here
        if (!this.frustumCulling) this.isMeshInstanceVisible(null, payload);
    }
};

UranusInstancerLite.prototype.clearPayload = function (payload) {

    payload.vertexBuffer.destroy();

    if (payload.shadowCaster) {
        payload.layer.removeShadowCasters([payload.meshInstance]);
    } else {
        payload.layer.removeMeshInstances([payload.meshInstance], true);
    }

    const material = payload.refMaterial;

    if (material) {
        material.onUpdateShader = function (options) {
            options.useInstancing = false;
            return options;
        };
        material.update();

        if (this.cloneMaterials) payload.meshInstance.material.destroy();
    }
};

UranusInstancerLite.prototype.updateVertexBuffer = function (payload, reset, visibleCount) {

    let instancesCount;
    if (visibleCount !== undefined) {
        instancesCount = visibleCount;
    } else {
        instancesCount = payload.instances.length;
    }

    const vertexBuffer = payload.vertexBuffer;
    const format = vertexBuffer.format;
    vertexBuffer.numBytes = format.verticesByteSize ? format.verticesByteSize : format.size * instancesCount;

    if (reset || !vertexBuffer.originalStorage) {
        vertexBuffer.originalStorage = new Float32Array(instancesCount * 16);
        vertexBuffer.setData(vertexBuffer.originalStorage);
    } else {
        const bufferArray = vertexBuffer.originalStorage.subarray(0, instancesCount * 16);
        vertexBuffer.setData(bufferArray);
    }

    payload.meshInstance.instancingData.count = instancesCount;
    vertexBuffer.numVertices = instancesCount;
};

UranusInstancerLite.prototype.createPayload = function (payloadId, refMeshInstance, layer, castShadow) {

    // --- prepare the material
    const material = this.getPayloadMaterial(refMeshInstance.material);

    // --- prepare mesh instance
    const meshInstance = new pc.MeshInstance(refMeshInstance.mesh, material, new pc.GraphNode('uranus-instancer-payload'));
    meshInstance.pick = false;
    meshInstance.castShadow = castShadow;
    meshInstance.aabb.center.copy(refMeshInstance.aabb.center);
    meshInstance.aabb.halfExtents.copy(refMeshInstance.aabb.halfExtents);

    // --- add mesh instance to layer
    if (castShadow) {
        layer.addShadowCasters([meshInstance]);
    } else {
        layer.addMeshInstances([meshInstance], true);
    }

    // --- create static vertex buffer containing the matrices
    const vertexBuffer = new pc.VertexBuffer(
        this.app.graphicsDevice,
        pc.VertexFormat.defaultInstancingFormat,
        0,
        pc.BUFFER_DYNAMIC,
        new Float32Array()
    );
    meshInstance.setInstancing(vertexBuffer);

    // --- payload object
    const payload = {
        id: payloadId,
        instances: [],
        layer: layer,
        meshInstance: meshInstance,
        refMaterial: refMeshInstance.material, // use dirty & copy to handle material updates
        refMeshInstances: [],
        shadowCaster: castShadow,
        vertexBuffer: vertexBuffer
    };

    if (payload.shadowCaster) {
        payload.shouldUpdateShadows = true;
    }

    // --- custom visibility function used for culling
    this.setPayloadCulling(this.frustumCulling, payload);

    this.payloads[payloadId] = payload;

    return payload;
};

UranusInstancerLite.prototype.setPayloadCulling = function (state, payload) {

    if (state) {
        payload.meshInstance.cull = true; // we set it here since enabling instancing seems to turn it off
        payload.meshInstance.isVisibleFunc = (camera) => this.isMeshInstanceVisible(camera, payload);
    } else {
        payload.meshInstance.cull = false;
        delete payload.meshInstance.isVisibleFunc;
    }
};

UranusInstancerLite.prototype.isMeshInstanceVisible = function (camera, payload) {
    this.updatePayload(payload, camera);

    // --- if it's a shadowcaster, we need to calculate the AABB of all visible shadow casters
    if (payload.shadowCaster && payload.shouldUpdateShadows) {

        let emptyAabb = true;
        const visibleSceneAabb = payload.meshInstance.aabb;

        const visibleCasters = payload.instances;

        for (let i = 0; i < visibleCasters.length; i++) {
            const instance = visibleCasters[i];
            if (instance.cell) continue;

            const meshInstance = instance.meshInstance;

            if (meshInstance.visibleThisFrame === 0) continue;

            if (emptyAabb) {
                emptyAabb = false;
                visibleSceneAabb.copy(meshInstance.aabb);
            } else {
                visibleSceneAabb.add(meshInstance.aabb);
            }
        }
    }

    return true;
};

UranusInstancerLite.prototype.getPayloadMaterial = function (refMaterial) {

    const shouldClone = this.cloneMaterials;

    const material = shouldClone ? refMaterial.clone() : refMaterial;

    material.onUpdateShader = function (options) {
        options.useInstancing = true;
        return options;
    };
    material.update();

    // --- broadcast the event to the app
    if (shouldClone) {
        this.app.fire('UranusInstancer:materialCloned', material);
    }

    return material;
};

UranusInstancerLite.prototype.onUpdate = function () {

    const payloads = this.payloads;

    if (!payloads || !this.cloneMaterials) return;

    for (let payloadId in payloads) {
        this.updatePayload(payloads[payloadId]);
    }
};

UranusInstancerLite.prototype.updatePayload = function (payload, camera) {

    // --- update instances
    let matrixIndex = 0;

    const instances = payload.instances;

    for (let i = 0; i < instances.length; i++) {
        const instance = instances[i];

        matrixIndex = this.updateInstance(instance, payload, matrixIndex, camera);
    }


    const visibleCount = matrixIndex / 16;

    this.updateVertexBuffer(payload, false, visibleCount);

    if (this.cloneMaterials) this.checkPayloadMaterial(payload);
};

UranusInstancerLite.prototype.checkPayloadMaterial = function (payload) {

    // --- update material, if required
    const refMeshInstance = payload.refMeshInstances[0];
    if (!refMeshInstance) return;

    //const hasMaterialChanged = refMeshInstance.material !== payload.meshInstance.payload;
    const hasMaterialChanged = refMeshInstance.material !== payload.refMaterial;

    if (hasMaterialChanged) {
        payload.refMaterial = refMeshInstance.material;
    }

    const refMaterial = payload.refMaterial;

    if (refMaterial && (refMaterial.dirty || hasMaterialChanged)) {

        // --- TODO avoid cloning the material
        const material = this.getPayloadMaterial(refMaterial);
        payload.meshInstance.material = material;

        this.app.once('postrender', function () {
            payload.refMaterial.dirty = false;
        }, this);
    }
};

UranusInstancerLite.prototype.updateInstance = function (instance, payload, matrixIndex, camera) {

    // --- check if instance is visible/requires rendering
    if (camera) {

        const isVisible = this.cullInstance(instance, payload, camera);
        if (!isVisible) return matrixIndex;
    }

    // --- update vertex buffer storage
    const matrices = payload.vertexBuffer.originalStorage;
    const data = instance.data ? instance.data : instance.node.getWorldTransform().data;

    // copy matrix elements into array of floats
    for (let m = 0; m < 16; m++) {
        matrices[matrixIndex++] = data[m];
    }

    return matrixIndex;
};

UranusInstancerLite.prototype.cullInstance = function (instance, payload, camera) {

    // --- check frustum culling
    const meshInstance = instance.meshInstance;

    if (instance.data) meshInstance.aabb.center.copy(instance.cullPosition);

    let isVisible = meshInstance._isVisible(camera);
    meshInstance.visibleThisFrame = isVisible;

    return isVisible > 0;
};

UranusInstancerLite.prototype.overrideEngine = function () {
    const addMeshInstancesFunc = pc.Layer.prototype.addMeshInstances;

    pc.Layer.prototype.addMeshInstances = function (origMeshInstances, skipShadowCasters) {

        if (UranusInstancerLite.api && UranusInstancerLite.api.enabled && UranusInstancerLite.api.isLayerValid(this)) {

            let meshInstances = [];

            origMeshInstances.forEach(meshInstance => {

                const success = UranusInstancerLite.api.addMeshInstance(meshInstance, layer = this, skipShadowCasters, false);

                if (!success) {
                    meshInstances.push(meshInstance);
                }
            });

            arguments[0] = meshInstances;

            addMeshInstancesFunc.apply(this, arguments);

        } else {
            addMeshInstancesFunc.apply(this, arguments);
        }
    };

    const removeMeshInstancesFunc = pc.Layer.prototype.removeMeshInstances;
    UranusInstancerLite.removeMeshInstancesFunc = removeMeshInstancesFunc;

    pc.Layer.prototype.removeMeshInstances = function (origMeshInstances, skipShadowCasters) {

        if (UranusInstancerLite.api && UranusInstancerLite.api.enabled && UranusInstancerLite.api.isLayerValid(this)) {

            let meshInstances = [];

            origMeshInstances.forEach(meshInstance => {

                const success = UranusInstancerLite.api.removeMeshInstance(meshInstance, layer = this, skipShadowCasters, false);

                if (!success) {
                    meshInstances.push(meshInstance);
                }
            });

            arguments[0] = meshInstances;

            removeMeshInstancesFunc.apply(this, arguments);

        } else {

            removeMeshInstancesFunc.apply(this, arguments);
        }
    };

    const addShadowCastersFunc = pc.Layer.prototype.addShadowCasters;

    pc.Layer.prototype.addShadowCasters = function (origMeshInstances) {

        if (UranusInstancerLite.api && UranusInstancerLite.api.enabled && UranusInstancerLite.api.isLayerValid(this)) {

            let meshInstances = [];

            origMeshInstances.forEach(meshInstance => {

                const success = UranusInstancerLite.api.addMeshInstance(meshInstance, layer = this, false, true);

                if (!success) {
                    meshInstances.push(meshInstance);
                }
            });

            arguments[0] = meshInstances;

            addShadowCastersFunc.apply(this, arguments);

        } else {

            addShadowCastersFunc.apply(this, arguments);
        }
    };

    const removeShadowCastersFunc = pc.Layer.prototype.removeShadowCasters;

    pc.Layer.prototype.removeShadowCasters = function (origMeshInstances) {

        if (UranusInstancerLite.api && UranusInstancerLite.api.enabled && UranusInstancerLite.api.isLayerValid(this)) {

            let meshInstances = [];

            origMeshInstances.forEach(meshInstance => {

                const success = UranusInstancerLite.api.removeMeshInstance(meshInstance, layer = this, false, true);

                if (!success) {
                    meshInstances.push(meshInstance);
                }
            });

            arguments[0] = meshInstances;

            removeShadowCastersFunc.apply(this, arguments);

        } else {

            removeShadowCastersFunc.apply(this, arguments);
        }
    };
};

UranusInstancerLite.prototype.overrideMeshInstance = function (meshInstance, addCallback) {

    if (addCallback) {

        Object.defineProperty(meshInstance, 'material', {
            set: function (material) {

                for (let i = 0; i < this._shader.length; i++) {
                    this._shader[i] = null;
                }

                const prevMat = this._material;

                // Remove the material's reference to this mesh instance
                if (prevMat) {
                    prevMat.removeMeshInstanceRef(this);
                }

                this._material = material;

                if (this._material) {

                    // Record that the material is referenced by this mesh instance
                    this._material.addMeshInstanceRef(this);

                    this.updateKey();

                    const prevBlend = prevMat && (prevMat.blendType !== pc.BLEND_NONE);
                    const thisBlend = this._material.blendType !== pc.BLEND_NONE;
                    if (prevBlend !== thisBlend) {
                        let scene = this._material._scene;
                        if (!scene && prevMat && prevMat._scene) scene = prevMat._scene;

                        if (scene) {
                            scene.layers._dirtyBlend = true;
                        } else {
                            this._material._dirtyBlend = true;
                        }
                    }

                    // --- add the instance if it's ready
                    if (addCallback && this._mesh) {
                        addCallback();
                    }
                }
            },
            get: function () {
                return this._material;
            },
            configurable: true
        });

    } else {

        Object.defineProperty(meshInstance, 'material', {
            set: function (material) {

                for (let i = 0; i < this._shader.length; i++) {
                    this._shader[i] = null;
                }

                const prevMat = this._material;

                // Remove the material's reference to this mesh instance
                if (prevMat) {
                    prevMat.removeMeshInstanceRef(this);
                }

                this._material = material;

                if (this._material) {

                    // Record that the material is referenced by this mesh instance
                    this._material.addMeshInstanceRef(this);

                    this.updateKey();

                    const prevBlend = prevMat && (prevMat.blendType !== pc.BLEND_NONE);
                    const thisBlend = this._material.blendType !== pc.BLEND_NONE;
                    if (prevBlend !== thisBlend) {
                        let scene = this._material._scene;
                        if (!scene && prevMat && prevMat._scene) scene = prevMat._scene;

                        if (scene) {
                            scene.layers._dirtyBlend = true;
                        } else {
                            this._material._dirtyBlend = true;
                        }
                    }
                }
            },
            get: function () {
                return this._material;
            },
            configurable: true
        });
    }
};

// effect-simple-water.js
var EffectSimpleWater = pc.createScript('effectSimpleWater');

EffectSimpleWater.attributes.add('materialAsset', { type: 'asset', assetType: 'material' });
EffectSimpleWater.attributes.add('noiseTexture', { type: 'asset', assetType: 'texture' });
EffectSimpleWater.attributes.add('subdivisions', { type: 'number', title: "Subdivisions", default: 100 });
EffectSimpleWater.attributes.add("waveVertexLength", {
    type: "number",
    default: 1.0,
    min: 0.0,
});
EffectSimpleWater.attributes.add("waveVertexAmplitude", {
    type: "number",
    default: 1.0,
    min: 0.0,
});
EffectSimpleWater.attributes.add('waterTextureIntensity', { type: 'number', title: "Water Texture Intensity", default: 0.75 });
EffectSimpleWater.attributes.add('waterTextureSpeed', { type: 'vec2' });

EffectSimpleWater.tmpVec2 = new pc.Vec2();
EffectSimpleWater.tmpOffset = new pc.Vec2();

// initialize code called once per entity
EffectSimpleWater.prototype.initialize = function () {
    var pos = this.entity.getPosition().clone();
    // this.entity.setPosition(pc.Vec3.ZERO);

    // --- variables
    this.timer = 0;

    // --- execute
    this.prepareMaterial();

    this.generateWaterMesh();

    // --- events
    this.on('attr', this.updateAttributes);

    this.entity.setPosition(pos);
};

EffectSimpleWater.prototype.prepareMaterial = function () {

    this.material = this.materialAsset ? this.materialAsset.resource : null;

    if (!this.material) return;
    var mat = this.material.clone();
    this.material = mat;

    this.entity.render.meshInstances[0].material = this.material;

    this.material.chunks.transformVS = EffectSimpleWater.transformVS;
    this.material.chunks.diffusePS = this.getDiffusePS();
    this.material.chunks.APIVersion = pc.CHUNKAPI_1_57;
    this.material.update();

    this.updateAttributes();
};

EffectSimpleWater.prototype.updateAttributes = function (property) {

    if (property === 'materialAsset') this.prepareMaterial();

    if (!this.material) return;

    if (this.noiseTexture) this.material.setParameter("waveNoiseTexture", this.noiseTexture.resource);
    this.material.setParameter("waveVertexLength", this.waveVertexLength);
    this.material.setParameter("waveVertexAmplitude", this.waveVertexAmplitude);
    this.material.setParameter('waterTextureIntensity', this.waterTextureIntensity);
};

EffectSimpleWater.prototype.generateWaterMesh = function () {

    if (!this.material) return;

    // --- calculate mesh size
    const modelComponent = this.entity.model ? this.entity.model : this.entity.render;
    if (!modelComponent) return;

    const aabb = modelComponent.meshInstances[0].aabb;
    const width = aabb.halfExtents.x * 2 * 0.01;
    const height = aabb.halfExtents.z * 2 * 0.01;

    const options = { subdivisions: this.subdivisions, width, height };

    var positions = [];
    var uvs = [];
    var indices = [];
    var row, col;
    var normals;

    for (row = 0; row <= options.subdivisions; row++) {
        for (col = 0; col <= options.subdivisions; col++) {
            var position = new pc.Vec3((col * options.width) / options.subdivisions - (options.width / 2.0), 0, ((options.subdivisions - row) * options.height) / options.subdivisions - (options.height / 2.0));

            positions.push(position.x, position.y, position.z);

            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);
        }
    }

    for (row = 0; row < options.subdivisions; row++) {
        for (col = 0; col < options.subdivisions; col++) {
            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));

            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));
            indices.push(col + (row + 1) * (options.subdivisions + 1));
        }
    }

    // Compute the normals 
    normals = pc.calculateNormals(positions, indices);

    // Create the mesh 
    // var mesh = pc.createMesh(this.app.graphicsDevice, positions, {
    //     normals: normals,
    //     uvs: uvs,
    //     indices: indices
    // });

    var mesh = pc.Mesh.fromGeometry(this.app.graphicsDevice, {positions, normals, uvs, indices});


    var meshInstance = new pc.MeshInstance(mesh, this.material);

    // Add it to this entity 
    modelComponent.meshInstances = [meshInstance];
};

// update code called every frame
EffectSimpleWater.prototype.update = function (dt) {
    if (!this.material) return;

    this.timer += dt;
    this.material.setParameter("waterWavesTime", this.timer);

    this.scrollWaterTexture(dt);
};

EffectSimpleWater.prototype.scrollWaterTexture = function (dt) {
    var velocity = EffectSimpleWater.tmpVec2;
    var offset = EffectSimpleWater.tmpOffset;

    // Calculate how much to offset the texture
    // Speed * dt
    velocity.set(this.waterTextureSpeed.x, this.waterTextureSpeed.y);
    velocity.scale(dt);

    // Update the diffuse and normal map offset values
    offset.copy(this.material.diffuseMapOffset);
    offset.add(velocity);

    this.material.diffuseMapOffset = offset;
    this.material.normalMapOffset = offset;
    this.material.update();
};

EffectSimpleWater.prototype.swap = function () {
    this.initialize();
};

EffectSimpleWater.transformVS = `
uniform float waterWavesTime;
uniform float waveVertexLength;
uniform float waveVertexAmplitude;

mat4 getModelMatrix() {
    #ifdef DYNAMICBATCH
    return getBoneMatrix(vertex_boneIndices);
    #elif defined(SKIN)
    return matrix_model * getSkinMatrix(vertex_boneIndices, vertex_boneWeights);
    #elif defined(INSTANCING)
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
    #else
    return matrix_model;
    #endif
}

vec4 getPosition() {
    dModelMatrix = getModelMatrix();
    vec3 localPos = vertex_position;

    vec4 posW = dModelMatrix * vec4(localPos, 1.0);
    posW.y += cos(posW.z * waveVertexLength + waterWavesTime) * waveVertexAmplitude * sin(posW.x * waveVertexLength + waterWavesTime);

    dPositionW = posW.xyz;

    vec4 screenPos = matrix_viewProjection * posW;
    return screenPos;
}

vec3 getWorldPosition() {
    return dPositionW;
}
`;

EffectSimpleWater.prototype.getDiffusePS = function () {
    return `
${this.noiseTexture ? 'uniform sampler2D waveNoiseTexture;' : ''}
uniform float waterWavesTime;
uniform float waterTextureIntensity;

#ifdef MAPCOLOR
uniform vec3 material_diffuse;
#endif

#ifdef MAPTEXTURE
uniform sampler2D texture_diffuseMap;
#endif

void getAlbedo() {
    dAlbedo = vec3(1.0);

    #ifdef MAPCOLOR
    dAlbedo *= material_diffuse.rgb;
    #endif

    #ifdef MAPTEXTURE
    ${this.noiseTexture ? `
    vec2 noiseCoords = $UV * 0.5 + sin(waterWavesTime) * 0.03;
    vec3 waterNoise = gammaCorrectInput(texture2D(waveNoiseTexture, noiseCoords).$CH);
    ` : ''}

    vec3 waterMask = gammaCorrectInput(texture2D(texture_diffuseMap, $UV).$CH);

    ${this.noiseTexture ? `
    dAlbedo.rgb += waterMask.r * waterTextureIntensity * waterNoise.r;
    ` : `
    dAlbedo.rgb += waterMask.r * waterTextureIntensity;
    ` }    
    #endif

    #ifdef MAPVERTEX
    dAlbedo *= gammaCorrectInput(saturate(vVertexColor.$VC));
    #endif
}
`;
};

// rotateEntity.js
var RotateEntity = pc.createScript('rotateEntity');

RotateEntity.attributes.add("vec3Speed", { type: "vec3" });
RotateEntity.attributes.add("vec3", { type: "vec3" });

// initialize code called once per entity
RotateEntity.prototype.initialize = function () {

};

// update code called every frame
RotateEntity.prototype.update = function (dt) {

    this.entity.rotate(this.vec3.x * this.vec3Speed.x * dt, this.vec3.y * this.vec3Speed.y * dt, this.vec3.z * this.vec3Speed.z * dt);

};

// LevelData.js
var LevelData = pc.createScript('levelData');
LevelData.attributes.add('Segments', {
    type: 'json', schema: [{
        name: 'Layer',
        type: 'number',
        enum:
            [
                { Top: 0 },
                { Bottom: 1 },
            ]
    }, {
        name: 'Patches',
        type: 'number',
        enum: [
            { RoadFlat: 0 },
            { RoadSlide: 1 },
            { RoadDoubleSlide: 2 },
            { RoadLeftHalf: 3 },
            { RoadLeftThird: 4 },
            { RoadRightHalf: 5 },
            { RoadRightThird: 6 },
            { RoadStart_Arena: 7 },
            { RoadEnd_Arena: 8 },
            { RoadEnd_ArenaBig: 9 },
            { RoadMiddle_Arena: 10 },
            { RoadFinishSegment: 11 },
            { RoadRotatingCircle: 12 },
            { RoadPainterCircle: 13 },
            { RoadPainterHalf: 14 },
            { RoadFlatWall: 15 },
            { RoadFlatObstacle: 16 },
            { RoadFlatQuarter: 17 },
        ],
        array: true
    }, {
        name: 'ColorType',
        type: 'number',
        enum: [
            { Green: 0 },
            { Blue: 1 },
            { Orange: 2 },
            { Yellow: 3 },
            { Red: 4 },
        ]
    }],
});

LevelData.attributes.add('CollectableData', {
    type: 'json', schema: [{
        name: 'Layer',
        type: 'number',
        enum:
            [
                { 'Top': 0 },
                { 'Bottom': 1 },
            ]
    }, {
        name: 'PatchIndex',
        type: 'number',
    }, {
        name: 'CollectableType',
        type: 'number',
        enum: [
            { MobGreen: 0 },
            { MobOrange: 1 },
            { Gem: 2 },
            { Key: 3 },
            { PainterGreen: 4 },
            { PainterOrange: 5 },
            { MobYellow: 6 },
            { PainterYellow: 7 },
            { PainterBlue: 8 },
            { MobBlue: 9 },
            { BreakableWall: 10 },

            { Pole: 11 },
            { Rail: 12 },
            { RailSmall: 13 },
            { RailDouble: 14 },
            { FlapperLeft: 15 },
            { FlapperRight: 16 },
            { FlapperDouble: 17 },
            { FlapperTwoSided: 18 },
            { Totem: 19 },
            { Gate: 20 },

            { Arrow1: 21 },
            { Arrow2: 22 },
            { Arrow3: 23 },
            { Arrow4: 24 },
            { Arrow5: 25 },
            { Arrow6: 26 },
            { Arrow7: 27 },
            { Arrow8: 28 },
            { Arrow9: 29 },

            { PainterGreenHalf: 30 },
            { PainterOrangeHalf: 31 },
            { PainterYellowHalf: 32 },
            { PainterBlueHalf: 33 },

            { Lava: 34 },

            { Gem_Group_1: 35 },
            { Gem_Group_2: 36 },
            { Gem_Group_3: 37 },
            { Gem_Group_4: 38 },
            { Gem_Group_5: 39 },

            { Totem_Double: 40 },

            { ShoesShoes: 41 },
            { SharkShoes: 42 },
            { BigfootShoes: 43 },
            { SocksShoes: 44 },
            { BunnyShoes: 45 },
            { WingsShoes: 46 },
            { BootsShoes: 47 },
            { KedsShoes: 48 },
            { PointesShoes: 49 },
        ],
    }, {
        name: 'Placements',
        type: 'vec3',
        array: true
    }],
    array: true
});

// initialize code called once per entity
LevelData.prototype.initialize = function () {

};

// update code called every frame
LevelData.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// LevelData.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// CollectableContainer.js
var CollectableContainer = pc.createScript('collectableContainer');
CollectableContainer.attributes.add('Collectables', {
    type: 'json', schema: [{
        name: 'CollectableObject',
        type: 'entity',
    }, {
        name: 'CollectableType',
        type: 'number',
        enum: [
            { MobGreen: 0 },
            { MobOrange: 1 },
            { Gem: 2 },
            { Key: 3 },
            { PainterGreen: 4 },
            { PainterOrange: 5 },
            { MobYellow: 6 },
            { PainterYellow: 7 },
            { PainterBlue: 8 },
            { MobBlue: 9 },
            { BreakableWall: 10 },

            { Pole: 11 },
            { Rail: 12 },
            { RailSmall: 13 },
            { RailDouble: 14 },
            { FlapperLeft: 15 },
            { FlapperRight: 16 },
            { FlapperDouble: 17 },
            { FlapperTwoSided: 18 },
            { Totem: 19 },
            { Gate: 20 },

            { Arrow1: 21 },
            { Arrow2: 22 },
            { Arrow3: 23 },
            { Arrow4: 24 },
            { Arrow5: 25 },
            { Arrow6: 26 },
            { Arrow7: 27 },
            { Arrow8: 28 },
            { Arrow9: 29 },

            { PainterGreenHalf: 30 },
            { PainterOrangeHalf: 31 },
            { PainterYellowHalf: 32 },
            { PainterBlueHalf: 33 },

            { Lava: 34 },

            { Gem_Group_1: 35 },
            { Gem_Group_2: 36 },
            { Gem_Group_3: 37 },
            { Gem_Group_4: 38 },
            { Gem_Group_5: 39 },

            { Totem_Double: 40 },

            { ShoesShoes: 41 },
            { SharkShoes: 42 },
            { BigfootShoes: 43 },
            { SocksShoes: 44 },
            { BunnyShoes: 45 },
            { WingsShoes: 46 },
            { BootsShoes: 47 },
            { KedsShoes: 48 },
            { PointesShoes: 49 },
        ],
    }],
    array: true
});

// initialize code called once per entity
CollectableContainer.prototype.initialize = function () {
    CollectableContainer = this;
};

CollectableContainer.prototype.GetCollectable = function (id) {
    var collectable = myFindWhere(this.Collectables, { CollectableType: id });
    return collectable.CollectableObject;
};

// update code called every frame
CollectableContainer.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// CollectableContainer.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// collectableObject.js
var CollectableObject = pc.createScript('collectableObject');

CollectableObject.attributes.add('key', { type: 'string', default: "" });
CollectableObject.attributes.add('CollectableType', {
    type: 'number',
    enum: [
        { MobGreen: 0 },
        { MobOrange: 1 },
        { Gem: 2 },
        { Key: 3 },
        { PainterGreen: 4 },
        { PainterOrange: 5 },
        { MobYellow: 6 },
        { PainterYellow: 7 },
        { PainterBlue: 8 },
        { MobBlue: 9 },
        { BreakableWall: 10 },

        { Pole: 11 },
        { Rail: 12 },
        { RailSmall: 13 },
        { RailDouble: 14 },
        { FlapperLeft: 15 },
        { FlapperRight: 16 },
        { FlapperDouble: 17 },
        { FlapperTwoSided: 18 },
        { Totem: 19 },
        { Gate: 20 },

        { Arrow1: 21 },
        { Arrow2: 22 },
        { Arrow3: 23 },
        { Arrow4: 24 },
        { Arrow5: 25 },
        { Arrow6: 26 },
        { Arrow7: 27 },
        { Arrow8: 28 },
        { Arrow9: 29 },

        { PainterGreenHalf: 30 },
        { PainterOrangeHalf: 31 },
        { PainterYellowHalf: 32 },
        { PainterBlueHalf: 33 },

        { Lava: 34 },

        { Gem_Group_1: 35 },
        { Gem_Group_2: 36 },
        { Gem_Group_3: 37 },
        { Gem_Group_4: 38 },
        { Gem_Group_5: 39 },

        { Totem_Double: 40 },

        { ShoesShoes: 41 },
        { SharkShoes: 42 },
        { BigfootShoes: 43 },
        { SocksShoes: 44 },
        { BunnyShoes: 45 },
        { WingsShoes: 46 },
        { BootsShoes: 47 },
        { KedsShoes: 48 },
        { PointesShoes: 49 },
    ],
});

// initialize code called once per entity
CollectableObject.prototype.initialize = function () {
};

// update code called every frame
CollectableObject.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// CollectableObject.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// playerController.js
var PlayerController = pc.createScript('playerController');

PlayerController.dodge = {
    left: 'Left',
    right: 'Right',
};

PlayerController.attributes.add('shake', { type: 'vec3', default: [0.3, 0.08, 0.05] });
PlayerController.attributes.add('Speed', { type: 'number' });
PlayerController.attributes.add('maxHealth', { type: 'number', title: 'Health', default: 100 });
PlayerController.attributes.add('Steer', { type: 'number' });
PlayerController.attributes.add('MaxBounds', { type: 'vec2' });
PlayerController.attributes.add('PlayerRB', { type: 'entity' });
PlayerController.attributes.add('PlayerRender', { type: 'entity' });
PlayerController.attributes.add('PlayerAnimator', { type: 'entity' });
PlayerController.attributes.add('RaycastDebug', { type: 'entity' });
PlayerController.attributes.add('RaycastPoint', { type: 'entity' });
PlayerController.attributes.add('RageModeEntity', { type: 'entity' });
PlayerController.attributes.add('RageMode', { type: 'entity' });
PlayerController.attributes.add('finishLineProgressVal', { type: 'number', title: 'Finish Line Progress Value' });
PlayerController.attributes.add('punchVFX', { type: 'entity' });
PlayerController.attributes.add('purpleKickVFX', { type: 'entity' });
PlayerController.attributes.add('vfxPositions', { type: 'entity', array: true });

PlayerController.attributes.add('dodgePositions', {
    title: 'Dodge Positions',
    type: 'json',
    schema: [
        { name: 'position', type: 'vec3' },
    ],
    array: true
});

PlayerController.attributes.add('testing', {
    title: 'Testing',
    type: 'json',
    schema: [
        { name: 'customHeroDamage', type: 'number' },
        { name: 'customHeroScale', type: 'number' },
    ],
});

// *******************
// * Unity Callbacks *
// *******************

// initialize code called once per entity
PlayerController.prototype.initialize = function () {
    PlayerController.instance = this;
    this.initVars();
    this.initEvents();
};

// *******************
// * Initializations *
// *******************

PlayerController.prototype.initVars = function () {
    this.v = 0;
    this.h = 0;

    this.lavaDamageDelay = 0;
    this.maxLavaDamageDelay = 0;

    var pos = this.entity.getPosition().clone();
    var rot = this.entity.getLocalEulerAngles().clone();

    this.x = pos.x;
    this.y = this.PlayerRB.getPosition().clone().y;
    this.z = pos.z;

    this.initialPosition = pos;
    this.initialRotation = rot;

    this.h = 0;

    this.canControl = false;
    this.steerInput = 0;
    this.thrustInput = 0;

    this.colorType = ColorType.Green;
    this.color = null;
    this.scale = 1;

    this.material = this.PlayerRender.render.meshInstances[0].material.clone();
    this.PlayerRender.render.meshInstances[0].material = this.material;

    this.playerCrown = this.entity.findByName("Crown");

    this.damageDelay = 0.25;
    this.prepareDamageTrigger = false;
    this.maxDamageDelay = this.damageDelay;

    this.isFighting = false;
    this.isFinishlineReached = false;

    this.objects = [];

    this.attacking = false;

    this.min = -this.MaxBounds.x;
    this.max = this.MaxBounds.x;

    this.bigBossFightingController = new PlayerBigBossFighting(this);
    this.newScale = new pc.Vec3(0, 0, 0);
    this.newAlignment = new pc.Vec3(0, 0, 0);
    this.newDir = new pc.Vec3(0, 0, 0);
};

PlayerController.prototype.initEvents = function () {

    // Rigidbody
    this.PlayerRB.rigidbody.on('triggerenter', this.OnTriggerEnter, this);
    this.PlayerRB.rigidbody.on('triggerleave', this.OnTriggerExit, this);

    // Constants
    this.app.on(Events.OnTouchMove, this.OnTouchMove, this);
    // this.app.on(Events.OnTouchBegin, this.OnTouchBegin, this);
    // this.app.on(Events.OnTouchEnd, this.OnTouchEnd, this);
    this.app.on(Events.OnLevelLoaded, this.OnLevelLoaded, this);
    this.app.on(Events.OnStartGame, this.OnStartGame, this);
    this.app.on(Events.OnSetCrownState, this.OnSetCrownState, this);
    this.app.on(Events.OnAttack, this.OnAttack, this);
    this.app.on(Events.OnFightSequenceBegins, this.OnFightSequenceBegins, this);
    this.app.on(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);

    this.app.on(Events.OnBonusSequenceBegins, this.OnBonusSequenceBegins, this);
    this.app.on(Events.OnBonusSequenceCompleted, this.OnBonusSequenceCompleted, this);

    this.app.on(Events.OnResetLevel, this.OnResetLevel, this);

    this.app.on(Events.OnDamage, this.OnDamage, this);
    this.app.on(Events.OnHealthChanged, this.OnHealthChanged, this);

    this.app.on(Events.OnRevivePlayer, this.OnRevivePlayer, this);

    this.app.on(Events.OnRageModeActivated, this.OnRageModeActivated, this);
    this.app.on(Events.OnRageModeDeactivated, this.OnRageModeDeactivated, this);

    this.app.on(Events.OnTapBonus, this.OnTapBonus, this);

    // Strings
    this.app.on('Player:Kick', this.ProcessKick, this);
    this.app.on('PlayerDodge:Left', () => { this.onSwipe(PlayerController.dodge.left); });
    this.app.on('PlayerDodge:Right', () => { this.onSwipe(PlayerController.dodge.right); });
    this.app.on('DodgePositionsBroadCaster:Positions', this.onDodgePositionsRecieved, this);
    this.app.on('Player:PlayPunchVfx', this.playPunchVfx, this);
    this.app.on('Player:PlayKickVfx', this.playKickVfx, this);
    this.app.on('Player:PlayKickPurpleVfx', this.playKickPurpleVfx, this);
    this.app.on('Player:PlayDeadAnimSeq', this.playDeadAnimSeq, this);

    // Big Boss
    this.app.on('BigBossFighting:Begin', this.onBigBossFightStarted, this);
    this.app.on('BigBossFighting:BossTired', this.onBigBossTired, this);
    this.app.on('BigBossFighting:BossRage', this.onBigBossRage, this);
    this.app.on(Events.OnTap, this.onTap, this);
    this.app.on('BigBoss:HitPlayer', this.onBigBossHit, this);
    this.app.on('BigBossFighting:BossBeaten', () => {
        this.bigBossFightingController.setBossBeaten();
    });
    this.app.on('BigBossFighting:BonusTimeOver', this.onBonusTimeOver, this);
    this.app.on('BigBossFighting:OnComplete', this.onBigBossFightComplete, this);
};

// *******************
// * Functionalities *
// *******************

PlayerController.prototype.OnTapBonus = function () {
    if (BonusViewController.Instance.isTappingAllowed)
        this.ProcessPunch(1);
};

PlayerController.prototype.onTap = function () {
    // console.log("Tap");
    this.bigBossFightingController.attackBigBoss(this.getDamage());
};

PlayerController.prototype.OnRageModeActivated = function () {
    this.RageMode.enabled = true;

    this.app.fire(Events.OnColorChangedRageMode, {
        rage: true,
        color: ColorsContainer.GetColor(this.colorType)
    });
};

PlayerController.prototype.OnRageModeDeactivated = function () {
    this.RageMode.enabled = false;
    for (let i = 0; i < this.objects.length; i++) {
        let obj = this.objects[i];
        obj.enabled = false;
    }

    this.objects = [];
    this.app.fire(Events.OnColorChangedRageMode, {
        rage: false,
        color: ColorsContainer.GetColor(this.colorType)
    });
};

PlayerController.prototype.OnFightSequenceCompleted = function () {
    this.damageDelay = 0.25;
    this.isFighting = false;
    this.app.fire("onStartMovementSound", false);
    // this.PlayAnim("Idle");
    // console.log("PlayerController ---> OnFightSequenceCompleted()");
};

PlayerController.prototype.OnBonusSequenceCompleted = function () {
    this.isFighting = false;

    if (this.punchCoroutine)
        clearTimeout(this.punchCoroutine);

    this.app.fire("onStartMovementSound", false);

    this.ProcessVictory(true);
};

PlayerController.prototype.OnResetLevel = function() {
    if(this.RageMode.enabled) {
        this.app.fire(Events.OnRageModeDeactivated);
    }
}

PlayerController.prototype.OnRevivePlayer = function () {
    ///
    if (this.bigBossFightingController.isFighting) {
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.Gameplay);
        this.ProcessRevive();
        this.app.fire("sound:playSound", 'Revive');
        CustomCoroutine.Instance.set(() => {
            this.onBonusTimeOver();
        }, this.getAnimDuration('Revive'));
    }
    else if (this.isFighting) {
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.Gameplay);

        this.ProcessRevive();
        this.isRevived = true;
        let from = this.PlayerAnimator.getLocalScale().x;
        this.heroLevel = this.maxHeroLevel;
        let to = Settings.scale.getHeroScale(this.heroLevel);
        this.app.fire("sound:playSound", 'Revive');

        TweenWrapper.TweenNumber(from, to, 0.25, (obj) => {
            this.PlayerAnimator.setLocalScale(obj.number, obj.number, obj.number);
            // this.app.fire(Events.UpdateBossPosition);
        });

        CustomCoroutine.Instance.set(() => {
            this.app.fire(Events.OnHealthChanged, {
                target: AttackTarget.Boss,
                health: 0,
                reason: "Player",
            });
        }, this.getAnimDuration('Revive'));

    } else {
        this.health = this.maxHealth;
        this.canControl = true;

        this.app.fire("onStartMovementSound", true);
        this.PlayAnim("Running");
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.Gameplay);
    }
};

PlayerController.prototype.OnHealthChanged = function (info) {
    if (info.health <= 0) {
        if (info.target == AttackTarget.Player) {
            this.app.fire('storeReviveData', {
                gems: GameMenuEventListner.instance.currentGems,
                keys: GameMenuEventListner.instance.currentKeys,
                mobs: GameMenuEventListner.instance.currentMobsHit
            })
            this.canControl = false;
            // this.isFighting = false;

            if (info.reason === "Obstacle")
                this.ProcessDeath();

            this.app.fire('FightView:EnableTapTap', false);


            this.app.fire(Events.OnPlayerDead, info.reason);
            this.app.fire("onStartMovementSound", false);
            // this.PlayAnim("Running", false);
        } else {
            this.app.fire(Events.OnChangeCameraState, CameraState.Flight, 2);
            this.isVictorious = true;
            this.ProcessKick();
        }
    }
};

PlayerController.prototype.playDeadAnimSeq = function () {
    CustomCoroutine.Instance.set(() => {
        GameManager.Instance.setGameSpeed(1);
        this.app.fire(Events.OnChangeCameraState, CameraState.Dead, 2);
    }, 0.3);

    this.ProcessDeath(true);
};

PlayerController.prototype.OnDamage = function (info) {
    if (info.target == AttackTarget.Player) {
        this.prepareDamageTrigger = false;
        this.damageDelay = this.maxDamageDelay;
        this.ProcessHurt();
    }
};

PlayerController.prototype.OnFightSequenceBegins = function () {
    this.isFighting = true;
    this.ProcessAttack();
};

PlayerController.prototype.OnBonusSequenceBegins = function () {
    this.isFighting = true;
    this.ProcessAttack();
};

PlayerController.prototype.OnAttack = function (info) {
    if (info.target == AttackTarget.Boss) {
        this.prepareDamageTrigger = true;
        this.ProcessPunch();
        return;
    }

    if (info.target == AttackTarget.Chest) {
        this.ProcessPunch();
    }
};

PlayerController.prototype.OnSetCrownState = function (state) {
    this.playerCrown.enabled = state;
};

PlayerController.prototype.OnStartGame = async function (value) {
    if(value) {
        await APIMediator.gameStart(LevelGenerator.instance.currentTotalLevel);
    }

    this.PlayerAnimator.setLocalScale(1, 1, 1);

    this.isDead = false;
    this.isVictorious = false;
    this.isRevived = false;

    this.health = this.maxHealth;
    this.bigBossFightingController.reset();
    let settings = Settings.biggBossFighting.multiplierSettings;
    this.bigBossFightingController.setMultiplier(settings.startMultiplier, settings.maxMultiplier);

    this.isFighting = false;
    this.canControl = value;
    this.isFinishlineReached = false;

    this.OnSetCrownState(false);

    this.app.fire("onStartMovementSound", value);
    if (value) this.PlayAnim("Running");
    else this.PlayAnim("Idle");

    this.x = 0;
    this.y = 0.85;
    this.z = -4;

    var pos = new pc.Vec3(this.x, this.y, this.z);
    this.PlayerRB.setPosition(pos);
    var cameraState = value ? CameraState.Gameplay : CameraState.Mainmenu;
    var instant = cameraState === CameraState.Mainmenu;
    this.app.fire(Events.OnChangeCameraState, cameraState, 5, instant);
};

PlayerController.prototype.OnLevelLoaded = function (data) {
    // console.log("Player Z: ", data.maxForward);

    this.levelScore = 0;

    this.isBigBossLevel = data.isBigBossLevel;
    this.bigBossFightingController.isBossBeaten = false;

    this.MaxBounds.z = data.maxForward;
    this.UpdateColor(data.initialColorType);

    this.x = 0;
    this.y = 0.85;
    this.z = -4;
    this.scale = 1;
    this.h = 0;
    this.PlayerRB.setLocalEulerAngles(0, 0, 0);
    // if (data.isBonusLevel)
    //     this.scale = Settings.scale.maxScale;
    var pos = new pc.Vec3(this.x, this.y, this.z);
    this.maxHeroLevel = data.maxHeroLevel;
    this.heroLevel = 0;
    this.scale = data.isBonusLevel ? data.maxHeroLevel : 1;

    // console.log("LevelInfo: ", data);
    this.PlayerRB.setPosition(pos);
    this.PlayerAnimator.setLocalScale(1, 1, 1);
    this.PlayAnim("Idle");

    // console.log(data);
};

PlayerController.prototype.OnTouchMove = function (delta) {
    if (this.isFinishlineReached) return;
    this.h = pc.math.clamp(delta, -1, 1);
    this.x = pc.math.clamp(this.x - delta, this.min, this.max);

    // console.log("H: " + this.h + " X: " + this.x);
};

PlayerController.prototype.ClampPosition = function () {
    this.x = pc.math.clamp(this.x, this.min, this.max);
    this.z = pc.math.clamp(this.z, -4, this.MaxBounds.z  /*-(this.scale / 2)*/);

    const levelProgress = pc.math.clamp(this.z / this.MaxBounds.z, 0, 1);
    APIMediator.sendProgress(Math.floor(levelProgress * 100));
};

PlayerController.prototype.OnTriggerEnter = function (result) {
    if (result.tags.has('Collectable')) {
        this.HandleCollectableInteraction(result);
    }

    if (result.tags.has('Obstacle')) {
        this.HandleObstacleInteraction(result);
    }

    if (result.tags.has('Bounds')) {
        this.HandleBoundsInteraction(result);
    }
};

PlayerController.prototype.OnTriggerExit = function (result) {
    if (result.tags.has('Bounds')) {
        this.ResetBounds();
    }

    if (result.tags.has('Lava')) {
        this.floorIsLava = false;
        this.lavaDamageDelay = 0;
        result.script.damageTrigger.activateDamage(false);
    }
};

PlayerController.prototype.ResetBounds = function () {
    this.min = -this.MaxBounds.x;
    this.max = this.MaxBounds.x;
};

PlayerController.prototype.HandleBoundsInteraction = function (result) {
    var boundsInfo = result.script.boundsInfo;
    if (boundsInfo) {
        var min = boundsInfo.minX;
        var max = boundsInfo.maxX;

        this.min = min;
        this.max = max;
    }
};

PlayerController.prototype.HandleObstacleInteraction = function (result) {
    if (!this.canControl)
        return;

    var trigger = result.script?.trigger;
    if (trigger) {
        trigger.Fire();
    }

    var info = result.script.deathTrapInfo;
    var collectable = result.script.collectableObject;
    if (info) {
        result.collision.enabled = false;
        // this.Health -= info.damage;

        if (result.tags.has("wall")) {
            this.app.timeScale = 0.5;

            let self = this;
            TweenWrapper.TweenNumber(0.5, 1, 1, function (obj) {
                self.app.timeScale = obj.number;
                // console.log(obj.number);
            });

            this.app.fire("sound:playSound", "WallBreak");
        }

        if (result.tags.has("Lava")) {
            this.floorIsLava = true;
            this.lavaDamageDelay = 0;
            this.maxLavaDamageDelay = result.script.damageTrigger.damageEvery;
            result.script.damageTrigger.activateDamage(true);
        }

        if (collectable) {
            var data = {
                color: null,
                type: collectable.CollectableType,
                pos: result.getPosition(),
                isValidColor: false,
            };

            this.app.fire(Events.OnCollectablePicked, data);
        } else {
            // console.log('Bonus Level: ', LevelInfo.isBonusLevel);
            if (!LevelInfo.isBonusLevel)
                this.app.fire(Events.OnHealthChanged, {
                    target: AttackTarget.Player,
                    health: 0,
                    reason: "Obstacle",
                });
        }
    }
};

PlayerController.prototype.HandleCollectableInteraction = function (result) {
    var collectable = result.script.collectableObject;
    var color = null;
    var colorType = null;
    var skinType = "";

    switch (collectable.CollectableType) {
        case CollectableType.MobGreen:
            result.enabled = false;
            colorType = ColorType.Green;
            this.UpdateScale(ColorType.Green);
            color = ColorsContainer.GetColor(ColorType.Green);
            this.app.fire("onMobHit", ColorType.Green, result);
            break;
        case CollectableType.MobOrange:
            result.enabled = false;
            colorType = ColorType.Orange;
            this.UpdateScale(ColorType.Orange);
            color = ColorsContainer.GetColor(ColorType.Orange);
            this.app.fire("onMobHit", ColorType.Orange, result);
            break;
        case CollectableType.MobBlue:
            result.enabled = false;
            colorType = ColorType.Blue;
            this.UpdateScale(ColorType.Blue);
            color = ColorsContainer.GetColor(ColorType.Blue);
            this.app.fire("onMobHit", ColorType.Blue, result);
            break;
        case CollectableType.MobYellow:
            result.enabled = false;
            colorType = ColorType.Yellow;
            this.UpdateScale(ColorType.Yellow);
            color = ColorsContainer.GetColor(ColorType.Yellow);
            this.app.fire("onMobHit", ColorType.Yellow, result);
            break;

        case CollectableType.PainterGreen:
            colorType = ColorType.Green;
            this.UpdateColor(ColorType.Green);
            color = ColorsContainer.GetColor(ColorType.Green);
            this.app.fire("onPainterHit", ColorType.Green, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;
        case CollectableType.PainterOrange:
            colorType = ColorType.Orange;
            this.UpdateColor(ColorType.Orange);
            color = ColorsContainer.GetColor(ColorType.Orange);
            this.app.fire("onPainterHit", ColorType.Orange, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;
        case CollectableType.PainterYellow:
            colorType = ColorType.Yellow;
            this.UpdateColor(ColorType.Yellow);
            color = ColorsContainer.GetColor(ColorType.Yellow);
            this.app.fire("onPainterHit", ColorType.Yellow, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;
        case CollectableType.PainterBlue:
            colorType = ColorType.Blue;
            this.UpdateColor(ColorType.Blue);
            color = ColorsContainer.GetColor(ColorType.Blue);
            this.app.fire("onPainterHit", ColorType.Blue, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;

        case CollectableType.PainterGreenHalf:
            colorType = ColorType.Green;
            this.UpdateColor(ColorType.Green);
            color = ColorsContainer.GetColor(ColorType.Green);
            this.app.fire("onPainterHit", ColorType.Green, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;
        case CollectableType.PainterOrangeHalf:
            colorType = ColorType.Orange;
            this.UpdateColor(ColorType.Orange);
            color = ColorsContainer.GetColor(ColorType.Orange);
            this.app.fire("onPainterHit", ColorType.Orange, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;
        case CollectableType.PainterYellowHalf:
            colorType = ColorType.Yellow;
            this.UpdateColor(ColorType.Yellow);
            color = ColorsContainer.GetColor(ColorType.Yellow);
            this.app.fire("onPainterHit", ColorType.Yellow, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;
        case CollectableType.PainterBlueHalf:
            colorType = ColorType.Blue;
            this.UpdateColor(ColorType.Blue);
            color = ColorsContainer.GetColor(ColorType.Blue);
            this.app.fire("onPainterHit", ColorType.Blue, result);
            this.app.fire("sound:playSound", "Color_changing");
            break;
        case CollectableType.Gem:
            result.enabled = false;
            break;
        case CollectableType.Key:
            result.enabled = false;
            this.app.fire("onKeyHit");
            this.app.fire("sound:playSound", 'KeyCollision');
            break;
        case CollectableType.ShoesShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.SharkShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.BigfootShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.SocksShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.BunnyShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.WingsShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.BootsShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.KedsShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
        case CollectableType.PointesShoes:

            result.enabled = false;
            skinType = SkinType.Shoes;
            break;
    }

    var data = {
        color: color,
        type: collectable.CollectableType,
        pos: result.getPosition(),
        skinType: skinType,
        key: collectable.key,
        isValidColor: this.RageMode.enabled ? true : colorType == this.colorType,
    };

    if(data.isValidColor) {
        this.levelScore += 1;
        APIMediator.sendScore(this.levelScore);
    }

    this.app.fire(Events.OnCollectablePicked, data);
};

PlayerController.prototype.UpdateColor = function (type) {
    var value = ColorsContainer.GetColor(type);
    this.colorType = type;
    this.color = value;
    this.material.diffuse.set(value.r, value.g, value.b);
    this.material.emissive.set(value.r, value.g, value.b);
    this.material.update();

    if (this.RageMode.enabled) {
        this.app.fire(Events.OnColorChangedRageMode, {
            rage: true,
            color: ColorsContainer.GetColor(this.colorType)
        });
    }
};

PlayerController.prototype.UpdateScale = function (value) {
    if (this.colorType == value || this.RageMode.enabled) {
        // this.scale += 0.05;
        // this.setPlayerScale(this.scale + 0.05);
        this.heroLevel++;
    } else {
        // this.scale -= 0.05;
        // this.setPlayerScale(this.scale - 0.05);
        this.heroLevel--;
    }

    this.heroLevel = pc.math.clamp(this.heroLevel, 0, this.maxHeroLevel);
    // console.log("heroLevel: ", this.heroLevel);
    // this.scale = pc.math.clamp(this.scale, Settings.scale.minScale, Settings.scale.maxScale);
    // this.scale = (this.heroLevel + 1) * 0.05 + 1;
    // this.scale = this.testing.customHeroScale > 0 ? this.testing.customHeroScale : this.scale;
    this.setPlayerScale((this.heroLevel + 1) * 0.05 + 1);
};

PlayerController.prototype.setPlayerScale = function (scale) {
    if (this.testing.customHeroScale > 0)
        this.scale = this.testing.customHeroScale;
    else
        this.scale = scale;

    this.scale = pc.math.clamp(this.scale, Settings.scale.minScale, Settings.scale.maxScale);
};

// update code called every frame
PlayerController.prototype.update = function (dt) {

    if (this.prepareDamageTrigger) {
        this.damageDelay -= dt;

        if (this.damageDelay <= 0) {
            this.damageDelay = this.maxDamageDelay;
            this.prepareDamageTrigger = false;
            this.app.fire(Events.OnDamage, {
                target: AttackTarget.Boss,
                // damage: pc.math.clamp(20 * BossFightViewController.Instance.powerbarVal, 1, 20),
                damage: this.getDamage(),
                reason: "Player",
            });
        }
    }

    this.ProcessRageTargets(dt);
    this.bigBossFightingController.manageBigBossFighting(dt);

    if (!this.canControl)
        return;


    this.ProcessPlayerProgress();
    this.ProcessLavaDamage(dt);
    this.ProcessMovement(dt);
    this.ProcessInputs(dt);
    this.ProcessScale(dt);
    this.ProcessAlignment();
    this.ClampPosition();
};

PlayerController.prototype.ProcessLavaDamage = function (dt) {
    if (this.floorIsLava) {
        this.lavaDamageDelay -= dt;

        if (this.lavaDamageDelay <= 0) {
            // console.log("ouch!!");
            this.UpdateScale(null);
            this.lavaDamageDelay = this.maxLavaDamageDelay;
        }
    }
};

PlayerController.prototype.getDamage = function () {
    let damage;

    if (this.testing.customHeroDamage > 0) {
        damage = this.testing.customHeroDamage;
    }
    else {
        if (this.isBigBossLevel) {
            let isBigBossTutorial = BiggBossFightingManager.Instance.isTutorialRequired;
            let damageRange = Settings.biggBossFighting.damageSettings.heroDamage;
            damage = isBigBossTutorial ? damageRange.x : damageRange.y;
        }
        else {

            let boss = ReferenceManager.Instance.boss.script.bossController;
            if (this.heroLevel >= boss.bossLevel)
                damage = Settings.fightingDamage.hero.highDamage;
            else if (this.heroLevel * Settings.fightingDamage.hero.heroWinFactor >= boss.bossLevel)
                damage = Settings.fightingDamage.hero.mediumDamage;
            else
                damage = Settings.fightingDamage.hero.lowDamage;
        }
    }

    return damage;
};

PlayerController.prototype.ProcessRageTargets = function (dt) {

    for (let i = 0; i < this.objects.length; i++) {
        let obj = this.objects[i];

        if (obj.enabled) {
            var v1 = obj.getPosition();
            var v2 = this.PlayerRB.getPosition();
            var dist = v1.distance(v2);

            if (obj.parent != this.PlayerRB) {
                obj.reparent(this.PlayerRB);
            }

            if (dist <= 0.5) {
                obj.enabled = false;
                this.HandleCollectableInteraction(obj);
            } else {
                obj.setPosition(v1.lerp(v1, v2, dt * 20));
            }
        }
    }
};

PlayerController.prototype.ProcessInputs = function (dt) {
    // this.h = pc.math.clamp(Math.abs(this.x / this.MaxBounds.x), -1, 1);
    this.h = pc.math.lerp(this.h, 0, dt);
};

PlayerController.prototype.ProcessScale = function (dt) {
    var localScale = this.PlayerAnimator.getLocalScale();
    this.newScale.set(this.scale, this.scale, this.scale);
    this.PlayerAnimator.setLocalScale(localScale.lerp(localScale, this.newScale, dt));
};

PlayerController.prototype.ProcessAlignment = function () {
    var origin = this.RaycastPoint.getPosition();
    this.newAlignment.set(origin.x, origin.y - 10, origin.z);
    var direction = new pc.Vec3(origin.x, origin.y - 10, origin.z);
    // var result = this.app.systems.rigidbody.raycastFirst(origin, direction);
    // if (result) {
    //     if (result.entity.tags.has("road")) {
    //         var pos = result.point;
    //         console.log(pos);
    //         console.log(result.entity.name);
    //         this.RaycastDebug.setPosition(pos);
    //         this.y = pos.y + 0.85;
    //     }
    // }

    var result = this.app.systems.rigidbody.raycastAll(origin, this.newAlignment);
    for (let i = 0; i < result.length; i++) {
        if (result[i].entity.tags.has("road")) {
            var pos = result[i].point;
            this.RaycastDebug.setPosition(pos);
            this.y = pos.y + 0.85;
        }
    }
};

PlayerController.prototype.ProcessPlayerProgress = function () {
    if (!this.canControl)
        return;

    var data = {
        progress: pc.math.clamp(this.PlayerRB.getPosition().z / (this.MaxBounds.z /*- (this.scale / 2)*/), 0, 1)
    };

    // console.log("PlayerController ---> ProcessPlayerProgress",  this.finishLineProgressVal, data.progress);
    this.app.fire(Events.OnPlayerProgress, data);

    if (data.progress >= 1) {

        if (this.x !== 0) {
            this.x = 0;
            return;
        }

        // console.log('Boss reached: ');
        // this.canControl = false;
        this.canControl = false;
        this.app.fire(Events.OnFinishLineReached);
        this.app.fire("onGameStart", false)
        // this.PlayAnim("Idle");
        this.app.fire("onStartMovementSound", false);
        this.app.fire(Events.OnRageModeDeactivated);
    }
    else if (data.progress >= this.finishLineProgressVal) {
        if (!this.isFinishlineReached) {
            this.xWhenFinishLineReached = this.x;
            this.app.fire(Events.OnChangeCameraState, CameraState.Fight, 5);
            this.app.fire(Events.OnFinishLineStarted);
            this.isFinishlineReached = true;
        }

        this.h = pc.math.lerp(this.finishLineProgressVal, 0, (data.progress - this.finishLineProgressVal) * (1 / (1 - this.finishLineProgressVal)));
        this.x = pc.math.lerp(this.xWhenFinishLineReached, 0, ((data.progress - this.finishLineProgressVal) * (1 / (1 - this.finishLineProgressVal))) * 1.5);
        // console.log('x: ', this.x);
    }
};

PlayerController.prototype.ProcessMovement = function (dt) {

    var playerPos = this.PlayerRB.getPosition().clone();
    playerPos.y = this.y;

    var speed = this.Speed;
    var keyboardInputForce = dt * 30;
    var runForward = this.canControl;

    if (runForward) {
        this.z += 15 * dt;
    }

    if (this.app.keyboard.isPressed(pc.KEY_LEFT) || this.app.keyboard.isPressed(pc.KEY_A)) {
        this.x += speed * keyboardInputForce;
    } else if (this.app.keyboard.isPressed(pc.KEY_RIGHT) || this.app.keyboard.isPressed(pc.KEY_D)) {
        this.x -= speed * keyboardInputForce;
    }

    var euler = this.PlayerRB.getLocalEulerAngles();
    euler.y = this.h * -60;
    this.PlayerRB.setLocalEulerAngles(0, euler.y, 0);

    this.thrustInput = pc.math.lerp(this.thrustInput, speed, dt);
    this.newDir.set(this.x, playerPos.y, this.z);

    // console.log('ProcessMovement: ', this.x);
    var pos = playerPos.lerp(playerPos, this.newDir, dt * 7.5);
    this.PlayerRB.setPosition(pos);
    //this.PlayerRB.rigidbody.teleport(pos.x, pos.y, pos.z);
};

PlayerController.prototype.setPos = function (pos) {
    this.PlayerRB.setPosition(pos.x, pos.y, pos.z);
};

PlayerController.prototype.getPunchId = function () {
    if (!this.punchID) {
        this.punchID = 0;
    }

    this.punchID++;
    this.punchID %= 2;
    return this.punchID;
};

PlayerController.prototype.ProcessPunch = function (id, speed) {

    var punch = "";
    if (!id) id = this.getPunchId();
    switch (id) {
        case 0:
            punch = "Punch Left";//"punch left";
            break;
        case 1:
            punch = "Punch Right";//"punch right";
            break;
    }

    this.app.fire("sound:playSound", "Punch_" + (Math.floor(Math.random() * 4) + 1));
    if (!speed) speed = 2;
    this.PlayAnim(punch, 4);
    let duration = this.getAnimDuration(punch) / 2;

    if (this.punchCoroutine)
        // CustomCoroutine.Instance.clear(this.punchCoroutine);
        clearTimeout(this.punchCoroutine);

    this.punchCoroutine = setTimeout(() => {
        this.punchCoroutine = undefined;
        if (this.isDead || this.isVictorious) return;
        this.ProcessAttack();
    }, duration * 1000);
};

PlayerController.prototype.ProcessAttack = function (value) {
    this.PlayAnim("Fight Idle");

};

PlayerController.prototype.ProcessDeath = function (value) {
    this.isDead = true;
    this.PlayAnim("Death");
    let duration = this.getAnimDuration('Death');
    this.app.fire("sound:playSound", 'Fatality');

    // slow down on fall
    CustomCoroutine.Instance.set(() => {
        // this.app.fire("sound:playSound", 'Falling');
        this.app.fire(Events.ShakeCamera, 0.4, 0.04, 0.1);
    }, 0.2);
};

PlayerController.prototype.ProcessRevive = function () {
    this.isDead = false;
    this.PlayAnim("Revive");
};

PlayerController.prototype.ProcessVictory = function (value) {
    this.PlayAnim("Victory");
};

PlayerController.prototype.ProcessHurt = function () {
    this.app.fire(Events.ShakeCamera, this.shake.x, this.shake.y, this.shake.z);
    this.app.fire('MiniBoss:PlayPunchVfx');
    // this.app.fire("camera:shake");
    this.PlayAnim("Hurt");
    let duration = this.getAnimDuration("Hurt");

    if (this.punchCoroutine)
        // CustomCoroutine.Instance.clear(this.punchCoroutine);
        clearTimeout(this.punchCoroutine);

    this.punchCoroutine = setTimeout(() => {
        this.punchCoroutine = undefined;
        if (this.isDead) return;
        this.ProcessAttack();
    }, duration * 1000);
};

PlayerController.prototype.ProcessKick = function () {
    this.PlayAnim(AttachmentsHandler.kickName);
    this.app.fire("sound:playSound", 'Whoosh');
    CustomCoroutine.Instance.set(() => {
        this.app.fire("sound:playSound", 'Fatality');
        this.playKickVfx();
    }, this.getAnimDuration(AttachmentsHandler.kickName) / 2);
};

PlayerController.prototype.ProcessDodge = function (direction) {
    this.PlayAnim("Dodge " + direction);
};

PlayerController.prototype.PlayAnim = function (name, speed) {
    // console.warn('PlayAnim: ', this.PlayerAnimator.anim.baseLayer);
    // console.warn('PlayAnim: ', name, speed);
    if (!speed) speed = 1;
    this.setAnimSpeed(speed);
    this.PlayerAnimator.anim.baseLayer.transition(name, 0.1);
};

PlayerController.prototype.playPunchVfx = function () {
    this.punchVFX.fire('Play', this.vfxPositions[0].getLocalPosition());
};

PlayerController.prototype.playKickVfx = function () {
    this.punchVFX.fire('Play', this.vfxPositions[1].getLocalPosition());
};

PlayerController.prototype.playKickPurpleVfx = function () {
    this.purpleKickVFX.fire('Play', this.vfxPositions[1].getLocalPosition());
};

PlayerController.prototype.getAnimDuration = function (name) {
    return this.PlayerAnimator.anim.baseLayer._controller._states[name].timelineDuration;
};

PlayerController.prototype.setAnimSpeed = function (speed) {
    this.PlayerAnimator.anim.baseLayer.speed = speed;
};

PlayerController.prototype.DebugRevive = function () {
    this.app.fire(Events.OnRevivePlayer);
};

PlayerController.prototype.DebugAnimations = function () {
    var rage = this.app.keyboard.wasReleased(pc.KEY_R);
    if (rage) {
        this.app.fire(Events.OnRageModeActivated);
        this.app.fire(Events.OnColorChangedRageMode, {
            rage: true,
            color: ColorsContainer.GetColor(this.colorType)
        });
    }

    var rageQuit = this.app.keyboard.wasReleased(pc.KEY_Q);
    if (rageQuit) {
        this.app.fire(Events.OnRageModeDeactivated);
        this.app.fire(Events.OnColorChangedRageMode, {
            rage: false,
            color: ColorsContainer.GetColor(this.colorType)
        });
    }
};

// *********************
// * Big Boss Fighting *
// *********************

PlayerController.prototype.onBigBossFightStarted = function () {
    this.bigBossFightingController.onBigBossFightStarted();
};

PlayerController.prototype.onBigBossTired = function () {
    this.bigBossFightingController.playerTurnToAttack(true);
};

PlayerController.prototype.onBigBossRage = function () {
    this.bigBossFightingController.onBigBossRage();
};

PlayerController.prototype.onBigBossHit = function (damage, quadrent) {
    // console.log('onBigBossHit: ', quadrent, this.bigBossFightingController.swipeIndex);
    if (this.bigBossFightingController.swipeIndex !== quadrent) {
        this.app.fire(Events.ShakeCamera, 0.4, 0.04, 0.1);
        return;
    }

    this.health -= damage;
    this.app.fire("BigBoss:IncreasePunches");
    this.app.fire("BigBoss:PlayPunchVfx");
    this.health = pc.math.clamp(this.health, 0, this.maxHealth);
    this.app.fire('FightView:SetHealth', AttackTarget.Player, this.health / this.maxHealth);
    GameManager.Instance.setGameSpeed(0.2);

    if (this.health <= 0)
        this.onPlayerBeaten();
    else {
        this.ProcessHurt();

        CustomCoroutine.Instance.set(() => {
            if (this.isDead || this.isVictorious) return;
            this.PlayAnim('Fight Idle');
        }, this.getAnimDuration('Hurt'));
    }

};

PlayerController.prototype.onPlayerBeaten = function () {
    this.ProcessDeath(true);
    this.app.fire("onStartMovementSound", false);
    this.PlayerAnimator.anim.setBoolean("run", false);
    this.app.fire(Events.OnPlayerDead, "Boss");
};

PlayerController.prototype.onBonusTimeOver = function () {
    // console.log("onBonusTimeOver");
    let index = this.bigBossFightingController.getSwipeIndex(PlayerController.dodge.right);
    this.bigBossFightingController.setDodgeCamera(index);
    GameManager.Instance.setGameSpeed(0.4);

    this.PlayAnim(AttachmentsHandler.kickName);
    this.isVictorious = true;

    CustomCoroutine.Instance.set(() => {
        index--;
        if (index < 0)
            index = 3;
        this.bigBossFightingController.setDodgeCamera(index);

        this.playKickPurpleVfx();
        this.app.fire(Events.ShakeCamera, 0.4, 0.04, 0.1);

        GameManager.Instance.setGameSpeed(1);
        this.app.fire('BigBossFighting:BossKilled');
    }, this.getAnimDuration(AttachmentsHandler.kickName) - 0.55);
};

PlayerController.prototype.onBigBossFightComplete = function () {
    this.ProcessVictory();
};

PlayerController.prototype.onSwipe = function (dir) {
    if (BiggBossFightingManager.Instance.isTutorialRequired)
        this.manageSwipeTutorial(dir);
    else
        this.bigBossFightingController.onSwipe(dir);
};

PlayerController.prototype.manageSwipeTutorial = function (dir) {
    let isDodgedRight = BiggBossFightingManager.Instance.tutorial.dodgedRight;
    let isDodgedLeft = BiggBossFightingManager.Instance.tutorial.dodgedLeft;

    if (!isDodgedRight) {
        if (dir === PlayerController.dodge.right) {
            this.bigBossFightingController.onSwipe(dir);
            this.app.fire('BigBossFighting:UpdateDodgeTutorial');
        }
    }
    else if (!isDodgedLeft) {
        if (dir === PlayerController.dodge.left) {
            this.bigBossFightingController.onSwipe(dir);
            this.app.fire('BigBossFighting:UpdateDodgeTutorial');
        }
    }
    else {
        this.app.fire('BigBossFighting:UpdateDodgeTutorial');
        this.bigBossFightingController.onSwipe(dir);
    }
};

PlayerController.prototype.onDodgePositionsRecieved = function (positions) {
    this.bigBossFightingController.setDodgePositions(positions);
};

// ColorsContainer.js
var ColorsContainer = pc.createScript('colorsContainer');
ColorsContainer.attributes.add('Colors', {
    type: 'json', schema:
        [
            {
                name: 'ColorType',
                type: 'number',
                enum: [
                    { Green: 0 },
                    { Blue: 1 },
                    { Orange: 2 },
                    { Yellow: 3 },
                    { Red: 4 },
                ]
            },
            {
                name: 'Color',
                type: 'rgb',
            },
        ], array: true
});

ColorsContainer.prototype.GetColor = function (type) {
    var color = myFindWhere(this.Colors, { ColorType: type });

    if (color) {
        color = color.Color;
    }

    return color;
};

// initialize code called once per entity
ColorsContainer.prototype.initialize = function () {
    ColorsContainer = this;
};

// update code called every frame
ColorsContainer.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ColorsContainer.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// touch.js
// More information about touch events can be found here
// http://developer.playcanvas.com/en/api/pc.Touch.html

var Touch = pc.createScript("touch");

// initialize code called once per entity
Touch.prototype.initialize = function () {
    this.pos = new pc.Vec3();

    this.touchEnd = 0;
    this.touchStart = 0;

    // Only register touch events if the device supports touch
    var touch = this.app.touch;
    if (touch) {
        touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
    } else {
        this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    }

    this.on('destroy', function () {
        touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
    }, this);

    this.lastTouchPosition = new pc.Vec2();
};

Touch.prototype.onMouseMove = function (event) {
    var touch = event;
    var mouseDown = this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT);
    const deltaX = (touch.x - this.lastTouchPosition.x) * 0.03;
    if (mouseDown) {
        this.app.fire(Events.OnTouchMove, deltaX);
        this.lastTouchPosition.set(touch.x, touch.y);
    }
};

Touch.prototype.onMouseDown = function (event) {
    var touch = event;
    this.lastTouchPosition.set(touch.x, touch.y);
    this.app.fire(Events.OnTouchEnd);
};

Touch.prototype.onMouseUp = function (event) {
    // var touch = event;
    // this.lastTouchPosition.set(touch.x, touch.y);
    // this.app.fire(Events.OnTouchBegin);
};

Touch.prototype.updateFromScreen = function (screenPos) {
    // Use the camera component's screenToWorld function to convert the 
    // position of the mouse into a position in 3D space
    var depth = 5;

    this.cameraEntity.camera.screenToWorld(screenPos.x, screenPos.y, depth, this.pos);
};


Touch.prototype.onTouchStart = function (event) {
    // For the demo, we only work with the first registered touch
    if (event.touches.length === 1) {
        var touch = event.touches[0];
        this.lastTouchPosition.set(touch.x, touch.y);
        this.app.fire(Events.OnTouchBegin);
    }

    // Needs to be called to remove 300ms delay and stop 
    // browsers consuming the event for something else
    // such as zooming in
    event.event.preventDefault();
    event.event.stopPropagation();
};


Touch.prototype.onTouchMove = function (event) {
    // Use only the first touch screen x y position to move the entity
    if (event.touches.length == 1) {
        var touch = event.touches[0];
        const deltaX = (touch.x - this.lastTouchPosition.x) * 0.04;
        this.app.fire(Events.OnTouchMove, deltaX);
        this.lastTouchPosition.set(touch.x, touch.y);
    }
    event.event.preventDefault();
};


Touch.prototype.onTouchEnd = function (event) {
    // Change the material only if the last touch has ended
    if (event.touches.length === 1) {
        var touch = event.touches[0];
        this.lastTouchPosition.set(touch.x, touch.y);
    }

    this.app.fire(Events.OnTouchEnd);
    event.event.preventDefault();
};

Touch.prototype.onTouchCancel = function (event) {
    // Change the material only if the last touch has ended
    if (event.touches.length === 0) {

    }

    event.event.preventDefault();
};

// MenuManager.js
var MenuManager = pc.createScript('menuManager');
MenuManager.attributes.add('progressionButton', { type: 'entity' });

MenuManager.attributes.add('allPanels', {
    type: 'json',
    schema: [
        { name: 'overlay', type: 'boolean' },
        { name: 'panel', type: 'entity' },
    ],
    array: true
});

MenuManager.States = {
    Home: 0,
    Gameplay: 1,
    Settings: 2,
    GameplayMessage: 3,
    BossFight: 4,
    Win: 5,
    Lose: 6,
    LoseObstacle: 7,
    BlankScreen: 8,
    BonusView: 9,
    ShopView: 10,
    ChestRoom: 11,
    CloseOverlay: -1,
    SkinUnlockedView: 12,
    LooksGoodView: 13,
    RageRvView: 14,
};

// initialize code called once per entity
MenuManager.prototype.initialize = function () {

    MenuManager.Instance = this;
    this.prevState = null;
    this.currentState = MenuManager.States.Home;
    this.currentOverlays = [];

    this.changeState(MenuManager.States.Home);
    this.progressionButton.button.on("click", this.OnProgressionBtbClicked, this);

    this.on("destroy", this.onDestroy, this);
    this.app.on("changeMenuState", this.changeState, this);
};

MenuManager.prototype.OnProgressionBtbClicked = function (e) {
    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire(Events.OnDebugProgression);
};

MenuManager.prototype.onDestroy = function () {

    this.app.off("changeMenuState", this.changeState, this);

};

MenuManager.prototype.update = function (dt) {

};

MenuManager.prototype.changeState = async function (newState) {

    if(this.currentState !== newState && (newState === MenuManager.States.Settings || newState === MenuManager.States.ShopView)) {
        await APIMediator.gamePause();
    } else if(this._lastRequestedState !== newState && (this._lastRequestedState === MenuManager.States.Settings || this._lastRequestedState === MenuManager.States.ShopView)) {
        await APIMediator.gameResume();
    }

    this._lastRequestedState = newState;

    if (this.currentState === newState) return;
    if (this.manageOverlayState(newState)) return;

    this.prevState = this.currentState;
    this.currentState = newState;
   
    var prevPanel = this.allPanels[this.prevState].panel;
    var currentPanel = this.allPanels[this.currentState].panel;

    // if (!this.allPanels[this.currentState].overlay)
    //     prevPanel.enabled = false;

    prevPanel.fire('disable', () => {
        currentPanel.enabled = true;
    });
};

MenuManager.prototype.manageOverlayState = function (state) {

    if (this.currentOverlays.length > 0 && state === MenuManager.States.CloseOverlay) {
        this.allPanels[this.currentOverlays.pop()].panel.fire('disable');
        return true;
    }

    if (this.allPanels[state].overlay) {
        this.allPanels[state].panel.enabled = true;
        this.currentOverlays.push(state);
    }

    return this.allPanels[state].overlay;
};


// homeMenuEventListner.js
var HomeMenuEventListner = pc.createScript('homeMenuEventListner');

HomeMenuEventListner.attributes.add('homeBtns', {
    type: 'json',
    title: 'Home Menu Buttons',
    schema: [
        { name: 'settingsBtn', title: 'Settings Button', type: 'entity' },
        { name: 'startBtn', title: 'Start Button', type: 'entity' },
        { name: 'rageBtn', type: 'entity' },
        { name: 'shopBtn', type: 'entity' },
        { name: 'upgradeKickBtn', type: 'entity' },
        { name: 'upgradeMultiBtn', type: 'entity' },
        { name: 'currentGemsTxt', type: 'entity' },
        { name: 'fbTournyBtn', type: 'entity' },
    ],
});

HomeMenuEventListner.attributes.add('upgradeItems', {
    title: 'Upgrade Item Views',
    type: 'json',
    schema: [
        { name: 'kickLevelView', title: 'Kick Level View', type: 'entity' },
        { name: 'multiplierLevelView', title: 'Multiplier Level View', type: 'entity' },
    ],
});


HomeMenuEventListner.instance = null;

// initialize code called once per entity
HomeMenuEventListner.prototype.initialize = function () {

    HomeMenuEventListner.instance = this;
    this.isGameStarted = false;
    this.isFirstTimeHomeBtnClicked = false;
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.initEvents();
    this.app.on('onLeftRightClicked', this.onLeftRightClicked, this);

    //this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);

    this.homeBtns.settingsBtn.enabled = APIMediator.areAudioControlsAllowed() && APIMediator.isPausingAllowed();
};

HomeMenuEventListner.prototype.onLeftRightClicked = function () {

    this.onStartBtnClicked();

};

HomeMenuEventListner.prototype.postInitialize = function () {
    this.onEnable();
};

HomeMenuEventListner.prototype.initEvents = function () {

    this.homeBtns.settingsBtn.button.on("click", this.onSettingsBtnClicked, this);
    this.homeBtns.startBtn.button.on("click", this.onStartBtnClicked, this);
    this.homeBtns.upgradeKickBtn.button.on("click", this.onKickUpgradeBtnClicked, this);
    this.homeBtns.upgradeMultiBtn.button.on("click", this.onMultiplierUpgradeBtnClicked, this);
    this.homeBtns.shopBtn.button.on("click", this.onShopBtnClicked, this);
    this.homeBtns.rageBtn.button.on("click", this.onRageBtnClicked, this);
    this.homeBtns.fbTournyBtn.button.on("click", this.onfbTournyBtnClicked, this);
    this.on("destroy", this.onDestroy, this);
    this.on('enable', this.onEnable, this);

    this.app.on(Events.OnLevelLoaded, this.OnLevelLoaded, this);
    this.app.on(Events.OnRageRvCompleted, this.OnRageRvCompleted, this);
};

HomeMenuEventListner.prototype.onfbTournyBtnClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire("onTournamentBtnClick");
};

HomeMenuEventListner.prototype.OnRageRvCompleted = function () {
    this.onStartBtnClicked();
    let self = this;
    let gameMenu = MenuManager.Instance.allPanels[MenuManager.States.Gameplay].panel.script.gameMenuEventListner;
    Debug.log(MenuManager.Instance.allPanels[MenuManager.States.Gameplay]);
    Debug.log("GameMenu: ", gameMenu);
    setTimeout(function () {
        self.app.fire(Events.OnRageModeActivated);
        gameMenu.ActivateRageMode();
    }, 100);
};

HomeMenuEventListner.prototype.onRageBtnClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire("changeMenuState", MenuManager.States.RageRvView);
};

HomeMenuEventListner.prototype.OnLevelLoaded = function () {
    this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems);
    // this.updateGemsView();
};

HomeMenuEventListner.prototype.onEnable = function () {

    this.app.fire('GemsMenu:EnableCounterView', true);
    this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems);
    this.updateKickLevelView();
    this.updateMultiplierLevelView();
    this.isGameStarted = false;

};

HomeMenuEventListner.prototype.onDestroy = function () {

    this.homeBtns.settingsBtn.button.off("click", this.onSettingsBtnClicked, this);
    this.homeBtns.startBtn.button.off("click", this.onStartBtnClicked, this);

};


HomeMenuEventListner.prototype.onStartBtnClicked = async function () {

    if (this.isGameStarted) return;
    this.isGameStarted = true;

    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire("onGameStart", true);


    // For the first time, no need to show ad when user clicks the start button
    // if (this.isFirstTimeHomeBtnClicked === false) {
    //     this.isFirstTimeHomeBtnClicked = true;
    //     this.startGame();
    //     return;
    // }

    APIMediator.showInterstitialAd('button:mainmenu:start', 'start').then(() => {
        this.startGame();
    });
};

HomeMenuEventListner.prototype.startGame = function () {

    this.app.fire("changeMenuState", MenuManager.States.Gameplay);
    this.app.fire(Events.OnStartGame, true);
    this.app.fire("fadeOutGameMessage");
    this.app.fire('GemsMenu:EnableCounterView', false);

};

HomeMenuEventListner.prototype.onResume = function () {

    this.loadingAdScreen.enabled = false;
    this.startGame();

};

HomeMenuEventListner.prototype.onPause = function () {

    this.loadingAdScreen.enabled = true;

};

HomeMenuEventListner.prototype.onKickUpgradeBtnClicked = async function () {
    let rewardClaimed = true;
    if (!DataManager.Instance.upgradeKickLevel() && APIMediator.isRewardedAdAvailable('button:mainmenu:upgrade')) {
        rewardClaimed = await this.manageAd(true);
    }
    if (!rewardClaimed) return;
    this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems, true);
    this.updateKickLevelView();
    this.updateMultiplierLevelView();
    this.app.fire(Events.OnUpgradeKick, DataManager.Instance.kickLevel);
};

HomeMenuEventListner.prototype.onMultiplierUpgradeBtnClicked = async function () {
    let rewardClaimed = true;
    if (!DataManager.Instance.upgradeMultiplierLevel() && APIMediator.isRewardedAdAvailable('button:mainmenu:upgrade')) {
        rewardClaimed = await this.manageAd();
    }
    if (!rewardClaimed) return;
    this.app.fire("onUpgradeMultiplier");
    this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems, true);
    this.updateMultiplierLevelView();
    this.updateKickLevelView();
};

HomeMenuEventListner.prototype.onSettingsBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire("changeMenuState", MenuManager.States.Settings);

};

HomeMenuEventListner.prototype.playSound = function (name) {
    this.app.fire("sound:playSound", name);
};

HomeMenuEventListner.prototype.updateKickLevelView = function () {
    let level = DataManager.Instance.kickLevel;
    let price = Settings.upgrade.getKickPrice(level + 1);

    this.upgradeItems.kickLevelView.script.upgradeItemView.updateView('Lvl ' + level.toFixed(0), price);
};

HomeMenuEventListner.prototype.updateMultiplierLevelView = function () {
    let level = DataManager.Instance.multiplierLevel;
    let mul = Settings.upgrade.getMultiplier(level);
    let price = Settings.upgrade.getMultiplierPrice(level + 1);

    this.upgradeItems.multiplierLevelView.script.upgradeItemView.updateView('X ' + mul.toFixed(1), price);
};

HomeMenuEventListner.prototype.onShopBtnClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire("changeMenuState", MenuManager.States.ShopView);
};


HomeMenuEventListner.prototype.update = function (dt) {
    this.homeBtns.rageBtn.parent.enabled = APIMediator.isRewardedAdAvailable('button:mainmenu:activateragemode');

    this.updateMultiplierLevelView();
    this.updateKickLevelView();
};

// ****************
// * Ads Settings *
// ****************

HomeMenuEventListner.prototype.manageAd = async function (isKickLevel) {
    const result = await APIMediator.watchRewardedVideo('button:mainmenu:upgrade');
    if (result) {
        if (isKickLevel) this.resumeGiveKickLevelReward(); else this.resumeGiveMultiplierLevelReward();
    }
    return result;
};

HomeMenuEventListner.prototype.onRewardSuccess = function () {
    Debug.log('HomeMenuEventListner.onRewardSuccess()');
    this.app.fire('Enable:Loading', false);
};

HomeMenuEventListner.prototype.onRewardFailed = function () {
    this.app.fire('Enable:Loading', false);
    // Debug.error('HomeMenuEventListner.onRewardFailed()');
};


HomeMenuEventListner.prototype.resumeGiveKickLevelReward = function () {
    this.app.fire('Enable:Loading', false);
    DataManager.Instance.upgradeKickLevel(true);
};

HomeMenuEventListner.prototype.resumeGiveMultiplierLevelReward = function () {
    this.app.fire('Enable:Loading', false);
    DataManager.Instance.upgradeMultiplierLevel(true);
};

HomeMenuEventListner.prototype.pauseGame = function () {
    this.app.fire('Enable:Loading', true);
};

HomeMenuEventListner.prototype.resumeNoReward = function () {
    this.app.fire("adSkippedPopup");
    this.onRewardFailed();
};

HomeMenuEventListner.prototype.adNotAvailable = function () {
    this.app.fire("noAdPopup");
    this.onRewardFailed();
};

// gameMenuEventListner.js
var GameMenuEventListner = pc.createScript('gameMenuEventListner');
GameMenuEventListner.attributes.add('incrementGems', { type: 'number', default: 0.05 });
GameMenuEventListner.attributes.add('incrementMobs', { type: 'number', default: 0.025 });

GameMenuEventListner.attributes.add('gameMenuComponents', {
    type: 'json',
    title: 'Menu Components',
    schema: [
        { name: 'charImg', title: 'Character image ref', type: 'entity' },
        { name: 'charVal', title: 'Character value ref', type: 'entity' },
        { name: 'gemVal', title: 'Gem value ref', type: 'entity' },
        { name: 'keyVal', title: 'Key value ref', type: 'entity' },
        { name: 'progressBar', title: 'Progress bar ref', type: 'entity' },
        { name: 'crownTriggerWidth', title: 'CrownTrigWidth', type: 'number' },
        { name: 'rageFiller', title: 'RageFiller', type: 'asset' },
    ],
});

GameMenuEventListner.attributes.add('plusText', { type: "entity" });


GameMenuEventListner.instance = null;

GameMenuEventListner.prototype.initialize = function () {
    GameMenuEventListner.instance = this;
    this.app.on(Events.OnCollectablePicked, this.onCollectablePicked, this);
    this.currentMobsHit = 0;
    this.currentGems = 0;
    this.currentKeys = 0;
    this.rageMode = false;

    this.totalMobsInLevel = 5;
    this.reset();
    this.on("enable", this.reset, this);
    this.on("destroy", this.onDestroy, this);
    this.gameMenuComponents.rageFiller = this.gameMenuComponents.rageFiller.resources[0];

    this.app.on(Events.OnRevivePlayer, this.handleRevive, this);
    this.app.on('storeReviveData', this.storeReviveData, this);

};

GameMenuEventListner.prototype.reset = function () {
    this.gameMenuComponents.progressBar.element.width = 0;
    this.gameMenuComponents.gemVal.element.text = 0;
    this.gameMenuComponents.charVal.element.text = 0;
    this.currentMobsHit = 0;
    this.currentGems = 0;
    this.rageMode = false;
    this.gameMenuComponents.rageFiller.alphaTest = 1;
    this.deathReason = undefined;

    this.currentKeys = ChestRoomManager.keys;
    this.gameMenuComponents.keyVal.element.text = this.currentKeys;

    if (this.pendingRevive && this.reviveData) {
        const data = this.reviveData;

        setTimeout(() => {
            this.currentMobsHit = data.mobs;
            this.setMobsValue(this.currentMobsHit, true);

            this.currentKeys = data.keys;
            this.gameMenuComponents.keyVal.element.text = this.currentKeys;

            this.currentGems = data.gems;
            this.gameMenuComponents.gemVal.element.text = this.currentGems;
        }, 0);
    }

    this.reviveData = undefined;
    this.pendingRevive = false;

};

GameMenuEventListner.prototype.onDestroy = function () {
    this.app.off(Events.OnCollectablePicked, this.onCollectablePicked, this);
    this.app.off(Events.OnPlayerProgress, this.onPlayerProgress, this);
    this.on("destroy", this.onDestroy, this);
};

GameMenuEventListner.prototype.onCollectablePicked = function (data) {

    switch (data.type) {
        case 3:
            this.currentKeys++;
            this.gameMenuComponents.keyVal.element.text = this.currentKeys;
            break;
        case 4: // Painter Green
            this.gameMenuComponents.charImg.element.color = ColorsContainer.GetColor(ColorType.Green);
            break;
        case 5: // Painter Orange
            this.gameMenuComponents.charImg.element.color = ColorsContainer.GetColor(ColorType.Orange);
            break;
        case 7: // Painter Yellow
            this.gameMenuComponents.charImg.element.color = ColorsContainer.GetColor(ColorType.Yellow);
            break;
        case 8: // Painter Blue
            this.gameMenuComponents.charImg.element.color = ColorsContainer.GetColor(ColorType.Blue);
            break;
        case 0:
        case 1:
        case 6:
        case 9:
            if (data.isValidColor) {

                if (this.plusTextTimout)
                    clearTimeout(this.plusTextTimout);
                this.plusText.enabled = true;
                this.plusTextTimout = setTimeout(() => {
                    this.plusText.enabled = false;
                }, 300);

                this.app.fire("sound:playSound", "Mob_hit");
                this.app.fire("onCorrectMobHit");
                this.currentMobsHit++;
                // var alpha = this.gameMenuComponents.rageFiller.element.meshInstances[0].getParameter('alpha_ref');
                // this.gameMenuComponents.rageFiller.element.meshInstances[0].setParameter('alpha_ref', alpha - 0.1);

                // var alpha = this.rageMaskMat.getParameter('alpha_ref');
                if (!this.rageMode && TutorialManager.instance.isLevelTutorial) {
                    this.gameMenuComponents.rageFiller.alphaTest = pc.math.clamp(this.gameMenuComponents.rageFiller.alphaTest - (1 / (LevelInfo.isBonusLevel ? LevelInfo.gemsCount / 5 : LevelInfo.mobsCount)), 0, 1);
                    Debug.log(TutorialManager.instance.isLevelTutorial);
                }
            } else {
                this.app.fire("onInCorrectMobHit");
                this.app.fire("sound:playSound", "Mob_wrong_hit");
                this.currentMobsHit--;
            }

            this.setMobsValue(this.currentMobsHit);
            // this.gameMenuComponents.progressBar.element.width = changeRange(this.currentMobsHit, 0, LevelInfo.mobsCount, 0, 605);
            // if (this.gameMenuComponents.progressBar.element.width >= this.gameMenuComponents.crownTriggerWidth) {
            //     this.app.fire(Events.OnSetCrownState, true);
            // } else {
            //     this.app.fire(Events.OnSetCrownState, false);
            // }

            break;
        case 2:
            if (!this.rageMode && TutorialManager.instance.isLevelTutorial)
                this.gameMenuComponents.rageFiller.alphaTest = pc.math.clamp(this.gameMenuComponents.rageFiller.alphaTest - (1 / (LevelInfo.isBonusLevel ? LevelInfo.gemsCount / 5 : LevelInfo.mobsCount)), 0, 1);
            this.app.fire("sound:playSound", "Gem_collected");
            this.currentGems++;
            this.gameMenuComponents.gemVal.element.text = this.currentGems;
            break;

        //breakable wall
        case CollectableType.BreakableWall:
            if (!LevelInfo.isBonusLevel) {
                this.currentMobsHit -= 3;
                Debug.log("wall");
                if (this.currentMobsHit <= 0) {
                    this.currentMobsHit = 0;
                    this.deathReason = "wall";
                    this.app.fire(Events.OnHealthChanged, {
                        health: 0,
                        target: AttackTarget.Player,
                        reason: "Obstacle",
                    });
                }
                this.setMobsValue(this.currentMobsHit);
                // this.gameMenuComponents.progressBar.element.width = changeRange(this.currentMobsHit, 0, LevelInfo.mobsCount, 0, 605);
            }
            // if (this.gameMenuComponents.progressBar.element.width >= this.gameMenuComponents.crownTriggerWidth) {
            //     this.app.fire(Events.OnSetCrownState, true);
            // } else {
            //     this.app.fire(Events.OnSetCrownState, false);
            // }

            break;

        case CollectableType.Lava:
            this.currentMobsHit -= 1;
            if (this.currentMobsHit <= 0) {
                this.currentMobsHit = 0;
            }

            this.setMobsValue(this.currentMobsHit);

            // this.gameMenuComponents.progressBar.element.width = changeRange(this.currentMobsHit, 0, LevelInfo.mobsCount, 0, 605);
            // if (this.gameMenuComponents.progressBar.element.width >= this.gameMenuComponents.crownTriggerWidth) {
            //     this.app.fire(Events.OnSetCrownState, true);
            // } else {
            //     this.app.fire(Events.OnSetCrownState, false);
            // }

            break;
    }

    if (this.gameMenuComponents.rageFiller.alphaTest <= 0) {
        this.ActivateRageMode();
        this.app.fire(Events.OnRageModeActivated);
    }
};

GameMenuEventListner.prototype.storeReviveData = function (data) {
    this.reviveData = data;
};

GameMenuEventListner.prototype.handleRevive = function () {
    this.pendingRevive = true;
}

GameMenuEventListner.prototype.setMobsValue = function (value, instantly) {
    this.gameMenuComponents.charVal.element.text = value;
    this.updateProgressBar(instantly);
}

GameMenuEventListner.prototype.ActivateRageMode = function () {
    this.rageMode = true;
    this.gameMenuComponents.rageFiller.alphaTest = 0;
};

// update code called every frame
GameMenuEventListner.prototype.update = function (dt) {
    if (this.gameMenuComponents.rageFiller.alphaTest >= 1 && this.rageMode) {
        this.rageMode = false;
        this.app.fire(Events.OnRageModeDeactivated);
        this.gameMenuComponents.rageFiller.alphaTest = 1;
    } else if (this.rageMode) {
        this.gameMenuComponents.rageFiller.alphaTest = pc.math.clamp(this.gameMenuComponents.rageFiller.alphaTest + (dt * 0.1), 0, 1);
    }
};

GameMenuEventListner.prototype.updateProgressBar = function (instantly) {

    let from = this.gameMenuComponents.progressBar.element.width;
    let to = changeRange(this.currentMobsHit, 0, LevelInfo.mobsCount, 0, 605);

    if (this.progressBaarTween) TweenWrapper.StopTween(this.progressBaarTween);
    if (instantly) {
        this.updateCrownState();
        this.gameMenuComponents.progressBar.element.width = to;
    } else {
        this.progressBaarTween = TweenWrapper.TweenNumber(from, to, 0.25, (obj) => {
            this.gameMenuComponents.progressBar.element.width = obj.number;
            this.updateCrownState();
        }, () => { this.gameMenuComponents.progressBar.element.width = to; });
    }

};

GameMenuEventListner.prototype.updateCrownState = function () {
    if (this.gameMenuComponents.progressBar.element.width >= this.gameMenuComponents.crownTriggerWidth) {
        this.app.fire(Events.OnSetCrownState, true);
    } else {
        this.app.fire(Events.OnSetCrownState, false);
    }
};

// settingsMenuEventListner.js
var SettingsMenuEventListner = pc.createScript('settingsMenuEventListner');

SettingsMenuEventListner.attributes.add('settingBtns', {
    type: 'json',
    title: 'Setting Buttons',
    schema: [
        { name: 'closeBtn', title: 'close Button', type: 'entity' },
    ],
});

SettingsMenuEventListner.prototype.initialize = function () {
    this.initEvents();
};

SettingsMenuEventListner.prototype.initEvents = function () {

    this.settingBtns.closeBtn.button.on("click", this.onCloseBtnClicked, this);
    this.on("destroy", this.onDestroy, this);

};

SettingsMenuEventListner.prototype.onDestroy = function () {
    this.settingBtns.closeBtn.button.off("click", this.onCloseBtnClicked, this);
};

SettingsMenuEventListner.prototype.onCloseBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire("changeMenuState", MenuManager.States.CloseOverlay);

};

// update code called every frame
SettingsMenuEventListner.prototype.update = function (dt) {

};

// sound-manager.js
var SoundManager = pc.createScript('soundManager');

SoundManager.attributes.add('soundButton', { type: 'entity' });
SoundManager.attributes.add('soundSprite', { type: 'entity' });
SoundManager.attributes.add('soundSpriteCheck', { type: 'asset' });
SoundManager.attributes.add('soundSpriteUncheck', { type: 'asset' });

SoundManager.instance = null;

SoundManager.masterVolume = 1.0;
SoundManager.apiVolumeMultiplier = 0.0;

// initialize code called once per entity
SoundManager.prototype.initialize = function () {

    SoundManager.instance = this;
    this.app.on("sound:playSound", this.playSound.bind(this));
    this.app.on("sound:pauseSound", this.pauseSound.bind(this));
    this.app.on("sound:stopSound", this.stopSound.bind(this));
    this.app.on("sound:resumeSound", this.resumeSound.bind(this));
    this.app.on("sound:muteGameSound", this.muteGameSound.bind(this));
    this.app.on("sound:adMuteSound", this.adMuteSound.bind(this));
    this.app.on("setSoundState", this.onSetSoundState, this);
    this.app.on("setAudioPaused", this.onSetAudioPaused, this);

    this.soundButton.button.on("click", this.onSoundBtnClick, this);

    /* API Events */
    APIMediator.onAudioStateChange((isMuted) => {
        SoundManager.externalMuteStatus = isMuted;
        this.setVolumeMultiplier(SoundManager.externalMuteStatus ? 0 : 1);
    });

    this.on('destroy', function () {
        this.app.off("sound:playSound");
        this.app.off("sound:pauseSound");
        this.app.off("sound:stopSound");
        this.app.off("sound:resumeSound");
        this.app.off("sound:muteGameSound");
        this.app.off("setAudioPaused");
        this.soundButton.button.off("click", this.onSoundBtnClick, this);
    }.bind(this));
};

SoundManager.prototype.onSetSoundState = function (isMute) {
    if (isMute)
        this.entity.sound.volume = 0
    else
        this.entity.sound.volume = 1;
};

SoundManager.prototype.onSoundBtnClick = function () {
    this.isMuteSound = !this.isMuteSound;
    this.muteGameSound(this.isMuteSound);
};

SoundManager.prototype.postInitialize = function () {

    if (APIMediator.getStorageItem("GR_SOUND") === null) {
        APIMediator.setStorageItem("GR_SOUND", JSON.stringify("disable"));
        this.muteGameSound(false);
        this.isMuteSound = false;
    } else {

        let jsonData = APIMediator.getStorageItem("GR_SOUND");
        sound = JSON.parse(jsonData);
        Debug.log(sound);
        if (sound === "disable") {
            this.isMuteSound = false;
            this.muteGameSound(false);
        } else {
            this.isMuteSound = true;
            this.muteGameSound(true);
        }
    }

    /* override with external mute values */
    SoundManager.externalMuteStatus = APIMediator.isMuted();
    this.setVolumeMultiplier(SoundManager.externalMuteStatus ? 0 : 1);
};


SoundManager.prototype.playSound = function (soundname, delay) {
    if (delay && delay > 0)
        setTimeout(() => { this.entity.sound.slot(soundname).play(); }, delay * 1000);
    else
        this.entity.sound.slot(soundname).play();
};

SoundManager.prototype.pauseSound = function (soundname) {
    this.entity.sound.slot(soundname).pause();
};

SoundManager.prototype.stopSound = function (soundname) {
    Debug.log('stopSound: ', soundname);
    this.entity.sound.slot(soundname).stop();
};

SoundManager.prototype.resumeSound = function (soundname) {
    this.entity.sound.slot(soundname).resume();
};

SoundManager.prototype.setSoundVolume = function (soundname, vol) {
    this.entity.sound.slot(soundname).volume = vol;
};

SoundManager.prototype.adMuteSound = function (canMuteSound) {
    if (canMuteSound) {
        this.entity.sound.volume = 0;
    } else {
        if (!this.isMuteSound) // check if it is already not disabled in the settings.
            this.entity.sound.volume = 1;
    }
};

SoundManager.prototype.muteGameSound = function (canMuteSound) {
    this.isMuteSound = canMuteSound;
    if (canMuteSound) {
        this.entity.sound.volume = 0;
        APIMediator.setStorageItem("GR_SOUND", JSON.stringify("enable"));
        this.soundSprite.element.sprite = this.soundSpriteUncheck.resource;

    } else {
        this.entity.sound.volume = 1;
        APIMediator.setStorageItem("GR_SOUND", JSON.stringify("disable"));
        this.soundSprite.element.sprite = this.soundSpriteCheck.resource;
    }
};


SoundManager.prototype.onSetAudioPaused = function(paused) {
    this.setMasterVolume(paused ? 0 : 1);
};


SoundManager.prototype.updateVolume = function () {
    this.app.systems.sound.volume = SoundManager.masterVolume * SoundManager.apiVolumeMultiplier;
};


SoundManager.prototype.setMasterVolume = function (volume) {
    SoundManager.masterVolume = volume;
    this.updateVolume();
};


SoundManager.prototype.setVolumeMultiplier = function (volume) {
    SoundManager.apiVolumeMultiplier = volume;
    this.updateVolume();
};

// playerStepsSoundHandler.js
var PlayerStepsSoundHandler = pc.createScript('playerStepsSoundHandler');

// initialize code called once per entity
PlayerStepsSoundHandler.prototype.initialize = function () {

    this.app.on("onStartMovementSound", this.onStartMovementSound, this);
    this.soundRunning = false;
    this.isSoundFinished = false;
    this.currentSoundInstance = null;

};

PlayerStepsSoundHandler.prototype.onStartMovementSound = function (state) {

    this.soundRunning = state;
    this.handleSound();

};

PlayerStepsSoundHandler.prototype.handleSound = function () {

    if (this.soundRunning) {

        if (this.currentSoundInstance === null) {

            let soundName = this.getRandomSoundName();
            this.currentSoundInstance = this.entity.sound.slot("Step_" + soundName).play();

        }

    } else {
        if (this.currentSoundInstance)
            this.currentSoundInstance.stop();

        this.currentSoundInstance = null;
    }

};

PlayerStepsSoundHandler.prototype.runNextSound = function () {

    if (this.soundRunning) {
        let soundName = this.getRandomSoundName();
        this.currentSoundInstance = this.entity.sound.slot("Step_" + soundName).play();
    }

};

PlayerStepsSoundHandler.prototype.getRandomSoundName = function () {

    return Math.floor(Math.random() * 5) + 1;

};

// update code called every frame
PlayerStepsSoundHandler.prototype.update = function (dt) {

    if (this.currentSoundInstance) {
        if (!this.currentSoundInstance.isPlaying) {
            this.runNextSound();
        }
    }

};

// CameraController.js
var CameraController = pc.createScript('cameraController');

CameraController.attributes.add('player', { type: 'entity' });
CameraController.attributes.add('target', { type: 'entity' });
CameraController.attributes.add('shakeTarget', { type: 'entity' });

CameraController.attributes.add('shakeTesting', {
    type: 'json',
    title: 'Shake Testing',
    schema: [
        { name: 'duration', type: 'number', title: 'Duration' },
        { name: 'shakeInterval', type: 'number', title: 'Shake Interval' },
        { name: 'maxShakeDistance', type: 'number', title: 'Max Shake Distance' },
    ],
});

CameraController.attributes.add('states', {
    type: 'json', schema: [
        {
            name: 'stateType',
            type: 'number',
            enum:
                [
                    { Mainmenu: 0 },
                    { Gameplay: 1 },
                    { Fight: 2 },
                    { Flight: 3 },
                    { End: 4 },
                    { Wall: 5 },
                    { WallBreak: 6 },
                    { Dodge1: 7 },
                    { Dodge2: 8 },
                    { Dodge3: 9 },
                    { Dodge4: 10 },
                    { Dead: 11 },
                ],
        },
        { name: 'refTransform', type: 'entity' },
        { name: 'followRotation', type: 'boolean', },
        { name: 'lookAtPlayer', type: 'boolean', },
        { name: 'lookAtOffset', type: 'vec3', },
    ], array: true
});

// initialize code called once per entity
CameraController.prototype.initialize = function () {

    this.time = 1000;
    this.duration = 0;

    this.shakeTarget = this.shakeTarget || this.entity;
    this.offset = this.entity.getPosition().clone();
    this.app.on(Events.OnChangeCameraState, this.OnChangeCameraState, this);
    this.app.on(Events.ShakeCamera, this.shake, this);

    this.pos = this.entity.getLocalPosition();
    this.rot = this.entity.getLocalEulerAngles();
    this.speed = 5;
    this.endPos = new pc.Vec3(0, 0, 0);

    this.OnChangeCameraState(CameraState.Mainmenu, 5, true);
};

// Ref -> param = { pos: vec3(), rot: vec3() };
CameraController.prototype.OnChangeCameraState = function (id, speed, instant, param) {

    let state = myFindWhere(this.states, { stateType: id });
    Debug.log('OnChangeCameraState: ', id, speed, instant);

    if (state) {
        this.pos = state.refTransform.getPosition().clone();

        if (state.followRotation)
            this.rot = state.refTransform.getEulerAngles().clone();

        this.target = state.refTransform;
        this.state = state;
        this.speed = speed;
        this.instant = instant;
    }
};

CameraController.prototype.DebugStates = function () {

    if (this.app.keyboard.wasPressed(pc.KEY_1))
        this.OnChangeCameraState(0, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_2))
        this.OnChangeCameraState(1, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_3))
        this.OnChangeCameraState(2, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_4))
        this.OnChangeCameraState(3, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_5))
        this.OnChangeCameraState(4, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_6))
        this.OnChangeCameraState(5, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_7))
        this.OnChangeCameraState(6, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_W))
        this.OnChangeCameraState(7, 5);
    if (this.app.keyboard.wasPressed(pc.KEY_A))
        this.OnChangeCameraState(8, 5);
    if (this.app.keyboard.wasPressed(pc.KEY_X))
        this.OnChangeCameraState(9, 5);
    if (this.app.keyboard.wasPressed(pc.KEY_D))
        this.OnChangeCameraState(10, 5);

    if (this.app.keyboard.wasPressed(pc.KEY_9))
        this.shake(this.shakeTesting.maxShakeDistance, this.shakeTesting.shakeInterval, this.shakeTesting.duration);
};

// update code called every frame
CameraController.prototype.update = function (dt) {
    if (this.time >= this.duration)
        this.updateFollow(dt);
    this.updateShake(dt);
    // this.DebugStates();
};

CameraController.prototype.updateFollow = function (dt) {
    if (this.target) {
        this.pos = this.target.getPosition().clone();

        let newPos = this.entity.getPosition();
        if (this.instant) {
            this.entity.setPosition(this.pos);
        }
        else
            this.entity.setPosition(newPos.lerp(newPos, this.pos, dt * this.speed));

        if (this.state.followRotation) {
            if (this.instant)
                this.entity.setEulerAngles(this.rot);
            else {
                this._startQuat = this._startQuat || new pc.Quat();
                this._startQuat.copy(this.entity.getRotation());
                this._targetQuat = this._targetQuat || new pc.Quat();
                this._targetQuat.setFromEulerAngles(this.rot.x, this.rot.y, this.rot.z);

                this._targetQuat.slerp(this._startQuat, this._targetQuat, pc.math.clamp(dt * this.speed, 0, 1));
                this.entity.setRotation(this._targetQuat);
            }
        }

        if (this.state.lookAtPlayer) {
            let pos = this.player.script.playerController.PlayerRB.getPosition();
            let x = pos.x + this.state.lookAtOffset.x;
            let y = pos.y + this.state.lookAtOffset.y;
            let z = pos.z + this.state.lookAtOffset.z;
            // console.log('pos: ', x, y, z);
            this.entity.lookAt(x, y, z);
        }
    }
};

CameraController.prototype.updateShake = function (dt) {
    this.time += dt;

    if (this.time < this.duration) {
        this.timeSinceLastShake += dt;

        if (this.timeSinceLastShake >= this.shakeInterval) {
            // Use this to reduce the maximum shake distance over the duration of the effect
            let v = 1 - pc.math.clamp(this.time / this.duration, 0, 1);

            // Find a point in a disc to offset the camera by
            // Taken from http://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly
            // let t = 2 * Math.PI * pc.math.random(0, 1);
            // let u = pc.math.random(0, this.maxShakeDistance) * v + pc.math.random(0, this.maxShakeDistance) * v;
            // let r = u > 1 ? 2 - u : u;

            // let x = r * Math.cos(t);
            // let y = r * Math.sin(t);
            // let z = r * Math.tan(t);
            // this.endPos.set(this.startPosition.x + x, this.startPosition.y + y, this.startPosition.z + z);


            const offsetX = pc.math.random(-this.maxShakeDistance, this.maxShakeDistance) * v;
            const offsetY = pc.math.random(-this.maxShakeDistance, this.maxShakeDistance) * v;
            const offsetZ = pc.math.random(-this.maxShakeDistance, this.maxShakeDistance) * v;
            this.endPos.set(this.startPosition.x + offsetX, this.startPosition.y + offsetY, this.startPosition.z + offsetZ);


            if (this.shakeTween) TweenWrapper.StopTween(this.shakeTween);
            this.shakeTween = TweenWrapper.Tween(this.shakeTarget, this.shakeTarget.getLocalPosition(), this.endPos, this.shakeInterval);
            this.timeSinceLastShake -= this.shakeInterval;
        }
    }
};

CameraController.prototype.shake = function (duration, shakeInterval, maxShakeDistance) {
    if (this.time < this.duration) return;

    this.duration = duration;
    this.shakeInterval = shakeInterval;
    this.maxShakeDistance = maxShakeDistance * 3;

    let pos = this.shakeTarget.getLocalPosition();
    if (!this.startPosition) this.startPosition = new pc.Vec3();
    this.startPosition.set(pos.x, pos.y, pos.z);
    this.time = 0;
    this.timeSinceLastShake = 0;
};


// Mover.js
var Mover = pc.createScript('mover');
Mover.attributes.add('Target', { type: 'entity' });

Mover.attributes.add('Loop', { type: 'boolean' });
Mover.attributes.add('Yoyo', { type: 'boolean', default: true });
Mover.attributes.add('Duration', { type: 'number' });

Mover.attributes.add('StartPosition', { type: 'vec3' });
Mover.attributes.add('EndPosition', { type: 'vec3' });
Mover.attributes.add('Ease', {
    type: 'string', default: 'Linear', enum: [
        { Linear: 'Linear' },
        { QuadraticIn: 'QuadraticIn' },
        { QuadraticOut: 'QuadraticOut' },
        { QuadraticInOut: 'QuadraticInOut' },
        { CubicIn: 'CubicIn' },
        { CubicOut: 'CubicOut' },
        { CubicInOut: 'CubicInOut' },
        { QuarticIn: 'QuarticIn' },
        { QuarticOut: 'QuarticOut' },
        { QuarticInOut: 'QuarticInOut' },
        { QuinticIn: 'QuinticIn' },
        { QuinticOut: 'QuinticOut' },
        { QuinticInOut: 'QuinticInOut' },
        { SineIn: 'SineIn' },
        { SineOut: 'SineOut' },
        { SineInOut: 'SineInOut' },
        { ExponentialIn: 'ExponentialIn' },
        { ExponentialOut: 'ExponentialOut' },
        { ExponentialInOut: 'ExponentialInOut' },
        { CircularIn: 'CircularIn' },
        { CircularOut: 'CircularOut' },
        { CircularInOut: 'CircularInOut' },
        { BackIn: 'BackIn' },
        { BackOut: 'BackOut' },
        { BackInOut: 'BackInOut' },
        { BounceIn: 'BounceIn' },
        { BounceOut: 'BounceOut' },
        { BounceInOut: 'BounceInOut' },
        { ElasticIn: 'ElasticIn' },
        { ElasticOut: 'ElasticOut' },
        { ElasticInOut: 'ElasticInOut' }
    ]
});
// initialize code called once per entity
Mover.prototype.initialize = function () {
    this.Target.setLocalPosition(this.StartPosition);
    var endPos = this.EndPosition;
    var loop = this.Loop;
    var yoyo = this.Yoyo;
    var duration = this.Duration;
    var entity = this.Target;
    var ease = this.Ease;

    this.tween = this.app.tween(entity.getLocalPosition())
        .to(endPos, duration, pc[ease])
        .loop(loop)
        .yoyo(yoyo)
        .start();
};

Mover.prototype.Activate = function () {
    this.tween.start();
};

Mover.prototype.Deactivate = function () {
    this.tween.stop();
};

// swap method called for script hot-reloading
// inherit your script state here
// Mover.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// Rotar.js
var Rotar = pc.createScript('rotar');
Rotar.attributes.add('Target', { type: 'entity' });

Rotar.attributes.add('Loop', { type: 'boolean' });
Rotar.attributes.add('YoYo', { type: 'boolean', default: true });
Rotar.attributes.add('Duration', { type: 'number' });

Rotar.attributes.add('Delay', { type: 'number', default: 0 });

Rotar.attributes.add('StartEuler', { type: 'vec3' });
Rotar.attributes.add('EndEuler', { type: 'vec3' });
Rotar.attributes.add('Ease', {
    type: 'string', default: 'Linear', enum: [
        { Linear: 'Linear' },
        { QuadraticIn: 'QuadraticIn' },
        { QuadraticOut: 'QuadraticOut' },
        { QuadraticInOut: 'QuadraticInOut' },
        { CubicIn: 'CubicIn' },
        { CubicOut: 'CubicOut' },
        { CubicInOut: 'CubicInOut' },
        { QuarticIn: 'QuarticIn' },
        { QuarticOut: 'QuarticOut' },
        { QuarticInOut: 'QuarticInOut' },
        { QuinticIn: 'QuinticIn' },
        { QuinticOut: 'QuinticOut' },
        { QuinticInOut: 'QuinticInOut' },
        { SineIn: 'SineIn' },
        { SineOut: 'SineOut' },
        { SineInOut: 'SineInOut' },
        { ExponentialIn: 'ExponentialIn' },
        { ExponentialOut: 'ExponentialOut' },
        { ExponentialInOut: 'ExponentialInOut' },
        { CircularIn: 'CircularIn' },
        { CircularOut: 'CircularOut' },
        { CircularInOut: 'CircularInOut' },
        { BackIn: 'BackIn' },
        { BackOut: 'BackOut' },
        { BackInOut: 'BackInOut' },
        { BounceIn: 'BounceIn' },
        { BounceOut: 'BounceOut' },
        { BounceInOut: 'BounceInOut' },
        { ElasticIn: 'ElasticIn' },
        { ElasticOut: 'ElasticOut' },
        { ElasticInOut: 'ElasticInOut' }
    ]
});


// initialize code called once per entity
Rotar.prototype.initialize = function () {
    this.deltaTime = 0;

    this.Target.setLocalEulerAngles(this.StartEuler);

    this.defaultStart = this.StartEuler;
    this.defaultEnd = this.EndEuler;

    this.Play();
};

Rotar.prototype.Play = function () {
    var start = this.StartEuler.clone();
    var endEuler = this.EndEuler.clone();
    var loop = this.Loop;
    var yoyo = this.YoYo;
    var duration = this.Duration;
    var entity = this.Target;
    var delay = this.Delay;
    var ease = this.Ease;
    this.tween = this.app.tween(start)
        .to(endEuler, duration, pc[ease])
        .delay(delay)
        .loop(loop)
        .yoyo(yoyo)
        .onUpdate( function () {
            entity.setLocalEulerAngles(start);
        })
        .start();
};

Rotar.prototype.Stop = function () {
    this.tween.stop();

    var start = this.Target.getLocalEulerAngles();
    var endEuler = this.defaultStart;
    var entity = this.Target;

    this.app.tween(start)
        .to(endEuler, 0.5, pc.Linear)
        .onUpdate( function () {
            entity.setLocalEulerAngles(start);
        })
        .start();
};

Rotar.prototype.update = function (dt) {
    // if (this.app.keyboard.wasPressed(pc.KEY_E)) {
    //     this.Stop();
    // }

    // if (this.app.keyboard.wasPressed(pc.KEY_R)) {
    //     this.Play();
    // }
};
// swap method called for script hot-reloading
// inherit your script state here
// Rotar.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// ColorMixer.js
var ColorMixer = pc.createScript('colorMixer');
ColorMixer.attributes.add('Target', { type: 'entity' });

ColorMixer.attributes.add('Loop', { type: 'boolean' });
ColorMixer.attributes.add('YoYo', { type: 'boolean', default: true });
ColorMixer.attributes.add('Duration', { type: 'number' });

ColorMixer.attributes.add('StartColor', { type: 'rgb' });
ColorMixer.attributes.add('EndColor', { type: 'rgb' });
ColorMixer.attributes.add('Ease', {
    type: 'string', default: 'Linear', enum: [
        { Linear: 'Linear' },
        { QuadraticIn: 'QuadraticIn' },
        { QuadraticOut: 'QuadraticOut' },
        { QuadraticInOut: 'QuadraticInOut' },
        { CubicIn: 'CubicIn' },
        { CubicOut: 'CubicOut' },
        { CubicInOut: 'CubicInOut' },
        { QuarticIn: 'QuarticIn' },
        { QuarticOut: 'QuarticOut' },
        { QuarticInOut: 'QuarticInOut' },
        { QuinticIn: 'QuinticIn' },
        { QuinticOut: 'QuinticOut' },
        { QuinticInOut: 'QuinticInOut' },
        { SineIn: 'SineIn' },
        { SineOut: 'SineOut' },
        { SineInOut: 'SineInOut' },
        { ExponentialIn: 'ExponentialIn' },
        { ExponentialOut: 'ExponentialOut' },
        { ExponentialInOut: 'ExponentialInOut' },
        { CircularIn: 'CircularIn' },
        { CircularOut: 'CircularOut' },
        { CircularInOut: 'CircularInOut' },
        { BackIn: 'BackIn' },
        { BackOut: 'BackOut' },
        { BackInOut: 'BackInOut' },
        { BounceIn: 'BounceIn' },
        { BounceOut: 'BounceOut' },
        { BounceInOut: 'BounceInOut' },
        { ElasticIn: 'ElasticIn' },
        { ElasticOut: 'ElasticOut' },
        { ElasticInOut: 'ElasticInOut' }
    ]
});

// initialize code called once per entity
ColorMixer.prototype.initialize = function () {
    var color = this.StartColor;
    var endColor = this.EndColor;

    var loop = this.Loop;
    var yoyo = this.YoYo;
    var duration = this.Duration;
    var ease = this.Ease;

    var material = this.Target.render.meshInstances[0].material.clone();
    this.Target.render.meshInstances[0].material = material;

    this.tween = this.app
        .tween(color)
        .to(endColor, duration, pc[ease])
        .loop(loop)
        .yoyo(yoyo)
        .onUpdate( function () {
            material.diffuse = color;
            material.update();
        })
        .start();
};

ColorMixer.prototype.Activate = function () {
    this.tween.start();
};

ColorMixer.prototype.Deactivate = function () {
    this.tween.stop();
};

// swap method called for script hot-reloading
// inherit your script state here
// ColorMixer.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// Trigger.js
var Trigger = pc.createScript('trigger');

Trigger.attributes.add('EnableEntity', { type: 'entity' });
Trigger.attributes.add('DisableEntity', { type: 'entity' });

Trigger.attributes.add('Targets', {
    type: 'json', schema: [{
        name: 'Action',
        type: 'number',
        enum:
            [
                { Enable: 0 },
                { Disable: 1 },
            ]
    }, {
        name: 'Target',
        type: 'entity',
    }, {
        name: 'Component',
        type: 'string'
    }], array: true
});

// initialize code called once per entity
Trigger.prototype.initialize = function () {
    // console.log(this.entity);
};

Trigger.prototype.Fire = function () {
    for (let i = 0; i < this.Targets.length; i++) {
        let t = this.Targets[i];
        let component = null;
        if (t.Target.script) {
            let component = t.Target.script.get(t.Component);
            switch (t.Action) {
                case Action.Enable:
                    if (component != null) {
                        component.Play();
                    }
                    break;
                case Action.Disable:
                    if (component != null) {
                        component.Stop();
                    }
                    break;
            }
        }

        switch (t.Action) {
            case Action.Enable:

                if (this.EnableEntity)
                    this.EnableEntity.enabled = true;
                if (this.DisableEntity)
                    this.DisableEntity.enabled = false;

                if (!component)
                    component = t.Target.c[t.Component];

                if (component)
                    component.enabled = true;
                else
                    t.Target.enabled = true;
                break;
            case Action.Disable:

                if (this.EnableEntity)
                    this.EnableEntity.enabled = false;
                if (this.DisableEntity)
                    this.DisableEntity.enabled = true;

                if (!component) {
                    component = t.Target.c[t.Component];

                    if (component)
                        component.enabled = false;
                    else
                        t.Target.enabled = false;
                }
                break;
        }
    }
    this.entity.fire('setLabel');
};

// update code called every frame
Trigger.prototype.update = function (dt) {
    // if (this.app.keyboard.wasPressed(pc.KEY_O)) {
    //     this.Fire();
    // }
};

// swap method called for script hot-reloading
// inherit your script state here
// Trigger.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// ObstacleObject.js
var ObstacleObject = pc.createScript('obstacleObject');

ObstacleObject.prototype.initialize = function() {

};

ObstacleObject.prototype.update = function(dt) {

};


// obstacleInfo.js
var ObstacleInfo = pc.createScript('obstacleInfo');


ObstacleInfo.attributes.add('label', { type: 'entity', title: 'Label'});

// initialize code called once per entity
ObstacleInfo.prototype.initialize = function() {
    this.entity.on('setLabel', this.setLabel, this);

this.onEnable();
    this.on('enable', this.onEnable, this);
};

ObstacleInfo.prototype.onEnable = function() {
    // console.log(this.entity.name, ' => onEnable: ', this.label);
    if (this.label)
        this.label.enabled = false;
};
// update code called every frame
ObstacleInfo.prototype.update = function(dt) {

};

ObstacleInfo.prototype.setLabel = function (label) {
    // console.log(this.entity.name, ' => setLabel: ', this.label, label);
    if (!this.label) return;

    this.label.enabled = label ? true : false;
    if (this.label.enabled) {
        this.label.element.text = label;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// ObstacleInfo.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// PlaceInCircle.js
var PlaceIncircle = pc.createScript('placeIncircle');
PlaceIncircle.attributes.add('radius', { type: 'number' });

// initialize code called once per entity
PlaceIncircle.prototype.initialize = function () {
    var child = this.entity.children;
    var point = this.entity.getPosition().clone();
    var radius = this.radius;
    var self = this;
    
    setTimeout(function () {
        self.PlaceObjectsInCircle(child, point, radius);
    }, 1000);
};

PlaceIncircle.prototype.PlaceObjectsInCircle = function (objs, point, radius) {
    let num = objs.length;

    for (let i = 0; i < num; i++) {

        /* Distance around the circle */
        var radians = 2 * Math.PI / num * i;

        /* Get the vector direction */
        var vertical = Math.sin(radians);
        var horizontal = Math.cos(radians);

        var spawnDir = new pc.Vec3(horizontal, 0, vertical);

        /* Get the spawn position */
        var pos = new pc.Vec3(spawnDir.x * radius, spawnDir.y * radius, spawnDir.z * radius);
        var spawnPos = pos; // Radius is just the distance away from the point

        var obj = objs[i];
        obj.setLocalPosition(spawnPos);
        obj.lookAt(pos.sub(point));
    }
};

// update code called every frame
PlaceIncircle.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// PlaceIncircle.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// BossModifier.js
var BossModifier = pc.createScript('bossModifier');
BossModifier.attributes.add('info', {
    type: 'json', schema: [
        {
            name: 'health',
            type: 'number',
            default: 100,
        }, {
            name: 'position',
            type: 'vec3',
            default: [0, 0, 6],
        }, {
            name: 'rotation',
            type: 'vec3',
            default: [0, 180, 0]
        }, {
            name: 'scale',
            type: 'vec3',
            default: [1, 1, 1]
        }, {
            name: 'patchIndex',
            type: 'number'
        }, {
            name: 'color', 
            type: 'rgb'
        }
    ],
});

// initialize code called once per entity
BossModifier.prototype.initialize = function () {

};

// update code called every frame
BossModifier.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// BossModifier.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// MiniBossFightingManager.js
var MiniBossFightingManager = pc.createScript('miniBossFightingManager');

MiniBossFightingManager.attributes.add('miniBossSettings', {
    title: 'Mini Boss Settings',
    type: 'json',
    schema: [
        { name: 'onlyEndFlightAnim', type: 'boolean', title: 'Only End Flight Anim' },
        { name: 'fixedEndFlightAnim', type: 'string', title: 'Fixed Ending Animation' },
        { name: 'fixedFlightSpeed', type: 'number', title: 'Fixed Flight Speed' },
        { name: 'distanceMultiplier', type: 'number', title: 'Distance Multiplier' },
        { name: 'fixedHeroLevel', type: 'number', title: 'Fixed Hero Level' },
        { name: 'fixedMultiplier', type: 'number', title: 'Fixed Multiplier' },
    ],
});

// initialize code called once per entity
MiniBossFightingManager.prototype.initialize = function () {
    MiniBossFightingManager.Instance = this;

    this.app.on(Events.OnLevelLoaded, this.onLevelLoaded, this);
    this.app.on(Events.OnFightSequenceCompleted, this.onFightCompleted, this);
    this.app.on(Events.OnBossSpawned, this.setBoss, this);

    this.app.on('MiniBoss:Flight', this.miniBossFlight, this);
    this.app.on('MiniBoss:SetFlightSpeedFactor', this.setFlightSpeedFactor, this);

    this.flightData = undefined;
    this.flightSpeedFactor = 1;
};

// update code called every frame
MiniBossFightingManager.prototype.update = function (dt) {
    this.updateBossFlight(dt);
};

MiniBossFightingManager.prototype.setBoss = function (boss) {
    // console.log('setBoss: ', boss);
    this.boss = boss;
};

MiniBossFightingManager.prototype.onLevelLoaded = function (info) {

    this.startingZ = info.maxForward;
    this.app.fire('Degenerate:FinishTrack');
};

MiniBossFightingManager.prototype.onFightCompleted = function () {
    // console.log('On Fight Completed');
    this.app.fire('Generate:FinishTrack', this.startingZ, this.boss);
};

MiniBossFightingManager.prototype.miniBossFlight = function (segmentSize, totalSegments) {
    // console.log('On miniBossFlight');

    this.playSound('Wind');

    let boss = this.boss.script.bossController;
    let settings = this.miniBossSettings;

    boss.animGraph.enabled = false;
    boss.bossView.parent.enabled = true;

    let player = ReferenceManager.Instance.player.script.playerController;
    let bossFightView = ReferenceManager.Instance.menus.bossFight.script.bossFightViewController;
    let data = DataManager.Instance;

    let maxLevel = player.maxHeroLevel;
    let heroPower = bossFightView.powerbarVal;

    if (settings.fixedHeroLevel > 0) player.heroLevel = settings.fixedHeroLevel;

    let power = pc.math.clamp(player.heroLevel / maxLevel, 0, 1) *
        Math.max(heroPower, Settings.finishTrack.generalSettings.powerBase);

    let targetMultiplier = settings.fixedMultiplier > 0 ? settings.fixedMultiplier : Settings.upgrade.getTargetMultiplier(data.kickLevel, power) - 1;
    let maxMultiplier = Settings.upgrade.getMultiplier(data.multiplierLevel);
    this.targetMultiplier = Math.max(1, targetMultiplier);

    DataManager.Instance.currentRewardMultiplier = this.targetMultiplier;

    let multiplier = Math.min(targetMultiplier, maxMultiplier);
    multiplier = Math.max(multiplier, 1.5);
    let wallReached = targetMultiplier > maxMultiplier || player.isRevived;

    let distance = Settings.upgrade.getFlyingDistance(
        player.isRevived ? maxMultiplier : multiplier,
        Settings.finishTrack.generalSettings.segmentSize
    );

    let ragdollPresetIndex = 2;

    let animData = wallReached ? Settings.finishTrack.getWallRagdollPresetData()
        : Settings.finishTrack.getRagdollPresetData(distance, ragdollPresetIndex);

    let speed = settings.fixedFlightSpeed;

    let startScale = boss.entity.getLocalScale().z;
    let endScale = 1.35;

    let startZ = this.boss.getLocalPosition().z;
    let endZ = multiplier <= 2.2 ? startZ : startZ + (distance - animData.distance - boss.zOffset);

    this.app.fire(Events.OnFlightBegins);
    // this.app.fire(Events.OnChangeCameraSpeed, 20);

    // console.log('player: ', player);
    // console.log('heroLevel: ', player.heroLevel);
    // console.log('maxLevel: ', maxLevel);
    // console.log('heroPower: ', heroPower);
    // console.log('power: ', power);
    // console.log('targetMultiplier: ', targetMultiplier);
    // console.log('maxMultiplier: ', maxMultiplier);
    // console.log('multiplier: ', multiplier);
    // console.log('segmentSize: ', Settings.finishTrack.generalSettings.segmentSize);
    // console.log('distance: ', distance);
    // console.log("Calc Dist: ", (distance - animData.distance + boss.zOffset));
    // console.log('rangeZ: ', startZ, endZ);
    // console.log('animData: ', animData);
    // console.log('boss.zOffset: ', boss.zOffset);

    if (!settings.onlyEndFlightAnim) {
        boss.bossView.anim.baseLayer.play(`Flying Start`);
        this.flightData = {
            speed: speed > 0 ? speed : animData.speed,
            startZ: startZ,
            endZ: endZ,
            startScale: startScale,
            endScale: endScale,
            currentZ: startZ,
            animationName: animData.name,
            duration: animData.duration,
            soundPoints: animData.soundPoints.split(",").map(Number),
            wallReached: wallReached
        };


    }
    else {
        this.boss.fire('SetBossScale', endScale, endScale, endScale);
        this.endFlight(animData.name, animData.duration);
    }
};

MiniBossFightingManager.prototype.updateBossFlight = function (dt) {
    if (!this.flightData) return;

    this.flightData.currentZ += this.flightData.speed * dt * this.flightSpeedFactor;

    let z = pc.math.clamp(this.flightData.currentZ, this.flightData.startZ, this.flightData.endZ);
    let lerpVal = 0;
    if (this.flightData.endZ !== this.flightData.startZ)
        lerpVal = (z - this.flightData.startZ) / (this.flightData.endZ - this.flightData.startZ);
    else lerpVal = 1;
    let scale = pc.math.lerp(this.flightData.startScale, this.flightData.endScale, lerpVal);

    this.boss.fire('SetBossScale', scale, scale, scale);
    this.boss.fire('SetTeleport', 0, 0, z, { z: true });

    if (z >= this.flightData.endZ) {
        // console.log("z: ", z);
        // console.log("lerpVal: ", lerpVal);
        this.endFlight();
        this.flightData = undefined;
    }
};

MiniBossFightingManager.prototype.endFlight = async function () {

    let duration = this.flightData.duration;
    let animName = this.miniBossSettings.fixedEndFlightAnim.length > 0 ?
        this.miniBossSettings.fixedEndFlightAnim : this.flightData.animationName;

    this.boss.script.bossController.bossView.anim.baseLayer.play(`Ragdoll ${animName}`);

    this.playFlightEndSounds(duration);

    await APIMediator.gameComplete();

    CustomCoroutine.Instance.set(() => {
        this.playSound('Fireworks');
        this.app.fire('FireworksVfx:Play', FireworkType.bottomCenter, 4);
        this.app.fire("showHappyTime");
        // this.app.fire('changeMenuState', MenuManager.States.Win);
        let skinPickup = AttachmentsHandler.skinPickup;
        let newState = skinPickup ? MenuManager.States.LooksGoodView : MenuManager.States.Win;
        this.app.fire('changeMenuState', newState);

        // this.app.fire("sound:stopSound", 'Falling');
    }, duration);
    // // console.log('endFlight: ', animName);
};

MiniBossFightingManager.prototype.playFlightEndSounds = function (duration) {
    let soundPoints = this.flightData.soundPoints;
    let wallReached = this.flightData.wallReached;

    // console.log(soundPoints);
    if (wallReached) {
        CustomCoroutine.Instance.set(() => {
            this.playSound('WallSmash');
            this.app.fire(Events.ShakeCamera, 0.4, 0.04, 0.1);
        }, duration * soundPoints[0]);
        CustomCoroutine.Instance.set(() => { this.playSound('Falling'); }, duration * soundPoints[1]);
    }
    else {
        for (let i = 0; i < soundPoints.length; i++) {
            // console.log("Init Falling: ", duration * soundPoints[i]);
            CustomCoroutine.Instance.set(() => {
                // console.log("Falling: ", soundPoints[i]);
                // this.app.fire(Events.ShakeCamera, 0.4, 0.04, 0.1);
                this.playSound('Falling');
            }, duration * soundPoints[i]);
        }
    }
};

MiniBossFightingManager.prototype.playSound = function (name) {
    this.app.fire("sound:playSound", name);
};

MiniBossFightingManager.prototype.setFlightSpeedFactor = function (speedFactor) {
    this.flightSpeedFactor = speedFactor;
    // console.log('endFlight: ', animName);
};

// swap method called for script hot-reloading
// inherit your script state here
// MiniBossFightingManager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// Logger_Manager.js
var LoggerManager = pc.createScript('loggerManager');

var isDebug = false; // Global debug state
var isDebugOnMobile = false;

if (this.isDebugOnMobile) {
    console.warn('Mobile debugging is enabled');
    const vConsoleScriptElement = document.createElement('script');
    vConsoleScriptElement.setAttribute('src', 'https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js');
    document.head.appendChild(vConsoleScriptElement);

    vConsoleScriptElement.onload = () => new VConsole();
}

var Debugger = function (gState, str) {
    this.debug = {};
    if (!window.console) return function () { };
    if (gState && str.isDebug) {
        console.warn('Debugger is active!');
        for (let m in console)
            if (typeof console[m] == 'function')
                this.debug[m] = console[m].bind(str.toString() + ": ");
    } else {
        for (let m in console)
            if (typeof console[m] == 'function')
                this.debug[m] = function () { };
    }
    return this.debug;
};

Debug = Debugger(this.isDebug, this);


// FinishTrackController.js
var FinishTrackController = pc.createScript('finishTrackController');

FinishTrackController.attributes.add('mutiplierSettings', {
    type: 'json',
    title: 'Mutiplier Settings',
    schema: [
        { name: 'start', type: 'number', title: 'Start' },
        { name: 'base', type: 'number', title: 'Base' },
        { name: 'increment', type: 'number', title: 'Increment' },
    ],
});

FinishTrackController.attributes.add('trackColors', {
    type: 'json',
    title: 'Track Colors',
    schema: [
        { name: 'color', title: 'Color', type: 'rgb' }
    ],
    array: true,
});

FinishTrackController.attributes.add('testing', {
    type: 'json',
    title: 'Testing',
    schema: [
        { name: 'fixedWallPos', title: 'Fixed Wall Position', type: 'number', default: -1 },
        { name: 'distanceTile1', title: 'Distance Tile1', type: 'number' },
        { name: 'distanceTile2', title: 'Distance Tile2', type: 'number' },
    ]
});

FinishTrackController.attributes.add('lockedWall', { type: 'entity', title: 'Locked Wall' });
FinishTrackController.attributes.add('startingOffset', { type: 'number', title: 'Starting Offset' });
FinishTrackController.attributes.add('trackSize', { type: 'number', title: 'Track Size' });
FinishTrackController.attributes.add('tracksPool', { type: 'entity', title: 'Tracks Pool' });
FinishTrackController.attributes.add('trackMat', { type: 'asset', assetType: 'material', title: 'Track Material' });
FinishTrackController.attributes.add('breakableWall', { type: 'entity', title: 'Breakable Wall' });
FinishTrackController.attributes.add('inactiveColor', { type: 'rgb', title: 'Inactive Color' });
FinishTrackController.attributes.add('fixedWallPos', { type: 'number', title: 'Fixed Wall Position', default: -1 });


FinishTrackController.prototype.initialize = function () {
    this.multiplierUpgradesBought = 0;

    this.app.on('Generate:FinishTrack', this.showTrack, this);
    this.app.on('Degenerate:FinishTrack', this.hideTrack, this);
    this.app.on('Track:CurrentMultiplier', this.upgradeLastMaxMultiplier, this);
    this.app.on(Events.OnBossSpawned, this.setBoss, this);

    this.tracks = [];
    this.breakableWallReference = undefined;
    this.pool = this.tracksPool.script.PoolController;
};

FinishTrackController.prototype.showTrack = function (startingZ, boss) {
    //console.log('showTrack');
    this.tracks = [];

    let baseMultiplier = this.mutiplierSettings.start;
    let multiplierStep = Settings.upgrade.multiplierIncrementValue;

    let level = DataManager.Instance.multiplierLevel;
    let mul = Settings.upgrade.getMultiplier(level);
    let lastMaxMultiplier = DataManager.Instance.lastMaxMultiplier;

    let multiplierIncrement = 0;

    let count = parseInt((mul - 1) / multiplierStep);
    let z = startingZ + this.startingOffset;
    let i = 0;
    Debug.log('mul > lastMaxMultiplier', mul, lastMaxMultiplier);

    let wallPos = this.fixedWallPos;
    if (mul > lastMaxMultiplier) {
        wallPos = parseInt((lastMaxMultiplier - 1) / multiplierStep);
        Debug.log('lastMaxMultiplier i: ', wallPos);
    }

    for (; i <= count; i++, multiplierIncrement += multiplierStep) {
        let track = this.pool.get();
        // track.setLocalEulerAngles(0, -180, 0);
        if (this.tracks.length <= 0)
            track.setPosition(0, -0.1, z);
        else
            track.setPosition(0, -0.1, z + i * this.trackSize);

        this.tracks.push(track);

        track.enabled = true;
        track.fire('setMul', baseMultiplier + multiplierIncrement);

        let mat = this.trackMat.resource.clone();
        mat.diffuse.set(this.inactiveColor.r, this.inactiveColor.g, this.inactiveColor.b);
        track.fire('setMat', mat);
        track.fire('setColor', this.evaluateColor(i / count));
        track.fire('setBoss', boss);

        if (i === wallPos) {
            this.breakableWallReference = this.breakableWall.clone();
            this.app.root.addChild(this.breakableWallReference);
            this.breakableWallReference.setLocalScale(1.4, 1.4, 1.4);
            this.breakableWallReference.setPosition(0, -0.1, z + i * this.trackSize);
            this.breakableWallReference.enabled = true;
            this.breakableWallReference.fire('setLabel', "X" + (baseMultiplier + multiplierIncrement).toFixed(1));
        }
    }

    this.lockedWall.enabled = true;
    this.lockedWall.fire('setLabel', "X" + (baseMultiplier + multiplierIncrement).toFixed(1));
    this.lockedWall.setPosition(0, 0, z + (i - 1) * this.trackSize);

    CustomCoroutine.Instance.set(() => {
        GameManager.Instance.setGameSpeed(0.4);
        // ReferenceManager.Instance.player.script.playerController.setAnimSpeed(0.2);
    }, 0.2);

    CustomCoroutine.Instance.set(() => {
        Debug.log('MiniBoss:Flight');
        this.app.fire('MiniBoss:Flight', this.trackSize, count);
        // ReferenceManager.Instance.player.script.playerController.setAnimSpeed(1);
        GameManager.Instance.setGameSpeed(1);

    }, 0.8);
};

FinishTrackController.prototype.hideTrack = function () {
    //console.log('hideTrack: ', this.tracks.length);
    for (let i = this.tracks.length - 1; i >= 0; i--) {
        this.pool.restore(this.tracks[i]);
        //console.log('hideTrack: ', i);
    }
    this.lockedWall.enabled = false;
    if (this.breakableWallReference)
        this.breakableWallReference.enabled = false;

    this.tracks = [];
};

FinishTrackController.prototype.upgradeLastMaxMultiplier = function (mul) {
    if (DataManager.Instance.lastMaxMultiplier < mul)
        DataManager.Instance.upgradeLastMaxMultiplier(mul);
};

FinishTrackController.prototype.setBoss = function (boss) {
    // console.log('setBoss: ', boss);
    this.boss = boss;
};

FinishTrackController.prototype.evaluateColor = function (time) {
    let segments = this.trackColors.length;
    let ratio = time * segments;
    let color;

    for (let i = 0; i < segments; i++) {
        if (ratio <= i + 1) {
            let t = ratio - i;
            if (i + 1 >= segments)
                color = this.trackColors[i].color;
            else
                color = this.hex2rgb(pc.math.lerp(this.trackColors[i].color, this.trackColors[i + 1].color, t));

            break;
        }
    }

    //console.log('evaluteColor: ', time, segments, ratio, color);
    return color;
};

FinishTrackController.prototype.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

FinishTrackController.prototype.hex2rgb = function (hex) {
    return {
        r: ('0x' + hex[1] + hex[2] | 0) / 255,
        g: ('0x' + hex[3] + hex[4] | 0) / 255,
        b: ('0x' + hex[5] + hex[6] | 0) / 255
    };
};

// BossController.js
var BossController = pc.createScript('bossController');
BossController.attributes.add('shake', { type: 'vec3', default: [0.3, 0.08, 0.05] });
BossController.attributes.add('modelObject', { type: 'entity' });
BossController.attributes.add('modelObject2', { type: 'entity' });
BossController.attributes.add('animGraph', { type: 'entity' });
BossController.attributes.add('rigidbodyComp', { type: 'entity' });
BossController.attributes.add('bossView', { type: 'entity' });
BossController.attributes.add('posReference', { type: 'entity' });
BossController.attributes.add('punchVFX', { type: 'entity' });
BossController.attributes.add('vfxPositions', { type: 'entity', array: true });


BossController.attributes.add('testing', {
    title: 'Testing',
    type: 'json',
    schema: [
        { name: 'customBossDamage', type: 'number' },
        { name: 'customBossScale', type: 'number' },
    ],
});

// initialize code called once per entity
BossController.prototype.initialize = function () {

    var material = this.modelObject.render.meshInstances[0].material.clone();
    this.modelObject.render.meshInstances[0].material = material;
    var material2 = this.modelObject2.render.meshInstances[0].material.clone();
    this.modelObject2.render.meshInstances[0].material = material;

    this.health = this.maxHealth = 0;
    this.posReference.rigidbody.on('triggerenter', this.OnTriggerEnter, this);

    this.damageDelay = 0.25;
    this.prepareDamageTrigger = false;
    this.maxDamageDelay = this.damageDelay;
    this.isFighting = false;


    // this.animGraph.anim.on('OnPunch', function (event) {
    //     this.app.fire(Events.OnDamage, {
    //         target: AttackTarget.Player,
    //         damage: 10
    //     });
    // }, this);

    // this.app.fire(Events.OnBossSpawned, this.entity);

    this.mat = material;
    this.mat2 = material2;
    this.app.on(Events.OnDamage, this.OnDamage, this);
    this.app.on(Events.OnAttack, this.OnAttack, this);
    this.app.on(Events.OnRevivePlayer, this.OnRevivePlayer, this);
    this.app.on(Events.OnHealthChanged, this.OnHealthChanged, this);
    this.app.on(Events.OnFightSequenceBegins, this.OnFightSequenceBegins, this);
    this.app.on(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);
    this.app.on(Events.OnLevelLoaded, this.OnLevelLoaded, this);
    this.app.on(Events.OnFinishLineStarted, this.OnFinishLineStarted, this);
    this.app.on(Events.UpdateBossPosition, this.OnFinishLineStarted, this);


    // console.log(this.entity.name, ' initialize');
    this.entity.on('SetTeleport', this.setTeleport, this);
    this.entity.on('SetBossScale', this.setBossScale, this);
    // this.entity.on('PlayAnim', this.playAnim, this);

    this.app.on(Events.OnPlayerDead, this.OnPlayerDead, this);
    this.app.on('MiniBoss:PlayPunchVfx', this.playPunchVfx, this);
    this.app.on('MiniBoss:PlayKickVfx', this.playKickVfx, this);


    this.on('destroy', function () {
        this.app.off(Events.OnDamage, this.OnDamage, this);
        this.app.off(Events.OnAttack, this.OnAttack, this);
        this.app.off(Events.OnPlayerDead, this.OnPlayerDead, this);
        this.app.off(Events.OnRevivePlayer, this.OnRevivePlayer, this);
        this.app.off(Events.OnHealthChanged, this.OnHealthChanged, this);
        this.app.off(Events.OnFightSequenceBegins, this.OnFightSequenceBegins, this);
        this.app.off(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);
        this.app.off(Events.OnFinishLineStarted, this.OnFinishLineStarted, this);
        this.app.off('MiniBoss:PlayPunchVfx', this.playPunchVfx, this);
        this.app.off('MiniBoss:PlayKickVfx', this.playKickVfx, this);
    }, this);
};

BossController.prototype.postInitialize = function () {
    this.app.fire(Events.OnBossSpawned, this.entity);
};

BossController.prototype.OnPlayerDead = function () {

};

BossController.prototype.OnLevelLoaded = function () {
    this.damageDelay = 0.25;
};

BossController.prototype.OnTriggerEnter = function (result) {
    // console.log('OnTriggerEnter');
    GameManager.Instance.setGameSpeed(Settings.finishTrack.flyingSettings.breakWallSlowMoSpeed);
    // this.app.fire('MiniBoss:SetFlightSpeedFactor', Settings.finishTrack.flyingSettings.breakWallSlowMoSpeed);
    this.app.fire(Events.OnChangeCameraState, CameraState.WallBreak, 20);
    this.app.fire("sound:playSound", "WallBreak");

    CustomCoroutine.Instance.set(() => {
        // this.app.fire(Events.OnChangeMenuState, 5);
        GameManager.Instance.setGameSpeed(1);

        this.app.fire('MiniBoss:SetFlightSpeedFactor', 1);
        this.app.fire(Events.OnChangeCameraState, CameraState.Flight, 5);
    }, Settings.finishTrack.flyingSettings.breakWallSlowMoDuration);

    let trigger = result.script?.trigger;
    if (trigger) trigger.Fire();
};

BossController.prototype.OnRevivePlayer = function () {
    // if (!this.isFighting)
    //     return;

    // // console.log("BossController ---> OnRevivePlayer");
    // this.app.fire(Events.OnHealthChanged, {
    //     target: AttackTarget.Boss,
    //     health: 0,
    //     reason: "Player",
    // });
};

BossController.prototype.OnHealthChanged = function (info) {
    if (!this.isFighting)
        return;

    if (info.health == 0) {
        if (info.target == AttackTarget.Boss) {
            // this.ProcessDeath(true);
            this.app.fire(Events.OnFightSequenceCompleted);
        } else {
            if (!this.isFighting) {
                return;
            }

            // this.ProcessAttack(false);
            let duration = this.getAnimDuration('Kick');
            this.isKilledPlayer = true;
            this.app.fire("sound:playSound", "Whoosh");

            this.playAnim('Kick');
            CustomCoroutine.Instance.set(() => {
                this.ProcessVictory(true);
            }, duration);

            // CustomCoroutine.Instance.set(() => {
            //     GameManager.Instance.setGameSpeed(0.2);
            // }, duration / 3);

            CustomCoroutine.Instance.set(() => {
                GameManager.Instance.setGameSpeed(0.2);
                this.app.fire('Player:PlayDeadAnimSeq');
                this.playKickVfx();
            }, duration / 2);
        }
    }
};

BossController.prototype.OnDamage = function (info) {
    if (info.target == AttackTarget.Boss) {
        this.prepareDamageTrigger = false;
        this.damageDelay = this.maxDamageDelay;

        this.ProcessHurt();
    }
};

BossController.prototype.OnFightSequenceBegins = function () {
    this.isFighting = true;
    this.ProcessAttack(true);
    // console.log("BossController ---> OnFightSequenceBegins");
};

BossController.prototype.OnFightSequenceCompleted = function () {
    this.isFighting = false;
    // this.ProcessAttack(false);
    // this.ProcessVictory(false);
    // this.ProcessDeath(true);
    this.damageDelay = 0.25;
    // console.log("BossController ---> OnFightSequenceCompleted");
};

BossController.prototype.OnFinishLineStarted = function () {
    let bossScale = this.entity.getLocalScale().x;
    let playerScale = ReferenceManager.Instance.player.script.playerController.PlayerAnimator.getLocalScale().x;
    let scale = bossScale + playerScale;

    let minScale = Settings.scale.minScale;
    let maxScale = Settings.scale.maxScale;
    let bossMinScale = Settings.scale.minBossScale;
    let bossMaxScale = Settings.scale.maxBossScale;
    let minOffset = Settings.finishTrack.generalSettings.bossMinZOffset;
    let maxOffset = Settings.finishTrack.generalSettings.bossMaxZOffset;

    this.zOffset = changeRange(scale, minScale + bossMinScale, maxScale + bossMaxScale, minOffset, maxOffset);
    // console.log('OnFinishLineStarted: ');
    // console.log('Scale: ', minScale, maxScale);
    // console.log('Boss Scale: ', bossMinScale, bossMaxScale);
    // console.log('Offset: ', minOffset, maxOffset);
    // console.log('zOffset: ', this.zOffset);
    // console.log('bossScale: ', bossScale);
    // console.log('playerScale: ', playerScale);

    let pos = this.entity.getLocalPosition();
    this.entity.setLocalPosition(pos.x, pos.y, pos.z + this.zOffset);
    Debug.log('playerPos: ', pos);
};


BossController.prototype.OnAttack = function (info) {
    if (info.target == AttackTarget.Player) {
        // console.error('OnAttack');
        this.prepareDamageTrigger = true;
        this.ProcessPunch(info.attack);
    }
};

// update code called every frame
BossController.prototype.update = function (dt) {
    if (!this.isFighting)
        return;

    if (this.prepareDamageTrigger) {
        this.damageDelay -= dt;

        if (this.damageDelay <= 0) {
            this.damageDelay = this.maxDamageDelay;
            this.prepareDamageTrigger = false;
            // console.log('Raise Damage: ', this.entity.getGuid(), ' ', this.damageDelay);
            this.app.fire(Events.OnDamage, {
                target: AttackTarget.Player,
                damage: this.getDamage(),
                reason: "Boss",
            });
        }
    }
};

BossController.prototype.getDamage = function () {
    // will be based on boss and hero levels and will be decided in start of the game
    let damage;
    let player = ReferenceManager.Instance.player.script.playerController;

    if (this.testing.customBossDamage > 0) {
        damage = this.testing.customBossDamage;
    }
    else {
        if (player.heroLevel >= this.bossLevel)
            damage = Settings.fightingDamage.boss.lowDamage;
        else if (player.heroLevel * Settings.fightingDamage.hero.heroWinFactor >= this.bossLevel)
            damage = Settings.fightingDamage.boss.mediumDamage;
        else
            damage = Settings.fightingDamage.boss.highDamage;
    }

    return damage;
};

BossController.prototype.prepare = function (info, levelNumber) {

    let bossLevelDelta = 0;
    let difficultyData = ReferenceManager.Instance.root.script.levelsData.difficultyData;
    // console.log('prepare: ', info);
    // console.log('prepare: ', difficultyData);

    for (let i = 0; i < difficultyData.length; i++) {
        if (levelNumber <= difficultyData[i].minLevel) {
            bossLevelDelta = difficultyData[i].bossLevelDelta;
            break;
        }
    }

    // console.log("prepare data: ", info.maxHeroLevel, bossLevelDelta);
    let level = Math.max(1, info.maxHeroLevel - bossLevelDelta);
    let scale = Settings.scale.getBossScale(level);
    scale = this.testing.customBossScale > 0 ? this.testing.customBossScale : scale;

    // console.log("prepare scale: ", scale);

    this.mat.diffuse = this.mat.emissive = info.color;
    this.mat2.diffuse = this.mat2.emissive = info.color;
    this.health = this.maxHealth = info.health;
    this.bossLevel = level;

    let x = info.position.x + Settings.finishTrack.generalSettings.bossOffset.x;
    let y = info.position.y + Settings.finishTrack.generalSettings.bossOffset.y;
    let z = info.position.z + Settings.finishTrack.generalSettings.bossOffset.z;
    Debug.log("Boss Z: ", z);

    this.entity.setLocalPosition(x, y, z);
    this.entity.setLocalEulerAngles(info.rotation);
    this.entity.setLocalScale(scale, scale, scale);
};

BossController.prototype.setPos = function (x, y, z) {
    this.entity.setLocalPosition(x, y, z);

};

BossController.prototype.getPunchId = function () {
    if (!this.punchID) {
        this.punchID = 0;
    }

    this.punchID++;
    this.punchID %= 2;
    return this.punchID;
};

BossController.prototype.ProcessPunch = function (id) {
    var punch = "";
    id = this.getPunchId();
    switch (id) {
        case 0:
            punch = "Punch Left";
            break;
        case 1:
            punch = "Punch Right";
            break;
    }
    this.app.fire("sound:playSound", "Punch_" + (Math.floor(Math.random() * 4) + 1));
    // this.animGraph.anim.setTrigger(punch);
    // CustomCoroutine.Instance.set(() => {
    // }, this.getAnimDuration(punch) / 2);

    let duration = this.getAnimDuration(punch) / 2;

    if (this.punchCoroutine)
        // CustomCoroutine.Instance.clear(this.punchCoroutine);
        clearTimeout(this.punchCoroutine);

    this.punchCoroutine = setTimeout(() => {
        this.punchCoroutine = undefined;
        if (this.isKilledPlayer) return;
        this.ProcessAttack();
    }, duration * 1000);
    this.playAnim(punch, 2);
};

BossController.prototype.playPunchVfx = function () {
    this.punchVFX.fire('Play', this.vfxPositions[0].getLocalPosition());
};

BossController.prototype.playKickVfx = function () {
    this.punchVFX.fire('Play', this.vfxPositions[1].getLocalPosition());
};

BossController.prototype.ProcessAttack = function (value) {
    // this.animGraph.anim.setBoolean("attack", value);
    this.playAnim("Fight Idle");
};

BossController.prototype.ProcessDeath = function (value) {
    // this.animGraph.anim.setBoolean("death", value);
    this.playAnim('Death');
    this.app.fire("sound:playSound", 'Fatality');

};

BossController.prototype.ProcessRevive = function () {
    // this.animGraph.anim.setTrigger("revive");
    this.playAnim('Revive');
};

BossController.prototype.ProcessVictory = function (value) {
    // this.animGraph.anim.setBoolean("victory", value);
    this.playAnim('Victory');
};

BossController.prototype.ProcessHurt = function () {
    // this.animGraph.anim.baseLayer.play("Hurt");
    this.app.fire(Events.ShakeCamera, this.shake.x, this.shake.y, this.shake.z);
    // this.app.fire(Events.ShakeCamera, 0.3, 0.08, 0.05);
    this.app.fire('Player:PlayPunchVfx');
    this.playAnim('Hurt');

    let duration = this.getAnimDuration('Hurt');

    if (this.punchCoroutine)
        // CustomCoroutine.Instance.clear(this.punchCoroutine);
        clearTimeout(this.punchCoroutine);

    this.punchCoroutine = setTimeout(() => {
        this.punchCoroutine = undefined;
        if (this.isKilledPlayer) return;
        this.ProcessAttack();
    }, duration * 1000);
    // this.animGraph.anim.setTrigger("hurt");
};

BossController.prototype.playAnim = function (animName, speed) {
    // console.warn('playAnim: ', animName);
    if (!speed) speed = 1;
    this.setAnimSpeed(speed);
    this.animGraph.anim.baseLayer.transition(animName, 0.1);
};

BossController.prototype.setAnimSpeed = function (speed) {
    this.animGraph.anim.baseLayer.speed = speed;
};

BossController.prototype.getAnimDuration = function (name) {
    return this.animGraph.anim.baseLayer._controller._states[name].timelineDuration;
};

BossController.prototype.ResetAnimationState = function () {

    // this.ProcessAttack(false);
    // this.ProcessVictory(false);
    // this.ProcessDeath(false);

    // this.animGraph.anim.setTrigger("reset");
};

BossController.prototype.setTeleport = function (x, y, z, assign) {
    // this.rigidbodyComp.rigidbody.teleport(x, y, z);
    let pos = this.entity.getLocalPosition();
    // this.bossView.setLocalPosition(x, y, z);
    this.entity.setLocalPosition(assign.x ? x : pos.x + x, assign.y ? y : pos.y + y, assign.z ? z : pos.z + z);
};

BossController.prototype.setBossScale = function (x, y, z) {
    // console.log('setTeleport', x, y, z);
    // this.rigidbodyComp.rigidbody.teleport(x, y, z);
    // let pos = this.bossView.getLocalPosition();
    this.entity.setLocalScale(x, y, z);
};

// swap method called for script hot-reloading
// inherit your script state here
// BossController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// PoolController.js
var PoolController = pc.createScript('PoolController');

PoolController.attributes.add('startingID', { title: 'Starting ID', type: 'number' });
PoolController.attributes.add('entityName', { title: 'Name', type: 'string' });
PoolController.attributes.add('capacity', { title: 'Capacity', type: 'number', description: 'Instantiates these much elements on initialize' });
PoolController.attributes.add('container', { title: 'Available Container', type: 'entity' });
PoolController.attributes.add('usedContainer', { title: 'Used Container', type: 'entity' });
PoolController.attributes.add('prefab', { title: 'Template', type: 'asset', assetType: 'template' });

PoolController.attributes.add('events', {
    title: 'Events',
    type: 'json',
    schema: [
        { title: 'Restore', name: 'restore', type: 'string' },
        { title: 'Get', name: 'get', type: 'string' },
        { title: 'Created New', name: 'createdNew', type: 'string' },
    ],
});


// initialize code called once per entity
PoolController.prototype.initialize = function () {
    this.avalibleID = this.startingID;

    if (this.events.restore.length > 0)
        this.app.on(this.events.restore, this.restore, this);

    if (this.events.get.length > 0)
        this.app.on(this.events.get, this.getEvent, this);

    this.on("destroy", this.onDestroy, this);

};

PoolController.prototype.onDestroy = function () {

    if (this.events.restore.length > 0)
        this.app.off(this.events.restore, this.restore, this);

    if (this.events.get.length > 0)
        this.app.off(this.events.get, this.getEvent, this);

};

PoolController.prototype.postInitialize = function () {
    this.initCapacity();
};

// update code called every frame
PoolController.prototype.initCapacity = function () {
    for (let i = 0; i < this.capacity; i++)
        this.createNew().reparent(this.container);
};

PoolController.prototype.getEvent = function (newParent, callback) {
    if (callback) callback(this.get(newParent));
};

PoolController.prototype.get = function (newParent) {
    let count = this.container.children.length;
    let entity = count <= 0 ? this.createNew() : this.container.children[count - 1];
    entity.reparent(newParent || this.usedContainer);
    // console.log("Get: " + entity.name + " => " + entity.enabled);
    return entity;
};

PoolController.prototype.restore = function (entity) {
    // console.log('restore: ' + this.entity.name);
    entity.enabled = false;
    entity.reparent(this.container);
};

PoolController.prototype.createNew = function () {
    let entity = this.prefab.resource.instantiate();
    entity.enabled = false;
    entity.name = `${this.entityName} ${this.avalibleID++}`;
    // console.log('Creating: ' + entity.name + " => " + entity.enabled);
    this.app.root.addChild(entity);
    this.app.fire(this.events.createdNew, entity);
    return entity;
};

// swap method called for script hot-reloading
// inherit your script state here
// PoolController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// bossContainer.js
var BossContainer = pc.createScript('bossContainer');

BossContainer.attributes.add('templates', {
    title: 'Templates',
    type: 'json',
    schema: [
        {name: 'miniBoss', type: 'entity', title: 'Mini Boss'},
        {name: 'biggBoss', type: 'entity', title: 'Bigg Boss'},
    ],
});

// initialize code called once per entity
BossContainer.prototype.initialize = function () {
    BossContainer = this;
};

// update code called every frame
BossContainer.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// BossContainer.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// ReferenceManager.js
var ReferenceManager = pc.createScript('referenceManager');

ReferenceManager.attributes.add('root', {type: 'entity', title: 'Root'});
ReferenceManager.attributes.add('player', {type: 'entity', title: 'Player'});
ReferenceManager.attributes.add('boss', {type: 'entity', title: 'Boss'});
ReferenceManager.attributes.add('camera', {type: 'entity', title: 'Camera'});

ReferenceManager.attributes.add('menus', {
    title: 'Menus',
    type: 'json',
    schema: [
        { name: 'bossFight', type: 'entity', title: 'Boss Fight'},
    ],
});

// initialize code called once per entity
ReferenceManager.prototype.initialize = function() {
    ReferenceManager.Instance = this;
    this.app.on("ReferenceManager:SetBigBoss", this.setBigBoss, this);
};

// update code called every frame
ReferenceManager.prototype.setBigBoss = function(boss) {
    this.bigBoss = boss;
};

// swap method called for script hot-reloading
// inherit your script state here
// ReferenceManager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// FightSequenceHandler.js
var FightSequenceHandler = pc.createScript('fightSequenceHandler');

// initialize code called once per entity
FightSequenceHandler.prototype.initialize = function () {
    
    this.app.on(Events.OnLevelLoaded, this.onLevelLoaded, this);
    this.app.on(Events.OnFinishLineReached, this.OnFinishLineReached, this);
    this.app.on(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);
};

FightSequenceHandler.prototype.OnFightSequenceCompleted = function () {
    // console.log("FightSequenceHandler ---> OnFightSequenceCompleted");
    this.app.fire(Events.OnChangeMenuState, MenuManager.States.BlankScreen);
};

FightSequenceHandler.prototype.onLevelLoaded = function (info) {
    this.isBigBossLevel = info.isBigBossLevel;
};

FightSequenceHandler.prototype.OnFinishLineReached = function () {
    if (LevelInfo.isBonusLevel || LevelInfo.isBigBossLevel) return;

    this.app.fire(Events.OnChangeMenuState, MenuManager.States.BossFight);
    this.app.fire(Events.OnFightSequenceBegins);

};

// update code called every frame
FightSequenceHandler.prototype.update = function (dt) {

};

// moveEntity.js
var MoveEntity = pc.createScript('moveEntity');

MoveEntity.attributes.add('delay', { type: 'number'});
MoveEntity.attributes.add('speed', { type: 'vec3'});

// initialize code called once per entity
MoveEntity.prototype.initialize = function() {
    this.timer = this.delay;
};

// update code called every frame
MoveEntity.prototype.update = function(dt) {
    this.timer -= dt;
    if (this.timer > 0) return;

    let pos = this.entity.getLocalPosition();

    let x = this.speed.x * dt +  pos.x;
    let y = this.speed.y * dt +  pos.y;
    let z = this.speed.z * dt +  pos.z;
    
    this.entity.setLocalPosition(x, y, z);
    // console.log(this.entity.name, ' ', this.entity.getLocalPosition());
};

// swap method called for script hot-reloading
// inherit your script state here
// MoveEntity.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// FightController.js
var FightController = pc.createScript('fightController');
FightController.attributes.add('target', {
    type: 'number',
    enum:
        [
            { Player: 0 },
            { Boss: 1 },
        ]
});

FightController.attributes.add('health', { type: 'number' });
FightController.attributes.add('delay', { type: 'number', default: 3 });

// initialize code called once per entity
FightController.prototype.initialize = function () {
    this.maxHealth = this.health;
    this.maxDelay = this.delay;
    this.start = false;
    this.canAttack = false;

    this.app.on(Events.OnFightSequenceBegins, this.OnFightSequenceBegins, this);
    this.app.on(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);
    this.app.on(Events.OnPlayerDead, this.OnPlayerDead, this);
    this.app.on(Events.OnDamage, this.OnDamage, this);
    if (this.target == AttackTarget.Boss) {
        this.app.on(Events.OnTap, this.OnTap, this);
    }

    this.on('destroy', function () {
        this.app.off(Events.OnPlayerDead, this.OnPlayerDead, this);
        this.app.off(Events.OnFightSequenceBegins, this.OnFightSequenceBegins, this);
        this.app.off(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);
        this.app.off(Events.OnDamage, this.OnDamage, this);
        if (this.target == AttackTarget.Boss) {
            this.app.off(Events.OnTap, this.OnTap, this);
        }
    }, this);
};

FightController.prototype.OnPlayerDead = function () {
    this.start = false;
};

FightController.prototype.OnDamage = function (info) {
    if (info.target != this.target) {
        // console.log('OnDamage: ', info.reason, ' -> ', info.damage);
        this.health -= info.damage;
        if (this.health <= 0) {
            this.health = 0;
            // this.app.fire(Events.OnFightSequenceCompleted);
        }

        info.health = this.health / this.maxHealth;
        this.app.fire(Events.OnHealthChanged, info);
    }
};

FightController.prototype.OnTap = function () {
    if (this.canAttack) {
        this.canAttack = false;

        var minInclusive = 0;
        var maxExclusive = 2;
        // console.log('OnAttack Fired');
        this.app.fire(Events.OnAttack, {
            target: this.target,
            attack: Math.floor(getRandomArbitrary(minInclusive, maxExclusive)),
        });
    }
};

FightController.prototype.OnFightSequenceBegins = function () {
    this.start = true;
    this.canAttack = false;
    this.delay = this.maxDelay;
    this.health = this.maxHealth;
};

FightController.prototype.OnFightSequenceCompleted = function () {
    this.start = false;
};

// update code called every frame
FightController.prototype.update = function (dt) {
    if (!this.start)
        return;

    this.initiateAttack(dt);
};

FightController.prototype.initiateAttack = function (dt) {
    this.delay -= dt;

    if (this.delay <= 0) {
        this.delay = this.maxDelay;

        var minInclusive = 0;
        var maxExclusive = 2;
        this.canAttack = true;

        if (this.target == AttackTarget.Player) {
            //we are Boss
            // console.log('OnAttack Fired2');

            this.app.fire(Events.OnAttack, {
                target: this.target,
                attack: Math.floor(getRandomArbitrary(minInclusive, maxExclusive)),
            });
        }
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// FightController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// BossFightViewController.js
var BossFightViewController = pc.createScript('bossFightViewController');

BossFightViewController.attributes.add('tapButton', { type: 'entity' });
BossFightViewController.attributes.add('fingerImg', { type: 'entity' });
BossFightViewController.attributes.add('spaceBarImage', { type: 'entity' });
BossFightViewController.attributes.add('tapText', { type: 'entity' });

BossFightViewController.attributes.add('bossMenuComponents', {
    type: 'json',
    title: 'Menu Components',
    schema: [
        { name: 'playerBar', title: 'Player bar ref', type: 'entity' },
        { name: 'bossBar', title: 'Boss bar ref', type: 'entity' },
        { name: 'powerBar', title: 'Power bar ref', type: 'entity' },
    ],
});

BossFightViewController.attributes.add('roots', {
    title: 'Roots',
    type: 'json',
    schema: [
        { name: 'powerBar', type: 'entity', title: 'Power Bar' },
        { name: 'tapTap', type: 'entity', title: 'Tap Tap' },
        { name: 'dodgeGuide', type: 'entity', title: 'Dodge Guide' },
        { name: 'bonusMultiplierBar', type: 'entity', title: 'Bonus Multiplier Bar' },
    ],
});

// *********************
// * Playcanvas Events *
// *********************

BossFightViewController.prototype.initialize = function () {

    if (pc.platform.mobile) {
        this.spaceBarImage.enabled = false;
        this.tapText.enabled = true;
    } else {
        this.spaceBarImage.enabled = true;
        this.tapText.enabled = false;
    }

    this.maxPlayerBarWidth = this.bossMenuComponents.playerBar.element.width;
    this.maxBossBarWidth = this.bossMenuComponents.bossBar.element.width;
    this.maxPowerBarWidth = this.bossMenuComponents.powerBar.element.width;
    this.bossMenuComponents.powerBar.element.width = this.minFill;
    this.powerbarVal = 0;

    this.minFill = 1;
    this.incrementFill = 70;
    this.emptySpeed = 0.99;

    this.isTappingAllowed = true;

    this.tapButton.button.on('click', () => {
        this.OnTap();
    });
    this.app.on(Events.OnFightSequenceBegins, this.OnFightSequenceBegins, this);
    this.app.on(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);
    this.app.on(Events.OnHealthChanged, this.OnHealthChanged, this);

    this.app.on('FightView:EnablePowerBar', this.enablePowerbar, this);
    this.app.on('FightView:EnableTapTap', this.enableTapTap, this);
    this.app.on('FightView:EnableDodgeGuide', this.enableDodgeGuide, this);
    this.app.on('FightView:SetDodgeGuide', this.setDodgeGuide, this);
    this.app.on('FightView:EnableBonusMultiplier', this.enableBonusMultiplier, this);
    this.app.on('FightView:SetMultiplier', this.setMultiplier, this);
    this.app.on('FightView:SetTimeOut', this.setTimeOut, this);
    this.app.on('FightView:SetHealth', this.setHealth, this);
    this.app.on('onSpaceKeyClicked', this.onSpaceKeyClicked, this);

    TweenWrapper.Tween(this.fingerImg, this.fingerImg.getLocalScale(), new pc.Vec3(0.8, 0.8, 0.8), 0.4, undefined, pc.SineIn, true, true);
    this.on("enable", this.reset, this);

};

BossFightViewController.prototype.onSpaceKeyClicked = function () {
    if(this.tapButton.enabled) {
        this.OnTap();
    }
};

BossFightViewController.prototype.postInitialize = function () {
    this.reset();
};

// update code called every frame
BossFightViewController.prototype.update = function (dt) {

    if (this.isTappingAllowed) {
        let fillDecrement = this.bossMenuComponents.powerBar.element.width - this.emptySpeed;

        if (fillDecrement > this.minFill)
            this.bossMenuComponents.powerBar.element.width -= this.emptySpeed;
        else {
            this.bossMenuComponents.powerBar.element.width = this.minFill;
        }

        this.powerbarVal = changeRange(this.bossMenuComponents.powerBar.element.width, 0, this.maxPowerBarWidth, 0, 1);
    }

};

// *******************
// * Functionalities *
// *******************

BossFightViewController.prototype.OnHealthChanged = function (info) {

    if (info.health) {
        this.setHealth(info.target, info.health);
        // if (info.target == AttackTarget.Boss) {
        //     this.updateBossHealth(info.health);
        // } else if (info.target == AttackTarget.Player) {
        //     this.updatePlayerHealth(info.health);
        // }
    }

};

BossFightViewController.prototype.setHealth = function (target, health) {
    switch (target) {
        case AttackTarget.Boss:
            this.updateBossHealth(health);
            break;
        case AttackTarget.Player:
            this.updatePlayerHealth(health);
            break;
    }
};

BossFightViewController.prototype.reset = function () {

    this.bossMenuComponents.playerBar.element.width = this.maxPlayerBarWidth;
    this.bossMenuComponents.bossBar.element.width = this.maxBossBarWidth;
    this.bossMenuComponents.powerBar.element.width = this.minFill;
    // this.isTappingAllowed = true;
    // this.powerbarVal = 0;

    if (LevelInfo.isBigBossLevel) {
        let levelsBetweenBigBoss = Settings.biggBossFighting.levelsBetweenBigBoss;

        let isTutorialRequired = LevelInfo.level % levelsBetweenBigBoss === 0;
        this.isTappingAllowed = false;
        this.enableTapTap(false);
        this.enablePowerbar(false);
        this.enableDodgeGuide(true);

        if (isTutorialRequired)
            this.setDodgeGuide(1);
        else
            this.setDodgeGuide(0);


    }
    else {
        this.isTappingAllowed = true;
        this.powerbarVal = 0;
        this.enableTapTap(true);
        this.enablePowerbar(true);
        this.enableDodgeGuide(false);
    }
    this.enableBonusMultiplier(false);
};

BossFightViewController.prototype.OnFightSequenceCompleted = function () {
    this.isTappingAllowed = false;
};

BossFightViewController.prototype.OnFightSequenceBegins = function () {
    this.isTappingAllowed = true;
};

BossFightViewController.prototype.OnTap = function () {

    this.app.fire(Events.OnTap);
    if (this.isTappingAllowed) {
        let fillIncrement = this.bossMenuComponents.powerBar.element.width + this.incrementFill;

        if (fillIncrement <= this.maxPowerBarWidth) {
            this.bossMenuComponents.powerBar.element.width += this.incrementFill;
        }
        else {
            this.bossMenuComponents.powerBar.element.width = this.maxPowerBarWidth;
        }
    }
};

// ************
// * Updaters *
// ************

BossFightViewController.prototype.updatePlayerHealth = function (health) {
    let from = this.bossMenuComponents.playerBar.element.width;
    let to = changeRange(health, 0, 1, 0, this.maxPlayerBarWidth);

    if (this.playerHealthTween) TweenWrapper.StopTween(this.playerHealthTween);

    this.playerHealthTween = TweenWrapper.TweenNumber(from, to, 0.25, (obj) => {
        this.bossMenuComponents.playerBar.element.width = obj.number;
    }, () => { this.bossMenuComponents.playerBar.element.width = to; });
};

BossFightViewController.prototype.updateBossHealth = function (health) {
    let from = this.bossMenuComponents.bossBar.element.width;
    let to = changeRange(health, 0, 1, 0, this.maxBossBarWidth);

    if (this.bossHealthTween) TweenWrapper.StopTween(this.bossHealthTween);

    this.bossHealthTween = TweenWrapper.TweenNumber(from, to, 0.25, (obj) => {
        this.bossMenuComponents.bossBar.element.width = obj.number;
    }, () => { this.bossMenuComponents.bossBar.element.width = to; });
};

// ************
// * Enablers *
// ************

BossFightViewController.prototype.enablePowerbar = function (enable) {
    this.roots.powerBar.enabled = enable === true;
};

BossFightViewController.prototype.enableTapTap = function (enable) {
    this.roots.tapTap.enabled = enable === true;
};

BossFightViewController.prototype.enableDodgeGuide = function (enable) {
    this.roots.dodgeGuide.enabled = enable === true;
};

BossFightViewController.prototype.enableBonusMultiplier = function (enable) {
    this.roots.bonusMultiplierBar.enabled = enable === true;
};

// ***********
// * Setters *
// ***********

BossFightViewController.prototype.setMultiplier = function (val) {
    this.roots.bonusMultiplierBar.fire('SetMultiplier', val);
};

BossFightViewController.prototype.setTimeOut = function () {
    this.roots.bonusMultiplierBar.fire('SetTimeOut');
};

// Dir = 0, means enable both swipes
// Dir = 1, means enable left swipe
// Dir = 2, means enable right swipe
BossFightViewController.prototype.setDodgeGuide = function (dir) {
    this.roots.dodgeGuide.fire('EnableOneSwipe', dir);
};

// simpleFollow.js
var SimpleFollow = pc.createScript('simpleFollow');
SimpleFollow.attributes.add('target', { type: 'entity' });

// initialize code called once per entity
SimpleFollow.prototype.initialize = function () {
    this.orgTarget = this.target;

    this.app.on(Events.OnFlightBegins, this.OnFlightBegins, this);
    this.app.on(Events.OnBossSpawned, this.OnBossSpawned, this);
    this.app.on(Events.OnLevelLoaded, this.OnLevelLoaded, this);
};

SimpleFollow.prototype.OnLevelLoaded = function () {
    // this.target = this.orgTarget;
    this.setTarget(this.orgTarget);
};

SimpleFollow.prototype.OnFlightBegins = function () {
    this.setTarget(this.boss);
};

SimpleFollow.prototype.OnBossSpawned = function (boss) {
    //console.log("SimpleFollow ---> OnBossSpawned: ", boss);
    this.boss = boss.script.bossController.posReference;
};

SimpleFollow.prototype.setTarget = function (target) {
    // console.log('setTarget: ', target);
    this.target = target;
};

// update code called every frame
SimpleFollow.prototype.update = function (dt) {
    if (this.target) {
        // console.log(this.entity.name, " update: ", this.target); 
        let pos = this.target.getPosition();
        this.entity.setPosition(pos.x, pos.y, pos.z);
    }
};

// winScreenEventListner.js
var WinScreenEventListner = pc.createScript('winScreenEventListner');

WinScreenEventListner.attributes.add('winScreenComponents', {
    type: 'json',
    title: 'Win Screen Components',
    schema: [
        { name: 'mobText', type: 'entity' },
        { name: 'gemText', type: 'entity' },
        { name: 'multiplierTxt', type: 'entity' },
        { name: 'arrowImg', type: 'entity' },
        { name: 'claim2xBtn', type: 'entity' },
        { name: 'claimBtn', type: 'entity' },
        { name: 'claim2xBtnGemTxt', type: 'entity' },
        { name: 'claimBtnGemTxt', type: 'entity' },
        { name: 'rewardEntity', type: 'entity' },
        { name: 'progressEntity', type: 'entity' },
        { name: 'progressText', type: 'entity' },
        { name: 'progressSkin', type: 'entity' },
        { name: 'claimText', type: 'entity' },
    ],
});

WinScreenEventListner.attributes.add('winScreenComponentsLevel1', {
    type: 'json',
    title: 'Win Screen Components for Level 1',
    schema: [
        { name: 'mobText', type: 'entity' },
        { name: 'gemText', type: 'entity' },
        { name: 'multiplierTxt', type: 'entity' },
        { name: 'claim2xBtn', type: 'entity' },
        { name: 'claim2xBtnGemTxt', type: 'entity' },
    ],
});

WinScreenEventListner.attributes.add('pendulumReward', {
    type: 'json',
    schema: [
        { name: 'icon', type: 'entity' },
        { name: 'valueText', type: 'entity' },
    ],
});

WinScreenEventListner.attributes.add('level1WinScreen', { type: 'entity' });
WinScreenEventListner.attributes.add('level2WinScreen', { type: 'entity' });

WinScreenEventListner.instance = null;

// initialize code called once per entity
WinScreenEventListner.prototype.initialize = function () {

    WinScreenEventListner.instance = this;
    this.claim2XClicked = false;
    this.claimClicked = false;
    this.setUp();
    this.multiplier = 0;
    this.currentMobsHit = 0;
    this.gemText = 0;
    this.gemText2X = 0;
    this.currentReward = null;
    this.loadingScreen = this.app.root.findByName("LoadScreen");
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.winScreenComponents.claim2xBtn.button.on("click", this.claim2XBtnEvent, this);
    this.winScreenComponentsLevel1.claim2xBtn.button.on("click", this.claim2XBtnEventLevel1, this);
    this.winScreenComponents.claimBtn.button.on("click", this.claimBtnEvent, this);
    this.on("enable", this.onEnable, this);
    this.on("disable", this.onDisable, this);
    this.on("destroy", this.onDestroy, this);

};


WinScreenEventListner.prototype.postInitialize = function () {
    this.onEnable();
};

WinScreenEventListner.prototype.onDisable = function () {

};

WinScreenEventListner.prototype.showButtons = function () {
    this._buttonsReady = true;
    this.updateButtonsVisibility();
}

WinScreenEventListner.prototype.updateButtonsVisibility = function () {
    if (this._buttonsReady) {
        const hasRewardedVideo = APIMediator.isRewardedAdAvailable('button:results:doublereward');
        this.winScreenComponentsLevel1.claim2xBtn.enabled = true;
        this.winScreenComponents.claimBtn.enabled = true;
        this.winScreenComponents.claim2xBtn.enabled = hasRewardedVideo;
    }
}

WinScreenEventListner.prototype.onEnable = async function () {
    this._buttonsReady = false;
    this.winScreenComponents.claimBtn.enabled = false;
    this.winScreenComponents.claim2xBtn.enabled = false;
    this.winScreenComponentsLevel1.claim2xBtn.enabled = false;
    pc.AppBase.getApplication().root.delayedCall(700, () => {
        APIMediator.showInterstitialAd('break:result').then(() => {
            this.showButtons();
        });
    });


    this.pendulumData = null;
    this.app.fire('GemsMenu:EnableCounterView', true);
    this.currentReward = "";
    this.winScreenComponents.claimBtn.button.active = true;
    this.winScreenComponents.claim2xBtn.button.active = true;
    this.pendulumReward.icon.enabled = false;
    this.pendulumReward.valueText.element.text = "";

    this.currentLevel = LevelGenerator.prototype.GetCurrentLevel();

    if (LevelGenerator.prototype.GetCurrentLevel() == 0) {

        this.level1WinScreen.enabled = true;
        this.level2WinScreen.enabled = false;

    } else {

        this.level1WinScreen.enabled = false;
        this.level2WinScreen.enabled = true;

        this.winScreenComponents.rewardEntity.enabled = true;
        this.winScreenComponents.progressEntity.enabled = false;
        this.setUp();
        this.runArrowTween();
        var self = this;
        if (ChestRoomManager.IsProgressRewardAvailable()) {
            if (LevelInfo.level > 1) {
                pc.AppBase.getApplication().root.delayedCall(3000, () => {
                    self.winScreenComponents.rewardEntity.enabled = false;
                    self.winScreenComponents.progressEntity.enabled = true;
                    var sprite = ChestRoomManager.GetCurrentProgressSkin();
                    Utils.setSpriteElementFromSprite(self.winScreenComponents.progressSkin, sprite, 300, 250); //self.winScreenComponents.progressSkin.element.sprite = sprite;
                    self.winScreenComponents.progressText.element.text = ChestRoomManager.currentRewardProgress + "%";
                })
            }
        }
    }


};

WinScreenEventListner.prototype.setUp = function () {
    if (GameMenuEventListner.instance) {
        // console.log("GameMenuEventListner.instance, level: ", LevelGenerator.prototype.GetCurrentLevel());
        this.currentMobsHit = GameMenuEventListner.instance.currentMobsHit;
        this.gemText = GameMenuEventListner.instance.currentGems;

        let multiplier = DataManager.Instance.currentRewardMultiplier || 1; // MiniBossFightingManager.Instance.targetMultiplier;

        this.winScreenComponents.mobText.element.text = "X +" + Math.max(0, GameMenuEventListner.instance.currentMobsHit);
        this.winScreenComponents.gemText.element.text = "X +" + GameMenuEventListner.instance.currentGems;
        this.winScreenComponents.multiplierTxt.element.text = `X${multiplier.toFixed(1)}`;

        this.winScreenComponentsLevel1.mobText.element.text = "X +" + Math.max(0, GameMenuEventListner.instance.currentMobsHit);
        this.winScreenComponentsLevel1.gemText.element.text = "X +" + GameMenuEventListner.instance.currentGems;
        this.winScreenComponentsLevel1.multiplierTxt.element.text = `X${multiplier.toFixed(1)}`;
        const rewardAmount = Math.ceil((Math.max(0, GameMenuEventListner.instance.currentMobsHit) + GameMenuEventListner.instance.currentGems) * multiplier);
        DataManager.Instance.currentReward = rewardAmount;

        this.gemText = rewardAmount;

        this.winScreenComponents.claimBtnGemTxt.element.text = this.gemText;
        this.winScreenComponents.claim2xBtnGemTxt.element.text = `${this.gemText * 2}`;
        this.winScreenComponentsLevel1.claim2xBtnGemTxt.element.text = `${this.gemText * 2}`;
    }

};

WinScreenEventListner.prototype.onDestroy = function () {

};

WinScreenEventListner.prototype.runArrowTween = function () {

    this.winScreenComponents.arrowImg.setLocalEulerAngles(0, 0, 65);
    this.arrowTween = this.winScreenComponents.arrowImg
        .tween(this.winScreenComponents.arrowImg.getLocalEulerAngles())
        .rotate(new pc.Vec3(0, 0, -65), 0.75, pc.Linear)
        .loop(true)
        .yoyo(true)
        .onUpdate(() => {
            this.currentArrowZ = this.winScreenComponents.arrowImg.getLocalEulerAngles().z;

            if (this.currentArrowZ <= 65 && this.currentArrowZ >= 53) {
                this.currentReward = 3;
            } else if (this.currentArrowZ < 53 && this.currentArrowZ >= 13) {
                this.currentReward = 2;
            } else if (this.currentArrowZ < 13 && this.currentArrowZ >= -13) {
                this.currentReward = "Chest";
            } else if (this.currentArrowZ < -13 && this.currentArrowZ >= -53) {
                this.currentReward = 2;
            } else if (this.currentArrowZ < -53 && this.currentArrowZ >= -65) {
                this.currentReward = 3;
            }

            if (this.currentReward !== "Chest") {
                //let multipliedVal = parseInt(GameMenuEventListner.instance.currentGems) * this.currentReward;
                let multipliedVal = parseInt(DataManager.Instance.currentReward) * this.currentReward;
                this.winScreenComponents.claim2xBtnGemTxt.element.text = multipliedVal;
                this.winScreenComponents.claimText.element.text = LocalizationManager.getInstance().getLocalizedText('Claim') + " X" + this.currentReward;
            } else {
                this.winScreenComponents.claimText.element.text = "??";
            }
        });

    this.arrowTween.start();


};

WinScreenEventListner.prototype.claim2X = function () {
    GemsManager.collectedGems = DataManager.Instance.currentReward * 2;
    this.applyRewardAfterAd();
};

WinScreenEventListner.prototype.claim = function () {

    this.winScreenComponents.claimBtn.button.active = false;
    this.winScreenComponents.claim2xBtn.button.active = false;

    if (ChestRoomManager.currentRewardProgress >= 100)
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.SkinUnlockedView);
    else if (ChestRoomManager.keys >= 3) {
        this.currentReward = "";
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
    } else {
        this.currentReward = "";
        // let totalRewardedGems = parseInt(GameMenuEventListner.instance.currentGems);
        // console.log(totalRewardedGems); // TODO: Shahzaib, add to gems counter.

        GemsManager.collectedGems = DataManager.Instance.currentReward;

        this.app.fire(Events.OnLevelCompleted);
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.Home);

        // This delay is requrired so the level loads fully.
        setTimeout(() => {
            this.loadingAdScreen.enabled = false;
        }, 1000);
    }
};

WinScreenEventListner.prototype.claim2XBtnEventLevel1 = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.claim2X();
    this.playSound('Fireworks');
    this.app.fire('FireworksVfx:Play', FireworkType.topCenter, 2);
};

WinScreenEventListner.prototype.claim2XBtnEvent = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.playSound('Fireworks');
    this.app.fire('FireworksVfx:Play', FireworkType.topCenter, 2);
    this.winScreenComponents.claim2xBtn.button.active = false;
    this.winScreenComponents.claimBtn.button.active = false;
    this.arrowTween.stop();

    if (ConfigManager.instance.environmentType !== ConfigManager.EnvTypes.None) {
        this.loadingAdScreen.enabled = true;
        const resumeGiveRewardCallback = WinScreenEventListner.instance.resumeGiveReward.bind(this);
        const pauseCallback = WinScreenEventListner.instance.pauseGame.bind(this);
        const resumeCallback = WinScreenEventListner.instance.resumeNoReward.bind(this);
        const noADAvailableCallack = WinScreenEventListner.instance.adNotAvailable.bind(this);
        this.app.fire("showRewardedAD", resumeGiveRewardCallback, pauseCallback, resumeCallback, noADAvailableCallack, 'button:results:doublereward');
    } else {
        this.claim2X();
    }

};

WinScreenEventListner.prototype.claimBtnEvent = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.playSound('Fireworks');
    this.app.fire('FireworksVfx:Play', FireworkType.topCenter, 2);
    this.winScreenComponents.claim2xBtn.button.active = false;
    this.winScreenComponents.claimBtn.button.active = false;
    this.arrowTween.stop();
    CustomCoroutine.Instance.set(function () {
        this.claim();
    }.bind(this), 1);
};

WinScreenEventListner.prototype.applyRewardAfterAd = function () {
    // console.log("CurrentReward: ", this.currentReward);
    if (this.currentReward === "Chest") {
        var data = ChestRoomManager.GetCommonPendulumUnlockSkin();
        if (data) {
            this.pendulumReward.icon.enabled = true;            
            Utils.setSpriteElementFromSprite(this.pendulumReward.icon, data.sprite); //this.pendulumReward.icon.element.sprite = data.sprite;

            if (data.rewardType === PendulumReward.Skin) {
                this.pendulumData = data;
                this.pendulumReward.valueText.element.text = "";
                this.app.fire(Events.OnChangeMenuState, MenuManager.States.SkinUnlockedView);
                Debug.log("data.rewardType === PendulumReward.Skin");
                return;
            } else if (data.rewardType === PendulumReward.GemsSmall) {
                GemsManager.collectedGems += data.value;
                this.pendulumReward.valueText.element.text = GemsManager.collectedGems;
                Debug.log("data.rewardType === PendulumReward.GemsSmall");
                if (ChestRoomManager.currentRewardProgress >= 100) {
                    this.app.fire(Events.OnChangeMenuState, MenuManager.States.SkinUnlockedView);
                    return;
                }
                else if (ChestRoomManager.keys >= 3) {
                    this.currentReward = "";
                    this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
                    return;
                }
            } else {
                ChestRoomManager.UpdateKeysBalance(1);
                this.pendulumReward.valueText.element.text = "";
                Debug.log("data.rewardType === else case");

                if (ChestRoomManager.currentRewardProgress >= 100) {
                    this.app.fire(Events.OnChangeMenuState, MenuManager.States.SkinUnlockedView);
                    return;
                }
                else if (ChestRoomManager.keys >= 3) {
                    this.currentReward = "";
                    this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
                    return;
                }
            }
        }

        let self = this;
        setTimeout(function () {
            self.loadHome();
        }, 500);
    } else if (ChestRoomManager.currentRewardProgress >= 100)
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.SkinUnlockedView);
    else if (ChestRoomManager.keys >= 3) {
        this.currentReward = "";
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
    } else {
        this.loadHome();
    }

};

WinScreenEventListner.prototype.playSound = function (name) {
    this.app.fire("sound:playSound", name);
};

WinScreenEventListner.prototype.resumeGiveReward = function () {
    this.loadingAdScreen.enabled = false;
    this.claim2X();
};

WinScreenEventListner.prototype.pauseGame = function () {
    this.loadingAdScreen.enabled = true;
};

WinScreenEventListner.prototype.resumeNoReward = function () {
    this.loadingAdScreen.enabled = false;
    this.showButtons();
    // this.app.fire("adSkippedPopup");
    this.claim();
};

WinScreenEventListner.prototype.adNotAvailable = function () {
    this.loadingAdScreen.enabled = false;
    // this.app.fire("noAdPopup");
    this.claim();
};

WinScreenEventListner.prototype.loadHome = function () {
    this.pendulumData = null;
    this.currentReward = "";
    this.loadingScreen.enabled = true;
    this.app.fire(Events.OnLevelCompleted);
    this.app.fire(Events.OnChangeMenuState, MenuManager.States.Home);

    setTimeout(() => {
        this.loadingScreen.enabled = false;
    }, 1500);
};

// update code called every frame
WinScreenEventListner.prototype.update = function (dt) {
    this.updateButtonsVisibility();
};

// brushTween.js
var BrushTween = pc.createScript('brushTween');

BrushTween.attributes.add('rotVal', { type: 'vec3', default: [1.5, 0, 0] });

// initialize code called once per entity
BrushTween.prototype.initialize = function () {

};

// update code called every frame
BrushTween.prototype.update = function (dt) {

    this.entity.rotateLocal(this.rotVal.x, this.rotVal.y, this.rotVal.z);

};

// swap method called for script hot-reloading
// inherit your script state here
// BrushTween.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// levelProgressionViewHandler.js
var LevelProgressionViewHandler = pc.createScript('levelProgressionViewHandler');

LevelProgressionViewHandler.attributes.add('progressionView', {
    type: 'json',
    title: 'Level Progression Components',
    schema: [
        { name: 'levelNumber', type: 'entity' },
        { name: 'LevelNoView', type: 'entity' },
        { name: 'progressionCircles', type: 'entity', array: true },
    ],
});

LevelProgressionViewHandler.attributes.add('progressBar', { type: 'entity' });
LevelProgressionViewHandler.attributes.add('crownIcon', { type: 'entity' });

LevelProgressionViewHandler.attributes.add('rageGauge', { type: 'entity' });
LevelProgressionViewHandler.attributes.add('mobIcon', { type: 'entity' });


// initialize code called once per entity
LevelProgressionViewHandler.prototype.initialize = function () {

    this.currentLevel = 2;
    this.grayColor = new pc.Color(156 / 255, 154 / 255, 158 / 255);
    this.blueColor = new pc.Color(33 / 255, 154 / 255, 255 / 255);
    this.purpleColor = new pc.Color(152 / 255, 123 / 255, 199 / 255);

    // this.app.on("onUpdateProgression", this.updateProgression, this);
    this.app.on(Events.OnLevelLoaded, this.OnLevelLoaded, this);
    this.on("destroy", this.onDestroy, this);

};

LevelProgressionViewHandler.prototype.onDestroy = function () {

    this.app.off("onUpdateProgression", this.updateProgression, this);

};

LevelProgressionViewHandler.prototype.OnLevelLoaded = function (info) {

    this.crownIcon.enabled = true;

    if (parseInt(info.level) % 6 === 0) {
        this.progressionView.levelNumber.element.text = LocalizationManager.getInstance().getLocalizedText("Bonus Level");
        this.progressBar.enabled = false;
        this.mobIcon.enabled = false;
        this.crownIcon.enabled = false;
        this.progressionView.levelNumber.element.color = this.purpleColor;
    } else {
        this.progressionView.levelNumber.element.text = LocalizationManager.getInstance().getLocalizedText("Level #").replace('#', '' + info.level);
        this.progressionView.levelNumber.element.color = this.blueColor;
        if (parseInt(info.level) > 3) {
            this.progressBar.enabled = true;
            this.rageGauge.enabled = true;
        }
        this.mobIcon.enabled = true;
        this.crownIcon.enabled = true;

    }

    this.updateProgression(info.level);

};

LevelProgressionViewHandler.prototype.updateProgression = function (level) {

    if (level === 1 || level === 2 || level === 3) {
        for (let i = 0; i < level; i++) {
            this.progressionView.progressionCircles[i].script.circleProgressionInfo.circle.element.color = this.blueColor;
            this.progressionView.progressionCircles[i].script.circleProgressionInfo.bar.element.color = this.blueColor;
        }
    } else {
        for (let i = 0; i < 3; i++) {
            this.progressionView.progressionCircles[i].script.circleProgressionInfo.circle.element.color = this.blueColor;
            this.progressionView.progressionCircles[i].script.circleProgressionInfo.bar.element.color = this.blueColor;
        }

        this.progressionView.progressionCircles[0].script.circleProgressionInfo.levelNoTxt.element.text = level - 2;
        this.progressionView.progressionCircles[1].script.circleProgressionInfo.levelNoTxt.element.text = level - 1;
        this.progressionView.progressionCircles[2].script.circleProgressionInfo.levelNoTxt.element.text = level;
        this.progressionView.progressionCircles[3].script.circleProgressionInfo.levelNoTxt.element.text = level + 1;
        this.progressionView.progressionCircles[4].script.circleProgressionInfo.levelNoTxt.element.text = level + 2;

        for (let i = 0; i < this.progressionView.progressionCircles.length; i++) {

            this.progressionView.progressionCircles[i].script.circleProgressionInfo.chest.enabled = false;
            this.progressionView.progressionCircles[i].script.circleProgressionInfo.boss.enabled = false;

            let lvl = parseInt(this.progressionView.progressionCircles[i].script.circleProgressionInfo.levelNoTxt.element.text);

            if (lvl % 5 === 0) {
                this.progressionView.progressionCircles[i].script.circleProgressionInfo.chest.enabled = false;
                this.progressionView.progressionCircles[i].script.circleProgressionInfo.boss.enabled = true;
            } else if (lvl % 6 === 0) {
                this.progressionView.progressionCircles[i].script.circleProgressionInfo.chest.enabled = true;
                this.progressionView.progressionCircles[i].script.circleProgressionInfo.boss.enabled = false;
            }

        }

    }

};

// update code called every frame
LevelProgressionViewHandler.prototype.update = function (dt) {

};

// loseMenuEventListner.js
var LoseMenuEventListner = pc.createScript('loseMenuEventListner');

LoseMenuEventListner.attributes.add('loseMenu', {
    type: 'json',
    title: 'Lose Menu Components',
    schema: [
        { name: 'killBossBtn', type: 'entity' },
        { name: 'secondTimerTxt', type: 'entity' },
    ],
});

LoseMenuEventListner.attributes.add('reviveEvent', { type: 'string' });
LoseMenuEventListner.attributes.add('noThanksBtn', { type: 'entity' });

LoseMenuEventListner.instance = null;

// initialize code called once per entity
LoseMenuEventListner.prototype.initialize = function () {

    LoseMenuEventListner.instance = this;
    this.reset();
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.loseMenu.killBossBtn.button.on("click", this.onKillBossBtnClick, this);
    this.noThanksBtn.button.on("click", this.onNoThanksBtn, this);
    this.on("enable", this.reset, this);

};

LoseMenuEventListner.prototype.reset = function () {

    if (this.downloadTimer) {
        clearInterval(this.downloadTimer);
    }

    this.hasRewardedVideo = APIMediator.isRewardedAdAvailable('button:defeat:revive');
    // this.loseMenu.killBossBtn.enabled = hasRewardedVideo;
    // this.noThanksBtn.enabled = hasRewardedVideo;

    var timeleft = this.hasRewardedVideo ? 5 : 2;
    this.loseMenu.secondTimerTxt.element.text = timeleft;
    this.downloadTimer = setInterval(() => {
        if (timeleft <= 0) {
            this.onRewardFail();
        } else {
            this.loseMenu.secondTimerTxt.element.text = timeleft;
        }
        timeleft -= 1;
    }, 1000);

};

LoseMenuEventListner.prototype.onNoThanksBtn = function () {
    this.app.fire("sound:playSound", "BtnSound");
    if (this.downloadTimer) {
        clearInterval(this.downloadTimer);
    }
    this.onRewardFail();

};

LoseMenuEventListner.prototype.onKillBossBtnClick = function () {
    this.app.fire("sound:playSound", "BtnSound");
    if (this.downloadTimer) {
        clearInterval(this.downloadTimer);
    }

    if (ConfigManager.instance.environmentType !== ConfigManager.EnvTypes.None) {
        const resumeGiveRewardCallback = LoseMenuEventListner.instance.resumeGiveReward.bind(this);
        const pauseCallback = LoseMenuEventListner.instance.pauseGame.bind(this);
        const resumeCallback = LoseMenuEventListner.instance.resumeNoReward.bind(this);
        const noADAvailableCallack = LoseMenuEventListner.instance.adNotAvailable.bind(this);
        this.app.fire("showRewardedAD", resumeGiveRewardCallback, pauseCallback, resumeCallback, noADAvailableCallack, 'button:defeat:revive');
    } else {
        this.app.fire(this.reviveEvent);
    }

};

LoseMenuEventListner.prototype.resumeGiveReward = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire(this.reviveEvent);

};

LoseMenuEventListner.prototype.pauseGame = function () {

    this.loadingAdScreen.enabled = true;

};

LoseMenuEventListner.prototype.resumeNoReward = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire("adSkippedPopup");
    this.onRewardFail();

};

LoseMenuEventListner.prototype.adNotAvailable = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire("noAdPopup");
    this.onRewardFail();

};

LoseMenuEventListner.prototype.onRewardFail = async function () {
    await APIMediator.gameOver();

    clearInterval(this.downloadTimer);
    this.loseMenu.secondTimerTxt.element.text = 0;

    this.app.fire(Events.OnResetLevel);

};

LoseMenuEventListner.prototype.update = function (dt) {

    this.hasRewardedVideo = APIMediator.isRewardedAdAvailable('button:defeat:revive');
    this.loseMenu.killBossBtn.enabled = this.hasRewardedVideo;
    this.noThanksBtn.enabled = this.hasRewardedVideo;
};

// deathManager.js
var DeathManager = pc.createScript('deathManager');

DeathManager.instance = null;

// initialize code called once per entity
DeathManager.prototype.initialize = function () {

    DeathManager.instance = this;
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.app.on(Events.OnPlayerDead, this.onPlayerDead, this);

};

DeathManager.prototype.onPlayerDead = function (reason) {

    if (reason === "Obstacle") {

        setTimeout(() => {
            this.app.fire(Events.OnChangeMenuState, MenuManager.States.LoseObstacle);
            this.app.fire("sound:playSound", 'LevelFailed');
        }, 1000);

    } else if (reason === "Boss") {


        setTimeout(() => {
            this.app.fire(Events.OnChangeMenuState, MenuManager.States.Lose);
            this.app.fire("sound:playSound", 'LevelFailed');
        }, 5000);

    }

    if (reason === "Obstacle" || reason === "Boss") {
        this.onResume();
    }

};

DeathManager.prototype.onResume = function () {

    this.loadingAdScreen.enabled = false;

};

DeathManager.prototype.onPause = function () {

    this.loadingAdScreen.enabled = true;

};

// update code called every frame
DeathManager.prototype.update = function (dt) {

};

// deathTrapInfo.js
var DeathTrapInfo = pc.createScript('deathTrapInfo');
DeathTrapInfo.attributes.add('damage', { type: 'number', default: 1 });
// initialize code called once per entity
DeathTrapInfo.prototype.initialize = function () {

};

// update code called every frame
DeathTrapInfo.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// DeathTrapInfo.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// RageMode.js
var RageMode = pc.createScript('rageMode');
RageMode.attributes.add('PlayerController', { type: 'entity' });
RageMode.attributes.add('Target', { type: 'entity' });
RageMode.attributes.add('Duration', { type: 'number' });
RageMode.attributes.add('Ease', {
    type: 'string', default: 'Linear', enum: [
        { Linear: 'Linear' },
        { QuadraticIn: 'QuadraticIn' },
        { QuadraticOut: 'QuadraticOut' },
        { QuadraticInOut: 'QuadraticInOut' },
        { CubicIn: 'CubicIn' },
        { CubicOut: 'CubicOut' },
        { CubicInOut: 'CubicInOut' },
        { QuarticIn: 'QuarticIn' },
        { QuarticOut: 'QuarticOut' },
        { QuarticInOut: 'QuarticInOut' },
        { QuinticIn: 'QuinticIn' },
        { QuinticOut: 'QuinticOut' },
        { QuinticInOut: 'QuinticInOut' },
        { SineIn: 'SineIn' },
        { SineOut: 'SineOut' },
        { SineInOut: 'SineInOut' },
        { ExponentialIn: 'ExponentialIn' },
        { ExponentialOut: 'ExponentialOut' },
        { ExponentialInOut: 'ExponentialInOut' },
        { CircularIn: 'CircularIn' },
        { CircularOut: 'CircularOut' },
        { CircularInOut: 'CircularInOut' },
        { BackIn: 'BackIn' },
        { BackOut: 'BackOut' },
        { BackInOut: 'BackInOut' },
        { BounceIn: 'BounceIn' },
        { BounceOut: 'BounceOut' },
        { BounceInOut: 'BounceInOut' },
        { ElasticIn: 'ElasticIn' },
        { ElasticOut: 'ElasticOut' },
        { ElasticInOut: 'ElasticInOut' }
    ]
});

// initialize code called once per entity
RageMode.prototype.initialize = function () {
    this.velocity = new pc.Vec3(1, 1, 1);
    this.entity.rigidbody.on('triggerenter', this.OnTriggerEnter, this);
};

RageMode.prototype.OnTriggerEnter = function (result) {
    if (result.tags.has('Collectable') && !result.tags.has('Static')) {
        result.collision.enabled = false;
        this.PlayerController.script.playerController.objects.push(result);
    }
};

// update code called every frame
RageMode.prototype.update = function (dt) {
    var pos = this.Target.getPosition();
    this.entity.setPosition(pos.x, pos.y, pos.z);
};

// swap method called for script hot-reloading
// inherit your script state here
// RageMode.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// FightingDamageSettings.js
var FightingDamageSettings = pc.createScript('fightingDamageSettings');

FightingDamageSettings.attributes.add('hero', {
    title: 'Hero Settings',
    type: 'json',
    schema: [
        { name: 'lowDamage', title: 'Low Damage', type: 'number', default: 16},
        { name: 'mediumDamage', title: 'Medium Damage', type: 'number', default: 16},
        { name: 'highDamage', title: 'High Damage', type: 'number', default: 17},
        { name: 'heroWinFactor', title: 'Hero Win Factor', type: 'number', default: 1.5},
    ]
});

FightingDamageSettings.attributes.add('boss', {
    title: 'Boss Settings',
    type: 'json',
    schema: [
        { name: 'lowDamage', title: 'Low Damage', type: 'number', default: 17},
        { name: 'mediumDamage', title: 'Medium Damage', type: 'number', default: 20},
        { name: 'highDamage', title: 'High Damage', type: 'number', default: 23},
    ]
});

// swap method called for script hot-reloading
// inherit your script state here
// FightingDamageSettings.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// ScaleSettings.js
var ScaleSettings = pc.createScript('scaleSettings');

ScaleSettings.attributes.add('minScale', {type: 'number', title: 'Min Scale'});
ScaleSettings.attributes.add('maxScale', {type: 'number', title: 'Max Scale'});
ScaleSettings.attributes.add('minBossScale', {type: 'number', title: 'Min Boss Scale'});
ScaleSettings.attributes.add('maxBossScale', {type: 'number', title: 'Max Boss Scale'});
ScaleSettings.attributes.add('maxLevels', {type: 'number', title: 'Max Levels'});

// initialize code called once per entity
ScaleSettings.prototype.initialize = function() {
};

// update code called every frame
ScaleSettings.prototype.update = function(dt) {

};

ScaleSettings.prototype.getBossScale = function(level) {
    return pc.math.lerp(this.minBossScale, this.maxBossScale,  pc.math.clamp(level / this.maxLevels, 0, 1));
};


ScaleSettings.prototype.getHeroScale = function(level) {
    return pc.math.lerp(this.minScale, this.maxScale,  pc.math.clamp(level / this.maxLevels, 0, 1));
};



// swap method called for script hot-reloading
// inherit your script state here
// ScaleSettings.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// progressionCircleInfo.js
var ProgressionCircleInfo = pc.createScript('progressionCircleInfo');

// initialize code called once per entity
ProgressionCircleInfo.prototype.initialize = function() {

};

// update code called every frame
ProgressionCircleInfo.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ProgressionCircleInfo.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// Settings.js
var Settings = pc.createScript('settings');

Settings.attributes.add('configs', {
    title: 'Config Files',
    type: 'json',
    schema: [
        { name: 'obj', type: 'entity', title: 'Entity'},
        { name: 'scriptName', type: 'string', title: 'Script Name'},
        { name: 'variableName', type: 'string', title: 'Variable Name'},
    ],
    array: true,
});

// Settings.attributes.add('settings', { type: 'entity', title: 'Settings Presets', array: true });

// initialize code called once per entity
Settings.prototype.initialize = function () {

    for (let i = 0; i < this.configs.length; i++) {
        Settings[this.configs[i].variableName] = this.configs[i].obj.script[this.configs[i].scriptName];
    }

    // Settings.fightingDamage = this.settings[0].script.fightingDamageSettings;
    // Settings.scale = this.settings[1].script.scaleSettings;
    // Settings.upgrade = this.settings[2].script.scaleSettings;

    // console.log('Settings: initialize');
};

Settings.prototype.update = function(dt) {

};


// StorageManager.js
var StorageManager = pc.createScript('storageManager');


StorageManager.prototype.initialize = function () {
    StorageManager.Instance = this;
};


StorageManager.prototype.update = function (dt) {

};

StorageManager.prototype.setVariable = function (name, val) {
    APIMediator.setStorageItem(name, val);
};

StorageManager.prototype.getVariable = function (name, defaultVal) {
    return APIMediator.getStorageItem(name) || defaultVal;
};


// circleProgressionInfo.js
var CircleProgressionInfo = pc.createScript('circleProgressionInfo');

CircleProgressionInfo.attributes.add('circle', { type: 'entity' });
CircleProgressionInfo.attributes.add('bar', { type: 'entity' });
CircleProgressionInfo.attributes.add('levelNoTxt', { type: 'entity' });
CircleProgressionInfo.attributes.add('chest', { type: 'entity' });
CircleProgressionInfo.attributes.add('boss', { type: 'entity' });

// initialize code called once per entity
CircleProgressionInfo.prototype.initialize = function () {

};

// update code called every frame
CircleProgressionInfo.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// CircleProgressionInfo.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// DataManager.js
var DataManager = pc.createScript('dataManager');
DataManager.attributes.add('defaultKick', { type: 'string' });
DataManager.attributes.add('isAllFree', { type: 'boolean', title: 'Is All Free' });
DataManager.attributes.add('fixedKickLevel', { type: 'number', title: 'Fixed Kick Level' });
DataManager.attributes.add('fixedMultiplier', { type: 'number', title: 'Fixed Multiplier' });

// initialize code called once per entity
DataManager.prototype.initialize = function () {

    DataManager.Instance = this;

    this.gems = StorageManager.Instance.getVariable('Gems', 0);
    if (typeof this.gems == 'string') this.gems = parseInt(this.gems);
    // console.log('Gems', this.gems);

    let defaultLevel = this.fixedKickLevel > 0 ? this.fixedKickLevel : 1;
    this.kickLevel = StorageManager.Instance.getVariable('KickLevel', defaultLevel);
    if (typeof this.kickLevel == 'string') this.kickLevel = parseInt(this.kickLevel);

    this.kickLevelUpgradesBought = StorageManager.Instance.getVariable('KickLevelUpgradesBought', 0);
    if (typeof this.kickLevelUpgradesBought == 'string') this.kickLevelUpgradesBought = parseInt(this.kickLevelUpgradesBought);

    // console.log('kickLevel', this.kickLevel);
    // console.log('kickLevelUpgradesBought', this.kickLevelUpgradesBought);

    defaultLevel = this.fixedMultiplier > 0 ? this.fixedMultiplier : Settings.upgrade.multiplierStartLevel;
    this.multiplierLevel = StorageManager.Instance.getVariable('MultiplierLevel', defaultLevel);
    if (typeof this.multiplierLevel == 'string') this.multiplierLevel = parseInt(this.multiplierLevel);

    this.multiplierUpgradesBought = StorageManager.Instance.getVariable('MultiplierUpgradesBought', 0);
    if (typeof this.multiplierUpgradesBought == 'string') this.multiplierUpgradesBought = parseInt(this.multiplierUpgradesBought);

    let mul = Settings.upgrade.getMultiplier(defaultLevel);
    this.lastMaxMultiplier = StorageManager.Instance.getVariable('LastMaxMultiplier', mul);
    if (typeof this.lastMaxMultiplier == 'string') this.lastMaxMultiplier = parseInt(this.lastMaxMultiplier);

    Debug.log('lastMaxMultiplier: ', this.lastMaxMultiplier);
    // console.log('multiplierUpgradesBought', this.multiplierUpgradesBought);
};

DataManager.prototype.setGems = function (val, assign) {
    this.gems = assign ? val : this.gems + val;
    StorageManager.Instance.setVariable("Gems", this.gems);

    // this.app.fire(Events.OnUpdateGemsView);
    // console.log(typeof this.gems);
};

DataManager.prototype.upgradeKickLevel = function (adWatched) {
    let price = Settings.upgrade.getKickPrice(this.kickLevel + 1);
    if (this.gems - price >= 0 || this.isAllFree || adWatched) {
        if (this.gems - price >= 0)
            this.setGems(-price);

        this.kickLevel += 1;
        this.kickLevelUpgradesBought++;
        // console.log(typeof this.kickLevel);

        StorageManager.Instance.setVariable("KickLevel", this.kickLevel);
        StorageManager.Instance.setVariable("KickLevelUpgradesBought", this.kickLevelUpgradesBought);
        this.app.fire("onKickUp");

        return true;
    }
    else {
        Debug.log("Not enough Gems");
        return false;
    }
};

DataManager.prototype.upgradeMultiplierLevel = function (adWatched) {
    let price = Settings.upgrade.getMultiplierPrice(this.multiplierLevel + 1);
    if (this.gems - price >= 0 || this.isAllFree || adWatched) {
        if (this.gems - price >= 0)
            this.setGems(-price);

        this.multiplierLevel += 1;
        this.multiplierUpgradesBought++;
        StorageManager.Instance.setVariable("MultiplierLevel", this.multiplierLevel);
        StorageManager.Instance.setVariable("MultiplierUpgradesBought", this.multiplierUpgradesBought);
        this.app.fire("onMultiUpgraded");
        return true;
    }
    else {
        Debug.log("Not enough Gems");
        return false;
    }
};

DataManager.prototype.upgradeLastMaxMultiplier = function (mul) {

    Debug.log('upgradeLastMaxMultiplier', mul);
    this.lastMaxMultiplier = mul;
    StorageManager.Instance.setVariable("LastMaxMultiplier", this.lastMaxMultiplier);
};

// update code called every frame
DataManager.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// DataManager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// MaterialChanger.js
var MaterialChanger = pc.createScript('materialChanger');
MaterialChanger.attributes.add('renderEntiry', { type: 'entity' });
MaterialChanger.attributes.add('InitialColorType', {
    type: 'json', schema:
        [
            {
                name: 'ColorType',
                type: 'number',
                enum: [
                    { Green: 0 },
                    { Blue: 1 },
                    { Orange: 2 },
                    { Yellow: 3 },
                ]
            },
        ]
});

// initialize code called once per entity
MaterialChanger.prototype.initialize = function () {
    this.material = this.renderEntiry.render.meshInstances[0].material;
    this.initialColor = this.renderEntiry.render.meshInstances[0].material.diffuse.clone();
    this.emissiveColor = this.renderEntiry.render.meshInstances[0].material.emissive.clone();
    this.on('destroy', function () {
        this.material.diffuse = this.initialColor;
        this.material.emissive = this.emissiveColor;
        this.material.update();
    }, this);
};

MaterialChanger.prototype.OnColorChangedRageMode = function (data) {
    if (data.rage) {
        this.material.diffuse = data.color;
        this.material.emissive = data.color;
    } else {
        this.material.diffuse = this.initialColor;
        this.material.emissive = this.emissiveColor;
    }

    this.material.update();
};

// update code called every frame
MaterialChanger.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// MaterialChanger.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// UpgradeSettings.js
var UpgradeSettings = pc.createScript('upgradeSettings');

UpgradeSettings.attributes.add('kickPriceBase', { type: 'number', title: 'Kick Price Base' });
UpgradeSettings.attributes.add('multiplierPriceBase', { type: 'number', title: 'Multiplier Price Base' });
UpgradeSettings.attributes.add('priceIncrementStartFactor', { type: 'number', title: 'Price Increment Start Factor' });
UpgradeSettings.attributes.add('priceIncrementEndFactor', { type: 'number', title: 'Price Increment End Factor' });
UpgradeSettings.attributes.add('priceIncrementSetps', { type: 'number', title: 'Price Increment Steps' });
UpgradeSettings.attributes.add('multiplierStartLevel', { type: 'number', title: 'Multiplier Start Level' });
UpgradeSettings.attributes.add('multiplierBase', { type: 'number', title: 'Multiplier Base' });
UpgradeSettings.attributes.add('minMultiplier', { type: 'number', title: 'Min Multiplier' });
UpgradeSettings.attributes.add('multiplierIncrementValue', { type: 'number', title: 'Multiplier Increment Value' });
UpgradeSettings.attributes.add('multiplierIncrementSteps', { type: 'number', title: 'Multiplier Increment Steps' });
UpgradeSettings.attributes.add('priceIncrement', { type: 'number', title: 'Price Increment Random Unlock', default: 0.5 });

// initialize code called once per entity
UpgradeSettings.prototype.initialize = function () {

};

// update code called every frame
UpgradeSettings.prototype.update = function (dt) {

};

UpgradeSettings.prototype.getTargetMultiplier = function (kickLevel, power) {
    if (!power) power = 1;

    let min = this.minMultiplier;
    let step = this.multiplierIncrementValue;
    let multiplier = (this.getMultiplier(kickLevel) - min) * power + step + min;
    return parseInt(multiplier / step) * step;
};

UpgradeSettings.prototype.getFlyingDistance = function (multiplier, segmentSize) {
    let segment = parseInt((multiplier - 1) / this.multiplierIncrementValue);
    return segment * segmentSize;
};

UpgradeSettings.prototype.getStartMutltiplier = function () {
    return this.getMultiplier(this.multiplierStartLevel);
};

UpgradeSettings.prototype.getMultiplier = function (level) {
    let step = this.multiplierIncrementValue;
    let multiplier = this.multiplierBase;
    let steps = this.multiplierIncrementSteps;

    for (let i = 1; i < level + 1; i++) {
        let factor = i / steps;
        let factorInt = parseInt(factor);
        factor = factor == factorInt ? factor : factorInt + 1;

        multiplier += step * factor;
    }

    return parseInt(multiplier / step) * step;
};

UpgradeSettings.prototype.getKickPrice = function (kickLevel) {

    let level = kickLevel;
    let price = this.kickPriceBase;
    let startFactor = this.priceIncrementStartFactor;
    let endFactor = this.priceIncrementEndFactor;
    let steps = this.priceIncrementSteps;

    for (i = 1; i < level + 1; i++) {
        let blend = i < steps ? i / steps : 1;
        price *= startFactor + (endFactor - startFactor) * (blend * blend);
    }

    let roundFactor = 5;

    if (price > 10000) roundFactor = 500;
    else if (price > 5000) roundFactor = 100;
    else if (price > 1000) roundFactor = 50;
    else if (price > 500) roundFactor = 10;

    return parseInt(price / roundFactor) * roundFactor;
};

UpgradeSettings.prototype.getMultiplierPrice = function (multiplierLevel) {

    let level = multiplierLevel;
    let price = this.multiplierPriceBase;
    let startFactor = this.priceIncrementStartFactor;
    let endFactor = this.priceIncrementEndFactor;
    let steps = this.priceIncrementSteps;

    for (i = 1; i < level + 1; i++) {
        let blend = i < steps ? i / steps : 1;
        price *= startFactor + (endFactor - startFactor) * (blend * blend);
    }

    let roundFactor = 5;

    if (price > 10000) roundFactor = 500;
    else if (price > 5000) roundFactor = 100;
    else if (price > 1000) roundFactor = 50;
    else if (price > 500) roundFactor = 10;

    return parseInt(price / roundFactor) * roundFactor;
};

UpgradeSettings.prototype.getMaxPrice = function (kickLevel, multiplierLevel) {
    let kickPrice = this.getKickPrice(kickLevel);
    let multiplierPrice = this.getMultiplierPrice(multiplierLevel);

    let value = kickPrice > multiplierPrice ? kickPrice : multiplierPrice;

    return parseInt(value);
};

// CustomCoroutine.js
var CustomCoroutine = pc.createScript('customCoroutine');

CustomCoroutine.prototype.initialize = function () {

    CustomCoroutine.Instance = this;

    this.coroutines = [];
    this.id = 0;

    this.abandonedCoroutines = [];
    this.abandonAll = false;
};

CustomCoroutine.prototype.postInitialize = function () {

    // AB Testing
    // let ids = [];

    // ids.push(this.set(() => { console.log('A Completed'); }, 0.3));
    // ids.push(this.set(() => { console.log('B Completed'); }, 0.3));
    // ids.push(this.set(() => { console.log('C Completed'); }, 0.3));

    // this.set(() => {
    //     console.log("Triming");
    //     for (let i = 1; i < ids.length; i++) {
    //         this.clear(ids[i]);
    //     }
    // }, 0.1);
};

CustomCoroutine.prototype.update = function (dt) {
    this.coroutineTick(dt);
};

CustomCoroutine.prototype.set = function (func, delay) {

    let id = this.getId();
    this.coroutines.push({
        func: func,
        timer: delay,
        id: id
    });

    return id;
};

CustomCoroutine.prototype.coroutineTick = function (dt) {

    if (this.coroutines.length === 0) return;

    // console.log('-------- Tick ---------');
    for (let i = this.coroutines.length - 1; i > -1 ; i--) {
        // console.log('coroutine: ', i, ' -> ', this.coroutines[i]);
        this.coroutines[i].timer -= dt;
        if (this.coroutines[i].timer <= 0) {
            this.coroutines[i].func();
            this.coroutines.splice(i, 1);
        }
    }

    // console.log('-------- Clear');
    this.implementClear();
};

CustomCoroutine.prototype.clear = function (id) {
    // console.log('clear: ', id);
    this.abandonedCoroutines.push(id);
};

CustomCoroutine.prototype.clearAll = function () {

    this.abandonAll = true;
};

CustomCoroutine.prototype.implementClear = function () {

    if (this.abandonAll) {
        this.abandonAll = false;
        this.coroutines = [];
    }
    else {
        for (let i = this.abandonedCoroutines.length - 1; i > -1; i--) {
            let index = this.coroutines.findIndex((e) => { return e.id === this.abandonedCoroutines[i]; });
            // console.log('abandon: ', this.abandonedCoroutines[i], ' -> ', index);
            if (index !== -1) this.coroutines.splice(index, 1);
            this.abandonedCoroutines.splice(i, 1);
        }
    }
};

CustomCoroutine.prototype.getId = function () {

    this.id++;
    if (this.id > 1000)
        this.id = 0;

    return this.id;
};

// ChestModifier.js
var ChestModifier = pc.createScript('chestModifier');
ChestModifier.attributes.add('info', {
    type: 'json', schema: [
        {
            name: 'health',
            type: 'number',
            default: 100,
        }, {
            name: 'position',
            type: 'vec3',
            default: [0, 0, 6],
        }, {
            name: 'patchIndex',
            type: 'number'
        }
    ],
});

// initialize code called once per entity
ChestModifier.prototype.initialize = function () {

};

// update code called every frame
ChestModifier.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ChestModifier.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// GameManager.js
var GameManager = pc.createScript('gameManager');

GameManager.attributes.add('gameSpeedChangeSteps', { type: 'number', title: 'Game Speed Change Steps' });

// initialize code called once per entity
GameManager.prototype.initialize = function () {
    GameManager.Instance = this;

    this.gameSpeed = 1;
    this.targetGameSpeed = 1;
    this.lerpVal = 0;
    this.speedFactor = 1;
};

// update code called every frame
GameManager.prototype.update = function (dt) {
    this.manageGameSpeed(dt);
};

GameManager.prototype.setGameSpeed = function (speed) {
    let d = Math.abs(this.gameSpeed - this.targetGameSpeed);

    if (d === 0) this.speedFactor = 1;
    else this.speedFactor *= 1 / d;

    this.startingGameSpeed = this.gameSpeed;
    this.targetGameSpeed = speed;
    this.lerpVal = 0;
    // console.log('setGameSpeed: ', this.startingGameSpeed, ' -> ', this.targetGameSpeed);
};

GameManager.prototype.manageGameSpeed = function (dt) {

    if (this.gameSpeed === this.targetGameSpeed || this.lerpVal >= 1) return;

    this.lerpVal += dt * this.gameSpeedChangeSteps * this.speedFactor;
    this.gameSpeed = pc.math.lerp(this.startingGameSpeed, this.targetGameSpeed, this.lerpVal);

    if (this.lerpVal >= 1) this.gameSpeed = this.targetGameSpeed;
    // console.log('manageGameSpeed: ', this.lerpVal, ' -> ', this.gameSpeed);

    this.app.timeScale = this.gameSpeed;

};

// swap method called for script hot-reloading
// inherit your script state here
// GameManager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// FinishTrackSettings.js
var FinishTrackSettings = pc.createScript('finishTrackSettings');

FinishTrackSettings.attributes.add('generalSettings', {
    title: 'General Settings',
    type: 'json',
    schema: [
        { name: 'bossOffset', type: 'vec3', title: 'Boss Offset' },
        { name: 'bossMinZOffset', type: 'number', title: 'Boss Min Z Offset' },
        { name: 'bossMaxZOffset', type: 'number', title: 'Boss Max Z Offset' },
        { name: 'cullingDistance', type: 'number', title: 'Culling Distance' },
        { name: 'segmentSize', type: 'number', title: 'Segment Size' },
        { name: 'maxSegments', type: 'number', title: 'Max Segments' },
        { name: 'powerBase', type: 'number', title: 'Power Base' },
        { name: 'smokeEffectDuration', type: 'number', title: 'Smoke Effect Duration' },
        { name: 'bossLevelForMaxScale', type: 'number', title: 'Boss Level For Max Scale' },
        { name: 'miniBossForwardOffset', type: 'number', title: 'Mini Boss Forward Offset' },
        { name: 'biggBossForwardOffset', type: 'number', title: 'Bigg Boss Forward Offset' },
    ],
});

FinishTrackSettings.attributes.add('flyingSettings', {
    title: 'Flying Settings',
    type: 'json',
    schema: [
        { name: 'flyingDelay', type: 'number', title: 'Flying Delay' },
        { name: 'flyingCameraDelay', type: 'number', title: 'Flying Camera Delay' },
        { name: 'flyingDurationByMeter', type: 'number', title: 'Flying Duration By Meter' },
        { name: 'flyingWindFromDuration', type: 'number', title: 'Flying Wind From Duration' },
        { name: 'flyingDurationRange', type: 'vec2', title: 'Flying Duration Range' },
        { name: 'breakWallSlowMoSpeed', type: 'number', title: 'Break Wall SlowMo Speed' },
        { name: 'breakWallSlowMoDuration', type: 'number', title: 'Break Wall SlowMo Duration' },
    ],
});

FinishTrackSettings.attributes.add('ragdollPresets', {
    title: 'Ragdoll Presets',
    type: 'json',
    schema: [
        { name: 'maxDistance', type: 'number', title: 'Max Distance' },
        { name: 'speed', type: 'number', title: 'Speed' },
        { name: 'soundPoints', type: 'string', title: 'Sound Points', description: 'Comman Seperated values to play sound at points when playing animation', array: true },
        { name: 'animationNames', type: 'string', title: 'Animation Names', array: true },
        { name: 'data', type: 'vec2', title: 'Distance/Duration', array: true },
    ],
    array: true,
});

FinishTrackSettings.attributes.add('wallRagdollPresets', {
    title: 'Wall Ragdoll Presets',
    type: 'json',
    schema: [
        { name: 'maxDistance', type: 'number', title: 'Max Distance' },
        { name: 'speed', type: 'number', title: 'Speed' },
        { name: 'soundPoints', type: 'string', title: 'Sound Points', description: 'Comman Seperated values to play sound at points when playing animation', array: true },
        { name: 'animationNames', type: 'string', title: 'Animation Names', array: true },
        { name: 'data', type: 'vec2', title: 'Distance/Duration', array: true },
    ],
});

// initialize code called once per entity
FinishTrackSettings.prototype.initialize = function () {
    this.wallPresetNameIndex = 1;
    this.presetNameIndex = 0;
};

// update code called every frame
FinishTrackSettings.prototype.update = function (dt) {

};

FinishTrackSettings.prototype.getWallRagdollPresetData = function () {
    this.wallPresetNameIndex %= (this.wallRagdollPresets.animationNames.length);
    return { 
        name: `W${this.wallPresetNameIndex + 1}`, 
        speed: this.wallRagdollPresets.speed,
        soundPoints: this.wallRagdollPresets.soundPoints[this.wallPresetNameIndex],
        distance: this.wallRagdollPresets.data[this.wallPresetNameIndex].x,
        duration: this.wallRagdollPresets.data[this.wallPresetNameIndex++].y,
    };
};

FinishTrackSettings.prototype.getRagdollPresetData = function (distance, index) {
    this.presetNameIndex %= this.ragdollPresets[index - 1].animationNames.length;
    return {
        name: `${index}${this.presetNameIndex + 1}`,
        speed: this.ragdollPresets[index - 1].speed,
        soundPoints: this.ragdollPresets[index - 1].soundPoints[this.presetNameIndex],
        distance: this.ragdollPresets[index - 1].data[this.presetNameIndex].x,
        duration: this.ragdollPresets[index - 1].data[this.presetNameIndex++].y,
    };
    // TODO: Add distance here Pirority: Very Low
};

// FinishTrackSettings.prototype.getWallRagdollPreset = function (index) {
//     return this.getRagdollPreset(this.wallRagdollPresets, index);
// };

// this.getRagdollPreset = function (distance, index) {
//     let presetPack;

//     for (i = 0; i < _ragdollPresets.Length; i++) {
//         presetPack = _ragdollPresets[i];

//         if (distance <= presetPack.MaxDistance) {
//             return GetRagdollPreset(presetPack, index);
//         }
//     }

//     presetPack = _ragdollPresets.Last();
//     return GetRagdollPreset(presetPack, index);
// };

// FinishTrackSettings.prototype.getRagdollPreset = function (presetPack, index) {
//     index %= presetPack.Presets.Length;
//     var preset = presetPack.Presets[index];
//     preset.Speed = presetPack.Speed;
//     return preset;
// };

// swap method called for script hot-reloading
// inherit your script state here
// FinishTrackSettings.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// chestContainer.js
var ChestContainer = pc.createScript('chestContainer');
ChestContainer.attributes.add('template', {type: 'entity'});

// initialize code called once per entity
ChestContainer.prototype.initialize = function() {
ChestContainer = this;
};

// update code called every frame
ChestContainer.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ChestContainer.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// chestController.js
var ChestController = pc.createScript('chestController');
ChestController.attributes.add('animObject', { type: 'entity' });

// initialize code called once per entity
ChestController.prototype.initialize = function () {
    this.begins = false;
    this.delay = this.maxDelay = 0.5;
    this.app.on(Events.OnAttack, this.OnAttack, this);
    this.app.on(Events.OnBonusSequenceBegins, this.OnBonusSequenceBegins, this);
    this.app.on(Events.OnBonusSequenceCompleted, this.OnBonusSequenceCompleted, this);

    this.on('destroy', function () {
        this.app.off(Events.OnAttack, this.OnAttack, this);
        this.app.off(Events.OnBonusSequenceBegins, this.OnBonusSequenceBegins, this);
        this.app.off(Events.OnBonusSequenceCompleted, this.OnBonusSequenceCompleted, this);
    }, this);
};

ChestController.prototype.OnAttack = function () {
    if (!this.begins)
        return;

    Debug.log('ChestController ---> OnAttack');
    this.animObject.anim.baseLayer.play("Damage");
};

ChestController.prototype.OnBonusSequenceBegins = function () {
    this.begins = true;
};

ChestController.prototype.OnBonusSequenceCompleted = function () {
    if (!this.begins)
        return;
    this.begins = false;
    this.animObject.anim.baseLayer.play("Open");
};

// update code called every frame
ChestController.prototype.update = function (dt) {

};

ChestController.prototype.prepare = function (info) {
    this.entity.setLocalPosition(info.position);
    // this.entity.setLocalEulerAngles(info.rotation);
};
// swap method called for script hot-reloading
// inherit your script state here
// ChestController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// bonusSequenceHandler.js
var BonusSequenceHandler = pc.createScript('bonusSequenceHandler');

// initialize code called once per entity
BonusSequenceHandler.prototype.initialize = function () {
    this.app.on(Events.OnFinishLineReached, this.OnFinishLineReached, this);
    this.app.on(Events.OnBonusSequenceCompleted, this.OnBonusSequenceCompleted, this);
};

BonusSequenceHandler.prototype.OnBonusSequenceCompleted = async function () {
    Debug.log("BonusSequenceHandler ---> OnBonusSequenceCompleted");
    this.app.fire(Events.OnChangeMenuState, MenuManager.States.BlankScreen);

    this.app.fire(Events.OnChangeCameraState, CameraState.Mainmenu, 2.5, false);

    await APIMediator.gameComplete();

    let self = this;
    setTimeout(function () {
        self.app.fire(Events.OnChangeMenuState, MenuManager.States.Win);
    }, 3000);
};

BonusSequenceHandler.prototype.OnFinishLineReached = function () {
    if (!LevelInfo.isBonusLevel)
        return;

    Debug.log("BonusSequenceHandler ---> OnFinishLineReached");
    this.app.fire(Events.OnChangeMenuState, MenuManager.States.BonusView);
    this.app.fire(Events.OnChangeCameraState, CameraState.Fight, 5);
    this.app.fire(Events.OnBonusSequenceBegins);
};

BonusSequenceHandler.prototype.update = function (dt) {

};


// bonusViewController.js
var BonusViewController = pc.createScript('bonusViewController');
BonusViewController.attributes.add('tapButton', { type: 'entity' });
BonusViewController.attributes.add('fingerImg', { type: 'entity' });

BonusViewController.attributes.add('spaceBarImage', { type: 'entity' });
BonusViewController.attributes.add('tapText', { type: 'entity' });

BonusViewController.attributes.add('bossMenuComponents', {
    type: 'json',
    title: 'Menu Components',
    schema: [
        { name: 'timerBar', title: 'Power bar ref', type: 'entity' },
        { name: 'bonusMultiplierBar', type: 'entity', title: 'Bonus Multiplier Bar' },
    ],
});

BonusViewController.Instance = null;

// initialize code called once per entity
BonusViewController.prototype.initialize = function () {

    BonusViewController.Instance = this;
    this.app.on('onSpaceKeyClicked', this.OnTap, this);

    this.maxtimerBarWidth = this.bossMenuComponents.timerBar.element.width;
    // this.bossMenuComponents.timerBar.element.width = this.minFill;
    this.timerBarVal = 0;

    if (pc.platform.mobile) {
        this.spaceBarImage.enabled = false;
        this.tapText.enabled = true;
    } else {
        this.spaceBarImage.enabled = true;
        this.tapText.enabled = false;
    }

    this.minFill = 1;
    this.incrementFill = 35;
    this.emptySpeed = 1;
    this.multiplier = 0;
    this.isTappingAllowed = true;

    this.tapButton.button.on('click', this.OnTap, this);
    this.app.on(Events.OnBonusSequenceBegins, this.OnBonusSequenceBegins, this);
    this.app.on(Events.OnBonusSequenceCompleted, this.OnBonusSequenceCompleted, this);

    TweenWrapper.Tween(this.fingerImg, this.fingerImg.getLocalScale(), new pc.Vec3(0.8, 0.8, 0.8), 0.4, undefined, pc.SineIn, true, true);
    this.on("enable", this.reset, this);

    this.canAttack = true;
    this.attackDelay = 0.5;
    this.maxAttackDelay = 0.5;


};

BonusViewController.prototype.reset = function () {
    this.timerBarVal = 0;
    this.canAttack = true;
    this.isTappingAllowed = true;
    this.multiplier = 0;
    this.bossMenuComponents.timerBar.element.width = this.maxtimerBarWidth;
    this.setMultiplier(1);
    this.setTimeOut();
};

BonusViewController.prototype.setMultiplier = function (val) {
    DataManager.Instance.currentRewardMultiplier = val;
    this.bossMenuComponents.bonusMultiplierBar.fire('SetMultiplier', val);
};

BonusViewController.prototype.setTimeOut = function () {
    this.bossMenuComponents.bonusMultiplierBar.fire('SetTimeOut');
};

BonusViewController.prototype.OnBonusSequenceCompleted = function () {
    this.canAttack = false;
    this.isTappingAllowed = false;
};

BonusViewController.prototype.OnBonusSequenceBegins = function () {
    this.isTappingAllowed = true;
};

BonusViewController.prototype.OnTap = function () {
    if (!this.isTappingAllowed)
        return;

    if (this.canAttack) {
        this.canAttack = false;

        var minInclusive = 0;
        var maxExclusive = 2;
        let fillDecrement = this.bossMenuComponents.timerBar.element.width - this.emptySpeed;

        if (fillDecrement < this.minFill) {
            //last kick
        }

        this.app.fire(Events.OnAttack, {
            target: AttackTarget.Chest,
            attack: Math.floor(getRandomArbitrary(minInclusive, maxExclusive)),
        });

        this.multiplier++;
        this.setMultiplier(this.multiplier);
        this.attackDelay = this.maxAttackDelay;

        this.app.fire("sound:playSound", "Punch_" + (Math.floor(Math.random() * 4) + 1));
        this.app.fire(Events.ShakeCamera, 0.3, 0.025, 0.08);
    }

    Debug.log("BonuseViewController ---> OnTap");
};

// update code called every frame
BonusViewController.prototype.update = function (dt) {

    if (this.isTappingAllowed) {
        let fillDecrement = this.bossMenuComponents.timerBar.element.width - this.emptySpeed;
        if (fillDecrement - this.emptySpeed <= this.minFill) {
            this.canAttack = false;
            this.isTappingAllowed = false;
            this.bossMenuComponents.timerBar.element.width = this.minFill;

            this.app.fire("FightView:MultiplierTimerOver");
            var self = this;

            setTimeout(function () {
                self.app.fire(Events.OnBonusSequenceCompleted);
                this.app.fire("sound:playSound", 'LevelCompleted');
                this.app.fire("showHappyTime");
            }, 2000);

            setTimeout(function () {
                this.app.fire("sound:playSound", 'Fatality');
            }, 1600);

        } else if (fillDecrement > this.minFill) {
            this.bossMenuComponents.timerBar.element.width = fillDecrement;
            this.timerBarVal = changeRange(fillDecrement, 0, this.maxtimerBarWidth, 0, 1);

            this.attackDelay -= dt;
            if (this.attackDelay < 0 && !this.canAttack) {
                this.canAttack = true;
                this.attackDelay = this.maxAttackDelay;
            }
        }
    }
};

// Globals.js
var Globals = pc.createScript('globals');

Globals.prototype.initialize = function () {
    var self = this;

    this.app.VERSION_NUMBER = '0.2.62'; // have to be x.x.xx
    this.app.PROD_BUILD = true;

    this.app.releaseNames = {
        Dev: "dev",
        Prod: "prod"
    };

    this.app.adsToUnlockSkills = 5;
    this.app.adWaitTime = 60;
    this.app.glowWaitTime = 3;
    this.app.initialCoins = 200;
    this.app.botCastSkillMinTime = 20;
    this.app.botCastSkillMaxTime = 40;
    this.app.resetNewPlayerFlag = 3 * 24 * 60 * 60; //7 days without play the game.
    this.app.SkillsEnum = { "Ghost": 0, "Thief": 1, "Banana": 2, "Invincible": 3, "Freeze": 4, "Zombie": 5, "Grappler": 6, "FakeBox": 7, "Umbrella": 8, "Random": 9 };

    this.app.tags = {
        all: 'All',
        level1: 'Maze1',
        level2: 'Maze2',
        level3: 'Maze3',
        soundsMenu: 'SoundsMenu',
        colliderEnter: 'BorderIn'
    };

    this.app.screens = {
        Loading: 'LoadingScene',
        Menu: 'MenuScene',
        Match: 'MatchScene'
    };

    this.app.deviceType = {
        Low: "Low",
        Mid: "Mid",
        High: "High",
        None: "None",
    };

    this.app.skills = {
        Ghost: "Ghost",
        Thief: "Thief",
        Banana: "Banana",
        Invincible: "Invincible",
        Freeze: "Freeze",
        Zombie: "Zombie",
        Grappler: "Grappler",
        FakeBox: "FakeBox",
        Umbrella: "Umbrella",
        Stun: "Stun",
        FallingBox: "FallingBox",
        CollectBox: "CollectBox",
    };

    this.app.skills.attributes = {
        maxEquipeCount: 3,
        watchad: 0.85,
        upgradeCost: 200,
        texts: {
            free: 'FREE',
            watchAd: 'WATCH AD'
        },
    };

    // Params: Particle Type, Particle Position, Particle new parent
    // Use this.app.fire("ParticleManager: PlayParticle",  this.app.fx.Banana, new pc.Vec3(0,2,0), null);
    this.app.fx = {
        Box: "Box",
        Ghost: "Ghost",
        Thief: "Thief",
        Banana: "Banana",
        Invincible: "Invincible",
        Freeze: "Freeze",
        Zombie: "Zombie",
        Grappler: "Grappler",
        FakeBox: "FakeBox",
        Umbrella: "Umbrella",
        Stun: "Stun",
        Confetti: "Confetti",
    };

    this.app.skills.destination = {
        Self: "self",
        ClosestOpponent: "closestOpponent",
        AllOpponents: "allOpponents",
        ClosestBox: "closestBox"
    };

    this.app.endOfRoundsAnimations = {
        ShowedEndOfRound: "RoundsAnimations:ShowedEndOfRound",
        ShowLeaderBoard: "RoundsAnimations:ShowLeaderBoard",
        ShowedNextRound: "RoundsAnimations:ShowedNextRound"
    };

    this.app.alteredStates = {
        None: "None",
        Invincible: this.app.skills.Invincible,
        Ghost: this.app.skills.Ghost,
        Zombie: this.app.skills.Zombie,
        Freeze: this.app.skills.Freeze,
        Stun: this.app.skills.Stun,
        Thief: this.app.skills.Thief,
        FakeBox: this.app.skills.FakeBox,
        Banana: this.app.skills.Banana,
        Umbrella: this.app.skills.Umbrella,
        Grappler: this.app.skills.Grappler,
        FallingBox: this.app.skills.FallingBox,
        CollectBox: this.app.skills.CollectBox,
        Skating: "skating",
        Lose: "lose",
        Win: "win"
    };

    this.app.animations = {
        IDLE: "idle",
        RUN: "run",
        CARRY: "carry",
        SKATING: "skating",
        FREEZE: "freeze",
        STUN: "stun",
        BANANA: "banana",
        FAKEBOX: "fakebox",
        INVINCIBLE: "invincible",
        WIN: "win",
        LOSE: "lose",
        ZOMBIE: "zombie",
        UMBRELLA: "umbrella",
        GRAPPLE_PULLED: "grapplerpulled",
        GRAPPLE_SHOOT: "grapplershoot"
    };

    this.app.multiplayer = {
        operations: {
            join: 1, //STATIC IN SERVER
            updatePlayer: 2,//STATIC IN SERVER
            spawnObject: 3,//STATIC IN SERVER
            updateObject: 4,
            pickpackage: 5,
            deliverpackage: 6, //STATIC IN SERVER
            stolepackage: 7,
            affectedskill: 8,//STATIC IN SERVER
            leave: 9,
            end: 10, //STATIC IN SERVER
            countdown: 11, //STATIC IN SERVER
            presencemeta: 12, //STATIC IN SERVER
            requestEntitySync: 13,
            sendEntitySync: 14,
            changeGameState: 15,
            roundCountdown: 16,
            hostChange: 17, //STATIC IN SERVER
            leaderboard: 18, //STATIC IN SERVER
            spawnStartPackages: 19, //STATIC IN SERVER
            sendSyncro: 20, //STATIC IN SERVER
            removeBot: 21
        },
        streamoperation: {
            join: 1,
            startcountdown: 2,
            playerlist: 3,
            playpress: 4,
            endgame: 5,
            quit: 6,
            //.....
            countdown: 11, //to match the number with the multiplayer operation.
        }
    };

    this.app.vars =
    {
        stars: {
            chestOpeningCount: 100,
            reward: {
                packageDelivered: 1,
                default: 10,
                levelPromotion: 5,
                picked: 1,
            }
        }
    };

    this.app.event = {
        player: {
            ready: 'player:ready',
            move: 'player:move',
            updateTransform: 'player:updateTransform',
            updateAnimation: 'player:updateAnimation',
            deliver: 'player:deliver'
        },
        sound: {
            playMusic: 'sound:playmusic',
            stopMusic: 'sound:stopmusic',
            playSound: 'sound:playsound',
            stopSound: 'sound:stopsound',
            load: 'sound:load'
        },
        game: {
            start: 'game:start',
            gameover: 'game:gameover',
            changeState: 'game:changeState'
        },
        loading: {
            enable: 'loading:enable',
            disable: 'loading:disable',
            refresh: 'loading:refresh',
            sceneloaded: 'loading:sceneloaded',
            levelloaded: 'loading:levelloaded'
        },
        vjoy: {
            move: 'tapsinput:move',
            up: 'tapsinput:up',
            down: 'tapsinput:down'
        },
        stars: {
            refresh: 'stars:refresh',
            refreshInGame: 'stars:refreshInGame',
            addStars: 'stars:addStars',
            addIngameStars: 'stars:addIngameStars',
            addInGameStarsToRealWallet: 'stars:addInGameStarsToRealWallet',
            resetIngame: 'stars:resetIngame'
        },
        managers: {
            loadingComplete: 'managers:loadingComplete',
            loadBitmoji: 'loadBitmoji',
            onBitmojiReady: 'onBitmojiId',
            dataloaded: 'dataloaded',
            gameDataLoaded: 'gameDataLoaded',
            soundManagerLoaded: 'soundManagerLoaded'
        },
        client:
        {
            status: 'client:status',
            statusconnected: 'client:status:connected',
            hostRecognized: 'client:hostrecognized',
            visibilityChange: 'client:visibilityChange'
        },
        match:
        {
            start: 'match:start',
            end: 'match:end',
            ready: 'match:ready',
            join: 'match:join',
            updateOpponent: 'match:updateOpponent',
            spawnObject: 'match:spawnObject',
            updateObject: 'match:updateObject',
            pickpackage: 'match:pickpackage',
            pickstar: 'match:pickstar',
            deliverpackage: 'match:deliverpackage',
            stolepackage: 'match:stolepackage',
            leave: 'match:leave',
            levelloaded: 'match:levelloaded',
            affectedskill: 'match:affectedskill',
            countdown: 'match:countdown',
            presencemeta: 'match:presencemeta',
            requestEntitySync: 'match:requestentitysync',
            receiveEntitySync: 'match:receiveentitysync',
            timer: 'match:timer',
            stars: 'match:stars',
            roundCountdown: 'match:roundcountdown',
            enabletimer: 'match:enabletimer',
            minBoxes: 'match:minBoxes',
            maxBoxes: 'match:maxBoxes',
            hostChange: 'match:hostChange',
            leaderboard: 'match:leaderboard',
            spawnStartPackages: 'match:spawnstartpackages',
            sendSyncro: 'match:sentsyncro',
            removeBot: 'match:removebot',
            showTutorial: 'match:showTutorial',
            showTutorialPopup: 'match:showTutorialPopup',
            showTutorialSkill: 'match:showTutorialSkill',
            hideTutorialText: 'match:hideTutorialText',
            changeSkill: 'match:changeSkill',
            disableArrows: 'match:disableArrows',
            enableArrows: 'match:enableArrows'
        },
        entity:
        {
            activateObstacle: 'entity:activeObstacle',
            deactivateObstacle: 'entity:deactiveObstacle',
            sendSync: 'entity:sendSync',
            receiveSync: 'entity:receiveSync'
        },
        stream:
        {
            join: 'stream:join',
            leave: 'stream:leave',
            playpress: 'stream:playpress',
            countdown: 'stream:countdown',
            endgame: 'stream:endgame',
            quit: 'stream:quit'
        },
        UIEventListeners:
        {
            mainMenuEventListener: {
                setAvatarImage: "setAvatarImage",
                setCoinsTxt: 'setCoinsTxt',
                unableToJoinPopupCancel: 'unableToJoinPopupCancel',
                enableShop: 'enableShop',
                mainMenuLoaded: 'mainmenuloaded',
                loadMainMenuSkill: 'loadMainMenuSkill',
                loadMainMenuBalloon: 'loadMainMenuBalloon'
            },
            skillsMenu: {
                refreshSkills: "refreshSkills",
            },
            gameplayMenu: {
                enableSkills: 'enableSkills',
            },
            chestRewardMenu: {
                begin: 'chestRewardMenu: begin',
            },

        },
        skills:
        {
            use: 'skills:use',
            upgrade: 'skills:upgrade',
            remove: 'skills:remove',
            replace: 'skills:replace',
            selected: 'skills:selected',
            forceCooldown: 'skills:forceCooldown',
            enabled: 'skills:enabled',
            refreshcards: 'skills:refreshcards'
        },
        leaderboard:
        {
            refresh: "leaderboard:refresh",
            updatePlayer: "leaderboard:updatePlayer",
            setState: "leaderboard:setState",
            reset: "leaderboard:reset",
            refresh2D: "leaderboard:refresh2D",
            refresh3D: "leaderboard:refresh3D",
            notifyRank: "leaderboard:notifyRank",
            types: {
                mini: 0,
                round: 1,
                final: 2,
            },
        },
        store:
        {
            refreshStore: "store:refreshstore",
            iapManagerLoaded: "store:loaded",
            ballonLoaded: "store:ballonloaded",
            purchasesLoaded: "store:purchasesloaded",
            updateBalloon: "store:updateballoon"
        }
    };

    this.app.buttonSound = {
        none: "None",
        standard: "Standard",
        play: "Play"
    };

    this.app.sound = {
        selectPlayButton: 'SelectPlayButton',
        pressButton: 'PressButton',
        putSkillOnDeck: 'PutSkillOnDeck',
        removeSkillFromDeck: 'RemoveSkillFromDeck',
        upgradeSkill: 'UpgradeSkill',
        freezeOriginDestination: 'FreezeOriginDestination',
        zombieOriginDestination: 'ZombieOriginDestination',
        bananaFakeBoxOrigin: 'BananaFakeBoxOrigin',
        ghostOrigin: 'GhostOrigin',
        invincibleOrigin: 'InvincibleOrigin',
        thiefOrigin: 'ThiefOrigin',
        umbrellaOrigin: 'UmbrellaOrigin',
        grappleOrigin: 'GrappleOrigin',
        bananaDestination: 'BananaDestination',
        fakeBoxDestination: 'FakeBoxDestination',
        thiefDestination: 'ThiefDestination',
        grappleDestination: 'GrappleDestination',
        skillReady: 'SkillReady',
        pickUpBox: 'PickUpBox',
        pickUpStar: 'PickUpStar',
        deliverBox: 'DeliverBox',
        round1Opening: 'Round1Opening',
        round2Opening: 'Round2Opening',
        finalRoundOpening: 'FinalRoundOpening',
        startMatchCountdown: 'StartMatchCountdown',
        finishRoundCountdown: 'FinishRoundCountdown',
        loseRound: 'LoseRound',
        winRound: 'WinRound',
        winGame: 'WinGame',
        openChest: 'OpenChest',
        getReward: 'GetReward',
        starsGoingToChest: 'StarsGoingToChest',
        run: 'Run'
    };

    this.app.music = {
        mainMenu: 'MainMenuMusic',
        leaderboardFinalScreen: 'LeaderboardFinalScreen'
    };

    this.app.PlayerMatchStates =
    {
        NORMAL: "normal",
        WATCHER: "watcher"
    };

    this.app.debugNpcIds = [
        '1ead45b2-7e38-48a8-b121-6c998bf1becf',
        '4ab75fc9-fdae-4431-8976-c6571c06fbaf',
        '35e5af98-7e43-4057-a01c-2a80ac85e614',
        '8673bd37-3d91-4f46-a560-6a0931c74f7a',
        '6e21e203-f10d-4d69-ba04-1129671a298a',
        '05a2f2cc-7768-439c-914f-13e0c0527669',
        'c3e2ca7e-6023-42eb-9928-1de03e4874ac',
        'd8145ed9-70aa-4466-814a-04598494ded2',
        '0f2e4758-5d90-4623-9f3c-ee6c3d93aa5c',
        '920770b0-880f-4845-8db5-7160f3c84e9a',
        'e6661449-09a7-4009-81e7-4462f5388228',
        '36f8f3e6-6744-463e-985b-c9e1ccbd1fb1',
        'ef40e498-5324-4eb2-af39-c09587451a85',
        '5c88c5d1-2359-4ea7-83af-fc2743c3fa24',
        '6aa12757-bab8-456f-a125-b6b98742d4a3',
        '4835715c-dbf1-4570-9890-ee6ccc097727',
        'ecce82bd-cd96-498b-a1b5-c0df8a7a527f',
        '7fe0988a-6a73-4416-8e2e-fdbddbae5242',
        '251286c3-4bab-47b7-9641-0ae36c740e70',
        'dca38ce6-6b9c-4859-ac51-c8d8e7f486ee',
        'c44a71d1-7585-4d32-90c6-00076e092afe',
        'a2fd5b4f-9e60-41db-acf9-8e36c45a23ec',
        '9af0dad8-2c45-4972-a1ad-55a7cadbee3b',
        '983c116b-2d63-42d5-b472-3ec7bacdef70',
        '91248c5f-7a25-47e3-b969-36bc8768e8ca'
    ];

    this.app.defaultGravity = {
        "x": this.app.systems.rigidbody.gravity.x,
        "y": this.app.systems.rigidbody.gravity.y,
        "z": this.app.systems.rigidbody.gravity.z,
    };

    this.app.maxnumplayers = 8;
    this.app.MaxCollectablePackages = 3;

    this.app.avatarsize = 512;

    this.app.isDevLaunch = function () {
        var windowUrl = window.location.href;
        if (windowUrl.startsWith("https://launch.playcanvas.com") || windowUrl.startsWith("http://launch.playcanvas.com") || windowUrl.startsWith("https://playcanv.as/")) {
            return true;
        } else {
            return false;
        }
    };

    this.app.spawnableObjects = {
        PACKAGE: "Package",
        BANANA: this.app.skills.Banana,
        FAKEBOX: this.app.skills.FakeBox,
        FALLINGBOX: this.app.skills.FallingBox
    };

    this.app.syncIdCount = 0;
    this.app.getSyncId = function () {
        self.app.syncIdCount++;
        return "uid:" + self.app.syncIdCount;
    };

    this.app.check = function (value) {
        if (!value) {
            throw 'Undefined parameter ' + value;
        }

        return value;
    };

    this.app.restart = function (param, value) {
        let url = window.location.href;
        let field = param + "=";

        if (url.indexOf(field) > -1) {
            url = url.slice(0, url.indexOf(field) - 1);
        }

        let char = url.includes("?") ? "&" : "?";
        let newUrl = url + char + field + value;
        location.replace(newUrl);
    };

    this.ray = new pc.Ray();

    this.app.analytics = {
        AmplitudeDevApiKey: "e3b97b13a0c282699b803539a119b38f",
        AmplitudeProdApiKey: "478763295529a22f4cd47c9ecc0241af"
    };

    this.app.trackingEvents = {
        upgradeSkill: "upgrade_skill",
        startLevel: "start_level",
        endRound: "end_round",
        adView: "ad_view",
        openBox: "open_box",
        socketError: "socket_error",
        unableToJoinPartyMatch: "unable_to_join_original_party_match",
        unableToShowAd: "unable_to_show_ad",
        endGame: "end_game",
        halfGame: "half_game"
    };

    this.app.upgradeSkillTypeBtnText = {
        Free: "FREE",
        WatchAd: "WATCH AD"
    };

    this.app.upgradeSkillActionType = {
        Free: "free",
        Ad: "ad",
        Token: "token"
    };

    this.app.OS = function () {
        var userAgent = navigator.userAgent;
        var platform = navigator.platform;
        var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
        var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
        var iosPlatforms = ['iPhone', 'iPad', 'iPod'];
        var os;

        if (macosPlatforms.includes(platform)) {
            os = 'Mac OS';
        } else if (iosPlatforms.includes(platform)) {
            os = 'iOS';
        } else if (windowsPlatforms.includes(platform)) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (/Linux/.test(platform)) {
            os = 'Linux';
        }
        return os;
    };

    this.app.ads = {
        placement: {
            UpgradeSkill: "upgrade_skill",
            EndMatchLose: "end_match_lose",
            DoubleReward: "double_reward",
            ReturnToMenu: "return_to_menu",
            AddStarsToStarBox: "add_stars_to_starbox",
            Intermission: "intermission",
            LeaderBoard: "leaderboard",
            PlayWithAds: "playwithads",
            UnlockSkillAd: "unlockskillad",
            UnlockBalloonAd: "unlockballoonad",
            UnlockSkillAdMainScreen: "unlockskilladmainscreen",
            UnlockBallonAdMainScreen: "unlockballonadmainscreen",
            ChestMenuKeys: "chestMenuKeys",
            UnlockSkin: "unlockSkin",
            GetItSkinUnlock: "getItSkinUnlock",
            ShopUnlockSkin: "shopUnlockSkin",
            GetItLooksGoodUnlockSkin: "getItLooksGoodUnlockSkin",
            EarnGems: "earnGems",
        },
        type: {
            Rewarded: "rewarded",
            Interstitial: "interstitial"
        }
    };

    this.app.starsToGetFromStarBoxAd = 20;

    this.app.arrowPointer = {
        isEnable: "ArrowPointer: enablePointer",
        setTarget: "ArrowPointer: setTarget"
    };

    this.app.botNames = [
        "Yourealion",
        "Women Spin",
        "Coffee Rule",
        "kartier klass",
        "Pink Page",
        "Tarry Damn",
        "sparkly",
        "Snowier",
        "Skull Crusher",
        "Kunning king",
        "Hideki Riyuga",
        "Cute Ownership",
        "2Star Princess",
        "Creamy Crux",
        "Silvermoon",
        "Glory Pure",
        "Maid Cheer",
        "diamondhand146",
        "Lodi Creamy",
        "Tiny Force",
        "Great",
        "Mom Crying",
        "Live Chic",
        "Soft Mambo",
        "sweetie",
        "Baby Slamming",
        "Squatch",
        "Dove girl",
        "Winning Mob",
        "Fresh Face",
        "Strides Drink",
        "FoxHound42",
        "Goddess",
        "Buckshot",
        "Flying Mouse",
        "Couch King",
        "Story Of Me",
        "CandyRaid",
        "alwayssbeyou",
        "Ever Next",
        "Far Racer",
        "Dimples",
        "Barber Cut",
        "ValkonX11",
        "Jaycee",
        "Dracula Nurse",
        "Kral III",
        "Dazzles",
        "Monkey",
        "taken by Wine",
        "Zombie Edge",
        "Tonight Gamer",
        "capncrunchcx",
        "BothSidesCoin",
        "Sugary pie",
        "Polar Mode"
    ];

};




// plasma.js

// pc.script.attribute('materials', 'asset', [], {
//     type: 'material'
// });
// pc.script.attribute('shader', 'asset', [], {
//     type: 'shader',
//     max: 1
// });

var Plasma = pc.createScript('plasma');

Plasma.attributes.add('materials', { type: 'asset', array: true });
Plasma.attributes.add('shader', { type: 'asset' });
Plasma.attributes.add('stickman', { type: 'entity' });
Plasma.attributes.add('stickmanRainbow', { type: 'entity' });

Plasma.prototype.initialize = function () {
    // get the shader asset
    var fs = this.shader.resource;

    // update all the materials with the chunk
    for (var i = 0; i < this.materials.length; i++) {
        var material = this.materials[i].resource;
        material.chunks.APIVersion = pc.CHUNKAPI_1_55;
        material.chunks.emissivePS = fs;
        // Force the shader generator to generate UV processing code
        material.diffuseMap = new pc.Texture(this.app.graphicsDevice, {
            width: 1,
            height: 1,
            format: pc.PIXELFORMAT_R8_G8_B8
        });
        material.setParameter('iGlobalTime', 0);
        material.update();
    }

    this.app.on(Events.OnRageModeActivated, this.OnRageModeActivated, this);
    this.app.on(Events.OnRageModeDeactivated, this.OnRageModeDeactivated, this);
    this.app.on(Events.OnLoadLevel, this.OnLoadLevel, this);

    this.isEffectRunning = true;
    this.time = 0;

};

Plasma.prototype.OnLoadLevel = function () {

    this.stickmanRainbow.enabled = false;

};

Plasma.prototype.OnRageModeActivated = function () {

    // this.oldMat = this.stickman.render.material.clone();
    // this.stickman.render.material = this.materials[i].resource;
    this.stickman.enabled = false;
    this.stickmanRainbow.enabled = true;
    this.isEffectRunning = true;
    // this.app.fire("onGameMessageShow", "Rage Activated!");

};

Plasma.prototype.OnRageModeDeactivated = function () {

    // this.stickman.render.material = this.oldMat;
    this.stickman.enabled = true;
    this.stickmanRainbow.enabled = false;
    this.isEffectRunning = false;
    // this.app.fire("onGameMessageShow", "Rage Deactivated!");

};

Plasma.prototype.update = function (dt) {

    if (this.isEffectRunning) {
        // update the time uniform in the new shader chunk
        this.time += dt;
        for (var i = 0; i < this.materials.length; i++) {
            var material = this.materials[i].resource;
            material.setParameter('iGlobalTime', this.time);
        }
    }

};


// gameMessageManager.js
var GameMessageManager = pc.createScript('gameMessageManager');

GameMessageManager.attributes.add('gameMessage', { type: 'entity' });
GameMessageManager.attributes.add('gameMessageTxt', { type: 'entity' });
GameMessageManager.attributes.add('gameMessageUIs', { type: 'entity', array: true });

GameMessageManager.prototype.initialize = function () {
    this.app.on("onGameMessageShow", this.onGameMessageShow, this);
    this.app.on("fadeOutGameMessage", this.fadeOut, this);
};

GameMessageManager.prototype.onGameMessageShow = function (text) {
    this.fadeIn();
    this.gameMessageTxt.element.text = LocalizationManager.getInstance().getLocalizedText(text);
};

GameMessageManager.prototype.fadeIn = function () {
    this.gameMessage.enabled = true;
    for (let i = 0; i < this.gameMessageUIs.length; i++) {
        this.gameMessageUIs[i].element.opacity = 1;
    }
};

GameMessageManager.prototype.fadeOut = function () {
    for (let i = 0; i < this.gameMessageUIs.length; i++) {
        TweenWrapper.TweenOpacity(this.gameMessageUIs[i], 1, 0, 2.5, () => { this.gameMessage.enabled = false; });
    }
};

GameMessageManager.prototype.update = function (dt) {

};

// boundsInfo.js
var BoundsInfo = pc.createScript('boundsInfo');
BoundsInfo.attributes.add("minX", {type: 'number'});
BoundsInfo.attributes.add("maxX", {type: 'number'});

BoundsInfo.prototype.initialize = function() {

};

BoundsInfo.prototype.update = function(dt) {

};

// damageTrigger.js
var DamageTrigger = pc.createScript('damageTrigger');
DamageTrigger.attributes.add('damageEvery', { type: 'number', default: 0.25 });

DamageTrigger.prototype.initialize = function () {
    this.maxDamageEvery = this.damageEvery;
};

DamageTrigger.prototype.activateDamage = function (value) {
    this.enableDamage = value;
    if (value)
        this.damageEvery = this.maxDamageEvery;
};

DamageTrigger.prototype.update = function (dt) {
    if (this.enableDamage) {
        this.damageEvery -= dt;

        if (this.damageEvery <= 0) {
            this.damageEvery = this.maxDamageEvery;
            var data = {
                color: null,
                type: CollectableType.Lava,
                pos: pc.Vec3.ZERO,
                isValidColor: false,
            };

            this.app.fire(Events.OnCollectablePicked, data);
        }
    }
};

// cameraTrigger.js
var CameraTrigger = pc.createScript('cameraTrigger');
CameraTrigger.attributes.add('tag', { type: 'string' });
CameraTrigger.attributes.add('speed', { type: 'number', default: 5 });
CameraTrigger.attributes.add('onEnter',
    {
        type: 'number',
        enum:
            [
                { Mainmenu: 0 },
                { Gameplay: 1 },
                { Fight: 2 },
                { Flight: 3 },
                { End: 4 },
                { Wall: 5 },
            ]
    });
CameraTrigger.attributes.add('onLeave',
    {
        type: 'number',
        enum:
            [
                { Mainmenu: 0 },
                { Gameplay: 1 },
                { Fight: 2 },
                { Flight: 3 },
                { End: 4 },
                { Wall: 5 },
            ]
    });
CameraTrigger.prototype.initialize = function () {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
    this.entity.collision.on('triggerleave', this.onTriggerExit, this);
};

CameraTrigger.prototype.onTriggerEnter = function (result) {
    if (result.tags.has(this.tag)) {
        this.app.fire(Events.OnChangeCameraState, this.onEnter, this.speed);
    }
};

CameraTrigger.prototype.onTriggerExit = function (result) {
    if (result.tags.has(this.tag)) {
        this.app.fire(Events.OnChangeCameraState, this.onLeave, this.speed);
    }
};

CameraTrigger.prototype.update = function (dt) {

};


// renderCameraToElement.js
var RenderCameraToElement = pc.createScript('renderCameraToElement');

RenderCameraToElement.attributes.add('elementTags', {
    type: 'string', array: true, description: 'Render to elements that have these tags'
});

RenderCameraToElement.attributes.add('renderResolution', {
    type: 'vec2', description: 'Resolution to render at'
});

RenderCameraToElement.attributes.add('renderOnce', {
    type: 'boolean', description: 'Renders the first frame only'
});


// initialize code called once per entity
RenderCameraToElement.prototype.initialize = function() {
    this.createNewRenderTexture();
    this.renderOnceFrameCount = 0;

    this.on('destroy', function () {
        this.assignTextureToElements(null);
        this.renderTarget.destroy();
        this.texture.destroy();
    }, this);
};


RenderCameraToElement.prototype.update = function (dt) {
    // Workaround as it takes a few frames before the 
    // camera has rendered the entities
    if (this.renderOnce) {
        this.renderOnceFrameCount += 1;
        if (this.renderOnceFrameCount > 4) {
            this.entity.enabled = false;
        }
    }
};


RenderCameraToElement.prototype.createNewRenderTexture = function() {
    var device = this.app.graphicsDevice;

    // Make sure we clean up the old textures first and remove 
    // any references
    if (this.texture && this.renderTarget) {
        var oldRenderTarget = this.renderTarget;
        var oldTexture = this.texture;
        
        this.renderTarget = null;
        this.texture = null;
        
        oldRenderTarget.destroy();
        oldTexture.destroy();
    }
    
    // Create a new texture based on the current width and height of 
    // the screen reduced by the scale
    var colorBuffer = new pc.Texture(device, {
        width: this.renderResolution.x,
        height: this.renderResolution.y,
        format: pc.PIXELFORMAT_R8_G8_B8,
        autoMipmap: true
    });
    
    colorBuffer.minFilter = pc.FILTER_LINEAR;
    colorBuffer.magFilter = pc.FILTER_LINEAR;
   
    var renderTarget = new pc.RenderTarget({
        colorBuffer: colorBuffer,
        depth: true,
        flipY: true,
        samples: 2
    });

    this.entity.camera.renderTarget = renderTarget;
    
    this.texture = colorBuffer;
    this.renderTarget = renderTarget;

    this.assignTextureToElements(this.texture);
};


RenderCameraToElement.prototype.assignTextureToElements = function (texture) {
    // Assign the texture to the elements
    var elementEntities;

    for (var i = 0; i < this.elementTags.length; ++i) {
        elementEntities = this.app.root.findByTag(this.elementTags[i]);
        for (var j = 0; j < elementEntities.length; ++j) {
            elementEntities[j].element.texture = texture;
        }
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// RenderCameraToElement.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// chestRoomSettings.js
var ChestRoomSettings = pc.createScript('chestRoomSettings');
ChestRoomSettings.attributes.add('firstIterationWinIndex', { type: 'number', default: 3 });
ChestRoomSettings.attributes.add('winIndices', { type: 'number', array: true });

ChestRoomSettings.attributes.add('gemsRegularPrizeMin', { type: 'number' });
ChestRoomSettings.attributes.add('gemsRegularPrizeMax', { type: 'number' });

ChestRoomSettings.attributes.add('gemsBestPrizeMin', { type: 'number' });
ChestRoomSettings.attributes.add('gemsBestPrizeMax', { type: 'number' });

ChestRoomSettings.attributes.add('GemsBestPrizeIcon', {
    type: 'asset',
    assetType: 'sprite',
});

ChestRoomSettings.attributes.add('keysForOpenRoom', { type: 'number' , default: 3});
ChestRoomSettings.attributes.add('keysFromRewardedVideo', { type: 'number' , default: 3});

// initialize code called once per entity
ChestRoomSettings.prototype.initialize = function () {

};

// update code called every frame
ChestRoomSettings.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ChestRoomSettings.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// BiggBossController.js
var BiggBossController = pc.createScript('biggBossController');

BiggBossController.State = {
    idle: 0,
    attack: 1,
    punch: 2,
    tired: 3,
    rage: 4,
    victory: 5,
    beaten: 6,
    fall: 7,
};

BiggBossController.attributes.add('maxHealth', { type: 'number', title: 'Health' });

BiggBossController.attributes.add('currentState', {
    type: 'number',
    enum: [
        { "Idle": BiggBossController.State.idle },
        { "Attack": BiggBossController.State.attack },
        { "Punch": BiggBossController.State.punch },
        { "Tired": BiggBossController.State.tired },
        { "Rage": BiggBossController.State.rage },
        { "Victory": BiggBossController.State.victory },
        { "Beaten": BiggBossController.State.beaten },
        { "Fall": BiggBossController.State.fall },
    ],
});

BiggBossController.attributes.add('animator', { type: 'entity', title: 'Animator' });
BiggBossController.attributes.add('modelObj', { type: 'entity', title: 'Model' });

BiggBossController.attributes.add('punchVFX', { type: 'entity' });
BiggBossController.attributes.add('vfxPositions', { type: 'entity', array: true });

BiggBossController.attributes.add('testing', {
    title: 'Testing',
    type: 'json',
    schema: [
        { name: 'customBossDamage', type: 'number' },
        { name: 'customBossScale', type: 'number' },
    ],
});

// *********************
// * Playcanvas Events *
// *********************

BiggBossController.prototype.initialize = function () {
    this.initEvents();
    this.initVars();
};

BiggBossController.prototype.postInitialize = function () {
    this.app.fire("ReferenceManager:SetBigBoss", this);
};

BiggBossController.prototype.onEnable = function () {
    this.changeState(BiggBossController.State.idle);
};

BiggBossController.prototype.onDisable = function () {

};

BiggBossController.prototype.onDestroy = function () {
    this.off('enable', this.onEnable, this);
    this.off('disable', this.onDisable, this);
    this.off('destroy', this.onDestroy, this);

    //Custom Events
    this.app.off('BigBossFighting:Begin', this.onFightStarted, this);
    this.app.off('BigBossFighting:BossTired', this.onBigBossTired, this);
    this.app.off('BigBossFighting:BossRage', this.onBigBossRage, this);
    this.app.off('PlayerBigBossFighting:HitBigBoss', this.onPlayerHit, this);
    this.app.off('BigBossFighting:BossBeaten', this.onBeaten, this);
    this.app.off('BigBossFighting:KillBoss', this.onBossDead, this);
    this.app.off('BigBoss:PlayPunchVfx', this.playPunchVfx, this);

    this.app.off(Events.OnPlayerDead, this.onPlayerDead, this);
    this.app.off(Events.OnRevivePlayer, this.onRevivePlayer, this);
    this.app.off(Events.OnFinishLineStarted, this.onFinishLineStarted, this);
};

BiggBossController.prototype.update = function (dt) {
    // this.testStates();
    this.updatePunches(dt);
    this.updateTiredness(dt);
};

// *******************
// * Initializations * 
// *******************

BiggBossController.prototype.initEvents = function () {
    // Entity Events
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);
    this.on('destroy', this.onDestroy, this);

    //Custom Events
    this.app.on("BigBoss:IncreasePunches", () => { this.punchesCount++; });
    this.app.on('BigBossFighting:Begin', this.onFightStarted, this);
this.app.on('BigBossFighting:BossTired', this.onBigBossTired, this);
    this.app.on('BigBossFighting:BossRage', this.onBigBossRage, this);
    this.app.on('PlayerBigBossFighting:HitBigBoss', this.onPlayerHit, this);
    this.app.on('BigBossFighting:BossBeaten', this.onBeaten, this);
    this.app.on('BigBossFighting:KillBoss', this.onBossDead, this);
    this.app.on('BigBoss:PlayPunchVfx', this.playPunchVfx, this);

    this.app.on(Events.OnPlayerDead, this.onPlayerDead, this);
    this.app.on(Events.OnRevivePlayer, this.onRevivePlayer, this);
    this.app.on(Events.OnFinishLineStarted, this.onFinishLineStarted, this);
};

BiggBossController.prototype.initVars = function () {
    this.punchTimer = 0;
    this.tiredTimer = 0;
    this.rageTimer = 1;
    this.transitionDuration = 0;

    this.prevState = this.currentState;
    this.stars = this.entity.findByName('Stars');

    var material = this.modelObj.render.meshInstances[0].material.clone();
    this.modelObj.render.meshInstances[0].material = material;
    this.mat = material;
};

BiggBossController.prototype.changeState = function (state) {

    if (this.prevState === this.currentState)
        this.transitionDuration = 0.2;
    else
        this.transitionDuration = 0;

    this.prevState = this.currentState;
    this.currentState = state;
    this.animator.anim.setInteger("State", state);
    // console.log(this.animator.anim.baseLayer);
};

// *******************
// * Functionalities * 
// *******************

BiggBossController.prototype.onFinishLineStarted = function () {
    this.setUpPosition();
    this.changeState(BiggBossController.State.attack);
};

BiggBossController.prototype.onFightStarted = function () {
    this.punchesCount = Settings.biggBossFighting.getBossPunches();
    Debug.log("BiggBossController: onFightStarted -> ", this.punchesCount);
    this.punchTimer = 0.01; // assigning greater than zero to let it excute for very first time
    this.tiredTimer = 0;
};

BiggBossController.prototype.updatePunches = function (dt) {
    // console.log(this.punchTimer);

    if (this.punchTimer <= 0) return;

    this.punchTimer -= dt;

    if (this.punchTimer <= 0) {
        if (this.punchesCount > 0) {
            this.punchesCount--;
            this.app.fire('BigBossFighting:ManageUI', false, true, false);

            this.changeState(BiggBossController.State.punch);
            this.rotateTowardsPlayer();

            this.punchTimer = this.getStateTime('Punch');
            this.app.fire('TargetLocking:Show', true, this.quadrent);
            this.app.fire("sound:playSound", "Whoosh");

            CustomCoroutine.Instance.set(() => {
                this.app.fire('BigBoss:HitPlayer', this.getDamage(), this.quadrent);
                this.app.fire('TargetLocking:Show', false, this.quadrent);
                // Randomly play from 1 2 3 and 4 punch sounds
                this.app.fire("sound:playSound", `BigBossPunch${parseInt(pc.math.random(1, 4.1))}`);
            }, this.punchTimer / 2);

            GameManager.Instance.gameSpeedChangeSteps = 5;
            CustomCoroutine.Instance.set(() => {
                GameManager.Instance.gameSpeedChangeSteps *= 2;
                GameManager.Instance.setGameSpeed(1);
            }, this.punchTimer * (2.5 / 4));
        }
        else {
            GameManager.Instance.gameSpeedChangeSteps = 5;
            this.app.fire('BigBoss:TiredOfPunches');
        }
    }
};

BiggBossController.prototype.onBigBossTired = function () {
    this.app.fire("sound:playSound", "BigBossTired");
    this.changeState(BiggBossController.State.tired);
    this.tiredTimer = Settings.biggBossFighting.bossSettings.bossTiredDuration;
    this.rotateTowardsPlayer();
    this.enableStars(true);
};

BiggBossController.prototype.updateTiredness = function (dt) {
    if (this.tiredTimer <= 0) return;

    this.tiredTimer -= dt;

    if (this.tiredTimer <= 0) {
        this.app.fire("BigBoss:TirednessEnded");
    }
};

BiggBossController.prototype.onBigBossRage = function () {
    this.app.fire("sound:playSound", "BigBossRage");
    this.changeState(BiggBossController.State.rage);
    this.punchesCount = Settings.biggBossFighting.getBossPunches();
    this.punchTimer = this.getStateTime('Rage');
    this.enableStars(false);
};

BiggBossController.prototype.onPlayerHit = function (damage) {
    this.health -= damage;

    this.health = pc.math.clamp(this.health, 0, this.maxHealth);
    this.app.fire('FightView:SetHealth', AttackTarget.Boss, this.health / this.maxHealth);

    if (this.health <= 0)
        this.app.fire('BigBoss:Beaten');
};

BiggBossController.prototype.onBeaten = function () {
    this.app.fire("sound:playSound", "BigBossTired");
    this.punchTimer = 0;
    this.tiredTimer = 0;
    this.changeState(BiggBossController.State.beaten);
};

BiggBossController.prototype.onBossDead = function () {
    this.app.fire("sound:playSound", "Fatality");
    this.app.fire("sound:playSound", "Falling", 0.2);
    this.changeState(BiggBossController.State.fall);

    CustomCoroutine.Instance.set(() => {
        this.app.fire('BigBossFighting:OnComplete');
    }, this.getStateTime('Fall') + 0.2);
};

BiggBossController.prototype.onPlayerDead = function () {
    this.punchTimer = 0;
    this.tiredTimer = 0;

    this.changeState(BiggBossController.State.victory);
};

BiggBossController.prototype.onRevivePlayer = function () {
    this.changeState(BiggBossController.State.attack);
};

BiggBossController.prototype.playPunchVfx = function () {
    this.punchVFX.fire('Play', this.vfxPositions[0].getLocalPosition());
};

BiggBossController.prototype.setUpPosition = function () {
    // let playerScale = ReferenceManager.Instance.player.script.playerController.PlayerAnimator.getLocalScale().x;

    // this.zOffset = playerScale * Settings.biggBossFighting.heroSettings.heroOffsetFactor;
    // console.log('zOffset: ', this.zOffset);

    // let pos = this.entity.getLocalPosition();
    // this.entity.setLocalPosition(pos.x, pos.y, pos.z + this.zOffset);
    // console.log('Big Boss Pos: ', pos);
};

BiggBossController.prototype.getDamage = function () {
    let isBigBossTutorial = BiggBossFightingManager.Instance.isTutorialRequired;
    let damageRange = Settings.biggBossFighting.damageSettings.bossDamage;
    let damage = isBigBossTutorial ? damageRange.x : damageRange.y;

    return damage;
};

BiggBossController.prototype.prepare = function (info, levelNumber) {

    this.health = this.maxHealth;
    this.quadrent = 0;
    let bossLevelDelta = 0;
    let difficultyData = ReferenceManager.Instance.root.script.levelsData.difficultyData;
    // console.log('prepare: ', info);
    // console.log('prepare: ', difficultyData);

    for (let i = 0; i < difficultyData.length; i++) {
        if (levelNumber <= difficultyData[i].minLevel) {
            bossLevelDelta = difficultyData[i].bossLevelDelta;
            break;
        }
    }

    // console.log("prepare data: ", info.maxHeroLevel, bossLevelDelta);
    let level = Math.max(1, info.maxHeroLevel - bossLevelDelta);
    let scale = Settings.biggBossFighting.bossSettings.bossScale;
    // console.log("prepare scale: ", scale);

    this.mat.diffuse = this.mat.emissive = info.color;
    this.health = this.maxHealth = info.health;
    this.bossLevel = level;

    let x = info.position.x;
    let y = info.position.y;
    let z = info.position.z + Settings.biggBossFighting.bossSettings.bossOffsetZ;
    Debug.log("Boss Z: ", z);
    this.enableStars(false);

    this.entity.setLocalPosition(x, y, z);
    this.entity.setLocalEulerAngles(0, 0, 0);
    this.entity.setLocalScale(scale, scale, scale);
};

BiggBossController.prototype.rotateTowardsPlayer = function () {
    let player = ReferenceManager.Instance.player.script.playerController;
    let playerQuad = player.bigBossFightingController.swipeIndex;

    if (this.quadrent === playerQuad) return;
    this.quadrent = playerQuad;

    let angle = this.entity.getLocalEulerAngles();
    Debug.log('player angle: ', player.y);
    TweenWrapper.TweenNumber(0, 1, 0.5, (obj) => {
        let y = pc.math.lerpAngle(angle.y, this.quadrent * 90, obj.number);
        this.entity.setLocalEulerAngles(angle.x, y, angle.z);

    });
};

BiggBossController.prototype.getStateTime = function (state) {
    if (state)
        return this.animator.anim.baseLayer._controller._states[state].timelineDuration;

    Debug.log("getStateTime: ", this.animator.anim.baseLayer.activeState);
    return this.animator.anim.baseLayer.activeStateDuration + this.transitionDuration;
};

BiggBossController.prototype.enableStars = function (enable) {
    this.stars.enabled = enable;
};

// ***********
// * Testing * 
// ***********

BiggBossController.prototype.testStates = function () {
    if (this.testStateCurrent === this.currentState) return;

    this.testStateCurrent = this.currentState;
    this.changeState(this.currentState);
    Debug.log("State: ", this.currentState);
};

// swap method called for script hot-reloading
// inherit your script state here
// BiggBossController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// configManager.js
var ConfigManager = pc.createScript('configManager');

ConfigManager.EnvTypes = {
    'None': -1,
    'Famobi': 4
};

ConfigManager.Mode = {
    'Development': 0,
    'Production': 1,
};

ConfigManager.attributes.add('version', {
    type: 'string',
    title: 'Version'
});

ConfigManager.attributes.add('devMode', {
    type: 'number',
    enum: [
        { 'Development': ConfigManager.Mode.Development },
        { 'Production': ConfigManager.Mode.Production },
    ],
    title: "BuildType"
});

ConfigManager.attributes.add('environmentType', {
    type: 'number',
    enum: [
        { 'None': ConfigManager.EnvTypes.None },
        { 'Famobi': ConfigManager.EnvTypes.Famobi },
    ],
    title: "EnvType"
});

ConfigManager.instance = null;

ConfigManager.prototype.initialize = function () {
    ConfigManager.instance = this;

    this.app.fire(this.app.events.configManager.initialized);
};

// chestRoomManager.js
var ChestRoomManager = pc.createScript('chestRoomManager');
ChestRoomManager.attributes.add('commonIcons', {
    type: 'json', schema: [{
        name: 'keyIcon',
        type: 'asset',
        assetType: 'sprite',
    }, {
        name: 'gemIcon',
        type: 'asset',
        assetType: 'sprite',
    }]
});
ChestRoomManager.attributes.add('bundles', {
    type: 'json', schema: [{
        name: 'rewardCollection',
        type: 'entity',
        array: true
    }, {
        name: 'type',
        type: 'number',
        enum:
            [
                { Hats: 0 },
                { Shoes: 1 },
                { Kicks: 2 },
            ]
    }], array: true
});

ChestRoomManager.attributes.add('skinIndices', {
    type: 'json', schema: [{
        name: 'premium',
        type: 'number',
        array: true
    }],
});

ChestRoomManager.prototype.GetSkinPrice = function (type) {
    let boughtSkinsCount = this.GetBoughtSkinsCount(type, SkinRarity.Common);
    let basePrice = Settings.upgrade.getMaxPrice(DataManager.Instance.kickLevel, DataManager.Instance.multiplierLevel);
    return basePrice * 2 + parseInt(basePrice * (boughtSkinsCount * Settings.upgrade.priceIncrement));
};

ChestRoomManager.prototype.GetBoughtSkinsCount = function (type, rarity) {
    let skinType = type;
    let skinRarity = rarity;
    let count = 0;

    let states = [SkinStatus.Unlocked, SkinStatus.Selected, SkinStatus.Available];

    for (let i = 0; i < states.length; i++) {
        let skinState = states[i];
        let rewards = this.GetRewards(skinType, skinRarity, skinState);
        count += rewards.length;
    }

    return count;
};

ChestRoomManager.prototype.IsPremiumRewardAvailable = function () {
    return this.levelItterator + 1 < Settings.chestRoomSettings.winIndices.length;
};

ChestRoomManager.prototype.IsProgressRewardAvailable = function () {
    var collection = this.GetCollection(SkinType.Hats, SkinRarity.Common);
    var lockedRewards = [];
    for (let i = 0; i < collection.length; i++) {
        var reward = collection[i].script.reward;
        if (reward.IsLocked())
            lockedRewards.push(reward);
    }

    return this.currentProgressRewardIndex + 1 < lockedRewards.length;
};

ChestRoomManager.prototype.GetCollection = function (skinType, rarity) {
    var bundle = myFindWhere(this.bundles, { type: skinType });
    var collection = null;
    if (bundle) {
        for (let i = 0; i < bundle.rewardCollection.length; i++) {
            var col = bundle.rewardCollection[i];
            if (col.script.collection.rarity === rarity) {
                collection = col.script.collection.rewards;
                break;
            }
        }
    }

    return collection;
};

ChestRoomManager.prototype.GetCurrentPrizeByRarity = function (skinType, rarity) {
    var index = rarity === SkinRarity.Premium ? this.currentPremiumRewardIndex
        : rarity === SkinRarity.Common && skinType === SkinType.Hats ? this.currentProgressRewardIndex
            : rarity === SkinRarity.Common && skinType === SkinType.Kicks ? this.currentKickRewardIndex
                : this.currentShoeRewardIndex;

    var collection = this.GetCollection(skinType, rarity);
    // console.log("SkinType: ", skinType, " Rarity: ", rarity,
    //     " Collection: ", collection, "Reward: ", collection[index], "Index: ", index,
    //     "PremiumReward: ", this.currentPremiumRewardIndex, "ProgressReward: ", this.currentProgressRewardIndex, " KickReward: ", this.currentKickRewardIndex);

    return collection[index].script.reward;
};

ChestRoomManager.prototype.UpdateCurrentPrize = function (status) {
    this.GetCurrentPrizeByRarity(SkinType.Hats, SkinRarity.Premium).SetStatus(status);
};

ChestRoomManager.prototype.UpdateCurrentProgressPrize = function (status) {
    this.GetCurrentPrizeByRarity(SkinType.Hats, SkinRarity.Common).SetStatus(status);
};

ChestRoomManager.prototype.UpdateCurrentKick = function (status) {
    this.GetCurrentPrizeByRarity(SkinType.Kicks, SkinRarity.Common).SetStatus(status);
};

ChestRoomManager.prototype.GetCurrentPrizeData = function (skinType, rarity) {
    return this.GetCurrentPrizeByRarity(skinType, rarity);
};

ChestRoomManager.prototype.GetCurrentProgressSkin = function () {
    return this.GetCurrentProgressPrize().data.icon.resource;
};

ChestRoomManager.prototype.GetCurrentProgressPrize = function () {
    return this.GetCurrentPrizeData(SkinType.Hats, SkinRarity.Common);
};

ChestRoomManager.prototype.GetCurrentBestPrizeSkin = function () {
    return this.GetCurrentBestPrize().data.icon.resource;
};

ChestRoomManager.prototype.GetCurrentBestPrize = function () {
    return this.GetCurrentPrizeData(SkinType.Hats, SkinRarity.Premium);
};

ChestRoomManager.prototype.GetRandomGemsReward = function () {
    return 25;
};

ChestRoomManager.prototype.GetCommonPendulumUnlockSkin = function () {
    if (this.pendulumCounter >= 4) {
        this.pendulumCounter = 0;
    }

    var data = null;
    // {
    //     value:
    //     sprite:
    //     rewardType:
    // };

    if (this.pendulumCounter === 0) {
        var collection = this.GetCollection(SkinType.Hats, SkinRarity.Common);
        if (collection) {
            // console.log("Collection: ", collection);
            for (let i = collection.length - 1; i > this.currentProgressRewardIndex; i--) {
                var reward = collection[i].script.reward;

                if (reward.IsLocked()) {
                    data = {
                        value: reward,
                        sprite: reward.data.icon.resource,
                        rewardType: PendulumReward.Skin,
                    };

                    this.pendulumCounter++;
                    return data;
                }
            }
        }
    } else if (this.pendulumCounter === 1) {
        data = {
            value: 1,
            sprite: this.commonIcons.keyIcon.resource,
            rewardType: PendulumReward.Key,
        };
        this.pendulumCounter++;
        return data;
    } else {
        data = {
            value: this.GetRandomGemsReward(),
            sprite: this.commonIcons.gemIcon.resource,
            rewardType: PendulumReward.GemsSmall,
        };
        this.pendulumCounter++;
        return data;
    }

    this.pendulumCounter++;
    return data;//this.GetRandomGemsReward();
};

ChestRoomManager.prototype.GetSkinReward = function (data) {
    var skinType = data.skinType;
    var bundle = myFindWhere(this.bundles, { type: skinType });
    var collection = [];
    if (bundle) {
        for (let i = 0; i < bundle.rewardCollection.length; i++) {
            var col = bundle.rewardCollection[i];
            collection.push(col.script.collection.rewards);
        }
    }

    if (collection) {
        // console.log("Collection: ", collection);
        for (let i = 0; i < collection.length; i++) {
            for (let j = 0; j < collection[i].length; j++) {
                let reward = collection[i][j].script.reward;

                if (reward.entity.name === data.key)
                    return reward;
            }
        }
    }
};

ChestRoomManager.prototype.GetRewards = function (skinType, skinRarity, skinState) {
    var rewards = [];
    var collection = this.GetCollection(skinType, skinRarity);

    for (let i = 0; i < collection.length; i++) {
        let reward = collection[i].script.reward;
        let state = reward.GetStatus();
        if (state == skinState) {
            rewards.push(reward);
        }
    }

    return rewards;
};

ChestRoomManager.prototype.GetRandomSkinReward = function (skinType) {
    let rewards = this.GetRewards(skinType, SkinRarity.Common, SkinStatus.Locked);
    let randomReward = null;
    if (rewards.length > 0) {
        let index = Math.floor(Math.random() * rewards.length);
        randomReward = rewards[index];
    }

    return randomReward;
};

ChestRoomManager.prototype.GetUnlockedItemsOfType = function (skinType) {
    let items = [];
    for (let i = 0; i < this.bundles.length; i++) {
        let bundle = this.bundles[i];
        if (bundle.type === skinType) {
            for (let j = 0; j < bundle.rewardCollection.length; j++) {
                var collection = bundle.rewardCollection[j].script.collection;
                for (let k = 0; k < collection.rewards.length; k++) {
                    var reward = collection.rewards[k].script.reward;
                    if (reward.IsUnlocked())
                        items.push(reward);
                }
            }
        }
    }

    return items;
};

ChestRoomManager.prototype.GetLockedItemsOfType = function (skinType) {
    let items = [];
    for (let i = 0; i < this.bundles.length; i++) {
        let bundle = this.bundles[i];
        if (bundle.type === skinType) {
            for (let j = 0; j < bundle.rewardCollection.length; j++) {
                var collection = bundle.rewardCollection[j].script.collection;
                for (let k = 0; k < collection.rewards.length; k++) {
                    var reward = collection.rewards[k].script.reward;
                    if (reward.IsLocked())
                        items.push(reward);
                }
            }
        }
    }

    return items;
};

ChestRoomManager.prototype.GetItemsOfType = function (skinType) {
    let items = [];
    for (let i = 0; i < this.bundles.length; i++) {
        let bundle = this.bundles[i];
        if (bundle.type === skinType) {
            for (let j = 0; j < bundle.rewardCollection.length; j++) {
                var collection = bundle.rewardCollection[j].script.collection;
                for (let k = 0; k < collection.rewards.length; k++) {
                    var reward = collection.rewards[k].script.reward;
                    if(reward) {
                        items.push(reward);
                    }
                }
            }
        }
    }

    return items;
};

ChestRoomManager.prototype.GetItemsOfName = function (namesCollection, skinType) {

};

// initialize code called once per entity
ChestRoomManager.prototype.initialize = function () {
    ChestRoomManager = this;

    //key balance
    this.keys = 0;
    this.winIndicesIndex = 0;

    //number of keys player needs to spend to get best prize in chest room
    this.currentWinIndex = 0;

    //current progress reward progress
    this.currentRewardProgress = 0;

    //progress reward index
    this.currentProgressRewardIndex = 0;

    //premium/best prize reward index
    this.currentPremiumRewardIndex = 0;

    //kick reward index
    this.currentKickRewardIndex = 0;

    this.currentShoeRewardIndex = 0;

    this.levelItterator = 0;

    this.bestPrizeFound = false;

    //pendulum chest unlock attempt
    this.pendulumCounter = 0;

    this.app.on(Events.OnCollectablePicked, this.OnCollectablePicked, this);
    this.app.on(Events.OnLevelLoaded, this.OnLevelLoaded, this);
    this.app.on(Events.OnFightSequenceCompleted, this.OnFightSequenceCompleted, this);
    this.app.on('BigBossFighting:OnComplete', this.OnFightSequenceCompleted, this);
    this.app.on(Events.OnLevelCompleted, this.OnLevelCompleted, this);
    this.app.on(Events.OnKeysRefill, this.OnKeysRefill, this);

    for (let i = 0; i < this.bundles.length; i++) {
        let bundle = this.bundles[i];

        for (let j = 0; j < bundle.rewardCollection.length; j++) {
            var collection = bundle.rewardCollection[j].script.collection;
            for (let k = 0; k < collection.rewards.length; k++) {
                var reward = collection.rewards[k].script.reward;
                // console.log("Reward: ", reward.entity.name, " Status: ", reward.GetStatus());
            }
        }
    }
};

ChestRoomManager.prototype.postInitialize = function () {
    this.keys = PlayerPrefs.GetInt("keys", 0);
    this.levelItterator = this.GetLevelItterator();
    this.winIndicesIndex = PlayerPrefs.GetInt("winIndex", 0);
    this.pendulumCounter = PlayerPrefs.GetInt("pendulumCounter", 0);
    this.currentProgressRewardIndex = PlayerPrefs.GetInt("progressRewardIndex", 0);
};

ChestRoomManager.prototype.GetLevelItterator = function () {
    var itterator = APIMediator.getStorageItem("levelItterator");
    if (itterator == undefined || isNaN(itterator)) {
        itterator = 0;
    }

    return parseInt(itterator);
};

ChestRoomManager.prototype.OnKeysRefill = function () {
    this.UpdateKeysBalance(Settings.chestRoomSettings.keysFromRewardedVideo);
};

ChestRoomManager.prototype.OnLevelCompleted = function () {
    var progress = this.currentRewardProgress;
    // console.log("Save Reward Progress ---> ", progress);
    APIMediator.setStorageItem("rewardProgress", progress);
    PlayerPrefs.SetItem("keys", this.keys);
    PlayerPrefs.SetItem("pendulumCounter", this.pendulumCounter);
    // this.UpdateCurrentProgressPrize();

    if (this.bestPrizeFound) {
        var item = this.GetCurrentPrizeByRarity(SkinType.Hats, SkinRarity.Premium);
        item.SetCost(0);
        item.SetStatus(SkinStatus.Selected);
        PlayerPrefs.AppendItem("rewards", item.entity.name);
        PlayerPrefs.SetItem("SelectedHat", item.entity.name);

        this.winIndicesIndex++;
        PlayerPrefs.SetItem("winIndex", this.winIndicesIndex);

        this.app.fire(Events.OnSkinSelected, {
            key: item.entity.name,
            skinType: SkinType.Hats
        });

        if (this.IsPremiumRewardAvailable()) {
            this.levelItterator++;
            APIMediator.setStorageItem("levelItterator", this.levelItterator);
        } else {
            Debug.log("No premium rewards available.");
        }
    }
};

ChestRoomManager.prototype.OnLevelLoaded = function (levelInfo) {
    this.bestPrizeFound = false;

    //premium skin index
    this.levelItterator = this.GetLevelItterator();

    //number of keys that player needs to spend to get best prize
    this.currentWinIndex = this.winIndicesIndex < 1 ? Settings.chestRoomSettings.firstIterationWinIndex
        : Settings.chestRoomSettings.winIndices[this.winIndicesIndex % Settings.chestRoomSettings.winIndices.length];

    //index of the best prize for chest room
    this.currentPremiumRewardIndex = this.skinIndices.premium[this.levelItterator];

    // console.log("Level Info", levelInfo, "PremiumIndex: ", this.currentPremiumRewardIndex, "WinIndex: ", this.currentWinIndex);

    this.UpdateRewardProgress();

    //for debug only
    // this.UpdateKeysBalance(1);
};

ChestRoomManager.prototype.ResetRewardProgress = function() {
    this.currentRewardProgress = 0;
};

ChestRoomManager.prototype.UpdateRewardProgress = function () {
    //index of the common bundle that will change once progress reaches 100
    var progress = Math.ceil(this.currentRewardProgress);
    Debug.log("ChestRoomManager ---> OnLevelLoaded ---> Progress ", progress);
    if (progress >= 100) {
        this.currentRewardProgress = 0;
        var item = ChestRoomManager.GetCurrentProgressPrize();

        if(!item) return;

        /***** */
        PlayerPrefs.AppendItem("rewards", item.entity.name);
        item.SetStatus(SkinStatus.Unlocked);
        this.app.fire(Events.OnSkinSelected, {
            key: item.entity.name,
            skinType: SkinType.Hats
        });

        this.app.fire(Events.OnKeepLooksGoodOffer, {
            key: item.entity.name,
            skinType: SkinType.Hats
        });

        PlayerPrefs.SetItem("SelectedHat", item.entity.name);

        this.app.fire('shop:scrollToHat', item);
        /******* */

        // item.SetCost(0);
        // if (item.IsUnlocked()) {
        //     item.SetStatus(SkinStatus.Selected);
        //     PlayerPrefs.SetItem("SelectedHat", item.entity.name);
        // }
        // else if (item.IsLocked()) {
        //     item.SetStatus(SkinStatus.Available);
        //     console.error('ITEM was locked ', item)
        // }

        // PlayerPrefs.AppendItem("rewards", item.entity.name);

        if (this.IsProgressRewardAvailable()) {
            this.currentProgressRewardIndex++;
            PlayerPrefs.SetItem("progressRewardIndex", this.currentProgressRewardIndex);
        }
        else
            Debug.log("No progress rewards available.");
    }
};

ChestRoomManager.prototype.GetChestReward = function () {
    var reward = null;
    var bestPrize = false;
    if (this.keys > 0) {
        if (this.currentWinIndex > 0) {
            this.currentWinIndex--;

            bestPrize = this.currentWinIndex <= 0;

            if (bestPrize)
                this.bestPrizeFound = bestPrize;
        }

        this.UpdateKeysBalance(-1);
        reward = {
            value: this.GetRandomGemsReward(),
            type: bestPrize ? 2 : 0,
            icon: bestPrize ? this.GetCurrentBestPrizeSkin() : null,
            isBestPrize: bestPrize,
            winIndices: this.currentWinIndex,
            keys: this.keys,
        };
    }

    return reward;
};

ChestRoomManager.prototype.OnFightSequenceCompleted = function () {
    if (LevelInfo.level <= 1)
        return;

    var progress = parseFloat(APIMediator.getStorageItem("rewardProgress"));
    if (progress === null || progress < 0 || isNaN(progress)) {
        progress = 0;
        APIMediator.setStorageItem("rewardProgress", 0);
    }

    progress += 33.33;
    progress = Math.ceil(progress);

    Debug.log("Load Reward Progress ---> ", progress);
    this.currentRewardProgress = progress;

    if (this.currentRewardProgress > 100)
        this.currentRewardProgress = 100;
};

ChestRoomManager.prototype.UpdateKeysBalance = function (value) {
    this.keys += value;
    this.keys = pc.math.clamp(this.keys, 0, Settings.chestRoomSettings.keysForOpenRoom);
};

ChestRoomManager.prototype.OnCollectablePicked = function (data) {
    if (data.type === CollectableType.Key) {
        if (this.keys + 1 <= 3) {
            this.UpdateKeysBalance(1);
        }
    }
};

// update code called every frame
ChestRoomManager.prototype.update = function (dt) {
    // var keySpace = this.app.keyboard.wasPressed(pc.KEY_SPACE);
    // var keyDown = this.app.keyboard.wasPressed(pc.KEY_K);
    // // var clearAll = this.app.keyboard.wasPressed(pc.KEY_U);
    // var backSpace = this.app.keyboard.wasPressed(pc.KEY_BACKSPACE);


    // if (keySpace) {
    //     var item = ChestRoomManager.GetCurrentProgressPrize();
    //     item.SetCost(0);
    //     if (item.IsUnlocked()) {
    //         item.SetStatus(SkinStatus.Selected);
    //         PlayerPrefs.SetItem("SelectedHat", item.entity.name);
    //     }
    //     else if (item.IsLocked())
    //         item.SetStatus(SkinStatus.Available);

    //     if (this.IsProgressRewardAvailable()) {
    //         this.currentProgressRewardIndex++;
    //         PlayerPrefs.SetItem("progressRewardIndex", this.currentProgressRewardIndex);
    //     }
    // }

    // if (this.app.keyboard.wasPressed(pc.KEY_O)) {
    //     var reward = ChestRoomManager.GetCommonPendulumUnlockSkin();
    //     // console.log("Pendulum Reward: ", reward);
    //     PlayerPrefs.SetItem("pendulumCounter", this.pendulumCounter);
    // }
    // if (backSpace) {
    //     APIMediator.getStorageObject().clear();
    //     this.currentRewardProgress = 0;
    //     APIMediator.setStorageItem("rewardProgress", 0);
    //     APIMediator.setStorageItem("levelItterator", 0);
    // }

    // if (keyDown) {
    //     for (let i = 0; i < 3; i++) {
    //         var data = {
    //             color: null,
    //             type: CollectableType.Key,
    //             pos: null,
    //             isValidColor: null,
    //         };
    //         this.app.fire(Events.OnCollectablePicked, data);
    //     }
    //     this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
    // }
};

// attachmentsHandler.js
var AttachmentsHandler = pc.createScript('attachmentsHandler');
AttachmentsHandler.attributes.add('head', { type: 'entity' });
AttachmentsHandler.attributes.add('crownParent', { type: 'entity' });
AttachmentsHandler.attributes.add('feet', { type: 'entity', array: true });

// initialize code called once per entity
AttachmentsHandler.prototype.initialize = function () {
    this.footGear = [];
    this.reward = null;
    this.headGear = null;
    this.rewardData = null;
    this.kickName = "";
    AttachmentsHandler = this;
    this.app.on(Events.OnSkinSelected, this.OnSkinSelected, this);
    this.app.on(Events.OnSkinUnselected, this.OnSkinUnselected, this);
    this.app.on(Events.OnLevelCompleted, this.OnLevelCompleted, this);
    this.app.on(Events.OnCollectablePicked, this.OnCollectablePicked, this);
    this.app.on(Events.OnLoseLooksGoodOffer, this.OnLoseLooksGoodOffer, this);
    this.app.on(Events.OnKeepLooksGoodOffer, this.OnKeepLooksGoodOffer, this);
    this.app.on(Events.OnLevelLoaded, this.OnStartGame, this);
};

AttachmentsHandler.prototype.OnStartGame = function () {
    var self = this;
    var hat = PlayerPrefs.GetItem("SelectedHat", "");
    var shoes = PlayerPrefs.GetItem("SelectedShoes", "");
    this.kickName = PlayerPrefs.GetItem("SelectedKick", DataManager.Instance.defaultKick);

    // console.log("Hats: ", hat, " Shoes: ", shoes, "Kick: ", this.kickName);

    if (this.footGear.length > 0) {
        for (let i = 0; i < this.footGear.length; i++) {
            this.footGear[i].enabled = true;
        }
    } else {
        if (shoes !== "") {
            self.OnSkinSelected({
                key: shoes,
                skinType: SkinType.Shoes,
            });
        }
    }

    if (this.headGear)
        this.headGear.enabled = true;
    else {
        if (hat !== "") {
            self.OnSkinSelected({
                key: hat,
                skinType: SkinType.Hats,
            });
        }
    }

    this.handleKickSelection({
        key: this.kickName,
        skinType: SkinType.Kicks,
    });
};

AttachmentsHandler.prototype.postInitialize = function () {

    // setTimeout(function () {
    //     var hat = PlayerPrefs.GetItem("SelectedHat", "");
    //     var shoes = PlayerPrefs.GetItem("SelectedShoes", "");
    //     console.log("Hats: ", hat, " Shoes: ", shoes);
    //     if (hat !== "") {
    //         self.OnSkinSelected({
    //             key: hat,
    //             skinType: SkinType.Hats,
    //         });
    //     }

    //     if (shoes !== "") {
    //         self.OnSkinSelected({
    //             key: shoes,
    //             skinType: SkinType.Shoes,
    //         });
    //     }
    // }, 1000, this);
};

AttachmentsHandler.prototype.OnLoseLooksGoodOffer = function () {
    this.reset();
};
AttachmentsHandler.prototype.OnKeepLooksGoodOffer = function () {
    // console.log(this.rewardData);
    this.keep();
};

AttachmentsHandler.prototype.OnLevelCompleted = function () {
    this.rewardData = null;
    this.skinPickup = false;

    for (let i = 0; i < this.footGear.length; i++) {
        this.footGear[i].enabled = false;
    }

    if (this.headGear)
        this.headGear.enabled = false;
};

AttachmentsHandler.prototype.OnCollectablePicked = function (data) {
    // console.log(data);
    if (data.skinType === SkinType.Shoes) {
        this.skinPickup = true;
        this.handleFootGear(data);
    }
};

AttachmentsHandler.prototype.OnSkinSelected = function (data) {
    if (data.skinType === SkinType.Hats) {
        this.handleHeadGear(data);
    }

    if (data.skinType === SkinType.Shoes) {
        this.handleFootGear(data);
    }

    if (data.skinType === SkinType.Kicks) {
        this.handleKickSelection(data);
    }
};

AttachmentsHandler.prototype.OnSkinUnselected = function (data) {
    if (data.skinType === SkinType.Hats) {
        if (this.headGear)
            this.headGear.destroy();
    }

    if (data.skinType === SkinType.Shoes) {
        for (let i = 0; i < this.footGear.length; i++) {
            this.footGear[i].destroy();
        }
    }

    if (data.skinType === SkinType.Kicks) {
        // this.handleKickSelection(data);
    }

    this.unkeep();
};

AttachmentsHandler.prototype.handleKickSelection = function (data) {
    var reward = ChestRoomManager.GetSkinReward(data);
    if (reward) {
        this.kickName = reward.entity.name;
        this.reward = reward;
    }
};

AttachmentsHandler.prototype.handleHeadGear = function (data) {
    var reward = ChestRoomManager.GetSkinReward(data);
    var rewardData = reward.data;
    var headGear = reward.entity.clone();

    if (this.headGear)
        this.headGear.destroy();

    this.head.addChild(headGear);

    headGear.setLocalScale(1, 1, 1);
    headGear.setLocalPosition(0, 0, 0);
    headGear.setLocalEulerAngles(0, 0, 0);

    headGear.enabled = true;
    this.headGear = headGear;
    this.rewardData = rewardData;
    this.crownParent.enabled = headGear == null;

    this.reward = reward;
};

AttachmentsHandler.prototype.handleFootGear = function (data) {
    var reward = ChestRoomManager.GetSkinReward(data);
    var rewardData = reward.data;
    this.reward = reward;

    for (let i = 0; i < this.footGear.length; i++) {
        this.footGear[i].destroy();
    }

    for (let i = 0; i < this.feet.length; i++) {
        var footGear = reward.entity.clone();
        this.feet[i].addChild(footGear);

        footGear.setLocalScale(1, 1, 1);
        footGear.setLocalPosition(0, 0, 0);
        footGear.setLocalEulerAngles(0, 0, 0);

        footGear.enabled = true;
        this.rewardData = rewardData;
        this.footGear.push(footGear);
    }
};

AttachmentsHandler.prototype.keep = function (data) {
    var item = this.reward;
    item.SetCost(0);
    item.SetStatus(SkinStatus.Selected);
    if (item.data.type === SkinType.Hats) {
        PlayerPrefs.SetItem("SelectedHat", item.entity.name);
    } else if (item.data.type === SkinType.Shoes)
        PlayerPrefs.SetItem("SelectedShoes", item.entity.name);
    else if (item.data.type === SkinType.Kicks)
        PlayerPrefs.SetItem("SelectedKick", item.entity.name);
};

AttachmentsHandler.prototype.unkeep = function () {
    var item = this.reward;
    if (item && item.entity.name !== DataManager.Instance.defaultKick)
        item.SetStatus(SkinStatus.Unlocked);
    if (item.data.type === SkinType.Hats) {
        PlayerPrefs.SetItem("SelectedHat", "");
    } else if (item.data.type === SkinType.Shoes)
        PlayerPrefs.SetItem("SelectedShoes", "");
    else if (item.data.type === SkinType.Kicks)
        PlayerPrefs.SetItem("SelectedKick", DataManager.Instance.defaultKick);
};

AttachmentsHandler.prototype.reset = function () {
    for (let i = 0; i < this.footGear.length; i++) {
        this.footGear[i].destroy();
    }

    if (this.headGear)
        this.headGear.destroy();
};

 // update code called every frame

// swap method called for script hotreloading
// inherit your script state here
// AttachmentsHandler.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/usermanual/scripting/

// BonusMultiplierView.js
var BonusMultiplierView = pc.createScript('bonusMultiplierView');

BonusMultiplierView.attributes.add('multiplierTxt', { type: 'entity', title: 'Multiplier Text' });
BonusMultiplierView.attributes.add('timeoutBar', { type: 'entity', title: 'Timeout Bar' });
BonusMultiplierView.attributes.add('eventKey', { type: 'string', default: 'FightView:MultiplierTimerOver' });
BonusMultiplierView.attributes.add('type', {
    type: 'number', enum: [
        { FightView: 0 },
        { BonusView: 1 },
    ], default: 0
});

BonusMultiplierView.prototype.initialize = function () {
    this.timeoutTimer = 0;
    this.totalTimer = 1;

    this.entity.on('SetMultiplier', this.setMultiplier, this);
    this.entity.on('SetTimeOut', this.setTimeOut, this);

    this.on('destroy', this.onDestroy, this);
};

BonusMultiplierView.prototype.update = function (dt) {
    switch (this.type) {
        case 0:
            this.updateTimeOut(dt);
        break;
    }
};

BonusMultiplierView.prototype.onDestroy = function () {
    this.off('destroy', this.onDestroy, this);

    this.entity.off('SetMultiplier', this.setMultiplier, this);
    this.entity.off('SetTimeOut', this.setTimeOut, this);
};

BonusMultiplierView.prototype.setMultiplier = function (val) {
    DataManager.Instance.currentRewardMultiplier = val;
    this.multiplierTxt.element.text = `X${val.toFixed(1)}`;
};

BonusMultiplierView.prototype.setTimeOut = function () {
    this.timeoutBar.setLocalScale(1, 1, 1);
    switch (this.type) {
        case 0:
            this.timeoutTimer = Settings.biggBossFighting.finishHimDuration;
            this.totalTimer = Settings.biggBossFighting.finishHimDuration;
            break;
        case 1:
            this.timeoutTimer = Settings.biggBossFighting.finishHimDuration;
            this.totalTimer = Settings.biggBossFighting.finishHimDuration;
            break;
    }
};

BonusMultiplierView.prototype.updateTimeOut = function (dt) {

    if (this.timeoutTimer < 0) return;

    this.timeoutTimer -= dt;

    let scale = this.timeoutBar.getLocalScale();
    scale.x = this.timeoutTimer / this.totalTimer;
    this.timeoutBar.setLocalScale(scale.x, scale.y, scale.z);

    if (this.timeoutTimer < 0) {
        this.app.fire(this.eventKey);
    }
};


// collection.js
var Collection = pc.createScript('collection');

Collection.attributes.add('rarity', {
    type: 'number', enum: [
        { Common: 0 },
        { Premium: 1 }]
});

Collection.attributes.add('purchaseType', {
    type: 'number', enum: [
        { Gems: 0 },
        { Rewarded: 1 }]
});
Collection.attributes.add('rewards', { type: 'entity', array: true });

// initialize code called once per entity
Collection.prototype.initialize = function () {

};

// update code called every frame
Collection.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ChestRoomCollection.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// DodgeGuideView.js
var DodgeGuideView = pc.createScript('dodgeGuideView');

DodgeGuideView.attributes.add('fadeSpeed', { type: 'number', title: 'Fade Speed' });
DodgeGuideView.attributes.add('opacityBounds', { type: 'vec2', title: 'Opacity Bounds' });

DodgeGuideView.attributes.add('handGuide', { type: 'entity', title: 'Hand Guide' });
DodgeGuideView.attributes.add('arrowLeft', { type: 'entity', title: 'Arrow Left' });
DodgeGuideView.attributes.add('arrowRight', { type: 'entity', title: 'Arrow Right' });

// initialize code called once per entity
DodgeGuideView.prototype.initialize = function () {

    this.begin = false;

    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);
    this.on('destroy', this.onDestroy, this);

    this.entity.on('EnableOneSwipe', this.enableOneSwipe, this);
};

DodgeGuideView.prototype.postInitialize = function () {
    this.onEnable();
};

DodgeGuideView.prototype.onEnable = function () {
    this.time = 0;
    this.begin = true;
    if (LevelInfo.isBigBossLevel)
        this.enableOneSwipe(1);
    else
        this.enableOneSwipe(0);
};

DodgeGuideView.prototype.onDisable = function () {
    this.begin = false;
};

DodgeGuideView.prototype.onDestroy = function () {
    this.off('enable', this.onEnable, this);
    this.off('disable', this.onDisable, this);
    this.off('destroy', this.onDestroy, this);
};

DodgeGuideView.prototype.update = function (dt) {
    this.updateArrowsBlink(dt);
};

DodgeGuideView.prototype.updateArrowsBlink = function (dt) {
    if (!this.begin) return;

    this.time += dt * this.fadeSpeed;
    let sinTime = (Math.sin(this.time) + 1) / 2;
    let alphaLeft = pc.math.lerp(this.opacityBounds.y, this.opacityBounds.x, sinTime);
    let alphaRight = pc.math.lerp(this.opacityBounds.y, this.opacityBounds.x, 1 - sinTime);

    this.arrowLeft.element.opacity = alphaLeft;
    this.arrowRight.element.opacity = alphaRight;
    // this.opacityLerp = pc.math.clamp(this.opacityLerp, this.opacityBounds.x, this.opacityBounds.y);

};

// Dir = 0, means enable both
// Dir = 1, means enable right
// Dir = 2, means enable left
DodgeGuideView.prototype.enableOneSwipe = function (dir) {
    //console.warn('enableOneSwipe', dir);
    let enableLeft = false;
    let enableRight = false;
    let enableHandGuide = false;
    let from = 100, to = -100;

    switch (dir) {
        case 0:
            enableLeft = true;
            enableRight = true;
            break;
        case 2:
            enableLeft = true;
            enableHandGuide = true;
            from = -50;
            to = -250;
            break;
        case 1:
            enableRight = true;
            enableHandGuide = true;
            from = 150;
            to = 350;
            break;
    }

    this.handGuide.enabled = enableHandGuide;
    this.handGuide.fire('Set:FromPos', from);
    this.handGuide.fire('Set:ToPos', to);
    this.handGuide.fire('Set:Movement', enableLeft);

    this.arrowLeft.enabled = enableLeft;
    this.arrowRight.enabled = enableRight;
};

// BiggBossFightingSettings.js
var BiggBossFightingSettings = pc.createScript('biggBossFightingSettings');

BiggBossFightingSettings.attributes.add('levelsBetweenBigBoss', { type: 'number', title: 'Levels Between Big Boss' });
BiggBossFightingSettings.attributes.add('finishHimDelay', { type: 'number', title: 'Finish Him Delay' });
BiggBossFightingSettings.attributes.add('finishHimDuration', { type: 'number', title: 'Finish Him Duration' });

BiggBossFightingSettings.attributes.add('bossSettings', {
    title: 'Boss Settings',
    type: 'json',
    schema: [
        { name: 'bossMaxPunches', type: 'vec2', title: 'Boss Max Punches' },
        { name: 'bossScale', type: 'number', title: 'Boss Scale' },
        { name: 'bossOffsetZ', type: 'number', title: 'Boss OffsetZ' },
        { name: 'bossPunchShake', type: 'number', title: 'Boss Punch Shake' },
        { name: 'bossTiredDuration', type: 'number', title: 'Boss Tired Duration' },
        { name: 'bossSecondPunchDelay', type: 'number', title: 'Boss Second Punch Delay' },
    ],
});

BiggBossFightingSettings.attributes.add('heroSettings', {
    title: 'Hero Settings',
    type: 'json',
    schema: [
        { name: 'heroMaxPunches', type: 'number', title: 'Hero Max Punches' },
        { name: 'heroPunchShake', type: 'number', title: 'Hero Punch Shake' },
        { name: 'dodgeDistance', type: 'number', title: 'Dodge Distance' },
        { name: 'dodgeDuration', type: 'number', title: 'Dodge Duration' },
        { name: 'heroTurnDuration', type: 'number', title: 'Hero Turn Duration' },
        { name: 'heroRotationOffsetY', type: 'number', title: 'Hero Rotation OffsetY' },
        { name: 'heroMaxAttackDelay', type: 'number', title: 'Hero Max Attack Delay' },
        { name: 'heroOffsetFactor', type: 'number', title: 'Hero Offset Factor' },
    ],
});

BiggBossFightingSettings.attributes.add('damageSettings', {
    title: 'Damage Settings',
    type: 'json',
    schema: [
        { name: 'heroDamage', type: 'vec2', title: 'Hero Damage' },
        { name: 'bossDamage', type: 'vec2', title: 'Boss Damage' },
    ],
});

BiggBossFightingSettings.attributes.add('multiplierSettings', {
    title: 'Multiplier Settings',
    type: 'json',
    schema: [
        { name: 'startMultiplier', type: 'number', title: 'Start Multiplier' },
        { name: 'maxMultiplier', type: 'number', title: 'Max Multiplier' },
    ],
});

BiggBossFightingSettings.prototype.getBossPunches = function () {
    let random = pc.math.random(this.bossSettings.bossMaxPunches.x, this.bossSettings.bossMaxPunches.y);
    Debug.log("getBossPunches: ", this.bossSettings.bossMaxPunches.x, this.bossSettings.bossMaxPunches.y, random, parseInt(random));
    return parseInt(random);
};

// tutorialManager.js
var TutorialManager = pc.createScript('tutorialManager');

TutorialManager.attributes.add('level01FTUE', { type: 'entity', array: true });
TutorialManager.attributes.add('level02FTUE', { type: 'entity', array: true });
TutorialManager.attributes.add('toolTips', { type: 'entity', array: true });

TutorialManager.attributes.add('multiplierHandAnim', { type: 'entity' });
TutorialManager.attributes.add('kickHandAnim', { type: 'entity' });
TutorialManager.attributes.add('kickToolTip', { type: 'entity' });

TutorialManager.attributes.add('handAnimation', { type: 'entity' });
TutorialManager.attributes.add('keyboardAnimation', { type: 'entity' });

TutorialManager.instance = null;

TutorialManager.prototype.initialize = function () {


    if (pc.platform.mobile) {
        this.handAnimation.enabled = true;
        this.keyboardAnimation.enabled = false;
    } else {
        this.handAnimation.enabled = false;
        this.keyboardAnimation.enabled = true;
    }

    TutorialManager.instance = this;
    TutorialManager.instance.isLevelTutorial = false;
    this.isKickUpgraded = false;
    this.app.on(Events.OnLevelLoaded, this.OnLevelLoaded, this);
    this.app.on(Events.OnUpgradeKick, this.OnUpgradeKick, this);

};

TutorialManager.prototype.OnUpgradeKick = function () {

    if (!this.isKickUpgraded) {
        this.isKickUpgraded = true;
        this.multiplierHandAnim.enabled = true;
        this.kickHandAnim.enabled = true;
        this.kickToolTip.enabled = false;
    }

};

TutorialManager.prototype.OnLevelLoaded = function (info) {

    switch (info.level) {
        case 1:
            this.level_01_FTUE();
            break;
        case 2:
            this.level_02_FTUE();
            break;
        case 3:
            this.level_03_FTUE();
            break;
        default:
            this.enableAll();
    }

};

TutorialManager.prototype.enableAll = function () {

    this.setViewStatus(this.level01FTUE, true);
    this.setViewStatus(this.level02FTUE, true);
    this.setViewStatus(this.toolTips, false);
    TutorialManager.instance.isLevelTutorial = true;
};

TutorialManager.prototype.level_01_FTUE = function () {

    this.app.fire("onGameMessageShow", "Collect Stickmans!");
    this.setViewStatus(this.level02FTUE, false);
    this.setViewStatus(this.toolTips, false);
    TutorialManager.instance.isLevelTutorial = false;
};

TutorialManager.prototype.level_02_FTUE = function () {

    this.enableAll();
    this.app.fire("onGameMessageShow", "Collect only right colors!");
    this.setViewStatus(this.level02FTUE, false);
    this.setViewStatus(this.toolTips, true);
    TutorialManager.instance.isLevelTutorial = false;

};

TutorialManager.prototype.level_03_FTUE = function () {

    this.enableAll();
    this.setViewStatus(this.level02FTUE, false);
    this.setViewStatus(this.toolTips, false);
    TutorialManager.instance.isLevelTutorial = false;

};


TutorialManager.prototype.setViewStatus = function (items, status) {
    for (const element of items) {
        element.enabled = status;
    }
};

TutorialManager.prototype.update = function (dt) {

};

// BiggBossFightingManager.js
var BiggBossFightingManager = pc.createScript('biggBossFightingManager');


BiggBossFightingManager.Turn = {
    player: 0,
    boss: 1,
};

// initialize code called once per entity
BiggBossFightingManager.prototype.initialize = function () {

    BiggBossFightingManager.Instance = this;

    this.app.on(Events.OnLevelLoaded, this.onLevelLoaded, this);
    this.app.on(Events.OnFinishLineReached, this.onFinishLineReached, this);

    this.app.on('BigBoss:TiredOfPunches', this.onBigBossTiredOfPunches, this);
    this.app.on('BigBoss:TirednessEnded', this.onBigBossTirednessEnded, this);
    this.app.on('BigBoss:Beaten', this.onBigBossBeaten, this);
    this.app.on('FightView:MultiplierTimerOver', this.onBonusTimeOver, this);
    this.app.on('BigBossFighting:BossKilled', this.onBossKilled, this);
    this.app.on('BigBossFighting:OnComplete', this.onComplete, this);
    this.app.on('BigBossFighting:UpdateDodgeTutorial', this.updateDodgeTutorial, this);

    this.app.on('BigBossFighting:ManageUI', this.uiEnableHelper, this);
};

// update code called every frame
BiggBossFightingManager.prototype.update = function (dt) {

};

BiggBossFightingManager.prototype.onLevelLoaded = function (info) {
    let levelsBetweenBigBoss = Settings.biggBossFighting.levelsBetweenBigBoss;

    this.isBigBossLevel = info.isBigBossLevel;
    this.isTutorialRequired = info.level % levelsBetweenBigBoss === 0;

    this.tutorial = {
        dodgedRight: false,
        dodgedLeft: false,
    };
};

BiggBossFightingManager.prototype.onFinishLineReached = function () {
    if (!this.isBigBossLevel) return;

    // Change Menu
    this.app.fire(Events.OnChangeMenuState, MenuManager.States.BossFight);
    // this.app.fire('FightView:EnablePowerBar', false);
    this.uiEnableHelper(false, true, false);

    this.app.fire('BigBossFighting:Begin');

    // this.changeTurn(BiggBossFightingManager.turn.boss);
};

BiggBossFightingManager.prototype.onBigBossTiredOfPunches = function () {
    this.uiEnableHelper(true, false, false);
    this.app.fire('BigBossFighting:BossTired');
};

BiggBossFightingManager.prototype.onBigBossTirednessEnded = function () {
    this.uiEnableHelper(false, false, false);
    this.app.fire('BigBossFighting:BossRage');
};


BiggBossFightingManager.prototype.onBigBossBeaten = function () {
    this.uiEnableHelper(true, false, true);
    this.app.fire('BigBossFighting:BossBeaten');
    this.app.fire("showHappyTime");
};

BiggBossFightingManager.prototype.onBonusTimeOver = function () {
    this.uiEnableHelper(false, false, false);
    this.app.fire('BigBossFighting:BonusTimeOver');
};

BiggBossFightingManager.prototype.onBossKilled = function () {
    this.uiEnableHelper(false, false, false);
    this.app.fire('BigBossFighting:KillBoss');
};

BiggBossFightingManager.prototype.onComplete = async function () {
    await APIMediator.gameComplete();

    CustomCoroutine.Instance.set(() => {
        this.app.fire("sound:playSound", "LevelCompleted");
        this.app.fire('changeMenuState', MenuManager.States.Win);
    }, 1);
};

BiggBossFightingManager.prototype.uiEnableHelper = function (tapTap, dodgeGuide, bonusMul) {
    this.app.fire('FightView:EnableTapTap', tapTap);
    this.app.fire('FightView:EnableDodgeGuide', dodgeGuide);

    if (this.isTutorialRequired && dodgeGuide)
        this.dodgeGuideTutorial(true);

    this.app.fire('FightView:EnableBonusMultiplier', bonusMul);
};

BiggBossFightingManager.prototype.dodgeGuideTutorial = function () {
    if (!this.tutorial.dodgedRight)
        this.app.fire('FightView:SetDodgeGuide', 1);
    else if (!this.tutorial.dodgedLeft)
        this.app.fire('FightView:SetDodgeGuide', 2);
    else
        this.app.fire('FightView:SetDodgeGuide', 0);

};

BiggBossFightingManager.prototype.updateDodgeTutorial = function () {
    if (!this.tutorial.dodgedRight) {
        this.tutorial.dodgedRight = true;
    }
    else if (!this.tutorial.dodgedLeft) {
        this.tutorial.dodgedLeft = true;
    }
    
};

// swipeEvent.js
var SwipeEvent = pc.createScript('swipeEvent');

SwipeEvent.direction = {
    left: 0,
    right: 1,
    up: 2,
    down: 3
};

SwipeEvent.axis = {
    x: 0,
    y: 1,
    xORy: 2,
    xANDy: 3
};

SwipeEvent.attributes.add('minimumSwipeDistance', { title: 'Minimum Swipe Distance', type: 'vec2' });
SwipeEvent.attributes.add('useAxis', {
    title: 'Use Axis',
    type: 'number',
    enum: [
        { 'x': SwipeEvent.axis.x },
        { 'y': SwipeEvent.axis.y },
        { 'x || y': SwipeEvent.axis.xORy },
        { 'x && y': SwipeEvent.axis.xANDy }
    ]
});

SwipeEvent.attributes.add('eventPreFix', { type: 'string', title: 'Event Pre Fix', default: 'SwipeEvent:' });
SwipeEvent.attributes.add('eventPostFix', {
    title: 'Event Post Fix',
    type: 'json',
    schema: [
        { name: 'leftSwipe', type: 'string', title: 'Left Swipe', default: 'Left' },
        { name: 'rightSwipe', type: 'string', title: 'Right Swipe', default: 'Right' },
        { name: 'upSwipe', type: 'string', title: 'Up Swipe', default: 'Up' },
        { name: 'downSwipe', type: 'string', title: 'Down Swipe', default: 'Down' },
    ],
});

SwipeEvent.attributes.add('includeDir', {
    title: 'Include Direction',
    type: 'json',
    schema: [
        { name: 'horizontal', type: 'boolean', title: 'Horizontal', default: true },
        { name: 'vertical', type: 'boolean', title: 'Vertical', default: false },
    ],
});

SwipeEvent.attributes.add('args', {
    type: 'json',
    title: 'Arguments',
    schema: [
        { name: 'value', type: 'string' },
    ],
    array: true
});

SwipeEvent.attributes.add('objsActiveState', {
    type: 'json',
    title: 'Entites',
    schema: [
        { title: 'Enabled', name: 'setActive', type: 'boolean', default: true },
        { title: 'Use Input', name: 'useInput', type: 'boolean', default: true },
        { title: 'Entity', name: 'obj', type: 'entity' },
    ],
    array: true
});


// initialize code called once per entity
SwipeEvent.prototype.initialize = function () {

    this.initialized = false;

    this.onEnable();
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);
    this.on('destroy', this.onDisable, this);
};

SwipeEvent.prototype.onEnable = function () {
    if (this.initialized) return;
    this.initialized = true;
    // console.log("OnEnable: " + this.entity.name);

    this.handle = this.entity;
    this.addHandleListeners();

    this.touchId = -1;

    this.mousePos = new pc.Vec3();
    this.screen = this.getUIScreenComponent();
    this.isCaptured = false;
    this.isOnMe = false;

    this.isCaptured = false;
    this.isOnMe = false;
};

SwipeEvent.prototype.onDisable = function () {
    if (!this.initialized) return;
    this.initialized = false;
    // console.log("Destroy: " + this.entity.name);
    this.handle.element.off(pc.EVENT_MOUSEDOWN, this.onPressDown, this);
    this.app.mouse.off(pc.EVENT_MOUSEUP, this.onPressUp, this);

    if (this.app.touch) {
        this.handle.element.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchEnd, this);
    }
};

SwipeEvent.prototype.getUIScreenComponent = function () {
    return this.handle.element.screen.screen;
};

SwipeEvent.prototype.addHandleListeners = function () {

    // this.handle.element.useInput = true;
    this.handle.element.on(pc.EVENT_MOUSEDOWN, this.onPressDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onPressUp, this);
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onPressMove, this);

    if (this.app.touch) {
        // console.log("initing touches");
        this.handle.element.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchEnd, this);
    }
};

SwipeEvent.prototype.onTouchStart = function (ev) {
    var touch = ev.changedTouches[0];
    this.touchId = touch.identifier;
    this.startDrag(ev.x, ev.y);
    ev.event.stopPropagation();
};

SwipeEvent.prototype.onTouchEnd = function (ev) {
    for (var i = 0; i < ev.changedTouches.length; i++) {
        var t = ev.changedTouches[i];
        if (t.id == this.touchId) {
            ev.event.stopImmediatePropagation();
            // e.event.stopPropagation();
            this.touchId = -1;
            this.endDrag(t.x, t.y);
            return;
        }
    }
};


SwipeEvent.prototype.onPressDown = function (ev) {
    ev.event.stopImmediatePropagation();
    // ev.event.stopPropagation();

    this.startDrag(ev.x, ev.y);
};

SwipeEvent.prototype.onPressUp = function (ev) {
    ev.event.stopImmediatePropagation();
    // e.event.stopPropagation();

    // ev.event.stopImmediatePropagation();
    this.endDrag(ev.x, ev.y);
};

SwipeEvent.prototype.startDrag = function (x, y) {
    this.isOnMe = true;
    this.setMouseXY(x, y);
};

SwipeEvent.prototype.endDrag = function (x, y) {

    let xMag = Math.abs(x - this.mousePos.x);
    let yMag = Math.abs(y - this.mousePos.y);
    let horizontalDir = x - this.mousePos.x < 0 ? SwipeEvent.direction.left : SwipeEvent.direction.right;
    let verticalDir = y - this.mousePos.y < 0 ? SwipeEvent.direction.up : SwipeEvent.direction.down;
    // console.log("Mag: " + xMag + ", " + yMag);

    if (this.isOnMe)
        this.manageSwipe(xMag, yMag, horizontalDir, verticalDir);
    // else
    // console.log("No on me");
    // this.setMouseXY(x,y);

    this.isOnMe = false;
};
SwipeEvent.prototype.setMouseXY = function (x, y) {
    this.mousePos.x = x;
    this.mousePos.y = y;
    // // console.log("mouse: " + x + ", " + y);
};

SwipeEvent.prototype.manageSwipe = function (x, y, horizontalDir, verticalDir) {

    if (!this.entity.element.useInput) return;

    // console.log(x + "<" + this.minimumSwipeDistance.x + "&&" + y + "<" + this.minimumSwipeDistance.y);
    let isValidSwipe = false;

    if (this.useAxis === SwipeEvent.axis.x)
        isValidSwipe = this.minimumSwipeDistance.x < x;
    else if (this.useAxis === SwipeEvent.axis.y)
        isValidSwipe = this.minimumSwipeDistance.y < y;
    else if (this.useAxis === SwipeEvent.axis.xORy)
        isValidSwipe = this.minimumSwipeDistance.x < x || this.minimumSwipeDistance.y < y;
    else if (this.useAxis === SwipeEvent.axis.xANDy)
        isValidSwipe = this.minimumSwipeDistance.x < x && this.minimumSwipeDistance.y < y;

    if (isValidSwipe) {
        this.isCaptured = true;
        // console.log("capture");

        this.raiseEvent(horizontalDir, verticalDir);

        for (let i = 0; i < this.objsActiveState.length; i++) {
            this.objsActiveState[i].obj.enabled = this.objsActiveState[i].setActive;
            this.objsActiveState[i].obj.element.useInput = this.objsActiveState[i].useInput;
        }
    }
};

SwipeEvent.prototype.raiseEvent = function (horizontalDir, verticalDir) {

    let args = [];

    let eventName = this.eventPreFix;

    if (this.includeDir.horizontal) {
        if (horizontalDir === SwipeEvent.direction.left)
            eventName += this.eventPostFix.leftSwipe;
        else if (horizontalDir === SwipeEvent.direction.right)
            eventName += this.eventPostFix.rightSwipe;
    }

    if (this.includeDir.vertical) {
        if (verticalDir === SwipeEvent.direction.up)
            eventName += this.eventPostFix.upSwipe;
        else if (verticalDir === SwipeEvent.direction.down)
            eventName += this.eventPostFix.downSwipe;
    }

    for (let i = 0; i < this.args.length; i++)
        args.push(this.args[i].value);

    this.app.fire(eventName, args);
};

// swap method called for script hot-reloading
// inherit your script state here
// SwipeEvent.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// DodgePositionsBroadCaster.js
var DodgePositionsBroadCaster = pc.createScript('dodgePositionsBroadCaster');

DodgePositionsBroadCaster.attributes.add('positionRefs', { type: 'entity', title: 'Position References', array: true });

DodgePositionsBroadCaster.prototype.initialize = function () {
    this.app.on(Events.OnFinishLineStarted, this.onFinishLineStarted, this);
};

DodgePositionsBroadCaster.prototype.onFinishLineStarted = function () {
    let positions = [];
    for (let i = 0; i < this.positionRefs.length; i++)
        positions.push(this.positionRefs[i].getPosition());

    Debug.log('Positions: ', positions);
    this.app.fire('DodgePositionsBroadCaster:Positions', positions);
};

// PlayerBigBossFighting.js
class PlayerBigBossFighting {
    constructor(controller) {
        this.reset();

        this.controller = controller;
        this.animator = controller.PlayerAnimator.anim.baseLayer;
        this.rigidbody = controller.PlayerRB;
        this.app = controller.app;

        this.app.on(Events.OnPlayerDead, () => {
            this.app.fire('FightView:SetDodgeGuide', 3);
            this.canDodge = false;
        });
    }

    reset() {
        this.swipeIndex = 0;
        this.attackingDelay = 0;

        this.isFighting = false;
        this.isMyTurn = false;
        this.canAttack = false;
        this.canDodge = false;
        this.isBossBeaten = false;

        this.dodgePositions = [];
    }

    // Setters

    setMultiplier(base, increment) {
        this.multiplier = base;
        this.mulIncrement = increment;
    }

    setDodgePositions(positions) {
        this.dodgePositions = [];
        for (let i = 0; i < positions.length; i++)
            this.dodgePositions.push(positions[i].clone());
    }

    setDodgeCamera(index) {
        this.app.fire(Events.OnChangeCameraState, CameraState["Dodge" + (index + 1)], 5);//
    }

    setBossBeaten() {
        this.isBossBeaten = true;
        this.app.fire('FightView:SetMultiplier', this.multiplier);
        this.app.fire('FightView:SetTimeOut', this.setTimeOut, this);
    }

    // Getters

    getSwipeIndex(dir) {
        this.swipeIndex += dir === PlayerController.dodge.left ? -1 : 1;

        if (this.swipeIndex < 0)
            this.swipeIndex = 3;
        else if (this.swipeIndex > 3)
            this.swipeIndex = 0;

        // this.swipeIndex %= 4;
        return this.swipeIndex;
    }

    getAnimDuration(name) {
        return this.animator._controller._states[name].timelineDuration;
    }

    // Methods

    playerTurnToAttack(isMyTurn) {
        this.isMyTurn = isMyTurn;
        this.canAttack = false;
        this.attackingDelay = 0.2;
    }

    attackBigBoss(damage) {
        // console.log('attackBigBoss: ', this.isMyTurn, this.canAttack);
        if (!this.isMyTurn || !this.canAttack) return;

        this.canAttack = false;
        this.attackingDelay = Settings.biggBossFighting.heroSettings.heroMaxAttackDelay;

        this.controller.ProcessPunch(undefined, 2);
        if (this.isBossBeaten) {
            this.multiplier += this.mulIncrement;
            this.app.fire('FightView:SetMultiplier', this.multiplier);
        }
        
        CustomCoroutine.Instance.set(() => {
            this.app.fire('Player:PlayPunchVfx');
            this.app.fire(Events.ShakeCamera, 0.4, 0.04, 0.1);
            if (!this.isBossBeaten)
                this.app.fire('PlayerBigBossFighting:HitBigBoss', damage);
        }, 0.15);

    }

    manageBigBossFighting(dt) {
        if (this.attackingDelay <= 0) return;

        this.attackingDelay -= dt;
        if (this.attackingDelay <= 0) {
            this.canAttack = true;
        }
    }

    onBigBossFightStarted() {
        this.isFighting = true;
        this.swipeIndex = 0;
        this.canDodge = true;

        this.playerTurnToAttack(false);
        this.setDodgeCamera(0);
        this.controller.PlayAnim('Fight Idle');
    }

    onSwipe(dir) {
        if (!this.canDodge) return;

        this.app.fire("sound:playSound", "DodgeJump");

        this.canDodge = false;
        let swipeIndex = this.getSwipeIndex(dir);

        let pos = this.rigidbody.getPosition();
        let targetPos = this.dodgePositions[swipeIndex];

        let angle = this.rigidbody.getLocalEulerAngles();
        TweenWrapper.TweenNumber(0, 1, 1, (obj) => {
            let x = pc.math.lerp(pos.x, targetPos.x, obj.number);
            let z = pc.math.lerp(pos.z, targetPos.z, obj.number);
            this.rigidbody.setPosition(x, pos.y, z);

            let y = pc.math.lerpAngle(angle.y, swipeIndex * 90, obj.number);
            this.rigidbody.setLocalEulerAngles(angle.x, y, angle.z);
        }, () => { this.canDodge = true; this.controller.PlayAnim('Fight Idle'); });

        this.setDodgeCamera(swipeIndex);
        this.controller.ProcessDodge(dir);
    }

    onBigBossRage() {
        this.controller.PlayAnim('Retreat');
        let animDuration = this.controller.getAnimDuration('Retreat');
        CustomCoroutine.Instance.set(() => { this.controller.PlayAnim('Fight Idle'); }, animDuration);
    }
}


// reward.js
var Reward = pc.createScript('reward');
Reward.attributes.add('data', {
    type: 'json',
    schema: [
        {
            name: 'defaultStatus',
            type: 'string',
            enum: [
                { Selected: "Selected" },
                { Available: "Available" },
                { Locked: "Locked" },
                { Unlocked: "Unlocked" },
            ]
        },
        {
            name: 'type',
            type: 'number',
            enum:
                [
                    { Hats: 0 },
                    { Shoes: 1 },
                    { Kicks: 2 },
                ]
        }, {
            name: 'icon',
            type: 'asset',
            assetType: 'sprite',
        }, {
            name: 'animation',
            type: 'asset',
            assetType: 'animation',
        }, {
            name: 'cost',
            type: 'number',
            default: 0,
        }, {
            name: 'costMax',
            type: 'number',
            default: 0,
        }, {
            name: 'gemPrice',
            type: 'number',
            default: 0,
        }]
});

Reward.prototype.SetStatus = function (status) {
    PlayerPrefs.SetItem(this.entity.name, status);
};

Reward.prototype.GetCost = function () {
    return PlayerPrefs.GetInt(this.entity.name + "_Cost", this.data.costMax);
};

Reward.prototype.SetCost = function (cost) {
    PlayerPrefs.SetItem(this.entity.name + "_Cost", cost);
};

Reward.prototype.GetGemPrice = function () {
    return this.data.gemPrice;
};

Reward.prototype.GetMaxCost = function () {
    return this.data.costMax;
};

Reward.prototype.GetStatus = function () {
    return PlayerPrefs.GetString(this.entity.name, this.data.defaultStatus);
};

Reward.prototype.IsAvailable = function () {
    return this.GetStatus() == SkinStatus.Available;
};

Reward.prototype.IsLocked = function () {
    return this.GetStatus() == SkinStatus.Locked;
};

Reward.prototype.IsUnlocked = function () {
    return this.GetStatus() == SkinStatus.Unlocked;
};

Reward.prototype.IsSelected = function () {
    return this.GetStatus() == SkinStatus.Selected;
};


// WaterController.js
var WaterController = pc.createScript('waterController');

WaterController.attributes.add('waterRef', { type: 'entity', title: 'Water' });

WaterController.attributes.add('purpleWater', {
    title: 'Bonus Level Settings',
    type: 'json',
    schema: [
        { name: 'tiling', type: 'vec2', title: 'Tiling' },
        { name: 'color', type: 'rgb', title: 'Color' },
    ],
});

WaterController.attributes.add('lava', {
    title: 'Big Boss Settings',
    type: 'json',
    schema: [
        { name: 'tiling', type: 'vec2', title: 'Tiling' },
        { name: 'speed', type: 'number', title: 'Speed' },
        { name: 'color', type: 'rgb', title: 'Color' },
        { name: 'lightColor', type: 'rgb', title: 'Light Color' },
    ],
});

WaterController.attributes.add('colorSettings', {
    title: 'Color Settings',
    type: 'json',
    schema: [
        { name: 'maxLevel', type: 'number', title: 'Max Level', description: 'Maximum Level till this color settings will be applied.' },
        { name: 'keepDefault', type: 'boolean', title: 'Default Palette' },
        { name: 'tiling', type: 'vec2', title: 'Tiling' },
        { name: 'color', type: 'rgb', title: 'Color' },
    ],
    array: true
});

// initialize code called once per entity
WaterController.prototype.initialize = function () {
    this.lavaLerp = 0;
    this.lavaDir = 1;
    this.color = this.waterRef.render.meshInstances[0].material.diffuse;
    this.app.on(Events.OnLevelLoaded, this.onLevelLoaded, this);
};

// update code called every frame
WaterController.prototype.update = function (dt) {
    if (this.isBigBossLevel) {
        this.lavaLerp += this.lavaDir * this.lava.speed * dt;
        this.lavaLerp = pc.math.clamp(this.lavaLerp, 0, 1);
        // console.log('lavaLerp: ', this.lavaLerp);
        this.color.lerp(this.lava.lightColor, this.lava.color, this.lavaLerp);

        if (this.lavaLerp === 1 || this.lavaLerp === 0)
            this.lavaDir *= -1;

        this.updateColor(this.color);
    }
};

WaterController.prototype.onLevelLoaded = function (info) {
    this.isBigBossLevel = info.isBigBossLevel;
    let color, tiling;

    if (info.isBigBossLevel) {
        color = this.lava.color;
        tiling = this.lava.tiling;
    }
    else if (info.isBonusLevel) {
        color = this.purpleWater.color;
        tiling = this.purpleWater.tiling;
    }
    else {
        let result = this.getLevelColors(info.level);
        color = result.color;
        tiling = result.tiling;
    }

    Debug.log('tiling: ', tiling);

    this.waterRef.render.meshInstances[0].material.normalMapTiling = tiling;
    this.updateColor(color);
};

WaterController.prototype.updateColor = function (color) {
    this.waterRef.render.meshInstances[0].material.diffuse.set(color.r, color.g, color.b);
    this.waterRef.render.meshInstances[0].material.update();
};

WaterController.prototype.getLevelColors = function (level) {
    let result;

    for (let i = 0; i < this.colorSettings.length; i++) {
        if (!this.colorSettings[i].keepDefault && this.colorSettings[i].maxLevel >= (level % 20)) {
            result = {
                tiling: this.colorSettings[i].tiling,
                color: this.colorSettings[i].color,
            };
            break;
        }
    }

    return result || { tiling: this.colorSettings[0].tiling, color: this.colorSettings[0].color };
};

// swap method called for script hot-reloading
// inherit your script state here
// WaterController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// chestRoomUiViewEventListener.js
var ChestRoomUiviewEventListener = pc.createScript('chestRoomUiviewEventListener');
ChestRoomUiviewEventListener.attributes.add('bestPrize', { type: 'entity' });
ChestRoomUiviewEventListener.attributes.add('chests', { type: 'entity', array: true });
ChestRoomUiviewEventListener.attributes.add('keys', { type: 'entity', array: true });

ChestRoomUiviewEventListener.attributes.add('vfxTestBtn', { type: 'entity' });
ChestRoomUiviewEventListener.attributes.add('keysParent', { type: 'entity' });
ChestRoomUiviewEventListener.attributes.add('buttonsParent', { type: 'entity' });

ChestRoomUiviewEventListener.attributes.add('watchVideoButton', { type: 'entity' });
ChestRoomUiviewEventListener.attributes.add('noThanksButton', { type: 'entity' });

ChestRoomUiviewEventListener.instance = null;

// initialize code called once per entity
ChestRoomUiviewEventListener.prototype.initialize = function () {
    ChestRoomView = this;
    ChestRoomUiviewEventListener.instance = this;
    this.vfxIndex = 0;
    this.loadingScreen = this.app.root.findByName("LoadScreen");

    this.onEnable();
    this.on("enable", this.onEnable, this);

    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.watchVideoButton.button.on("click", this.onWatchVideoPressUp, this);
    this.noThanksButton.button.on("click", this.onNoThanksPressUp, this);
    this.vfxTestBtn.button.on('click', () => {
        this.chests[this.vfxIndex].fire('PlayVfx');
        this.vfxIndex++;

        if (this.vfxIndex >= this.chests.length)
            this.vfxIndex = 0;

    });
    this.clicked = false;
};

ChestRoomUiviewEventListener.prototype.onWatchVideoPressUp = async function () {
    this.app.fire("sound:playSound", "BtnSound");
    if (ConfigManager.instance.environmentType !== ConfigManager.EnvTypes.None) {
        const resumeGiveRewardCallback = ChestRoomUiviewEventListener.instance.resumeGiveReward.bind(this);
        const pauseCallback = ChestRoomUiviewEventListener.instance.pauseGame.bind(this);
        const resumeCallback = ChestRoomUiviewEventListener.instance.resumeNoReward.bind(this);
        const noADAvailableCallack = ChestRoomUiviewEventListener.instance.adNotAvailable.bind(this);
        this.app.fire("showRewardedAD", resumeGiveRewardCallback, pauseCallback, resumeCallback, noADAvailableCallack, 'button:chest:unlock');
    } else {
        this.OnRewardSuccess(); // For Testing
    }
};

ChestRoomUiviewEventListener.prototype.OnRewardSuccess = function () {
    //TODO: Rewarded ad success
    if (ChestRoomManager.keys < Settings.chestRoomSettings.keysFromRewardedVideo) {
        this.app.fire(Events.OnKeysRefill);
        this.UpdateKeys(ChestRoomManager.keys);

        this.watchVideoButton.enabled = false;
        this.noThanksButton.enabled = false;
    }
};

ChestRoomUiviewEventListener.prototype.OnRewardFailed = function () {
    this.onNoThanksPressUp();
    this.noThanksButton.enabled = false;
    this.watchVideoButton.enabled = false;
};

ChestRoomUiviewEventListener.prototype.UpdateKeys = function (remainder) {
    this.keysParent.enabled = true;
    for (let i = 0; i < this.keys.length; i++) {
        this.keys[i].enabled = i < remainder;
    }
};

ChestRoomUiviewEventListener.prototype.AllChestsOpened = function () {
    var value = this.chests.every(chest => chest.script.chestUibutton.clicked === true);
    Debug.log("AllChestsOpened: ", value);
    return value;
};

ChestRoomUiviewEventListener.prototype.onNoThanksPressUp = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.exitChestroom();
};

ChestRoomUiviewEventListener.prototype.exitChestroom = function () {
    if (!this.bestPrizeFound) {
        this.loadingScreen.enabled = true;
        this.app.fire(Events.OnLevelCompleted);
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.Home);

        setTimeout(() => {
            this.loadingScreen.enabled = false;
        }, 1500);
    } else {
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.SkinUnlockedView);
    }
};

ChestRoomUiviewEventListener.prototype.postInitialize = function () {
    for (let i = 0; i < this.chests.length; i++) {
        this.chests[i].name = "Chest_" + i;
    }
};

ChestRoomUiviewEventListener.prototype.onEnable = function () {
    this.bestPrizeFound = false;
    this.lastChestClicked = null;
    this.bestPrize.element.sprite = ChestRoomManager.GetCurrentBestPrizeSkin();
    this.UpdateKeys(ChestRoomManager.keys);
    this.watchVideoButton.enabled = false;
    this.noThanksButton.enabled = false;

    for (let i = 0; i < this.chests.length; i++) {
        this.chests[i].script.chestUibutton.reset();
    }

    Debug.log("BestPrizeFound: ", this.bestPrizeFound);
};

ChestRoomUiviewEventListener.prototype.OnChestClicked = function (chest) {

    var allChestsOpened = this.AllChestsOpened();

    if (ChestRoomManager.keys <= 0) {
        Debug.log("Keys: ", ChestRoomManager.keys, " halting further code execution.");
        return;
    }

    if (allChestsOpened) {
        Debug.log("AllChestsOpened: ", allChestsOpened, " halting further code execution.");
        return;
    }

    var data = ChestRoomManager.GetChestReward();
    // console.log(data);
    this.bestPrizeFound = data.isBestPrize;

    GemsManager.collectedGems += data.value;
    this.lastChestClicked = chest;
    chest.script.chestUibutton.UpdateChest(data);
    Debug.log("BestPrizeFound: ", this.bestPrizeFound);
    this.UpdateKeys(data.keys);

    const hasRewardedVideo = APIMediator.isRewardedAdAvailable('button:chest:unlock');

    if (hasRewardedVideo) {
        if (data.winIndices > 0 && data.keys <= 0 && !this.AllChestsOpened()) {
            this.watchVideoButton.enabled = true;
            this.noThanksButton.enabled = true;
        } else if (this.AllChestsOpened()) {
            this.UpdateKeys(0);
            this.watchVideoButton.enabled = false;
            this.noThanksButton.enabled = false;

            setTimeout(() => {
                this.onNoThanksPressUp();
            }, 1500);
        } else if (!this.AllChestsOpened() && data.keys <= 0) {
            this.watchVideoButton.enabled = true;
            this.noThanksButton.enabled = true;
        }
    } else {
        this.watchVideoButton.enabled = false;
        this.noThanksButton.enabled = false;
        setTimeout(() => {
            this.onNoThanksPressUp();
        }, 1500);
    }
};

ChestRoomUiviewEventListener.prototype.resumeGiveReward = function () {

    this.loadingAdScreen.enabled = false;
    this.OnRewardSuccess();

};

ChestRoomUiviewEventListener.prototype.pauseGame = function () {

    this.loadingAdScreen.enabled = true;

};

ChestRoomUiviewEventListener.prototype.resumeNoReward = function () {

    this.loadingAdScreen.enabled = false;
    this.app.fire("adSkippedPopup");
    this.OnRewardFailed();

};

ChestRoomUiviewEventListener.prototype.adNotAvailable = function () {

    this.loadingAdScreen.enabled = false;
    this.app.fire("noAdPopup");
    this.OnRewardFailed();

};

ChestRoomUiviewEventListener.prototype.update = function (dt) {

};


// camera-shake.js
var CameraShake = pc.createScript('cameraShake');

CameraShake.attributes.add("shakeInterval", {type: "number", default: 0.1, title: "Camera Shake Interval"});
CameraShake.attributes.add("maxShakeDistance", {type: "number", default: 0.1, title: "Max Shake Distance"});
CameraShake.attributes.add("duration", {type: "number", default: 1, title: "Duration"});

// initialize code called once per entity
CameraShake.prototype.initialize = function() {
    this.time = this.duration;
    this.timeSinceLastShake = 0;
    this.startPosition = this.entity.getPosition().clone();
    
    // Listen to the event that will trigger the camera shake
    this.app.on("camera:shake", this.onStartShake, this);

    this.on('destroy', function() {
        this.app.off("camera:shake", this.onStartShake, this);
    }, this);
};

// update code called every frame
CameraShake.prototype.update = function(dt) {
    this.time += dt;
    
    if (this.time < this.duration) {
        this.timeSinceLastShake += dt;

        if (this.timeSinceLastShake >= this.shakeInterval) {
            // Use this to reduce the maximum shake distance over the duration of the effect
            var v = 1 - pc.math.clamp(this.time / this.duration, 0, 1);

            // Find a point in a disc to offset the camera by
            // Taken from http://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly
            var t = 2 * Math.PI * pc.math.random(0, 1);
            var u = pc.math.random(0, this.maxShakeDistance) * v + pc.math.random(0, this.maxShakeDistance) * v;
            var r = u > 1 ? 2-u : u; 

            var x = r * Math.cos(t);
            var y = r * Math.sin(t);
            
            this.entity.setLocalPosition(this.startPosition.x + x, this.startPosition.y + y, this.startPosition.z);        
            this.timeSinceLastShake -= this.shakeInterval; 
        }    
    }
};

CameraShake.prototype.onStartShake = function () {
    let pos = this.entity.getPosition();
    this.startPosition.set(pos.x, pos.y, pos.z);
    this.time = 0;   
};

// chestUiButton.js
var ChestUibutton = pc.createScript('chestUibutton');
ChestUibutton.attributes.add('gemRegularPrize', { type: 'entity' });
ChestUibutton.attributes.add('gemBestPrize', { type: 'entity' });
ChestUibutton.attributes.add('skinBestPrize', { type: 'entity' });

ChestUibutton.attributes.add('gemRegularPrizeText', { type: 'entity' });
ChestUibutton.attributes.add('gemBestPrizeText', { type: 'entity' });
ChestUibutton.attributes.add('skinBestPrizeIcon', { type: 'entity' });
ChestUibutton.attributes.add('chestImg', { type: 'entity', title: 'Chest Image' });
ChestUibutton.attributes.add('openVfx', { type: 'entity', title: 'Open VFX' });

// initialize code called once per entity
ChestUibutton.prototype.initialize = function () {
    this.entity.on('PlayVfx', () => { this.openVfx.fire('Play'); });
    this.entity.element.on(pc.EVENT_MOUSEUP, this.onPressUp, this);
    this.clicked = false;

    if (this.app.touch) {
        this.entity.element.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
    }
};

ChestUibutton.prototype.onPressUp = function () {
    Debug.log('onPressUp: ', this.entity.name);
    if (this.clicked)
        return;

    var self = this.entity;
    ChestRoomView.OnChestClicked(self);
    this.app.fire("sound:playSound", "BtnSound");
};

ChestUibutton.prototype.onTouchStart = function () {
    if (this.clicked)
        return;

    var self = this.entity;
    ChestRoomView.OnChestClicked(self);
    this.app.fire("sound:playSound", "BtnSound");
};

ChestUibutton.prototype.UpdateChest = function (data) {
    // this.entity.element.enabled = false;
    this.chestImg.fire('disable');
    this.clicked = true;
    switch (data.type) {
        //regular gems
        case 0:
            this.gemBestPrize.enabled = false;
            this.skinBestPrize.enabled = false;
            this.gemRegularPrize.enabled = true;
            this.gemRegularPrizeText.element.text = data.value;
            this.openVfx.fire('Play');
            break;
        //best gems
        case 1:
            this.gemBestPrize.enabled = true;
            this.skinBestPrize.enabled = false;
            this.gemRegularPrize.enabled = false;
            this.gemRegularPrizeText.element.text = data.value;
            this.openVfx.fire('Play');
            // this.skinBestPrizeIcon.element.sprite = data.icon;
            break;
        //best prize
        case 2:
            this.gemBestPrize.enabled = false;
            this.skinBestPrize.enabled = true;
            this.gemRegularPrize.enabled = false;

            this.skinBestPrizeIcon.element.sprite = data.icon;
            this.openVfx.fire('Play');
            break;
    }
};


ChestUibutton.prototype.reset = function () {
    this.clicked = false;
    this.chestImg.enabled = true;
    this.gemBestPrize.enabled = false;
    this.skinBestPrize.enabled = false;
    this.gemRegularPrize.enabled = false;
};

ChestUibutton.prototype.update = function (dt) {

};


// vfxController.js
var VfxController = pc.createScript('vfxController');

VfxController.attributes.add('restoreEvent', { type: 'string', title: 'Restore Event' });
VfxController.attributes.add('lifeTimeRange', { type: 'vec2', title: 'Life Time Range' });
VfxController.attributes.add('spriteEntity', { type: 'entity', title: 'Sprite Entity' });
VfxController.attributes.add('rotationEntity', { type: 'entity', title: 'Rotation Entity' });
VfxController.attributes.add('scaleEntity', { type: 'entity', title: 'Scale Entity' });

VfxController.attributes.add('orientationSettings', {
    title: 'Orientation Settings',
    type: 'json',
    schema: [
        { name: 'screenSpace', type: 'boolean', title: 'Screen Space' },
        { name: 'offset', type: 'vec3', title: 'Offset'},
    ],
});

VfxController.attributes.add('colorSettings', {
    title: 'Color Settings',
    type: 'json',
    schema: [
        { name: 'useColor', type: 'boolean', title: 'Use Color' },
        { name: 'colors', type: 'rgb', title: 'Color Over Life Time', array: true },
        { name: 'startOpacity', type: 'number', title: 'Start Opcacity', default: 1 },
        { name: 'endOpacity', type: 'number', title: 'End Opcacity', default: 1 },
    ],
});

VfxController.attributes.add('sizeSettings', {
    title: 'Size Settings',
    type: 'json',
    schema: [
        { name: 'useSize', type: 'boolean', title: 'Use Size' },
        { name: 'axis', type: 'string', title: 'Axis', default: 'xyz' },
        { name: 'size', type: 'vec2', title: 'Size Over Life Time' }
    ],
});

VfxController.attributes.add('posSettings', {
    title: 'Position Settings',
    type: 'json',
    schema: [
        { name: 'resetBeforePlay', type: 'boolean', title: 'Reset Before Play' },
        { name: 'speed', type: 'vec3', title: 'Speed' },
        { name: 'obj', type: 'entity', title: 'Entity' },
    ],
});


// initialize code called once per entity
VfxController.prototype.initialize = function () {
    this.camera = this.app.root.findByTag('Main Camera')[0];
    this.on('enable', this.onEnable, this);
    this.entity.on('setSpriteRotation', this.setSpriteRotation, this);
    this.entity.on('setSpritePosition', this.setSpritePosition, this);
    this.entity.on('setScale', this.setScale, this);
};

VfxController.prototype.postInitialize = function() {
    this.onEnable();
};

VfxController.prototype.onEnable = function () {
    this.age = 0;
    this.scaleRatio = 1;
    if (this.startPos) 
        this.posSettings.obj.setLocalPosition(this.startPos.x, this.startPos.y, this.startPos.z);
    else if (this.posSettings.obj)
        this.startPos = this.posSettings.obj.getLocalPosition();

    this.lifeTime = pc.math.random(this.lifeTimeRange.x, this.lifeTimeRange.y);
    if (this.colorSettings.useColor)
        this.color = this.colorSettings.colors[0];

    if (this.sizeSettings.useSize)
        this.size = this.sizeSettings.size.x;

    if (this.posSettings.resetBeforePlay) {
        if (this.defaultPos)
            this.posSettings.obj.setLocalPosition(this.defaultPos.x, this.defaultPos.y, this.defaultPos.y);
        else {
            let pos = this.posSettings.obj.getLocalPosition();
            this.defaultPos = new pc.Vec3(pos.x, pos.y, pos.z);
        }
    }
};

// update code called every frame
VfxController.prototype.update = function (dt) {

    if (this.age >= this.lifeTime) return;
    this.age += dt;

    this.lookAtScreen();
    this.updateColor(dt);
    this.updateSize(dt);
    this.updateOpacity(dt);
    this.updatePos(dt);

    if (this.age >= this.lifeTime) 
        this.entity.enabled = false;
};

VfxController.prototype.setSpriteRotation = function(x, y, z) {
    this.rotationEntity.setLocalEulerAngles(x, y, z);
};

VfxController.prototype.setSpritePosition = function(x, y, z) {
    this.spriteEntity.parent.setLocalPosition(x, y, z);
};

VfxController.prototype.setScale = function(scale) {
    this.scaleRatio = scale;
};

VfxController.prototype.lookAtScreen = function() {
    if (!this.orientationSettings.screenSpace) return;

    let pos = this.camera.getPosition();
    pos.x += this.orientationSettings.offset.x;
    pos.y += this.orientationSettings.offset.y;
    pos.z += this.orientationSettings.offset.z;

    this.entity.lookAt(pos.x, pos.y, pos.z);
};

VfxController.prototype.updateColor = function(dt) {
    if (!this.colorSettings.useColor || !this.spriteEntity) return;

    if (this.spriteEntity.sprite)
        this.spriteEntity.sprite.color = Math.evaluateColor(this.colorSettings.colors, this.age / this.lifeTime);
    else if (this.spriteEntity.element)
        this.spriteEntity.element.color = Math.evaluateColor(this.colorSettings.colors, this.age / this.lifeTime);
};

VfxController.prototype.updateSize = function(dt) {
    if (!this.sizeSettings.useSize) return;

    let size = pc.math.lerp(this.sizeSettings.size.x, this.sizeSettings.size.y, this.age / this.lifeTime);
    size *= this.scaleRatio;
    // console.log('entity: ', this.entity.name);
    // console.log('rotationEntity: ', this.rotationEntity);
    let scale = this.scaleEntity.getLocalScale();
    let useX = this.sizeSettings.axis.includes('x');
    let useY = this.sizeSettings.axis.includes('y');
    let useZ = this.sizeSettings.axis.includes('z');

    this.scaleEntity.setLocalScale(useX ? size : scale.x, useY ? size : scale.y, useZ ? size : scale.z);
};

VfxController.prototype.updateOpacity = function (dt) {
    let a = pc.math.lerp(this.colorSettings.startOpacity, this.colorSettings.endOpacity, this.age / this.lifeTime);
    if (this.spriteEntity.sprite)
        this.spriteEntity.sprite.opacity = a;
    else if (this.spriteEntity.element)
        this.spriteEntity.element.opacity = a;
    // console.log('FAIQ A: ', this.spriteEntity.opacity);
};

VfxController.prototype.updatePos = function(dt) {
    if (!this.posSettings.obj) return;

    let pos = this.posSettings.obj.getLocalPosition();
    pos.x += dt * this.posSettings.speed.x;
    pos.y += dt * this.posSettings.speed.y;
    pos.z += dt * this.posSettings.speed.z;

    this.posSettings.obj.setLocalPosition(pos.x, pos.y, pos.z);
};

// swap method called for script hot-reloading
// inherit your script state here
// VfxController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// VFXManager.js
var Vfxmanager = pc.createScript('vfxmanager');

Vfxmanager.attributes.add('sharpLine', { type: 'entity', title: 'Sharp Line Pool'});
Vfxmanager.attributes.add('ring', { type: 'entity', title: 'Ring Pool'});

// initialize code called once per entity
Vfxmanager.prototype.initialize = function() {
    Vfxmanager.Instance = this;

    this.sharpLinePool = this.sharpLine.script.PoolController;
    this.ringPool = this.ring.script.PoolController;
};

// update code called every frame
Vfxmanager.prototype.getSharpLine = function() {
    return this.sharpLinePool.get();
};

Vfxmanager.prototype.getRing = function() {
    return this.ringPool.get();
};

// swap method called for script hot-reloading
// inherit your script state here
// Vfxmanager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// emojiManager.js
var EmojiManager = pc.createScript('emojiManager');

EmojiManager.attributes.add('emojisCorrect', { type: 'asset', array: true });
EmojiManager.attributes.add('emojisInCorrect', { type: 'asset', array: true });
EmojiManager.attributes.add('emojiImg', { type: 'entity' });

// initialize code called once per entity
EmojiManager.prototype.initialize = function () {

    this.app.on("onCorrectMobHit", this.onCorrectMobHit, this);
    this.app.on("onInCorrectMobHit", this.onInCorrectMobHit, this);
    this.isTweenRunning = false;

};

EmojiManager.prototype.isChance = function () {

    let chance = getRandomInt(0, 100);
    if (chance < 80)
        return true;
    else
        return false;

};

EmojiManager.prototype.onCorrectMobHit = function () {

    if (this.isChance()) {
        this.showEmoji(this.emojisCorrect);
    }

};

EmojiManager.prototype.onInCorrectMobHit = function () {

    if (this.isChance()) {
        this.showEmoji(this.emojisInCorrect);
    }

};

EmojiManager.prototype.showEmoji = function (emojiArr) {

    if (this.isTweenRunning)
        return;

    this.isTweenRunning = true;
    var emoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];

    this.emojiImg.element.opacity = 1;
    this.emojiImg.setLocalScale(0, 0, 0);
    this.emojiImg.element.sprite = emoji.resource;
    this.emojiImg.enabled = true;

    this.emojiImg
        .tween(this.emojiImg.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), 0.55, pc.BounceOut)
        .start()
        .onComplete( () => {
            CustomCoroutine.Instance.set(() => {
                TweenWrapper.TweenOpacity(this.emojiImg, 1, 0, 0.2, () => { this.isTweenRunning = false; this.emojiImg.enabled = false; });
            }, 0.25);
        });

};

// update code called every frame
EmojiManager.prototype.update = function (dt) {

};

// PunchVfxController.js
var PunchVfxController = pc.createScript('punchVfxController');

PunchVfxController.attributes.add('scaleRef', { type: 'entity', title: 'Scale Reference'});
PunchVfxController.attributes.add('ringVFX', { type: 'entity', title: 'Ring VFX'});
PunchVfxController.attributes.add('sharpLines', { type: 'entity', title: 'Sharp Lines', array: true});

// initialize code called once per entity
PunchVfxController.prototype.initialize = function() {
    this.entity.on('Play', this.play, this);    
};

// update code called every frame
PunchVfxController.prototype.play = function(pos) {

    this.entity.setLocalPosition(pos.x, pos.y, pos.z);

    let sharpLineCount = (parseInt(pc.math.random(0, 100)) % 2) + 2;
    let angle = pc.math.random(0, 359);
    let randomize = sharpLineCount >= 3;

    for (let i = 0; i < sharpLineCount; i++) 
        this.sharpLines[i].enabled = true;

    for (let i = 0; i < sharpLineCount; i++) {
        this.sharpLines[i].enabled = true;

        this.sharpLines[i].fire('setScale', 1 / this.scaleRef.getLocalScale().x);
        this.sharpLines[i].fire('setSpriteRotation', 0, 0, angle + i * 30 + (randomize ? (i > 1 ? 180 - 15: 0) : 0));
    }
    
    this.ringVFX.enabled = true;
    this.ringVFX.fire('setScale', 1 / this.scaleRef.getLocalScale().x);
};

// swap method called for script hot-reloading
// inherit your script state here
// PunchVfxController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// particleManager.js
var ParticleManager = pc.createScript('particleManager');

ParticleManager.attributes.add('mobHitEffect', { type: 'asset', array: true });
ParticleManager.attributes.add('painterEffect', { type: 'asset', array: true });
ParticleManager.attributes.add('playerEntity', { type: 'entity' });
ParticleManager.attributes.add('playerUpgradeEffect', { type: 'entity' });
ParticleManager.attributes.add('keyVFX', { type: 'entity' });

// initialize code called once per entity
ParticleManager.prototype.initialize = function () {

    this.app.on("onMobHit", this.onMobHit, this);
    this.app.on("onPainterHit", this.onPainterHit, this);
    this.app.on("onKeyHit", this.onKeyHit, this);
    this.app.on("onKickUp", this.onUpgradeKick, this);
    this.app.on("onMultiUpgraded", this.onUpgradeMultiplier, this);

};

ParticleManager.prototype.onUpgradeKick = function () {

    this.runUpgradeEffect();

};

ParticleManager.prototype.onKeyHit = function () {

    Debug.log("key");
    this.keyVFX.script.keyVfx.runVFX();

};

ParticleManager.prototype.onUpgradeMultiplier = function () {

    this.runUpgradeEffect();

};

ParticleManager.prototype.runUpgradeEffect = function () {

    this.playerUpgradeEffect.particlesystem.reset();
    this.playerUpgradeEffect.particlesystem.play();

};

ParticleManager.prototype.onPainterHit = function (color) {

    let hitEffect = this.painterEffect[color].resource.instantiate();
    this.playerEntity.addChild(hitEffect);
    hitEffect.setLocalPosition(0, -0.8, 0);
    hitEffect.enabled = true;
    hitEffect.particlesystem.reset();
    hitEffect.particlesystem.play();
    hitEffect.script.vfxDestroyTime.setTime(1);

};

ParticleManager.prototype.onMobHit = function (color, result) {

    // let hitEffect = this.mobHitEffect[color].resource.instantiate();
    // this.app.root.addChild(hitEffect);
    // hitEffect.setPosition(result.getPosition());
    // hitEffect.enabled = true;
    // hitEffect.particlesystem.reset();
    // hitEffect.particlesystem.play();
    // hitEffect.script.vfxDestroyTime.setTime(1);

};

// update code called every frame
ParticleManager.prototype.update = function (dt) {

    // if (this.app.keyboard.wasPressed(pc.KEY_S)) {
    //     this.onKeyHit();
    // }

};

// vfxDestroyTime.js
var VfxDestroyTime = pc.createScript('vfxDestroyTime');

// initialize code called once per entity
VfxDestroyTime.prototype.initialize = function () {

};

VfxDestroyTime.prototype.setTime = function (time) {

    CustomCoroutine.Instance.set(() => {
        this.entity.destroy();
    }, time);

};

// update code called every frame
VfxDestroyTime.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// VfxDestroyTime.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// TargetLocking.js
var TargetLocking = pc.createScript('targetLocking');

TargetLocking.attributes.add('rotationSpeed', { type: 'number', title: 'Rotation Speed' });
TargetLocking.attributes.add('appearSpeed', { type: 'number', title: 'Appear Speed' });
TargetLocking.attributes.add('arrows', { type: 'entity' });
TargetLocking.attributes.add('arrowsScale', { type: 'vec2'});
TargetLocking.attributes.add('arrowsSpeed', { type: 'number'});
TargetLocking.attributes.add('parentPos', { type: 'entity'});
TargetLocking.attributes.add('positions', { type: 'entity', array: true });

// initialize code called once per entity
TargetLocking.prototype.initialize = function() {
    this.scaleDir = 1;
    this.lerpVal = 0;
    this.targetScale = new pc.Vec3();
    this.isActive = false;

    this.on('enable', this.onEnable, this);
    this.app.on('TargetLocking:Show', this.show, this);
};

TargetLocking.prototype.onEnable = function() {
    this.isActive = false;
    this.scaleDir = 1;
    this.lerpVal = 0;
};

// update code called every frame
TargetLocking.prototype.update = function(dt) {
    if (!this.isActive) return;

    this.entity.rotateLocal(0, this.rotationSpeed, 0);

    this.lerpVal += this.scaleDir * this.arrowsSpeed * dt;
    this.lerpVal = pc.math.clamp(this.lerpVal, 0, 1);
    // console.log('lavaLerp: ', this.lavaLerp);
    let scale = pc.math.lerp(this.arrowsScale.x, this.arrowsScale.y, this.lerpVal);

    if (this.lerpVal === 1 || this.lerpVal === 0)
        this.scaleDir *= -1;

    this.arrows.setLocalScale(scale, scale, scale);
};

TargetLocking.prototype.show = function(show, quadrent) {

    let to = 2, from = 0;

    if (!show) 
        { to = 0; from = 2; }
    else 
        this.isActive = true;

    let parent = this.parentPos.getLocalPosition();
    let pos = this.positions[quadrent].getLocalPosition();
    this.entity.setLocalPosition(pos.x + parent.x, pos.y + parent.y, pos.z + parent.z);

    this.entity.setLocalScale(from, from, from);
    this.targetScale.set(to, to, to);
    TweenWrapper.Tween(this.entity, this.entity.getLocalScale(), this.targetScale, this.appearSpeed,
    () => {
        this.isActive = show;
    }, pc.BackOut);
};

// swap method called for script hot-reloading
// inherit your script state here
// TargetLocking.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// HandGuide.js
var HandGuide = pc.createScript('handGuide');

HandGuide.attributes.add('duration', { type: 'number', title: 'Duration'});
HandGuide.attributes.add('fromPos', { type: 'vec3', title: 'From Position'});
HandGuide.attributes.add('toPos', { type: 'vec3', title: 'To Position'});

// initialize code called once per entity
HandGuide.prototype.initialize = function() {
    this.entity.on('Set:Movement', this.setMovement, this);
    this.entity.on('Set:Duration', this.setDuration, this);
    this.entity.on('Set:FromPos', this.setFromPos, this);
    this.entity.on('Set:ToPos', this.setToPos, this);

    this.to = new pc.Vec3();
    this.from = new pc.Vec3();
};


HandGuide.prototype.setMovement = function(isReverse) {

    // if (!isReverse) {
        this.entity.setLocalPosition(this.fromPos.x, this.fromPos.y, this.fromPos.z);
        this.to.set(this.toPos.x, this.toPos.y, this.toPos.z);
    // }
    // else {
    //     this.entity.setLocalPosition(this.toPos.x, this.toPos.y, this.toPos.z);
    //     this.to.set(this.fromPos.x, this.fromPos.y, this.fromPos.z);
    // }

    if (this.tweenRef) TweenWrapper.StopTween(this.tweenRef);
    this.tweenRef = TweenWrapper.Tween(this.entity, this.entity.getLocalPosition(), this.to, this.duration, undefined, undefined, true);
};

HandGuide.prototype.setDuration = function(duration) {
    this.duration = duration;
};

HandGuide.prototype.setFromPos = function(x, y, z) {
    this.fromPos.set(x || this.fromPos.x, y || this.fromPos.y, z || this.fromPos.z);
};

HandGuide.prototype.setToPos = function(x, y, z) {
    this.toPos.set(x || this.toPos.x, y || this.toPos.y, z || this.toPos.z);
};

// swap method called for script hot-reloading
// inherit your script state here
// HandGuide.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// LookAtObject.js
var LookAtobject = pc.createScript('lookAtobject');

LookAtobject.attributes.add('obj', { type: 'entity', title: 'LookAt Entity'});
LookAtobject.attributes.add('offset', { type: 'vec3', title: 'LookAt Offset'});

LookAtobject.attributes.add('lookAtX', { type: 'boolean', title: 'LookAt X', default: true});
LookAtobject.attributes.add('lookAtY', { type: 'boolean', title: 'LookAt Y', default: true});
LookAtobject.attributes.add('lookAtZ', { type: 'boolean', title: 'LookAt Z', default: true});

// initialize code called once per entity
LookAtobject.prototype.initialize = function() {
};

LookAtobject.prototype.postInitialize = function() {
    if (!this.obj)
        this.obj = this.app.root.findByTag('Main Camera')[0];
};

// update code called every frame
LookAtobject.prototype.update = function(dt) {
    if (!this.obj) return;

    let objPos = this.obj.getLocalPosition();
    let myPos = this.entity.getLocalPosition();

    let x = this.lookAtX ? objPos.x + this.offset.x : myPos.x;
    let y = this.lookAtY ? objPos.y + this.offset.y : myPos.y;
    let z = this.lookAtZ ? objPos.z + this.offset.z : myPos.z;

    this.entity.lookAt(x, y, z);
};

// swap method called for script hot-reloading
// inherit your script state here
// LookAtobject.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// animateSprites.js
var AnimateSprites = pc.createScript('animateSprites');

AnimateSprites.attributes.add('animate', { type: 'boolean' });
AnimateSprites.attributes.add('switchDelay', { type: 'number' });
AnimateSprites.attributes.add('pairAnimations', { type: 'number', default: 0 });

AnimateSprites.attributes.add('image', { type: 'entity' });
AnimateSprites.attributes.add('sprites', { type: 'asset', assetType: 'sprite', array: true });


// initialize code called once per entity
AnimateSprites.prototype.initialize = function () {

    this.pauseAnimation = false;
    this.currentSprite = 0;
    this.currentPair = 0;
};

// update code called every frame
AnimateSprites.prototype.update = function (dt) {

    if (!this.image) return;

    if (this.animate && !this.pauseAnimation) {
        this.pauseAnimation = true;
        CustomCoroutine.Instance.set(function () {

            this.showSprite();
            this.pauseAnimation = false;

            if (this.pairAnimations > 0) {
                this.currentPair++;

                if (this.pairAnimations <= this.currentPair) {
                    this.animate = false;
                    this.currentPair = 0;
                }
            }
        }.bind(this), this.switchDelay);
    }
};

AnimateSprites.prototype.showSprite = function () {

    try {
        if (this.animate)
            this.image.sprite.sprite = this.sprites[this.currentSprite].resource;
    } catch (e) { }
    this.currentSprite++;
    if (this.currentSprite >= this.sprites.length)
        this.currentSprite = 0;
};

AnimateSprites.prototype.play = function (playAnim) {

    this.animate = playAnim;
};

AnimateSprites.prototype.reset = function () {

    this.currentSprite = 0;
    this.image.element.texture = this.sprites[this.currentSprite].resource;
};

// swap method called for script hot-reloading
// inherit your script state here
// AnimateSprites.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

// kickVfxController.js
var KickVfxController = pc.createScript('kickVfxController');

KickVfxController.attributes.add('scaleRef', { type: 'entity', title: 'Scale Reference' });
KickVfxController.attributes.add('ringVFX', { type: 'entity', title: 'Ring VFX' });
KickVfxController.attributes.add('magicLines', { type: 'entity', title: 'Magic Lines', array: true });

// initialize code called once per entity
KickVfxController.prototype.initialize = function () {
    this.entity.on('Play', this.play, this);
};

// update code called every frame
KickVfxController.prototype.play = function (pos) {

    if (pos) this.entity.setLocalPosition(pos.x, pos.y, pos.z);

    let magicLineCount = (parseInt(pc.math.random(0, 100)) % 5) + 4;
    Debug.log('magicLineCount: ', magicLineCount);

    for (let i = 0; i < magicLineCount; i++) {
        this.magicLines[i].enabled = true;

        this.magicLines[i].fire('setScale', 1 / this.scaleRef.getLocalScale().x);
        this.magicLines[i].fire('setSpriteRotation', 0, 0, pc.math.random(0, 359));
    }

    this.ringVFX.enabled = true;
    this.ringVFX.fire('setScale', 1 / this.scaleRef.getLocalScale().x);
};


// swap method called for script hot-reloading
// inherit your script state here
// KickVfxController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// gemsManager.js
var GemsManager = pc.createScript('gemsManager');

GemsManager.prototype.initialize = function () {
    this.collectedGems = 0;
    GemsManager = this;
    this.app.on(Events.OnCollectablePicked, this.OnCollectablePicked, this);
    this.app.on(Events.OnLevelCompleted, this.OnLevelCompleted, this);
};

GemsManager.prototype.OnLevelCompleted = function () {
    DataManager.Instance.setGems(this.collectedGems);
    this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems, false, true);
    this.collectedGems = 0;
};

GemsManager.prototype.OnCollectablePicked = function (data) {
    if (data.type === CollectableType.Gem) {
        this.collectedGems++;
    }
};


GemsManager.prototype.update = function (dt) {

};

// looksGoodOnYouViewController.js
var LooksGoodOnyouViewController = pc.createScript('looksGoodOnyouViewController');
LooksGoodOnyouViewController.attributes.add('preview', { type: 'entity' });
LooksGoodOnyouViewController.attributes.add('getButton', { type: 'entity' });
LooksGoodOnyouViewController.attributes.add('loseButton', { type: 'entity' });

LooksGoodOnyouViewController.instance = null;

// initialize code called once per entity
LooksGoodOnyouViewController.prototype.initialize = function () {

    LooksGoodOnyouViewController.instance = this;
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.onEnable();
    this.on('enable', this.onEnable, this);
    this.getButton.button.on('click', this.onGetButtonClicked, this);
    this.loseButton.button.on('click', this.onLoseButtonClicked, this);

};

LooksGoodOnyouViewController.prototype.onEnable = function () {
    var data = AttachmentsHandler.rewardData;
    if (data) {
        this.preview.element.sprite = data.icon.resource;
    }
};

LooksGoodOnyouViewController.prototype.onGetButtonClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    if (APIMediator.isRewardedAdAvailable('button:skin:get')) {
        const resumeGiveRewardCallback = LooksGoodOnyouViewController.instance.resumeGiveReward.bind(this);
        const pauseCallback = LooksGoodOnyouViewController.instance.pauseGame.bind(this);
        const resumeCallback = LooksGoodOnyouViewController.instance.resumeNoReward.bind(this);
        const noADAvailableCallack = LooksGoodOnyouViewController.instance.adNotAvailable.bind(this);
        this.app.fire("showRewardedAD", resumeGiveRewardCallback, pauseCallback, resumeCallback, noADAvailableCallack, 'button:skin:get');
    } else {
        this.onRewardSuccess(); 
    }

};

LooksGoodOnyouViewController.prototype.onRewardSuccess = function () {
    this.app.fire(Events.OnKeepLooksGoodOffer);
    this.app.fire('changeMenuState', MenuManager.States.Win);
};

LooksGoodOnyouViewController.prototype.onRewardFailed = function () {
    this.app.fire('changeMenuState', MenuManager.States.Win);
    // console.error("LooksGoodOnyouViewController.onRewardFailed");
};

LooksGoodOnyouViewController.prototype.onLoseButtonClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire(Events.OnLoseLooksGoodOffer);
    this.app.fire('changeMenuState', MenuManager.States.Win);
};

LooksGoodOnyouViewController.prototype.resumeGiveReward = function () {

    this.loadingAdScreen.enabled = false;
    this.onRewardSuccess();

};

LooksGoodOnyouViewController.prototype.pauseGame = function () {

    this.loadingAdScreen.enabled = true;

};

LooksGoodOnyouViewController.prototype.resumeNoReward = function () {

    this.loadingAdScreen.enabled = false;
    this.onRewardSuccess();

};

LooksGoodOnyouViewController.prototype.adNotAvailable = function () {

    this.loadingAdScreen.enabled = false;
    this.app.fire("noAdPopup");
    this.onRewardFailed();

};

// update code called every frame
LooksGoodOnyouViewController.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// LooksGoodOnyouViewController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// playerPrefs.js
var PlayerPrefs = pc.createScript('playerPrefs');

PlayerPrefs.prototype.initialize = function () {
    PlayerPrefs = this;
};

PlayerPrefs.prototype.GetArray = function (key, defValue) {
    let value = this.GetItem(key, defValue);
    let collection = [];
    if (value != "") {
        // const re = /\s*(?:,|$)\s*/;
        collection = value.split(",");
    }

    return collection;
};

PlayerPrefs.prototype.AppendItem = function (key, value) {
    let orgString = this.GetString(key, ",");
    // if (!orgString.contains(value))
    orgString += "," + value;

    this.SetItem(key, orgString);
};

PlayerPrefs.prototype.GetInt = function (key, defValue) {
    return parseInt(this.GetItem(key, defValue));
};

PlayerPrefs.prototype.GetFloat = function (key, defValue) {
    return parseFloat(this.GetItem(key, defValue));
};

PlayerPrefs.prototype.GetString = function (key, defValue) {
    return this.GetItem(key, defValue);
};

PlayerPrefs.prototype.GetItem = function (key, defValue) {
    var value = APIMediator.getStorageItem(key);

    if (value === undefined || value === null) {
        value = defValue;
        this.SetItem(key, value);
    }

    return value;
};

PlayerPrefs.prototype.SetItem = function (key, defValue) {
    Debug.log("Data stored against Key: ", key, " of Value: ", defValue);
    APIMediator.setStorageItem(key, defValue);
};


// shopPaginationBtnEvent.js
var ShopPaginationBtnEvent = pc.createScript('shopPaginationBtnEvent');

ShopPaginationBtnEvent.attributes.add('btnEvent', { type: 'string' });
ShopPaginationBtnEvent.attributes.add('index', { type: 'number' });

// initialize code called once per entity
ShopPaginationBtnEvent.prototype.initialize = function () {

    this.entity.button.on("click", this.onBtnClicked, this);

};

ShopPaginationBtnEvent.prototype.onBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire(this.btnEvent, this.index);

};

// update code called every frame
ShopPaginationBtnEvent.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ShopPaginationBtnEvent.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// skinShopItemButton.js
var SkinShopItemButton = pc.createScript('skinShopItemButton');
SkinShopItemButton.attributes.add('adParent', { type: 'entity' });
SkinShopItemButton.attributes.add('adCounterText', { type: 'entity' });
SkinShopItemButton.attributes.add('selectedParent', { type: 'entity' });
SkinShopItemButton.attributes.add('selectedColour', { type: 'rgb' });
SkinShopItemButton.attributes.add('idleColour', { type: 'rgb' });
SkinShopItemButton.attributes.add('bg', { type: 'entity' });
SkinShopItemButton.attributes.add('pageIndex', { type: 'number' });

SkinShopItemButton.attributes.add('skinType', {
    type: 'number', enum: [
        { Hats: 0 },
        { Shoes: 1 },
        { Kicks: 2 },
    ]
});

SkinShopItemButton.attributes.add('data', {
    type: 'json', schema: [
        {
            name: 'type',
            type: 'string',
            enum: [
                { Selected: "Selected" },
                { Available: "Available" },
                { Locked: "Locked" },
                { Unlocked: "Unlocked" },
            ]
        },
        {
            name: 'icon',
            type: 'entity'
        }
    ], array: true
});

SkinShopItemButton.instance = null;


SkinShopItemButton.prototype.initialize = function () {
    SkinShopItemButton.videoAsset = SkinShopItemButton.videoAsset || this.app.assets.find('icon_video_small.png');
    SkinShopItemButton.gemAsset = SkinShopItemButton.gemAsset || this.app.assets.find('icon_gem_medium.png');

    this.currencyIcon = this.adParent.findByName('Icon');

    this.app.on('shop:scrollToHat', this.scrollToHat, this);

    this.on('destroy', () => {
        this.app.off('shop:scrollToHat', this.scrollToHat, this);
    });
};

SkinShopItemButton.prototype.scrollToHat = function (reward) {
    if (this.reward === reward) {
        switch (this.skinType) {
            case SkinType.Hats:
                this.entity.parent.parent.parent.parent.fire('SetPage', this.pageIndex);
                const pagination = this.entity.parent.parent.parent.parent.parent.findByName('PageIndicators');
                if(pagination) pagination.fire('SetPage', this.pageIndex);
                break;
            case SkinType.Shoes:

                break;
            case SkinType.Kicks:

                break;
        }
    }
};

SkinShopItemButton.prototype.Setup = function (reward) {
    SkinShopItemButton.instance = this;
    this.entity.button.off('click', this.onClick, this);
    this.reward = reward;

    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    var selectedHat = PlayerPrefs.GetString("SelectedHat", "");
    var selectedShoes = PlayerPrefs.GetString("SelectedShoes", "");
    var selectedKick = PlayerPrefs.GetString("SelectedKick", DataManager.Instance.defaultKick);

    if (reward.GetStatus() === SkinStatus.Selected)
        reward.SetStatus(SkinStatus.Unlocked);

    var isSelected = reward.entity.name === selectedHat || reward.entity.name === selectedShoes || reward.entity.name === selectedKick;

    if (isSelected) {
        reward.SetCost(0);
        reward.SetStatus(SkinStatus.Selected);
    }

    this.updatePriceView();

    this.entity.button.on('click', this.onClick, this);

    this.updatePreview(reward.GetStatus());
};

SkinShopItemButton.prototype.updatePriceView = function () {
    if (!this.reward) return;
    if (this.areAdsEnabled) {
        if (SkinShopItemButton.videoAsset) {
            this.currencyIcon.element.spriteAsset = SkinShopItemButton.videoAsset.id;
            this.currencyIcon.element.width = 33;
        }
        this.adParent.enabled = this.reward.GetCost() > 0;
        this.adCounterText.element.text = this.reward.GetCost() + "/" + this.reward.GetMaxCost();
    } else {
        if (SkinShopItemButton.gemAsset) {
            if(this.currencyIcon) {
                this.currencyIcon.element.spriteAsset = SkinShopItemButton.gemAsset.id;
                this.currencyIcon.element.width = 21;
            } else {
                console.warn('no currency icon on ' + this.entity.path);
            }
        }
        this.adParent.enabled = this.reward.IsAvailable();
        this.adCounterText.element.text = this.reward.GetGemPrice();
    }
}

SkinShopItemButton.prototype.updatePreview = function (status) {
    var isSelected = status === SkinStatus.Selected;
    if (isSelected)
        this.bg.element.color = this.selectedColour;
    else
        this.bg.element.color = this.idleColour;

    this.selectedParent.enabled = status === SkinStatus.Selected;

    for (let i = 0; i < this.data.length; i++) {
        var data = this.data[i];
        data.icon.enabled = status === data.type;

        if (status === data.type) {
            switch (this.skinType) {
                case SkinType.Hats:
                    // data.icon.element.sprite = this.reward.data.icon.resource;
                    break;
                case SkinType.Shoes:
                    // data.icon.element.sprite = this.reward.data.icon.resource;
                    break;
                case SkinType.Kicks:
                    Utils.setSpriteElementFromSprite(data.icon,  this.reward.data.icon.resource, 125, 125); //data.icon.element.sprite = this.reward.data.icon.resource;
                    break;
            }

            try {
                if (data.type !== SkinStatus.Locked)
                    Utils.setSpriteElementFromSprite(data.icon,  this.reward.data.icon.resource, 125, 125);// data.icon.element.sprite = this.reward.data.icon.resource;
            } catch (e) {
                console.error('error accessing icon of ', this.reward)
            }
            
        }
    }
};

SkinShopItemButton.prototype.onClick = function () {

    this.app.fire("sound:playSound", "BtnSound");
    // console.log(this.reward);
    var status = this.reward.GetStatus();
    var cost = this.reward.GetCost();

    switch (status) {
        case SkinStatus.Selected:
            //TODO: 
            Debug.log(this.reward.entity.name + " Case SkinStatus.Selected");
            if (this.reward.entity.name === DataManager.Instance.defaultKick)
                return;

            this.app.fire(Events.OnSkinUnselected, {
                key: this.reward.entity.name,
                skinType: this.skinType
            });
            break;
        case SkinStatus.Available:

            if (this.areAdsEnabled) {
                if (cost > 0) {
                    if (ConfigManager.instance.environmentType !== ConfigManager.EnvTypes.None) {
                        this.loadingAdScreen.enabled = true;
                        const resumeGiveRewardCallback = SkinShopItemButton.instance.resumeGiveReward.bind(this);
                        const pauseCallback = SkinShopItemButton.instance.pauseGame.bind(this);
                        const resumeCallback = SkinShopItemButton.instance.resumeNoReward.bind(this);
                        const noADAvailableCallack = SkinShopItemButton.instance.adNotAvailable.bind(this);
                        this.app.fire("showRewardedAD", resumeGiveRewardCallback, pauseCallback, resumeCallback, noADAvailableCallack, 'button:shop:unlockitem');
                    } else {
                        this.onRewardSuccess();
                    }
                }
            } else {
                if (this.reward.IsAvailable()) {
                    this.purchaseFormGems();
                }
            }
            break;
        case SkinStatus.Locked:
            //TODO: 
            break;
        case SkinStatus.Unlocked:
            //TODO: select this reward
            // this.reward.SetStatus(SkinStatus.Selected);
            this.app.fire(Events.OnSkinSelected, {
                key: this.reward.entity.name,
                skinType: this.skinType
            });
            switch (this.skinType) {
                case SkinType.Hats:
                    PlayerPrefs.SetItem("SelectedHat", this.reward.entity.name);
                    break;
                case SkinType.Shoes:
                    PlayerPrefs.SetItem("SelectedShoes", this.reward.entity.name);
                    break;
                case SkinType.Kicks:
                    PlayerPrefs.SetItem("SelectedKick", this.reward.entity.name);
                    break;
            }
            break;
    }
};

SkinShopItemButton.prototype.onRewardSuccess = function () {
    // var reward = this.reward;
    var cost = this.reward.GetCost();
    if (cost - 1 <= 0) {
        cost = 0;
        this.reward.SetCost(cost);
        this.reward.SetStatus(SkinStatus.Unlocked);
        this.adParent.enabled = cost > 0;
        this.adCounterText.element.text = cost + "/" + this.reward.GetMaxCost();

        // console.log(this.reward.entity.name, " unlocked.");

        this.updatePreview(SkinStatus.Unlocked);
    } else {
        cost -= 1;
        this.reward.SetCost(cost);
        this.adParent.enabled = cost > 0;
        this.adCounterText.element.text = cost + "/" + this.reward.GetMaxCost();
    }
    Debug.log('SkinShopItemButton.onRewardSuccess()');
};

SkinShopItemButton.prototype.purchaseFormGems = function () {
    var price = this.reward.GetGemPrice();
    if (DataManager.Instance.gems > price) {
        DataManager.Instance.setGems(-price);
        this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems, true);
        this.reward.SetCost(0);
        this.reward.SetStatus(SkinStatus.Unlocked);

        this.updatePriceView();
        this.updatePreview(SkinStatus.Unlocked);
        this.onClick();
    } else {
        this.app.fire("sound:playSound", "Mob_wrong_hit");
    }
};

SkinShopItemButton.prototype.onRewardFailed = function () {
    // Debug.error('SkinShopItemButton.onRewardFailed()');
};


SkinShopItemButton.prototype.resumeGiveReward = function () {
    this.loadingAdScreen.enabled = false;
    this.onRewardSuccess();
};

SkinShopItemButton.prototype.pauseGame = function () {
    this.loadingAdScreen.enabled = true;
};

SkinShopItemButton.prototype.resumeNoReward = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire("adSkippedPopup");
    this.onRewardFailed();
};

SkinShopItemButton.prototype.adNotAvailable = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire("noAdPopup");
    this.onRewardFailed();
};


SkinShopItemButton.prototype.update = function (dt) {
    this.areAdsEnabled = APIMediator.isRewardedAdAvailable('button:shop:unlockitem');

    if (this.reward) {
        this.updatePriceView();
    }
};


// skinShopMenuEventListner.js
var SkinShopMenuEventListner = pc.createScript('skinShopMenuEventListner');

SkinShopMenuEventListner.attributes.add('shopBtns', {
    type: 'json',
    title: 'Shop Buttons',
    schema: [
        { name: 'closeShopBtn', type: 'entity' },
        { name: 'hatsTabBtn', type: 'entity' },
        { name: 'shoesTabBtn', type: 'entity' },
        { name: 'kicksTabBtn', type: 'entity' },
        { name: 'earnGemsBtn', type: 'entity' },
        { name: 'unlockRandomBtn', type: 'entity' },
        { name: 'unlockRandomPriceText', type: 'entity' },
    ],
});

SkinShopMenuEventListner.attributes.add('shopTabs', {
    type: 'json',
    title: 'Shop Tabs',
    schema: [
        { name: 'hatsTab', type: 'entity' },
        { name: 'shoesTab', type: 'entity' },
        { name: 'kickTab', type: 'entity' },
    ],
});

SkinShopMenuEventListner.attributes.add('hatPages', {
    type: 'json',
    title: 'hat pages',
    schema: [
        { name: 'hatsMainPage', type: 'entity' },
        { name: 'hatsPages', type: 'entity', array: true },
        { name: 'hatsPageIndicator', type: 'entity', array: true },
    ],
});

SkinShopMenuEventListner.attributes.add('shoesPages', {
    type: 'json',
    title: 'shoes pages',
    schema: [
        { name: 'shoesMainPage', type: 'entity' },
        { name: 'shoesPages', type: 'entity', array: true },
        { name: 'shoesPageIndicator', type: 'entity', array: true },

    ],
});

SkinShopMenuEventListner.attributes.add('kickPages', {
    type: 'json',
    title: 'hat pages',
    schema: [
        { name: 'kickMainPage', type: 'entity' },
        { name: 'kickPages', type: 'entity', array: true },
        { name: 'kickPageIndicator', type: 'entity', array: true },
    ],
});

SkinShopMenuEventListner.attributes.add('threeDView', { type: 'entity' });


SkinShopMenuEventListner.instance = null;


// initialize code called once per entity
SkinShopMenuEventListner.prototype.initialize = function () {

    SkinShopMenuEventListner.instance = this;
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.initEvents();
    this.TAB_HIGHLIGHT_COLOR = new pc.Color(121 / 255, 85 / 255, 206 / 255, 1);
    this.TAB_UNHIGHLIGHT_COLOR = new pc.Color(96 / 255, 68 / 255, 164 / 255, 1);

    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);
    this.onEnable();

    this.app.on(Events.OnSkinSelected, this.OnSkinSelected, this);
    this.app.on(Events.OnSkinUnselected, this.OnSkinUnselected, this);

    this.hatsPageIndex = 0;
    this.kicksPageIndex = 0;
};

SkinShopMenuEventListner.prototype.postInitialize = function () {
    this.hatsPageIndex = PlayerPrefs.GetInt("hatsPageIndex", 0);
    this.kicksPageIndex = PlayerPrefs.GetInt("kicksPageIndex", 2);
};

SkinShopMenuEventListner.prototype.OnSkinUnselected = function (data) {


    // this.onEnable();
    var buttons = [];
    switch (data.skinType) {
        case SkinType.Hats:
            // PlayerPrefs.SetItem("hatsPageIndex", 0);
            buttons = this.hatPages.hatsMainPage.script.skinShopPage.data.buttons;
            break;
        case SkinType.Shoes:
            buttons = this.shoesPages.shoesMainPage.script.skinShopPage.data.buttons;
            break;
        case SkinType.Kicks:
            // PlayerPrefs.SetItem("kicksPageIndex", 0);
            buttons = this.kickPages.kickMainPage.script.skinShopPage.data.buttons;
            break;
    }

    this.updateUnselectButtonPreviews(buttons, data);
};

SkinShopMenuEventListner.prototype.OnSkinSelected = function (data) {
    // this.onEnable();
    var buttons = [];
    switch (data.skinType) {
        case SkinType.Hats:
            buttons = this.hatPages.hatsMainPage.script.skinShopPage.data.buttons;
            break;
        case SkinType.Shoes:
            buttons = this.shoesPages.shoesMainPage.script.skinShopPage.data.buttons;
            break;
        case SkinType.Kicks:
            buttons = this.kickPages.kickMainPage.script.skinShopPage.data.buttons;
            break;
    }

    this.updateButtonPreviews(buttons, data);
};

SkinShopMenuEventListner.prototype.updateButtonPreviews = function (buttons, data) {
    var key = data.key;
    var skinType = data.skinType;
    Debug.log("Data: ", data);
    for (let i = 0; i < buttons.length; i++) {
        var btn = buttons[i].script.skinShopItemButton;
        var reward = btn.reward;

        if (reward) {

            if (reward.entity.name === key) {
                if (btn.skinType === SkinType.Hats)
                    PlayerPrefs.SetItem("hatsPageIndex", this.hatsPageIndex);
                else if (btn.skinType === SkinType.Kicks)
                    PlayerPrefs.SetItem("kicksPageIndex", this.kicksPageIndex);
                reward.SetStatus(SkinStatus.Selected);
            }
            else {
                if (reward.GetStatus() === SkinStatus.Selected)
                    reward.SetStatus(SkinStatus.Unlocked);
            }

            btn.updatePreview(reward.GetStatus());
        }
    }
};

SkinShopMenuEventListner.prototype.updateUnselectButtonPreviews = function (buttons, data) {
    var key = data.key;
    var skinType = data.skinType;

    for (let i = 0; i < buttons.length; i++) {
        var btn = buttons[i].script.skinShopItemButton;
        var reward = btn.reward;

        if (reward) {

            if (reward.entity.name === key) {
                reward.SetStatus(SkinStatus.Unlocked);
            }
            btn.updatePreview(reward.GetStatus());
        }
    }
};

SkinShopMenuEventListner.prototype.updatePrice = function () {
    let reward = ChestRoomManager.GetRandomSkinReward(SkinType.Hats);
    let price = ChestRoomManager.GetSkinPrice(SkinType.Hats);

    Debug.log("SkinPrice: ", price);
    this.shopBtns.unlockRandomPriceText.element.text = price;
    this.shopBtns.unlockRandomBtn.enabled = reward != null;
};

SkinShopMenuEventListner.prototype.onDisable = function () {
    this.threeDView.enabled = false;
};

SkinShopMenuEventListner.prototype.onEnable = function () {

    this.threeDView.enabled = true;
    this.updatePrice();
    let rewards = PlayerPrefs.GetArray("rewards", "");
    Debug.log("Rewards: ", rewards);

    let filteredHats = [];
    var hats = ChestRoomManager.GetItemsOfType(SkinType.Hats);

    //Experimental
    for (let i = 0; i < rewards.length; i++) {
        for (let j = 0; j < hats.length; j++) {
            let item = hats[j];

            if (item.entity.name === rewards[i]) {
                filteredHats.push(item);
            }
        }
    }

    for (let i = 0; i < hats.length; i++) {
        if (!filteredHats.includes(hats[i]))
            filteredHats.push(hats[i]);
    }

    if (filteredHats.length > 0) {
        hats = filteredHats;
        // console.log("Filtered Hats: ", filteredHats);
    }
    //////////////

    var shoes = ChestRoomManager.GetItemsOfType(SkinType.Shoes);
    var kicks = ChestRoomManager.GetItemsOfType(SkinType.Kicks);


    // console.log("Hats: ", hats, "Shoes: ", shoes, "Kicks: ", kicks);

    this.hatPages.hatsMainPage.script.skinShopPage.Setup(hats);
    this.shoesPages.shoesMainPage.script.skinShopPage.Setup(shoes);
    this.kickPages.kickMainPage.script.skinShopPage.Setup(kicks);

    let self = this;
    setTimeout(function () {
        self.app.fire("hatPageChange", self.hatsPageIndex);
        self.app.fire("kickPageChange", self.kicksPageIndex);
    }, 100);
};

SkinShopMenuEventListner.prototype.initEvents = function () {

    this.shopBtns.earnGemsBtn.button.on("click", this.onEarnGemsBtnClicked, this);
    this.shopBtns.unlockRandomBtn.button.on("click", this.onUnlockRandomBtnClicked, this);

    this.shopBtns.closeShopBtn.button.on("click", this.onCloseShopBtnClicked, this);
    this.shopBtns.hatsTabBtn.button.on("click", this.onHatsTabBtnClicked, this);
    this.shopBtns.shoesTabBtn.button.on("click", this.onShoesTabBtnClicked, this);
    this.shopBtns.kicksTabBtn.button.on("click", this.onKicksTabBtnClicked, this);
    this.app.on("hatPageChange", this.onHatPageChanged, this);
    this.app.on("kickPageChange", this.onKickPageChanged, this);

};

SkinShopMenuEventListner.prototype.onEarnGemsBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");

    if (ConfigManager.instance.environmentType !== ConfigManager.EnvTypes.None) {
        this.loadingAdScreen.enabled = true;
        const resumeGiveRewardCallback = SkinShopMenuEventListner.instance.resumeGiveReward.bind(this);
        const pauseCallback = SkinShopMenuEventListner.instance.pauseGame.bind(this);
        const resumeCallback = SkinShopMenuEventListner.instance.resumeNoReward.bind(this);
        const noADAvailableCallack = SkinShopMenuEventListner.instance.adNotAvailable.bind(this);
        this.app.fire("showRewardedAD", resumeGiveRewardCallback, pauseCallback, resumeCallback, noADAvailableCallack, 'button:shop:getgems');
    } else {
        this.onEarnRewardSuccess();
    }

};

SkinShopMenuEventListner.prototype.onEarnRewardSuccess = function () {
    DataManager.Instance.setGems(500);
    this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems, false, true);
};

SkinShopMenuEventListner.prototype.onEarnRewardFail = function () {

};

SkinShopMenuEventListner.prototype.onUnlockRandomBtnClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    let price = ChestRoomManager.GetSkinPrice(SkinType.Hats);

    if (DataManager.Instance.gems - price >= 0) {

        //random unlock
        let reward = ChestRoomManager.GetRandomSkinReward(SkinType.Hats);
        if (reward) {
            DataManager.Instance.setGems(-price);
            this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems, true);

            reward.SetStatus(SkinStatus.Unlocked);
            this.app.fire(Events.OnSkinSelected, {
                key: reward.entity.name,
                skinType: SkinType.Hats
            });

            PlayerPrefs.SetItem("SelectedHat", reward.entity.name);

            this.app.fire('shop:scrollToHat', reward);

            this.updatePrice();
        } 

        this.shopBtns.unlockRandomBtn.enabled = reward != null;
    }
    else {
        Debug.error("Not Enough Gems!");
        // DataManager.Instance.setGems(99999);
        this.app.fire('GemsMenu:UpdateGems', DataManager.Instance.gems, true);
    }
};

SkinShopMenuEventListner.prototype.onCloseShopBtnClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.app.fire("changeMenuState", MenuManager.States.Home);
};

SkinShopMenuEventListner.prototype.onHatsTabBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.highLightTab(this.shopTabs.hatsTab);
    this.openPage(this.hatPages.hatsMainPage);

};


SkinShopMenuEventListner.prototype.onShoesTabBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.highLightTab(this.shopTabs.shoesTab);
    this.openPage(this.shoesPages.shoesMainPage);

};

SkinShopMenuEventListner.prototype.onKicksTabBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.highLightTab(this.shopTabs.kickTab);
    this.openPage(this.kickPages.kickMainPage);

};

SkinShopMenuEventListner.prototype.highLightTab = function (tab) {

    this.resetTabs();
    tab.element.color = this.TAB_HIGHLIGHT_COLOR;

};

SkinShopMenuEventListner.prototype.openPage = function (page) {

    this.closeAllPages();
    page.enabled = true;

};

SkinShopMenuEventListner.prototype.resetTabs = function () {

    this.shopTabs.hatsTab.element.color = this.TAB_UNHIGHLIGHT_COLOR;
    this.shopTabs.shoesTab.element.color = this.TAB_UNHIGHLIGHT_COLOR;
    this.shopTabs.kickTab.element.color = this.TAB_UNHIGHLIGHT_COLOR;

};

SkinShopMenuEventListner.prototype.closeAllPages = function () {

    this.hatPages.hatsMainPage.enabled = false;
    this.shoesPages.shoesMainPage.enabled = false;
    this.kickPages.kickMainPage.enabled = false;

};

SkinShopMenuEventListner.prototype.onHatPageChanged = function (index) {
    // this.resetHatPaginationSelection();
    // this.hatPages.hatsPageIndicator[index].children[0].enabled = true;
    // this.hatPages.hatsPages[index].enabled = true;
    this.hatsPageIndex = index;
};

SkinShopMenuEventListner.prototype.resetHatPaginationSelection = function () {

    // for (let i = 0; i < this.hatPages.hatsPageIndicator.length; i++) {
    //     this.hatPages.hatsPageIndicator[i].children[0].enabled = false;
    //     this.hatPages.hatsPages[i].enabled = false;
    // }
    this.hatsPageIndex = 0;
};

SkinShopMenuEventListner.prototype.onKickPageChanged = function (index) {

    // this.resetKickPaginationSelection();
    // this.kickPages.kickPageIndicator[index].children[0].enabled = true;
    // this.kickPages.kickPages[index].enabled = true;
    this.kicksPageIndex = index;
};

SkinShopMenuEventListner.prototype.resetKickPaginationSelection = function () {

    // for (let i = 0; i < this.kickPages.kickPageIndicator.length; i++) {
    //     this.kickPages.kickPageIndicator[i].children[0].enabled = false;
    //     this.kickPages.kickPages[i].enabled = false;
    // }
    this.kicksPageIndex = 0;
};

SkinShopMenuEventListner.prototype.resumeGiveReward = function () {

    this.loadingAdScreen.enabled = false;
    this.onEarnRewardSuccess();

};

SkinShopMenuEventListner.prototype.pauseGame = function () {

    this.loadingAdScreen.enabled = true;

};

SkinShopMenuEventListner.prototype.resumeNoReward = function () {

    this.loadingAdScreen.enabled = false;
    this.app.fire("adSkippedPopup");
    this.onEarnRewardFail();

};

SkinShopMenuEventListner.prototype.adNotAvailable = function () {

    this.loadingAdScreen.enabled = false;
    this.app.fire("noAdPopup");
    this.onEarnRewardFail();

};

// update code called every frame
SkinShopMenuEventListner.prototype.update = function (dt) {
    this.shopBtns.earnGemsBtn.enabled = APIMediator.isRewardedAdAvailable('button:mainmenu:activateragemode');
};

// skinShopPage.js
var SkinShopPage = pc.createScript('skinShopPage');
SkinShopPage.attributes.add('data', {
    type: 'json', schema: [{
        name: 'buttons',
        type: 'entity',
        array: true
    }, {
        name: 'type',
        type: 'number',
        enum:
            [
                { Hats: 0 },
                { Shoes: 1 },
                { Kicks: 2 },
            ]
    }, {
        name: 'purchaseType',
        type: 'number',
        enum:
            [
                { Gems: 0 },
                { Rewarded: 1 },
            ]
    }]
});

SkinShopPage.prototype.Setup = function (collection) {
    this.collection = collection;
    for (let i = 0; i < this.data.buttons.length; i++) {
        let btn = this.data.buttons[i].script.skinShopItemButton;
        btn.Setup(collection[i]);
    }
};

SkinShopPage.prototype.initialize = function () {
    this.tooltip = this.entity.findByName('ToolTip');
};

SkinShopPage.prototype.update = function (dt) {
    if(this.tooltip) this.tooltip.enabled = APIMediator.isRewardedAdAvailable('button:shop:unlockitem');
};



// skinUnlockedViewController.js
var SkinUnlockedViewController = pc.createScript('skinUnlockedViewController');
SkinUnlockedViewController.attributes.add('preview', { type: 'entity' });
SkinUnlockedViewController.attributes.add('getItButton', { type: 'entity' });
SkinUnlockedViewController.attributes.add('getItButtonAds', { type: 'entity' });
SkinUnlockedViewController.attributes.add('loseItButton', { type: 'entity' });
SkinUnlockedViewController.attributes.add('loadingScreen', { type: 'entity' });
SkinUnlockedViewController.attributes.add('winScreen', { type: 'entity' });

SkinUnlockedViewController.instance = null;

SkinUnlockedViewController.prototype.initialize = function () {
    SkinUnlockedViewController.instance = this;
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");
    this.on('enable', this.onEnable, this);
    this.onEnable();

    this.getItButton.button.on('click', this.OnGetItClicked, this);
    this.loseItButton.button.on('click', this.OnLoseItClicked, this);
    this.getItButtonAds.button.on('click', this.OnGetItClicked, this);
};


SkinUnlockedViewController.prototype.onEnable = function () {
    var data = this.winScreen.script.winScreenEventListner.pendulumData;
    this.handleButtons(false);

    if (data) {
        Utils.setSpriteElementFromSprite(this.preview, data.sprite);// this.preview.element.sprite = data.sprite;
    } else if (ChestRoomManager.currentRewardProgress >= 100) {
        {
            this.handleButtons(true);
            Utils.setSpriteElementFromSprite(this.preview, ChestRoomManager.GetCurrentProgressSkin());//this.preview.element.sprite = ChestRoomManager.GetCurrentProgressSkin();
        }
    }
    else
        Utils.setSpriteElementFromSprite(this.preview, ChestRoomManager.GetCurrentBestPrizeSkin()) //this.preview.element.sprite = ChestRoomManager.GetCurrentBestPrizeSkin();
};

SkinUnlockedViewController.prototype.OnLoseItClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    // this.onRewardSuccess();
    this.onRewardFailed();
};

SkinUnlockedViewController.prototype.OnGetItClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    var data = this.winScreen.script.winScreenEventListner.pendulumData;
    
    if (data) {
        PlayerPrefs.AppendItem("rewards", data.value.entity.name);

        try {
            data.value.SetStatus(SkinStatus.Unlocked);


            this.app.fire(Events.OnSkinSelected, {
                key: data.value.entity.name,
                skinType: SkinType.Hats
            });

            this.app.fire(Events.OnKeepLooksGoodOffer, {
                key: data.value.entity.name,
                skinType: SkinType.Hats
            });

            PlayerPrefs.SetItem("SelectedHat", data.value.entity.name);

            this.app.fire('shop:scrollToHat', data.value);
        } catch (e) {
            console.error(e);
        }

        this.winScreen.script.winScreenEventListner.pendulumData = null;

        if (ChestRoomManager.currentRewardProgress >= 100) {
            let self = this;
            this.getItButton.enabled = false;
            this.loseItButton.enabled = false;
            this.getItButtonAds.enabled = false;

            setTimeout(function () {
                self.handleButtons(true);
            }, 1000);
            Utils.setSpriteElementFromSprite(this.preview,  ChestRoomManager.GetCurrentProgressSkin()); //this.preview.element.sprite = ChestRoomManager.GetCurrentProgressSkin();
            return;
        }
    } else if (ChestRoomManager.currentRewardProgress >= 100) {
        CustomCoroutine.Instance.set(async () => {
            if (this.rewardedAdPresent) {
                const result = await APIMediator.watchRewardedVideo('button:skins:unlockSkin');
                if (!result) {
                    this.onRewardFailed();
                } else {
                    this.onRewardSuccess();
                }
            } else {
                this.onRewardSuccess();
            }

        }, 0.1);

    } 
    
     if (ChestRoomManager.keys >= 3) {
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
    } else {
        this.loadHome();
    }
};

SkinUnlockedViewController.prototype.onRewardSuccess = function () {
    ChestRoomManager.UpdateRewardProgress();
    if (ChestRoomManager.keys >= 3) {
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
    } else {
        this.loadHome();
    }
};

SkinUnlockedViewController.prototype.onRewardFailed = function () {
    ChestRoomManager.ResetRewardProgress();
    if (ChestRoomManager.keys >= 3) {
        this.app.fire(Events.OnChangeMenuState, MenuManager.States.ChestRoom);
    } else {
        this.loadHome();
    }
};

SkinUnlockedViewController.prototype.loadHome = function () {
    this.loadingScreen.enabled = true;
    this.app.fire(Events.OnLevelCompleted);
    this.app.fire(Events.OnChangeMenuState, MenuManager.States.Home);

    setTimeout(() => {
        this.loadingScreen.enabled = false;
    }, 1500);
};

SkinUnlockedViewController.prototype.handleButtons = function (isRewardedVideo) {
    this.getItButtonAds.enabled = isRewardedVideo;
    this.loseItButton.enabled = false;
    this.getItButton.enabled = !isRewardedVideo;

    if (isRewardedVideo === true) {
        let self = this;

        setTimeout(function () {
            self.loseItButton.enabled = true;
        }, 500);
    }
};

SkinUnlockedViewController.prototype.update = function (dt) {
    this.rewardedAdPresent = APIMediator.isRewardedAdAvailable('button:skins:unlockSkin');
};


// emojiRotation.js
var EmojiRotation = pc.createScript('emojiRotation');

// initialize code called once per entity
EmojiRotation.prototype.initialize = function () {

    this.entity
        .tween(this.entity.getLocalEulerAngles())
        .rotate(new pc.Vec3(0, 0, -20), 1.0, pc.Linear)
        .loop(true)
        .yoyo(true)
        .start();


};

// update code called every frame
EmojiRotation.prototype.update = function (dt) {

};

// FireworksController.js
var FireworksController = pc.createScript('fireworksController');

FireworksController.attributes.add('particles', { type: 'entity', title: 'Particles', array: true });

// initialize code called once per entity
FireworksController.prototype.initialize = function() {
    this.entity.on('Play', this.play, this);
    this.entity.on('Stop', this.stop, this);
};

// update code called every frame
FireworksController.prototype.play = function () {
    for (let i = 0 ; i < this.particles.length; i++) {
        this.particles[i].particlesystem.reset();
        this.particles[i].enabled = true;
    }
};

FireworksController.prototype.stop = function () {
    for (let i = 0 ; i < this.particles.length; i++) {
        this.particles[i].enabled = false;
    }
};
  

// swap method called for script hot-reloading
// inherit your script state here
// FireworksController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// FireworksVfxHandler.js
var FireworksVfxHandler = pc.createScript('fireworksVfxHandler');

FireworksVfxHandler.attributes.add('fireworks', { type: 'entity', title: 'Fireworks', array: true});

// initialize code called once per entity
FireworksVfxHandler.prototype.initialize = function() {
    this.app.on('FireworksVfx:Play', this.play, this);
    this.app.on('FireworksVfx:Stop', this.stop, this);
};

// update code called every frame
FireworksVfxHandler.prototype.play = function(type, duration) {
    this.fireworks[type].fire('Play');

    if (duration) 
        CustomCoroutine.Instance.set(() => { this.stop(type); }, duration);
};

FireworksVfxHandler.prototype.stop = function(type) {
    this.fireworks[type].fire('Stop');
};

// swap method called for script hot-reloading
// inherit your script state here
// FireworksVfxHandler.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// BalanceView.js
var BalanceView = pc.createScript('balanceView');

BalanceView.prototype.initialize = function() {

};


BalanceView.prototype.update = function(dt) {

};


// UIAnimator.js
var Uianimator = pc.createScript('uianimator');

Uianimator.attributes.add('opacity', {
    title: 'Opacity Settings',
    type: 'json',
    schema: [
        { name: 'includeChildren', title: 'Apply on Children', type: 'boolean', default: false },
        { name: 'from', title: 'From', min: 0, max: 1, type: 'number', default: 0 },
        { name: 'to', title: 'To', min: 0, max: 1, type: 'number', default: 1 },
        { name: 'duration', title: 'Duration', type: 'number', default: 0.5 },
        { name: 'delay', title: 'Delay', type: 'number', default: 0 },
        { name: 'obj', title: 'Entity', type: 'entity' },
    ],
    array: true
});

Uianimator.attributes.add('scale', {
    title: 'Scale Settings',
    type: 'json',
    schema: [
        { name: 'animType', title: 'Animation Type', type: 'string', default: 'Linear' },
        { name: 'from', title: 'From', type: 'vec3', default: [0, 0, 0] },
        { name: 'to', title: 'To', type: 'vec3', default: [1, 1, 1] },
        { name: 'duration', title: 'Duration', type: 'number', default: 0.5 },
        { name: 'delay', title: 'Delay', type: 'number', default: 0 },
        { name: 'obj', title: 'Entity', type: 'entity' },
    ],
    array: true
});

Uianimator.attributes.add('pos', {
    title: 'Position Settings',
    type: 'json',
    schema: [
        { name: 'animType', title: 'Animation Type', type: 'string', default: 'Linear' },
        { name: 'from', title: 'From', type: 'vec3', default: [0, 0, 0] },
        { name: 'to', title: 'To', type: 'vec3', default: [1, 1, 1] },
        { name: 'duration', title: 'Duration', type: 'number', default: 0.5 },
        { name: 'delay', title: 'Delay', type: 'number', default: 0 },
        { name: 'fromObj', title: 'From Entity', type: 'entity'},
        { name: 'toObj', title: 'To Entity', type: 'entity'},
        { name: 'obj', title: 'Entity', type: 'entity' },
    ],
    array: true
});

// ************************
// * Playcanvas Callbacks *
// ************************

// initialize code called once per entity
Uianimator.prototype.initialize = function () {
    this.on('enable', this.onEnable, this);
    this.entity.on('disable', this.onDisable, this);

    this.duration = 0;
    this.scaleCache = [];
    this.posCache = [];
};

Uianimator.prototype.postInitialize = function () {
    this.onEnable();
};

Uianimator.prototype.onEnable = function () {
    this.animateOpacity(true);
    this.animateScale(true);
    this.animatePosition(true);
};

Uianimator.prototype.onDisable = function (completionDurationFunction) {
    this.animateOpacity(false);
    this.animateScale(false);
    this.animatePosition(false);

    CustomCoroutine.Instance.set(() => {
        if (completionDurationFunction) completionDurationFunction(this.duration);
        this.entity.enabled = false;
    }, this.duration);

};

// ******************
// * Handle Opacity *
// ******************

Uianimator.prototype.animateOpacity = function (enable) {
    for (let i = 0; i < this.opacity.length; i++) {
        let from = enable ? this.opacity[i].from : this.opacity[i].to;
        let to = enable ? this.opacity[i].to : this.opacity[i].from;
        CustomCoroutine.Instance.set(() => {
            if (this.opacity[i].includeChildren)
                this.applyOpacityOnChildren(this.opacity[i], from, to);
            if(this.opacity[i].obj.element)
                TweenWrapper.TweenOpacity(this.opacity[i].obj.element, from, to, this.opacity[i].duration);
        }, this.opacity[i].delay);
        this.updateLargestDuration(this.opacity[i].duration + this.opacity[i].delay);
    }
};

Uianimator.prototype.applyOpacityOnChildren = function (obj, from, to) {
    let root = obj.obj;
    let toFade = [];

    toFade.push(root);

    while (toFade.length > 0) {
        let temp = toFade.pop();

        for (let i = 0; i < temp.children.length; i++) {
            if (temp.children[i])
                toFade.push(temp.children[i]);
            if (temp && temp.element)
                TweenWrapper.TweenOpacity(temp.element, from, to, obj.duration);
        }
    }

    // for (let i = 0; i < root.children.length; i++) {
    //     if (root.children[i] && root.children[i].element)
    //         TweenWrapper.TweenOpacity(root.children[i].element, from, to, obj.duration);
    // }
};

// ****************
// * Handle Scale *
// ****************

Uianimator.prototype.animateScale = function (enable) {
    for (let i = 0; i < this.scale.length; i++) {
        this.updateScaleCache(i);

        let from = enable ? this.scale[i].from : this.scale[i].to;
        let to = enable ? this.scale[i].to : this.scale[i].from;

        this.scale[i].obj.setLocalScale(from.x, from.y, from.z);
        this.scaleCache[i].set(to.x, to.y, to.z);
        CustomCoroutine.Instance.set(() => {
            TweenWrapper.Tween(
                this.scale[i].obj, this.scale[i].obj.getLocalScale(), this.scaleCache[i], this.scale[i].duration,
                undefined, pc[this.scale[i].animType]
            );
        }, this.scale[i].delay);

        this.updateLargestDuration(this.scale[i].duration + this.scale[i].delay);
    }
};

// *******************
// * Handle Position *
// *******************

Uianimator.prototype.animatePosition = function (enable) {
    for (let i = 0; i < this.pos.length; i++) {
        this.updatePosCache(i);

        let fromEntityPos = this.pos[i].fromObj ? this.pos[i].fromObj.getLocalPosition() : undefined;
        let toEntityPos = this.pos[i].toObj ? this.pos[i].toObj.getLocalPosition() : undefined;
        
        let from = enable ? fromEntityPos || this.pos[i].from : toEntityPos || this.pos[i].to;
        let to = enable ? toEntityPos || this.pos[i].to : fromEntityPos || this.pos[i].from;

        this.pos[i].obj.setLocalPosition(from.x, from.y, from.z);
        this.posCache[i].set(to.x, to.y, to.z);
        CustomCoroutine.Instance.set(() => {
            TweenWrapper.Tween(
                this.pos[i].obj, this.pos[i].obj.getLocalPosition(), this.posCache[i], this.pos[i].duration,
                undefined, pc[this.pos[i].animType]
            );
        }, this.pos[i].delay);

        this.updateLargestDuration(this.pos[i].duration + this.pos[i].delay);
    }
};

// ***********
// * Helpers *
// ***********

// update code called every frame
Uianimator.prototype.updateScaleCache = function (index) {
    if (index >= this.scaleCache.length)
        this.scaleCache.push(new pc.Vec3());
};

Uianimator.prototype.updatePosCache = function (index) {
    if (index >= this.posCache.length)
        this.posCache.push(new pc.Vec3());
};

Uianimator.prototype.updateLargestDuration = function (duration) {
    if (this.duration < duration)
        this.duration = duration;
};

// swap method called for script hot-reloading
// inherit your script state here
// Uianimator.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// follow-world-target.js
var FollowWorldTarget = pc.createScript('followWorldTarget');

FollowWorldTarget.attributes.add('target', { type: "entity" });
FollowWorldTarget.attributes.add('camera', { type: "entity" });

// initialize code called once per entity
FollowWorldTarget.prototype.initialize = function () {
    // IMPORTANT: The element must be anchored to the bottom left of the screen
};

// update code called every frame
FollowWorldTarget.prototype.postUpdate = function (dt) {
    // world space position of target
    var worldPos = this.target.getPosition();
    var screenPos = new pc.Vec3();

    // get screen space co-ord
    this.camera.camera.worldToScreen(worldPos, screenPos);

    // check if the entity is in front of the camera
    if (screenPos.z > 0) {
        this.entity.element.enabled = true;

        // Take into account of pixel ratio
        var pixelRatio = this.app.graphicsDevice.maxPixelRatio;
        screenPos.x *= pixelRatio;
        screenPos.y *= pixelRatio;

        var device = this.app.graphicsDevice;

        // Global position of elements is normalised between -1 and 1 on both axis
        this.entity.setPosition(
            ((screenPos.x / device.width) * 2) - 1,
            ((1 - (screenPos.y / device.height)) * 2) - 1,
            0);

    } else {
        this.entity.element.enabled = false;
    }
};

// animViewUpdate.js
var AnimViewUpdate = pc.createScript('animViewUpdate');
AnimViewUpdate.attributes.add('animEntity', { type: 'entity' });

// initialize code called once per entity
AnimViewUpdate.prototype.postInitialize = function () {
    var kick = PlayerPrefs.GetItem("SelectedKick", DataManager.Instance.defaultKick);
    this.OnSkinSelected({
        key: kick,
        skinType: SkinType.Kicks,
    });
    this.app.on(Events.OnSkinSelected, this.OnSkinSelected, this);
};

AnimViewUpdate.prototype.OnSkinSelected = function (data) {
    if (data.skinType === SkinType.Kicks) {
        this.animEntity.anim.baseLayer.play(data.key);
    }
};

// update code called every frame
AnimViewUpdate.prototype.update = function (dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// AnimViewUpdate.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// GemsMenuEventListener.js
var GemsMenuEventListener = pc.createScript('gemsMenuEventListener');

GemsMenuEventListener.attributes.add('counter', { type: 'entity', title: 'Counter' });
GemsMenuEventListener.attributes.add('text', { type: 'entity', title: 'Text' });
GemsMenuEventListener.attributes.add('icon', { type: 'entity', title: 'Icon' });
GemsMenuEventListener.attributes.add('gemsContainer', { type: 'entity', title: 'Gems Container' });

GemsMenuEventListener.attributes.add('test', {
    title: 'Test Settings',
    type: 'json',
    schema: [
        { name: 'gemsToGive', type: 'number', title: 'Gems To Give' },
        { name: 'btn', type: 'entity', title: 'Test Button' },
    ],
});

GemsMenuEventListener.attributes.add('gems', {
    title: 'Gems',
    type: 'json',
    schema: [
        { name: 'gem', type: 'entity', title: 'Gem' }
    ],
    array: true,
});

GemsMenuEventListener.attributes.add('animSettings', {
    title: 'Animation Settings',
    type: 'json',
    schema: [
        { name: 'minSpreadDistance', type: 'number', title: 'Min Spread Distance', default: -125 },
        { name: 'maxSpreadDistance', type: 'number', title: 'Max Spread Distance', default: 125 },
        { name: 'spreadTime', type: 'number', title: 'Spread Time', default: 1 },
        { name: 'spreadRotationSpeed', type: 'number', title: 'Spread Rotation Speed', default: 0.2 },
        { name: 'flyingTime', type: 'number', title: 'Flying Time', default: 0.5 },
        { name: 'flyingStep', type: 'number', title: 'Flying Step', default: 0.1 },
        { name: 'purchaseTweenTime', type: 'number', title: 'Purchase Tween Time', default: 1 },
        { name: 'incrementSteps', type: 'number', title: 'Increment Steps', default: 10 },
        { name: 'incrementStepTime', type: 'number', title: 'Increment Step Time', default: 0.15 },
    ]
});

// initialize code called once per entity
GemsMenuEventListener.prototype.initialize = function () {
    this.currentBalance = 0;
    this.app.on('GemsMenu:UpdateGems', this.setBalance, this);
    this.app.on('GemsMenu:EnableCounterView', this.enableCounterView, this);
    this.balanceRoutines = [];

    this.test.btn.button.on('click', () => {
        DataManager.Instance.setGems(this.test.gemsToGive);
        this.setBalance(DataManager.Instance.gems, false, true);
    });

    this.tweens = {
        circleSpread: undefined,
        moveToGemIcon: undefined,
    };
};

GemsMenuEventListener.prototype.postInitialize = function() {
    this.vec3Cache = [];
};

GemsMenuEventListener.prototype.update = function(dt) {
    if (this.rotateGemsContainer) {
        // this.gemsContainer.rotateLocal(0, 0, this.animSettings.spreadRotationSpeed);
    }
};

GemsMenuEventListener.prototype.enableCounterView = function(enable) {
    if (enable)
        this.counter.enabled = true;
    else
        this.counter.fire('disable');
};

GemsMenuEventListener.prototype.setBalance = function (balance, runCounter, doGemsAnim) {    
    if(this._lastBalance === undefined) {
        this._lastBalance = balance; //parseInt(this.text.element.text) || 0;
        this.text.element.text = balance.toString();
    }

    let from = this._lastBalance; //parseInt(this.text.element.text);
    let to = balance;

    if(balance === this._lastBalance) {
        this._lastBalance = to;
        return;
    }
    this._lastBalance = to;
    
    let dif = to - from;
    let stepsCount = Math.abs(dif) > this.animSettings.incrementSteps ? this.animSettings.incrementSteps : Math.abs(dif);

    if (from == to) return;

    if (doGemsAnim) {
        this.animateGems(dif, from, to);
    }
    else if (runCounter) {
        this.lerpBalance(stepsCount, from, to, dif);
    }
    else
        this.text.element.text = balance.toString();

};

GemsMenuEventListener.prototype.lerpBalance = function (stepsCount, from, to, dif) {

    for (let i = 0; i < this.balanceRoutines.length; i++)
        CustomCoroutine.Instance.clear(this.balanceRoutines[i]);

    this.balanceRoutines = [];

    if (stepsCount > 0) {
        let step = dif / stepsCount;

        for (let i = 0; i < stepsCount; i++) {
            let id = CustomCoroutine.Instance.set(() => {
                from += parseInt(step);
                this.setGemsText(i === stepsCount - 1 ? to : from, true);
            }, i * this.animSettings.incrementStepTime);
            this.balanceRoutines.push(id);
        }
    }
};

GemsMenuEventListener.prototype.animateGems = function (dif, from, to) {
    // console.warn('animateGems: ', dif, from, dif);
    let length = dif < this.gems.length ? dif : this.gems.length;

    this.animteGemsSpreading(length);
    CustomCoroutine.Instance.set(() => { this.flyGemsToCounter(length, from, to, dif); }, this.animSettings.spreadTime);
};

GemsMenuEventListener.prototype.animteGemsSpreading = function (length) {
    
    for (let i = 0; i < length; i++) {
        this.gems[i].gem.enabled = true;
        this.gems[i].gem.setLocalPosition(0, 0, 0);

        let spreadDistanceX = pc.math.random(this.animSettings.minSpreadDistance, this.animSettings.maxSpreadDistance);
        let spreadDistanceY = pc.math.random(this.animSettings.minSpreadDistance, this.animSettings.maxSpreadDistance);

        if (this.vec3Cache.length <= i)
            this.vec3Cache.push(new pc.Vec3(spreadDistanceX, spreadDistanceY, 0));
        else {
            // console.log('setting: ', spreadDistanceX, spreadDistanceY, 0);
            this.vec3Cache[i].set(spreadDistanceX, spreadDistanceY, 0);
        }
        // console.warn('i(', i, '): ', this.vec3Cache[i]);

        TweenWrapper.Tween(
            this.gems[i].gem, this.gems[i].gem.getLocalPosition(), this.vec3Cache[i],
            this.animSettings.spreadTime, undefined, pc.BackOut
        );
    }
};

GemsMenuEventListener.prototype.flyGemsToCounter = function (length, from, to, dif) {

    this.rotateGemsContainer = false;
    let step = dif / length;
    for (let i = 0; i < length; i++) {
        CustomCoroutine.Instance.set(() => {
            from += parseInt(step);
            this.vec3Cache[i].set(0, 0, 0);
            this.vec3Cache[i].add2(this.icon.getLocalPosition(), this.counter.getLocalPosition());
            // console.warn('i(', i, '): ', this.vec3Cache[i]);

            TweenWrapper.Tween(
                this.gems[i].gem, this.gems[i].gem.getLocalPosition(),
                this.vec3Cache[i],
                this.animSettings.flyingTime, () => {
                    this.gems[i].gem.enabled = false;
                    this.setGemsText(i === length - 1 ? to : from, true);
                });
            // this.gems[i].gem.enabled = false;
        }, i * this.animSettings.incrementStepTime / 1.5);
    }
};

GemsMenuEventListener.prototype.setGemsText = function(val, withSound) {
    if (withSound) 
        this.playSound('GemCounter');
    this.text.element.text = val;
};

GemsMenuEventListener.prototype.playSound = function(name) {
    this.app.fire("sound:playSound", name);
};

// TweenRotation.js
var TweenRotation = pc.createScript('tweenRotation');

TweenRotation.attributes.add('RotationSpeed', {type: 'number'});

TweenRotation.prototype.initialize = function() {
    
};

TweenRotation.prototype.update = function(dt) {
    var x = this.entity.getLocalEulerAngles().x;
    var y = this.entity.getLocalEulerAngles().y;
    var z = this.entity.getLocalEulerAngles().z - this.RotationSpeed * dt;
    
    this.entity.setLocalEulerAngles(x,y,z);
};


// intermissionAdManager.js
var IntermissionAdmanager = pc.createScript('intermissionAdmanager');

IntermissionAdmanager.instance = null;

IntermissionAdmanager.prototype.initialize = function () {

    IntermissionAdmanager.instance = this;
    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen Intermission");
    this.app.on(Events.OnLevelCompleted, this.onLevelCompleted, this);

};

IntermissionAdmanager.prototype.onLevelCompleted = function () {
    this.onResume();
};

IntermissionAdmanager.prototype.onResume = function () {
    this.loadingAdScreen.enabled = false;
};

IntermissionAdmanager.prototype.onPause = function () {
    this.loadingAdScreen.enabled = true;
};

IntermissionAdmanager.prototype.update = function (dt) {

};

// noAdsManager.js
var NoAdsManager = pc.createScript('noAdsManager');

NoAdsManager.attributes.add('noAdPopup', { type: 'entity' });
NoAdsManager.attributes.add('adSkippedPopup', { type: 'entity' });
NoAdsManager.attributes.add('resumeBtnNoAd', { type: 'entity' });
NoAdsManager.attributes.add('resumeBtnAdSkip', { type: 'entity' });

// initialize code called once per entity
NoAdsManager.prototype.initialize = function () {

    this.app.on("noAdPopup", this.noAdPopupState, this);
    this.app.on("adSkippedPopup", this.adSkippedPopupState, this);
    this.resumeBtnNoAd.button.on("click", this.onResumeBtnNoAdClicked, this);
    this.resumeBtnAdSkip.button.on("click", this.onresumeBtnAdSkipClicked, this);

};

NoAdsManager.prototype.onResumeBtnNoAdClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.noAdPopup.enabled = false;

};

NoAdsManager.prototype.onresumeBtnAdSkipClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");
    this.adSkippedPopup.enabled = false;

};

NoAdsManager.prototype.noAdPopupState = function () {

    this.noAdPopup.enabled = true;

};

NoAdsManager.prototype.adSkippedPopupState = function () {

    this.adSkippedPopup.enabled = true;

};

// update code called every frame
NoAdsManager.prototype.update = function (dt) {

};

// PathColorSettings.js
var PathColorSettings = pc.createScript('pathColorSettings');

PathColorSettings.attributes.add('pathMat', { type: 'asset', assetType: 'material', title: 'Path Material'});
PathColorSettings.attributes.add('borderMat', { type: 'asset', assetType: 'material', title: 'Border Material'});

PathColorSettings.attributes.add('bigBossSettings', {
    title: 'Big Boss Settings',
    type: 'json',
    schema: [
        { name: 'path', type: 'rgb', title: 'Path' },
        { name: 'border', type: 'rgb', title: 'Border' },
    ]
});

PathColorSettings.attributes.add('bonusLevelSettings', {
    title: 'Bonus Level Settings',
    type: 'json',
    schema: [
        { name: 'path', type: 'rgb', title: 'Path' },
        { name: 'border', type: 'rgb', title: 'Border' },
    ]
});

PathColorSettings.attributes.add('colorSettings', {
    title: 'Color Settings',
    type: 'json',
    schema: [
        { name: 'maxLevel', type: 'number', title: 'Max Level', description: 'Maximum Level till this color settings will be applied.' },
        { name: 'keepDefault', type: 'boolean', title: 'Default Palette' },
        { name: 'path', type: 'rgb', title: 'Path' },
        { name: 'border', type: 'rgb', title: 'Border' },
    ],
    array: true
});

// initialize code called once per entity
PathColorSettings.prototype.initialize = function() {

};

// update code called every frame
PathColorSettings.prototype.update = function(dt) {

};

PathColorSettings.prototype.updateColors = function (info) {

    if (info.isBiggBossLevel) 
        this.implementUpdate(this.bigBossSettings.path, this.bigBossSettings.border);
    else if (info.isBonusLevel) 
        this.implementUpdate(this.bonusLevelSettings.path, this.bonusLevelSettings.border);
    else {
        let result = this.getLevelColors(info.level);
        this.implementUpdate(result.pathColor, result.borderColor);
    }
};

PathColorSettings.prototype.getLevelColors = function (level) {
    let result;

    for (let i = 0; i < this.colorSettings.length; i++) {
        if (!this.colorSettings[i].keepDefault && this.colorSettings[i].maxLevel >= (level % 20)) {
            result = {
                pathColor: this.colorSettings[i].path,
                borderColor: this.colorSettings[i].border
            };
            break;
        }
    }

    return result || { pathColor: this.defaultSettings.path, borderColor: this.defaultSettings.border };
};

PathColorSettings.prototype.implementUpdate = function(pathColor, borderColor) {
    this.pathMat.resource.diffuse.set(pathColor.r, pathColor.g, pathColor.b);
    this.pathMat.resource.update();
    this.borderMat.resource.diffuse.set(borderColor.r, borderColor.g, borderColor.b);
    this.borderMat.resource.update();
};

// swap method called for script hot-reloading
// inherit your script state here
// PathColorSettings.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// ThemeSettings.js
var ThemeSettings = pc.createScript('themeSettings');

// initialize code called once per entity
ThemeSettings.prototype.initialize = function() {

};

// update code called every frame
ThemeSettings.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// ThemeSettings.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// optimizationManager.js
var OptimizationManager = pc.createScript('optimizationManager');

OptimizationManager.attributes.add('soundManager', { type: 'entity' });

OptimizationManager.prototype.postInitialize = function () {
    this.soundManager.enabled = true;
};

// initialize code called once per entity
OptimizationManager.prototype.initialize = function () {

};

// update code called every frame
OptimizationManager.prototype.update = function (dt) {

};

// keyVFX.js
var KeyVfx = pc.createScript('keyVfx');

KeyVfx.attributes.add('circle', { type: 'entity' });
KeyVfx.attributes.add('vfx', { type: 'entity' });

// initialize code called once per entity
KeyVfx.prototype.initialize = function () {

};

KeyVfx.prototype.runVFX = function () {

    this.circle.setLocalScale(0, 0, 0);
    this.circle.sprite.opacity = 1;
    this.circle.enabled = true;

    this.circle
        .tween(this.circle.getLocalScale())
        .to(new pc.Vec3(0.35, 0.35, 0.35), 0.25, pc.SineOut)
        .onComplete( () => {
            TweenWrapper.TweenOpacity(this.circle.sprite, 1, 0, 0.1);
        })
        .start();

    this.vfx.particlesystem.reset();
    this.vfx.particlesystem.play();

};

// update code called every frame
KeyVfx.prototype.update = function (dt) {

};

// versionLabel.js
var VersionLabel = pc.createScript('versionLabel');

VersionLabel.attributes.add('versionText', { type: 'entity' });

VersionLabel.prototype.initialize = function () {
    this.app.on(this.app.events.configManager.initialized, this.onConfigInitialized, this);
};

VersionLabel.prototype.onConfigInitialized = function () {
    this.versionText.element.text = '';//ConfigManager.instance.version;
    this.versionText.enabled = false;
};

// UpgradeItemView.js
var UpgradeItemView = pc.createScript('upgradeItemView');

UpgradeItemView.attributes.add('levelTxt', { type: 'entity', title: 'Level Txt' });
UpgradeItemView.attributes.add('priceTxt', { type: 'entity', title: 'Price Txt' });
UpgradeItemView.attributes.add('hand', { type: 'entity', title: 'Hand' });

UpgradeItemView.attributes.add('purchaseView', { type: 'entity', title: 'Purchase View' });
UpgradeItemView.attributes.add('adView', { type: 'entity', title: 'Ad View' });
UpgradeItemView.attributes.add('disabledView', { type: 'entity', title: 'Disabled View' });

UpgradeItemView.prototype.initialize = function () {
    this.notEnoughGems = false;
    this.isAdReady = false;
    this.entity.on('UpdateView', this.updateView, this);

    
};

UpgradeItemView.prototype.update = function (dt) {
    this.isAdReady = APIMediator.isRewardedAdAvailable('button:mainmenu:upgrade');
};

UpgradeItemView.prototype.updateView = function (levelTxt, price) {
    Debug.log(this.entity.name, ': ', levelTxt, price);
    this.levelTxt.element.text = levelTxt;
    this.priceTxt.element.text = price;

    let isPurchaseAble = DataManager.Instance.gems - price >= 0;
    this.hand.enabled = isPurchaseAble;

    this.purchaseView.enabled = !this.isAdReady || isPurchaseAble;
    this.adView.enabled = this.isAdReady && !isPurchaseAble;
    this.disabledView.enabled = !this.isAdReady && !isPurchaseAble;
    this.notEnoughGems = this.adView.enabled;
};

// rageRvViewController.js
var RageRvViewController = pc.createScript('rageRvViewController');
RageRvViewController.attributes.add('rageRvBtn', { type: 'entity' });
RageRvViewController.attributes.add('closeBtn', { type: 'entity' });
RageRvViewController.attributes.add('loadingAdScreen', { type: 'entity' });

// initialize code called once per entity
RageRvViewController.prototype.initialize = function () {

    RageRvViewController.instance = this;
    this.closeBtn.button.on("click", this.onCloseBtnClicked, this);
    this.rageRvBtn.button.on("click", this.onRageRvBtnClicked, this);

    this.loadingAdScreen = this.app.root.findByName("Loading Ad Screen");

};

RageRvViewController.prototype.onCloseBtnClicked = function () {
    this.app.fire("sound:playSound", "BtnSound");
    this.entity.enabled = false;
    // this.loadingAdScreen.enabled = false;
    this.app.fire('Enable:Loading', false);
};

RageRvViewController.prototype.onRageRvBtnClicked = function () {

    this.app.fire("sound:playSound", "BtnSound");

    if (ConfigManager.instance.environmentType !== ConfigManager.EnvTypes.None) {
        this.app.fire('Enable:Loading', true);
        const resumeGiveRewardCallback = RageRvViewController.instance.resumeGiveReward.bind(this);
        const pauseCallback = RageRvViewController.instance.pauseGame.bind(this);
        const resumeCallback = RageRvViewController.instance.resumeNoReward.bind(this);
        const noADAvailableCallack = RageRvViewController.instance.adNotAvailable.bind(this);
        this.app.fire("showRewardedAD", resumeGiveRewardCallback, pauseCallback, resumeCallback, noADAvailableCallack, 'button:mainmenu:activateragemode');
    } else {
        this.onRewardSuccess();
    }

};

RageRvViewController.prototype.onRewardSuccess = function () {
    Debug.log('RageRvViewController.onRewardSuccess()');
    this.app.fire(Events.OnRageRvCompleted);
    this.onCloseBtnClicked();
};

RageRvViewController.prototype.onRewardFailed = function () {
    this.onCloseBtnClicked();
    Debug.error('RageRvViewController.onRewardFailed()');
};


RageRvViewController.prototype.resumeGiveReward = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire('Enable:Loading', false);
    this.onRewardSuccess();
};

RageRvViewController.prototype.pauseGame = function () {
    this.loadingAdScreen.enabled = true;
    this.app.fire('Enable:Loading', true);
};

RageRvViewController.prototype.resumeNoReward = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire('Enable:Loading', false);
    this.app.fire("adSkippedPopup");
    this.onRewardFailed();
};

RageRvViewController.prototype.adNotAvailable = function () {
    this.loadingAdScreen.enabled = false;
    this.app.fire('Enable:Loading', false);
    this.app.fire("noAdPopup");
    this.onRewardFailed();
};

// update code called every frame
RageRvViewController.prototype.update = function (dt) {

};

// RotationTween.js
var RotationTween = pc.createScript('rotationTween');

RotationTween.attributes.add('yoyo', { type: 'boolean', title: 'Yoyo' });
RotationTween.attributes.add('loop', { type: 'boolean', title: 'Loop' });
RotationTween.attributes.add('type', { type: 'string', title: 'Type', default: 'Linear' });
RotationTween.attributes.add('duration', { type: 'number', title: 'Duration' });
RotationTween.attributes.add('start', { type: 'vec3', title: 'Start' });
RotationTween.attributes.add('end', { type: 'vec3', title: 'End' });

// initialize code called once per entity
RotationTween.prototype.postInitialize = function () {
    this.endRot = new pc.Quat().setFromEulerAngles(this.end.x, this.end.y, this.end.z);
    this.playTween();
};

// update code called every frame
RotationTween.prototype.update = function(dt) {

};

RotationTween.prototype.playTween = function() {
    this.entity.setLocalEulerAngles(this.start.x, this.start.y, this.start.z);
    TweenWrapper.Tween(this.entity, this.entity.getLocalRotation(), this.endRot, this.duration,
        undefined, pc[this.type], this.loop, this.yoyo
    );
};

// swap method called for script hot-reloading
// inherit your script state here
// RotationTween.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// DragEvent.js
var DragEvent = pc.createScript('dragEvent');

DragEvent.attributes.add('captureCount', { title: 'Capture Count', type: 'number', default: -1 });
DragEvent.attributes.add('away', { title: 'Away', type: 'boolean' });
DragEvent.attributes.add('global', { title: 'Global Space', type: 'boolean' });
DragEvent.attributes.add('target', { title: 'Target', type: 'entity' });
// DragEvent.attributes.add('position', { type: 'vec3' });
DragEvent.attributes.add('minDistance', { title: 'Minimum Distance', type: 'number'});

DragEvent.attributes.add('eventName', { title: 'Event To Raise', type: 'string'});
DragEvent.attributes.add('uiSlider', { title: 'UI Slider', type: 'entity'});

DragEvent.attributes.add('args', {
    type: 'json',
    title: 'Arguments',
    schema: [
        { name: 'value', type: 'string'}, 
    ],
    array: true
});

DragEvent.attributes.add('objsActiveState', {
    type: 'json',
    title: 'Entities To Manage',
    schema: [
        { title: 'Enabled', name: 'setActive', type: 'boolean', default: true}, 
        // { name: 'useInput', type: 'boolean', default: true}, 
        { title: 'Entity', name: 'obj', type: 'entity'}, 
    ],
    array: true
});

// initialize code called once per entity
DragEvent.prototype.initialize = function() {
    
    this.capturedCount = 0;
    
    this.onEnable();
    this.on('enable', this.onEnable, this);
};

DragEvent.prototype.onEnable = function() {
    this.capturedCount = 0;
    this.currentCaptureID = 0;

    if (this.entity.element)
        this.entity.element.enabled = true;
};
// update code called every frame
DragEvent.prototype.update = function(dt) {
    
    if (!this.target) return;
    
    let slider = this.uiSlider === null ? this.entity.script.uiSlider : this.uiSlider.script.uiSlider;
    if (!slider.isDragging) return;
    
    let point = this.global ? this.entity.getPosition() : this.entity.getLocalPosition();
    let end = this.global ? this.target.getPosition() : this.target.getLocalPosition();
    
    // // console.log(this.entity.name + ": Distance: " + point.distance(end));

    let condition = this.away ? point.distance(end) >= this.minDistance : point.distance(end) <= this.minDistance;
    
    if (condition && this.checkCaptureSettings())
    {
        this.capturedCount++;
        // console.log("captured: " + this.capturedCount);
        
        this.raiseEvent();
        
        for(let i = 0; i < this.objsActiveState.length; i++)
        {
            this.objsActiveState[i].obj.enabled = this.objsActiveState[i].setActive;
            // this.objsActiveState[i].obj.element.useInput = this.objsActiveState[i].useInput;
        }
    }
    else if (!condition && this.currentCaptureID !== this.capturedCount)
    {
        // console.log(this.entity.name + ": [away]captured: " + this.currentCaptureID);
        this.currentCaptureID = this.capturedCount;
    }
};

DragEvent.prototype.raiseEvent = function() {
    
    if (this.eventName.length < 1) return;
    let args = [];


    for(let i = 0; i < this.args.length; i++)
        args.push(this.args[i].value);
    this.app.fire(this.eventName, args);
};

DragEvent.prototype.checkCaptureSettings = function() {
    // // console.log(this.capturedCount + " < " + this.captureCount + " || " + this.captureCount + " === -1 -> " + this.entity.name);
    let flag1 = this.capturedCount < this.captureCount || this.captureCount === -1;
    // // console.log(this.currentCaptureID + " === " + this.capturedCount + " && " + flag1);
    return  this.currentCaptureID === this.capturedCount && flag1;
};

// swap method called for script hot-reloading
// inherit your script state here
// DragEvent.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// PaginationHandler.js
var PaginationHandler = pc.createScript('paginationHandler');

PaginationHandler.attributes.add('carousel', { type: 'entity', title: 'Pages Carousel' });

PaginationHandler.attributes.add('pages', {
    title: 'Pages',
    type: 'json',
    schema: [
        { name: 'btn', type: 'entity', title: 'Button' },
        { name: 'selected', type: 'entity', title: 'Selected Image' },
    ],
    array: true
});

PaginationHandler.prototype.initialize = function () {
    this.prevPageIndex = 1;
    this.currentPageIndex = 0;
    for (let i = 0; i < this.pages.length; i++) {
        this.pages[i].btn.button.on('click', this.onClickPaginationBtnClick.bind(this, i));
    }

    this.entity.on('SetPage', this.setPage, this);
};

PaginationHandler.prototype.update = function (dt) {

};

PaginationHandler.prototype.onClickPaginationBtnClick = function (index) {
    this.app.fire("sound:playSound", "BtnSound");
    this.setPage(index);

};

PaginationHandler.prototype.setPage = function (index) {
    if (this.currentPageIndex === index) return;

    this.prevPageIndex = this.currentPageIndex;
    this.currentPageIndex = index;

    this.pages[this.prevPageIndex].selected.enabled = false;
    this.pages[this.currentPageIndex].selected.enabled = true;

    this.carousel.fire('SetPage', index);
};


// CarouselHandler.js
var CarouselHandler = pc.createScript('carouselHandler');

CarouselHandler.attributes.add('adjustDuration', { type: 'number', title: 'Adjust Duration' });
CarouselHandler.attributes.add('stoppingSpeed', { type: 'number', title: 'Stopping Speed' });
CarouselHandler.attributes.add('viewport', { type: 'entity', title: 'Viewport' });
CarouselHandler.attributes.add('content', { type: 'entity', title: 'Content' });
CarouselHandler.attributes.add('scrollBar', { type: 'entity', title: 'Scroll Bar' });
CarouselHandler.attributes.add('pagination', { type: 'entity', title: 'Pagination Handler' });
CarouselHandler.attributes.add('pages', {
    type: 'json',
    title: 'Pages',
    schema: [
        { name: 'page', title: 'Page', type: 'entity' },
    ],
    array: true
});
// initialize code called once per entity
CarouselHandler.prototype.initialize = function () {
    this.scrollWidth = this.content.element.width;
    this.perPageWidth = this.scrollWidth / this.pages.length;
    this.currentScrollValue = 0;

    this.entity.on('SetPage', this.tweenToPage, this);

    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onPressDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onPressUp, this);

    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchEnd, this);
    }
};

// update code called every frame
CarouselHandler.prototype.update = function (dt) {

    let scrollChangeSpeed = Math.abs(this.currentScrollValue - this.scrollBar.scrollbar.value);

    if (scrollChangeSpeed >= this.stoppingSpeed && this.isPressed) {
        if (this.pageTween) TweenWrapper.StopTween(this.pageTween);
        this.isScrolling = true;
    }

    if (this.isScrolling) {
        if (scrollChangeSpeed < this.stoppingSpeed && !this.isPressed) {
            this.isScrolling = false;
            this.adjustCarousel();
        }
        this.currentScrollValue = this.scrollBar.scrollbar.value;
    }
};

CarouselHandler.prototype.onTouchStart = function (ev) {
    var touch = ev.changedTouches[0];
    this.touchId = touch.identifier;
    this.startDrag(ev.x, ev.y);
    ev.event.stopPropagation();
};

CarouselHandler.prototype.onTouchEnd = function (ev) {
    // for (var i = 0; i < ev.changedTouches.length; i++) {
    //     var t = ev.changedTouches[i];
    //     if (t.id == this.touchId) {
    //         ev.event.stopImmediatePropagation();
    //         this.touchId = -1;
    //         this.endDrag(t.x, t.y);
    //         return;
    //     }
    // }

    ev.event.stopImmediatePropagation();
    this.endDrag();
};


CarouselHandler.prototype.onPressDown = function (ev) {
    ev.event.stopImmediatePropagation();
    this.startDrag(ev.x, ev.y);
};

CarouselHandler.prototype.onPressUp = function (ev) {
    ev.event.stopImmediatePropagation();
    this.endDrag(ev.x, ev.y);
};

CarouselHandler.prototype.startDrag = function (x, y) {
    this.isPressed = true;
};

CarouselHandler.prototype.endDrag = function (x, y) {
    this.isPressed = false;
};

CarouselHandler.prototype.adjustCarousel = function () {

    let nearestIndex = 0;
    let smallestDiff = this.scrollWidth;
    let b = this.viewport.getPosition().x;
    for (let i = 0; i < this.pages.length; i++) {
        let a = this.pages[i].page.getPosition().x;
        let dif = Math.abs(b - a);

        if (dif < smallestDiff) {
            smallestDiff = dif;
            nearestIndex = i;
        }
    }

    this.tweenToPage(nearestIndex);
    this.pagination.fire('SetPage', nearestIndex);
    // this.scrollbar.scrollbar.value = scrollValue;
};

CarouselHandler.prototype.tweenToPage = function (index) {
    let from = this.scrollBar.scrollbar.value * this.scrollWidth;
    let to = index * (this.scrollWidth / (this.pages.length - 1));
    if (this.pageTween) TweenWrapper.StopTween(this.pageTween);

    this.pageTween = TweenWrapper.TweenNumber(from, to, this.adjustDuration, (obj) => {
        this.currentScrollValue = obj.number / this.scrollWidth;
        this.scrollBar.scrollbar.value = obj.number / this.scrollWidth;
    });
};

// swap method called for script hot-reloading
// inherit your script state here
// CarouselHandler.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// LoadingMenuEventListener.js
var LoadingMenuEventListener = pc.createScript('loadingMenuEventListener');

LoadingMenuEventListener.attributes.add('loading', { type: 'entity', title: 'Loading Screen' });

LoadingMenuEventListener.prototype.initialize = function() {
    this.app.on('Enable:Loading', this.enableLoading, this);

    this.app.on(Events.OnLoadLevel, () => this.enableLoading(true));
    this.app.on(Events.OnLevelLoaded, () => this.enableLoading(false));
};


LoadingMenuEventListener.prototype.enableLoading = function(enable) {
    if (enable) this.loading.enabled = true;
    else this.loading.fire('disable');
};

LoadingMenuEventListener.prototype.showLoadingScreenImmediately = function() {
    this.loading.enabled = true;
};

LoadingMenuEventListener.prototype.hideLoadingScreenImmediately = function() {
    this.loading.enabled = false;
};

// MenuLoading.js
var MenuLoading = pc.createScript('menuLoading');

MenuLoading.attributes.add("nextScene", { type: "string", title: "Next Scene", default: "LoadingScene" });
MenuLoading.attributes.add("text", { type: "entity", title: "Feedback Text" });
MenuLoading.attributes.add("assets", { type: "asset", title: "Assets", array: true });
MenuLoading.attributes.add("logo", { type: "entity", title: "CSR logo" });

MenuLoading.prototype.initialize = function () {
    this.words = ["MAPS", "COINS", "LEVELS", "BITMOJI", "SKILLS", "REWARDS", "SKY", "CHESTS", "FRIENDS", "BOXES", "FUN"];
    this.timeArray = [800, 1000, 500, 1200, 900, 700, 1500, 1100];

    this.textFunction = function () {
        let randomElement = this.words[Math.floor(Math.random() * this.words.length)];
        this.text.element.text = LocalizationManager.getInstance().getLocalizedText('Loading...') + ' ' + randomElement;
        clearInterval(this.textInterval);
        this.textInterval = setInterval(this.textFunction, this.timeArray[Math.floor(Math.random() * this.timeArray.length)]);
    }.bind(this);

    this.textInterval = setInterval(this.textFunction, 800);


    this.loadedAssetsNumber = 0;
    this.onLoaded = function (a) {
        this.loadedAssetsNumber++;
        if (this.loadedAssetsNumber >= this.assets.length) {
            Debug.log("Loading Assets Complete");
            clearInterval(this.textInterval);
            this.loadScene();
        }
    };

    // this.logo.tween(this.logo.getLocalPosition()).to(
    //     new pc.Vec3(this.logo.getLocalPosition().x, this.logo.getLocalPosition().y - 50, this.logo.getLocalPosition().z), 0.25, pc.QuardraticInOut
    // ).yoyo(true).loop(true).start();


    // this.text.tween(this.text.getLocalScale()).to(
    //     new pc.Vec3(0.9, 0.9, 0.9), 0.55, pc.SineInOut
    // ).yoyo(true).loop(true).start();


};

MenuLoading.prototype.postInitialize = function () {
    this.load();
};

MenuLoading.prototype.load = function () {

    for (let i = 0; i < this.assets.length; ++i) {
        var asset = this.assets[i];

        if (asset.loaded) {
            this.onLoaded(asset);
            continue;
        }

        asset.ready(this.onLoaded.bind(this));
        this.app.assets.load(asset);
    }
};

MenuLoading.prototype.loadScene = function () {
    var oldHierarchy = this.app.root.findByName('Root');
    var scene = this.app.scenes.find(this.nextScene);

    this.app.scenes.loadSceneHierarchy(scene.url, function (err, parent) {
        if (!err) {
            oldHierarchy.destroy();
            setTimeout(() => { parent.enabled = true; }, 60);
        }
        else {
            console.error(err);
        }
    });
};

// fps.js
if (typeof(document) !== "undefined") {
    /*! FPSMeter 0.3.1 - 9th May 2013 | https://github.com/Darsain/fpsmeter */
    (function(m,j){function s(a,e){for(var g in e)try{a.style[g]=e[g]}catch(j){}return a}function H(a){return null==a?String(a):"object"===typeof a||"function"===typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function R(a,e){if("array"!==H(e))return-1;if(e.indexOf)return e.indexOf(a);for(var g=0,j=e.length;g<j;g++)if(e[g]===a)return g;return-1}function I(){var a=arguments,e;for(e in a[1])if(a[1].hasOwnProperty(e))switch(H(a[1][e])){case "object":a[0][e]=
    I({},a[0][e],a[1][e]);break;case "array":a[0][e]=a[1][e].slice(0);break;default:a[0][e]=a[1][e]}return 2<a.length?I.apply(null,[a[0]].concat(Array.prototype.slice.call(a,2))):a[0]}function N(a){a=Math.round(255*a).toString(16);return 1===a.length?"0"+a:a}function S(a,e,g,j){if(a.addEventListener)a[j?"removeEventListener":"addEventListener"](e,g,!1);else if(a.attachEvent)a[j?"detachEvent":"attachEvent"]("on"+e,g)}function D(a,e){function g(a,b,d,c){return y[0|a][Math.round(Math.min((b-d)/(c-d)*J,J))]}
    function r(){f.legend.fps!==q&&(f.legend.fps=q,f.legend[T]=q?"FPS":"ms");K=q?b.fps:b.duration;f.count[T]=999<K?"999+":K.toFixed(99<K?0:d.decimals)}function m(){z=A();L<z-d.threshold&&(b.fps-=b.fps/Math.max(1,60*d.smoothing/d.interval),b.duration=1E3/b.fps);for(c=d.history;c--;)E[c]=0===c?b.fps:E[c-1],F[c]=0===c?b.duration:F[c-1];r();if(d.heat){if(w.length)for(c=w.length;c--;)w[c].el.style[h[w[c].name].heatOn]=q?g(h[w[c].name].heatmap,b.fps,0,d.maxFps):g(h[w[c].name].heatmap,b.duration,d.threshold,
    0);if(f.graph&&h.column.heatOn)for(c=u.length;c--;)u[c].style[h.column.heatOn]=q?g(h.column.heatmap,E[c],0,d.maxFps):g(h.column.heatmap,F[c],d.threshold,0)}if(f.graph)for(p=0;p<d.history;p++)u[p].style.height=(q?E[p]?Math.round(O/d.maxFps*Math.min(E[p],d.maxFps)):0:F[p]?Math.round(O/d.threshold*Math.min(F[p],d.threshold)):0)+"px"}function k(){20>d.interval?(x=M(k),m()):(x=setTimeout(k,d.interval),P=M(m))}function G(a){a=a||window.event;a.preventDefault?(a.preventDefault(),a.stopPropagation()):(a.returnValue=
    !1,a.cancelBubble=!0);b.toggle()}function U(){d.toggleOn&&S(f.container,d.toggleOn,G,1);a.removeChild(f.container)}function V(){f.container&&U();h=D.theme[d.theme];y=h.compiledHeatmaps||[];if(!y.length&&h.heatmaps.length){for(p=0;p<h.heatmaps.length;p++){y[p]=[];for(c=0;c<=J;c++){var b=y[p],e=c,g;g=0.33/J*c;var j=h.heatmaps[p].saturation,m=h.heatmaps[p].lightness,n=void 0,k=void 0,l=void 0,t=l=void 0,v=n=k=void 0,v=void 0,l=0.5>=m?m*(1+j):m+j-m*j;0===l?g="#000":(t=2*m-l,k=(l-t)/l,g*=6,n=Math.floor(g),
    v=g-n,v*=l*k,0===n||6===n?(n=l,k=t+v,l=t):1===n?(n=l-v,k=l,l=t):2===n?(n=t,k=l,l=t+v):3===n?(n=t,k=l-v):4===n?(n=t+v,k=t):(n=l,k=t,l-=v),g="#"+N(n)+N(k)+N(l));b[e]=g}}h.compiledHeatmaps=y}f.container=s(document.createElement("div"),h.container);f.count=f.container.appendChild(s(document.createElement("div"),h.count));f.legend=f.container.appendChild(s(document.createElement("div"),h.legend));f.graph=d.graph?f.container.appendChild(s(document.createElement("div"),h.graph)):0;w.length=0;for(var q in f)f[q]&&
    h[q].heatOn&&w.push({name:q,el:f[q]});u.length=0;if(f.graph){f.graph.style.width=d.history*h.column.width+(d.history-1)*h.column.spacing+"px";for(c=0;c<d.history;c++)u[c]=f.graph.appendChild(s(document.createElement("div"),h.column)),u[c].style.position="absolute",u[c].style.bottom=0,u[c].style.right=c*h.column.width+c*h.column.spacing+"px",u[c].style.width=h.column.width+"px",u[c].style.height="0px"}s(f.container,d);r();a.appendChild(f.container);f.graph&&(O=f.graph.clientHeight);d.toggleOn&&("click"===
    d.toggleOn&&(f.container.style.cursor="pointer"),S(f.container,d.toggleOn,G))}"object"===H(a)&&a.nodeType===j&&(e=a,a=document.body);a||(a=document.body);var b=this,d=I({},D.defaults,e||{}),f={},u=[],h,y,J=100,w=[],W=0,B=d.threshold,Q=0,L=A()-B,z,E=[],F=[],x,P,q="fps"===d.show,O,K,c,p;b.options=d;b.fps=0;b.duration=0;b.isPaused=0;b.tickStart=function(){Q=A()};b.tick=function(){z=A();W=z-L;B+=(W-B)/d.smoothing;b.fps=1E3/B;b.duration=Q<L?B:z-Q;L=z};b.pause=function(){x&&(b.isPaused=1,clearTimeout(x),
    C(x),C(P),x=P=0);return b};b.resume=function(){x||(b.isPaused=0,k());return b};b.set=function(a,c){d[a]=c;q="fps"===d.show;-1!==R(a,X)&&V();-1!==R(a,Y)&&s(f.container,d);return b};b.showDuration=function(){b.set("show","ms");return b};b.showFps=function(){b.set("show","fps");return b};b.toggle=function(){b.set("show",q?"ms":"fps");return b};b.hide=function(){b.pause();f.container.style.display="none";return b};b.show=function(){b.resume();f.container.style.display="block";return b};b.destroy=function(){b.pause();
    U();b.tick=b.tickStart=function(){}};V();k()}var A,r=m.performance;A=r&&(r.now||r.webkitNow)?r[r.now?"now":"webkitNow"].bind(r):function(){return+new Date};for(var C=m.cancelAnimationFrame||m.cancelRequestAnimationFrame,M=m.requestAnimationFrame,r=["moz","webkit","o"],G=0,k=0,Z=r.length;k<Z&&!C;++k)M=(C=m[r[k]+"CancelAnimationFrame"]||m[r[k]+"CancelRequestAnimationFrame"])&&m[r[k]+"RequestAnimationFrame"];C||(M=function(a){var e=A(),g=Math.max(0,16-(e-G));G=e+g;return m.setTimeout(function(){a(e+
    g)},g)},C=function(a){clearTimeout(a)});var T="string"===H(document.createElement("div").textContent)?"textContent":"innerText";D.extend=I;window.FPSMeter=D;D.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var X=["toggleOn","theme","heat","graph","history"],Y="position zIndex left top right bottom margin".split(" ")})(window);(function(m,j){j.theme={};var s=j.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",
    textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};j.theme.dark=j.extend({},s,{heatmaps:[{saturation:0.8,lightness:0.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}});j.theme.light=j.extend({},s,{heatmaps:[{saturation:0.5,lightness:0.5}],
    container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}});j.theme.colorful=j.extend({},s,{heatmaps:[{saturation:0.5,lightness:0.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}});j.theme.transparent=
    j.extend({},s,{heatmaps:[{saturation:0.8,lightness:0.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:0.5}})})(window,FPSMeter);    
}

var Fps = pc.createScript('fps');

Fps.prototype.initialize = function () {
    this.fps = new FPSMeter({heat: true, graph: true});
};

Fps.prototype.update = function (dt) {
    this.fps.tick();
};


// tween.js
pc.extend(pc, function () {

    /**
     * @name pc.TweenManager
     * @description Handles updating tweens
     * @param {pc.AppBase} app - The AppBase instance.
     */
    var TweenManager = function (app) {
        this._app = app;
        this._tweens = [];
        this._add = []; // to be added
    };

    TweenManager.prototype = {
        add: function (tween) {
            this._add.push(tween);
            return tween;
        },

        update: function (dt) {
            var i = 0;
            var n = this._tweens.length;
            while (i < n) {
                if (this._tweens[i].update(dt)) {
                    i++;
                } else {
                    this._tweens.splice(i, 1);
                    n--;
                }
            }

            // add any tweens that were added mid-update
            if (this._add.length) {
                for (let i = 0; i < this._add.length; i++) {
                    if (this._tweens.indexOf(this._add[i]) > -1) continue;
                    this._tweens.push(this._add[i]);
                }
                this._add.length = 0;
            }
        }
    };

    /**
     * @name  pc.Tween
     * @param {object} target - The target property that will be tweened
     * @param {pc.TweenManager} manager - The tween manager
     * @param {pc.Entity} entity - The pc.Entity whose property we are tweening
     */
    var Tween = function (target, manager, entity) {
        pc.events.attach(this);

        this.manager = manager;

        if (entity) {
            this.entity = null; // if present the tween will dirty the transforms after modify the target
        }

        this.time = 0;

        this.complete = false;
        this.playing = false;
        this.stopped = true;
        this.pending = false;

        this.target = target;

        this.duration = 0;
        this._currentDelay = 0;
        this.timeScale = 1;
        this._reverse = false;

        this._delay = 0;
        this._yoyo = false;

        this._count = 0;
        this._numRepeats = 0;
        this._repeatDelay = 0;

        this._from = false; // indicates a "from" tween

        // for rotation tween
        this._slerp = false; // indicates a rotation tween
        this._fromQuat = new pc.Quat();
        this._toQuat = new pc.Quat();
        this._quat = new pc.Quat();

        this.easing = pc.Linear;

        this._sv = {}; // start values
        this._ev = {}; // end values
    };

    var _parseProperties = function (properties) {
        var _properties;
        if (properties instanceof pc.Vec2) {
            _properties = {
                x: properties.x,
                y: properties.y
            };
        } else if (properties instanceof pc.Vec3) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z
            };
        } else if (properties instanceof pc.Vec4) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z,
                w: properties.w
            };
        } else if (properties instanceof pc.Quat) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z,
                w: properties.w
            };
        } else if (properties instanceof pc.Color) {
            _properties = {
                r: properties.r,
                g: properties.g,
                b: properties.b
            };
            if (properties.a !== undefined) {
                _properties.a = properties.a;
            }
        } else {
            _properties = properties;
        }
        return _properties;
    };
    Tween.prototype = {
        // properties - js obj of values to update in target
        to: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);
            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            return this;
        },

        from: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);
            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._from = true;

            return this;
        },

        rotate: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);

            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._slerp = true;

            return this;
        },

        start: function () {
            var prop, _x, _y, _z;

            this.playing = true;
            this.complete = false;
            this.stopped = false;
            this._count = 0;
            this.pending = (this._delay > 0);

            if (this._reverse && !this.pending) {
                this.time = this.duration;
            } else {
                this.time = 0;
            }

            if (this._from) {
                for (prop in this._properties) {
                    if (this._properties.hasOwnProperty(prop)) {
                        this._sv[prop] = this._properties[prop];
                        this._ev[prop] = this.target[prop];
                    }
                }

                if (this._slerp) {
                    this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);

                    _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    _z = this._properties.z !== undefined ? this._properties.z : this.target.z;
                    this._fromQuat.setFromEulerAngles(_x, _y, _z);
                }
            } else {
                for (prop in this._properties) {
                    if (this._properties.hasOwnProperty(prop)) {
                        this._sv[prop] = this.target[prop];
                        this._ev[prop] = this._properties[prop];
                    }
                }

                if (this._slerp) {
                    _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    _z = this._properties.z !== undefined ? this._properties.z : this.target.z;

                    if (this._properties.w !== undefined) {
                        this._fromQuat.copy(this.target);
                        this._toQuat.set(_x, _y, _z, this._properties.w);
                    } else {
                        this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);
                        this._toQuat.setFromEulerAngles(_x, _y, _z);
                    }
                }
            }

            // set delay
            this._currentDelay = this._delay;

            // add to manager when started
            this.manager.add(this);

            this.fire("start");

            return this;
        },

        pause: function () {
            this.playing = false;
        },

        resume: function () {
            this.playing = true;
        },

        stop: function () {
            this.playing = false;
            this.stopped = true;
        },

        delay: function (delay) {
            this._delay = delay;
            this.pending = true;

            return this;
        },

        repeat: function (num, delay) {
            this._count = 0;
            this._numRepeats = num;
            if (delay) {
                this._repeatDelay = delay;
            } else {
                this._repeatDelay = 0;
            }

            return this;
        },

        loop: function (loop) {
            if (loop) {
                this._count = 0;
                this._numRepeats = Infinity;
            } else {
                this._numRepeats = 0;
            }

            return this;
        },

        yoyo: function (yoyo) {
            this._yoyo = yoyo;
            return this;
        },

        reverse: function () {
            this._reverse = !this._reverse;

            return this;
        },

        chain: function () {
            var n = arguments.length;

            while (n--) {
                if (n > 0) {
                    arguments[n - 1]._chained = arguments[n];
                } else {
                    this._chained = arguments[n];
                }
            }

            return this;
        },

        onStart: function (callback) {
            this.on('start', callback);
            return this;
        },

        onUpdate: function (callback) {
            this.on('update', callback);
            return this;
        },

        onComplete: function (callback) {
            this.on('complete', callback);
            return this;
        },

        onLoop: function (callback) {
            this.on('loop', callback);
            return this;
        },

        update: function (dt) {
            if (this.stopped) return false;

            if (!this.playing) return true;

            if (!this._reverse || this.pending) {
                this.time += dt * this.timeScale;
            } else {
                this.time -= dt * this.timeScale;
            }

            // delay start if required
            if (this.pending) {
                if (this.time > this._currentDelay) {
                    if (this._reverse) {
                        this.time = this.duration - (this.time - this._currentDelay);
                    } else {
                        this.time -= this._currentDelay;
                    }
                    this.pending = false;
                } else {
                    return true;
                }
            }

            var _extra = 0;
            if ((!this._reverse && this.time > this.duration) || (this._reverse && this.time < 0)) {
                this._count++;
                this.complete = true;
                this.playing = false;
                if (this._reverse) {
                    _extra = this.duration - this.time;
                    this.time = 0;
                } else {
                    _extra = this.time - this.duration;
                    this.time = this.duration;
                }
            }

            var elapsed = (this.duration === 0) ? 1 : (this.time / this.duration);

            // run easing
            var a = this.easing(elapsed);

            // increment property
            var s, e;
            for (var prop in this._properties) {
                if (this._properties.hasOwnProperty(prop)) {
                    s = this._sv[prop];
                    e = this._ev[prop];
                    this.target[prop] = s + (e - s) * a;
                }
            }

            if (this._slerp) {
                this._quat.slerp(this._fromQuat, this._toQuat, a);
            }

            // if this is a entity property then we should dirty the transform
            if (this.entity) {
                this.entity._dirtifyLocal();

                // apply element property changes
                if (this.element && this.entity.element) {
                    this.entity.element[this.element] = this.target;
                }

                if (this._slerp) {
                    this.entity.setLocalRotation(this._quat);
                }
            }

            this.fire("update", dt);

            if (this.complete) {
                var repeat = this._repeat(_extra);
                if (!repeat) {
                    this.fire("complete", _extra);
                    if (this.entity)
                        this.entity.off('destroy', this.stop, this);
                    if (this._chained) this._chained.start();
                } else {
                    this.fire("loop");
                }

                return repeat;
            }

            return true;
        },

        _repeat: function (extra) {
            // test for repeat conditions
            if (this._count < this._numRepeats) {
                // do a repeat
                if (this._reverse) {
                    this.time = this.duration - extra;
                } else {
                    this.time = extra; // include overspill time
                }
                this.complete = false;
                this.playing = true;

                this._currentDelay = this._repeatDelay;
                this.pending = true;

                if (this._yoyo) {
                    // swap start/end properties
                    for (var prop in this._properties) {
                        var tmp = this._sv[prop];
                        this._sv[prop] = this._ev[prop];
                        this._ev[prop] = tmp;
                    }

                    if (this._slerp) {
                        this._quat.copy(this._fromQuat);
                        this._fromQuat.copy(this._toQuat);
                        this._toQuat.copy(this._quat);
                    }
                }

                return true;
            }
            return false;
        }

    };


    /**
     * Easing methods
     */

    var Linear = function (k) {
        return k;
    };

    var QuadraticIn = function (k) {
        return k * k;
    };

    var QuadraticOut = function (k) {
        return k * (2 - k);
    };

    var QuadraticInOut = function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    };

    var CubicIn = function (k) {
        return k * k * k;
    };

    var CubicOut = function (k) {
        return --k * k * k + 1;
    };

    var CubicInOut = function (k) {
        if ((k *= 2) < 1) return 0.5 * k * k * k;
        return 0.5 * ((k -= 2) * k * k + 2);
    };

    var QuarticIn = function (k) {
        return k * k * k * k;
    };

    var QuarticOut = function (k) {
        return 1 - (--k * k * k * k);
    };

    var QuarticInOut = function (k) {
        if ((k *= 2) < 1) return 0.5 * k * k * k * k;
        return -0.5 * ((k -= 2) * k * k * k - 2);
    };

    var QuinticIn = function (k) {
        return k * k * k * k * k;
    };

    var QuinticOut = function (k) {
        return --k * k * k * k * k + 1;
    };

    var QuinticInOut = function (k) {
        if ((k *= 2) < 1) return 0.5 * k * k * k * k * k;
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    };

    var SineIn = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 1 - Math.cos(k * Math.PI / 2);
    };

    var SineOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return Math.sin(k * Math.PI / 2);
    };

    var SineInOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 0.5 * (1 - Math.cos(Math.PI * k));
    };

    var ExponentialIn = function (k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    };

    var ExponentialOut = function (k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    };

    var ExponentialInOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        if ((k *= 2) < 1) return 0.5 * Math.pow(1024, k - 1);
        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    };

    var CircularIn = function (k) {
        return 1 - Math.sqrt(1 - k * k);
    };

    var CircularOut = function (k) {
        return Math.sqrt(1 - (--k * k));
    };

    var CircularInOut = function (k) {
        if ((k *= 2) < 1) return -0.5 * (Math.sqrt(1 - k * k) - 1);
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    };

    var ElasticIn = function (k) {
        var s, a = 0.1, p = 0.4;
        if (k === 0) return 0;
        if (k === 1) return 1;
        if (!a || a < 1) {
            a = 1; s = p / 4;
        } else s = p * Math.asin(1 / a) / (2 * Math.PI);
        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    };

    var ElasticOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if (k === 0) return 0;
        if (k === 1) return 1;
        if (!a || a < 1) {
            a = 1; s = p / 4;
        } else s = p * Math.asin(1 / a) / (2 * Math.PI);
        return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
    };

    var ElasticInOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if (k === 0) return 0;
        if (k === 1) return 1;
        if (!a || a < 1) {
            a = 1; s = p / 4;
        } else s = p * Math.asin(1 / a) / (2 * Math.PI);
        if ((k *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
    };

    var BackIn = function (k) {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
    };

    var BackOut = function (k) {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    };

    var BackInOut = function (k) {
        var s = 1.70158 * 1.525;
        if ((k *= 2) < 1) return 0.5 * (k * k * ((s + 1) * k - s));
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    };

    var BounceOut = function (k) {
        if (k < (1 / 2.75)) {
            return 7.5625 * k * k;
        } else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        } else if (k < (2.5 / 2.75)) {
            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
        }
        return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;

    };

    var BounceIn = function (k) {
        return 1 - BounceOut(1 - k);
    };

    var BounceInOut = function (k) {
        if (k < 0.5) return BounceIn(k * 2) * 0.5;
        return BounceOut(k * 2 - 1) * 0.5 + 0.5;
    };

    return {
        TweenManager: TweenManager,
        Tween: Tween,
        Linear: Linear,
        QuadraticIn: QuadraticIn,
        QuadraticOut: QuadraticOut,
        QuadraticInOut: QuadraticInOut,
        CubicIn: CubicIn,
        CubicOut: CubicOut,
        CubicInOut: CubicInOut,
        QuarticIn: QuarticIn,
        QuarticOut: QuarticOut,
        QuarticInOut: QuarticInOut,
        QuinticIn: QuinticIn,
        QuinticOut: QuinticOut,
        QuinticInOut: QuinticInOut,
        SineIn: SineIn,
        SineOut: SineOut,
        SineInOut: SineInOut,
        ExponentialIn: ExponentialIn,
        ExponentialOut: ExponentialOut,
        ExponentialInOut: ExponentialInOut,
        CircularIn: CircularIn,
        CircularOut: CircularOut,
        CircularInOut: CircularInOut,
        BackIn: BackIn,
        BackOut: BackOut,
        BackInOut: BackInOut,
        BounceIn: BounceIn,
        BounceOut: BounceOut,
        BounceInOut: BounceInOut,
        ElasticIn: ElasticIn,
        ElasticOut: ElasticOut,
        ElasticInOut: ElasticInOut
    };
}());

// Expose prototype methods and create a default tween manager on the AppBase
(function () {
    // Add pc.AppBase#addTweenManager method
    pc.AppBase.prototype.addTweenManager = function () {
        this._tweenManager = new pc.TweenManager(this);

        this.on("update", function (dt) {
            this._tweenManager.update(dt);
        });
    };

    pc.AppBase.prototype.stopAllTweens = function (target) {
        for (var i = this._tweenManager._tweens.length - 1; i > -1; i--) {
            if (this._tweenManager._tweens[i].entity === target) {
                this._tweenManager._tweens[i].stop();
            }
        }
    };

    // Add pc.AppBase#tween method
    pc.AppBase.prototype.tween = function (target) {
        return new pc.Tween(target, this._tweenManager);
    };

    // Add pc.Entity#tween method
    pc.Entity.prototype.tween = function (target, options) {
        var tween = this._app.tween(target);
        tween.entity = this;

        this.once('destroy', tween.stop, tween);

        if (options && options.element) {
            // specifiy a element property to be updated
            tween.element = options.element;
        }
        return tween;
    };

    // Create a default tween manager on the AppBase
    var AppBase = pc.AppBase.getApplication();
    if (AppBase) {
        AppBase.addTweenManager();
    }
})();

// rotateLocalEntity.js
var RotateLocalEntity = pc.createScript('rotateLocalEntity');

RotateLocalEntity.attributes.add("vec3Speed", { type: "vec3" });
RotateLocalEntity.attributes.add("vec3", { type: "vec3" });

// initialize code called once per entity
RotateLocalEntity.prototype.initialize = function () {

};

// update code called every frame
RotateLocalEntity.prototype.update = function (dt) {

    this.entity.rotateLocal(this.vec3.x * this.vec3Speed.x * dt, this.vec3.y * this.vec3Speed.y * dt, this.vec3.z * this.vec3Speed.z * dt);

};

// loadingUI.js
var LoadingUi = pc.createScript('loadingUi');

LoadingUi.prototype.initialize = function() {

};

LoadingUi.prototype.update = function(dt) {

};


// keyboardHandler.js
var KeyboardHandler = pc.createScript('keyboardHandler');

KeyboardHandler.prototype.initialize = function () {

    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);

};

KeyboardHandler.prototype.onKeyDown = function (event) {

    if (event.key === pc.KEY_SPACE) {
        this.app.fire("onSpaceKeyClicked");
    }

    if (event.key === pc.KEY_LEFT || event.key === pc.KEY_RIGHT) {
        this.app.fire("onLeftRightClicked");
    }

    if (event.key === pc.KEY_LEFT) {
        this.app.fire("PlayerDodge:Left");
    }

    if (event.key === pc.KEY_RIGHT) {
        this.app.fire("PlayerDodge:Right");
    }

};

KeyboardHandler.prototype.update = function (dt) {

};

// TweenWrapper.js
/*jshint esversion: 6 */

const TweenWrapper_App = pc.Application.getApplication();

const TweenWrapper = {

    // * FOR *
    // SCALE
    // POSITION
    // ROTATION
    Tween: function(entity, start, end, time, onComplete, type, isLoop, isYoyo, onUpdate, delayTime)
    {
        return entity.tween(start)
            .to(end, time, type || pc.Linear)
            .start()
            .loop(isLoop === true)
            .yoyo(isYoyo === true)
            .delay(delayTime)
            .onComplete( function(){ if(onComplete) onComplete();})
            .onUpdate( function () { if (onUpdate) onUpdate(); });
    },

    TweenOpacity: function (element, from, to, time, onComplete, type, isLoop, isYoyo) {

        element.opacity = from;

        let obj = { opacity: from };
        let toIncrease = from < to;

        return TweenWrapper_App.tween(obj)
            .to({ opacity: to }, time, type || pc.Linear)
            .onUpdate( function () {
                element.opacity = obj.opacity;
                if (toIncrease ? element.opacity >= to : element.opacity <= to)
                    if (onComplete) onComplete();
            }, this)
            .loop(isLoop === true)
            .yoyo(isYoyo === true)
            .start();
    },

    TweenColor: function(element, oldColor, newColor, time, onComplete) {

        if(element.color === newColor)
            return;

        var color = oldColor.clone();

        return TweenWrapper_App
            .tween(color)
            .to(newColor, time, pc.Linear)
            .onUpdate( function () {
            element.color = color;

            if(element.color === color)
                if(onComplete) onComplete();
        }.bind(this))
            .start();
    },

    // can be used in update if needed
    TweenNumberO: function(from, to, speed, element, label) {

        // console.log(from + " -> " + to);
        if(from !== to) // if 'from' is not equal to 'to'
        {
            var eq1 = pc.math.lerp(from, to, speed);
            var eq2 = from < to ? from >= to : from <= to;
            from =  from < to ? Math.ceil(eq1): Math.floor(eq1);
            // console.log("visibleScore -> " + from);

            if(eq2)
            {
                from = to;   
                if(element !== undefined)
                    element.text = label + from;
                return [false, from];
            }

            if(element !== undefined)
                element.text = label + from;
        }
        else
            return [false, from];

        return [true, from];
    },

    TweenNumber: function(from, to, time, updateFunction, onComplete, type, isLoop, isYoyo) {

        // console.log(from + " -> " + to);
        if(from !== to) // if 'from' is not equal to 'to'
        {
            let obj = { number: from};
            return TweenWrapper_App.tween(obj)
                .to({ number: to}, time, type || pc.Linear)
                .loop(isLoop === true)
                .yoyo(isYoyo === true)
                .onUpdate( updateFunction.bind(this, obj))
                .onComplete( function(){ if(onComplete) onComplete(); })
                .start();
        }
    },

    StopTween: function(tween) {
        if(tween)
            tween.stop();
    }
};

// allow-mesh-colliders-scaling-patch.js

(function () {

    function extractParams(funcStr) {
        const match = funcStr.match(/(?:function\s*[^\(]*\(|\(?\s*)([^)]*)\)?\s*=>|\(([^)]*)\)/);
        if (!match) return [];

        // Extract either match[1] or match[2] (handles different function types)
        const params = match[1] || match[2];

        return params ? params.split(',').map(p => p.trim()).filter(Boolean) : [];
    }

    const app = (pc.AppBase || pc.Application).getApplication();
    app.once('start', () => {

        pc.getScaleUniqueMeshId = (meshId, scale) => {
            const rawMeshId = Math.floor(meshId);
            const precision = 2; //decimal places, 1 means rounding to 0.1, 2 to ~0.01, 3 to ~0.001 etc.
            const roundingPower = Math.pow(10, precision);
            let x = Math.abs(scale.x * roundingPower);
            let y = Math.abs(scale.y * roundingPower);
            let z = Math.abs(scale.z * roundingPower);
            return Number(`${rawMeshId}.${x}${y}${z}`);
        };

        if (typeof Ammo === 'undefined' || !app.systems.collision.implementations.mesh) return console.log('[MeshCollisionSystemImpl] could not detect Ammo');

        const originalCreateAmmoMeshFunction = app.systems.collision.implementations.mesh.createAmmoMesh.toString();

        const paramNames = extractParams(originalCreateAmmoMeshFunction);
        if (paramNames.length !== 5) {
            return console.warn('[PATCH] Could not patch MeshCollisionSystemImpl: mesh.id is not used in this version of the engine');
        }

        const meshParameterName = paramNames[0];
        const scaleParameterName = paramNames[3];


        if (originalCreateAmmoMeshFunction.includes(`${meshParameterName}.id`)) {
            let match = originalCreateAmmoMeshFunction.match(/(?<=\.name===)[^)]+/);
            const semanticPositionLocalName = match ? match[0] : null;
            let patchedCreateAmmoMeshFunction = originalCreateAmmoMeshFunction.replaceAll(`${meshParameterName}.id`, `pc.getScaleUniqueMeshId(${meshParameterName}.id, ${scaleParameterName})`);
            if (originalCreateAmmoMeshFunction.includes('element.name === SEMANTIC_POSITION')) {
                patchedCreateAmmoMeshFunction = patchedCreateAmmoMeshFunction.replaceAll('element.name === SEMANTIC_POSITION', 'element.name === pc.SEMANTIC_POSITION');
            } else {
                if (semanticPositionLocalName && match) patchedCreateAmmoMeshFunction = patchedCreateAmmoMeshFunction.replaceAll(`.name===${semanticPositionLocalName}`, `.name===pc.SEMANTIC_POSITION`);
            }
            console.log('[PATCH] MeshCollisionSystemImpl has been patched to support mesh collider scaling');
            app.systems.collision.implementations.mesh.createAmmoMesh = new Function('return ' + patchedCreateAmmoMeshFunction)();
        } else {
            console.warn('[PATCH] Could not patch MeshCollisionSystemImpl: mesh.id is not used in this version of the engine');
        }

    })
})();



// famobiSafeArea.js
/**
 * A script that automatically adds required gaps & resizes game canvas to fit Famobi interstitial banner.
 * 
 * How to use: just attach that script to the Root component of your Playcanvas app.
 * To test how it works, please use 'Debug / Testing Mode' attribute of the script. Don't forget to disable debug mode before publising a build! :)
 * 
 *  If you are using Window Resize API (window.onresize(...) or window.addEventListener('resize', ....)),
 *  please get rid of these. Instead , please listen to 'famobi:resizeCanvas' in-app event. For example: 
 * 
 *      this.app.on('famobi:resizeCanvas', function(canvasWidth, canvasHeight) {
 *          console.log('Adjusted canvas size is ', canvasWidth, canvasHeight);
 *      })
 * 
 * 
 * @author Igor Parada / ©Famobi 2023
 */

var FamobiSafeArea = pc.createScript('famobiSafeArea');

FamobiSafeArea.attributes.add('resizeOnInput', {
    type: 'boolean',
    title: 'Resize when input received',
    description: "Resize the canvas every time an input event is received? This may help if the game reports incorrect input positions due to Famobi offsets but may cause slight CPU overhead in some games.",
    default: true
});

FamobiSafeArea.attributes.add('forceBodyBackgroundColor', {
    type: 'boolean',
    default: true,
    title: 'Change <body> background',
    default: true
});

FamobiSafeArea.attributes.add('bodyBackgroundColor', {
    type: 'rgba',
    title: 'Body Background Color',
    description: "Background color of body element (where the banner should be displayed). Make sure the checkbox above is checked!",
    default: [0, 0, 0, 1.0]
})

FamobiSafeArea.attributes.add('debugConfig', {
    type: 'json',
    title: 'Debug / Testing Mode',
    description: 'Force safe areas to be applied to the UI. Useful testing layouts without a device.',
    schema: [{
        name: 'active',
        type: 'boolean',
        default: false
    }, {
        name: 'top',
        type: 'number',
        default: 0
    }, {
        name: 'bottom',
        type: 'number',
        default: 0
    }, {
        name: 'left',
        type: 'number',
        default: 0
    }, {
        name: 'right',
        type: 'number',
        default: 0
    }]
});



FamobiSafeArea.prototype.initialize = function () {
    this.app.graphicsDevice.on('resizecanvas', this._onCanvasResize, this);

    this.on('attr:debugConfig', function (value, prev) {
        this._updateCanvasSizeAndPosition();
    }, this);

    this.on('attr:bodyBackgroundColor', function (value, prev) {
        this._backgroundColorUpdate();
    }, this);

    this.on('destroy', function () {
        this.app.graphicsDevice.off('resizecanvas', this._onCanvasResize, this);
    }, this);


    if (window.GameInterface && typeof window.GameInterface.onOffsetChange === 'function') {
        window.GameInterface.onOffsetChange(offsets => this._onCanvasResize());
    } else if (window.famobi && typeof window.famobi.onOffsetChange === 'function') {
        window.famobi.onOffsetChange(offsets => this._onCanvasResize());
    }


    /** viewport resize handling **/
    if (window.visualViewport) {
        this.useVisualViewport = true;
        window.visualViewport.addEventListener('resize', this._onCanvasResize.bind(this));
    } else {
        this.useVisualViewport = false;
        window.addEventListener('resize', this._onCanvasResize.bind(this), true);
    }

    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this._dispatchInputEvent, this);
    } 
    if (this.app.mouse) {
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this._dispatchInputEvent, this);
    } 

    this._onCanvasResize();

    this.app.getFamobiAdjustedCanvasSize = () => {
        return {
            width: this._currentCanvasWidth,
            height: this._currentCanvasHeight
        }
    }

};

FamobiSafeArea.prototype._dispatchInputEvent = function() {
    if(this.resizeOnInput) {
        this._updateCanvasSizeAndPosition();
    } else {
        if(!this._firstInputEventReceived) {
            this._firstInputEventReceived = true;
            this._onCanvasResize();
        }
    }
}

FamobiSafeArea.prototype._onCanvasResize = function () {
    this._updateCanvasSizeAndPosition();

    /* known issue on iOS - window.resize may report incorrect window size, so we slightly delay the resize logic */
    if (pc.platform.ios || pc.platform.mobile) {
        setTimeout(() => this._updateCanvasSizeAndPosition(), 1500);
    }
};


FamobiSafeArea.prototype._updateCanvasSizeAndPosition = function () {

    let topPixels = 0;
    let bottomPixels = 0;
    let leftPixels = 0;
    let rightPixels = 0;

    if (this.debugConfig.active) {
        topPixels = this.debugConfig.top;
        bottomPixels = this.debugConfig.bottom;
        leftPixels = this.debugConfig.left;
        rightPixels = this.debugConfig.right;
    } else {
        let famobiOffsets = { left: 0, top: 0, right: 0, bottom: 0 };
        if (window.GameInterface && window.GameInterface.getOffsets) {
            famobiOffsets = window.GameInterface.getOffsets();
        } else if (window.famobi && window.famobi.getOffsets) {
            famobiOffsets = window.famobi.getOffsets();
        }

        topPixels = famobiOffsets.top;
        bottomPixels = famobiOffsets.bottom;
        leftPixels = famobiOffsets.left;
        rightPixels = famobiOffsets.right;
    }

    const screenResHeight = this.useVisualViewport ? window.visualViewport.height : window.innerHeight;
    const screenResWidth = this.useVisualViewport ? window.visualViewport.width : window.innerWidth;

    leftPixels = Math.min(screenResWidth * 0.9, leftPixels);
    rightPixels = Math.min(screenResWidth * 0.9, rightPixels);
    topPixels = Math.min(screenResHeight * 0.9, topPixels);
    bottomPixels = Math.min(screenResHeight * 0.9, bottomPixels);

    const availableWidth = screenResWidth - leftPixels - rightPixels;
    const availableHeight = screenResHeight - topPixels - bottomPixels;

    this._currentCanvasWidth = availableWidth;
    this._currentCanvasHeight = availableHeight;

    this.app.setCanvasResolution(pc.RESOLUTION_FIXED, availableWidth, availableHeight);
    this.app.graphicsDevice.canvas.style.width = availableWidth + 'px';
    this.app.graphicsDevice.canvas.style.height = availableHeight + 'px';

    this.app.graphicsDevice.canvas.style.left = leftPixels + 'px';
    this.app.graphicsDevice.canvas.style.right = rightPixels + 'px';
    this.app.graphicsDevice.canvas.style.top = topPixels + 'px';
    this.app.graphicsDevice.canvas.style.bottom = bottomPixels + 'px';

    if (this.debugConfig.active) {
        console.log(`Canvas size set to ${availableWidth}x${availableHeight} (window ${window.innerWidth}x${window.innerHeight})`);
    }

    this.app.fire('famobi:resizeCanvas', availableWidth, availableHeight);

    this._backgroundColorUpdate();
};

FamobiSafeArea.prototype._backgroundColorUpdate = function () {
    if (!this.forceBodyBackgroundColor) return;
    const parentElement = this.app.graphicsDevice.canvas.parentElement;
    if (parentElement) {
        parentElement.style.background = this.bodyBackgroundColor.toString();
    }
}


FamobiSafeArea.prototype.update = function (dt) {

};


/** Fix for camera/input **/

pc.CameraComponent.prototype.screenToWorld = function (screenx, screeny, cameraz, worldCoord) {
    const device = this.system.app.graphicsDevice;
    const w = device.width / device.maxPixelRatio;
    const h = device.height / device.maxPixelRatio;
    return this._camera.screenToWorld(screenx, screeny, cameraz, w, h, worldCoord);
};


pc.CameraComponent.prototype.worldToScreen = function (worldCoord, screenCoord) {
    const device = this.system.app.graphicsDevice;
    const w = device.width / device.maxPixelRatio;
    const h = device.height / device.maxPixelRatio;
    return this._camera.worldToScreen(worldCoord, w, h, screenCoord);
};

// scaleManager.js
/* jshint esversion: 6 */
var ScaleManager = pc.createScript('scaleManager');

ScaleManager.attributes.add('minPortraitScreenRatio', {
    type: 'number',
    default: 0.5625
});

ScaleManager.attributes.add('landscapeBlend', {
    type: 'number',
    default: 0.75
});

ScaleManager.attributes.add('portraitBlend', {
    type: 'number',
    default: 0
});


ScaleManager.getInstance = function () {
    if (!ScaleManager._instance) console.error('ScaleManager is not initialized yet');
    return ScaleManager._instance;
};

ScaleManager.prototype.initialize = function () {
    ScaleManager._app = this.app;
    if (!ScaleManager._instance) {
        ScaleManager._instance = this;
    }

    this.app.graphicsDevice.on('resizecanvas', this.onCanvasResized, this);
    this.on('attr:landscapeBlend', this.refresh, this);
    this.on('attr:portraitBlend', this.refresh, this);
    this.on('attr:mainLight', this.refresh, this);
    
    this.onCanvasResized(this.app.graphicsDevice.canvas.width, this.app.graphicsDevice.canvas.height);
};

ScaleManager.prototype.update = function(dt) {
    
};

ScaleManager.prototype.refresh = function() {
    this.onCanvasResized(this.app.graphicsDevice.canvas.width, this.app.graphicsDevice.canvas.height);
};


ScaleManager.prototype.onCanvasResized = function(width, height) {
    const isLandscape = this.isLandscape();
    const scaleBlend = isLandscape ? this.landscapeBlend : this.portraitBlend;
    const fireResizedEvent = () => {
        this.app.fire(EventTypes.Screen.RESIZED, width, height, isLandscape);
        this.app.fire(EventTypes.Screen.SET_SCALE_BLEND, scaleBlend);
    };
    
    setTimeout(() => fireResizedEvent(), 0);
    
    if(pc.platform.ios) {
        setTimeout(() => fireResizedEvent(), 500);
    }
};


ScaleManager.prototype.isLandscape = function() {
    return (this.app.graphicsDevice.canvas.width / this.app.graphicsDevice.canvas.height) >= this.minPortraitScreenRatio;    
};


ScaleManager.prototype.isPortrait = function() {
    return !this.isLandscape();
};

ScaleManager.prototype.getWidth = function() {
    return this.app.graphicsDevice.canvas.width * this.app.graphicsDevice.maxPixelRatio;
};


ScaleManager.prototype.getHeight = function() {
    return this.app.graphicsDevice.canvas.height * this.app.graphicsDevice.maxPixelRatio;
};


// performanceMonitor.js
var PerformanceMonitor = pc.createScript('performanceMonitor');

PerformanceMonitor.attributes.add('autoAdjustQuality', {
    type: 'boolean',
    default: true
});

PerformanceMonitor.attributes.add('autoShadows', {
    title: "Auto shadows",
    type: 'boolean',
    deafult: false
});

PerformanceMonitor.attributes.add('shadowLights', {
    title: "Shadow lights",
    type: 'entity',
    array: true
});

PerformanceMonitor.attributes.add('debugOutput', {
    type: 'boolean',
    default: false
});


PerformanceMonitor.attributes.add('maxDevicePixelRatio', {
    type: 'number',
    default: 3
});

PerformanceMonitor.attributes.add('minDevicePixelRatio', {
    type: 'number',
    default: 1.0
});

PerformanceMonitor.attributes.add('pixelRatioStep', {
    type: 'number',
    default: 0.25,
    min: 0,
    max: 1
});

PerformanceMonitor.attributes.add('targetFPS', {
    type: 'number',
    default: 60
});

PerformanceMonitor.attributes.add('acceptableFPS', {
    type: 'number',
    default: 45
});

PerformanceMonitor.attributes.add('minAcceptableFPS', {
    type: 'number',
    default: 30
});

PerformanceMonitor.attributes.add('fpsCheckInterval', {
    type: 'number',
    default: 1.5
});

PerformanceMonitor.attributes.add('sampleFrames', {
    type: 'number',
    default: 100
});

PerformanceMonitor.attributes.add('confidenceInterval', {
    type: 'number',
    default: 0.8,
    min: 0.4,
    max: 1
});




PerformanceMonitor.prototype.initialize = function () {
    this._shadowsTurnOffCounter = 0;
    this.maxSupportedPixelRatio = window.devicePixelRatio || 1;

    /* set initial pixel ratio */
    /* for MacBookPro and desktops with retina displays */
    if (pc.platform.desktop && this.app.graphicsDevice.maxPixelRatio > 1.99) {
        this.setPixelRatio(this.getDeviceOptimalDPR());
    } else {
        this.setPixelRatio(this.getDeviceOptimalDPR());
    }

    this.startPerformanceMonitoring(2000);
};


PerformanceMonitor.prototype.update = function (dt) {
    if (document.hidden) {
        return;
    }
    this.updatePerformanceMonitor(dt);
};

PerformanceMonitor.prototype.swap = function (old) {
    this.initialize();
};

PerformanceMonitor.prototype.updateShadowsSettings = function(shadowsEnabled, forced = false) {
    if(this.shadowLights.length > 0 && (this.autoShadows || forced)) {
        this.shadowLights.forEach(light => {
            if(!shadowsEnabled) {
                this._shadowsTurnOffCounter += 1;
            } else if(this._shadowsTurnOffCounter > 1) return;
            if(light.enabled && light.light.castShadows !== shadowsEnabled) {
                light.light.castShadows = shadowsEnabled;
            }
        });
    }
};

PerformanceMonitor.prototype.startPerformanceMonitoring = function (delay) {
    setTimeout(() => {
        this.performanceMonitoringStarted = true;
        this.performanceMonitoringCounter = 0;
        this.elapsedTime = 0;
        this.frameTimes = [];
        this.lastFPSMeasurements = [];
    }, delay);
};

PerformanceMonitor.prototype.updatePerformanceMonitor = function (dt) {
    if (this.performanceMonitoringStarted) {
        /* increase the counter */
        this.performanceMonitoringCounter += 1;
        this.elapsedTime += dt;

        const frameTime = dt;

        if (this.autoAdjustQuality) {
            this.frameTimes.push(frameTime);
            if (this.frameTimes.length >= this.sampleFrames || this.elapsedTime >= this.fpsCheckInterval) {
                this.elapsedTime = 0;
                this.calculateAverageFPS();
            }
        }

    }
};

PerformanceMonitor.prototype.calculateAverageFPS = function () {
    if (this.frameTimes.length < 12) return;
    const sortedTimes = this.frameTimes.slice().sort((a, b) => a - b);
    const lowerBoundFrames = Math.floor(sortedTimes.length * (1 - this.confidenceInterval) / 2);
    const upperBoundFrames = Math.floor(sortedTimes.length * (0.5 + this.confidenceInterval / 2));
    const effectiveFrameTimes = sortedTimes.slice(lowerBoundFrames, upperBoundFrames);
    const totalTime = effectiveFrameTimes.reduce((sum, current) => sum + current, 0);

    const averageFPS = (effectiveFrameTimes.length / totalTime);

    this.lastFPSMeasurements.push(averageFPS);
    while (this.lastFPSMeasurements.length > 20) {
        this.lastFPSMeasurements.shift();
    }

    this.adjustRendererScale(averageFPS);

    this.frameTimes.splice(0, this.frameTimes.length);
};

PerformanceMonitor.prototype.adjustRendererScale = function (averageFPS) {
    if (averageFPS < this.minAcceptableFPS) {
        this.decreaseQuality();
    } else if (averageFPS <= this.acceptableFPS) {
        this.setMediumQuality();
    } else if (averageFPS > this.targetFPS * 0.95) {
        this.increaseQuality();
    }

    this.calculateShadowSettings();

    if (this.debugOutput) {
        console.log(`${averageFPS.toFixed(1)} / ${this.app.graphicsDevice.maxPixelRatio.toFixed(3)} of ${this.maxDevicePixelRatio}, frames ${this.frameTimes.length}, fps-samples ${this.lastFPSMeasurements.length}`);
    }
};

PerformanceMonitor.prototype.calculateShadowSettings = function () {
    const currentPixelRatio = this.app.graphicsDevice.maxPixelRatio;
    if (/*currentPixelRatio <= this.minDevicePixelRatio && */this.lastFPSMeasurements.length > 3 && this.lastFPSMeasurements.slice(this.lastFPSMeasurements.length - 3).every(fpsValue => fpsValue < this.minAcceptableFPS)) {
        this.updateShadowsSettings(false);
    } else if (currentPixelRatio >= this.getDeviceOptimalDPR() && this.lastFPSMeasurements.length > 3 && this.lastFPSMeasurements.slice(this.lastFPSMeasurements.length - 3).every(fpsValue => fpsValue >= this.acceptableFPS)) {
        this.updateShadowsSettings(true);
    }
};

PerformanceMonitor.prototype.decreaseQuality = function () {
    const targetRatio = pc.math.clamp(this.app.graphicsDevice.maxPixelRatio - this.pixelRatioStep, this.getMinDPR(), this.getMaxDPR());
    this.setPixelRatio(targetRatio);
};

PerformanceMonitor.prototype.increaseQuality = function () {
    const targetRatio = pc.math.clamp(this.app.graphicsDevice.maxPixelRatio + this.pixelRatioStep, this.getMinDPR(), this.getMaxDPR());
    this.setPixelRatio(targetRatio);
};

PerformanceMonitor.prototype.setMediumQuality = function () {
    this.setPixelRatio(this.getDeviceOptimalDPR());
};

/* private */

PerformanceMonitor.prototype.setPixelRatio = function (value) {
    if (value !== this.app.graphicsDevice.maxPixelRatio) {
        //console.log('Pixel ratio set to ', value);
        this.app.graphicsDevice.maxPixelRatio = value;
    }
};

PerformanceMonitor.prototype.getDeviceOptimalDPR = function () {
    const minDPR = this.getMinDPR();
    const maxDPR = this.getMaxDPR();
    return pc.math.clamp(minDPR + (maxDPR - minDPR) / 2, minDPR, maxDPR);
};

PerformanceMonitor.prototype.getMinDPR = function () {
    return Math.min(window.devicePixelRatio || 1, this.minDevicePixelRatio);
};

PerformanceMonitor.prototype.getMaxDPR = function () {
    return Math.min(this.maxSupportedPixelRatio, this.maxDevicePixelRatio);
};

// PauseOverlay.js
var PauseOverlay = pc.createScript('pauseOverlay');

PauseOverlay.prototype.initialize = function () {

};

PauseOverlay.prototype.postInitialize = function () {
    this.setPaused(APIMediator.isPaused());
    APIMediator.onPauseStateChange(isPaused => {
        this.setPaused(isPaused);
    });
};

PauseOverlay.prototype.setPaused = function (isPaused) {
    this.entity.element.enabled = isPaused;
    this.app.timeScale = isPaused ? 0 : 1;
    this.app.fire('setAudioPaused', isPaused);
};


PauseOverlay.prototype.update = function (dt) {

};



// FamobiCopyright.js
var FamobiCopyright = pc.createScript('famobiCopyright');


FamobiCopyright.prototype.initialize = function () {
    if (window.GameInterface.hasFeature("copyright")) {
        this.entity.element.opacity = 0;
        const textureAsset = new pc.Asset('famobiLogoTexture', 'texture', { url: window.GameInterface.getCopyrightLogoURL() }, undefined, { crossOrigin: 'anonymous'});

        // Load the asset
        this.app.assets.add(textureAsset);
        textureAsset.once('load', (asset) => {
            
            const imageElement = this.entity.element;
            if (imageElement) {
                imageElement.texture = asset.resource;
                this.entity.element.opacity = 0.5;
            }
        });

        this.app.assets.load(textureAsset);
    } else {
        this.entity.enabled = false;
    }
};


FamobiCopyright.prototype.update = function (dt) {

};



// InputBlocker.js
var InputBlocker = pc.createScript('inputBlocker');

InputBlocker.prototype.initialize = function() {

};

InputBlocker.prototype.update = function(dt) {

};

// FamobiAdsHandler.js
var FamobiAdsHandler = pc.createScript('famobiAdsHandler');


FamobiAdsHandler.prototype.initialize = function() {
    this.inputBlocker = this.app.root.findByName('InputBlocker');
    this.app.on("showRewardedAD", this.onShowRewardedAD, this);
};


FamobiAdsHandler.prototype.onShowRewardedAD = async function(_resumeGiveRewardCallback, _pauseCallback, _resumeCallback, _noADAvailableCallback, eventID = 'button:rewarded:common') {
    this.inputBlocker.element.enabled = true;
    const result = await APIMediator.watchRewardedVideo(eventID);
    this.inputBlocker.element.enabled = false;

    if(result) {
        _resumeGiveRewardCallback();
    } else {
        _resumeCallback();
        // _noADAvailableCallback();
    }
};

FamobiAdsHandler.prototype.update = function(dt) {

};


// RewardedIcon.js
var RewardedIcon = pc.createScript('rewardedIcon');

RewardedIcon.attributes.add('rewardedEventId', {
    type: 'string'
});

RewardedIcon.attributes.add('rewardedIcon', {
    type: 'entity'
});


RewardedIcon.prototype.initialize = function() {
    
};

RewardedIcon.prototype.update = function(dt) {
    if(this.rewardedIcon) {
        this.rewardedIcon.enabled = APIMediator.isRewardedAdAvailable(this.rewardedEventId);
    }
};



// localizationManager.js
var LocalizationManager = pc.createScript('localizationManager');


LocalizationManager.attributes.add('autoDetectLanguage', {
    type: 'boolean',
    default: true
});

LocalizationManager._currentLocale = "en-US";

LocalizationManager.getInstance = function () {
    if (!LocalizationManager._instance) throw new Error('LocalizationManager is not initialized yet');
    return LocalizationManager._instance;
};


LocalizationManager.prototype.initialize = function () {
    LocalizationManager._app = this.app;
    if (!LocalizationManager._instance) {
        LocalizationManager._instance = this;
    }

    this.detectAndSetBrowserLanguage();

};

LocalizationManager.prototype.postInitialize = function () {

};


LocalizationManager.prototype.addJSON = function (json) {
    if (json) {
        this.app.i18n.addData(json);
    }
};

LocalizationManager.prototype.detectAndSetBrowserLanguage = function () {
    if (this.autoDetectLanguage) {
        const browserLanguage = LocalizationManager.getClientLanguage();
        this._setCurrentLocale(this.app.i18n.findAvailableLocale(browserLanguage));
    }
};


LocalizationManager.prototype.update = function (dt) {

};

LocalizationManager.prototype.changeLocale = function (locale) {
    const closestLocale = this.app.i18n.findAvailableLocale(locale);
    if (closestLocale !== this.app.i18n.locale) {
        this._setCurrentLocale(closestLocale, true);
    }
}


LocalizationManager.prototype._setCurrentLocale = async function (locale, showLoadingOverlay = false) {
    LocalizationManager._currentLocale = locale;
    this.app.i18n.locale = LocalizationManager._currentLocale;
    this.app.fire('app:changeLocale', this.app.i18n.locale);
};

LocalizationManager.prototype.getCurrentLocale = function () {
    return LocalizationManager._currentLocale;
};


LocalizationManager.prototype.getCountryCode = function () {
    return this.getCurrentLocale().substr(0, 2);
};

LocalizationManager.prototype.getLocalizedText = function (textKey, ...replaceParams) {
    let text = this.app.i18n.getText(textKey, this.getCurrentLocale());
    for (let i = 0; i < replaceParams.length; i++) {
        text = text.replace(`{${i}}`, replaceParams[i]);
    }
    return text;
};

LocalizationManager.prototype.getCharactersList = function (...locales) {
    const baseChars = `!"#\$%&'()*+,-0123456789:;<=>?@Z[\]^_\`~{|}xX`; // + 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYАБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯЇабвгдеєжзиіїйклмнопрстуфхцчшщьюяїЁё¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ'
    const allCharacters = new Set(baseChars.split(''));
    locales.forEach(locale => {
        const localeFileName = this.app.i18n.findAvailableLocale(locale);
        const localeFile = this.app.assets.find(localeFileName, 'json');
        if (!localeFile) {
            Debug.warn('No locale file for ' + locale);
            return;
        }

        localeFile.resource.data.forEach(item => {
            Object.keys(item.messages).forEach(key => {
                const string = item.messages[key];
                string.split('').forEach(char => allCharacters.add(char));
            });
        });

        console.log('File for ' + localeFileName + ': ', localeFile);
    });

    return Array.from(allCharacters).sort().join('');
};

/* Static */

LocalizationManager.getClientLanguage = function () {
    return APIMediator.getCurrentLanguage();
};



// TutorialDisabler.js
var TutorialDisabler = pc.createScript('tutorialDisabler');


TutorialDisabler.prototype.initialize = function () {

};

TutorialDisabler.prototype.postInitialize = function () {
    if (!APIMediator.isTutorialEnabled()) {
        this.updateVisibilityRecursive(this.entity, false);
    }
};

TutorialDisabler.prototype.update = function (dt) {
};

TutorialDisabler.prototype.updateVisibilityRecursive = function (entity, status) {
    if(!status) {
        if (entity.element) entity.element.enabled = false;
    }
    entity.children.forEach(child => this.updateVisibilityRecursive(child, status));
};

