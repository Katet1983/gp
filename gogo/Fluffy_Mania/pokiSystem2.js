var tiempoExtra = 45;
var adsUsados = false;
var continuePanel;
var classCallBack;
var _menu;
var poolID = 83641;
var overlay = '#overlay';
var videoAdListo = false;
var _callBack = [];
var tipo = null;
var adCompleto = false;
var enAds = false;
var conExit = false;
var testMode = false;
var NOADS = false;
var AD_object = null;
var comprarFakeFunction;
var hiloTimerAds = null;
var limiteTiempo = 75* 1000;
var botonNoAdsApretado = false;
var adsDiv = null;
var enHuawei = false;
var soundBeforeAds = 0;
var musicBeforeAds = 0;
var desdeMenu = false;

var gameName = "Fluffy_";


var enGoogle = true;
var volumeMaster = true;

var rewardAd = null;
var rewardType = null;
var rewardCallback = null;
var hiloReward = null;

var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        

function GamesnackInit()
{
    _callBack = [];   
     adsUsados = false;
          if (enGoogle) {
        console.log("SE llamara a gamesnack READY");
        GameSnacks.game.ready();
        GameSnacks.audio.subscribe((isAudioEnabled) => {
            
            var cancelSound = false;
            var cancelMusic = false;
             console.log("dentro del subcribe audio de google tenemos el audio enabled?? " + isAudioEnabled + " y minimizado " + minimizado);
            if(game.system.rutaGame != null)
                console.log("EL AUDIO FLAG " +  game.system.rutaGame.muteSoundFlag + "  y el music flag " + game.system.rutaGame.muteMusicFlag);
            if(minimizado)
            {
                minimizado = false;
                if(game.system.rutaGame.muteSoundFlag == 1)
                    cancelSound = true;
                if(game.system.rutaGame.muteMusicFlag == 1)
                    cancelMusic = true;                
            }
            var audioON = isAudioEnabled;
            if (audioON) {                   
                                
                desMutear(cancelSound,cancelMusic);
                if(game.system.rutaGame.menu_class != null && game.system.rutaGame.menu_class.pausePanel != null)
                {
                    if(!cancelSound)
                        game.system.rutaGame.menu_class.pausePanel.UISonidoBoton(false);
                    if(!cancelMusic)
                        game.system.rutaGame.menu_class.pausePanel.UIMusicaBoton(false);
                }                    
                if(game.system.rutaGame.hud_class != null && game.system.rutaGame.hud_class.pauseClass != null)
                {
                     if(!cancelSound)
                        game.system.rutaGame.hud_class.pauseClass.UISonidoBoton(false);
                     if(!cancelMusic)
                        game.system.rutaGame.hud_class.pauseClass.UIMusicaBoton(false);
                }
                
                if(!cancelSound)                    
                    game.system.rutaGame.muteSoundFlag = 0;
                if(!cancelMusic)
                    game.system.rutaGame.muteMusicFlag = 0;
                
            }
            else {
               mutear();
                 if(game.system.rutaGame.menu_class != null && game.system.rutaGame.menu_class.pausePanel != null)
                {
                     game.system.rutaGame.menu_class.pausePanel.UISonidoBoton(true);
                     game.system.rutaGame.menu_class.pausePanel.UIMusicaBoton(true);
                }                    
                if(game.system.rutaGame.hud_class != null && game.system.rutaGame.hud_class.pauseClass != null)
                {
                    game.system.rutaGame.hud_class.pauseClass.UISonidoBoton(true);
                    game.system.rutaGame.hud_class.pauseClass.UIMusicaBoton(true);
                }
            }
        });
        PrepareRewards();
        
    }   
    checkAudioGoogle();
}
function checkAudioGoogle(){
    
    var audioON = enGoogle ? GameSnacks.audio.isEnabled() : volumeMaster;
            if (audioON) {                   
                                
                desMutear();
                if(game.system.rutaGame.menu_class != null && game.system.rutaGame.menu_class.pausePanel != null)
                {
                     game.system.rutaGame.menu_class.pausePanel.UISonidoBoton(false);
                     game.system.rutaGame.menu_class.pausePanel.UIMusicaBoton(false);
                }                    
                if(game.system.rutaGame.hud_class != null && game.system.rutaGame.hud_class.pauseClass != null)
                {
                    game.system.rutaGame.hud_class.pauseClass.UISonidoBoton(false);
                    game.system.rutaGame.hud_class.pauseClass.UIMusicaBoton(false);
                }
            }
            else {
               mutear();
                 if(game.system.rutaGame.menu_class != null && game.system.rutaGame.menu_class.pausePanel != null)
                {
                     game.system.rutaGame.menu_class.pausePanel.UISonidoBoton(true);
                     game.system.rutaGame.menu_class.pausePanel.UIMusicaBoton(true);
                }                    
                if(game.system.rutaGame.hud_class != null && game.system.rutaGame.hud_class.pauseClass != null)
                {
                    game.system.rutaGame.hud_class.pauseClass.UISonidoBoton(true);
                    game.system.rutaGame.hud_class.pauseClass.UIMusicaBoton(true);
                }
            }
            
            game.system.rutaGame.muteMusicFlag = audioON ? 0 : 1;
            game.system.rutaGame.muteSoundFlag = audioON ? 0 : 1;
            
}
function PrepareRewards() {

    PrepareRewardAd("continue");   
    setTimeout(() => {
        PrepareRewardAd("coins");
    }, 200);
}


