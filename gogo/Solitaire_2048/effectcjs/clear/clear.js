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



(lib.clear_card = function() {
	this.initialize(img.clear_card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,322);


(lib.clear_card_back = function() {
	this.initialize(img.clear_card_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,322);// helper functions:

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEB579").s().p("Ag1CZIAAkxIBrAAIAAExg");
	this.shape.setTransform(5.35,15.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow, new cjs.Rectangle(0,0,10.7,30.7), null);


(lib.white = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEED3").s().p("Ag1CZIAAkxIBqAAIAAExg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-15.3,10.7,30.700000000000003);


(lib.red = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF5C50").s().p("Ag1CZIAAkxIBrAAIAAExg");
	this.shape.setTransform(5.35,15.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(0,0,10.7,30.7), null);


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

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F98A9D").s().p("Ag1CZIAAkxIBrAAIAAExg");
	this.shape.setTransform(5.35,15.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pink, new cjs.Rectangle(0,0,10.7,30.7), null);


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

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BB49E").s().p("Ag1CZIAAkxIBrAAIAAExg");
	this.shape.setTransform(5.35,15.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(0,0,10.7,30.7), null);


(lib.clear_card_sin = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.clear_card();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clear_card_sin, new cjs.Rectangle(0,0,246,322), null);


(lib.clear_card_back_sin = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.clear_card_back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clear_card_back_sin, new cjs.Rectangle(0,0,246,322), null);


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

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#337BAA").s().p("Ag1CZIAAkxIBrAAIAAExg");
	this.shape.setTransform(5.35,15.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(0,0,10.7,30.7), null);


(lib.card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_3
	this.instance = new lib.clear_card_sin();
	this.instance.setTransform(2.9,0.05,0.0163,1,0,0,0,107.6,161);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:123,scaleX:0.1147},0).wait(1).to({scaleX:0.2131,x:2.6},0).wait(1).to({scaleX:0.3115,x:2.35},0).wait(1).to({scaleX:0.4099,x:2.05},0).wait(1).to({scaleX:0.5083,x:1.8},0).wait(1).to({scaleX:0.6067,x:1.55},0).wait(1).to({scaleX:0.7052,x:1.25},0).wait(1).to({scaleX:0.8036,x:1},0).wait(1).to({scaleX:0.902,x:0.7},0).wait(1).to({scaleX:1.0004,x:0.45,y:0},0).wait(35));

	// レイヤー_2
	this.instance_1 = new lib.clear_card_back_sin();
	this.instance_1.setTransform(0,0,1,1,0,0,0,123,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({scaleX:0.9004},0).wait(1).to({scaleX:0.8009},0).wait(1).to({scaleX:0.7013},0).wait(1).to({scaleX:0.6018},0).wait(1).to({scaleX:0.5022},0).wait(1).to({scaleX:0.4027,x:0.05},0).wait(1).to({scaleX:0.3031},0).wait(1).to({scaleX:0.2036},0).wait(1).to({scaleX:0.104},0).wait(1).to({scaleX:0.0045,x:0},0).wait(1).to({scaleX:0.104,x:0.05},0).wait(1).to({scaleX:0.2036},0).wait(1).to({scaleX:0.3031},0).wait(1).to({scaleX:0.4027},0).wait(1).to({scaleX:0.5023},0).wait(1).to({scaleX:0.6018,x:0},0).wait(1).to({scaleX:0.7014},0).wait(1).to({scaleX:0.8009},0).wait(1).to({scaleX:0.9005},0).wait(1).to({scaleX:1},0).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-161,246.5,322.1);


(lib.b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_3
	this.instance = new lib.green();
	this.instance.setTransform(-142.75,469.35,1,1,29.9992,0,0,6.2,14.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:5.3,regY:15.3,rotation:44.1817,x:-15.65,y:368.9},0).wait(1).to({rotation:58.3642,x:32.5,y:331.8},0).wait(1).to({rotation:72.5467,x:67.95,y:305.9},0).wait(1).to({rotation:86.7292,x:96.9,y:285.95},0).wait(1).to({rotation:100.9117,x:122,y:270.15},0).wait(1).to({rotation:115.0943,x:144.3,y:257.4},0).wait(1).to({rotation:129.2768,x:164.55,y:247.1},0).wait(1).to({rotation:143.4593,x:183.3,y:238.9},0).wait(1).to({rotation:157.6418,x:200.8,y:232.45},0).wait(1).to({rotation:171.8243,x:217.25,y:227.65},0).wait(1).to({rotation:186.0068,x:232.9,y:224.2},0).wait(1).to({rotation:200.1893,x:247.8,y:222.05},0).wait(1).to({rotation:214.3718,x:262,y:221},0).wait(1).to({rotation:228.5543,x:275.65,y:221.15},0).wait(1).to({rotation:242.7368,x:288.85,y:222.2},0).wait(1).to({rotation:256.9193,x:301.65,y:224.2},0).wait(1).to({rotation:271.1018,x:314.05,y:227},0).wait(1).to({rotation:285.2844,x:326.2,y:230.6},0).wait(1).to({rotation:299.4669,x:338.05,y:234.95},0).wait(1).to({rotation:313.6494,x:349.75,y:239.9},0).wait(1).to({rotation:327.8319,x:361.35,y:245.65},0).wait(1).to({rotation:342.0144,x:372.8,y:252},0).wait(1).to({rotation:356.1969,x:384.3,y:259},0).wait(1).to({rotation:370.3794,x:395.75,y:266.65},0).wait(1).to({rotation:384.5619,x:407.2,y:274.9},0).wait(1).to({rotation:398.7444,x:418.8,y:283.85},0).wait(1).to({rotation:412.9269,x:430.5,y:293.4},0).wait(1).to({rotation:427.1094,x:442.25,y:303.7,alpha:0.875},0).wait(1).to({rotation:441.2919,x:454.2,y:314.6,alpha:0.75},0).wait(1).to({rotation:455.4745,x:466.25,y:326.25,alpha:0.625},0).wait(1).to({rotation:469.657,x:478.45,y:338.6,alpha:0.5},0).wait(1).to({rotation:483.8395,x:490.75,y:351.7,alpha:0.375},0).wait(1).to({rotation:498.022,x:503.2,y:365.5,alpha:0.25},0).wait(1).to({rotation:512.2045,x:515.75,y:380,alpha:0.125},0).wait(1).to({rotation:526.387,x:528.5,y:395.3,alpha:0},0).wait(1));

	// レイヤー_2_コピー_コピー_コピー_コピー
	this.instance_1 = new lib.pink();
	this.instance_1.setTransform(-133.15,396.2,1,1,0,0,0,5.4,15.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:5.3,rotation:15.0396,x:159.25,y:208.45},0).wait(1).to({rotation:30.0793,x:224.4,y:180.35},0).wait(1).to({rotation:45.1189,x:267.7,y:166.65},0).wait(1).to({rotation:60.1585,x:300.95,y:159.55},0).wait(1).to({rotation:75.1981,x:328.15,y:156.25},0).wait(1).to({rotation:90.2378,x:351.4,y:155.55},0).wait(1).to({rotation:105.2774,x:371.7,y:156.6},0).wait(1).to({rotation:120.317,x:389.8,y:159.1},0).wait(1).to({rotation:135.3567,x:406.25,y:162.5},0).wait(1).to({rotation:150.3963,x:421.2,y:166.85},0).wait(1).to({rotation:165.4359,x:434.95,y:171.9},0).wait(1).to({rotation:180.4755,x:447.85,y:177.5},0).wait(1).to({rotation:195.5152,x:459.8,y:183.6},0).wait(1).to({rotation:210.5548,x:471.05,y:190.05},0).wait(1).to({rotation:225.5944,x:481.7,y:196.95},0).wait(1).to({rotation:240.6341,x:491.7,y:204.2},0).wait(1).to({rotation:255.6737,x:501.2,y:211.6},0).wait(1).to({rotation:270.7133,x:510.3,y:219.35},0).wait(1).to({rotation:285.7529,x:519.05,y:227.25},0).wait(1).to({rotation:300.7926,x:527.3,y:235.4},0).wait(1).to({rotation:315.8322,x:535.3,y:243.65},0).wait(1).to({rotation:330.8718,x:543,y:252.1},0).wait(1).to({rotation:345.9115,x:550.4,y:260.75},0).wait(1).to({rotation:360.9511,x:557.55,y:269.5},0).wait(1).to({rotation:375.9907,x:564.5,y:278.3},0).wait(1).to({rotation:391.0303,x:571.15,y:287.3},0).wait(1).to({rotation:406.07,x:577.75,y:296.3},0).wait(1).to({rotation:421.1096,x:584,y:305.5,alpha:0.875},0).wait(1).to({rotation:436.1492,x:590.15,y:314.75,alpha:0.75},0).wait(1).to({rotation:451.1889,x:596.15,y:324.1,alpha:0.625},0).wait(1).to({rotation:466.2285,x:601.95,y:333.5,alpha:0.5},0).wait(1).to({rotation:481.2681,x:607.65,y:343,alpha:0.375},0).wait(1).to({rotation:496.3077,x:613.2,y:352.55,alpha:0.25},0).wait(1).to({rotation:511.3474,x:618.6,y:362.15,alpha:0.125},0).wait(1).to({rotation:526.387,x:623.9,y:371.9,alpha:0},0).to({_off:true},1).wait(2));

	// レイヤー_2_コピー_コピー_コピー
	this.instance_2 = new lib.blue();
	this.instance_2.setTransform(-86.6,453.35,1,1,0,0,0,5.4,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:5.3,rotation:13,x:136.7,y:288.4},0).wait(1).to({rotation:26,x:190.45,y:260.45},0).wait(1).to({rotation:39,x:227.5,y:246.05},0).wait(1).to({rotation:52,x:256.85,y:237.8},0).wait(1).to({rotation:65,x:281.5,y:233.35},0).wait(1).to({rotation:78,x:303,y:231.5},0).wait(1).to({rotation:91,x:322.25,y:231.4},0).wait(1).to({rotation:104,x:339.75,y:232.7},0).wait(1).to({rotation:117,x:355.9,y:235.1},0).wait(1).to({rotation:130,x:370.95,y:238.45},0).wait(1).to({rotation:143,x:385,y:242.6},0).wait(1).to({rotation:156,x:398.35,y:247.25},0).wait(1).to({rotation:169,x:411,y:252.55},0).wait(1).to({rotation:182,x:423.05,y:258.25},0).wait(1).to({rotation:195,x:434.6,y:264.4},0).wait(1).to({rotation:208,x:445.65,y:270.95},0).wait(1).to({rotation:221,x:456.35,y:277.75},0).wait(1).to({rotation:234,x:466.7,y:284.9},0).wait(1).to({rotation:247,x:476.65,y:292.3},0).wait(1).to({rotation:260,x:486.3,y:300},0).wait(1).to({rotation:273,x:495.75,y:307.8},0).wait(1).to({rotation:286,x:504.85,y:315.85},0).wait(1).to({rotation:299,x:513.75,y:324.1},0).wait(1).to({rotation:312,x:522.45,y:332.5},0).wait(1).to({rotation:325,x:531,y:341.1},0).wait(1).to({rotation:338,x:539.3,y:349.75},0).wait(1).to({rotation:351,x:547.45,y:358.55},0).wait(1).to({rotation:364,x:555.5,y:367.55,alpha:0.875},0).wait(1).to({rotation:377,x:563.3,y:376.65,alpha:0.75},0).wait(1).to({rotation:390,x:571.05,y:385.8,alpha:0.625},0).wait(1).to({rotation:403,x:578.6,y:395.1,alpha:0.5},0).wait(1).to({rotation:416,x:586.05,y:404.5,alpha:0.375},0).wait(1).to({rotation:429,x:593.4,y:414,alpha:0.25},0).wait(1).to({rotation:442,x:600.7,y:423.6,alpha:0.125},0).wait(1).to({rotation:455,x:607.85,y:433.2,alpha:0},0).to({_off:true},1).wait(5));

	// レイヤー_2_コピー_コピー
	this.instance_3 = new lib.red();
	this.instance_3.setTransform(-176.3,504.75,1,1,29.9992,0,0,6,14.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:5.3,regY:15.3,rotation:44.1817,x:-97.05,y:449.4},0).wait(1).to({rotation:58.3642,x:-54.6,y:426.35},0).wait(1).to({rotation:72.5467,x:-19.05,y:409.3},0).wait(1).to({rotation:86.7292,x:12.4,y:395.6},0).wait(1).to({rotation:100.9117,x:41.35,y:384.25},0).wait(1).to({rotation:115.0943,x:68.05,y:374.7},0).wait(1).to({rotation:129.2768,x:93.1,y:366.65},0).wait(1).to({rotation:143.4593,x:116.7,y:359.8},0).wait(1).to({rotation:157.6418,x:139,y:354.1},0).wait(1).to({rotation:171.8243,x:160,y:349.45},0).wait(1).to({rotation:186.0068,x:180.05,y:345.65},0).wait(1).to({rotation:200.1893,x:199.05,y:342.65},0).wait(1).to({rotation:214.3718,x:217.05,y:340.4},0).wait(1).to({rotation:228.5543,x:234.1,y:338.85},0).wait(1).to({rotation:242.7368,x:250.25,y:337.95},0).wait(1).to({rotation:256.9193,x:265.65,y:337.6},0).wait(1).to({rotation:271.1018,x:280.25,y:337.8},0).wait(1).to({rotation:285.2844,x:294.05,y:338.5},0).wait(1).to({rotation:299.4669,x:307.1,y:339.65},0).wait(1).to({rotation:313.6494,x:319.55,y:341.2},0).wait(1).to({rotation:327.8319,x:331.35,y:343.25},0).wait(1).to({rotation:342.0144,x:342.45,y:345.65},0).wait(1).to({rotation:356.1969,x:353.05,y:348.45},0).wait(1).to({rotation:370.3794,x:363.05,y:351.65},0).wait(1).to({rotation:384.5619,x:372.55,y:355.2},0).wait(1).to({rotation:398.7444,x:381.55,y:359.15},0).wait(1).to({rotation:412.9269,x:390.1,y:363.55},0).wait(1).to({rotation:427.1094,x:398.1,y:368.35,alpha:0.875},0).wait(1).to({rotation:441.2919,x:405.75,y:373.5,alpha:0.75},0).wait(1).to({rotation:455.4745,x:412.8,y:379.15,alpha:0.625},0).wait(1).to({rotation:469.657,x:419.45,y:385.2,alpha:0.5},0).wait(1).to({rotation:483.8395,x:425.65,y:391.7,alpha:0.375},0).wait(1).to({rotation:498.022,x:431.3,y:398.65,alpha:0.25},0).wait(1).to({rotation:512.2045,x:436.5,y:406,alpha:0.125},0).wait(1).to({rotation:526.387,x:441.2,y:413.9,alpha:0},0).wait(1));

	// レイヤー_2_コピー
	this.instance_4 = new lib.yellow();
	this.instance_4.setTransform(-32.9,460.2,1,1,0,0,0,5.4,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(1).to({regX:5.3,rotation:15.0396,x:127.45,y:308.7},0).wait(1).to({rotation:30.0793,x:178.9,y:268.4},0).wait(1).to({rotation:45.1189,x:216,y:242.75},0).wait(1).to({rotation:60.1585,x:245.85,y:224.6},0).wait(1).to({rotation:75.1981,x:271,y:211.2},0).wait(1).to({rotation:90.2378,x:293,y:201.25},0).wait(1).to({rotation:105.2774,x:312.4,y:193.7},0).wait(1).to({rotation:120.317,x:329.9,y:188.3},0).wait(1).to({rotation:135.3567,x:345.85,y:184.4},0).wait(1).to({rotation:150.3963,x:360.45,y:181.95},0).wait(1).to({rotation:165.4359,x:373.85,y:180.7},0).wait(1).to({rotation:180.4755,x:386.3,y:180.45},0).wait(1).to({rotation:195.5152,x:397.85,y:181.1},0).wait(1).to({rotation:210.5548,x:408.7,y:182.5},0).wait(1).to({rotation:225.5944,x:418.8,y:184.65},0).wait(1).to({rotation:240.6341,x:428.25,y:187.45},0).wait(1).to({rotation:255.6737,x:437.1,y:190.8},0).wait(1).to({rotation:270.7133,x:445.5,y:194.7},0).wait(1).to({rotation:285.7529,x:453.45,y:199.05},0).wait(1).to({rotation:300.7926,x:460.85,y:203.9},0).wait(1).to({rotation:315.8322,x:467.9,y:209.1},0).wait(1).to({rotation:330.8718,x:474.65,y:214.7},0).wait(1).to({rotation:345.9115,x:480.9,y:220.75},0).wait(1).to({rotation:360.9511,x:486.95,y:227.05},0).wait(1).to({rotation:375.9907,x:492.65,y:233.65},0).wait(1).to({rotation:391.0303,x:498,y:240.65},0).wait(1).to({rotation:406.07,x:503.2,y:247.8},0).wait(1).to({rotation:421.1096,x:508,y:255.35,alpha:0.875},0).wait(1).to({rotation:436.1492,x:512.65,y:263.05,alpha:0.75},0).wait(1).to({rotation:451.1889,x:517.05,y:271.05,alpha:0.625},0).wait(1).to({rotation:466.2285,x:521.2,y:279.25,alpha:0.5},0).wait(1).to({rotation:481.2681,x:525.15,y:287.7,alpha:0.375},0).wait(1).to({rotation:496.3077,x:528.95,y:296.35,alpha:0.25},0).wait(1).to({rotation:511.3474,x:532.5,y:305.2,alpha:0.125},0).wait(1).to({rotation:526.387,x:535.9,y:314.3,alpha:0},0).to({_off:true},1).wait(2));

	// レイヤー_2
	this.instance_5 = new lib.white("synched",0);
	this.instance_5.setTransform(-85.3,373.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:15.0396,x:125.335,y:196.9057},0).wait(1).to({rotation:30.0793,x:185.5602,y:158.3098},0).wait(1).to({rotation:45.1189,x:228.3655,y:135.5166},0).wait(1).to({rotation:60.1585,x:262.5826,y:120.4934},0).wait(1).to({rotation:75.1981,x:291.4742,y:110.2792},0).wait(1).to({rotation:90.2378,x:316.6636,y:103.4031},0).wait(1).to({rotation:105.2774,x:339.0939,y:99.0115},0).wait(1).to({rotation:120.317,x:359.369,y:96.5584},0).wait(1).to({rotation:135.3567,x:377.9023,y:95.6704},0).wait(1).to({rotation:150.3963,x:394.9913,y:96.0792},0).wait(1).to({rotation:165.4359,x:410.858,y:97.5844},0).wait(1).to({rotation:180.4755,x:425.6735,y:100.032},0).wait(1).to({rotation:195.5152,x:439.5726,y:103.3004},0).wait(1).to({rotation:210.5548,x:452.6641,y:107.2919},0).wait(1).to({rotation:225.5944,x:465.0366,y:111.9265},0).wait(1).to({rotation:240.6341,x:476.7642,y:117.1379},0).wait(1).to({rotation:255.6737,x:487.9089,y:122.8702},0).wait(1).to({rotation:270.7133,x:498.5236,y:129.076},0).wait(1).to({rotation:285.7529,x:508.6536,y:135.7146},0).wait(1).to({rotation:300.7926,x:518.3382,y:142.7506},0).wait(1).to({rotation:315.8322,x:527.6117,y:150.1533},0).wait(1).to({rotation:330.8718,x:536.5044,y:157.8956},0).wait(1).to({rotation:345.9115,x:545.0428,y:165.9537},0).wait(1).to({rotation:360.9511,x:553.2506,y:174.3063},0).wait(1).to({rotation:375.9907,x:561.1491,y:182.9345},0).wait(1).to({rotation:391.0303,x:568.7574,y:191.8211},0).wait(1).to({rotation:406.07,x:576.0925,y:200.9507},0).wait(1).to({rotation:421.1096,x:583.17,y:210.3096,alpha:0.875},0).wait(1).to({rotation:436.1492,x:590.0042,y:219.8849,alpha:0.75},0).wait(1).to({rotation:451.1889,x:596.6078,y:229.6652,alpha:0.625},0).wait(1).to({rotation:466.2285,x:602.9927,y:239.6399,alpha:0.5},0).wait(1).to({rotation:481.2681,x:609.1698,y:249.7993,alpha:0.375},0).wait(1).to({rotation:496.3077,x:615.149,y:260.1345,alpha:0.25},0).wait(1).to({rotation:511.3474,x:620.9396,y:270.6373,alpha:0.125},0).wait(1).to({rotation:526.387,x:626.55,y:281.3,alpha:0},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,80,824.9,441.20000000000005);


