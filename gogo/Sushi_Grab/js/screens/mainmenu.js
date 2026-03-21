(function(){
// Put user code here //
 
//  End of user code  //

game.level.mainmenu = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("mainmenu");
		this.var = {};
        // Put user code here //
        if(gameSnacks_API){
            this.audioCheck = me.pool.pull("audioAPICheck", 0, 0);
            me.game.world.addChild(this.audioCheck, 0);
        }
        me.timer.setTimeout(()=>{typeLevel = "menu"}, 2500);
        me.game.viewport.fadeOut("#000000", 500);
        game.util.resumeGame();
        inGamePlay = false;
        this.homeBg = me.pool.pull("homeBg", 0, 0);
        me.game.world.addChild(this.homeBg, 30);
        me.video.renderer.settings.scaleMethod = "fit";
        
        //screenBelakangWeb
        let webXkiri,
            webXkanan;
        if(me.game.viewport.width > 877.5){
            webXkiri    = -1182.25+377.5;
            webXkanan   = 1182.25-377.5;
        }else{
            webXkiri    = -me.game.viewport.width-1000;
            webXkanan   = me.game.viewport.width+1000;
        }
        this.webBgKiri = me.pool.pull("webBgKiri", webXkiri, 0);
        me.game.world.addChild(this.webBgKiri, 100);
        this.webBgKanan = me.pool.pull("webBgKanan", webXkanan, 0);
        me.game.world.addChild(this.webBgKanan, 100);
        //--
        
        this.menushop = me.pool.pull("menustore", 0, 165);
        me.game.world.addChild(this.menushop, 35);
        
        this.buttonplay = me.pool.pull("ButtonPlay", 0, 350,{
          region: "button_play_001",
          container: this
        });
        me.game.world.addChild(this.buttonplay, 36);
        
        this.textBank = game.assetBundle.sushifontputih(me.game.world.width/2-147.5, me.game.viewport.height/2 - 460,{
                size : 0.65,
                textAlign : "left",
                text : game.user.userData.bank
        });
        this.tulisanBank = game.assetBundle.sushifontputih(me.game.world.width/2-147.5, me.game.viewport.height/2 - 460,{
                size : 0.65,
                textAlign : "left",
                text : game.user.userData.bank
        });
        this.highscore = game.assetBundle.sushifontputih(me.game.world.width/2+110, me.game.viewport.height/2 - 460,{
                size : 0.65,
                textAlign : "left",
                text : game.user.userData.highScore
        });
        
        this.bank = me.pool.pull("babi", -135, -450);
        me.game.world.addChild(this.bank, 35);
        
        this.hscore = me.pool.pull("highscore",  150, -450);
        me.game.world.addChild(this.hscore, 35);
        
        this.buttonshop = me.pool.pull("buttonShop", 175, 500,{
            region: "home_button_shop",
            container:this
        });
        me.game.world.addChild(this.buttonshop, 36);
        
        this.buttonoption = me.pool.pull("buttonOption", -175, 500,{
            region: "home_button_setting",
            container:this
        });
        me.game.world.addChild(this.buttonoption, 36);
        
        this.mainmenu = true;
        this.pauseContainer = me.pool.pull("PauseContainer", 0, 0,{
            container:this
        });
        me.game.world.addChild(this.pauseContainer, 100);
        this.pauseContainer.Hide();
        let to1 = true;
        this.clear1 = me.timer.setTimeout(()=>{
            if(to1){
                to1 = false;
                me.game.world.addChild(this.textBank, 36);
                me.game.world.addChild(this.tulisanBank, 36);
                me.game.world.addChild(this.highscore, 36);
            }
        }, 500);
        
        this.audioFunc();
        
        window.addEventListener("blur", function () {            
            if(inGamePlay){
                if(typeLevel == "gamePlay"){
                    me.state.current().pauseBtn.onClick();
                }
            }else{
                if(typeLevel == "menu"){
                    me.state.current().buttonoption.func();
                }
            }
        }, false);
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            if(audioOn && game.user.userData.mute === 0){
                me.audio.unmuteAll();
            }
          } else {
            me.audio.muteAll();
          }
        });
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.game.world.removeChild(this.menushop);
        me.game.world.removeChild(this.buttonplay);
        //me.game.world.removeChild(this.highscoretxt);
        me.game.world.removeChild(this.highscore);
        me.game.world.removeChild(this.bank);
        me.game.world.removeChild(this.hscore);
        me.timer.clearTimeout(this.clear1);
        
        me.audio.stop("bgm-sushi-menu");
        me.timer.clearInterval(this.audioInterval);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-sushi-menu", false,()=>{this.audioFunc()}, 0.5);
    },

    playgame: function(){
        me.game.viewport.fadeIn("#000000", 100,()=>{me.state.change(game.state.level1)});
    },
    
    keshop: function(){
        mainMenu = true;
        me.game.viewport.fadeIn("#000000", 100,()=>{me.state.change(game.state.Shop)});
    },
    
    option: function(){
        this.pauseContainer.Show();
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();