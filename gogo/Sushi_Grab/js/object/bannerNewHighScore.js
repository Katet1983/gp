(function(){
// Put user code here //
 
//  End of user code  //

game.object.bannerNewHighScore = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"day_frame_highscore-00","day_frame_highscore-01","day_frame_highscore-02",
			"day_frame_highscore-03","day_frame_highscore-04","day_frame_highscore-05",
			"day_frame_highscore-06","day_frame_highscore-07","day_frame_highscore-08",
			"day_frame_highscore-09","day_frame_highscore-10","day_frame_highscore-11",
			"day_frame_highscore-12","day_frame_highscore-13","day_frame_highscore-14"
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

		this.addAnimation('Animation 1', [{ name: "day_frame_highscore-00", delay: 70 },{ name: "day_frame_highscore-01", delay: 70 },{ name: "day_frame_highscore-02", delay: 70 },{ name: "day_frame_highscore-03", delay: 70 },{ name: "day_frame_highscore-04", delay: 70 },{ name: "day_frame_highscore-05", delay: 70 },{ name: "day_frame_highscore-06", delay: 70 },{ name: "day_frame_highscore-07", delay: 70 },{ name: "day_frame_highscore-08", delay: 70 },{ name: "day_frame_highscore-09", delay: 70 },{ name: "day_frame_highscore-10", delay: 70 },{ name: "day_frame_highscore-11", delay: 70 },{ name: "day_frame_highscore-12", delay: 70 },{ name: "day_frame_highscore-13", delay: 70 },{ name: "day_frame_highscore-14", delay: 70 }]);
		this.setCurrentAnimation('Animation 1');
		this.var = {};

        // Put user code here //
        this.setCurrentAnimation('Animation 1',()=>{return false});
        game.util.scale(this, 1.7);
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