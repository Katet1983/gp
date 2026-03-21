(function(){
// Put user code here //
 
//  End of user code  //

game.object.particle1 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"particle-1-00","particle-1-01","particle-1-02",
			"particle-1-03","particle-1-04","particle-1-05",
			"particle-1-06","particle-1-07","particle-1-08",
			"particle-1-09","particle-1-10","particle-1-11",
			"particle-1-12","particle-1-13","particle-1-14",
			"particle-1-15","particle-1-16","particle-1-17",
			"particle-1-18","particle-1-19"
		], settings);
		settings.framewidth = settings.framewidth || 275;
		settings.frameheight = settings.frameheight || 275;
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

		this.addAnimation('Animation 1', [{ name: "particle-1-00", delay: 30 },{ name: "particle-1-01", delay: 30 },{ name: "particle-1-02", delay: 30 },{ name: "particle-1-03", delay: 30 },{ name: "particle-1-04", delay: 30 },{ name: "particle-1-05", delay: 30 },{ name: "particle-1-06", delay: 30 },{ name: "particle-1-07", delay: 30 },{ name: "particle-1-08", delay: 30 },{ name: "particle-1-09", delay: 30 },{ name: "particle-1-10", delay: 30 },{ name: "particle-1-11", delay: 30 },{ name: "particle-1-12", delay: 30 },{ name: "particle-1-13", delay: 30 },{ name: "particle-1-14", delay: 30 },{ name: "particle-1-15", delay: 30 },{ name: "particle-1-16", delay: 30 },{ name: "particle-1-17", delay: 30 },{ name: "particle-1-18", delay: 30 },{ name: "particle-1-19", delay: 30 }]);
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
    hapus:function(){
            this.setCurrentAnimation('Animation 1',()=>{
            me.game.world.removeChild(this);
            return false;
        });
    },
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();