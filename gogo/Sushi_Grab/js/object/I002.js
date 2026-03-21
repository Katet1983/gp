(function(){
// Put user code here //
 
//  End of user code  //

game.object.I002 = game.object.buffBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.image = 'buff_clock';
        settings.susitipe = 'buff_clock';
        settings.id = 'I002';
        settings.framewidth = 65.5;
		settings.frameheight = 80;
		this._super(game.object.buffBase, 'init', [x, y, settings]);
		let itemData = game.user.userData.item;
		let itemInfo = game.controller.data.getDataItemInfo();
		this.lvl = 1;
		for(let id in itemData){
		    if(id == this.susitipe){
		        this.lvl = itemData[id];
		    }
		}
		
		for(let i in itemInfo){
		    if(itemInfo[i].id == this.susitipe){
		        this.buff = itemInfo[i].buff;
		    }
		}
	    
	    this.container.gamePlay.buffTime = this.buff[this.lvl - 1];
        //  End of user code  //
	},

    // Put user code here //
    Buff : function(){
        this.container.gamePlay.timeCounter.startTime = false;
        this.container.gamePlay.timeCounter.lastChance = true;
        this.container.buffParticle(function(){
            this.container.gamePlay.timeUp(this.buff[this.lvl - 1]);
        }.bind(this));
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();