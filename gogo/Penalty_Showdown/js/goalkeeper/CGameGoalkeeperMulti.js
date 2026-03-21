var CGameGoalkeeperMulti = function(iLevel,iCurBallForceY,oParentContainer){

    CGameGoalkeeperBase.call(this, iLevel,iCurBallForceY,oParentContainer);
    
    this._init(iLevel,iCurBallForceY,oParentContainer);
    
};

CGameGoalkeeperMulti.prototype = Object.create(CGameGoalkeeperBase.prototype);

CGameGoalkeeperMulti.prototype._init = function(iLevel,iCurBallForceY,oParentContainer){
    CGameGoalkeeperBase.prototype._init(iLevel,iCurBallForceY,oParentContainer);
    this._startGame();
};

CGameGoalkeeperMulti.prototype._startGame = function(){
    //s_oInterface.showHelpText(TEXT_WAIT_STRIKER);
    s_oInterface.showGoalkeeperWaiting();
    
    this.pause(false);
};

CGameGoalkeeperMulti.prototype.pause = function (bVal) {
    if (bVal) {
        this._iGameState = STATE_PAUSE;
        if (this._oOpponent)
            this._oOpponent.stopAnimation();
        this.deactiveEventListeners();
    } else {
        this._iGameState = STATE_PLAY;
        if (this._oOpponent)
            this._oOpponent.playAnimation();
        this.activeEventListeners();
    }
    createjs.Ticker.paused = bVal;
};

CGameGoalkeeperMulti.prototype.activeEventListeners = function () {
    if (SHOW_3D_RENDER) {
        window.addEventListener("mousedown", this.addImpulseToBall);
        window.addEventListener("mousemove", this.onHandKeeper);
    } else {
        if (!this._oStageMouseMove) {
            this._oStageMouseMove = s_oStage.on("stagemousemove", this.onHandKeeper);
        }
    }
};

CGameGoalkeeperMulti.prototype.remoteStartOpponentShot = function (oStrikerDir) {
    s_oInterface.hideGoalkeeperWaiting();
    
    this._oOpponent.changeState("shot");
    this._oOpponent.fadeAnimation(1);
    
    var oDir = this._getAdjustedStrikerLaunch(oStrikerDir);
    this._oOpponent.onRemoteFinishAnimation(oDir);

    s_oInterface.hideHelpText();
};

CGameGoalkeeperMulti.prototype.addRemoteImpulseToBall = function (oDir) {
    if (this._bLaunched || this._iGameState !== STATE_PLAY) {
        return;
    }

    /*
    var fX = (Math.random() * (BALL_FORCE_X[this._iLevel-1] + BALL_FORCE_X[this._iLevel-1])) - BALL_FORCE_X[this._iLevel-1];
    var fZ = (Math.random() * (BALL_FORCE_Z[this._iLevel-1].max - BALL_FORCE_Z[this._iLevel-1].min)) + BALL_FORCE_Z[this._iLevel-1].min;

    var oDir = {x: fX, y: -this._iCurBallForceY, z: fZ};
    */
    this._vHitDir = oDir;

    var oBall = this._oScene.ballBody();
    this._oScene.addImpulse(oBall, oDir);
    this._oScene.setElementAngularVelocity(oBall, {x: 0, y: 0, z: 0});
    this._bLaunched = true;
};

CGameGoalkeeperMulti.prototype._getAdjustedStrikerLaunch = function (oDir) {
    var iX = -oDir.x;
    var iZ = oDir.z;
    
    var iY = -linearFunction(iZ, 0, STRIKER_GOAL_SHOOTAREA.z*oDir.y, GOALKEEPER_SHOOTPOWER_LIMITS.max, GOALKEEPER_SHOOTPOWER_LIMITS.min);
    
    //GOALKEEPER LIMITS
    //LIMIT X: |0.233|, Z: [0, 0.23], POWER: -50 higher shoots; -60 lower shoots
    
    //STRIKER LIMITS
    //LIMIT X: |0.1765|, Z: [0, 0.186], POWER: 50
    
    iX = linearFunction(iX, -STRIKER_GOAL_SHOOTAREA.x, STRIKER_GOAL_SHOOTAREA.x, -GOALKEEPER_GOAL_SHOOTAREA.x, GOALKEEPER_GOAL_SHOOTAREA.x);
    iZ = linearFunction(iZ, 0, STRIKER_GOAL_SHOOTAREA.z, 0, GOALKEEPER_GOAL_SHOOTAREA.z);
    
    var oNewDir = {x: iX, y: iY, z:iZ};

    /* TEST SHOOT
    s_oGameStriker._vHitDir = new CANNON.Vec3(0,1,0.17);
    s_oGameStriker._vHitDir.scale(50, s_oGameStriker._vHitDir);
    */

    return oNewDir;
};



