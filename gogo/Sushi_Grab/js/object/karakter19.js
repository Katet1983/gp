(function(){
// Put user code here //
 
//  End of user code  //

game.object.karakter19 = game.object.karakterBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.id         ="karakter19";
        settings.angryEffect    ="effect2";
        settings.blink          =true;
        settings.suaramarah     ="sfx-anak-marah";
        settings.suarasenang    ="sfx-anak-senang";
        settings.animationMotions = [
            {name: "angry", count: 1},
            {name: "basic", count: 1},
            {name: "sad", count: 1},
            {name: "happy", count: 1},
            {name: "basic_blink", count: 1}
        ];
        this._super(game.object.karakterBase, 'init', [x, y, settings]);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();