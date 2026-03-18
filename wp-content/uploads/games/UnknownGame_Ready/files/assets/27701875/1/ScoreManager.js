var ScoreManager = pc.createScript('scoreManager');

ScoreManager.attributes.add('pointsPerPair', { type: 'number' });
ScoreManager.attributes.add('comboTime', { type: 'number' });

pc.extend(ScoreManager.prototype, {
    initialize: function() {
        pc.scoreManager = this;
        this.reset();

        this.currentScore = 0;
        this.roundScore = 0;
        
        this.highscore = pc.storageManager.get('highscore');
        this.comboTimePercentage = 0;

        this.app.on('GameManager:onStartGame', this.reset, this); 
        this.app.on('GameManager:onEndGame', this.checkHighscore, this);
        this.app.on('MahjongGroup:onTileMatch', this.addScore, this);
    },

    update: function(dt) {
        if (this.isInCombo) {
            this.comboCounter += dt;
            this.comboTimePercentage = (this.comboTime - this.comboCounter) / this.comboTime;
            if (this.comboCounter > this.comboTime) {
                this.isInCombo = false;
                this.app.fire('ScoreManager:isInCombo', this.isInCombo);
            }
        }
    },
    
    resetRoundScore: function() {
        this.roundScore = 0;
    },
    
    getRoundScore: function() {
        return this.roundScore;
    },

    reset: function() {
        this.currentScore = 0;
        this.resetRoundScore();
        this.app.fire('ScoreManager:setScore', this.currentScore);
        this.currentMultiplier = 1;
        this.app.fire('ScoreManager:setMultiplier', this.currentMultiplier);
        this.isInCombo = false;
        this.app.fire('ScoreManager:isInCombo', this.isInCombo);
        this.comboCounter = 0;
        this.comboTimePercentage = 0;
    },

    addScore: function() {
        this.checkMultiplier();
        this.currentScore += this.pointsPerPair * this.currentMultiplier;
        this.roundScore += this.pointsPerPair * this.currentMultiplier;
        this.app.fire('ScoreManager:setScore', this.currentScore);

        //Livescore Event
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", { liveScore: this.currentScore })
    },

    checkMultiplier: function() {
        this.currentMultiplier = this.isInCombo ? this.currentMultiplier + 1 : 1;
        this.app.fire('ScoreManager:setMultiplier', this.currentMultiplier);
        this.comboCounter = 0;
        this.isInCombo = true;
        this.app.fire('ScoreManager:isInCombo', this.isInCombo);
    },

    checkHighscore: function() {
        if (this.currentScore > this.highscore) {
            this.highscore = this.currentScore;
            pc.storageManager.set('highscore', this.highscore);
        }
    },
});