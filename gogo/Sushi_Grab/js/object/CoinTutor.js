(function(){
// Put user code here //
 
//  End of user code  //

game.object.CoinTutor = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"coint down_0000","coint down_0001","coint down_0002",
			"coint down_0003","coint down_0004","coint down_0005",
			"coint down_0006","coint down_0007","coint down_0008",
			"coint down_0009","coint down_0010"
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

		this.addAnimation('idle', [{ name: "coint down_0000", delay: 100 },{ name: "coint down_0001", delay: 100 },{ name: "coint down_0002", delay: 100 },{ name: "coint down_0003", delay: 100 },{ name: "coint down_0004", delay: 100 },{ name: "coint down_0005", delay: 100 },{ name: "coint down_0006", delay: 100 },{ name: "coint down_0007", delay: 100 },{ name: "coint down_0008", delay: 100 },{ name: "coint down_0009", delay: 100 },{ name: "coint down_0010", delay: 100 }]);
		this.addAnimation('stop', [{ name: "coint down_0010", delay: 100 }]);
		this.setCurrentAnimation('idle');
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