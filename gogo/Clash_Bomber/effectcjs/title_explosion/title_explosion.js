(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.explosion_01 = function() {
	this.initialize(img.explosion_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,149);


(lib.explosion_02 = function() {
	this.initialize(img.explosion_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.シンボル3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.explosion_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.explosion_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.explosion_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.explo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1 コピー 3
	this.instance = new lib.explosion_01();
	this.instance.parent = this;
	this.instance.setTransform(-57,-57,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(19));

	// レイヤー_1 コピー 2
	this.instance_1 = new lib.explosion_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63,-63,0.845,0.845);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},3).wait(16));

	// レイヤー_1 コピー
	this.instance_2 = new lib.explosion_01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-74,-75);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true},3).wait(13));

	// explosion_02.png
	this.instance_3 = new lib.explosion_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-85,-86);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true},3).wait(10));

	// explosion_02.png コピー 2
	this.instance_4 = new lib.シンボル1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-0.5,1,1,0,0,0,85,85.5);
	this.instance_4.alpha = 0.691;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({_off:true},3).wait(7));

	// explosion_02.png コピー
	this.instance_5 = new lib.シンボル2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-0.5,1,1,0,0,0,85,85.5);
	this.instance_5.alpha = 0.398;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({_off:true},3).wait(4));

	// explosion_02.png コピー 3
	this.instance_6 = new lib.シンボル3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-0.5,1,1,0,0,0,85,85.5);
	this.instance_6.alpha = 0.102;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-57,114,114.8);


// stage content:
(lib.title_explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2 コピー 6
	this.instance = new lib.explo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(545.6,220.9,1,1,0,0,0,0,-0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({_off:true},22).wait(9));

	// レイヤー_2 コピー 5
	this.instance_1 = new lib.explo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.3,563.1,1,1,0,0,0,0,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({_off:true},22).wait(32));

	// レイヤー_2 コピー 4
	this.instance_2 = new lib.explo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.3,226.8,1,1,0,0,0,0,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({_off:true},22).wait(55));

	// レイヤー_2
	this.instance_3 = new lib.explo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(528,621.8,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},22).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(791,965.3,114,114.8);
// library properties:
lib.properties = {
	id: 'F945FA7CD4D7AE478BD7B83FE7BA9F6E',
	width: 640,
	height: 800,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/title_explosion/images/explosion_01.png", id:"explosion_01"},
		{src:"./effectcjs/title_explosion/images/explosion_02.png", id:"explosion_02"}
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
an.compositions['F945FA7CD4D7AE478BD7B83FE7BA9F6E'] = {
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
