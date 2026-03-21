var PickerFramebuffer = pc.createScript('pickerFramebuffer');

PickerFramebuffer.attributes.add('layerName', { type: 'string', default: 'World' });

// initialize code called once per entity
pc.extend(PickerFramebuffer.prototype, {
    initialize: function() {
        // Create a frame buffer picker with a resolution of 1024x1024
        this.picker = new pc.Picker(this.app, 1024, 1024);

        this._input = false;

        this._layer = this.app.scene.layers.getLayerByName(this.layerName);

        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this._onMouseDown, this);

        if (this.app.touch) {
            this.app.touch.on(pc.EVENT_TOUCHSTART, this._onTouchStart, this);
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
        if (!this._input) {
            return;
        }
        event.event.preventDefault();
        this.onSelect(event.x, event.y);
    },

    _onTouchStart: function(event) {
        if (!this._input) {
            return;
        }
        event.event.preventDefault();
        this.onSelect(event.touches[0].x || event.touches[0].clientX, event.touches[0].y || event.touches[0].clientY);
    },

    onSelect: function (x, y) {
        var canvas = this.app.graphicsDevice.canvas;
        var canvasWidth = parseInt(canvas.clientWidth, 10);
        var canvasHeight = parseInt(canvas.clientHeight, 10);

        var camera = this.entity.camera;
        var scene = this.app.scene;
        var picker = this.picker;

        picker.prepare(camera, scene, this._layer);

        // Map the mouse coordinates into picker coordinates and 
        // query the selection

        var selected = picker.getSelection(
            Math.floor(x * (picker.width / canvasWidth)), 
            Math.floor(y * (picker.height / canvasHeight))
        );
        
        if (selected.length > 0) {
            // Get the graph node used by the selected mesh instance
            var entity = selected[0].node;
            // Bubble up the hierarchy until we find an actual Entity
            while (!(entity instanceof pc.Entity) && entity !== null) {
                entity = entity.parent;
            }
            if (entity) {
                while (entity && !entity.tags.has('tile')) {
                    entity = entity.parent;
                }

                if (entity && entity.script && entity.script.mahjongTile) {
                    pc.gameManager.mahjongGroup.script.mahjongGroup.select(entity.script.mahjongTile);
                }
            }
        }
    },
});
