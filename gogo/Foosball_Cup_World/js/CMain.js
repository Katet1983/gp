var userState;
var vBlur = false;

var LevelMode = false;
function CMain(oData){
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    
    var _oPreloader;
    var _oMenu;
    var _oHelp;
    var _oGame;
    var _oLogo;

    this.initContainer = function(){
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = false;
        createjs.Touch.enable(s_oStage);

        const handleBlurMain = () => {
            console.log('blur');
            vBlur = true;
            setVolume('soundtrack', 0);
        };

        const handleFocusMain = () => {
            const orientationContainer = document.querySelector('.orientation-msg-container'); 

            if (orientationContainer.style.display != "block") { 
                console.log('focus');
                vBlur = false;
                setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
                
            }
        };

       s_bMobile = isMobile();
        if(s_bMobile === false){
            s_oStage.enableMouseOver(20);  
        }


        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                handleBlurMain();   
            } else {
                handleFocusMain();  
            }
        });

        s_oStage.enableMouseOver(20);
        
        s_iPrevTime = new Date().getTime();

	createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);
        

        
        s_oSpriteLibrary  = new CSpriteLibrary();

        _oPreloader = new CPreloader();

        
    };
    
    this.preloaderReady = async function(){

        
        const selectedLanguage = await window.getItem('language');
        const systemLanguage = window.getlocale();

            if (!selectedLanguage) {
                changeLang(systemLanguage);
            } else {
                changeLang(selectedLanguage);
            }


        var oData = [{
                        points_to_win: 1,
                        cpu_speed_sticks: 4},

                     { points_to_win:2,
                       cpu_speed_sticks: 5},

                          {points_to_win:3,
                        cpu_speed_sticks: 6},

                          {points_to_win:4,
                        cpu_speed_sticks: 7},

                          {points_to_win:5,
                        cpu_speed_sticks: 8},
                        {
                            points_to_win: 6,
                            cpu_speed_sticks: 4},
    
                         { points_to_win:7,
                           cpu_speed_sticks: 5},
    
                              {points_to_win:8,
                            cpu_speed_sticks: 6},
    
                              {points_to_win:9,
                            cpu_speed_sticks: 7},
    
                              {points_to_win:10,
                            cpu_speed_sticks: 8}
                ];
                
        s_oLevelSettings = new CLevelSettings(oData);
        
        try{
            window.setItem("ls_available","ok");
        }catch(evt){
            s_bStorageAvailable = false;
        }
        
	s_oMain._loadImages();
		
        
        s_oMain._initSounds();
        
        
        _bUpdate = true;
    };

    this.soundLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);

    };
    
    this._initSounds = function(){        

        s_aSoundsInfo = new Array();
        s_aSoundsInfo.push({path: './sounds/',filename:'soundtrack',loop:true,volume:1, ingamename: 'soundtrack'});
        s_aSoundsInfo.push({path: './sounds/',filename:'ball_kick',loop:true,volume:1, ingamename: 'ball_kick'});
        s_aSoundsInfo.push({path: './sounds/',filename:'goal',loop:true,volume:1, ingamename: 'goal'});
        s_aSoundsInfo.push({path: './sounds/',filename:'press_button',loop:true,volume:1, ingamename: 'click'});
        s_aSoundsInfo.push({path: './sounds/',filename:'game_over',loop:true,volume:1, ingamename: 'game_over'});
        s_aSoundsInfo.push({path: './sounds/',filename:'ball_kick',loop:true,volume:1, ingamename: 'ball_kick'});
        s_aSoundsInfo.push({path: './sounds/',filename:'ball_wall',loop:true,volume:1, ingamename: 'ball_wall'});
        s_aSoundsInfo.push({path: './sounds/',filename:'goal_exultance',loop:true,volume:1, ingamename: 'goal_exultance'});
        s_aSoundsInfo.push({path: './sounds/',filename:'miss_goal',loop:true,volume:1, ingamename: 'miss_goal'});
        s_aSoundsInfo.push({path: './sounds/',filename:'applause',loop:true,volume:1, ingamename: 'applause'});
        s_aSoundsInfo.push({path: './sounds/',filename:'whistle',loop:true,volume:1, ingamename: 'whistle'});
        
        RESOURCE_TO_LOAD += s_aSoundsInfo.length;
        
        s_aSounds = new Array();
        for(var i=0; i<s_aSoundsInfo.length; i++){
            this.tryToLoadSound(s_aSoundsInfo[i], false);
        }
        
    };
    
    this.tryToLoadSound = function(oSoundInfo, bDelay){
        
       setTimeout(function(){        
            s_aSounds[oSoundInfo.ingamename] = new Howl({ 
                                                            src: [oSoundInfo.path+oSoundInfo.filename+'.mp3'],
                                                            autoplay: false,
                                                            preload: true,
                                                            loop: oSoundInfo.loop, 
                                                            volume: oSoundInfo.volume,
                                                            onload: s_oMain.soundLoaded,
                                                            onloaderror: function(szId,szMsg){
                                                                                for(var i=0; i < s_aSoundsInfo.length; i++){
                                                                                     if ( szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id){
                                                                                         s_oMain.tryToLoadSound(s_aSoundsInfo[i], true);
                                                                                         break;
                                                                                     }
                                                                                }
                                                                        },
                                                            onplayerror: function(szId) {
                                                                for(var i=0; i < s_aSoundsInfo.length; i++){
                                                                                     if ( szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id){
                                                                                          s_aSounds[s_aSoundsInfo[i].ingamename].once('unlock', function() {
                                                                                            s_aSounds[s_aSoundsInfo[i].ingamename].play();
                                                                                            if(s_aSoundsInfo[i].ingamename === "soundtrack" && s_oGame !== null){
                                                                                                
                                                                                                setVolume("soundtrack",SOUNDTRACK_VOLUME_IN_GAME);
                                                                                                
                                                                                                
                                                                                            }

                                                                                          });
                                                                                         break;
                                                                                     }
                                                                                 }
                                                                       
                                                            } 
                                                        });

            
        }, (bDelay ? 200 : 0) );
        
        
    };


    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );
        s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo","./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info","./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big","./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg"); 
        s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("music_icon","./sprites/music_icon.png");
        s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ball","./sprites/ball.png");
        s_oSpriteLibrary.addSprite("player_shadow","./sprites/player_shadow.png");
        s_oSpriteLibrary.addSprite("but_p1","./sprites/but_p1.png");
        s_oSpriteLibrary.addSprite("but_p2","./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("friendly_mode","./sprites/friendly_mode.png");
        s_oSpriteLibrary.addSprite("tournament_mode","./sprites/tournament_mode.png");
        s_oSpriteLibrary.addSprite("arrow","./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("stick","./sprites/stick.png");
        s_oSpriteLibrary.addSprite("field","./sprites/field.png");
        s_oSpriteLibrary.addSprite("player_red","./sprites/player_red.png");
        s_oSpriteLibrary.addSprite("player_blue","./sprites/player_blue.png");
        s_oSpriteLibrary.addSprite("arena","./sprites/arena.png");
        s_oSpriteLibrary.addSprite("score_rod_blue","./sprites/score_rod_blue.png");
        s_oSpriteLibrary.addSprite("score_rod_red","./sprites/score_rod_red.png");
        s_oSpriteLibrary.addSprite("score_cube_blue","./sprites/score_cube_blue.png");
        s_oSpriteLibrary.addSprite("score_cube_red","./sprites/score_cube_red.png");
        s_oSpriteLibrary.addSprite("score_panel","./sprites/score_panel.png");
        s_oSpriteLibrary.addSprite("logo_menu","./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_restart","./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home","./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_level","./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_next","./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_kickoff","./sprites/but_kickoff.png");
        s_oSpriteLibrary.addSprite("but_delete_save","./sprites/but_delete_save.png");
        s_oSpriteLibrary.addSprite("key_w","./sprites/key_w.png");
        s_oSpriteLibrary.addSprite("key_s","./sprites/key_s.png");
        s_oSpriteLibrary.addSprite("key_up","./sprites/key_up.png");
        s_oSpriteLibrary.addSprite("key_down","./sprites/key_down.png");
        s_oSpriteLibrary.addSprite("skip_arrow","./sprites/skip_arrow.png");
        s_oSpriteLibrary.addSprite("skip_arrow_left","./sprites/skip_arrow_left.png");
        s_oSpriteLibrary.addSprite("but_help","./sprites/but_help.png");
        s_oSpriteLibrary.addSprite("but_pause","./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("language","./sprites/language.png");

        s_oSpriteLibrary.addSprite("ua_btn","./sprites/language_button_UK.png");
        s_oSpriteLibrary.addSprite("ar_btn","./sprites/language_button_AR.png");
        s_oSpriteLibrary.addSprite("de_btn","./sprites/language_button_DE.png");
        s_oSpriteLibrary.addSprite("en_btn","./sprites/language_button_EN.png");
        s_oSpriteLibrary.addSprite("es_btn","./sprites/language_button_ES.png");
        s_oSpriteLibrary.addSprite("fr_btn","./sprites/language_button_FR.png");
        s_oSpriteLibrary.addSprite("it_btn","./sprites/language_button_IT.png");
        s_oSpriteLibrary.addSprite("pt_btn","./sprites/language_button_PT.png");
        s_oSpriteLibrary.addSprite("ru_btn","./sprites/language_button_RU.png");


        s_oSpriteLibrary.addSprite("goal_textuk","./sprites/goal_textuk.png");
        s_oSpriteLibrary.addSprite("goal_textar","./sprites/goal_textar.png");
        s_oSpriteLibrary.addSprite("goal_textde","./sprites/goal_textde.png");
        s_oSpriteLibrary.addSprite("goal_texten","./sprites/goal_texten.png");
        s_oSpriteLibrary.addSprite("goal_textes","./sprites/goal_textes.png");
        s_oSpriteLibrary.addSprite("goal_textfr","./sprites/goal_textfr.png");
        s_oSpriteLibrary.addSprite("goal_textit","./sprites/goal_textit.png");
        s_oSpriteLibrary.addSprite("goal_textpt","./sprites/goal_textpt.png");
        s_oSpriteLibrary.addSprite("goal_textru","./sprites/goal_textru.png");
        
        s_oSpriteLibrary.addSprite("pause_finger","./sprites/pause_finger.png");
        
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);

    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this._onRemovePreloader = function(){
        _oPreloader.unload();
        s_oSoundtrack = playSound('soundtrack', 0, true);
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        
        this.gotoMenu();
    };
    
    this.onAllPreloaderImagesLoaded = function(){
        this._loadImages();
    };
    
    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
    }; 

    this.gotoGame = function(){
        _oGame = new CGame(_oData);   						
        _iState = STATE_GAME;
    };
    
    this.gotoSelectPlayers = function(){
       new CSelectPlayers(); 
    };
    
    this.gotoLevelMenu = function(){
       new CLevelMenu();
       _iState = STATE_LEVEL_SELECTION;
    };


    this.stopUpdate = function(){
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display","block");
        
    };

    this.startUpdate = function(){
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display","none");

    };
    
    this._update = function(event){
		if(_bUpdate === false){
			return;
		}
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;
        
        if ( s_iCntTime >= 1000 ){
            s_iCurFps = s_iCntFps;
            s_iCntTime-=1000;
            s_iCntFps = 0;
        }
                
        if(_iState === STATE_GAME){
            _oGame.update();
        }
        
        s_oStage.update(event);

    };
    
    s_oMain = this;
    
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;
    ENABLE_FULLSCREEN = oData.fullscreen;
    NUM_ROWS_PAGE_LEVEL = oData.level_menu_rows;
    NUM_COLS_PAGE_LEVEL = oData.level_menu_cols;
    CPU_SPEED_STICK_FRIENDLY = oData.cpu_speed_friendly;
    NUM_GOAL_FRIENDLY = oData.num_goal_friendly;



    _oData = oData;
    
    this.initContainer();
}
var s_bMobile;

var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;
var s_iLastLevel = 1;
var s_bFullscreen = false;
var s_bStorageAvailable = true;
var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oSoundtrack = null;
var s_oCanvas;
var s_aSounds;
var s_aSoundsInfo;


function playMusicSdk () {
    console.log('playMusicSdk');
    if(globalSound) {
        Howler.mute(false);
    }
}


function stopMusicSdk () {
    console.log('stopMusicSdk');
    Howler.mute(true);

}

//playMusicSdk();


var globaliWinner = 0; 


function isMobile() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(ua)) return true;

  if (/iPhone|iPod/i.test(ua)) return true;

  if (/iPad/i.test(ua)) return true;

  if (/Macintosh/i.test(ua) && 'ontouchend' in document) return true;

  if (/windows phone/i.test(ua)) return true;

  return false;
}