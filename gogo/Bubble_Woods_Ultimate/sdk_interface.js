/**
 * SDK INTERFACE v1.0.8
 * /

/*
	SETTINGS
 */
const SDK_INTERFACE_SETTINGS = {

	isProd: true,
	debugLevel: 0,
	forceMockObject: true,

	// ads
	interstitial: {
		enabled: true, // enable/disable interstitial ads
		initial: false, // show initial ad
		preload: 250, // preload interval in ms
		retry: 2000, // timeout before retry after preload fail
		timout: 250, // timout before calling showRewarded()
		cooldown: 30, // time between ads
	},
	rewarded: {
		enabled: true, // enable/disable rewarded ads
		preload: 250, // preload interval in ms
		retry: 2000, // timeout before retry after preload fail
		timout: 250, // timout before calling showRewarded()
		reward: false // reward when in doubt
	},

	// files to load
	externalFiles: ["sdk_interface_custom.js"],

	// features
	features: {
		auto_quality: false,
		copyright: false,
		credits: false,
		external_achievements: false,
		external_leaderboard: false,
		external_mute: true,
		external_pause: false,
		external_start: false,
		forced_mode: false,
		leaderboard: false,
		multiplayer: false,
		multiplayer_local: true,
		skip_title: false,
		skip_tutorial: false,
		standalone: true,
		rewarded: true,
		external_focus: false,
		visibilitychange: true
	},

	// forced mode
	forced_mode: {

	},

	// misc
	aid: "A1234-5", // affiliate id
	name: "Famobi", // name of partner/customer
	branding_url: "",
	branding_image: "logo", // "logo" = transparent
	show_splash: false,
	menuless: true
};

