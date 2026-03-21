

const scriptsInEvents = {

	async Esglobal_Event3_Act1(runtime, localVars)
	{
		window.GameReady();
	},

	async Esglobal_Event17_Act1(runtime, localVars)
	{
		window.updateScore(localVars.Score);
	},

	async Esglobal_Event18_Act1(runtime, localVars)
	{
		window.levelCompleted(localVars.Level);
	},

	async Esglobal_Event19_Act1(runtime, localVars)
	{
		window.gameOver();
	},

	async Esglobal_Event20_Act2(runtime, localVars)
	{
		window.setItem(runtime.globalVars.keyName, runtime.globalVars.DataJson);
	},

	async Esglobal_Event21_Act1(runtime, localVars)
	{
		window.getItem(runtime.globalVars.keyName);
	},

	async Esglobal_Event12_Act2(runtime, localVars)
	{
		window.showAdReward();
	},

	async Esglobal_Event13_Act2(runtime, localVars)
	{
		window.showAdInterstitial();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
