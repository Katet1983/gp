function CSplash() {
  var _iMaskWidth;
  var _iMaskHeight;
  var _oLoadingText;
  var _oProgressBar;
  var _oMaskPreloader;
  var _oFade;
  var _oIcon;
  var _oIconMask;
  var _oButStart;
  var _oContainer;

  var _oPreloader;

  this._init = function () {
      s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
      s_oSpriteLibrary.addSprite("splash", "./sprites/Splash_and_logo.png");
      s_oSpriteLibrary.addSprite("but_play", "./sprites/btnPlay.png");
      s_oSpriteLibrary.addSprite("rating", "./sprites/rating.png");
      s_oSpriteLibrary.loadSprites();

      _oContainer = new createjs.Container();
      s_oStage.addChild(_oContainer);
  };

  this.unload = function () {

      _oContainer.removeAllChildren();
  };

  this._onImagesLoaded = function () {

  };

  this._onAllImagesLoaded = function () {
      this.attachSprites();

      s_oMain.preloaderReady();
  };

  this.attachSprites = function () {
    window.GameReady();
      var oSprite = s_oSpriteLibrary.getSprite('splash');
      _oIcon = createBitmap(oSprite);
      _oIcon.regX = oSprite.width * 0.5;
      _oIcon.regY = oSprite.height * 0.5;
      _oIcon.x = CANVAS_WIDTH/2;
      _oIcon.y = CANVAS_HEIGHT/2;
      _oContainer.addChild(_oIcon);
      
      _oIconMask = new createjs.Shape();
      
      _oIcon.mask = _oIconMask;
      var oSprite = s_oSpriteLibrary.getSprite('but_play');
         _pStartPosPlay = {x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2};
        _oButPlay = new CGfxButton(_pStartPosPlay.x, _pStartPosPlay.y, oSprite,_oContainer);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onPlay, this);

  
  };

  this._onPlay = function(){

    s_oMain._onRemovePreloader();
    _oButPlay.unload();
};

  this._onButStartRelease = function(){
      s_oMain._onRemovePreloader();
  };

  this.refreshLoader = function (iPerc) {
      _oLoadingText.text = iPerc + "%";
      
      if (iPerc === 100) {
          s_oMain._onRemovePreloader();
          _oLoadingText.visible = false;
          _oProgressBar.visible = false;
      };     
  };

  this._init();
}