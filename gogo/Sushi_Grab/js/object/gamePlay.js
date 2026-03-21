(function(){
// Put user code here //
 
//  End of user code  //

game.object.gamePlay = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        verify(settings, ["container"]);
        game.util.spread(this, settings, ["container"]);
        
        this.getScore       = 5;
        this.bonusScore     = 5;
        
        this.list = ["karakter01","karakter02","karakter03","karakter04","karakter06","karakter07","karakter08",
        "karakter09","karakter10","karakter11","karakter12","karakter13","karakter14","karakter15","karakter17","karakter18",
        "karakter20","karakter21"];
        this.totalKarakter = this.list.length;
        
        this.sushiList = this.container.sushidatamenit1;
        this.numberOrder = 0;
        this.sushiObj = [];
        this.sushiData = [];
        this.karakterList = [];
        this.play = true;
        this.end = true;
        this.buffTime = 0;
        this.buffCoin = 0;
        this.bonusCoin = false;
        this.highScore = false;
        this.spawnCoin = true;
        this.spawnCoinB = true;
        this.spawnCoin3 = true;
        this.gameSelesai = true;
        this.masihMain = true;
        
        //timer
        this.timeCounter    = me.pool.pull("timerGame", -152, -479,{container:this});
        let timeFrame       = me.pool.pull("timerGame", 0, -475,{container:this});
        this.timeFrameBlack  = me.pool.pull("timerGame", 0, -478.5,{container:this});
            timeFrame.setCurrentAnimation('time-frame');
            this.timeFrameBlack.setCurrentAnimation('time-frame-back');
        this.textTime = game.assetBundle.sushifontputih(me.game.world.width/2, this.timeCounter.pos.y-18, {
                size : 0.6,
                text : "",
                textAlign : 'center',
                textBaseAlign : 'middle'
            }); 
        me.game.world.addChild(this.textTime, 6);
        this.timeCounter.mask = new me.Rect(this.timeCounter.pos.x+301, this.timeCounter.pos.y, this.timeCounter.width-300, this.timeCounter.height);
        this.textTimeAnim = game.assetBundle.sushifontputih(me.game.world.width/2+215, this.timeCounter.pos.y-22, {
                size : 0.7,
                text : "",
                textAlign : 'center',
                textBaseAlign : 'middle'
            });
        this.posXtextTimeAnimdetik0 = this.textTimeAnim.pos.x-520;
        this.basePosXtimeCounter = this.timeCounter.pos.x;
        //--
        
        //score
        this.comboScore = 0;
        this.angka = game.user.userData.score;
        this.angka2 = 0;
        this.gambarScore = me.pool.pull("score", -190, -525);
        me.game.world.addChild(this.gambarScore, 4);
        this.gambarHighScore = me.pool.pull("gamePlayHighScore", 0, -531.5);
        me.game.world.addChild(this.gambarHighScore, 4);
        this.babi = me.pool.pull("celengan_babi", 195, -531.5);
        me.game.world.addChild(this.babi, 4);
        
        
        this.textScore = game.assetBundle.sushifontputih(me.game.world.width/2-130, this.gambarScore.pos.y-18.5, {//
                size : 0.6,
                text : game.user.userData.score,
                textAlign : 'right',
                textBaseAlign : 'middle'
            }); 
        this.textScore2 = game.assetBundle.sushifontputih(me.game.world.width/2-185, this.gambarScore.pos.y+390, {//270,-45, {
                size : 0.8,
                text : "",
                textAlign : 'right',
                textBaseAlign : 'middle'
            });
        this.textScore3 = game.assetBundle.sushifontputih(me.game.world.width/2-185, this.gambarScore.pos.y+350, {//-45, {
                size : 0.8,
                fillStyle : "#00FF00",
                text : "",
                textAlign : 'right',
                textBaseAlign : 'middle'
            }); 
        this.textHighScore = game.assetBundle.sushifontputih(me.game.world.width/2+55, this.gambarScore.pos.y-20, {
                size : 0.6,
                text : game.user.userData.highScore,
                textAlign : 'right',
                textBaseAlign : 'middle'
            }); 
        
        this.textbabi = game.assetBundle.sushifontputih(me.game.world.width/2+255, this.gambarScore.pos.y-20, {
                size : 0.6,
                text : game.user.userData.bank,
                textAlign : 'right',
                textBaseAlign : 'middle'
            }); 
        //--
        
        //spawn effect
        let karakter = me.pool.pull("karakter01", 0, -175,{container:this}),
            coinEff = me.pool.pull("coinEffect", -150, -480),
            coin = me.pool.pull("coin", -225, -275),
            marah1 = me.pool.pull("angryEffect1", me.game.viewport.width/2, me.game.viewport.height, {sudutX:0, sudutY:0});
            marah2 = me.pool.pull("angryEffect2", me.game.viewport.width/2, me.game.viewport.height, {sudutX:0, sudutY:0});
            marah3 = me.pool.pull("angryEffect3", me.game.viewport.width/2, me.game.viewport.height, {sudutX:0, sudutY:0});
            marah4 = me.pool.pull("angryEffect4", me.game.viewport.width/2, me.game.viewport.height, {sudutX:0, sudutY:0});
            effectItem = me.pool.pull("buffParticle", 0, me.game.viewport.height/2),
            asep = me.pool.pull("smoker", me.game.viewport.width/2, me.game.viewport.height);
        me.game.world.addChild(karakter, 0);
        me.game.world.addChild(coinEff, 0);
        me.game.world.addChild(coin, 0);
        me.game.world.addChild(marah1, 0);
        me.game.world.addChild(marah2, 0);
        me.game.world.addChild(marah3, 0);
        me.game.world.addChild(marah4, 0);
        me.game.world.addChild(effectItem, 0);
        me.game.world.addChild(asep, 0);
        
        me.game.viewport.fadeOut("#000000", 2000,()=>{
            me.game.world.addChild(this.timeCounter, 6);
            me.game.world.addChild(timeFrame, 7);
            me.game.world.addChild(this.timeFrameBlack, 4);
            if(this.container.playerItem.includes("I000")){
                let strengthIcon = me.pool.pull("I000", -225, -415);
                me.game.world.addChild(strengthIcon, 15);
            }
            if(this.container.playerItem.includes("I004")){
                let kucingIcon = me.pool.pull("kucingLogo", -160, -415);
                me.game.world.addChild(kucingIcon, 15);
            }
            me.game.world.addChild(this.container.pauseBtn, 35);
            me.game.world.addChild(this.textTimeAnim, 15);
            me.game.world.addChild(this.textScore, 5);
            me.game.world.addChild(this.textScore2, 5);
            me.game.world.addChild(this.textScore3, 5);
            me.game.world.addChild(this.textHighScore, 5);
            me.game.world.addChild(this.textbabi, 5);
            me.game.world.removeChild(karakter);
            me.game.world.removeChild(coin);
            me.game.world.removeChild(marah1);
            me.game.world.removeChild(marah2);
            me.game.world.removeChild(marah3);
            me.game.world.removeChild(marah4);
            me.game.world.removeChild(effectItem);
            me.game.world.removeChild(asep);
        });
        
        if(game.user.userData.haveTutorial < 1){
            this.tutorialContainer = me.pool.pull("TutorialContainerAnim", 0, 0);
            me.game.world.addChild(this.tutorialContainer, 103);
            this.tutorialContainer.container = this;
            this.tutorialContainer.Show();
        } else {
            let firstPlay = true;
            this.firstPlayTO = me.timer.setTimeout(()=>{
                if(firstPlay){
                    firstPlay = false;
                    this.orderFunc();
                }
            }, 2000);
        }
        
        //tween Boolean
        this.twnBoolNaik = false;
        //--
        
        //centang sushi
        this.cekbenar1 = me.pool.pull ("sushibenar", me.game.world.width/2+190,me.game.viewport.height/2-227.5);
        me.game.world.addChild(this.cekbenar1, 8);
        
        this.cekbenar2 = me.pool.pull ("sushibenar", me.game.world.width/2+190,me.game.viewport.height/2-292.5);
        me.game.world.addChild(this.cekbenar2, 8);
        
        this.cekbenar3 = me.pool.pull ("sushibenar", me.game.world.width/2+190,me.game.viewport.height/2-357.5);
        me.game.world.addChild(this.cekbenar3, 8);
        
        //tweenList
        this.tweenPlay = new me.Tween();
        this.tweenPlay2 = new me.Tween();
        this.timeCounterAnim = new me.Tween();
        this.tweenTextTimeAnim = new me.Tween();
        this.tweenTimeCounter =  new me.Tween();
        //
        
        this.addSushi = 0;
        
        this.PopUp = me.pool.pull ("popUpSushiTarget", me.game.viewport.width/2+185, me.game.viewport.height/2-292.5);
        me.game.world.addChild(this.PopUp, 6);
        this.PopUp.alpha = 0;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        if(this.timeCounter.duration < 0){
            this.masihMain = false;
            this.end = false;
        }
        this.targetSpawn = false;
        
        if(this.container.spawnerSushiContainer.waktuAddSushi >= 60 && this.addSushi == 0){
            this.addSushi = 1;
		    this.sushiList = this.container.sushidatamenit2;
	    }
		if(this.container.spawnerSushiContainer.waktuAddSushi >= 120 && this.addSushi == 1){
            this.addSushi = 2;
            this.sushiList = this.container.sushidatamenit3;
	    }

// 		if(this.container.waktu == 180){
// 		      this.sushiList = this.container.sushidata;
// 		}
        // if(this.container.addSushike3){
        //     this.sushiList = this.container.sushidatamenit2;
        //     this.container.addSushike3 = false;
        // }
        // if(this.container.waktu == 1){
        //     this.sushiList = this.container.sushidatamenit2;
        // }
        
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
        me.timer.clearInterval(this.intervalFinish);
        me.audio.stop("bgm-win");
        me.audio.stop("bgm-gameover2");
        me.timer.clearInterval(this.intervalMusic);
        me.timer.clearTimeout(this.firstPlayTO);
        me.timer.clearTimeout(this.clear1);
        me.timer.clearTimeout(this.clear2);
        me.timer.clearTimeout(this.clear3);
        me.timer.clearTimeout(this.clear4);
        me.timer.clearTimeout(this.clear5);
        
        this.tweenPlay.stop();
        this.tweenPlay2.stop();
        this.timeCounterAnim.stop();
        this.tweenTextTimeAnim.stop();
        this.tweenTimeCounter.stop();
        //  End of user code  //
	},

    // Put user code here //
    orderFunc:function(){
        if(this.gameSelesai){
            this.container.gantiSushi = false;
            //spawn Karakter
            let charXpos;
            if(me.game.viewport.width > 850){
                charXpos = -438.75-200;
            }else{
                charXpos = -me.game.viewport.width/2-275;
            }
            let karakterrdm = this.list[Math.floor(Math.random()*this.list.length)],
            char = me.pool.pull(karakterrdm, charXpos, -175,{container:this});
            me.game.world.addChild(char, 3);
            this.karakterList.push(char);
            let deleteIndex = this.list.indexOf(karakterrdm);
            if (deleteIndex > -1) {
                this.list.splice(deleteIndex, 1);
            }
            //--
            this.timeCounter.startTime = true;
            this.timeCounter.lastChance = false;
            me.timer.clearTimeout(this.container.timeouthapus);
            this.container.spawnSushi = true;
            this.container.sushipesanan1.alpha = 0;
            this.container.sushipesanan2.alpha = 0;
            this.container.sushipesanan3.alpha = 0;
            this.container.yangdigrab = [];
            this.sushiData = [];
            this.sushiData2 = [];
            this.sushiObj = [];
            
    	    this.cekbenar1.alpha = 0;
            this.cekbenar2.alpha = 0;
            this.cekbenar3.alpha = 0;
            this.benar1 = false;
            this.benar2 = false;
            this.benar3 = false;
            let posYShushi = [227.5, 292.5, 357.5];
            for(let i = 0; i < 3; i++){
                let sushiRdm1 = this.sushiList[Math.floor(Math.random()*this.sushiList.length)];
     
                if(this.container.playerItem.includes(sushiRdm1)){
                    i--;
                }
                else{
                    let sushi1 = me.pool.pull ("me.Sprite", me.game.world.width/2+190, me.game.viewport.height/2-posYShushi[i], {
                            image: game.textureMap.get("hook"),
                            region: sushiRdm1 + "_menu",
                            name:sushiRdm1
                        });
                    me.game.world.addChild(sushi1, 7);
                    sushi1.alpha = 0;
                    this.sushiObj.push(sushi1); 
                    this.sushiData.push(sushi1.name);
                    this.sushiData2.push(sushi1.name);
                }
            }
    
            for(let i = 0; i < this.totalKarakter; i++){
                if(this.numberOrder == i){
                    this.karakterList[i].orderTween();
                    this.orderMulai();
                }
            }   
        }
    },
    
    orderMulai: function(){
        this.container.clearsushi();
        if(this.karakterList[this.numberOrder].idleCondition){
            this.targetSpawn = true;
            // this.PopUp = me.pool.pull ("popUpSushiTarget", me.game.viewport.width/2+185, me.game.viewport.height/2-292.5);
            // me.game.world.addChild(this.PopUp, 6);
            this.PopUp.alpha = 1;
            this.sushiObj[0].alpha = 1;
            this.sushiObj[1].alpha = 1;
            this.sushiObj[2].alpha = 1;
            // console.log(this.sushiList);
            if(this.play){
                this.play = false;
                this.timeCounter.timeFunc();
            }
            this.finishOrder();   
        }else{
            let delay = true;
            this.clear1 = me.timer.setTimeout(()=>{
                if(delay){
                    delay = false;
                    this.orderMulai();
                }
            }, 500);
        }
    },
    
    finishOrder: function(){
        let orderLimit = true;
        this.intervalFinish = me.timer.setInterval(()=>{
            if(this.container.bgmPlay){
                this.container.bgmPlay = false;
                me.audio.play("bgm-sushi-ingame", false,()=>{this.container.bgmPlay = true}, 0.5);
            }
            for(let i = 0; i < this.totalKarakter; i++){
                if(this.numberOrder == i){
                    if(this.karakterList[i] == undefined){
                        
                    }else{
                        if(this.karakterList[i].finish){
                            this.numberOrder += 1;
                            if(this.numberOrder >= this.totalKarakter){
                                this.numberOrder = 0;
                                this.karakterList = [];
                                this.list = ["karakter01","karakter02","karakter03","karakter04","karakter06","karakter07","karakter08",
                                "karakter09","karakter10","karakter11","karakter12","karakter13","karakter14","karakter15","karakter17","karakter18",
                                "karakter20","karakter21"];
                            }
                            me.timer.clearInterval(this.intervalFinish);
                            if(orderLimit){
                                orderLimit = false;
                                this.orderFunc();
                                this.container.gantiSushi = true;
                            }
                        }
                    }
                }
            }
        },500);
    },
    
    cekPesanan1: function(){
        for(let i = 0; i < this.totalKarakter; i++){
            if(this.numberOrder == i){
                if(this.karakterList[i].karakterTimerPlay){
                    let data1 = this.sushiData,
                        index = data1.indexOf(this.container.yangdigrab[0]);
                    if (index > -1) {
                        data1.splice(index, 1);
                        this.indek = this.sushiData2.indexOf(this.container.yangdigrab[0]);
                        this.cekbenarsushi();
                        this.coinSpawn();
                    }else{
                        if(this.container.itemCookies == false){
                            me.audio.play(this.karakterList[i].suaramarah);
                            this.container.tampilinsusisalah(1);
                        }
                    }
                }
            }
        }
    },
    
    cekPesanan2:function(){
        for(let i = 0; i < this.totalKarakter; i++){
            if(this.numberOrder == i){
                if(this.karakterList[i].karakterTimerPlay){
                    let data1 = this.sushiData,
                        index = data1.indexOf(this.container.yangdigrab[1]);
                    if (index > -1) {
                        data1.splice(index, 1);
                        this.indek = this.sushiData2.indexOf(this.container.yangdigrab[1]);
                        this.coinSpawn();
                            if(this.indek == 0 && this.benar1 == true || this.indek == 1 && this.benar2 == true){
                                this.indeks = index + 1;
                                this.cekbenarsushiklokembar();
                            }else{
                                this.cekbenarsushi();
                            }
                    }else{
                        if(this.container.itemCookies == false){
                            me.audio.play(this.karakterList[i].suaramarah);
                            this.container.tampilinsusisalah(2);
                        }
                    }
                }
            }
        }
    },
    
    cekPesanan3:function(){
        for(let i = 0; i < this.totalKarakter; i++){
            if(this.numberOrder == i){
                if(this.karakterList[i].karakterTimerPlay){
                    let data1 = this.sushiData,
                        index = data1.indexOf(this.container.yangdigrab[2]);
                    if (index > -1) {
                        data1.splice(index, 1);
                        this.bonusCoin = true;
                        this.coinSpawn();
                        this.indek = this.sushiData2.indexOf(this.container.yangdigrab[2]);
                        this.ceklastbenarsushi();
                        this.timeCounter.startTime = false;
                        this.timeCounter.lastChance = true;
                    }else{
                        if(this.container.itemCookies == false){
                            me.audio.play(this.karakterList[i].suaramarah);
                            this.container.tampilinsusisalah(3);
                        }
                    }
                
                    if(this.sushiData.length == 0){
                        this.container.pesananbenarsmua();
                        this.karakterList[i].end = true;
                    }
                }
            }
        }
    },
    
    coinSpawn: function(){
        if(this.container.kue){
            if(this.spawnCoin){
                this.spawnCoin = false;
                me.audio.play("sfx-coin");
                
                if(this.container.sushiDariKue == 3){
                    this.angka += 20;
                    let angkaJumlah = 20;
                    this.angka2 = "+"+angkaJumlah;
                }else if(this.container.sushiDariKue == 2){
                    this.angka += 15;
                    let angkaJumlah = 15;
                    this.angka2 = "+"+angkaJumlah;
                }else if(this.container.sushiDariKue == 1){
                    this.angka += 10;
                    let angkaJumlah = 10;
                    this.angka2 = "+"+angkaJumlah;
                }
                        
                this.buffCoin = 0;
            //coin
                this.coin = me.pool.pull("coin", -225, -275);
                me.game.world.addChild(this.coin, 16);
                let limitTimeAnim1 = true,
                    limitTimeAnim2 = true;
                this.coin.setCurrentAnimation('Animation 1',()=>{
                    if(limitTimeAnim1){
                        limitTimeAnim1 = false;
                        this.spawnCoin = true;
                        this.tweenScoreBonus();
                        this.coin2 = me.pool.pull("coin", -160, -315);
                        me.game.world.addChild(this.coin2, 16);
                        this.coin2.setCurrentAnimation('up',()=>{
                            if(limitTimeAnim2){
                                this.coinEff = me.pool.pull("coinEffect", -150, -480);
                                me.game.world.addChild(this.coinEff, 20);
                                this.textScore.setText(this.angka);
                                me.game.world.removeChild(this.coin2);   
                            }
                            return false;
                        });
                        me.game.world.removeChild(this.coin);
                    }
                    return false;
                });
            }
            //--
        }else{
            if(this.spawnCoin){
                this.spawnCoin = false;
                me.audio.play("sfx-coin");
                
                if(this.bonusCoin){
                    this.angka += this.getScore*2;
                    let angkaJumlah = this.getScore;
                    this.angka2 = "+"+angkaJumlah;
                }else{
                    this.angka += this.getScore;
                    let angkaJumlah = this.getScore;
                    this.angka2 = "+"+angkaJumlah;
                }
                    
                                        
                this.buffCoin = 0;
            //coin
                this.coin = me.pool.pull("coin", -225, -275);
                me.game.world.addChild(this.coin, 16);
                let limitTimeAnim1 = true,
                    limitTimeAnim2 = true;
                this.coin.setCurrentAnimation('Animation 1',()=>{
                    if(limitTimeAnim1){
                        this.spawnCoin = true;
                        limitTimeAnim1 = false;
                        if(this.bonusCoin){
                            this.tweenScoreBonus();
                            this.tweenScore();
                        }else{
                            this.tweenScore();
                        }
                        this.coin2 = me.pool.pull("coin", -160, -315);
                        me.game.world.addChild(this.coin2, 16);
                        this.coin2.setCurrentAnimation('up',()=>{
                            if(limitTimeAnim2){
                                this.coinEff = me.pool.pull("coinEffect", -150, -480);
                                me.game.world.addChild(this.coinEff, 20);
                                this.textScore.setText(this.angka);
                                me.game.world.removeChild(this.coin2);
                            }
                            return false;
                        });
                        me.game.world.removeChild(this.coin);
                    }
                    return false;
                });
            }
            //--
        }
    },
    
    coinSpawnItem: function(){
        if(this.spawnCoin3){
            this.spawnCoin3 = false;
            me.audio.play("sfx-coin");
            
            this.angka += this.buffCoin;
            let angkaJumlah = this.buffCoin;
            this.angka2 = "+"+angkaJumlah;
            //game.controller.data.setgoldbank(angkaJumlah);
                    
            this.buffCoin = 0;
        //coin
            this.coin = me.pool.pull("coin", -225, -275);
            me.game.world.addChild(this.coin, 16);
            let limitTimeAnim1 = true,
                limitTimeAnim2 = true;
            this.coin.setCurrentAnimation('Animation 1',()=>{
                if(limitTimeAnim1){
                    limitTimeAnim1 = false;
                    this.tweenScoreBonus();
                    this.coin2 = me.pool.pull("coin", -160, -315);
                    me.game.world.addChild(this.coin2, 16);
                    this.coin2.setCurrentAnimation('up',()=>{
                        if(limitTimeAnim2){
                            limitTimeAnim2 = false;
                            this.coinEff = me.pool.pull("coinEffect", -150, -480);
                            me.game.world.addChild(this.coinEff, 20);
                            this.textScore.setText(this.angka);
                            this.spawnCoin3 = true;
                            me.game.world.removeChild(this.coin2);
                        }
                        return false;
                    });
                    me.game.world.removeChild(this.coin);
                }
                return false;
            });
        }
        //--
    },
    
    tweenScore: function(){
        this.textScore2.setText(this.angka2);
        this.tweenPlay = new me.Tween(this.textScore2.pos)
        .to({y:this.textScore2.pos.y-200}, 800)
        .easing(me.Tween.Easing.Sinusoidal.Out)
        .onComplete(()=>{
            this.textScore2.setText("");
            this.textScore2.pos.set(this.textScore2.pos.x, this.textScore2.pos.y+200,5);
        });
        this.tweenPlay.start();
    },
    
    tweenScoreBonus: function(){
        let txt = "Bonus "+this.angka2;
        this.textScore3.setText(txt);
        this.tweenPlay2 = new me.Tween(this.textScore3.pos)
        .to({y:this.textScore3.pos.y-200}, 800)
        .easing(me.Tween.Easing.Sinusoidal.Out)
        .onComplete(()=>{
            this.textScore3.setText("");
            this.textScore3.pos.set(this.textScore3.pos.x, this.textScore3.pos.y+200,5);
        });
        this.tweenPlay2.start();
        this.bonusCoin = false;
    },
    
    cekTargetScore: function(){
        if(this.gameSelesai){
            this.gameSelesai = false;
            this.end = false;
            
            me.timer.clearInterval(this.intervalFinish);
            this.karakterList[this.numberOrder].end = true;
            this.container.spawnSushi = false;
            me.timer.clearInterval(this.container.intervalspawnsushi1);
            me.timer.clearInterval(this.container.intervalspawnsushi2);
            me.timer.clearInterval(this.container.intervalspawnsushi3);
            
            let timeOutLimit = true;
            this.clear2 = me.timer.setTimeout(()=>{
                if(timeOutLimit){    
                    timeOutLimit = false;
                    this.container.tweenToAlpha()
                }
            },1000);
            this.container.sushipesanan1.alpha = 0;
            this.container.sushipesanan2.alpha = 0;
            this.container.sushipesanan3.alpha = 0;
            
            me.game.world.removeChild(this.container.buttonhook);
            me.game.world.removeChild(this.container.pauseBtn);
            
            //console.log("Game Over");
            if(this.angka > game.user.userData.highScore){this.highScore = true}
            let timeOutLimit4 = true;
            this.clear3 = me.timer.setTimeout(()=>{
                if(timeOutLimit4){
                    timeOutLimit4 = false;
                    typeLevel = "gameOver";
                    this.cekbenar1.alpha = 0;
                    this.cekbenar2.alpha = 0;
                    this.cekbenar3.alpha = 0;
                    this.bannerEnd = me.pool.pull("endBanner", 0, 0,{condition:"lose", container:this});
                    me.game.world.addChild(this.bannerEnd, 90);
                    
                    let timeOutLimit5 = true;
                    this.clear4 = me.timer.setTimeout(()=>{
                        if(timeOutLimit5){
                            timeOutLimit5 = false;
                            this.bannerEnd.onScreen();
                        }
                    },1000);
                    
                    
                    me.audio.stop("bgm-sushi-ingame");
                    this.playAudio = false;
                    me.audio.play("bgm-gameover2", false, ()=>{this.playAudio = true}, 0.5);
                    this.intervalMusic = me.timer.setInterval(()=>{
                        if(this.playAudio){
                            this.playAudio = false;
                            me.audio.play("bgm-gameover2", false, ()=>{this.playAudio = true}, 0.5);
                        }
                    },100);
                }
            }, 3000);
        }
    },
    
    timeUp: function(){
        // if(this.timeCounter.duration < -2 || this.timeCounter.pos == undefined){
        //     //console.log("Too late");
        // }else{
            let dataAwal = (520/this.timeCounter.xMax)*(this.buffTime-1),
                dataTime = 628.5 - dataAwal;
            let timeEffect = me.pool.pull("timeBarEffect", this.timeCounter.pos.x+125, this.timeFrameBlack.pos.y-10);
            me.game.world.addChild(timeEffect, 8);
            timeEffect.mask = new me.Rect(this.timeFrameBlack.pos.x+35, timeEffect.pos.y, this.timeFrameBlack.width, timeEffect.height);
            let wait = true;
            timeEffect.setCurrentAnimation('Animation 1',()=>{
                if(wait){
                    wait = false;
                    me.game.world.removeChild(timeEffect);
                    
                    let dataPos = this.buffTime;
                        data = this.buffTime;
                    
                    if(this.timeCounter.duration < 0){
                        data = this.buffTime+1;
                        dataPos = this.buffTime+1;
                    }
                    
                    this.timeCounter.durationText += data;
                    this.timeCounter.duration += data;
                    
                    this.timeCounterAnim = new me.Tween(this.timeCounter.pos)
                    .to({x:this.timeCounter.pos.x+(((520/this.timeCounter.xMax)*(dataPos)))}, 1000)
                    .easing(me.Tween.Easing.Sinusoidal.Out)
                    .onComplete(()=>{
                        if(this.timeCounter.pos.x >= this.basePosXtimeCounter){
                            this.timeCounter.pos.set(me.game.viewport.width/2-152, this.timeCounter.pos.y, 6);
                        }
                        this.timeCounter.startTime = true;
                        this.timeCounter.lastChance = false;
                    });
                    this.timeCounterAnim.start();
                    
                    if(this.timeCounter.pos.x >= dataTime){
                        this.textTimeAnim.setText("+"+this.buffTime);
                        this.tweenTextTimeAnim = new me.Tween(this.textTimeAnim.pos)
                        .to({x:this.textTimeAnim.pos.x + (((520/this.timeCounter.xMax)*(13)))}, 1000)
                        .easing(me.Tween.Easing.Sinusoidal.Out)
                        .onComplete(()=>{
                            this.textTimeAnim.setText("");
                            if(this.timeCounter.pos.x >= this.basePosXtimeCounter){
                                this.textTimeAnim.pos.set(me.game.world.width/2+215, this.textTimeAnim.pos.y, 15);
                            }
                        });
                        this.tweenTextTimeAnim.start();
                    }else{
                        this.textTimeAnim.setText("+"+this.buffTime);
                        this.tweenTextTimeAnim = new me.Tween(this.textTimeAnim.pos)
                        .to({x:this.textTimeAnim.pos.x + (((520/this.timeCounter.xMax)*(dataPos)))}, 1000)
                        .easing(me.Tween.Easing.Sinusoidal.Out)
                        .onComplete(()=>{
                            this.textTimeAnim.setText("");
                            if(this.timeCounter.pos.x >= this.basePosXtimeCounter){
                                this.textTimeAnim.pos.set(me.game.world.width/2+215, this.textTimeAnim.pos.y, 15);
                            }
                        });
                        this.tweenTextTimeAnim.start();
                    }
                    
                    if(this.timeCounter.duration > 119){
                        this.timeCounter.duration = 120;
                        this.timeCounter.durationText = 60;
                    }
                
                    if(this.timeCounter.duration > 60){
                        this.timeCounter.durationText -= 60;
                    }
                    
                    if(this.timeCounter.durationText <= 0){
                        this.timeCounter.durationText += 60;
                    }
                }
                return false;
            });
        // }
    },
    
    timeUpGame: function(){
        // if(this.timeCounter.duration < -2 || this.timeCounter.pos == undefined){
        //     //console.log("Too late");
        // }else{
            let timeEffect = me.pool.pull("timeBarEffect", this.timeCounter.pos.x+125, this.timeFrameBlack.pos.y-10);
            me.game.world.addChild(timeEffect, 8);
            timeEffect.mask = new me.Rect(this.timeFrameBlack.pos.x+35, timeEffect.pos.y, this.timeFrameBlack.width, timeEffect.height);
            let wait = true;
            timeEffect.setCurrentAnimation('Animation 1',()=>{
                if(wait){
                    wait = false;
                    let dataPos = 8,
                        data = 8;
                    
                    if(this.timeCounter.duration < 0){
                        data = 9;
                        dataPos = 9;
                    }
                    
                    me.game.world.removeChild(timeEffect);
                    this.timeCounter.durationText += data;
                    this.timeCounter.duration += data;
                    
                    this.timeCounterAnim = new me.Tween(this.timeCounter.pos)
                    .to({x:this.timeCounter.pos.x+(((520/this.timeCounter.xMax)*(dataPos)))}, 500)
                    .easing(me.Tween.Easing.Sinusoidal.Out)
                    .onComplete(()=>{
                        if(this.timeCounter.pos.x >= this.basePosXtimeCounter){
                            this.timeCounter.pos.set(me.game.viewport.width/2-152, this.timeCounter.pos.y, 6);
                        }
                        this.timeCounter.startTime = true;
                        this.timeCounter.lastChance = false;
                    });
                    this.timeCounterAnim.start();
                    
                    this.textTimeAnim.setText("+8");
                    this.tweenTextTimeAnim = new me.Tween(this.textTimeAnim.pos)
                    .to({x:this.textTimeAnim.pos.x + (((520/this.timeCounter.xMax)*(dataPos)))}, 500)
                    .easing(me.Tween.Easing.Sinusoidal.Out)
                    .onComplete(()=>{
                        this.textTimeAnim.setText("");
                        if(this.timeCounter.pos.x >= this.basePosXtimeCounter){
                            this.textTimeAnim.pos.set(me.game.world.width/2+215, this.textTimeAnim.pos.y, 15);
                        }
                    });
                    this.tweenTextTimeAnim.start();
                    
                    if(this.timeCounter.duration > 119){
                        this.timeCounter.duration = 120;
                        this.timeCounter.durationText = 60;
                    }
                    
                    if(this.timeCounter.duration > 60){
                        this.timeCounter.durationText -= 60;
                    }
                    
                    if(this.timeCounter.durationText <= 0){
                        this.timeCounter.durationText += 60;
                    }
                }
                return false;
            });
        // }
    },
    
    cekbenarsushi: function(){
        if(this.indek == 0){
            this.cekbenar1.alpha = 1;
            this.benar1 = true;
        }if(this.indek == 1){
            this.cekbenar2.alpha = 1;
            this.benar2 = true;
        }if(this.indek == 2){
            this.cekbenar3.alpha = 1;
            this.benar3 = true;
        }
    },
    
    cekbenarsushiklokembar: function(){
        if(this.indeks == 1){
            this.cekbenar2.alpha = 1;
            this.benar2 = true;
        }if(this.indeks == 2){
            this.cekbenar3.alpha = 1;
            this.benar3 = true;
        }
    },
    
    ceklastbenarsushi: function(){
        if(this.benar1 == true && this.benar2 == true){
            this.cekbenar3.alpha = 1;
        }if(this.benar2 == true && this.benar3 == true){
            this.cekbenar1.alpha = 1;
        }if(this.benar1 == true && this.benar3 == true){
            this.cekbenar2.alpha = 1;
        }
    },
    
    tweenBarTime: function(){
        this.tweenTimeCounter =  new me.Tween(this.timeCounter).to({alpha:0}, 1000);
        this.tweenTimeCounter.start();
    },
    
    changeLevel: function(shop){
        if(shop == "shop"){
            me.game.viewport.fadeIn("#000000", 100,()=>{
                me.state.change(game.state.Shop);
                mainMenu = false;
            });
        }else{
            me.game.viewport.fadeIn("#000000", 1300);
            let timeOutLimit6 = true;
            this.clear5 = me.timer.setTimeout(()=>{
                if(timeOutLimit6){
                    timeOutLimit6 = false;
                    game.util.restartGame("level1");
                }
            }, 500);
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();