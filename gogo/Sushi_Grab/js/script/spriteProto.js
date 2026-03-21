// Put user code here //
me.Sprite.prototype.changeSprite = function(settings){
    verify(settings, ["image"]);
    let isTexture = settings.image instanceof me.Renderer.prototype.Texture,
        region;
    if(isTexture){
        verify(settings, ["region"]);
        region = settings.image.getRegion(settings.region);
        
        this.source = settings.image;
        this.setRegion(region);
    }else if(typeof settings.image === "string"){
        this.image = me.loader.getImage(settings.image);
        this.width = settings.framewidth || this.image.width;
        this.height = settings.frameheight || this.image.height;
        this.source = game.textureMap.get(this.image);
        this.textureAtlas = this.source.getAtlas();
    }
    
    for(let key in this.anim){
        let anim = this.anim[key];
        anim.width = this.width;
        anim.height = this.height;
        
        for(let i = 0; i < anim.frames.length; i++){
            let frame = anim.frames[i];
            frame.width = this.width;
            frame.height = this.height;
            
            if(isTexture){
                frame.texture = region.texture;
                frame.offset = region.offset;
            }
        }
    }
    
    if(settings.anchorPoint){
        this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
    }
};
//  End of user code  //
