var CameraDistance = pc.createScript('cameraDistance');

CameraDistance.attributes.add('distanceDesktopCurve', { type: 'curve', curves: [ 'min', 'default', 'max' ]});
CameraDistance.attributes.add('distanceMobileCurve', { type: 'curve', curves: [ 'min', 'default', 'max' ]});

CameraDistance.attributes.add('zoomSpeed', { type: 'number', default: 1 });
CameraDistance.attributes.add('lerpTime', { type: 'number', default: 1 });
CameraDistance.attributes.add('lerpBehaviour', { type: 'curve',});

pc.extend(CameraDistance.prototype, { 

    initialize: function() {
        this._activated = false;
        this._lerpTime = 0;
        this._targetDistance = 0;

        this._currentDistance = this.entity.getLocalPosition().z;
        this._targetDistance = this._currentDistance;

        this._minDistance = 0;
        this._maxDistance = 0;

        this._scale = 0.5;
        this._device = '';

        this._onResize(pc.viewport.getOrientation(), window.innerWidth, window.innerHeight, pc.viewport.getDevice());

        this._resetDistance();

        this.app.on('ViewportManager:onResize', this._onResize, this);
        this.app.on('inputHandler:zoom', this._onZoom, this);
        this.app.on('TutorialManager:startTutorial', this.setToMinDistance, this);
    },
    
    postInitialize: function() {
        this.setToMinDistance();
    },

    _onResize: function(orientation, width, height, device) {
        this._scale = width / height / 2;
        this._device = device;

        this._minDistance = this._getMinValue();
        this._maxDistance = this._getMaxValue();

        this._onZoom(0);
        
        if (pc.gameManager.mahjongGroup.script.mahjongGroup.restrictMoveTutorial) {
            this.setToMinDistance();
        }
    },

    update: function(dt) {
        if (!this._activated) {
            return;
        }

        this._lerpTime += dt;

        var currentPosition =  this.entity.getLocalPosition();

        this.entity.setLocalPosition(currentPosition.x, currentPosition.y, this._currentDistance + (this._targetDistance - this._currentDistance) * this.lerpBehaviour.value(this._lerpTime / this.lerpTime));


        if (this._lerpTime >= this.lerpTime) {
            this._activated = false;
        }
    },
    
    setToMinDistance: function() {
        var currentPosition =  this.entity.getLocalPosition();
        this._targetDistance = this._getMinValue();
        this.entity.setLocalPosition(currentPosition.x, currentPosition.y, this._targetDistance);
    },

    _resetDistance: function() {
        var currentPosition =  this.entity.getLocalPosition();

        this._targetDistance = this._getDefaultValue();
        this.entity.setLocalPosition(currentPosition.x, currentPosition.y, this._targetDistance);
        this._currentDistance = this.entity.getLocalPosition().z;
    },

    _onZoom: function(delta) {
        if (pc.gameManager.mahjongGroup.script.mahjongGroup.restrictMoveTutorial) return;
        this._resetLerp();

        this._currentDistance = this.entity.getLocalPosition().z;

        this._targetDistance = pc.math.clamp(this._targetDistance + this.zoomSpeed * delta, this._minDistance, this._maxDistance);
    },

    _resetLerp: function() {
        this._lerpTime = 0;
        this._activated = true;
    },

    _getMinValue: function() {
        switch(this._device) {
            case deviceEnum.DESKTOP:
                return this.distanceDesktopCurve.value(this._scale)[0];
            case deviceEnum.MOBILE:
                return this.distanceMobileCurve.value(this._scale)[0];
            default: 
                console.warn(this._device);
        }

        return 0;
    },

    _getDefaultValue: function() {
        switch(this._device) {
            case deviceEnum.DESKTOP:
                return this.distanceDesktopCurve.value(this._scale)[1];
            case deviceEnum.MOBILE:
                return this.distanceMobileCurve.value(this._scale)[1];
            default: 
                console.warn(this._device);
        }

        return 12;
    },

    _getMaxValue: function() {
        switch(this._device) {
            case deviceEnum.DESKTOP:
                return this.distanceDesktopCurve.value(this._scale)[2];
            case deviceEnum.MOBILE:
                return this.distanceMobileCurve.value(this._scale)[2];
            default: 
                console.warn(this._device);
        }

        return 0;
    },
});
