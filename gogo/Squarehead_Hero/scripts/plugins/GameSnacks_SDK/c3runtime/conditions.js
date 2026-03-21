
const C3 = globalThis.C3;

C3.Plugins.GameSnacks_SDK.Cnds =
{
	IsAudioEnabled()
	{
		let result;
		if (this._gameSnacks && this._gameSnacks.audio && typeof this._gameSnacks.audio.isEnabled === 'function')
		{
			result = this._gameSnacks.audio.isEnabled();
			console.log('[GameSnacks SDK] Condition: IsAudioEnabled =', result, '(from SDK)');
		}
		else
		{
			result = this._isAudioEnabled;
			console.log('[GameSnacks SDK] Condition: IsAudioEnabled =', result, '(from cached state)');
		}
		return result;
	},

	IsGamePaused()
	{
		console.log('[GameSnacks SDK] Condition: IsGamePaused =', this._isGamePaused);
		return this._isGamePaused;
	},

	OnAudioChanged()
	{
		console.log('[GameSnacks SDK] Trigger: OnAudioChanged fired');
		return true;
	},

	OnGamePaused()
	{
		console.log('[GameSnacks SDK] Trigger: OnGamePaused fired');
		return true;
	},

	OnGameResumed()
	{
		console.log('[GameSnacks SDK] Trigger: OnGameResumed fired');
		return true;
	},

	OnAdShown()
	{
		console.log('[GameSnacks SDK] Trigger: OnAdShown fired');
		return true;
	},

	OnAdFailed()
	{
		console.log('[GameSnacks SDK] Trigger: OnAdFailed fired');
		return true;
	},

	OnBeforeReward()
	{
		console.log('[GameSnacks SDK] Trigger: OnBeforeReward fired');
		return true;
	},

	OnAdViewed()
	{
		console.log('[GameSnacks SDK] Trigger: OnAdViewed fired');
		return true;
	},

	OnAdDismissed()
	{
		console.log('[GameSnacks SDK] Trigger: OnAdDismissed fired');
		return true;
	},

	OnStorageItemLoaded()
	{
		console.log('[GameSnacks SDK] Trigger: OnStorageItemLoaded fired');
		return true;
	}
};
