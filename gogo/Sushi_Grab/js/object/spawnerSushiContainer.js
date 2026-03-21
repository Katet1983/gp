(function(){
// Put user code here //
 
//  End of user code  //

game.object.spawnerSushiContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
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
        this.waktuSushi1 = 0;
        this.waktuSushi2 = 0;
        this.waktuSushi3 = 0;
        this.waktuAddSushi = 0;
        this.addSushi = 0;
        this.sushiBoard1 = this.container.cloningmenit1;
        this.sushiBoard2 = this.container.cloningmenit12;
        this.sushiBoard3 = this.container.cloningmenit13;
        this.numberSpawn1 = 0;
        this.numberSpawn2 = this.sushiBoard2.length - 1;
        this.numberSpawn3 = 1;
        // if(fps > 90 && fps <= 120){
        // if(fps > 90){
        //     this.speed1 = 2.5*0.5;
        //     this.speed2 = 3.5*0.5;
        //     this.speed3 = 4.25*0.5;
        //     this.timeDouble = 2;
        // }else if(fps > 60 && fps <= 90){
        //     this.speed1 = 2.5*0.75;
        //     this.speed2 = 3.5*0.75;
        //     this.speed3 = 4.25*0.75;
        //     this.timeDouble = 1.5;
        // }else if(fps <= 60){
            this.speed1 = 2.5;
            this.speed2 = 3.5;
            this.speed3 = 4.25;
            this.timeDouble = 1;
        // }
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        this.waktuSushi1 += 0.017;
        this.waktuSushi2 += 0.017;
        this.waktuSushi3 += 0.017;
        
        if(this.container.spawnSushi && this.waktuSushi1 > 3*this.timeDouble){
            this.waktuSushi1 = 0;
            let sushi = this.sushiBoard1;
            if(this.numberSpawn1 >= sushi.length){
                this.numberSpawn1 = 0;
            }
            if(sushi[this.numberSpawn1] == undefined){
                sushi[this.numberSpawn1] = sushi[0];
            }
            this.sushispawn = me.pool.pull(sushi[this.numberSpawn1], -520, 272.5,{
                speed:this.speed1*this.container.upSpeed+0.5,
                jalankanan:true,
                container : this.container
            });
			me.game.world.addChild(this.sushispawn, 11);
            if(this.container.playerItem.includes(sushi[this.numberSpawn1])){
                this.sushispawn.beltPos = 1;
                this.container.RemoveItem(sushi[this.numberSpawn1], 1);
            }
            this.numberSpawn1 += 1;
        }
        
        if(this.container.spawnSushi && this.waktuSushi2 > 2.7*this.timeDouble){
            this.waktuSushi2 = 0;
            let sushi2 = this.sushiBoard2;
            if(this.numberSpawn2 <= -1){
                this.numberSpawn2 = this.sushiBoard2.length - 1;
            }
            if(sushi2[this.numberSpawn2] == undefined){
                sushi2[this.numberSpawn2] = sushi2[0];
            }
            this.sushispawn2 = me.pool.pull(sushi2[this.numberSpawn2], 520, 182.5,{
                speed:this.speed2*this.container.upSpeed,
                jalankanan:false,
                container : this.container
            });
            me.game.world.addChild(this.sushispawn2, 11);
            if(this.container.playerItem.includes(sushi2[this.numberSpawn2])){
                this.sushispawn2.beltPos = 2;
                this.container.RemoveItem(sushi2[this.numberSpawn2], 2);
            }
            this.numberSpawn2 --;
            // console.log("sushi tengah "+sushi2);
        }
        if(this.container.spawnSushi && this.waktuSushi3 > 2*this.timeDouble){
            this.waktuSushi3 = 0;
           // this.numberSpawn3 =  Math.floor( Math.random()*this.sushiBoard3.length );
           
            let sushi3 = this.sushiBoard3;
            if(this.numberSpawn3 >= sushi3.length){
                this.numberSpawn3 = 0;
            }
            if(sushi3[this.numberSpawn3] == undefined){
                sushi3[this.numberSpawn3] = sushi3[0];
            }

            this.sushispawn3 = me.pool.pull(sushi3[this.numberSpawn3], -520, 92.5,{
                speed:this.speed3*this.container.upSpeed-0.5,
                jalankanan:true,
                container : this.container
            });
            me.game.world.addChild(this.sushispawn3, 11);
            if(this.container.playerItem.includes(sushi3[this.numberSpawn3])){
                this.sushispawn3.beltPos = 3;
                this.container.RemoveItem(sushi3[this.numberSpawn3], 3);
            }
            this.numberSpawn3 += 1;
        }
        
        if(this.waktuAddSushi <= 181){
            this.waktuAddSushi += 0.017;
        }else{
            return drawNextFrame;
        }
        if(this.waktuAddSushi >= 60 && this.addSushi == 0){
            this.addSushi = 1;
            this.container.upSpeed += 0.25;
                
            let itemBoard1 = this.container.FilterItem(this.sushiBoard1), itemBoard2 = this.container.FilterItem(this.sushiBoard2),
            itemBoard3 = this.container.FilterItem(this.sushiBoard3); 
            this.sushiBoard1 = game.util.clonesushi(this.container.sushidatamenit2);
            this.sushiBoard2 = game.util.clonesushi(this.container.sushidatamenit2);
            this.sushiBoard3 = game.util.clonesushi(this.container.sushidatamenit2);
            
            for(let i in itemBoard1)
                this.sushiBoard1.push(itemBoard1[i]);

            for(let i in itemBoard2)
               this.sushiBoard2.push(itemBoard2[i]);
           
            for(let i in itemBoard3)
               this.sushiBoard3.push(itemBoard3[i]);
       }
       if(this.waktuAddSushi >= 120 && this.addSushi == 1){
           this.addSushi = 2;
           this.container.upSpeed += 0.25;
                
           let itemBoard1 = this.container.FilterItem(this.sushiBoard1), itemBoard2 = this.container.FilterItem(this.sushiBoard2),
           itemBoard3 = this.container.FilterItem(this.sushiBoard3);
           this.sushiBoard1 = game.util.clonesushi(this.container.sushidatamenit3);
           this.sushiBoard2 = game.util.clonesushi(this.container.sushidatamenit3);
           this.sushiBoard3 = game.util.clonesushi(this.container.sushidatamenit3);

           for(let i in itemBoard1)
               this.sushiBoard1.push(itemBoard1[i]);
           
           for(let i in itemBoard2)
                this.sushiBoard2.push(itemBoard2[i]);
          
           for(let i in itemBoard3)
                this.sushiBoard3.push(itemBoard3[i]);
        }
        if(this.waktuAddSushi >= 180 && this.addSushi == 2){
            this.addSushi = 3;
            this.container.upSpeed += 0.25;
        }
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
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();