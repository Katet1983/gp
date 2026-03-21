let rewardedAdFuction = null;
let isRvReady = false;
let isRvPlay = false;
function formatNumber(num)
{
	return num.toLocaleString();
}

const scriptsInEvents = {

	async Common_Event76_Act1(runtime, localVars)
	{
		localVars.returnValue = formatNumber(localVars.num);
	},

	async Splashes_Event1_Act4(runtime, localVars)
	{
		runtime.globalVars.gameSnacksAudioAllowed = GameSnacks.audio.isEnabled()
	},

	async Splashes_Event18_Act8(runtime, localVars)
	{
		let scales = runtime.objects.JSON_Scales.getFirstInstance()
		
		runtime.globalVars.SkinScale = scales.instVars[runtime.globalVars.EquippedSkin]
	},

	async Gamesnacks_es_Event16_Act4(runtime, localVars)
	{
		if (rewardedAdFuction !== null) {
			console.log("calling rewardedAdFuction");
			runtime.globalVars.RV_play=true;
			rewardedAdFuction()
		} else {
			console.log("rewardedAdFuction is null!!");
		}
	},

	async Gamesnacks_es_Event37_Act1(runtime, localVars)
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
		        runtime.callFunction("InterstitialFinish")
		    },
		    adBreakDone: (placementInfo) => {
		        console.log("Ad break done!", placementInfo)
		        // After ad is done, you can perform final cleanup, resume game, etc.
		            runtime.callFunction("InterstitialFinish")
		        
		    }
		});
	},

	async Gamesnacks_es_Event39_Act1(runtime, localVars)
	{
		GameSnacks.ad.break({
		                type: 'reward', // Example type, can be 'rewarded' or other types
		                name: 'reward_ad', // Name to identify this ad break
		                beforeReward: (showAdFn) => {
		                    console.log("Before reward, show ad logic.", runtime.globalVars.RV_ready, rewardedAdFuction != null);
							rewardedAdFuction = showAdFn;
							runtime.globalVars.RV_ready = true;
							console.log("Before reward, show ad logic (END).", runtime.globalVars.RV_ready, rewardedAdFuction!= null);
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

	async Gamesnacks_es_Event40_Act2(runtime, localVars)
	{
		runtime.globalVars.RV_ready = false;
		runtime.globalVars.RV_play = false;
		rewardedAdFuction = null;
	},

	async Gamesnacks_es_Event41_Act1(runtime, localVars)
	{
		GameSnacks.audio.subscribe((isEnabled) => {
		        runtime.callFunction("SetGameMute", !isEnabled);
		});
	},

	async Gamesnacks_es_Event42_Act1(runtime, localVars)
	{

	},

	async Gamesnacks_es_Event46_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Gamesnacks_es_Event47_Act1(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async Gamesnacks_es_Event48_Act1(runtime, localVars)
	{
		GameSnacks.game.levelComplete(0);
		console.log("Level Complete Called");
	},

	async Gamesnacks_es_Event49_Act1(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async Gamesnacks_es_Event52_Act2(runtime, localVars)
	{
		GameSnacks.score.update(localVars.save_score);
	},

	async Gamesnacks_es_Event55_Act1(runtime, localVars)
	{
		GameSnacks.storage.clear();
	},

	async Gamesnacks_es_Event57_Act1(runtime, localVars)
	{
		try{
		localVars.return = GameSnacks.storage.getItem(localVars.item);
		}catch(e){
		//console.log("Key not found " + localVars.item + " " + e)
		}
		
	},

	async Gamesnacks_es_Event61_Act1(runtime, localVars)
	{
		GameSnacks.storage.setItem(localVars.item, localVars.value);
	},

	async Gamesnacks_es_Event62_Act1(runtime, localVars)
	{
		GameSnacks.storage.removeItem(localVars.item);
	},

	async Gamesnacks_es_Event65_Act1(runtime, localVars)
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
      this._data = {};
    },

    getItem(key) {
      console.log("[Mock] GameSnacks.storage.getItem called with key", key);
      return this._data[key] || null;
    },

    removeItem(key) {
      console.log("[Mock] GameSnacks.storage.removeItem called with key", key);
      delete this._data[key];
    },

    setItem(key, value) {
      console.log("[Mock] GameSnacks.storage.setItem called with key", key, "value", value);
      this._data[key] = value;
    },
  },
};

	},

	async Mainsplashes_Event2_Act1(runtime, localVars)
	{
		GameSnacks.game.onPause(() => {
		  // Display pause screen.
		  runtime.callFunction("PauseGame");
		});
		
	},

	async Mainsplashes_Event2_Act2(runtime, localVars)
	{
		GameSnacks.game.onResume(() => {
		  // Display pause screen.
		  runtime.callFunction("ResumeGame");
		});
		
	},

	async Mainsplashes_Event4_Act2(runtime, localVars)
	{
		GameSnacks.storage.clear()
	},

	async Store_es_Event20_Act2(runtime, localVars)
	{
		
		const json = runtime.objects.JSON_Inventory.getFirstInstance();
		const arr =  json.getJsonDataCopy().Items
		if(arr.includes(localVars.itemToCheck))
		{
		localVars.b = true;
		}
	},

	async Gamees_Event14_Act7(runtime, localVars)
	{
		let scales = runtime.objects.JSON_Scales.getFirstInstance()
		
		runtime.globalVars.SkinScale = scales.instVars[runtime.globalVars.EquippedSkin]
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