const SDK_INTERFACE_HELPERS = {

	isLandscape:  window.innerWidth > window.innerHeight,

	lastFamobiAnalyticsEvent: null,

	showPauseOverlay: function(isVisible) {

		let pauseOverlay = document.getElementById("SDK_Interface_PauseOverlay");

		if(pauseOverlay === null) {

			pauseOverlay = document.createElement("div");
			pauseOverlay.setAttribute("id", "SDK_Interface_PauseOverlay");

			pauseOverlay.style.position = 'absolute';
		    pauseOverlay.style.top = '0';
		    pauseOverlay.style.left = '0';
		    pauseOverlay.style.width = '100%';
		    pauseOverlay.style.height = '100%';
		    pauseOverlay.style.background = 'rgba(0, 0, 0, 0.8)'
		    pauseOverlay.style.pointerEvents = 'none';
		    pauseOverlay.style.display = 'none';
		    pauseOverlay.style["z-index"] = 99999;

		    ["pointerdown", "MSPointerDown", "touchstart", "mousedown"].forEach(eventName => {
		    	pauseOverlay.addEventListener(eventName, event => {
		    		event.stopPropagation();
		    	});
		    });

	        const canvasContainer = document.querySelector('canvas');
	    	if(canvasContainer) {
	    		if(true) { // TODO
	    			canvasContainer.parentNode.insertBefore(pauseOverlay, canvasContainer.nextSibling);
	    		} else {
	    			canvasContainer.appendChild(pauseOverlay);
	    		}
	    	}
		}

		if(pauseOverlay) {
			pauseOverlay.style.display = isVisible ? "block" : "none";
			pauseOverlay.style.pointerEvents = isVisible ? "auto" : "none";
		}
	},

	GameSnacks: {
		game: {
			levelCompletionScore: 0,
			isReady: false,

			gameOver: function() {
				SDK_INTERFACE_HELPERS.log("GameSnacks.game.gameOver()");
				window.GameSnacks.game.gameOver();
			},
			firstFrameReady: function() {
				SDK_INTERFACE_HELPERS.log("GameSnacks.game.firstFrameReady()");
				window.GameSnacks.game.firstFrameReady();
			},
			levelComplete: function(level) {
				SDK_INTERFACE_HELPERS.log("GameSnacks.game.levelComplete(%s)", level);
				window.GameSnacks.game.levelComplete(level);

				if(SDK_INTERFACE_SETTINGS.hasTotalScore === false || ["color-pixel-art-classic"].includes(window.famobi_gameID)) {
					this.levelCompletionScore++;
					SDK_INTERFACE_HELPERS.GameSnacks.score.update(this.levelCompletionScore, true);
				}
			},
			onPause: function(callback) {
				SDK_INTERFACE_HELPERS.log("GameSnacks.game.onPause(callback)");
				window.GameSnacks.game.onPause(callback);
			},
			onResume: function(callback) {
				SDK_INTERFACE_HELPERS.log("GameSnacks.game.onResume(callback)");
				window.GameSnacks.game.onResume(callback);
			},
			ready: function() {
				if(!this.isReady) {
					this.isReady = true;
					SDK_INTERFACE_HELPERS.log("GameSnacks.game.ready()");
					window.GameSnacks.game.ready();
				}
			}
		},
		score: {

			lastScore: null,

			update: function(score, isForced = false) {
				score = parseInt(score);
				if(score !== this.lastScore && score >= (this.lastScore || 0)) {
					this.lastScore = score;
					if(score >= 0 && (SDK_INTERFACE_SETTINGS.hasTotalScore !== false || isForced)) {
						SDK_INTERFACE_HELPERS.log("GameSnacks.score.update(%s)", score);
						window.GameSnacks.score.update(score);
					}
				}
			},

			reset: function() {
				this.lastScore = null;
			}
		},
		storage: {
			clear: function() {
				SDK_INTERFACE_HELPERS.log("GameSnacks.storage.clear()");
				window.GameSnacks.storage.clear();
			},
			getItem: function(key) {
				SDK_INTERFACE_HELPERS.log("GameSnacks.storage.getItem('%s')", key);
				return window.GameSnacks.storage.getItem(key);
			},
			removeItem: function(key) {
				SDK_INTERFACE_HELPERS.log("GameSnacks.storage.removeItem('%s')", key);
				return window.GameSnacks.storage.removeItem(key);
			},
			setItem: function(key, value) {
				// SDK_INTERFACE_HELPERS.log("GameSnacks.storage.setItem('%s', '%s')", key, value);
				window.GameSnacks.storage.setItem(key, value);
			}
		},
		ad: {
			break: function(adBreak) {
				SDK_INTERFACE_HELPERS.log("GameSnacks.ad.break('%s')", adBreak.type);
				return window.GameSnacks.ad.break(adBreak);
			}
		},
		adBreak: {
			reward: {},
			interstitial: {}
		},
		audio: {
			isEnabled: function() {
				return window.GameSnacks.audio.isEnabled();
			},
			subscribe: function(callback) {
				SDK_INTERFACE_HELPERS.log("GameSnacks.audio.subscribe(callback)");
				window.GameSnacks.audio.subscribe(callback);
			},
			update: function(isEnabled = null) {

				isEnabled = isEnabled === null ? GameSnacks.audio.isEnabled() : !!isEnabled;

				switch(window.famobi_gameID) {
					case "color-pixel-art-classic":
						SDK_INTERFACE_HELPERS.log("window.famobi.setVolume(%s)", isEnabled ? 1.0 : 0.0);
						window.famobi.setVolume(isEnabled ? 1.0 : 0.0);
						break;
					default:
						window.famobi.adapters.run("request", isEnabled ? "enableAudio" : "disableAudio");
						window.famobi.adapters.run("request", isEnabled ? "enableMusic" : "disableMusic");
				}
			}
		}
	},

	getLevel: function(levelName) {

		let lvl = 0;

		switch(window.famobi_gameID) {

			case "color-pixel-art-classic":
				
				return 0; // If levels are unordered level should be 0

				const levels = {
					"animal": 150,
					"plant": 110,
					"food": 130,
					"human": 116,
					"monster": 84,
					"vehicle": 76,
					"random": 144,
					"christmas": 68,
					"halloween": 58
				};

				for(let cat in levels) {
					if(levelName.startsWith(cat)) {
						lvl += parseInt(levelName.replace(/\D/g, ""));
						break;
					}
					lvl += levels[cat];
				}
				break;
			default:
				lvl = parseInt(levelName.replace(/\D/g, ""));
		}
		return lvl;
	},

	log: function() {
		if(SDK_INTERFACE_SETTINGS.debugLevel === 0) {
			return;
		}
		console.log(...arguments);
	}
};

