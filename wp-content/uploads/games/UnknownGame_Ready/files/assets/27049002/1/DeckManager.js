var DeckManager = pc.createScript('deckManager');

DeckManager.attributes.add('data', { type: 'asset', assetType: 'json' });

var tutorialDeck = [1, 2, 0, 1, 5, 3, 3, 5, 6, 8, 2, 4, 8, 6, 7, 7, 4, 0];

pc.extend(DeckManager.prototype, {

    initialize: function() {
        pc.deckManager = this;

        this._materials = {};    

        this._allTiles = this.data.resources;

        this._getAllAsset();

        this._deck = [];
    },

    postInitialize: function() {
        this._shuffleDeck();  
    },

    _getAllAsset: function() {
        for (var i = 0; i < this.data.resources.length; i += 1) {
            var tileData = this.data.resources[i];

            if (!this._materials[tileData.assetName]) {
                this._materials[tileData.assetName] = this.app.assets.find(tileData.assetName);
            }
        }
    },

    _shuffleDeck: function() {

        this._allTiles.sort(function() {
            return Math.random() - 0.5;
        });
    },

    getNewDeck: function(tiles, uniqueBlocks, maxPairsPerUniqueBlock) {
        var mahjongBlocks = pc.mahjongMaterials.getMaterials('icons', maxPairsPerUniqueBlock);

        this._shuffleDeck();

        if (tiles % 2) {
            console.error("There are an uneven amount of tiles!", tiles);
        }

        if (mahjongBlocks.length < uniqueBlocks) {
            console.warn("There are not enough icons.", "Icons/materials:", mahjongBlocks.length, "Unique blocks:", uniqueBlocks);
        }

        if (uniqueBlocks * maxPairsPerUniqueBlock * 2 < tiles) {
            console.warn("Not enough tiles available", "Unique * ")
        }

        this._deck.length = 0;
        var totalTiles = 0;
        var totalUnique = 0;
        var index = 0;

        // Get all tiles data and calculate total tiles.
        while ((totalTiles < tiles) || (totalUnique < uniqueBlocks)) {
            var tileData = mahjongBlocks[index];

            if (!tileData) {
                break;
            }

            // ID: Is id
            // Material: Material
            // Amount: amount of that specific that can be in the world.
            this._deck.push({ id : tileData.id, amount: maxPairsPerUniqueBlock * 2, material: tileData.material });

            index += 1;
            totalUnique += 1;
            totalTiles += maxPairsPerUniqueBlock * 2;
        }

        if (totalUnique > uniqueBlocks) {
            console.warn("There are", totalUnique, "total Unique, while you asked for", uniqueBlocks);
        }

        // If there are not enough pairs, add more pairs.
        if (totalUnique * maxPairsPerUniqueBlock * 2 < tiles) {
            var diff = tiles - totalUnique * maxPairsPerUniqueBlock * 2;

            var extraPairs = Math.ceil((diff / this._deck.length) / 2);

            var amount = extraPairs * 2;

            for (var i = 0; i < this._deck.length; i += 1) {
                this._deck[i].amount += amount;
                totalTiles += amount;
            }

            console.warn("There are not enough pairs! Adding", extraPairs, "more pair(s).");
        }

        // Removed the amounts until you have enough tiles left.
        while (totalTiles > tiles) {
            var randomIndex = Math.floor(pc.math.random(0, this._deck.length));

            if (this._deck[randomIndex].amount > 0) {
                this._deck[randomIndex].amount -= 2;

                if (this._deck[randomIndex].amount <= 0) {
                    this._deck.splice(randomIndex, 1);
                }

                totalTiles -= 2;
            }
        }
        return this._deck;
    },
    
    getTutorialDeck: function() {
        var mahjongBlocks = pc.mahjongMaterials.getMaterials('icons', 9);
    
        this._deck.length = 0;
        for (var i = 0; i < tutorialDeck.length; i += 1) {
            var tileData = mahjongBlocks[tutorialDeck[i]];
            this._deck.push({ id : tutorialDeck[i], amount: 1, material: tileData.material });
        }
        return this._deck;
    }
});
