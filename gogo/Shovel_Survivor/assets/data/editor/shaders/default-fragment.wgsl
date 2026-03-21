struct FogUniforms {};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : FogUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {
    var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

    var adjusted: vec4<f32>;

    altColor = vec4<f32>(color.rgb * 0.5, color.a);

    return altColor;
}
