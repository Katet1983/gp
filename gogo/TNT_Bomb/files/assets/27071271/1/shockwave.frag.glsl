precision highp float;

varying vec2 vUv0;

uniform sampler2D uColorBuffer;

uniform vec2 center;
uniform vec3 params; // 10.0, 0.8, 0.1
uniform float time;

void main()
{
    vec2 uv = vUv0;
    vec2 texCoord = uv;

    float dist = distance(uv, center);

    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )
    {
        float diff = (dist - time);
        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);

        float diffTime = diff  * powDiff;
        vec2 diffUV = normalize(uv - center);
        texCoord = uv + (diffUV * diffTime);
    }

    gl_FragColor = texture2D(uColorBuffer, texCoord);
}
