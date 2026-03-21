// distributor V3
// Global function \
// File version 2.0
function globalFunc(){
	
};

// Declared var to call c2 function
var c2Func = {
	createBGPhysics : "createBGPhysics",
	createBGSkin : "createBGSkin",
	createBGPath : "createBGPath",
	createBGComplete : "createBGComplete"
};

globalFunc.prototype.sortBallAnimationFrame = function(toSortStr){
	//T you can online this like :  globalFunc.prototype.sortBallAnimationFrame= toSortStr=>toSortStr.split(',').sort().join(',');
	let toSortStrArr = toSortStr.split(',');
	return toSortStrArr.sort().join(',');
};

var c2ArrayFunc = [];
globalFunc.prototype.returnJsonFunc = function(bgNickName, local_yPos,s,bgStageMax,local_bgStageTypeStrList){
	
	if( typeof local_bgStageTypeStrList !== "undefined"){
		c2ArrayFunc.push(bgNickName+","+ local_yPos+","+ s+","+ bgStageMax+","+ local_bgStageTypeStrList);
		//console.log("1st ", JSON.stringify(c2ArrayFunc));
	}else{
		c2ArrayFunc.push(bgNickName+","+ local_yPos+","+ s+","+ bgStageMax);
		//console.log("2nd ", JSON.stringify(c2ArrayFunc) );
	}
};

globalFunc.prototype.getNextLevelPackVisual = function(currentLevel) {
    // Determine the range in which the current level falls
    const levelRange = Math.floor((currentLevel - 1) / 10) + 1;

    // Calculate the starting level of the next range
    const nextRangeStart = levelRange * 10 + 1;

    return nextRangeStart;
}

globalFunc.prototype.generateObjects = function(itemCount) {
    const local_horizontalPowerUp = 60;
    const local_crossPowerUp = 40;
    const local_bombPowerUp = 20;

    // Calculate probabilities based on the total of 100%
    const totalProbability = local_horizontalPowerUp + local_crossPowerUp + local_bombPowerUp;

    const probability_horizontalPowerUp = (local_horizontalPowerUp / totalProbability) * 100;
    const probability_crossPowerUp = (local_crossPowerUp / totalProbability) * 100;
    const probability_bombPowerUp = (local_bombPowerUp / totalProbability) * 100;

    // Generate random strings based on probabilities
    const resultStrings = [];

    while (itemCount > 0) {
        const randomNumber = Math.random() * 100;

        if (randomNumber <= probability_horizontalPowerUp && itemCount >= 1) {
            resultStrings.push('horizontal');
            itemCount -= 1;
        } else if (randomNumber <= probability_horizontalPowerUp + probability_crossPowerUp && itemCount >= 2) {
            resultStrings.push('cross');
            itemCount -= 2;
        } else if (randomNumber <= probability_horizontalPowerUp + probability_crossPowerUp + probability_bombPowerUp && itemCount >= 4) {
            resultStrings.push('bomb');
            itemCount -= 4;
        }
    }

    // Your further logic for generating objects goes here based on itemCount
    // for (let i = 0; i < resultStrings.length; i++) {
    //     // Generate and handle objects based on your requirements
    //     console.log('Generating object', i + 1);
    // }

    // Return the generated strings as a comma-separated string
    return resultStrings.join(',');
}
 
