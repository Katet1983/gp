var LocalisationManager = pc.createScript('localisationManager');

LocalisationManager.attributes.add('localisationJSON', { type: 'asset', assetType: 'json' });
LocalisationManager.attributes.add('defaultLanguage', { type: 'string', default: 'en', 'title': 'Default Language', enum: [
    { 'German':     'de' },
    { 'English':    'en' },
    { 'Turkish':    'tr' },
    { 'Polish':     'pl' },
    { 'Russian':    'ru' },
    { 'Dutch':      'nl' },
    { 'Spanish':    'es' },
    { 'Portuguese': 'pt' },
    { 'French':     'fr' },
]});

pc.extend(LocalisationManager.prototype, {
    
    postInitialize: function() {
        pc.localisationManager = this;
        
        this._localisations = this.localisationJSON.resource;
        // create a default language
        // Get current language
        this._currentLanguage = pc.famobiAPI.getCurrentLanguage();
        // Check if the current language is available with our localisations
        this._currentLanguage = (typeof this._localisations[this.currentLanguage] !== 'undefined') ? this.currentLanguage : this.defaultLanguage;
                
        this._localisation = this._localisations[this.currentLanguage];
    },
    
    _replaceVariables: function(text, variables) {
        if (!Array.isArray(variables) || variables.length === 0) {
            return text;
        }
        
        var newText = text;
        
        for (var i = 0; i < variables.length; i += 1) {
            newText = newText.replace('{' + i + '}', variables[i]);
        }
        
        return newText;
    },
    
    get: function(key, variables) {
        return this._replaceVariables(this._localisation[key], variables);
    },
});

