varying vec2 vUv0;

uniform sampler2D cutoutMap;
uniform vec4 baseColor;

uniform float uTime;

void main(void)
{
    float height = texture2D(cutoutMap, vUv0).r; 
    float a = texture2D(cutoutMap, vUv0).a;
    if (height > uTime || a < 0.5) {
      discard;
    }
    if (height < (uTime+0.04)) {
      // color = vec4(0, 0.2, 1, 1.0);
    }
    gl_FragColor = baseColor;
}