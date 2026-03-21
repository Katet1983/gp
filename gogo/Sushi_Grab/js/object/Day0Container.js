(function(){
// Put user code here //
 
//  End of user code  //

game.object.Day0Container = me.Container.extend({
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
        this.index = 0;
        this.tutor = [];
        
        this.bg = me.pool.pull("BGPause", 0, 0);
        me.game.world.addChild(this.bg, 5);
        
        for(let i = 1; i < 8; i++){
            let tutorpos= {};
            
            if(i == 1)
                tutorpos = {x : 150, y : -200};
            else if(i == 2)
                tutorpos = {x : 0, y : 0};
            else if(i == 3)
                tutorpos = {x : 0, y : 0};
            else if(i == 4)
                tutorpos = {x : 0, y : 0};
            else if(i == 5)
                tutorpos = {x : 0, y : 0};
            else if(i == 6)
                tutorpos = {x : 0, y : 0};
            else if(i == 7)
                tutorpos = {x : 0, y : 0};
            else if(i == 6)
                tutorpos = {x : 0, y : 0};
            
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
        
        //  End of user code  //
	},

    // Put user code here //
    Next : function(){
        this.index ++;
        for(let i in this.tutor){
            if(i != this.index)
                this.tutor[i].alpha = 0;
            else
                this.tutor[i].alpha = 1;
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();