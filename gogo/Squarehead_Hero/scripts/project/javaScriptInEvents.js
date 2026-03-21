

const scriptsInEvents = {

	async Sdk_crazygames_Event2_Act5(runtime, localVars)
	{
		await window.ConstructCrazySDK.ad.requestAd("midgame");
	},

	async Sdk_crazygames_Event4_Act6(runtime, localVars)
	{
		await window.ConstructCrazySDK.ad.requestAd("rewarded");
	},

	async Sdk_crazygames_Event12_Act1(runtime, localVars)
	{
		window.ConstructCrazySDK.game.gameplayStart();
	},

	async Sdk_crazygames_Event13_Act1(runtime, localVars)
	{
		window.ConstructCrazySDK.game.gameplayStop();
	},

	async Sdk_crazygames_Event14_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.Treasure;
		window.ConstructCrazySDK.data.setItem("sTreasure", val);
	},

	async Sdk_crazygames_Event15_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTreasure");
		if(res != null){
			runtime.globalVars.Treasure = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event16_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sBoughtItem1");
		if(res != null){
			runtime.globalVars.boughtItem1 = String(res);
		}
		 
	},

	async Sdk_crazygames_Event16_Act2(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sBoughtItem2");
		if(res != null){
			runtime.globalVars.boughtItem2 = String(res);
		}
		 
	},

	async Sdk_crazygames_Event16_Act3(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sBoughtItem3");
		if(res != null){
			runtime.globalVars.boughtItem3 = String(res);
		}
		 
	},

	async Sdk_crazygames_Event17_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.boughtItem1;
		window.ConstructCrazySDK.data.setItem("sBoughtItem1", val);
	},

	async Sdk_crazygames_Event17_Act2(runtime, localVars)
	{
		var val = runtime.globalVars.boughtItem2;
		window.ConstructCrazySDK.data.setItem("sBoughtItem2", val);
	},

	async Sdk_crazygames_Event17_Act3(runtime, localVars)
	{
		var val = runtime.globalVars.boughtItem3;
		window.ConstructCrazySDK.data.setItem("sBoughtItem3", val);
	},

	async Sdk_crazygames_Event18_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sCurrentSkin");
		if(res != null){
			runtime.globalVars.currentSkin = String(res);
		}
		 
	},

	async Sdk_crazygames_Event19_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.currentSkin;
		window.ConstructCrazySDK.data.setItem("sCurrentSkin", val);
	},

	async Sdk_crazygames_Event20_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.boughtSkin_Hero;
		window.ConstructCrazySDK.data.setItem("sboughtSkin_Hero", val);
	},

	async Sdk_crazygames_Event20_Act2(runtime, localVars)
	{
		var val = runtime.globalVars.boughtSkin_Barbarian;
		window.ConstructCrazySDK.data.setItem("sboughtSkin_Barbarian", val);
	},

	async Sdk_crazygames_Event20_Act3(runtime, localVars)
	{
		var val = runtime.globalVars.boughtSkin_Jester;
		window.ConstructCrazySDK.data.setItem("sboughtSkin_Jester", val);
	},

	async Sdk_crazygames_Event20_Act4(runtime, localVars)
	{
		var val = runtime.globalVars.boughtSkin_King;
		window.ConstructCrazySDK.data.setItem("sboughtSkin_King", val);
	},

	async Sdk_crazygames_Event20_Act5(runtime, localVars)
	{
		var val = runtime.globalVars.boughtSkin_Mage;
		window.ConstructCrazySDK.data.setItem("sboughtSkin_Mage", val);
	},

	async Sdk_crazygames_Event20_Act6(runtime, localVars)
	{
		var val = runtime.globalVars.boughtSkin_Artificier;
		window.ConstructCrazySDK.data.setItem("sboughtSkin_Artificier", val);
	},

	async Sdk_crazygames_Event21_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sboughtSkin_Hero");
		if(res != null){
			runtime.globalVars.boughtSkin_Hero = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event21_Act2(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sboughtSkin_Barbarian");
		if(res != null){
			runtime.globalVars.boughtSkin_Barbarian = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event21_Act3(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sboughtSkin_Jester");
		if(res != null){
			runtime.globalVars.boughtSkin_Jester = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event21_Act4(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sboughtSkin_King");
		if(res != null){
			runtime.globalVars.boughtSkin_King = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event21_Act5(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sboughtSkin_Mage");
		if(res != null){
			runtime.globalVars.boughtSkin_Mage = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event21_Act6(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sboughtSkin_Artificier");
		if(res != null){
			runtime.globalVars.boughtSkin_Artificier = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event22_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.LastRewardAdTime;
		window.ConstructCrazySDK.data.setItem("sLastRewardAdTime", val);
	},

	async Sdk_crazygames_Event23_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sLastRewardAdTime");
		if(res != null){
			runtime.globalVars.LastRewardAdTime = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event24_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sLastDoneDailyMission");
		if(res != null){
			runtime.globalVars.LastDoneDailyMission = String(res);
		}
		 
	},

	async Sdk_crazygames_Event25_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.LastDoneDailyMission;
		window.ConstructCrazySDK.data.setItem("sLastDoneDailyMission", val);
	},

	async Sdk_crazygames_Event26_Act1(runtime, localVars)
	{

	},

	async Sdk_crazygames_Event26_Act3(runtime, localVars)
	{
		// don't forget to set the name of the next layout
		// that should be loaded after initialization
		const nextLayoutName = "SH_Game";
		const sdkElem = document.createElement("script");
		sdkElem.type = "text/javascript";
		sdkElem.src = "https://sdk.crazygames.com/Construct3CrazySDK-v3.js";
		document.body.appendChild(sdkElem);
		sdkElem.onload = function () {
		    window.ConstructCrazySDK.init()
		        .then(() => {
		            runtime.goToLayout(nextLayoutName);
		        })
		        .catch((e) => console.log("Failed to init CrazySDK", e));
		};
		sdkElem.onerror = function () {
		    console.error("Failed to load Construct3CrazySDK script.");
		};
	},

	async Sdk_crazygames_Event27_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sIsThisFirstTime");
		if(res != null){
			runtime.globalVars.IsThisFirstTime = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event28_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.IsThisFirstTime;
		window.ConstructCrazySDK.data.setItem("sIsThisFirstTime", val);
	},

	async Sdk_crazygames_Event29_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sLastDailyRewardDayNumber");
		if(res != null){
			runtime.globalVars.LastDailyRewardDayNumber = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event30_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.TodayDayNumber;
		window.ConstructCrazySDK.data.setItem("sLastDailyRewardDayNumber", val);
	},

	async Sdk_crazygames_Event31_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_DragonSkull_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_DragonSkull_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act2(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_TrollsTooth_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_TrollsTooth_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act3(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_BrokenHelmet_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_BrokenHelmet_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act4(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_NecromancersPalm_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_NecromancersPalm_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act5(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Belt_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_Belt_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act6(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Medal_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_Medal_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act7(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Cup_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_Cup_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act8(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_TopHat_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_TopHat_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act9(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Certificate_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_Certificate_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act10(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_SlayersScythe_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_SlayersScythe_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act11(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Firestarter_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_Firestarter_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event31_Act12(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_HawkEye_Claimed");
		if(res != null){
			runtime.globalVars.Trophy_HawkEye_Claimed = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event32_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_DragonSkull_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_DragonSkull_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act2(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_TrollsTooth_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_TrollsTooth_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act3(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_BrokenHelmet_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_BrokenHelmet_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act4(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_NecromancersPalm_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_NecromancersPalm_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act5(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Belt_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_Belt_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act6(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Medal_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_Medal_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act7(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Cup_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_Cup_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act8(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_TopHat_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_TopHat_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act9(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Certificate_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_Certificate_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act10(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_SlayersScythe_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_SlayersScythe_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act11(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Firestarter_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_Firestarter_Claimed", val);
	},

	async Sdk_crazygames_Event32_Act12(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_HawkEye_Claimed;
		window.ConstructCrazySDK.data.setItem("sTrophy_HawkEye_Claimed", val);
	},

	async Sdk_crazygames_Event33_Act1(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_HawkEye_Progress");
		if(res != null){
			runtime.globalVars.Trophy_HawkEye_Progress = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event33_Act2(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Firestarter_Progress");
		if(res != null){
			runtime.globalVars.Trophy_Firestarter_Progress = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event33_Act3(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_SlayersScythe_Progress");
		if(res != null){
			runtime.globalVars.Trophy_SlayersScythe_Progress = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event33_Act4(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Certificate_Progress");
		if(res != null){
			runtime.globalVars.Trophy_Certificate_Progress = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event33_Act5(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Cup_Progress");
		if(res != null){
			runtime.globalVars.Trophy_Cup_Progress = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event33_Act6(runtime, localVars)
	{
		var res = window.ConstructCrazySDK.data.getItem("sTrophy_Medal_Progress");
		if(res != null){
			runtime.globalVars.Trophy_Medal_Progress = parseInt(res);
		}
		 
	},

	async Sdk_crazygames_Event34_Act1(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_HawkEye_Progress;
		window.ConstructCrazySDK.data.setItem("sTrophy_HawkEye_Progress", val);
	},

	async Sdk_crazygames_Event34_Act2(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Firestarter_Progress;
		window.ConstructCrazySDK.data.setItem("sTrophy_Firestarter_Progress", val);
	},

	async Sdk_crazygames_Event34_Act3(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_SlayersScythe_Progress;
		window.ConstructCrazySDK.data.setItem("sTrophy_SlayersScythe_Progress", val);
	},

	async Sdk_crazygames_Event34_Act4(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Certificate_Progress;
		window.ConstructCrazySDK.data.setItem("sTrophy_Certificate_Progress", val);
	},

	async Sdk_crazygames_Event34_Act5(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Cup_Progress;
		window.ConstructCrazySDK.data.setItem("sTrophy_Cup_Progress", val);
	},

	async Sdk_crazygames_Event34_Act6(runtime, localVars)
	{
		var val = runtime.globalVars.Trophy_Medal_Progress;
		window.ConstructCrazySDK.data.setItem("sTrophy_Medal_Progress", val);
	},

	async Sh_game_es_Event54_Act1(runtime, localVars)
	{

	},

	async Sh_game_es_Event546(runtime, localVars)
	{
		var mydate = new Date();
		runtime.globalVars.DailyMissionNo = mydate.getDate();
	},

	async Sh_game_es_Event888(runtime, localVars)
	{
		const fdebug = localVars.fdebug;
		console.log(fdebug);
	},

	async Sh_game_es_Event891(runtime, localVars)
	{
		var myrewarddate = new Date();
		runtime.globalVars.TodayDayNumber = myrewarddate.getDate();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
