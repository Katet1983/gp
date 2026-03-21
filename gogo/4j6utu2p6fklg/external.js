function GameSnacks_JS_Init(jsString) 
{
	var isAudioEnabled = false;
	GAMESNACKS.subscribeToAudioUpdates((isAudioEnabled) => 
	{
		if (isAudioEnabled) 
		{
			GameSnacks_AudioOn();
		} 
		else 
		{
			GameSnacks_AudioOff();
		}
	});
}
function GameSnacks_AudioOn()
{
	Unity_SendMessage('AudioCallbackOn','');
}	   
function GameSnacks_AudioOff()
{
	Unity_SendMessage('AudioCallbackOff','');
}
function GameSnacks_JS_SendScore(jsInt) 
{
	GAMESNACKS.sendScore(jsInt);
}
function GameSnacks_JS_GameOver() 
{
	GAMESNACKS.gameOver();
}
function GameSnacks_JS_LevelCompleted(jsInt) 
{
	GAMESNACKS.levelComplete(jsInt);
}
function GameSnacks_JS_IsAudioEnabled(jsInt) 
{
	return GAMESNACKS.isAudioEnabled();
}
function GameSnacks_JS_GameReady() 
{
	GAMESNACKS.gameReady();
}

var myAd = {
    beforeReward: GameSnacks_BeforeReward,
    beforeBreak: GameSnacks_BeforeBreak,
    adComplete: GameSnacks_AdCompleted,
	adDismissed: GameSnacks_AdDismissed,
	afterBreak: GameSnacks_AfterBreak,
};
	
function GameSnacks_JS_RewardedAdOpportunity()
{
	GAMESNACKS.rewardedAdOpportunity(myAd);
}

var showRewardedAd;
function GameSnacks_BeforeReward(showAdFn)
{
	showRewardedAd = showAdFn;
	Unity_SendMessage('AdBeforeReward','');
}

function GameSnacks_JS_ShowRewardedAd()
{
	showRewardedAd();
}

function AdShown(){}

function GameSnacks_BeforeBreak(){Unity_SendMessage('AdBeforeBreak','');}
function GameSnacks_AdCompleted(){Unity_SendMessage('AdCompleted','');}
function GameSnacks_AdDismissed(){Unity_SendMessage('AdDismissed','');}
function GameSnacks_AfterBreak() 
{
	Unity_SendMessage('AdAfterBreak','');
	FocusWindow();
}

function Unity_SendMessage(method, value='')
{
	//window.gameInstance.then((unityInstance) => {
    //        unityInstance.SendMessage('GameSnacksController', method, value);        
    //    });
	window.gameInstance.SendMessage('GameSnacksController', method, value);     
}

function GameSnacks_JS_IsMobile()
{
	return window.gameInstance.SystemInfo.mobile;
	//window.gameInstance.then((unityInstance) =>
	//{
	//	return unityInstance.SystemInfo.mobile;
	//});
}

function FocusWindow()
{
	window.focus();
}


