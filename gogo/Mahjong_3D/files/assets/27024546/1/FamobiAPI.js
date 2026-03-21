var FamobiApi = pc.createScript('famobiApi');

pc.extend(FamobiApi.prototype, {

    initialize: function() {
        window.famobi = window.famobi || {};
        window.famobi.localStorage = window.famobi.localStorage || window.localStorage;
        window.famobi.sessionStorage = window.famobi.sessionStorage || window.sessionStorage;

        pc.famobiAPI = this;
    },

    /**
     * Returns a relative path to the final branding button. For an absolute path use the parameter "true".
     * The size of the image ALWAYS has to be 600 x 253px. Therefore, you have to scale it using your engine/ framework only.
     * Please note: In some cases, the button is transparent or invisible; don't combine it with any GUI elements!
     *
     * @returns {string} Path of the image.
     */
    getBrandingButtonImage: function() {
        return window.famobi.getBrandingButtonImage();
    },

    /**
     * Opens the branding placeholder URL.
     *
     * Important: It does NOT return a URL, so don't use it with window.open or location.href!
     */
    openBrandingLink: function() {
        window.famobi.openBrandingLink();
    },

    /**
     * Important: The game MUST NOT contain rewarded ad features!
     *
     * Regardless of the use of Famobi Analytics trackEvent calls, make sure to use this call
     * at typical breaks (e.g.: Pause, Retry, Continue, Menu...)
     * Important: Ads will only be shown in a given interval controlled by our API (usually every 60 to 90 seconds).
     *
     * @param {Function} callback - Callback called after watching an ad.
     * @param {*} context - Context of the callback.
     */
    showInterstitialAd: function() {
        return window.famobi.showInterstitialAd();
    },

    /**
     * 
     */
    hasRewardedAd: function() {
        return window.famobi.hasRewardedAd();  
    },

    rewardedAd: function(callback, context) {
        window.famobi.rewardedAd(callback.bind(context));
    },

    /**
     * Function that pauses/mutes the game
     *
     * @param {Function} onPauseFunction - Function that is executed before an ad.
     */
    setOnPauseRequested: function(onPauseFunction, context) {
        window.famobi_onPauseRequested = onPauseFunction.bind(context || this);
    },

    /**
     * Function that unpauses/unmutes the game
     *
     * @param {Function} onResumeFunction - Function that is executed after an ad.
     */
    setOnResumeRequested: function(onResumeFunction, context) {
        window.famobi_onResumeRequested = onResumeFunction.bind(context || this);
    },
    // endregion

    // region ------------------ LOCALISATION ------------------
    /**
     * Returns a corresponding value string associated with the famobi.json.
     * If there's no key either in the current language or in the "default" section, null is returned.
     *
     * @param {string} key - Unique key of the text.
     * @returns {string|null} Value of the key.
     */
    get: function(key) {
        return window.famobi.__(key) || key;
    },

    /**
     * Returns the current language code (two letters, lower-case).
     * Important: This function should be used as an exception only.
     * In 99% of the cases window.famobi.__(key) is sufficient.
     * The trick is just to limit your game to one language and use its texts as translation keys.
     *
     * @returns {string} Current language code (two letters, lower-case).
     */
    getCurrentLanguage: function() {
        return window.famobi.getCurrentLanguage();
    },        

    /**
     * Set local storage item.
     *
     * @param {string} key - Key of the value.
     * @param {*} value - Value that needs to be saved.
     */
    setLocalStorageItem: function(key, value) {
        window.famobi.localStorage.setItem(key, value);
    },

    /**
     * Get local storage item.
     *
     * @param {string} key - Key of the value.
     */
    getLocalStorageItem: function(key) {
        return window.famobi.localStorage.getItem(key);
    },

    /**
     * Remove the locale storage item.
     *
     * @param {string} key - Key of the value.
     */
    removeLocalStorageItem: function(key) {
        window.famobi.localStorage.removeItem(key);
    },

    /**
     * Remove the whole locale storage.
     */
    clearLocalStorage: function() {
        window.famobi.localStorage.clear();
    },

    /**
     * Set session storage item.
     *
     * @param {string} key - Key of the value.
     * @param {*} value - Value that needs to be saved.
     */
    setSessionStorageItem: function(key, value) {
        window.famobi.sessionStorage.setItem(key, value);
    },

    /**
     * Get session storage item.
     *
     * @param {string} key - Key of the value.
     */
    getSessionStorageItem: function(key) {
        window.famobi.sessionStorage.getItem(key);
    },

    /**
     * Remove the session storage item.
     *
     * @param {string} key - Key of the value.
     */
    removeSessionStorageItem: function(key) {
        window.famobi.sessionStorage.removeItem(key);
    },

    /**
     * Remove the whole session storage.
     */
    clearSessionStorage: function() {
        window.famobi.sessionStorage.clear();
    },

    /**
     * Get the current orientation.
     *
     * @returns {"landscape"|"portrait"|""} Orientation of the device.
     */
    getOrientation: function() {
        return window.famobi.getOrientation();
    },

    /**
     * Set the callback when orientation is changed.
     *
     * @param {Function} callback - Callback called when the orientation is changed.
     * @param {*} context - Context of the callback.
     */
    setOnOrientationChange: function(callback, context) {
        window.famobi.onOrientationChange(callback.bind(context));
    },
});


/**
 * DEPRECATED FUNCTIONS
 */
pc.extend(FamobiApi.prototype, {
    
    getMoreGamesButtonImage: function() {
        console.warn("GetMoreGamesButtonImage is deprecated, use getBrandingButtonImage instead");

        this.getBrandingButtonImage();
    },

    moreGamesLink: function() {
        console.warn("moreGamesLink is deprecated, use openBrandingLink instead");

        this.openBrandingLink();
    },

    submitHighscore: function() {
        console.warn("submitHighscore is deprecated, use window.famobi_analytics.trackEvent instead");
    },

    levelUp: function() {
        console.warn("levelUp is deprecated, use window.famobi_analytics.trackEvent instead");
    },

    gameOver: function() {
        console.warn("gameOver is deprecated, use window.famobi_analytics.trackEvent instead");
    },

    showAd: function() {
        console.warn("showAd is deprecated, use showInterstitalAd instead");
    },
});
