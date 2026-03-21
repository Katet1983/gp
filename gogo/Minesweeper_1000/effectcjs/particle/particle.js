(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.blue_a = function() {
	this.initialize(img.blue_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.blue_b = function() {
	this.initialize(img.blue_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.green_a = function() {
	this.initialize(img.green_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.green_b = function() {
	this.initialize(img.green_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.pink_a = function() {
	this.initialize(img.pink_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.pink_b = function() {
	this.initialize(img.pink_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.purple_a = function() {
	this.initialize(img.purple_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.purple_b = function() {
	this.initialize(img.purple_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.yellow_a = function() {
	this.initialize(img.yellow_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.yellow_b = function() {
	this.initialize(img.yellow_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellow_b_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.yellow_b();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow_b_sin, new cjs.Rectangle(0,0,20,20), null);


(lib.yellow_a_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.yellow_a();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow_a_sin, new cjs.Rectangle(0,0,20,20), null);


(lib.purple_b_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.purple_b();
	this.instance.setTransform(0,14.15,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purple_b_sin, new cjs.Rectangle(0,0,28.3,28.3), null);


(lib.purple_a_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.purple_a();
	this.instance.setTransform(0,14.15,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purple_a_sin, new cjs.Rectangle(0,0,28.3,28.3), null);


(lib.pink_b_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.pink_b();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pink_b_sin, new cjs.Rectangle(0,0,20,20), null);


(lib.pink_a_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.pink_a();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pink_a_sin, new cjs.Rectangle(0,0,20,20), null);


(lib.green_b_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.green_b();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green_b_sin, new cjs.Rectangle(0,0,20,20), null);


(lib.green_a_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.green_a();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green_a_sin, new cjs.Rectangle(0,0,20,20), null);


(lib.blue_b_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.blue_b();
	this.instance.setTransform(0,14.15,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_b_sin, new cjs.Rectangle(0,0,28.3,28.3), null);


(lib.blue_a_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.blue_a();
	this.instance.setTransform(0,14.15,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_a_sin, new cjs.Rectangle(0,0,28.3,28.3), null);


(lib.yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.yellow_a_sin();
	this.instance.setTransform(0,0,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.896},0).wait(1).to({scaleX:0.792},0).wait(1).to({scaleX:0.688,x:0.05},0).wait(1).to({scaleX:0.584},0).wait(1).to({scaleX:0.48,x:0},0).wait(1).to({scaleX:0.376},0).wait(1).to({scaleX:0.272},0).wait(1).to({scaleX:0.168,x:0.05},0).wait(1).to({scaleX:0.064},0).wait(1).to({scaleX:0.04,skewY:180,x:-0.05},0).to({_off:true},1).wait(10));

	// レイヤー_2
	this.instance_1 = new lib.yellow_b_sin();
	this.instance_1.setTransform(-0.1,0,0.0343,1,0,0,0,4.4,10);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:10,scaleX:0.1309,x:0.15},0).wait(1).to({scaleX:0.2274},0).wait(1).to({scaleX:0.324,x:0.2},0).wait(1).to({scaleX:0.4206},0).wait(1).to({scaleX:0.5171},0).wait(1).to({scaleX:0.6137,x:0.25},0).wait(1).to({scaleX:0.7103},0).wait(1).to({scaleX:0.8069},0).wait(1).to({scaleX:0.9034,x:0.3},0).wait(1).to({scaleX:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,21.8,20);


(lib.purple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.instance = new lib.purple_b_sin();
	this.instance.setTransform(-0.15,0.05,0.0343,1,0,0,0,8.8,14.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:14.1,scaleX:0.1309,x:0.05},0).wait(1).to({scaleX:0.2274},0).wait(1).to({scaleX:0.324,x:0},0).wait(1).to({scaleX:0.4206,x:0.05},0).wait(1).to({scaleX:0.5171,x:0},0).wait(1).to({scaleX:0.6137},0).wait(1).to({scaleX:0.7103},0).wait(1).to({scaleX:0.8069},0).wait(1).to({scaleX:0.9034},0).wait(1).to({scaleX:1},0).wait(1));

	// レイヤー_1
	this.instance_1 = new lib.purple_a_sin();
	this.instance_1.setTransform(0.05,0.05,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:14.1,scaleX:0.896,x:0},0).wait(1).to({scaleX:0.792,x:-0.05},0).wait(1).to({scaleX:0.688,x:0},0).wait(1).to({scaleX:0.584},0).wait(1).to({scaleX:0.48},0).wait(1).to({scaleX:0.376},0).wait(1).to({scaleX:0.272,x:0.05},0).wait(1).to({scaleX:0.168,x:0},0).wait(1).to({scaleX:0.064},0).wait(1).to({scaleX:0.04,skewY:180},0).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-14.1,28.299999999999997,28.299999999999997);


(lib.pink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.instance = new lib.pink_b_sin();
	this.instance.setTransform(0,0,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.896},0).wait(1).to({scaleX:0.792},0).wait(1).to({scaleX:0.688,x:0.05},0).wait(1).to({scaleX:0.584},0).wait(1).to({scaleX:0.48,x:0},0).wait(1).to({scaleX:0.376},0).wait(1).to({scaleX:0.272},0).wait(1).to({scaleX:0.168,x:0.05},0).wait(1).to({scaleX:0.064},0).wait(1).to({scaleX:0.04,skewY:180,x:-0.05},0).to({_off:true},1).wait(10));

	// レイヤー_1
	this.instance_1 = new lib.pink_a_sin();
	this.instance_1.setTransform(-0.05,0,0.0343,1,0,0,0,8.8,10);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:10,scaleX:0.1309,x:0},0).wait(1).to({scaleX:0.2274},0).wait(1).to({scaleX:0.324},0).wait(1).to({scaleX:0.4206},0).wait(1).to({scaleX:0.5171,x:-0.05},0).wait(1).to({scaleX:0.6137,x:0},0).wait(1).to({scaleX:0.7103},0).wait(1).to({scaleX:0.8069,x:-0.05},0).wait(1).to({scaleX:0.9034,x:0},0).wait(1).to({scaleX:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.instance = new lib.green_b_sin();
	this.instance.setTransform(0,0,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.896},0).wait(1).to({scaleX:0.792},0).wait(1).to({scaleX:0.688,x:0.05},0).wait(1).to({scaleX:0.584},0).wait(1).to({scaleX:0.48,x:0},0).wait(1).to({scaleX:0.376},0).wait(1).to({scaleX:0.272},0).wait(1).to({scaleX:0.168,x:0.05},0).wait(1).to({scaleX:0.064},0).wait(1).to({scaleX:0.04,skewY:180,x:-0.05},0).to({_off:true},1).wait(10));

	// レイヤー_1
	this.instance_1 = new lib.green_a_sin();
	this.instance_1.setTransform(0,0,0.0343,1,0,0,0,7.3,10);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:10,scaleX:0.1309,x:0.25},0).wait(1).to({scaleX:0.2274,x:0.35},0).wait(1).to({scaleX:0.324,x:0.55},0).wait(1).to({scaleX:0.4206,x:0.65},0).wait(1).to({scaleX:0.5171,x:0.8},0).wait(1).to({scaleX:0.6137,x:0.95},0).wait(1).to({scaleX:0.7103,x:1.05},0).wait(1).to({scaleX:0.8069,x:1.2},0).wait(1).to({scaleX:0.9034,x:1.35},0).wait(1).to({scaleX:1,x:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,23,20);


(lib.blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.instance = new lib.blue_b_sin();
	this.instance.setTransform(-0.15,0.05,0.0343,1,0,0,0,8.8,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:14.1,scaleX:0.1309,x:0.05},0).wait(1).to({scaleX:0.2274},0).wait(1).to({scaleX:0.324,x:0},0).wait(1).to({scaleX:0.4206,x:0.05},0).wait(1).to({scaleX:0.5171,x:0},0).wait(1).to({scaleX:0.6137},0).wait(1).to({scaleX:0.7103},0).wait(1).to({scaleX:0.8069},0).wait(1).to({scaleX:0.9034},0).wait(1).to({scaleX:1},0).to({_off:true},1).wait(10));

	// レイヤー_1
	this.instance_1 = new lib.blue_a_sin();
	this.instance_1.setTransform(0.05,0.05,1,1,0,0,0,14.2,14.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:14.1,scaleX:0.896,x:0},0).wait(1).to({scaleX:0.792,x:-0.05},0).wait(1).to({scaleX:0.688,x:0},0).wait(1).to({scaleX:0.584},0).wait(1).to({scaleX:0.48},0).wait(1).to({scaleX:0.376},0).wait(1).to({scaleX:0.272,x:0.05},0).wait(1).to({scaleX:0.168,x:0},0).wait(1).to({scaleX:0.064},0).wait(1).to({scaleX:0.04,skewY:180},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-14.1,28.299999999999997,28.299999999999997);


(lib.hubuki = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_11_コピー_コピー
	this.instance = new lib.blue();
	this.instance.setTransform(121.1,213.25,0.8617,0.8617);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({_off:false},0).to({guide:{path:[121.1,213.4,121.4,213.1,121.8,212.8,123.4,212,124.7,212.8,125.9,213.4,126.6,214.9,127.1,215.8,127.7,217.7,138.4,254.1,142.7,291.6,145.3,313.4,146.1,340.9,146.6,357,146.7,390.4,146.9,447.4,146.6,476.9,146,524.9,143.7,563.4,141.8,595.8,137.2,642.5,134.7,668.7,129.4,721.4,120.5,817,122.7,879.6,123.8,909.7,127.6,946.7,130,970.3,135.6,1013.6,141.5,1059.8,143.7,1080.4,147.8,1117.8,149.2,1147.5,150.1,1166.7,150.5,1205.3,151.1,1256.3,151.7,1307.3,151.7,1310.1,150.5,1312.5]}},159).to({_off:true},4).wait(188));

	// レイヤー_9_コピー_コピー
	this.instance_1 = new lib.green();
	this.instance_1.setTransform(547.35,214.45,0.8617,0.8617);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86).to({_off:false},0).to({regX:0.1,regY:0.1,guide:{path:[547.4,214.6,547.7,214.4,548.1,214.2,549.9,213.5,551.2,215.7,552.2,217.7,552.1,220.2,548.5,307.6,554.3,426.4,557.7,495.1,566.6,632.5,568.9,673.9,572.1,741.9,573.1,764.2,574.2,786.5,578,866.9,579.2,907.2,579.6,920.6,579.9,934.4]}},102).to({regX:0,regY:0,guide:{path:[579.8,934.3,581.6,1023.9,579.3,1130.5,578.3,1172.8,578.7,1190.6,579.4,1224.2,583.9,1250.3,585.7,1261.2,589.8,1283.1,592.3,1300.3,590.8,1313.4]}},54).to({_off:true},1).wait(226));

	// レイヤー_7_コピー_コピー
	this.instance_2 = new lib.pink();
	this.instance_2.setTransform(208.6,213.9,0.8617,0.8617);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:214.35,y:1302.75},159).to({_off:true},1).wait(34).to({_off:false,x:208.6,y:213.9},0).to({guide:{path:[208.7,214,208.5,213.3,208.2,212.5,206.4,214.1,205.9,217.2,205.6,219.4,205.9,222.9,209.9,264.9,209,315.3,208.3,352.4,204.5,407.9,202.4,438.7,198.1,500.5,195,553.6,195.4,593.2,195.9,638.4,201.9,708.7,203.5,728,206.9,766.5,209.8,800.2,211.3,824.2,214.6,879.9,214.7,949.6,214.7,991.4,213.1,1075,212.7,1092.7,212.4,1101.5,212,1116.3,211.2,1128.1,210.5,1137.8,208.8,1157.1,207.4,1174.4,207.3,1186.1,207.2,1195.8,207.8,1207.8,208.2,1215.1,209.2,1229.5,211.8,1266.1,214.5,1302.8]}},159).to({_off:true},1).wait(90));

	// レイヤー_5_コピー_コピー
	this.instance_3 = new lib.purple();
	this.instance_3.setTransform(369.85,205.4,0.8617,0.8617);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(152).to({_off:false},0).to({guide:{path:[369.9,205.5,369.5,206.1,369.1,207,368.1,209.5,368.4,212.7,373.5,264.5,375.2,350.3,375.8,373.4,376.7,419.4,377.7,458.9,379.3,488.3,380.1,501,381.5,521.3,383.3,547.6,383.7,554.3,386.2,593,388.2,641,389.4,671,391.1,727.7,397.3,924,403.5,1120.4,404.3,1149.2,404.4,1160.3,404.8,1196.5,402.4,1242,401.1,1268.7,397,1323.5,398.4,1324.2,400.1,1323.7]}},156).to({_off:true},1).wait(160));

	// レイヤー_3_コピー_コピー
	this.instance_4 = new lib.yellow();
	this.instance_4.setTransform(295.2,210.85,0.8617,0.8617);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({guide:{path:[295.2,211,295.9,216.2,295.2,224.6,292.1,267,291.5,291.3,290.4,328.2,293.1,358,294.1,367.5,295.7,380.2,296.6,387.6,298.7,402.4,308.7,478.3,314.7,573.7,318.4,631.4,322.9,745.6,324,774.1,324.3,787.4,324.8,810.7,324.2,829.2,323.7,842,322.6,858.9,322.4,861.7,320.4,888.7,304,1107.7,316.5,1302.5,316.7,1305.9,315.9,1308.2,315.6,1309,315.2,1309.7]}},153).to({_off:true},1).wait(245));

	// レイヤー_11_コピー_コピー
	this.instance_5 = new lib.blue();
	this.instance_5.setTransform(295.7,118.3,0.9371,0.9371,0,0,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({x:263.75,y:1313.8},159).to({_off:true},1).wait(92).to({_off:false,x:295.7,y:118.3},0).to({guide:{path:[295.7,118.4,295.4,118.1,294.9,117.9,293.2,117,291.7,117.8,290.5,118.5,289.6,120.1,289.1,121.2,288.5,123.2,276.9,162.7,272.2,203.6,269.4,227.3,268.5,257.2,267.9,274.7,267.8,311,267.6,373,267.9,405.1,268.6,457.3,271.1,499.1,273.2,534.3,278.1,585.1,280.9,613.8,286.6,671,296.3,775,293.9,843,292.8,875.7,288.6,916,286,941.7,279.9,988.8,273.5,1039.1,271.1,1061.4,266.6,1102.1,265.1,1134.4,264.1,1155.3,263.7,1197.2,263.1,1252.7,262.4,1308.2,262.4,1311.3,263.8,1313.9]}},159).to({_off:true},1).wait(1));

	// レイヤー_9_コピー_コピー
	this.instance_6 = new lib.green();
	this.instance_6.setTransform(69,132.45,0.9371,0.9371,0,0,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({x:21.85,y:1327.6},156).to({_off:true},1).wait(86).to({_off:false,x:69,y:132.45},0).to({guide:{path:[69.1,132.6,70.4,133.7,70.5,136.9,74.5,232.2,68.2,361.6,64.6,436.5,54.9,586.2,53.2,615,49.6,689.7,48.3,715.1,47.1,740.5,44.6,792.8,43.6,815.9,41.7,858,40.9,891.3,39.5,946.8,39.6,1014.1,39.8,1061.6,41,1136.8,41.3,1158.9,41.3,1170,41.3,1188.4,40.7,1203.2,39.5,1231.7,35,1267.2,32.3,1288.1,25.6,1330.8,25.3,1332.7,24.3,1332.9,23.5,1333,23,1332.2,22.5,1331.5,22.4,1330.5,22.2,1329.1,22,1327.6]}},156).to({_off:true},1).wait(53));

	// レイヤー_7_コピー_コピー
	this.instance_7 = new lib.pink();
	this.instance_7.setTransform(545.95,132.6,0.9371,0.9371,0,0,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({x:539.65,y:1316.8},159).to({_off:true},1).wait(112).to({_off:false,x:545.95,y:132.6},0).to({guide:{path:[545.9,132.7,546.2,131.8,546.4,131,548.5,132.8,549,136.1,549.4,138.5,549,142.3,544.7,188,545.7,242.8,546.4,283.2,550.5,343.5,552.8,377.1,557.5,444.3,560.9,502,560.4,545.1,559.9,594.2,553.4,670.7,551.6,691.7,547.9,733.5,544.8,770.2,543.2,796.4,539.5,856.9,539.5,932.7,539.5,978.2,541.2,1069.1,541.6,1088.3,541.9,1097.9,542.4,1114,543.3,1126.8,544,1137.3,545.8,1158.3,547.4,1177.2,547.5,1189.9,547.6,1200.4,546.9,1213.5,546.5,1221.5,545.4,1237.1,542.5,1277,539.7,1316.8]}},159).wait(1));

	// レイヤー_5_コピー_コピー
	this.instance_8 = new lib.purple();
	this.instance_8.setTransform(150.15,100.65,0.9371,0.9371,0,0,180);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({_off:false},0).to({x:117.35,y:1316.8},156).to({_off:true},1).wait(63).to({_off:false,x:150.15,y:100.65},0).to({guide:{path:[150.2,100.8,150.7,101.4,151.1,102.3,152.1,105,151.8,108.5,146.3,164.9,144.4,258.3,143.8,283.3,142.9,333.3,141.8,376.4,140,408.3,139.2,422.1,137.6,444.2,135.6,472.8,135.2,480.1,132.5,522.1,130.3,574.4,129,607.1,127.1,668.6,120.4,882.1,113.7,1095.7,112.8,1127.1,112.7,1139.1,112.3,1178.6,114.8,1228,116.3,1257,120.7,1316.6,119.2,1317.4,117.4,1316.8]}},156).to({_off:true},1).wait(10));

	// レイヤー_3_コピー_コピー
	this.instance_9 = new lib.yellow();
	this.instance_9.setTransform(398.05,107.15,0.9371,0.9371,0,0,180);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).to({x:376.4,y:1302.05},153).to({_off:true},1).wait(38).to({_off:false,x:398.05,y:107.15},0).to({guide:{path:[398.1,107.3,397.4,112.9,398.1,122.1,401.5,168.2,402.2,194.6,403.3,234.7,400.4,267.1,399.4,277.4,397.6,291.3,396.6,299.3,394.4,315.4,383.4,397.9,376.9,501.8,373,564.4,368,688.7,366.8,719.6,366.5,734.2,366,759.5,366.6,779.6,367.1,793.5,368.3,811.9,368.5,814.9,370.7,844.3,388.6,1082.5,375,1294.4,374.8,1298,375.7,1300.5,376,1301.4,376.4,1302.1]}},153).to({_off:true},1).wait(98));

	// レイヤー_11_コピー
	this.instance_10 = new lib.blue();
	this.instance_10.setTransform(121.1,213.25,0.8617,0.8617);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(127).to({_off:false},0).to({guide:{path:[121.1,213.4,121.4,213.1,121.8,212.8,123.4,212,124.7,212.8,125.9,213.4,126.6,214.9,127.1,215.8,127.7,217.7,138.4,254.1,142.7,291.6,145.3,313.4,146.1,340.9,146.6,357,146.7,390.4,146.9,447.4,146.6,476.9,146,524.9,143.7,563.4,141.8,595.8,137.2,642.5,134.7,668.7,129.4,721.4,120.5,817,122.7,879.6,123.8,909.7,127.6,946.7,130,970.3,135.6,1013.6,141.5,1059.8,143.7,1080.4,147.8,1117.8,149.2,1147.5,150.1,1166.7,150.5,1205.3,151.1,1256.3,151.7,1307.3,151.7,1310.1,150.5,1312.5]}},159).to({_off:true},1).wait(5).to({_off:false,x:121.1,y:213.25},0).to({guide:{path:[121.1,213.4,121.4,213.1,121.8,212.8,123.4,212,124.7,212.8,125.9,213.4,126.6,214.9,127.1,215.8,127.7,217.7,138.4,254.1,142.7,291.6,145.3,313.4,146.1,340.9,146.6,357,146.7,390.4,146.9,447.4,146.6,476.9,146,524.9,143.7,563.4,141.8,595.8,137.2,642.5,134.7,668.7,129.4,721.4,120.5,817,122.7,879.6,123.8,909.7,127.6,946.7,130,970.3,135.6,1013.6,141.5,1059.8,143.7,1080.4,147.8,1117.8,149.2,1147.5,150.1,1166.7,150.5,1205.3,151.1,1256.3,151.7,1307.3,151.7,1310.1,150.5,1312.5]}},149).to({_off:true},1).wait(27));

	// レイヤー_7_コピー
	this.instance_11 = new lib.pink();
	this.instance_11.setTransform(208.6,213.9,0.8617,0.8617);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(66).to({_off:false},0).to({guide:{path:[208.7,214,208.5,213.3,208.2,212.5,206.4,214.1,205.9,217.2,205.6,219.4,205.9,222.9,209.9,264.9,209,315.3,208.3,352.4,204.5,407.9,202.4,438.7,198.1,500.5,195,553.6,195.4,593.2,195.9,638.4,201.9,708.7,203.5,728,206.9,766.5,209.8,800.2,211.3,824.2,214.6,879.9,214.7,949.6,214.7,991.4,213.1,1075,212.7,1092.7,212.4,1101.5,212,1116.3,211.2,1128.1,210.5,1137.8,208.8,1157.1,207.4,1174.4,207.3,1186.1,207.2,1195.8,207.8,1207.8,208.2,1215.1,209.2,1229.5,211.8,1266.1,214.5,1302.8]}},159).to({_off:true},1).wait(20).to({_off:false,x:208.6,y:213.9},0).to({guide:{path:[208.7,214,208.5,213.3,208.2,212.5,206.4,214.1,205.9,217.2,205.6,219.4,205.9,222.9,209.9,264.9,209,315.3,208.3,352.4,204.5,407.9,202.4,438.7,198.1,500.5,195,553.6,195.4,593.2,195.9,638.4,201.9,708.7,203.5,728,206.9,766.5,209.8,800.2,211.3,824.2,214.6,879.9,214.7,949.6,214.7,991.4,213.1,1075,212.7,1092.7,212.4,1101.5,212,1116.3,211.2,1128.1,210.5,1137.8,208.8,1157.1,207.4,1174.4,207.3,1186.1,207.2,1195.8,207.8,1207.8,208.2,1215.1,209.2,1229.5,211.8,1266.1,214.5,1302.8]}},159).to({_off:true},1).wait(63));

	// レイヤー_5_コピー
	this.instance_12 = new lib.purple();
	this.instance_12.setTransform(369.85,205.4,0.8617,0.8617);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(90).to({_off:false},0).to({guide:{path:[369.9,205.5,369.5,206.1,369.1,207,368.1,209.5,368.4,212.7,373.5,264.5,375.2,350.3,375.8,373.4,376.7,419.4,377.7,458.9,379.3,488.3,380.1,501,381.5,521.3,383.3,547.6,383.7,554.3,386.2,593,388.2,641,389.4,671,391.1,727.7,397.3,924,403.5,1120.4,404.3,1149.2,404.4,1160.3,404.8,1196.5,402.4,1242,401.1,1268.7,397,1323.5,398.4,1324.2,400.1,1323.7]}},156).to({_off:true},1).wait(19).to({_off:false,x:369.85,y:205.4},0).to({guide:{path:[369.9,205.5,369.5,206.1,369.1,207,368.1,209.5,368.4,212.7,373.5,264.5,375.2,350.3,375.8,373.4,376.7,419.4,377.7,458.9,379.3,488.3,380.1,501,381.5,521.3,383.3,547.6,383.7,554.3,386.2,593,388.2,641,389.4,671,391.1,727.7,397.3,924,403.5,1120.4,404.3,1149.2,404.4,1160.3,404.8,1196.5,402.4,1242,401.1,1268.7,397,1323.5,398.4,1324.2,400.1,1323.7]}},156).to({_off:true},1).wait(46));

	// レイヤー_3_コピー
	this.instance_13 = new lib.yellow();
	this.instance_13.setTransform(295.2,210.85,0.8617,0.8617);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(42).to({_off:false},0).to({guide:{path:[295.2,211,295.9,216.2,295.2,224.6,292.1,267,291.5,291.3,290.4,328.2,293.1,358,294.1,367.5,295.7,380.2,296.6,387.6,298.7,402.4,308.7,478.3,314.7,573.7,318.4,631.4,322.9,745.6,324,774.1,324.3,787.4,324.8,810.7,324.2,829.2,323.7,842,322.6,858.9,322.4,861.7,320.4,888.7,304,1107.7,316.5,1302.5,316.7,1305.9,315.9,1308.2,315.6,1309,315.2,1309.7]}},153).to({_off:true},1).wait(33).to({_off:false,x:295.2,y:210.85},0).to({guide:{path:[295.2,211,295.9,216.2,295.2,224.6,292.1,267,291.5,291.3,290.4,328.2,293.1,358,294.1,367.5,295.7,380.2,296.6,387.6,298.7,402.4,308.7,478.3,314.7,573.7,318.4,631.4,322.9,745.6,324,774.1,324.3,787.4,324.8,810.7,324.2,829.2,323.7,842,322.6,858.9,322.4,861.7,320.4,888.7,304,1107.7,316.5,1302.5,316.7,1305.9,315.9,1308.2,315.6,1309,315.2,1309.7]}},153).to({_off:true},1).wait(86));

	// レイヤー_11_コピー_コピー
	this.instance_14 = new lib.blue();
	this.instance_14.setTransform(115.75,52.25,1,1,0,0,180);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).to({guide:{path:[115.7,52.3,115.4,52,114.8,51.7,113,50.8,111.5,51.7,110.1,52.4,109.2,54.1,108.7,55.2,108,57.4,95.6,99.6,90.6,143.2,87.6,168.5,86.7,200.4,86.1,219.1,85.9,257.8,85.7,324,86.1,358.2,86.8,413.9,89.4,458.5,91.7,496.1,96.9,550.3,99.9,580.9,106,642,116.4,752.9,113.8,825.5,112.6,860.4,108.1,903.4,105.3,930.8,98.9,981,92,1034.7,89.4,1058.6,84.7,1101.9,83.1,1136.4,82,1158.8,81.5,1203.5,80.9,1262.7,80.2,1321.9,80.1,1325.2,81.7,1327.9]}},159).to({_off:true},1).wait(85).to({_off:false,x:115.75,y:52.25},0).to({guide:{path:[115.7,52.3,115.4,52,114.8,51.7,113,50.8,111.5,51.7,110.1,52.4,109.2,54.1,108.7,55.2,108,57.4,95.6,99.6,90.6,143.2,87.6,168.5,86.7,200.4,86.1,219.1,85.9,257.8,85.7,324,86.1,358.2,86.8,413.9,89.4,458.5,91.7,496.1,96.9,550.3,99.9,580.9,106,642,116.4,752.9,113.8,825.5,112.6,860.4,108.1,903.4,105.3,930.8,98.9,981,92,1034.7,89.4,1058.6,84.7,1101.9,83.1,1136.4,82,1158.8,81.5,1203.5,80.9,1262.7,80.2,1321.9,80.1,1325.2,81.7,1327.9]}},149).to({_off:true},1).wait(40));

	// レイヤー_9_コピー_コピー
	this.instance_15 = new lib.green();
	this.instance_15.setTransform(206.2,44.55,1,1,0,0,180);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(59).to({_off:false},0).to({guide:{path:[206.2,44.7,207.6,45.8,207.8,49.3,212.1,150.9,205.3,289,201.5,369,191.1,528.7,189.3,559.4,185.4,639.3,184.1,666.3,182.8,693.4,180.1,749.2,179,773.8,177.1,818.7,176.2,854.3,174.6,913.5,174.8,985.3,175,1036,176.2,1116.2,176.6,1139.9,176.6,1151.7,176.6,1171.3,175.9,1187.1,174.6,1217.5,169.8,1255.4,166.9,1277.7,159.7,1323.3,159.4,1325.3,158.3,1325.5,157.5,1325.6,156.9,1324.8,156.4,1324,156.3,1323,156.1,1321.4,155.9,1319.9]}},156).to({_off:true},1).wait(95).to({_off:false,x:206.2,y:44.55},0).to({guide:{path:[206.2,44.7,207.6,45.8,207.8,49.3,212.1,150.9,205.3,289,201.5,369,191.1,528.7,189.3,559.4,185.4,639.3,184.1,666.3,182.8,693.4,180.1,749.2,179,773.8,177.1,818.7,176.2,854.3,174.6,913.5,174.8,985.3,175,1036,176.2,1116.2,176.6,1139.9,176.6,1151.7,176.6,1171.3,175.9,1187.1,174.6,1217.5,169.8,1255.4,166.9,1277.7,159.7,1323.3,159.4,1325.3,158.3,1325.5,157.5,1325.6,156.9,1324.8,156.4,1324,156.3,1323,156.1,1321.4,155.9,1319.9]}},156).to({_off:true},1).wait(1));

	// レイヤー_7_コピー_コピー
	this.instance_16 = new lib.pink();
	this.instance_16.setTransform(489.65,54.75,1,1,0,0,180);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({guide:{path:[489.6,54.9,489.9,53.9,490.1,53.1,492.3,54.9,492.9,58.5,493.3,61,492.9,65.1,488.3,113.9,489.3,172.4,490.1,215.5,494.5,279.8,496.9,315.6,501.9,387.3,505.5,448.9,505,494.9,504.5,547.3,497.5,629.1,495.6,651.4,491.7,696,488.3,735.1,486.6,763,482.7,827.6,482.7,908.5,482.7,957,484.6,1054,485,1074.6,485.3,1084.8,485.8,1102,486.8,1115.6,487.5,1126.9,489.5,1149.3,491.1,1169.4,491.2,1183,491.4,1194.2,490.6,1208.2,490.2,1216.6,489,1233.3,486,1275.8,482.9,1318.4]}},159).to({_off:true},1).wait(97).to({_off:false,x:489.65,y:54.75},0).to({guide:{path:[489.6,54.9,489.9,53.9,490.1,53.1,492.3,54.9,492.9,58.5,493.3,61,492.9,65.1,488.3,113.9,489.3,172.4,490.1,215.5,494.5,279.8,496.9,315.6,501.9,387.3,505.5,448.9,505,494.9,504.5,547.3,497.5,629.1,495.6,651.4,491.7,696,488.3,735.1,486.6,763,482.7,827.6,482.7,908.5,482.7,957,484.6,1054,485,1074.6,485.3,1084.8,485.8,1102,486.8,1115.6,487.5,1126.9,489.5,1149.3,491.1,1169.4,491.2,1183,491.4,1194.2,490.6,1208.2,490.2,1216.6,489,1233.3,486,1275.8,482.9,1318.4]}},159).to({_off:true},1).wait(33));

	// レイヤー_5_コピー_コピー
	this.instance_17 = new lib.purple();
	this.instance_17.setTransform(271.1,52.25,1,1,0,0,180);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(68).to({_off:false},0).to({guide:{path:[271.1,52.4,271.6,53.1,272,54,273.2,56.9,272.8,60.6,267,120.8,264.9,220.4,264.3,247.1,263.3,300.5,262.1,346.4,260.2,380.5,259.3,395.3,257.7,418.8,255.6,449.4,255.1,457.1,252.2,502,249.9,557.7,248.5,592.7,246.5,658.4,239.3,886.2,232.2,1114.1,231.2,1147.6,231.1,1160.4,230.6,1202.5,233.4,1255.2,235,1286.2,239.6,1349.8,238,1350.6,236.1,1350]}},156).to({_off:true},1).wait(5).to({_off:false,x:271.1,y:52.25},0).to({guide:{path:[271.1,52.4,271.6,53.1,272,54,273.2,56.9,272.8,60.6,267,120.8,264.9,220.4,264.3,247.1,263.3,300.5,262.1,346.4,260.2,380.5,259.3,395.3,257.7,418.8,255.6,449.4,255.1,457.1,252.2,502,249.9,557.7,248.5,592.7,246.5,658.4,239.3,886.2,232.2,1114.1,231.2,1147.6,231.1,1160.4,230.6,1202.5,233.4,1255.2,235,1286.2,239.6,1349.8,238,1350.6,236.1,1350]}},156).to({_off:true},1).wait(82));

	// レイヤー_3_コピー_コピー
	this.instance_18 = new lib.yellow();
	this.instance_18.setTransform(599.35,43.3,1,1,0,0,180);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(49).to({_off:false},0).to({guide:{path:[599.4,43.4,598.6,49.4,599.4,59.2,603,108.4,603.7,136.6,604.9,179.4,601.8,214,600.7,225,598.8,239.7,597.7,248.3,595.4,265.5,583.7,353.5,576.7,464.3,572.5,531.2,567.3,663.8,566,696.8,565.7,712.3,565.1,739.3,565.8,760.8,566.3,775.7,567.6,795.3,567.8,798.5,570.1,829.8,589.2,1084,574.7,1310.1,574.5,1314,575.4,1316.7,575.8,1317.6,576.3,1318.3]}},153).to({_off:true},1).wait(41).to({_off:false,x:599.35,y:43.3},0).to({guide:{path:[599.4,43.4,598.6,49.4,599.4,59.2,603,108.4,603.7,136.6,604.9,179.4,601.8,214,600.7,225,598.8,239.7,597.7,248.3,595.4,265.5,583.7,353.5,576.7,464.3,572.5,531.2,567.3,663.8,566,696.8,565.7,712.3,565.1,739.3,565.8,760.8,566.3,775.7,567.6,795.3,567.8,798.5,570.1,829.8,589.2,1084,574.7,1310.1,574.5,1314,575.4,1316.7,575.8,1317.6,576.3,1318.3]}},153).to({_off:true},1).wait(71));

	// レイヤー_11_コピー
	this.instance_19 = new lib.blue();
	this.instance_19.setTransform(280.05,52.25,1,1,0,0,180);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(109).to({_off:false},0).to({guide:{path:[280.1,52.3,279.7,52,279.2,51.7,277.4,50.8,275.8,51.7,274.5,52.4,273.6,54.1,273,55.2,272.4,57.4,260,99.6,254.9,143.2,252,168.5,251,200.4,250.4,219.1,250.3,257.8,250,324,250.4,358.2,251.1,413.9,253.8,458.5,256,496.1,261.3,550.3,264.2,580.9,270.3,642,280.7,752.9,278.2,825.5,276.9,860.4,272.5,903.4,269.7,930.8,263.2,981,256.4,1034.7,253.8,1058.6,249,1101.9,247.4,1136.4,246.4,1158.8,245.9,1203.5,245.2,1262.7,244.5,1321.9,244.5,1325.2,246,1327.9]}},159).to({_off:true},1).wait(10).to({_off:false,x:280.05,y:52.25},0).to({guide:{path:[280.1,52.3,279.7,52,279.2,51.7,277.4,50.8,275.8,51.7,274.5,52.4,273.6,54.1,273,55.2,272.4,57.4,260,99.6,254.9,143.2,252,168.5,251,200.4,250.4,219.1,250.3,257.8,250,324,250.4,358.2,251.1,413.9,253.8,458.5,256,496.1,261.3,550.3,264.2,580.9,270.3,642,280.7,752.9,278.2,825.5,276.9,860.4,272.5,903.4,269.7,930.8,263.2,981,256.4,1034.7,253.8,1058.6,249,1101.9,247.4,1136.4,246.4,1158.8,245.9,1203.5,245.2,1262.7,244.5,1321.9,244.5,1325.2,246,1327.9]}},149).to({_off:true},1).wait(40));

	// レイヤー_9_コピー
	this.instance_20 = new lib.green();
	this.instance_20.setTransform(493.35,54.75,1,1,0,0,180);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(129).to({_off:false},0).to({guide:{path:[493.3,54.9,494.7,56,494.9,59.5,499.2,161.1,492.4,299.2,488.6,379.2,478.2,538.9,476.4,569.6,472.5,649.5,471.2,676.5,469.9,703.6,467.2,759.4,466.1,784,464.2,828.9,463.3,864.5,461.7,923.7,461.9,995.5,462.1,1046.2,463.3,1126.4,463.7,1150.1,463.7,1161.9,463.7,1181.5,463,1197.3,461.7,1227.7,456.9,1265.6,454,1287.9,446.8,1333.5,446.5,1335.5,445.4,1335.7,444.6,1335.8,444,1335,443.5,1334.2,443.4,1333.2,443.1,1331.6,442.9,1330.1]}},156).to({_off:true},1).wait(25).to({_off:false,x:493.35,y:54.75},0).to({guide:{path:[493.3,54.9,494.7,56,494.9,59.5,499.2,161.1,492.4,299.2,488.6,379.2,478.2,538.9,476.4,569.6,472.5,649.5,471.2,676.5,469.9,703.6,467.2,759.4,466.1,784,464.2,828.9,463.3,864.5,461.7,923.7,461.9,995.5,462.1,1046.2,463.3,1126.4,463.7,1150.1,463.7,1161.9,463.7,1181.5,463,1197.3,461.7,1227.7,456.9,1265.6,454,1287.9,446.8,1333.5,446.5,1335.5,445.4,1335.7,444.6,1335.8,444,1335,443.5,1334.2,443.4,1333.2,443.1,1331.6,442.9,1330.1]}},156).to({_off:true},1).wait(1));

	// レイヤー_7_コピー
	this.instance_21 = new lib.pink();
	this.instance_21.setTransform(194.05,44.55,1,1,0,0,180);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(86).to({_off:false},0).to({guide:{path:[194,44.7,194.3,43.7,194.5,42.9,196.7,44.7,197.3,48.3,197.7,50.8,197.3,54.9,192.7,103.7,193.7,162.2,194.5,205.3,198.9,269.6,201.3,305.4,206.3,377.1,209.9,438.7,209.4,484.7,208.9,537.1,201.9,618.9,200,641.2,196.1,685.8,192.7,724.9,191,752.8,187.1,817.4,187.1,898.3,187.1,946.8,189,1043.8,189.4,1064.4,189.7,1074.6,190.2,1091.8,191.2,1105.4,191.9,1116.7,193.9,1139.1,195.5,1159.2,195.6,1172.8,195.8,1184,195,1198,194.6,1206.4,193.4,1223.1,190.4,1265.6,187.3,1308.2]}},159).to({_off:true},1).wait(53).to({_off:false,x:194.05,y:44.55},0).to({guide:{path:[194,44.7,194.3,43.7,194.5,42.9,196.7,44.7,197.3,48.3,197.7,50.8,197.3,54.9,192.7,103.7,193.7,162.2,194.5,205.3,198.9,269.6,201.3,305.4,206.3,377.1,209.9,438.7,209.4,484.7,208.9,537.1,201.9,618.9,200,641.2,196.1,685.8,192.7,724.9,191,752.8,187.1,817.4,187.1,898.3,187.1,946.8,189,1043.8,189.4,1064.4,189.7,1074.6,190.2,1091.8,191.2,1105.4,191.9,1116.7,193.9,1139.1,195.5,1159.2,195.6,1172.8,195.8,1184,195,1198,194.6,1206.4,193.4,1223.1,190.4,1265.6,187.3,1308.2]}},159).to({_off:true},1).wait(10));

	// レイヤー_5_コピー
	this.instance_22 = new lib.purple();
	this.instance_22.setTransform(613.5,43.6,1,1,0,0,180);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(106).to({_off:false},0).to({guide:{path:[613.5,43.7,614,44.3,614.4,45.3,615.6,48.2,615.2,51.9,609.4,112.1,607.3,211.7,606.7,238.4,605.7,291.8,604.5,337.7,602.6,371.8,601.7,386.6,600.1,410.1,598,440.7,597.5,448.4,594.6,493.3,592.3,549,590.9,584,588.9,649.7,581.7,877.6,574.6,1105.4,573.6,1138.9,573.5,1151.7,573,1193.8,575.8,1246.5,577.4,1277.5,582,1341.1,580.4,1341.9,578.5,1341.3]}},156).to({_off:true},1).wait(21).to({_off:false,x:613.5,y:43.6},0).to({guide:{path:[613.5,43.7,614,44.3,614.4,45.3,615.6,48.2,615.2,51.9,609.4,112.1,607.3,211.7,606.7,238.4,605.7,291.8,604.5,337.7,602.6,371.8,601.7,386.6,600.1,410.1,598,440.7,597.5,448.4,594.6,493.3,592.3,549,590.9,584,588.9,649.7,581.7,877.6,574.6,1105.4,573.6,1138.9,573.5,1151.7,573,1193.8,575.8,1246.5,577.4,1277.5,582,1341.1,580.4,1341.9,578.5,1341.3]}},156).to({_off:true},1).wait(28));

	// レイヤー_3_コピー
	this.instance_23 = new lib.yellow();
	this.instance_23.setTransform(409.85,44.8,1,1,0,0,180);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(149).to({_off:false},0).to({guide:{path:[409.8,44.9,409.1,50.9,409.8,60.7,413.4,109.9,414.2,138.1,415.4,180.9,412.2,215.5,411.2,226.5,409.3,241.3,408.2,249.9,405.8,267,394.1,355.1,387.2,465.9,383,532.8,377.7,665.4,376.4,698.4,376.1,713.9,375.5,740.9,376.2,762.3,376.7,777.2,378,796.9,378.3,800.1,380.6,831.4,399.7,1085.6,385.2,1311.7,384.9,1315.5,385.9,1318.2,386.2,1319.2,386.7,1319.9]}},153).to({_off:true},1).wait(8).to({_off:false,x:409.85,y:44.8},0).to({guide:{path:[409.8,44.9,409.1,50.9,409.8,60.7,413.4,109.9,414.2,138.1,415.4,180.9,412.2,215.5,411.2,226.5,409.3,241.3,408.2,249.9,405.8,267,394.1,355.1,387.2,465.9,383,532.8,377.7,665.4,376.4,698.4,376.1,713.9,375.5,740.9,376.2,762.3,376.7,777.2,378,796.9,378.3,800.1,380.6,831.4,399.7,1085.6,385.2,1311.7,384.9,1315.5,385.9,1318.2,386.2,1319.2,386.7,1319.9]}},153).to({_off:true},1).wait(4));

	// レイヤー_11_コピー
	this.instance_24 = new lib.blue();
	this.instance_24.setTransform(529.8,52.25);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(79).to({_off:false},0).to({guide:{path:[529.8,52.3,530.1,52,530.7,51.7,532.5,50.8,534,51.7,535.4,52.4,536.3,54.1,536.8,55.2,537.5,57.4,549.9,99.6,554.9,143.2,557.9,168.5,558.8,200.4,559.4,219.1,559.6,257.8,559.8,324,559.4,358.2,558.7,413.9,556.1,458.5,553.8,496.1,548.6,550.3,545.6,580.9,539.5,642,529.1,752.9,531.7,825.5,532.9,860.4,537.4,903.4,540.2,930.8,546.6,981,553.5,1034.7,556.1,1058.6,560.8,1101.9,562.4,1136.4,563.5,1158.8,564,1203.5,564.7,1262.7,565.3,1321.9,565.4,1325.2,563.9,1327.9]}},159).to({_off:true},1).wait(21).to({_off:false,x:529.8,y:52.25},0).to({guide:{path:[529.8,52.3,530.1,52,530.7,51.7,532.5,50.8,534,51.7,535.4,52.4,536.3,54.1,536.8,55.2,537.5,57.4,549.9,99.6,554.9,143.2,557.9,168.5,558.8,200.4,559.4,219.1,559.6,257.8,559.8,324,559.4,358.2,558.7,413.9,556.1,458.5,553.8,496.1,548.6,550.3,545.6,580.9,539.5,642,529.1,752.9,531.7,825.5,532.9,860.4,537.4,903.4,540.2,930.8,546.6,981,553.5,1034.7,556.1,1058.6,560.8,1101.9,562.4,1136.4,563.5,1158.8,564,1203.5,564.7,1262.7,565.3,1321.9,565.4,1325.2,563.9,1327.9]}},149).to({_off:true},1).wait(59));

	// レイヤー_9_コピー
	this.instance_25 = new lib.green();
	this.instance_25.setTransform(423,54.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({guide:{path:[423,54.9,421.6,56,421.4,59.5,417.1,161.1,423.9,299.2,427.7,379.2,438.1,538.9,439.9,569.6,443.8,649.5,445.1,676.5,446.4,703.6,449.1,759.4,450.2,784,452.1,828.9,453,864.5,454.6,923.7,454.4,995.5,454.2,1046.2,453,1126.4,452.6,1150.1,452.6,1161.9,452.6,1181.5,453.3,1197.3,454.6,1227.7,459.4,1265.6,462.3,1287.9,469.5,1333.5,469.8,1335.5,470.9,1335.7,471.7,1335.8,472.3,1335,472.8,1334.2,472.9,1333.2,473.2,1331.6,473.3,1330.1]}},155).to({_off:true},1).wait(29).to({_off:false,x:423,y:54.75},0).to({guide:{path:[423,54.9,421.6,56,421.4,59.5,417.1,161.1,423.9,299.2,427.7,379.2,438.1,538.9,439.9,569.6,443.8,649.5,445.1,676.5,446.4,703.6,449.1,759.4,450.2,784,452.1,828.9,453,864.5,454.6,923.7,454.4,995.5,454.2,1046.2,453,1126.4,452.6,1150.1,452.6,1161.9,452.6,1181.5,453.3,1197.3,454.6,1227.7,459.4,1265.6,462.3,1287.9,469.5,1333.5,469.8,1335.5,470.9,1335.7,471.7,1335.8,472.3,1335,472.8,1334.2,472.9,1333.2,473.2,1331.6,473.3,1330.1]}},156).to({_off:true},1).wait(127));

	// レイヤー_7_コピー
	this.instance_26 = new lib.pink();
	this.instance_26.setTransform(336,53.25);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(79).to({_off:false},0).to({guide:{path:[336,53.3,335.7,52.4,335.5,51.5,333.3,53.4,332.7,57,332.3,59.5,332.7,63.6,337.3,112.3,336.3,170.8,335.5,213.9,331.1,278.3,328.7,314.1,323.7,385.8,320.1,447.4,320.6,493.4,321.1,545.8,328.1,627.5,330,649.9,333.9,694.4,337.3,733.5,339,761.5,342.9,826,342.9,906.9,342.9,955.5,341,1052.5,340.6,1073,340.3,1083.3,339.8,1100.4,338.8,1114.1,338.1,1125.3,336.1,1147.7,334.5,1167.9,334.4,1181.4,334.2,1192.6,335,1206.6,335.4,1215.1,336.6,1231.8,339.7,1274.3,342.7,1316.8]}},159).to({_off:true},1).wait(20).to({_off:false,x:336,y:53.25},0).to({guide:{path:[336,53.3,335.7,52.4,335.5,51.5,333.3,53.4,332.7,57,332.3,59.5,332.7,63.6,337.3,112.3,336.3,170.8,335.5,213.9,331.1,278.3,328.7,314.1,323.7,385.8,320.1,447.4,320.6,493.4,321.1,545.8,328.1,627.5,330,649.9,333.9,694.4,337.3,733.5,339,761.5,342.9,826,342.9,906.9,342.9,955.5,341,1052.5,340.6,1073,340.3,1083.3,339.8,1100.4,338.8,1114.1,338.1,1125.3,336.1,1147.7,334.5,1167.9,334.4,1181.4,334.2,1192.6,335,1206.6,335.4,1215.1,336.6,1231.8,339.7,1274.3,342.7,1316.8]}},159).to({_off:true},1).wait(50));

	// レイヤー_5_コピー
	this.instance_27 = new lib.purple();
	this.instance_27.setTransform(195.35,43.6);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(3).to({_off:false},0).to({guide:{path:[195.4,43.7,194.9,44.3,194.5,45.3,193.3,48.2,193.7,51.9,199.5,112.1,201.6,211.7,202.2,238.4,203.2,291.8,204.4,337.7,206.3,371.8,207.2,386.6,208.8,410.1,210.9,440.7,211.4,448.4,214.3,493.3,216.6,549,218,584,220,649.7,227.1,877.6,234.3,1105.4,235.3,1138.9,235.4,1151.7,235.9,1193.8,233.1,1246.5,231.5,1277.5,226.9,1341.1,228.5,1341.9,230.4,1341.3]}},156).to({_off:true},1).wait(16).to({_off:false,x:195.35,y:43.6},0).to({guide:{path:[195.4,43.7,194.9,44.3,194.5,45.3,193.3,48.2,193.7,51.9,199.5,112.1,201.6,211.7,202.2,238.4,203.2,291.8,204.4,337.7,206.3,371.8,207.2,386.6,208.8,410.1,210.9,440.7,211.4,448.4,214.3,493.3,216.6,549,218,584,220,649.7,227.1,877.6,234.3,1105.4,235.3,1138.9,235.4,1151.7,235.9,1193.8,233.1,1246.5,231.5,1277.5,226.9,1341.1,228.5,1341.9,230.4,1341.3]}},156).to({_off:true},1).wait(136));

	// レイヤー_3_コピー
	this.instance_28 = new lib.yellow();
	this.instance_28.setTransform(70.2,49.9);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(52).to({_off:false},0).to({guide:{path:[70.2,50,70.9,56,70.2,65.8,66.6,115,65.8,143.2,64.6,186,67.8,220.6,68.8,231.6,70.7,246.3,71.8,254.9,74.2,272.1,85.9,360.1,92.8,470.9,97,537.8,102.3,670.4,103.6,703.4,103.9,718.9,104.5,745.9,103.8,767.4,103.3,782.3,102,801.9,101.7,805.1,99.4,836.4,80.3,1090.6,94.8,1316.7,95.1,1320.6,94.1,1323.3,93.8,1324.2,93.3,1324.9]}},153).to({_off:true},1).wait(33).to({_off:false,x:70.2,y:49.9},0).to({guide:{path:[70.2,50,70.9,56,70.2,65.8,66.6,115,65.8,143.2,64.6,186,67.8,220.6,68.8,231.6,70.7,246.3,71.8,254.9,74.2,272.1,85.9,360.1,92.8,470.9,97,537.8,102.3,670.4,103.6,703.4,103.9,718.9,104.5,745.9,103.8,767.4,103.3,782.3,102,801.9,101.7,805.1,99.4,836.4,80.3,1090.6,94.8,1316.7,95.1,1320.6,94.1,1323.3,93.8,1324.2,93.3,1324.9]}},153).to({_off:true},1).wait(76));

	// レイヤー_11
	this.instance_29 = new lib.blue();
	this.instance_29.setTransform(529.8,52.25);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(11).to({_off:false},0).to({guide:{path:[529.8,52.3,530.1,52,530.7,51.7,532.5,50.8,534,51.7,535.4,52.4,536.3,54.1,536.8,55.2,537.5,57.4,549.9,99.6,554.9,143.2,557.9,168.5,558.8,200.4,559.4,219.1,559.6,257.8,559.8,324,559.4,358.2,558.7,413.9,556.1,458.5,553.8,496.1,548.6,550.3,545.6,580.9,539.5,642,529.1,752.9,531.7,825.5,532.9,860.4,537.4,903.4,540.2,930.8,546.6,981,553.5,1034.7,556.1,1058.6,560.8,1101.9,562.4,1136.4,563.5,1158.8,564,1203.5,564.7,1262.7,565.3,1321.9,565.4,1325.2,563.9,1327.9]}},159).to({_off:true},1).wait(21).to({_off:false,x:529.8,y:52.25},0).to({guide:{path:[529.8,52.3,530.1,52,530.7,51.7,532.5,50.8,534,51.7,535.4,52.4,536.3,54.1,536.8,55.2,537.5,57.4,549.9,99.6,554.9,143.2,557.9,168.5,558.8,200.4,559.4,219.1,559.6,257.8,559.8,324,559.4,358.2,558.7,413.9,556.1,458.5,553.8,496.1,548.6,550.3,545.6,580.9,539.5,642,529.1,752.9,531.7,825.5,532.9,860.4,537.4,903.4,540.2,930.8,546.6,981,553.5,1034.7,556.1,1058.6,560.8,1101.9,562.4,1136.4,563.5,1158.8,564,1203.5,564.7,1262.7,565.3,1321.9,565.4,1325.2,563.9,1327.9]}},149).to({_off:true},1).wait(127));

	// レイヤー_9
	this.instance_30 = new lib.green();
	this.instance_30.setTransform(423,54.75);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(29).to({_off:false},0).to({guide:{path:[423,54.9,421.6,56,421.4,59.5,417.1,161.1,423.9,299.2,427.7,379.2,438.1,538.9,439.9,569.6,443.8,649.5,445.1,676.5,446.4,703.6,449.1,759.4,450.2,784,452.1,828.9,453,864.5,454.6,923.7,454.4,995.5,454.2,1046.2,453,1126.4,452.6,1150.1,452.6,1161.9,452.6,1181.5,453.3,1197.3,454.6,1227.7,459.4,1265.6,462.3,1287.9,469.5,1333.5,469.8,1335.5,470.9,1335.7,471.7,1335.8,472.3,1335,472.8,1334.2,472.9,1333.2,473.2,1331.6,473.3,1330.1]}},156).to({_off:true},1).wait(29).to({_off:false,x:423,y:54.75},0).to({guide:{path:[423,54.9,421.6,56,421.4,59.5,417.1,161.1,423.9,299.2,427.7,379.2,438.1,538.9,439.9,569.6,443.8,649.5,445.1,676.5,446.4,703.6,449.1,759.4,450.2,784,452.1,828.9,453,864.5,454.6,923.7,454.4,995.5,454.2,1046.2,453,1126.4,452.6,1150.1,452.6,1161.9,452.6,1181.5,453.3,1197.3,454.6,1227.7,459.4,1265.6,462.3,1287.9,469.5,1333.5,469.8,1335.5,470.9,1335.7,471.7,1335.8,472.3,1335,472.8,1334.2,472.9,1333.2,473.2,1331.6,473.3,1330.1]}},156).to({_off:true},1).wait(97));

	// レイヤー_7
	this.instance_31 = new lib.pink();
	this.instance_31.setTransform(336,53.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({guide:{path:[336,53.3,335.7,52.4,335.5,51.5,333.3,53.4,332.7,57,332.3,59.5,332.7,63.6,337.3,112.3,336.3,170.8,335.5,213.9,331.1,278.3,328.7,314.1,323.7,385.8,320.1,447.4,320.6,493.4,321.1,545.8,328.1,627.5,330,649.9,333.9,694.4,337.3,733.5,339,761.5,342.9,826,342.9,906.9,342.9,955.5,341,1052.5,340.6,1073,340.3,1083.3,339.8,1100.4,338.8,1114.1,338.1,1125.3,336.1,1147.7,334.5,1167.9,334.4,1181.4,334.2,1192.6,335,1206.6,335.4,1215.1,336.6,1231.8,339.7,1274.3,342.7,1316.8]}},159).to({_off:true},1).wait(20).to({_off:false,x:336,y:53.25},0).to({guide:{path:[336,53.3,335.7,52.4,335.5,51.5,333.3,53.4,332.7,57,332.3,59.5,332.7,63.6,337.3,112.3,336.3,170.8,335.5,213.9,331.1,278.3,328.7,314.1,323.7,385.8,320.1,447.4,320.6,493.4,321.1,545.8,328.1,627.5,330,649.9,333.9,694.4,337.3,733.5,339,761.5,342.9,826,342.9,906.9,342.9,955.5,341,1052.5,340.6,1073,340.3,1083.3,339.8,1100.4,338.8,1114.1,338.1,1125.3,336.1,1147.7,334.5,1167.9,334.4,1181.4,334.2,1192.6,335,1206.6,335.4,1215.1,336.6,1231.8,339.7,1274.3,342.7,1316.8]}},159).to({_off:true},1).wait(129));

	// レイヤー_5
	this.instance_32 = new lib.purple();
	this.instance_32.setTransform(195.35,43.6);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(19).to({_off:false},0).to({guide:{path:[195.4,43.7,194.9,44.3,194.5,45.3,193.3,48.2,193.7,51.9,199.5,112.1,201.6,211.7,202.2,238.4,203.2,291.8,204.4,337.7,206.3,371.8,207.2,386.6,208.8,410.1,210.9,440.7,211.4,448.4,214.3,493.3,216.6,549,218,584,220,649.7,227.1,877.6,234.3,1105.4,235.3,1138.9,235.4,1151.7,235.9,1193.8,233.1,1246.5,231.5,1277.5,226.9,1341.1,228.5,1341.9,230.4,1341.3]}},156).to({_off:true},1).wait(19).to({_off:false,x:195.35,y:43.6},0).to({guide:{path:[195.4,43.7,194.9,44.3,194.5,45.3,193.3,48.2,193.7,51.9,199.5,112.1,201.6,211.7,202.2,238.4,203.2,291.8,204.4,337.7,206.3,371.8,207.2,386.6,208.8,410.1,210.9,440.7,211.4,448.4,214.3,493.3,216.6,549,218,584,220,649.7,227.1,877.6,234.3,1105.4,235.3,1138.9,235.4,1151.7,235.9,1193.8,233.1,1246.5,231.5,1277.5,226.9,1341.1,228.5,1341.9,230.4,1341.3]}},156).to({_off:true},1).wait(117));

	// レイヤー_3
	this.instance_33 = new lib.yellow();
	this.instance_33.setTransform(70.2,49.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({guide:{path:[70.2,50,70.9,56,70.2,65.8,66.6,115,65.8,143.2,64.6,186,67.8,220.6,68.8,231.6,70.7,246.3,71.8,254.9,74.2,272.1,85.9,360.1,92.8,470.9,97,537.8,102.3,670.4,103.6,703.4,103.9,718.9,104.5,745.9,103.8,767.4,103.3,782.3,102,801.9,101.7,805.1,99.4,836.4,80.3,1090.6,94.8,1316.7,95.1,1320.6,94.1,1323.3,93.8,1324.2,93.3,1324.9]}},153).to({_off:true},1).wait(33).to({_off:false,x:70.2,y:49.9},0).to({guide:{path:[70.2,50,70.9,56,70.2,65.8,66.6,115,65.8,143.2,64.6,186,67.8,220.6,68.8,231.6,70.7,246.3,71.8,254.9,74.2,272.1,85.9,360.1,92.8,470.9,97,537.8,102.3,670.4,103.6,703.4,103.9,718.9,104.5,745.9,103.8,767.4,103.3,782.3,102,801.9,101.7,805.1,99.4,836.4,80.3,1090.6,94.8,1316.7,95.1,1320.6,94.1,1323.3,93.8,1324.2,93.3,1324.9]}},153).to({_off:true},1).wait(128));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.8,29.5,617.6,1334.7);


