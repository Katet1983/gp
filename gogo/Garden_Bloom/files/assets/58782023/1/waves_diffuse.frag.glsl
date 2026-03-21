uniform sampler2D uDiffuseMap;
uniform sampler2D uDisplacementMap;

uniform vec2 uDiffuseSpeed;
uniform vec2 uDisplacementSpeed;
uniform float uDisplacementAmount;

uniform vec4 uDarkColor;
uniform vec4 uLightColor;

uniform float uTime;



void getAlbedo() {
    
    vec2 displ = texture2D(uDisplacementMap, vec2($UV.x+ uTime *uDisplacementSpeed.x,$UV.y+ uTime *uDisplacementSpeed.y)).xy;
    displ = ((displ * 2.0) - 1.0) * uDisplacementAmount;
    vec2 difUV = vec2($UV.x+uTime*uDiffuseSpeed.x,$UV.y+uTime*uDiffuseSpeed.y);
    vec4 diffuse = texture2D(uDiffuseMap, $difUV + displ);
    vec4 lightColor = diffuse * uLightColor;
    vec4 darkColor = (diffuse + uDarkColor);
    vec3 someColor = vec4(darkColor - lightColor).xyz;
    
    dAlbedo = someColor.xyz;
}

