(function(){
// Put user code here //
 
//  End of user code  //

game.object.ButtonHook = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
		let vars = ["region","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = this.region;
		settings.folder = "gameplay";
		settings.func   = this.func;
	    
		
        this._super(game.object.ButtonBase, 'init', [x, y, settings]);

        this.Xpos;
        //  End of user code  //
	},

    // Put user code here //
    func: function(){
        if(this.container.play){
            this.Xpos = me.input.pointer;
            this.container.grab();
        }
        return false;
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();