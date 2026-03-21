var Define = function () {};
var Enum = function () {};

Define.txtVer = "ver.1.0.31"; // 버젼


Enum.DEVICE_STATE = {
    PC : 0,
    IOS : 1,
    ANDROID : 2
};

Define.SAVE_VER = 1;    // 세이브버젼
Define.IMG_VER = 1;     // 이미지 버젼
Define.SND_VER = 1;     // 사운드 버젼
Define.SPINE_VER = 1;	// 스파인 버젼
Define.DEVICE = Enum.DEVICE_STATE.PC;

Define.iADCnt = 0;
Define.iTimeStemp = 0;
Define.tbLang = ["kr", "en"];
Define.LANG = MSSDK.getParameterByName('lang') === "en" ? Define.tbLang[1] :Define.tbLang[0];
Define.PID = MSSDK.getParameterByName('id');
Define.GameName = 'grannyhero';
Define.GAME_CODE = 203;    // 게임코드 추가
Define.SAVE_KEY = "com.movisoft.grannyhero";

var gDeltaTime = 0;
var ONEFRAMETIME = 10.0;
var gGameOverLoopSoundEvent = null;

Define.bLocalHost = (document.location.href.indexOf("localhost") !== -1 );
var kData = new Data();
function Data(){
    this.iVer = 0;

    this.iBestScore = 0;
    this.firstAccess  = true;

    this.isBGM = true;
    this.isSfx = true;
}
//===============================================================================
// Phaser Text 기능 확장.
//===============================================================================
Phaser.Text.prototype.ReSize = function(txt, limit_width, limit_height){
    if(txt != undefined)	this.text = txt;
    this.scale.set(1);
    if(this.width > limit_width) {
        if(limit_height === undefined)
            this.scale.set(limit_width/this.width);
        else if(limit_width/this.width <= limit_height/this.height)
            this.scale.set(limit_width/this.width);
    }
    if(limit_height != undefined && this.height > limit_height) {
        if(limit_width/this.width > limit_height/this.height)
            this.scale.set(limit_height/this.height);
    }
};

Phaser.BitmapText.prototype.ReSize = function(txt, limit_width, limit_height){
    if(txt != undefined)	this.text = txt;
    this.scale.set(1);
    if(this.width > limit_width) {
        if(limit_height === undefined)
            this.scale.set(limit_width/this.width);
        else if(limit_width/this.width <= limit_height/this.height)
            this.scale.set(limit_width/this.width);
    }
    if(limit_height != undefined && this.height > limit_height) {
        if(limit_width/this.width > limit_height/this.height)
            this.scale.set(limit_height/this.height);
    }
};


Phaser.Text.prototype.ChangeTextColor = function(){
    for(var i=0;i<this.text.length;++i){
        if(this.text[i] == "["){
            if(this.text[i+7] == "]"){	// 컬러색일경우
                var ec = this.text.slice(0, i+8).split(/(?:\r\n|\r|\n)/).length - 1;
                var color = "#"+this.text.slice(i+1, i+7);
                this.text = this.text.replace(this.text.slice(i, i+8), "");
                this.addColor(color, i-ec);
            }else if(this._text[i+1] == "-"){
                var ec = this.text.slice(0, i+3).split(/(?:\r\n|\r|\n)/).length - 1;
                this.text = this.text.replace(this.text.slice(i, i+3), "");
                this.addColor("#"+this.tint.toString(16), i-ec);
            }
        }
    }
};

Number.prototype.ToString = function(v){
    if(v != undefined)
        v = v.toLowerCase();

    switch(v){
        case "n0":	// 숫자에 콤마를 찍는다.
            return this.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        case "d2":	// 자릿수를 2자리로 한다. 빈자리는 0으로 채워서..
            var zero = '';
            var n = Math.floor(this).toString();

            if (n.length < 2){
                for (var i = 0; i < 2 - n.length; i++)
                    zero += '0';
            }
            return zero + n;
        case "f1":
            return this.toFixed(1);
        case "f2":
            return this.toFixed(2);
        default:
            return this.toString();
    }
};

Number.prototype.isEven = function () {
    return this % 2 === 0;
};

String.prototype.ToString = function(v){
    if(v != undefined)
        v = v.toLowerCase();
    switch(v){
        case "n0":	// 숫자에 콤마를 찍는다.
            return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            break;
        case "d2":	// 자릿수를 2자리로 한다. 빈자리는 0으로 채워서..
            var zero = '';
            var n = this;

            if (n.length < 2){
                for (var i = 0; i < 2 - n.length; i++)
                    zero += '0';
            }
            return zero + n;
            break;
        default:
            return this;
            break;
    }
};

//=============================================================================
// c#용 string.format부분 대체용.
//=============================================================================
var	string = function(){};
if (!string.Format) {
    string.Format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

var	Random = function(){};
if (!Random.Range) {
    Random.Range = function(min, max) {
        return MG.game.rnd.integerInRange(min, max-1);
    };

    Random.RangeFloat = function(min, max) {
        return MG.game.rnd.realInRange(min, max-0.00001);
    };
}
Define.LANDSCAPE = false;
'use strict';
// window.onload = function (event)
// {
//     CreateGame();
// }
window.onload = function ()  {
    var game, mg = window[''];

    if(Define.LANDSCAPE === true)
        game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', undefined, undefined, false);
    else
        game = new Phaser.Game(720, 1280, Phaser.AUTO, 'game', undefined, undefined, true);

    game.state.add('boot', mg.Boot);
    game.state.add('preloader', mg.Preloader);
    game.state.add('game', mg.Game);

    game.state.start('boot');
}

ResourcesManager = function (game) {
    this.game = game;
};
ResourcesManager.prototype = {
    preload: function () {
    },
    create: function () {
    },
    update: function () {
    },
    loader: function (res) {
        var pack = res;
        for(var method in pack) {
            pack[method].forEach(function(args) {
                var loader = this.game.load[method];
                loader && loader.apply(this.game.load, args);
            }, this);
        }
    }
};

ResourcesManager.MoviLoad ={
	'image': [
		// ['pop.png', 'assets/atlas/load/pop.png?v='+Define.IMG_VER],
		// ['movi.png', 'assets/atlas/load/movi.png?v='+Define.IMG_VER],
        ['Grade', 'assets/atlas/load/grade.png?v='+Define.IMG_VER],
        //['logo_movisoft_0.png', 'assets/atlas/load/logo_movisoft_0.png?v='+Define.IMG_VER],
	]
};
//
ResourcesManager.Preloader = {
    'image': [

    ],
    'atlas': [
        ['gameAtlas', 'assets/atlas/atlasGame.png?v='+Define.IMG_VER, 'assets/atlas/atlasGame.json?v='+Define.IMG_VER, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY],
        ['animAtlas', 'assets/atlas/atlasAnimation.png?v='+Define.IMG_VER, 'assets/atlas/atlasAnimation.json?v='+Define.IMG_VER, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY],
    ],
    'bitmapFont':[

     ],
    'spine': [
        ['titleSpine', 'assets/spine/Title.json?v='+Define.SPINE_VER],
        ['recordSpine', 'assets/spine/BestScore.json?v='+Define.SPINE_VER],
        ['reviveSpine', 'assets/spine/Resurrection.json?v='+Define.SPINE_VER],
    ],
    'audio': [
        ['SE_Click', [
            'assets/sound/9_click.mp3?v='+Define.SND_VER,
            'assets/sound/9_click.ogg?v='+Define.SND_VER]],
        ['SE_Revive', [
            'assets/sound/6_revive.mp3?v='+Define.SND_VER,
            'assets/sound/6_revive.ogg?v='+Define.SND_VER]],
        ['SE_CutScene', [
            'assets/sound/8_cutin.mp3?v='+Define.SND_VER,
            'assets/sound/8_cutin.ogg?v='+Define.SND_VER]],
        ['SE_Damage', [
            'assets/sound/5_damege.mp3?v='+Define.SND_VER,
            'assets/sound/5_damege.ogg?v='+Define.SND_VER]],
        ['SE_Surprise', [
            'assets/sound/10_surprise.mp3?v='+Define.SND_VER,
            'assets/sound/10_surprise.ogg?v='+Define.SND_VER]],
        ['SE_Start', [
            'assets/sound/1_start.mp3?v='+Define.SND_VER,
            'assets/sound/1_start.ogg?v='+Define.SND_VER]],
        ['SE_Shoot', [
            'assets/sound/2_shoot.mp3?v='+Define.SND_VER,
            'assets/sound/2_shoot.ogg?v='+Define.SND_VER]],
        ['SE_Fire', [
            'assets/sound/7_fire.mp3?v='+Define.SND_VER,
            'assets/sound/7_fire.ogg?v='+Define.SND_VER]],
        ['SE_Pop', [
            'assets/sound/3_pop.mp3?v='+Define.SND_VER,
            'assets/sound/3_pop.ogg?v='+Define.SND_VER]],
        ['SE_GameOver', [
            'assets/sound/4_gameover.mp3?v='+Define.SND_VER,
            'assets/sound/4_gameover.ogg?v='+Define.SND_VER]],
            // 'assets/sound/4_gameover.ogg?v='+Define.SND_VER], 'bgm'],
    ],
};

window[''] = window[''] || {};
window[''].ResourcesManager = ResourcesManager;




'use strict';
function LocalizingManager(){
	this.strT = {};
	this.Init();
}
LocalizingManager.prototype = {
	Init:function(cb){
		var xhr = new XMLHttpRequest();
		var lang = Define.LANG === Define.tbLang[0] ? "ko" : "en";

		xhr.open("GET", "assets/font/Localizing_" + lang + ".txt", true);
		xhr.send(null);
		xhr.onload = function(){
			if(xhr.status != 404){
				this.strT = JSON.parse(xhr.responseText);
				if(cb) cb();
			}
			else{
				throw alert(kData.lang + ' not file');
			}
		}.bind(this);
	},
	Get:function(key) {
		if(this.strT[key] == undefined)
			return key+" : null";

		var args = Array.prototype.slice.call(arguments, 1);
		if(args.length == 0)
			return this.strT[key];
		else{
			return this.strT[key].replace(/{(\d+)}/g, function(match, number) {
				return typeof args[number] != 'undefined'
					? args[number]
					: match
					;
			});
		}
	},
}
'use strict';

function MoviGame() {
    var args = Array.prototype.slice.call(arguments);// arguments을 배열로 바꾼다.
    var callback = args.pop();// 마지막 인자는 콜백 함수
    var modules = (args[0] && typeof args[0] === "string") ? args : args[0];// 모듈은 배열로 전달될 수도있고 개별 인자로 전달 될 수도 있습니다.
    // 함수가 생성자로 호출되도록 보장(new를 강제하지 않는 패턴)
    if (!(this instanceof MoviGame)) return new MoviGame(modules, callback);
    // "this객체에 모듈을 추가" : 모듈이 없거나 "*"(전부)이면 사용 가능한 모든 모듈을 사용한다는 의미입니다.
    if (!modules || modules === '*' || modules[0] === '*') {
        modules = [];
        for (var i in MoviGame.Modules) {
            if (MoviGame.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    // 필요한 모듈들을 초기화
    for (var i=0, m_length=modules.length; i<m_length; i+=1) {
        MoviGame.modules[modules[i]](this);
    }
    // 콜백 함수 호출
    callback(this);
    //==================================================================================
    // 여기서 부터 변수선언..
    //==================================================================================
    // Phaser
    this.game = null;

    this.resourcesManager = null;
//	this.version = Define.VERSION;

    this._sound = null;
    this._bgm = null;

    this.firstPortrait = false;
    this.firstLandScape = false;

    this.callReSize = null;
    this.iMSW = 720;
    this.iMSH = 1280;
    this.iCSX = this.iMSW/2;
    this.iCSY = this.iMSH/2;
}

// 필요한 프로토타입 프로퍼티들을 추가
MoviGame.prototype = {
    Initialize : function(game){
        // 디바이스 구분.
        if (/Android/i.test(navigator.userAgent))
            Define.DEVICE = Enum.DEVICE_STATE.ANDROID;
        else if(MSSDK.getBackButton() == true)
            Define.DEVICE = Enum.DEVICE_STATE.IOS;
        else
            Define.DEVICE = Enum.DEVICE_STATE.PC;

        this.game = game;
        this.game.plugins.add(PhaserSpine.SpinePlugin);	// 스파인 추가.
        this.resourcesManager = game.plugins.add(ResourcesManager);
        this.NM = new NetworkManager();
        this.listLoader = [];
        /*this.networkManager = NetworkManager(this.getServiceString(), function() { });*/
        /*this.storage = game.plugins.add(StorageManager);*/
        this.initScreenSize();

        if(!Define.bLocalHost)
        {

        }

        // 프레임설정을 해줘야 120hz, 144hz모니터에서 제대로 작동하게 된다.
        /*this.game.time._desiredFps = 144;
        this.game.time.advancedTiming = true;*/
    },
    initScreenSize: function(){
        var that = this;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.pageAlignHorizontally = false;
        this.game.pageAlignVertically = false;
        this.game.scale.parentIsWindow = true;//지우니간 폭만 맞고 길이가 길어지는 화면이 됨
        window.addEventListener("resize", function() {
            that.reScreenSize();
        });
        this.game.scale.setShowAll();
        this.reScreenSize();
        this.regstWindowEvents();
    },
    reScreenSize : function () {
        var per = (window.innerWidth*MG.iMSH) / (window.innerHeight*MG.iMSW);
        //console.log("per "+per);
        if(per >= 0.85 && per <= 1.15)
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        else
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //
        if(window.innerWidth < window.innerHeight &&  Define.DEVICE == Enum.DEVICE_STATE.ANDROID)
        {
            var width = Math.min(window.innerWidth, window.outerWidth);
            var height = Math.min(window.innerHeight, window.outerHeight);
            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            var ratio_w = parseFloat(width / this.game.width);
            var ratio_h = parseFloat(height/ this.game.height);
            this.game.scale.setUserScale(ratio_w>1? 1: ratio_w, ratio_h);
        }


        this.game.scale.refresh();
    },
    regstWindowEvents: function() {

        window.addEventListener("focus", function(event)
        {
            console.log("::::: 포커스 ON :::::::");
            // if(kData.isBGM === true){
            //     MG.SetAudioVolume('SE_GameOver', 1);//MG.ResumeBgm();
            // }

            if(MG && MG.game) {
                // var _gm = MG.game.state.states['game'];
                // _gm.sound_googlesnack(true);

                // 아이폰사운드 안나와서1
                window.focus();

                //---------------txtlg<<
                //MG.txt2fn('focus,  ' + MG.game.sound.context.state +'  ios: ' + (/iPad|iPhone|iPod/.test(navigator.userAgent)) + '  ' +navigator.userAgent.match(/iPhone|iPad|iPod/i) );
                //---------------txtlg

                MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
                    if(onoff) {
                        MG.SetAudioVolume('SE_GameOver', 1);//MG.ResumeBgm();
                        //---------------txtlg<<
                        //MG.txt2fn( "MG._sound[\'SE_GameOver\'].volume: "+ MG._sound['SE_GameOver'].volume);
                        //---------------txtlg
                    }else{
                        MG.SetAudioVolume('SE_GameOver', 0);
                        //---------------txtlg<<
                       // MG.txt2fn( "MG._sound[\'SE_GameOver\'].volume: "+ MG._sound['SE_GameOver'].volume);
                        //---------------txtlg
                    }
                });
            }

        }, false);
        window.addEventListener("blur", function(event)
        {
            console.log("::::: 포커스 OFF :::::::");
            if(kData.isBGM === true){

                //---------------txtlg<<
                //MG.txt2fn('blur,  '+ MG.game.sound.context.state);
                //---------------txtlg

                MG.SetAudioVolume('SE_GameOver', 0);//MG.PauseBgm();

                if(gGameOverLoopSoundEvent)
                {
                    clearTimeout(gGameOverLoopSoundEvent);
                    gGameOverLoopSoundEvent = null;
                }
            }

            //---------------txtlg<<안사용
            // MG.txt2fn('addevent blur,  '+ MG.game.sound.context.state);
            // document.addEventListener('click', () => {//1회용
            //     console.log('cb_addevent blur'+ MG.game.sound.context.state + '(resume try)')
            //     if (MG.game.sound.context && MG.game.sound.context.state !== 'running') {
            //         MG.game.sound.context.resume().then(() => {
            //             MG.txt2fn('cb_addevent blue,  '+ MG.game.sound.context.state);
            //         });
            //     }
            // }, { once: true });
            // MG.game.input.onDown.addOnce(function() {//1회용
            //     if (MG.game.sound.context && MG.game.sound.context.state !== 'running') {
            //         MG.game.sound.context.resume().then(() => {
            //             MG.txt2fn('cb_addevent blue,  '+ MG.game.sound.context.state);
            //         });
            //     }
            // });
            //---------------txtlg안사용

        }, false);
        window.addEventListener("pageshow", function()
        {
            console.log("::::: 포커스 ON :::::::");
            if(kData.isBGM === true){

                //---------------txtlg<<
                //MG.txt2fn('pageshow,  ' + MG.game.sound.context.state);
                //---------------txtlg

                MG.SetAudioVolume('SE_GameOver', 1);//MG.ResumeBgm();
            }
        }, false);
        window.addEventListener("pagehide", function()
        {
            console.log("::::: 포커스 OFF :::::::");
            if(kData.isBGM === true){

                //---------------txtlg<<
                //MG.txt2fn('pagehide,  ' + MG.game.sound.context.state);
                //---------------txtlg

                MG.SetAudioVolume('SE_GameOver', 0);//MG.PauseBgm();

                if(gGameOverLoopSoundEvent)
                {
                    clearTimeout(gGameOverLoopSoundEvent);
                    gGameOverLoopSoundEvent = null;
                }
            }
        }, false);

        var hidden, visibilityChange;
        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }

        function handleVisibilityChange() {
            if (document[hidden]) {
                console.log("::::: 포커스 OFF ::::::: visible");

                //---------------txtlg<<
                //MG.txt2fn('off, visible,  '+ MG.game.sound.context.state);
                //---------------txtlg

                if(kData.isBGM === true){
                    MG.SetAudioVolume('SE_GameOver', 0);//MG.PauseBgm();

                    if(gGameOverLoopSoundEvent)
                    {
                        clearTimeout(gGameOverLoopSoundEvent);
                        gGameOverLoopSoundEvent = null;
                    }
                }

                //---------------txtlg<<//안사용
                // MG.txt2fn('addevent off, visible,  '+ MG.game.sound.context.state);
                // document.addEventListener('click', () => {//1회용
                //     console.log('cb_addevent off, visible'+ MG.game.sound.context.state);
                //     if (MG.game.sound.context && MG.game.sound.context.state !== 'running') {
                //         MG.game.sound.context.resume().then(() => {
                //             MG.txt2fn('cb_addevent blue,  '+ MG.game.sound.context.state);
                //         });
                //     }
                // }, { once: true });
                // MG.game.input.onDown.addOnce(function() {//1회용
                //     if (MG.game.sound.context && MG.game.sound.context.state !== 'running') {
                //         MG.game.sound.context.resume().then(() => {
                //             MG.txt2fn('cb_addevent off, visible,  '+ MG.game.sound.context.state);
                //         });
                //     }
                // });
                //---------------txtlg안사용

            } else {
                console.log("::::: 포커스 ON :::::::  visible");

                //---------------txtlg<<
                //MG.txt2fn('on, visible,  '+ MG.game.sound.context.state);
                //---------------txtlg

                // if(kData.isBGM === true){
                //     MG.SetAudioVolume('SE_GameOver', 1);//MG.ResumeBgm();
                // }

                if(MG && MG.game) {
                    // var _gm = MG.game.state.states['game'];
                    // _gm.sound_googlesnack(true);
                    MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
                        if(onoff) {
                            MG.SetAudioVolume('SE_GameOver', 1);//MG.ResumeBgm();
                        }else{
                            MG.SetAudioVolume('SE_GameOver', 0);
                        }
                    });
                }
            }
        }

        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    },
    EditPos : function(o){
        o.inputEnabled = true;
        o.input.enableDrag();
        o.events.onDragStop.add(function(){
            var s = "MG.iCSX";
            var v = Math.floor(o.position.x-MG.iCSX);
            if(v > 0)   s += "+"+v;
            else if(v < 0)  s += v;
            s += ", MG.iCSY";
            v = Math.floor(o.position.y-MG.iCSY)
            if(v > 0)   s += "+"+v;
            else if(v < 0)  s += v;

            console.log("x:"+Math.floor(o.position.x) +", y:"+Math.floor(o.position.y));
            console.log(s);
        }, this);
    },

    netLoading : function () {
        if(this.grpLoad != null)  {
            this.destroyLoading();
        }
        this.grpLoad = this.game.add.group();
        this.grpLoad.x = this.game.width/2;
        this.grpLoad.y = this.game.height/2;

        this.grpLoad.backAlpha = MG.AddSpriteNine(this.grpLoad,0, 0,'gameAtlas','white.png', this.game.width,this.game.height, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        this.grpLoad.backAlpha.alpha = 0.3;
        this.grpLoad.backAlpha.tint = 0x00000000;
        this.grpLoad.backAlpha.inputEnabled = true;

        this.grpLoad.loading = this.game.add.sprite(0, 0, 'gameAtlas','loading.png');
        this.grpLoad.loading.anchor.setTo(0.5, 0.5);
        this.grpLoad.loading.scale.setTo(0.5, 0.5);
        this.grpLoad.addChild(this.grpLoad.loading);

        this.game.add.tween(this.grpLoad.loading).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true).loop(true);
    },

    destroyLoading : function () {
        if(this.grpLoad != null)  {
            this.grpLoad.backAlpha.destroy();
            this.grpLoad.loading.destroy();
            this.grpLoad.removeAll();
            this.grpLoad = null;
        }
    },

    cacheSheetLoad: function (key, path, wid, hei, max, cb) {
        if(MG.game.cache.checkImageKey(key) == false){
            var loadData = {
                key : key,
                type : 'sheet',
                path : path,
                wid : wid,
                hei : hei,
                max : max,
                cb : cb
            };
            this.listLoader.push(loadData);
            this.cacheUpdate();
        }else {
            cb(key);
        }
    },

    cacheImageLoad : function (key, path, cb) {
        if(MG.game.cache.checkImageKey(key) == false) {
            var loadData = {
                key : key,
                type : 'Image',
                path : path,
                cb : cb
            };
            this.listLoader.push(loadData);
            this.cacheUpdate();
        }else {
            cb(key);
        }
    },

    cacheSpineLoad : function (key, path, cb) {
        if(MG.game.cache.checkJSONKey(key) == false){
            var loadData = {
                key : key,
                type : 'spine',
                path : path,
                cb : cb
            };
            this.listLoader.push(loadData);
            this.cacheUpdate();
        }else {
            cb(key);
        }
    },

    cacheAtlasLoad : function (key, path, cb) {
        if(MG.game.cache.checkImageKey(key) == false){
            var loadData = {
                key : key,
                type : 'atlas',
                path : path,
                cb : cb
            };
            this.listLoader.push(loadData);
            this.cacheUpdate();
        }else {
            cb(key);
        }
    },

    cacheLoad : function (obj){//key, path, type, cb) {
        var loader = MG.game.load;
        switch (obj.type)
        {

            case 'sheet':
                loader.spritesheet(obj.key, obj.path[0], obj.wid, obj.hei, obj.max);
                break;
            case 'atlas':
                loader.atlas(obj.key, obj.path[0], obj.path[1], obj.path[2]);
                break;
            case 'sound':
                loader.audio(obj.key, obj.path);
                break;
            case 'spine':
                loader.spine(obj.key, obj.path);
                break;
            case 'Image':
                loader.image(obj.key, obj.path);
                break;
            default:
                loader.image(obj.key, obj.path);
                break;
        }
        loader.onLoadComplete.removeAll();
        loader.onLoadComplete.add(function(){
            console.log('loadCOm');
            loader.onLoadComplete.removeAll();
            loader.onFileError.removeAll();
            obj.cb(obj.key);
            this.listLoader.shift();
            this.cacheUpdate();
        }, this);
        loader.onFileError.add(function(){
            console.log('loadError');
            loader.onLoadComplete.removeAll();
            loader.onFileError.removeAll();
            this.cacheUpdate();	// 재로딩..
        }, this);
        loader.start();
    },
    cacheUpdate : function(){
        if(MG.game.load.isLoading == false && this.listLoader.length > 0){
            this.cacheLoad(this.listLoader[0]);
        }
    },
};

