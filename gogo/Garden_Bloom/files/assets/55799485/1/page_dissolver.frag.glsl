uniform sampler2D uDiffuseMap;
uniform sampler2D uDissolveMap;

uniform float uAlphaCutoff;
uniform float uSteps;
uniform float uAlphaThickness;
uniform float uDiffuseRotation;


uniform vec4 uEdgeColor;
uniform float uTime;

uniform vec2 uWaveSpeed;
uniform vec2 uWaveAmount;
uniform vec2 uWaveStrength;

const float MAX_STEPS = 10.0;
const vec2 HALF = vec2(0.5);
varying vec2 vUv0;
vec2 rotateUV(vec2 uv, float rotation) {
    float aSin = sin(rotation);
    float aCos = cos(rotation);

    vec2 tc = uv;
    tc -= HALF.xy;
    tc *= mat2(aCos, aSin, -aSin, aCos);
    tc += HALF.xy;

    return tc;
}


void main() {
    vec2 uv = vec2(vUv0.x,vUv0.y);
    vec2 displ = vec2(
        cos((uTime * uWaveSpeed.x + (uv.y *uWaveAmount.x)))*uWaveStrength.x,
        sin((uTime * uWaveSpeed.y + (uv.x *uWaveAmount.y)))*uWaveStrength.y);

    float height = texture2D(uDissolveMap, uv + displ).r;
    vec4 color = texture2D(uDiffuseMap, rotateUV(vUv0, uDiffuseRotation));

    if (height < uAlphaCutoff) {
        discard;
    }

    for (float i = 1.0; i < MAX_STEPS;i+= 1.0){
        if ( i > uSteps){break;}
        if (height < (uAlphaCutoff + uAlphaThickness/i)) {
            color = vec4(color.xyz + uEdgeColor.xyz, uEdgeColor.w/(i*0.75));
        }
    }

    gl_FragColor = color;

}

