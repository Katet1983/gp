(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnHookTutor = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        let vars = ["region","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = "tutor_anim_btn";
		settings.folder = "gameplay";
		settings.func   = this.func;
	    
		
        this._super(game.object.ButtonBase, 'init', [x, y, settings]);
        this.alpha = 0;
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();