MoviGame.modules = {
	utils : function (box) {
		box.Init = function() {
			console.log("  utils  ==");

		};

        box.DrawRect = function (parent, x, y, w, h, color, alpha, input){
            var grp = MG.game.add.graphics(0, 0);
            grp.beginFill(color);
            grp.drawRect(x, y, w, h);
            grp.endFill();
            grp.alpha = alpha;
            if(input)
                grp.inputEnabled = input;
            parent.addChild(grp);

            return grp;
        };
        box.DrawRoundedRect = function (parent, x, y, w, h, r, color, alpha, input){
            var grp = MG.game.add.graphics(0, 0);
            grp.beginFill(color);
            grp.drawRoundedRect(x, y, w, h, r);
            grp.endFill();

            if(alpha) grp.alpha = alpha;
            if(input) grp.inputEnabled = input;
            parent.addChild(grp);

            return grp;
        };
        /*box.gameExit = function (bDirect) {
            if(bDirect)history.back();
            var strExit = MSSDK.getParameterByName('lang') == "en" ? "Do you want to exit?" : "게임을 종료하시겠습니까?";
            MG.confirm("", strExit, "YES", "NO", function () {
                PopconGame.Sdk.exitGame();
            }, function () {
                history.pushState(null, document.title, location.href);
            });
        };*/
        box.alert = function (title, comment, cb) {
            Swal.fire({
                title: title,
                width: 400,
                html: "<br>"+comment.replace(/\n/gi, '<br>')+"<br><br>",
                allowOutsideClick: false,
            }).then(function(result){
                if (result.value) {
                    if(cb) cb();
                }
            });
        };
        box.confirm = function (title, comment, btnYes, btnNo, cb) {
            if (btnYes == undefined) btnYes = "YES";
            if (btnNo == undefined) btnNo = "NO";

            Swal.fire({
                title: title,
                width: 400,
                html: "<br>"+comment.replace(/\n/gi, '<br>')+"<br><br>",
                allowOutsideClick: false,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: btnYes,
                cancelButtonText: btnNo,
            }).then(function(result){
                if (result.value) {
                    if(cb) cb();
                }else{
                    if(fcb) fcb();
                }
            });
        };
        box.STR2BIN = function (str) {
            var compressData = str.split('').map(function(e) {
                return e.charCodeAt(0);
            });
            var inflate = new Zlib.Deflate(compressData);
            var output = inflate.compress();
            var binstr = Array.prototype.map.call(output, function (ch) {
                return String.fromCharCode(ch);
            }).join('')
            return btoa(binstr);
        };
        box.BIN2STR = function (binstr) {
            binstr = atob(binstr);
            var compressData = binstr.split('').map(function(e) {
                return e.charCodeAt(0);
            });
            var inflate = new Zlib.Inflate(compressData);
            var output = inflate.decompress();
            var str = Array.prototype.map.call(output, function (ch) {
                return String.fromCharCode(ch);
            }).join('')
            return str;
        };
		box.GetSecondsToTimeString = function(s) {
			var min = Math.floor(s/60);
			var sec = Math.floor(s%60);
			var strMin = (min >= 10) ? min.toString():"0"+min;
			var strSec = (sec >= 10) ? sec.toString():"0"+sec;
			return (strMin+':' +strSec);
		};
		box.AddSprite = function(parent, x, y, atlas, imgName, ax, ay, width, height, color, alpha) {
			var spr = this.game.add.sprite(x, y, atlas, imgName);
			if(color != undefined) spr.tint = color;
			if(alpha != undefined) spr.alpha = alpha;
			if(ax == undefined) 	spr.anchor.x = 0.5;
			else					spr.anchor.x = ax;
			if(ay == undefined) 	spr.anchor.y = 0.5;
			else					spr.anchor.y = ay;
			if(width != undefined)	spr.width = width;
			if(height != undefined)	spr.height = height;
			parent.addChild(spr);
			return spr;
		};
		box.AddButtonSprite = function (parent, x, y, atlas, imgName, width, height, ax, ay) {
            var spr = this.game.add.sprite(x, y, atlas, imgName);
            if(height != undefined)	spr.height = height;
            if(width != undefined)	spr.width = width;
            ax ? spr.anchor.x = ax : spr.anchor.x = 0.5;
            ay ? spr.anchor.y = ay : spr.anchor.y = 0.5;

            spr.inputEnabled = true;
            spr.baseTint = spr.tint;

            spr.events.onInputDown.add(function(){
                MG.PlayAudio("SE_Click");

                spr.tint = 0x808080;
                for(var i=0;i<spr.children.length;++i)
                    spr.getChildAt(i).tint = 0x808080;

                for (var i = 0; i < spr.events.onInputUp._bindings.length; i++)
                    spr.events.onInputUp._bindings[i].active = true
            });
            spr.events.onInputUp.add(function(a, b, c){

                spr.tint = 0xffffff;
                for(var i=0;i<spr.children.length;++i)
                    spr.getChildAt(i).tint = 0xffffff;

                if (c === false) {
                    for (var i = 0; i < spr.events.onInputUp._bindings.length; i++) {
                        spr.events.onInputUp._bindings[i].active = false;
                    }
                }
            });

            parent.addChild(spr);
            return spr;
        };
		box.AddSpriteNine = function(parent, x, y, atlas, imgName, w, h, style, ax, ay, color){
			var spr = new PhaserNineSlice.NineSlice(MG.game, x, y, atlas, imgName, w, h, style);
			if(ax == undefined) spr.anchor.x = 0.5;
			else				spr.anchor.x = ax;
			if(ay == undefined) spr.anchor.y = 0.5;
			else				spr.anchor.y = ay;
			if(color != undefined) spr.tint = color;
			parent.addChild(spr);
			return spr;
		};
		box.AddText = function(parent, x, y, txt, fontStyle, ax, ay) {
			var txt = MG.game.add.text(x, y, txt, fontStyle);
			if(ax == undefined) txt.anchor.x = 0.5;
			else 				txt.anchor.x = ax;
			if(ay == undefined)	txt.anchor.y = 0.5;
			else 				txt.anchor.y = ay;
			parent.addChild(txt);
			return txt;
		};
		box.AddBitmapText = function(parent, x, y, font, txt, size, ax, ay) {
			var txt = MG.game.add.bitmapText(x, y, font, txt, size, parent);
			if(ax == undefined) 	txt.anchor.x = 0.5;
			else 					txt.anchor.x = ax;
			if(ay == undefined) 	txt.anchor.y = 0.5;
			else 					txt.anchor.y = ay;
			parent.addChild(txt);
			return txt;
		};
		box.copyObject = function (obj) {
            var output = {};
            for(var i in obj) {
                output[i] = obj[i];
            }
            return output;
        };

        box.addComma = function (str) {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        };

        box.removeComma = function (str) {
            if ( typeof str == "undefined" || str == null || str == "" )
                return "";
            var txtNumber = '' + str;
            return txtNumber.replace(/(,)/g, "");
        };
	},

    audio: function (box) {
        /*this.isSfx = false;
        this.isBGM = false;*/
        box.Init = function() {
        };
        box.AudioInit = function() {
            this._sound = [];
            this._bgm = [];

            var audioList = ResourcesManager.Preloader['audio'];
            audioList.forEach(function(args) {
                if(args[2] === 'bgm')
                    this._bgm[args[0]] = this.game.add.audio(args[0],1,true);
                else
                    this._sound[args[0]] = this.game.add.audio(args[0]);
            }, this);

            // 아이폰 사운드 오프상태에서 홈버튼으로 나갔다가 돌아오면, 사운드(온/오프)해도 사운드가 안나오는 문제
            this.game.input.onDown.addOnce(function() {
                try {
                    this.game.sound.context.resume();
                    console.log('MG.game.sound.context.resume() 2')
                } catch (e) {}
            });
        };

		box.AudioSwitch = function(on) {
			kData.isSfx = !on;
			kData.isBGM = !on;
			// todo : 사운드 온오프시 세이브처리는 박에서 해준다.
			//	this.storage.set('isSfx', this.isSfx );
			//	this.storage.set('isBGM', this.isBGM );
		};

        box.PlayAudio = function(sound, loop) {
            if(kData.isSfx){
                if(this._sound && this._sound[sound]){
                    if(loop) {
                        this._sound[sound].loop = true;
                    } else {
                        this._sound[sound].loop = false;
                    }


                    //this._sound[sound].play();

                    //---------------txtlg<<
                    // MG.txt2fn('play audio,  .context.state0  '+ MG.game.sound.context.state + '(resume try)  '+ sound+'  vol:'+MG._sound[sound].volume);
                    // MG.txt2fn(
                    //     'ctxState:' + MG.game.sound.context.state +
                    //     '  isPlaying:' + MG._sound[sound].isPlaying +
                    // '  volume:' + MG._sound[sound].volume +
                    // '  isDecoded:' + MG._sound[sound].isDecoded +
                    // '   mute:' + MG._sound[sound].mute
                    // );
                    //---------------txtlg

                    if (MG.game.sound.context && MG.game.sound.context.state !== 'running') {
                        MG.game.sound.context.resume().then(() => {
                            //---------------txtlg<<
                            //MG.txt2fn('cb_resume0-->,  '+ MG.game.sound.context.state + 'play:' + sound);
                            //---------------txtlg
                            MG._sound[sound].play();
                        });
                    } else {
                        MG._sound[sound].play();
                    }
                }
                // 아이폰 사운드 오프상태에서 홈버튼으로 나갔다가 돌아오면, 사운드(온/오프)해도 사운드가 안나오는 문제
                //
                // try {
                //     this.game.sound.context.resume();
                //     console.log('MG.game.sound.context.resume() 3')
                // } catch (e) {}
            }
        };
        box.SetAudioVolume = function(sound, v) {
            // if (this._sound && this._sound[sound]) {
            //     this._sound[sound].volume = v;
            // }else{
            //     if(lg) console.log('err: .SetAudioVolume(');
            // }

            //---------------txtlg<<
            //MG.txt2fn('setaudiovolume,  .context.state1  '+ MG.game.sound.context.state + '(resume try)  '+sound+'  vol:'+MG._sound[sound].volume);
            //---------------txtlg

            if (this._sound && this._sound[sound]) {
                if (MG.game.sound.context && MG.game.sound.context.state !== 'running') {
                    MG.game.sound.context.resume().then(() => {
                        //---------------txtlg<<
                        //MG.txt2fn('cb_resume1-->,  '+ MG.game.sound.context.state + 'volmume:' + v + '  '+sound);
                        //---------------txtlg
                        MG._sound[sound].volume = v;
                    });
                } else {
                    MG._sound[sound].volume = v;
                }
            }
        };
        box.StopAudio  = function(sound) {
            this._sound[sound].loop = false;
            this._sound[sound].stop();
        };

        box.PlayBgm  = function(bgm, loop) {
            if(loop !== undefined) loop = true;
            if(kData.isBGM){
                if(this._bgm && this._bgm[bgm]) {
                    if(this.currentBGM != undefined)
                        this._bgm[this.currentBGM].stop();
                    this.currentBGM = bgm;

                    //this._bgm[bgm].play('', 0, 1, loop);

                    MG.txt2fn('playbgm,  .context.state3  '+ MG.game.sound.context.state + '(resume try)  '+bgm+'  vol:'+MG._bgm[bgm].volume);
                    if (MG.game.sound.context && MG.game.sound.context.state !== 'running') {
                        MG.game.sound.context.resume().then(() => {
                            //---------------txtlg<<
                            //MG.txt2fn('cb_resume3-->,  '+ MG.game.sound.context.state + '  bgm:' + sound);
                            //---------------txtlg
                            MG._bgm[bgm].play('', 0, 1, loop);
                        });
                    } else {
                        MG._bgm[bgm].play('', 0, 1, loop);
                    }
                }
                // // 아이폰 사운드 오프상태에서 홈버튼으로 나갔다가 돌아오면, 사운드(온/오프)해도 사운드가 안나오는 문제
                // try {
                //     this.game.sound.context.resume();
                //     console.log('MG.game.sound.context.resume() 4')
                // } catch (e) {}
            }
        };
        box.SetBgmVolume = function(bgm, v){
            if(this.currentBGM == undefined) return;
            this._bgm[this.currentBGM].volume = v;
        };
        box.StopBgm  = function(bgm) {
            if(this.currentBGM == undefined) return;
            this._bgm[this.currentBGM].stop();
        };
        box.PauseBgm  = function() {
            if(this.currentBGM == undefined) return;
            this._bgm[this.currentBGM].pause();
        };
        box.ResumeBgm  = function() {
            if(!kData.isBGM) return;
            if(this.currentBGM == undefined) return;
            this._bgm[this.currentBGM].resume();
        };
        box.FadeInBgm  = function(duration, cb) {
            if(this.currentBGM == undefined) return;
            this._bgm[this.currentBGM].fadeIn(duration, true);
            setTimeout(function(){ if(cb) cb(); }.bind(this), duration);
        };
        box.FadeOutBgm  = function(duration, cb) {
            if(this.currentBGM == undefined) return;
            this._bgm[this.currentBGM].fadeOut(duration);
            setTimeout(function(){ if(cb) cb(); }.bind(this), duration);
        };
        box.isPlayingBgm  = function() {
            if(this.currentBGM == undefined) return;
            return this._bgm[this.currentBGM].isPlaying;
        };
        box.GetThisBgm = function () {
            if(this.currentBGM == undefined) return;
            console.log(this._bgm[this.currentBGM]);
            return this._bgm[this.currentBGM];
        };
	}
};
window[''] = window[''] || {};
window[''].MoviGame = MoviGame;
'use strict';
var MG = MoviGame('utils','audio', function(){});
var lg = true;
function Boot() {}
Boot.prototype = {
    preload: function () {
        MG.Initialize(this.game);
        MG.resourcesManager.loader(ResourcesManager.MoviLoad);
    },
    create: function () {
        // MSSDK를 초기화를 해준다. 이안에 adsInit가 들어있다.
        MSSDK.initializeAsync({}, function(){   // {isBanner:true}광고 결제로 인해 광고가 안보여야 할경우 isBanner:false로 설정해준다.
            if(lg) console.log(' MSSDK.initializeAsync(');
            MG.NM.LocalLoad(function(){
                if(lg) console.log('MG.NM.LocalLoad(');
                adsInit({isBanner:true});
                Define.LANG = (MSSDK.LANG=="ko"?Define.tbLang[0]:Define.tbLang[1]);

                if(kData.iVer < Define.SAVE_VER){
                    // todo : 마이그레이션 작업
                }

                MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
                    kData.isSfx = kData.isBGM = onoff; //게임스낵 첫사운드
                });
                MSSDK.scoreUpdate(kData.iBestScore);//GameSnacks

                if(lg) console.log('.game.state.start(preloader');
                this.game.state.start('preloader');
            }.bind(this));
        }.bind(this));
    }
};


