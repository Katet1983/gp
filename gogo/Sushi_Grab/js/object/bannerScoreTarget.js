(function(){
// Put user code here //
 
//  End of user code  //

game.object.bannerScoreTarget = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
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
		this.alpha = 0.05;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        let alphaObject = 0.05;
        
        this.bg = me.pool.pull("bgCoklat", me.game.viewport.width/2, me.game.viewport.height/2);
        me.game.world.addChild(this.bg, 89);
        this.bg.alpha = alphaObject;
        
        this.signLogo = me.pool.pull("bannerSign", this.pos.x, this.pos.y-280);
        me.game.world.addChild(this.signLogo, 93);
        this.signLogo.setCurrentAnimation('day');
        this.signLogo.alpha = alphaObject;
        
        this.bnTarget = me.pool.pull("bannerTarget", this.pos.x, this.pos.y+100);
        me.game.world.addChild(this.bnTarget, 93);
        this.bnTarget.alpha = alphaObject;
        
        if(game.user.userData.day > 1){
            this.bnBuff = me.pool.pull("bannerBuffFrame", this.pos.x, this.pos.y+370);
            me.game.world.addChild(this.bnBuff, 93);
            this.bnBuff.alpha = alphaObject;
            
            if(game.user.userData.item.includes("I000")){
                this.buffHook = me.pool.pull ("me.Sprite", this.pos.x-172, this.pos.y+305, {
                    image: game.textureMap.get("gameplay"),
                    region: "day_buff_crane"
                });
                me.game.world.addChild(this.buffHook, 94);
                this.buffHook.alpha = alphaObject;
            }
            
            if(game.user.userData.item.includes("I001")){
                this.buffTime = me.pool.pull ("me.Sprite", this.pos.x+170, this.pos.y+303, {
                    image: game.textureMap.get("gameplay"),
                    region: "day_buff_time"
                });
                me.game.world.addChild(this.buffTime, 94);
                this.buffTime.alpha = alphaObject;
            }
            
            if(game.user.userData.item.includes("I002")){    
                this.buffMoney = me.pool.pull ("me.Sprite", this.pos.x-3, this.pos.y+302, {
                    image: game.textureMap.get("gameplay"),
                    region: "day_buff_money"
                });
                me.game.world.addChild(this.buffMoney, 94);
                this.buffMoney.alpha = alphaObject;
            }
            
            if(game.user.userData.item.includes("I003")){
                this.buffCat = me.pool.pull ("me.Sprite", this.pos.x-100, this.pos.y+445, {
                    image: game.textureMap.get("gameplay"),
                    region: "day_buff_cat"
                });
                me.game.world.addChild(this.buffCat, 94);
                this.buffCat.alpha = alphaObject;
            }
            
            if(game.user.userData.item.includes("I004")){
                this.buffCake = me.pool.pull ("me.Sprite", this.pos.x+114, this.pos.y+445, {
                    image: game.textureMap.get("gameplay"),
                    region: "day_buff_cake"
                });
                me.game.world.addChild(this.buffCake, 94);
                this.buffCake.alpha = alphaObject;
            }
        }
        
        this.textDay = game.assetBundle.sushifontputih(me.game.world.width/2, this.pos.y-270, {
                fillStyle : "#008000",
                size : 2.5,
                text : "Day "+game.user.userData.day,
                textAlign : 'center',
                textBaseAlign : 'middle'
            }); 
        me.game.world.addChild(this.textDay, 95);
        this.textDay.alpha = alphaObject;
        
        this.targetScore = game.assetBundle.sushifontputih(me.game.world.width/2+200, this.pos.y+90, {
                size : 1.5,
                text : this.container.targetScore,
                textAlign : 'right',
                textBaseAlign : 'middle'
            }); 
        me.game.world.addChild(this.targetScore, 95);
        this.targetScore.alpha = alphaObject;
        
        this.buttonplay = me.pool.pull("buttonPlayOn", this.pos.x, this.pos.y+800,{
          region: "button_play_000",
          container: this
        });
        me.game.world.addChild(this.buttonplay, 93);
        this.buttonplay.alpha = alphaObject;
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

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    offScreen: function(){
        this.tween = new me.Tween(this).to({alpha:0}, 1000).onComplete(()=>{
            me.game.world.removeChild(this);
            me.game.world.removeChild(this.bg);
            me.game.world.removeChild(this.textDay);
            me.game.world.removeChild(this.targetScore);
            me.game.world.removeChild(this.buttonplay);
            me.game.world.removeChild(this.signLogo);
            me.game.world.removeChild(this.bnTarget);
            if(game.user.userData.day > 1){
                me.game.world.removeChild(this.bnBuff);
                if(this.container.container.playerItem.includes("I000")){
                    me.game.world.removeChild(this.buffHook);
                }
                if(this.container.container.playerItem.includes("I001")){
                    me.game.world.removeChild(this.buffTime);
                }
                if(this.container.container.playerItem.includes("I002")){
                    me.game.world.removeChild(this.buffMoney);
                }
                if(this.container.container.playerItem.includes("I003")){
                    me.game.world.removeChild(this.buffCat);
                }
                if(this.container.container.playerItem.includes("I004")){
                    me.game.world.removeChild(this.buffCake);
            }
        }
        });
        this.tween.start();
        
        this.tweenBg =  new me.Tween(this.bg).to({alpha:0}, 1000);
        this.tweenBg.start();
        
        this.tweenSignLogo = new me.Tween(this.signLogo).to({alpha:0}, 1000);
        this.tweenSignLogo.start();
        
        this.tweenBnTarget = new me.Tween(this.bnTarget).to({alpha:0}, 1000);
        this.tweenBnTarget.start();
        
        if(game.user.userData.day > 1){
            this.tweenbnBuff = new me.Tween(this.bnBuff).to({alpha:0}, 1000);
            this.tweenbnBuff.start();
            if(game.user.userData.item.includes("I000")){
                this.tweenbuffHook = new me.Tween(this.buffHook).to({alpha:0}, 1000);
                this.tweenbuffHook.start();
            }
            if(game.user.userData.item.includes("I001")){
                this.tweenbuffTime = new me.Tween(this.buffTime).to({alpha:0}, 1000);
                this.tweenbuffTime.start();
            }
            if(game.user.userData.item.includes("I002")){
                this.tweenbuffMoney = new me.Tween(this.buffMoney).to({alpha:0}, 1000);
                this.tweenbuffMoney.start();
            }
            if(game.user.userData.item.includes("I003")){
                this.tweenbuffCat = new me.Tween(this.buffCat).to({alpha:0}, 1000);
                this.tweenbuffCat.start();
            }
            if(game.user.userData.item.includes("I004")){
                this.tweenbuffCake = new me.Tween(this.buffCake).to({alpha:0}, 1000);
                this.tweenbuffCake.start();
            }
        }
        
        this.tweenTargetScore = new me.Tween(this.targetScore).to({alpha:0}, 1000);
        this.tweenTargetScore.start();
        
        this.tweenbuttonplay = new me.Tween(this.buttonplay).to({alpha:0}, 1000);
        this.tweenbuttonplay.start();
        
        this.tweenTextDay = new me.Tween(this.textDay).to({alpha:0}, 1000);
        this.tweenTextDay.start();
        
        me.audio.play("sfx-slideout");
            
    },
    
    onScreen: function(){
        this.tween = new me.Tween(this).to({alpha:1}, 1000);
        this.tween.start();
        
        this.tweenBg =  new me.Tween(this.bg).to({alpha:0.7}, 1000);
        this.tweenBg.start();
        
        this.tweenSignLogo = new me.Tween(this.signLogo).to({alpha:1}, 1000);
        this.tweenSignLogo.start();
        
        this.tweenBnTarget = new me.Tween(this.bnTarget).to({alpha:1}, 1000);
        this.tweenBnTarget.start();
        
        if(game.user.userData.day > 1){
            this.tweenbnBuff = new me.Tween(this.bnBuff).to({alpha:1}, 1000);
            this.tweenbnBuff.start();
            if(game.user.userData.item.includes("I000")){
                this.tweenbuffHook = new me.Tween(this.buffHook).to({alpha:1}, 1000);
                this.tweenbuffHook.start();
            }
            if(game.user.userData.item.includes("I001")){
                this.tweenbuffTime = new me.Tween(this.buffTime).to({alpha:1}, 1000);
                this.tweenbuffTime.start();
            }
            if(game.user.userData.item.includes("I002")){
                this.tweenbuffMoney = new me.Tween(this.buffMoney).to({alpha:1}, 1000);
                this.tweenbuffMoney.start();
            }
            if(game.user.userData.item.includes("I003")){
                this.tweenbuffCat = new me.Tween(this.buffCat).to({alpha:1}, 1000);
                this.tweenbuffCat.start();
            }
            if(game.user.userData.item.includes("I004")){
                this.tweenbuffCake = new me.Tween(this.buffCake).to({alpha:1}, 1000);
                this.tweenbuffCake.start();
            }
        }

        this.tweenTargetScore = new me.Tween(this.targetScore).to({alpha:1}, 1000);
        this.tweenTargetScore.start();

        this.tweenButtonplay = new me.Tween(this.buttonplay).to({alpha:1}, 1000);
        this.tweenButtonplay.start();
        
        this.tweenTextDay = new me.Tween(this.textDay).to({alpha:1}, 1000);
        this.tweenTextDay.start();
        
        // if(game.user.userData.haveTutorial === 0){
        //     let timeOutLimit = true;
        //     me.timer.setTimeout(()=>{
        //         if(timeOutLimit){    
        //             timeOutLimit = false;
        //             this.container.container.handKlik.alpha = 1;
        //             this.container.container.handKlikEffect.alpha = 1;
        //         }
        //     }, 1000);
        // }
        
        me.audio.play("sfx-slidedays");
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();