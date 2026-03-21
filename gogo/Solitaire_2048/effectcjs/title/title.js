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



(lib.kira = function() {
	this.initialize(img.kira);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,37);// helper functions:

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


(lib.sin_kira = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kira();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sin_kira, new cjs.Rectangle(0,0,30,37), null);


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

	// レイヤー_2_コピー_コピー_コピー
	this.instance = new lib.sin_kira();
	this.instance.setTransform(499.7,131.35,0.5365,0.5365,0,0,0,14.7,18.1);
	this.instance.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15,regY:18.5,x:499.8,y:131.5,alpha:0.6211},0).wait(1).to({alpha:0.6421},0).wait(1).to({alpha:0.6632},0).wait(1).to({alpha:0.6842},0).wait(1).to({alpha:0.7053},0).wait(1).to({alpha:0.7263},0).wait(1).to({alpha:0.7474},0).wait(1).to({alpha:0.7684},0).wait(1).to({alpha:0.7895},0).wait(1).to({alpha:0.8105},0).wait(1).to({alpha:0.8316},0).wait(1).to({alpha:0.8526},0).wait(1).to({alpha:0.8737},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.9158},0).wait(1).to({alpha:0.9368},0).wait(1).to({alpha:0.9579},0).wait(1).to({alpha:0.9789},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.6},0).wait(1));

	// レイヤー_2_コピー_コピー
	this.instance_1 = new lib.sin_kira();
	this.instance_1.setTransform(544.9,160.15,0.7723,0.7723,0,0,0,14.9,18.4);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:15,regY:18.5,x:544.95,y:160.2,alpha:0.7816},0).wait(1).to({alpha:0.7632},0).wait(1).to({alpha:0.7447},0).wait(1).to({alpha:0.7263},0).wait(1).to({alpha:0.7079},0).wait(1).to({alpha:0.6895},0).wait(1).to({alpha:0.6711},0).wait(1).to({alpha:0.6526},0).wait(1).to({alpha:0.6342},0).wait(1).to({alpha:0.6158},0).wait(1).to({alpha:0.5974},0).wait(1).to({alpha:0.5789},0).wait(1).to({alpha:0.5605},0).wait(1).to({alpha:0.5421},0).wait(1).to({alpha:0.5237},0).wait(1).to({alpha:0.5053},0).wait(1).to({alpha:0.4868},0).wait(1).to({alpha:0.4684},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.4675},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.5025},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.5375},0).wait(1).to({alpha:0.555},0).wait(1).to({alpha:0.5725},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.6075},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6425},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.6775},0).wait(1).to({alpha:0.695},0).wait(1).to({alpha:0.7125},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.7475},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.7825},0).wait(1).to({alpha:0.8},0).wait(1));

	// レイヤー_2_コピー
	this.instance_2 = new lib.sin_kira();
	this.instance_2.setTransform(559.05,60.9,1,1,0,0,0,15,18.5);
	this.instance_2.alpha = 0.3516;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.3763},0).wait(1).to({alpha:0.4026},0).wait(1).to({alpha:0.4289},0).wait(1).to({alpha:0.4553},0).wait(1).to({alpha:0.4816},0).wait(1).to({alpha:0.5079},0).wait(1).to({alpha:0.5342},0).wait(1).to({alpha:0.5605},0).wait(1).to({alpha:0.5868},0).wait(1).to({alpha:0.6132},0).wait(1).to({alpha:0.6395},0).wait(1).to({alpha:0.6658},0).wait(1).to({alpha:0.6921},0).wait(1).to({alpha:0.7184},0).wait(1).to({alpha:0.7447},0).wait(1).to({alpha:0.7711},0).wait(1).to({alpha:0.7974},0).wait(1).to({alpha:0.8237},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.35},0).wait(1));

	// レイヤー_2_コピー_コピー
	this.instance_3 = new lib.sin_kira();
	this.instance_3.setTransform(70.2,58.9,0.5365,0.5365,0,0,0,14.8,18.1);
	this.instance_3.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:15,regY:18.5,x:70.25,y:59.05,alpha:0.6211},0).wait(1).to({alpha:0.6421},0).wait(1).to({alpha:0.6632},0).wait(1).to({alpha:0.6842},0).wait(1).to({alpha:0.7053},0).wait(1).to({alpha:0.7263},0).wait(1).to({alpha:0.7474},0).wait(1).to({alpha:0.7684},0).wait(1).to({alpha:0.7895},0).wait(1).to({alpha:0.8105},0).wait(1).to({alpha:0.8316},0).wait(1).to({alpha:0.8526},0).wait(1).to({alpha:0.8737},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.9158},0).wait(1).to({alpha:0.9368},0).wait(1).to({alpha:0.9579},0).wait(1).to({alpha:0.9789},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.6},0).wait(1));

	// レイヤー_2_コピー
	this.instance_4 = new lib.sin_kira();
	this.instance_4.setTransform(85.8,168.25,0.7723,0.7723,0,0,0,14.9,18.4);
	this.instance_4.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:15,regY:18.5,x:85.85,y:168.3,alpha:0.4316},0).wait(1).to({alpha:0.4632},0).wait(1).to({alpha:0.4947},0).wait(1).to({alpha:0.5263},0).wait(1).to({alpha:0.5579},0).wait(1).to({alpha:0.5895},0).wait(1).to({alpha:0.6211},0).wait(1).to({alpha:0.6526},0).wait(1).to({alpha:0.6842},0).wait(1).to({alpha:0.7158},0).wait(1).to({alpha:0.7474},0).wait(1).to({alpha:0.7789},0).wait(1).to({alpha:0.8105},0).wait(1).to({alpha:0.8421},0).wait(1).to({alpha:0.8737},0).wait(1).to({alpha:0.9053},0).wait(1).to({alpha:0.9368},0).wait(1).to({alpha:0.9684},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.67},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.43},0).wait(1).to({alpha:0.4},0).wait(1));

	// レイヤー_2
	this.instance_5 = new lib.sin_kira();
	this.instance_5.setTransform(132.7,145.55,1,1,0,0,0,15,18.5);
	this.instance_5.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.8895},0).wait(1).to({alpha:0.8789},0).wait(1).to({alpha:0.8684},0).wait(1).to({alpha:0.8579},0).wait(1).to({alpha:0.8474},0).wait(1).to({alpha:0.8368},0).wait(1).to({alpha:0.8263},0).wait(1).to({alpha:0.8158},0).wait(1).to({alpha:0.8053},0).wait(1).to({alpha:0.7947},0).wait(1).to({alpha:0.7842},0).wait(1).to({alpha:0.7737},0).wait(1).to({alpha:0.7632},0).wait(1).to({alpha:0.7526},0).wait(1).to({alpha:0.7421},0).wait(1).to({alpha:0.7316},0).wait(1).to({alpha:0.7211},0).wait(1).to({alpha:0.7105},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.89},0).wait(1).to({alpha:0.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(382.3,142.4,191.8,40.29999999999998);
// library properties:
lib.properties = {
	id: '1543357EEE7B6A418C7920AB1DCFF271',
	width: 640,
	height: 200,
	fps: 60,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"./effectcjs/title/images/kira.png", id:"kira"}
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
an.compositions['1543357EEE7B6A418C7920AB1DCFF271'] = {
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
