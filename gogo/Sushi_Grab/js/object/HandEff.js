(function(){
// Put user code here //
 
//  End of user code  //

game.object.HandEff = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"Klik fx_0000","Klik fx_0001","Klik fx_0002",
			"Klik fx_0003","Klik fx_0004","Klik fx_0005",
			"Klik fx_0006","Klik fx_0007","Klik fx_0008",
			"Klik fx_0009"
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

		this.addAnimation('idle', [{ name: "Klik fx_0000", delay: 100 },{ name: "Klik fx_0001", delay: 100 },{ name: "Klik fx_0002", delay: 100 },{ name: "Klik fx_0003", delay: 100 },{ name: "Klik fx_0004", delay: 100 },{ name: "Klik fx_0005", delay: 100 },{ name: "Klik fx_0006", delay: 100 },{ name: "Klik fx_0007", delay: 100 },{ name: "Klik fx_0008", delay: 100 },{ name: "Klik fx_0009", delay: 100 }]);
		this.addAnimation('pause', [{ name: "Klik fx_0005", delay: 100 }]);
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