const SDK_INTERFACE_OVERRIDES = {
	famobi: {

		/*
		game: {
			pause: function() {

			},
			resume: function() {

			},
			canResume: function() {
				return true;
			}
		},
		*/

		getVolume: () => 1,

		/*
		getCurrentLanguage: function() {
			return "en";
		},
		*/

		/*
		setPreloadProgress: function(progress) {

		},
		*/

		gameReady: function() {
			SDK_INTERFACE_HELPERS.GameSnacks.audio.update();
			SDK_INTERFACE_HELPERS.GameSnacks.game.ready();
		}

		/*
		playerReady: function(progress) {

		},
		*/
	},
	famobi_analytics: {
		trackEvent: function(event, params) {

			return new Promise(function(resolve, reject) {
				switch(event) {

					/*
					case "EVENT_LEVELFAIL":
						if(params.reason !== "quit") {
							window.famobi.showAd(function() {

							})
						}
						break;
					*/

					default:
						// nothing to do
				}
				return resolve(event, params);
			});
		}
	}
}

const SDK_INTERFACE_PRELOAD_AD = function(type) {

	return new Promise(function(resolve, reject) {

		if(type === "rewarded") {

			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.beforeReward = showAdFn => {

				SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.beforeReward = null;

				SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.showAdFn = showAdFn;
				if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.showAdFn === "function") {
					resolve();
				} else {
					reject();
				}
			};

			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adBreakDone = placementInfo => {
			    reject();
			};

        	SDK_INTERFACE_HELPERS.GameSnacks.ad.break({
        		type: 'reward',
				beforeAd: () => {
					SDK_INTERFACE_HELPERS.log("ad.break.beforeAd [reward]");
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.beforeAd === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.beforeAd();
					}
				},
				afterAd: () => {
					SDK_INTERFACE_HELPERS.log("ad.break.afterAd [reward]");
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.afterAd === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.afterAd();
					}
				},
				beforeReward: showAdFn => {
					SDK_INTERFACE_HELPERS.log("ad.break.beforeReward [reward]");
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.beforeReward === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.beforeReward(showAdFn);
					}
				},
				adDismissed: () => {
					SDK_INTERFACE_HELPERS.log("ad.break.adDismissed [reward]");
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adDismissed === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adDismissed();
					}
				},
				adViewed: () => {
					SDK_INTERFACE_HELPERS.log("ad.break.adViewed [reward]");
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adViewed === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adViewed();
					}
				},
				adBreakDone: placementInfo => {
					SDK_INTERFACE_HELPERS.log("ad.break.adBreakDone [reward]", placementInfo);
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adBreakDone === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adBreakDone(placementInfo);
					}
				}
        	});

		} else {
			resolve();
		}
	});
};

