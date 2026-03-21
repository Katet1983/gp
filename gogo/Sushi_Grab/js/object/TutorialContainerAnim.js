(function(){
// Put user code here //
 
//  End of user code  //

game.object.TutorialContainerAnim = me.Container.extend({
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
       
        //let list = ["tutorial_Page_1-2", "tutor_anim_2", "tutor_anim_3", "tutor_anim_4", "tutor_anim_5", "tutor_anim_6", "tutor_anim_7"];
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
        
        this.hand = me.pool.pull("Hand", 45, 100);
        me.game.world.addChild(this.hand, 202);
        
        this.hand2 = me.pool.pull("Hand", -145, 140);
        me.game.world.addChild(this.hand2, 202);
        
        this.handEff = me.pool.pull("HandEff", 25, 75);
        me.game.world.addChild(this.handEff, 201);
        
        this.handEff2 = me.pool.pull("HandEff", -175, 115);
        me.game.world.addChild(this.handEff2, 201); 
        
        this.hook = me.pool.pull("HookTutor", 0, 639);
        me.game.world.addChild(this.hook, 202);
        this.hookPos = this.hook.pos.y;
        
        this.sushi = me.pool.pull("SushiTutor", 0, 177.5);
        me.game.world.addChild(this.sushi, 203);
        
        this.sushi2 = me.pool.pull("SushiTutor2", -190, 263);
        me.game.world.addChild(this.sushi2, 203);
        
        this.char = me.pool.pull("KarakterTutor", 0, -10);
        me.game.world.addChild(this.char, 203);
        
        this.timerTxt = me.pool.pull('me.BitmapText', 278.5, 66.3, {
                                             font: "fontSushiKotak_White",
                                             //fillStyle :  "white",
                                             size : 0.753,
                                             text : "2:00",
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             //anchorPoint : {x: 0.5,y: 0.5}
                                             }); 
        me.game.world.addChild(this.timerTxt, 204);
        
        this.btnHook = me.pool.pull("BtnHookTutor", -180, 0, {
                region : "tutor_anim_1",
                container : this
        });
        me.game.world.addChild(this.btnHook, 203);
        this.btnHook.func = this.HookMove2.bind(this);
        
        this.btnHook2 = me.pool.pull("BtnHookTutor", 10, 0, {
                region : "tutor_anim_1",
                container : this
        });
        me.game.world.addChild(this.btnHook2, 203);
        this.btnHook2.func = this.HookMove4.bind(this);
        
        this.angry = me.pool.pull("angrytutorial", 893.5, 275);
        me.game.world.addChild(this.angry, 205);
        
        this.angry2 = me.pool.pull("angrytutorial", 690, 271.5);
        me.game.world.addChild(this.angry2, 205);
        this.angry2.flipX(true);
        
        this.coin = me.pool.pull("CoinTutor", -205, -272.5);
        me.game.world.addChild(this.coin, 203);
        
        this.sushiTable = me.pool.pull("SushiTableTutor", 0, -103);
        me.game.world.addChild(this.sushiTable, 204);
        
        this.bar = me.pool.pull("TimeBarTutor", 0, -490);
        me.game.world.addChild(this.bar, 203);
        
        this.barEff = me.pool.pull("EffBarTutor", 0, -500);
        me.game.world.addChild(this.barEff, 204);
        
        this.barChar = me.pool.pull("BarCharTutor", 211.5, -288);
        me.game.world.addChild(this.barChar, 205);
        this.barChar.container = this;
        
        // this.txt = game.assetBundle.sushifontputih(me.game.world.width/2+238, 350, {
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
            
        this.btnPlay = me.pool.pull("BtnPlayTutorAnim", 0, 455,{
            region : "button_play",
            container : this
        });
        me.game.world.addChild(this.btnPlay, 206);
 
        this.onMove = false;
        this.alphaInterval = me.timer.setInterval(function(){
            if(this.angry.alpha == 0){
                this.angry.alpha = 1;
                this.angry2.alpha = 1;
            }
            else{
                this.angry.alpha = 0;
                this.angry2.alpha = 0;
            }
        }.bind(this), 200);
        
        this.timeOut1;
        this.timeOut2;
        
        this.filtergelap = me.pool.pull ("me.Sprite", me.game.world.width/2, me.game.viewport.height/2 +120, {
                            image: game.textureMap.get("gameplay"),
                            region: "filtergelap"
                        });
        me.game.world.addChild(this.filtergelap, 203);
        this.filtergelap.alpha = 0;
        
        this.Hide();
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
        this.Cancel();
        
        me.timer.clearInterval(this.alphaInterval);
        for(let i = 0; i < this.slot.length; i++){
            me.game.world.removeChild(this.slot[i]);
        }
        
        me.game.world.removeChild(this.btnHook);
        me.game.world.removeChild(this.filtergelap);
        me.game.world.removeChild(this.btnHook2);
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
        me.game.world.removeChild(this.barEff);
        me.game.world.removeChild(this.char);
        me.game.world.removeChild(this.angry2);
        me.game.world.removeChild(this.angry);
        // me.game.world.removeChild(this.txt);
        me.game.world.removeChild(this.sushiTable);
        // me.game.world.removeChild(this.timerTxt);
        me.game.world.removeChild(this.btnPlay);
        me.game.world.removeChild(this.barChar);
        
        for(let i in this.tutor){
            me.game.world.removeChild(this.tutor[i]);
        }
        //  End of user code  //
	},

    // Put user code here //
    HookMove(){
        this.onMove = false;
        // this.txt.setText("10");
        // this.barChar.alpha = 1; this.barChar.setCurrentAnimation("green");
        this.barChar.alpha = 0;
        this.btnHook.pos.x = me.game.viewport.width / 2;
        this.btnHook2.pos.x = 9000;
        this.ChangeTutor(0);
        this.hook.setCurrentAnimation("close");
        this.sushi.pos.x = me.game.viewport.width / 2;
        this.sushi2.pos.x = me.game.viewport.width / 2 - 190;
        this.hook.pos.y = this.hookPos;
        this.hook.pos.x = me.game.viewport.width / 2;
        this.hand.pos.x = me.game.viewport.width / 2 + 45;
        this.handEff.alpha = 1;
        this.handEff.setCurrentAnimation("idle");
        this.hand.setCurrentAnimation("idle");
        this.sushiTable.alpha = 0;
        
        /*let to = true;
        this.timeOut1 = me.timer.setTimeout(()=>{
            if(to){
                to = false;
                this.HookMove2();
            }
        }, 500);*/
    },
    
    HookMove2 : function(){
        if(!this.onMove){
            this.onMove = true;
            this.hand.pos.x += 9000;
            this.handEff.alpha = 0;
            this.hook.setCurrentAnimation("idle");
            this.tween = new me.Tween(this.hook.pos).to({y : 1000}, 500).onComplete(function(){
                this.hook.setCurrentAnimation("get");
                this.sushi.pos.x  += 9000;
                
                this.tweenBack = new me.Tween(this.hook.pos).to({y : this.hookPos}, 500).onComplete(function(){
                    this.HookMove3();
                    //me.game.world.removeChild(this.btnHook);
                }.bind(this));
                this.tweenBack.start();
            }.bind(this));
            this.tween.start();
        }
    },
    
    HookMove3 : function(){
        this.centang[0].alpha = 1;
        this.onMove = false;
        this.btnHook.pos.x = 9000;
        this.btnHook2.pos.x = (me.game.viewport.width / 2) - 180;
        this.hook.setCurrentAnimation("close");
        
        this.hook.pos.y = this.hookPos;
        this.hook.pos.x = me.game.viewport.width / 2;
        this.hand2.pos.x = (me.game.viewport.width / 2) - 145;
        this.hand2.alpha = 1;
        this.handEff2.alpha = 1;
        this.handEff2.setCurrentAnimation("idle");
        this.hand2.setCurrentAnimation("idle");
        
        this.sushiTable.alpha = 1;
        this.sushiTable.setCurrentAnimation("1");
        
        /*let to2 = true;
        this.timeOut2 = me.timer.setTimeout(()=>{
            if(to2){
                to2 = false;
                this.HookMove4();
            }
        }, 500);*/
    },
    
    HookMove4 : function(){
        if(!this.onMove){
            this.onMove = true;
            this.hand2.pos.x += 9000;
            this.handEff2.alpha = 0;
            this.hook.setCurrentAnimation("idle");
            this.hook.pos.x -= 190;
            this.tween = new me.Tween(this.hook.pos).to({y : 1100}, 350).onComplete(function(){
                this.hook.setCurrentAnimation("get2");
                this.sushi2.pos.x += 9000;
                
                this.tweenBack = new me.Tween(this.hook.pos).to({y : this.hookPos}, 500).onComplete(function(){
                    this.centang[1].alpha = 1;
                    this.sushiTable.setCurrentAnimation("2");
                    
                    this.delayNext = setTimeout(function(){
                        this.nextBtn.setCurrentAnimation("idle");
                        this.nextBtn.tweenMove.start();
                        // this.Move("right");
                        //this.HookMove();
                        this.filtergelap.alpha = 1;
                }.bind(this), 350);
                
            }.bind(this));
            this.tweenBack.start();
            }.bind(this));
            this.tween.start();
            
        }
    },
    
    CancelHook : function(){
        if(this.tween != undefined)
            this.tween.stop();
        
        if(this.tweenBack != undefined)
            this.tweenBack.stop();
        
        if(this.delayNext != undefined)
            clearTimeout(this.delayNext);
            
        this.hook.setCurrentAnimation("close");
        this.hook.pos.y = this.hookPos;
        this.hook.pos.x = me.game.viewport.width / 2;
        this.sushi.pos.x = 9000;
        this.sushi2.pos.x = 9000;
        this.btnHook.pos.x = 9000;
        this.btnHook2.pos.x = 9000;
        this.hand.pos.x = 9000;
        this.handEff.alpha = 0;
        this.hand2.pos.x = 9000;
        this.handEff2.alpha = 0;
    },
    
    Angry : function(){
        this.sushiTable.alpha = 1;
        this.sushiTable.setCurrentAnimation("2");
        
        this.angry.pos.x = 9000;
        this.angry2.pos.x = 9000;
        this.ChangeTutor(1);
        this.char.alpha = 1;
        // this.txt.setText("10");
        this.barChar.alpha = 1; this.barChar.setCurrentAnimation("green");
        this.char.setCurrentAnimation("idle");
        this.angryDelay = setTimeout(function(){
            // this.txt.setText("1");
            this.spawnAngry = true;
            this.barChar.setCurrentAnimation('move',()=>{
                if(this.spawnAngry){
                    this.spawnAngry = false;
                    this.angry.pos.x = me.game.viewport.width / 2  + 100;
                    this.angry2.pos.x = me.game.viewport.width / 2  - 100;
                    this.char.setCurrentAnimation("marah");
                    this.barChar.setCurrentAnimation("red");
                }
                return false;
            });
            this.angryDelay2 = setTimeout(this.Angry.bind(this), 3000);
        }.bind(this), 1000);
    },
    
    CancelAngry : function(){
        this.char.alpha = 0;
        this.angry.pos.x = 3000;
        this.angry2.pos.x = 3000;
        // this.txt.setText("");
        this.spawnAngry = false;
        if(this.angryDelay != undefined)
            clearTimeout(this.angryDelay);
            
        if(this.angryDelay2 != undefined)
            clearTimeout(this.angryDelay2);
    },
    
    CompleteOrder : function(){
        this.ChangeTutor(2);
        this.centang[0].alpha = 0;
        this.centang[1].alpha = 0;
        this.centang[2].alpha = 0;
        this.barChar.alpha = 1;
        this.barChar.setCurrentAnimation("green");
        this.coin.alpha = 0;
        this.barEff.alpha = 0;
        this.bar.alpha = 1;
        this.bar.setCurrentAnimation("idle");
        this.sushiTable.alpha = 0;
        // this.txt.setText("10");
        this.timerTxt.setText("01 : 40");
        this.delayOrder = setInterval(function(){
            if(this.centang[0].alpha == 0){
                this.centang[0].alpha = 1;
                this.sushiTable.alpha = 1;
                this.sushiTable.setCurrentAnimation("1");
            }
            else if(this.centang[1].alpha == 0){
                this.centang[1].alpha = 1;
                this.sushiTable.setCurrentAnimation("2");
            }
            else if(this.centang[2].alpha == 0){
                this.centang[2].alpha = 1;
                this.sushiTable.setCurrentAnimation("3");
            }
            else{
                this.coin.alpha = 1;
                this.coin.setAnimationFrame(0);
                this.coin.setCurrentAnimation("idle", function(){
                    this.bar.setCurrentAnimation("full");
                    this.barEff.alpha = 1;
                    this.barEff.setAnimationFrame(0);
                    this.barEff.setCurrentAnimation("idle", function(){return false;});
                    this.timerTxt.setText("02 : 00");
                    this.delayOrder2 = setTimeout(this.CompleteOrder.bind(this), 1500);
                    this.coin.setCurrentAnimation("stop");
                    return false;
                }.bind(this));
                clearInterval(this.delayOrder);
            }
        }.bind(this), 500);
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
        this.barEff.alpha = 0;
        this.timerTxt.setText("");
        
        if(this.delayOrder != undefined)
            clearInterval(this.delayOrder);
        
        if(this.delayOrder2 != undefined)
            clearTimeout(this.delayOrder2);
    },
    
    Move : function(direction){
        let index = 0;
        this.filtergelap.alpha = 0;
        this.Cancel();
        this.btnPlay.pos.x = 9000;
        this.hook.pos.x = me.game.viewport.width / 2;
        
        if(this.currentSlot == 0){
            this.nextBtn.tweenMove.stop();
            this.nextBtn.tweenMove2.stop();
            this.nextBtn.pos.x = this.nextBtn.oriPos;
            
            this.backBtn.tweenMove.stop();
            this.backBtn.tweenMove2.stop();
            this.backBtn.pos.x = this.backBtn.oriPos;
            
            this.nextBtn.tweenMove.start();
            this.backBtn.tweenMove.start();
        }
        
        if(direction == "right"){
            if(this.currentSlot + 1 <= 4){
                this.currentSlot++;
            }
            this.nextBtn.setCurrentAnimation("idle");
        }
        else if(direction == "left"){
            if(this.currentSlot - 1 >= 0){
                this.currentSlot--;
            }
        }
        
        if(this.currentSlot == 0){
            this.nextBtn.tweenMove.stop();
            this.nextBtn.tweenMove2.stop();
            this.nextBtn.pos.x = this.nextBtn.oriPos;
            
            this.nextBtn.setCurrentAnimation("off");
            this.backBtn.alpha = 0;
        }
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
        me.timer.clearTimeout(this.timeOut1);
        me.timer.clearTimeout(this.timeOut2);
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
                            telahSelesaiTuttorial = true;
                            game.controller.data.setTutorial();
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
            this.hand2.pos.y += 9000;
            this.handEff2.pos.y += 9000; 
            this.btnHook.pos.y += 9000;
            this.btnHook2.pos.y += 9000;
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
            this.barEff.pos.y += 9000;
            this.char.pos.y += 9000;
            this.angry.pos.y += 9000;
            this.angry2.pos.y += 9000;
            // this.txt.pos.y += 9000;
            this.sushiTable.pos.y += 9000;
            this.timerTxt.pos.y += 9000;
            this.btnPlay.pos.y += 9000;
            this.barChar.pos.y += 9000;
            this.filtergelap.pos.y += 9000;
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
            this.hand2.pos.y -= 9000; this.hand2.alpha = 0;
            this.hook.pos.y -= 9000;
            this.btnHook.pos.y -= 9000;
            this.btnHook2.pos.y -= 9000;
            this.coin.pos.y -= 9000;
            this.sushi.pos.y -= 9000;
            this.sushi2.pos.y -= 9000;
            this.backBtn.pos.y -= 9000;
            this.nextBtn.pos.y -= 9000;
            this.backBtn.alpha = 1;
            this.nextBtn.alpha = 1;

            this.handEff.pos.y -= 9000; this.handEff.alpha = 0;
            this.handEff2.pos.y -= 9000; this.handEff2.alpha = 0;
            this.btnClose.pos.y -= 9000;
            this.centang[0].pos.y -= 9000;
            this.centang[1].pos.y -= 9000;
            this.centang[2].pos.y -= 9000;
            this.bar.pos.y -= 9000;
            this.barEff.pos.y -= 9000;
            this.char.pos.y -= 9000;
            this.angry.pos.y -= 9000;
            this.angry2.pos.y -= 9000;
            // this.txt.pos.y -= 9000;
            this.sushiTable.pos.y -= 9000;
            this.timerTxt.pos.y -= 9000;
            this.btnPlay.pos.y -= 9000;
            this.barChar.pos.y -= 9000;
            this.filtergelap.pos.y -= 9000;
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
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();