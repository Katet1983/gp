(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bomb_1 = function() {
	this.initialize(img.bomb_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,98);


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bomb_1();
	this.instance.parent = this;
	this.instance.setTransform(-51,-49);

	this.instance_1 = new lib.bomb_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51,-49);

	this.instance_2 = new lib.bomb_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51,-49);

	this.instance_3 = new lib.bomb_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-51,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-49,102,98);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.トゥイーン1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},2).to({x:2.6,y:2.9},2).to({x:-1.6,y:-0.3},2).to({x:-1.5,y:3.1},2).to({x:2.6,y:0.2},2).to({x:-2.3,y:3.3},2).to({x:-2,y:1},2).to({x:0.8,y:4},2).to({x:2.5,y:1.3},2).to({x:3.6,y:3},2).to({x:-0.3,y:3.8},2).to({x:2.2,y:0.5},2).to({x:0,y:0},2).to({x:2.2},2).to({x:2.4,y:-1.2},2).to({x:0,y:0.6},2).to({x:-1.3,y:-0.7},2).to({x:0.9,y:-1.3},2).to({x:-2.2,y:0},2).to({x:-1.5},2).to({x:1.4,y:-0.7},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-49,102,98);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1 コピー
	this.instance = new lib.シンボル1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,0.6,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({alpha:0,startPosition:38},0).wait(6).to({alpha:1,startPosition:42},0).wait(6).to({alpha:0,startPosition:2},0).wait(4).to({alpha:1,startPosition:5},0).wait(4).to({alpha:0,startPosition:8},0).wait(2).to({alpha:1,startPosition:10},0).wait(2).to({alpha:0,startPosition:12},0).wait(43));

	// レイヤー_1 コピー 2
	this.instance_1 = new lib.シンボル1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.1,1,1,0,0,0,0.6,1.4);
	this.instance_1.filters = [new cjs.ColorFilter(0.21, 0.21, 0.21, 1, 201.45, 201.45, 201.45, 0)];
	this.instance_1.cache(-53,-51,106,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-50.3,102,98);


// stage content:
(lib.bomb_wiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.シンボル2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60.1,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.4,59.7,102,98);
// library properties:
lib.properties = {
	id: 'FE85B38BC386684B81EF4194DCA89F68',
	width: 120,
	height: 110,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"effectcjs/bomb_wiggle/images/bomb_1.png", id:"bomb_1"}
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
an.compositions['FE85B38BC386684B81EF4194DCA89F68'] = {
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