globalFunc.prototype.adjustObjectivesProbabilities = function(objectivesString, probabilitiesString) {
  // Parse the input string into an array of {type, count} objects
  var objectives = objectivesString.split(',').map(function(obj) {
    var parts = obj.split('_');
    return { type: parts[0], count: parseInt(parts[1], 10) };
  });

  // Parse the probabilities string into an array of probabilities
  var probabilities = probabilitiesString.split(',').map(function(prob) {
    return parseInt(prob, 10);
  });

  // Ensure that probabilities add up to 100%
  var totalProbability = probabilities.reduce(function(total, prob) {
    return total + prob;
  }, 0);

  if (totalProbability !== 100 && totalProbability !== 0) {
    probabilities = probabilities.map(function(prob) {
      return (prob / totalProbability) * 100;
    });
  }

  // Calculate the total count of elements to spawn
  var totalElements = objectives.reduce(function(total, obj) {
    return total + obj.count;
  }, 0);

  // Calculate the adjusted count for each objective type based on probabilities
  var adjustedObjectives = objectives.map(function(obj, index) {
    var probability = probabilities[index] || 0;

    // Check if totalElements is zero to avoid division by zero
    var adjustedCount = totalElements !== 0 ? Math.round((obj.count / totalElements) * totalElements * (probability / 100)) : 0;

    // Enforce a minimum count of 1 for each type
    adjustedCount = Math.max(adjustedCount, 1);

    return { type: obj.type, count: adjustedCount };
  });

  // Calculate the total adjusted count and scale if necessary
  var totalAdjustedCount = adjustedObjectives.reduce(function(total, obj) {
    return total + obj.count;
  }, 0);

  if (totalAdjustedCount > 15) {
    adjustedObjectives = adjustedObjectives.map(function(obj) {
      return { type: obj.type, count: Math.round((obj.count / totalAdjustedCount) * 15) };
    });
  }

  // Convert the adjusted objectives back to a string
  var adjustedString = adjustedObjectives.map(function(obj) {
    return obj.type + '_' + obj.count;
  }).join(',');

  // Convert the updated probabilities back to a string
  var updatedProbabilitiesString = probabilities.join(',');

  // Return both strings separated by a hyphen
  return adjustedString + '-' + updatedProbabilitiesString;
}


globalFunc.prototype.createBGJS = function(bgStageMax,local_bgStageTypeStrList,local_yPos,local_yPosBackgroundSkin){
	var local_bgStageTypeIndexArray = local_bgStageTypeStrList.toString().split(",");
	var local_bgStageTypeIndexSelected = -1;
	//var c2JsonFunc;
	
	var c2JsonFunc={
		createBGPhysics:[],
		createBGSkin:[],
		createBGPath:[]
	};

	for(var s = 0; s < bgStageMax; s++){
		local_bgStageTypeIndexSelected = local_bgStageTypeIndexArray[s];	
		for(var bgp = 0; bgp < 4; bgp++){
				this.returnJsonFunc("bgp_"+local_bgStageTypeIndexSelected+"_"+bgp.toString(),local_yPos,s,bgStageMax,local_bgStageTypeStrList.toString());
		}	
		c2JsonFunc.createBGPhysics = (c2ArrayFunc);
		c2ArrayFunc = [];
	
		for(var bgsb = 0; bgsb < 6; bgsb++){
				this.returnJsonFunc("bgsb_"+local_bgStageTypeIndexSelected+"_"+bgsb.toString(),local_yPosBackgroundSkin,s,bgStageMax);
		}
		c2JsonFunc.createBGSkin = (c2ArrayFunc);
		c2ArrayFunc = [];

		for(var bg = 0; bg < 6; bg++){
				this.returnJsonFunc("bg_"+s+"_"+bg.toString(),local_yPosBackgroundSkin,s,bgStageMax);
				
		}
		c2JsonFunc.createBGPath = (c2ArrayFunc);
		c2ArrayFunc = [];
		
		local_yPos += (1140 - 68);
		local_yPosBackgroundSkin += 1600 -98;

		//console.log("this  " ,c2JsonFunc);	
		c2_callFunction(c2Func.createBGComplete,[JSON.stringify(c2JsonFunc)]);		
	}	
};



globalFunc.prototype.reverseString = function(str) {
    //T you can online this like :  globalFunc.prototype.reverseString = str => str.split('').reverse().join('');
    var splitString = [];
	var joinArray;
	if(str.length > 1 ){
		splitString = str.split('');
		var reverseArray = splitString.reverse(); 
	    joinArray = reverseArray.join('');
	}else{
		joinArray	=  str;
	}  
    return joinArray;
};

globalFunc.prototype.replaceLastComma = function(balls_pickedFrameStr){ //T in fact it replaces both last and start comma. As the previous one you can online this to avoir setting a var.
	var returnVal;
	returnVal =  balls_pickedFrameStr.replace(/(^,)|(,$)/g,'');

	return returnVal.toString();
};

