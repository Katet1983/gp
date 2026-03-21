let rewardedAdFuction = null;
let isRvReady = false;
let isRvPlay = false;

const scriptsInEvents = {

	async Splashes_Event2_Act3(runtime, localVars)
	{
		runtime.globalVars.gameSnacksAudioAllowed = GameSnacks.audio.isEnabled()
	},

	async Commones_Event16_Act4(runtime, localVars)
	{
		if (rewardedAdFuction !== null) {
			console.log("calling rewardedAdFuction");
			runtime.globalVars.RV_play=true;
			rewardedAdFuction()
		} else {
			console.log("rewardedAdFuction is null!!");
		}
	},

	async Commones_Event44_Act1(runtime, localVars)
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

	async Commones_Event46_Act1(runtime, localVars)
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

	async Commones_Event47_Act2(runtime, localVars)
	{
		runtime.globalVars.RV_ready = false;
		runtime.globalVars.RV_play = false;
		rewardedAdFuction = null;
	},

	async Commones_Event51_Act1(runtime, localVars)
	{

	},

	async Commones_Event52_Act1(runtime, localVars)
	{

	},

	async Commones_Event53_Act1(runtime, localVars)
	{

	},

	async Commones_Event57_Act1(runtime, localVars)
	{

	},

	async Commones_Event59_Act1(runtime, localVars)
	{

	},

	async Commones_Event61_Act1(runtime, localVars)
	{

	},

	async Commones_Event69_Act1(runtime, localVars)
	{

	},

	async Commones_Event71_Act1(runtime, localVars)
	{

	},

	async Commones_Event72_Act1(runtime, localVars)
	{

	},

	async Commones_Event117_Act1(runtime, localVars)
	{
		GameSnacks.audio.subscribe((isEnabled) => {
		        runtime.callFunction("SetGameMute", !isEnabled);
		});
	},

	async Commones_Event125_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Commones_Event126_Act1(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async Commones_Event127_Act1(runtime, localVars)
	{
		GameSnacks.game.levelComplete(runtime.globalVars.level);
		console.log("Level Complete Called"+ runtime.globalVars.level);
	},

	async Commones_Event128_Act1(runtime, localVars)
	{
		GameSnacks.game.onPause(() => {
		  // Display pause screen.
		  runtime.callFunction("PauseGame");
		});
		
	},

	async Commones_Event129_Act1(runtime, localVars)
	{
		GameSnacks.game.onResume(() => {
		  // Display pause screen.
		  runtime.callFunction("ResumeGame");
		});
		
	},

	async Commones_Event130_Act1(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async Commones_Event132_Act1(runtime, localVars)
	{
		GameSnacks.score.update(localVars.save_score);
	},

	async Commones_Event135_Act1(runtime, localVars)
	{
		GameSnacks.storage.clear();
	},

	async Commones_Event137_Act1(runtime, localVars)
	{
		try{
		localVars.return = GameSnacks.storage.getItem(localVars.item);
		}catch(e){
		console.log("Key not found " + localVars.item + " " + e)
		runtime.callFunction("SetFirstKeys");
		}
		
	},

	async Commones_Event140_Act1(runtime, localVars)
	{
		GameSnacks.storage.setItem(localVars.item, localVars.value);
	},

	async Commones_Event141_Act1(runtime, localVars)
	{
		GameSnacks.storage.removeItem(localVars.item);
	},

	async Gamees_Event5_Act15(runtime, localVars)
	{
		runtime.globalVars.xpCapTxt = runtime.globalVars.xpCap.toLocaleString("en-GB");
		runtime.globalVars.xpTxt = runtime.globalVars.xp.toLocaleString("en-GB");
		runtime.globalVars.bestscoreTxt = runtime.globalVars.bestscore.toLocaleString("en-GB");
	},

	async Gamees_Event88(runtime, localVars)
	{
		runtime.globalVars.bestscoreTxt = runtime.globalVars.bestscore.toLocaleString("en-GB");
	},

	async Gamees_Event134_Act2(runtime, localVars)
	{
		runtime.globalVars.xpCapTxt = runtime.globalVars.xpCap.toLocaleString("en-GB");
		runtime.globalVars.xpTxt = runtime.globalVars.xp.toLocaleString("en-GB");
	},

	async Gamees_Event135_Act5(runtime, localVars)
	{
		runtime.globalVars.xpCapTxt = runtime.globalVars.xpCap.toLocaleString("en-GB");
		runtime.globalVars.xpTxt = runtime.globalVars.xp.toLocaleString("en-GB");
	},

	async Gamees_Event137_Act4(runtime, localVars)
	{
		runtime.globalVars.xpCapTxt = runtime.globalVars.xpCap.toLocaleString("en-GB");
		runtime.globalVars.xpTxt = runtime.globalVars.xp.toLocaleString("en-GB");
		runtime.globalVars.scoreTxt = runtime.globalVars.score.toLocaleString("en-GB");
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
