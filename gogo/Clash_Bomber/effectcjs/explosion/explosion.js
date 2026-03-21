(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.explosion_01 = function() {
	this.initialize(img.explosion_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,115);


(lib.explosion_02 = function() {
	this.initialize(img.explosion_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,127);


(lib.explosion_03 = function() {
	this.initialize(img.explosion_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,149);


(lib.explosion_04 = function() {
	this.initialize(img.explosion_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.explosion_05 = function() {
	this.initialize(img.explosion_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.explosion_06 = function() {
	this.initialize(img.explosion_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.explosion_07 = function() {
	this.initialize(img.explosion_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.bom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.explosion_01();
	this.instance.parent = this;
	this.instance.setTransform(-56,-52);

	this.instance_1 = new lib.explosion_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-58);

	this.instance_2 = new lib.explosion_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-73,-69);

	this.instance_3 = new lib.explosion_04();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-84,-80);

	this.instance_4 = new lib.explosion_05();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-84,-80);

	this.instance_5 = new lib.explosion_06();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-84,-80);

	this.instance_6 = new lib.explosion_07();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-84,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bom("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89.8,90.3,1,1,0,0,0,1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '684DC5052983134393DDF56A932C10CB',
	width: 180,
	height: 180,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/explosion/images/explosion_01.png", id:"explosion_01"},
		{src:"./effectcjs/explosion/images/explosion_02.png", id:"explosion_02"},
		{src:"./effectcjs/explosion/images/explosion_03.png", id:"explosion_03"},
		{src:"./effectcjs/explosion/images/explosion_04.png", id:"explosion_04"},
		{src:"./effectcjs/explosion/images/explosion_05.png", id:"explosion_05"},
		{src:"./effectcjs/explosion/images/explosion_06.png", id:"explosion_06"},
		{src:"./effectcjs/explosion/images/explosion_07.png", id:"explosion_07"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['684DC5052983134393DDF56A932C10CB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