function mutear()
{
    game.system.rutaGame.muteSound = true;
   game.audio.muteSound();
   game.audio.muteMusic();
}
function desMutear(cancelSound,cancelMusic)
{
    if(cancelMusic != true)
        game.system.rutaGame.muteSound = false;    
    if(cancelSound)
    {
        
    }
    else
        game.audio.unmuteSound();
    
    if(cancelMusic)
    {
        
    }
    else
        game.audio.unmuteMusic();
   
}
function estadoSound()
{
    if(game.system.rutaGame.muteSound)
        return(0);
       
    return(1);
}
function estadoMusic()
{
    return(0);
    //return(muteMusic);
}
function sonidoDeClick()
{
   game.audio.playSound("clickS");
}

function showAds(callBack)
{
    return;
   pause = true;
   soundBeforeAds = estadoSound();
   musicBeforeAds = estadoMusic();
   mutear();
   tipo = "ad";
   _callBack[0] = callBack;
     enAds = true;
   /*PokiSDK.commercialBreak()
   .then(() => {        
        finAds();
//        console.log("Video ad cerrado");
   });*/
  
   
}
function showReward(delMenu)
{
    pause = true;
    soundBeforeAds = estadoSound();
    musicBeforeAds = estadoMusic();
    mutear();
    tipo = "reward";   
    enAds = true;    
    
    /*PokiSDK.rewardedBreak().then(
        (success) => {
          
            if(success){
                adCompleto = true;
                finAds();
            }
            else
            {
               adCompleto = false;
                 finAds();
            }
        }

    );*/
    
  
}
function finAds(delMenu)
{
    return;
    if(tipo == "ad")
    {         
       _callBack[0]();       
    }
    else if(tipo == "reward")
    {
        adsUsados = true;
        if(adCompleto)
        {
              if(desdeMenu)
              {
                  desdeMenu = false;
                  adsUsados = false;
              }
              else
              {
		  if(!delMenu)
		  {
			  if(estadoGame != "start")
			  {                                   
				//PokiSDK.gameplayStart();
				console.log("game play start!!! ");
				estadoGame = "start";
			  }
	          }
              }
            _callBack[0]();
        }
        else
            _callBack[1]();
    }
    if(soundBeforeAds == 0 && musicBeforeAds == 0)      
       desMutear(1,1);    
    else if(soundBeforeAds == 0)
        desMutear(1,0);
    else if(musicBeforeAds == 0)
        desMutear(0,1);
    pause = false;
    _callBack = [];
    adCompleto = false;
    enAds = false; 
    
}  
function poneReward(callBackExito,desde)
{
    return;
     desdeMenu = desde;
    _callBack[0] = callBackExito;
    _callBack[1] = callBackExito;    
     showReward(true);     
    
}

function poneContinue(panel,callBackExito,callBackFallo)
{      
    continuePanel = panel;
    continuePanel.visible = true;  
    game.system.rutaGame.assets.alphaTimer.visible = true;
  
    _callBack[0] = callBackExito;
    _callBack[1] = callBackFallo;    
    
    var continuePanel_fill = continuePanel.fill;
    var continuePanel_botonYES = continuePanel.botonYES;
    var continuePanel_botonNO = continuePanel.botonNO;
       
    continuePanel_fill.play("anim");
    continuePanel_fill.anims["anim"].onComplete = finTiempoContinue.bind(window);
    continuePanel_botonYES.interactive = true;
    continuePanel_botonNO.interactive = true;
    continuePanel_botonYES.mousedown =  continuePanel_botonYES.touchstart = clickRewardVideo.bind(window,true);
    continuePanel_botonNO.mousedown =  continuePanel_botonNO.touchstart = clickRewardVideo.bind(window,false);
        
   if(adsUsados || (enGoogle && rewardAd == null) )    
        detenerContinue(false,false);  
       
}
function finTiempoContinue()
{
   setTimeout(()=>{
        detenerContinue(false,true);    
   },60);

}
function clickRewardVideo(resp)
{    
//    console.log("aprete esta cantidad de veces con respuesta " + resp);
   sonidoDeClick();
   detenerContinue(resp,true);    

}
function detenerContinue(resp,contadorEnMarcha)
{  
   
   var continuePanel_fill = continuePanel.fill;
    var continuePanel_botonYES = continuePanel.botonYES;
    var continuePanel_botonNO = continuePanel.botonNO;
    
   
   continuePanel_fill.stop("anim");
   continuePanel_fill.stop();
   continuePanel_botonYES.interactive = false;
   continuePanel_botonNO.interactive = false;
   continuePanel_botonYES.mousedown =  continuePanel_botonYES.touchstart =null;
   continuePanel_botonNO.mousedown =  continuePanel_botonYES.touchstart = null;
    
   if(!resp)
   {       
      _callBack[1]();
   }
   else
   {  
      if(estadoGame != "stop")
      {
            //PokiSDK.gameplayStop();
            console.log("game play STOP!!!");
            estadoGame = "stop";
      }
      adsUsados = true;
      var callBack = (resp)=>{
           
           if(resp)
           {
                _callBack[0]();
           }
           else
           {
               _callBack[1]();
           }
       };
       ShowRewardVideo("continue", callBack);
   }   
   continuePanel.visible = false;
   game.system.rutaGame.assets.alphaTimer.visible = false;


}
function publicidad(callBack)
{      
        callBack();
     //showAds(callBack);    
}

