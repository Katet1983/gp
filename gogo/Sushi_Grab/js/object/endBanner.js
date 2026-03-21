(function(){
// Put user code here //
 
//  End of user code  //

game.object.endBanner = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"end_frame"
		], settings);
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
        endBannerState = true;
        let vars = ["condition", "container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        this.retry = false;

        this.bg = me.pool.pull("bgCoklat", me.game.viewport.width/2, me.game.viewport.height/2);
        me.game.world.addChild(this.bg, 89);
        this.bg.alpha = 0.05;
        
        let timeOutLimit = true;
        this.clear1 = me.timer.setTimeout(()=>{
            if(timeOutLimit){
                timeOutLimit = false;
                this.buttonplay = me.pool.pull("buttonEnd", this.pos.x+100, this.pos.y+400,{
                  region: "button_play_001",
                  container: this
                });
                me.game.world.addChild(this.buttonplay, 93);

                this.buttonShop = me.pool.pull("bannerBtnShop", this.pos.x-100, this.pos.y+400,{container: this});
                me.game.world.addChild(this.buttonShop, 93);
                
                // this.myScore.setText("0");
                let animate = true;
                this.effectToBank1 = me.pool.pull("addToBankEffect", this.pos.x+100, this.pos.y-150);
                me.game.world.addChild(this.effectToBank1, 95);
                this.effectToBank1.setCurrentAnimation('Up',()=>{
                    if(animate){
                        animate = false;
                        this.effectToBank2 = me.pool.pull("addToBankEffect", this.pos.x+200, this.pos.y-480);
                        me.game.world.addChild(this.effectToBank2, 95);
                        this.effectToBank2.setCurrentAnimation('spark',()=>{
                            me.game.world.removeChild(this.effectToBank2);
                            return false;
                        });
                        me.game.world.removeChild(this.effectToBank1);
                        this.myMoney.setText(game.user.userData.bank);
                    }
                    return false;
                });
            }
        },3000);
        
        if(this.container.highScore){
            let timeOutLimit2 = true;
            this.clear2 = me.timer.setTimeout(()=>{
                if(timeOutLimit2){
                    timeOutLimit2 = false;
                    this.bnHighScore = me.pool.pull("bannerNewHighScore", this.pos.x-35, this.pos.y+160);
                    me.game.world.addChild(this.bnHighScore, 93);
                }
            },3000);
        }else{
            this.bannerHighScore = me.pool.pull("bannerHighScore", this.pos.x, this.pos.y+185);
            me.game.world.addChild(this.bannerHighScore, 94);
            this.bannerHighScore.alpha = 0.05;
            
            this.myLastHighscore = game.assetBundle.sushifontputih(me.game.world.width/2+125, this.pos.y+180, {
                size : 0.9,
                text : game.user.userData.highScore,
                textAlign : 'right',
                textBaseAlign : 'middle'
            }); 
            me.game.world.addChild(this.myLastHighscore, 95);
            this.myLastHighscore.alpha = 0.05;
        }
        
        this.myScore = game.assetBundle.sushifontputih(me.game.world.width/2+125, this.pos.y, {
                size : 0.9,
                text : this.container.angka,
                textAlign : 'right',
                textBaseAlign : 'middle'
            }); 
        me.game.world.addChild(this.myScore, 95);
        this.myScore.alpha = 0.05;
        
        this.myMoney = game.assetBundle.sushifontputih(me.game.world.width/2+130, this.pos.y-480, {
                size : 0.8,
                text : game.user.userData.bank,
                textAlign : 'left',
                textBaseAlign : 'middle'
            }); 
        me.game.world.addChild(this.myMoney, 95);
        this.myMoney.alpha = 0.05;
        if(gameSnacks_API){
            GameSnacks.score.update(this.container.angka);
        }
        game.controller.data.setHighScore(this.container.angka);
        game.controller.data.setgoldbank(this.container.angka);

        GameSnacks.game.gameOver();
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
        me.timer.clearTimeout(this.clear1);
        me.timer.clearTimeout(this.clear2);
        //  End of user code  //
	},

    // Put user code here //
    offScreen: function(shop){
        this.tween = new me.Tween(this).to({alpha:0}, 1000).onComplete(()=>{
            this.container.changeLevel(shop);
        });
        this.tween.start();
        
        this.tweenBg =  new me.Tween(this.bg).to({alpha:0}, 1000);
        this.tweenBg.start();
        
        this.tweenbuttonplay =  new me.Tween(this.buttonplay).to({alpha:0}, 1000);
        this.tweenbuttonplay.start();
        
        this.tweenbuttonShop =  new me.Tween(this.buttonShop).to({alpha:0}, 1000);
        this.tweenbuttonShop.start();
        
        if(this.container.highScore){
            this.tweenbnHighScore =  new me.Tween(this.bnHighScore).to({alpha:0}, 1000);
            this.tweenbnHighScore.start();
        }else{
            this.tweenbannerHighScore =  new me.Tween(this.bannerHighScore).to({alpha:0}, 1000);
            this.tweenbannerHighScore.start();
            this.tweenmyLastHighscore =  new me.Tween(this.myLastHighscore).to({alpha:0}, 1000);
            this.tweenmyLastHighscore.start();
        }
        
        this.tweenmyScore =  new me.Tween(this.myScore).to({alpha:0}, 1000);
        this.tweenmyScore.start();
        
        this.tweenmyMoney =  new me.Tween(this.myMoney).to({alpha:0}, 1000);
        this.tweenmyMoney.start();
        
        me.audio.play("sfx-slideout");
    },
    
    onScreen: function(){
        this.tween = new me.Tween(this).to({alpha:1}, 1000);
        this.tween.start();
        
        this.tweenBg =  new me.Tween(this.bg).to({alpha:0.8}, 1000);
        this.tweenBg.start();
        
        if(this.container.highScore){
            
        }else{
            this.tweenbannerHighScore =  new me.Tween(this.bannerHighScore).to({alpha:1}, 1000);
            this.tweenbannerHighScore.start();
            this.tweenmyLastHighscore =  new me.Tween(this.myLastHighscore).to({alpha:1}, 1000);
            this.tweenmyLastHighscore.start();
        }
        
        this.tweenmyScore =  new me.Tween(this.myScore).to({alpha:1}, 1000);
        this.tweenmyScore.start();
        
        this.tweenmyMoney =  new me.Tween(this.myMoney).to({alpha:1}, 1000);
        this.tweenmyMoney.start();
        
        me.audio.play("sfx-slidedays");
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();