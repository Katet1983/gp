var CGameGoalkeeperSingle = function(iLevel,iCurBallForceY,oParentContainer){

    CGameGoalkeeperBase.call(this, iLevel,iCurBallForceY,oParentContainer);
    
    this._init(iLevel,iCurBallForceY,oParentContainer);
    
};

CGameGoalkeeperSingle.prototype = Object.create(CGameGoalkeeperBase.prototype);

CGameGoalkeeperSingle.prototype._init = function(iLevel,iCurBallForceY,oParentContainer){
    CGameGoalkeeperBase.prototype._init(iLevel,iCurBallForceY,oParentContainer);
    this._startGame();
};

CGameGoalkeeperSingle.prototype._startGame = function(){
    s_oInterface.showHelpText(TEXT_HELP_KEEPER);
    this.pause(false);
};

CGameGoalkeeperSingle.prototype.pause = function (bVal) {
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

CGameGoalkeeperSingle.prototype.activeEventListeners = function () {
    if (SHOW_3D_RENDER) {
        window.addEventListener("mousedown", this.addImpulseToBall);
        window.addEventListener("mousemove", this.onHandKeeper);
    } else {
        if (!this._oStageMouseMove) {
            this._oStageMouseMove = s_oStage.on("stagemousemove", this.onHandKeeper);
        }
        this._oListenerClickStage = this._oContainerGame.on("click", this.clickStage);
    }
};

CGameGoalkeeperSingle.prototype.startOpponentShot = function () {
    this._oOpponent.changeState("shot");
    this._oOpponent.fadeAnimation(1);
    this._oOpponent.onFinishAnimation();

    s_oInterface.hideHelpText();
};

CGameGoalkeeperSingle.prototype.goal = function () {
    if (!this._bGoal) {
        this._bGoal = true;
        this._fTimeReset = TIME_RESET_AFTER_GOAL;
        //_oInterface.createAnimText(TEXT_GOAL, 80);
        playSound("goal_keeper", 1, false);
    }
};

CGameGoalkeeperSingle.prototype.keeperSave = function (oContactPoint) {
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

CGameGoalkeeperSingle.prototype._goalMiss = function(){
    ////WHEN BALL STOP PROBABLY WITH A POST HIT
    this._bBallStoppedAfterLaunch = true;
};

CGameGoalkeeperSingle.prototype._ballOut = function(){
    this._bBallOut = true;
};

CGameGoalkeeperSingle.prototype._checkBallState = function(){
    var oBallBody = this._oScene.ballBody();
    //console.log(oBallBody.velocity.lengthSquared());
    if(oBallBody.position.y < GOAL_LINE_POS.y){
        if(!this._bGoal && !this._bBallOut){
            this._ballOut();
            return;
        }
    }
    if(oBallBody.velocity.lengthSquared() < 0.01){
        if(this._bLaunched && !this._bBallStoppedAfterLaunch){
            this._goalMiss();
        }
        return;
    }
};

CGameGoalkeeperSingle.prototype._updatePlay = function () {
    for (var i = 0; i < PHYSICS_ACCURACY; i++) {
        this._oScene.update();
    }

    this._updateBall2DPosition();

    if (this._bKeeperSave || this._bGoal || this._bBallOut) {
        this.timeReset();
    }

    this.rotateGuantes();

    this.swapChildrenIndex();
    
    this._checkBallState();
};

CGameGoalkeeperSingle.prototype.update = function () {
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