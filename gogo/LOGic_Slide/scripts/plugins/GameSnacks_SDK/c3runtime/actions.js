const C3 = globalThis.C3;

C3.Plugins.GameSnacks_SDK.Acts =
{
	FirstFrameReady()
	{
		console.log('[GameSnacks SDK] Action: FirstFrameReady called');

		if (this._gameSnacks)
		{
			try
			{
				this._gameSnacks.game.firstFrameReady();
				console.log('[GameSnacks SDK] game.firstFrameReady() executed successfully');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error calling firstFrameReady:', e);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] firstFrameReady() skipped - SDK not available');
		}
	},

	GameReady()
	{
		console.log('[GameSnacks SDK] Action: GameReady called');

		if (this._gameSnacks)
		{
			try
			{
				this._gameSnacks.game.ready();
				console.log('[GameSnacks SDK] game.ready() executed successfully');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error calling ready:', e);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] ready() skipped - SDK not available');
		}
	},

	GameOver()
	{
		console.log('[GameSnacks SDK] Action: GameOver called');

		if (this._gameSnacks)
		{
			try
			{
				this._gameSnacks.game.gameOver();
				console.log('[GameSnacks SDK] game.gameOver() executed successfully');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error calling gameOver:', e);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] gameOver() skipped - SDK not available');
		}
	},

	PauseGame()
	{
		console.log('[GameSnacks SDK] Action: PauseGame called');

		if (this._gameSnacks)
		{
			try
			{
				// The GameSnacks SDK uses an onPause event handler to notify the game to pause.
				// There is no direct function to call to pause the game.
				// this._gameSnacks.pauseGame();
				this._isGamePaused = true;
				console.log('[GameSnacks SDK] pauseGame() executed successfully');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error calling pauseGame:', e);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] pauseGame() skipped - SDK not available');
		}
	},

	ResumeGame()
	{
		console.log('[GameSnacks SDK] Action: ResumeGame called');

		if (this._gameSnacks)
		{
			try
			{
				// The GameSnacks SDK uses an onResume event handler to notify the game to resume.
				// There is no direct function to call to resume the game.
				// this._gameSnacks.resumeGame();
				this._isGamePaused = false;
				console.log('[GameSnacks SDK] resumeGame() executed successfully');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error calling resumeGame:', e);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] resumeGame() skipped - SDK not available');
		}
	},

	ShowInterstitial()
	{
		console.log('[GameSnacks SDK] Action: ShowInterstitial called');

		if (this._gameSnacks && this._gameSnacks.ad)
		{
			try
			{
				console.log('[GameSnacks SDK] Requesting interstitial ad...');
				this._gameSnacks.ad.break({
					type: 'next',
					name: 'interstitial-ad',
					beforeAd: () => {
						console.log('[GameSnacks SDK] Interstitial ad - beforeAd callback');
					},
					afterAd: () => {
						console.log('[GameSnacks SDK] Interstitial ad - afterAd callback');
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdShown);
					},
					adBreakDone: (placementInfo) => {
						console.log('[GameSnacks SDK] Interstitial ad - adBreakDone:', placementInfo);
						if (placementInfo.breakStatus === 'error' || placementInfo.breakStatus === 'frequencyCapped') {
							this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
						}
					}
				});
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error showing interstitial:', e);
				this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] ShowInterstitial() skipped - SDK not available');
			this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
		}
	},

	ShowRewarded()
	{
		console.log('[GameSnacks SDK] Action: ShowRewarded called');

		if (typeof globalThis.adBreak === 'function')
		{
			try
			{
				console.log('[GameSnacks SDK] Requesting rewarded ad via adBreak...');

				globalThis.adBreak({
					type: 'reward',
					name: 'rewarded-ad',
					beforeAd: () => {
						console.log('[GameSnacks SDK] Rewarded ad - beforeAd callback');
						// Game should pause and mute here (handled by GameSnacks)
					},
					afterAd: () => {
						console.log('[GameSnacks SDK] Rewarded ad - afterAd callback');
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdShown);
					},
					beforeReward: (showAdFn) => {
						console.log('[GameSnacks SDK] Rewarded ad - beforeReward callback');
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnBeforeReward);
						showAdFn();
					},
					adViewed: () => {
						console.log('[GameSnacks SDK] Rewarded ad - adViewed callback (grant reward)');
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdViewed);
					},
					adDismissed: () => {
						console.log('[GameSnacks SDK] Rewarded ad - adDismissed callback (no reward)');
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdDismissed);
					},
					adBreakDone: (placementInfo) => {
						console.log('[GameSnacks SDK] Rewarded ad - adBreakDone:', placementInfo);
						if (placementInfo.breakStatus === 'error' || placementInfo.breakStatus === 'frequencyCapped')
						{
							this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
						}
					}
				});
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error showing rewarded ad:', e);
				this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
			}
		}
		else if (this._gameSnacks && typeof this._gameSnacks.showRewarded === 'function')
		{
			// Fallback to legacy API if available
			try
			{
				console.log('[GameSnacks SDK] Requesting rewarded ad via showRewarded...');
				this._gameSnacks.showRewarded()
					.then(() => {
						console.log('[GameSnacks SDK] Rewarded ad shown successfully');
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdShown);
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdViewed);
					})
					.catch((err) => {
						console.error('[GameSnacks SDK] Rewarded ad failed:', err);
						this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
					});
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error showing rewarded ad:', e);
				this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] ShowRewarded() skipped - adBreak API not available');
			this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAdFailed);
		}
	},

	UpdateScore(score)
	{
		console.log('[GameSnacks SDK] Action: UpdateScore called with value:', score);

		if (this._gameSnacks)
		{
			try
			{
				this._gameSnacks.score.update(score);
				console.log('[GameSnacks SDK] Score updated successfully to:', score);
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error updating score:', e);
			}
		}
		else
		{
			console.warn('[GameSnacks SDK] UpdateScore() skipped - SDK not available');
		}
	},

	GetStorage(key)
	{
		console.log('[GameSnacks SDK] Action: GetStorage called - Key:', key);

		let value = "";

		if (this._gameSnacks && this._gameSnacks.storage)
		{
			try
			{
				value = this._gameSnacks.storage.getItem(key);
				if (value === null) value = "";
				console.log('[GameSnacks SDK] Storage retrieved from GameSnacks API - Value:', value);
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error getting storage:', e);
			}
		}
		else
		{
			// Fallback to local storage for testing
			value = this._storage.get(key) || "";
			console.log('[GameSnacks SDK] Storage retrieved from fallback (local Map) - Value:', value);
		}

		// Store the loaded key and value for the trigger event
		this._loadedStorageKey = key;
		this._loadedStorageValue = value;

		// Trigger the OnStorageItemLoaded event
		this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnStorageItemLoaded);
	},

	SetStorage(key, value)
	{
		console.log('[GameSnacks SDK] Action: SetStorage called - Key:', key, 'Value:', value);

		if (this._gameSnacks && this._gameSnacks.storage)
		{
			try
			{
				this._gameSnacks.storage.setItem(key, value);
				this._storage.set(key, value);
				console.log('[GameSnacks SDK] Storage set successfully via GameSnacks API');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error setting storage:', e);
			}
		}
		else
		{
			// Fallback to local storage for testing
			this._storage.set(key, value);
			console.log('[GameSnacks SDK] Storage set via fallback (local Map) - SDK not available');
		}
	},

	RemoveStorage(key)
	{
		console.log('[GameSnacks SDK] Action: RemoveStorage called - Key:', key);

		if (this._gameSnacks && this._gameSnacks.storage)
		{
			try
			{
				this._gameSnacks.storage.removeItem(key);
				this._storage.delete(key);
				console.log('[GameSnacks SDK] Storage removed successfully via GameSnacks API');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error removing storage:', e);
			}
		}
		else
		{
			this._storage.delete(key);
			console.log('[GameSnacks SDK] Storage removed via fallback (local Map) - SDK not available');
		}
	},

	ClearStorage()
	{
		console.log('[GameSnacks SDK] Action: ClearStorage called');

		if (this._gameSnacks && this._gameSnacks.storage)
		{
			try
			{
				this._gameSnacks.storage.clear();
				this._storage.clear();
				console.log('[GameSnacks SDK] Storage cleared successfully via GameSnacks API');
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error clearing storage:', e);
			}
		}
		else
		{
			this._storage.clear();
			console.log('[GameSnacks SDK] Storage cleared via fallback (local Map) - SDK not available');
		}
	}
};