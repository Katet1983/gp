(function(){
// Put user code here //
 
//  End of user code  //

game.object.karakterBase = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.id = settings.id;
        this.angryEffect = settings.angryEffect;
        this.animationMotions = settings.animationMotions;
        this.blink = settings.blink;
        settings.image = game.textureMap.get("gameplay");
        this.suarasenang = settings.suarasenang;
        this.suaramarah = settings.suaramarah;
        
        this.listAnimation = [];
        let animationKeyList = {}, //for add animation, motion with imageNameList
            imageNameList = [],
            fullMotions = game.util.getFullMotionList(this.id, this.animationMotions);
            
        fullMotions.forEach((motion) => {
            let imageNames = game.util.createImageNameList(motion.name, motion.count);
            animationKeyList[motion.name] = imageNames;
            this.listAnimation.push(imageNames);
            Array.prototype.push.apply(imageNameList, imageNames);
        });
        
        let atlasIndices = game.util.populateAtlasIndices(settings.image, imageNameList);
        game.util.spreadAll(settings, atlasIndices);
        // --
        
        this.originX = x;
        this.originY = y;
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
        
        this.addAnimation("angry", this.listAnimation[0]);
        this.addAnimation("sad", this.listAnimation[2]);
        this.addAnimation("happy", this.listAnimation[3]);
        if(this.blink){
            this.addAnimation("basic", [{name : this.listAnimation[1], delay:2000}, {name: this.listAnimation[4], delay:100}, {name : this.listAnimation[1], delay:1500}]);//{this.listAnimation[1], delay:50 }, {this.listAnimation[1], delay: 50 });
        }else{
            this.addAnimation("basic", [{name : this.listAnimation[1], delay:2000}, {name: this.listAnimation[5], delay:2000}, {name: this.listAnimation[4], delay:2000}, {name : this.listAnimation[1], delay:1500}]);
        }
        
        this.setCurrentAnimation('basic');
        
        this.finish = false;
        this.angryEmotion = true;
        this.end = false;
        
        this.buff = 0;
        if(this.container.container.playerItem.includes("I004")){
            let level = game.user.userData.item["I004"];
            let itemInfo = game.controller.data.getDataItemInfo();
            for(let i in game.controller.data.getDataItemInfo()){
                if(itemInfo[i].id == "I004"){
                    this.buff = itemInfo[i].buff[level  -1];
                }
            }
        }

        
        this.maxTime = 10 + this.buff;
        this.timeDuration = this.maxTime;
        this.timeReset = 0;
        this.main = true;
        this.telahEnd = true;
        this.limitEnd = true;
        this.timeIdle = 0;
        this.karakterTimerPlay = false;
        this.deleteKarakter = true;
        this.timeOutBool = true;
        this.idleCondition = false;
        this.stopRun = true;
        this.justOnce = true;
        this.charXpos;
        this.limit;
        if(me.game.viewport.width > 1700){
            this.charXpos = me.game.viewport.width/2-438.75-275;
            this.limit = me.game.viewport.width/2+438.75+this.width/2;
        }else{
            this.limit = me.game.viewport.width+this.width/2;
            this.charXpos = -200;
        }
        
        this.speedIdle = 0;
        // if(fps > 90 && fps <= 120){
        // if(fps > 90){
        //     this.speed = 15*0.5;
        //     this.speedIdle = 0.375*0.5;
        //     this.timeDouble = 2;
        // }else if(fps > 60 && fps <= 90){
        //     this.speed = 15*0.75;
        //     this.speedIdle = 0.375*0.75;
        //     this.timeDouble = 1.5;
        // }else if(fps <= 60){
            this.speed = 15;
            this.speedIdle = 0.375;
            this.timeDouble = 1;
        // }
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(this.pos.x >= me.game.viewport.width/2 && this.stopRun){
            this.stopRun = false;
            this.body.vel.x = 0;
            this.idleCondition = true;
            
        }
        
        if(this.idleCondition){
            if(this.justOnce){
                this.justOnce = false;
                this.container.masihMain = true;
                this.container.container.disablehook = false;
                this.container.container.gabisa = false;
            }
            this.body.vel.x = 0;
            this.timeIdle += 0.1;
            if(this.pos.y <= 390 && this.timeIdle >= 2){
                this.timeIdle = 0;
                this.body.vel.y = this.speedIdle;
            }
            
            if(this.pos.y >= 405 && this.timeIdle >= 2){
                this.timeIdle = 0;
                this.body.vel.y = -this.speedIdle;
            }
            
            if(this.container.targetSpawn){
                this.container.targetSpawn = false;
                this.barTime = me.pool.pull("karakterBarTimer", me.game.viewport.width/2+233, me.game.viewport.height/2-340);
                me.game.world.addChild(this.barTime, 20);
                this.barTime.container = this;
                this.karakterTimerPlay = true;
                this.angkaCD = game.assetBundle.sushifontputih(me.game.world.width/2+240, this.barTime.pos.y+105, {
                    size : 0.625,
                    fillStyle : "#000000",
                    text : this.timeDuration,
                    textAlign : 'center',
                    textBaseAlign : 'middle'
                }); 
                me.game.world.addChild(this.angkaCD, 21);
            }
        }
        
        if(this.pos.x >= this.limit && this.deleteKarakter && this.container.gameSelesai){
            this.deleteKarakter = false;
            this.body.vel.x = 0;
            // this.pos.set(this.charXpos, 410, 2);
            me.game.world.removeChild(this);
        }
        
        if(this.pos.x >= this.limit+this.width){
            this.body.vel.x = 0;
        }
        
        if(this.karakterTimerPlay){
            this.timeReset += 0.017;
            if(this.timeReset >= 1*this.timeDouble){
                this.timeReset = 0;
                this.timeDuration -= 1;
                if(this.main){
                    this.barTime.barFunc(this.timeDuration, this.maxTime);
                    
                    if(this.timeDuration <= this.maxTime && this.timeDuration > 8){
                        if(!this.isCurrentAnimation('basic')){
                            this.setCurrentAnimation('basic');
                        }
                    }
                    
                    if(this.timeDuration <= 5 && this.timeDuration > 2){
                        if(!this.isCurrentAnimation('sad')){
                            this.setCurrentAnimation('sad');
                        }
                    }
                    
                    if(this.timeDuration <= 2 && this.timeDuration > 1){
                        this.angryFunc();
                    }
                    
                    if(this.timeDuration <= 0 || this.end){
                        if(this.limitEnd){
                            this.main = false;
                            this.limitEnd = false;
                            this.stopRun = false;
                            this.idleCondition = false;
                            this.body.vel.y = 0;
                            if(this.end){
                                this.container.container.disablehook = true;
                                this.timeDuration = -2;
                            }else{
                                this.angkaCD.setText("0");
                            }
                        }
                    }
                }
                
                if(this.timeDuration < 0){
                    this.container.container.disablehook = true;
                    this.container.masihMain = false;
                    this.karakterTimerPlay = false;
                    if(this.end){
                        this.finishOrderTween(true);
                    }else{
                        this.finishOrderTween(false);
                    }
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
        this.body.vel.x = 0;
        me.timer.clearInterval(this.mulaiInterval);
        me.timer.clearTimeout(this.timeoutEnd);
        me.timer.clearTimeout(this.timerWait);
        me.game.world.removeChild(this);
        //  End of user code  //
	},

    // Put user code here //
    finishOrderTween: function(sukses){
        if(this.body == undefined){
            console.log("selesai");
        }else{
            if(this.telahEnd){
                this.telahEnd = false;
                this.end = true;
                // this.container.container.disablehook = true;
                  
                let timeOut;
                if(sukses && this.container.end){
                    if(!this.isCurrentAnimation('happy')){
                        this.setCurrentAnimation('happy');
                        me.audio.play(this.suarasenang);
                    }
                    timeOut = 1500;
                    this.container.comboScore += 1;
                } else {
                    if(!this.isCurrentAnimation('angry')){
                        this.setCurrentAnimation('angry');
                    }
                    this.container.comboScore = 0;
                    timeOut = 1000;
                }
                
                let limitTimeout = true;
                this.timeoutEnd = me.timer.setTimeout(()=>{
                    if(limitTimeout){
                        limitTimeout = false;
                        this.finish = true;
                        if(this.body == undefined){
                            console.log("selesai");
                        }else{
                            this.container.cekbenar1.alpha = 0;
                            this.container.cekbenar2.alpha = 0;
                            this.container.cekbenar3.alpha = 0;
                            //me.game.world.removeChild(this.container.PopUp);
                            this.container.PopUp.alpha = 0;
                            me.game.world.removeChild(this.container.sushiObj[0]);
                            me.game.world.removeChild(this.container.sushiObj[1]);
                            me.game.world.removeChild(this.container.sushiObj[2]);
                            me.game.world.removeChild(this.barTime);
                            me.game.world.removeChild(this.angkaCD);
                            this.body.vel.x = this.speed;
                        }
                    }
                }, timeOut);
            }  
        }
    },
    
    orderTween: function(callback){
        if(this.body == undefined){
            
        }else{
            this.body.vel.x = this.speed;
            if(!this.isCurrentAnimation('basic')){
                this.setCurrentAnimation('basic');
            }
            this.main = true;
            this.finish = false;
            this.angryEmotion = true;
            this.end = false;
            this.timeDuration = this.maxTime;
            this.telahEnd = true;
            this.timeIdle = 0;
            this.karakterTimerPlay = false;
            this.deleteKarakter = true;
            this.timeOutBool = true;
            this.idleCondition = false;
            this.stopRun = true;
            this.limitEnd = true;
            this.justOnce = true;
            this.container.container.sushipesanan1.alpha = 0;
            this.container.container.sushipesanan2.alpha = 0;
            this.container.container.sushipesanan3.alpha = 0;
        }
    },
    
    angryFunc: function(){
        if(this.angryEmotion){
            this.angryEmotion = false;
            me.audio.play(this.suaramarah);
                
            if(this.angryEffect == "effect1"){
                this.angryEffect1();
            }else if(this.angryEffect == "effect2"){
                this.angryEffect2();
            }else if(this.angryEffect == "effect3"){
                this.angryEffect3();
            }else if(this.angryEffect == "effect4"){
                this.angryEffect4();
            }
            
            if(!this.isCurrentAnimation('angry')){
                this.setCurrentAnimation('angry');
            }
        }
    },
    
    angryEffect1: function(){
        this.effect1 = me.pool.pull("angryEffect1", this.pos.x, this.pos.y-175,{sudutX:0, sudutY:0});
        this.effect2 = me.pool.pull("angryEffect1", this.pos.x+125, this.pos.y-125,{sudutX:50, sudutY:-25}),
        this.effect3 = me.pool.pull("angryEffect1", this.pos.x+150, this.pos.y-75, {sudutX:50, sudutY:0});
        this.effect4 = me.pool.pull("angryEffect1", this.pos.x-100, this.pos.y-125, {sudutX:50, sudutY:-25});
        this.effect5 = me.pool.pull("angryEffect1", this.pos.x-125, this.pos.y-75, {sudutX:50, sudutY:0});
        me.game.world.addChild(this.effect1, 25);
        me.game.world.addChild(this.effect2, 25);
        me.game.world.addChild(this.effect3, 25);
        me.game.world.addChild(this.effect4, 25);
        me.game.world.addChild(this.effect5, 25);
        this.effect4.flipX(true);
        this.effect5.flipX(true);
        this.effect1.tweenOn();
        this.effect2.tweenOn();
        this.effect3.tweenOn();
        this.effect4.tweenOn();
        this.effect5.tweenOn();
    },
    
    angryEffect2: function(){
        this.effect1 = me.pool.pull("angryEffect2", this.pos.x, this.pos.y-175, {sudutX:0, sudutY:0});
        this.effect2 = me.pool.pull("angryEffect2", this.pos.x+150, this.pos.y-75, {sudutX:50, sudutY:-25});
        this.effect3 = me.pool.pull("angryEffect2", this.pos.x-125, this.pos.y-75, {sudutX:50, sudutY:-25});
        me.game.world.addChild(this.effect1, 25);
        me.game.world.addChild(this.effect2, 25);
        me.game.world.addChild(this.effect3, 25);
        this.effect3.flipX(true);
        this.effect1.tweenOn();
        this.effect2.tweenOn();
        this.effect3.tweenOn();
    },
    
    angryEffect3: function(){
        this.effect1 = me.pool.pull("angryEffect3", this.pos.x-125, this.pos.y-65);
        this.effect2 = me.pool.pull("angryEffect3", this.pos.x+150, this.pos.y-65);
        me.game.world.addChild(this.effect1, 25);
        me.game.world.addChild(this.effect2, 25);
        this.effect1.flipX(true);
        this.effect1.tweenOn();
        this.effect2.tweenOn();
    },
    
    angryEffect4: function(){
        this.effect1 = me.pool.pull("angryEffect4", this.pos.x, this.pos.y-75);
        me.game.world.addChild(this.effect1, 5);
        this.effect1.tweenOn();
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();