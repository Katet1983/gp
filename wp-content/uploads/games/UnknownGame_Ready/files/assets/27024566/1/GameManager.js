var GameManager = pc.createScript('gameManager');

GameManager.attributes.add('mahjongGroup', { type: 'entity' });
GameManager.attributes.add('roundTime', { type: 'number', default: 360 });
GameManager.attributes.add('startLevel', { type: 'number', default: 1 });
GameManager.attributes.add('addTimeDelay', { type: 'number', default: 2000 });

pc.extend(GameManager.prototype, {

    initialize: function() {
        pc.gameManager = this;

        this.ready = false;
        this._paused = false;
        this.time = 0;
        this.doTimeCount = false;
        this.forceTutorial = false;
        this.addedTime = false;
        this.currentLevel = !pc.storageManager.get('finishedTutorial') || this.forceTutorial ? 0 : this.startLevel;
    }, 

    postInitialize: function() {
        pc.levelLoader.lazyLoadLevels();
        if (!this.ready) {
            this.app.fire('GameManager:ready');  
            this.ready = true;
        }
        if (!pc.storageManager.get('finishedTutorial')) {
            // instant start tutorial level
            var eventPromise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSTART, { levelName: 'level_0' });

            this.setBusy(true);

            Promise.all([eventPromise1])
                .then(function() { 
                this.startNextLevel();
                this.setBusy(false);
                this.app.fire('UIManager:hideUI', 'Main Menu');
                this.app.fire('UIManager:showUI', 'Game Screen');
                this.startGame();
            }.bind(this));
        }
    },

    isBusy: function() {
        return this._busy;
    },

    setBusy: function(value) {
        this._busy = value;  
    },

    update: function(dt) {
        if (!this.doTimeCount) return;
        if (this._paused) return;
        this.time += dt;

        var timeLeft = this.roundTime - this.time;
        if (timeLeft <= 1) this.onAddTimePopUp();
        this.app.fire('GameManager:time', timeLeft);
    },

    startGame: function() {
        this.app.fire('GameManager:onStartGame'); 
        this.addedTime = false;
    },

    toggleTimer: function(doTimer) {
        if (pc.tutorialManager.doingTutorial) {
            this.doTimeCount = false;
            return;
        }

        if (doTimer === undefined) {
            this.doTimeCount = !this.doTimeCount;
        } else {
            this.doTimeCount = doTimer;
        }
    },

    onPause: function() {
        this._paused = true;
    },

    onResume: function() {
        this._paused = false;
    },

    onAddTimePopUp: function() {
        this.app.fire('Audio:playSFX', 'time_up.mp3');
        this.toggleTimer(false);
        this.app.fire('GameManager:stopInput');
        setTimeout(function() {
            this.app.fire('UIManager:hideUI', 'Game Screen');

            if (! this.addedTime && pc.famobiAPI.hasRewardedAd()) {
                this.app.fire('UIManager:showUI', 'Add Time Screen');
            } else {
                this.app.fire('UIManager:showUI', 'Lose Screen');
                this.endGame();
            }
        }.bind(this), this.addTimeDelay)

    },

    endGame: function() {
        this.toggleTimer(false);

        this.app.fire('GameManager:onEndGame');  
        StatisticsManager.instance.incrementStatistic("statistics_game_lost", 1);
    },

    startNextLevel: function() {
        pc.gameManager.mahjongGroup.script.mahjongGroup.despawnAll();
        pc.levelLoader.loadLevel(pc.gameManager.currentLevel, pc.gameManager.onLevelLoaded, pc.gameManager);
        this.toggleTimer(true);
        this.app.fire('GameManager:startLevel');  
    },

    onLevelLoaded: function(data) {
        this.mahjongGroup.script.mahjongGroup.spawnLevel(data.resource);

        this.sendLevelStartStatistic(data.resource.id);

        this.app.fire('GameManager:startInput');

        pc.tutorialManager.toggleInfo(-1);
        if (data.resource.id === 0) {
            pc.tutorialManager.startTutorial();
        }
    },

    sendLevelStartStatistic: function(level) {
        switch (level) {
            case 1 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_one_starts", 1); 
                break;
            }
            case 2 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_two_starts", 1);
                break;
            }
            case 3 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_three_starts", 1);
                break;
            }
        }
    },

    reset: function() {
        this.toggleTimer(false);
        this.time = 0;
        this._paused = false;
        this.currentLevel = !pc.storageManager.get('finishedTutorial') || this.forceTutorial ? 0 : this.startLevel;
        this.mahjongGroup.script.mahjongGroup.despawnAll();
        pc.scoreManager.reset();
        pc.tutorialManager.stopTutorial();
    },

    finished: function() {
        this.app.fire('GameManager:finished');
        this.toggleTimer(false);

        this.sendLevelFinishedStatistic(this.currentLevel);
        
        var finished = this.currentLevel >= pc.levelLoader.totalLevels;

        if (finished) {
            this.allLevelsFinished();
            return;
        }

        var event4Promise = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_CUSTOM, { event: 'LEVELSUCCESS', levelName: 'level_' + this.currentLevel });

        Promise.all([event4Promise])
            .then(this._goToNextLevel.bind(this));
    },
    
    sendLevelFinishedStatistic: function(level) {
        switch (level) {
            case 1 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_one_wins", 1); 
                break;
            }
            case 2 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_two_wins", 1);
                break;
            }
            case 3 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_three_wins", 1);
                break;
            }
        }
    },

    _goToNextLevel: function() {
        pc.scoreManager.resetRoundScore();

        this.currentLevel += 1;

        var event1Promise = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSTART, { levelName: 'level_' + this.currentLevel });

        Promise.all([event1Promise])
            .then(function() {
            this.app.fire('UIManager:hideUI', 'Game Screen');
            this.app.fire('UIManager:showUI', 'Level Complete');
            pc.confetti.play();
        }.bind(this))
    },

    allLevelsFinished: function() {
        pc.confetti.startLoop(2150, 25);
        this.app.fire('GameManager:onEndGame');
        this.app.fire('UIManager:hideUI', 'Game Screen');
        this.app.fire('UIManager:showUI', 'Win Screen');
        StatisticsManager.instance.incrementStatistic("statistics_game_completed", 1);
    },

    addTime: function(time) {
        this.time -= time;
    }
});
