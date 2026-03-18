var VibrateButton = pc.createScript('vibrateButton');

VibrateButton.attributes.add('icon', { type: 'entity' });
/**
 * For feed forward: on icon sprite first
 * For feed back: off icon sprite first
 **/
VibrateButton.attributes.add('iconSprites', { type: 'asset', assetType: 'sprite', array: true });

pc.extend(VibrateButton.prototype, {

    initialize: function() {
        this.button = this.entity.button;
    },

    postInitialize: function() {
        var visible = this.setVisibility();

        if (!visible) {
            this.entity.destroy();

            return;
        }

        // mouse events
        this.entity.element.on('mouseup', this.onRelease, this);

        // touch events
        this.entity.element.on('touchend', this.onRelease, this);

        this.on('state', function(enabled) {
            this.setButtonState();
        }.bind(this));

        this.setButtonState();
    },

    setVisibility: function() {
        this.entity.enabled = false;

        return this.entity.enabled;
    },

    setButtonState: function() {
        this.vibrate = pc.storageManager.get('vibrate');
        this.setActive(this.vibrate);
    },


    onRelease: function() {
        this.app.fire('Audio:playSFX', 'button.mp3');
        this.vibrate = !this.vibrate;
        this.setActive(this.vibrate);
    },

    setActive: function(vibrate) {
        this.icon.element.sprite = this.iconSprites[+vibrate].resource;
        pc.vibrationManager.set(vibrate);

        if (vibrate) {
            this.app.fire('vibrate');
        }
    },
});
