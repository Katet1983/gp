var CGameMulti = function(oData, iLevel){

    CGameBase.call(this, oData, iLevel);
    
    this._init(iLevel);
    
    this._bUserAStart;
};

CGameMulti.prototype = Object.create(CGameBase.prototype);

CGameMulti.prototype._init = function(iLevel){
    CGameBase.prototype._init(iLevel);
    this._startGame();
};

CGameMulti.prototype._startGame = function(){
    this._bUserAStart = true;
    
    this._oInterface = new CInterface(this._iCurLevel,this._iTotScore,this._oContainer);
    this._oInterface.setPlayersInfo(s_oNetworkManager.getPlayerNickname(), s_oNetworkManager.getEnemyNickname());
    this._oInterface.hideFinalPanelScore();
    
    if(s_oNetworkManager.isUserA()){
        s_oGameStriker = this._oCurScenario = new CGameStrikerMulti(this._oContainerGame,this._iCurLevel);   
    }else {
        s_iCurState = GOALKEEPER_MODE;
        refreshSettings(s_iCurState);

        if(this._iNumKicks > NUM_KICKS){
            this._bExtraPenalty = true;
            if(BALL_FORCE_Y[this._iCurLevel] < HIT_BALL_MAX_FORCE){
                BALL_FORCE_Y[this._iCurLevel] += 2;
            }
        }
        s_oGameKeeper = this._oCurScenario = new CGameGoalkeeperMulti(this._iCurLevel,BALL_FORCE_Y[this._iCurLevel-1],this._oContainerGame);
    }
    

    this._oInterface.showVsPanel(s_aMatches[this._iCurLevel-1],this._iCurLevel);
    
    s_oNetworkManager.sendMsg(MSG_GOTO_GAMESTATE, "");
    
    s_oNetworkManager.addEventListener(ON_DISCONNECTION, this.playerDisconnectedFromGame);
};

CGameMulti.prototype.changeScenario = function(){
    //this._oInterface.setFinalPanelMultiplayer();
    //this._oInterface.showFinalPanel( this._iPlayerGoals + "-" + this._iOpponentGoals ,this._iTotScore,this._iLevelScore,bGameOver,true);  
    
    this.bCanEnd = this._iNumKicks%2 === 0 ? true : false;
   
    this._iNumKicks++;
    if(/*s_iCurState === GOALKEEPER_MODE &&*/this.bCanEnd && this._iNumKicks > NUM_KICKS && this._iOpponentGoals !== this._iPlayerGoals){
        //GAME OVER
        this._aResults.push({player:this._iPlayerGoals,cpu:this._iOpponentGoals});

        var bGameOver = false;
        if( this._iPlayerGoals < this._iOpponentGoals){
            bGameOver = true;
        }

        var bLastMatch = true;
        

        setVolume("soundtrack",1);
        stopSound("crowd");

        $(s_oMain).trigger("end_level", this._iCurLevel);
        
        this._oInterface.setFinalPanelMultiplayer();
        this._oInterface.showFinalPanel( this._iPlayerGoals + "-" + this._iOpponentGoals ,this._iTotScore,this._iLevelScore,bGameOver,bLastMatch);   

        var bWinnerUserA = false;
        if(s_oNetworkManager.isUserA()){
            if(!bGameOver){
                bWinnerUserA = true;
            }
        } else {
            if(bGameOver){
                bWinnerUserA = true;
            }
        }
        s_oNetworkManager.sendMsg(MSG_END_MATCH, bWinnerUserA);

    }else{
        this._oCurScenario.unload();
        this._oCurScenario = null;
        if(s_iCurState === STRIKER_MODE){
            s_iCurState = GOALKEEPER_MODE;
            refreshSettings(s_iCurState);

            if(this._iNumKicks > NUM_KICKS){
                this._bExtraPenalty = true;
                if(BALL_FORCE_Y[this._iCurLevel] < HIT_BALL_MAX_FORCE){
                    BALL_FORCE_Y[this._iCurLevel] += 2;
                }
            }

            this._oInterface.refreshKicks(this._aHistoryOpponent);
            s_oGameKeeper = this._oCurScenario = new CGameGoalkeeperMulti(this._iCurLevel,BALL_FORCE_Y[this._iCurLevel-1],this._oContainerGame);
        }else{
            s_iCurState = STRIKER_MODE;
            refreshSettings(s_iCurState);
            if(this._iNumKicks > NUM_KICKS){
                this._bExtraPenalty = true;
            }

            this._oInterface.refreshKicks(this._aHistoryPlayer);
            s_oGameStriker = this._oCurScenario = new CGameStrikerMulti(this._oContainerGame,this._iCurLevel);

        }
    }
};

