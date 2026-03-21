(function(){
// Put user code here //
 
//  End of user code  //

game.object.ShopContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.intervalType = me.timer.setInterval(()=>{
            typeLevel = "shop";
        },1000);

        this.bank = game.user.userData.bank;
        this.bg = me.pool.pull("BGShop", 0, 0);
        this.addChild(this.bg, 1);
        
        this.itemList = [];
        
        this.bankTxt = me.pool.pull('me.BitmapText', me.game.world.width/2-137.5, -315, {
                                             font: "fontSushiKotak",
                                             size : 1,
                                             text : this.bank,
                                             textAlign : 'left',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 1,y: 0.5}
                                             }); 
        this.addChild(this.bankTxt, 30);
        
        this.playBtn = me.pool.pull("BtnPlayShop", 0, 455,{
          region: "button_play_small",
          container: this
        });
        me.game.world.addChild(this.playBtn, 22);
        
        this.btnClose = me.pool.pull("BtnCloseShop", 237.5, -350,{
            region : "close",
            container : this
        });
        me.game.world.addChild(this.btnClose, 23);
        
        this.nextBtnRight = me.pool.pull("BtnNext", 285, 100,{
            region : "tutor_next",
            container : this
        });
        me.game.world.addChild(this.nextBtnRight, 22);
        this.nextBtnRight.direction = "right";
        
        this.nextBtnLeft = me.pool.pull("BtnNext", -285, 100,{
            region : "tutor_next",
            container : this
        });
        me.game.world.addChild(this.nextBtnLeft, 22);
        
        this.slot = [];
        for(let i = 0; i < 2; i++){
            let radioBtn = me.pool.pull("RadioBtnShop", -55 + (i * 110), 350);
            me.game.world.addChild(radioBtn, 22);
            this.slot.push(radioBtn);
        }
        this.slot[0].setCurrentAnimation("on");
        
        this.nextBtnLeft.direction = "left";
        this.nextBtnLeft.alpha = 0;
        this.nextBtnLeft.flipX(true);
        
        this.distanceX = 1500;
        this.moveTime = 500;
        this.onMove = false;
        this.SpawnItem();
        this.currTime = 0;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        this.bankTxt.setText(this.bank);
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Container, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.Container, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.Container, 'onDeactivateEvent');

        // Put user code here //
        me.timer.clearInterval(this.intervalType);
        this.removeChild(this.bankTxt);
        
        if(!mainMenu)
            me.game.world.removeChild(this.playBtn);
        
        for(let i in this.itemList){
            this.removeChild(this.itemList[i].priceTxt);
            this.removeChild(this.itemList[i].buffTxt);
            
            for(let j in this.itemList[i].counterList){
                this.removeChild(this.itemList[i].counterList[j]);
            }
            
            this.removeChild(this.itemList[i].btn);
            this.removeChild(this.itemList[i]);
        }
        
        me.game.world.removeChild(this);
        
        if(this.tweenList != undefined){
            for(let i in this.tweenList){
                this.tweenList[i].stop();
            }
        }
        
        if(this.alphaTimer != undefined)
            me.timer.clearTimeout(this.alphaTimer);
        //  End of user code  //
	},

    // Put user code here //
    SpawnItem : function(){
        let posX = 0, posY = -101, distanceY = 175; 
        let playerItem = game.user.userData.item;
        
        let itemInfo = [], getDataItemInfo = game.controller.data.getDataItemInfo();
        let order = 1;
           
        for(let i = 1; i <= getDataItemInfo.length; i++){
            for(let j in getDataItemInfo){
                if(getDataItemInfo[j].order == i){
                    itemInfo.push(getDataItemInfo[j]);
                }
            }
        }
        
        let index = 0;
        for(let i in itemInfo){
            if(i == 3){
                posY = -111;
                posX += this.distanceX;
            }
            
            let item = me.pool.pull("Item", posX, posY);
            this.addChild(item, 2);
            
            item.id = itemInfo[i].id;
            if(playerItem[itemInfo[i].id] != undefined)
                item.lvl = playerItem[itemInfo[i].id];
            else
                item.lvl = 0;
            
            item.maxLvl = itemInfo[i].cost.length;
            item.cost = itemInfo[i].cost;
            item.buff = itemInfo[i].buff;
            item.setCurrentAnimation(itemInfo[i].id);
            item.container = this;
                
            let text = me.pool.pull('me.BitmapText', posX + 247.5, posY+20, {
                                             font: "fontSushiKotak",
                                             size : 0.6,
                                             text : itemInfo[i].cost[item.lvl],
                                             textAlign : 'left',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 1,y: 0.5}
                                             }); 
            this.addChild(text, 30);
            item.priceTxt = text;
            
            let buffTxt = me.pool.pull('me.BitmapText', posX, posY + 37, {
                                             font: "fontSushiKotak_White",
                                             size : 0.43, 
                                             text : '',
                                             textAlign : 'left',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 1,y: 0.5}
                                             }); 
            this.addChild(buffTxt, 30);
            item.buffTxt = buffTxt;
            
            let panah = me.pool.pull("Panah", posX + 125, posY + 37);
            this.addChild(panah, 30);
            item.panah = panah;
            
            let buffNextTxt = me.pool.pull('me.BitmapText', posX  + 150, posY + 37, {
                                             font: "fontSushiKotak",
                                             size : 0.43,
                                             text : '',
                                             fillStyle : "#00FF00",
                                             textAlign : 'left',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 1, y: 0.5}
                                             }); 
            this.addChild(buffNextTxt, 30);
            item.buffNextTxt = buffNextTxt;
            
            let counterList = [];
            let buyBtn = me.pool.pull("BuyBtn", posX + 169, posY + 24);
            this.addChild(buyBtn, 30);
            
            for(let j = 0; j < itemInfo[i].cost.length; j++){
                let counter = me.pool.pull("LvlCounter", posX - 106.5 + (j * 43.5), posY + 24.5);
                this.addChild(counter, 31);
                buyBtn.counterPos = counter.pos.y;
                counterList.push(counter);
            }
            item.counterList = counterList;
            
            
            buyBtn.itemData = item;
            buyBtn.CheckPrice();
            item.btn = buyBtn;
            
            this.itemList.push(item);
            
            posY += distanceY;
            
            if(i >= 3){
                this.itemList[i].buffTxt.alpha = 0;
                this.itemList[i].panah.alpha = 0;
                this.itemList[i].buffNextTxt.alpha = 0;
            }
            else{
                this.itemList[i].btn.UpdateTxt();
            }
        }
        
        //this.itemList[0].buffNextTxt.pos.x -= 75;
        //this.itemList[1].buffNextTxt.pos.x -= 65;
        //this.itemList[2].buffNextTxt.pos.x -= 52;
        //this.itemList[3].buffNextTxt.pos.x -= 50;
    },
    
    Hide : function(){
        if(mainMenu){
            me.game.viewport.fadeIn("#000000", 100,()=>{
                this.bankTxt.pos.y += 9000;
                this.playBtn.pos.y += 9000;
                
                for(let i in this.itemList){
                    this.itemList[i].priceTxt.pos.y += 9000;
                    this.itemList[i].buffTxt.pos.y += 9000;
                    this.itemList[i].panah.pos.y += 9000;
                    this.itemList[i].buffNextTxt.pos.y += 9000;
                    
                    for(let j in this.itemList[i].counterList){
                        this.itemList[i].counterList[j].pos.y += 9000;
                    }
                    
                    this.itemList[i].btn.pos.y += 9000;
                    this.itemList[i].pos.y += 9000;
                }
                
                this.bg.pos.y += 9000;
                me.state.change(game.state.mainmenu);
            });
        }else{
            me.game.viewport.fadeIn("#000000", 100,()=>{
                this.bankTxt.pos.y += 9000;
                this.playBtn.pos.y += 9000;
                
                for(let i in this.itemList){
                    this.itemList[i].priceTxt.pos.y += 9000;
                    this.itemList[i].buffTxt.pos.y += 9000;
                    this.itemList[i].panah.pos.y += 9000;
                    this.itemList[i].buffNextTxt.pos.y += 9000;
                    
                    for(let j in this.itemList[i].counterList){
                        this.itemList[i].counterList[j].pos.y += 9000;
                    }
                    
                    this.itemList[i].btn.pos.y += 9000;
                    this.itemList[i].pos.y += 9000;
                }
                
                this.bg.pos.y += 9000;
                me.state.change(game.state.mainmenu);
            });
        }
    },
    
    CheckAllPrice : function(){
        for(let i in this.itemList){
            this.itemList[i].btn.CheckPrice();
        }  
    },
    
    Play : function(){
        me.game.viewport.fadeIn("#000000", 100,()=>{
            this.bankTxt.pos.y += 9000;
            this.playBtn.pos.y += 9000;
            
            for(let i in this.itemList){
                this.itemList[i].priceTxt.pos.y += 9000;
                this.itemList[i].buffTxt.pos.y += 9000;
                this.itemList[i].panah.pos.y += 9000;
                this.itemList[i].buffNextTxt.pos.y += 9000;
                
                for(let j in this.itemList[i].counterList){
                    this.itemList[i].counterList[j].pos.y += 9000;
                }
                
                this.itemList[i].btn.pos.y += 9000;
                this.itemList[i].pos.y += 9000;
            }
            
            this.bg.pos.y += 9000;
            me.state.change(game.state.level1);
        });
    },
    
    Show : function(){
        this.bankTxt.pos.y -= 9000;
        this.playBtn.pos.y -= 9000;
        
        for(let i in this.itemList){
            this.itemList[i].priceTxt.pos.y -= 9000;
            this.itemList[i].buffTxt.pos.y -= 9000;
            this.itemList[i].buffNextTxt.pos.y -= 9000;
            this.itemList[i].panah.pos.y -= 9000;
            
            for(let j in this.itemList[i].counterList){
                this.itemList[i].counterList[j].pos.y -= 9000;
            }
            
            this.itemList[i].btn.pos.y -= 9000;
            this.itemList[i].pos.y -= 9000;
        }
        
        
        this.bg.pos.y -= 9000;
    },
    
    Move : function(direction){
        if(this.onMove == false){
            this.currTime = 0;
            this.tweenList = [];
            this.moveDirection = direction;
            this.onMove = true;
            
            for(let i in this.itemList){
                let distance = this.distanceX, alpha = 0;
                if(direction == "left"){
                    this.nextBtnRight.alpha = 1;
                    this.nextBtnLeft.alpha = 0;
                    distance = this.distanceX;
                    if(i < 3){
                        alpha = 1;
                    }
                    else{
                        alpha = 0;
                    }
                }
                else if(direction == "right"){
                    this.nextBtnRight.alpha = 0;
                    this.nextBtnLeft.alpha = 1;
                    distance = this.distanceX * -1;
                    if(i < 3){
                        alpha = 0;
                    }
                    else{
                        alpha = 1;
                    }
                }
                
                let tween1 = new me.Tween(this.itemList[i].pos).to({x: this.itemList[i].pos.x + distance}, this.moveTime);
                tween1.start(); this.tweenList.push(tween1);
                
                let tween2 = new me.Tween(this.itemList[i].priceTxt.pos).to({x: this.itemList[i].priceTxt.pos.x + distance}, this.moveTime);
                tween2.start(); this.tweenList.push(tween2);
                
                let tween3 = new me.Tween(this.itemList[i].buffTxt.pos).to({x: this.itemList[i].buffTxt.pos.x + distance}, this.moveTime);
                tween3.start(); this.tweenList.push(tween3);
                
                let tween4 = new me.Tween(this.itemList[i].buffNextTxt.pos).to({x: this.itemList[i].buffNextTxt.pos.x + distance}, this.moveTime);
                tween4.start(); this.tweenList.push(tween4);
                
                let tween5 = new me.Tween(this.itemList[i].panah.pos).to({x: this.itemList[i].panah.pos.x + distance}, this.moveTime);
                tween5.start(); this.tweenList.push(tween5);
                
                let tween6 = new me.Tween(this.itemList[i].btn.pos).to({x: this.itemList[i].btn.pos.x + distance}, this.moveTime);
                tween6.start(); this.tweenList.push(tween6);
                
                for(let j in this.itemList[i].counterList){
                    let tween = new me.Tween(this.itemList[i].counterList[j].pos).to({x: this.itemList[i].counterList[j].pos.x + distance}, this.moveTime);
                    tween.start(); this.tweenList.push(tween);
                    
                    let tween2 = new me.Tween(this.itemList[i].counterList[j].alpha).to(alpha, this.moveTime);
                    tween2.start(); this.tweenList.push(tween2);
                }
            }
            
            this.alphaTimer = me.timer.setInterval(function(){
                this.currTime = Math.min(this.currTime + 50, this.moveTime);
                let fadeAlpha = 0;
                
                for(let i in this.itemList){
                    if(this.moveDirection == "right"){
                        if(i < 3){
                            fadeAlpha = (this.moveTime - this.currTime) / this.moveTime;
                        }
                        else{
                            fadeAlpha = this.currTime / this.moveTime;
                        }    
                    }
                    else{
                        if(i < 3){
                            fadeAlpha = this.currTime / this.moveTime;
                        }
                        else{
                            fadeAlpha = (this.moveTime - this.currTime) / this.moveTime;
                        }
                    }
                    
                    
                    this.itemList[i].priceTxt.alpha = fadeAlpha;
                    this.itemList[i].buffTxt.alpha = fadeAlpha;
                    this.itemList[i].buffNextTxt.alpha = fadeAlpha;
                    this.itemList[i].panah.alpha = fadeAlpha;
                    this.itemList[i].btn.alpha = fadeAlpha;
                    this.itemList[i].alpha = fadeAlpha;
                    
                    for(let j in this.itemList[i].counterList){
                        this.itemList[i].counterList[j].alpha = fadeAlpha;
                    }
                }
                
                if(this.currTime == this.moveTime){
                    me.timer.clearInterval(this.alphaTimer);
                    for(let i in this.itemList){
                        if(this.itemList[i].alpha == 1){
                            this.itemList[i].btn.UpdateTxt();
                        }
                    }
                    this.onMove = false;
                }
            }.bind(this), 50);
            
            for(let k in this.slot){
                if(this.slot[k].isCurrentAnimation("on")){
                    this.slot[k].setCurrentAnimation("off");
                    if(direction == "left"){
                        this.slot[parseInt(k) - 1].setCurrentAnimation("on");
                    }
                    else if(direction == "right"){
                        this.slot[parseInt(k) + 1].setCurrentAnimation("on");
                    }
                    break;
                }
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();