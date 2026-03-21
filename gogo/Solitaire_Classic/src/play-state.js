//PlayState
var PlayState = {

    bg: null,
    buttonOptions: null,
    retryButton: null,
    iconPoints: null,
    iconTime: null,
    iconMoves: null,
    labelScore: null,
    labelTime: null,
    labelMoves: null,
    cardPicked: null,
    prevCardPicked: null,
    baseCardPosition: null,
    pointerOffset: null,

    displayScore: 0,
    moves: 0,
    currentScore: 0,

    timePick: 0,
    AUTO_PUT_DELAY: 0.4,

    allPlayObjects: [],

    optionsScreen: null,

    teDecreaseScore: null,

    //
    shutdown: function()
    {
        if(R.deck.state === 1)
        {
            this.totalStatTracking(R.deck.mode);
            R.saveGame();
        }

        this.allPlayObjects.length = 0;
        this.bg = null;
        this.buttonOptions = null
        this.retryButton = null;
        this.iconPoints = null;
        this.iconTime = null;
        this.iconMoves = null;
        this.labelScore = null;
        this.labelTime = null;
        this.labelMoves = null;
        this.cardPicked = null;
        this.prevCardPicked = null;
        this.baseCardPosition = null;
        this.pointerOffset = null;
        this.optionsScreen = null;
        this.teDecreaseScore = null;

        R.deck.shutdown();
    },

    create: function()
    {
        window.famobi_analytics.trackScreen("SCREEN_LEVEL");
        window.famobi_analytics.trackEvent("EVENT_LEVELSTART", {levelName: R.deck.mode.toString()});

        this.baseCardPosition = new Phaser.Point(0, 0);

        this.bg = game.add.sprite(0, 0, 'bg_main');

        //gui
        this.buttonOptions = game.add.button(0, 0, 'gui', this.onOptionsButton, this, 'options_button', 'options_button', 'options_button_pushed', 'options_button');
        this.buttonOptions.anchor.set(0.5);
        if(R.sfx.button) this.buttonOptions.setDownSound(R.sfx.button);
        this.retryButton = game.add.button(0, 0, 'gui', R.moveSaver.undo, R.moveSaver, 'retry_button', 'retry_button', 'retry_button_pushed', 'retry_button');
        this.retryButton.anchor.set(0.5);

        this.iconPoints = game.add.sprite(0, 0, 'gui', 'points_icon');
        this.iconPoints.anchor.set(0.5);
        this.iconTime = game.add.sprite(0, 0, 'gui', 'time_icon');
        this.iconTime.anchor.set(0.5);
        this.iconMoves = game.add.sprite(0, 0, 'gui', 'moves_button');
        this.iconMoves.anchor.set(0.5);

        this.labelScore = R.createText(0, 0, 30, '0', '#ffffff');
        this.labelTime = new R.Clock(0, 0, 30, '#ffffff');
        game.world.add(this.labelTime);
        this.labelMoves = R.createText(0, 0, 30, '0', '#ffffff');

        //
        R.deck.init();

        //
        this.optionsScreen = new R.OptionsScreen();

        //
        this.resize(game.width, game.height);
        R.sceneTransition(200, null);

        if(R.sfx.new_game) R.sfx.new_game.play();
    },

    resize: function(width, height)
    {
        if(this.optionsScreen.exists)
        {
            this.optionsScreen.resize(width, height);
            return;
        }
        else if(this.optionsScreen.tutorialScreen)
        {
            this.optionsScreen.tutorialScreen.resize(width, height);
            return;
        }

        if(width > height)
        {
            this.bg.rotation = Math.PI * -0.5;
            this.bg.y = R.BASE_GAME_HEIGHT;

            this.buttonOptions.position.set(93, height*0.12);
            this.retryButton.position.set(93, height*0.56);

            this.iconPoints.position.set(50, height*0.26);
            this.iconTime.position.set(50, height*0.34);
            this.iconMoves.position.set(50, height*0.42);
        }
        else
        {
            this.bg.rotation = 0;
            this.bg.y = 0;

            this.buttonOptions.position.set(93, 92);
            this.retryButton.position.set(546, 93);
            this.iconPoints.position.set(264, 50);
            this.iconTime.position.set(264, 104);
            this.iconMoves.position.set(264, 154);
        }

        this.labelScore.position.set(this.iconPoints.x + 120, this.iconPoints.y + 4);
        this.labelTime.position.set(this.iconTime.x + 120, this.iconTime.y + 6);
        this.labelMoves.position.set(this.iconMoves.x + 120, this.iconMoves.y + 2);

        R.deck.resize(width, height);
    },

    inputOnDown: function(pointer, event)
    {
        if(R.deck.state === 0)
        {
            R.deck.state = 1;
            this.resize(game.width, game.height);
            return;
        }

        if(game.tweens._tweens.length > 0)
        {
            if(R.sfx.error) R.sfx.error.play();
            return;
        }

        var card = R.deck.pick(pointer.x, pointer.y);

        if(card && card.parent === game.world)
        {
            if(game.device.desktop && card === this.prevCardPicked && (game.time.totalElapsedSeconds() - this.timePick) < this.AUTO_PUT_DELAY)
            {
                this.prevCardPicked = null;
                R.deck.autoPut(card);
            }
            else
            {
                card.setOnTop();
                this.pointerOffset = Phaser.Point.subtract(card, pointer);
                this.cardPicked = card;
                this.baseCardPosition.set(card.x, card.y);
                this.timePick = game.time.totalElapsedSeconds();
                if(R.sfx.pick_card) R.sfx.pick_card.play();
            }
        }
    },

    inputOnUp: function(pointer, event)
    {
        if(this.cardPicked)
        {
            if(!game.device.desktop && Phaser.Point.distance(this.cardPicked, this.baseCardPosition) < 5) R.deck.autoPut(this.cardPicked);
            else R.deck.put(this.cardPicked, (game.time.totalElapsedSeconds() - this.timePick) > 0.25);
            this.prevCardPicked = this.cardPicked;
            this.cardPicked = null;
        }
    },

    start: function()
    {
        R.deck.start();
        game.input.onDown.add(this.inputOnDown, this);
        game.input.onUp.add(this.inputOnUp, this);
    },

    beginPlay: function()
    {
        R.deck.state = 1;
        R.score = 0;
        
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: R.score});

        this.displayScore = 0;
        this.moves = 0;
        this.timePick = 0;

        R.moveSaver.reset();

        this.labelTime.reset(true);

        this.teDecreaseScore = game.time.events.loop(30000, R.scoreChange, R, -5);
        game.time.events.loop(75, this.updateLabelScore, this);
    },

    update: function()
    {
        if(this.cardPicked) this.cardPicked.setPosition(game.input.activePointer.x + this.pointerOffset.x, game.input.activePointer.y + this.pointerOffset.y);
    },

    updateLabelScore: function()
    {
        if(false && this.displayScore !== R.score) {
            if(this.displayScore > R.score) --this.displayScore;
            else ++this.displayScore;

            this.labelScore.text = this.displayScore.toString();  
        }
        
        if(this.currentScore != R.score){
            window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: R.score});
            this.currentScore = R.score;
        }
        
        this.labelScore.text = R.score.toString();
    },

    onOptionsButton: function()
    {
        this.labelTime.pause(true);

        game.input.onDown.remove(this.inputOnDown, this);
        game.input.onUp.remove(this.inputOnUp, this);

        R.deck.state = 1;
        this.resize(game.width, game.height);

        var i = game.world.children.length;
        while(i--) this.allPlayObjects.push(game.world.children[i]);

        game.world.removeAll(false, true);

        this.optionsScreen.open();
    },

    onCloseOptionsScreen: function()
    {
        window.famobi_analytics.trackScreen("SCREEN_LEVEL");

        var i = this.allPlayObjects.length;
        while(i--) game.world.add(this.allPlayObjects[i]);
        this.allPlayObjects.length = 0;
        this.resize(game.width, game.height);

        game.input.onDown.add(this.inputOnDown, this);
        game.input.onUp.add(this.inputOnUp, this);

        this.labelTime.pause(false);
    },

    onCloseTutotial: function()
    {
        if(this.optionsScreen) this.optionsScreen.closeTutorial();
    },

    //
    move: function()
    {
        ++this.moves;
        this.labelMoves.text = this.moves.toString();
    },

    totalStatTracking: function(mode)
    {
        var m = mode.toString();
        ++R.playerData['gamesPlayed' + m];
        R.playerData['totalTime' + m] += this.labelTime.getTotalSeconds();

        R.deck.state = 0;
    },

    win: function()
    {
        game.input.onDown.remove(this.inputOnDown, this);
        game.input.onUp.remove(this.inputOnUp, this);
        game.time.events.remove(this.teDecreaseScore);
        this.labelTime.stopTick();

        this.buttonOptions.inputEnabled = false;
        this.retryButton.inputEnabled = false;

        this.teDecreaseScore = game.time.events.loop(100, this.updateWon, this);
        game.time.events.add(500, function() { game.input.onDown.add(this.inputOnDownWin, this); }, this);

        if(R.sfx.win) R.sfx.win.play();
    },

    inputOnDownWin: function(pointer, event)
    {
        this.closeWin();
    },

    updateWon: function()
    {
        if(R.flyCards === 0 && game.world.children.length < 27) this.closeWin();
    },

    closeWin: function()
    {
        window.famobi_analytics.trackEvent("EVENT_LEVELSUCCESS", {levelName: R.deck.mode.toString()});

        var m = R.deck.mode.toString();
        ++R.playerData['gamesWon' + m];
        if(R.playerData['bestScore' + m] < R.score) R.playerData['bestScore' + m] = R.score;
        if(R.playerData['leastMoves' + m] === 0 || R.playerData['leastMoves' + m] > this.moves) R.playerData['leastMoves' + m] = this.moves;
        var time = this.labelTime.getTotalSeconds();
        if(R.playerData['bestTime' + m] === 0 || R.playerData['bestTime' + m] > time) R.playerData['bestTime' + m] = time;

        window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {totalScore: R.score});

        game.input.onDown.remove(this.inputOnDownWin, this);
        game.time.events.remove(this.teDecreaseScore);
        R.sceneTransition(200, 'home');
    }
};
