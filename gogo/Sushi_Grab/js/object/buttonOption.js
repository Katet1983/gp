(function(){
// Put user code here //
 
//  End of user code  //

game.object.buttonOption = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        let vars = ["region","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = this.region;
		settings.folder = "gameplay";
		settings.func   = this.func;
		
        this._super(game.object.ButtonBase, 'init', [x, y, settings]);
        this.bisadipencet = true;
        //  End of user code  //
	},

    // Put user code here //
    func: function(){
        if(this.bisadipencet){
            this.bisadipencet = false;
            me.audio.play("sfx-button");
            
            this.container.option();
            
            let trueTO = true;
            me.timer.setTimeout(()=>{
                if(trueTO){
                    trueTO = false;
                    this.bisadipencet = true;
                    this.once = true;
                }
            }, 1000);
            return false;
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();