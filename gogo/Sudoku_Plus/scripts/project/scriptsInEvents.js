// Crazy Game
// ------------------------------------------------------

// const sdkElem = document.createElement("script");
// sdkElem.type = "text/javascript";
// sdkElem.src = "https://sdk.crazygames.com/Construct3CrazySDK.js";
// document.body.appendChild(sdkElem);


// function showMessage(message)
// 	 {
// 	 document.title = message;
// 	 }


// -------------------------------------------------------


 //GAMESNACKS.beforeReward();
//GAMESNACKS.showAdFn();

 
// ------------------------Old Ads Script---------------------------------------


// function htmlAds(runtime){


//  console.log("Inhtmlads")
// // runtime.addEventListener("pointerdown",(e)=>{alert(e.clientY*1216/480)})
// GAMESNACKS.rewardedAdOpportunity({
//  beforeReward,
// beforeBreak,
// adComplete,
// adDismissed,
// afterBreak}
// ) ;
// let callingFunction;// = (e)=>callShowAds(e,runtime,showAdFn);

// function beforeReward(showAdFn){

//  //alert("beforeReward called")
// runtime.globalVars.adStart = 1;
//  console.log("In BeforReward "+runtime.globalVars.adStart)

// //runtime.addEventListener("pointerdown",(e)=>alert(e.clientX + " "+ e.clientY + " "+btnx))

 
// // runtime.addEventListener("pointerdown", (e)=>callShowAds(e,runtime,showAdFn))

// const btn = runtime.objects.freebtn.getAllInstances();
// btn[1].text = "GGG"
// btn[0].addEventListener("click",(e)=>callShowAds(e,runtime,showAdFn))
// btn[1].addEventListener("click",(e)=>showAdFn())

// //console.log(callingFunction)

// }
// function beforeBreak(){
// runtime.globalVars.beforeAd = 1;
//  console.log("beforeBreak called")
// }
// function adComplete(){
// runtime.globalVars.adCompleted = 1;
// console.log("adComplete called")
// runtime.removeEventListener("pointerdown",callingFunction)
// console.log(callingFunction)

// }
// function adDismissed(){
// console.log(callingFunction)

// runtime.globalVars.adDismiss = 1;
// console.log("adDismissed called")
// runtime.removeEventListener("pointerdown",callingFunction)

// }
// function afterBreak(){
// const btn1 = runtime.objects.freebtn.getAllInstances();
// btn1[1].destroy();
// runtime.globalVars.afterAd = 1;
// console.log("afterBreak called")
// }
// function callShowAds(e,runtime,showAdFn) {
//  console.log("="+runtime.globalVars.showAds)
//  callingFunction = e;
// const currentLayer = runtime.layout.getLayer(0);
// 	 const mouseXYAr = currentLayer.cssPxToLayer(e.clientX, e.clientY, 0);
	 
// 	 const sprites = runtime.objects.purchasedBG.getAllInstances();
// 	 // loops through all sprites
// 	 //alert(sprites.length)
// 	 for(var i = 0; i < sprites.length; i++) {
	 
// 	 	 // checks if sprite contains mouse x,y point
// 	 	 if(sprites[i].containsPoint(mouseXYAr[0],mouseXYAr[1])){
// 	 	 	 if(sprites[i].instVars.isFreeBtn == 1){
// 	 	 	 showAdFn();
// 	 	 	 runtime.globalVars.showAds=0;
// 	 	 	 //alert(JSON.stringify(sprites[i].instVars))
// 	 	 	 }
// 	 	 	 //runtime.getInstanceByUid(sprites[i].txtUID).text = "Clicks: " + sprites[i].myCounter.toString();
// 	 	 }
// 	 }	 

	 

// }
// }



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
						
			
			


// **************************************New Ads Script **********************************************







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





















const scriptsInEvents = {

	async E_loading_Event2_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStart();
	},

	async E_loading_Event3_Act1(runtime, localVars)
	{
		GameSnacks.game.firstFrameReady();
	},

	async E_loading_Event19_Act1(runtime, localVars)
	{
		crazysdk.sdkGameLoadingStop();
	},

	async Global_Event3_Act10(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype2,runtime)
	},

	async Global_Event103_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async Global_Event104_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async Function_Event37_Act10(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype,runtime)
	},

	async Function_Event87_Act6(runtime, localVars)
	{
		await crazysdk.displayAd("midgame");
	},

	async Function_Event89_Act6(runtime, localVars)
	{
		await crazysdk.displayAd("rewarded");
	},

	async Function_Event98_Act3(runtime, localVars)
	{
		var jsonString = runtime.globalVars.ajaxData;
		GameSnacks.storage.setItem('sudokugameuserdata',jsonString);
	},

	async Function_Event100_Act1(runtime, localVars)
	{
		let starsEarned =(GameSnacks.storage.getItem('sudokugameuserdata'));
		runtime.globalVars.Datastring = starsEarned;
	},

	async Function_Event108_Act3(runtime, localVars)
	{
		var jsonString = runtime.globalVars.ajaxData;
		GameSnacks.storage.setItem('sudokugamecatlist',jsonString);
	},

	async Function_Event110_Act1(runtime, localVars)
	{
		let starsEarned =(GameSnacks.storage.getItem('sudokugamecatlist'));
		runtime.globalVars.Datastring = starsEarned;
	},

	async E_main_Event26_Act2(runtime, localVars)
	{
		GameSnacks.game.ready();
	},

	async E_main_Event26_Act4(runtime, localVars)
	{
		gameLoop(runtime)
	},

	async E_main_Event46_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_main_Event51_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_main_Event56_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_main_Event60_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_main_Event62_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_main_Event64_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async EventSheet1_Event254_Act1(runtime, localVars)
	{
		crazysdk.gameplayStop();
	},

	async EventSheet1_Event416_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async EventSheet1_Event424_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async EventSheet1_Event427_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async EventSheet1_Event574_Act3(runtime, localVars)
	{
		GameSnacks.game.onPause();
	},

	async EventSheet1_Event576_Act2(runtime, localVars)
	{
		GameSnacks.game.onResume();
	},

	async EventSheet1_Event580_Act1(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype2,runtime)
	},

	async EventSheet1_Event583_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async EventSheet1_Event586_Act1(runtime, localVars)
	{
		GameSnacks.game.gameOver();
	},

	async E_levelcomplete_Event6_Act4(runtime, localVars)
	{
		GameSnacks.score.update(runtime.globalVars.levelno+99);
	},

	async E_levelcomplete_Event6_Act6(runtime, localVars)
	{
		GameSnacks.game.levelComplete(runtime.globalVars.levelno-1);
	},

	async E_levelcomplete_Event24_Act1(runtime, localVars)
	{
		crazysdk.happytime();
	},

	async E_levelcomplete_Event28_Act1(runtime, localVars)
	{
		crazysdk.happytime();
	},

	async E_levelcomplete_Event34_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_levelcomplete_Event46_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_giftrewards_Event1_Act16(runtime, localVars)
	{
		htmlAds(runtime.globalVars.adtype,runtime)
	},

	async E_giftrewards_Event27_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpwindoku_Event16_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpwindoku_Event37_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpwindoku_Event40_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpdg_Event16_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpdg_Event34_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpdg_Event37_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpkiller_Event16_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpkiller_Event37_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async Helpkiller_Event40_Act1(runtime, localVars)
	{
		crazysdk.gameplayStart();
	},

	async E_crazyads_Event1_Act7(runtime, localVars)
	{
		crazysdk.gameplayStart();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

