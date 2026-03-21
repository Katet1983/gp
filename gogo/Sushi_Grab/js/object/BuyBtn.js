(function(){
// Put user code here //
 
//  End of user code  //

game.object.BuyBtn = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Shop";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"shop_button_buy","shop_button_unavailable","shop_button_upgrade",
			"shop_button_upgrade_pressed","shop_button_sold"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 47;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('disable', [{ name: "shop_button_unavailable", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "shop_button_upgrade_pressed", delay: 100 }]);
		this.addAnimation('able', [{ name: "shop_button_upgrade", delay: 100 }]);
		this.addAnimation('max', [{ name: "shop_button_sold", delay: 100 }]);
		this.setCurrentAnimation('able');
		this.var = {};

        // Put user code here //
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.GUI_Object, 'update', [dt]);
        // Put user code here //
        if(this.itemData.alpha == 1){
            this.UpdateTxt();
        }
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
         //me.event.unsubscribe(this.adjustPosSub);
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        if(event.button === 0){
            if(this.isCurrentAnimation("able") && this.alpha == 1){
                me.audio.play("sfx-belanja");
                this.setCurrentAnimation("pressed");
                
                game.controller.data.upgradeItem(this.itemData.id, this.itemData.lvl + 1, this.itemData.cost[this.itemData.lvl]
                    , function(success){
                        if(success){
                            this.itemData.lvl ++;
                        }
                        
                    setTimeout(function(){
                        this.setCurrentAnimation("able");
                        this.itemData.container.bank = game.user.userData.bank;
                        this.itemData.container.CheckAllPrice();
                        this.UpdateTxt();
                    }.bind(this), 200);
                }.bind(this));
            }
        }
        //  End of user code  //
	},

    // Put user code here //
    onRelease: function(){
        return this.isPenetrate;
    },
    
    CheckPrice : function(){
        if(this.itemData.lvl == this.itemData.maxLvl){
            if(!this.isCurrentAnimation('pressed')){
                this.setCurrentAnimation("max")
            }
            
            this.itemData.priceTxt.setText("0");
        }
        else{
            if(this.itemData.cost[this.itemData.lvl] <= this.itemData.container.bank){
                this.setCurrentAnimation("able");
            }else{
                if(!this.isCurrentAnimation("pressed")){
                    this.setCurrentAnimation("disable");
                }
            }
            
            this.itemData.priceTxt.setText(this.itemData.cost[this.itemData.lvl]);
        }
        
        for(let i in this.itemData.counterList){
            if(i >= this.itemData.lvl)
                this.itemData.counterList[i].pos.y = 20000;
            else
                this.itemData.counterList[i].pos.y = this.counterPos;
        }
    },
    
    UpdateTxt : function(){
        let buffDesc = "";
        
        let current = 0;
        if(this.itemData.lvl > 0 && this.itemData.buff != undefined){
            current = this.itemData.buff[this.itemData.lvl - 1];
        }
        
        if(this.itemData.id == "I000"){
            current = (parseInt(this.itemData.lvl) + 1);
            if(this.itemData.lvl < this.itemData.buff.length){
                let next = current;
                buffDesc = "+ " + (current - 1); buffDesc2 = "+ " + next; 
                //this.itemData.panahTxt.setText(" -> ");
            }
            else{
                buffDesc = "+ " + (current - 1); buffDesc2 = "";
            }
        }
        else if(this.itemData.id == "I001"){
            if(this.itemData.lvl < this.itemData.buff.length){
                buffDesc = "$ " + current; buffDesc2 = "$ " + this.itemData.buff[this.itemData.lvl];
                //this.itemData.panahTxt.setText(" -> ");
            }
            else{
                buffDesc = "$ " + current; buffDesc2 = "";
            }
        }
        else if(this.itemData.id == "I002"){
            if(this.itemData.lvl < this.itemData.buff.length){
                buffDesc = current + " s" ; buffDesc2 = "" + this.itemData.buff[this.itemData.lvl] + " s";
                //this.itemData.panahTxt.setText(" -> ");
            }
            else{
                buffDesc = current + " s"; buffDesc2 = "";
            }
        }
        else if(this.itemData.id == "I004"){
            if(this.itemData.lvl < this.itemData.buff.length){
                buffDesc = current + " s" ; buffDesc2 = "" + this.itemData.buff[this.itemData.lvl] + " s";
                //this.itemData.panahTxt.setText(" -> ");
            }
            else{
                buffDesc = current + " s"; buffDesc2 = "";
            }
        }
        
        if(this.itemData.buff != undefined){
            this.itemData.buffTxt.setText(buffDesc);
            this.itemData.buffNextTxt.setText(buffDesc2);
        }
        else{
            this.itemData.panah.alpha = 0;
            this.itemData.buffTxt.setText("");
            this.itemData.buffNextTxt.setText("");
        }
        
        if(this.itemData.alpha == 1)
            this.TextPos();
    },
    
    TextPos : function(){
        let posX = 240;
        if(this.itemData.id == "I000"){
            if(this.itemData.lvl == 0){
                this.itemData.buffTxt.pos.x = posX - 142;//75; 
                this.itemData.panah.pos.x = this.itemData.pos.x + 65;
                this.itemData.panah.pos.y = this.itemData.pos.y - 7;
            }
            else if(this.itemData.lvl == 1){
                this.itemData.buffTxt.pos.x = posX - 142;
                this.itemData.panah.pos.x = this.itemData.pos.x + 65;
                this.itemData.panah.pos.y = this.itemData.pos.y - 7;
            }
            else if(this.itemData.lvl == 2){
                this.itemData.buffTxt.pos.x = posX - 142;
                this.itemData.panah.pos.x = this.itemData.pos.x + 65;
                this.itemData.panah.pos.y = this.itemData.pos.y - 7;
            }
            else if(this.itemData.lvl == 3){
                this.itemData.buffTxt.pos.x = posX - 142;
                this.itemData.panah.pos.x = this.itemData.pos.x + 65;
                this.itemData.panah.pos.y = this.itemData.pos.y - 7;
            }
            else if(this.itemData.lvl == 4){
                this.itemData.buffTxt.pos.x = posX - 142;
                this.itemData.panah.pos.x = this.itemData.pos.x + 65;
                this.itemData.panah.pos.y = this.itemData.pos.y - 7;
            }
            else if(this.itemData.lvl == this.itemData.buff.length){
                this.itemData.buffTxt.pos.x = this.itemData.buffNextTxt.pos.x; 
                this.itemData.panah.alpha = 0;
            }
        }
        else if(this.itemData.id == "I001"){
            if(this.itemData.lvl == 0){
                this.itemData.buffTxt.pos.x = posX - 150;
                this.itemData.panah.pos.x = this.itemData.pos.x + 58;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 1){
                this.itemData.buffTxt.pos.x = posX - 150;
                this.itemData.panah.pos.x = this.itemData.pos.x + 58;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 2){
                this.itemData.buffTxt.pos.x = posX - 150;
                this.itemData.panah.pos.x = this.itemData.pos.x + 58;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 3){
                this.itemData.buffTxt.pos.x = posX - 150;
                this.itemData.panah.pos.x = this.itemData.pos.x + 58;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 4){
                this.itemData.buffTxt.pos.x = posX - 150;
                this.itemData.panah.pos.x = this.itemData.pos.x + 58;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == this.itemData.buff.length){
                this.itemData.buffTxt.pos.x = this.itemData.buffNextTxt.pos.x; 
                this.itemData.panah.alpha = 0;
            }
        }
        else if(this.itemData.id == "I002"){
            if(this.itemData.lvl == 0){
                this.itemData.buffTxt.pos.x = posX - 145; //142
                this.itemData.panah.pos.x = this.itemData.pos.x + 61;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
                
            }
            else if(this.itemData.lvl == 1){
                this.itemData.buffTxt.pos.x = posX - 150; //147
                this.itemData.panah.pos.x = this.itemData.pos.x + 57;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 2){
                this.itemData.buffTxt.pos.x = posX - 150; //147
                this.itemData.panah.pos.x = this.itemData.pos.x + 57;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 3){
                this.itemData.buffTxt.pos.x = posX - 152; //149
                this.itemData.panah.pos.x = this.itemData.pos.x + 55;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 4){
                this.itemData.buffTxt.pos.x = posX - 152; //149
                this.itemData.panah.pos.x = this.itemData.pos.x + 55;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == this.itemData.buff.length){
                this.itemData.buffTxt.pos.x = this.itemData.buffNextTxt.pos.x; 
                this.itemData.panah.alpha = 0;
            }
        }
        else if(this.itemData.id == "I004"){
            if(this.itemData.lvl == 0){
                this.itemData.buffTxt.pos.x = posX - 144;
                this.itemData.panah.pos.x = this.itemData.pos.x + 62;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 1){
                this.itemData.buffTxt.pos.x = posX - 147;
                this.itemData.panah.pos.x = this.itemData.pos.x + 61;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 2){
                this.itemData.buffTxt.pos.x = posX - 147; //147
                this.itemData.panah.pos.x = this.itemData.pos.x + 61;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 3){
                this.itemData.buffTxt.pos.x = posX - 149;
                this.itemData.panah.pos.x = this.itemData.pos.x + 56;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == 4){
                this.itemData.buffTxt.pos.x = posX - 149;
                this.itemData.panah.pos.x = this.itemData.pos.x + 56;
                this.itemData.panah.pos.y = this.itemData.pos.y - 9;
            }
            else if(this.itemData.lvl == this.itemData.buff.length){
                this.itemData.buffTxt.pos.x = this.itemData.buffNextTxt.pos.x; 
                this.itemData.panah.alpha = 0;
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();