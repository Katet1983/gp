var PowerUpGroup = pc.createScript('powerUpGroup');

pc.extend(PowerUpGroup.prototype, {
    initialize: function() {
        this._onResize(pc.viewport.getOrientation(), window.innerWidth, window.innerHeight, pc.viewport.getDevice());
        this.app.on('ViewportManager:onResize', this._onResize, this);
    },
    
    _onResize: function(orientation, width, height, device) {
        if (device === deviceEnum.MOBILE && orientation === orientationEnum.LANDSCAPE) {
            this.entity.layoutgroup.orientation = pc.ORIENTATION_VERTICAL;
        } else {
            this.entity.layoutgroup.orientation = pc.ORIENTATION_HORIZONTAL;
        }
    }
}); 