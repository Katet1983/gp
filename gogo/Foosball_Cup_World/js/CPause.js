var isPaused = false;
function CPause (){
    var _oShape;
    var _oText;
    var _oContainer;
    var _oParent = this;
    
    this.init = function(){
        s_oGame.setPause(true);
        isPaused = true;
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);
        _oShape = new createjs.Shape();
        _oShape.graphics.beginFill("#000000").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oText = new createjs.Text(TEXT_PAUSE,"185px "+PRIMARY_FONT,"#ffffff");
        _oText.textBaseline = "alphabetic";
        _oText.textAlign = "center";
        _oText.x = CANVAS_WIDTH/2;
        _oText.y = CANVAS_HEIGHT/2;
        _oContainer.addChild(_oShape,_oText);
        _oShape.alpha = 0;
        _oText.alpha = 0;
        new createjs.Tween.get(_oShape).to({alpha: 0.5},400).call(function(){ 
            _oShape.on("mousedown",
            _oParent.onExit,_oParent);
        });
        new createjs.Tween.get(_oText).to({alpha: 1},400);

        var oSpriteFinger = s_oSpriteLibrary.getSprite('pause_finger');
        var oFinger = createBitmap(oSpriteFinger);

        oFinger.x = CANVAS_WIDTH / 2 + 300;
        oFinger.y = CANVAS_HEIGHT / 2 + 300;
        oFinger.regX = oSpriteFinger.width * 0.5;
        oFinger.regY = oSpriteFinger.height * 0.5;

        oFinger.scaleX = oFinger.scaleY = 2;

        _oContainer.addChild(oFinger);

        setInterval(() => {
            new createjs.Tween.get(oFinger).to({alpha: 0},700).call(function(){
                new createjs.Tween.get(oFinger).to({alpha: 1},700).call(function(){
    
                });
            });
        }, 1400);
    };
    
    this.onExit = function(){
        s_oGame.setPause(false);
        isPaused = false;
        new createjs.Tween.get(_oContainer).to({alpha: 0},400).call(function(){
            _oText.alpha = 0;
            s_oStage.removeChild(_oContainer);
            ;});
    };
    
    s_oPause=this;
    
    this.init();
}



var s_oPause;




