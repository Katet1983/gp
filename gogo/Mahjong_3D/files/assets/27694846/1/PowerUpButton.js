var PowerUpButton = pc.createScript('powerUpButton');

PowerUpButton.attributes.add('type', {
    type: 'number',
    enum: [
        { 'Shuffle': 0 },
        { 'Hint': 1 },
        { 'Time': 2 }
    ],
});
PowerUpButton.attributes.add('maxAmountOfUsage', { type: 'number', default: 1 });
PowerUpButton.attributes.add('amountEntity', { type: 'entity' });
PowerUpButton.attributes.add('iconEntity', { type: 'entity' });
PowerUpButton.attributes.add('adIconEntity', { type: 'entity' });

var buttonStates = Object.freeze({
    'INACTIVE': 0,
    'ACTIVE': 1,
    'AD': 2,
    'WAITFORAD': 3,
});

pc.extend(PowerUpButton.prototype, {

    initialize: function() {
        this._used = 0;
        this._setState(1);

        this.app.on('GameManager:startLevel', this._onReset, this);
        pc.utils.addButtonClickEvent(this.entity, this._onClick, this);
        this.setAmountText(this.maxAmountOfUsage);
        this._checkState();
    },

    _onClick: function() {
        var self = this;
        this.app.fire('Audio:playSFX', 'button.mp3');

        switch (this._currentState) {
            case 0:
                // nothing
                break;
            case 1:
                // use power-up
                this._used += 1;
                this.setAmountText(this.maxAmountOfUsage - this._used);

                this.doPowerUp();
                break;
            case 2:
                // ad
                if(window.famobi.hasRewardedAd()) {

                    pc.gameManager.doTimeCount = false;
                    this._setState(3);

                    window.famobi.showRewarded().then(function(result) {
                        if(result.rewardGranted) {
                            self.doPowerUp();
                        }
                    }).finally(function() {
                        pc.gameManager.doTimeCount = true;
                        self._setState(2);
                    });
                }
                break;
            case 3:
                // nothing
                break;
        }

        this._checkState();
    },

    _onReset: function() {
        this._used = 0;
        this.setAmountText(this.maxAmountOfUsage - this._used);

        this._checkState();
    },

    _disable: function() {
        this.entity.enabled = false;
    },

    _enable: function() {
        this.entity.enabled = true;
    },

    _setState: function (state) {
        this._currentState = typeof state === 'number' ? state : tileStates.ACTIVE;

        switch (this._currentState) {
            case 0:
                this.entity.enabled = false;
                this.entity.element.color = new pc.Color(1, 1, 1);
                this.iconEntity.enabled = true;
                this.adIconEntity.enabled = false;
                break;
            case 1:
                this.entity.enabled = true;
                this.entity.element.color = new pc.Color(1, 1, 1);
                this.iconEntity.enabled = true;
                this.adIconEntity.enabled = false;
                break;
            case 2:
                this.entity.enabled = true;
                this.entity.element.color = new pc.Color(0.5, 0.5, 0.5);
                this.iconEntity.enabled = false;
                this.adIconEntity.enabled = true;
                break;
            case 3:
                this.entity.enabled = true;
                this.entity.element.color = new pc.Color(0.5, 0.5, 0.5);
                this.iconEntity.enabled = false;
                this.adIconEntity.enabled = true;
        }

        setTimeout(function() {
            if(window.famobi.hasRewardedAd()) {

            }
        }, 500);
    },

    _checkState: function() {
        if (this._currentState === 3) return;

        var hasRewarded = window.famobi.hasRewardedAd();
        if (pc.tutorialManager.doingTutorial) {
            this._setState(0);
        } else if (this._used < this.maxAmountOfUsage) {
            this._setState(1);
        } else if (this._used >= this.maxAmountOfUsage && !hasRewarded) {
            this._setState(0);
        } else if (this._used >= this.maxAmountOfUsage && hasRewarded) {
            this._setState(2);
        }
    },

    setAmountText: function(amount) {
        this.amountEntity.element.text = amount;
    },

    doPowerUp: function() {
        switch (this.type) {
            case 0:
                this.app.fire('PowerUpButton:shuffle');
                StatisticsManager.instance.incrementStatistic("statistics_shuffle_power_up_used", 1);
                StatisticsManager.instance.incrementStatistic("statistics_total_power_up_used", 1);
                break;
            case 1:
                this.app.fire('PowerUpButton:hint');
                StatisticsManager.instance.incrementStatistic("statistics_hint_power_up_used", 1);
                StatisticsManager.instance.incrementStatistic("statistics_total_power_up_used", 1);
                break;
            case 2:
                pc.gameManager.addTime(30);
                StatisticsManager.instance.incrementStatistic("statistics_time_power_up_used", 1);
                StatisticsManager.instance.incrementStatistic("statistics_total_power_up_used", 1);
                break;
        }
    },

    update: function() {
    }
});
