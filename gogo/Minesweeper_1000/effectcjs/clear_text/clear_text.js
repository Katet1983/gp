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



(lib.clear_light = function() {
	this.initialize(img.clear_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,636);


(lib.clear_text_1 = function() {
	this.initialize(img.clear_text_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,179);// helper functions:

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


(lib.light_sin2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.clear_light();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light_sin2, new cjs.Rectangle(0,0,636,636), null);


(lib.clear_text_sin = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.clear_text_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clear_text_sin, new cjs.Rectangle(0,0,475,179), null);


(lib.light_sin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_15
	this.instance = new lib.light_sin2();
	this.instance.setTransform(320,640,1,1,0,0,0,318,318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.7692,x:319.95,y:639.95},0).wait(1).to({rotation:1.5385,x:320,y:640},0).wait(1).to({rotation:2.3077},0).wait(1).to({rotation:3.0769,y:639.95},0).wait(1).to({rotation:3.8462,x:319.95,y:640},0).wait(1).to({rotation:4.6154,y:639.95},0).wait(1).to({rotation:5.3846,y:640},0).wait(1).to({rotation:6.1538,y:639.95},0).wait(1).to({rotation:6.9231,y:640},0).wait(1).to({rotation:7.6923,x:320,y:639.95},0).wait(1).to({rotation:8.4615,y:640},0).wait(1).to({rotation:9.2308},0).wait(1).to({rotation:10,y:639.95},0).wait(1).to({rotation:10.7692},0).wait(1).to({rotation:11.5385,x:319.95},0).wait(1).to({rotation:12.3077,y:640},0).wait(1).to({rotation:13.0769,y:639.95},0).wait(1).to({rotation:13.8462},0).wait(1).to({rotation:14.6154},0).wait(1).to({rotation:15.3846,x:320},0).wait(1).to({rotation:16.1538},0).wait(1).to({rotation:16.9231,y:640},0).wait(1).to({rotation:17.6923,x:319.95,y:639.95},0).wait(1).to({rotation:18.4615,x:320,y:640},0).wait(1).to({rotation:19.2308,x:319.95},0).wait(1).to({rotation:20,y:639.95},0).wait(1).to({rotation:20.7692,x:320,y:640},0).wait(1).to({rotation:21.5385},0).wait(1).to({rotation:22.3077,y:639.95},0).wait(1).to({rotation:23.0769,x:319.95,y:640},0).wait(1).to({rotation:23.8462,x:320,y:639.95},0).wait(1).to({rotation:24.6154},0).wait(1).to({rotation:25.3846},0).wait(1).to({rotation:26.1538},0).wait(1).to({rotation:26.9231,y:640},0).wait(1).to({rotation:27.6923,x:319.95,y:639.95},0).wait(1).to({rotation:28.4615},0).wait(1).to({rotation:29.2308,y:640},0).wait(1).to({rotation:30,x:320},0).wait(1).to({rotation:30.7692,x:319.95},0).wait(1).to({rotation:31.5385,y:639.95},0).wait(1).to({rotation:32.3077},0).wait(1).to({rotation:33.0769},0).wait(1).to({rotation:33.8462,x:320},0).wait(1).to({rotation:34.6154,x:319.95},0).wait(1).to({rotation:35.3846},0).wait(1).to({rotation:36.1538},0).wait(1).to({rotation:36.9231},0).wait(1).to({rotation:37.6923,y:640},0).wait(1).to({rotation:38.4615},0).wait(1).to({rotation:39.2308,y:639.95},0).wait(1).to({rotation:40,x:320},0).wait(1).to({rotation:40.7692,y:640},0).wait(1).to({rotation:41.5385,x:319.95,y:639.95},0).wait(1).to({rotation:42.3077},0).wait(1).to({rotation:43.0769},0).wait(1).to({rotation:43.8462,y:640},0).wait(1).to({rotation:44.6154,y:639.95},0).wait(1).to({rotation:45.3846,x:320},0).wait(1).to({rotation:46.1538,y:640},0).wait(1).to({rotation:46.9231,y:639.95},0).wait(1).to({rotation:47.6923},0).wait(1).to({rotation:48.4615},0).wait(1).to({rotation:49.2308,x:319.95,y:640},0).wait(1).to({rotation:50,y:639.95},0).wait(1).to({rotation:50.7692,x:320},0).wait(1).to({rotation:51.5385,y:640},0).wait(1).to({rotation:52.3077},0).wait(1).to({rotation:53.0769,y:639.95},0).wait(1).to({rotation:53.8462},0).wait(1).to({rotation:54.6154},0).wait(1).to({rotation:55.3846},0).wait(1).to({rotation:56.1538,x:319.95},0).wait(1).to({rotation:56.9231,x:320},0).wait(1).to({rotation:57.6923},0).wait(1).to({rotation:58.4615},0).wait(1).to({rotation:59.2308,y:640},0).wait(1).to({rotation:60,x:319.95},0).wait(1).to({rotation:60.7692,x:320},0).wait(1).to({rotation:61.5385,y:639.95},0).wait(1).to({rotation:62.3077},0).wait(1).to({rotation:63.0769,x:319.95,y:640},0).wait(1).to({rotation:63.8462,y:639.95},0).wait(1).to({rotation:64.6154},0).wait(1).to({rotation:65.3846},0).wait(1).to({rotation:66.1538},0).wait(1).to({rotation:66.9231,x:320,y:640},0).wait(1).to({rotation:67.6923,x:319.95,y:639.95},0).wait(1).to({rotation:68.4615,y:640},0).wait(1).to({rotation:69.2308},0).wait(1).to({rotation:70,x:320,y:639.95},0).wait(1).to({rotation:70.7692,y:640},0).wait(1).to({rotation:71.5385,x:319.95},0).wait(1).to({rotation:72.3077,x:320,y:639.95},0).wait(1).to({rotation:73.0769,x:319.95,y:640},0).wait(1).to({rotation:73.8462,y:639.95},0).wait(1).to({rotation:74.6154},0).wait(1).to({rotation:75.3846,x:320},0).wait(1).to({rotation:76.1538},0).wait(1).to({rotation:76.9231},0).wait(1).to({rotation:77.6923,y:640},0).wait(1).to({rotation:78.4615,y:639.95},0).wait(1).to({rotation:79.2308,x:319.95},0).wait(1).to({rotation:80},0).wait(1).to({rotation:80.7692,y:640},0).wait(1).to({rotation:81.5385},0).wait(1).to({rotation:82.3077,y:639.95},0).wait(1).to({rotation:83.0769,x:320,y:640},0).wait(1).to({rotation:83.8462,y:639.95},0).wait(1).to({rotation:84.6154,y:640},0).wait(1).to({rotation:85.3846,y:639.95},0).wait(1).to({rotation:86.1538,y:640},0).wait(1).to({rotation:86.9231,x:319.95,y:639.95},0).wait(1).to({rotation:87.6923,y:640},0).wait(1).to({rotation:88.4615},0).wait(1).to({rotation:89.2308,x:320,y:639.95},0).wait(1).to({rotation:90,y:640},0).wait(1).to({rotation:90.7692,y:639.95},0).wait(1).to({rotation:91.5385,x:319.95,y:640},0).wait(1).to({rotation:92.3077},0).wait(1).to({rotation:93.0769,x:320},0).wait(1).to({rotation:93.8462,x:319.95,y:639.95},0).wait(1).to({rotation:94.6154,x:320},0).wait(1).to({rotation:95.3846,x:319.95},0).wait(1).to({rotation:96.1538,x:320},0).wait(1).to({rotation:96.9231,x:319.95},0).wait(1).to({rotation:97.6923,x:320,y:640},0).wait(1).to({rotation:98.4615,x:319.95},0).wait(1).to({rotation:99.2308},0).wait(1).to({rotation:100,x:320},0).wait(1).to({rotation:100.7692},0).wait(1).to({rotation:101.5385,y:639.95},0).wait(1).to({rotation:102.3077,x:319.95},0).wait(1).to({rotation:103.0769,x:320},0).wait(1).to({rotation:103.8462},0).wait(1).to({rotation:104.6154},0).wait(1).to({rotation:105.3846,y:640},0).wait(1).to({rotation:106.1538},0).wait(1).to({rotation:106.9231,x:319.95},0).wait(1).to({rotation:107.6923,x:320,y:639.95},0).wait(1).to({rotation:108.4615,x:319.95,y:640},0).wait(1).to({rotation:109.2308,y:639.95},0).wait(1).to({rotation:110,x:320},0).wait(1).to({rotation:110.7692,x:319.95,y:640},0).wait(1).to({rotation:111.5385},0).wait(1).to({rotation:112.3077,x:320},0).wait(1).to({rotation:113.0769,x:319.95,y:639.95},0).wait(1).to({rotation:113.8462,x:320,y:640},0).wait(1).to({rotation:114.6154},0).wait(1).to({rotation:115.3846},0).wait(1).to({rotation:116.1538},0).wait(1).to({rotation:116.9231,x:319.95},0).wait(1).to({rotation:117.6923,x:320,y:639.95},0).wait(1).to({rotation:118.4615},0).wait(1).to({rotation:119.2308,x:319.95},0).wait(1).to({rotation:120,y:640},0).wait(1).to({rotation:120.7692,y:639.95},0).wait(1).to({rotation:121.5385,x:320},0).wait(1).to({rotation:122.3077},0).wait(1).to({rotation:123.0769},0).wait(1).to({rotation:123.8462,y:640},0).wait(1).to({rotation:124.6154,y:639.95},0).wait(1).to({rotation:125.3846},0).wait(1).to({rotation:126.1538},0).wait(1).to({rotation:126.9231},0).wait(1).to({rotation:127.6923,x:319.95},0).wait(1).to({rotation:128.4615},0).wait(1).to({rotation:129.2308,x:320},0).wait(1).to({rotation:130,y:640},0).wait(1).to({rotation:130.7692,x:319.95},0).wait(1).to({rotation:131.5385,x:320,y:639.95},0).wait(1).to({rotation:132.3077},0).wait(1).to({rotation:133.0769},0).wait(1).to({rotation:133.8462,x:319.95},0).wait(1).to({rotation:134.6154,x:320},0).wait(1).to({rotation:135.3846,y:640},0).wait(1).to({rotation:136.1538,x:319.95},0).wait(1).to({rotation:136.9231,x:320},0).wait(1).to({rotation:137.6923},0).wait(1).to({rotation:138.4615},0).wait(1).to({rotation:139.2308,x:319.95,y:639.95},0).wait(1).to({rotation:140,x:320},0).wait(1).to({rotation:140.7692,y:640},0).wait(1).to({rotation:141.5385,x:319.95},0).wait(1).to({rotation:142.3077},0).wait(1).to({rotation:143.0769,x:320},0).wait(1).to({rotation:143.8462},0).wait(1).to({rotation:144.6154},0).wait(1).to({rotation:145.3846},0).wait(1).to({rotation:146.1538,y:639.95},0).wait(1).to({rotation:146.9231,y:640},0).wait(1).to({rotation:147.6923},0).wait(1).to({rotation:148.4615},0).wait(1).to({rotation:149.2308,x:319.95},0).wait(1).to({rotation:150,y:639.95},0).wait(1).to({rotation:150.7692,y:640},0).wait(1).to({rotation:151.5385,x:320},0).wait(1).to({rotation:152.3077},0).wait(1).to({rotation:153.0769,x:319.95,y:639.95},0).wait(1).to({rotation:153.8462,x:320},0).wait(1).to({rotation:154.6154},0).wait(1).to({rotation:155.3846},0).wait(1).to({rotation:156.1538},0).wait(1).to({rotation:156.9231,x:319.95,y:640},0).wait(1).to({rotation:157.6923,x:320,y:639.95},0).wait(1).to({rotation:158.4615,x:319.95},0).wait(1).to({rotation:159.2308},0).wait(1).to({rotation:160,x:320,y:640},0).wait(1).to({rotation:160.7692,x:319.95},0).wait(1).to({rotation:161.5385,y:639.95},0).wait(1).to({rotation:162.3077,x:320,y:640},0).wait(1).to({rotation:163.0769,x:319.95,y:639.95},0).wait(1).to({rotation:163.8462,x:320},0).wait(1).to({rotation:164.6154},0).wait(1).to({rotation:165.3846,y:640},0).wait(1).to({rotation:166.1538},0).wait(1).to({rotation:166.9231},0).wait(1).to({rotation:167.6923,x:319.95},0).wait(1).to({rotation:168.4615,x:320},0).wait(1).to({rotation:169.2308,y:639.95},0).wait(1).to({rotation:170},0).wait(1).to({rotation:170.7692,x:319.95},0).wait(1).to({rotation:171.5385},0).wait(1).to({rotation:172.3077,x:320},0).wait(1).to({rotation:173.0769,x:319.95,y:640},0).wait(1).to({rotation:173.8462,x:320},0).wait(1).to({rotation:174.6154,x:319.95},0).wait(1).to({rotation:175.3846,x:320},0).wait(1).to({rotation:176.1538,x:319.95},0).wait(1).to({rotation:176.9231,x:320,y:639.95},0).wait(1).to({rotation:177.6923,x:319.95},0).wait(1).to({rotation:178.4615},0).wait(1).to({rotation:179.2308,x:320,y:640},0).wait(1).to({rotation:180},0).wait(1).to({rotation:180.7692},0).wait(1).to({rotation:181.5385,x:319.95,y:639.95},0).wait(1).to({rotation:182.3077},0).wait(1).to({rotation:183.0769,y:640},0).wait(1).to({rotation:183.8462,x:320,y:639.95},0).wait(1).to({rotation:184.6154,y:640},0).wait(1).to({rotation:185.3846,y:639.95},0).wait(1).to({rotation:186.1538,y:640},0).wait(1).to({rotation:186.9231,y:639.95},0).wait(1).to({rotation:187.6923,x:319.95,y:640},0).wait(1).to({rotation:188.4615,y:639.95},0).wait(1).to({rotation:189.2308},0).wait(1).to({rotation:190,y:640},0).wait(1).to({rotation:190.7692},0).wait(1).to({rotation:191.5385,x:320},0).wait(1).to({rotation:192.3077,y:639.95},0).wait(1).to({rotation:193.0769,y:640},0).wait(1).to({rotation:193.8462},0).wait(1).to({rotation:194.6154},0).wait(1).to({rotation:195.3846,x:319.95},0).wait(1).to({rotation:196.1538},0).wait(1).to({rotation:196.9231,y:639.95},0).wait(1).to({rotation:197.6923,x:320,y:640},0).wait(1).to({rotation:198.4615,x:319.95,y:639.95},0).wait(1).to({rotation:199.2308,x:320},0).wait(1).to({rotation:200,y:640},0).wait(1).to({rotation:200.7692,x:319.95,y:639.95},0).wait(1).to({rotation:201.5385},0).wait(1).to({rotation:202.3077,y:640},0).wait(1).to({rotation:203.0769,x:320,y:639.95},0).wait(1).to({rotation:203.8462,x:319.95,y:640},0).wait(1).to({rotation:204.6154},0).wait(1).to({rotation:205.3846},0).wait(1).to({rotation:206.1538},0).wait(1).to({rotation:206.9231,y:639.95},0).wait(1).to({rotation:207.6923,x:320,y:640},0).wait(1).to({rotation:208.4615},0).wait(1).to({rotation:209.2308,y:639.95},0).wait(1).to({rotation:210,x:319.95},0).wait(1).to({rotation:210.7692,x:320},0).wait(1).to({rotation:211.5385,y:640},0).wait(1).to({rotation:212.3077},0).wait(1).to({rotation:213.0769},0).wait(1).to({rotation:213.8462,x:319.95},0).wait(1).to({rotation:214.6154,x:320},0).wait(1).to({rotation:215.3846},0).wait(1).to({rotation:216.1538},0).wait(1).to({rotation:216.9231},0).wait(1).to({rotation:217.6923,y:639.95},0).wait(1).to({rotation:218.4615},0).wait(1).to({rotation:219.2308,y:640},0).wait(1).to({rotation:220,x:319.95},0).wait(1).to({rotation:220.7692,y:639.95},0).wait(1).to({rotation:221.5385,x:320,y:640},0).wait(1).to({rotation:222.3077},0).wait(1).to({rotation:223.0769},0).wait(1).to({rotation:223.8462,y:639.95},0).wait(1).to({rotation:224.6154,y:640},0).wait(1).to({rotation:225.3846,x:319.95},0).wait(1).to({rotation:226.1538,y:639.95},0).wait(1).to({rotation:226.9231,y:640},0).wait(1).to({rotation:227.6923},0).wait(1).to({rotation:228.4615},0).wait(1).to({rotation:229.2308,x:320,y:639.95},0).wait(1).to({rotation:230,y:640},0).wait(1).to({rotation:230.7692,x:319.95},0).wait(1).to({rotation:231.5385,y:639.95},0).wait(1).to({rotation:232.3077},0).wait(1).to({rotation:233.0769,y:640},0).wait(1).to({rotation:233.8462},0).wait(1).to({rotation:234.6154},0).wait(1).to({rotation:235.3846},0).wait(1).to({rotation:236.1538,x:320},0).wait(1).to({rotation:236.9231,x:319.95},0).wait(1).to({rotation:237.6923},0).wait(1).to({rotation:238.4615},0).wait(1).to({rotation:239.2308,y:639.95},0).wait(1).to({rotation:240,x:320},0).wait(1).to({rotation:240.7692,x:319.95},0).wait(1).to({rotation:241.5385,y:640},0).wait(1).to({rotation:242.3077},0).wait(1).to({rotation:243.0769,x:320,y:639.95},0).wait(1).to({rotation:243.8462,y:640},0).wait(1).to({rotation:244.6154},0).wait(1).to({rotation:245.3846},0).wait(1).to({rotation:246.1538},0).wait(1).to({rotation:246.9231,x:319.95,y:639.95},0).wait(1).to({rotation:247.6923,x:320,y:640},0).wait(1).to({rotation:248.4615,y:639.95},0).wait(1).to({rotation:249.2308},0).wait(1).to({rotation:250,x:319.95,y:640},0).wait(1).to({rotation:250.7692,y:639.95},0).wait(1).to({rotation:251.5385,x:320},0).wait(1).to({rotation:252.3077,x:319.95,y:640},0).wait(1).to({rotation:253.0769,x:320,y:639.95},0).wait(1).to({rotation:253.8462,y:640},0).wait(1).to({rotation:254.6154},0).wait(1).to({rotation:255.3846,x:319.95},0).wait(1).to({rotation:256.1538},0).wait(1).to({rotation:256.9231},0).wait(1).to({rotation:257.6923,y:639.95},0).wait(1).to({rotation:258.4615,y:640},0).wait(1).to({rotation:259.2308,x:320},0).wait(1).to({rotation:260},0).wait(1).to({rotation:260.7692,y:639.95},0).wait(1).to({rotation:261.5385},0).wait(1).to({rotation:262.3077,y:640},0).wait(1).to({rotation:263.0769,x:319.95,y:639.95},0).wait(1).to({rotation:263.8462,y:640},0).wait(1).to({rotation:264.6154,y:639.95},0).wait(1).to({rotation:265.3846,y:640},0).wait(1).to({rotation:266.1538,y:639.95},0).wait(1).to({rotation:266.9231,x:320,y:640},0).wait(1).to({rotation:267.6923,y:639.95},0).wait(1).to({rotation:268.4615},0).wait(1).to({rotation:269.2308,x:319.95,y:640},0).wait(1).to({rotation:270,x:320},0).wait(1).to({rotation:270.7692},0).wait(1).to({rotation:271.5385,x:320.05,y:639.95},0).wait(1).to({rotation:272.3077},0).wait(1).to({rotation:273.0769,x:320},0).wait(1).to({rotation:273.8462,x:320.05,y:640},0).wait(1).to({rotation:274.6154,x:320},0).wait(1).to({rotation:275.3846,x:320.05},0).wait(1).to({rotation:276.1538,x:320},0).wait(1).to({rotation:276.9231,x:320.05},0).wait(1).to({rotation:277.6923,x:320,y:639.95},0).wait(1).to({rotation:278.4615,x:320.05},0).wait(1).to({rotation:279.2308},0).wait(1).to({rotation:280,x:320},0).wait(1).to({rotation:280.7692},0).wait(1).to({rotation:281.5385,y:640},0).wait(1).to({rotation:282.3077,x:320.05},0).wait(1).to({rotation:283.0769,x:320},0).wait(1).to({rotation:283.8462},0).wait(1).to({rotation:284.6154},0).wait(1).to({rotation:285.3846,y:639.95},0).wait(1).to({rotation:286.1538},0).wait(1).to({rotation:286.9231,x:320.05},0).wait(1).to({rotation:287.6923,x:320,y:640},0).wait(1).to({rotation:288.4615,x:320.05,y:639.95},0).wait(1).to({rotation:289.2308,y:640},0).wait(1).to({rotation:290,x:320},0).wait(1).to({rotation:290.7692,x:320.05,y:639.95},0).wait(1).to({rotation:291.5385},0).wait(1).to({rotation:292.3077,x:320},0).wait(1).to({rotation:293.0769,x:320.05,y:640},0).wait(1).to({rotation:293.8462,x:320,y:639.95},0).wait(1).to({rotation:294.6154},0).wait(1).to({rotation:295.3846},0).wait(1).to({rotation:296.1538},0).wait(1).to({rotation:296.9231,x:320.05},0).wait(1).to({rotation:297.6923,x:320,y:640},0).wait(1).to({rotation:298.4615},0).wait(1).to({rotation:299.2308,x:320.05},0).wait(1).to({rotation:300,y:639.95},0).wait(1).to({rotation:300.7692,y:640},0).wait(1).to({rotation:301.5385,x:320},0).wait(1).to({rotation:302.3077},0).wait(1).to({rotation:303.0769},0).wait(1).to({rotation:303.8462,y:639.95},0).wait(1).to({rotation:304.6154,y:640},0).wait(1).to({rotation:305.3846},0).wait(1).to({rotation:306.1538},0).wait(1).to({rotation:306.9231},0).wait(1).to({rotation:307.6923,x:320.05},0).wait(1).to({rotation:308.4615},0).wait(1).to({rotation:309.2308,x:320},0).wait(1).to({rotation:310,y:639.95},0).wait(1).to({rotation:310.7692,x:320.05},0).wait(1).to({rotation:311.5385,x:320,y:640},0).wait(1).to({rotation:312.3077},0).wait(1).to({rotation:313.0769},0).wait(1).to({rotation:313.8462,x:320.05},0).wait(1).to({rotation:314.6154,x:320},0).wait(1).to({rotation:315.3846,y:639.95},0).wait(1).to({rotation:316.1538,x:320.05},0).wait(1).to({rotation:316.9231,x:320},0).wait(1).to({rotation:317.6923},0).wait(1).to({rotation:318.4615},0).wait(1).to({rotation:319.2308,x:320.05,y:640},0).wait(1).to({rotation:320,x:320},0).wait(1).to({rotation:320.7692,y:639.95},0).wait(1).to({rotation:321.5385,x:320.05},0).wait(1).to({rotation:322.3077},0).wait(1).to({rotation:323.0769,x:320},0).wait(1).to({rotation:323.8462},0).wait(1).to({rotation:324.6154},0).wait(1).to({rotation:325.3846},0).wait(1).to({rotation:326.1538,y:640},0).wait(1).to({rotation:326.9231,y:639.95},0).wait(1).to({rotation:327.6923},0).wait(1).to({rotation:328.4615},0).wait(1).to({rotation:329.2308,x:320.05},0).wait(1).to({rotation:330,y:640},0).wait(1).to({rotation:330.7692,y:639.95},0).wait(1).to({rotation:331.5385,x:320},0).wait(1).to({rotation:332.3077},0).wait(1).to({rotation:333.0769,x:320.05,y:640},0).wait(1).to({rotation:333.8462,x:320},0).wait(1).to({rotation:334.6154},0).wait(1).to({rotation:335.3846},0).wait(1).to({rotation:336.1538},0).wait(1).to({rotation:336.9231,x:320.05,y:639.95},0).wait(1).to({rotation:337.6923,x:320,y:640},0).wait(1).to({rotation:338.4615,x:320.05},0).wait(1).to({rotation:339.2308},0).wait(1).to({rotation:340,x:320,y:639.95},0).wait(1).to({rotation:340.7692,x:320.05},0).wait(1).to({rotation:341.5385,y:640},0).wait(1).to({rotation:342.3077,x:320,y:639.95},0).wait(1).to({rotation:343.0769,x:320.05,y:640},0).wait(1).to({rotation:343.8462,x:320},0).wait(1).to({rotation:344.6154},0).wait(1).to({rotation:345.3846,y:639.95},0).wait(1).to({rotation:346.1538},0).wait(1).to({rotation:346.9231},0).wait(1).to({rotation:347.6923,x:320.05},0).wait(1).to({rotation:348.4615,x:320},0).wait(1).to({rotation:349.2308,y:640},0).wait(1).to({rotation:350},0).wait(1).to({rotation:350.7692,x:320.05},0).wait(1).to({rotation:351.5385},0).wait(1).to({rotation:352.3077,x:320},0).wait(1).to({rotation:353.0769,x:320.05,y:639.95},0).wait(1).to({rotation:353.8462,x:320},0).wait(1).to({rotation:354.6154,x:320.05},0).wait(1).to({rotation:355.3846,x:320},0).wait(1).to({rotation:356.1538,x:320.05},0).wait(1).to({rotation:356.9231,x:320,y:640},0).wait(1).to({rotation:357.6923,x:320.05},0).wait(1).to({rotation:358.4615},0).wait(1).to({rotation:359.2308,x:320,y:639.95},0).wait(1).to({rotation:360,y:640},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,190.3,899.5,899.4000000000001);


// stage content:
(lib.clear_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.clear_text_sin();
	this.instance.setTransform(320.4,402.15,1.23,1.23,0,0,0,237.5,89.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.088,scaleY:1.0931,y:402.1,alpha:0.5},0).wait(1).to({scaleX:1.0583,scaleY:1.0623,alpha:1},0).wait(1).to({scaleX:1.0405,scaleY:1.0436},0).wait(1).to({scaleX:1.0285,scaleY:1.0308},0).wait(1).to({scaleX:1.0198,scaleY:1.0215},0).wait(1).to({scaleX:1.0135,scaleY:1.0147},0).wait(1).to({scaleX:1.0088,scaleY:1.0096},0).wait(1).to({scaleX:1.0054,scaleY:1.0059,y:402.15},0).wait(1).to({scaleX:1.003,scaleY:1.0033,y:402.1},0).wait(1).to({scaleX:1.0014,scaleY:1.0015,y:402.15},0).wait(1).to({scaleX:1.0004,scaleY:1.0005,y:402.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(7).to({y:402.15},0).wait(450));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,153,0)").ss(1,1,1).p("AAZhYIAACxIgwAA");
	this.shape.setTransform(651.35,529.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(37,37,37,0.749)").s().p("EgzYASbMAAAgk2MBmxAAAMAAAAk2g");
	this.shape_1.setTransform(320.025,398.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(469));

	// light
	this.instance_1 = new lib.light_sin();
	this.instance_1.setTransform(322,404.35,1,1,0,0,0,320,640);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(469));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(311.2,486.4,343.59999999999997,236);
// library properties:
lib.properties = {
	id: 'FD1B27C906330A41AA16616BEC9FB6FF',
	width: 640,
	height: 800,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/clear_text/images/clear_light.png", id:"clear_light"},
		{src:"./effectcjs/clear_text/images/clear_text_1.png", id:"clear_text_1"}
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
an.compositions['FD1B27C906330A41AA16616BEC9FB6FF'] = {
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
