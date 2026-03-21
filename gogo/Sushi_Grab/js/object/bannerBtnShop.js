(function(){
// Put user code here //
 
//  End of user code  //

game.object.bannerBtnShop = game.object.ButtonBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        x -= me.game.viewport.width*0.5;
		y -= me.game.viewport.height*0.5;
		
        let vars = ["container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
		settings.region = "end_button_shop";
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
            this.container.offScreen("shop");
            return false;
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();