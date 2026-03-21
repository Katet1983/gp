let rewardedAdFuction = null;
let isRvReady = false;
let isRvPlay = false;

function generateEvenlySpreadPoints(width, height, pointCount) {
    const points = [];

    // Calculate grid size based on the point count
    const rows = Math.ceil(Math.sqrt(pointCount));
    const cols = Math.ceil(pointCount / rows);

    // Determine spacing between points
    const xSpacing = width / cols;
    const ySpacing = height / rows;

    // Generate points
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (points.length >= pointCount) break; // Stop if we've generated enough points

            const x = (col + 0.5) * xSpacing; // Center the point in the cell
            const y = (row + 0.5) * ySpacing;

            points.push({ x, y });
        }
    }

    return points;
}

const scriptsInEvents = {

	async Splash_es_Event8_Act2(runtime, localVars)
	{
		runtime.globalVars.Sound = GameSnacks.audio.isEnabled()
	},

	async Ads_es_Event8_Act4(runtime, localVars)
	{
		if (rewardedAdFuction !== null) {
			console.log("calling rewardedAdFuction");
			runtime.globalVars.RV_play=true;
			rewardedAdFuction()
		} else {
			console.log("rewardedAdFuction is null!!");
		}
	},

	async Ads_es_Event30_Act1(runtime, localVars)
	{
		GameSnacks.ad.break({
		                type: localVars.type, // Example type, can be 'rewarded' or other types
		                name: localVars.name, // Name to identify this ad break
		                beforeAd: () => {
		                    console.log("Before the ad, pause game or setup.")
		                    // You can pause the game or set up things before showing the ad
							runtime.callFunction("InterstitialStart")
		                },
		                afterAd: () => {
		                    console.log("After the ad, resume the game.")
		                    // You can resume the game after the ad finishes
							runtime.globalVars.IsDone = true
							runtime.callFunction("InterstitialFinish")
		                },
		                adBreakDone: (placementInfo) => {
		                    console.log("Ad break done!", placementInfo)
		                    // After ad is done, you can perform final cleanup, resume game, etc.
							if(!runtime.globalVars.IsDone){
								runtime.callFunction("InterstitialFinish")				
							}
		                }
		            });
	},

	async Ads_es_Event32_Act1(runtime, localVars)
	{
		GameSnacks.ad.break({
		                type: 'reward', // Example type, can be 'rewarded' or other types
		                name: 'reward_ad', // Name to identify this ad break
		                beforeReward: (showAdFn) => {
		                    console.log("Before reward, show ad logic.", runtime.globalVars.RV_ready, rewardedAdFuction != null);
							rewardedAdFuction = showAdFn;
							runtime.globalVars.RV_ready = true;
							console.log("Before reward, show ad logic (END).", runtime.globalVars.RV_ready, rewardedAdFuction != null);
		                    // You can add logic for reward ads here if necessary
		                },
						beforeAd: () => {
		                    console.log("Before the ad, pause game or setup.")
		                    // You can pause the game or set up things before showing the ad
							runtime.globalVars.RV_ready = true;
							runtime.callFunction("RewardAdStart")
		                },
		                adDismissed: () => {
		                    console.log("Ad was dismissed.");
							runtime.callFunction("RewardAdDissmissed")
		                    // Handle ad dismissal (e.g., no reward or continuation)
		                },
		                adViewed: () => {
		                    console.log("Ad was viewed - Reward player.");
		                    // Handle ad completion (e.g., grant rewards or next level)
							runtime.callFunction("RewardAdComplete")
		                },
						afterAd: () => {
		                    console.log("After the ad, resume the game.")
		                    // You can resume the game after the ad finishes	
		                },
		                adBreakDone: (placementInfo) => {
		                    console.log("Ad break done!", placementInfo);
							const status = placementInfo.breakStatus;
							
							if(status === "ignored")
							{
								console.log("Ad already loaded - need to show it before loading again");
							}
							else if (status === 'dismissed' || status === 'viewed') 
							{
								console.log("Ad was viewed or dismissed - making cleanup and loading a new one");
								runtime.callFunction("ADBreakCleanUp");
								runtime.callFunction("AdBreakLoadRV");
							} else {
								console.log("Ad didnt showed - making cleanup and loading a new one after 10 sec")
								runtime.callFunction("ADBreakCleanUp");
								setTimeout(() => runtime.callFunction("AdBreakLoadRV"), 10_000);	
							}
		                    // After ad is done, you can perform final cleanup, resume game, etc.
		                }
		            });
	},

	async Ads_es_Event33_Act2(runtime, localVars)
	{
		runtime.globalVars.RV_ready = false;
		runtime.globalVars.RV_play = false;
		rewardedAdFuction = null;
	},

	async Ads_es_Event34_Act1(runtime, localVars)
	{
		GameSnacks.audio.subscribe((isEnabled) => {
		        runtime.callFunction("SetGameMute", !isEnabled);
		});
	},

	async Ads_es_Event39_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Ads_es_Event40_Act1(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async Ads_es_Event41_Act1(runtime, localVars)
	{
		GameSnacks.game.levelComplete(runtime.globalVars.Level+1);
		console.log("Level Complete Called"+ runtime.globalVars.Level);
	},

	async Ads_es_Event42_Act1(runtime, localVars)
	{
		GameSnacks.game.onPause(() => {
		  // Display pause screen.
		  runtime.callFunction("PauseGame");
		});
		
	},

	async Ads_es_Event43_Act1(runtime, localVars)
	{
		GameSnacks.game.onResume(() => {
		  // Display pause screen.
		  runtime.callFunction("ResumeGame");
		});
		
	},

	async Ads_es_Event44_Act1(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async Ads_es_Event46_Act1(runtime, localVars)
	{
		GameSnacks.score.update(localVars.save_score);
	},

	async Ads_es_Event49_Act1(runtime, localVars)
	{
		GameSnacks.storage.clear();
	},

	async Ads_es_Event51_Act1(runtime, localVars)
	{
		try{
		localVars.return = GameSnacks.storage.getItem(localVars.item);
		}catch(e){
		console.log("Key not found " + localVars.item + " " + e)
		}
		
	},

	async Ads_es_Event60_Act1(runtime, localVars)
	{
		GameSnacks.storage.setItem(localVars.item, localVars.value);
	},

	async Ads_es_Event61_Act1(runtime, localVars)
	{
		GameSnacks.storage.removeItem(localVars.item);
	},

	async Ads_es_Event64_Act1(runtime, localVars)
	{
window.GameSnacks = {
  ad: {
    break(o) {
  console.log(`adBreak called with type: ${o.type}, name: ${o.name}`);

//   if (typeof o.beforeAd === "function") {
//     console.log("[MockAd] Calling beforeAd()...");
//     o.beforeAd();
//   }

  if (o.type === "reward") {
    if (typeof o.beforeReward === "function") {
      console.log("[MockAd]  Calling beforeReward()...");
      const showAdFn = () => {
        console.log("[MockAd]  Fake ad is showing now (rewarded)...");

        setTimeout(() => {
          console.log("[MockAd]  Fake ad finished (rewarded).");

          if (typeof o.afterAd === "function") {
            console.log("[MockAd]  Calling afterAd()...");
            o.afterAd();
          }

          // Simulate that ad was viewed successfully:
          if (typeof o.adViewed === "function") {
            console.log("[MockAd]  Calling adViewed()...");
            o.adViewed();
          }
        }, 1000); // simulate ad duration
      };

      o.beforeReward(showAdFn);
    }
  } else {
    // Non-rewarded (e.g., interstitial):
    console.log("[MockAd]  Fake ad is showing now (interstitial)...");

    setTimeout(() => {
      console.log("[MockAd]  Fake ad finished (interstitial).");

      if (typeof o.afterAd === "function") {
        console.log("[MockAd]  Calling afterAd()...");
        o.afterAd();
      }

      if (typeof o.adBreakDone === "function") {
        console.log("[MockAd]  Calling adBreakDone()...");
        o.adBreakDone({ breakStatus: "complete" });
      }
    }, 1000); // simulate ad duration
  }
},
  },

  audio: {
    _isEnabled: true,
    _subscribers: [],

    isEnabled() {
      console.log("[Mock] GameSnacks.audio.isEnabled called");
      return this._isEnabled;
    },

    subscribe(callback) {
      console.log("[Mock] GameSnacks.audio.subscribe called");
      this._subscribers.push(callback);
      callback(this._isEnabled);
    },

    _setEnabled(value) {
      this._isEnabled = value;
      this._subscribers.forEach((cb) => cb(this._isEnabled));
    },
  },

  game: {
    gameOver() {
      console.log("[Mock] GameSnacks.game.gameOver called");
    },
    firstFrameReady() {
      console.log("[Mock] GameSnacks.game.firstFrameReady called");
    },
    levelComplete(level) {
      console.log("[Mock] GameSnacks.game.levelComplete called with level", level);
    },
    onPause(callback) {
      console.log("[Mock] GameSnacks.game.onPause registered");
      this._onPause = callback;
    },
    onResume(callback) {
      console.log("[Mock] GameSnacks.game.onResume registered");
      this._onResume = callback;
    },
    ready() {
      console.log("[Mock] GameSnacks.game.ready called");
    },
    _triggerPause() {
      if (this._onPause) {
        console.log("[Mock] Triggering onPause callback");
        this._onPause();
      }
    },
    _triggerResume() {
      if (this._onResume) {
        console.log("[Mock] Triggering onResume callback");
        this._onResume();
      }
    },
  },

  score: {
    update(score) {
      console.log("[Mock] GameSnacks.score.update called with score", score);
    },
  },

  storage: {
    _data: {},

    clear() {
      console.log("[Mock] GameSnacks.storage.clear called");
            localStorage.clear();

      this._data = {};
    },

    getItem(key) {
      console.log("[Mock] GameSnacks.storage.getItem called with key", key);
      localStorage.getItem(key);

      return localStorage.getItem(key); null;
    },

    removeItem(key) {
      console.log("[Mock] GameSnacks.storage.removeItem called with key", key);
            localStorage.removeItem(key);

      delete this._data[key];
    },

    setItem(key, value) {
      localStorage.setItem(key, value);
      console.log("[Mock] GameSnacks.storage.setItem called with key", key, "value", value);
      this._data[key] = value;
    },
  },
};

	},

	async Game_es_Event9_Act5(runtime, localVars)
	{
		const arr = generateEvenlySpreadPoints(localVars.width - localVars.padding,localVars.height - localVars.padding,localVars.points);
		
		runtime.globalVars.cachedArray = arr;
	},

	async Game_es_Event15_Act2(runtime, localVars)
	{
		const point = runtime.globalVars.cachedArray[localVars.loop_index]
		
		localVars.pointX = point.x;
		localVars.pointY = point.y;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
