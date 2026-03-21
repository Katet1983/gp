(function(){
// Put user code here //
 
//  End of user code  //

game.level.Shop = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Shop");
		this.var = {};
        // Put user code here //
        if(gameSnacks_API){
            this.audioCheck = me.pool.pull("audioAPICheck", 0, 0);
            me.game.world.addChild(this.audioCheck, 0);
        }

        this.intervalType = me.timer.setInterval(()=>{
            typeLevel = "shop";
        },1000);
        
        me.game.viewport.fadeOut("#000000", 500);
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
        this.shopContainer = me.pool.pull("ShopContainer", 0, 0);
        me.game.world.addChild(this.shopContainer, 20);
        
        this.audioFunc();
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-win");
        me.timer.clearInterval(this.interval);
        me.timer.clearInterval(this.intervalType);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-win", false,()=>{this.audioFunc()}, 0.5);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();