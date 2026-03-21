(function(){
// Put user code here //
 
//  End of user code  //

game.object.timerGame = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"time_counter","time_frame","time_frame_back"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 31;
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

		this.addAnimation('time-counter', [{ name: "time_counter", delay: 100 }]);
		this.addAnimation('time-frame', [{ name: "time_frame", delay: 100 }]);
		this.addAnimation('time-frame-back', [{ name: "time_frame_back", delay: 100 }]);
		this.setCurrentAnimation('time-counter');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape(me.pool.pull("me.Rect", 0 - bodyShapePos.y, 0 - bodyShapePos.y, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.NO_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.NO_OBJECT);
		this.body.gravity.y = 0;

		this.var = {};

        // Put user code here //
        verify(settings, ["container"]);
        game.util.spread(this, settings, ["container"]);
        
        this.duration       = 60;
        this.durationText   = 60;
        this.xMax = 60;
        this.reset = true;
        this.timeReset = 0;
        this.startTime = false;
        this.posXAwal = this.pos.x;
        this.posXdetik0 = this.posXAwal-520;
        this.lastChance = false;
        
        // if(fps > 90 && fps <= 120){
        // if(fps > 90){
        //     this.timeDouble = 2;
        // }else if(fps > 60 && fps <= 90){
        //     this.timeDouble = 1.5;
        // }else if(fps <= 60){
            this.timeDouble = 1;
        // }
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(this.pos == undefined){
                
        }else{
            this.timeReset += 0.017;
            if(this.startTime && this.timeReset >= 1*this.timeDouble){
                this.timeReset = 0;
                if(this.duration > this.xMax && this.xMax < 120){
                    this.xMax = this.duration;//60
                }
                
                this.duration -= 1;
                this.durationText -= 1;
    
                if(this.pos.x > this.posXdetik0){
                    this.pos.x -= 520/this.xMax;
                    this.container.textTimeAnim.pos.x -= 520/this.xMax;
                }else{
                    this.pos.x = this.posXdetik0;
                    this.container.textTimeAnim.pos.x = this.container.posXtextTimeAnimdetik0;
                }
                
                if(this.duration < 120 && this.duration >= 70){
                    this.container.textTime.setText("01:"+this.durationText);
                } else if(this.duration < 70 && this.duration >= 60){
                    this.container.textTime.setText("01:0"+this.durationText);
                } else if(this.duration < 60 && this.duration >= 10){
                    this.container.textTime.setText("00:"+this.durationText);
                } else if(this.duration < 10 && this.duration > 0){
                    this.container.textTime.setText("00:0"+this.durationText);
                }
                if(this.duration <= 0){
                    this.container.textTime.setText("00:00");
                }
                
                if(this.duration < 0){
                    if(this.lastChance){
                        this.duration = -1;
                        this.durationText = -1;
                    }else{
                        this.container.tweenBarTime();
                        this.container.cekTargetScore();   
                    }
                }
                
                if(this.durationText <= 0 && this.duration >= 60){
                    this.durationText += 60;
                }
            }
        }
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        
        //  End of user code  //
		return isSolid;
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
        me.timer.clearInterval(this.interval);
        //  End of user code  //
	},

    // Put user code here //
    timeFunc: function(callback){
        this.startTime = true;
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();