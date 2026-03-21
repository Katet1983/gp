var DynamicScreen = pc.createScript('dynamicScreen');

DynamicScreen.attributes.add('desktopClamp', { type: 'boolean', default: true });
DynamicScreen.attributes.add('desktopClampWidth', { type: 'number', default: 1500 });

DynamicScreen.attributes.add('mobileClamp', { type: 'boolean', default: false });
DynamicScreen.attributes.add('mobileClampWidth', { type: 'number', default: 0 });

pc.extend(DynamicScreen.prototype, {
    initialize: function() {
        this._onResize(pc.viewport.getOrientation(), window.innerWidth, window.innerHeight, pc.viewport.getDevice());

        this.app.on('ViewportManager:onResize', this._onResize, this);
    },

    _onResize: function(orientation, width, height, device) {
        this._calculateDimensions(width, height);
        this._setClamp(device);
    },

    _calculateDimensions: function(width, height) {    
        var scale = pc.uiManager.getReferenceResolution().y / height;

        this.entity.element.width = width * scale;
        this.entity.element.height = height * scale;
    },

    _setClamp: function(device) {
        var clamp = false;
        var clampWidth = 0;

        if (device === deviceEnum.DESKTOP) {
            clamp = this.desktopClamp;
            clampWidth = this.desktopClampWidth;
        }

        if (device === deviceEnum.MOBILE) {
            clamp = this.mobileClamp;
            clampWidth = this.mobileClampWidth;
        }

        
        if (clamp) {
            var width = this.entity.element.width;

            if (width > clampWidth) {
                this.entity.element.width = clampWidth;
            }
        }
    },
});
