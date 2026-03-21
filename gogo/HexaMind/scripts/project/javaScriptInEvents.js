

const scriptsInEvents = {

	async GeneralEvent_Event13_Act1(runtime, localVars)
	{
		window.GameReady();
	},

	async GeneralEvent_Event21_Act2(runtime, localVars)
	{
		window.showAdReward();
	},

	async GeneralEvent_Event22_Act2(runtime, localVars)
	{
		window.showAdInterstitial();
	},

	async GeneralEvent_Event25_Act1(runtime, localVars)
	{
		window.updateScore(localVars.Score);
	},

	async GeneralEvent_Event26_Act1(runtime, localVars)
	{
		window.levelCompleted(localVars.Level);
	},

	async GeneralEvent_Event27_Act1(runtime, localVars)
	{
		window.gameOver();
	},

	async GeneralEvent_Event28_Act2(runtime, localVars)
	{
		window.setItem(runtime.globalVars.keyName, runtime.globalVars.DataJson);
	},

	async GeneralEvent_Event29_Act1(runtime, localVars)
	{
		window.getItem(runtime.globalVars.keyName);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
