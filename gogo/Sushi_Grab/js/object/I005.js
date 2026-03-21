(function(){
// Put user code here //
 
//  End of user code  //

game.object.I005 = game.object.buffBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.image = 'buff_rainbow';
        settings.susitipe = 'buff_rainbow';
        settings.id = 'I005';
        settings.framewidth = 102.5;
		settings.frameheight = 60;
        this._super(game.object.buffBase, 'init', [x, y, settings]);
        //  End of user code  //
	},

    // Put user code here //
    Buff : function(){
        let random = Math.floor(Math.random() * this.container.gamePlay.sushiData.length);
        this.container.nempatinsushi(this.container.gamePlay.sushiData[random]);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();