(lib.a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_3
	this.instance = new lib.green();
	this.instance.setTransform(-93,390,1,1,29.9992,0,0,5.8,14.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:5.3,regY:15.3,rotation:43.9302,x:114.3,y:226.55},0).wait(1).to({rotation:57.8613,x:171.05,y:194.3},0).wait(1).to({rotation:71.7923,x:210.25,y:175.75},0).wait(1).to({rotation:85.7233,x:240.85,y:163.7},0).wait(1).to({rotation:99.6543,x:266.05,y:155.6},0).wait(1).to({rotation:113.5854,x:287.6,y:150.3},0).wait(1).to({rotation:127.5164,x:306.2,y:147},0).wait(1).to({rotation:141.4474,x:322.75,y:145.25},0).wait(1).to({rotation:155.3784,x:337.55,y:144.7},0).wait(1).to({rotation:169.3095,x:350.75,y:145.25},0).wait(1).to({rotation:183.2405,x:362.7,y:146.65},0).wait(1).to({rotation:197.1715,x:373.6,y:148.8},0).wait(1).to({rotation:211.1026,x:383.55,y:151.55},0).wait(1).to({rotation:225.0336,x:392.65,y:154.85},0).wait(1).to({rotation:238.9646,x:400.9,y:158.6},0).wait(1).to({rotation:252.8956,x:408.5,y:162.8},0).wait(1).to({rotation:266.8267,x:415.55,y:167.35},0).wait(1).to({rotation:280.7577,x:421.95,y:172.2},0).wait(1).to({rotation:294.6887,x:427.85,y:177.35},0).wait(1).to({rotation:308.6198,x:433.3,y:182.7},0).wait(1).to({rotation:322.5508,x:438.35,y:188.35},0).wait(1).to({rotation:336.4818,x:443,y:194.15},0).wait(1).to({rotation:350.4128,x:447.35,y:200.1},0).wait(1).to({rotation:364.3439,x:451.35,y:206.3},0).wait(1).to({rotation:378.2749,x:455.05,y:212.65},0).wait(1).to({rotation:392.2059,x:458.5,y:219.15,alpha:0.75},0).wait(1).to({rotation:406.1369,x:461.65,y:225.8,alpha:0.5},0).wait(1).to({rotation:420.068,x:464.7,y:232.7,alpha:0.25},0).wait(1).to({rotation:433.999,x:467.45,y:239.65,alpha:0},0).to({_off:true},1).wait(1));

	// レイヤー_2_コピー_コピー_コピー_コピー
	this.instance_1 = new lib.pink();
	this.instance_1.setTransform(-134.95,412.05,1,1,0,0,0,5.4,15.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:5.3,rotation:14.1724,x:35,y:279.55},0).wait(1).to({rotation:28.3448,x:87.45,y:254.45},0).wait(1).to({rotation:42.5172,x:124.9,y:240.05},0).wait(1).to({rotation:56.6897,x:154.7,y:230.5},0).wait(1).to({rotation:70.8621,x:179.8,y:223.9},0).wait(1).to({rotation:85.0345,x:201.45,y:219.35},0).wait(1).to({rotation:99.2069,x:220.55,y:216.25},0).wait(1).to({rotation:113.3793,x:237.65,y:214.25},0).wait(1).to({rotation:127.5517,x:253.1,y:213.15},0).wait(1).to({rotation:141.7241,x:267.2,y:212.8},0).wait(1).to({rotation:155.8966,x:280.15,y:212.95},0).wait(1).to({rotation:170.069,x:292.1,y:213.65},0).wait(1).to({rotation:184.2414,x:303.1,y:214.8},0).wait(1).to({rotation:198.4138,x:313.35,y:216.4},0).wait(1).to({rotation:212.5862,x:322.9,y:218.2},0).wait(1).to({rotation:226.7586,x:331.75,y:220.35},0).wait(1).to({rotation:240.931,x:340.05,y:222.7},0).wait(1).to({rotation:255.1034,x:347.9,y:225.4},0).wait(1).to({rotation:269.2759,x:355.2,y:228.2},0).wait(1).to({rotation:283.4483,x:362.05,y:231.25},0).wait(1).to({rotation:297.6207,x:368.45,y:234.5},0).wait(1).to({rotation:311.7931,x:374.55,y:237.85},0).wait(1).to({rotation:325.9655,x:380.2,y:241.4},0).wait(1).to({rotation:340.1379,x:385.6,y:245},0).wait(1).to({rotation:354.3103,x:390.6,y:248.7},0).wait(1).to({rotation:368.4828,x:395.4,y:252.65,alpha:0.75},0).wait(1).to({rotation:382.6552,x:399.9,y:256.6,alpha:0.5},0).wait(1).to({rotation:396.8276,x:404.15,y:260.7,alpha:0.25},0).wait(1).to({rotation:411,x:408.1,y:264.85,alpha:0},0).to({_off:true},1).wait(3));

	// レイヤー_2_コピー_コピー_コピー
	this.instance_2 = new lib.blue();
	this.instance_2.setTransform(-89.95,459.05,1,1,0,0,0,5.4,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:5.3,rotation:14.931,x:78.15,y:327.5},0).wait(1).to({rotation:29.8621,x:129.9,y:303.15},0).wait(1).to({rotation:44.7931,x:166.7,y:289.3},0).wait(1).to({rotation:59.7241,x:196.1,y:280.35},0).wait(1).to({rotation:74.6552,x:220.8,y:274.35},0).wait(1).to({rotation:89.5862,x:242.15,y:270.3},0).wait(1).to({rotation:104.5172,x:261,y:267.75},0).wait(1).to({rotation:119.4483,x:277.9,y:266.3},0).wait(1).to({rotation:134.3793,x:293.15,y:265.7},0).wait(1).to({rotation:149.3103,x:307.15,y:265.8},0).wait(1).to({rotation:164.2414,x:319.9,y:266.55},0).wait(1).to({rotation:179.1724,x:331.75,y:267.75},0).wait(1).to({rotation:194.1034,x:342.65,y:269.35},0).wait(1).to({rotation:209.0345,x:352.8,y:271.4},0).wait(1).to({rotation:223.9655,x:362.25,y:273.7},0).wait(1).to({rotation:238.8966,x:371.1,y:276.35},0).wait(1).to({rotation:253.8276,x:379.35,y:279.2},0).wait(1).to({rotation:268.7586,x:387.15,y:282.3},0).wait(1).to({rotation:283.6897,x:394.4,y:285.6},0).wait(1).to({rotation:298.6207,x:401.3,y:289.15},0).wait(1).to({rotation:313.5517,x:407.75,y:292.8},0).wait(1).to({rotation:328.4828,x:413.8,y:296.65},0).wait(1).to({rotation:343.4138,x:419.55,y:300.55},0).wait(1).to({rotation:358.3448,x:424.95,y:304.65},0).wait(1).to({rotation:373.2759,x:430.05,y:308.85},0).wait(1).to({rotation:388.2069,x:434.8,y:313.2,alpha:0.75},0).wait(1).to({rotation:403.1379,x:439.4,y:317.55,alpha:0.5},0).wait(1).to({rotation:418.069,x:443.7,y:322.15,alpha:0.25},0).wait(1).to({rotation:433,x:447.75,y:326.7,alpha:0},0).to({_off:true},1).wait(4));

	// レイヤー_2_コピー_コピー
	this.instance_3 = new lib.red();
	this.instance_3.setTransform(-183,493.05,1,1,29.9992,0,0,5.4,15.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({regX:5.3,regY:15.3,rotation:43.7233,x:-25.9,y:368.25},0).wait(1).to({rotation:57.4475,x:22.05,y:346.85},0).wait(1).to({rotation:71.1716,x:56.95,y:335},0).wait(1).to({rotation:84.8957,x:85.3,y:327.6},0).wait(1).to({rotation:98.6199,x:109.65,y:322.85},0).wait(1).to({rotation:112.344,x:131.2,y:319.85},0).wait(1).to({rotation:126.0681,x:150.55,y:318.05},0).wait(1).to({rotation:139.7922,x:168.2,y:317.2},0).wait(1).to({rotation:153.5164,x:184.6},0).wait(1).to({rotation:167.2405,x:199.75,y:317.75},0).wait(1).to({rotation:180.9646,x:214,y:318.8},0).wait(1).to({rotation:194.6888,x:227.45,y:320.35},0).wait(1).to({rotation:208.4129,x:240.15,y:322.2},0).wait(1).to({rotation:222.137,x:252.15,y:324.35},0).wait(1).to({rotation:235.8612,x:263.65,y:326.8},0).wait(1).to({rotation:249.5853,x:274.55,y:329.5},0).wait(1).to({rotation:263.3094,x:285,y:332.4},0).wait(1).to({rotation:277.0336,x:295,y:335.45},0).wait(1).to({rotation:290.7577,x:304.65,y:338.65},0).wait(1).to({rotation:304.4818,x:313.85,y:342.05},0).wait(1).to({rotation:318.206,x:322.75,y:345.5},0).wait(1).to({rotation:331.9301,x:331.4,y:349.1},0).wait(1).to({rotation:345.6542,x:339.7,y:352.8},0).wait(1).to({rotation:359.3783,x:347.7,y:356.55},0).wait(1).to({rotation:373.1025,x:355.55,y:360.4},0).wait(1).to({rotation:386.8266,x:363.15,y:364.35,alpha:0.75},0).wait(1).to({rotation:400.5507,x:370.5,y:368.4,alpha:0.5},0).wait(1).to({rotation:414.2749,x:377.7,y:372.45,alpha:0.25},0).wait(1).to({rotation:427.999,x:384.65,y:376.55,alpha:0},0).wait(1));

	// レイヤー_2_コピー
	this.instance_4 = new lib.yellow();
	this.instance_4.setTransform(-32.9,460.2,1,1,0,0,0,5.4,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(1).to({regX:5.3,rotation:14.1034,x:141.25,y:329.2},0).wait(1).to({rotation:28.2069,x:195.85,y:305.35},0).wait(1).to({rotation:42.3103,x:235,y:292},0).wait(1).to({rotation:56.4138,x:266.3,y:283.6},0).wait(1).to({rotation:70.5172,x:292.6,y:278.15},0).wait(1).to({rotation:84.6207,x:315.35,y:274.75},0).wait(1).to({rotation:98.7241,x:335.5,y:272.7},0).wait(1).to({rotation:112.8276,x:353.55,y:271.75},0).wait(1).to({rotation:126.931,x:369.8,y:271.7},0).wait(1).to({rotation:141.0345,x:384.8,y:272.35},0).wait(1).to({rotation:155.1379,x:398.45,y:273.6},0).wait(1).to({rotation:169.2414,x:411.05,y:275.35},0).wait(1).to({rotation:183.3448,x:422.75,y:277.55},0).wait(1).to({rotation:197.4483,x:433.65,y:280.05},0).wait(1).to({rotation:211.5517,x:443.75,y:282.95},0).wait(1).to({rotation:225.6552,x:453.2,y:286.1},0).wait(1).to({rotation:239.7586,x:462.05,y:289.55},0).wait(1).to({rotation:253.8621,x:470.35,y:293.2},0).wait(1).to({rotation:267.9655,x:478.15,y:297.05},0).wait(1).to({rotation:282.069,x:485.45,y:301.1},0).wait(1).to({rotation:296.1724,x:492.35,y:305.35},0).wait(1).to({rotation:310.2759,x:498.8,y:309.7},0).wait(1).to({rotation:324.3793,x:504.9,y:314.2},0).wait(1).to({rotation:338.4828,x:510.7,y:318.85},0).wait(1).to({rotation:352.5862,x:516.05,y:323.6},0).wait(1).to({rotation:366.6897,x:521.2,y:328.5,alpha:0.75},0).wait(1).to({rotation:380.7931,x:526.05,y:333.5,alpha:0.5},0).wait(1).to({rotation:394.8966,x:530.6,y:338.55,alpha:0.25},0).wait(1).to({rotation:409,x:534.9,y:343.75,alpha:0},0).to({_off:true},1).wait(2));

	// レイヤー_2
	this.instance_5 = new lib.white("synched",0);
	this.instance_5.setTransform(-24,406.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:13.3448,x:191.0722,y:245.9455},0).wait(1).to({rotation:26.6897,x:250.3463,y:217.0816},0).wait(1).to({rotation:40.0345,x:291.1599,y:201.277},0).wait(1).to({rotation:53.3793,x:322.8168,y:191.6205},0).wait(1).to({rotation:66.7241,x:348.7708,y:185.6481},0).wait(1).to({rotation:80.069,x:370.7467,y:182.1654},0).wait(1).to({rotation:93.4138,x:389.7494,y:180.4936},0).wait(1).to({rotation:106.7586,x:406.4239,y:180.2064},0).wait(1).to({rotation:120.1034,x:421.2126,y:181.0166},0).wait(1).to({rotation:133.4483,x:434.4344,y:182.7208},0).wait(1).to({rotation:146.7931,x:446.3281,y:185.1692},0).wait(1).to({rotation:160.1379,x:457.0775,y:188.248},0).wait(1).to({rotation:173.4828,x:466.828,y:191.8684},0).wait(1).to({rotation:186.8276,x:475.6967,y:195.9598},0).wait(1).to({rotation:200.1724,x:483.7797,y:200.4651},0).wait(1).to({rotation:213.5172,x:491.1568,y:205.3372},0).wait(1).to({rotation:226.8621,x:497.8952,y:210.537},0).wait(1).to({rotation:240.2069,x:504.0523,y:216.0314},0).wait(1).to({rotation:253.5517,x:509.6771,y:221.7923},0).wait(1).to({rotation:266.8966,x:514.8125,y:227.7956},0).wait(1).to({rotation:280.2414,x:519.4957,y:234.0205},0).wait(1).to({rotation:293.5862,x:523.7594,y:240.4487},0).wait(1).to({rotation:306.931,x:527.6327,y:247.0642},0).wait(1).to({rotation:320.2759,x:531.1414,y:253.8529},0).wait(1).to({rotation:333.6207,x:534.3087,y:260.8023},0).wait(1).to({rotation:346.9655,x:537.1553,y:267.9013,alpha:0.75},0).wait(1).to({rotation:360.3103,x:539.7,y:275.1397,alpha:0.5},0).wait(1).to({rotation:373.6552,x:541.9597,y:282.5087,alpha:0.25},0).wait(1).to({rotation:387,x:543.95,y:290,alpha:0},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,128.6,751,380.6);


