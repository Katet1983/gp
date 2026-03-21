(function(){
// Put user code here //
 
//  End of user code  //

game.object.timeBarEffect = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"fx_timeBarAnim - 00","fx_timeBarAnim - 01","fx_timeBarAnim - 02",
			"fx_timeBarAnim - 03","fx_timeBarAnim - 04","fx_timeBarAnim - 05",
			"fx_timeBarAnim - 06","fx_timeBarAnim - 07","fx_timeBarAnim - 08"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('Animation 1', [{ name: "fx_timeBarAnim - 00", delay: 100 },{ name: "fx_timeBarAnim - 01", delay: 100 },{ name: "fx_timeBarAnim - 02", delay: 100 },{ name: "fx_timeBarAnim - 03", delay: 100 },{ name: "fx_timeBarAnim - 04", delay: 100 },{ name: "fx_timeBarAnim - 05", delay: 100 },{ name: "fx_timeBarAnim - 06", delay: 100 },{ name: "fx_timeBarAnim - 07", delay: 100 },{ name: "fx_timeBarAnim - 08", delay: 100 }]);
		this.setCurrentAnimation('Animation 1');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape(me.pool.pull("me.Rect", 0 - bodyShapePos.y, 0 - bodyShapePos.y, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.NO_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.NO_OBJECT);
		this.body.gravity.y = 0;

		this.var = {};

        // Put user code here //
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
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
    hapus: function(){
        let wait = true;
        this.setCurrentAnimation('Animation 1',()=>{
           if(wait){
                wait = false;
                me.game.world.removeChild(this);
           }
        });
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();