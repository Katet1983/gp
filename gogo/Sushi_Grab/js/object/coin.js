(function(){
// Put user code here //
 
//  End of user code  //

game.object.coin = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"coin_down-00","coin_down-01","coin_down-02",
			"coin_down-03","coin_down-04","coin_down-05",
			"coin_up-00","coin_up-01","coin_up-02",
			"coin_up-03","coin_up-04","coin_up-05",
			"coin_up-06","coin_up-07","coin_up-08",
			"coin_up-09"
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

		this.addAnimation('Animation 1', [{ name: "coin_down-00", delay: 100 },{ name: "coin_down-01", delay: 100 },{ name: "coin_down-02", delay: 100 },{ name: "coin_down-03", delay: 100 },{ name: "coin_down-04", delay: 100 },{ name: "coin_down-05", delay: 100 }]);
		this.addAnimation('up', [{ name: "coin_up-00", delay: 70 },{ name: "coin_up-02", delay: 70 },{ name: "coin_up-03", delay: 70 },{ name: "coin_up-04", delay: 70 },{ name: "coin_up-05", delay: 70 },{ name: "coin_up-06", delay: 70 },{ name: "coin_up-07", delay: 70 },{ name: "coin_up-08", delay: 70 },{ name: "coin_up-09", delay: 70 }]);
		this.setCurrentAnimation('Animation 1');
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