// stage content:
(lib.particle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_14_コピー
	this.instance = new lib.hubuki();
	this.instance.setTransform(368.4,68,1,1,0,0,180,246.6,52.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(437));

	// レイヤー_14
	this.instance_1 = new lib.hubuki();
	this.instance_1.setTransform(244.4,52,1,1,0,0,0,246.6,52.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(469));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(378,679.6,176.79999999999995,-599.1);
// library properties:
lib.properties = {
	id: 'E0D7B5AB785CD94C9E9B80961AAFCDDA',
	width: 640,
	height: 1280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/particle/images/blue_a.png", id:"blue_a"},
		{src:"./effectcjs/particle/images/blue_b.png", id:"blue_b"},
		{src:"./effectcjs/particle/images/green_a.png", id:"green_a"},
		{src:"./effectcjs/particle/images/green_b.png", id:"green_b"},
		{src:"./effectcjs/particle/images/pink_a.png", id:"pink_a"},
		{src:"./effectcjs/particle/images/pink_b.png", id:"pink_b"},
		{src:"./effectcjs/particle/images/purple_a.png", id:"purple_a"},
		{src:"./effectcjs/particle/images/purple_b.png", id:"purple_b"},
		{src:"./effectcjs/particle/images/yellow_a.png", id:"yellow_a"},
		{src:"./effectcjs/particle/images/yellow_b.png", id:"yellow_b"}
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
an.compositions['E0D7B5AB785CD94C9E9B80961AAFCDDA'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
