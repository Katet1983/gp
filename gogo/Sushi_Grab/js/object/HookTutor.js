(function(){
// Put user code here //
 
//  End of user code  //

game.object.HookTutor = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "hook";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"hook_open","sushi_00_hook","hook_close",
			"sushi_04_hook"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
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
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "hook_open", delay: 100 }]);
		this.addAnimation('get', [{ name: "sushi_00_hook", delay: 100 }]);
		this.addAnimation('close', [{ name: "hook_close", delay: 100 }]);
		this.addAnimation('get2', [{ name: "sushi_04_hook", delay: 100 }]);
		this.setCurrentAnimation('close');
		this.var = {};

        // Put user code here //
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        
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