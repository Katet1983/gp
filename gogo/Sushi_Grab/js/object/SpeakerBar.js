(function(){
// Put user code here //
 
//  End of user code  //

game.object.SpeakerBar = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"Pause_button_soundOff","Pause_button_soundON"
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

		this.addAnimation('able', [{ name: "Pause_button_soundON", delay: 100 }]);
		this.addAnimation('disable', [{ name: "Pause_button_soundOff", delay: 100 }]);
		this.setCurrentAnimation('able');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.press = true;
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
        this.ClickFunc();
        //  End of user code  //
	},

    // Put user code here //
    ClickFunc : function(){
        if(this.alpha == 1){
            if(game.var.muteSfx){
                game.var.muteSfx = false;
            }
            else{
                game.var.muteSfx = true;
            }
            
            this.container.MoveSpeakerIcon();
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();