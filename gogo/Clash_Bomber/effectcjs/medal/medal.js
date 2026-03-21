(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.result_highscore_0 = function() {
	this.initialize(img.result_highscore_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,142);


(lib.result_highscore_1 = function() {
	this.initialize(img.result_highscore_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,142);


(lib.result_highscore_2 = function() {
	this.initialize(img.result_highscore_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,142);


(lib.result_highscore_3 = function() {
	this.initialize(img.result_highscore_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,142);


(lib.result_highscore_4 = function() {
	this.initialize(img.result_highscore_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,142);


(lib.result_highscore_5 = function() {
	this.initialize(img.result_highscore_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,142);


(lib.medal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.result_highscore_0();
	this.instance.parent = this;
	this.instance.setTransform(-56,-56);

	this.instance_1 = new lib.result_highscore_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,-56);

	this.instance_2 = new lib.result_highscore_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-56);

	this.instance_3 = new lib.result_highscore_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56,-56);

	this.instance_4 = new lib.result_highscore_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-56,-56);

	this.instance_5 = new lib.result_highscore_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-56,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance}]},2).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56,110,142);


// stage content:
(lib.medal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.medal_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55,72.6,1,1,0,0,0,-1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55,72.6,110,142);
// library properties:
lib.properties = {
	id: '9444BE82A40DFE419876233BD6D789D8',
	width: 110,
	height: 142,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/medal/images/result_highscore_0.png", id:"result_highscore_0"},
		{src:"./effectcjs/medal/images/result_highscore_1.png", id:"result_highscore_1"},
		{src:"./effectcjs/medal/images/result_highscore_2.png", id:"result_highscore_2"},
		{src:"./effectcjs/medal/images/result_highscore_3.png", id:"result_highscore_3"},
		{src:"./effectcjs/medal/images/result_highscore_4.png", id:"result_highscore_4"},
		{src:"./effectcjs/medal/images/result_highscore_5.png", id:"result_highscore_5"}
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
an.compositions['9444BE82A40DFE419876233BD6D789D8'] = {
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
