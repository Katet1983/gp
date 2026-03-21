// Put user code here //
game.assetBundle = {};

game.assetBundle.sushifont = function(x, y, settings = {}){
    settings.font = "fontSushiKotak";
    return me.pool.pull("me.BitmapText", x, y, settings);
};

game.assetBundle.sushifontputih = function(x, y, settings = {}){
    settings.font = "fontSushiKotak_White";
    return me.pool.pull("me.BitmapText", x, y, settings);
};
//  End of user code  //
