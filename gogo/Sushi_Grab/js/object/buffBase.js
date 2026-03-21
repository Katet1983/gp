(function(){
// Put user code here //
 
//  End of user code  //

game.object.buffBase = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 240;
		settings.frameheight = settings.frameheight || 124;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        verify(settings, ["image"]);
        settings.region = settings.image;
        settings.image = game.textureMap.get(game.imageLocation[settings.region]);
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape( me.pool.pull("me.Rect", 0 - bodyShapePos.x, 0 - bodyShapePos.y, 43, 43) );
		this.body.setCollisionMask(game.collisionTypes.PLAYER_OBJECT);
		this.body.gravity.y = 0;

		this.body.shapes[0].getBounds().x = 0;
		this.body.shapes[0].getBounds().y = 0;

		this.var = {};

        // Put user code here //
        this.body.collisionType = game.collisionTypes.ENEMY_OBJECT;
        this.body.setCollisionMask(me.collision.types.ALL_OBJECT);
        this.body.getShape().translate(this.width/7, -this.height/2);
        
        let vars = ["speed","jalankanan","container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        this.body.setMaxVelocity( this.speed, this.speed);
        this.movex = this.pos.x;
        this.movey = this.pos.y;
        this.gotgrab = false;
        this.id = settings.id;
        this.remove = false;
        this.susitipe = settings.id;
        //console.log(this.id, " masuk");
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(!this.remove){
            if(this.jalankanan){
                this.body.vel.x = this.speed;
                if(this.pos.x >= me.game.viewport.width/2+1040){
                    //console.log(this.id, "remove");
                    this.remove = true;
                    this.container.MasukinItemLagi(this.id);
                    me.game.world.removeChild(this);
                }
            }else{
                this.body.vel.x = -this.speed;
                if(this.pos.x <= me.game.viewport.width/2-1040){
                    //console.log(this.id, "remove");
                    this.remove = true;
                    this.container.MasukinItemLagi(this.id);
                    me.game.world.removeChild(this);
                }
            }
        }
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;
        if(!this.remove && !this.container.hooker.grab){
            this.container.IntervalItem(this.id);
            this.remove = true;
            me.game.world.removeChild(this);
        }
        //  End of user code  //
		return isSolid;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    Buff : function(){
        
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();