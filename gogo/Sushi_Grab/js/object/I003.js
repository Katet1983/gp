(function(){
// Put user code here //
 
//  End of user code  //

game.object.I003 = game.object.buffBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.image = 'buff_desert';
        settings.susitipe = 'buff_desert';
        settings.id = 'I003';
        settings.framewidth = 92.5;
		settings.frameheight = 85;
        this._super(game.object.buffBase, 'init', [x, y, settings]);
        //  End of user code  //
	},

    // Put user code here //
    Buff : function(){
        this.container.buffParticle(()=>{
            this.container.ActivateCookies();
        });
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();