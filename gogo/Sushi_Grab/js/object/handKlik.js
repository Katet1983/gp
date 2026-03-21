(function(){
// Put user code here //

//  End of user code  //

game.object.handKlik = me.Sprite.extend({
	init: function(x, y, settings = {}){
		game.util.__populateAtlasIndices([
			"handEffect-1","handEffect-2","handEffect-3",
			"handEffect-4","handEffect-5","handEffect-6",
			"handEffectKlik-04","handEffectKlik-05","handEffectKlik-06",
			"handEffectKlik-07","handEffectKlik-08","handEffectKlik-09",
			"handEffectKlik-10","handEffectKlik-01","handEffectKlik-02",
			"handEffectKlik-03"
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
		this.alpha = 0;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('1', [{ name: "handEffect-1", delay: 70 },{ name: "handEffect-2", delay: 70 },{ name: "handEffect-3", delay: 70 },{ name: "handEffect-4", delay: 70 },{ name: "handEffect-5", delay: 70 },{ name: "handEffect-6", delay: 70 }]);
		this.addAnimation('2', [{ name: "handEffectKlik-01", delay: 70 },{ name: "handEffectKlik-02", delay: 70 },{ name: "handEffectKlik-03", delay: 70 },{ name: "handEffectKlik-04", delay: 70 },{ name: "handEffectKlik-05", delay: 70 },{ name: "handEffectKlik-06", delay: 70 },{ name: "handEffectKlik-07", delay: 70 },{ name: "handEffectKlik-08", delay: 70 },{ name: "handEffectKlik-09", delay: 70 },{ name: "handEffectKlik-10", delay: 70 }]);
		this.setCurrentAnimation('1');
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