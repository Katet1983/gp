(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnPlayTutorAnim = game.object.ButtonBase.extend({
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
            //this.prees = false;
            if(me.levelDirector.getCurrentLevel().name == "level1"){
                this.container.Close();
                
            }
            else{
                me.game.viewport.fadeIn("#000000", 100,()=>{me.state.change(game.state.level1)});
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();