(function(){
// Put user code here //
 
//  End of user code  //

game.object.BackTutorBtn = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"arrow_glow_flip_01","arrow_glow_flip_02","arrow_glow_flip_03",
			"arrow_glow_flip_04","arrow_glow_flip_05"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.originX = x;
        this.originY = y;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "arrow_glow_flip_01", delay: 100 },{ name: "arrow_glow_flip_02", delay: 100 },{ name: "arrow_glow_flip_03", delay: 100 },{ name: "arrow_glow_flip_04", delay: 100 },{ name: "arrow_glow_flip_05", delay: 100 },{ name: "arrow_glow_flip_04", delay: 100 },{ name: "arrow_glow_flip_03", delay: 100 },{ name: "arrow_glow_flip_02", delay: 100 }]);
		this.addAnimation('off', [{ name: "arrow_glow_flip_01", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        impose(settings, "func", function(){});
        impose(settings, "scaleX", 1.005);
        impose(settings, "scaleY", 0.99);
        impose(settings, "isPenetrate", false);
        game.util.spread(this, settings, ["func", "scaleX", "scaleY", "isPenetrate", "btnImages"]);
        
        this.adjustPosSub = me.event.subscribe(me.event.LEVEL_LOADED, () => {
            this.pos.x += this.originX;
            this.pos.y += this.originY;
            
            if(Array.isArray(this.btnUnion)){
                this.btnUnion.forEach(btn => {
                    btn.pos.x += this.originX;
                    btn.pos.y += this.originY;
                });
            }
        });
        
        this.once = true;
        
        this.oriPos = this.pos.x;
        this.targetPos = this.pos.x - 10;
        
         this.tweenMove = new me.Tween(this.pos).to({x : this.targetPos}, 500).onComplete(()=>{
            this.tweenMove2.start();
        });
        this.tweenMove.start();
        this.tweenMove2 = new me.Tween(this.pos).to({x : this.oriPos}, 500).onComplete(()=>{
                this.tweenMove.start();
        }); 
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.GUI_Object, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

        // Put user code here //
        me.event.unsubscribe(this.adjustPosSub);
        this.tweenMove.stop();
        this.tweenMove2.stop();
        //  End of user code  //
	},

    // Put user code here //
    onClick: function(event){
        if(event.button === 0 && this.once && this.alpha == 1){
            me.audio.play("sfx-button");  
            this.once = false;
            this.currentTransform.translate(this.originX, this.originY);
            this.currentTransform.scale(this.scaleX, this.scaleY);
            this.currentTransform.translate(-this.originX, -this.originY);
            
            if(Array.isArray(this.btnImages)){
                this.btnImages.forEach((img) => {
                    img.currentTransform.translate(this.originX, this.originY);
                    img.currentTransform.scale(this.scaleX, this.scaleY);
                    img.currentTransform.translate(-this.originX, -this.originY);
                });
            }
            
            me.game.repaint();
            
            setTimeout(function(){
                this.Release();
            }.bind(this), 50);
            return this.isPenetrate;
        }
    },
    
    Release: function(){
        this.currentTransform.identity();
        if(Array.isArray(this.btnImages)){
            this.btnImages.forEach(function(img){
                img.currentTransform.identity();
            });
        }
        
        me.game.repaint();
        this.func();
        return this.isPenetrate;
    },
    
    func: function(){
        if(this.alpha == 1){
            this.once = true;
            this.container.Move(this.direction);
        }
        
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();