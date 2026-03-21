(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnPause = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"pause pressed","pause"
		], settings);
		settings.framewidth = settings.framewidth || 49;
		settings.frameheight = settings.frameheight || 38;
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

		this.addAnimation('idle', [{ name: "pause", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "pause pressed", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        this.pressed = false;
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
        if(this.alpha == 1){
            this.container.disablehook = true;
            if(this.isCurrentAnimation('idle')){
                me.audio.play("sfx-button");
            
                this.pressed = true;
                this.setCurrentAnimation('pressed');
                me.game.repaint();
                setTimeout(function(){
                    this.setCurrentAnimation('idle', function(){}.bind(this));
                    this.func();
                }.bind(this), 200);
            }
        }
        //  End of user code  //
	},

    // Put user code here //
    onRelease: function(){
            
        
    },
    
    func : function(){
        if(this.pressed){
            this.pressed = false;
            this.container.pauseContainer.Show();
            let limitTimeout = true;
            this.timer = me.timer.setTimeout(()=>{
                if(limitTimeout){
                    limitTimeout = false;
                    this.timePause = me.timer.setTimeout(()=>{
                        game.util.pauseGame();
                    }, 300);                        
                    me.audio.stop("sfx-anak-marah");
                    me.audio.stop("sfx-anak-marah2mp3");
                    me.audio.stop("sfx-anak-senang");
                    me.audio.stop("sfx-anakmuda-marah");
                    me.audio.stop("sfx-anakmuda-marah2");
                    me.audio.stop("sfx-anakmuda-senang");
                    me.audio.stop("sfx-bapak2-marah");
                    me.audio.stop("sfx-bapak2-senang");
                    me.audio.stop("sfx-cewe-marah");
                    me.audio.stop("sfx-cewe-senang");
                    me.audio.stop("sfx-nenek-marah");
                    me.audio.stop("sfx-nenek-senang");
                    me.audio.stop("sfx-robot-marah");
                    me.audio.stop("sfx-robot-senang");
                    me.audio.stop("sfx-belanja");
                    me.audio.stop("sfx-coin");
                    me.audio.stop("sfx-deliverysushi");
                    me.audio.stop("sfx-deliverysushi2");
                    me.audio.stop("sfx-getsushi");
                    me.audio.stop("sfx-hookgotsushi");
                    me.audio.stop("sfx-hooknaik");
                    me.audio.stop("sfx-hookturun");
                    me.audio.stop("sfx-removepiring");
                    me.audio.stop("sfx-slidedays");
                    me.audio.stop("sfx-slideout");
                }
            }, 100);
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();