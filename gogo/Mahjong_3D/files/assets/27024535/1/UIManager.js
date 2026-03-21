var UIManager = pc.createScript('uiManager');

UIManager.attributes.add('loadingOverlay',  { type: 'entity' });

/**
 * How to use the UI Manager. 
 * Make sure that each screen has the UIEntity script. 
 * In the inspector of the UIEntity script you can define properties of each screen and it will add itself to the UIManager
 */
pc.extend(UIManager.prototype, {

    initialize: function() {
        pc.uiManager = this;

        this._stackScreen = [];
        this._stackOverlay = [];
        this._stackPopup = [];

        this._uiTypes = ['Screen', 'Overlay', 'Popup'];

        this._uis = {};

        this.app.on('GameManager:ready', this._removeLoadingOverlay, this);
        this.app.on('UIManager:showUI', this._showUI, this);
        this.app.on('UIManager:hideUI', this._hideUI, this);

        this.getReferenceResolution();
    },
    
    postInitialize: function() {
        this.enableChildrens();
    },

    enableChildrens: function() {
        for (var i = 0; i < this.entity.children.length; i += 1) {
            var screen = this.entity.children[i];

            if (screen instanceof pc.Entity) {
                if (!screen.script.uiEntity) {
                    console.log(screen.name, "has no uiEntity script", screen);
                } else if (!screen.enabled) {
                    screen.enabled = true;
                    // console.log(screen.name, "was disabled. Turned it back on.");
                }
            }
        }
    },

    addUIEntity: function(name, type, entity, enabled) {
        var index = this._uiTypes.indexOf(type); 

        if (index === -1) {
            console.warn("Type is not recognize", type);
            return;
        }

        if (typeof name !== 'string' || !name) {
            console.warn("Name is invalid", name);
        }

        if (this._uis[name]) {
            console.warn("This ui name is already occupied.", name);
            return;
        }

        this._uis[name] = { entity: entity, type: type };

        if (enabled) {
            this._showUI(name, true);
        } else {
            this._hideUI(name, true);
        }
    },

    _removeLoadingOverlay: function() {
        // Might need some refactoring
        if (this.loadingOverlay instanceof pc.Entity) {
            this.loadingOverlay.destroy();
        }  
    },

    _showUI: function(name, startUp) {
        var uiInfo = this._uis[name];

        if (!uiInfo) {
            console.warn('No ui is found with the name', name);
            return;
        }

        if (uiInfo.entity.enabled && !startUp) {
            console.warn('UI is already enabled', name);
            return;
        }

        uiInfo.entity.script.uiEntity.onOpen();

        this._addToStack(uiInfo.entity, uiInfo.type, startUp);
    },

    _hideUI: function(name, startUp) {
        var uiInfo = this._uis[name];

        if (!uiInfo) {
            console.warn('No ui is found with the name', name);
            return;
        }

        if (!uiInfo.entity.enabled && !startUp) {
            console.warn('UI is already disabled', name);
            return;
        }
        uiInfo.entity.script.uiEntity.onClose();

        this._removeFromStack(uiInfo.entity, uiInfo.type, startUp);
    },

    _addToStack: function(entity, type, startUp) {
        var stack = this._getStack(type);

        var index = stack.indexOf(entity);

        if (index !== -1) {
            console.log("Entity is already in the stack, pushed to the top", entity);
            stack.splice(index, 1);
        }

        stack.push(entity);
    },

    _removeFromStack: function(entity, type, startUp) {
        if (startUp) {
            return;
        }

        var stack = this._getStack(type);

        var index = stack.indexOf(entity);

        if (index === -1) {
            console.warn("Entity doesn't exist in the stack", stack, entity);
            return;
        }

        stack.splice(index, 1);
    },

    _getStack: function(type) {
        return this['_stack' + type];
    },

    getReferenceResolution: function() {
        return this.entity.screen.referenceResolution;
    },

    getScale: function() {
        return this.entity.screen.scale;
    }
});

