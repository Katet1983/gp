// Put user code here //
game.util = {};

game.util.spread = function(obj, clone, keys){
    for(var x in clone){
        if(keys.includes(x)){
            obj[x] = clone[x];
        }
    }
}

verify = function(obj, keys){
    keys.forEach(function(key){
        if(typeof obj[key] === "undefined"){
            throw `This object ${obj} must have variable ${key}`;
        }
    })
}

game.util.scale = function(obj, val){
    // obj.currentTransform.translate(obj.pos.x, obj.pos.y);
    obj.scale(val, val);
    // obj.currentTransform.translate(-obj.pos.x, -obj.pos.y);
    
    let bounds = obj.getBounds();
    obj.width = bounds.width;
    obj.height = bounds.height;
    me.game.repaint();
};

impose = function(obj, key, defaultVal){
    if(typeof obj[key] === "undefined"){
        if(typeof defaultVal === "undefined"){
            throw `This variable ${key} cannot be undefined inside ${obj}`;
        }
        obj[key] = defaultVal;
    }
}

game.util.spreadAll = function(obj, clone){
    for(var x in clone){
        obj[x] = clone[x];
    }
}

game.util.populateAtlasIndices = function(texture, names){
    let atlas = [], atlasIndices = {},
        framewidth = 0, frameheight = 0;
        
    for (let i = 0; i < names.length; i++) {
        let region = texture.getRegion(names[i]);
        if (region == null) {
            // throw an error
            throw new me.video.renderer.Texture.Error(
                    "Texture - region for " + names[i] + " not found");
        }
        
        atlas[i] = region;
        atlasIndices[names[i]] = i;
        framewidth = Math.max(region.width, framewidth);
        frameheight = Math.max(region.height, frameheight);
    }
    
    return {
        framewidth, frameheight,
        atlas, atlasIndices
    };
};

game.util.getFullMotionList = function(id, motions){
    let keys = [];
    motions.forEach((motion) => {
            if(typeof motion === "object"){
                let nm = game.util.getFullMotion(id, motion.name);
                keys.push({
                    name: nm,
                    count: motion.count
                });
                // console.log(nm);
            } else if(typeof motion === "string"){
                let nm = game.util.getFullMotion(id, motion);
                keys.push(nm);
                // console.log(nm);
            } else {
              throw `typeof motion ${motion} is not recognized.`;
            }
    });
    // console.log(keys);
    return keys;
};

game.util.getFullMotion = function(id, motion){
    return `${id}_${motion}`;
};

game.util.createImageNameList = function(name, count){
    if(count === 1){
        return [name];
    }else{
        let arr = [];
        for(let i = 0; i < count; i++){
            arr.push(name + "_" + i);
        }
        // console.log(arr);
        return arr;
    }
};

game.util.rotate = function(obj, sudutX, sudutY){
    obj.currentTransform.identity();
    let angle = -Math.atan2(sudutX, sudutY);
    obj.currentTransform.rotate(angle);
};

game.util.cloneData = function(src){
       let data = {};
          for (let prop in src) {
            if (src.hasOwnProperty(prop)) {
              data[prop] = src[prop];
            }
          }
        return data;
};

game.util.clonesushi = function(src){
       let data = [];
          for (let prop in src) {
            if (src.hasOwnProperty(prop)) {
              data[prop] = src[prop];
            }
          }
        return data;
};

game.util.restartGame = function(id){
    let limit = true;
    me.timer.setTimeout(()=>{
        if(limit){
            limit = false;
            me.state.change(game.state.temp, id);
        }
    }, 250);
};

game.util.pauseGame = function(){
    // me.sys.pauseOnBlur = true;
    // me.sys.resumeOnFocus = false;
    me.state.pause(true);
};

game.util.resumeGame = function(){
    me.state.resume(true);
    // me.sys.pauseOnBlur = true;
    // me.sys.resumeOnFocus = true;
};

