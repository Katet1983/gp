var CircleFill = pc.createScript('circleFill');

CircleFill.attributes.add('vs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Vertex Shader'
});

CircleFill.attributes.add('fs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Fragment Shader'
});

CircleFill.attributes.add('cutoutMap', {
    type: 'asset',
    assetType: 'texture',
    title: 'Cutout Map'
});


CircleFill.attributes.add('circleColor', { type: 'rgba', title: 'Circle Color' });

pc.extend(CircleFill.prototype, {
    initialize: function() {
        this.onAttributeChange();
        this.time = 0;

        var app = this.app;
        var gd = app.graphicsDevice;

        var heightTexture = this.cutoutMap.resource;

        var vertexShader = this.vs.resource;
        var fragmentShader = "precision " + gd.precision + " float;\n";
        fragmentShader = fragmentShader + this.fs.resource;

        // A shader definition used to create a new shader.
        var shaderDefinition = {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION,
                aUv0: pc.SEMANTIC_TEXCOORD0
            },
            vshader: vertexShader,
            fshader: fragmentShader
        };

        // Create the shader from the definition
        this.shader = new pc.Shader(gd, shaderDefinition);

        // Create a new material and set the shader
        this.material = new pc.Material();
        this.material.blendType = pc.BLEND_PREMULTIPLIED;
        
        this.entity.element.material = this.material;

        this.material.shader = this.shader;
        this.material.setParameter('uTime', 0);

        this.material.setParameter('cutoutMap', heightTexture);
        this.material.setParameter('baseColor', [this.circleColor.r, this.circleColor.g, this.circleColor.b, 1.0]);
    },
    
    onAttributeChange: function() {          
        this.on('attr:circleColor', function (value, prev) {
            this.material.setParameter('baseColor', [this.circleColor.r, this.circleColor.g, this.circleColor.b, 1.0]);
        });
    },
    
    updateValue: function(percentage) {
        this.material.setParameter('uTime', percentage);
    },
    
    updateColor: function(color) {
        this.material.setParameter('baseColor', [color.r, color.g, color.b, 1.0]);
    }
});