(function(){
// Put user code here //
 
//  End of user code  //

game.object.PauseContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.pressButton = true;
        this.timeButton = 0;
        this.bg = me.pool.pull("BGPause", 0, 0);
        me.game.world.addChild(this.bg, 100);
            
        let frame = "PauseFrame";
        
        if(me.levelDirector.getCurrentLevel().name == "mainmenu"){
            frame = "SettingsFrame";
        }
        else{
            frame = "PauseFrame";
        }
        
        this.pauseFrame = me.pool.pull(frame, 0, 0);
        me.game.world.addChild(this.pauseFrame, 101);
            
        if(inGamePlay){
            this.bgmBar = me.pool.pull("BgmBar", 0, -280);
            me.game.world.addChild(this.bgmBar, 102);
            this.bgmBar.container = this;
            this.tutorialContainer = me.pool.pull("TutorialContainer", 0, 0);
            me.game.world.addChild(this.tutorialContainer, 103);
            this.tutorialContainer.pauseContainer = this;
            
            this.btnToHome = me.pool.pull("BtnToHome", 0, 170,{
                container : this
            });
            me.game.world.addChild(this.btnToHome, 105);
        
            this.btnContinue = me.pool.pull("BtnContinue", 0, 362.5,{
                region : "button_play_001",
                container : this
            });
            me.game.world.addChild(this.btnContinue, 102);
            
            this.btnRestart = me.pool.pull("BtnRestart", 0, 60,{//2550 +250
                region : "Pause_button_restart",
                container : this
            });
            me.game.world.addChild(this.btnRestart, 102);
            
            this.speakerBar = me.pool.pull("SpeakerBar", 0, -160);
            me.game.world.addChild(this.speakerBar, 102);
            this.speakerBar.container = this;
            
            this.btnHelp = me.pool.pull("BtnHelp", 0, -50, {//2300
                region : "Pause_button_help",
                container : this
            });
            me.game.world.addChild(this.btnHelp, 102);
        }
        else{
            this.bgmBar = me.pool.pull("BgmBar", 0, -115);
            me.game.world.addChild(this.bgmBar, 102);
            this.bgmBar.container = this;
            
            this.tutorialContainer = me.pool.pull("TutorialContainerAnim", 0, 0);
            me.game.world.addChild(this.tutorialContainer, 103);
            this.tutorialContainer.pauseContainer = this;
            
            this.btnClose = me.pool.pull("BtnClosePause", 217.5, -300,{
                region : "close",
                container : this
            });
            me.game.world.addChild(this.btnClose, 102);
            
            this.speakerBar = me.pool.pull("SpeakerBar", 0, 17.5);
            me.game.world.addChild(this.speakerBar, 102);
            this.speakerBar.container = this;
            
            this.btnHelp = me.pool.pull("BtnHelp", 0, 150, {//2300
                region : "Pause_button_help",
                container : this
            });
            me.game.world.addChild(this.btnHelp, 102);
        }
        
        this.MoveSpeakerIcon();
        this.MoveBgmIcon();
        this.placedSushi = true;
        this.tuttor = true;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        if(this.pressButton == false){
            this.timeButton += 1;
            if(this.timeButton >= 50){
                this.pressButton = true;
                this.timeButton = 0;
            }
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
        if(inGamePlay){
            me.game.world.removeChild(this.btnToHome);
            me.game.world.removeChild(this.btnContinue);
            me.game.world.removeChild(this.btnRestart);
        }
        else{
            me.game.world.removeChild(this.btnClose);
        }
        
        me.game.world.removeChild(this.bg);
        me.game.world.removeChild(this.speakerBar);
        me.game.world.removeChild(this.bgmBar);
        me.game.world.removeChild(this.btnHelp);
        me.game.world.removeChild(this.pauseFrame);
        //  End of user code  //
	},

    // Put user code here //
    Hide : function(){
        if(!this.container.mainmenu){
            this.container.pauseBtn.alpha = 1;
        }
        
        this.bg.alpha = 0;
        this.speakerBar.alpha = 0;
        this.bgmBar.alpha = 0;
        this.btnHelp.alpha = 0;
        this.pauseFrame.pos.y += 9000;
        this.bg.pos.y =  this.bg.pos.y + 9000;
        this.speakerBar.pos.y = this.speakerBar.pos.y+9000;
        this.bgmBar.pos.y = this.bgmBar.pos.y+9000;
        this.btnHelp.pos.y = this.btnHelp.pos.y+9000;
        
        if(inGamePlay){
            if(this.tuttor){
                if(audioOn){
                    me.audio.unmuteAll();
                }
                iniDipause = true;
            }
            this.btnToHome.pos.y = this.btnToHome.pos.y+9000;
            this.btnContinue.alpha = 0;
            this.btnContinue.pos.y = this.btnContinue.pos.y+9000;
            this.btnRestart.alpha = 0;
            this.btnRestart.pos.y = this.btnRestart.pos.y+9000;
        }
        else{
            this.btnClose.pos.y = this.btnClose.pos.y+9000;
        }
    },
    
    Show : function(){
        if(this.bg.alpha == 0){
            if(!this.container.mainmenu){
                this.container.pauseBtn.alpha = 0;
            }
            this.pressButton = true;
            this.bg.alpha = 1;
            this.bgmBar.alpha = 1;
            this.speakerBar.alpha = 1;
            this.btnHelp.alpha = 1;
            this.pauseFrame.pos.y -= 9000;
            this.bg.pos.y = this.bg.pos.y - 9000;
            this.bgmBar.pos.y = this.bgmBar.pos.y - 9000;
            this.speakerBar.pos.y = this.speakerBar.pos.y - 9000;
            this.btnHelp.pos.y = this.btnHelp.pos.y - 9000; 
            
            if(inGamePlay){
                if(this.tuttor){
                    iniDipause = false;
                }
                this.btnToHome.pos.y = this.btnToHome.pos.y - 9000;
                
                this.btnContinue.alpha = 1;
                this.btnContinue.pos.y = this.btnContinue.pos.y - 9000;
                
                this.btnRestart.alpha = 1;
                this.btnRestart.pos.y = this.btnRestart.pos.y - 9000;
            }
            else{
            this.btnClose.pos.y = this.btnClose.pos.y - 9000;
        }
        }
    },
    
    MoveSpeakerIcon : function(){
        if(game.var.muteSfx){
            game.util.muteSfx();
            this.speakerBar.setCurrentAnimation("disable");
        }
        else{
            game.util.unmuteSfx();
            this.speakerBar.setCurrentAnimation("able");
        }
        
        me.game.repaint();
    },
    
    MoveBgmIcon : function(){
        if(game.var.mute){
            game.util.muteBgm();
            this.bgmBar.setCurrentAnimation("disable");
        }
        else{
            game.util.unmuteBgm();
            this.bgmBar.setCurrentAnimation("able");
        }
        
        me.game.repaint();
    },
    
    Resume : function(){
        me.timer.clearTimeout(this.container.pauseBtn.timer);
        game.util.resumeGame();
        
        this.Hide();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();