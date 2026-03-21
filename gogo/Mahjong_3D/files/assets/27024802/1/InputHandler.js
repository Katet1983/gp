var InputHandler = pc.createScript('inputHandler');

InputHandler.attributes.add('zoomDirection', { type: 'number', enum: [ { Normal: 1 }, { Reserve: -1 }], default: -1 });

InputHandler.attributes.add('pinchSensitivity', { type: 'number', min: 0, max: 1 });
InputHandler.attributes.add('deadZone', { type: 'number', default: 20 });


pc.extend(InputHandler.prototype, {

    initialize: function() {
        var mouse = this.app.mouse;
        var touch = this.app.touch;

        this._input = true;

        this._deltaDistance = 0;

        this._started = false;

        this._inputPosition = new pc.Vec2();
        this._deltaPosition = new pc.Vec2();

        this._pressed = false;
        this._pinch = false;
        this._pinchDelta = 0;

        if (touch) {
            this.app.touch.on(pc.EVENT_TOUCHSTART, this._onTouchStart, this);
            this.app.touch.on(pc.EVENT_TOUCHMOVE, this._onTouchMove, this);
            this.app.touch.on(pc.EVENT_TOUCHEND, this._onTouchEnd, this);
        }

        if (mouse) {
            this.app.mouse.on(pc.EVENT_MOUSEDOWN, this._onMouseDown, this);
            this.app.mouse.on(pc.EVENT_MOUSEMOVE, this._onMouseMove, this);
            this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this._onMouseWheel, this);
            mouse.disableContextMenu();
        }  

        this.app.on('GameManager:stopInput', this._stop, this);
        this.app.on('GameManager:startInput', this._start, this);
    },

    _start: function() {
        this._input = true;
    },

    _stop: function() {
        this._input = false;  
    },

    _onMouseDown: function(event) {
        event.event.preventDefault();
        
        if (!this._input) {
            return;
        }

        this._setInputPosition(event.x, event.y);
        this._deltaDistance = 0;
        this.app.fire('inputHandler:down', this._inputPosition);  
    },

    _onTouchStart: function(event) {
        event.event.preventDefault();
        
        if (!this._input) {
            return;
        }

        this._setInputPosition(event.touches[0].x, event.touches[0].y);
        this._pinch = event.touches.length === 2;
        this._deltaDistance = 0;
        if (this._pinch) {
            this._pinchDelta = this._calculatePinchDistance(event.touches);
        }

        this.app.fire('inputHandler:down', this._inputPosition);  
    },

    _onMouseMove: function(event) {
        event.event.preventDefault();
        
        if (!this._input) {
            return;
        }

        if (event.event.buttons === 0) {
            return;
        }

        var x = event.x;
        var y = event.y;

        this._calculateDelta(x, y);

        this._setInputPosition(x, y);

        if (this.isDeadZone()) {
            return;
        }

        this.app.fire('inputHandler:move', this._inputPosition, this._deltaPosition);
    },

    _onTouchMove: function(event) {
        event.event.preventDefault();
        
        if (!this._input) {
            return;
        }

        if (this._pinch) {
            var pinchDelta = this._calculatePinchDistance(event.touches);
            if (typeof pinchDelta !== 'number') {
                console.warn("pinch delta is invalid", pinchDelta);
                return;

            }
            var diff = (this._pinchDelta - pinchDelta) * this.zoomDirection;

            this.app.fire('inputHandler:zoom', diff * this.pinchSensitivity);

            this._pinchDelta = pinchDelta;
        } else {
            var x = event.touches[0].x;
            var y = event.touches[0].y;

            this._calculateDelta(x, y);

            this._setInputPosition(x, y);

            if (this.isDeadZone()) {
                return;
            }

            this.app.fire('inputHandler:move', this._inputPosition, this._deltaPosition);
        }
    },

    _onTouchEnd: function(event) {
        event.event.preventDefault();
        
        if (!this._input) {
            return;
        }

        this._pinch = event.touches.length === 2;

        if (event.touches.length === 1) {
            this._setInputPosition(event.touches[0].x, event.touches[0].y);

        }
    },

    _onMouseWheel: function(event) {
        event.event.preventDefault();

        if (!this._input) {
            return;
        }

        this.app.fire('inputHandler:zoom', -event.wheel * this.zoomDirection);
    },

    _calculateDelta: function(x, y) {
        var deltaX = x - this._inputPosition.x;
        var deltaY = y - this._inputPosition.y;
        this._setInputPosition(deltaX, deltaY, this._deltaPosition);
        this._deltaDistance += Math.abs(deltaX) + Math.abs(deltaY);
    },

    _setInputPosition: function(x, y, vec2) {
        if (vec2) {
            vec2.set(x, y);
        } else {
            this._inputPosition.set(x, y);
        }
    }, 

    _calculatePinchDistance: function(touches) {
        if (touches.length !== 2) {
            return;
        }

        var deltaX = touches[0].x - touches[1].x;
        var deltaY = touches[0].y - touches[1].y;

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    },

    isDeadZone: function() {
        return this._deltaDistance < this.deadZone;
    },
});
