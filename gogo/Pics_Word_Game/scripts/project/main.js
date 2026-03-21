
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	console.log("Main.js is running............");
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	GameSnacks.audio.subscribe((isEnabled) => {
	console.log("Inside GameSnacks.audio.subscribe ............");
	  if (isEnabled) {
			if(runtime.globalVars.flow2 == 0){
			console.log("SOUND ENABLE FROM MAIN JS FILE");
			runtime.globalVars.soundOn = 1;
            runtime.globalVars.musicOn = 1;
			runtime.globalVars.flow2=1;
            runtime.callFunction("musicEnable");
            runtime.callFunction("soundEnable");
            runtime.callFunction("PlayGamePlayMusic", "gameplay", "gameplay");
			}
			else
			{
			console.log("RUNNING FROM ELSE SOUND ENABLE FROM MAIN JS FILE");
			runtime.globalVars.flow2=0;
			}
	  } else {
		// mute background music
			console.log("SOUND DISABLE FROM MAIN JS FILE");
            runtime.callFunction("musicDisable");
            runtime.callFunction("soundDisable");
			runtime.globalVars.flow2=0;
            runtime.globalVars.soundOn = 0;
            runtime.globalVars.musicOn = 0;
	  }
	});
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// const sdkElem = document.createElement("script");
// sdkElem.type = "text/javascript";
// sdkElem.src = "https://sdks.gamesnacks.com/developer-v2.js";
// document.body.appendChild(sdkElem);






