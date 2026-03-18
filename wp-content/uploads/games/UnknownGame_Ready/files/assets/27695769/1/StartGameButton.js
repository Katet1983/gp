var StartGameButton = pc.createScript('startGameButton');

pc.extend(StartGameButton.prototype, {
    initialize: function() {
        this.entity.element.on('mouseup', this.onClick, this);
        this.entity.element.on('touchend', this.onClick, this);
    },

    onClick: function() {
        this.app.fire('Audio:playSFX', 'button.mp3');

        if (pc.gameManager.isBusy()) {
            return;
        }

        pc.gameManager.setBusy(true);

        var eventPromise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSTART, { levelName: 'level_' + pc.gameManager.currentLevel });

        Promise.all([eventPromise1]).then(this.showScreen.bind(this));
    },

    showScreen: function() {
        pc.gameManager.reset();

        pc.gameManager.setBusy(false);

        if (!pc.storageManager.get('finishedTutorial')) {
            this.app.fire('UIManager:showUI', 'Game Screen');
            pc.gameManager.startNextLevel();
        } else {
            this.app.fire('UIManager:showUI', 'Level Complete');
        }
        this.app.fire('UIManager:hideUI', 'Main Menu');
        pc.gameManager.startGame();
    },
});