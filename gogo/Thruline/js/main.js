var g = g || {};

function init () {
    // detect device type
    g.ismobile = fox.devicetype() === 'mobile';
    g.istablet = fox.devicetype() === 'tablet';
    g.isdesktop = fox.devicetype() === 'desktop';
    // detect Safari or Firefox browser
    g.on_iOS = platform.os.family === 'iOS';
    g.on_OSX = platform.os.family === 'OS X';
    g.on_Android = platform.os.family === 'Android';
    g.useHTMLsharebutton = g.on_iOS || g.on_OSX || g.on_Android;
    // ----------------------------------------------------------------------------
    if (window.location.href.indexOf('//192.168.') > -1) g.localtesting = true;
    // ----------------------------------------------------------------------------
    fox.hijackconsolelog();

    // game settings
    g.force_first_scene = 0; // 0 = titlescreen, 1 = start, 2 = endscreen
    g.force_start_level = 0; // starting level
    g.force_skip_countdown = 0;
    g.force_auto_win = 0;
    g.force_skip_tutorial = 1;
    g.force_short_level = 0; // load 'shortlevel.json' which only has 2 words
    g.force_stage_time = 0; // enter 5 or 10 and that will be the time (seconds) per stage

    g.firstscene = 'titlescreen';
    if (g.force_first_scene === 1) g.firstscene = 'start';
    if (g.force_first_scene === 2) g.firstscene = 'endscreen';
    if (g.force_skip_tutorial === 1) g.udatutorial = true;
    // ----------------------------------------------------------------------------
    if (window.location.href.indexOf('//192.168.') > -1 || window.location.href.indexOf('localhost:8080') > -1) g.localtesting = true; // testing locally on desktop/mobile
    if (g.localtesting && navigator.maxTouchPoints === 1) g.localtestingChromeEmulation = true; // testing on desktop Chrome mobile emulation

    // fps ratio
    // g.fpsratio = g.force30fps ? 2 : 1;
    g.fpsratio = 1;

    // game dimension
    g.gamewid = 640;
    g.gamehei = 1136;
    fitscreen();

    // create pixi application inside a div named "game_canvas"
    g.app = new PIXI.Application({ backgroundColor:000000, width: g.screenwid, height: g.screenhei, antialias: true, transparent: false, resolution: 2, view: document.getElementById("game_canvas")});
    PIXI.settings.PRECISION_FRAGMENT = 'highp';
    PIXI.settings.ROUND_PIXELS = false;
    resize();
	common.showappinfo();

    // create scene containers
    // we don't use fox.makecontainers because these are permanent containers
    g.scenecontainer = new PIXI.Container();
    g.overcontainer = new PIXI.Container();
    g.fadecontainer = new PIXI.Container();
    g.logcontainer = new PIXI.Container();
    g.app.stage.addChild(g.scenecontainer);
    g.app.stage.addChild(g.overcontainer);
    g.app.stage.addChild(g.fadecontainer);
    g.app.stage.addChild(g.logcontainer);

    // PIXI Ticker
    // NOTE: we use 3 tickers. One for all foxinstances loops, second one for tweens (to keep them running during pause),
    //       and third one for unpaused items (items we want to run during pause)
    // WARNING: do NOT use PIXI shared ticker! It can cause problem with foxinstances in g.unpauseitems!
    // create first ticker for all foxinstances (game loops)
    g.ticker1 = new PIXI.Ticker();
    g.ticker1.add((delta)=> { fox.updateall() });
    g.ticker1.start();
    // create a second ticker just for tweens and game frame-time -> this ticker will always run (never paused)
    g.ticker2 = new PIXI.Ticker();
    g.ticker2.add((delta)=> { PIXI.tweenManager.update(); g.gameframenow++; }); // add the tween manager to the ticker
    g.ticker2.start();
    // create a third ticker just for unpaused items (when g.ticker1 is paused, g.ticker3 will start, and vice versa)
    g.ticker3 = new PIXI.Ticker();
    g.ticker3.add((delta)=> { fox.updateignorepauseitems() });

    // PIXI loader
    g.loader = new PIXI.Loader();
    // force PIXI loader to ignore cache?
    g.loader.defaultQueryString = ''+Date.now();

    // touch events - put all code in common.js
    g.app.renderer.plugins.interaction.on( 'pointerdown', (event) => { common.onpointerdown(event.data.global) } );
    g.app.renderer.plugins.interaction.on( 'pointerup', (event) => { common.onpointerup(event.data.global) } );
    g.app.renderer.plugins.interaction.on( 'pointermove', (event) => { common.onpointermove(event.data.global) } );

    // keyboard input - record which key codes are currently pressed into g.keys dictionary
    g.keys = {};
    document.onkeydown = function(e) { g.keys[e.code] = true };
    document.onkeyup = function(e) { g.keys[e.code] = false };

    // create signal events
    g.signal = new PIXI.utils.EventEmitter();

    // init AMU
    initAMU();

    // for GameSnacks testing
    if (g.localtesting && g.testingGameSnacks) {
        fox.trace('testing GameSnacks');
        // load GameSnacks test script
        var script = document.createElement('script');
        script.onload = function () {
            loadgame();
        };
        script.src = 'gamesnacks.js?'+Date.now();
        document.head.appendChild(script);
        // add keyboard listener
        document.addEventListener('keydown', (event)=> {
                if (event.key.toLowerCase() === '1') {
                    // Press 1 to Pause
                    if (GameSnacks.pausecallback) GameSnacks.pausecallback();
                    fox.trace("PAUSE");
                } else if (event.key.toLowerCase() === '2') {
                    // Press 2 to Resume
                    if (GameSnacks.resumecallback) GameSnacks.resumecallback();
                    fox.trace("RESUME");
                } else if (event.key.toLowerCase() === '3') {
                    // Press 3 to Toggle Audio On/Off
                    GameSnacks.mute = !GameSnacks.mute;
                    fox.trace("AUDIO "+(GameSnacks.mute ? 'OFF':'ON'));
                }
            }
        )
    } else {
        // not testing
        if (g.localtesting) {
            // running locally? show alerts
            fox.alert('--------------------------------');
            fox.alert('g.testingGameSnacks is currently FALSE in globalvar.js!');
            fox.alert('The game will NOT load gamesnacks.js in main.js loadgame()');
            fox.alert('Any GameSnacks calls can cause errors & break the game!!');
            fox.alert('--------------------------------');
        }
        loadgame();
    }
}

