(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnExit = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        let vars = ["region","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = this.region;
		settings.folder = "gameplay";
		settings.func   = this.func;
        
        this._super(game.object.ButtonBase, 'init', [x, y, settings]);
        //  End of user code  //
	},

    // Put user code here //
    func : function(){
        if(this.alpha == 1){
            me.audio.play("sfx-button");  
            this.container.Hide();
            this.container.pauseContainer.Show();
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();