var StartTutorialButton = pc.createScript('startTutorialButton');

pc.extend(StartTutorialButton.prototype, {
    initialize: function() {
        this.entity.element.on('click', this.onClick, this);
        this.entity.element.on('touchend', this.onClick, this);
    },

    onClick: function() {
        this.app.fire('Audio:playSFX', 'button.mp3');

        if (pc.gameManager.isBusy()) {
            return;
        }
        
        pc.gameManager.setBusy(true);

        var eventPromise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSTART, { levelName: 'level_' + 0 });

        Promise.all([eventPromise1]).then(this.startTutorial.bind(this));

    },

    startTutorial: function() {
        pc.gameManager.setBusy(false);

        pc.gameManager.forceTutorial = true;
        pc.gameManager.reset();
        this.app.fire('UIManager:showUI', 'Game Screen');
        pc.gameManager.startNextLevel();
    }
});