const SDK_INTERFACE_SHOW_AD = function() {

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE_HELPERS.log("famobi.showAd [%s]", SDK_INTERFACE_HELPERS.placement_id);

		if(SDK_INTERFACE_HELPERS.placement_id === null || SDK_INTERFACE_SETTINGS.interstitial.skip === true) {
			resolve();
			return;
		}

		const timeout = setTimeout(() => {
			SDK_INTERFACE_SETTINGS.interstitial.skip = true;
			resolve();
		}, 1000);

		const adBreakType = SDK_INTERFACE_HELPERS.placement_id;
		SDK_INTERFACE_HELPERS.placement_id = null;

		SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.adBreakDone = placementInfo => {
			SDK_INTERFACE_HELPERS.log("ad.break.adBreakDone [interstitial]", placementInfo);
			resolve();
		};

		if(adBreakType === "preroll") {
	    	SDK_INTERFACE_HELPERS.GameSnacks.ad.break({
	    		type: adBreakType,
				adBreakDone: placementInfo => {
					SDK_INTERFACE_HELPERS.log("ad.break.adBreakDone [interstitial]");
					clearTimeout(timeout);
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.adBreakDone === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.adBreakDone(placementInfo);
					}
				}
	    	});
		} else {
	    	SDK_INTERFACE_HELPERS.GameSnacks.ad.break({
	    		type: adBreakType,
				beforeAd: () => {
					SDK_INTERFACE_HELPERS.log("ad.break.beforeAd [interstitial]");
					clearTimeout(timeout);
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.beforeAd === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.beforeAd();
					}
				},
				afterAd: () => {
					SDK_INTERFACE_HELPERS.log("ad.break.afterAd [interstitial]");
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.afterAd === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.afterAd();
					}
				},
				adBreakDone: placementInfo => {
					SDK_INTERFACE_HELPERS.log("ad.break.adBreakDone [interstitial]");
					clearTimeout(timeout);
					if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.adBreakDone === "function") {
						SDK_INTERFACE_HELPERS.GameSnacks.adBreak.interstitial.adBreakDone(placementInfo);
					}
				}
	    	});
		}
	});
};

const SDK_INTERFACE_REWARDED_AD = function() {

	return new Promise(function(resolve, reject) {

		isRewardGranted = SDK_INTERFACE_SETTINGS.rewarded.reward;

		SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adViewed = () => {
			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.showAdFn = null;
			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adViewed = null;
			isRewardGranted = true;
		};

		SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adDismissed = () => {
			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.showAdFn = null;
			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.adDismissed = null;
			isRewardGranted = false;
		};

		SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.afterAd = () => {
			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.afterAd = null;
			if(isRewardGranted) {
				SDK_INTERFACE.settings.interstitial.last = new Date();
			}
			resolve(isRewardGranted);
		};

		if(typeof SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.showAdFn === "function") {
			SDK_INTERFACE_HELPERS.GameSnacks.adBreak.reward.showAdFn();
		}
	});
};

