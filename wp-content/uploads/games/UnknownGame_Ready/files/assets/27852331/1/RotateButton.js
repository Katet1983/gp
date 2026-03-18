var RotateButton = pc.createScript('rotateButton');

RotateButton.attributes.add('isLeft', { type: 'boolean' });

pc.extend(RotateButton.prototype, {
    initialize: function() {
        this.entity.element.on('mouseup', this.onClick, this);
        this.entity.element.on('touchend', this.onClick, this);

        if (pc.viewport.getDevice() !== deviceEnum.DESKTOP) {
            this.disableButton();
        }
        
        this.app.on('TutorialManager:startTutorial', this.disableButton, this);
        this.app.on('TutorialManager:stopTutorial', this.enableButton, this);
    },
    
    onClick: function() {
        pc.gameManager.mahjongGroup.script.mahjongGroup.autoRotate(this.isLeft ? 90 : -90);
        this.app.fire('Audio:playSFX', 'button.mp3');
    },
    
    disableButton: function() {
        this.entity.enabled = false;
    },
    
    enableButton: function() {
        if (pc.viewport.getDevice() !== deviceEnum.DESKTOP) return;
        this.entity.enabled = true;
    }
});