globalFunc.prototype.returnSortedStr = function(local_ballsTypeProbabilityUpdated){
var rulesStr = local_ballsTypeProbabilityUpdated,
    rulesArr = rulesStr.split(','),
    rulesNewArr = [7];

  for (var i =0;i<rulesArr.length;i++){
      if(i == 0){
        rulesNewArr[i] = (parseInt(rulesArr[i])); 
      }else{
        rulesNewArr[i] = (parseInt(rulesArr[i]) + parseInt(rulesNewArr[i-1]));
      }
  }
  return rulesNewArr.join(',');
};

globalFunc.prototype.returnRandomizedStr = function(local_ballsTypeProbabilityUpdated){
 var arr = local_ballsTypeProbabilityUpdated.split(',');

  // Randomize the array elements
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));    //T what is it ?
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Join the array elements back into a string
  var randomizedStr = arr.join(',');

   return randomizedStr;

};

// globalFunc.prototype.returnRandomizedStr = (str) => str.split(',').sort(v=>Math.random()-0.5).join(',');

var distributorPRNGEngine = "anonymous",
    randPick = function(values, seed, seedStep){
        var _u = 'undefined', rnd=(typeof playtouch === _u || typeof playtouch.seedsField === _u) ? Math.random() : playtouch.seedsField.plant('distributor', seed, distributorPRNGEngine).random(1, 0), t=0, wc=false, order = Object.keys(values).sort();
        for(var i=0; i<order.length;i++){
            if(values[order[i]] === '*'){	wc = order[i]; continue;	}
            t += values[order[i]];
            if(t > rnd) return order[i];
        }
        return wc;
    }, shortNameOf = function(item){
        switch(item){
            case 'freeEgg':return 'e';
            case 'crate_1':return 'c1';
            case 'crate_2':return 'c2';
            case 'cratePower':return 'cp';
            case 'freePowerPrisoner_1':return 'pp1';
            case 'freePowerPrisoner_2':return 'pp2';
            case 'freePowerPrisoner_3':return 'pp3';
            case 'freePrisoner_1':return 'p1';
            case 'freePrisoner_2':return 'p2';
            case 'freePrisoner_3':return 'p3';
            case 'freePrisoner_4':return 'p4';
            case 'tnt':return 't';
            case 'multiColorBall':return 'm';
            case 'jar_0':return 'j0';
            case 'jar_1':return 'j1';
            case 'jar_2':return 'j2';
            case 'jar_3':return 'j3';
            case 'jar_4':return 'j4';
            case 'jar_5':return 'j5';
            case 'jar_6':return 'j6';
            case 'jar_7':return 'j7';
            case 'jar_8':return 'j8';
            case 'jar_9':return 'j9';
            case 'jar_b_0':return 'j0';
            case 'jar_b_1':return 'j1';
            case 'jar_b_2':return 'j2';
            case 'jar_b_3':return 'j3';
            case 'jar_b_4':return 'j4';
            case 'jar_b_5':return 'j5';
            case 'jar_b_6':return 'j6';
            case 'jar_b_7':return 'j7';
            case 'jar_b_8':return 'j8';
            case 'jar_b_9':return 'j9';
            default:'0';
        }
    };

