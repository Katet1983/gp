(function(){
// Put user code here //
 
//  End of user code  //

game.object.I001 = game.object.buffBase.extend({
	init: function(x, y, settings = {}){
        // Put user code here //
        settings.image = 'buff_money';
        settings.susitipe = 'buff_money';
        settings.id = 'I001';
        settings.framewidth = 92.5;
		settings.frameheight = 85;
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
		
		this.container.gamePlay.bonusScore = this.buff[this.lvl - 1];
        //  End of user code  //
	},

    // Put user code here //
    Buff : function(){
        this.container.buffParticle(()=>{
            this.container.coinUp();
        });
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();