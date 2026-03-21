//varying vec2 vUv0;
//varying vec3 vPosition;

attribute vec3 aPosition;
attribute vec2 aUv0;

//uniform mat4 matrix_model;
//uniform mat4 matrix_viewProjection;

uniform float uWaveSpeed;
uniform float uAmount;
uniform float uHeight;
uniform float uTime;
uniform vec2 uTiling;
uniform vec2 uOffset;


#ifdef PIXELSNAP
uniform vec4 uScreenSize;
#endif

#ifdef MORPHING
uniform vec4 morph_weights_a;
uniform vec4 morph_weights_b;
#endif

#ifdef MORPHING_TEXTURE_BASED
uniform vec4 morph_tex_params;

vec2 getTextureMorphCoords() {
    float vertexId = morph_vertex_id;
    vec2 textureSize = morph_tex_params.xy;
    vec2 invTextureSize = morph_tex_params.zw;

    // turn vertexId into int grid coordinates
    float morphGridV = floor(vertexId * invTextureSize.x);
    float morphGridU = vertexId - (morphGridV * textureSize.x);

    // convert grid coordinates to uv coordinates with half pixel offset
    return (vec2(morphGridU, morphGridV) * invTextureSize) + (0.5 * invTextureSize);
}
#endif

#ifdef MORPHING_TEXTURE_BASED_POSITION
uniform highp sampler2D morphPositionTex;
#endif

mat4 getModelMatrix() {
    #ifdef DYNAMICBATCH
    return getBoneMatrix(vertex_boneIndices);
    #elif defined(SKIN)
    return matrix_model * getSkinMatrix(vertex_boneIndices, vertex_boneWeights);
    #elif defined(INSTANCING)
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
    #else
    return matrix_model;
    #endif
}

vec4 getPosition() {
    dModelMatrix = getModelMatrix();
    vec3 pos = vertex_position;
    pos.y += sin(uTime * uWaveSpeed + (pos.x * pos.z * uAmount))*uHeight;
    vec4 posW = dModelMatrix * vec4(pos, 1.0);
    vec3 normal = normalize(matrix_normal * vertex_normal);
    dPositionW = posW.xyz;
    return matrix_viewProjection * posW;
}

vec3 getWorldPosition() {
    return dPositionW;
}

