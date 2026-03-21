(function(){
// Put user code here //
 
//  End of user code  //

game.object.hook = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "hook";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"hook_close","hook_open","sushi_00_hook",
			"sushi_01_hook","sushi_02_hook","sushi_03_hook",
			"sushi_04_hook","sushi_05_hook","sushi_06_hook",
			"sushi_07_hook","sushi_08_hook","sushi_09_hook",
			"sushi_10_hook","sushi_11_hook","sushi_12_hook",
			"sushi_13_hook","sushi_14_hook","sushi_15_hook",
			"sushi_16_hook","sushi_17_hook","sushi_18_hook",
			"sushi_19_hook","sushi_20_hook","sushi_21_hook",
			"sushi_22_hook","sushi_23_hook","sushi_24_hook",
			"sushi_25_hook","sushi_26_hook","sushi_27_hook",
			"sushi_28_hook","sushi_29_hook","sushi_30_hook",
			"sushi_31_hook","sushi_32_hook","sushi_I001_hook",
			"sushi_I002_hook","sushi_I003_hook","sushi_I004_hook",
			"sushi_I005_hook"
		], settings);
		settings.framewidth = settings.framewidth || 112;
		settings.frameheight = settings.frameheight || 541;
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('open', [{ name: "hook_open", delay: 1 }]);
		this.addAnimation('close', [{ name: "hook_close", delay: 1 }]);
		this.addAnimation('sushi_00', [{ name: "sushi_00_hook", delay: 1 }]);
		this.addAnimation('sushi_01', [{ name: "sushi_01_hook", delay: 1 }]);
		this.addAnimation('sushi_02', [{ name: "sushi_02_hook", delay: 1 }]);
		this.addAnimation('sushi_03', [{ name: "sushi_03_hook", delay: 1 }]);
		this.addAnimation('sushi_04', [{ name: "sushi_04_hook", delay: 1 }]);
		this.addAnimation('sushi_05', [{ name: "sushi_05_hook", delay: 1 }]);
		this.addAnimation('sushi_06', [{ name: "sushi_06_hook", delay: 1 }]);
		this.addAnimation('sushi_07', [{ name: "sushi_07_hook", delay: 1 }]);
		this.addAnimation('sushi_08', [{ name: "sushi_08_hook", delay: 1 }]);
		this.addAnimation('sushi_09', [{ name: "sushi_09_hook", delay: 1 }]);
		this.addAnimation('sushi_10', [{ name: "sushi_10_hook", delay: 1 }]);
		this.addAnimation('sushi_11', [{ name: "sushi_11_hook", delay: 1 }]);
		this.addAnimation('sushi_12', [{ name: "sushi_12_hook", delay: 1 }]);
		this.addAnimation('sushi_13', [{ name: "sushi_13_hook", delay: 1 }]);
		this.addAnimation('sushi_14', [{ name: "sushi_14_hook", delay: 1 }]);
		this.addAnimation('sushi_15', [{ name: "sushi_15_hook", delay: 1 }]);
		this.addAnimation('sushi_16', [{ name: "sushi_16_hook", delay: 1 }]);
		this.addAnimation('sushi_17', [{ name: "sushi_17_hook", delay: 1 }]);
		this.addAnimation('sushi_18', [{ name: "sushi_18_hook", delay: 1 }]);
		this.addAnimation('sushi_19', [{ name: "sushi_19_hook", delay: 1 }]);
		this.addAnimation('sushi_20', [{ name: "sushi_20_hook", delay: 1 }]);
		this.addAnimation('sushi_21', [{ name: "sushi_21_hook", delay: 1 }]);
		this.addAnimation('sushi_22', [{ name: "sushi_22_hook", delay: 1 }]);
		this.addAnimation('sushi_23', [{ name: "sushi_23_hook", delay: 1 }]);
		this.addAnimation('sushi_24', [{ name: "sushi_24_hook", delay: 1 }]);
		this.addAnimation('sushi_25', [{ name: "sushi_25_hook", delay: 1 }]);
		this.addAnimation('sushi_26', [{ name: "sushi_26_hook", delay: 1 }]);
		this.addAnimation('sushi_27', [{ name: "sushi_27_hook", delay: 1 }]);
		this.addAnimation('sushi_28', [{ name: "sushi_28_hook", delay: 1 }]);
		this.addAnimation('sushi_29', [{ name: "sushi_29_hook", delay: 1 }]);
		this.addAnimation('sushi_30', [{ name: "sushi_30_hook", delay: 1 }]);
		this.addAnimation('sushi_31', [{ name: "sushi_31_hook", delay: 1 }]);
		this.addAnimation('sushi_32', [{ name: "sushi_32_hook", delay: 1 }]);
		this.addAnimation('I001', [{ name: "sushi_I001_hook", delay: 1 }]);
		this.addAnimation('I002', [{ name: "sushi_I002_hook", delay: 1 }]);
		this.addAnimation('I003', [{ name: "sushi_I003_hook", delay: 1 }]);
		this.addAnimation('I005', [{ name: "sushi_I005_hook", delay: 1 }]);
		this.setCurrentAnimation('open');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape( me.pool.pull("me.Rect", 0 - bodyShapePos.x, 0 - bodyShapePos.y, 70, 20) );
		this.body.collisionType = game.collisionTypes.PLAYER_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ENEMY_OBJECT);
		this.body.gravity.y = 0;

		this.body.shapes[0].getBounds().x = 0;
		this.body.shapes[0].getBounds().y = 0;

		this.var = {};

        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        // if(fps > 90 && fps <= 120){
        // if(fps > 90){
        //     this.speed = 7*0.5;
        // }else if(fps > 60 && fps <= 90){
        //     this.speed = 7*0.75;
        // }else if(fps <= 60){
            this.speed = 7;
        // }
        
        this.buff = 1;
        if(this.container.playerItem.includes("I000")){
            let level = game.user.userData.item["I000"];
            let itemInfo = game.controller.data.getDataItemInfo();
            for(let i in game.controller.data.getDataItemInfo()){
                if(itemInfo[i].id == "I000"){
                    this.buff = itemInfo[i].buff[level-1];
                }
            }
        } /*else {
            this.speed = 15;
        }*/
        
        // this.body.getShape().translate(0, -this.height/2);
        
        this.naik = false;
        this.grab = false;
        this.dapet = true;
        this.buffFunc = null;
        this.speed *= this.buff;
        this.namasusi = null;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(this.pos.y <= 900 && this.naik){
            //this.speed *= buff;
            this.naikturun(1);
            this.grab = true;
            me.audio.stop("sfx-hooknaik");
            me.audio.play("sfx-hookturun", false, null, 0.5);
        }
        
        if(this.pos.y > 1345){
            this.naikturun(2);
            this.setCurrentAnimation('open');
            me.audio.stop("sfx-hookturun");
        }
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;
        
        if(other.body.collisionType === game.collisionTypes.ENEMY_OBJECT){
            if(this.dapet){
                this.dapet = false;
                
                //this.speed = 15;
                this.naikturun(1);
                
                if(!this.grab){
                    me.audio.stop("sfx-hooknaik");
                    me.audio.stop("sfx-hookturun");
                    me.audio.play("sfx-hookgotsushi");
                    me.audio.play("sfx-deliverysushi2");
                        
                    if(this.container.playerItem.includes(other.susitipe)){
                        this.buffFunc = other.Buff.bind(this);
                        // if(other.susitipe == "I005"){
                        //     if(this.buffFunc != null){
                        //         this.buffFunc();
                        //         this.buffFunc = null;
                        //     }
                        // }
                        
                        this.setCurrentAnimation(other.susitipe, () => {
                            this.grab = true;
                            return false;
                        }, true);
                    }
                    else{
                        //this.container.nempatinsushi(other.susitipe);
                        this.namasusi = other.susitipe;
                        this.setCurrentAnimation(other.susitipe, () => {
                            this.grab = true;
                            return false;
                        }, true);
                    }

                }
                let limitTimeOut = true;
                this.clear1 = me.timer.setTimeout(()=>{
                    if(limitTimeOut){
                        limitTimeOut = false;
                        this.dapet = true;
                    }
                }, 300);
            }
	    }
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
        me.timer.clearTimeout(this.clear1);
        me.timer.clearTimeout(this.clear2);
        //  End of user code  //
	},

    // Put user code here //
    cobagerak : function(){
        if(!this.naik){
            this.naikturun(0);
            me.audio.play("sfx-hooknaik", false, null, 0.5);
        }
    },
    
    naikturun : function(arah){
        switch (arah){
        case 0: 
                this.pos.x = this.container.buttonhook.Xpos.gameX;
                this.container.play = false;
                this.body.vel.y = -this.speed;
                this.naik = true;
                this.container.munculinsushi = false;
                this.namasusi = null;
        break;
        case 1:
                this.body.vel.y = this.speed;
                //this.setCurrentAnimation('close');
                //this.naik = false;
        break;
        case 2:
            
            let limitTimeOut = true;
                this.clear2 = me.timer.setTimeout(()=>{
                    if(limitTimeOut){
                        limitTimeOut = false;
                        this.container.play = true;
                    }
                }, 100);
                this.pos.set(this.pos.x, 1345, 30);
                this.body.vel.y = 0; 
                this.naik = false;
                //console.log(this.sushitipe);
                if(this.namasusi != null){
                    this.container.nempatinsushi( this.namasusi);
                }
                if(this.buffFunc != null){
                    this.buffFunc();
                    this.buffFunc = null;
                }
                this.grab = false;
        break;
        default:
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();