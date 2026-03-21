var CGameStrikerSingle = function(oParentContainer,iCurLevel){

    CGameStrikerBase.call(this, oParentContainer,iCurLevel);
    
    this._init(oParentContainer,iCurLevel);
    
};

CGameStrikerSingle.prototype = Object.create(CGameStrikerBase.prototype);

CGameStrikerSingle.prototype._init = function(oParentContainer,iCurLevel){
    CGameStrikerBase.prototype._init(oParentContainer,iCurLevel);
    this._startGame();
};

CGameStrikerSingle.prototype._startGame = function(){
    s_oInterface.showHelpText(TEXT_HELP);
    this.onExitHelp();
};

CGameStrikerSingle.prototype.onExitHelp = function () {
    this.createControl();
    this.pause(false);
};

CGameStrikerSingle.prototype.createControl = function () {
    if (!SHOW_3D_RENDER) {
        this._oHitArea = new createjs.Shape();
        this._oHitArea.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this._oContainerGame.addChild(this._oHitArea);

        this._oHitArea.on('mousedown', this.onMouseDown);
        this._oHitArea.on('pressmove', this.onPressMove);
        this._oHitArea.on('pressup', this.onPressUp);
    }
     else {
        window.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mousemove', this.onPressMove);
        window.addEventListener('mouseup', this.onPressUp);
    }
};

CGameStrikerSingle.prototype.onPressUp = function () {
    if (s_oGameStriker._bLaunched) {
        return;
    }else if( (s_oGameStriker._oClickPoint.y < s_oGameStriker._oReleasePoint.y) || (s_oGameStriker._oReleasePoint.x === 0 && s_oGameStriker._oReleasePoint.y === 0) ){
        return;
    }
    var fDistance = Math.ceil(distanceV2(s_oGameStriker._oClickPoint, s_oGameStriker._oReleasePoint)) * FORCE_RATE;

    if (fDistance > FORCE_MAX) {
        fDistance = FORCE_MAX;
    }

    if (s_oGameStriker._iTimePressDown > 1000) {
        s_oGameStriker._iTimePressDown = 1000;
    }

    var vHitDir2D = new CVector2(s_oGameStriker._oClickPoint.x - s_oGameStriker._oReleasePoint.x,
            s_oGameStriker._oClickPoint.y - s_oGameStriker._oReleasePoint.y);

    vHitDir2D.scalarProduct(fDistance);

    var fForceLength = vHitDir2D.length();

    if (fForceLength > HIT_BALL_MIN_FORCE) {
        if (fForceLength > HIT_BALL_MAX_FORCE) {
            vHitDir2D.normalize();
            vHitDir2D.scalarProduct(HIT_BALL_MAX_FORCE);
        }

        s_oGameStriker._bAnimPlayer = true;
        s_oGameStriker._oPlayer.setVisible(true);
        var fForceY = s_oGameStriker._iTimePressDown / 10;
        if (fForceY > MAX_FORCE_Y) {
            fForceY = MAX_FORCE_Y;
        } else if (fForceY < MIN_FORCE_Y) {
            fForceY = MIN_FORCE_Y;
        }

        s_oGameStriker._vHitDir.set(-vHitDir2D.getX() * FORCE_MULTIPLIER_AXIS.x, fForceY, vHitDir2D.getY() * FORCE_MULTIPLIER_AXIS.z);

        //GOAL LIMIT X: |0.178|, Z: [0, 0.17], POWER: 50
        /*
        s_oGameStriker._vHitDir = new CANNON.Vec3(0,1,0.17);
        s_oGameStriker._vHitDir.scale(50, s_oGameStriker._vHitDir);
        */

        s_oGameStriker._bMakeGoal = s_oGameStriker.goalProbability();
    } 

    s_oGameStriker._oReleasePoint.x = 0;
    s_oGameStriker._oReleasePoint.y = 0;
};

CGameStrikerSingle.prototype.animPlayer = function () {
    if (!this._bAnimPlayer) {
        this._oPlayer.setVisible(false);
        return;
    }

    this._bAnimPlayer = this._oPlayer.animPlayer();

    if (this._oPlayer.getFrame() === SHOOT_FRAME) {
        this.addImpulseToBall({x: this._vHitDir.x,
            y: this._vHitDir.y, z: this._vHitDir.z});
        this._iTimePressDown = 0;
        this.goalAnimation(this._vHitDir.y);
        s_oInterface.hideHelpText();
    }
};

CGameStrikerSingle.prototype._updatePlay = function () {
    for (var i = 0; i < PHYSICS_ACCURACY; i++) {
        this._oScene.update();
    }
    

    this.ballOut();

    if (this._bGoal || this._bBallOut || this._bSaved) {
        this.timeReset();
    } else if (this._bPoleCollide) {
        this.resetPoleCollision();
    }

    this.animGoalKeeper();

    this.animPlayer();

    this._updateBall2DPosition();

    this.handSwipeAnim();

    this.swapChildrenIndex();

    this.swapGoal();
    
};

CGameStrikerSingle.prototype.update = function () {
    switch (this._iGameState) {
        case STATE_INIT:
            this._updateInit();
            break;
        case STATE_PLAY:
            this._updatePlay();
            break;
        case STATE_FINISH:

            break;
        case STATE_PAUSE:

            break;
    }
};

CGameStrikerSingle.prototype.endTurn = function () {
    s_oGame.endShotPlayer(this._bGoal,this._bSaved);
    this.resetScene();
};