function saveVars(variable,nombre)
{  
   if(!supports_html5_storage())
        return(false);
    
    nombre = gameName + nombre;
    if(!enGoogle)
        localStorage.setItem(nombre,variable+"");
    else
        GameSnacks.storage.setItem(nombre, variable);
}
function loadVars(nombre)
{        
        
    if(!supports_html5_storage())
        return(0);
    
    nombre = gameName + nombre;   
    if(!enGoogle)
        return(localStorage.getItem(nombre));             
    else
      return (GameSnacks.storage.getItem(nombre));  
    
}
function supports_html5_storage(){
     if (!enGoogle) {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch(e) {
            return false;
        }
    }
    else
    {
        return(true);
    }
}

function PrepareRewardAd(nameBooster) {
    if (enGoogle) {
        console.log("Se llama al ad break! " + nameBooster);
        if (rewardAd == null) {
            console.log("Reward ad no existe!! se crea evento reward ad");
            GameSnacks.ad.break({
                type: 'reward',  // ad shows at start of next level
                name: "button" + "_" + nameBooster,
                beforeAd: () => { BeforeVideoAd() },
                beforeReward: (showAdFn) => {
                    console.log("funcion before Reward q pasa ?? " + nameBooster);
                    console.log(showAdFn);
                    rewardAd = showAdFn;
                },
                adDismissed: () => { console.log("AD WAS CLOSED NOT VIEWED"); },
                adViewed: () => { console.log("AD WAS VIEWED and CLOSED"); },
                adBreakDone: (placementInfo) => { AfterVideoAd(placementInfo); },    // resume the game flow.
            });
        }
        else {
            console.log("Reward ad ya existe, solo se arregla el boton");
        }
    }
}
var desmutearDespuesDeAd = false;

function BeforeVideoAd() {
    console.log("ANTES DE VER EL AD!!! ");
    var _volumeMaster = enGoogle ? GameSnacks.audio.isEnabled() : volumeMaster;
    if (_volumeMaster) {
        if (!game.system.rutaGame.muteSound) {                      
            mutear();
            desmutearDespuesDeAd = true;            
        }       
    }

}
function AfterVideoAd(placementInfo) {
    rewardAd = null;
    console.log("DESPUES  DE VER EL AD!!! " + rewardType + " placement: " + placementInfo);
    console.log(placementInfo);
    if (desmutearDespuesDeAd) {
        var _volumeMaster = enGoogle ? GameSnacks.audio.isEnabled() : volumeMaster;
        if (_volumeMaster) {
                if (!game.system.rutaGame.sonido) {                      
                    desMutear();
                    desmutearDespuesDeAd = false;                
                }       
        }
    }
    var type = rewardType;
    rewardType = null;
    if (placementInfo.breakStatus == "viewed") {
        console.log("DESPUES  DE VER EL AD!!! PERO SI VI EL AD " + type);
        AfterAd(true, type, placementInfo.breakStatus);
    }
    else {
        AfterAd(false, type, placementInfo.breakStatus);
    }
}

function ShowRewardVideo(type, callBack) {
  
    rewardType = type;
    rewardCallback = callBack;
    if(enGoogle)
        rewardAd();
    else
    {
        rewardCallback(true);
        rewardCallback = null;
        rewardType = null;        
    }
}

function AfterAd(visto, type, breakStatus) {

    //rewardPanelAd.enabled = false;    
    console.log("Ejecutaremos callback del tipo " + type + " y el status " + breakStatus + " y fue visto? " + visto);
    if (visto) {
        rewardCallback(true);
        rewardCallback = null;
        clearTimeout(hiloReward);
        hiloReward = setTimeout(() => {
            PrepareRewards();
        }, 1000);
    }
    else {
        if (rewardCallback != null)
            rewardCallback(false);
        rewardCallback = null;
        clearTimeout(hiloReward);
        var time = breakStatus == "dismissed" ? 1000 : 6000;
        hiloReward = setTimeout(() => {
            PrepareRewards();
        }, time);
    }

}
