var ResetButton = pc.createScript('resetButton');

pc.extend(ResetButton.prototype, {
    initialize: function() {
        if (this.entity.script.eventTrackButton) {
            this.entity.script.eventTrackButton.on('click', this.onClick, this);
        } else {
            this.entity.element.on('mouseup', this.onClick, this);
            this.entity.element.on('touchend', this.onClick, this);
        }


    },

    onClick: function() {
        pc.confetti.stopLoop();
        pc.gameManager.reset();
        pc.gameManager.forceTutorial = false;
        pc.tutorialManager.doingTutorial = false;
    }
});