varying vec2 vUv0;

uniform sampler2D difuseMap;
uniform vec4 silhouetteColor;
uniform vec4 fillColor;

uniform float fillPercentage;
uniform float hDirection;
uniform float vDirection;

uniform bool useDiffuseColor;

void main(void)
{
    vec4 diffuseColor = texture2D(difuseMap, vUv0);
    float a = texture2D(difuseMap, vUv0).a; 
    int hVal = 0;
    int vVal = 0;
    int totalVal = 0;
    if (a < 0.15) discard;
    if (vDirection > 0.0) {
        vVal = 1;
        if (abs(vUv0.y - (vDirection - 1.0)) < fillPercentage) {
            totalVal += 1;
        } 
    }
    if (hDirection > 0.0) {
        hVal = 1;
        if (abs(vUv0.x - (hDirection - 1.0)) < fillPercentage) {
            totalVal += 1;
        } 
    }
    
    if (totalVal >= (hVal + vVal))  {
        if (useDiffuseColor) gl_FragColor = diffuseColor;
        else gl_FragColor = fillColor;
    }
    else gl_FragColor = silhouetteColor;
    
}