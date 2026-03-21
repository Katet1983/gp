

const scriptsInEvents = {

	async Common_Event8_Act1(runtime, localVars)
	{
		window.GameReady();
	},

	async Common_Event16_Act2(runtime, localVars)
	{
		window.showAdReward();
	},

	async Common_Event17_Act2(runtime, localVars)
	{
		window.showAdInterstitial();
	},

	async Common_Event20_Act1(runtime, localVars)
	{
		window.updateScore(localVars.Score2);
	},

	async Common_Event21_Act1(runtime, localVars)
	{
		window.levelCompleted(localVars.Level);
	},

	async Common_Event22_Act1(runtime, localVars)
	{
		window.gameOver();
	},

	async Common_Event23_Act2(runtime, localVars)
	{
		window.setItem(runtime.globalVars.keyName, runtime.globalVars.DataJson);
	},

	async Common_Event24_Act1(runtime, localVars)
	{
		window.getItem(runtime.globalVars.keyName);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