const SDK_INTERFACE_MOCK_OBJECT = function() {
	return new Promise(function(resolve, reject) {

		window.GameSnacks = {

			game: {
				onPauseCallback: null,
				onResumeCallback: null,

				gameOver: function() {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.game.gameOver()', 'background: red; color: #bada55');
				},
				firstFrameReady: function() {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.game.firstFrameReady()', 'background: red; color: #bada55');
				},
				levelComplete: function(level) {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.game.levelComplete(%s)', 'background: red; color: #bada55', level);
				},
				onPause: function(callback) {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.game.onPause(callback)', 'background: red; color: #bada55');
					this.onPauseCallback = callback;
				},
				onResume: function(callback) {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.game.onResume(callback)', 'background: red; color: #bada55');
					this.onResumeCallback = callback;
				},
				ready: function() {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.game.ready()', 'background: red; color: #bada55');
				},
				pause: function() {
					if(typeof this.onPauseCallback === "function") {
						this.onPauseCallback();
					}
				},
				resume: function() {
					if(typeof this.onResumeCallback === "function") {
						this.onResumeCallback();
					}
				}
			},
			storage: {
				clear: function() {
					// not implemented
				},
				getItem: function(key) {
					return window.localStorage.getItem(key);
				},
				removeItem: function(key) {
					// not implemented
				},
				setItem: function(key, value) {
					window.localStorage.setItem(key, value);
				}
			},
			score: {
				update: function(score) {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.score.update(%s)', 'background: red; color: #bada55', score);
				}
			},
			ad: {
				break: function(adBreak) {

					isRewardGranted = false;

					const closeAd = () => {
						if(adBreak.type === "reward") {
							if(isRewardGranted === true) {
								if(typeof adBreak.adViewed === "function") {
									adBreak.adViewed();
								}
							} else {
								if(typeof adBreak.adDismissed === "function") {
									adBreak.adDismissed();
								}
							}

							if(typeof adBreak.afterAd === "function") {
								adBreak.afterAd();
							}
						} else {
							if(typeof adBreak.afterAd === "function") {
								adBreak.afterAd();
							}

							if(typeof adBreak.adBreakDone === "function") {
								adBreak.adBreakDone();
							}
						}
					};

					if(adBreak.type === "reward") {

						if(typeof adBreak.beforeAd === "function") {
							adBreak.beforeAd();
						}

						if(typeof adBreak.beforeReward === "function") {
							adBreak.beforeReward(() => {

								if(typeof Swal !== "undefined") {
									return Swal.fire({
										title: "<strong>[REWARDED AD]</strong>",
										html: "<i>This dialog represents a rewarded ad.</i><br /><br /><b>Important:</b> In any case, the game should now be muted!",
										showDenyButton: true,
										confirmButtonText: 'Grant reward',
										denyButtonText: 'Deny reward',
										didDestroy: () => {
											closeAd();
										}
									}).then(result => {
										isRewardGranted = result.isConfirmed || false;
									});
								}

								isRewardGranted = confirm("Rewarded ad ended. Should a reward be granted?");
								closeAd();
							});
						}

						if(typeof adBreak.adBreakDone === "function") {
							adBreak.adBreakDone();
						}

					} else {
						if(typeof adBreak.beforeAd === "function") {
							adBreak.beforeAd();
						}

						if(typeof Swal !== "undefined") {
							return Swal.fire({
								title: "<strong>[INTERSTITIAL AD]</strong>",
								html: "<i>This dialog represents an interstitial ad [" + adBreak.type + "].</i><br /><br /><b>Important:</b> In any case, the game should now be muted!",
								confirmButtonText: 'Close',
								didDestroy: () => {
									closeAd();
								}
							});

						} else {
							alert("This is an ad! ["+ adBreak.type + "]");
							closeAd();
						}
					}
				}
			},
			audio: {
				_isEnabled: true,
				subscribeCallback: null,

				isEnabled: function() {
					return this._isEnabled;
				},
				subscribe: function(callback) {
					SDK_INTERFACE_HELPERS.log('%c[GAMESNACKS] GameSnacks.audio.subscribe(callback)', 'background: red; color: #bada55');
					this.subscribeCallback = callback;
				},
				enable: function(isEnabled) {
					this._isEnabled = isEnabled;
					if(typeof this.subscribeCallback === "function") {
						this.subscribeCallback(isEnabled);
					}
				}
			}
		};

		resolve();
	});
};

