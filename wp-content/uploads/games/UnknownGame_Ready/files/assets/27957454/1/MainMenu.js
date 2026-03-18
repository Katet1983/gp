var MainMenu = pc.createScript('mainMenu');

MainMenu.attributes.add('highscore', { type: 'entity' });

pc.extend(MainMenu.prototype, {
    onUIEntityOpen: function() {
    	window.famobi_analytics.trackScreen("SCREEN_HOME");
        this.highscore.element.text = String(pc.storageManager.get('highscore'));
    }
});
