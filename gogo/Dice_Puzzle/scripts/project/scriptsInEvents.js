function htmlAds(Adstr,runtime){

 console.log("Adtype is:" + Adstr + " CalledInhtmlads")
// runtime.addEventListener("pointerdown",(e)=>{alert(e.clientY*1216/480)})
if(Adstr == runtime.globalVars.adtype){
	console.log("Rewarded Ad is Called and If runnning...........")
	GameSnacks.ad.break({
	   type: 'reward', 
	   beforeAd,                 // Prepare for the ad. Mute and pause the game flow
	   afterAd,                  // Resume the game and re-enable sound
	   beforeReward,     // Show reward prompt (call showAdFn() if clicked)
	   adDismissed,              // Player dismissed the ad before completion
	   adViewed,                 // Ad was viewed and closed
	   adBreakDone,
   });
	}

	else{
	console.log("interstitial is Called and Else runnning...........")
	GameSnacks.ad.break({
	   type: 'next', 
	   beforeAd,                 // Prepare for the ad. Mute and pause the game flow
	   afterAd,                  // Resume the game and re-enable sound
	   adBreakDone,
   });
	}

let callingFunction;// = (e)=>callShowAds(e,runtime,showAdFn);




function beforeReward(showAdFn){

 //alert("beforeReward called")
	runtime.globalVars.adStart = 1;
 	console.log("In BeforReward "+runtime.globalVars.adStart)

//runtime.addEventListener("pointerdown",(e)=>alert(e.clientX + " "+ e.clientY + " "+btnx))

 
// runtime.addEventListener("pointerdown", (e)=>callShowAds(e,runtime,showAdFn))


if(Adstr == runtime.globalVars.adtype){
	if (runtime.objects.freebtn) {
		const btnInstances = runtime.objects.freebtn.getAllInstances(runtime);
		console.log(btnInstances);

		const btn = runtime.objects.freebtn.getAllInstances(runtime);
		btn[1].text = "freebtn"
		btn[0].addEventListener("click",(e)=>callShowAds(e,runtime,showAdFn))
		btn[1].addEventListener("click",(e)=>showAdFn())	
	} 
	else {

		console.error("Objects 'freebtn' or 'freebtn2' are not defined.");
	}

}
else{
	if (runtime.objects.freebtn2) {    
// 		const btn2Instances = runtime.objects.freebtn2.getAllInstances(runtime);
// 		console.log(btn2Instances);

// 		const btn2 = runtime.objects.freebtn2.getAllInstances(runtime);
// 		btn2[1].text = "freebtn2"
// 		btn2[0].addEventListener("click",(e)=>callShowAds(e,runtime,showAdFn))
// 		btn2[1].addEventListener("click",(e)=>showAdFn())
		showAdFn();

	} 
	else {

		console.error("Objects 'freebtn' or 'freebtn2' are not defined.");
	}
}	
}
function beforeAd(){
	runtime.globalVars.beforeAd = 1;
 	console.log("beforeBreak called")
}
function adViewed(){
	runtime.globalVars.adCompleted = 1;
	console.log("adComplete called")
	runtime.removeEventListener("pointerdown",callingFunction)
	console.log(callingFunction)

}
function adDismissed(){
	console.log(callingFunction)

	runtime.globalVars.adDismiss = 1;
	console.log("adDismissed called")
	runtime.removeEventListener("pointerdown",callingFunction)

}
function afterAd(){

if(Adstr == runtime.globalVars.adtype){
	const btn1 = runtime.objects.freebtn.getAllInstances(runtime);
	btn1[1].destroy();
	runtime.globalVars.afterAd = 1;
	console.log("reward afterBreak called")
	}
	else{
// 	const btn22 = runtime.objects.freebtn2.getAllInstances(runtime);
// 	btn22[1].destroy();
	runtime.globalVars.afterAd = 1;
	console.log("interstitial afterBreak called")
	}		
}
function callShowAds(e,runtime,showAdFn) {
 	console.log("="+runtime.globalVars.showAds)
 	callingFunction = e;
	const currentLayer = runtime.layout.getLayer(0);
	const mouseXYAr = currentLayer.cssPxToLayer(e.clientX, e.clientY, 0);
	 
	 const sprites = runtime.objects.purchasedBG.getAllInstances();
	 // loops through all sprites
	 //alert(sprites.length)
	 for(var i = 0; i < sprites.length; i++) {
	 
	 	 // checks if sprite contains mouse x,y point
	 	 if(sprites[i].containsPoint(mouseXYAr[0],mouseXYAr[1])){
	 	 	 if(sprites[i].instVars.isFreeBtn == 1){
	 	 	 showAdFn();
	 	 	 runtime.globalVars.showAds=0;
	 	 	 //alert(JSON.stringify(sprites[i].instVars))
	 	 	 }
	 	 	 //runtime.getInstanceByUid(sprites[i].txtUID).text = "Clicks: " + sprites[i].myCounter.toString();
	 	 }
	 }	 

	 

}
function adBreakDone (placementInfo) {
console.log("adBreakDone Function Called... "+placementInfo);
}
}









