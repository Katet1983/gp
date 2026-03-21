(function(){
// Put user code here //
 
//  End of user code  //

game.object.angryEffect2 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"angryEffect-2"
		], settings);
		settings.framewidth = settings.framewidth || 35;
		settings.frameheight = settings.frameheight || 75;
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
		this.var = {};

        // Put user code here //
        let vars = ["sudutX","sudutY"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        this.life = true;
        this.tweenPlay = false;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        game.util.rotate(this, this.sudutX, this.sudutY);
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
    tweenOn: function(){
        this.tweenPlay = true;
        this.tweenAlpha = new me.Tween(this)
        .to({alpha:0.2}, 50)
        .yoyo(true)
        .repeat(15)
        .onComplete(()=>{
            this.tweenPlay = false;
            if(this.life){
                this.life = false;
                me.game.world.removeChild(this);
            }
        });
        
        this.tweenAlpha.start();
    },
    
    tweenOff: function(){
        if(this.tweenPlay){
            this.tweenAlpha.stop();
            if(this.life){
                this.life = false;
                me.game.world.removeChild(this);
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();