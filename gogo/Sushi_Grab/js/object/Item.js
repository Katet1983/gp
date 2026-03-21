(function(){
// Put user code here //
 
//  End of user code  //

game.object.Item = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Shop";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"shop_frame_cake","shop_frame_cat","shop_frame_crane",
			"shop_frame_money","shop_frame_rainbow","shop_frame_time"
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('I000', [{ name: "shop_frame_crane", delay: 100 }]);
		this.addAnimation('I001', [{ name: "shop_frame_money", delay: 100 }]);
		this.addAnimation('I002', [{ name: "shop_frame_time", delay: 100 }]);
		this.addAnimation('I003', [{ name: "shop_frame_cake", delay: 100 }]);
		this.addAnimation('I004', [{ name: "shop_frame_cat", delay: 100 }]);
		this.addAnimation('I005', [{ name: "shop_frame_rainbow", delay: 100 }]);
		this.setCurrentAnimation('I000');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
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

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
 
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();