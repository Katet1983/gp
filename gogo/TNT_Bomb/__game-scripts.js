// constants.js
var Constants = pc.createScript('constants');

Constants.GROUP_GLASS = pc.BODYGROUP_USER_2;

Constants.GAME_VERSION = 'v1.0.2';

Constants.STAGES_PER_LEVEL_MIN = 4;
Constants.STAGES_PER_LEVEL_MAX = 6;

Constants.BOMB_TYPE_DYNAMITE = 'dynamite';
Constants.BOMB_TYPE_IMPLOSIVE = 'implosive';
Constants.BOMB_TYPE_HORIZONTAL = 'horizontal';
Constants.BOMB_TYPE_PUNCH = 'punch';
Constants.BOMB_TYPE_MOLOTOV = 'molotov';

Constants.BOMB_BUTTON_WIDTH = 100;
Constants.BOMB_BUTTON_SPACING = 8;
Constants.BOMB_BUTTON_SELECTED_SCALE = 1.2;
Constants.BOMB_BUTTON_UNSELECTED_SCALE = 0.8;

Constants.BOMB_TYPES = {
    'dynamite' : Constants.BOMB_TYPE_DYNAMITE,
    'implosive': Constants.BOMB_TYPE_IMPLOSIVE,
    'horizontal' : Constants.BOMB_TYPE_HORIZONTAL, 
    'punch' : Constants.BOMB_TYPE_PUNCH,
    'molotov' : Constants.BOMB_TYPE_MOLOTOV 
};

Constants.TWEENS_LIST = [
            { 'Linear': 'Linear' },
            { 'QuadraticIn': 'QuadraticIn' },
            { 'QuadraticOut': 'QuadraticOut' },
            { 'QuadraticInOut': 'QuadraticInOut' },
            { 'CubicIn': 'CubicIn' },
            { 'CubicOut': 'CubicOut' },
            { 'CubicInOut': 'CubicInOut' },
            { 'QuarticIn': 'QuarticIn' },
            { 'QuarticOut': 'QuarticOut' },
            { 'QuarticInOut': 'QuarticInOut' },
            { 'QuinticIn': 'QuinticIn' },
            { 'QuinticOut': 'QuinticOut' },
            { 'QuinticInOut': 'QuinticInOut' },
            { 'SineIn': 'SineIn' },
            { 'SineOut': 'SineOut' },
            { 'SineInOut': 'SineInOut' },
            { 'ExponentialIn': 'ExponentialIn' },
            { 'ExponentialOut': 'ExponentialOut' },
            { 'ExponentialInOut': 'ExponentialInOut' },
            { 'CircularIn': 'CircularIn' },
            { 'CircularOut': 'CircularOut' },
            { 'CircularInOut': 'CircularInOut' },
            { 'BackIn': 'BackIn' },
            { 'BackOut': 'BackOut' },
            { 'BackInOut': 'BackInOut' },
            { 'BounceIn': 'BounceIn' },
            { 'BounceOut': 'BounceOut' },
            { 'BounceInOut': 'BounceInOut' },
            { 'ElasticIn': 'ElasticIn' },
            { 'ElasticOut': 'ElasticOut' },
            { 'ElasticInOut': 'ElasticInOut' }
    ];

Constants.prototype.initialize = function() {
    
};

// gameConfig.js
var GameConfig = pc.createScript('gameConfig');

GameConfig.attributes.add('drawMeshVertices', {
    type: 'boolean',
    default: false
});

GameConfig.attributes.add('enableTint', {
    type: 'boolean',
    description: 'Enable tint effect for items on the level, making bottom of them darker',
    default: true
});

GameConfig.attributes.add('meshPhysicsScaleFactor', {
    type: 'number',
    default: 0.96
});

GameConfig.attributes.add('glassCollisionUpscaleFactor', {
    type: 'number',
    default: 1.25
});

GameConfig.attributes.add('itemLinearDamping', {
    type: 'number',
    default: 0,
    min: 0,
    max: 1
});

GameConfig.attributes.add('itemAngularDamping', {
    type: 'number',
    default: 0,
    min: 0,
    max: 1
});

GameConfig.attributes.add('itemAngularVelocityLimit', {
    type: 'vec3',
    default: [10, 10, 10]
});

GameConfig.attributes.add('itemLowestYPositionThreshold', {
    type: 'number',
    description: 'object will be destroyed if its y-position will be below that value',
    default: -5,
    min: -10,
    max: 0
});


GameConfig.attributes.add('explosionRadius', {
    type: 'number',
    default: 3,
    min: 0.01,
    max: 25
});

GameConfig.attributes.add('demolitionRadius', {
    type: 'number',
    default: 1.2,
    min: 0.01,
    max: 25
});

GameConfig.attributes.add('explosionForce', {
    type: 'number',
    default: 10
});


GameConfig.attributes.add('horizontalExplosionRadius', {
    type: 'number',
    default: 8,
    min: 0.01,
    max: 25
});

GameConfig.attributes.add('horizontalExplosionForce', {
    type: 'number',
    default: 40
});


GameConfig.attributes.add('explosionDampingFactor', {
    type: 'number',
    default: 1.5,
    min: 1, 
    max: 3
});

GameConfig.attributes.add('implosionRadius', {
    type: 'number',
    default: 8,
    min: 1,
    max: 50
});

GameConfig.attributes.add('implosionForce', {
    type: 'number',
    default: 10
});

GameConfig.attributes.add('implosionTime', {
    type: 'number',
    default: 1.5,
    min: 0.1,
    max: 5
});

GameConfig.attributes.add('movingStandFriction', {
    type: 'number',
    default: 0.999,
    min: 0,
    max: 2000
});

GameConfig.attributes.add('movingStandRestitution', {
    type: 'number',
    default: 0.1,
    min: 0,
    max: 1
});

GameConfig.attributes.add('breakItemNumParticles', {
    type: 'number',
    array: true,
    description: 'how many particles will be created after destroying of a block, for low/medium/high quality',
    default: [4, 6, 8]
});

GameConfig.attributes.add('levelNameKeyword', {
    type: 'string',
    default: 'STAGE'
});

GameConfig.attributes.add('stageNameKeyword', {
    type: 'string',
    default: 'DONE'
});

GameConfig.attributes.add('scoresPerItem', {
    type: 'number',
    default: '1'
});

GameConfig.attributes.add('defeatTimer', {
    type: 'number',
    default: 1.0, 
    min: 0,
    max: 5
});

GameConfig.attributes.add('victoryTimer', {
    type: 'number',
    default: 0.5, 
    min: 0,
    max: 3
});

GameConfig.attributes.add('shockwaveEffectEnabled', {
    type: 'boolean',
    default: false
});

GameConfig.attributes.add('explosionDelay', {
    type: 'number',
    default: 0.1
});

GameConfig.attributes.add('punchEffectDuration', {
    type: 'number',
    default: 0.65
});

GameConfig.attributes.add('punchEffectDistance', {
    type: 'number',
    default: 10
});

GameConfig.attributes.add('punchEffectSpeedFactor', {
    type: 'number',
    default: 120
});

GameConfig.attributes.add('woodBurningDuration', {
    type: 'number',
    default: 1.75
});

GameConfig.attributes.add('woodFireSpreadDelay', {
    type: 'number',
    default: 0.5
});

GameConfig.attributes.add('woodFireSpreadRadius', {
    type: 'number',
    default: 1.9
});

GameConfig.attributes.add('rubbleLifeTime', {
    type: 'vec2',
    default: [5, 10]
});

GameConfig.attributes.add('rubbleAppearingProbability', {
    type: 'number',
    default: 0.6
});

GameConfig.attributes.add('rubbleDisappearingTime', {
    type: 'number',
    default: 0.5
});

GameConfig.attributes.add('maxRubblesPerBlock', {
    type: 'number',
    default: 3,
    min: 1, 
    max: 5,
    step: 1
});

GameConfig.attributes.add('itemXZDistanceThreshold', {
    type: 'number',
    default: 60
});

GameConfig.attributes.add('itemYDistanceThreshold', {
    type: 'number',
    default: 30
});

GameConfig.attributes.add('powerupButtonTimer', {
    type: 'number',
    default: 120
});

GameConfig.attributes.add('earthquakeDuration', {
    type: 'number',
    default: 1.2,
    min: 0.5, 
    max: 3
});

GameConfig.attributes.add('earthquakeForce', {
    type: 'number',
    default: 1.75,
    min: 0.5, 
    max: 10
});



GameConfig.attributes.add('bombPriceIncrement', {
    type: 'number',
    default: 1,
    min: 1, 
    max: 10,
    step: 1
});

/* Bomb prices */
GameConfig.attributes.add('dynamiteBombPrice', {
    type: 'number',
    default: 1,
    min: 1, 
    max: 10,
    step: 1
});

GameConfig.attributes.add('implosiveBombPrice', {
    type: 'number',
    default: 5,
    min: 1, 
    max: 10,
    step: 1
});

GameConfig.attributes.add('horizontalBombPrice', {
    type: 'number',
    default: 3,
    min: 1, 
    max: 10,
    step: 1
});

GameConfig.attributes.add('punchBombPrice', {
    type: 'number',
    default: 2,
    min: 1, 
    max: 10,
    step: 1
});

GameConfig.attributes.add('molotovBombPrice', {
    type: 'number',
    default: 4,
    min: 1, 
    max: 10,
    step: 1
});




GameConfig.prototype.initialize = function() {
    GameConfig.app = this.app;
    GameConfig.instance = this;    
};


GameConfig.getAttribute = function(key) {
    if(GameConfig.instance[key] === undefined) {
        console.warn('GameConfig doesnt have attribute ' + key);
        return null;
    } else {
       return GameConfig.instance[key];
    }
};

GameConfig.setAttribute = function(key, value) {
    if(GameConfig.instance[key] === undefined) {
        console.warn('GameConfig doesnt have attribute ' + key);
        return;
    } else {
       GameConfig.instance[key] = value;
       famobi.log('attribute ', key , ' updated to ', value);
    }
};

// fps.js
if (typeof(document) !== "undefined") {
    /*! FPSMeter 0.3.1 - 9th May 2013 | https://github.com/Darsain/fpsmeter */
    (function(m,j){function s(a,e){for(var g in e)try{a.style[g]=e[g]}catch(j){}return a}function H(a){return null==a?String(a):"object"===typeof a||"function"===typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function R(a,e){if("array"!==H(e))return-1;if(e.indexOf)return e.indexOf(a);for(var g=0,j=e.length;g<j;g++)if(e[g]===a)return g;return-1}function I(){var a=arguments,e;for(e in a[1])if(a[1].hasOwnProperty(e))switch(H(a[1][e])){case "object":a[0][e]=
    I({},a[0][e],a[1][e]);break;case "array":a[0][e]=a[1][e].slice(0);break;default:a[0][e]=a[1][e]}return 2<a.length?I.apply(null,[a[0]].concat(Array.prototype.slice.call(a,2))):a[0]}function N(a){a=Math.round(255*a).toString(16);return 1===a.length?"0"+a:a}function S(a,e,g,j){if(a.addEventListener)a[j?"removeEventListener":"addEventListener"](e,g,!1);else if(a.attachEvent)a[j?"detachEvent":"attachEvent"]("on"+e,g)}function D(a,e){function g(a,b,d,c){return y[0|a][Math.round(Math.min((b-d)/(c-d)*J,J))]}
    function r(){f.legend.fps!==q&&(f.legend.fps=q,f.legend[T]=q?"FPS":"ms");K=q?b.fps:b.duration;f.count[T]=999<K?"999+":K.toFixed(99<K?0:d.decimals)}function m(){z=A();L<z-d.threshold&&(b.fps-=b.fps/Math.max(1,60*d.smoothing/d.interval),b.duration=1E3/b.fps);for(c=d.history;c--;)E[c]=0===c?b.fps:E[c-1],F[c]=0===c?b.duration:F[c-1];r();if(d.heat){if(w.length)for(c=w.length;c--;)w[c].el.style[h[w[c].name].heatOn]=q?g(h[w[c].name].heatmap,b.fps,0,d.maxFps):g(h[w[c].name].heatmap,b.duration,d.threshold,
    0);if(f.graph&&h.column.heatOn)for(c=u.length;c--;)u[c].style[h.column.heatOn]=q?g(h.column.heatmap,E[c],0,d.maxFps):g(h.column.heatmap,F[c],d.threshold,0)}if(f.graph)for(p=0;p<d.history;p++)u[p].style.height=(q?E[p]?Math.round(O/d.maxFps*Math.min(E[p],d.maxFps)):0:F[p]?Math.round(O/d.threshold*Math.min(F[p],d.threshold)):0)+"px"}function k(){20>d.interval?(x=M(k),m()):(x=setTimeout(k,d.interval),P=M(m))}function G(a){a=a||window.event;a.preventDefault?(a.preventDefault(),a.stopPropagation()):(a.returnValue=
    !1,a.cancelBubble=!0);b.toggle()}function U(){d.toggleOn&&S(f.container,d.toggleOn,G,1);a.removeChild(f.container)}function V(){f.container&&U();h=D.theme[d.theme];y=h.compiledHeatmaps||[];if(!y.length&&h.heatmaps.length){for(p=0;p<h.heatmaps.length;p++){y[p]=[];for(c=0;c<=J;c++){var b=y[p],e=c,g;g=0.33/J*c;var j=h.heatmaps[p].saturation,m=h.heatmaps[p].lightness,n=void 0,k=void 0,l=void 0,t=l=void 0,v=n=k=void 0,v=void 0,l=0.5>=m?m*(1+j):m+j-m*j;0===l?g="#000":(t=2*m-l,k=(l-t)/l,g*=6,n=Math.floor(g),
    v=g-n,v*=l*k,0===n||6===n?(n=l,k=t+v,l=t):1===n?(n=l-v,k=l,l=t):2===n?(n=t,k=l,l=t+v):3===n?(n=t,k=l-v):4===n?(n=t+v,k=t):(n=l,k=t,l-=v),g="#"+N(n)+N(k)+N(l));b[e]=g}}h.compiledHeatmaps=y}f.container=s(document.createElement("div"),h.container);f.count=f.container.appendChild(s(document.createElement("div"),h.count));f.legend=f.container.appendChild(s(document.createElement("div"),h.legend));f.graph=d.graph?f.container.appendChild(s(document.createElement("div"),h.graph)):0;w.length=0;for(var q in f)f[q]&&
    h[q].heatOn&&w.push({name:q,el:f[q]});u.length=0;if(f.graph){f.graph.style.width=d.history*h.column.width+(d.history-1)*h.column.spacing+"px";for(c=0;c<d.history;c++)u[c]=f.graph.appendChild(s(document.createElement("div"),h.column)),u[c].style.position="absolute",u[c].style.bottom=0,u[c].style.right=c*h.column.width+c*h.column.spacing+"px",u[c].style.width=h.column.width+"px",u[c].style.height="0px"}s(f.container,d);r();a.appendChild(f.container);f.graph&&(O=f.graph.clientHeight);d.toggleOn&&("click"===
    d.toggleOn&&(f.container.style.cursor="pointer"),S(f.container,d.toggleOn,G))}"object"===H(a)&&a.nodeType===j&&(e=a,a=document.body);a||(a=document.body);var b=this,d=I({},D.defaults,e||{}),f={},u=[],h,y,J=100,w=[],W=0,B=d.threshold,Q=0,L=A()-B,z,E=[],F=[],x,P,q="fps"===d.show,O,K,c,p;b.options=d;b.fps=0;b.duration=0;b.isPaused=0;b.tickStart=function(){Q=A()};b.tick=function(){z=A();W=z-L;B+=(W-B)/d.smoothing;b.fps=1E3/B;b.duration=Q<L?B:z-Q;L=z};b.pause=function(){x&&(b.isPaused=1,clearTimeout(x),
    C(x),C(P),x=P=0);return b};b.resume=function(){x||(b.isPaused=0,k());return b};b.set=function(a,c){d[a]=c;q="fps"===d.show;-1!==R(a,X)&&V();-1!==R(a,Y)&&s(f.container,d);return b};b.showDuration=function(){b.set("show","ms");return b};b.showFps=function(){b.set("show","fps");return b};b.toggle=function(){b.set("show",q?"ms":"fps");return b};b.hide=function(){b.pause();f.container.style.display="none";return b};b.show=function(){b.resume();f.container.style.display="block";return b};b.destroy=function(){b.pause();
    U();b.tick=b.tickStart=function(){}};V();k()}var A,r=m.performance;A=r&&(r.now||r.webkitNow)?r[r.now?"now":"webkitNow"].bind(r):function(){return+new Date};for(var C=m.cancelAnimationFrame||m.cancelRequestAnimationFrame,M=m.requestAnimationFrame,r=["moz","webkit","o"],G=0,k=0,Z=r.length;k<Z&&!C;++k)M=(C=m[r[k]+"CancelAnimationFrame"]||m[r[k]+"CancelRequestAnimationFrame"])&&m[r[k]+"RequestAnimationFrame"];C||(M=function(a){var e=A(),g=Math.max(0,16-(e-G));G=e+g;return m.setTimeout(function(){a(e+
    g)},g)},C=function(a){clearTimeout(a)});var T="string"===H(document.createElement("div").textContent)?"textContent":"innerText";D.extend=I;window.FPSMeter=D;D.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var X=["toggleOn","theme","heat","graph","history"],Y="position zIndex left top right bottom margin".split(" ")})(window);(function(m,j){j.theme={};var s=j.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",
    textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};j.theme.dark=j.extend({},s,{heatmaps:[{saturation:0.8,lightness:0.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}});j.theme.light=j.extend({},s,{heatmaps:[{saturation:0.5,lightness:0.5}],
    container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}});j.theme.colorful=j.extend({},s,{heatmaps:[{saturation:0.5,lightness:0.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}});j.theme.transparent=
    j.extend({},s,{heatmaps:[{saturation:0.8,lightness:0.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:0.5}})})(window,FPSMeter);    
}

var Fps = pc.createScript('fps');

Fps.prototype.initialize = function () {
    this.fps = new FPSMeter({heat: true, graph: true});
};

Fps.prototype.update = function (dt) {
    this.fps.tick();
};


// utils.js
/* jshint esversion: 6 */
var Utils = pc.createScript('utils');

Utils.prototype.initialize = function() {
    Utils.app = this.app;
    
    this.injectMeshCollisionSystem();
};

Utils.prototype.update = function(dt) {
    
};

Utils.prototype.injectMeshCollisionSystem = function() {    
    famobi.log("Injecting advanced mesh physics ....");
    
    this.app.systems.collision.implementations.mesh.createPhysicalShape = function(entity, data) {        
          if(entity.rigidbody && entity.rigidbody.type === pc.BODYTYPE_DYNAMIC) {
                if (typeof Ammo !== 'undefined' && data.model) {
                    var model = data.model;
                    var shape = new Ammo.btConvexHullShape();
                    var i, j;

                    var addPointIfUnique = function(array, a, b, c) {
                        for(var up = 0; up < array.length; up++) {
                            if(array[up][0] === a && array[up][1] === b && array[up][2] === c) {
                                return;
                            }
                        }
                        array.push([a, b, c]);
                    };

                    for (i = 0; i < model.meshInstances.length; i++) {
                        var meshInstance = model.meshInstances[i];
                        var mesh = meshInstance.mesh;
                        var ib = mesh.indexBuffer[pc.RENDERSTYLE_SOLID];
                        var vb = mesh.vertexBuffer;
                        var uniquePoints = [];

                        var format = vb.getFormat();
                        var stride = format.size / 4;
                        var positions;
                        for (j = 0; j < format.elements.length; j++) {
                            var element = format.elements[j];
                            if (element.name === pc.SEMANTIC_POSITION) {
                                positions = new Float32Array(vb.lock(), element.offset);
                            }
                        }

                        var indices = new Uint16Array(ib.lock());
                        var numTriangles = mesh.primitive[0].count / 3;
                        var i1, i2, i3;

                        var base = mesh.primitive[0].base;
                        for (j = 0; j < numTriangles; j++) {
                            i1 = indices[base + j * 3] * stride;
                            i2 = indices[base + j * 3 + 1] * stride;
                            i3 = indices[base + j * 3 + 2] * stride;

                            addPointIfUnique(uniquePoints, positions[i1], positions[i1 + 1], positions[i1 + 2]);
                            addPointIfUnique(uniquePoints, positions[i2], positions[i2 + 1], positions[i2 + 2]);
                            addPointIfUnique(uniquePoints, positions[i3], positions[i3 + 1], positions[i3 + 2]);
                        }

                        var ammoVec = new Ammo.btVector3();
                        for(var u = 0; u < uniquePoints.length; u++) {
                            var point = uniquePoints[u];
                            ammoVec.setValue(point[0], point[1], point[2]);
                            shape.addPoint(ammoVec, true);
                        }
                        Ammo.destroy(ammoVec);



                        if(GameConfig.getAttribute('drawMeshVertices')) {
                            console.group(entity.name + ' has ' + uniquePoints.length + ' vertices:');
                            uniquePoints.forEach(point => {
                                famobi.log(point[0], point[1], point[2]);
                                var vertex1 = pc.app.root.findByName("ObjectsPrefabs").findByName("VertexModel").clone();
                                vertex1.setLocalPosition(point[0], point[1], point[2]);
                                entity.addChild(vertex1);
                            });
                            console.groupEnd();
                        }           
                    }

                    var entityTransform = entity.getWorldTransform();
                    var scale = entityTransform.getScale();
                    var vec = new Ammo.btVector3();
                    vec.setValue(scale.x * (GameConfig.getAttribute('meshPhysicsScaleFactor') || 1), scale.y * (GameConfig.getAttribute('meshPhysicsScaleFactor') || 1), scale.z * (GameConfig.getAttribute('meshPhysicsScaleFactor') || 1));
                    shape.setLocalScaling(vec);
                    Ammo.destroy(vec);


                    return shape;
                }
                return undefined;
            } else {
               
                    if (typeof Ammo !== 'undefined' && data.model) {
                    var model = data.model;
                    var shape = new Ammo.btCompoundShape();

                    var i, j;
                    for (i = 0; i < model.meshInstances.length; i++) {
                        var meshInstance = model.meshInstances[i];
                        var mesh = meshInstance.mesh;
                        var triMesh;

                        if (this.system._triMeshCache[mesh.id]) {
                            triMesh = this.system._triMeshCache[mesh.id];
                        } else {
                            var ib = mesh.indexBuffer[pc.RENDERSTYLE_SOLID];
                            var vb = mesh.vertexBuffer;

                            var format = vb.getFormat();
                            var stride = format.size / 4;
                            var positions;
                            for (j = 0; j < format.elements.length; j++) {
                                var element = format.elements[j];
                                if (element.name === pc.SEMANTIC_POSITION) {
                                    positions = new Float32Array(vb.lock(), element.offset);
                                }
                            }

                            var indices = new Uint16Array(ib.lock());
                            var numTriangles = mesh.primitive[0].count / 3;

                            var v1 = new Ammo.btVector3();
                            var v2 = new Ammo.btVector3();
                            var v3 = new Ammo.btVector3();
                            var i1, i2, i3;

                            var base = mesh.primitive[0].base;
                            triMesh = new Ammo.btTriangleMesh();
                            this.system._triMeshCache[mesh.id] = triMesh;

                            for (j = 0; j < numTriangles; j++) {
                                i1 = indices[base + j * 3] * stride;
                                i2 = indices[base + j * 3 + 1] * stride;
                                i3 = indices[base + j * 3 + 2] * stride;
                                v1.setValue(positions[i1], positions[i1 + 1], positions[i1 + 2]);
                                v2.setValue(positions[i2], positions[i2 + 1], positions[i2 + 2]);
                                v3.setValue(positions[i3], positions[i3 + 1], positions[i3 + 2]);
                                triMesh.addTriangle(v1, v2, v3, true);
                            }

                            Ammo.destroy(v1);
                            Ammo.destroy(v2);
                            Ammo.destroy(v3);
                        }

                        var useQuantizedAabbCompression = true;
                        var triMeshShape = new Ammo.btBvhTriangleMeshShape(triMesh, useQuantizedAabbCompression);

                        var scaling = this.system._getNodeScaling(meshInstance.node);
                        triMeshShape.setLocalScaling(scaling);
                        Ammo.destroy(scaling);

                        var transform = this.system._getNodeTransform(meshInstance.node);
                        shape.addChildShape(transform, triMeshShape);
                        Ammo.destroy(transform);
                    }

                    var entityTransform = entity.getWorldTransform();
                    var scale = entityTransform.getScale();
                    var vec = new Ammo.btVector3();
                    vec.setValue(scale.x, scale.y, scale.z);
                    shape.setLocalScaling(vec);
                    Ammo.destroy(vec);

                    return shape;
                }
                return undefined;
                
            }
     };
        
     
    this.app.systems.collision.implementations.mesh.system._getNodeScaling = function (node) {
        var wtm = node.getWorldTransform();
        var scl = wtm.getScale();
        return new Ammo.btVector3(scl.x, scl.y, scl.z);
    };
    
    this.app.systems.collision.implementations.mesh.system._getNodeTransform = function (node, relative) {
        var pos, rot;

        if (relative) {
            this._calculateNodeRelativeTransform(node, relative);

            pos = vec3;
            rot = quat;
            mat4.getTranslation(pos);
            rot.setFromMat4(mat4);
        } else {
            pos = node.getPosition();
            rot = node.getRotation();
        }

        var transform = new Ammo.btTransform();
        transform.setIdentity();
        var origin = transform.getOrigin();
        origin.setValue(pos.x, pos.y, pos.z);

        var ammoQuat = new Ammo.btQuaternion();
        ammoQuat.setValue(rot.x, rot.y, rot.z, rot.w);
        transform.setRotation(ammoQuat);
        Ammo.destroy(ammoQuat);
        Ammo.destroy(origin);

        return transform;
    },
    
    
    this.app.systems.collision.implementations.mesh.remove = function(entity, data) {
           if (data.shape && data.shape.getNumChildShapes) {
                var numShapes = data.shape.getNumChildShapes();
                for (var i = 0; i < numShapes; i++) {
                    var shape = data.shape.getChildShape(i);
                    Ammo.destroy(shape);
                }
            }
        
            var app = this.system.app;
            if (entity.rigidbody && entity.rigidbody.body) {
                app.systems.rigidbody.removeBody(entity.rigidbody.body);
                entity.rigidbody.disableSimulation();
            }

            if (data.shape)
                Ammo.destroy(data.shape);

            if (entity.trigger) {
                entity.trigger.destroy();
                delete entity.trigger;
            }

            if (app.scene.containsModel(data.model)) {
                app.root.removeChild(data.model.graph);
                app.scene.removeModel(data.model);
            }
    };
};

pc.Entity.prototype.delayedCall = function (durationMS, f, scope) {
    var n = 0;
    while(this["delayedExecuteTween" + n]) {
        n++;
    }
    var id = "delayedExecuteTween" + n;
    var m;
    this[id] = this.tween(m)
        .to(1, durationMS / 1000, pc.Linear)
    ;
    this[id].start();
    
    this[id].once("complete", function() {
        f.call(scope);
        this[id] = null;
    }, this);
    
    return this[id];
};

Utils.raycastAll = function(from, to, results) {
    results = results || [];
    lastResult = this.app.systems.rigidbody.raycastFirst(from, to);
    if (lastResult) {
        if(lastResult.entity){  
            for(var i = 0; i < results.length; i++){
                if(results[i] === lastResult.entity){
                    return results;
                }
            }
           results.push(lastResult.entity);
           Utils.raycastAll(lastResult.point.sub(lastResult.normal.scale(0.01)), to, results);
        }
    }
    return results;
};

/**
 *  Raycast through multiple entities returning RaycastResult instances (entity, point, normal) instead of entities. 
 **/
Utils.raycastAllAdvanced = function(from, to, results) {
    results = results || [];
    lastResult = this.app.systems.rigidbody.raycastFirst(from, to);
    if (lastResult) {
        if(lastResult.entity){  
            // this prevents rays from bouncing off the same entities
            // in a loop causing ammojs to crash
            for(var i = 0; i < results.length; i++){
                if(results[i].entity === lastResult.entity){
                    return results;
                }
            }
           results.push(lastResult);
           Utils.raycastAllAdvanced(lastResult.point.sub(lastResult.normal.scale(0.01)), to, results);
        }
    }
    return results;
};

pc.Entity.prototype.childrenAlphaAppear = function(initialAlpha, duration, sine, delay) {
    for(var i = this.children.length - 1; i > -1; i--) {
        var child = this.children[i];
        if(child instanceof pc.Entity) {
           child.childrenAlphaAppear(initialAlpha, duration, sine, delay);
        }
        if(child.element) {
            var targetAlpha = child.element.opacity;
            child.element.opacity = initialAlpha;
            child.tween(child.element)
                .to({opacity: targetAlpha}, duration, sine)
                .delay(delay)
                .start();
        }
    }
};

pc.GraphicsDevice.prototype.updateClientRect = function() {    
    if(window.visualViewport) {
        this.clientRect = this.canvas.getBoundingClientRect();
        this.clientRect.x = window.visualViewport.offsetLeft;
        this.clientRect.y = window.visualViewport.offsetTop;
        this.clientRect.width = window.visualViewport.width;        
        this.clientRect.height = window.visualViewport.height;
    } else {
        this.clientRect = this.canvas.getBoundingClientRect();
    }    
};

Utils.lerpColor = function(colorA, colorB, progress, targetColor) {
    return targetColor.set(colorA.r + (colorB.r - colorA.r) * progress, colorA.g + (colorB.g - colorA.g) * progress, colorA.b + (colorB.b - colorA.b) * progress, 1);
};

Utils.distanceBetween = function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

Utils.checkContact = function(entityA, entityB) {
    var pos1 = entityA.getPosition();
    var pos2 = entityB.getPosition();
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z)) <=  (entityA.script.item.collisionDiameter * entityA.collisionScale / 2 + entityB.script.item.collisionDiameter * entityB.collisionScale / 2) && 
        Math.abs(pos1.y - pos2.y) <= (entityA.script.item.collisionHeight * entityA.collisionScale / 2 + entityB.script.item.collisionHeight * entityB.collisionScale / 2);
};


Utils.checkContactRough = function(entityA, entityB) {
    var scaleFactor = 1.1;
    var pos1 = entityA.getPosition();
    var pos2 = entityB.getPosition();
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z)) <=  (entityA.script.item.collisionDiameter * entityA.collisionScale * scaleFactor / 2 + entityB.script.item.collisionDiameter * entityB.collisionScale * scaleFactor / 2) && 
        Math.abs(pos1.y - pos2.y) <= (entityA.script.item.collisionHeight * entityA.collisionScale * scaleFactor / 2 + entityB.script.item.collisionHeight * entityB.collisionScale * scaleFactor / 2);
};

Utils.contactTestInternal = function(entityA, entityB, callback) {
  
    var resultCallback = new Ammo.ConcreteContactResultCallback();
        resultCallback.addSingleResult = function(
            manifoldPoint,
            collisionObjectA,
            id0,
            index0,
            collisionObjectB,
            id1,
            index1
        ) {
            if(callback) {
                callback(entityA, entityB);
            }
        };
    
    Utils.app.systems.rigidbody.dynamicsWorld.contactPairTest(entityA.rigidbody.body, entityB.rigidbody.body, resultCallback);
};

Utils.distanceXZ = function(pos1, pos2) {
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z));
};

Utils.distanceBetweenEntities = function(posA, posB) {
    return Math.sqrt((posA.x - posB.x) * (posA.x - posB.x) + (posA.y - posB.y) * (posA.y - posB.y) + (posA.z - posB.z) * (posA.z - posB.z));
};

Utils.tweenText = function(textElement, initialValue, targetValue, duration, delay, easing, playCountingSound) {
      textElement.element.textValue = initialValue;
      textElement.element.text = '' + Math.round(initialValue);  
      textElement.tween(textElement.element)
            .to({textValue: targetValue}, duration, easing)
            .delay(delay)
            .on('update',function() {textElement.element.text = '' + Math.round(textElement.element.textValue);})
            .start();
};

Utils.getRandomItem = function (objects, startIndex, length) {

        if (objects === null) { return null; }
        if (startIndex === undefined) { startIndex = 0; }
        if (length === undefined) { length = objects.length; }

        var randomIndex = startIndex + Math.floor(Math.random() * length);

        return objects[randomIndex] === undefined ? null : objects[randomIndex];

};

Utils.removeRandomItem = function (objects, startIndex, length) {

    if (objects === null) { // undefined or null
        return null;
    }

    if (startIndex === undefined) { startIndex = 0; }
    if (length === undefined) { length = objects.length; }

    var randomIndex = startIndex + Math.floor(Math.random() * length);
    if (randomIndex < objects.length)
    {
        var removed = objects.splice(randomIndex, 1);
        return removed[0] === undefined ? null : removed[0];
    }
    else
    {
        return null;
    }

};

Utils.shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;  
};

Utils.humanizeTime = function(seconds) {
    var restSeconds = seconds;
    var hours = Math.floor(restSeconds / 3600);
    restSeconds %= 3600;
    var minutes = Math.floor(restSeconds / 60);
    restSeconds %= 60;

    return /*(hours < 10 ? "0" : "") + hours + ":" +*/ (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + Math.floor(restSeconds);  
};

Utils.getBoundingBox = function(entity, extendDistance) {
    if (entity.model && entity.model.meshInstances && entity.model.meshInstances.length > 0) {
        var meshInstances = entity.model.meshInstances;
        var bbox = new pc.BoundingBox();
        bbox.copy(meshInstances[0].aabb);
        for (var i = 1; i < meshInstances.length; i++) {
            bbox.add(meshInstances[i].aabb);
        }
        if(extendDistance) {
            bbox.halfExtents.add(extendDistance);
        }
        return bbox;
    }
    return null;
   
};

Utils.randomInRangeSigned = function(a,b) {
    if(Math.random() <= 0.5) {
        return pc.math.random(Math.min(-a, -b), Math.max(-a, -b));
    } else {
         return pc.math.random(Math.min(a, b), Math.max(a, b)) ;
    }   
};

Utils.vibrate = function(pattern) {
    if(GameplayController.enableVibration && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(pattern); 
    }
};
Utils.setMat4Forward = (function () {
    var x, y, z;

    x = new pc.Vec3();
    y = new pc.Vec3();
    z = new pc.Vec3();

    return function (mat4, forward, up) {
        // Inverse the forward direction as +z is pointing backwards due to the coordinate system
        z.copy(forward).scale(-1);
        y.copy(up).normalize();
        x.cross(y, z).normalize();
        y.cross(z, x);

        var r = mat4.data;

        r[0]  = x.x;
        r[1]  = x.y;
        r[2]  = x.z;
        r[3]  = 0;
        r[4]  = y.x;
        r[5]  = y.y;
        r[6]  = y.z;
        r[7]  = 0;
        r[8]  = z.x;
        r[9]  = z.y;
        r[10] = z.z;
        r[11] = 0;
        r[15] = 1;

        return mat4;
    };
}());


!(function() {
    var MAX_CACHE = 256;

    var quats = [];
    var vecs = [];
    var nextQuat = 0;
    var nextVec = 0;

    for (var i = 0; i < MAX_CACHE; i++) {
        vecs.push(new pc.Vec3());
        quats.push(new pc.Quat());
    }

    function Q(existing) {
        var q = quats[nextQuat++ & (MAX_CACHE-1)];
        if (existing !== false) q.copy(existing || pc.Quat.IDENTITY);
        return q;
    }

    function V(existing, y, z) {
        var v = vecs[nextVec++ & (MAX_CACHE-1)];
        if (y !== undefined && z !== undefined) {
            var d = v.data;
            d[0] = existing;
            d[1] = y;
            d[2] = z;
            return v;
        }
        if (existing !== undefined) {
            var d1 = v.data;
            var d2 = existing.data;
            d1[0] = d2[0];
            d1[1] = d2[1];
            d1[2] = d2[2];
        }
        return v;
    }

    pc.Vec3.temp = V;
    pc.Quat.temp = Q;

    function angleBetween(vector1, vector2, up) {
        up = up || pc.Vec3.UP;
        return Math.atan2(V().cross(vector1, vector2).dot(up), vector1.dot(vector2)) * pc.math.RAD_TO_DEG;
    }

    pc.Vec3.prototype.angle = function(vector, up) { return angleBetween(this, vector, up); };

    function orthogonal(v) {

        var x = Math.abs(v.x);
        var y = Math.abs(v.y);
        var z = Math.abs(v.z);
        var other = x < y ? ( x < z ? pc.Vec3.RIGHT : pc.Vec3.FORWARD )
            : ( y < z ? pc.Vec3.UP  : pc.Vec3.FORWARD );
         return V().cross(v, other);
    }

function fromToRotation(v1, v2, q) {
    var kct = v1.dot(v2);
    q = q || Q();
    if (kct <= -0.999) {
        q.w = 0;
        var v = orthogonal(v1).normalize();
        q.x = v.x;
        q.y = v.y;
        q.z = v.z;
        return q;
    }
    
    var half = V(v1).add(v2).scale(0.5);
    q.w = v1.dot(half);
    var cross = V().cross(v1, half);
    q.x = cross.x;
    q.y = cross.y;
    q.z = cross.z;
    return q.normalize();
}

pc.Quat.prototype.fromToRotation = function(v1,v2) {
    return fromToRotation(v1, v2, this);
};

pc.Quat.prototype.twist = function(axis) {
    var orth = orthogonal(axis);
    var transformed = this.transformVector(orth, V());
    var flattened = V(transformed).sub(V(axis).scale(transformed.dot(axis))).normalize();
    var angle = Math.acos(orth.dot(flattened)) * pc.math.RAD_TO_DEG;
    return V(this.x, this.y, this.z).dot(axis) > 0 ? -angle : angle;
};

var m = new pc.Mat4();

pc.Quat.prototype.lookAt = function(from, to, up) {
    m.setLookAt(from, to, up || pc.Vec3.UP);
    this.setFromMat4(m);
    return this;
};

var oldMul = pc.Vec3.prototype.mul;

pc.Vec3.prototype.mul = function(p0,p1,p2) {
    if(p0 instanceof pc.Quat) {
        return p0.transformVector(this, this);
    } else
        return oldMul.call(this, p0,p1,p2);
};
})();

// transitionScreen.js
/* jshint esversion: 6 */
var TransitionScreen = pc.createScript('transitionScreen');

TransitionScreen.prototype.initialize = function() {
    const scriptingContext = this;

    TransitionScreen.app = this.app;
    TransitionScreen.instance = this.entity;
    
    this.entity.transitionTo = function(callback, callbackContext, completeCallback, completeCallbackContext) {

        this.element.opacity = 0;
        this.tween(this.element)
            .to({opacity: 1.0}, 0.25, pc.SineOut)
             .on('complete', () => {

                    if(callback) {
                        if(callbackContext) {
                            callback.apply(callbackContext);
                        } else {
                            callback();
                        }
                    }

                    scriptingContext.hidePopups();

                    this.tween(this.element)
                    .to({opacity: 0.0}, 0.4, pc.Linear)
                    .on('complete', () => {
                        if(completeCallback) {
                             if(completeCallbackContext) {
                                completeCallback.apply(completeCallbackContext);
                            } else {
                                completeCallback();
                            }
                        }
                    })
                    .start();

            })
            .start();
        
        
    }.bind(this.entity);
    
    
    this.entity.hidePreloader = function(callback, callbackContext) {
        scriptingContext.app.fire(EventTypes.PRELOADER_FINISHED);         
    }.bind(this.entity);
    
    /* Initial opacity, while preloader is visible */
    this.entity.element.opacity = 0;
};

TransitionScreen.prototype.update = function(dt) {
    
};

TransitionScreen.prototype.hidePopups = function() {
    const resultsWindow = this.app.root.findByName("ResultsWindow");
    if(resultsWindow) {
        resultsWindow.hide();
    }
};

// soundController.js
/* jshint esversion: 6 */
var SoundController = pc.createScript('soundController');

SoundController.attributes.add('soundStorage', {
    title: "Sound storage entity",
    type: 'entity'
});


SoundController.soundStateLoaded = false;
SoundController.audioEnabled = true;
SoundController.masterVolume = 1.0;
SoundController.apiVolumeMultiplier = 1.0;

SoundController.prototype.initialize = function() {
    this.app.on(EventTypes.PLAY_AUDIO, this.playSound, this);
    this.app.on(EventTypes.STOP_AUDIO, this.stopSound, this);
    this.app.on(EventTypes.MUTE_SOUND, this.muteSound, this);
    this.app.on(EventTypes.UNMUTE_SOUND , this.unmuteSound, this);
    this.app.on(EventTypes.ENABLE_AUDIO, this.enableAudio, this);
    this.app.on(EventTypes.DISABLE_AUDIO, this.disableAudio, this);
    this.app.on("audio:setMasterVolume", this.setMasterVolume, this);
    this.app.on("audio:setVolumeMultiplier", this.setVolumeMultiplier, this);
    this.app.fire(EventTypes.AUDIO_STATE_CHANGED, SoundController.audioEnabled);
    
    /* fetch and apply master volume */
    this.setMasterVolume(window.famobi.getVolume());
    
    this.app.on('startGameRequested', () => {
         this.soundStorage.sound.slot('melody').play();
    });
};

SoundController.prototype.update = function(dt) {
    
};

SoundController.prototype.playSound = function(key, debounceDelay) {
    if(debounceDelay) {
         var currentTimestamp = new Date().getTime();
         var lastTimestamp = this.soundStorage.sound.slot(key).lastTimeStamp;
         if(lastTimestamp && currentTimestamp - lastTimestamp < debounceDelay) {
             return;
         }
         this.soundStorage.sound.slot(key).lastTimeStamp = currentTimestamp;
    }
    this.soundStorage.sound.play(key);
};

SoundController.prototype.stopSound = function(key) {
    this.soundStorage.sound.stop(key);
};

SoundController.prototype.muteSound = function(key) {
    this.soundStorage.sound.slot(key).volume = 0;
};

SoundController.prototype.unmuteSound = function(key, volume) {
    this.soundStorage.sound.slot(key).volume = volume;
};

SoundController.prototype.enableAudio = function() {
    SoundController.audioEnabled = true;
    SoundController.masterVolume = window.famobi.getVolume();
    this.updateVolume();
    this.app.fire(EventTypes.AUDIO_STATE_CHANGED, SoundController.audioEnabled);
};

SoundController.prototype.disableAudio = function() {
    SoundController.audioEnabled = false;
    SoundController.masterVolume = 0;
    this.updateVolume();
    this.app.fire(EventTypes.AUDIO_STATE_CHANGED, SoundController.audioEnabled);
};

SoundController.prototype.updateVolume = function() {
    this.app.systems.sound.volume = SoundController.masterVolume * SoundController.apiVolumeMultiplier;
};

SoundController.prototype.setMasterVolume = function(volume) {
    SoundController.masterVolume = volume;
    this.updateVolume();
};

SoundController.prototype.setVolumeMultiplier = function(volume) {
    SoundController.apiVolumeMultiplier = volume;
    this.updateVolume();
};

// tween.js
pc.extend(pc, function () {

    /**
     * @name pc.TweenManager
     * @description Handles updating tweens
     * @param {pc.Application} app  The application
     */
    var TweenManager = function (app) {
        this._app = app;
        this._tweens = [];
        this._add = []; // to be added
    };

    TweenManager.prototype = {
        add: function (tween) {
            this._add.push(tween);
            return tween;
        },

        update: function (dt) {
            var i = 0;
            var n = this._tweens.length;
            while (i < n) {
                if (this._tweens[i].update(dt)) {
                    i++;
                } else {
                    this._tweens.splice(i, 1);
                    n--;
                }
            }

            // add any tweens that were added mid-update
            if (this._add.length) {
                this._tweens = this._tweens.concat(this._add);
                this._add.length = 0;
            }
        }
    };

    /**
     * @name  pc.Tween
     * @param {Object} target The target property that will be tweened
     * @param {pc.TweenManager} manager The tween manager
     * @param {pc.Entity} entity The pc.Entity whose property we are tweening
     */
    var Tween = function (target, manager, entity) {
        pc.events.attach(this);

        this.manager = manager;

        if (entity) {
            this.entity = null; // if present the tween will dirty the transforms after modify the target
        }

        this.time = 0;

        this.complete = false;
        this.playing = false;
        this.stopped = true;
        this.pending = false;

        this.target = target;

        this.duration = 0;
        this._currentDelay = 0;
        this.timeScale = 1;
        this._reverse = false;

        this._delay = 0;
        this._yoyo = false;

        this._count = 0;
        this._numRepeats = 0;
        this._repeatDelay = 0;

        this._from = false; // indicates a "from" tween

        // for rotation tween
        this._slerp = false; // indicates a rotation tween
        this._fromQuat = new pc.Quat();
        this._toQuat = new pc.Quat();
        this._quat = new pc.Quat();

        this.easing = pc.EASE_LINEAR;

        this._sv = {}; // start values
        this._ev = {}; // end values
    };

    var _parseProperties = function (properties) {
        var _properties;
        if (properties instanceof pc.Vec2) {
            _properties = {
                x: properties.x,
                y: properties.y
            };
        } else if (properties instanceof pc.Vec3) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z
            };
        } else if (properties instanceof pc.Vec4) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z,
                w: properties.w
            };
        } else if (properties instanceof pc.Quat) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z,
                w: properties.w
            };
        } else if (properties instanceof pc.Color) {
            _properties = {
                r: properties.r,
                g: properties.g,
                b: properties.b,
            };
            if (properties.a !== undefined) {
                _properties.a = properties.a;
            }
        } else {
            _properties = properties;
        }
        return _properties;
    };
    Tween.prototype = {
        // properties - js obj of values to update in target
        to: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);
            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            return this;
        },

        from: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);
            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._from = true;

            return this;
        },

        rotate: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);

            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._slerp = true;

            return this;
        },

        start: function () {
            var prop, _x, _y, _z;

            this.playing = true;
            this.complete = false;
            this.stopped = false;
            this._count = 0;
            this.pending = (this._delay > 0);

            if (this._reverse && !this.pending) {
                this.time = this.duration;
            } else {
                this.time = 0;
            }

            if (this._from) {
                for (prop in this._properties) {
                    if (this._properties.hasOwnProperty(prop)) {
                        this._sv[prop] = this._properties[prop];
                        this._ev[prop] = this.target[prop];
                    }
                }

                if (this._slerp) {
                    this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);

                    _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    _z = this._properties.z !== undefined ? this._properties.z : this.target.z;
                    this._fromQuat.setFromEulerAngles(_x, _y, _z);
                }
            } else {
                for (prop in this._properties) {
                    if (this._properties.hasOwnProperty(prop)) {
                        this._sv[prop] = this.target[prop];
                        this._ev[prop] = this._properties[prop];
                    }
                }

                if (this._slerp) {
                    this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);

                    _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    _z = this._properties.z !== undefined ? this._properties.z : this.target.z;
                    this._toQuat.setFromEulerAngles(_x, _y, _z);
                }
            }

            // set delay
            this._currentDelay = this._delay;

            // add to manager when started
            this.manager.add(this);

            return this;
        },

        pause: function () {
            this.playing = false;
        },

        resume: function () {
            this.playing = true;
        },

        stop: function () {
            this.playing = false;
            this.stopped = true;
        },

        delay: function (delay) {
            this._delay = delay;
            this.pending = true;

            return this;
        },

        repeat: function (num, delay) {
            this._count = 0;
            this._numRepeats = num;
            if (delay) {
                this._repeatDelay = delay;
            } else {
                this._repeatDelay = 0;
            }

            return this;
        },

        loop: function (loop) {
            if (loop) {
                this._count = 0;
                this._numRepeats = Infinity;
            } else {
                this._numRepeats = 0;
            }

            return this;
        },

        yoyo: function (yoyo) {
            this._yoyo = yoyo;
            return this;
        },

        reverse: function () {
            this._reverse = !this._reverse;

            return this;
        },

        chain: function () {
            var n = arguments.length;

            while(n--) {
                if (n > 0) {
                    arguments[n-1]._chained = arguments[n];
                } else {
                    this._chained = arguments[n];
                }
            }

            return this;
        },

        update: function (dt) {
            if (this.stopped) return false;

            if (!this.playing) return true;

            if (!this._reverse || this.pending) {
                this.time += dt*this.timeScale;
            } else {
                this.time -= dt*this.timeScale;
            }

            // delay start if required
            if (this.pending) {
                if (this.time > this._currentDelay) {
                    if (this._reverse) {
                        this.time = this.duration - (this.time - this._currentDelay);
                    } else {
                        this.time = this.time - this._currentDelay;
                    }
                    this.pending = false;
                } else {
                    return true;
                }
            }

            var _extra = 0;
            if ((!this._reverse && this.time > this.duration) || (this._reverse && this.time < 0)){
                this._count++;
                this.complete = true;
                this.playing = false;
                if (this._reverse) {
                    _extra = this.duration - this.time;
                    this.time = 0;
                } else {
                    _extra = this.time - this.duration;
                    this.time = this.duration;
                }
            }

            var elapsed = this.time / this.duration;

            // run easing
            var a = this.easing(elapsed);

            // increment property
            var s,e,d;
            for (var prop in this._properties) {
                if (this._properties.hasOwnProperty(prop)) {
                    s = this._sv[prop];
                    e = this._ev[prop];
                    this.target[prop] = s + (e - s) * a;
                }
            }

            if (this._slerp) {
                this._quat.slerp(this._fromQuat, this._toQuat, a);
            }

            // if this is a entity property then we should dirty the transform
            if (this.entity) {
                this.entity._dirtifyLocal();

                // apply element property changes
                if (this.element && this.entity.element) {
                    this.entity.element[this.element] = this.target;
                }

                if (this._slerp) {
                    this.entity.setLocalRotation(this._quat);
                }
            }

            this.fire("update", dt);

            if (this.complete) {
                var repeat = this._repeat(_extra);
                if (!repeat) {
                    this.fire("complete", _extra);
                    if (this.entity)
                        this.entity.off('destroy', this.stop, this);
                    if (this._chained) this._chained.start();
                } else {
                    this.fire("loop");
                }

                return repeat;
            }

            return true;
        },

        _repeat: function (extra) {
            // test for repeat conditions
            if (this._count < this._numRepeats) {
                // do a repeat
                if (this._reverse) {
                    this.time = this.duration - extra;
                } else {
                    this.time = extra; // include overspill time
                }
                this.complete = false;
                this.playing = true;

                this._currentDelay = this._repeatDelay;
                this.pending = true;

                if (this._yoyo) {
                    // swap start/end properties
                    for (var prop in this._properties) {
                        tmp = this._sv[prop];
                        this._sv[prop] = this._ev[prop];
                        this._ev[prop] = tmp;
                    }

                    if (this._slerp) {
                        this._quat.copy(this._fromQuat);
                        this._fromQuat.copy(this._toQuat);
                        this._toQuat.copy(this._quat);
                    }
                }

                return true;
            }
            return false;
        },

    };


    /**
     * Easing methods
     */

    var Linear = function (k) {
        return k;
    };

    var QuadraticIn = function (k) {
        return k * k;
    };

    var QuadraticOut = function (k) {
        return k * (2 - k);
    };

    var QuadraticInOut = function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    };

    var CubicIn = function (k) {
        return k * k * k;
    };

    var CubicOut = function (k) {
        return --k * k * k + 1;
    };

    var CubicInOut = function (k) {
        if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
        return 0.5 * ( ( k -= 2 ) * k * k + 2 );
    };

    var QuarticIn = function (k) {
            return k * k * k * k;
    };

    var QuarticOut = function (k) {
        return 1 - ( --k * k * k * k );
    };

    var QuarticInOut = function (k) {
        if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
        return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );
    };

    var QuinticIn = function (k) {
            return k * k * k * k * k;
    };

    var QuinticOut = function (k) {
            return --k * k * k * k * k + 1;
    };

    var QuinticInOut = function (k) {
        if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
        return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );
    };

    var SineIn = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 1 - Math.cos( k * Math.PI / 2 );
    };

    var SineOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return Math.sin( k * Math.PI / 2 );
    };

    var SineInOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
    };

    var ExponentialIn = function (k) {
        return k === 0 ? 0 : Math.pow( 1024, k - 1 );
    };

    var ExponentialOut = function (k) {
        return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
    };

    var ExponentialInOut = function (k) {
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
        return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
    };

    var CircularIn = function (k) {
        return 1 - Math.sqrt( 1 - k * k );
    };

    var CircularOut = function (k) {
        return Math.sqrt( 1 - ( --k * k ) );
    };

    var CircularInOut = function (k) {
        if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
        return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);
    };

    var ElasticIn = function (k) {
        var s, a = 0.1, p = 0.4;
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( !a || a < 1 ) { a = 1; s = p / 4; }
        else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
    };

    var ElasticOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( !a || a < 1 ) { a = 1; s = p / 4; }
        else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
    };

    var ElasticInOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( !a || a < 1 ) { a = 1; s = p / 4; }
        else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
        return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
    };

    var BackIn = function (k) {
            var s = 1.70158;
            return k * k * ( ( s + 1 ) * k - s );
    };

    var BackOut = function (k) {
        var s = 1.70158;
        return --k * k * ( ( s + 1 ) * k + s ) + 1;
    };

    var BackInOut = function (k) {
        var s = 1.70158 * 1.525;
        if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
        return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );
    };

    var BounceIn = function (k) {
        return 1 - BounceOut( 1 - k );
    };

    var BounceOut = function (k) {
        if ( k < ( 1 / 2.75 ) ) {
            return 7.5625 * k * k;
        } else if ( k < ( 2 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
        } else if ( k < ( 2.5 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
        } else {
            return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
        }
    };

    var BounceInOut = function (k) {
        if ( k < 0.5 ) return BounceIn( k * 2 ) * 0.5;
        return BounceOut( k * 2 - 1 ) * 0.5 + 0.5;
    };

    return {
        TweenManager: TweenManager,
        Tween: Tween,
        Linear: Linear,
        QuadraticIn: QuadraticIn,
        QuadraticOut: QuadraticOut,
        QuadraticInOut: QuadraticInOut,
        CubicIn: CubicIn,
        CubicOut: CubicOut,
        CubicInOut: CubicInOut,
        QuarticIn: QuarticIn,
        QuarticOut: QuarticOut,
        QuarticInOut: QuarticInOut,
        QuinticIn: QuinticIn,
        QuinticOut: QuinticOut,
        QuinticInOut: QuinticInOut,
        SineIn: SineIn,
        SineOut: SineOut,
        SineInOut: SineInOut,
        ExponentialIn: ExponentialIn,
        ExponentialOut: ExponentialOut,
        ExponentialInOut: ExponentialInOut,
        CircularIn: CircularIn,
        CircularOut: CircularOut,
        CircularInOut: CircularInOut,
        BackIn: BackIn,
        BackOut: BackOut,
        BackInOut: BackInOut,
        BounceIn: BounceIn,
        BounceOut: BounceOut,
        BounceInOut: BounceInOut,
        ElasticIn: ElasticIn,
        ElasticOut: ElasticOut,
        ElasticInOut: ElasticInOut
    };
}());

// Expose prototype methods and create a default tween manager on the application
(function () {
    // Add pc.Application#addTweenManager method
    pc.Application.prototype.addTweenManager = function () {
        this._tweenManager = new pc.TweenManager(this);

        this.on("update", function (dt) {
            this._tweenManager.update(dt);
        });
    };

    // Add pc.Application#tween method
    pc.Application.prototype.tween = function (target) {
        return new pc.Tween(target, this._tweenManager);
    };

    // Add pc.Entity#tween method
    pc.Entity.prototype.tween = function (target, options) {
        var tween = this._app.tween(target);
        tween.entity = this;

        this.once('destroy', tween.stop, tween);

        if (options && options.element) {
            // specifiy a element property to be updated
            tween.element = options.element;
        }
        return tween;
    };

    // Create a default tween manager on the application
    var application = pc.Application.getApplication();
    if (application) {
        application.addTweenManager();
    }
})();


// inputController.js
/* jshint esversion: 6 */
var InputController = pc.createScript('inputController');

InputController.numTouches = 0;
InputController.clickDistanceTolerance = 5;
InputController.mousePosition = null;


InputController.prototype.initialize = function() {
        
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
        
        this.app.touch.on(pc.EVENT_TOUCHEND, function(event) {
            // This prevents that a mouse click event will be executed after a touch event.
            event.event.preventDefault();
        });
    } 
    
    if (this.app.mouse) {
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
        this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    }
    
    if(this.app.keyboard) {
        this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }
    
 
    if(this.app.mouse) {
        this.app.mouse.disableContextMenu();
    }
        
    this.on("destroy", this.destroy, this);
};

InputController.prototype.update = function(dt) {
    
};


InputController.prototype.onTouchStart = function (event) {    
    if(event.touches.length >= 1) {
        this.touchDownPosition = {id: event.touches[0].id, x: event.touches[0].x, y: event.touches[0].y};
    }
};

InputController.prototype.onTouchMove = function (event) {
    
};


InputController.prototype.onTouchEnd = function (event) {
    if(event.changedTouches.length >= 1) {
         if(this.touchDownPosition && Utils.distanceBetween(this.touchDownPosition.x, this.touchDownPosition.y, event.changedTouches[0].x, event.changedTouches[0].y) < InputController.clickDistanceTolerance) {
             if(this.touchDownPosition.id === event.changedTouches[0].id) {
                 this.handleTouch(event.changedTouches[0].x, event.changedTouches[0].y);
             }
        }
    }    
};


InputController.prototype.onTouchCancel = function (event) {
    this.touchDownPosition = null;
};


InputController.prototype.onKeyDown = function (event) {

};


InputController.prototype.onMouseDown = function (event) {
    this.mouseDownPosition = {x: event.x, y: event.y};
    // this.handleTouch(event.x, event.y);
};


InputController.prototype.onMouseUp = function (event) {
    /* if mouse were not moved, then propagate input event */
    if(this.mouseDownPosition && Utils.distanceBetween(this.mouseDownPosition.x, this.mouseDownPosition.y, event.x, event.y) < InputController.clickDistanceTolerance) {
        this.handleTouch(event.x, event.y);
    }
};

InputController.prototype.onMouseMove = function (event) {
    if( InputController.mousePosition) {
        InputController.mousePosition.x = event.x;
        InputController.mousePosition.y = event.y;
    } else {
        InputController.mousePosition = {x: event.x, y: event.y};
    }
};

InputController.prototype.handleTouch = function(x, y) {
    this.app.fire(EventTypes.INPUT_DOWN, {x: x, y: y});
};

InputController.prototype.destroy = function() {           
    this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
    this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
    this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
    if(this.app.mouse) { 
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    }
    if(this.app.keyboard) {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }
};

// item.js
/* jshint esversion: 6 */
var Item = pc.createScript('item');

Item.TYPE_WOOD = 'wood';
Item.TYPE_METAL = 'metal';
Item.TYPE_GLASS = 'glass';
Item.TYPE_EXPLOSIVE = 'explosive';
Item.TYPE_CONCRETE = 'concrete';

Item.attributes.add('type', {
    type: 'string',
    default: Item.TYPE_WOOD,
    enum: [
        { 'wood': Item.TYPE_WOOD },
        { 'metal': Item.TYPE_METAL },
        { 'glass': Item.TYPE_GLASS },
        { 'explosive': Item.TYPE_EXPLOSIVE },
        { 'concrete': Item.TYPE_CONCRETE }
    ]
});

Item.attributes.add('volume', {
    type: 'number',
    default: 1
});

Item.prototype.initialize = function() {
    this.entity.itemType = this.type;
    this.entity.originalType = this.type;
    this.entity.explosiveType = null; 
    this.entity.bombControllerScript = null;
    
    /* item flags */
    this.entity.activated = false;
    this.entity.detonated = false;
    this.entity.burned = false;
    
    /* body config */
    this.entity.rigidbody.type = pc.BODYTYPE_DYNAMIC;
    this.entity.rigidbody.restitution = Item.TYPE_SETTINGS[this.entity.itemType].restitution;
    this.entity.rigidbody.friction = Item.TYPE_SETTINGS[this.entity.itemType].friction;
    this.entity.rigidbody.mass = this.volume * Item.TYPE_SETTINGS[this.entity.itemType].massMultiplier;
    this.entity.rigidbody.linearDamping = GameConfig.getAttribute('itemLinearDamping');
    this.entity.rigidbody.angularDamping = GameConfig.getAttribute('itemAngularDamping');   
    
    this.entity.replaceable = this.isReplaceableBlock();

    /* listeners */
    this.entity.rigidbody.on('collisionstart', this.onCollisionStart, this);
    this.on('destroy', this.destroy, this);
};

Item.prototype.destroy = function() {
    this.entity.itemType = null;
    this.entity.explosiveType = null;
    this.entity.originalType = null;
    this.entity.originalModelAsset = null; 
    this.entity.originalModelMaterial = null; 
    this.entity.bombControllerScript = null; 
};

Item.prototype.update = function(dt) {
    this.restrictAngularVelocity();
    
    const currentWorldPosition = this.entity.getPosition();
    if(currentWorldPosition.y < GameConfig.getAttribute('itemLowestYPositionThreshold') || currentWorldPosition.y > GameConfig.getAttribute('itemYDistanceThreshold')) {
         this.breakBlock(true, "fall_down");
    } else if (Utils.distanceBetween(currentWorldPosition.x, currentWorldPosition.z, 0, 0) > GameConfig.getAttribute('itemXZDistanceThreshold')) {
         this.breakBlock(true, "fly_away");
    }
};

Item.prototype.blinkWhite = function() {
    this.entity.emissiveValue = 0; 
    this.entity.tween(this.entity)
        .to({emissiveValue: 0.4}, 0.225, pc.SineInOut)
        .repeat(8)
        .yoyo(true)
        .start()
        .on('update', () => this.entity.model.meshInstances[0].setParameter('material_emissive', [this.entity.emissiveValue, this.entity.emissiveValue, this.entity.emissiveValue]));
};

Item.prototype.blinkRed = function(emissive, repeats, duration, easing) {
    this.entity.emissiveValue = 0; 
    this.entity.tween(this.entity)
        .to({emissiveValue: emissive || 1.999}, duration || 0.09, easing || pc.SineIn)
        .repeat((repeats || 3) * 2)
        .yoyo(true)
        .start()
        .on('update', () => this.entity.model.meshInstances[0].setParameter('material_emissive', [this.entity.emissiveValue, 0, 0]));
};

Item.prototype.paint = function(darknessFactor) {
    if([Item.TYPE_METAL, Item.TYPE_WOOD, Item.TYPE_CONCRETE].indexOf(this.entity.itemType) != -1) {
        this.entity.model.meshInstances.forEach(meshInstance => {
            meshInstance.material = meshInstance.material.clone();
            meshInstance.material.diffuseMapTint = true;
            darknessFactor = Number.isNaN(darknessFactor) ? 1 : darknessFactor;
            let tintValue = 1;
            switch(this.entity.itemType) {
                case Item.TYPE_WOOD:
                    tintValue = pc.math.lerp(0.8, 0.9999, darknessFactor);
                    break;
                case Item.TYPE_METAL:
                    tintValue = pc.math.lerp(0.75, 0.9999, darknessFactor);
                    break;
                case Item.TYPE_CONCRETE:
                    tintValue = pc.math.lerp(0.65, 0.9999, darknessFactor);
                    break;
            }
            if(this.entity.replaceable) {
                tintValue = 0.9999;
            }

            meshInstance.material.diffuse.set(tintValue, tintValue, tintValue);
            meshInstance.material.update();            

        });
    }
};

Item.prototype.isReplaceableBlock = function() {
    const scale = this.entity.getLocalScale();
    const blockAsset = this.app.assets.find('block_1x1x1.json');
    return scale.x > 0.95 && scale.x < 1.05  && scale.y > 0.95 && scale.y < 1.05  && scale.z > 0.95 && scale.z < 1.05 && this.entity.itemType === Item.TYPE_WOOD && this.entity.model.asset === blockAsset.id;
};

Item.prototype.transformIntoExplosive = function(explosiveType) {
    if(this.entity.replaceable && this.entity.itemType != Item.TYPE_EXPLOSIVE) {
                
        this.entity.originalType =  this.entity.itemType;
        this.entity.originalModelAsset = this.entity.model.asset;
        this.entity.originalModelMaterial = this.entity.model.meshInstances[0].material;
        this.entity.itemType = Item.TYPE_EXPLOSIVE;
        this.entity.explosiveType = explosiveType;
                        
        const tntBlockPrefab = this.app.root.children[0].script.gameplayController[explosiveType + 'Prefab'];
        this.entity.model.asset = tntBlockPrefab.model.asset;
        this.entity.model.meshInstances[0].material = tntBlockPrefab.model.meshInstances[0].material.clone();

        this.entity.bombID = GameplayController.nextBombID++;
        
        this.entity.bombControllerScript = this.entity.script.create(this.entity.explosiveType + 'BombController');
                
        this.app.fire(EventTypes.BOMB_PLACED, explosiveType);
        this.app.fire(EventTypes.PLAY_AUDIO, 'bombSetting');
        
        this.entity.tween(this.entity.getLocalScale())
            .from(new pc.Vec3(0.92, 0.92, 0.92), 0.14, pc.SineOut)
            .start();
        
    } else {
        this.app.fire(EventTypes.PLAY_AUDIO, 'wrongBlock');
        this.blinkRed();
        console.warn('can\'t put bomb on this item');
    }
};

Item.prototype.transformIntoOriginalType = function(omitEvents) {
    if(this.entity.itemType === Item.TYPE_EXPLOSIVE) {
            if(!omitEvents) {                
                this.app.fire(EventTypes.BOMB_REMOVED, this.entity.explosiveType);   
                this.app.fire(EventTypes.PLAY_AUDIO, 'bombRemoving');  
            }    
            this.entity.itemType = this.entity.originalType;
            this.entity.script.destroy(this.entity.explosiveType + 'BombController');
            this.entity.bombControllerScript = null;
            this.entity.explosiveType = null;
            this.entity.model.asset = this.entity.originalModelAsset;
            this.entity.model.meshInstances[0].material = this.entity.originalModelMaterial;
            
    } else {
        console.warn('cant switch item to its original form cause item ', this.entity, ' is not explosive');
    }
};


Item.prototype.breakBlock = function(skipDestroyingAnimation, cause) {
    if(this.destroyed) {
        return;
    }         
    
    if(this.entity.itemType === Item.TYPE_EXPLOSIVE && !this.entity.detonated && this.entity.bombControllerScript) {
        Apicontroller.trackStats('bomb_detonated', {
            bomb_type: this.entity.explosiveType
        });
        this.entity.bombControllerScript._detonate();
        return;
    }
    
    Apicontroller.trackStats('item_destroyed', {
        item_type: this.entity.itemType,
        cause: cause
    });
    
    const diffuseMapTint = this.entity.model.model.meshInstances[0].getParameter('material_diffuse') && this.entity.model.model.meshInstances[0].getParameter('material_diffuse').data;
    
    const pos = this.entity.getPosition();
    if(!skipDestroyingAnimation) {
        switch(this.entity.itemType) {
            case Item.TYPE_GLASS:
                this.app.fire(EventTypes.PLAY_AUDIO, Utils.getRandomItem(['glassHit01', 'glassHit02']), 50);
                break;
            case Item.TYPE_CONCRETE:
                this.app.fire(EventTypes.PLAY_AUDIO, 'concreteDestroyed', 120);
                break;      
            case Item.TYPE_METAL:
                this.app.fire(EventTypes.PLAY_AUDIO, Utils.getRandomItem(['metalDestroyed01', 'metalDestroyed02']), 100);
                break;  
            case Item.TYPE_WOOD:
                this.app.fire(EventTypes.PLAY_AUDIO, 'woodDestroyed', 100);
                break;  
        }
        this.app.fire(EventTypes.BURST_PARTICLES, pos.x, pos.y, pos.z, GameConfig.getAttribute('breakItemNumParticles')[ScaleManager.qualityIndex], this.entity.model.meshInstances[0].material, diffuseMapTint || null);
        if(Math.random() < GameConfig.getAttribute('rubbleAppearingProbability')) {
            this.app.fire(EventTypes.SPAWN_RUBBLE, this.entity);
        }
    }
    this.destroyed = true;
    this.entity.destroy();
    this.app.fire(EventTypes.ITEM_DESTROYED, pos);
    this.app.fire(EventTypes.WAKE_UP_BODIES);
};


Item.prototype.restrictAngularVelocity = function() {
    const angularVelocity = this.entity.rigidbody.angularVelocity;
    
    /* method one */
    let velocityModified = false;
    if(Math.abs(angularVelocity.x) > GameConfig.getAttribute('itemAngularVelocityLimit').x) {
       velocityModified = true;
       angularVelocity.x = Math.sign(angularVelocity.x) * GameConfig.getAttribute('itemAngularVelocityLimit').x;       
    }
     if(Math.abs(angularVelocity.y) > GameConfig.getAttribute('itemAngularVelocityLimit').y) {
       velocityModified = true;
       angularVelocity.y = Math.sign(angularVelocity.y) * GameConfig.getAttribute('itemAngularVelocityLimit').y;       
    }
     if(Math.abs(angularVelocity.z) > GameConfig.getAttribute('itemAngularVelocityLimit').z) {
       velocityModified = true;
       angularVelocity.z = Math.sign(angularVelocity.z) * GameConfig.getAttribute('itemAngularVelocityLimit').z;       
    }
       
    if(velocityModified) {        
        this.entity.rigidbody.angularVelocity = angularVelocity.clone();
    }
};

Item.prototype.getLinearSize = function() {
    if(this.entity.collision) {
        if(this.entity.collision.type === 'box') {
            const halfExtents = this.entity.collision.halfExtents;
            return Math.max(halfExtents.x * 2, halfExtents.y * 2, halfExtents.z * 2);
        } else if(this.entity.collision.type === 'cylinder') {
             return Math.max(this.entity.collision.radius * 2, this.entity.collision.height);
        } 
    }
    const scale = this.entity.getLocalScale();
    return Math.max(scale.x, scale.y, scale.z);
};

Item.prototype.onCollisionStart = function (result) {
    if (result.other.rigidbody) {
                
        if(result.other.name.indexOf("Ground") != -1 || result.other.name.indexOf("Terrain") != -1) {
            this.breakBlock(false, "fall_down");
        } else if(this.entity.rigidbody && this.entity.itemType === Item.TYPE_GLASS && (this.entity.rigidbody.linearVelocity.length() > 5 || result.other.rigidbody.linearVelocity.length() > 5)) {
            this.breakBlock(false, "fall_down");
        } else if(this.entity.rigidbody && this.entity.rigidbody.linearVelocity.length() > 3) {            
           
            if(this.entity.itemType === Item.TYPE_CONCRETE) {
                this.app.fire(EventTypes.PLAY_AUDIO, 'concreteImpact', 100);
            }
            if(this.entity.itemType === Item.TYPE_WOOD) {
                this.app.fire(EventTypes.PLAY_AUDIO, 'woodImpact', 150);
            }
            if(this.entity.itemType === Item.TYPE_METAL) {
                this.app.fire(EventTypes.PLAY_AUDIO, 'metalImpact', 150);
            }
        }
    }
};



// levelBuilder.js
/* jshint esversion: 6 */
var LevelBuilder = pc.createScript('levelBuilder');

LevelBuilder.prototype.initialize = function() {
    this.objectsContainer = this.entity.findByName('ObjectsContainer');
    this.standsContainer = this.entity.findByName('StandsContainer');
    
    this.app.on(EventTypes.LOAD_STAGE, this.loadStage, this);
    this.app.on(EventTypes.UPDATE_BOMB_POINTS_AMOUNT, this.onPointsAmountUpdated, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
};

LevelBuilder.prototype.update = function(dt) {
    
};

LevelBuilder.prototype.reset = function() {
    for(let i = this.objectsContainer.children.length - 1; i > -1; i--) {
        this.objectsContainer.children[i].destroy();
    }
    for(let i = this.standsContainer.children.length - 1; i > -1; i--) {
        this.standsContainer.children[i].destroy();
    }
};

LevelBuilder.prototype.loadStage = function(levelIndex, stageIndex) {
    famobi.log(`loading stage ${levelIndex}-${stageIndex}`);
    
    const stagePrefab = this.entity.script.levelManager.getStagePrefab(levelIndex, stageIndex);
    const customLevel = false;
    const applyRotation = this.entity.script.levelManager.applyLevelRotation;
    if(!stagePrefab) {
        return;
    }
       
    /* load balls amount */
    const totalLevels = this.entity.script.levelManager.getNumLevels();
    const difficultyKey = levelIndex <= totalLevels ? 'x' : levelIndex <= (2 * totalLevels) ? 'y' : 'z';
    let bombPoints = stagePrefab.script.stageConfig.bombPoints[difficultyKey];
    
    if(isForcedMode() && Number.isInteger(getForcedModeProperties().override.bomb_points)) {
        
        if(isUnlimitedPoints()) {
            this.forcedModePoints = bombPoints = 1000;
            LevelBuilder.unlimitedBombPoints = true;
        } else {
            if(this.forcedModePoints === undefined) {
                this.forcedModePoints = getForcedModeProperties().override.bomb_points;
            }
            bombPoints = this.forcedModePoints;
        }
    }

    this.app.fire(EventTypes.SET_BOMB_POINTS_AMOUNT, bombPoints, bombPoints);
    
    /* cloning children only */
    const cloneChildren = entity => {
        if(entity.model) {
            var originTransform = entity.getWorldTransform();
            var cloned = entity.clone();
            cloned.setPosition(entity.getPosition().clone());
            cloned.setLocalEulerAngles(originTransform.getEulerAngles());
            cloned.setLocalScale(originTransform.getScale());
            if(cloned.script && cloned.script.item) {
                this.objectsContainer.addChild(cloned);
            } else {
                this.standsContainer.addChild(cloned);
            }            
        } else {
            const originalAngles = (customLevel && applyRotation && entity.script && entity.script.groupConfig) ? entity.getLocalEulerAngles().clone() : null;
            if(originalAngles) {
                entity.setLocalEulerAngles(originalAngles.x, entity.script.groupConfig.rotation, originalAngles.z);
            }
            for(let i = entity.children.length - 1; i > - 1; i--) {
                cloneChildren(entity.children[i]);
            }
            if(originalAngles) {
                entity.setLocalEulerAngles(originalAngles.x, originalAngles.y, originalAngles.z);
            }
        }
    };    
    cloneChildren(stagePrefab);
    this.app.fire('preloader:hide');   
    
    this.paintItems();
    this.animateAppearing();
    
    this.app.fire(EventTypes.CALCULATE_INITIAL_OBJECTS_AMOUNT);
};

LevelBuilder.prototype.onPointsAmountUpdated = function(points) {
    if(isForcedMode() && Number.isInteger(getForcedModeProperties().override.bomb_points)) {
        if(this.forcedModePoints !== undefined) {
            this.forcedModePoints = points;
        }
    }
};

LevelBuilder.prototype.paintItems = function() {
    if(GameConfig.getAttribute('enableTint')) {
        const minHeight = this.objectsContainer.children.reduce((min, currentItem) => Math.min(min, currentItem.getPosition().y), 1000);
        const maxHeight = this.objectsContainer.children.reduce((max, currentItem) => Math.max(max, currentItem.getPosition().y), -1000);
        this.objectsContainer.children.forEach(child => child.script.item.paint((child.getPosition().y - minHeight) / (maxHeight - minHeight)));
    }
};

LevelBuilder.prototype.animateAppearing = function() {
    this.objectsContainer.children.forEach(c => c.rigidbody.enabled = false);
    this.standsContainer.children.forEach(c => c.rigidbody.enabled = false);
    
    this.app.fire(EventTypes.STAGE_LOADING_STARTED);
    
    this.entity.setLocalScale(0.6, 0.6, 0.6);
    this.entity.tween(this.entity.getLocalScale())
       .to(new pc.Vec3(1, 1, 1), 0.14, pc.Linear)
        .start();
    
    this.entity.setLocalPosition(0, -2, 0);
    this.entity.tween(this.entity.getLocalPosition())
        .to(new pc.Vec3(0, 0, 0), 0.14, pc.Linear)
        .on('complete', () => {
            this.objectsContainer.children.forEach(c => c.rigidbody.enabled = true);
            this.standsContainer.children.forEach(c => c.rigidbody.enabled = true);
            this.app.fire(EventTypes.STAGE_LOADED);
         })
        .start();    
};


// compoundCollider.js
var CompoundCollider = pc.createScript('compoundCollider');

CompoundCollider.prototype.initialize = function() {

    var bodyShape = new Ammo.btCompoundShape();
    var entityScale = this.entity.getLocalScale();
    
    var children = this.entity.findByTag("compound-shape");

    children.forEach(function(child) {    
        var childPosition = child.getLocalPosition();
        var childRotation = child.getLocalRotation();
        var childSize = child.collision.data.halfExtents;
        
        var childShape = new Ammo.btBoxShape(new Ammo.btVector3(childSize.x, childSize.y, childSize.z));
        var rotation = new Ammo.btQuaternion(childRotation.x, childRotation.y, childRotation.z, childRotation.w);
        var position = new Ammo.btVector3(childPosition.x * entityScale.x, childPosition.y * entityScale.y, childPosition.z * entityScale.z);
        bodyShape.addChildShape(new Ammo.btTransform(rotation, position), childShape);
        
        Ammo.destroy(rotation);
        Ammo.destroy(position);
        child.destroy();
    });
     
    var entityPosition = this.entity.getPosition();
    var position = new Ammo.btVector3(entityPosition.x, entityPosition.y, entityPosition.z);
    
    var originQuaternion = this.entity.getRotation();
    var state = new Ammo.btDefaultMotionState(new Ammo.btTransform(new Ammo.btQuaternion(originQuaternion.x, originQuaternion.y, originQuaternion.z, originQuaternion.w), position));
    
    var fallInertia = new Ammo.btVector3(0, 0, 0);
    bodyShape.calculateLocalInertia(this.entity.rigidbody.mass, fallInertia);
    var rigidBodyCI = new Ammo.btRigidBodyConstructionInfo(this.entity.rigidbody.mass,state, bodyShape, fallInertia);
    
    this.rigidbody = new Ammo.btRigidBody(rigidBodyCI);
    this.rigidbody.setRestitution(this.entity.rigidbody.restitution);
    this.rigidbody.setFriction(this.entity.rigidbody.friction);
    this.rigidbody.setDamping(this.entity.rigidbody.linearDamping, this.entity.rigidbody.angularDamping);
    
    var linearFactor = this.entity.rigidbody.linearFactor;
    var angularFactor = this.entity.rigidbody.angularFactor;
    
    this.rigidbody.setLinearFactor(new Ammo.btVector3(linearFactor.x, linearFactor.y, linearFactor.z));
    this.rigidbody.setAngularFactor(new Ammo.btVector3(angularFactor.x, angularFactor.y, angularFactor.z));
    
    this.rigidbody.entity = this.entity;
    this.app.systems.rigidbody.dynamicsWorld.addRigidBody(this.rigidbody);
    this.entity.rigidbody.body = this.rigidbody;
    
    Ammo.destroy(position);
    Ammo.destroy(fallInertia);
};

CompoundCollider.prototype.update = function(dt) {    
    // var trans = new Ammo.btTransform();
    // this.rigidbody.getMotionState().getWorldTransform(trans);  
    // var pos = trans.getOrigin();
    // var rot = trans.getRotation();
    // this.entity.setRotation(new pc.Quat(rot.x(), rot.y(), rot.z(), rot.w()));
    // this.entity.setPosition(pos.x(), pos.y(), pos.z());
    // Ammo.destroy(trans);
    // Ammo.destroy(pos);
    // Ammo.destroy(rot);
};

// particlesController.js
/* jshint esversion: 6 */
var ParticlesController = pc.createScript('particlesController');

ParticlesController.attributes.add('cacheSize', {
    description: 'num particles in cache',
    type: 'number',
    default: 150
});

ParticlesController.prototype.initialize = function() {
    this.particleCache = [];
    this.activeParticles = [];
    this.prepareCache();
    this.app.on(EventTypes.BURST_PARTICLES, this.createExplosion, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
    this.on("destroy", this.destroy, this);
};

ParticlesController.prototype.reset = function() {
    for(let i = this.activeParticles.length - 1; i > -1; i--) {
        this.resetPaticle(this.activeParticles[i]);
    }
};

ParticlesController.prototype.destroy = function() {
    this.app.off(EventTypes.EXPLOSION, this.createExplosion, this);
};

ParticlesController.prototype.update = function(dt) {
    this.activeParticles.forEach(child => this.updateChild(child, dt));
};

ParticlesController.prototype.createExplosion = function(x, y, z, numParticles, material, diffuseMapTintArray) {
    numParticles = numParticles || 6;
    if(this.particleCache && this.particleCache.length < this.cacheSize * 0.6) {
        numParticles = Math.floor(pc.math.random(2, Math.max(2, Math.floor(numParticles / 2))));
    }
    for(let i = 0; i < numParticles; i++) {
        this.addParticle(x, y, z, material, diffuseMapTintArray);
    }
};

ParticlesController.prototype.updateChild = function(child, dt) {
   //position
   const pos = child.getPosition();
   pos.x += child.speedX * dt;
   pos.y += child.speedY * dt;
   pos.z += child.speedZ * dt;
   child.setPosition(pos);
   child.speedY += child.gravity * dt;

   //scale
   child.currentScale += child.scaleSpeed * dt;
   child.scaleSpeed += child.scaleAcceleration * dt;
   if(child.currentScale <= 0) {
       child.currentScale = 0;
       child.completed = true;
   }
   child.setLocalScale(child.currentScale, child.currentScale, child.currentScale);

    if(child.completed) {
       this.resetPaticle(child);
   }
};


ParticlesController.prototype.addParticle = function(x, y, z, material, diffuseMapTintArray) {
    let particle;

    if(this.particleCache.length > 0) {
        particle = this.particleCache.splice(this.particleCache.length - 1, 1)[0];
    } else {
        particle = this.app.root.findByName("ObjectsPrefabs").findByName("Particle").clone();
        this.entity.addChild(particle);
    }

    particle.enabled = true;
    particle.model.meshInstances[0].material = material;
    if(diffuseMapTintArray) {
        particle.model.meshInstances[0].setParameter('material_diffuse', diffuseMapTintArray);
    } else {
        particle.model.meshInstances[0].deleteParameter('material_diffuse');
    }
    particle.setPosition(x, y, z);
    particle.setLocalEulerAngles(pc.math.random(-180, 180), pc.math.random(-180, 180), pc.math.random(-180, 180));
    particle.speedX = diffuseMapTintArray ? pc.math.random(-4, 4) : pc.math.random(-6, 6);
    particle.speedY = diffuseMapTintArray ? pc.math.random(0, 5) : pc.math.random(-2, 10);
    particle.speedZ = diffuseMapTintArray ? pc.math.random(-4, 4) : pc.math.random(-6, 6);
    particle.gravity = pc.math.random(-25, -15);        
    particle.currentScale = pc.math.random(0.2, 0.4);
    particle.setLocalScale(particle.currentScale, particle.currentScale, particle.currentScale);
    particle.scaleSpeed = pc.math.random(1.0, 1.4);
    particle.scaleAcceleration = pc.math.random(-10, -5);
    particle.completed = false;

    this.activeParticles.push(particle);
};


ParticlesController.prototype.resetPaticle = function(particle) {
    const index = this.activeParticles.indexOf(particle);
    if(index != -1) {
        this.activeParticles.splice(index, 1);
    }
    particle.enabled = false;
    particle.setPosition(0, -50, 0);
    this.particleCache.push(particle);
};


ParticlesController.prototype.prepareCache = function() {
    this.particleCache = [];
    const basicParticle = this.app.root.findByName('ObjectsPrefabs').findByName("Particle");
    for(let i = 0; i < this.cacheSize; i++) {
        const particle = basicParticle.clone();
        particle.enabled = false;
        particle.setPosition(0, -50, 0);
        particle.completed = true;
        this.entity.addChild(particle);
        this.particleCache.push(particle);
    }
    
    famobi.log("Prepared ", this.particleCache.length, " particles");
};

// eventTypes.js
var EventTypes = pc.createScript('eventTypes');

/* Preloader */
EventTypes.PRELOADER_FINISHED = 'preloader:finished';

/* Input */
EventTypes.INPUT_DOWN = 'input:down';

/* Physics */
EventTypes.WAKE_UP_BODIES = 'physics:activateBodies';

/* General */
EventTypes.SAVE_APP = 'app:save';
EventTypes.SAVE_LEVELS = 'levels:save';
EventTypes.POSTINITIALIZE = 'postinitialize';

/* Bombs */
EventTypes.BOMB_PLACED = 'bomb:placed';
EventTypes.BOMB_REMOVED = 'bomb:removed';
EventTypes.NOT_ENOUGH_BOMB_POINTS = 'bomb:notEnoughPoints';

/* Powerups */
EventTypes.ACTIVATE_EARTHQUAKE = 'powerup:activate';
EventTypes.UPDATE_POWERUP_AVAILABILITY = 'powerup:updateAvailability';
EventTypes.SHOW_EARTHQUAKE_HELPER = 'powerup:showHelper';

/* Progress bar */
EventTypes.CALCULATE_INITIAL_OBJECTS_AMOUNT = 'level:calculateItems';
EventTypes.LEVEL_PROGRESS = 'level:progress';

/* Effects */
EventTypes.SHOCKWAVE = 'shockwave:start';

/* Rubble */
EventTypes.SPAWN_RUBBLE = 'rubble:spawn';

/* Levels */
EventTypes.LOAD_NEXT_LEVEL = 'level:next';
EventTypes.RESTART_CURRENT_LEVEL = 'level:restart';
EventTypes.LEVEL_START = 'level:start';
EventTypes.LEVEL_RESET = 'level:reset';
EventTypes.LEVEL_COMPLETED = 'level:completed';
EventTypes.STAGE_COMPLETED = 'stage:completed';
EventTypes.STAGE_FAILED = 'stage:failed';
EventTypes.LOAD_STAGE = 'stage:load';
EventTypes.STAGE_LOADED = 'stage:loaded';
EventTypes.STAGE_LOADING_STARTED =  'stage:loadingStarted';

/* Worlds */
EventTypes.CHANGE_WORLD = 'world:change';

/* Scores */
EventTypes.ADD_SCORES = 'scores:add';
EventTypes.RESET_SCORES = 'scores:reset';
EventTypes.SCORES_CHANGED = 'scores:changed';
EventTypes.MAX_SCORES_CHANGED = 'maxscores:changed';
EventTypes.SHOW_SCORES_EFFECT = 'scores:showEffect';

/* Tutorial */
EventTypes.START_TUTORIAL = 'tutorial:start';

/* Game flow */
EventTypes.GAME_STARTED = 'gameplay:started';

/* Bomb points */
EventTypes.SET_BOMB_POINTS_AMOUNT = 'bombPoints:setAmount';
EventTypes.UPDATE_BOMB_POINTS_AMOUNT = 'bombPoints:updateAmount';

/* Items */
EventTypes.ITEM_DESTROYED = 'item:destroyed';

/* Effects */
EventTypes.BURST_PARTICLES = 'particles:burst';
EventTypes.ADD_EXPLOSION_EFFECT = 'explosion.addEffect';
EventTypes.EXPLOSION = 'explosion';
EventTypes.HORIZONTAL_EXPLOSION = 'explosion:horizontal';
EventTypes.IMPLOSIVE_EXPLOSION = 'explosion:implosive';

/* Camera */
EventTypes.PLAY_PRESSED = 'game:playPressed';
EventTypes.SHAKE_CAMERA = 'camera:shake';
EventTypes.REBOUND_CAMERA = 'camera:rebound';

/* Audio */
EventTypes.ENABLE_AUDIO = 'audio:enable';
EventTypes.DISABLE_AUDIO = 'audio:disable';
EventTypes.PLAY_AUDIO = 'audio:play';
EventTypes.STOP_AUDIO = 'audio:stop';
EventTypes.MUTE_SOUND = 'audio:mute';
EventTypes.UNMUTE_SOUND = 'audio:unmute';
EventTypes.AUDIO_STATE_CHANGED = 'audio:stateChanged';

/* Quality */
EventTypes.QUALITY_CHANGED = 'quality:changed';
EventTypes.QUALITY_UPDATE = 'quality:update';
EventTypes.QUALITY_NEXT = 'quality:next';
EventTypes.VIEWPORT_RESIZE = 'viewport:resize';
EventTypes.MEASURE_PERFORMANCE = 'performance:measure';

/* Buttons */
EventTypes.EXPLOSION_TYPE_SELECTED = 'explosion:selected';

// gameplayController.js
/* jshint esversion: 6 */
var GameplayController = pc.createScript('gameplayController');

GameplayController.attributes.add('tntMaterial', {
    type: 'asset',
    assetType: 'material'   
});

GameplayController.attributes.add('dynamitePrefab', {
    type: 'entity' 
});

GameplayController.attributes.add('implosivePrefab', {
    type: 'entity' 
});

GameplayController.attributes.add('horizontalPrefab', {
    type: 'entity' 
});

GameplayController.attributes.add('punchPrefab', {
    type: 'entity' 
});

GameplayController.attributes.add('molotovPrefab', {
    type: 'entity' 
});


GameplayController.prototype.initialize = function() {
    GameplayController.app = this.app;
    
    this.initGameProperties();

    this.levelManager = this.app.root.findByName("GameplayContainer").script.levelManager;
    
    this.skipTargettingEntityNames = ['Ground'];
    this.denyTargettingEntityNames = [];
    
    this.app.on(EventTypes.STAGE_COMPLETED, this.handleStageCompleted, this);
    this.app.on(EventTypes.STAGE_FAILED, this.handleStageFailed, this);
    this.app.on(EventTypes.LOAD_NEXT_LEVEL, this.loadNextLevel, this);
    this.app.on(EventTypes.RESTART_CURRENT_LEVEL, this.restartCurrentLevel, this);
    this.app.on(EventTypes.POSTINITIALIZE, this.gameLoaded, this);
    this.app.on(EventTypes.INPUT_DOWN, this.handleInputDown, this);
};

GameplayController.prototype.update = function(dt) {
    
};

GameplayController.prototype.initGameProperties = function() {
 
    //State variables
    GameplayController.currentLevel = 1;
    GameplayController.currentStage = 0;
    
    //Activity
    GameplayController.gameStarted = false;
    
    //Powerup
    GameplayController.hasPowerup = true;
    
    //Session vars
    GameplayController.totalStages = 0;
        
    /* load saved data from storage */
    LocalStorageController.loadData();
};

GameplayController.prototype.gameLoaded = function() {
    this.app.fire(EventTypes.CHANGE_WORLD);
    
    if(TutorialController.TUTORIAL_COMPLETED) {
        this.startLevel(GameplayController.currentLevel);
    } else {
        famobi.log('loading tutorial level');
        this.startLevel(0);
    }

};

GameplayController.prototype.resetLevel = function() {
   this.app.fire(EventTypes.RESET_SCORES);
   GameplayController.currentScores = 0;
   GameplayController.currentStage = 0;
    
   GameplayController.nextBombID = 0;     
    
   GameplayController.currentSession = {
       currentBombType: 'dynamite',
       bombPoints: 0,
       totalBombPoints: 0,
       powerupUsed: false
   };
};


GameplayController.prototype.handleInputDown = function(screenPosition) {   
    const camera = this.app.root.findByName("Camera");
    var from = camera.camera.screenToWorld(screenPosition.x, screenPosition.y, camera.camera.nearClip);
    var to = camera.camera.screenToWorld(screenPosition.x, screenPosition.y, camera.camera.farClip);
    
    var raycastResults = Utils.raycastAllAdvanced(from, to).filter(result => this.skipTargettingEntityNames.indexOf(result.entity.name) === -1);
    var result = raycastResults.length > 0 ? raycastResults[0] : null;
    if(raycastResults.find(r => this.denyTargettingEntityNames.indexOf(r.entity.name) != -1)) {
        result = null;
    }
            
    if(GameplayController.gameStarted && result && result.entity && !WindowManager.hasOpenedWindows()) {
        this.app.root.findByName('GameplayContainer').script.levelController.plantBomb(result.entity, result.point, result.normal);
    }
};

GameplayController.prototype.loadNextLevel = function() {
    this.app.fire(EventTypes.CHANGE_WORLD);
    this.startLevel(GameplayController.currentLevel + 1);
    this.app.fire(EventTypes.SAVE_APP);
};

GameplayController.prototype.restartCurrentLevel = function() {   
    this.startLevel(GameplayController.currentLevel, true);
};

GameplayController.prototype.startLevel = function(levelIndex, trackRestart) {
    this.resetLevel();
    
    GameplayController.currentLevel = levelIndex;
    GameplayController.totalStages = GameplayController.currentLevel === 0 ? this.app.root.findByName('GameplayContainer').script.levelManager.stages[0].length : 1;
  
    Apicontroller.trackLevelStart({"level": levelIndex});
    
    if(window.famobi_analytics) {
        window.famobi_analytics.trackEvent(trackRestart ? 'EVENT_LEVELRESTART' : 'EVENT_LEVELSTART', {levelName: '' + levelIndex});
    }
    
    this.loadStage(0);
};

GameplayController.prototype.loadStage = function(stageIndex) {
    this.resetLevel();
    GameplayController.currentStage = stageIndex;
    this.app.fire(EventTypes.LEVEL_RESET);
    this.app.fire(EventTypes.LOAD_STAGE, GameplayController.currentLevel, GameplayController.currentStage, GameplayController.totalStages);
};

GameplayController.prototype.handleStageCompleted = function() {
    
    Apicontroller.trackStats("level_completed");
    
    if(isEndlessMode()) {
         if(GameplayController.currentStage < GameplayController.totalStages - 1) {
            this.loadStage(GameplayController.currentStage + 1);
         } else {
             this.startLevel(GameplayController.currentLevel + 1);
         }
         return;
    } 
    
    Apicontroller.handleLevelEndEvent("success", ScoreManager.instance.getScores(), () => {
         if(isForcedMode()) {
            famobi.log("Level is completed in forced mode");
            this.app.timeScale = 0;
            this.app.applicationPaused = true;
            this.app.applicationFinished = true;
         } else {
             if(GameplayController.currentStage < GameplayController.totalStages - 1) {
                this.loadStage(GameplayController.currentStage + 1);
             } else {
                WindowManager.showResults();
                const eventDetails = {
                    "success": true,
                    "movesAvailable":  this.app.root.findByName('GameplayContainer').script.levelController.totalBombPoints,                   
                    "movesLeft": this.app.root.findByName('GameplayContainer').script.levelController.bombPoints       
                };
                if(GameplayController.currentSession.powerupUsed) {
                    eventDetails.powerups =  {'earthquake': true};
                }
                Apicontroller.trackLevelEnd(eventDetails);
            }
        }
    });    
   
};

GameplayController.prototype.handleStageFailed = function() {    
    
    Apicontroller.handleLevelEndEvent("fail", ScoreManager.instance.getScores(), () => {
         if(isForcedMode()) {
            famobi.log("Level is failed in forced mode");
            this.app.timeScale = 0;
            this.app.applicationPaused = true;
            this.app.applicationFinished = true;
         } else {
            WindowManager.showDefeat();
            const eventDetails = {
                "success": false,
                "movesAvailable":  this.app.root.findByName('GameplayContainer').script.levelController.totalBombPoints,                   
                "movesLeft": this.app.root.findByName('GameplayContainer').script.levelController.bombPoints       
            };
            if(GameplayController.currentSession.powerupUsed) {
                eventDetails.powerups =  {'earthquake': true};
            }
            Apicontroller.trackLevelEnd(eventDetails);
        }
    });   
    
 
};


// levelController.js
/* jshint esversion: 6 */
var LevelController = pc.createScript('levelController');

LevelController.prototype.initialize = function() {
    this.objectsContainer = this.entity.findByName('ObjectsContainer');
    this.standsContainer = this.entity.findByName('StandsContainer');   
    this.rubbleContainer = this.entity.findByName('RubbleContainer');   
    this.defeatCountdownText = this.app.root.findByName('UIContainer').findByName('DefeatCountdownText');
    
    this.defeatTimer = {value: 0, active: false};
    this.victoryTimer = {value: 0, active: false};
    this.levelCompleted = false;
    this.earthquakeTimer = 0;
    this.bombsPlaced = {};
    this.comboCounter = 0;
    this.bombPoints = 0;
    this.totalBombPoints = 0;
    this.currentBombType = null;

    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
    this.app.on(EventTypes.ITEM_DESTROYED, this.handleItemDestroyed, this);
    this.app.on(EventTypes.WAKE_UP_BODIES, this.wakeUpBodies, this);
    
    this.app.on(EventTypes.SET_BOMB_POINTS_AMOUNT, this.setBombPointsAmount, this);
    this.app.on(EventTypes.BOMB_PLACED, this.handleBombPlaced, this);
    this.app.on(EventTypes.BOMB_REMOVED, this.handleBombRemoved, this);
        
    this.app.on(EventTypes.EXPLOSION_TYPE_SELECTED, this.handleBombTypeChanged, this);
    
    this.app.on(EventTypes.EXPLOSION, this.createExplosion, this);
    this.app.on(EventTypes.HORIZONTAL_EXPLOSION, this.createHorizontalExplosion, this);
    this.app.on(EventTypes.IMPLOSIVE_EXPLOSION, this.createImplosiveExplosion, this);
    
    this.app.on(EventTypes.CALCULATE_INITIAL_OBJECTS_AMOUNT, this.calculateChildren, this);
    
    this.app.on(EventTypes.ACTIVATE_EARTHQUAKE, this.activateEarthquake, this);
    this.app.on(EventTypes.UPDATE_POWERUP_AVAILABILITY, this.checkPowerupStatus, this);
};


LevelController.prototype.update = function(dt) {
    if(this.earthquakeTimer > 0) {
        this.earthquakeTimer -= dt;
        const earthquakeForce = GameConfig.getAttribute('earthquakeForce');
        this.objectsContainer.children.forEach(child => child.rigidbody && child.rigidbody.applyImpulse(new pc.Vec3(pc.math.random(-earthquakeForce, earthquakeForce) * child.rigidbody.mass, 0, pc.math.random(-earthquakeForce, earthquakeForce) * child.rigidbody.mass), new pc.Vec3(0, 0, 0)));  
        this.rubbleContainer.children.forEach(child => child.rigidbody && child.rigidbody.applyImpulse(new pc.Vec3(pc.math.random(-earthquakeForce, earthquakeForce) * child.rigidbody.mass, 0, pc.math.random(-earthquakeForce, earthquakeForce) * child.rigidbody.mass), new pc.Vec3(0, 0, 0)));  
        return;
    }
    
    if(WindowManager.hasOpenedWindows()) {
        return;
    }
    
    if(this.victoryTimer.active) {
        this.victoryTimer.value -= dt;
        if(this.victoryTimer.value <= 0) {
            this.victoryTimer.active = false;
            this.levelCompleted = true;
            this.app.fire(EventTypes.STAGE_COMPLETED);
        } 
    } else if(this.defeatTimer.active) {
        this.defeatTimer.value -= dt;
        if(this.defeatTimer.value <= 0) {
            this.defeatTimer.active = false;
            const replaceableBlocksLeft = this.objectsContainer.children.reduce((sum, current) => sum + (current.replaceable ? 1 : 0), 0);
            this.app.fire(EventTypes.STAGE_FAILED, replaceableBlocksLeft > 0);
        } 
    }  
    
    /* Countdown text */
    if(this.defeatTimer.active) {
        this.defeatCountdownText.enabled = true;

        if(this.lastDefeatTimer != Math.ceil(this.defeatTimer.value)) {
            this.lastDefeatTimer = Math.ceil(this.defeatTimer.value);
            this.defeatCountdownText.element.text = '' + this.lastDefeatTimer;

            this.app.fire(EventTypes.PLAY_AUDIO, this.lastDefeatTimer % 2 === 0 ? "tic" : "tac");

            this.defeatCountdownText.element.opacity = 1;
            this.defeatCountdownText.tween(this.defeatCountdownText.element)
                .to({opacity: 0}, 0.95, pc.SineIn)
                .start();

            this.defeatCountdownText.setLocalScale(1, 1, 1);
            this.defeatCountdownText.tween(this.defeatCountdownText.getLocalScale())
                .to(new pc.Vec3(2.2, 2.2, 2.2), 0.95, pc.SineOut)
                .start();
        }
    } else {
        this.defeatCountdownText.enabled = false;
    }    
};

LevelController.prototype.reset = function() {
    this.defeatTimer = {value: 0, active: false};
    this.victoryTimer = {value: 0, active: false};
    this.levelCompleted = false;
    this.earthquakeTimer = 0;
    this.bombsPlaced = {};
    this.comboCounter = 0;
    this.bombPoints = 0;
    this.totalBombPoints = 0;
    
    Object.keys(Constants.BOMB_TYPES).forEach(bombType => this.bombsPlaced[bombType] = 0);
};

LevelController.prototype.calculateChildren = function() {
    this.initialItemsAmount = this.objectsContainer.children.length;
};


LevelController.prototype.checkPowerupStatus = function(powerupActivated) {
    if(this.defeatTimer.active) {
        if(powerupActivated && GameplayController.hasPowerup) {
            this.defeatTimer.value = GameConfig.getAttribute('defeatTimer');
        }
    }    
};

LevelController.prototype.setBombPointsAmount = function(bombPoints, totalPoints) {   
    if(isUnlimitedPoints()) {
        this.bombPoints = Math.max(this.bombPoints, bombPoints);
    } else {
         this.bombPoints = bombPoints;
    }
    if(totalPoints) {
        this.totalBombPoints = totalPoints;
    }
    this.app.fire(EventTypes.UPDATE_BOMB_POINTS_AMOUNT, this.bombPoints);
};

LevelController.prototype.handleBombPlaced = function(bombType) {
    const bombCost = this.getBombPrice(bombType);
    this.bombsPlaced[bombType] += 1;
    if(this.bombPoints >= bombCost) {
        this.setBombPointsAmount(this.bombPoints - bombCost);
    }

};

LevelController.prototype.handleBombRemoved = function(bombType) {
    this.bombsPlaced[bombType] -= 1;
    const bombCost = this.getBombPrice(bombType);
    this.setBombPointsAmount(this.bombPoints + bombCost);
};


LevelController.prototype.activateEarthquake = function() {
    this.app.fire(EventTypes.PLAY_AUDIO, 'earthquake');
    this.earthquakeTimer = GameConfig.getAttribute('earthquakeDuration');
    
    Apicontroller.trackStats(`earthquake`);
    
    const blocksLeft = this.objectsContainer.children.filter(child => child && child.script && child.script.item);
    if(blocksLeft.length <= 7) {
        blocksLeft.forEach(block => block.delayedCall( pc.math.random(0.1, 0.9) * GameConfig.getAttribute('earthquakeDuration') * 1000, () =>  block.script.item.breakBlock(false, "earthquake")));
    } else {
        blocksLeft.forEach(block => {
            if(Math.random() < 0.1)  {
                block.delayedCall( pc.math.random(0.1, 0.9) * GameConfig.getAttribute('earthquakeDuration') * 1000, () =>  block.script.item.breakBlock(false, "earthquake"));
            }  
        });
    }
    
    if(this.defeatTimer.active) {
        this.defeatTimer.active = false;
        this.defeatTimer.value = GameConfig.getAttribute('defeatTimer');
    }
};


LevelController.prototype.handleItemDestroyed = function(position) {
    const scores = GameConfig.getAttribute('scoresPerItem');// * (++this.comboCounter);
    this.app.fire(EventTypes.ADD_SCORES, scores, position); 
    
    const levelProgress = 1 - this.objectsContainer.children.length / this.initialItemsAmount;
    this.app.fire(EventTypes.LEVEL_PROGRESS, levelProgress);
    
    if(this.objectsContainer.children.length === 0) {
        if(!this.victoryTimer.active) {
            if(this.defeatTimer.active) {
                this.defeatTimer.active = false;
            }
            this.victoryTimer.active = true;
            this.victoryTimer.value = GameConfig.getAttribute('victoryTimer');
        }
    } else {
        if(!this.victoryTimer.active && !this.levelCompleted) {
            const replaceableBlocksLeft = this.objectsContainer.children.reduce((sum, current) => sum + (current.replaceable ? 1 : 0), 0);
            const notExplodedBombsLeft = this.objectsContainer.children.reduce((sum, current) => sum + (current.itemType === Item.TYPE_EXPLOSIVE ? 1 : 0), 0);
            const hasEnoughBombPointsToPlaceABomb = this.hasEnoughPointsToPlaceABomb();
            if(!this.defeatTimer.active && (replaceableBlocksLeft === 0 || (hasEnoughBombPointsToPlaceABomb === false && notExplodedBombsLeft === 0))) {
                this.defeatTimer.active = true;
                this.defeatTimer.value = GameConfig.getAttribute('defeatTimer');                
                this.app.fire(EventTypes.SHOW_EARTHQUAKE_HELPER);
                
                /* highlight/blink remaining blocks */
                if(GameplayController.currentStage === GameplayController.totalStages - 1) {
                    setTimeout(() => {
                         this.objectsContainer.children.filter(child => child && child.script && child.script.item).forEach(child => child.script.item.blinkRed(0.7, 3, 0.4, pc.Linear));
                    }, 1800);   
                }
             
            }
        }
    } 
};

LevelController.prototype.wakeUpBodies = function() {
    this.objectsContainer.children.forEach(child => {
        if(child.rigidbody && child.rigidbody.enabled && child.rigidbody.type === pc.BODYTYPE_DYNAMIC) {
            child.rigidbody.activate();
        } 
    }); 
};

LevelController.prototype.handleBombTypeChanged = function(bombType) {
    if(Constants.BOMB_TYPES.hasOwnProperty(bombType) === false) {
        console.warn(`Bomb type '${bombType}' does not exist`);
        return;
    }
    this.currentBombType = bombType;
};

LevelController.prototype.hasEnoughPointsToPlaceABomb = function() {
    return Array.from(Object.keys(Constants.BOMB_TYPES)).some(bombType => this.bombPoints >= this.getBombPrice(bombType));
};

LevelController.prototype.getBombPrice = function(bombType) {
    if(isPermanentBombPointsMode()) {
        return +GameConfig.getAttribute(bombType + 'BombPrice');
    } else {
        return +GameConfig.getAttribute(bombType + 'BombPrice') + (this.bombsPlaced[bombType] || 0) * GameConfig.getAttribute('bombPriceIncrement');
    }
};

LevelController.prototype.plantBomb = function(entity, point, normal) {
    if(entity && entity.script && entity.script.item && this.currentBombType) {

        if(!TutorialController.getInstance().isActive() || TutorialController.getInstance().currentStep.isBombPlantingAllowed(entity) || !entity.replaceable) {
        
            if(entity.itemType === Item.TYPE_EXPLOSIVE) {
                entity.script.item.transformIntoOriginalType();
            } else {
                if(this.bombPoints >= this.getBombPrice(this.currentBombType)) {
                     entity.script.item.transformIntoExplosive(this.currentBombType);
                     if(TutorialController.getInstance().isActive()) {
                         TutorialController.getInstance().currentStep.dispatchBombPlantingOnItem(entity);
                     }
                } else {
                    this.app.fire(EventTypes.NOT_ENOUGH_BOMB_POINTS);
                }
            }

         }   
        
    } else {       
        //console.warn('bomb can be only place at block, not ', (entity && entity.name));
    }
};

LevelController.prototype.isAccessibleForExplosion = function(worldPosition, childPosition) {
    return Utils.raycastAll(worldPosition, childPosition).map(re => re.name).indexOf('Stand') === -1;
};

LevelController.prototype.createExplosion = function(worldPosition, explosionEffectName) {
    
    const explosionRadius = GameConfig.getAttribute('explosionRadius');
    const demolitionRadius = GameConfig.getAttribute('demolitionRadius');
    const explosionForce = GameConfig.getAttribute('explosionForce');
    
    /* vfx */
    this.app.fire(EventTypes.ADD_EXPLOSION_EFFECT, explosionEffectName || 'Explosion', worldPosition);
    
    /* sfx */
    this.app.fire(EventTypes.PLAY_AUDIO, 'tnt');
    
    /* camera shaking */
    this.app.fire(EventTypes.SHAKE_CAMERA, 0.12, 0.24);
    
    /* explode objects */
    for(let i = this.objectsContainer.children.length - 1; i > -1; i--) {
        const child = this.objectsContainer.children[i];
        if(!child) {
            continue;
        }
        const childPosition = child.getPosition();
        const distance = childPosition.distance(worldPosition);
        
        
        if(distance < demolitionRadius && child.itemType != Item.TYPE_METAL && this.isAccessibleForExplosion(worldPosition, childPosition)) {
            child.script.item.breakBlock(false, "explosion");
        } else if(distance <= explosionRadius && this.isAccessibleForExplosion(worldPosition, childPosition)) {
            child.rigidbody.applyImpulse(childPosition.clone().sub(worldPosition).normalize().scale(explosionForce / Math.pow(Math.max(distance, 1), GameConfig.getAttribute('explosionDampingFactor')) * child.rigidbody.mass), new pc.Vec3(pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05)));   
            if(child.itemType === Item.TYPE_GLASS) {
                child.script.item.breakBlock(false, "explosion");
            } 
        }
    }

    this.objectsContainer.children.forEach(child => child.rigidbody.activate());
};

LevelController.prototype.createImplosiveExplosion = function(worldPosition, explosionEffectName) {
    
    const explosionRadius = GameConfig.getAttribute('explosionRadius') * 1.25;
    const demolitionRadius = GameConfig.getAttribute('demolitionRadius') * 1.25;
    const explosionForce = GameConfig.getAttribute('explosionForce') * 1.25;
    
    /* vfx */
    this.app.fire(EventTypes.ADD_EXPLOSION_EFFECT, explosionEffectName || 'Explosion', worldPosition);
    
    /* sfx */
    this.app.fire(EventTypes.PLAY_AUDIO, 'implosiveExplosion');
    
    /* camera shaking */
    this.app.fire(EventTypes.SHAKE_CAMERA, 0.15, 0.27);
    
    /* explode objects */
    for(let i = this.objectsContainer.children.length - 1; i > -1; i--) {
        const child = this.objectsContainer.children[i];
        if(!child) {
            continue;
        }
        const childPosition = child.getPosition();
        const distance = childPosition.distance(worldPosition);
        if(distance < demolitionRadius && child.itemType != Item.TYPE_METAL && this.isAccessibleForExplosion(worldPosition, childPosition)) {
            child.script.item.breakBlock(false, "explosion");
        } else if(distance <= explosionRadius && this.isAccessibleForExplosion(worldPosition, childPosition)) {
            child.rigidbody.applyImpulse(childPosition.clone().sub(worldPosition).normalize().scale(explosionForce / Math.pow(Math.max(distance, 1), GameConfig.getAttribute('explosionDampingFactor')) * child.rigidbody.mass), new pc.Vec3(pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05)));   
            if(child.itemType === Item.TYPE_GLASS) {
                child.script.item.breakBlock(false, "explosion");
            } 
        }
    }

    this.objectsContainer.children.forEach(child => child.rigidbody.activate());
};

LevelController.prototype.createHorizontalExplosion = function(worldPosition, explosionEffectName) {
    const explosionRadius = GameConfig.getAttribute('horizontalExplosionRadius');
    const explosionForce = GameConfig.getAttribute('horizontalExplosionForce');
    
    /* vfx */
    this.app.fire(EventTypes.ADD_EXPLOSION_EFFECT, explosionEffectName || 'Explosion2', worldPosition);
    
    /* sfx */
    this.app.fire(EventTypes.PLAY_AUDIO, 'bomb2');
        
    /* shockwave */
    this.app.fire(EventTypes.SHOCKWAVE, worldPosition);
    
    for(let i = this.objectsContainer.children.length - 1; i > -1; i--) {
        const child = this.objectsContainer.children[i];
        if(!child) {
            continue;
        }
        const childPosition = child.getPosition();
        const distanceY = Math.abs(childPosition.y - worldPosition.y);
        const distance = childPosition.distance(worldPosition);
        if(distanceY <= Math.max(0.75, child.script.item.getLinearSize() * 0.5 + 0.45) && distance <= explosionRadius && this.isAccessibleForExplosion(worldPosition, childPosition)) {
            /* more precise overlap check */
            const boundingBox = Utils.getBoundingBox(child);
            if(Math.abs(worldPosition.y - boundingBox.center.y) > boundingBox.halfExtents.y) {
                continue;
            }

            if(child.itemType === Item.TYPE_METAL) {
                child.delayedCall(Math.max(distance * 35 - 35, 0), () =>  {
                     child.rigidbody.friction = 0;
                     child.rigidbody.restitution = 0;
                     child.rigidbody.applyImpulse(childPosition.clone().sub(worldPosition).normalize().scale(explosionForce / Math.pow(Math.max(distance, 1), GameConfig.getAttribute('explosionDampingFactor')) * child.rigidbody.mass).mul(new pc.Vec3(1, 0, 1)), new pc.Vec3(0, 0, 0));   
                });
           
            } else {
                child.delayedCall(Math.max(distance * 35 - 35, 0), () =>  child.script.item.breakBlock(false, "explosion"));
            }
            
        }
    }
    
    this.objectsContainer.children.forEach(child => child.rigidbody.activate());
};

// materialConfig.js
/* jshint esversion: 6 */
var MaterialConfig = pc.createScript('materialConfig');

/* WOOD */
MaterialConfig.attributes.add('woodMass', {
    type: 'number',
    default: 1
});

MaterialConfig.attributes.add('woodFriction', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.8
});

MaterialConfig.attributes.add('woodRestitution', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.05
});

/* METAL */
MaterialConfig.attributes.add('metalMass', {
    type: 'number',
    default: 1
});

MaterialConfig.attributes.add('metalFriction', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.25
});

MaterialConfig.attributes.add('metalRestitution', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.65
});

/* GLASS */
MaterialConfig.attributes.add('glassMass', {
    type: 'number',
    default: 1
});

MaterialConfig.attributes.add('glassFriction', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.1
});

MaterialConfig.attributes.add('glassRestitution', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.1
});

/* EXPLOSIVE */
MaterialConfig.attributes.add('explosiveMass', {
    type: 'number',
    default: 1
});

MaterialConfig.attributes.add('explosiveFriction', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.5
});

MaterialConfig.attributes.add('explosiveRestitution', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.5
});

/* CONCRETE */
MaterialConfig.attributes.add('concreteMass', {
    type: 'number',
    default: 1
});

MaterialConfig.attributes.add('concreteFriction', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.5
});

MaterialConfig.attributes.add('concreteRestitution', {
    type: 'number',
    min: 0,
    max: 1,
    default: 0.2
});


MaterialConfig.prototype.initialize = function() {
    MaterialConfig.app = this.app;
    MaterialConfig.instance = this;       
    
    Item.TYPE_SETTINGS = {};   
    Item.TYPE_SETTINGS[Item.TYPE_WOOD] = {friction: this.woodFriction, restitution: this.woodRestitution, massMultiplier: this.woodMass};
    Item.TYPE_SETTINGS[Item.TYPE_METAL] = {friction: this.metalFriction, restitution: this.metalRestitution, massMultiplier: this.metalMass};
    Item.TYPE_SETTINGS[Item.TYPE_GLASS] = {friction: this.glassFriction, restitution: this.glassRestitution, massMultiplier: this.glassMass};
    Item.TYPE_SETTINGS[Item.TYPE_EXPLOSIVE] = {friction: this.explosiveFriction, restitution: this.explosiveRestitution, massMultiplier: this.explosiveMass};
    Item.TYPE_SETTINGS[Item.TYPE_CONCRETE] = {friction: this.concreteFriction, restitution: this.concreteRestitution, massMultiplier: this.concreteMass};
};


// scoreManager.js
var ScoreManager = pc.createScript('scoreManager');

ScoreManager.prototype.initialize = function() {
    ScoreManager.instance = this;

    this.currentScores = 0;
    this.maxScores = 0;
    this.prevMaxScores = 0;
    
    this.app.on(EventTypes.ADD_SCORES, this.addScores, this);
    this.app.on(EventTypes.RESET_SCORES, this.resetScores, this);
};

ScoreManager.prototype.addScores = function(value, position) {
    this.currentScores += value;
    this.app.fire(EventTypes.SCORES_CHANGED, this.currentScores);
    
    if(this.maxScores < this.currentScores) {
        this.maxScores = this.currentScores;
        this.app.fire(EventTypes.MAX_SCORES_CHANGED, this.maxScores);
    }
    
    if(isForcedMode() && !isUIHidden('floating_score_points')) {
        this.app.fire(EventTypes.SHOW_SCORES_EFFECT, value, position);
    }
     
    Apicontroller.reportLiveScore(this.currentScores);
};

ScoreManager.prototype.resetScores = function() {
    if(isEndlessMode()) return;
    this.currentScores = 0;
    this.app.fire(EventTypes.SCORES_CHANGED, this.currentScores);
    this.app.fire(EventTypes.MAX_SCORES_CHANGED, this.maxScores);
    Apicontroller.reportLiveScore(this.currentScores);
};

ScoreManager.prototype.getScores = function() {
    return this.currentScores;
};

ScoreManager.prototype.getMaxScores = function() {
    return this.maxScores;
};

ScoreManager.prototype.getPrevMaxScores = function() {
    return this.prevMaxScores;
};

ScoreManager.prototype.setScores = function(value) {
    this.currentScores = value;
    this.app.fire(EventTypes.SCORES_CHANGED, this.currentScores);
};

ScoreManager.prototype.setPrevMaxScores = function(value) {
    this.prevMaxScores = value;
};

ScoreManager.prototype.setMaxScores = function(value) {
    this.maxScores = value;
    this.prevMaxScores = value;
    this.app.fire(EventTypes.MAX_SCORES_CHANGED, this.maxScores);
};

ScoreManager.prototype.update = function(dt) {
    
};



// cameraController.js
/* jshint esversion: 6 */
var CameraController = pc.createScript('cameraController');

CameraController.attributes.add('cameraFOVDefault', {
    type: 'number',
    default: 35
});

CameraController.attributes.add('cameraFOVMobileLandscape', {
    type: 'number',
    default: 28
});

CameraController.prototype.initialize = function() {

    this.handleViewportResized();
    
    this.app.on(EventTypes.PLAY_PRESSED, this.flyCameraToItsTargetPosition, this);
    this.app.on(EventTypes.VIEWPORT_RESIZE, this.handleViewportResized, this);
};

CameraController.prototype.update = function(dt) {   

};

CameraController.prototype.flyCameraToItsTargetPosition = function() {
    setTimeout(() => {
        GameplayController.gameStarted = true;    
        this.app.fire(EventTypes.PLAY_AUDIO, 'levelAppear01');
        this.app.fire(EventTypes.GAME_STARTED);
        if(GameplayController.currentLevel === 0 && !TutorialController.TUTORIAL_COMPLETED) {
            this.app.fire(EventTypes.START_TUTORIAL);
        }
    }, 10);

};

CameraController.prototype.handleViewportResized = function () {        
    if(ScaleManager.mobileLandscapeMode) {
        this.entity.camera.fov = this.cameraFOVMobileLandscape;
    } else {
        this.entity.camera.fov = this.cameraFOVDefault;
    }
    this.entity.script.orbitCamera.refocus();
};

// levelManager.js
/* jshint esversion: 6 */
var LevelManager = pc.createScript('levelManager');

LevelManager.attributes.add('loadTestStage', {
    title: "Load test level",
    type: 'boolean',
    default: false
});

LevelManager.attributes.add('testStage', {
    type: 'entity'
});

LevelManager.prototype.initialize = function() {
    this.levelPrefabs = [];
    this.stages = [];
    this.availableLevels = [];
    
    this.lastSavedLevelNumber = 0;
    this.lastSavedLevelPrefab = null;
    
    this.findLevels();
    this.disableLevelPrefabs();
};

LevelManager.prototype.disableLevelPrefabs = function() {
    this.app.root.findByName("LevelsPrefabs").children.forEach(prefab => prefab.enabled = false);
};

LevelManager.prototype.update = function(dt) {
    
};


LevelManager.prototype.findLevels = function() {
    this.levelPrefabs = this.app.root.findByName("LevelsPrefabs").find(prefab => prefab.name.indexOf('Tutorial') === -1 && prefab.name.indexOf(GameConfig.getAttribute('stageNameKeyword')) != -1);
    const levels = this.app.root.findByName("LevelsPrefabs").find(prefab => prefab.name.indexOf(GameConfig.getAttribute('stageNameKeyword')) != -1);
    this.stages = levels.map(levelPrefab => levelPrefab.script.stageConfig.containsStages ? levelPrefab.children.slice() : [levelPrefab]);
};

LevelManager.prototype.getNumLevels = function() {
    return this.levelPrefabs.length - 1;
};

LevelManager.prototype.getLastSavedLevel = function(levelIndex) {
    if(this.availableLevels.length === 0) {               
        const lastSavedLevelName = LocalStorageController.loadLastSavedLevelName();
        if(lastSavedLevelName && this.levelPrefabs.find(prefab => prefab.name === lastSavedLevelName)) {
            this.lastSavedLevelNumber = levelIndex;
            this.lastSavedLevelPrefab = this.levelPrefabs.find(prefab => prefab.name === lastSavedLevelName);
            this.availableLevels = Utils.shuffle(this.levelPrefabs.slice().filter(prefab => prefab.name != lastSavedLevelName));
        } else {            
            this.availableLevels = Utils.shuffle(this.levelPrefabs.slice());
            this.lastSavedLevelNumber = levelIndex;
            this.lastSavedLevelPrefab = this.availableLevels.shift();
            LocalStorageController.saveLastLevelName(this.lastSavedLevelPrefab.name);
        } 
    } else {
        
        if(levelIndex === this.lastSavedLevelNumber) {
            return this.lastSavedLevelPrefab;
        } else {
            this.lastSavedLevelNumber = levelIndex;
            this.lastSavedLevelPrefab = this.availableLevels.shift();
            LocalStorageController.saveLastLevelName(this.lastSavedLevelPrefab.name);
        }
    }

     return this.lastSavedLevelPrefab;
};


LevelManager.prototype.getLevel = function(levelIndex, stageIndex) {
    if(this.stages[levelIndex]) {
        if(this.stages[levelIndex].length > 1) {
            return this.stages[levelIndex][stageIndex];
        } else {
            return this.stages[levelIndex][0];
        }
        
    } else {
        return this.getLastSavedLevel(levelIndex);
    }
};

LevelManager.prototype.getStagePrefab = function(levelIndex, stageIndex) {
    if(this.loadTestStage) {
        if(this.testStage) {
            return this.testStage;
        } else {
            alert("Uncheck 'load test stage' mark or select test stage!");
            return null;
        }
    } else {
        const level = this.getLevel(levelIndex, stageIndex);
        return level;
    }  
    return null;
};

// explosionVFX.js
var ExplosionVfx = pc.createScript('explosionVfx');

ExplosionVfx.prototype.initialize = function() {
    this.entity.exploded = false;
    this.entity.finished = false;
    this.mainVfx = this.entity.particlesystem;
    this.smokeVfx = this.entity.findByName("ExplosionSmoke") && this.entity.findByName("ExplosionSmoke").particlesystem;   
    this.cameraFacingPosition = new pc.Vec3();
};


ExplosionVfx.prototype.update = function(dt) {
    if(this.entity.exploded) {
        if(!this.mainVfx.isPlaying() && (!this.smokeVfx || !this.smokeVfx.isPlaying())) {
            this.entity.finished = true;
            this.entity.exploded = false;
            this.explosionEpicenter = null;
            this.timeSinceEnabled = 0;
            if(this.mainVfx) {
               this.mainVfx.stop();    
            }
            if(this.smokeVfx) {
               this.smokeVfx.stop();    
            }
        }
    }
};

ExplosionVfx.prototype.explode = function() {
    this.entity.finished = false;
    this.entity.exploded = true;
    this.explosionEpicenter = this.entity.getPosition().clone();
    
    //move closer to camera
    this.entity.lookAt(this.app.root.findByName('Camera').getPosition());
    this.entity.getRotation().transformVector(pc.Vec3.FORWARD, this.cameraFacingPosition);
    this.entity.setPosition(this.entity.getPosition().clone().add(this.cameraFacingPosition.normalize().scale(1.25)));
    
    if(this.mainVfx) {
        this.mainVfx.reset();
        this.mainVfx.play();
    }

    if(this.smokeVfx) {
        this.smokeVfx.reset();
        this.smokeVfx.play();
    }
};


// stageConfig.js
var StageConfig = pc.createScript('stageConfig');

StageConfig.attributes.add('containsStages', {
    type: 'boolean'
});

StageConfig.attributes.add('bombPoints', {
    title: 'Bomb points',
    type: 'vec3',
    default: [15, 10, 5]
});


StageConfig.prototype.initialize = function() {
    
};

StageConfig.prototype.update = function(dt) {
    
};



// levelProgressContainer.js
/* jshint esversion: 6 */
var LevelProgressContainer = pc.createScript('levelProgressContainer');

LevelProgressContainer.LANDSCAPE = 'landscape';
LevelProgressContainer.PORTRAIT = 'portrait';

LevelProgressContainer.attributes.add('orientation', {
    type: 'string',
    default: LevelProgressContainer.PORTRAIT,
    enum: [
        {'portrait' : LevelProgressContainer.PORTRAIT},
        {'landscape' : LevelProgressContainer.LANDSCAPE}
    ]
});


LevelProgressContainer.prototype.initialize = function() {
    this.barContainer = this.entity.findByName('BarContainer');
    this.bar = this.barContainer.findByName('ProgressBar');
    this.levelNumberText = this.entity.findByName('LevelNumberText');
    
    this.app.on(EventTypes.LOAD_STAGE, this.rebuildInterface, this);
    this.app.on(EventTypes.VIEWPORT_RESIZE, this.rebuildInterface, this);
       
    const scriptContext = this;
    
    this.entity.show = function() {
        this.enabled = true;
        
        this.setLocalPosition(0, 150, 0);
        this.tween(this.getLocalPosition())
            .to(new pc.Vec3(0, 0, 0), 0.4, pc.BackOut)
            .delay(0.2)
            .start();
        
    }.bind(this.entity);
    
    this.entity.hide = function() {
         this.enabled = false;
    }.bind(this.entity);
    
    
    this.entity.enabled = false; 
};

LevelProgressContainer.prototype.update = function(dt) {
    if(isUIHidden('level_progress')) {
        this.entity.enabled = false;
    }
};

LevelProgressContainer.prototype.rebuildInterface = function() {   
    const levelIndex = GameplayController.currentLevel;
    const stageIndex = GameplayController.currentStage;
    const totalStages = GameplayController.totalStages;

    
    /* update current level text */
    if(GameplayController.totalStages > 1) {
        this.levelNumberText.element.text = '#' + (GameplayController.currentStage + 1) + '/' + (GameplayController.totalStages);
    } else {
        this.levelNumberText.element.text = '#' + levelIndex;
    }
};

LevelProgressContainer.prototype.disableChildren = function() {
    this.entity.children.forEach(c => c.enabled = false);
};

LevelProgressContainer.prototype.enableChildren = function() {
    this.entity.children.forEach(c => c.enabled = true);
};

// localStorageController.js
/* jshint esversion: 6 */
var LocalStorageController = pc.createScript('localStorageController');

LocalStorageController.prototype.initialize = function() {
    LocalStorageController.app = this.app;
    LocalStorageController.currentLocalStorage = (window.famobi && window.famobi.localStorage) ? window.famobi.localStorage : window.localStorage;
    
    this.app.on(EventTypes.SAVE_APP, () => LocalStorageController.saveData(), this);
};

LocalStorageController.prototype.update = function(dt) {
    
};

LocalStorageController.getSaveData = function() {    
    const saveData = {
        currentLevel: GameplayController.currentLevel,
        hasPowerup: GameplayController.hasPowerup,
        maxScores: ScoreManager.instance.getMaxScores(),
        qualityIndex: ScaleManager.qualityIndex,
        audioEnabled: SoundController.soundStateLoaded ? SoundController.audioEnabled : true, 
        tutorialCompleted: TutorialController.TUTORIAL_COMPLETED
    };     
    return saveData;
};

LocalStorageController.getSlotKey = function() {
    return "TNTBomb3D_" + Constants.GAME_VERSION;
};

LocalStorageController.getLevelsSlotKey = function() {
    return "TNTBomb3D_" + Constants.GAME_VERSION + '_levels';
};

LocalStorageController.saveData = function(immediately) {
    if(immediately) {
        var data = LocalStorageController.getSaveData();
        LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getSlotKey(), JSON.stringify(data));    
    } else {
        setTimeout(() => {
            var data = LocalStorageController.getSaveData();
            LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getSlotKey(), JSON.stringify(data));
        }, 50);
    }
};

LocalStorageController.loadData = function() {
    var data = LocalStorageController.currentLocalStorage.getItem(LocalStorageController.getSlotKey());
    var dataLoaded = false;
       
    if(data) {
        try {
            data = JSON.parse(data);
            dataLoaded = true;
        } catch (e) {
            data = LocalStorageController.getSaveData();
            LocalStorageController.saveData(true);
        }
    } else {
        data = LocalStorageController.getSaveData();
        LocalStorageController.saveData(true);
    }
    
    GameplayController.currentLevel = data.currentLevel || 1;
    GameplayController.hasPowerup = data.hasPowerup !== undefined ? data.hasPowerup : true;
    ScoreManager.instance.setMaxScores(data.maxScores || 0);
    if(data.qualityIndex !== undefined) {
        if(dataLoaded) {
            ScaleManager.savedQuality = data.qualityIndex;
        }
        ScaleManager.qualityIndex = data.qualityIndex;
        LocalStorageController.app.fire(EventTypes.QUALITY_UPDATE);
    }
    SoundController.soundStateLoaded = true;
    TutorialController.TUTORIAL_COMPLETED = skipTutorial() ? true : (data.tutorialCompleted || false);
    LocalStorageController.app.fire(((data.audioEnabled === undefined) ? true : data.audioEnabled) ? EventTypes.ENABLE_AUDIO : EventTypes.DISABLE_AUDIO);
};


LocalStorageController.loadLastLevel = function() {
    var data = LocalStorageController.currentLocalStorage.getItem(LocalStorageController.getLevelsSlotKey());
    var dataLoaded = false;
    
    if(data) {
        try {
            data = JSON.parse(data);
            dataLoaded = true;
        } catch (e) {
            data = null;
        }
    } else {
        data = null;
    }
    
    return data;
};

LocalStorageController.saveLastLevel = function(level) {
    const serializedLevel = {};
    serializedLevel.levelNumber = level.levelNumber;
    serializedLevel.stageNames = level.stages.map(stage => stage.name);
    serializedLevel.applyRotation = level.applyRotation;
    LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getLevelsSlotKey(), JSON.stringify(serializedLevel));    
};



LocalStorageController.saveLastLevelName = function (levelName) {
    LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getLevelsSlotKey(), levelName);    
};

LocalStorageController.loadLastSavedLevelName = function() {
    return LocalStorageController.currentLocalStorage.getItem(LocalStorageController.getLevelsSlotKey());
};



// LocalStorageController.saveLevelsQueue = function(queue) {   
//     const serializedLevelNames = JSON.stringify(queue);
//     LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getLevelsSlotKey(), serializedLevelNames);    
//     console.log("Level queue saved ", serializedLevelNames);
// };

// LocalStorageController.loadLevelsQueue = function() {
//     var data = LocalStorageController.currentLocalStorage.getItem(LocalStorageController.getLevelsSlotKey());
//     var dataLoaded = false;
    
//     if(data) {
//         try {
//             data = JSON.parse(data);
//             dataLoaded = true;
//         } catch (e) {
//             data = null;
//         }
//     } else {
//         data = null;
//     }
    
//     return data;
// };

// basicButton.js
var BasicButton = pc.createScript('basicButton');


BasicButton.attributes.add('applyScalingTween', {
    title: "Apply scaling tween",
    type: 'boolean',
    default: true
});

BasicButton.attributes.add('defaultScale', {
    title: "Default scale",
    type: 'number',
    default: 1,
    min: 0.5,
    max: 1.5
});

BasicButton.attributes.add('hoverScale', {
    title: "Hover scale",
    type: 'number',
    default: 1.03,
    min: 0.5,
    max: 1.5
});

BasicButton.attributes.add('pressedScale', {
    title: "Pressed scale",
    type: 'number',
    default: 0.97,
    min: 0.5,
    max: 1.5
});

BasicButton.attributes.add('upScaleDuration', {
    title: "Tween duration",
    type: 'number',
    default: 0.085,
    min: 0.005,
    max: 1
});

BasicButton.attributes.add('clickSound', {
    title: "Play sound",
    type: 'boolean',
    default: true
});

BasicButton.prototype.initialize = function() {

    // Whether the element is currently hovered or not
    this.hovered = false;

    if(pc.platform.mobile && this.app.touch) {
        this.entity.element.on('touchstart', this.onPress, this);
        this.entity.element.on('touchend', this.onRelease, this);
    } else {
        this.entity.element.on('mouseenter', this.onEnter, this);
        this.entity.element.on('mousedown', this.onPress, this);
        this.entity.element.on('mouseup', this.onRelease, this);
        this.entity.element.on('mouseleave', this.onLeave, this);
    }
};


// When the cursor enters the element assign the hovered texture
BasicButton.prototype.onEnter = function (event) {
    this.hovered = true;
    
    if(this.applyScalingTween) {
        event.element.entity.tween(event.element.entity.getLocalScale())
            .to(new pc.Vec3(this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale), this.upScaleDuration, pc.Linear)
            .start();
    }
    document.body.style.cursor = 'pointer';
};

BasicButton.prototype.onLeave = function (event) {
    this.hovered = false;
    
    if(this.applyScalingTween) {
         event.element.entity.tween(event.element.entity.getLocalScale())
            .to(new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale), this.upScaleDuration, pc.Linear)
            .start();
    }
   

    document.body.style.cursor = 'default';
};

// When we press the element assign the active texture
BasicButton.prototype.onPress = function (event) {
    event.stopPropagation();
    if(this.clickSound) {
        this.app.fire(EventTypes.PLAY_AUDIO, "click");
    }
    
    if(this.applyScalingTween) {
        event.element.entity.tween(event.element.entity.getLocalScale())
            .to(new pc.Vec3(this.defaultScale * this.pressedScale, this.defaultScale * this.pressedScale, this.defaultScale * this.pressedScale), this.upScaleDuration * 0.5, pc.SineOut)
            .start();
    }
 };

BasicButton.prototype.onRelease = function (event) {
    if(this.applyScalingTween) {
         if(this.hovered) {
         event.element.entity.tween(event.element.entity.getLocalScale())
            .to(new pc.Vec3(this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale), this.upScaleDuration * 0.5, pc.Linear)
            .start();
        } else {
            event.element.entity.tween(event.element.entity.getLocalScale())
                .to(new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale), this.upScaleDuration * 0.5, pc.Linear)
                .start();
        }
    }
};

// resultsWindow.js
/* jshint esversion: 6 */
var ResultsWindow = pc.createScript('resultsWindow');

ResultsWindow.prototype.initialize = function() {
    
    this.entity.headingIcon = this.entity.findByName("HeadingIcon");
    this.entity.buttonNext = this.entity.findByName("ButtonNext");
    this.entity.buttonRestart = this.entity.findByName("ButtonRestart");
    this.entity.background = this.entity.findByName("Background");
    this.entity.scoreGroup = this.entity.findByName("ScoreGroup");
    this.entity.maxScoreGroup = this.entity.findByName("MaxScoreGroup");
    this.entity.newBestScoreIcon = this.entity.maxScoreGroup.findByName("NewBestScoreIcon");
    this.entity.scoreText = this.entity.scoreGroup.findByName("Text");
    this.entity.maxScoreText = this.entity.maxScoreGroup.findByName("Text");
    this.entity.levelNumberText = this.entity.findByName("LevelNumber");
    
    this.assignAction(this.entity.buttonNext, this.nextPressed, this);
    this.assignAction(this.entity.buttonRestart, this.restartPressed, this);
    
    const scriptContext = this;
    
    /* show method */
    this.entity.show = function() {
        this.enabled = true;
        
        scriptContext.app.fire(EventTypes.SAVE_APP);
        scriptContext.app.fire(EventTypes.PLAY_AUDIO, "victory");
        
        if(scriptContext.buttonNextTween && scriptContext.buttonNextTween.playing) {
            scriptContext.buttonNextTween.stop();
        }
        
        if(scriptContext.buttonRestartTween && scriptContext.buttonRestartTween.playing) {
            scriptContext.buttonRestartTween.stop();
        }
        
        this.levelNumberText.element.text =  '' + GameplayController.currentLevel;
        
        this.buttonNext.setLocalScale(0, 0, 0);
        this.buttonRestart.setLocalScale(0, 0, 0);
        
        var showButtons = (delay) => {
            /* tween buttons */        
            scriptContext.buttonNextTween = this.buttonNext
                .tween(this.buttonNext.getLocalScale())
                .to(new pc.Vec3(1, 1, 1), 0.5, pc.BackOut)
                .delay(delay)
                .start();
            
            if(GameplayController.currentLevel > 0) {
                scriptContext.buttonRestartTween = this.buttonRestart
                    .tween(this.buttonRestart.getLocalScale())
                    .to(new pc.Vec3(1, 1, 1), 0.5, pc.BackOut)
                    .delay(delay + 0.35)
                    .start();
            }
        };
        
        if(window.famobi_analytics) {       
           
            setTimeout(() => {
                    Promise.all([
                        window.famobi_analytics.trackEvent(
                            "EVENT_LEVELSUCCESS",
                            {
                                levelName: '' + GameplayController.currentLevel
                            }
                        ),
                        window.famobi.showInterstitialAd(),
                        // window.famobi_analytics.trackEvent(
                        //     "EVENT_LEVELSCORE",
                        //     {
                        //         levelName: '' + GameplayController.currentLevel,
                        //         levelScore: ScoreManager.instance.getScores()
                        //     }
                        // ),
                    ]).then(() => showButtons(1.2), () => showButtons(1.2));
                }, 500);
        } else {
            showButtons(1.85);
        }
        
        /* tween background */
        this.background.element.opacity = 0.0;
        this.background.tween(this.background.element)
            .to({opacity: 0.94}, 0.25, pc.Linear)
            .start();
         
        /* tween level text */
        this.levelNumberText.element.opacity = 0.0;
        this.levelNumberText.tween(this.levelNumberText.element)
            .to({opacity: 0.4}, 0.4, pc.Linear)
            .delay(0.2)
            .start();
        
        /* tween heading icon */
        this.headingIcon.element.opacity = 0.0;
        var headingAppearingTween = 
        this.headingIcon.tween(this.headingIcon.element)
            .to({opacity: 0.9}, 0.5, pc.Linear)
            .delay(0.25);

        this.headingIcon.setLocalPosition(0, -160, 0);
        var headingMovingTween = 
        this.headingIcon.tween(this.headingIcon.getLocalPosition())
            .to(new pc.Vec3(0, 0, 0), 0.9, pc.SineOut)
            .delay(0.2);
        
        headingAppearingTween.chain(headingMovingTween).start();
        
        this.headingIcon.setLocalScale(0.4, 0.4, 0.4);
        var headingAppearingScaleTween = 
        this.headingIcon.tween(this.headingIcon.getLocalScale())
            .to(new pc.Vec3(1.25, 1.25, 1.25), 0.55, pc.BackOut)
            .delay(0.25);
        
        var headingMovingScaleTween = 
        this.headingIcon.tween(this.headingIcon.getLocalScale())
            .to(new pc.Vec3(1.0, 1.0, 1.0), 0.9, pc.SineOut)
            .delay(0.1);
        
         headingAppearingScaleTween.chain(headingMovingScaleTween).start();

//         /* tween text groups */
//         this.scoreGroup.setLocalScale(0, 0, 0);
//         this.scoreGroup.tween(this.scoreGroup.getLocalScale())
//             .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
//             .delay(1.35)
//             .start();
                
//         this.maxScoreGroup.setLocalScale(0, 0, 0);
//         this.maxScoreGroup.tween(this.maxScoreGroup.getLocalScale())
//             .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
//             .delay(1.5)
//             .start();
        
//         /* tween texts */
//         const textTweenDelay = 1.75;
//         if(ScoreManager.instance.getScores() > 0) {          
//              this.delayedCall(textTweenDelay * 1000, () => scriptContext.app.fire(EventTypes.UNMUTE_SOUND, "counting", 0.9));
//              this.delayedCall((textTweenDelay + 1.0) * 1000, () => scriptContext.app.fire(EventTypes.MUTE_SOUND, "counting"));           
//         }
        
//         Utils.tweenText(this.scoreText, 0, ScoreManager.instance.getScores(), 0.75, textTweenDelay, pc.SineOut, true);
//         Utils.tweenText(this.maxScoreText, ScoreManager.instance.getPrevMaxScores(), ScoreManager.instance.getMaxScores(), 0.75, textTweenDelay + 0.25, pc.SineOut, true);
//         ScoreManager.instance.setPrevMaxScores(ScoreManager.instance.getMaxScores());

//         this.newBestScoreIcon.element.opacity = 0;
//         this.newBestScoreIcon.setLocalScale(2, 2, 2);
//         if(ScoreManager.instance.getScores() === ScoreManager.instance.getMaxScores()) {

//               this.newBestScoreIcon.tween(this.newBestScoreIcon.element)
//                     .to({opacity: 1}, 0.3, pc.Linear)
//                     .delay(textTweenDelay + 1)
//                     .on('complete', () => {
//                         if(this.enabled) {
//                             scriptContext.app.fire(EventTypes.PLAY_AUDIO, 'newBest');
//                         }
//                     })
//                     .on('update', () => {
//                         this.newBestScoreIcon.setLocalPosition(this.maxScoreText.element.width + 66, 0, 0);
//                     })
//                     .start();

//              this.newBestScoreIcon.tween(this.newBestScoreIcon.getLocalScale())
//                     .to(new pc.Vec3(1, 1, 1), 0.42, pc.BackOut)
//                     .delay(textTweenDelay + 1)
//                     .start();
//         }        
        
    }.bind(this.entity);
    
    
    /* hide method */
    this.entity.hide = function() {
        this.enabled = false;
    }.bind(this.entity);
    
    this.entity.hide();
};

ResultsWindow.prototype.assignAction = function(button, handler, handlerContext) {
     if(this.app.touch) {
         button.element.on('touchstart', handler, handlerContext);
     } if(this.app.mouse) {
          button.element.on('mousedown', handler, handlerContext);
     }
};

ResultsWindow.prototype.update = function(dt) {
    
};

ResultsWindow.prototype.restartPressed = function() {    
    TransitionScreen.instance.transitionTo(() => {
         this.entity.hide();
         this.app.fire(EventTypes.RESTART_CURRENT_LEVEL);
    });
};

ResultsWindow.prototype.nextPressed = function() {    
    TransitionScreen.instance.transitionTo(() => {
         this.entity.hide();
         this.app.fire(EventTypes.LOAD_NEXT_LEVEL);
    });
};

// windowManager.js
var WindowManager = pc.createScript('windowManager');

WindowManager.prototype.initialize = function() {
    WindowManager.app = this.app;
    
    WindowManager.resultsWindow = this.app.root.findByName("UIContainer").findByName("ResultsWindow");
    WindowManager.defeatWindow = this.app.root.findByName("UIContainer").findByName("DefeatWindow");
    WindowManager.powerupWindow = this.app.root.findByName("UIContainer").findByName("PowerupWindow");
    WindowManager.levelUI = this.app.root.findByName("UIContainer").findByName("LevelUI");
    WindowManager.settingsPanel = this.app.root.findByName("UIContainer").findByName("SettingsPanel");
    WindowManager.mainMenu = this.app.root.findByName("UIContainer").findByName("MainMenu");
};


WindowManager.prototype.update = function(dt) {
    
};

WindowManager.hideAll = function() {  
    WindowManager.resultsWindow.hide();  
    WindowManager.defeatWindow.hide();
    WindowManager.powerupWindow.hide();
    WindowManager.settingsPanel.hide();  
    WindowManager.mainMenu.hide();  
};

WindowManager.showResults = function() {    
    WindowManager.resultsWindow.show();  
};

WindowManager.showDefeat = function() {    
    WindowManager.defeatWindow.show();  
};

WindowManager.showPowerupWindow = function() {
    WindowManager.powerupWindow.show();  
};

WindowManager.startGameplay = function() {   
    WindowManager.mainMenu.hide();
    WindowManager.levelUI.show();
};

WindowManager.exitGameplay = function() { 
    WindowManager.hideAll();
    WindowManager.mainMenu.show(); 
    WindowManager.settingsPanel.show();
};

WindowManager.hasOpenedWindows = function (){
    return WindowManager.resultsWindow.enabled || WindowManager.defeatWindow.enabled || WindowManager.powerupWindow.enabled;
}; 

// defeatWindow.js
/* jshint esversion: 6 */
var DefeatWindow = pc.createScript('defeatWindow');

DefeatWindow.prototype.initialize = function() {
    
    this.entity.headingIcon = this.entity.findByName("HeadingIcon");
    this.entity.buttonRestart = this.entity.findByName("ButtonRestart");
    this.entity.background = this.entity.findByName("Background");
    this.entity.scoreGroup = this.entity.findByName("ScoreGroup");
    this.entity.maxScoreGroup = this.entity.findByName("MaxScoreGroup");
    this.entity.newBestScoreIcon = this.entity.maxScoreGroup.findByName("NewBestScoreIcon");
    this.entity.scoreText = this.entity.scoreGroup.findByName("Text");
    this.entity.maxScoreText = this.entity.maxScoreGroup.findByName("Text");
    
    this.assignAction(this.entity.buttonRestart, this.restartPressed, this);
    
    const scriptContext = this;
    
    /* show method */
    this.entity.show = function() {
        this.enabled = true;
        
        scriptContext.app.fire(EventTypes.SAVE_APP);
        scriptContext.app.fire(EventTypes.PLAY_AUDIO, "defeat");
        
        if(scriptContext.buttonRestartTween && scriptContext.buttonRestartTween.playing) {
            scriptContext.buttonRestartTween.stop();
        }
        
        this.buttonRestart.setLocalScale(0, 0, 0);
        
        var showButtons = (delay) => {
            /* tween buttons */        
            scriptContext.buttonRestartTween = this.buttonRestart
                .tween(this.buttonRestart.getLocalScale())
                .to(new pc.Vec3(1, 1, 1), 0.5, pc.BackOut)
                .delay(delay)
                .start();
        };
        
        if(window.famobi_analytics) {  
            setTimeout(() => {
                    Promise.all([
                        window.famobi_analytics.trackEvent(
                            "EVENT_LEVELFAIL",
                            {
                                levelName: '' + GameplayController.currentLevel,
                                reason: 'dead'
                            }
                        ),
                        window.famobi.showInterstitialAd(),
                        // window.famobi_analytics.trackEvent(
                        //     "EVENT_LEVELSCORE",
                        //     {
                        //         levelName: '' + GameplayController.currentLevel,
                        //         levelScore: ScoreManager.instance.getScores()
                        //     }
                        // ),
                    ]).then(() => showButtons(1.1), () => showButtons(1.1));
                }, 500);
        } else {
            showButtons(1.35);
        }
        
        /* tween background */
        this.background.element.opacity = 0.0;
        this.background.tween(this.background.element)
            .to({opacity: 0.96}, 0.25, pc.Linear)
            .start();
         
        /* tween heading icon */
        this.headingIcon.element.opacity = 0.0;
        var headingAppearingTween = 
        this.headingIcon.tween(this.headingIcon.element)
            .to({opacity: 0.9}, 0.5, pc.Linear)
            .delay(0.15);

        this.headingIcon.setLocalPosition(0, -70, 0);
        var headingMovingTween = 
        this.headingIcon.tween(this.headingIcon.getLocalPosition())
            .to(new pc.Vec3(0, 0, 0), 0.7, pc.SineOut)
            .delay(0.1);
        
        headingAppearingTween.chain(headingMovingTween).start();
        
        
        this.headingIcon.setLocalScale(2, 2, 2);
        var headingAppearingScaleTween = 
        this.headingIcon.tween(this.headingIcon.getLocalScale())
            .to(new pc.Vec3(0.9, 0.9, 0.9), 0.5, pc.BackOut)
            .delay(0.15);
        
        var headingMovingScaleTween = 
        this.headingIcon.tween(this.headingIcon.getLocalScale())
            .to(new pc.Vec3(1.0, 1.0, 1.0), 0.7, pc.SineOut)
            .delay(0.1);
        
         headingAppearingScaleTween.chain(headingMovingScaleTween).start();

//         /* tween text groups */
//         this.scoreGroup.setLocalScale(0, 0, 0);
//         this.scoreGroup.tween(this.scoreGroup.getLocalScale())
//             .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
//             .delay(1.35)
//             .start();
                
//         this.maxScoreGroup.setLocalScale(0, 0, 0);
//         this.maxScoreGroup.tween(this.maxScoreGroup.getLocalScale())
//             .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
//             .delay(1.5)
//             .start();
        
//         /* tween texts */
//         const textTweenDelay = 1.75;
//        if(ScoreManager.instance.getScores() > 0) {          
//              this.delayedCall(textTweenDelay * 1000, () => scriptContext.app.fire(EventTypes.UNMUTE_SOUND, "counting", 0.9));
//              this.delayedCall((textTweenDelay + 1.0) * 1000, () => scriptContext.app.fire(EventTypes.MUTE_SOUND, "counting"));           
//         }
        
//         Utils.tweenText(this.scoreText, 0, ScoreManager.instance.getScores(), 0.75, textTweenDelay, pc.SineOut, true);
//         Utils.tweenText(this.maxScoreText, ScoreManager.instance.getPrevMaxScores(), ScoreManager.instance.getMaxScores(), 0.75, textTweenDelay + 0.25, pc.SineOut, true);
//         ScoreManager.instance.setPrevMaxScores(ScoreManager.instance.getMaxScores());

//         this.newBestScoreIcon.element.opacity = 0;
//         this.newBestScoreIcon.setLocalScale(2, 2, 2);
//         if(ScoreManager.instance.getScores() === ScoreManager.instance.getMaxScores()) {

//               this.newBestScoreIcon.tween(this.newBestScoreIcon.element)
//                     .to({opacity: 1}, 0.3, pc.Linear)
//                     .delay(textTweenDelay + 1)
//                     .on('complete', () => {
//                         if(this.enabled) {
//                             scriptContext.app.fire(EventTypes.PLAY_AUDIO, 'newBest');
//                         }
//                     })
//                     .on('update', () => {
//                         this.newBestScoreIcon.setLocalPosition(this.maxScoreText.element.width + 66, 0, 0);
//                     })
//                     .start();

//              this.newBestScoreIcon.tween(this.newBestScoreIcon.getLocalScale())
//                     .to(new pc.Vec3(1, 1, 1), 0.42, pc.BackOut)
//                     .delay(textTweenDelay + 1)
//                     .start();
//         }        
        
    }.bind(this.entity);
    
    
    /* hide method */
    this.entity.hide = function() {
        this.enabled = false;
    }.bind(this.entity);
    
    this.entity.hide();
};

DefeatWindow.prototype.assignAction = function(button, handler, handlerContext) {
     if(this.app.touch) {
         button.element.on('touchstart', handler, handlerContext);
     } if(this.app.mouse) {
          button.element.on('mousedown', handler, handlerContext);
     } 
};

DefeatWindow.prototype.update = function(dt) {
    
};

DefeatWindow.prototype.restartPressed = function() {    
    TransitionScreen.instance.transitionTo(() => {
         this.entity.hide();
         famobi.log('restarting level...');
         this.app.fire(EventTypes.RESTART_CURRENT_LEVEL);
    });
};

// APIController.js
/* jshint esversion: 6 */
var Apicontroller = pc.createScript('apicontroller');

Apicontroller.prototype.initialize = function() {
    console.log('API controller initialized');
    game = this.app;
    
    if(window.famobi) {
         Apicontroller.initTracking();
    }
};

Apicontroller.prototype.update = function(dt) {
    
};

Apicontroller.isRewardedVideoFeatureEnabled = function() {
    return true;
};

Apicontroller.hasRewardedVideo = function() {
    if (Apicontroller.isRewardedVideoFeatureEnabled() && window.famobi && window.famobi.hasRewardedAd)
        return window.famobi.hasRewardedAd();
    else
        return false;
};

Apicontroller.showRewardedVideo = function(callback) {
    if (window.famobi && Apicontroller.hasRewardedVideo()) {
        window.famobi.rewardedAd(callback);
    } else {
        callback({rewardGranted: false});
    }
};

Apicontroller.initTracking = function() {
    if(!window.famobi_tracking) {
        console.warn("Tracking API is not defined");
        return;
    }
    window.famobi_tracking.init('tnt-bomb', null, 100, true, true);
    console.log('Tracking API initialized');
};

Apicontroller.trackLevelStart = function(eventParams) {
    if(!window.famobi_tracking) {
        console.warn("TrackLevelStart: Tracking API is not defined");
        return;
    }
    window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_START, eventParams);
};

Apicontroller.trackLevelEnd = function(eventParams) {
     if(!window.famobi_tracking) {
        console.warn("TrackLevelEnd: Tracking API is not defined");
        return;
    }
    window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_END, eventParams);
};



Apicontroller.handleLevelEndEvent = function(result, score, resolveCallback) {
    if(!window.famobi) {
        resolveCallback();
        return;
    }
    
    game.timeScale = 0.00001;    
    
    window.famobi_analytics.trackEvent("EVENT_CUSTOM", {eventName: "LEVELEND", result: result, score: score})
        .then(() => {
            game.timeScale = 1.0;
            resolveCallback();
        }).catch(() => {

        });
};


/* Tracking stats */

Apicontroller.trackStats = function(...args) {
    if(window.famobi && window.famobi.hasFeature("trackstats") && window.famobi_analytics && window.famobi_analytics.trackStats) {
        window.famobi_analytics.trackStats(...args);
    }
};


/* Live score */

Apicontroller._sendLiveScore = function(liveScore) {
    this.lastLiveScoreReportTimestamp = new Date().getTime();
    window.famobi_analytics.trackEvent(
        "EVENT_LIVESCORE",
        {
            liveScore: liveScore
        }
    );
};


Apicontroller.reportLiveScore = function(score) {
    const currentTimestamp = new Date().getTime();
    this.lastLiveScoreReportTimestamp = this.lastLiveScoreReportTimestamp || 0;
    
    if(currentTimestamp - this.lastLiveScoreReportTimestamp >= 1000) {
        Apicontroller._sendLiveScore(score);
    } else {
        this._lastLiveScore = score;
        if(!this._nextReportTimeout) {
            this._nextReportTimeout = setTimeout(() => {
                if(this._lastLiveScore !== undefined) {
                    Apicontroller._sendLiveScore(this._lastLiveScore);
                    this._lastLiveScore = undefined;
                }
                this._nextReportTimeout = undefined;
            }, 1000 - (currentTimestamp - this.lastLiveScoreReportTimestamp)); 
        }
    }
   
};
      

/* Pause/resume handling */

pc.Application.prototype.pauseGame = function() {
    this.applicationPaused = true;
    this.soundVolumeBeforePaused = SoundController.masterVolume;
    this.fire('audio:setMasterVolume', 0);
    
    this.timeScale = 0;
    var inputBlocker = this.root.findByName("InputBlocker");
    if(inputBlocker) {
        inputBlocker.element.useInput = true;
    }
};

pc.Application.prototype.unpauseGame = function(forced) {    
    if (isPageVisible && (!adIsShowing || forced)) {
        this.applicationPaused = false;
        this.fire('audio:setMasterVolume', this.soundVolumeBeforePaused || SoundController.masterVolume || famobi.getVolume() || 1);
        
        this.timeScale = 1;        
        var inputBlocker = this.root.findByName("InputBlocker");
        if(inputBlocker) {
            inputBlocker.element.useInput = false;
        }
    } else {
        console.log('resuming game is not allowed now because ads are beign displayed or page isn\'t visible...');
    }
};

/* Global scope variables */

var game;
var isPageVisible = true;
var adIsShowing = false;



var isExternalStart = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("external_start");
};

var isExternalMute = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("external_mute");
};

var skipTitleScreen = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("skip_title");
};

var skipTutorial = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("skip_tutorial");
};

var useAutoQuality = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("auto_quality");
};

var isForcedMode = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("forced_mode");
};

var isCopyrightEnabled = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("copyright");
};

var isEndlessMode = function() {
    return isForcedMode() && getForcedModeProperties().state.endless_mode;
};

var isUnlimitedPoints = function() {
    return isForcedMode() && getForcedModeProperties().override.bomb_points === -1;
};

var isEarthquakeEnabled = function() {
    return !isForcedMode() || getForcedModeProperties().state.powerup_earthquake;
};

var isPermanentBombPointsMode = function() {
    return !isForcedMode() || getForcedModeProperties().override.bomb_points_mode === "permanent";
};

var getForcedModeProperties = function() {
    const forcedModePproperties =  typeof famobi !== "undefined" && famobi.getFeatureProperties("forced_mode");
    return forcedModePproperties;
};

var isUIHidden = function(uiKey) {
    return isForcedMode() && getForcedModeProperties() && getForcedModeProperties().override.hide_ui && getForcedModeProperties().override.hide_ui.indexOf(uiKey) !== -1;
};


//famobi pause/resume requests
window.famobi_onPauseRequested = function () {
    console.warn('famobi_onPauseRequested');
    adIsShowing = true;
    if (game) {
        game.pauseGame();
    }
};

window.famobi_onResumeRequested = function () {
    console.warn('famobi_onResumeRequested');
    adIsShowing = false;
    if (game) {
        game.unpauseGame();
    }
};



//Monkey App handlers
if(window.famobi) {
    window.famobi.onRequest("pauseGameplay", function() {
        if (game) {
            game.pauseGame();
        }
    });
    
    window.famobi.onRequest("resumeGameplay", function() {
        if (game) {
            game.unpauseGame();
        }
    });
    
    window.famobi.onRequest("enableAudio", function() {
        if(game) {
            game.fire("audio:enable");
        }
    });
    
    window.famobi.onRequest("disableAudio", function() {
        if(game) {
            game.fire("audio:disable");
        }
    });
    
    window.famobi.onRequest("changeVolume", function(volume) {
        if(game) {
            game.fire('audio:setVolumeMultiplier', volume);
        }
    });
}

//visiblity
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document["msHidden"] !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document["webkitHidden"] !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange(hiddenState, reason) {
    if (hiddenState) {
        if(isPageVisible) {
            isPageVisible = false;
            if (game && !adIsShowing) game.pauseGame();
        }
      
    } else {
        isPageVisible = true;
        if (game && !adIsShowing && game.applicationPaused && !game.applicationFinished) game.unpauseGame();
    }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
    console.log("Browser doesn't support the Page Visibility API.");
} else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, () => handleVisibilityChange(document.hidden), false);
    window.addEventListener("focus", () => handleVisibilityChange(false, 'focus'));
    window.addEventListener("blur", () => handleVisibilityChange(true, 'blur'));
}

console.log("Window VisibilityAPI connected");

// worldController.js
/* jshint esversion: 6 */
var WorldController = pc.createScript('worldController');

WorldController.attributes.add('loadTestWorld', {
    title: 'Load test world',
    type: 'boolean',
    default: true
});

WorldController.attributes.add('testWorld', {
    title: 'Test world',
    type: 'entity'
});

WorldController.attributes.add('initialWorld', {
    title: 'Initial world',
    type: 'entity'
});

WorldController.prototype.initialize = function() {
    this.entity.children.forEach(child => child.enabled = true);
    this.entity.children.forEach(child => child.enabled = false); 
    
    this.app.on(EventTypes.CHANGE_WORLD, this.changeWorld, this);
};

WorldController.prototype.update = function(dt) {
    
};

WorldController.prototype.updateCurrentWorld = function() {
     if(isForcedMode()) {
        const customTheme = getForcedModeProperties().state.theme;
        if(customTheme) {
            const world = this.entity.findByName(customTheme);
            if(world) {
                this.currentWorld = world;
                return;
            }
        }
    } 
    
    if(this.loadTestWorld) {
        this.currentWorld = this.testWorld;
    } else {
        if(!this.currentWorld) {
            this.currentWorld = this.initialWorld;
        } else {
            this.currentWorld = Utils.getRandomItem(this.entity.children.filter(child => child != this.currentWorld));
        }
    }
};

WorldController.prototype.changeWorld = function() {
    this.entity.children.forEach(world => world.enabled = false);
   
    this.updateCurrentWorld();
    
    this.currentWorld.enabled = true;
    const worldConfig = this.currentWorld.script.worldConfig;
    if(worldConfig.enableFog) {
        this.app.scene.fog = pc.FOG_LINEAR;
        this.app.scene.fogColor = worldConfig.fogColor;
        this.app.scene.fogStart = worldConfig.fogStart;
        this.app.scene.fogEnd = worldConfig.fogEnd;
    } else {
        this.app.scene.fog = pc.FOG_NONE;
    }
  
    this.app.scene.skybox = worldConfig.skyCubeMap.resource;
};

// worldConfig.js
var WorldConfig = pc.createScript('worldConfig');

WorldConfig.attributes.add('fogColor', {
    type: 'rgb'
});

WorldConfig.attributes.add('enableFog', {
    type: 'boolean',
    default: true
});

WorldConfig.attributes.add('fogStart', {
    type: 'number',
    default: 40
});

WorldConfig.attributes.add('fogEnd', {
    type: 'number',
    default: 85
});

WorldConfig.attributes.add('skyCubeMap', {
    title: 'Sky cube map',
    type: 'asset',
    assetType: 'cubemap'
});

WorldConfig.prototype.initialize = function() {
    
};

WorldConfig.prototype.update = function(dt) {
    
};


// scaleManager.js
/* jshint esversion: 6 */
var ScaleManager = pc.createScript('scaleManager');

ScaleManager.QUALITY_LOW = 0;
ScaleManager.QUALITY_MEDIUM = 1;
ScaleManager.QUALITY_HIGH = 2;

ScaleManager.qualityIndex = ScaleManager.QUALITY_HIGH;
ScaleManager.qualityFactor = 1;
ScaleManager.screenRatio = 1;
ScaleManager.mobileLandscapeMode = false;

ScaleManager.SCREEN_RATIO_MIN = 9 / 16;
ScaleManager.SCREEN_RATIO_MAX = 4 / 3;

ScaleManager.screenWidth = 0;
ScaleManager.screenHeight = 0;

ScaleManager.attributes.add('hiqhQualityFPSThreshold', {
    type: 'number',
    default: 30
});

ScaleManager.attributes.add('mediumQualityFPSThreshold', {
    type: 'number',
    default: 24
});

ScaleManager.attributes.add('numIterations', {
    type: 'number',
    default: 3
});

ScaleManager.attributes.add('framesPerIteration', {
    type: 'number',
    default: 15
});

ScaleManager.attributes.add('desktopQuality', {
    title: "Desktop quality",
    type: 'number',
    array: true,
    default: [0.5, 0.75, 1]
});

ScaleManager.attributes.add('mobileQuality', {
    title: "Mobile quality",
    type: 'number',
    array: true,
    default: [0.75, 1, 2]
});


ScaleManager.prototype.initialize = function() {
    if(pc.platform.mobile) {
        this.mobileQuality[2] = window.devicePixelRatio || 1;
        this.qualityPresets = this.mobileQuality;        
        ScaleManager.qualityIndex = ScaleManager.QUALITY_HIGH;
    } else {
        this.qualityPresets = this.desktopQuality;
        ScaleManager.qualityIndex = ScaleManager.QUALITY_HIGH;
    }
    
    this.app.on(EventTypes.QUALITY_NEXT, this.setNextQuality, this);
    this.app.on(EventTypes.QUALITY_UPDATE, this.resetQualitySettings, this);
    this.app.on(EventTypes.MEASURE_PERFORMANCE, this.measurePerformance, this);
    
    famobi.log("Adding resize handler...");
    if(window.visualViewport) {
        this.useVisualViewport = true;
        window.visualViewport.addEventListener('resize', this.resize.bind(this));
    } else {
        this.useVisualViewport = false;
        window.addEventListener('resize', this.resize.bind(this), true);
    }
    
    this.resetQualitySettings();
    this.resize();
};

ScaleManager.prototype.measurePerformance = function() {
    if(ScaleManager.savedQuality === undefined) {
       this.customMeasurementStarted = true;
       this.customMeasurementIteration = 0;
       this.currentMeasurementSession = {frames: 0, time: 0};
       this.customMeasurementResults = [[], [], []];
       this.customMeasurementLastTimestamp = performance.now();
    }
};

ScaleManager.prototype.update = function(dt) {
    if(this.customMeasurementStarted) {
        const now = performance.now();
        const msSinceLastFrame = now - this.customMeasurementLastTimestamp;
        this.customMeasurementLastTimestamp = now;
        
        this.currentMeasurementSession.frames += 1;
        this.currentMeasurementSession.time += msSinceLastFrame;
        
        if(this.currentMeasurementSession.frames >= this.framesPerIteration) {
            this.customMeasurementResults[ScaleManager.qualityIndex].push(this.currentMeasurementSession);
            this.currentMeasurementSession = {frames: 0, time: 0};
            this.customMeasurementIteration += 1;
            ScaleManager.qualityIndex = ScaleManager.qualityIndex > 0 ? (ScaleManager.qualityIndex - 1) : (this.qualityPresets.length - 1);
            this.updateScreenSize();
            
            if(this.customMeasurementIteration >= this.qualityPresets.length * this.numIterations) {
                this.customMeasurementStarted = false;
                famobi.log(this.customMeasurementResults);
                
                 const averageFPS = [0, 0, 0];
                
                 for(let i = 0; i < 3; i++) {
                     let frames = 0;
                     let times = 0;
                     var rec = this.customMeasurementResults[i];
                     for(let q = 0; q < this.numIterations; q++) {
                         times += rec[q].time;
                         frames += rec[q].frames;
                     }
                     averageFPS[i] = (1000 / times * frames);
                 }
                
                if(averageFPS[ScaleManager.QUALITY_HIGH] >= this.hiqhQualityFPSThreshold) {
                     ScaleManager.qualityIndex = ScaleManager.QUALITY_HIGH;
                     this.resetQualitySettings();
                } else if(averageFPS[ScaleManager.QUALITY_MEDIUM] >= this.mediumQualityFPSThreshold) {
                     ScaleManager.qualityIndex = ScaleManager.QUALITY_MEDIUM;
                     this.resetQualitySettings();
                } else {
                    ScaleManager.qualityIndex = ScaleManager.QUALITY_LOW;
                    this.resetQualitySettings();
                }
                this.app.fire(EventTypes.SAVE_APP);
                
                // this.app.root.findByName("DebugText").enabled = true;
                // this.app.root.findByName("DebugText").element.text = ['L', 'M', 'H'][ScaleManager.qualityIndex] + ' ' + ~~averageFPS[ScaleManager.QUALITY_HIGH] + ' ' + ~~averageFPS[ScaleManager.QUALITY_MEDIUM] + ' ' + ~~averageFPS[ScaleManager.QUALITY_LOW];
            }
        }
    }
};

ScaleManager.prototype.setNextQuality = function() {
    ScaleManager.qualityIndex = ((ScaleManager.qualityIndex || 0) + 1) % this.qualityPresets.length;
    ScaleManager.qualityFactor = this.qualityPresets[ScaleManager.qualityIndex];
    this.resize();
    this.app.fire(EventTypes.SAVE_APP);
};

ScaleManager.prototype.resetQualitySettings = function() {
    ScaleManager.qualityFactor = this.qualityPresets[ScaleManager.qualityIndex];
    this.resize();
};


ScaleManager.prototype.resize = function() {   
    this.updateScreenSize();
    
    if(pc.platform.ios || pc.platform.mobile) {
        setTimeout(() => this.updateScreenSize(), 500);    
    }
};

ScaleManager.prototype.updateScreenSize = function() {
    const width = this.useVisualViewport ? window.visualViewport.width : window.innerWidth;
    const height = this.useVisualViewport ? window.visualViewport.height : window.innerHeight;
    ScaleManager.qualityFactor = this.qualityPresets[ScaleManager.qualityIndex];
    this.app.graphicsDevice.resizeCanvas(Math.floor(width * ScaleManager.qualityFactor), Math.floor(height * ScaleManager.qualityFactor));
    
    ScaleManager.screenWidth = width * ScaleManager.qualityFactor;
    ScaleManager.screenHeight = height * ScaleManager.qualityFactor;
    ScaleManager.mobileLandscapeMode = false;
    ScaleManager.screenRatio = this.app.graphicsDevice.canvas.width / this.app.graphicsDevice.canvas.height;
    if(ScaleManager.screenRatio < ScaleManager.SCREEN_RATIO_MIN) {
       this.distance = GameplayController.cameraToTowerMinDistance;
    } else if (ScaleManager.screenRatio > ScaleManager.SCREEN_RATIO_MAX) {
       if(pc.platform.mobile) {
            ScaleManager.mobileLandscapeMode = true;
       }
    } else {

    }
    
    this.app.fire(EventTypes.QUALITY_CHANGED, ScaleManager.qualityIndex);
    this.app.fire(EventTypes.VIEWPORT_RESIZE, Math.floor(ScaleManager.screenWidth), Math.floor(ScaleManager.screenHeight));
};



// fogConfig.js
/* jshint esversion: 6 */
var FogConfig = pc.createScript('fogConfig');

FogConfig.attributes.add('speed', {
    type: 'number',
    default: 0.8
});

FogConfig.attributes.add('spriteWidth', {
    type: 'number',
    default: 100
});

FogConfig.prototype.initialize = function() {
    this.entity.children.forEach(child => {
        const childPosition = child.getLocalPosition();
        let direction = Math.random() > 0.5 ? 1 : -1;
        childPosition.x += direction * this.spriteWidth / 2;
        child.setLocalPosition(childPosition);
        child.tween(child.getLocalPosition())
            .to({x: childPosition.x - direction * this.spriteWidth, y: childPosition.y, z: childPosition.z}, pc.math.random(10, 25), pc.SineInOut)
            .repeat(100000)
            .yoyo(true)
            .start();
    });
};

FogConfig.prototype.update = function(dt) {
    // this.entity.children.forEach(child => {
    //     child.translateLocal(this.speed * dt, 0, 0);
    //     const position = child.getLocalPosition();
    //     if(this.speed > 0 && position.x > this.spriteWidth) {
    //         child.setLocalPosition(-this.spriteWidth, position.y, position.z);
    //     } else if(this.speed < 0 && position.x < -this.spriteWidth) {
    //          child.setLocalPosition(this.spriteWidth, position.y, position.z);
    //     }
    // });
};

// settingsPanel.js
/* jshint esversion: 6 */
var SettingsPanel = pc.createScript('settingsPanel');

SettingsPanel.prototype.initialize = function() {
    
    this.entity.settingsPanelContainer = this.entity.findByName("SettingsPanelContainer");
    this.entity.buttonSettings = this.entity.findByName("ButtonSettings");
    this.entity.soundButtonsContainer = this.entity.settingsPanelContainer.findByName('SoundButtonsContainer');
    this.entity.buttonSoundOn = this.entity.settingsPanelContainer.findByName("ButtonSoundOn");
    this.entity.buttonSoundOff = this.entity.settingsPanelContainer.findByName("ButtonSoundOff");
    this.entity.qualityButtonsContainer = this.entity.settingsPanelContainer.findByName('QualityButtonsContainer');
    this.entity.buttonQualityLow = this.entity.settingsPanelContainer.findByName("ButtonQualityLow");
    this.entity.buttonQualityMedium = this.entity.settingsPanelContainer.findByName("ButtonQualityMedium");
    this.entity.buttonQualityHigh = this.entity.settingsPanelContainer.findByName("ButtonQualityHigh");
    
    this.entity.settingsPanelOpened = false;
    this.entity.soundButtonsContainer.setLocalPosition(0, 0, 0);
    this.entity.soundButtonsContainer.setLocalScale(0, 0, 0);
    this.entity.qualityButtonsContainer.setLocalPosition(0, 0, 0);
    this.entity.qualityButtonsContainer.setLocalScale(0, 0, 0);
    
    this.app.on(EventTypes.QUALITY_CHANGED, this.updateQualityButtons, this);
    this.app.on(EventTypes.AUDIO_STATE_CHANGED, this.updateAudioButtons, this);
        
    this.assignAction(this.entity.buttonQualityLow, this.rescalePressed, this);
    this.assignAction(this.entity.buttonQualityMedium, this.rescalePressed, this);
    this.assignAction(this.entity.buttonQualityHigh, this.rescalePressed, this);
    this.updateQualityButtons();
    
    this.assignAction(this.entity.buttonSoundOn, this.disableAudio, this);
    this.assignAction(this.entity.buttonSoundOff, this.enableAudio, this);
    this.updateAudioButtons(true);
    
    this.assignAction(this.entity.buttonSettings, this.toggleSettings, this);
    
        
    /* show method */
    this.entity.show = function() {
        this.enabled = true;
    }.bind(this.entity);
    
    
    /* hide method */
    this.entity.hide = function() {
        
        this.settingsPanelOpened = false;
        const pos = this.settingsPanelContainer.getLocalPosition();
        pos.y = SettingsPanel.panelClosedY;
        this.settingsPanelContainer.setLocalPosition(pos);
        
        this.enabled = false;
    }.bind(this.entity);
    
    
    this.entity.show();
};

SettingsPanel.prototype.assignAction = function(button, handler, handlerContext) {
     if(this.app.touch) {
         button.element.on('touchstart', handler, handlerContext);
     } if(this.app.mouse) {
          button.element.on('mousedown', handler, handlerContext);
     } 
};


SettingsPanel.prototype.update = function(dt) {
    const autoQuality = useAutoQuality();
    const externalMute = isExternalMute();
    const settingsPanelPosition = this.entity.settingsPanelContainer.getLocalPosition();
    
    if(autoQuality && externalMute) {
        this.entity.buttonSettings.enabled = false;
        this.entity.qualityButtonsContainer.enabled = false;
        this.entity.soundButtonsContainer.enabled = false;
        settingsPanelPosition.y = this.getSettingPanelContainerY();
        this.entity.settingsPanelContainer.setLocalPosition(settingsPanelPosition);
    } else if (autoQuality) {
        this.entity.qualityButtonsContainer.enabled = false;
        this.entity.soundButtonsContainer.enabled = true;
        
        this.entity.soundButtonsContainer.setLocalPosition(0, -50, 0);
        this.entity.soundButtonsContainer.setLocalScale(1, 1, 1);
        this.entity.soundButtonsContainer.enabled = true;
        this.entity.buttonSettings.enabled = false;
        
        settingsPanelPosition.y = this.getSettingPanelContainerY();
        this.entity.settingsPanelContainer.setLocalPosition(settingsPanelPosition);
    } else if(externalMute) {
        this.entity.soundButtonsContainer.enabled = false;
        this.entity.qualityButtonsContainer.enabled = true;
        
        this.entity.qualityButtonsContainer.setLocalPosition(0, -50, 0);
        this.entity.qualityButtonsContainer.setLocalScale(1, 1, 1);
        this.entity.qualityButtonsContainer.enabled = true;
        this.entity.buttonSettings.enabled = false;
        
        settingsPanelPosition.y = this.getSettingPanelContainerY();
        this.entity.settingsPanelContainer.setLocalPosition(settingsPanelPosition);
    } else {
        this.entity.soundButtonsContainer.enabled = true;
        this.entity.qualityButtonsContainer.enabled = true;
        settingsPanelPosition.y = this.getSettingPanelContainerY();
        this.entity.settingsPanelContainer.setLocalPosition(settingsPanelPosition);
    }
};

SettingsPanel.prototype.getSettingPanelContainerY = function() {    
    const autoQuality = useAutoQuality();
    const externalMute = isExternalMute();
    
    if(autoQuality || externalMute) {
        return 0;
    } else {
        return -50;
    }
};

SettingsPanel.prototype.rescalePressed = function() {    
    this.app.fire(EventTypes.QUALITY_NEXT);    
};

SettingsPanel.prototype.enableAudio = function() {    
    this.app.fire(EventTypes.ENABLE_AUDIO);
    if(window.famobi_analytics) {
          famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
                bgmVolume: 1,
                sfxVolume: 1
            });
    }
    this.app.fire(EventTypes.SAVE_APP);
};

SettingsPanel.prototype.disableAudio = function() {    
    this.app.fire(EventTypes.DISABLE_AUDIO);
    if(window.famobi_analytics) {
          famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
                bgmVolume: 0,
                sfxVolume: 0
            });
    }
    this.app.fire(EventTypes.SAVE_APP);
};

SettingsPanel.prototype.updateQualityButtons = function() {    
    this.entity.buttonQualityLow.enabled = ScaleManager.qualityIndex === ScaleManager.QUALITY_LOW;
    this.entity.buttonQualityMedium.enabled = ScaleManager.qualityIndex === ScaleManager.QUALITY_MEDIUM;
    this.entity.buttonQualityHigh.enabled = ScaleManager.qualityIndex === ScaleManager.QUALITY_HIGH;
};

SettingsPanel.prototype.updateAudioButtons = function(dontSaveState) {    
    this.entity.buttonSoundOn.enabled = SoundController.audioEnabled;
    this.entity.buttonSoundOff.enabled = !SoundController.audioEnabled;
};

SettingsPanel.prototype.toggleSettings = function() {  
    this.entity.settingsPanelOpened = !this.entity.settingsPanelOpened;
    
    this.entity.buttonSettings.angle = this.entity.settingsPanelOpened ? 0 : 180;
    this.entity.buttonSettings.tween(this.entity.buttonSettings)
        .to({angle: this.entity.settingsPanelOpened ? 180 : 0}, 0.2, pc.SineInOut)
        .on('update', () => this.entity.buttonSettings.setLocalEulerAngles(0, 0, this.entity.buttonSettings.angle))
        .start();
    
    const soundButtonsContainerPosition = this.entity.soundButtonsContainer.getLocalPosition();    
    this.entity.soundButtonsContainer.tween(this.entity.soundButtonsContainer.getLocalPosition())
        .to(new pc.Vec3(soundButtonsContainerPosition.x, this.entity.settingsPanelOpened ? -100 : 0 , soundButtonsContainerPosition.z), 0.3, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.CircularOut)
        .start();
    this.entity.soundButtonsContainer.tween(this.entity.soundButtonsContainer.getLocalScale())
        .to(this.entity.settingsPanelOpened ? new pc.Vec3(1, 1, 1) : new pc.Vec3(0, 0, 0), this.entity.settingsPanelOpened ? 0.3 : 0.12, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.SineOut)
        .start();
    
    
    const qualityButtonsContainerPosition = this.entity.qualityButtonsContainer.getLocalPosition();    
    this.entity.qualityButtonsContainer.tween(this.entity.qualityButtonsContainer.getLocalPosition())
        .to(new pc.Vec3(qualityButtonsContainerPosition.x, this.entity.settingsPanelOpened ? -200 : 0 , qualityButtonsContainerPosition.z), 0.3, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.CircularOut)
        .start();
    this.entity.qualityButtonsContainer.tween(this.entity.qualityButtonsContainer.getLocalScale())
        .to(this.entity.settingsPanelOpened ? new pc.Vec3(1, 1, 1) : new pc.Vec3(0, 0, 0), this.entity.settingsPanelOpened ? 0.3 : 0.15, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.SineOut)
        .start();
};


// mainMenu.js
/* jshint esversion: 6 */
var MainMenu = pc.createScript('mainMenu');

MainMenu.prototype.initialize = function() {
    this.entity.headingContainer = this.entity.findByName("HeadingContainer");
    this.entity.headingIcon = this.entity.findByName("HeadingIcon");
    this.entity.handContainer = this.entity.findByName("HandContainer");
    this.entity.tutorialHand = this.entity.handContainer.findByName('TutorialHand');
    this.entity.clickZone = this.entity.handContainer.findByName('ClickZone');
    
    this.entity.headingIcon.enabled = !skipTitleScreen();
    this.entity.handContainer.enabled = !skipTitleScreen();
    this.entity.clickZone.enabled = !skipTitleScreen();
    
        
    this.app.on(EventTypes.PRELOADER_FINISHED, () => {
        if(!this.preloaderFinsihed) {
            this.preloaderFinsihed = true;
            this.assignAction(this.entity.clickZone, this.playPressed, this);
        }
    });
    
    /* show method */
    this.entity.show = function() {
        this.enabled = true;
        
        if(skipTitleScreen()) {
              this.clickZone.enabled = this.handContainer.enabled = this.headingIcon.enabled = false;
        } else {
            
        }

        /* tween heading icon */
        this.headingIcon.element.opacity = 0.0;
        var headingAppearingTween = 
        this.headingIcon.tween(this.headingIcon.element)
            .to({opacity: 1.0}, 0.5, pc.SineIn)
            .delay(0.1).start();

        this.headingContainer.setLocalScale(0.6, 0.6, 0.6);
        var headingAppearingScaleTween = 
        this.headingContainer.tween(this.headingContainer.getLocalScale())
            .to(new pc.Vec3(1.0, 1.0, 1.0), 0.5, pc.BackOut)
            .delay(0.1).start();

        this.tutorialHand.tween(this.tutorialHand.getLocalScale())
            .to(new pc.Vec3(1.25, 1.25, 1.25), 0.55, pc.SineInOut)
            .yoyo(true)
            .repeat(100000)
            .start();

    }.bind(this.entity);
    
    
    /* hide method */
    this.entity.hide = function() {
        
          /* tween heading icon */
        this.headingIcon.element.opacity = 1.0;
        var headingAppearingTween = 
        this.headingIcon.tween(this.headingIcon.element)
            .to({opacity: 0.0}, 0.35, pc.SineOut)
            .start();
        
        var position = this.headingIcon.getLocalPosition();
        this.headingIcon.tween(this.headingIcon.getLocalPosition())
            .to(new pc.Vec3(position.x, position.y + 50, position.z), 0.35, pc.SineIn)
            .start();
        
        this.tutorialHand.tween(this.tutorialHand.element)
            .to({opacity: 0.0}, 0.25, pc.Linear)
            .on('complete', () => {
                this.enabled = false;
            })
            .start();
        
    }.bind(this.entity);
    
    
    this.entity.show();
};

MainMenu.prototype.update = function(dt) {
     if(skipTitleScreen()) {
        this.entity.clickZone.enabled = this.entity.handContainer.enabled = this.entity.headingIcon.enabled = false;
    }
};

MainMenu.prototype.assignAction = function(button, handler, handlerContext) {
     if(this.app.touch) {
         button.element.on('touchstart', handler, handlerContext);
     } if(this.app.mouse) {
          button.element.on('mousedown', handler, handlerContext);
     }
};

MainMenu.prototype.playPressed = function() {
    this.entity.clickZone.enabled = false;
    WindowManager.startGameplay();
 
    this.app.fire(EventTypes.PLAY_PRESSED);
    this.entity.delayedCall(100, () => this.app.fire(EventTypes.MEASURE_PERFORMANCE));
};


// levelUI.js
var LevelUi = pc.createScript('levelUi');

LevelUi.prototype.initialize = function() {
    
    this.entity.progressVertical = this.entity.findByName('LevelProgressVertical');
    
    this.entity.show = function() {
        this.progressVertical.show();
    }.bind(this.entity);
    
    this.entity.hide = function() {
        this.progressVertical.hide();
    }.bind(this.entity);
};


LevelUi.prototype.update = function(dt) {
    
};



// brandingImage.js
/* jshint esversion: 6 */
var BrandingImage = pc.createScript('brandingImage');

BrandingImage.prototype.initialize = function() {
    
    this.entity.element.opacity = 0.0;
    
    if(window.famobi) {
        
        var self = this;
        this.app.loader.getHandler("texture").crossOrigin = "anonymous";

        var asset = new pc.Asset("brandingImage", "texture", {
            url: window.famobi.getBrandingButtonImage()
        });

        this.app.assets.add(asset);

        asset.on("error", function (message) {
            famobi.log("Branding image loading failed: ", message);
        });

        asset.on("load", function (asset) {
            var material = self.entity.element.texture = asset.resource;
            self.entity.element.opacity = 1;
            self.assignAction(self.entity, self.brandingPressed, self);
        });

        this.app.assets.load(asset);
    }
    
    this.app.on(EventTypes.PLAY_PRESSED, this.handlePlayPressed, this);
};

BrandingImage.prototype.handlePlayPressed = function() {
   const position = this.entity.getLocalPosition().clone(); 
   this.entity.tween(this.entity.getLocalPosition())   
       .to(new pc.Vec3(position.x, position.y - 200, position.z), 0.35, pc.SineOut)
       .start();
    
   this.entity.tween(this.entity.element)   
       .to({opacity: 0}, 0.35, pc.Linear)
       .start()
       .on('complete', () => this.entity.enabled = false);
};

BrandingImage.prototype.assignAction = function(button, handler, handlerContext) {
     if(this.app.touch) {
         button.element.on('touchstart', handler, handlerContext);
     } if(this.app.mouse) {
          button.element.on('mousedown', handler, handlerContext);
     }
};

BrandingImage.prototype.update = function(dt) {
    
};

BrandingImage.prototype.brandingPressed = function() {
    if(window.famobi) {
        window.famobi.openBrandingLink();
    }
};


// scoresEffectManager.js
/* jshint esversion: 6 */
var ScoresEffectManager = pc.createScript('scoresEffectManager');

ScoresEffectManager.attributes.add('cacheSize', {
    description: 'num scores in cache',
    type: 'number',
    default: 15
});

ScoresEffectManager.attributes.add('maxScoresOnScreen', {
    description: 'max scores on screen',
    type: 'number',
    default: 15
});

ScoresEffectManager.prototype.initialize = function() {
    this.particleCache = [];
    this.activeParticles = [];
    this.prepareCache();
    this.app.on(EventTypes.SHOW_SCORES_EFFECT, this.addScoresEffect, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
};

 var _transformedForward = new pc.Vec3();
ScoresEffectManager.prototype.getYaw = function (quat) {
    var transformedForward = _transformedForward;
    quat.transformVector(pc.Vec3.FORWARD, transformedForward);

    return Math.atan2(-transformedForward.x, -transformedForward.z) * pc.math.RAD_TO_DEG;    
};


ScoresEffectManager.prototype.reset = function() {
    for(let i = this.activeParticles.length - 1; i > -1; i--) {
        this.resetParticle(this.activeParticles[i]);
    }
};

ScoresEffectManager.prototype.update = function(dt) {
    this.activeParticles.forEach(particle => this.updateParticle(particle, dt));
};

ScoresEffectManager.prototype.updateParticle = function(particle, dt) {
    particle.setLocalEulerAngles(0, this.getYaw(this.app.root.findByName('Camera').getRotation()), 0);
    particle.lifeTime += dt;
     if(particle.lifeTime >= particle.duration) {
         this.resetParticle(particle);
     }
};

ScoresEffectManager.prototype.addScoresEffect = function(value, position) {
    if(this.activeParticles.length > this.maxScoresOnScreen) {
        this.resetParticle(this.activeParticles[0]);
    }
    this.addParticle(value, position);
};

ScoresEffectManager.prototype.addParticle = function(value, position) {
    let particle;

    if(this.particleCache.length > 0) {
        particle = this.particleCache.splice(this.particleCache.length - 1, 1)[0];
    } else {
        particle = this.app.root.findByName("ObjectsPrefabs").findByName("ScoresEarnedText").clone();
        this.entity.addChild(particle);
    }

    
    if(particle.scaleTween && particle.scaleTween.playing) {
        particle.scaleTween.stop();
    }
    
    if(particle.opacityTween && particle.opacityTween.playing) {
        particle.opacityTween.stop();
    }
    
    particle.enabled = true;
    particle.completed = false;
    particle.element.text = '+' + value;
    particle.element.opacity = 0.9;
    particle.setPosition(position.x, position.y + 0.4, position.z);
    particle.setLocalScale(0.02 + pc.math.clamp(value, 1, 20) * 0.0004, 0.02 + pc.math.clamp(value, 1, 20) * 0.0004, 0.02 + pc.math.clamp(value, 1, 20) * 0.0004);
    particle.duration = 0.75;   
    particle.lifeTime = 0;
    
    particle.scaleTween = particle.tween(particle.getLocalPosition())
        .to(new pc.Vec3(position.x, position.y + 2.6, position.z), particle.duration, pc.SineInOut)         
        .start();
    
    particle.opacityTween = particle.tween(particle.element)
        .to({opacity: 0}, particle.duration * 0.98, pc.SineIn) 
        .start();

    this.activeParticles.push(particle);
};


ScoresEffectManager.prototype.resetParticle = function(particle) {
    const index = this.activeParticles.indexOf(particle);
    if(index != -1) {
        this.activeParticles.splice(index, 1);
    }
    particle.enabled = false;
    particle.setPosition(0, -50, 0);
    this.particleCache.push(particle);
};


ScoresEffectManager.prototype.prepareCache = function() {
    this.particleCache = [];
    const basicParticle = this.app.root.findByName('ObjectsPrefabs').findByName("ScoresEarnedText");
    for(let i = 0; i < this.cacheSize; i++) {
        const particle = basicParticle.clone();
        particle.enabled = false;
        particle.setPosition(0, -50, 0);
        particle.completed = true;
        this.entity.addChild(particle);
        this.particleCache.push(particle);
    }
    
    console.log("Prepared score effects");
};

// groupConfig.js
var GroupConfig = pc.createScript('groupConfig');

GroupConfig.attributes.add('rotation', {
    type: 'number',
    default: 0,
    min: -180,
    max: 180
});


GroupConfig.prototype.initialize = function() {
    
};


GroupConfig.prototype.update = function(dt) {
    
};

// orbitCamera.js
/* jshint esversion: 6 */
var OrbitCamera = pc.createScript('orbitCamera');

OrbitCamera.attributes.add('distanceMax', {type: 'number', default: 0, title: 'Distance Max', description: 'Setting this at 0 will give an infinite distance limit'});
OrbitCamera.attributes.add('distanceMin', {type: 'number', default: 0, title: 'Distance Min'});
OrbitCamera.attributes.add('pitchAngleMax', {type: 'number', default: 90, title: 'Pitch Angle Max (degrees)'});
OrbitCamera.attributes.add('pitchAngleMin', {type: 'number', default: -90, title: 'Pitch Angle Min (degrees)'});

OrbitCamera.attributes.add('inertiaFactor', {
    type: 'number',
    default: 0,
    title: 'Inertia Factor',
    description: 'Higher value means that the camera will continue moving after the user has stopped dragging. 0 is fully responsive.'
});

OrbitCamera.attributes.add('focusEntity', {
    type: 'entity',
    title: 'Focus Entity',
    description: 'Entity for the camera to focus on. If blank, then the camera will use the whole scene'
});

OrbitCamera.attributes.add('frameOnStart', {
    type: 'boolean',
    default: true,
    title: 'Frame on Start',
    description: 'Frames the entity or scene at the start of the application."'
});


OrbitCamera.attributes.add('initialDistance', {
    type: 'number',
    default: 56
});

OrbitCamera.attributes.add('initialPitch', {
    type: 'number',
    default: -9
});

OrbitCamera.attributes.add('initialYaw', {
    type: 'number',
    default: 0
});

// Property to get and set the distance between the pivot point and camera
// Clamped between this.distanceMin and this.distanceMax
Object.defineProperty(OrbitCamera.prototype, "distance", {
    get: function() {
        return this._targetDistance;
    },

    set: function(value) {
        this._targetDistance = this._clampDistance(value);
    }
});


// Property to get and set the pitch of the camera around the pivot point (degrees)
// Clamped between this.pitchAngleMin and this.pitchAngleMax
// When set at 0, the camera angle is flat, looking along the horizon
Object.defineProperty(OrbitCamera.prototype, "pitch", {
    get: function() {
        return this._targetPitch;
    },

    set: function(value) {
        this._targetPitch = this._clampPitchAngle(value);
    }
});


// Property to get and set the yaw of the camera around the pivot point (degrees)
Object.defineProperty(OrbitCamera.prototype, "yaw", {
    get: function() {
        return this._targetYaw;
    },

    set: function(value) {
        this._targetYaw = value;

        // Ensure that the yaw takes the shortest route by making sure that 
        // the difference between the targetYaw and the actual is 180 degrees
        // in either direction
        var diff = this._targetYaw - this._yaw;
        var reminder = diff % 360;
        if (reminder > 180) {
            this._targetYaw = this._yaw - (360 - reminder);
        } else if (reminder < -180) {
            this._targetYaw = this._yaw + (360 + reminder);
        } else {
            this._targetYaw = this._yaw + reminder;
        }
    }
});


// Property to get and set the world position of the pivot point that the camera orbits around
Object.defineProperty(OrbitCamera.prototype, "pivotPoint", {
    get: function() {
        return this._pivotPoint;
    },

    set: function(value) {
        this._pivotPoint.copy(value);
    }
});


// Moves the camera to look at an entity and all its children so they are all in the view
OrbitCamera.prototype.focus = function (focusEntity) {
    // Calculate an bounding box that encompasses all the models to frame in the camera view
    this._buildAabb(focusEntity, 0);

    var halfExtents = this._modelsAabb.halfExtents;

    var distance = Math.max(halfExtents.x, Math.max(halfExtents.y, halfExtents.z));
    distance = (distance / Math.tan(0.5 * this.entity.camera.fov * pc.math.DEG_TO_RAD));
    distance = (distance * 2);

    this.distance = distance;

    this._removeInertia();

    this._pivotPoint.copy(this._modelsAabb.center);
};


OrbitCamera.distanceBetween = new pc.Vec3();

// Set the camera position to a world position and look at a world position
// Useful if you have multiple viewing angles to swap between in a scene
OrbitCamera.prototype.resetAndLookAtPoint = function (resetPoint, lookAtPoint) {
    this.pivotPoint.copy(lookAtPoint);
    this.entity.setPosition(resetPoint);

    this.entity.lookAt(lookAtPoint);

    var distance = OrbitCamera.distanceBetween;
    distance.sub2(lookAtPoint, resetPoint);
    this.distance = distance.length();

    this.pivotPoint.copy(lookAtPoint);

    var cameraQuat = this.entity.getRotation();
    this.yaw = this._calcYaw(cameraQuat);
    this.pitch = this._calcPitch(cameraQuat, this.yaw);

    this._removeInertia();
    this._updatePosition();
};


OrbitCamera.prototype.getNormalizedYaw = function () {
    const yaw = this.yaw % 360;
    return yaw < 0 ? 360 + yaw : yaw;
};


// Set camera position to a world position and look at an entity in the scene
// Useful if you have multiple models to swap between in a scene
OrbitCamera.prototype.resetAndLookAtEntity = function (resetPoint, entity) {
    this._buildAabb(entity, 0);
    this.resetAndLookAtPoint(resetPoint, this._modelsAabb.center);
};


// Set the camera at a specific, yaw, pitch and distance without inertia (instant cut)
OrbitCamera.prototype.reset = function (yaw, pitch, distance) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.distance = distance;

    this._removeInertia();
};

/////////////////////////////////////////////////////////////////////////////////////////////
// Private methods

OrbitCamera.prototype.initialize = function () {
    var self = this;
    var onWindowResize = function () {
        self._checkAspectRatio();
    };

    window.addEventListener('resize', onWindowResize, false);

    this._checkAspectRatio();

    // Find all the models in the scene that are under the focused entity
    this._modelsAabb = new pc.BoundingBox();
    this._buildAabb(this.focusEntity || this.app.root, 0);

    this.entity.lookAt(this._modelsAabb.center);

    this._pivotPoint = new pc.Vec3();
    this._pivotPoint.copy(this._modelsAabb.center);

    // Calculate the camera euler angle rotation around x and y axes
    // This allows us to place the camera at a particular rotation to begin with in the scene
    var cameraQuat = this.entity.getRotation();

    // Preset the camera
    this._yaw = this._calcYaw(cameraQuat);
    this._pitch = this._clampPitchAngle(this._calcPitch(cameraQuat, this._yaw));
    this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

    this._distance = 0;

    this._targetYaw = this._yaw;
    this._targetPitch = this._pitch;

    // If we have ticked focus on start, then attempt to position the camera where it frames
    // the focused entity and move the pivot point to entity's position otherwise, set the distance
    // to be between the camera position in the scene and the pivot point
    if (this.frameOnStart) {
        this.focus(this.focusEntity || this.app.root);
    } else {
        var distanceBetween = new pc.Vec3();
        distanceBetween.sub2(this.entity.getPosition(), this._pivotPoint);
        this._distance = this._clampDistance(distanceBetween.length());
    }

    this._targetDistance = this._distance;

    // Reapply the clamps if they are changed in the editor
    this.on('attr:distanceMin', function (value, prev) {
        this._targetDistance = this._clampDistance(this._distance);
    });

    this.on('attr:distanceMax', function (value, prev) {
        this._targetDistance = this._clampDistance(this._distance);
    });

    this.on('attr:pitchAngleMin', function (value, prev) {
        this._targetPitch = this._clampPitchAngle(this._pitch);
    });

    this.on('attr:pitchAngleMax', function (value, prev) {
        this._targetPitch = this._clampPitchAngle(this._pitch);
    });

    // Focus on the entity if we change the focus entity
    this.on('attr:focusEntity', function (value, prev) {
        if (this.frameOnStart) {
            this.focus(value || this.app.root);
        } else {
            this.resetAndLookAtEntity(this.entity.getPosition(), value || this.app.root);
        }
    });

    this.on('attr:frameOnStart', function (value, prev) {
        if (value) {
            this.focus(this.focusEntity || this.app.root);
        }
    });

    this.on('destroy', function() {
        window.removeEventListener('resize', onWindowResize, false);
    });
    
    this.yaw = 0;
    
    this.app.on(EventTypes.STAGE_LOADING_STARTED, this.refocus, this);
    this.app.on(EventTypes.STAGE_LOADED, this.refocus, this);
    this.app.on(EventTypes.POSTINITIALIZE, this.postinitialize, this);
    this.app.on(EventTypes.SHAKE_CAMERA, this.shakeCamera, this);
};

OrbitCamera.prototype.postinitialize = function() {
    setTimeout(() => this.gameLoaded = true, 0);
};

OrbitCamera.prototype.refocus = function() {
    this.focusEntity = this.focusEntity;  
    this.yaw = 0;    
};

OrbitCamera.prototype.update = function(dt) {
    // Add inertia, if any
    var t = this.inertiaFactor === 0 ? 1 : Math.min(dt / this.inertiaFactor, 1);
    this._distance = (GameplayController.gameStarted && this.gameLoaded) ? pc.math.lerp(this._distance, this._targetDistance, t) : this.initialDistance;
    this._yaw =  (GameplayController.gameStarted && this.gameLoaded) ? pc.math.lerp(this._yaw, this._targetYaw, t) : this.initialYaw;
    this._pitch =  (GameplayController.gameStarted && this.gameLoaded) ? pc.math.lerp(this._pitch, this._targetPitch, t) : this.initialPitch;

    this._updatePosition();
    this._updateCameraShaking(dt);
    
    if(TutorialController.getInstance().isActive()) {
        if(TutorialController.getInstance().currentStep.isCorrectCameraYaw(this.getNormalizedYaw())) {
            TutorialController.getInstance().currentStep.dispatchCorrectYawSet();
        }
    }
};

OrbitCamera.prototype.shakeCamera = function(intencity, duration) {
    this.cameraShakeTimer = duration;
    this.cameraShakeIntencity = intencity;
};

OrbitCamera.prototype._updateCameraShaking = function (dt) {
    
   this.cameraShakeTimer -= dt; 
    
   let levelController = this.app.root.findByName('GameplayContainer').script.levelController;
   if(levelController.earthquakeTimer > 0) {
       this.earthquakeTimer = (this.earthquakeTimer || 1) + 1;
           
       if(this.earthquakeTimer % 2 === 0) {
            let pos = this.entity.getPosition();
            pos.y += pc.math.random(-0.35, 0.35);
            pos.x += pc.math.random(-0.35, 0.35);
            pos.z += pc.math.random(-0.35, 0.35);
            this.entity.setPosition(pos);   
       }
   } else if(this.cameraShakeTimer >= 0) {
         let pos = this.entity.getPosition();
         let intencity = this.cameraShakeIntencity || 0.2;
         pos.y += pc.math.random(-intencity, intencity);
         pos.x += pc.math.random(-intencity, intencity);
         pos.z += pc.math.random(-intencity, intencity);
         this.entity.setPosition(pos);   
   }
};

OrbitCamera.prototype._updatePosition = function () {
    // Work out the camera position based on the pivot point, pitch, yaw and distance
    this.entity.setLocalPosition(0,0,0);
    this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

    var position = this.entity.getPosition();
    position.copy(this.entity.forward);
    position.scale(-this._distance);
    position.add(this.pivotPoint);
    this.entity.setPosition(position);
};


OrbitCamera.prototype._removeInertia = function () {
    this._yaw = this._targetYaw;
    this._pitch = this._targetPitch;
    this._distance = this._targetDistance;
};


OrbitCamera.prototype._checkAspectRatio = function () {
    var height = this.app.graphicsDevice.height;
    var width = this.app.graphicsDevice.width;

    // Match the axis of FOV to match the aspect ratio of the canvas so
    // the focused entities is always in frame
    this.entity.camera.horizontalFov = height > width;
};


OrbitCamera.prototype._buildAabb = function (entity, modelsAdded) {
    var i = 0;

    if (entity.model) {
        var mi = entity.model.meshInstances;
        if(!mi) {
            famobi.log(entity.name + ' is faulty');
        }
        for (i = 0; i < mi.length; i++) {
            if (modelsAdded === 0) {
                this._modelsAabb.copy(mi[i].aabb);
            } else {
                this._modelsAabb.add(mi[i].aabb);
            }

            modelsAdded += 1;
        }
    }

    for (i = 0; i < entity.children.length; ++i) {
        modelsAdded += this._buildAabb(entity.children[i], modelsAdded);
    }

    return modelsAdded;
};


OrbitCamera.prototype._calcYaw = function (quat) {
    var transformedForward = new pc.Vec3();
    quat.transformVector(pc.Vec3.FORWARD, transformedForward);

    return Math.atan2(-transformedForward.x, -transformedForward.z) * pc.math.RAD_TO_DEG;
};


OrbitCamera.prototype._clampDistance = function (distance) {
    if (this.distanceMax > 0) {
        return pc.math.clamp(distance, this.distanceMin, this.distanceMax);
    } else {
        return Math.max(distance, this.distanceMin);
    }
};


OrbitCamera.prototype._clampPitchAngle = function (pitch) {
    // Negative due as the pitch is inversed since the camera is orbiting the entity
    return pc.math.clamp(pitch, -this.pitchAngleMax, -this.pitchAngleMin);
};


OrbitCamera.quatWithoutYaw = new pc.Quat();
OrbitCamera.yawOffset = new pc.Quat();

OrbitCamera.prototype._calcPitch = function(quat, yaw) {
    var quatWithoutYaw = OrbitCamera.quatWithoutYaw;
    var yawOffset = OrbitCamera.yawOffset;

    yawOffset.setFromEulerAngles(0, -yaw, 0);
    quatWithoutYaw.mul2(yawOffset, quat);

    var transformedForward = new pc.Vec3();

    quatWithoutYaw.transformVector(pc.Vec3.FORWARD, transformedForward);

    return Math.atan2(transformedForward.y, -transformedForward.z) * pc.math.RAD_TO_DEG;
};

// touch-input.js
var TouchInput = pc.createScript('touchInput');

TouchInput.attributes.add('orbitSensitivity', {
    type: 'number', 
    default: 0.4, 
    title: 'Orbit Sensitivity', 
    description: 'How fast the camera moves around the orbit. Higher is faster'
});

TouchInput.attributes.add('distanceSensitivity', {
    type: 'number', 
    default: 0.2, 
    title: 'Distance Sensitivity', 
    description: 'How fast the camera moves in and out. Higher is faster'
});

TouchInput.attributes.add('enablePanning', {
    type: 'boolean',
    default: false,
    title: 'Enable panning'
});

// initialize code called once per entity
TouchInput.prototype.initialize = function() {
    this.orbitCamera = this.entity.script.orbitCamera;
    
    // Store the position of the touch so we can calculate the distance moved
    this.lastTouchPoint = new pc.Vec2();
    this.lastPinchMidPoint = new pc.Vec2();
    this.lastPinchDistance = 0;
    
    if (this.orbitCamera && this.app.touch) {
        // Use the same callback for the touchStart, touchEnd and touchCancel events as they 
        // all do the same thing which is to deal the possible multiple touches to the screen
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this);
        
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        
        this.on('destroy', function() {
            this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
            this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
            this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this);

            this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        });
    }
};


TouchInput.prototype.getPinchDistance = function (pointA, pointB) {
    // Return the distance between the two points
    var dx = pointA.x - pointB.x;
    var dy = pointA.y - pointB.y;    
    
    return Math.sqrt((dx * dx) + (dy * dy));
};


TouchInput.prototype.calcMidPoint = function (pointA, pointB, result) {
    result.set(pointB.x - pointA.x, pointB.y - pointA.y);
    result.scale(0.5);
    result.x += pointA.x;
    result.y += pointA.y;
};


TouchInput.prototype.onTouchStartEndCancel = function(event) {
    // We only care about the first touch for camera rotation. As the user touches the screen, 
    // we stored the current touch position
    var touches = event.touches;
    if (touches.length == 1) {
        this.lastTouchPoint.set(touches[0].x, touches[0].y);
    
    } else if (touches.length == 2) {
        // If there are 2 touches on the screen, then set the pinch distance
        this.lastPinchDistance = this.getPinchDistance(touches[0], touches[1]);
        this.calcMidPoint(touches[0], touches[1], this.lastPinchMidPoint);
    }
};


TouchInput.fromWorldPoint = new pc.Vec3();
TouchInput.toWorldPoint = new pc.Vec3();
TouchInput.worldDiff = new pc.Vec3();


TouchInput.prototype.pan = function(midPoint) {
    if(!this.enablePanning) {
        return;
    }
    var fromWorldPoint = TouchInput.fromWorldPoint;
    var toWorldPoint = TouchInput.toWorldPoint;
    var worldDiff = TouchInput.worldDiff;
    
    // For panning to work at any zoom level, we use screen point to world projection
    // to work out how far we need to pan the pivotEntity in world space 
    var camera = this.entity.camera;
    var distance = this.orbitCamera.distance;
    
    camera.screenToWorld(midPoint.x, midPoint.y, distance, fromWorldPoint);
    camera.screenToWorld(this.lastPinchMidPoint.x, this.lastPinchMidPoint.y, distance, toWorldPoint);
    
    worldDiff.sub2(toWorldPoint, fromWorldPoint);
     
    this.orbitCamera.pivotPoint.add(worldDiff);    
};


TouchInput.pinchMidPoint = new pc.Vec2();

TouchInput.prototype.onTouchMove = function(event) {
    
    var pinchMidPoint = TouchInput.pinchMidPoint;
    
    // We only care about the first touch for camera rotation. Work out the difference moved since the last event
    // and use that to update the camera target position 
    var touches = event.touches;
    if (touches.length == 1) {
        var touch = touches[0];
        
        this.orbitCamera.pitch -= (touch.y - this.lastTouchPoint.y) * this.orbitSensitivity;
        if(!TutorialController.getInstance().isActive() || TutorialController.getInstance().currentStep.isCameraRotatingAllowed()) {
            this.orbitCamera.yaw -= (touch.x - this.lastTouchPoint.x) * this.orbitSensitivity;
        }
        
        this.lastTouchPoint.set(touch.x, touch.y);
    
    } else if (touches.length == 2) {
        // Calculate the difference in pinch distance since the last event
        var currentPinchDistance = this.getPinchDistance(touches[0], touches[1]);
        var diffInPinchDistance = currentPinchDistance - this.lastPinchDistance;
        this.lastPinchDistance = currentPinchDistance;
                
        this.orbitCamera.distance -= (diffInPinchDistance * this.distanceSensitivity * 0.1) * (this.orbitCamera.distance * 0.1);
        
        // Calculate pan difference
        this.calcMidPoint(touches[0], touches[1], pinchMidPoint);
        this.pan(pinchMidPoint);
        this.lastPinchMidPoint.copy(pinchMidPoint);
    }
};


// mouse-input.js
var MouseInput = pc.createScript('mouseInput');

MouseInput.attributes.add('orbitSensitivity', {
    type: 'number', 
    default: 0.3, 
    title: 'Orbit Sensitivity', 
    description: 'How fast the camera moves around the orbit. Higher is faster'
});

MouseInput.attributes.add('distanceSensitivity', {
    type: 'number', 
    default: 0.15, 
    title: 'Distance Sensitivity', 
    description: 'How fast the camera moves in and out. Higher is faster'
});

MouseInput.attributes.add('enablePanning', {
    type: 'boolean',
    default: false,
    title: 'Enable panning'
});



// initialize code called once per entity
MouseInput.prototype.initialize = function() {
    this.orbitCamera = this.entity.script.orbitCamera;
        
    if (this.orbitCamera) {
        var self = this;
        
        var onMouseOut = function (e) {
           self.onMouseOut(e);
        };
        
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
        this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);

        // Listen to when the mouse travels out of the window
        window.addEventListener('mouseout', onMouseOut, false);
        
        // Remove the listeners so if this entity is destroyed
        this.on('destroy', function() {
            this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
            this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
            this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
            this.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);

            window.removeEventListener('mouseout', onMouseOut, false);
        });
    }
    
    // Disabling the context menu stops the browser displaying a menu when
    // you right-click the page
    this.app.mouse.disableContextMenu();
  
    this.lookButtonDown = false;
    this.panButtonDown = false;
    this.lastPoint = new pc.Vec2();
};


MouseInput.fromWorldPoint = new pc.Vec3();
MouseInput.toWorldPoint = new pc.Vec3();
MouseInput.worldDiff = new pc.Vec3();


MouseInput.prototype.pan = function(screenPoint) {
    if(!this.enablePanning) {
        return;
    }
    
    var fromWorldPoint = MouseInput.fromWorldPoint;
    var toWorldPoint = MouseInput.toWorldPoint;
    var worldDiff = MouseInput.worldDiff;
    
    // For panning to work at any zoom level, we use screen point to world projection
    // to work out how far we need to pan the pivotEntity in world space 
    var camera = this.entity.camera;
    var distance = this.orbitCamera.distance;
    
    camera.screenToWorld(screenPoint.x, screenPoint.y, distance, fromWorldPoint);
    camera.screenToWorld(this.lastPoint.x, this.lastPoint.y, distance, toWorldPoint);

    worldDiff.sub2(toWorldPoint, fromWorldPoint);
       
    this.orbitCamera.pivotPoint.add(worldDiff);    
};


MouseInput.prototype.onMouseDown = function (event) {
    switch (event.button) {
        case pc.MOUSEBUTTON_LEFT: {
            this.lookButtonDown = true;
        } break;
            
        case pc.MOUSEBUTTON_MIDDLE: 
        case pc.MOUSEBUTTON_RIGHT: {
            this.panButtonDown = true;
        } break;
    }
};


MouseInput.prototype.onMouseUp = function (event) {
    switch (event.button) {
        case pc.MOUSEBUTTON_LEFT: {
            this.lookButtonDown = false;
        } break;
            
        case pc.MOUSEBUTTON_MIDDLE: 
        case pc.MOUSEBUTTON_RIGHT: {
            this.panButtonDown = false;            
        } break;
    }
};


MouseInput.prototype.onMouseMove = function (event) {        
    var mouse = pc.app.mouse;
    if (this.lookButtonDown) {
        this.orbitCamera.pitch -= event.dy * this.orbitSensitivity;
        if(!TutorialController.getInstance().isActive() || TutorialController.getInstance().currentStep.isCameraRotatingAllowed()) {
             this.orbitCamera.yaw -= event.dx * this.orbitSensitivity;
        }       
        
    } else if (this.panButtonDown) {
        this.pan(event);   
    }
    
    this.lastPoint.set(event.x, event.y);
};


MouseInput.prototype.onMouseWheel = function (event) {
    this.orbitCamera.distance -= event.wheel * this.distanceSensitivity * (this.orbitCamera.distance * 0.1);
    // event.event.preventDefault();
};


MouseInput.prototype.onMouseOut = function (event) {
    this.lookButtonDown = false;
    this.panButtonDown = false;
};

// detonateContainer.js
/* jshint esversion: 6 */
var DetonateContainer = pc.createScript('detonateContainer');

DetonateContainer.attributes.add('iconDefault', {
    type: 'asset'
});

DetonateContainer.attributes.add('iconPressed', {
    type: 'asset'
});

DetonateContainer.prototype.initialize = function() {   
    this.detonateButtonContainer = this.entity.findByName('DetonateButtonContainer');
    this.detonateButton = this.entity.findByName('ButtonDetonate');
    this.assignAction(this.detonateButton, this.explodeBombsPressed, this);
    
    this.initialDetonateContainerPosition = this.detonateButtonContainer.getLocalPosition().clone();
    this.detonateButtonContainer.setLocalPosition(this.initialDetonateContainerPosition.x + 200, this.initialDetonateContainerPosition.y, this.initialDetonateContainerPosition.z);
        
    this.app.once(EventTypes.GAME_STARTED, this.onGameStarted, this);
};

DetonateContainer.prototype.onGameStarted = function() {
    this.detonateButtonContainer.tween(this.detonateButtonContainer.getLocalPosition())
        .to(this.initialDetonateContainerPosition, 0.25, pc.SineOut, 0.4)
        .start();
};

DetonateContainer.prototype.update = function(dt) {
    const hasAtLeastOneBombPlaced = this.app.root.findByName("GameplayContainer").findByName('ObjectsContainer').children.reduce((acc, current) => acc || current.itemType === Item.TYPE_EXPLOSIVE, false);
};


DetonateContainer.prototype.assignAction = function(button, handler, handlerContext) {
    if(this.app.touch) {
        button.element.on('touchstart', handler, handlerContext);
    } 
    if(this.app.mouse) {
        button.element.on('mousedown', handler, handlerContext);
    } 
};

DetonateContainer.prototype.explodeBombsPressed = function() {
     if(!GameplayController.gameStarted) {
         return;
     }
     if(!TutorialController.getInstance().isActive() || TutorialController.getInstance().currentStep.isUIElementSelectionAllowed(this.detonateButtonContainer)) {
             const objectsContainer = this.app.root.findByName('GameplayContainer').findByName('ObjectsContainer');
             const bombsContainer = this.app.root.findByName('GameplayContainer').findByName('BombsContainer');

             this.app.fire(EventTypes.PLAY_AUDIO, 'detonate');

             /* TNT Blocks */ 
             const tntBlocks = objectsContainer.children.filter(item => item.itemType === Item.TYPE_EXPLOSIVE).sort((a, b) => a.bombID - b.bombID);
             for(let i = 0; i < tntBlocks.length; i++) {
                 tntBlocks[i].bombControllerScript.delayedDetonate(i * GameConfig.getAttribute('explosionDelay') * 1000 + 200);
             }

            /* icon animation */
            this.detonateButton.element.textureAsset = this.iconPressed;
            this.entity.delayedCall(120, () => {
                this.detonateButton.element.textureAsset = this.iconDefault;
            });
         
           if(TutorialController.getInstance().isActive()) {
               TutorialController.getInstance().currentStep.dispatchUIElementSelection(this.detonateButtonContainer);
           }
     }
};


// shockwave.js
pc.extend(pc.posteffect, function () {
    // Constructor - Creates an instance of our post effect
    var ShockwavePostEffect = function (graphicsDevice, fs, vs) {
        // this is the shader definition for our effect
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
        // this.shader.link();
    };

    // Our effect must derive from pc.posteffect.PostEffect
    ShockwavePostEffect = pc.inherits(ShockwavePostEffect, pc.posteffect.PostEffect);

    ShockwavePostEffect.prototype = pc.extend(ShockwavePostEffect.prototype, {
        // Every post effect must implement the render method which
        // sets any parameters that the shader might require and
        // also renders the effect on the screen
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Set the input render target to the shader. This is the image rendered from our camera
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Draw a full screen quad on the output target.
            // In this case the output target is the screen.
            // Drawing a full screen quad will run the shader that we defined above
            pc.posteffect.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ShockwavePostEffect: ShockwavePostEffect
    };
}());

var Shockwave = pc.createScript('shockwave');

Shockwave.attributes.add("fragmentShader", {type: "asset", assetType: "shader"});
Shockwave.attributes.add("vertexShader", {type: "asset", assetType: "shader"});
Shockwave.attributes.add("params", {type: "vec3", default: [10, 0.8, 0.1]});
Shockwave.attributes.add("center", {type: "vec2", default: [0.5, 0.5]});
Shockwave.attributes.add("time", {type: "number", default: 0.5});
Shockwave.attributes.add("loop", {type: "boolean", default: false});

Shockwave.prototype.initialize = function () {
    var fs = this.fragmentShader.resource;
    var vs = this.vertexShader.resource;
    this.effect = new pc.posteffect.ShockwavePostEffect(this.app.graphicsDevice, fs, vs);
    this.scope = this.app.graphicsDevice.scope;
    
    this.app.on(EventTypes.SHOCKWAVE, this.startShockwave, this);
};

Shockwave.prototype.startShockwave = function(worldPos) {
    if(GameConfig.getAttribute('shockwaveEffectEnabled')) {
        var canvas = this.app.graphicsDevice.canvas;
        var camera = this.app.root.findByName("Camera");
        var screenPos = new pc.Vec3();
        var cameraPos = camera.camera.worldToScreen(worldPos, screenPos);    
        var x = cameraPos.x * ScaleManager.qualityFactor / canvas.width;
        var y = 1.0 - (cameraPos.y * ScaleManager.qualityFactor / canvas.height);
        this.center.set(x, y);
        this.play();
    }
};

Shockwave.prototype.update = function (dt) {
     if(GameConfig.getAttribute('shockwaveEffectEnabled')) {
        if (this._start) {
            this.time += dt * 2.4;

            if (this.time > 1) {
                if (this.loop) {
                    this.time = 0;
                } else {
                    this.entity.camera.postEffects.removeEffect(this.effect);    
                }                
            }
        }
        this.scope.resolve("center").setValue(this.center.data);
        this.scope.resolve("params").setValue(this.params.data);
        this.scope.resolve("time").setValue(this.time);
     }
};

Shockwave.prototype.play = function () {
    this.entity.camera.postEffects.removeEffect(this.effect);
    
    // this.entity.camera.postEffects.destroy();
    this.entity.camera.postEffects.addEffect(this.effect, false);
    this.time = 0;
    this._start = true;
};


// ExplosionButton.js
/* jshint esversion: 6 */

var ExplosionButton = pc.createScript('explosionButton');

ExplosionButton.attributes.add('explosionType',{
    type: 'string'    
});

ExplosionButton.attributes.add('explosionSelected', {
    type: 'boolean',
    default: false
});

ExplosionButton.attributes.add('buttonIndex', {
    type: 'number'    
});

ExplosionButton.prototype.initialize = function() {
    
    /* entity children shortlinks */
    this.entity.icon = this.entity.findByName('Icon');
    this.entity.iconActive = this.entity.findByName('IconActive');
    this.entity.iconUnavailable = this.entity.findByName('IconUnavailable');
    this.entity.pad = this.entity.findByName('Pad');
    this.entity.padActive = this.entity.findByName('PadActive');
    this.entity.priceText = this.entity.findByName('Text');
    
    if(isForcedMode() && getForcedModeProperties().override.bomb_types && getForcedModeProperties().override.bomb_types.length > 0) {
        const buttonIndex = getForcedModeProperties().override.bomb_types.indexOf(this.explosionType);
        if(buttonIndex === -1) {
            this.entity.enabled = false;
            this.buttonIndex = -10;
        } else {
            this.buttonIndex = buttonIndex;
        }
    }
    
    /* inner variables */
    this.entity.hasEnoughBombPointsToPlant = true;
    
    /* set price text */
    this.entity.priceText.element.text = '' + this.getPrice();
    
    /* event handlers */
    this.app.on(EventTypes.EXPLOSION_TYPE_SELECTED, this.updateSelectionState, this);
    this.app.on(EventTypes.UPDATE_BOMB_POINTS_AMOUNT, this.updateBombPointsAmount, this);
    
    /* store initial position */
    this.initialPosition = this.entity.getLocalPosition().clone();
    this.entity.setLocalPosition(this.initialPosition.x, this.initialPosition.y - 170, this.initialPosition.z);
    
    if(this.app.touch) {
        this.entity.element.on('touchstart', this.inputHandler, this);
    } if(this.app.mouse) {
        this.entity.element.on('mousedown', this.inputHandler, this);
    }     
    
    this.app.once(EventTypes.GAME_STARTED, this.onGameStarted, this);
};

ExplosionButton.prototype.onGameStarted = function() {
    if(isForcedMode() && getForcedModeProperties().override.bomb_types && getForcedModeProperties().override.bomb_types.length > 0)  {
        if(this.buttonIndex === 0) {
             setTimeout(() => this.app.fire(EventTypes.EXPLOSION_TYPE_SELECTED, this.explosionType, this.buttonIndex), 0);
        }
        return;
    }
    
    if (!this.explosionSelected) {
        this.entity.iconActive.enabled = false;
        this.entity.padActive.enabled = false;
    } else {
        if(TutorialController.TUTORIAL_COMPLETED) {
            setTimeout(() => this.app.fire(EventTypes.EXPLOSION_TYPE_SELECTED, this.explosionType, this.buttonIndex), 0);
        } else {
            setTimeout(() => this.app.fire(EventTypes.EXPLOSION_TYPE_SELECTED, null, 10), 0);
        }
    }
};

ExplosionButton.prototype.update = function(dt) {
    if(isUnlimitedPoints()) {
        this.entity.priceText.enabled = false;
    }
};


ExplosionButton.prototype.updateBombPointsAmount = function(bombPoints) {
    this.entity.priceText.element.text = '' + this.getPrice();
    this.entity.hasEnoughBombPointsToPlant = bombPoints >= this.getPrice();
    this.updateActivityState();
};
    
ExplosionButton.prototype.getPrice = function() {
   return this.app.root.findByName('GameplayContainer').script.levelController.getBombPrice(this.explosionType);
};


ExplosionButton.prototype.updateSelectionState = function(explosionType, selectedButtonIndex) {
    this.currentlySelected = explosionType === this.explosionType;
    selectedButtonIndex = selectedButtonIndex === undefined ? 10 : selectedButtonIndex;
    if (this.currentlySelected) {
        this.select(selectedButtonIndex);
    } else {
        this.unselect(selectedButtonIndex);
    }    
};

ExplosionButton.prototype.updateActivityState = function() {
    if(this.entity.hasEnoughBombPointsToPlant) {
        this.entity.iconUnavailable.enabled = false;
        this.entity.iconActive.enabled = this.currentlySelected;
        this.entity.icon.enabled = !this.currentlySelected;
        this.entity.padActive.enabled = this.currentlySelected;
        this.entity.pad.enabled = !this.entity.padActive.enabled;
    } else {
        this.entity.iconUnavailable.enabled = true;
        this.entity.iconActive.enabled = false;
        this.entity.icon.enabled = false;
        this.entity.padActive.enabled = false;
        this.entity.pad.enabled = true;
    }
};

ExplosionButton.prototype.tweenPositionAndScale = function(targetPosition, targetScale) {
    if(this.positionTween && this.positionTween.playing) {
        this.positionTween.stop();
    }
    this.positionTween = this.entity.tween(this.entity.getLocalPosition())
        .to(targetPosition, 0.05, pc.SineInOut)
        .start();
    
    if(this.scalingTween && this.scalingTween.playing) {
        this.scalingTween.stop();
    }
    this.scalingTween = this.entity.tween(this.entity.getLocalScale())
        .to(targetScale, 0.05, pc.SineInOut)
        .start();
};

ExplosionButton.prototype.select = function(selectedButtonIndex) {        
    let targetPosition = new pc.Vec3();
    let targetScale = new pc.Vec3();
    
    targetScale.set(Constants.BOMB_BUTTON_SELECTED_SCALE, Constants.BOMB_BUTTON_SELECTED_SCALE, Constants.BOMB_BUTTON_SELECTED_SCALE);
    if(this.buttonIndex <= selectedButtonIndex) {
        targetPosition.set(this.buttonIndex * (Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_UNSELECTED_SCALE + Constants.BOMB_BUTTON_SPACING), 0, 0);
    } else {
        targetPosition.set((this.buttonIndex - 1) * (Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_UNSELECTED_SCALE + Constants.BOMB_BUTTON_SPACING) + 1 * (Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_SELECTED_SCALE + Constants.BOMB_BUTTON_SPACING), 0, 0);
    }    
    this.tweenPositionAndScale(targetPosition, targetScale);
    
    this.entity.iconActive.enabled = true;
    this.entity.padActive.enabled = true;

    this.app.fire(EventTypes.PLAY_AUDIO, 'click');
    
    if(this.iconTween && this.iconTween.playing) {
        this.iconTween.stop();
    }
    
    if(this.iconActiveTween && this.iconActiveTween.playing) {
        this.iconActiveTween.stop();
    }
    
    if(this.padTween && this.padTween.playing) {
        this.padTween.stop();
    }
    
    if(this.padActiveTween && this.padActiveTween.playing) {
        this.padActiveTween.stop();
    }
    
    this.iconActiveTween = this.entity.iconActive.tween(this.entity.iconActive.element)
        .to({opacity: 1.0}, 0.1, pc.Linear)
        .start();
    
    
    this.entity.padActive.enabled = this.entity.hasEnoughBombPointsToPlant;
    this.entity.padActive.element.opacity = 1;
    this.entity.pad.enabled = !this.entity.padActive.enabled;
    this.entity.pad.element.opacity = 1;
};

ExplosionButton.prototype.unselect = function(selectedButtonIndex) {
    let targetPosition = new pc.Vec3();
    let targetScale = new pc.Vec3();
        
    targetScale.set(Constants.BOMB_BUTTON_UNSELECTED_SCALE, Constants.BOMB_BUTTON_UNSELECTED_SCALE, Constants.BOMB_BUTTON_UNSELECTED_SCALE);
    if(this.buttonIndex <= selectedButtonIndex) {
        targetPosition.set(this.buttonIndex * (Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_UNSELECTED_SCALE + Constants.BOMB_BUTTON_SPACING), 0, 0);
    } else {
        targetPosition.set((this.buttonIndex - 1) * (Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_UNSELECTED_SCALE + Constants.BOMB_BUTTON_SPACING) + 1 * (Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_SELECTED_SCALE + Constants.BOMB_BUTTON_SPACING), 0, 0);
    }    
    this.tweenPositionAndScale(targetPosition, targetScale);
   
    
    this.entity.icon.enabled = true;
    this.entity.pad.enabled = true;
        
    if(this.iconTween && this.iconTween.playing) {
        this.iconTween.stop();
    }
    
    if(this.iconActiveTween && this.iconActiveTween.playing) {
        this.iconActiveTween.stop();
    }
            
    if(this.padTween && this.padTween.playing) {
        this.padTween.stop();
    }
    
    if(this.padActiveTween && this.padActiveTween.playing) {
        this.padActiveTween.stop();
    }
    
    this.iconActiveTween = this.entity.iconActive.tween(this.entity.iconActive.element)
        .to({opacity: 0.0}, 0.1, pc.Linear)
        .start();
    
    this.entity.padActive.enabled = false;
    this.entity.padActive.element.opacity = 1;
    this.entity.pad.enabled = !this.entity.padActive.enabled;
    this.entity.pad.element.opacity = 1;
};

ExplosionButton.prototype.inputHandler = function() {
    if(!GameplayController.gameStarted) {
        return;
    }
    
    if(TutorialController.getInstance().isActive()) {
         if(TutorialController.getInstance().currentStep.isUIElementSelectionAllowed(this.entity)) {
             this.app.fire(EventTypes.EXPLOSION_TYPE_SELECTED, this.explosionType, this.buttonIndex);
             TutorialController.getInstance().currentStep.dispatchUIElementSelection(this.entity);
         }
        
    } else {
        this.app.fire(EventTypes.EXPLOSION_TYPE_SELECTED, this.explosionType, this.buttonIndex);
    }   
};

// posteffect-bloom.js
//--------------- POST EFFECT DEFINITION------------------------//
pc.extend(pc, function () {
    var SAMPLE_COUNT = 15;

    function computeGaussian(n, theta) {
        return ((1.0 / Math.sqrt(2 * Math.PI * theta)) * Math.exp(-(n * n) / (2 * theta * theta)));
    }

    function calculateBlurValues(sampleWeights, sampleOffsets, dx, dy, blurAmount) {
        // Look up how many samples our gaussian blur effect supports.

        // Create temporary arrays for computing our filter settings.
        // The first sample always has a zero offset.
        sampleWeights[0] = computeGaussian(0, blurAmount);
        sampleOffsets[0] = 0;
        sampleOffsets[1] = 0;

        // Maintain a sum of all the weighting values.
        var totalWeights = sampleWeights[0];

        // Add pairs of additional sample taps, positioned
        // along a line in both directions from the center.
        var i, len;
        for (i = 0, len = Math.floor(SAMPLE_COUNT / 2); i < len; i++) {
            // Store weights for the positive and negative taps.
            var weight = computeGaussian(i + 1, blurAmount);
            sampleWeights[i*2] = weight;
            sampleWeights[i*2+1] = weight;
            totalWeights += weight * 2;

            // To get the maximum amount of blurring from a limited number of
            // pixel shader samples, we take advantage of the bilinear filtering
            // hardware inside the texture fetch unit. If we position our texture
            // coordinates exactly halfway between two texels, the filtering unit
            // will average them for us, giving two samples for the price of one.
            // This allows us to step in units of two texels per sample, rather
            // than just one at a time. The 1.5 offset kicks things off by
            // positioning us nicely in between two texels.
            var sampleOffset = i * 2 + 1.5;

            // Store texture coordinate offsets for the positive and negative taps.
            sampleOffsets[i*4] = dx * sampleOffset;
            sampleOffsets[i*4+1] = dy * sampleOffset;
            sampleOffsets[i*4+2] = -dx * sampleOffset;
            sampleOffsets[i*4+3] = -dy * sampleOffset;
        }

        // Normalize the list of sample weightings, so they will always sum to one.
        for (i = 0, len = sampleWeights.length; i < len; i++) {
            sampleWeights[i] /= totalWeights;
        }
    }

    /**
     * @name pc.BloomEffect
     * @class Implements the BloomEffect post processing effect
     * @constructor Creates new instance of the post effect.
     * @extends pc.PostEffect
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device of the application
     * @property {Number} bloomThreshold Only pixels brighter then this threshold will be processed. Ranges from 0 to 1
     * @property {Number} blurAmount Controls the amount of blurring.
     * @property {Number} bloomIntensity The intensity of the effect.
     */
    var BloomEffect = function (graphicsDevice) {
        // Shaders
        var attributes = {
            aPosition: pc.SEMANTIC_POSITION
        };

        var passThroughVert = [
            "attribute vec2 aPosition;",
            "",
            "varying vec2 vUv0;",
            "",
            "void main(void)",
            "{",
            "    gl_Position = vec4(aPosition, 0.0, 1.0);",
            "    vUv0 = (aPosition + 1.0) * 0.5;",
            "}"
        ].join("\n");

        // Pixel shader extracts the brighter areas of an image.
        // This is the first step in applying a bloom postprocess.
        var bloomExtractFrag = [
            "precision " + graphicsDevice.precision + " float;",
            "",
            "varying vec2 vUv0;",
            "",
            "uniform sampler2D uBaseTexture;",
            "uniform float uBloomThreshold;",
            "",
            "void main(void)",
            "{",
                 // Look up the original image color.
            "    vec4 color = texture2D(uBaseTexture, vUv0);",
            "",
                 // Adjust it to keep only values brighter than the specified threshold.
            "    gl_FragColor = clamp((color - uBloomThreshold) / (1.0 - uBloomThreshold), 0.0, 1.0);",
            "}"
        ].join("\n");

        // Pixel shader applies a one dimensional gaussian blur filter.
        // This is used twice by the bloom postprocess, first to
        // blur horizontally, and then again to blur vertically.
        var gaussianBlurFrag = [
            "precision " + graphicsDevice.precision + " float;",
            "",
            "#define SAMPLE_COUNT " + SAMPLE_COUNT,
            "",
            "varying vec2 vUv0;",
            "",
            "uniform sampler2D uBloomTexture;",
            "uniform vec2 uBlurOffsets[SAMPLE_COUNT];",
            "uniform float uBlurWeights[SAMPLE_COUNT];",
            "",
            "void main(void)",
            "{",
            "    vec4 color = vec4(0.0);",
                 // Combine a number of weighted image filter taps.
            "    for (int i = 0; i < SAMPLE_COUNT; i++)",
            "    {",
            "        color += texture2D(uBloomTexture, vUv0 + uBlurOffsets[i]) * uBlurWeights[i];",
            "    }",
            "",
            "    gl_FragColor = color;",
            "}"
        ].join("\n");

        // Pixel shader combines the bloom image with the original
        // scene, using tweakable intensity levels.
        // This is the final step in applying a bloom postprocess.
        var bloomCombineFrag = [
            "precision " + graphicsDevice.precision + " float;",
            "",
            "varying vec2 vUv0;",
            "",
            "uniform float uBloomEffectIntensity;",
            "uniform sampler2D uBaseTexture;",
            "uniform sampler2D uBloomTexture;",
            "",
            "void main(void)",
            "{",
                 // Look up the bloom and original base image colors.
            "    vec4 bloom = texture2D(uBloomTexture, vUv0) * uBloomEffectIntensity;",
            "    vec4 base = texture2D(uBaseTexture, vUv0);",
            "",
                 // Darken down the base image in areas where there is a lot of bloom,
                 // to prevent things looking excessively burned-out.
            "    base *= (1.0 - clamp(bloom, 0.0, 1.0));",
            "",
                 // Combine the two images.
            "    gl_FragColor = base + bloom;",
            "}"
        ].join("\n");

        this.extractShader = new pc.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: bloomExtractFrag
        });
        this.blurShader = new pc.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: gaussianBlurFrag
        });
        this.combineShader = new pc.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: bloomCombineFrag
        });

        // Render targets
        var width = graphicsDevice.width;
        var height = graphicsDevice.height;
        this.targets = [];
        for (var i = 0; i < 2; i++) {
            var colorBuffer = new pc.Texture(graphicsDevice, {
                format: pc.PIXELFORMAT_R8_G8_B8_A8,
                width: width >> 1,
                height: height >> 1
            });
            colorBuffer.minFilter = pc.FILTER_LINEAR;
            colorBuffer.magFilter = pc.FILTER_LINEAR;
            colorBuffer.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
            colorBuffer.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
            var target = new pc.RenderTarget(graphicsDevice, colorBuffer, { depth: false });

            this.targets.push(target);
        }

        // Effect defaults
        this.bloomThreshold = 0.25;
        this.blurAmount = 4;
        this.bloomIntensity = 1.25;

        // Uniforms
        this.sampleWeights = new Float32Array(SAMPLE_COUNT);
        this.sampleOffsets = new Float32Array(SAMPLE_COUNT * 2);
    }

    BloomEffect = pc.inherits(BloomEffect, pc.PostEffect);

    BloomEffect.prototype = pc.extend(BloomEffect.prototype, {
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Pass 1: draw the scene into rendertarget 1, using a
            // shader that extracts only the brightest parts of the image.
            scope.resolve("uBloomThreshold").setValue(this.bloomThreshold);
            scope.resolve("uBaseTexture").setValue(inputTarget.colorBuffer);
            pc.drawFullscreenQuad(device, this.targets[0], this.vertexBuffer, this.extractShader);

            // Pass 2: draw from rendertarget 1 into rendertarget 2,
            // using a shader to apply a horizontal gaussian blur filter.
            calculateBlurValues(this.sampleWeights, this.sampleOffsets, 1.0 / this.targets[1].width, 0, this.blurAmount);
            scope.resolve("uBlurWeights[0]").setValue(this.sampleWeights);
            scope.resolve("uBlurOffsets[0]").setValue(this.sampleOffsets);
            scope.resolve("uBloomTexture").setValue(this.targets[0].colorBuffer);
            pc.drawFullscreenQuad(device, this.targets[1], this.vertexBuffer, this.blurShader);

            // Pass 3: draw from rendertarget 2 back into rendertarget 1,
            // using a shader to apply a vertical gaussian blur filter.
            calculateBlurValues(this.sampleWeights, this.sampleOffsets, 0, 1.0 / this.targets[0].height, this.blurAmount);
            scope.resolve("uBlurWeights[0]").setValue(this.sampleWeights);
            scope.resolve("uBlurOffsets[0]").setValue(this.sampleOffsets);
            scope.resolve("uBloomTexture").setValue(this.targets[1].colorBuffer);
            pc.drawFullscreenQuad(device, this.targets[0], this.vertexBuffer, this.blurShader);

            // Pass 4: draw both rendertarget 1 and the original scene
            // image back into the main backbuffer, using a shader that
            // combines them to produce the final bloomed result.
            scope.resolve("uBloomEffectIntensity").setValue(this.bloomIntensity);
            scope.resolve("uBloomTexture").setValue(this.targets[0].colorBuffer);
            scope.resolve("uBaseTexture").setValue(inputTarget.colorBuffer);
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.combineShader, rect);
        }
    });

    return {
        BloomEffect: BloomEffect
    };
}());

//--------------- SCRIPT DEFINITION------------------------//
var Bloom = pc.createScript('bloom');

Bloom.attributes.add('bloomIntensity', {
    type: 'number',
    default: 1,
    min: 0,
    title: 'Intensity'
});

Bloom.attributes.add('bloomThreshold', {
    type: 'number',
    default: 0.25,
    min: 0,
    max: 1,
    precision: 2,
    title: 'Threshold'
});

Bloom.attributes.add('blurAmount', {
    type: 'number',
    default: 4,
    min: 1,
    'title': 'Blur amount'
});

Bloom.prototype.initialize = function() {
    this.effect = new pc.BloomEffect(this.app.graphicsDevice);

    this.effect.bloomThreshold = this.bloomThreshold;
    this.effect.blurAmount = this.blurAmount;
    this.effect.bloomIntensity = this.bloomIntensity;

    var queue = this.entity.camera.postEffects;

    queue.addEffect(this.effect);

    this.on('attr', function (name, value) {
        this.effect[name] = value;
    }, this);

    this.on('state', function (enabled) {
        if (enabled) {
            queue.addEffect(this.effect);
        } else {
            queue.removeEffect(this.effect);
        }
    });

    this.on('destroy', function () {
        queue.removeEffect(this.effect);
    });
};


// posteffect-brightnesscontrast.js
//--------------------------------- POST EFFECT DEFINITION -----------------------------------//
pc.extend(pc, function () {

    /**
     * @name pc.BrightnessContrastEffect
     * @class Changes the brightness and contrast of the input render target
     * @constructor Creates new instance of the post effect.
     * @extends pc.PostEffect
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device of the application
     * @property {Number} brightness Controls the brightness of the render target. Ranges from -1 to 1 (-1 is solid black, 0 no change, 1 solid white)
     * @property {Number} contrast Controls the contrast of the render target. Ranges from -1 to 1 (-1 is solid gray, 0 no change, 1 maximum contrast)
     */
    var BrightnessContrastEffect = function (graphicsDevice) {
        // Shader author: tapio / http://tapio.github.com/
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: [
                "attribute vec2 aPosition;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = vec4(aPosition, 0.0, 1.0);",
                "    vUv0 = (aPosition.xy + 1.0) * 0.5;",
                "}"
            ].join("\n"),
            fshader: [
                "precision " + graphicsDevice.precision + " float;",
                "uniform sampler2D uColorBuffer;",
                "uniform float uBrightness;",
                "uniform float uContrast;",

                "varying vec2 vUv0;",

                "void main() {",

                    "gl_FragColor = texture2D( uColorBuffer, vUv0 );",

                    "gl_FragColor.rgb += uBrightness;",

                    "if (uContrast > 0.0) {",
                        "gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) / (1.0 - uContrast) + 0.5;",
                    "} else {",
                        "gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * (1.0 + uContrast) + 0.5;",
                    "}",

                "}"
            ].join("\n")
        });

        // Uniforms
        this.brightness = 0;
        this.contrast = 0;
    };

    BrightnessContrastEffect = pc.inherits(BrightnessContrastEffect, pc.PostEffect);

    BrightnessContrastEffect.prototype = pc.extend(BrightnessContrastEffect.prototype, {
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            scope.resolve("uBrightness").setValue(this.brightness);
            scope.resolve("uContrast").setValue(this.contrast);
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        BrightnessContrastEffect: BrightnessContrastEffect
    };
}());

//--------------------------------- SCRIPT DEFINITION -----------------------------------//
var BrightnessContrast = pc.createScript('brightnessContrast');

BrightnessContrast.attributes.add('brightness', {
    type: 'number',
    default: 0,
    min: -1,
    max: 1,
    precision: 5,
    title: 'Brightness'
});

BrightnessContrast.attributes.add('contrast', {
    type: 'number',
    default: 0,
    min: -1,
    max: 1,
    precision: 5,
    title: 'Contrast'
});

BrightnessContrast.prototype.initialize = function() {
    this.effect = new pc.BrightnessContrastEffect(this.app.graphicsDevice);
    this.effect.brightness = this.brightness;
    this.effect.contrast = this.contrast;

    this.on('attr', function (name, value) {
        this.effect[name] = value;
    }, this);

    var queue = this.entity.camera.postEffects;

    queue.addEffect(this.effect);

    this.on('state', function (enabled) {
        if (enabled) {
            queue.addEffect(this.effect);
        } else {
            queue.removeEffect(this.effect);
        }
    });

    this.on('destroy', function () {
        queue.removeEffect(this.effect);
    });
};



// explosionEffectsManager.js
/* jshint esversion: 6*/ 

var ExplosionEffectsManager = pc.createScript('explosionEffectsManager');

ExplosionEffectsManager.attributes.add('cacheSize', {
    type: 'number',
    description: 'cache size for each explosion effect',
    default: 10,
    min: 1,
    max: 50
});

ExplosionEffectsManager.attributes.add('explosionEffects', {
    type: 'entity',
    array: true
});

ExplosionEffectsManager.prototype.initialize = function() {
    this.explosionsCache = {};
    this.activeExplosions = [];
    this.prepareCache();
    
    this.app.on(EventTypes.ADD_EXPLOSION_EFFECT, this.createExplosion, this);
};

ExplosionEffectsManager.prototype.prepareCache = function() {
     this.explosionEffects.forEach(effect => {
         this.explosionsCache[effect.name] = []; 
         for(let i = 0; i < this.cacheSize; i++) {
             const clonedEffect = effect.clone();
             clonedEffect.enabled = false;
             clonedEffect.setPosition(0, -50, 0);
             if(clonedEffect.parent) {
                clonedEffect.parent.removeChild(clonedEffect);
             }
             this.entity.addChild(clonedEffect);
             this.explosionsCache[effect.name].push(clonedEffect);
         } 
     });    
};

ExplosionEffectsManager.prototype.update = function(dt) {
    for(let i = this.activeExplosions.length - 1; i > -1; i--) {
        if(this.activeExplosions[i].finished) {
            this.resetEffect(this.activeExplosions[i]);
        }
    }
};

ExplosionEffectsManager.prototype.resetEffect = function(effect) {
    const index = this.activeExplosions.indexOf(effect);
    if(index != -1) {
        this.activeExplosions.splice(index, 1);
    }
    effect.exploded = false;
    effect.finished = false;
    effect.enabled = false;
    effect.setPosition(0, -50, 0);
        
    if(!this.explosionsCache[effect.name]) {
        console.error(`explosion cache: key '${effect.name}' not found`);
    } else {
        this.explosionsCache[effect.name].push(effect);
    }
};

ExplosionEffectsManager.prototype.createExplosion = function(effectName, worldPosition) {
    const effectPrototype = this.explosionEffects.find(entity => entity.name === effectName);
    let explosionVFX = null;
    
    if(!effectPrototype) {
        console.warn(`Explosion key '${effectName}' is not valid`);
        return;
    }
    
    const effectsCache = this.explosionsCache[effectName];
    if(!effectsCache) {
        console.error(`Explosion key '${effectName}' is not found in cache`);
        return;
    }
        
    if(effectsCache.length > 0) {
        explosionVFX = effectsCache.splice(effectsCache.length - 1, 1)[0];
    } else {
        explosionVFX = effectPrototype.clone();
    }
    
    
    this.activeExplosions.push(explosionVFX);
    explosionVFX.setPosition(worldPosition.clone());
    explosionVFX.setLocalScale(3, 3, 3);
    explosionVFX.enabled = true;
    explosionVFX.script.explosionVfx.explode();
};

// halo.js
var Halo = pc.createScript('halo');

Halo.attributes.add('camera', {type: 'entity'});
Halo.attributes.add('unidirectional', {type: 'boolean', default: false});

Halo.tmp = new pc.Vec3();

// initialize code called once per entity
Halo.prototype.initialize = function() {
    // Get the Entity with the plane model on it
    this.plane = this.entity.getChildren()[0];

    // Get the parent entity which is used for direction
    this.parent = this.entity.getParent();
    
    // Local position facing the camera
    this.cameraFacingPosition = new pc.Vec3();
};

// update code called every frame
Halo.prototype.update = function(dt) {
    var tmp = Halo.tmp;
    
    // Store the vector the parent is facing (note forwards is negative z)
    tmp.copy(this.parent.forward).scale(-1);

    var meshes = this.plane.model.meshInstances;

    if (this.camera) {

        // Set the glow to always face the camera
        this.entity.lookAt(this.camera.getPosition());
        
        //move closer to camera
        this.entity.getLocalRotation().transformVector(pc.Vec3.FORWARD, this.cameraFacingPosition);
        this.entity.setLocalPosition(this.cameraFacingPosition.normalize().scale(1.6));
        

        // If enabled, unidirectional means the glow fades off as it turns away from the camera
        if (this.unidirectional) {
            // Get the dot product of the parent direction and the camera direction
            var dot = -1 * tmp.dot(this.camera.forward);
            // If the dot product is less that 0 the glow is facing away from the camera
            if (dot < 0) {
                dot = 0;
            }

            // Override the opacity value on the planes mesh instance to fade to zero as the glow turns away from the camera
            meshes[0].setParameter("material_opacity", dot);                    
        } else {
            // Need to set a default value because of this issue for now: https://github.com/playcanvas/engine/issues/453
            meshes[0].setParameter("material_opacity", 1);
        }
    }
};


// dat.gui.min.js
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dat=t():e.dat=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),r=o(i);e.exports=r["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(2),r=o(i),a=n(6),l=o(a),s=n(3),u=o(s),d=n(7),c=o(d),f=n(8),_=o(f),p=n(10),h=o(p),m=n(11),b=o(m),g=n(12),v=o(g),y=n(13),w=o(y),x=n(14),E=o(x),C=n(15),A=o(C),S=n(16),k=o(S),O=n(9),T=o(O),R=n(17),L=o(R);t["default"]={color:{Color:r["default"],math:l["default"],interpret:u["default"]},controllers:{Controller:c["default"],BooleanController:_["default"],OptionController:h["default"],StringController:b["default"],NumberController:v["default"],NumberControllerBox:w["default"],NumberControllerSlider:E["default"],FunctionController:A["default"],ColorController:k["default"]},dom:{dom:T["default"]},gui:{GUI:L["default"]},GUI:L["default"]}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return"RGB"===this.__state.space?this.__state[t]:(h.recalculateRGB(this,t,n),this.__state[t])},set:function(e){"RGB"!==this.__state.space&&(h.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=e}})}function a(e,t){Object.defineProperty(e,t,{get:function(){return"HSV"===this.__state.space?this.__state[t]:(h.recalculateHSV(this),this.__state[t])},set:function(e){"HSV"!==this.__state.space&&(h.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=e}})}t.__esModule=!0;var l=n(3),s=o(l),u=n(6),d=o(u),c=n(4),f=o(c),_=n(5),p=o(_),h=function(){function e(){if(i(this,e),this.__state=s["default"].apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return e.prototype.toString=function(){return(0,f["default"])(this)},e.prototype.toHexString=function(){return(0,f["default"])(this,!0)},e.prototype.toOriginal=function(){return this.__state.conversion.write(this)},e}();h.recalculateRGB=function(e,t,n){if("HEX"===e.__state.space)e.__state[t]=d["default"].component_from_hex(e.__state.hex,n);else{if("HSV"!==e.__state.space)throw new Error("Corrupted color state");p["default"].extend(e.__state,d["default"].hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},h.recalculateHSV=function(e){var t=d["default"].rgb_to_hsv(e.r,e.g,e.b);p["default"].extend(e.__state,{s:t.s,v:t.v}),p["default"].isNaN(t.h)?p["default"].isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},h.COMPONENTS=["r","g","b","h","s","v","hex","a"],r(h.prototype,"r",2),r(h.prototype,"g",1),r(h.prototype,"b",0),a(h.prototype,"h"),a(h.prototype,"s"),a(h.prototype,"v"),Object.defineProperty(h.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(h.prototype,"hex",{get:function(){return"HEX"!==!this.__state.space&&(this.__state.hex=d["default"].rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}}),t["default"]=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(4),r=o(i),a=n(5),l=o(a),s=[{litmus:l["default"].isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:r["default"]},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:r["default"]},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:r["default"]},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:r["default"]}}},{litmus:l["default"].isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:l["default"].isArray,conversions:{RGB_ARRAY:{read:function(e){return 3===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return 4===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:l["default"].isObject,conversions:{RGBA_OBJ:{read:function(e){return!!(l["default"].isNumber(e.r)&&l["default"].isNumber(e.g)&&l["default"].isNumber(e.b)&&l["default"].isNumber(e.a))&&{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return!!(l["default"].isNumber(e.r)&&l["default"].isNumber(e.g)&&l["default"].isNumber(e.b))&&{space:"RGB",r:e.r,g:e.g,b:e.b}},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return!!(l["default"].isNumber(e.h)&&l["default"].isNumber(e.s)&&l["default"].isNumber(e.v)&&l["default"].isNumber(e.a))&&{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return!!(l["default"].isNumber(e.h)&&l["default"].isNumber(e.s)&&l["default"].isNumber(e.v))&&{space:"HSV",h:e.h,s:e.s,v:e.v}},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],u=void 0,d=void 0,c=function(){d=!1;var e=arguments.length>1?l["default"].toArray(arguments):arguments[0];return l["default"].each(s,function(t){if(t.litmus(e))return l["default"].each(t.conversions,function(t,n){if(u=t.read(e),d===!1&&u!==!1)return d=u,u.conversionName=n,u.conversion=t,l["default"].BREAK}),l["default"].BREAK}),d};t["default"]=c},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){var n=e.__state.conversionName.toString(),o=Math.round(e.r),i=Math.round(e.g),r=Math.round(e.b),a=e.a,l=Math.round(e.h),s=e.s.toFixed(1),u=e.v.toFixed(1);if(t||"THREE_CHAR_HEX"===n||"SIX_CHAR_HEX"===n){for(var d=e.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}return"CSS_RGB"===n?"rgb("+o+","+i+","+r+")":"CSS_RGBA"===n?"rgba("+o+","+i+","+r+","+a+")":"HEX"===n?"0x"+e.hex.toString(16):"RGB_ARRAY"===n?"["+o+","+i+","+r+"]":"RGBA_ARRAY"===n?"["+o+","+i+","+r+","+a+"]":"RGB_OBJ"===n?"{r:"+o+",g:"+i+",b:"+r+"}":"RGBA_OBJ"===n?"{r:"+o+",g:"+i+",b:"+r+",a:"+a+"}":"HSV_OBJ"===n?"{h:"+l+",s:"+s+",v:"+u+"}":"HSVA_OBJ"===n?"{h:"+l+",s:"+s+",v:"+u+",a:"+a+"}":"unknown format"}},function(e,t){"use strict";t.__esModule=!0;var n=Array.prototype.forEach,o=Array.prototype.slice,i={BREAK:{},extend:function(e){return this.each(o.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(n){this.isUndefined(t[n])||(e[n]=t[n])}.bind(this))},this),e},defaults:function(e){return this.each(o.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(n){this.isUndefined(e[n])&&(e[n]=t[n])}.bind(this))},this),e},compose:function(){var e=o.call(arguments);return function(){for(var t=o.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,o){if(e)if(n&&e.forEach&&e.forEach===n)e.forEach(t,o);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(o,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(o,e[a],a)===this.BREAK)return},defer:function(e){setTimeout(e,0)},debounce:function(e,t){var n=void 0;return function(){function o(){n=null}var i=this,r=arguments,a=!n;clearTimeout(n),n=setTimeout(o,t),a&&e.apply(i,r)}},toArray:function(e){return e.toArray?e.toArray():o.call(e)},isUndefined:function(e){return void 0===e},isNull:function(e){return null===e},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)}};t["default"]=i},function(e,t){"use strict";t.__esModule=!0;var n=void 0,o={hsv_to_rgb:function(e,t,n){var o=Math.floor(e/60)%6,i=e/60-Math.floor(e/60),r=n*(1-t),a=n*(1-i*t),l=n*(1-(1-i)*t),s=[[n,l,r],[a,n,r],[r,n,l],[r,a,n],[l,r,n],[n,r,a]][o];return{r:255*s[0],g:255*s[1],b:255*s[2]}},rgb_to_hsv:function(e,t,n){var o=Math.min(e,t,n),i=Math.max(e,t,n),r=i-o,a=void 0,l=void 0;return 0===i?{h:NaN,s:0,v:0}:(l=r/i,a=e===i?(t-n)/r:t===i?2+(n-e)/r:4+(e-t)/r,a/=6,a<0&&(a+=1),{h:360*a,s:l,v:i/255})},rgb_to_hex:function(e,t,n){var o=this.hex_with_component(0,2,e);return o=this.hex_with_component(o,1,t),o=this.hex_with_component(o,0,n)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,o){return o<<(n=8*t)|e&~(255<<n)}};t["default"]=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=function(){function e(t,o){n(this,e),this.initialValue=t[o],this.domElement=document.createElement("div"),this.object=t,this.property=o,this.__onChange=void 0,this.__onFinishChange=void 0}return e.prototype.onChange=function(e){return this.__onChange=e,this},e.prototype.onFinishChange=function(e){return this.__onFinishChange=e,this},e.prototype.setValue=function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this},e.prototype.getValue=function(){return this.object[this.property]},e.prototype.updateDisplay=function(){return this},e.prototype.isModified=function(){return this.initialValue!==this.getValue()},e}();t["default"]=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=function(e){function t(n,o){function a(){s.setValue(!s.__prev)}i(this,t);var l=r(this,e.call(this,n,o)),s=l;return l.__prev=l.getValue(),l.__checkbox=document.createElement("input"),l.__checkbox.setAttribute("type","checkbox"),d["default"].bind(l.__checkbox,"change",a,!1),l.domElement.appendChild(l.__checkbox),l.updateDisplay(),l}return a(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n},t.prototype.updateDisplay=function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0):this.__checkbox.checked=!1,e.prototype.updateDisplay.call(this)},t}(s["default"]);t["default"]=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){if("0"===e||a["default"].isUndefined(e))return 0;var t=e.match(u);return a["default"].isNull(t)?0:parseFloat(t[1])}t.__esModule=!0;var r=n(5),a=o(r),l={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},s={};a["default"].each(l,function(e,t){a["default"].each(e,function(e){s[e]=t})});var u=/(\d+(\.\d+)?)px/,d={makeSelectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var o=n,i=t;a["default"].isUndefined(i)&&(i=!0),a["default"].isUndefined(o)&&(o=!0),e.style.position="absolute",i&&(e.style.left=0,e.style.right=0),o&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,o){var i=n||{},r=s[t];if(!r)throw new Error("Event type "+t+" not supported.");var l=document.createEvent(r);switch(r){case"MouseEvents":var u=i.x||i.clientX||0,d=i.y||i.clientY||0;l.initMouseEvent(t,i.bubbles||!1,i.cancelable||!0,window,i.clickCount||1,0,0,u,d,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var c=l.initKeyboardEvent||l.initKeyEvent;a["default"].defaults(i,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(t,i.bubbles||!1,i.cancelable,window,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,i.keyCode,i.charCode);break;default:l.initEvent(t,i.bubbles||!1,i.cancelable||!0)}a["default"].defaults(l,o),e.dispatchEvent(l)},bind:function(e,t,n,o){var i=o||!1;return e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,n),d},unbind:function(e,t,n,o){var i=o||!1;return e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n),d},addClass:function(e,t){if(void 0===e.className)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return d},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),o=n.indexOf(t);o!==-1&&(n.splice(o,1),e.className=n.join(" "))}else e.className=void 0;return d},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return i(t["border-left-width"])+i(t["border-right-width"])+i(t["padding-left"])+i(t["padding-right"])+i(t.width)},getHeight:function(e){var t=getComputedStyle(e);return i(t["border-top-width"])+i(t["border-bottom-width"])+i(t["padding-top"])+i(t["padding-bottom"])+i(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}};t["default"]=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=n(5),f=o(c),_=function(e){function t(n,o,a){i(this,t);var l=r(this,e.call(this,n,o)),s=a,u=l;return l.__select=document.createElement("select"),f["default"].isArray(s)&&!function(){var e={};f["default"].each(s,function(t){e[t]=t}),s=e}(),f["default"].each(s,function(e,t){var n=document.createElement("option");n.innerHTML=t,n.setAttribute("value",e),u.__select.appendChild(n)}),l.updateDisplay(),d["default"].bind(l.__select,"change",function(){var e=this.options[this.selectedIndex].value;u.setValue(e)}),l.domElement.appendChild(l.__select),l}return a(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n},t.prototype.updateDisplay=function(){return d["default"].isActive(this.__select)?this:(this.__select.value=this.getValue(),e.prototype.updateDisplay.call(this))},t}(s["default"]);t["default"]=_},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=function(e){function t(n,o){function a(){u.setValue(u.__input.value)}function l(){u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}i(this,t);var s=r(this,e.call(this,n,o)),u=s;return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),d["default"].bind(s.__input,"keyup",a),d["default"].bind(s.__input,"change",a),d["default"].bind(s.__input,"blur",l),d["default"].bind(s.__input,"keydown",function(e){13===e.keyCode&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return a(t,e),t.prototype.updateDisplay=function(){return d["default"].isActive(this.__input)||(this.__input.value=this.getValue()),e.prototype.updateDisplay.call(this)},t}(s["default"]);t["default"]=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}t.__esModule=!0;var s=n(7),u=o(s),d=n(5),c=o(d),f=function(e){function t(n,o,a){i(this,t);var s=r(this,e.call(this,n,o)),u=a||{};return s.__min=u.min,s.__max=u.max,s.__step=u.step,c["default"].isUndefined(s.__step)?0===s.initialValue?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=l(s.__impliedStep),s}return a(t,e),t.prototype.setValue=function(t){var n=t;return void 0!==this.__min&&n<this.__min?n=this.__min:void 0!==this.__max&&n>this.__max&&(n=this.__max),void 0!==this.__step&&n%this.__step!==0&&(n=Math.round(n/this.__step)*this.__step),e.prototype.setValue.call(this,n)},t.prototype.min=function(e){return this.__min=e,this},t.prototype.max=function(e){return this.__max=e,this},t.prototype.step=function(e){return this.__step=e,this.__impliedStep=e,this.__precision=l(e),this},t}(u["default"]);t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}t.__esModule=!0;var s=n(12),u=o(s),d=n(9),c=o(d),f=n(5),_=o(f),p=function(e){function t(n,o,a){function l(){var e=parseFloat(m.__input.value);_["default"].isNaN(e)||m.setValue(e)}function s(){m.__onFinishChange&&m.__onFinishChange.call(m,m.getValue())}function u(){s()}function d(e){var t=b-e.clientY;m.setValue(m.getValue()+t*m.__impliedStep),b=e.clientY}function f(){c["default"].unbind(window,"mousemove",d),c["default"].unbind(window,"mouseup",f),s()}function p(e){c["default"].bind(window,"mousemove",d),c["default"].bind(window,"mouseup",f),b=e.clientY}i(this,t);var h=r(this,e.call(this,n,o,a));h.__truncationSuspended=!1;var m=h,b=void 0;return h.__input=document.createElement("input"),h.__input.setAttribute("type","text"),c["default"].bind(h.__input,"change",l),c["default"].bind(h.__input,"blur",u),c["default"].bind(h.__input,"mousedown",p),c["default"].bind(h.__input,"keydown",function(e){13===e.keyCode&&(m.__truncationSuspended=!0,this.blur(),m.__truncationSuspended=!1,s())}),h.updateDisplay(),h.domElement.appendChild(h.__input),h}return a(t,e),t.prototype.updateDisplay=function(){return this.__input.value=this.__truncationSuspended?this.getValue():l(this.getValue(),this.__precision),e.prototype.updateDisplay.call(this)},t}(u["default"]);t["default"]=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n,o,i){return o+(i-o)*((e-t)/(n-t))}t.__esModule=!0;var s=n(12),u=o(s),d=n(9),c=o(d),f=function(e){function t(n,o,a,s,u){function d(e){document.activeElement.blur(),c["default"].bind(window,"mousemove",f),c["default"].bind(window,"mouseup",_),f(e)}function f(e){e.preventDefault();var t=h.__background.getBoundingClientRect();return h.setValue(l(e.clientX,t.left,t.right,h.__min,h.__max)),!1}function _(){c["default"].unbind(window,"mousemove",f),c["default"].unbind(window,"mouseup",_),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}i(this,t);var p=r(this,e.call(this,n,o,{min:a,max:s,step:u})),h=p;return p.__background=document.createElement("div"),p.__foreground=document.createElement("div"),c["default"].bind(p.__background,"mousedown",d),c["default"].addClass(p.__background,"slider"),c["default"].addClass(p.__foreground,"slider-fg"),p.updateDisplay(),p.__background.appendChild(p.__foreground),p.domElement.appendChild(p.__background),p}return a(t,e),t.prototype.updateDisplay=function(){var t=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*t+"%",e.prototype.updateDisplay.call(this)},t}(u["default"]);t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=function(e){function t(n,o,a){i(this,t);var l=r(this,e.call(this,n,o)),s=l;return l.__button=document.createElement("div"),l.__button.innerHTML=void 0===a?"Fire":a,d["default"].bind(l.__button,"click",function(e){return e.preventDefault(),s.fire(),!1}),d["default"].addClass(l.__button,"button"),l.domElement.appendChild(l.__button),l}return a(t,e),t.prototype.fire=function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},t}(s["default"]);t["default"]=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n,o){e.style.background="",g["default"].each(y,function(i){e.style.cssText+="background: "+i+"linear-gradient("+t+", "+n+" 0%, "+o+" 100%); "})}function s(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}t.__esModule=!0;var u=n(7),d=o(u),c=n(9),f=o(c),_=n(2),p=o(_),h=n(3),m=o(h),b=n(5),g=o(b),v=function(e){function t(n,o){function a(e){h(e),f["default"].bind(window,"mousemove",h),f["default"].bind(window,"mouseup",u)}function u(){f["default"].unbind(window,"mousemove",h),f["default"].unbind(window,"mouseup",u),_()}function d(){var e=(0,m["default"])(this.value);e!==!1?(y.__color.__state=e,y.setValue(y.__color.toOriginal())):this.value=y.__color.toString()}function c(){f["default"].unbind(window,"mousemove",b),f["default"].unbind(window,"mouseup",c),_()}function _(){y.__onFinishChange&&y.__onFinishChange.call(y,y.__color.toOriginal())}function h(e){e.preventDefault();var t=y.__saturation_field.getBoundingClientRect(),n=(e.clientX-t.left)/(t.right-t.left),o=1-(e.clientY-t.top)/(t.bottom-t.top);return o>1?o=1:o<0&&(o=0),n>1?n=1:n<0&&(n=0),y.__color.v=o,y.__color.s=n,y.setValue(y.__color.toOriginal()),!1}function b(e){e.preventDefault();var t=y.__hue_field.getBoundingClientRect(),n=1-(e.clientY-t.top)/(t.bottom-t.top);return n>1?n=1:n<0&&(n=0),y.__color.h=360*n,y.setValue(y.__color.toOriginal()),!1}i(this,t);var v=r(this,e.call(this,n,o));v.__color=new p["default"](v.getValue()),v.__temp=new p["default"](0);var y=v;v.domElement=document.createElement("div"),f["default"].makeSelectable(v.domElement,!1),v.__selector=document.createElement("div"),v.__selector.className="selector",v.__saturation_field=document.createElement("div"),v.__saturation_field.className="saturation-field",v.__field_knob=document.createElement("div"),v.__field_knob.className="field-knob",v.__field_knob_border="2px solid ",v.__hue_knob=document.createElement("div"),v.__hue_knob.className="hue-knob",v.__hue_field=document.createElement("div"),v.__hue_field.className="hue-field",v.__input=document.createElement("input"),v.__input.type="text",v.__input_textShadow="0 1px 1px ",f["default"].bind(v.__input,"keydown",function(e){13===e.keyCode&&d.call(this)}),f["default"].bind(v.__input,"blur",d),f["default"].bind(v.__selector,"mousedown",function(){f["default"].addClass(this,"drag").bind(window,"mouseup",function(){f["default"].removeClass(y.__selector,"drag")})});var w=document.createElement("div");return g["default"].extend(v.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),g["default"].extend(v.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:v.__field_knob_border+(v.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),g["default"].extend(v.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),g["default"].extend(v.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),g["default"].extend(w.style,{width:"100%",height:"100%",background:"none"}),l(w,"top","rgba(0,0,0,0)","#000"),g["default"].extend(v.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),s(v.__hue_field),g["default"].extend(v.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:v.__input_textShadow+"rgba(0,0,0,0.7)"}),f["default"].bind(v.__saturation_field,"mousedown",a),f["default"].bind(v.__field_knob,"mousedown",a),f["default"].bind(v.__hue_field,"mousedown",function(e){b(e),f["default"].bind(window,"mousemove",b),f["default"].bind(window,"mouseup",c)}),v.__saturation_field.appendChild(w),v.__selector.appendChild(v.__field_knob),v.__selector.appendChild(v.__saturation_field),v.__selector.appendChild(v.__hue_field),v.__hue_field.appendChild(v.__hue_knob),v.domElement.appendChild(v.__input),v.domElement.appendChild(v.__selector),v.updateDisplay(),v}return a(t,e),t.prototype.updateDisplay=function(){var e=(0,m["default"])(this.getValue());if(e!==!1){var t=!1;g["default"].each(p["default"].COMPONENTS,function(n){if(!g["default"].isUndefined(e[n])&&!g["default"].isUndefined(this.__color.__state[n])&&e[n]!==this.__color.__state[n])return t=!0,{}},this),t&&g["default"].extend(this.__color.__state,e)}g["default"].extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,o=255-n;g["default"].extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+n+","+n+","+n+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,l(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),g["default"].extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+n+","+n+","+n+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},t}(d["default"]),y=["-moz-","-o-","-webkit-","-ms-",""];t["default"]=v},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){var o=document.createElement("li");return t&&o.appendChild(t),n?e.__ul.insertBefore(o,n):e.__ul.appendChild(o),e.onResize(),o}function r(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];t?n.innerHTML=n.value+"*":n.innerHTML=n.value}function a(e,t,n){if(n.__li=t,n.__gui=e,U["default"].extend(n,{options:function(t){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),s(e,n.object,n.property,{before:o,factoryArgs:[U["default"].toArray(arguments)]})}if(U["default"].isArray(t)||U["default"].isObject(t)){var i=n.__li.nextElementSibling;return n.remove(),s(e,n.object,n.property,{before:i,factoryArgs:[t]})}},name:function(e){return n.__li.firstElementChild.firstElementChild.innerHTML=e,n},listen:function(){return n.__gui.listen(n),n},remove:function(){
return n.__gui.remove(n),n}}),n instanceof B["default"])!function(){var e=new N["default"](n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});U["default"].each(["updateDisplay","onChange","onFinishChange","step"],function(t){var o=n[t],i=e[t];n[t]=e[t]=function(){var t=Array.prototype.slice.call(arguments);return i.apply(e,t),o.apply(n,t)}}),z["default"].addClass(t,"has-slider"),n.domElement.insertBefore(e.domElement,n.domElement.firstElementChild)}();else if(n instanceof N["default"]){var o=function(t){if(U["default"].isNumber(n.__min)&&U["default"].isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,i=n.__gui.__listening.indexOf(n)>-1;n.remove();var r=s(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return r.name(o),i&&r.listen(),r}return t};n.min=U["default"].compose(o,n.min),n.max=U["default"].compose(o,n.max)}else n instanceof O["default"]?(z["default"].bind(t,"click",function(){z["default"].fakeEvent(n.__checkbox,"click")}),z["default"].bind(n.__checkbox,"click",function(e){e.stopPropagation()})):n instanceof R["default"]?(z["default"].bind(t,"click",function(){z["default"].fakeEvent(n.__button,"click")}),z["default"].bind(t,"mouseover",function(){z["default"].addClass(n.__button,"hover")}),z["default"].bind(t,"mouseout",function(){z["default"].removeClass(n.__button,"hover")})):n instanceof j["default"]&&(z["default"].addClass(t,"color"),n.updateDisplay=U["default"].compose(function(e){return t.style.borderLeftColor=n.__color.toString(),e},n.updateDisplay),n.updateDisplay());n.setValue=U["default"].compose(function(t){return e.getRoot().__preset_select&&n.isModified()&&r(e.getRoot(),!0),t},n.setValue)}function l(e,t){var n=e.getRoot(),o=n.__rememberedObjects.indexOf(t.object);if(o!==-1){var i=n.__rememberedObjectIndecesToControllers[o];if(void 0===i&&(i={},n.__rememberedObjectIndecesToControllers[o]=i),i[t.property]=t,n.load&&n.load.remembered){var r=n.load.remembered,a=void 0;if(r[e.preset])a=r[e.preset];else{if(!r[Q])return;a=r[Q]}if(a[o]&&void 0!==a[o][t.property]){var l=a[o][t.property];t.initialValue=l,t.setValue(l)}}}}function s(e,t,n,o){if(void 0===t[n])throw new Error('Object "'+t+'" has no property "'+n+'"');var r=void 0;if(o.color)r=new j["default"](t,n);else{var s=[t,n].concat(o.factoryArgs);r=C["default"].apply(e,s)}o.before instanceof S["default"]&&(o.before=o.before.__li),l(e,r),z["default"].addClass(r.domElement,"c");var u=document.createElement("span");z["default"].addClass(u,"property-name"),u.innerHTML=r.property;var d=document.createElement("div");d.appendChild(u),d.appendChild(r.domElement);var c=i(e,d,o.before);return z["default"].addClass(c,oe.CLASS_CONTROLLER_ROW),r instanceof j["default"]?z["default"].addClass(c,"color"):z["default"].addClass(c,g(r.getValue())),a(e,c,r),e.__controllers.push(r),r}function u(e,t){return document.location.href+"."+t}function d(e,t,n){var o=document.createElement("option");o.innerHTML=t,o.value=t,e.__preset_select.appendChild(o),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function c(e,t){t.style.display=e.useLocalStorage?"block":"none"}function f(e){var t=e.__save_row=document.createElement("li");z["default"].addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),z["default"].addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",z["default"].addClass(n,"button gears");var o=document.createElement("span");o.innerHTML="Save",z["default"].addClass(o,"button"),z["default"].addClass(o,"save");var i=document.createElement("span");i.innerHTML="New",z["default"].addClass(i,"button"),z["default"].addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",z["default"].addClass(r,"button"),z["default"].addClass(r,"revert");var a=e.__preset_select=document.createElement("select");e.load&&e.load.remembered?U["default"].each(e.load.remembered,function(t,n){d(e,n,n===e.preset)}):d(e,Q,!1),z["default"].bind(a,"change",function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(a),t.appendChild(n),t.appendChild(o),t.appendChild(i),t.appendChild(r),q&&!function(){var t=document.getElementById("dg-local-explain"),n=document.getElementById("dg-local-storage"),o=document.getElementById("dg-save-locally");o.style.display="block","true"===localStorage.getItem(u(e,"isLocal"))&&n.setAttribute("checked","checked"),c(e,t),z["default"].bind(n,"change",function(){e.useLocalStorage=!e.useLocalStorage,c(e,t)})}();var l=document.getElementById("dg-new-constructor");z["default"].bind(l,"keydown",function(e){!e.metaKey||67!==e.which&&67!==e.keyCode||Z.hide()}),z["default"].bind(n,"click",function(){l.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),Z.show(),l.focus(),l.select()}),z["default"].bind(o,"click",function(){e.save()}),z["default"].bind(i,"click",function(){var t=prompt("Enter a new preset name.");t&&e.saveAs(t)}),z["default"].bind(r,"click",function(){e.revert()})}function _(e){function t(t){return t.preventDefault(),e.width+=i-t.clientX,e.onResize(),i=t.clientX,!1}function n(){z["default"].removeClass(e.__closeButton,oe.CLASS_DRAG),z["default"].unbind(window,"mousemove",t),z["default"].unbind(window,"mouseup",n)}function o(o){return o.preventDefault(),i=o.clientX,z["default"].addClass(e.__closeButton,oe.CLASS_DRAG),z["default"].bind(window,"mousemove",t),z["default"].bind(window,"mouseup",n),!1}var i=void 0;e.__resize_handle=document.createElement("div"),U["default"].extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),z["default"].bind(e.__resize_handle,"mousedown",o),z["default"].bind(e.__closeButton,"mousedown",o),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}function p(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function h(e,t){var n={};return U["default"].each(e.__rememberedObjects,function(o,i){var r={},a=e.__rememberedObjectIndecesToControllers[i];U["default"].each(a,function(e,n){r[n]=t?e.initialValue:e.getValue()}),n[i]=r}),n}function m(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}function b(e){0!==e.length&&D["default"].call(window,function(){b(e)}),U["default"].each(e,function(e){e.updateDisplay()})}var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},v=n(18),y=o(v),w=n(19),x=o(w),E=n(20),C=o(E),A=n(7),S=o(A),k=n(8),O=o(k),T=n(15),R=o(T),L=n(13),N=o(L),M=n(14),B=o(M),H=n(16),j=o(H),P=n(21),D=o(P),V=n(22),F=o(V),I=n(9),z=o(I),G=n(5),U=o(G),X=n(23),K=o(X);y["default"].inject(K["default"]);var Y="dg",J=72,W=20,Q="Default",q=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}(),Z=void 0,$=!0,ee=void 0,te=!1,ne=[],oe=function ie(e){function t(){var e=n.getRoot();e.width+=1,U["default"].defer(function(){e.width-=1})}var n=this,o=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),z["default"].addClass(this.domElement,Y),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],o=U["default"].defaults(o,{autoPlace:!0,width:ie.DEFAULT_WIDTH}),o=U["default"].defaults(o,{resizable:o.autoPlace,hideable:o.autoPlace}),U["default"].isUndefined(o.load)?o.load={preset:Q}:o.preset&&(o.load.preset=o.preset),U["default"].isUndefined(o.parent)&&o.hideable&&ne.push(this),o.resizable=U["default"].isUndefined(o.parent)&&o.resizable,o.autoPlace&&U["default"].isUndefined(o.scrollable)&&(o.scrollable=!0);var r=q&&"true"===localStorage.getItem(u(this,"isLocal")),a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return o.parent}},scrollable:{get:function(){return o.scrollable}},autoPlace:{get:function(){return o.autoPlace}},preset:{get:function(){return n.parent?n.getRoot().preset:o.load.preset},set:function(e){n.parent?n.getRoot().preset=e:o.load.preset=e,m(this),n.revert()}},width:{get:function(){return o.width},set:function(e){o.width=e,p(n,e)}},name:{get:function(){return o.name},set:function(e){o.name=e,titleRowName&&(titleRowName.innerHTML=o.name)}},closed:{get:function(){return o.closed},set:function(e){o.closed=e,o.closed?z["default"].addClass(n.__ul,ie.CLASS_CLOSED):z["default"].removeClass(n.__ul,ie.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=e?ie.TEXT_OPEN:ie.TEXT_CLOSED)}},load:{get:function(){return o.load}},useLocalStorage:{get:function(){return r},set:function(e){q&&(r=e,e?z["default"].bind(window,"unload",a):z["default"].unbind(window,"unload",a),localStorage.setItem(u(n,"isLocal"),e))}}}),U["default"].isUndefined(o.parent)){if(o.closed=!1,z["default"].addClass(this.domElement,ie.CLASS_MAIN),z["default"].makeSelectable(this.domElement,!1),q&&r){n.useLocalStorage=!0;var l=localStorage.getItem(u(this,"gui"));l&&(o.load=JSON.parse(l))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=ie.TEXT_CLOSED,z["default"].addClass(this.__closeButton,ie.CLASS_CLOSE_BUTTON),this.domElement.appendChild(this.__closeButton),z["default"].bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{void 0===o.closed&&(o.closed=!0);var s=document.createTextNode(o.name);z["default"].addClass(s,"controller-name");var d=i(n,s),c=function(e){return e.preventDefault(),n.closed=!n.closed,!1};z["default"].addClass(this.__ul,ie.CLASS_CLOSED),z["default"].addClass(d,"title"),z["default"].bind(d,"click",c),o.closed||(this.closed=!1)}o.autoPlace&&(U["default"].isUndefined(o.parent)&&($&&(ee=document.createElement("div"),z["default"].addClass(ee,Y),z["default"].addClass(ee,ie.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ee),$=!1),ee.appendChild(this.domElement),z["default"].addClass(this.domElement,ie.CLASS_AUTO_PLACE)),this.parent||p(n,o.width)),this.__resizeHandler=function(){n.onResizeDebounced()},z["default"].bind(window,"resize",this.__resizeHandler),z["default"].bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),z["default"].bind(this.__ul,"transitionend",this.__resizeHandler),z["default"].bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),o.resizable&&_(this),a=function(){q&&"true"===localStorage.getItem(u(n,"isLocal"))&&localStorage.setItem(u(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=a,o.parent||t()};oe.toggleHide=function(){te=!te,U["default"].each(ne,function(e){e.domElement.style.display=te?"none":""})},oe.CLASS_AUTO_PLACE="a",oe.CLASS_AUTO_PLACE_CONTAINER="ac",oe.CLASS_MAIN="main",oe.CLASS_CONTROLLER_ROW="cr",oe.CLASS_TOO_TALL="taller-than-window",oe.CLASS_CLOSED="closed",oe.CLASS_CLOSE_BUTTON="close-button",oe.CLASS_DRAG="drag",oe.DEFAULT_WIDTH=245,oe.TEXT_CLOSED="Close settings",oe.TEXT_OPEN="Open settings",oe._keydownHandler=function(e){"text"===document.activeElement.type||e.which!==J&&e.keyCode!==J||oe.toggleHide()},z["default"].bind(window,"keydown",oe._keydownHandler,!1),U["default"].extend(oe.prototype,{add:function(e,t){return s(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return s(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;U["default"].defer(function(){t.onResize()})},destroy:function(){this.autoPlace&&ee.removeChild(this.domElement),z["default"].unbind(window,"keydown",oe._keydownHandler,!1),z["default"].unbind(window,"resize",this.__resizeHandler),this.saveToLocalStorageIfPossible&&z["default"].unbind(window,"unload",this.saveToLocalStorageIfPossible)},addFolder:function(e){if(void 0!==this.__folders[e])throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new oe(t);this.__folders[e]=n;var o=i(this,n.domElement);return z["default"].addClass(o,"folder"),n},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=z["default"].getOffset(e.__ul).top,n=0;U["default"].each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(n+=z["default"].getHeight(t))}),window.innerHeight-t-W<n?(z["default"].addClass(e.domElement,oe.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-W+"px"):(z["default"].removeClass(e.domElement,oe.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&U["default"].defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:U["default"].debounce(function(){this.onResize()},200),remember:function(){if(U["default"].isUndefined(Z)&&(Z=new F["default"],Z.domElement.innerHTML=x["default"]),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;U["default"].each(Array.prototype.slice.call(arguments),function(t){0===e.__rememberedObjects.length&&f(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&p(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=h(this)),e.folders={},U["default"].each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=h(this),r(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Q]=h(this,!0)),this.load.remembered[e]=h(this),this.preset=e,d(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){U["default"].each(this.__controllers,function(t){this.getRoot().load.remembered?l(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),U["default"].each(this.__folders,function(e){e.revert(e)}),e||r(this.getRoot(),!1)},listen:function(e){var t=0===this.__listening.length;this.__listening.push(e),t&&b(this.__listening)},updateDisplay:function(){U["default"].each(this.__controllers,function(e){e.updateDisplay()}),U["default"].each(this.__folders,function(e){e.updateDisplay()})}}),e.exports=oe},function(e,t){"use strict";e.exports={load:function(e,t){var n=t||document,o=n.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,n.getElementsByTagName("head")[0].appendChild(o)},inject:function(e,t){var n=t||document,o=document.createElement("style");o.type="text/css",o.innerHTML=e;var i=n.getElementsByTagName("head")[0];try{i.appendChild(o)}catch(r){}}}},function(e,t){e.exports="<div id=dg-save class=\"dg dialogue\"> Here's the new load parameter for your <code>GUI</code>'s constructor: <textarea id=dg-new-constructor></textarea> <div id=dg-save-locally> <input id=dg-local-storage type=checkbox /> Automatically save values to <code>localStorage</code> on exit. <div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do. </div> </div> </div>"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(10),r=o(i),a=n(13),l=o(a),s=n(14),u=o(s),d=n(11),c=o(d),f=n(15),_=o(f),p=n(8),h=o(p),m=n(5),b=o(m),g=function(e,t){var n=e[t];return b["default"].isArray(arguments[2])||b["default"].isObject(arguments[2])?new r["default"](e,t,arguments[2]):b["default"].isNumber(n)?b["default"].isNumber(arguments[2])&&b["default"].isNumber(arguments[3])?b["default"].isNumber(arguments[4])?new u["default"](e,t,arguments[2],arguments[3],arguments[4]):new u["default"](e,t,arguments[2],arguments[3]):b["default"].isNumber(arguments[4])?new l["default"](e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new l["default"](e,t,{min:arguments[2],max:arguments[3]}):b["default"].isString(n)?new c["default"](e,t):b["default"].isFunction(n)?new _["default"](e,t,""):b["default"].isBoolean(n)?new h["default"](e,t):null};t["default"]=g},function(e,t){"use strict";function n(e){setTimeout(e,1e3/60)}t.__esModule=!0,t["default"]=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n(9),a=o(r),l=n(5),s=o(l),u=function(){function e(){i(this,e),this.backgroundElement=document.createElement("div"),s["default"].extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),a["default"].makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),s["default"].extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;a["default"].bind(this.backgroundElement,"click",function(){t.hide()})}return e.prototype.show=function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),s["default"].defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})},e.prototype.hide=function t(){var e=this,t=function n(){e.domElement.style.display="none",e.backgroundElement.style.display="none",a["default"].unbind(e.domElement,"webkitTransitionEnd",n),a["default"].unbind(e.domElement,"transitionend",n),a["default"].unbind(e.domElement,"oTransitionEnd",n)};a["default"].bind(this.domElement,"webkitTransitionEnd",t),a["default"].bind(this.domElement,"transitionend",t),a["default"].bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},e.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-a["default"].getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-a["default"].getHeight(this.domElement)/2+"px"},e}();t["default"]=u},function(e,t,n){t=e.exports=n(24)(),t.push([e.id,".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;transition:opacity .1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save>ul{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height .1s ease-out;transition:height .1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px Lucida Grande,sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}])});

// DatGUI.js
/* jshint esversion: 6 */
var DatGui = pc.createScript('datGui');
var datGuiInstance;
var GlobalConfig;

// initialize code called once per entity
DatGui.prototype.initialize = function() {
    GlobalConfig = {
        explosionDelay: GameConfig.getAttribute('explosionDelay'),
        bombPriceIncrement: GameConfig.getAttribute('bombPriceIncrement'),
        dynamiteBombPrice:  GameConfig.getAttribute('dynamiteBombPrice'),
        implosiveBombPrice:  GameConfig.getAttribute('implosiveBombPrice'),
        horizontalBombPrice:  GameConfig.getAttribute('horizontalBombPrice'),
        punchBombPrice:  GameConfig.getAttribute('punchBombPrice'),
        molotovBombPrice:  GameConfig.getAttribute('molotovBombPrice'),
    };
    
    datGuiInstance = new dat.GUI();
    var globalConfigFolder = datGuiInstance.addFolder('Game config');        
    this.addOption(globalConfigFolder, GlobalConfig, 'explosionDelay', 0, 2, 0.05, this.updateValue, this);
    globalConfigFolder.open();
    
    
    var bombsConfigFolder = datGuiInstance.addFolder('Bombs');        
    this.addOption(bombsConfigFolder, GlobalConfig, 'bombPriceIncrement', 0, 10, 1, this.updateValue, this);
    this.addOption(bombsConfigFolder, GlobalConfig, 'dynamiteBombPrice', 1, 10, 1, this.updateBombPrice, this);
    this.addOption(bombsConfigFolder, GlobalConfig, 'implosiveBombPrice', 1, 10, 1, this.updateBombPrice, this);
    this.addOption(bombsConfigFolder, GlobalConfig, 'horizontalBombPrice', 1, 10, 1, this.updateBombPrice, this);
    this.addOption(bombsConfigFolder, GlobalConfig, 'punchBombPrice', 1, 10, 1, this.updateBombPrice, this);
    this.addOption(bombsConfigFolder, GlobalConfig, 'molotovBombPrice', 1, 10, 1, this.updateBombPrice, this);
    bombsConfigFolder.open();

    
    datGuiInstance.close();
};

DatGui.prototype.updateValue = function(key, value){    
    GameConfig.setAttribute(key, GlobalConfig[key]);    
};

DatGui.prototype.updateBombPrice = function(key, value){    
    GameConfig.setAttribute(key, GlobalConfig[key]);
    this.app.fire(EventTypes.UPDATE_BOMB_POINTS_AMOUNT, this.app.root.findByName('GameplayContainer').script.levelController.bombPoints);
};

DatGui.prototype.addOption = function(folder, optionHolder, optionKey, min, max, step, listener, listenerContext) {        
    folder.add(optionHolder, optionKey, min, max).onChange(value => listener.call(listenerContext, optionKey, value)).step(step);
};




DatGui.prototype.update = function(dt) {
    
};

// genericBombController.js
/* jshint esversion: 6*/
var GenericBombController = pc.createScript('genericBombController');

GenericBombController.prototype.initialize = function() {    
    this.entity.activated = false;
    this.entity.detonated = false;
    
    if(this._initialize) {
        this._initialize();
    }
    
    this.on('destroy', this.destroyHandler, this);
};

GenericBombController.prototype.update = function(dt) {
    
};

GenericBombController.prototype.delayedDetonate = function(delay) {    
    if(!this.entity.activated) {
        this.entity.activated = true;        
        this.entity.delayedCall(delay, () => {
            if(!this.entity.detonated) {
                Apicontroller.trackStats('bomb_detonated', {
                    bomb_type: this.entity.explosiveType
                });
                this._detonate();  
            }
        });
    }
};

GenericBombController.prototype.destroyHandler = function() {
    if(this._sweep) {
        this._sweep();
    }
    this.off('destroy', this.destroyHandler, this);
};





// dynamiteBombController.js
/* jshint esversion: 6 */
var DynamiteBombController = pc.createScript('dynamiteBombController');

DynamiteBombController.prototype =  Object.create(GenericBombController.prototype);

DynamiteBombController.prototype._detonate = function() {
    this.entity.detonated = true;
    this.entity.script.item.breakBlock(true, "explosion");
    this.app.fire(EventTypes.EXPLOSION, this.entity.getPosition().clone());
};


// implosiveBombController.js
/* jshint esversion: 6 */
var ImplosiveBombController = pc.createScript('implosiveBombController');

ImplosiveBombController.prototype =  Object.create(GenericBombController.prototype);

ImplosiveBombController.prototype._detonate = function() {
    if(!this.implosionStarted) {
        this.implosionStarted = true;
        this.implosionAmplificationFactor = 0.5;
        this.implosionTimer = GameConfig.getAttribute('implosionTime');
        
        this.app.fire(EventTypes.PLAY_AUDIO, 'bomb_charge');
        
        this.entity.rigidbody.type = pc.BODYTYPE_STATIC;
        
        this.haloEffect = this.app.root.findByName('ObjectsPrefabs').findByName('HaloEffect').clone();
        this.haloEffect.reparent(this.entity);
        this.haloEffect.enabled = true;
    } else {
        this.finalDetonate();
    }
};

ImplosiveBombController.prototype._sweep = function() {
    this.haloEffect = null;
};


ImplosiveBombController.prototype.update = function(dt) {
    if(!this.entity.detonated && this.implosionStarted) {
        if(this.implosionTimer > 0) {
            this.implosionTimer -= dt;
            this.implosionAmplificationFactor += dt / GameConfig.getAttribute('implosionTime') * 5;
            this.applyImplosionForce();
            if(this.implosionTimer <= 0) {
               this.finalDetonate();
            } else {
                const haloScale = this.haloEffect.getLocalScale().clone().scale(1.032);
                this.haloEffect.setLocalScale(haloScale);
            }
        }
    }
};

ImplosiveBombController.prototype.applyImplosionForce = function() {
    const implosionRadius = GameConfig.getAttribute('implosionRadius');
    const implosionForce = GameConfig.getAttribute('implosionForce');
    const objectsContainer = this.app.root.findByName('GameplayContainer').findByName('ObjectsContainer');
    const implosionEpicenter = this.entity.getPosition();
    
    for(let i = objectsContainer.children.length - 1; i > -1; i--) {
        const child = objectsContainer.children[i];
        const childPosition = child.getPosition();
        const distance = childPosition.distance(implosionEpicenter);
        if(distance <= implosionRadius) {
            child.rigidbody.applyForce(childPosition.clone().sub(implosionEpicenter).normalize().scale(implosionForce / Math.max(distance, 1) * child.rigidbody.mass * -1 * this.implosionAmplificationFactor), new pc.Vec3(pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05)));   
        }
    }   
};

ImplosiveBombController.prototype.finalDetonate = function() {
    if(!this.entity.detonated) {
        this.entity.detonated = true;
        this.entity.script.item.breakBlock(true, "explosion");
        this.app.fire(EventTypes.IMPLOSIVE_EXPLOSION, this.entity.getPosition().clone(), 'Explosion3');
    }
};

// horizontalBombController.js
/* jshint esversion: 6 */
var HorizontalBombController = pc.createScript('horizontalBombController');

HorizontalBombController.prototype = Object.create(GenericBombController.prototype);

HorizontalBombController.prototype._detonate = function() {
      this.entity.detonated = true;
      this.entity.script.item.breakBlock(true, "explosion");
      this.app.fire(EventTypes.HORIZONTAL_EXPLOSION, this.entity.getPosition().clone()); 
};



// punchBombController.js
/* jshint esversion: 6 */
var PunchBombController = pc.createScript('punchBombController');

PunchBombController.prototype = Object.create(GenericBombController.prototype);

PunchBombController.prototype._initialize = function() {
    this.originalCameraPosition = this.app.root.findByName('Camera').getPosition().clone();
};


PunchBombController.prototype._detonate = function() {
    this.entity.detonated = true;
        
    const glove = this.app.root.findByName('ObjectsPrefabs').findByName('BoxingGlove').clone();
    glove.script.boxingGlove.launch(this.originalCameraPosition, this.entity);
    
    this.entity.delayedCall(GameConfig.getAttribute('punchEffectDuration') * 1000 * 0.45, () => this.app.fire(EventTypes.PLAY_AUDIO, 'punch'));
    
    this.entity.delayedCall(GameConfig.getAttribute('punchEffectDuration') * 1000, () => this.entity.script.item.breakBlock(false, "fly_away"));
};


// molotovBombController.js
/* jshint esversion: 6 */
var MolotovBombController = pc.createScript('molotovBombController');

MolotovBombController.prototype = Object.create(GenericBombController.prototype);

MolotovBombController.prototype._detonate = function() {
      this.entity.detonated = true;
    
      this.entity.script.item.transformIntoOriginalType(true);  
    
      const flameEffect = this.app.root.findByName('ObjectsPrefabs').findByName('FlameEffect').clone();
      flameEffect.script.flameEffect.applyTo(this.entity, 0);
};



// boxingGlove.js
/* jshint esversion: 6*/
var BoxingGlove = pc.createScript('boxingGlove');

BoxingGlove.prototype.initialize = function() {
    this.gloveModel = this.entity.findByName('BoxingGloveModel');         
};

BoxingGlove.prototype.update = function(dt) {
    if(this.alphaDisappear) {
        this.currentAlpha -= 5 * dt;
        if(this.currentAlpha <= 0) {
            this.currentAlpha = 0;
            this.gloveModel = null;
            this.entity.destroy();
        } else {     
             this.gloveModel.model.model.meshInstances.forEach(mi => mi.setParameter("material_opacity", this.currentAlpha));               
             this.gloveModel.model.model.meshInstances.forEach(mi => mi.material.update());      
        }
    }
};

BoxingGlove.prototype.launch = function(cameraPosition, targetEntity) {
   
    this.entity.reparent(this.app.root.findByName('GameplayContainer').findByName('GlovesContainer'));
    this.entity.enabled = true;
    this.entity.rigidbody.body.setCcdMotionThreshold(0.1);
    this.entity.rigidbody.body.setCcdSweptSphereRadius(0.01);
    
    const cameraDistance = cameraPosition.distance(targetEntity.getPosition());
    const requiredDistance = GameConfig.getAttribute('punchEffectDistance');
    
    this.entity.setPosition(new pc.Vec3().lerp(cameraPosition, targetEntity.getPosition(), 1 - requiredDistance / cameraDistance));
    this.entity.lookAt(targetEntity.getPosition(), pc.Vec3.UP);
           
    
    const startingPosition = this.entity.getLocalPosition().clone();
    const targetPosition = targetEntity.getPosition().clone();
    
    /* method 1, setting position directly */
    // this.entity.tween(this.entity.getLocalPosition())
    //    .to(targetPosition, GameConfig.getAttribute('punchEffectDuration'), pc.BackOut)       
    //     .on('complete', () => {
    //         this.entity.destroy();
    //     })
    //    .start();
    
    
    /* method 2, setting velocity */
    // this.orientationVector = new pc.Vec3();
    // this.entity.speedVector = {length: GameConfig.getAttribute('punchEffectSpeedFactor')};
    // this.entity.tween(this.entity.speedVector)
    //    .to({length: 0}, GameConfig.getAttribute('punchEffectDuration'), (x) => 1 + (1.70158 + 2.70158 * (-1 + x)) * Math.pow(-1 + x, 2))
    //    .on('update', () => {     
    //         this.entity.getRotation().transformVector(pc.Vec3.FORWARD, this.orientationVector);
    //         this.orientationVector.normalize().scale(this.entity.speedVector.length);
    //         this.entity.rigidbody.linearVelocity.set(this.orientationVector.x, this.orientationVector.y, this.orientationVector.z);
    //     })
    //     .on('complete', () => {
    //         this.orientationVector = null;
    //         this.currentAlpha = 1;
    //         this.alphaDisappear = true;
    //         // this.entity.destroy();
    //     })
    //    .start();

    
    /* method 3 */
    this.progressHolder = {progress: 0};
    this.orientationVector = new pc.Vec3();
    this.currentPosition = new pc.Vec3();
    this.entity.speedVector = {length: GameConfig.getAttribute('punchEffectSpeedFactor')};
    
    this.entity.tween(this.progressHolder)
        .to({progress: 1},  GameConfig.getAttribute('punchEffectDuration'), pc.Linear)
        .on('update', () => {     
            this.entity.rigidbody.teleport(this.currentPosition.lerp(startingPosition, targetPosition, pc.BackOut(this.progressHolder.progress)));
        })
        .on('complete', () => {
            this.orientationVector = null;
            this.currentAlpha = 1;
            this.alphaDisappear = true;
        })
       .start();    

};



// flameEffect.js
/* jshint esversion: 6 */
var FlameEffect = pc.createScript('flameEffect');

FlameEffect.prototype.initialize = function() {
    this.cameraFacingPosition = new pc.Vec3();
    this.fireSpreadExtendDistance = new pc.Vec3(0.52, 0.52, 0.52);
    
    this.on('destroy', this.destroyHandler, this);
};

FlameEffect.prototype.update = function(dt) {
    if(this.parentEntity && this.camera) {
        // Set the flame to always face the camera
        this.entity.lookAt(this.camera.getPosition());
        this.entity.getLocalRotation().transformVector(pc.Vec3.FORWARD, this.cameraFacingPosition);
        this.entity.setLocalPosition(this.cameraFacingPosition.normalize().scale(0.99));
    }
    if(this.fireStarted && this.parentEntity && this.parentEntity.model && !this.parentEntity.destroyed) {
        /* update parent entity material to get 'burned' wood effect */
        this.burnedPercentage = pc.math.clamp(this.burnedPercentage + dt / GameConfig.getAttribute('woodBurningDuration'), 0, 1);
        this.parentEntity.model.model.meshInstances.forEach(mi => mi.setParameter('material_diffuse', [1 - this.burnedPercentage, 1 - this.burnedPercentage, 1 - this.burnedPercentage]));
    }
};

FlameEffect.prototype.applyTo = function(parentEntity, delay) {
    this.parentEntity = parentEntity;
    this.parentEntity.burned = true;
   
    this.entity.delayedCall(delay * 1000, () => this.startFire());
};


FlameEffect.prototype.startFire = function() {
    if(!this.parentEntity || !this.parentEntity.script) {
        return;
    }
    this.fireStarted = true;
    this.burnedPercentage = 0;
    this.camera = this.app.root.findByName("Camera");
    this.flameEntity = this.entity.findByName('FireEffectSystem');
    this.entity.reparent(this.parentEntity);
    this.entity.setLocalPosition(0, 0, 0);
    
    const itemMaxDimension = this.parentEntity.script.item.getLinearSize();
    const targetScale = Math.sqrt(Math.max(itemMaxDimension, 1));
    
    this.flameEntity.setLocalScale(0.15, 0.5, 0.15);
    this.flameEntity.tween(this.flameEntity.getLocalScale())
            .to(new pc.Vec3(targetScale, targetScale, targetScale), 0.3, pc.BackOut)
            .start();
    
    this.app.fire(EventTypes.PLAY_AUDIO, "wood_fire", 100);
    
    this.flameEntity.particlesystem.play();
    
    const woodBurningDuration = GameConfig.getAttribute('woodBurningDuration');
    const woodFireSpreadDelay = GameConfig.getAttribute('woodFireSpreadDelay');
    const repeats = pc.math.clamp(Math.floor((woodBurningDuration - woodFireSpreadDelay) / woodFireSpreadDelay), 1, 10);
    for(let i = 1; i < repeats; i++) {
        this.entity.delayedCall(woodFireSpreadDelay * i * 1000, () => this.burnNeighborEntities());
    }
       
    this.entity.delayedCall(GameConfig.getAttribute('woodBurningDuration') * 1000, () => {
        this.flameEntity.particlesystem.stop();
        
        this.entity.delayedCall(350, () => {
            if(this.parentEntity && this.parentEntity.script && this.parentEntity.script.item) {
                this.parentEntity.script.item.breakBlock(false, "fire");
            }
            this.entity.destroy();
        });
    });
};

FlameEffect.prototype.burnNeighborEntities = function() {
    if(this.parentEntity) {
        const parentEntityPosition = this.parentEntity.getPosition();
        const parentEntityContainer = this.parentEntity.parent;
        if(parentEntityContainer) {
            parentEntityContainer.children.forEach(child => {
                if(child && child.script && child.script.item && child != this.parentEntity && Utils.getBoundingBox(this.parentEntity, this.fireSpreadExtendDistance).intersects(Utils.getBoundingBox(child))) {
                    if(child.itemType === Item.TYPE_WOOD && !child.burned) {
                        const flameEffect = this.app.root.findByName('ObjectsPrefabs').findByName('FlameEffect').clone();
                        flameEffect.script.flameEffect.applyTo(child, pc.math.random(0, 0.2));
                    } else if(child.itemType === Item.TYPE_GLASS) {
                        child.script.item.breakBlock(false, "fire");
                    }
                }
            });
        }
    }  
};


FlameEffect.prototype.destroyHandler = function() {
     this.flameEntity = null;
     this.parentEntity = null;
     this.camera = null;
};

// rubble.js
/* jshint esversion: 6 */
var Rubble = pc.createScript('rubble');

Rubble.prototype.initialize = function() {
    this.entity.rigidbody.on('collisionstart', this.onCollisionStart, this);
};

Rubble.prototype.create = function(worldPosition, material, meshParameters) {
    const lifeTime = pc.math.random(GameConfig.getAttribute('rubbleLifeTime').x, GameConfig.getAttribute('rubbleLifeTime').y) * 1000;
    const scale = pc.math.random(0.35, 0.6);
    this.entity.delayedCall(lifeTime, () => this.fadeOut());
   
    this.entity.delayedCall(10, () => {
        this.entity.setLocalScale(scale, scale, scale);
        this.entity.model.model.meshInstances[0].material = material;
        this.entity.setLocalEulerAngles(pc.math.random(0, 180), pc.math.random(0, 180), pc.math.random(0, 180));
        this.entity.enabled = true;
        this.entity.rigidbody.teleport(worldPosition.x, worldPosition.y, worldPosition.z);
        this.entity.rigidbody.linearVelocity.set(pc.math.random(-5, 5), 30, pc.math.random(-5, 5));
        
        /* copy parameters from original entity */
        for(let key in meshParameters) {
            this.entity.model.meshInstances[0].setParameter(key, meshParameters[key].data);
        }
        
        /* opacity hack to allow alpha fade-out */
        this.initialOpacity = this.entity.model.meshInstances[0].material.opacity;
        if(this.entity.model.meshInstances[0].parameters.material_opacity === undefined){
           this.entity.model.meshInstances[0].material.opacity = (this.initialOpacity * 0.999999);
           this.entity.model.meshInstances[0].material.blendType = pc.BLEND_NORMAL;
           this.entity.model.meshInstances[0].material.update();
           this.entity.model.meshInstances[0].setParameter('material_opacity', this.initialOpacity);
        }	
    });
};

Rubble.prototype.fadeOut = function() {
    if(!this.fadingOut) {
        this.fadingOut = true;
        this.fadeOutProgress = 1.0;
        this.entity.tween(this)
            .to({fadeOutProgress: 0}, GameConfig.getAttribute('rubbleDisappearingTime'), pc.Linear)
            .on('complete', () => {
                this.entity.destroy();
            })
            .start();
    }
};

Rubble.prototype.update = function(dt) {
    if(this.fadingOut) {
        this.entity.model.meshInstances[0].setParameter('material_opacity', this.fadeOutProgress);
    }
};

Rubble.prototype.onCollisionStart = function (result) {
    if (result.other.rigidbody) {
        if(result.other.name.indexOf("Ground") != -1 || result.other.name.indexOf("Terrain") != -1) {
           this.fadeOut();
        }
    }
};


// rubbleController.js
/* jshint esversion: 6 */
var RubbleController = pc.createScript('rubbleController');

RubbleController.prototype.initialize = function() {
    this.app.on(EventTypes.SPAWN_RUBBLE, this.spawnRubble, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
    this.app.on(EventTypes.EXPLOSION, this.handleExplosion, this);
    this.app.on(EventTypes.HORIZONTAL_EXPLOSION, this.handleHorizontalExplosion, this);
    
};

RubbleController.prototype.update = function(dt) {
    
};

RubbleController.prototype.spawnRubble = function(baseEntity) {
    const numRubbles = Math.floor(pc.math.random(1, GameConfig.getAttribute('maxRubblesPerBlock')));
    for(let i = 0; i < numRubbles; i++) {
        const rubbleBlock = this.app.root.findByName('ObjectsPrefabs').findByName('RubbleBlock').clone();
        rubbleBlock.reparent(this.entity);
        rubbleBlock.script.rubble.create(baseEntity.getPosition().clone(), baseEntity.model.model.meshInstances[0].material.clone(), baseEntity.model.model.meshInstances[0].parameters);
    }
};

RubbleController.prototype.reset = function() {
    for(let i = this.entity.children.length - 1; i > -1; i--) {
        this.entity.children[i].destroy();
    }
};

RubbleController.prototype.handleExplosion = function(worldPosition) {
    const explosionRadius = GameConfig.getAttribute('explosionRadius');
    const demolitionRadius = GameConfig.getAttribute('demolitionRadius');
    const explosionForce = GameConfig.getAttribute('explosionForce') * 2;
    
    for(let i = this.entity.children.length - 1; i > -1; i--) {
        const child = this.entity.children[i];
        if(!child) {
            continue;
        }
        const childPosition = child.getPosition();
        const distance = childPosition.distance(worldPosition);
        if(distance <= explosionRadius) {
            child.rigidbody.applyImpulse(childPosition.clone().sub(worldPosition).normalize().scale(explosionForce / Math.pow(Math.max(distance, 1), GameConfig.getAttribute('explosionDampingFactor')) * child.rigidbody.mass), new pc.Vec3(pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05), pc.math.random(-0.05, 0.05)));   
        }
    }
};

RubbleController.prototype.handleHorizontalExplosion = function(worldPosition) {
    const explosionRadius = GameConfig.getAttribute('explosionRadius') * 2 * 1.5;
    const explosionForce = GameConfig.getAttribute('explosionForce') * 4 * 2.5;
    
     for(let i = this.entity.children.length - 1; i > -1; i--) {
        const child = this.entity.children[i];
         if(!child) {
            continue;
        }
        const childPosition = child.getPosition();
        const distanceY = Math.abs(childPosition.y - worldPosition.y);
        const distance = childPosition.distance(worldPosition);
        if(distanceY <= 0.75 && distance <= explosionRadius) {
            child.delayedCall(Math.max(distance * 25 - 25, 0), () =>  {
                child.rigidbody.friction = 0;
                child.rigidbody.restitution = 0;
                child.rigidbody.applyImpulse(childPosition.clone().sub(worldPosition).normalize().scale(explosionForce / Math.pow(Math.max(distance, 1), GameConfig.getAttribute('explosionDampingFactor')) * child.rigidbody.mass).mul(new pc.Vec3(1,0,1)), new pc.Vec3(0, 0, 0));   
            });
        }
    }
} ;

// bombPointsCounter.js
/* jshint esversion: 6 */
var BombPointsCounter = pc.createScript('bombPointsCounter');


BombPointsCounter.prototype.initialize = function() {
    this.entity.notEnoughCoins = this.entity.findByName('NotEnoughCoins');
    this.entity.numPointsText = this.entity.findByName('NumPointsText');
    this.entity.pointsDeltaText = this.entity.findByName('PointsDeltaText');
    this.entity.pointsDeltaText.element.opacity = 0;
    
    this.entity.notEnoughCoins.element.opacity = 0;
    
    this.initialTextColor = this.entity.numPointsText.element.color.clone();
    
    this.app.on(EventTypes.UPDATE_BOMB_POINTS_AMOUNT, this.updateBombPointsAmount, this);
    this.app.on(EventTypes.EXPLOSION_TYPE_SELECTED, this.moveToSelectedButton, this);
    this.app.on(EventTypes.NOT_ENOUGH_BOMB_POINTS, this.tweenNotEnoughBombPoints, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
    
    this.entity.enabled = false;
};


BombPointsCounter.prototype.update = function(dt) {
    if(isUnlimitedPoints()) {
        this.entity.enabled = false;
    }
};

BombPointsCounter.prototype.reset = function() {
    this.prevPointsValue = undefined;
};


BombPointsCounter.prototype.updateBombPointsAmount = function(bombPoints) {
    if(!this.prevPointsValue) {
        this.prevPointsValue = bombPoints;
    }
    const delta = bombPoints - this.prevPointsValue;
    this.prevPointsValue = bombPoints;
    
    if(delta !== 0) {
        this.tweenDeltaPoints(delta);
    }
    this.tweenMainPointsText(bombPoints, delta);
};

BombPointsCounter.prototype.tweenNotEnoughBombPoints = function() {
    this.app.fire(EventTypes.PLAY_AUDIO, "purchaseFailed");   
    this.displayNotEnoughCoins();
    
    var color = this.initialTextColor.clone();
    var targetColor = new pc.Color(1, 0, 0);
    this.app.tween(color)
       .to(targetColor, 0.075, pc.Linear)
       .on('update', () => {this.entity.numPointsText.element.color = color;})
       .repeat(6)
       .yoyo(true)
       .start();
};

BombPointsCounter.prototype.tweenDeltaPoints = function(delta) {
    this.entity.pointsDeltaText.element.text = (delta > 0 ? '+' : '') + (delta);
    if(this.deltaTextOpacityTween && this.deltaTextOpacityTween.playing) {
        this.deltaTextOpacityTween.stop();
    }
    if(this.deltaTextPositionTween && this.deltaTextPositionTween.playing) {
        this.deltaTextPositionTween.stop();
    }
    if(this.deltaTextScaleTween && this.deltaTextScaleTween.playing) {
        this.deltaTextScaleTween.stop();
    }
    this.entity.pointsDeltaText.element.opacity = 1;
    this.deltaTextOpacityTween = this.entity.pointsDeltaText.tween(this.entity.pointsDeltaText.element)
        .to({opacity: 0}, 0.55, pc.Linear)
        .start();
    
    this.entity.pointsDeltaText.setLocalPosition(16, 33, 0);
    this.deltaTextPositionTween = this.entity.pointsDeltaText.tween(this.entity.pointsDeltaText.getLocalPosition())
        .to(new pc.Vec3(16, 60, 0), 0.55, pc.SineInOut)
        .start();
    
    this.entity.pointsDeltaText.setLocalScale(0.5, 0.5, 0.5);
    this.deltaTextScaleTween = this.entity.pointsDeltaText.tween(this.entity.pointsDeltaText.getLocalScale())
        .to(new pc.Vec3(1.0, 1.0, 1.0), 0.55, pc.SineOut)
        .start();
};


BombPointsCounter.prototype.tweenMainPointsText = function(points, delta) {
    this.entity.numPointsText.element.text =  '' + points;
    
    if(this.mainTextTween && this.mainTextTween.playing) {
        this.mainTextTween.stop();
    }
    
    this.entity.numPointsText.setLocalScale(1, 1, 1);
    this.mainTextTween = this.entity.numPointsText.tween(this.entity.numPointsText.getLocalScale())
        .to(delta > 0 ? new pc.Vec3(1.25, 1.25, 1.25) : new pc.Vec3(0.8, 0.8, 0.8), delta > 0 ? 0.08: 0.08, pc.SineInOut)
        .yoyo(true)
        .repeat(2)
        .start();
};

BombPointsCounter.prototype.moveToSelectedButton = function(explosionType, selectedButtonIndex) {
    
    if(!explosionType || selectedButtonIndex === undefined) {
        this.entity.enabled = false;
        return;
    } 
    
    this.entity.enabled = true;
    
//     if(this.currentButtonIndex != selectedButtonIndex) {
//         this.currentButtonIndex = selectedButtonIndex;
//         this.entity.enabled = true;
        
//         let targetPosition = new pc.Vec3(selectedButtonIndex * (Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_UNSELECTED_SCALE + Constants.BOMB_BUTTON_SPACING) + 0.5 * Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_SELECTED_SCALE , Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_SELECTED_SCALE + 4, 0);
       
//         if(this.positionTween && this.positionTween.playing) {
//             this.positionTween.stop();
//         }
//         this.entity.setLocalPosition(targetPosition.x, Constants.BOMB_BUTTON_WIDTH * Constants.BOMB_BUTTON_UNSELECTED_SCALE + 4, targetPosition.z);
//         this.positionTween = this.entity.tween(this.entity.getLocalPosition())
//             .to(targetPosition,  0.05, pc.SineInOut)
//             .start();
        

//         if(this.scalingTween && this.scalingTween.playing) {
//             this.scalingTween.stop();
//         }
//         this.entity.setLocalScale(Constants.BOMB_BUTTON_UNSELECTED_SCALE, Constants.BOMB_BUTTON_UNSELECTED_SCALE, Constants.BOMB_BUTTON_UNSELECTED_SCALE);
//         this.scalingTween = this.entity.tween(this.entity.getLocalScale())
//             .to(new pc.Vec3(Constants.BOMB_BUTTON_SELECTED_SCALE, Constants.BOMB_BUTTON_SELECTED_SCALE, Constants.BOMB_BUTTON_SELECTED_SCALE), 0.05, pc.SineInOut)
//             .start();
//     }
   
};


BombPointsCounter.prototype.displayNotEnoughCoins = function() {
    this.entity.notEnoughCoins.enabled = true;
    
    if(this.alphaAppearingTween && this.alphaAppearingTween.playing) {
        this.alphaAppearingTween.stop();
    }
        
    if(this.alphaDisappearingTween && this.alphaDisappearingTween.playing) {
        this.alphaDisappearingTween.stop();
    }
    
    if(this.positionAppearingTween && this.positionAppearingTween.playing) {
        this.positionAppearingTween.stop();
    }
    
    if(this.positionDisappearingTween && this.positionDisappearingTween.playing) {
        this.positionDisappearingTween.stop();
    }
    
    this.entity.notEnoughCoins.element.opacity = 0.3;
    this.alphaAppearingTween = this.entity.notEnoughCoins.tween(this.entity.notEnoughCoins.element)
        .to({opacity: 1}, 0.13, pc.SineIn);


    this.alphaDisappearingTween = this.entity.notEnoughCoins.tween(this.entity.notEnoughCoins.element)
        .to({opacity: 0}, 0.7, pc.Linear)
        .on('complete', () => {
            this.entity.notEnoughCoins.enabled = false;
        });

    this.alphaAppearingTween.chain(this.alphaDisappearingTween).start();

    
     this.entity.notEnoughCoins.setLocalPosition(5, -30, 0);
     this.positionAppearingTween = this.entity.notEnoughCoins.tween(this.entity.notEnoughCoins.getLocalPosition())
        .to(new pc.Vec3(5, -17, 0), 0.18, pc.SineIn);
    
      this.positionDisappearingTween = this.entity.notEnoughCoins.tween(this.entity.notEnoughCoins.getLocalPosition())
        .to(new pc.Vec3(5, 15, 0), 0.65, pc.Linear);

     this.positionAppearingTween.chain(this.positionDisappearingTween).start();
    
    
};

// LavaSurface.js
var LavaSurface = pc.createScript('lavaSurface');

LavaSurface.attributes.add('vs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Vertex Shader'
});

LavaSurface.attributes.add('fs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Fragment Shader'
});

LavaSurface.attributes.add('surfaceTexture', {
    type: 'asset',
    assetType: 'texture',
    title: 'Surface Texture'
});

LavaSurface.attributes.add('isMask', {type:'boolean',title:"Is Mask?"});

LavaSurface.prototype.GeneratePlaneMesh = function(options){
    // 1 - Set default options if none are provided 
    if(options === undefined)
        options = {subdivisions:50, width:20, height:20};
    // 2 - Generate points, uv's and indices 
    var positions = [];
    var uvs = [];
    var indices = [];
    var row, col;
    var normals;

    for (row = 0; row <= options.subdivisions; row++) {
        for (col = 0; col <= options.subdivisions; col++) {
            var position = new pc.Vec3((col * options.width) / options.subdivisions - (options.width / 2.0), 0, ((options.subdivisions - row) * options.height) / options.subdivisions - (options.height / 2.0));
            
            positions.push(position.x, position.y, position.z);
            
            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);
        }
    }

    for (row = 0; row < options.subdivisions; row++) {
        for (col = 0; col < options.subdivisions; col++) {
            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));

            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));
            indices.push(col + (row + 1) * (options.subdivisions + 1));
        }
    }
    
    // Compute the normals 
    normals = pc.calculateNormals(positions, indices);

    
    // Make the actual model
    var node = new pc.GraphNode();
    var material = this.CreateLavaMaterial();
   
    // Create the mesh 
    var mesh = pc.createMesh(this.app.graphicsDevice, positions, {
        normals: normals,
        uvs: uvs,
        indices: indices
    });

    var meshInstance = new pc.MeshInstance(node, mesh, material);
    
    // Add it to this entity 
    var model = new pc.Model();
    model.graph = node;
    model.meshInstances.push(meshInstance);
    
    this.entity.addComponent('model');
    this.entity.model.model = model;
    this.entity.model.castShadows = false; // We don't want the water surface itself to cast a shadow 
    
    // Set the culling masks 
    var bit = this.isMask ? 3 : 2; 
    meshInstance.mask = 0; 
    meshInstance.mask |= (1 << bit);
};

LavaSurface.prototype.CreateLavaMaterial = function(){
    // Create a new blank material  
    var material = new pc.Material();
    // A name just makes it easier to identify when debugging 
    material.name = "DynamicLava_Material";
    
    // Create the shader definition 
    // dynamically set the precision depending on device.
    var gd = this.app.graphicsDevice;
    var fragmentShader = "precision " + gd.precision + " float;\n";
    fragmentShader = fragmentShader + this.fs.resource;
    
    var vertexShader = this.vs.resource;

    // A shader definition used to create a new shader.
    var shaderDefinition = {
        attributes: {           
            aPosition: pc.gfx.SEMANTIC_POSITION,
            aUv0: pc.SEMANTIC_TEXCOORD0,
        },
        vshader: vertexShader,
        fshader: fragmentShader
    };
    
    // Create the shader from the definition
    this.shader = new pc.Shader(gd, shaderDefinition);
    
    // Set blending 
    material.blendType = pc.BLEND_NONE;  
    //pc.BLEND_ADDITIVEALPHA;
    //pc.BLEND_SUBTRACTIVE
    //pc.BLEND_NONE;  
    
    // Define our uniforms
    if(!this.camera){
        this.camera = this.app.root.findByName("Camera").camera;
    }
    var camera = this.camera; 
    var n = camera.nearClip;
    var f = camera.farClip;
    var camera_params = [
        1/f,
        f,
        (1 - f / n) / 2,
        (1 + f / n) / 2
    ];
            
    material.setParameter('camera_params', camera_params);
    material.setParameter('uTime', this.time);
    material.setParameter('uSurfaceTexture', this.surfaceTexture.resource);
    material.setParameter('isMask', this.isMask);   
    this.material = material; // Save a reference to this material
     
    // Apply shader to this material 
    material.setShader(this.shader);
    
    return material;
};

// initialize code called once per entity
LavaSurface.prototype.initialize = function() {
    this.time = 0;
    
    this.GeneratePlaneMesh();
    
    // Save the current shaders 
    this.savedVS = this.vs.resource;
    this.savedFS = this.fs.resource;
};

// update code called every frame
LavaSurface.prototype.update = function(dt) {
    
    if(this.savedFS != this.fs.resource || this.savedVS != this.vs.resource){
        // Re-create the material so the shaders can be recompiled 
        var newMaterial = this.CreateLavaMaterial();
        // Apply it to the model 
        var model = this.entity.model.model;
        var mesh = model.meshInstances[0]; 
        mesh.material = newMaterial;  
        
        // Save the new shaders
        this.savedVS = this.vs.resource;
        this.savedFS = this.fs.resource;
    }
    
    this.time += 0.035; 
    this.material.setParameter('uTime', this.time);
};

// swap method called for script hot-reloading
// inherit your script state here
LavaSurface.prototype.swap = function(old) { 
    this.time = old.time;
};

// WaterSurface.js
/* jshint esversion: 6 */
var WaterSurface = pc.createScript('waterSurface');

WaterSurface.attributes.add('vs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Vertex Shader'
});

WaterSurface.attributes.add('fs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Fragment Shader'
});

WaterSurface.attributes.add('surfaceTexture', {
    type: 'asset',
    assetType: 'texture',
    title: 'Surface Texture'
});

WaterSurface.attributes.add('isMask', {type:'boolean',title:"Is Mask?"});

WaterSurface.prototype.GeneratePlaneMesh = function(options){
    // 1 - Set default options if none are provided 
    if(options === undefined)
        options = {subdivisions:50, width:20, height:20};
    // 2 - Generate points, uv's and indices 
    var positions = [];
    var uvs = [];
    var indices = [];
    var row, col;
    var normals;

    for (row = 0; row <= options.subdivisions; row++) {
        for (col = 0; col <= options.subdivisions; col++) {
            var position = new pc.Vec3((col * options.width) / options.subdivisions - (options.width / 2.0), 0, ((options.subdivisions - row) * options.height) / options.subdivisions - (options.height / 2.0));
            
            positions.push(position.x, position.y, position.z);
            
            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);
        }
    }

    for (row = 0; row < options.subdivisions; row++) {
        for (col = 0; col < options.subdivisions; col++) {
            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));

            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));
            indices.push(col + (row + 1) * (options.subdivisions + 1));
        }
    }
    
    // Compute the normals 
    normals = pc.calculateNormals(positions, indices);

    
    // Make the actual model
    var node = new pc.GraphNode();
    var material = this.CreateWaterMaterial();
   
    // Create the mesh 
    var mesh = pc.createMesh(this.app.graphicsDevice, positions, {
        normals: normals,
        uvs: uvs,
        indices: indices
    });

    var meshInstance = new pc.MeshInstance(node, mesh, material);
    
    // Add it to this entity 
    var model = new pc.Model();
    model.graph = node;
    model.meshInstances.push(meshInstance);
    
    this.entity.addComponent('model');
    this.entity.model.model = model;
    this.entity.model.castShadows = false; // We don't want the water surface itself to cast a shadow 
    
    // Set the culling masks 
    var bit = this.isMask ? 3 : 2; 
    meshInstance.mask = 0; 
    meshInstance.mask |= (1 << bit);
};

WaterSurface.prototype.CreateWaterMaterial = function(){
    // Create a new blank material  
    var material = new pc.Material();
    // A name just makes it easier to identify when debugging 
    material.name = "DynamicLava_Material";
    
    // Create the shader definition 
    // dynamically set the precision depending on device.
    var gd = this.app.graphicsDevice;
    var fragmentShader = "precision " + gd.precision + " float;\n";
    fragmentShader = fragmentShader + this.fs.resource;
    
    var vertexShader = this.vs.resource;

    // A shader definition used to create a new shader.
    var shaderDefinition = {
        attributes: {           
            aPosition: pc.gfx.SEMANTIC_POSITION,
            aUv0: pc.SEMANTIC_TEXCOORD0,
        },
        vshader: vertexShader,
        fshader: fragmentShader
    };
    
    // Create the shader from the definition
    this.shader = new pc.Shader(gd, shaderDefinition);
    
    // Set blending 
    material.blendType = pc.BLEND_ADDITIVEALPHA;  
    //pc.BLEND_ADDITIVEALPHA;
    //pc.BLEND_SUBTRACTIVE
    //pc.BLEND_NONE;  
    
    // Define our uniforms
    if(!this.camera){
        this.camera = this.app.root.findByName("Camera").camera;
    }
    var camera = this.camera; 
    var n = camera.nearClip;
    var f = camera.farClip;
    var camera_params = [
        1/f,
        f,
        (1 - f / n) / 2,
        (1 + f / n) / 2
    ];
            
    material.setParameter('camera_params', camera_params);
    material.setParameter('uTime', this.time);
    material.setParameter('uSurfaceTexture', this.surfaceTexture.resource);
    material.setParameter('isMask', this.isMask);   
    this.material = material; // Save a reference to this material
     
    // Apply shader to this material 
    material.setShader(this.shader);
    
    return material;
};

// initialize code called once per entity
WaterSurface.prototype.initialize = function() {
    this.time = 0;
    
    this.GeneratePlaneMesh();
    
    // Save the current shaders 
    this.savedVS = this.vs.resource;
    this.savedFS = this.fs.resource;
    
    this.camera = this.app.root.findByName('Camera');
    this.initialPosition = this.entity.getPosition();
};

// update code called every frame
WaterSurface.prototype.update = function(dt) {
    
    if(this.savedFS != this.fs.resource || this.savedVS != this.vs.resource){
        // Re-create the material so the shaders can be recompiled 
        var newMaterial = this.CreateWaterMaterial();
        // Apply it to the model 
        var model = this.entity.model.model;
        var mesh = model.meshInstances[0]; 
        mesh.material = newMaterial;  
        
        // Save the new shaders
        this.savedVS = this.vs.resource;
        this.savedFS = this.fs.resource;
    }
    
    this.time += 0.035; 
    this.material.setParameter('uTime', this.time);
    
    const cameraPos = this.camera.getPosition();
    const angle = Math.atan2(cameraPos.z, cameraPos.x);
    this.entity.setPosition(Math.round(-Math.cos(angle)) * 20, this.initialPosition.y, Math.round(-Math.sin(angle)) * 20);
};

// swap method called for script hot-reloading
// inherit your script state here
WaterSurface.prototype.swap = function(old) { 
    this.time = old.time;
};

// TutorialController.js
/* jshint esversion: 6 */
var TutorialController = pc.createScript('tutorialController');

TutorialController.TUTORIAL_COMPLETED = false;

TutorialController.getInstance = function() {
    if(TutorialController._instance) {
        return TutorialController._instance;
    } else {
        return {isActive: () => false};
    }    
};

TutorialController.prototype.initialize = function() {    
    TutorialController._instance = this;
    this.app.on(EventTypes.START_TUTORIAL, this.startTutorial, this);
    
    this.tutorialHandContainer = this.entity.findByName('TutorialHandContainer');
    this.tutorialHand = this.entity.findByName('TutorialHand');
    this.currentTarget = null;
    this.tutorialActive = false; 
        
    famobi.log('TutorialController initialized');
};


TutorialController.prototype.isActive = function() {
    return this.tutorialActive;
};


TutorialController.prototype.startTutorial = function() {
    famobi.log('START TUTORIAL'); 
    this.createTutorialSteps();
    this.startNextStep();
    this.tutorialActive = true;
};


TutorialController.prototype.createTutorialSteps = function() {
    this.tutorialSteps = [
        new TutorialStep(this, {targetUIElementName: 'DynamiteButton'}),         
        new TutorialStep(this, {targetItemName: 'WoodenCube_tutorial_1a'}), 
        new TutorialStep(this, {targetItemName: 'WoodenCube_tutorial_1b'}), 
        new TutorialStep(this, {targetUIElementName: 'DetonateButtonContainer'}), 
        
        new TutorialStep(this, {targetUIElementName: 'ImplosiveButton', delay: 1.75}),
        new TutorialStep(this, {targetItemName: 'WoodenCube_tutorial_2'}), 
        new TutorialStep(this, {targetUIElementName: 'DetonateButtonContainer'}), 
        new TutorialStep(this, {targetUIElementName: 'HorizontalButton', delay: 2.2}),
        new TutorialStep(this, {targetItemName: 'WoodenCube_tutorial_3'}), 
        new TutorialStep(this, {targetUIElementName: 'DetonateButtonContainer'}), 
        
        new TutorialStep(this, {targetCameraYaw: [150, 190], delay: 2.7}),
        new TutorialStep(this, {targetUIElementName: 'PunchButton'}),
        new TutorialStep(this, {targetItemName: 'WoodenCube_tutorial_4'}), 
        new TutorialStep(this, {targetUIElementName: 'DetonateButtonContainer'}), 
        
        new TutorialStep(this, {targetUIElementName: 'MolotovButton', delay: 3}),
        new TutorialStep(this, {targetItemName: 'WoodenCube_tutorial_5'}), 
        new TutorialStep(this, {targetUIElementName: 'DetonateButtonContainer'}), 
        
    ];
};

TutorialController.prototype.stepCompleted = function(step) {
    if(step === this.currentStep) {
        this.startNextStep();
    }
};

TutorialController.prototype.startNextStep = function() {
    this.currentStep = this.tutorialSteps.shift();
    if(!this.currentStep) {        
        this.finishTutorial();
        return;
    }
    
    this.resetCurrentHighlighting();
    
    setTimeout(() => {
        
        if(this.currentStep.config.targetUIElementName !== undefined) {
            const handTarget = this.app.root.findByName('LevelUI').findByName(this.currentStep.config.targetUIElementName);
            if(handTarget) {
                this.highlightUIElement(handTarget);
            } 
        }

        if(this.currentStep.config.targetItemName !== undefined) {
            const handTarget = this.app.root.findByName('ObjectsContainer').children.find(child => child.script && child.script.item && child.name === this.currentStep.config.targetItemName);
            if(handTarget) {
                this.highlightEntity(handTarget);
            }
        }

        if(this.currentStep.config.targetCameraYaw !== undefined) {
            this.showCameraRotationAnimation();
        }
    }, (this.currentStep.config.delay || 0) * 1000);

};


TutorialController.prototype.stopHandShakingTween = function() {
    if(this.handShakingTween && this.handShakingTween.playing) {
        this.handShakingTween.stop();
    }
    this.tutorialHand.setLocalScale(1, 1, 1);
};


TutorialController.prototype.playHandShakingTween = function() {
     this.stopHandShakingTween();
     this.handShakingTween = this.tutorialHand.tween(this.tutorialHand.getLocalScale())
        .to(new pc.Vec3(1.15, 1.15, 1.15), 0.3, pc.SineInOut)
        .yoyo(true)
        .repeat(100000)
        .start();
};

TutorialController.prototype.finishTutorial = function() {
    famobi.log('TUTORIAL COMPLETED');
    this.resetCurrentHighlighting();
    this.tutorialHand.enabled = false;
    TutorialController.TUTORIAL_COMPLETED = true;
    this.tutorialActive = false;
    this.app.fire(EventTypes.SAVE_APP);
};



TutorialController.prototype.update = function(dt) {
    if(this.currentStep && this.currentStep.config.delay > 0) {
        this.currentStep.config.delay -= dt;
    }
    if(this.currentTarget) {
        if(this.currentTarget.element) {
            this.tutorialHand.reparent(this.currentTarget.parent);
            const targetPosition = this.currentTarget.getLocalPosition();
            this.tutorialHand.setLocalPosition(targetPosition.x - (this.currentTarget.element.pivot.x - 0.5) * this.currentTarget.element.width, targetPosition.y - (this.currentTarget.element.pivot.y - 0.4) * this.currentTarget.element.height, targetPosition.z);        
        } else {
            this.setHandScreenPosition(this.tutorialHand, this.currentTarget.getPosition());
        }
    } 
};


TutorialController.prototype.setHandScreenPosition = function(entity, targetPosition) {
       var screenPos = new pc.Vec3();
       this.app.root.findByName("Camera").camera.worldToScreen(targetPosition, screenPos);
       var scale = this.app.root.findByName('UIContainer').screen.scale;
       var device = this.app.graphicsDevice;
       entity.setLocalPosition((screenPos.x * ScaleManager.qualityFactor) / scale, (device.height - (screenPos.y * ScaleManager.qualityFactor)) / scale, 0);   
};

TutorialController.prototype.showCameraRotationAnimation = function() {
 
    if(this.cameraRotatingTween && this.cameraRotatingTween.playing) {
        this.cameraRotatingTween.stop();
    }
    
    this.tutorialHand.enabled = true;
    this.tutorialHand.reparent(this.tutorialHandContainer);
    this.tutorialHand.setLocalPosition(0, 0, 0);
        
    this.tutorialHandContainer.setLocalScale(1, 1, 1);    
    this.tutorialHandContainer.setLocalPosition(-160, -80, 0);  
    
    this.stopHandShakingTween();
    
    this.cameraRotatingTween = this.tutorialHandContainer.tween(this.tutorialHandContainer.getLocalPosition())
        .to(new pc.Vec3(160, -80, 0), 1.35, pc.QuadraticInOut);
    
    
    this.handAlphaAppearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({opacity: 1}, 0.2, pc.Linear, 0.15);
    
    this.handAlphaDisappearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({opacity: 0}, 0.15, pc.Linear)
        .on('complete', () => this.tutorialHandContainer.setLocalPosition(-160, -80, 0));
        
    this.handAlphaAppearingTween.chain(this.cameraRotatingTween);
    this.cameraRotatingTween.chain(this.handAlphaDisappearingTween);
    this.handAlphaDisappearingTween.chain(this.handAlphaAppearingTween);
    
    this.tutorialHand.element.opacity = 0;
    this.handAlphaAppearingTween.start();
};


TutorialController.prototype.highlightEntity = function(targetEntity) {
    this.tutorialHandContainer.setLocalScale(1.25, 1.25, 1.25);    
    this.tutorialHandContainer.setLocalPosition(-360, -640, 0);   
    
    this.tutorialHand.element.opacity = 0;
    this.handAlphaAppearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({opacity: 1}, 0.35, pc.SineIn)
        .start();
        
    this.currentTarget = targetEntity;
    this.tutorialHand.enabled = true;
    this.tutorialHand.reparent(this.entity);
    
    this.playHandShakingTween();    
    
    if(this.currentTarget.itemType) {
        this.currentTarget.originalEmissive = this.currentTarget.model.meshInstances[0].material.emissive;
        this.currentTarget.emissiveHighlightingValue = 0; 
        this.currentTarget.highlightingTween = this.currentTarget.tween(this.currentTarget)
            .to({emissiveHighlightingValue: 0.35}, 0.35, pc.SineInOut)
            .repeat(10000)
            .yoyo(true)
            .start()
            .on('update', () => {
                if(this.currentTarget && this.currentTarget.model && this.currentTarget.model.meshInstances[0]) {
                    this.currentTarget.model.meshInstances[0].setParameter('material_emissive', [this.currentTarget.emissiveHighlightingValue, this.currentTarget.emissiveHighlightingValue, this.currentTarget.emissiveHighlightingValue]);
                }
        });

    }
};

TutorialController.prototype.highlightUIElement = function(uiElement) {
    if(this.cameraRotatingTween && this.cameraRotatingTween.playing) {
        this.cameraRotatingTween.stop();
    }
    this.tutorialHandContainer.setLocalScale(1.0, 1.0, 1.0);    
    this.tutorialHandContainer.setLocalPosition(-360, -640, 0);
    
    this.tutorialHand.element.opacity = 0;
    this.handAlphaAppearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({opacity: 1}, 0.35, pc.SineIn)
        .start();
    
    this.currentTarget = uiElement;
    this.tutorialHand.enabled = true;

    this.playHandShakingTween();    
    
    const highlightingSprite = this.currentTarget.findByName('HighlightingSprite');
    if(this.currentTarget.element && highlightingSprite) {
        this.currentTarget.highlightingTween = this.currentTarget.tween(highlightingSprite.element)
            .to({opacity: 0.75}, 0.35, pc.SineInOut)
            .repeat(10000)
            .yoyo(true)
            .start();
    }
};


TutorialController.prototype.resetCurrentHighlighting = function() {
    if(this.cameraRotatingTween && this.cameraRotatingTween.playing) {
        this.cameraRotatingTween.stop();
    }
    if(this.handAlphaAppearingTween && this.handAlphaAppearingTween.playing) {
        this.handAlphaAppearingTween.stop();
    }
    if(this.handAlphaDisappearingTween && this.handAlphaDisappearingTween.playing) {
        this.handAlphaDisappearingTween.stop();
    }
    this.tutorialHand.element.alpha = 1;
    this.tutorialHand.enabled = false;
    
    if(this.currentTarget) {
        if(this.currentTarget.itemType) {
            if(this.currentTarget.highlightingTween) {
                this.currentTarget.highlightingTween.stop();
                this.currentTarget.highlightingTween = null;
                this.currentTarget.model.meshInstances[0].setParameter('material_emissive', [this.currentTarget.originalEmissive.r, this.currentTarget.originalEmissive.g, this.currentTarget.originalEmissive.b]);
            }
        } else if(this.currentTarget.element) {
            if(this.currentTarget.highlightingTween) {
                this.currentTarget.highlightingTween.stop();
                this.currentTarget.highlightingTween = null;
                const highlightingSprite = this.currentTarget.findByName('HighlightingSprite');
                if(highlightingSprite) {
                    highlightingSprite.element.opacity = 0;
                }
                
            }
        }
    }
    this.currentTarget = null;
    // this.tutorialHand.enabled = false;
};

// TutorialStep.js
/* jshint esversion: 6 */
class TutorialStep {
    
    constructor(tutorialControllerScript, tutorialStepConfig) {
        this.tutorialControllerScript = tutorialControllerScript;
        this.app = this.tutorialControllerScript.app;
        this.config = tutorialStepConfig;
    }
    
    isBombPlantingAllowed(item) {
        return this.config.targetItemName !== undefined && this.config.targetItemName === item.name;
    }
       
    dispatchBombPlantingOnItem(item) {
        if(this.config.targetItemName === item.name) {
            this.tutorialControllerScript.stepCompleted(this);
        }
    }    
   
    isUIElementSelectionAllowed(uiElement) {
        return this.config.targetUIElementName !== undefined && this.config.targetUIElementName === uiElement.name;
    }
    
    dispatchUIElementSelection(uiElement) {
        if(this.config.targetUIElementName === uiElement.name) {
            this.tutorialControllerScript.stepCompleted(this);
        }
    }    
    
    isCameraRotatingAllowed() {
        return !this.isDelayActive() && !!this.config.targetCameraYaw;
    }
    
    isCorrectCameraYaw(yaw) {
        if(this.config.targetCameraYaw && this.config.targetCameraYaw.length === 2) {
            return yaw >= this.config.targetCameraYaw[0] && yaw <= this.config.targetCameraYaw[1];
        }
    }
    
    dispatchCorrectYawSet() {
        if(this.config.targetCameraYaw) {
            this.tutorialControllerScript.stepCompleted(this);
        }
    }
   
    isEarthquakeAllowed() {
        return false;
    }
    
    isDelayActive() {
        return this.config.delay > 0;
    }
        
}

// powerupWindow.js
/* jshint esversion: 6 */
var PowerupWindow = pc.createScript('powerupWindow');

// initialize code called once per entity
PowerupWindow.prototype.initialize = function() {
        
    this.entity.background = this.entity.findByName("Background");
    this.entity.headingIconContainer = this.entity.findByName("HeadingIconContainer");
    this.entity.headingIcon = this.entity.findByName("HeadingIcon");
    this.entity.buttonsContainer = this.entity.findByName("ButtonsContainer");
    this.entity.buttonRevive = this.entity.findByName("ButtonRevive");
    this.entity.buttonReviveGrayscale = this.entity.findByName("ButtonReviveGrayscale");
    this.entity.buttonClose = this.entity.findByName("ButtonClose");
    
    this.assignAction(this.entity.buttonRevive, this.revivePressed, this);
    this.assignAction(this.entity.buttonClose, this.skipPressed, this);
    
     this.entity.headingIcon.tween(this.entity.headingIcon.getLocalScale())
         .to(new pc.Vec3(0.9, 0.9, 0.9), 0.45, pc.SineInOut)
         .yoyo(true)
         .repeat(100000)
         .start();
    
    /* show method */
    this.entity.show = function() {
        this.enabled = true;
              
        /* tween background */
        this.background.element.opacity = 0.0;
        this.background.tween(this.background.element)
            .to({opacity: 0.9}, 0.25, pc.Linear)
            .start();
            
        /* tween heading icon */   
        this.headingIcon.element.opacity = 0.0;
        var headingAppearingTween = 
        this.headingIcon.tween(this.headingIcon.element)
            .to({opacity: 1}, 0.3, pc.Linear)
            .delay(0.1)
            .start();
        
        this.headingIconContainer.setLocalScale(0.0, 0.0, 0.0);
        var headingAppearingScaleTween = 
        this.headingIconContainer.tween(this.headingIconContainer.getLocalScale())
            .to(new pc.Vec3(1.0, 1.0, 1.0), 0.5, pc.BackOut)
            .delay(0.1)
            .start();
       
        
        /* tween buttons */
        this.buttonsContainer.setLocalScale(0, 0, 0);
        this.buttonsContainer
            .tween(this.buttonsContainer.getLocalScale())
            .to(new pc.Vec3(1.1, 1.1, 1.1), 0.5, pc.BackOut)
            .delay(0.4)
            .start();
                
        this.buttonClose.setLocalScale(0, 0, 0);
        this.buttonClose
            .tween(this.buttonClose.getLocalScale())
            .to(new pc.Vec3(1, 1, 1), 0.35, pc.BackOut)
            .delay(0.9)
            .start();
        
    }.bind(this.entity);
    
    
    /* hide method */
    this.entity.hide = function() {
        this.enabled = false;
    }.bind(this.entity);
    
    
    this.entity.hide();
};

// update code called every frame
PowerupWindow.prototype.update = function(dt) {
    if(Apicontroller.hasRewardedVideo()) {
        this.entity.buttonRevive.enabled = true;
        this.entity.buttonReviveGrayscale.enabled = false;
    } else {
        this.entity.buttonRevive.enabled = false;
        this.entity.buttonReviveGrayscale.enabled = true;
    }
};

PowerupWindow.prototype.assignAction = function(button, handler, handlerContext) {
     if(this.app.touch) {
         button.element.on('touchstart', handler, handlerContext);
     } if(this.app.mouse) {
          button.element.on('mousedown', handler, handlerContext);
     } 
};

PowerupWindow.prototype.revivePressed = function() {    
    Apicontroller.showRewardedVideo((result) => {
        if(result.rewardGranted) {
            GameplayController.hasPowerup = true;
            this.app.fire(EventTypes.UPDATE_POWERUP_AVAILABILITY, true);
            this.entity.hide();
        }
    });
};

PowerupWindow.prototype.skipPressed = function() {
    this.app.fire(EventTypes.PLAY_AUDIO, 'click');
    this.entity.hide();   
};



// powerupButton.js
/* jshint esversion: 6 */
var PowerupButton = pc.createScript('powerupButton');

PowerupButton.prototype.initialize = function() {
     
    /* powerup activation via MonkeyGames App */
    window.famobi.activatePowerUp = (pPowerUp) => {
        return new Promise((resolve, reject) => {
            if(pPowerUp != 'earthquake') {
                reject();
            } else {
                this.app.fire(EventTypes.ACTIVATE_EARTHQUAKE);
                resolve(pPowerUp);
            }
        });
    };
    
    this.timerActive = false;
    this.timerValue = 0;
    this.timerInitialValue = GameConfig.getAttribute('powerupButtonTimer');
    
    this.powerupButtonContainer = this.entity;
    this.inputCatcher = this.entity.findByName('InputCatcher');
    this.powerupButtonActive = this.entity.findByName('PowerupButtonActive');    
    this.powerupButtonGreyed = this.entity.findByName('PowerupButtonGreyed');
    this.buttonPlus = this.entity.findByName('ButtonPlus');
    this.helperHand = this.entity.findByName('HelperHand');
    this.tutorialhand = this.entity.findByName('TutorialHand');
    this.timerContainer = this.entity.findByName('TimerContainer');
    this.timeText = this.timerContainer.findByName('Timer');
    this.numChargesText = this.entity.findByName('NumChargesText');
    this.checkmark = this.entity.findByName('Checkmark');
        
    this.assignAction(this.inputCatcher, this.inputHandler, this);
    
    this.app.on(EventTypes.LOAD_STAGE, this.handleStageLoaded, this);
    this.app.on(EventTypes.UPDATE_POWERUP_AVAILABILITY, this.updateAvailability, this);
    this.app.on(EventTypes.SHOW_EARTHQUAKE_HELPER , this.showHelperHandIfAvailable, this);
    this.app.on(EventTypes.ACTIVATE_EARTHQUAKE, this.hideHelperHand, this);
                
    this.initialPowerupContainerPosition = this.entity.getLocalPosition().clone();
    this.entity.setLocalPosition(this.initialPowerupContainerPosition.x + 200, this.initialPowerupContainerPosition.y, this.initialPowerupContainerPosition.z);
   
    this.app.once(EventTypes.GAME_STARTED, this.onGameStarted, this);
};


PowerupButton.prototype.onGameStarted = function() {
     if(GameplayController.gameStarted) {
          this.entity.tween(this.entity.getLocalPosition())
            .to(this.initialPowerupContainerPosition.clone(), 0.25, pc.SineOut, 0.55)
            .start();
     }
};

PowerupButton.prototype.handleStageLoaded = function(currentLevelNumber) {
    setTimeout(() => this.updateAvailability(), 50);
    this.hideHelperHand();
};

PowerupButton.prototype.showHelperHandIfAvailable = function(currentLevelNumber) {
   if(GameplayController.hasPowerup || Apicontroller.hasRewardedVideo()) {
       this.helperHand.enabled = true;
       
        if(this.helperHandOpacityTween && this.helperHandOpacityTween.playing) {
            this.helperHandOpacityTween.stop();
        }
        if(this.helperHandScaleTween && this.helperHandScaleTween.playing) {
            this.helperHandScaleTween.stop();
        }
        if(this.helperHandAppearingTween && this.helperHandAppearingTween.playing) {
            this.helperHandAppearingTween.stop();
        }
       
        this.tutorialhand.element.opacity = 0;
        this.helperHandOpacityTween = this.tutorialhand.tween(this.tutorialhand.element)
            .to({opacity: 1}, 0.5, pc.SineOut)
            .start();
       
        this.helperHand.setLocalScale(5, 5, 5);
        this.helperHandAppearingTween = this.helperHand.tween(this.helperHand.getLocalScale())
            .to(new pc.Vec3(1, 1, 1), 0.5, pc.SineOut);

       
        this.helperHandScaleTween = this.helperHand.tween(this.helperHand.getLocalScale())
            .to(new pc.Vec3(1.15, 1.15, 1.15), 0.45, pc.SineInOut)
            .yoyo(true)
            .repeat(1000);

       this.helperHandAppearingTween.chain(this.helperHandScaleTween);
       this.helperHandAppearingTween.start();
       
       
   } else {
       this.helperHand.enabled = false;
   }
};

PowerupButton.prototype.hideHelperHand = function() {
   this.helperHand.enabled = false;
};

PowerupButton.prototype.updateAvailability = function() {  
    
    if(!isEarthquakeEnabled()) {
        this.entity.enabled = false;
        return;
    }
   
   
    this.entity.enabled = !GameplayController.currentSession.powerupUsed && GameplayController.currentLevel > 0;
    if(this.entity.getLocalPosition().distance(this.initialPowerupContainerPosition) > 0) {
        this.onGameStarted();
    }
                 
    if(GameplayController.hasPowerup) {
        this.powerupButtonActive.enabled = true;
        this.powerupButtonGreyed.enabled = false;
        this.buttonPlus.enabled = false;
        this.timerContainer.enabled = false;
    } else {
        if(Apicontroller.hasRewardedVideo()) {
            this.powerupButtonActive.enabled = false;
            this.powerupButtonGreyed.enabled = true;
            this.buttonPlus.enabled = true;
            this.timerContainer.enabled = false;
        } else {
            if(!this.timerActive) {
                this.timerActive = true;
                this.timerValue = this.timerInitialValue;               
            }
            this.powerupButtonActive.enabled = false;
            this.powerupButtonGreyed.enabled = true;
            this.buttonPlus.enabled = false;
            this.timerContainer.enabled = true;
        }
    }
};


PowerupButton.prototype.update = function(dt) {
    if(!isEarthquakeEnabled()) {
        this.entity.enabled = false;
        return;
    }
    
    if(this.timerActive) {
        if(this.timerValue > 0) {
            this.timerValue -= dt;
            if(this.timerValue <= 0) {
                this.timerValue = 0;
                this.timerActive = false;
                GameplayController.hasPowerup = true;
                this.app.fire(EventTypes.UPDATE_POWERUP_AVAILABILITY);
            }
        }
        this.timeText.element.text = '' + Utils.humanizeTime(this.timerValue);
    }
};

PowerupButton.prototype.inputHandler = function() {
    if(!GameplayController.gameStarted) {
        return;
    }
    if(TutorialController.getInstance().isActive() && !TutorialController.getInstance().currentStep.isEarthquakeAllowed()) {
        return;
    }
    
    this.app.fire(EventTypes.PLAY_AUDIO, 'click');
    
    if(GameplayController.hasPowerup) {
        this.app.fire(EventTypes.ACTIVATE_EARTHQUAKE);
        GameplayController.hasPowerup = false;
        GameplayController.currentSession.powerupUsed = true;
        this.app.fire(EventTypes.UPDATE_POWERUP_AVAILABILITY);   
    } else {
        if(Apicontroller.hasRewardedVideo()) {
            WindowManager.showPowerupWindow();
        } else {
            setTimeout(() => this.app.fire(EventTypes.UPDATE_POWERUP_AVAILABILITY), 1000);            
        }
    }        
};


PowerupButton.prototype.assignAction = function(button, handler, handlerContext) {
    if(this.app.touch) {
        button.element.on('touchstart', handler, handlerContext);
    }
    if(this.app.mouse) {
        button.element.on('mousedown', handler, handlerContext);
    }
};


// ProgressBar.js
var ProgressBar = pc.createScript('progressBar');

ProgressBar.attributes.add('progressImage', {type: 'entity'});
ProgressBar.attributes.add('progressImageMaxWidth', {type: 'number'});

ProgressBar.prototype.initialize = function() {
    this.entity.horizontalBar = this.entity.findByName('LevelProgressBar');
    
    this.reset();
    this.app.on(EventTypes.LEVEL_PROGRESS, this.setProgress, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
};

ProgressBar.prototype.reset = function () {   
    this.entity.currentValue = 0;
    this.entity.cannonValue =  this.entity.cannonValue || 0;
    this.setProgress(0);
};

ProgressBar.prototype.setProgress = function (value) {   
    this.entity.tween(this.entity)
        .to({currentValue: pc.math.clamp(value, 0, 1)}, 0.25, pc.SineOut)
        .start();
};

ProgressBar.prototype.update = function(dt) {
        var width = pc.math.lerp(0, this.progressImageMaxWidth, this.entity.currentValue);
        this.progressImage.element.width = width;
        this.progressImage.element.rect.z = this.entity.currentValue;
};


// copyrightText.js
var CopyrightText = pc.createScript('copyrightText');

CopyrightText.prototype.initialize = function() {
    this.entity.enabled = isCopyrightEnabled();
};

CopyrightText.prototype.update = function(dt) {
    
};


