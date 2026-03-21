
const C3 = globalThis.C3;

C3.Plugins.GameSnacks_SDK.Instance = class GameSnacks_SDKInstance extends globalThis.ISDKInstanceBase
{
	constructor()
	{
		super();

		console.log('[GameSnacks SDK] Initializing plugin...');

		// Initialize GameSnacks SDK
		this._gameSnacks = null;
		this._isAudioEnabled = true;
		this._isGamePaused = false;
		this._storage = new Map();

		// Storage loaded data tracking
		this._loadedStorageKey = "";
		this._loadedStorageValue = "";

		// Check if GameSnacks SDK is available
		if (typeof globalThis.GameSnacks !== 'undefined')
		{
			console.log('[GameSnacks SDK] GameSnacks object found successfully');
			this._gameSnacks = globalThis.GameSnacks;
			this._initializeSDK();
		}
		else
		{
			console.warn('[GameSnacks SDK] GameSnacks object not found. Make sure your game is running on GameSnacks platform.');
		}
	}
	
	_release()
	{
		super._release();
	}

	_initializeSDK()
	{
		console.log('[GameSnacks SDK] Starting SDK initialization...');

		if (!this._gameSnacks)
		{
			console.error('[GameSnacks SDK] Cannot initialize - GameSnacks object is null');
			return;
		}

		// Get initial audio state
		if (this._gameSnacks.audio && typeof this._gameSnacks.audio.isEnabled === 'function')
		{
			this._isAudioEnabled = this._gameSnacks.audio.isEnabled();
			console.log('[GameSnacks SDK] Initial audio state:', this._isAudioEnabled ? 'enabled' : 'disabled');

			// Listen for audio changes
			this._gameSnacks.audio.subscribe((isEnabled) => {
				this._isAudioEnabled = isEnabled;
				console.log('[GameSnacks SDK] Audio state changed to:', isEnabled ? 'enabled' : 'disabled');
				this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnAudioChanged);
			});
			console.log('[GameSnacks SDK] Audio change listener registered');
		}
		else
		{
			console.warn('[GameSnacks SDK] Audio API not available');
		}

		// Listen for pause events
		if (this._gameSnacks.game && typeof this._gameSnacks.game.onPause === 'function')
		{
			this._gameSnacks.game.onPause(() => {
				this._isGamePaused = true;
				console.log('[GameSnacks SDK] Game paused event received');
				this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnGamePaused);
			});
			console.log('[GameSnacks SDK] Pause listener registered');
		}
		else
		{
			console.warn('[GameSnacks SDK] game.onPause API not available');
		}

		// Listen for resume events
		if (this._gameSnacks.game && typeof this._gameSnacks.game.onResume === 'function')
		{
			this._gameSnacks.game.onResume(() => {
				this._isGamePaused = false;
				console.log('[GameSnacks SDK] Game resumed event received');
				this._trigger(C3.Plugins.GameSnacks_SDK.Cnds.OnGameResumed);
			});
			console.log('[GameSnacks SDK] Resume listener registered');
		}
		else
		{
			console.warn('[GameSnacks SDK] game.onResume API not available');
		}

		console.log('[GameSnacks SDK] SDK initialization completed successfully');
	}
	
	_saveToJson()
	{
		return {
			// No data to save
		};
	}
	
	_loadFromJson(o)
	{
		// No data to load
	}
};