game.util.cloneDataArray = function(src){
    let data = [];
      for (let prop in src) {
          data.push(src[prop]);
      }
    return data;
};

game.util.muteBgm = function(){
    me.audio.mute("bgm-sushi-ingame");
    me.audio.mute("bgm-sushi-menu");
    me.audio.mute("bgm-gameover2");
    me.audio.mute("bgm-sushi");
    me.audio.mute("bgm-win");
};

game.util.unmuteBgm = function(){
    me.audio.unmute("bgm-sushi-ingame");
    me.audio.unmute("bgm-sushi-menu");
    me.audio.unmute("bgm-gameover2");
    me.audio.unmute("bgm-sushi");
    me.audio.unmute("bgm-win");
};

game.util.muteSfx = function(){
    me.audio.mute("sfx-anak-marah");
    me.audio.mute("sfx-anak-marah2mp3");
    me.audio.mute("sfx-anak-senang");
    me.audio.mute("sfx-anakmuda-marah");
    me.audio.mute("sfx-anakmuda-marah2");
    me.audio.mute("sfx-anakmuda-senang");
    me.audio.mute("sfx-bapak2-marah");
    me.audio.mute("sfx-bapak2-senang");
    me.audio.mute("sfx-cewe-marah");
    me.audio.mute("sfx-cewe-senang");
    me.audio.mute("sfx-nenek-marah");
    me.audio.mute("sfx-nenek-senang");
    me.audio.mute("sfx-robot-marah");
    me.audio.mute("sfx-robot-senang");
    me.audio.mute("sfx-belanja");
    me.audio.mute("sfx-button");
    me.audio.mute("sfx-coin");
    me.audio.mute("sfx-deliverysushi");
    me.audio.mute("sfx-deliverysushi2");
    me.audio.mute("sfx-getsushi");
    me.audio.mute("sfx-hookgotsushi");
    me.audio.mute("sfx-hooknaik");
    me.audio.mute("sfx-hookturun");
    me.audio.mute("sfx-removepiring");
    me.audio.mute("sfx-slidedays");
    me.audio.mute("sfx-slideout");
};

game.util.unmuteSfx = function(){
    me.audio.unmute("sfx-anak-marah");
    me.audio.unmute("sfx-anak-marah2mp3");
    me.audio.unmute("sfx-anak-senang");
    me.audio.unmute("sfx-anakmuda-marah");
    me.audio.unmute("sfx-anakmuda-marah2");
    me.audio.unmute("sfx-anakmuda-senang");
    me.audio.unmute("sfx-bapak2-marah");
    me.audio.unmute("sfx-bapak2-senang");
    me.audio.unmute("sfx-cewe-marah");
    me.audio.unmute("sfx-cewe-senang");
    me.audio.unmute("sfx-nenek-marah");
    me.audio.unmute("sfx-nenek-senang");
    me.audio.unmute("sfx-robot-marah");
    me.audio.unmute("sfx-robot-senang");
    me.audio.unmute("sfx-belanja");
    me.audio.unmute("sfx-button");
    me.audio.unmute("sfx-coin");
    me.audio.unmute("sfx-deliverysushi");
    me.audio.unmute("sfx-deliverysushi2");
    me.audio.unmute("sfx-getsushi");
    me.audio.unmute("sfx-hookgotsushi");
    me.audio.unmute("sfx-hooknaik");
    me.audio.unmute("sfx-hookturun");
    me.audio.unmute("sfx-removepiring");
    me.audio.unmute("sfx-slidedays");
    me.audio.unmute("sfx-slideout");
};

// var t = [];
// var fps;
// function animate(now) {
    
//     t.unshift(now);
//     if (t.length > 10) {
//         var t0 = t.pop();
//         fps = Math.floor(1000 * 10 / (now - t0));
//         // $('#fps').text(fps + ' fps');
//     }

//     window.requestAnimationFrame(animate);
// };

// window.requestAnimationFrame(animate);
//  End of user code  //
