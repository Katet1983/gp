// Перехоплення події натискання клавіші
document.addEventListener('keydown', function(event) {
  // Перевірка, чи натиснута клавіша F11
  if (event.key === 'F11') {
    event.preventDefault(); // Відміна стандартної дії
    // Тут можна виконати будь-які додаткові дії
  }
});

const scriptsInEvents = {

	async Esavegame_Event2_Act2(runtime, localVars)
	{
		window.loadData([localVars.Key1]);
	},

	async Esgamesnacks_Event1_Act1(runtime, localVars)
	{
		window.GameReady();
	},

	async Esgamesnacks_Event9_Act2(runtime, localVars)
	{
		window.showAdReward();
	},

	async Esgamesnacks_Event10_Act2(runtime, localVars)
	{
		window.showAdInterstitial();
	},

	async Esgamesnacks_Event13_Act1(runtime, localVars)
	{
		window.updateScore(localVars.Score2);
	},

	async Esgamesnacks_Event14_Act1(runtime, localVars)
	{
		window.levelCompleted(localVars.Level2);
	},

	async Esgamesnacks_Event15_Act1(runtime, localVars)
	{
		window.gameOver();
	},

	async Esgamesnacks_Event16_Act1(runtime, localVars)
	{
		console.log(runtime.objects.JSON.getFirstInstance().getJsonDataCopy());
		
	},

	async Esgamesnacks_Event16_Act2(runtime, localVars)
	{
		window.setItem(runtime.globalVars.keyName, JSON.stringify(runtime.objects.JSON.getFirstInstance().getJsonDataCopy()));
	},

	async Esgamesnacks_Event17_Act1(runtime, localVars)
	{
		window.getItem(runtime.globalVars.keyName);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
