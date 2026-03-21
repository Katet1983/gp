var CGameBase = function(oData){
    this._bExtraPenalty;
    
    this._iPlayerGoals;
    this._iOpponentGoals;
    this._iNumKicks;
    this._iCurLevel;
    this._iLevelScore;
    this._iTotScore;
    this._iMultiplier;
    this._aHistoryPlayer;
    this._aHistoryOpponent;
    this._aResults;
    
    this._oInterface;
    this._oCurScenario;
    this._oContainerGame;
    this._oContainer;

};

CGameBase.prototype._init = function(iLevel){
    $(s_oMain).trigger("start_session");
    $(s_oMain).trigger("start_level", iLevel);

    this._iCurLevel = iLevel;

    this.reset();

    this._aResults = new Array();

    if(s_bMobile){
        for (var i = 0; i < BALL_FORCE_Y.length; i++) {
            BALL_FORCE_Y[i] *= BALL_VELOCITY_MULTIPLIER;
            BALL_FORCE_Z[i].min /= (BALL_VELOCITY_MULTIPLIER + 0.1);
            BALL_FORCE_Z[i].max *= (BALL_VELOCITY_MULTIPLIER + 0.1);
            BALL_FORCE_X[i] *= BALL_VELOCITY_MULTIPLIER;
        }
    }


    this._oContainer = new createjs.Container();
    s_oStage.addChild(this._oContainer);

    var oFade = new createjs.Shape();
    oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this._oContainer.addChild(oFade);

    this._oContainerGame = new createjs.Container();
    this._oContainer.addChild(this._oContainerGame);

    
};

CGameBase.prototype.reset = function(){
    //this._iTotScore =  s_oMain.getScoreTillLevel(this._iCurLevel);
    this._iTotScore = 0;

    this._bExtraPenalty = false;
    s_iCurState = STRIKER_MODE;
    this._iPlayerGoals = 0;
    this._iLevelScore = 0;
    this._iOpponentGoals = 0;
    this._iNumKicks = 1;
    this._iMultiplier = 1;
    this._aHistoryPlayer = new Array();
    this._aHistoryOpponent = new Array();
    refreshSettings(s_iCurState);


    setVolume("soundtrack",0);
    playSound("crowd",1,true);
};

CGameBase.prototype.unload = function(){
    this._oInterface.unload();
    s_oStage.removeChild(this._oContainer);
};

CGameBase.prototype.endShotPlayer = function(bGoal,bSaved){
    if(bGoal){
        this._aHistoryPlayer.push(1);
        this._iPlayerGoals++;

        if(!this._bExtraPenalty){
            this.increaseScore(GOAL_SCORED*this._iMultiplier);
            this._increaseMultiplier();
        }
    }else{
        this._iMultiplier = 1;
        if(!this._bExtraPenalty){
            this.increaseScore(GOAL_MISSED);
        }

        this._aHistoryPlayer.push(0);
    }

    this._oInterface.refreshKicks(this._aHistoryPlayer);

    //SEND CORRECT RESULT TEXT
    var szResult = TEXT_MISSED;
    if(bGoal){
        szResult = TEXT_GOAL;
    }else if(bSaved){
        szResult = TEXT_SAVED;
    }

    this._oInterface.refreshScoreBoard(szResult,this._iPlayerGoals,this._iOpponentGoals);
};

CGameBase.prototype.endShotCpu = function(bGoal,bSaved){
    if(bGoal){
        this._aHistoryOpponent.push(1);
        this._iOpponentGoals++;
        this._iMultiplier = 1;
        if(!this._bExtraPenalty){
            this.increaseScore(GOAL_SUFFERED);
        }
    }else{
        this._aHistoryOpponent.push(0);
        if(!this._bExtraPenalty){
            this.increaseScore(GOAL_SAVED*this._iMultiplier);
            this._increaseMultiplier();
        }
    }

    this._oInterface.refreshKicks(this._aHistoryOpponent);

    //SEND CORRECT RESULT TEXT
    var szResult = TEXT_MISSED;
    if(bGoal){
        szResult = TEXT_GOAL;
    }else if(bSaved){
        szResult = TEXT_SAVED;
    }

    this._oInterface.refreshScoreBoard(szResult,this._iPlayerGoals,this._iOpponentGoals);
};

CGameBase.prototype._increaseMultiplier = function(){
    if(this._iMultiplier > 1){
        this._oInterface.showMultiplierAnim(this._iMultiplier);
    }

    this._iMultiplier++;
};

CGameBase.prototype.increaseScore = function(iAmount){
    this._iLevelScore += iAmount;

    this._iTotScore += iAmount;
    if(this._iTotScore < 0){
        this._iTotScore = 0;
        this._iLevelScore = 0;
    }

    this._oInterface.refreshScore(this._iTotScore);
};

CGameBase.prototype.getCurLevel = function(){
    return this._iCurLevel;
};



CGameBase.prototype.update = function(){
    if(this._oCurScenario){
        this._oCurScenario.update();
    }
};


var s_iCurState;
var s_oGameKeeper;
var s_oGameStriker;