CGameGoalkeeperMulti.prototype.goal = function () {
    if (!this._bGoal) {
        this._bGoal = true;
        this._fTimeReset = TIME_RESET_AFTER_GOAL;

        playSound("goal_keeper", 1, false);

        setTimeout(function(){
            s_oGameKeeper._setResult();
        }, 1000)
    }
    
};

CGameGoalkeeperMulti.prototype.keeperSave = function (oContactPoint) {
    if (this._bGoal) {
        return;
    }
    if (!this._bKeeperSave) {
        if (oContactPoint.x > -BALL_SAVED_POINT.x && oContactPoint.x < BALL_SAVED_POINT.x && oContactPoint.z > -BALL_SAVED_POINT.z
                                                                                                && oContactPoint.z < BALL_SAVED_POINT.z) {
            this._bPerfectSaved = true;
            this._oBall.getPhysics().mass = 0;
            this._fTimeReset = TIME_RESET_AFTER_PERFECT_KEEPER_SAVED;
            this._iPerfectBallSaved++;
            this._oGloves.changeState("perfect");
            createjs.Tween.get(this._oContainerGame).wait(TIME_BALL_IN_HAND).call(function () {
                s_oGameKeeper._bPerfectSaved = false;
                s_oGameKeeper._oBall.getPhysics().mass = BALL_MASS;
                s_oGameKeeper._oGloves.changeState("normal");
            });
        } else {
            this._bPerfectSaved = false;
            this._fTimeReset = TIME_RESET_AFTER_KEEPER_SAVED;
        }


        this._bKeeperSave = true;
        playSound("kick", 0.65, false);
        playSound("keep_ball", 1, false);
    }

};

CGameGoalkeeperMulti.prototype._ballStopped = function(){
    ////WHEN BALL STOP PROBABLY WITH A POST HIT
    this._bBallStoppedAfterLaunch = true;

    this._setResult();

};

CGameGoalkeeperMulti.prototype._ballOut = function(){
    this._bBallOut = true;

    this._setResult();

};

CGameGoalkeeperMulti.prototype._setResult = function(){
    var iResult;
    if(this._bGoal){
        iResult = GOALKEEPER_RESULTS_GOAL;
    } else {
        if(this._bBallOut){
            iResult = GOALKEEPER_RESULTS_BALLOUT;
        }else if(this._bKeeperSave) {
            iResult = GOALKEEPER_RESULTS_SAVED;
        } else {
            iResult = GOALKEEPER_RESULTS_POSTHIT;
        }
    }
    
    
    var oShotResult = {result: iResult, dir: this._vHitDir};
    var oJSONData = {};
    oJSONData[MSG_GOALKEEPER_SAVES] = oShotResult;
    s_oNetworkManager.sendMsg(MSG_GOALKEEPER_SAVES, JSON.stringify(oJSONData));
    
    if (this._bGoal) {
        this._iGoalOpponent++;

    } else {
        this._iBallSaved++;
    }
};

CGameGoalkeeperMulti.prototype.endTurn = function(){
    s_oGame.endShotCpu(this._bGoal,this._bKeeperSave);

    this._bLaunched = false;
    this.resetScene();
};

CGameGoalkeeperMulti.prototype._checkBallState = function(){
    var oBallBody = this._oScene.ballBody();
    //console.log(oBallBody.velocity.lengthSquared());
    if(oBallBody.position.y < GOAL_LINE_POS.y){
        if(!this._bGoal && !this._bBallOut){
            this._ballOut();
            return;
        }
    }
    if(oBallBody.velocity.lengthSquared() < 0.3){
        if(this._bLaunched && !this._bBallStoppedAfterLaunch && !this._bBallOut && !this._bGoal){
            this._ballStopped();
            return;
        }
    }
};

CGameGoalkeeperMulti.prototype._updatePlay = function () {
    for (var i = 0; i < PHYSICS_ACCURACY; i++) {
        this._oScene.update();
    }

    this._updateBall2DPosition();

    /*
    if (this._bKeeperSave || this._bGoal || this._bBallOut || this._bBallStoppedAfterLaunch) {
        this.timeReset();
    }
    */

    this.rotateGuantes();

    this.swapChildrenIndex();
    
    this._checkBallState();
};

CGameGoalkeeperMulti.prototype.update = function () {
    switch (this._iGameState) {
        case STATE_INIT:{
                this._updateInit();
            }
            break;
        case STATE_PLAY:{
                this._updatePlay();
            }
            break;
        case STATE_FINISH:

            break;
        case STATE_PAUSE:

            break;
    }
};