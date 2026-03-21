(function(){
// Put user code here //
 
//  End of user code  //

game.object.karakter17 = game.object.karakterBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.id         ="karakter17";
        settings.angryEffect    ="effect1";
        settings.blink          =false;
        settings.suaramarah     ="sfx-bapak2-marah";
        settings.suarasenang    ="sfx-bapak2-senang";
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