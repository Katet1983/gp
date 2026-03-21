(function(){
// Put user code here //
 
//  End of user code  //

game.level.splashscreen = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("splashscreen");
		this.var = {};
        // Put user code here //
        if(gameSnacks_API){
            GameSnacks.game.ready();
            console.log("API Jalan");
            
            GameSnacks.audio.subscribe((isAudioEnabled) => {
                if (isAudioEnabled) {
                    audioOn = true;
                } else {
                    audioOn = false;
                }
            });
            
            if(GameSnacks.audio.isEnabled()) {
                audioOn = true;
            }else{
                audioOn = false;
            }
        }
        game.var.mute = false;
        game.var.muteSfx = false;
        let timoutBool = true;
        me.timer.setTimeout(function() {
            if(timoutBool){
                timoutBool = false;
                game.controller.data.initDatabase(() => {
                    me.state.change(game.state.mainmenu);
                });
            }
        }, 2000);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();