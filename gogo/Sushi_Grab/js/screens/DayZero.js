(function(){
// Put user code here //
 
//  End of user code  //

game.level.DayZero = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("DayZero");
		this.var = {};
        // Put user code here //
        let tiraiKiri = me.pool.pull("tiraiKiri", me.game.viewport.width/2-me.game.viewport.width/2+275, me.game.viewport.height/2),
            tiraiKanan = me.pool.pull("tiraiKanan", me.game.viewport.width/2+me.game.viewport.width/2-275, me.game.viewport.height/2);
        me.game.world.addChild(tiraiKiri, 98);
        me.game.world.addChild(tiraiKanan, 98);
        let limitTimeout = true;
        me.timer.setTimeout(()=>{
            if(limitTimeout){
                limitTimeout = false;
                me.game.world.removeChild(tiraiKiri);
                me.game.world.removeChild(tiraiKanan);
            }
        },2000);
        
        //transisi Pintu
        this.bg = me.pool.pull("bgCoklat", me.game.viewport.width/2, me.game.viewport.height/2);
        me.game.world.addChild(this.bg, 95);
        this.tiraiKiri = me.pool.pull("tiraiKiri", me.game.viewport.width/2-me.game.viewport.width/2+275, me.game.viewport.height/2);
        this.tiraiKanan = me.pool.pull("tiraiKanan", me.game.viewport.width/2+me.game.viewport.width/2-275, me.game.viewport.height/2);
        me.game.world.addChild(this.tiraiKiri, 98);
        me.game.world.addChild(this.tiraiKanan, 98);
        let limitTimeout1 = true;
        me.timer.setTimeout(()=>{
            if(limitTimeout1){
                limitTimeout1 = false;
                this.tweenTiraiOn();
            }
        }, 3000);
        //transisi Pintu END
        
        this.bgmPlay = false;
        me.audio.play("bgm-sushi-ingame", false,()=>{this.bgmPlay = true}, 0.5);
        
        this.index = 0;
        this.tutor = [];
        
        for(let i = 1; i < 8; i++){
            let tutorpos= {};
            
            if(i == 1)
                tutorpos = {x : 112, y : -620};
            else if(i == 2)
                tutorpos = {x : 162, y : -560};
            else if(i == 3)
                tutorpos = {x : 157, y : -560};
            else if(i == 4)
                tutorpos = {x : 20, y : 648};
            else if(i == 5)
                tutorpos = {x : 20, y : 648};
            else if(i == 6)
                tutorpos = {x : 20, y : 201};
            else if(i == 7)
                tutorpos = {x : 0, y : -900};
            
            let t = me.pool.pull("Tutor" + i, tutorpos.x, tutorpos.y);
            me.game.world.addChild(t, 6);
            this.tutor.push(t);
        }
        
        for(let i in this.tutor){
            if(i != 0)
                this.tutor[i].alpha = 0;
        }
        
        this.tapArea = me.pool.pull("Day0Tap", 0, 0);
        me.game.world.addChild(this.tapArea, 300);
        this.tapArea.container = this;
        
        this.handKlik = me.pool.pull("handKlik", 300, -50);
        this.handKlikEffect = me.pool.pull("handKlik", 240, -130);
        this.handKlikEffect.setCurrentAnimation('2');
        me.game.world.addChild(this.handKlik, 8);
        me.game.world.addChild(this.handKlikEffect, 7);
        
        this.handKlik.alpha = 0;
        this.handKlikEffect.alpha = 0;
        
        let limitTimeout2 = true;
        this.timer = me.timer.setTimeout(function() {
            if(limitTimeout2){
                limitTimeout2 = false;
                this.handKlik.alpha = 1;
                this.handKlikEffect.alpha = 1;
            }
        }.bind(this), 750);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.timer.clearTimeout(this.timer);
        me.audio.stop("bgm-sushi-ingame");
        //  End of user code  //
	},

    // Put user code here //
    Next : function(){
        if(this.index < 7 && this.handKlik.alpha == 1){
            this.index ++;
            for(let i in this.tutor){
                if(i != this.index)
                    this.tutor[i].alpha = 0;
                else
                    this.tutor[i].alpha = 1;
            }
            
            this.handKlik.alpha = 0;
            this.handKlikEffect.alpha = 0;
            
            let limitTimeout3 = true;
            this.timer = me.timer.setTimeout(function() {
                if(limitTimeout3){
                    limitTimeout3 = false;
                    if(this.index < 7){
                        this.handKlik.alpha = 1;
                        this.handKlikEffect.alpha = 1;
                    }else{
                        this.tweenTiraiOff();
                    }
                }
            }.bind(this), 750);
        }
    },
    
    tweenTiraiOff: function(){
        this.bg.pos.set(this.bg.pos.x, this.bg.pos.y, 95);
        this.tweenBg =  new me.Tween(this.bg).to({alpha:1}, 2000).onComplete(()=>{
            me.state.change(game.state.level1);
        });
        this.tweenBg.start();
        
        this.tweenTiraiKiri = new me.Tween(this.tiraiKiri.pos)
        .to({x:me.game.viewport.width/2-me.game.viewport.width/2+275}, 2000)
        .easing(me.Tween.Easing.Linear.None);
        this.tweenTiraiKiri.start();
        
        this.tweenTiraiKanan =  new me.Tween(this.tiraiKanan.pos)
        .to({x:me.game.viewport.width/2+me.game.viewport.width/2-275}, 2000)
        .easing(me.Tween.Easing.Linear.None);
        this.tweenTiraiKanan.start();
    },
    
    tweenTiraiOn: function(){
        this.tweenBg =  new me.Tween(this.bg).to({alpha:0}, 2000).onComplete(()=>{
            this.bg.pos.set(this.bg.pos.x, this.bg.pos.y, 0);
        });
        this.tweenBg.start();
        
        this.tweenTiraiKiri = new me.Tween(this.tiraiKiri.pos)
        .to({x:-275}, 2000)
        .easing(me.Tween.Easing.Linear.None);
        this.tweenTiraiKiri.start();
        
        this.tweenTiraiKanan =  new me.Tween(this.tiraiKanan.pos)
        .to({x:me.game.viewport.width+275}, 2000)
        .easing(me.Tween.Easing.Linear.None);
        this.tweenTiraiKanan.start();
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();