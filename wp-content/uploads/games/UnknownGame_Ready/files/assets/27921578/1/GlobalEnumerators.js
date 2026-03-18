var ElementPresetEnum = Object.freeze({
    TOPLEFT: {
        anchor: new pc.Vec4(0, 1, 0, 1),
        pivot: new pc.Vec2(0, 1),
    },
    TOP: {
        anchor: new pc.Vec4(0.5, 1, 0.5, 1),
        pivot: new pc.Vec2(0.5, 1),
    },
    TOPRIGHT: {
        anchor: new pc.Vec4(1, 1, 1, 1),
        pivot: new pc.Vec2(1, 1),
    },
    LEFT: {
        anchor: new pc.Vec4(0, 0.5, 0, 0.5),
        pivot: new pc.Vec2(0, 0.5),
    },
    CENTER: {
        anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
        pivot: new pc.Vec2(0.5, 0.5),
    },
    RIGHT: {
        anchor: new pc.Vec4(1, 0.5, 1, 0.5),
        pivot: new pc.Vec2(1, 0.5),
    },
    BOTTOMLEFT: {
        anchor: new pc.Vec4(0, 0, 0, 0),
        pivot: new pc.Vec2(0, 0),
    },
    BOTTOM: {
        anchor: new pc.Vec4(0.5, 0, 0.5, 0),
        pivot: new pc.Vec2(0.5, 0),
    },
    BOTTOMRIGHT: {
        anchor: new pc.Vec4(1, 0, 1, 0),
        pivot: new pc.Vec2(1, 0),
    },
});

var deviceEnum = Object.freeze({
    DESKTOP: 'desktop',
    MOBILE: 'mobile',
});

var orientationEnum = Object.freeze({
    LANDSCAPE: 'landscape',
    PORTRAIT: 'portrait',
});