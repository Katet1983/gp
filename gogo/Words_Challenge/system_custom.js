(function(){
    /*************************************/
  
    
 
  
	var randPick = function(values, seedName){
		var rnd=playtouch.seedsField.random(seedName), t=0, wc=false, order=Object.keys(values).sort();
		for(var i=0; i<order.length;i++){
			if(values[order[i]] === '*'){	wc = order[i]; continue;	}
			t += values[order[i]];
			if(t > rnd) return order[i];
		}
		return wc;
	};

	

	function randomGenerator (seedName,maxRange,minRange){
		if(typeof minRange==="undefined") minRange=0;
		if(typeof playtouch.seedsField !=="undefined" ){ 
		
			return Math.floor(playtouch.seedsField.random(seedName,maxRange,minRange))
		}
		else return Math.floor(Math.random()*maxRange);
	};
    Boolean.prototype.asInt = function(){
        return (this.valueOf()) ? 1 : 0;
    };
   
	var customFunction=function(){};
		customFunction.prototype.version="1.6.0";
		customFunction.prototype.tags="_CF";
		
	customFunction.prototype.setStarOnLvl=function(level,saveData,starNum){
	
		var value,tempStorage,prefixValue,newSave;
		prefixValue=saveData.slice(0,3);
		saveData=saveData.slice(3);
		
		tempStorage=saveData.split("a");
	
		value=tempStorage[level].split("s");
		value[1]=starNum;
		tempStorage[level]=value.join("s");
		
		newSave=prefixValue+tempStorage.join("a");
		return newSave;
	};
	customFunction.prototype.getStarFromData=function(level,saveData){
		
		var value,tempStorage,prefixValue,newSave;
		saveData=saveData.slice(3);
		tempStorage=saveData.split("a");
		value=tempStorage[level].split("s");
		return value[1];
	};
	customFunction.prototype.toMMSS=function(seconds){
		var sec_num = parseInt(seconds, 10);
		var minutes = Math.floor(sec_num / 60);
		var seconds = sec_num % 60;

		if (minutes < 10) { minutes = "0" + minutes; }
		
		if (seconds < 10) { seconds = "0" + seconds; }

		return minutes + ':' + seconds;
		
	};
	customFunction.prototype.getCurrentDate=function(){
		var currentDate = new Date();
		var year = currentDate.getFullYear().toString().slice(-2); // Get the last two digits of the year
		var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
		var date = ('0' + currentDate.getDate()).slice(-2); // Add leading zero if needed
		var formattedDate = date + month + year;

		return formattedDate;
	};
	
	customFunction.prototype.getTotalDaysInYear = function() {
		// Get the current year
		var year = new Date().getFullYear();

		// Check if the current year is a leap year
		return (new Date(year, 1, 29).getDate() === 29) ? 366 : 365;
	};

	customFunction.prototype.getDayBasedOnYear = function() {
		// Create a date object for the current date
		var currentDate = new Date();

		// Extract the day and month
		var month = currentDate.getMonth(); // Already 0-indexed (January = 0)
		var day = currentDate.getDate();    // Day of the month

		// Create a date object with the provided day and month for the current year
		let today = new Date(currentDate.getFullYear(), month, day);  // No need to adjust month

		// January 1st of the current year
		let start = new Date(today.getFullYear(), 0, 1);


		// Calculate the difference in time and convert it to the day of the year
		let dayOfYear = Math.ceil((today - start + 1) / 86400000);  // 86400000 = milliseconds in a day
		//console.log("JS dayOfYear", dayOfYear);
	
		return dayOfYear;
	};
	
	
	customFunction.prototype.getScore=function(levelData,level){
		levelData=levelData.split("_")[1];
		levelData=levelData.substring(5,levelData.length);
		levelData=levelData.replace(/s3/g, '');
		levelData=levelData.replace(/s0/g, '');
		levelData=levelData.replace(/s1/g, '');
		levelData=levelData.replace(/s2/g, '');
		levelData=levelData.split("a");
	    if(typeof levelData[level] !=="undefined")return levelData[level];
		else return 0;
	};
	customFunction.prototype.getStar=function(levelData,level){
		levelData=levelData.split("_")[1];
		levelData=levelData.substring(5,levelData.length);
		levelData=levelData.replace(/a[0-999999999999]|a-1/g, '');
		levelData=levelData.split("s");
		if(typeof levelData[level] !=="undefined")return parseInt(levelData[level]);
		else return 0;
		//levelData=levelData.replace(/s3/g, '');
	};
	customFunction.prototype.filterAvailableIapList=function(iapList,whiteList,blackList,startingID){
		var iapItemArray=iapList.split(",");
		//var newItemArray=[];
		var iapJsonList={};
		
		for(var iapItem of iapItemArray){
			
			if(playtouch.regExp.test(whiteList,"g",iapItem)&&!playtouch.regExp.test(blackList,"g",iapItem)) iapJsonList[iapItem]=startingID;
			startingID++;
		}
		
		return JSON.stringify(iapJsonList);
	};
	customFunction.prototype.getTimeLeft=function(){
		
		var now=new Date();
		
		var midnight=new Date(now.getFullYear(), now.getMonth(), now.getDate());
		
		var seconds=Math.floor((now - midnight) / 1000);
		//console.log(seconds);
		var timeLeft=Math.min(86400-seconds,86400);
		if(timeLeft>0)return timeLeft;
		else return 86400;
		
	};
	customFunction.prototype.getSpineCenterSkin=function(skinList){
		var skinArray=skinList.split(",");
		var skinNum=Math.floor(Math.random()*skinArray.length);
		skinNum=skinArray[skinNum];
		return skinNum;
	};
	customFunction.prototype.getSpineSideSkin=function(skinList,usedSkin){
		
		var skinArray=skinList.split(","),skinNum;
		if(typeof usedSkin!=="undefined"){
			for(var skinIndex in skinArray){
				if(parseInt(skinArray[skinIndex])==parseInt(usedSkin)){
					skinArray.splice(skinIndex,1);
					break;
				}
			}
		}
		
		skinNum=Math.floor(Math.random()*skinArray.length);
		skinList=skinArray[skinNum];
		skinArray.splice(skinNum,1);
		skinNum=Math.floor(Math.random()*skinArray.length);
		skinList+=","+skinArray[skinNum];
		return skinList;
	};
	//can go up to base64
	customFunction.prototype.IntToBase=function(value,base){
		value = parseInt(value);
		var neg = (value < 0); 
		value = Math.abs(value);
    
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var result = '';
    
		do {
			result = chars[value % base] + result;
			value = Math.floor(value / base);
		} while (value > 0);
    
		return neg ? "-" + result : result;
		
	};
	//can go up to base64
	customFunction.prototype.baseToInt = function(value, base){
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var neg = (value[0] === '-');
    
		if (neg) {
			value = value.substring(1);
		}
    
		var result = 0;
		var multiplier = 1;
    
		for (var i = value.length - 1; i >= 0; i--) {
			result += chars.indexOf(value[i]) * multiplier;
			multiplier *= base;
		}
    
		return neg ? -result : result;
	};
	//can go up to base64
	customFunction.prototype.floatToBase = function(value, base, precision = 6) {
		// Separate the integer and fractional parts
		var integerPart = Math.floor(value);
		var fractionalPart = value - integerPart;
    
		// Convert integer part to base
		var integerBase = this.IntToBase(integerPart, base);

		// Define characters for base conversion
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

		// Convert fractional part to base
		var fractionalBase = ".";
		for (var i = 0; i < precision; i++) {
			fractionalPart *= base;
			var digit = Math.floor(fractionalPart);
			fractionalBase += chars[digit];
			fractionalPart -= digit;
		}

		return integerBase + fractionalBase;
	};
	//can go up to base64
	customFunction.prototype.baseToFloat = function(value, base) {
		 // Define characters for base conversion
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

		var parts = value.split('.');
		var integerPart = this.baseToInt(parts[0], base);
		var fractionalPart = 0;

		if (parts.length === 2) {
			var fractionalDigits = parts[1];
			var baseMultiplier = 1 / base;
			for (var i = 0; i < fractionalDigits.length; i++) {
				var digit = chars.indexOf(fractionalDigits[i]);
				fractionalPart += digit * baseMultiplier;
				baseMultiplier /= base;
			}
		}

		return integerPart + fractionalPart;
	};
	customFunction.prototype.getRandomLevel=function(minLevel,maxLevel){
		playtouch.seedsField.plant("challenge",17153819,"anonymous")
		return Math.round(playtouch.seedsField.random("challenge",maxLevel,minLevel));
		
	};
	var decimalConvertor = function(){};
		decimalConvertor.prototype.version="1.1.0";
		decimalConvertor.prototype.tags="_DC";
		
	decimalConvertor.prototype.fixedDecimal=function(value,decimalNum){
		
		return value.toFixed(decimalNum);
		
	};
	
	
	customFunction.prototype.removeValuesAfterKey = function(jsonStringOrObject, key) {
		let data;

		// Parse the JSON string if it's a string, otherwise use it as an object
				data = JSON.parse(jsonStringOrObject);  // Parse the string into an object


		// Create a new object to store the filtered values
		const newData = { "alpha_linkedBy": {} };
		
		// Loop through the alpha_linkedBy object and keep only values before or equal to the given key
		for (let k in data.alpha_linkedBy) {
			if (parseInt(k) <= key) {
				newData.alpha_linkedBy[k] = data.alpha_linkedBy[k];
			}
		}
		
		// Return the filtered data as a stringified JSON
		return JSON.stringify(newData);
	};



	
	 /***************************************************************************************
                           
						   System Custom
  
  ******************************************************************************************/

   window.playtouch.modulesManager.register("_customFunction", new customFunction());
   window.playtouch.modulesManager.register("_decimalConvertor", new decimalConvertor());

	 

})();

