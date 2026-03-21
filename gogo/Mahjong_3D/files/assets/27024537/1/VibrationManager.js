var VibrationManager = pc.createScript('vibrationManager');

pc.extend(VibrationManager.prototype, {
    initialize: function() {
        pc.vibrationManager = this;
        
        // enable vibration support
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

        this._isSupported = !!navigator.vibrate;
        
        this._defaultVibration = [100, 10, 100];
    },

    postInitialize: function() {
        this._vibration = pc.storageManager.get('vibrate');
        
        if (!navigator.vibrate) {
            this.enabled = false;
            return;
        }

        this.app.on('vibrate', this._vibrate, this);   
    },
    
    // ------------------------------------------------
    // PRIVATE METHODS
    // ------------------------------------------------
    
    /**
     * Don't call this method directly, make is of PC events to keep it modular.
     */
    _vibrate: function(parameters) {
        if (!navigator.vibrate) {
            console.warn("Vibration not supported");
        }
        
        if (!this._vibration) {
            return;
        }
        
        navigator.vibrate(parameters || this._defaultVibration);
    },
    
    /**
     * Save to the storage.
     */ 
    _save: function() {
        pc.storageManager.set('vibrate', this._vibration);
    },
    
    // ------------------------------------------------
    // PUBLIC METHODS
    // ------------------------------------------------
    /**
     * Return if the user wants to use vibration or not.
     */
    get: function() {
        return this._vibration;
    },
    
    /**
     * Set the new preference.
     */ 
    set: function(value) {
        this._vibration = value;  
        this._save();
    },
    
    /**
     * Toggle the vibration preference.
     */
    toggle: function() {
        this._vibration = !this._vibration;
        
        this.save();
        
        return this._vibration;
    },

    /**
     * Return if the vibration is supported or not. Use this method to check if the vibration button needs to be visible. 
     */
    isVibrationSupported: function() {
        return this._isSupported && pc.platform.mobile;  
    },
});

