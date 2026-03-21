(function(){
// Put user code here //
 
//  End of user code  //

game.object.particle2 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"particle-2-00","particle-2-01","particle-2-02",
			"particle-2-03","particle-2-04","particle-2-05",
			"particle-2-06","particle-2-07","particle-2-08",
			"particle-2-09","particle-2-10","particle-2-11",
			"particle-2-12","particle-2-13","particle-2-14",
			"particle-2-15","particle-2-16","particle-2-17",
			"particle-2-18","particle-2-19","particle-2-20",
			"particle-2-21","particle-2-22","particle-2-23",
			"particle-2-24","particle-2-25"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
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

		this.addAnimation('Animation 1', [{ name: "particle-2-00", delay: 100 },{ name: "particle-2-01", delay: 100 },{ name: "particle-2-02", delay: 100 },{ name: "particle-2-03", delay: 100 },{ name: "particle-2-04", delay: 100 },{ name: "particle-2-05", delay: 100 },{ name: "particle-2-06", delay: 100 },{ name: "particle-2-07", delay: 100 },{ name: "particle-2-08", delay: 100 },{ name: "particle-2-09", delay: 100 },{ name: "particle-2-10", delay: 100 },{ name: "particle-2-11", delay: 100 },{ name: "particle-2-12", delay: 100 },{ name: "particle-2-13", delay: 100 },{ name: "particle-2-14", delay: 100 },{ name: "particle-2-15", delay: 100 },{ name: "particle-2-16", delay: 100 },{ name: "particle-2-17", delay: 100 },{ name: "particle-2-18", delay: 100 },{ name: "particle-2-19", delay: 100 },{ name: "particle-2-20", delay: 100 },{ name: "particle-2-21", delay: 100 },{ name: "particle-2-22", delay: 100 },{ name: "particle-2-23", delay: 100 },{ name: "particle-2-24", delay: 100 },{ name: "particle-2-25", delay: 100 }]);
		this.setCurrentAnimation('Animation 1');
		this.var = {};

        // Put user code here //
        // this.setCurrentAnimation('Animation 1',()=>{
        //     me.game.world.removeChild(this);
        //     return false;
        // });
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