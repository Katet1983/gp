var loadingscreen = function (x,y,params) {
    foxinstance.call(this,x,y,params);
};
loadingscreen.prototype = Object.create(foxinstance.prototype);
loadingscreen.prototype.constructor = loadingscreen;

loadingscreen.prototype.begin = function() {
    let t = this;
    t.uda = t.scriptsloaded = t.configloaded = t.gamejsonloaded = t.savegameloaded = t.specialfigureloaded = t.userfigureloaded = false;
    t.loadingstarttime = Date.now();
    // whenever we got signal for loaded figure data, we do ceksetup
    g.signal.on('scriptsloaded',()=> { t.scriptsloaded = true; t.ceksetup() });
    g.signal.on('configloaded',()=> { t.configloaded = true; t.ceksetup() });
    g.signal.on('gamejsonloaded',()=> { t.gamejsonloaded = true; t.ceksetup() });
    // array of JS files to load
    // t.JSscripts = ['all'];
    // if (g.localtesting) t.JSscripts = ['popmoretime','endscreen','popballoon','tile','foxanimation','foxlib'','titlescreen','start','particle','timer'];
    t.JSscripts = ['pausescreen','popmoretime','endscreen','popballoon','tile','foxanimation','foxlib','titlescreen','start','particle'];
    // other JS assets to load (with extension, because some can be normal JSON and some can be compressed JZ)
    t.JSassets = ['z_audio.jz','z_foxsvg.jz'];
    t.preloadfonts();
};

loadingscreen.prototype.setall = function() {
    let t = this;
    // create container at the center of the screen
    t.a = fox.makecontainer(g.hscreenwid,g.hscreenhei,t);
};

loadingscreen.prototype.loadassets = function() {
    let t = this;
    fox.trace("loading assets");
    // load images
    let atlasdict = {};
    for (let f = 0; f < g.atlasnames.length; f++) {
        for (let i = 0; i < g[g.atlasnames[f]+'_atlas'].length; i++) {
            atlasdict[g[g.atlasnames[f]+'_atlas'][i]] = g[g.atlasnames[f]+'_atlas'][i]+fox.getatlasresolution(atlasdict[g[g.atlasnames[f]+'_atlas'][i]]);
        }
    }
    for (let key in atlasdict) {
        if (atlasdict.hasOwnProperty(key)) g.loader.add(key, './img/' + atlasdict[key] + '.json')
    }
    // load bitmap fonts
    for (let i = 0; i < g.bitmapfonts.length; i++) {
        g.loader.add(g.bitmapfonts[i], 'fonts/'+g.bitmapfonts[i]+'.fnt');
    }
    g.loader.load(()=> {
        t.loadconfig();
        t.loadgamejson();
        t.loadJSfiles()
    });
};

// load config file (contains all text/copy)
loadingscreen.prototype.loadconfig = function() {
    fox.loaddata(g.configURL,(result)=> {
        g.config = result;
        // some global vars must be declared immediately
        g.levelmax = g.config.total_levels;
        g.stageduration = g.config.stage_duration;
        g.maxstages = g.config.hasOwnProperty('total_stages') ? g.config.total_stages : g.stageduration.length;
        g.usetimer = g.config.hasOwnProperty('timer_enabled') ? g.config.timer_enabled : true;
        // emit signal
        g.signal.emit('configloaded');
    });
}

// load package.json file
loadingscreen.prototype.loadgamejson = function() {
    fox.loaddata('game.json',(result)=> {
        g.gamejson = result;
        g.signal.emit('gamejsonloaded');
    });
}

loadingscreen.prototype.loadJSfiles = function() {
    let t = this;
    let arr = [];
    let suffix = g.localtesting ? '?'+Date.now():'';
    // add path to t.JSassets
    for (let i = 0; i < t.JSassets.length; i++) t.JSassets[i] = 'jz/'+t.JSassets[i]+suffix;
    // add path to t.JSscripts
    for (let i = 0; i < t.JSscripts.length; i++) t.JSscripts[i] = 'js/'+t.JSscripts[i]+'.js'+suffix;
    // combine with JSassets & JSscripts arrays
    let allJS = arr.concat(t.JSassets,t.JSscripts);
    fox.loadJS(allJS,(e)=> { g.signal.emit('scriptsloaded') });
};

loadingscreen.prototype.ceksetup = function() {
    var t = this;
    if (t.scriptsloaded && t.configloaded && t.gamejsonloaded) t.setup();
}

loadingscreen.prototype.setup = function() {
    let t = this;
    if (t.uda) return;
    t.uda = true;
    t.initSVG();
    t.initfoxpic();
    t.initfoxclip();
    t.initaudio();
    // load progress
    common.loadcompletedlevels();
    common.loadprogress();
    if (g.firstscene !== 'titlescreen') {
        // development mode
        fox.delayaction(100, ()=> { fox.runscene(g.firstscene, false) }); // add tiny delay to prevent detached audiobuffer
        fox.trace('dev mode - skip fadescreen');
    } else {
        // GameSnacks firstFrameReady
        GameSnacks.game.firstFrameReady();
        // start the game
        g.assetsloaded = true;
        fox.runscene(g.firstscene, true, 500, 0x1e1e1f);
    }
};

