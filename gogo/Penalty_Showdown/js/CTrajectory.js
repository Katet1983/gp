function CTrajectory(oParentContainer){
    
    var _iCurPointHighlighted;
    var _iTimePointHighlight;
    
    var _aPoints;
    
    var _oContainer;
    
    var _pStartPos;
    var _pGoalSize;
    
    this._init = function(oParentContainer){
        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        oParentContainer.addChild(_oContainer);

        var iNumPoints = 10;
        var iStartSize = 90;
        var iStartScale = 0.65;
        var iFinalScale = 0.2;
        var iStepScale = (iStartScale-iFinalScale)/(iNumPoints-1);
        _pStartPos = {x:STRIKER_START_BALL_POS.x - 48, y: STRIKER_START_BALL_POS.y-13}
        
        _aPoints = new Array();
        for(var i=0; i<iNumPoints; i++){
            var oPoint = new createjs.Shape();
            oPoint.graphics.beginFill("rgba(255,255,255,1)").drawCircle(0, 0, iStartSize);
            _oContainer.addChild(oPoint);
            
            _aPoints.push(oPoint);
            _aPoints[i].x = _pStartPos.x;
            _aPoints[i].y = _pStartPos.y;
            _aPoints[i].scaleX = _aPoints[i].scaleY = iStartScale-i*iStepScale;
            _aPoints[i].alpha = 0.5;
        }
        
        var iSidePostWidth = 80; 
        var iTopPostHeight = 30; 
        var oSprite = s_oSpriteLibrary.getSprite("goal_0");
        _pGoalSize = {w: oSprite.width - iSidePostWidth, h: oSprite.height - iTopPostHeight};
        
    };
    
    this.setTrajectory = function(pDirection){
        var iNormalizedX = pDirection.x /pDirection.y;
        var iNormalizedY = pDirection.z /pDirection.y;
        
        var iFinalX = linearFunction(iNormalizedX, -STRIKER_GOAL_SHOOTAREA.x, STRIKER_GOAL_SHOOTAREA.x, -_pGoalSize.w/2, _pGoalSize.w/2);
        /// PARABOLIC FUNCTION. THE Y TEND TO GO BOTTOM TO THE GOAL WINDOW FOR THE GRAVITY. SO THE MORE Z POWER, AND MORE HIGHER IS THE TRAJECTORY
        var iFinalY = (-_pGoalSize.h/Math.pow(STRIKER_GOAL_SHOOTAREA.z,2))*iNormalizedY*iNormalizedY +_pGoalSize.h/2;

        /// THE Z POWER TEND TO GIVE MORE STREGTH IN THE X DIRECTION TOO
        var iPowerCorrection = linearFunction(iNormalizedY, 0, STRIKER_GOAL_SHOOTAREA.z, 0.7, 0.95);
        
        iFinalX += CANVAS_WIDTH/2;
        iFinalY += CANVAS_HEIGHT/2 - 156;

        var iStepX = (iFinalX - _pStartPos.x)/(_aPoints.length-1)*iPowerCorrection;
        var iStepY = (iFinalY - _pStartPos.y)/(_aPoints.length-1);
        
        for(var i=0; i<_aPoints.length; i++){
            _aPoints[i].x = _pStartPos.x + i* iStepX;
            _aPoints[i].y = _pStartPos.y + i* iStepY;
        }
        
        _iCurPointHighlighted = 0;
        _iTimePointHighlight = 100;
        _oContainer.visible = true;
    };
    
    this.update = function(){
        if(!_oContainer.visible){
            return;
        }
        
        _iTimePointHighlight -= s_iTimeElaps;
        if(_iTimePointHighlight <= 0){
            _iCurPointHighlighted++;
            if(_iCurPointHighlighted === _aPoints.length){
                _iCurPointHighlighted = 0;
                _iTimePointHighlight = 100;
            } else if(_iCurPointHighlighted === _aPoints.length -1){
                _iTimePointHighlight = 2000;
            } else {
                _iTimePointHighlight = 100;
            }
        }
        
        for(var i=0; i<_aPoints.length; i++){
            _aPoints[i].alpha = 0.3;
        }
        _aPoints[_iCurPointHighlighted].alpha = 0.9;
    };

    this.hide = function(){
        _oContainer.visible = false;
    };
    
    this._init(oParentContainer);
}


