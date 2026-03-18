var DynamicElement = pc.createScript('dynamicElement');

var ElementPreset = Object.freeze([
    { NONE: 'NONE' },
    { TOPLEFT: 'TOPLEFT', },
    { TOP: 'TOP', },
    { TOPRIGHT: 'TOPRIGHT', },
    { LEFT: 'LEFT', },
    { CENTER: 'CENTER', },
    { RIGHT: 'RIGHT', },
    { BOTTOMLEFT: 'BOTTOMLEFT', },
    { BOTTOM: 'BOTTOM', },
    { BOTTOMRIGHT: 'BOTTOMRIGHT', },
]);

var defaultString = "------------------------------------------------------"

DynamicElement.attributes.add('a', { type: 'string', title: 'Desktop Landscape', default: defaultString });

DynamicElement.attributes.add('desktopLandscapePreset', { type: 'string', enum: ElementPreset, title: 'Preset' });
DynamicElement.attributes.add('desktopLandscapePosition', { type: 'vec3', title: 'Position' });
DynamicElement.attributes.add('desktopLandscapeScale', { type: 'vec3', title: 'Scale', default: [1, 1, 1] });

DynamicElement.attributes.add('b', { type: 'string', title: 'Desktop Portrait', default: defaultString });

DynamicElement.attributes.add('desktopPortraitPreset', { type: 'string', enum: ElementPreset, title: 'Preset' });
DynamicElement.attributes.add('desktopPortraitPosition', { type: 'vec3', title: 'Position' });
DynamicElement.attributes.add('desktopPortraitScale', { type: 'vec3', title: 'Scale', default: [1, 1, 1] });

DynamicElement.attributes.add('c', { type: 'string', title: 'Mobile Landscape', default: defaultString });

DynamicElement.attributes.add('mobileLandscapePreset', { type: 'string', enum: ElementPreset, title: 'Preset' });
DynamicElement.attributes.add('mobileLandscapePosition', { type: 'vec3', title: 'Position' });
DynamicElement.attributes.add('mobileLandscapeScale', { type: 'vec3', title: 'Scale', default: [1.5, 1.5, 1.5] });

DynamicElement.attributes.add('d', { type: 'string', title: 'Mobile Portrait', default: defaultString });

DynamicElement.attributes.add('mobilePortraitPreset', { type: 'string', enum: ElementPreset, title: 'Preset' });
DynamicElement.attributes.add('mobilePortraitPosition', { type: 'vec3', title: 'Position' });
DynamicElement.attributes.add('mobilePortraitScale', { type: 'vec3', title: 'Scale', default: [1, 1, 1] });

pc.extend(DynamicElement.prototype, {
    initialize: function() {
        this._orientation = ''; 
        this._device = '';

        this._onResize(pc.viewport.getOrientation(), window.innerWidth, window.innerHeight, pc.viewport.getDevice());

        this.app.on('ViewportManager:onResize', this._onResize, this);
    },

    _setCurrentProperties: function(orientation, device) {
        this._orientation = orientation;
        this._device = device;
    },

    _onResize: function(orientation, width, height, device) {
        this._setCorrectOrientation(orientation || 'landscape', device);
    },

    _setCorrectOrientation: function(orientation, device) {

        if (this._orientation === orientation && this._device === device) {
            return;
        }

        this._setCurrentProperties(orientation, device);

        if (device === deviceEnum.DESKTOP) {
            if (this._orientation === orientationEnum.LANDSCAPE) {
                this._applyOrientationTransform(this.desktopLandscapePreset, this.desktopLandscapePosition, this.desktopLandscapeScale);
                return;
            }

            if (this._orientation === orientationEnum.PORTRAIT) {
                this._applyOrientationTransform(this.desktopPortraitPreset, this.desktopPortraitPosition, this.desktopPortraitScale);
                return;
            }

            console.warn('Orientation', this._orientation, 'is not recognized!');
            return;
        }

        if (device === deviceEnum.MOBILE) {
            if (this._orientation === orientationEnum.LANDSCAPE) {
                this._applyOrientationTransform(this.mobileLandscapePreset, this.mobileLandscapePosition, this.mobileLandscapeScale);
                return;
            }

            if (this._orientation === orientationEnum.PORTRAIT) {
                this._applyOrientationTransform(this.mobilePortraitPreset, this.mobilePortraitPosition, this.mobilePortraitScale);
                return;
            }

            console.warn('Orientation', this._orientation, 'is not recognized!');
            return;
        }

        console.warn('Device', device, 'is not recognized!');
    },

    _applyOrientationTransform: function(preset, position, scale) {
        if (!preset || preset === 'NONE') {
            return;
        }

        var presetValue = ElementPresetEnum[preset];

        this.entity.element.anchor.set(presetValue.anchor.x, presetValue.anchor.y, presetValue.anchor.z, presetValue.anchor.w);
        this.entity.element.pivot.set(presetValue.pivot.x, presetValue.pivot.y);

        this.entity.element.anchor = this.entity.element.anchor;
        this.entity.element.pivot = this.entity.element.pivot;
        this.entity.setLocalPosition(position);
        this.entity.setLocalScale(scale);
    },
});
