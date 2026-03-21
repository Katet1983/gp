(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnToHome = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = "Pause_button_home";
		settings.folder = "gameplay";
		settings.func   = this.func;
		
        this._super(game.object.ButtonBase, 'init', [x, y, settings]);
        //  End of user code  //
	},

    // Put user code here //
    func : function(){
        if(this.alpha == 1 && this.container.pressButton){
            this.container.pressButton = false;
            me.audio.play("sfx-button");
            
            game.util.resumeGame();
            //this.container.Hide();
            
            let to = true;
            me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.once = true;
                    if(gameSnacks_API){
                        GameSnacks.score.update(this.container.container.gamePlay.angka);
                    }
                    game.controller.data.setHighScore(this.container.container.gamePlay.angka);
                    game.controller.data.setgoldbank(this.container.container.gamePlay.angka, ()=>{
                        if(gameSnacks_API){
                            me.audio.muteAll();
                            this.container.pressButton = true;
                            game.util.restartGame("mainmenu");
                        }else{
                            if(iniDipause == false){
                                me.audio.unmuteAll();
                            }
                            iniDipause = true;
                            me.state.change(game.state.mainmenu);
                        }
                    });
                }
            }, 500);
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();