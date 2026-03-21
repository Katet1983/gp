var common = common || {};

common = {

    // increase completed levels
    increasecompletedlevels: function() {
        g.levelscompleted = Math.min(g.levelmax,g.levelscompleted+1);
        // save completed levels
        common.savecompletedlevels();
        // GameSnacks levelComplete
        GameSnacks.game.levelComplete(g.levelscompleted);
        // GameSnacks score update
        GameSnacks.score.update(g.levelscompleted);
    },

    // play next level
    playnextlevel: function() {
        g.levelnow = common.getcurrentlevel();
        g.playgame = true;
        g.levelwords = null;
        // clear up some variables
        g.timepassed = 0;
        g.timeleft = 0;
        common.AMUresetState();
        common.clearprogress();
        fox.runscene('start',true,500,0xFFFFFF);
    },

    // get current level & set g.AMUwordsURL
    getcurrentlevel: function() {
        let currentlevel = g.levelscompleted+1;
        if (currentlevel > g.levelmax) {
            // loop back to level 1
            currentlevel = 1;
            g.levelscompleted = 0;
            common.savecompletedlevels();
        }
        // set level data URL
        g.AMUwordsURL = 'json/'+g.config.level_name_prefix+currentlevel+'.json';
        return currentlevel;
    },

    // save the number of completed levels & current level
    savecompletedlevels: function() {
        // save to GameSnacks
        GameSnacks.storage.setItem(g.savedatalevelscompleted,g.levelscompleted.toString());
        fox.trace("completed levels saved to GameSnacks");
    },

    // load the number of completed levels & current level
    loadcompletedlevels: function() {
        // load from GameSnacks
        let completed = Number(GameSnacks.storage.getItem(g.savedatalevelscompleted));
        g.levelscompleted = Math.max(g.levelscompleted,completed);
        fox.trace("completed levels loaded from GameSnacks: "+g.levelscompleted);
    },

    AMUcopyLoadConfig: function(loadConfig) {
        if (loadConfig.files) {
            for (let i = 0; i < loadConfig.files.length; i++) {
                let a = loadConfig.files[i];
                // is this config.json file?
                if (a.originalFileName === 'config.json') g.configURL = a.url;
            }
        }
    },

    AMUcopyLoadSettings: function(loadSettings) {
        if (g.skipAMU) return;
        common.AMUresetSettings();
        _.each(loadSettings, (val, key) => {
            if (g.AMUsettings.hasOwnProperty(key)) {
                if (key === 'snapshot') {
                    _.each(loadSettings.snapshot, (ssVal, ssKey) => {
                        if (_.isObject(ssVal) || _.isArray(ssVal)) {
                            g.AMUsettings.snapshot[ssKey] = _.cloneDeep(ssVal);
                        } else {
                            g.AMUsettings.snapshot[ssKey] = ssVal;
                        }
                    });
                } else if (_.isObject(val) || _.isArray(val)) {
                    g.AMUsettings[key] = _.cloneDeep(val);
                } else {
                    g.AMUsettings[key] = val;
                }
            } else {
                console.warn( `loadSettings property ${key} does not match any game Settings properties:`, val);
            }
        });
        console.log('AMUcopyLoadSettings()', _.cloneDeep(g.AMUsettings));
    },

    // AMU reset settings
    AMUresetSettings: function() {
        if (g.skipAMU) return;
        let sound = g.AMUsettings.snapshot.sound;
        g.AMUsettings = _.cloneDeep(g.AMUdefaultSettings);
        g.AMUsettings.snapshot.sound = sound;
        console.log('AMUresetSettings', _.cloneDeep(g.AMUsettings));
    },

    // AMU reset state
    AMUresetState: function() {
        if (g.skipAMU) return;
        g.AMUstate = _.cloneDeep(g.AMUdefaultState);
        console.log('AMUresetState', _.cloneDeep(g.AMUstate));
    },

    // AMU copy loadstate
    AMUcopyLoadState: function(loadState) {
        if (g.skipAMU) return;
        common.AMUresetState();
        _.each(loadState, (val, key) => {
            if (g.AMUstate.hasOwnProperty(key)) {
                if (key === 'snapshot') {
                    _.each(loadState.snapshot, (ssVal, ssKey) => {
                        if (_.isObject(ssVal) || _.isArray(ssVal)) {
                            g.AMUstate.snapshot[ssKey] = _.cloneDeep(ssVal);
                        } else {
                            g.AMUstate.snapshot[ssKey] = ssVal;
                        }
                    });
                } else if (_.isObject(val) || _.isArray(val)) {
                    g.AMUstate[key] = _.cloneDeep(val);
                } else {
                    g.AMUstate[key] = val;
                }
            } else {
                console.warn( `loadState property ${key} does not match any game state properties:`, val);
            }
        });
        console.log('AMUcopyLoadState()', _.cloneDeep(g.AMUstate));
    },

    // get total playtime
    gettotalplaytime: function() {
        let totaltime = 0;
        for (let i = 0; i < g.stagetimecompletion.length; i++) {
            totaltime += g.stagetimecompletion[i] > 0 ? g.stagetimecompletion[i] : g.stageduration[i];
        }
        if (g.scenename === 'start') {
            // get current stage time passed from the timer
            try {
                if (g.timeractionID != null) totaltime += g.stageduration[g.stage-1] - g.timeleft;
            } catch (e) {
            }
        }
        return totaltime;
    },

    // replay game
    replay: function() {
        g.playgame = true;
        g.levelwords = null; // by setting g.levelwords to NULL, the game will reload JSON and re-initialize
        // clear up some variables
        g.totalstageswon = 0;
        g.stagetimecompletion = [];
        g.timepassed = g.stagestartingtime = 0;
        // reduce g.levelscompleted because of replay
        g.levelscompleted--;
        common.AMUresetState();
        common.clearprogress();
        fox.runscene('start',true,500,0x1e1e1f);
    },

    // returns TRUE if player win #num# time in a row
    winconsecutive: function(num) {
        let count = 0;
        for (let i = g.stage-1; i >= 0; i--) {
            if (g.stagestatus[i] == 2) {
                count++;
            } else {
                break;
            }
        }
        return count >= num;
    },

    softjiggle: function(it) {
        fox.tweenremoveallfrom(it);
        it.scale.set(0.3);
        it.visible = true;
        fox.tweenscale(it,0.3,1,700,0,g.easing.outElastic(1,0.8));
    },

    columnpointerdown: function(num) {
        if (g.paused) return;
        // fox.trace('selected column:'+num);
        let column = g.columncontainer[num];
        // hilite the column
        for (let i = 0; i < column.children.length; i++) {
            if (column.children[i].liteON) column.children[i].liteON();
        }
        fox.tweenremoveallfrom(column);
        g.wordchecktime = null;
        g.columnpressed = column;
        g.columnpressedindex = num;
        g.columnstartingpos = column.y;
    },

    columnpointerup: function() {
        if (!g.columnpressed) return;
        let column = g.columncontainer[g.columnpressedindex];
        if (!column) return;
        // turn off hilite
        for (let i = 0; i < column.children.length; i++) {
            if (column.children[i].liteOFF) column.children[i].liteOFF();
        }
        // find current letter index
        let index = Math.round(column.y / g.tilespacing);
        common.snapcolumn(column,index);
        g.columnpressed = null;
        g.columnpressedindex = -1;
    },

    columnpointermove: function(num) {
        // fox.trace('column pos:'+g.columnpressed.y);
    },

    snapcolumn: function(column,index) {
        column.targety = index * g.tilespacing;
        column.letterindex = -index;
        // snap (animate) into position
        fox.tweenremoveallfrom(column);
        let dy = Math.abs(column.y-column.targety);
        let duration = Math.min(500, Math.max(100,dy*10));
        fox.tweenY(column,column.y,column.targety,duration,0,g.easing.outBounce());
        // set to check the word in 700ms
        g.wordchecktime = Date.now() + 700;
        fox.delayaction(Math.ceil(duration/2),()=> {
            // sfx
            if (g.wordchecktime != null) fox.playsound('ztileset');
        });
    },

	showappinfo: function() {
        fox.trace(fox.devicetype()+' '+g.screenwid+'x'+g.screenhei+' Userscale:'+g.userscale.toFixed(2)+' Ratio:'+g.ratio);
    },

    playtimerstart: function() {
        if (g.timerID !== undefined) fox.removerepeataction(g.timerID);
        g.timerID = fox.repeataction(1000,()=> {
            g.timepassed++;
        },-1);
    },

    playtimerstop: function() {
        if (g.timerID) fox.removerepeataction(g.timerID);
    },

    // format time into string (00:00:00)
    formattime: function(seconds) {
        let res;
        let min = Math.floor(seconds / 60 % 60);
        let sec = seconds % 60;
        if (sec < 10) sec = '0'+sec;
        return min+':'+sec;
    },
    
    onpointerdown: function(it) {
        g.pressing = true;
        g.startpresstime = Date.now();
        g.mousex = g.startpressx = it.x/g.userscale;
        g.mousey = g.startpressy = it.y/g.userscale;
    },

    onpointerup: function(it) {
        g.pressing = false;
        g.startpressx = g.startpressy = null;
    },

    onpointermove: function(it) {
        g.mousex = it.x/g.userscale;
        g.mousey = it.y/g.userscale;
    },

    popballoon: function(message) {
        if (!g.popballoon) {
            fox.spawn('popballoon',0,-140,g.topcontainer,{message});
        } else {
            g.popballoon.poptext(message, 0x06F035);
        }
    },

    popexclaim: function(message) {
        fox.setscale(g.exclaim,1);
        fox.setscale(g.exclaimshadow,1);
        g.exclaim.text = g.exclaimshadow.text = message;
        fox.fittext2width(g.exclaim,g.screenwid-40,70);
        fox.fittext2width(g.exclaimshadow,g.screenwid-40,70);
        g.exclaim.visible = g.exclaimshadow.visible = true;
        fox.tweenremoveallfrom(g.exclaim);
        fox.tweenremoveallfrom(g.exclaimshadow);
        let tw1 = fox.tweenscale(g.exclaim,0.1,1.01,200,0,g.easing.outSine());
        let tw2 = fox.tweenscale(g.exclaimshadow,0.1,1.01,200,0,g.easing.outSine());
        tw1.once('end',()=> { fox.tweenscale(g.exclaim,1,0.8,500,0,g.easing.inOutSine(),-1,true) });
        tw2.once('end',()=> { fox.tweenscale(g.exclaimshadow,1,0.8,500,0,g.easing.inOutSine(),-1,true) });
    },

    removenonmidtiles: function() {
        for (let f = 0; f < g.totalcolumns; f++) {
            let col = g.columncontainer[f];
            for (let i = 0; i < col.tile.length; i++) {
                if (i == col.letterindex) continue;
                fox.remove(col.tile[i]);
            }
        }
    },

    loadlevel: function(callback) {
        // load words from JSON file
        fox.loaddata(g.AMUwordsURL,(res)=> {
            g.levelwords = res;
            callback();
        });
    },

    startgame: function() {
        g.noclick = 0;
        if (g.continuetimeleft > 0) {
            // continue playing from a previous game
            g.timeleft = g.continuetimeleft;
            g.continuetimeleft = 0;
        } else {
            g.timeleft = g.force_stage_time > 0 ? g.force_stage_time : g.stageduration[g.stage - 1];
            common.saveprogress();
        }
        // clear board
        g.scene.clearboard();
        if (!g.force_skip_countdown) {
            // countdown
            g.scene.countdown();
        } else {
            // skip countdown
            g.scene.maketiles();
        }
    },

    // continue to next stage
    continue: function() {
        g.stage++;
        if (g.stage <= g.maxstages) {
            common.startgame();
        } else {
            // finished all stages
            if (!g.usetimer) common.playtimerstop();
            // launch endscreen
            fox.runscene('endscreen', true, 500, 0x1e1e1f);
        }
    },

    makebgpattern: function(container) {
        let total = 5;
        let spacing = 636;
        let yy = -g.hscreenhei-140;
        let bg1 = fox.attachpic('bgpattern',-2*spacing,yy,container);
        let bg2 = fox.attachpic('bgpattern',-spacing,yy-30,container);
        let bg3 = fox.attachpic('bgpattern',0,yy,container);
        let bg4 = fox.attachpic('bgpattern',spacing,yy-30,container);
        let bg5 = fox.attachpic('bgpattern',2*spacing,yy,container);
        fox.setanchor(bg1,0.5,0);
        fox.setanchor(bg2,0.5,0);
        fox.setanchor(bg3,0.5,0);
        fox.setanchor(bg4,0.5,0);
        fox.setanchor(bg5,0.5,0);
    },

    // pause the game
    // NOTE: only when playing. Game should NOT pause at Titlescreen & Endscreen
    pausegame: function() {
        if (!g.paused) {
            g.ingamepaused = g.scenename === 'start';
            fox.pausegame(true);
            if (g.pausescr == null) fox.spawn('pausescreen', 0, 0, g.overcontainer);
            if (g.ingamepaused) {
                common.hideallpauseresumebuttons();
                common.showresumebutton();
                g.scene.buttoncontainer.visible = false;
                common.blurgame();
                // save progress
                common.saveprogress();
            }
            // AMU submit state
            g.AMUstate.snapshot.timeleft = g.timeleft;
        }
    },

    resumegame: function() {
        if (g.paused) {
            g.ingamepaused = false;
            fox.resumegame();
            if (g.pausescr) g.pausescr.close();
            if (g.scenename === 'start') {
                common.hideallpauseresumebuttons();
                common.showpausebutton();
                g.scene.buttoncontainer.visible = true;
                common.unblurgame();
            }
        }
    },

    // blur game
    blurgame: function() {
        if (!g.browser_is_Safari) {
            // add blur filter
            let blur = new PIXI.filters.KawaseBlurFilter(40, 5);
            g.midcontainer.filters = [blur];
            g.topcontainer.filters = [blur];
            g.bgpatterncontainer.filters = [blur];
        } else {
            // fake blur
            let blurwid = 848;
            let total = 2;
            for (let i = 0; i < total; i++) {
                let blurslice1 = fox.spawn("pauseblur",-0.5*blurwid-i*blurwid,0,g.blurcontainer);
                let blurslice2 = fox.spawn("pauseblur",0.5*blurwid+i*blurwid,0,g.blurcontainer);
                fox.setscale(blurslice1,8);
                fox.setscale(blurslice2,8);
            }
        }
    },

    // unblur game
    unblurgame: function() {
        if (!g.browser_is_Safari) {
            // remove blur filter
            if (g.midcontainer) g.midcontainer.filters = null;
            if (g.topcontainer) g.topcontainer.filters = null;
            if (g.bgpatterncontainer) g.bgpatterncontainer.filters = null;
        } else {
            // remove fake blur
            if (g.blurcontainer) fox.killchildren(g.blurcontainer);
        }
    },

    // check all stages complete (and send event)
    cekallstagescompleteandsendevent: function() {
        if (g.stage === g.maxstages && !g.AMUstate.isCompleted) {
            // AMU submit state
            g.AMUstate.isCompleted = true;
            if (g.flawless) g.AMUstate.earnedPerfectScore = true;
            // game ends
            common.increasecompletedlevels();
        }
    },

    // stop and clear timer
    stoptimer: function() {
        if (g.timeractionID == null) return;
        fox.removerepeataction(g.timeractionID);
        g.timeractionID = null;
    },

    // show the correct color pause button
    showpausebutton: function() {
        if (g.timeleft > 10) { g.buttonpausegreen.visible = true; fox.enablebutton(g.buttonpausegreen); }
        if (g.timeleft <= 10 && g.timeleft > 5) { g.buttonpauseyellow.visible = true; fox.enablebutton(g.buttonpauseyellow); }
        if (g.timeleft <= 5) { g.buttonpausered.visible = true; fox.enablebutton(g.buttonpausered); }
        // change timer background color
        fox.tint(g.timerbar,g.timeleft > 10 ? g.color_green : g.timeleft <= 5 ? g.color_timer_red : g.color_timer_yellow);
    },

    // show the correct color resume button
    showresumebutton: function() {
        if (g.timeleft > 10) { g.buttonplaygreen.visible = true; fox.enablebutton(g.buttonplaygreen); }
        if (g.timeleft <= 10 && g.timeleft > 5) { g.buttonplayyellow.visible = true; fox.enablebutton(g.buttonplayyellow); }
        if (g.timeleft <= 5) { g.buttonplayred.visible = true; fox.enablebutton(g.buttonplayred); }
    },

    // hide all pause buttons
    hideallpauseresumebuttons: function() {
        g.buttonpausegreen.visible = g.buttonpauseyellow.visible = g.buttonpausered.visible = g.buttonplaygreen.visible = g.buttonplayyellow.visible = g.buttonplayred.visible = false;
        fox.disablebutton(g.buttonpausegreen);
        fox.disablebutton(g.buttonpauseyellow);
        fox.disablebutton(g.buttonpausered);
        fox.disablebutton(g.buttonplaygreen);
        fox.disablebutton(g.buttonplayyellow);
        fox.disablebutton(g.buttonplayred);
    },

    // mute or unmute music based on g.mutemusic
    applymutemusic: function() {
        for (let key in g.sfx) {
            if (g.sfx.hasOwnProperty(key)) {
                // mute or unmute all music loops
                if (key.substring(0, 5) === "zloop") {
                    g.sfx[key].muted = g.mutemusic;
                }
            }
        }
    },

    // mute or unmute sfx based on g.mutesfx
    applymutesfx: function() {
        for (let key in g.sfx) {
            if (g.sfx.hasOwnProperty(key)) {
                // mute or unmute everything EXCEPT music loops
                if (key.substring(0, 5) !== "zloop") g.sfx[key].muted = g.mutesfx;
            }
        }
    },

    // load progress from g.AMUstate
    loadprogress: function() {
        // load progress from GameSnacks
        let progress = GameSnacks.storage.getItem(g.savedatalevelprogress);
        let progresslevel = -999;
        fox.trace("progress loaded from GameSnacks");
        if (progress) {
            let parsedprogress = JSON.parse(progress);
            progresslevel = _.get(parsedprogress, 'snapshot.level', 0);
        }
        // make sure the saved progress if for the current level
        if (progresslevel === g.levelnow) {
            g.AMUstate = JSON.parse(progress);
            // for this game, if showing g.AMUstate.isCompleted is true, this is due to player
            // refreshing when the game ends, but BEFORE showing the endscreen.
            // So we reset g.AMUstate below
            if (g.AMUstate.isCompleted) {
                common.AMUresetState();
                common.clearprogress();
            }
        }
    },

    // save progress to local state object (g.AMUstate)
    // NOTE: this local state object will be sent along with any AMU event
    saveprogress: function() {
        let totalplaytime = 0;
        if (g.usetimer) {
            // game uses timer (each stage has time limit)
            totalplaytime = common.gettotalplaytime() * 1000;
        } else {
            // game has no timer (we send the usual g.timepassed)
            totalplaytime = g.timepassed*1000 || 0;
        }
        let skor = g.totalstageswon;
        // always send score and totalPlayTime
        g.AMUstate.totalPlayTime = totalplaytime;
        g.AMUstate.score = {value: skor, formattedScore: skor};
        g.AMUstate.snapshot.level = g.levelnow;
        g.AMUstate.snapshot.timeleft = g.timeleft;
        // save to GameSnacks
        GameSnacks.storage.setItem(g.savedatalevelprogress, JSON.stringify(g.AMUstate));
        fox.trace("progress saved to GameSnacks");
    },

    // clear saved progress
    clearprogress: function() {
        // clear data at GameSnacks
        GameSnacks.storage.removeItem(g.savedatalevelprogress);
        fox.trace("progress cleared at GameSnacks");
    },
};