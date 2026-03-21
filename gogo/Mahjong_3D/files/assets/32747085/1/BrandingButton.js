var BrandingButton = pc.createScript('brandingButton');

pc.extend(BrandingButton.prototype, {

    initialize: function() {
        var imageUrl = window.famobi.getBrandingButtonImage();

        var asset = new pc.Asset("famobi_branding_button", "texture", {
            url: imageUrl
        });

        this.app.assets.add(asset);

        pc.lazyLoader.lazyLoad(asset, this.onLoadedAsset, this);

        // mouse events
        this.entity.element.on('mouseup', this.onRelease, this);

        // touch events
        this.entity.element.on('touchend', this.onRelease, this);
    },

    onLoadedAsset: function(asset) {
        this.entity.element.enabled = true;
        
        this.entity.element.texture = asset.resource;
    },

    onRelease: function() {
        window.famobi.openBrandingLink();
    },
    
});