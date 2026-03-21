(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnContinue = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
		let vars = ["region","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = this.region;
		settings.folder = "gameplay";
		settings.func   = this.func;
        
        this._super(game.object.ButtonBase, 'init', [x, y, settings]);
        this.prees = true;
        //  End of user code  //
	},

    // Put user code here //
    func : function(){
        if(this.alpha == 1 && this.prees){
            me.audio.play("sfx-button");
            this.prees = false;
            game.util.resumeGame();
            this.container.Hide();
            this.container.container.disablehook = false;
            let to = true;
            me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.once = true;
                    this.prees = true;
                }
            }, 500);
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();