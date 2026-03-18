var MusicButton = pc.createScript('musicButton');

MusicButton.attributes.add('icon', { type: 'entity' });
/**
 * For feed forward: on icon sprite first
 * For feed back: off icon sprite first
 **/
MusicButton.attributes.add('iconSprites', { type: 'asset', assetType: 'sprite', array: true });


pc.extend(MusicButton.prototype, {
    // initialize code called once per entity
    initialize: function() {
        this.button = this.entity.button;

        // mouse events
        this.entity.element.on('mouseup', this.onRelease, this);

        // touch events
        this.entity.element.on('touchend', this.onRelease, this);


        this.on('state', function(enabled) {
            this.setButtonState();
        }.bind(this));

        //Famobi
        window.famobi_musicButton = this.button;

        if(window.famobi.audio != undefined) {
            this.setActive(window.famobi.audio.isEnabled());
        }
    },

    postInitialize: function() {
        this.bgmKey = pc.audioManager.bgmSettingKey;
        this.setButtonState();

        //Famobi Hide Buttons
        if(window.famobi.audio != undefined && !window.famobi.audio.hasControls()) {
            this.entity.enabled = false;
        }
    },

    setButtonState: function() {
        if (!this.bgmKey) return;
        this.useBgm = pc.storageManager.get(this.bgmKey);

        this.setActive(this.useBgm);
    },


    // update code called every frame
    onRelease: function() {
        if(window.famobi.audio == undefined || window.famobi.audio.hasControls()) {
            this.app.fire('Audio:playSFX', 'button.mp3');
        }
        this.useBgm = !this.useBgm;

        this.setActive(this.useBgm);
        this.setSettings(this.useBgm);
    },

    setActive: function(isActive) {
        this.icon.element.sprite = this.iconSprites[isActive ? 1 : 0].resource;
    },
    
    setSettings: function(isActive) {
        pc.storageManager.set(this.bgmKey, isActive ? 1 : 0);
        pc.audioManager.setBGMSetting(isActive);
    },
});

