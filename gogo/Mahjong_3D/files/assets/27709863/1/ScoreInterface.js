var ScoreInterface = pc.createScript('scoreInterface');

ScoreInterface.attributes.add('scoreText', { type: 'entity' });
ScoreInterface.attributes.add('multiplierText', { type: 'entity' });
ScoreInterface.attributes.add('combo', { type: 'entity' });
ScoreInterface.attributes.add('comboCircle', { type: 'entity' });

pc.extend(ScoreInterface.prototype, {
    initialize: function() {
        this.app.on('ScoreManager:setScore', this.setScoreText, this);
        this.app.on('ScoreManager:setMultiplier', this.setMultiplierText, this);
        this.app.on('ScoreManager:isInCombo', this.setComboVisible, this);
    },
    
    update: function() {
        if (pc.scoreManager.isInCombo) {
            this.comboCircle.script.circleFill.updateValue(pc.scoreManager.comboTimePercentage);
        }
    },
    
    setScoreText: function(score) {
        this.scoreText.element.text = String(score);
    },
    
    setMultiplierText: function(multiplier) {
        this.multiplierText.element.text = multiplier + 'x';
        this.multiplierText.script.tweenScale.startTween();
    },
    
    setComboVisible: function(isVisible) {
        this.combo.enabled = isVisible;
    }
});