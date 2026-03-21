(function(){
// Put user code here //
 
//  End of user code  //

game.object.smoker = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"smoke effect_0000","smoke effect_0001","smoke effect_0002",
			"smoke effect_0003","smoke effect_0004","smoke effect_0005",
			"smoke effect_0006","smoke effect_0007","smoke effect_0008",
			"smoke effect_0009","smoke effect_0010","smoke effect_0011",
			"smoke effect_0012","smoke effect_0013","smoke effect_0014",
			"smoke effect_0015","smoke effect_0016","smoke effect_0017",
			"smoke effect_0018","smoke effect_0019","smoke effect_0020",
			"smoke effect_0021"
		], settings);
		settings.framewidth = settings.framewidth || 400;
		settings.frameheight = settings.frameheight || 250;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('Animation 1', [{ name: "smoke effect_0000", delay: 50 },{ name: "smoke effect_0002", delay: 50 },{ name: "smoke effect_0004", delay: 50 },{ name: "smoke effect_0006", delay: 50 },{ name: "smoke effect_0008", delay: 50 },{ name: "smoke effect_0010", delay: 50 },{ name: "smoke effect_0012", delay: 50 },{ name: "smoke effect_0014", delay: 50 },{ name: "smoke effect_0016", delay: 50 },{ name: "smoke effect_0018", delay: 50 },{ name: "smoke effect_0020", delay: 50 }]);
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