window.getNextSpawn = function (seed, refill, nbToGet, alreadyGotten){
    //console.time("getNextSpawn");
    if(typeof alreadyGotten !== 'number') alreadyGotten = 0;
    // build planned distribution
    var planned = {}, proba = {}, draw=[];
    //probability_ball

	//refill["balls_threshold"]=14;
	//console.log("REFILL : => ");
	//console.log(refill);
	//console.log("nbToGet " +nbToGet);
    if(typeof refill.probability_ball === 'undefined') refill.probability_ball = '*,25,25,25';
    refill.probability_ball.split(",").map(function(b,i){return proba[i+""]=(b==="*")?b:parseFloat(b)/100;});
    if(typeof refill['spawn'] !== 'undefined' && typeof refill.spawn['after'] !== 'undefined'){
        for(var item in refill.spawn.after){
            var cumulativeSum = (function(sum){return function(value){return sum += value;};})(0);			
            if(typeof refill.spawn.after[item] === 'string') refill.spawn.after[item] = refill.spawn.after[item].split(',').map(function(v){return parseInt(v);}).map(cumulativeSum);
			
            for(var j=0; j<refill.spawn.after[item].length; j++){
                var expectedId = refill.spawn.after[item][j];
                if(expectedId<alreadyGotten) continue;// useless to compute for already spawn
                if(expectedId>alreadyGotten+nbToGet+10) break; //useless to go further
                if(typeof planned[expectedId] === 'undefined') planned[expectedId] = [];
                planned[expectedId].push(shortNameOf(item));
            }
        }
    }
    if(typeof refill['spawn'] !== 'undefined' && typeof refill.spawn['loop'] !== 'undefined'){
        for(var item in refill.spawn.loop){
            for(var i=alreadyGotten+1; i<alreadyGotten+nbToGet; i++){
                if(i%refill.spawn.loop[item]===0){
                    if(typeof planned[i] === 'undefined') planned[i] = [];
                    planned[i].push(shortNameOf(item));
                }
            }
        }
    }
    for(var i=alreadyGotten+1; i<=alreadyGotten+nbToGet; i++){
        if(typeof planned[i] === 'undefined'){
            draw.push(randPick(proba, seed+'_'+i));
        }else{
            for(var j=0; j<planned[i].length; j++) draw.push(planned[i][j]);
        }
    }
    //console.timeEnd("getNextSpawn");
    return draw.join(',');
};
window.getInitialSpawn = function (seed, distributor){
	 //  console.time("getInitialSpawn");
    var toDistribute = [], 
        _u = 'undefined',
        balls = (typeof distributor.balls !== _u) ? (distributor.balls+"").split(',') : [],
        jars = (typeof distributor.jar_bType !== _u) ? (distributor.jar_bType+"").split(',') : [],
        prng = (typeof playtouch === _u || typeof playtouch.seedsField === _u) ? Math : playtouch.seedsField.plant('distributor', seed, distributorPRNGEngine);
    for(var color=0; color<balls.length; color++) for(var i=0; i<parseInt(balls[color]); i++) toDistribute.push(color);
    if(typeof distributor.crate !== _u){
        var toPush = (distributor.crate+"").split('').map(function(v){return 'c'+v;});
        for(var i=0; i<toPush.length; i++) toDistribute.push(toPush[i]);
    }
    if(typeof distributor.cratePower !== _u) for(var cp=0; cp<distributor.cratePower; cp++)  toDistribute.push('cp');
    if(typeof distributor.multiColorBall !== _u) for(var m=0; m<distributor.multiColorBall; m++)  toDistribute.push('m');
    if(typeof distributor.freePrisoner !== _u){
        var toPush = (distributor.freePrisoner+"").split('').map(function(v){return 'p'+v;});
        for(var i=0; i<toPush.length; i++) toDistribute.push(toPush[i]);
    }
    if(typeof distributor.freePowerPrisoner !== _u){
        var toPush = (distributor.freePowerPrisoner+"").split('').map(function(v){return 'pp'+v;});
        for(var i=0; i<toPush.length; i++) toDistribute.push(toPush[i]);
    }
    for(var color=0; color<jars.length; color++) for(var i=0; i<parseInt(jars[color]); i++) toDistribute.push('j'+color);
    toDistribute.sort(function(a,b){return prng.random()-.5;});
    var splitA = toDistribute.slice(0, parseInt(toDistribute.length/2)), splitB = toDistribute.slice(parseInt(toDistribute.length/2));
    if(typeof distributor.freeEgg !== _u)for(var e=0; e<distributor.freeEgg; e++)  splitB.push('e');
    if(typeof distributor.tnt !== _u)for(var t=0; t<distributor.tnt; t++)  splitB.push('t');
    splitA.sort(function(a,b){return prng.random()-.5;});
    var toRet = [];
    for(var i=0; i<splitA.length; i++) toRet.push(splitA[i]);
    for(var i=0; i<splitB.length; i++) toRet.push(splitB[i]);
	//	console.timeEnd("getInitialSpawn");
    return toRet.join(',');

};


globalFunc.prototype.checkCollisions = function(jsonData){
	  const balls = Object.values(jsonData);
	  const ballColors = {};

	  for (let i = 0; i < balls.length; i++) {
		const ball = balls[i];
		const color = ball.c;

		if (!ballColors[color]) {
		  ballColors[color] = [ball];
		} else {
		  for (let j = 0; j < ballColors[color].length; j++) {
			const otherBall = ballColors[color][j];

			if (checkCollision(ball, otherBall)) {
			  return true; // Collision detected
			}
		  }

		  ballColors[color].push(ball);
		}
  }

  return false; // No collision detected
		
};


