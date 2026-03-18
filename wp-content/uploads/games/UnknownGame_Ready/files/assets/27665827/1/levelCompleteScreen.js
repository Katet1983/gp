var LevelCompleteScreen = pc.createScript('levelCompleteScreen');

LevelCompleteScreen.attributes.add('openTime', { type: 'number', default: 5 });
LevelCompleteScreen.attributes.add('levelNumber', { type: 'entity', default: 5 });

pc.extend(LevelCompleteScreen.prototype, {
    onUIEntityOpen: function() {
        this.counter = 0;
        this.isCounting = true;
        this.levelNumber.element.text = String(pc.gameManager.currentLevel);
        this.app.fire('UIManager:hideUI', 'Game Screen');
        if (pc.gameManager.currentLevel > 1) {
            this.app.fire('Audio:playSFX', 'level_complete.mp3');
        }
    },

    update: function(dt) {
        if (this.isCounting) {
            this.counter += dt;
            if (this.counter > this.openTime) {
                this.isCounting = false;
                this.app.fire('UIManager:hideUI', 'Level Complete');
                this.app.fire('UIManager:showUI', 'Game Screen');
                pc.gameManager.startNextLevel();
            }
        }

    }
});