window[''] = window[''] || {};
window[''].Boot = Boot;
'use strict';

// 3x3 고정
function makeSquareShape(_y, _x) {
    var result = [];

    for(var y = _y; y < _y + 3; y++) {
        for(var x = _x; x < _x + 3; x++) {
            result.push({y : y, x : x});
        }
    }

    return result;
}

function GetAnim(type) {
    return (function () {
        var result = [];
        var lastIdx = gameOption.animFrame.findIndex(
            function (value) { return value.hasOwnProperty(type) }) + 1;
        var idx = 0;

        for(var i = 0; i < lastIdx; i++) {
            if(i >= lastIdx-1) {
                for(var j = 0; j < Object.values(gameOption.animFrame[i])[0]; j++) {
                    result.push(idx + j);
                }
            } else {
                idx += Object.values(gameOption.animFrame[i])[0];
            }
        }

        return result;
    })();
}

function GetClearLine() {
    var checkLine = [];

    // 3x3 모양의 사각형
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            checkLine.push(makeSquareShape(i * 3, j * 3))
        }
    }

    // 가로 세로 라인
    for (var y = 0; y < 9; y++)
    {
        var rowLines = [];
        var colLines = [];

        for (var x = 0; x < 9; x++)
        {
            rowLines.push({y: y, x: x});
            colLines.push({y: x, x: y});
        }

        checkLine.unshift(rowLines);
        checkLine.push(colLines);
    }

    return checkLine;
}


function GetRandIndex(arr) {
    var dr = parseFloat(Math.random() * 100.00).toFixed(1);

    for (var i = 0; i < arr.length; i++)
    {
        if (parseFloat(dr) < parseFloat(arr[i])) {
            return i + 1;
        }
    }
}

// color tween
function tweenTint(object, startColor, endColor, time, autoStart, delay, repeat, yoyo) {
    if (object) {
        var colorBlend = {step: 0};
        var colorTween = MG.game.add.tween(colorBlend).to({step: 100}, time, Phaser.Easing.Linear.None, autoStart, delay, repeat, yoyo);
        colorTween.onUpdateCallback(function () {
            object.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
        });
        object.tint = startColor;
        return colorTween;
    }
}

function Fade() {
    this.grp = MG.DrawRect(MG.game.world, 0, 0, MG.iMSW, MG.iMSH, 0x000000, 0, true);
    this.grp.visible = false;

    var _this = this;

    this.in = function (inTime, cb) {
        _this.grp.visible = true;
        _this.grp.alpha = 0;
        var tweenFadeIn = MG.game.add.tween(_this.grp).to({alpha:1}, inTime, Phaser.Easing.Power0, true);
        tweenFadeIn.onComplete.add(function(){
            if(cb) cb();
        }, this);
    };

    this.out = function (outTime, cb) {
        var tweenFadeOut = MG.game.add.tween(_this.grp).to({alpha:0}, outTime, Phaser.Easing.Power0, true);
        tweenFadeOut.onComplete.add(function(){
            if(cb) cb();
            _this.grp.visible = false;
        }, this);
    };

    this.inOut = function (inTime, outTime, inCb, outCb) {
        _this.in(inTime, function()
        {
            if(inCb) inCb();

            _this.out(outTime, function ()
            {
                if(outCb) outCb();
            });
        });
    }
}



// 점수가 항상 똑같아서 걍 값 넣어버림..
GetComboScore = function (idx) {
    switch (idx) {
        default:
        case 1: return 90;
        case 2: return 270;
        case 3: return 540;
        case 4: return 1080;
        case 5: return 1800;
        case 6: return 3240;
        case 7: return 5040;
        case 8: return 7920;
        case 9: return 12960;
    }
};

/*
*  0 : 빈칸
*  1 : 블록
*  2 : 중심점 ( 블록 )
*  3 : 중심점 ( 빈칸 )
*
* */
GetBlockForm = function (idx) {
    var dir;

    switch (idx) {
        default:
        case 1:
            dir = [
                [2]
            ];
            break;
        case 2:
            dir = [
                [1, 2]
            ];
            break;
        case 3:
            dir = [
                [1],
                [2]
            ];
            break;
        case 4:
            dir = [
                [1, 2, 1]
            ];
            break;
        case 5:
            dir = [
                [1],
                [2],
                [1]
            ];
            break;
        case 6:
            dir = [
                [1, 0, 0],
                [0, 2, 0],
                [0, 0, 1]
            ];
            break;
        case 7:
            dir = [
                [0, 0, 1],
                [0, 2, 0],
                [1, 0, 0]
            ];
            break;
        case 8:
            dir = [
                [1, 1],
                [1, 2]
            ];
            break;
        case 9:
            dir = [
                [1, 1, 0],
                [0, 2, 1]
            ];
            break;
        case 10:
            dir = [
                [0, 1],
                [1, 2],
                [1, 0]
            ];
            break;
        case 11:
            dir = [
                [0, 1, 1],
                [1, 2, 0]
            ];
            break;
        case 12:
            dir = [
                [1, 0],
                [1, 2],
                [0, 1]
            ];
            break;
        case 13:
            dir = [
                [0, 1, 0],
                [0, 2, 0],
                [1, 1, 1]
            ];
            break;
        case 14:
            dir = [
                [1, 0, 0],
                [1, 2, 1],
                [1, 0, 0]
            ];
            break;
        case 15:
            dir = [
                [1, 1, 1],
                [0, 2, 0],
                [0, 1, 0]
            ];
            break;
        case 16:
            dir = [
                [0, 0, 1],
                [1, 2, 1],
                [0, 0, 1]
            ];
            break;
        case 17:
            dir = [
                [0, 0, 1],
                [0, 3, 1],
                [1, 1, 1]
            ];
            break;
        case 18:
            dir = [
                [1, 0, 0],
                [1, 3, 0],
                [1, 1, 1]
            ];
            break;
        case 19:
            dir = [
                [1, 1, 1],
                [1, 3, 0],
                [1, 0, 0]
            ];
            break;
        case 20:
            dir = [
                [1, 1, 1],
                [0, 3, 1],
                [0, 0, 1]
            ];
            break;
        case 21:
            dir = [
                [0, 1, 0],
                [1, 2, 1],
                [0, 1, 0]
            ];
            break;
        case 22:
            dir = [
                [1, 1, 2, 1, 1]
            ];
            break;
        case 23:
            dir = [
                [1],
                [1],
                [2],
                [1],
                [1]
            ];
            break;
        case 24:
            dir = [
                [0, 1],
                [1, 2]
            ];
            break;
        case 25:
            dir = [
                [1, 0],
                [1, 2]
            ];
            break;
        case 26:
            dir = [
                [1, 1],
                [1, 3]
            ];
            break;
        case 27:
            dir = [
                [1, 1],
                [0, 2]
            ];
            break;
        case 28:
            dir = [
                [0, 1],
                [1, 2]
            ];
            break;
        case 29:
            dir = [
                [0, 1, 0],
                [0, 2, 1],
                [0, 1, 0]
            ];
            break;
        case 30:
            dir = [
                [1, 1, 1],
                [0, 2, 0]
            ];
            break;
        case 31:
            dir = [
                [0, 1, 0],
                [1, 2, 0],
                [0, 1, 0]
            ];
            break;
        /*case 99:
            dir = [
                [0, 1, 1, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 0, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 0, 1]
            ];
            break;*/
        case 99:
            dir = [
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 2, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0]
            ];
            break;
    }

    return dir;
};

function customFlat(arr) {
    return arr.reduce(function (acc, val) { return acc.concat(val); }, []);
}

function sortObject(o)

{

    var sorted = {}, key, a = [];
    // 키이름을 추출하여 배열에 집어넣음

    for (key in o) {

        if (o.hasOwnProperty(key)) a.push(key);

    }
    // 키이름 배열을 정렬

    a.sort();

    // 정렬된 키이름 배열을 이용하여 object 재구성

    for (key=0; key<a.length; key++) {

        sorted[a[key]] = o[a[key]];

    }

    return sorted;

}
'use strict';

function Preloader() {
    this.ready = false;
    this.loadingText = null;
    this.sprLoad = null;
}

Preloader.prototype = {
    preload: function () {
        var _this = this;
        var iCSX = this.game.world.centerX;

        //this.stage.backgroundColor = '#ffcc3c'; //예전
        this.stage.backgroundColor = '#ffffff';

        this.sprLoad = [];

        //this.sprLoad[0] = this.add.sprite(MG.iCSX, MG.iCSY - 100, 'logo_movisoft_0.png');
        //this.sprLoad[0].anchor.setTo(0.5, 0.5);
        this.loadingText = this.add.text(MG.iCSX, MG.iCSY, "12%",
            { font: "32px Arial", fill: "#636363", align: "center" });
        this.loadingText.anchor.setTo(0.5, 0.5);

        // this.sprLoad[0] = this.add.graphics(iCSX, 520);
        // this.sprLoad[0].beginFill(0xe7eaf0);
        // this.sprLoad[0].arc(0, 0, 250, 0, Math.PI*2);
        // this.sprLoad[0].endFill();
        //
        // this.sprLoad[1] = this.add.graphics(iCSX, 520);
        // this.sprLoad[1].beginFill(0xfe7234);
        // this.sprLoad[1].arc(0, 0, 250, MG.game.math.degToRad(-90), MG.game.math.degToRad(360-90+0), true, 360);
        // this.sprLoad[1].endFill();
        //
        // this.sprLoad[2] = this.add.sprite(iCSX, 520, 'pop.png');
        // this.sprLoad[2].anchor.setTo(0.5, 0.5);
        //
        // this.sprLoad[3] = this.add.sprite(iCSX, 836, 'movi.png');
        // this.sprLoad[3].anchor.setTo(0.5, 0.5);
        //
        // this.loadingText = this.add.text(iCSX, 675, "0%", { font: "32px Arial", fill: "#636363", align: "center" });
        // this.loadingText.anchor.setTo(0.5, 0.5);

        this.load.onFileComplete.add(this.onFileComplete, this);
        this.load.onLoadComplete.add(this.onLoadComplete, this);

        MG.resourcesManager.loader(ResourcesManager.Preloader);

        // this.splashScreen = (function () {
        //     var _Instance = {};
        //
        //     var bg = MG.game.add.graphics(0, 0);
        //     bg.beginFill(0xffffff);
        //     bg.drawRect(0, 0, MG.iMSW, MG.iMSH);
        //     bg.endFill();
        //     bg.visible = false;
        //
        //     var txt = _this.add.sprite(MG.iCSX, MG.iCSY, 'Splash_Screen_Text.png');
        //     txt.anchor.setTo(0.5, 0.5);
        //     txt.alpha = 0;
        //
        //     var ageSpr = _this.add.sprite(MG.iCSX + 280, MG.iCSY - 550, 'Splash_Screen_Icon.png');
        //     ageSpr.anchor.setTo(0.5, 0.5);
        //     ageSpr.alpha = 0;
        //
        //     _Instance.show = function (cb) {
        //         bg.visible = true;
        //         ageSpr.alpha = 0;
        //         txt.alpha = 0;
        //
        //         MG.game.add.tween(ageSpr).to({alpha : 1}, 2000, Phaser.Easing.Default, true);
        //         MG.game.add.tween(txt).to({alpha : 1}, 2000, Phaser.Easing.Default, true).onComplete.add(function ()
        //         {
        //             if(cb) cb();
        //         });
        //     };
        //
        //     _Instance.hide = function (cb) {
        //
        //         MG.game.add.tween(ageSpr).to({alpha : 0}, 2000, Phaser.Easing.Default, true);
        //         MG.game.add.tween(txt).to({alpha : 0}, 2000, Phaser.Easing.Default, true).onComplete.add(function ()
        //         {
        //             if(cb) cb();
        //         });
        //     };
        //
        //     _Instance.inOut = function (inCb, outCb) {
        //         _Instance.show(function ()
        //         {
        //             if(inCb) inCb();
        //
        //             _Instance.hide(function ()
        //             {
        //                 if(outCb) outCb();
        //             });
        //         })
        //     };
        //
        //     return _Instance;
        // })();
    },
    onFileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        // this.sprLoad[1].beginFill(0xfe7234);
        // this.sprLoad[1].arc(0, 0, 250, this.math.degToRad(-90), this.math.degToRad(270-(3.59999*progress)), true, 360);
        // this.sprLoad[1].endFill();
        this.loadingText.setText(progress + "%");
    },
    onLoadComplete: function () {
        // 리소스 로드 완료후 오디오 셋팅
        MG.AudioInit();
        if(Define.bLocalHost == false){
            // adsInit({isBanner:true}, function(){});
        }
        MG.LM = new LocalizingManager();
        MG.LM.Init(function () {
            this.game.state.start('game');
            this.destroy();
        }.bind(this));
    },
    destroy :function () {
        console.log("  >>>>  destroy  <<<<");
        // this.sprLoad.forEach(function (t) {
        //     t.destroy();
        // });

        this.loadingText.destroy();
    }
};




window[''] = window[''] || {};
window[''].Preloader = Preloader;



'use strict';

function getSoundButtonName() {
    return kData.isBGM ? "Btn_Sound_On.png" : "Btn_Sound_Off.png";
}

