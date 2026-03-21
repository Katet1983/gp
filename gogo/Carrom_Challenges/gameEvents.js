window.currentRewardType = "";
window.isFirstLoad = false;
window.totalLevelAdsWatched = 0;
window.coinsAdClick = false;
window.watchAdCoins = 0;
window.watchAdGems = 0;
window.challengeLevelSelect = false;
window.adLoadSucceed = true;

var EVENT_TYPE = {
    GAME_START: "GameStart",
    GAME_PAUSE: "GamePause",
    GAME_RESUME: "GameResume",
    GAME_RESTART: "GameRestart",
    GAME_REWARD: "GameReward",
}

function hp_gameStart() {
    cc.game.emit(EVENT_TYPE.GAME_START);
}

function pauseEvent() {
    cc.game.emit(EVENT_TYPE.GAME_PAUSE)
}

function resumeEvent() {
    cc.game.emit(EVENT_TYPE.GAME_RESUME)
}

function hp_gameRestart() {
    cc.game.emit(EVENT_TYPE.GAME_RESTART);
}

function hp_closeAd(isReward) {
    cc.game.emit(EVENT_TYPE.GAME_REWARD, { type: window.currentRewardType, isRewarded: isReward });
}