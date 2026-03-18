var UIEntity = pc.createScript('uiEntity');

UIEntity.attributes.add('name', { type: 'string', default: '' });
UIEntity.attributes.add('type', { type: 'string', enum: [
    { 'Screen':     'Screen' },
    { 'Overlay':    'Overlay' },
    { 'Popup':      'Popup' },
]});
UIEntity.attributes.add('scriptName', { type: 'string', default: '' });
UIEntity.attributes.add('showOnStartUp', { type: 'boolean', default: false });

pc.extend(UIEntity.prototype, {
    
    postInitialize: function() {
        pc.uiManager.addUIEntity(this.name, this.type, this.entity, this.showOnStartUp);  
    },

    /**
     * Set the entity enabled to false and execute close function of a external script, if defined. 
     */ 
    onClose: function() {
        this.entity.enabled = false;
        
        if (!this.scriptName) {
            return false;
        }

        if (!(this.entity.script[this.scriptName] instanceof pc.script.__proto__.constructor)) {
            console.warn(this.scriptName, 'is not a valid script.');
            return false;
        }

        if (typeof this.entity.script[this.scriptName].onUIEntityClose !== 'function') {
            // console.log('No close function is not found', this.scriptName);
            return false;
        }

        this.entity.script[this.scriptName].onUIEntityClose();

        return true;
    },

    /**
     * Set the entity enabled to true and execute open function of a external script, if defined. 
     */ 
    onOpen: function() {
        this.entity.enabled = true;
        
        if (!this.scriptName) {
            return;
        }

        if (!(this.entity.script[this.scriptName] instanceof pc.script.__proto__.constructor)) {
            console.warn(this.scriptName, 'is not a valid script.');
            return;
        }

        if (typeof this.entity.script[this.scriptName].onUIEntityOpen !== 'function') {
            // console.log('No open function is not found', this.scriptName);
            return;
        }

        this.entity.script[this.scriptName].onUIEntityOpen();

        return;
    },
});
