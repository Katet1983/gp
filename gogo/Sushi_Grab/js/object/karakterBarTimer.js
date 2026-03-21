(function(){
// Put user code here //
 
//  End of user code  //

game.object.karakterBarTimer = me.Renderable.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};


        // Put user code here //
        
        //  End of user code  //

		this._super(me.Renderable, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.flipY(true);
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};

        // Put user code here //
        this.tinggi = 140;
        this.time = 10;
        this.backColor = "dimgrey";
        this.timeKurang = 0;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Renderable, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Renderable, 'draw', [renderer, rect]);
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
    draw : function(renderer){
        this._super(me.Renderable, 'draw', [renderer]);
        var x = this.pos.x,
            y = this.pos.y,
            green = "#00FF00",
            red = "red",
            yellow = "yellow";
        
        renderer.setColor(this.backColor);
        renderer.fillRect(x, y, 12.5, 140);
        
        if(this.tinggi !== 0){
            if(this.time >= 2){
                renderer.setColor(green);
            }else if(this.time >= 0){
                renderer.setColor(red);
            }
            
            if(this.tinggi <= 0){
                this.tinggi = 0;
                renderer.fillRect(x, y, 12.5, 0);
            }else{
                renderer.fillRect(x, y, 12.5, this.tinggi);
            }
            
        }
    },
    
    barFunc: function(val, maxTime){
        let newWidth = val;
        this.time = newWidth;
        this.timeKurang += 1;//0.015;
        if(this.timeKurang >= 1){
            this.timeKurang = 0;
            this.tinggi -= ((10 / maxTime) * 14);
            this.container.angkaCD.setText(Math.round(this.time));
        }
        return false;
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();