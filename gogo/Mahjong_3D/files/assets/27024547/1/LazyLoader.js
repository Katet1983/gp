var LazyLoader = pc.createScript('lazyLoader');

pc.extend(LazyLoader.prototype, {
    
    initialize: function() {
        pc.lazyLoader = this;
        
        this.app.loader.getHandler("texture").crossOrigin = "anonymous";
    },
    
    lazyLoad: function(asset, callback, context) {
        if (!asset) {       
            // TODO Better to show an error
            console.warn("Asset is undefined");
            
            return;
        }

        if (asset.resource) {
            // The material asset has already been loaded 

            if (callback) {
                callback.call(context, asset);
            }
        } else {
            var self = this;
            // Start async loading the material asset
            asset.once('load', function() {
                setTimeout(function() {

                    if (callback) {
                        callback.call(context, asset);
                    }
                });
            });

            this.app.assets.load(asset);
        }
    },
});