// stage content:
(lib.clear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_4
	this.instance = new lib.clear_card_sin();
	this.instance.setTransform(320,333.3,1,1,0,0,0,123,161);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(34).to({scaleX:0.9169},0).wait(1).to({scaleX:0.8339,x:319.95},0).wait(1).to({scaleX:0.7508,x:320},0).wait(1).to({scaleX:0.6677},0).wait(1).to({scaleX:0.5847,x:319.95},0).wait(1).to({scaleX:0.5016,x:320},0).wait(1).to({scaleX:0.4186},0).wait(1).to({scaleX:0.3355,x:319.95},0).wait(1).to({scaleX:0.2524,x:320},0).wait(1).to({scaleX:0.1694},0).wait(1).to({scaleX:0.0863,x:319.95},0).wait(1).to({scaleX:0.0032,x:320},0).to({_off:true},1).wait(1));

	// レイヤー_3
	this.instance_1 = new lib.card();
	this.instance_1.setTransform(320,461.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.2,x:320.2,y:455.95},0).wait(1).to({y:450.6},0).wait(1).to({y:445.3},0).wait(1).to({y:439.95},0).wait(1).to({y:434.6},0).wait(1).to({y:429.3},0).wait(1).to({y:423.95},0).wait(1).to({y:418.6},0).wait(1).to({y:413.3},0).wait(1).to({y:407.95},0).wait(1).to({y:402.6},0).wait(1).to({y:397.3},0).wait(1).to({y:391.95},0).wait(1).to({y:386.6},0).wait(1).to({y:381.3},0).wait(1).to({y:375.95},0).wait(1).to({y:370.6},0).wait(1).to({y:365.3},0).wait(1).to({y:359.95},0).wait(1).to({y:354.6},0).wait(1).to({y:349.3},0).wait(1).to({y:343.95},0).wait(1).to({y:338.6},0).wait(1).to({y:333.3},0).wait(1).to({_off:true},1).wait(47));

	// レイヤー_4_コピー_コピー_コピー_コピー
	this.instance_2 = new lib.a();
	this.instance_2.setTransform(836.7,226.15,0.7675,0.7675,0,0,180,-72.7,419.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true},32).wait(16));

	// レイヤー_5_コピー_コピー_コピー
	this.instance_3 = new lib.b();
	this.instance_3.setTransform(689.7,199.65,0.6667,0.6667,0,0,0,-86,413.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({_off:true},34).wait(16));

	// レイヤー_5_コピー_コピー
	this.instance_4 = new lib.b();
	this.instance_4.setTransform(762.5,273.45,0.6667,0.6667,0,0,0,-86,413.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({_off:true},34).wait(16));

	// レイヤー_4_コピー_コピー_コピー
	this.instance_5 = new lib.a();
	this.instance_5.setTransform(791.15,457.6,0.8765,0.8765,0,0,180,-72.5,419.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({_off:true},32).wait(16));

	// レイヤー_4_コピー_コピー
	this.instance_6 = new lib.a();
	this.instance_6.setTransform(765.5,274.5,1,1,0,0,180,-72.5,419.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({_off:true},34).wait(16));

	// レイヤー_5_コピー
	this.instance_7 = new lib.b();
	this.instance_7.setTransform(699.8,354.4,1,1,0,0,180,-86,413.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({_off:false},0).to({_off:true},34).wait(16));

	// レイヤー_4_コピー_コピー_コピー
	this.instance_8 = new lib.a();
	this.instance_8.setTransform(-263.3,539.85,0.7675,0.7675,0,0,0,-72.7,419.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).to({_off:true},32).wait(16));

	// レイヤー_5_コピー_コピー
	this.instance_9 = new lib.b();
	this.instance_9.setTransform(-150.45,297.35,0.6667,0.6667,0,0,180,-86,413.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({_off:true},30).wait(16));

	// レイヤー_5_コピー
	this.instance_10 = new lib.b();
	this.instance_10.setTransform(-126.45,446.6,0.6667,0.6667,0,0,180,-86,413.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({_off:false},0).to({_off:true},33).wait(17));

	// レイヤー_4_コピー_コピー
	this.instance_11 = new lib.a();
	this.instance_11.setTransform(-161.95,630.75,0.8765,0.8765,0,0,0,-72.5,419.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).to({_off:true},35).wait(17));

	// レイヤー_4_コピー
	this.instance_12 = new lib.a();
	this.instance_12.setTransform(-153.95,447.65,1,1,0,0,0,-72.5,419.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).to({_off:true},35).wait(19));

	// レイヤー_5
	this.instance_13 = new lib.b();
	this.instance_13.setTransform(-61.25,527.55,1,1,0,0,0,-86,413.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({_off:true},35).wait(19));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854.1,679.1);
// library properties:
lib.properties = {
	id: 'CFD63BE2572AD746A8E4C2DDC38F233A',
	width: 640,
	height: 800,
	fps: 60,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/clear/images/clear_card.png", id:"clear_card"},
		{src:"./effectcjs/clear/images/clear_card_back.png", id:"clear_card_back"}
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
an.compositions['CFD63BE2572AD746A8E4C2DDC38F233A'] = {
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
