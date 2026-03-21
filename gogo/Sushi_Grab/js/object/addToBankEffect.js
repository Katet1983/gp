(function(){
// Put user code here //
 
//  End of user code  //

game.object.addToBankEffect = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"addToBank - 00","addToBank - 01","addToBank - 02",
			"addToBank - 03","addToBank - 04","addToBank - 05",
			"addToBank - 06","addToBank - 07","addToBank - 08",
			"addToBank - 09","addToBank - 10","addToBank - 11",
			"addToBank - 12","addToBankSpark - 00","addToBankSpark - 01",
			"addToBankSpark - 02","addToBankSpark - 03","addToBankSpark - 04",
			"addToBankSpark - 05"
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

		this.addAnimation('Up', [{ name: "addToBank - 00", delay: 70 },{ name: "addToBank - 01", delay: 70 },{ name: "addToBank - 02", delay: 70 },{ name: "addToBank - 03", delay: 70 },{ name: "addToBank - 04", delay: 70 },{ name: "addToBank - 05", delay: 70 },{ name: "addToBank - 06", delay: 70 },{ name: "addToBank - 07", delay: 70 },{ name: "addToBank - 08", delay: 70 },{ name: "addToBank - 09", delay: 70 },{ name: "addToBank - 10", delay: 70 },{ name: "addToBank - 11", delay: 70 },{ name: "addToBank - 12", delay: 70 }]);
		this.addAnimation('spark', [{ name: "addToBankSpark - 00", delay: 70 },{ name: "addToBankSpark - 01", delay: 70 },{ name: "addToBankSpark - 02", delay: 70 },{ name: "addToBankSpark - 03", delay: 70 },{ name: "addToBankSpark - 04", delay: 70 },{ name: "addToBankSpark - 05", delay: 70 }]);
		this.setCurrentAnimation('Up');
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