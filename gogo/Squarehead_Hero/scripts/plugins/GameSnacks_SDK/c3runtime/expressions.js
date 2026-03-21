
const C3 = globalThis.C3;

C3.Plugins.GameSnacks_SDK.Exps =
{
	AudioEnabled()
	{
		let result;
		if (this._gameSnacks && this._gameSnacks.audio && typeof this._gameSnacks.audio.isEnabled === 'function')
		{
			result = this._gameSnacks.audio.isEnabled() ? 1 : 0;
			console.log('[GameSnacks SDK] Expression: AudioEnabled =', result, '(from SDK)');
		}
		else
		{
			result = this._isAudioEnabled ? 1 : 0;
			console.log('[GameSnacks SDK] Expression: AudioEnabled =', result, '(from cached state)');
		}
		return result;
	},

	StorageGet(key)
	{
		console.log('[GameSnacks SDK] Expression: StorageGet called - Key:', key);

		if (this._gameSnacks && this._gameSnacks.storage)
		{
			try
			{
				const value = this._gameSnacks.storage.getItem(key);
				console.log('[GameSnacks SDK] Storage retrieved from GameSnacks API - Value:', value);
				return value !== null ? value : "";
			}
			catch (e)
			{
				console.error('[GameSnacks SDK] Error getting storage:', e);
				return "";
			}
		}
		else
		{
			// Fallback to local storage for testing
			const value = this._storage.get(key) || "";
			console.log('[GameSnacks SDK] Storage retrieved from fallback (local Map) - Value:', value);
			return value;
		}
	},

	LoadedStorageKey()
	{
		console.log('[GameSnacks SDK] Expression: LoadedStorageKey =', this._loadedStorageKey);
		return this._loadedStorageKey;
	},

	LoadedStorageValue()
	{
		console.log('[GameSnacks SDK] Expression: LoadedStorageValue =', this._loadedStorageValue);
		return this._loadedStorageValue;
	}
};
