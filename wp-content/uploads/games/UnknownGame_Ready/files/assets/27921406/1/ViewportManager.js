var ViewportManager = pc.createScript('viewportManager');



pc.extend(ViewportManager.prototype, {
    initialize: function() {
        pc.viewport = this;

        pc.famobiAPI.setOnOrientationChange(this.onOrientationChange, this);
    },

    /**
     * Send event that the game has been resized. Send 4 parameters: orientation, innerWidth, innerHeight and device;
     */
    onOrientationChange: function() {        
        clearTimeout(this._timeout)
        
        this._timeout = setTimeout(function() {
            this.app.resizeCanvas(innerWidth, innerHeight);

            this.app.fire('ViewportManager:onResize', pc.famobiAPI.getOrientation(), innerWidth, innerHeight, this.getDevice());

        }.bind(this), 500); // delay is important!!
    },

    getDevice: function() {
        if (pc.platform.desktop) {
            return deviceEnum.DESKTOP;
        }

        if (pc.platform.mobile) {
            return deviceEnum.MOBILE;
        }

        return '';
    },

    getOrientation: function() {
        return pc.famobiAPI.getOrientation();
    },
});
