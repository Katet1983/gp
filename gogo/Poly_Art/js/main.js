var PRELOAD_ALL_FBX = true;

var isIOS = false;

var userAgent = navigator.userAgent || navigator.vendor || window.opera;
if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    isIOS = true;

var Main = Main || {};
requirejs(['libs/etc/es6-promise.min'], function(es6_promise){
    es6_promise.polyfill();
    new Game();

    window.addEventListener("contextmenu", function(e) { e.preventDefault();});

    //aby sa nezobrazoval scroll
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only

    if (isIOS) {
        document.addEventListener("touchstart", function (e) {e.preventDefault();});
        document.addEventListener("touchmove", function (e) {e.preventDefault();});
    }

    //PPS_DELETE-YANDEX
    document.addEventListener("keydown", function (e) {e.preventDefault();});
    document.addEventListener("keyup", function (e) {e.preventDefault();});
    //PPS_DELETE-YANDEX
});

var loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = function ( item, loaded, total )
{
};

loadingManager.onLoad = function ()
{
    //new Game();
};

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize()
{
    var frustumSize = 400;

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    if(HEIGHT < WIDTH * 1.25)
        WIDTH = HEIGHT / 1.25;

    var aspect = HEIGHT / WIDTH;

    Game.instance.camera.left      = frustumSize / - 2;
    Game.instance.camera.right     = frustumSize / 2;
    Game.instance.camera.top       = frustumSize * aspect / 2;
    Game.instance.camera.bottom    = - frustumSize * aspect / 2;

    Game.instance.camera.updateProjectionMatrix();
    //Game.instance.renderer.setPixelRatio(window.devicePixelRatio / 3);
    Game.instance.renderer.setSize( WIDTH, HEIGHT);

    var domElement = Game.instance.renderer.domElement;
    domElement.style.position = 'absolute';
    domElement.style.left = (window.innerWidth - WIDTH) / 2 + 'px';

    Game.instance.onResize();
}

if(typeof GameSnacks == "undefined" || GameSnacks == null){
    console.log("GAMESNACKS IS NULL")
    console.warn("GameSnacks is undefined")
    GameSnacks = {
        audio: {
            subscribe: function (){
                console.log("GS subscribe")
            },
            isEnabled: function (){
                return soundState
            }
        },
        game: {
            onPause: function () {
                console.log("GS PAUSE")
            },
            onResume: function () {
                console.log("GS ON RESUME")
            },
            firstFrameReady: function (){
                console.log("GS: First Frame Ready")
            },
            ready: function (){
                console.log("GS: Game ready")
            },
            gameOver: function () {
                console.log("GS GameOver()")
            },
            levelComplete: function (level){
                console.log("GS: Level Completed",level)
            },
        },
        score: {update: function (score){
                console.log("GS: send score",score);
            }},
        ad: {break:function (type, beforeAd, afterAd, adViewed, adBreakDone, adDismissed, beforeReward){
                console.log("GS: Ad called, type: ",type)
            }},
        storage: {
            setItem: function (profileName, profile){
                localStorage.setItem(profileName,profile)
            },
            getItem: function (profileName) {
                return localStorage.getItem(profileName)
            }
        }



    };
}
else {
    console.log("GAMESNACKS IS NOT NULL")
}

var gamesnacksIsActive = true;

if (gamesnacksIsActive) {
    GameSnacks.audio.subscribe((isAudioEnabled) => {
        setAudio(isAudioEnabled);
    });

    function setAudio(isAudioEnabled) {

         GameSounds = isAudioEnabled;
            createjs.Sound.play('click');
            createjs.Sound.muted = !isAudioEnabled

            // btnSoundsToggle.frameName = (soundManager.soundPlaying ? 'sound-on' : 'sound-off');
    }

    GameSnacks.game.onPause(() => {  // Display pause screen.     // engine.scene("pauseScreen").setVisible();    // engine.loop.sleep();
    //     if (gameState != null) gameState.onGamePause();
    // console.error("resetuje sa moznost cez tlacidhlo hudby 3")
        Game.instance.onPause();

    });

    GameSnacks.game.onResume(() => {  // Display pause screen. 
    //     if (gameState != null)
    // gameState.onGameResume();
    //
    // game.paused = false;
        Game.instance.onResume();
    });
} else {
    console.error("GameSnacks - audio subscribe")
}

document.addEventListener('visibilitychange', function() {
    if(document.hidden){
        Game.instance.onPause();
        createjs.Sound.muted = true;

    }
    else {
        Game.instance.onResume();
        createjs.Sound.muted = !GameSounds

    }
});
