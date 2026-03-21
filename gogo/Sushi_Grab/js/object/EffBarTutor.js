(function(){
// Put user code here //
 
//  End of user code  //

game.object.EffBarTutor = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"FX TIME BAR_00000","FX TIME BAR_00001","FX TIME BAR_00002",
			"FX TIME BAR_00003","FX TIME BAR_00004","FX TIME BAR_00005",
			"FX TIME BAR_00006","FX TIME BAR_00007","FX TIME BAR_00008",
			"FX TIME BAR_00009","FX TIME BAR_00010","FX TIME BAR_00011",
			"FX TIME BAR_00012","FX TIME BAR_00013","FX TIME BAR_00014",
			"FX TIME BAR_00015","FX TIME BAR_00016","FX TIME BAR_00017",
			"FX TIME BAR_00018","FX TIME BAR_00019"
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

		this.addAnimation('idle', [{ name: "FX TIME BAR_00000", delay: 25 },{ name: "FX TIME BAR_00001", delay: 25 },{ name: "FX TIME BAR_00002", delay: 25 },{ name: "FX TIME BAR_00003", delay: 25 },{ name: "FX TIME BAR_00004", delay: 25 },{ name: "FX TIME BAR_00005", delay: 25 },{ name: "FX TIME BAR_00006", delay: 25 },{ name: "FX TIME BAR_00007", delay: 25 },{ name: "FX TIME BAR_00008", delay: 25 },{ name: "FX TIME BAR_00009", delay: 25 },{ name: "FX TIME BAR_00010", delay: 25 },{ name: "FX TIME BAR_00011", delay: 25 },{ name: "FX TIME BAR_00012", delay: 25 },{ name: "FX TIME BAR_00013", delay: 25 },{ name: "FX TIME BAR_00014", delay: 25 },{ name: "FX TIME BAR_00015", delay: 25 },{ name: "FX TIME BAR_00016", delay: 25 },{ name: "FX TIME BAR_00017", delay: 25 },{ name: "FX TIME BAR_00018", delay: 25 },{ name: "FX TIME BAR_00019", delay: 25 }]);
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