(function(){
// Put user code here //
 
//  End of user code  //

game.object.karakter05 = game.object.karakterBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.id         ="karakter05";
        settings.angryEffect    ="effect2";
        settings.blink          =false;
        settings.suaramarah     ="sfx-anak-marah";
        settings.suarasenang    ="sfx-anak-senang";
        settings.animationMotions = [
            {name: "angry", count: 1},
            {name: "basic", count: 1},
            {name: "sad", count: 1},
            {name: "happy", count: 1},
            {name: "basic_kanan", count: 1},
            {name: "basic_kiri", count: 1}
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