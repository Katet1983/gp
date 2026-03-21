window.gainedCoins = false;

var EVENT_TYPE = {
    AD_SHOW: "AdShow",
    AD_REWARD: "AdReward",
    AUDIO_TOGGLE: "AudioToggle",
}

function hp_adShow() {
    cc.game.emit(EVENT_TYPE.AD_SHOW);
}

function hp_adReward(isReward) {
    cc.game.emit(EVENT_TYPE.AD_REWARD, isReward );
}

function hp_audioToggle(status) {
    cc.game.emit(EVENT_TYPE.AUDIO_TOGGLE, status );
}