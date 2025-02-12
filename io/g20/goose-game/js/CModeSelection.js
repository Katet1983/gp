function CModeSelection() {
    var _pStartPosAudio;
    var _pStartPosExit;
    var _pStartPosPlay;
    var _oBg;
    var _oMsgBox;
    var _oContTextSelect;
    var _oFade;
    var _oAudioToggle;
    var _oButExit;
    var _oButModeHuman;
    var _oButModeCPU;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    this._init = function () {
        _pStartPosPlay = {x: CANVAS_WIDTH_HALF, y: CANVAS_HEIGHT_HALF - 20};

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        _oBg.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(_oBg);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;

        s_oStage.addChild(_oFade);

        var oSpriteMsgBox = s_oSpriteLibrary.getSprite('msg_box');
        _oMsgBox = createBitmap(oSpriteMsgBox);
        _oMsgBox.x = CANVAS_WIDTH * 0.5;
        _oMsgBox.y = CANVAS_HEIGHT * 0.5;
        _oMsgBox.regX = oSpriteMsgBox.width * 0.5;
        _oMsgBox.regY = oSpriteMsgBox.height * 0.5;
        s_oStage.addChild(_oMsgBox);

        _oContTextSelect = new createjs.Container();
        _oContTextSelect.x = 682;
        _oContTextSelect.y = 135;
        s_oStage.addChild(_oContTextSelect);
        
        var oSelectModeTextStroke = new CTLText(_oContTextSelect, 
                    -250, 40, 500, 40, 
                    40, "center", SECONDARY_FONT_COLOR, PRIMARY_FONT, 1.1,
                    0, 0,
                    TEXT_SELECT_OPPONENTS,
                    true, true, true,
                    false );
        oSelectModeTextStroke.setOutline(5);
        
        var oSelectModeText = new CTLText(_oContTextSelect, 
                    -250, 40, 500, 40, 
                    40, "center", PRIMARY_FONT_COLOR, PRIMARY_FONT, 1.1,
                    0, 0,
                    TEXT_SELECT_OPPONENTS,
                    true, true, true,
                    false );
        

        

        var iOffsetX = 120;
        var iPositionY = CANVAS_HEIGHT_HALF + 20;

        var oSprite = s_oSpriteLibrary.getSprite('vs_man_panel');
        _oButModeHuman = CGfxButton(CANVAS_WIDTH_HALF - iOffsetX, iPositionY, oSprite, s_oStage);
        _oButModeHuman.addEventListenerWithParams(ON_MOUSE_UP, this._onButModeRelease, this, HUMAN_VS_HUMAN);
        
        var oSprite = s_oSpriteLibrary.getSprite('vs_pc_panel');
        _oButModeCPU = CGfxButton(CANVAS_WIDTH_HALF + iOffsetX, iPositionY, oSprite, s_oStage);
        _oButModeCPU.addEventListenerWithParams(ON_MOUSE_UP, this._onButModeRelease, this, HUMAN_VS_CPU);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.width / 2) - 60, y: (oSprite.height / 2) + 20};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }
        
        var oSpriteExit = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSpriteExit.height / 2) - 20, y: (oSpriteExit.height / 2) + 20};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSpriteExit, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({alpha: 0}, 1000).call(function () {
            _oFade.visible = false;
        });

        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.refreshButtonPos = function (iNewX, iNewY) {
        _oButExit.setPosition(_pStartPosExit.x - iNewX, _pStartPosExit.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, _pStartPosAudio.y);
        }
    };

    this.unload = function () {
        _oButExit.unload();
        _oButExit = null;
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oModeSelection = null;
    };

    this._onExit = function () {
        this.unload();

        s_oMain.gotoMenu();
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onButModeRelease = function(iMode) {
        this.unload();
        s_oMain.gotoTeamChoose(iMode);
    };
    
    this._onFullscreenRelease = function(){
	if(s_bFullscreen) { 
            _fCancelFullScreen.call(window.document);
	}else{
            _fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };

    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.isEnabled){
            _oButFullscreen.setActive(s_bFullscreen);
	}
    };

    s_oModeSelection = this;

    this._init();
}

var s_oModeSelection = null;