(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnHelp = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        let vars = ["region","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = this.region;
		settings.folder = "gameplay";
		settings.func   = this.func;
		
        settings.image = game.textureMap.get(settings.folder);
        settings.framewidth = undefined;
        settings.frameheight = undefined;
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
		this.var = {};

        // Put user code here //
        impose(settings, "func", function(){});
        impose(settings, "scaleX", 0.89);
        impose(settings, "scaleY", 0.89);
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
        this.once = true;
        this.func();
        return this.isPenetrate;
    },
    
    func: function(){
        if(this.alpha == 1 && this.container.pressButton){
            this.container.pressButton = false;
            iniDipause = false;
            this.container.tuttor = false;
            this.container.Hide();
            this.container.tutorialContainer.Show();
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();