var SwitchUibutton = pc.createScript('switchUibutton');

SwitchUibutton.attributes.add('openUIEntity',   { type: 'entity', array: true, title: "Open UI Entities" });
SwitchUibutton.attributes.add('closeItself',    { type: 'boolean', default: false , title: "Close current UI Entity" });
SwitchUibutton.attributes.add('closeUIEntity',  { type: 'entity', array: true, title: "Close other UI Entities" });

pc.extend(SwitchUibutton.prototype, {

    initialize: function() {
        var self = this;

        this._active = true;

        this.on('enable', function() {
            self.entity.button._isHovering = false;
        });

        // If touch available attach to touch events
        if (this.app.touch) {
            this.entity.element.on('touchend', this._onInputUp, this);
        }
        // If mouse available attach to mouse events
        if (this.app.mouse) {
            this.entity.element.on('mouseup', this._onInputUp, this);
        }

        // Check if the all open UI entities are enabled in the beginning. If not, it will disable itself. 
        // Useful if you want to remove all connection with a certain ui entity.
        //         for (var i = 0; i < this.openUIEntity.length; i += 1) {
        //             if (this.openUIEntity[i].enabled === false) {
        //                 console.log(this.entity.name, " is disabled, because one of the openUIentities is disabled from the beginning");

        //                 this.entity.enabled = false;
        //                 break;
        //             }
        //         }

        // Add to the list of closing entities.
        if (this.closeItself) {
            var entity = this._getUIEntity(this.entity, 4);

            if (entity instanceof pc.Entity) {
                this.closeUIEntity.push(entity);
            } else {
                console.warn("Couldn't find a UI Entity");
            }
        }
    },

    deactivate: function() {
        this._active = false;  
    },

    _getUIEntity: function(entity, depth) {
        if (depth <= 0 && !(entity instanceof pc.Entity)) {
            return null;
        }

        if (entity.script && entity.script.uiEntity instanceof pc.script.__proto__.constructor) {
            return entity;
        } else {
            return this._getUIEntity(entity.parent, depth -= 1);
        }
    },

    _onInputUp: function() {
        this.app.fire('Audio:playSFX', 'button.mp3');

        this.fire('click');
        
        if (this._active) {
            this.changeUIEntities();
        }
    },

    changeUIEntities: function() {
        this._openEntities();
        this._closeEntities();
    },

    /** 
     * Open 
     */ 
    _openEntities: function() {
        for (var i = 0; i < this.openUIEntity.length; i += 1) {
            if (this.openUIEntity[i] instanceof pc.Entity) {
                this.app.fire('UIManager:showUI', this.openUIEntity[i].script.uiEntity.name);
            } else {
                console.warn(this.entity.parent.name, 'has in invalid parameter in the array openUIEntity with index', i);
            }
        }
    },

    _closeEntities: function() {
        for (var i = 0; i < this.closeUIEntity.length; i += 1) {
            if (this.closeUIEntity[i] instanceof pc.Entity) {
                this.app.fire('UIManager:hideUI', this.closeUIEntity[i].script.uiEntity.name);
            } else {
                console.warn(this.entity.parent.name, 'has in invalid parameter in the array closeUIEntity with index', i);
            }
        }
    }
});
