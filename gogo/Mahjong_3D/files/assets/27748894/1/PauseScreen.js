var PauseScreen = pc.createScript('pauseScreen');

pc.extend(PauseScreen.prototype, {
    onUIEntityClose: function() {
        this.app.timeScale = 1;
        pc.gameManager.mahjongGroup.script.mahjongGroup.canMove = true;
        pc.gameManager.mahjongGroup.enabled = true;
    },

    onUIEntityOpen: function() {
        this.app.timeScale = 0; 
        pc.gameManager.mahjongGroup.script.mahjongGroup.canMove = false;
        pc.gameManager.mahjongGroup.enabled = false;
    },
    
    onEventButtonPress: function(eventName, callback, context) {
        if (this._busy) {
            return;
        }
        
        this._busy = true;

        if (eventName) {

            var eventPromise1 = null;

            if (eventName === 'EVENT_LEVELFAIL') {
                eventPromise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELFAIL, { levelName: 'level_' + pc.gameManager.currentLevel, reason: 'quit' });

                Promise.all([eventPromise1]).then(this._onEvent.bind(this, callback, context));
            } else {
                eventPromise1 = window.famobi_analytics.trackEvent(window.famobi_analytics[eventName]);
                Promise.all([eventPromise1]).then(this._onEvent.bind(this, callback, context));

                if (eventName === 'EVENT_PAUSE') {
                    pc.gameManager.onPause();
                } else if (eventName === 'EVENT_RESUME') {
                    pc.gameManager.onResume();
                }
            }
        }
    },

    _onEvent: function(callback, context) {
        this._busy = false;
        
        callback.call(context);
    },
});