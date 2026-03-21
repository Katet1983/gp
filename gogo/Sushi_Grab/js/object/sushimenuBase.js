(function(){
// Put user code here //
 
//  End of user code  //

game.object.sushimenuBase = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "hook";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"sushi_menu_base"
		], settings);
		settings.framewidth = settings.framewidth || 60;
		settings.frameheight = settings.frameheight || 60;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape(me.pool.pull("me.Rect", 0 - bodyShapePos.y, 0 - bodyShapePos.y, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.NO_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;

		this.var = {};

        // Put user code here //
        this.alpha = 0;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        
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
    pesanansushi: function(x){
        this.id = x;
        this.changeSprite({
            image: game.textureMap.get(game.imageLocation[this.id + "_menu"]),
            region: this.id + "_menu"
        });
        this.alpha = 1;
    },
    
    sushiturun:function(){
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y+70}, 200)
        .easing(me.Tween.Easing.Sinusoidal.Out);
        this.tween.start();
    }
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();