function toggleSound(btn, onFrame, offFrame) {

    if(kData.isBGM == true) {
        btn.loadTexture("gameAtlas", offFrame);
        kData.isBGM = kData.isSfx = false;

        MG.SetAudioVolume('SE_GameOver', 0);//MG.PauseBgm();
        if(gGameOverLoopSoundEvent)
        {
            clearTimeout(gGameOverLoopSoundEvent);
            gGameOverLoopSoundEvent = null;
        }

    } else {
        btn.loadTexture("gameAtlas", onFrame);
        kData.isBGM = kData.isSfx = true;

        if(kData.isBGM === true){
            MG.SetAudioVolume('SE_GameOver', 1);//MG.ResumeBgm();
        }
    }

    ///// 원본
    // if(kData.isBGM == true) {
    //     btn.loadTexture("gameAtlas", offFrame);
    //     kData.isBGM = kData.isSfx = false;
    //
    //     MG.PauseBgm();
    // } else {
    //     btn.loadTexture("gameAtlas", onFrame);
    //     kData.isBGM = kData.isSfx = true;
    //
    //     if(MG.GetThisBgm() && MG.GetThisBgm().paused === true)
    //         MG.ResumeBgm();
    //     else
    //         MG.PlayBgm("BGM_Lobby~");
    // }

    MG.NM.LocalSave();
}

function UI_Title(parent) { this.SetUi(parent); return this; }

UI_Title.prototype.SetUi = function (parent) {
    this.main = MG.game.add.group();
    parent. addChild(this.main);
    // this.main.visible = false;

    var _this = this;

    // 타이틀 스파인
    this.titleSpine = MG.game.add.spine( MG.iCSX, MG.iCSY, 'titleSpine' );
    this.titleSpine.setAnimationByName(0, 'In', false);
    this.main.addChild(this.titleSpine);

    this.titleSpine.state.onComplete = function (trackIndex)
    {
        switch (trackIndex)
        {
            case 0:
                _this.titleSpine.setAnimationByName(1, 'Idle', true);
                break;
            case 2:
                _this.loadGameScene();
                break;
        }
    };

    if(MSSDK.getBackButton() == true)
    {
        var btnExit = MG.AddButtonSprite(this.main, 50, 53, "gameAtlas", "Btn_Exit.png");
        btnExit.events.onInputUp.add(function () {
            MSSDK.gameExit(true);
        }.bind(this), this);
    }

    MG.AddSprite(this.main, MG.iMSW-5, 15, 'Grade', null, 1, 0);

    var btnSoundParent = this.titleSpine.children[this.titleSpine.skeleton.findSlotIndex("Btn_Sound")];
    var btnSound = MG.AddButtonSprite(btnSoundParent, MSSDK.getBackButton() == true ? 70 : 0, -35, "gameAtlas", getSoundButtonName());
    btnSound.events.onInputUp.add(function() { toggleSound(btnSound, "Btn_Sound_On.png", "Btn_Sound_Off.png") }.bind(this), this);
    this.btnSound = btnSound; //게임스낵 사운드버튼 저장-타이틀
    btnSound.visible = false

    this.soundUpdate = function () { btnSound.frameName = getSoundButtonName(); };

    var btnPlayParent = this.titleSpine.children[this.titleSpine.skeleton.findSlotIndex("Btn_Start")];
    var btnPlay = MG.AddButtonSprite(btnPlayParent, 0, 0, "gameAtlas", "Title_Btn_Start.png");
    btnPlay.events.onInputUp.add(function()
    {
        console.log(":::::::::::: 게임 시작 :::::::::::::::::");
        MG.NM.start();
        MG.disableTouch = true;

        MG.game.add.tween(btnPlay.scale).to( { x : 1.3, y : 1.3 }, 300, Phaser.Easing.Back.In, true, 0, 0, true);

        MG.PlayAudio("SE_Start");

        setTimeout(function()
        {
            MG.disableTouch = false;

            _this.titleSpine.setAnimationByName(2, 'Out', false);

            MG.uiGame.start();
        }, 500);
    }.bind(this), this);

    // 카피라이트
    //게임스낵 MG.AddText(this.main, MG.iCSX, MG.iCSY + 625, "Ⓒ MoviSoft Co.,Ltd. All Rights Reserved.",  {font:"15px Arial",fill:"#000000",align:"center"});
    // 버전 텍스트
    MG.AddText(this.main, 10, MG.iMSH-10, Define.txtVer,
        {font:"11px Arial", fill: "#000000", align:"center"}, 0, 0.5);

};

UI_Title.prototype.Show = function () {

    if(!Define.bLocalHost && Define.RANKING_GAME) {//랭킹
        if(PopconGame.PhaserRanking) PopconGame.PhaserRanking.setRankIconVisible(true);
    }

    THIS_STATE = GAME_STATE.TITLE;

    this.titleSpine.state.clearTracks();
    this.titleSpine.skeleton.setToSetupPose();

    setTimeout(function()
    {
        this.main.visible = true;

        this.titleSpine.setAnimationByName(0, 'In', false);
    }.bind(this), 50);

    this.soundUpdate();
};

UI_Title.prototype.Hide = function () {

    if(!Define.bLocalHost && Define.RANKING_GAME) {//랭킹
        if(PopconGame.PhaserRanking) PopconGame.PhaserRanking.setRankIconVisible(false);
    }

    this.main.visible = false;
};

UI_Title.prototype.loadGameScene = function () {

    THIS_STATE = GAME_STATE.LOADING;

    this.Hide();
};
'use strict';

function CheckAd(scb, fcb)
{
	if(Define.bLocalHost)
	{
		if(scb) scb();
		MG.disableTouch = false;
		return;
	}

	if((++Define.iADCnt)%3==1 || ((new Date().getTime() - Define.iTimeStemp) >= 120000)){
		// var _now = new Date().getTime();
		// if((new Date().getTime() - Define.iTimeStemp) >= 120000)
		// {
		Define.iTimeStemp = new Date().getTime();

		MG.PauseBgm();
		MG.StopAudio("SE_GameOver");

		ShowAD("basic", "result", function (){
			MG.ResumeBgm();
			MG.disableTouch = false;
			if(scb) scb();
		}, function (){
			MG.ResumeBgm();
			MG.disableTouch = false;
			if(fcb) fcb();
		});
		// }
	}
	else
	{
		if(fcb) fcb();
		MG.disableTouch = false;
	}

}

function UI_Popup(parent) {
	this.main = MG.game.add.group();
	parent.addChild(this.main);
}


// 게임 완전 종료 처리
UI_Popup.prototype.GameOver = function ()
{
	var _this = this;

	return (function () {
		// UI 생성
		if(_this.P_GameOver === undefined)
		{
			_this.P_GameOver = {};
            console.log(":::::::::게임오버::::::::::");

			_this.P_GameOver.main = MG.game.add.group();
			_this.main.addChild(_this.P_GameOver.main);

			var btnSound = MG.AddButtonSprite(_this.P_GameOver.main, 25, 25, "gameAtlas", getSoundButtonName());
			btnSound.anchor.x = btnSound.anchor.y = 0;
			_this.btnSound = btnSound; //게임스낵 사운드버튼 저장-팝업

			var btnRetry = MG.AddButtonSprite(_this.P_GameOver.main, MG.iCSX, MG.iCSY+380, "gameAtlas", "Btn_Replay.png");

			_this.P_GameOver.init = function ()
			{
				MG.PlayAudio("SE_GameOver", false);
				changeBgColor(MG.game.stage.backgroundColor, 0xf44042, 300, true);

				MG.uiGame.scoreUi.showResult();

				btnSound.loadTexture("gameAtlas", getSoundButtonName());
				btnSound.position.setTo(25, 25);
				btnRetry.position.setTo(MG.iCSX, MG.iCSY+400);

				_this.P_GameOver.main.alpha = 0;

				MG.disableTouch = true;
				MG.game.add.tween(_this.P_GameOver.main).to({alpha : 1}, 475, Phaser.Easing.Default, true).onComplete.add(function()
				{
					CheckAd(function(){
						MG.disableTouch = false;
					}, function(){
						MG.disableTouch = false;
					});
				});

				_this.P_GameOver.main.visible = true;
				_this.main.addChild(_this.P_GameOver.main);

				for(var i = _this.P_GameOver.main.children.length-1; i >= 0; i--) {
					_this.P_GameOver.main.addChild(_this.P_GameOver.main.children[i]);
				}
			};

			_this.P_GameOver.retry = function ()
			{
				changeBgColor(MG.game.stage.backgroundColor, 0xf3cb30, 300, true);

				MG.StopAudio("SE_GameOver");
				MG.FadeOutBgm(300);

				MG.game.add.tween(btnSound).to({y : -1500}, 300, Phaser.Easing.Default, true);
				MG.game.add.tween(btnRetry).to({y : 1500}, 300, Phaser.Easing.Default, true).onComplete.add(function()
				{
					_this.P_GameOver.main.visible = false;

					MG.uiTitle.Show();
					MG.uiGame.init();
				});
			};

			btnSound.events.onInputUp.add(function() { toggleSound(btnSound, "Btn_Sound_On.png", "Btn_Sound_Off.png") }.bind(this), this);
            btnSound.visible = false
			btnRetry.events.onInputUp.add(_this.P_GameOver.retry, this);
		}
		else
		{

		}

		_this.P_GameOver.init();

		return _this.P_GameOver;
	})();
};

UI_Popup.prototype.Revive = function()
{
	var _this = this;

	return (function () {
		// UI 생성
		if(_this.P_Revive === undefined)
		{
			_this.P_Revive = {};

			_this.P_Revive.main = MG.game.add.group();
			_this.main.addChild(_this.P_Revive.main);

			var center = MG.AddSprite(_this.P_Revive.main, MG.iCSX, MG.iCSY, "gameAtlas", "transparent.png");

			var txtRevive = MG.AddText(center, 0, -125, MG.LM.Get("ad_revival"),
				{font:"36px GongGothicMedium", fill: "#ffffff", align:"center"});

			var btnYes = MG.AddButtonSprite(center, 150 , 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnYes, 0, 2, MG.LM.Get("yes"), {font:"32px GongGothicMedium", fill: "#2091f0", align:"center"});

			var btnNo = MG.AddButtonSprite(center, -150, 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnNo, 0, 2, MG.LM.Get("no"), {font:"32px GongGothicMedium", fill: "#f44042", align:"center"});

			var soundFc = function()
			{
				var delay = Math.random() * 500;

				MG.PlayAudio("SE_Damage");

				gGameOverLoopSoundEvent = setTimeout(function()
				{
					if(kData.isBGM === true) soundFc();
				}, 500 + delay);
			};

			_this.P_Revive.init = function ()
			{
				changeBgColor(MG.game.stage.backgroundColor, 0x2091f0, 300, true);

				if(kData.isBGM === true) soundFc();

				center.scale.setTo(0.1);

				MG.disableTouch = true;
				MG.game.add.tween(center.scale).to({x: 1, y: 1}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function()
				{
					MG.disableTouch = false;
				});

				_this.P_Revive.main.visible = true;
				_this.main.addChild(_this.P_Revive.main);

				for(var i = _this.P_Revive.main.children.length-1; i >= 0; i--) {
					_this.P_Revive.main.addChild(_this.P_Revive.main.children[i]);
				}
			};

			_this.P_Revive.close = function(cb)
			{
				MG.game.add.tween(center.scale).to({x: 0, y: 0}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function () {
					_this.P_Revive.main.visible = false;

					if(cb) cb();
				});
			};

			_this.P_Revive.yes = function()
			{
				MG.disableTouch = true;

				MG.uiFade.in(300, function()
				{
					if(gGameOverLoopSoundEvent)
					{
						clearTimeout(gGameOverLoopSoundEvent);
						gGameOverLoopSoundEvent = null;
					}

					ShowAD("reward", "revive", function(){
						Define.iTimeStemp = new Date().getTime();
						MG.uiFade.out(300, function(){
							changeBgColor(MG.game.stage.backgroundColor, 0xf3cb30, 300, true);
							_this.P_Revive.close(function(){
								MG.uiGame.reviveChar();
							});
						});
					}, function (){
						Define.iTimeStemp = new Date().getTime();
						MG.uiFade.out(300, function(){
							changeBgColor(MG.game.stage.backgroundColor, 0xf44042, 300, true);
							_this.P_Revive.close(function(){
                                MG.disableTouch = false;
                                _this.GameOver();
                                //MG.uiGame.isGamePlaying = true;
								// MG.uiGame.reviveChar();
							});
						});
					});
				});
			};

			_this.P_Revive.no = function()
			{
				if(gGameOverLoopSoundEvent)
				{
					clearTimeout(gGameOverLoopSoundEvent);
					gGameOverLoopSoundEvent = null;
				}

				_this.P_Revive.close(function()
				{
					_this.GameOver();
				});
			};

			btnYes.events.onInputUp.add(_this.P_Revive.yes, this);
			btnNo.events.onInputUp.add(_this.P_Revive.no, this);
		}
		else
		{

		}

		_this.P_Revive.init();

		return _this.P_Revive;
	})();
};

UI_Popup.prototype.Skip = function()
{
	var _this = this;

	return (function () {
		// UI 생성
		if(_this.P_Skip === undefined)
		{
			_this.P_Skip = {};

			_this.P_Skip.main = MG.game.add.group();
			_this.main.addChild(_this.P_Skip.main);

			var center = MG.AddSprite(_this.P_Skip.main, MG.iCSX, MG.iCSY, "gameAtlas", "transparent.png");

			var txtRevive = MG.AddText(center, 0, -125, MG.LM.Get("ad_skip"),
				{font:"36px GongGothicMedium", fill: "#ffffff", align:"center"});

			var btnYes = MG.AddButtonSprite(center, 150 , 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnYes, 0, 2, MG.LM.Get("yes"), {font:"32px GongGothicMedium", fill: "#2091f0", align:"center"});

			var btnNo = MG.AddButtonSprite(center, -150, 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnNo, 0, 2, MG.LM.Get("no"), {font:"32px GongGothicMedium", fill: "#f44042", align:"center"});

			_this.P_Skip.init = function ()
			{
				changeBgColor(MG.game.stage.backgroundColor, 0x2091f0, 300, true);

				center.scale.setTo(0.1);

				MG.disableTouch = true;
				MG.game.add.tween(center.scale).to({x: 1, y: 1}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function()
				{
					MG.disableTouch = false;
				});

				_this.P_Skip.main.visible = true;
				_this.main.addChild(_this.P_Skip.main);

				for(var i = _this.P_Skip.main.children.length-1; i >= 0; i--) {
					_this.P_Skip.main.addChild(_this.P_Skip.main.children[i]);
				}
			};

			_this.P_Skip.close = function(cb)
			{
				MG.game.add.tween(center.scale).to({x: 0, y: 0}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function () {
					_this.P_Skip.main.visible = false;

					if(cb) cb();
				});
			};

			_this.P_Skip.yes = function()
			{
				MG.disableTouch = true;

				MG.uiFade.in(300, function()
				{
					ShowAD("reward", "skip", function(){
						Define.iTimeStemp = new Date().getTime();
						MG.uiFade.out(300, function(){
							changeBgColor(MG.game.stage.backgroundColor, 0xf3cb30, 300, true);
							_this.P_Skip.close(function(){
								MG.uiGame.superSkip();
							});
						});
					}, function (){
						Define.iTimeStemp = new Date().getTime();
						MG.uiFade.out(300, function(){
							changeBgColor(MG.game.stage.backgroundColor, 0xf3cb30, 300, true);
							_this.P_Skip.close(function(){
								//MG.uiGame.superSkip();//보상 실패인데 지급??

                                //MG.disableTouch = false;
                                MG.uiGame.start(true);
							});
						});
					});
				});
			};

			_this.P_Skip.no = function()
			{
				changeBgColor(MG.game.stage.backgroundColor, 0xf3cb30, 300, true);

				_this.P_Skip.close(function()
				{
					MG.uiGame.start(true);
				});
			};

			btnYes.events.onInputUp.add(_this.P_Skip.yes, this);
			btnNo.events.onInputUp.add(_this.P_Skip.no, this);
		}
		else
		{

		}

		_this.P_Skip.init();

		return _this.P_Skip;
	})();
};

