function CLevelSettings (oData){
    var _oData;
    var _iCurrentLevel;
    var _iSavedLevel;
    
    this.init = async function(oData){
        _iCurrentLevel = 0;
        _oData = oData;
        s_oLevelSettings = this;
        var level_foosball = await window.getItem("level_foosball");
        
        if (level_foosball===null||level_foosball==="undefined"){
            _iSavedLevel = 0;
        }else{
            level_foosball = parseInt(level_foosball);
            _iSavedLevel = level_foosball;
        }
    };
    
    this.loadLevel = function(iLevel){
        _iCurrentLevel = iLevel;
        POINTS_TO_WIN = _oData[iLevel].points_to_win;
        CPU_SPEED_STICKS = _oData[iLevel].cpu_speed_sticks;
    };
    
    this.nextLevel = function(){
       if (_iCurrentLevel<_oData.length){
           _iCurrentLevel++;
           _iCurrentLevel % 3 == 0 && window.showInterstitialAd()
           this.loadLevel(_iCurrentLevel);
       } 
    };
    
    this.saveLevel = function(){
        if (_iSavedLevel<_iCurrentLevel+1){
                window.setItem("level_foosball",_iCurrentLevel+1);
            }
    };
    
    this.getNextLevel = function(){
       if (_iCurrentLevel<_oData.length){
            return _iCurrentLevel+2;
       }else{
           return _iCurrentLevel+1;
       }
    };
    
    this.getCurrentLevel = function(){
       return _iCurrentLevel; 
    };
    
    this.getNumLevel = function(){
       return _oData.length; 
    };
    
    this.deleteSaveData = function(){
       var oSprite = s_oSpriteLibrary.getSprite("msg_box");
       var _oContainerMsgBox = new createjs.Container();
       _oContainerMsgBox.x = CANVAS_WIDTH/2;
       _oContainerMsgBox.y = CANVAS_HEIGHT/2;
       _oContainerMsgBox.alpha = 0;
       s_oStage.addChild(_oContainerMsgBox);
       
       var oShape = new createjs.Shape();
       oShape.graphics.beginFill("#000000").drawRect(-CANVAS_WIDTH/2,-CANVAS_HEIGHT/2,CANVAS_WIDTH,CANVAS_HEIGHT);
       oShape.alpha = 0.5;
       oShape.on("mousedown",function(){},this);
       _oContainerMsgBox.addChild(oShape);
       
       var oMsgBox = new createBitmap(oSprite,oSprite.width,oSprite.height);
       oMsgBox.regX = oSprite.width/2;
       oMsgBox.regY = oSprite.height/2;
       _oContainerMsgBox.addChild(oMsgBox);
       
       var oText = new CTLText(_oContainerMsgBox, 
                    -300, -210, 600, 200, 
                    80, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_DELETE_SAVE,
                    true, true, true,
                    false );

       var oButYes = new CGfxButton(-100,+150,s_oSpriteLibrary.getSprite("but_yes_big"),_oContainerMsgBox);
       var oButNo = new CGfxButton(+100,+150,s_oSpriteLibrary.getSprite("but_exit"),_oContainerMsgBox);
       oButNo.pulseAnimation();
       oButNo.addEventListener(ON_MOUSE_UP,function(){
           new createjs.Tween.get(_oContainerMsgBox).to({alpha: 0},500).call(function(){s_oStage.removeChild(_oContainerMsgBox)});
       },this);
       oButYes.addEventListener(ON_MOUSE_UP,async function(){
        await window.setItem('level_foosball', null);

        const promises = [];
        for (let i = 0; i < s_oLevelSettings.getNumLevel(); i++) {
        promises.push(
            (async () => {
            var val = await window.getItem("score_foosball_") + i;
            val = parseInt(val);
            if (val !== null && val !== 0) {
                await window.setItem("score_foosball_" + i, 0);
            }
            })()
        );
        }
        await Promise.all(promises);

           new createjs.Tween.get(_oContainerMsgBox).to({alpha: 0},500).call(function(){s_oStage.removeChild(_oContainerMsgBox)});
       },this);
       new createjs.Tween.get(_oContainerMsgBox).to({alpha: 1},500);
    };
    
    this.init(oData);
}

s_oLevelSettings = null;