function gameLoop(runtime) {
	if(runtime.globalVars.flow2 == 0){

  			  // Check isEnabled in every game loop
			  const isEnabledVar = GameSnacks.audio.isEnabled();
			  
// 			  const isAudioEnabled = GameSnacks.audio.isAudioEnabled;
			  
			  console.log("Value of isEnabled in gameloop function is : "+isEnabledVar);
			  
// 			  console.log("Value of isAudioEnabled in gameloop function is : "+isAudioEnabled);
			  
			  if (isEnabledVar) {
				console.log("SOUND ENABLE FROM Script JS FILE");
				
				runtime.globalVars.soundOn = 1;
				runtime.globalVars.musicOn = 1;
				runtime.globalVars.flow2=1;
				runtime.callFunction("musicEnable");
				runtime.callFunction("soundEnable");
				runtime.callFunction("PlayGamePlayMusic2", "Main_Menu_BG", "MainSound", "gameplay", "gameplay");
				}
				
					 
			  else {			  			  	
				console.log("SOUND DISABLE FROM Script JS FILE");
				runtime.callFunction("musicDisable");
				runtime.callFunction("soundDisable");
				runtime.globalVars.flow2=0;
				runtime.globalVars.soundOn = 0;
				runtime.globalVars.musicOn = 0;				
			  }
			}
			else
				{
				runtime.globalVars.flow2=0;
				}
		
			}
			
			
						
		












const scriptsInEvents = {

	async Gameplay_eventsheet_Event370_Act34(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event371_Act34(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event372_Act34(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event373_Act34(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event374_Act34(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event375_Act34(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event549_Act4(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event550_Act3(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event659_Act24(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event660_Act23(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event661_Act23(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event662_Act23(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event663_Act23(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event664_Act23(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.ScoreValue);
	},

	async Gameplay_eventsheet_Event668_Act2(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Gameplay_eventsheet_Event670_Act2(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async Gameplay_eventsheet_Event672_Act2(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Gameplay_eventsheet_Event674_Act2(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async Gameplay_eventsheet_Event757_Act3(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async Gameplay_eventsheet_Event1215_Act2(runtime, localVars)
	{
		GameSnacks.game.onPause();
	},

	async Gameplay_eventsheet_Event1216_Act1(runtime, localVars)
	{
		GameSnacks.game.onResume();
	},

	async Gameplay_eventsheet_Event1225_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Gameplay_eventsheet_Event1239_Act11(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Gameplay_eventsheet_Event1256_Act3(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Function_Event32_Act3(runtime, localVars)
	{
		await crazysdk.displayAd("midgame");
	},

	async Function_Event34_Act2(runtime, localVars)
	{
		var jsonString = runtime.globalVars.ajaxData;
		GameSnacks.storage.setItem('dicepuzzlegameuserdata',jsonString);
	},

	async Function_Event36_Act1(runtime, localVars)
	{
		let starsEarned =(GameSnacks.storage.getItem('dicepuzzlegameuserdata'));
		runtime.globalVars.Datastring = starsEarned;
	},

	async Function_Event45_Act6(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype2,runtime)
	},

	async Function_Event210_Act8(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype,runtime)
	},

	async Csv_evensheet_Event2_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStart();
	},

	async Csv_evensheet_Event6_Act2(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStop();
	},

	async Mainmenu_eventsheet_Event3_Act1(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async Mainmenu_eventsheet_Event3_Act3(runtime, localVars)
	{
		gameLoop(runtime)
	},

	async Mainmenu_eventsheet_Event16_Act6(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Mainmenu_eventsheet_Event51_Act10(runtime, localVars)
	{
		document.title = runtime.globalVars.Variable14;
	},

	async Mainmenu_eventsheet_Event72_Act4(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async Loading_eventsheet_Event2_Act2(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async Loading_eventsheet_Event14_Act5(runtime, localVars)
	{
		document.title = runtime.globalVars.Variable15;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

