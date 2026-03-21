function CEndPanel(oSpriteBg,iWinner){
    
    var _oBg;
    var _oGroup;
    

    var _oMsgText;

    var _oScoreText;
    var _oTotScore;
    var _iScore;
    var _oButRestart;
    var _oButHome;

    var _oButNext;
    var _iWinner;
    var _oEndSound;
    var _iGlobalScore;
    
    this._init = function(oSpriteBg,iWinner){
        //trackCompleted();
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        s_oStage.addChild(_oGroup);
        
        s_oGame.setPause(true);
        _iWinner = iWinner;
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#000").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        oShape.alpha = 0.5;
        oShape.on("mousedown",this.onMouseDown,this);
        _oGroup.addChild(oShape);
        
        _oBg = createBitmap(oSpriteBg);
        var oBgInfo = _oBg.getBounds();
        _oBg.regX = oBgInfo.width/2;
        _oBg.regY = oBgInfo.height/2;
        _oBg.x = CANVAS_WIDTH/2;
        _oBg.y = CANVAS_HEIGHT/2;
        _oGroup.addChild(_oBg);

        _oMsgText = new CTLText(_oGroup, 
                    CANVAS_WIDTH/2-350, (CANVAS_HEIGHT/2)-250, 700, 160, 
                    80, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    " ",
                    true, true, true,
                    false );


        
        _oScoreText = new CTLText(_oGroup, 
                    CANVAS_WIDTH/2-300, (CANVAS_HEIGHT/2)-90, 600, 100, 
                    50, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    " ",
                    true, true, false,
                    false);
                    

        _oTotScore = new CTLText(_oGroup, 
                    CANVAS_WIDTH/2-300, (CANVAS_HEIGHT/2)-10, 600, 100, 
                    60, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    " ",
                    true, true, false,
                    false);           
        
        var oSprite = s_oSpriteLibrary.getSprite("but_restart");
        _oButRestart = new CGfxButton(CANVAS_WIDTH/2+100,CANVAS_HEIGHT/2+170,oSprite,_oGroup);
        
        oSprite = s_oSpriteLibrary.getSprite("but_home");
        _oButHome = new CGfxButton(CANVAS_WIDTH/2-100,CANVAS_HEIGHT/2+170,oSprite,_oGroup);

        if (!s_bFriendly && _iWinner ===0 && s_oLevelSettings.getCurrentLevel()+1< s_oLevelSettings.getNumLevel()){
            _oButRestart.setX(CANVAS_WIDTH/2);
            _oButHome.setX(_oButRestart.getX()-200);
            oSprite = s_oSpriteLibrary.getSprite("but_next");
            _oButNext = new CGfxButton(CANVAS_WIDTH/2+200,CANVAS_HEIGHT/2+170,oSprite,_oGroup);
            _oButNext.addEventListener(ON_MOUSE_DOWN,this.onButNext,this);
        }
        
    };
    
    this.onButNext = function(){
       stopSound("applause");
       stopSound("game_over");
       setVolume("soundtrack", 0);
       
    
       s_oGame.unload();
       s_oLevelSettings.nextLevel();
       s_oMain.gotoGame();
       s_oStage.removeChild(_oGroup);
       if (!s_bFriendly){
            var szImg = "200x200.png";
            var szTitle = "Congratulations!";
            var szMsg = "You collected <strong>" + _iScore + " points</strong>!<br><br>Share your score with your friends!";
            var szMsgShare = "My score is " + _iScore + " points! Can you do better?";        
        }
        
    };

    this.onButNextGame = function(){
        stopSound("applause");
        stopSound("game_over");
        setVolume("soundtrack", 0);
        
     
        s_oGame.unload();
        s_oLevelSettings.nextLevel();
        s_oMain.gotoGame();
        s_oStage.removeChild(_oGroup);

         
     };
    
    this.unload = function(){
        
    };
    
    this.onMouseDown = function(){
        
    };
    
    this._initListener = function(){
        _oButHome.addEventListener(ON_MOUSE_DOWN,this._onExit,this);
        _oButRestart.addEventListener(ON_MOUSE_DOWN,this._onRestart, this);
    };
    
    this.show = async function(iScore,iWinner){
        _iGlobalScore = 0;
        if (iWinner===0||s_b2Players){
	_oEndSound = playSound("applause",1,false);
        }else{
              _oEndSound =  playSound("game_over",1,false);
        }
        console.log(iScore);
        _iScore = iScore;
        
        var iPlayerWin = iWinner + 1;
        
        if (iWinner===0){
            _oMsgText.refreshText(TEXT_GAMEOVER);
        }else{
            iScore = 0;
            _iScore = 0;
            _oMsgText.refreshText(TEXT_LOSE+iPlayerWin+TEXT_LOSE2);
        }
       
        if (s_b2Players===true){
            _oMsgText.refreshText(TEXT_WIN_2PLAYERS+iPlayerWin+TEXT_WIN_2PLAYERS_2);
        }
       
        if (!s_bFriendly){
            
            if(iWinner == 0) {
                window.levelCompleted(s_oLevelSettings.getCurrentLevel() + 1);
            }
            
            
            _iGlobalScore = 0;

            const promises = [];
            for (let i = 0; i < s_oLevelSettings.getNumLevel(); i++) {
            promises.push(window.getItem("score_foosball_" + i));
            }
            const results = await Promise.all(promises);

            results.forEach(val => {
            if (val !== null) {
                _iGlobalScore += parseInt(val);
            }
            });

        
            _oScoreText.refreshText( TEXT_SCORE +": "+iScore);
            _oTotScore.refreshText( TEXT_TOT_SCORE +": "+_iGlobalScore);
            window.updateScore(_iGlobalScore);
            if (s_oLevelSettings.getCurrentLevel()===s_oLevelSettings.getNumLevel()-1 && iWinner === 0){
                _oMsgText.refreshText(TEXT_WIN_TOURNAMENT);
            }
            
        }
        
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
        globaliWinner = iWinner;
        
        if (!s_bFriendly){
            if(iWinner != 0) {
                window.gameOver();
            }
        } else {
            window.gameOver();
        }
        
        
        
    };
    
    this._onExit = function(){
        
        stopSound("applause");
        stopSound("game_over");
        setVolume("soundtrack", 0);
        window.showInterstitialAd();
        
        
        if (!s_bFriendly){
            if(globaliWinner == 0) {
                window.gameOver();
            }
            var szImg = "200x200.png";
            var szTitle = "Congratulations!";
            var szMsg = "You collected <strong>" + _iScore + " points</strong>!<br><br>Share your score with your friends!";
            var szMsgShare = "My score is " + _iScore + " points! Can you do better?";        
        }
        
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
        
        
        
        s_oGame.unload();
        s_oMain.gotoMenu();
    };
    
    this._onRestart = function(){
        stopSound("applause");
        stopSound("game_over");
        setVolume("soundtrack", 0);
        window.showInterstitialAd();
        
       s_oGame.unload();
       s_oMain.gotoGame();
       s_oStage.removeChild(_oGroup);
       if (!s_bFriendly){
            if(globaliWinner == 0) {
                window.gameOver();
            }
            var szImg = "200x200.png";
            var szTitle = "Congratulations!";
            var szMsg = "You collected <strong>" + _iScore + " points</strong>!<br><br>Share your score with your friends!";
            var szMsgShare = "My score is " + _iScore + " points! Can you do better?";        
        }
        
       
    };
    
    this._init(oSpriteBg,iWinner);
    
    s_oEndPanel = this;

    return this;
}

var s_oEndPanel;


