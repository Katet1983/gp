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



// (lib.BG_pop_black = function() {
// 	this.initialize(img.BG_pop_black);
// }).prototype = p = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,640,1280);


(lib.gameoverbase = function() {
	this.initialize(img.gameoverbase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,400);


(lib.gameovertext = function() {
	this.initialize(img.gameovertext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,71);


(lib.text = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gameovertext();
	this.instance.setTransform(-229,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229,-35.5,458,71);


// (lib.BGB = function(mode,startPosition,loop,reversed) {
// if (loop == null) { loop = true; }
// if (reversed == null) { reversed = false; }
// 	var props = new Object();
// 	props.mode = mode;
// 	props.startPosition = startPosition;
// 	props.labels = {};
// 	props.loop = loop;
// 	props.reversed = reversed;
// 	cjs.MovieClip.apply(this,[props]);

// 	// レイヤー_1
// 	this.instance = new lib.BG_pop_black();
// 	this.instance.setTransform(-320,-640);

// 	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

// 	this._renderFirstFrame();

// }).prototype = p = new cjs.MovieClip();
// p.nominalBounds = new cjs.Rectangle(-320,-640,640,1280);


(lib.base = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gameoverbase();
	this.instance.setTransform(-320,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-200,640,400);


// stage content:
(lib.gameover = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_6
	this.instance = new lib.text("synched",0);
	this.instance.setTransform(960.95,513.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:938.8483},0).wait(1).to({x:916.7466},0).wait(1).to({x:894.6448},0).wait(1).to({x:872.5431},0).wait(1).to({x:850.4414},0).wait(1).to({x:828.3397},0).wait(1).to({x:806.2379},0).wait(1).to({x:784.1362},0).wait(1).to({x:762.0345},0).wait(1).to({x:739.9328},0).wait(1).to({x:717.831},0).wait(1).to({x:695.7293},0).wait(1).to({x:673.6276},0).wait(1).to({x:651.5259},0).wait(1).to({x:629.4241},0).wait(1).to({x:607.3224},0).wait(1).to({x:585.2207},0).wait(1).to({x:563.119},0).wait(1).to({x:541.0172},0).wait(1).to({x:518.9155},0).wait(1).to({x:496.8138},0).wait(1).to({x:474.7121},0).wait(1).to({x:452.6103},0).wait(1).to({x:430.5086},0).wait(1).to({x:408.4069},0).wait(1).to({x:386.3052},0).wait(1).to({x:364.2034},0).wait(1).to({x:342.1017},0).wait(1).to({x:320},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:511.72},0).wait(1).to({y:510.24},0).wait(1).to({y:508.76},0).wait(1).to({y:507.28},0).wait(1).to({y:505.8},0).wait(1).to({y:504.32},0).wait(1).to({y:502.84},0).wait(1).to({y:501.36},0).wait(1).to({y:499.88},0).wait(1).to({y:498.4},0).wait(1).to({y:499.88},0).wait(1).to({y:501.36},0).wait(1).to({y:502.84},0).wait(1).to({y:504.32},0).wait(1).to({y:505.8},0).wait(1).to({y:507.28},0).wait(1).to({y:508.76},0).wait(1).to({y:510.24},0).wait(1).to({y:511.72},0).wait(1).to({y:513.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:511.72},0).wait(1).to({y:510.24},0).wait(1).to({y:508.76},0).wait(1).to({y:507.28},0).wait(1).to({y:505.8},0).wait(1).to({y:504.32},0).wait(1).to({y:502.84},0).wait(1).to({y:501.36},0).wait(1).to({y:499.88},0).wait(1).to({y:498.4},0).wait(1).to({y:499.88},0).wait(1).to({y:501.36},0).wait(1).to({y:502.84},0).wait(1).to({y:504.32},0).wait(1).to({y:505.8},0).wait(1).to({y:507.28},0).wait(1).to({y:508.76},0).wait(1).to({y:510.24},0).wait(1).to({y:511.72},0).wait(1).to({y:513.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// レイヤー_4
	this.instance_1 = new lib.base("synched",0);
	this.instance_1.setTransform(960,640);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:937.931},0).wait(1).to({x:915.8621},0).wait(1).to({x:893.7931},0).wait(1).to({x:871.7241},0).wait(1).to({x:849.6552},0).wait(1).to({x:827.5862},0).wait(1).to({x:805.5172},0).wait(1).to({x:783.4483},0).wait(1).to({x:761.3793},0).wait(1).to({x:739.3103},0).wait(1).to({x:717.2414},0).wait(1).to({x:695.1724},0).wait(1).to({x:673.1034},0).wait(1).to({x:651.0345},0).wait(1).to({x:628.9655},0).wait(1).to({x:606.8966},0).wait(1).to({x:584.8276},0).wait(1).to({x:562.7586},0).wait(1).to({x:540.6897},0).wait(1).to({x:518.6207},0).wait(1).to({x:496.5517},0).wait(1).to({x:474.4828},0).wait(1).to({x:452.4138},0).wait(1).to({x:430.3448},0).wait(1).to({x:408.2759},0).wait(1).to({x:386.2069},0).wait(1).to({x:364.1379},0).wait(1).to({x:342.069},0).wait(1).to({x:320},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// // レイヤー_2
	// this.instance_2 = new lib.BGB("synched",0);
	// this.instance_2.setTransform(320,640);
	// this.instance_2._off = true;

	// this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(116));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,640,960,640);
// library properties:
lib.properties = {
	id: '80C895B65CA4B94B872AC01DBFD5929B',
	width: 640,
	height: 1280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"./effectcjs/gameover/images/gameoverbase.png", id:"gameoverbase"},
		{src:"./effectcjs/gameover/images/gameovertext.png", id:"gameovertext"}
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
an.compositions['80C895B65CA4B94B872AC01DBFD5929B'] = {
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
