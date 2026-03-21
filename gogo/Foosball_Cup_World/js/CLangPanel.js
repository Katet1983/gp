function CLangPanel(){
    
  var _oFade;
  var _oPanelContainer;
  var _oButExit;
  var _oButEN;
  
  var _pStartPanelPos;
  
  this._init = function(){
      
      _oFade = new createjs.Shape();
      _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
      _oFade.alpha = 0;
      _oFade.on("click",function(){});
      s_oStage.addChild(_oFade);
      
      new createjs.Tween.get(_oFade).to({alpha:0.7},500);
      
      _oPanelContainer = new createjs.Container();        
      s_oStage.addChild(_oPanelContainer);
      
      var oSprite = s_oSpriteLibrary.getSprite('msg_box');
      var oPanel = createBitmap(oSprite);        
      oPanel.regX = oSprite.width/2;
      oPanel.regY = oSprite.height/2;
      oPanel.scaleX = 1.3;
      oPanel.scaleY = 1.5;
      _oPanelContainer.addChild(oPanel);
      
      _oPanelContainer.x = CANVAS_WIDTH/2;
      _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;  
      _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
      new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2 - 40},500, createjs.Ease.quartIn);

      // var oLink = new createjs.Text(""," 40px "+PRIMARY_FONT, "#ffffff");
      // oLink.y = 100;
      // oLink.textAlign = "center";
      // oLink.textBaseline = "middle";
      // oLink.lineWidth = 300;
      // _oPanelContainer.addChild(oLink);
      
    
      var oSprite = s_oSpriteLibrary.getSprite('but_exit');
      _oButExit = new CGfxButton(450, -315, oSprite, _oPanelContainer);
      _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);

      var oSprite = s_oSpriteLibrary.getSprite('en_btn');
      oSprite.scaleX = 0.8;
      _oButEN = new CGfxButton(-250,-250,oSprite,_oPanelContainer, true);
      _oButEN.addEventListener(ON_MOUSE_DOWN, () => changeLang('en'), this);
      _oButEN.width *= 4;

      var oSprite = s_oSpriteLibrary.getSprite('ua_btn');
      _oButUA = new CGfxButton(0,-250,oSprite,_oPanelContainer, true);
      _oButUA.addEventListener(ON_MOUSE_DOWN, () => changeLang('uk'), this);

      var oSprite = s_oSpriteLibrary.getSprite('ru_btn');
      _oButRU = new CGfxButton(250,-250,oSprite,_oPanelContainer, true);
      _oButRU.addEventListener(ON_MOUSE_DOWN, () => changeLang('ru'), this);

      var oSprite = s_oSpriteLibrary.getSprite('ar_btn');
      _oButAR = new CGfxButton(-250,0,oSprite,_oPanelContainer, true);
      _oButAR.addEventListener(ON_MOUSE_DOWN, () => changeLang('ar'), this);

      var oSprite = s_oSpriteLibrary.getSprite('de_btn');
      _oButDE = new CGfxButton(0,0,oSprite,_oPanelContainer, true);
      _oButDE.addEventListener(ON_MOUSE_DOWN, () => changeLang('de'), this);

      var oSprite = s_oSpriteLibrary.getSprite('es_btn');
      _oButES = new CGfxButton(250,0,oSprite,_oPanelContainer, true);
      _oButES.addEventListener(ON_MOUSE_DOWN, () => changeLang('es'), this);

      var oSprite = s_oSpriteLibrary.getSprite('fr_btn');
      _oButFR = new CGfxButton(-250,250,oSprite,_oPanelContainer, true);
      _oButFR.addEventListener(ON_MOUSE_DOWN, () => changeLang('fr'), this);

      var oSprite = s_oSpriteLibrary.getSprite('it_btn');
      _oButIT = new CGfxButton(0,250,oSprite,_oPanelContainer, true);
      _oButIT.addEventListener(ON_MOUSE_DOWN, () => changeLang('it'), this);

      var oSprite = s_oSpriteLibrary.getSprite('pt_btn');
      _oButPT = new CGfxButton(250,250,oSprite,_oPanelContainer, true);
      _oButPT.addEventListener(ON_MOUSE_DOWN, () => changeLang('pt'), this);
      
  };
  
  this.unload = function(){
      
      _oButExit.setClickable(false);
      
      new createjs.Tween.get(_oFade).to({alpha:0},500);
      new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
          s_oStage.removeChild(_oFade);
          s_oStage.removeChild(_oPanelContainer);

          _oButExit.unload();
      }); 
      
      _oFade.off("click",function(){});
      
      
  };
  
  this._init();
  
  
};
