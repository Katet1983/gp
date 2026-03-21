//GAMESNACKS.showAdFn();


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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


function htmlAds1(runtime){

 console.log("interstitial is Called in gameplay " + " CalledInhtmlads1")
// runtime.addEventListener("pointerdown",(e)=>{alert(e.clientY*1216/480)})


	
	console.log("interstitial Ad is Called in gameplay")
	GameSnacks.ad.break({
	   type: 'next',
	   name: 'gameplay_interstitial_Ad',
	   beforeAd,                 // Prepare for the ad. Mute and pause the game flow
	   afterAd,                  // Resume the game and re-enable sound
	   adBreakDone,
   });
	

let callingFunction;// = (e)=>callShowAds(e,runtime,showAdFn);

function beforeAd(){
	runtime.globalVars.beforeAd = 1;
 	console.log("interstitial beforeBreak called in gameplay")
}

function afterAd(){	
	runtime.globalVars.afterAd = 1;
	console.log("interstitial afterBreak called in gameplay")	
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
console.log("adBreakDone Function Called in gameplay... "+placementInfo);
}
}


//******************************************************************************************************************

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
				runtime.callFunction("PlayGamePlayMusic", "gameplay", "gameplay");	
// 				runtime.callFunction("PlayGamePlayMusic2", "mainMenuMusic", "mainMenuMusic", "gameplay", "gameplay");
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
			
			
			
			
// 			function gameLoop2(runtime) {
//   			  // Check isEnabled in every game loop
// 			  const isEnabledVar = GameSnacks.audio.isEnabled();
			  	  		  
// 			  console.log("Value of isEnabled in gameloop2 function is : "+isEnabledVar);			  
			  
// 			  if (isEnabledVar) {
// 				runtime.globalVars.flow3=1;	
// 				console.log("SOUND ENABLE FROM gameloop2 FILE :"+isEnabledVar+","+runtime.globalVars.flow3);
// 			  } 
// 			  else {
// 			  	runtime.globalVars.flow3=0;
// 				console.log("SOUND DISABLE FROM gameloop2 FILE :"+isEnabledVar+","+runtime.globalVars.flow3);
				
// 			  }
			  
// 			}
			



const scriptsInEvents = {

	async Globalsheet_Event5_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Globalsheet_Event12_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_main_Event3_Act1(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async E_main_Event3_Act3(runtime, localVars)
	{
		gameLoop(runtime)
	},

	async E_main_Event49_Act14(runtime, localVars)
	{
		showMessage(runtime.globalVars.Variable5);
	},

	async E_gameplay_Event290_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_gameplay_Event298_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async E_gameplay_Event299_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async E_gameplay_Event307_Act11(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async E_gameplay_Event351_Act1(runtime, localVars)
	{
		console.log("suspended...")
	},

	async E_gameplay_Event351_Act2(runtime, localVars)
	{
		GameSnacks.game.onPause();
	},

	async E_gameplay_Event352_Act1(runtime, localVars)
	{
		console.log("resume...")
	},

	async E_gameplay_Event352_Act2(runtime, localVars)
	{
		GameSnacks.game.onResume();
	},

	async E_gameplay_Event367_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async E_levelcomplet_Event7_Act2(runtime, localVars)
	{
		crazysdk.happytime();
	},

	async Function_Event128_Act4(runtime, localVars)
	{
		await crazysdk.displayAd("midgame");
	},

	async Function_Event129_Act3(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async Function_Event133_Act2(runtime, localVars)
	{
		var jsonString = runtime.globalVars.ajaxData;
		GameSnacks.storage.setItem('FCBgameuserData',jsonString);
	},

	async Function_Event136_Act1(runtime, localVars)
	{
		let starsEarned =(GameSnacks.storage.getItem('FCBgameuserData'));
		runtime.globalVars.dataString = starsEarned;
	},

	async Function_Event143_Act6(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype,runtime)
	},

	async Function_Event145_Act6(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype2,runtime)
	},

	async E_thanksrewards_Event7_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Fcb_functions_Event849_Act3(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.gameScore);
	},

	async Fcb_functions_Event853_Act4(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.gameScore);
	},

	async Fcb_functions_Event856_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async Fcb_functions_Event858_Act3(runtime, localVars)
	{
		GameSnacks.game.levelComplete(runtime.globalVars.levelCompleteLevel);
	},

	async Fcb_functions_Event1010_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async Fcb_functions_Event1013_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_csvloader_Event2_Act1(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async E_csvloader_Event3_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStart();
	},

	async E_csvloader_Event7_Act3(runtime, localVars)
	{
		showMessage(runtime.globalVars.Variable5);
	},

	async E_csvloader_Event20_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStop();
	},

	async E_mainloading_Event3_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStart();
	},

	async E_mainloading_Event20_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStop();
	},

	async E_mainloading_Event20_Act3(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_gameloading_Event1_Act5(runtime, localVars)
	{
		crazysdk.gameplayStart();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

