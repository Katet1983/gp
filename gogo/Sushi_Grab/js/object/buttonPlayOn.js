(function(){
// Put user code here //
 
//  End of user code  //

game.object.buttonPlayOn = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
		x -= me.game.viewport.width*0.5;
		y -= me.game.viewport.height*0.5;
		
		let vars = ["region","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = this.region;
		settings.folder = "gameplay";
		settings.func   = this.func;
		
        this._super(game.object.ButtonBase, 'init', [x, y, settings]);
        this.bisadipencet = true;
        this.timeOutBool = true;
        //  End of user code  //
	},

    // Put user code here //
    func: function(){
        if(this.bisadipencet){
            this.bisadipencet = false;
            me.timer.setTimeout(()=>{
                if(this.timeOutBool){
                    this.timeOutBool = false;
                    this.container.container.orderFunc();
                }
            },2000);
            me.audio.play("sfx-button");
            
            this.container.offScreen();
            return false;
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();