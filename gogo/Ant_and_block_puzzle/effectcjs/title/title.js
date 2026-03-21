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



(lib.ant = function() {
	this.initialize(img.ant);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,65);


(lib.bg_0 = function() {
	this.initialize(img.bg_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1280);


(lib.c = function() {
	this.initialize(img.c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,28);


(lib.d1 = function() {
	this.initialize(img.d1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,280);


(lib.d1_1 = function() {
	this.initialize(img.d1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,278);


(lib.d2 = function() {
	this.initialize(img.d2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,270);


(lib.d3 = function() {
	this.initialize(img.d3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,125);


(lib.d4 = function() {
	this.initialize(img.d4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,240);


(lib.eye = function() {
	this.initialize(img.eye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,26);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,524,244);// helper functions:

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


(lib.eye_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.eye();
	this.instance.setTransform(-19.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_1, new cjs.Rectangle(-19.5,-13,39,26), null);


(lib.ピクセルレイヤー = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg_0();
	this.instance.setTransform(-320,-639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ピクセルレイヤー, new cjs.Rectangle(-320,-639,640,1280), null);


(lib.d4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.d4();
	this.instance.setTransform(-67.5,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d4_1, new cjs.Rectangle(-67.5,-120,135,240), null);


(lib.d3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.d3();
	this.instance.setTransform(-78,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d3_1, new cjs.Rectangle(-78,-62.5,156,125), null);


(lib.d2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.d2();
	this.instance.setTransform(-126,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d2_1, new cjs.Rectangle(-126,-135,252,270), null);


(lib.d1_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.d1();
	this.instance.setTransform(-144,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1_2, new cjs.Rectangle(-144,-140,288,280), null);


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
	this.instance = new lib.eye_1();
	this.instance.setTransform(19.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル5, new cjs.Rectangle(0,0,39,26), null);


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

	// レイヤー_2
	this.instance = new lib.d3_1();
	this.instance.setTransform(78,62.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEE1CE").s().p("AhGAeQgHAAgEgGIgBgDIgCgEQgCgHAFgGQADgEAHgBIAEgCQAXgHAugIIAigIIAYgDQAMgBAFACQAGADABAHQACAGgEAGIgFAFIgCABQgEACgIABIgjAIIgqAHQgZAEgQAGQgJACgEAAIgCAAg");
	this.shape.setTransform(69.9055,3.4143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6E3CD").s().p("ADABFIgEAAIgBAAQgDABgJgFIgZgPIgBAAIgEAAQABAEgBADQgCADgEACIgCABQgFAAgFgDIgXgRIgCAAQgGgCgBgFIgEgCIgBgCIgDgCQgIgEgNgFIgWgIQgMgEgOgGIgNgEIgFgEQgCgCgBgDIgHABQhSgDgjACIgKgBQgFgCgBgGQAAgGAEgDIADgBQABgDACgCQgMAAgLABQgIABgDgBQgEgCgBgEIgIgBQgKgBgDgCIgDgEQgFAAgDgCQgFgCAAgHQAAgFAGgDIAIgBIABAAIADgDIAHgBIAHABIAKACIAVABIAaAEIACAAIAJAAQAkABAhAHQAEAAAGAAQAOACAiALQAtAPAXAJQAlAPAbARIAVAQIAWAPQALAFADAFQADAEgBAFQAAAFgEACIgEABQgEAAgFgDg");
	this.shape_1.setTransform(117.4036,7.3755);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEE7C3").s().p("AiyBMQgGgBgCgFQgCgFAEgGIAHgGQAKgGALgJIAJgHIACgCIAJgHIATgLIAIgFQALgGAPgFIAFgCQAmgSAdgJQAWgHAagFQBtgXApgHQgGADgDADQgFAHACAHIABAEQguAIhTARIgKADQADAFgEAFQgDADgIACIgTAGIgGABIgQADIgGACIgDABIgCABIgCABQgCADgDgBIgGAEQgCABgEAAIgJADIgmAQIgFACQgEABgDgCIgXAMIgGADIAAAAIgiAZQgFAEgEAAIgBgBg");
	this.shape_2.setTransform(43.9525,10.8528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル4, new cjs.Rectangle(0,-0.1,156,125), null);


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

	// レイヤー_2
	this.instance = new lib.d4_1();
	this.instance.setTransform(67.5,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル3, new cjs.Rectangle(0,0,135,240), null);


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

	// レイヤー_2
	this.instance = new lib.d2_1();
	this.instance.setTransform(126,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル2, new cjs.Rectangle(0,0,252,270), null);


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

	// MergedLayer_1
	this.instance = new lib.d1_2();
	this.instance.setTransform(144,138);

	this.instance_1 = new lib.d1_1();
	this.instance_1.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,-2,314,280), null);


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

	// rogo
	this.instance = new lib.logo();
	this.instance.setTransform(70,389);

	this.instance_1 = new lib.c();
	this.instance_1.setTransform(251,990);

	this.instance_2 = new lib.ant();
	this.instance_2.setTransform(413,654);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(105));

	// 触角
	this.instance_3 = new lib.シンボル5();
	this.instance_3.setTransform(449.4,661.35,1,1,-9.9999,0,0,19.1,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:19.5,regY:13,rotation:-9.1489,x:447.45,y:646.95},0).wait(1).to({rotation:-8.2979,x:447.7,y:646.9},0).wait(1).to({rotation:-7.4468,x:447.9,y:646.85},0).wait(1).to({rotation:-6.5957,x:448.1,y:646.8},0).wait(1).to({rotation:-5.7447,x:448.3,y:646.85},0).wait(1).to({rotation:-4.8936,x:448.55,y:646.8},0).wait(1).to({rotation:-4.0426,x:448.7},0).wait(1).to({rotation:-3.1915,x:448.9},0).wait(1).to({rotation:-2.3404,x:449.2},0).wait(1).to({rotation:-1.4894,x:449.4},0).wait(1).to({rotation:-0.6383,x:449.6},0).wait(1).to({rotation:0.2128,x:449.8},0).wait(1).to({rotation:1.0638,x:450},0).wait(1).to({rotation:1.9149,x:450.25,y:646.85},0).wait(1).to({rotation:2.766,x:450.45},0).wait(1).to({rotation:3.617,x:450.7},0).wait(1).to({rotation:4.4681,x:450.9},0).wait(1).to({rotation:5.3191,x:451.1,y:646.9},0).wait(1).to({rotation:6.1702,x:451.35},0).wait(1).to({rotation:7.0213,x:451.5,y:647},0).wait(1).to({rotation:7.8723,x:451.7},0).wait(1).to({rotation:8.7234,x:451.95,y:647.05},0).wait(1).to({rotation:9.5745,x:452.2},0).wait(1).to({rotation:10.4255,x:452.4,y:647.15},0).wait(1).to({rotation:11.2766,x:452.55},0).wait(1).to({rotation:12.1277,x:452.75,y:647.2},0).wait(1).to({rotation:12.9787,x:453,y:647.25},0).wait(1).to({rotation:13.8298,x:453.25,y:647.3},0).wait(1).to({rotation:14.6809,x:453.4,y:647.4},0).wait(1).to({rotation:15.5319,x:453.6,y:647.45},0).wait(1).to({rotation:16.383,x:453.85,y:647.5},0).wait(1).to({rotation:17.234,x:454,y:647.6},0).wait(1).to({rotation:18.0851,x:454.25,y:647.65},0).wait(1).to({rotation:18.9362,x:454.45,y:647.75},0).wait(1).to({rotation:19.7872,x:454.65,y:647.8},0).wait(1).to({rotation:20.6383,x:454.85,y:647.85},0).wait(1).to({rotation:21.4894,x:455.05,y:648},0).wait(1).to({rotation:22.3404,x:455.25},0).wait(1).to({rotation:23.1915,x:455.45,y:648.15},0).wait(1).to({rotation:24.0426,x:455.6,y:648.2},0).wait(1).to({rotation:24.8936,x:455.85,y:648.35},0).wait(1).to({rotation:25.7447,x:456,y:648.4},0).wait(1).to({rotation:26.5957,x:456.25,y:648.55},0).wait(1).to({rotation:27.4468,x:456.4,y:648.65},0).wait(1).to({rotation:28.2979,x:456.55,y:648.75},0).wait(1).to({rotation:29.1489,x:456.75,y:648.85},0).wait(1).to({rotation:30,x:456.95,y:648.95},0).wait(1).to({rotation:29.2982,x:456.8,y:648.9},0).wait(1).to({rotation:28.5965,x:456.65,y:648.8},0).wait(1).to({rotation:27.8947,x:456.5,y:648.7},0).wait(1).to({rotation:27.193,x:456.35,y:648.6},0).wait(1).to({rotation:26.4912,x:456.2,y:648.55},0).wait(1).to({rotation:25.7895,x:456,y:648.45},0).wait(1).to({rotation:25.0877,x:455.85,y:648.3},0).wait(1).to({rotation:24.386,x:455.7},0).wait(1).to({rotation:23.6842,x:455.55,y:648.2},0).wait(1).to({rotation:22.9825,x:455.35,y:648.1},0).wait(1).to({rotation:22.2807,x:455.2},0).wait(1).to({rotation:21.5789,x:455.05,y:647.95},0).wait(1).to({rotation:20.8772,x:454.85,y:647.9},0).wait(1).to({rotation:20.1754,x:454.7,y:647.85},0).wait(1).to({rotation:19.4737,x:454.55,y:647.75},0).wait(1).to({rotation:18.7719,x:454.35,y:647.7},0).wait(1).to({rotation:18.0702,x:454.25,y:647.65},0).wait(1).to({rotation:17.3684,x:454.05,y:647.55},0).wait(1).to({rotation:16.6667,x:453.9},0).wait(1).to({rotation:15.9649,x:453.7,y:647.45},0).wait(1).to({rotation:15.2632,x:453.55},0).wait(1).to({rotation:14.5614,x:453.4,y:647.4},0).wait(1).to({rotation:13.8596,x:453.25,y:647.3},0).wait(1).to({rotation:13.1579,x:453.05},0).wait(1).to({rotation:12.4561,x:452.9,y:647.25},0).wait(1).to({rotation:11.7544,x:452.7,y:647.2},0).wait(1).to({rotation:11.0526,x:452.55,y:647.15},0).wait(1).to({rotation:10.3509,x:452.35,y:647.1},0).wait(1).to({rotation:9.6491,x:452.15,y:647.05},0).wait(1).to({rotation:8.9474,x:452},0).wait(1).to({rotation:8.2456,x:451.85,y:647},0).wait(1).to({rotation:7.5439,x:451.7},0).wait(1).to({rotation:6.8421,x:451.45,y:646.95},0).wait(1).to({rotation:6.1404,x:451.3},0).wait(1).to({rotation:5.4386,x:451.1,y:646.9},0).wait(1).to({rotation:4.7368,x:451,y:646.85},0).wait(1).to({rotation:4.0351,x:450.8},0).wait(1).to({rotation:3.3333,x:450.6,y:646.9},0).wait(1).to({rotation:2.6316,x:450.45,y:646.85},0).wait(1).to({rotation:1.9298,x:450.25,y:646.8},0).wait(1).to({rotation:1.2281,x:450.05},0).wait(1).to({rotation:0.5263,x:449.9,y:646.85},0).wait(1).to({rotation:-0.1754,x:449.75,y:646.8},0).wait(1).to({rotation:-0.8772,x:449.55},0).wait(1).to({rotation:-1.5789,x:449.35},0).wait(1).to({rotation:-2.2807,x:449.2},0).wait(1).to({rotation:-2.9825,x:449,y:646.85},0).wait(1).to({rotation:-3.6842,x:448.85,y:646.8},0).wait(1).to({rotation:-4.386,x:448.65},0).wait(1).to({rotation:-5.0877,x:448.45},0).wait(1).to({rotation:-5.7895,x:448.3,y:646.85},0).wait(1).to({rotation:-6.4912,x:448.05},0).wait(1).to({rotation:-7.193,x:447.95},0).wait(1).to({rotation:-7.8947,x:447.75,y:646.9},0).wait(1).to({rotation:-8.5965,x:447.6},0).wait(1).to({rotation:-9.2982,x:447.4,y:646.95},0).wait(1).to({rotation:-10,x:447.2,y:646.9},0).wait(1));

	// シンボル_1
	this.instance_4 = new lib.シンボル1();
	this.instance_4.setTransform(496,996,1,1,0,0,0,144,139);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:157,regY:138,x:509,y:995},0).wait(40).to({rotation:1.25,y:995.2},0).wait(1).to({rotation:2.5,x:509.05,y:995.55},0).wait(1).to({rotation:3.75,x:508.95,y:995.8},0).wait(1).to({rotation:5,x:509,y:996.1},0).wait(1).to({rotation:2.5,x:509.05,y:995.55},0).wait(1).to({rotation:0,x:509,y:995},0).wait(1).to({rotation:-2.5,x:508.9,y:994.4},0).wait(1).to({rotation:-5,x:508.85,y:993.8},0).wait(1).to({rotation:-2.75,y:994.35},0).wait(1).to({rotation:-0.5,x:508.95,y:994.9},0).wait(1).to({rotation:1.75,x:509.05,y:995.4},0).wait(1).to({rotation:4,x:508.95,y:995.85},0).wait(1).to({rotation:2.6667,x:509.05,y:995.6},0).wait(1).to({rotation:1.3333,x:509,y:995.25},0).wait(1).to({rotation:0,y:995},0).wait(50));

	// シンボル_2
	this.instance_5 = new lib.シンボル2();
	this.instance_5.setTransform(126,813.5,1,1,0,0,0,126,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:135,y:814},0).wait(13).to({scaleY:0.9917,y:814.8},0).wait(1).to({scaleY:0.9833,y:815.65},0).wait(1).to({scaleY:0.975,y:816.45},0).wait(1).to({scaleY:0.9667,y:817.3},0).wait(1).to({scaleY:0.9583,y:818.1},0).wait(1).to({scaleY:0.95,y:818.95},0).wait(1).to({scaleY:0.9794,y:812.85},0).wait(1).to({scaleY:1.0089,y:806.8},0).wait(1).to({scaleY:1.0383,y:800.7},0).wait(1).to({scaleY:1.0678,y:794.7},0).wait(1).to({scaleY:1.0972,y:788.6},0).wait(1).to({scaleY:1.1267,y:782.55},0).wait(1).to({scaleY:1.0939,y:789.8},0).wait(1).to({scaleY:1.0611,y:797.1},0).wait(1).to({scaleY:1.0284,y:804.4},0).wait(1).to({scaleY:0.9956,y:811.65},0).wait(1).to({scaleY:0.9628,y:818.95},0).wait(1).to({scaleY:0.9703,y:816.3},0).wait(1).to({scaleY:0.9777,y:813.6},0).wait(1).to({scaleY:0.9851,y:810.95},0).wait(1).to({scaleY:0.9926,y:808.25},0).wait(1).to({scaleY:1,y:805.6},0).wait(1).to({y:807.25},0).wait(1).to({y:808.95},0).wait(1).to({y:810.6},0).wait(1).to({y:812.3},0).wait(1).to({y:814},0).wait(65));

	// シンボル_3
	this.instance_6 = new lib.シンボル3();
	this.instance_6.setTransform(67.5,609.5,1,1,0,0,0,67.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:120,y:613},0).wait(104));

	// シンボル_4
	this.instance_7 = new lib.シンボル4();
	this.instance_7.setTransform(562,422,1,1,0,0,0,78,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:62.4,y:421.5},0).wait(56).to({scaleY:0.9832,y:422.55},0).wait(1).to({scaleY:0.9664,y:423.6},0).wait(1).to({scaleY:0.9496,y:424.65},0).wait(1).to({scaleY:0.9328,y:425.7},0).wait(1).to({scaleY:0.9774,y:421.95},0).wait(1).to({scaleY:1.022,y:418.2},0).wait(1).to({scaleY:1.0666,y:414.45},0).wait(1).to({scaleY:1.1112,y:410.7},0).wait(1).to({scaleY:1.1558,y:406.9},0).wait(1).to({scaleY:1.2004,y:403.15},0).wait(1).to({scaleY:1.1577,y:406.7},0).wait(1).to({scaleY:1.115,y:410.2},0).wait(1).to({scaleY:1.0724,y:413.7},0).wait(1).to({scaleY:1.0297,y:417.2},0).wait(1).to({scaleY:0.987,y:420.7},0).wait(1).to({scaleY:0.9443,y:424.25},0).wait(1).to({scaleY:0.9017,y:427.7},0).wait(1).to({scaleY:0.9213,y:426.5},0).wait(1).to({scaleY:0.941,y:425.2},0).wait(1).to({scaleY:0.9607,y:424},0).wait(1).to({scaleY:0.9803,y:422.7},0).wait(1).to({scaleY:1,y:421.5},0).wait(27));

	// レイヤー_20
	this.instance_8 = new lib.ピクセルレイヤー();
	this.instance_8.setTransform(320,640);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,641,357.6,640);
// library properties:
lib.properties = {
	id: '374EEDB8F37C1D4E8B4870686CD83AA1',
	width: 640,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/title/images/ant.png?1667181729652", id:"ant"},
		{src:"./effectcjs/title/images/bg_0.png?1667181729652", id:"bg_0"},
		{src:"./effectcjs/title/images/d1.png?1667181729652", id:"d1"},
		{src:"./effectcjs/title/images/d1_1.png?1667181729652", id:"d1_1"},
		{src:"./effectcjs/title/images/d2.png?1667181729652", id:"d2"},
		{src:"./effectcjs/title/images/d3.png?1667181729652", id:"d3"},
		{src:"./effectcjs/title/images/d4.png?1667181729652", id:"d4"},
		{src:"./effectcjs/title/images/eye.png?1667181729652", id:"eye"},
		{src:"./effectcjs/title/images/logo.png?1667181729652", id:"logo"}
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
an.compositions['374EEDB8F37C1D4E8B4870686CD83AA1'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;