window.checkCollision = function(ball1, ball2) {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;

   return (dx * dx + dy * dy) < ball1.w * ball1.w;
//   const distance = Math.sqrt(dx * dx + dy * dy);
 //   return distance < ball1.w; // Adjust the collision threshold as needed

};
// Game Preparation and External Command lines
///////////////////////////////////////////////////////////
//if (typeof(window.playtouch) !== "object") window.playtouch = {};
window.GlobalFunc = globalFunc;
window.globalFunc = new GlobalFunc();
  /*  if (typeof(window.playtouch) !== "object") window.playtouch = {};
    playtouch.Board = Board;*/
  
    /*
                external command lines    
    To initialise a new board at start of the game ----> 
    window.playtouch.gameMain = (new playtouch.Board()).initLevelFromPack(levelData);

    To move tile 2_0 to grid 1_0 ----> 
    playtouch.gameMain.playerMove("2_0,1_0");

    To get x coordinate corresponding to logic X ----> 
    playtouch.gameMain.computeX(logicX, offsetX, gridCellWidth);

    To get y coordinate corresponding to logic Y ----> 
    playtouch.gameMain.computeY(logicY, offsetY, gridCellHeight);
    
    To get gameData for savegames or board updates ---->
    playtouch.gameMain.exportGameData();

    */
;(function(){
	class Utils {
		constructor(){
			this.timerMatch={};
		}

		//debug utils count time between events
		startTime(tag="default"){
			if(!this.timerMatch[tag]){this.timerMatch[tag] = {lastTime:-1,arr:[],countZero : 0};}
			this.timerMatch[tag].lastTime = window.performance.now();
		}
		endTime(tag="default"){
			if(!this.timerMatch[tag]){return;}
			let time = window.performance.now() - this.timerMatch[tag].lastTime;
			if(time <= 0){this.timerMatch[tag].countZero++;return;}
			this.timerMatch[tag].arr.push(time);
			this.timerMatch[tag].average = this.getTimeAverage(tag);
			this.timerMatch[tag].allTime = this.getAllTime(tag);
			this.timerMatch[tag].sum = this.sumAllTime(tag);
		}
		getTimeAverage(tag="default"){
			if(!this.timerMatch[tag]){return 0;}
			if(this.timerMatch[tag].arr.length <= 0){return 0;}
			return Math.round((this.timerMatch[tag].arr.reduce((a,b)=>a+b)/this.timerMatch[tag].arr.length)*100)/100;
		}
		getAllTime(tag="default"){
			if(!this.timerMatch[tag]){return 0;}
			if(this.timerMatch[tag].arr.length <= 0){return 0;}
			let sort = this.timerMatch[tag].arr.sort((a,b)=>b-a);
			return Math.round((sort[sort.length-1])*100)/100+">"+this.getTimeAverage(tag)+"<"+Math.round((sort[0])*100)/100;
		}
		resetAllTime(tag="default"){
			if(!this.timerMatch[tag]){return ;}
			this.timerMatch[tag].arr = [];
		}
		sumAllTime(tag="default"){
			if(!this.timerMatch[tag]){return 0;}
			if(this.timerMatch[tag].arr.length <= 0){return 0;}
			return this.timerMatch[tag].arr.reduce((sum, a) => sum + a, 0);
		}
		

		//--- life manager
		getLastNotifByName(list,name){
			list = (typeof list == "string") ? JSON.parse(list):list;
			var obj = {name:'',timeEnd:-1};
			for(var i in list){
				if(list[i].state =='active' && list[i].name.indexOf(name) != -1){
					if(list[i].timeEnd > obj.timeEnd){
						obj.name = list[i].name;
						obj.timeEnd = list[i].timeEnd;
					}
				}
			}
			return obj.name;
		}
	}
	if(typeof window.playtouchGame === "undefined"){window.playtouchGame = {};}

	window.playtouchGame.utils = new Utils();
})();