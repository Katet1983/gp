(function(){
// Put user code here //
 
//  End of user code  //

game.level.level1 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("level1");
		this.var = {};
        // Put user code here //
        if(gameSnacks_API){
            this.audioCheck = me.pool.pull("audioAPICheck", 0, 0);
            me.game.world.addChild(this.audioCheck, 0);
        }
        
        // me.game.viewport.fadeOut("#000000", 1000);
        me.timer.setTimeout(()=>{typeLevel = "gamePlay"}, 2500);
        inGamePlay = true;
        game.util.resumeGame();
        //awalan
        let effectAwalan = me.pool.pull("particle1", me.game.viewport.width/2, me.game.viewport.height),
            timeEffect = me.pool.pull("timeBarEffect", me.game.viewport.width/2, me.game.viewport.height),
            customerPlate = me.pool.pull("costumerPlate", 0, -95),
            gameScreen = me.pool.pull("gameScreen", 0, 0),
            gameScreenMeja = me.pool.pull("gameScreenMeja", 0, -50);
        me.game.world.addChild(effectAwalan, 0);
        me.game.world.addChild(timeEffect, 0);
        me.game.world.addChild(customerPlate, 5);
        me.game.world.addChild(gameScreen, 2);
        me.game.world.addChild(gameScreenMeja, 4);
        effectAwalan.hapus();
        timeEffect.hapus();
        //--
        
        //screenBelakangWeb
        let webXkiri,
            webXkanan;
        if(me.game.viewport.width > 877.5){
            webXkiri    = -1182.25+377.5;
            webXkanan   = 1182.25-377.5;
            this.webBgKiri = me.pool.pull("webBgKiri", webXkiri, 0);
            me.game.world.addChild(this.webBgKiri, 100);
            this.webBgKanan = me.pool.pull("webBgKanan", webXkanan, 0);
            me.game.world.addChild(this.webBgKanan, 100);
        }
        //--
        
        this.play = true;
        
        this.upSpeed = 1;
        this.playFunc = true;
        this.gantiSushi = false;
        this.disablehook = true;
        this.itemCookies = false;
        this.kue = false;
        this.sushiDariKue = 0;
        this.itemInfo = game.controller.data.getDataItemInfo();
        this.itemIDList = [];
        this.itemTimer = {};
        let item = game.user.userData.item;
        this.playerItem = [];
        for(let id in item){
            this.playerItem.push(id);
        }
        
        this.onPause = false;
    
        for(let i in this.itemInfo){
            this.itemIDList.push(this.itemInfo[i].id);
        }
            
        // Untuk ambil random sushi 5 biji
        this.sushilist = ["sushi_00", "sushi_03", "sushi_04", "sushi_05", "sushi_06", "sushi_07", "sushi_09","sushi_12","sushi_13","sushi_15","sushi_17","sushi_19","sushi_20","sushi_24","sushi_28","sushi_29","sushi_31"];
        this.sushidata = []; //sushi 5 biji
        let i = 0;
        for(i = 0; i < 4; i++){
            let index = Math.floor( Math.random()*this.sushilist.length );
            this.sushidata.push(this.sushilist[index]);
            this.sushilist.splice( index, 1 );
         }
         
        //untuk sushi menit 1
        this.cloningdata1 = game.util.clonesushi(this.sushidata);
        this.sushidatamenit1 = [];
        for(i = 0; i < 2; i++){
            this.sushidatamenit1.push( this.cloningdata1[i]);
         }
        //untuk sushi ment 2
        this.cloningdata2 = game.util.clonesushi(this.sushidata);
        this.sushidatamenit2 = [];
        for(i = 0; i < 3; i++){
            this.sushidatamenit2.push( this.cloningdata2[i]);
        }
        //untuk sushi ment 3
        this.cloningdata3 = game.util.clonesushi(this.sushidata);
        this.sushidatamenit3 = [];
        for(i = 0; i < 4; i++){
            this.sushidatamenit3.push( this.cloningdata3[i]);
        }
        
        this.cloningmenit1 = game.util.clonesushi(this.sushidatamenit1);
        this.cloningmenit12 = game.util.clonesushi(this.sushidatamenit1);
        this.cloningmenit13 = game.util.clonesushi(this.sushidatamenit1);
        
        this.hooker = me.pool.pull("hook", me.game.viewport.width/2, 1345,{
            container:this
        });
        me.game.world.addChild(this.hooker, 30);
        
        this.buttonhook = me.pool.pull("ButtonHook",0,0,{
          region: "wall",
          container: this
        });
        me.game.world.addChild(this.buttonhook, 9);
        this.buttonhook.alpha = 0.01;
        
        this.pauseBtn = me.pool.pull("BtnPause", me.game.viewport.width/2+226, 160,{
			container:this
		});
        
        this.spawnSushi = false;
               
        //sushi yang di dapat
        this.yangdigrab = [];
        
        this.sushipesanan1 = me.pool.pull("sushimenuBase", me.game.viewport.width/2-75, 975);
        me.game.world.addChild( this.sushipesanan1, 14);
        
        this.sushipesanan2 = me.pool.pull("sushimenuBase", me.game.viewport.width/2+12.5, 975);
        me.game.world.addChild( this.sushipesanan2, 14);
        
        this.sushipesanan3 = me.pool.pull("sushimenuBase", me.game.viewport.width/2+95, 975);
        me.game.world.addChild( this.sushipesanan3, 14);
        
        this.sushisalah1 = me.pool.pull("sushisalah", me.game.viewport.width/2-75, 975);
        me.game.world.addChild( this.sushisalah1, 15);
        
        this.sushisalah2 = me.pool.pull("sushisalah", me.game.viewport.width/2+12.5, 975);
        me.game.world.addChild( this.sushisalah2, 15);
        
        this.sushisalah3 = me.pool.pull("sushisalah", me.game.viewport.width/2+95, 975);
        me.game.world.addChild( this.sushisalah3, 15);
        
        this.pauseContainer = me.pool.pull("PauseContainer", 0, 0,{container:this});
        me.game.world.addChild(this.pauseContainer, 11);
        this.pauseContainer.container = this;
        this.pauseContainer.Hide();
        
        this.spawnerSushiContainer = me.pool.pull("spawnerSushiContainer", 0, 0,{container:this});
        me.game.world.addChild(this.spawnerSushiContainer, 11);
        this.MasukinItem();
        
        this.gamePlay = me.pool.pull("gamePlay", 0, 0,{
            container:this
        });
        me.game.world.addChild(this.gamePlay, 5);
        
        this.audioFunc();
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        for(let i in this.itemTimer){
            me.timer.clearTimeout(this.itemTimer[i]);
        }
        
        me.timer.clearInterval(this.intervalboard1);
        me.timer.clearInterval(this.intervalboard2);
        me.timer.clearInterval(this.intervalboard3);
        
        me.timer.clearInterval(this.intervalspawnsushi1);
        me.timer.clearInterval(this.intervalspawnsushi2);
        me.timer.clearInterval(this.intervalspawnsushi3);
        
        me.game.world.removeChild(this.hooker);
        me.game.world.removeChild(this.gamePlay);

        me.game.world.removeChild(this.sushipesanan1);
        me.game.world.removeChild(this.sushipesanan2);
        me.game.world.removeChild(this.sushipesanan3);
        
        me.audio.stop("bgm-sushi-ingame");
        me.audio.stop("bgm-gameover2");
        
        me.timer.clearTimeout(this.timeouthapusSushiSalah);
        me.timer.clearTimeout(this.timeouthapusSushiSalah2);
        me.timer.clearTimeout(this.timeouthapusSushiSalah3);
        me.timer.clearInterval(this.waktugame);
        me.timer.clearTimeout(this.firstToSushi);
        me.timer.clearTimeout(this.toHapus);
        me.timer.clearTimeout(this.waitFunc);
        this.playFunc = false;
        
        me.timer.clearTimeout(this.clear1);
        me.timer.clearTimeout(this.clear2);
        me.timer.clearTimeout(this.clear3);
        me.timer.clearTimeout(this.clear4);
        
        
        game.util.resumeGame();
        this.gabisa = false;
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-sushi-ingame", false,()=>{this.audioFunc()}, 0.5);
    },

    grab : function(){
        ////console.log("klik");
        if(!this.disablehook && !this.gabisa){
            this.hooker.cobagerak();
            return false;
        }
    },
    
    nempatinsushi: function(x){
        if(this.gamePlay.masihMain && this.pauseContainer.placedSushi){
            this.yangdigrab.push(x);
    
            if(this.yangdigrab.length == 1){
                        me.audio.play("sfx-removepiring");
                        this.gamePlay.cekPesanan1();
                        if(!this.sushisalah1.alpha == 1){
                            let effect1 = me.pool.pull("particle1", me.game.viewport.width/2-75, 965);//390
                            me.game.world.addChild(effect1,15);
                            effect1.hapus();
                        }
                        this.sushipesanan1.pesanansushi(x);
        
            }if(this.yangdigrab.length == 2){
                        me.audio.play("sfx-removepiring");
                        this.gamePlay.cekPesanan2();
                        if(!this.sushisalah2.alpha == 1){
                            let effect2 = me.pool.pull("particle1", me.game.viewport.width/2+12.5, 965);//565
                            me.game.world.addChild(effect2,15);
                            effect2.hapus(); 
                        }
                        this.sushipesanan2.pesanansushi(x);
                
            }if(this.yangdigrab.length == 3){
                        me.audio.play("sfx-removepiring");
                        this.gamePlay.cekPesanan3();
                        if(!this.sushisalah3.alpha == 1){
                            let effect3 = me.pool.pull("particle1", me.game.viewport.width/2+95, 965);
                            me.game.world.addChild(effect3,15);
                            effect3.hapus(); 
                        }
                        this.sushipesanan3.pesanansushi(x);
            }
        }
    },
    
    ActivateCookies : function(){
        
        //this.disablehook = true;
        this.gabisa = true;
        this.itemCookies = true;
        this.kue = true;
        if(this.gamePlay.sushiData.length == 2){
            this.sushipesanan2.alpha = 0;
            this.sushipesanan3.alpha = 0;
            this.sushiDariKue = 2;
        }else if(this.gamePlay.sushiData.length == 1){
            this.sushipesanan3.alpha = 0;
            this.sushiDariKue = 1;
        } else{
            this.sushipesanan1.alpha = 0;
            this.sushipesanan2.alpha = 0;
            this.sushipesanan3.alpha = 0;
            this.sushiDariKue = 3;
        }

        let limitTimeout5 = true;
        this.clear2 = me.timer.setTimeout(()=>{
            if(limitTimeout5){
                limitTimeout5 = false;
                let list = game.util.cloneData(this.gamePlay.sushiData);
                // this.yangdigrab = [];
                
                for(let i in list){
                    this.yangdigrab.push(list[i]);
                    if(this.yangdigrab.length == 1){
                        this.gamePlay.cekPesanan1();
                        this.sushipesanan1.pesanansushi(list[i]);
                        
                        let effect1 = me.pool.pull("particle1", me.game.viewport.width/2-75, 965);
                        me.game.world.addChild(effect1,15);
                        effect1.hapus();
                        
                    }if(this.yangdigrab.length == 2){
                        let effect2 = me.pool.pull("particle1", me.game.viewport.width/2+12.5, 965);
                        me.game.world.addChild(effect2,15);
                        effect2.hapus();
                        
                        this.gamePlay.cekPesanan2();
                        this.sushipesanan2.pesanansushi(list[i]);
                    }if(this.yangdigrab.length == 3){
                        this.gamePlay.timeCounter.startTime = false;
                        this.gamePlay.timeCounter.lastChance = true;
                        me.audio.play("sfx-removepiring");
                        this.sushipesanan3.pesanansushi(list[i]);
                        
                        let effect3 = me.pool.pull("particle1", me.game.viewport.width/2+95, 965);
                        me.game.world.addChild(effect3,15);
                        effect3.hapus(); 
                        
                        this.gamePlay.cekPesanan3();
                    }
                }
                this.itemCookies = false;
            }
        }, 200);
        
        let limitTimeout8 = true;
        this.clear3 = me.timer.setTimeout(()=>{
            if(limitTimeout8){
                limitTimeout8 = false;
                this.kue = false;
                this.sushiDariKue = 0;
            }
        }, 700);
    },
    
    MasukinItem : function(){
        let randBelt = [1, 2, 3];
        let itemList = [];        
        
        for(let i in this.playerItem){
            if(this.playerItem[i] != "I000" && this.playerItem[i] != "I004")
            itemList.push(this.playerItem[i]);
        }
        
        for(let i in itemList){
            if(randBelt.length == 0){
                randBelt = [1, 2, 3];
            }
            let randIndex = Math.floor(Math.random() * randBelt.length);
            let belt = randBelt[randIndex];
            randBelt.splice(randIndex, 1);
            let itemName = itemList[i];            
            let udahAda = false;  
            
            if(!udahAda){
                if(this.spawnerSushiContainer.sushiBoard1.includes(itemName))
                    udahAda = true;
            }   
            
            if(!udahAda){
                if(this.spawnerSushiContainer.sushiBoard2.includes(itemName))
                    udahAda = true;
            }      
            
            if(!udahAda){
                if(this.spawnerSushiContainer.sushiBoard3.includes(itemName))
                    udahAda = true;
            }  
            
            if(!udahAda){
                if(belt == 1){
                    // //console.log(itemName, belt);
                    this.spawnerSushiContainer.sushiBoard1.push(itemName);
                }
                else if(belt == 2){
                    this.spawnerSushiContainer.sushiBoard2.push(itemName);
                }
                else if(belt == 3){
                    this.spawnerSushiContainer.sushiBoard3.push(itemName);
                }
            }
        }
    },

    MasukinItemLagi : function(id){
        let pos = [];
        //console.log(this.sushiBoard1);
        //console.log(this.sushiBoard2);
        //console.log(this.sushiBoard3);
        let udahAda = false;  
        
        if(!udahAda){
            if(this.spawnerSushiContainer.sushiBoard1.includes(id))
                udahAda = true;
        }   
        
        if(!udahAda){
            if(this.spawnerSushiContainer.sushiBoard2.includes(id))
                udahAda = true;
        }      
        
        if(!udahAda){
            if(this.spawnerSushiContainer.sushiBoard3.includes(id))
                udahAda = true;
        }  
        
        if(!udahAda){
            for(let i = 0; i < 3; i ++){
                for(let j in this.playerItem){
                    if(i == 0){
                        if(!this.spawnerSushiContainer.sushiBoard1.includes(this.playerItem[j])){
                            if(j == this.playerItem.length - 1)
                                pos.push(1);
                        }
                        else{
                            break;
                        }
                    }
                    else if(i == 1){
                        if(!this.spawnerSushiContainer.sushiBoard2.includes(this.playerItem[j])){
                            if(j == this.playerItem.length - 1)
                                pos.push(2);
                        }
                        else{
                            break;
                        }
                    }
                    else if(i == 2){
                        if(!this.spawnerSushiContainer.sushiBoard3.includes(this.playerItem[j])){
                            if(j == this.playerItem.length - 1)
                                pos.push(3);
                        }
                        else{
                            break;
                        }
                    }
                }
            }
            
            //let pos = [1, 2, 3];
            //console.log(pos);
            let randIndex = Math.floor(Math.random() * pos.length);
            if(pos[randIndex] == 1){
                this.spawnerSushiContainer.sushiBoard1.push(id);
            }
            else if(pos[randIndex] == 2){
                this.spawnerSushiContainer.sushiBoard2.push(id);
            }
            else if(pos[randIndex] == 3){
                this.spawnerSushiContainer.sushiBoard3.push(id);
            }
        }
    },
    
    FilterItem : function(list){
        let filter = [];
        for(let i in list){
            if(this.playerItem.includes(list[i])){
                filter.push(list[i]);
            }
        }
        
        return filter;
    },
    
    IntervalItem : function(id){
        if(id == "I001"){
            this.itemTimer[id] = me.timer.setTimeout(function(){
                this.MasukinItemLagi("I001");
            }.bind(this), 60000);
        }
        else if(id == "I002"){
            this.itemTimer[id] = me.timer.setTimeout(function(){
                this.MasukinItemLagi("I002");
            }.bind(this), 75000);
        }
        else if(id == "I003"){
            this.itemTimer[id] = me.timer.setTimeout(function(){
                this.MasukinItemLagi("I003");
            }.bind(this), 85000);
        }
        else if(id == "I005"){
            this.itemTimer[id] = me.timer.setTimeout(function(){
                this.MasukinItemLagi("I005");
            }.bind(this), 85000);
        }
    },
    
    RemoveItem : function(id, pos){
        if(pos == 1){
            for(let i in this.spawnerSushiContainer.sushiBoard1){
                if(this.spawnerSushiContainer.sushiBoard1[i] == id){
                    this.spawnerSushiContainer.sushiBoard1.splice(i, 1);
                    break;
                }
            }
        }
        else if(pos == 2){
            for(let i in this.spawnerSushiContainer.sushiBoard2){
                if(this.spawnerSushiContainer.sushiBoard2[i] == id){
                    this.spawnerSushiContainer.sushiBoard2.splice(i, 1);
                    break;
               }
            }
        }
        else if(pos == 3){
           for(let i in this.spawnerSushiContainer.sushiBoard3){
                if(this.spawnerSushiContainer.sushiBoard3[i] == id){
                    this.spawnerSushiContainer.sushiBoard3.splice(i, 1);
                    break;
                }
            }
        }
    },
 
    SpawnMagicEff : function(){
        let magicEff = me.pool.pull("magicHandEff", 0, 175);
        me.game.world.addChild(magicEff, 21);
        magicEff.setCurrentAnimation("idle",()=>{
            me.game.world.removeChild(magicEff);
            return false;
        });
    },
    
    buffParticle : function(callback){
        let particleEff = me.pool.pull("buffParticle", 0, 380);
        me.game.world.addChild(particleEff, 21);
        particleEff.setCurrentAnimation("idle",()=>{
            callback();
            me.game.world.removeChild(particleEff);
            return false;
        });
    },
    
    coinUp: function(){
        this.gamePlay.buffCoin = this.gamePlay.bonusScore;
        this.gamePlay.coinSpawnItem();
    },
    
    tweenToAlpha: function(){
        let wait = true;
        this.clear4 = me.timer.setTimeout(()=>{
            if(wait){
                wait = false;
                this.tweenDissapear4 =  new me.Tween(this.spawnerSushiContainer.sushispawn).to({alpha:0}, 3000);
                this.tweenDissapear4.start();
                this.tweenDissapear5 =  new me.Tween(this.spawnerSushiContainer.sushispawn2).to({alpha:0}, 3000);
                this.tweenDissapear5.start();
                this.tweenDissapear6 =  new me.Tween(this.spawnerSushiContainer.sushispawn3).to({alpha:0}, 3000);
                this.tweenDissapear6.start();
            }
        },1500);
    },
    
    tampilinsusisalah: function(x){
        switch (x){
        case 1: 
                this.sushisalah1.alpha = 1;
                let limitTimeout7 = true;
                this.timeouthapusSushiSalah = me.timer.setTimeout(()=>{
                    if(limitTimeout7){
                        limitTimeout7 = false;
                        this.yangdigrab.splice(0);
                        this.sushisalah1.alpha = 0;
                        this.sushipesanan1.alpha = 0;
                        me.timer.clearTimeout(this.timeouthapusSushiSalah);
                    }
                }, 200);
                
        break;
        case 2:
                this.sushisalah2.alpha = 1;
                let limitTimeout8 = true;
                this.timeouthapusSushiSalah2 = me.timer.setTimeout(()=>{
                    if(limitTimeout8){
                        limitTimeout8 = false;
                        this.yangdigrab.splice(1);
                        this.sushisalah2.alpha = 0;
                        this.sushipesanan2.alpha = 0;
                        me.timer.clearTimeout(this.timeouthapusSushiSalah2);
                    }
                }, 200);
        break;
        case 3:
                this.sushisalah3.alpha = 1;
                let limitTimeout9 = true;
                this.timeouthapusSushiSalah3 = me.timer.setTimeout(()=>{
                    if(limitTimeout9){
                        limitTimeout9 = false;
                        this.yangdigrab.splice(2);
                        this.sushisalah3.alpha = 0;
                        this.sushipesanan3.alpha = 0;
                        me.timer.clearTimeout(this.timeouthapusSushiSalah3);
                    }
                }, 200);
        break;
        default:
        }
    },
    
    pesananbenarsmua: function(){
            //this.gamePlay.cekPesanan3();
            if(this.disablehook == false){
                let limitTimeout10 = true;
                this.disablehook = true;
                this.timeouthapus = me.timer.setTimeout(()=>{
                    if(limitTimeout10){
                        limitTimeout10 = false;
                        let pesan = game.util.cloneData(this.yangdigrab),
                            deliver = me.pool.pull("delivery", 0, -180,{
                            pesanan:pesan
                        });
                        me.game.world.addChild(deliver, 15);
                        this.gamePlay.timeUpGame();
                        this.sushipesanan1.alpha = 0;
                        this.sushipesanan2.alpha = 0;
                        this.sushipesanan3.alpha = 0;
                        this.yangdigrab = [];
                        me.timer.clearTimeout(this.timeouthapus);
                        
                        let smoke = me.pool.pull("smoker", me.game.viewport.width/2, 965),
                            to = true;
                        me.game.world.addChild(smoke,17);
                        smoke.setCurrentAnimation('Animation 1',()=>{
                            if(to){
                                to = false;
                                me.game.world.removeChild(smoke);
                            }
                            return false;
                        });
                    }
                }, 500);
            }
    },
    
    clearsushi: function(){
        this.sushipesanan1.alpha = 0;
        this.sushipesanan2.alpha = 0;
        this.sushipesanan3.alpha = 0;
        this.yangdigrab = []; 
    },
    
    
    // gantiSushiFunc: function(){
    //     let iniTo = true;
    //     this.waitFunc = me.timer.setTimeout(()=>{
    //         if(iniTo && this.playFunc){
    //             iniTo = false;
                
    //             this.waktu +=1;
    //             if(this.waktu == 1){
    //                 // console.log("ganti");
                        
    //                 if(this.upSpeed >= 1.7){
    //                     this.upSpeed = 1.7;
    //                 }else{
    //                     this.upSpeed += 0.2;
    //                 }

    //                 if(this.sushilist.length === 0){
    //                     this.sushilist = ["sushi_00", "sushi_03", "sushi_04", "sushi_05", "sushi_06", "sushi_07", "sushi_09","sushi_12","sushi_13","sushi_15","sushi_17","sushi_19","sushi_20","sushi_24","sushi_28","sushi_29","sushi_31"];
    //                 }
                    
    //                 let index   = Math.floor(Math.random()*this.sushilist.length);
    //                     sushiX  = this.sushilist[index];
    //                     this.sushilist.splice(index, 1);
    //                 this.sushidatamenit2.push(sushiX);
                    
    //                 let itemBoard1 = this.FilterItem(this.sushiBoard1), itemBoard2 = this.FilterItem(this.sushiBoard2),
    //                 itemBoard3 = this.FilterItem(this.sushiBoard3);
    //                 this.sushiBoard1 = game.util.clonesushi(this.sushidatamenit2);
    //                 this.sushiBoard2 = game.util.clonesushi(this.sushidatamenit2);
    //                 this.sushiBoard3 = game.util.clonesushi(this.sushidatamenit2);
    
    //                 this.sushidatamenit2.shift();
                    
    //                 for(let i in itemBoard1)
    //                     this.sushiBoard1.push(itemBoard1[i]);
                        
    //                 for(let i in itemBoard2)
    //                     this.sushiBoard2.push(itemBoard2[i]);
                        
    //                 for(let i in itemBoard3)
    //                     this.sushiBoard3.push(itemBoard3[i]);
    
    
    
    //                 let toHapusSushi = true;
    //                 this.toHapus = me.timer.setTimeout(()=>{
    //                     if(toHapusSushi){
    //                         toHapusSushi = false;
    //                         this.sushiBoard1.shift();
    //                         this.sushiBoard2.shift();
    //                         this.sushiBoard3.shift();
    //                         this.gantiSushiFunc();
    //                     }
    //                 }, 15000);
                    
    //                 this.waktu = 0;
    //             }
    //         }
    //     }, 60000);
    // }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();