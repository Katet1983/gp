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



(lib.eye_0 = function() {
	this.initialize(img.eye_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.eye_1 = function() {
	this.initialize(img.eye_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.eye_2 = function() {
	this.initialize(img.eye_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.eye_3 = function() {
	this.initialize(img.eye_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.hrad = function() {
	this.initialize(img.hrad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,47);// helper functions:

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


(lib.eye_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgQASQgIgIAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIABAJQgBAKgGAIQgIAHgKAAQgJAAgHgHg");
	mask.setTransform(0.3,0.375);

	// レイヤー_1
	this.instance = new lib.eye_0();
	this.instance.setTransform(-22,-27);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_3_1, new cjs.Rectangle(-2.1,-2.1,4.9,5), null);


(lib.eye_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgRASQgGgIgBgKQABgJAGgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	mask.setTransform(-0.4,0.375);

	// レイヤー_1
	this.instance = new lib.eye_1();
	this.instance.setTransform(-10,-27);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_2_1, new cjs.Rectangle(-2.8,-2.1,4.9,5), null);


(lib.eye_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAeQgMgMAAgSQAAgQAMgNQAMgMAQAAQARAAAMAMQAMANAAAQQAAASgMAMQgMAMgRAAQgQAAgMgMg");
	mask.setTransform(0.075,0.1);

	// レイヤー_1
	this.instance = new lib.eye_2();
	this.instance.setTransform(-22.5,-27);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_1_1, new cjs.Rectangle(-4,-4.1,8.2,8.5), null);


(lib.eye_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAeQgMgMAAgSQAAgQAMgNQAMgMAQAAQARAAAMAMQAMANAAAQQAAASgMAMQgMAMgRAAQgQAAgMgMg");
	mask.setTransform(-0.175,0.1);

	// レイヤー_1
	this.instance = new lib.eye_3();
	this.instance.setTransform(-9.5,-27);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_0_1, new cjs.Rectangle(-4.3,-4.1,8.3,8.5), null);


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

	// 黒
	this.instance = new lib.eye_2_1();
	this.instance.setTransform(19.8,2.15,1,1,0,0,0,15,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 白目
	this.instance_1 = new lib.eye_0_1();
	this.instance_1.setTransform(19.8,2.15,1,1,0,0,0,15.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 黒_1
	this.instance_2 = new lib.eye_3_1();
	this.instance_2.setTransform(19.8,2.15,1,1,0,0,0,3,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 白目_1
	this.instance_3 = new lib.eye_1_1();
	this.instance_3.setTransform(19.8,2.15,1,1,0,0,0,2.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(-5.2,-22.8,50,50), null);


// stage content:
(lib.ari_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// シンボル_1
	this.instance = new lib.シンボル1();
	this.instance.setTransform(16,27.05,1,1,0,0,0,10.8,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:4.3,y:27.15},0).wait(24).to({scaleY:0.8},0).wait(1).to({scaleY:0.6},0).wait(1).to({scaleY:0.4,y:27.1},0).wait(1).to({scaleY:0.2},0).wait(1).to({scaleX:0,scaleY:0,x:5.6,y:-27.1},0).wait(1).to({scaleX:1,scaleY:0.2,x:16,y:27.1},0).wait(1).to({scaleY:0.4},0).wait(1).to({scaleY:0.6,y:27.15},0).wait(1).to({scaleY:0.8},0).wait(1).to({scaleY:1},0).wait(25));

	// あたま
	this.instance_1 = new lib.hrad();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(25,25,25,25);
// library properties:
lib.properties = {
	id: '4AABC82EAA7CDF4D86C93214F923F95E',
	width: 50,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/ari_1/images/eye_0.jpg?1667181973129", id:"eye_0"},
		{src:"./effectcjs/ari_1/images/eye_1.jpg?1667181973129", id:"eye_1"},
		{src:"./effectcjs/ari_1/images/eye_2.jpg?1667181973129", id:"eye_2"},
		{src:"./effectcjs/ari_1/images/eye_3.jpg?1667181973129", id:"eye_3"},
		{src:"./effectcjs/ari_1/images/hrad.png?1667181973129", id:"hrad"}
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
an.compositions['4AABC82EAA7CDF4D86C93214F923F95E'] = {
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