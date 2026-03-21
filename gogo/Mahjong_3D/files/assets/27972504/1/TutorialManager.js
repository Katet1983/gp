var TutorialManager = pc.createScript('tutorialManager');

TutorialManager.attributes.add('tapTutorial', { type: 'entity' });
TutorialManager.attributes.add('swipeTutorial', { type: 'entity' });
TutorialManager.attributes.add('camera', { type: 'entity' });

// -1 is all tiles
var tutorialSteps = [
    { highlightedTileID: 0, enabledInfo: 'tap', restrictMovement: true },
    { highlightedTileID: 1, enabledInfo: 'tap', restrictMovement: true },
    { highlightedTileID: 8, enabledInfo: 'swipe', restrictMovement: false },
    { highlightedTileID: -1, enabledInfo: '', restrictMovement: false }
];

pc.extend(TutorialManager.prototype, {
    initialize: function() {
        pc.tutorialManager = this;

        this.doingTutorial = false;
        this.currentHighlightedTiles = [];
        this.app.on('MahjongGroup:onTileMatch', this.nextStep, this);
        this.app.on('GameManager:finished', this.endTutorial, this);
        this.toggleInfo(-1);
    },

    startTutorial: function() {
        this.doingTutorial = true;
        this.currentTutorialStep = 0;
        this.app.fire('GameManager:time', 0);
        this.setTutorial(this.currentTutorialStep);
        this.app.fire('TutorialManager:startTutorial');
    },

    endTutorial: function() {
        if (this.doingTutorial) {
            this.doingTutorial = false;
            pc.storageManager.set('finishedTutorial', true);
            pc.scoreManager.reset();
            pc.gameManager.forceTutorial = false; 
            this.app.fire('TutorialManager:stopTutorial');

            /*
            pc.powerUpButtons.forEach(pUpButton => {
                pUpButton._checkState();
            })
            */
        }
    },

    stopTutorial: function() {
        pc.gameManager.mahjongGroup.script.mahjongGroup.restrictMoveTutorial = false;
        this.app.fire('TutorialManager:stopTutorial');
    },

    nextStep: function() {
        if (!this.doingTutorial) {
            return;
        }
        
        this.currentTutorialStep += 1;
        this.setTutorial(this.currentTutorialStep);
    },

    setTutorial: function(step) {
        if (pc.gameManager.currentLevel !== 0) {
            console.warn('tutorial is started but level is not tutorial level');
            return;
        }

        if (tutorialSteps[step]) {
            this.highlightTiles(tutorialSteps[step].highlightedTileID);
            this.toggleInfo(tutorialSteps[step].enabledInfo);
            pc.gameManager.mahjongGroup.script.mahjongGroup.restrictMoveTutorial = tutorialSteps[step].restrictMovement;
        }
    },

    // Lighten or Darken tiles depending on tutorial step
    highlightTiles: function(tileID) {
        var tiles = pc.gameManager.mahjongGroup.script.mahjongGroup._tiles;
        this.currentHighlightedTiles.length = 0;
        if (tileID === -1) {
            // highlight all
            for (var i = 0; i < tiles.length; i += 1) {
                tiles[i].script.mahjongTile.toggleTutorialHighlight(true);
            }
            return;
        }
        for (var j = 0; j < tiles.length; j += 1) {
            var tile = tiles[j].script.mahjongTile;
            tile.toggleTutorialHighlight(tile._id === tileID);
            if (tile._id === tileID) {
                this.currentHighlightedTiles.push(tile.entity);
            }
        }
    },

    // enable or disable tap and swipe animation
    toggleInfo: function(infoType) {
        this.tapTutorial.enabled = infoType === 'tap';
        this.swipeTutorial.enabled = infoType === 'swipe';

        if (infoType === 'tap') {
            this.positionCycle = -1;
            this.setTapAnimationPosition(false);
        }
    },

    // calculates and moves tap animation to new tile position, cycles through highlighted tiles, starts anim when done moving
    setTapAnimationPosition: function(doAnim) {
        if (tutorialSteps[this.currentTutorialStep].enabledInfo !== 'tap' || !this.doingTutorial) return;
        this.positionCycle += 1;
        if (this.positionCycle > this.currentHighlightedTiles.length - 1) {
            this.positionCycle = 0;
        }

        var newPosition = new pc.Vec3();
        
        var tilePosition = this.currentHighlightedTiles[this.positionCycle].getPosition();
        this.camera.camera.worldToScreen(tilePosition, newPosition);

        var device = this.app.graphicsDevice;
        var scale = this.tapTutorial.element.screen.screen.scale;
        
        var x = (newPosition.x - window.innerWidth / 2) / scale * window.devicePixelRatio;
        
        var offset = 0;
        
        if (x < 0) {
            offset = -30 * scale;
        } else if (x > 0) {
            offset = 30 * scale;
        }

        
        newPosition.set(x + offset, (window.innerHeight / 2 - newPosition.y) / scale * window.devicePixelRatio, 0);
        
        if (doAnim) {
            this.tapMovetween = this.tapTutorial.tween(this.tapTutorial.getLocalPosition())
                .to({ x: newPosition.x, y: newPosition.y, z: 0 }, 0.3, pc.SineInOut)
                .start()
                .on('complete', function() {
                if (tutorialSteps[this.currentTutorialStep].enabledInfo === 'tap') {
                    this.startTapAnimation();
                }
            }.bind(this));
        } else {
            this.tapTutorial.setLocalPosition(newPosition.x, newPosition.y, 0);
            this.startTapAnimation();
        }
    },

    // start tween for tap hand and tap ripple, calls setTapAnimationPosition when completed
    startTapAnimation: function() {
        if (tutorialSteps[this.currentTutorialStep].enabledInfo !== 'tap') return;

        var rippleEntity = this.tapTutorial.children[0];
        var handEntity = this.tapTutorial.children[1];
        if (this.tapRippleTween) {
            this.tapRippleTween.stop();
            rippleEntity.setLocalScale(1, 1, 1);
        }
        if (this.tapHandTween) {
            this.tapHandTween.stop();
            handEntity.setLocalScale(1, 1, 1);
        }

        this.tapRippleTween = rippleEntity.tween(rippleEntity.getLocalScale())
            .to({ x: 1.2, y: 1.2, z: 1.2 }, 0.4, pc.SineInOut)
            .yoyo(true)
            .repeat(2)
            .delay(1)
            .start()
            .on('complete', function() {
            this.setTapAnimationPosition(true);
        }.bind(this));

        this.tapHandTween = handEntity.tween(handEntity.getLocalScale())
            .to({ x: 0.8, y: 0.8, z: 0.8 }, 0.4, pc.SineInOut)
            .yoyo(true)
            .repeat(2)
            .delay(1)
            .start();
    }
});