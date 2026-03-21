(function(){
// Put user code here //
 
//  End of user code  //

game.object.TutorialContainer = me.Container.extend({
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.finishClick = false;
        this.currentSlot = 0;
        this.show = true;
        
        this.bg = me.pool.pull("bgCoklat", me.game.viewport.width/2, me.game.viewport.height/2);
        me.game.world.addChild(this.bg, 150);
        
        this.tutor = [];
        this.start = false;
       
        let list = ["tutorPage_1", "tutorPage_2", "tutorPage_3", "tutorPage_4"];
        for(let i = 0; i < list.length; i++){
            let tutor = me.pool.pull ("me.Sprite", 271, 575, {
                image: game.textureMap.get("gameplay"),
                region: list[i]
            });
            me.game.world.addChild(tutor, 200);
            this.tutor.push(tutor);
        }
        
        this.slot = []; let posX = -112.5; let distanceX = 75;
        for(let i = 0; i < 4; i++){
            let slot = me.pool.pull ("RadioBtn", posX + (i * distanceX), 500);
            me.game.world.addChild(slot, 202);
            this.slot.push(slot);
        }
        
        let centang = me.pool.pull("Centang", 155, -360);
        me.game.world.addChild(centang, 202);
        
        let centang2 = me.pool.pull("Centang", 155, -300);
        me.game.world.addChild(centang2, 202);
        
        let centang3 = me.pool.pull("Centang", 155, -240);
        me.game.world.addChild(centang3, 202);
        
        this.centang = []; this.centang.push(centang); this.centang.push(centang2); this.centang.push(centang3);
        
        this.hand = me.pool.pull("Hand", 45, 105);
        me.game.world.addChild(this.hand, 202);
        
        this.handEff = me.pool.pull("HandEff", 25, 80);
        me.game.world.addChild(this.handEff, 201);
        
        this.hook = me.pool.pull("HookTutor", 0, 639);
        me.game.world.addChild(this.hook, 202);
        this.hookPos = this.hook.pos.y;
        this.hook.setCurrentAnimation("get");
        this.sushi = me.pool.pull("SushiTutor", 0, 177.5);
        me.game.world.addChild(this.sushi, 203);
        
        this.sushi2 = me.pool.pull("SushiTutor2", -190, 263);
        me.game.world.addChild(this.sushi2, 203);
        
        this.char = me.pool.pull("KarakterTutor", 0, -10);
        me.game.world.addChild(this.char, 203);
        
        this.coin = me.pool.pull("CoinTutor", -205, -272.5);
        me.game.world.addChild(this.coin, 203);
        
        this.sushiTable = me.pool.pull("SushiTableTutor", 0, -103);
        me.game.world.addChild(this.sushiTable, 204);
        
        this.bar = me.pool.pull("TimeBarTutor", 0, -490);
        me.game.world.addChild(this.bar, 203);
        
        this.timerTxt = game.assetBundle.sushifontputih(285, 70, {
                size : 0.7,
                text : "2:00",
                textAlign : 'center',
                textBaseAlign : 'middle',
            }); 
        me.game.world.addChild(this.timerTxt, 205);
        
        this.barChar = me.pool.pull("BarCharTutor", 211.5, -288);
        me.game.world.addChild(this.barChar, 205);
        this.barChar.container = this;
        
        // this.txt = game.assetBundle.sushifontputih(me.game.world.width/2+228, 350, {
        //     size : 0.625,
        //     fillStyle : "#000000",
        //     text : "",
        //     textAlign : 'center',
        //     textBaseAlign : 'middle'
        // }); 
        // me.game.world.addChild(this.txt, 205);
        
        this.nextBtn = me.pool.pull("NextTutorBtn", 281, 48,{container:this});
        me.game.world.addChild(this.nextBtn, 204);
        this.nextBtn.direction = "right";
        this.nextBtn.container = this;
        
        this.backBtn = me.pool.pull("BackTutorBtn", -281, 48,{container:this});
        me.game.world.addChild(this.backBtn, 204);
        this.backBtn.direction = "left";
        //this.backBtn.flipX(true);
        this.backBtn.container = this;
        
        this.btnClose = me.pool.pull("CloseTutorBtn", 237.5, -550,{
            region : "close",
            container : this
        });
        me.game.world.addChild(this.btnClose, 204);
        
        this.btnPlay = me.pool.pull("BtnPlayTutor", 0, 455,{
            region : "button_play",
            container : this
        });
        me.game.world.addChild(this.btnPlay, 206);
        
        this.Hide();
 
        this.onMove = false;
        
        this.nextBtn.tweenMove.stop();
        this.nextBtn.tweenMove2.stop();
        this.nextBtn.pos.x = this.nextBtn.oriPos;
        
        this.backBtn.tweenMove.stop();
        this.backBtn.tweenMove2.stop();
        this.backBtn.pos.x = this.backBtn.oriPos;
        
        this.nextBtn.setCurrentAnimation("off");
        this.backBtn.setCurrentAnimation("off");
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        
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
        for(let i = 0; i < this.slot.length; i++){
            me.game.world.removeChild(this.slot[i]);
        }
        
        me.game.world.removeChild(this.hand);
        me.game.world.removeChild(this.handEff);
        me.game.world.removeChild(this.hook);
        me.game.world.removeChild(this.sushi);
        me.game.world.removeChild(this.coin);
        me.game.world.removeChild(this.bg);
        me.game.world.removeChild(this.backBtn);
        me.game.world.removeChild(this.nextBtn);
        me.game.world.removeChild(this.btnClose);
        me.game.world.removeChild(this.centang[0]);
        me.game.world.removeChild(this.centang[1]);
        me.game.world.removeChild(this.centang[2]);
        me.game.world.removeChild(this.bar);
        me.game.world.removeChild(this.char);
        // me.game.world.removeChild(this.txt);
        me.game.world.removeChild(this.sushiTable);
        me.game.world.removeChild(this.timerTxt);
        me.game.world.removeChild(this.barChar);
        me.game.world.removeChild(this.btnPlay);
        for(let i in this.tutor){
            me.game.world.removeChild(this.tutor[i]);
        }
        //  End of user code  //
	},

    // Put user code here //
    HookMove(){
        // this.txt.setText("10");
        this.ChangeTutor(0);
        this.hook.setCurrentAnimation("get");
        this.hook.pos.y = 1000;
        this.hook.pos.x = me.game.viewport.width / 2;
        this.hand.pos.x = me.game.viewport.width / 2 + 45;
        this.handEff.alpha = 1;
        this.handEff.setCurrentAnimation("pause");
        this.hand.setCurrentAnimation("end");
        //this.sushi.pos.x = me.game.viewport.width / 2;
        this.sushi2.pos.x = me.game.viewport.width / 2 - 190;
        this.sushiTable.alpha = 0;
        this.barChar.alpha = 0;// this.barChar.setCurrentAnimation("green");
    },
    
    CancelHook : function(){
        this.hook.setCurrentAnimation("close");
        this.hook.pos.y = this.hookPos;
        this.hook.pos.x = me.game.viewport.width / 2;
        this.sushi.pos.x += 9000;
        this.sushi2.pos.x += 9000;
        this.hand.pos.x += 9000;
        this.handEff.alpha = 0;
        this.barChar.alpha = 0;
    },
    
    Angry : function(){
        this.sushiTable.alpha = 1;
        this.sushiTable.setCurrentAnimation("2");
        this.ChangeTutor(1);
        this.char.alpha = 1;
        // this.txt.setText("1");
        this.char.setCurrentAnimation("marah");
        this.barChar.alpha = 1; this.barChar.setCurrentAnimation("red");
    },
    
    CancelAngry : function(){
        this.char.alpha = 0;
        // this.txt.setText("");
    },
    
    CompleteOrder : function(){
        this.ChangeTutor(2);
        this.centang[0].alpha = 1;
        this.centang[1].alpha = 1;
        this.centang[2].alpha = 1;
        this.coin.alpha = 1;
        this.barChar.alpha = 1;
        this.barChar.setCurrentAnimation("green");
        this.sushiTable.alpha = 1;
        this.bar.alpha = 1;
        this.bar.setCurrentAnimation("full");
        this.timerTxt.setText("02 : 00");
        // this.txt.setText("10");
        this.sushiTable.setCurrentAnimation("3");
    },
    
    CancelCompleteOrder : function(){
        this.barChar.alpha = 0;
        this.centang[0].alpha = 0;
        this.centang[1].alpha = 0;
        this.centang[2].alpha = 0;
        this.sushiTable.alpha = 0;
        this.coin.alpha = 0;
        this.coin.setCurrentAnimation("stop");
        this.bar.alpha = 0;
        this.timerTxt.setText("");
    },
    
    Move : function(direction){
        let index = 0;
        this.Cancel();
        this.hook.pos.x = me.game.viewport.width / 2;
        this.btnPlay.pos.x = 9000;
        
        
            
        if(direction == "right"){
            if(this.currentSlot + 1 <= 4){
                this.currentSlot++;
            }
        }
        else if(direction == "left"){
            if(this.currentSlot - 1 >= 0){
                this.currentSlot--;
            }
        }
        
        if(this.currentSlot == 0)
            this.backBtn.alpha = 0;
        else if(this.currentSlot < 3){
            this.backBtn.alpha = 1;
            this.nextBtn.alpha = 1;
        }
        else if(this.currentSlot == 3)
            this.nextBtn.alpha = 0;
        
        if(this.currentSlot == 0){
            this.HookMove();   
        }
        else if(this.currentSlot == 1){
            this.Angry();
        }
        else if(this.currentSlot == 2){
            this.hook.pos.x = me.game.viewport.width / 2;
            this.CompleteOrder();
        }
        else if(this.currentSlot == 3){
            this.ChangeTutor(3);
            this.hook.pos.x = 9000;
            this.btnPlay.pos.x = me.game.viewport.width /2;
        }
        else{
            this.ChangeTutor(this.currentSlot);
        }
        
        for(let i = 0; i < this.slot.length; i++){
            if(i == this.currentSlot){
                this.slot[i].setCurrentAnimation("on");
            }
            else{
                this.slot[i].setCurrentAnimation("off");
            }
            this.slot[i].alpha = 0;
        }
    },
    
    ChangeTutor : function(index){
        if(this.currentSlot < 4){
            for(let i in this.tutor){
                if(i != index){
                    this.tutor[i].alpha = 0;
                }
                else{
                    this.tutor[i].alpha = 1;
                }
            }
        }
    },
    
    Cancel : function(){
        this.CancelCompleteOrder();
        this.CancelHook();
        this.CancelAngry();
    },
    
    Close : function(){
        if(this.show){
            this.Hide();
            
            if(this.start == false){
                if(game.user.userData.haveTutorial === 0 && inGamePlay){
                    let firstPlay = true;
                    me.timer.setTimeout(()=>{
                        if(firstPlay){
                            firstPlay = false;
                            this.container.orderFunc();
                        }
                    }, 1000);
                }else{
                    this.pauseContainer.Show();
                }
            }
            else{
                this.start = false;
            }
        }
    },
    
    Hide : function(){
        if(this.show == true){
            for(let i = 0; i < this.slot.length; i++){
                this.slot[i].pos.y += 9000;
            }
            
            this.Cancel();
            
            this.coin.pos.y += 9000;
            this.hand.pos.y += 9000;
            this.handEff.pos.y += 9000; 
            this.hook.pos.y += 9000;
            this.sushi.pos.y += 9000;
            this.sushi2.pos.y += 9000;
            this.bg.pos.y += 9000;
            this.backBtn.pos.y += 9000;
            this.nextBtn.pos.y += 9000;
            
            this.btnClose.pos.y += 9000;
            this.centang[0].pos.y += 9000;
            this.centang[1].pos.y += 9000;
            this.centang[2].pos.y += 9000;
            this.bar.pos.y += 9000;
            this.char.pos.y += 9000;
            // this.txt.setText("");
            this.sushiTable.pos.y += 9000;
            this.timerTxt.setText("");
            this.barChar.pos.y += 9000;
            this.btnPlay.pos.y += 9000;
            
            for(let i in this.tutor){
                this.tutor[i].alpha = 0; //+= 9000; 
            }
            this.currentSlot = 0;
            this.show = false;
        }
    },
    
    Show : function(){
        if(this.show == false){
            this.bg.pos.y -= 9000;
            this.hand.pos.y -= 9000; 
            this.hook.pos.y -= 9000;
            this.coin.pos.y -= 9000;
            this.sushi.pos.y -= 9000;
            this.sushi2.pos.y -= 9000;
            this.backBtn.pos.y -= 9000;
            this.nextBtn.pos.y -= 9000;
            this.backBtn.alpha = 1;
            this.nextBtn.alpha = 1;

            this.handEff.pos.y -= 9000; this.handEff.alpha = 0;
            this.btnClose.pos.y -= 9000;
            this.centang[0].pos.y -= 9000;
            this.centang[1].pos.y -= 9000;
            this.centang[2].pos.y -= 9000;
            this.bar.pos.y -= 9000;
            this.char.pos.y -= 9000;
            //this.txt.pos.y -= 9000;
            this.sushiTable.pos.y -= 9000;
            this.barChar.pos.y -= 9000;
            this.btnPlay.pos.y -= 9000;
            
            for(let i in this.tutor){
                this.tutor[i].alpha = 1; //-= 9000;
            }
            
            for(let i = 0; i < this.slot.length; i++){
                this.slot[i].pos.y -= 9000;
            }
            
            this.show = true;
            
            this.currentSlot = -1;
            this.Move("right");
        }
    },
    
    /*Close : function(){
        if(this.show){
            this.Hide();
            this.pauseContainer.tuttor = true;
            if(this.start == false){
                if(game.user.userData.haveTutorial === 0 && inGamePlay){
                    let firstPlay = true;
                    me.timer.setTimeout(()=>{
                        if(firstPlay){
                            firstPlay = false;
                            this.container.orderFunc();
                        }
                    }, 1000);
                }else{
                    this.pauseContainer.Show();
                }
            }
            else{
                this.start = false;
            }
        }
    },*/
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();