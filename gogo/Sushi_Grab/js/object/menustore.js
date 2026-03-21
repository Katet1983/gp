(function(){
// Put user code here //
 
//  End of user code  //

game.object.menustore = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"store_000","store_001"
		], settings);
		settings.framewidth = settings.framewidth || 540;
		settings.frameheight = settings.frameheight || 850;
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

		this.addAnimation('Animation 1', [{ name: "store_001", delay: 100 },{ name: "store_000", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_000", delay: 100 },{ name: "store_000", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_000", delay: 100 },{ name: "store_000", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_001", delay: 100 },{ name: "store_001", delay: 100 }]);
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