(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib.cloud1 = function() {
	this.initialize(img.cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584,116);


(lib.cloud2 = function() {
	this.initialize(img.cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,65);


(lib.cloud3 = function() {
	this.initialize(img.cloud3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,135);


(lib.cloud4 = function() {
	this.initialize(img.cloud4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,98);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,531,263);


(lib.mushi = function() {
	this.initialize(img.mushi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,79);


(lib.title_front = function() {
	this.initialize(img.title_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1280);// helper functions:

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


(lib.シンボル5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mushi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル5, new cjs.Rectangle(0,0,104,79), null);


(lib.シンボル4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル4, new cjs.Rectangle(0,0,584,116), null);


(lib.シンボル3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル3, new cjs.Rectangle(0,0,92,65), null);


(lib.シンボル2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル2, new cjs.Rectangle(0,0,172,135), null);


(lib.シンボル1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,172,98), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo();
	this.instance.setTransform(-265.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.5,-131.5,531,263);


(lib.MUSHI = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.シンボル5();
	this.instance.setTransform(0,0,1,1,0,0,0,52,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({y:-1.05},0).wait(1).to({y:-2.15},0).wait(1).to({y:-3.2},0).wait(1).to({y:-4.3},0).wait(1).to({y:-5.4},0).wait(1).to({y:-6.45},0).wait(1).to({y:-7.55},0).wait(1).to({y:-8.6},0).wait(1).to({y:-9.7},0).wait(1).to({y:-10.8},0).wait(1).to({y:-8.8},0).wait(1).to({y:-6.8},0).wait(1).to({y:-4.85},0).wait(1).to({y:-2.85},0).wait(1).to({y:-0.9},0).wait(1).to({y:1.1},0).wait(1).to({y:3.1},0).wait(1).to({y:5.05},0).wait(1).to({y:7.05},0).wait(1).to({y:9},0).wait(1).to({y:8.1},0).wait(1).to({y:7.2},0).wait(1).to({y:6.3},0).wait(1).to({y:5.4},0).wait(1).to({y:4.5},0).wait(1).to({y:3.6},0).wait(1).to({y:2.7},0).wait(1).to({y:1.8},0).wait(1).to({y:0.9},0).wait(1).to({y:0},0).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-50.3,104,98.8);


// stage content:
(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO
	this.instance = new lib.LOGO("synched",0);
	this.instance.setTransform(313.5,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:417.65},0).wait(1).to({y:415.8},0).wait(1).to({y:413.95},0).wait(1).to({y:412.1},0).wait(1).to({y:410.25},0).wait(1).to({y:408.4},0).wait(1).to({y:406.55},0).wait(1).to({y:404.7},0).wait(1).to({y:402.85},0).wait(1).to({y:401},0).wait(1).to({y:402.85},0).wait(1).to({y:404.7},0).wait(1).to({y:406.55},0).wait(1).to({y:408.4},0).wait(1).to({y:410.25},0).wait(1).to({y:412.1},0).wait(1).to({y:413.95},0).wait(1).to({y:415.8},0).wait(1).to({y:417.65},0).wait(1).to({y:419.5},0).wait(1).to({y:417.65},0).wait(1).to({y:415.8},0).wait(1).to({y:413.95},0).wait(1).to({y:412.1},0).wait(1).to({y:410.25},0).wait(1).to({y:408.4},0).wait(1).to({y:406.55},0).wait(1).to({y:404.7},0).wait(1).to({y:402.85},0).wait(1).to({y:401},0).wait(1).to({y:402.85},0).wait(1).to({y:404.7},0).wait(1).to({y:406.55},0).wait(1).to({y:408.4},0).wait(1).to({y:410.25},0).wait(1).to({y:412.1},0).wait(1).to({y:413.95},0).wait(1).to({y:415.8},0).wait(1).to({y:417.65},0).wait(1).to({y:419.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:418.06},0).wait(1).to({y:416.62},0).wait(1).to({y:415.18},0).wait(1).to({y:413.74},0).wait(1).to({y:412.3},0).wait(1).to({y:410.86},0).wait(1).to({y:409.42},0).wait(1).to({y:407.98},0).wait(1).to({y:406.54},0).wait(1).to({y:405.1},0).wait(1).to({y:406.54},0).wait(1).to({y:407.98},0).wait(1).to({y:409.42},0).wait(1).to({y:410.86},0).wait(1).to({y:412.3},0).wait(1).to({y:413.74},0).wait(1).to({y:415.18},0).wait(1).to({y:416.62},0).wait(1).to({y:418.06},0).wait(1).to({y:419.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// レイヤー_1
	this.instance_1 = new lib.MUSHI("synched",0);
	this.instance_1.setTransform(601,998.4,1,1,0,0,0,23,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180));

	// front
	this.instance_2 = new lib.title_front();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	// レイヤー_7
	this.instance_3 = new lib.シンボル1();
	this.instance_3.setTransform(114,553,1,1,0,0,0,86,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:113.85},0).wait(1).to({x:113.75},0).wait(1).to({x:113.6},0).wait(1).to({x:113.5},0).wait(1).to({x:113.35},0).wait(1).to({x:113.25},0).wait(1).to({x:113.1},0).wait(1).to({x:113},0).wait(1).to({x:112.85},0).wait(1).to({x:112.75},0).wait(1).to({x:112.6},0).wait(1).to({x:112.5},0).wait(1).to({x:112.35},0).wait(1).to({x:112.25},0).wait(1).to({x:112.1},0).wait(1).to({x:112},0).wait(1).to({x:111.85},0).wait(1).to({x:111.75},0).wait(1).to({x:111.6},0).wait(1).to({x:111.5},0).wait(1).to({x:111.35},0).wait(1).to({x:111.25},0).wait(1).to({x:111.1},0).wait(1).to({x:111},0).wait(1).to({x:110.85},0).wait(1).to({x:110.75},0).wait(1).to({x:110.6},0).wait(1).to({x:110.5},0).wait(1).to({x:110.35},0).wait(1).to({x:110.25},0).wait(1).to({x:110.1},0).wait(1).to({x:110},0).wait(1).to({x:109.85},0).wait(1).to({x:109.75},0).wait(1).to({x:109.6},0).wait(1).to({x:109.5},0).wait(1).to({x:109.35},0).wait(1).to({x:109.25},0).wait(1).to({x:109.1},0).wait(1).to({x:109},0).wait(1).to({x:108.85},0).wait(1).to({x:108.75},0).wait(1).to({x:108.6},0).wait(1).to({x:108.5},0).wait(1).to({x:108.35},0).wait(1).to({x:108.25},0).wait(1).to({x:108.1},0).wait(1).to({x:108},0).wait(1).to({x:107.85},0).wait(1).to({x:107.75},0).wait(1).to({x:107.6},0).wait(1).to({x:107.5},0).wait(1).to({x:107.35},0).wait(1).to({x:107.25},0).wait(1).to({x:107.1},0).wait(1).to({x:107},0).wait(1).to({x:106.85},0).wait(1).to({x:106.75},0).wait(1).to({x:106.6},0).wait(1).to({x:106.5},0).wait(1).to({x:106.35},0).wait(1).to({x:106.25},0).wait(1).to({x:106.1},0).wait(1).to({x:106},0).wait(1).to({x:105.85},0).wait(1).to({x:105.75},0).wait(1).to({x:105.6},0).wait(1).to({x:105.5},0).wait(1).to({x:105.35},0).wait(1).to({x:105.25},0).wait(1).to({x:105.1},0).wait(1).to({x:105},0).wait(1).to({x:104.85},0).wait(1).to({x:104.75},0).wait(1).to({x:104.6},0).wait(1).to({x:104.5},0).wait(1).to({x:104.35},0).wait(1).to({x:104.25},0).wait(1).to({x:104.1},0).wait(1).to({x:104},0).wait(1).to({x:103.85},0).wait(1).to({x:103.75},0).wait(1).to({x:103.6},0).wait(1).to({x:103.5},0).wait(1).to({x:103.35},0).wait(1).to({x:103.25},0).wait(1).to({x:103.1},0).wait(1).to({x:103},0).wait(1).to({x:102.9},0).wait(1).to({x:103},0).wait(1).to({x:103.1},0).wait(1).to({x:103.25},0).wait(1).to({x:103.35},0).wait(1).to({x:103.5},0).wait(1).to({x:103.6},0).wait(1).to({x:103.75},0).wait(1).to({x:103.85},0).wait(1).to({x:104},0).wait(1).to({x:104.1},0).wait(1).to({x:104.25},0).wait(1).to({x:104.35},0).wait(1).to({x:104.5},0).wait(1).to({x:104.6},0).wait(1).to({x:104.75},0).wait(1).to({x:104.85},0).wait(1).to({x:104.95},0).wait(1).to({x:105.1},0).wait(1).to({x:105.2},0).wait(1).to({x:105.35},0).wait(1).to({x:105.45},0).wait(1).to({x:105.6},0).wait(1).to({x:105.7},0).wait(1).to({x:105.85},0).wait(1).to({x:105.95},0).wait(1).to({x:106.1},0).wait(1).to({x:106.2},0).wait(1).to({x:106.35},0).wait(1).to({x:106.45},0).wait(1).to({x:106.6},0).wait(1).to({x:106.7},0).wait(1).to({x:106.8},0).wait(1).to({x:106.95},0).wait(1).to({x:107.05},0).wait(1).to({x:107.2},0).wait(1).to({x:107.3},0).wait(1).to({x:107.45},0).wait(1).to({x:107.55},0).wait(1).to({x:107.7},0).wait(1).to({x:107.8},0).wait(1).to({x:107.95},0).wait(1).to({x:108.05},0).wait(1).to({x:108.2},0).wait(1).to({x:108.3},0).wait(1).to({x:108.45},0).wait(1).to({x:108.55},0).wait(1).to({x:108.65},0).wait(1).to({x:108.8},0).wait(1).to({x:108.9},0).wait(1).to({x:109.05},0).wait(1).to({x:109.15},0).wait(1).to({x:109.3},0).wait(1).to({x:109.4},0).wait(1).to({x:109.55},0).wait(1).to({x:109.65},0).wait(1).to({x:109.8},0).wait(1).to({x:109.9},0).wait(1).to({x:110.05},0).wait(1).to({x:110.15},0).wait(1).to({x:110.3},0).wait(1).to({x:110.4},0).wait(1).to({x:110.5},0).wait(1).to({x:110.65},0).wait(1).to({x:110.75},0).wait(1).to({x:110.9},0).wait(1).to({x:111},0).wait(1).to({x:111.15},0).wait(1).to({x:111.25},0).wait(1).to({x:111.4},0).wait(1).to({x:111.5},0).wait(1).to({x:111.65},0).wait(1).to({x:111.75},0).wait(1).to({x:111.9},0).wait(1).to({x:112},0).wait(1).to({x:112.15},0).wait(1).to({x:112.25},0).wait(1).to({x:112.35},0).wait(1).to({x:112.5},0).wait(1).to({x:112.6},0).wait(1).to({x:112.75},0).wait(1).to({x:112.85},0).wait(1).to({x:113},0).wait(1).to({x:113.1},0).wait(1).to({x:113.25},0).wait(1).to({x:113.35},0).wait(1).to({x:113.5},0).wait(1).to({x:113.6},0).wait(1).to({x:113.75},0).wait(1).to({x:113.85},0).wait(1).to({x:114},0).wait(1));

	// レイヤー_6
	this.instance_4 = new lib.シンボル2();
	this.instance_4.setTransform(563,718.5,1,1,0,0,0,86,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:563.15},0).wait(1).to({x:563.3},0).wait(1).to({x:563.45},0).wait(1).to({x:563.6},0).wait(1).to({x:563.75},0).wait(1).to({x:563.9},0).wait(1).to({x:564.05},0).wait(1).to({x:564.2},0).wait(1).to({x:564.35},0).wait(1).to({x:564.55},0).wait(1).to({x:564.7},0).wait(1).to({x:564.85},0).wait(1).to({x:565},0).wait(1).to({x:565.15},0).wait(1).to({x:565.3},0).wait(1).to({x:565.45},0).wait(1).to({x:565.6},0).wait(1).to({x:565.75},0).wait(1).to({x:565.95},0).wait(1).to({x:566.1},0).wait(1).to({x:566.25},0).wait(1).to({x:566.4},0).wait(1).to({x:566.55},0).wait(1).to({x:566.7},0).wait(1).to({x:566.85},0).wait(1).to({x:567},0).wait(1).to({x:567.15},0).wait(1).to({x:567.35},0).wait(1).to({x:567.5},0).wait(1).to({x:567.65},0).wait(1).to({x:567.8},0).wait(1).to({x:567.95},0).wait(1).to({x:568.1},0).wait(1).to({x:568.25},0).wait(1).to({x:568.4},0).wait(1).to({x:568.55},0).wait(1).to({x:568.75},0).wait(1).to({x:568.9},0).wait(1).to({x:569.05},0).wait(1).to({x:569.2},0).wait(1).to({x:569.35},0).wait(1).to({x:569.5},0).wait(1).to({x:569.65},0).wait(1).to({x:569.8},0).wait(1).to({x:569.95},0).wait(1).to({x:570.15},0).wait(1).to({x:570.3},0).wait(1).to({x:570.45},0).wait(1).to({x:570.6},0).wait(1).to({x:570.75},0).wait(1).to({x:570.9},0).wait(1).to({x:571.05},0).wait(1).to({x:571.2},0).wait(1).to({x:571.35},0).wait(1).to({x:571.55},0).wait(1).to({x:571.7},0).wait(1).to({x:571.85},0).wait(1).to({x:572},0).wait(1).to({x:572.15},0).wait(1).to({x:572.3},0).wait(1).to({x:572.45},0).wait(1).to({x:572.6},0).wait(1).to({x:572.75},0).wait(1).to({x:572.9},0).wait(1).to({x:573.1},0).wait(1).to({x:573.25},0).wait(1).to({x:573.4},0).wait(1).to({x:573.55},0).wait(1).to({x:573.7},0).wait(1).to({x:573.85},0).wait(1).to({x:574},0).wait(1).to({x:574.15},0).wait(1).to({x:574.3},0).wait(1).to({x:574.5},0).wait(1).to({x:574.65},0).wait(1).to({x:574.8},0).wait(1).to({x:574.95},0).wait(1).to({x:575.1},0).wait(1).to({x:575.25},0).wait(1).to({x:575.4},0).wait(1).to({x:575.55},0).wait(1).to({x:575.7},0).wait(1).to({x:575.9},0).wait(1).to({x:576.05},0).wait(1).to({x:576.2},0).wait(1).to({x:576.35},0).wait(1).to({x:576.5},0).wait(1).to({x:576.65},0).wait(1).to({x:576.8},0).wait(1).to({x:576.95},0).wait(1).to({x:577.1},0).wait(1).to({x:577.3},0).wait(1).to({x:577.45},0).wait(1).to({x:577.6},0).wait(1).to({x:577.75},0).wait(1).to({x:577.9},0).wait(1).to({x:578.05},0).wait(1).to({x:578.2},0).wait(1).to({x:578.35},0).wait(1).to({x:578.5},0).wait(1).to({x:578.7},0).wait(1).to({x:578.85},0).wait(1).to({x:579},0).wait(1).to({x:579.15},0).wait(1).to({x:579.3},0).wait(1).to({x:579.45},0).wait(1).to({x:579.6},0).wait(1).to({x:579.75},0).wait(1).to({x:579.9},0).wait(1).to({x:580.1},0).wait(1).to({x:580.25},0).wait(1).to({x:580.4},0).wait(1).to({x:580.55},0).wait(1).to({x:580.7},0).wait(1).to({x:580.85},0).wait(1).to({x:581},0).wait(1).to({x:581.15},0).wait(1).to({x:581.3},0).wait(1).to({x:581.5},0).wait(1).to({x:581.15},0).wait(1).to({x:580.85},0).wait(1).to({x:580.55},0).wait(1).to({x:580.25},0).wait(1).to({x:579.95},0).wait(1).to({x:579.65},0).wait(1).to({x:579.3},0).wait(1).to({x:579},0).wait(1).to({x:578.7},0).wait(1).to({x:578.4},0).wait(1).to({x:578.1},0).wait(1).to({x:577.8},0).wait(1).to({x:577.45},0).wait(1).to({x:577.15},0).wait(1).to({x:576.85},0).wait(1).to({x:576.55},0).wait(1).to({x:576.25},0).wait(1).to({x:575.95},0).wait(1).to({x:575.6},0).wait(1).to({x:575.3},0).wait(1).to({x:575},0).wait(1).to({x:574.7},0).wait(1).to({x:574.4},0).wait(1).to({x:574.1},0).wait(1).to({x:573.75},0).wait(1).to({x:573.45},0).wait(1).to({x:573.15},0).wait(1).to({x:572.85},0).wait(1).to({x:572.55},0).wait(1).to({x:572.25},0).wait(1).to({x:571.9},0).wait(1).to({x:571.6},0).wait(1).to({x:571.3},0).wait(1).to({x:571},0).wait(1).to({x:570.7},0).wait(1).to({x:570.4},0).wait(1).to({x:570.05},0).wait(1).to({x:569.75},0).wait(1).to({x:569.45},0).wait(1).to({x:569.15},0).wait(1).to({x:568.85},0).wait(1).to({x:568.55},0).wait(1).to({x:568.2},0).wait(1).to({x:567.9},0).wait(1).to({x:567.6},0).wait(1).to({x:567.3},0).wait(1).to({x:567},0).wait(1).to({x:566.7},0).wait(1).to({x:566.35},0).wait(1).to({x:566.05},0).wait(1).to({x:565.75},0).wait(1).to({x:565.45},0).wait(1).to({x:565.15},0).wait(1).to({x:564.85},0).wait(1).to({x:564.5},0).wait(1).to({x:564.2},0).wait(1).to({x:563.9},0).wait(1).to({x:563.6},0).wait(1).to({x:563.3},0).wait(1).to({x:563},0).wait(1));

	// レイヤー_5
	this.instance_5 = new lib.シンボル3();
	this.instance_5.setTransform(590,455.5,1,1,0,0,0,46,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:590.1},0).wait(1).to({x:590.2},0).wait(1).to({x:590.3},0).wait(1).to({x:590.4},0).wait(1).to({x:590.5},0).wait(1).to({x:590.6},0).wait(1).to({x:590.7},0).wait(1).to({x:590.8},0).wait(1).to({x:590.9},0).wait(1).to({x:591},0).wait(1).to({x:591.1},0).wait(1).to({x:591.2},0).wait(1).to({x:591.35},0).wait(1).to({x:591.45},0).wait(1).to({x:591.55},0).wait(1).to({x:591.65},0).wait(1).to({x:591.75},0).wait(1).to({x:591.85},0).wait(1).to({x:591.95},0).wait(1).to({x:592.05},0).wait(1).to({x:592.15},0).wait(1).to({x:592.25},0).wait(1).to({x:592.35},0).wait(1).to({x:592.45},0).wait(1).to({x:592.55},0).wait(1).to({x:592.7},0).wait(1).to({x:592.8},0).wait(1).to({x:592.9},0).wait(1).to({x:593},0).wait(1).to({x:593.1},0).wait(1).to({x:593.2},0).wait(1).to({x:593.3},0).wait(1).to({x:593.4},0).wait(1).to({x:593.5},0).wait(1).to({x:593.6},0).wait(1).to({x:593.7},0).wait(1).to({x:593.8},0).wait(1).to({x:593.9},0).wait(1).to({x:594.05},0).wait(1).to({x:594.15},0).wait(1).to({x:594.25},0).wait(1).to({x:594.35},0).wait(1).to({x:594.45},0).wait(1).to({x:594.55},0).wait(1).to({x:594.65},0).wait(1).to({x:594.75},0).wait(1).to({x:594.85},0).wait(1).to({x:594.95},0).wait(1).to({x:595.05},0).wait(1).to({x:595.15},0).wait(1).to({x:595.3},0).wait(1).to({x:595.4},0).wait(1).to({x:595.5},0).wait(1).to({x:595.6},0).wait(1).to({x:595.7},0).wait(1).to({x:595.8},0).wait(1).to({x:595.9},0).wait(1).to({x:596},0).wait(1).to({x:596.1},0).wait(1).to({x:596.2},0).wait(1).to({x:596.3},0).wait(1).to({x:596.4},0).wait(1).to({x:596.5},0).wait(1).to({x:596.65},0).wait(1).to({x:596.75},0).wait(1).to({x:596.85},0).wait(1).to({x:596.95},0).wait(1).to({x:597.05},0).wait(1).to({x:597.15},0).wait(1).to({x:597.25},0).wait(1).to({x:597.35},0).wait(1).to({x:597.45},0).wait(1).to({x:597.55},0).wait(1).to({x:597.65},0).wait(1).to({x:597.75},0).wait(1).to({x:597.85},0).wait(1).to({x:598},0).wait(1).to({x:598.1},0).wait(1).to({x:598.2},0).wait(1).to({x:598.3},0).wait(1).to({x:598.4},0).wait(1).to({x:598.5},0).wait(1).to({x:598.6},0).wait(1).to({x:598.7},0).wait(1).to({x:598.8},0).wait(1).to({x:598.9},0).wait(1).to({x:599},0).wait(1).to({x:599.1},0).wait(1).to({x:599.25},0).wait(1).to({x:599.1},0).wait(1).to({x:599},0).wait(1).to({x:598.9},0).wait(1).to({x:598.8},0).wait(1).to({x:598.7},0).wait(1).to({x:598.6},0).wait(1).to({x:598.5},0).wait(1).to({x:598.4},0).wait(1).to({x:598.3},0).wait(1).to({x:598.2},0).wait(1).to({x:598.1},0).wait(1).to({x:598},0).wait(1).to({x:597.9},0).wait(1).to({x:597.8},0).wait(1).to({x:597.7},0).wait(1).to({x:597.6},0).wait(1).to({x:597.5},0).wait(1).to({x:597.4},0).wait(1).to({x:597.25},0).wait(1).to({x:597.15},0).wait(1).to({x:597.05},0).wait(1).to({x:596.95},0).wait(1).to({x:596.85},0).wait(1).to({x:596.75},0).wait(1).to({x:596.65},0).wait(1).to({x:596.55},0).wait(1).to({x:596.45},0).wait(1).to({x:596.35},0).wait(1).to({x:596.25},0).wait(1).to({x:596.15},0).wait(1).to({x:596.05},0).wait(1).to({x:595.95},0).wait(1).to({x:595.85},0).wait(1).to({x:595.75},0).wait(1).to({x:595.65},0).wait(1).to({x:595.55},0).wait(1).to({x:595.4},0).wait(1).to({x:595.3},0).wait(1).to({x:595.2},0).wait(1).to({x:595.1},0).wait(1).to({x:595},0).wait(1).to({x:594.9},0).wait(1).to({x:594.8},0).wait(1).to({x:594.7},0).wait(1).to({x:594.6},0).wait(1).to({x:594.5},0).wait(1).to({x:594.4},0).wait(1).to({x:594.3},0).wait(1).to({x:594.2},0).wait(1).to({x:594.1},0).wait(1).to({x:594},0).wait(1).to({x:593.9},0).wait(1).to({x:593.8},0).wait(1).to({x:593.7},0).wait(1).to({x:593.55},0).wait(1).to({x:593.45},0).wait(1).to({x:593.35},0).wait(1).to({x:593.25},0).wait(1).to({x:593.15},0).wait(1).to({x:593.05},0).wait(1).to({x:592.95},0).wait(1).to({x:592.85},0).wait(1).to({x:592.75},0).wait(1).to({x:592.65},0).wait(1).to({x:592.55},0).wait(1).to({x:592.45},0).wait(1).to({x:592.35},0).wait(1).to({x:592.25},0).wait(1).to({x:592.15},0).wait(1).to({x:592.05},0).wait(1).to({x:591.95},0).wait(1).to({x:591.85},0).wait(1).to({x:591.7},0).wait(1).to({x:591.6},0).wait(1).to({x:591.5},0).wait(1).to({x:591.4},0).wait(1).to({x:591.3},0).wait(1).to({x:591.2},0).wait(1).to({x:591.1},0).wait(1).to({x:591},0).wait(1).to({x:590.9},0).wait(1).to({x:590.8},0).wait(1).to({x:590.7},0).wait(1).to({x:590.6},0).wait(1).to({x:590.5},0).wait(1).to({x:590.4},0).wait(1).to({x:590.3},0).wait(1).to({x:590.2},0).wait(1).to({x:590.1},0).wait(1).to({x:590},0).wait(1));

	// レイヤー_3
	this.instance_6 = new lib.シンボル4();
	this.instance_6.setTransform(320,681,1,1,0,0,0,292,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:320.1},0).wait(1).to({x:320.25},0).wait(1).to({x:320.4},0).wait(1).to({x:320.55},0).wait(1).to({x:320.7},0).wait(1).to({x:320.85},0).wait(1).to({x:321},0).wait(1).to({x:321.15},0).wait(1).to({x:321.3},0).wait(1).to({x:321.45},0).wait(1).to({x:321.6},0).wait(1).to({x:321.7},0).wait(1).to({x:321.85},0).wait(1).to({x:322},0).wait(1).to({x:322.15},0).wait(1).to({x:322.3},0).wait(1).to({x:322.45},0).wait(1).to({x:322.6},0).wait(1).to({x:322.75},0).wait(1).to({x:322.9},0).wait(1).to({x:323.05},0).wait(1).to({x:323.2},0).wait(1).to({x:323.3},0).wait(1).to({x:323.45},0).wait(1).to({x:323.6},0).wait(1).to({x:323.75},0).wait(1).to({x:323.9},0).wait(1).to({x:324.05},0).wait(1).to({x:324.2},0).wait(1).to({x:324.35},0).wait(1).to({x:324.5},0).wait(1).to({x:324.65},0).wait(1).to({x:324.8},0).wait(1).to({x:324.9},0).wait(1).to({x:325.05},0).wait(1).to({x:325.2},0).wait(1).to({x:325.35},0).wait(1).to({x:325.5},0).wait(1).to({x:325.65},0).wait(1).to({x:325.8},0).wait(1).to({x:325.95},0).wait(1).to({x:326.1},0).wait(1).to({x:326.25},0).wait(1).to({x:326.4},0).wait(1).to({x:326.5},0).wait(1).to({x:326.65},0).wait(1).to({x:326.8},0).wait(1).to({x:326.95},0).wait(1).to({x:327.1},0).wait(1).to({x:327.25},0).wait(1).to({x:327.4},0).wait(1).to({x:327.55},0).wait(1).to({x:327.7},0).wait(1).to({x:327.85},0).wait(1).to({x:328},0).wait(1).to({x:328.1},0).wait(1).to({x:328.25},0).wait(1).to({x:328.4},0).wait(1).to({x:328.55},0).wait(1).to({x:328.7},0).wait(1).to({x:328.85},0).wait(1).to({x:329},0).wait(1).to({x:329.15},0).wait(1).to({x:329.3},0).wait(1).to({x:329.45},0).wait(1).to({x:329.6},0).wait(1).to({x:329.7},0).wait(1).to({x:329.85},0).wait(1).to({x:330},0).wait(1).to({x:330.15},0).wait(1).to({x:330.3},0).wait(1).to({x:330.45},0).wait(1).to({x:330.6},0).wait(1).to({x:330.75},0).wait(1).to({x:330.9},0).wait(1).to({x:331.05},0).wait(1).to({x:331.2},0).wait(1).to({x:331.3},0).wait(1).to({x:331.45},0).wait(1).to({x:331.6},0).wait(1).to({x:331.75},0).wait(1).to({x:331.9},0).wait(1).to({x:332.05},0).wait(1).to({x:332.2},0).wait(1).to({x:332.35},0).wait(1).to({x:332.5},0).wait(1).to({x:332.65},0).wait(1).to({x:332.8},0).wait(1).to({x:332.95},0).wait(1).to({x:332.8},0).wait(1).to({x:332.65},0).wait(1).to({x:332.5},0).wait(1).to({x:332.35},0).wait(1).to({x:332.2},0).wait(1).to({x:332.05},0).wait(1).to({x:331.9},0).wait(1).to({x:331.75},0).wait(1).to({x:331.65},0).wait(1).to({x:331.5},0).wait(1).to({x:331.35},0).wait(1).to({x:331.2},0).wait(1).to({x:331.05},0).wait(1).to({x:330.9},0).wait(1).to({x:330.75},0).wait(1).to({x:330.6},0).wait(1).to({x:330.5},0).wait(1).to({x:330.35},0).wait(1).to({x:330.2},0).wait(1).to({x:330.05},0).wait(1).to({x:329.9},0).wait(1).to({x:329.75},0).wait(1).to({x:329.6},0).wait(1).to({x:329.45},0).wait(1).to({x:329.35},0).wait(1).to({x:329.2},0).wait(1).to({x:329.05},0).wait(1).to({x:328.9},0).wait(1).to({x:328.75},0).wait(1).to({x:328.6},0).wait(1).to({x:328.45},0).wait(1).to({x:328.3},0).wait(1).to({x:328.2},0).wait(1).to({x:328.05},0).wait(1).to({x:327.9},0).wait(1).to({x:327.75},0).wait(1).to({x:327.6},0).wait(1).to({x:327.45},0).wait(1).to({x:327.3},0).wait(1).to({x:327.15},0).wait(1).to({x:327.05},0).wait(1).to({x:326.9},0).wait(1).to({x:326.75},0).wait(1).to({x:326.6},0).wait(1).to({x:326.45},0).wait(1).to({x:326.3},0).wait(1).to({x:326.15},0).wait(1).to({x:326},0).wait(1).to({x:325.85},0).wait(1).to({x:325.75},0).wait(1).to({x:325.6},0).wait(1).to({x:325.45},0).wait(1).to({x:325.3},0).wait(1).to({x:325.15},0).wait(1).to({x:325},0).wait(1).to({x:324.85},0).wait(1).to({x:324.7},0).wait(1).to({x:324.6},0).wait(1).to({x:324.45},0).wait(1).to({x:324.3},0).wait(1).to({x:324.15},0).wait(1).to({x:324},0).wait(1).to({x:323.85},0).wait(1).to({x:323.7},0).wait(1).to({x:323.55},0).wait(1).to({x:323.45},0).wait(1).to({x:323.3},0).wait(1).to({x:323.15},0).wait(1).to({x:323},0).wait(1).to({x:322.85},0).wait(1).to({x:322.7},0).wait(1).to({x:322.55},0).wait(1).to({x:322.4},0).wait(1).to({x:322.3},0).wait(1).to({x:322.15},0).wait(1).to({x:322},0).wait(1).to({x:321.85},0).wait(1).to({x:321.7},0).wait(1).to({x:321.55},0).wait(1).to({x:321.4},0).wait(1).to({x:321.25},0).wait(1).to({x:321.15},0).wait(1).to({x:321},0).wait(1).to({x:320.85},0).wait(1).to({x:320.7},0).wait(1).to({x:320.55},0).wait(1).to({x:320.4},0).wait(1).to({x:320.25},0).wait(1).to({x:320.1},0).wait(1).to({x:320},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,640,347.5,640);
// library properties:
lib.properties = {
	id: '6AE400799C90314DAE9CEC3A30CD19B2',
	width: 640,
	height: 1280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"effectcjs/title/images/cloud1.png", id:"cloud1"},
		{src:"effectcjs/title/images/cloud2.png", id:"cloud2"},
		{src:"effectcjs/title/images/cloud3.png", id:"cloud3"},
		{src:"effectcjs/title/images/cloud4.png", id:"cloud4"},
		{src:"effectcjs/title/images/logo.png", id:"logo"},
		{src:"effectcjs/title/images/mushi.png", id:"mushi"},
		{src:"effectcjs/title/images/title_front.png", id:"title_front"}
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
an.compositions['6AE400799C90314DAE9CEC3A30CD19B2'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;