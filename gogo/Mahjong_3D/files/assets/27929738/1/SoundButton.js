var SoundButton = pc.createScript('soundButton');

SoundButton.attributes.add('icon', { type: 'entity' });
/**
 * For feed forward: on icon sprite first
 * For feed back: off icon sprite first
 **/
SoundButton.attributes.add('iconSprites', { type: 'asset', assetType: 'sprite', array: true });


pc.extend(SoundButton.prototype, {
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
        window.famobi_soundButton = this.button;

        if(window.famobi.audio != undefined) {
            this.setActive(window.famobi.audio.isEnabled());
        }
    },

    postInitialize: function() {
        this.sfxKey = pc.audioManager.sfxSettingKey;
        this.setButtonState();

        //Famobi Hide Buttons
        if(window.famobi.audio != undefined && !window.famobi.audio.hasControls()) {
            this.entity.enabled = false;
        }
    },

    setButtonState: function() {
        if (!this.sfxKey) return;
        this.useSFX = pc.storageManager.get(this.sfxKey);

        this.setActive(this.useSFX);
    },

    // update code called every frame
    onRelease: function() {
        if(window.famobi.audio == undefined || window.famobi.audio.hasControls()) {
            this.app.fire('Audio:playSFX', 'button.mp3');
        }

        this.useSFX = !this.useSFX;
        this.setActive(this.useSFX);
        this.setSettings(this.useSFX);
    },

    setActive: function(isActive) {
        this.icon.element.sprite = this.iconSprites[isActive ? 1 : 0].resource;
    },

    setSettings: function(isActive) {
        pc.storageManager.set(this.sfxKey, isActive ? 1 : 0);
        pc.audioManager.setSFXSetting(isActive);
    },
});

