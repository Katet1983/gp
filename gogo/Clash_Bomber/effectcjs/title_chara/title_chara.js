(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.title_bom1 = function() {
	this.initialize(img.title_bom1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,300);


(lib.title_chara_1 = function() {
	this.initialize(img.title_chara_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,400);


(lib.トゥイーン2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.title_chara_1();
	this.instance.parent = this;
	this.instance.setTransform(-166,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-200,332,400);


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.title_bom1();
	this.instance.parent = this;
	this.instance.setTransform(-95,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-150,190,300);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title_bom1.png
	this.instance = new lib.トゥイーン1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.9,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:23.7},40).to({x:44.9},39).wait(1));

	// title_chara_1.png
	this.instance_1 = new lib.トゥイーン2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-80.3},40).to({x:-97},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-323,402.9,425.9);


// stage content:
(lib.title_chara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.シンボル1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(312.7,370.6,1,1,0,0,0,-61.6,-110.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(431.3,557.7,402.9,425.9);
// library properties:
lib.properties = {
	id: 'EEB35F9DF7042F4182726C80891D126B',
	width: 640,
	height: 800,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/title_chara/images/title_bom1.png", id:"title_bom1"},
		{src:"./effectcjs/title_chara/images/title_chara_1.png", id:"title_chara_1"}
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
an.compositions['EEB35F9DF7042F4182726C80891D126B'] = {
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
