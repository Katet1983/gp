var AudioManager = pc.createScript('audioManager');

/**
  * AudioManager
  * Plays audio/music samples. Treats every sample as a separate audio slot
  * Usage:
  * Make use of the following two event to play sounds: Audio:sfx & Audio:bgm
  */

AudioManager.attributes.add('bgm',              { type: 'asset', array: true });
AudioManager.attributes.add('sfx',              { type: 'asset', array: true });
AudioManager.attributes.add('bgmVolume',        { type: 'number', default: 0.25, min: 0, max: 1 });
AudioManager.attributes.add('bgmVolumeMultiplier', { type: 'number', default: 1, min: 0, max: 1 });
AudioManager.attributes.add('sfxVolume',        { type: 'number', default: 1, min: 0, max: 1 });
AudioManager.attributes.add('sfxVolumeMultiplier', { type: 'number', default: 1, min: 0, max: 1 });
AudioManager.attributes.add('autoPlayBGMIndex', { type: 'number', default: 0 });
AudioManager.attributes.add('bgmSettingKey',    { type: 'string', default: 'music' });
AudioManager.attributes.add('sfxSettingKey',    { type: 'string', default: '', description: 'Leave this empty if there is only one setting for all sounds'});
pc.extend(AudioManager.prototype, {

    initialize: function() {
        pc.audioManager = this;

        this.soundPlayer = this.entity.addComponent("sound");
        this.soundPlayer.positional = false;

        this.activeMusicSlot = null;
        this.activeMusicName = null;

        this.allowOverlap = true;

        this.useBGM = true;
        this.useSFX = true;

        this._bgmSlots = {};
        this._sfxSlots = {};

        this.app.on('Audio:playSFX', this._playSFX, this);
        this.app.on('Audio:playBGM', this._playBGM, this);

        // this.on('attr:bgmVolume', this._setBGMVolume, this);
        // this.on('attr:sfxVolume', this._setSFXVolume, this);
        this.on('attr:bgmVolumeMultiplier', function() {
            this._setBGMVolume(this._bgmVolume);
        }, this);
        this.on('attr:sfxVolumeMultiplier', function() {
            this._setSFXVolume(this._sfxVolume);
        }, this);
        /*** 
                AudioContext OnResume handler (Needed because of browser audio protection)
        ***/

        if (this.app.context._soundManager.context && this.app.context._soundManager.context.state === 'suspended') {
            this.app.once('inputManager:Input', this._onResumeContext, this);
        }
    },

    postInitialize: function() {
        pc.famobiAPI.setOnPauseRequested(this.mute, this);
        pc.famobiAPI.setOnResumeRequested(this.unmute, this);

        if(window.famobi.audio != undefined) {
            this.setBGMSetting(window.famobi.audio.isEnabled(), true);
            this.setSFXSetting(window.famobi.audio.isEnabled(), true);
        } else {
            this.setBGMSetting(pc.storageManager.get(this.bgmSettingKey), true);
        
            if (this.sfxSettingKey) {
                this.setSFXSetting(pc.storageManager.get(this.sfxSettingKey), true);
            }
        }
        
        
        this._loadSounds();
    },

    // ------------------------------------------------
    // PRIVATE METHODS
    // ------------------------------------------------

    _loadSounds: function() {
        for (var i = 0; i < this.bgm.length; i += 1) {
            if (!(this.bgm[i] instanceof pc.Asset)) {
                console.warn("BGM with index " + i + " is not an asset!");
                continue;
            }
            // Define the slots to zero, which is the loading variable.
            this._bgmSlots[this.bgm[i].name] = 0;

            // Download if the resource is undefined
            if (!this.bgm[i].resource) {
                // Autoplay it
                if (i === this.autoPlayBGMIndex) {
                    this.activeMusicName = this.bgm[i].name;

                    pc.lazyLoader.lazyLoad(this.bgm[i], function(sound) {
                        this._onBGMLoadComplete(sound, true);
                    }, this);
                } else {
                    pc.lazyLoader.lazyLoad(this.bgm[i], function(sound) {
                        this._onBGMLoadComplete(sound, false);
                    }, this);
                }
            } else {
                var slot = this._createBGMSlot(this.bgm[i]);

                this.activeMusicName = this.bgm[i].name;

                if (i === this.autoPlayBGMIndex) {
                    this._playBGMSlot(slot);
                }
            }
        }   

        for (var j = 0; j < this.sfx.length; j += 1) {
            if (!(this.sfx[j] instanceof pc.Asset)) {
                console.warn("BGM with index " + j + " is not an asset!");
                continue;
            }
            
            // Define the slots to zero, which is the loading variable.
            this._sfxSlots[this.sfx[j].name] = 0;

            // Download if the resource is undefined
            if (!this.sfx[j].resource) {
                pc.lazyLoader.lazyLoad(this.sfx[j], this._onSFXLoadComplete, this);           
            } else {
                this._createSFXSlot(this.sfx[j]);
            }
        }
    },

    _onBGMLoadComplete: function(asset, autoPlay) {        
        var slot = this._createBGMSlot(asset);
        
        if (autoPlay) {
            this._playBGMSlot(slot);
        }
    },

    _onSFXLoadComplete: function(asset) {
        this._createSFXSlot(asset);
    },

    _createBGMSlot: function(asset) {        
        var slot = this.soundPlayer.addSlot(asset.name, {
            asset: asset.id,
            volume: (typeof this._bgmVolume === 'number' ? this._bgmVolume : 1) * this.bgmVolumeMultiplier,
            pitch: 1.00,
            loop: true,
            overlap: false,
        });
                
        this._bgmSlots[asset.name] = slot;

        return slot;
    },

    _createSFXSlot: function(asset) {
        
        var slot = this.soundPlayer.addSlot(asset.name, {
            asset: asset.id,
            volume: (typeof this._sfxVolume === 'number' ? this._sfxVolume : 1) * this.sfxVolumeMultiplier,
            pitch: 1.00,
            loop: false,
            overlap: true,
        });
                
        this._sfxSlots[asset.name] = slot;

        return slot;
    },

    _onResumeContext: function() {
        this.app.context._soundManager.context.resume();
    },

    _playSFX: function(name) {
        var slot = this._sfxSlots[name];
        if (!slot) {

            switch (slot) {
                case undefined: 
                    console.warn('Sound slot with the name [' + name +'] is not found');
                    break;
                case 0: 
                    console.warn('Sound slot with the name ' + name +' is still loading');
                    break;
                default: 
                    console.warn('Something went wrong with the sound. Value is ' + slot);
            }

            return;
        }

        this._playSFXSlot(slot);
    },

    _playBGM: function(name) {
        var slot = this._bgmSlots[name];

        this.activeMusicName = name;

        if (!slot) {

            switch (slot) {
                case undefined: 
                    console.warn('Sound slot with the name [' + name +'] is not found');
                    break;
                case 0: 
                    console.warn('Sound slot with the name ' + name +' is still loading');
                    break;
                default: 
                    console.warn('Something went wrong with the sound. Value is ' + slot);
            }

            return;
        }

        this._playBGMSlot(slot);
    },

    _playBGMSlot: function(slot) {
        if ((this.activeMusicSlot === slot) && this.activeMusicSlot.isPlaying) {
            console.warn("Can't play the same bgm twice");
            return;
        }
        
        if (this.activeMusicName !== slot.name) {
            console.log("Trying to play " + slot.name + ", but currently playing " + this.activeMusicName);
            return;
        }

        if (this.app.context._soundManager.context.state === 'suspended') {
            this._onResumeContext();
        }

        this._stopMusic();
        
        if (!this.useBGM) return;
        
        this.activeMusicSlot = slot;
        
        this.activeMusicSlot.play();
        
    },

    _playSFXSlot: function(slot) {
        if (!this.useSFX) return;
        
        slot.play();
    },

    _stopMusic: function() {
        if (!this.activeMusicSlot) return;

        this.activeMusicSlot.stop();
        
        this.activeMusicSlot = null;
    },

    _setBGMVolume: function(volume) {
        var keys = Object.keys(this._bgmSlots);
        
        this._bgmVolume = volume;
        for (var i = 0; i < keys.length; i += 1) {

            if (typeof this._bgmSlots[keys[i]] === 'object') {
                this._bgmSlots[keys[i]].volume = volume * this.bgmVolumeMultiplier;
            }
        }
    },

    _setSFXVolume: function(volume) {
        var keys = Object.keys(this._sfxSlots);
        
        this._sfxVolume = volume;

        for (var i = 0; i < keys.length; i += 1) {
            if (typeof this._sfxSlots[keys[i]] === 'object') {
                this._sfxSlots[keys[i]].volume = volume * this.sfxVolumeMultiplier; 
            }
        }
    },

    
    // ------------------------------------------------
    // PUBLIC METHODS
    // ------------------------------------------------


    /**
     * Set and save the volume of BGM. Will also change volume of SFX if no sfxKey is availabe.
     *
     * @param {number|boolean} volume - Volume of the sound.
     */
    setBGMSetting: function(volume, start) {
        // Check if volume is valid 
        volume = Number(volume);
        
        if (isNaN(volume)) {
            console.warn('Volume is NaN!', volume);
            return;
        }
        
        volume = pc.math.clamp(volume, 0, 1);
        
        // this.useBGM = !!volume;

        // Save
        if (!start) {
            pc.storageManager.set(this.bgmSettingKey, volume);
        }
        
        // Set volume
        this._setBGMVolume(volume);

        // Stop if required
        // if (!this.useBGM) {
        //     this._stopMusic();
        // }
        
        // Set sfx setting, if required.
        if (this.bgmSettingKey && !this.sfxSettingKey) {
            this.setSFXSetting(volume, start);
        } else {
            if (!start) {
                window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {bgmVolume: this._bgmVolume, sfxVolume: this._sfxVolume});
            }
        }
        
        return this.useBGM;
    },

    /**
     * Set and save the volume of SFX.
     *
     * @param {number|boolean} volume - Volume of the sound effects.
     */
    setSFXSetting: function(volume, start) {
        // Check if volume is valid 
        volume = Number(volume);
        
        if (isNaN(volume)) {
            console.warn('Volume is NaN!', volume);
            return;
        }
        
        volume = pc.math.clamp(volume, 0, 1);
        
        this.useSFX = !!volume;
                
        // Set volume
        this._setSFXVolume(volume);
        // Save
        if (this.sfxSettingKey && !start) {
            pc.storageManager.set(this.sfxSettingKey, volume);
            window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {bgmVolume: this._bgmVolume, sfxVolume: this._sfxVolume});
        }

        
        return this.useSFX;
    },
    
        
    /**
     * 
     */ 
    mute: function(mute) {
        this.app.systems.sound.volume = 0; 
    },
    
    unmute: function(mute) {
        this.app.systems.sound.volume = 1; 
    },
});

/**
* Famobi Sound Management
*/
window.famobi_onMuteRequested = function() {
    pc.audioManager.setBGMSetting(false);
    pc.audioManager.setSFXSetting(false);
    //window.famobi_musicButton.entity.script.musicButton.setActive(false);
    //window.famobi_soundButton.entity.script.soundButton.setActive(false);
}

window.famobi_onUnmuteRequested = function() {
    pc.audioManager.setBGMSetting(true);
    pc.audioManager.setSFXSetting(true);
    //window.famobi_musicButton.entity.script.musicButton.setActive(true);
    //window.famobi_soundButton.entity.script.soundButton.setActive(true);
}
