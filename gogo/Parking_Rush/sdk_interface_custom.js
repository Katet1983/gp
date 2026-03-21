// GAME-SPECIFIC SETTINGS / OVERRIDES

SDK_INTERFACE_SETTINGS.isProd = true;
SDK_INTERFACE_SETTINGS.version = "1.0.3";

if(SDK_INTERFACE_SETTINGS.isProd) {
	// PRODUCTION
	SDK_INTERFACE_SETTINGS.debugLevel = 0;
	SDK_INTERFACE_SETTINGS.forceMockObject = false;
} else {
	// TESTING
	SDK_INTERFACE_SETTINGS.debugLevel = 1;
	SDK_INTERFACE_SETTINGS.forceMockObject = true;
}

// overrides
SDK_INTERFACE_OVERRIDES.famobi.showInterstitialAd = (eventId, callback) => {

	return new Promise(resolve => {
		let params = {};

		if(typeof eventId === "object") {
		    params = eventId;
		} else {
		    params.callback = typeof eventId === "function" ? eventId : typeof callback === "function" ? callback : undefined;
		    params.eventId = typeof eventId === "string" ? eventId : typeof callback === "string" ? callback : undefined;
		}

		/*
			'preroll': before the game loads (before UI has rendered)
			'start': before the gameplay starts (after UI has rendered)
			'pause': the player pauses the game
			'next': player navigates to the next level
			'browse': the player explores options outside of the gameplay
		*/

		SDK_INTERFACE_HELPERS.placement_id = null;

		if(typeof params.eventId === "string") {
			switch(params.eventId.toLowerCase()) {
				case "preroll":
					SDK_INTERFACE_HELPERS.placement_id = "preroll";
					break;
				case "button:main:start":
				case "button:home:start":
				case "button:levelselect:start":
				case "button:level:restart":
					SDK_INTERFACE_HELPERS.placement_id = "start";
					break;
				case "button:level:menu":
				case "button:game:menu":
				case "button:level:pause":
				case "button:game:pause":
					SDK_INTERFACE_HELPERS.placement_id = "pause";
					break;
				case "button:level:settings":
				case "button:level:achievements":
				case "button:settings:restart":
					// SDK_INTERFACE_HELPERS.placement_id = params.eventId; ???
					break;
				case "button:home:category":
				case "button:home:page":
				case "button:level:quit":
					SDK_INTERFACE_HELPERS.placement_id = "browse";
					break;
				case "button:result:restart":
				case "button:results:restart":
				case "button:result:next":
				case "button:result:start":
					SDK_INTERFACE_HELPERS.placement_id = "next";
					break;
				default:
					// do nothing
			}
		}

		if(SDK_INTERFACE_HELPERS.placement_id !== null) {
			window.famobi.showAd(() => {
				if(typeof params.callback === "function") {
				    params.callback();
				}
				resolve();
			}, false, SDK_INTERFACE_HELPERS.placement_id === "preroll");
		} else {
			SDK_INTERFACE.getDebugLevel() && console.log("showInterstitialAd('%s')", params.eventId);
			if(typeof params.callback === "function") {
			    params.callback();
			}
			resolve();
		}
	});
};

SDK_INTERFACE_OVERRIDES.famobi_analytics.trackEvent = (event, params) => {

	const lastFamobiAnalyticsEvent = SDK_INTERFACE_HELPERS.lastFamobiAnalyticsEvent;
	SDK_INTERFACE_HELPERS.lastFamobiAnalyticsEvent = event;

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(event, params);

		switch(event) {
			case "EVENT_LIVESCORE":
				SDK_INTERFACE_HELPERS.GameSnacks.score.update(params.liveScore);
				break;

			case "EVENT_LEVELSCORE":
				SDK_INTERFACE_HELPERS.GameSnacks.score.update(params.levelScore);
				break;

			case "EVENT_TOTALSCORE":

				/*
				return window.famobi.showAd(() => {
					resolve(event, params);
				});
				*/

				break;

			case "EVENT_LEVELFAIL":
				if(params.reason === "quit") {
					if(lastFamobiAnalyticsEvent === "EVENT_LEVELSUCCESS" && ["color-pixel-art-classic"].includes(window.famobi_gameID)) {
						break;
					}
					SDK_INTERFACE_HELPERS.GameSnacks.game.gameOver();
				} else {
					SDK_INTERFACE_HELPERS.GameSnacks.game.gameOver();
				}
				break;

			case "EVENT_LEVELSUCCESS":
				SDK_INTERFACE_HELPERS.GameSnacks.game.levelComplete(SDK_INTERFACE_HELPERS.getLevel(params.levelName) - 1);
				break;

			case "EVENT_LEVELSTART":
				// SDK_INTERFACE_HELPERS.GameSnacks.score.update(0);
				break;

			case "EVENT_LEVELRESTART":
				// SDK_INTERFACE_HELPERS.GameSnacks.score.update(0);
				SDK_INTERFACE_HELPERS.GameSnacks.game.gameOver();
				break;

			default:
				// do nothing
		};

		return resolve(event, params);
	});
};

SDK_INTERFACE_OVERRIDES.famobi_analytics.trackScreen = (screen, pageTitle) => {

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(screen, pageTitle);

		switch(screen) {
			case "SCREEN_HOME":
				// ...
				break;
			default:
				// ...
		}

		return resolve(screen, pageTitle);
	});
};