window.famobi = window.famobi || {};
window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tacking || {
	init: function() {},
	trackEvent: function() {},
	EVENTS: {
	    'LEVEL_START'	: 'event/level/start',
	    'LEVEL_END'		: 'event/level/end',
	    'LEVEL_UPDATE'	: 'event/level/update',
	    'PING'          : 'event/ping',
	    'AD'			: 'event/ad'
	}
};

let _liveScore = null;
const _sendScore = function(score) {
	if(score !== _liveScore) {
		_liveScore = score;
		// Score API
		GAMESNACKS.sendScore(_liveScore);
	}
};

// ------------ Score, GameOver & LevelComplete API ------------
window.famobi_analytics.trackEvent = function(event, params) {

	IS_DEBUG && console.log(event, params);

	return new Promise(function(resolve, reject) {
		switch(event) {
			case "EVENT_TOTALSCORE":
				_sendScore(params.totalScore);
				break;
			case "EVENT_LIVESCORE":
				_sendScore(params.liveScore);
				break;
			case "EVENT_LEVELFAIL":
				if(params.reason === "timeout") {
					GAMESNACKS.levelComplete(0);
				} else {
					GAMESNACKS.gameOver();
				}
				break;
			default:
				// do nothing
		}
		return resolve(event, params);
	});
};
