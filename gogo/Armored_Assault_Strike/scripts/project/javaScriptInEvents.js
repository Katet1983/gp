

const scriptsInEvents = {

	async Esglobal_Event48_Act1(runtime, localVars)
	{
		window.GameReady();
	},

	async Esglobal_Event56_Act2(runtime, localVars)
	{
		window.showAdReward();
	},

	async Esglobal_Event57_Act2(runtime, localVars)
	{
		window.showAdInterstitial();
	},

	async Esglobal_Event91_Act1(runtime, localVars)
	{
		window.updateScore(localVars.Score);
	},

	async Esglobal_Event92_Act2(runtime, localVars)
	{
		window.levelCompleted(localVars.Level);
	},

	async Esglobal_Event93_Act2(runtime, localVars)
	{
		window.gameOver();
	},

	async Esglobal_Event94_Act2(runtime, localVars)
	{
		window.setItem(runtime.globalVars.keyName, runtime.globalVars.DataJson);
	},

	async Esglobal_Event94_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.DataJson);
	},

	async Esglobal_Event95_Act1(runtime, localVars)
	{
		window.getItem(runtime.globalVars.keyName);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
