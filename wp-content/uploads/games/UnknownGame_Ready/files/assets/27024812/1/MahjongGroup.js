var MahjongGroup = pc.createScript('mahjongGroup');

MahjongGroup.attributes.add('horizontalRotationSpeed', { type: 'number', placeholder: 'Horizontal Speed', default: 0.5, });
MahjongGroup.attributes.add('verticalRotationSpeed', { type: 'number', placeholder: 'Vertical Speed', default: 0.5, });
MahjongGroup.attributes.add('eulerClamp', { type: 'number', default: 25 });
MahjongGroup.attributes.add('maxYRotation', { type: 'number', default: 30 });
MahjongGroup.attributes.add('defaultEulerAngles', { type: 'vec3', default: [ 0, 45, 0 ] });

MahjongGroup.attributes.add('autoRotateTime', { type: 'number', default: 1 });
MahjongGroup.attributes.add('autoRotateCurve', { type: 'curve' });

pc.extend(MahjongGroup.prototype, {

    initialize: function() {
        this._width = null;
        this._heigth = null;
        this._depth = null;

        this._tilesAmount = null;
        this._tilesArray = null;
        this._tiles = [];
        this._pairs = null;

        this._selectedTileScript = null;

        this._vector3 = new pc.Vec3();

        this.canMove = true;
        this.restrictMoveTutorial = false;

        this.isAutoRotating = false;
        this.autoRotateAngle = 0;
        this.autoRotateCounter = 0;
        this.lastAutoRotateAngle = 0;

        this.firstTimeSFX = true;

        this._objectPool = this.entity.script.objectPool;
        this._deltaYRotation = 0;
        this.app.on('inputHandler:move', this.onMove, this);
        this.on('attr:maxYRotation', function() {
            this.onMove(null, pc.Vec2.ZERO);
        }, this);

        this.app.on('PowerUpButton:shuffle', this.shuffleTiles, this);
        this.app.on('PowerUpButton:hint', this.findMatch, this);
        this.app.on('GameManager:onEndGame', this.flyUpBlocks, this);  
    },

    update: function(dt) {
        if (this.isAutoRotating) {
            this.autoRotateCounter += dt;
            var angle = this.autoRotateAngle * this.autoRotateCurve.value(this.autoRotateCounter / this.autoRotateTime);
            var deltaAngle = angle - this.lastAutoRotateAngle;
            this.lastAutoRotateAngle = angle;
            this.entity.rotateLocal(0, deltaAngle, 0);
            if (this.autoRotateCounter > this.autoRotateTime) {
                this.isAutoRotating = false;
            }
        }
    },

    spawnLevel: function(data) {
        var field = data.field;

        this._width = field.length;
        this._height = field[0].length;
        this._depth = field[0][0].length;

        this._tilesAmount = 0;

        this._tilesArray = this.multiDimensionArray([this._width, this._height, this._depth]);
        this._tiles.length = 0;

        var totalSpawnTime = 0.5;
        var tweenTime = 0.35;
        var spawnInterval = totalSpawnTime / (this._width * this._height * this._depth);
        for (var x = 0; x < this._width; x += 1) {
            for (var y = 0; y < this._height; y += 1) {
                for (var z = 0; z < this._depth; z += 1) {
                    if (field[x][y][z]) {
                        this.spawnTile(x, y, z, tweenTime, totalSpawnTime);
                    }
                    totalSpawnTime -= spawnInterval;
                }
            }
        }

        this._pairs = Math.floor(this._tilesAmount / 2);

        if (data.id === 0) {
            // set rigged tutorial level 
            this.addTutorialProperties();
        } else {
            // set normal level
            this.addProperties(data.uniqueBlocks, data.maxPairsPerUniqueBlock); // data.unique Amount of unique tiles
        }

        this.entity.setLocalEulerAngles(this.defaultEulerAngles);
        this._deltaYRotation = 0;

        //setInterval(this.shuffleTiles.bind(this), 2000);
    },

    despawnAll: function() {
        for (var i = 0; i < this._tiles.length; i += 1) {
            this.recycle(this._tiles[i]);
        }
        this._tiles.length = 0;
    },

    flyUpBlocks: function() {
        var totalSpawnTime = 4;
        var tweenTime = 0.8;
        var spawnInterval = totalSpawnTime / this._tiles.length;
        for (var i = this._tiles.length - 1; i >= 0; i -= 1) {
            this._tiles[i].script.mahjongTile.flyUp(15, tweenTime, totalSpawnTime);
            totalSpawnTime -= spawnInterval;
        }
    },

    addProperties: function(uniqueBlocks, maxPairsPerUniqueBlock) {
        var deck = pc.deckManager.getNewDeck(this._tilesAmount, uniqueBlocks, maxPairsPerUniqueBlock);
        for (var i = 0; i < this._tiles.length; i += 1) {
            var randomIndex = Math.floor(pc.math.random(0, deck.length));

            var data = deck[randomIndex];

            if (!data) {
                break;
            }
            // ID: Is id
            // Type: Material / color
            // Number; Number on block
            // Amount?
            this._tiles[i].script.mahjongTile.setProperties(data.material, data.id);

            data.amount -= 1;

            if (data.amount <= 0) {
                deck.splice(randomIndex, 1);
            }
        }

        if (deck.length !== 0) {
            console.warn("Not all tiles are used!", deck);
        }

        var possible = this.checkIfAnyPossiblePairs();

        if (!possible) {
            console.warn("No possible move at spawn, creating new deck");
            this.addProperties(uniqueBlocks, maxPairsPerUniqueBlock);
        }
    },

    spawnTile: function(x, y, z, tweenTime, spawnDelay) {
        if (typeof tweenTime !== 'number') tweenTime = 0.2;
        if (typeof spawnDelay !== 'number') spawnDelay = 0;
        var tile = this._objectPool.use();
        tile.enabled = true;
        tile.reparent(this.entity);
        tile.model.meshInstances[0].layer = 'Block';
        // x, y, z Correct tile position
        var spawnOffset = 20;
        tile.script.mahjongTile.awake(x, y - spawnOffset, z, this);

        tile.script.mahjongTile.setNewPosition(x, y, z, tweenTime, spawnDelay);
        //tile.setLocalPosition(this.calculatePosition(x, y, z)); // This is redundant, already called withinmajongTile.awake

        this._tilesArray[x][y][z] = 1;
        this._tiles.push(tile);
        this._tilesAmount += 1;
    },

    calculatePosition: function(x, y, z) {
        return this._vector3.set((x - (this._width - 1) / 2) * 1, ((this._height - 1) / 2  - y) * 1, (z - (this._depth - 1) / 2) * 1);
    },

    multiDimensionArray: function(dimensions) {
        var array = [];

        for (var i = 0; i < dimensions[0]; i += 1) {
            array.push(dimensions.length === 1 ? 0 : this.multiDimensionArray(dimensions.slice(1)));
        }

        return array;
    },

    onMove: function(position, delta) {
        if (!this.canMove || this.restrictMoveTutorial) return;

        if (this.isAutoRotating) {
            //cancel auto rotate
            this.isAutoRotating = false;
        }
        var currentLocalEulerAngles = this.entity.getLocalEulerAngles();

        var yRotationDifference = delta.y * this.verticalRotationSpeed;

        var newYRotation = this._deltaYRotation + yRotationDifference;

        if (Math.abs(newYRotation) > this.maxYRotation) {
            newYRotation = Math.sign(newYRotation) * this.maxYRotation;

            yRotationDifference = (newYRotation - this._deltaYRotation);
        }

        this._deltaYRotation += yRotationDifference;
        this.entity.rotateLocal(0,  delta.x * this.horizontalRotationSpeed, 0);
        this.entity.rotate(yRotationDifference, 0, 0);
    }, 

    autoRotate: function(angle) {
        if (this.isAutoRotating) return;
        this.isAutoRotating = true;     
        this.autoRotateAngle = angle;
        this.autoRotateCounter = 0;
        this.lastAutoRotateAngle = 0;
    },

    isStuck: function(x, y, z) {
        var xStuck = 0;
        var zStuck = 0;

        if (x === 0 || (x === this._width - 1)) {
            xStuck = 0;
        } else {
            if (this._tilesArray[x - 1][y][z] && this._tilesArray[x + 1][y][z]) {
                xStuck = 1;
            } else {
                xStuck = 0;
            }
        }

        if (z === 0 || (z === this._depth - 1)) {
            zStuck = 0;
        } else { 
            if (this._tilesArray[x][y][z - 1] && this._tilesArray[x][y][z + 1]) {
                zStuck = 2;
            } else {
                zStuck = 0;
            }
        }

        if (xStuck) {
            return xStuck;
        } else if (zStuck) {
            return zStuck;
        } else {
            return 0;
        }
    },

    select: function(tileScript) {
        if (!tileScript.isSelectable()) {
            return;
        }

        var tileStuck = tileScript.isStuck();

        // CASE: tile is blocked
        if (tileStuck) {
            tileScript.shake(tileStuck);
            this.app.fire('vibrate', [50, 50, 100]); 
            return;
        }

        // CASE: nothing selected
        if (!this._selectedTileScript) {
            this.selectNewTile(tileScript);
            return;
        }

        // CASE: selected same
        if (this._selectedTileScript && this._selectedTileScript.entity === tileScript.entity) {
            this.selectNewTile(tileScript);
            return;
        } 

        if (this._selectedTileScript && this._selectedTileScript.id() === tileScript.id()) {
            if (!this._selectedTileScript.isStuck() && !tileStuck) {
                this.despawn(this._selectedTileScript, tileScript);
                this.selectNewTile(null);     
                return;
            } else {
                this.selectNewTile(tileScript);
                return;
            }
        } else {
            this.selectNewTile(tileScript);
            return;
        }
    },

    despawn: function(tile1, tile2) {
        tile1.despawn();
        tile2.despawn();

        this.app.fire('vibrate', 200);

        this._tilesArray[tile1.x()][tile1.y()][tile1.z()] = 0;
        this._tilesArray[tile2.x()][tile2.y()][tile2.z()] = 0;

        this._pairs -= 1;

        for (var i = this._tiles.length - 1; i >= 0; i -= 1) {

            if (this._tiles[i] === tile1.entity) {
                this._tiles.splice(i, 1);
            } else if (this._tiles[i] === tile2.entity) {
                this._tiles.splice(i, 1);
            }
        }
        this.app.fire('MahjongGroup:onTileMatch');
        StatisticsManager.instance.incrementStatistic("statistics_matches_made", 1);

        if (this.firstTimeSFX) {
            this.matchSound = pc.audioManager.entity.sound.slots['tile_match.mp3'];
            this.firstTimeSFX = false;
        }  
        var currentPitch = 1 + (pc.scoreManager.currentMultiplier / 50);
        this.matchSound.pitch = currentPitch;

        this.app.fire('Audio:playSFX', 'tile_match.mp3');

        if (this.checkIfCompleted()) {      
            pc.gameManager.finished();
        } else {
            var possible = this.checkIfAnyPossiblePairs();

            if (!possible) {
                this.shuffleTiles();
            }
        }
    },

    checkIfAnyPossiblePairs: function() {
        var ids = [];
        for (var i = 0; i < this._tiles.length; i += 1) {
            var tile = this._tiles[i].script.mahjongTile;
            var id = tile.id();
            var stuck = tile.isStuck()

            if (stuck) {
                continue;
            }

            if (ids.indexOf(tile.id()) === -1) {

                ids.push(id);
            } else {
                return true;
            }
        }

        return false;
    },

    shuffleTiles: function() {
        this.selectNewTile(null);

        var positions = [];

        for (var i = 0; i < this._tiles.length; i += 1) {
            var tile = this._tiles[i].script.mahjongTile;
            positions.push( { x: tile.x(), y: tile.y(), z: tile.z() });    
        }

        positions.sort(function() {
            return Math.random() - 0.5;
        });

        for (var j = 0; j < this._tiles.length; j += 1) {
            this._tiles[j].script.mahjongTile.setNewPosition(positions[j].x, positions[j].y, positions[j].z, this.calculatePosition(positions[j].x, positions[j].y, positions[j].z));    
        }

        var possible = this.checkIfAnyPossiblePairs();

        if (!possible) {
            console.warn("No possible move at spawn, creating new deck");
            this.shuffleTiles();
        }
    }, 

    findMatch: function() {
        var ids = [];
        var tiles = [];
        for (var i = 0; i < this._tiles.length; i += 1) {
            var tile = this._tiles[i].script.mahjongTile;
            var id = tile.id();
            var stuck = tile.isStuck();

            if (stuck) {
                continue;
            }

            if (ids.indexOf(id) === -1) {

                ids.push(id);
                tiles.push(tile);
            } else {
                this.despawn(tiles[ids.indexOf(id)], tile);
                return;
            }
        }
    },

    checkIfCompleted: function() {
        if (this._pairs <= 0) {


            return true;
        }

        return false;
    },

    selectNewTile: function(tileScript) {
        if (this._selectedTileScript) {
            this._selectedTileScript.deselect();
        }
        this._selectedTileScript = tileScript;
        this.app.fire('vibrate', 50);   

        if (this._selectedTileScript) {
            this._selectedTileScript.select();
            this.app.fire('MahjongGroup:onTileSelected', this._selectedTileScript.getTexture());
        }
    },

    recycle: function(tile) {
        tile.enabled = false;
        tile.reparent(null);

        this._objectPool.recycle(tile);
    },

    addTutorialProperties: function() {
        var deck = pc.deckManager.getTutorialDeck();
        for (var i = 0; i < this._tiles.length; i += 1) {
            var data = deck[i];

            if (!data) {
                break;
            }
            // ID: Is id
            // Type: Material / color
            // Number; Number on block
            // Amount?
            this._tiles[i].script.mahjongTile.setProperties(data.material, data.id);
        }
    }
});