/* Dans C2 une première fois
    playtouch = playtouch ||{};
    playtouch.gameMain = new Game();


    // puis 

    playtouch.gameMain.newGame(MaConfigDeNiveau);

    playtouch.gameMain.getPlayable()  (hash.KeyCount)
*/



/// pour tester dans la console
//window.config = {"0":{"x":0,"y":0,"z":0},"1":{"x":0,"y":1,"z":0},"2":{"x":0,"y":2,"z":0},"3":{"x":0,"y":3,"z":0},"4":{"x":0,"y":4,"z":0},"5":{"x":0,"y":5,"z":0},"6":{"x":1,"y":0.5,"z":0},"7":{"x":1,"y":1.5,"z":0},"8":{"x":1,"y":2.5,"z":0},"9":{"x":1,"y":3.5,"z":0},"10":{"x":1,"y":4.5,"z":0},"11":{"x":2,"y":1,"z":0},"12":{"x":2,"y":2,"z":0},"13":{"x":2,"y":3,"z":0},"14":{"x":2,"y":4,"z":0},"15":{"x":3,"y":1.5,"z":0},"16":{"x":3,"y":2.5,"z":0},"17":{"x":3,"y":3.5,"z":0},"18":{"x":4,"y":2,"z":0},"19":{"x":4,"y":3,"z":0},"20":{"x":5,"y":2.5,"z":0},"21":{"x":0,"y":0,"z":1},"22":{"x":0,"y":1,"z":1},"23":{"x":0,"y":2,"z":1},"24":{"x":0,"y":3,"z":1},"25":{"x":0,"y":4,"z":1},"26":{"x":0,"y":5,"z":1},"27":{"x":1,"y":0.5,"z":1},"28":{"x":1,"y":1.5,"z":1},"29":{"x":1,"y":2.5,"z":1},"30":{"x":1,"y":3.5,"z":1},"31":{"x":1,"y":4.5,"z":1},"32":{"x":2,"y":1,"z":1},"33":{"x":2,"y":2,"z":1},"34":{"x":2,"y":3,"z":1},"35":{"x":2,"y":4,"z":1},"36":{"x":3,"y":1.5,"z":1},"37":{"x":3,"y":2.5,"z":1},"38":{"x":3,"y":3.5,"z":1},"39":{"x":4,"y":2,"z":1},"40":{"x":4,"y":3,"z":1},"41":{"x":5,"y":2.5,"z":1},"42":{"x":0,"y":0.5,"z":2},"43":{"x":0,"y":1.5,"z":2},"44":{"x":0,"y":2.5,"z":2},"45":{"x":0,"y":3.5,"z":2},"46":{"x":0,"y":4.5,"z":2},"47":{"x":1,"y":1,"z":2},"48":{"x":1,"y":2,"z":2},"49":{"x":1,"y":3,"z":2},"50":{"x":1,"y":4,"z":2},"51":{"x":2,"y":1.5,"z":2},"52":{"x":2,"y":2.5,"z":2},"53":{"x":2,"y":3.5,"z":2},"54":{"x":3,"y":2,"z":2},"55":{"x":3,"y":3,"z":2},"56":{"x":4,"y":2.5,"z":2},"57":{"x":0,"y":0.5,"z":3},"58":{"x":0,"y":1.5,"z":3},"59":{"x":0,"y":2.5,"z":3},"60":{"x":0,"y":3.5,"z":3},"61":{"x":0,"y":4.5,"z":3},"62":{"x":1,"y":1,"z":3},"63":{"x":1,"y":2,"z":3},"64":{"x":1,"y":3,"z":3},"65":{"x":1,"y":4,"z":3},"66":{"x":2,"y":1.5,"z":3},"67":{"x":2,"y":2.5,"z":3},"68":{"x":2,"y":3.5,"z":3},"69":{"x":3,"y":2,"z":3},"70":{"x":3,"y":3,"z":3},"71":{"x":4,"y":2.5,"z":3}};

/*if(typeof upgradeOldLevel){
    window.upgradeOldLevel = function(oldStylelevel){
        var toRet = [];
        if(typeof oldStylelevel === "string") oldStylelevel = JSON.parse(oldStylelevel);
        for(var aTile in oldStylelevel) if(oldStylelevel.hasOwnProperty(aTile)){
            oldStylelevel[aTile].z = --oldStylelevel[aTile].stair;
            delete  oldStylelevel[aTile].stair;
            toRet.push(oldStylelevel[aTile]);
        }
        return toRet;
    };
}*/

// var game = new Game();
    // game.newGame(config); //return true if success


//game.getPlayable();   //list of playable tiles to highlight (as array)

//game.shuffle(); //return true if success
/*function tries(list,triesNum){
var localCount=0;
   for(var pack in list){
		for (var lvl in list[pack]){
		  if(list[pack][lvl]>=triesNum)localCount++
		
		}
   
   
   }
   console.log(localCount);

}(*/