(function(){
// Put user code here //
 
//  End of user code  //

game.object.sushi_00 = game.object.sushiBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.image = 'sushi_00';
        settings.framewidth = 120;
		settings.frameheight = 62;
        this._super(game.object.sushiBase, 'init', [x, y, settings]);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();