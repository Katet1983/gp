



runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	console.log("Main.js is running............");
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	GameSnacks.audio.subscribe((isEnabled) => {
	console.log("Inside GameSnacks.audio.subscribe ............");
	  if (isEnabled) {
	  	console.log("SOUND ENABLE FROM MAIN JS FILE");
			if(runtime.globalVars.flow2 == 0){
			runtime.globalVars.soundOn = 1;
            runtime.globalVars.musicOn = 1;
			runtime.globalVars.flow2=1;
            runtime.callFunction("musicEnable");
            runtime.callFunction("soundEnable");
            runtime.callFunction("PlayGamePlayMusic2", "mainmenumusic", "mainmenumusic","gameplay","gameplay");
			}
			else
			{
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





// *****************For GameSnacks Events  testing *******************************


// const sdkElem = document.createElement("script");
// sdkElem.type = "text/javascript";
// sdkElem.src = "https://sdks.gamesnacks.com/developer-v2.js";
// document.body.appendChild(sdkElem);









