var AddTimeScreen = pc.createScript('addTimeScreen');

AddTimeScreen.attributes.add('screenTimeOpen', { type: 'number' });
AddTimeScreen.attributes.add('timeRewardSeconds', { type: 'number' });
AddTimeScreen.attributes.add('timerBar', { type: 'entity' });
AddTimeScreen.attributes.add('adButton', { type: 'entity' });

pc.extend(AddTimeScreen.prototype, {
    initialize: function() {
        if (this.app.touch) {
            this.adButton.element.on('touchend', this.watchAd, this);
        } else {
            this.adButton.element.on('click', this.watchAd, this);
        }
    },

    watchAd: function() {
        if (!this.entity.enabled) {
            return;
        }

        if (!this.isCounting) {
            return;
        }

        this.isCounting = false;
        var self = this;

        window.addEventListener('focus', this.onFocus.bind(this));

        if(window.famobi.hasRewardedAd()) {
            this.adButton.enabled = false;
            window.famobi.showRewarded().then(function(result) {
                if(result.isGranted) {
                    self.onSuccess();
                }
            }).finally(function() {
                self.onFocus();
            });
        }

    },

    onFocus: function() {
        setTimeout(function() {
            if(window.famobi.hasRewardedAd()) {
                this.adButton.enabled = true;
            }
            if (this.entity.enabled) {
                this.isCounting = true;
            }
        }.bind(this), 500);

        window.removeEventListener('focus', this.onFocus.bind(this));
    },

    onUIEntityOpen: function() {
        this.timerBar.script.circleFill.updateValue(1);
        this.counter = 0;
        this.isCounting = true;
    },

    update: function(dt) {
        if (this.isCounting) {
            this.counter += dt;
            this.timerBar.script.circleFill.updateValue((this.screenTimeOpen - this.counter) / this.screenTimeOpen);
            if (this.counter >+ this.screenTimeOpen) {
                this.isCounting = false;
                this.onFail();
            }
        }
    },

    onSuccess: function() {
        pc.gameManager.addedTime = true;
        pc.gameManager.addTime(30);
        pc.gameManager.toggleTimer(true);

        this.app.fire('UIManager:hideUI', 'Add Time Screen');
        this.app.fire('UIManager:showUI', 'Game Screen');
        this.app.fire('GameManager:startInput');
    },

    onFail: function() {
        pc.gameManager.endGame();
        this.app.fire('UIManager:hideUI', 'Add Time Screen');
        this.app.fire('UIManager:showUI', 'Lose Screen');
    },
});
