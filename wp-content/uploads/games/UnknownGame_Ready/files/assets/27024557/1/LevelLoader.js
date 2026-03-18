var LevelLoader = pc.createScript('levelLoader');

LevelLoader.attributes.add('levelKey',          { type: 'string', default: 'level' });

pc.extend(LevelLoader.prototype, {
    
    initialize: function() {
        pc.levelLoader = this;
        this.totalLevels = this.app.assets.findByTag('level').length;
    },
    
    loadLevel: function(level, callback, context) {
        var asset = this.app.assets.find('level-' + level + '.json');

        pc.lazyLoader.lazyLoad(asset, callback, context);
    },

    lazyLoadLevels: function() {
        var assets = this.app.assets.findByTag('level'); 
        var assetsLoaded = 0;
        var assetsTotal = assets.length;

        var onAssetLoad = function() {
            assetsLoaded += 1;

            if (assetsLoaded === assetsTotal) {
                console.log("All levels loaded.");
            }
        };

        for (var i = 0; i < assets.length; i += 1) {
            if (assets[i].resource) {
                onAssetLoad();
            } else {
                pc.lazyLoader.lazyLoad(assets[i]);
            }
        }
    },
});