// init audio
loadingscreen.prototype.initaudio = function() {
    if (!g.z_audio) return;
    // init base64 audio
    for (let key in g.z_audio) {
        if (g.z_audio.hasOwnProperty(key)) {
            g.sfx[key] = PIXI.sound.Sound.from({ source: fox.base64toBuffer(g.z_audio[key]) });
            // play sound and stop it - necessary fix for base64 audio files to get all properties ready (duration, etc)
            g.sfx[key].play();
            g.sfx[key].stop();
        }
    }
    // set the music & sfx to mute (or not) based on saved data
    common.applymutemusic();
    common.applymutesfx();
};

// init foxclip
loadingscreen.prototype.initfoxclip = function() {
    let t = this;
    // get clips from g.foxpic
    for (let key in g.foxpic) {
        // check if the property/key is defined in the object itself, not in parent
        if (g.foxpic.hasOwnProperty(key)) {
            if (fox.endswithdigits(key, 4)) {
                let name = key.substr(0, key.length - 4);
                if (!g.foxcliparrays[name]) {
                    g.foxcliparrays[name] = [];
                    g.foxclipframecount[name] = 0;
                }
                // put each pic name into array
                g.foxcliparrays[name].push(key);
                // update frame count
                g.foxclipframecount[name]++;
            }
        }
    }

    if (g.z_foxsvg) {
        // get clips from g.z_foxsvg
        for (let key in g.z_foxsvg) {
            // check if the property/key is defined in the object itself, not in parent
            if (g.z_foxsvg.hasOwnProperty(key)) {
                if (fox.endswithdigits(key, 4)) {
                    let name = key.substr(0, key.length - 4);
                    if (!g.foxcliparrays[name]) {
                        g.foxcliparrays[name] = [];
                        g.foxclipframecount[name] = 0;
                    }
                    // put each pic name into array
                    g.foxcliparrays[name].push(key);
                    // update frame count
                    g.foxclipframecount[name]++;
                }
            }
        }
    }
    // process g.foxcliparrays
    for (let key in g.foxcliparrays) {
        // prepare array of textures for the clip
        let texarr = [];
        // sort alphanumeric the list of pic names
        g.foxcliparrays[key].sortalphanumeric();
        // fill up texture array
        for (let  i = 0; i < g.foxcliparrays[key].length; i++) {
            texarr.push(g.foxpic[g.foxcliparrays[key][i]]);
        }
        // add animation to g.foxclip
        g.foxclip[key] = texarr;
    }
};

loadingscreen.prototype.initfoxpic = function() {
    let t = this;
    // Process foxpics =============================================================================
    let names = [];
    for (let i = 0; i < g.foxpic_atlas.length; i++) {
        names = fox.getatlaskeys(g.foxpic_atlas[i]);
        if (names.length > 0) {
            for (let f = 0; f < names.length; f++) {
                g.foxpic[names[f]] = g.loader.resources[g.foxpic_atlas[i]].textures[names[f]];
            }
        }
    }
    // g.foxpic will also include foxbg images
    for (let i = 0; i < g.foxbg_atlas.length; i++) {
        names = fox.getatlaskeys(g.foxbg_atlas[i]);
        if (names.length > 0) {
            for (let f = 0; f < names.length; f++) {
                g.foxpic[names[f]] = g.loader.resources[g.foxbg_atlas[i]].textures[names[f]];
            }
        }
    }
    // g.foxpic will also include foxjpg images
    for (let i = 0; i < g.foxjpg_atlas.length; i++) {
        names = fox.getatlaskeys(g.foxjpg_atlas[i]);
        if (names.length > 0) {
            for (let f = 0; f < names.length; f++) {
                g.foxpic[names[f]] = g.loader.resources[g.foxjpg_atlas[i]].textures[names[f]];
            }
        }
    }
    // g.foxpic will also include foxani images
    for (let i = 0; i < g.foxani_atlas.length; i++) {
        names = fox.getatlaskeys(g.foxani_atlas[i]);
        if (names.length > 0) {
            for (let f = 0; f < names.length; f++) {
                g.foxpic[names[f]] = g.loader.resources[g.foxani_atlas[i]].textures[names[f]];
            }
        }
    }
    // g.foxpic will also include foxclip images
    for (let i = 0; i < g.foxclip_atlas.length; i++) {
        names = fox.getatlaskeys(g.foxclip_atlas[i]);
        if (names.length > 0) {
            for (let f = 0; f < names.length; f++) {
                g.foxpic[names[f]] = g.loader.resources[g.foxclip_atlas[i]].textures[names[f]];
            }
        }
    }
};



loadingscreen.prototype.initSVG = function() {
    // process all SVG images
    if (!g.z_foxsvg) return;
    let data = g.z_foxsvg;
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            let svgstring = LZString.decompress(data[key]);
            let blob = new Blob([svgstring], {type: 'image/svg+xml'});
            g.foxpic[key] = PIXI.Texture.from(URL.createObjectURL(blob),{resolution:g.ratio,mipmap:PIXI.MIPMAP_MODES.ON});
        }
    }
};

loadingscreen.prototype.preloadfonts = function() {
    let t = this;
    // preload fonts using FontFaceObserver
    t.fontsloadedcount = 0;
    for (let i = 0; i < g.fonts.length; i++) {
        let font = new FontFaceObserver(g.fonts[i]);
        font.load().then(()=> {
            t.fontsloadedcount++;
            if (t.fontsloadedcount >= g.fonts.length) {
                t.setall();
                // then load assets
                t.loadassets();
            }
        });
    }
};