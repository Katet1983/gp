

const scriptsInEvents = {

	async Global_event_Event195_Act1(runtime, localVars)
	{
		window.GameReady();
	},

	async Global_event_Event203_Act2(runtime, localVars)
	{
		window.showAdReward();
	},

	async Global_event_Event204_Act2(runtime, localVars)
	{
		window.showAdInterstitial();
	},

	async Global_event_Event207_Act1(runtime, localVars)
	{
		window.updateScore(localVars.Score2);
	},

	async Global_event_Event208_Act1(runtime, localVars)
	{
		window.levelCompleted(localVars.Level2);
	},

	async Global_event_Event209_Act1(runtime, localVars)
	{
		window.gameOver();
	},

	async Global_event_Event210_Act2(runtime, localVars)
	{
		window.setItem(runtime.globalVars.keyName, runtime.globalVars.DataJson);
	},

	async Global_event_Event211_Act1(runtime, localVars)
	{
		window.getItem(runtime.globalVars.keyName);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
