(function(){
	 var systemCustom = {};
	systemCustom.version = "1.10.0";
	systemCustom.tag = "SC";
	
	systemCustom.init = function(){
		this.C2_RUNTIME = cr_getC2Runtime();
		this.C2_RUNTIME.tickMe(this);
        return this;
	};
		systemCustom.toString = function(){
		
		return "systemCustom";
		
	};
	
	
systemCustom.tick=function(){
	
};

systemCustom.setTextToBoxSize=function(objectUID,step,maxScale){
		var width=0, curScale = Math.max(maxScale,0);
		var tempWidth=0,curWidth=0,sampleChar="", sampleText="";
		if( typeof this.C2_RUNTIME.objectsByUid[objectUID]!=="undefined"){
			var tempObject=this.C2_RUNTIME.objectsByUid[objectUID];
			 var charSet = tempObject.characterSet;
			var textLength = tempObject.text.length;

		for(var i=0; i<charSet.length;i++){
			if (isNaN(parseInt(charSet.charAt(i)))) {
                tempWidth = tempObject.getCharacterWidth(charSet.charAt(i));
                if (tempWidth > curWidth) {
                    curWidth = tempWidth;
                    sampleChar = charSet.charAt(i);
                }
            }
		}
		//for(var i=0; i<tempObject.text.length;i++)
			sampleText=sampleChar.repeat(textLength);
			
		//console.log(sampleText);
		while((width = tempObject.measureWidth(sampleText,curScale))>tempObject.width){
			curScale-=step;
			if(curScale<= 0){return;}
		}
		
		curScale = Math.floor(curScale*100)/100;
		tempObject.type.plugin.acts.SetScale.call(tempObject,curScale);
		}
		
	};
	   window.playtouch.modulesManager.register("_systemCustom",systemCustom.init());
})();