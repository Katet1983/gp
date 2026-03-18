var LoseScreen = pc.createScript('loseScreen');

LoseScreen.attributes.add('scoreText', { type: 'entity' });
LoseScreen.attributes.add('highscoreText', { type: 'entity' });

LoseScreen.attributes.add('countdownTimer', { type: 'number', default: 2 });
LoseScreen.attributes.add('homeButton', { type: 'entity' });

pc.extend(LoseScreen.prototype, {

    initialize: function() {
        this._startCounting = false;  
    },
    
    onUIEntityOpen: function() {
        this.scoreText.element.text = String(pc.scoreManager.currentScore);
        this.highscoreText.element.text = String(pc.scoreManager.highscore);
        this.app.fire('Audio:playSFX', 'game_complete.mp3');

        this._timer = 0;
        this._startTimer();
        this._disableHomeButton();
    },

    update: function(dt) {
        if (this._startCounting) {

            this._timer += dt;

            if (this._timer >= this.countdownTimer) {
                this._doEvents();
            }
        }
    },

    _doEvents: function() {
        this._startCounting = false;

        var event1Promise = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELFAIL, { levelName: 'level_' + pc.gameManager.currentLevel, reason: "timeout" });
        var event2Promise = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_TOTALSCORE, { totalScore: pc.scoreManager.currentScore });
        var event3Promise = pc.famobiAPI.showInterstitialAd();

        Promise.all([event1Promise, event2Promise, event3Promise])
            .then(this._postEvents.bind(this));
        return;
    },

    _postEvents: function() {
        this._enableHomeButton();
    },

    _startTimer: function() {
        this._timer = 0;
        this._startCounting = true;  
    },

    _disableHomeButton: function() {
        this.homeButton.enabled = false;
    },

    _enableHomeButton: function() {
        this.homeButton.enabled = true;
    },
});