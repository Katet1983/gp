(function(){
// Put user code here //

//  End of user code  //

game.object.testarrow = me.Sprite.extend({
	init: function(x, y, settings = {}){
		game.util.__populateAtlasIndices([
			"arrow_glow_01","arrow_glow_02","arrow_glow_03",
			"arrow_glow_04","arrow_glow_05"
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

		this.addAnimation('idle', [{ name: "arrow_glow_01", delay: 100 },{ name: "arrow_glow_02", delay: 100 },{ name: "arrow_glow_03", delay: 100 },{ name: "arrow_glow_04", delay: 100 },{ name: "arrow_glow_05", delay: 100 },{ name: "arrow_glow_04", delay: 100 },{ name: "arrow_glow_03", delay: 100 },{ name: "arrow_glow_02", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.flipX(true);
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