UI_Popup.prototype.MultiShuriken = function( )
{
	var _this = this;

	return (function () {
		// UI 생성
		if(_this.P_Shuriken === undefined)
		{
			_this.P_Shuriken = {};

			_this.P_Shuriken.main = MG.game.add.group();
			_this.main.addChild(_this.P_Shuriken.main);

			var center = MG.AddSprite(_this.P_Shuriken.main, MG.iCSX, MG.iCSY, "gameAtlas", "transparent.png");

			var txtRevive = MG.AddText(center, 0, -125, MG.LM.Get("ad_triple"),
				{font:"36px GongGothicMedium", fill: "#ffffff", align:"center"});

			MG.AddSprite(center, 0, 75, "gameAtlas", "Btn_3Suriken_1.png");

			var btnYes = MG.AddButtonSprite(center, 150 , 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnYes, 0, 2, MG.LM.Get("yes"), {font:"32px GongGothicMedium", fill: "#2091f0", align:"center"});

			var btnNo = MG.AddButtonSprite(center, -150, 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnNo, 0, 2, MG.LM.Get("no"), {font:"32px GongGothicMedium", fill: "#f44042", align:"center"});

			_this.P_Shuriken.init = function ()
			{
				changeBgColor(MG.game.stage.backgroundColor, 0x2091f0, 300, true);

				center.scale.setTo(0.1);

				MG.disableTouch = true;
				MG.game.add.tween(center.scale).to({x: 1, y: 1}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function()
				{
					MG.disableTouch = false;
				});

				_this.P_Shuriken.main.visible = true;
				_this.main.addChild(_this.P_Shuriken.main);

				for(var i = _this.P_Shuriken.main.children.length-1; i >= 0; i--) {
					_this.P_Shuriken.main.addChild(_this.P_Shuriken.main.children[i]);
				}
			};

			_this.P_Shuriken.close = function(cb)
			{
				changeBgColor(MG.game.stage.backgroundColor, 0xf3cb30, 300, true);

				MG.game.add.tween(center.scale).to({x: 0, y: 0}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function () {
					_this.P_Shuriken.main.visible = false;

					MG.uiGame.main.visible = true;

					MG.uiGame.isAiming = true;

					if(cb) cb();
				});
			};

			_this.P_Shuriken.yes = function()
			{
				MG.disableTouch = true;

				MG.uiFade.in(300, function()
				{
					ShowAD("reward", "shuriken", function(){
						Define.iTimeStemp = new Date().getTime();
						MG.uiFade.out(300, function(){
							_this.P_Shuriken.close(function(){
								MG.uiGame.enableMultiShuriken();
							});
						});
					}, function (){
                        Define.iTimeStemp = new Date().getTime();
                        MG.uiFade.out(300, function(){
                            _this.P_Shuriken.close(function(){
                                //MG.uiGame.enableMultiShuriken();//보상 실패인데 지급??
                                MG.disableTouch = false;
                            });
                        });
					});
				});
			};

			_this.P_Shuriken.no = function()
			{
				_this.P_Shuriken.close(function()
				{

				});
			};

			btnYes.events.onInputUp.add(_this.P_Shuriken.yes, this);
			btnNo.events.onInputUp.add(_this.P_Shuriken.no, this);
		}
		else
		{

		}

		_this.P_Shuriken.init();

		return _this.P_Shuriken;
	})();
};

// 라이프 +1 창
UI_Popup.prototype.ReplenishLife = function( )
{
	var _this = this;

	return (function () {
		// UI 생성
		if(_this.P_Life === undefined)
		{
			_this.P_Life = {};

			_this.P_Life.main = MG.game.add.group();
			_this.main.addChild(_this.P_Life.main);

			var center = MG.AddSprite(_this.P_Life.main, MG.iCSX, MG.iCSY, "gameAtlas", "transparent.png");

			var txtLife = MG.AddText(center, 0, -125, MG.LM.Get("ad_life"),
				{font:"36px GongGothicMedium", fill: "#ffffff", align:"center"});

			MG.AddSprite(center, 0, 75, "gameAtlas", "Btn_Life.png");

			var btnYes = MG.AddButtonSprite(center, 150 , 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnYes, 0, 2, MG.LM.Get("yes"), {font:"32px GongGothicMedium", fill: "#2091f0", align:"center"});

			var btnNo = MG.AddButtonSprite(center, -150, 260, "gameAtlas", "Btn_Popup.png");
			MG.AddText(btnNo, 0, 2, MG.LM.Get("no"), {font:"32px GongGothicMedium", fill: "#f44042", align:"center"});

			_this.P_Life.init = function ()
			{
				changeBgColor(MG.game.stage.backgroundColor, 0x2091f0, 300, true);

				center.scale.setTo(0.1);

				MG.disableTouch = true;
				MG.game.add.tween(center.scale).to({x: 1, y: 1}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function()
				{
					MG.disableTouch = false;
				});

				_this.P_Life.main.visible = true;
				_this.main.addChild(_this.P_Life.main);

				for(var i = _this.P_Life.main.children.length-1; i >= 0; i--) {
					_this.P_Life.main.addChild(_this.P_Life.main.children[i]);
				}
			};

			_this.P_Life.close = function(cb)
			{
				changeBgColor(MG.game.stage.backgroundColor, 0xf3cb30, 300, true);

				MG.game.add.tween(center.scale).to({x: 0, y: 0}, 300, Phaser.Easing.Quartic.Out, true).onComplete.add(function () {
					_this.P_Life.main.visible = false;

					MG.uiGame.main.visible = true;

					MG.uiGame.isAiming = true;

					if(cb) cb();
				});
			};

			_this.P_Life.yes = function()
			{
				MG.disableTouch = true;

				MG.uiFade.in(300, function()
				{
					ShowAD("reward", "life", function(){
						Define.iTimeStemp = new Date().getTime();
						MG.uiFade.out(300, function(){
							_this.P_Life.close(function(){
								MG.uiGame.lifePanel.replenishLifeCnt();
								MG.disableTouch = false;
							});
						});
					}, function (){
						Define.iTimeStemp = new Date().getTime();
						MG.uiFade.out(300, function(){
							_this.P_Life.close(function(){
								//MG.uiGame.lifePanel.replenishLifeCnt();//보상 실패인데 지급??
								MG.disableTouch = false;
							});
						});
					});
				});
			};

			_this.P_Life.no = function()
			{
				_this.P_Life.close(function()
				{

				});
			};

			btnYes.events.onInputUp.add(_this.P_Life.yes, this);
			btnNo.events.onInputUp.add(_this.P_Life.no, this);
		}
		else
		{

		}

		_this.P_Life.init();

		return _this.P_Life;
	})();
};

'use strict';

/*
*   gameOption.targetCount : 목표물 개수,
    gameOption.targetSize : 목표물 사이즈,
    gameOption.targetRotationSpeed : 목표물 회전속도 ( 음수로가면 역회전 ),
    gameOption.targetDistanceFromCenter : 목표물 거리,

*   gameObject.zigzagMoveDistance : zigzag 이동 거리
*
    gameOption.missileLifeTime : 미사일 지속시간,
    gameOption.missileSpeed : 미사일 발사속도,
    gameOption.missileSize : 미사일 사이즈,
    gameOption.missileRotationSpeed : 미사일 회전속도 ( 음수로가면 역회전 ),
    gameOption.missileDistanceFromCenter : 미사일 거리,
* */

var animFrames = [
    {fire : 6},
    {smoke1 : 11 },
    {smoke2 : 4},
];

var gameOptions = {
    playerY : 640,
    zigzag : false,

    centerRotaionSpeed : 3,

    targetCount : 8,
    targetSize : 60,
    targetRotationSpeed : 0,
    targetDistanceFromCenter : 200,

    zigzagMoveDistance : 0,

    missileDistanceFromCenter : 50,
    missileLifeTime : 1,
    missileRotationSpeed : 3,
    missileSpeed : 22.5,
    missileSize : 35,
    missileMultiAngle : 10,
    multiMissileCount : 15      // 멀티표창 카운트
};

var gameOption = {};

function GetAnim(type) {
    return (function () {
        var result = [];
        var lastIdx = animFrames.findIndex(
            function (value) { return value.hasOwnProperty(type) }) + 1;
        var idx = 0;

        for(var i = 0; i < lastIdx; i++) {
            if(i >= lastIdx-1) {
                for(var j = 0; j < Object.values(animFrames[i])[0]; j++) {
                    result.push(idx + j);
                }
            } else {
                idx += Object.values(animFrames[i])[0];
            }
        }

        return result;
    })();
}

Object.defineProperties(gameOption, {

    targetCount : {
        get : function ()      { return gameOptions.targetCount },
        set : function (value) { gameOptions.targetCount = value; MG.uiGame.updateGameStatus(); }
    },

    targetSize : {
        get : function ()      { return gameOptions.targetSize },
        set : function (value) { MG.game.add.tween(gameOptions).to( { targetSize : value }, 3000, Phaser.Easing.Quartic.In, true); }
    },

    targetDistanceFromCenter : {
        get : function ()      { return gameOptions.targetDistanceFromCenter },
        set : function (value) { MG.game.add.tween(gameOptions).to( { targetDistanceFromCenter : value }, 3000, Phaser.Easing.Quartic.In, true); }
    },

    zigzagMoveDistance : {
        get : function ()      { return gameOptions.zigzagMoveDistance }
        // set : function (value) { MG.game.add.tween(gameOptions).to( { zigzagMoveDistance : value }, 500, Phaser.Easing.Quartic.In, true); }
    },



    targetRotationSpeed : {
        get : function ()      { return gameOptions.targetRotationSpeed }
        // set : function (value) {
        //     console.log(":::::::::::::::::::::::::::: value = " + value);
        //     // if(value === -0.999999){
        //     //     gameOptions.targetRotationSpeed = 0;
        //     // }else{
        //     //     if(gameOptions.targetRotationSpeed === 0){
        //     //         gameOptions.targetRotationSpeed = value;  // Blooming : 5레벨 되었을때 바로 회전 하기 위해...
        //     //     }else{
        //             MG.game.add.tween(gameOptions).to( { targetRotationSpeed : value }, 3000, Phaser.Easing.Quartic.In, true);
        //         // }
        //     // }
        // }
    },

    missileSize : {
        get : function ()      { return gameOptions.missileSize },
        set : function (value) { gameOptions.missileSize = value; MG.uiGame.updateMissile(); }
    },

    missileDistanceFromCenter : {
        get : function ()      { return gameOptions.missileDistanceFromCenter },
        set : function (value) { MG.game.add.tween(gameOptions).to( { missileDistanceFromCenter : value }, 1000, Phaser.Easing.Power2, true); }
    },

    missileRotationSpeed : {
        get : function ()      { return gameOptions.missileRotationSpeed },
        set : function (value) { MG.game.add.tween(gameOptions).to( { missileRotationSpeed : value }, 1000, Phaser.Easing.Power2, true); }
    },

    missileSpeed : {
        get : function ()      { return gameOptions.missileSpeed },
        set : function (value) { gameOptions.missileSpeed = value }
    },
});

function collision(p1x, p1y, r1, p2x, p2y, r2) {
    var a = r1 + r2;
    var x = p1x - p2x;
    var y = p1y - p2y;

    return a > Math.sqrt((x * x) + (y * y));
}

function UI_Game(parent) { this.setUi(parent); return this; }

