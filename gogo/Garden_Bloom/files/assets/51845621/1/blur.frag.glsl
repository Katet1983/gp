uniform vec2 uResolution;
uniform float uBlurRadius;
uniform float uBlurStrength;

uniform sampler2D uDiffuseMap;

varying vec2 vUv0;

void main() {
    vec2 uv = vUv0;
    vec4 color = texture2D(uDiffuseMap, vUv0);
    vec4 colorUpLeft = texture2D(uDiffuseMap, vec2(uv.x-uBlurRadius,uv.y+uBlurRadius));
    vec4 colorDownLeft = texture2D(uDiffuseMap, vec2(uv.x-uBlurRadius,uv.y-uBlurRadius));
    vec4 colorUpRight = texture2D(uDiffuseMap, vec2(uv.x+uBlurRadius,uv.y+uBlurRadius));
    vec4 colorDownRight = texture2D(uDiffuseMap, vec2(uv.x+uBlurRadius,uv.y-uBlurRadius));

    vec4 colorUp = texture2D(uDiffuseMap, vec2(uv.x,uv.y+uBlurRadius));
    vec4 colorDown = texture2D(uDiffuseMap, vec2(uv.x,uv.y-uBlurRadius));
    vec4 colorLeft = texture2D(uDiffuseMap, vec2(uv.x+uBlurRadius,uv.y));
    vec4 colorRight = texture2D(uDiffuseMap, vec2(uv.x-uBlurRadius,uv.y));

    const float MAX_ITERATIONS = 10.0;
    vec4 original = vec4(color.xyz, 0.5);
    
    for (float i = 0.0; i < MAX_ITERATIONS;i++){
        if(i >=uBlurStrength){break;}
        color = 
            (color + 
             ((colorUp+colorDown+colorLeft+colorRight)/4.0) + 
             ((colorUpLeft+colorDownLeft+colorUpRight+colorDownRight)/4.0))/3.0;
    }
    gl_FragColor = color;
}