init();

function initAMU() {
    fox.trace('init AMU');
    g.AMUstate = _.cloneDeep(g.AMUdefaultState);
    g.AMUsettings = _.cloneDeep(g.AMUdefaultSettings);
}

function loadgame() {
    // register onPause & onResume
    GameSnacks.game.onPause(() => {
        common.pausegame();
    });
    GameSnacks.game.onResume(() => {
        common.resumegame();
    });
    // GameSnacks Ad
    GameSnacks.ad.break({
        type: 'preroll',
        adBreakDone: (info) => {
            // load game
            fox.runscene('loadingscreen');
        }
    });
}

// detect screen resize
window.onresize = resize;

// resize the renderer to fit window
function resize() {
    fitscreen();
    g.app.stage.scale.x = g.app.stage.scale.y = g.userscale;
    g.app.renderer.resize(g.winwidth, g.winheight);
    // set portrait/landscape vars
    g.portraitmode = g.winheight > g.winwidth;
    g.landscapemode = !g.portraitmode;
    // adjust current scene
    if (g.scene) g.scene.resize();
}

function fitscreen() {
    g.winwidth = innerWidth;
    g.winheight = innerHeight;
    if (g.winwidth/g.winheight < g.gamewid/g.gamehei) {
        // fit width
        g.userscale = (g.winwidth/g.gamewid)/g.gameresolution;
        g.screenwid = g.gamewid;
        let aspectratio = g.winheight/g.winwidth;
        g.screenhei = Math.round(aspectratio*g.screenwid);
    } else {
        // fit height
        g.userscale = (g.winheight/g.gamehei)/g.gameresolution;
        g.screenhei = g.gamehei;
        let aspectratio = g.winwidth/g.winheight;
        g.screenwid = Math.round(aspectratio*g.screenhei);
    }
    // set half screen width & height values
    g.hscreenwid = g.screenwid / 2;
    g.hscreenhei = g.screenhei / 2;
}
