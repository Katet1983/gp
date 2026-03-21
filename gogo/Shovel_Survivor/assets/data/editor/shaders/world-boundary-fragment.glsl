uniform float uAlpha;
uniform float uMaxHideUvX;

in vec2 vUV;

out vec4 finalColor;

void main() {
    finalColor = vec4(0, 0, 0, clamp(vUV.x * (1.0 / uMaxHideUvX), 0.0, 1.0) * uAlpha);
}
