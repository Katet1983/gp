(function(){
// Put user code here //
 
//  End of user code  //

game.level.temp = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("temp");
		this.var = {};
        // Put user code here //
        typeLevel = "AdsOn";
        this.tutup = me.pool.pull("tutupTemp", 0, 0);
        me.game.world.addChild(this.tutup, 999);
        let to = true;
        me.timer.setTimeout(()=>{
            if(to){
                to = false;
                game.util.resumeGame();
                if(audioOn){
                    me.audio.unmuteAll();
                }
                if(gameSnacks_API && endBannerState == false){
                    GameSnacks.game.gameOver();
                }                    
                me.state.change(game.state[arguments[0]]);
            }
        }, 300);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.game.world.removeChild(this.tutup);
        endBannerState = false;
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();