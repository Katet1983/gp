(function(){
// Put user code here //
 
//  End of user code  //

game.object.audioAPICheck = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "hook";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"sushi_menu_base"
		], settings);
		settings.framewidth = settings.framewidth || 59;
		settings.frameheight = settings.frameheight || 59;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 0;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = true;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
    	if(audioOn == false && game.user.userData.mute === 0){
            me.audio.muteAll();
            game.controller.data.setAudioCheck(1);
        }
        if(audioOn && game.user.userData.mute === 1){
        	me.device.focus();
            me.audio.unmuteAll();
            game.controller.data.setAudioCheck(0);
        }
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();