const SDK_INTERFACE_INIT = function() {
	return new Promise(function(resolve, reject) {

		const onSDKLoaded = function() {
			if(typeof window.GameSnacks === "undefined") {
				console.error("window.GameSnacks not found!");
				return;
			}

			console.log('♥ ♥ ♥ GAMESNACKS READY ♥ ♥ ♥ (GAME ' + SDK_INTERFACE_SETTINGS.version + ')');

			window.famobi.localStorage = {

				isAncient: false,
				savegame: {},
				key: window.famobi_gameID + ":savegame",

				init: function() {
					return new Promise(resolve => {
						if(["bubble-woods", "mahjong-classic"].includes(window.famobi_gameID)) {
							this.isAncient = true;
						}
						const savegame = SDK_INTERFACE_HELPERS.GameSnacks.storage.getItem(this.key);
						if(savegame !== null) {
							// this.isAncient = false;
							try {
								this.savegame = JSON.parse(savegame);
							} catch(e) {
								this.savegame = {};
							}
						}
						resolve();
					});
				},

				setItem: function(key, value) {
					if(this.isAncient) {
						SDK_INTERFACE_HELPERS.GameSnacks.storage.setItem(window.famobi_gameID + ":" + key.toLowerCase(), value);
					}
					this.savegame[key] = value;
					this.save();
				},

				getItem: function(key) {
					if(this.isAncient) {
						return SDK_INTERFACE_HELPERS.GameSnacks.storage.getItem(window.famobi_gameID + ":" + key.toLowerCase());
					}
					return typeof this.savegame[key] !== "undefined" ? this.savegame[key] : null;
				},

				removeItem: function(key) {
					if(this.isAncient) {
						SDK_INTERFACE_HELPERS.GameSnacks.storage.removeItem(window.famobi_gameID + ":" + key.toLowerCase());
					}
					delete this.savegame[key];
					this.save();
				},

				clear: function() {
					if(this.isAncient) {
						SDK_INTERFACE_HELPERS.GameSnacks.storage.clear();
					}
					this.savegame = {};
					this.save();
				},

				save: function() {
					try {
						SDK_INTERFACE_HELPERS.GameSnacks.storage.setItem(this.key, JSON.stringify(this.savegame));
						// this.isAncient = false;
					} catch(e) {
						console.log(e);
					}
				}
			};

			SDK_INTERFACE_HELPERS.GameSnacks.game.onPause(() => {
				SDK_INTERFACE_HELPERS.showPauseOverlay(true);
				window.famobi.adapters.run("request", "pauseGameplay");
				window.famobi.adapters.run("request", "disableAudio");
				window.famobi.adapters.run("request", "disableMusic");
			});

			SDK_INTERFACE_HELPERS.GameSnacks.game.onResume(() => {
				SDK_INTERFACE_HELPERS.showPauseOverlay(false);
				window.famobi.adapters.run("request", "resumeGameplay");

				setTimeout(() => {
					window.famobi.adapters.run("request", SDK_INTERFACE_HELPERS.GameSnacks.audio.isEnabled() ? "enableAudio" : "disableAudio");
					window.famobi.adapters.run("request", SDK_INTERFACE_HELPERS.GameSnacks.audio.isEnabled() ? "enableMusic" : "disableMusic");
				}, 0);

			});

			window.famobi_gameJS.push(() => {
				SDK_INTERFACE_HELPERS.GameSnacks.audio.subscribe(isEnabled => {
					SDK_INTERFACE_HELPERS.GameSnacks.audio.update(isEnabled);
				});
				SDK_INTERFACE_HELPERS.GameSnacks.game.firstFrameReady();
			});

			const setOrientation = function() {
				isLandscape = window.innerWidth > window.innerHeight;
				if(SDK_INTERFACE_HELPERS.isLandscape !== isLandscape) {
					SDK_INTERFACE_HELPERS.isLandscape = isLandscape;
					SDK_INTERFACE.settings.rewarded.state = SDK_INTERFACE.AD_STATES.IDLE;
				}
			};

			SDK_INTERFACE.settings.interstitial.last = new Date();

			window.addEventListener('resize', event => {
				setOrientation();
			});

			window.famobi.localStorage.init().then(() => {
				resolve();
			});
		};

		if(SDK_INTERFACE_SETTINGS.isProd) {
			onSDKLoaded();
		} else {
			SDK_INTERFACE.loadFile("//cdn.jsdelivr.net/npm/sweetalert2@11").then(() => {
				onSDKLoaded();
			});
		}
	});
};

// external files
switch(window.famobi_gameID) {
	case "dices-2048-3d":
		SDK_INTERFACE_SETTINGS.externalFiles.push("html5games/gameapi/playcanvas-avoid-visibility-api.js");
		break;
	default:
		// nothing to do
}

SDK_INTERFACE.init(SDK_INTERFACE_SETTINGS);
