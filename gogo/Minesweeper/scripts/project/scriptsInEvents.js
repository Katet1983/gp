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
	 	 	   
// 	 	 	   const isAudioEnabled = GameSnacks.audio.isAudioEnabled;
	 	 	   
	 	 	   console.log("Value of isEnabled in gameloop function is : "+isEnabledVar);
	 	 	   
// 	 	 	   console.log("Value of isAudioEnabled in gameloop function is : "+isAudioEnabled);
	 	 	   
	 	 	   if (isEnabledVar) {
	 	 	 	 console.log("SOUND ENABLE FROM Script JS FILE");
	 	 	 	 
	 	 	 	 runtime.globalVars.soundOn = 1;
	 	 	 	 runtime.globalVars.musicOn = 1;
	 	 	 	 runtime.globalVars.flow2=1;
	 	 	 	 runtime.callFunction("musicEnable");
	 	 	 	 runtime.callFunction("soundEnable");
	 	 	 	 runtime.callFunction("PlayGamePlayMusic", "gameplay", "gameplay");	 
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
			  	  		  
// // 			  console.log("Value of isEnabled in gameloop function is : "+isEnabledVar);			  
			  
// 			  if (isEnabledVar) {
// 				runtime.globalVars.flow3=1;	
// // 				console.log("SOUND ENABLE FROM gameloop2 FILE :"+isEnabledVar+","+runtime.globalVars.flow3);
// 			  } 
// 			  else {
// 			  	runtime.globalVars.flow3=0;
// // 				console.log("SOUND DISABLE FROM gameloop2 FILE :"+isEnabledVar+","+runtime.globalVars.flow3);
				
// 			  }
			  
// 			}
			








const scriptsInEvents = {

	async GameplayEs_Event2_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async GlobalEs_Event24_Act12(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async GlobalEs_Event91_Act4(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async GlobalEs_Event94_Act4(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async GlobalEs_Event97_Act4(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async GlobalEs_Event100_Act4(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async GlobalEs_Event133_Act2(runtime, localVars)
	{
		GameSnacks.game.onPause();
	},

	async GlobalEs_Event135_Act1(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype2,runtime)
	},

	async GlobalEs_Event136_Act2(runtime, localVars)
	{
		GameSnacks.game.onResume();
	},

	async GlobalEs_Event140_Act3(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async GlobalEs_Event151_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async GlobalEs_Event152_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async GlobalEs_Event211_Act12(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async GlobalEs_Event279_Act3(runtime, localVars)
	{
		console.log("here --- 111")
	},

	async GlobalEs_Event279_Act9(runtime, localVars)
	{
		console.log("here @7 ")
	},

	async MainmenuEs_Event3_Act1(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async MainmenuEs_Event3_Act3(runtime, localVars)
	{
		gameLoop(runtime)
	},

	async MainmenuEs_Event218_Act1(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype2,runtime)
	},

	async GameplayhexaEs_old_Event98_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async GameplayhexaEs_old_Event99_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async LoadingEs_Event4_Act1(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async LoadingEs_Event6_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStart();
	},

	async LoadingEs_Event53_Act2(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStop();
	},

	async Functions_Event27_Act4(runtime, localVars)
	{
		await crazysdk.displayAd("midgame");
	},

	async Functions_Event45_Act2(runtime, localVars)
	{
		var jsonString = runtime.globalVars.ajaxData;
		GameSnacks.storage.setItem('minesweepergameuserdata',jsonString);
	},

	async Functions_Event48_Act1(runtime, localVars)
	{
		let starsEarned =(GameSnacks.storage.getItem('minesweepergameuserdata'));
		runtime.globalVars.Datastring = starsEarned;
	},

	async Functions_Event54_Act6(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype,runtime)
	},

	async LevelcompleteEs_Event1_Act33(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.levelno+99);
	},

	async LevelcompleteEs_Event1_Act35(runtime, localVars)
	{
		GameSnacks.game.levelComplete(runtime.globalVars.levelno-1);
	},

	async LevelcompleteEs_Event3_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async GiftrewardsEs_Event3_Act1(runtime, localVars)
	{
		crazysdk.happytime();
	},

	async LevelfailEs_Event2_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async LevelfailEs_Event3_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async GameplayhexaEs_Event2_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