UI_Game.prototype.setUi = function (parent)
{
    console.log(":::::::::::::::::::: ver. "+Define.txtVer+" ::::::::::::::::::::::::::");

    this.main = MG.game.add.group();
    parent.addChild(this.main);
    // this.main.visible = false;

    this.grTrans = MG.game.add.group();
    this.main.addChild(this.grTrans);
    this.btnExit = null;

    // if(Enum.DEVICE_STATE.IOS === Define.DEVICE)
    // {
    //     this.btnExit = MG.AddButtonSprite(this.main, MG.iCSX - 300, MG.iCSY - 450, "gameAtlas", "Btn_Exit.png");
    //     this.btnExit.events.onInputUp.add(function () {
    //         MSSDK.gameExit(true);
    //     }.bind(this), this);
    // }

    var _this = this;

    this.replenishLifeLevelCnt = 0;

    this.inputSpace = MG.DrawRect(MG.grTouch, 0, 0, MG.iMSW, MG.iMSH, 0x000000, 0, true);
    this.inputSpace.events.onInputDown.add(function ()
    {
        if(_this.isTuto || (_this.isGamePlaying && _this.isAiming))
        {
            _this.fireBullet();
        }
    });

    this.lifePanel = (function()
    {
        var _Instance = {};

        _Instance.main = MG.game.add.group();
        _this.grTrans.addChild(_Instance.main);

        var lifeSprites = [];

        var lifeCnt = 2;

        for(var i = 0; i < 2; i++)
        {
            lifeSprites[i] = MG.AddSprite(_Instance.main, MG.iCSX+225 + i*60, 110, "gameAtlas", "Player_Front.png");
            lifeSprites[i].scale.setTo(0.4);
        }

        _Instance.init = function()
        {
            _Instance.main.visible = false;
        };

        _Instance.ready = function()
        {
            _Instance.main.visible = true;

            lifeCnt = 2;

            for(var i = 0; i < lifeSprites.length; i++)
            {
                lifeSprites[i].scale.setTo(0);

                lifeSprites[i].visible = true;

                MG.game.add.tween(lifeSprites[i].scale).to({x: .4, y: .4 }, 200, Phaser.Easing.Quartic.Out, true, i * 100);
            }
        };

        _Instance.getLifeCnt = function()
        {
            return lifeCnt;
        };

        _Instance.reduceLifeCnt = function()
        {
            lifeCnt--;

            MG.game.add.tween(lifeSprites[lifeCnt].scale).to({x: 0, y: 0 }, 200, Phaser.Easing.Quartic.Out, true).onComplete.add(function()
            {
                lifeSprites[lifeCnt].visible = false;
            });
        };

        // 라이프 +1
        _Instance.replenishLifeCnt = function()
        {
            lifeSprites[lifeCnt].visible = true;

            MG.game.add.tween(lifeSprites[lifeCnt].scale).to({x: .4, y: .4 }, 200, Phaser.Easing.Quartic.Out, true);

            _this.shurikenManager.disableLifeBtn();

            lifeCnt++;

            _this.replenishLifeLevelCnt = _this.scoreUi.getScore();      // 라이프 획득 시 스코어 저장, (20레벨 이전에는 발생 X)
        };

        return _Instance;
    })();

    this.objectManager = (function ()
    {
        var _Instance = {};

        var objectList = [];

        _Instance.main = MG.game.add.group();
        _this.main.addChild(_Instance.main);

        _Instance.init = function ()
        {
            for(var i = 0; i < objectList.length; i++)
            {
                objectList[i].visible = false;
            }
        };

        _Instance.ready = function(cb)
        {
            for(var i = 0; i < objectList.length; i++)
            {
                objectList[i].visible = true;

                MG.game.add.tween(objectList[i].spr.scale).to( { x : .65, y : .65 }, 500, Phaser.Easing.Quartic.In, true);
            }

            gameOptions.targetDistanceFromCenter = 1000;

            gameOptions.targetSize = 60;

            _this.updateTargetPostion();

            MG.game.add.tween(gameOptions).to( { targetDistanceFromCenter : 200 }, 600, Phaser.Easing.Quartic.In, true).onComplete.add(function()
            {
                gameOptions.targetDistanceFromCenter = 200;
                if(cb) cb();
            });
        };

        _Instance.getObject = function ()
        {
            var index = _Instance.getEnableObjectCnt();

            if(index >= objectList.length)
            {
                objectList[index] = MG.game.add.group();
                objectList[index].spr = MG.AddSprite(objectList[index], 0, 0, "gameAtlas", "Enemy.png");

                objectList[index].smoke = MG.AddSprite(objectList[index], 0, 0, "animAtlas", "Smoke_A_01.png");
                objectList[index].smoke.animations.add("bomb", GetAnim("smoke1"));
                objectList[index].smoke.scale.setTo(1.5);

                objectList[index].attacked = function ()
                {
                    MG.PlayAudio("SE_Pop");

                    this.smoke.visible = true;

                    this.smoke.animations.play('bomb', 10, false).onComplete.addOnce(function()
                    {
                        this.smoke.visible = false;
                    }.bind(this));

                }.bind(objectList[index]);

                objectList[index].enable = function ()
                {
                    this.spr.alpha = 1;

                    MG.game.tweens.removeFrom(this);

                    MG.game.add.tween(this.spr.scale).to( { x : .8, y : .8 }, 75, Phaser.Easing.Back.In, true).onComplete.add(function()
                    {
                        MG.game.add.tween(this.spr.scale).to( { x : .65, y : .65 }, 75, Phaser.Easing.Back.Out, true);
                    }.bind(this));
                }.bind(objectList[index]);
            }

            objectList[index].smoke.visible = false;

            objectList[index].visible = true;

            _Instance.main.addChild(objectList[index]);

            return objectList[index];
        };

        _Instance.getEnableObjectCnt = function ()
        {
            var index = 0;

            for(var i=0; i < objectList.length; i++)
            {
                if(objectList[i].visible) index++;
                else break;
            }

            return index;
        };

        _Instance.getTarget = function ()
        {
            return _this.targets.filter(function(obj) { return obj.isTarget === true })[0];
        };

        return _Instance;
    })();

    this.shurikenManager = (function ()
    {
        var _Instance = {};

        var objectList = [];

        var multiShurikenCnt = 0;

        var btnMultiShuriken = MG.AddButtonSprite(_this.grTrans, 25 , 1280 - 25, "gameAtlas", "Btn_3Suriken_1.png");
        btnMultiShuriken.events.onInputUp.add(function()
        {
            MG.uiPopup.MultiShuriken();

            _this.main.visible = false;

            _this.isAiming = false;

            _this.isEnableItemBtn = false;
        });
        btnMultiShuriken.scale.setTo(.5);
        btnMultiShuriken.anchor.setTo(0, 1);

        var btnLife = MG.AddButtonSprite(_this.grTrans, 25 , 1280 - 25, "gameAtlas", "Btn_Life.png");
        btnLife.events.onInputUp.add(function()
        {
            MG.uiPopup.ReplenishLife();

            _this.main.visible = false;

            _this.isAiming = false;

            _this.isEnableItemBtn = false;
        });
        btnLife.scale.setTo(.5);
        btnLife.anchor.setTo(0, 1);
        var txtBtnLife = MG.AddText(_this.grTrans, 128, -80, '+1', {font:"50px GongGothicMedium", fill: "#FFFFFF", align:"center", stroke:"rgba(10,34,66,0.5)", strokeThickness:8});
        btnLife.addChild(txtBtnLife);

        var panelMultiShuriken = MG.AddSprite(_this.grTrans, MG.iCSX-255, 100, "gameAtlas", "Btn_3Suriken_2.png");
        var txtMutiShurikenCnt = MG.AddText(panelMultiShuriken, 0, 25, '10',  {font: "24px GongGothicMedium", fill: "#ffffff", boundsAlignH: 'center'});

        _Instance.init = function()
        {
            if(_Instance.getIsMultiShuriken())
                _Instance.disableMultiShuriken();

            if(_this.shurikens.length < 1)
                _this.shurikens[0] = _Instance.getObject();

            MG.game.add.tween(gameOptions).to({missileDistanceFromCenter : 150}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(_this.shurikens[0].scale).to({x: 1, y: 1}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(_this.shurikens[0].trail_r.scale).to({x: _this.shurikens[0].trail_r.scale.x * 2, y: 1}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(_this.shurikens[0].trail_r).to({y : MG.iCSY + 125}, 500, Phaser.Easing.Default, true);

            _Instance.enableTrail(0);

            btnMultiShuriken.visible = false;
            btnLife.visible = false;

            panelMultiShuriken.visible = false;
        };

        _Instance.ready = function()
        {
            MG.game.add.tween(_this.shurikens[0].scale).to({x: .6, y: .6}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(_this.shurikens[0].trail_r.scale).to({x: _this.shurikens[0].trail_r.scale.x > 0 ? .5 : -.5, y: .5}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(_this.shurikens[0].trail_r).to({y : MG.iCSY + 75}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(gameOptions).to({missileDistanceFromCenter : 75}, 500, Phaser.Easing.Default, true);

            MG.game.tweens.removeFrom(btnMultiShuriken);

            multiShurikenCnt = 0;
        };

        _Instance.getObject = function ()
        {
            var index = _Instance.getEnableObjectCnt();

            if(index >= objectList.length)
            {
                objectList[index] = MG.game.add.group();
                _this.main.addChild(objectList[index]);

                objectList[index].x = MG.iCSX;
                objectList[index].y = MG.iCSY;

                objectList[index].trail_r = MG.AddSprite(_this.main, MG.iCSX, MG.iCSY+125, "gameAtlas", "Shuriken_Line_Rotate.png");
                objectList[index].trail_r.visible = false;
                objectList[index].trail_r.scale.setTo(.5);

                objectList[index].trail_s = MG.AddSprite(objectList[index], 0, 0, "gameAtlas", "Shuriken_Line_Straight.png");
                objectList[index].trail_s.anchor.x = 0;
                objectList[index].trail_s.visible = false;

                objectList[index].spr = MG.AddSprite(objectList[index], 0, 0, "gameAtlas", "Suriken.png");
            }

            objectList[index].scale.setTo(.6);

            objectList[index].visible = true;

            return objectList[index];
        };

        _Instance.enableTrail = function(type)
        {
            for(var i = 0; i < _this.shurikens.length; i++)
            {
                objectList[i].trail_r.visible = false;
                objectList[i].trail_s.visible = false;

                switch(type)
                {
                    case 0:
                        objectList[0].trail_r.visible = true;

                        if(_this.isGamePlaying) {
                            objectList[0].trail_r.y = MG.iCSY + 75;
                        } else {
                            objectList[0].trail_r.y = MG.iCSY + 125;
                        }
                        break;
                    case 1:
                        objectList[i].trail_s.visible = true;
                        break;
                }
            }
        };

        _Instance.reverseTrail = function()
        {
            for(var i = 0; i < _this.shurikens.length; i++)
            {
                objectList[i].trail_r.scale.x = -objectList[i].trail_r.scale.x;

                objectList[i].trail_r.angle -= 180;
            }
        };

        _Instance.getEnableObjectCnt = function ()
        {
            var index = 0;

            for(var i = 0; i < objectList.length; i++)
            {
                if(objectList[i].visible) index++;
                else break;
            }

            return index;
        };

        _Instance.enableLifeBtn = function()
        {
            btnLife.visible = true;
            btnLife.inputEnabled = true;

            btnLife.scale.setTo(0);

            btnLife.x = 25;

            MG.game.add.tween(btnLife.scale).to({x: .5, y: .5}, 150, Phaser.Easing.Default, true).onComplete.add(function()
            {
                var moveTween = MG.game.add.tween(btnLife).to({x: 695 - btnLife.width}, 12000, Phaser.Easing.Default, true);
                var cosY = 0;

                moveTween._onUpdateCallback = function()
                {
                    btnLife.y = 1255 + 15 * Math.cos(Phaser.Math.degToRad(cosY));

                    cosY = (cosY + 2) % 360;
                };

                moveTween.onComplete.addOnce(function()
                {
                    // 커졌다 작아졌다. yoyo
                    for(var i=1; i<9; i++){
                        MG.game.add.tween(btnLife.scale).to({x: 0.53, y: 0.53}, 150, Phaser.Easing.Back.InOut, true, (330 * i)).yoyo(true, 30);
                    }
                    MG.game.add.tween(btnLife.scale).to({x: 0, y: 0}, 300, Phaser.Easing.Back.In, true, 3000).onComplete.add(function() {
                        btnLife.visible = false;
                        _this.isEnableItemBtn = false;
                    });
                });
            });

            _this.isEnableItemBtn = true;
        };

        _Instance.getLifeBtn = function()
        {
            return btnLife;
        };

        _Instance.getIsEnableLifeBtn = function()
        {
            return btnLife.visible;
        };

        _Instance.disableLifeBtn = function()
        {
            btnLife.visible = false;
        };

        _Instance.enableMultiShurikenBtn = function()
        {
            btnMultiShuriken.visible = true;
            btnMultiShuriken.inputEnabled = true;

            btnMultiShuriken.scale.setTo(0);

            btnMultiShuriken.x = 25;

            MG.game.add.tween(btnMultiShuriken.scale).to({x: .5, y: .5}, 150, Phaser.Easing.Default, true).onComplete.add(function()
            {
                var moveTween = MG.game.add.tween(btnMultiShuriken).to({x: 695 - btnMultiShuriken.width}, 12000, Phaser.Easing.Default, true);
                var cosY = 0;

                moveTween._onUpdateCallback = function()
                {
                    btnMultiShuriken.y = 1255 + 15 * Math.cos(Phaser.Math.degToRad(cosY));

                    cosY = (cosY + 2) % 360;
                };

                moveTween.onComplete.addOnce(function()
                {
                    // 커졌다 작아졌다. yoyo
                    for(var i=1; i<9; i++){
                        MG.game.add.tween(btnMultiShuriken.scale).to({x: 0.53, y: 0.53}, 150, Phaser.Easing.Back.InOut, true, (330 * i)).yoyo(true, 30);
                    }
                    MG.game.add.tween(btnMultiShuriken.scale).to({x: 0, y: 0}, 300, Phaser.Easing.Back.In, true, 3000).onComplete.add(function() {
                        btnMultiShuriken.visible = false;
                        _this.isEnableItemBtn = false;
                    });
                });
            });

            _this.isEnableItemBtn = true;
        };

        _Instance.enableMultiShuriken = function()
        {
            btnMultiShuriken.visible = false;

            panelMultiShuriken.visible = true;

            multiShurikenCnt = gameOptions.multiMissileCount;      // 멀티표창 지급 (카운트)

            txtMutiShurikenCnt.text = multiShurikenCnt;
        };

        _Instance.disableMultiShuriken = function()
        {
            for(var i = 0; i < 2; i++)
            {
                var disableObj = _this.shurikens.pop();

                disableObj.visible = false;
            }
        };

        _Instance.updateMultiShuriken = function()
        {
            multiShurikenCnt--;

            txtMutiShurikenCnt.text = multiShurikenCnt;

            if(multiShurikenCnt < 1)
            {
                panelMultiShuriken.visible = false;

                _Instance.disableMultiShuriken();
            }
        };

        _Instance.getMultiShurikenBtn = function()
        {
            return btnMultiShuriken;
        };

        _Instance.getIsEnableMultiShurikenBtn = function()
        {
            return btnMultiShuriken.visible;
        };

        _Instance.getIsMultiShuriken = function()
        {
            return multiShurikenCnt > 0;
        };

        return _Instance;
    })();

    this.player = (function ()
    {
        var _Instance = {};

        _Instance.main = MG.game.add.group();
        _this.main.addChild(_Instance.main);

        var fire = MG.AddSprite(_Instance.main, MG.iCSX, MG.iCSY + 25, "animAtlas", "Fire_01.png");
        fire.animations.add("fire", GetAnim("fire"));
        fire.scale.setTo(1.5);
        fire.visible = false;

        var sprite = MG.AddSprite(_Instance.main, MG.iCSX, MG.iCSY + 125, "gameAtlas", "Player_Front.png");

        var smoke = MG.AddSprite(_Instance.main, MG.iCSX, MG.iCSY + 75, "animAtlas", "Smoke_B_01.png");
        smoke.animations.add("attacked", GetAnim("smoke2"));
        smoke.scale.setTo(1.5);
        smoke.visible = false;

        var reviveSpine = MG.game.add.spine( MG.iCSX, MG.iCSY + 75, 'reviveSpine');
        reviveSpine.visible = false;
        _Instance.main.addChild(reviveSpine);

        var cutSceneSpr =  MG.AddSprite(_this.main, MG.iCSX, MG.iCSY, "gameAtlas", "Skip_Character.png");
        cutSceneSpr.visible = false;

        _Instance.init = function()
        {
            MG.game.add.tween(sprite.scale).to({x: 1, y: 1}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(sprite).to({y: MG.iCSY + 125}, 500, Phaser.Easing.Default, true);

            smoke.animations.stop("attacked");
            smoke.visible = false;
        };

        _Instance.lookDirection = function(dir)
        {
            if(dir === 4)
            {
                sprite.frameName = "Player_Front.png";
                return;
            }

            // 반대로 돌시 캐릭터가 보는 방향 보정

            if(_this.bulletAngle < 0)
            {
                if     (dir === 1) dir = 3;
                else if(dir === 3) dir = 1;
            }

            switch(dir)
            {
                case 0:
                    MG.game.add.tween(_Instance.main).to({y: _Instance.main.y + 10}, 100, Phaser.Easing.Default, true, 0, 0, true);
                    break;
                case 1:
                    MG.game.add.tween(_Instance.main).to({x: _Instance.main.x + 10}, 100, Phaser.Easing.Default, true, 0, 0, true);
                    break;
                case 2:
                    MG.game.add.tween(_Instance.main).to({y: _Instance.main.y - 10}, 100, Phaser.Easing.Default, true, 0, 0, true);
                    break;
                case 3:
                    MG.game.add.tween(_Instance.main).to({x: _Instance.main.x - 10}, 100, Phaser.Easing.Default, true, 0, 0, true);
                    break;
            }

            sprite.frameName = "Player_" + dir + ".png";
        };

        _Instance.ready = function()
        {
            MG.game.add.tween(sprite.scale).to({x: .4, y: .4}, 500, Phaser.Easing.Default, true);

            MG.game.add.tween(sprite).to({y: MG.iCSY + 75}, 500, Phaser.Easing.Default, true);
        };

        _Instance.revive = function()
        {
            reviveSpine.setAnimationByName(0, 'Resurrection', false);
            reviveSpine.visible = true;

            smoke.animations.stop("attacked");
            smoke.visible = false;
        };

        _Instance.surprised = function(cb)
        {
            MG.game.add.tween(sprite.scale).to({x: .25, y: .55}, 100, Phaser.Easing.Default, true, 0, 2, true).onComplete.addOnce(function()
            {
                if(cb) cb();
            });

            sprite.frameName = "dead.png";
        };

        _Instance.attacked = function ()
        {
            smoke.animations.play("attacked", 10, true);
            smoke.visible = true;
        };

        _Instance.fire = function()
        {
            MG.PlayAudio("SE_Fire");

            fire.animations.play("fire", 10, true);
            fire.visible = true;
        };

        _Instance.stopFire = function()
        {
            fire.animations.stop("fire");
            fire.visible = false;
        };

        _Instance.getSprite = function()
        {
            return sprite;
        };

        _Instance.playCutScene = function(cb)
        {
            _this.main.addChild(cutSceneSpr);

            cutSceneSpr.x = -1000;
            cutSceneSpr.visible = true;

            MG.PlayAudio("SE_CutScene");

            MG.game.add.tween(cutSceneSpr).to({x: MG.iCSX - 100 }, 600, Phaser.Easing.Quartic.Out, true).onComplete.add(function()
            {
                MG.game.add.tween(cutSceneSpr).to({x: 2000}, 600 * 1.27, Phaser.Easing.Quartic.In, true).onComplete.add(function()
                {
                    if(cb) cb();
                })
            });
        };

        return _Instance;
    })();

    this.scoreUi = (function ()
    {
        var _Instance = {};

        _Instance.main = MG.game.add.group();
        _this.main.addChild(_Instance.main);

        var txt = MG.AddText(_Instance.main, MG.iCSX, 110, '',  {font: "90px GongGothicMedium", fill: "#ffffff", boundsAlignH: 'center'});

        //---------------txtlg<<
        // var txt2 = MG.AddText(_Instance.main, 5, 10, '',  {font: "20px GongGothicMedium", fill: "#000000", boundsAlignH: 'center'}, 0,0);
        // MG.txt = txt;
        // MG.txt2 = txt2;
        // MG.txt2_idx = 0;
        // MG.txt2fn = function (str){
        //     if(MG && MG.txt2) {
        //         MG.txt2.text += (str + '  ' +MG.txt2_idx+ '\n');
        //         MG.txt2_idx+=1;
        //         const newlineCount = (MG.txt2.text.match(/\n/g) || []).length;
        //         if (newlineCount > 37) {
        //             const index = MG.txt2.text.indexOf('\n');
        //             if (index !== -1) {
        //                 MG.txt2.text = MG.txt2.text.slice(index + 1);
        //             }
        //         }
        //     }
        // }
        //---------------txtlg

        var scaleTween, scoreTween = null;

        var abScore = 0;

        var txtNewRecord = MG.AddText(_Instance.main, MG.iCSX, MG.iCSY - 300, 'NEW RECORD',  {font: "18px GongGothicMedium", fill: "#ffffff", boundsAlignH: 'center'});
        txtNewRecord.visible = false;
        var recordSpine = MG.game.add.spine(35, -15, 'recordSpine');
        txtNewRecord.addChild(recordSpine);

        _Instance.init = function ()
        {
            _Instance.main.visible = false;

            txtNewRecord.visible = false;

            txt.position.setTo(MG.iCSX, 110);
            txt.scale.setTo(1);
            txt.text = "0";

            abScore = 0;
        };

        _Instance.ready = function ()
        {
            _Instance.main.visible = true;

            txtNewRecord.visible = false;

            txt.position.setTo(MG.iCSX, 110);
            txt.scale.setTo(1);
            txt.text = "0";

            abScore = 0;
        };

        // 게임종료 결과
        _Instance.showResult = function()
        {
            console.log("::::::::: showResult() ::::::::::");
            MG.NM.end();
            var score = _Instance.getScore();

            //MSSDK.scoreUpdate(score); //게임스낵 점수
            MSSDK.gameOver();//GameSnacks

            // 스코어 전송
            setTimeout(function () {
                if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.regRanking(score, function () {
                    // setTimeout(function () {
                    //     //this.regRankView = false;
                    // }.bind(this),200);
                }.bind(this));
            }.bind(this),100);


            var isNewRecord = false;


            
            if(kData.iBestScore < score)
            {
                kData.iBestScore = score;

                isNewRecord = true;

                MG.NM.LocalSave();
            }

            MG.game.add.tween(txt).to({y : MG.iCSY - 200}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function()
            {
                if(isNewRecord)
                {
                    txtNewRecord.alpha = 0;

                    txtNewRecord.visible = true;

                    MG.game.add.tween(txtNewRecord).to({alpha : 1}, 250, Phaser.Easing.Quadratic.Out, true);

                    recordSpine.setAnimationByName(0, 'BestScore', true);
                }
            });

            MG.game.add.tween(txt.scale).to({x: 1.3, y: 1.3 }, 500, Phaser.Easing.Quadratic.Out, true);
        };

        _Instance.updateText = function (v)
        {
            var gameScore = MG.removeComma(txt.text) * 1;
            var targetScore = gameScore === abScore ? gameScore + v : abScore + v;
            var numScore = {idx: gameScore};

            abScore = targetScore;
            MSSDK.scoreUpdate(abScore); //게임스낵 점수

            scaleTween = MG.game.add.tween(txt.scale).to({x: 1.2, y: 1.2 }, 150, Phaser.Easing.Default, true);
            scaleTween.onComplete.add(function () {
                MG.game.add.tween(txt.scale).to({x: 1, y: 1}, 150, Phaser.Easing.Default, true);
            }, this);

            scoreTween = MG.game.add.tween(numScore).to({idx: targetScore}, 300, Phaser.Easing.Default, true);
            scoreTween._onUpdateCallback = function () {
                txt.text = Math.round(numScore.idx).ToString('n0');
            }.bind(this);
            scoreTween.onComplete.add(function () {
                txt.text = targetScore.ToString('n0');
            }, this);
        };

        _Instance.getScore = function ()
        {
            return abScore;
        };

        _Instance.init();

        return _Instance;
    })();

    this.currentTime = new Date();

    this.targets = [];
    this.shurikens = [];

    this.updateEvents = {};

    this.isGamePlaying = false;
    this.isEnableItemBtn = false;
    this.isRevive = false;
    this.isAiming = true;
    this.isTuto = false;

    this.missileSpinSpeed = 15;
    this.bulletAngle = 0;
    this.targetAngle = 0;
    this.sizeUpIndex = 0;

    this.patternDurationTime = 0;
    this.patternDurationTime2 = 0;      // 사이즈 업 / 다운 용
    this.playTime = 0;

    this.lastTargetIdx = -1;

    this.init();
};

UI_Game.prototype.init = function()
{
    this.updateGameStatus();

    this.isEnableItemBtn = false;
    this.isGamePlaying = false;
    this.isAiming = true;
    this.replenishLifeLevelCnt = 0;

    this.scoreUi.init();

    this.lifePanel.init();

    this.player.init();

    this.shurikenManager.init();

    this.objectManager.init();
};

/**
 * Game Start
 * @param {boolean} isSkip : 슈퍼 스킵을 사용해 게임을 시작했는지의 여부입니다. 기본적으로 undefined
 * */
UI_Game.prototype.start = function(isSkip)
{
    MG.disableTouch = true;

    if(isSkip)
    {
        this.setTargetRotationSpeed(false, 0);//gameOptions.targetRotationSpeed = 0;//-0.999999;//0;//-999;

        this.shurikens[0].visible = true;
        this.shurikens[0].trail_r.visible = true;
        this.player.stopFire();
    }
    else
    {
        this.targetAngle = 0;
        this.sizeUpIndex = 0;
        this.bulletAngle = 0;
        this.centerAngle = 0;
    }

    this.grTrans.visible = true;

    this.isFirstLevel5 = false;
    this.isFirstLevel2 = false;
    this.isFirstLevel1 = false;

    this.isEnableItemBtn = false;
    this.isGamePlaying = true;
    this.isGameOver = false;
    this.isRevive = false;

    this.scoreUi.ready();

    this.lifePanel.ready();

    this.shurikenManager.ready();

    this.player.ready();

    this.updateTargetPostion();

    this.updateGameStatus();

    if(kData.iBestScore >= 30 && !isSkip)
    {
        this.isGamePlaying = false;

        this.grTrans.visible = false;

        this.objectManager.init();

        setTimeout(function()
        {
            this.shurikens[0].visible = false;
            this.shurikens[0].trail_r.visible = false;

            this.player.fire();
        }.bind(this), 500);

        MG.uiPopup.Skip();
    }
    else
    {
        this.objectManager.ready(function()
        {
            if(kData.firstAccess)
            {
                this.playTuto();
            }
            else
            {
                MG.disableTouch = false;
            }
        }.bind(this));
    }
};

UI_Game.prototype.playTuto = function()
{
    var playerPos = this.player.getSprite();

    var txtTouch = MG.AddText(this.main, MG.iCSX, MG.iCSY + 500, MG.LM.Get("tuto1"), {font: "48px GongGothicMedium", fill: "#ffffff", boundsAlignH: 'center'});

    MG.game.add.tween(txtTouch).to({alpha : 0}, 750, Phaser.Easing.Default, true, 0, -1, true);

    MG.disableTouch = false;

    this.isAiming = false;

    this.isTuto = true;

    this.missileSpinSpeed = 0;

    this.bulletAngle = 180;

    this.shurikens[0].x = playerPos.x + gameOptions.missileDistanceFromCenter * Math.sin(Phaser.Math.degToRad(this.bulletAngle));
    this.shurikens[0].y = playerPos.y + gameOptions.missileDistanceFromCenter * Math.cos(Phaser.Math.degToRad(this.bulletAngle));
    this.shurikens[0].trail_r.angle = -90;

    this.setTargetObject(4);

    this.destroyTuto = function()
    {
        kData.firstAccess = false;

        txtTouch.destroy();

        this.isTuto = false;

        this.missileSpinSpeed = -15;

        this.destroyTuto = null;

        MG.NM.LocalSave();
    }.bind(this)
};

UI_Game.prototype.fireBullet = function ()
{
    MG.disableTouch = true;

    this.player.lookDirection(Math.floor(((45 + Math.abs(this.bulletAngle)) % 360) / 90));

    this.isAiming = false;

    this.shurikenManager.enableTrail(1);

    var isAttack = false;

    var playerPos = this.player.getSprite();

    var lifeTime = 0;

    var _this = this;

    MG.PlayAudio("SE_Shoot", true);

    // 표창 던진 후 업데이트 함수

    this.updateEvents["fire"] = function ()
    {
        var nTime = new Date();
        var fTime = nTime - _this.currentTime;

        for(var i = 0; i < _this.shurikens.length; i++)
        {
            var angleRadians = Math.PI * (_this.bulletAngle + i * gameOptions.missileMultiAngle) / 180.0;

            var xTick = Math.sin(angleRadians) * gameOptions.missileSpeed;
            var yTick = Math.cos(angleRadians) * gameOptions.missileSpeed;

            _this.shurikens[i].x += xTick;
            _this.shurikens[i].y += yTick;

            _this.shurikens[i].trail_s.x = xTick * 2;
            _this.shurikens[i].trail_s.y = yTick * 2;

            _this.shurikens[i].trail_s.angle = -90 - _this.bulletAngle;

            if(!isAttack)
            {
                var target = _this.objectManager.getTarget();

                if(collision(_this.shurikens[i].x, _this.shurikens[i].y, gameOption.missileSize / 2, target.x, target.y, gameOption.targetSize))
                {
                    target.attacked();

                    _this.scoreUi.updateText(1);

                    _this.updateGameStatus();

                    _this.updateMissile();

                    _this.shurikens[i].trail_s.visible = false;

                    var xPos = playerPos.x + gameOptions.missileDistanceFromCenter * Math.sin(Phaser.Math.degToRad(_this.bulletAngle + i * gameOptions.missileMultiAngle));
                    var yPos = playerPos.y + gameOptions.missileDistanceFromCenter * Math.cos(Phaser.Math.degToRad(_this.bulletAngle + i * gameOptions.missileMultiAngle));

                    MG.game.add.tween(_this.shurikens[i]).to({
                        x: xPos,
                        y: yPos
                    }, 250, Phaser.Easing.Linear.None, true).onComplete.add(function () {
                        _this.initBullet();

                        MG.StopAudio("SE_Shoot");

                        delete _this.updateEvents["fire"];
                    });

                    MG.disableTouch = false;

                    isAttack = true;
                }
            }

            // 빗나간 경우

            if(lifeTime >= gameOptions.missileLifeTime)
            {
                MG.disableTouch = false;

                if(!isAttack)
                {
                    if(_this.shurikenManager.getIsMultiShuriken())
                    {
                        _this.shurikenManager.updateMultiShuriken();
                    }

                    if(_this.lifePanel.getLifeCnt() > 0)
                    {
                        // 라이브 회복 버튼 트리거

                        if(!_this.isEnableItemBtn)
                        {
                            if(_this.lifePanel.getLifeCnt() < 2 && _this.scoreUi.getScore() >= 5 && Math.random() < 0.35 && (_this.replenishLifeLevelCnt <= 0 || ((_this.scoreUi.getScore() - _this.replenishLifeLevelCnt) > 20)) )
                            {
                                _this.shurikenManager.enableLifeBtn();
                            }
                        }

                        _this.lifePanel.reduceLifeCnt();

                        _this.initBullet();
                    }
                    else
                    {
                        _this.gameOver();
                    }
                }

                MG.StopAudio("SE_Shoot");

                delete _this.updateEvents["fire"];

                break;
            }
        }

        lifeTime += fTime / 1000;
    };
};

// 표창 초기화

UI_Game.prototype.initBullet = function ()
{
    if(this.shurikenManager.getIsMultiShuriken())
    {
        this.shurikenManager.updateMultiShuriken();
    }

    this.player.lookDirection(4);

    this.isAiming = true;

    this.shurikenManager.enableTrail(0);
};

UI_Game.prototype.updateGameStatus = function ()
{
    this.updateTargets();
};

UI_Game.prototype.updateMissile = function ()
{
    if(this.isTuto)
    {
        this.destroyTuto();
    }

    // 멀티 표창 버튼 활성화 트리거

    // if(!this.isEnableItemBtn && !this.shurikenManager.getIsEnableMultiShurikenBtn() && this.scoreUi.getScore() >= 5 && !this.shurikenManager.getIsMultiShuriken())
    //if(!this.isEnableItemBtn && !this.shurikenManager.getIsMultiShuriken() && !this.lifeManager.getIsEnableLifeBtn() && !this.shurikenManager.getIsEnableMultiShurikenBtn() && this.scoreUi.getScore() >= 5)
    if(!this.isEnableItemBtn && !this.shurikenManager.getIsMultiShuriken() /*&& !this.lifeManager.getIsEnableLifeBtn() && !this.shurikenManager.getIsEnableMultiShurikenBtn()*/ && this.scoreUi.getScore() >= 5)
    {
        if(Math.random() < 0.15)
        {
            this.shurikenManager.enableMultiShurikenBtn();
        }
    }

    // 표창은 맞춘 후 반대로 회전

    gameOptions.missileRotationSpeed = -gameOptions.missileRotationSpeed;

    this.shurikenManager.reverseTrail();
};

UI_Game.prototype.updateTargets = function ()
{
    var objectCnt = this.objectManager.getEnableObjectCnt();

    if(objectCnt <= gameOptions.targetCount)
    {
        for(var i = 0; i < gameOptions.targetCount - objectCnt; i++)
        {
              this.targets.push(this.objectManager.getObject());
        }
    }
    else
    {
        for(var i = 0; i < objectCnt - gameOptions.targetCount; i++)
        {
            var disableObj = this.targets.pop();

            disableObj.visible = false;
        }
    }

    for(var i = 0; i < this.targets.length; i++)
        this.targets[i].idx = i;

    this.setTargetObject();
};

UI_Game.prototype.reviveChar = function()
{
    MG.PlayAudio("SE_Revive");

    this.isGamePlaying = true;

    this.grTrans.visible = true;

    this.targets.map(function(obj) {
        obj.visible = true;
    });

    this.patternDurationTime = 0;
    this.patternDurationTime2 = 0;

    this.lifePanel.ready();

    this.player.revive();

    gameOptions.zigzag = false;

    MG.game.tweens.removeFrom(gameOptions);

    MG.game.add.tween(gameOptions).to({targetDistanceFromCenter : this.getMissileDistance() }, 300, Phaser.Easing.Back.Out, true).onComplete.add(function ()
    {
        MG.disableTouch = false;

        this.isGameOver = false;

        this.currentTime = new Date();

        this.updateGameStatus();

        this.initBullet();

    }.bind(this));
};

UI_Game.prototype.superSkip = function()
{
    var _this = this;

    var playerPos = this.player.getSprite();

    this.grTrans.visible = true;

    this.isGamePlaying = true;

    this.objectManager.ready();

    this.targets.map(function(obj) {obj.spr.alpha = 0.3; });

    setTimeout(function()
    {
        MG.disableTouch = true;

        _this.player.playCutScene(function()
        {
            _this.isGamePlaying = false;

            _this.isAiming = false;

            for(var i = 0; i < 30; i++)
            {
                setTimeout(function()
                {
                    var enemyIdx = Math.floor(Math.random() * _this.targets.length);

                    _this.shurikens.push(_this.shurikenManager.getObject());

                    var shuriken = _this.shurikens[_this.shurikens.length-1];
                    shuriken.scale.setTo(.6);

                    var baseAngle = (360 /  gameOptions.targetCount) * enemyIdx;

                    shuriken.x = playerPos.x + gameOptions.missileDistanceFromCenter * Math.sin(Phaser.Math.degToRad(baseAngle + _this.targetAngle));
                    shuriken.y = playerPos.y + gameOptions.missileDistanceFromCenter * Math.cos(Phaser.Math.degToRad(baseAngle + _this.targetAngle));

                    _this.targets[enemyIdx].enable();

                    MG.PlayAudio("SE_Shoot");

                    MG.game.add.tween(shuriken).to( { x : _this.targets[enemyIdx].x, y : _this.targets[enemyIdx].y }, 100, Phaser.Easing.Default, true).onComplete.add(function()
                    {
                        _this.scoreUi.updateText(1);

                        _this.targets[enemyIdx].attacked();

                        _this.targets[enemyIdx].spr.alpha = .3;

                        shuriken.visible = false;

                        if(this == 29)
                        {
                            MG.disableTouch = false;

                            _this.player.stopFire();

                            _this.shurikens[0].visible = true;
                            _this.shurikens[0].trail_r.visible = true;

                            _this.shurikens.length = 1;

                            _this.isGamePlaying = true;
                            _this.isAiming = true;

                            _this.updateGameStatus();
                        }
                    }.bind(this));
                }.bind(i), i * 100);
            }
        });
    }, 750);
};

UI_Game.prototype.enableMultiShuriken = function()
{
    MG.disableTouch = false;

    if(this.shurikens.length < 3)
    {
        for(var i = this.shurikens.length; i < 3; i++)
        {
            this.shurikens[i] = this.shurikenManager.getObject();
        }
    }

    this.shurikenManager.enableMultiShuriken();
    this.shurikenManager.enableTrail(0);
};

UI_Game.prototype.setTargetObject = function (targetIndex)
{
    this.targets.map(function (value)
    {
        if(value.isTarget)
        {
            value.isTarget = false;
        }

        value.spr.alpha = 0.3;
    });

    var index = targetIndex ? targetIndex : Math.floor(Math.random() * this.targets.length);

    if(index == this.lastTargetIdx)
    {
        index = Math.floor(Math.random() * this.targets.length);
    }

    this.lastTargetIdx = index;

    this.targets[index].isTarget = true;
    this.targets[index].enable();
};

UI_Game.prototype.update = function ()
{
    //console.log("--------------update-----------------");

    var playerPos = this.player.getSprite();

    // 플레이어 주위로 표창 돌리기

    if(this.isAiming)
        this.bulletAngle += gameOptions.missileRotationSpeed % 360;

    for(var i = 0; i < this.shurikens.length; i++)
    {
        if(this.isAiming)
        {
            var defaultAngle = i * gameOptions.missileMultiAngle;
            var rotationDir = this.shurikens[i].trail_r.scale.x > 0 ? 90 : -90;

            this.shurikens[i].x = playerPos.x + gameOptions.missileDistanceFromCenter * Math.sin(Phaser.Math.degToRad(defaultAngle + this.bulletAngle));
            this.shurikens[i].y = playerPos.y + gameOptions.missileDistanceFromCenter * Math.cos(Phaser.Math.degToRad(defaultAngle + this.bulletAngle));

            this.shurikens[i].trail_r.angle = defaultAngle - this.bulletAngle + rotationDir;
        }

        this.shurikens[i].spr.angle += this.missileSpinSpeed;
    }

    // ===============================

    if(this.isGamePlaying)
    {
        this.updateTargetPostion();

        this.updateGameValues();

    }
};

UI_Game.prototype.setTargetRotationSpeed = function(isSmooth, v){
    if(isSmooth){
        MG.game.add.tween(gameOptions).to( { targetRotationSpeed : v }, 3000, Phaser.Easing.Quartic.In, true);
    }else{
        gameOptions.targetRotationSpeed = v;
    }
};

// 회전 및 이동 업데이트
UI_Game.prototype.updateTargetPostion = function() {
    var playerPos = this.player.getSprite();

    this.targetAngle = this.targetAngle + gameOptions.targetRotationSpeed % 360;
    this.centerAngle = this.centerAngle + gameOptions.centerRotaionSpeed % 360;

    // this.sizeUpIndex = this.sizeUpIndex === 0 ? 1 : 0;
    //
    // if(Random.Range() > 0.5){
    //     this.sizeUpIndex = 0;
    // }else{
    //     this.sizeUpIndex = 1;
    // }

    var scale = 0.0;//var scale = parseFloat(gameOption.targetSize / 60);

    for (var i = 0; i < this.targets.length; i++)
    {
        var deafultAngle = (360 / gameOptions.targetCount) * i;

        var distance = gameOptions.targetDistanceFromCenter;

        var rotationCenterXPos = 0;
        var rotationCenterYPos = 0;

        // 중심점 원형 운동
        if(gameOptions.zigzag && !this.isGameOver)
        {
            rotationCenterXPos = gameOptions.zigzagMoveDistance * Math.sin(Phaser.Math.degToRad(this.centerAngle * 0.7));
            rotationCenterYPos = gameOptions.zigzagMoveDistance * Math.cos(Phaser.Math.degToRad(this.centerAngle * 0.7));
        }

        this.targets[i].x = playerPos.x + rotationCenterXPos + distance * Math.sin(Phaser.Math.degToRad(deafultAngle + this.targetAngle));
        this.targets[i].y = playerPos.y + rotationCenterYPos + distance * Math.cos(Phaser.Math.degToRad(deafultAngle + this.targetAngle));

        this.targets[i].angle = Phaser.Math.radToDeg(Math.PI * (-deafultAngle - this.targetAngle + 180) / 180.0);


    }

    for (var event in this.updateEvents) {
        if (typeof this.updateEvents[event] === "function") {
            this.updateEvents[event]();
        }
    }
};

// 각종 게임 수치 값들 (구글문서 '난이도'탭)
UI_Game.prototype.updateGameValues = function ()
{
    if(!this.isGameOver)
    {
        var nTime = new Date();
        var fTime = nTime - this.currentTime;
        this.currentTime = nTime;

        var tick = fTime / 1000;

        this.patternDurationTime += tick;
        this.patternDurationTime2 += tick;
        this.playTime += tick;

        gameOptions.zigzag = false;

        var level = this.getStageStatus();

        switch(level){
            case 1:
                if(!this.isFirstLevel1)
                {
                    this.isFirstLevel1 = true;
                    this.setTargetRotationSpeed(false, 0.1);//gameOption.targetRotationSpeed = 0.3;//gameOption.targetRotationSpeed = Math.min(.3, Math.random());
                }
                break;

            case 6:
                gameOptions.zigzag = true;
                if(gameOptions.zigzagMoveDistance <= 0) {
                    // console.log("-----------------------------------------------------------------");
                    MG.game.add.tween(gameOptions).to( { zigzagMoveDistance : 20 }, 1000, Phaser.Easing.Quartic.In, true);//gameOptions.zigzagMoveDistance = 20;
                }
                break;
        }

        // 적 작아지기
        if(this.patternDurationTime2 >= 2){
            if(level >= 5 ) this.ScaleEffect();
            this.patternDurationTime2 = 0;
        }

        if(this.patternDurationTime >= 4)
        {
            var rnd = 0;
            var _speed = 0.0;
            var _value = 0;

            switch(level)
            {
                case 0:
                    this.setTargetRotationSpeed(false, 0);//gameOption.targetRotationSpeed = 0;//-0.999999;//0;//-999;
                    break;
                // case 1:
                //     if(this.isFirstLevel2)
                //     {
                //         this.isFirstLevel2 = false;
                //
                //         gameOption.targetRotationSpeed = 0.3;//gameOption.targetRotationSpeed = Math.min(.3, Math.random());
                //     }
                //     gameOption.targetRotationSpeed = 0.3;//gameOption.targetRotationSpeed = Math.min(.3, Math.random());
                //     break;
                case 2:
                    _speed = 2.0;
                    _value = 0;
                    _speed = Math.round(_speed);

                    if(Math.random() >= .5){
                        _value = (Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5);
                    }else{
                        _value = ((Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5)) * -1;
                    }

                    _value *= 0.1;
                    //console.log(":::::::::::: _speed = " + _speed + "    _value = " + _value);
                    this.setTargetRotationSpeed(true, _value);

                    gameOption.targetDistanceFromCenter = 225;

                    // // this.setTargetRotationSpeed(true, Math.random() >= .5 ? Math.min(.3, Math.random()) : Math.max(-.3, -Math.random()));//gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(.5, Math.random()) : Math.max(-.5, -Math.random());
                    // rnd = ((Math.random() * 6.0) - 3.0) * 0.1;
                    // // console.log("::: level = " + level + "   ::: speed = " + rnd);
                    // this.setTargetRotationSpeed(true, rnd);//gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(.5, Math.random()) : Math.max(-.5, -Math.random());
                    break;
                case 3:
                    _speed = 4.0;
                    _value = 0;
                    _speed = Math.round(_speed);

                    if(Math.random() >= .5){
                        _value = (Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5);
                    }else{
                        _value = ((Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5)) * -1;
                    }

                    _value *= 0.1;
                    //console.log(":::::::::::: _speed = " + _speed + "    _value = " + _value);
                    this.setTargetRotationSpeed(true, _value);

                    gameOption.targetDistanceFromCenter = 250;

                    // rnd = ((Math.random() * 12.0) - 6.0) * 0.1;
                    // this.setTargetRotationSpeed(true, rnd);//gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(.7, Math.random()) : Math.max(-.7, -Math.random());
                    // // this.setTargetRotationSpeed(true, Math.random() >= .5 ? Math.min(.7, Math.random()) : Math.max(-.7, -Math.random()));//gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(.7, Math.random()) : Math.max(-.7, -Math.random());
                    break;
                case 4:
                    _speed = 6.0;
                    _value = 0;
                    _speed = Math.round(_speed);

                    if(Math.random() >= .5){
                        _value = (Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5);
                    }else{
                        _value = ((Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5)) * -1;
                    }

                    _value *= 0.1;
                    //console.log(":::::::::::: _speed = " + _speed + "    _value = " + _value);
                    this.setTargetRotationSpeed(true, _value);



                    // rnd = ((Math.random() * 12.0) - 6.0) * 0.1;
                    // this.setTargetRotationSpeed(true, rnd);//gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(1, Math.random()) : Math.max(-1, -Math.random());
                    // // this.setTargetRotationSpeed(true, Math.random() >= .5 ? Math.min(1, Math.random()) : Math.max(-1, -Math.random()));//gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(1, Math.random()) : Math.max(-1, -Math.random());
                    gameOption.targetDistanceFromCenter = (250 + (Math.random() * 50));//250 ? 300: 250; ///250 + Math.random() * 50;
                    break;
                case 5:
                    if(this.isFirstLevel5) {
                        _value = Math.random() >= .5 ? 0.8 : -0.8;
                    }else{
                        _speed = 8.0;
                        _value = 0;

                        _speed = Math.round(_speed);
                        if(Math.random() >= .5){
                            _value = (Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5);
                        }else{
                            _value = ((Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5)) * -1;
                        }
                        _value *= 0.1;
                    }

                    //console.log(":::::::::::: _speed = " + _speed + "    _value = " + _value);
                    this.setTargetRotationSpeed(true, _value);

                    //this.ScaleEffect();
                    gameOption.targetDistanceFromCenter = (250 + (Math.random() * 50));//250 ? 300: 250;
                    gameOption.targetSize = gameOption.targetSize === 45 ? 60 : 45;//gameOption.targetSize = 45 + (Math.random() * 15);//gameOption.targetSize === 50 ? 37.5 : 50;
                    break;
                case 6:
                    ////// 100점 이상일때는 25점마다 10%씩 회전 스피드 업
                    _speed = 10.0;
                    _value = 0;

                    if(this.scoreUi.getScore() > 100){
                        var _cnt =  parseInt(parseInt(this.scoreUi.getScore() - 100) / 25);
                        for(var i=0; i<_cnt; i++){
                            _speed *= 1.1;
                        }
                    }
                    _speed = Math.round(_speed);
                    if(Math.random() >= .5){
                        _value = (Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5);
                    }else{
                        _value = ((Math.random() * (_speed - (_speed * 0.5))) + (_speed * 0.5)) * -1;
                    }
                    _value *= 0.1;
                    //console.log(":::::::::::: _speed = " + _speed + "    _value = " + _value);
                    this.setTargetRotationSpeed(true, _value);
                    //gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(1.5, 0.5 + Math.random()) : Math.max(-1.5, -0.5 - Math.random());
                    // this.setTargetRotationSpeed(true, Math.random() >= .5 ? Math.min(1.5, 0.5 + Math.random()) : Math.max(-1.5, -0.5 - Math.random()));//gameOption.targetRotationSpeed = Math.random() >= .5 ? Math.min(1.5, 0.5 + Math.random()) : Math.max(-1.5, -0.5 - Math.random());
                    //this.ScaleEffect();
                    gameOption.targetDistanceFromCenter = (250 + (Math.random() * 50));//250 ? 300: 250;
                    gameOption.targetSize = gameOption.targetSize === 45 ? 60 : 45;//gameOption.targetSize = 45 + (Math.random() * 15);//gameOption.targetSize === 50 ? 37.5 : 50;
                    break;
            }


            this.patternDurationTime = 0;
        }

    }
};

UI_Game.prototype.ScaleEffect = function(){
    //gameOption.targetSize = gameOption.targetSize === 45 ? 60 : 45;
    // 사이즈업 다운을 한마리씩 건너뛰면서 적용하기로 함
    this.sizeUpIndex = this.sizeUpIndex === 0 ? 1 : 0;
    for (var i = 0; i < this.targets.length; i++) {
        if (i % 2 === this.sizeUpIndex) {
            MG.game.add.tween(this.targets[i].spr.scale).to({
                x: 0.4875,
                y: 0.4875
            }, 1990, Phaser.Easing.Linear.None, true);

            // // 작아진다
            // scale = parseFloat(gameOption.targetSize / 60);//scale = gameOption.targetSize * 0.02;
            // this.targets[i].spr.scale.setTo(scale * 0.65);//this.targets[i].spr.scale.setTo(scale * 0.65);
        } else {
            MG.game.add.tween(this.targets[i].spr.scale).to({
                x: 0.65,
                y: 0.65
            }, 1990, Phaser.Easing.Linear.None, true);

            // // 커진다 (그러나 0.65을 넘지 않는다)
            // scale = parseFloat(((60 - gameOption.targetSize) + 45) / 60);//scale = gameOption.targetSize * 0.02;
            // this.targets[i].spr.scale.setTo(scale * 0.65);//this.targets[i].spr.scale.setTo(scale * 0.65);
        }
    }

};

UI_Game.prototype.getMissileDistance = function()
{
    switch(this.getStageStatus())
    {
        case 0: case 1:
            return 200;
        case 2:
            return 225;
        default:
            return 250;
    }
};

// 현재 레벨 가져오기
UI_Game.prototype.getStageStatus = function()
{
    var score = this.scoreUi.getScore();
    // console.log("get score : ", score);

    if(score < 5)
        return 0;
    else if(5 <= score && score <= 14)
        return 1;
    else if (15 <= score && score <= 29)
        return 2;
    else if (30 <= score && score <= 49)
        return 3;
    else if (50 <= score && score <= 69)
        return 4;
    else if (70 <= score && score <= 99)
        return 5;
    else
        return 6;
};

// 게임 종료
UI_Game.prototype.gameOver = function()
{

    var _this = this;

    this.targets.map(function(obj) {obj.enable()});

    this.grTrans.visible = false;

    this.isGameOver = true;

    //여기가 게임오버가 아님 //MSSDK.gameOver(); //게임스낵 게임오버

    // 작업중
    // Blooming : 광고리워드 버튼 노출 상태에서 game over되고 이어하기 할때 다시 노출 되는것 수정
    //if(_this.isEnableItemBtn){
        if(this.shurikenManager.getLifeBtn().visible){
            this.shurikenManager.getLifeBtn().visible = false;
            this.shurikenManager.getLifeBtn().inputEnabled = false;
            this.shurikenManager.getLifeBtn().scale.setTo(0);
        }
        if(this.shurikenManager.getMultiShurikenBtn().visible){
            this.shurikenManager.getMultiShurikenBtn().visible = false;
            this.shurikenManager.getMultiShurikenBtn().inputEnabled = false;
            this.shurikenManager.getMultiShurikenBtn().scale.setTo(0);
        }
    //}

    MG.PlayAudio("SE_Surprise");

    _this.player.surprised(function()
    {
        MG.game.add.tween(gameOptions).to({targetDistanceFromCenter : 50}, 300, Phaser.Easing.Back.Out, true).onComplete.add(function ()
        {
            _this.isGamePlaying = false;

            _this.targets.map(function(obj) {obj.visible = false;});

            _this.player.lookDirection(4);

            _this.player.attacked();

            if(_this.isRevive)
            {
                MG.uiPopup.GameOver();
            }
            else
            {
                MG.uiPopup.Revive();

                _this.isRevive = true;
            }
        });
    });
};
'use strict';
function Game() {}

var THIS_STATE;

var GAME_STATE = {
    LOADING: 0,
    TITLE : 1,
    GAME : 2
};

function Fade() {
    this.grp = MG.DrawRect(MG.game.world, 0, 0, MG.iMSW, MG.iMSH, 0x000000, 0, true);
    this.grp.visible = false;

    var _this = this;

    this.in = function (inTime, cb) {
        _this.grp.visible = true;
        _this.grp.alpha = 0;
        var tweenFadeIn = MG.game.add.tween(_this.grp).to({alpha:1}, inTime, Phaser.Easing.Power0, true);
        tweenFadeIn.onComplete.addOnce(function(){
            if(cb) cb();
        }, this);
    };

    this.out = function (outTime, cb) {
        var tweenFadeOut = MG.game.add.tween(_this.grp).to({alpha:0}, outTime, Phaser.Easing.Power0, true);
        tweenFadeOut.onComplete.addOnce(function(){
            if(cb) cb();
            _this.grp.visible = false;
        }, this);
    };

    this.inOut = function (inTime, outTime, inCb, outCb) {
        _this.in(inTime, function()
        {
            if(inCb) inCb();

            _this.out(outTime, function ()
            {
                if(outCb) outCb();
            });
        });
    }
}

function changeBgColor(startColor, endColor, time, autoStart, delay, repeat, yoyo) {
    var colorBlend = {step: 0};
    console.log("컬러변경");
    var colorTween = MG.game.add.tween(colorBlend).to({step: 100}, time, Phaser.Easing.Linear.None, autoStart, delay, repeat, yoyo);
    colorTween.onUpdateCallback(function () {
        MG.game.stage.backgroundColor = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
    });
    colorTween.onComplete.addOnce(function() {
        MG.game.stage.backgroundColor = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
    });
    MG.game.stage.backgroundColor = startColor;
    return colorTween;
}

Game.prototype = {

    preload: function ()
    {
        this.game.stage.disableVisibilityChange = true; //백그라운드처리:true//백그라운드처리 막기:false
        this.game.time.advancedTiming = true;
        this.game.time._desiredFps = 60;
        this.game.time.slowMotion = 1.0;
        this.game.stage.backgroundColor = "#f3cb30";
        this.input.maxPointers = 1;
    },

    create: function ()
    {

        MSSDK.ready(); //게임스낵 ready
        MSSDK.audioSubscribe(function (onoff){ //게임스낵 오디오콜백
            // if(onoff)
            // {
            //     kData.isBGM = kData.isSfx = true;
            //     //if (MG) MG.PlayBgm(MG.curBgm);
            // }
            // else
            // {
            //     kData.isBGM = kData.isSfx = false;
            //     //if (MG) MG.StopBgm(MG.curBgm);
            // }
            if(MG && MG.game) {
                var _gm = MG.game.state.states['game'];
                _gm.sound_googlesnack(onoff);
            }
        });

        this.initGameGroup();
        this.initGame();

        // 화면 터치 설정용
        this.grp = MG.DrawRect(MG.game.world, 0, 0, MG.iMSW, MG.iMSH, 0x000000, 0, true);
        this.grp.visible = false;

        Object.defineProperties(MG, {
            disableTouch : {
                get : function ()  { return this.grp.visible; }.bind(this),
                set : function (v) {
                    //console.log("set Touch", v);
                    this.grp.visible = v;
                }.bind(this)
            }
        });

        if(!Define.bLocalHost && Define.RANKING_GAME == true) {
            if(PopconGame.PhaserRanking) PopconGame.PhaserRanking.CreateIcon(this.game, MG.iCSX, MG.iCSY);
        }

        if ( Define.PID == "100064") PopconGame.Sdk.createAppMoreGame(MG.game,70,180);
    },

    sound_googlesnack(onoff){ //게임스낵// 모든 사운드 버튼 업데이트
        window.focus();
        if(onoff == false) {
            //btn.loadTexture("gameAtlas", offFrame);
            kData.isBGM = kData.isSfx = false; //게임스낵 사운드-플랫폼버튼
            if(MG) {
                MG.SetAudioVolume('SE_GameOver', 0);//MG.PauseBgm();
                if (gGameOverLoopSoundEvent) {
                    clearTimeout(gGameOverLoopSoundEvent);
                    gGameOverLoopSoundEvent = null;
                }
            }
        } else {
            //btn.loadTexture("gameAtlas", onFrame);
            kData.isBGM = kData.isSfx = true; //게임스낵 사운드-플랫폼버튼
            if(MG) {
                //if (kData.isBGM === true) {
                    MG.SetAudioVolume('SE_GameOver', 1);//MG.ResumeBgm();
                //}
            }
        }
        var _gm = MG.game.state.states['game'];
        if(MG.uiTitle && MG.uiTitle.btnSound)
            MG.uiTitle.btnSound.loadTexture("gameAtlas", getSoundButtonName());
        if(MG.uiPopup && MG.uiPopup.btnSound)
            MG.uiPopup.btnSound.loadTexture("gameAtlas", getSoundButtonName());
    },

    update: function()
    {
        // gDeltaTime += 1.0 / this.game.time._desiredFps;
        // if(gDeltaTime >= ONEFRAMETIME){
        //     gDeltaTime = 0;
        //     //console.log(":::::::::::::::::::: " + 1.0 / this.game.time._desiredFps);
        //     // console.log(":::::::::::::::::::: " + this.game.time.physicsElapsed);
        //     MG.uiGame.update();
        // }
        // console.log(":::::::::::::::::::: " + 1.0 / this.game.time._desiredFps);
        // console.log(":::::::::::::::::::: " + this.game.time.physicsElapsed);

        // gDeltaTime += this.game.time.physicsElapsed;
        // if(gDeltaTime >= ONEFRAMETIME){
        //     gDeltaTime = 0;
        //     //console.log(":::::::::::::::::::: " + 1.0 / this.game.time._desiredFps);
        //     // console.log(":::::::::::::::::::: " + this.game.time.physicsElapsed);
        //     MG.uiGame.update();
        // }

        if(parseFloat(this.game.time.time - gDeltaTime) >= ONEFRAMETIME){
            gDeltaTime = this.game.time.time;
            MG.uiGame.update();
        }
    },

    // 게임 그룹 생성

    initGameGroup : function ()
    {
        MG.grTouch = MG.game.add.group();
        MG.grTitle = MG.game.add.group();
        MG.grGame = MG.game.add.group();
        MG.grPopup = MG.game.add.group();
    },

    // 게임 클래스 생성

    initGame : function ()
    {
        MG.uiTitle = new UI_Title(MG.grTitle);
        MG.uiGame = new UI_Game(MG.grGame);
        MG.uiPopup = new UI_Popup(MG.grPopup);
        MG.uiFade = new Fade(MG.grTouch);
    },

};

window[''] = window[''] || {};
window[''].Game = Game;
