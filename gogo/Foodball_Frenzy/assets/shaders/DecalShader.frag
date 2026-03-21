uniform mat4 transform;
uniform vec4 texture_matrix;
uniform sampler2D texture_outline, texture_splat;

uniform float rotation_factor;
uniform float size_factor;
uniform float intensity;

uniform vec2 character_position;


vec2 rotateUV(vec2 uv, float rotation) {
    float mid = 0.5;
    float cosine = cos(rotation);
    float sine = sin(rotation);
    return vec2(
        cosine * (uv.x - mid) + sine * (uv.y - mid) + mid,
        cosine * (uv.y - mid) - sine * (uv.x - mid) + mid
    );
}


vec3 getAlbedo(vec3 albedo) {

   vec2 relativePos = vPositionW.xz - character_position;
   vec2 uv = relativePos +  vec2(0.5, 0.5);

   vec2 projectionUV = mat2(texture_matrix) * (uv - vec2(0.5)) + vec2(0.5);
   vec2 projectionUV_0 = mat2(texture_matrix) * size_factor * (uv - vec2(0.5)) + vec2(0.5);

   //vec4 texture = texture2D(texture_splat, projectionUV);
    vec4 texture_o = texture2D(texture_splat, projectionUV_0);
    vec4 texture = texture2D(texture_outline, rotateUV(projectionUV, rotation_factor));
  
   float clamped_sum = (texture_o.a > 0.0) ? texture_o.a : 0.0;

   return texture_o.rgb*0.5 + texture.rgb + albedo * (1.0 - clamped_sum);

}

vec3 combineColor(vec3 albedo, vec3 sheenSpecularity, float clearcoatSpecularity) {

    if(intensity > 0.0){
        albedo = getAlbedo(albedo);
    }
   
    return albedo * dDiffuseLight;

}