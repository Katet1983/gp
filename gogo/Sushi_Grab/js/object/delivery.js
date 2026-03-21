(function(){
// Put user code here //
 
//  End of user code  //

game.object.delivery = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        verify(settings, ["pesanan"]);
        game.util.spread(this, settings, ["pesanan"]);
        
        this.sushi = [];
        this.sushi = this.pesanan;
        
        //console.log(Object.keys(this.sushi).length);
        
        if(Object.keys(this.sushi).length == 0){
        }
        else{
        //console.log(this.sushi);
        
        
            // if(Object.keys(this.sushi).length == 1){
                
            // this.delivery1 = me.pool.pull("sushimenuBase", this.pos.x-65, this.pos.y);
            // this.addChild(this.delivery1, 14);
            // this.delivery1.pesanansushi(this.sushi[0]);
            // this.delivery1.sushiturun();
            
            // }
            
            // if(Object.keys(this.sushi).length == 2){
                
            // this.delivery2 = me.pool.pull("sushimenuBase", this.pos.x-65, this.pos.y);
            // this.addChild(this.delivery2, 14);
            // this.delivery2.pesanansushi(this.sushi[0]);
            // this.delivery2.sushiturun();
            
            // this.delivery3 = me.pool.pull("sushimenuBase", this.pos.x, this.pos.y);
            // this.addChild(this.delivery3, 14);
            // this.delivery3.pesanansushi(this.sushi[1]);
            // this.delivery3.sushiturun();
            
            // }
            
            if(Object.keys(this.sushi).length == 3){
    
                this.delivery4 = me.pool.pull("sushimenuBase", this.pos.x-65, this.pos.y);
                this.addChild(this.delivery4, 14);
                this.delivery4.pesanansushi(this.sushi[0]);
                this.delivery4.sushiturun();
                
                this.delivery5 = me.pool.pull("sushimenuBase", this.pos.x, this.pos.y);
                this.addChild(this.delivery5, 14);
                this.delivery5.pesanansushi(this.sushi[1]);
                this.delivery5.sushiturun();
                
                this.delivery6 = me.pool.pull("sushimenuBase", this.pos.x+65, this.pos.y);
                this.addChild(this.delivery6, 14);
                this.delivery6.pesanansushi(this.sushi[2]);
                this.delivery6.sushiturun();
            
            }
            
        // var effect1 = me.pool.pull("particle1", 0, 0);
        // this.addChild(effect1,15);
        // effect1.setCurrentAnimation('Animation 1',()=>{
        //     this.removeChild(effect1);
        //     return false;
        // });
        
        // var effect2 = me.pool.pull("particle1", 130, 0);
        // this.addChild(effect2,15);
        // effect2.setCurrentAnimation('Animation 1',()=>{
        //     this.removeChild(effect2);
        //     return false;
        // });
        
        // var effect3 = me.pool.pull("particle1", 260, 0);
        // this.addChild(effect3,15);
        // effect3.setCurrentAnimation('Animation 1',()=>{
        //     this.removeChild(effect3);
        //     return false;
        // });
        let timeOutLimit2 = true;
        var smoke = me.pool.pull("smoker", this.pos.x, this.pos.y+40);
        this.addChild(smoke,15);
        smoke.setCurrentAnimation('Animation 1',()=>{
            if(timeOutLimit2){    
                timeOutLimit2 = false;
                this.removeChild(smoke);
                this.removeChild(this.delivery4);
                this.removeChild(this.delivery5);
                this.removeChild(this.delivery6);
                me.game.world.removeChild(this);
            }
            return false;
        });
        
        me.audio.play("sfx-deliverysushi");
        let timeOutLimit = true;
        this.timeouthapus = me.timer.setTimeout(()=>{
            if(timeOutLimit){    
                timeOutLimit = false;
                this.alpha = 0;
            }
        },1000);
        }
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Container, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.Container, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.Container, 'onDeactivateEvent');

        // Put user code here //
        me.timer.clearTimeout(this.timeouthapus);
        //  End of user code  //
	},

    // Put user code here //
 
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();