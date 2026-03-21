var MahjongTile = pc.createScript('mahjongTile');

MahjongTile.attributes.add('tileLayers', { type: 'number', array: true, default: [ 1001 ] });
MahjongTile.attributes.add('despawnParticle', { type: 'entity' });

var tileStates = Object.freeze({
    'INACTIVE': 0,
    'ACTIVE': 1,
    'DESPAWN': 2,
    'MOVING': 3,
})

pc.extend(MahjongTile.prototype, {

    initialize: function() {          
        this._currentState = tileStates.INACTIVE;

        this._x = null;
        this._y = null;
        this._z = null;

        this._mahjongGroup = null;

        this._id = null;

        this._defaultTileLayer = JSON.parse(JSON.stringify(this.entity.model.layers));

        this._localPosition = new pc.Vec3();
    },

    update: function() {
        if (this.startedParticle) {
            if (!this.despawnParticle.particlesystem.isPlaying()) {
                this._recycle();
                this.startedParticle = false;
            }
        }
    },

    awake: function(x, y, z,  mahjongGroup) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._mahjongGroup = mahjongGroup;
        
        if (this._despawnTween) {
            this._despawnTween.stop();
        }
        
        this.entity.setLocalScale(1, 1, 1);
        var position = this._mahjongGroup.calculatePosition(x, y, z);

        this._localPosition.set(position.x, position.y, position.z);

        this.entity.setLocalPosition(position);
        this.setState(tileStates.ACTIVE);
        this.deselect();
        
        this.toggleTutorialHighlight(true);
    },

    setProperties: function(asset, id) {
        this.entity.model.meshInstances[0].material = asset;

        this._id = id;
    },

    getTexture: function() {
        return this.entity.model.meshInstances[0].material.diffuseMap;  
    },
    
    id: function() {
        return this._id;  
    },

    x: function() {
        return this._x;
    },

    y: function() {
        return this._y;
    },

    z: function() {
        return this._z;
    },

    select: function() {        
        this.stopShaking();

        this.app.fire('Audio:playSFX', 'click_tile.mp3');
        this.entity.model.layers = this.tileLayers;
        // this.entity.model.material.depthTest = false;
    },

    isStuck: function() {
        return this._mahjongGroup.isStuck(this._x, this._y, this._z);  
    },

    isSelectable: function() {
        return this.isState(tileStates.ACTIVE); 
    },

    deselect: function() {
        this.entity.model.layers = this._defaultTileLayer;
        // this.entity.model.material.depthTest = true;
    },

    despawn: function() {
        this.setState(tileStates.DESPAWN);

        this._despawnTween =  this.entity.tween(this.entity.getLocalScale())
            .to({x: 0, y: 0, z: 0}, 0.2, pc.Linear).start()
            .on("complete", function() {
            this.startParticle();
        }.bind(this)
               );
    },

    _recycle: function() {
        this.setState(tileStates.INACTIVE);
        this._mahjongGroup.recycle(this.entity);
    },
    
    flyUp: function(yAmount, tweenTime, tweenDelay) {
        var yPos = this._localPosition.y + yAmount;
        this.setState(tileStates.DESPAWN);
        this.entity.tween(this.entity.getLocalPosition()).to({x: this._localPosition.x, y: yPos, z: this._localPosition.z}, tweenTime, pc.Linear, tweenDelay).start();
    },
    
    setNewPosition: function(x, y, z, tweenTime, tweenDelay) {
        if (typeof tweenTime !== 'number') tweenTime = 0.2;
        if (typeof tweenDelay !== 'number') tweenDelay = 0;
        this._x = x;
        this._y = y;
        this._z = z;
        this.stopShaking();

        var position = this._mahjongGroup.calculatePosition(x, y, z);

        this._localPosition.set(position.x, position.y, position.z);        

        this.entity.tween(this.entity.getLocalPosition()).to({x: position.x, y: position.y, z: position.z}, tweenTime, pc.Linear, tweenDelay).start();

    },

    setState: function(state) {
        this._currentState = typeof state === 'number' ? state : tileStates.ACTIVE;
    },        

    isState: function(state) {
        return this._currentState === state;
    },

    shake: function(stuck) {
        this.app.fire('Audio:playSFX', 'tile_stuck.mp3');
        if (stuck === 1) {
            this.entity.setLocalPosition(this._localPosition.x - 0.05, this._localPosition.y, this._localPosition.z);
            this.shakeTween = this.entity.tween(this.entity.getLocalPosition())
                .to({ x: this.entity.getLocalPosition().x + 0.1,
                     y: this.entity.getLocalPosition().y,
                     z: this.entity.getLocalPosition().z 
                    }, 0.05, pc.SineInOut)
                .repeat(4)
                .yoyo(true)
                .start()
                .on('complete', function() {
                this.entity.setLocalPosition(this._localPosition);
            }.bind(this));
        } else if (stuck === 2) {
            this.entity.setLocalPosition(this._localPosition.x, this._localPosition.y, this._localPosition.z - 0.05);

            this.shakeTween = this.entity.tween(this.entity.getLocalPosition())
                .to({ x: this.entity.getLocalPosition().x,
                     y: this.entity.getLocalPosition().y,
                     z: this.entity.getLocalPosition().z + 0.1
                    }, 0.05, pc.SineInOut)
                .repeat(4)
                .yoyo(true)
                .start()
                .on('complete', function() {
                this.entity.setLocalPosition(this._localPosition);
            }.bind(this));
        }
    },

    stopShaking: function() {
        if (this.shakeTween) {
            this.shakeTween.stop();

            this.entity.setLocalPosition(this._localPosition);
        }
    },

    startParticle: function() {
        this.startedParticle = true;
        this.despawnParticle.particlesystem.reset();
        this.despawnParticle.particlesystem.play();
    },
    
    toggleTutorialHighlight: function(doHighlight) {
        var highLightvalue = doHighlight ? 1 : 150 / 255;
        this.entity.model.meshInstances[0].material.diffuse.set(highLightvalue, highLightvalue, highLightvalue);
        this.entity.model.meshInstances[0].material.update();
        
        this.setState(doHighlight ? 1 : 0);
    }
});