CGameMulti.prototype.nextRound = function(){
    this._bUserAStart = !this._bUserAStart;
    
    this._iCurLevel++;
    this.reset();


    this._oInterface.reset(s_aMatches[this._iCurLevel-1],this._iCurLevel);
    this._oInterface.refreshScore(0);
    this._oInterface.hideFinalPanel();

    this._oCurScenario.unload();
    this._oCurScenario = null;

    if(s_oNetworkManager.isUserA()){
        if(this._bUserAStart){
            s_oGameStriker = this._oCurScenario = new CGameStrikerMulti(this._oContainerGame,this._iCurLevel);   
        }else {
            s_iCurState = GOALKEEPER_MODE;
            refreshSettings(s_iCurState);

            s_oGameKeeper = this._oCurScenario = new CGameGoalkeeperMulti(this._iCurLevel,BALL_FORCE_Y[this._iCurLevel-1],this._oContainerGame);
        }
    }else {
        if(!this._bUserAStart){
            s_oGameStriker = this._oCurScenario = new CGameStrikerMulti(this._oContainerGame,this._iCurLevel);   
        }else {
            s_iCurState = GOALKEEPER_MODE;
            refreshSettings(s_iCurState);

            s_oGameKeeper = this._oCurScenario = new CGameGoalkeeperMulti(this._iCurLevel,BALL_FORCE_Y[this._iCurLevel-1],this._oContainerGame);
        }
    }
};

CGameMulti.prototype.retryLevel = function(){
    this._iCurLevel--;
    this.nextRound();
    
    this._oInterface.hideFinalPanel();

    $(s_oMain).trigger("restart_level", this._iCurLevel);
};

CGameMulti.prototype.onExit = function () {
    this.unload();

    $(s_oMain).trigger("show_interlevel_ad");
    $(s_oMain).trigger("end_session");
    setVolume("soundtrack", 1);
    s_oMain.gotoMenu();
    
    s_oNetworkManager.disconnect();
};

CGameMulti.prototype.showRematchQuestion = function(){ 

};

CGameMulti.prototype.onConfirmRematch = function(){ 
    $(s_oMain).trigger("show_interlevel_ad");
    
    this._oInterface.changeFinalMessage(TEXT_WAIT_OPPONENT);
    this._oInterface.hideFinalButtons();
    
    s_oNetworkManager.sendMsg(MSG_ACCEPT_REMATCH, "");
};

CGameMulti.prototype.onOpponentRefuseRematch = function(){ 
    this._oInterface.changeFinalMessage(TEXT_OPPONENT_LEFT);
    this._oInterface.showFinalButtons();
    this._oInterface.centerFinalHomeButton();
};

CGameMulti.prototype.onOpponentAcceptRematch = function(){     
    s_oGame._oInterface.showFinalButtons();
    
    s_oGame.retryLevel();
};

CGameMulti.prototype.playerDisconnectedFromGame = function(){

    s_oGame._oInterface.setFinalPanelMultiplayer();
    s_oGame._oInterface.showFinalPanel( this._iPlayerGoals + "-" + this._iOpponentGoals ,this._iTotScore,this._iLevelScore,false,true);  
    s_oGame._oInterface.changeFinalMessage(TEXT_OPPONENT_LEFT);
    s_oGame._oInterface.showFinalButtons();
    s_oGame._oInterface.centerFinalHomeButton();

    
    s_oNetworkManager.sendMsg(MSG_DISCONNECTION, "");
};

CGameMulti.prototype.opponentLeftTheGame = function(){
    
    s_oGame._oInterface.setFinalPanelMultiplayer();
    s_oGame._oInterface.showFinalPanel( this._iPlayerGoals + "-" + this._iOpponentGoals ,this._iTotScore,this._iLevelScore,false,true);  
    s_oGame._oInterface.changeFinalMessage(TEXT_OPPONENT_LEFT);
    s_oGame._oInterface.showFinalButtons();
    s_oGame._oInterface.centerFinalHomeButton();
    

    if(s_oNetworkManager.isUserA()){
        //this._oEndPanel.setExplMsg(TEXT_WINS.format(WHITE));
    } else {
        //this._oEndPanel.setExplMsg(TEXT_WINS.format(BLACK));
    }
    
};