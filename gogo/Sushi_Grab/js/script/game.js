// Put user code here //
game.data = {};
game.controller = {};
game.user = null;

var sub = me.event.subscribe(me.event.LOADER_COMPLETE, function(){
    game.data.itemInfo = me.loader.getJSON("ItemInfo");
    game.data.dataGamePlay = me.loader.getJSON("DataSushiGameplay");
    game.controller.data = new DataController();
    // me.timer.maxfps = 60;
    // me.timer.fps = 30;
    // me.timer.interpolation = true;
    // me.timer.tick = 30;
    me.sys.pauseOnBlur = false;
    
    me.event.unsubscribe(sub);
});
//  End of user code  //
