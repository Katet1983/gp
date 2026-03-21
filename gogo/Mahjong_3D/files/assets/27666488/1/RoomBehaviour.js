var RoomBehaviour = pc.createScript('roomBehaviour');

RoomBehaviour.attributes.add('mahjongGroupEntity', { type: 'entity' });
RoomBehaviour.attributes.add('rotationXMultiplier', { type: 'number', min: 0, max: 1, default: 0.09 });
RoomBehaviour.attributes.add('rotationYMultiplier', { type: 'number', min: 0, max: 1 });
RoomBehaviour.attributes.add('scale', { type: 'number', default: 3.297 });


pc.extend(RoomBehaviour.prototype, {

    initialize: function() {
        this.app.on('inputHandler:move', this.onMove, this);

        this._deltaYRotation = 0;
        this.mahjongGroup = this.mahjongGroupEntity.script.mahjongGroup;

        this.on('attr:scale', this.onScaleChange, this);
    },

    onMove: function(position, delta) {
        if (this.mahjongGroup.restrictMoveTutorial) return;
        var currentLocalEulerAngles = this.entity.getLocalEulerAngles();

        var yRotationDifference = delta.y * this.mahjongGroup.verticalRotationSpeed;

        var newYRotation = this._deltaYRotation + yRotationDifference;

        if (Math.abs(newYRotation) > this.mahjongGroup.maxYRotation) {
            newYRotation = Math.sign(newYRotation) * this.mahjongGroup.maxYRotation;

            yRotationDifference = (newYRotation - this._deltaYRotation);
        }

        this._deltaYRotation += yRotationDifference;
        this.entity.rotateLocal(0,  delta.x * this.rotationXMultiplier * this.mahjongGroup.horizontalRotationSpeed, 0);
        this.entity.rotate(yRotationDifference * this.rotationYMultiplier, 0, 0);
    }, 

    onScaleChange: function() {
        this.entity.setLocalScale(this.scale, this.scale, this.scale);  
    },
});

