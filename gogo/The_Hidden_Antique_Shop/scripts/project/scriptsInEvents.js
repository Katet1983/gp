let rewardedAdFuction = null;
let isRvReady = false;
let isRvPlay = false;

const scriptsInEvents = {

	async Googleads_es_Event4_Act4(runtime, localVars)
	{
		if (rewardedAdFuction !== null) {
			console.log("calling rewardedAdFuction");
			runtime.globalVars.RV_play=true;
			rewardedAdFuction()
		} else {
			console.log("rewardedAdFuction is null!!");
		}
	},

	async Googleads_es_Event53_Act1(runtime, localVars)
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

	async Googleads_es_Event55_Act1(runtime, localVars)
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

	async Googleads_es_Event56_Act2(runtime, localVars)
	{
		runtime.globalVars.RV_ready = false;
		runtime.globalVars.RV_play = false;
		rewardedAdFuction = null;
	},

	async Audio_es_Event41_Act1(runtime, localVars)
	{
		GameSnacks.audio.subscribe((isEnabled) => {
		        runtime.callFunction("SetGameMute", !isEnabled);
		});
	},

	async Splash_es_Event2_Act2(runtime, localVars)
	{
		runtime.globalVars.gameSnacksAudioAllowed = GameSnacks.audio.isEnabled()
	},

	async Common_es_Event13_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Common_es_Event14_Act1(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async Common_es_Event15_Act1(runtime, localVars)
	{
		GameSnacks.game.levelComplete(runtime.globalVars.Current_Level);
		console.log("Level Complete Called"+ runtime.globalVars.Current_Level);
	},

	async Common_es_Event16_Act1(runtime, localVars)
	{
		GameSnacks.game.onPause(() => {
		  // Display pause screen.
		  runtime.callFunction("PauseGame");
		});
		
	},

	async Common_es_Event17_Act1(runtime, localVars)
	{
		GameSnacks.game.onResume(() => {
		  // Display pause screen.
		  runtime.callFunction("ResumeGame");
		});
		
	},

	async Common_es_Event18_Act1(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async Common_es_Event20_Act1(runtime, localVars)
	{
		GameSnacks.score.update(localVars.save_score);
	},

	async Common_es_Event23_Act1(runtime, localVars)
	{
		GameSnacks.storage.clear();
	},

	async Common_es_Event25_Act1(runtime, localVars)
	{
		try{
		localVars.return = GameSnacks.storage.getItem(localVars.item);
		}catch(e){
		console.log("Key not found " + localVars.item + " " + e)
		runtime.callFunction("SetFirstKeys");
		}
		
	},

	async Common_es_Event29_Act1(runtime, localVars)
	{
		GameSnacks.storage.setItem(localVars.item, localVars.value);
	},

	async Common_es_Event30_Act1(runtime, localVars)
	{
		GameSnacks.storage.removeItem(localVars.item);
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
