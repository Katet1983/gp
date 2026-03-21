;(function(){

    var word = function() {
		
	}
	
	
	
	word.prototype.checkWordFromDictionaryList = function(wordToCheck,list){
		var newList = list.split(",");
		var isFound = false;
		
		//console.log(wordToCheck, list);
			
		for(var wordPicked of newList) {
			if (wordToCheck === wordPicked) return true;			
		}
		
		return false; //return 0 or 1 depending if found
	};
	
	
	

    if (typeof(window.playtouch) !== "object") window.playtouch = {};
    playtouch.word = new word();
	
	
})();